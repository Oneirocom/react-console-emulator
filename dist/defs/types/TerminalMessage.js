"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _default = {
  content: _propTypes["default"].node,
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  dangerMode: _propTypes["default"].bool
};
exports["default"] = _default;