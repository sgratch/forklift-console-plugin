import type { ReactNode } from 'react';

import type { ProviderInventory, V1beta1Provider } from '@kubev2v/types';

export type InventoryDetailsItemProps = {
  resource: V1beta1Provider;
  inventory: ProviderInventory;
  helpContent?: ReactNode;
};
