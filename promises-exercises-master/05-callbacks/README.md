# Callbacks

This set of exercises is all about making promises from one particular format: node-style callbacks.

Node-style callbacks, or error-first callbacks, are simple callbacks for async processes.  They have two possible params: an error if the async process failed, and a value if the async process succeeded.  [Here's an article discussing them further](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/).

Here's a simple example of that: a password checker.  This is a simple function, taking in an email and a password.  If that matches a record in our database, then we return it, or we return undefined.

```js
function passwordChecker(email, password){
  if(email === 'jeff@jeff.jeff' && password === 'jeff'){
    return {name: 'Jeff Jeffries', email: 'jeff@jeff.jeff'};
  }
  return undefined;
}
```

Now, let's say that we want to add a security feature: a 1000ms delay if the call is unsuccessful.  That means that, for a user who may have mistyped their password, they'll have a small delay before entering it more carefully.  For a hacker trying a brute-force attack, they'll have to wait a second between attempts.

Well, it's a great feature, but it now introduces asynchrony into our function. If we used a node-style callback, that would take our function signature from this:

```txt
(email:string, password:string) => User | undefined
```

to this:

```txt
(email:string, password:string, cb:(error, User) => void) => void
```

So, two big changes:

* We don't return anything anymore (that's what the word "void" means)
* We have the same parameters as the synchronous version + another param: the node-style callback.

If we have a user, we will call the callback as `cb(null, user)`.  If we don't have a user, we will wait 1000 ms and then call the callback with a message for the error param, e.g. `cb('User Not Found!')`

```js
function passwordCheckerCb(email, password, cb){
  const user = passwordChecker(email, password);
  if(user){
    cb(null, user);
  } else {
    setTimeout(() => {
      cb('User Not Found!');
    }, 1000);
  }
}
```

## Exercise 1

The function above works well for our purpose, but we want to use promises to handle async processes.  Instead of the following function signature:

```txt
(email:string, password:string, cb:(error, User) => void) => void
```

We're going to return a promise, and get rid of that callback.

```txt
(email:string, password:string) => Promise<User, Error>
```

We already have most of this written out.  We'll use the Promise constructor, and call passwordCheckerCb from within it.

## Exercise 2

Now, we're going to make a more general version of this pattern.  Let's say that we have a function that takes in a set of parameters and returns something.  In the case of "passwordChecker", those params are an email and a password.  The three versions look like this:

* SYNC `(email: string, password:string) => User`
* CALLBACK `(email: string, password:string, cb: (Error, User) => void) => void`
* PROMISE `(email: string, password:string) => Promise<User, Error>`

In this example, we are going to make a general purpose function.  It accepts a function that would accept some params and a node-style callback, and it accepts all the params it needs, and returns a function.

For instance, if we called:

```js
makePromiseFromFunctionWithCallback(passwordCheckerCb, "jeff@jeff.jeff", "jeff");
```

It would return with a Promise that resolved with the value or rejected with an error based on the success or failure of calling `passwordCheckerCb("jeff@jeff.jeff", "jeff")`.  In other words, it would be identical to calling `passwordCheckerPrms("jeff@jeff.jeff", "jeff")`