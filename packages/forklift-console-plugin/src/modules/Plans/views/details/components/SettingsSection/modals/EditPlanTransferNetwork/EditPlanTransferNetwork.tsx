import React from 'react';
import { useProviderInventory, useToggle } from 'src/modules/Providers/hooks';
import {
  EditModal,
  EditModalProps,
  ModalInputComponentType,
  OnConfirmHookType,
} from 'src/modules/Providers/modals';
import { useForkliftTranslation } from 'src/utils/i18n';

import {
  Modify,
  OpenShiftNetworkAttachmentDefinition,
  PlanModel,
  V1beta1Plan,
  V1beta1PlanSpecTransferNetwork,
  V1beta1Provider,
} from '@kubev2v/types';
import { K8sModel, k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
import { Dropdown, DropdownItem, DropdownToggle } from '@patternfly/react-core/deprecated';

const onConfirm: OnConfirmHookType = async ({ resource, model, newValue }) => {
  const plan = resource as V1beta1Plan;

  const transferNetwork = plan?.spec?.transferNetwork;
  const op = transferNetwork ? 'replace' : 'add';

  const obj = await k8sPatch({
    model: model,
    resource: resource,
    data: [
      {
        op,
        path: '/spec/transferNetwork',
        value: newValue || undefined,
      },
    ],
  });

  return obj;
};

interface DropdownRendererProps {
  value: string | number;
  onChange: (V1beta1PlanSpecTransferNetwork) => void;
}

const OpenshiftNetworksInputFactory: ({ resource }) => ModalInputComponentType = ({ resource }) => {
  const provider = resource as V1beta1Provider;

  const DropdownRenderer: React.FC<DropdownRendererProps> = ({ value, onChange }) => {
    const [isOpen, onToggle] = useToggle(false);

    const { inventory: networks } = useProviderInventory<OpenShiftNetworkAttachmentDefinition[]>({
      provider,
      // eslint-disable-next-line @cspell/spellchecker
      subPath: 'networkattachmentdefinitions?detail=4',
    });

    const transferNetworks: V1beta1PlanSpecTransferNetwork[] = (networks || []).map((n) => ({
      apiVersion: n.object.apiVersion,
      kind: n.object.kind,
      name: n.name,
      namespace: n.namespace,
      uid: n.uid,
    }));

    const dropdownItems = [
      <DropdownItem
        key={''}
        description={'Use the providers default transfer network'}
        onClick={() => onChange('')}
      >
        {'Providers default'}
      </DropdownItem>,
      ...(transferNetworks || []).map((n) => (
        <DropdownItem key={getNetworkName(n)} description={n.namespace} onClick={() => onChange(n)}>
          {n.name}
        </DropdownItem>
      )),
    ];

    return (
      <Dropdown
        onSelect={onToggle}
        toggle={
          <DropdownToggle id="select network" onToggle={onToggle}>
            {getNetworkName(value)}
          </DropdownToggle>
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
        menuAppendTo="parent"
      />
    );
  };

  return DropdownRenderer;
};

const EditPlanTransferNetwork_: React.FC<EditPlanTransferNetworkProps> = (props) => {
  const { t } = useForkliftTranslation();

  return (
    <EditModal
      {...props}
      jsonPath={getNetworkName}
      title={props?.title || t('Edit migration plan transfer network')}
      label={props?.label || t('Transfer Network')}
      helperText={t('Please choose a NetworkAttachmentDefinition for data transfer.')}
      model={PlanModel}
      onConfirmHook={onConfirm}
      body={t(
        `You can select a migration network. If you do not select a migration network,
        the default migration network is set to the providers default transfer network.`,
      )}
      InputComponent={OpenshiftNetworksInputFactory({ resource: props.destinationProvider })}
    />
  );
};

/**
 * Extracts the network name from a string. The input string can be of the form 'name' or 'namespace/name'.
 *
 * @param {unknown} value - The input string from which the network name is to be extracted.
 * @returns {string} The network name extracted from the input string.
 */
function getNetworkName(value: unknown): string {
  if (!value || typeof value === 'string') {
    return 'Providers default';
  }

  return `${value?.['namespace']}/${value?.['name']}`;
}

export type EditPlanTransferNetworkProps = Modify<
  EditModalProps,
  {
    resource: V1beta1Plan;
    title?: string;
    label?: string;
    model?: K8sModel;
    jsonPath?: string | string[];
    destinationProvider: V1beta1Provider;
  }
>;

export const EditPlanTransferNetwork: React.FC<EditPlanTransferNetworkProps> = (props) => {
  return <EditPlanTransferNetwork_ {...props} />;
};
