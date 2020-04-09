"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Localstorage = /*#__PURE__*/function () {
  function Localstorage() {
    _classCallCheck(this, Localstorage);

    _defineProperty(this, "name", '');
  }

  _createClass(Localstorage, [{
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "dispatchEventStroage",
    value: function dispatchEventStroage() {
      var signSetItem = localStorage.setItem;
      var that = this;
      /** 重写增 */

      localStorage.setItem = function (key) {
        arguments[0] = "".concat(that.name, "-").concat(key);
        signSetItem.apply(this, arguments);
      };
      /** 重写查 */


      localStorage.getItem = function (key) {
        var value = "".concat(that.name, "-").concat(key);
        return this[value];
      };
    }
  }]);

  return Localstorage;
}();

var _default = Localstorage;
exports.default = _default;