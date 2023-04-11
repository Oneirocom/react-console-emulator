"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = cleanArray;

function cleanArray(dirtyArray) {
  var newArray = Array.from(dirtyArray);
  return newArray.filter(function (i) {
    return i !== undefined;
  });
}