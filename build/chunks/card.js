require("source-map-support").install();
exports.ids = [1];
exports.modules = Array(72).concat([
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Card__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(80);
var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/routes/card/index.js';

let action = (() => {
  var _ref = _asyncToGenerator(function* ({ fetch }) {
    return {
      chunks: ['card'],
      title: 'React Starter Kit',
      path: '/basket',
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Card__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        })
      )
    };
  });

  return function action(_x) {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(14);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/Link/Link.js';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

class Link extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleClick = event => {
      if (this.props.onClick) {
        this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */].push(this.props.to);
    }, _temp;
  }

  render() {
    const _props = this.props,
          { to, children } = _props,
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
}

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
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_svg_react_loader_icons_burger_close_svg_name_BurgerClose__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_svg_react_loader_icons_burger_close_svg_name_BurgerClose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_svg_react_loader_icons_burger_close_svg_name_BurgerClose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_loader_svg_react_loader_icons_burger_show_svg_name_BurgerShow__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_loader_svg_react_loader_icons_burger_show_svg_name_BurgerShow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_loader_svg_react_loader_icons_burger_show_svg_name_BurgerShow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Burger_css__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Burger_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Burger_css__);
var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/Burger/Burger.js',
    _this = this;








const Burger = ({ show, onClick, isStatic }) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  {
    className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()({
      [__WEBPACK_IMPORTED_MODULE_5__Burger_css___default.a.root]: true,
      [__WEBPACK_IMPORTED_MODULE_5__Burger_css___default.a.static]: isStatic
    }),
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
Burger.defaultProps = {
  isStatic: false
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__Burger_css___default.a)(Burger));

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(97);
    var insertCss = __webpack_require__(11);

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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(79);
    var insertCss = __webpack_require__(11);

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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
// imports


// module
exports.push([module.i, ".grid__container___1qdRJ {\n  width: 100%;\n  max-width:  1170px;\n  padding-left: 32px;\n  padding-left: 32px;\n  padding-left: 2rem;\n  padding-right: 32px;\n  padding-right: 32px;\n  padding-right: 2rem;\n}\n@media (min-width: 320px) {\n  .grid__container___1qdRJ {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}", "", {"version":3,"sources":["/Users/anton/Desktop/projects/deworkacy-site/src/components/grid.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;CACrB;AACD;EACE;IACE,mBAAmB;IACnB,oBAAoB;GACrB;CACF","file":"grid.css","sourcesContent":[".container {\n  width: 100%;\n  max-width:  1170px;\n  padding-left: 32px;\n  padding-left: 32px;\n  padding-left: 2rem;\n  padding-right: 32px;\n  padding-right: 32px;\n  padding-right: 2rem;\n}\n@media (min-width: 320px) {\n  .container {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "grid__container___1qdRJ"
};

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Asside_Asside__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_MenuPanel_MenuPanel__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_normalize_css__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_flexbox_grid_dist_react_flexbox_grid_css__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_flexbox_grid_dist_react_flexbox_grid_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_flexbox_grid_dist_react_flexbox_grid_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_flexbox_grid__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_flexbox_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_flexbox_grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components_grid_css__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components_grid_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_components_grid_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Layout_css__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Layout_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/Layout/Layout.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







// external-global styles must be imported in your JS.






class Layout extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      isShow: false,
      activeAccordeonIndex: 0
    }, this.handleToggle = () => this.setState({ isShow: !this.state.isShow }), this.handleAccordeonToggle = index => this.setState({
      activeAccordeonIndex: index === this.state.activeAccordeonIndex ? null : index
    }), _temp;
  }

  render() {
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
}

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6_react_flexbox_grid_dist_react_flexbox_grid_css___default.a, __WEBPACK_IMPORTED_MODULE_5_normalize_css___default.a, __WEBPACK_IMPORTED_MODULE_9__Layout_css___default.a, __WEBPACK_IMPORTED_MODULE_8_components_grid_css___default.a)(Layout));

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Asside_css__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Asside_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Asside_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Navigation_Navigation__ = __webpack_require__(84);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/Asside/Asside.js',
    _this = this;






const Asside = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Asside_css___default.a)(Asside));

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(83);
    var insertCss = __webpack_require__(11);

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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
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
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Navigation_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Navigation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Link__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_Burger_Burger__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_loader_svg_react_loader_icons_home_svg_name_HomeIcon__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_loader_svg_react_loader_icons_home_svg_name_HomeIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_loader_svg_react_loader_icons_home_svg_name_HomeIcon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_loader_svg_react_loader_icons_search_svg_name_SearchIcon__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_loader_svg_react_loader_icons_search_svg_name_SearchIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_loader_svg_react_loader_icons_search_svg_name_SearchIcon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__babel_loader_svg_react_loader_icons_basket_svg_name_BasketIcon__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__babel_loader_svg_react_loader_icons_basket_svg_name_BasketIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__babel_loader_svg_react_loader_icons_basket_svg_name_BasketIcon__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/Navigation/Navigation.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */












class Navigation extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.isActivePath = path => this.context.location.path === path, _temp;
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
          [__WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.root]: true,
          [__WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.horizonatal]: this.props.horizonatal,
          [this.props.classnames.root]: true
        }),
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
          className: `${__WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.link} ${this.isActivePath('/home') ? __WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.activeLink : ''}`,
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
          className: `${__WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.link} ${this.isActivePath('/basket') ? __WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.activeLink : ''}`,
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
          className: `${__WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.link} ${this.isActivePath('/search') ? __WEBPACK_IMPORTED_MODULE_4__Navigation_css___default.a.activeLink : ''}`,
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
}

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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(86);
    var insertCss = __webpack_require__(11);

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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);

function BurgerClose(props) {
    return React.createElement("svg", props, [React.createElement("path", { "fill": "#0023ff", "d": "M2.78.66l15.56 15.56a1.5 1.5 0 1 1-2.12 2.12L.66 2.78A1.5 1.5 0 1 1 2.78.66z", "key": 0 }), React.createElement("path", { "fill": "#0023ff", "d": "M18.55 2.62l-15.9 15.9a1.53 1.53 0 1 1-2.17-2.17L16.38.45a1.53 1.53 0 1 1 2.17 2.17z", "key": 1 })]);
}

BurgerClose.displayName = "BurgerClose";

BurgerClose.defaultProps = { "width": "19", "height": "19", "viewBox": "0 0 19 19", "id": "burger" };

module.exports = BurgerClose;

BurgerClose.default = BurgerClose;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);

function BurgerShow(props) {
    return React.createElement("svg", props, [React.createElement("defs", { "key": 0 }, [React.createElement("path", { "id": "a", "d": "M1 0h16c.55 0 1 .67 1 1.5S17.55 3 17 3H1c-.55 0-1-.67-1-1.5S.45 0 1 0z", "key": 0 }), React.createElement("path", { "id": "b", "d": "M1 6h16c.55 0 1 .67 1 1.5S17.55 9 17 9H1c-.55 0-1-.67-1-1.5S.45 6 1 6z", "key": 1 }), React.createElement("path", { "id": "c", "d": "M1 12h16c.55 0 1 .67 1 1.5s-.45 1.5-1 1.5H1c-.55 0-1-.67-1-1.5S.45 12 1 12z", "key": 2 })]), React.createElement("desc", { "key": 1 }, "Generated with Avocode."), React.createElement("g", { "key": 2 }, React.createElement("use", { "fill": "#0023ff", "xlinkHref": "#a" })), React.createElement("g", { "key": 3 }, React.createElement("use", { "fill": "#0023ff", "xlinkHref": "#b" })), React.createElement("g", { "key": 4 }, React.createElement("use", { "fill": "#0023ff", "xlinkHref": "#c" }))]);
}

BurgerShow.displayName = "BurgerShow";

BurgerShow.defaultProps = { "width": "18", "height": "15", "viewBox": "0 0 18 15" };

module.exports = BurgerShow;

BurgerShow.default = BurgerShow;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(90);
    var insertCss = __webpack_require__(11);

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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);

function HomeIcon(props) {
    return React.createElement("svg", props, React.createElement("path", { "fill": "#d7d7d7", "d": "M14.55 8.73v9.2h-3.02V13.7c0-.67-.54-1.2-1.2-1.2H6.7c-.66 0-1.2.53-1.2 1.2v4.22H2.49v-9.2l6.03-6.02zM9.05.68A.75.75 0 0 0 8 .68L1.04 7.63a1.2 1.2 0 0 0-.35.85v10.05c0 .66.54 1.2 1.2 1.2h4.22c.67 0 1.2-.53 1.2-1.2v-4.22h2.42v4.22c0 .66.54 1.2 1.2 1.2h4.22c.66 0 1.2-.53 1.2-1.2V8.48c0-.32-.12-.62-.35-.85z" }));
}

HomeIcon.displayName = "HomeIcon";

HomeIcon.defaultProps = { "width": "17", "height": "20", "viewBox": "0 0 17 20" };

module.exports = HomeIcon;

HomeIcon.default = HomeIcon;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);

function SearchIcon(props) {
    return React.createElement("svg", props, React.createElement("path", { "fill": "#d7d7d7", "d": "M12.93.25a7.23 7.23 0 0 0-5.7 11.66L1.13 18a.9.9 0 0 0 0 1.28.9.9 0 0 0 1.28 0l6.08-6.08A7.23 7.23 0 1 0 12.93.25zm0 12.66a5.43 5.43 0 1 1 .01-10.86 5.43 5.43 0 0 1 0 10.86z" }));
}

SearchIcon.displayName = "SearchIcon";

SearchIcon.defaultProps = { "width": "21", "height": "20", "viewBox": "0 0 21 20" };

module.exports = SearchIcon;

SearchIcon.default = SearchIcon;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);

function BasketIcon(props) {
    return React.createElement("svg", props, React.createElement("path", { "fill": "#d7d7d7", "d": "M20.56 5.78h-3.07a.93.93 0 0 0-.08-.18L14.4.78a.9.9 0 0 0-1.54.95l2.53 4.05H7.65l2.53-4.05A.9.9 0 0 0 9.4.35a.9.9 0 0 0-.77.43l-3 4.82a.93.93 0 0 0-.09.18H2.48c-1 0-1.8.8-1.8 1.8v1.2c0 .86.6 1.58 1.39 1.77l2.3 7.79c.21.75.9 1.3 1.73 1.3h10.84c.83 0 1.52-.55 1.74-1.3l2.3-7.8c.8-.18 1.39-.9 1.39-1.75v-1.2c0-1-.81-1.81-1.81-1.81zM2.48 7.58h18.08v1.2H2.48zm14.46 10.25H6.1L3.97 10.6h15.1z" }));
}

BasketIcon.displayName = "BasketIcon";

BasketIcon.defaultProps = { "width": "23", "height": "20", "viewBox": "0 0 23 20" };

module.exports = BasketIcon;

BasketIcon.default = BasketIcon;

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transition_group_Transition__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transition_group_Transition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_transition_group_Transition__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Burger_Burger__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_Accordeon__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_Link_Link__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MenuPanel_css__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MenuPanel_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__MenuPanel_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/MenuPanel/MenuPanel.js',
    _this = this;










const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 }
};

const MenuPanel = ({
  isShow,
  handleToggle,
  handleAccordeonToggle,
  activeAccordeonIndex
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  {
    className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()({
      [__WEBPACK_IMPORTED_MODULE_7__MenuPanel_css___default.a.root]: true,
      [__WEBPACK_IMPORTED_MODULE_7__MenuPanel_css___default.a.active]: isShow
    }),
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
    state => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
          handleToggle: () => {},
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
    )
  )
);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_7__MenuPanel_css___default.a)(MenuPanel));

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Accordeon__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Accordeon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AccordeonItem__ = __webpack_require__(98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__AccordeonItem__["a"]; });



/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Accordeon_css__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Accordeon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Accordeon_css__);
var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/Accordeon/Accordeon.js',
    _this = this;







const Accordeon = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      [__WEBPACK_IMPORTED_MODULE_4__Accordeon_css___default.a.root]: true,
      [props.classnames.root]: true
    }), __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: _this
  },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(props.children, (child, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
    active: index === props.activeIndex,
    handleToggle: props.onOpen,
    itemIndex: index,
    classnames: props.classnames
  }))
);

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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
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
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_font_icon__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_font_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_font_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_loader_svg_react_loader_icons_arrow_svg_name_Arrow__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_loader_svg_react_loader_icons_arrow_svg_name_Arrow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_loader_svg_react_loader_icons_arrow_svg_name_Arrow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Accordeon_css__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Accordeon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Accordeon_css__);
var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/Accordeon/AccordeonItem.js',
    _this = this;









const handleToggle = (index, fn = () => {}) => () => fn(index);

const AccordeonItem = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
      className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()({
        [__WEBPACK_IMPORTED_MODULE_6__Accordeon_css___default.a.acordeonHeader]: true,
        [__WEBPACK_IMPORTED_MODULE_6__Accordeon_css___default.a.acordeonActiveHeader]: props.active
      }),
      onClick: handleToggle(props.itemIndex, props.handleToggle),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__babel_loader_svg_react_loader_icons_arrow_svg_name_Arrow___default.a, {
      className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()({
        [__WEBPACK_IMPORTED_MODULE_6__Accordeon_css___default.a.arrow]: true,
        [__WEBPACK_IMPORTED_MODULE_6__Accordeon_css___default.a.activeArrow]: props.active
      }),
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
      className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()({
        [__WEBPACK_IMPORTED_MODULE_6__Accordeon_css___default.a.accordeonContent]: true,
        [__WEBPACK_IMPORTED_MODULE_6__Accordeon_css___default.a.accordeonActiveContent]: props.active,
        [props.classnames.content]: true,
        [props.classnames.activeContent]: props.active
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: _this
    },
    props.children
  )
);

AccordeonItem.propTypes = {
  active: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  itemIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  handleToggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__Accordeon_css___default.a)(AccordeonItem));

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);

function Arrow(props) {
    return React.createElement("svg", props, React.createElement("g", null, React.createElement("path", { "d": "m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" })));
}

Arrow.displayName = "Arrow";

Arrow.defaultProps = { "version": "1.1", "viewBox": "0 0 129 129", "enableBackground": "new 0 0 129 129" };

module.exports = Arrow;

Arrow.default = Arrow;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(101);
    var insertCss = __webpack_require__(11);

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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(103);
    var insertCss = __webpack_require__(11);

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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
// imports


// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n", "", {"version":3,"sources":["/Users/anton/Desktop/projects/deworkacy-site/node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,4EAA4E;;AAE5E;gFACgF;;AAEhF;;;;GAIG;;AAEH;EACE,kBAAkB,CAAC,OAAO;EAC1B,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;;GAEG;;AAEH;;;;;;EAME,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;OAEO,OAAO;EACZ,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,gCAAgC;UACxB,wBAAwB,CAAC,OAAO;EACxC,UAAU,CAAC,OAAO;EAClB,kBAAkB,CAAC,OAAO;CAC3B;;AAED;;;GAGG;;AAEH;EACE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,sCAAsC,CAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;EACE,oBAAoB,CAAC,OAAO;EAC5B,2BAA2B,CAAC,OAAO;EACnC,0CAA0C;UAClC,kCAAkC,CAAC,OAAO;CACnD;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;;GAGG;;AAEH;;;EAGE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;;EAEE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,wBAAwB,CAAC,OAAO;EAChC,gBAAgB,CAAC,OAAO;EACxB,kBAAkB,CAAC,OAAO;EAC1B,UAAU,CAAC,OAAO;CACnB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;SACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,CAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,+BAA+B;UACvB,uBAAuB,CAAC,OAAO;EACvC,eAAe,CAAC,OAAO;EACvB,eAAe,CAAC,OAAO;EACvB,gBAAgB,CAAC,OAAO;EACxB,WAAW,CAAC,OAAO;EACnB,oBAAoB,CAAC,OAAO;CAC7B;;AAED;;;GAGG;;AAEH;EACE,sBAAsB,CAAC,OAAO;EAC9B,yBAAyB,CAAC,OAAO;CAClC;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,+BAA+B;UACvB,uBAAuB,CAAC,OAAO;EACvC,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,qBAAqB,CAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,CAAC,OAAO;EACnC,cAAc,CAAC,OAAO;CACvB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;EAEE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,cAAc;CACf","file":"normalize.css","sourcesContent":["/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(105);
    var insertCss = __webpack_require__(11);

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
/* 105 */
/***/ (function(module, exports) {

module.exports = ".flexboxgrid__container-fluid___2lUES,\n.flexboxgrid__container___R2zU9 {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.flexboxgrid__container-fluid___2lUES {\n  padding-right: 32px;\n  padding-right: 32px;\n  padding-right: 2rem;\n  padding-left: 32px;\n  padding-left: 32px;\n  padding-left: 2rem;\n}\n\n.flexboxgrid__row___1y_mg {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -8px;\n  margin-right: -8px;\n  margin-right: -0.5rem;\n  margin-left: -8px;\n  margin-left: -8px;\n  margin-left: -0.5rem;\n}\n\n.flexboxgrid__row___1y_mg.flexboxgrid__reverse___1X682 {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n}\n\n.flexboxgrid__col___3RqPP.flexboxgrid__reverse___1X682 {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: column-reverse;\n  flex-direction: column-reverse;\n}\n\n.flexboxgrid__col-xs___1ROHR,\n.flexboxgrid__col-xs-1___VtNIK,\n.flexboxgrid__col-xs-2___36nDa,\n.flexboxgrid__col-xs-3___2f2Ql,\n.flexboxgrid__col-xs-4___TxBJg,\n.flexboxgrid__col-xs-5___1HkK5,\n.flexboxgrid__col-xs-6___1DhV6,\n.flexboxgrid__col-xs-7___3o2m-,\n.flexboxgrid__col-xs-8___3ARGc,\n.flexboxgrid__col-xs-9___15qfl,\n.flexboxgrid__col-xs-10___2AWNv,\n.flexboxgrid__col-xs-11___3H-6F,\n.flexboxgrid__col-xs-12___phbtE,\n.flexboxgrid__col-xs-offset-0___10C7E,\n.flexboxgrid__col-xs-offset-1___12o_R,\n.flexboxgrid__col-xs-offset-2___2Hh-B,\n.flexboxgrid__col-xs-offset-3___8NCys,\n.flexboxgrid__col-xs-offset-4___dA0P1,\n.flexboxgrid__col-xs-offset-5___2MbdF,\n.flexboxgrid__col-xs-offset-6___3N3bt,\n.flexboxgrid__col-xs-offset-7___1yQDG,\n.flexboxgrid__col-xs-offset-8___2aEcW,\n.flexboxgrid__col-xs-offset-9___2haBv,\n.flexboxgrid__col-xs-offset-10___1QsVg,\n.flexboxgrid__col-xs-offset-11___29xQn,\n.flexboxgrid__col-xs-offset-12___1XWFb {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  padding-right: 8px;\n  padding-right: 8px;\n  padding-right: 0.5rem;\n  padding-left: 8px;\n  padding-left: 8px;\n  padding-left: 0.5rem;\n}\n\n.flexboxgrid__col-xs___1ROHR {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  max-width: 100%;\n}\n\n.flexboxgrid__col-xs-1___VtNIK {\n  -ms-flex-preferred-size: 8.33333333%;\n  flex-basis: 8.33333333%;\n  max-width: 8.33333333%;\n}\n\n.flexboxgrid__col-xs-2___36nDa {\n  -ms-flex-preferred-size: 16.66666667%;\n  flex-basis: 16.66666667%;\n  max-width: 16.66666667%;\n}\n\n.flexboxgrid__col-xs-3___2f2Ql {\n  -ms-flex-preferred-size: 25%;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n\n.flexboxgrid__col-xs-4___TxBJg {\n  -ms-flex-preferred-size: 33.33333333%;\n  flex-basis: 33.33333333%;\n  max-width: 33.33333333%;\n}\n\n.flexboxgrid__col-xs-5___1HkK5 {\n  -ms-flex-preferred-size: 41.66666667%;\n  flex-basis: 41.66666667%;\n  max-width: 41.66666667%;\n}\n\n.flexboxgrid__col-xs-6___1DhV6 {\n  -ms-flex-preferred-size: 50%;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n\n.flexboxgrid__col-xs-7___3o2m- {\n  -ms-flex-preferred-size: 58.33333333%;\n  flex-basis: 58.33333333%;\n  max-width: 58.33333333%;\n}\n\n.flexboxgrid__col-xs-8___3ARGc {\n  -ms-flex-preferred-size: 66.66666667%;\n  flex-basis: 66.66666667%;\n  max-width: 66.66666667%;\n}\n\n.flexboxgrid__col-xs-9___15qfl {\n  -ms-flex-preferred-size: 75%;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n\n.flexboxgrid__col-xs-10___2AWNv {\n  -ms-flex-preferred-size: 83.33333333%;\n  flex-basis: 83.33333333%;\n  max-width: 83.33333333%;\n}\n\n.flexboxgrid__col-xs-11___3H-6F {\n  -ms-flex-preferred-size: 91.66666667%;\n  flex-basis: 91.66666667%;\n  max-width: 91.66666667%;\n}\n\n.flexboxgrid__col-xs-12___phbtE {\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n\n.flexboxgrid__col-xs-offset-0___10C7E {\n  margin-left: 0;\n}\n\n.flexboxgrid__col-xs-offset-1___12o_R {\n  margin-left: 8.33333333%;\n}\n\n.flexboxgrid__col-xs-offset-2___2Hh-B {\n  margin-left: 16.66666667%;\n}\n\n.flexboxgrid__col-xs-offset-3___8NCys {\n  margin-left: 25%;\n}\n\n.flexboxgrid__col-xs-offset-4___dA0P1 {\n  margin-left: 33.33333333%;\n}\n\n.flexboxgrid__col-xs-offset-5___2MbdF {\n  margin-left: 41.66666667%;\n}\n\n.flexboxgrid__col-xs-offset-6___3N3bt {\n  margin-left: 50%;\n}\n\n.flexboxgrid__col-xs-offset-7___1yQDG {\n  margin-left: 58.33333333%;\n}\n\n.flexboxgrid__col-xs-offset-8___2aEcW {\n  margin-left: 66.66666667%;\n}\n\n.flexboxgrid__col-xs-offset-9___2haBv {\n  margin-left: 75%;\n}\n\n.flexboxgrid__col-xs-offset-10___1QsVg {\n  margin-left: 83.33333333%;\n}\n\n.flexboxgrid__col-xs-offset-11___29xQn {\n  margin-left: 91.66666667%;\n}\n\n.flexboxgrid__start-xs___h8qdA {\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  text-align: start;\n}\n\n.flexboxgrid__center-xs___1JWon {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.flexboxgrid__end-xs___33Mku {\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  text-align: end;\n}\n\n.flexboxgrid__top-xs___UhA-V {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n\n.flexboxgrid__middle-xs___1h5t3 {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.flexboxgrid__bottom-xs___2tRUa {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n}\n\n.flexboxgrid__around-xs___1okkK {\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n}\n\n.flexboxgrid__between-xs___WFP84 {\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.flexboxgrid__first-xs___XoosK {\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.flexboxgrid__last-xs___HnlRw {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n@media only screen and (min-width: 48em) {\n  .flexboxgrid__container___R2zU9 {\n    width: 49rem;\n  }\n\n  .flexboxgrid__col-sm___3tZ-z,\n  .flexboxgrid__col-sm-1___2Gca6,\n  .flexboxgrid__col-sm-2___YETza,\n  .flexboxgrid__col-sm-3___2irZQ,\n  .flexboxgrid__col-sm-4___3kj7S,\n  .flexboxgrid__col-sm-5___gAxuQ,\n  .flexboxgrid__col-sm-6___vUdKH,\n  .flexboxgrid__col-sm-7___22IcQ,\n  .flexboxgrid__col-sm-8___2_YhB,\n  .flexboxgrid__col-sm-9___2ubpx,\n  .flexboxgrid__col-sm-10___262G9,\n  .flexboxgrid__col-sm-11___39s7J,\n  .flexboxgrid__col-sm-12___1e5Uk,\n  .flexboxgrid__col-sm-offset-0___llQ6-,\n  .flexboxgrid__col-sm-offset-1___1PFWu,\n  .flexboxgrid__col-sm-offset-2___1DgbO,\n  .flexboxgrid__col-sm-offset-3___3W5Iv,\n  .flexboxgrid__col-sm-offset-4___3YToG,\n  .flexboxgrid__col-sm-offset-5___609Vo,\n  .flexboxgrid__col-sm-offset-6___TCeVQ,\n  .flexboxgrid__col-sm-offset-7___csvBu,\n  .flexboxgrid__col-sm-offset-8___11PYH,\n  .flexboxgrid__col-sm-offset-9___24Evy,\n  .flexboxgrid__col-sm-offset-10___1-lcE,\n  .flexboxgrid__col-sm-offset-11___2ynFq,\n  .flexboxgrid__col-sm-offset-12___3MBMi {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .flexboxgrid__col-sm___3tZ-z {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .flexboxgrid__col-sm-1___2Gca6 {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .flexboxgrid__col-sm-2___YETza {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .flexboxgrid__col-sm-3___2irZQ {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .flexboxgrid__col-sm-4___3kj7S {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .flexboxgrid__col-sm-5___gAxuQ {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .flexboxgrid__col-sm-6___vUdKH {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .flexboxgrid__col-sm-7___22IcQ {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .flexboxgrid__col-sm-8___2_YhB {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .flexboxgrid__col-sm-9___2ubpx {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flexboxgrid__col-sm-10___262G9 {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .flexboxgrid__col-sm-11___39s7J {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .flexboxgrid__col-sm-12___1e5Uk {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .flexboxgrid__col-sm-offset-0___llQ6- {\n    margin-left: 0;\n  }\n\n  .flexboxgrid__col-sm-offset-1___1PFWu {\n    margin-left: 8.33333333%;\n  }\n\n  .flexboxgrid__col-sm-offset-2___1DgbO {\n    margin-left: 16.66666667%;\n  }\n\n  .flexboxgrid__col-sm-offset-3___3W5Iv {\n    margin-left: 25%;\n  }\n\n  .flexboxgrid__col-sm-offset-4___3YToG {\n    margin-left: 33.33333333%;\n  }\n\n  .flexboxgrid__col-sm-offset-5___609Vo {\n    margin-left: 41.66666667%;\n  }\n\n  .flexboxgrid__col-sm-offset-6___TCeVQ {\n    margin-left: 50%;\n  }\n\n  .flexboxgrid__col-sm-offset-7___csvBu {\n    margin-left: 58.33333333%;\n  }\n\n  .flexboxgrid__col-sm-offset-8___11PYH {\n    margin-left: 66.66666667%;\n  }\n\n  .flexboxgrid__col-sm-offset-9___24Evy {\n    margin-left: 75%;\n  }\n\n  .flexboxgrid__col-sm-offset-10___1-lcE {\n    margin-left: 83.33333333%;\n  }\n\n  .flexboxgrid__col-sm-offset-11___2ynFq {\n    margin-left: 91.66666667%;\n  }\n\n  .flexboxgrid__start-sm___3Dilu {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .flexboxgrid__center-sm___39HWq {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .flexboxgrid__end-sm___3B07f {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .flexboxgrid__top-sm___1begS {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .flexboxgrid__middle-sm___Oh4K7 {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .flexboxgrid__bottom-sm___1jPnc {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .flexboxgrid__around-sm___3ffbb {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .flexboxgrid__between-sm___1Rcaf {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .flexboxgrid__first-sm___2Gzhb {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .flexboxgrid__last-sm___1pF8w {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}\n\n@media only screen and (min-width: 64em) {\n  .flexboxgrid__container___R2zU9 {\n    width: 65rem;\n  }\n\n  .flexboxgrid__col-md___2lbzm,\n  .flexboxgrid__col-md-1___1Lapj,\n  .flexboxgrid__col-md-2___1c_4t,\n  .flexboxgrid__col-md-3___3ANRS,\n  .flexboxgrid__col-md-4___a_FyK,\n  .flexboxgrid__col-md-5___YXlMq,\n  .flexboxgrid__col-md-6___5OSyJ,\n  .flexboxgrid__col-md-7___1Zp-r,\n  .flexboxgrid__col-md-8___3979J,\n  .flexboxgrid__col-md-9___2fXuC,\n  .flexboxgrid__col-md-10___2Jbee,\n  .flexboxgrid__col-md-11___3drbK,\n  .flexboxgrid__col-md-12___zR2lK,\n  .flexboxgrid__col-md-offset-0___2O3vR,\n  .flexboxgrid__col-md-offset-1___2XNCz,\n  .flexboxgrid__col-md-offset-2___2t-NV,\n  .flexboxgrid__col-md-offset-3___1zlTP,\n  .flexboxgrid__col-md-offset-4___3aHxz,\n  .flexboxgrid__col-md-offset-5___3S2Gw,\n  .flexboxgrid__col-md-offset-6___3KV0V,\n  .flexboxgrid__col-md-offset-7___1OdCD,\n  .flexboxgrid__col-md-offset-8___2vFbQ,\n  .flexboxgrid__col-md-offset-9___1q95x,\n  .flexboxgrid__col-md-offset-10___2CeMK,\n  .flexboxgrid__col-md-offset-11___3u6XW,\n  .flexboxgrid__col-md-offset-12___eKUlL {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .flexboxgrid__col-md___2lbzm {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .flexboxgrid__col-md-1___1Lapj {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .flexboxgrid__col-md-2___1c_4t {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .flexboxgrid__col-md-3___3ANRS {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .flexboxgrid__col-md-4___a_FyK {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .flexboxgrid__col-md-5___YXlMq {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .flexboxgrid__col-md-6___5OSyJ {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .flexboxgrid__col-md-7___1Zp-r {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .flexboxgrid__col-md-8___3979J {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .flexboxgrid__col-md-9___2fXuC {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flexboxgrid__col-md-10___2Jbee {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .flexboxgrid__col-md-11___3drbK {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .flexboxgrid__col-md-12___zR2lK {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .flexboxgrid__col-md-offset-0___2O3vR {\n    margin-left: 0;\n  }\n\n  .flexboxgrid__col-md-offset-1___2XNCz {\n    margin-left: 8.33333333%;\n  }\n\n  .flexboxgrid__col-md-offset-2___2t-NV {\n    margin-left: 16.66666667%;\n  }\n\n  .flexboxgrid__col-md-offset-3___1zlTP {\n    margin-left: 25%;\n  }\n\n  .flexboxgrid__col-md-offset-4___3aHxz {\n    margin-left: 33.33333333%;\n  }\n\n  .flexboxgrid__col-md-offset-5___3S2Gw {\n    margin-left: 41.66666667%;\n  }\n\n  .flexboxgrid__col-md-offset-6___3KV0V {\n    margin-left: 50%;\n  }\n\n  .flexboxgrid__col-md-offset-7___1OdCD {\n    margin-left: 58.33333333%;\n  }\n\n  .flexboxgrid__col-md-offset-8___2vFbQ {\n    margin-left: 66.66666667%;\n  }\n\n  .flexboxgrid__col-md-offset-9___1q95x {\n    margin-left: 75%;\n  }\n\n  .flexboxgrid__col-md-offset-10___2CeMK {\n    margin-left: 83.33333333%;\n  }\n\n  .flexboxgrid__col-md-offset-11___3u6XW {\n    margin-left: 91.66666667%;\n  }\n\n  .flexboxgrid__start-md___2B-sg {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .flexboxgrid__center-md___3VDfS {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .flexboxgrid__end-md___2fJWy {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .flexboxgrid__top-md___12FDg {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .flexboxgrid__middle-md___3wIJR {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .flexboxgrid__bottom-md___2v1cd {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .flexboxgrid__around-md___1x54_ {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .flexboxgrid__between-md___Xn-9x {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .flexboxgrid__first-md___3j4t5 {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .flexboxgrid__last-md___3y72e {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}\n\n@media only screen and (min-width: 75em) {\n  .flexboxgrid__container___R2zU9 {\n    width: 76rem;\n  }\n\n  .flexboxgrid__col-lg___3SaXd,\n  .flexboxgrid__col-lg-1___2VMiv,\n  .flexboxgrid__col-lg-2___21dKK,\n  .flexboxgrid__col-lg-3___vbACp,\n  .flexboxgrid__col-lg-4___2hzy8,\n  .flexboxgrid__col-lg-5___1-g7-,\n  .flexboxgrid__col-lg-6___21lf8,\n  .flexboxgrid__col-lg-7___3kBG1,\n  .flexboxgrid__col-lg-8___afECx,\n  .flexboxgrid__col-lg-9___10mdl,\n  .flexboxgrid__col-lg-10___1yTfj,\n  .flexboxgrid__col-lg-11___3hMRu,\n  .flexboxgrid__col-lg-12___1rlAA,\n  .flexboxgrid__col-lg-offset-0___3KM3x,\n  .flexboxgrid__col-lg-offset-1___KhvqR,\n  .flexboxgrid__col-lg-offset-2___1ZD_z,\n  .flexboxgrid__col-lg-offset-3___2GQVa,\n  .flexboxgrid__col-lg-offset-4___1zPZj,\n  .flexboxgrid__col-lg-offset-5___Kj8Iq,\n  .flexboxgrid__col-lg-offset-6___3nun3,\n  .flexboxgrid__col-lg-offset-7___YTmn9,\n  .flexboxgrid__col-lg-offset-8___1qG2t,\n  .flexboxgrid__col-lg-offset-9___qd27B,\n  .flexboxgrid__col-lg-offset-10___2YScP,\n  .flexboxgrid__col-lg-offset-11___3pPvj,\n  .flexboxgrid__col-lg-offset-12___2rHEg {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .flexboxgrid__col-lg___3SaXd {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .flexboxgrid__col-lg-1___2VMiv {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .flexboxgrid__col-lg-2___21dKK {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .flexboxgrid__col-lg-3___vbACp {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .flexboxgrid__col-lg-4___2hzy8 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .flexboxgrid__col-lg-5___1-g7- {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .flexboxgrid__col-lg-6___21lf8 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .flexboxgrid__col-lg-7___3kBG1 {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .flexboxgrid__col-lg-8___afECx {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .flexboxgrid__col-lg-9___10mdl {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flexboxgrid__col-lg-10___1yTfj {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .flexboxgrid__col-lg-11___3hMRu {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .flexboxgrid__col-lg-12___1rlAA {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .flexboxgrid__col-lg-offset-0___3KM3x {\n    margin-left: 0;\n  }\n\n  .flexboxgrid__col-lg-offset-1___KhvqR {\n    margin-left: 8.33333333%;\n  }\n\n  .flexboxgrid__col-lg-offset-2___1ZD_z {\n    margin-left: 16.66666667%;\n  }\n\n  .flexboxgrid__col-lg-offset-3___2GQVa {\n    margin-left: 25%;\n  }\n\n  .flexboxgrid__col-lg-offset-4___1zPZj {\n    margin-left: 33.33333333%;\n  }\n\n  .flexboxgrid__col-lg-offset-5___Kj8Iq {\n    margin-left: 41.66666667%;\n  }\n\n  .flexboxgrid__col-lg-offset-6___3nun3 {\n    margin-left: 50%;\n  }\n\n  .flexboxgrid__col-lg-offset-7___YTmn9 {\n    margin-left: 58.33333333%;\n  }\n\n  .flexboxgrid__col-lg-offset-8___1qG2t {\n    margin-left: 66.66666667%;\n  }\n\n  .flexboxgrid__col-lg-offset-9___qd27B {\n    margin-left: 75%;\n  }\n\n  .flexboxgrid__col-lg-offset-10___2YScP {\n    margin-left: 83.33333333%;\n  }\n\n  .flexboxgrid__col-lg-offset-11___3pPvj {\n    margin-left: 91.66666667%;\n  }\n\n  .flexboxgrid__start-lg___ageu9 {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .flexboxgrid__center-lg___3H3SI {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .flexboxgrid__end-lg___27_fM {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .flexboxgrid__top-lg___1tWWw {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .flexboxgrid__middle-lg___nocGI {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .flexboxgrid__bottom-lg___IYGks {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .flexboxgrid__around-lg___zZC2C {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .flexboxgrid__between-lg___2njzk {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .flexboxgrid__first-lg___6dksO {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .flexboxgrid__last-lg___xGBvS {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}"

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(107);
    var insertCss = __webpack_require__(11);

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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n/*\n * normalize.css is imported in JS file.\n * If you import external CSS file from your internal CSS\n * then it will be inlined and processed with CSS modules.\n */\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 10px;\n  font-family: 'Roboto', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\nbutton {\n  font-family: 'Roboto', 'HelveticaNeue-Light', sans-serif!important;\n  line-height: 1;\n}\n\nbody {\n  margin: 0;\n  width: 100%;\n  min-width: 320px;\n}\n\na {\n  color: #0074c2;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.Layout__container___1g5KG {\n  position: relative;\n  z-index: 10;\n}\n\n#Layout__app___3EzLR {\n  overflow: hidden;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]:after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']:after,\n  a[href^='javascript:']:after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/Users/anton/Desktop/projects/deworkacy-site/src/components/Layout/Layout.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;CAC/M;;AAED;;;;GAIG;;AAEH;;gFAEgF;;AAEhF;EACE,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,yDAAyD;EACzD,mBAAmB,CAAC,WAAW;CAChC;;AAED;EACE,mEAAmE;EACnE,eAAe;CAChB;;AAED;EACE,UAAU;EACV,YAAY;EACZ,iBAAiB;CAClB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,+BAA+B;UACvB,uBAAuB;CAChC;;AAED;EACE,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,iBAAiB;CAClB;;AAED;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAED;;;;GAIG;;AAEH;;;;;;EAME,uBAAuB;CACxB;;AAED;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAED;;;;gFAIgF;;AAEhF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,oCAAoC;YAC5B,4BAA4B;IACpC,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"Layout.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n/*\n * normalize.css is imported in JS file.\n * If you import external CSS file from your internal CSS\n * then it will be inlined and processed with CSS modules.\n */\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 10px;\n  font-family: 'Roboto', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\nbutton {\n  font-family: 'Roboto', 'HelveticaNeue-Light', sans-serif!important;\n  line-height: 1;\n}\n\nbody {\n  margin: 0;\n  width: 100%;\n  min-width: 320px;\n}\n\na {\n  color: #0074c2;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.container {\n  position: relative;\n  z-index: 10;\n}\n\n#app {\n  overflow: hidden;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]:after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']:after,\n  a[href^='javascript:']:after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "Layout__container___1g5KG",
	"app": "Layout__app___3EzLR"
};

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_toolbox__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_toolbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_toolbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blueTheme_css__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blueTheme_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__blueTheme_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/Button/Button.js',
    _this = this;






const RButton = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_toolbox__["Button"], _extends({}, props, { theme: __WEBPACK_IMPORTED_MODULE_3__blueTheme_css___default.a, __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: _this
}));
/* unused harmony export RButton */


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__blueTheme_css___default.a)(RButton));

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(110);
    var insertCss = __webpack_require__(11);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./blueTheme.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./blueTheme.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.blueTheme__button___3rWu7 {\n  background-color: rgb(23, 40, 250);\n  padding: 15px 37px;\n  font-weight: 900px;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  border-radius: 20px;\n  height: 65.6px;\n  height: 65.6px;\n  height: 4.1rem;\n  color: rgb(255, 255, 255);\n  font-family: Lato;\n  font-size: 22.4px;\n  font-size: 22.4px;\n  font-size: 1.4rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  cursor: pointer\n}\n\n.blueTheme__button___3rWu7:hover {\n  background-color: rgb(18, 30, 174);\n}\n\n.blueTheme__button___3rWu7:active {\n  -webkit-box-shadow: 0 0 2.1rem rgba(218, 218, 218, .5);\n          box-shadow: 0 0 2.1rem rgba(218, 218, 218, .5);\n}\n", "", {"version":3,"sources":["/Users/anton/Desktop/projects/deworkacy-site/src/components/Button/blueTheme.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;CAC/M;;AAED;EACE,mCAAmC;EACnC,mBAAmB;EACnB,mBAAmB;EACnB,0BAA0B;EAC1B,aAAa;EACb,cAAc;EACd,oBAAoB;EACpB,eAAe;EACf,eAAe;EACf,eAAe;EACf,0BAA0B;EAC1B,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,0BAA0B;EAC1B,eAAe;CAChB;;AAED;EACE,mCAAmC;CACpC;;AAED;EACE,uDAAuD;UAC/C,+CAA+C;CACxD","file":"blueTheme.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.button {\n  background-color: rgb(23, 40, 250);\n  padding: 15px 37px;\n  font-weight: 900px;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  border-radius: 20px;\n  height: 65.6px;\n  height: 65.6px;\n  height: 4.1rem;\n  color: rgb(255, 255, 255);\n  font-family: Lato;\n  font-size: 22.4px;\n  font-size: 22.4px;\n  font-size: 1.4rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  cursor: pointer\n}\n\n.button:hover {\n  background-color: rgb(18, 30, 174);\n}\n\n.button:active {\n  -webkit-box-shadow: 0 0 2.1rem rgba(218, 218, 218, .5);\n          box-shadow: 0 0 2.1rem rgba(218, 218, 218, .5);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"button": "blueTheme__button___3rWu7"
};

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Col__ = __webpack_require__(112);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Col__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Row__ = __webpack_require__(113);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__Row__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Grid__ = __webpack_require__(114);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__Grid__["a"]; });




/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_flexbox_grid__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_flexbox_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_flexbox_grid__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/Grid/Col.js',
    _this = this;




/* harmony default export */ __webpack_exports__["a"] = (props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_flexbox_grid__["Col"], _extends({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: _this
})));

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_flexbox_grid__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_flexbox_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_flexbox_grid__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/Grid/Row.js',
    _this = this;




/* harmony default export */ __webpack_exports__["a"] = (props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_flexbox_grid__["Row"], _extends({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: _this
})));

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_flexbox_grid__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_flexbox_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_flexbox_grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_grid_css__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_grid_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_grid_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/components/Grid/Grid.js',
    _this = this;






const CGRID = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_flexbox_grid__["Grid"], _extends({}, props, { className: __WEBPACK_IMPORTED_MODULE_2_components_grid_css___default.a.container, __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: _this
}));

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2_components_grid_css___default.a)(CGRID));

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Multipler_Multipler__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_loader_svg_react_loader_icons_delete_svg_name_DeleteItem__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_loader_svg_react_loader_icons_delete_svg_name_DeleteItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_loader_svg_react_loader_icons_delete_svg_name_DeleteItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cardItem_css__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cardItem_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__cardItem_css__);
var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/modules/Card/components/CardItem/CardItem.js',
    _this = this;








const CardItem = ({ name, count, price, category, classnames }) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  {
    className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()({
      [__WEBPACK_IMPORTED_MODULE_5__cardItem_css___default.a.root]: true,
      [classnames.root]: true
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: _this
  },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'http://lorempixel.com/g/165/165/', alt: '', className: __WEBPACK_IMPORTED_MODULE_5__cardItem_css___default.a.img, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: _this
  }),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_5__cardItem_css___default.a.inner, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'header',
      { className: __WEBPACK_IMPORTED_MODULE_5__cardItem_css___default.a.header, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: __WEBPACK_IMPORTED_MODULE_5__cardItem_css___default.a.category, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: _this
        },
        'Living room'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: __WEBPACK_IMPORTED_MODULE_5__cardItem_css___default.a.name, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: _this
        },
        'White Seat'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'footer',
      { className: __WEBPACK_IMPORTED_MODULE_5__cardItem_css___default.a.footer, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__Multipler_Multipler__["a" /* default */],
        {
          classnames: {
            root: __WEBPACK_IMPORTED_MODULE_5__cardItem_css___default.a.multipler
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: _this
        },
        '1'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: __WEBPACK_IMPORTED_MODULE_5__cardItem_css___default.a.price, __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: _this
        },
        '$24 004049'
      )
    )
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_5__cardItem_css___default.a.clear, __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__babel_loader_svg_react_loader_icons_delete_svg_name_DeleteItem___default.a, { className: __WEBPACK_IMPORTED_MODULE_5__cardItem_css___default.a.delete, __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: _this
    })
  )
);
/* unused harmony export CardItem */


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__cardItem_css___default.a)(CardItem));

/***/ }),
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_Button_Button__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Grid__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_css__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__card_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_Card__ = __webpack_require__(136);
var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/routes/card/Card.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








class Card extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_4__card_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_components_Grid__["b" /* Grid */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_components_Grid__["c" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_components_Grid__["a" /* Col */],
            { xs: 12, sm: 9, md: 9, lg: 9, smOffset: 2, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__modules_Card__["a" /* CardRoot */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            })
          )
        )
      )
    );
  }
}

Card.propTypes = {};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__card_css___default.a)(Card));

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(135);
    var insertCss = __webpack_require__(11);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./card.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./card.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.card__root___1cljX {\n  background-color: #f1f1f1;\n  padding-top: 254.4px;\n  padding-top: 254.4px;\n  padding-top: 15.9rem;\n  min-height: 100vh;\n  padding-bottom: 88px;\n  padding-bottom: 88px;\n  padding-bottom: 5.5rem;\n}\n\n@media (min-width: 768px) {\n\n  .card__root___1cljX {\n    padding-top: 4.8rem;\n  }\n}", "", {"version":3,"sources":["/Users/anton/Desktop/projects/deworkacy-site/src/routes/card/card.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;CAC/M;;AAED;EACE,0BAA0B;EAC1B,qBAAqB;EACrB,qBAAqB;EACrB,qBAAqB;EACrB,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,uBAAuB;CACxB;;AAED;;EAEE;IACE,oBAAoB;GACrB;CACF","file":"card.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.root {\n  background-color: #f1f1f1;\n  padding-top: 254.4px;\n  padding-top: 254.4px;\n  padding-top: 15.9rem;\n  min-height: 100vh;\n  padding-bottom: 88px;\n  padding-bottom: 88px;\n  padding-bottom: 5.5rem;\n}\n\n@media (min-width: 768px) {\n\n  .root {\n    padding-top: 4.8rem;\n  }\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "card__root___1cljX"
};

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Card_Card__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_CardItem_CardItem__ = __webpack_require__(115);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Card_Card__["a"]; });
/* unused harmony reexport Item */





/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CardItem_CardItem__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_Button_Button__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_css__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__card_css__);
var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/modules/Card/components/Card/Card.js',
    _this = this;








const Card = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: _this
  },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h3',
    { className: __WEBPACK_IMPORTED_MODULE_4__card_css___default.a.title, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: _this
    },
    '\u041A\u043E\u0440\u0437\u0438\u043D\u0430'
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__CardItem_CardItem__["a" /* default */], {
    count: 1,
    classnames: {
      root: __WEBPACK_IMPORTED_MODULE_4__card_css___default.a.item
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: _this
  }),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__CardItem_CardItem__["a" /* default */], {
    count: 1,
    classnames: {
      root: __WEBPACK_IMPORTED_MODULE_4__card_css___default.a.item
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: _this
  }),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'footer',
    { className: __WEBPACK_IMPORTED_MODULE_4__card_css___default.a.footer, __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      { className: __WEBPACK_IMPORTED_MODULE_4__card_css___default.a.label, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: _this
      },
      '\u0421\u0443\u043C\u043C\u0430'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      { className: __WEBPACK_IMPORTED_MODULE_4__card_css___default.a.total, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: _this
      },
      '2400'
    )
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_4__card_css___default.a.submit, __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_components_Button_Button__["a" /* default */], { label: '\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0437\u0430', __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: _this
    })
  )
);
/* unused harmony export Card */


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__card_css___default.a)(Card));

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Multipler_css__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Multipler_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Multipler_css__);
var _jsxFileName = '/Users/anton/Desktop/projects/deworkacy-site/src/modules/Card/components/Multipler/Multipler.js',
    _this = this;






