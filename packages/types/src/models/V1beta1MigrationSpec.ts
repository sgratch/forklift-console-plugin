/**
 * Forklift API
 * Migration toolkit for virtualization (Forklift) API definitions.
 *
 * The version of the OpenAPI document: 2.4.0
 * Contact Email: kubev2v-dev@redhat.com
 * License: Apache-2.0
 *
 * NOTE: This file is auto generated by crdtotypes (https://github.com/yaacov/crdtoapi/).
 * https://github.com/yaacov/crdtoapi/README.crdtotypes
 */

import { V1beta1MigrationSpecCancel } from './V1beta1MigrationSpecCancel';
import { V1beta1MigrationSpecPlan } from './V1beta1MigrationSpecPlan';

/**
 * MigrationSpec defines the desired state of Migration
 *
 * @export
 */
export interface V1beta1MigrationSpec {
  /** cancel
   * Source reference. Either the ID or Name must be specified.
   *
   * @required {false}
   */
  cancel?: V1beta1MigrationSpecCancel[];
  /** cutover
   * Date and time to finalize a warm migration. If present, this will override the value set on the Plan.
   *
   * @required {false}
   * @format {date-time}
   */
  cutover?: string;
  /** plan
   * Reference to the associated Plan.
   *
   * @required {false}
   */
  plan?: V1beta1MigrationSpecPlan;
}