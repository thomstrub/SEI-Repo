![](https://i.imgur.com/yxikhiY.jpg
)
# JavaScript Functions & Scope

| Learning Objectives - SWBAT |
| :--- |
| Understand the Use Case of Functions |
| Code Functions as Definitions and Expressions |
| Call Functions With & Without Arguments |
| Describe Scope |

## Roadmap
1. What is a function?
2. Why Functions Anyway?
3. Defining and Calling Functions
4. Parameters
5. Scope
6. Further Study


### 1. What is a function?

- A function is a reusable block of code written to perform a single purpose, for example:

	```js
	// Get player's choice of board size (S for small, M for medium, L for large)
	function getBoardSize() {
	  const validChoices = ['S', 'M', 'L'];
	  let size;
	  while (!validChoices.includes(size)) {
	    size = prompt('Enter the board size (S)mall, (M)edium or (L)arge: ').toUpperCase();
	  }
	  return size;
	}
	```

- Functions optionally accept data as input and return a single piece of data, for example:

	```js
	function getPointsScored(elapsedTime) {
	  if (elapsedTime < 30) {
	    return 100;
	  } else if (elapsedTime < 60) {
	    return 75;
	  } else {
	    return 25;
	  }
	}
	
	const points = getPointsScored(time);
	```
	**❓ Assuming the variable `time` is equal to `50`, what will `points` equal?**

- Regardless of programming language, functions are the primary building blocks of programs! (example coming up below...)

- The code in a function does not execute until that function is called.  However, the code is checked for syntax errors when the script file is loaded.

- Programming languages themselves include functions built into the language, e.g., `parseInt()`.

- The functions we write commonly call other functions, for example:

	```js
	let size, board;
	
	function initialize() {
	  size = getBoardSize();
	  board = generateBoard(size);
	  renderBoard();
	}
	```

### 2. Why Functions Anyway?

#### Tackle Complexity

As humans, we typically tackle a complex task by breaking it into smaller tasks or steps - as developers, we do the same!

Functions allow us to break up programs into more manageable blocks of code.

#### Code Reuse

Functions provide code reuse because they can be called over and over, for example, a `renderBoard` function might be called every time the data in the `board` variable is changed.

Without functions, we might have to write the same code in multiple places of the app which violates a key programming principle known as **DRY** - Don't Repeat Yourself!

**❓What's the downside of violating the DRY principle by repeating the same code in multiple places throughout a program?**

#### Documentation

Simply naming functions appropriately, e.g., `renderBoard`, documents what the program is doing.

Organizing code into functions also makes it easier to find and fix code that's not working as expected, a process known as **debugging**.

#### Summary

In summary, it would be impractical if not impossible to create applications without breaking up the application into functions.

Here's a simple example of how an app that sends out a daily business report might be broken up into functions:

```js
function main() {
  let date = new Date();
  let sales = getSalesData(date);
  let labor = getLaborCosts(date);
  let budget = getBudget(date);
  let report = generateReport(date, sales, labor, budget);
  sendReport(report);
}

// Run the main function
main();

/*--- helper functions ---*/

function getSalesData(forDate) {
  let netSales = getNetSales(forDate);
  let salesTax = computeSalesTax(netSales);
  return {netSales, salesTax};
}

function getLaborCosts(forDate) {
  let staffCosts = getStaffCosts(forDate);
  let mgtCosts = getMgtCosts(forDate);
  return {staffCosts, mgtCosts};
}

function getBudget(forDate) {
  let salesBudget = getSalesBudget(forDate);
  let laborBudget = getLaborBudget(forDate);
  return {salesBudget, laborBudget};
}

function generateReport(forDate, dailySales, dailyLabor, budget) {
  ...
}

function sendReport(report) {
  ...
}

// etc.

```

#### Review

**❓ Which would be a better programming practice:**

- **Code numerous, smaller functions**<br>-or-<br>
- **Code fewer, larger functions**

### 3. Defining and Calling Functions

#### Setup

Let's setup the basic file structure today!

---
Title: Morning Lesson<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page <br>
Topics: Functions (Arrow Functions)<br>

---

# Lesson objectives

_After this lesson students will be able to:_

* Write an arrow function with a parameter
* Write an arrow function with multiple parameters and a return value

---

# FUNCTIONS

### BLOCK

Conditionals _skip_ lines of code within a block `{ ... } ` if a condition is not true:

```javascript
if (BOOLEAN EXPRESSION) {
	// code might get skipped
}
```

