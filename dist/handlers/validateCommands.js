"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _commandExists2 = _interopRequireDefault(require("../utils/commandExists"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = function _default(commands, helpFn, clearFn, options) {
  var defaultCommands = {
    help: {
      description: 'Show a list of available commands.',
      fn: helpFn
    },
    clear: {
      description: 'Empty the terminal window.',
      explicitExec: true,
      fn: clearFn
    }
  };
  var validCommands;
  if (!options.noDefaults) validCommands = _objectSpread({}, defaultCommands);else validCommands = {};

  for (var c in commands) {
    if (options.ignoreCommandCase && /[^a-zA-Z0-9-_]/gi.test(c)) {
      throw new Error("Command name '".concat(c, "' is invalid; command names can only contain latin characters (A-Z), numbers (0-9) and dashes/underscores (- or _)"));
    }

    var _commandExists = (0, _commandExists2["default"])(validCommands, c, options.ignoreCommandCase),
        exists = _commandExists.exists;

    if (exists) {
      throw new Error("Attempting to override existing command '".concat(c, "'; please only supply one definition of a certain command, or set the noDefaults property to enable overriding of existing commands"));
    }

    if (typeof commands[c].fn !== 'function') {
      throw new Error("'fn' property of command '".concat(c, "' is invalid; expected 'function', got '").concat((0, _typeof2["default"])(commands[c].fn), "'"));
    }

    if (!commands[c].description) commands[c].description = 'None';
    validCommands[c] = commands[c];
  }

  return validCommands;
};

exports["default"] = _default;