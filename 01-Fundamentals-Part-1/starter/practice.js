if (true) {
  var hello = 'hello from a var variable';
  const hello2 = 'hello from a const variable'; // block scoped

  console.log(hello)
  console.log(hello2) // block scoped : will console.log
}
console.log(hello) // var is hoisted globally so even thought var is contained in it's own scope, it can be access outside of it
console.log(hello2) // will not console.log because const is block scoped
