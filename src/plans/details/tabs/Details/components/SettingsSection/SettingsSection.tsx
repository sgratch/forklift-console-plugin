import type { FC } from 'react';
import useGetDeleteAndEditAccessReview from 'src/modules/Providers/hooks/useGetDeleteAndEditAccessReview';
import { ModalHOC } from 'src/modules/Providers/modals/ModalHOC/ModalHOC';

import { PlanModel, type V1beta1Plan } from '@kubev2v/types';
import { DescriptionList } from '@patternfly/react-core';
import { getNamespace } from '@utils/crds/common/selectors';

import usePlanSourceProvider from '../../../../hooks/usePlanSourceProvider';

import NetworkNameTemplateDetailsItem from './components/NetworkNameTemplate/NetworkNameTemplateDetailsItem';
import SharedDisksDetailsItem from './components/PlanMigrateSharedDisks/MigrateSharedDisksDetailsItem';
import TransferNetworkDetailsItem from './components/PlanTransferNetwork/TransferNetworkDetailsItem';
import PreserveClusterCpuModelDetailsItem from './components/PreserveClusterCpuModel/PreserveClusterCpuModelDetailsItem';
import PreserveStaticIPsDetailsItem from './components/PreserveStaticIPs/PreserveStaticIPsDetailsItem';
import PVCNameTemplateDetailsItem from './components/PVCNameTemplate/PVCNameTemplateDetailsItem';
import RawDiskCopyDetailsItem from './components/RawDiskCopy/RawDiskCopyDetailsItem';
import RootDiskDetailsItem from './components/RootDisk/RootDiskDetailsItem';
import SetLUKSEncryptionPasswordsDetailsItem from './components/SetLUKSEncryptionPasswords/SetLUKSEncryptionPasswordsDetailsItem';
import VolumeNameTemplateDetailsItem from './components/VolumeNameTemplate/VolumeNameTemplateDetailsItem';

type SettingsSectionProps = {
  plan: V1beta1Plan;
};

const SettingsSection: FC<SettingsSectionProps> = ({ plan }) => {
  const { sourceProvider } = usePlanSourceProvider(plan);

  const { canPatch } = useGetDeleteAndEditAccessReview({
    model: PlanModel,
    namespace: getNamespace(plan),
  });

  const isVsphere = sourceProvider?.spec?.type === 'vsphere';
  const isOvirt = sourceProvider?.spec?.type === 'ovirt';
  return (
    <ModalHOC>
      <DescriptionList
        columnModifier={{
          default: '2Col',
        }}
      >
        <SetLUKSEncryptionPasswordsDetailsItem
          plan={plan}
          canPatch={canPatch}
          shouldRender={isVsphere}
        />
        <RootDiskDetailsItem plan={plan} canPatch={canPatch} shouldRender={isVsphere} />
        <SharedDisksDetailsItem plan={plan} canPatch={canPatch} shouldRender={isVsphere} />
        <VolumeNameTemplateDetailsItem plan={plan} canPatch={canPatch} shouldRender={isVsphere} />
        <TransferNetworkDetailsItem plan={plan} canPatch={canPatch} />
        <PVCNameTemplateDetailsItem plan={plan} canPatch={canPatch} shouldRender={isVsphere} />
        <PreserveStaticIPsDetailsItem plan={plan} canPatch={canPatch} shouldRender={isVsphere} />
        <NetworkNameTemplateDetailsItem plan={plan} canPatch={canPatch} shouldRender={isVsphere} />
        <PreserveClusterCpuModelDetailsItem
          plan={plan}
          canPatch={canPatch}
          shouldRender={isOvirt}
        />
        <RawDiskCopyDetailsItem plan={plan} canPatch={canPatch} shouldRender={isVsphere} />
      </DescriptionList>
    </ModalHOC>
  );
};

export default SettingsSection;
