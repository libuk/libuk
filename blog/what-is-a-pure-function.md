---
path: /what-is-a-pure-function
date: 2019-05-18T15:02:22.784Z
title: What is a pure function?
---
Functional programming has increased in popularity the last couple years and one of the foundational concepts of FP is pure functions. But what are they? And why should we care?

A quick search will give us this definition from [Wikipedia](https://en.wikipedia.org/wiki/Pure_function):

> In computer programming, a pure function is a function that has the following properties:

> * Its return value depends only on its parameters and not on any internal or external state (such as local static variables, non-local variables or inputs from I/O devices).

> * Its evaluation has no side effect (such as mutation of local static variables or non-local variables, or performing I/O operations).

Let’s look at a couple of examples and find out how pure functions can benefit our code.

### It’s return value depends only on its parameters and not on any internal or external state

Let's break this down. Say we have a function that returns a welcome message to a user when they log in.

It will take in a `message` parameter.

``` javascript
const playerOne = 'Temi';

function welcomeMessage(message) {
  return \`Hi ${playerOne}, ${message}\`
};

welcomeMessage('welcome to our game.') // 'Hi Temi, welcome to our game.'
```

In this case our return value is the string `Hi Temi, welcome to our game.`, which is fine, it does what we need it to do. But `welcomeMessage` relies on a variable which isn’t directly passed to it as a parameter, the `playerOne` variable. This is a problem because we’re not able to reuse this function elsewhere in our code as it will always point to whatever the `playerOne` variable is:

``` javascript
const playerOne = 'Leorio';

function welcomeMessage(message) {
  return \`Hi ${playerOne}, ${message}\`
};

welcomeMessage('welcome to our game.') // 'Hi Leorio, welcome to our game.'

```

But what if you wanted to provide a welcome message for a secondary user instead? In this instance you’d have to create a second function, but if we convert it to a pure function we gain reusability.

Let’s provide both parameters directly to the function, that way the  `welcomeMessage` function only cares about what gets passed in and you can now reuse it and just pass in a different player:

``` javascript
const playerOne = 'Temi';
const playerTwo = 'Leorio';

function welcomeMessage(user, message) {
  return \`Hi ${user}, ${message}\`
};

const message = 'welcome to our game.';

welcomeMessage(playerOne, message); // 'Hi Temi, welcome to our game.'
welcomeMessage(playerTwo, message); // 'Hi Leorio, welcome to our game.'

```
We can now call `welcomeMessage` with the same parameters and be sure it will give us the same return value, making it a pure function. This change has now made `welcomeMessage` more predictable and as a result, easier to test:

```javascript

it('welcomeMessage returns given name and message', () => {
  const actual = welcomeMessage('Temi', 'welcome to our game.');

  const expected = 'Hi Temi, welcome to our game.';

  expect(actual).toEqual(expected);
});

```

### Its evaluation has no side effect such as mutation of variables

Direct mutation of a variable is a feature of an impure function. For example, in the source code for our game we have a function that increases a player’s power level:

```javascript

let powerLvl = 8999;

function increasePowerLvl (powerLvl) {
  return powerLvl++
};

increasePowerLvl(powerLvl);

```

If we were to log out the value of \`powerLvl\` before and after we call \`increasePowerLvl\` , we’d get two different results:

```javascript
let powerLvl = 8999;

function increasePowerLvl (powerLvl) {
	return powerLvl++
};

console.log(powerLvl); // 8999

increasePowerLvl(powerLvl);

console.log(powerLvl); // 9000

```

This could lead to bugs if another part of our game also relied on  `powerLvl`. A safer way would be to store the return value from `increasePowerLvl`  in a new variable of it’s own to be used where needed, leaving the original value in tact:

```javascript
const powerLvl = 9000

function increasePowerLvl (powerLvl) {
	return powerLvl + 1
}

const overNineThousand = increasePowerLvl(powerLvl)

```

Not only is this safer, it also makes clear to the reader at first glance that we’ve received a new value, increasing readability.

### Conclusion

Hopefully this has helped you better understand pure functions and why they’re beneficial to implement in your code. You may even have realised that you’ve been writing pure functions this whole time and wasn’t aware. In any case pure functions are safer, easier tested and can increase readability.
