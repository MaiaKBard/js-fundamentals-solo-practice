/**
 * Returns true if the number is negative or odd.
 *
 * @param {number} value - The number to check.
 * @returns {boolean} True if negative or odd, else false.
 */
export function isNegativeOrOdd(value) {
  if (value % 2 !== 0 || value < 0) return true;
  return false;
  // your code here
}
// console.log(isNegativeOrOdd(1)); // -> true
// console.log(isNegativeOrOdd(-2)); // -> true
// console.log(isNegativeOrOdd(2)); // -> false
// console.log(isNegativeOrOdd(-3)); // -> true

/**
 * Repeats the given string `count` times.
 *
 * @param {string} string - The string to repeat.
 * @param {number} count - Number of times to repeat the string.
 * @returns {string} The repeated string.
 */
export function repeat(string, count) {
  let newStr = ''
  
  for(let i = 0; i < count; i++){
    newStr += string
  }

  return newStr
}
// console.log(repeat('abc', 3)); // -> 'abcabcabc'
// console.log(repeat('*', 3)); // -> '***'
// console.log(repeat('abc', 0)); // -> ''
// console.log(repeat('', 3)); // -> ''

/**
 * Returns a string that is the reverse of the inputted string.
 *
 * @param {string} string - The string to reverse.
 * @returns {string} The reversed string.
 */
export function reverseString(string) {
  return [...string].reverse().join('')
}

// console.log(reverseString('hello')); // -> 'olleh'
// console.log(reverseString('will')); // -> 'lliw'
// console.log(reverseString('🙈❤️')); // -> ''

/**
 * Accepts an object and returns a new object with keys and values swapped.
 * You can assume all values are strings or numbers with no duplicates.
 *
 * @param {Object} object - The object to reverse.
 * @returns {Object} A new object with keys and values swapped.
 */
export function reverseObject(object) {
  // your code here
  // let key = Object.keys(object);
  // let values = Object.values(object);
  // let output = {};

  // key.forEach((el, i, arr) => {
  //   output[values[i]] = key[i];
  // });

  // return output;

  const output = {}

  for(let key in object){
    output[object[key]] = key
  }

  return output
}
console.log(reverseObject({ a: 1, b: 'c', d: 4 })); // -> { '1': 'a', '4': 'd', 'c': 'b' }

/**
 * Returns `true` if the argument is classified as a number.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} True if value is a number, else false.
 */
export function isNumber(value) {
  // your code here
}
// console.log(isNumber(5)); // -> true
// console.log(isNumber('hi')); // -> false

/**
 * Returns `true` if the argument is classified as a string.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} True if value is a string primitive, else false.
 */
export function isString(value) {
  // your code here
}
// console.log(isString('hi')); // -> true
// console.log(isString(5)); // -> false

/**
 * Returns `true` if the argument is classified as an array object.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} True if value is an array, else false.
 */
export function isArray(value) {
  // your code here
}
// console.log(isArray(5)); // -> false
// console.log(isArray([1, 2, 3])); // -> true

/**
 * Returns true if the argument is classified as an object.
 * Note: Both arrays and functions are classified as objects in JavaScript.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an object, otherwise false.
 */
export function isObject(value) {
  // your code here
}
// console.log(isObject(5)); // -> false
// console.log(isObject([1, 2, 3])); // -> true
// console.log(isObject({})); // -> true

/**
 * Returns `true` if the argument is `null`.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} True if value is null, else false.
 */
export function isNull(value) {
  // your code here
}
// console.log(isNull(null)); // -> true
// console.log(isNull(5)); // -> false

/**
 * Creates a shallow clone of an object. (Don't use the built in `Object.assign`.)
 * Note: Nested objects or arrays will not be deeply cloned.
 *
 * @param {Object} value - The object to clone.
 * @returns {Object} The cloned object.
 */
export function clone(value) {
  // your code here
}
// const users = [{ 'user': 'barney' }, { 'user': 'fred' }];
// const shallowClone = clone(users);
// console.log(shallowClone === users); // -> false
// console.log(shallowClone[0] === users[0]); // -> true

/**
 * Returns the size of a collection.
 * If the argument is an array, returns its length.
 * If the argument is an object, returns the number of its own enumerable properties.
 *
 * @param {Array|Object} collection - The collection to inspect.
 * @returns {number} The size of the collection.
 */