Loops _repeat_ lines of code within a block `{ ... }` according to our instructions:

```javascript
while (BOOLEAN EXPRESSION) {
	// code is repeated
}
```

We can also control the flow of our code with functions. Functions act like variables and **store** code within a block `{ ... } ` for use later, and for repeated uses.

```javascript
const func = () => {
	// code to execute later
}
```

### WHY FUNCTIONS?

Using functions is another application of DRY. Don't Repeat Yourself. With a function, you can store code that can be used conveniently as many times as you wish, without having to rewrite the code each time.

<br>
<hr>

11:05

## DEFINING A FUNCTION

&#x1F535; **Watch**

Write a function that logs "Boo!" to the console.

```javascript
const printBoo = () => {
	console.log('======');
	console.log('Boo!');
	console.log('======');
};
```

The code will not run yet. The function needs to be **invoked**.

<br>
<hr>

## INVOKING A FUNCTION

```javascript
printBoo();
printBoo();
printBoo();
```

Simply use the name of the variable and use **parentheses** to invoke the function.

If the parentheses are not included, the function will not run.

The invocation comes **after** the function definition. If you write it beforehand, it will be trying to invoke something that doesn't yet exist according to the interpreter.

This will work:

```javascript
const printBoo = () => {
	console.log('======');
	console.log('Boo!');
	console.log('======');
};

printBoo();
```

VS

This will not:

```javascript
printBoo();

const printBoo = () => {
	console.log('======');
	console.log('Boo!');
	console.log('======');
};
```

<br>
<hr>

&#x1F535; **Activity**

* Write a function `printSum` that will console.log the result of 10 + 10

&#x1F535; **Extra**

* Write a function `printTriangle` that will print these pound signs to the console (there are 5 console.logs inside the function):

```
#
##
###
####
#####
```

&#x1F535; **Challenge**

* Make it so that `printTriangle` will print the pound signs using a for loop (there is only 1 console.log inside the function).  

<br>
<hr>
11:22

## NAMING FUNCTIONS

Always use **const** to declare your functions. It would be a strange day when a function would need to be reassigned. 

The variable you use for a function should contain a **verb**. Functions **do** something, most often:

* getting data
* setting data
* checking data
* printing data

If the purpose of your function is to check data, for example, use the verb `check` in the variable name.

Example function that contains a conditional:

```javascript
const checkInputLength = (input) => {
	if (input.length > 10) {
		console.log('input length is greater than 10');
	} else {
		console.log('input length is not greater than 10');
	}
};
```

Functions should try to do **one thing** and **do it well**.

If a function, called `checkInputLength`, does more than just check input, or doesn't do it very well, then it is a poor function.

Takeaway: Think about appropriate **verbs** to use in your function variable names. The verns should indicate the **one thing** that the function does.

<br>

## ARGUMENTS AND PARAMETERS

The preceding function, `checkInputLength` had a parameter called `input`.

We can write functions that take in a type of variable called a **parameter**. By giving our functions some kind of variable input, we make them much more flexible.

In the below example, the parameter is arbitrarily called `name` (we can call our parameters whatever we want - whatever makes semantic sense).

&#x1F535; **Watch**

Using **interpolation** I can put the input into a string:

```javascript
const sayName = (name) => {
	console.log('Hello! My name is ' + name);
}
```

When we _invoke_ the function, we can specify the value of the parameter, this is called an **argument**:

```javascript
sayName("Frodo");
```

We can continue to invoke the function with whatever **arguments** we want:

```javascript
sayName("Merry");
sayName("Pippin");
sayName("Sam");
```

Each time, the output of the function will change to reflect the argument.

## Argument vs Parameter

The **argument** is the input, the **parameter** is how the input is represented in the function.

```javascript
const func = (PARAMETER) => {
	// some code
}

func(ARGUMENT);
```

<br>

&#x1F535; **Activity (10 min)**

* Write a function `printParameter` that takes a parameter `input`. The function should simply console.log the value of the `input` parameter.
* Invoke the function with an argument.

&#x1F535; **Extra**

* Write a function called `minusOne` that takes a parameter `num`. Assuming the argument is a number, print the argument -1.

```javascript
minusOne(10);        // 9
minusOne(100);       // 99
minusOne(Infinity);  // Infinity
```

&#x1F535; **Extra**

* Write a function called `getLastElement` that takes a parameter `arr`.
* Invoke the function with an **array** as the argument.
* The function should print the **last element** within the array.

