import type { FC } from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { useForkliftTranslation } from 'src/utils/i18n';

import LoadingSuspend from '@components/LoadingSuspend';
import type { IoK8sApiCoreV1Pod, V1beta1ForkliftController } from '@kubev2v/types';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Card, CardBody, CardHeader, CardTitle } from '@patternfly/react-core';

import { PodsTable } from './PodsTable';

type ControllerCardProps = {
  obj?: V1beta1ForkliftController;
  limit?: number;
};

const ControllerCard: FC<ControllerCardProps> = ({ limit, obj }) => {
  const { t } = useForkliftTranslation();

  const [pods, loaded, loadError] = useK8sWatchResource<IoK8sApiCoreV1Pod[]>({
    isList: true,
    kind: 'Pod',
    limit,
    namespace: obj?.metadata?.namespace,
    namespaced: true,
    selector: { matchLabels: { app: 'forklift' } },
  });

  return (
    <Card className="pf-m-full-height">
      <CardHeader
        actions={{
          actions: limit ? <Link to={'health'}>View all</Link> : null,
        }}
      >
        <CardTitle className="forklift-title">{t('MTV Health')}</CardTitle>
      </CardHeader>
      <LoadingSuspend obj={pods} loaded={loaded} loadError={loadError}>
        <CardBody>
          <PodsTable pods={pods} limit={limit} />
        </CardBody>
      </LoadingSuspend>
    </Card>
  );
};

export default ControllerCard;