export function size(collection) {
  // your code here
}
// console.log(size([1, 2, 3])); // -> 3
// console.log(size({ a: 1, b: 2 })); // -> 2

/**
 * Gets the index at which the first occurrence of `value` is found in `array`.
 * Returns -1 if the value is not found.
 * Note: Do not use the built-in `indexOf` function.
 *
 * @param {Array} array - The array to search.
 * @param {*} value - The value to locate.
 * @returns {number} The index of the matched value, else -1.
 */
export function indexOf(array, value) {
  // your code here
}
// console.log(indexOf([11, 22, 33], 11)); // -> 0
// console.log(indexOf([11, 22, 33], 5)); // -> -1

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 * If `n` is not specified, defaults to 1.
 *
 * @param {Array} array - The array to query.
 * @param {number} [n=1] - The number of elements to drop.
 * @returns {Array} The slice of `array`.
 */
export function drop(array, n) {
  // your code here
}
// console.log(drop([1, 2, 3])); // -> [2, 3]
// console.log(drop([1, 2, 3], 2)); // -> [3]
// console.log(drop([1, 2, 3], 5)); // -> []
// console.log(drop([1, 2, 3], 0)); // -> [1, 2, 3]

/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 * If `n` is not specified, defaults to 1.
 *
 * @param {Array} array - The array to query.
 * @param {number} [n=1] - The number of elements to drop.
 * @returns {Array} The slice of `array`.
 */
export function dropRight(array, n) {
  // your code here
}
// console.log(dropRight([1, 2, 3])); // -> [1, 2]
// console.log(dropRight([1, 2, 3], 2)); // -> [1]
// console.log(dropRight([1, 2, 3], 5)); // -> []
// console.log(dropRight([1, 2, 3], 0)); // -> [1, 2, 3]

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 * If `n` is not specified, defaults to 1.
 *
 * @param {Array} array - The array to query.
 * @param {number} [n=1] - The number of elements to take.
 * @returns {Array} The slice of `array`.
 */
export function take(array, n) {
  // your code here
}
// console.log(take([1, 2, 3])); // -> [1]
// console.log(take([1, 2, 3], 2)); // -> [1, 2]
// console.log(take([1, 2, 3], 5)); // -> [1, 2, 3]
// console.log(take([1, 2, 3], 0)); // -> []

/**
 * Returns an array containing the elements from `array1` that are not in `array2`.
 *
 * @param {Array} array1 - The array to inspect.
 * @param {Array} array2 - The values to exclude.
 * @returns {Array} The new array of filtered values.
 */
export function difference(array1, array2) {
  // your code here
}
// console.log(difference([0, 1, 2, 3, 4, 5], [3, 5])); // -> [0, 1, 2, 4]

/**
 * Iterates over elements of an array, invoking `callback` for each element.
 * The callback is passed the element, the current index, and the entire array.
 * (Don't use the built in `forEach` method.)
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callback - The function invoked per iteration.
 * @returns {void} - This function does not return a value.
 */
export function forEach(array, callback) {
  // your code here
}
// const callback = function(element, index, array) {
//   console.log(element + ',' + index + ',' + array);
// };
// forEach(['a', 'b', 'c'], callback); // -> 'a,0,a,b,c' 'b,1,a,b,c' 'c,2,a,b,c'

/**
 * Iterates over elements of an array in reverse, invoking `callback` for each element.
 * The callback is passed the element, the current index, and the entire array.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callback - The function invoked per iteration.
 * @returns {void} - This function does not return a value.
 */
export function forEachRight(array, callback) {
  // your code here
}
// const callback = function(element, index, array) {
//   console.log(element + ',' + index + ',' + array);
// };
// forEachRight(['a', 'b', 'c'], callback); // -> 'c,2,a,b,c' 'b,1,a,b,c' 'a,0,a,b,c'

/**
 * Creates an array of values by running each element in `array` through `callback`.
 * The callback is passed the element, the current index, and the entire array.
 * (Don't use the built in `map` method.)
 *
 * Bonus: Use the `forEach` function you wrote above to create `map`.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callback - The function invoked per iteration.
 * @returns {Array} The new mapped array.
 */
