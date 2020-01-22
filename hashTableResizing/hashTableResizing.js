/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.storage = storage;
  result.insert = function(val, key) {
    let i = getIndexBelowMaxForKey(key, storageLimit);
    if (!storage[i]) {
      storage[i] = new Array([val, key]);
    } else {
      storage[i].push([val, key]);
    }
  };

  result.retrieve = function(key) {
    let i = getIndexBelowMaxForKey(key, storageLimit);
    if (Array.isArray(storage[i])) {
      let result;
      storage[i].forEach(tuple => {
        if (tuple[1] === key) {
          result = tuple;
        }
      });
      return result;
    } else {
      return storage[i];
    }
  };

  result.remove = function(key) {
    let i = getIndexBelowMaxForKey(key, storageLimit);
    if (Array.isArray(storage[i])) {
      let result;
      storage[i].forEach((tuple, index) => {
        if (tuple[1] === key) {
          storage[i].splice(index, 1);
          result = tuple;
        }
      });
      return result;
    } else {
      return storage[i].splice(i, 1);
    }
  };

  return result;

};

let ht = new makeHashTable();
ht.insert('max', 'pug');
ht.insert('min', 'pugw');
ht.insert('min2', 'pug2');
ht.insert('min3', 'pug1');
ht.insert('min', 'pug9');
console.log(ht.retrieve('pug'))
console.log(ht.remove('pug9'));
console.log(ht.storage);
