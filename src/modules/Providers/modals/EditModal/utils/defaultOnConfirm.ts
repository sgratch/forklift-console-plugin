import {
  getValueByJsonPath,
  jsonPathToPatch,
} from 'src/modules/Providers/utils/helpers/getValueByJsonPath';

import {
  type K8sModel,
  k8sPatch,
  type K8sResourceCommon,
} from '@openshift-console/dynamic-plugin-sdk';

import type { OpenApiJsonPath } from '../types';

/**
 * Patches a Kubernetes resource with a new value.
 */
export const defaultOnConfirm = async ({ jsonPath, model, newValue: value, resource }) => {
  const op = getValueByJsonPath(resource, jsonPath) ? 'replace' : 'add';

  return k8sPatch<K8sResourceCommon>({
    data: [
      {
        op,
        path: jsonPathToPatch(jsonPath),
        value,
      },
    ],
    model,
    resource,
  });
};

/**
 * Wraps the defaultOnConfirm method to convert the newValue from string to int before patching.
 */
export const defaultOnConfirmWithIntValue = async ({
  jsonPath,
  model,
  newValue,
  resource,
}: {
  resource: K8sResourceCommon;
  newValue: unknown;
  jsonPath?: OpenApiJsonPath;
  model?: K8sModel;
}) => {
  // Convert the newValue from string to int
  const intValue = parseInt(newValue.toString(), 10);

  // Call the original method with the converted value
  return defaultOnConfirm({ jsonPath, model, newValue: intValue, resource });
};
