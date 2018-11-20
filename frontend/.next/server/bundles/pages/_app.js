module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOCAL_STATE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TOGGLE_CART_MUTATION; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_CartStyles__ = __webpack_require__("./components/styles/CartStyles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_Supreme__ = __webpack_require__("./components/styles/Supreme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_CloseButton__ = __webpack_require__("./components/styles/CloseButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_SickButton__ = __webpack_require__("./components/styles/SickButton.js");
var _jsxFileName = "/Users/andrew/code/Adv_react/frontend/components/Cart.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query {\n    cartOpen @client\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  mutation {\n    toggleCart @client\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var LOCAL_STATE_QUERY = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject);
var TOGGLE_CART_MUTATION = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject2);

var Cart = function Cart() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["Mutation"], {
    mutation: TOGGLE_CART_MUTATION,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, function (toggleCart) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["Query"], {
      query: LOCAL_STATE_QUERY,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, function (_ref) {
      var data = _ref.data;
      return console.log(data) || __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles_CartStyles__["a" /* default */], {
        open: data.cartOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__styles_CloseButton__["a" /* default */], {
        onClick: toggleCart,
        title: "close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "\xD7"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_Supreme__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "Your Cart"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "You Have __ Items in your cart.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "$10.10"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__styles_SickButton__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "Checkout")));
    });
  });
};

/* harmony default export */ __webpack_exports__["c"] = (Cart);


/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nprogress__ = __webpack_require__("nprogress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Nav__ = __webpack_require__("./components/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Cart__ = __webpack_require__("./components/Cart.js");
var _jsxFileName = "/Users/andrew/code/Adv_react/frontend/components/Header.js";








__WEBPACK_IMPORTED_MODULE_4_next_router___default.a.onRouteChangeStart = function () {
  console.log("onRouteChangeStart Triggered");
  __WEBPACK_IMPORTED_MODULE_3_nprogress___default.a.start();
};

__WEBPACK_IMPORTED_MODULE_4_next_router___default.a.onRouteChangeComplete = function () {
  console.log("onRouteChangeComplete Triggered");
  __WEBPACK_IMPORTED_MODULE_3_nprogress___default.a.done();
};

__WEBPACK_IMPORTED_MODULE_4_next_router___default.a.onRouteChangeError = function () {
  __WEBPACK_IMPORTED_MODULE_3_nprogress___default.a.done();
  console.log("onRouteChangeError Triggered");
};

var Logo = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.h1.withConfig({
  displayName: "Header__Logo",
  componentId: "s2cpreo-0"
})(["font-size:4rem;margin-left:2rem;position:relative;z-index:2;transform:skew(-7deg);a{padding:0.5rem 1rem;background:", ";color:white;text-transform:uppercase;text-decoration:none;}@media (max-width:1300px){margin:0;text-align:center;}"], function (props) {
  return props.theme.red;
});
var StyledHeader = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "s2cpreo-1"
})([".bar{border-bottom:10px solid ", ";display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;@media (max-width:1300px){grid-template-columns:1fr;justify-content:center;}}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid ", ";}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.lightGrey;
});

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, "Sick Fits"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Nav__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "sub-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, "Search")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Cart__["c" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Meta.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/Users/andrew/code/Adv_react/frontend/components/Meta.js";



var Meta = function Meta() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Sick Fits!"));
};

/* harmony default export */ __webpack_exports__["a"] = (Meta);

/***/ }),

/***/ "./components/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Cart__ = __webpack_require__("./components/Cart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_NavStyles__ = __webpack_require__("./components/styles/NavStyles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__User__ = __webpack_require__("./components/User.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Signout__ = __webpack_require__("./components/Signout.js");
var _jsxFileName = "/Users/andrew/code/Adv_react/frontend/components/Nav.js";









var Nav = function Nav() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__User__["b" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, function (_ref) {
    var me = _ref.data.me;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_NavStyles__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
      href: "/items",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, "Shop")), me && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
      href: "/sell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, "Sell")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
      href: "/orders",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, "Orders")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
      href: "/me",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }, "Account")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Signout__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Mutation"], {
      mutation: __WEBPACK_IMPORTED_MODULE_3__Cart__["b" /* TOGGLE_CART_MUTATION */],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, function (toggleCart) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: toggleCart,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "My Cart");
    })), !me && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
      href: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }, "Sign In")));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./components/Page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Meta__ = __webpack_require__("./components/Meta.js");
var _jsxFileName = "/Users/andrew/code/Adv_react/frontend/components/Page.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  @font-face {\n    font-family: 'radnika_next';\n    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');\n    font-weight: normal;\n    font-style: normal;\n  }\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  body {\n    padding: 0;\n    margin: 0;\n    font-size: 1.5rem;\n    line-height: 2;\n    font-family: 'radnika_next';\n  }\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};
var StyledPage = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "s4u7a64-0"
})(["background:white;color:", ";"], function (props) {
  return props.theme.black;
});
var Inner = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "Page__Inner",
  componentId: "s4u7a64-1"
})(["max-width:", ";margin:0 auto;padding:2rem;"], function (props) {
  return props.theme.maxWidth;
});
Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["injectGlobal"])(_templateObject, theme.black);

var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_components__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Meta__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, this.props.children)));
    }
  }]);

  return Page;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ }),

