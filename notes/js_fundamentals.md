# JavaScript fundamentals

Lecture notes available in `extra/theory-lectures-v2.pdf`

## Hello World! 

Use `Developer Tools > Console` on the browser to try out JS.

#### alert

`alert()` function allows us to provide alerts as a pop-up on the window. 

Example: `alert('Hello World!');`

#### console.log

`console.log()` function allows us to print to the console.

Example: `console.log('Hello World!');`

There is also `console.warn()`, `console.error()` and `console.table()`. 

#### prompt

`prompt()` function allows us to get input from user. 

Example: `prompt("What's your age?");`

#### Single quotes vs Double quotes

In JavaScript, there is no functional difference between single quotes (') and double quotes ("); they are effectively interchangeable and both represent string literals. The choice between single and double quotes is usually a matter of personal or team preference, or it may be dictated by a style guide.

```js
const greetingSingle = 'Hello, world!';
const greetingDouble = "Hello, world!";
```

Both greetingSingle and greetingDouble contain the same string content. JavaScript interprets both the same way.

However, the choice between single and double quotes can affect how you include quotes within the string itself. For instance:

```js
const sayHelloSingle = 'She said, "Hello, world!"';
const sayHelloDouble = "She said, 'Hello, world!'";
```

In sayHelloSingle, double quotes are used inside a string delimited by single quotes. In sayHelloDouble, single quotes are used inside a string delimited by double quotes. If you want to include the same type of quote inside the string as the one used to delimit it, you need to escape the quote using a backslash (\):

```js
const escapedSingle = 'She said, \'Hello, world!\'';
const escapedDouble = "She said, \"Hello, world!\"";
```

Some developers prefer single quotes because it allows for easier inclusion of HTML attributes in strings (which are often delimited by double quotes). Others prefer double quotes for reasons like JSON compatibility, where property names and string values are required to be in double quotes. Ultimately, consistency within your codebase is key. Many linters and formatters enforce a particular style for the sake of consistency.

#### Assign a value to a variable 

`let js = 'amazing'`

#### Check for a condition and show alert if true

`if (js === 'amazing') alert('JS is amazing!')`  (Why triple equals?)

#### Semi-colons

Semi-colons are optional but good practice.

#### Commenting

Single line comments start with `//`  
Multi-line comments are wrapped between `/*` and `*/`

#### Nice analogy for HTML, CSS and JS

- HTML (noun): `<p></p>` means "paragraph"
- CSS (adjective): `p{color: red}` means "the paragraph text is red"
- JS (verb): `p.hide();` means "hide the paragraph"

## Variables

camelCase is the general convention.

`let firstName = "Jonty"`

#### Rules

- cannot start with number
- can only contain numbers, letters, `_` and `$`
- cannot be reserved keywords (e.g. `new`)
- can start with `_` and `$`

#### Conventions

- don't start with uppercase 
- variables in all uppercase for constants
- don't use `name` as a variable as this can cause issues

## Data Types

Primitive or Object 

#### 7 primitive data types

| Type      | Description                                         | Example         |
| --------- | --------------------------------------------------- | --------------- |
| Number    | All numbers (integers, floating point etc.)         | 23, 3.14        |
| String    | Text                                                | 'Hello'         |
| Boolean   | logic                                               | `true`, `false` |
| Undefined | variable that is not yet defined                    | `let children`; |
| Null      | empty value                                         | `null`          |
| Symbol    | Unique values that cannot be changed (since ES2015) |                 |
| BigInt    | Large integers (since ES2020)                       |                 |

#### Dynamic typing

Similar to Python, no need to define the data type of a value stored in a variable. It is determined automatically. 

#### typeof

`typeof` operator (not a function) gets the type of an object

Example: `typeof true` returns `boolean`. 

Note for accessibility, it also works as a function, i.e. `typeof(true)` will also work. But the preferred pattern is without the parantheses.

#### undefined variable

An undefined variable (i.e. a variable created without assigning a value) will hold the initial value `undefined`. 

```js
let year;
console.log(year)  // undefined
console.log(typeof year)  // "undefined"
```

#### null variable

`typeof null` will be `object`.

#### let, const and var

`var` is old way of declaring variables (prior to ES6). `let` and `const` are the modern way.

`let` allows us to declare and then reassign the value of a variable (mutable)

```js
let age = 30;
let age = 30;
age = 31;
```

`let` also allows us to define undefined variables.

```js
let year;
```

`const` is used for variables whose values don't change (basically immutable)

```js
const birthYear = 1980
birthYear = 1981;  // this will raise an error.
```

Use `const` by default and use `let` where you really want to mutate a variable. Avoid `var` where possible.

JavaScript won't throw an error if `let` or `const` is not used. Instead, it won't define it in the local scope, but rather in the global scope (bad practice!)

## Operators

#### Math operators

```js
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
```

#### String concatenation

```js
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName); // Jonas Schmedtmann
```

#### Assignment operators

```js
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);
```

#### Comparison operators

```js
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
```

#### Operator precedence

[MDN Operator Precedence Table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table)

## Strings and Template Literals

```js
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

// type conversion is done automatically
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);  // I'm Jonas, a 46 years old teacher!

// Template literals (since ES6) are similar to Python f-strings, uses $ instead of f
// the whole string should be enclosed by backticks, not single or double quotes.
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
```

Backticks can also be used for any regular strings.

```js
console.log(`Just a regular string...`);
```

#### Multi-line strings

```js
console.log('String with \n\
multiple \n\
lines');
```

Multi-line strings can also be achieved with template literals (backticks). This is a better way than the above.

```js
console.log(`String
multiple
lines`);
```

## Conditional statements

### Syntax

#### one line if 

```js
if (condition) //statement if condition is true; // no need for curly braces
```

#### simple if-else (one condition)

```js
if (condition) {
    // statements if condition is true
} else {
    // statements if condition is false
}
```

#### complex if-else (multiple conditions)

```js
if (condition1) {
    // statements if condition1 is true
} else if (condition2) {
    // statements if condition2 is true
} else if (condition3) {
    // statements if condition3 is true and so on...
} else {
    // statements if none of the above conditions are true
}
```

### Example

```js
const age = 15;

if (age >= 18) {
  console.log('Sarah can get driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;  // variables defined inside if-else are not accessible outside
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
```

```js
let age = 18;

if (age < 18) {
    console.log("You are a minor.");
} else if (age < 21) {
    console.log("You are a young adult.");
} else {
    console.log("You are an adult.");
}
```

## Type conversion and Type coercion

```js
// type conversion (manual)
const inputYear = '1991';
console.log(inputYear + 18)  // 199118
// Type convert inputYear into Number using Number(inputYear)
console.log(Number(inputYear), inputYear);  // 1991 "1991"
console.log(Number(inputYear) + 18);  // 2009

console.log(Number('Jonas'));  // NaN 
console.log(typeof NaN);  // number

console.log(String(23), 23); // "23" 23

// type coercion (automatic)
// type coercion to string
console.log('I am ' + 23 + ' years old');  // "I am 23 years old"
// type coercion to string
console.log('23' + '10' + 3);  // "23103"
// type coercion to number (because of - or /)
console.log('23' - '10' - 3); // 10
console.log('23' / '2');  // 11.5

let n = '1' + 1; // '11'
n = n - 1; // 10
console.log(n);  // 10
```

## Truthy and Falsy values

Falsy values: `0`, `''`, `undefined`, `null`, `NaN` (evaluates to `false`)

```js
const money = 100;
if (money) {  // true
  console.log("Don't spend it all ;)");  // this will print
} else {
  console.log('You should get a job!');
}

let height = 0;  // even let height; will do the same
if (height) {  // false
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');  // this will print
}
```

## Double vs Triple equals

In JavaScript, `==` and `===` are both comparison operators, but they differ in how they compare the values they check.

- `==` is the equality operator and performs an abstract comparison. It converts the operands to the same type before making the comparison. This type coercion can lead to unexpected results when comparing values of different types.

- `===` is the strict equality operator and does not perform type coercion. If the operands are of different types, it returns false without attempting to convert them.

```js
// Using the equality operator (==)
console.log('1' == 1);   // true because '1' is converted to a number before comparison
console.log('1' == '1'); // true because both operands are of the same type and value
console.log(0 == false); // true because 0 is considered falsy in JavaScript, as is false

// Using the strict equality operator (===)
console.log('1' === 1);   // false because the type of the operands is different
console.log('1' === '1'); // true because both the type and value are the same
console.log(0 === false); // false because the type of the operands is different
```

## Logical operators

AND: `&&`
OR: `||`
NOT: `!`

Return values similar to Python. 

```js
const a = 'Hello'
const b = 'World'

console.log(a && b)  // prints 'World'
console.log(a || b)  // prints 'Hello'
console.log(!a)      // prints false
```

## switch

preferred to complicated if-else statements

### Syntax

```js
switch (variable) { 
    case value1: // variable === value1
        // statements to run for first case 
        break;  // need break otherwise it continues executing down
    case value2: 
    case value3:
        // statements to run for second or third case
        break;
    // and so on
    default:
        // statements to run for default case (similar to else in if-else)
}
```

### Example

```js
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}
```

## Ternary operator

### Syntax

```js
condition ? statement if true : statement if false
```

### Example

```js
const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');
```

## Javascript versions and standards

1995: Javascript was released

1997: ECMAScript 1 (ES1) - first official standard of JS

2009: ECMAScript 5 (ES5)

2015: ES6/ES2015 - biggest update to JS till date

Since 2016: Annual release, ES2016, ES2017 etc. 

All versions are backwards compatible (old features are never removed)

## Strict mode

Strict mode in JavaScript is a way to opt in to a restricted variant of JavaScript. It was introduced in ECMAScript 5. By enabling strict mode, you can catch common coding bloopers, prevent unsafe actions, and generally make it easier to write "secure" JavaScript.

Add `'use strict';` at the top of the script file.

Among other differences, in strict mode:

- Variables must be declared before they are used
- Attempts to write to read-only properties will throw an error
- Attempts to create properties on primitive values will throw an error
- The this value is undefined in functions that are not methods
- Deleting undeletable properties will throw an error
- The with statement is not allowed
- Evaluated code does not introduce new variables into the surrounding scope
- The arguments and caller properties of functions are not accessible.

Strict mode helps out in a couple of ways:

- It catches some common coding mistakes, throwing exceptions.
- It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object).
- It disables features that are confusing or poorly thought out.

