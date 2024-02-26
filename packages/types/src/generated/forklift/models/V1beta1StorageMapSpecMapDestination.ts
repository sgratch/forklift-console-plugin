/**
 * 
 * 
 *
 * The version of the OpenAPI document: 
 * Contact Email: 
 * License: 
 *
 * NOTE: This file is auto generated by crdtotypes (https://github.com/yaacov/crdtoapi/).
 * https://github.com/yaacov/crdtoapi/README.crdtotypes
 */

/**
 * Destination storage.
 *
 * @export
 */
export interface V1beta1StorageMapSpecMapDestination {
  /** accessMode
   * Access mode.
   *
   * @required {false}
   * @originalType {string}
   */
  accessMode?: 'ReadWriteOnce' | 'ReadWriteMany' | 'ReadOnlyMany';
  /** storageClass
   * A storage class.
   *
   * @required {true}
   */
  storageClass: string;
  /** volumeMode
   * Volume mode.
   *
   * @required {false}
   * @originalType {string}
   */
  volumeMode?: 'Filesystem' | 'Block';
}