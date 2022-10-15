// const Joi = require("joi");
// const shortId = require("shortid");

// const passwordSchema = Joi.string().min(3).max(10).alphanum();

// console.log(passwordSchema.validate("asdasdaaa"));
// console.log(shortId.generate());

const sum = (a, b) => a + b;
sum(2, 3);

class Hero {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this.name;
  }

  set name(newName) {
    this.name = newName;
  }
}

const h = new Hero("mango");