## Functions

### Syntax 

#### Very simple function 

```js
function <functionName>() {
    // functionBody;
}
```

#### Function with parameters and return values

```js
function <functionName>(param1, param2, ...) {
    // functionBody that uses the params;
    return obj;
}
```

Above are Function declarations. 

Below is function expression. Function declarations can be called before they are defined in the code! But we can't do that for function expressions. Internally, this happens because of a process called hoisting.

#### Anonymous function assigned to a variable (function expression)

```js
const varName = function (param1, ...) {
    // functionBody;
    return obj;
}

// Calling the function varName
varName(arg1, ...)
```

### Examples

```js
// defining the function
function logger() {
    console.log("Logging something...");
}

// calling the function
logger();
logger();
```

```js
// defining the function
function sayHello(name) {
    let msg = `Hello, ${name}!`;
    console.log(msg);
    return msg;  
}

// calling the function
test = sayHello('Ram')  // returns 'Hello, Ram!' into test
```

```js
function calculateAge(birthYear) {
    return 2023 - birthYear;
}
```

## Arrow functions

Introduced in ES6. Looks similar to lambda functions in Python (I think)

### Syntax

#### Simple arrow function

```js
const varName = param => output;
```

#### More complex arrow function (multiple lines of code in function)

```js
const varName = (param1, param2, ...) => {
    // functionBody;
    // include return statement here
}
```

