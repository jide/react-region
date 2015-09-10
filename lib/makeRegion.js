'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Region = require('./Region');

var _Region2 = _interopRequireDefault(_Region);

exports['default'] = function () {
  var types = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return (function (_Component) {
    _inherits(RegionContainer, _Component);

    function RegionContainer() {
      _classCallCheck(this, RegionContainer);

      _get(Object.getPrototypeOf(RegionContainer.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(RegionContainer, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(_Region2['default'], _extends({ types: types }, this.props));
      }
    }]);

    return RegionContainer;
  })(_react.Component);
};

module.exports = exports['default'];