export function map(array, callback) {
  // your code here
}
// console.log(map([1, 2, 3], (element, index, array) => {
//   return element * 3;
// })); // -> [3, 6, 9]

/**
 * Iterates over elements of a collection, returning an array or object of all elements the `callback` returns truthy for.
 * - If the input is an array, the output is an array of elements that pass the test.
 * - If the input is an object, the output is an object of key-value pairs that pass the test.
 * The callback is passed the element (or value), the index (or key), and the entire collection.
 * (Don't use the built in `filter` method.)
 *
 * @param {(Array|Object)} collection - The collection to iterate over.
 * @param {Function} callback - The function invoked per iteration.
 * @returns {(Array|Object)} The new filtered collection.
 *
 */
export function filter(collection, callback) {
  // your code here
}
// console.log(filter([1, 2, 3, 4], (element, index, array) => {
//   return element % 2 === 0;
// })); // -> [2, 4]
// console.log(filter({ a: 1, b: 2, c: 3, d: 4 }, (value, key, collection) => {
//   return value % 2 !== 0;
// })); // -> { a: 1, c: 3 }

/**
 * Returns a new collection of elements for which `callback` returns falsy.
 * Works with both arrays and objects:
 * - If the input is an array, the output is an array of elements that fail the test.
 * - If the input is an object, the output is an object of key-value pairs that fail the test.
 * The callback is passed the element (or value), the index (or key), and the entire collection.
 *
 * Bonus: Use the `filter` function you wrote above to create `reject`.
 *
 * @param {(Array|Object)} collection - The collection to iterate over.
 * @param {Function} callback - The function invoked per iteration.
 * @returns {(Array|Object)} The new collection of rejected elements.
 */
export function reject(collection, callback) {
  // your code here
}
// console.log(reject([1, 2, 3, 4], (element, index, collection) => {
//   return element % 2 === 0;
// })); // -> [1, 3]
// console.log(reject({ a: 1, b: 2, c: 3, d: 4 }, (value, key, collection) => {
//   return value % 2 !== 0;
// })); // -> { b: 2, d: 4 }

/**
 * Creates an array without duplicate values. The order of the array is preserved.
 *
 * @param {Array} array - The array to inspect.
 * @returns {Array} The new duplicate-free array.
 */
export function uniq(array) {
  // your code here
}
// console.log(uniq([1, 2, 1])); // -> [1, 2]

/**
 * Gets the value of `key` from all elements in an array of objects.
 *
 * @param {Array} array - The array of objects.
 * @param {string} key - The key to pluck.
 * @returns {Array} The array of plucked values.
 */
