function deepCopy(object) {
  const cache = new WeakMap();
  function copy(obj) {
    if (typeof obj !== 'object' || obj === null || obj instanceof HTMLElement) {
      return obj;
    }
    if (obj instanceof Date) {
      return new Date().setTime(obj.getTime());
    }
    if (obj instanceof RegExp) {
      return new RegExp(obj.source, obj.flags);
    }
    if (cache.has(obj)) {
      return cache.get(obj);
    }
    const result = obj instanceof Array ? [] : {};
    cache.set(obj, result);
    if (obj instanceof Array) {
      for (const o of obj) {
        result.push(copy(o));
      }
      return result;
    }
    const keys = Object.keys(obj);
    for (const key of keys) {
      result[key] = copy(obj[key]);
    }
    return result;
  }
  return copy(object);
}
