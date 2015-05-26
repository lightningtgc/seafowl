/******/'use strict';

(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = '';

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})([
/* 0 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _compileJs = __webpack_require__(1);

	var _compileJs2 = _interopRequireDefault(_compileJs);

	var main = 112;

	/***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	})();

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError('Cannot call a class as a function');
		}
	}

	var _reactAddons = __webpack_require__(!(function webpackMissingModule() {
		var e = new Error('Cannot find module "react/addons"');e.code = 'MODULE_NOT_FOUND';throw e;
	})());

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _debug = __webpack_require__(!(function webpackMissingModule() {
		var e = new Error('Cannot find module "debug"');e.code = 'MODULE_NOT_FOUND';throw e;
	})());

	var _debug2 = _interopRequireDefault(_debug);

	var _componentsAppRoot = __webpack_require__(!(function webpackMissingModule() {
		var e = new Error('Cannot find module "./components/AppRoot"');e.code = 'MODULE_NOT_FOUND';throw e;
	})());

	var _componentsAppRoot2 = _interopRequireDefault(_componentsAppRoot);

	var debug = (0, _debug2['default'])('myApp');

	/*
  * @class App
  */

	var App = (function () {

		/*
   * @constructs App
   * @param {Object} options
   */

		function App(options) {
			_classCallCheck(this, App);

			debug('create app with options', options);

			this.state = options.state;
		}

		_createClass(App, [{
			key: 'render',

			/*
    * @method render
    * @param {DOM} [element]
    * @returns {String|undefined}
    */
			value: function render(element) {

				debug('render app with state', this.state);

				// would be in JSX: <AppRoot state={this.state} />
				var appRootElement = _reactAddons2['default'].createElement(_componentsAppRoot2['default'], {
					state: this.state
				});

				// render to DOM
				if (element) {
					debug('render to DOM');
					_reactAddons2['default'].render(appRootElement, element);
					return;
				}

				// render to string
				debug('render to string');
				return _reactAddons2['default'].renderToString(appRootElement);
			}
		}, {
			key: 'renderToDOM',

			/*
    * @method render
    * @param {DOM} element
    */
			value: function renderToDOM(element) {
				if (!element) {
					return debug(new Error('App.renderToDOM: element is required'));
				}

				this.render(element);
			}
		}, {
			key: 'renderToString',

			/*
    * @method renderToString
    * @returns {String}
    */
			value: function renderToString() {
				return this.render();
			}
		}]);

		return App;
	})();

	exports['default'] = App;
	module.exports = exports['default'];

	/***/
}
/******/]);

/************************************************************************/
/******/