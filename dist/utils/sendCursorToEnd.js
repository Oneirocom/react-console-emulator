"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(inputElement) {
  if (inputElement) {
    var cursorStart = inputElement.selectionStart;
    var cursorEnd = inputElement.selectionEnd;
    setTimeout(function () {
      return inputElement.setSelectionRange(cursorStart, cursorEnd);
    }, 10);
  }
};

exports["default"] = _default;