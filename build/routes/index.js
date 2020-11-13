"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _settings = require("../settings");

var indexRouter = _express["default"].Router();

indexRouter.get('/', function (req, res) {
  return res.status(200).json({
    message: _settings.testEnvironmentVariable
  });
});
var _default = indexRouter;
exports["default"] = _default;