[fundamentals_101]

# JS basics

- high level object oriented,
- multi paradigm --> flexible & versatile - > different styles of programming
  -- add dynamic effects to pages

libraries for modern largescale webapps based on JS

- React
- Angular
- Vue

# primitive data types

-number
-string
-boolean
-undefined
-null
-symbol -value that is unique and cannot be changed
-BigInt -larger integers numbers cant hold

# type keywords

- let - value && type can change [blockScoped]
- const - cannot change type or valuable <>immutable
- {{var}} - completely avoid - function scoped

# basic operations

- [Math]: + : - : \* : / : a++ : a-- ; a+=1;
- [compare] : > : < : >= : <=
- [Operator_precedence] : P E M D A S

# string & template literals

- console.log(`Hello ${variableName}`);
- use ticks(`~) for getting template literals
- console.log(`this is multi

line usage instead of \n\`)

- spec chars win + . 😁😎😎

# type conversion

- convert : explicitly convert one type to another.
- number --> string String(num)
- validnum string --> number Number(str) else NaN(not a number)

# type coercion

- console.log("I am " + 23 + " years old")- console.log("23" - "10" - 3); => toInt
- console.log("23" - "10" + 3); => tostring
- console.log("23" / "10"); => int
- console.log("23" > "44"); => flag `false`
- type coercion converts 23 into string

# truthy and falsy values

- falsy(5) -> 0,'',undefined,null,NaN,false
  - will be false when converted to boolean
- when the falsy values convrtd/coerced to bool, value is false
- if/while or conditional operators coerce value into bool

# eqality ops

- if (eq === 18) strict evaluation, doesnt allow type coercion
- (18=='18') true || type coercion
- !== strict notEqual != loose notEqual

# switch

- implements strict equality

# alerts : prompt() vs alert()

-- prompt takes input
-- alert takes Truth or false

## statements and expressions

- 3+4 -> expression
- 1991 is expression - produce val
- perform actions -> statement, no val
  - if else statement

# conditional(ternary) operator

- allows us to write if-else statement all in one line

# BABEL

- used to transpile and polyfill your code (converting back to ES5 to ensure browser compatability for all users)

################################################################################

# # Part 2

# strict mode when enabled

- use strict - > make secure /easier to avoid accidental errors, visible errors,
- catches simple typo errors
- restricts using from using reserved keywords

  # functions

- fundamental building block
- function fnname() {}

  # declarations vs expressions

- function f() {} --> declaration
  - can be called in code before its defined, err => due to process called `hoisting`
- const C =function () {} -- > expression
  - anonymous function

# arrow functions(ES6)

- special form of function expression
- useful for simple 1liner fns
- arrow fns do not get `this` keyword -> not preferred everytime

DRY principle [DO_NOT_REPEAT_YOURSELF]

# Array [data structure]

- const friends = ['mike','datemike','prisonmike'];
- const years = new Array(1991,1992,1993);
- can contain mixed types

# array functions

- friends.push('data'); => adding to the end
- friends.unshift('data'); => adding to first
- friends.pop(); => remove last element, returns removed element
- friends.shift(); => removes the first and shifts
- friends.indexOf('data');
- friends.includes('data'); Boolean || `ES6 feature` || implements strict equality conditional
-