```javascript
getLastElement([1, 2, 3, 4, 5, 6]);       // 6
getLastElement(['a', 'b', 'c']);          // 'c'
getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]
```

_Hint:_ `arr[arr.length - 1]`

<br>
<hr>

## Multiple Parameters

We can use multiple parameters in our functions. A function can take any number of parameters.

```javascript
const multiply = (num1, num2) => {
	console.log(num1 * num2);
}
```

When you invoke the function, you generally want to supply the right number of arguments.

```javascript
multiply(4, 4)

=> 16
```

&#x1F535; **Activity**

* Write a function `makeSentence` that takes **three** parameters and **interpolates** them into a fully formed sentence.

```javascript
makeSentence('I', 'want', 'chimichangas');
```

> => 'Oh boy, do I want chimichangas or what?'

&#x1F535; **Extra**

* Write a function `divideThreeNums` that takes **three** parameters and prints the third parameter divided by the result of the second parameter divided by the first.

```javascript
divideThreeNums(10, 5, 2)   // 4
divideThreeNums(30, 2, 9)   // 135
```


<br>
<hr>

## RETURN

* `return` gives a function its value.
* `return` stops the function.

## return: give a function value

We specify the output of a function with the `return` statement. The `return` statement is different from `console.log()` in that we can use the _return value_ of a function to pass as data, whereas we cannot with a `console.log()`.

A contrived example:

```javascript
const ten = () => {
	return 10;
}
```

```javascript
console.log(8 + ten());

=> 18
```

This is the main difference between `return` and `console.log()`. The output value of a function can not come from a console.log.

```javascript
const ten = () => {
	console.log(10);
}
```

```javascript
console.log(8 + ten());

=> 10
=> NaN
```

This is because it is trying to add 8 to `undefined`.

A function is only **defined** if it has a return value.

```javascript
const multiply = function(num1, num2) {
	return num1 * num2;
}
```

The `multiply` function has a **return value** of `num1` * `num2`. It does not just print to the console.

## console.log a function with a return value

Sometimes a returned value will not appear in your console. This is normal. **A return is not a console.log**. To see the return value of a function, you will want to console.log the invocation:

```javascript
console.log(multiply(2, 10));
```

> => 20

- Since `multiply` **returns** a value, we can use the return value of `multiply` as an argument to an invocation of `multiply`.

```javascript
console.log(multiply(multiply(2, 3), multiply(9, 4)));
```

> => 216

## return: stopping a function

**RETURN** sends the value of your function immediately. You can use **return** to terminate the function.

