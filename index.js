const myEach = (collection, callback) => {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      callback(collection[key], key, collection);
    }
  }
  return collection;
};

const myMap = (collection, callback) => {
  let mapped = [];
  myEach(collection, (val, key, coll) => {
    mapped.push(callback(val, key, coll));
  });
  return mapped;
};

const myReduce = (collection, callback, initialValue) => {
  let accumulator = initialValue;
  myEach(collection, (val, key, coll) => {
    if (accumulator === undefined) {
      accumulator = val;
    } else {
      accumulator = callback(accumulator, val, key, coll);
    }
  });
  return accumulator;
};

const myFind = (collection, callback) => {
  let found;
  for (let i = 0; i < collection.length; i++) {
    if (callback(collection[i], i, collection)) {
      found = collection[i];
      break;
    }
  }
  return found;
};

const myFilter = (collection, callback) => {
  let filtered = [];
  myEach(collection, (val, key, coll) => {
    if (callback(val, key, coll)) {
      filtered.push(val);
    }
  });
  return filtered;
};

const mySize = collection => {
  return Array.isArray(collection)
    ? collection.length
    : Object.keys(collection).length;
};

const myFirst = (collection, n) => {
  if (n === undefined) {
    return collection[0];
  } else {
    return collection.slice(0, n);
  }
};

const myLast = (collection, n) => {
  if (n === undefined) {
    return collection[collection.length - 1];
  } else {
    return collection.slice(-n);
  }
};

const myKeys = object => {
  let keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
};

const myValues = object => {
  let values = [];
  for (let key in object) {
    values.push(object[key]);
  }
  return values;
};

module.exports = {
  myEach,
  myMap,
  myReduce,
  myFind,
  myFilter,
  mySize,
  myFirst,
  myLast,
  myKeys,
  myValues
};
