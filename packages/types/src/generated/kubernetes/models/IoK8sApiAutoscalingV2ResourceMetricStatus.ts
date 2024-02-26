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
import type { IoK8sApiAutoscalingV2MetricValueStatus } from './IoK8sApiAutoscalingV2MetricValueStatus';
import {
    IoK8sApiAutoscalingV2MetricValueStatusFromJSON,
    IoK8sApiAutoscalingV2MetricValueStatusFromJSONTyped,
    IoK8sApiAutoscalingV2MetricValueStatusToJSON,
} from './IoK8sApiAutoscalingV2MetricValueStatus';

/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 * @export
 * @interface IoK8sApiAutoscalingV2ResourceMetricStatus
 */
export interface IoK8sApiAutoscalingV2ResourceMetricStatus {
    /**
     * 
     * @type {IoK8sApiAutoscalingV2MetricValueStatus}
     * @memberof IoK8sApiAutoscalingV2ResourceMetricStatus
     */
    current: IoK8sApiAutoscalingV2MetricValueStatus;
    /**
     * name is the name of the resource in question.
     * @type {string}
     * @memberof IoK8sApiAutoscalingV2ResourceMetricStatus
     */
    name: string;
}

/**
 * Check if a given object implements the IoK8sApiAutoscalingV2ResourceMetricStatus interface.
 */
export function instanceOfIoK8sApiAutoscalingV2ResourceMetricStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "current" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function IoK8sApiAutoscalingV2ResourceMetricStatusFromJSON(json: any): IoK8sApiAutoscalingV2ResourceMetricStatus {
    return IoK8sApiAutoscalingV2ResourceMetricStatusFromJSONTyped(json, false);
}

export function IoK8sApiAutoscalingV2ResourceMetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAutoscalingV2ResourceMetricStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'current': IoK8sApiAutoscalingV2MetricValueStatusFromJSON(json['current']),
        'name': json['name'],
    };
}

export function IoK8sApiAutoscalingV2ResourceMetricStatusToJSON(value?: IoK8sApiAutoscalingV2ResourceMetricStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'current': IoK8sApiAutoscalingV2MetricValueStatusToJSON(value.current),
        'name': value.name,
    };
}
