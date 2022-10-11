/* eslint-env mocha */
const assert = require('assert');
const {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
} = require('./answers');

describe('Transforming Promises with .then(cb) and .catch(cb)', () => {
  describe('#mapPromise(promise, transformer) => Promise', () => {
    it('transforms a promises resolution value', () => {
      return mapPromise(Promise.resolve(3), (val) => {
        return val + val;
      })
        .then((val) => {
          assert.equal(val, 6);
        });
    });
    it('returns a promise that rejects if the first promise rejects', () => {
      return mapPromise(Promise.reject('Boo!'), (val) => val)
        .then((val) => {
          assert.fail('This should not resolve!  It resolved with: ' + val);
        }, (error) => {
          assert.equal(error, 'Boo!');
        });
    });

    it('returns a promise that rejects if the transformer throws an error', () => {
      return mapPromise(Promise.resolve(3), () => {
        throw new Error('Boo!');
      })
        .then((val) => {
          assert.fail('This should not resolve!  It resolved with: ' + val);
        }, (error) => {
          assert.equal(error.message, 'Boo!');
        });
    });
  });

  describe('#squarePromise(promise) => Promise', () => {
    it('squares the resolution value of the promise', () => {
      return squarePromise(Promise.resolve(5))
        .then((val) => {
          assert.equal(val, 25);
        });
    });
    it('converts a numeric string to a number and squares it', () => {
      return squarePromise(Promise.resolve('11'))
        .then((val) => {
          assert.equal(val, 121);
        });
    });
    it('rejects if the resolution value is not numeric', () => {
      return squarePromise(Promise.resolve('abc'))
        .then((val) => {
          assert.fail('This should not resolve!  It resolved with: ' + val);
        }, (err) => {
          assert.equal(err, 'Cannot convert \'abc\' to a number!');
        });
    });
    it('rejects if the input promise rejects.', () => {
      return squarePromise(Promise.reject(9))
        .then((val) => {
          assert.fail('This should not resolve!  It resolved with: ' + val);
        }, (err) => {
          assert.equal(err, 9);
        });
    });
  });
  describe('#squarePromiseOrZero(promise) => Promise', () => {
    it('squares the resolution value of the promise', () => {
      return squarePromiseOrZero(Promise.resolve(5))
        .then((val) => {
          assert.equal(val, 25);
        });
    });
    it('converts a numeric string to a number and squares it', () => {
      return squarePromiseOrZero(Promise.resolve('11'))
        .then((val) => {
          assert.equal(val, 121);
        });
    });
    
    it('resolves with 0 if the resolution value is not numeric', () => {
      return squarePromiseOrZero(Promise.resolve('abc'))
        .then((val) => {
          assert.equal(val, 0);
        });
    });

    it('rejects if the input promise rejects.', () => {
      return squarePromiseOrZero(Promise.reject(9))
        .then((val) => {
          assert.equal(val, 0);
        });
    });
  });
  describe('#switcheroo(promise) => Promise', () => {
    it('rejects when the input promise resolves', () => {
      return switcheroo(Promise.resolve(3))
        .then((val) => {
          assert.fail('This should not resolve!  It resolved with: ' + val);
        }, (err) => {
          assert.equal(err, 3);
        });
    });
    it('resolves when the input promise rejects', () => {
      return switcheroo(Promise.reject(4))
        .then((val) => {
          assert.equal(val, 4);
        });
    });
  });});