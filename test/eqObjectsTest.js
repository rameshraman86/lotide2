
const _ = require('../index');
const assert = require('chai').assert;

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue", "green"], sleeveLength: "long" };

_.assertEqual(_.eqObjects(shirtObject , anotherShirtObject), true); // => true
_.assertEqual(_.eqObjects(shirtObject , longSleeveShirtObject), false); // => false
_.assertEqual(_.eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true
_.assertEqual(_.eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false


