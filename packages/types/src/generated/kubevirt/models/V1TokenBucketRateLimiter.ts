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
 * @interface V1TokenBucketRateLimiter
 */
export interface V1TokenBucketRateLimiter {
    /**
     * Maximum burst for throttle. If it's zero, the component default will be used
     * @type {number}
     * @memberof V1TokenBucketRateLimiter
     */
    burst: number;
    /**
     * QPS indicates the maximum QPS to the apiserver from this client. If it's zero, the component default will be used
     * @type {number}
     * @memberof V1TokenBucketRateLimiter
     */
    qps: number;
}

/**
 * Check if a given object implements the V1TokenBucketRateLimiter interface.
 */
export function instanceOfV1TokenBucketRateLimiter(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "burst" in value;
    isInstance = isInstance && "qps" in value;

    return isInstance;
}

export function V1TokenBucketRateLimiterFromJSON(json: any): V1TokenBucketRateLimiter {
    return V1TokenBucketRateLimiterFromJSONTyped(json, false);
}

export function V1TokenBucketRateLimiterFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1TokenBucketRateLimiter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'burst': json['burst'],
        'qps': json['qps'],
    };
}

export function V1TokenBucketRateLimiterToJSON(value?: V1TokenBucketRateLimiter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'burst': value.burst,
        'qps': value.qps,
    };
}
