# Consuming Promises

The following exercises will focus on using the .then and .catch methods of promises.  These are very important methods, not only for consuming values or handling errors, but also for transforming and combining promises.

## Exercise 1

This is a simple exercise in just waiting for a promise to be done before performing an action.  The promise will resolve after a certain number of milliseconds.

## Exercise 2

In this exercise, we will use then and catch for their most basic use: to consume the result of a successful async process, or to handle the error of a failed async process.  We will be given a promise, a consumer, and a handler.  Set it up so that, if the promise resolves, the consumer will be called with the result, and if the promise rejects, the handler will be called with the error.
