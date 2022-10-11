# promises-exercises

Set of exercises in using JS promises for handling asynchronous operations.

## Setup

1. Fork this repository.
2. Run `npm install` to download the Node modules.

## Using

For these exercises, there are a few folders, each corresponding to a step in the lesson. Each of them has a `README.md`, a `test.js`, and an `answers.js`.  Read the   README.md for further instructions, implement the methods in the `answers.js`, passing the tests in the `tests.js` file.  The answers has a 
`npm run 01-making-promises -- --watch`
> Quick tip:  To run any of the exercises below in watch mode, add `-- --watch`, (e.g. )

You are free to look at any of the tests for guidance, but don't change them.

## Outline

### The Promise Toolbox

These exercises are all about learning the mechanisms that we can use to create, transform, and combine promises.

* `npm run 01-making-promises` - Create promises with Promise.resolve, Promise.reject, and the Promise constructor.
* `npm run 02-consuming-promises` - Use `.then(cb)` and `.catch(cb)` to respond to a promise completing and do something with the result.
* `npm run 03-transforming-promises` - Use `.then(cb)` and `.catch(cb)` to transform the results of async processes.
* `npm run 04-chaining-promises` - Use `.then(cb)` and `.catch(cb)` to chain async processes.

### Promise Puzzles

Now it's time to use the tricks from above to solve some problems.

* `npm run 05-callbacks` - Turn callback-centric functions into promise-centric functions.