const Multipler = ({ children, classnames }) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      [__WEBPACK_IMPORTED_MODULE_3__Multipler_css___default.a.root]: true,
      [classnames.root]: true
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: _this
  },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    { className: __WEBPACK_IMPORTED_MODULE_3__Multipler_css___default.a.count, __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: _this
    },
    children
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_3__Multipler_css___default.a.controls, __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
        [__WEBPACK_IMPORTED_MODULE_3__Multipler_css___default.a.arrow]: true,
        [__WEBPACK_IMPORTED_MODULE_3__Multipler_css___default.a.up]: true
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: _this
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
        [__WEBPACK_IMPORTED_MODULE_3__Multipler_css___default.a.arrow]: true,
        [__WEBPACK_IMPORTED_MODULE_3__Multipler_css___default.a.down]: true
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: _this
    })
  )
);
/* unused harmony export Multipler */


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Multipler_css___default.a)(Multipler));

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(140);
    var insertCss = __webpack_require__(11);

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
      module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./Multipler.css", function() {
        content = require("!!../../../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./Multipler.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
// imports


// module
exports.push([module.i, ".Multipler__root___2gRqF {\n  min-width: 70.4px;\n  min-width: 70.4px;\n  min-width: 4.4rem;\n  min-height: 43.2px;\n  min-height: 43.2px;\n  min-height: 2.7rem;\n  background-color: rgb(255, 255, 255);\n  border-radius: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n@media (min-width: 544px) {\n  .Multipler__root___2gRqF {\n    padding: 6px 20px;\n  }\n}\n@media (min-width: 768px) {\n  .Multipler__root___2gRqF {\n    padding: 3px 16px;\n  }\n}\n.Multipler__count___1CQHp {\n  margin-right: 7px;\n  color: rgb(0, 0, 0);\n  font-size: 25.6px;\n  font-size: 25.6px;\n  font-size: 1.6rem;\n  font-weight: 700;\n  letter-spacing: 1.216px;\n  letter-spacing: 1.216px;\n  letter-spacing: 0.076rem;\n}\n@media (min-width: 544px) {\n  .Multipler__count___1CQHp {\n    font-size: 2.3rem;\n  }\n}\n@media (min-width: 768px) {\n  .Multipler__count___1CQHp {\n    font-size: 1.8rem;\n  }\n}\n.Multipler__arrow___2yEtt {\n  display: block;\n  width: 5px;\n  height: 5px;\n  margin-bottom: 2px;\n}\n.Multipler__up___2AccG {\n  width: 0;\n  height: 0;\n  border-left: 3px solid transparent;\n  border-right: 3px solid transparent;\n  border-bottom: 5px solid#d5d5d5;\n}\n.Multipler__down___evXqs {\n  width: 0;\n  height: 0;\n  border-left: 3px solid transparent;\n  border-right: 3px solid transparent;\n  border-top: 5px solid #d5d5d5;\n}\n.Multipler__controls___28zDT {\n}", "", {"version":3,"sources":["/Users/anton/Desktop/projects/deworkacy-site/src/modules/Card/components/Multipler/Multipler.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,qCAAqC;EACrC,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;CACjC;AACD;EACE;IACE,kBAAkB;GACnB;CACF;AACD;EACE;IACE,kBAAkB;GACnB;CACF;AACD;EACE,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,wBAAwB;EACxB,wBAAwB;EACxB,yBAAyB;CAC1B;AACD;EACE;IACE,kBAAkB;GACnB;CACF;AACD;EACE;IACE,kBAAkB;GACnB;CACF;AACD;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,SAAS;EACT,UAAU;EACV,mCAAmC;EACnC,oCAAoC;EACpC,gCAAgC;CACjC;AACD;EACE,SAAS;EACT,UAAU;EACV,mCAAmC;EACnC,oCAAoC;EACpC,8BAA8B;CAC/B;AACD;CACC","file":"Multipler.css","sourcesContent":[".root {\n  min-width: 70.4px;\n  min-width: 70.4px;\n  min-width: 4.4rem;\n  min-height: 43.2px;\n  min-height: 43.2px;\n  min-height: 2.7rem;\n  background-color: rgb(255, 255, 255);\n  border-radius: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n@media (min-width: 544px) {\n  .root {\n    padding: 6px 20px;\n  }\n}\n@media (min-width: 768px) {\n  .root {\n    padding: 3px 16px;\n  }\n}\n.count {\n  margin-right: 7px;\n  color: rgb(0, 0, 0);\n  font-size: 25.6px;\n  font-size: 25.6px;\n  font-size: 1.6rem;\n  font-weight: 700;\n  letter-spacing: 1.216px;\n  letter-spacing: 1.216px;\n  letter-spacing: 0.076rem;\n}\n@media (min-width: 544px) {\n  .count {\n    font-size: 2.3rem;\n  }\n}\n@media (min-width: 768px) {\n  .count {\n    font-size: 1.8rem;\n  }\n}\n.arrow {\n  display: block;\n  width: 5px;\n  height: 5px;\n  margin-bottom: 2px;\n}\n.up {\n  width: 0;\n  height: 0;\n  border-left: 3px solid transparent;\n  border-right: 3px solid transparent;\n  border-bottom: 5px solid#d5d5d5;\n}\n.down {\n  width: 0;\n  height: 0;\n  border-left: 3px solid transparent;\n  border-right: 3px solid transparent;\n  border-top: 5px solid #d5d5d5;\n}\n.controls {\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Multipler__root___2gRqF",
	"count": "Multipler__count___1CQHp",
	"arrow": "Multipler__arrow___2yEtt",
	"up": "Multipler__up___2AccG",
	"down": "Multipler__down___evXqs",
	"controls": "Multipler__controls___28zDT"
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);

function DeleteItem(props) {
    return React.createElement("svg", props, [React.createElement("path", { "fill": "#0023ff", "d": "M2.78.66l15.56 15.56a1.5 1.5 0 1 1-2.12 2.12L.66 2.78A1.5 1.5 0 1 1 2.78.66z", "key": 0 }), React.createElement("path", { "fill": "#0023ff", "d": "M18.55 2.62l-15.9 15.9a1.53 1.53 0 1 1-2.17-2.17L16.38.45a1.53 1.53 0 1 1 2.17 2.17z", "key": 1 })]);
}

DeleteItem.displayName = "DeleteItem";

DeleteItem.defaultProps = { "width": "19", "height": "19", "viewBox": "0 0 19 19", "id": "burger" };

module.exports = DeleteItem;

DeleteItem.default = DeleteItem;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(143);
    var insertCss = __webpack_require__(11);

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
      module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./cardItem.css", function() {
        content = require("!!../../../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./cardItem.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
// imports


// module
exports.push([module.i, ".cardItem__root___3E3eS {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid white;\n}\n.cardItem__inner___2sgpv {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n@media (min-width: 768px) {\n  .cardItem__inner___2sgpv {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    margin-right: 10%;\n  }\n}\n.cardItem__category___1d-yq {\n  display: block;\n  color: rgb(192, 192, 192);\n  font-weight: 400;\n  text-transform: uppercase;\n}\n@media (min-width: 320px) {\n  .cardItem__category___1d-yq {\n    font-size: 1rem;\n    letter-spacing: 0.047rem;\n    margin-bottom: 0.5rem;\n  }\n}\n@media (min-width: 544px) {\n  .cardItem__category___1d-yq {\n    font-size: 1.4rem;\n  }\n}\n@media (min-width: 768px) {\n  .cardItem__category___1d-yq {\n    font-size: 1.1rem;\n  }\n}\n.cardItem__name___3Fps5 {\n  color: rgb(0, 0, 0);\n  font-weight: 300;\n  text-transform: uppercase;\n}\n@media (min-width: 320px) {\n  .cardItem__name___3Fps5 {\n    font-size: 2.4rem;\n    letter-spacing: 0.116rem;\n  }\n}\n@media (min-width: 544px) {\n  .cardItem__name___3Fps5 {\n    font-size: 3.5rem;\n  }\n}\n@media (min-width: 768px) {\n  .cardItem__name___3Fps5 {\n    font-size: 2.8rem;\n  }\n}\n.cardItem__header___1g8Ei {\n  width: 100%;\n}\n@media (min-width: 320px) {\n  .cardItem__header___1g8Ei {\n    margin-bottom: 2rem;\n  }\n}\n@media (min-width: 768px) {\n  .cardItem__header___1g8Ei {\n    width: auto;\n    margin-bottom: 0;\n  }\n}\n.cardItem__footer___1AByv {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n@media (min-width: 320px) {\n  .cardItem__footer___1AByv {\n    margin-bottom: 1.8rem;\n  }\n}\n@media (min-width: 768px) {\n  .cardItem__footer___1AByv {\n    width: auto;\n    margin-bottom: 0;\n    margin-left: auto;\n  }\n}\n.cardItem__multipler___pwOPa {\n  margin-right: 12px;\n}\n.cardItem__price___3HbdQ {\n  color: rgb(23, 40, 250);\n  font-weight: 700;\n}\n@media (min-width: 320px) {\n  .cardItem__price___3HbdQ {\n    font-size: 1.6rem;\n    letter-spacing: 0.076rem;\n  }\n}\n@media (min-width: 544px) {\n  .cardItem__price___3HbdQ {\n    font-size: 2.3rem;\n  }\n}\n@media (min-width: 768px) {\n  .cardItem__price___3HbdQ {\n    font-size: 2.8rem;\n  }\n}\n.cardItem__clear___18STL {\n  margin-left: auto;\n}\n.cardItem__delete___2qZqF {\n  border: 1px solid #d1d1d1;\n  width: 28px;\n  height: 28px;\n  padding: 8px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n@media (min-width: 544px) {\n  .cardItem__delete___2qZqF {\n    width: 40px;\n    height: 40px;\n  }\n}\n@media (min-width: 768px) {\n  .cardItem__delete___2qZqF {\n    width: 32px;\n    height: 32px;\n  }\n}\n.cardItem__delete___2qZqF path {\n    fill: #d1d1d1;\n}\n@media (min-width: 320px) {\n  .cardItem__img___16uTB {\n    display: none;\n  }\n}\n@media (min-width: 544px) {\n  .cardItem__img___16uTB {\n    display: block;\n    margin-right: 42px;\n  }\n}\n@media (min-width: 768px) {\n  .cardItem__img___16uTB {\n    width: 86px;\n    height: 86px;\n    margin-right: 10%;\n  }\n}", "", {"version":3,"sources":["/Users/anton/Desktop/projects/deworkacy-site/src/modules/Card/components/CardItem/cardItem.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,+BAA+B;CAChC;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,oBAAoB;MAChB,gBAAgB;CACrB;AACD;EACE;IACE,oBAAoB;QAChB,qBAAqB;YACjB,aAAa;IACrB,kBAAkB;GACnB;CACF;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,iBAAiB;EACjB,0BAA0B;CAC3B;AACD;EACE;IACE,gBAAgB;IAChB,yBAAyB;IACzB,sBAAsB;GACvB;CACF;AACD;EACE;IACE,kBAAkB;GACnB;CACF;AACD;EACE;IACE,kBAAkB;GACnB;CACF;AACD;EACE,oBAAoB;EACpB,iBAAiB;EACjB,0BAA0B;CAC3B;AACD;EACE;IACE,kBAAkB;IAClB,yBAAyB;GAC1B;CACF;AACD;EACE;IACE,kBAAkB;GACnB;CACF;AACD;EACE;IACE,kBAAkB;GACnB;CACF;AACD;EACE,YAAY;CACb;AACD;EACE;IACE,oBAAoB;GACrB;CACF;AACD;EACE;IACE,YAAY;IACZ,iBAAiB;GAClB;CACF;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;CAC7B;AACD;EACE;IACE,sBAAsB;GACvB;CACF;AACD;EACE;IACE,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;GACnB;CACF;AACD;EACE,mBAAmB;CACpB;AACD;EACE,wBAAwB;EACxB,iBAAiB;CAClB;AACD;EACE;IACE,kBAAkB;IAClB,yBAAyB;GAC1B;CACF;AACD;EACE;IACE,kBAAkB;GACnB;CACF;AACD;EACE;IACE,kBAAkB;GACnB;CACF;AACD;EACE,kBAAkB;CACnB;AACD;EACE,0BAA0B;EAC1B,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE;IACE,YAAY;IACZ,aAAa;GACd;CACF;AACD;EACE;IACE,YAAY;IACZ,aAAa;GACd;CACF;AACD;IACI,cAAc;CACjB;AACD;EACE;IACE,cAAc;GACf;CACF;AACD;EACE;IACE,eAAe;IACf,mBAAmB;GACpB;CACF;AACD;EACE;IACE,YAAY;IACZ,aAAa;IACb,kBAAkB;GACnB;CACF","file":"cardItem.css","sourcesContent":[".root {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid white;\n}\n.inner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n@media (min-width: 768px) {\n  .inner {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    margin-right: 10%;\n  }\n}\n.category {\n  display: block;\n  color: rgb(192, 192, 192);\n  font-weight: 400;\n  text-transform: uppercase;\n}\n@media (min-width: 320px) {\n  .category {\n    font-size: 1rem;\n    letter-spacing: 0.047rem;\n    margin-bottom: 0.5rem;\n  }\n}\n@media (min-width: 544px) {\n  .category {\n    font-size: 1.4rem;\n  }\n}\n@media (min-width: 768px) {\n  .category {\n    font-size: 1.1rem;\n  }\n}\n.name {\n  color: rgb(0, 0, 0);\n  font-weight: 300;\n  text-transform: uppercase;\n}\n@media (min-width: 320px) {\n  .name {\n    font-size: 2.4rem;\n    letter-spacing: 0.116rem;\n  }\n}\n@media (min-width: 544px) {\n  .name {\n    font-size: 3.5rem;\n  }\n}\n@media (min-width: 768px) {\n  .name {\n    font-size: 2.8rem;\n  }\n}\n.header {\n  width: 100%;\n}\n@media (min-width: 320px) {\n  .header {\n    margin-bottom: 2rem;\n  }\n}\n@media (min-width: 768px) {\n  .header {\n    width: auto;\n    margin-bottom: 0;\n  }\n}\n.footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n@media (min-width: 320px) {\n  .footer {\n    margin-bottom: 1.8rem;\n  }\n}\n@media (min-width: 768px) {\n  .footer {\n    width: auto;\n    margin-bottom: 0;\n    margin-left: auto;\n  }\n}\n.multipler {\n  margin-right: 12px;\n}\n.price {\n  color: rgb(23, 40, 250);\n  font-weight: 700;\n}\n@media (min-width: 320px) {\n  .price {\n    font-size: 1.6rem;\n    letter-spacing: 0.076rem;\n  }\n}\n@media (min-width: 544px) {\n  .price {\n    font-size: 2.3rem;\n  }\n}\n@media (min-width: 768px) {\n  .price {\n    font-size: 2.8rem;\n  }\n}\n.clear {\n  margin-left: auto;\n}\n.delete {\n  border: 1px solid #d1d1d1;\n  width: 28px;\n  height: 28px;\n  padding: 8px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n@media (min-width: 544px) {\n  .delete {\n    width: 40px;\n    height: 40px;\n  }\n}\n@media (min-width: 768px) {\n  .delete {\n    width: 32px;\n    height: 32px;\n  }\n}\n.delete path {\n    fill: #d1d1d1;\n}\n@media (min-width: 320px) {\n  .img {\n    display: none;\n  }\n}\n@media (min-width: 544px) {\n  .img {\n    display: block;\n    margin-right: 42px;\n  }\n}\n@media (min-width: 768px) {\n  .img {\n    width: 86px;\n    height: 86px;\n    margin-right: 10%;\n  }\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "cardItem__root___3E3eS",
	"inner": "cardItem__inner___2sgpv",
	"category": "cardItem__category___1d-yq",
	"name": "cardItem__name___3Fps5",
	"header": "cardItem__header___1g8Ei",
	"footer": "cardItem__footer___1AByv",
	"multipler": "cardItem__multipler___pwOPa",
	"price": "cardItem__price___3HbdQ",
	"clear": "cardItem__clear___18STL",
	"delete": "cardItem__delete___2qZqF",
	"img": "cardItem__img___16uTB"
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(145);
    var insertCss = __webpack_require__(11);

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
      module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./card.css", function() {
        content = require("!!../../../../../node_modules/css-loader/index.js??ref--1-rules-3!../../../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-4!./card.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
// imports


// module
exports.push([module.i, ".card__title___3EQjq {\n  color: rgb(0, 0, 0);\n  font-weight: 300;\n  text-transform: uppercase;\n  margin-top: 0;\n\n}\n@media (min-width: 320px) {\n  .card__title___3EQjq {\n    letter-spacing: 0.179rem;\n    font-size: 3.7rem;\n    margin-bottom: 5.5rem;\n\n  }\n\n}\n@media (min-width: 320px) {\n  .card__item___270Ot {\n    margin-bottom: 1.8rem;\n\n  }\n  .card__item___270Ot:last-child {\n    margin-bottom: 5.6rem;\n\n  }\n\n}\n@media (min-width: 320px) {\n  .card__item___270Ot {\n    margin-bottom: 4.7rem;\n\n  }\n\n}\n.card__footer___2Zfm1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n@media (min-width: 320px) {\n  .card__footer___2Zfm1 {\n    margin-top: 3.8rem;\n    margin-bottom: 1.9rem;\n\n  }\n\n}\n@media (min-width: 544px) {\n  .card__footer___2Zfm1 {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-bottom: 3rem;\n\n  }\n\n}\n@media (min-width: 768px) {\n  .card__footer___2Zfm1 {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n\n  }\n\n}\n.card__label___1bEUY {\n  color: rgb(0, 0, 0);\n  font-weight: 300;\n  text-transform: uppercase;\n}\n@media (min-width: 320px) {\n  .card__label___1bEUY {\n    font-size: 1rem;\n    letter-spacing: 0.047rem;\n    margin-right: 19px;\n\n  }\n\n}\n@media (min-width: 544px) {\n  .card__label___1bEUY {\n    font-size: 1.4rem;\n\n  }\n\n}\n.card__total___2dA8z {\n  color: rgb(23, 40, 250);\n  font-weight: 700;\n}\n@media (min-width: 320px) {\n  .card__total___2dA8z {\n    font-size: 3.7rem;\n    letter-spacing: 0.179rem;\n\n  }\n\n}\n@media (min-width: 544px) {\n  .card__total___2dA8z {\n    font-size: 5.4rem;\n    letter-spacing: 0.179rem;\n\n  }\n\n}\n.card__submit___1yuHf {\n  text-align: center;\n}\n@media (min-width: 768px) {\n  .card__submit___1yuHf {\n    text-align: right;\n\n  }\n\n}", "", {"version":3,"sources":["/Users/anton/Desktop/projects/deworkacy-site/src/modules/Card/components/Card/card.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,0BAA0B;EAC1B,cAAc;;CAEf;AACD;EACE;IACE,yBAAyB;IACzB,kBAAkB;IAClB,sBAAsB;;GAEvB;;CAEF;AACD;EACE;IACE,sBAAsB;;GAEvB;EACD;IACE,sBAAsB;;GAEvB;;CAEF;AACD;EACE;IACE,sBAAsB;;GAEvB;;CAEF;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;CAC7B;AACD;EACE;IACE,mBAAmB;IACnB,sBAAsB;;GAEvB;;CAEF;AACD;EACE;IACE,yBAAyB;QACrB,sBAAsB;YAClB,wBAAwB;IAChC,oBAAoB;;GAErB;;CAEF;AACD;EACE;IACE,sBAAsB;QAClB,mBAAmB;YACf,0BAA0B;;GAEnC;;CAEF;AACD;EACE,oBAAoB;EACpB,iBAAiB;EACjB,0BAA0B;CAC3B;AACD;EACE;IACE,gBAAgB;IAChB,yBAAyB;IACzB,mBAAmB;;GAEpB;;CAEF;AACD;EACE;IACE,kBAAkB;;GAEnB;;CAEF;AACD;EACE,wBAAwB;EACxB,iBAAiB;CAClB;AACD;EACE;IACE,kBAAkB;IAClB,yBAAyB;;GAE1B;;CAEF;AACD;EACE;IACE,kBAAkB;IAClB,yBAAyB;;GAE1B;;CAEF;AACD;EACE,mBAAmB;CACpB;AACD;EACE;IACE,kBAAkB;;GAEnB;;CAEF","file":"card.css","sourcesContent":[".title {\n  color: rgb(0, 0, 0);\n  font-weight: 300;\n  text-transform: uppercase;\n  margin-top: 0;\n\n}\n@media (min-width: 320px) {\n  .title {\n    letter-spacing: 0.179rem;\n    font-size: 3.7rem;\n    margin-bottom: 5.5rem;\n\n  }\n\n}\n@media (min-width: 320px) {\n  .item {\n    margin-bottom: 1.8rem;\n\n  }\n  .item:last-child {\n    margin-bottom: 5.6rem;\n\n  }\n\n}\n@media (min-width: 320px) {\n  .item {\n    margin-bottom: 4.7rem;\n\n  }\n\n}\n.footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n@media (min-width: 320px) {\n  .footer {\n    margin-top: 3.8rem;\n    margin-bottom: 1.9rem;\n\n  }\n\n}\n@media (min-width: 544px) {\n  .footer {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-bottom: 3rem;\n\n  }\n\n}\n@media (min-width: 768px) {\n  .footer {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n\n  }\n\n}\n.label {\n  color: rgb(0, 0, 0);\n  font-weight: 300;\n  text-transform: uppercase;\n}\n@media (min-width: 320px) {\n  .label {\n    font-size: 1rem;\n    letter-spacing: 0.047rem;\n    margin-right: 19px;\n\n  }\n\n}\n@media (min-width: 544px) {\n  .label {\n    font-size: 1.4rem;\n\n  }\n\n}\n.total {\n  color: rgb(23, 40, 250);\n  font-weight: 700;\n}\n@media (min-width: 320px) {\n  .total {\n    font-size: 3.7rem;\n    letter-spacing: 0.179rem;\n\n  }\n\n}\n@media (min-width: 544px) {\n  .total {\n    font-size: 5.4rem;\n    letter-spacing: 0.179rem;\n\n  }\n\n}\n.submit {\n  text-align: center;\n}\n@media (min-width: 768px) {\n  .submit {\n    text-align: right;\n\n  }\n\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"title": "card__title___3EQjq",
	"item": "card__item___270Ot",
	"footer": "card__footer___2Zfm1",
	"label": "card__label___1bEUY",
	"total": "card__total___2dA8z",
	"submit": "card__submit___1yuHf"
};

/***/ })
]);;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2NhcmQuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9yb3V0ZXMvY2FyZC9pbmRleC5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL0xpbmsvTGluay5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL0J1cmdlci9CdXJnZXIuanMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9BY2NvcmRlb24vQWNjb3JkZW9uLmNzcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL2dyaWQuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dyaWQuY3NzP2M1M2QiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL2NvbXBvbmVudHMvQXNzaWRlL0Fzc2lkZS5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL0Fzc2lkZS9Bc3NpZGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Fzc2lkZS9Bc3NpZGUuY3NzP2I2NjYiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uanMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5jc3M/ZDg2OCIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL0J1cmdlci9pY29ucy9idXJnZXItY2xvc2Uuc3ZnP25hbWU9QnVyZ2VyQ2xvc2UiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9CdXJnZXIvaWNvbnMvYnVyZ2VyLXNob3cuc3ZnP25hbWU9QnVyZ2VyU2hvdyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL0J1cmdlci9CdXJnZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1cmdlci9CdXJnZXIuY3NzP2UxODIiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL2ljb25zL2hvbWUuc3ZnP25hbWU9SG9tZUljb24iLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL2ljb25zL3NlYXJjaC5zdmc/bmFtZT1TZWFyY2hJY29uIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9pY29ucy9iYXNrZXQuc3ZnP25hbWU9QmFza2V0SWNvbiIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL01lbnVQYW5lbC9NZW51UGFuZWwuanMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9BY2NvcmRlb24vaW5kZXguanMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9BY2NvcmRlb24vQWNjb3JkZW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FjY29yZGVvbi9BY2NvcmRlb24uY3NzPzZhODMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9BY2NvcmRlb24vQWNjb3JkZW9uSXRlbS5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL0FjY29yZGVvbi9pY29ucy9hcnJvdy5zdmc/bmFtZT1BcnJvdyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL01lbnVQYW5lbC9NZW51UGFuZWwuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbnVQYW5lbC9NZW51UGFuZWwuY3NzP2E0ZDUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz8wMzU4IiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZmxleGJveC1ncmlkL2Rpc3QvcmVhY3QtZmxleGJveC1ncmlkLmNzcz82YmY0IiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvbm9kZV9tb2R1bGVzL3JlYWN0LWZsZXhib3gtZ3JpZC9kaXN0L3JlYWN0LWZsZXhib3gtZ3JpZC5jc3MiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzcz9jZGYwIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL0J1dHRvbi9ibHVlVGhlbWUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9ibHVlVGhlbWUuY3NzPzZlMzEiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9HcmlkL2luZGV4LmpzIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL2NvbXBvbmVudHMvR3JpZC9Db2wuanMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9HcmlkL1Jvdy5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZC5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9tb2R1bGVzL0NhcmQvY29tcG9uZW50cy9DYXJkSXRlbS9DYXJkSXRlbS5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9yb3V0ZXMvY2FyZC9DYXJkLmpzIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL3JvdXRlcy9jYXJkL2NhcmQuY3NzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvY2FyZC9jYXJkLmNzcz82OGNhIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL21vZHVsZXMvQ2FyZC9pbmRleC5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9tb2R1bGVzL0NhcmQvY29tcG9uZW50cy9DYXJkL0NhcmQuanMiLCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvbW9kdWxlcy9DYXJkL2NvbXBvbmVudHMvTXVsdGlwbGVyL011bHRpcGxlci5qcyIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9tb2R1bGVzL0NhcmQvY29tcG9uZW50cy9NdWx0aXBsZXIvTXVsdGlwbGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9DYXJkL2NvbXBvbmVudHMvTXVsdGlwbGVyL011bHRpcGxlci5jc3M/ZTlkNiIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9tb2R1bGVzL0NhcmQvY29tcG9uZW50cy9DYXJkSXRlbS9pY29ucy9kZWxldGUuc3ZnP25hbWU9RGVsZXRlSXRlbSIsIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9tb2R1bGVzL0NhcmQvY29tcG9uZW50cy9DYXJkSXRlbS9jYXJkSXRlbS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ2FyZC9jb21wb25lbnRzL0NhcmRJdGVtL2NhcmRJdGVtLmNzcz80YWJjIiwiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL21vZHVsZXMvQ2FyZC9jb21wb25lbnRzL0NhcmQvY2FyZC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ2FyZC9jb21wb25lbnRzL0NhcmQvY2FyZC5jc3M/MzdhOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FyZFJvb3QgZnJvbSAnLi9DYXJkJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5hc3luYyBmdW5jdGlvbiBhY3Rpb24oeyBmZXRjaCB9KSB7XG4gIHJldHVybiB7XG4gICAgY2h1bmtzOiBbJ2NhcmQnXSxcbiAgICB0aXRsZTogJ1JlYWN0IFN0YXJ0ZXIgS2l0JyxcbiAgICBwYXRoOiAnL2Jhc2tldCcsXG4gICAgY29tcG9uZW50OiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Q2FyZFJvb3QgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICksXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL2NhcmQvaW5kZXguanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnLi4vLi4vaGlzdG9yeSc7XG5cbmZ1bmN0aW9uIGlzTGVmdENsaWNrRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cblxuY2xhc3MgTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdG86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2xpY2s6IG51bGwsXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB8fCAhaXNMZWZ0Q2xpY2tFdmVudChldmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGlzdG9yeS5wdXNoKHRoaXMucHJvcHMudG8pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9e3RvfSB7Li4ucHJvcHN9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0xpbmsvTGluay5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnVyZ2VyQ2xvc2UgZnJvbSAnLSFiYWJlbC1sb2FkZXIhc3ZnLXJlYWN0LWxvYWRlciEuL2ljb25zL2J1cmdlci1jbG9zZS5zdmc/bmFtZT1CdXJnZXJDbG9zZSc7XG5pbXBvcnQgQnVyZ2VyU2hvdyBmcm9tICctIWJhYmVsLWxvYWRlciFzdmctcmVhY3QtbG9hZGVyIS4vaWNvbnMvYnVyZ2VyLXNob3cuc3ZnP25hbWU9QnVyZ2VyU2hvdyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgcyBmcm9tICcuL0J1cmdlci5jc3MnO1xuXG5jb25zdCBCdXJnZXIgPSAoeyBzaG93LCBvbkNsaWNrLCBpc1N0YXRpYyB9KSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgIFtzLnJvb3RdOiB0cnVlLFxuICAgICAgW3Muc3RhdGljXTogaXNTdGF0aWMsXG4gICAgfSl9XG4gICAgb25DbGljaz17b25DbGlja31cbiAgPlxuICAgIDxzcGFuIGNsYXNzTmFtZT17cy5pY29ufT5cbiAgICAgIHtzaG93ID8gKFxuICAgICAgICA8QnVyZ2VyQ2xvc2UgY2xhc3NOYW1lPXtzLmJ1cmdlcn0gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXJnZXJTaG93IGNsYXNzTmFtZT17cy5idXJnZXJ9IC8+XG4gICAgICApfVxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4pO1xuQnVyZ2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNTdGF0aWM6IGZhbHNlLFxufTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoQnVyZ2VyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9CdXJnZXIvQnVyZ2VyLmpzIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9BY2NvcmRlb24uY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL0FjY29yZGVvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9BY2NvcmRlb24uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvQWNjb3JkZW9uL0FjY29yZGVvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9ncmlkLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9ncmlkLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL2dyaWQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZ3JpZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ncmlkX19jb250YWluZXJfX18xcWRSSiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogIDExNzBweDtcXG4gIHBhZGRpbmctbGVmdDogMzJweDtcXG4gIHBhZGRpbmctbGVmdDogMzJweDtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAuZ3JpZF9fY29udGFpbmVyX19fMXFkUkoge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICB9XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9ncmlkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLG9CQUFvQjtHQUNyQjtDQUNGXCIsXCJmaWxlXCI6XCJncmlkLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAgMTE3MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgcGFkZGluZy1yaWdodDogMzJweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJncmlkX19jb250YWluZXJfX18xcWRSSlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL2dyaWQuY3NzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgQXNzaWRlIGZyb20gJ2NvbXBvbmVudHMvQXNzaWRlL0Fzc2lkZSc7XG5pbXBvcnQgTWVudVBhbmVsIGZyb20gJ2NvbXBvbmVudHMvTWVudVBhbmVsL01lbnVQYW5lbCc7XG5cbi8vIGV4dGVybmFsLWdsb2JhbCBzdHlsZXMgbXVzdCBiZSBpbXBvcnRlZCBpbiB5b3VyIEpTLlxuaW1wb3J0IG5vcm1hbGl6ZUNzcyBmcm9tICdub3JtYWxpemUuY3NzJztcbmltcG9ydCBncmlkQ3NzIGZyb20gJ3JlYWN0LWZsZXhib3gtZ3JpZC9kaXN0L3JlYWN0LWZsZXhib3gtZ3JpZC5jc3MnO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ3JlYWN0LWZsZXhib3gtZ3JpZCc7XG5pbXBvcnQgZ3JpZCBmcm9tICdjb21wb25lbnRzL2dyaWQuY3NzJztcbmltcG9ydCBzIGZyb20gJy4vTGF5b3V0LmNzcyc7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgaXNTaG93OiBmYWxzZSxcbiAgICBhY3RpdmVBY2NvcmRlb25JbmRleDogMCxcbiAgfTtcblxuICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNTaG93OiAhdGhpcy5zdGF0ZS5pc1Nob3cgfSk7XG4gIGhhbmRsZUFjY29yZGVvblRvZ2dsZSA9IGluZGV4ID0+XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVBY2NvcmRlb25JbmRleDpcbiAgICAgICAgaW5kZXggPT09IHRoaXMuc3RhdGUuYWN0aXZlQWNjb3JkZW9uSW5kZXggPyBudWxsIDogaW5kZXgsXG4gICAgfSk7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICAgIDxBc3NpZGVcbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICBidXJnZXI9e3tcbiAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlVG9nZ2xlLFxuICAgICAgICAgICAgc2hvdzogdGhpcy5zdGF0ZS5pc1Nob3csXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxNZW51UGFuZWxcbiAgICAgICAgICBoYW5kbGVUb2dnbGU9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgICAgIGlzU2hvdz17dGhpcy5zdGF0ZS5pc1Nob3d9XG4gICAgICAgICAgYWN0aXZlQWNjb3JkZW9uSW5kZXg9e3RoaXMuc3RhdGUuYWN0aXZlQWNjb3JkZW9uSW5kZXh9XG4gICAgICAgICAgaGFuZGxlQWNjb3JkZW9uVG9nZ2xlPXt0aGlzLmhhbmRsZUFjY29yZGVvblRvZ2dsZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhncmlkQ3NzLCBub3JtYWxpemVDc3MsIHMsIGdyaWQpKExheW91dCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0Fzc2lkZS5jc3MnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24nO1xuXG5jb25zdCBBc3NpZGUgPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgIDx1bCBjbGFzc05hbWU9e3MuY2F0ZWdvcmllc30+XG4gICAgICA8TmF2aWdhdGlvbiBcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoQXNzaWRlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9Bc3NpZGUvQXNzaWRlLmpzIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9Bc3NpZGUuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL0Fzc2lkZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9Bc3NpZGUuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvQXNzaWRlL0Fzc2lkZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5Bc3NpZGVfX3Jvb3RfX19PTUd1cyB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAyLjFyZW0gcmdiYSgyMTgsIDIxOCwgMjE4LCAuNSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyLjFyZW0gcmdiYSgyMTgsIDIxOCwgMjE4LCAuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLkFzc2lkZV9fcm9vdF9fX09NR3VzIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogYXV0bztcXG4gICAgbWluLWhlaWdodDogNjBweDtcXG4gICAgcGFkZGluZzogMTNweCAyMHB4IDEzcHggMjBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuQXNzaWRlX19yb290X19fT01HdXMge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHBhZGRpbmc6IDEwMHB4IDBweCA0MnB4IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICB9XFxufVxcbi5Bc3NpZGVfX2ljb25fX19yVF9NZiB7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4XFxufVxcbi5Bc3NpZGVfX2ljb25fX19yVF9NZjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5Bc3NpZGVfX2hlYWRlcl9fXzJ5cy1nIHtcXG4gIG1hcmdpbi1ib3R0b206IDE0NHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTQ0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA5cmVtO1xcbn1cXG4uQXNzaWRlX19jYXRlZ29yaWVzX19fMnBPeEoge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL2NvbXBvbmVudHMvQXNzaWRlL0Fzc2lkZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1REFBdUQ7VUFDL0MsK0NBQStDO0VBQ3ZELHFDQUFxQztDQUN0QztBQUNEO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLGFBQWE7SUFDYixTQUFTO0lBQ1QsUUFBUTtJQUNSLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsNkJBQTZCO0dBQzlCO0NBQ0Y7QUFDRDtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixRQUFRO0lBQ1IsVUFBVTtJQUNWLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7R0FDYjtDQUNGO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtDQUNYXCIsXCJmaWxlXCI6XCJBc3NpZGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb290IHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDIuMXJlbSByZ2JhKDIxOCwgMjE4LCAyMTgsIC41KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDIuMXJlbSByZ2JhKDIxOCwgMjE4LCAyMTgsIC41KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAucm9vdCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICAgIHBhZGRpbmc6IDEzcHggMjBweCAxM3B4IDIwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnJvb3Qge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHBhZGRpbmc6IDEwMHB4IDBweCA0MnB4IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICB9XFxufVxcbi5pY29uIHtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHhcXG59XFxuLmljb246bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDE0NHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTQ0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA5cmVtO1xcbn1cXG4uY2F0ZWdvcmllcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiQXNzaWRlX19yb290X19fT01HdXNcIixcblx0XCJpY29uXCI6IFwiQXNzaWRlX19pY29uX19fclRfTWZcIixcblx0XCJoZWFkZXJcIjogXCJBc3NpZGVfX2hlYWRlcl9fXzJ5cy1nXCIsXG5cdFwiY2F0ZWdvcmllc1wiOiBcIkFzc2lkZV9fY2F0ZWdvcmllc19fXzJwT3hKXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvQXNzaWRlL0Fzc2lkZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL05hdmlnYXRpb24uY3NzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuaW1wb3J0IEJ1cmdlciBmcm9tICdjb21wb25lbnRzL0J1cmdlci9CdXJnZXInO1xuaW1wb3J0IEhvbWVJY29uIGZyb20gJy0hYmFiZWwtbG9hZGVyIXN2Zy1yZWFjdC1sb2FkZXIhLi9pY29ucy9ob21lLnN2Zz9uYW1lPUhvbWVJY29uJztcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJy0hYmFiZWwtbG9hZGVyIXN2Zy1yZWFjdC1sb2FkZXIhLi9pY29ucy9zZWFyY2guc3ZnP25hbWU9U2VhcmNoSWNvbic7XG5pbXBvcnQgQmFza2V0SWNvbiBmcm9tICctIWJhYmVsLWxvYWRlciFzdmctcmVhY3QtbG9hZGVyIS4vaWNvbnMvYmFza2V0LnN2Zz9uYW1lPUJhc2tldEljb24nO1xuXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB9O1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzbmFtZXM6IHtcbiAgICAgIHJvb3Q6ICcnLFxuICAgIH0sXG4gICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gIH07XG5cbiAgaXNBY3RpdmVQYXRoID0gcGF0aCA9PiB0aGlzLmNvbnRleHQubG9jYXRpb24ucGF0aCA9PT0gcGF0aDtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgW3Mucm9vdF06IHRydWUsXG4gICAgICAgICAgW3MuaG9yaXpvbmF0YWxdOiB0aGlzLnByb3BzLmhvcml6b25hdGFsLFxuICAgICAgICAgIFt0aGlzLnByb3BzLmNsYXNzbmFtZXMucm9vdF06IHRydWUsXG4gICAgICAgIH0pfVxuICAgICAgICByb2xlPVwibmF2aWdhdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzLmxpbmt9ICR7dGhpcy5pc0FjdGl2ZVBhdGgoJy9ob21lJylcbiAgICAgICAgICAgID8gcy5hY3RpdmVMaW5rXG4gICAgICAgICAgICA6ICcnfWB9XG4gICAgICAgICAgdG89XCIvaG9tZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8SG9tZUljb24gY2xhc3NOYW1lPXtzLmljb259IC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3MubGlua30gJHt0aGlzLmlzQWN0aXZlUGF0aCgnL2Jhc2tldCcpXG4gICAgICAgICAgICA/IHMuYWN0aXZlTGlua1xuICAgICAgICAgICAgOiAnJ31gfVxuICAgICAgICAgIHRvPVwiL2Jhc2tldFwiXG4gICAgICAgID5cbiAgICAgICAgICA8QmFza2V0SWNvbiBjbGFzc05hbWU9e3MuaWNvbn0gLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cy5saW5rfSAke3RoaXMuaXNBY3RpdmVQYXRoKCcvc2VhcmNoJylcbiAgICAgICAgICAgID8gcy5hY3RpdmVMaW5rXG4gICAgICAgICAgICA6ICcnfWB9XG4gICAgICAgICAgdG89XCIvc2VhcmNoXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT17cy5pY29ufSAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmJ1cmdlcn0+XG4gICAgICAgICAgPEJ1cmdlciBpc1N0YXRpYyB7Li4udGhpcy5wcm9wcy5idXJnZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKE5hdmlnYXRpb24pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vTmF2aWdhdGlvbi5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vTmF2aWdhdGlvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9OYXZpZ2F0aW9uLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcXG4gIC5OYXZpZ2F0aW9uX19yb290X19fMmdjSngge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLk5hdmlnYXRpb25fX3Jvb3RfX18yZ2NKeCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1heC13aWR0aDogMTAwcHg7XFxuICB9XFxufVxcbi5OYXZpZ2F0aW9uX19saW5rX19fTnRsMzU6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uTmF2aWdhdGlvbl9fbGlua19fX050bDM1OmhvdmVyIHBhdGgsIC5OYXZpZ2F0aW9uX19saW5rX19fTnRsMzU6YWN0aXZlIHBhdGgge1xcbiAgICAgIGZpbGw6IHJnYigxOCwgMzAsIDE3NCk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLk5hdmlnYXRpb25fX2xpbmtfX19OdGwzNSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzN3B4O1xcbiAgfVxcbiAgLk5hdmlnYXRpb25fX2xpbmtfX19OdGwzNTpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5OYXZpZ2F0aW9uX19saW5rX19fTnRsMzUge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB9XFxuICAuTmF2aWdhdGlvbl9fbGlua19fX050bDM1Omxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgfVxcbn1cXG4uTmF2aWdhdGlvbl9fYWN0aXZlTGlua19fXzNmRncwIHBhdGgge1xcbiAgICBmaWxsOiByZ2IoMjMsIDQwLCAyNTApO1xcbiAgfVxcbi5OYXZpZ2F0aW9uX19pY29uX19fMk0xZ017XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLk5hdmlnYXRpb25fX2ljb25fX18yTTFnTSB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICB9XFxufVxcbi5OYXZpZ2F0aW9uX19idXJnZXJfX18xNkozLSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuTmF2aWdhdGlvbl9fYnVyZ2VyX19fMTZKMy0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HO0FBQ0g7Ozs7Ozs7R0FPRztBQUNIO0VBQ0U7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RSxFQUFFLGdDQUFnQyxFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixDQUFDLGlDQUFpQztDQUMvTTtBQUNEO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCwwQkFBMEI7UUFDdEIsdUJBQXVCO1lBQ25CLG9CQUFvQjtJQUM1QixpQkFBaUI7R0FDbEI7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7R0FDbEI7Q0FDRjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7TUFDTSx1QkFBdUI7Q0FDNUI7QUFDRDtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLG1CQUFtQjtHQUNwQjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0NBQ0Y7QUFDRDtFQUNFO0lBQ0Usb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7Q0FDRjtBQUNEO0lBQ0ksdUJBQXVCO0dBQ3hCO0FBQ0g7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWE7R0FDZDtDQUNGO0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFO0lBQ0UsY0FBYztHQUNmO0NBQ0ZcIixcImZpbGVcIjpcIk5hdmlnYXRpb24uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcXG4gIC5yb290IHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5yb290IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcXG4gIH1cXG59XFxuLmxpbms6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ubGluazpob3ZlciBwYXRoLCAubGluazphY3RpdmUgcGF0aCB7XFxuICAgICAgZmlsbDogcmdiKDE4LCAzMCwgMTc0KTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAubGluayB7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzN3B4O1xcbiAgfVxcbiAgLmxpbms6bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAubGluayB7XFxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gIH1cXG4gIC5saW5rOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgfVxcbn1cXG4uYWN0aXZlTGluayBwYXRoIHtcXG4gICAgZmlsbDogcmdiKDIzLCA0MCwgMjUwKTtcXG4gIH1cXG4uaWNvbntcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAuaWNvbiB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICB9XFxufVxcbi5idXJnZXIge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiTmF2aWdhdGlvbl9fcm9vdF9fXzJnY0p4XCIsXG5cdFwibGlua1wiOiBcIk5hdmlnYXRpb25fX2xpbmtfX19OdGwzNVwiLFxuXHRcImFjdGl2ZUxpbmtcIjogXCJOYXZpZ2F0aW9uX19hY3RpdmVMaW5rX19fM2ZGdzBcIixcblx0XCJpY29uXCI6IFwiTmF2aWdhdGlvbl9faWNvbl9fXzJNMWdNXCIsXG5cdFwiYnVyZ2VyXCI6IFwiTmF2aWdhdGlvbl9fYnVyZ2VyX19fMTZKMy1cIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIEJ1cmdlckNsb3NlIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIscHJvcHMsW1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZmlsbFwiOlwiIzAwMjNmZlwiLFwiZFwiOlwiTTIuNzguNjZsMTUuNTYgMTUuNTZhMS41IDEuNSAwIDEgMS0yLjEyIDIuMTJMLjY2IDIuNzhBMS41IDEuNSAwIDEgMSAyLjc4LjY2elwiLFwia2V5XCI6MH0pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZmlsbFwiOlwiIzAwMjNmZlwiLFwiZFwiOlwiTTE4LjU1IDIuNjJsLTE1LjkgMTUuOWExLjUzIDEuNTMgMCAxIDEtMi4xNy0yLjE3TDE2LjM4LjQ1YTEuNTMgMS41MyAwIDEgMSAyLjE3IDIuMTd6XCIsXCJrZXlcIjoxfSldKTtcbn1cblxuQnVyZ2VyQ2xvc2UuZGlzcGxheU5hbWUgPSBcIkJ1cmdlckNsb3NlXCI7XG5cbkJ1cmdlckNsb3NlLmRlZmF1bHRQcm9wcyA9IHtcIndpZHRoXCI6XCIxOVwiLFwiaGVpZ2h0XCI6XCIxOVwiLFwidmlld0JveFwiOlwiMCAwIDE5IDE5XCIsXCJpZFwiOlwiYnVyZ2VyXCJ9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1cmdlckNsb3NlO1xuXG5CdXJnZXJDbG9zZS5kZWZhdWx0ID0gQnVyZ2VyQ2xvc2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvQnVyZ2VyL2ljb25zL2J1cmdlci1jbG9zZS5zdmc/bmFtZT1CdXJnZXJDbG9zZSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIEJ1cmdlclNob3cgKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIixwcm9wcyxbUmVhY3QuY3JlYXRlRWxlbWVudChcImRlZnNcIix7XCJrZXlcIjowfSxbUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7XCJpZFwiOlwiYVwiLFwiZFwiOlwiTTEgMGgxNmMuNTUgMCAxIC42NyAxIDEuNVMxNy41NSAzIDE3IDNIMWMtLjU1IDAtMS0uNjctMS0xLjVTLjQ1IDAgMSAwelwiLFwia2V5XCI6MH0pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiaWRcIjpcImJcIixcImRcIjpcIk0xIDZoMTZjLjU1IDAgMSAuNjcgMSAxLjVTMTcuNTUgOSAxNyA5SDFjLS41NSAwLTEtLjY3LTEtMS41Uy40NSA2IDEgNnpcIixcImtleVwiOjF9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImlkXCI6XCJjXCIsXCJkXCI6XCJNMSAxMmgxNmMuNTUgMCAxIC42NyAxIDEuNXMtLjQ1IDEuNS0xIDEuNUgxYy0uNTUgMC0xLS42Ny0xLTEuNVMuNDUgMTIgMSAxMnpcIixcImtleVwiOjJ9KV0pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkZXNjXCIse1wia2V5XCI6MX0sXCJHZW5lcmF0ZWQgd2l0aCBBdm9jb2RlLlwiKSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjJ9LFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1c2VcIix7XCJmaWxsXCI6XCIjMDAyM2ZmXCIsXCJ4bGlua0hyZWZcIjpcIiNhXCJ9KSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjozfSxSZWFjdC5jcmVhdGVFbGVtZW50KFwidXNlXCIse1wiZmlsbFwiOlwiIzAwMjNmZlwiLFwieGxpbmtIcmVmXCI6XCIjYlwifSkpLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIse1wia2V5XCI6NH0sUmVhY3QuY3JlYXRlRWxlbWVudChcInVzZVwiLHtcImZpbGxcIjpcIiMwMDIzZmZcIixcInhsaW5rSHJlZlwiOlwiI2NcIn0pKV0pO1xufVxuXG5CdXJnZXJTaG93LmRpc3BsYXlOYW1lID0gXCJCdXJnZXJTaG93XCI7XG5cbkJ1cmdlclNob3cuZGVmYXVsdFByb3BzID0ge1wid2lkdGhcIjpcIjE4XCIsXCJoZWlnaHRcIjpcIjE1XCIsXCJ2aWV3Qm94XCI6XCIwIDAgMTggMTVcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gQnVyZ2VyU2hvdztcblxuQnVyZ2VyU2hvdy5kZWZhdWx0ID0gQnVyZ2VyU2hvdztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9CdXJnZXIvaWNvbnMvYnVyZ2VyLXNob3cuc3ZnP25hbWU9QnVyZ2VyU2hvdyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vQnVyZ2VyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9CdXJnZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vQnVyZ2VyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0J1cmdlci9CdXJnZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcblxcbi5CdXJnZXJfX3Jvb3RfX18ySkhTYSB7XFxuICB3aWR0aDogODMuMnB4O1xcbiAgd2lkdGg6IDgzLjJweDtcXG4gIHdpZHRoOiA1LjJyZW07XFxuICBoZWlnaHQ6IDgzLjJweDtcXG4gIGhlaWdodDogODMuMnB4O1xcbiAgaGVpZ2h0OiA1LjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDIuMXJlbSByZ2JhKDIxOCwgMjE4LCAyMTgsIC41KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDIuMXJlbSByZ2JhKDIxOCwgMjE4LCAyMTgsIC41KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGN1cnNvcjogcG9pbnRlclxcbn1cXG5cXG4uQnVyZ2VyX19yb290X19fMkpIU2E6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAzMCwgMTc0KTtcXG59XFxuXFxuLkJ1cmdlcl9fcm9vdF9fXzJKSFNhOmhvdmVyIHN2ZyB7XFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLkJ1cmdlcl9fcm9vdF9fXzJKSFNhOmhvdmVyIHBhdGgsLkJ1cmdlcl9fcm9vdF9fXzJKSFNhOmhvdmVyIGcsLkJ1cmdlcl9fcm9vdF9fXzJKSFNhOmhvdmVyIHVzZSB7XFxuICAgICBmaWxsOiAjZmZmO1xcbn1cXG5cXG4uQnVyZ2VyX19yb290X19fMkpIU2E6YmVmb3JlIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAwO1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uQnVyZ2VyX19pY29uX19fSExqWWQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDE5cHg7XFxuICBoZWlnaHQ6IDE5cHg7XFxufVxcblxcbi5CdXJnZXJfX2J1cmdlckNsb3NlSWNvbl9fX0lFSkdUIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uQnVyZ2VyX19idXJnZXJfX19ieEVsQ3t9XFxuXFxuLkJ1cmdlcl9fc3RhdGljX19fNGNybkkge1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9jb21wb25lbnRzL0J1cmdlci9CdXJnZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDO0NBQy9NOztBQUVEO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVEQUF1RDtVQUMvQywrQ0FBK0M7RUFDdkQscUNBQXFDO0VBQ3JDLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxtQ0FBbUM7Q0FDcEM7O0FBRUQ7S0FDSyw4QkFBOEI7Q0FDbEM7O0FBRUQ7S0FDSyxXQUFXO0NBQ2Y7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLDhCQUE4QjtDQUMvQjs7QUFFRCx5QkFBUzs7QUFFVDtFQUNFLGlCQUFpQjtDQUNsQlwiLFwiZmlsZVwiOlwiQnVyZ2VyLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcblxcbi5yb290IHtcXG4gIHdpZHRoOiA4My4ycHg7XFxuICB3aWR0aDogODMuMnB4O1xcbiAgd2lkdGg6IDUuMnJlbTtcXG4gIGhlaWdodDogODMuMnB4O1xcbiAgaGVpZ2h0OiA4My4ycHg7XFxuICBoZWlnaHQ6IDUuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMi4xcmVtIHJnYmEoMjE4LCAyMTgsIDIxOCwgLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMi4xcmVtIHJnYmEoMjE4LCAyMTgsIDIxOCwgLjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgY3Vyc29yOiBwb2ludGVyXFxufVxcblxcbi5yb290OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMzAsIDE3NCk7XFxufVxcblxcbi5yb290OmhvdmVyIHN2ZyB7XFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnJvb3Q6aG92ZXIgcGF0aCwucm9vdDpob3ZlciBnLC5yb290OmhvdmVyIHVzZSB7XFxuICAgICBmaWxsOiAjZmZmO1xcbn1cXG5cXG4ucm9vdDpiZWZvcmUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDA7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAxOXB4O1xcbiAgaGVpZ2h0OiAxOXB4O1xcbn1cXG5cXG4uYnVyZ2VyQ2xvc2VJY29uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uYnVyZ2Vye31cXG5cXG4uc3RhdGljIHtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiQnVyZ2VyX19yb290X19fMkpIU2FcIixcblx0XCJpY29uXCI6IFwiQnVyZ2VyX19pY29uX19fSExqWWRcIixcblx0XCJidXJnZXJDbG9zZUljb25cIjogXCJCdXJnZXJfX2J1cmdlckNsb3NlSWNvbl9fX0lFSkdUXCIsXG5cdFwiYnVyZ2VyXCI6IFwiQnVyZ2VyX19idXJnZXJfX19ieEVsQ1wiLFxuXHRcInN0YXRpY1wiOiBcIkJ1cmdlcl9fc3RhdGljX19fNGNybklcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9CdXJnZXIvQnVyZ2VyLmNzc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBIb21lSWNvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHByb3BzLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZmlsbFwiOlwiI2Q3ZDdkN1wiLFwiZFwiOlwiTTE0LjU1IDguNzN2OS4yaC0zLjAyVjEzLjdjMC0uNjctLjU0LTEuMi0xLjItMS4ySDYuN2MtLjY2IDAtMS4yLjUzLTEuMiAxLjJ2NC4yMkgyLjQ5di05LjJsNi4wMy02LjAyek05LjA1LjY4QS43NS43NSAwIDAgMCA4IC42OEwxLjA0IDcuNjNhMS4yIDEuMiAwIDAgMC0uMzUuODV2MTAuMDVjMCAuNjYuNTQgMS4yIDEuMiAxLjJoNC4yMmMuNjcgMCAxLjItLjUzIDEuMi0xLjJ2LTQuMjJoMi40MnY0LjIyYzAgLjY2LjU0IDEuMiAxLjIgMS4yaDQuMjJjLjY2IDAgMS4yLS41MyAxLjItMS4yVjguNDhjMC0uMzItLjEyLS42Mi0uMzUtLjg1elwifSkpO1xufVxuXG5Ib21lSWNvbi5kaXNwbGF5TmFtZSA9IFwiSG9tZUljb25cIjtcblxuSG9tZUljb24uZGVmYXVsdFByb3BzID0ge1wid2lkdGhcIjpcIjE3XCIsXCJoZWlnaHRcIjpcIjIwXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMTcgMjBcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gSG9tZUljb247XG5cbkhvbWVJY29uLmRlZmF1bHQgPSBIb21lSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL2ljb25zL2hvbWUuc3ZnP25hbWU9SG9tZUljb24iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBTZWFyY2hJY29uIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIscHJvcHMsUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7XCJmaWxsXCI6XCIjZDdkN2Q3XCIsXCJkXCI6XCJNMTIuOTMuMjVhNy4yMyA3LjIzIDAgMCAwLTUuNyAxMS42NkwxLjEzIDE4YS45LjkgMCAwIDAgMCAxLjI4LjkuOSAwIDAgMCAxLjI4IDBsNi4wOC02LjA4QTcuMjMgNy4yMyAwIDEgMCAxMi45My4yNXptMCAxMi42NmE1LjQzIDUuNDMgMCAxIDEgLjAxLTEwLjg2IDUuNDMgNS40MyAwIDAgMSAwIDEwLjg2elwifSkpO1xufVxuXG5TZWFyY2hJY29uLmRpc3BsYXlOYW1lID0gXCJTZWFyY2hJY29uXCI7XG5cblNlYXJjaEljb24uZGVmYXVsdFByb3BzID0ge1wid2lkdGhcIjpcIjIxXCIsXCJoZWlnaHRcIjpcIjIwXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjEgMjBcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2VhcmNoSWNvbjtcblxuU2VhcmNoSWNvbi5kZWZhdWx0ID0gU2VhcmNoSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL2ljb25zL3NlYXJjaC5zdmc/bmFtZT1TZWFyY2hJY29uIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gQmFza2V0SWNvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHByb3BzLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZmlsbFwiOlwiI2Q3ZDdkN1wiLFwiZFwiOlwiTTIwLjU2IDUuNzhoLTMuMDdhLjkzLjkzIDAgMCAwLS4wOC0uMThMMTQuNC43OGEuOS45IDAgMCAwLTEuNTQuOTVsMi41MyA0LjA1SDcuNjVsMi41My00LjA1QS45LjkgMCAwIDAgOS40LjM1YS45LjkgMCAwIDAtLjc3LjQzbC0zIDQuODJhLjkzLjkzIDAgMCAwLS4wOS4xOEgyLjQ4Yy0xIDAtMS44LjgtMS44IDEuOHYxLjJjMCAuODYuNiAxLjU4IDEuMzkgMS43N2wyLjMgNy43OWMuMjEuNzUuOSAxLjMgMS43MyAxLjNoMTAuODRjLjgzIDAgMS41Mi0uNTUgMS43NC0xLjNsMi4zLTcuOGMuOC0uMTggMS4zOS0uOSAxLjM5LTEuNzV2LTEuMmMwLTEtLjgxLTEuODEtMS44MS0xLjgxek0yLjQ4IDcuNThoMTguMDh2MS4ySDIuNDh6bTE0LjQ2IDEwLjI1SDYuMUwzLjk3IDEwLjZoMTUuMXpcIn0pKTtcbn1cblxuQmFza2V0SWNvbi5kaXNwbGF5TmFtZSA9IFwiQmFza2V0SWNvblwiO1xuXG5CYXNrZXRJY29uLmRlZmF1bHRQcm9wcyA9IHtcIndpZHRoXCI6XCIyM1wiLFwiaGVpZ2h0XCI6XCIyMFwiLFwidmlld0JveFwiOlwiMCAwIDIzIDIwXCJ9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2tldEljb247XG5cbkJhc2tldEljb24uZGVmYXVsdCA9IEJhc2tldEljb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9pY29ucy9iYXNrZXQuc3ZnP25hbWU9QmFza2V0SWNvbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24nO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IEJ1cmdlciBmcm9tICdjb21wb25lbnRzL0J1cmdlci9CdXJnZXInO1xuaW1wb3J0IHsgQWNjb3JkZW9uLCBBY2NvcmRlb25JdGVtIH0gZnJvbSAnY29tcG9uZW50cy9BY2NvcmRlb24nO1xuaW1wb3J0IExpbmsgZnJvbSAnY29tcG9uZW50cy9MaW5rL0xpbmsnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9NZW51UGFuZWwuY3NzJztcblxuY29uc3QgZHVyYXRpb24gPSAzMDA7XG5cbmNvbnN0IGRlZmF1bHRTdHlsZSA9IHtcbiAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHtkdXJhdGlvbn1tcyBlYXNlLWluLW91dGAsXG4gIG9wYWNpdHk6IDAsXG59O1xuXG5jb25zdCB0cmFuc2l0aW9uU3R5bGVzID0ge1xuICBlbnRlcmluZzogeyBvcGFjaXR5OiAxIH0sXG4gIGVudGVyZWQ6IHsgb3BhY2l0eTogMSB9LFxufTtcblxuY29uc3QgTWVudVBhbmVsID0gKHtcbiAgaXNTaG93LFxuICBoYW5kbGVUb2dnbGUsXG4gIGhhbmRsZUFjY29yZGVvblRvZ2dsZSxcbiAgYWN0aXZlQWNjb3JkZW9uSW5kZXgsXG59KSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgIFtzLnJvb3RdOiB0cnVlLFxuICAgICAgW3MuYWN0aXZlXTogaXNTaG93LFxuICAgIH0pfVxuICA+XG4gICAgPGRpdiBjbGFzc05hbWU9e3MuYnVyZ2VyfT5cbiAgICAgIDxCdXJnZXIgb25DbGljaz17aGFuZGxlVG9nZ2xlfSBzaG93PXtpc1Nob3d9IC8+XG4gICAgPC9kaXY+XG4gICAgPFRyYW5zaXRpb24gaW49e2lzU2hvd30gdGltZW91dD17ZHVyYXRpb259PlxuICAgICAge3N0YXRlID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5kZWZhdWx0U3R5bGUsXG4gICAgICAgICAgICAuLi50cmFuc2l0aW9uU3R5bGVzW3N0YXRlXSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17cy5kcmF3ZXJ9XG4gICAgICAgID5cbiAgICAgICAgICA8QWNjb3JkZW9uXG4gICAgICAgICAgICBhY3RpdmVJbmRleD17YWN0aXZlQWNjb3JkZW9uSW5kZXh9XG4gICAgICAgICAgICBoYW5kbGVUb2dnbGU9eygpID0+IHt9fVxuICAgICAgICAgICAgY2xhc3NuYW1lcz17e1xuICAgICAgICAgICAgICBjb250ZW50OiBzLmFjY29yZGVvbixcbiAgICAgICAgICAgICAgYWN0aXZlQ29udGVudDogcy5hY2NvcmRlb25BY3RpdmVDb250ZW50LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uT3Blbj17aGFuZGxlQWNjb3JkZW9uVG9nZ2xlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBY2NvcmRlb25JdGVtIHRpdGxlPVwi0JbQtdC90YHQutC40LVcIj5cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzLmNhdGVnb3J5fT5Eb2xjZSBnYWJhbm5hPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3MuY2F0ZWdvcnl9PkxvdWk8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17cy5jYXRlZ29yeX0+0JXRidC1INGH0YLQvi3RgtC+PC9MaW5rPlxuICAgICAgICAgICAgPC9BY2NvcmRlb25JdGVtPlxuICAgICAgICAgICAgPEFjY29yZGVvbkl0ZW0gdGl0bGU9XCLQnNGD0LbRgdC60LjQtVwiPkNvbnRlbm48L0FjY29yZGVvbkl0ZW0+XG4gICAgICAgICAgPC9BY2NvcmRlb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L1RyYW5zaXRpb24+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShNZW51UGFuZWwpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL01lbnVQYW5lbC9NZW51UGFuZWwuanMiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFjY29yZGVvbiB9IGZyb20gJy4vQWNjb3JkZW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWNjb3JkZW9uSXRlbSB9IGZyb20gJy4vQWNjb3JkZW9uSXRlbSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvQWNjb3JkZW9uL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgcyBmcm9tICcuL0FjY29yZGVvbi5jc3MnO1xuXG5jb25zdCBBY2NvcmRlb24gPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtjeCh7XG4gICAgW3Mucm9vdF06IHRydWUsXG4gICAgW3Byb3BzLmNsYXNzbmFtZXMucm9vdF06IHRydWUsXG4gIH0pfT5cbiAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKHByb3BzLmNoaWxkcmVuLCAoY2hpbGQsIGluZGV4KSA9PlxuICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIGFjdGl2ZTogaW5kZXggPT09IHByb3BzLmFjdGl2ZUluZGV4LFxuICAgICAgICBoYW5kbGVUb2dnbGU6IHByb3BzLm9uT3BlbixcbiAgICAgICAgaXRlbUluZGV4OiBpbmRleCxcbiAgICAgICAgY2xhc3NuYW1lczogcHJvcHMuY2xhc3NuYW1lcyxcbiAgICAgIH0pLFxuICAgICl9XG4gIDwvZGl2PlxuKTtcblxuQWNjb3JkZW9uLnByb3BUeXBlcyA9IHtcbiAgYWN0aXZlSW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgb25PcGVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxufTtcblxuXG5BY2NvcmRlb24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc25hbWVzOiB7XG4gICAgcm9vdDogJycsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShBY2NvcmRlb24pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0FjY29yZGVvbi9BY2NvcmRlb24uanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkFjY29yZGVvbl9fcm9vdF9fX2JfYVZuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uQWNjb3JkZW9uX19hY29yZGVvbkhlYWRlcl9fXzJITmpWIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWluLWhlaWdodDogMzRweDtcXG4gIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTcuNnB4O1xcbiAgZm9udC1zaXplOiAxNy42cHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNzUycHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC43NTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA0N3JlbTtcXG4gIGNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzOSwgMjM5LCAyMzkpO1xcbn1cXG5cXG4uQWNjb3JkZW9uX19hcnJvd19fXzNRRkFOIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IG5vbmU7XFxuICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycztcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnM7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMnM7XFxuICB3aWR0aDogMzJweDtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgd2lkdGg6IDJyZW07XFxuICBmaWxsOiByZ2IoMTkyLCAxOTIsIDE5Mik7XFxufVxcblxcbi5BY2NvcmRlb25fX2FjdGl2ZUFycm93X19fMlRLc3kge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycztcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgLXdlYmtpdC10cmFuc2Zvcm0gMC4ycztcXG59XFxuXFxuLkFjY29yZGVvbl9fYWNvcmRlb25IZWFkZXJfX18ySE5qVjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG4uQWNjb3JkZW9uX19hY2NvcmRlb25Db250ZW50X19fM2JISmYge1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgaGVpZ2h0OiAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3M7XFxuICAtby10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3M7XFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3M7XFxuICB3aWxsLWNoYW5nZTogbWF4LWhlaWdodDtcXG59XFxuXFxuLkFjY29yZGVvbl9fYWNvcmRlb25BY3RpdmVIZWFkZXJfX18yMDZ2ZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7IFxcbn1cXG5cXG4uQWNjb3JkZW9uX19hY2NvcmRlb25BY3RpdmVDb250ZW50X19fMUxRMzcge1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcztcXG4gIC1vLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcztcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcztcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjM5LCAyMzksIDIzOSk7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9BY2NvcmRlb24vQWNjb3JkZW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGNBQWM7RUFDZCwwQkFBMEI7TUFDdEIsdUJBQXVCO1VBQ25CLG9CQUFvQjtFQUM1QiwwQkFBMEI7TUFDdEIsdUJBQXVCO1VBQ25CLCtCQUErQjtFQUN2QyxpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qix3RUFBd0U7RUFDeEUsbUVBQW1FO0VBQ25FLGdFQUFnRTtFQUNoRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsNENBQTRDO0NBQzdDOztBQUVEO0VBQ0Usd0JBQXdCO01BQ3BCLG9CQUFvQjtVQUNoQixnQkFBZ0I7RUFDeEIsMkNBQTJDO0VBQzNDLG1DQUFtQztFQUNuQyw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLG1EQUFtRDtFQUNuRCxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSxrQ0FBa0M7TUFDOUIsOEJBQThCO1VBQzFCLDBCQUEwQjtFQUNsQywyQ0FBMkM7RUFDM0MsbUNBQW1DO0VBQ25DLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsbURBQW1EO0NBQ3BEOztBQUVEO0VBQ0UsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1Qix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxxQ0FBcUM7Q0FDdEM7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLDRDQUE0QztDQUM3Q1wiLFwiZmlsZVwiOlwiQWNjb3JkZW9uLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFjb3JkZW9uSGVhZGVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWluLWhlaWdodDogMzRweDtcXG4gIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTcuNnB4O1xcbiAgZm9udC1zaXplOiAxNy42cHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNzUycHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC43NTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA0N3JlbTtcXG4gIGNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzOSwgMjM5LCAyMzkpO1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogbm9uZTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycztcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgLXdlYmtpdC10cmFuc2Zvcm0gMC4ycztcXG4gIHdpZHRoOiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICB3aWR0aDogMnJlbTtcXG4gIGZpbGw6IHJnYigxOTIsIDE5MiwgMTkyKTtcXG59XFxuXFxuLmFjdGl2ZUFycm93IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycztcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnM7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMnM7XFxufVxcblxcbi5hY29yZGVvbkhlYWRlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG4uYWNjb3JkZW9uQ29udGVudCB7XFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBoZWlnaHQ6IDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcztcXG4gIC1vLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcztcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcztcXG4gIHdpbGwtY2hhbmdlOiBtYXgtaGVpZ2h0O1xcbn1cXG5cXG4uYWNvcmRlb25BY3RpdmVIZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpOyBcXG59XFxuXFxuLmFjY29yZGVvbkFjdGl2ZUNvbnRlbnQge1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcztcXG4gIC1vLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcztcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcztcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjM5LCAyMzksIDIzOSk7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiQWNjb3JkZW9uX19yb290X19fYl9hVm5cIixcblx0XCJhY29yZGVvbkhlYWRlclwiOiBcIkFjY29yZGVvbl9fYWNvcmRlb25IZWFkZXJfX18ySE5qVlwiLFxuXHRcImFycm93XCI6IFwiQWNjb3JkZW9uX19hcnJvd19fXzNRRkFOXCIsXG5cdFwiYWN0aXZlQXJyb3dcIjogXCJBY2NvcmRlb25fX2FjdGl2ZUFycm93X19fMlRLc3lcIixcblx0XCJhY2NvcmRlb25Db250ZW50XCI6IFwiQWNjb3JkZW9uX19hY2NvcmRlb25Db250ZW50X19fM2JISmZcIixcblx0XCJhY29yZGVvbkFjdGl2ZUhlYWRlclwiOiBcIkFjY29yZGVvbl9fYWNvcmRlb25BY3RpdmVIZWFkZXJfX18yMDZ2ZFwiLFxuXHRcImFjY29yZGVvbkFjdGl2ZUNvbnRlbnRcIjogXCJBY2NvcmRlb25fX2FjY29yZGVvbkFjdGl2ZUNvbnRlbnRfX18xTFEzN1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL0FjY29yZGVvbi9BY2NvcmRlb24uY3NzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZvbnRJY29uIGZyb20gJ3JlYWN0LXRvb2xib3gvbGliL2ZvbnRfaWNvbic7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgQXJyb3cgZnJvbSAnLSFiYWJlbC1sb2FkZXIhc3ZnLXJlYWN0LWxvYWRlciEuL2ljb25zL2Fycm93LnN2Zz9uYW1lPUFycm93JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzIGZyb20gJy4vQWNjb3JkZW9uLmNzcyc7XG5cbmNvbnN0IGhhbmRsZVRvZ2dsZSA9IChpbmRleCwgZm4gPSAoKSA9PiB7fSkgPT4gKCkgPT4gZm4oaW5kZXgpO1xuXG5jb25zdCBBY2NvcmRlb25JdGVtID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxoZWFkZXJcbiAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICBbcy5hY29yZGVvbkhlYWRlcl06IHRydWUsXG4gICAgICAgIFtzLmFjb3JkZW9uQWN0aXZlSGVhZGVyXTogcHJvcHMuYWN0aXZlLFxuICAgICAgfSl9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGUocHJvcHMuaXRlbUluZGV4LCBwcm9wcy5oYW5kbGVUb2dnbGUpfVxuICAgID5cbiAgICAgIDxBcnJvd1xuICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICBbcy5hcnJvd106IHRydWUsXG4gICAgICAgICAgW3MuYWN0aXZlQXJyb3ddOiBwcm9wcy5hY3RpdmUsXG4gICAgICAgIH0pfVxuICAgICAgLz5cblxuICAgICAge3Byb3BzLnRpdGxlfVxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICBbcy5hY2NvcmRlb25Db250ZW50XTogdHJ1ZSxcbiAgICAgICAgW3MuYWNjb3JkZW9uQWN0aXZlQ29udGVudF06IHByb3BzLmFjdGl2ZSxcbiAgICAgICAgW3Byb3BzLmNsYXNzbmFtZXMuY29udGVudF06IHRydWUsXG4gICAgICAgIFtwcm9wcy5jbGFzc25hbWVzLmFjdGl2ZUNvbnRlbnRdOiBwcm9wcy5hY3RpdmUsXG4gICAgICB9KX1cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuQWNjb3JkZW9uSXRlbS5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaXRlbUluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGhhbmRsZVRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoQWNjb3JkZW9uSXRlbSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvQWNjb3JkZW9uL0FjY29yZGVvbkl0ZW0uanMiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBBcnJvdyAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHByb3BzLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsbnVsbCxSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImRcIjpcIm0xMjEuMywzNC42Yy0xLjYtMS42LTQuMi0xLjYtNS44LDBsLTUxLDUxLjEtNTEuMS01MS4xYy0xLjYtMS42LTQuMi0xLjYtNS44LDAtMS42LDEuNi0xLjYsNC4yIDAsNS44bDUzLjksNTMuOWMwLjgsMC44IDEuOCwxLjIgMi45LDEuMiAxLDAgMi4xLTAuNCAyLjktMS4ybDUzLjktNTMuOWMxLjctMS42IDEuNy00LjIgMC4xLTUuOHpcIn0pKSk7XG59XG5cbkFycm93LmRpc3BsYXlOYW1lID0gXCJBcnJvd1wiO1xuXG5BcnJvdy5kZWZhdWx0UHJvcHMgPSB7XCJ2ZXJzaW9uXCI6XCIxLjFcIixcInZpZXdCb3hcIjpcIjAgMCAxMjkgMTI5XCIsXCJlbmFibGVCYWNrZ3JvdW5kXCI6XCJuZXcgMCAwIDEyOSAxMjlcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyb3c7XG5cbkFycm93LmRlZmF1bHQgPSBBcnJvdztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9BY2NvcmRlb24vaWNvbnMvYXJyb3cuc3ZnP25hbWU9QXJyb3ciLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL01lbnVQYW5lbC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vTWVudVBhbmVsLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL01lbnVQYW5lbC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9NZW51UGFuZWwvTWVudVBhbmVsLmNzc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLk1lbnVQYW5lbF9fcm9vdF9fXzI3YUM4IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogLTE7XFxuXFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcblxcbiAgLk1lbnVQYW5lbF9fcm9vdF9fXzI3YUM4IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDguNnJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDU0NHB4KSB7XFxuXFxuICAuTWVudVBhbmVsX19yb290X19fMjdhQzgge1xcbiAgICB3aWR0aDogMzEuMnJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAuTWVudVBhbmVsX19yb290X19fMjdhQzgge1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcbn1cXG5cXG4uTWVudVBhbmVsX19hY3RpdmVfX18yQmlxciB7XFxuICB6LWluZGV4OiA0O1xcbiAgXFxufVxcblxcbi5NZW51UGFuZWxfX2RyYXdlcl9fX3l1Y0lVIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDIuMXJlbSByZ2JhKDIxOCwgMjE4LCAyMTgsIC41KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDIuMXJlbSByZ2JhKDIxOCwgMjE4LCAyMTgsIC41KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAyLjFyZW0gcmdiYSgyMTgsIDIxOCwgMjE4LCAuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFxuXFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcblxcbiAgLk1lbnVQYW5lbF9fZHJhd2VyX19feXVjSVUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkge1xcblxcbiAgLk1lbnVQYW5lbF9fZHJhd2VyX19feXVjSVUge1xcbiAgICBwYWRkaW5nLXRvcDogNy41cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXG4gIC5NZW51UGFuZWxfX2RyYXdlcl9fX3l1Y0lVIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogMjAwcHggMHB4IDM4cHggMHB4O1xcbiAgICBtYXgtd2lkdGg6IDIxN3B4O1xcbiAgfVxcbn1cXG5cXG4uTWVudVBhbmVsX19idXJnZXJfX19VU1lWMSB7XFxuICB0b3A6IDM4cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMjBweDtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcXG5cXG4gIC5NZW51UGFuZWxfX2J1cmdlcl9fX1VTWVYxIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAuTWVudVBhbmVsX19idXJnZXJfX19VU1lWMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cXG4uTWVudVBhbmVsX19hY2NvcmRlb25fX18xLWd3SyB7XFxuICBwYWRkaW5nOiAxNnB4IDIwcHggMTZweCAyMHB4O1xcbn1cXG5cXG4uTWVudVBhbmVsX19hY2NvcmRlb25BY3RpdmVDb250ZW50X19fMTNQYlIge1xcbiAgcGFkZGluZy10b3A6IDE2cHghaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDE2cHghaW1wb3J0YW50O1xcbn1cXG5cXG4uTWVudVBhbmVsX19jYXRlZ29yeV9fX1ljU280IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xcbiAgZm9udC1zaXplOiAxNy42cHg7XFxuICBmb250LXNpemU6IDE3LjZweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMC43NTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjc1MnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDQ3cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMjguOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjguOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyXFxufVxcblxcbi5NZW51UGFuZWxfX2NhdGVnb3J5X19fWWNTbzQ6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uTWVudVBhbmVsX19jYXRlZ29yeV9fX1ljU280OmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMTgsIDMwLCAxNzQpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL2NvbXBvbmVudHMvTWVudVBhbmVsL01lbnVQYW5lbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSDtFQUNFOztnRkFFOEU7O0VBRTlFOztnRkFFOEU7O0VBRTlFOztnRkFFOEUsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsQ0FBQyxpQ0FBaUM7Q0FDL007O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULE9BQU87RUFDUCxVQUFVO0VBQ1YsWUFBWTs7Q0FFYjs7QUFFRDs7RUFFRTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7R0FDcEI7Q0FDRjs7QUFFRDs7RUFFRTtJQUNFLGVBQWU7R0FDaEI7Q0FDRjs7QUFFRDs7RUFFRTtJQUNFLFdBQVc7SUFDWCxjQUFjO0dBQ2Y7Q0FDRjs7QUFFRDtFQUNFLFdBQVc7O0NBRVo7O0FBRUQ7RUFDRSx1REFBdUQ7VUFDL0MsK0NBQStDO0VBQ3ZELHFDQUFxQztFQUNyQywrQ0FBK0M7RUFDL0MscUNBQXFDOzs7Q0FHdEM7O0FBRUQ7O0VBRUU7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7R0FDbkI7Q0FDRjs7QUFFRDs7RUFFRTtJQUNFLG9CQUFvQjtHQUNyQjtDQUNGOztBQUVEOztFQUVFO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGlCQUFpQjtHQUNsQjtDQUNGOztBQUVEO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtDQUNiOztBQUVEOztFQUVFO0lBQ0UsY0FBYztHQUNmO0NBQ0Y7O0FBRUQ7O0VBRUU7SUFDRSxlQUFlO0dBQ2hCO0NBQ0Y7O0FBRUQ7RUFDRSw2QkFBNkI7Q0FDOUI7O0FBRUQ7RUFDRSw0QkFBNEI7RUFDNUIsK0JBQStCO0NBQ2hDOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usd0JBQXdCO0NBQ3pCXCIsXCJmaWxlXCI6XCJNZW51UGFuZWwuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLnJvb3Qge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAtMTtcXG5cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuXFxuICAucm9vdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiA4LjZyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkge1xcblxcbiAgLnJvb3Qge1xcbiAgICB3aWR0aDogMzEuMnJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAucm9vdCB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxufVxcblxcbi5hY3RpdmUge1xcbiAgei1pbmRleDogNDtcXG4gIFxcbn1cXG5cXG4uZHJhd2VyIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDIuMXJlbSByZ2JhKDIxOCwgMjE4LCAyMTgsIC41KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDIuMXJlbSByZ2JhKDIxOCwgMjE4LCAyMTgsIC41KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAyLjFyZW0gcmdiYSgyMTgsIDIxOCwgMjE4LCAuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFxuXFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcblxcbiAgLmRyYXdlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDU0NHB4KSB7XFxuXFxuICAuZHJhd2VyIHtcXG4gICAgcGFkZGluZy10b3A6IDcuNXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAuZHJhd2VyIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogMjAwcHggMHB4IDM4cHggMHB4O1xcbiAgICBtYXgtd2lkdGg6IDIxN3B4O1xcbiAgfVxcbn1cXG5cXG4uYnVyZ2VyIHtcXG4gIHRvcDogMzhweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcblxcbiAgLmJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcbiAgLmJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cXG4uYWNjb3JkZW9uIHtcXG4gIHBhZGRpbmc6IDE2cHggMjBweCAxNnB4IDIwcHg7XFxufVxcblxcbi5hY2NvcmRlb25BY3RpdmVDb250ZW50IHtcXG4gIHBhZGRpbmctdG9wOiAxNnB4IWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4IWltcG9ydGFudDtcXG59XFxuXFxuLmNhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xcbiAgZm9udC1zaXplOiAxNy42cHg7XFxuICBmb250LXNpemU6IDE3LjZweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMC43NTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjc1MnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDQ3cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMjguOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjguOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyXFxufVxcblxcbi5jYXRlZ29yeTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5jYXRlZ29yeTpob3ZlciB7XFxuICBjb2xvcjogcmdiKDE4LCAzMCwgMTc0KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJNZW51UGFuZWxfX3Jvb3RfX18yN2FDOFwiLFxuXHRcImFjdGl2ZVwiOiBcIk1lbnVQYW5lbF9fYWN0aXZlX19fMkJpcXJcIixcblx0XCJkcmF3ZXJcIjogXCJNZW51UGFuZWxfX2RyYXdlcl9fX3l1Y0lVXCIsXG5cdFwiYnVyZ2VyXCI6IFwiTWVudVBhbmVsX19idXJnZXJfX19VU1lWMVwiLFxuXHRcImFjY29yZGVvblwiOiBcIk1lbnVQYW5lbF9fYWNjb3JkZW9uX19fMS1nd0tcIixcblx0XCJhY2NvcmRlb25BY3RpdmVDb250ZW50XCI6IFwiTWVudVBhbmVsX19hY2NvcmRlb25BY3RpdmVDb250ZW50X19fMTNQYlJcIixcblx0XCJjYXRlZ29yeVwiOiBcIk1lbnVQYW5lbF9fY2F0ZWdvcnlfX19ZY1NvNFwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL01lbnVQYW5lbC9NZW51UGFuZWwuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9ub3JtYWxpemUuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL25vcm1hbGl6ZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMiEuLi9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vbm9ybWFsaXplLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY3LjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW5cXG4gKiAgICBJRSBvbiBXaW5kb3dzIFBob25lIGFuZCBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cXG4gKi9cXG5cXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5tYWluIHsgLyogMSAqL1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBtYXJnaW4gaW4gSUUgOC5cXG4gKi9cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSBnYXBzIGluIGxpbmtzIHVuZGVybGluZSBpbiBpT1MgOCsgYW5kIFNhZmFyaSA4Ky5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctIGFuZCBGaXJlZm94IDM5LS5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgdGhlIGR1cGxpY2F0ZSBhcHBsaWNhdGlvbiBvZiBgYm9sZGVyYCBieSB0aGUgbmV4dCBydWxlIGluIFNhZmFyaSA2LlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzdHlsZSBpbiBBbmRyb2lkIDQuMy0uXFxuICovXFxuXFxuZGZuIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGJhY2tncm91bmQgYW5kIGNvbG9yIGluIElFIDktLlxcbiAqL1xcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hdWRpbyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGlPUyA0LTcuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAtLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEhpZGUgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqL1xcblxcbnN2Zzpub3QoOnJvb3QpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gUHJldmVudCBhIFdlYktpdCBidWcgd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gIGFuZCBgdmlkZW9gXFxuICogICAgY29udHJvbHMgaW4gQW5kcm9pZCA0LlxcbiAqIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgW3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAtLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC0uXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgYW5kIGNhbmNlbCBidXR0b25zIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzLCAvKiAxICovXFxubWVudSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIFNjcmlwdGluZ1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuY2FudmFzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogSGlkZGVuXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC0uXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNEVBQTRFOztBQUU1RTtnRkFDZ0Y7O0FBRWhGOzs7O0dBSUc7O0FBRUg7RUFDRSxrQkFBa0IsQ0FBQyxPQUFPO0VBQzFCLDJCQUEyQixDQUFDLE9BQU87RUFDbkMsK0JBQStCLENBQUMsT0FBTztDQUN4Qzs7QUFFRDtnRkFDZ0Y7O0FBRWhGOztHQUVHOztBQUVIO0VBQ0UsVUFBVTtDQUNYOztBQUVEOztHQUVHOztBQUVIOzs7Ozs7RUFNRSxlQUFlO0NBQ2hCOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7O0dBR0c7O0FBRUg7O09BRU8sT0FBTztFQUNaLGVBQWU7Q0FDaEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0UsZ0NBQWdDO1VBQ3hCLHdCQUF3QixDQUFDLE9BQU87RUFDeEMsVUFBVSxDQUFDLE9BQU87RUFDbEIsa0JBQWtCLENBQUMsT0FBTztDQUMzQjs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSxrQ0FBa0MsQ0FBQyxPQUFPO0VBQzFDLGVBQWUsQ0FBQyxPQUFPO0NBQ3hCOztBQUVEO2dGQUNnRjs7QUFFaEY7OztHQUdHOztBQUVIO0VBQ0UsOEJBQThCLENBQUMsT0FBTztFQUN0QyxzQ0FBc0MsQ0FBQyxPQUFPO0NBQy9DOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLG9CQUFvQixDQUFDLE9BQU87RUFDNUIsMkJBQTJCLENBQUMsT0FBTztFQUNuQywwQ0FBMEM7VUFDbEMsa0NBQWtDLENBQUMsT0FBTztDQUNuRDs7QUFFRDs7R0FFRzs7QUFFSDs7RUFFRSxxQkFBcUI7Q0FDdEI7O0FBRUQ7O0dBRUc7O0FBRUg7O0VBRUUsb0JBQW9CO0NBQ3JCOztBQUVEOzs7R0FHRzs7QUFFSDs7O0VBR0Usa0NBQWtDLENBQUMsT0FBTztFQUMxQyxlQUFlLENBQUMsT0FBTztDQUN4Qjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0NBQ2I7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxlQUFlO0NBQ2hCOztBQUVEOzs7R0FHRzs7QUFFSDs7RUFFRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7R0FFRzs7QUFFSDs7RUFFRSxzQkFBc0I7Q0FDdkI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxjQUFjO0VBQ2QsVUFBVTtDQUNYOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO2dGQUNnRjs7QUFFaEY7OztHQUdHOztBQUVIOzs7OztFQUtFLHdCQUF3QixDQUFDLE9BQU87RUFDaEMsZ0JBQWdCLENBQUMsT0FBTztFQUN4QixrQkFBa0IsQ0FBQyxPQUFPO0VBQzFCLFVBQVUsQ0FBQyxPQUFPO0NBQ25COztBQUVEOzs7R0FHRzs7QUFFSDtRQUNRLE9BQU87RUFDYixrQkFBa0I7Q0FDbkI7O0FBRUQ7OztHQUdHOztBQUVIO1NBQ1MsT0FBTztFQUNkLHFCQUFxQjtDQUN0Qjs7QUFFRDs7OztHQUlHOztBQUVIOzs7O0VBSUUsMkJBQTJCLENBQUMsT0FBTztDQUNwQzs7QUFFRDs7R0FFRzs7QUFFSDs7OztFQUlFLG1CQUFtQjtFQUNuQixXQUFXO0NBQ1o7O0FBRUQ7O0dBRUc7O0FBRUg7Ozs7RUFJRSwrQkFBK0I7Q0FDaEM7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSwrQkFBK0I7Q0FDaEM7O0FBRUQ7Ozs7O0dBS0c7O0FBRUg7RUFDRSwrQkFBK0I7VUFDdkIsdUJBQXVCLENBQUMsT0FBTztFQUN2QyxlQUFlLENBQUMsT0FBTztFQUN2QixlQUFlLENBQUMsT0FBTztFQUN2QixnQkFBZ0IsQ0FBQyxPQUFPO0VBQ3hCLFdBQVcsQ0FBQyxPQUFPO0VBQ25CLG9CQUFvQixDQUFDLE9BQU87Q0FDN0I7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0Usc0JBQXNCLENBQUMsT0FBTztFQUM5Qix5QkFBeUIsQ0FBQyxPQUFPO0NBQ2xDOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDs7O0dBR0c7O0FBRUg7O0VBRUUsK0JBQStCO1VBQ3ZCLHVCQUF1QixDQUFDLE9BQU87RUFDdkMsV0FBVyxDQUFDLE9BQU87Q0FDcEI7O0FBRUQ7O0dBRUc7O0FBRUg7O0VBRUUsYUFBYTtDQUNkOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLDhCQUE4QixDQUFDLE9BQU87RUFDdEMscUJBQXFCLENBQUMsT0FBTztDQUM5Qjs7QUFFRDs7R0FFRzs7QUFFSDs7RUFFRSx5QkFBeUI7Q0FDMUI7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0UsMkJBQTJCLENBQUMsT0FBTztFQUNuQyxjQUFjLENBQUMsT0FBTztDQUN2Qjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOzs7R0FHRzs7QUFFSDs7RUFFRSxlQUFlO0NBQ2hCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO2dGQUNnRjs7QUFFaEY7O0dBRUc7O0FBRUg7RUFDRSxzQkFBc0I7Q0FDdkI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7R0FFRzs7QUFFSDtFQUNFLGNBQWM7Q0FDZlwiLFwiZmlsZVwiOlwibm9ybWFsaXplLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2Ny4wLjAgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluXFxuICogICAgSUUgb24gV2luZG93cyBQaG9uZSBhbmQgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXFxuICovXFxuXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxubWFpbiB7IC8qIDEgKi9cXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgbWFyZ2luIGluIElFIDguXFxuICovXFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMWVtIDQwcHg7XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgZ2FwcyBpbiBsaW5rcyB1bmRlcmxpbmUgaW4gaU9TIDgrIGFuZCBTYWZhcmkgOCsuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0czsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LSBhbmQgRmlyZWZveCAzOS0uXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IHRoZSBkdXBsaWNhdGUgYXBwbGljYXRpb24gb2YgYGJvbGRlcmAgYnkgdGhlIG5leHQgcnVsZSBpbiBTYWZhcmkgNi5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc3R5bGUgaW4gQW5kcm9pZCA0LjMtLlxcbiAqL1xcblxcbmRmbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBiYWNrZ3JvdW5kIGFuZCBjb2xvciBpbiBJRSA5LS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBpT1MgNC03LlxcbiAqL1xcblxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLS5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBIaWRlIHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKi9cXG5cXG5zdmc6bm90KDpyb290KSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIFByZXZlbnQgYSBXZWJLaXQgYnVnIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYCBhbmQgYHZpZGVvYFxcbiAqICAgIGNvbnRyb2xzIGluIEFuZHJvaWQgNC5cXG4gKiAyLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5odG1sIFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLS5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAtLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGFuZCBjYW5jZWwgYnV0dG9ucyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSwgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscywgLyogMSAqL1xcbm1lbnUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBTY3JpcHRpbmdcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmNhbnZhcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIEhpZGRlblxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAtLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInNvdXJjZU1hcFwiOnRydWUsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL3JlYWN0LWZsZXhib3gtZ3JpZC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vcmVhY3QtZmxleGJveC1ncmlkLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9yZWFjdC1mbGV4Ym94LWdyaWQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWZsZXhib3gtZ3JpZC9kaXN0L3JlYWN0LWZsZXhib3gtZ3JpZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gXCIuZmxleGJveGdyaWRfX2NvbnRhaW5lci1mbHVpZF9fXzJsVUVTLFxcbi5mbGV4Ym94Z3JpZF9fY29udGFpbmVyX19fUjJ6VTkge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fY29udGFpbmVyLWZsdWlkX19fMmxVRVMge1xcbiAgcGFkZGluZy1yaWdodDogMzJweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX3Jvd19fXzF5X21nIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gIC1tcy1mbGV4OiAwIDEgYXV0bztcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XFxuICBtYXJnaW4tbGVmdDogLThweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX3Jvd19fXzF5X21nLmZsZXhib3hncmlkX19yZXZlcnNlX19fMVg2ODIge1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiByZXZlcnNlO1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2xfX18zUnFQUC5mbGV4Ym94Z3JpZF9fcmV2ZXJzZV9fXzFYNjgyIHtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IHJldmVyc2U7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14c19fXzFST0hSLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLTFfX19WdE5JSyxcXG4uZmxleGJveGdyaWRfX2NvbC14cy0yX19fMzZuRGEsXFxuLmZsZXhib3hncmlkX19jb2wteHMtM19fXzJmMlFsLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLTRfX19UeEJKZyxcXG4uZmxleGJveGdyaWRfX2NvbC14cy01X19fMUhrSzUsXFxuLmZsZXhib3hncmlkX19jb2wteHMtNl9fXzFEaFY2LFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLTdfX18zbzJtLSxcXG4uZmxleGJveGdyaWRfX2NvbC14cy04X19fM0FSR2MsXFxuLmZsZXhib3hncmlkX19jb2wteHMtOV9fXzE1cWZsLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLTEwX19fMkFXTnYsXFxuLmZsZXhib3hncmlkX19jb2wteHMtMTFfX18zSC02RixcXG4uZmxleGJveGdyaWRfX2NvbC14cy0xMl9fX3BoYnRFLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC0wX19fMTBDN0UsXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTFfX18xMm9fUixcXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtMl9fXzJIaC1CLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC0zX19fOE5DeXMsXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTRfX19kQTBQMSxcXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtNV9fXzJNYmRGLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC02X19fM04zYnQsXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTdfX18xeVFERyxcXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtOF9fXzJhRWNXLFxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC05X19fMmhhQnYsXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTEwX19fMVFzVmcsXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTExX19fMjl4UW4sXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTEyX19fMVhXRmIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gIC1tcy1mbGV4OiAwIDAgYXV0bztcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogOHB4O1xcbiAgcGFkZGluZy1yaWdodDogOHB4O1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14c19fXzFST0hSIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xcbiAgZmxleC1iYXNpczogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtMV9fX1Z0TklLIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4LjMzMzMzMzMzJTtcXG4gIGZsZXgtYmFzaXM6IDguMzMzMzMzMzMlO1xcbiAgbWF4LXdpZHRoOiA4LjMzMzMzMzMzJTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtMl9fXzM2bkRhIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxNi42NjY2NjY2NyU7XFxuICBmbGV4LWJhc2lzOiAxNi42NjY2NjY2NyU7XFxuICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtM19fXzJmMlFsIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAyNSU7XFxuICBmbGV4LWJhc2lzOiAyNSU7XFxuICBtYXgtd2lkdGg6IDI1JTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtNF9fX1R4QkpnIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAzMy4zMzMzMzMzMyU7XFxuICBmbGV4LWJhc2lzOiAzMy4zMzMzMzMzMyU7XFxuICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzJTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtNV9fXzFIa0s1IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA0MS42NjY2NjY2NyU7XFxuICBmbGV4LWJhc2lzOiA0MS42NjY2NjY2NyU7XFxuICBtYXgtd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtNl9fXzFEaFY2IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1MCU7XFxuICBmbGV4LWJhc2lzOiA1MCU7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtN19fXzNvMm0tIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1OC4zMzMzMzMzMyU7XFxuICBmbGV4LWJhc2lzOiA1OC4zMzMzMzMzMyU7XFxuICBtYXgtd2lkdGg6IDU4LjMzMzMzMzMzJTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtOF9fXzNBUkdjIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA2Ni42NjY2NjY2NyU7XFxuICBmbGV4LWJhc2lzOiA2Ni42NjY2NjY2NyU7XFxuICBtYXgtd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtOV9fXzE1cWZsIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA3NSU7XFxuICBmbGV4LWJhc2lzOiA3NSU7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtMTBfX18yQVdOdiB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogODMuMzMzMzMzMzMlO1xcbiAgZmxleC1iYXNpczogODMuMzMzMzMzMzMlO1xcbiAgbWF4LXdpZHRoOiA4My4zMzMzMzMzMyU7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLTExX19fM0gtNkYge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDkxLjY2NjY2NjY3JTtcXG4gIGZsZXgtYmFzaXM6IDkxLjY2NjY2NjY3JTtcXG4gIG1heC13aWR0aDogOTEuNjY2NjY2NjclO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy0xMl9fX3BoYnRFIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTBfX18xMEM3RSB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTFfX18xMm9fUiB7XFxuICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC0yX19fMkhoLUIge1xcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTNfX184TkN5cyB7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtNF9fX2RBMFAxIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC01X19fMk1iZEYge1xcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTZfX18zTjNidCB7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtN19fXzF5UURHIHtcXG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fY29sLXhzLW9mZnNldC04X19fMmFFY1cge1xcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG59XFxuXFxuLmZsZXhib3hncmlkX19jb2wteHMtb2Zmc2V0LTlfX18yaGFCdiB7XFxuICBtYXJnaW4tbGVmdDogNzUlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtMTBfX18xUXNWZyB7XFxuICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NvbC14cy1vZmZzZXQtMTFfX18yOXhRbiB7XFxuICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX3N0YXJ0LXhzX19faDhxZEEge1xcbiAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2NlbnRlci14c19fXzFKV29uIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2VuZC14c19fXzMzTWt1IHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fdG9wLXhzX19fVWhBLVYge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcbiAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fbWlkZGxlLXhzX19fMWg1dDMge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2JvdHRvbS14c19fXzJ0UlVhIHtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2Fyb3VuZC14c19fXzFva2tLIHtcXG4gIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmZsZXhib3hncmlkX19iZXR3ZWVuLXhzX19fV0ZQODQge1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5mbGV4Ym94Z3JpZF9fZmlyc3QteHNfX19Yb29zSyB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAwO1xcbiAgLW1zLWZsZXgtb3JkZXI6IC0xO1xcbiAgb3JkZXI6IC0xO1xcbn1cXG5cXG4uZmxleGJveGdyaWRfX2xhc3QteHNfX19IbmxSdyB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyO1xcbiAgLW1zLWZsZXgtb3JkZXI6IDE7XFxuICBvcmRlcjogMTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0OGVtKSB7XFxuICAuZmxleGJveGdyaWRfX2NvbnRhaW5lcl9fX1IyelU5IHtcXG4gICAgd2lkdGg6IDQ5cmVtO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc21fX18zdFoteixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTFfX18yR2NhNixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTJfX19ZRVR6YSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTNfX18yaXJaUSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTRfX18za2o3UyxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTVfX19nQXh1USxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTZfX192VWRLSCxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTdfX18yMkljUSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLThfX18yX1loQixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTlfX18ydWJweCxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTEwX19fMjYyRzksXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS0xMV9fXzM5czdKLFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tMTJfX18xZTVVayxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC0wX19fbGxRNi0sXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtMV9fXzFQRld1LFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTJfX18xRGdiTyxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC0zX19fM1c1SXYsXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtNF9fXzNZVG9HLFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTVfX182MDlWbyxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC02X19fVENlVlEsXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtN19fX2NzdkJ1LFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LThfX18xMVBZSCxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC05X19fMjRFdnksXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtMTBfX18xLWxjRSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC0xMV9fXzJ5bkZxLFxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTEyX19fM01CTWkge1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgLW1zLWZsZXg6IDAgMCBhdXRvO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtX19fM3RaLXoge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcXG4gICAgZmxleC1iYXNpczogMDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tMV9fXzJHY2E2IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDguMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA4LjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTJfX19ZRVR6YSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxNi42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDE2LjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS0zX19fMmlyWlEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMjUlO1xcbiAgICBmbGV4LWJhc2lzOiAyNSU7XFxuICAgIG1heC13aWR0aDogMjUlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tNF9fXzNrajdTIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDMzLjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogMzMuMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTVfX19nQXh1USB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA0MS42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDQxLjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS02X19fdlVkS0gge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTAlO1xcbiAgICBmbGV4LWJhc2lzOiA1MCU7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tN19fXzIySWNRIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDU4LjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogNTguMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLThfX18yX1loQiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA2Ni42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDY2LjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS05X19fMnVicHgge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNzUlO1xcbiAgICBmbGV4LWJhc2lzOiA3NSU7XFxuICAgIG1heC13aWR0aDogNzUlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tMTBfX18yNjJHOSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4My4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDgzLjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS0xMV9fXzM5czdKIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDkxLjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogOTEuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLTEyX19fMWU1VWsge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG4gICAgZmxleC1iYXNpczogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTBfX19sbFE2LSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTFfX18xUEZXdSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC0yX19fMURnYk8ge1xcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTNfX18zVzVJdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtNF9fXzNZVG9HIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC01X19fNjA5Vm8ge1xcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTZfX19UQ2VWUSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtN19fX2NzdkJ1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLXNtLW9mZnNldC04X19fMTFQWUgge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtc20tb2Zmc2V0LTlfX18yNEV2eSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtMTBfX18xLWxjRSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1zbS1vZmZzZXQtMTFfX18yeW5GcSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX3N0YXJ0LXNtX19fM0RpbHUge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NlbnRlci1zbV9fXzM5SFdxIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2VuZC1zbV9fXzNCMDdmIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fdG9wLXNtX19fMWJlZ1Mge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX21pZGRsZS1zbV9fX09oNEs3IHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fYm90dG9tLXNtX19fMWpQbmMge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xcbiAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2Fyb3VuZC1zbV9fXzNmZmJiIHtcXG4gICAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2JldHdlZW4tc21fX18xUmNhZiB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fZmlyc3Qtc21fX18yR3poYiB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDA7XFxuICAgIC1tcy1mbGV4LW9yZGVyOiAtMTtcXG4gICAgb3JkZXI6IC0xO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19sYXN0LXNtX19fMXBGOHcge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyO1xcbiAgICAtbXMtZmxleC1vcmRlcjogMTtcXG4gICAgb3JkZXI6IDE7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkge1xcbiAgLmZsZXhib3hncmlkX19jb250YWluZXJfX19SMnpVOSB7XFxuICAgIHdpZHRoOiA2NXJlbTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kX19fMmxiem0sXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC0xX19fMUxhcGosXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC0yX19fMWNfNHQsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC0zX19fM0FOUlMsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC00X19fYV9GeUssXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC01X19fWVhsTXEsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC02X19fNU9TeUosXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC03X19fMVpwLXIsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC04X19fMzk3OUosXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC05X19fMmZYdUMsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC0xMF9fXzJKYmVlLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtMTFfX18zZHJiSyxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTEyX19felIybEssXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtMF9fXzJPM3ZSLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTFfX18yWE5DeixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC0yX19fMnQtTlYsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtM19fXzF6bFRQLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTRfX18zYUh4eixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC01X19fM1MyR3csXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtNl9fXzNLVjBWLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTdfX18xT2RDRCxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC04X19fMnZGYlEsXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtOV9fXzFxOTV4LFxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTEwX19fMkNlTUssXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtMTFfX18zdTZYVyxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC0xMl9fX2VLVWxMIHtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZF9fXzJsYnptIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTFfX18xTGFwaiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4LjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogOC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC0yX19fMWNfNHQge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiAxNi42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogMTYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtM19fXzNBTlJTIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDI1JTtcXG4gICAgZmxleC1iYXNpczogMjUlO1xcbiAgICBtYXgtd2lkdGg6IDI1JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTRfX19hX0Z5SyB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAzMy4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDMzLjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC01X19fWVhsTXEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNDEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA0MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNDEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtNl9fXzVPU3lKIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDUwJTtcXG4gICAgZmxleC1iYXNpczogNTAlO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTdfX18xWnAtciB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1OC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDU4LjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC04X19fMzk3OUoge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNjYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA2Ni42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNjYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtOV9fXzJmWHVDIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDc1JTtcXG4gICAgZmxleC1iYXNpczogNzUlO1xcbiAgICBtYXgtd2lkdGg6IDc1JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLTEwX19fMkpiZWUge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogODMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA4My4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtMTFfX18zZHJiSyB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA5MS42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDkxLjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC0xMl9fX3pSMmxLIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC0wX19fMk8zdlIge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC0xX19fMlhOQ3oge1xcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtMl9fXzJ0LU5WIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC0zX19fMXpsVFAge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTRfX18zYUh4eiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtNV9fXzNTMkd3IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC02X19fM0tWMFYge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTdfX18xT2RDRCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1tZC1vZmZzZXQtOF9fXzJ2RmJRIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLW1kLW9mZnNldC05X19fMXE5NXgge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTEwX19fMkNlTUsge1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbWQtb2Zmc2V0LTExX19fM3U2WFcge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19zdGFydC1tZF9fXzJCLXNnIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jZW50ZXItbWRfX18zVkRmUyB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19lbmQtbWRfX18yZkpXeSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX3RvcC1tZF9fXzEyRkRnIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19taWRkbGUtbWRfX18zd0lKUiB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2JvdHRvbS1tZF9fXzJ2MWNkIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19hcm91bmQtbWRfX18xeDU0XyB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19iZXR3ZWVuLW1kX19fWG4tOXgge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2ZpcnN0LW1kX19fM2o0dDUge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAwO1xcbiAgICAtbXMtZmxleC1vcmRlcjogLTE7XFxuICAgIG9yZGVyOiAtMTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fbGFzdC1tZF9fXzN5NzJlIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IDE7XFxuICAgIG9yZGVyOiAxO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcXG4gIC5mbGV4Ym94Z3JpZF9fY29udGFpbmVyX19fUjJ6VTkge1xcbiAgICB3aWR0aDogNzZyZW07XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZ19fXzNTYVhkLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctMV9fXzJWTWl2LFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctMl9fXzIxZEtLLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctM19fX3ZiQUNwLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctNF9fXzJoenk4LFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctNV9fXzEtZzctLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctNl9fXzIxbGY4LFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctN19fXzNrQkcxLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctOF9fX2FmRUN4LFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctOV9fXzEwbWRsLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctMTBfX18xeVRmaixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLTExX19fM2hNUnUsXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy0xMl9fXzFybEFBLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTBfX18zS00zeCxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC0xX19fS2h2cVIsXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtMl9fXzFaRF96LFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTNfX18yR1FWYSxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC00X19fMXpQWmosXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtNV9fX0tqOElxLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTZfX18zbnVuMyxcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC03X19fWVRtbjksXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtOF9fXzFxRzJ0LFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTlfX19xZDI3QixcXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC0xMF9fXzJZU2NQLFxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTExX19fM3BQdmosXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtMTJfX18yckhFZyB7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAtbXMtZmxleDogMCAwIGF1dG87XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGdfX18zU2FYZCB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xcbiAgICBmbGV4LWJhc2lzOiAwO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy0xX19fMlZNaXYge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDguMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctMl9fXzIxZEtLIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDE2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogMTYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLTNfX192YkFDcCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAyNSU7XFxuICAgIGZsZXgtYmFzaXM6IDI1JTtcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy00X19fMmh6eTgge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMzMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiAzMy4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctNV9fXzEtZzctIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDQxLjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNDEuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLTZfX18yMWxmOCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1MCU7XFxuICAgIGZsZXgtYmFzaXM6IDUwJTtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy03X19fM2tCRzEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTguMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA1OC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctOF9fX2FmRUN4IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDY2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNjYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLTlfX18xMG1kbCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA3NSU7XFxuICAgIGZsZXgtYmFzaXM6IDc1JTtcXG4gICAgbWF4LXdpZHRoOiA3NSU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy0xMF9fXzF5VGZqIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDgzLjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogODMuMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLTExX19fM2hNUnUge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOTEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA5MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctMTJfX18xcmxBQSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtMF9fXzNLTTN4IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtMV9fX0todnFSIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTJfX18xWkRfeiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtM19fXzJHUVZhIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC00X19fMXpQWmoge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LTVfX19LajhJcSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtNl9fXzNudW4zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC03X19fWVRtbjkge1xcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19jb2wtbGctb2Zmc2V0LThfX18xcUcydCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2NvbC1sZy1vZmZzZXQtOV9fX3FkMjdCIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC0xMF9fXzJZU2NQIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY29sLWxnLW9mZnNldC0xMV9fXzNwUHZqIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fc3RhcnQtbGdfX19hZ2V1OSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fY2VudGVyLWxnX19fM0gzU0kge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fZW5kLWxnX19fMjdfZk0ge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX190b3AtbGdfX18xdFdXdyB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fbWlkZGxlLWxnX19fbm9jR0kge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19ib3R0b20tbGdfX19JWUdrcyB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fYXJvdW5kLWxnX19felpDMkMge1xcbiAgICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG5cXG4gIC5mbGV4Ym94Z3JpZF9fYmV0d2Vlbi1sZ19fXzJuanprIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLmZsZXhib3hncmlkX19maXJzdC1sZ19fXzZka3NPIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IC0xO1xcbiAgICBvcmRlcjogLTE7XFxuICB9XFxuXFxuICAuZmxleGJveGdyaWRfX2xhc3QtbGdfX194R0J2UyB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDI7XFxuICAgIC1tcy1mbGV4LW9yZGVyOiAxO1xcbiAgICBvcmRlcjogMTtcXG4gIH1cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9ub2RlX21vZHVsZXMvcmVhY3QtZmxleGJveC1ncmlkL2Rpc3QvcmVhY3QtZmxleGJveC1ncmlkLmNzc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9MYXlvdXQuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL0xheW91dC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9MYXlvdXQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLypcXG4gKiBub3JtYWxpemUuY3NzIGlzIGltcG9ydGVkIGluIEpTIGZpbGUuXFxuICogSWYgeW91IGltcG9ydCBleHRlcm5hbCBDU1MgZmlsZSBmcm9tIHlvdXIgaW50ZXJuYWwgQ1NTXFxuICogdGhlbiBpdCB3aWxsIGJlIGlubGluZWQgYW5kIHByb2Nlc3NlZCB3aXRoIENTUyBtb2R1bGVzLlxcbiAqL1xcblxcbi8qXFxuICogQmFzZSBzdHlsZXNcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbmh0bWwge1xcbiAgY29sb3I6ICMyMjI7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnSGVsdmV0aWNhTmV1ZS1MaWdodCcsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS4zNzU7IC8qIH4yMnB4ICovXFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZiFpbXBvcnRhbnQ7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogMzIwcHg7XFxufVxcblxcbmEge1xcbiAgY29sb3I6ICMwMDc0YzI7XFxufVxcblxcbioge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uTGF5b3V0X19jb250YWluZXJfX18xZzVLRyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuI0xheW91dF9fYXBwX19fM0V6TFIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLypcXG4gKiBSZW1vdmUgdGV4dC1zaGFkb3cgaW4gc2VsZWN0aW9uIGhpZ2hsaWdodDpcXG4gKiBodHRwczovL3R3aXR0ZXIuY29tL21pa2V0YXlsci9zdGF0dXMvMTIyMjg4MDUzMDFcXG4gKlxcbiAqIFRoZXNlIHNlbGVjdGlvbiBydWxlIHNldHMgaGF2ZSB0byBiZSBzZXBhcmF0ZS5cXG4gKiBDdXN0b21pemUgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggeW91ciBkZXNpZ24uXFxuICovXFxuXFxuOjotbW96LXNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG4gKiBBIGJldHRlciBsb29raW5nIGRlZmF1bHQgaG9yaXpvbnRhbCBydWxlXFxuICovXFxuXFxuaHIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuICogUmVtb3ZlIHRoZSBnYXAgYmV0d2VlbiBhdWRpbywgY2FudmFzLCBpZnJhbWVzLFxcbiAqIGltYWdlcywgdmlkZW9zIGFuZCB0aGUgYm90dG9tIG9mIHRoZWlyIGNvbnRhaW5lcnM6XFxuICogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvaXNzdWVzLzQ0MFxcbiAqL1xcblxcbmF1ZGlvLFxcbmNhbnZhcyxcXG5pZnJhbWUsXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKlxcbiAqIFJlbW92ZSBkZWZhdWx0IGZpZWxkc2V0IHN0eWxlcy5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcbiAqIEFsbG93IG9ubHkgdmVydGljYWwgcmVzaXppbmcgb2YgdGV4dGFyZWFzLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuICogQnJvd3NlciB1cGdyYWRlIHByb21wdFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLmJyb3dzZXJ1cGdyYWRlIHtcXG4gIG1hcmdpbjogMC4yZW0gMDtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcblxcbi8qXFxuICogUHJpbnQgc3R5bGVzXFxuICogSW5saW5lZCB0byBhdm9pZCB0aGUgYWRkaXRpb25hbCBIVFRQIHJlcXVlc3Q6XFxuICogaHR0cDovL3d3dy5waHBpZWQuY29tL2RlbGF5LWxvYWRpbmcteW91ci1wcmludC1jc3MvXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5AbWVkaWEgcHJpbnQge1xcbiAgKixcXG4gICo6YmVmb3JlLFxcbiAgKjphZnRlciB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IC8qIEJsYWNrIHByaW50cyBmYXN0ZXI6IGh0dHA6Ly93d3cuc2FuYmVpamkuY29tL2FyY2hpdmVzLzk1MyAqL1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICBhLFxcbiAgYTp2aXNpdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxuXFxuICBhW2hyZWZdOmFmdGVyIHtcXG4gICAgY29udGVudDogJyAoJyBhdHRyKGhyZWYpICcpJztcXG4gIH1cXG5cXG4gIGFiYnJbdGl0bGVdOmFmdGVyIHtcXG4gICAgY29udGVudDogJyAoJyBhdHRyKHRpdGxlKSAnKSc7XFxuICB9XFxuXFxuICAvKlxcbiAgICogRG9uJ3Qgc2hvdyBsaW5rcyB0aGF0IGFyZSBmcmFnbWVudCBpZGVudGlmaWVycyxcXG4gICAqIG9yIHVzZSB0aGUgYGphdmFzY3JpcHQ6YCBwc2V1ZG8gcHJvdG9jb2xcXG4gICAqL1xcblxcbiAgYVtocmVmXj0nIyddOmFmdGVyLFxcbiAgYVtocmVmXj0namF2YXNjcmlwdDonXTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgfVxcblxcbiAgcHJlLFxcbiAgYmxvY2txdW90ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBQcmludGluZyBUYWJsZXM6XFxuICAgKiBodHRwOi8vY3NzLWRpc2N1c3MuaW5jdXRpby5jb20vd2lraS9QcmludGluZ19UYWJsZXNcXG4gICAqL1xcblxcbiAgdGhlYWQge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XFxuICB9XFxuXFxuICB0cixcXG4gIGltZyB7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgcCxcXG4gIGgyLFxcbiAgaDMge1xcbiAgICBvcnBoYW5zOiAzO1xcbiAgICB3aWRvd3M6IDM7XFxuICB9XFxuXFxuICBoMixcXG4gIGgzIHtcXG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XFxuICB9XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HOztBQUVIOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDO0NBQy9NOztBQUVEOzs7O0dBSUc7O0FBRUg7O2dGQUVnRjs7QUFFaEY7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5REFBeUQ7RUFDekQsbUJBQW1CLENBQUMsV0FBVztDQUNoQzs7QUFFRDtFQUNFLG1FQUFtRTtFQUNuRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsK0JBQStCO1VBQ3ZCLHVCQUF1QjtDQUNoQzs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7Ozs7OztHQU1HOztBQUVIO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7Q0FDbkI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLFdBQVc7Q0FDWjs7QUFFRDs7OztHQUlHOztBQUVIOzs7Ozs7RUFNRSx1QkFBdUI7Q0FDeEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7Q0FDWjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDs7Z0ZBRWdGOztBQUVoRjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjs7QUFFRDs7OztnRkFJZ0Y7O0FBRWhGO0VBQ0U7OztJQUdFLG1DQUFtQztJQUNuQyx1QkFBdUIsQ0FBQywrREFBK0Q7SUFDdkYsb0NBQW9DO1lBQzVCLDRCQUE0QjtJQUNwQyw2QkFBNkI7R0FDOUI7O0VBRUQ7O0lBRUUsMkJBQTJCO0dBQzVCOztFQUVEO0lBQ0UsNkJBQTZCO0dBQzlCOztFQUVEO0lBQ0UsOEJBQThCO0dBQy9COztFQUVEOzs7S0FHRzs7RUFFSDs7SUFFRSxZQUFZO0dBQ2I7O0VBRUQ7O0lBRUUsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtHQUMxQjs7RUFFRDs7O0tBR0c7O0VBRUg7SUFDRSw0QkFBNEI7R0FDN0I7O0VBRUQ7O0lBRUUseUJBQXlCO0dBQzFCOztFQUVEO0lBQ0UsMkJBQTJCO0dBQzVCOztFQUVEOzs7SUFHRSxXQUFXO0lBQ1gsVUFBVTtHQUNYOztFQUVEOztJQUVFLHdCQUF3QjtHQUN6QjtDQUNGXCIsXCJmaWxlXCI6XCJMYXlvdXQuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4vKlxcbiAqIG5vcm1hbGl6ZS5jc3MgaXMgaW1wb3J0ZWQgaW4gSlMgZmlsZS5cXG4gKiBJZiB5b3UgaW1wb3J0IGV4dGVybmFsIENTUyBmaWxlIGZyb20geW91ciBpbnRlcm5hbCBDU1NcXG4gKiB0aGVuIGl0IHdpbGwgYmUgaW5saW5lZCBhbmQgcHJvY2Vzc2VkIHdpdGggQ1NTIG1vZHVsZXMuXFxuICovXFxuXFxuLypcXG4gKiBCYXNlIHN0eWxlc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuaHRtbCB7XFxuICBjb2xvcjogIzIyMjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTsgLyogfjIycHggKi9cXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmIWltcG9ydGFudDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAzMjBweDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogIzAwNzRjMjtcXG59XFxuXFxuKiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbiNhcHAge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLypcXG4gKiBSZW1vdmUgdGV4dC1zaGFkb3cgaW4gc2VsZWN0aW9uIGhpZ2hsaWdodDpcXG4gKiBodHRwczovL3R3aXR0ZXIuY29tL21pa2V0YXlsci9zdGF0dXMvMTIyMjg4MDUzMDFcXG4gKlxcbiAqIFRoZXNlIHNlbGVjdGlvbiBydWxlIHNldHMgaGF2ZSB0byBiZSBzZXBhcmF0ZS5cXG4gKiBDdXN0b21pemUgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggeW91ciBkZXNpZ24uXFxuICovXFxuXFxuOjotbW96LXNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG4gKiBBIGJldHRlciBsb29raW5nIGRlZmF1bHQgaG9yaXpvbnRhbCBydWxlXFxuICovXFxuXFxuaHIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuICogUmVtb3ZlIHRoZSBnYXAgYmV0d2VlbiBhdWRpbywgY2FudmFzLCBpZnJhbWVzLFxcbiAqIGltYWdlcywgdmlkZW9zIGFuZCB0aGUgYm90dG9tIG9mIHRoZWlyIGNvbnRhaW5lcnM6XFxuICogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvaXNzdWVzLzQ0MFxcbiAqL1xcblxcbmF1ZGlvLFxcbmNhbnZhcyxcXG5pZnJhbWUsXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKlxcbiAqIFJlbW92ZSBkZWZhdWx0IGZpZWxkc2V0IHN0eWxlcy5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcbiAqIEFsbG93IG9ubHkgdmVydGljYWwgcmVzaXppbmcgb2YgdGV4dGFyZWFzLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuICogQnJvd3NlciB1cGdyYWRlIHByb21wdFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuOmdsb2JhbCguYnJvd3NlcnVwZ3JhZGUpIHtcXG4gIG1hcmdpbjogMC4yZW0gMDtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcblxcbi8qXFxuICogUHJpbnQgc3R5bGVzXFxuICogSW5saW5lZCB0byBhdm9pZCB0aGUgYWRkaXRpb25hbCBIVFRQIHJlcXVlc3Q6XFxuICogaHR0cDovL3d3dy5waHBpZWQuY29tL2RlbGF5LWxvYWRpbmcteW91ci1wcmludC1jc3MvXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5AbWVkaWEgcHJpbnQge1xcbiAgKixcXG4gICo6YmVmb3JlLFxcbiAgKjphZnRlciB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IC8qIEJsYWNrIHByaW50cyBmYXN0ZXI6IGh0dHA6Ly93d3cuc2FuYmVpamkuY29tL2FyY2hpdmVzLzk1MyAqL1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICBhLFxcbiAgYTp2aXNpdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxuXFxuICBhW2hyZWZdOmFmdGVyIHtcXG4gICAgY29udGVudDogJyAoJyBhdHRyKGhyZWYpICcpJztcXG4gIH1cXG5cXG4gIGFiYnJbdGl0bGVdOmFmdGVyIHtcXG4gICAgY29udGVudDogJyAoJyBhdHRyKHRpdGxlKSAnKSc7XFxuICB9XFxuXFxuICAvKlxcbiAgICogRG9uJ3Qgc2hvdyBsaW5rcyB0aGF0IGFyZSBmcmFnbWVudCBpZGVudGlmaWVycyxcXG4gICAqIG9yIHVzZSB0aGUgYGphdmFzY3JpcHQ6YCBwc2V1ZG8gcHJvdG9jb2xcXG4gICAqL1xcblxcbiAgYVtocmVmXj0nIyddOmFmdGVyLFxcbiAgYVtocmVmXj0namF2YXNjcmlwdDonXTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgfVxcblxcbiAgcHJlLFxcbiAgYmxvY2txdW90ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBQcmludGluZyBUYWJsZXM6XFxuICAgKiBodHRwOi8vY3NzLWRpc2N1c3MuaW5jdXRpby5jb20vd2lraS9QcmludGluZ19UYWJsZXNcXG4gICAqL1xcblxcbiAgdGhlYWQge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XFxuICB9XFxuXFxuICB0cixcXG4gIGltZyB7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgcCxcXG4gIGgyLFxcbiAgaDMge1xcbiAgICBvcnBoYW5zOiAzO1xcbiAgICB3aWRvd3M6IDM7XFxuICB9XFxuXFxuICBoMixcXG4gIGgzIHtcXG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMYXlvdXRfX2NvbnRhaW5lcl9fXzFnNUtHXCIsXG5cdFwiYXBwXCI6IFwiTGF5b3V0X19hcHBfX18zRXpMUlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtdG9vbGJveCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL2JsdWVUaGVtZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgUkJ1dHRvbiA9IHByb3BzID0+IDxCdXR0b24gey4uLnByb3BzfSB0aGVtZT17c30gLz47XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoUkJ1dHRvbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vYmx1ZVRoZW1lLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9ibHVlVGhlbWUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vYmx1ZVRoZW1lLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0J1dHRvbi9ibHVlVGhlbWUuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLmJsdWVUaGVtZV9fYnV0dG9uX19fM3JXdTcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCA0MCwgMjUwKTtcXG4gIHBhZGRpbmc6IDE1cHggMzdweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDBweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGhlaWdodDogNjUuNnB4O1xcbiAgaGVpZ2h0OiA2NS42cHg7XFxuICBoZWlnaHQ6IDQuMXJlbTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBmb250LWZhbWlseTogTGF0bztcXG4gIGZvbnQtc2l6ZTogMjIuNHB4O1xcbiAgZm9udC1zaXplOiAyMi40cHg7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY3Vyc29yOiBwb2ludGVyXFxufVxcblxcbi5ibHVlVGhlbWVfX2J1dHRvbl9fXzNyV3U3OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMzAsIDE3NCk7XFxufVxcblxcbi5ibHVlVGhlbWVfX2J1dHRvbl9fXzNyV3U3OmFjdGl2ZSB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAyLjFyZW0gcmdiYSgyMTgsIDIxOCwgMjE4LCAuNSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyLjFyZW0gcmdiYSgyMTgsIDIxOCwgMjE4LCAuNSk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvY29tcG9uZW50cy9CdXR0b24vYmx1ZVRoZW1lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HOztBQUVIO0VBQ0U7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RSxFQUFFLGdDQUFnQyxFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixDQUFDLGlDQUFpQztDQUMvTTs7QUFFRDtFQUNFLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLG1DQUFtQztDQUNwQzs7QUFFRDtFQUNFLHVEQUF1RDtVQUMvQywrQ0FBK0M7Q0FDeERcIixcImZpbGVcIjpcImJsdWVUaGVtZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgNDAsIDI1MCk7XFxuICBwYWRkaW5nOiAxNXB4IDM3cHg7XFxuICBmb250LXdlaWdodDogOTAwcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBoZWlnaHQ6IDY1LjZweDtcXG4gIGhlaWdodDogNjUuNnB4O1xcbiAgaGVpZ2h0OiA0LjFyZW07XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgZm9udC1mYW1pbHk6IExhdG87XFxuICBmb250LXNpemU6IDIyLjRweDtcXG4gIGZvbnQtc2l6ZTogMjIuNHB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGN1cnNvcjogcG9pbnRlclxcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMzAsIDE3NCk7XFxufVxcblxcbi5idXR0b246YWN0aXZlIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDIuMXJlbSByZ2JhKDIxOCwgMjE4LCAyMTgsIC41KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDIuMXJlbSByZ2JhKDIxOCwgMjE4LCAyMTgsIC41KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImJ1dHRvblwiOiBcImJsdWVUaGVtZV9fYnV0dG9uX19fM3JXdTdcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYmx1ZVRoZW1lLmNzc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ29sIH0gZnJvbSAnLi9Db2wnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSb3cgfSBmcm9tICcuL1Jvdyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdyaWQgfSBmcm9tICcuL0dyaWQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9HcmlkL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbCB9IGZyb20gJ3JlYWN0LWZsZXhib3gtZ3JpZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IDxDb2wgey4uLnByb3BzfSAvPjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvR3JpZC9Db2wuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAncmVhY3QtZmxleGJveC1ncmlkJztcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4gPFJvdyB7Li4ucHJvcHN9IC8+O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0dyaWQvUm93LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdyZWFjdC1mbGV4Ym94LWdyaWQnO1xuaW1wb3J0IHMgZnJvbSAnY29tcG9uZW50cy9ncmlkLmNzcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5cbmNvbnN0IENHUklEID0gcHJvcHMgPT4gPEdyaWQgey4uLnByb3BzfSBjbGFzc05hbWU9e3MuY29udGFpbmVyfSAvPjtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShDR1JJRCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvR3JpZC9HcmlkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBNdWx0aXBsZXIgZnJvbSAnLi4vTXVsdGlwbGVyL011bHRpcGxlcic7XG5pbXBvcnQgRGVsZXRlSXRlbSBmcm9tICctIWJhYmVsLWxvYWRlciFzdmctcmVhY3QtbG9hZGVyIS4vaWNvbnMvZGVsZXRlLnN2Zz9uYW1lPURlbGV0ZUl0ZW0nO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9jYXJkSXRlbS5jc3MnO1xuXG5leHBvcnQgY29uc3QgQ2FyZEl0ZW0gPSAoeyBuYW1lLCBjb3VudCwgcHJpY2UsIGNhdGVnb3J5LCBjbGFzc25hbWVzIH0pID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgW3Mucm9vdF06IHRydWUsXG4gICAgICBbY2xhc3NuYW1lcy5yb290XTogdHJ1ZSxcbiAgICB9KX1cbiAgPlxuICAgIDxpbWcgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tL2cvMTY1LzE2NS9cIiBhbHQ9XCJcIiBjbGFzc05hbWU9e3MuaW1nfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmlubmVyfT5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzLmhlYWRlcn0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jYXRlZ29yeX0+TGl2aW5nIHJvb208L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5uYW1lfT5XaGl0ZSBTZWF0PC9zcGFuPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17cy5mb290ZXJ9PlxuICAgICAgICA8TXVsdGlwbGVyXG4gICAgICAgICAgY2xhc3NuYW1lcz17e1xuICAgICAgICAgICAgcm9vdDogcy5tdWx0aXBsZXIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDFcbiAgICAgICAgPC9NdWx0aXBsZXI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5wcmljZX0+JDI0IDAwNDA0OTwvc3Bhbj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNsZWFyfT5cbiAgICAgIDxEZWxldGVJdGVtIGNsYXNzTmFtZT17cy5kZWxldGV9IC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShDYXJkSXRlbSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL21vZHVsZXMvQ2FyZC9jb21wb25lbnRzL0NhcmRJdGVtL0NhcmRJdGVtLmpzIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IHsgUm93LCBDb2wsIEdyaWQgfSBmcm9tICdjb21wb25lbnRzL0dyaWQnO1xuaW1wb3J0IHMgZnJvbSAnLi9jYXJkLmNzcyc7XG5pbXBvcnQgeyBDYXJkUm9vdCB9IGZyb20gJy4uLy4uL21vZHVsZXMvQ2FyZCc7XG5cbmNsYXNzIENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge307XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17OX0gbWQ9ezl9IGxnPXs5fSBzbU9mZnNldD17Mn0+XG4gICAgICAgICAgICAgIDxDYXJkUm9vdCAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShDYXJkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL2NhcmQvQ2FyZC5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vY2FyZC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vY2FyZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9jYXJkLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvY2FyZC9jYXJkLmNzc1xuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLmNhcmRfX3Jvb3RfX18xY2xqWCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgcGFkZGluZy10b3A6IDI1NC40cHg7XFxuICBwYWRkaW5nLXRvcDogMjU0LjRweDtcXG4gIHBhZGRpbmctdG9wOiAxNS45cmVtO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nLWJvdHRvbTogODhweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4OHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDUuNXJlbTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAuY2FyZF9fcm9vdF9fXzFjbGpYIHtcXG4gICAgcGFkZGluZy10b3A6IDQuOHJlbTtcXG4gIH1cXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9yb3V0ZXMvY2FyZC9jYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HOztBQUVIOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDO0NBQy9NOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHVCQUF1QjtDQUN4Qjs7QUFFRDs7RUFFRTtJQUNFLG9CQUFvQjtHQUNyQjtDQUNGXCIsXCJmaWxlXCI6XCJjYXJkLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLnJvb3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gIHBhZGRpbmctdG9wOiAyNTQuNHB4O1xcbiAgcGFkZGluZy10b3A6IDI1NC40cHg7XFxuICBwYWRkaW5nLXRvcDogMTUuOXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZy1ib3R0b206IDg4cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogODhweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1LjVyZW07XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcbiAgLnJvb3Qge1xcbiAgICBwYWRkaW5nLXRvcDogNC44cmVtO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcImNhcmRfX3Jvb3RfX18xY2xqWFwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9yb3V0ZXMvY2FyZC9jYXJkLmNzc1xuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBDYXJkUm9vdCBmcm9tICcuL2NvbXBvbmVudHMvQ2FyZC9DYXJkJztcbmltcG9ydCBJdGVtIGZyb20gJy4vY29tcG9uZW50cy9DYXJkSXRlbS9DYXJkSXRlbSc7XG5cbmV4cG9ydCB7IENhcmRSb290LCBJdGVtIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL21vZHVsZXMvQ2FyZC9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FyZEl0ZW0gZnJvbSAnLi4vQ2FyZEl0ZW0vQ2FyZEl0ZW0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuXG5pbXBvcnQgcyBmcm9tICcuL2NhcmQuY3NzJztcblxuZXhwb3J0IGNvbnN0IENhcmQgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPGgzIGNsYXNzTmFtZT17cy50aXRsZX0+0JrQvtGA0LfQuNC90LA8L2gzPlxuICAgIDxDYXJkSXRlbVxuICAgICAgY291bnQ9ezF9XG4gICAgICBjbGFzc25hbWVzPXt7XG4gICAgICAgIHJvb3Q6IHMuaXRlbSxcbiAgICAgIH19XG4gICAgLz5cbiAgICA8Q2FyZEl0ZW1cbiAgICAgIGNvdW50PXsxfVxuICAgICAgY2xhc3NuYW1lcz17e1xuICAgICAgICByb290OiBzLml0ZW0sXG4gICAgICB9fVxuICAgIC8+XG4gICAgPGZvb3RlciBjbGFzc05hbWU9e3MuZm9vdGVyfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5sYWJlbH0+0KHRg9C80LzQsDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy50b3RhbH0+MjQwMDwvc3Bhbj5cbiAgICA8L2Zvb3Rlcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5zdWJtaXR9PlxuICAgICAgPEJ1dHRvbiBsYWJlbD1cItCe0YTQvtGA0LzQuNGC0Ywg0LfQsNC60LfQsFwiIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShDYXJkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbW9kdWxlcy9DYXJkL2NvbXBvbmVudHMvQ2FyZC9DYXJkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzIGZyb20gJy4vTXVsdGlwbGVyLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBNdWx0aXBsZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NuYW1lcyB9KSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgIFtzLnJvb3RdOiB0cnVlLFxuICAgICAgW2NsYXNzbmFtZXMucm9vdF06IHRydWUsXG4gICAgfSl9XG4gID5cbiAgICA8c3BhbiBjbGFzc05hbWU9e3MuY291bnR9PntjaGlsZHJlbn08L3NwYW4+XG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY29udHJvbHN9PlxuICAgICAgPHNwYW5cbiAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgW3MuYXJyb3ddOiB0cnVlLFxuICAgICAgICAgIFtzLnVwXTogdHJ1ZSxcbiAgICAgICAgfSl9XG4gICAgICAvPlxuXG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICBbcy5hcnJvd106IHRydWUsXG4gICAgICAgICAgW3MuZG93bl06IHRydWUsXG4gICAgICAgIH0pfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKE11bHRpcGxlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL21vZHVsZXMvQ2FyZC9jb21wb25lbnRzL011bHRpcGxlci9NdWx0aXBsZXIuanMiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL011bHRpcGxlci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vTXVsdGlwbGVyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtcnVsZXMtNCEuL011bHRpcGxlci5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9DYXJkL2NvbXBvbmVudHMvTXVsdGlwbGVyL011bHRpcGxlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLk11bHRpcGxlcl9fcm9vdF9fXzJnUnFGIHtcXG4gIG1pbi13aWR0aDogNzAuNHB4O1xcbiAgbWluLXdpZHRoOiA3MC40cHg7XFxuICBtaW4td2lkdGg6IDQuNHJlbTtcXG4gIG1pbi1oZWlnaHQ6IDQzLjJweDtcXG4gIG1pbi1oZWlnaHQ6IDQzLjJweDtcXG4gIG1pbi1oZWlnaHQ6IDIuN3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcXG4gIC5NdWx0aXBsZXJfX3Jvb3RfX18yZ1JxRiB7XFxuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5NdWx0aXBsZXJfX3Jvb3RfX18yZ1JxRiB7XFxuICAgIHBhZGRpbmc6IDNweCAxNnB4O1xcbiAgfVxcbn1cXG4uTXVsdGlwbGVyX19jb3VudF9fXzFDUUhwIHtcXG4gIG1hcmdpbi1yaWdodDogN3B4O1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGZvbnQtc2l6ZTogMjUuNnB4O1xcbiAgZm9udC1zaXplOiAyNS42cHg7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMS4yMTZweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxLjIxNnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDc2cmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcXG4gIC5NdWx0aXBsZXJfX2NvdW50X19fMUNRSHAge1xcbiAgICBmb250LXNpemU6IDIuM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuTXVsdGlwbGVyX19jb3VudF9fXzFDUUhwIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICB9XFxufVxcbi5NdWx0aXBsZXJfX2Fycm93X19fMnlFdHQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxufVxcbi5NdWx0aXBsZXJfX3VwX19fMkFjY0cge1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQjZDVkNWQ1O1xcbn1cXG4uTXVsdGlwbGVyX19kb3duX19fZXZYcXMge1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wOiA1cHggc29saWQgI2Q1ZDVkNTtcXG59XFxuLk11bHRpcGxlcl9fY29udHJvbHNfX18yOHpEVCB7XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYW50b24vRGVza3RvcC9wcm9qZWN0cy9kZXdvcmthY3ktc2l0ZS9zcmMvbW9kdWxlcy9DYXJkL2NvbXBvbmVudHMvTXVsdGlwbGVyL011bHRpcGxlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLDBCQUEwQjtNQUN0Qix1QkFBdUI7VUFDbkIsb0JBQW9CO0VBQzVCLHlCQUF5QjtNQUNyQixzQkFBc0I7VUFDbEIsd0JBQXdCO0NBQ2pDO0FBQ0Q7RUFDRTtJQUNFLGtCQUFrQjtHQUNuQjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLGtCQUFrQjtHQUNuQjtDQUNGO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtDQUMxQjtBQUNEO0VBQ0U7SUFDRSxrQkFBa0I7R0FDbkI7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxrQkFBa0I7R0FDbkI7Q0FDRjtBQUNEO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0NBQ2pDO0FBQ0Q7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsOEJBQThCO0NBQy9CO0FBQ0Q7Q0FDQ1wiLFwiZmlsZVwiOlwiTXVsdGlwbGVyLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7XFxuICBtaW4td2lkdGg6IDcwLjRweDtcXG4gIG1pbi13aWR0aDogNzAuNHB4O1xcbiAgbWluLXdpZHRoOiA0LjRyZW07XFxuICBtaW4taGVpZ2h0OiA0My4ycHg7XFxuICBtaW4taGVpZ2h0OiA0My4ycHg7XFxuICBtaW4taGVpZ2h0OiAyLjdyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDU0NHB4KSB7XFxuICAucm9vdCB7XFxuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5yb290IHtcXG4gICAgcGFkZGluZzogM3B4IDE2cHg7XFxuICB9XFxufVxcbi5jb3VudCB7XFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBmb250LXNpemU6IDI1LjZweDtcXG4gIGZvbnQtc2l6ZTogMjUuNnB4O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjE2cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMS4yMTZweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA3NnJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDU0NHB4KSB7XFxuICAuY291bnQge1xcbiAgICBmb250LXNpemU6IDIuM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY291bnQge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gIH1cXG59XFxuLmFycm93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDVweDtcXG4gIGhlaWdodDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbn1cXG4udXAge1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQjZDVkNWQ1O1xcbn1cXG4uZG93biB7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZDVkNWQ1O1xcbn1cXG4uY29udHJvbHMge1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIk11bHRpcGxlcl9fcm9vdF9fXzJnUnFGXCIsXG5cdFwiY291bnRcIjogXCJNdWx0aXBsZXJfX2NvdW50X19fMUNRSHBcIixcblx0XCJhcnJvd1wiOiBcIk11bHRpcGxlcl9fYXJyb3dfX18yeUV0dFwiLFxuXHRcInVwXCI6IFwiTXVsdGlwbGVyX191cF9fXzJBY2NHXCIsXG5cdFwiZG93blwiOiBcIk11bHRpcGxlcl9fZG93bl9fX2V2WHFzXCIsXG5cdFwiY29udHJvbHNcIjogXCJNdWx0aXBsZXJfX2NvbnRyb2xzX19fMjh6RFRcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvbW9kdWxlcy9DYXJkL2NvbXBvbmVudHMvTXVsdGlwbGVyL011bHRpcGxlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBEZWxldGVJdGVtIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIscHJvcHMsW1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZmlsbFwiOlwiIzAwMjNmZlwiLFwiZFwiOlwiTTIuNzguNjZsMTUuNTYgMTUuNTZhMS41IDEuNSAwIDEgMS0yLjEyIDIuMTJMLjY2IDIuNzhBMS41IDEuNSAwIDEgMSAyLjc4LjY2elwiLFwia2V5XCI6MH0pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZmlsbFwiOlwiIzAwMjNmZlwiLFwiZFwiOlwiTTE4LjU1IDIuNjJsLTE1LjkgMTUuOWExLjUzIDEuNTMgMCAxIDEtMi4xNy0yLjE3TDE2LjM4LjQ1YTEuNTMgMS41MyAwIDEgMSAyLjE3IDIuMTd6XCIsXCJrZXlcIjoxfSldKTtcbn1cblxuRGVsZXRlSXRlbS5kaXNwbGF5TmFtZSA9IFwiRGVsZXRlSXRlbVwiO1xuXG5EZWxldGVJdGVtLmRlZmF1bHRQcm9wcyA9IHtcIndpZHRoXCI6XCIxOVwiLFwiaGVpZ2h0XCI6XCIxOVwiLFwidmlld0JveFwiOlwiMCAwIDE5IDE5XCIsXCJpZFwiOlwiYnVyZ2VyXCJ9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERlbGV0ZUl0ZW07XG5cbkRlbGV0ZUl0ZW0uZGVmYXVsdCA9IERlbGV0ZUl0ZW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL21vZHVsZXMvQ2FyZC9jb21wb25lbnRzL0NhcmRJdGVtL2ljb25zL2RlbGV0ZS5zdmc/bmFtZT1EZWxldGVJdGVtIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9jYXJkSXRlbS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vY2FyZEl0ZW0uY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vY2FyZEl0ZW0uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvQ2FyZC9jb21wb25lbnRzL0NhcmRJdGVtL2NhcmRJdGVtLmNzc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2FyZEl0ZW1fX3Jvb3RfX18zRTNlUyB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLmNhcmRJdGVtX19pbm5lcl9fXzJzZ3B2IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNhcmRJdGVtX19pbm5lcl9fXzJzZ3B2IHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICB9XFxufVxcbi5jYXJkSXRlbV9fY2F0ZWdvcnlfX18xZC15cSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAuY2FyZEl0ZW1fX2NhdGVnb3J5X19fMWQteXEge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0N3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcXG4gIC5jYXJkSXRlbV9fY2F0ZWdvcnlfX18xZC15cSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jYXJkSXRlbV9fY2F0ZWdvcnlfX18xZC15cSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgfVxcbn1cXG4uY2FyZEl0ZW1fX25hbWVfX18zRnBzNSB7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLmNhcmRJdGVtX19uYW1lX19fM0ZwczUge1xcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTE2cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcXG4gIC5jYXJkSXRlbV9fbmFtZV9fXzNGcHM1IHtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNhcmRJdGVtX19uYW1lX19fM0ZwczUge1xcbiAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gIH1cXG59XFxuLmNhcmRJdGVtX19oZWFkZXJfX18xZzhFaSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAuY2FyZEl0ZW1fX2hlYWRlcl9fXzFnOEVpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY2FyZEl0ZW1fX2hlYWRlcl9fXzFnOEVpIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICB9XFxufVxcbi5jYXJkSXRlbV9fZm9vdGVyX19fMUFCeXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLmNhcmRJdGVtX19mb290ZXJfX18xQUJ5diB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuOHJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY2FyZEl0ZW1fX2Zvb3Rlcl9fXzFBQnl2IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgfVxcbn1cXG4uY2FyZEl0ZW1fX211bHRpcGxlcl9fX3B3T1BhIHtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG59XFxuLmNhcmRJdGVtX19wcmljZV9fXzNIYmRRIHtcXG4gIGNvbG9yOiByZ2IoMjMsIDQwLCAyNTApO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAuY2FyZEl0ZW1fX3ByaWNlX19fM0hiZFEge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDc2cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcXG4gIC5jYXJkSXRlbV9fcHJpY2VfX18zSGJkUSB7XFxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jYXJkSXRlbV9fcHJpY2VfX18zSGJkUSB7XFxuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgfVxcbn1cXG4uY2FyZEl0ZW1fX2NsZWFyX19fMThTVEwge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5jYXJkSXRlbV9fZGVsZXRlX19fMnFacUYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcXG4gIC5jYXJkSXRlbV9fZGVsZXRlX19fMnFacUYge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jYXJkSXRlbV9fZGVsZXRlX19fMnFacUYge1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgfVxcbn1cXG4uY2FyZEl0ZW1fX2RlbGV0ZV9fXzJxWnFGIHBhdGgge1xcbiAgICBmaWxsOiAjZDFkMWQxO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcXG4gIC5jYXJkSXRlbV9faW1nX19fMTZ1VEIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcXG4gIC5jYXJkSXRlbV9faW1nX19fMTZ1VEIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MnB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jYXJkSXRlbV9faW1nX19fMTZ1VEIge1xcbiAgICB3aWR0aDogODZweDtcXG4gICAgaGVpZ2h0OiA4NnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG4gIH1cXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hbnRvbi9EZXNrdG9wL3Byb2plY3RzL2Rld29ya2FjeS1zaXRlL3NyYy9tb2R1bGVzL0NhcmQvY29tcG9uZW50cy9DYXJkSXRlbS9jYXJkSXRlbS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCwwQkFBMEI7TUFDdEIsdUJBQXVCO1VBQ25CLG9CQUFvQjtFQUM1QiwrQkFBK0I7Q0FDaEM7QUFDRDtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLDBCQUEwQjtNQUN0Qix1QkFBdUI7VUFDbkIsb0JBQW9CO0VBQzVCLG9CQUFvQjtNQUNoQixnQkFBZ0I7Q0FDckI7QUFDRDtFQUNFO0lBQ0Usb0JBQW9CO1FBQ2hCLHFCQUFxQjtZQUNqQixhQUFhO0lBQ3JCLGtCQUFrQjtHQUNuQjtDQUNGO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixzQkFBc0I7R0FDdkI7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxrQkFBa0I7R0FDbkI7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxrQkFBa0I7R0FDbkI7Q0FDRjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtHQUMxQjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLGtCQUFrQjtHQUNuQjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLGtCQUFrQjtHQUNuQjtDQUNGO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFDRDtFQUNFO0lBQ0Usb0JBQW9CO0dBQ3JCO0NBQ0Y7QUFDRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtHQUNsQjtDQUNGO0FBQ0Q7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCwwQkFBMEI7TUFDdEIsdUJBQXVCO1VBQ25CLG9CQUFvQjtDQUM3QjtBQUNEO0VBQ0U7SUFDRSxzQkFBc0I7R0FDdkI7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtHQUNuQjtDQUNGO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtHQUMxQjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLGtCQUFrQjtHQUNuQjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLGtCQUFrQjtHQUNuQjtDQUNGO0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0dBQ2Q7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYTtHQUNkO0NBQ0Y7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDtFQUNFO0lBQ0UsY0FBYztHQUNmO0NBQ0Y7QUFDRDtFQUNFO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtHQUNwQjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0dBQ25CO0NBQ0ZcIixcImZpbGVcIjpcImNhcmRJdGVtLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLmlubmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmlubmVyIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICB9XFxufVxcbi5jYXRlZ29yeSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAuY2F0ZWdvcnkge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0N3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcXG4gIC5jYXRlZ29yeSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jYXRlZ29yeSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgfVxcbn1cXG4ubmFtZSB7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLm5hbWUge1xcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTE2cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcXG4gIC5uYW1lIHtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLm5hbWUge1xcbiAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gIH1cXG59XFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAuaGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuaGVhZGVyIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICB9XFxufVxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLmZvb3RlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuOHJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgfVxcbn1cXG4ubXVsdGlwbGVyIHtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG59XFxuLnByaWNlIHtcXG4gIGNvbG9yOiByZ2IoMjMsIDQwLCAyNTApO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAucHJpY2Uge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDc2cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcXG4gIC5wcmljZSB7XFxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5wcmljZSB7XFxuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgfVxcbn1cXG4uY2xlYXIge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5kZWxldGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcXG4gIC5kZWxldGUge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5kZWxldGUge1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgfVxcbn1cXG4uZGVsZXRlIHBhdGgge1xcbiAgICBmaWxsOiAjZDFkMWQxO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcXG4gIC5pbWcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcXG4gIC5pbWcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MnB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5pbWcge1xcbiAgICB3aWR0aDogODZweDtcXG4gICAgaGVpZ2h0OiA4NnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJjYXJkSXRlbV9fcm9vdF9fXzNFM2VTXCIsXG5cdFwiaW5uZXJcIjogXCJjYXJkSXRlbV9faW5uZXJfX18yc2dwdlwiLFxuXHRcImNhdGVnb3J5XCI6IFwiY2FyZEl0ZW1fX2NhdGVnb3J5X19fMWQteXFcIixcblx0XCJuYW1lXCI6IFwiY2FyZEl0ZW1fX25hbWVfX18zRnBzNVwiLFxuXHRcImhlYWRlclwiOiBcImNhcmRJdGVtX19oZWFkZXJfX18xZzhFaVwiLFxuXHRcImZvb3RlclwiOiBcImNhcmRJdGVtX19mb290ZXJfX18xQUJ5dlwiLFxuXHRcIm11bHRpcGxlclwiOiBcImNhcmRJdGVtX19tdWx0aXBsZXJfX19wd09QYVwiLFxuXHRcInByaWNlXCI6IFwiY2FyZEl0ZW1fX3ByaWNlX19fM0hiZFFcIixcblx0XCJjbGVhclwiOiBcImNhcmRJdGVtX19jbGVhcl9fXzE4U1RMXCIsXG5cdFwiZGVsZXRlXCI6IFwiY2FyZEl0ZW1fX2RlbGV0ZV9fXzJxWnFGXCIsXG5cdFwiaW1nXCI6IFwiY2FyZEl0ZW1fX2ltZ19fXzE2dVRCXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL21vZHVsZXMvQ2FyZC9jb21wb25lbnRzL0NhcmRJdGVtL2NhcmRJdGVtLmNzc1xuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vY2FyZC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy00IS4vY2FyZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTQhLi9jYXJkLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL0NhcmQvY29tcG9uZW50cy9DYXJkL2NhcmQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkX190aXRsZV9fXzNFUWpxIHtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuXFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLmNhcmRfX3RpdGxlX19fM0VRanEge1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNzlyZW07XFxuICAgIGZvbnQtc2l6ZTogMy43cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1LjVyZW07XFxuXFxuICB9XFxuXFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLmNhcmRfX2l0ZW1fX18yNzBPdCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuOHJlbTtcXG5cXG4gIH1cXG4gIC5jYXJkX19pdGVtX19fMjcwT3Q6bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDUuNnJlbTtcXG5cXG4gIH1cXG5cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAuY2FyZF9faXRlbV9fXzI3ME90IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNC43cmVtO1xcblxcbiAgfVxcblxcbn1cXG4uY2FyZF9fZm9vdGVyX19fMlpmbTEge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLmNhcmRfX2Zvb3Rlcl9fXzJaZm0xIHtcXG4gICAgbWFyZ2luLXRvcDogMy44cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjlyZW07XFxuXFxuICB9XFxuXFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkge1xcbiAgLmNhcmRfX2Zvb3Rlcl9fXzJaZm0xIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcblxcbiAgfVxcblxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jYXJkX19mb290ZXJfX18yWmZtMSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcbiAgfVxcblxcbn1cXG4uY2FyZF9fbGFiZWxfX18xYkVVWSB7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLmNhcmRfX2xhYmVsX19fMWJFVVkge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0N3JlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxOXB4O1xcblxcbiAgfVxcblxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcXG4gIC5jYXJkX19sYWJlbF9fXzFiRVVZIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuXFxuICB9XFxuXFxufVxcbi5jYXJkX190b3RhbF9fXzJkQTh6IHtcXG4gIGNvbG9yOiByZ2IoMjMsIDQwLCAyNTApO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAuY2FyZF9fdG90YWxfX18yZEE4eiB7XFxuICAgIGZvbnQtc2l6ZTogMy43cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNzlyZW07XFxuXFxuICB9XFxuXFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkge1xcbiAgLmNhcmRfX3RvdGFsX19fMmRBOHoge1xcbiAgICBmb250LXNpemU6IDUuNHJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTc5cmVtO1xcblxcbiAgfVxcblxcbn1cXG4uY2FyZF9fc3VibWl0X19fMXl1SGYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jYXJkX19zdWJtaXRfX18xeXVIZiB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcblxcbiAgfVxcblxcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FudG9uL0Rlc2t0b3AvcHJvamVjdHMvZGV3b3JrYWN5LXNpdGUvc3JjL21vZHVsZXMvQ2FyZC9jb21wb25lbnRzL0NhcmQvY2FyZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixjQUFjOztDQUVmO0FBQ0Q7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsc0JBQXNCOztHQUV2Qjs7Q0FFRjtBQUNEO0VBQ0U7SUFDRSxzQkFBc0I7O0dBRXZCO0VBQ0Q7SUFDRSxzQkFBc0I7O0dBRXZCOztDQUVGO0FBQ0Q7RUFDRTtJQUNFLHNCQUFzQjs7R0FFdkI7O0NBRUY7QUFDRDtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLDBCQUEwQjtNQUN0Qix1QkFBdUI7VUFDbkIsb0JBQW9CO0NBQzdCO0FBQ0Q7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixzQkFBc0I7O0dBRXZCOztDQUVGO0FBQ0Q7RUFDRTtJQUNFLHlCQUF5QjtRQUNyQixzQkFBc0I7WUFDbEIsd0JBQXdCO0lBQ2hDLG9CQUFvQjs7R0FFckI7O0NBRUY7QUFDRDtFQUNFO0lBQ0Usc0JBQXNCO1FBQ2xCLG1CQUFtQjtZQUNmLDBCQUEwQjs7R0FFbkM7O0NBRUY7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUJBQW1COztHQUVwQjs7Q0FFRjtBQUNEO0VBQ0U7SUFDRSxrQkFBa0I7O0dBRW5COztDQUVGO0FBQ0Q7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7O0dBRTFCOztDQUVGO0FBQ0Q7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7O0dBRTFCOztDQUVGO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFO0lBQ0Usa0JBQWtCOztHQUVuQjs7Q0FFRlwiLFwiZmlsZVwiOlwiY2FyZC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRpdGxlIHtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuXFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLnRpdGxlIHtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTc5cmVtO1xcbiAgICBmb250LXNpemU6IDMuN3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNS41cmVtO1xcblxcbiAgfVxcblxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcXG4gIC5pdGVtIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xcblxcbiAgfVxcbiAgLml0ZW06bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDUuNnJlbTtcXG5cXG4gIH1cXG5cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAuaXRlbSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQuN3JlbTtcXG5cXG4gIH1cXG5cXG59XFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMy44cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjlyZW07XFxuXFxuICB9XFxuXFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkge1xcbiAgLmZvb3RlciB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG5cXG4gIH1cXG5cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFxuICB9XFxuXFxufVxcbi5sYWJlbCB7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNDdyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMTlweDtcXG5cXG4gIH1cXG5cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDU0NHB4KSB7XFxuICAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG5cXG4gIH1cXG5cXG59XFxuLnRvdGFsIHtcXG4gIGNvbG9yOiByZ2IoMjMsIDQwLCAyNTApO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAudG90YWwge1xcbiAgICBmb250LXNpemU6IDMuN3JlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTc5cmVtO1xcblxcbiAgfVxcblxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcXG4gIC50b3RhbCB7XFxuICAgIGZvbnQtc2l6ZTogNS40cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNzlyZW07XFxuXFxuICB9XFxuXFxufVxcbi5zdWJtaXQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5zdWJtaXQge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG5cXG4gIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRpdGxlXCI6IFwiY2FyZF9fdGl0bGVfX18zRVFqcVwiLFxuXHRcIml0ZW1cIjogXCJjYXJkX19pdGVtX19fMjcwT3RcIixcblx0XCJmb290ZXJcIjogXCJjYXJkX19mb290ZXJfX18yWmZtMVwiLFxuXHRcImxhYmVsXCI6IFwiY2FyZF9fbGFiZWxfX18xYkVVWVwiLFxuXHRcInRvdGFsXCI6IFwiY2FyZF9fdG90YWxfX18yZEE4elwiLFxuXHRcInN1Ym1pdFwiOiBcImNhcmRfX3N1Ym1pdF9fXzF5dUhmXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL21vZHVsZXMvQ2FyZC9jb21wb25lbnRzL0NhcmQvY2FyZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiI7O0E7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUxBO0FBVUE7QUFDQTtBQVpBOzs7Ozs7O0FBYkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBQ0E7QUEyQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBbkNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQURBO0FBK0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFQQTtBQWdCQTtBQUNBO0FBREE7QUFHQTs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQUZBO0FBUUE7QUFEQTtBQVpBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFpQkE7QUFuQ0E7QUFDQTtBQURBO0FBRUE7QUFEQTtBQXFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFDQTtBQVFBOzs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFoQ0E7QUFxQ0E7QUFwREE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQURBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQW1EQTs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkQTtBQVBBO0FBRkE7QUFUQTtBQUNBO0FBdUNBOzs7Ozs7O0FDbkVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFMQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBS0E7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBZEE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFSQTtBQWpCQTtBQUNBO0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTs7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkE7QUFMQTtBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUF2QkE7QUFBQTtBQUFBO0FBQ0E7QUE0QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFEQTtBQURBO0FBVUE7QUFmQTtBQUNBO0FBREE7QUFrQkE7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBbEJBO0FBQUE7QUFBQTtBQUNBO0FBdUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQVBBO0FBQUE7QUFBQTtBQUNBO0FBd0JBOzs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=