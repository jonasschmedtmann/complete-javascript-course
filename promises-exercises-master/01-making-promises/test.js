/* eslint-env mocha */
const assert = require('assert');
const {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
} = require('./answers');
describe('Promise.resolve: (val:T) => Promise<T>', () => {
  describe('#makePromiseResolveWith3:() => Promise<number>', () => {
    it('creates a resolving promise', () => {
      return makePromiseResolveWith3()
        .then((val) => {
          assert.equal(val, 3);
        });
    });
  });
});

describe('Promise.reject: (err:T) => Promise<,T>', () => {
  describe('#makePromiseRejectWithBoo:() => Promise<,string>', () => {
    it('creates a rejecting promise', () => {
      return makePromiseRejectWithBoo()
        .then(() => {
          assert.fail('This promise should have rejected, not resolved');
        }, (err) => {
          assert.equal(err, 'Boo!');
        });
    });
  });
});

describe('Promise constructor "new Promise((resolve, reject) => void) => Promise', () => {
  describe('#makePromiseWithConstructor: (boolean) => Promise<undefined,undefined>', () => {
    it('creates a promise that will resolve', () => {
      return makePromiseWithConstructor(true);
    });
    it('creates a promise that will reject', () => {
      return makePromiseWithConstructor(false)
        .then(() => {
          assert.fail('This should have failed.');
        }, () => {});
    });
  });
  describe('#makeDelayPromise: (A, number) => Promise<A>', () =>{
    it('returns a promise that resolves with the value', () => {
      const start = new Date();
      return makeDelayPromise('Hello', 0)
        .then((val) => {
          assert.equal(val, 'Hello');
          assert((new Date() - start) < 50, 'Took too long');
        });
    });
    it('returns a promise that resolves after a delay', () => {
      const start = new Date();
      return makeDelayPromise('World', 1000)
        .then((val) => {
          assert.equal(val, 'World');
          const diff = new Date() - start;
          assert(diff >= 1000, 'Happened too early');
          assert(diff < 1050, 'Took too long');
        });
    });
  });
});