export function pluck(array, key) {
  // your code here
}
// console.log(pluck([{ user: 'Bob', age: 20 }, { user: 'Sam', age: 25 }], 'user')); // -> ['Bob', 'Sam']

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 * (Don't use the built in `trim` method or regular expressions.)
 *
 * @param {string} string - The string to trim.
 * @returns {string} The trimmed string.
 */
export function trim(string) {
  // your code here
}
// console.log(trim(' hello ')); // -> 'hello'
// console.log(trim('   hello world ')); // -> 'hello world'

/**
 * Reduces an array to a single value by executing a `callback` function on each element.
 * The `callback` is passed the accumulator, the current element, the current index, and the entire array.
 * If a `start` value is provided, it is used as the initial accumulator value, and iteration starts from the first element.
 * If no `start` value is provided, the first element is used as the accumulator, and iteration starts from the second element.
 * (Don't use the built in `reduce` method.)
 *
 * @param {Array} array - The array to reduce.
 * @param {Function} callback - The function invoked per iteration.
 * @param {*} [start] - The initial value.
 * @returns {*} The accumulated value.
 */
export function reduce(array, callback, start) {
  // your code here
}
// console.log(reduce([1, 2], (accumulator, current) => {
//   return accumulator + current;
// })); // -> 3
// console.log(reduce([1, 2], (accumulator, current) => {
//   return accumulator + current;
// }, 1)); // -> 4

/**
 * Flattens a nested array (one level deep).
 * (Don't use the built-in `flat` method.)
 *
 * @param {Array} array - The array to flatten.
 * @returns {Array} The new flattened array.
 */
export function flatten(array) {
  // your code here
}
// console.log(flatten([1, [2, 3, [4]]])); // -> [1, 2, 3, [4]]

/**
 * Recursively flattens a nested array.
 * (Don't use the built-in `flat` method.)
 *
 * @param {Array} array - The array to flatten.
 * @returns {Array} The new flattened array.
 */
export function flattenDeep(array) {
  // your code here
}
// console.log(flattenDeep([1, [2, 3, [4]]])); // -> [1, 2, 3, 4]

/**
 * Assigns own enumerable properties of source object(s) to the destination object.
 * Subsequent sources overwrite property assignments of previous sources.
 * Note: The function accepts multiple source objects.
 *
 * Bonus: Solve with `reduce`.
 *
 * @param {Object} destination - The destination object.
 * @param {...Object} sources - The source objects.
 * @returns {Object} The extended destination object.
 */
export function extend() {
  // your code here
}
// console.log(extend({ user: 'barney' }, { age: 40 }, { user: 'fred' })); // -> { user: 'fred', age: 40 }

/**
 * Creates a deep clone of `value`, assuming `value` is either an array or an object.
 *
 * @param {Array|Object} value - The array or object to recursively clone.
 * @returns {Array|Object} The deep cloned value.
 */
export function cloneDeep(value) {
  // your code here
}
// const users = [{ user: 'barney' }, { user: 'fred' }];
// const deepClone = cloneDeep(users);
// console.log(deepClone === users); // -> false
// console.log(deepClone[0] === users[0]); // -> false
// console.log(deepClone[0].user === users[0].user); // -> true
// const obj = { a: 1, b: { c: 2 } };
// const clonedObj = cloneDeep(obj);
// console.log(clonedObj === obj); // -> false
// console.log(clonedObj.b === obj.b); // -> false
// console.log(clonedObj.b.c === obj.b.c); // -> true

/**
 * Loops through the `queue`, invoking the functions in order with the `input` number,
 * where the results of each invocation become the next function's input.
 * Additionally, the `queue` should be empty after the function is called.
 *
 * @param {number} input - The initial input value.
 * @param {Function[]} queue - An array of functions to invoke.
 * @returns {*} The result of the final function invocation.
 */
export function applyAndEmpty(input, queue) {
  // your code here
}
// const puzzlers = [
//   (a) => 8 * a - 10,
//   (a) => (a - 3) * (a - 3) * (a - 3),
//   (a) => a * a + 4,
//   (a) => a % 5,
// ];
// console.log(applyAndEmpty(2, puzzlers)); // -> 3

/**
 * Returns a function that is restricted to invoking `func` once.
 * Repeat calls to the function return the value of the first call.
 *
 * @param {Function} func - The function to restrict.
 * @returns {Function} The new restricted function.
 */
export function once(func) {
  // your code here
}

/**
 * Returns a function that when called, will check if it has already computed
 * the result for the given argument and return that value instead if possible.
 *
 * @param {Function} func - The function to have its output memoized.
 * @returns {Function} The new memoized function.
 */
export function memoize(func) {
  // your code here
}

/**
 * Invokes `func` after `wait` milliseconds.
 * Any additional arguments are provided to `func` when it is invoked.
 *
 * @param {Function} func - The function to delay.
 * @param {number} wait - The number of milliseconds to delay invocation.
 * @param {...*} args - The arguments to invoke `func` with.
 */
export function delay(func, wait) {
  // your code here
}
// delay((text) => console.log(text), 1000, 'later'); // -> logs 'later' after one second.

/**
 * Returns a function that only invokes `func` once per every `wait` milliseconds.
 * Additional calls to `func` within the `wait` period should be ignored.
 * Hint: Use the `Date.now()` function to get the current time in milliseconds.
 *
 * @param {Function} func - The function to throttle.
 * @param {number} wait - The number of milliseconds to throttle invocations to.
 * @returns {Function} The new throttled function.
 */
export function throttle(func, wait) {
  // your code here
}

/**
 * Sorts the given array in place in ascending order based on the results of
 * running each element in the array through the provided iterator function.
 *
 * @param {Array} array - The array to sort.
 * @param {Function} iterator - The iteratee function invoked per element.
 *   It should return the value to sort by.
 * @returns {Array} - Returns the sorted array (same array, modified in place).
 */
export function sortBy(array, iterator) {
  // your code here
}
// sortBy([1, 2, 3], (n) => Math.sin(n)); // -> [3, 1, 2]
// const users = [{ user: 'fred' }, { user: 'pebbles' }, { user: 'barney' }];
// pluck(sortBy(users, (user) => user.user), 'user'); // ->['barney', 'fred', 'pebbles']

/**
 * Returns an array of integers from `start` (inclusive) to `stop` (exclusive), incremented (or decremented) by `step`.
 * - If only one argument is provided, it is taken as `stop`, and `start` defaults to 0.
 * - If `step` is not specified, it defaults to 1 (or -1 if `start` > `stop`).
 * - If you'd like a negative range, use a negative `step`.
 *
 * @param {number} [start=0] - The start of the range.
 * @param {number} stop - The end of the range.
 * @param {number} [step=1] - The value to increment or decrement by.
 * @returns {number[]} The range of numbers.
 */
export function range(start, stop, step) {
  // your code here
}
// range(10); // -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// range(1, 11); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// range(0, 30, 5); // -> [0, 5, 10, 15, 20, 25]
// range(0, -10, -1); // -> [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

/**
 * Splits an array into two arrays based on whether the elements satisfy the given predicate function.
 * Note: Use two functions that you previously created in this unit.
 *
 * @param {Array} array - The array to partition.
 * @param {Function} predicate - The function invoked per element to determine partitioning.
 * @returns {Array[]} - Returns an array containing two sub-arrays:
 *   the first with elements that satisfy the predicate,
 *   and the second with elements that do not.
 */
export function partition(array, predicate) {
  // your code here
}
// partition([0, 1, 2, 3, 4, 5, 6], (element) => element % 2 === 0); // -> [[0, 2, 4, 6], [1, 3, 5]]

/**
 * Receives a variable number of arrays and returns an array containing every item shared between all passed-in arrays.
 *
 * @param {...Array} arrays - The arrays to inspect.
 * @returns {Array} - Returns an array of shared values.
 */
export function intersection() {
  // your code here
}
// intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]); // -> [1, 2]

/**
 * Returns an array of grouped elements, where the first sub-array contains the first elements of the given arrays,
 * the second sub-array contains the second elements of the given arrays, and so on. You can assume that
 * each array will have the same number of elements.
 *
 * @param {...Array} arrays - The arrays to process.
 * @returns {Array[]} - Returns the new array of grouped elements.
 */
export function zip() {
  // your code here
}
// zip(['fred', 'barney'], [30, 40], [true, false]); // -> [['fred', 30, true], ['barney', 40, false]]

/**
 * Returns a function that will only be executed after it is called `count` or more times.
 * Subsequent calls to the function will continue to execute `func`.
 *
 * @param {number} count - The number of calls before `func` is invoked.
 * @param {Function} func - The function to restrict.
 * @returns {Function} The new restricted function.
 */
export function after(count, func) {
  // your code here
}
// const called = function() { console.log('hello'); };
// const afterCalled = after(3, called);
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed
// afterCalled(); // -> 'hello' is printed

/**
 * Returns a function that invokes `func` at most `count` times.
 * After reaching the limit, the result of the last function call is returned for subsequent calls without invoking `func` again.
 *
 * @param {number} count - The maximum number of times `func` can be called.
 * @param {Function} func - The function to restrict.
 * @returns {Function} The new restricted function.
 */
export function before(count, func) {
  // your code here
}
// let count = 0;
// const printAndIncrementCount = function() { console.log(count++); };
// const beforePrintAndIncrementCount = before(2, printAndIncrementCount);
// beforePrintAndIncrementCount(); // -> 0
// beforePrintAndIncrementCount(); // -> 1
// beforePrintAndIncrementCount(); // -> 1
// beforePrintAndIncrementCount(); // -> 1

/**
 * Creates an array of given `length`. The `processor` function is called with each index, and its return value becomes the array element at that index.
 * Remember zero-based indexing for arrays. For example, 0 is the first argument and 3 is the last argument for an array of length 4.
 *
 * @param {number} length - The length of the array to create.
 * @param {Function} processor - The function that returns the value for each index.
 * @returns {Array} The new array.
 */
export function arrayFactory(length, processor) {
  // your code here
}
// const square = function(n) { return n * n; };
// console.log(arrayFactory(4, square)); // -> [0, 1, 4, 9]
