"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _defaults = _interopRequireDefault(require("defaults"));

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _TerminalMessage = _interopRequireDefault(require("./TerminalMessage"));

var _validateCommands = _interopRequireDefault(require("./handlers/validateCommands"));

var _scrollHistory = _interopRequireDefault(require("./handlers/scrollHistory"));

var _parseEOL = _interopRequireDefault(require("./handlers/parseEOL"));

var _Terminal = _interopRequireDefault(require("./defs/styles/Terminal"));

var _Terminal2 = _interopRequireDefault(require("./defs/types/Terminal"));

var _commandExists2 = _interopRequireDefault(require("./utils/commandExists"));

var _constructEcho = _interopRequireDefault(require("./utils/constructEcho"));

var _shouldPromptBeVisible = _interopRequireDefault(require("./utils/shouldPromptBeVisible"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Terminal = function (_Component) {
  (0, _inherits2["default"])(Terminal, _Component);

  var _super = _createSuper(Terminal);

  function Terminal(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Terminal);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "focusTerminal", function () {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scrollToBottom", function () {
      var rootNode = _this.terminalRoot.current;
      setTimeout(function () {
        rootNode.scrollTop = rootNode.scrollHeight;
      }, 1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "validateCommands", function () {
      var _this$props = _this.props,
          commands = _this$props.commands,
          noDefaults = _this$props.noDefaults,
          ignoreCommandCase = _this$props.ignoreCommandCase;
      var validCommands = (0, _validateCommands["default"])(commands, _this.showHelp, _this.clearStdout, {
        noDefaults: noDefaults,
        ignoreCommandCase: ignoreCommandCase
      });

      _this.setState({
        commands: validCommands
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showWelcomeMessage", function () {
      var msg = _this.props.welcomeMessage;
      if (typeof msg === "boolean") _this.pushToStdout("Welcome to the React terminal! Type 'help' to get a list of commands.");else if (Array.isArray(msg)) msg.map(function (item) {
        return _this.pushToStdout(item);
      });else _this.pushToStdout(msg);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showHelp", function () {
      var commands = _this.state.commands;

      for (var c in commands) {
        var cmdObj = commands[c];
        var usage = cmdObj.usage ? " - ".concat(cmdObj.usage) : "";

        _this.pushToStdout("".concat(c, " - ").concat(cmdObj.description).concat(usage));
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "pushToStdout", function (message, options) {
      var stdout = _this.state.stdout;
      if (_this.props.locked) stdout.pop();
      stdout.push({
        message: message,
        isEcho: (options === null || options === void 0 ? void 0 : options.isEcho) || false
      });
      if (options !== null && options !== void 0 && options.rawInput) _this.pushToHistory(options.rawInput);

      _this.setState({
        stdout: stdout
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "pushToHistory", function (rawInput) {
      var history = _this.state.history;
      history.push(rawInput);

      _this.setState({
        history: history,
        historyPosition: null
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getStdout", function () {
      var stdout = !_this.props.noNewlineParsing ? (0, _parseEOL["default"])(_this.state.stdout) : _this.state.stdout;
      return stdout.map(function (line, i) {
        if (_react["default"].isValidElement(line.message)) return line.message;
        return _react["default"].createElement(_TerminalMessage["default"], {
          key: i,
          content: line.message,
          dangerMode: _this.props.dangerMode,
          className: !line.isEcho ? _this.props.messageClassName : undefined,
          style: !line.isEcho ? _this.props.messageStyle : undefined
        });
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "clearStdout", function () {
      _this.setState({
        stdout: []
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "clearInput", function () {
      _this.setState({
        historyPosition: null
      });

      _this.terminalInput.current.value = "";
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "processCommand", function () {
      _this.setState({
        processing: true
      }, (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        var commandResult, rawInput, input, rawCommand, args, _commandExists, exists, command, cmd, res;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commandResult = {
                  command: null,
                  args: [],
                  rawInput: null,
                  result: null
                };
                rawInput = _this.terminalInput.current.value;
                if (!_this.props.noHistory) _this.pushToHistory(rawInput);

                if (!_this.props.noEchoBack) {
                  _this.pushToStdout((0, _constructEcho["default"])(_this.props.promptLabel || "$", rawInput, _this.props), {
                    isEcho: true
                  });
                }

                if (!rawInput) {
                  _context.next = 25;
                  break;
                }

                input = rawInput.split(" ");
                rawCommand = input.splice(0, 1)[0];
                args = input;
                commandResult.rawInput = rawInput;
                commandResult.command = rawCommand;
                commandResult.args = args;
                _commandExists = (0, _commandExists2["default"])(_this.state.commands, rawCommand, _this.props.ignoreCommandCase), exists = _commandExists.exists, command = _commandExists.command;

                if (exists) {
                  _context.next = 16;
                  break;
                }

                _this.pushToStdout(_this.props.errorText ? _this.props.errorText.replace(/\[command\]/gi, command) : "Command '".concat(rawCommand, "' not found!"));

                _context.next = 25;
                break;

              case 16:
                cmd = _this.state.commands[command];
                _context.next = 19;
                return cmd.fn.apply(cmd, (0, _toConsumableArray2["default"])(args));

              case 19:
                res = _context.sent;

                _this.pushToStdout(res);

                commandResult.result = res;

                if (!cmd.explicitExec) {
                  _context.next = 25;
                  break;
                }

                _context.next = 25;
                return cmd.fn.apply(cmd, (0, _toConsumableArray2["default"])(args));

              case 25:
                _this.setState({
                  processing: false
                }, function () {
                  _this.clearInput();

                  if (!_this.props.noAutoScroll) _this.scrollToBottom();
                  if (_this.props.commandCallback) _this.props.commandCallback(commandResult);
                });

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scrollHistory", function (direction) {
      var _this$state = _this.state,
          history = _this$state.history,
          historyPosition = _this$state.historyPosition,
          previousHistoryPosition = _this$state.previousHistoryPosition;
      var toUpdate = (0, _scrollHistory["default"])(direction, {
        history: history,
        historyPosition: historyPosition,
        previousHistoryPosition: previousHistoryPosition,
        terminalInput: _this.terminalInput
      });
      if (toUpdate) _this.setState(toUpdate);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInput", function (event) {
      switch (event.key) {
        case "Enter":
          _this.processCommand();

          break;

        case "ArrowUp":
          _this.scrollHistory("up");

          break;

        case "ArrowDown":
          _this.scrollHistory("down");

          break;
      }
    });
    _this.state = {
      commands: {},
      stdout: [],
      history: [],
      historyPosition: null,
      previousHistoryPosition: null,
      processing: false
    };
    _this.terminalRoot = _react["default"].createRef();
    _this.terminalInput = _react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(Terminal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!(0, _reactFastCompare["default"])(prevProps.commands, this.props.commands)) this.validateCommands();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.validateCommands();
      if (this.props.welcomeMessage) this.showWelcomeMessage();
      if (this.props.autoFocus) this.focusTerminal();
    }
  }, {
    key: "render",
    value: function render() {
      var styles = {
        container: (0, _defaults["default"])(this.props.style, _Terminal["default"].container),
        content: (0, _defaults["default"])(this.props.contentStyle, _Terminal["default"].content),
        inputArea: (0, _defaults["default"])(this.props.inputAreaStyle, _Terminal["default"].inputArea),
        promptLabel: (0, _defaults["default"])(this.props.promptLabelStyle, _Terminal["default"].promptLabel),
        input: (0, _defaults["default"])(_objectSpread(_objectSpread({}, this.props.inputStyle), this.props.inputTextStyle), _objectSpread(_objectSpread({}, _Terminal["default"].input), _Terminal["default"].inputText))
      };
      return _react["default"].createElement("div", {
        ref: this.terminalRoot,
        name: "react-console-emulator",
        className: this.props.className,
        style: styles.container,
        onClick: this.focusTerminal
      }, _react["default"].createElement("div", {
        name: "react-console-emulator__content",
        className: this.props.contentClassName,
        style: styles.content
      }, this.getStdout(), _react["default"].createElement("div", {
        name: "react-console-emulator__inputArea",
        className: this.props.inputAreaClassName,
        style: (0, _shouldPromptBeVisible["default"])(this.state, this.props) ? styles.inputArea : {
          display: "none"
        }
      }, _react["default"].createElement("span", {
        name: "react-console-emulator__promptLabel",
        className: this.props.promptLabelClassName,
        style: styles.promptLabel
      }, this.props.promptLabel || "$"), _react["default"].createElement("input", {
        ref: this.terminalInput,
        name: "react-console-emulator__input",
        className: this.props.inputClassName,
        style: styles.input,
        onKeyDown: this.handleInput,
        type: "text",
        autoComplete: "off",
        disabled: this.props.disabled || this.props.disableOnProcess && this.state.processing
      }))));
    }
  }]);
  return Terminal;
}(_react.Component);

exports["default"] = Terminal;
(0, _defineProperty2["default"])(Terminal, "propTypes", _Terminal2["default"]);