/***/ "./components/Signout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__User__ = __webpack_require__("./components/User.js");
var _jsxFileName = "/Users/andrew/code/Adv_react/frontend/components/Signout.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  mutation SIGN_OUT_MUTATION {\n    signout {\n      message\n    }\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SIGN_OUT_MUTATION = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject);

var Signout = function Signout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["Mutation"], {
    mutation: SIGN_OUT_MUTATION,
    refetchQueries: [{
      query: __WEBPACK_IMPORTED_MODULE_3__User__["a" /* CURRENT_USER_QUERY */]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, function (signout) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
      onClick: signout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, "Sign Out");
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Signout);

/***/ }),

/***/ "./components/User.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _jsxFileName = "/Users/andrew/code/Adv_react/frontend/components/User.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query {\n    me {\n      id\n      email\n      name\n      permissions\n    }\n  }\n"]);



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var CURRENT_USER_QUERY = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject);

var User = function User(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["Query"], _extends({}, props, {
    query: CURRENT_USER_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), function (payload) {
    return props.children(payload);
  });
};

User.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["b"] = (User);


/***/ }),

/***/ "./components/styles/CartStyles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var CartStyles = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "CartStyles",
  componentId: "s1tvog53-0"
})(["padding:20px;position:relative;background:white;position:fixed;height:100%;top:0;right:0;width:40%;min-width:500px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:5;display:grid;grid-template-rows:auto 1fr auto;", ";header{border-bottom:5px solid ", ";margin-bottom:2rem;padding-bottom:2rem;}footer{border-top:10px double ", ";margin-top:2rem;padding-top:2rem;display:grid;grid-template-columns:auto auto;align-items:center;font-size:3rem;font-weight:900;p{margin:0;}}ul{margin:0;padding:0;list-style:none;overflow:scroll;}"], function (props) {
  return props.open && "transform: translateX(0);";
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.black;
});
/* harmony default export */ __webpack_exports__["a"] = (CartStyles);

/***/ }),

/***/ "./components/styles/CloseButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var CloseButton = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.button.withConfig({
  displayName: "CloseButton",
  componentId: "s1seb878-0"
})(["background:black;color:white;font-size:3rem;border:0;position:absolute;z-index:2;right:0;"]);
/* harmony default export */ __webpack_exports__["a"] = (CloseButton);

/***/ }),

/***/ "./components/styles/NavStyles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var NavStyles = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.ul.withConfig({
  displayName: "NavStyles",
  componentId: "s11c0d2g-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1em;background:none;border:0;cursor:pointer;color:", ";font-weight:800;@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:\"\";width:2px;background:", ";height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:red;content:\"\";width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;&:after{width:calc(100% - 60px);}}}@media (max-width:1300px){border-top:1px solid ", ";width:100%;justify-content:center;font-size:1.5rem;}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ __webpack_exports__["a"] = (NavStyles);

/***/ }),

/***/ "./components/styles/SickButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var SickButton = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.button.withConfig({
  displayName: "SickButton",
  componentId: "l04z44-0"
})(["background:red;color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}"]);
/* harmony default export */ __webpack_exports__["a"] = (SickButton);

/***/ }),

/***/ "./components/styles/Supreme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var Supreme = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.h3.withConfig({
  displayName: "Supreme",
  componentId: "xv30qb-0"
})(["background:", ";color:white;display:inline-block;padding:4px 5px;transform:skew(-3deg);margin:0;font-size:4rem;"], function (props) {
  return props.theme.red;
});
/* harmony default export */ __webpack_exports__["a"] = (Supreme);

/***/ }),

/***/ "./config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return perPage; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:4444";
var perPage = 4;

/***/ }),

/***/ "./lib/withData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_with_apollo__ = __webpack_require__("next-with-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_with_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_with_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_boost__ = __webpack_require__("apollo-boost");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_boost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_boost__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Cart__ = __webpack_require__("./components/Cart.js");





function createClient(_ref) {
  var headers = _ref.headers;
  return new __WEBPACK_IMPORTED_MODULE_1_apollo_boost___default.a({
    uri:  true ? __WEBPACK_IMPORTED_MODULE_2__config__["a" /* endpoint */] : endpoint,
    request: function request(operation) {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers: headers
      });
    },
    // local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart: function toggleCart(_, variables, _ref2) {
            var cache = _ref2.cache;

            // read the cartOpen value from cache
            var _cache$readQuery = cache.readQuery({
              query: __WEBPACK_IMPORTED_MODULE_3__components_Cart__["a" /* LOCAL_STATE_QUERY */]
            }),
                cartOpen = _cache$readQuery.cartOpen;

            console.log(cartOpen); // Write the cart State to the opposite

            var data = {
              data: {
                cartOpen: !cartOpen
              }
            };
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        cartOpen: true
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_next_with_apollo___default()(createClient));

/***/ }),

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app__ = __webpack_require__("next/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Page__ = __webpack_require__("./components/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_withData__ = __webpack_require__("./lib/withData.js");

var _jsxFileName = "/Users/andrew/code/Adv_react/frontend/pages/_app.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          apollo = _props.apollo,
          pageProps = _props.pageProps;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["ApolloProvider"], {
        client: apollo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Page__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                // this exposes the query to the user
                pageProps.query = ctx.query;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_2_next_app___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_5__lib_withData__["a" /* default */])(MyApp));

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "apollo-boost":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next-with-apollo":
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map