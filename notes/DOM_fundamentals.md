# DOM Fundamentals

Document Object Model 

Structured representation of HTML documents. 

Allows JS to access HTML elements and styles to manipulate them.

DOM is a tree structure.

DOM always starts with `document` object at the top. It's the entry point to the DOM (e.g. `document.querySelector()`)

DOM is not part of JavaScript.

DOM Methods and Properties are part of Web APIs (which we can interact with JS).

There are other Web APIs such as timer, fetch etc. 

## Getting and setting values

### Getting text values

```js
// Gets the text context of 'message' class and logs to console
console.log(document.querySelector('.message').textContent);
```

```js
// Gets the value of an input field with class 'guess' 
console.log(document.querySelector('.guess').value);
```

### Setting text values

```js
// Sets the content of 'score' class to 10
document.querySelector('.score').textContent = 10;
```

```js
// Sets the value of an input field with class 'guess' to 20
document.querySelector('.guess').value = 20;
```

### Getting and setting style values

```js
// Sets the background-color of 'body' element to #60b347
// Note: the css property has an equivalent camel case style in JS
document.querySelector('body').style.backgroundColor = '#60b347';

// Sets the width of the 'number' class to 30rem
document.querySelector('.number').style.width = '30rem';
```

## Click events

Say we want to get the value of a text field (class='guess') once a button (class='check') is clicked. 

```js
document.querySelector('.check').addEventListener(
    'click', 
    function() {
        console.log(document.querySelector('.guess').value)
    }
);
```

The first argument of `addEventListener` method is `click`. Second argument is an anonymous function that does something.

## Manipulate class list

```html
<div class="modal hidden">
    <p></p>
</div>
```

```js
const modal = document.querySelector('.modal');
modal.classList.remove('hidden')  // this will remove hidden class
// Note: we are not using .hidden, that notation is only for selectors.

modal.classList.add('hidden')  // this will add hidden class again
```

Check if class is present

```js
modal.classList.contains('hidden')  // returns a boolean whether hidden is a class or not.
```

## Listen for keyboard events

keydown: when a key is pressed
keypress: when a key is depressed
keyup: when a key is released

```js
// the message is logged any time a key is pressed
document.addEventListener('keydown', function () {
    console.log('A key was pressed')
});
```

To look for a specific key, add an event parameter to the function

```js
document.addEventListener('keydown', function (e) {
    console.log(e);  // this will log info about the key pressed
    console.log(e.key);  // this will give the actual key pressed

});
```