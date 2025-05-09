import { useEffect, useState } from 'react';

import {
  ForkliftControllerModelGroupVersionKind,
  type V1beta1ForkliftController,
} from '@kubev2v/types';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';

/**
 * Type for the return value of the useK8sWatchProviderNames hook.
 */
type K8sForkliftControllerWatchResult = [
  V1beta1ForkliftController | undefined,
  boolean,
  Error | null,
];

/**
 * React hook to watch K8sProvidersWatchResult resources and return the first one.
 *
 * @returns {K8sProvidersWatchResult} - the first forklift controller CR found.
 */
export const useK8sWatchForkliftController = (): K8sForkliftControllerWatchResult => {
  const [controller, setController] = useState<V1beta1ForkliftController | undefined>(undefined);
  const [controllerLoaded, setLoaded] = useState(false);
  const [controllerLoadError, setLoadError] = useState<Error | null>(null);

  const [controllers, loaded, loadError] = useK8sWatchResource<V1beta1ForkliftController[]>({
    groupVersionKind: ForkliftControllerModelGroupVersionKind,
    isList: true,
    namespaced: true,
  });

  useEffect(() => {
    if (loaded && loadError) {
      handleLoadError(loadError);
    } else if (loaded) {
      handleLoadedForkliftControllers(controllers);
    }
  }, [controllers, loaded, loadError]);

  const handleLoadError = (error: Error | null) => {
    setLoadError(error);
    setLoaded(true);
  };

  const handleLoadedForkliftControllers = (controllers: V1beta1ForkliftController[] | null) => {
    setLoaded(true);

    const [firstController] = controllers ?? [];
    setController(firstController);
  };

  return [controller, controllerLoaded, controllerLoadError];
};
