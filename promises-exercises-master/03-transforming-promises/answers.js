/**
 *
 * EXERCISE 1
 *
 * @param {*} promise
 * @param {*} transformer
 * @returns {Promise}
 */

//  * If the first promise rejects with an error, the new promise rejects with that error.
//  * If the first promise resolves with a result, it calls the transformer with the value as an argument.
//    * If the transformer returns with a value, the new promise resolves with that value.
//    * If the transformer throws an error, the new promise rejects with that error.
//    *
function mapPromise(promise, transformer) {
  return new Promise((resolve, reject) => {
    promise
      .then((value) => resolve(transformer(value)))
      .catch((error) => reject(error));
  });
}

/**
 *
 * EXERCISE 2
 * In this exercise, we'll be passing a promise that resolves with a number or a string.  We want to return with a promise such that:

* If the input promise resolves with a number, the output promise resolves with the square of that number.
* If the input promise resolves with a string that we can turn into a number (like "1234"), the output promise resolves with the square of that number (1522756 in this example)
* If the input promise resolves with a string that we cannot turn into a number (like "asdf"), then we reject with a message like "Cannot convert 'asdf' to a number!"
* If the input promise rejects with an error, the output promise rejects with the same erro
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  return new Promise((resolve, reject) => {
    numberPromise
      .then((value) => {
        if (isNaN(Number(value))) {
          reject(`Cannot convert '${value}' to a number!`);
        } else {
          resolve(
            !isNaN(value) ? value * value : Number(value) * Number(value)
          );
        }
      })
      .catch((error) => reject(error));
  });
}

/**
 * EXERCISE 3
 * In the same way that we can use `.then(cb)` to transform a promise when it resolves, we can also use `.catch(cb)` to transform a promise when it rejects.  If we return a value from a `.catch(cb)`, we create a new promise that will resolve.  Likewise, if we throw an error in a `.catch`, the new promise will reject with that new error.

We're going to refactor the above promise so that it either resolves with the square of the number if it can, 
or it resolves with zero.

 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise).catch(() => {
    return new Promise((resolve) => resolve(0));
  });
}

/**
 * EXERCISE 4
 * But there's one noteworthy exception.  In the first code, the `.then(cb)` returns a new promise to which we attach the `.catch`.  
 * That means that it's possible for the first promise to resolve, and the second to reject, which means that the catch could be 
 * catching failures from the first promise OR the second promise.  When we pass in the failureCb *with* the successCb, 
 * we guarantee that our failureCb is ONLY catching the rejection of the first promise.

We can examine this by making a function called "switcheroo".  It'll take in a promise and return a promise such that:

* If the input promise rejects with an error, the output promise will resolve with that error.
* If the input promise resolves with a value, the output promise will reject with that value.
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise) {
  return promise.then(
    (value) => Promise.reject(value),
    (error) => Promise.resolve(error)
  );
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};
