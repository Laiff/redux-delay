"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = delayMiddleware;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function delayMiddleware(_ref) /* dispatch, getState */{
	var dispatch = _ref.dispatch;

	return function (next) {
		return function (action) {
			var delay = action.delay;

			var rest = _objectWithoutProperties(action, ["delay"]);

			if (delay) {
				// console.log('MIDDLEWARE DELAY ', action.type);
				// console.log(action);
				setTimeout(function () {
					return dispatch(_extends({}, rest));
				}, delay);
			} else return next(action);
		};
	};
}

module.exports = exports["default"];
