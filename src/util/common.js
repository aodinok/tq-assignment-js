
/**
 * Check if if given variable is string
 *
 * @export
 * @param {*} it variable to check
 * @returns true if given variable is string, false otherwise
 */
export function isString (it) {
  // normally I would use lodash for this, because it's not so trivial as it seems at first glance
  // but I don't want to introduce new dependency to lodash just to use isString function
  return typeof it === 'string' || it instanceof String
}