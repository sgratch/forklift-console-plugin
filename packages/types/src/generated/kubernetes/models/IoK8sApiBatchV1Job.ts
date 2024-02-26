/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
import type { IoK8sApiBatchV1JobSpec } from './IoK8sApiBatchV1JobSpec';
import {
    IoK8sApiBatchV1JobSpecFromJSON,
    IoK8sApiBatchV1JobSpecFromJSONTyped,
    IoK8sApiBatchV1JobSpecToJSON,
} from './IoK8sApiBatchV1JobSpec';
import type { IoK8sApiBatchV1JobStatus } from './IoK8sApiBatchV1JobStatus';
import {
    IoK8sApiBatchV1JobStatusFromJSON,
    IoK8sApiBatchV1JobStatusFromJSONTyped,
    IoK8sApiBatchV1JobStatusToJSON,
} from './IoK8sApiBatchV1JobStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * Job represents the configuration of a single job.
 * @export
 * @interface IoK8sApiBatchV1Job
 */
export interface IoK8sApiBatchV1Job {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiBatchV1Job
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiBatchV1Job
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiBatchV1Job
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiBatchV1JobSpec}
     * @memberof IoK8sApiBatchV1Job
     */
    spec?: IoK8sApiBatchV1JobSpec;
    /**
     * 
     * @type {IoK8sApiBatchV1JobStatus}
     * @memberof IoK8sApiBatchV1Job
     */
    status?: IoK8sApiBatchV1JobStatus;
}

/**
 * Check if a given object implements the IoK8sApiBatchV1Job interface.
 */
export function instanceOfIoK8sApiBatchV1Job(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiBatchV1JobFromJSON(json: any): IoK8sApiBatchV1Job {
    return IoK8sApiBatchV1JobFromJSONTyped(json, false);
}

export function IoK8sApiBatchV1JobFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiBatchV1Job {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiBatchV1JobSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiBatchV1JobStatusFromJSON(json['status']),
    };
}

export function IoK8sApiBatchV1JobToJSON(value?: IoK8sApiBatchV1Job | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiBatchV1JobSpecToJSON(value.spec),
        'status': IoK8sApiBatchV1JobStatusToJSON(value.status),
    };
}
