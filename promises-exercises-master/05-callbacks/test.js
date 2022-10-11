/* eslint-env mocha */
const assert = require('assert');
const {
  passwordCheckerCb,
  passwordCheckerPrms,
  makePromiseFromFunctionWithCallback,
} = require('./answers');

/* This test describes the callback version of this function */
describe('#passwordCheckerCb(email:string, password:string, cb:(User, Error) => void):void', () => {
  it('replies promptly with a user with the correct email and password', (done) => {
    function testCallback(err, user){
      assert(!err, 'There should be no error');
      assert.deepEqual(user, {name: 'Jeff Jeffries', email: 'jeff@jeff.jeff'});
      done();
    }

    passwordCheckerCb('jeff@jeff.jeff', 'jeff', testCallback);
  });
  it('replies after 1000ms with the incorrect email', (done) => {
    const start = new Date();
    function testCallback(err, user){
      assert.equal(err, 'User Not Found!');
      assert(!user, 'No User Should Have Returned');
      const timeDiff = new Date() - start;
      assert(timeDiff >= 1000, 'This returned too early!');
      done();
    }
    passwordCheckerCb('jim@jim.jim', 'jeff', testCallback);
  });
  it('replies after 1000ms with the incorrect password', (done) => {
    const start = new Date();
    function testCallback(err, user){
      assert.equal(err, 'User Not Found!');
      assert(!user, 'No User Should Have Returned');
      const timeDiff = new Date() - start;
      assert(timeDiff >= 1000, 'This returned too early (after ' + timeDiff+ 'ms)');
      done();
    }
    passwordCheckerCb('jeff@jeff.jeff', 'jim', testCallback);
  });
});
describe('#passwordCheckerPrms(email:string, password:string): Promise<User, Error>', () => {
  it('replies promptly with a user with the correct email and password', () => {
    return passwordCheckerPrms('jeff@jeff.jeff', 'jeff')
      .then((user) => {
        assert.deepEqual(user, {name: 'Jeff Jeffries', email: 'jeff@jeff.jeff'});
      });
  });
  it('replies after 1000ms with the incorrect email', () => {
    const start = new Date();

    return passwordCheckerPrms('jim@jim.jim', 'jeff')
      .then(() => {
        assert.fail('This should not have succeeded!');
      }, (error) => {
        assert.equal(error, 'User Not Found!');
        const timeDiff = new Date() - start;
        assert(timeDiff >= 1000, 'This returned too early!');
      });
  });

  it('replies after 1000ms with the incorrect password', () => {
    const start = new Date();

    return passwordCheckerPrms('jeff@jeff.jeff', 'jim')
      .then(() => {
        assert.fail('This should not have succeeded!');
      }, (error) => {
        assert.equal(error, 'User Not Found!');
        const timeDiff = new Date() - start;
        assert(timeDiff >= 1000, 'This returned too early!');
      }); 
  });
});
describe('#makePromiseFromFunctionWithCallback:(fn:([...params,] cb: (err:E, val:T) => void)) => void)=>([...params]) => Promise<T,E>', () => {
  it('turns a resolving callback function into a resolving promise', () => {
    function resolver(cb){
      cb(null, 'Hello');
    }
    return makePromiseFromFunctionWithCallback(resolver)
      .then(val => {
        assert.equal(val, 'Hello');
      });
  });
  it('turns a rejecting callback function into a rejecting promise', () => {
    function rejector(cb){
      cb('Boo!');
    }
    return makePromiseFromFunctionWithCallback(rejector)
      .then(() => {
        assert.fail('This should have rejected');
      }, (err) => {
        assert.equal(err, 'Boo!');
      });
  });

  it('takes params in the returning function', () => {
    function delayedResolver(firstVal, secondVal, cb){
      setTimeout(() => {
        cb(null, firstVal + ' ' + secondVal);
      }, 500);
    }

    return makePromiseFromFunctionWithCallback(delayedResolver, 'Hello', 'World')
      .then((val) => {
        assert.equal(val, 'Hello World');
      });
  });
});
