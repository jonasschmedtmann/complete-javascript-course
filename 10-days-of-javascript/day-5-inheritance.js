"use strict"

/**
 * Day 5: Inheritance
 * In this challenge, we practice implementing inheritance
 * and use JavaScript prototypes to add a new method to an
 * existing prototype. Check out the attached Classes tutorial
 * to refresh what we've learned about these topics.
 */

class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

// Write code that adds an 'area' method to the Rectangle class' prototype
Rectangle.prototype.area = function () {
  return this.w * this.h;
}

// Create a Square class that inherits from Rectangle and implement its class constructor
class Square extends Rectangle {
  constructor(s) {
    super(s);
    this.h = s;
    this.w = s;
  }
};

if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify(['constructor'])) {
  const rec = new Rectangle(3, 4);
  const sqr = new Square(3);

  console.log(rec.area());
  console.log(sqr.area());
} else {
  console.log(-1);
  console.log(-1);
}