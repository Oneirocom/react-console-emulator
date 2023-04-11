"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _defaults = _interopRequireDefault(require("defaults"));

var _Terminal = _interopRequireDefault(require("../defs/styles/Terminal"));

var _TerminalMessage = _interopRequireDefault(require("../defs/styles/TerminalMessage"));

var _default = function _default(promptLabel, rawInput, stylingProps) {
  var sources = {
    echo: {
      label: {
        className: stylingProps.promptLabelClassName,
        style: (0, _defaults["default"])(stylingProps.promptLabelStyle, _Terminal["default"].promptLabel)
      },
      text: {
        className: stylingProps.inputTextClassName,
        style: (0, _defaults["default"])(stylingProps.inputTextStyle, _Terminal["default"].inputText)
      }
    },
    message: {
      label: {
        className: stylingProps.messageClassName,
        style: (0, _defaults["default"])(stylingProps.messageStyle, _TerminalMessage["default"])
      },
      text: {
        className: stylingProps.messageClassName,
        style: (0, _defaults["default"])(stylingProps.messageStyle, _TerminalMessage["default"])
      }
    }
  };

  var styles = function () {
    switch (stylingProps.styleEchoBack) {
      case 'fullInherit':
        return sources.echo;

      case 'messageInherit':
        return sources.message;

      case 'labelOnly':
        return {
          label: sources.echo.label,
          text: {}
        };

      case 'textOnly':
        return {
          label: {},
          text: sources.echo.text
        };

      default:
        return {
          label: {},
          text: {}
        };
    }
  }();

  return _react["default"].createElement("div", null, _react["default"].createElement("span", styles.label, promptLabel, " "), _react["default"].createElement("span", styles.text, rawInput));
};

exports["default"] = _default;