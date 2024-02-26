/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
/**
 * 
 * @export
 * @interface V1ResourceRequirements
 */
export interface V1ResourceRequirements {
    /**
     * Limits describes the maximum amount of compute resources allowed. Valid resource keys are "memory" and "cpu".
     * @type {object}
     * @memberof V1ResourceRequirements
     */
    limits?: object;
    /**
     * Don't ask the scheduler to take the guest-management overhead into account. Instead put the overhead only into the container's memory limit. This can lead to crashes if all memory is in use on a node. Defaults to false.
     * @type {boolean}
     * @memberof V1ResourceRequirements
     */
    overcommitGuestOverhead?: boolean;
    /**
     * Requests is a description of the initial vmi resources. Valid resource keys are "memory" and "cpu".
     * @type {object}
     * @memberof V1ResourceRequirements
     */
    requests?: object;
}

/**
 * Check if a given object implements the V1ResourceRequirements interface.
 */
export function instanceOfV1ResourceRequirements(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ResourceRequirementsFromJSON(json: any): V1ResourceRequirements {
    return V1ResourceRequirementsFromJSONTyped(json, false);
}

export function V1ResourceRequirementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ResourceRequirements {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limits': !exists(json, 'limits') ? undefined : json['limits'],
        'overcommitGuestOverhead': !exists(json, 'overcommitGuestOverhead') ? undefined : json['overcommitGuestOverhead'],
        'requests': !exists(json, 'requests') ? undefined : json['requests'],
    };
}

export function V1ResourceRequirementsToJSON(value?: V1ResourceRequirements | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limits': value.limits,
        'overcommitGuestOverhead': value.overcommitGuestOverhead,
        'requests': value.requests,
    };
}
