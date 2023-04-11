"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(state, props) {
  var isNotReadOnly = !props.readOnly;
  var shouldHideWhenDisabled = props.hidePromptWhenDisabled;
  var shouldDisableOnProcess = props.disableOnProcess;
  var isDisabled = props.disabled;
  var isProcessing = state.processing;

  if (shouldHideWhenDisabled) {
    if (isDisabled) return false;else if (shouldDisableOnProcess && isProcessing) return false;
  }

  return isNotReadOnly;
};

exports["default"] = _default;