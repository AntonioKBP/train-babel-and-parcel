"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
// const Joi = require("joi");
// const shortId = require("shortid");

// const passwordSchema = Joi.string().min(3).max(10).alphanum();

// console.log(passwordSchema.validate("asdasdaaa"));
// console.log(shortId.generate());

var sum = function sum(a, b) {
  return a + b;
};
sum(2, 3);
var Hero = /*#__PURE__*/function () {
  function Hero(name) {
    _classCallCheck(this, Hero);
    this.name = name;
  }
  _createClass(Hero, [{
    key: "name",
    get: function get() {
      return this.name;
    },
    set: function set(newName) {
      this.name = newName;
    }
  }]);
  return Hero;
}();
var h = new Hero("mango");