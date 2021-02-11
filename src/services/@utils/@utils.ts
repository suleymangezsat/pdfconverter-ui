/**
 * Normalizes given array to key-value object by putting indexKey as a key and array item as a value
 *
 * @param array - to be assigned as returning objects values.
 * @param indexKey -  to be assigned as returning objects keys.
 * @returns key value object.
 */

export function normalizeArray<T>(array: Array<T>, indexKey: keyof T) {
  const normalizedObject: any = {};
  for (let i = 0; i < array.length; i++) {
    const key = array[i][indexKey];
    normalizedObject[key] = array[i];
  }
  return normalizedObject as { [key: string]: T };
}
