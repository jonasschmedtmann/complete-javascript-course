/* eslint-env mocha */

const assert = require('assert');
const {
  flatMapPromise, 
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
} = require('./answers');

describe('Chaining Promises with .then(cb) and .catch(cb)', () => {
  describe('#flatMapPromise(promise, asyncTransformer) => Promise', () => {
    context('If the first promise resolves', () => {
      const firstPromise = Promise.resolve(3);
      it('resolves with the value of the second promise', () => {
        const resolveAndSquare = (val) => Promise.resolve(val * val);
        return flatMapPromise(firstPromise, resolveAndSquare)
          .then((val) => {
            assert.equal(val, 9);
          });
      });
      it('rejects with the error of the second promise', () => {
        const freakOut = (val) => Promise.reject(`Boo! ${val}`);
        return flatMapPromise(firstPromise, freakOut)
          .then((val) => {
            assert.fail(`This should not have resolved!  It resolved with ${val}`);
          }, (err) => {
            assert.equal(err, 'Boo! 3');
          });
      });  
    });
    context('If the first promise rejects', () => {
      it('rejects with the error of the first promise', () => {
        return flatMapPromise(Promise.reject('Boo!'), (val) => Promise.reject(val))
          .then((val) => {
            assert.fail(`This should not have resolved!  It resolved with ${val}`);
          }, (err) => {
            assert.equal(err, 'Boo!');
          });
      });
    });
  });
  
  describe('#chainTwoAsyncProcesses(firstPromise, slowAsyncProcess)', () => {
    it('runs a slow process on the result of the numberPromise', () => {
      const time = new Date();
      const numberPromise = Promise.resolve(31);

      function slowSquarer(num){
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(num * num);
          }, 1000);
        });
      }

      return chainTwoAsyncProcesses(numberPromise, slowSquarer)
        .then((val) => {

          assert.equal(val, 961);

          const timeElapsed = new Date() - time;

          assert(timeElapsed >= 975, 'Process too quick.  Are you sure that you chained the two processes?');

          assert(timeElapsed <= 1025, 'Process too slow.');
        });
    });
  });
  describe('#makeGetUserByIdWithOrganization(getUserById, getOrganizationById) => (id) => Promise', () => {
    const users = {
      'u001': {id: 'u001', name: 'Jeff', email: 'jeff@jeff.jeff', organizationId: 'o001'},
      'u002': {id: 'u002', name: 'Joan', email: 'joan@joan.joan', organizationId: 'o002'},
    };
    const organizations = {
      'o001': {id: 'o001', name: 'Operations'},
      'o002': {id: 'o002', name: 'Marketing'},
    };

    function getUserById(id){
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(users[id]);
        }, 500);
      });
    }
    function getOrganizationById(id){
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(organizations[id]);
        }, 500);
      });
    }
    const getUserByIdWithOrganization = makeGetUserByIdWithOrganization(getUserById, getOrganizationById);

    it('gets a user and their organization if the user and organization exist', () => {
      const start = new Date();
      return getUserByIdWithOrganization('u001')
        .then((userWithOrganization) => {
          const correctUser = users['u001'];
          const correctOrganization = organizations[correctUser.organizationId];
          
          assert.deepEqual(userWithOrganization, {
            ...correctUser, 
            organization: correctOrganization,
          });
          const elapsed = new Date() - start;
          assert(elapsed >= 1000 && elapsed < 1030, `Elapsed time wrong ${elapsed}`);
        });
    });
    it('resolves with undefined if the user is not found', () => {
      const start = new Date();
      return getUserByIdWithOrganization('u003')
        .then(userWithOrganization => {
          assert.equal(userWithOrganization, undefined);
          const elapsed = new Date() - start;
          assert(elapsed >= 500 && elapsed < 530, `Elapsed time wrong ${elapsed}`);
        });
    });
  });
});