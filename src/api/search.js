import { isString } from '../util/common'

export function fetchSearchResults(query) {
  if (query === undefined || query === '') {
    return Promise.resolve([]);
  }
  if (!isString(query)) {
    throw new TypeError(`query should be a string, not ${typeof query}`);
  }
  // I don't think we should handle additional error cases here
  // we can let them bubble up to the UI and so it can show error message to user
  // with some details what exactly went wrong
  return fetch(`${process.env.REACT_APP_API_ROOT}/products?q=${encodeURIComponent(query)}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Something went wrong! ${response.statusText}`);
      }
      return response.json();
    });
}
