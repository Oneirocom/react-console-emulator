"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(commands, commandName, matchCaseInsensitive) {
  if (matchCaseInsensitive) {
    for (var _i = 0, _Object$keys = Object.keys(commands); _i < _Object$keys.length; _i++) {
      var command = _Object$keys[_i];

      if (new RegExp("^".concat(commandName, "$"), 'gi').test(command)) {
        return {
          exists: true,
          command: command
        };
      }
    }

    return {
      exists: false,
      command: null
    };
  } else {
    return {
      exists: commandName in commands,
      command: commandName
    };
  }
};

exports["default"] = _default;