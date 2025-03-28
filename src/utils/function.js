export function isEmpty(obj) {
    return Object.getOwnPropertyNames(obj).length === 0;
  }
  export function isArrayNotBlank(data) {
    return !!(data !== null && data !== undefined && data.length !== 0);
  }