```js
// Function expression
const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

// Equivalent arrow function
const calcAge = birthYear => 2023 - birthYear;
```

Arrow functions don't get `this` keyword as regular functions!

## Arrays

### Creating a new array 

Similar to Python lists

```js
const years = new Array(1991, 2004, 2023);
```

```js
const fruits = ['Apple', 'Pineapple', 'Orange'];
console.log(fruits);
```

### Accessing elements

Uses square brackets

```js
console.log(fruits[0]);  // 'Apple'
```

### Length of array

can be done using `<arrayName>.length`

```js
console.log(fruits.length);  // 3
```

### Assiging values

```js
fruits[1] = 'Mango'; // 'Mango' replaces 'Pineapple'
```

Only primitive data types in JS are immutable. Arrays are mutable.

### Can hold different types

```js
const info = ['Name', 2023, ['A', 'B', 'C']];
```

## Array methods

```js
const fruits = ['Apple', 'Mango', 'Orange'];
```

### push

Adds element to the end of the array (similar to python list.append) 
```js
fruits.push('Pear') // Pear gets appended to fruits
```

### unshift

Adds element to the beginning of the array

### pop

Removes last element from array and returns the element

### shift

Removes first element from array and shifts everything else to the left

### indexOf

Returns index of the required element. Unknown elements will return -1. 

### includes

ES6 method. Returns `true` if element is in array, else `false`. Uses strict equality (`===`) for the check.

## Objects 

Similar to Python dictionaries

```js
const info = {
    firstName: 'Ki',
    lastName: 'Blitzer',
    year: 1991,
    myList: ['A', 'B', 'C']
};
console.log(info);
``` 

### Accessing properties (values) using property names (keys)

```js
console.log(info.firstName);  // dot notation or member access
console.log(info['firstName'];  // brackets notation or computed member access
```

Brackets notation is useful as the property name can be dynamically computed. 

```js
console.log(info['first' + 'Name']);
```

### Adding properties to object

```js
info.country = 'UK';
info['twitter'] = '@kiblitzer';
```

## Object methods

Function expressions can be included as a key value pair (by replacing equals with colon).

Other properties of the object are accessible inside this function as attributes of `this` keyword.

```js
const info = {
    firstName: 'Ki',
    lastName: 'Blitzer',
    year: 1991,
    myList: ['A', 'B', 'C']
    calcAge: function() {
        return 2023 - this.year;
    }
};
console.log(info);
``` 