Example: will the function return 0 or 1? (It won't return both)

```javascript
const example = (input) => {
	if (input == "none") return 0;
	return 1;
};
```

```javascript
example("none")     // 0
example("two");     // 1
```

&#x1F535; **Activity**

* Write a function `calculateArea` that takes two parameters `width` and `length` and multiplies them. This will give us the area of a rectangle.
* Invoke the function a couple of times with different arguments each time

&#x1F535; **Activity and Research**

* Write a function that takes three parameters (numbers), sums them, converts the sum into a string and returns the string (eg. `"123"`)
* Use your google-fu to research converting a number into a string
* Invoke the function a couple of times with different arguments each time

&#x1F535; **Extra**

* Write a function that takes two parameters (strings) and returns `true` (Boolean) if the two strings are identical, `false` if not.

&#x1F535; **Experiment**

* What happens if you supply more arguments than there are parameters?
* What happens if you supply fewer arguments than there are parameters?

<br>
<hr>

# Problem-solving

### Palindrome

Writing a function to determine if a word is a Palindrome.

Pseudo-code and work in layers, one layer at a time. Don't jump ahead until each piece has been tested and works.

* reverse the word (how?)
* check if the word is the same as the reverse (how?)
* return true or false

<br>
<hr>

# Extra stuff: more on built-in methods

## String and array methods

**Refresher**

A method can be chained to a variable to perform an action. Example:

```javascript
const message = "hello there";

console.log(message.toUpperCase());
```

> => "HELLO THERE"

`.toUpperCase()` is a **method**.

<br>


## Datatypes

There are different methods for different **datatypes**.

Strings have different methods than arrays. In general, you can't use array methods on strings and vice versa.

Example of an **array** method:

```javascript
const letters = ['A', 'B', 'C', 'D'];

console.log(letters.join(''));
```

> => ABCD

`.join()` is a **method**, but it is only for arrays.


It will not work on a string:

```javascript
const letters = "ABCD";

console.log(letters.join(''));
```

![](https://i.imgur.com/Ire2ntQ.png)

> Here, `letters.join` is not a function because `.join` is not a method you can use on strings. See: TypeError


**.length is a method you can use on both strings and arrays**

<br>

## Methods can change the datatype

If we use `.join('')` on an array as intended:

```javascript
const letters = ['A', 'B', 'C', 'D'];

console.log(letters.join(''));
```

It will however output a **string**. Be mindful of this when it comes to **chaining methods**.

For example `.reverse()` is an **array** method.

```
console.log(letters.join.reverse());
```

![](https://i.imgur.com/NuPCUDB.png)

It will not work because the result of `letters.join('')` is a string.

<br>

## Chaining built-in methods

You can chain methods together:

```javascript
const str = "doodly doo";

console.log(str.split('').length);
```

> => 10

**Be mindful of datatypes**

This will not work:

```javascript
const str = "doodly doo";

console.log(str.split('').toUpperCase);
```

![](https://i.imgur.com/LDYjytH.png)

&#x1F535; **Why Not?**

Notice the error says `TypeError`. This is a big indicator as to what the problem is.

We are trying to use `.toUpperCase()` on the wrong type of data. In this case, we are trying to use it on an array, when it is not an array method. It is a string method.

&#x1F535; **Activity**

RESEARCH

How can you reverse a string?

* Try to use `.reverse()` on a **string**. Does it work?

* If it does not work, what is the error telling you?

* Try to use `.reverse()` on an array instead. Does it work?

There is no `.reverse()` method for strings, but there _is_ one for arrays.


&#x1F535; **Activity**

Using method chaining, figure out how to turn a string into an array, reverse the array, and turn the reversed array back into a string. This is one way to reverse a string. Chain the methods together on one line.

[Some string methods](https://www.w3schools.com/js/js_string_methods.asp)

[Some array methods](https://www.w3schools.com/js/js_array_methods.asp)

<br>

&#x1F535; **Extra**

Look into `regular expressions` and the [.match()](https://www.w3schools.com/jsref/jsref_match.asp) method. Use `.match()` only to select parts of a reversed string that match a pattern.

&#x1F535; **Extra**

Start in on this [regular expressions](https://regexone.com/) exercise.

<br>
<hr>


##### More About Global Scope

In our browsers, the global scope is represented by the `window` object.

It is at the top of the scope chain and its properties are available to **every** function we write.

It is generally bad practice for our programs to create variables in the global scope.  Doing so risks us overwriting data in use by JS libraries/frameworks or other routines.

Creating lots of global variables is referred to as "polluting the global scope", and we all know that it's not nice to pollute!

If we define a variable (or a function) within the global scope, it becomes a property on the `window` object. You can see this in action by typing `var pollution = 'sucks'` in the console, then type `window.` (don't forget the dot), scroll down and find the pollution we have created - yuck!

> Although using both `var` and `let` in the global scope results in a global variable being created, interestingly, those created using `let` and `const` do not create properties on the `window` object like `var` does.

##### Hoisting

Remember how we can call function declarations before they are defined thanks to _hoisting_?

As shown above, similarly, a variable's **declaration** (but not its assignment), is hoisted to the top of the function when it's declared using `var`.

For example, when we write code like this:

```js
function hoist() {
  console.log(x);  // outputs undefined, not a ReferenceError
  var x = 25;
  console.log(x);  // outputs 25
}
```

Internally, the JS engine actually sees this:

```js
function hoist() {
  var x;
  console.log(x);  // outputs undefined, not a ReferenceError
  x = 25;
  console.log(x);  // outputs 25
}
```

#### Nesting Functions

As the examples above have shown, we can define functions within functions!

Why would we want to do this? Well, Perhaps an outer function needs a "helper" function that would only be relevant only to a given function. It would be good programming practice to "hide" that function from the rest of the program by nesting it within the function that actually needs it.

For example (no need to execute this):

```js
function openNewAccount(name, openingBalance) {
  let acctNum = generateAcctNum();
  
  // createAccount is a function available outside this function
  let acct = createAccount(acctNum, openingBalance);
  return acct;
  
  // helper function that provides a unique account number
  function generateAcctNum() {
    return Date.now();  // super amazing algorithm :)
  }
}
```

As you can see, there's a nifty `generateAcctNum` function in there and it's only relevant to when a new account is opened, so it's nested within the `openNewAcount` function.


## References

[MDN Functions Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
