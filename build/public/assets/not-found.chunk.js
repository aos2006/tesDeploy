webpackJsonp([4],{

/***/ 1022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotFound_css__ = __webpack_require__(1023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__NotFound_css__);
var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/routes/not-found/NotFound.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var NotFound = function (_React$Component) {
  _inherits(NotFound, _React$Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3__NotFound_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_3__NotFound_css___default.a.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            this.props.title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              },
              __self: this
            },
            'Sorry, the page you were trying to view does not exist.'
          )
        )
      );
    }
  }]);

  return NotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

NotFound.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__NotFound_css___default.a)(NotFound));

/***/ }),

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(1024);
    var insertCss = __webpack_require__(267);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./NotFound.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./NotFound.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 1024:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(268)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.NotFound__root___hprJC {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound__container___m2ZQS {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/Users/anton/Desktop/projects/deworkacy-site/src/routes/not-found/NotFound.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;CAC/M;;AAED;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;CACnB","file":"NotFound.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "NotFound__root___hprJC",
	"container": "NotFound__container___m2ZQS"
};

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(1022);
var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/routes/not-found/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var title = 'Page Not Found';

function action() {
  return {
    chunks: ['not-found'],
    title: title,
    component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__NotFound__["a" /* default */], { title: title, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })
    ),
    status: 404
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(48);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(76);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(696);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FontIcon = function FontIcon(_ref // eslint-disable-line
) {
  var alt = _ref.alt,
      children = _ref.children,
      className = _ref.className,
      theme = _ref.theme,
      value = _ref.value,
      other = _objectWithoutProperties(_ref, ['alt', 'children', 'className', 'theme', 'value']);

  return _react2.default.createElement(
    'span',
    _extends({
      'data-react-toolbox': 'font-icon',
      'aria-label': alt,
      className: (0, _classnames2.default)({
        'material-icons': typeof value === 'string' || typeof children === 'string'
      }, className)
    }, other),
    value,
    children
  );
};

FontIcon.propTypes = {
  alt: _propTypes2.default.string,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object, // eslint-disable-line
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
};

FontIcon.defaultProps = {
  alt: '',
  className: ''
};

exports.default = FontIcon;
exports.FontIcon = FontIcon;

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(797)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontIcon = undefined;

var _FontIcon = __webpack_require__(697);

exports.default = _FontIcon.FontIcon;
exports.FontIcon = _FontIcon.FontIcon;

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnProps = exports.Col = exports.getRowProps = exports.Row = exports.Grid = undefined;

var _Row2 = __webpack_require__(794);

Object.defineProperty(exports, 'getRowProps', {
  enumerable: true,
  get: function get() {
    return _Row2.getRowProps;
  }
});

var _Col2 = __webpack_require__(799);

Object.defineProperty(exports, 'getColumnProps', {
  enumerable: true,
  get: function get() {
    return _Col2.getColumnProps;
  }
});

var _Grid2 = __webpack_require__(800);

var _Grid3 = _interopRequireDefault(_Grid2);

var _Row3 = _interopRequireDefault(_Row2);

var _Col3 = _interopRequireDefault(_Col2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Grid = _Grid3.default;
exports.Row = _Row3.default;
exports.Col = _Col3.default;

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClass;

var _flexboxgrid = __webpack_require__(795);

var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getClass(className) {
  return _flexboxgrid2.default && _flexboxgrid2.default[className] ? _flexboxgrid2.default[className] : className;
}

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createProps;
function createProps(propTypes, props, classNames) {
  var newProps = {};

  Object.keys(props).filter(function (key) {
    return key === 'children' || !propTypes[key];
  }).forEach(function (key) {
    return newProps[key] = props[key];
  });

  var className = classNames.filter(function (cn) {
    return cn;
  }).join(' ');
  return Object.assign({}, newProps, { className: className });
}

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(177);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/Link/Link.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */].push(_this.props.to);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Link, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          to = _props.to,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['to', 'children']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        _extends({ href: to }, props, { onClick: this.handleClick, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }),
        children
      );
    }
  }]);

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
Link.defaultProps = {
  onClick: null
};


/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(734);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewportSizeType = exports.ColumnSizeType = undefined;

var _propTypes = __webpack_require__(707);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColumnSizeType = exports.ColumnSizeType = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]);
var ViewportSizeType = exports.ViewportSizeType = _propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg']);

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_svg_react_loader_icons_burger_close_svg_name_BurgerClose__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_svg_react_loader_icons_burger_close_svg_name_BurgerClose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_svg_react_loader_icons_burger_close_svg_name_BurgerClose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_loader_svg_react_loader_icons_burger_show_svg_name_BurgerShow__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_loader_svg_react_loader_icons_burger_show_svg_name_BurgerShow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_loader_svg_react_loader_icons_burger_show_svg_name_BurgerShow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Burger_css__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Burger_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Burger_css__);
var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/Burger/Burger.js',
    _this = this;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Burger = function Burger(_ref) {
  var _cx;

  var show = _ref.show,
      onClick = _ref.onClick,
      isStatic = _ref.isStatic;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()((_cx = {}, _defineProperty(_cx, __WEBPACK_IMPORTED_MODULE_5__Burger_css___default.a.root, true), _defineProperty(_cx, __WEBPACK_IMPORTED_MODULE_5__Burger_css___default.a.static, isStatic), _cx)),
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      { className: __WEBPACK_IMPORTED_MODULE_5__Burger_css___default.a.icon, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: _this
      },
      show ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__babel_loader_svg_react_loader_icons_burger_close_svg_name_BurgerClose___default.a, { className: __WEBPACK_IMPORTED_MODULE_5__Burger_css___default.a.burger, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: _this
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__babel_loader_svg_react_loader_icons_burger_show_svg_name_BurgerShow___default.a, { className: __WEBPACK_IMPORTED_MODULE_5__Burger_css___default.a.burger, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: _this
      })
    )
  );
};
Burger.defaultProps = {
  isStatic: false
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__Burger_css___default.a)(Burger));

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(818)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(741);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(823);
    var insertCss = __webpack_require__(267);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./Accordeon.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./Accordeon.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(801);
    var insertCss = __webpack_require__(267);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-rules-3!../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./grid.css", function() {
        content = require("!!../../node_modules/css-loader/index.js??ref--1-rules-3!../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./grid.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRowProps = getRowProps;
exports.default = Row;

var _classNames = __webpack_require__(721);

var _classNames2 = _interopRequireDefault(_classNames);

var _react = __webpack_require__(48);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(707);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = __webpack_require__(722);

var _createProps2 = _interopRequireDefault(_createProps);

var _types = __webpack_require__(738);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];

var propTypes = {
  reverse: _propTypes2.default.bool,
  start: _types.ViewportSizeType,
  center: _types.ViewportSizeType,
  end: _types.ViewportSizeType,
  top: _types.ViewportSizeType,
  middle: _types.ViewportSizeType,
  bottom: _types.ViewportSizeType,
  around: _types.ViewportSizeType,
  between: _types.ViewportSizeType,
  className: _propTypes2.default.string,
  tagName: _propTypes2.default.string,
  children: _propTypes2.default.node
};

function getRowClassNames(props) {
  var modificators = [props.className, (0, _classNames2.default)('row')];

  for (var i = 0; i < rowKeys.length; ++i) {
    var key = rowKeys[i];
    var value = props[key];
    if (value) {
      modificators.push((0, _classNames2.default)(key + '-' + value));
    }
  }

  if (props.reverse) {
    modificators.push((0, _classNames2.default)('reverse'));
  }

  return modificators;
}

function getRowProps(props) {
  return (0, _createProps2.default)(propTypes, props, getRowClassNames(props));
}

function Row(props) {
  return _react2.default.createElement(props.tagName || 'div', getRowProps(props));
}

Row.propTypes = propTypes;

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(796);
    var insertCss = __webpack_require__(267);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../css-loader/index.js??ref--1-rules-1!../../postcss-loader/lib/index.js??ref--1-rules-4!./flexboxgrid.css", function() {
        content = require("!!../../css-loader/index.js??ref--1-rules-1!../../postcss-loader/lib/index.js??ref--1-rules-4!./flexboxgrid.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(268)(true);
// imports


// module
exports.push([module.i, ".flexboxgrid__container-fluid___2lUES,\n.flexboxgrid__container___R2zU9 {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.flexboxgrid__container-fluid___2lUES {\n  padding-right: 32px;\n  padding-right: 32px;\n  padding-right: 2rem;\n  padding-left: 32px;\n  padding-left: 32px;\n  padding-left: 2rem;\n}\n\n.flexboxgrid__row___1y_mg {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -8px;\n  margin-right: -8px;\n  margin-right: -0.5rem;\n  margin-left: -8px;\n  margin-left: -8px;\n  margin-left: -0.5rem;\n}\n\n.flexboxgrid__row___1y_mg.flexboxgrid__reverse___1X682 {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n}\n\n.flexboxgrid__col___3RqPP.flexboxgrid__reverse___1X682 {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: column-reverse;\n  flex-direction: column-reverse;\n}\n\n.flexboxgrid__col-xs___1ROHR,\n.flexboxgrid__col-xs-1___VtNIK,\n.flexboxgrid__col-xs-2___36nDa,\n.flexboxgrid__col-xs-3___2f2Ql,\n.flexboxgrid__col-xs-4___TxBJg,\n.flexboxgrid__col-xs-5___1HkK5,\n.flexboxgrid__col-xs-6___1DhV6,\n.flexboxgrid__col-xs-7___3o2m-,\n.flexboxgrid__col-xs-8___3ARGc,\n.flexboxgrid__col-xs-9___15qfl,\n.flexboxgrid__col-xs-10___2AWNv,\n.flexboxgrid__col-xs-11___3H-6F,\n.flexboxgrid__col-xs-12___phbtE,\n.flexboxgrid__col-xs-offset-0___10C7E,\n.flexboxgrid__col-xs-offset-1___12o_R,\n.flexboxgrid__col-xs-offset-2___2Hh-B,\n.flexboxgrid__col-xs-offset-3___8NCys,\n.flexboxgrid__col-xs-offset-4___dA0P1,\n.flexboxgrid__col-xs-offset-5___2MbdF,\n.flexboxgrid__col-xs-offset-6___3N3bt,\n.flexboxgrid__col-xs-offset-7___1yQDG,\n.flexboxgrid__col-xs-offset-8___2aEcW,\n.flexboxgrid__col-xs-offset-9___2haBv,\n.flexboxgrid__col-xs-offset-10___1QsVg,\n.flexboxgrid__col-xs-offset-11___29xQn,\n.flexboxgrid__col-xs-offset-12___1XWFb {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  padding-right: 8px;\n  padding-right: 8px;\n  padding-right: 0.5rem;\n  padding-left: 8px;\n  padding-left: 8px;\n  padding-left: 0.5rem;\n}\n\n.flexboxgrid__col-xs___1ROHR {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  max-width: 100%;\n}\n\n.flexboxgrid__col-xs-1___VtNIK {\n  -ms-flex-preferred-size: 8.33333333%;\n  flex-basis: 8.33333333%;\n  max-width: 8.33333333%;\n}\n\n.flexboxgrid__col-xs-2___36nDa {\n  -ms-flex-preferred-size: 16.66666667%;\n  flex-basis: 16.66666667%;\n  max-width: 16.66666667%;\n}\n\n.flexboxgrid__col-xs-3___2f2Ql {\n  -ms-flex-preferred-size: 25%;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n\n.flexboxgrid__col-xs-4___TxBJg {\n  -ms-flex-preferred-size: 33.33333333%;\n  flex-basis: 33.33333333%;\n  max-width: 33.33333333%;\n}\n\n.flexboxgrid__col-xs-5___1HkK5 {\n  -ms-flex-preferred-size: 41.66666667%;\n  flex-basis: 41.66666667%;\n  max-width: 41.66666667%;\n}\n\n.flexboxgrid__col-xs-6___1DhV6 {\n  -ms-flex-preferred-size: 50%;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n\n.flexboxgrid__col-xs-7___3o2m- {\n  -ms-flex-preferred-size: 58.33333333%;\n  flex-basis: 58.33333333%;\n  max-width: 58.33333333%;\n}\n\n.flexboxgrid__col-xs-8___3ARGc {\n  -ms-flex-preferred-size: 66.66666667%;\n  flex-basis: 66.66666667%;\n  max-width: 66.66666667%;\n}\n\n.flexboxgrid__col-xs-9___15qfl {\n  -ms-flex-preferred-size: 75%;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n\n.flexboxgrid__col-xs-10___2AWNv {\n  -ms-flex-preferred-size: 83.33333333%;\n  flex-basis: 83.33333333%;\n  max-width: 83.33333333%;\n}\n\n.flexboxgrid__col-xs-11___3H-6F {\n  -ms-flex-preferred-size: 91.66666667%;\n  flex-basis: 91.66666667%;\n  max-width: 91.66666667%;\n}\n\n.flexboxgrid__col-xs-12___phbtE {\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n\n.flexboxgrid__col-xs-offset-0___10C7E {\n  margin-left: 0;\n}\n\n.flexboxgrid__col-xs-offset-1___12o_R {\n  margin-left: 8.33333333%;\n}\n\n.flexboxgrid__col-xs-offset-2___2Hh-B {\n  margin-left: 16.66666667%;\n}\n\n.flexboxgrid__col-xs-offset-3___8NCys {\n  margin-left: 25%;\n}\n\n.flexboxgrid__col-xs-offset-4___dA0P1 {\n  margin-left: 33.33333333%;\n}\n\n.flexboxgrid__col-xs-offset-5___2MbdF {\n  margin-left: 41.66666667%;\n}\n\n.flexboxgrid__col-xs-offset-6___3N3bt {\n  margin-left: 50%;\n}\n\n.flexboxgrid__col-xs-offset-7___1yQDG {\n  margin-left: 58.33333333%;\n}\n\n.flexboxgrid__col-xs-offset-8___2aEcW {\n  margin-left: 66.66666667%;\n}\n\n.flexboxgrid__col-xs-offset-9___2haBv {\n  margin-left: 75%;\n}\n\n.flexboxgrid__col-xs-offset-10___1QsVg {\n  margin-left: 83.33333333%;\n}\n\n.flexboxgrid__col-xs-offset-11___29xQn {\n  margin-left: 91.66666667%;\n}\n\n.flexboxgrid__start-xs___h8qdA {\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  text-align: start;\n}\n\n.flexboxgrid__center-xs___1JWon {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.flexboxgrid__end-xs___33Mku {\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  text-align: end;\n}\n\n.flexboxgrid__top-xs___UhA-V {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n\n.flexboxgrid__middle-xs___1h5t3 {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.flexboxgrid__bottom-xs___2tRUa {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n}\n\n.flexboxgrid__around-xs___1okkK {\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n}\n\n.flexboxgrid__between-xs___WFP84 {\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.flexboxgrid__first-xs___XoosK {\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.flexboxgrid__last-xs___HnlRw {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n@media only screen and (min-width: 48em) {\n  .flexboxgrid__container___R2zU9 {\n    width: 49rem;\n  }\n\n  .flexboxgrid__col-sm___3tZ-z,\n  .flexboxgrid__col-sm-1___2Gca6,\n  .flexboxgrid__col-sm-2___YETza,\n  .flexboxgrid__col-sm-3___2irZQ,\n  .flexboxgrid__col-sm-4___3kj7S,\n  .flexboxgrid__col-sm-5___gAxuQ,\n  .flexboxgrid__col-sm-6___vUdKH,\n  .flexboxgrid__col-sm-7___22IcQ,\n  .flexboxgrid__col-sm-8___2_YhB,\n  .flexboxgrid__col-sm-9___2ubpx,\n  .flexboxgrid__col-sm-10___262G9,\n  .flexboxgrid__col-sm-11___39s7J,\n  .flexboxgrid__col-sm-12___1e5Uk,\n  .flexboxgrid__col-sm-offset-0___llQ6-,\n  .flexboxgrid__col-sm-offset-1___1PFWu,\n  .flexboxgrid__col-sm-offset-2___1DgbO,\n  .flexboxgrid__col-sm-offset-3___3W5Iv,\n  .flexboxgrid__col-sm-offset-4___3YToG,\n  .flexboxgrid__col-sm-offset-5___609Vo,\n  .flexboxgrid__col-sm-offset-6___TCeVQ,\n  .flexboxgrid__col-sm-offset-7___csvBu,\n  .flexboxgrid__col-sm-offset-8___11PYH,\n  .flexboxgrid__col-sm-offset-9___24Evy,\n  .flexboxgrid__col-sm-offset-10___1-lcE,\n  .flexboxgrid__col-sm-offset-11___2ynFq,\n  .flexboxgrid__col-sm-offset-12___3MBMi {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .flexboxgrid__col-sm___3tZ-z {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .flexboxgrid__col-sm-1___2Gca6 {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .flexboxgrid__col-sm-2___YETza {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .flexboxgrid__col-sm-3___2irZQ {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .flexboxgrid__col-sm-4___3kj7S {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .flexboxgrid__col-sm-5___gAxuQ {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .flexboxgrid__col-sm-6___vUdKH {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .flexboxgrid__col-sm-7___22IcQ {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .flexboxgrid__col-sm-8___2_YhB {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .flexboxgrid__col-sm-9___2ubpx {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flexboxgrid__col-sm-10___262G9 {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .flexboxgrid__col-sm-11___39s7J {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .flexboxgrid__col-sm-12___1e5Uk {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .flexboxgrid__col-sm-offset-0___llQ6- {\n    margin-left: 0;\n  }\n\n  .flexboxgrid__col-sm-offset-1___1PFWu {\n    margin-left: 8.33333333%;\n  }\n\n  .flexboxgrid__col-sm-offset-2___1DgbO {\n    margin-left: 16.66666667%;\n  }\n\n  .flexboxgrid__col-sm-offset-3___3W5Iv {\n    margin-left: 25%;\n  }\n\n  .flexboxgrid__col-sm-offset-4___3YToG {\n    margin-left: 33.33333333%;\n  }\n\n  .flexboxgrid__col-sm-offset-5___609Vo {\n    margin-left: 41.66666667%;\n  }\n\n  .flexboxgrid__col-sm-offset-6___TCeVQ {\n    margin-left: 50%;\n  }\n\n  .flexboxgrid__col-sm-offset-7___csvBu {\n    margin-left: 58.33333333%;\n  }\n\n  .flexboxgrid__col-sm-offset-8___11PYH {\n    margin-left: 66.66666667%;\n  }\n\n  .flexboxgrid__col-sm-offset-9___24Evy {\n    margin-left: 75%;\n  }\n\n  .flexboxgrid__col-sm-offset-10___1-lcE {\n    margin-left: 83.33333333%;\n  }\n\n  .flexboxgrid__col-sm-offset-11___2ynFq {\n    margin-left: 91.66666667%;\n  }\n\n  .flexboxgrid__start-sm___3Dilu {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .flexboxgrid__center-sm___39HWq {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .flexboxgrid__end-sm___3B07f {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .flexboxgrid__top-sm___1begS {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .flexboxgrid__middle-sm___Oh4K7 {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .flexboxgrid__bottom-sm___1jPnc {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .flexboxgrid__around-sm___3ffbb {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .flexboxgrid__between-sm___1Rcaf {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .flexboxgrid__first-sm___2Gzhb {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .flexboxgrid__last-sm___1pF8w {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}\n\n@media only screen and (min-width: 64em) {\n  .flexboxgrid__container___R2zU9 {\n    width: 65rem;\n  }\n\n  .flexboxgrid__col-md___2lbzm,\n  .flexboxgrid__col-md-1___1Lapj,\n  .flexboxgrid__col-md-2___1c_4t,\n  .flexboxgrid__col-md-3___3ANRS,\n  .flexboxgrid__col-md-4___a_FyK,\n  .flexboxgrid__col-md-5___YXlMq,\n  .flexboxgrid__col-md-6___5OSyJ,\n  .flexboxgrid__col-md-7___1Zp-r,\n  .flexboxgrid__col-md-8___3979J,\n  .flexboxgrid__col-md-9___2fXuC,\n  .flexboxgrid__col-md-10___2Jbee,\n  .flexboxgrid__col-md-11___3drbK,\n  .flexboxgrid__col-md-12___zR2lK,\n  .flexboxgrid__col-md-offset-0___2O3vR,\n  .flexboxgrid__col-md-offset-1___2XNCz,\n  .flexboxgrid__col-md-offset-2___2t-NV,\n  .flexboxgrid__col-md-offset-3___1zlTP,\n  .flexboxgrid__col-md-offset-4___3aHxz,\n  .flexboxgrid__col-md-offset-5___3S2Gw,\n  .flexboxgrid__col-md-offset-6___3KV0V,\n  .flexboxgrid__col-md-offset-7___1OdCD,\n  .flexboxgrid__col-md-offset-8___2vFbQ,\n  .flexboxgrid__col-md-offset-9___1q95x,\n  .flexboxgrid__col-md-offset-10___2CeMK,\n  .flexboxgrid__col-md-offset-11___3u6XW,\n  .flexboxgrid__col-md-offset-12___eKUlL {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .flexboxgrid__col-md___2lbzm {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .flexboxgrid__col-md-1___1Lapj {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .flexboxgrid__col-md-2___1c_4t {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .flexboxgrid__col-md-3___3ANRS {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .flexboxgrid__col-md-4___a_FyK {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .flexboxgrid__col-md-5___YXlMq {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .flexboxgrid__col-md-6___5OSyJ {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .flexboxgrid__col-md-7___1Zp-r {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .flexboxgrid__col-md-8___3979J {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .flexboxgrid__col-md-9___2fXuC {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flexboxgrid__col-md-10___2Jbee {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .flexboxgrid__col-md-11___3drbK {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .flexboxgrid__col-md-12___zR2lK {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .flexboxgrid__col-md-offset-0___2O3vR {\n    margin-left: 0;\n  }\n\n  .flexboxgrid__col-md-offset-1___2XNCz {\n    margin-left: 8.33333333%;\n  }\n\n  .flexboxgrid__col-md-offset-2___2t-NV {\n    margin-left: 16.66666667%;\n  }\n\n  .flexboxgrid__col-md-offset-3___1zlTP {\n    margin-left: 25%;\n  }\n\n  .flexboxgrid__col-md-offset-4___3aHxz {\n    margin-left: 33.33333333%;\n  }\n\n  .flexboxgrid__col-md-offset-5___3S2Gw {\n    margin-left: 41.66666667%;\n  }\n\n  .flexboxgrid__col-md-offset-6___3KV0V {\n    margin-left: 50%;\n  }\n\n  .flexboxgrid__col-md-offset-7___1OdCD {\n    margin-left: 58.33333333%;\n  }\n\n  .flexboxgrid__col-md-offset-8___2vFbQ {\n    margin-left: 66.66666667%;\n  }\n\n  .flexboxgrid__col-md-offset-9___1q95x {\n    margin-left: 75%;\n  }\n\n  .flexboxgrid__col-md-offset-10___2CeMK {\n    margin-left: 83.33333333%;\n  }\n\n  .flexboxgrid__col-md-offset-11___3u6XW {\n    margin-left: 91.66666667%;\n  }\n\n  .flexboxgrid__start-md___2B-sg {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .flexboxgrid__center-md___3VDfS {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .flexboxgrid__end-md___2fJWy {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .flexboxgrid__top-md___12FDg {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .flexboxgrid__middle-md___3wIJR {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .flexboxgrid__bottom-md___2v1cd {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .flexboxgrid__around-md___1x54_ {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .flexboxgrid__between-md___Xn-9x {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .flexboxgrid__first-md___3j4t5 {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .flexboxgrid__last-md___3y72e {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}\n\n@media only screen and (min-width: 75em) {\n  .flexboxgrid__container___R2zU9 {\n    width: 76rem;\n  }\n\n  .flexboxgrid__col-lg___3SaXd,\n  .flexboxgrid__col-lg-1___2VMiv,\n  .flexboxgrid__col-lg-2___21dKK,\n  .flexboxgrid__col-lg-3___vbACp,\n  .flexboxgrid__col-lg-4___2hzy8,\n  .flexboxgrid__col-lg-5___1-g7-,\n  .flexboxgrid__col-lg-6___21lf8,\n  .flexboxgrid__col-lg-7___3kBG1,\n  .flexboxgrid__col-lg-8___afECx,\n  .flexboxgrid__col-lg-9___10mdl,\n  .flexboxgrid__col-lg-10___1yTfj,\n  .flexboxgrid__col-lg-11___3hMRu,\n  .flexboxgrid__col-lg-12___1rlAA,\n  .flexboxgrid__col-lg-offset-0___3KM3x,\n  .flexboxgrid__col-lg-offset-1___KhvqR,\n  .flexboxgrid__col-lg-offset-2___1ZD_z,\n  .flexboxgrid__col-lg-offset-3___2GQVa,\n  .flexboxgrid__col-lg-offset-4___1zPZj,\n  .flexboxgrid__col-lg-offset-5___Kj8Iq,\n  .flexboxgrid__col-lg-offset-6___3nun3,\n  .flexboxgrid__col-lg-offset-7___YTmn9,\n  .flexboxgrid__col-lg-offset-8___1qG2t,\n  .flexboxgrid__col-lg-offset-9___qd27B,\n  .flexboxgrid__col-lg-offset-10___2YScP,\n  .flexboxgrid__col-lg-offset-11___3pPvj,\n  .flexboxgrid__col-lg-offset-12___2rHEg {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .flexboxgrid__col-lg___3SaXd {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .flexboxgrid__col-lg-1___2VMiv {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .flexboxgrid__col-lg-2___21dKK {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .flexboxgrid__col-lg-3___vbACp {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .flexboxgrid__col-lg-4___2hzy8 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .flexboxgrid__col-lg-5___1-g7- {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .flexboxgrid__col-lg-6___21lf8 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .flexboxgrid__col-lg-7___3kBG1 {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .flexboxgrid__col-lg-8___afECx {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .flexboxgrid__col-lg-9___10mdl {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flexboxgrid__col-lg-10___1yTfj {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .flexboxgrid__col-lg-11___3hMRu {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .flexboxgrid__col-lg-12___1rlAA {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .flexboxgrid__col-lg-offset-0___3KM3x {\n    margin-left: 0;\n  }\n\n  .flexboxgrid__col-lg-offset-1___KhvqR {\n    margin-left: 8.33333333%;\n  }\n\n  .flexboxgrid__col-lg-offset-2___1ZD_z {\n    margin-left: 16.66666667%;\n  }\n\n  .flexboxgrid__col-lg-offset-3___2GQVa {\n    margin-left: 25%;\n  }\n\n  .flexboxgrid__col-lg-offset-4___1zPZj {\n    margin-left: 33.33333333%;\n  }\n\n  .flexboxgrid__col-lg-offset-5___Kj8Iq {\n    margin-left: 41.66666667%;\n  }\n\n  .flexboxgrid__col-lg-offset-6___3nun3 {\n    margin-left: 50%;\n  }\n\n  .flexboxgrid__col-lg-offset-7___YTmn9 {\n    margin-left: 58.33333333%;\n  }\n\n  .flexboxgrid__col-lg-offset-8___1qG2t {\n    margin-left: 66.66666667%;\n  }\n\n  .flexboxgrid__col-lg-offset-9___qd27B {\n    margin-left: 75%;\n  }\n\n  .flexboxgrid__col-lg-offset-10___2YScP {\n    margin-left: 83.33333333%;\n  }\n\n  .flexboxgrid__col-lg-offset-11___3pPvj {\n    margin-left: 91.66666667%;\n  }\n\n  .flexboxgrid__start-lg___ageu9 {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .flexboxgrid__center-lg___3H3SI {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .flexboxgrid__end-lg___27_fM {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .flexboxgrid__top-lg___1tWWw {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .flexboxgrid__middle-lg___nocGI {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .flexboxgrid__bottom-lg___IYGks {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .flexboxgrid__around-lg___zZC2C {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .flexboxgrid__between-lg___2njzk {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .flexboxgrid__first-lg___6dksO {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .flexboxgrid__last-lg___xGBvS {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}", "", {"version":3,"sources":["/Users/anton/Desktop/projects/deworkacy-site/node_modules/flexboxgrid/dist/flexboxgrid.css"],"names":[],"mappings":"AAAA;;EAEE,mBAAmB;EACnB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;CACpB;;AAED;EACE,+BAA+B;UACvB,uBAAuB;EAC/B,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,oBAAoB;EACpB,mBAAmB;EACnB,eAAe;EACf,+BAA+B;EAC/B,8BAA8B;EAC9B,wBAAwB;EACxB,oBAAoB;EACpB,oBAAoB;EACpB,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;CACtB;;AAED;EACE,+BAA+B;EAC/B,+BAA+B;EAC/B,gCAAgC;EAChC,4BAA4B;CAC7B;;AAED;EACE,6BAA6B;EAC7B,+BAA+B;EAC/B,mCAAmC;EACnC,+BAA+B;CAChC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;EA0BE,+BAA+B;UACvB,uBAAuB;EAC/B,oBAAoB;EACpB,mBAAmB;EACnB,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;CACtB;;AAED;EACE,oBAAoB;EACpB,qBAAqB;EACrB,aAAa;EACb,2BAA2B;EAC3B,cAAc;EACd,gBAAgB;CACjB;;AAED;EACE,qCAAqC;EACrC,wBAAwB;EACxB,uBAAuB;CACxB;;AAED;EACE,sCAAsC;EACtC,yBAAyB;EACzB,wBAAwB;CACzB;;AAED;EACE,6BAA6B;EAC7B,gBAAgB;EAChB,eAAe;CAChB;;AAED;EACE,sCAAsC;EACtC,yBAAyB;EACzB,wBAAwB;CACzB;;AAED;EACE,sCAAsC;EACtC,yBAAyB;EACzB,wBAAwB;CACzB;;AAED;EACE,6BAA6B;EAC7B,gBAAgB;EAChB,eAAe;CAChB;;AAED;EACE,sCAAsC;EACtC,yBAAyB;EACzB,wBAAwB;CACzB;;AAED;EACE,sCAAsC;EACtC,yBAAyB;EACzB,wBAAwB;CACzB;;AAED;EACE,6BAA6B;EAC7B,gBAAgB;EAChB,eAAe;CAChB;;AAED;EACE,sCAAsC;EACtC,yBAAyB;EACzB,wBAAwB;CACzB;;AAED;EACE,sCAAsC;EACtC,yBAAyB;EACzB,wBAAwB;CACzB;;AAED;EACE,8BAA8B;EAC9B,iBAAiB;EACjB,gBAAgB;CACjB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,yBAAyB;CAC1B;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,wBAAwB;EACxB,qBAAqB;EACrB,4BAA4B;EAC5B,kBAAkB;CACnB;;AAED;EACE,yBAAyB;EACzB,sBAAsB;EACtB,wBAAwB;EACxB,mBAAmB;CACpB;;AAED;EACE,sBAAsB;EACtB,mBAAmB;EACnB,0BAA0B;EAC1B,gBAAgB;CACjB;;AAED;EACE,yBAAyB;EACzB,sBAAsB;EACtB,wBAAwB;CACzB;;AAED;EACE,0BAA0B;EAC1B,uBAAuB;EACvB,oBAAoB;CACrB;;AAED;EACE,uBAAuB;EACvB,oBAAoB;EACpB,sBAAsB;CACvB;;AAED;EACE,0BAA0B;EAC1B,8BAA8B;CAC/B;;AAED;EACE,0BAA0B;EAC1B,uBAAuB;EACvB,+BAA+B;CAChC;;AAED;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,UAAU;CACX;;AAED;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,SAAS;CACV;;AAED;EACE;IACE,aAAa;GACd;;EAED;;;;;;;;;;;;;;;;;;;;;;;;;;IA0BE,+BAA+B;YACvB,uBAAuB;IAC/B,oBAAoB;IACpB,mBAAmB;IACnB,eAAe;IACf,sBAAsB;IACtB,qBAAqB;GACtB;;EAED;IACE,oBAAoB;IACpB,qBAAqB;IACrB,aAAa;IACb,2BAA2B;IAC3B,cAAc;IACd,gBAAgB;GACjB;;EAED;IACE,qCAAqC;IACrC,wBAAwB;IACxB,uBAAuB;GACxB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;GAChB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;GAChB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;GAChB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,8BAA8B;IAC9B,iBAAiB;IACjB,gBAAgB;GACjB;;EAED;IACE,eAAe;GAChB;;EAED;IACE,yBAAyB;GAC1B;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,iBAAiB;GAClB;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,iBAAiB;GAClB;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,iBAAiB;GAClB;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,wBAAwB;IACxB,qBAAqB;IACrB,4BAA4B;IAC5B,kBAAkB;GACnB;;EAED;IACE,yBAAyB;IACzB,sBAAsB;IACtB,wBAAwB;IACxB,mBAAmB;GACpB;;EAED;IACE,sBAAsB;IACtB,mBAAmB;IACnB,0BAA0B;IAC1B,gBAAgB;GACjB;;EAED;IACE,yBAAyB;IACzB,sBAAsB;IACtB,wBAAwB;GACzB;;EAED;IACE,0BAA0B;IAC1B,uBAAuB;IACvB,oBAAoB;GACrB;;EAED;IACE,uBAAuB;IACvB,oBAAoB;IACpB,sBAAsB;GACvB;;EAED;IACE,0BAA0B;IAC1B,8BAA8B;GAC/B;;EAED;IACE,0BAA0B;IAC1B,uBAAuB;IACvB,+BAA+B;GAChC;;EAED;IACE,6BAA6B;IAC7B,mBAAmB;IACnB,UAAU;GACX;;EAED;IACE,6BAA6B;IAC7B,kBAAkB;IAClB,SAAS;GACV;CACF;;AAED;EACE;IACE,aAAa;GACd;;EAED;;;;;;;;;;;;;;;;;;;;;;;;;;IA0BE,+BAA+B;YACvB,uBAAuB;IAC/B,oBAAoB;IACpB,mBAAmB;IACnB,eAAe;IACf,sBAAsB;IACtB,qBAAqB;GACtB;;EAED;IACE,oBAAoB;IACpB,qBAAqB;IACrB,aAAa;IACb,2BAA2B;IAC3B,cAAc;IACd,gBAAgB;GACjB;;EAED;IACE,qCAAqC;IACrC,wBAAwB;IACxB,uBAAuB;GACxB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;GAChB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;GAChB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;GAChB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,8BAA8B;IAC9B,iBAAiB;IACjB,gBAAgB;GACjB;;EAED;IACE,eAAe;GAChB;;EAED;IACE,yBAAyB;GAC1B;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,iBAAiB;GAClB;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,iBAAiB;GAClB;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,iBAAiB;GAClB;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,wBAAwB;IACxB,qBAAqB;IACrB,4BAA4B;IAC5B,kBAAkB;GACnB;;EAED;IACE,yBAAyB;IACzB,sBAAsB;IACtB,wBAAwB;IACxB,mBAAmB;GACpB;;EAED;IACE,sBAAsB;IACtB,mBAAmB;IACnB,0BAA0B;IAC1B,gBAAgB;GACjB;;EAED;IACE,yBAAyB;IACzB,sBAAsB;IACtB,wBAAwB;GACzB;;EAED;IACE,0BAA0B;IAC1B,uBAAuB;IACvB,oBAAoB;GACrB;;EAED;IACE,uBAAuB;IACvB,oBAAoB;IACpB,sBAAsB;GACvB;;EAED;IACE,0BAA0B;IAC1B,8BAA8B;GAC/B;;EAED;IACE,0BAA0B;IAC1B,uBAAuB;IACvB,+BAA+B;GAChC;;EAED;IACE,6BAA6B;IAC7B,mBAAmB;IACnB,UAAU;GACX;;EAED;IACE,6BAA6B;IAC7B,kBAAkB;IAClB,SAAS;GACV;CACF;;AAED;EACE;IACE,aAAa;GACd;;EAED;;;;;;;;;;;;;;;;;;;;;;;;;;IA0BE,+BAA+B;YACvB,uBAAuB;IAC/B,oBAAoB;IACpB,mBAAmB;IACnB,eAAe;IACf,sBAAsB;IACtB,qBAAqB;GACtB;;EAED;IACE,oBAAoB;IACpB,qBAAqB;IACrB,aAAa;IACb,2BAA2B;IAC3B,cAAc;IACd,gBAAgB;GACjB;;EAED;IACE,qCAAqC;IACrC,wBAAwB;IACxB,uBAAuB;GACxB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;GAChB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;GAChB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;GAChB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,sCAAsC;IACtC,yBAAyB;IACzB,wBAAwB;GACzB;;EAED;IACE,8BAA8B;IAC9B,iBAAiB;IACjB,gBAAgB;GACjB;;EAED;IACE,eAAe;GAChB;;EAED;IACE,yBAAyB;GAC1B;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,iBAAiB;GAClB;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,iBAAiB;GAClB;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,iBAAiB;GAClB;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,0BAA0B;GAC3B;;EAED;IACE,wBAAwB;IACxB,qBAAqB;IACrB,4BAA4B;IAC5B,kBAAkB;GACnB;;EAED;IACE,yBAAyB;IACzB,sBAAsB;IACtB,wBAAwB;IACxB,mBAAmB;GACpB;;EAED;IACE,sBAAsB;IACtB,mBAAmB;IACnB,0BAA0B;IAC1B,gBAAgB;GACjB;;EAED;IACE,yBAAyB;IACzB,sBAAsB;IACtB,wBAAwB;GACzB;;EAED;IACE,0BAA0B;IAC1B,uBAAuB;IACvB,oBAAoB;GACrB;;EAED;IACE,uBAAuB;IACvB,oBAAoB;IACpB,sBAAsB;GACvB;;EAED;IACE,0BAA0B;IAC1B,8BAA8B;GAC/B;;EAED;IACE,0BAA0B;IAC1B,uBAAuB;IACvB,+BAA+B;GAChC;;EAED;IACE,6BAA6B;IAC7B,mBAAmB;IACnB,UAAU;GACX;;EAED;IACE,6BAA6B;IAC7B,kBAAkB;IAClB,SAAS;GACV;CACF","file":"flexboxgrid.css","sourcesContent":[".container-fluid,\n.container {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.container-fluid {\n  padding-right: 32px;\n  padding-right: 32px;\n  padding-right: 2rem;\n  padding-left: 32px;\n  padding-left: 32px;\n  padding-left: 2rem;\n}\n\n.row {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -8px;\n  margin-right: -8px;\n  margin-right: -0.5rem;\n  margin-left: -8px;\n  margin-left: -8px;\n  margin-left: -0.5rem;\n}\n\n.row.reverse {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n}\n\n.col.reverse {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: column-reverse;\n  flex-direction: column-reverse;\n}\n\n.col-xs,\n.col-xs-1,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12,\n.col-xs-offset-0,\n.col-xs-offset-1,\n.col-xs-offset-2,\n.col-xs-offset-3,\n.col-xs-offset-4,\n.col-xs-offset-5,\n.col-xs-offset-6,\n.col-xs-offset-7,\n.col-xs-offset-8,\n.col-xs-offset-9,\n.col-xs-offset-10,\n.col-xs-offset-11,\n.col-xs-offset-12 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  padding-right: 8px;\n  padding-right: 8px;\n  padding-right: 0.5rem;\n  padding-left: 8px;\n  padding-left: 8px;\n  padding-left: 0.5rem;\n}\n\n.col-xs {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  max-width: 100%;\n}\n\n.col-xs-1 {\n  -ms-flex-preferred-size: 8.33333333%;\n  flex-basis: 8.33333333%;\n  max-width: 8.33333333%;\n}\n\n.col-xs-2 {\n  -ms-flex-preferred-size: 16.66666667%;\n  flex-basis: 16.66666667%;\n  max-width: 16.66666667%;\n}\n\n.col-xs-3 {\n  -ms-flex-preferred-size: 25%;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n\n.col-xs-4 {\n  -ms-flex-preferred-size: 33.33333333%;\n  flex-basis: 33.33333333%;\n  max-width: 33.33333333%;\n}\n\n.col-xs-5 {\n  -ms-flex-preferred-size: 41.66666667%;\n  flex-basis: 41.66666667%;\n  max-width: 41.66666667%;\n}\n\n.col-xs-6 {\n  -ms-flex-preferred-size: 50%;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n\n.col-xs-7 {\n  -ms-flex-preferred-size: 58.33333333%;\n  flex-basis: 58.33333333%;\n  max-width: 58.33333333%;\n}\n\n.col-xs-8 {\n  -ms-flex-preferred-size: 66.66666667%;\n  flex-basis: 66.66666667%;\n  max-width: 66.66666667%;\n}\n\n.col-xs-9 {\n  -ms-flex-preferred-size: 75%;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n\n.col-xs-10 {\n  -ms-flex-preferred-size: 83.33333333%;\n  flex-basis: 83.33333333%;\n  max-width: 83.33333333%;\n}\n\n.col-xs-11 {\n  -ms-flex-preferred-size: 91.66666667%;\n  flex-basis: 91.66666667%;\n  max-width: 91.66666667%;\n}\n\n.col-xs-12 {\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n\n.start-xs {\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  text-align: start;\n}\n\n.center-xs {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.end-xs {\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  text-align: end;\n}\n\n.top-xs {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n\n.middle-xs {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.bottom-xs {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n}\n\n.around-xs {\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n}\n\n.between-xs {\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.first-xs {\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.last-xs {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n@media only screen and (min-width: 48em) {\n  .container {\n    width: 49rem;\n  }\n\n  .col-sm,\n  .col-sm-1,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12,\n  .col-sm-offset-0,\n  .col-sm-offset-1,\n  .col-sm-offset-2,\n  .col-sm-offset-3,\n  .col-sm-offset-4,\n  .col-sm-offset-5,\n  .col-sm-offset-6,\n  .col-sm-offset-7,\n  .col-sm-offset-8,\n  .col-sm-offset-9,\n  .col-sm-offset-10,\n  .col-sm-offset-11,\n  .col-sm-offset-12 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .col-sm {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-sm-1 {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .col-sm-2 {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .col-sm-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-sm-4 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .col-sm-5 {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .col-sm-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-sm-7 {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .col-sm-8 {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .col-sm-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-sm-10 {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .col-sm-11 {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .col-sm-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-sm-offset-0 {\n    margin-left: 0;\n  }\n\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .start-sm {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-sm {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .end-sm {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-sm {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .middle-sm {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .bottom-sm {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .around-sm {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .between-sm {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .first-sm {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .last-sm {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}\n\n@media only screen and (min-width: 64em) {\n  .container {\n    width: 65rem;\n  }\n\n  .col-md,\n  .col-md-1,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12,\n  .col-md-offset-0,\n  .col-md-offset-1,\n  .col-md-offset-2,\n  .col-md-offset-3,\n  .col-md-offset-4,\n  .col-md-offset-5,\n  .col-md-offset-6,\n  .col-md-offset-7,\n  .col-md-offset-8,\n  .col-md-offset-9,\n  .col-md-offset-10,\n  .col-md-offset-11,\n  .col-md-offset-12 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .col-md {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-md-1 {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .col-md-2 {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .col-md-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-md-4 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .col-md-5 {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .col-md-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-md-7 {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .col-md-8 {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .col-md-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-md-10 {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .col-md-11 {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .col-md-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-md-offset-0 {\n    margin-left: 0;\n  }\n\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .start-md {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-md {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .end-md {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-md {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .middle-md {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .bottom-md {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .around-md {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .between-md {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .first-md {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .last-md {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}\n\n@media only screen and (min-width: 75em) {\n  .container {\n    width: 76rem;\n  }\n\n  .col-lg,\n  .col-lg-1,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12,\n  .col-lg-offset-0,\n  .col-lg-offset-1,\n  .col-lg-offset-2,\n  .col-lg-offset-3,\n  .col-lg-offset-4,\n  .col-lg-offset-5,\n  .col-lg-offset-6,\n  .col-lg-offset-7,\n  .col-lg-offset-8,\n  .col-lg-offset-9,\n  .col-lg-offset-10,\n  .col-lg-offset-11,\n  .col-lg-offset-12 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .col-lg {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-lg-1 {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .col-lg-2 {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .col-lg-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-lg-4 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .col-lg-5 {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .col-lg-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-lg-7 {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .col-lg-8 {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .col-lg-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-lg-10 {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .col-lg-11 {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .col-lg-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-lg-offset-0 {\n    margin-left: 0;\n  }\n\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .start-lg {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-lg {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .end-lg {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-lg {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .middle-lg {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .bottom-lg {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .around-lg {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .between-lg {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .first-lg {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .last-lg {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container-fluid": "flexboxgrid__container-fluid___2lUES",
	"container": "flexboxgrid__container___R2zU9",
	"row": "flexboxgrid__row___1y_mg",
	"reverse": "flexboxgrid__reverse___1X682",
	"col": "flexboxgrid__col___3RqPP",
	"col-xs": "flexboxgrid__col-xs___1ROHR",
	"col-xs-1": "flexboxgrid__col-xs-1___VtNIK",
	"col-xs-2": "flexboxgrid__col-xs-2___36nDa",
	"col-xs-3": "flexboxgrid__col-xs-3___2f2Ql",
	"col-xs-4": "flexboxgrid__col-xs-4___TxBJg",
	"col-xs-5": "flexboxgrid__col-xs-5___1HkK5",
	"col-xs-6": "flexboxgrid__col-xs-6___1DhV6",
	"col-xs-7": "flexboxgrid__col-xs-7___3o2m-",
	"col-xs-8": "flexboxgrid__col-xs-8___3ARGc",
	"col-xs-9": "flexboxgrid__col-xs-9___15qfl",
	"col-xs-10": "flexboxgrid__col-xs-10___2AWNv",
	"col-xs-11": "flexboxgrid__col-xs-11___3H-6F",
	"col-xs-12": "flexboxgrid__col-xs-12___phbtE",
	"col-xs-offset-0": "flexboxgrid__col-xs-offset-0___10C7E",
	"col-xs-offset-1": "flexboxgrid__col-xs-offset-1___12o_R",
	"col-xs-offset-2": "flexboxgrid__col-xs-offset-2___2Hh-B",
	"col-xs-offset-3": "flexboxgrid__col-xs-offset-3___8NCys",
	"col-xs-offset-4": "flexboxgrid__col-xs-offset-4___dA0P1",
	"col-xs-offset-5": "flexboxgrid__col-xs-offset-5___2MbdF",
	"col-xs-offset-6": "flexboxgrid__col-xs-offset-6___3N3bt",
	"col-xs-offset-7": "flexboxgrid__col-xs-offset-7___1yQDG",
	"col-xs-offset-8": "flexboxgrid__col-xs-offset-8___2aEcW",
	"col-xs-offset-9": "flexboxgrid__col-xs-offset-9___2haBv",
	"col-xs-offset-10": "flexboxgrid__col-xs-offset-10___1QsVg",
	"col-xs-offset-11": "flexboxgrid__col-xs-offset-11___29xQn",
	"col-xs-offset-12": "flexboxgrid__col-xs-offset-12___1XWFb",
	"start-xs": "flexboxgrid__start-xs___h8qdA",
	"center-xs": "flexboxgrid__center-xs___1JWon",
	"end-xs": "flexboxgrid__end-xs___33Mku",
	"top-xs": "flexboxgrid__top-xs___UhA-V",
	"middle-xs": "flexboxgrid__middle-xs___1h5t3",
	"bottom-xs": "flexboxgrid__bottom-xs___2tRUa",
	"around-xs": "flexboxgrid__around-xs___1okkK",
	"between-xs": "flexboxgrid__between-xs___WFP84",
	"first-xs": "flexboxgrid__first-xs___XoosK",
	"last-xs": "flexboxgrid__last-xs___HnlRw",
	"col-sm": "flexboxgrid__col-sm___3tZ-z",
	"col-sm-1": "flexboxgrid__col-sm-1___2Gca6",
	"col-sm-2": "flexboxgrid__col-sm-2___YETza",
	"col-sm-3": "flexboxgrid__col-sm-3___2irZQ",
	"col-sm-4": "flexboxgrid__col-sm-4___3kj7S",
	"col-sm-5": "flexboxgrid__col-sm-5___gAxuQ",
	"col-sm-6": "flexboxgrid__col-sm-6___vUdKH",
	"col-sm-7": "flexboxgrid__col-sm-7___22IcQ",
	"col-sm-8": "flexboxgrid__col-sm-8___2_YhB",
	"col-sm-9": "flexboxgrid__col-sm-9___2ubpx",
	"col-sm-10": "flexboxgrid__col-sm-10___262G9",
	"col-sm-11": "flexboxgrid__col-sm-11___39s7J",
	"col-sm-12": "flexboxgrid__col-sm-12___1e5Uk",
	"col-sm-offset-0": "flexboxgrid__col-sm-offset-0___llQ6-",
	"col-sm-offset-1": "flexboxgrid__col-sm-offset-1___1PFWu",
	"col-sm-offset-2": "flexboxgrid__col-sm-offset-2___1DgbO",
	"col-sm-offset-3": "flexboxgrid__col-sm-offset-3___3W5Iv",
	"col-sm-offset-4": "flexboxgrid__col-sm-offset-4___3YToG",
	"col-sm-offset-5": "flexboxgrid__col-sm-offset-5___609Vo",
	"col-sm-offset-6": "flexboxgrid__col-sm-offset-6___TCeVQ",
	"col-sm-offset-7": "flexboxgrid__col-sm-offset-7___csvBu",
	"col-sm-offset-8": "flexboxgrid__col-sm-offset-8___11PYH",
	"col-sm-offset-9": "flexboxgrid__col-sm-offset-9___24Evy",
	"col-sm-offset-10": "flexboxgrid__col-sm-offset-10___1-lcE",
	"col-sm-offset-11": "flexboxgrid__col-sm-offset-11___2ynFq",
	"col-sm-offset-12": "flexboxgrid__col-sm-offset-12___3MBMi",
	"start-sm": "flexboxgrid__start-sm___3Dilu",
	"center-sm": "flexboxgrid__center-sm___39HWq",
	"end-sm": "flexboxgrid__end-sm___3B07f",
	"top-sm": "flexboxgrid__top-sm___1begS",
	"middle-sm": "flexboxgrid__middle-sm___Oh4K7",
	"bottom-sm": "flexboxgrid__bottom-sm___1jPnc",
	"around-sm": "flexboxgrid__around-sm___3ffbb",
	"between-sm": "flexboxgrid__between-sm___1Rcaf",
	"first-sm": "flexboxgrid__first-sm___2Gzhb",
	"last-sm": "flexboxgrid__last-sm___1pF8w",
	"col-md": "flexboxgrid__col-md___2lbzm",
	"col-md-1": "flexboxgrid__col-md-1___1Lapj",
	"col-md-2": "flexboxgrid__col-md-2___1c_4t",
	"col-md-3": "flexboxgrid__col-md-3___3ANRS",
	"col-md-4": "flexboxgrid__col-md-4___a_FyK",
	"col-md-5": "flexboxgrid__col-md-5___YXlMq",
	"col-md-6": "flexboxgrid__col-md-6___5OSyJ",
	"col-md-7": "flexboxgrid__col-md-7___1Zp-r",
	"col-md-8": "flexboxgrid__col-md-8___3979J",
	"col-md-9": "flexboxgrid__col-md-9___2fXuC",
	"col-md-10": "flexboxgrid__col-md-10___2Jbee",
	"col-md-11": "flexboxgrid__col-md-11___3drbK",
	"col-md-12": "flexboxgrid__col-md-12___zR2lK",
	"col-md-offset-0": "flexboxgrid__col-md-offset-0___2O3vR",
	"col-md-offset-1": "flexboxgrid__col-md-offset-1___2XNCz",
	"col-md-offset-2": "flexboxgrid__col-md-offset-2___2t-NV",
	"col-md-offset-3": "flexboxgrid__col-md-offset-3___1zlTP",
	"col-md-offset-4": "flexboxgrid__col-md-offset-4___3aHxz",
	"col-md-offset-5": "flexboxgrid__col-md-offset-5___3S2Gw",
	"col-md-offset-6": "flexboxgrid__col-md-offset-6___3KV0V",
	"col-md-offset-7": "flexboxgrid__col-md-offset-7___1OdCD",
	"col-md-offset-8": "flexboxgrid__col-md-offset-8___2vFbQ",
	"col-md-offset-9": "flexboxgrid__col-md-offset-9___1q95x",
	"col-md-offset-10": "flexboxgrid__col-md-offset-10___2CeMK",
	"col-md-offset-11": "flexboxgrid__col-md-offset-11___3u6XW",
	"col-md-offset-12": "flexboxgrid__col-md-offset-12___eKUlL",
	"start-md": "flexboxgrid__start-md___2B-sg",
	"center-md": "flexboxgrid__center-md___3VDfS",
	"end-md": "flexboxgrid__end-md___2fJWy",
	"top-md": "flexboxgrid__top-md___12FDg",
	"middle-md": "flexboxgrid__middle-md___3wIJR",
	"bottom-md": "flexboxgrid__bottom-md___2v1cd",
	"around-md": "flexboxgrid__around-md___1x54_",
	"between-md": "flexboxgrid__between-md___Xn-9x",
	"first-md": "flexboxgrid__first-md___3j4t5",
	"last-md": "flexboxgrid__last-md___3y72e",
	"col-lg": "flexboxgrid__col-lg___3SaXd",
	"col-lg-1": "flexboxgrid__col-lg-1___2VMiv",
	"col-lg-2": "flexboxgrid__col-lg-2___21dKK",
	"col-lg-3": "flexboxgrid__col-lg-3___vbACp",
	"col-lg-4": "flexboxgrid__col-lg-4___2hzy8",
	"col-lg-5": "flexboxgrid__col-lg-5___1-g7-",
	"col-lg-6": "flexboxgrid__col-lg-6___21lf8",
	"col-lg-7": "flexboxgrid__col-lg-7___3kBG1",
	"col-lg-8": "flexboxgrid__col-lg-8___afECx",
	"col-lg-9": "flexboxgrid__col-lg-9___10mdl",
	"col-lg-10": "flexboxgrid__col-lg-10___1yTfj",
	"col-lg-11": "flexboxgrid__col-lg-11___3hMRu",
	"col-lg-12": "flexboxgrid__col-lg-12___1rlAA",
	"col-lg-offset-0": "flexboxgrid__col-lg-offset-0___3KM3x",
	"col-lg-offset-1": "flexboxgrid__col-lg-offset-1___KhvqR",
	"col-lg-offset-2": "flexboxgrid__col-lg-offset-2___1ZD_z",
	"col-lg-offset-3": "flexboxgrid__col-lg-offset-3___2GQVa",
	"col-lg-offset-4": "flexboxgrid__col-lg-offset-4___1zPZj",
	"col-lg-offset-5": "flexboxgrid__col-lg-offset-5___Kj8Iq",
	"col-lg-offset-6": "flexboxgrid__col-lg-offset-6___3nun3",
	"col-lg-offset-7": "flexboxgrid__col-lg-offset-7___YTmn9",
	"col-lg-offset-8": "flexboxgrid__col-lg-offset-8___1qG2t",
	"col-lg-offset-9": "flexboxgrid__col-lg-offset-9___qd27B",
	"col-lg-offset-10": "flexboxgrid__col-lg-offset-10___2YScP",
	"col-lg-offset-11": "flexboxgrid__col-lg-offset-11___3pPvj",
	"col-lg-offset-12": "flexboxgrid__col-lg-offset-12___2rHEg",
	"start-lg": "flexboxgrid__start-lg___ageu9",
	"center-lg": "flexboxgrid__center-lg___3H3SI",
	"end-lg": "flexboxgrid__end-lg___27_fM",
	"top-lg": "flexboxgrid__top-lg___1tWWw",
	"middle-lg": "flexboxgrid__middle-lg___nocGI",
	"bottom-lg": "flexboxgrid__bottom-lg___IYGks",
	"around-lg": "flexboxgrid__around-lg___zZC2C",
	"between-lg": "flexboxgrid__between-lg___2njzk",
	"first-lg": "flexboxgrid__first-lg___6dksO",
	"last-lg": "flexboxgrid__last-lg___xGBvS"
};

/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(734);
var invariant = __webpack_require__(735);
var warning = __webpack_require__(736);
var assign = __webpack_require__(9);

var ReactPropTypesSecret = __webpack_require__(737);
var checkPropTypes = __webpack_require__(798);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__(735);
  var warning = __webpack_require__(736);
  var ReactPropTypesSecret = __webpack_require__(737);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnProps = getColumnProps;
exports.default = Col;

var _react = __webpack_require__(48);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(707);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = __webpack_require__(722);

var _createProps2 = _interopRequireDefault(_createProps);

var _classNames = __webpack_require__(721);

var _classNames2 = _interopRequireDefault(_classNames);

var _types = __webpack_require__(738);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  xs: _types.ColumnSizeType,
  sm: _types.ColumnSizeType,
  md: _types.ColumnSizeType,
  lg: _types.ColumnSizeType,
  xsOffset: _propTypes2.default.number,
  smOffset: _propTypes2.default.number,
  mdOffset: _propTypes2.default.number,
  lgOffset: _propTypes2.default.number,
  first: _types.ViewportSizeType,
  last: _types.ViewportSizeType,
  className: _propTypes2.default.string,
  tagName: _propTypes2.default.string,
  children: _propTypes2.default.node
};

var classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset'
};

function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function getColClassNames(props) {
  var extraClasses = [];

  if (props.className) {
    extraClasses.push(props.className);
  }

  if (props.first) {
    extraClasses.push((0, _classNames2.default)('first-' + props.first));
  }

  if (props.last) {
    extraClasses.push((0, _classNames2.default)('last-' + props.last));
  }

  return Object.keys(props).filter(function (key) {
    return classMap[key];
  }).map(function (key) {
    return (0, _classNames2.default)(isInteger(props[key]) ? classMap[key] + '-' + props[key] : classMap[key]);
  }).concat(extraClasses);
}

function getColumnProps(props) {
  return (0, _createProps2.default)(propTypes, props, getColClassNames(props));
}

function Col(props) {
  var tagName = props.tagName,
      columnProps = _objectWithoutProperties(props, ['tagName']);

  return _react2.default.createElement(tagName || 'div', getColumnProps(columnProps));
}

Col.propTypes = propTypes;

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Grid;

var _react = __webpack_require__(48);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(707);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = __webpack_require__(722);

var _createProps2 = _interopRequireDefault(_createProps);

var _classNames = __webpack_require__(721);

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  fluid: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  tagName: _propTypes2.default.string,
  children: _propTypes2.default.node
};

function Grid(props) {
  var containerClass = (0, _classNames2.default)(props.fluid ? 'container-fluid' : 'container');
  var classNames = [props.className, containerClass];

  return _react2.default.createElement(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, classNames));
}

Grid.propTypes = propTypes;

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(268)(true);
// imports


// module
exports.push([module.i, ".grid__container___1qdRJ {\n  width: 100%;\n  max-width:  1170px;\n  padding-left: 32px;\n  padding-left: 32px;\n  padding-left: 2rem;\n  padding-right: 32px;\n  padding-right: 32px;\n  padding-right: 2rem;\n}\n@media (min-width: 320px) {\n  .grid__container___1qdRJ {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}", "", {"version":3,"sources":["/Users/anton/Desktop/projects/deworkacy-site/src/components/grid.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;CACrB;AACD;EACE;IACE,mBAAmB;IACnB,oBAAoB;GACrB;CACF","file":"grid.css","sourcesContent":[".container {\n  width: 100%;\n  max-width:  1170px;\n  padding-left: 32px;\n  padding-left: 32px;\n  padding-left: 2rem;\n  padding-right: 32px;\n  padding-right: 32px;\n  padding-right: 2rem;\n}\n@media (min-width: 320px) {\n  .container {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "grid__container___1qdRJ"
};

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Asside_Asside__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_MenuPanel_MenuPanel__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_normalize_css__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_flexbox_grid_dist_react_flexbox_grid_css__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_flexbox_grid_dist_react_flexbox_grid_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_flexbox_grid_dist_react_flexbox_grid_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_flexbox_grid__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_flexbox_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_flexbox_grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components_grid_css__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components_grid_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_components_grid_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Layout_css__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Layout_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/Layout/Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







// external-global styles must be imported in your JS.






var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isShow: false,
      activeAccordeonIndex: 0
    }, _this.handleToggle = function () {
      return _this.setState({ isShow: !_this.state.isShow });
    }, _this.handleAccordeonToggle = function (index) {
      return _this.setState({
        activeAccordeonIndex: index === _this.state.activeAccordeonIndex ? null : index
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_9__Layout_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_components_Asside_Asside__["a" /* default */], _extends({}, this.props, {
          burger: {
            onClick: this.handleToggle,
            show: this.state.isShow
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        })),
        this.props.children,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_MenuPanel_MenuPanel__["a" /* default */], {
          handleToggle: this.handleToggle,
          isShow: this.state.isShow,
          activeAccordeonIndex: this.state.activeAccordeonIndex,
          handleAccordeonToggle: this.handleAccordeonToggle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        })
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6_react_flexbox_grid_dist_react_flexbox_grid_css___default.a, __WEBPACK_IMPORTED_MODULE_5_normalize_css___default.a, __WEBPACK_IMPORTED_MODULE_9__Layout_css___default.a, __WEBPACK_IMPORTED_MODULE_8_components_grid_css___default.a)(Layout));

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Asside_css__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Asside_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Asside_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Navigation_Navigation__ = __webpack_require__(806);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/Asside/Asside.js',
    _this = this;






var Asside = function Asside(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_2__Asside_css___default.a.root, __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      { className: __WEBPACK_IMPORTED_MODULE_2__Asside_css___default.a.categories, __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_components_Navigation_Navigation__["a" /* default */], _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: _this
      }))
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Asside_css___default.a)(Asside));

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(805);
    var insertCss = __webpack_require__(267);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./Asside.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./Asside.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 805:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(268)(true);
// imports


// module
exports.push([module.i, ".Asside__root___OMGus {\n  -webkit-box-shadow: 0 0 2.1rem rgba(218, 218, 218, .5);\n          box-shadow: 0 0 2.1rem rgba(218, 218, 218, .5);\n  background-color: rgb(255, 255, 255);\n}\n@media (min-width: 320px) {\n  .Asside__root___OMGus {\n    position: fixed;\n    top: 0;\n    z-index: 999;\n    right: 0;\n    left: 0;\n    bottom: auto;\n    min-height: 60px;\n    padding: 13px 20px 13px 20px;\n  }\n}\n@media (min-width: 768px) {\n  .Asside__root___OMGus {\n    position: fixed;\n    padding: 100px 0px 42px 0;\n    left: 0;\n    bottom: 0;\n    top: 0;\n    min-height: 100vh;\n    min-width: 100px;\n    right: auto;\n  }\n}\n.Asside__icon___rT_Mf {\n  margin-bottom: 50px\n}\n.Asside__icon___rT_Mf:last-child {\n  margin-bottom: 0;\n}\n.Asside__header___2ys-g {\n  margin-bottom: 144px;\n  margin-bottom: 144px;\n  margin-bottom: 9rem;\n}\n.Asside__categories___2pOxJ {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n", "", {"version":3,"sources":["/Users/anton/Desktop/projects/deworkacy-site/src/components/Asside/Asside.css"],"names":[],"mappings":"AAAA;EACE,uDAAuD;UAC/C,+CAA+C;EACvD,qCAAqC;CACtC;AACD;EACE;IACE,gBAAgB;IAChB,OAAO;IACP,aAAa;IACb,SAAS;IACT,QAAQ;IACR,aAAa;IACb,iBAAiB;IACjB,6BAA6B;GAC9B;CACF;AACD;EACE;IACE,gBAAgB;IAChB,0BAA0B;IAC1B,QAAQ;IACR,UAAU;IACV,OAAO;IACP,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;GACb;CACF;AACD;EACE,mBAAmB;CACpB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,WAAW;EACX,UAAU;CACX","file":"Asside.css","sourcesContent":[".root {\n  -webkit-box-shadow: 0 0 2.1rem rgba(218, 218, 218, .5);\n          box-shadow: 0 0 2.1rem rgba(218, 218, 218, .5);\n  background-color: rgb(255, 255, 255);\n}\n@media (min-width: 320px) {\n  .root {\n    position: fixed;\n    top: 0;\n    z-index: 999;\n    right: 0;\n    left: 0;\n    bottom: auto;\n    min-height: 60px;\n    padding: 13px 20px 13px 20px;\n  }\n}\n@media (min-width: 768px) {\n  .root {\n    position: fixed;\n    padding: 100px 0px 42px 0;\n    left: 0;\n    bottom: 0;\n    top: 0;\n    min-height: 100vh;\n    min-width: 100px;\n    right: auto;\n  }\n}\n.icon {\n  margin-bottom: 50px\n}\n.icon:last-child {\n  margin-bottom: 0;\n}\n.header {\n  margin-bottom: 144px;\n  margin-bottom: 144px;\n  margin-bottom: 9rem;\n}\n.categories {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Asside__root___OMGus",
	"icon": "Asside__icon___rT_Mf",
	"header": "Asside__header___2ys-g",
	"categories": "Asside__categories___2pOxJ"
};

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Navigation_css__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Navigation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Link__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_Burger_Burger__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_loader_svg_react_loader_icons_home_svg_name_HomeIcon__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_loader_svg_react_loader_icons_home_svg_name_HomeIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_loader_svg_react_loader_icons_home_svg_name_HomeIcon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_loader_svg_react_loader_icons_search_svg_name_SearchIcon__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_loader_svg_react_loader_icons_search_svg_name_SearchIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_loader_svg_react_loader_icons_search_svg_name_SearchIcon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__babel_loader_svg_react_loader_icons_basket_svg_name_BasketIcon__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__babel_loader_svg_react_loader_icons_basket_svg_name_BasketIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__babel_loader_svg_react_loader_icons_basket_svg_name_BasketIcon__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/Navigation/Navigation.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */












var Navigation = function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call.apply(_ref, [this].concat(args))), _this), _this.isActivePath = function (path) {
      return _this.context.location.path === path;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navigation, [{
    key: 'render',
    value: function render() {
      var _cx;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()((_cx = {}, _defineProperty(_cx, __WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.root, true), _defineProperty(_cx, __WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.horizonatal, this.props.horizonatal), _defineProperty(_cx, this.props.classnames.root, true), _cx)),
          role: 'navigation',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */],
          {
            className: __WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.link + ' ' + (this.isActivePath('/home') ? __WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.activeLink : ''),
            to: '/home',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__babel_loader_svg_react_loader_icons_home_svg_name_HomeIcon___default.a, { className: __WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.icon, __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */],
          {
            className: __WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.link + ' ' + (this.isActivePath('/basket') ? __WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.activeLink : ''),
            to: '/basket',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__babel_loader_svg_react_loader_icons_basket_svg_name_BasketIcon___default.a, { className: __WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.icon, __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */],
          {
            className: __WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.link + ' ' + (this.isActivePath('/search') ? __WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.activeLink : ''),
            to: '/search',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__babel_loader_svg_react_loader_icons_search_svg_name_SearchIcon___default.a, { className: __WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.icon, __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.burger, __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_components_Burger_Burger__["a" /* default */], _extends({ isStatic: true }, this.props.burger, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }))
        )
      );
    }
  }]);

  return Navigation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Navigation.contextTypes = {
  location: __WEBPACK_IMPORTED_MODULE_2_prop_types__["PropTypes"].object.isRequired
};
Navigation.defaultProps = {
  classnames: {
    root: ''
  },
  horizontal: false
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a)(Navigation));

/***/ }),

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(808);
    var insertCss = __webpack_require__(267);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./Navigation.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./Navigation.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 808:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(268)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n@media (min-width: 320px) {\n  .Navigation__root___2gcJx {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    min-height: 60px;\n  }\n}\n@media (min-width: 768px) {\n  .Navigation__root___2gcJx {\n    display: block;\n    width: 100%;\n    min-height: 100vh;\n    max-width: 100px;\n  }\n}\n.Navigation__link___Ntl35:last-child {\n  margin-bottom: 0;\n}\n.Navigation__link___Ntl35:hover path, .Navigation__link___Ntl35:active path {\n      fill: rgb(18, 30, 174);\n}\n@media (min-width: 320px) {\n  .Navigation__link___Ntl35 {\n    margin-bottom: 0px;\n    margin-right: 37px;\n  }\n  .Navigation__link___Ntl35:last-child {\n    margin-right: 0;\n  }\n}\n@media (min-width: 768px) {\n  .Navigation__link___Ntl35 {\n    margin-bottom: 5rem;\n    display: block;\n    text-align: center;\n    margin-right: 0;\n  }\n  .Navigation__link___Ntl35:last-child {\n    margin-bottom: 0;\n  }\n}\n.Navigation__activeLink___3fFw0 path {\n    fill: rgb(23, 40, 250);\n  }\n.Navigation__icon___2M1gM{\n  fill: currentColor;\n}\n@media (min-width: 320px) {\n  .Navigation__icon___2M1gM {\n    width: 24px;\n    height: 24px;\n  }\n}\n.Navigation__burger___16J3- {\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .Navigation__burger___16J3- {\n    display: none;\n  }\n}\n", "", {"version":3,"sources":["/Users/anton/Desktop/projects/deworkacy-site/src/components/Navigation/Navigation.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;CAC/M;AACD;EACE;IACE,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,0BAA0B;QACtB,uBAAuB;YACnB,oBAAoB;IAC5B,iBAAiB;GAClB;CACF;AACD;EACE;IACE,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;GAClB;CACF;AACD;EACE,iBAAiB;CAClB;AACD;MACM,uBAAuB;CAC5B;AACD;EACE;IACE,mBAAmB;IACnB,mBAAmB;GACpB;EACD;IACE,gBAAgB;GACjB;CACF;AACD;EACE;IACE,oBAAoB;IACpB,eAAe;IACf,mBAAmB;IACnB,gBAAgB;GACjB;EACD;IACE,iBAAiB;GAClB;CACF;AACD;IACI,uBAAuB;GACxB;AACH;EACE,mBAAmB;CACpB;AACD;EACE;IACE,YAAY;IACZ,aAAa;GACd;CACF;AACD;EACE,kBAAkB;CACnB;AACD;EACE;IACE,cAAc;GACf;CACF","file":"Navigation.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n@media (min-width: 320px) {\n  .root {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    min-height: 60px;\n  }\n}\n@media (min-width: 768px) {\n  .root {\n    display: block;\n    width: 100%;\n    min-height: 100vh;\n    max-width: 100px;\n  }\n}\n.link:last-child {\n  margin-bottom: 0;\n}\n.link:hover path, .link:active path {\n      fill: rgb(18, 30, 174);\n}\n@media (min-width: 320px) {\n  .link {\n    margin-bottom: 0px;\n    margin-right: 37px;\n  }\n  .link:last-child {\n    margin-right: 0;\n  }\n}\n@media (min-width: 768px) {\n  .link {\n    margin-bottom: 5rem;\n    display: block;\n    text-align: center;\n    margin-right: 0;\n  }\n  .link:last-child {\n    margin-bottom: 0;\n  }\n}\n.activeLink path {\n    fill: rgb(23, 40, 250);\n  }\n.icon{\n  fill: currentColor;\n}\n@media (min-width: 320px) {\n  .icon {\n    width: 24px;\n    height: 24px;\n  }\n}\n.burger {\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .burger {\n    display: none;\n  }\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Navigation__root___2gcJx",
	"link": "Navigation__link___Ntl35",
	"activeLink": "Navigation__activeLink___3fFw0",
	"icon": "Navigation__icon___2M1gM",
	"burger": "Navigation__burger___16J3-"
};

/***/ }),

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(48);

function BurgerClose(props) {
    return React.createElement("svg", props, [React.createElement("path", { "fill": "#0023ff", "d": "M2.78.66l15.56 15.56a1.5 1.5 0 1 1-2.12 2.12L.66 2.78A1.5 1.5 0 1 1 2.78.66z", "key": 0 }), React.createElement("path", { "fill": "#0023ff", "d": "M18.55 2.62l-15.9 15.9a1.53 1.53 0 1 1-2.17-2.17L16.38.45a1.53 1.53 0 1 1 2.17 2.17z", "key": 1 })]);
}

BurgerClose.displayName = "BurgerClose";

BurgerClose.defaultProps = { "width": "19", "height": "19", "viewBox": "0 0 19 19", "id": "burger" };

module.exports = BurgerClose;

BurgerClose.default = BurgerClose;

/***/ }),

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(48);

function BurgerShow(props) {
    return React.createElement("svg", props, [React.createElement("defs", { "key": 0 }, [React.createElement("path", { "id": "a", "d": "M1 0h16c.55 0 1 .67 1 1.5S17.55 3 17 3H1c-.55 0-1-.67-1-1.5S.45 0 1 0z", "key": 0 }), React.createElement("path", { "id": "b", "d": "M1 6h16c.55 0 1 .67 1 1.5S17.55 9 17 9H1c-.55 0-1-.67-1-1.5S.45 6 1 6z", "key": 1 }), React.createElement("path", { "id": "c", "d": "M1 12h16c.55 0 1 .67 1 1.5s-.45 1.5-1 1.5H1c-.55 0-1-.67-1-1.5S.45 12 1 12z", "key": 2 })]), React.createElement("desc", { "key": 1 }, "Generated with Avocode."), React.createElement("g", { "key": 2 }, React.createElement("use", { "fill": "#0023ff", "xlinkHref": "#a" })), React.createElement("g", { "key": 3 }, React.createElement("use", { "fill": "#0023ff", "xlinkHref": "#b" })), React.createElement("g", { "key": 4 }, React.createElement("use", { "fill": "#0023ff", "xlinkHref": "#c" }))]);
}

BurgerShow.displayName = "BurgerShow";

BurgerShow.defaultProps = { "width": "18", "height": "15", "viewBox": "0 0 18 15" };

module.exports = BurgerShow;

BurgerShow.default = BurgerShow;

/***/ }),

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(812);
    var insertCss = __webpack_require__(267);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./Burger.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./Burger.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(268)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Burger__root___2JHSa {\n  width: 83.2px;\n  width: 83.2px;\n  width: 5.2rem;\n  height: 83.2px;\n  height: 83.2px;\n  height: 5.2rem;\n  background-color: white;\n  border-radius: 50%;\n  text-align: center;\n  cursor: pointer;\n  -webkit-box-shadow: 0 0 2.1rem rgba(218, 218, 218, .5);\n          box-shadow: 0 0 2.1rem rgba(218, 218, 218, .5);\n  background-color: rgb(255, 255, 255);\n  cursor: pointer\n}\n\n.Burger__root___2JHSa:hover {\n  background-color: rgb(18, 30, 174);\n}\n\n.Burger__root___2JHSa:hover svg {\n     background-color: transparent;\n}\n\n.Burger__root___2JHSa:hover path,.Burger__root___2JHSa:hover g,.Burger__root___2JHSa:hover use {\n     fill: #fff;\n}\n\n.Burger__root___2JHSa:before {\n  height: 100%;\n  width: 0;\n  content: '';\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.Burger__icon___HLjYd {\n  display: inline-block;\n  vertical-align: middle;\n  background-color: transparent;\n  width: 19px;\n  height: 19px;\n}\n\n.Burger__burgerCloseIcon___IEJGT {\n  background-color: transparent;\n}\n\n.Burger__burger___bxElC{}\n\n.Burger__static___4crnI {\n  position: static;\n}\n", "", {"version":3,"sources":["/Users/anton/Desktop/projects/deworkacy-site/src/components/Burger/Burger.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;CAC/M;;AAED;EACE,cAAc;EACd,cAAc;EACd,cAAc;EACd,eAAe;EACf,eAAe;EACf,eAAe;EACf,wBAAwB;EACxB,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,uDAAuD;UAC/C,+CAA+C;EACvD,qCAAqC;EACrC,eAAe;CAChB;;AAED;EACE,mCAAmC;CACpC;;AAED;KACK,8BAA8B;CAClC;;AAED;KACK,WAAW;CACf;;AAED;EACE,aAAa;EACb,SAAS;EACT,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;CACxB;;AAED;EACE,sBAAsB;EACtB,uBAAuB;EACvB,8BAA8B;EAC9B,YAAY;EACZ,aAAa;CACd;;AAED;EACE,8BAA8B;CAC/B;;AAED,yBAAS;;AAET;EACE,iBAAiB;CAClB","file":"Burger.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.root {\n  width: 83.2px;\n  width: 83.2px;\n  width: 5.2rem;\n  height: 83.2px;\n  height: 83.2px;\n  height: 5.2rem;\n  background-color: white;\n  border-radius: 50%;\n  text-align: center;\n  cursor: pointer;\n  -webkit-box-shadow: 0 0 2.1rem rgba(218, 218, 218, .5);\n          box-shadow: 0 0 2.1rem rgba(218, 218, 218, .5);\n  background-color: rgb(255, 255, 255);\n  cursor: pointer\n}\n\n.root:hover {\n  background-color: rgb(18, 30, 174);\n}\n\n.root:hover svg {\n     background-color: transparent;\n}\n\n.root:hover path,.root:hover g,.root:hover use {\n     fill: #fff;\n}\n\n.root:before {\n  height: 100%;\n  width: 0;\n  content: '';\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n  background-color: transparent;\n  width: 19px;\n  height: 19px;\n}\n\n.burgerCloseIcon {\n  background-color: transparent;\n}\n\n.burger{}\n\n.static {\n  position: static;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Burger__root___2JHSa",
	"icon": "Burger__icon___HLjYd",
	"burgerCloseIcon": "Burger__burgerCloseIcon___IEJGT",
	"burger": "Burger__burger___bxElC",
	"static": "Burger__static___4crnI"
};

/***/ }),

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(48);

function HomeIcon(props) {
    return React.createElement("svg", props, React.createElement("path", { "fill": "#d7d7d7", "d": "M14.55 8.73v9.2h-3.02V13.7c0-.67-.54-1.2-1.2-1.2H6.7c-.66 0-1.2.53-1.2 1.2v4.22H2.49v-9.2l6.03-6.02zM9.05.68A.75.75 0 0 0 8 .68L1.04 7.63a1.2 1.2 0 0 0-.35.85v10.05c0 .66.54 1.2 1.2 1.2h4.22c.67 0 1.2-.53 1.2-1.2v-4.22h2.42v4.22c0 .66.54 1.2 1.2 1.2h4.22c.66 0 1.2-.53 1.2-1.2V8.48c0-.32-.12-.62-.35-.85z" }));
}

HomeIcon.displayName = "HomeIcon";

HomeIcon.defaultProps = { "width": "17", "height": "20", "viewBox": "0 0 17 20" };

module.exports = HomeIcon;

HomeIcon.default = HomeIcon;

/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(48);

function SearchIcon(props) {
    return React.createElement("svg", props, React.createElement("path", { "fill": "#d7d7d7", "d": "M12.93.25a7.23 7.23 0 0 0-5.7 11.66L1.13 18a.9.9 0 0 0 0 1.28.9.9 0 0 0 1.28 0l6.08-6.08A7.23 7.23 0 1 0 12.93.25zm0 12.66a5.43 5.43 0 1 1 .01-10.86 5.43 5.43 0 0 1 0 10.86z" }));
}

SearchIcon.displayName = "SearchIcon";

SearchIcon.defaultProps = { "width": "21", "height": "20", "viewBox": "0 0 21 20" };

module.exports = SearchIcon;

SearchIcon.default = SearchIcon;

/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(48);

function BasketIcon(props) {
    return React.createElement("svg", props, React.createElement("path", { "fill": "#d7d7d7", "d": "M20.56 5.78h-3.07a.93.93 0 0 0-.08-.18L14.4.78a.9.9 0 0 0-1.54.95l2.53 4.05H7.65l2.53-4.05A.9.9 0 0 0 9.4.35a.9.9 0 0 0-.77.43l-3 4.82a.93.93 0 0 0-.09.18H2.48c-1 0-1.8.8-1.8 1.8v1.2c0 .86.6 1.58 1.39 1.77l2.3 7.79c.21.75.9 1.3 1.73 1.3h10.84c.83 0 1.52-.55 1.74-1.3l2.3-7.8c.8-.18 1.39-.9 1.39-1.75v-1.2c0-1-.81-1.81-1.81-1.81zM2.48 7.58h18.08v1.2H2.48zm14.46 10.25H6.1L3.97 10.6h15.1z" }));
}

BasketIcon.displayName = "BasketIcon";

BasketIcon.defaultProps = { "width": "23", "height": "20", "viewBox": "0 0 23 20" };

module.exports = BasketIcon;

BasketIcon.default = BasketIcon;

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transition_group_Transition__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transition_group_Transition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_transition_group_Transition__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Burger_Burger__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_Accordeon__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_Link_Link__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MenuPanel_css__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MenuPanel_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__MenuPanel_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/MenuPanel/MenuPanel.js',
    _this = this;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var duration = 300;

var defaultStyle = {
  transition: 'opacity ' + duration + 'ms ease-in-out',
  opacity: 0
};

var transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 }
};

var MenuPanel = function MenuPanel(_ref) {
  var _cx;

  var isShow = _ref.isShow,
      handleToggle = _ref.handleToggle,
      handleAccordeonToggle = _ref.handleAccordeonToggle,
      activeAccordeonIndex = _ref.activeAccordeonIndex;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()((_cx = {}, _defineProperty(_cx, __WEBPACK_IMPORTED_MODULE_7__MenuPanel_css___default.a.root, true), _defineProperty(_cx, __WEBPACK_IMPORTED_MODULE_7__MenuPanel_css___default.a.active, isShow), _cx)),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_7__MenuPanel_css___default.a.burger, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_components_Burger_Burger__["a" /* default */], { onClick: handleToggle, show: isShow, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: _this
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_transition_group_Transition___default.a,
      { 'in': isShow, timeout: duration, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: _this
      },
      function (state) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            style: _extends({}, defaultStyle, transitionStyles[state]),
            className: __WEBPACK_IMPORTED_MODULE_7__MenuPanel_css___default.a.drawer,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_components_Accordeon__["a" /* Accordeon */],
            {
              activeIndex: activeAccordeonIndex,
              handleToggle: function handleToggle() {},
              classnames: {
                content: __WEBPACK_IMPORTED_MODULE_7__MenuPanel_css___default.a.accordeon,
                activeContent: __WEBPACK_IMPORTED_MODULE_7__MenuPanel_css___default.a.accordeonActiveContent
              },
              onOpen: handleAccordeonToggle,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: _this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_components_Accordeon__["b" /* AccordeonItem */],
              { title: '\u0416\u0435\u043D\u0441\u043A\u0438\u0435', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                },
                __self: _this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_components_Link_Link__["a" /* default */],
                { className: __WEBPACK_IMPORTED_MODULE_7__MenuPanel_css___default.a.category, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  },
                  __self: _this
                },
                'Dolce gabanna'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_components_Link_Link__["a" /* default */],
                { className: __WEBPACK_IMPORTED_MODULE_7__MenuPanel_css___default.a.category, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  },
                  __self: _this
                },
                'Loui'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_components_Link_Link__["a" /* default */],
                { className: __WEBPACK_IMPORTED_MODULE_7__MenuPanel_css___default.a.category, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                  },
                  __self: _this
                },
                '\u0415\u0449\u0435 \u0447\u0442\u043E-\u0442\u043E'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_components_Accordeon__["b" /* AccordeonItem */],
              { title: '\u041C\u0443\u0436\u0441\u043A\u0438\u0435', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                },
                __self: _this
              },
              'Contenn'
            )
          )
        );
      }
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_7__MenuPanel_css___default.a)(MenuPanel));

/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

var _propTypes = __webpack_require__(740);

var PropTypes = _interopRequireWildcard(_propTypes);

var _react = __webpack_require__(48);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(270);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _PropTypes = __webpack_require__(820);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
var EXITED = exports.EXITED = 'exited';
var ENTERING = exports.ENTERING = 'entering';
var ENTERED = exports.ENTERED = 'entered';
var EXITING = exports.EXITING = 'exiting';

/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm A fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `ENTERING`
 *  - `ENTERED`
 *  - `EXITING`
 *  - `EXITED`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state= { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) when finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 */

var Transition = function (_React$Component) {
  _inherits(Transition, _React$Component);

  function Transition(props, context) {
    _classCallCheck(this, Transition);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    var parentGroup = context.transitionGroup;
    // In the context of a TransitionGroup all enters are really appears
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;

    var initialStatus = void 0;
    _this.nextStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.nextStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = { status: initialStatus };

    _this.nextCallback = null;
    return _this;
  }

  Transition.prototype.getChildContext = function getChildContext() {
    return { transitionGroup: null }; // allows for nested Transitions
  };

  Transition.prototype.componentDidMount = function componentDidMount() {
    this.updateStatus(true);
  };

  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _ref = this.pendingState || this.state,
        status = _ref.status;

    if (nextProps.in) {
      if (status === UNMOUNTED) {
        this.setState({ status: EXITED });
      }
      if (status !== ENTERING && status !== ENTERED) {
        this.nextStatus = ENTERING;
      }
    } else {
      if (status === ENTERING || status === ENTERED) {
        this.nextStatus = EXITING;
      }
    }
  };

  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updateStatus();
  };

  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  Transition.prototype.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;

    var exit = void 0,
        enter = void 0,
        appear = void 0;

    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }
    return { exit: exit, enter: enter, appear: appear };
  };

  Transition.prototype.updateStatus = function updateStatus() {
    var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var nextStatus = this.nextStatus;

    if (nextStatus !== null) {
      this.nextStatus = null;
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      var node = _reactDom2.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({ status: UNMOUNTED });
    }
  };

  Transition.prototype.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;

    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;

    var timeouts = this.getTimeouts();

    // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set
    if (!mounting && !enter) {
      this.safeSetState({ status: ENTERED }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);

    this.safeSetState({ status: ENTERING }, function () {
      _this2.props.onEntering(node, appearing);

      // FIXME: appear timeout?
      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({ status: ENTERED }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  Transition.prototype.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;

    var timeouts = this.getTimeouts();

    // no exit animation skip right to EXITED
    if (!exit) {
      this.safeSetState({ status: EXITED }, function () {
        _this3.props.onExited(node);
      });
      return;
    }
    this.props.onExit(node);

    this.safeSetState({ status: EXITING }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({ status: EXITED }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
    var _this4 = this;

    // We need to track pending updates for instances where a cWRP fires quickly
    // after cDM and before the state flushes, which would double trigger a
    // transition
    this.pendingState = nextState;

    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, function () {
      _this4.pendingState = null;
      callback();
    });
  };

  Transition.prototype.setNextCallback = function setNextCallback(callback) {
    var _this5 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this5.nextCallback = null;

        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }
      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  Transition.prototype.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }

    var _props = this.props,
        children = _props.children,
        childProps = _objectWithoutProperties(_props, ['children']);
    // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react2.default.Children.only(children);
    return _react2.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react2.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};


Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element.
   * This function is called with the current transition status
   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can used
   * to apply context specific props to a component.
   *
   * ```jsx
   * <Transition timeout={150}>
   *   {(status) => (
   *     <MyComponent className={`fade fade-${status}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEventListener` is provided
   *
   * You may specify a single timeout for all transitions like: `timeout={500}`,
   * or individually like:
   *
   * ```jsx
   * timeout={{
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * @type {number | { enter?: number, exit?: number }}
   */
  timeout: function timeout(props) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var pt = _PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    return pt.apply(undefined, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {};

// Name the function so it is clearer in the documentation
function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,

  onEnter: noop,
  onEntering: noop,
  onEntered: noop,

  onExit: noop,
  onExiting: noop,
  onExited: noop
};

Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

exports.default = Transition;

/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(741);
var invariant = __webpack_require__(742);
var warning = __webpack_require__(743);
var assign = __webpack_require__(9);

var ReactPropTypesSecret = __webpack_require__(744);
var checkPropTypes = __webpack_require__(819);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__(742);
  var warning = __webpack_require__(743);
  var ReactPropTypesSecret = __webpack_require__(744);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _propTypes = __webpack_require__(740);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
  enter: _propTypes2.default.number,
  exit: _propTypes2.default.number
}).isRequired]);

var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  exitActive: _propTypes2.default.string
})]);

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Accordeon__ = __webpack_require__(822);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Accordeon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AccordeonItem__ = __webpack_require__(824);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__AccordeonItem__["a"]; });



/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Accordeon_css__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Accordeon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Accordeon_css__);
var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/Accordeon/Accordeon.js',
    _this = this;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Accordeon = function Accordeon(props) {
  var _cx;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()((_cx = {}, _defineProperty(_cx, __WEBPACK_IMPORTED_MODULE_4__Accordeon_css___default.a.root, true), _defineProperty(_cx, props.classnames.root, true), _cx)), __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(props.children, function (child, index) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
        active: index === props.activeIndex,
        handleToggle: props.onOpen,
        itemIndex: index,
        classnames: props.classnames
      });
    })
  );
};

Accordeon.propTypes = {
  activeIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  onOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any.isRequired
};

Accordeon.defaultProps = {
  classnames: {
    root: ''
  }
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Accordeon_css___default.a)(Accordeon));

/***/ }),

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(268)(true);
// imports


// module
exports.push([module.i, ".Accordeon__root___b_aVn {\n  width: 100%;\n}\n\n.Accordeon__acordeonHeader___2HNjV {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 12px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  min-height: 34px;\n  padding: 0px 20px 0px 20px;\n  background-color: transparent;\n  -webkit-transition: background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  -o-transition: background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  font-size: 17.6px;\n  font-size: 17.6px;\n  font-size: 1.1rem;\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 0.752px;\n  letter-spacing: 0.752px;\n  letter-spacing: 0.047rem;\n  color: rgb(192, 192, 192);\n  border-bottom: 1px solid rgb(239, 239, 239);\n}\n\n.Accordeon__arrow___3QFAN {\n  -webkit-transform: none;\n      -ms-transform: none;\n          transform: none;\n  -webkit-transition: -webkit-transform 0.2s;\n  transition: -webkit-transform 0.2s;\n  -o-transition: transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n  width: 32px;\n  width: 32px;\n  width: 2rem;\n  fill: rgb(192, 192, 192);\n}\n\n.Accordeon__activeArrow___2TKsy {\n  -webkit-transform: rotate(180deg);\n      -ms-transform: rotate(180deg);\n          transform: rotate(180deg);\n  -webkit-transition: -webkit-transform 0.2s;\n  transition: -webkit-transform 0.2s;\n  -o-transition: transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n}\n\n.Accordeon__acordeonHeader___2HNjV:hover {\n  background-color: #eee;\n}\n\n.Accordeon__accordeonContent___3bHJf {\n  max-height: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  overflow: hidden;\n  height: 0;\n  -webkit-transition: max-height 0.3s;\n  -o-transition: max-height 0.3s;\n  transition: max-height 0.3s;\n  will-change: max-height;\n}\n\n.Accordeon__acordeonActiveHeader___206vd {\n  background-color: rgb(239, 239, 239); \n}\n\n.Accordeon__accordeonActiveContent___1LQ37 {\n  max-height: 500px;\n  -webkit-transition: max-height 0.3s;\n  -o-transition: max-height 0.3s;\n  transition: max-height 0.3s;\n  height: auto;\n  border-bottom: 1px solid rgb(239, 239, 239);\n}\n\n", "", {"version":3,"sources":["/Users/anton/Desktop/projects/deworkacy-site/src/components/Accordeon/Accordeon.css"],"names":[],"mappings":"AAAA;EACE,YAAY;CACb;;AAED;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,iBAAiB;EACjB,2BAA2B;EAC3B,8BAA8B;EAC9B,wEAAwE;EACxE,mEAAmE;EACnE,gEAAgE;EAChE,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,0BAA0B;EAC1B,wBAAwB;EACxB,wBAAwB;EACxB,yBAAyB;EACzB,0BAA0B;EAC1B,4CAA4C;CAC7C;;AAED;EACE,wBAAwB;MACpB,oBAAoB;UAChB,gBAAgB;EACxB,2CAA2C;EAC3C,mCAAmC;EACnC,8BAA8B;EAC9B,2BAA2B;EAC3B,mDAAmD;EACnD,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,yBAAyB;CAC1B;;AAED;EACE,kCAAkC;MAC9B,8BAA8B;UAC1B,0BAA0B;EAClC,2CAA2C;EAC3C,mCAAmC;EACnC,8BAA8B;EAC9B,2BAA2B;EAC3B,mDAAmD;CACpD;;AAED;EACE,uBAAuB;CACxB;;AAED;EACE,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,UAAU;EACV,oCAAoC;EACpC,+BAA+B;EAC/B,4BAA4B;EAC5B,wBAAwB;CACzB;;AAED;EACE,qCAAqC;CACtC;;AAED;EACE,kBAAkB;EAClB,oCAAoC;EACpC,+BAA+B;EAC/B,4BAA4B;EAC5B,aAAa;EACb,4CAA4C;CAC7C","file":"Accordeon.css","sourcesContent":[".root {\n  width: 100%;\n}\n\n.acordeonHeader {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 12px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  min-height: 34px;\n  padding: 0px 20px 0px 20px;\n  background-color: transparent;\n  -webkit-transition: background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  -o-transition: background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  font-size: 17.6px;\n  font-size: 17.6px;\n  font-size: 1.1rem;\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 0.752px;\n  letter-spacing: 0.752px;\n  letter-spacing: 0.047rem;\n  color: rgb(192, 192, 192);\n  border-bottom: 1px solid rgb(239, 239, 239);\n}\n\n.arrow {\n  -webkit-transform: none;\n      -ms-transform: none;\n          transform: none;\n  -webkit-transition: -webkit-transform 0.2s;\n  transition: -webkit-transform 0.2s;\n  -o-transition: transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n  width: 32px;\n  width: 32px;\n  width: 2rem;\n  fill: rgb(192, 192, 192);\n}\n\n.activeArrow {\n  -webkit-transform: rotate(180deg);\n      -ms-transform: rotate(180deg);\n          transform: rotate(180deg);\n  -webkit-transition: -webkit-transform 0.2s;\n  transition: -webkit-transform 0.2s;\n  -o-transition: transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n}\n\n.acordeonHeader:hover {\n  background-color: #eee;\n}\n\n.accordeonContent {\n  max-height: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  overflow: hidden;\n  height: 0;\n  -webkit-transition: max-height 0.3s;\n  -o-transition: max-height 0.3s;\n  transition: max-height 0.3s;\n  will-change: max-height;\n}\n\n.acordeonActiveHeader {\n  background-color: rgb(239, 239, 239); \n}\n\n.accordeonActiveContent {\n  max-height: 500px;\n  -webkit-transition: max-height 0.3s;\n  -o-transition: max-height 0.3s;\n  transition: max-height 0.3s;\n  height: auto;\n  border-bottom: 1px solid rgb(239, 239, 239);\n}\n\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Accordeon__root___b_aVn",
	"acordeonHeader": "Accordeon__acordeonHeader___2HNjV",
	"arrow": "Accordeon__arrow___3QFAN",
	"activeArrow": "Accordeon__activeArrow___2TKsy",
	"accordeonContent": "Accordeon__accordeonContent___3bHJf",
	"acordeonActiveHeader": "Accordeon__acordeonActiveHeader___206vd",
	"accordeonActiveContent": "Accordeon__accordeonActiveContent___1LQ37"
};

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_font_icon__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_font_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_font_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_loader_svg_react_loader_icons_arrow_svg_name_Arrow__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_loader_svg_react_loader_icons_arrow_svg_name_Arrow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_loader_svg_react_loader_icons_arrow_svg_name_Arrow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Accordeon_css__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Accordeon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Accordeon_css__);
var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/Accordeon/AccordeonItem.js',
    _this = this;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var handleToggle = function handleToggle(index) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  return function () {
    return fn(index);
  };
};

var AccordeonItem = function AccordeonItem(props) {
  var _cx, _cx2, _cx3;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'header',
      {
        className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()((_cx = {}, _defineProperty(_cx, __WEBPACK_IMPORTED_MODULE_6__Accordeon_css___default.a.acordeonHeader, true), _defineProperty(_cx, __WEBPACK_IMPORTED_MODULE_6__Accordeon_css___default.a.acordeonActiveHeader, props.active), _cx)),
        onClick: handleToggle(props.itemIndex, props.handleToggle),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__babel_loader_svg_react_loader_icons_arrow_svg_name_Arrow___default.a, {
        className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()((_cx2 = {}, _defineProperty(_cx2, __WEBPACK_IMPORTED_MODULE_6__Accordeon_css___default.a.arrow, true), _defineProperty(_cx2, __WEBPACK_IMPORTED_MODULE_6__Accordeon_css___default.a.activeArrow, props.active), _cx2)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: _this
      }),
      props.title
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()((_cx3 = {}, _defineProperty(_cx3, __WEBPACK_IMPORTED_MODULE_6__Accordeon_css___default.a.accordeonContent, true), _defineProperty(_cx3, __WEBPACK_IMPORTED_MODULE_6__Accordeon_css___default.a.accordeonActiveContent, props.active), _defineProperty(_cx3, props.classnames.content, true), _defineProperty(_cx3, props.classnames.activeContent, props.active), _cx3)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: _this
      },
      props.children
    )
  );
};

AccordeonItem.propTypes = {
  active: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  itemIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  handleToggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__Accordeon_css___default.a)(AccordeonItem));

/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(48);

function Arrow(props) {
    return React.createElement("svg", props, React.createElement("g", null, React.createElement("path", { "d": "m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" })));
}

Arrow.displayName = "Arrow";

Arrow.defaultProps = { "version": "1.1", "viewBox": "0 0 129 129", "enableBackground": "new 0 0 129 129" };

module.exports = Arrow;

Arrow.default = Arrow;

/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(827);
    var insertCss = __webpack_require__(267);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./MenuPanel.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./MenuPanel.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(268)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.MenuPanel__root___27aC8 {\n  position: fixed;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n\n}\n\n@media (min-width: 320px) {\n\n  .MenuPanel__root___27aC8 {\n    width: 100%;\n    margin-top: 8.6rem;\n  }\n}\n\n@media (min-width: 544px) {\n\n  .MenuPanel__root___27aC8 {\n    width: 31.2rem;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .MenuPanel__root___27aC8 {\n    z-index: 1;\n    margin-top: 0;\n  }\n}\n\n.MenuPanel__active___2Biqr {\n  z-index: 4;\n  \n}\n\n.MenuPanel__drawer___yucIU {\n  -webkit-box-shadow: 0 0 2.1rem rgba(218, 218, 218, .5);\n          box-shadow: 0 0 2.1rem rgba(218, 218, 218, .5);\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0 0 2.1rem rgba(218, 218, 218, .5);\n  background-color: rgb(255, 255, 255);\n\n\n}\n\n@media (min-width: 320px) {\n\n  .MenuPanel__drawer___yucIU {\n    width: 100%;\n    padding-top: 0;\n    max-width: 100%;\n    min-height: 100vh;\n  }\n}\n\n@media (min-width: 544px) {\n\n  .MenuPanel__drawer___yucIU {\n    padding-top: 7.5rem;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .MenuPanel__drawer___yucIU {\n    min-height: 100vh;\n    margin-top: 0;\n    min-width: 100%;\n    width: 100%;\n    margin-right: 0px;\n    min-height: 100vh;\n    padding: 200px 0px 38px 0px;\n    max-width: 217px;\n  }\n}\n\n.MenuPanel__burger___USYV1 {\n  top: 38px;\n  position: fixed;\n  right: 20px;\n  z-index: 10;\n}\n\n@media (min-width: 320px) {\n\n  .MenuPanel__burger___USYV1 {\n    display: none;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .MenuPanel__burger___USYV1 {\n    display: block;\n  }\n}\n\n.MenuPanel__accordeon___1-gwK {\n  padding: 16px 20px 16px 20px;\n}\n\n.MenuPanel__accordeonActiveContent___13PbR {\n  padding-top: 16px!important;\n  padding-bottom: 16px!important;\n}\n\n.MenuPanel__category___YcSo4 {\n  display: block;\n  text-align: right;\n  color: rgb(192, 192, 192);\n  font-size: 17.6px;\n  font-size: 17.6px;\n  font-size: 1.1rem;\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 0.752px;\n  letter-spacing: 0.752px;\n  letter-spacing: 0.047rem;\n  margin-bottom: 28.8px;\n  margin-bottom: 28.8px;\n  margin-bottom: 1.8rem;\n  cursor: pointer\n}\n\n.MenuPanel__category___YcSo4:last-child {\n  margin-bottom: 0;\n}\n\n.MenuPanel__category___YcSo4:hover {\n  color: rgb(18, 30, 174);\n}\n", "", {"version":3,"sources":["/Users/anton/Desktop/projects/deworkacy-site/src/components/MenuPanel/MenuPanel.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;CAC/M;;AAED;EACE,gBAAgB;EAChB,SAAS;EACT,OAAO;EACP,UAAU;EACV,YAAY;;CAEb;;AAED;;EAEE;IACE,YAAY;IACZ,mBAAmB;GACpB;CACF;;AAED;;EAEE;IACE,eAAe;GAChB;CACF;;AAED;;EAEE;IACE,WAAW;IACX,cAAc;GACf;CACF;;AAED;EACE,WAAW;;CAEZ;;AAED;EACE,uDAAuD;UAC/C,+CAA+C;EACvD,qCAAqC;EACrC,+CAA+C;EAC/C,qCAAqC;;;CAGtC;;AAED;;EAEE;IACE,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,kBAAkB;GACnB;CACF;;AAED;;EAEE;IACE,oBAAoB;GACrB;CACF;;AAED;;EAEE;IACE,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,4BAA4B;IAC5B,iBAAiB;GAClB;CACF;;AAED;EACE,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ,YAAY;CACb;;AAED;;EAEE;IACE,cAAc;GACf;CACF;;AAED;;EAEE;IACE,eAAe;GAChB;CACF;;AAED;EACE,6BAA6B;CAC9B;;AAED;EACE,4BAA4B;EAC5B,+BAA+B;CAChC;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,0BAA0B;EAC1B,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,0BAA0B;EAC1B,wBAAwB;EACxB,wBAAwB;EACxB,yBAAyB;EACzB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,eAAe;CAChB;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,wBAAwB;CACzB","file":"MenuPanel.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.root {\n  position: fixed;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n\n}\n\n@media (min-width: 320px) {\n\n  .root {\n    width: 100%;\n    margin-top: 8.6rem;\n  }\n}\n\n@media (min-width: 544px) {\n\n  .root {\n    width: 31.2rem;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .root {\n    z-index: 1;\n    margin-top: 0;\n  }\n}\n\n.active {\n  z-index: 4;\n  \n}\n\n.drawer {\n  -webkit-box-shadow: 0 0 2.1rem rgba(218, 218, 218, .5);\n          box-shadow: 0 0 2.1rem rgba(218, 218, 218, .5);\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0 0 2.1rem rgba(218, 218, 218, .5);\n  background-color: rgb(255, 255, 255);\n\n\n}\n\n@media (min-width: 320px) {\n\n  .drawer {\n    width: 100%;\n    padding-top: 0;\n    max-width: 100%;\n    min-height: 100vh;\n  }\n}\n\n@media (min-width: 544px) {\n\n  .drawer {\n    padding-top: 7.5rem;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .drawer {\n    min-height: 100vh;\n    margin-top: 0;\n    min-width: 100%;\n    width: 100%;\n    margin-right: 0px;\n    min-height: 100vh;\n    padding: 200px 0px 38px 0px;\n    max-width: 217px;\n  }\n}\n\n.burger {\n  top: 38px;\n  position: fixed;\n  right: 20px;\n  z-index: 10;\n}\n\n@media (min-width: 320px) {\n\n  .burger {\n    display: none;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .burger {\n    display: block;\n  }\n}\n\n.accordeon {\n  padding: 16px 20px 16px 20px;\n}\n\n.accordeonActiveContent {\n  padding-top: 16px!important;\n  padding-bottom: 16px!important;\n}\n\n.category {\n  display: block;\n  text-align: right;\n  color: rgb(192, 192, 192);\n  font-size: 17.6px;\n  font-size: 17.6px;\n  font-size: 1.1rem;\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 0.752px;\n  letter-spacing: 0.752px;\n  letter-spacing: 0.047rem;\n  margin-bottom: 28.8px;\n  margin-bottom: 28.8px;\n  margin-bottom: 1.8rem;\n  cursor: pointer\n}\n\n.category:last-child {\n  margin-bottom: 0;\n}\n\n.category:hover {\n  color: rgb(18, 30, 174);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "MenuPanel__root___27aC8",
	"active": "MenuPanel__active___2Biqr",
	"drawer": "MenuPanel__drawer___yucIU",
	"burger": "MenuPanel__burger___USYV1",
	"accordeon": "MenuPanel__accordeon___1-gwK",
	"accordeonActiveContent": "MenuPanel__accordeonActiveContent___13PbR",
	"category": "MenuPanel__category___YcSo4"
};

/***/ }),

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(829);
    var insertCss = __webpack_require__(267);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../css-loader/index.js??ref--1-rules-2!../postcss-loader/lib/index.js??ref--1-rules-4!./normalize.css", function() {
        content = require("!!../css-loader/index.js??ref--1-rules-2!../postcss-loader/lib/index.js??ref--1-rules-4!./normalize.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(268)(true);
// imports


// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n", "", {"version":3,"sources":["/Users/anton/Desktop/projects/deworkacy-site/node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,4EAA4E;;AAE5E;gFACgF;;AAEhF;;;;GAIG;;AAEH;EACE,kBAAkB,CAAC,OAAO;EAC1B,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;;GAEG;;AAEH;;;;;;EAME,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;OAEO,OAAO;EACZ,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,gCAAgC;UACxB,wBAAwB,CAAC,OAAO;EACxC,UAAU,CAAC,OAAO;EAClB,kBAAkB,CAAC,OAAO;CAC3B;;AAED;;;GAGG;;AAEH;EACE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,sCAAsC,CAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;EACE,oBAAoB,CAAC,OAAO;EAC5B,2BAA2B,CAAC,OAAO;EACnC,0CAA0C;UAClC,kCAAkC,CAAC,OAAO;CACnD;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;;GAGG;;AAEH;;;EAGE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;;EAEE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,wBAAwB,CAAC,OAAO;EAChC,gBAAgB,CAAC,OAAO;EACxB,kBAAkB,CAAC,OAAO;EAC1B,UAAU,CAAC,OAAO;CACnB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;SACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,CAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,+BAA+B;UACvB,uBAAuB,CAAC,OAAO;EACvC,eAAe,CAAC,OAAO;EACvB,eAAe,CAAC,OAAO;EACvB,gBAAgB,CAAC,OAAO;EACxB,WAAW,CAAC,OAAO;EACnB,oBAAoB,CAAC,OAAO;CAC7B;;AAED;;;GAGG;;AAEH;EACE,sBAAsB,CAAC,OAAO;EAC9B,yBAAyB,CAAC,OAAO;CAClC;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,+BAA+B;UACvB,uBAAuB,CAAC,OAAO;EACvC,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,qBAAqB,CAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,CAAC,OAAO;EACnC,cAAc,CAAC,OAAO;CACvB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;EAEE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,cAAc;CACf","file":"normalize.css","sourcesContent":["/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(831);
    var insertCss = __webpack_require__(267);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../postcss-loader/lib/index.js??ref--1-rules-4!./react-flexbox-grid.css", function() {
        content = require("!!../../postcss-loader/lib/index.js??ref--1-rules-4!./react-flexbox-grid.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = ".flexboxgrid__container-fluid___2lUES,\n.flexboxgrid__container___R2zU9 {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.flexboxgrid__container-fluid___2lUES {\n  padding-right: 32px;\n  padding-right: 32px;\n  padding-right: 2rem;\n  padding-left: 32px;\n  padding-left: 32px;\n  padding-left: 2rem;\n}\n\n.flexboxgrid__row___1y_mg {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -8px;\n  margin-right: -8px;\n  margin-right: -0.5rem;\n  margin-left: -8px;\n  margin-left: -8px;\n  margin-left: -0.5rem;\n}\n\n.flexboxgrid__row___1y_mg.flexboxgrid__reverse___1X682 {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n}\n\n.flexboxgrid__col___3RqPP.flexboxgrid__reverse___1X682 {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: column-reverse;\n  flex-direction: column-reverse;\n}\n\n.flexboxgrid__col-xs___1ROHR,\n.flexboxgrid__col-xs-1___VtNIK,\n.flexboxgrid__col-xs-2___36nDa,\n.flexboxgrid__col-xs-3___2f2Ql,\n.flexboxgrid__col-xs-4___TxBJg,\n.flexboxgrid__col-xs-5___1HkK5,\n.flexboxgrid__col-xs-6___1DhV6,\n.flexboxgrid__col-xs-7___3o2m-,\n.flexboxgrid__col-xs-8___3ARGc,\n.flexboxgrid__col-xs-9___15qfl,\n.flexboxgrid__col-xs-10___2AWNv,\n.flexboxgrid__col-xs-11___3H-6F,\n.flexboxgrid__col-xs-12___phbtE,\n.flexboxgrid__col-xs-offset-0___10C7E,\n.flexboxgrid__col-xs-offset-1___12o_R,\n.flexboxgrid__col-xs-offset-2___2Hh-B,\n.flexboxgrid__col-xs-offset-3___8NCys,\n.flexboxgrid__col-xs-offset-4___dA0P1,\n.flexboxgrid__col-xs-offset-5___2MbdF,\n.flexboxgrid__col-xs-offset-6___3N3bt,\n.flexboxgrid__col-xs-offset-7___1yQDG,\n.flexboxgrid__col-xs-offset-8___2aEcW,\n.flexboxgrid__col-xs-offset-9___2haBv,\n.flexboxgrid__col-xs-offset-10___1QsVg,\n.flexboxgrid__col-xs-offset-11___29xQn,\n.flexboxgrid__col-xs-offset-12___1XWFb {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  padding-right: 8px;\n  padding-right: 8px;\n  padding-right: 0.5rem;\n  padding-left: 8px;\n  padding-left: 8px;\n  padding-left: 0.5rem;\n}\n\n.flexboxgrid__col-xs___1ROHR {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  max-width: 100%;\n}\n\n.flexboxgrid__col-xs-1___VtNIK {\n  -ms-flex-preferred-size: 8.33333333%;\n  flex-basis: 8.33333333%;\n  max-width: 8.33333333%;\n}\n\n.flexboxgrid__col-xs-2___36nDa {\n  -ms-flex-preferred-size: 16.66666667%;\n  flex-basis: 16.66666667%;\n  max-width: 16.66666667%;\n}\n\n.flexboxgrid__col-xs-3___2f2Ql {\n  -ms-flex-preferred-size: 25%;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n\n.flexboxgrid__col-xs-4___TxBJg {\n  -ms-flex-preferred-size: 33.33333333%;\n  flex-basis: 33.33333333%;\n  max-width: 33.33333333%;\n}\n\n.flexboxgrid__col-xs-5___1HkK5 {\n  -ms-flex-preferred-size: 41.66666667%;\n  flex-basis: 41.66666667%;\n  max-width: 41.66666667%;\n}\n\n.flexboxgrid__col-xs-6___1DhV6 {\n  -ms-flex-preferred-size: 50%;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n\n.flexboxgrid__col-xs-7___3o2m- {\n  -ms-flex-preferred-size: 58.33333333%;\n  flex-basis: 58.33333333%;\n  max-width: 58.33333333%;\n}\n\n.flexboxgrid__col-xs-8___3ARGc {\n  -ms-flex-preferred-size: 66.66666667%;\n  flex-basis: 66.66666667%;\n  max-width: 66.66666667%;\n}\n\n.flexboxgrid__col-xs-9___15qfl {\n  -ms-flex-preferred-size: 75%;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n\n.flexboxgrid__col-xs-10___2AWNv {\n  -ms-flex-preferred-size: 83.33333333%;\n  flex-basis: 83.33333333%;\n  max-width: 83.33333333%;\n}\n\n.flexboxgrid__col-xs-11___3H-6F {\n  -ms-flex-preferred-size: 91.66666667%;\n  flex-basis: 91.66666667%;\n  max-width: 91.66666667%;\n}\n\n.flexboxgrid__col-xs-12___phbtE {\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n\n.flexboxgrid__col-xs-offset-0___10C7E {\n  margin-left: 0;\n}\n\n.flexboxgrid__col-xs-offset-1___12o_R {\n  margin-left: 8.33333333%;\n}\n\n.flexboxgrid__col-xs-offset-2___2Hh-B {\n  margin-left: 16.66666667%;\n}\n\n.flexboxgrid__col-xs-offset-3___8NCys {\n  margin-left: 25%;\n}\n\n.flexboxgrid__col-xs-offset-4___dA0P1 {\n  margin-left: 33.33333333%;\n}\n\n.flexboxgrid__col-xs-offset-5___2MbdF {\n  margin-left: 41.66666667%;\n}\n\n.flexboxgrid__col-xs-offset-6___3N3bt {\n  margin-left: 50%;\n}\n\n.flexboxgrid__col-xs-offset-7___1yQDG {\n  margin-left: 58.33333333%;\n}\n\n.flexboxgrid__col-xs-offset-8___2aEcW {\n  margin-left: 66.66666667%;\n}\n\n.flexboxgrid__col-xs-offset-9___2haBv {\n  margin-left: 75%;\n}\n\n.flexboxgrid__col-xs-offset-10___1QsVg {\n  margin-left: 83.33333333%;\n}\n\n.flexboxgrid__col-xs-offset-11___29xQn {\n  margin-left: 91.66666667%;\n}\n\n.flexboxgrid__start-xs___h8qdA {\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  text-align: start;\n}\n\n.flexboxgrid__center-xs___1JWon {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.flexboxgrid__end-xs___33Mku {\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  text-align: end;\n}\n\n.flexboxgrid__top-xs___UhA-V {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n\n.flexboxgrid__middle-xs___1h5t3 {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.flexboxgrid__bottom-xs___2tRUa {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n}\n\n.flexboxgrid__around-xs___1okkK {\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n}\n\n.flexboxgrid__between-xs___WFP84 {\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.flexboxgrid__first-xs___XoosK {\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.flexboxgrid__last-xs___HnlRw {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n@media only screen and (min-width: 48em) {\n  .flexboxgrid__container___R2zU9 {\n    width: 49rem;\n  }\n\n  .flexboxgrid__col-sm___3tZ-z,\n  .flexboxgrid__col-sm-1___2Gca6,\n  .flexboxgrid__col-sm-2___YETza,\n  .flexboxgrid__col-sm-3___2irZQ,\n  .flexboxgrid__col-sm-4___3kj7S,\n  .flexboxgrid__col-sm-5___gAxuQ,\n  .flexboxgrid__col-sm-6___vUdKH,\n  .flexboxgrid__col-sm-7___22IcQ,\n  .flexboxgrid__col-sm-8___2_YhB,\n  .flexboxgrid__col-sm-9___2ubpx,\n  .flexboxgrid__col-sm-10___262G9,\n  .flexboxgrid__col-sm-11___39s7J,\n  .flexboxgrid__col-sm-12___1e5Uk,\n  .flexboxgrid__col-sm-offset-0___llQ6-,\n  .flexboxgrid__col-sm-offset-1___1PFWu,\n  .flexboxgrid__col-sm-offset-2___1DgbO,\n  .flexboxgrid__col-sm-offset-3___3W5Iv,\n  .flexboxgrid__col-sm-offset-4___3YToG,\n  .flexboxgrid__col-sm-offset-5___609Vo,\n  .flexboxgrid__col-sm-offset-6___TCeVQ,\n  .flexboxgrid__col-sm-offset-7___csvBu,\n  .flexboxgrid__col-sm-offset-8___11PYH,\n  .flexboxgrid__col-sm-offset-9___24Evy,\n  .flexboxgrid__col-sm-offset-10___1-lcE,\n  .flexboxgrid__col-sm-offset-11___2ynFq,\n  .flexboxgrid__col-sm-offset-12___3MBMi {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .flexboxgrid__col-sm___3tZ-z {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .flexboxgrid__col-sm-1___2Gca6 {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .flexboxgrid__col-sm-2___YETza {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .flexboxgrid__col-sm-3___2irZQ {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .flexboxgrid__col-sm-4___3kj7S {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .flexboxgrid__col-sm-5___gAxuQ {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .flexboxgrid__col-sm-6___vUdKH {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .flexboxgrid__col-sm-7___22IcQ {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .flexboxgrid__col-sm-8___2_YhB {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .flexboxgrid__col-sm-9___2ubpx {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flexboxgrid__col-sm-10___262G9 {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .flexboxgrid__col-sm-11___39s7J {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .flexboxgrid__col-sm-12___1e5Uk {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .flexboxgrid__col-sm-offset-0___llQ6- {\n    margin-left: 0;\n  }\n\n  .flexboxgrid__col-sm-offset-1___1PFWu {\n    margin-left: 8.33333333%;\n  }\n\n  .flexboxgrid__col-sm-offset-2___1DgbO {\n    margin-left: 16.66666667%;\n  }\n\n  .flexboxgrid__col-sm-offset-3___3W5Iv {\n    margin-left: 25%;\n  }\n\n  .flexboxgrid__col-sm-offset-4___3YToG {\n    margin-left: 33.33333333%;\n  }\n\n  .flexboxgrid__col-sm-offset-5___609Vo {\n    margin-left: 41.66666667%;\n  }\n\n  .flexboxgrid__col-sm-offset-6___TCeVQ {\n    margin-left: 50%;\n  }\n\n  .flexboxgrid__col-sm-offset-7___csvBu {\n    margin-left: 58.33333333%;\n  }\n\n  .flexboxgrid__col-sm-offset-8___11PYH {\n    margin-left: 66.66666667%;\n  }\n\n  .flexboxgrid__col-sm-offset-9___24Evy {\n    margin-left: 75%;\n  }\n\n  .flexboxgrid__col-sm-offset-10___1-lcE {\n    margin-left: 83.33333333%;\n  }\n\n  .flexboxgrid__col-sm-offset-11___2ynFq {\n    margin-left: 91.66666667%;\n  }\n\n  .flexboxgrid__start-sm___3Dilu {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .flexboxgrid__center-sm___39HWq {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .flexboxgrid__end-sm___3B07f {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .flexboxgrid__top-sm___1begS {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .flexboxgrid__middle-sm___Oh4K7 {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .flexboxgrid__bottom-sm___1jPnc {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .flexboxgrid__around-sm___3ffbb {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .flexboxgrid__between-sm___1Rcaf {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .flexboxgrid__first-sm___2Gzhb {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .flexboxgrid__last-sm___1pF8w {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}\n\n@media only screen and (min-width: 64em) {\n  .flexboxgrid__container___R2zU9 {\n    width: 65rem;\n  }\n\n  .flexboxgrid__col-md___2lbzm,\n  .flexboxgrid__col-md-1___1Lapj,\n  .flexboxgrid__col-md-2___1c_4t,\n  .flexboxgrid__col-md-3___3ANRS,\n  .flexboxgrid__col-md-4___a_FyK,\n  .flexboxgrid__col-md-5___YXlMq,\n  .flexboxgrid__col-md-6___5OSyJ,\n  .flexboxgrid__col-md-7___1Zp-r,\n  .flexboxgrid__col-md-8___3979J,\n  .flexboxgrid__col-md-9___2fXuC,\n  .flexboxgrid__col-md-10___2Jbee,\n  .flexboxgrid__col-md-11___3drbK,\n  .flexboxgrid__col-md-12___zR2lK,\n  .flexboxgrid__col-md-offset-0___2O3vR,\n  .flexboxgrid__col-md-offset-1___2XNCz,\n  .flexboxgrid__col-md-offset-2___2t-NV,\n  .flexboxgrid__col-md-offset-3___1zlTP,\n  .flexboxgrid__col-md-offset-4___3aHxz,\n  .flexboxgrid__col-md-offset-5___3S2Gw,\n  .flexboxgrid__col-md-offset-6___3KV0V,\n  .flexboxgrid__col-md-offset-7___1OdCD,\n  .flexboxgrid__col-md-offset-8___2vFbQ,\n  .flexboxgrid__col-md-offset-9___1q95x,\n  .flexboxgrid__col-md-offset-10___2CeMK,\n  .flexboxgrid__col-md-offset-11___3u6XW,\n  .flexboxgrid__col-md-offset-12___eKUlL {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .flexboxgrid__col-md___2lbzm {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .flexboxgrid__col-md-1___1Lapj {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .flexboxgrid__col-md-2___1c_4t {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .flexboxgrid__col-md-3___3ANRS {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .flexboxgrid__col-md-4___a_FyK {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .flexboxgrid__col-md-5___YXlMq {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .flexboxgrid__col-md-6___5OSyJ {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .flexboxgrid__col-md-7___1Zp-r {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .flexboxgrid__col-md-8___3979J {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .flexboxgrid__col-md-9___2fXuC {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flexboxgrid__col-md-10___2Jbee {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .flexboxgrid__col-md-11___3drbK {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .flexboxgrid__col-md-12___zR2lK {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .flexboxgrid__col-md-offset-0___2O3vR {\n    margin-left: 0;\n  }\n\n  .flexboxgrid__col-md-offset-1___2XNCz {\n    margin-left: 8.33333333%;\n  }\n\n  .flexboxgrid__col-md-offset-2___2t-NV {\n    margin-left: 16.66666667%;\n  }\n\n  .flexboxgrid__col-md-offset-3___1zlTP {\n    margin-left: 25%;\n  }\n\n  .flexboxgrid__col-md-offset-4___3aHxz {\n    margin-left: 33.33333333%;\n  }\n\n  .flexboxgrid__col-md-offset-5___3S2Gw {\n    margin-left: 41.66666667%;\n  }\n\n  .flexboxgrid__col-md-offset-6___3KV0V {\n    margin-left: 50%;\n  }\n\n  .flexboxgrid__col-md-offset-7___1OdCD {\n    margin-left: 58.33333333%;\n  }\n\n  .flexboxgrid__col-md-offset-8___2vFbQ {\n    margin-left: 66.66666667%;\n  }\n\n  .flexboxgrid__col-md-offset-9___1q95x {\n    margin-left: 75%;\n  }\n\n  .flexboxgrid__col-md-offset-10___2CeMK {\n    margin-left: 83.33333333%;\n  }\n\n  .flexboxgrid__col-md-offset-11___3u6XW {\n    margin-left: 91.66666667%;\n  }\n\n  .flexboxgrid__start-md___2B-sg {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .flexboxgrid__center-md___3VDfS {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .flexboxgrid__end-md___2fJWy {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .flexboxgrid__top-md___12FDg {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .flexboxgrid__middle-md___3wIJR {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .flexboxgrid__bottom-md___2v1cd {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .flexboxgrid__around-md___1x54_ {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .flexboxgrid__between-md___Xn-9x {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .flexboxgrid__first-md___3j4t5 {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .flexboxgrid__last-md___3y72e {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}\n\n@media only screen and (min-width: 75em) {\n  .flexboxgrid__container___R2zU9 {\n    width: 76rem;\n  }\n\n  .flexboxgrid__col-lg___3SaXd,\n  .flexboxgrid__col-lg-1___2VMiv,\n  .flexboxgrid__col-lg-2___21dKK,\n  .flexboxgrid__col-lg-3___vbACp,\n  .flexboxgrid__col-lg-4___2hzy8,\n  .flexboxgrid__col-lg-5___1-g7-,\n  .flexboxgrid__col-lg-6___21lf8,\n  .flexboxgrid__col-lg-7___3kBG1,\n  .flexboxgrid__col-lg-8___afECx,\n  .flexboxgrid__col-lg-9___10mdl,\n  .flexboxgrid__col-lg-10___1yTfj,\n  .flexboxgrid__col-lg-11___3hMRu,\n  .flexboxgrid__col-lg-12___1rlAA,\n  .flexboxgrid__col-lg-offset-0___3KM3x,\n  .flexboxgrid__col-lg-offset-1___KhvqR,\n  .flexboxgrid__col-lg-offset-2___1ZD_z,\n  .flexboxgrid__col-lg-offset-3___2GQVa,\n  .flexboxgrid__col-lg-offset-4___1zPZj,\n  .flexboxgrid__col-lg-offset-5___Kj8Iq,\n  .flexboxgrid__col-lg-offset-6___3nun3,\n  .flexboxgrid__col-lg-offset-7___YTmn9,\n  .flexboxgrid__col-lg-offset-8___1qG2t,\n  .flexboxgrid__col-lg-offset-9___qd27B,\n  .flexboxgrid__col-lg-offset-10___2YScP,\n  .flexboxgrid__col-lg-offset-11___3pPvj,\n  .flexboxgrid__col-lg-offset-12___2rHEg {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .flexboxgrid__col-lg___3SaXd {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .flexboxgrid__col-lg-1___2VMiv {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .flexboxgrid__col-lg-2___21dKK {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .flexboxgrid__col-lg-3___vbACp {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .flexboxgrid__col-lg-4___2hzy8 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .flexboxgrid__col-lg-5___1-g7- {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .flexboxgrid__col-lg-6___21lf8 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .flexboxgrid__col-lg-7___3kBG1 {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .flexboxgrid__col-lg-8___afECx {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .flexboxgrid__col-lg-9___10mdl {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flexboxgrid__col-lg-10___1yTfj {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .flexboxgrid__col-lg-11___3hMRu {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .flexboxgrid__col-lg-12___1rlAA {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .flexboxgrid__col-lg-offset-0___3KM3x {\n    margin-left: 0;\n  }\n\n  .flexboxgrid__col-lg-offset-1___KhvqR {\n    margin-left: 8.33333333%;\n  }\n\n  .flexboxgrid__col-lg-offset-2___1ZD_z {\n    margin-left: 16.66666667%;\n  }\n\n  .flexboxgrid__col-lg-offset-3___2GQVa {\n    margin-left: 25%;\n  }\n\n  .flexboxgrid__col-lg-offset-4___1zPZj {\n    margin-left: 33.33333333%;\n  }\n\n  .flexboxgrid__col-lg-offset-5___Kj8Iq {\n    margin-left: 41.66666667%;\n  }\n\n  .flexboxgrid__col-lg-offset-6___3nun3 {\n    margin-left: 50%;\n  }\n\n  .flexboxgrid__col-lg-offset-7___YTmn9 {\n    margin-left: 58.33333333%;\n  }\n\n  .flexboxgrid__col-lg-offset-8___1qG2t {\n    margin-left: 66.66666667%;\n  }\n\n  .flexboxgrid__col-lg-offset-9___qd27B {\n    margin-left: 75%;\n  }\n\n  .flexboxgrid__col-lg-offset-10___2YScP {\n    margin-left: 83.33333333%;\n  }\n\n  .flexboxgrid__col-lg-offset-11___3pPvj {\n    margin-left: 91.66666667%;\n  }\n\n  .flexboxgrid__start-lg___ageu9 {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .flexboxgrid__center-lg___3H3SI {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .flexboxgrid__end-lg___27_fM {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .flexboxgrid__top-lg___1tWWw {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .flexboxgrid__middle-lg___nocGI {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .flexboxgrid__bottom-lg___IYGks {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .flexboxgrid__around-lg___zZC2C {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .flexboxgrid__between-lg___2njzk {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .flexboxgrid__first-lg___6dksO {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .flexboxgrid__last-lg___xGBvS {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}"

/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(833);
    var insertCss = __webpack_require__(267);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./Layout.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./Layout.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(268)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n/*\n * normalize.css is imported in JS file.\n * If you import external CSS file from your internal CSS\n * then it will be inlined and processed with CSS modules.\n */\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 10px;\n  font-family: 'Roboto', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\nbutton {\n  font-family: 'Roboto', 'HelveticaNeue-Light', sans-serif!important;\n  line-height: 1;\n}\n\nbody {\n  margin: 0;\n  width: 100%;\n  min-width: 320px;\n}\n\na {\n  color: #0074c2;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.Layout__container___1g5KG {\n  position: relative;\n  z-index: 10;\n}\n\n#Layout__app___3EzLR {\n  overflow: hidden;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]:after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']:after,\n  a[href^='javascript:']:after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/Users/anton/Desktop/projects/deworkacy-site/src/components/Layout/Layout.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;CAC/M;;AAED;;;;GAIG;;AAEH;;gFAEgF;;AAEhF;EACE,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,yDAAyD;EACzD,mBAAmB,CAAC,WAAW;CAChC;;AAED;EACE,mEAAmE;EACnE,eAAe;CAChB;;AAED;EACE,UAAU;EACV,YAAY;EACZ,iBAAiB;CAClB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,+BAA+B;UACvB,uBAAuB;CAChC;;AAED;EACE,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,iBAAiB;CAClB;;AAED;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAED;;;;GAIG;;AAEH;;;;;;EAME,uBAAuB;CACxB;;AAED;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAED;;;;gFAIgF;;AAEhF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,oCAAoC;YAC5B,4BAA4B;IACpC,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"Layout.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n/*\n * normalize.css is imported in JS file.\n * If you import external CSS file from your internal CSS\n * then it will be inlined and processed with CSS modules.\n */\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 10px;\n  font-family: 'Roboto', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\nbutton {\n  font-family: 'Roboto', 'HelveticaNeue-Light', sans-serif!important;\n  line-height: 1;\n}\n\nbody {\n  margin: 0;\n  width: 100%;\n  min-width: 320px;\n}\n\na {\n  color: #0074c2;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.container {\n  position: relative;\n  z-index: 10;\n}\n\n#app {\n  overflow: hidden;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]:after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']:after,\n  a[href^='javascript:']:after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "Layout__container___1g5KG",
	"app": "Layout__app___3EzLR"
};

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLmNodW5rLmpzIiwic291cmNlcyI6WyIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvcm91dGVzL25vdC1mb3VuZC9Ob3RGb3VuZC5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9yb3V0ZXMvbm90LWZvdW5kL05vdEZvdW5kLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL25vdC1mb3VuZC9Ob3RGb3VuZC5jc3M/N2ViOSIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9yb3V0ZXMvbm90LWZvdW5kL2luZGV4LmpzIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9ub2RlX21vZHVsZXMvcmVhY3QtdG9vbGJveC9saWIvZm9udF9pY29uL0ZvbnRJY29uLmpzIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvbm9kZV9tb2R1bGVzL3JlYWN0LWZsZXhib3gtZ3JpZC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL25vZGVfbW9kdWxlcy9yZWFjdC10b29sYm94L2xpYi9mb250X2ljb24vaW5kZXguanMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9ub2RlX21vZHVsZXMvcmVhY3QtZmxleGJveC1ncmlkL2xpYi9pbmRleC5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL25vZGVfbW9kdWxlcy9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2NsYXNzTmFtZXMuanMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9ub2RlX21vZHVsZXMvcmVhY3QtZmxleGJveC1ncmlkL2xpYi9jcmVhdGVQcm9wcy5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL0xpbmsvTGluay5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL25vZGVfbW9kdWxlcy9yZWFjdC1mbGV4Ym94LWdyaWQvbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9ub2RlX21vZHVsZXMvcmVhY3QtZmxleGJveC1ncmlkL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9ub2RlX21vZHVsZXMvcmVhY3QtZmxleGJveC1ncmlkL25vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvbm9kZV9tb2R1bGVzL3JlYWN0LWZsZXhib3gtZ3JpZC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9ub2RlX21vZHVsZXMvcmVhY3QtZmxleGJveC1ncmlkL2xpYi90eXBlcy5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL0J1cmdlci9CdXJnZXIuanMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL25vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL2NvbXBvbmVudHMvQWNjb3JkZW9uL0FjY29yZGVvbi5jc3MiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9ncmlkLmNzcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL25vZGVfbW9kdWxlcy9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2NvbXBvbmVudHMvUm93LmpzIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvbm9kZV9tb2R1bGVzL2ZsZXhib3hncmlkL2Rpc3QvZmxleGJveGdyaWQuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGV4Ym94Z3JpZC9kaXN0L2ZsZXhib3hncmlkLmNzcz8yNjBmIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvbm9kZV9tb2R1bGVzL3JlYWN0LWZsZXhib3gtZ3JpZC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL25vZGVfbW9kdWxlcy9yZWFjdC1mbGV4Ym94LWdyaWQvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9ub2RlX21vZHVsZXMvcmVhY3QtZmxleGJveC1ncmlkL2xpYi9jb21wb25lbnRzL0NvbC5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL25vZGVfbW9kdWxlcy9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2NvbXBvbmVudHMvR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ncmlkLmNzcz9jNTNkIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL0Fzc2lkZS9Bc3NpZGUuanMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9Bc3NpZGUvQXNzaWRlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Bc3NpZGUvQXNzaWRlLmNzcz9iNjY2IiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzP2Q4NjgiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9CdXJnZXIvaWNvbnMvYnVyZ2VyLWNsb3NlLnN2Zz9uYW1lPUJ1cmdlckNsb3NlIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL2NvbXBvbmVudHMvQnVyZ2VyL2ljb25zL2J1cmdlci1zaG93LnN2Zz9uYW1lPUJ1cmdlclNob3ciLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9CdXJnZXIvQnVyZ2VyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXJnZXIvQnVyZ2VyLmNzcz9lMTgyIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9pY29ucy9ob21lLnN2Zz9uYW1lPUhvbWVJY29uIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9pY29ucy9zZWFyY2guc3ZnP25hbWU9U2VhcmNoSWNvbiIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vaWNvbnMvYmFza2V0LnN2Zz9uYW1lPUJhc2tldEljb24iLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9NZW51UGFuZWwvTWVudVBhbmVsLmpzIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbi5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9Qcm9wVHlwZXMuanMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9BY2NvcmRlb24vaW5kZXguanMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9BY2NvcmRlb24vQWNjb3JkZW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FjY29yZGVvbi9BY2NvcmRlb24uY3NzPzZhODMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9BY2NvcmRlb24vQWNjb3JkZW9uSXRlbS5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL0FjY29yZGVvbi9pY29ucy9hcnJvdy5zdmc/bmFtZT1BcnJvdyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL01lbnVQYW5lbC9NZW51UGFuZWwuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbnVQYW5lbC9NZW51UGFuZWwuY3NzP2E0ZDUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz8wMzU4IiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZmxleGJveC1ncmlkL2Rpc3QvcmVhY3QtZmxleGJveC1ncmlkLmNzcz82YmY0IiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvbm9kZV9tb2R1bGVzL3JlYWN0LWZsZXhib3gtZ3JpZC9kaXN0L3JlYWN0LWZsZXhib3gtZ3JpZC5jc3MiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzcz9jZGYwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL05vdEZvdW5kLmNzcyc7XG5cbmNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cD5Tb3JyeSwgdGhlIHBhZ2UgeW91IHdlcmUgdHJ5aW5nIHRvIHZpZXcgZG9lcyBub3QgZXhpc3QuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShOb3RGb3VuZCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9ub3QtZm91bmQvTm90Rm91bmQuanMiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL05vdEZvdW5kLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9Ob3RGb3VuZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9Ob3RGb3VuZC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcm91dGVzL25vdC1mb3VuZC9Ob3RGb3VuZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwMjNcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4uTm90Rm91bmRfX3Jvb3RfX19ocHJKQyB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uTm90Rm91bmRfX2NvbnRhaW5lcl9fX20yWlFTIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAwIDQwcHg7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9yb3V0ZXMvbm90LWZvdW5kL05vdEZvdW5kLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HOztBQUVIOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDO0NBQy9NOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0NBQ25CXCIsXCJmaWxlXCI6XCJOb3RGb3VuZC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcblxcbi5yb290IHtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDAgNDBweDtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIk5vdEZvdW5kX19yb290X19faHBySkNcIixcblx0XCJjb250YWluZXJcIjogXCJOb3RGb3VuZF9fY29udGFpbmVyX19fbTJaUVNcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvcm91dGVzL25vdC1mb3VuZC9Ob3RGb3VuZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwMjRcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9Ob3RGb3VuZCc7XG5cbmNvbnN0IHRpdGxlID0gJ1BhZ2UgTm90IEZvdW5kJztcblxuZnVuY3Rpb24gYWN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIGNodW5rczogWydub3QtZm91bmQnXSxcbiAgICB0aXRsZSxcbiAgICBjb21wb25lbnQ6IChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxOb3RGb3VuZCB0aXRsZT17dGl0bGV9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICApLFxuICAgIHN0YXR1czogNDA0LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9ub3QtZm91bmQvaW5kZXguanMiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRm9udEljb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBGb250SWNvbiA9IGZ1bmN0aW9uIEZvbnRJY29uKF9yZWYgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuKSB7XG4gIHZhciBhbHQgPSBfcmVmLmFsdCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydhbHQnLCAnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJywgJ3RoZW1lJywgJ3ZhbHVlJ10pO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnc3BhbicsXG4gICAgX2V4dGVuZHMoe1xuICAgICAgJ2RhdGEtcmVhY3QtdG9vbGJveCc6ICdmb250LWljb24nLFxuICAgICAgJ2FyaWEtbGFiZWwnOiBhbHQsXG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoe1xuICAgICAgICAnbWF0ZXJpYWwtaWNvbnMnOiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZydcbiAgICAgIH0sIGNsYXNzTmFtZSlcbiAgICB9LCBvdGhlciksXG4gICAgdmFsdWUsXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5cbkZvbnRJY29uLnByb3BUeXBlcyA9IHtcbiAgYWx0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudF0pXG59O1xuXG5Gb250SWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsdDogJycsXG4gIGNsYXNzTmFtZTogJydcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZvbnRJY29uO1xuZXhwb3J0cy5Gb250SWNvbiA9IEZvbnRJY29uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRvb2xib3gvbGliL2ZvbnRfaWNvbi9Gb250SWNvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZmxleGJveC1ncmlkL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3MDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkZvbnRJY29uID0gdW5kZWZpbmVkO1xuXG52YXIgX0ZvbnRJY29uID0gcmVxdWlyZSgnLi9Gb250SWNvbicpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfRm9udEljb24uRm9udEljb247XG5leHBvcnRzLkZvbnRJY29uID0gX0ZvbnRJY29uLkZvbnRJY29uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRvb2xib3gvbGliL2ZvbnRfaWNvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRDb2x1bW5Qcm9wcyA9IGV4cG9ydHMuQ29sID0gZXhwb3J0cy5nZXRSb3dQcm9wcyA9IGV4cG9ydHMuUm93ID0gZXhwb3J0cy5HcmlkID0gdW5kZWZpbmVkO1xuXG52YXIgX1JvdzIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvUm93Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZ2V0Um93UHJvcHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfUm93Mi5nZXRSb3dQcm9wcztcbiAgfVxufSk7XG5cbnZhciBfQ29sMiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Db2wnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdnZXRDb2x1bW5Qcm9wcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9Db2wyLmdldENvbHVtblByb3BzO1xuICB9XG59KTtcblxudmFyIF9HcmlkMiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9HcmlkJyk7XG5cbnZhciBfR3JpZDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9HcmlkMik7XG5cbnZhciBfUm93MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdzIpO1xuXG52YXIgX0NvbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2wyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5HcmlkID0gX0dyaWQzLmRlZmF1bHQ7XG5leHBvcnRzLlJvdyA9IF9Sb3czLmRlZmF1bHQ7XG5leHBvcnRzLkNvbCA9IF9Db2wzLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZmxleGJveC1ncmlkL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0Q2xhc3M7XG5cbnZhciBfZmxleGJveGdyaWQgPSByZXF1aXJlKCdmbGV4Ym94Z3JpZC9kaXN0L2ZsZXhib3hncmlkLmNzcycpO1xuXG52YXIgX2ZsZXhib3hncmlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsZXhib3hncmlkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0Q2xhc3MoY2xhc3NOYW1lKSB7XG4gIHJldHVybiBfZmxleGJveGdyaWQyLmRlZmF1bHQgJiYgX2ZsZXhib3hncmlkMi5kZWZhdWx0W2NsYXNzTmFtZV0gPyBfZmxleGJveGdyaWQyLmRlZmF1bHRbY2xhc3NOYW1lXSA6IGNsYXNzTmFtZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2NsYXNzTmFtZXMuanNcbi8vIG1vZHVsZSBpZCA9IDcyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVByb3BzO1xuZnVuY3Rpb24gY3JlYXRlUHJvcHMocHJvcFR5cGVzLCBwcm9wcywgY2xhc3NOYW1lcykge1xuICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICBPYmplY3Qua2V5cyhwcm9wcykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4ga2V5ID09PSAnY2hpbGRyZW4nIHx8ICFwcm9wVHlwZXNba2V5XTtcbiAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICB9KTtcblxuICB2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcy5maWx0ZXIoZnVuY3Rpb24gKGNuKSB7XG4gICAgcmV0dXJuIGNuO1xuICB9KS5qb2luKCcgJyk7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBuZXdQcm9wcywgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2NyZWF0ZVByb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnLi4vLi4vaGlzdG9yeSc7XG5cbmZ1bmN0aW9uIGlzTGVmdENsaWNrRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cblxuY2xhc3MgTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdG86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2xpY2s6IG51bGwsXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB8fCAhaXNMZWZ0Q2xpY2tFdmVudChldmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGlzdG9yeS5wdXNoKHRoaXMucHJvcHMudG8pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9e3RvfSB7Li4ucHJvcHN9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0xpbmsvTGluay5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWZsZXhib3gtZ3JpZC9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNzM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWZsZXhib3gtZ3JpZC9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3MzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWZsZXhib3gtZ3JpZC9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNzM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1mbGV4Ym94LWdyaWQvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSA3Mzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlZpZXdwb3J0U2l6ZVR5cGUgPSBleHBvcnRzLkNvbHVtblNpemVUeXBlID0gdW5kZWZpbmVkO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIENvbHVtblNpemVUeXBlID0gZXhwb3J0cy5Db2x1bW5TaXplVHlwZSA9IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlciwgX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sXSk7XG52YXIgVmlld3BvcnRTaXplVHlwZSA9IGV4cG9ydHMuVmlld3BvcnRTaXplVHlwZSA9IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZyddKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL3R5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3Mzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1cmdlckNsb3NlIGZyb20gJy0hYmFiZWwtbG9hZGVyIXN2Zy1yZWFjdC1sb2FkZXIhLi9pY29ucy9idXJnZXItY2xvc2Uuc3ZnP25hbWU9QnVyZ2VyQ2xvc2UnO1xuaW1wb3J0IEJ1cmdlclNob3cgZnJvbSAnLSFiYWJlbC1sb2FkZXIhc3ZnLXJlYWN0LWxvYWRlciEuL2ljb25zL2J1cmdlci1zaG93LnN2Zz9uYW1lPUJ1cmdlclNob3cnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9CdXJnZXIuY3NzJztcblxuY29uc3QgQnVyZ2VyID0gKHsgc2hvdywgb25DbGljaywgaXNTdGF0aWMgfSkgPT4gKFxuICA8ZGl2XG4gICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICBbcy5yb290XTogdHJ1ZSxcbiAgICAgIFtzLnN0YXRpY106IGlzU3RhdGljLFxuICAgIH0pfVxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gID5cbiAgICA8c3BhbiBjbGFzc05hbWU9e3MuaWNvbn0+XG4gICAgICB7c2hvdyA/IChcbiAgICAgICAgPEJ1cmdlckNsb3NlIGNsYXNzTmFtZT17cy5idXJnZXJ9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8QnVyZ2VyU2hvdyBjbGFzc05hbWU9e3MuYnVyZ2VyfSAvPlxuICAgICAgKX1cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuKTtcbkJ1cmdlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzU3RhdGljOiBmYWxzZSxcbn07XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKEJ1cmdlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvQnVyZ2VyL0J1cmdlci5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDc0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDc0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDc0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNzQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1xuLy8gbW9kdWxlIGlkID0gNzQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9BY2NvcmRlb24uY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL0FjY29yZGVvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9BY2NvcmRlb24uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvQWNjb3JkZW9uL0FjY29yZGVvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDc0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vZ3JpZC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vZ3JpZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9ncmlkLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2dyaWQuY3NzXG4vLyBtb2R1bGUgaWQgPSA3NDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldFJvd1Byb3BzID0gZ2V0Um93UHJvcHM7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3c7XG5cbnZhciBfY2xhc3NOYW1lcyA9IHJlcXVpcmUoJy4uL2NsYXNzTmFtZXMnKTtcblxudmFyIF9jbGFzc05hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzTmFtZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2NyZWF0ZVByb3BzID0gcmVxdWlyZSgnLi4vY3JlYXRlUHJvcHMnKTtcblxudmFyIF9jcmVhdGVQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVQcm9wcyk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKCcuLi90eXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcm93S2V5cyA9IFsnc3RhcnQnLCAnY2VudGVyJywgJ2VuZCcsICd0b3AnLCAnbWlkZGxlJywgJ2JvdHRvbScsICdhcm91bmQnLCAnYmV0d2VlbiddO1xuXG52YXIgcHJvcFR5cGVzID0ge1xuICByZXZlcnNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHN0YXJ0OiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgY2VudGVyOiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgZW5kOiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgdG9wOiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgbWlkZGxlOiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgYm90dG9tOiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgYXJvdW5kOiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgYmV0d2VlbjogX3R5cGVzLlZpZXdwb3J0U2l6ZVR5cGUsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRhZ05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXG59O1xuXG5mdW5jdGlvbiBnZXRSb3dDbGFzc05hbWVzKHByb3BzKSB7XG4gIHZhciBtb2RpZmljYXRvcnMgPSBbcHJvcHMuY2xhc3NOYW1lLCAoMCwgX2NsYXNzTmFtZXMyLmRlZmF1bHQpKCdyb3cnKV07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dLZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGtleSA9IHJvd0tleXNbaV07XG4gICAgdmFyIHZhbHVlID0gcHJvcHNba2V5XTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIG1vZGlmaWNhdG9ycy5wdXNoKCgwLCBfY2xhc3NOYW1lczIuZGVmYXVsdCkoa2V5ICsgJy0nICsgdmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAocHJvcHMucmV2ZXJzZSkge1xuICAgIG1vZGlmaWNhdG9ycy5wdXNoKCgwLCBfY2xhc3NOYW1lczIuZGVmYXVsdCkoJ3JldmVyc2UnKSk7XG4gIH1cblxuICByZXR1cm4gbW9kaWZpY2F0b3JzO1xufVxuXG5mdW5jdGlvbiBnZXRSb3dQcm9wcyhwcm9wcykge1xuICByZXR1cm4gKDAsIF9jcmVhdGVQcm9wczIuZGVmYXVsdCkocHJvcFR5cGVzLCBwcm9wcywgZ2V0Um93Q2xhc3NOYW1lcyhwcm9wcykpO1xufVxuXG5mdW5jdGlvbiBSb3cocHJvcHMpIHtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHByb3BzLnRhZ05hbWUgfHwgJ2RpdicsIGdldFJvd1Byb3BzKHByb3BzKSk7XG59XG5cblJvdy5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZmxleGJveC1ncmlkL2xpYi9jb21wb25lbnRzL1Jvdy5qc1xuLy8gbW9kdWxlIGlkID0gNzk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMSEuLi8uLi9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vZmxleGJveGdyaWQuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTEhLi4vLi4vcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL2ZsZXhib3hncmlkLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0xIS4uLy4uL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9mbGV4Ym94Z3JpZC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmxleGJveGdyaWQvZGlzdC9mbGV4Ym94Z3JpZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDc5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mbGV4Ym94Z3JpZF9fY29udGFpbmVyLWZsdWlkX19fMmxVRVMsXFxuLmZsZXhib3hncmlkX19jb250YWluZXJfX19SMnpVOSB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb250YWluZXItZmx1aWRfX18ybFVFUyB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xcbiAgcGFkZGluZy1yaWdodDogMzJweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fcm93X19fMXlfbWcge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgLW1zLWZsZXg6IDAgMSBhdXRvO1xcbiAgZmxleDogMCAxIGF1dG87XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tcmlnaHQ6IC04cHg7XFxuICBtYXJnaW4tcmlnaHQ6IC04cHg7XFxuICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW07XFxuICBtYXJnaW4tbGVmdDogLThweDtcXG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0wLjVyZW07XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fcm93X19fMXlfbWcuZmxleGJveGdyaWRfX3JldmVyc2VfX18xWDY4MiB7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IHJldmVyc2U7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbF9fXzNScVBQLmZsZXhib3hncmlkX19yZXZlcnNlX19fMVg2ODIge1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogcmV2ZXJzZTtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzX19fMVJPSFIsXFxuLmZsZXhib3hncmlkX19jb2wteHMtMV9fX1Z0TklLLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLTJfX18zNm5EYSxcXG4uZmxleGJveGdyaWRfX2NvbC14cy0zX19fMmYyUWwsXFxuLmZsZXhib3hncmlkX19jb2wteHMtNF9fX1R4QkpnLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLTVfX18xSGtLNSxcXG4uZmxleGJveGdyaWRfX2NvbC14cy02X19fMURoVjYsXFxuLmZsZXhib3hncmlkX19jb2wteHMtN19fXzNvMm0tLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLThfX18zQVJHYyxcXG4uZmxleGJveGdyaWRfX2NvbC14cy05X19fMTVxZmwsXFxuLmZsZXhib3hncmlkX19jb2wteHMtMTBfX18yQVdOdixcXG4uZmxleGJveGdyaWRfX2NvbC14cy0xMV9fXzNILTZGLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLTEyX19fcGhidEUsXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTBfX18xMEM3RSxcXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtMV9fXzEyb19SLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC0yX19fMkhoLUIsXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTNfX184TkN5cyxcXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtNF9fX2RBMFAxLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC01X19fMk1iZEYsXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTZfX18zTjNidCxcXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtN19fXzF5UURHLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC04X19fMmFFY1csXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTlfX18yaGFCdixcXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtMTBfX18xUXNWZyxcXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtMTFfX18yOXhRbixcXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtMTJfX18xWFdGYiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgLW1zLWZsZXg6IDAgMCBhdXRvO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzX19fMVJPSFIge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XFxuICBmbGV4LWJhc2lzOiAwO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy0xX19fVnROSUsge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDguMzMzMzMzMzMlO1xcbiAgZmxleC1iYXNpczogOC4zMzMzMzMzMyU7XFxuICBtYXgtd2lkdGg6IDguMzMzMzMzMzMlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy0yX19fMzZuRGEge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDE2LjY2NjY2NjY3JTtcXG4gIGZsZXgtYmFzaXM6IDE2LjY2NjY2NjY3JTtcXG4gIG1heC13aWR0aDogMTYuNjY2NjY2NjclO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy0zX19fMmYyUWwge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDI1JTtcXG4gIGZsZXgtYmFzaXM6IDI1JTtcXG4gIG1heC13aWR0aDogMjUlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy00X19fVHhCSmcge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDMzLjMzMzMzMzMzJTtcXG4gIGZsZXgtYmFzaXM6IDMzLjMzMzMzMzMzJTtcXG4gIG1heC13aWR0aDogMzMuMzMzMzMzMzMlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy01X19fMUhrSzUge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDQxLjY2NjY2NjY3JTtcXG4gIGZsZXgtYmFzaXM6IDQxLjY2NjY2NjY3JTtcXG4gIG1heC13aWR0aDogNDEuNjY2NjY2NjclO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy02X19fMURoVjYge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDUwJTtcXG4gIGZsZXgtYmFzaXM6IDUwJTtcXG4gIG1heC13aWR0aDogNTAlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy03X19fM28ybS0ge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDU4LjMzMzMzMzMzJTtcXG4gIGZsZXgtYmFzaXM6IDU4LjMzMzMzMzMzJTtcXG4gIG1heC13aWR0aDogNTguMzMzMzMzMzMlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy04X19fM0FSR2Mge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDY2LjY2NjY2NjY3JTtcXG4gIGZsZXgtYmFzaXM6IDY2LjY2NjY2NjY3JTtcXG4gIG1heC13aWR0aDogNjYuNjY2NjY2NjclO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy05X19fMTVxZmwge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDc1JTtcXG4gIGZsZXgtYmFzaXM6IDc1JTtcXG4gIG1heC13aWR0aDogNzUlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy0xMF9fXzJBV052IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4My4zMzMzMzMzMyU7XFxuICBmbGV4LWJhc2lzOiA4My4zMzMzMzMzMyU7XFxuICBtYXgtd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtMTFfX18zSC02RiB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOTEuNjY2NjY2NjclO1xcbiAgZmxleC1iYXNpczogOTEuNjY2NjY2NjclO1xcbiAgbWF4LXdpZHRoOiA5MS42NjY2NjY2NyU7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLTEyX19fcGhidEUge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtMF9fXzEwQzdFIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtMV9fXzEyb19SIHtcXG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTJfX18ySGgtQiB7XFxuICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtM19fXzhOQ3lzIHtcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC00X19fZEEwUDEge1xcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTVfX18yTWJkRiB7XFxuICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtNl9fXzNOM2J0IHtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC03X19fMXlRREcge1xcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LThfX18yYUVjVyB7XFxuICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtOV9fXzJoYUJ2IHtcXG4gIG1hcmdpbi1sZWZ0OiA3NSU7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC0xMF9fXzFRc1ZnIHtcXG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC0xMV9fXzI5eFFuIHtcXG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fc3RhcnQteHNfX19oOHFkQSB7XFxuICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fY2VudGVyLXhzX19fMUpXb24ge1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fZW5kLXhzX19fMzNNa3Uge1xcbiAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLmZsZXhib3hncmlkX190b3AteHNfX19VaEEtViB7XFxuICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmZsZXhib3hncmlkX19taWRkbGUteHNfX18xaDV0MyB7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fYm90dG9tLXhzX19fMnRSVWEge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gIC1tcy1mbGV4LWFsaWduOiBlbmQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fYXJvdW5kLXhzX19fMW9ra0sge1xcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2JldHdlZW4teHNfX19XRlA4NCB7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZsZXhib3hncmlkX19maXJzdC14c19fX1hvb3NLIHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDA7XFxuICAtbXMtZmxleC1vcmRlcjogLTE7XFxuICBvcmRlcjogLTE7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fbGFzdC14c19fX0hubFJ3IHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDI7XFxuICAtbXMtZmxleC1vcmRlcjogMTtcXG4gIG9yZGVyOiAxO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gIC5mbGV4Ym94Z3JpZF9fY29udGFpbmVyX19fUjJ6VTkge1xcbiAgICB3aWR0aDogNDlyZW07XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbV9fXzN0Wi16LFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tMV9fXzJHY2E2LFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tMl9fX1lFVHphLFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tM19fXzJpclpRLFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tNF9fXzNrajdTLFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tNV9fX2dBeHVRLFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tNl9fX3ZVZEtILFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tN19fXzIySWNRLFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tOF9fXzJfWWhCLFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tOV9fXzJ1YnB4LFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tMTBfX18yNjJHOSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTExX19fMzlzN0osXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS0xMl9fXzFlNVVrLFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTBfX19sbFE2LSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC0xX19fMVBGV3UsXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtMl9fXzFEZ2JPLFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTNfX18zVzVJdixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC00X19fM1lUb0csXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtNV9fXzYwOVZvLFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTZfX19UQ2VWUSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC03X19fY3N2QnUsXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtOF9fXzExUFlILFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTlfX18yNEV2eSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC0xMF9fXzEtbGNFLFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTExX19fMnluRnEsXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtMTJfX18zTUJNaSB7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAtbXMtZmxleDogMCAwIGF1dG87XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc21fX18zdFoteiB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xcbiAgICBmbGV4LWJhc2lzOiAwO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS0xX19fMkdjYTYge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDguMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tMl9fX1lFVHphIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDE2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogMTYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTNfX18yaXJaUSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAyNSU7XFxuICAgIGZsZXgtYmFzaXM6IDI1JTtcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS00X19fM2tqN1Mge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMzMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiAzMy4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tNV9fX2dBeHVRIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDQxLjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNDEuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTZfX192VWRLSCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1MCU7XFxuICAgIGZsZXgtYmFzaXM6IDUwJTtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS03X19fMjJJY1Ege1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTguMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA1OC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tOF9fXzJfWWhCIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDY2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNjYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTlfX18ydWJweCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA3NSU7XFxuICAgIGZsZXgtYmFzaXM6IDc1JTtcXG4gICAgbWF4LXdpZHRoOiA3NSU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS0xMF9fXzI2Mkc5IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDgzLjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogODMuMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTExX19fMzlzN0oge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOTEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA5MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tMTJfX18xZTVVayB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtMF9fX2xsUTYtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtMV9fXzFQRld1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTJfX18xRGdiTyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtM19fXzNXNUl2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC00X19fM1lUb0cge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTVfX182MDlWbyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtNl9fX1RDZVZRIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC03X19fY3N2QnUge1xcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LThfX18xMVBZSCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtOV9fXzI0RXZ5IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC0xMF9fXzEtbGNFIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC0xMV9fXzJ5bkZxIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fc3RhcnQtc21fX18zRGlsdSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY2VudGVyLXNtX19fMzlIV3Ege1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fZW5kLXNtX19fM0IwN2Yge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX190b3Atc21fX18xYmVnUyB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fbWlkZGxlLXNtX19fT2g0Szcge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19ib3R0b20tc21fX18xalBuYyB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fYXJvdW5kLXNtX19fM2ZmYmIge1xcbiAgICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fYmV0d2Vlbi1zbV9fXzFSY2FmIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19maXJzdC1zbV9fXzJHemhiIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IC0xO1xcbiAgICBvcmRlcjogLTE7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2xhc3Qtc21fX18xcEY4dyB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDI7XFxuICAgIC1tcy1mbGV4LW9yZGVyOiAxO1xcbiAgICBvcmRlcjogMTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7XFxuICAuZmxleGJveGdyaWRfX2NvbnRhaW5lcl9fX1IyelU5IHtcXG4gICAgd2lkdGg6IDY1cmVtO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWRfX18ybGJ6bSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTFfX18xTGFwaixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTJfX18xY180dCxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTNfX18zQU5SUyxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTRfX19hX0Z5SyxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTVfX19ZWGxNcSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTZfX181T1N5SixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTdfX18xWnAtcixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLThfX18zOTc5SixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTlfX18yZlh1QyxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTEwX19fMkpiZWUsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC0xMV9fXzNkcmJLLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtMTJfX196UjJsSyxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC0wX19fMk8zdlIsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtMV9fXzJYTkN6LFxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTJfX18ydC1OVixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC0zX19fMXpsVFAsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtNF9fXzNhSHh6LFxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTVfX18zUzJHdyxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC02X19fM0tWMFYsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtN19fXzFPZENELFxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LThfX18ydkZiUSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC05X19fMXE5NXgsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtMTBfX18yQ2VNSyxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC0xMV9fXzN1NlhXLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTEyX19fZUtVbEwge1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgLW1zLWZsZXg6IDAgMCBhdXRvO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kX19fMmxiem0ge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcXG4gICAgZmxleC1iYXNpczogMDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtMV9fXzFMYXBqIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDguMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA4LjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTJfX18xY180dCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxNi42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDE2LjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC0zX19fM0FOUlMge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMjUlO1xcbiAgICBmbGV4LWJhc2lzOiAyNSU7XFxuICAgIG1heC13aWR0aDogMjUlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtNF9fX2FfRnlLIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDMzLjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogMzMuMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTVfX19ZWGxNcSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA0MS42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDQxLjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC02X19fNU9TeUoge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTAlO1xcbiAgICBmbGV4LWJhc2lzOiA1MCU7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtN19fXzFacC1yIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDU4LjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogNTguMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLThfX18zOTc5SiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA2Ni42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDY2LjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC05X19fMmZYdUMge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNzUlO1xcbiAgICBmbGV4LWJhc2lzOiA3NSU7XFxuICAgIG1heC13aWR0aDogNzUlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtMTBfX18ySmJlZSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4My4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDgzLjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC0xMV9fXzNkcmJLIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDkxLjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogOTEuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTEyX19felIybEsge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG4gICAgZmxleC1iYXNpczogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTBfX18yTzN2UiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTFfX18yWE5DeiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC0yX19fMnQtTlYge1xcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTNfX18xemxUUCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtNF9fXzNhSHh6IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC01X19fM1MyR3cge1xcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTZfX18zS1YwViB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtN19fXzFPZENEIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC04X19fMnZGYlEge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTlfX18xcTk1eCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtMTBfX18yQ2VNSyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtMTFfX18zdTZYVyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX3N0YXJ0LW1kX19fMkItc2cge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NlbnRlci1tZF9fXzNWRGZTIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2VuZC1tZF9fXzJmSld5IHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fdG9wLW1kX19fMTJGRGcge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX21pZGRsZS1tZF9fXzN3SUpSIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fYm90dG9tLW1kX19fMnYxY2Qge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xcbiAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2Fyb3VuZC1tZF9fXzF4NTRfIHtcXG4gICAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2JldHdlZW4tbWRfX19Ybi05eCB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fZmlyc3QtbWRfX18zajR0NSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDA7XFxuICAgIC1tcy1mbGV4LW9yZGVyOiAtMTtcXG4gICAgb3JkZXI6IC0xO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19sYXN0LW1kX19fM3k3MmUge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyO1xcbiAgICAtbXMtZmxleC1vcmRlcjogMTtcXG4gICAgb3JkZXI6IDE7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzVlbSkge1xcbiAgLmZsZXhib3hncmlkX19jb250YWluZXJfX19SMnpVOSB7XFxuICAgIHdpZHRoOiA3NnJlbTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnX19fM1NhWGQsXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy0xX19fMlZNaXYsXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy0yX19fMjFkS0ssXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy0zX19fdmJBQ3AsXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy00X19fMmh6eTgsXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy01X19fMS1nNy0sXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy02X19fMjFsZjgsXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy03X19fM2tCRzEsXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy04X19fYWZFQ3gsXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy05X19fMTBtZGwsXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy0xMF9fXzF5VGZqLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctMTFfX18zaE1SdSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLTEyX19fMXJsQUEsXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtMF9fXzNLTTN4LFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTFfX19LaHZxUixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC0yX19fMVpEX3osXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtM19fXzJHUVZhLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTRfX18xelBaaixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC01X19fS2o4SXEsXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtNl9fXzNudW4zLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTdfX19ZVG1uOSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC04X19fMXFHMnQsXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtOV9fX3FkMjdCLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTEwX19fMllTY1AsXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtMTFfX18zcFB2aixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC0xMl9fXzJySEVnIHtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZ19fXzNTYVhkIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLTFfX18yVk1pdiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4LjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogOC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy0yX19fMjFkS0sge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiAxNi42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogMTYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctM19fX3ZiQUNwIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDI1JTtcXG4gICAgZmxleC1iYXNpczogMjUlO1xcbiAgICBtYXgtd2lkdGg6IDI1JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLTRfX18yaHp5OCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAzMy4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDMzLjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy01X19fMS1nNy0ge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNDEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA0MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNDEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctNl9fXzIxbGY4IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDUwJTtcXG4gICAgZmxleC1iYXNpczogNTAlO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLTdfX18za0JHMSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1OC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDU4LjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy04X19fYWZFQ3gge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNjYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA2Ni42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNjYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctOV9fXzEwbWRsIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDc1JTtcXG4gICAgZmxleC1iYXNpczogNzUlO1xcbiAgICBtYXgtd2lkdGg6IDc1JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLTEwX19fMXlUZmoge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogODMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA4My4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctMTFfX18zaE1SdSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA5MS42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDkxLjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy0xMl9fXzFybEFBIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC0wX19fM0tNM3gge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC0xX19fS2h2cVIge1xcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtMl9fXzFaRF96IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC0zX19fMkdRVmEge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTRfX18xelBaaiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtNV9fX0tqOElxIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC02X19fM251bjMge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTdfX19ZVG1uOSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtOF9fXzFxRzJ0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC05X19fcWQyN0Ige1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTEwX19fMllTY1Age1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTExX19fM3BQdmoge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19zdGFydC1sZ19fX2FnZXU5IHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jZW50ZXItbGdfX18zSDNTSSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19lbmQtbGdfX18yN19mTSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX3RvcC1sZ19fXzF0V1d3IHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19taWRkbGUtbGdfX19ub2NHSSB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2JvdHRvbS1sZ19fX0lZR2tzIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19hcm91bmQtbGdfX196WkMyQyB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19iZXR3ZWVuLWxnX19fMm5qemsge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2ZpcnN0LWxnX19fNmRrc08ge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAwO1xcbiAgICAtbXMtZmxleC1vcmRlcjogLTE7XFxuICAgIG9yZGVyOiAtMTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fbGFzdC1sZ19fX3hHQnZTIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IDE7XFxuICAgIG9yZGVyOiAxO1xcbiAgfVxcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvbm9kZV9tb2R1bGVzL2ZsZXhib3hncmlkL2Rpc3QvZmxleGJveGdyaWQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLG1CQUFtQjtFQUNuQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLCtCQUErQjtVQUN2Qix1QkFBdUI7RUFDL0IscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLDhCQUE4QjtFQUM5Qix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7Q0FDdEI7O0FBRUQ7RUFDRSwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyw0QkFBNEI7Q0FDN0I7O0FBRUQ7RUFDRSw2QkFBNkI7RUFDN0IsK0JBQStCO0VBQy9CLG1DQUFtQztFQUNuQywrQkFBK0I7Q0FDaEM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMEJFLCtCQUErQjtVQUN2Qix1QkFBdUI7RUFDL0Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7Q0FDdEI7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLHFDQUFxQztFQUNyQyx3QkFBd0I7RUFDeEIsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0Usc0NBQXNDO0VBQ3RDLHlCQUF5QjtFQUN6Qix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxzQ0FBc0M7RUFDdEMseUJBQXlCO0VBQ3pCLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLHNDQUFzQztFQUN0Qyx5QkFBeUI7RUFDekIsd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixlQUFlO0NBQ2hCOztBQUVEO0VBQ0Usc0NBQXNDO0VBQ3RDLHlCQUF5QjtFQUN6Qix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxzQ0FBc0M7RUFDdEMseUJBQXlCO0VBQ3pCLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLHNDQUFzQztFQUN0Qyx5QkFBeUI7RUFDekIsd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0Usc0NBQXNDO0VBQ3RDLHlCQUF5QjtFQUN6Qix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSx5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsOEJBQThCO0NBQy9COztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QiwrQkFBK0I7Q0FDaEM7O0FBRUQ7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsU0FBUztDQUNWOztBQUVEO0VBQ0U7SUFDRSxhQUFhO0dBQ2Q7O0VBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEJFLCtCQUErQjtZQUN2Qix1QkFBdUI7SUFDL0Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHFCQUFxQjtHQUN0Qjs7RUFFRDtJQUNFLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsZ0JBQWdCO0dBQ2pCOztFQUVEO0lBQ0UscUNBQXFDO0lBQ3JDLHdCQUF3QjtJQUN4Qix1QkFBdUI7R0FDeEI7O0VBRUQ7SUFDRSxzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLHdCQUF3QjtHQUN6Qjs7RUFFRDtJQUNFLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLHNDQUFzQztJQUN0Qyx5QkFBeUI7SUFDekIsd0JBQXdCO0dBQ3pCOztFQUVEO0lBQ0Usc0NBQXNDO0lBQ3RDLHlCQUF5QjtJQUN6Qix3QkFBd0I7R0FDekI7O0VBRUQ7SUFDRSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGVBQWU7R0FDaEI7O0VBRUQ7SUFDRSxzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLHdCQUF3QjtHQUN6Qjs7RUFFRDtJQUNFLHNDQUFzQztJQUN0Qyx5QkFBeUI7SUFDekIsd0JBQXdCO0dBQ3pCOztFQUVEO0lBQ0UsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixlQUFlO0dBQ2hCOztFQUVEO0lBQ0Usc0NBQXNDO0lBQ3RDLHlCQUF5QjtJQUN6Qix3QkFBd0I7R0FDekI7O0VBRUQ7SUFDRSxzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLHdCQUF3QjtHQUN6Qjs7RUFFRDtJQUNFLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsZ0JBQWdCO0dBQ2pCOztFQUVEO0lBQ0UsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLHlCQUF5QjtHQUMxQjs7RUFFRDtJQUNFLDBCQUEwQjtHQUMzQjs7RUFFRDtJQUNFLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLDBCQUEwQjtHQUMzQjs7RUFFRDtJQUNFLDBCQUEwQjtHQUMzQjs7RUFFRDtJQUNFLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLDBCQUEwQjtHQUMzQjs7RUFFRDtJQUNFLDBCQUEwQjtHQUMzQjs7RUFFRDtJQUNFLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLDBCQUEwQjtHQUMzQjs7RUFFRDtJQUNFLDBCQUEwQjtHQUMzQjs7RUFFRDtJQUNFLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGtCQUFrQjtHQUNuQjs7RUFFRDtJQUNFLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsd0JBQXdCO0dBQ3pCOztFQUVEO0lBQ0UsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixvQkFBb0I7R0FDckI7O0VBRUQ7SUFDRSx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtHQUN2Qjs7RUFFRDtJQUNFLDBCQUEwQjtJQUMxQiw4QkFBOEI7R0FDL0I7O0VBRUQ7SUFDRSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLCtCQUErQjtHQUNoQzs7RUFFRDtJQUNFLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsVUFBVTtHQUNYOztFQUVEO0lBQ0UsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixTQUFTO0dBQ1Y7Q0FDRjs7QUFFRDtFQUNFO0lBQ0UsYUFBYTtHQUNkOztFQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTBCRSwrQkFBK0I7WUFDdkIsdUJBQXVCO0lBQy9CLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixxQkFBcUI7R0FDdEI7O0VBRUQ7SUFDRSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLHFDQUFxQztJQUNyQyx3QkFBd0I7SUFDeEIsdUJBQXVCO0dBQ3hCOztFQUVEO0lBQ0Usc0NBQXNDO0lBQ3RDLHlCQUF5QjtJQUN6Qix3QkFBd0I7R0FDekI7O0VBRUQ7SUFDRSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGVBQWU7R0FDaEI7O0VBRUQ7SUFDRSxzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLHdCQUF3QjtHQUN6Qjs7RUFFRDtJQUNFLHNDQUFzQztJQUN0Qyx5QkFBeUI7SUFDekIsd0JBQXdCO0dBQ3pCOztFQUVEO0lBQ0UsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixlQUFlO0dBQ2hCOztFQUVEO0lBQ0Usc0NBQXNDO0lBQ3RDLHlCQUF5QjtJQUN6Qix3QkFBd0I7R0FDekI7O0VBRUQ7SUFDRSxzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLHdCQUF3QjtHQUN6Qjs7RUFFRDtJQUNFLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLHNDQUFzQztJQUN0Qyx5QkFBeUI7SUFDekIsd0JBQXdCO0dBQ3pCOztFQUVEO0lBQ0Usc0NBQXNDO0lBQ3RDLHlCQUF5QjtJQUN6Qix3QkFBd0I7R0FDekI7O0VBRUQ7SUFDRSw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLGVBQWU7R0FDaEI7O0VBRUQ7SUFDRSx5QkFBeUI7R0FDMUI7O0VBRUQ7SUFDRSwwQkFBMEI7R0FDM0I7O0VBRUQ7SUFDRSxpQkFBaUI7R0FDbEI7O0VBRUQ7SUFDRSwwQkFBMEI7R0FDM0I7O0VBRUQ7SUFDRSwwQkFBMEI7R0FDM0I7O0VBRUQ7SUFDRSxpQkFBaUI7R0FDbEI7O0VBRUQ7SUFDRSwwQkFBMEI7R0FDM0I7O0VBRUQ7SUFDRSwwQkFBMEI7R0FDM0I7O0VBRUQ7SUFDRSxpQkFBaUI7R0FDbEI7O0VBRUQ7SUFDRSwwQkFBMEI7R0FDM0I7O0VBRUQ7SUFDRSwwQkFBMEI7R0FDM0I7O0VBRUQ7SUFDRSx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixrQkFBa0I7R0FDbkI7O0VBRUQ7SUFDRSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixnQkFBZ0I7R0FDakI7O0VBRUQ7SUFDRSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtHQUN6Qjs7RUFFRDtJQUNFLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsb0JBQW9CO0dBQ3JCOztFQUVEO0lBQ0UsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixzQkFBc0I7R0FDdkI7O0VBRUQ7SUFDRSwwQkFBMEI7SUFDMUIsOEJBQThCO0dBQy9COztFQUVEO0lBQ0UsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QiwrQkFBK0I7R0FDaEM7O0VBRUQ7SUFDRSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFVBQVU7R0FDWDs7RUFFRDtJQUNFLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsU0FBUztHQUNWO0NBQ0Y7O0FBRUQ7RUFDRTtJQUNFLGFBQWE7R0FDZDs7RUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQkUsK0JBQStCO1lBQ3ZCLHVCQUF1QjtJQUMvQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIscUJBQXFCO0dBQ3RCOztFQUVEO0lBQ0Usb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxnQkFBZ0I7R0FDakI7O0VBRUQ7SUFDRSxxQ0FBcUM7SUFDckMsd0JBQXdCO0lBQ3hCLHVCQUF1QjtHQUN4Qjs7RUFFRDtJQUNFLHNDQUFzQztJQUN0Qyx5QkFBeUI7SUFDekIsd0JBQXdCO0dBQ3pCOztFQUVEO0lBQ0UsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixlQUFlO0dBQ2hCOztFQUVEO0lBQ0Usc0NBQXNDO0lBQ3RDLHlCQUF5QjtJQUN6Qix3QkFBd0I7R0FDekI7O0VBRUQ7SUFDRSxzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLHdCQUF3QjtHQUN6Qjs7RUFFRDtJQUNFLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLHNDQUFzQztJQUN0Qyx5QkFBeUI7SUFDekIsd0JBQXdCO0dBQ3pCOztFQUVEO0lBQ0Usc0NBQXNDO0lBQ3RDLHlCQUF5QjtJQUN6Qix3QkFBd0I7R0FDekI7O0VBRUQ7SUFDRSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGVBQWU7R0FDaEI7O0VBRUQ7SUFDRSxzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLHdCQUF3QjtHQUN6Qjs7RUFFRDtJQUNFLHNDQUFzQztJQUN0Qyx5QkFBeUI7SUFDekIsd0JBQXdCO0dBQ3pCOztFQUVEO0lBQ0UsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixnQkFBZ0I7R0FDakI7O0VBRUQ7SUFDRSxlQUFlO0dBQ2hCOztFQUVEO0lBQ0UseUJBQXlCO0dBQzFCOztFQUVEO0lBQ0UsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0UsaUJBQWlCO0dBQ2xCOztFQUVEO0lBQ0UsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0UsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0UsaUJBQWlCO0dBQ2xCOztFQUVEO0lBQ0UsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0UsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0UsaUJBQWlCO0dBQ2xCOztFQUVEO0lBQ0UsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0UsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0Usd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0dBQ25COztFQUVEO0lBQ0UseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsbUJBQW1CO0dBQ3BCOztFQUVEO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0dBQ2pCOztFQUVEO0lBQ0UseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7R0FDekI7O0VBRUQ7SUFDRSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsc0JBQXNCO0dBQ3ZCOztFQUVEO0lBQ0UsMEJBQTBCO0lBQzFCLDhCQUE4QjtHQUMvQjs7RUFFRDtJQUNFLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsK0JBQStCO0dBQ2hDOztFQUVEO0lBQ0UsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixVQUFVO0dBQ1g7O0VBRUQ7SUFDRSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFNBQVM7R0FDVjtDQUNGXCIsXCJmaWxlXCI6XCJmbGV4Ym94Z3JpZC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lci1mbHVpZCxcXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyLWZsdWlkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gIHBhZGRpbmctbGVmdDogMzJweDtcXG4gIHBhZGRpbmctbGVmdDogMzJweDtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuXFxuLnJvdyB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAtbXMtZmxleDogMCAxIGF1dG87XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi1yaWdodDogLThweDtcXG4gIG1hcmdpbi1yaWdodDogLThweDtcXG4gIG1hcmdpbi1yaWdodDogLTAuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XFxuICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcXG59XFxuXFxuLnJvdy5yZXZlcnNlIHtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogcmV2ZXJzZTtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxufVxcblxcbi5jb2wucmV2ZXJzZSB7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiByZXZlcnNlO1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG59XFxuXFxuLmNvbC14cyxcXG4uY29sLXhzLTEsXFxuLmNvbC14cy0yLFxcbi5jb2wteHMtMyxcXG4uY29sLXhzLTQsXFxuLmNvbC14cy01LFxcbi5jb2wteHMtNixcXG4uY29sLXhzLTcsXFxuLmNvbC14cy04LFxcbi5jb2wteHMtOSxcXG4uY29sLXhzLTEwLFxcbi5jb2wteHMtMTEsXFxuLmNvbC14cy0xMixcXG4uY29sLXhzLW9mZnNldC0wLFxcbi5jb2wteHMtb2Zmc2V0LTEsXFxuLmNvbC14cy1vZmZzZXQtMixcXG4uY29sLXhzLW9mZnNldC0zLFxcbi5jb2wteHMtb2Zmc2V0LTQsXFxuLmNvbC14cy1vZmZzZXQtNSxcXG4uY29sLXhzLW9mZnNldC02LFxcbi5jb2wteHMtb2Zmc2V0LTcsXFxuLmNvbC14cy1vZmZzZXQtOCxcXG4uY29sLXhzLW9mZnNldC05LFxcbi5jb2wteHMtb2Zmc2V0LTEwLFxcbi5jb2wteHMtb2Zmc2V0LTExLFxcbi5jb2wteHMtb2Zmc2V0LTEyIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAtbXMtZmxleDogMCAwIGF1dG87XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLmNvbC14cyB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICBmbGV4LWdyb3c6IDE7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcXG4gIGZsZXgtYmFzaXM6IDA7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb2wteHMtMSB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOC4zMzMzMzMzMyU7XFxuICBmbGV4LWJhc2lzOiA4LjMzMzMzMzMzJTtcXG4gIG1heC13aWR0aDogOC4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wteHMtMiB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTYuNjY2NjY2NjclO1xcbiAgZmxleC1iYXNpczogMTYuNjY2NjY2NjclO1xcbiAgbWF4LXdpZHRoOiAxNi42NjY2NjY2NyU7XFxufVxcblxcbi5jb2wteHMtMyB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMjUlO1xcbiAgZmxleC1iYXNpczogMjUlO1xcbiAgbWF4LXdpZHRoOiAyNSU7XFxufVxcblxcbi5jb2wteHMtNCB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMzMuMzMzMzMzMzMlO1xcbiAgZmxleC1iYXNpczogMzMuMzMzMzMzMzMlO1xcbiAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wteHMtNSB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNDEuNjY2NjY2NjclO1xcbiAgZmxleC1iYXNpczogNDEuNjY2NjY2NjclO1xcbiAgbWF4LXdpZHRoOiA0MS42NjY2NjY2NyU7XFxufVxcblxcbi5jb2wteHMtNiB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTAlO1xcbiAgZmxleC1iYXNpczogNTAlO1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxufVxcblxcbi5jb2wteHMtNyB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTguMzMzMzMzMzMlO1xcbiAgZmxleC1iYXNpczogNTguMzMzMzMzMzMlO1xcbiAgbWF4LXdpZHRoOiA1OC4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wteHMtOCB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNjYuNjY2NjY2NjclO1xcbiAgZmxleC1iYXNpczogNjYuNjY2NjY2NjclO1xcbiAgbWF4LXdpZHRoOiA2Ni42NjY2NjY2NyU7XFxufVxcblxcbi5jb2wteHMtOSB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNzUlO1xcbiAgZmxleC1iYXNpczogNzUlO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxufVxcblxcbi5jb2wteHMtMTAge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDgzLjMzMzMzMzMzJTtcXG4gIGZsZXgtYmFzaXM6IDgzLjMzMzMzMzMzJTtcXG4gIG1heC13aWR0aDogODMuMzMzMzMzMzMlO1xcbn1cXG5cXG4uY29sLXhzLTExIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA5MS42NjY2NjY2NyU7XFxuICBmbGV4LWJhc2lzOiA5MS42NjY2NjY2NyU7XFxuICBtYXgtd2lkdGg6IDkxLjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC14cy0xMiB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTEge1xcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC0yIHtcXG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTMge1xcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtNCB7XFxuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC01IHtcXG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTYge1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtNyB7XFxuICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC04IHtcXG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTkge1xcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtMTAge1xcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtMTEge1xcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG59XFxuXFxuLnN0YXJ0LXhzIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLmNlbnRlci14cyB7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmVuZC14cyB7XFxuICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4udG9wLXhzIHtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubWlkZGxlLXhzIHtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvdHRvbS14cyB7XFxuICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xcbiAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLmFyb3VuZC14cyB7XFxuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5iZXR3ZWVuLXhzIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZmlyc3QteHMge1xcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcXG4gIC1tcy1mbGV4LW9yZGVyOiAtMTtcXG4gIG9yZGVyOiAtMTtcXG59XFxuXFxuLmxhc3QteHMge1xcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjtcXG4gIC1tcy1mbGV4LW9yZGVyOiAxO1xcbiAgb3JkZXI6IDE7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDhlbSkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA0OXJlbTtcXG4gIH1cXG5cXG4gIC5jb2wtc20sXFxuICAuY29sLXNtLTEsXFxuICAuY29sLXNtLTIsXFxuICAuY29sLXNtLTMsXFxuICAuY29sLXNtLTQsXFxuICAuY29sLXNtLTUsXFxuICAuY29sLXNtLTYsXFxuICAuY29sLXNtLTcsXFxuICAuY29sLXNtLTgsXFxuICAuY29sLXNtLTksXFxuICAuY29sLXNtLTEwLFxcbiAgLmNvbC1zbS0xMSxcXG4gIC5jb2wtc20tMTIsXFxuICAuY29sLXNtLW9mZnNldC0wLFxcbiAgLmNvbC1zbS1vZmZzZXQtMSxcXG4gIC5jb2wtc20tb2Zmc2V0LTIsXFxuICAuY29sLXNtLW9mZnNldC0zLFxcbiAgLmNvbC1zbS1vZmZzZXQtNCxcXG4gIC5jb2wtc20tb2Zmc2V0LTUsXFxuICAuY29sLXNtLW9mZnNldC02LFxcbiAgLmNvbC1zbS1vZmZzZXQtNyxcXG4gIC5jb2wtc20tb2Zmc2V0LTgsXFxuICAuY29sLXNtLW9mZnNldC05LFxcbiAgLmNvbC1zbS1vZmZzZXQtMTAsXFxuICAuY29sLXNtLW9mZnNldC0xMSxcXG4gIC5jb2wtc20tb2Zmc2V0LTEyIHtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICB9XFxuXFxuICAuY29sLXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tMSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4LjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogOC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLTIge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiAxNi42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogMTYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1zbS0zIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDI1JTtcXG4gICAgZmxleC1iYXNpczogMjUlO1xcbiAgICBtYXgtd2lkdGg6IDI1JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tNCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAzMy4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDMzLjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLTUge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNDEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA0MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNDEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1zbS02IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDUwJTtcXG4gICAgZmxleC1iYXNpczogNTAlO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tNyB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1OC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDU4LjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLTgge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNjYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA2Ni42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNjYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1zbS05IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDc1JTtcXG4gICAgZmxleC1iYXNpczogNzUlO1xcbiAgICBtYXgtd2lkdGg6IDc1JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tMTAge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogODMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA4My4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS0xMSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA5MS42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDkxLjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLXNtLTEyIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTAge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTEge1xcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTMge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTYge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtNyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTkge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtMTAge1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtMTEge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLnN0YXJ0LXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgfVxcblxcbiAgLmNlbnRlci1zbSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmVuZC1zbSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICB9XFxuXFxuICAudG9wLXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgLm1pZGRsZS1zbSB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYm90dG9tLXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLmFyb3VuZC1zbSB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcblxcbiAgLmJldHdlZW4tc20ge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAuZmlyc3Qtc20ge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAwO1xcbiAgICAtbXMtZmxleC1vcmRlcjogLTE7XFxuICAgIG9yZGVyOiAtMTtcXG4gIH1cXG5cXG4gIC5sYXN0LXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IDE7XFxuICAgIG9yZGVyOiAxO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogNjVyZW07XFxuICB9XFxuXFxuICAuY29sLW1kLFxcbiAgLmNvbC1tZC0xLFxcbiAgLmNvbC1tZC0yLFxcbiAgLmNvbC1tZC0zLFxcbiAgLmNvbC1tZC00LFxcbiAgLmNvbC1tZC01LFxcbiAgLmNvbC1tZC02LFxcbiAgLmNvbC1tZC03LFxcbiAgLmNvbC1tZC04LFxcbiAgLmNvbC1tZC05LFxcbiAgLmNvbC1tZC0xMCxcXG4gIC5jb2wtbWQtMTEsXFxuICAuY29sLW1kLTEyLFxcbiAgLmNvbC1tZC1vZmZzZXQtMCxcXG4gIC5jb2wtbWQtb2Zmc2V0LTEsXFxuICAuY29sLW1kLW9mZnNldC0yLFxcbiAgLmNvbC1tZC1vZmZzZXQtMyxcXG4gIC5jb2wtbWQtb2Zmc2V0LTQsXFxuICAuY29sLW1kLW9mZnNldC01LFxcbiAgLmNvbC1tZC1vZmZzZXQtNixcXG4gIC5jb2wtbWQtb2Zmc2V0LTcsXFxuICAuY29sLW1kLW9mZnNldC04LFxcbiAgLmNvbC1tZC1vZmZzZXQtOSxcXG4gIC5jb2wtbWQtb2Zmc2V0LTEwLFxcbiAgLmNvbC1tZC1vZmZzZXQtMTEsXFxuICAuY29sLW1kLW9mZnNldC0xMiB7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAtbXMtZmxleDogMCAwIGF1dG87XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgfVxcblxcbiAgLmNvbC1tZCB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xcbiAgICBmbGV4LWJhc2lzOiAwO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29sLW1kLTEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDguMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC0yIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDE2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogMTYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtMyB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAyNSU7XFxuICAgIGZsZXgtYmFzaXM6IDI1JTtcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxuICB9XFxuXFxuICAuY29sLW1kLTQge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMzMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiAzMy4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC01IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDQxLjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNDEuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtNiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1MCU7XFxuICAgIGZsZXgtYmFzaXM6IDUwJTtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuY29sLW1kLTcge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTguMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA1OC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC04IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDY2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNjYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtOSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA3NSU7XFxuICAgIGZsZXgtYmFzaXM6IDc1JTtcXG4gICAgbWF4LXdpZHRoOiA3NSU7XFxuICB9XFxuXFxuICAuY29sLW1kLTEwIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDgzLjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogODMuMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtMTEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOTEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA5MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1tZC0xMiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC0wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC0xIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTQge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC02IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTcge1xcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC05IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTEwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTExIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5zdGFydC1tZCB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIH1cXG5cXG4gIC5jZW50ZXItbWQge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5lbmQtbWQge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgfVxcblxcbiAgLnRvcC1tZCB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gIC5taWRkbGUtbWQge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmJvdHRvbS1tZCB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC5hcm91bmQtbWQge1xcbiAgICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG5cXG4gIC5iZXR3ZWVuLW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLmZpcnN0LW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IC0xO1xcbiAgICBvcmRlcjogLTE7XFxuICB9XFxuXFxuICAubGFzdC1tZCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDI7XFxuICAgIC1tcy1mbGV4LW9yZGVyOiAxO1xcbiAgICBvcmRlcjogMTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NWVtKSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDc2cmVtO1xcbiAgfVxcblxcbiAgLmNvbC1sZyxcXG4gIC5jb2wtbGctMSxcXG4gIC5jb2wtbGctMixcXG4gIC5jb2wtbGctMyxcXG4gIC5jb2wtbGctNCxcXG4gIC5jb2wtbGctNSxcXG4gIC5jb2wtbGctNixcXG4gIC5jb2wtbGctNyxcXG4gIC5jb2wtbGctOCxcXG4gIC5jb2wtbGctOSxcXG4gIC5jb2wtbGctMTAsXFxuICAuY29sLWxnLTExLFxcbiAgLmNvbC1sZy0xMixcXG4gIC5jb2wtbGctb2Zmc2V0LTAsXFxuICAuY29sLWxnLW9mZnNldC0xLFxcbiAgLmNvbC1sZy1vZmZzZXQtMixcXG4gIC5jb2wtbGctb2Zmc2V0LTMsXFxuICAuY29sLWxnLW9mZnNldC00LFxcbiAgLmNvbC1sZy1vZmZzZXQtNSxcXG4gIC5jb2wtbGctb2Zmc2V0LTYsXFxuICAuY29sLWxnLW9mZnNldC03LFxcbiAgLmNvbC1sZy1vZmZzZXQtOCxcXG4gIC5jb2wtbGctb2Zmc2V0LTksXFxuICAuY29sLWxnLW9mZnNldC0xMCxcXG4gIC5jb2wtbGctb2Zmc2V0LTExLFxcbiAgLmNvbC1sZy1vZmZzZXQtMTIge1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgLW1zLWZsZXg6IDAgMCBhdXRvO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIH1cXG5cXG4gIC5jb2wtbGcge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcXG4gICAgZmxleC1iYXNpczogMDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0xIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDguMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA4LjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxNi42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDE2LjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTMge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMjUlO1xcbiAgICBmbGV4LWJhc2lzOiAyNSU7XFxuICAgIG1heC13aWR0aDogMjUlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy00IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDMzLjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogMzMuMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctNSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA0MS42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDQxLjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTYge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTAlO1xcbiAgICBmbGV4LWJhc2lzOiA1MCU7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy03IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDU4LjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogNTguMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctOCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA2Ni42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDY2LjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTkge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNzUlO1xcbiAgICBmbGV4LWJhc2lzOiA3NSU7XFxuICAgIG1heC13aWR0aDogNzUlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0xMCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4My4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDgzLjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTExIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDkxLjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogOTEuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMTIge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG4gICAgZmxleC1iYXNpczogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTIge1xcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC00IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTUge1xcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtNiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC03IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTgge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtOSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC0xMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuc3RhcnQtbGcge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICB9XFxuXFxuICAuY2VudGVyLWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZW5kLWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gIH1cXG5cXG4gIC50b3AtbGcge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuXFxuICAubWlkZGxlLWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ib3R0b20tbGcge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xcbiAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICB9XFxuXFxuICAuYXJvdW5kLWxnIHtcXG4gICAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxuXFxuICAuYmV0d2Vlbi1sZyB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5maXJzdC1sZyB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDA7XFxuICAgIC1tcy1mbGV4LW9yZGVyOiAtMTtcXG4gICAgb3JkZXI6IC0xO1xcbiAgfVxcblxcbiAgLmxhc3QtbGcge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyO1xcbiAgICAtbXMtZmxleC1vcmRlcjogMTtcXG4gICAgb3JkZXI6IDE7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb250YWluZXItZmx1aWRcIjogXCJmbGV4Ym94Z3JpZF9fY29udGFpbmVyLWZsdWlkX19fMmxVRVNcIixcblx0XCJjb250YWluZXJcIjogXCJmbGV4Ym94Z3JpZF9fY29udGFpbmVyX19fUjJ6VTlcIixcblx0XCJyb3dcIjogXCJmbGV4Ym94Z3JpZF9fcm93X19fMXlfbWdcIixcblx0XCJyZXZlcnNlXCI6IFwiZmxleGJveGdyaWRfX3JldmVyc2VfX18xWDY4MlwiLFxuXHRcImNvbFwiOiBcImZsZXhib3hncmlkX19jb2xfX18zUnFQUFwiLFxuXHRcImNvbC14c1wiOiBcImZsZXhib3hncmlkX19jb2wteHNfX18xUk9IUlwiLFxuXHRcImNvbC14cy0xXCI6IFwiZmxleGJveGdyaWRfX2NvbC14cy0xX19fVnROSUtcIixcblx0XCJjb2wteHMtMlwiOiBcImZsZXhib3hncmlkX19jb2wteHMtMl9fXzM2bkRhXCIsXG5cdFwiY29sLXhzLTNcIjogXCJmbGV4Ym94Z3JpZF9fY29sLXhzLTNfX18yZjJRbFwiLFxuXHRcImNvbC14cy00XCI6IFwiZmxleGJveGdyaWRfX2NvbC14cy00X19fVHhCSmdcIixcblx0XCJjb2wteHMtNVwiOiBcImZsZXhib3hncmlkX19jb2wteHMtNV9fXzFIa0s1XCIsXG5cdFwiY29sLXhzLTZcIjogXCJmbGV4Ym94Z3JpZF9fY29sLXhzLTZfX18xRGhWNlwiLFxuXHRcImNvbC14cy03XCI6IFwiZmxleGJveGdyaWRfX2NvbC14cy03X19fM28ybS1cIixcblx0XCJjb2wteHMtOFwiOiBcImZsZXhib3hncmlkX19jb2wteHMtOF9fXzNBUkdjXCIsXG5cdFwiY29sLXhzLTlcIjogXCJmbGV4Ym94Z3JpZF9fY29sLXhzLTlfX18xNXFmbFwiLFxuXHRcImNvbC14cy0xMFwiOiBcImZsZXhib3hncmlkX19jb2wteHMtMTBfX18yQVdOdlwiLFxuXHRcImNvbC14cy0xMVwiOiBcImZsZXhib3hncmlkX19jb2wteHMtMTFfX18zSC02RlwiLFxuXHRcImNvbC14cy0xMlwiOiBcImZsZXhib3hncmlkX19jb2wteHMtMTJfX19waGJ0RVwiLFxuXHRcImNvbC14cy1vZmZzZXQtMFwiOiBcImZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTBfX18xMEM3RVwiLFxuXHRcImNvbC14cy1vZmZzZXQtMVwiOiBcImZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTFfX18xMm9fUlwiLFxuXHRcImNvbC14cy1vZmZzZXQtMlwiOiBcImZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTJfX18ySGgtQlwiLFxuXHRcImNvbC14cy1vZmZzZXQtM1wiOiBcImZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTNfX184TkN5c1wiLFxuXHRcImNvbC14cy1vZmZzZXQtNFwiOiBcImZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTRfX19kQTBQMVwiLFxuXHRcImNvbC14cy1vZmZzZXQtNVwiOiBcImZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTVfX18yTWJkRlwiLFxuXHRcImNvbC14cy1vZmZzZXQtNlwiOiBcImZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTZfX18zTjNidFwiLFxuXHRcImNvbC14cy1vZmZzZXQtN1wiOiBcImZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTdfX18xeVFER1wiLFxuXHRcImNvbC14cy1vZmZzZXQtOFwiOiBcImZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LThfX18yYUVjV1wiLFxuXHRcImNvbC14cy1vZmZzZXQtOVwiOiBcImZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTlfX18yaGFCdlwiLFxuXHRcImNvbC14cy1vZmZzZXQtMTBcIjogXCJmbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC0xMF9fXzFRc1ZnXCIsXG5cdFwiY29sLXhzLW9mZnNldC0xMVwiOiBcImZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTExX19fMjl4UW5cIixcblx0XCJjb2wteHMtb2Zmc2V0LTEyXCI6IFwiZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtMTJfX18xWFdGYlwiLFxuXHRcInN0YXJ0LXhzXCI6IFwiZmxleGJveGdyaWRfX3N0YXJ0LXhzX19faDhxZEFcIixcblx0XCJjZW50ZXIteHNcIjogXCJmbGV4Ym94Z3JpZF9fY2VudGVyLXhzX19fMUpXb25cIixcblx0XCJlbmQteHNcIjogXCJmbGV4Ym94Z3JpZF9fZW5kLXhzX19fMzNNa3VcIixcblx0XCJ0b3AteHNcIjogXCJmbGV4Ym94Z3JpZF9fdG9wLXhzX19fVWhBLVZcIixcblx0XCJtaWRkbGUteHNcIjogXCJmbGV4Ym94Z3JpZF9fbWlkZGxlLXhzX19fMWg1dDNcIixcblx0XCJib3R0b20teHNcIjogXCJmbGV4Ym94Z3JpZF9fYm90dG9tLXhzX19fMnRSVWFcIixcblx0XCJhcm91bmQteHNcIjogXCJmbGV4Ym94Z3JpZF9fYXJvdW5kLXhzX19fMW9ra0tcIixcblx0XCJiZXR3ZWVuLXhzXCI6IFwiZmxleGJveGdyaWRfX2JldHdlZW4teHNfX19XRlA4NFwiLFxuXHRcImZpcnN0LXhzXCI6IFwiZmxleGJveGdyaWRfX2ZpcnN0LXhzX19fWG9vc0tcIixcblx0XCJsYXN0LXhzXCI6IFwiZmxleGJveGdyaWRfX2xhc3QteHNfX19IbmxSd1wiLFxuXHRcImNvbC1zbVwiOiBcImZsZXhib3hncmlkX19jb2wtc21fX18zdFotelwiLFxuXHRcImNvbC1zbS0xXCI6IFwiZmxleGJveGdyaWRfX2NvbC1zbS0xX19fMkdjYTZcIixcblx0XCJjb2wtc20tMlwiOiBcImZsZXhib3hncmlkX19jb2wtc20tMl9fX1lFVHphXCIsXG5cdFwiY29sLXNtLTNcIjogXCJmbGV4Ym94Z3JpZF9fY29sLXNtLTNfX18yaXJaUVwiLFxuXHRcImNvbC1zbS00XCI6IFwiZmxleGJveGdyaWRfX2NvbC1zbS00X19fM2tqN1NcIixcblx0XCJjb2wtc20tNVwiOiBcImZsZXhib3hncmlkX19jb2wtc20tNV9fX2dBeHVRXCIsXG5cdFwiY29sLXNtLTZcIjogXCJmbGV4Ym94Z3JpZF9fY29sLXNtLTZfX192VWRLSFwiLFxuXHRcImNvbC1zbS03XCI6IFwiZmxleGJveGdyaWRfX2NvbC1zbS03X19fMjJJY1FcIixcblx0XCJjb2wtc20tOFwiOiBcImZsZXhib3hncmlkX19jb2wtc20tOF9fXzJfWWhCXCIsXG5cdFwiY29sLXNtLTlcIjogXCJmbGV4Ym94Z3JpZF9fY29sLXNtLTlfX18ydWJweFwiLFxuXHRcImNvbC1zbS0xMFwiOiBcImZsZXhib3hncmlkX19jb2wtc20tMTBfX18yNjJHOVwiLFxuXHRcImNvbC1zbS0xMVwiOiBcImZsZXhib3hncmlkX19jb2wtc20tMTFfX18zOXM3SlwiLFxuXHRcImNvbC1zbS0xMlwiOiBcImZsZXhib3hncmlkX19jb2wtc20tMTJfX18xZTVVa1wiLFxuXHRcImNvbC1zbS1vZmZzZXQtMFwiOiBcImZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTBfX19sbFE2LVwiLFxuXHRcImNvbC1zbS1vZmZzZXQtMVwiOiBcImZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTFfX18xUEZXdVwiLFxuXHRcImNvbC1zbS1vZmZzZXQtMlwiOiBcImZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTJfX18xRGdiT1wiLFxuXHRcImNvbC1zbS1vZmZzZXQtM1wiOiBcImZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTNfX18zVzVJdlwiLFxuXHRcImNvbC1zbS1vZmZzZXQtNFwiOiBcImZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTRfX18zWVRvR1wiLFxuXHRcImNvbC1zbS1vZmZzZXQtNVwiOiBcImZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTVfX182MDlWb1wiLFxuXHRcImNvbC1zbS1vZmZzZXQtNlwiOiBcImZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTZfX19UQ2VWUVwiLFxuXHRcImNvbC1zbS1vZmZzZXQtN1wiOiBcImZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTdfX19jc3ZCdVwiLFxuXHRcImNvbC1zbS1vZmZzZXQtOFwiOiBcImZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LThfX18xMVBZSFwiLFxuXHRcImNvbC1zbS1vZmZzZXQtOVwiOiBcImZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTlfX18yNEV2eVwiLFxuXHRcImNvbC1zbS1vZmZzZXQtMTBcIjogXCJmbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC0xMF9fXzEtbGNFXCIsXG5cdFwiY29sLXNtLW9mZnNldC0xMVwiOiBcImZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTExX19fMnluRnFcIixcblx0XCJjb2wtc20tb2Zmc2V0LTEyXCI6IFwiZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtMTJfX18zTUJNaVwiLFxuXHRcInN0YXJ0LXNtXCI6IFwiZmxleGJveGdyaWRfX3N0YXJ0LXNtX19fM0RpbHVcIixcblx0XCJjZW50ZXItc21cIjogXCJmbGV4Ym94Z3JpZF9fY2VudGVyLXNtX19fMzlIV3FcIixcblx0XCJlbmQtc21cIjogXCJmbGV4Ym94Z3JpZF9fZW5kLXNtX19fM0IwN2ZcIixcblx0XCJ0b3Atc21cIjogXCJmbGV4Ym94Z3JpZF9fdG9wLXNtX19fMWJlZ1NcIixcblx0XCJtaWRkbGUtc21cIjogXCJmbGV4Ym94Z3JpZF9fbWlkZGxlLXNtX19fT2g0SzdcIixcblx0XCJib3R0b20tc21cIjogXCJmbGV4Ym94Z3JpZF9fYm90dG9tLXNtX19fMWpQbmNcIixcblx0XCJhcm91bmQtc21cIjogXCJmbGV4Ym94Z3JpZF9fYXJvdW5kLXNtX19fM2ZmYmJcIixcblx0XCJiZXR3ZWVuLXNtXCI6IFwiZmxleGJveGdyaWRfX2JldHdlZW4tc21fX18xUmNhZlwiLFxuXHRcImZpcnN0LXNtXCI6IFwiZmxleGJveGdyaWRfX2ZpcnN0LXNtX19fMkd6aGJcIixcblx0XCJsYXN0LXNtXCI6IFwiZmxleGJveGdyaWRfX2xhc3Qtc21fX18xcEY4d1wiLFxuXHRcImNvbC1tZFwiOiBcImZsZXhib3hncmlkX19jb2wtbWRfX18ybGJ6bVwiLFxuXHRcImNvbC1tZC0xXCI6IFwiZmxleGJveGdyaWRfX2NvbC1tZC0xX19fMUxhcGpcIixcblx0XCJjb2wtbWQtMlwiOiBcImZsZXhib3hncmlkX19jb2wtbWQtMl9fXzFjXzR0XCIsXG5cdFwiY29sLW1kLTNcIjogXCJmbGV4Ym94Z3JpZF9fY29sLW1kLTNfX18zQU5SU1wiLFxuXHRcImNvbC1tZC00XCI6IFwiZmxleGJveGdyaWRfX2NvbC1tZC00X19fYV9GeUtcIixcblx0XCJjb2wtbWQtNVwiOiBcImZsZXhib3hncmlkX19jb2wtbWQtNV9fX1lYbE1xXCIsXG5cdFwiY29sLW1kLTZcIjogXCJmbGV4Ym94Z3JpZF9fY29sLW1kLTZfX181T1N5SlwiLFxuXHRcImNvbC1tZC03XCI6IFwiZmxleGJveGdyaWRfX2NvbC1tZC03X19fMVpwLXJcIixcblx0XCJjb2wtbWQtOFwiOiBcImZsZXhib3hncmlkX19jb2wtbWQtOF9fXzM5NzlKXCIsXG5cdFwiY29sLW1kLTlcIjogXCJmbGV4Ym94Z3JpZF9fY29sLW1kLTlfX18yZlh1Q1wiLFxuXHRcImNvbC1tZC0xMFwiOiBcImZsZXhib3hncmlkX19jb2wtbWQtMTBfX18ySmJlZVwiLFxuXHRcImNvbC1tZC0xMVwiOiBcImZsZXhib3hncmlkX19jb2wtbWQtMTFfX18zZHJiS1wiLFxuXHRcImNvbC1tZC0xMlwiOiBcImZsZXhib3hncmlkX19jb2wtbWQtMTJfX196UjJsS1wiLFxuXHRcImNvbC1tZC1vZmZzZXQtMFwiOiBcImZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTBfX18yTzN2UlwiLFxuXHRcImNvbC1tZC1vZmZzZXQtMVwiOiBcImZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTFfX18yWE5DelwiLFxuXHRcImNvbC1tZC1vZmZzZXQtMlwiOiBcImZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTJfX18ydC1OVlwiLFxuXHRcImNvbC1tZC1vZmZzZXQtM1wiOiBcImZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTNfX18xemxUUFwiLFxuXHRcImNvbC1tZC1vZmZzZXQtNFwiOiBcImZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTRfX18zYUh4elwiLFxuXHRcImNvbC1tZC1vZmZzZXQtNVwiOiBcImZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTVfX18zUzJHd1wiLFxuXHRcImNvbC1tZC1vZmZzZXQtNlwiOiBcImZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTZfX18zS1YwVlwiLFxuXHRcImNvbC1tZC1vZmZzZXQtN1wiOiBcImZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTdfX18xT2RDRFwiLFxuXHRcImNvbC1tZC1vZmZzZXQtOFwiOiBcImZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LThfX18ydkZiUVwiLFxuXHRcImNvbC1tZC1vZmZzZXQtOVwiOiBcImZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTlfX18xcTk1eFwiLFxuXHRcImNvbC1tZC1vZmZzZXQtMTBcIjogXCJmbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC0xMF9fXzJDZU1LXCIsXG5cdFwiY29sLW1kLW9mZnNldC0xMVwiOiBcImZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTExX19fM3U2WFdcIixcblx0XCJjb2wtbWQtb2Zmc2V0LTEyXCI6IFwiZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtMTJfX19lS1VsTFwiLFxuXHRcInN0YXJ0LW1kXCI6IFwiZmxleGJveGdyaWRfX3N0YXJ0LW1kX19fMkItc2dcIixcblx0XCJjZW50ZXItbWRcIjogXCJmbGV4Ym94Z3JpZF9fY2VudGVyLW1kX19fM1ZEZlNcIixcblx0XCJlbmQtbWRcIjogXCJmbGV4Ym94Z3JpZF9fZW5kLW1kX19fMmZKV3lcIixcblx0XCJ0b3AtbWRcIjogXCJmbGV4Ym94Z3JpZF9fdG9wLW1kX19fMTJGRGdcIixcblx0XCJtaWRkbGUtbWRcIjogXCJmbGV4Ym94Z3JpZF9fbWlkZGxlLW1kX19fM3dJSlJcIixcblx0XCJib3R0b20tbWRcIjogXCJmbGV4Ym94Z3JpZF9fYm90dG9tLW1kX19fMnYxY2RcIixcblx0XCJhcm91bmQtbWRcIjogXCJmbGV4Ym94Z3JpZF9fYXJvdW5kLW1kX19fMXg1NF9cIixcblx0XCJiZXR3ZWVuLW1kXCI6IFwiZmxleGJveGdyaWRfX2JldHdlZW4tbWRfX19Ybi05eFwiLFxuXHRcImZpcnN0LW1kXCI6IFwiZmxleGJveGdyaWRfX2ZpcnN0LW1kX19fM2o0dDVcIixcblx0XCJsYXN0LW1kXCI6IFwiZmxleGJveGdyaWRfX2xhc3QtbWRfX18zeTcyZVwiLFxuXHRcImNvbC1sZ1wiOiBcImZsZXhib3hncmlkX19jb2wtbGdfX18zU2FYZFwiLFxuXHRcImNvbC1sZy0xXCI6IFwiZmxleGJveGdyaWRfX2NvbC1sZy0xX19fMlZNaXZcIixcblx0XCJjb2wtbGctMlwiOiBcImZsZXhib3hncmlkX19jb2wtbGctMl9fXzIxZEtLXCIsXG5cdFwiY29sLWxnLTNcIjogXCJmbGV4Ym94Z3JpZF9fY29sLWxnLTNfX192YkFDcFwiLFxuXHRcImNvbC1sZy00XCI6IFwiZmxleGJveGdyaWRfX2NvbC1sZy00X19fMmh6eThcIixcblx0XCJjb2wtbGctNVwiOiBcImZsZXhib3hncmlkX19jb2wtbGctNV9fXzEtZzctXCIsXG5cdFwiY29sLWxnLTZcIjogXCJmbGV4Ym94Z3JpZF9fY29sLWxnLTZfX18yMWxmOFwiLFxuXHRcImNvbC1sZy03XCI6IFwiZmxleGJveGdyaWRfX2NvbC1sZy03X19fM2tCRzFcIixcblx0XCJjb2wtbGctOFwiOiBcImZsZXhib3hncmlkX19jb2wtbGctOF9fX2FmRUN4XCIsXG5cdFwiY29sLWxnLTlcIjogXCJmbGV4Ym94Z3JpZF9fY29sLWxnLTlfX18xMG1kbFwiLFxuXHRcImNvbC1sZy0xMFwiOiBcImZsZXhib3hncmlkX19jb2wtbGctMTBfX18xeVRmalwiLFxuXHRcImNvbC1sZy0xMVwiOiBcImZsZXhib3hncmlkX19jb2wtbGctMTFfX18zaE1SdVwiLFxuXHRcImNvbC1sZy0xMlwiOiBcImZsZXhib3hncmlkX19jb2wtbGctMTJfX18xcmxBQVwiLFxuXHRcImNvbC1sZy1vZmZzZXQtMFwiOiBcImZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTBfX18zS00zeFwiLFxuXHRcImNvbC1sZy1vZmZzZXQtMVwiOiBcImZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTFfX19LaHZxUlwiLFxuXHRcImNvbC1sZy1vZmZzZXQtMlwiOiBcImZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTJfX18xWkRfelwiLFxuXHRcImNvbC1sZy1vZmZzZXQtM1wiOiBcImZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTNfX18yR1FWYVwiLFxuXHRcImNvbC1sZy1vZmZzZXQtNFwiOiBcImZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTRfX18xelBaalwiLFxuXHRcImNvbC1sZy1vZmZzZXQtNVwiOiBcImZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTVfX19LajhJcVwiLFxuXHRcImNvbC1sZy1vZmZzZXQtNlwiOiBcImZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTZfX18zbnVuM1wiLFxuXHRcImNvbC1sZy1vZmZzZXQtN1wiOiBcImZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTdfX19ZVG1uOVwiLFxuXHRcImNvbC1sZy1vZmZzZXQtOFwiOiBcImZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LThfX18xcUcydFwiLFxuXHRcImNvbC1sZy1vZmZzZXQtOVwiOiBcImZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTlfX19xZDI3QlwiLFxuXHRcImNvbC1sZy1vZmZzZXQtMTBcIjogXCJmbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC0xMF9fXzJZU2NQXCIsXG5cdFwiY29sLWxnLW9mZnNldC0xMVwiOiBcImZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTExX19fM3BQdmpcIixcblx0XCJjb2wtbGctb2Zmc2V0LTEyXCI6IFwiZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtMTJfX18yckhFZ1wiLFxuXHRcInN0YXJ0LWxnXCI6IFwiZmxleGJveGdyaWRfX3N0YXJ0LWxnX19fYWdldTlcIixcblx0XCJjZW50ZXItbGdcIjogXCJmbGV4Ym94Z3JpZF9fY2VudGVyLWxnX19fM0gzU0lcIixcblx0XCJlbmQtbGdcIjogXCJmbGV4Ym94Z3JpZF9fZW5kLWxnX19fMjdfZk1cIixcblx0XCJ0b3AtbGdcIjogXCJmbGV4Ym94Z3JpZF9fdG9wLWxnX19fMXRXV3dcIixcblx0XCJtaWRkbGUtbGdcIjogXCJmbGV4Ym94Z3JpZF9fbWlkZGxlLWxnX19fbm9jR0lcIixcblx0XCJib3R0b20tbGdcIjogXCJmbGV4Ym94Z3JpZF9fYm90dG9tLWxnX19fSVlHa3NcIixcblx0XCJhcm91bmQtbGdcIjogXCJmbGV4Ym94Z3JpZF9fYXJvdW5kLWxnX19felpDMkNcIixcblx0XCJiZXR3ZWVuLWxnXCI6IFwiZmxleGJveGdyaWRfX2JldHdlZW4tbGdfX18ybmp6a1wiLFxuXHRcImZpcnN0LWxnXCI6IFwiZmxleGJveGdyaWRfX2ZpcnN0LWxnX19fNmRrc09cIixcblx0XCJsYXN0LWxnXCI6IFwiZmxleGJveGdyaWRfX2xhc3QtbGdfX194R0J2U1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL25vZGVfbW9kdWxlcy9mbGV4Ym94Z3JpZC9kaXN0L2ZsZXhib3hncmlkLmNzc1xuLy8gbW9kdWxlIGlkID0gNzk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIGludmFyaWFudChcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJXNgIHByb3Agb24gYCVzYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLicsXG4gICAgICAgICAgICAgIHByb3BGdWxsTmFtZSxcbiAgICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICVzIGF0IGluZGV4ICVzLicsXG4gICAgICAgICAgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpLFxuICAgICAgICAgIGlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZmxleGJveC1ncmlkL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSA3OTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuICB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ3RoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAlc2AuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pO1xuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICB3YXJuaW5nKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yLCAnJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgd2FybmluZyhmYWxzZSwgJ0ZhaWxlZCAlcyB0eXBlOiAlcyVzJywgbG9jYXRpb24sIGVycm9yLm1lc3NhZ2UsIHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZmxleGJveC1ncmlkL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3OThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldENvbHVtblByb3BzID0gZ2V0Q29sdW1uUHJvcHM7XG5leHBvcnRzLmRlZmF1bHQgPSBDb2w7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfY3JlYXRlUHJvcHMgPSByZXF1aXJlKCcuLi9jcmVhdGVQcm9wcycpO1xuXG52YXIgX2NyZWF0ZVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVByb3BzKTtcblxudmFyIF9jbGFzc05hbWVzID0gcmVxdWlyZSgnLi4vY2xhc3NOYW1lcycpO1xuXG52YXIgX2NsYXNzTmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NOYW1lcyk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKCcuLi90eXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIHhzOiBfdHlwZXMuQ29sdW1uU2l6ZVR5cGUsXG4gIHNtOiBfdHlwZXMuQ29sdW1uU2l6ZVR5cGUsXG4gIG1kOiBfdHlwZXMuQ29sdW1uU2l6ZVR5cGUsXG4gIGxnOiBfdHlwZXMuQ29sdW1uU2l6ZVR5cGUsXG4gIHhzT2Zmc2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc21PZmZzZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBtZE9mZnNldDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGxnT2Zmc2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgZmlyc3Q6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBsYXN0OiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGFnTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5cbnZhciBjbGFzc01hcCA9IHtcbiAgeHM6ICdjb2wteHMnLFxuICBzbTogJ2NvbC1zbScsXG4gIG1kOiAnY29sLW1kJyxcbiAgbGc6ICdjb2wtbGcnLFxuICB4c09mZnNldDogJ2NvbC14cy1vZmZzZXQnLFxuICBzbU9mZnNldDogJ2NvbC1zbS1vZmZzZXQnLFxuICBtZE9mZnNldDogJ2NvbC1tZC1vZmZzZXQnLFxuICBsZ09mZnNldDogJ2NvbC1sZy1vZmZzZXQnXG59O1xuXG5mdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsdWUpICYmIE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sQ2xhc3NOYW1lcyhwcm9wcykge1xuICB2YXIgZXh0cmFDbGFzc2VzID0gW107XG5cbiAgaWYgKHByb3BzLmNsYXNzTmFtZSkge1xuICAgIGV4dHJhQ2xhc3Nlcy5wdXNoKHByb3BzLmNsYXNzTmFtZSk7XG4gIH1cblxuICBpZiAocHJvcHMuZmlyc3QpIHtcbiAgICBleHRyYUNsYXNzZXMucHVzaCgoMCwgX2NsYXNzTmFtZXMyLmRlZmF1bHQpKCdmaXJzdC0nICsgcHJvcHMuZmlyc3QpKTtcbiAgfVxuXG4gIGlmIChwcm9wcy5sYXN0KSB7XG4gICAgZXh0cmFDbGFzc2VzLnB1c2goKDAsIF9jbGFzc05hbWVzMi5kZWZhdWx0KSgnbGFzdC0nICsgcHJvcHMubGFzdCkpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBjbGFzc01hcFtrZXldO1xuICB9KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAoMCwgX2NsYXNzTmFtZXMyLmRlZmF1bHQpKGlzSW50ZWdlcihwcm9wc1trZXldKSA/IGNsYXNzTWFwW2tleV0gKyAnLScgKyBwcm9wc1trZXldIDogY2xhc3NNYXBba2V5XSk7XG4gIH0pLmNvbmNhdChleHRyYUNsYXNzZXMpO1xufVxuXG5mdW5jdGlvbiBnZXRDb2x1bW5Qcm9wcyhwcm9wcykge1xuICByZXR1cm4gKDAsIF9jcmVhdGVQcm9wczIuZGVmYXVsdCkocHJvcFR5cGVzLCBwcm9wcywgZ2V0Q29sQ2xhc3NOYW1lcyhwcm9wcykpO1xufVxuXG5mdW5jdGlvbiBDb2wocHJvcHMpIHtcbiAgdmFyIHRhZ05hbWUgPSBwcm9wcy50YWdOYW1lLFxuICAgICAgY29sdW1uUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsndGFnTmFtZSddKTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSB8fCAnZGl2JywgZ2V0Q29sdW1uUHJvcHMoY29sdW1uUHJvcHMpKTtcbn1cblxuQ29sLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2NvbXBvbmVudHMvQ29sLmpzXG4vLyBtb2R1bGUgaWQgPSA3OTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBHcmlkO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2NyZWF0ZVByb3BzID0gcmVxdWlyZSgnLi4vY3JlYXRlUHJvcHMnKTtcblxudmFyIF9jcmVhdGVQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVQcm9wcyk7XG5cbnZhciBfY2xhc3NOYW1lcyA9IHJlcXVpcmUoJy4uL2NsYXNzTmFtZXMnKTtcblxudmFyIF9jbGFzc05hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzTmFtZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICBmbHVpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0YWdOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZVxufTtcblxuZnVuY3Rpb24gR3JpZChwcm9wcykge1xuICB2YXIgY29udGFpbmVyQ2xhc3MgPSAoMCwgX2NsYXNzTmFtZXMyLmRlZmF1bHQpKHByb3BzLmZsdWlkID8gJ2NvbnRhaW5lci1mbHVpZCcgOiAnY29udGFpbmVyJyk7XG4gIHZhciBjbGFzc05hbWVzID0gW3Byb3BzLmNsYXNzTmFtZSwgY29udGFpbmVyQ2xhc3NdO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChwcm9wcy50YWdOYW1lIHx8ICdkaXYnLCAoMCwgX2NyZWF0ZVByb3BzMi5kZWZhdWx0KShwcm9wVHlwZXMsIHByb3BzLCBjbGFzc05hbWVzKSk7XG59XG5cbkdyaWQucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvY29tcG9uZW50cy9HcmlkLmpzXG4vLyBtb2R1bGUgaWQgPSA4MDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmdyaWRfX2NvbnRhaW5lcl9fXzFxZFJKIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAgMTE3MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgcGFkZGluZy1yaWdodDogMzJweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcXG4gIC5ncmlkX19jb250YWluZXJfX18xcWRSSiB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIH1cXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL2dyaWQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsb0JBQW9CO0dBQ3JCO0NBQ0ZcIixcImZpbGVcIjpcImdyaWQuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6ICAxMTcwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xcbiAgcGFkZGluZy1yaWdodDogMzJweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImdyaWRfX2NvbnRhaW5lcl9fXzFxZFJKXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvZ3JpZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDgwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgQXNzaWRlIGZyb20gJ2NvbXBvbmVudHMvQXNzaWRlL0Fzc2lkZSc7XG5pbXBvcnQgTWVudVBhbmVsIGZyb20gJ2NvbXBvbmVudHMvTWVudVBhbmVsL01lbnVQYW5lbCc7XG5cbi8vIGV4dGVybmFsLWdsb2JhbCBzdHlsZXMgbXVzdCBiZSBpbXBvcnRlZCBpbiB5b3VyIEpTLlxuaW1wb3J0IG5vcm1hbGl6ZUNzcyBmcm9tICdub3JtYWxpemUuY3NzJztcbmltcG9ydCBncmlkQ3NzIGZyb20gJ3JlYWN0LWZsZXhib3gtZ3JpZC9kaXN0L3JlYWN0LWZsZXhib3gtZ3JpZC5jc3MnO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ3JlYWN0LWZsZXhib3gtZ3JpZCc7XG5pbXBvcnQgZ3JpZCBmcm9tICdjb21wb25lbnRzL2dyaWQuY3NzJztcbmltcG9ydCBzIGZyb20gJy4vTGF5b3V0LmNzcyc7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgaXNTaG93OiBmYWxzZSxcbiAgICBhY3RpdmVBY2NvcmRlb25JbmRleDogMCxcbiAgfTtcblxuICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNTaG93OiAhdGhpcy5zdGF0ZS5pc1Nob3cgfSk7XG4gIGhhbmRsZUFjY29yZGVvblRvZ2dsZSA9IGluZGV4ID0+XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVBY2NvcmRlb25JbmRleDpcbiAgICAgICAgaW5kZXggPT09IHRoaXMuc3RhdGUuYWN0aXZlQWNjb3JkZW9uSW5kZXggPyBudWxsIDogaW5kZXgsXG4gICAgfSk7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICAgIDxBc3NpZGVcbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICBidXJnZXI9e3tcbiAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlVG9nZ2xlLFxuICAgICAgICAgICAgc2hvdzogdGhpcy5zdGF0ZS5pc1Nob3csXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxNZW51UGFuZWxcbiAgICAgICAgICBoYW5kbGVUb2dnbGU9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgICAgIGlzU2hvdz17dGhpcy5zdGF0ZS5pc1Nob3d9XG4gICAgICAgICAgYWN0aXZlQWNjb3JkZW9uSW5kZXg9e3RoaXMuc3RhdGUuYWN0aXZlQWNjb3JkZW9uSW5kZXh9XG4gICAgICAgICAgaGFuZGxlQWNjb3JkZW9uVG9nZ2xlPXt0aGlzLmhhbmRsZUFjY29yZGVvblRvZ2dsZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhncmlkQ3NzLCBub3JtYWxpemVDc3MsIHMsIGdyaWQpKExheW91dCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0Fzc2lkZS5jc3MnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24nO1xuXG5jb25zdCBBc3NpZGUgPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgIDx1bCBjbGFzc05hbWU9e3MuY2F0ZWdvcmllc30+XG4gICAgICA8TmF2aWdhdGlvbiBcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoQXNzaWRlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9Bc3NpZGUvQXNzaWRlLmpzIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9Bc3NpZGUuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL0Fzc2lkZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9Bc3NpZGUuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvQXNzaWRlL0Fzc2lkZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDgwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuQXNzaWRlX19yb290X19fT01HdXMge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMi4xcmVtIHJnYmEoMjE4LCAyMTgsIDIxOCwgLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMi4xcmVtIHJnYmEoMjE4LCAyMTgsIDIxOCwgLjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcXG4gIC5Bc3NpZGVfX3Jvb3RfX19PTUd1cyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICAgIHBhZGRpbmc6IDEzcHggMjBweCAxM3B4IDIwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLkFzc2lkZV9fcm9vdF9fX09NR3VzIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBwYWRkaW5nOiAxMDBweCAwcHggNDJweCAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRvcDogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgfVxcbn1cXG4uQXNzaWRlX19pY29uX19fclRfTWYge1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweFxcbn1cXG4uQXNzaWRlX19pY29uX19fclRfTWY6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uQXNzaWRlX19oZWFkZXJfX18yeXMtZyB7XFxuICBtYXJnaW4tYm90dG9tOiAxNDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDE0NHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOXJlbTtcXG59XFxuLkFzc2lkZV9fY2F0ZWdvcmllc19fXzJwT3hKIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL0Fzc2lkZS9Bc3NpZGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdURBQXVEO1VBQy9DLCtDQUErQztFQUN2RCxxQ0FBcUM7Q0FDdEM7QUFDRDtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxhQUFhO0lBQ2IsU0FBUztJQUNULFFBQVE7SUFDUixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDZCQUE2QjtHQUM5QjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsUUFBUTtJQUNSLFVBQVU7SUFDVixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0dBQ2I7Q0FDRjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7Q0FDWFwiLFwiZmlsZVwiOlwiQXNzaWRlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAyLjFyZW0gcmdiYSgyMTgsIDIxOCwgMjE4LCAuNSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyLjFyZW0gcmdiYSgyMTgsIDIxOCwgMjE4LCAuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLnJvb3Qge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgICBwYWRkaW5nOiAxM3B4IDIwcHggMTNweCAyMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5yb290IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBwYWRkaW5nOiAxMDBweCAwcHggNDJweCAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRvcDogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgfVxcbn1cXG4uaWNvbiB7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4XFxufVxcbi5pY29uOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAxNDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDE0NHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOXJlbTtcXG59XFxuLmNhdGVnb3JpZXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkFzc2lkZV9fcm9vdF9fX09NR3VzXCIsXG5cdFwiaWNvblwiOiBcIkFzc2lkZV9faWNvbl9fX3JUX01mXCIsXG5cdFwiaGVhZGVyXCI6IFwiQXNzaWRlX19oZWFkZXJfX18yeXMtZ1wiLFxuXHRcImNhdGVnb3JpZXNcIjogXCJBc3NpZGVfX2NhdGVnb3JpZXNfX18ycE94SlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL0Fzc2lkZS9Bc3NpZGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA4MDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vTmF2aWdhdGlvbi5jc3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluayc7XG5pbXBvcnQgQnVyZ2VyIGZyb20gJ2NvbXBvbmVudHMvQnVyZ2VyL0J1cmdlcic7XG5pbXBvcnQgSG9tZUljb24gZnJvbSAnLSFiYWJlbC1sb2FkZXIhc3ZnLXJlYWN0LWxvYWRlciEuL2ljb25zL2hvbWUuc3ZnP25hbWU9SG9tZUljb24nO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnLSFiYWJlbC1sb2FkZXIhc3ZnLXJlYWN0LWxvYWRlciEuL2ljb25zL3NlYXJjaC5zdmc/bmFtZT1TZWFyY2hJY29uJztcbmltcG9ydCBCYXNrZXRJY29uIGZyb20gJy0hYmFiZWwtbG9hZGVyIXN2Zy1yZWFjdC1sb2FkZXIhLi9pY29ucy9iYXNrZXQuc3ZnP25hbWU9QmFza2V0SWNvbic7XG5cbmNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NuYW1lczoge1xuICAgICAgcm9vdDogJycsXG4gICAgfSxcbiAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgfTtcblxuICBpc0FjdGl2ZVBhdGggPSBwYXRoID0+IHRoaXMuY29udGV4dC5sb2NhdGlvbi5wYXRoID09PSBwYXRoO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICBbcy5yb290XTogdHJ1ZSxcbiAgICAgICAgICBbcy5ob3Jpem9uYXRhbF06IHRoaXMucHJvcHMuaG9yaXpvbmF0YWwsXG4gICAgICAgICAgW3RoaXMucHJvcHMuY2xhc3NuYW1lcy5yb290XTogdHJ1ZSxcbiAgICAgICAgfSl9XG4gICAgICAgIHJvbGU9XCJuYXZpZ2F0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3MubGlua30gJHt0aGlzLmlzQWN0aXZlUGF0aCgnL2hvbWUnKVxuICAgICAgICAgICAgPyBzLmFjdGl2ZUxpbmtcbiAgICAgICAgICAgIDogJyd9YH1cbiAgICAgICAgICB0bz1cIi9ob21lXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxIb21lSWNvbiBjbGFzc05hbWU9e3MuaWNvbn0gLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cy5saW5rfSAke3RoaXMuaXNBY3RpdmVQYXRoKCcvYmFza2V0JylcbiAgICAgICAgICAgID8gcy5hY3RpdmVMaW5rXG4gICAgICAgICAgICA6ICcnfWB9XG4gICAgICAgICAgdG89XCIvYmFza2V0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxCYXNrZXRJY29uIGNsYXNzTmFtZT17cy5pY29ufSAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzLmxpbmt9ICR7dGhpcy5pc0FjdGl2ZVBhdGgoJy9zZWFyY2gnKVxuICAgICAgICAgICAgPyBzLmFjdGl2ZUxpbmtcbiAgICAgICAgICAgIDogJyd9YH1cbiAgICAgICAgICB0bz1cIi9zZWFyY2hcIlxuICAgICAgICA+XG4gICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPXtzLmljb259IC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYnVyZ2VyfT5cbiAgICAgICAgICA8QnVyZ2VyIGlzU3RhdGljIHsuLi50aGlzLnByb3BzLmJ1cmdlcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoTmF2aWdhdGlvbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9OYXZpZ2F0aW9uLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9OYXZpZ2F0aW9uLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL05hdmlnYXRpb24uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmNzc1xuLy8gbW9kdWxlIGlkID0gODA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcXG4gIC5OYXZpZ2F0aW9uX19yb290X19fMmdjSngge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLk5hdmlnYXRpb25fX3Jvb3RfX18yZ2NKeCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1heC13aWR0aDogMTAwcHg7XFxuICB9XFxufVxcbi5OYXZpZ2F0aW9uX19saW5rX19fTnRsMzU6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uTmF2aWdhdGlvbl9fbGlua19fX050bDM1OmhvdmVyIHBhdGgsIC5OYXZpZ2F0aW9uX19saW5rX19fTnRsMzU6YWN0aXZlIHBhdGgge1xcbiAgICAgIGZpbGw6IHJnYigxOCwgMzAsIDE3NCk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLk5hdmlnYXRpb25fX2xpbmtfX19OdGwzNSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzN3B4O1xcbiAgfVxcbiAgLk5hdmlnYXRpb25fX2xpbmtfX19OdGwzNTpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5OYXZpZ2F0aW9uX19saW5rX19fTnRsMzUge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB9XFxuICAuTmF2aWdhdGlvbl9fbGlua19fX050bDM1Omxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgfVxcbn1cXG4uTmF2aWdhdGlvbl9fYWN0aXZlTGlua19fXzNmRncwIHBhdGgge1xcbiAgICBmaWxsOiByZ2IoMjMsIDQwLCAyNTApO1xcbiAgfVxcbi5OYXZpZ2F0aW9uX19pY29uX19fMk0xZ017XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLk5hdmlnYXRpb25fX2ljb25fX18yTTFnTSB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICB9XFxufVxcbi5OYXZpZ2F0aW9uX19idXJnZXJfX18xNkozLSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuTmF2aWdhdGlvbl9fYnVyZ2VyX19fMTZKMy0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HO0FBQ0g7Ozs7Ozs7R0FPRztBQUNIO0VBQ0U7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RSxFQUFFLGdDQUFnQyxFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixDQUFDLGlDQUFpQztDQUMvTTtBQUNEO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCwwQkFBMEI7UUFDdEIsdUJBQXVCO1lBQ25CLG9CQUFvQjtJQUM1QixpQkFBaUI7R0FDbEI7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7R0FDbEI7Q0FDRjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7TUFDTSx1QkFBdUI7Q0FDNUI7QUFDRDtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLG1CQUFtQjtHQUNwQjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0NBQ0Y7QUFDRDtFQUNFO0lBQ0Usb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7Q0FDRjtBQUNEO0lBQ0ksdUJBQXVCO0dBQ3hCO0FBQ0g7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWE7R0FDZDtDQUNGO0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFO0lBQ0UsY0FBYztHQUNmO0NBQ0ZcIixcImZpbGVcIjpcIk5hdmlnYXRpb24uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcXG4gIC5yb290IHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5yb290IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcXG4gIH1cXG59XFxuLmxpbms6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ubGluazpob3ZlciBwYXRoLCAubGluazphY3RpdmUgcGF0aCB7XFxuICAgICAgZmlsbDogcmdiKDE4LCAzMCwgMTc0KTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAubGluayB7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzN3B4O1xcbiAgfVxcbiAgLmxpbms6bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAubGluayB7XFxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gIH1cXG4gIC5saW5rOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgfVxcbn1cXG4uYWN0aXZlTGluayBwYXRoIHtcXG4gICAgZmlsbDogcmdiKDIzLCA0MCwgMjUwKTtcXG4gIH1cXG4uaWNvbntcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAuaWNvbiB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICB9XFxufVxcbi5idXJnZXIge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiTmF2aWdhdGlvbl9fcm9vdF9fXzJnY0p4XCIsXG5cdFwibGlua1wiOiBcIk5hdmlnYXRpb25fX2xpbmtfX19OdGwzNVwiLFxuXHRcImFjdGl2ZUxpbmtcIjogXCJOYXZpZ2F0aW9uX19hY3RpdmVMaW5rX19fM2ZGdzBcIixcblx0XCJpY29uXCI6IFwiTmF2aWdhdGlvbl9faWNvbl9fXzJNMWdNXCIsXG5cdFwiYnVyZ2VyXCI6IFwiTmF2aWdhdGlvbl9fYnVyZ2VyX19fMTZKMy1cIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzXG4vLyBtb2R1bGUgaWQgPSA4MDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBCdXJnZXJDbG9zZSAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHByb3BzLFtSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImZpbGxcIjpcIiMwMDIzZmZcIixcImRcIjpcIk0yLjc4LjY2bDE1LjU2IDE1LjU2YTEuNSAxLjUgMCAxIDEtMi4xMiAyLjEyTC42NiAyLjc4QTEuNSAxLjUgMCAxIDEgMi43OC42NnpcIixcImtleVwiOjB9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImZpbGxcIjpcIiMwMDIzZmZcIixcImRcIjpcIk0xOC41NSAyLjYybC0xNS45IDE1LjlhMS41MyAxLjUzIDAgMSAxLTIuMTctMi4xN0wxNi4zOC40NWExLjUzIDEuNTMgMCAxIDEgMi4xNyAyLjE3elwiLFwia2V5XCI6MX0pXSk7XG59XG5cbkJ1cmdlckNsb3NlLmRpc3BsYXlOYW1lID0gXCJCdXJnZXJDbG9zZVwiO1xuXG5CdXJnZXJDbG9zZS5kZWZhdWx0UHJvcHMgPSB7XCJ3aWR0aFwiOlwiMTlcIixcImhlaWdodFwiOlwiMTlcIixcInZpZXdCb3hcIjpcIjAgMCAxOSAxOVwiLFwiaWRcIjpcImJ1cmdlclwifTtcblxubW9kdWxlLmV4cG9ydHMgPSBCdXJnZXJDbG9zZTtcblxuQnVyZ2VyQ2xvc2UuZGVmYXVsdCA9IEJ1cmdlckNsb3NlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0J1cmdlci9pY29ucy9idXJnZXItY2xvc2Uuc3ZnP25hbWU9QnVyZ2VyQ2xvc2UiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBCdXJnZXJTaG93IChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIscHJvcHMsW1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkZWZzXCIse1wia2V5XCI6MH0sW1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiaWRcIjpcImFcIixcImRcIjpcIk0xIDBoMTZjLjU1IDAgMSAuNjcgMSAxLjVTMTcuNTUgMyAxNyAzSDFjLS41NSAwLTEtLjY3LTEtMS41Uy40NSAwIDEgMHpcIixcImtleVwiOjB9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImlkXCI6XCJiXCIsXCJkXCI6XCJNMSA2aDE2Yy41NSAwIDEgLjY3IDEgMS41UzE3LjU1IDkgMTcgOUgxYy0uNTUgMC0xLS42Ny0xLTEuNVMuNDUgNiAxIDZ6XCIsXCJrZXlcIjoxfSksUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7XCJpZFwiOlwiY1wiLFwiZFwiOlwiTTEgMTJoMTZjLjU1IDAgMSAuNjcgMSAxLjVzLS40NSAxLjUtMSAxLjVIMWMtLjU1IDAtMS0uNjctMS0xLjVTLjQ1IDEyIDEgMTJ6XCIsXCJrZXlcIjoyfSldKSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGVzY1wiLHtcImtleVwiOjF9LFwiR2VuZXJhdGVkIHdpdGggQXZvY29kZS5cIiksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjoyfSxSZWFjdC5jcmVhdGVFbGVtZW50KFwidXNlXCIse1wiZmlsbFwiOlwiIzAwMjNmZlwiLFwieGxpbmtIcmVmXCI6XCIjYVwifSkpLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIse1wia2V5XCI6M30sUmVhY3QuY3JlYXRlRWxlbWVudChcInVzZVwiLHtcImZpbGxcIjpcIiMwMDIzZmZcIixcInhsaW5rSHJlZlwiOlwiI2JcIn0pKSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjR9LFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1c2VcIix7XCJmaWxsXCI6XCIjMDAyM2ZmXCIsXCJ4bGlua0hyZWZcIjpcIiNjXCJ9KSldKTtcbn1cblxuQnVyZ2VyU2hvdy5kaXNwbGF5TmFtZSA9IFwiQnVyZ2VyU2hvd1wiO1xuXG5CdXJnZXJTaG93LmRlZmF1bHRQcm9wcyA9IHtcIndpZHRoXCI6XCIxOFwiLFwiaGVpZ2h0XCI6XCIxNVwiLFwidmlld0JveFwiOlwiMCAwIDE4IDE1XCJ9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1cmdlclNob3c7XG5cbkJ1cmdlclNob3cuZGVmYXVsdCA9IEJ1cmdlclNob3c7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvQnVyZ2VyL2ljb25zL2J1cmdlci1zaG93LnN2Zz9uYW1lPUJ1cmdlclNob3ciLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL0J1cmdlci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vQnVyZ2VyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL0J1cmdlci5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9CdXJnZXIvQnVyZ2VyLmNzc1xuLy8gbW9kdWxlIGlkID0gODExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLkJ1cmdlcl9fcm9vdF9fXzJKSFNhIHtcXG4gIHdpZHRoOiA4My4ycHg7XFxuICB3aWR0aDogODMuMnB4O1xcbiAgd2lkdGg6IDUuMnJlbTtcXG4gIGhlaWdodDogODMuMnB4O1xcbiAgaGVpZ2h0OiA4My4ycHg7XFxuICBoZWlnaHQ6IDUuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMi4xcmVtIHJnYmEoMjE4LCAyMTgsIDIxOCwgLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMi4xcmVtIHJnYmEoMjE4LCAyMTgsIDIxOCwgLjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgY3Vyc29yOiBwb2ludGVyXFxufVxcblxcbi5CdXJnZXJfX3Jvb3RfX18ySkhTYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDMwLCAxNzQpO1xcbn1cXG5cXG4uQnVyZ2VyX19yb290X19fMkpIU2E6aG92ZXIgc3ZnIHtcXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uQnVyZ2VyX19yb290X19fMkpIU2E6aG92ZXIgcGF0aCwuQnVyZ2VyX19yb290X19fMkpIU2E6aG92ZXIgZywuQnVyZ2VyX19yb290X19fMkpIU2E6aG92ZXIgdXNlIHtcXG4gICAgIGZpbGw6ICNmZmY7XFxufVxcblxcbi5CdXJnZXJfX3Jvb3RfX18ySkhTYTpiZWZvcmUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDA7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5CdXJnZXJfX2ljb25fX19ITGpZZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogMTlweDtcXG4gIGhlaWdodDogMTlweDtcXG59XFxuXFxuLkJ1cmdlcl9fYnVyZ2VyQ2xvc2VJY29uX19fSUVKR1Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5CdXJnZXJfX2J1cmdlcl9fX2J4RWxDe31cXG5cXG4uQnVyZ2VyX19zdGF0aWNfX180Y3JuSSB7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL2NvbXBvbmVudHMvQnVyZ2VyL0J1cmdlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSDtFQUNFOztnRkFFOEU7O0VBRTlFOztnRkFFOEU7O0VBRTlFOztnRkFFOEUsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsQ0FBQyxpQ0FBaUM7Q0FDL007O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdURBQXVEO1VBQy9DLCtDQUErQztFQUN2RCxxQ0FBcUM7RUFDckMsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLG1DQUFtQztDQUNwQzs7QUFFRDtLQUNLLDhCQUE4QjtDQUNsQzs7QUFFRDtLQUNLLFdBQVc7Q0FDZjs7QUFFRDtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osYUFBYTtDQUNkOztBQUVEO0VBQ0UsOEJBQThCO0NBQy9COztBQUVELHlCQUFTOztBQUVUO0VBQ0UsaUJBQWlCO0NBQ2xCXCIsXCJmaWxlXCI6XCJCdXJnZXIuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLnJvb3Qge1xcbiAgd2lkdGg6IDgzLjJweDtcXG4gIHdpZHRoOiA4My4ycHg7XFxuICB3aWR0aDogNS4ycmVtO1xcbiAgaGVpZ2h0OiA4My4ycHg7XFxuICBoZWlnaHQ6IDgzLjJweDtcXG4gIGhlaWdodDogNS4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAyLjFyZW0gcmdiYSgyMTgsIDIxOCwgMjE4LCAuNSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyLjFyZW0gcmdiYSgyMTgsIDIxOCwgMjE4LCAuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBjdXJzb3I6IHBvaW50ZXJcXG59XFxuXFxuLnJvb3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAzMCwgMTc0KTtcXG59XFxuXFxuLnJvb3Q6aG92ZXIgc3ZnIHtcXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucm9vdDpob3ZlciBwYXRoLC5yb290OmhvdmVyIGcsLnJvb3Q6aG92ZXIgdXNlIHtcXG4gICAgIGZpbGw6ICNmZmY7XFxufVxcblxcbi5yb290OmJlZm9yZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDE5cHg7XFxuICBoZWlnaHQ6IDE5cHg7XFxufVxcblxcbi5idXJnZXJDbG9zZUljb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5idXJnZXJ7fVxcblxcbi5zdGF0aWMge1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJCdXJnZXJfX3Jvb3RfX18ySkhTYVwiLFxuXHRcImljb25cIjogXCJCdXJnZXJfX2ljb25fX19ITGpZZFwiLFxuXHRcImJ1cmdlckNsb3NlSWNvblwiOiBcIkJ1cmdlcl9fYnVyZ2VyQ2xvc2VJY29uX19fSUVKR1RcIixcblx0XCJidXJnZXJcIjogXCJCdXJnZXJfX2J1cmdlcl9fX2J4RWxDXCIsXG5cdFwic3RhdGljXCI6IFwiQnVyZ2VyX19zdGF0aWNfX180Y3JuSVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL0J1cmdlci9CdXJnZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSA4MTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBIb21lSWNvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHByb3BzLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZmlsbFwiOlwiI2Q3ZDdkN1wiLFwiZFwiOlwiTTE0LjU1IDguNzN2OS4yaC0zLjAyVjEzLjdjMC0uNjctLjU0LTEuMi0xLjItMS4ySDYuN2MtLjY2IDAtMS4yLjUzLTEuMiAxLjJ2NC4yMkgyLjQ5di05LjJsNi4wMy02LjAyek05LjA1LjY4QS43NS43NSAwIDAgMCA4IC42OEwxLjA0IDcuNjNhMS4yIDEuMiAwIDAgMC0uMzUuODV2MTAuMDVjMCAuNjYuNTQgMS4yIDEuMiAxLjJoNC4yMmMuNjcgMCAxLjItLjUzIDEuMi0xLjJ2LTQuMjJoMi40MnY0LjIyYzAgLjY2LjU0IDEuMiAxLjIgMS4yaDQuMjJjLjY2IDAgMS4yLS41MyAxLjItMS4yVjguNDhjMC0uMzItLjEyLS42Mi0uMzUtLjg1elwifSkpO1xufVxuXG5Ib21lSWNvbi5kaXNwbGF5TmFtZSA9IFwiSG9tZUljb25cIjtcblxuSG9tZUljb24uZGVmYXVsdFByb3BzID0ge1wid2lkdGhcIjpcIjE3XCIsXCJoZWlnaHRcIjpcIjIwXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMTcgMjBcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gSG9tZUljb247XG5cbkhvbWVJY29uLmRlZmF1bHQgPSBIb21lSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL2ljb25zL2hvbWUuc3ZnP25hbWU9SG9tZUljb24iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBTZWFyY2hJY29uIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIscHJvcHMsUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7XCJmaWxsXCI6XCIjZDdkN2Q3XCIsXCJkXCI6XCJNMTIuOTMuMjVhNy4yMyA3LjIzIDAgMCAwLTUuNyAxMS42NkwxLjEzIDE4YS45LjkgMCAwIDAgMCAxLjI4LjkuOSAwIDAgMCAxLjI4IDBsNi4wOC02LjA4QTcuMjMgNy4yMyAwIDEgMCAxMi45My4yNXptMCAxMi42NmE1LjQzIDUuNDMgMCAxIDEgLjAxLTEwLjg2IDUuNDMgNS40MyAwIDAgMSAwIDEwLjg2elwifSkpO1xufVxuXG5TZWFyY2hJY29uLmRpc3BsYXlOYW1lID0gXCJTZWFyY2hJY29uXCI7XG5cblNlYXJjaEljb24uZGVmYXVsdFByb3BzID0ge1wid2lkdGhcIjpcIjIxXCIsXCJoZWlnaHRcIjpcIjIwXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjEgMjBcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2VhcmNoSWNvbjtcblxuU2VhcmNoSWNvbi5kZWZhdWx0ID0gU2VhcmNoSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL2ljb25zL3NlYXJjaC5zdmc/bmFtZT1TZWFyY2hJY29uIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gQmFza2V0SWNvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHByb3BzLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZmlsbFwiOlwiI2Q3ZDdkN1wiLFwiZFwiOlwiTTIwLjU2IDUuNzhoLTMuMDdhLjkzLjkzIDAgMCAwLS4wOC0uMThMMTQuNC43OGEuOS45IDAgMCAwLTEuNTQuOTVsMi41MyA0LjA1SDcuNjVsMi41My00LjA1QS45LjkgMCAwIDAgOS40LjM1YS45LjkgMCAwIDAtLjc3LjQzbC0zIDQuODJhLjkzLjkzIDAgMCAwLS4wOS4xOEgyLjQ4Yy0xIDAtMS44LjgtMS44IDEuOHYxLjJjMCAuODYuNiAxLjU4IDEuMzkgMS43N2wyLjMgNy43OWMuMjEuNzUuOSAxLjMgMS43MyAxLjNoMTAuODRjLjgzIDAgMS41Mi0uNTUgMS43NC0xLjNsMi4zLTcuOGMuOC0uMTggMS4zOS0uOSAxLjM5LTEuNzV2LTEuMmMwLTEtLjgxLTEuODEtMS44MS0xLjgxek0yLjQ4IDcuNThoMTguMDh2MS4ySDIuNDh6bTE0LjQ2IDEwLjI1SDYuMUwzLjk3IDEwLjZoMTUuMXpcIn0pKTtcbn1cblxuQmFza2V0SWNvbi5kaXNwbGF5TmFtZSA9IFwiQmFza2V0SWNvblwiO1xuXG5CYXNrZXRJY29uLmRlZmF1bHRQcm9wcyA9IHtcIndpZHRoXCI6XCIyM1wiLFwiaGVpZ2h0XCI6XCIyMFwiLFwidmlld0JveFwiOlwiMCAwIDIzIDIwXCJ9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2tldEljb247XG5cbkJhc2tldEljb24uZGVmYXVsdCA9IEJhc2tldEljb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9pY29ucy9iYXNrZXQuc3ZnP25hbWU9QmFza2V0SWNvbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24nO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IEJ1cmdlciBmcm9tICdjb21wb25lbnRzL0J1cmdlci9CdXJnZXInO1xuaW1wb3J0IHsgQWNjb3JkZW9uLCBBY2NvcmRlb25JdGVtIH0gZnJvbSAnY29tcG9uZW50cy9BY2NvcmRlb24nO1xuaW1wb3J0IExpbmsgZnJvbSAnY29tcG9uZW50cy9MaW5rL0xpbmsnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9NZW51UGFuZWwuY3NzJztcblxuY29uc3QgZHVyYXRpb24gPSAzMDA7XG5cbmNvbnN0IGRlZmF1bHRTdHlsZSA9IHtcbiAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHtkdXJhdGlvbn1tcyBlYXNlLWluLW91dGAsXG4gIG9wYWNpdHk6IDAsXG59O1xuXG5jb25zdCB0cmFuc2l0aW9uU3R5bGVzID0ge1xuICBlbnRlcmluZzogeyBvcGFjaXR5OiAxIH0sXG4gIGVudGVyZWQ6IHsgb3BhY2l0eTogMSB9LFxufTtcblxuY29uc3QgTWVudVBhbmVsID0gKHtcbiAgaXNTaG93LFxuICBoYW5kbGVUb2dnbGUsXG4gIGhhbmRsZUFjY29yZGVvblRvZ2dsZSxcbiAgYWN0aXZlQWNjb3JkZW9uSW5kZXgsXG59KSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgIFtzLnJvb3RdOiB0cnVlLFxuICAgICAgW3MuYWN0aXZlXTogaXNTaG93LFxuICAgIH0pfVxuICA+XG4gICAgPGRpdiBjbGFzc05hbWU9e3MuYnVyZ2VyfT5cbiAgICAgIDxCdXJnZXIgb25DbGljaz17aGFuZGxlVG9nZ2xlfSBzaG93PXtpc1Nob3d9IC8+XG4gICAgPC9kaXY+XG4gICAgPFRyYW5zaXRpb24gaW49e2lzU2hvd30gdGltZW91dD17ZHVyYXRpb259PlxuICAgICAge3N0YXRlID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5kZWZhdWx0U3R5bGUsXG4gICAgICAgICAgICAuLi50cmFuc2l0aW9uU3R5bGVzW3N0YXRlXSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17cy5kcmF3ZXJ9XG4gICAgICAgID5cbiAgICAgICAgICA8QWNjb3JkZW9uXG4gICAgICAgICAgICBhY3RpdmVJbmRleD17YWN0aXZlQWNjb3JkZW9uSW5kZXh9XG4gICAgICAgICAgICBoYW5kbGVUb2dnbGU9eygpID0+IHt9fVxuICAgICAgICAgICAgY2xhc3NuYW1lcz17e1xuICAgICAgICAgICAgICBjb250ZW50OiBzLmFjY29yZGVvbixcbiAgICAgICAgICAgICAgYWN0aXZlQ29udGVudDogcy5hY2NvcmRlb25BY3RpdmVDb250ZW50LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uT3Blbj17aGFuZGxlQWNjb3JkZW9uVG9nZ2xlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBY2NvcmRlb25JdGVtIHRpdGxlPVwi0JbQtdC90YHQutC40LVcIj5cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzLmNhdGVnb3J5fT5Eb2xjZSBnYWJhbm5hPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3MuY2F0ZWdvcnl9PkxvdWk8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17cy5jYXRlZ29yeX0+0JXRidC1INGH0YLQvi3RgtC+PC9MaW5rPlxuICAgICAgICAgICAgPC9BY2NvcmRlb25JdGVtPlxuICAgICAgICAgICAgPEFjY29yZGVvbkl0ZW0gdGl0bGU9XCLQnNGD0LbRgdC60LjQtVwiPkNvbnRlbm48L0FjY29yZGVvbkl0ZW0+XG4gICAgICAgICAgPC9BY2NvcmRlb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L1RyYW5zaXRpb24+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShNZW51UGFuZWwpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL01lbnVQYW5lbC9NZW51UGFuZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkVYSVRJTkcgPSBleHBvcnRzLkVOVEVSRUQgPSBleHBvcnRzLkVOVEVSSU5HID0gZXhwb3J0cy5FWElURUQgPSBleHBvcnRzLlVOTU9VTlRFRCA9IHVuZGVmaW5lZDtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVU5NT1VOVEVEID0gZXhwb3J0cy5VTk1PVU5URUQgPSAndW5tb3VudGVkJztcbnZhciBFWElURUQgPSBleHBvcnRzLkVYSVRFRCA9ICdleGl0ZWQnO1xudmFyIEVOVEVSSU5HID0gZXhwb3J0cy5FTlRFUklORyA9ICdlbnRlcmluZyc7XG52YXIgRU5URVJFRCA9IGV4cG9ydHMuRU5URVJFRCA9ICdlbnRlcmVkJztcbnZhciBFWElUSU5HID0gZXhwb3J0cy5FWElUSU5HID0gJ2V4aXRpbmcnO1xuXG4vKipcbiAqIFRoZSBUcmFuc2l0aW9uIGNvbXBvbmVudCBsZXRzIHlvdSBkZXNjcmliZSBhIHRyYW5zaXRpb24gZnJvbSBvbmUgY29tcG9uZW50XG4gKiBzdGF0ZSB0byBhbm90aGVyIF9vdmVyIHRpbWVfIHdpdGggYSBzaW1wbGUgZGVjbGFyYXRpdmUgQVBJLiBNb3N0IGNvbW1vbmx5XG4gKiBpdCdzIHVzZWQgdG8gYW5pbWF0ZSB0aGUgbW91bnRpbmcgYW5kIHVubW91bnRpbmcgb2YgYSBjb21wb25lbnQsIGJ1dCBjYW4gYWxzb1xuICogYmUgdXNlZCB0byBkZXNjcmliZSBpbi1wbGFjZSB0cmFuc2l0aW9uIHN0YXRlcyBhcyB3ZWxsLlxuICpcbiAqIEJ5IGRlZmF1bHQgdGhlIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgZG9lcyBub3QgYWx0ZXIgdGhlIGJlaGF2aW9yIG9mIHRoZVxuICogY29tcG9uZW50IGl0IHJlbmRlcnMsIGl0IG9ubHkgdHJhY2tzIFwiZW50ZXJcIiBhbmQgXCJleGl0XCIgc3RhdGVzIGZvciB0aGUgY29tcG9uZW50cy5cbiAqIEl0J3MgdXAgdG8geW91IHRvIGdpdmUgbWVhbmluZyBhbmQgZWZmZWN0IHRvIHRob3NlIHN0YXRlcy4gRm9yIGV4YW1wbGUgd2UgY2FuXG4gKiBhZGQgc3R5bGVzIHRvIGEgY29tcG9uZW50IHdoZW4gaXQgZW50ZXJzIG9yIGV4aXRzOlxuICpcbiAqIGBgYGpzeFxuICogaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJztcbiAqXG4gKiBjb25zdCBkdXJhdGlvbiA9IDMwMDtcbiAqXG4gKiBjb25zdCBkZWZhdWx0U3R5bGUgPSB7XG4gKiAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7ZHVyYXRpb259bXMgZWFzZS1pbi1vdXRgLFxuICogICBvcGFjaXR5OiAwLFxuICogfVxuICpcbiAqIGNvbnN0IHRyYW5zaXRpb25TdHlsZXMgPSB7XG4gKiAgIGVudGVyaW5nOiB7IG9wYWNpdHk6IDAgfSxcbiAqICAgZW50ZXJlZDogIHsgb3BhY2l0eTogMSB9LFxuICogfTtcbiAqXG4gKiBjb25zdCBGYWRlID0gKHsgaW46IGluUHJvcCB9KSA9PiAoXG4gKiAgIDxUcmFuc2l0aW9uIGluPXtpblByb3B9IHRpbWVvdXQ9e2R1cmF0aW9ufT5cbiAqICAgICB7KHN0YXRlKSA9PiAoXG4gKiAgICAgICA8ZGl2IHN0eWxlPXt7XG4gKiAgICAgICAgIC4uLmRlZmF1bHRTdHlsZSxcbiAqICAgICAgICAgLi4udHJhbnNpdGlvblN0eWxlc1tzdGF0ZV1cbiAqICAgICAgIH19PlxuICogICAgICAgICBJJ20gQSBmYWRlIFRyYW5zaXRpb24hXG4gKiAgICAgICA8L2Rpdj5cbiAqICAgICApfVxuICogICA8L1RyYW5zaXRpb24+XG4gKiApO1xuICogYGBgXG4gKlxuICogQXMgbm90ZWQgdGhlIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgZG9lc24ndCBfZG9fIGFueXRoaW5nIGJ5IGl0c2VsZiB0byBpdHMgY2hpbGQgY29tcG9uZW50LlxuICogV2hhdCBpdCBkb2VzIGRvIGlzIHRyYWNrIHRyYW5zaXRpb24gc3RhdGVzIG92ZXIgdGltZSBzbyB5b3UgY2FuIHVwZGF0ZSB0aGVcbiAqIGNvbXBvbmVudCAoc3VjaCBhcyBieSBhZGRpbmcgc3R5bGVzIG9yIGNsYXNzZXMpIHdoZW4gaXQgY2hhbmdlcyBzdGF0ZXMuXG4gKlxuICogVGhlcmUgYXJlIDQgbWFpbiBzdGF0ZXMgYSBUcmFuc2l0aW9uIGNhbiBiZSBpbjpcbiAqICAtIGBFTlRFUklOR2BcbiAqICAtIGBFTlRFUkVEYFxuICogIC0gYEVYSVRJTkdgXG4gKiAgLSBgRVhJVEVEYFxuICpcbiAqIFRyYW5zaXRpb24gc3RhdGUgaXMgdG9nZ2xlZCB2aWEgdGhlIGBpbmAgcHJvcC4gV2hlbiBgdHJ1ZWAgdGhlIGNvbXBvbmVudCBiZWdpbnMgdGhlXG4gKiBcIkVudGVyXCIgc3RhZ2UuIER1cmluZyB0aGlzIHN0YWdlLCB0aGUgY29tcG9uZW50IHdpbGwgc2hpZnQgZnJvbSBpdHMgY3VycmVudCB0cmFuc2l0aW9uIHN0YXRlLFxuICogdG8gYCdlbnRlcmluZydgIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24gYW5kIHRoZW4gdG8gdGhlIGAnZW50ZXJlZCdgIHN0YWdlIG9uY2VcbiAqIGl0J3MgY29tcGxldGUuIExldCdzIHRha2UgdGhlIGZvbGxvd2luZyBleGFtcGxlOlxuICpcbiAqIGBgYGpzeFxuICogc3RhdGU9IHsgaW46IGZhbHNlIH07XG4gKlxuICogdG9nZ2xlRW50ZXJTdGF0ZSA9ICgpID0+IHtcbiAqICAgdGhpcy5zZXRTdGF0ZSh7IGluOiB0cnVlIH0pO1xuICogfVxuICpcbiAqIHJlbmRlcigpIHtcbiAqICAgcmV0dXJuIChcbiAqICAgICA8ZGl2PlxuICogICAgICAgPFRyYW5zaXRpb24gaW49e3RoaXMuc3RhdGUuaW59IHRpbWVvdXQ9ezUwMH0gLz5cbiAqICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy50b2dnbGVFbnRlclN0YXRlfT5DbGljayB0byBFbnRlcjwvYnV0dG9uPlxuICogICAgIDwvZGl2PlxuICogICApO1xuICogfVxuICogYGBgXG4gKlxuICogV2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgdGhlIGNvbXBvbmVudCB3aWxsIHNoaWZ0IHRvIHRoZSBgJ2VudGVyaW5nJ2Agc3RhdGUgYW5kXG4gKiBzdGF5IHRoZXJlIGZvciA1MDBtcyAodGhlIHZhbHVlIG9mIGB0aW1lb3V0YCkgd2hlbiBmaW5hbGx5IHN3aXRjaGVzIHRvIGAnZW50ZXJlZCdgLlxuICpcbiAqIFdoZW4gYGluYCBpcyBgZmFsc2VgIHRoZSBzYW1lIHRoaW5nIGhhcHBlbnMgZXhjZXB0IHRoZSBzdGF0ZSBtb3ZlcyBmcm9tIGAnZXhpdGluZydgIHRvIGAnZXhpdGVkJ2AuXG4gKi9cblxudmFyIFRyYW5zaXRpb24gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbihwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFuc2l0aW9uKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgdmFyIHBhcmVudEdyb3VwID0gY29udGV4dC50cmFuc2l0aW9uR3JvdXA7XG4gICAgLy8gSW4gdGhlIGNvbnRleHQgb2YgYSBUcmFuc2l0aW9uR3JvdXAgYWxsIGVudGVycyBhcmUgcmVhbGx5IGFwcGVhcnNcbiAgICB2YXIgYXBwZWFyID0gcGFyZW50R3JvdXAgJiYgIXBhcmVudEdyb3VwLmlzTW91bnRpbmcgPyBwcm9wcy5lbnRlciA6IHByb3BzLmFwcGVhcjtcblxuICAgIHZhciBpbml0aWFsU3RhdHVzID0gdm9pZCAwO1xuICAgIF90aGlzLm5leHRTdGF0dXMgPSBudWxsO1xuXG4gICAgaWYgKHByb3BzLmluKSB7XG4gICAgICBpZiAoYXBwZWFyKSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFWElURUQ7XG4gICAgICAgIF90aGlzLm5leHRTdGF0dXMgPSBFTlRFUklORztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFTlRFUkVEO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvcHMudW5tb3VudE9uRXhpdCB8fCBwcm9wcy5tb3VudE9uRW50ZXIpIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IFVOTU9VTlRFRDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFWElURUQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3RoaXMuc3RhdGUgPSB7IHN0YXR1czogaW5pdGlhbFN0YXR1cyB9O1xuXG4gICAgX3RoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHsgdHJhbnNpdGlvbkdyb3VwOiBudWxsIH07IC8vIGFsbG93cyBmb3IgbmVzdGVkIFRyYW5zaXRpb25zXG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXR1cyh0cnVlKTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB2YXIgX3JlZiA9IHRoaXMucGVuZGluZ1N0YXRlIHx8IHRoaXMuc3RhdGUsXG4gICAgICAgIHN0YXR1cyA9IF9yZWYuc3RhdHVzO1xuXG4gICAgaWYgKG5leHRQcm9wcy5pbikge1xuICAgICAgaWYgKHN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IEVYSVRFRCB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0dXMgIT09IEVOVEVSSU5HICYmIHN0YXR1cyAhPT0gRU5URVJFRCkge1xuICAgICAgICB0aGlzLm5leHRTdGF0dXMgPSBFTlRFUklORztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcgfHwgc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gICAgICAgIHRoaXMubmV4dFN0YXR1cyA9IEVYSVRJTkc7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXR1cygpO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5nZXRUaW1lb3V0cyA9IGZ1bmN0aW9uIGdldFRpbWVvdXRzKCkge1xuICAgIHZhciB0aW1lb3V0ID0gdGhpcy5wcm9wcy50aW1lb3V0O1xuXG4gICAgdmFyIGV4aXQgPSB2b2lkIDAsXG4gICAgICAgIGVudGVyID0gdm9pZCAwLFxuICAgICAgICBhcHBlYXIgPSB2b2lkIDA7XG5cbiAgICBleGl0ID0gZW50ZXIgPSBhcHBlYXIgPSB0aW1lb3V0O1xuXG4gICAgaWYgKHRpbWVvdXQgIT0gbnVsbCAmJiB0eXBlb2YgdGltZW91dCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGV4aXQgPSB0aW1lb3V0LmV4aXQ7XG4gICAgICBlbnRlciA9IHRpbWVvdXQuZW50ZXI7XG4gICAgICBhcHBlYXIgPSB0aW1lb3V0LmFwcGVhcjtcbiAgICB9XG4gICAgcmV0dXJuIHsgZXhpdDogZXhpdCwgZW50ZXI6IGVudGVyLCBhcHBlYXI6IGFwcGVhciB9O1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnVwZGF0ZVN0YXR1cyA9IGZ1bmN0aW9uIHVwZGF0ZVN0YXR1cygpIHtcbiAgICB2YXIgbW91bnRpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgdmFyIG5leHRTdGF0dXMgPSB0aGlzLm5leHRTdGF0dXM7XG5cbiAgICBpZiAobmV4dFN0YXR1cyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5uZXh0U3RhdHVzID0gbnVsbDtcbiAgICAgIC8vIG5leHRTdGF0dXMgd2lsbCBhbHdheXMgYmUgRU5URVJJTkcgb3IgRVhJVElORy5cbiAgICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG4gICAgICB2YXIgbm9kZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgICAgaWYgKG5leHRTdGF0dXMgPT09IEVOVEVSSU5HKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUVudGVyKG5vZGUsIG1vdW50aW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUV4aXQobm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnVubW91bnRPbkV4aXQgJiYgdGhpcy5zdGF0ZS5zdGF0dXMgPT09IEVYSVRFRCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogVU5NT1VOVEVEIH0pO1xuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5wZXJmb3JtRW50ZXIgPSBmdW5jdGlvbiBwZXJmb3JtRW50ZXIobm9kZSwgbW91bnRpbmcpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBlbnRlciA9IHRoaXMucHJvcHMuZW50ZXI7XG5cbiAgICB2YXIgYXBwZWFyaW5nID0gdGhpcy5jb250ZXh0LnRyYW5zaXRpb25Hcm91cCA/IHRoaXMuY29udGV4dC50cmFuc2l0aW9uR3JvdXAuaXNNb3VudGluZyA6IG1vdW50aW5nO1xuXG4gICAgdmFyIHRpbWVvdXRzID0gdGhpcy5nZXRUaW1lb3V0cygpO1xuXG4gICAgLy8gbm8gZW50ZXIgYW5pbWF0aW9uIHNraXAgcmlnaHQgdG8gRU5URVJFRFxuICAgIC8vIGlmIHdlIGFyZSBtb3VudGluZyBhbmQgcnVubmluZyB0aGlzIGl0IG1lYW5zIGFwcGVhciBfbXVzdF8gYmUgc2V0XG4gICAgaWYgKCFtb3VudGluZyAmJiAhZW50ZXIpIHtcbiAgICAgIHRoaXMuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFTlRFUkVEIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChub2RlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25FbnRlcihub2RlLCBhcHBlYXJpbmcpO1xuXG4gICAgdGhpcy5zYWZlU2V0U3RhdGUoeyBzdGF0dXM6IEVOVEVSSU5HIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyaW5nKG5vZGUsIGFwcGVhcmluZyk7XG5cbiAgICAgIC8vIEZJWE1FOiBhcHBlYXIgdGltZW91dD9cbiAgICAgIF90aGlzMi5vblRyYW5zaXRpb25FbmQobm9kZSwgdGltZW91dHMuZW50ZXIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnNhZmVTZXRTdGF0ZSh7IHN0YXR1czogRU5URVJFRCB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChub2RlLCBhcHBlYXJpbmcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnBlcmZvcm1FeGl0ID0gZnVuY3Rpb24gcGVyZm9ybUV4aXQobm9kZSkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGV4aXQgPSB0aGlzLnByb3BzLmV4aXQ7XG5cbiAgICB2YXIgdGltZW91dHMgPSB0aGlzLmdldFRpbWVvdXRzKCk7XG5cbiAgICAvLyBubyBleGl0IGFuaW1hdGlvbiBza2lwIHJpZ2h0IHRvIEVYSVRFRFxuICAgIGlmICghZXhpdCkge1xuICAgICAgdGhpcy5zYWZlU2V0U3RhdGUoeyBzdGF0dXM6IEVYSVRFRCB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uRXhpdChub2RlKTtcblxuICAgIHRoaXMuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFWElUSU5HIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG5cbiAgICAgIF90aGlzMy5vblRyYW5zaXRpb25FbmQobm9kZSwgdGltZW91dHMuZXhpdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFWElURUQgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5jYW5jZWxOZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBjYW5jZWxOZXh0Q2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMubmV4dENhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjay5jYW5jZWwoKTtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuc2FmZVNldFN0YXRlID0gZnVuY3Rpb24gc2FmZVNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIC8vIFdlIG5lZWQgdG8gdHJhY2sgcGVuZGluZyB1cGRhdGVzIGZvciBpbnN0YW5jZXMgd2hlcmUgYSBjV1JQIGZpcmVzIHF1aWNrbHlcbiAgICAvLyBhZnRlciBjRE0gYW5kIGJlZm9yZSB0aGUgc3RhdGUgZmx1c2hlcywgd2hpY2ggd291bGQgZG91YmxlIHRyaWdnZXIgYVxuICAgIC8vIHRyYW5zaXRpb25cbiAgICB0aGlzLnBlbmRpbmdTdGF0ZSA9IG5leHRTdGF0ZTtcblxuICAgIC8vIFRoaXMgc2hvdWxkbid0IGJlIG5lY2Vzc2FyeSwgYnV0IHRoZXJlIGFyZSB3ZWlyZCByYWNlIGNvbmRpdGlvbnMgd2l0aFxuICAgIC8vIHNldFN0YXRlIGNhbGxiYWNrcyBhbmQgdW5tb3VudGluZyBpbiB0ZXN0aW5nLCBzbyBhbHdheXMgbWFrZSBzdXJlIHRoYXRcbiAgICAvLyB3ZSBjYW4gY2FuY2VsIGFueSBwZW5kaW5nIHNldFN0YXRlIGNhbGxiYWNrcyBhZnRlciB3ZSB1bm1vdW50LlxuICAgIGNhbGxiYWNrID0gdGhpcy5zZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spO1xuICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczQucGVuZGluZ1N0YXRlID0gbnVsbDtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuc2V0TmV4dENhbGxiYWNrID0gZnVuY3Rpb24gc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB2YXIgYWN0aXZlID0gdHJ1ZTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBfdGhpczUubmV4dENhbGxiYWNrID0gbnVsbDtcblxuICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5uZXh0Q2FsbGJhY2s7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUub25UcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKG5vZGUsIHRpbWVvdXQsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnNldE5leHRDYWxsYmFjayhoYW5kbGVyKTtcblxuICAgIGlmIChub2RlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hZGRFbmRMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLnByb3BzLmFkZEVuZExpc3RlbmVyKG5vZGUsIHRoaXMubmV4dENhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aW1lb3V0ICE9IG51bGwpIHtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgdGltZW91dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIDApO1xuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuICAgIGlmIChzdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBjaGlsZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjaGlsZHJlbiddKTtcbiAgICAvLyBmaWx0ZXIgcHJvcHMgZm9yIFRyYW5zdGl0aW9uXG5cblxuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmluO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm1vdW50T25FbnRlcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy51bm1vdW50T25FeGl0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmFwcGVhcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5lbnRlcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5leGl0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLnRpbWVvdXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuYWRkRW5kTGlzdGVuZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FbnRlcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkVudGVyaW5nO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRW50ZXJlZDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkV4aXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FeGl0aW5nO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdGVkO1xuXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHN0YXR1cywgY2hpbGRQcm9wcyk7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbjtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblRyYW5zaXRpb24uY29udGV4dFR5cGVzID0ge1xuICB0cmFuc2l0aW9uR3JvdXA6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5UcmFuc2l0aW9uLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICB0cmFuc2l0aW9uR3JvdXA6IGZ1bmN0aW9uIHRyYW5zaXRpb25Hcm91cCgpIHt9XG59O1xuXG5cblRyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogQSBgZnVuY3Rpb25gIGNoaWxkIGNhbiBiZSB1c2VkIGluc3RlYWQgb2YgYSBSZWFjdCBlbGVtZW50LlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IHRyYW5zaXRpb24gc3RhdHVzXG4gICAqICgnZW50ZXJpbmcnLCAnZW50ZXJlZCcsICdleGl0aW5nJywgJ2V4aXRlZCcsICd1bm1vdW50ZWQnKSwgd2hpY2ggY2FuIHVzZWRcbiAgICogdG8gYXBwbHkgY29udGV4dCBzcGVjaWZpYyBwcm9wcyB0byBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogYGBganN4XG4gICAqIDxUcmFuc2l0aW9uIHRpbWVvdXQ9ezE1MH0+XG4gICAqICAgeyhzdGF0dXMpID0+IChcbiAgICogICAgIDxNeUNvbXBvbmVudCBjbGFzc05hbWU9e2BmYWRlIGZhZGUtJHtzdGF0dXN9YH0gLz5cbiAgICogICApfVxuICAgKiA8L1RyYW5zaXRpb24+XG4gICAqIGBgYFxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWRdKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBlbnRlciBvciBleGl0IHN0YXRlc1xuICAgKi9cbiAgaW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBjaGlsZCBjb21wb25lbnQgaXMgbW91bnRlZCBpbW1lZGlhdGVseSBhbG9uZyB3aXRoXG4gICAqIHRoZSBwYXJlbnQgYFRyYW5zaXRpb25gIGNvbXBvbmVudC4gSWYgeW91IHdhbnQgdG8gXCJsYXp5IG1vdW50XCIgdGhlIGNvbXBvbmVudCBvbiB0aGVcbiAgICogZmlyc3QgYGluPXt0cnVlfWAgeW91IGNhbiBzZXQgYG1vdW50T25FbnRlcmAuIEFmdGVyIHRoZSBmaXJzdCBlbnRlciB0cmFuc2l0aW9uIHRoZSBjb21wb25lbnQgd2lsbCBzdGF5XG4gICAqIG1vdW50ZWQsIGV2ZW4gb24gXCJleGl0ZWRcIiwgdW5sZXNzIHlvdSBhbHNvIHNwZWNpZnkgYHVubW91bnRPbkV4aXRgLlxuICAgKi9cbiAgbW91bnRPbkVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IHN0YXlzIG1vdW50ZWQgYWZ0ZXIgaXQgcmVhY2hlcyB0aGUgYCdleGl0ZWQnYCBzdGF0ZS5cbiAgICogU2V0IGB1bm1vdW50T25FeGl0YCBpZiB5b3UnZCBwcmVmZXIgdG8gdW5tb3VudCB0aGUgY29tcG9uZW50IGFmdGVyIGl0IGZpbmlzaGVzIGV4aXRpbmcuXG4gICAqL1xuICB1bm1vdW50T25FeGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTm9ybWFsbHkgYSBjb21wb25lbnQgaXMgbm90IHRyYW5zaXRpb25lZCBpZiBpdCBpcyBzaG93biB3aGVuIHRoZSBgPFRyYW5zaXRpb24+YCBjb21wb25lbnQgbW91bnRzLlxuICAgKiBJZiB5b3Ugd2FudCB0byB0cmFuc2l0aW9uIG9uIHRoZSBmaXJzdCBtb3VudCBzZXQgYGFwcGVhcmAgdG8gYHRydWVgLCBhbmQgdGhlXG4gICAqIGNvbXBvbmVudCB3aWxsIHRyYW5zaXRpb24gaW4gYXMgc29vbiBhcyB0aGUgYDxUcmFuc2l0aW9uPmAgbW91bnRzLlxuICAgKlxuICAgKiA+IE5vdGU6IHRoZXJlIGFyZSBubyBzcGVjaWZpYyBcImFwcGVhclwiIHN0YXRlcy4gYGFwcGVhcmAgb25seSBhZGRzIGFuIGFkZGl0aW9uYWwgYGVudGVyYCB0cmFuc2l0aW9uLlxuICAgKi9cbiAgYXBwZWFyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgZW50ZXIgdHJhbnNpdGlvbnMuXG4gICAqL1xuICBlbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGV4aXQgdHJhbnNpdGlvbnMuXG4gICAqL1xuICBleGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIG9mIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFJlcXVpcmVkIHVubGVzcyBgYWRkRXZlbnRMaXN0ZW5lcmAgaXMgcHJvdmlkZWRcbiAgICpcbiAgICogWW91IG1heSBzcGVjaWZ5IGEgc2luZ2xlIHRpbWVvdXQgZm9yIGFsbCB0cmFuc2l0aW9ucyBsaWtlOiBgdGltZW91dD17NTAwfWAsXG4gICAqIG9yIGluZGl2aWR1YWxseSBsaWtlOlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogdGltZW91dD17e1xuICAgKiAgZW50ZXI6IDMwMCxcbiAgICogIGV4aXQ6IDUwMCxcbiAgICogfX1cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXIgfCB7IGVudGVyPzogbnVtYmVyLCBleGl0PzogbnVtYmVyIH19XG4gICAqL1xuICB0aW1lb3V0OiBmdW5jdGlvbiB0aW1lb3V0KHByb3BzKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgcHQgPSBfUHJvcFR5cGVzLnRpbWVvdXRzU2hhcGU7XG4gICAgaWYgKCFwcm9wcy5hZGRFbmRMaXN0ZW5lcikgcHQgPSBwdC5pc1JlcXVpcmVkO1xuICAgIHJldHVybiBwdC5hcHBseSh1bmRlZmluZWQsIFtwcm9wc10uY29uY2F0KGFyZ3MpKTtcbiAgfSxcblxuICAvKipcbiAgICogQWRkIGEgY3VzdG9tIHRyYW5zaXRpb24gZW5kIHRyaWdnZXIuIENhbGxlZCB3aXRoIHRoZSB0cmFuc2l0aW9uaW5nXG4gICAqIERPTSBub2RlIGFuZCBhIGBkb25lYCBjYWxsYmFjay4gQWxsb3dzIGZvciBtb3JlIGZpbmUgZ3JhaW5lZCB0cmFuc2l0aW9uIGVuZFxuICAgKiBsb2dpYy4gKipOb3RlOioqIFRpbWVvdXRzIGFyZSBzdGlsbCB1c2VkIGFzIGEgZmFsbGJhY2sgaWYgcHJvdmlkZWQuXG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiBhZGRFbmRMaXN0ZW5lcj17KG5vZGUsIGRvbmUpID0+IHtcbiAgICogICAvLyB1c2UgdGhlIGNzcyB0cmFuc2l0aW9uZW5kIGV2ZW50IHRvIG1hcmsgdGhlIGZpbmlzaCBvZiBhIHRyYW5zaXRpb25cbiAgICogICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBkb25lLCBmYWxzZSk7XG4gICAqIH19XG4gICAqIGBgYFxuICAgKi9cbiAgYWRkRW5kTGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZW50ZXJpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmNcbn0gOiB7fTtcblxuLy8gTmFtZSB0aGUgZnVuY3Rpb24gc28gaXQgaXMgY2xlYXJlciBpbiB0aGUgZG9jdW1lbnRhdGlvblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cblRyYW5zaXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBpbjogZmFsc2UsXG4gIG1vdW50T25FbnRlcjogZmFsc2UsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlLFxuICBhcHBlYXI6IGZhbHNlLFxuICBlbnRlcjogdHJ1ZSxcbiAgZXhpdDogdHJ1ZSxcblxuICBvbkVudGVyOiBub29wLFxuICBvbkVudGVyaW5nOiBub29wLFxuICBvbkVudGVyZWQ6IG5vb3AsXG5cbiAgb25FeGl0OiBub29wLFxuICBvbkV4aXRpbmc6IG5vb3AsXG4gIG9uRXhpdGVkOiBub29wXG59O1xuXG5UcmFuc2l0aW9uLlVOTU9VTlRFRCA9IDA7XG5UcmFuc2l0aW9uLkVYSVRFRCA9IDE7XG5UcmFuc2l0aW9uLkVOVEVSSU5HID0gMjtcblRyYW5zaXRpb24uRU5URVJFRCA9IDM7XG5UcmFuc2l0aW9uLkVYSVRJTkcgPSA0O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFuc2l0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gODE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIGludmFyaWFudChcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJXNgIHByb3Agb24gYCVzYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLicsXG4gICAgICAgICAgICAgIHByb3BGdWxsTmFtZSxcbiAgICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICVzIGF0IGluZGV4ICVzLicsXG4gICAgICAgICAgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpLFxuICAgICAgICAgIGlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc1xuLy8gbW9kdWxlIGlkID0gODE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbiAgdmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAodHlwZVNwZWNzLmhhc093blByb3BlcnR5KHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaW52YXJpYW50KHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSA9PT0gJ2Z1bmN0aW9uJywgJyVzOiAlcyB0eXBlIGAlc2AgaXMgaW52YWxpZDsgaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gJyArICd0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJXNgLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKTtcbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgd2FybmluZyghZXJyb3IgfHwgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciwgJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yKTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHdhcm5pbmcoZmFsc2UsICdGYWlsZWQgJXMgdHlwZTogJXMlcycsIGxvY2F0aW9uLCBlcnJvci5tZXNzYWdlLCBzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDgxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY2xhc3NOYW1lc1NoYXBlID0gZXhwb3J0cy50aW1lb3V0c1NoYXBlID0gdW5kZWZpbmVkO1xuZXhwb3J0cy50cmFuc2l0aW9uVGltZW91dCA9IHRyYW5zaXRpb25UaW1lb3V0O1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdHJhbnNpdGlvblRpbWVvdXQodHJhbnNpdGlvblR5cGUpIHtcbiAgdmFyIHRpbWVvdXRQcm9wTmFtZSA9ICd0cmFuc2l0aW9uJyArIHRyYW5zaXRpb25UeXBlICsgJ1RpbWVvdXQnO1xuICB2YXIgZW5hYmxlZFByb3BOYW1lID0gJ3RyYW5zaXRpb24nICsgdHJhbnNpdGlvblR5cGU7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIC8vIElmIHRoZSB0cmFuc2l0aW9uIGlzIGVuYWJsZWRcbiAgICBpZiAocHJvcHNbZW5hYmxlZFByb3BOYW1lXSkge1xuICAgICAgLy8gSWYgbm8gdGltZW91dCBkdXJhdGlvbiBpcyBwcm92aWRlZFxuICAgICAgaWYgKHByb3BzW3RpbWVvdXRQcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKHRpbWVvdXRQcm9wTmFtZSArICcgd2FzblxcJ3Qgc3VwcGxpZWQgdG8gQ1NTVHJhbnNpdGlvbkdyb3VwOiAnICsgJ3RoaXMgY2FuIGNhdXNlIHVucmVsaWFibGUgYW5pbWF0aW9ucyBhbmQgd29uXFwndCBiZSBzdXBwb3J0ZWQgaW4gJyArICdhIGZ1dHVyZSB2ZXJzaW9uIG9mIFJlYWN0LiBTZWUgJyArICdodHRwczovL2ZiLm1lL3JlYWN0LWFuaW1hdGlvbi10cmFuc2l0aW9uLWdyb3VwLXRpbWVvdXQgZm9yIG1vcmUgJyArICdpbmZvcm1hdGlvbi4nKTtcblxuICAgICAgICAvLyBJZiB0aGUgZHVyYXRpb24gaXNuJ3QgYSBudW1iZXJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BzW3RpbWVvdXRQcm9wTmFtZV0gIT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IodGltZW91dFByb3BOYW1lICsgJyBtdXN0IGJlIGEgbnVtYmVyIChpbiBtaWxsaXNlY29uZHMpJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59XG5cbnZhciB0aW1lb3V0c1NoYXBlID0gZXhwb3J0cy50aW1lb3V0c1NoYXBlID0gX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgZW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBleGl0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlclxufSkuaXNSZXF1aXJlZF0pO1xuXG52YXIgY2xhc3NOYW1lc1NoYXBlID0gZXhwb3J0cy5jbGFzc05hbWVzU2hhcGUgPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICBlbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGV4aXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBhY3RpdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG59KSwgX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gIGVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZW50ZXJBY3RpdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBleGl0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZXhpdEFjdGl2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbn0pXSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9Qcm9wVHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDgyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQWNjb3JkZW9uIH0gZnJvbSAnLi9BY2NvcmRlb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBY2NvcmRlb25JdGVtIH0gZnJvbSAnLi9BY2NvcmRlb25JdGVtJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9BY2NvcmRlb24vaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzIGZyb20gJy4vQWNjb3JkZW9uLmNzcyc7XG5cbmNvbnN0IEFjY29yZGVvbiA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2N4KHtcbiAgICBbcy5yb290XTogdHJ1ZSxcbiAgICBbcHJvcHMuY2xhc3NuYW1lcy5yb290XTogdHJ1ZSxcbiAgfSl9PlxuICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAocHJvcHMuY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+XG4gICAgICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgYWN0aXZlOiBpbmRleCA9PT0gcHJvcHMuYWN0aXZlSW5kZXgsXG4gICAgICAgIGhhbmRsZVRvZ2dsZTogcHJvcHMub25PcGVuLFxuICAgICAgICBpdGVtSW5kZXg6IGluZGV4LFxuICAgICAgICBjbGFzc25hbWVzOiBwcm9wcy5jbGFzc25hbWVzLFxuICAgICAgfSksXG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuXG5BY2NvcmRlb24ucHJvcFR5cGVzID0ge1xuICBhY3RpdmVJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvbk9wZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG59O1xuXG5cbkFjY29yZGVvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzbmFtZXM6IHtcbiAgICByb290OiAnJyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKEFjY29yZGVvbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvQWNjb3JkZW9uL0FjY29yZGVvbi5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuQWNjb3JkZW9uX19yb290X19fYl9hVm4ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5BY2NvcmRlb25fX2Fjb3JkZW9uSGVhZGVyX19fMkhOalYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtaW4taGVpZ2h0OiAzNHB4O1xcbiAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjM1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjM1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjM1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNy42cHg7XFxuICBmb250LXNpemU6IDE3LjZweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMC43NTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjc1MnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDQ3cmVtO1xcbiAgY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjM5LCAyMzksIDIzOSk7XFxufVxcblxcbi5BY2NvcmRlb25fX2Fycm93X19fM1FGQU4ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogbm9uZTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycztcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgLXdlYmtpdC10cmFuc2Zvcm0gMC4ycztcXG4gIHdpZHRoOiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICB3aWR0aDogMnJlbTtcXG4gIGZpbGw6IHJnYigxOTIsIDE5MiwgMTkyKTtcXG59XFxuXFxuLkFjY29yZGVvbl9fYWN0aXZlQXJyb3dfX18yVEtzeSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnM7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzO1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjJzO1xcbn1cXG5cXG4uQWNjb3JkZW9uX19hY29yZGVvbkhlYWRlcl9fXzJITmpWOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcblxcbi5BY2NvcmRlb25fX2FjY29yZGVvbkNvbnRlbnRfX18zYkhKZiB7XFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBoZWlnaHQ6IDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcztcXG4gIC1vLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcztcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcztcXG4gIHdpbGwtY2hhbmdlOiBtYXgtaGVpZ2h0O1xcbn1cXG5cXG4uQWNjb3JkZW9uX19hY29yZGVvbkFjdGl2ZUhlYWRlcl9fXzIwNnZkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMjM5KTsgXFxufVxcblxcbi5BY2NvcmRlb25fX2FjY29yZGVvbkFjdGl2ZUNvbnRlbnRfX18xTFEzNyB7XFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzO1xcbiAgLW8tdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzO1xcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzksIDIzOSwgMjM5KTtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL0FjY29yZGVvbi9BY2NvcmRlb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsY0FBYztFQUNkLDBCQUEwQjtNQUN0Qix1QkFBdUI7VUFDbkIsb0JBQW9CO0VBQzVCLDBCQUEwQjtNQUN0Qix1QkFBdUI7VUFDbkIsK0JBQStCO0VBQ3ZDLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHdFQUF3RTtFQUN4RSxtRUFBbUU7RUFDbkUsZ0VBQWdFO0VBQ2hFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiw0Q0FBNEM7Q0FDN0M7O0FBRUQ7RUFDRSx3QkFBd0I7TUFDcEIsb0JBQW9CO1VBQ2hCLGdCQUFnQjtFQUN4QiwyQ0FBMkM7RUFDM0MsbUNBQW1DO0VBQ25DLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsbURBQW1EO0VBQ25ELFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtDQUMxQjs7QUFFRDtFQUNFLGtDQUFrQztNQUM5Qiw4QkFBOEI7VUFDMUIsMEJBQTBCO0VBQ2xDLDJDQUEyQztFQUMzQyxtQ0FBbUM7RUFDbkMsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixtREFBbUQ7Q0FDcEQ7O0FBRUQ7RUFDRSx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLG9DQUFvQztFQUNwQywrQkFBK0I7RUFDL0IsNEJBQTRCO0VBQzVCLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLHFDQUFxQztDQUN0Qzs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsNENBQTRDO0NBQzdDXCIsXCJmaWxlXCI6XCJBY2NvcmRlb24uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb290IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWNvcmRlb25IZWFkZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtaW4taGVpZ2h0OiAzNHB4O1xcbiAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjM1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjM1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjM1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNy42cHg7XFxuICBmb250LXNpemU6IDE3LjZweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMC43NTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjc1MnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDQ3cmVtO1xcbiAgY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjM5LCAyMzksIDIzOSk7XFxufVxcblxcbi5hcnJvdyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiBub25lO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnM7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzO1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjJzO1xcbiAgd2lkdGg6IDMycHg7XFxuICB3aWR0aDogMzJweDtcXG4gIHdpZHRoOiAycmVtO1xcbiAgZmlsbDogcmdiKDE5MiwgMTkyLCAxOTIpO1xcbn1cXG5cXG4uYWN0aXZlQXJyb3cge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycztcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgLXdlYmtpdC10cmFuc2Zvcm0gMC4ycztcXG59XFxuXFxuLmFjb3JkZW9uSGVhZGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcblxcbi5hY2NvcmRlb25Db250ZW50IHtcXG4gIG1heC1oZWlnaHQ6IDA7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGhlaWdodDogMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzO1xcbiAgLW8tdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzO1xcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzO1xcbiAgd2lsbC1jaGFuZ2U6IG1heC1oZWlnaHQ7XFxufVxcblxcbi5hY29yZGVvbkFjdGl2ZUhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7IFxcbn1cXG5cXG4uYWNjb3JkZW9uQWN0aXZlQ29udGVudCB7XFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzO1xcbiAgLW8tdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzO1xcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzksIDIzOSwgMjM5KTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJBY2NvcmRlb25fX3Jvb3RfX19iX2FWblwiLFxuXHRcImFjb3JkZW9uSGVhZGVyXCI6IFwiQWNjb3JkZW9uX19hY29yZGVvbkhlYWRlcl9fXzJITmpWXCIsXG5cdFwiYXJyb3dcIjogXCJBY2NvcmRlb25fX2Fycm93X19fM1FGQU5cIixcblx0XCJhY3RpdmVBcnJvd1wiOiBcIkFjY29yZGVvbl9fYWN0aXZlQXJyb3dfX18yVEtzeVwiLFxuXHRcImFjY29yZGVvbkNvbnRlbnRcIjogXCJBY2NvcmRlb25fX2FjY29yZGVvbkNvbnRlbnRfX18zYkhKZlwiLFxuXHRcImFjb3JkZW9uQWN0aXZlSGVhZGVyXCI6IFwiQWNjb3JkZW9uX19hY29yZGVvbkFjdGl2ZUhlYWRlcl9fXzIwNnZkXCIsXG5cdFwiYWNjb3JkZW9uQWN0aXZlQ29udGVudFwiOiBcIkFjY29yZGVvbl9fYWNjb3JkZW9uQWN0aXZlQ29udGVudF9fXzFMUTM3XCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvQWNjb3JkZW9uL0FjY29yZGVvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDgyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZvbnRJY29uIGZyb20gJ3JlYWN0LXRvb2xib3gvbGliL2ZvbnRfaWNvbic7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgQXJyb3cgZnJvbSAnLSFiYWJlbC1sb2FkZXIhc3ZnLXJlYWN0LWxvYWRlciEuL2ljb25zL2Fycm93LnN2Zz9uYW1lPUFycm93JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzIGZyb20gJy4vQWNjb3JkZW9uLmNzcyc7XG5cbmNvbnN0IGhhbmRsZVRvZ2dsZSA9IChpbmRleCwgZm4gPSAoKSA9PiB7fSkgPT4gKCkgPT4gZm4oaW5kZXgpO1xuXG5jb25zdCBBY2NvcmRlb25JdGVtID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxoZWFkZXJcbiAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICBbcy5hY29yZGVvbkhlYWRlcl06IHRydWUsXG4gICAgICAgIFtzLmFjb3JkZW9uQWN0aXZlSGVhZGVyXTogcHJvcHMuYWN0aXZlLFxuICAgICAgfSl9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGUocHJvcHMuaXRlbUluZGV4LCBwcm9wcy5oYW5kbGVUb2dnbGUpfVxuICAgID5cbiAgICAgIDxBcnJvd1xuICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICBbcy5hcnJvd106IHRydWUsXG4gICAgICAgICAgW3MuYWN0aXZlQXJyb3ddOiBwcm9wcy5hY3RpdmUsXG4gICAgICAgIH0pfVxuICAgICAgLz5cblxuICAgICAge3Byb3BzLnRpdGxlfVxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICBbcy5hY2NvcmRlb25Db250ZW50XTogdHJ1ZSxcbiAgICAgICAgW3MuYWNjb3JkZW9uQWN0aXZlQ29udGVudF06IHByb3BzLmFjdGl2ZSxcbiAgICAgICAgW3Byb3BzLmNsYXNzbmFtZXMuY29udGVudF06IHRydWUsXG4gICAgICAgIFtwcm9wcy5jbGFzc25hbWVzLmFjdGl2ZUNvbnRlbnRdOiBwcm9wcy5hY3RpdmUsXG4gICAgICB9KX1cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuQWNjb3JkZW9uSXRlbS5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaXRlbUluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGhhbmRsZVRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoQWNjb3JkZW9uSXRlbSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvQWNjb3JkZW9uL0FjY29yZGVvbkl0ZW0uanMiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBBcnJvdyAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHByb3BzLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsbnVsbCxSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImRcIjpcIm0xMjEuMywzNC42Yy0xLjYtMS42LTQuMi0xLjYtNS44LDBsLTUxLDUxLjEtNTEuMS01MS4xYy0xLjYtMS42LTQuMi0xLjYtNS44LDAtMS42LDEuNi0xLjYsNC4yIDAsNS44bDUzLjksNTMuOWMwLjgsMC44IDEuOCwxLjIgMi45LDEuMiAxLDAgMi4xLTAuNCAyLjktMS4ybDUzLjktNTMuOWMxLjctMS42IDEuNy00LjIgMC4xLTUuOHpcIn0pKSk7XG59XG5cbkFycm93LmRpc3BsYXlOYW1lID0gXCJBcnJvd1wiO1xuXG5BcnJvdy5kZWZhdWx0UHJvcHMgPSB7XCJ2ZXJzaW9uXCI6XCIxLjFcIixcInZpZXdCb3hcIjpcIjAgMCAxMjkgMTI5XCIsXCJlbmFibGVCYWNrZ3JvdW5kXCI6XCJuZXcgMCAwIDEyOSAxMjlcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyb3c7XG5cbkFycm93LmRlZmF1bHQgPSBBcnJvdztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9BY2NvcmRlb24vaWNvbnMvYXJyb3cuc3ZnP25hbWU9QXJyb3ciLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL01lbnVQYW5lbC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vTWVudVBhbmVsLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL01lbnVQYW5lbC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9NZW51UGFuZWwvTWVudVBhbmVsLmNzc1xuLy8gbW9kdWxlIGlkID0gODI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLk1lbnVQYW5lbF9fcm9vdF9fXzI3YUM4IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogLTE7XFxuXFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcblxcbiAgLk1lbnVQYW5lbF9fcm9vdF9fXzI3YUM4IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDguNnJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDU0NHB4KSB7XFxuXFxuICAuTWVudVBhbmVsX19yb290X19fMjdhQzgge1xcbiAgICB3aWR0aDogMzEuMnJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAuTWVudVBhbmVsX19yb290X19fMjdhQzgge1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcbn1cXG5cXG4uTWVudVBhbmVsX19hY3RpdmVfX18yQmlxciB7XFxuICB6LWluZGV4OiA0O1xcbiAgXFxufVxcblxcbi5NZW51UGFuZWxfX2RyYXdlcl9fX3l1Y0lVIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDIuMXJlbSByZ2JhKDIxOCwgMjE4LCAyMTgsIC41KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDIuMXJlbSByZ2JhKDIxOCwgMjE4LCAyMTgsIC41KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAyLjFyZW0gcmdiYSgyMTgsIDIxOCwgMjE4LCAuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFxuXFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcblxcbiAgLk1lbnVQYW5lbF9fZHJhd2VyX19feXVjSVUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkge1xcblxcbiAgLk1lbnVQYW5lbF9fZHJhd2VyX19feXVjSVUge1xcbiAgICBwYWRkaW5nLXRvcDogNy41cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXG4gIC5NZW51UGFuZWxfX2RyYXdlcl9fX3l1Y0lVIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogMjAwcHggMHB4IDM4cHggMHB4O1xcbiAgICBtYXgtd2lkdGg6IDIxN3B4O1xcbiAgfVxcbn1cXG5cXG4uTWVudVBhbmVsX19idXJnZXJfX19VU1lWMSB7XFxuICB0b3A6IDM4cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMjBweDtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcXG5cXG4gIC5NZW51UGFuZWxfX2J1cmdlcl9fX1VTWVYxIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAuTWVudVBhbmVsX19idXJnZXJfX19VU1lWMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cXG4uTWVudVBhbmVsX19hY2NvcmRlb25fX18xLWd3SyB7XFxuICBwYWRkaW5nOiAxNnB4IDIwcHggMTZweCAyMHB4O1xcbn1cXG5cXG4uTWVudVBhbmVsX19hY2NvcmRlb25BY3RpdmVDb250ZW50X19fMTNQYlIge1xcbiAgcGFkZGluZy10b3A6IDE2cHghaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDE2cHghaW1wb3J0YW50O1xcbn1cXG5cXG4uTWVudVBhbmVsX19jYXRlZ29yeV9fX1ljU280IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xcbiAgZm9udC1zaXplOiAxNy42cHg7XFxuICBmb250LXNpemU6IDE3LjZweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMC43NTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjc1MnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDQ3cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMjguOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjguOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyXFxufVxcblxcbi5NZW51UGFuZWxfX2NhdGVnb3J5X19fWWNTbzQ6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uTWVudVBhbmVsX19jYXRlZ29yeV9fX1ljU280OmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMTgsIDMwLCAxNzQpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL2NvbXBvbmVudHMvTWVudVBhbmVsL01lbnVQYW5lbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSDtFQUNFOztnRkFFOEU7O0VBRTlFOztnRkFFOEU7O0VBRTlFOztnRkFFOEUsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsQ0FBQyxpQ0FBaUM7Q0FDL007O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULE9BQU87RUFDUCxVQUFVO0VBQ1YsWUFBWTs7Q0FFYjs7QUFFRDs7RUFFRTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7R0FDcEI7Q0FDRjs7QUFFRDs7RUFFRTtJQUNFLGVBQWU7R0FDaEI7Q0FDRjs7QUFFRDs7RUFFRTtJQUNFLFdBQVc7SUFDWCxjQUFjO0dBQ2Y7Q0FDRjs7QUFFRDtFQUNFLFdBQVc7O0NBRVo7O0FBRUQ7RUFDRSx1REFBdUQ7VUFDL0MsK0NBQStDO0VBQ3ZELHFDQUFxQztFQUNyQywrQ0FBK0M7RUFDL0MscUNBQXFDOzs7Q0FHdEM7O0FBRUQ7O0VBRUU7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7R0FDbkI7Q0FDRjs7QUFFRDs7RUFFRTtJQUNFLG9CQUFvQjtHQUNyQjtDQUNGOztBQUVEOztFQUVFO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGlCQUFpQjtHQUNsQjtDQUNGOztBQUVEO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtDQUNiOztBQUVEOztFQUVFO0lBQ0UsY0FBYztHQUNmO0NBQ0Y7O0FBRUQ7O0VBRUU7SUFDRSxlQUFlO0dBQ2hCO0NBQ0Y7O0FBRUQ7RUFDRSw2QkFBNkI7Q0FDOUI7O0FBRUQ7RUFDRSw0QkFBNEI7RUFDNUIsK0JBQStCO0NBQ2hDOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usd0JBQXdCO0NBQ3pCXCIsXCJmaWxlXCI6XCJNZW51UGFuZWwuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLnJvb3Qge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAtMTtcXG5cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuXFxuICAucm9vdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiA4LjZyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkge1xcblxcbiAgLnJvb3Qge1xcbiAgICB3aWR0aDogMzEuMnJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAucm9vdCB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxufVxcblxcbi5hY3RpdmUge1xcbiAgei1pbmRleDogNDtcXG4gIFxcbn1cXG5cXG4uZHJhd2VyIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDIuMXJlbSByZ2JhKDIxOCwgMjE4LCAyMTgsIC41KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDIuMXJlbSByZ2JhKDIxOCwgMjE4LCAyMTgsIC41KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAyLjFyZW0gcmdiYSgyMTgsIDIxOCwgMjE4LCAuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFxuXFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcblxcbiAgLmRyYXdlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDU0NHB4KSB7XFxuXFxuICAuZHJhd2VyIHtcXG4gICAgcGFkZGluZy10b3A6IDcuNXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAuZHJhd2VyIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogMjAwcHggMHB4IDM4cHggMHB4O1xcbiAgICBtYXgtd2lkdGg6IDIxN3B4O1xcbiAgfVxcbn1cXG5cXG4uYnVyZ2VyIHtcXG4gIHRvcDogMzhweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcblxcbiAgLmJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcbiAgLmJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cXG4uYWNjb3JkZW9uIHtcXG4gIHBhZGRpbmc6IDE2cHggMjBweCAxNnB4IDIwcHg7XFxufVxcblxcbi5hY2NvcmRlb25BY3RpdmVDb250ZW50IHtcXG4gIHBhZGRpbmctdG9wOiAxNnB4IWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4IWltcG9ydGFudDtcXG59XFxuXFxuLmNhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xcbiAgZm9udC1zaXplOiAxNy42cHg7XFxuICBmb250LXNpemU6IDE3LjZweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMC43NTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjc1MnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDQ3cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMjguOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjguOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyXFxufVxcblxcbi5jYXRlZ29yeTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5jYXRlZ29yeTpob3ZlciB7XFxuICBjb2xvcjogcmdiKDE4LCAzMCwgMTc0KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJNZW51UGFuZWxfX3Jvb3RfX18yN2FDOFwiLFxuXHRcImFjdGl2ZVwiOiBcIk1lbnVQYW5lbF9fYWN0aXZlX19fMkJpcXJcIixcblx0XCJkcmF3ZXJcIjogXCJNZW51UGFuZWxfX2RyYXdlcl9fX3l1Y0lVXCIsXG5cdFwiYnVyZ2VyXCI6IFwiTWVudVBhbmVsX19idXJnZXJfX19VU1lWMVwiLFxuXHRcImFjY29yZGVvblwiOiBcIk1lbnVQYW5lbF9fYWNjb3JkZW9uX19fMS1nd0tcIixcblx0XCJhY2NvcmRlb25BY3RpdmVDb250ZW50XCI6IFwiTWVudVBhbmVsX19hY2NvcmRlb25BY3RpdmVDb250ZW50X19fMTNQYlJcIixcblx0XCJjYXRlZ29yeVwiOiBcIk1lbnVQYW5lbF9fY2F0ZWdvcnlfX19ZY1NvNFwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL01lbnVQYW5lbC9NZW51UGFuZWwuY3NzXG4vLyBtb2R1bGUgaWQgPSA4Mjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9ub3JtYWxpemUuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL25vcm1hbGl6ZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vbm9ybWFsaXplLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDgyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY3LjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW5cXG4gKiAgICBJRSBvbiBXaW5kb3dzIFBob25lIGFuZCBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cXG4gKi9cXG5cXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5tYWluIHsgLyogMSAqL1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBtYXJnaW4gaW4gSUUgOC5cXG4gKi9cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSBnYXBzIGluIGxpbmtzIHVuZGVybGluZSBpbiBpT1MgOCsgYW5kIFNhZmFyaSA4Ky5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctIGFuZCBGaXJlZm94IDM5LS5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgdGhlIGR1cGxpY2F0ZSBhcHBsaWNhdGlvbiBvZiBgYm9sZGVyYCBieSB0aGUgbmV4dCBydWxlIGluIFNhZmFyaSA2LlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzdHlsZSBpbiBBbmRyb2lkIDQuMy0uXFxuICovXFxuXFxuZGZuIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGJhY2tncm91bmQgYW5kIGNvbG9yIGluIElFIDktLlxcbiAqL1xcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hdWRpbyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGlPUyA0LTcuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAtLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEhpZGUgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqL1xcblxcbnN2Zzpub3QoOnJvb3QpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gUHJldmVudCBhIFdlYktpdCBidWcgd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gIGFuZCBgdmlkZW9gXFxuICogICAgY29udHJvbHMgaW4gQW5kcm9pZCA0LlxcbiAqIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgW3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAtLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC0uXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgYW5kIGNhbmNlbCBidXR0b25zIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzLCAvKiAxICovXFxubWVudSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIFNjcmlwdGluZ1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuY2FudmFzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogSGlkZGVuXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC0uXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNEVBQTRFOztBQUU1RTtnRkFDZ0Y7O0FBRWhGOzs7O0dBSUc7O0FBRUg7RUFDRSxrQkFBa0IsQ0FBQyxPQUFPO0VBQzFCLDJCQUEyQixDQUFDLE9BQU87RUFDbkMsK0JBQStCLENBQUMsT0FBTztDQUN4Qzs7QUFFRDtnRkFDZ0Y7O0FBRWhGOztHQUVHOztBQUVIO0VBQ0UsVUFBVTtDQUNYOztBQUVEOztHQUVHOztBQUVIOzs7Ozs7RUFNRSxlQUFlO0NBQ2hCOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7O0dBR0c7O0FBRUg7O09BRU8sT0FBTztFQUNaLGVBQWU7Q0FDaEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0UsZ0NBQWdDO1VBQ3hCLHdCQUF3QixDQUFDLE9BQU87RUFDeEMsVUFBVSxDQUFDLE9BQU87RUFDbEIsa0JBQWtCLENBQUMsT0FBTztDQUMzQjs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSxrQ0FBa0MsQ0FBQyxPQUFPO0VBQzFDLGVBQWUsQ0FBQyxPQUFPO0NBQ3hCOztBQUVEO2dGQUNnRjs7QUFFaEY7OztHQUdHOztBQUVIO0VBQ0UsOEJBQThCLENBQUMsT0FBTztFQUN0QyxzQ0FBc0MsQ0FBQyxPQUFPO0NBQy9DOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLG9CQUFvQixDQUFDLE9BQU87RUFDNUIsMkJBQTJCLENBQUMsT0FBTztFQUNuQywwQ0FBMEM7VUFDbEMsa0NBQWtDLENBQUMsT0FBTztDQUNuRDs7QUFFRDs7R0FFRzs7QUFFSDs7RUFFRSxxQkFBcUI7Q0FDdEI7O0FBRUQ7O0dBRUc7O0FBRUg7O0VBRUUsb0JBQW9CO0NBQ3JCOztBQUVEOzs7R0FHRzs7QUFFSDs7O0VBR0Usa0NBQWtDLENBQUMsT0FBTztFQUMxQyxlQUFlLENBQUMsT0FBTztDQUN4Qjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0NBQ2I7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxlQUFlO0NBQ2hCOztBQUVEOzs7R0FHRzs7QUFFSDs7RUFFRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7R0FFRzs7QUFFSDs7RUFFRSxzQkFBc0I7Q0FDdkI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxjQUFjO0VBQ2QsVUFBVTtDQUNYOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO2dGQUNnRjs7QUFFaEY7OztHQUdHOztBQUVIOzs7OztFQUtFLHdCQUF3QixDQUFDLE9BQU87RUFDaEMsZ0JBQWdCLENBQUMsT0FBTztFQUN4QixrQkFBa0IsQ0FBQyxPQUFPO0VBQzFCLFVBQVUsQ0FBQyxPQUFPO0NBQ25COztBQUVEOzs7R0FHRzs7QUFFSDtRQUNRLE9BQU87RUFDYixrQkFBa0I7Q0FDbkI7O0FBRUQ7OztHQUdHOztBQUVIO1NBQ1MsT0FBTztFQUNkLHFCQUFxQjtDQUN0Qjs7QUFFRDs7OztHQUlHOztBQUVIOzs7O0VBSUUsMkJBQTJCLENBQUMsT0FBTztDQUNwQzs7QUFFRDs7R0FFRzs7QUFFSDs7OztFQUlFLG1CQUFtQjtFQUNuQixXQUFXO0NBQ1o7O0FBRUQ7O0dBRUc7O0FBRUg7Ozs7RUFJRSwrQkFBK0I7Q0FDaEM7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSwrQkFBK0I7Q0FDaEM7O0FBRUQ7Ozs7O0dBS0c7O0FBRUg7RUFDRSwrQkFBK0I7VUFDdkIsdUJBQXVCLENBQUMsT0FBTztFQUN2QyxlQUFlLENBQUMsT0FBTztFQUN2QixlQUFlLENBQUMsT0FBTztFQUN2QixnQkFBZ0IsQ0FBQyxPQUFPO0VBQ3hCLFdBQVcsQ0FBQyxPQUFPO0VBQ25CLG9CQUFvQixDQUFDLE9BQU87Q0FDN0I7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0Usc0JBQXNCLENBQUMsT0FBTztFQUM5Qix5QkFBeUIsQ0FBQyxPQUFPO0NBQ2xDOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDs7O0dBR0c7O0FBRUg7O0VBRUUsK0JBQStCO1VBQ3ZCLHVCQUF1QixDQUFDLE9BQU87RUFDdkMsV0FBVyxDQUFDLE9BQU87Q0FDcEI7O0FBRUQ7O0dBRUc7O0FBRUg7O0VBRUUsYUFBYTtDQUNkOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLDhCQUE4QixDQUFDLE9BQU87RUFDdEMscUJBQXFCLENBQUMsT0FBTztDQUM5Qjs7QUFFRDs7R0FFRzs7QUFFSDs7RUFFRSx5QkFBeUI7Q0FDMUI7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0UsMkJBQTJCLENBQUMsT0FBTztFQUNuQyxjQUFjLENBQUMsT0FBTztDQUN2Qjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOzs7R0FHRzs7QUFFSDs7RUFFRSxlQUFlO0NBQ2hCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO2dGQUNnRjs7QUFFaEY7O0dBRUc7O0FBRUg7RUFDRSxzQkFBc0I7Q0FDdkI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7R0FFRzs7QUFFSDtFQUNFLGNBQWM7Q0FDZlwiLFwiZmlsZVwiOlwibm9ybWFsaXplLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2Ny4wLjAgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluXFxuICogICAgSUUgb24gV2luZG93cyBQaG9uZSBhbmQgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXFxuICovXFxuXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxubWFpbiB7IC8qIDEgKi9cXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgbWFyZ2luIGluIElFIDguXFxuICovXFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMWVtIDQwcHg7XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgZ2FwcyBpbiBsaW5rcyB1bmRlcmxpbmUgaW4gaU9TIDgrIGFuZCBTYWZhcmkgOCsuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0czsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LSBhbmQgRmlyZWZveCAzOS0uXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IHRoZSBkdXBsaWNhdGUgYXBwbGljYXRpb24gb2YgYGJvbGRlcmAgYnkgdGhlIG5leHQgcnVsZSBpbiBTYWZhcmkgNi5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc3R5bGUgaW4gQW5kcm9pZCA0LjMtLlxcbiAqL1xcblxcbmRmbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBiYWNrZ3JvdW5kIGFuZCBjb2xvciBpbiBJRSA5LS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBpT1MgNC03LlxcbiAqL1xcblxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLS5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBIaWRlIHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKi9cXG5cXG5zdmc6bm90KDpyb290KSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIFByZXZlbnQgYSBXZWJLaXQgYnVnIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYCBhbmQgYHZpZGVvYFxcbiAqICAgIGNvbnRyb2xzIGluIEFuZHJvaWQgNC5cXG4gKiAyLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5odG1sIFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLS5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAtLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGFuZCBjYW5jZWwgYnV0dG9ucyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSwgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscywgLyogMSAqL1xcbm1lbnUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBTY3JpcHRpbmdcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmNhbnZhcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIEhpZGRlblxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAtLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInNvdXJjZU1hcFwiOnRydWUsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDgyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL3JlYWN0LWZsZXhib3gtZ3JpZC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vcmVhY3QtZmxleGJveC1ncmlkLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9yZWFjdC1mbGV4Ym94LWdyaWQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWZsZXhib3gtZ3JpZC9kaXN0L3JlYWN0LWZsZXhib3gtZ3JpZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDgzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gXCIuZmxleGJveGdyaWRfX2NvbnRhaW5lci1mbHVpZF9fXzJsVUVTLFxcbi5mbGV4Ym94Z3JpZF9fY29udGFpbmVyX19fUjJ6VTkge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fY29udGFpbmVyLWZsdWlkX19fMmxVRVMge1xcbiAgcGFkZGluZy1yaWdodDogMzJweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX3Jvd19fXzF5X21nIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gIC1tcy1mbGV4OiAwIDEgYXV0bztcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XFxuICBtYXJnaW4tbGVmdDogLThweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX3Jvd19fXzF5X21nLmZsZXhib3hncmlkX19yZXZlcnNlX19fMVg2ODIge1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiByZXZlcnNlO1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2xfX18zUnFQUC5mbGV4Ym94Z3JpZF9fcmV2ZXJzZV9fXzFYNjgyIHtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IHJldmVyc2U7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14c19fXzFST0hSLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLTFfX19WdE5JSyxcXG4uZmxleGJveGdyaWRfX2NvbC14cy0yX19fMzZuRGEsXFxuLmZsZXhib3hncmlkX19jb2wteHMtM19fXzJmMlFsLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLTRfX19UeEJKZyxcXG4uZmxleGJveGdyaWRfX2NvbC14cy01X19fMUhrSzUsXFxuLmZsZXhib3hncmlkX19jb2wteHMtNl9fXzFEaFY2LFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLTdfX18zbzJtLSxcXG4uZmxleGJveGdyaWRfX2NvbC14cy04X19fM0FSR2MsXFxuLmZsZXhib3hncmlkX19jb2wteHMtOV9fXzE1cWZsLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLTEwX19fMkFXTnYsXFxuLmZsZXhib3hncmlkX19jb2wteHMtMTFfX18zSC02RixcXG4uZmxleGJveGdyaWRfX2NvbC14cy0xMl9fX3BoYnRFLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC0wX19fMTBDN0UsXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTFfX18xMm9fUixcXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtMl9fXzJIaC1CLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC0zX19fOE5DeXMsXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTRfX19kQTBQMSxcXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtNV9fXzJNYmRGLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC02X19fM04zYnQsXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTdfX18xeVFERyxcXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtOF9fXzJhRWNXLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC05X19fMmhhQnYsXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTEwX19fMVFzVmcsXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTExX19fMjl4UW4sXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTEyX19fMVhXRmIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gIC1tcy1mbGV4OiAwIDAgYXV0bztcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogOHB4O1xcbiAgcGFkZGluZy1yaWdodDogOHB4O1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14c19fXzFST0hSIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xcbiAgZmxleC1iYXNpczogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtMV9fX1Z0TklLIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4LjMzMzMzMzMzJTtcXG4gIGZsZXgtYmFzaXM6IDguMzMzMzMzMzMlO1xcbiAgbWF4LXdpZHRoOiA4LjMzMzMzMzMzJTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtMl9fXzM2bkRhIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxNi42NjY2NjY2NyU7XFxuICBmbGV4LWJhc2lzOiAxNi42NjY2NjY2NyU7XFxuICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtM19fXzJmMlFsIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAyNSU7XFxuICBmbGV4LWJhc2lzOiAyNSU7XFxuICBtYXgtd2lkdGg6IDI1JTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtNF9fX1R4QkpnIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAzMy4zMzMzMzMzMyU7XFxuICBmbGV4LWJhc2lzOiAzMy4zMzMzMzMzMyU7XFxuICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzJTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtNV9fXzFIa0s1IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA0MS42NjY2NjY2NyU7XFxuICBmbGV4LWJhc2lzOiA0MS42NjY2NjY2NyU7XFxuICBtYXgtd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtNl9fXzFEaFY2IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1MCU7XFxuICBmbGV4LWJhc2lzOiA1MCU7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtN19fXzNvMm0tIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1OC4zMzMzMzMzMyU7XFxuICBmbGV4LWJhc2lzOiA1OC4zMzMzMzMzMyU7XFxuICBtYXgtd2lkdGg6IDU4LjMzMzMzMzMzJTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtOF9fXzNBUkdjIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA2Ni42NjY2NjY2NyU7XFxuICBmbGV4LWJhc2lzOiA2Ni42NjY2NjY2NyU7XFxuICBtYXgtd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtOV9fXzE1cWZsIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA3NSU7XFxuICBmbGV4LWJhc2lzOiA3NSU7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtMTBfX18yQVdOdiB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogODMuMzMzMzMzMzMlO1xcbiAgZmxleC1iYXNpczogODMuMzMzMzMzMzMlO1xcbiAgbWF4LXdpZHRoOiA4My4zMzMzMzMzMyU7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLTExX19fM0gtNkYge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDkxLjY2NjY2NjY3JTtcXG4gIGZsZXgtYmFzaXM6IDkxLjY2NjY2NjY3JTtcXG4gIG1heC13aWR0aDogOTEuNjY2NjY2NjclO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy0xMl9fX3BoYnRFIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTBfX18xMEM3RSB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTFfX18xMm9fUiB7XFxuICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC0yX19fMkhoLUIge1xcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTNfX184TkN5cyB7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtNF9fX2RBMFAxIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC01X19fMk1iZEYge1xcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTZfX18zTjNidCB7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtN19fXzF5UURHIHtcXG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC04X19fMmFFY1cge1xcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTlfX18yaGFCdiB7XFxuICBtYXJnaW4tbGVmdDogNzUlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtMTBfX18xUXNWZyB7XFxuICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtMTFfX18yOXhRbiB7XFxuICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX3N0YXJ0LXhzX19faDhxZEEge1xcbiAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NlbnRlci14c19fXzFKV29uIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2VuZC14c19fXzMzTWt1IHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fdG9wLXhzX19fVWhBLVYge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcbiAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fbWlkZGxlLXhzX19fMWg1dDMge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2JvdHRvbS14c19fXzJ0UlVhIHtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2Fyb3VuZC14c19fXzFva2tLIHtcXG4gIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmZsZXhib3hncmlkX19iZXR3ZWVuLXhzX19fV0ZQODQge1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fZmlyc3QteHNfX19Yb29zSyB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAwO1xcbiAgLW1zLWZsZXgtb3JkZXI6IC0xO1xcbiAgb3JkZXI6IC0xO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2xhc3QteHNfX19IbmxSdyB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyO1xcbiAgLW1zLWZsZXgtb3JkZXI6IDE7XFxuICBvcmRlcjogMTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0OGVtKSB7XFxuICAuZmxleGJveGdyaWRfX2NvbnRhaW5lcl9fX1IyelU5IHtcXG4gICAgd2lkdGg6IDQ5cmVtO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc21fX18zdFoteixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTFfX18yR2NhNixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTJfX19ZRVR6YSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTNfX18yaXJaUSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTRfX18za2o3UyxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTVfX19nQXh1USxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTZfX192VWRLSCxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTdfX18yMkljUSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLThfX18yX1loQixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTlfX18ydWJweCxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTEwX19fMjYyRzksXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS0xMV9fXzM5czdKLFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tMTJfX18xZTVVayxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC0wX19fbGxRNi0sXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtMV9fXzFQRld1LFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTJfX18xRGdiTyxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC0zX19fM1c1SXYsXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtNF9fXzNZVG9HLFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTVfX182MDlWbyxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC02X19fVENlVlEsXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtN19fX2NzdkJ1LFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LThfX18xMVBZSCxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC05X19fMjRFdnksXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtMTBfX18xLWxjRSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC0xMV9fXzJ5bkZxLFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTEyX19fM01CTWkge1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgLW1zLWZsZXg6IDAgMCBhdXRvO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtX19fM3RaLXoge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcXG4gICAgZmxleC1iYXNpczogMDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tMV9fXzJHY2E2IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDguMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA4LjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTJfX19ZRVR6YSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxNi42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDE2LjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS0zX19fMmlyWlEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMjUlO1xcbiAgICBmbGV4LWJhc2lzOiAyNSU7XFxuICAgIG1heC13aWR0aDogMjUlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tNF9fXzNrajdTIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDMzLjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogMzMuMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTVfX19nQXh1USB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA0MS42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDQxLjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS02X19fdlVkS0gge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTAlO1xcbiAgICBmbGV4LWJhc2lzOiA1MCU7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tN19fXzIySWNRIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDU4LjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogNTguMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLThfX18yX1loQiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA2Ni42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDY2LjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS05X19fMnVicHgge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNzUlO1xcbiAgICBmbGV4LWJhc2lzOiA3NSU7XFxuICAgIG1heC13aWR0aDogNzUlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tMTBfX18yNjJHOSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4My4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDgzLjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS0xMV9fXzM5czdKIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDkxLjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogOTEuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTEyX19fMWU1VWsge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG4gICAgZmxleC1iYXNpczogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTBfX19sbFE2LSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTFfX18xUEZXdSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC0yX19fMURnYk8ge1xcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTNfX18zVzVJdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtNF9fXzNZVG9HIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC01X19fNjA5Vm8ge1xcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTZfX19UQ2VWUSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtN19fX2NzdkJ1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC04X19fMTFQWUgge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTlfX18yNEV2eSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtMTBfX18xLWxjRSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtMTFfX18yeW5GcSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX3N0YXJ0LXNtX19fM0RpbHUge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NlbnRlci1zbV9fXzM5SFdxIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2VuZC1zbV9fXzNCMDdmIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fdG9wLXNtX19fMWJlZ1Mge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX21pZGRsZS1zbV9fX09oNEs3IHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fYm90dG9tLXNtX19fMWpQbmMge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xcbiAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2Fyb3VuZC1zbV9fXzNmZmJiIHtcXG4gICAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2JldHdlZW4tc21fX18xUmNhZiB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fZmlyc3Qtc21fX18yR3poYiB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDA7XFxuICAgIC1tcy1mbGV4LW9yZGVyOiAtMTtcXG4gICAgb3JkZXI6IC0xO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19sYXN0LXNtX19fMXBGOHcge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyO1xcbiAgICAtbXMtZmxleC1vcmRlcjogMTtcXG4gICAgb3JkZXI6IDE7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkge1xcbiAgLmZsZXhib3hncmlkX19jb250YWluZXJfX19SMnpVOSB7XFxuICAgIHdpZHRoOiA2NXJlbTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kX19fMmxiem0sXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC0xX19fMUxhcGosXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC0yX19fMWNfNHQsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC0zX19fM0FOUlMsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC00X19fYV9GeUssXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC01X19fWVhsTXEsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC02X19fNU9TeUosXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC03X19fMVpwLXIsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC04X19fMzk3OUosXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC05X19fMmZYdUMsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC0xMF9fXzJKYmVlLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtMTFfX18zZHJiSyxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTEyX19felIybEssXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtMF9fXzJPM3ZSLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTFfX18yWE5DeixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC0yX19fMnQtTlYsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtM19fXzF6bFRQLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTRfX18zYUh4eixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC01X19fM1MyR3csXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtNl9fXzNLVjBWLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTdfX18xT2RDRCxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC04X19fMnZGYlEsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtOV9fXzFxOTV4LFxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTEwX19fMkNlTUssXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtMTFfX18zdTZYVyxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC0xMl9fX2VLVWxMIHtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZF9fXzJsYnptIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTFfX18xTGFwaiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4LjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogOC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC0yX19fMWNfNHQge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiAxNi42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogMTYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtM19fXzNBTlJTIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDI1JTtcXG4gICAgZmxleC1iYXNpczogMjUlO1xcbiAgICBtYXgtd2lkdGg6IDI1JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTRfX19hX0Z5SyB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAzMy4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDMzLjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC01X19fWVhsTXEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNDEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA0MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNDEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtNl9fXzVPU3lKIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDUwJTtcXG4gICAgZmxleC1iYXNpczogNTAlO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTdfX18xWnAtciB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1OC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDU4LjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC04X19fMzk3OUoge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNjYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA2Ni42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNjYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtOV9fXzJmWHVDIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDc1JTtcXG4gICAgZmxleC1iYXNpczogNzUlO1xcbiAgICBtYXgtd2lkdGg6IDc1JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTEwX19fMkpiZWUge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogODMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA4My4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtMTFfX18zZHJiSyB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA5MS42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDkxLjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC0xMl9fX3pSMmxLIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC0wX19fMk8zdlIge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC0xX19fMlhOQ3oge1xcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtMl9fXzJ0LU5WIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC0zX19fMXpsVFAge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTRfX18zYUh4eiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtNV9fXzNTMkd3IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC02X19fM0tWMFYge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTdfX18xT2RDRCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtOF9fXzJ2RmJRIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC05X19fMXE5NXgge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTEwX19fMkNlTUsge1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTExX19fM3U2WFcge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19zdGFydC1tZF9fXzJCLXNnIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jZW50ZXItbWRfX18zVkRmUyB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19lbmQtbWRfX18yZkpXeSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX3RvcC1tZF9fXzEyRkRnIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19taWRkbGUtbWRfX18zd0lKUiB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2JvdHRvbS1tZF9fXzJ2MWNkIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19hcm91bmQtbWRfX18xeDU0XyB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19iZXR3ZWVuLW1kX19fWG4tOXgge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2ZpcnN0LW1kX19fM2o0dDUge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAwO1xcbiAgICAtbXMtZmxleC1vcmRlcjogLTE7XFxuICAgIG9yZGVyOiAtMTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fbGFzdC1tZF9fXzN5NzJlIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IDE7XFxuICAgIG9yZGVyOiAxO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcXG4gIC5mbGV4Ym94Z3JpZF9fY29udGFpbmVyX19fUjJ6VTkge1xcbiAgICB3aWR0aDogNzZyZW07XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZ19fXzNTYVhkLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctMV9fXzJWTWl2LFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctMl9fXzIxZEtLLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctM19fX3ZiQUNwLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctNF9fXzJoenk4LFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctNV9fXzEtZzctLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctNl9fXzIxbGY4LFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctN19fXzNrQkcxLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctOF9fX2FmRUN4LFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctOV9fXzEwbWRsLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctMTBfX18xeVRmaixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLTExX19fM2hNUnUsXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy0xMl9fXzFybEFBLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTBfX18zS00zeCxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC0xX19fS2h2cVIsXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtMl9fXzFaRF96LFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTNfX18yR1FWYSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC00X19fMXpQWmosXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtNV9fX0tqOElxLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTZfX18zbnVuMyxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC03X19fWVRtbjksXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtOF9fXzFxRzJ0LFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTlfX19xZDI3QixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC0xMF9fXzJZU2NQLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTExX19fM3BQdmosXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtMTJfX18yckhFZyB7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAtbXMtZmxleDogMCAwIGF1dG87XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGdfX18zU2FYZCB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xcbiAgICBmbGV4LWJhc2lzOiAwO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy0xX19fMlZNaXYge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDguMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctMl9fXzIxZEtLIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDE2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogMTYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLTNfX192YkFDcCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAyNSU7XFxuICAgIGZsZXgtYmFzaXM6IDI1JTtcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy00X19fMmh6eTgge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMzMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiAzMy4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctNV9fXzEtZzctIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDQxLjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNDEuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLTZfX18yMWxmOCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1MCU7XFxuICAgIGZsZXgtYmFzaXM6IDUwJTtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy03X19fM2tCRzEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTguMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA1OC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctOF9fX2FmRUN4IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDY2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNjYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLTlfX18xMG1kbCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA3NSU7XFxuICAgIGZsZXgtYmFzaXM6IDc1JTtcXG4gICAgbWF4LXdpZHRoOiA3NSU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy0xMF9fXzF5VGZqIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDgzLjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogODMuMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLTExX19fM2hNUnUge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOTEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA5MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctMTJfX18xcmxBQSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtMF9fXzNLTTN4IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtMV9fX0todnFSIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTJfX18xWkRfeiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtM19fXzJHUVZhIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC00X19fMXpQWmoge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTVfX19LajhJcSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtNl9fXzNudW4zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC03X19fWVRtbjkge1xcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LThfX18xcUcydCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtOV9fX3FkMjdCIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC0xMF9fXzJZU2NQIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC0xMV9fXzNwUHZqIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fc3RhcnQtbGdfX19hZ2V1OSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY2VudGVyLWxnX19fM0gzU0kge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fZW5kLWxnX19fMjdfZk0ge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX190b3AtbGdfX18xdFdXdyB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fbWlkZGxlLWxnX19fbm9jR0kge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19ib3R0b20tbGdfX19JWUdrcyB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fYXJvdW5kLWxnX19felpDMkMge1xcbiAgICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fYmV0d2Vlbi1sZ19fXzJuanprIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19maXJzdC1sZ19fXzZka3NPIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IC0xO1xcbiAgICBvcmRlcjogLTE7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2xhc3QtbGdfX194R0J2UyB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDI7XFxuICAgIC1tcy1mbGV4LW9yZGVyOiAxO1xcbiAgICBvcmRlcjogMTtcXG4gIH1cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9ub2RlX21vZHVsZXMvcmVhY3QtZmxleGJveC1ncmlkL2Rpc3QvcmVhY3QtZmxleGJveC1ncmlkLmNzc1xuLy8gbW9kdWxlIGlkID0gODMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9MYXlvdXQuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL0xheW91dC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9MYXlvdXQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDgzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLypcXG4gKiBub3JtYWxpemUuY3NzIGlzIGltcG9ydGVkIGluIEpTIGZpbGUuXFxuICogSWYgeW91IGltcG9ydCBleHRlcm5hbCBDU1MgZmlsZSBmcm9tIHlvdXIgaW50ZXJuYWwgQ1NTXFxuICogdGhlbiBpdCB3aWxsIGJlIGlubGluZWQgYW5kIHByb2Nlc3NlZCB3aXRoIENTUyBtb2R1bGVzLlxcbiAqL1xcblxcbi8qXFxuICogQmFzZSBzdHlsZXNcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbmh0bWwge1xcbiAgY29sb3I6ICMyMjI7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnSGVsdmV0aWNhTmV1ZS1MaWdodCcsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS4zNzU7IC8qIH4yMnB4ICovXFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZiFpbXBvcnRhbnQ7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogMzIwcHg7XFxufVxcblxcbmEge1xcbiAgY29sb3I6ICMwMDc0YzI7XFxufVxcblxcbioge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uTGF5b3V0X19jb250YWluZXJfX18xZzVLRyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuI0xheW91dF9fYXBwX19fM0V6TFIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLypcXG4gKiBSZW1vdmUgdGV4dC1zaGFkb3cgaW4gc2VsZWN0aW9uIGhpZ2hsaWdodDpcXG4gKiBodHRwczovL3R3aXR0ZXIuY29tL21pa2V0YXlsci9zdGF0dXMvMTIyMjg4MDUzMDFcXG4gKlxcbiAqIFRoZXNlIHNlbGVjdGlvbiBydWxlIHNldHMgaGF2ZSB0byBiZSBzZXBhcmF0ZS5cXG4gKiBDdXN0b21pemUgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggeW91ciBkZXNpZ24uXFxuICovXFxuXFxuOjotbW96LXNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG4gKiBBIGJldHRlciBsb29raW5nIGRlZmF1bHQgaG9yaXpvbnRhbCBydWxlXFxuICovXFxuXFxuaHIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuICogUmVtb3ZlIHRoZSBnYXAgYmV0d2VlbiBhdWRpbywgY2FudmFzLCBpZnJhbWVzLFxcbiAqIGltYWdlcywgdmlkZW9zIGFuZCB0aGUgYm90dG9tIG9mIHRoZWlyIGNvbnRhaW5lcnM6XFxuICogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvaXNzdWVzLzQ0MFxcbiAqL1xcblxcbmF1ZGlvLFxcbmNhbnZhcyxcXG5pZnJhbWUsXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKlxcbiAqIFJlbW92ZSBkZWZhdWx0IGZpZWxkc2V0IHN0eWxlcy5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcbiAqIEFsbG93IG9ubHkgdmVydGljYWwgcmVzaXppbmcgb2YgdGV4dGFyZWFzLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuICogQnJvd3NlciB1cGdyYWRlIHByb21wdFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLmJyb3dzZXJ1cGdyYWRlIHtcXG4gIG1hcmdpbjogMC4yZW0gMDtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcblxcbi8qXFxuICogUHJpbnQgc3R5bGVzXFxuICogSW5saW5lZCB0byBhdm9pZCB0aGUgYWRkaXRpb25hbCBIVFRQIHJlcXVlc3Q6XFxuICogaHR0cDovL3d3dy5waHBpZWQuY29tL2RlbGF5LWxvYWRpbmcteW91ci1wcmludC1jc3MvXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5AbWVkaWEgcHJpbnQge1xcbiAgKixcXG4gICo6YmVmb3JlLFxcbiAgKjphZnRlciB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IC8qIEJsYWNrIHByaW50cyBmYXN0ZXI6IGh0dHA6Ly93d3cuc2FuYmVpamkuY29tL2FyY2hpdmVzLzk1MyAqL1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICBhLFxcbiAgYTp2aXNpdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxuXFxuICBhW2hyZWZdOmFmdGVyIHtcXG4gICAgY29udGVudDogJyAoJyBhdHRyKGhyZWYpICcpJztcXG4gIH1cXG5cXG4gIGFiYnJbdGl0bGVdOmFmdGVyIHtcXG4gICAgY29udGVudDogJyAoJyBhdHRyKHRpdGxlKSAnKSc7XFxuICB9XFxuXFxuICAvKlxcbiAgICogRG9uJ3Qgc2hvdyBsaW5rcyB0aGF0IGFyZSBmcmFnbWVudCBpZGVudGlmaWVycyxcXG4gICAqIG9yIHVzZSB0aGUgYGphdmFzY3JpcHQ6YCBwc2V1ZG8gcHJvdG9jb2xcXG4gICAqL1xcblxcbiAgYVtocmVmXj0nIyddOmFmdGVyLFxcbiAgYVtocmVmXj0namF2YXNjcmlwdDonXTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgfVxcblxcbiAgcHJlLFxcbiAgYmxvY2txdW90ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBQcmludGluZyBUYWJsZXM6XFxuICAgKiBodHRwOi8vY3NzLWRpc2N1c3MuaW5jdXRpby5jb20vd2lraS9QcmludGluZ19UYWJsZXNcXG4gICAqL1xcblxcbiAgdGhlYWQge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XFxuICB9XFxuXFxuICB0cixcXG4gIGltZyB7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgcCxcXG4gIGgyLFxcbiAgaDMge1xcbiAgICBvcnBoYW5zOiAzO1xcbiAgICB3aWRvd3M6IDM7XFxuICB9XFxuXFxuICBoMixcXG4gIGgzIHtcXG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XFxuICB9XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HOztBQUVIOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDO0NBQy9NOztBQUVEOzs7O0dBSUc7O0FBRUg7O2dGQUVnRjs7QUFFaEY7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5REFBeUQ7RUFDekQsbUJBQW1CLENBQUMsV0FBVztDQUNoQzs7QUFFRDtFQUNFLG1FQUFtRTtFQUNuRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsK0JBQStCO1VBQ3ZCLHVCQUF1QjtDQUNoQzs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7Ozs7OztHQU1HOztBQUVIO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7Q0FDbkI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLFdBQVc7Q0FDWjs7QUFFRDs7OztHQUlHOztBQUVIOzs7Ozs7RUFNRSx1QkFBdUI7Q0FDeEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7Q0FDWjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDs7Z0ZBRWdGOztBQUVoRjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjs7QUFFRDs7OztnRkFJZ0Y7O0FBRWhGO0VBQ0U7OztJQUdFLG1DQUFtQztJQUNuQyx1QkFBdUIsQ0FBQywrREFBK0Q7SUFDdkYsb0NBQW9DO1lBQzVCLDRCQUE0QjtJQUNwQyw2QkFBNkI7R0FDOUI7O0VBRUQ7O0lBRUUsMkJBQTJCO0dBQzVCOztFQUVEO0lBQ0UsNkJBQTZCO0dBQzlCOztFQUVEO0lBQ0UsOEJBQThCO0dBQy9COztFQUVEOzs7S0FHRzs7RUFFSDs7SUFFRSxZQUFZO0dBQ2I7O0VBRUQ7O0lBRUUsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtHQUMxQjs7RUFFRDs7O0tBR0c7O0VBRUg7SUFDRSw0QkFBNEI7R0FDN0I7O0VBRUQ7O0lBRUUseUJBQXlCO0dBQzFCOztFQUVEO0lBQ0UsMkJBQTJCO0dBQzVCOztFQUVEOzs7SUFHRSxXQUFXO0lBQ1gsVUFBVTtHQUNYOztFQUVEOztJQUVFLHdCQUF3QjtHQUN6QjtDQUNGXCIsXCJmaWxlXCI6XCJMYXlvdXQuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4vKlxcbiAqIG5vcm1hbGl6ZS5jc3MgaXMgaW1wb3J0ZWQgaW4gSlMgZmlsZS5cXG4gKiBJZiB5b3UgaW1wb3J0IGV4dGVybmFsIENTUyBmaWxlIGZyb20geW91ciBpbnRlcm5hbCBDU1NcXG4gKiB0aGVuIGl0IHdpbGwgYmUgaW5saW5lZCBhbmQgcHJvY2Vzc2VkIHdpdGggQ1NTIG1vZHVsZXMuXFxuICovXFxuXFxuLypcXG4gKiBCYXNlIHN0eWxlc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuaHRtbCB7XFxuICBjb2xvcjogIzIyMjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTsgLyogfjIycHggKi9cXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmIWltcG9ydGFudDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAzMjBweDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogIzAwNzRjMjtcXG59XFxuXFxuKiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbiNhcHAge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLypcXG4gKiBSZW1vdmUgdGV4dC1zaGFkb3cgaW4gc2VsZWN0aW9uIGhpZ2hsaWdodDpcXG4gKiBodHRwczovL3R3aXR0ZXIuY29tL21pa2V0YXlsci9zdGF0dXMvMTIyMjg4MDUzMDFcXG4gKlxcbiAqIFRoZXNlIHNlbGVjdGlvbiBydWxlIHNldHMgaGF2ZSB0byBiZSBzZXBhcmF0ZS5cXG4gKiBDdXN0b21pemUgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggeW91ciBkZXNpZ24uXFxuICovXFxuXFxuOjotbW96LXNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG4gKiBBIGJldHRlciBsb29raW5nIGRlZmF1bHQgaG9yaXpvbnRhbCBydWxlXFxuICovXFxuXFxuaHIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuICogUmVtb3ZlIHRoZSBnYXAgYmV0d2VlbiBhdWRpbywgY2FudmFzLCBpZnJhbWVzLFxcbiAqIGltYWdlcywgdmlkZW9zIGFuZCB0aGUgYm90dG9tIG9mIHRoZWlyIGNvbnRhaW5lcnM6XFxuICogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvaXNzdWVzLzQ0MFxcbiAqL1xcblxcbmF1ZGlvLFxcbmNhbnZhcyxcXG5pZnJhbWUsXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKlxcbiAqIFJlbW92ZSBkZWZhdWx0IGZpZWxkc2V0IHN0eWxlcy5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcbiAqIEFsbG93IG9ubHkgdmVydGljYWwgcmVzaXppbmcgb2YgdGV4dGFyZWFzLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuICogQnJvd3NlciB1cGdyYWRlIHByb21wdFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuOmdsb2JhbCguYnJvd3NlcnVwZ3JhZGUpIHtcXG4gIG1hcmdpbjogMC4yZW0gMDtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcblxcbi8qXFxuICogUHJpbnQgc3R5bGVzXFxuICogSW5saW5lZCB0byBhdm9pZCB0aGUgYWRkaXRpb25hbCBIVFRQIHJlcXVlc3Q6XFxuICogaHR0cDovL3d3dy5waHBpZWQuY29tL2RlbGF5LWxvYWRpbmcteW91ci1wcmludC1jc3MvXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5AbWVkaWEgcHJpbnQge1xcbiAgKixcXG4gICo6YmVmb3JlLFxcbiAgKjphZnRlciB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IC8qIEJsYWNrIHByaW50cyBmYXN0ZXI6IGh0dHA6Ly93d3cuc2FuYmVpamkuY29tL2FyY2hpdmVzLzk1MyAqL1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICBhLFxcbiAgYTp2aXNpdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxuXFxuICBhW2hyZWZdOmFmdGVyIHtcXG4gICAgY29udGVudDogJyAoJyBhdHRyKGhyZWYpICcpJztcXG4gIH1cXG5cXG4gIGFiYnJbdGl0bGVdOmFmdGVyIHtcXG4gICAgY29udGVudDogJyAoJyBhdHRyKHRpdGxlKSAnKSc7XFxuICB9XFxuXFxuICAvKlxcbiAgICogRG9uJ3Qgc2hvdyBsaW5rcyB0aGF0IGFyZSBmcmFnbWVudCBpZGVudGlmaWVycyxcXG4gICAqIG9yIHVzZSB0aGUgYGphdmFzY3JpcHQ6YCBwc2V1ZG8gcHJvdG9jb2xcXG4gICAqL1xcblxcbiAgYVtocmVmXj0nIyddOmFmdGVyLFxcbiAgYVtocmVmXj0namF2YXNjcmlwdDonXTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgfVxcblxcbiAgcHJlLFxcbiAgYmxvY2txdW90ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBQcmludGluZyBUYWJsZXM6XFxuICAgKiBodHRwOi8vY3NzLWRpc2N1c3MuaW5jdXRpby5jb20vd2lraS9QcmludGluZ19UYWJsZXNcXG4gICAqL1xcblxcbiAgdGhlYWQge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XFxuICB9XFxuXFxuICB0cixcXG4gIGltZyB7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgcCxcXG4gIGgyLFxcbiAgaDMge1xcbiAgICBvcnBoYW5zOiAzO1xcbiAgICB3aWRvd3M6IDM7XFxuICB9XFxuXFxuICBoMixcXG4gIGgzIHtcXG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMYXlvdXRfX2NvbnRhaW5lcl9fXzFnNUtHXCIsXG5cdFwiYXBwXCI6IFwiTGF5b3V0X19hcHBfX18zRXpMUlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuY3NzXG4vLyBtb2R1bGUgaWQgPSA4MzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFEQTtBQVNBOzs7O0FBaEJBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQUNBO0FBZ0JBOzs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWEE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQVJBO0FBVUE7QUFDQTtBQUNBOzs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7Ozs7QUFuQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBREE7QUFDQTtBQUNBO0FBNkJBOzs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQVBBO0FBREE7QUFpQkE7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDN2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFDQTtBQUVBO0FBREE7QUFEQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFpQkE7Ozs7QUFuQ0E7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBQ0E7QUFtQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBREE7QUFDQTtBQVNBOzs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQVdBO0FBQUE7QUFBQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFoQ0E7QUFxQ0E7Ozs7QUFwREE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQURBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQUNBO0FBQ0E7QUFpREE7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZEE7QUFQQTtBQURBO0FBREE7QUFUQTtBQU5BO0FBQ0E7QUE2Q0E7Ozs7Ozs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM3aEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDL0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBSkE7QUFEQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBS0E7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFkQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBUkE7QUFqQkE7QUFEQTtBQUNBO0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdCQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==