This function can also be used to assign a new property by returning this.propertyName.

```js
const info = {
    firstName: 'Ki',
    lastName: 'Blitzer',
    year: 1991,
    myList: ['A', 'B', 'C']
    calcAge: function() {
        this.age = 2023 - this.year;
        return this.age;
    }
};
console.log(info);
``` 

### Object.keys(obj)

Returns the properties (keys) of `obj` as an array

### Object.values(obj)

Returns the values of the properties (keys) of `obj` as an array

### Object.entries(obj)

Returns the key-value pairs as inner arrays of an array

## For loop

### Syntax

```js
for (let varStart = initValue; stopCondition; varIncrement) {
    // body of loop;
}
```

### Example

```js
for (let x=1; x<10; x++) {
  console.log(`${x**2}`);
}
```

### Example - Looping through an array

```js
for(let i=0; i<fruits.length; i++){
  console.log(fruits[i])
}
```

Alternative using `for...of` loop

```js
for(fruit of fruits){
  console.log(fruit)
  if(fruit === 'orange') {
    break;
  }
}
```

### Example - Looping through an object

Using `for...in` loop

```js
const info = {
  name: 'Ki',
    num: 123,
  location: 'London'
} 
for(prop in info) {
  console.log(`${prop}: ${info[prop]}`)
}
```

### For-else loop

The else block will be executed after the for loop completes, unless a break statement is encountered.

```js
for i in range(5):
    print(i)
else:
    print("Loop completed successfully")
```

### Break and continue

Break and continue work the same way as in Python.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // stops the loop when i is 5
  }
  if (i % 2 === 0) {
    continue; // skips the rest of the loop body when i is even
  }
  console.log(i); // this will log 1, 3, and then break out of the loop at 5
}
```

### forEach method

Arrays have a forEach method which can be used to loop over the elements.

```js
fruits.forEach(element => {
               console.log(element)
               }) 
```

The `forEach` method will invoke the callback function provided to it once for each element in array. For each invocation, `forEach` passes the current element as an argument to the callback function. The callback function then logs the element to the console.

The callback function for forEach can take up to three arguments:

    The current element being processed in the array.
    The index of the current element being processed.
    The array that forEach is being applied to.

forEach does not mutate the array on which it is called, but the callback function can modify the array.

## Why can't I write obj.keys() directly (but rather do it as Object.keys(obj)) when I can do array.forEach()?

Object.keys() is a static method on the Object constructor that is not available on instance objects directly. This is why you can't call .keys() on an instance of an object.

On the other hand, forEach() is a prototype method on the Array constructor, which means it is available on all array instances. This is because all arrays inherit from Array.prototype, which has the forEach() method.

## Static method vs Prototype method

A static method is a function that is a property of the constructor itself, not the instances created by that constructor. It's called on the class (or constructor function) itself, not on an instance of the class.

A prototype method is a function that is a property of the constructor's prototype. This means that it is available to all instances of the class, as they inherit properties and methods from the prototype.

```js
function MyClass() {
  // Constructor function
}

// Static method
MyClass.staticMethod = function() {
  console.log('I am a static method');
};

// Prototype method
MyClass.prototype.prototypeMethod = function() {
  console.log('I am a prototype method');
};

// Usage
MyClass.staticMethod(); // Works
// MyClass.prototypeMethod(); // Uncaught TypeError: MyClass.prototypeMethod is not a function

const myInstance = new MyClass();
myInstance.prototypeMethod(); // Works
// myInstance.staticMethod(); // Uncaught TypeError: myInstance.staticMethod is not a function

```

In the context of JavaScript's Object and Array:

- `Object.keys()` is a static method because it's called on the Object class itself.
- `array.forEach()` is a prototype method because it's called on an instance of an Array.

## While loop

### Syntax

```js
while (condition) {
  // loop body; 
}
```

### Example 

```js
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

## Do-while loop

The do-while loop will execute the block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

### Syntax

```js
do {
  // loop body;
} while (condition);
```

### Example

```js
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

## While-else loop

Similar to the for-else loop, the else block will be executed after the while loop completes, unless a break statement is encountered.

```js
i = 0
while i < 5:
    print(i)
    i += 1
else:
    print("Loop completed successfully")
```

## Try-catch-finally

```js
try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that will run regardless of try / catch outcome
}
```

JavaScript has an error hierarchy with a number of different error types that can be thrown. The base type is Error, and there are several built-in error constructors that extend from it, such as:

- EvalError: An error regarding the global eval() function.
- RangeError: An error when a value is not in the set or range of allowed values.
- ReferenceError: An error when trying to reference a variable that is not defined.
- SyntaxError: An error related to syntax in the code.
- TypeError: An error when a value is not of the expected type.
- URIError: An error when encodeURI() or decodeURI() are passed invalid parameters.