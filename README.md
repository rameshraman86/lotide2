# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rameshraman86/lotide`

**Require it:**

`const _ = require('@rameshraman86/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the first element of an Array.
* `tail(...)`: returns all but first element of an Array.
* `middle(...)`: returns middle element(s) of a Array. 
* `flattenRecursive(...)`: Flattens array into a single array.
* `eqArrays(...)`: compares two arrays.
* `assertEqual(...)`: assert function to compare two primitive values.
* `assertArraysEqual(...)`: assert function to compare two arrays.
* `eqObjects(...)`: compare two objects.
* `letterPositions(...)`: returns the index positions of a letter in a string.
* `findKeyByValue(...)`: returns the key of a given a value.