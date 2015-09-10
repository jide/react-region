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

var _reactLibShallowEqual = require('react/lib/shallowEqual');

var _reactLibShallowEqual2 = _interopRequireDefault(_reactLibShallowEqual);

var Region = (function (_Component) {
    _inherits(Region, _Component);

    _createClass(Region, null, [{
        key: 'propTypes',
        value: {
            region: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.object, _react.PropTypes.array]).isRequired,
            types: _react.PropTypes.object.isRequired,
            children: _react.PropTypes.func,
            className: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            className: ''
        },
        enumerable: true
    }]);

    function Region() {
        _classCallCheck(this, Region);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _get(Object.getPrototypeOf(Region.prototype), 'constructor', this).apply(this, args);

        this.renderItem = this.renderItem.bind(this);
    }

    _createClass(Region, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return !(0, _reactLibShallowEqual2['default'])(this.props.children, nextProps.children) || !(0, _reactLibShallowEqual2['default'])(this.props.region, nextProps.region);
        }
    }, {
        key: 'renderItem',
        value: function renderItem(item) {
            var i = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

            if (typeof item === 'object' && item.type) {
                var children = undefined;
                var RegisteredComponent = this.props.types[item.type] ? this.props.types[item.type] : item.type;

                if (item.props && item.props.children) {
                    children = Array.isArray(item.props.children) ? item.props.children.map(this.renderItem) : this.renderItem(item.props.children);
                }

                return _react2['default'].createElement(RegisteredComponent, _extends({ key: i }, item.props || {}, { children: children }));
            } else {
                return item;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var content = undefined;

            if (typeof this.props.children === 'function') {
                content = this.props.children(this.props.region);
            } else if (Array.isArray(this.props.region)) {
                content = this.props.region.map(this.renderItem);
            } else if (this.props.region) {
                content = this.renderItem(this.props.region);
            }

            return _react2['default'].createElement(
                'div',
                { className: this.props.className },
                content
            );
        }
    }]);

    return Region;
})(_react.Component);

exports['default'] = Region;
module.exports = exports['default'];