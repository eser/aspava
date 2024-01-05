# README for ASPAVA JavaScript Library

## Overview

The `ASPAVA` is a versatile JavaScript library designed to manipulate and
generate sequences of words or phrases. It is a flexible and easy-to-use tool
that can be particularly useful for various applications, such as text
processing, generative art, and educational purposes.

This library is built around a simple yet powerful class, `AspavaGenerator`,
which provides various methods for manipulating a list of words or phrases. By
default, it comes with a predefined list of words, but it can be easily
customized to suit your needs.

## Features

- **Customizable Word List:** Start with a default set of words or input your
  own list.
- **Various Manipulation Methods:** Includes methods for shuffling, sorting
  (ascending and descending), changing case, and more.
- **Generator Function:** Utilize a generator function for iterative word
  generation.
- **Easy to Integrate:** Designed as an ES6 module, making it straightforward to
  include in modern JavaScript projects.

## Installation

To use the `ASPAVA` in your project, simply include it as a module. Ensure that
you have a JavaScript environment that supports ES6 modules.

```javascript
import aspava from "npm:aspava";
```

## Usage

### Initialization

Create an instance of `AspavaGenerator` with the default word list, or provide
your own array of words.

```javascript
import { AspavaGenerator } from "npm:aspava";

const customWords = ["Word1", "Word2", "Word3"];
const aspava = new AspavaGenerator(customWords);
```

### Basic Methods

1. **Get a specific word:**

   ```javascript
   const word = aspava.get(2); // Returns the 3rd word in the list
   ```

2. **Get all words:**

   ```javascript
   const words = aspava.getAll(); // Returns all words in the list
   ```

3. **Get words as a string:**

   ```javascript
   const str = aspava.getAsString(); // Returns all words joined by a space
   ```

4. **Get first letters of each word:**

   ```javascript
   const initials = aspava.getFirstLetters(); // Returns a string of initials
   ```

### Manipulation Methods

1. **Shuffle the words:**

   ```javascript
   aspava.shuffle(); // Randomly shuffles the words
   ```

2. **Sort words in ascending order:**

   ```javascript
   aspava.ascending(); // Sorts the words alphabetically
   ```

3. **Sort words in descending order:**

   ```javascript
   aspava.descending(); // Sorts the words in reverse alphabetical order
   ```

4. **Convert words to uppercase:**

   ```javascript
   aspava.upper(); // Converts all words to uppercase
   ```

5. **Convert words to lowercase:**

   ```javascript
   aspava.lower(); // Converts all words to lowercase
   ```

### Using the Generator

The `generator()` method yields a sequence of words up to a specified maximum
generation count (default is 6).

```javascript
for (const word of aspava.generator(6)) {
  console.log(word);
}
```

### Example

Here is a complete example demonstrating various functionalities of the
`ASPAVA`:

```javascript
import aspava from "npm:aspava";

// Generate 100 words, shuffle them and print each word in uppercase
for (const word of aspava.shuffle().upper().generator(100)) {
  console.log(word);
}
```

## Conclusion

The `ASPAVA` is a powerful and flexible tool that can be a valuable addition to
various JavaScript projects. With its easy-to-use interface and a wide range of
functionalities, it opens up many possibilities for creative and practical
applications.

---

**Note:** This README.md covers the basic functionalities and usage of the
`ASPAVA` library. For more advanced use cases and customization, please ask for
detailed information on GitHub.
