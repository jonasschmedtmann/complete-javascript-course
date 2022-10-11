/* eslint-env mocha */
const assert = require('assert');
const {
  waitForPromise,
  consumePromise,
} = require('./answers');

describe('Consuming Promises with .then(cb) and .catch(cb)', () => {
  describe('#waitForPromise(promise, action) => void', () => {
    it('waits until the promise is done to perform the action.', (done) => {
      const start = new Date();

      function action() {
        const diff = new Date() - start;

        assert(diff >= 1000, `Not enough time passed ${diff} < 1000`);
        assert(diff <= 1050, `Too much time passed ${diff} > 1050`);

        done();
      }
      const delayPromise = new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      waitForPromise(delayPromise, action);
    });
  });
  describe('#consumePromise(promise, consumer, errorHandler) => void', () => {
    it('calls the consumer on the resolve value of the promise', (done) => {
      const resolvedPromise = Promise.resolve('Yay!');
      function consumer(val){
        assert.equal(val, 'Yay!');
        done();
      }
      function handler(){
        assert.fail('This should not have been called.');
      }
      
      assert.equal(consumePromise(resolvedPromise, consumer, handler), undefined, 'Consume Promise should not return anything.');
    });
    it('calls the errorHandler on the rejection error of the promise', (done) => {
      const rejectedPromise = Promise.reject('Boo!');
      function consumer(){
        assert.fail('This should not have been called.');
      }
      function handler(err){
        assert.equal(err, 'Boo!');
        done();
      }
      assert.equal(consumePromise(rejectedPromise, consumer, handler), undefined, 'Consume Promise should not return anything.');
    });
  });
});