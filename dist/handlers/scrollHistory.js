"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cleanArray = _interopRequireDefault(require("../utils/cleanArray"));

var _sendCursorToEnd = _interopRequireDefault(require("../utils/sendCursorToEnd"));

var _default = function _default(direction, options) {
  var history = options.history,
      historyPosition = options.historyPosition,
      previousHistoryPosition = options.previousHistoryPosition,
      terminalInput = options.terminalInput;
  var commandHistory = (0, _cleanArray["default"])(history).reverse();
  var position = historyPosition;
  var previousPosition = previousHistoryPosition;
  var terminal = terminalInput.current;

  if (commandHistory.length > 0) {
    switch (direction) {
      case 'up':
        {
          var latest = commandHistory[0];
          var first = commandHistory[commandHistory.length - 1];
          var next = commandHistory[position + 1];

          if (position === null) {
            terminal.value = latest;
            (0, _sendCursorToEnd["default"])(terminal);
            return {
              historyPosition: 0,
              previousHistoryPosition: null
            };
          } else if (position + 1 === commandHistory.length) {
            terminal.value = first;
            (0, _sendCursorToEnd["default"])(terminal);
            return {
              historyPosition: commandHistory.length - 1,
              previousHistoryPosition: commandHistory.length === 1 ? null : commandHistory.length - 2
            };
          } else {
            terminal.value = next;
            (0, _sendCursorToEnd["default"])(terminal);
            return {
              historyPosition: position + 1,
              previousHistoryPosition: position
            };
          }
        }

      case 'down':
        {
          var _latest = commandHistory[0];
          var empty = '';
          var _next = commandHistory[position - 1];

          if (position === null || !commandHistory[position]) {
            terminal.value = empty;
            (0, _sendCursorToEnd["default"])(terminal);
            return {
              historyPosition: null,
              previousHistoryPosition: null
            };
          } else if (position - 1 === -1) {
            if (previousPosition === null || position === 0 && previousPosition === 1) terminal.value = empty;else terminal.value = _latest;
            (0, _sendCursorToEnd["default"])(terminal);
            return {
              historyPosition: null,
              previousHistoryPosition: null
            };
          } else {
            terminal.value = _next;
            (0, _sendCursorToEnd["default"])(terminal);
            return {
              historyPosition: position - 1,
              previousHistoryPosition: position
            };
          }
        }
    }
  }
};

exports["default"] = _default;