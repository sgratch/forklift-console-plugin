// Reference: https://github.com/kubev2v/forklift/blob/3113e867374c560ffbdcd34ef1627cb867893ba5/pkg/controller/plan/validation.go

export enum PlanConditionType {
  Ready = 'Ready',
  NotReady = 'NotReady',
  WarmMigrationNotReady = 'WarmMigrationNotReady',
  NamespaceNotValid = 'NamespaceNotValid',
  TransferNetNotValid = 'TransferNetworkNotValid',
  NetRefNotValid = 'NetworkMapRefNotValid',
  NetMapNotReady = 'NetworkMapNotReady',
  DsMapNotReady = 'StorageMapNotReady',
  DsRefNotValid = 'StorageRefNotValid',
  VMRefNotValid = 'VMRefNotValid',
  VMNotFound = 'VMNotFound',
  VMAlreadyExists = 'VMAlreadyExists',
  VMNetworksNotMapped = 'VMNetworksNotMapped',
  VMStorageNotMapped = 'VMStorageNotMapped',
  VMStorageNotSupported = 'VMStorageNotSupported',
  VMMultiplePodNetworkMappings = 'VMMultiplePodNetworkMappings',
  VMMissingGuestIPs = 'VMMissingGuestIPs',
  VMMissingChangedBlockTracking = 'VMMissingChangedBlockTracking',
  HostNotReady = 'HostNotReady',
  DuplicateVM = 'DuplicateVM',
  NameNotValid = 'TargetNameNotValid',
  HookNotValid = 'HookNotValid',
  HookNotReady = 'HookNotReady',
  HookStepNotValid = 'HookStepNotValid',
  Executing = 'Executing',
  Succeeded = 'Succeeded',
  Failed = 'Failed',
  Canceled = 'Canceled',
  Deleted = 'Deleted',
  Paused = 'Paused',
  Pending = 'Pending',
  Running = 'Running',
  Blocked = 'Blocked',
  Archived = 'Archived',
  unsupportedVersion = 'UnsupportedVersion',
  VDDKInvalid = 'VDDKInvalid',
  ValidatingVDDK = 'ValidatingVDDK',
  VDDKInitImageNotReady = 'VDDKInitImageNotReady',
  VDDKInitImageUnavailable = 'VDDKInitImageUnavailable',
}
