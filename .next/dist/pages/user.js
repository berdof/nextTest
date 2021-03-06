"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = require("next-redux-wrapper");

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _MomentComp = require("../components/MomentComp");

var _MomentComp2 = _interopRequireDefault(_MomentComp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement("div", null, _react2.default.createElement("h1", null, "user"), _react2.default.createElement("h2", null, "next.js react view"), _react2.default.createElement(_MomentComp2.default, { type: "user" }));
};