export const ACTIONS = 'actions';
export const ALL_NAMESPACES = 'all-namespaces';
export const API_VERSION = 'apiVersion';
export const ARCHIVED = 'archived';
export const CLUSTER_COUNT = 'clusterCount';
export const CONNECTED = 'connected';
export const CUTOVER = 'cutover';
export const DEFAULT_TRANSFER_NETWORK_ANNOTATION = 'forklift.konveyor.io/defaultTransferNetwork';
export const DEFAULT_TRANSFER_NETWORK = 'defaultTransferNetwork';
export const DESCRIPTION = 'description';
export const FROM = 'from';
export const GVK = 'gvk'; // group version kind
export const HOST_COUNT = 'hostCount';
export const INVENTORY = 'inventory';
export const IS_OWNED_BY_CONTROLLER = 'isOwnedByController';
export const KIND = 'kind';
export const LATEST_MIGRATION = 'latestMigration';
export const MIGRATION_COMPLETED = 'migrationCompleted';
export const MIGRATION_STARTED = 'migrationStarted';
export const NAME = 'name';
export const NAMESPACE = 'namespace';
export const NETWORK_COUNT = 'networkCount';
export const OBJECT = 'object';
export const OWNER = 'owner';
export const OWNER_GVK = 'ownerGvk';
export const MANAGED = 'managed';
export const READY = 'ready';
export const PHASE = 'phase';
export const OWNER_REFERENCES = 'ownerReferences';
export const SECRET_NAME = 'secretName';
export const SHARED_MAPPING_ANNOTATION = 'forklift.konveyor.io/shared';
export const SOURCE = 'source';
export const SOURCE_GVK = 'sourceGvk';
export const SOURCE_READY = 'sourceReady';
export const SOURCE_RESOLVED = 'sourceResolved';
export const STATUS = 'status';
export const STORAGE_COUNT = 'storageCount';
export const TARGET = 'target';
export const TARGET_GVK = 'targetGvk';
export const TARGET_READY = 'targetReady';
export const TARGET_RESOLVED = 'targetResolved';
export const TEMPLATE = 'template';
export const TO = 'to';
export const TYPE = 'type';
export const UID = 'uid';
export const URL = 'url';
export const VALIDATED = 'validated';
export const VM_COUNT = 'vmCount';
export const VM_DONE = 'vmDone';

export const DOCUMENTATION_VERSION = 2.5;

export const HELP_LINK_HREF =
  process.env.BRAND_TYPE !== 'RedHat'
    ? 'https://github.com/kubev2v/forklift.github.io'
    : 'https://access.redhat.com/documentation/en-us/migration_toolkit_for_virtualization/' +
      DOCUMENTATION_VERSION;
