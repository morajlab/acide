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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/angular-route/angular-route.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/angular-route/angular-route.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 AngularJS v1.6.9
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(J,d){'use strict';function A(d){k&&d.get("$route")}function B(t,u,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,m){function v(){l&&(g.cancel(l),l=null);n&&(n.$destroy(),n=null);p&&(l=g.leave(p),l.done(function(a){!1!==a&&(l=null)}),p=null)}function E(){var b=t.current&&t.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=t.current;p=m(b,function(b){g.enter(b,null,p||f).done(function(b){!1===b||!d.isDefined(w)||w&&!a.$eval(w)||u()});
v()});n=c.scope=b;n.$emit("$viewContentLoaded");n.$eval(k)}else v()}var n,p,l,w=b.autoscroll,k=b.onload||"";a.$on("$routeChangeSuccess",E);E()}}}function C(d,k,g){return{restrict:"ECA",priority:-400,link:function(a,f){var b=g.current,c=b.locals;f.html(c.$template);var m=d(f.contents());if(b.controller){c.$scope=a;var v=k(b.controller,c);b.controllerAs&&(a[b.controllerAs]=v);f.data("$ngControllerController",v);f.children().data("$ngControllerController",v)}a[b.resolveAs||"$resolve"]=c;m(a)}}}var x,
y,F,G,z=d.module("ngRoute",[]).info({angularVersion:"1.6.9"}).provider("$route",function(){function t(a,f){return d.extend(Object.create(a),f)}function u(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},g=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[?*])?/g,function(a,b,d,c){a="?"===c||"*?"===c?"?":null;c="*"===c||"*?"===c?"*":null;g.push({name:d,optional:!!a});b=b||"";return""+(a?"":b)+"(?:"+(a?b:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([/$*])/g,
"\\$1");c.regexp=new RegExp("^"+a+"$",b?"i":"");return c}x=d.isArray;y=d.isObject;F=d.isDefined;G=d.noop;var g={};this.when=function(a,f){var b;b=void 0;if(x(f)){b=b||[];for(var c=0,m=f.length;c<m;c++)b[c]=f[c]}else if(y(f))for(c in b=b||{},f)if("$"!==c.charAt(0)||"$"!==c.charAt(1))b[c]=f[c];b=b||f;d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=d.extend(b,a&&u(a,b));a&&(c="/"===a[a.length-1]?a.substr(0,
a.length-1):a+"/",g[c]=d.extend({redirectTo:a},u(c,b)));return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};k=!0;this.eagerInstantiationEnabled=function(a){return F(a)?(k=a,this):k};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce","$browser",function(a,f,b,c,m,k,u,n){function p(e){var h=q.current;(y=(s=C())&&h&&s.$$route===h.$$route&&d.equals(s.pathParams,h.pathParams)&&
!s.reloadOnSearch&&!D)||!h&&!s||a.$broadcast("$routeChangeStart",s,h).defaultPrevented&&e&&e.preventDefault()}function l(){var e=q.current,h=s;if(y)e.params=h.params,d.copy(e.params,b),a.$broadcast("$routeUpdate",e);else if(h||e){D=!1;q.current=h;var H=c.resolve(h);n.$$incOutstandingRequestCount();H.then(w).then(z).then(function(c){return c&&H.then(A).then(function(c){h===q.current&&(h&&(h.locals=c,d.copy(h.params,b)),a.$broadcast("$routeChangeSuccess",h,e))})}).catch(function(b){h===q.current&&a.$broadcast("$routeChangeError",
h,e,b)}).finally(function(){n.$$completeOutstandingRequest(G)})}}function w(e){var a={route:e,hasRedirection:!1};if(e)if(e.redirectTo)if(d.isString(e.redirectTo))a.path=x(e.redirectTo,e.params),a.search=e.params,a.hasRedirection=!0;else{var b=f.path(),g=f.search();e=e.redirectTo(e.pathParams,b,g);d.isDefined(e)&&(a.url=e,a.hasRedirection=!0)}else if(e.resolveRedirectTo)return c.resolve(m.invoke(e.resolveRedirectTo)).then(function(e){d.isDefined(e)&&(a.url=e,a.hasRedirection=!0);return a});return a}
function z(a){var b=!0;if(a.route!==q.current)b=!1;else if(a.hasRedirection){var d=f.url(),c=a.url;c?f.url(c).replace():c=f.path(a.path).search(a.search).replace().url();c!==d&&(b=!1)}return b}function A(a){if(a){var b=d.extend({},a.resolve);d.forEach(b,function(a,e){b[e]=d.isString(a)?m.get(a):m.invoke(a,null,null,e)});a=B(a);d.isDefined(a)&&(b.$template=a);return c.all(b)}}function B(a){var b,c;d.isDefined(b=a.template)?d.isFunction(b)&&(b=b(a.params)):d.isDefined(c=a.templateUrl)&&(d.isFunction(c)&&
(c=c(a.params)),d.isDefined(c)&&(a.loadedTemplateUrl=u.valueOf(c),b=k(c)));return b}function C(){var a,b;d.forEach(g,function(c,g){var r;if(r=!b){var k=f.path();r=c.keys;var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,n=k.length;l<n;++l){var p=r[l-1],q=k[l];p&&q&&(m[p.name]=q)}r=m}else r=null;else r=null;r=a=r}r&&(b=t(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||g[null]&&t(g[null],{params:{},pathParams:{}})}function x(a,b){var c=[];d.forEach((a||"").split(":"),
function(a,d){if(0===d)c.push(a);else{var e=a.match(/(\w+)(?:[?*])?(.*)/),f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var D=!1,s,y,q={routes:g,reload:function(){D=!0;var b={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=!0;D=!1}};a.$evalAsync(function(){p(b);b.defaultPrevented||l()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(x(this.current.$$route.originalPath,a)),f.search(a);else throw I("norout");
}};a.$on("$locationChangeStart",p);a.$on("$locationChangeSuccess",l);return q}]}).run(A),I=d.$$minErr("ngRoute"),k;A.$inject=["$injector"];z.provider("$routeParams",function(){this.$get=function(){return{}}});z.directive("ngView",B);z.directive("ngView",C);B.$inject=["$route","$anchorScroll","$animate"];C.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map


/***/ }),

/***/ "./node_modules/angular/angular.min.js":
/*!*********************************************!*\
  !*** ./node_modules/angular/angular.min.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 AngularJS v1.7.9
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(C){'use strict';function re(a){if(D(a))w(a.objectMaxDepth)&&(Wb.objectMaxDepth=Xb(a.objectMaxDepth)?a.objectMaxDepth:NaN),w(a.urlErrorParamsEnabled)&&Ga(a.urlErrorParamsEnabled)&&(Wb.urlErrorParamsEnabled=a.urlErrorParamsEnabled);else return Wb}function Xb(a){return W(a)&&0<a}function F(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.7.9/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,
f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function ya(a){if(null==a||$a(a))return!1;if(H(a)||A(a)||x&&a instanceof x)return!0;var b="length"in Object(a)&&a.length;return W(b)&&(0<=b&&b-1 in a||"function"===typeof a.item)}function r(a,b,d){var c,e;if(a)if(B(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(H(a)||
ya(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,d,a);else if(Nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ta.call(a,c)&&b.call(d,a[c],c,a);return a}function Oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Yb(a){return function(b,d){a(d,b)}}function se(){return++pb}
function Zb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(D(g)||B(g))for(var k=Object.keys(g),h=0,l=k.length;h<l;h++){var m=k[h],p=g[m];d&&D(p)?ha(p)?a[m]=new Date(p.valueOf()):ab(p)?a[m]=new RegExp(p):p.nodeName?a[m]=p.cloneNode(!0):$b(p)?a[m]=p.clone():"__proto__"!==m&&(D(a[m])||(a[m]=H(p)?[]:{}),Zb(a[m],[p],!0)):a[m]=p}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return Zb(a,Ha.call(arguments,1),!1)}function te(a){return Zb(a,Ha.call(arguments,1),!0)}function fa(a){return parseInt(a,
10)}function ac(a,b){return S(Object.create(a),b)}function E(){}function Ta(a){return a}function ia(a){return function(){return a}}function bc(a){return B(a.toString)&&a.toString!==la}function z(a){return"undefined"===typeof a}function w(a){return"undefined"!==typeof a}function D(a){return null!==a&&"object"===typeof a}function Nc(a){return null!==a&&"object"===typeof a&&!Pc(a)}function A(a){return"string"===typeof a}function W(a){return"number"===typeof a}function ha(a){return"[object Date]"===la.call(a)}
function H(a){return Array.isArray(a)||a instanceof Array}function cc(a){switch(la.call(a)){case "[object Error]":return!0;case "[object Exception]":return!0;case "[object DOMException]":return!0;default:return a instanceof Error}}function B(a){return"function"===typeof a}function ab(a){return"[object RegExp]"===la.call(a)}function $a(a){return a&&a.window===a}function bb(a){return a&&a.$evalAsync&&a.$watch}function Ga(a){return"boolean"===typeof a}function ue(a){return a&&W(a.length)&&ve.test(la.call(a))}
function $b(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function we(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ua(a){return K(a.nodeName||a[0]&&a[0].nodeName)}function cb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Ia(a,b,d){function c(a,b,c){c--;if(0>c)return"...";var d=b.$$hashKey,f;if(H(a)){f=0;for(var g=a.length;f<g;f++)b.push(e(a[f],c))}else if(Nc(a))for(f in a)b[f]=e(a[f],c);else if(a&&"function"===typeof a.hasOwnProperty)for(f in a)a.hasOwnProperty(f)&&
(b[f]=e(a[f],c));else for(f in a)ta.call(a,f)&&(b[f]=e(a[f],c));d?b.$$hashKey=d:delete b.$$hashKey;return b}function e(a,b){if(!D(a))return a;var d=g.indexOf(a);if(-1!==d)return k[d];if($a(a)||bb(a))throw pa("cpws");var d=!1,e=f(a);void 0===e&&(e=H(a)?[]:Object.create(Pc(a)),d=!0);g.push(a);k.push(e);return d?c(a,e,b):e}function f(a){switch(la.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(B(a.cloneNode))return a.cloneNode(!0)}
var g=[],k=[];d=Xb(d)?d:NaN;if(b){if(ue(b)||"[object ArrayBuffer]"===la.call(b))throw pa("cpta");if(a===b)throw pa("cpi");H(b)?b.length=0:r(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);k.push(b);return c(a,b,d)}return e(a,d)}function dc(a,b){return a===b||a!==a&&b!==b}function va(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(H(a)){if(!H(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!va(a[c],
b[c]))return!1;return!0}}else{if(ha(a))return ha(b)?dc(a.getTime(),b.getTime()):!1;if(ab(a))return ab(b)?a.toString()===b.toString():!1;if(bb(a)||bb(b)||$a(a)||$a(b)||H(b)||ha(b)||ab(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!B(a[c])){if(!va(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&w(b[c])&&!B(b[c]))return!1;return!0}return!1}function db(a,b,d){return a.concat(Ha.call(b,d))}function Va(a,b){var d=2<arguments.length?Ha.call(arguments,2):[];return!B(b)||b instanceof
RegExp?b:d.length?function(){return arguments.length?b.apply(a,db(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Qc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:$a(b)?d="$WINDOW":b&&C.document===b?d="$DOCUMENT":bb(b)&&(d="$SCOPE");return d}function eb(a,b){if(!z(a))return W(b)||(b=b?2:null),JSON.stringify(a,Qc,b)}function Rc(a){return A(a)?JSON.parse(a):a}function ec(a,b){a=a.replace(xe,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+
a)/6E4;return X(d)?b:d}function Sc(a,b){a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function fc(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=ec(b,c);return Sc(a,d*(b-c))}function za(a){a=x(a).clone().empty();var b=x("<div></div>").append(a).html();try{return a[0].nodeType===Pa?K(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(b)}}function Tc(a){try{return decodeURIComponent(a)}catch(b){}}function gc(a){var b={};r((a||"").split("&"),
function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Tc(e),w(e)&&(f=w(f)?Tc(f):!0,ta.call(b,e)?H(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function ye(a){var b=[];r(a,function(a,c){H(a)?r(a,function(a){b.push(ba(c,!0)+(!0===a?"":"="+ba(a,!0)))}):b.push(ba(c,!0)+(!0===a?"":"="+ba(a,!0)))});return b.length?b.join("&"):""}function hc(a){return ba(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ba(a,
b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ze(a,b){var d,c,e=Qa.length;for(c=0;c<e;++c)if(d=Qa[c]+b,A(d=a.getAttribute(d)))return d;return null}function Ae(a,b){var d,c,e={};r(Qa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});r(Qa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});
d&&(Be?(e.strictDi=null!==ze(d,"strict-di"),b(d,c?[c]:[],e)):C.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Uc(a,b,d){D(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=x(a);if(a.injector()){var c=a[0]===C.document?"document":za(a);throw pa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",
function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=fb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;C&&e.test(C.name)&&(d.debugInfoEnabled=!0,C.name=C.name.replace(e,""));if(C&&!f.test(C.name))return c();C.name=C.name.replace(f,"");ca.resumeBootstrap=function(a){r(a,function(a){b.push(a)});return c()};B(ca.resumeDeferredBootstrap)&&
ca.resumeDeferredBootstrap()}function Ce(){C.name="NG_ENABLE_DEBUG_INFO!"+C.name;C.location.reload()}function De(a){a=ca.element(a).injector();if(!a)throw pa("test");return a.get("$$testability")}function Vc(a,b){b=b||"_";return a.replace(Ee,function(a,c){return(c?b:"")+a.toLowerCase()})}function Fe(){var a;if(!Wc){var b=qb();(rb=z(b)?C.jQuery:b?C[b]:void 0)&&rb.fn.on?(x=rb,S(rb.fn,{scope:Wa.scope,isolateScope:Wa.isolateScope,controller:Wa.controller,injector:Wa.injector,inheritedData:Wa.inheritedData})):
x=Y;a=x.cleanData;x.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=(x._data(f)||{}).events)&&c.$destroy&&x(f).triggerHandler("$destroy");a(b)};ca.element=x;Wc=!0}}function gb(a,b,d){if(!a)throw pa("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&H(a)&&(a=a[a.length-1]);gb(B(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ja(a,b){if("hasOwnProperty"===a)throw pa("badname",b);}function Ge(a,b,d){if(!b)return a;b=b.split(".");
for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&B(a)?Va(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=x(Ha.call(a,0,e))),c.push(b);return c||a}function T(){return Object.create(null)}function ic(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!bc(a)||H(a)||ha(a)?eb(a):a.toString()}return a}function He(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=F("$injector"),
c=F("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||F;return b(a,"module",function(){var a={};return function(f,g,k){var h={};if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,f){f||(f=e);return function(){f[d||"push"]([b,c,arguments]);return t}}function b(a,c,d){d||(d=e);return function(b,e){e&&B(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return t}}if(!g)throw d("nomod",f);var e=[],n=[],s=[],G=a("$injector","invoke",
"push",n),t={_invokeQueue:e,_configBlocks:n,_runBlocks:s,info:function(a){if(w(a)){if(!D(a))throw c("aobj","value");h=a;return this}return h},requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",n),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider",
"directive"),component:b("$compileProvider","component"),config:G,run:function(a){s.push(a);return this}};k&&G(k);return t})}})}function ja(a,b){if(H(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(D(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Ie(a,b){var d=[];Xb(b)&&(a=ca.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Qc(a,b);if(D(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Je(a){S(a,{errorHandlingConfig:re,
bootstrap:Uc,copy:Ia,extend:S,merge:te,equals:va,element:x,forEach:r,injector:fb,noop:E,bind:Va,toJson:eb,fromJson:Rc,identity:Ta,isUndefined:z,isDefined:w,isString:A,isFunction:B,isObject:D,isNumber:W,isElement:$b,isArray:H,version:Ke,isDate:ha,callbacks:{$$counter:0},getTestability:De,reloadWithDebugInfo:Ce,$$minErr:F,$$csp:Aa,$$encodeUriSegment:hc,$$encodeUriQuery:ba,$$lowercase:K,$$stringify:ic,$$uppercase:ub});kc=He(C);kc("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Le});
a.provider("$compile",Xc).directive({a:Me,input:Yc,textarea:Yc,form:Ne,script:Oe,select:Pe,option:Qe,ngBind:Re,ngBindHtml:Se,ngBindTemplate:Te,ngClass:Ue,ngClassEven:Ve,ngClassOdd:We,ngCloak:Xe,ngController:Ye,ngForm:Ze,ngHide:$e,ngIf:af,ngInclude:bf,ngInit:cf,ngNonBindable:df,ngPluralize:ef,ngRef:ff,ngRepeat:gf,ngShow:hf,ngStyle:jf,ngSwitch:kf,ngSwitchWhen:lf,ngSwitchDefault:mf,ngOptions:nf,ngTransclude:of,ngModel:pf,ngList:qf,ngChange:rf,pattern:Zc,ngPattern:Zc,required:$c,ngRequired:$c,minlength:ad,
ngMinlength:ad,maxlength:bd,ngMaxlength:bd,ngValue:sf,ngModelOptions:tf}).directive({ngInclude:uf,input:vf}).directive(vb).directive(cd);a.provider({$anchorScroll:wf,$animate:xf,$animateCss:yf,$$animateJs:zf,$$animateQueue:Af,$$AnimateRunner:Bf,$$animateAsyncRun:Cf,$browser:Df,$cacheFactory:Ef,$controller:Ff,$document:Gf,$$isDocumentHidden:Hf,$exceptionHandler:If,$filter:dd,$$forceReflow:Jf,$interpolate:Kf,$interval:Lf,$$intervalFactory:Mf,$http:Nf,$httpParamSerializer:Of,$httpParamSerializerJQLike:Pf,
$httpBackend:Qf,$xhrFactory:Rf,$jsonpCallbacks:Sf,$location:Tf,$log:Uf,$parse:Vf,$rootScope:Wf,$q:Xf,$$q:Yf,$sce:Zf,$sceDelegate:$f,$sniffer:ag,$$taskTrackerFactory:bg,$templateCache:cg,$templateRequest:dg,$$testability:eg,$timeout:fg,$window:gg,$$rAF:hg,$$jqLite:ig,$$Map:jg,$$cookieReader:kg})}]).info({angularVersion:"1.7.9"})}function wb(a,b){return b.toUpperCase()}function xb(a){return a.replace(lg,wb)}function lc(a){a=a.nodeType;return 1===a||!a||9===a}function ed(a,b){var d,c,e=b.createDocumentFragment(),
f=[];if(mc.test(a)){d=e.appendChild(b.createElement("div"));c=(mg.exec(a)||["",""])[1].toLowerCase();c=oa[c]||oa._default;d.innerHTML=c[1]+a.replace(ng,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=db(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function Y(a){if(a instanceof Y)return a;var b;A(a)&&(a=U(a),b=!0);if(!(this instanceof Y)){if(b&&"<"!==a.charAt(0))throw nc("nosel");return new Y(a)}if(b){b=
C.document;var d;a=(d=og.exec(a))?[b.createElement(d[1])]:(d=ed(a,b))?d.childNodes:[];oc(this,a)}else B(a)?fd(a):oc(this,a)}function pc(a){return a.cloneNode(!0)}function yb(a,b){!b&&lc(a)&&x.cleanData([a]);a.querySelectorAll&&x.cleanData(a.querySelectorAll("*"))}function gd(a){for(var b in a)return!1;return!0}function hd(a){var b=a.ng339,d=b&&Ka[b],c=d&&d.events,d=d&&d.data;d&&!gd(d)||c&&!gd(c)||(delete Ka[b],a.ng339=void 0)}function id(a,b,d,c){if(w(c))throw nc("offargs");var e=(c=zb(a))&&c.events,
f=c&&c.handle;if(f){if(b){var g=function(b){var c=e[b];w(d)&&cb(c||[],d);w(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};r(b.split(" "),function(a){g(a);Ab[a]&&g(Ab[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b];hd(a)}}function qc(a,b){var d=a.ng339;if(d=d&&Ka[d])b?delete d.data[b]:d.data={},hd(a)}function zb(a,b){var d=a.ng339,d=d&&Ka[d];b&&!d&&(a.ng339=d=++pg,d=Ka[d]={events:{},data:{},handle:void 0});return d}function rc(a,b,d){if(lc(a)){var c,e=w(d),
f=!e&&b&&!D(b),g=!b;a=(a=zb(a,!f))&&a.data;if(e)a[xb(b)]=d;else{if(g)return a;if(f)return a&&a[xb(b)];for(c in b)a[xb(c)]=b[c]}}}function Bb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=U(a);c=c.replace(" "+a+" "," ")});c!==d&&a.setAttribute("class",U(c))}}function Db(a,b){if(b&&a.setAttribute){var d=
(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});c!==d&&a.setAttribute("class",U(c))}}function oc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function jd(a,b){return Eb(a,"$"+(b||"ngController")+"Controller")}function Eb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=H(b)?b:[b];a;){for(var c=
0,e=b.length;c<e;c++)if(w(d=x.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function kd(a){for(yb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Fb(a,b){b||yb(a);var d=a.parentNode;d&&d.removeChild(a)}function qg(a,b){b=b||C;if("complete"===b.document.readyState)b.setTimeout(a);else x(b).on("load",a)}function fd(a){function b(){C.document.removeEventListener("DOMContentLoaded",b);C.removeEventListener("load",b);a()}"complete"===C.document.readyState?C.setTimeout(a):(C.document.addEventListener("DOMContentLoaded",
b),C.addEventListener("load",b))}function ld(a,b){var d=Gb[b.toLowerCase()];return d&&md[ua(a)]&&d}function rg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(z(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};
var h=f.specialHandlerWrapper||sg;1<g&&(f=ja(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||h(a,c,f[l])}};d.elem=a;return d}function sg(a,b,d){d.call(a,b)}function tg(a,b,d){var c=b.relatedTarget;c&&(c===a||ug.call(a,c))||d.call(a,b)}function ig(){this.$get=function(){return S(Y,{hasClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)}})}}function La(a,b){var d=a&&a.$$hashKey;
if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||se)():d+":"+a}function nd(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function od(a){a=Function.prototype.toString.call(a).replace(vg,"");return a.match(wg)||a.match(xg)}function yg(a){return(a=od(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(a,b){function d(a){return function(b,c){if(D(b))r(b,Yb(a));else return a(b,
c)}}function c(a,b){Ja(a,"service");if(B(b)||H(b))b=n.instantiate(b);if(!b.$get)throw Ba("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=t.invoke(b,this);if(z(c))throw Ba("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){gb(z(a)||H(a),"modulesToLoad","not an array");var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=n.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.set(a,!0);try{A(a)?(c=kc(a),
t.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(n.invoke(a)):H(a)?b.push(n.invoke(a)):sb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ba("modulerr",a,e.stack||e.message||e);}}});return b}function k(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===h)throw Ba("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=h,a[b]=c(b,e),
a[b]}catch(f){throw a[b]===h&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=fb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ba("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);H(a)&&(a=a[a.length-1]);d=a;if(Ca||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;Ga(f)||(f=d.$$ngIsClass=/^class\b/.test(Function.prototype.toString.call(d)));d=f}return d?
(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=H(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:fb.$$annotate,has:function(b){return p.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var h={},l=[],m=new Hb,p={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,
ia(b),!1)}),constant:d(function(a,b){Ja(a,"constant");p[a]=b;s[a]=b}),decorator:function(a,b){var c=n.get(a+"Provider"),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},n=p.$injector=k(p,function(a,b){ca.isString(b)&&l.push(b);throw Ba("unpr",l.join(" <- "));}),s={},G=k(s,function(a,b){var c=n.get(a+"Provider",b);return t.invoke(c.$get,c,void 0,a)}),t=G;p.$injectorProvider={$get:ia(G)};t.modules=n.modules=T();var N=g(a),t=G.get("$injector");t.strictDi=b;r(N,
function(a){a&&t.invoke(a)});t.loadNewModules=function(a){r(g(a),function(a){a&&t.invoke(a)})};return t}function wf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():$b(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):W(c)||
(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=A(a)?a:W(a)?a.toString():d.hash();var b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||qg(function(){c.$evalAsync(g)})});return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;H(a)&&(a=a.join(" "));H(b)&&(b=b.join(" "));return a+" "+b}function zg(a){A(a)&&
(a=a.split(" "));var b=T();r(a,function(a){a.length&&(b[a]=!0)});return b}function ra(a){return D(a)?a:{}}function Ag(a,b,d,c,e){function f(){qa=null;k()}function g(){t=y();t=z(t)?null:t;va(t,P)&&(t=P);N=P=t}function k(){var a=N;g();if(v!==h.url()||a!==t)v=h.url(),N=t,r(J,function(a){a(h.url(),t)})}var h=this,l=a.location,m=a.history,p=a.setTimeout,n=a.clearTimeout,s={},G=e(d);h.isMock=!1;h.$$completeOutstandingRequest=G.completeTask;h.$$incOutstandingRequestCount=G.incTaskCount;h.notifyWhenNoOutstandingRequests=
G.notifyWhenNoPendingTasks;var t,N,v=l.href,jc=b.find("base"),qa=null,y=c.history?function(){try{return m.state}catch(a){}}:E;g();h.url=function(b,d,e){z(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=N===e;b=ga(b).href;if(v===b&&(!c.history||f))return h;var k=v&&Da(v)===Da(b);v=b;N=e;!c.history||k&&f?(k||(qa=b),d?l.replace(b):k?(d=l,e=b,f=e.indexOf("#"),e=-1===f?"":e.substr(f),d.hash=e):l.href=b,l.href!==b&&(qa=b)):(m[d?"replaceState":"pushState"](e,"",b),g());
qa&&(qa=b);return h}return(qa||l.href).replace(/#$/,"")};h.state=function(){return t};var J=[],I=!1,P=null;h.onUrlChange=function(b){if(!I){if(c.history)x(a).on("popstate",f);x(a).on("hashchange",f);I=!0}J.push(b);return b};h.$$applicationDestroyed=function(){x(a).off("hashchange popstate",f)};h.$$checkUrlChange=k;h.baseHref=function(){var a=jc.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};h.defer=function(a,b,c){var d;b=b||0;c=c||G.DEFAULT_TASK_TYPE;G.incTaskCount(c);d=p(function(){delete s[d];
G.completeTask(a,c)},b);s[d]=c;return d};h.defer.cancel=function(a){if(s.hasOwnProperty(a)){var b=s[a];delete s[a];n(a);G.completeTask(E,b);return!0}return!1}}function Df(){this.$get=["$window","$log","$sniffer","$document","$$taskTrackerFactory",function(a,b,d,c,e){return new Ag(a,c,b,d,e)}]}function Ef(){this.$get=function(){function a(a,c){function e(a){a!==p&&(n?n===a&&(n=a.n):n=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw F("$cacheFactory")("iid",
a);var g=0,k=S({},c,{id:a}),h=T(),l=c&&c.capacity||Number.MAX_VALUE,m=T(),p=null,n=null;return b[a]={put:function(a,b){if(!z(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in h||g++;h[a]=b;g>l&&this.remove(n.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===p&&(p=b.p);b===n&&(n=b.n);f(b.n,b.p);delete m[a]}a in h&&(delete h[a],g--)},removeAll:function(){h=T();g=0;m=T();
p=n=null},destroy:function(){m=k=h=null;delete b[a]},info:function(){return S({},k,{size:g})}}}var b={};a.info=function(){var a={};r(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function cg(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Xc(a,b){function d(a,b,c){var d=/^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,e=T();r(a,function(a,f){a=a.trim();if(a in p)e[f]=p[a];else{var g=a.match(d);if(!g)throw $("iscp",b,f,a,c?"controller bindings definition":
"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(p[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==K(b))throw $("baddir",a);if(a!==a.trim())throw $("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!H(b)&&D(b)&&r(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,k=/(([\w-]+)(?::([^;]+))?;?)/,h=we("ngSrc,ngSrcset,src,srcset"),
l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,p=T();this.directive=function qa(b,d){gb(b,"name");Ja(b,"directive");A(b)?(c(b),gb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];r(f[b],function(f,g){try{var h=a.invoke(f);B(h)?h={compile:ia(h)}:!h.compile&&h.link&&(h.compile=ia(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!A(l)||!/[EACM]/.test(l)))throw $("badrestrict",
l,b);k.restrict=l||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):r(b,Yb(qa));return this};this.component=function y(a,b){function c(a){function e(b){return B(b)||H(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Bg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",
require:b.require};r(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}if(!A(a))return r(a,Yb(Va(this,y))),this;var d=b.controller||function(){};r(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,B(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return w(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};
var n=!0;this.debugInfoEnabled=function(a){return w(a)?(n=a,this):n};var s=!1;this.strictComponentBindingsEnabled=function(a){return w(a)?(s=a,this):s};var G=10;this.onChangesTtl=function(a){return arguments.length?(G=a,this):G};var t=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(t=a,this):t};var N=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(N=a,this):N};var v=T();this.addPropertySecurityContext=function(a,b,c){var d=a.toLowerCase()+"|"+b.toLowerCase();
if(d in v&&v[d]!==c)throw $("ctxoverride",a,b,v[d],c);v[d]=c;return this};(function(){function a(b,c){r(c,function(a){v[a.toLowerCase()]=b})}a(V.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]);a(V.CSS,["*|style"]);a(V.URL,"area|href area|ping a|href a|ping blockquote|cite body|background del|cite input|src ins|cite q|cite".split(" "));a(V.MEDIA_URL,"audio|src img|src img|srcset source|src source|srcset track|src video|src video|poster".split(" "));a(V.RESOURCE_URL,"*|formAction applet|code applet|codebase base|href embed|src frame|src form|action head|profile html|manifest iframe|src link|href media|src object|codebase object|data script|src".split(" "))})();
this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate",function(a,b,c,e,p,M,L,u,R){function q(){try{if(!--Ja)throw Ua=void 0,$("infchng",G);L.$apply(function(){for(var a=0,b=Ua.length;a<b;++a)try{Ua[a]()}catch(d){c(d)}Ua=void 0})}finally{Ja++}}function ma(a,b){if(!a)return a;if(!A(a))throw $("srcset",b,a.toString());for(var c="",d=U(a),e=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,e=/\s/.test(d)?e:/(,)/,d=d.split(e),e=Math.floor(d.length/
2),f=0;f<e;f++)var g=2*f,c=c+u.getTrustedMediaUrl(U(d[g])),c=c+(" "+U(d[g+1]));d=U(d[2*f]).split(/\s/);c+=u.getTrustedMediaUrl(U(d[0]));2===d.length&&(c+=" "+U(d[1]));return c}function w(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function O(a,b,c){Fa.innerHTML="<span "+b+">";b=Fa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function sa(a,b){try{a.addClass(b)}catch(c){}}
function da(a,b,c,d,e){a instanceof x||(a=x(a));var f=Xa(a,b,a,c,d,e);da.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw $("multilink");gb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&la.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?x(ja(g,x("<div></div>").append(a).html())):c?Wa.clone.call(a):
a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);da.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Xa(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,I,t;if(n)for(t=Array(c.length),m=0;m<h.length;m+=3)f=h[m],t[f]=c[f];else t=c;m=0;for(p=h.length;m<p;)k=t[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),da.$$addScopeInfo(x(k),l)):l=a,I=c.transcludeOnThisElement?ka(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ka(a,b):null,c(f,l,k,d,I)):f&&f(a,k.childNodes,
void 0,e)}for(var h=[],k=H(a)||a instanceof x,l,m,p,I,n,t=0;t<a.length;t++){l=new w;11===Ca&&ib(a,t,k);m=sc(a[t],[],l,0===t?d:void 0,e);(f=m.length?aa(m,a[t],l,b,c,null,[],[],f):null)&&f.scope&&da.$$addScopeClass(l.$$element);l=f&&f.terminal||!(p=a[t].childNodes)||!p.length?null:Xa(p,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(t,f,l),I=!0,n=n||f;f=null}return I?g:null}function ib(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===Pa)for(;;){f=e?d.nextSibling:
a[b+1];if(!f||f.nodeType!==Pa)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ka(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ka(a,b.$$slots[f],c):null;return d}function sc(a,b,d,e,f){var g=d.$attr,h;switch(a.nodeType){case 1:h=ua(a);X(b,wa(h),"E",e,f);for(var l,m,
n,t,J,s=a.attributes,v=0,G=s&&s.length;v<G;v++){var P=!1,N=!1,r=!1,y=!1,u=!1,M;l=s[v];m=l.name;t=l.value;n=wa(m.toLowerCase());(J=n.match(Ra))?(r="Attr"===J[1],y="Prop"===J[1],u="On"===J[1],m=m.replace(pd,"").toLowerCase().substr(4+J[1].length).replace(/_(.)/g,function(a,b){return b.toUpperCase()})):(M=n.match(Sa))&&ca(M[1])&&(P=m,N=m.substr(0,m.length-5)+"end",m=m.substr(0,m.length-6));if(y||u)d[n]=t,g[n]=l.name,y?Ea(a,b,n,m):b.push(qd(p,L,c,n,m,!1));else{n=wa(m.toLowerCase());g[n]=m;if(r||!d.hasOwnProperty(n))d[n]=
t,ld(a,n)&&(d[n]=!0);Ia(a,b,t,n,r);X(b,n,"A",e,f,P,N)}}"input"===h&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!Qa)break;g=a.className;D(g)&&(g=g.animVal);if(A(g)&&""!==g)for(;a=k.exec(g);)n=wa(a[2]),X(b,n,"C",e,f)&&(d[n]=U(a[3])),g=g.substr(a.index+a[0].length);break;case Pa:na(b,a.nodeValue);break;case 8:if(!Oa)break;F(a,b,d,e,f)}b.sort(ia);return b}function F(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=wa(f[1]);X(b,h,"M",d,e)&&(c[h]=U(f[2]))}}catch(k){}}
function V(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw $("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return x(d)}function Y(a,b,c){return function(d,e,f,g,h){e=V(e[0],b,c);return a(d,e,f,g,h)}}function Z(a,b,c,d,e,f){var g;return a?da(b,c,d,e,f):function(){g||(g=da(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function aa(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=
Y(a,c,d));a.require=u.require;a.directiveName=Q;if(s===u||u.$$isolateScope)a=Aa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Y(b,c,d));b.require=u.require;b.directiveName=Q;if(s===u||u.$$isolateScope)b=Aa(b,{isolateScope:!0});k.push(b)}}function p(a,e,f,g,l){function m(a,b,c,d){var e;bb(a)||(d=c,c=b,b=a,a=void 0);N&&(e=P);c||(c=N?Q.parent():Q);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,R);if(z(f))throw $("noslot",d,za(Q));}else return l(a,b,e,c,R)}var n,u,L,y,G,P,M,Q;b===f?(g=d,Q=d.$$element):(Q=
x(f),g=new w(Q,d));G=e;s?y=e.$new(!0):t&&(G=e.$parent);l&&(M=m,M.$$boundTransclude=l,M.isSlotFilled=function(a){return!!l.$$slots[a]});J&&(P=ea(Q,g,M,J,y,e,s));s&&(da.$$addScopeInfo(Q,y,!0,!(v&&(v===s||v===s.$$originalDirective))),da.$$addScopeClass(Q,!0),y.$$isolateBindings=s.$$isolateBindings,u=Da(e,g,y,y.$$isolateBindings,s),u.removeWatches&&y.$on("$destroy",u.removeWatches));for(n in P){u=J[n];L=P[n];var Cg=u.$$bindings.bindToController;L.instance=L();Q.data("$"+u.name+"Controller",L.instance);
L.bindingInfo=Da(G,g,L.instance,Cg,u)}r(J,function(a,b){var c=a.require;a.bindToController&&!H(c)&&D(c)&&S(P[b].instance,W(b,c,Q,P))});r(P,function(a){var b=a.instance;if(B(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(B(b.$onInit))try{b.$onInit()}catch(e){c(e)}B(b.$doCheck)&&(G.$watch(function(){b.$doCheck()}),b.$doCheck());B(b.$onDestroy)&&G.$on("$destroy",function(){b.$onDestroy()})});n=0;for(u=h.length;n<u;n++)L=h[n],Ba(L,L.isolateScope?y:e,Q,g,L.require&&W(L.directiveName,
L.require,Q,P),M);var R=e;s&&(s.template||null===s.templateUrl)&&(R=y);a&&a(R,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)L=k[n],Ba(L,L.isolateScope?y:e,Q,g,L.require&&W(L.directiveName,L.require,Q,P),M);r(P,function(a){a=a.instance;B(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,t=l.newScopeDirective,J=l.controllerDirectives,s=l.newIsolateScopeDirective,v=l.templateDirective,L=l.nonTlbTranscludeDirective,G=!1,P=!1,N=l.hasElementTranscludeDirective,y=d.$$element=x(b),u,Q,
M,R=e,q,ma=!1,Ib=!1,O,sa=0,A=a.length;sa<A;sa++){u=a[sa];var E=u.$$start,ib=u.$$end;E&&(y=V(b,E,ib));M=void 0;if(n>u.priority)break;if(O=u.scope)u.templateUrl||(D(O)?(ba("new/isolated scope",s||t,u,y),s=u):ba("new/isolated scope",s,u,y)),t=t||u;Q=u.name;if(!ma&&(u.replace&&(u.templateUrl||u.template)||u.transclude&&!u.$$tlb)){for(O=sa+1;ma=a[O++];)if(ma.transclude&&!ma.$$tlb||ma.replace&&(ma.templateUrl||ma.template)){Ib=!0;break}ma=!0}!u.templateUrl&&u.controller&&(J=J||T(),ba("'"+Q+"' controller",
J[Q],u,y),J[Q]=u);if(O=u.transclude)if(G=!0,u.$$tlb||(ba("transclusion",L,u,y),L=u),"element"===O)N=!0,n=u.priority,M=y,y=d.$$element=x(da.$$createComment(Q,d[Q])),b=y[0],pa(f,Ha.call(M,0),b),R=Z(Ib,M,e,n,g&&g.name,{nonTlbTranscludeDirective:L});else{var ka=T();if(D(O)){M=C.document.createDocumentFragment();var Xa=T(),F=T();r(O,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Xa[a]=b;ka[b]=null;F[b]=c});r(y.contents(),function(a){var b=Xa[wa(ua(a))];b?(F[b]=!0,ka[b]=ka[b]||C.document.createDocumentFragment(),
ka[b].appendChild(a)):M.appendChild(a)});r(F,function(a,b){if(!a)throw $("reqslot",b);});for(var K in ka)ka[K]&&(R=x(ka[K].childNodes),ka[K]=Z(Ib,R,e));M=x(M.childNodes)}else M=x(pc(b)).contents();y.empty();R=Z(Ib,M,e,void 0,void 0,{needsNewScope:u.$$isolateScope||u.$$newScope});R.$$slots=ka}if(u.template)if(P=!0,ba("template",v,u,y),v=u,O=B(u.template)?u.template(y,d):u.template,O=Na(O),u.replace){g=u;M=mc.test(O)?rd(ja(u.templateNamespace,U(O))):[];b=M[0];if(1!==M.length||1!==b.nodeType)throw $("tplrt",
Q,"");pa(f,y,b);A={$attr:{}};O=sc(b,[],A);var Dg=a.splice(sa+1,a.length-(sa+1));(s||t)&&fa(O,s,t);a=a.concat(O).concat(Dg);ga(d,A);A=a.length}else y.html(O);if(u.templateUrl)P=!0,ba("template",v,u,y),v=u,u.replace&&(g=u),p=ha(a.splice(sa,a.length-sa),y,d,f,G&&R,h,k,{controllerDirectives:J,newScopeDirective:t!==u&&t,newIsolateScopeDirective:s,templateDirective:v,nonTlbTranscludeDirective:L}),A=a.length;else if(u.compile)try{q=u.compile(y,d,R);var X=u.$$originalDirective||u;B(q)?m(null,Va(X,q),E,ib):
q&&m(Va(X,q.pre),Va(X,q.post),E,ib)}catch(ca){c(ca,za(y))}u.terminal&&(p.terminal=!0,n=Math.max(n,u.priority))}p.scope=t&&!0===t.scope;p.transcludeOnThisElement=G;p.templateOnThisElement=P;p.transclude=R;l.hasElementTranscludeDirective=N;return p}function W(a,b,c,d){var e;if(A(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e="^^"===g&&c[0]&&9===c[0].nodeType?null:g?c.inheritedData(h):c.data(h)}if(!e&&
!f)throw $("ctreq",b,a);}else if(H(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=W(a,b[g],c,d);else D(b)&&(e={},r(b,function(b,f){e[f]=W(a,b,c,d)}));return e||null}function ea(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"===p&&(p=b[l.name]);m=M(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function fa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=ac(a[d],{$$isolateScope:b,
$$newScope:c})}function X(b,c,e,g,h,k,l){if(c===h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var p=0,n=h.length;p<n;p++)if(c=h[p],(z(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=ac(c,{$$start:k,$$end:l}));if(!c.$$bindings){var I=m=c,t=c.name,u={isolateScope:null,bindToController:null};D(I.scope)&&(!0===I.bindToController?(u.bindToController=d(I.scope,t,!0),u.isolateScope={}):u.isolateScope=d(I.scope,t,!1));D(I.bindToController)&&(u.bindToController=d(I.bindToController,
t,!0));if(u.bindToController&&!I.controller)throw $("noctrl",t);m=m.$$bindings=u;D(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function ca(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function ga(a,b){var c=b.$attr,d=a.$attr;r(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,e){a.hasOwnProperty(e)||
"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ha(a,b,d,f,g,h,k,l){var m=[],p,n,t=b[0],u=a.shift(),J=ac(u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),s=B(u.templateUrl)?u.templateUrl(b,d):u.templateUrl,L=u.templateNamespace;b.empty();e(s).then(function(c){var e,I;c=Na(c);if(u.replace){c=mc.test(c)?rd(ja(L,U(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw $("tplrt",u.name,s);c={$attr:{}};pa(f,b,e);var v=sc(e,[],c);D(u.scope)&&fa(v,!0);a=
v.concat(a);ga(d,c)}else e=t,b.html(c);a.unshift(J);p=aa(a,e,d,g,b,u,h,k,l);r(f,function(a,c){a===e&&(f[c]=b[0])});for(n=Xa(b[0].childNodes,g);m.length;){c=m.shift();I=m.shift();var y=m.shift(),P=m.shift(),v=b[0];if(!c.$$destroyed){if(I!==t){var G=I.className;l.hasElementTranscludeDirective&&u.replace||(v=pc(e));pa(y,x(I),v);sa(x(v),G)}I=p.transcludeOnThisElement?ka(c,p.transclude,P):P;p(n,c,v,f,I)}}m=null}).catch(function(a){cc(a)&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,
c,d,a):(p.transcludeOnThisElement&&(a=ka(b,p.transclude,e)),p(n,b,c,d,a)))}}function ia(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function ba(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw $("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,za(d));}function na(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&da.$$addBindingClass(a);return function(a,c){var e=c.parent();
b||da.$$addBindingClass(e);da.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ja(a,b){a=K(a||"html");switch(a){case "svg":case "math":var c=C.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function oa(a,b){if("srcdoc"===b)return u.HTML;if("src"===b||"ngSrc"===b)return-1===["img","video","audio","source","track"].indexOf(a)?u.RESOURCE_URL:u.MEDIA_URL;if("xlinkHref"===b)return"image"===a?u.MEDIA_URL:
"a"===a?u.URL:u.RESOURCE_URL;if("form"===a&&"action"===b||"base"===a&&"href"===b||"link"===a&&"href"===b)return u.RESOURCE_URL;if("a"===a&&("href"===b||"ngHref"===b))return u.URL}function xa(a,b){var c=b.toLowerCase();return v[a+"|"+c]||v["*|"+c]}function ya(a){return ma(u.valueOf(a),"ng-prop-srcset")}function Ea(a,b,c,d){if(m.test(d))throw $("nodomevents");a=ua(a);var e=xa(a,d),f=Ta;"srcset"!==d||"img"!==a&&"source"!==a?e&&(f=u.getTrusted.bind(u,e)):f=ya;b.push({priority:100,compile:function(a,b){var e=
p(b[c]),g=p(b[c],function(a){return u.valueOf(a)});return{pre:function(a,b){function c(){var g=e(a);b[0][d]=f(g)}c();a.$watch(g,c)}}}})}function Ia(a,c,d,e,f){var g=ua(a),k=oa(g,e),l=h[e]||f,p=b(d,!f,k,l);if(p){if("multiple"===e&&"select"===g)throw $("selmulti",za(a));if(m.test(e))throw $("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=T());var g=f[e];g!==d&&(p=g&&b(g,!0,k,l),d=g);p&&(f[e]=p(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&
f.$$observers[e].$$scope||a).$watch(p,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function pa(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=C.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);x.hasData(d)&&(x.data(c,x.data(d)),x(d).off("$destroy"));x.cleanData(a.querySelectorAll("*"));
for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function Aa(a,b){return S(function(){return a.apply(null,arguments)},a,b)}function Ba(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,za(d))}}function ra(a,b){if(s)throw $("missingattr",a,b);}function Da(a,c,d,e,f){function g(b,c,e){B(d.$onChanges)&&!dc(c,e)&&(Ua||(a.$$postDigest(q),Ua=[]),m||(m={},Ua.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Jb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;r(e,function(e,h){var m=e.attrName,n=e.optional,
I,t,u,s;switch(e.mode){case "@":n||ta.call(c,m)||(ra(m,f.name),d[h]=c[m]=void 0);n=c.$observe(m,function(a){if(A(a)||Ga(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;I=c[m];A(I)?d[h]=b(I)(a):Ga(I)&&(d[h]=I);l[h]=new Jb(tc,d[h]);k.push(n);break;case "=":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);s=t.literal?va:dc;u=t.assign||function(){I=d[h]=t(a);throw $("nonassign",c[m],m,f.name);};I=d[h]=t(a);n=function(b){s(b,d[h])||(s(b,I)?u(a,b=d[h]):d[h]=b);return I=
b};n.$stateful=!0;n=e.collection?a.$watchCollection(c[m],n):a.$watch(p(c[m],n),null,t.literal);k.push(n);break;case "<":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);var v=t.literal,L=d[h]=t(a);l[h]=new Jb(tc,d[h]);n=a[e.collection?"$watchCollection":"$watch"](t,function(a,b){if(b===a){if(b===L||v&&va(b,L))return;b=L}g(h,a,b);d[h]=a});k.push(n);break;case "&":n||ta.call(c,m)||ra(m,f.name);t=c.hasOwnProperty(m)?p(c[m]):E;if(t===E&&n)break;d[h]=function(b){return t(a,
b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ma=/^\w/,Fa=C.document.createElement("div"),Oa=t,Qa=N,Ja=G,Ua;w.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&R.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&R.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=sd(a,b);c&&c.length&&R.addClass(this.$$element,c);(c=sd(b,a))&&c.length&&R.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=
ld(this.$$element[0],a),g=td[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Vc(a,"-"));"img"===ua(this.$$element)&&"srcset"===a&&(this[a]=b=ma(b,"$set('srcset', value)"));!1!==d&&(null===b||z(b)?this.$$element.removeAttr(e):Ma.test(e)?f&&!1===b?this.$$element.removeAttr(e):this.$$element.attr(e,b):O(this.$$element[0],e,b));(a=this.$$observers)&&r(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,
d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);L.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||z(c[a])||b(c[a])});return function(){cb(e,b)}}};var Ka=b.startSymbol(),La=b.endSymbol(),Na="{{"===Ka&&"}}"===La?Ta:function(a){return a.replace(/\{\{/g,Ka).replace(/}}/g,La)},Ra=/^ng(Attr|Prop|On)([A-Z].*)$/,Sa=/^(.+)Start$/;da.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:E;da.$$addBindingClass=n?function(a){sa(a,
"ng-binding")}:E;da.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:E;da.$$addScopeClass=n?function(a,b){sa(a,b?"ng-isolate-scope":"ng-scope")}:E;da.$$createComment=function(a,b){var c="";n&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return C.document.createComment(c)};return da}]}function Jb(a,b){this.previousValue=a;this.currentValue=b}function wa(a){return a.replace(pd,"").replace(Eg,function(a,d,c){return c?d.toUpperCase():d})}function sd(a,b){var d=
"",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],k=0;k<e.length;k++)if(g===e[k])continue a;d+=(0<d.length?" ":"")+g}return d}function rd(a){a=x(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Pa&&""===d.nodeValue.trim())&&Fg.call(a,b,1)}return a}function Bg(a,b){if(b&&A(b))return b;if(A(a)){var d=ud.exec(a);if(d)return d[3]}}function Ff(){var a={};this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,d){Ja(b,
"controller");D(b)?S(a,b):a[b]=d};this.$get=["$injector",function(b){function d(a,b,d,g){if(!a||!D(a.$scope))throw F("$controller")("noscp",g,b);a.$scope[b]=d}return function(c,e,f,g){var k,h,l;f=!0===f;g&&A(g)&&(l=g);if(A(c)){g=c.match(ud);if(!g)throw vd("ctrlfmt",c);h=g[1];l=l||g[3];c=a.hasOwnProperty(h)?a[h]:Ge(e.$scope,h,!0);if(!c)throw vd("ctrlreg",h);sb(c,h,!0)}if(f)return f=(H(c)?c[c.length-1]:c).prototype,k=Object.create(f||null),l&&d(e,l,k,h||c.name),S(function(){var a=b.invoke(c,k,e,h);
a!==k&&(D(a)||B(a))&&(k=a,l&&d(e,l,k,h||c.name));return k},{instance:k,identifier:l});k=b.instantiate(c,e,h);l&&d(e,l,k,h||c.name);return k}}]}function Gf(){this.$get=["$window",function(a){return x(a.document)}]}function Hf(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function If(){this.$get=["$log",function(a){return function(b,
d){a.error.apply(a,arguments)}}]}function uc(a){return D(a)?ha(a)?a.toISOString():eb(a):a}function Of(){this.$get=function(){return function(a){if(!a)return"";var b=[];Oc(a,function(a,c){null===a||z(a)||B(a)||(H(a)?r(a,function(a){b.push(ba(c)+"="+ba(uc(a)))}):b.push(ba(c)+"="+ba(uc(a))))});return b.join("&")}}}function Pf(){this.$get=function(){return function(a){function b(a,e,f){H(a)?r(a,function(a,c){b(a,e+"["+(D(a)?c:"")+"]")}):D(a)&&!ha(a)?Oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):
(B(a)&&(a=a()),d.push(ba(e)+"="+(null==a?"":ba(uc(a)))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function vc(a,b){if(A(a)){var d=a.replace(Gg,"").trim();if(d){var c=b("Content-Type"),c=c&&0===c.indexOf(wd),e;(e=c)||(e=(e=d.match(Hg))&&Ig[e[0]].test(d));if(e)try{a=Rc(d)}catch(f){if(!c)return a;throw Kb("baddata",a,f);}}}return a}function xd(a){var b=T(),d;A(a)?r(a.split("\n"),function(a){d=a.indexOf(":");var e=K(U(a.substr(0,d)));a=U(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):D(a)&&
r(a,function(a,d){var f=K(d),g=U(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function yd(a){var b;return function(d){b||(b=xd(a));return d?(d=b[K(d)],void 0===d&&(d=null),d):b}}function zd(a,b,d,c){if(B(c))return c(a,b,d);r(c,function(c){a=c(a,b,d)});return a}function Nf(){var a=this.defaults={transformResponse:[vc],transformRequest:[function(a){return D(a)&&"[object File]"!==la.call(a)&&"[object Blob]"!==la.call(a)&&"[object FormData]"!==la.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:ja(wc),put:ja(wc),patch:ja(wc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return w(a)?(b=!!a,this):b};var d=this.interceptors=[],c=this.xsrfWhitelistedOrigins=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(e,f,g,k,h,l,m,p){function n(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];
a=a.then(f,g)}b.length=0;return a}function d(a,b){var c,e={};r(a,function(a,d){B(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}function f(a){var b=S({},a);b.data=zd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:l.reject(b)}if(!D(b))throw F("$http")("badreq",b);if(!A(p.valueOf(b.url)))throw F("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},
b);g.headers=function(b){var c=a.headers,e=S({},b.headers),f,g,h,c=S({},c.common,c[K(b.method)]);a:for(f in c){g=K(f);for(h in e)if(K(h)===g)continue a;e[f]=c[f]}return d(e,ja(b))}(b);g.method=ub(g.method);g.paramSerializer=A(g.paramSerializer)?m.get(g.paramSerializer):g.paramSerializer;e.$$incOutstandingRequestCount("$http");var h=[],k=[];b=l.resolve(g);r(v,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&k.push(a.response,a.responseError)});
b=c(b,h);b=b.then(function(b){var c=b.headers,d=zd(b.data,yd(c),void 0,b.transformRequest);z(d)&&r(c,function(a,b){"content-type"===K(b)&&delete c[b]});z(b.withCredentials)&&!z(a.withCredentials)&&(b.withCredentials=a.withCredentials);return s(b,d).then(f,f)});b=c(b,k);return b=b.finally(function(){e.$$completeOutstandingRequest(E,"$http")})}function s(c,d){function e(a){if(a){var c={};r(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function k(a,
c,d,e,f){function g(){m(c,a,d,e,f)}R&&(200<=a&&300>a?R.put(O,[a,c,xd(d),e,f]):R.remove(O));b?h.$applyAsync(g):(g(),h.$$phase||h.$apply())}function m(a,b,d,e,f){b=-1<=b?b:0;(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:yd(d),config:c,statusText:e,xhrStatus:f})}function s(a){m(a.data,a.status,ja(a.headers()),a.statusText,a.xhrStatus)}function v(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var L=l.defer(),u=L.promise,R,q,ma=c.headers,x="jsonp"===K(c.method),
O=c.url;x?O=p.getTrustedResourceUrl(O):A(O)||(O=p.valueOf(O));O=G(O,c.paramSerializer(c.params));x&&(O=t(O,c.jsonpCallbackParam));n.pendingRequests.push(c);u.then(v,v);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(R=D(c.cache)?c.cache:D(a.cache)?a.cache:N);R&&(q=R.get(O),w(q)?q&&B(q.then)?q.then(s,s):H(q)?m(q[1],q[0],ja(q[2]),q[3],q[4]):m(q,200,{},"OK","complete"):R.put(O,u));z(q)&&((q=jc(c.url)?g()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(ma[c.xsrfHeaderName||a.xsrfHeaderName]=
q),f(c.method,O,d,k,ma,c.timeout,c.withCredentials,c.responseType,e(c.eventHandlers),e(c.uploadEventHandlers)));return u}function G(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function t(a,b){var c=a.split("?");if(2<c.length)throw Kb("badjsonp",a);c=gc(c[1]);r(c,function(c,d){if("JSON_CALLBACK"===c)throw Kb("badjsonp",a);if(d===b)throw Kb("badjsonp",b,a);});return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var N=k("$http");a.paramSerializer=A(a.paramSerializer)?m.get(a.paramSerializer):
a.paramSerializer;var v=[];r(d,function(a){v.unshift(A(a)?m.get(a):m.invoke(a))});var jc=Jg(c);n.pendingRequests=[];(function(a){r(arguments,function(a){n[a]=function(b,c){return n(S({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){n[a]=function(b,c,d){return n(S({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Rf(){this.$get=function(){return function(){return new C.XMLHttpRequest}}}function Qf(){this.$get=
["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return Kg(a,c,a.defer,b,d[0])}]}function Kg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);f=null;var g=-1,s="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};f.addEventListener("load",
m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,k,h,l,m,p,n,s,G,t){function N(a){J="timeout"===a;qa&&qa();y&&y.abort()}function v(a,b,c,e,f,g){w(P)&&d.cancel(P);qa=y=null;a(b,c,e,f,g)}k=k||a.url();if("jsonp"===K(e))var q=c.createCallback(k),qa=f(k,q,function(a,b){var d=200===a&&c.getResponse(q);v(l,a,d,"",b,"complete");c.removeCallback(q)});else{var y=b(e,k),J=!1;y.open(e,k,!0);r(m,function(a,b){w(a)&&y.setRequestHeader(b,a)});y.onload=function(){var a=y.statusText||
"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"===ga(k).protocol?404:0);v(l,c,b,y.getAllResponseHeaders(),a,"complete")};y.onerror=function(){v(l,-1,null,null,"","error")};y.ontimeout=function(){v(l,-1,null,null,"","timeout")};y.onabort=function(){v(l,-1,null,null,"",J?"timeout":"abort")};r(G,function(a,b){y.addEventListener(b,a)});r(t,function(a,b){y.upload.addEventListener(b,a)});n&&(y.withCredentials=!0);if(s)try{y.responseType=s}catch(I){if("json"!==
s)throw I;}y.send(z(h)?null:h)}if(0<p)var P=d(function(){N("timeout")},p);else p&&B(p.then)&&p.then(function(){N(w(p.$$timeoutId)?"timeout":"abort")})}}function Kf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(p,a).replace(n,b)}function k(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}
function h(f,h,n,p){function v(a){try{return a=n&&!r?e.getTrusted(n,a):e.valueOf(a),p&&!w(a)?a:ic(a)}catch(b){c(Ma.interr(f,b))}}var r=n===e.URL||n===e.MEDIA_URL;if(!f.length||-1===f.indexOf(a)){if(h)return;h=g(f);r&&(h=e.getTrusted(n,h));h=ia(h);h.exp=f;h.expressions=[];h.$$watchDelegate=k;return h}p=!!p;for(var q,y,J=0,I=[],P,Q=f.length,M=[],L=[],u;J<Q;)if(-1!==(q=f.indexOf(a,J))&&-1!==(y=f.indexOf(b,q+l)))J!==q&&M.push(g(f.substring(J,q))),J=f.substring(q+l,y),I.push(J),J=y+m,L.push(M.length),
M.push("");else{J!==Q&&M.push(g(f.substring(J)));break}u=1===M.length&&1===L.length;var R=r&&u?void 0:v;P=I.map(function(a){return d(a,R)});if(!h||I.length){var x=function(a){for(var b=0,c=I.length;b<c;b++){if(p&&z(a[b]))return;M[L[b]]=a[b]}if(r)return e.getTrusted(n,u?M[0]:M.join(""));n&&1<M.length&&Ma.throwNoconcat(f);return M.join("")};return S(function(a){var b=0,d=I.length,e=Array(d);try{for(;b<d;b++)e[b]=P[b](a);return x(e)}catch(g){c(Ma.interr(f,g))}},{exp:f,expressions:I,$$watchDelegate:function(a,
b){var c;return a.$watchGroup(P,function(d,e){var f=x(d);b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,p=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function Lf(){this.$get=["$$intervalFactory","$window",function(a,b){var d={},c=function(a){b.clearInterval(a);delete d[a]},e=a(function(a,c,e){a=b.setInterval(a,c);d[a]=e;return a},c);e.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$intervalId"))throw Lg("badprom");
if(!d.hasOwnProperty(a.$$intervalId))return!1;a=a.$$intervalId;var b=d[a],e=b.promise;e.$$state&&(e.$$state.pur=!0);b.reject("canceled");c(a);return!0};return e}]}function Mf(){this.$get=["$browser","$q","$$q","$rootScope",function(a,b,d,c){return function(e,f){return function(g,k,h,l){function m(){p?g.apply(null,n):g(s)}var p=4<arguments.length,n=p?Ha.call(arguments,4):[],s=0,G=w(l)&&!l,t=(G?d:b).defer(),r=t.promise;h=w(h)?h:0;r.$$intervalId=e(function(){G?a.defer(m):c.$evalAsync(m);t.notify(s++);
0<h&&s>=h&&(t.resolve(s),f(r.$$intervalId));G||c.$apply()},k,t,G);return r}}}]}function Ad(a,b){var d=ga(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=fa(d.port)||Mg[d.protocol]||null}function Bd(a,b,d){if(Ng.test(a))throw jb("badpath",a);var c="/"!==a.charAt(0);c&&(a="/"+a);a=ga(a);for(var c=(c&&"/"===a.pathname.charAt(0)?a.pathname.substring(1):a.pathname).split("/"),e=c.length;e--;)c[e]=decodeURIComponent(c[e]),d&&(c[e]=c[e].replace(/\//g,"%2F"));d=c.join("/");b.$$path=d;b.$$search=gc(a.search);
b.$$hash=decodeURIComponent(a.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function xc(a,b){return a.slice(0,b.length)===b}function xa(a,b){if(xc(b,a))return b.substr(a.length)}function Da(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function yc(a,b,d){this.$$html5=!0;d=d||"";Ad(a,this);this.$$parse=function(a){var d=xa(b,a);if(!A(d))throw jb("ipthprfx",a,b);Bd(d,this,!0);this.$$path||(this.$$path="/");this.$$compose()};this.$$normalizeUrl=function(a){return b+a.substr(1)};
this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;w(f=xa(a,c))?(g=f,g=d&&w(f=xa(d,f))?b+(xa("/",f)||f):a+g):w(f=xa(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function zc(a,b,d){Ad(a,this);this.$$parse=function(c){var e=xa(a,c)||xa(b,c),f;z(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",z(e)&&(a=c,this.replace())):(f=xa(d,e),z(f)&&(f=e));Bd(f,this,!1);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;xc(f,e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?
f[1]:c);this.$$path=c;this.$$compose()};this.$$normalizeUrl=function(b){return a+(b?d+b:"")};this.$$parseLinkUrl=function(b,d){return Da(a)===Da(b)?(this.$$parse(b),!0):!1}}function Cd(a,b,d){this.$$html5=!0;zc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===Da(c)?f=c:(g=xa(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$normalizeUrl=function(b){return a+d+b}}function Lb(a){return function(){return this[a]}}function Dd(a,
b){return function(d){if(z(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Tf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return w(b)?(a=b,this):a};this.html5Mode=function(a){if(Ga(a))return b.enabled=a,this;if(D(a)){Ga(a.enabled)&&(b.enabled=a.enabled);Ga(a.requireBase)&&(b.requireBase=a.requireBase);if(Ga(a.rewriteLinks)||A(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer",
"$rootElement","$window",function(d,c,e,f,g){function k(a,b){return a===b||ga(a).href===ga(b).href}function h(a,b,d){var e=m.url(),f=m.$$state;try{c.url(a,b,d),m.$$state=c.state()}catch(g){throw m.url(e),m.$$state=f,g;}}function l(a,b){d.$broadcast("$locationChangeSuccess",m.absUrl(),a,m.$$state,b)}var m,p;p=c.baseHref();var n=c.url(),s;if(b.enabled){if(!p&&b.requireBase)throw jb("nobase");s=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(p||"/");p=e.history?yc:Cd}else s=Da(n),p=zc;var r=s.substr(0,
Da(s).lastIndexOf("/")+1);m=new p(s,r,"#"+a);m.$$parseLinkUrl(n,n);m.$$state=c.state();var t=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var g=x(a.target);"a"!==ua(g[0]);)if(g[0]===f[0]||!(g=g.parent())[0])return;if(!A(e)||!z(g.attr(e))){var e=g.prop("href"),h=g.attr("href")||g.attr("xlink:href");D(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ga(e.animVal).href);t.test(e)||!e||g.attr("target")||
a.isDefaultPrevented()||!m.$$parseLinkUrl(e,h)||(a.preventDefault(),m.absUrl()!==c.url()&&d.$apply())}}});m.absUrl()!==n&&c.url(m.absUrl(),!0);var N=!0;c.onUrlChange(function(a,b){xc(a,r)?(d.$evalAsync(function(){var c=m.absUrl(),e=m.$$state,f;m.$$parse(a);m.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;m.absUrl()===a&&(f?(m.$$parse(c),m.$$state=e,h(c,!1,e)):(N=!1,l(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(N||m.$$urlUpdatedByLocation){m.$$urlUpdatedByLocation=
!1;var a=c.url(),b=m.absUrl(),f=c.state(),g=m.$$replace,n=!k(a,b)||m.$$html5&&e.history&&f!==m.$$state;if(N||n)N=!1,d.$evalAsync(function(){var b=m.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,m.$$state,f).defaultPrevented;m.absUrl()===b&&(c?(m.$$parse(a),m.$$state=f):(n&&h(b,g,f===m.$$state?null:m.$$state),l(a,f)))})}m.$$replace=!1});return m}]}function Uf(){var a=!0,b=this;this.debugEnabled=function(b){return w(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){cc(a)&&(a.stack&&
f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||E;return function(){var a=[];r(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,b,a)}}var f=Ca||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,
arguments)}}()}}]}function Og(a){return a+""}function Pg(a,b){return"undefined"!==typeof a?a:b}function Ed(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Qg(a,b){switch(a.type){case q.MemberExpression:if(a.computed)return!1;break;case q.UnaryExpression:return 1;case q.BinaryExpression:return"+"!==a.operator?1:!1;case q.CallExpression:return!1}return void 0===b?Fd:b}function Z(a,b,d){var c,e,f=a.isPure=Qg(a,d);switch(a.type){case q.Program:c=!0;r(a.body,function(a){Z(a.expression,
b,f);c=c&&a.expression.constant});a.constant=c;break;case q.Literal:a.constant=!0;a.toWatch=[];break;case q.UnaryExpression:Z(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case q.BinaryExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case q.LogicalExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case q.ConditionalExpression:Z(a.test,
b,f);Z(a.alternate,b,f);Z(a.consequent,b,f);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case q.Identifier:a.constant=!1;a.toWatch=[a];break;case q.MemberExpression:Z(a.object,b,f);a.computed&&Z(a.property,b,f);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=a.constant?[]:[a];break;case q.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];r(a.arguments,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,
a.toWatch)});a.constant=c;a.toWatch=d?e:[a];break;case q.AssignmentExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case q.ArrayExpression:c=!0;e=[];r(a.elements,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=e;break;case q.ObjectExpression:c=!0;e=[];r(a.properties,function(a){Z(a.value,b,f);c=c&&a.value.constant;e.push.apply(e,a.value.toWatch);a.computed&&(Z(a.key,b,!1),c=c&&a.key.constant,e.push.apply(e,
a.key.toWatch))});a.constant=c;a.toWatch=e;break;case q.ThisExpression:a.constant=!1;a.toWatch=[];break;case q.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Gd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Hd(a){return a.type===q.Identifier||a.type===q.MemberExpression}function Id(a){if(1===a.body.length&&Hd(a.body[0].expression))return{type:q.AssignmentExpression,left:a.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}
function Jd(a){this.$filter=a}function Kd(a){this.$filter=a}function Mb(a,b,d){this.ast=new q(a,d);this.astCompiler=d.csp?new Kd(b):new Jd(b)}function Ac(a){return B(a.valueOf)?a.valueOf():Rg.call(a)}function Vf(){var a=T(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(b,c){var d,f;switch(typeof b){case "string":return f=b=b.trim(),d=a[f],d||(d=new Nb(G),
d=(new Mb(d,e,G)).parse(b),a[f]=p(d)),s(d,c);case "function":return s(b,c);default:return s(E,c)}}function g(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=Ac(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function k(a,b,c,d,e){var f=d.inputs,h;if(1===f.length){var k=g,f=f[0];return a.$watch(function(a){var b=f(a);g(b,k,f.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&Ac(b));return h},b,c,e)}for(var l=[],m=[],n=0,p=f.length;n<p;n++)l[n]=g,m[n]=null;return a.$watch(function(a){for(var b=
!1,c=0,e=f.length;c<e;c++){var k=f[c](a);if(b||(b=!g(k,l[c],f[c].isPure)))m[c]=k,l[c]=k&&Ac(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function h(a,b,c,d,e){function f(){h(m)&&k()}function g(a,b,c,d){m=u&&d?d[0]:n(a,b,c,d);h(m)&&a.$$postDigest(f);return s(m)}var h=d.literal?l:w,k,m,n=d.$$intercepted||d,s=d.$$interceptor||Ta,u=d.inputs&&!n.inputs;g.literal=d.literal;g.constant=d.constant;g.inputs=d.inputs;p(g);return k=a.$watch(g,b,c,e)}function l(a){var b=!0;r(a,function(a){w(a)||(b=!1)});return b}
function m(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function p(a){a.constant?a.$$watchDelegate=m:a.oneTime?a.$$watchDelegate=h:a.inputs&&(a.$$watchDelegate=k);return a}function n(a,b){function c(d){return b(a(d))}c.$stateful=a.$stateful||b.$stateful;c.$$pure=a.$$pure&&b.$$pure;return c}function s(a,b){if(!b)return a;a.$$interceptor&&(b=n(a.$$interceptor,b),a=a.$$intercepted);var c=!1,d=function(d,e,f,g){d=c&&g?g[0]:a(d,e,f,g);return b(d)};d.$$intercepted=a;d.$$interceptor=
b;d.literal=a.literal;d.oneTime=a.oneTime;d.constant=a.constant;b.$stateful||(c=!a.inputs,d.inputs=a.inputs?a.inputs:[a],b.$$pure||(d.inputs=d.inputs.map(function(a){return a.isPure===Fd?function(b){return a(b)}:a})));return p(d)}var G={csp:Aa().noUnsafeEval,literals:Ia(b),isIdentifierStart:B(d)&&d,isIdentifierContinue:B(c)&&c};f.$$getAst=function(a){var b=new Nb(G);return(new Mb(b,e,G)).getAst(a).ast};return f}]}function Xf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Ld(function(a){b.$evalAsync(a)},
d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function Yf(){var a=!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Ld(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function Ld(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){h(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){n(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!w&&
x.length;){var a=x.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):z(c)?"undefined":"string"!==typeof c?Ie(c,void 0):c);cc(a.value)?b(a.value,c):b(c)}}}function k(c){!d||c.pending||2!==c.status||c.pur||(0===w&&0===x.length&&a(g),x.push(c));!c.processScheduled&&c.pending&&(c.processScheduled=!0,++w,a(function(){var e,f,k;k=c.pending;c.processScheduled=!1;c.pending=void 0;try{for(var l=0,n=k.length;l<n;++l){c.pur=
!0;f=k[l][0];e=k[l][c.status];try{B(e)?h(f,e(c.value)):1===c.status?h(f,c.value):m(f,c.value)}catch(p){m(f,p),p&&!0===p.$$passToExceptionHandler&&b(p)}}}finally{--w,d&&0===w&&a(g)}}))}function h(a,b){a.$$state.status||(b===a?p(a,v("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,p(a,b))}function e(b){n(a,b)}var f,g=!1;try{if(D(b)||B(b))f=b.then;B(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,k(a.$$state))}catch(h){d(h)}}function m(a,
b){a.$$state.status||p(a,b)}function p(a,b){a.$$state.value=b;a.$$state.status=2;k(a.$$state)}function n(c,d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{n(c,B(a)?a(d):d)}catch(h){b(h)}}})}function s(a){var b=new f;m(b,a);return b}function G(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return s(e)}return d&&B(d.then)?d.then(function(){return b(a)},s):b(a)}function t(a,b,c,d){var e=new f;h(e,a);return e.then(b,c,
d)}function q(a){if(!B(a))throw v("norslvr",a);var b=new f;a(function(a){h(b,a)},function(a){m(b,a)});return b}var v=F("$q",TypeError),w=0,x=[];S(f.prototype,{then:function(a,b,c){if(z(a)&&z(b)&&z(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&k(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return G(b,y,a)},function(b){return G(b,s,a)},
b)}});var y=t;q.prototype=f.prototype;q.defer=c;q.reject=s;q.when=t;q.resolve=y;q.all=function(a){var b=new f,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;t(a).then(function(a){d[e]=a;--c||h(b,d)},function(a){m(b,a)})});0===c&&h(b,d);return b};q.race=function(a){var b=c();r(a,function(a){t(a).then(b.resolve,b.reject)});return b.promise};return q}function hg(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||
a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Wf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null;this.$$suspended=!1}b.prototype=a;return b}var b=10,d=F("$rootScope"),c=null,e=null;this.digestTtl=
function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,k){function h(a){a.currentScope.$$destroyed=!0}function l(a){9===Ca&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=
this;this.$$suspended=this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function p(a){if(v.$$phase)throw d("inprog",v.$$phase);v.$$phase=a}function n(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function G(){}function t(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function q(){null===e&&(e=k.defer(function(){v.$apply(t)},
null,"$applyAsync"))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",h);return d},$watch:function(a,b,d,e){var f=g(a);b=B(b)?b:E;if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l=
{fn:b,last:G,get:f,exp:e||a,eq:!!d};c=null;k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;n(this,1);return function(){var a=cb(k,l);0<=a&&(n(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;try{k?(k=!1,b(e,e,g)):b(e,d,g)}finally{for(var f=0;f<a.length;f++)d[f]=e[f]}}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=
!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var d=g.$watch(a,function(a){e[b]=a;h||(h=!0,g.$evalAsync(c))});f.push(d)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!z(e)){if(D(e))if(ya(e))for(f!==n&&(f=n,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},t=0,l++);a=0;for(b in e)ta.call(e,
b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)ta.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$$pure=g(a).literal;c.$stateful=!c.$$pure;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},s=!0,t=0;return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(D(e))if(ya(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ta.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,h,l,m,n,s,r=b,q,y=w.length?v:this,N=[],z,A;p("$digest");k.$$checkUrlChange();this===v&&null!==e&&(k.defer.cancel(e),t());c=null;do{s=!1;q=y;for(n=0;n<w.length;n++){try{A=w[n],l=A.fn,l(A.scope,A.locals)}catch(C){f(C)}c=null}w.length=0;a:do{if(n=!q.$$suspended&&q.$$watchers)for(n.$$digestWatchIndex=n.length;n.$$digestWatchIndex--;)try{if(a=n[n.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(h=a.last)&&!(a.eq?va(g,h):X(g)&&X(h)))s=!0,c=a,a.last=a.eq?Ia(g,null):g,l=a.fn,l(g,h===G?g:h,q),5>r&&(z=4-r,N[z]||
(N[z]=[]),N[z].push({msg:B(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:h}));else if(a===c){s=!1;break a}}catch(E){f(E)}if(!(n=!q.$$suspended&&q.$$watchersCount&&q.$$childHead||q!==y&&q.$$nextSibling))for(;q!==y&&!(n=q.$$nextSibling);)q=q.$parent}while(q=n);if((s||w.length)&&!r--)throw v.$$phase=null,d("infdig",b,N);}while(s||w.length);for(v.$$phase=null;J<x.length;)try{x[J++]()}catch(D){f(D)}x.length=J=0;k.$$checkUrlChange()},$suspend:function(){this.$$suspended=!0},$isSuspended:function(){return this.$$suspended},
$resume:function(){this.$$suspended=!1},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===v&&k.$$applicationDestroyed();n(this,-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=
this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=E;this.$on=this.$watch=this.$watchGroup=function(){return E};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){v.$$phase||w.length||k.defer(function(){w.length&&v.$digest()},null,"$evalAsync");w.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){x.push(a)},$apply:function(a){try{p("$apply");try{return this.$eval(a)}finally{v.$$phase=
null}}catch(b){f(b)}finally{try{v.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);a=g(a);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(delete c[d],s(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=
!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=db([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)break;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=db([e],arguments,
1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var v=new m,w=v.$$asyncQueue=[],x=v.$$postDigestQueue=[],y=v.$$applyAsyncQueue=[],J=0;return v}]}function Le(){var a=/^\s*(https?|s?ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;
this.aHrefSanitizationWhitelist=function(b){return w(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f=ga(d&&d.trim()).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Sg(a){if("self"===a)return a;if(A(a)){if(-1<a.indexOf("***"))throw Ea("iwcard",a);a=Md(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if(ab(a))return new RegExp("^"+a.source+"$");throw Ea("imatcher");
}function Nd(a){var b=[];w(a)&&r(a,function(a){b.push(Sg(a))});return b}function $f(){this.SCE_CONTEXTS=V;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Nd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Nd(a));return b};this.$get=["$injector","$$sanitizeUri",function(d,c){function e(a,b){var c;"self"===a?(c=Bc(b,Od))||(C.document.baseURI?c=C.document.baseURI:(Na||(Na=C.document.createElement("a"),Na.href=".",Na=Na.cloneNode(!1)),c=Na.href),
c=Bc(b,c)):c=!!a.exec(b.href);return c}function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var g=function(a){throw Ea("unsafe");};d.has("$sanitize")&&(g=d.get("$sanitize"));var k=f(),h={};h[V.HTML]=f(k);h[V.CSS]=f(k);h[V.MEDIA_URL]=f(k);h[V.URL]=f(h[V.MEDIA_URL]);h[V.JS]=f(k);h[V.RESOURCE_URL]=
f(h[V.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ea("icontext",a,b);if(null===b||z(b)||""===b)return b;if("string"!==typeof b)throw Ea("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||z(f)||""===f)return f;var k=h.hasOwnProperty(d)?h[d]:null;if(k&&f instanceof k)return f.$$unwrapTrustedValue();B(f.$$unwrapTrustedValue)&&(f=f.$$unwrapTrustedValue());if(d===V.MEDIA_URL||d===V.URL)return c(f.toString(),d===V.MEDIA_URL);if(d===V.RESOURCE_URL){var k=
ga(f.toString()),n,s,r=!1;n=0;for(s=a.length;n<s;n++)if(e(a[n],k)){r=!0;break}if(r)for(n=0,s=b.length;n<s;n++)if(e(b[n],k)){r=!1;break}if(r)return f;throw Ea("insecurl",f.toString());}if(d===V.HTML)return g(f);throw Ea("unsafe");},valueOf:function(a){return a instanceof k?a.$$unwrapTrustedValue():a}}}]}function Zf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ca)throw Ea("iequirks");var c=ja(V);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ta);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;r(V,function(a,b){var d=K(b);c[("parse_as_"+d).replace(Cc,wb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(Cc,wb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Cc,wb)]=function(b){return g(a,b)}});
return c}]}function ag(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=fa((/android (\d+)/.exec(K((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},k=g.body&&g.body.style,h=!1,l=!1;k&&(h=!!("transition"in k||"webkitTransition"in k),l=!!("animation"in k||"webkitAnimation"in k));return{history:!(!c||
4>e||f),hasEvent:function(a){if("input"===a&&Ca)return!1;if(z(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Aa(),transitions:h,animations:l,android:e}}]}function bg(){this.$get=ia(function(a){return new Tg(a)})}function Tg(a){function b(){var a=e.pop();return a&&a.cb}function d(a){for(var b=e.length-1;0<=b;--b){var c=e[b];if(c.type===a)return e.splice(b,1),c.cb}}var c={},e=[],f=this.ALL_TASKS_TYPE="$$all$$",g=this.DEFAULT_TASK_TYPE="$$default$$";this.completeTask=function(e,
h){h=h||g;try{e()}finally{var l;l=h||g;c[l]&&(c[l]--,c[f]--);l=c[h];var m=c[f];if(!m||!l)for(l=m?d:b;m=l(h);)try{m()}catch(p){a.error(p)}}};this.incTaskCount=function(a){a=a||g;c[a]=(c[a]||0)+1;c[f]=(c[f]||0)+1};this.notifyWhenNoPendingTasks=function(a,b){b=b||f;c[b]?e.push({type:b,cb:a}):a()}}function dg(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(k,h){g.totalPendingRequests++;if(!A(k)||
z(d.get(k)))k=f.getTrustedResourceUrl(k);var l=c.defaults&&c.defaults.transformResponse;H(l)?l=l.filter(function(a){return a!==vc}):l===vc&&(l=null);return c.get(k,S({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){return d.put(k,a.data)},function(a){h||(a=Ug("tpload",k,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=0;return g}]}function eg(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,
b,d){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var c=ca.element(a).data("$binding");c&&r(c,function(c){d?(new RegExp("(^|\\s)"+Md(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(d?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},
whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function fg(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,h,l){B(f)||(l=h,h=f,f=E);var m=Ha.call(arguments,3),p=w(l)&&!l,n=(p?c:d).defer(),s=n.promise,r;r=b.defer(function(){try{n.resolve(f.apply(null,m))}catch(b){n.reject(b),e(b)}finally{delete g[s.$$timeoutId]}p||a.$apply()},h,"$timeout");s.$$timeoutId=r;g[r]=n;return s}var g={};f.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$timeoutId"))throw Vg("badprom");
if(!g.hasOwnProperty(a.$$timeoutId))return!1;a=a.$$timeoutId;var c=g[a],d=c.promise;d.$$state&&(d.$$state.pur=!0);c.reject("canceled");delete g[a];return b.defer.cancel(a)};return f}]}function ga(a){if(!A(a))return a;Ca&&(aa.setAttribute("href",a),a=aa.href);aa.setAttribute("href",a);a=aa.hostname;!Wg&&-1<a.indexOf(":")&&(a="["+a+"]");return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,search:aa.search?aa.search.replace(/^\?/,""):"",hash:aa.hash?aa.hash.replace(/^#/,
""):"",hostname:a,port:aa.port,pathname:"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname}}function Jg(a){var b=[Od].concat(a.map(ga));return function(a){a=ga(a);return b.some(Bc.bind(null,a))}}function Bc(a,b){a=ga(a);b=ga(b);return a.protocol===b.protocol&&a.host===b.host}function gg(){this.$get=ia(C)}function Pd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,k,h,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=
e.split("; "),c={},k=0;k<a.length;k++)g=a[k],h=g.indexOf("="),0<h&&(l=b(g.substring(0,h)),z(c[l])&&(c[l]=b(g.substring(h+1))));return c}}function kg(){this.$get=Pd}function dd(a){function b(d,c){if(D(d)){var e={};r(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Qd);b("date",Rd);b("filter",Xg);b("json",Yg);b("limitTo",Zg);b("lowercase",$g);b("number",Sd);b("orderBy",
Td);b("uppercase",ah)}function Xg(){return function(a,b,d,c){if(!ya(a)){if(null==a)return a;throw F("filter")("notarray",a);}c=c||"$";var e;switch(Dc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=bh(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function bh(a,b,d,c){var e=D(a)&&d in a;!0===b?b=va:B(b)||(b=function(a,b){if(z(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!bc(a))return!1;a=K(""+a);b=K(""+
b);return-1!==a.indexOf(b)});return function(f){return e&&!D(f)?Fa(f,a[d],b,d,!1):Fa(f,a,b,d,c)}}function Fa(a,b,d,c,e,f){var g=Dc(a),k=Dc(b);if("string"===k&&"!"===b.charAt(0))return!Fa(a,b.substring(1),d,c,e);if(H(a))return a.some(function(a){return Fa(a,b,d,c,e)});switch(g){case "object":var h;if(e){for(h in a)if(h.charAt&&"$"!==h.charAt(0)&&Fa(a[h],b,d,c,!0))return!0;return f?!1:Fa(a,b,d,c,!1)}if("object"===k){for(h in b)if(f=b[h],!B(f)&&!z(f)&&(g=h===c,!Fa(g?a:a[h],f,d,c,g,g)))return!1;return!0}return d(a,
b);case "function":return!1;default:return d(a,b)}}function Dc(a){return null===a?"null":typeof a}function Qd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){z(c)&&(c=b.CURRENCY_SYM);z(e)&&(e=b.PATTERNS[1].maxFrac);var f=c?/\u00A4/g:/\s*\u00A4\s*/g;return null==a?a:Ud(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(f,c)}}function Sd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ud(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function ch(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Vd))&&
(a=a.replace(Vd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===Ec;e++);if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Ec;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Wd&&(d=d.splice(0,Wd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function dh(a,b,d,c){var e=a.d,f=e.length-a.i;b=z(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=
1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ud(a,b,d,c,e){if(!A(a)&&!W(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,k=Math.abs(a)+"",h="";if(f)h="\u221e";else{g=ch(k);dh(g,e,b.minFrac,b.maxFrac);h=g.d;k=g.i;e=g.e;f=[];for(g=h.reduce(function(a,b){return a&&!b},
!0);0>k;)h.unshift(0),k++;0<k?f=h.splice(k,h.length):(f=h,h=[0]);k=[];for(h.length>=b.lgSize&&k.unshift(h.splice(-b.lgSize,h.length).join(""));h.length>b.gSize;)k.unshift(h.splice(-b.gSize,h.length).join(""));h.length&&k.unshift(h.join(""));h=k.join(d);f.length&&(h+=c+f.join(""));e&&(h+="e+"+e)}return 0>a&&!g?b.negPre+h+b.negSuf:b.posPre+h+b.posSuf}function Ob(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=Ec+a;d&&(a=a.substr(a.length-b));return e+a}function ea(a,
b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Ob(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Xd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Yd(a){return function(b){var d=Xd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Ob(b,a)}}function Fc(a,b){return 0>=
a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Rd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=fa(b[9]+b[10]),g=fa(b[9]+b[11]));k.call(a,fa(b[1]),fa(b[2])-1,fa(b[3]));f=fa(b[4]||0)-f;g=fa(b[5]||0)-g;k=fa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,
d,f){var g="",k=[],h,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;A(c)&&(c=eh.test(c)?fa(c):b(c));W(c)&&(c=new Date(c));if(!ha(c)||!isFinite(c.getTime()))return c;for(;d;)(l=fh.exec(d))?(k=db(k,l,1),d=k.pop()):(k.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=ec(f,m),c=fc(c,f,!0));r(k,function(b){h=gh[b];g+=h?h(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Yg(){return function(a,b){z(b)&&(b=2);return eb(a,b)}}function Zg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):fa(b);if(X(b))return a;W(a)&&(a=a.toString());if(!ya(a))return a;d=!d||isNaN(d)?0:fa(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?Gc(a,d,d+b):0===d?Gc(a,b,a.length):Gc(a,Math.max(0,d+b),d)}}function Gc(a,b,d){return A(a)?a.slice(b,d):Ha.call(a,b,d)}function Td(a){function b(b){return b.map(function(b){var c=1,d=Ta;if(B(b))d=b;else if(A(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=
d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,h=b.type;if(d===h){var h=a.value,l=b.value;"string"===d?(h=h.toLowerCase(),l=l.toLowerCase()):"object"===d&&(D(h)&&(h=a.index),D(l)&&(l=b.index));h!==l&&(c=h<l?-1:1)}else c="undefined"===d?1:"undefined"===h?-1:"null"===d?1:"null"===h?-1:d<h?-1:1;return c}return function(a,f,g,k){if(null==a)return a;if(!ya(a))throw F("orderBy")("notarray",
a);H(f)||(f=[f]);0===f.length&&(f=["+"]);var h=b(f),l=g?-1:1,m=B(k)?k:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:h.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="null";else if("object"===c)a:{if(B(e.valueOf)&&(e=e.valueOf(),d(e)))break a;bc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var d=0,e=h.length;d<e;d++){var f=m(a.predicateValues[d],b.predicateValues[d]);if(f)return f*
h[d].descending*l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l});return a=a.map(function(a){return a.value})}}function Ra(a){B(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ia(a)}function Pb(a,b,d,c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=lb;this.$$element=a;this.$$animate=c;Zd(this)}function Zd(a){a.$$classCache=
{};a.$$classCache[$d]=!(a.$$classCache[mb]=a.$$element.hasClass(mb))}function ae(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Vc(c,"-"):"";b(a,mb+c,!0===d);b(a,$d+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,k){z(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,k)):(this.$pending&&e(this.$pending,
a,k),be(this.$pending)&&(this.$pending=void 0));Ga(g)?g?(e(this.$error,a,k),c(this.$$success,a,k)):(c(this.$error,a,k),e(this.$$success,a,k)):(e(this.$error,a,k),e(this.$$success,a,k));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=be(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,
g,this)}}function be(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Hc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Sa(a,b,d,c,e,f){var g=K(b[0].type);if(!e.android){var k=!1;b.on("compositionstart",function(){k=!0});b.on("compositionupdate",function(a){if(z(a.data)||""===a.data)k=!1});b.on("compositionend",function(){k=!1;l()})}var h,l=function(a){h&&(f.defer.cancel(h),h=null);if(!k){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&
"false"===d.ngTrim||(e=U(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){h||(h=f.defer(function(){h=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut drop",m)}b.on("change",l);if(ce[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!h){var b=this.validity,
c=b.badInput,d=b.typeMismatch;h=f.defer(function(){h=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Qb(a,b){return function(d,c){var e,f;if(ha(d))return d;if(A(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(hh.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),
ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),e=new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0),100>f.yyyy&&e.setFullYear(f.yyyy),e}return NaN}}function nb(a,b,d,c){return function(e,f,g,k,h,l,m,p){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function s(a){return w(a)&&!ha(a)?r(a)||void 0:a}function r(a,b){var c=k.$options.getOption("timezone");v&&v!==c&&(b=Sc(b,ec(v)));var e=d(a,
b);!isNaN(e)&&c&&(e=fc(e,c));return e}Ic(e,f,g,k,a);Sa(e,f,g,k,h,l);var t="time"===a||"datetimelocal"===a,q,v;k.$parsers.push(function(c){if(k.$isEmpty(c))return null;if(b.test(c))return r(c,q);k.$$parserName=a});k.$formatters.push(function(a){if(a&&!ha(a))throw ob("datefmt",a);if(n(a)){q=a;var b=k.$options.getOption("timezone");b&&(v=b,q=fc(q,b,!0));var d=c;t&&A(k.$options.getOption("timeSecondsFormat"))&&(d=c.replace("ss.sss",k.$options.getOption("timeSecondsFormat")).replace(/:$/,""));a=m("date")(a,
d,b);t&&k.$options.getOption("timeStripZeroSeconds")&&(a=a.replace(/(?::00)?(?:\.000)?$/,""));return a}v=q=null;return""});if(w(g.min)||g.ngMin){var x=g.min||p(g.ngMin)(e),B=s(x);k.$validators.min=function(a){return!n(a)||z(B)||d(a)>=B};g.$observe("min",function(a){a!==x&&(B=s(a),x=a,k.$validate())})}if(w(g.max)||g.ngMax){var y=g.max||p(g.ngMax)(e),J=s(y);k.$validators.max=function(a){return!n(a)||z(J)||d(a)<=J};g.$observe("max",function(a){a!==y&&(J=s(a),y=a,k.$validate())})}}}function Ic(a,b,d,
c,e){(c.$$hasNativeValidators=D(b[0].validity))&&c.$parsers.push(function(a){var d=b.prop("validity")||{};if(d.badInput||d.typeMismatch)c.$$parserName=e;else return a})}function de(a){a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(ih.test(b))return parseFloat(b);a.$$parserName="number"});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!W(b))throw ob("numfmt",b);b=b.toString()}return b})}function na(a){w(a)&&!W(a)&&(a=parseFloat(a));return X(a)?void 0:a}function Jc(a){var b=a.toString(),
d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function ee(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Jc(a):0,k=e?Jc(b):0,h=f?Jc(d):0,g=Math.max(g,k,h),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function fe(a,b,d,c,e){if(w(c)){a=a(c);if(!a.constant)throw ob("constexpr",d,c);return a(b)}return e}function Kc(a,b){function d(a,b){if(!a||!a.length)return[];
if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e===b[m])continue a;c.push(e)}return c}function c(a){if(!a)return a;var b=a;H(a)?b=a.map(c).join(" "):D(a)?b=Object.keys(a).filter(function(b){return a[b]}).join(" "):A(a)||(b=a+"");return b}a="ngClass"+a;var e;return["$parse",function(f){return{restrict:"AC",link:function(g,k,h){function l(a,b){var c=[];r(a,function(a){if(0<b||p[a])p[a]=(p[a]||0)+b,p[a]===+(0<b)&&c.push(a)});return c.join(" ")}function m(a){if(a===
b){var c=s,c=l(c&&c.split(" "),1);h.$addClass(c)}else c=s,c=l(c&&c.split(" "),-1),h.$removeClass(c);n=a}var p=k.data("$classCounts"),n=!0,s;p||(p=T(),k.data("$classCounts",p));"ngClass"!==a&&(e||(e=f("$index",function(a){return a&1})),g.$watch(e,m));g.$watch(f(h[a],c),function(a){if(n===b){var c=s&&s.split(" "),e=a&&a.split(" "),f=d(c,e),c=d(e,c),f=l(f,-1),c=l(c,1);h.$addClass(c);h.$removeClass(f)}s=a})}}}]}function qd(a,b,d,c,e,f){return{restrict:"A",compile:function(g,k){var h=a(k[c]);return function(a,
c){c.on(e,function(c){var e=function(){h(a,{$event:c})};if(b.$$phase)if(f)a.$evalAsync(e);else try{e()}catch(g){d(g)}else a.$apply(e)})}}}}function Rb(a,b,d,c,e,f,g,k,h){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=
void 0;this.$name=h(d.name||"",!1)(a);this.$$parentForm=lb;this.$options=Sb;this.$$updateEvents="";this.$$updateEventHandler=this.$$updateEventHandler.bind(this);this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$parserName="parse";this.$$currentValidationRunId=0;this.$$scope=a;this.$$rootScope=a.$root;this.$$attr=d;
this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=k;this.$$exceptionHandler=b;Zd(this);jh(this)}function jh(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);b===a.$modelValue||a.$modelValue!==a.$modelValue&&b!==b||a.$$setModelValue(b);return b})}function Lc(a){this.$$options=a}function ge(a,b){r(b,function(b,c){w(a[c])||(a[c]=b)})}function Oa(a,b){a.prop("selected",b);a.attr("selected",b)}function he(a,b,d){if(a){A(a)&&(a=new RegExp("^"+a+"$"));if(!a.test)throw F("ngPattern")("noregexp",
b,a,za(d));return a}}function Tb(a){a=fa(a);return X(a)?-1:a}var Wb={objectMaxDepth:5,urlErrorParamsEnabled:!0},ie=/^\/(.+)\/([a-z]*)$/,ta=Object.prototype.hasOwnProperty,K=function(a){return A(a)?a.toLowerCase():a},ub=function(a){return A(a)?a.toUpperCase():a},Ca,x,rb,Ha=[].slice,Fg=[].splice,kh=[].push,la=Object.prototype.toString,Pc=Object.getPrototypeOf,pa=F("ng"),ca=C.angular||(C.angular={}),kc,pb=0;Ca=C.document.documentMode;var X=Number.isNaN||function(a){return a!==a};E.$inject=[];Ta.$inject=
[];var ve=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,U=function(a){return A(a)?a.trim():a},Md=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Aa=function(){if(!w(Aa.rules)){var a=C.document.querySelector("[ng-csp]")||C.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Aa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==
b.indexOf("no-inline-style")}}else{a=Aa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Aa.rules},qb=function(){if(w(qb.name_))return qb.name_;var a,b,d=Qa.length,c,e;for(b=0;b<d;++b)if(c=Qa[b],a=C.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return qb.name_=e},xe=/:/g,Qa=["ng-","data-ng-","ng:","x-ng-"],Be=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof C.HTMLScriptElement||b instanceof C.SVGScriptElement))return!1;
b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(C.document),Ee=/[A-Z]/g,Wc=!1,Pa=3,Ke={full:"1.7.9",major:1,minor:7,dot:9,codeName:"pollution-eradication"};Y.expando="ng339";var Ka=Y.cache=
{},pg=1;Y._data=function(a){return this.cache[a[this.expando]]||{}};var lg=/-([a-z])/g,lh=/^-ms-/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},nc=F("jqLite"),og=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,mc=/<|&#?\w+;/,mg=/<([\w:-]+)/,ng=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,oa={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>",
"</tr></tbody></table>"],_default:[0,"",""]};oa.optgroup=oa.option;oa.tbody=oa.tfoot=oa.colgroup=oa.caption=oa.thead;oa.th=oa.td;var ug=C.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Wa=Y.prototype={ready:fd,toString:function(){var a=[];r(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?x(this[a]):x(this[this.length+a])},length:0,push:kh,sort:[].sort,splice:[].splice},Gb={};r("multiple selected checked disabled readOnly required open".split(" "),
function(a){Gb[K(a)]=a});var md={};r("input select option textarea button form details".split(" "),function(a){md[a]=!0});var td={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};r({data:rc,removeData:qc,hasData:function(a){for(var b in Ka[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)qc(a[b]),id(a[b])}},function(a,b){Y[b]=a});r({data:rc,inheritedData:Eb,scope:function(a){return x.data(a,"$scope")||Eb(a.parentNode||
a,["$isolateScope","$scope"])},isolateScope:function(a){return x.data(a,"$isolateScope")||x.data(a,"$isolateScopeNoTemplate")},controller:jd,injector:function(a){return Eb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Bb,css:function(a,b,d){b=xb(b.replace(lh,"ms-"));if(w(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Pa&&2!==c&&8!==c&&a.getAttribute){var c=K(b),e=Gb[c];if(w(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,
e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(w(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(z(d)){var c=a.nodeType;return 1===c||c===Pa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(z(b)){if(a.multiple&&"select"===ua(a)){var d=[];r(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(z(b))return a.innerHTML;yb(a,!0);a.innerHTML=b},
empty:kd},function(a,b){Y.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==kd&&z(2===a.length&&a!==Bb&&a!==jd?b:c)){if(D(b)){for(e=0;e<g;e++)if(a===rc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=z(e)?Math.min(g,1):g;for(f=0;f<g;f++){var k=a(this[f],b,c);e=e?e+k:k}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});r({removeData:qc,on:function(a,b,d,c){if(w(c))throw nc("onargs");if(lc(a)){c=zb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=rg(a,e));c=0<=b.indexOf(" ")?
b.split(" "):[b];for(var g=c.length,k=function(b,c,g){var k=e[b];k||(k=e[b]=[],k.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));k.push(d)};g--;)b=c[g],Ab[b]?(k(Ab[b],tg),k(b,void 0,!0)):k(b)}},off:id,one:function(a,b,d){a=x(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;yb(a);r(new Y(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];r(a.childNodes,function(a){1===
a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new Y(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;r(new Y(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=x(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Fb,detach:function(a){Fb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;
if(c){b=new Y(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Db,removeClass:Cb,toggleClass:function(a,b,d){b&&r(b.split(" "),function(b){var e=d;z(e)&&(e=!Bb(a,b));(e?Db:Cb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:pc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=zb(a);if(g=(g=g&&g.events)&&
g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:E,type:f,target:a},b.type&&(c=S(c,b)),b=ja(g),e=d?[c].concat(d):[c],r(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){Y.prototype[b]=function(b,c,e){for(var f,g=0,k=this.length;g<
k;g++)z(f)?(f=a(this[g],b,c,e),w(f)&&(f=x(f))):oc(f,a(this[g],b,c,e));return w(f)?f:this}});Y.prototype.bind=Y.prototype.on;Y.prototype.unbind=Y.prototype.off;var mh=Object.create(null);nd.prototype={_idx:function(a){a!==this._lastKey&&(this._lastKey=a,this._lastIndex=this._keys.indexOf(a));return this._lastIndex},_transformKey:function(a){return X(a)?mh:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},has:function(a){a=this._transformKey(a);return-1!==this._idx(a)},
set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};var Hb=nd,jg=[function(){this.$get=[function(){return Hb}]}],wg=/^([^(]+?)=>/,xg=/^[^(]*\(\s*([^)]*)\)/m,nh=/,/,oh=/^\s*(_?)(\S+?)\1\s*$/,vg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ba=F("$injector");
fb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw A(d)&&d||(d=a.name||yg(a)),Ba("strictdi",d);b=od(a);r(b[1].split(nh),function(a){a.replace(oh,function(a,b,d){c.push(d)})})}a.$inject=c}}else H(a)?(b=a.length-1,sb(a[b],"fn"),c=a.slice(0,b)):sb(a,"fn",!0);return c};var je=F("$animate"),zf=function(){this.$get=E},Af=function(){var a=new Hb,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=A(b)?b.split(" "):
H(b)?b:[],r(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){r(b,function(b){var c=a.get(b);if(c){var d=zg(b.attr("class")),e="",f="";r(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});r(b,function(a){e&&Db(a,e);f&&Cb(a,f)});a.delete(b)}});b.length=0}return{enabled:E,on:E,off:E,pin:E,push:function(g,k,h,l){l&&l();h=h||{};h.from&&g.css(h.from);h.to&&g.css(h.to);if(h.addClass||h.removeClass)if(k=h.addClass,l=h.removeClass,h=a.get(g)||{},k=e(h,k,!0),l=e(h,l,!1),
k||l)a.set(g,h),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},xf=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw je("notcsel",c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=g;a.factory(g,d)};this.customFilter=function(a){1===arguments.length&&(c=B(a)?a:null);return c};this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?
a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,je("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.cancel&&a.cancel()},enter:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,
"enter",ra(l))},move:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,"move",ra(l))},leave:function(b,c){return a.push(b,"leave",ra(c),function(){b.remove()})},addClass:function(b,c,d){d=ra(d);d.addClass=hb(d.addclass,c);return a.push(b,"addClass",d)},removeClass:function(b,c,d){d=ra(d);d.removeClass=hb(d.removeClass,c);return a.push(b,"removeClass",d)},setClass:function(b,c,d,f){f=ra(f);f.addClass=hb(f.addClass,c);f.removeClass=hb(f.removeClass,d);return a.push(b,"setClass",
f)},animate:function(b,c,d,f,m){m=ra(m);m.from=m.from?S(m.from,c):c;m.to=m.to?S(m.to,d):d;m.tempClasses=hb(m.tempClasses,f||"ng-inline-animate");return a.push(b,"animate",m)}}}]}],Cf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},Bf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,
b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;r(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:E,getPromise:function(){if(!this.promise){var b=
this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},
complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},yf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);k||
h.complete();k=!0});return h}var g=e||{};g.$$prepared||(g=Ia(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var k,h=new d;return{start:f,end:f}}}]},$=F("$compile"),tc=new function(){};Xc.$inject=["$provide","$$sanitizeUriProvider"];Jb.prototype.isFirstChange=function(){return this.previousValue===tc};var pd=/^((?:x|data)[:\-_])/i,Eg=/[:\-_]+(.)/g,vd=F("$controller"),ud=/^(\S+)(\s+as\s+([\w$]+))?$/,Jf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&
b instanceof x&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},wd="application/json",wc={"Content-Type":wd+";charset=utf-8"},Hg=/^\[|^\{(?!\{)/,Ig={"[":/]$/,"{":/}$/},Gg=/^\)]\}',?\n/,Kb=F("$http"),Ma=ca.$interpolateMinErr=F("$interpolate");Ma.throwNoconcat=function(a){throw Ma("noconcat",a);};Ma.interr=function(a,b){return Ma("interr",a,b.toString())};var Lg=F("$interval"),Sf=function(){this.$get=function(){function a(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var b=ca.callbacks,
d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},ph=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,Mg={http:80,https:443,ftp:21},jb=F("$location"),Ng=/^\s*[\\/]{2,}/,qh={$$absUrl:"",$$html5:!1,$$replace:!1,$$compose:function(){for(var a=this.$$path,b=this.$$hash,d=ye(this.$$search),b=b?
"#"+hc(b):"",a=a.split("/"),c=a.length;c--;)a[c]=hc(a[c].replace(/%2F/g,"/"));this.$$url=a.join("/")+(d?"?"+d:"")+b;this.$$absUrl=this.$$normalizeUrl(this.$$url);this.$$urlUpdatedByLocation=!0},absUrl:Lb("$$absUrl"),url:function(a){if(z(a))return this.$$url;var b=ph.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Lb("$$protocol"),host:Lb("$$host"),port:Lb("$$port"),path:Dd("$$path",function(a){a=null!==
a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(A(a)||W(a))a=a.toString(),this.$$search=gc(a);else if(D(a))a=Ia(a,{}),r(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw jb("isrcharg");break;default:z(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};
r([Cd,zc,yc],function(a){a.prototype=Object.create(qh);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==yc||!this.$$html5)throw jb("nostate");this.$$state=z(b)?null:b;this.$$urlUpdatedByLocation=!0;return this}});var Ya=F("$parse"),Rg={}.constructor.prototype.valueOf,Ub=T();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ub[a]=!0});var rh={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Nb=function(a){this.options=a};Nb.prototype={constructor:Nb,
lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ub[b],e=Ub[d];Ub[a]||
c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?
this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):
(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=w(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ya("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<
this.text.length;){var d=K(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<
this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,
16))):d+=rh[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var q=function(a,b){this.lexer=a;this.options=b};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";
q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal="Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.LocalsExpression="LocalsExpression";q.NGValueParameter="NGValueParameter";q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},
program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Hd(a))throw Ya("lval");
a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a=
{type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:q.BinaryExpression,
operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?
a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Ia(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:q.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):
"["===b.text?(a={type:q.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:q.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))
}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
b={type:q.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");
return{type:q.ObjectExpression,properties:a}},throwError:function(a,b){throw Ya("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ya("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ya("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,
e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:q.ThisExpression},$locals:{type:q.LocalsExpression}}};var Fd=2;Jd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};Z(a,b.$filter);var d="",c;this.stage="assign";if(c=Id(a))this.state.computing=
"assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Gd(a.body);b.stage="inputs";r(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var k=b.nextId();b.recurse(a,k);b.return_(k);b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+
d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,Og,Pg,Ed);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;r(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+";")});b.length&&a.push("fn.inputs=["+b.map(function(a){return a.name}).join(",")+"];");return a.join("")},generateFunction:function(a,
b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;r(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,k,h=this,l,m,p;c=c||E;if(!f&&w(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,
this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case q.Program:r(a.body,function(b,c){h.recurse(b.expression,void 0,void 0,function(a){k=a});c!==a.body.length-1?h.current().body.push(k,";"):h.return_(k)});break;case q.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case q.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){k=a});m=a.operator+"("+this.ifDefined(k,0)+")";this.assign(b,m);c(m);break;case q.BinaryExpression:this.recurse(a.left,
void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){k=a});m="+"===a.operator?this.plus(g,k):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(k,0):"("+g+")"+a.operator+"("+k+")";this.assign(b,m);c(m);break;case q.LogicalExpression:b=b||this.nextId();h.recurse(a.left,b);h.if_("&&"===a.operator?b:h.not(b),h.lazyRecurse(a.right,b));c(b);break;case q.ConditionalExpression:b=b||this.nextId();h.recurse(a.test,b);h.if_(b,h.lazyRecurse(a.alternate,b),h.lazyRecurse(a.consequent,
b));c(b);break;case q.Identifier:b=b||this.nextId();d&&(d.context="inputs"===h.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",a.name)),function(){h.if_("inputs"===h.stage||"s",function(){e&&1!==e&&h.if_(h.isNull(h.nonComputedMember("s",a.name)),h.lazyAssign(h.nonComputedMember("s",a.name),"{}"));h.assign(b,h.nonComputedMember("s",a.name))})},b&&h.lazyAssign(b,h.nonComputedMember("l",
a.name)));c(b);break;case q.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();h.recurse(a.object,g,void 0,function(){h.if_(h.notNull(g),function(){a.computed?(k=h.nextId(),h.recurse(a.property,k),h.getStringValue(k),e&&1!==e&&h.if_(h.not(h.computedMember(g,k)),h.lazyAssign(h.computedMember(g,k),"{}")),m=h.computedMember(g,k),h.assign(b,m),d&&(d.computed=!0,d.name=k)):(e&&1!==e&&h.if_(h.isNull(h.nonComputedMember(g,a.property.name)),h.lazyAssign(h.nonComputedMember(g,
a.property.name),"{}")),m=h.nonComputedMember(g,a.property.name),h.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){h.assign(b,"undefined")});c(b)},!!e);break;case q.CallExpression:b=b||this.nextId();a.filter?(k=h.filter(a.callee.name),l=[],r(a.arguments,function(a){var b=h.nextId();h.recurse(a,b);l.push(b)}),m=k+"("+l.join(",")+")",h.assign(b,m),c(b)):(k=h.nextId(),g={},l=[],h.recurse(a.callee,k,g,function(){h.if_(h.notNull(k),function(){r(a.arguments,function(b){h.recurse(b,a.constant?
void 0:h.nextId(),void 0,function(a){l.push(a)})});m=g.name?h.member(g.context,g.name,g.computed)+"("+l.join(",")+")":k+"("+l.join(",")+")";h.assign(b,m)},function(){h.assign(b,"undefined")});c(b)}));break;case q.AssignmentExpression:k=this.nextId();g={};this.recurse(a.left,void 0,g,function(){h.if_(h.notNull(g.context),function(){h.recurse(a.right,k);m=h.member(g.context,g.name,g.computed)+a.operator+k;h.assign(b,m);c(b||m)})},1);break;case q.ArrayExpression:l=[];r(a.elements,function(b){h.recurse(b,
a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case q.ObjectExpression:l=[];p=!1;r(a.properties,function(a){a.computed&&(p=!0)});p?(b=b||this.nextId(),this.assign(b,"{}"),r(a.properties,function(a){a.computed?(g=h.nextId(),h.recurse(a.key,g)):g=a.key.type===q.Identifier?a.key.name:""+a.key.value;k=h.nextId();h.recurse(a.value,k);h.assign(h.member(b,g,a.computed),k)})):(r(a.properties,function(b){h.recurse(b.value,a.constant?void 0:
h.nextId(),void 0,function(a){l.push(h.escape(b.key.type===q.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case q.ThisExpression:this.assign(b,"s");c(b||"s");break;case q.LocalsExpression:this.assign(b,"l");c(b||"l");break;case q.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,
b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},
not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=
this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(A(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(W(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ya("esc");},nextId:function(a,
b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Kd.prototype={compile:function(a){var b=this;Z(a,b.$filter);var d,c;if(d=Id(a))c=this.recurse(d);d=Gd(a.body);var e;d&&(e=[],r(d,function(a,c){var d=b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];r(a.body,function(a){f.push(b.recurse(a.expression))});a=0===a.body.length?E:1===a.body.length?f[0]:function(a,b){var c;r(f,function(d){c=
d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,b);case q.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case q.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case q.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),
this["binary"+a.operator](c,e,b);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case q.Identifier:return f.identifier(a.name,b,d);case q.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,e,b,d);case q.CallExpression:return g=[],r(a.arguments,function(a){g.push(f.recurse(a))}),
a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var p=[],n=0;n<g.length;++n)p.push(g[n](a,c,d,f));a=e.apply(void 0,p,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var p=e(a,c,d,f),n;if(null!=p.value){n=[];for(var s=0;s<g.length;++s)n.push(g[s](a,c,d,f));n=p.value.apply(p.context,n)}return b?{value:n}:n};case q.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var p=
c(a,d,f,g);a=e(a,d,f,g);p.context[p.name]=a;return b?{value:a}:a};case q.ArrayExpression:return g=[],r(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case q.ObjectExpression:return g=[],r(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,
c,d,e){for(var f={},n=0;n<g.length;++n)g[n].computed?f[g[n].key(a,c,d,e)]=g[n].value(a,c,d,e):f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case q.ThisExpression:return function(a){return b?{value:a}:a};case q.LocalsExpression:return function(a,c){return b?{value:c}:c};case q.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,
e,f);d=w(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=Ed(k,c);return d?{value:k}:k}},"binary-":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=(w(k)?k:0)-(w(c)?c:0);return d?{value:k}:k}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=
a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k)?b(e,f,g,k):d(e,f,g,k);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:
e}},computedMember:function(a,b,d,c){return function(e,f,g,k){var h=a(e,f,g,k),l,m;null!=h&&(l=b(e,f,g,k),l+="",c&&1!==c&&h&&!h[l]&&(h[l]={}),m=h[l]);return d?{context:h,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};Mb.prototype={constructor:Mb,parse:function(a){a=this.getAst(a);var b=
this.astCompiler.compile(a.ast),d=a.ast;b.literal=0===d.body.length||1===d.body.length&&(d.body[0].expression.type===q.Literal||d.body[0].expression.type===q.ArrayExpression||d.body[0].expression.type===q.ObjectExpression);b.constant=a.ast.constant;b.oneTime=a.oneTime;return b},getAst:function(a){var b=!1;a=a.trim();":"===a.charAt(0)&&":"===a.charAt(1)&&(b=!0,a=a.substring(2));return{ast:this.ast.ast(a),oneTime:b}}};var Ea=F("$sce"),V={HTML:"html",CSS:"css",MEDIA_URL:"mediaUrl",URL:"url",RESOURCE_URL:"resourceUrl",
JS:"js"},Cc=/_([a-z])/g,Ug=F("$templateRequest"),Vg=F("$timeout"),aa=C.document.createElement("a"),Od=ga(C.location.href),Na;aa.href="http://[::1]";var Wg="[::1]"===aa.hostname;Pd.$inject=["$document"];dd.$inject=["$provide"];var Wd=22,Vd=".",Ec="0";Qd.$inject=["$locale"];Sd.$inject=["$locale"];var gh={yyyy:ea("FullYear",4,0,!1,!0),yy:ea("FullYear",2,0,!0,!0),y:ea("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:ea("Month",2,1),M:ea("Month",1,1),LLLL:kb("Month",!1,!0),dd:ea("Date",2),
d:ea("Date",1),HH:ea("Hours",2),H:ea("Hours",1),hh:ea("Hours",2,-12),h:ea("Hours",1,-12),mm:ea("Minutes",2),m:ea("Minutes",1),ss:ea("Seconds",2),s:ea("Seconds",1),sss:ea("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Ob(Math[0<a?"floor":"ceil"](a/60),2)+Ob(Math.abs(a%60),2))},ww:Yd(2),w:Yd(1),G:Fc,GG:Fc,GGG:Fc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},
fh=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,eh=/^-?\d+$/;Rd.$inject=["$locale"];var $g=ia(K),ah=ia(ub);Td.$inject=["$parse"];var Me=ia({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===la.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};r(Gb,function(a,b){function d(a,d,e){a.$watch(e[c],
function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=wa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});r(td,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(ie))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});r(["src","srcset","href"],function(a){var b=wa("ng-"+a);vb[b]=
["$sce",function(d){return{priority:99,link:function(c,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===la.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$set(b,d.getTrustedMediaUrl(f[b]));f.$observe(b,function(b){b?(f.$set(k,b),Ca&&g&&e.prop(g,f[k])):"href"===a&&f.$set(k,null)})}}}]});var lb={$addControl:E,$getControls:ia([]),$$renameControl:function(a,b){a.$name=b},$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E,$setSubmitted:E,$$setSubmitted:E};Pb.$inject=
["$element","$attrs","$scope","$animate","$interpolate"];Pb.prototype={$rollbackViewValue:function(){r(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){r(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Ja(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$getControls:function(){return ja(this.$$controls)},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&
this[a.$name]===a&&delete this[a.$name];r(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);r(this.$error,function(b,d){this.$setValidity(d,null,a)},this);r(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);cb(this.$$controls,a);a.$$parentForm=lb},$setDirty:function(){this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Vb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,
Za,Vb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;r(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){r(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){for(var a=this;a.$$parentForm&&a.$$parentForm!==lb;)a=a.$$parentForm;a.$$setSubmitted()},$$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;r(this.$$controls,function(a){a.$$setSubmitted&&a.$$setSubmitted()})}};ae({clazz:Pb,set:function(a,
b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(cb(c,d),0===c.length&&delete a[b])}});var ke=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||E}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Pb,compile:function(d,f){d.addClass(Za).addClass(mb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var p=f[0];if(!("action"in e)){var n=function(b){a.$apply(function(){p.$commitViewValue();
p.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",n);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",n)},0,!1)})}(f[1]||p.$$parentForm).$addControl(p);var s=g?c(p.$name):E;g&&(s(a,p),e.$observe(g,function(b){p.$name!==b&&(s(a,void 0),p.$$parentForm.$$renameControl(p,b),s=c(p.$name),s(a,p))}));d.on("$destroy",function(){p.$$parentForm.$removeControl(p);s(a,void 0);S(p,lb)})}}}}}]},Ne=ke(),Ze=ke(!0),hh=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
sh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,th=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,ih=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,le=/^(\d{4,})-(\d{2})-(\d{2})$/,me=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Mc=/^(\d{4,})-W(\d\d)$/,ne=/^(\d{4,})-(\d\d)$/,
oe=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ce=T();r(["date","datetime-local","month","time","week"],function(a){ce[a]=!0});var pe={text:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c)},date:nb("date",le,Qb(le,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":nb("datetimelocal",me,Qb(me,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:nb("time",oe,Qb(oe,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:nb("week",Mc,function(a,b){if(ha(a))return a;if(A(a)){Mc.lastIndex=0;var d=Mc.exec(a);
if(d){var c=+d[1],e=+d[2],f=d=0,g=0,k=0,h=Xd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),k=b.getMilliseconds());return new Date(c,0,h.getDate()+e,d,f,g,k)}}return NaN},"yyyy-Www"),month:nb("month",ne,Qb(ne,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f,g,k){Ic(a,b,d,c,"number");de(c);Sa(a,b,d,c,e,f);var h;if(w(d.min)||d.ngMin){var l=d.min||k(d.ngMin)(a);h=na(l);c.$validators.min=function(a,b){return c.$isEmpty(b)||z(h)||b>=h};d.$observe("min",function(a){a!==l&&(h=na(a),
l=a,c.$validate())})}if(w(d.max)||d.ngMax){var m=d.max||k(d.ngMax)(a),p=na(m);c.$validators.max=function(a,b){return c.$isEmpty(b)||z(p)||b<=p};d.$observe("max",function(a){a!==m&&(p=na(a),m=a,c.$validate())})}if(w(d.step)||d.ngStep){var n=d.step||k(d.ngStep)(a),s=na(n);c.$validators.step=function(a,b){return c.$isEmpty(b)||z(s)||ee(b,h||0,s)};d.$observe("step",function(a){a!==n&&(s=na(a),n=a,c.$validate())})}},url:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c);c.$validators.url=function(a,b){var d=
a||b;return c.$isEmpty(d)||sh.test(d)}},email:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c);c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||th.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==U(d.ngTrim);z(d.name)&&b.attr("name",++pb);b.on("change",function(a){var g;b[0].checked&&(g=d.value,e&&(g=U(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=U(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,
c){b.attr(a,d[a]);var e=d[a];d.$observe(a,function(a){a!==e&&(e=a,c(a))})}function k(a){p=na(a);X(c.$modelValue)||(m?(a=b.val(),p>a&&(a=p,b.val(a)),c.$setViewValue(a)):c.$validate())}function h(a){n=na(a);X(c.$modelValue)||(m?(a=b.val(),n<a&&(b.val(n),a=n<p?p:n),c.$setViewValue(a)):c.$validate())}function l(a){s=na(a);X(c.$modelValue)||(m?c.$viewValue!==b.val()&&c.$setViewValue(b.val()):c.$validate())}Ic(a,b,d,c,"range");de(c);Sa(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,p=m?
0:void 0,n=m?100:void 0,s=m?1:void 0,r=b[0].validity;a=w(d.min);e=w(d.max);f=w(d.step);var q=c.$render;c.$render=m&&w(r.rangeUnderflow)&&w(r.rangeOverflow)?function(){q();c.$setViewValue(b.val())}:q;a&&(p=na(d.min),c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(p)||b>=p},g("min",k));e&&(n=na(d.max),c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(n)||b<=n},g("max",h));f&&(s=na(d.step),c.$validators.step=m?function(){return!r.stepMismatch}:
function(a,b){return c.$isEmpty(b)||z(s)||ee(b,p||0,s)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,k){var h=fe(k,a,"ngTrueValue",d.ngTrueValue,!0),l=fe(k,a,"ngFalseValue",d.ngFalseValue,!1);b.on("change",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return va(a,h)});c.$parsers.push(function(a){return a?h:l})},hidden:E,button:E,submit:E,reset:E,file:E},Yc=["$browser","$sniffer",
"$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,k){k[0]&&(pe[K(g.type)]||pe.text)(e,f,g,k[0],b,a,d,c)}}}}],vf=function(){var a={configurable:!0,enumerable:!1,get:function(){return this.getAttribute("value")||""},set:function(a){this.setAttribute("value",a)}};return{restrict:"E",priority:200,compile:function(b,d){if("hidden"===K(d.type))return{pre:function(b,d,f,g){b=d[0];b.parentNode&&b.parentNode.insertBefore(b,b.nextSibling);Object.defineProperty&&
Object.defineProperty(b,"value",a)}}}}},uh=/^(true|false|\d+)$/,sf=function(){function a(a,d,c){var e=w(c)?c:9===Ca?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return uh.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Re=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];
b.$watch(e.ngBind,function(a){c.textContent=ic(a)})}}}}],Te=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=z(a)?"":a})}}}}],Se=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);
return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],rf=ia({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ue=Kc("",!0),We=Kc("Odd",0),Ve=Kc("Even",1),Xe=Ra({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ye=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],cd={},vh={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=wa("ng-"+a);cd[b]=["$parse","$rootScope","$exceptionHandler",function(d,c,e){return qd(d,c,e,b,a,vh[a])}]});var af=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var k,h,l;d.$watch(e.ngIf,function(d){d?h||g(function(d,f){h=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);k={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=tb(k.clone),
a.leave(l).done(function(a){!1!==a&&(l=null)}),k=null))})}}}],bf=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",k=e.autoscroll;return function(c,e,m,p,n){var r=0,q,t,x,v=function(){t&&(t.remove(),t=null);q&&(q.$destroy(),q=null);x&&(d.leave(x).done(function(a){!1!==a&&(t=null)}),t=x,x=null)};c.$watch(f,function(f){var m=function(a){!1===
a||!w(k)||k&&!c.$eval(k)||b()},t=++r;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===r){var b=c.$new();p.template=a;a=n(b,function(a){v();d.enter(a,null,e).done(m)});q=b;x=a;q.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||t!==r||(v(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(v(),p.template=null)})}}}}],uf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){la.call(d[0]).match(/SVG/)?
(d.empty(),a(ed(e.template,C.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],cf=Ra({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),qf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?U(e):e;c.$parsers.push(function(a){if(!z(a)){var b=[];a&&r(a.split(g),function(a){a&&b.push(f?U(a):a)});return b}});c.$formatters.push(function(a){if(H(a))return a.join(e)});
c.$isEmpty=function(a){return!a||!a.length}}}},mb="ng-valid",$d="ng-invalid",Za="ng-pristine",Vb="ng-dirty",ob=F("ngModel");Rb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Rb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);B(c)&&(c=a(b));return c};this.$$ngModelSet=
function(a,c){B(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw ob("nonassign",this.$$attr.ngModel,za(this.$$element));},$render:E,$isEmpty:function(a){return z(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,
"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Vb);this.$$animate.addClass(this.$$element,Za)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Vb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=
!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!X(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==
c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;r(h.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(r(h.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;r(h.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!B(h.then))throw ob("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?h.$$q.all(c).then(function(){g(d)},E):g(!0)}function f(a,b){k===h.$$currentValidationRunId&&
h.$setValidity(a,b)}function g(a){k===h.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var k=this.$$currentValidationRunId,h=this;(function(){var a=h.$$parserName;if(z(h.$$parserValid))f(a,null);else return h.$$parserValid||(r(h.$validators,function(a,b){f(b,null)}),r(h.$asyncValidators,function(a,b){f(b,null)})),f(a,h.$$parserValid),h.$$parserValid;return!0})()?c()?e():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==
a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;this.$$parserValid=z(a)?void 0:!0;this.$setValidity(this.$$parserName,null);this.$$parserName="parse";if(this.$$parserValid)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),z(a)){this.$$parserValid=!1;break}X(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));
var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);r(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=
a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");W(b[a])?b=b[a]:W(b["default"])&&-1===this.$options.getOption("updateOn").indexOf(a)?b=b["default"]:W(b["*"])&&(b=b["*"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$rootScope.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},
$overrideModelOptions:function(a){this.$options=this.$options.createChild(a);this.$$setUpdateOnEvents()},$processModelValue:function(){var a=this.$$format();this.$viewValue!==a&&(this.$$updateEmptyClasses(a),this.$viewValue=this.$$lastCommittedViewValue=a,this.$render(),this.$$runValidators(this.$modelValue,this.$viewValue,E))},$$format:function(){for(var a=this.$formatters,b=a.length,d=this.$modelValue;b--;)d=a[b](d);return d},$$setModelValue:function(a){this.$modelValue=this.$$rawModelValue=a;this.$$parserValid=
void 0;this.$processModelValue()},$$setUpdateOnEvents:function(){this.$$updateEvents&&this.$$element.off(this.$$updateEvents,this.$$updateEventHandler);if(this.$$updateEvents=this.$options.getOption("updateOn"))this.$$element.on(this.$$updateEvents,this.$$updateEventHandler)},$$updateEventHandler:function(a){this.$$debounceViewValueCommit(a&&a.type)}};ae({clazz:Rb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var pf=["$rootScope",function(a){return{restrict:"A",require:["ngModel",
"^?form","^?ngModelOptions"],controller:Rb,priority:1,compile:function(b){b.addClass(Za).addClass("ng-untouched").addClass(mb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){k.$setTouched()}var k=f[0];k.$$setUpdateOnEvents();c.on("blur",
function(){k.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Sb,wh=/(\s+|^)default(\s+|$)/;Lc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=!1;a=S({},a);r(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=U(d.replace(wh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ge(a,this.$$options));ge(a,Sb.$$options);
return new Lc(a)}};Sb=new Lc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var tf=function(){function a(a,d){this.$$attrs=a;this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Sb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},df=Ra({terminal:!0,
priority:1E3}),xh=F("ngOptions"),yh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,nf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!r&&ya(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&
"$"!==c.charAt(0)&&b.push(c)}return b}var p=a.match(yh);if(!p)throw xh("iexp",a,za(b));var n=p[5]||p[7],r=p[6];a=/ as /.test(p[0])&&p[1];var q=p[9];b=d(p[2]?p[1]:n);var t=a&&d(a)||b,w=q&&d(q),v=q?function(a,b){return w(c,b)}:function(a){return La(a)},x=function(a,b){return v(a,A(a,b))},z=d(p[2]||p[1]),y=d(p[3]||""),J=d(p[4]||""),I=d(p[8]),B={},A=r?function(a,b){B[r]=b;B[n]=a;return B}:function(a){B[n]=a;return B};return{trackBy:q,getTrackByValue:x,getWatchables:d(I,function(a){var b=[];a=a||[];for(var d=
f(a),e=d.length,g=0;g<e;g++){var k=a===d?g:d[g],l=a[k],k=A(l,k),l=v(l,k);b.push(l);if(p[2]||p[1])l=z(c,k),b.push(l);p[4]&&(k=J(c,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},d=I(c)||[],g=f(d),k=g.length,n=0;n<k;n++){var p=d===g?n:g[n],r=A(d[p],p),s=t(c,r),p=v(s,r),w=z(c,r),B=y(c,r),r=J(c,r),s=new e(p,s,w,B,r);a.push(s);b[p]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[x(a)]},getViewValueFromOption:function(a){return q?Ia(a.viewValue):a.viewValue}}}}}
var e=C.document.createElement("option"),f=C.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=E},post:function(d,k,h,l){function m(a){var b=(a=v.getOptionFromViewValue(a))&&a.element;b&&!b.selected&&(b.selected=!0);return a}function p(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var n=l[0],q=l[1],z=h.multiple;l=0;for(var t=k.children(),
B=t.length;l<B;l++)if(""===t[l].value){n.hasEmptyOption=!0;n.emptyOption=t.eq(l);break}k.empty();l=!!n.emptyOption;x(e.cloneNode(!1)).val("?");var v,A=c(h.ngOptions,k,d),C=b[0].createDocumentFragment();n.generateUnknownOptionValue=function(a){return"?"};z?(n.writeValue=function(a){if(v){var b=a&&a.map(m)||[];v.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},n.readValue=function(){var a=k.val()||[],b=[];r(a,function(a){(a=v.selectValueMap[a])&&
!a.disabled&&b.push(v.getViewValueFromOption(a))});return b},A.trackBy&&d.$watchCollection(function(){if(H(q.$viewValue))return q.$viewValue.map(function(a){return A.getTrackByValue(a)})},function(){q.$render()})):(n.writeValue=function(a){if(v){var b=k[0].options[k[0].selectedIndex],c=v.getOptionFromViewValue(a);b&&b.removeAttribute("selected");c?(k[0].value!==c.selectValue&&(n.removeUnknownOption(),k[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):n.selectUnknownOrEmptyOption(a)}},
n.readValue=function(){var a=v.selectValueMap[k.val()];return a&&!a.disabled?(n.unselectEmptyOption(),n.removeUnknownOption(),v.getViewValueFromOption(a)):null},A.trackBy&&d.$watch(function(){return A.getTrackByValue(q.$viewValue)},function(){q.$render()}));l&&(a(n.emptyOption)(d),k.prepend(n.emptyOption),8===n.emptyOption[0].nodeType?(n.hasEmptyOption=!1,n.registerOption=function(a,b){""===b.val()&&(n.hasEmptyOption=!0,n.emptyOption=b,n.emptyOption.removeClass("ng-scope"),q.$render(),b.on("$destroy",
function(){var a=n.$isEmptyOptionSelected();n.hasEmptyOption=!1;n.emptyOption=void 0;a&&q.$render()}))}):n.emptyOption.removeClass("ng-scope"));d.$watchCollection(A.getWatchables,function(){var a=v&&n.readValue();if(v)for(var b=v.items.length-1;0<=b;b--){var c=v.items[b];w(c.group)?Fb(c.element.parentNode):Fb(c.element)}v=A.getOptions();var d={};v.items.forEach(function(a){var b;if(w(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),C.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);
var c=e.cloneNode(!1);b.appendChild(c);p(a,c)}else b=e.cloneNode(!1),C.appendChild(b),p(a,b)});k[0].appendChild(C);q.$render();q.$isEmpty(a)||(b=n.readValue(),(A.trackBy||z?va(a,b):a===b)||(q.$setViewValue(b),q.$render()))})}}}}],ef=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,k){function h(a){g.text(a||"")}var l=k.count,m=k.$attr.when&&g.attr(k.$attr.when),p=k.offset||0,n=f.$eval(m)||{},q={},w=b.startSymbol(),t=b.endSymbol(),x=w+l+"-"+
p+t,v=ca.noop,A;r(k,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+K(c[2]),n[c]=g.attr(k.$attr[b]))});r(n,function(a,d){q[d]=b(a.replace(c,x))});f.$watch(l,function(b){var c=parseFloat(b),e=X(c);e||c in n||(c=a.pluralCat(c-p));c===A||e&&X(A)||(v(),e=q[c],z(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),v=E,h()):v=f.$watch(e,h),A=c)})}}}],qe=F("ngRef"),ff=["$parse",function(a){return{priority:-1,restrict:"A",compile:function(b,d){var c=wa(ua(b)),e=a(d.ngRef),f=e.assign||
function(){throw qe("nonassign",d.ngRef);};return function(a,b,h){var l;if(h.hasOwnProperty("ngRefRead"))if("$element"===h.ngRefRead)l=b;else{if(l=b.data("$"+h.ngRefRead+"Controller"),!l)throw qe("noctrl",h.ngRefRead,d.ngRef);}else l=b.data("$"+c+"Controller");l=l||b;f(a,l);b.on("$destroy",function(){e(a)===l&&f(a,null)})}}}}],gf=["$parse","$animate","$compile",function(a,b,d){var c=F("ngRepeat"),e=function(a,b,c,d,e,f,g){a[c]=d;e&&(a[e]=f);a.$index=b;a.$first=0===b;a.$last=b===g-1;a.$middle=!(a.$first||
a.$last);a.$odd=!(a.$even=0===(b&1))},f=function(a,b,c){return La(c)},g=function(a,b){return b};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(k,h){var l=h.ngRepeat,m=d.$$createComment("end ngRepeat",l),p=l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!p)throw c("iexp",l);var n=p[1],q=p[2],w=p[3],t=p[4],p=n.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!p)throw c("iidexp",
n);var x=p[3]||p[1],v=p[2];if(w&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(w)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(w)))throw c("badident",w);var z;if(t){var A={$id:La},y=a(t);z=function(a,b,c,d){v&&(A[v]=b);A[x]=c;A.$index=d;return y(a,A)}}return function(a,d,h,k,n){var p=T();a.$watchCollection(q,function(h){var k,q,t=d[0],s,y=T(),B,C,E,D,H,F,K;w&&(a[w]=h);if(ya(h))H=h,q=z||f;else for(K in q=z||g,H=[],h)ta.call(h,K)&&"$"!==K.charAt(0)&&H.push(K);
B=H.length;K=Array(B);for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],D=q(a,C,E,k),p[D])F=p[D],delete p[D],y[D]=F,K[k]=F;else{if(y[D])throw r(K,function(a){a&&a.scope&&(p[a.id]=a)}),c("dupes",l,D,E);K[k]={id:D,scope:void 0,clone:void 0};y[D]=!0}A&&(A[x]=void 0);for(s in p){F=p[s];D=tb(F.clone);b.leave(D);if(D[0].parentNode)for(k=0,q=D.length;k<q;k++)D[k].$$NG_REMOVED=!0;F.scope.$destroy()}for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],F=K[k],F.scope){s=t;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);F.clone[0]!==
s&&b.move(tb(F.clone),null,t);t=F.clone[F.clone.length-1];e(F.scope,k,x,E,v,C,B)}else n(function(a,c){F.scope=c;var d=m.cloneNode(!1);a[a.length++]=d;b.enter(a,null,t);t=d;F.clone=a;y[F.id]=F;e(F.scope,k,x,E,v,C,B)});p=y})}}}}],hf=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],$e=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,
d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],jf=Ra(function(a,b,d){a.$watchCollection(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,c){b.css(c,"")});a&&b.css(a)})}),kf=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],k=[],h=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){for(var d,
e;h.length;)a.cancel(h.pop());d=0;for(e=l.length;d<e;++d){var q=tb(k[d].clone);l[d].$destroy();(h[d]=a.leave(q)).done(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");k.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],lf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,
b,c){return c[b-1]!==a});r(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),mf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),zh=F("ngTransclude"),of=["$compile",function(a){return{restrict:"EAC",compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,k){function h(){d(a,function(a){b.append(a)})}if(!k)throw zh("orphan",
za(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;k(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Pa||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(h(),c.$destroy())},null,f);f&&!k.isSlotFilled(f)&&h()}}}}],Oe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],Ah={$setViewValue:E,$render:E},Bh=["$element",
"$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Hb;e.selectValueMap={};e.ngModelCtrl=Ah;e.multiple=!1;e.unknownOption=x(C.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);
a.prepend(e.unknownOption);Oa(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Oa(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+La(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Oa(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&Oa(e.emptyOption,!1)};b.$on("$destroy",
function(){e.renderUnknownOption=E});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Oa(x(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=La(b),a.val(c in e.selectValueMap?c:b),Oa(x(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Ja(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=
b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===e.unknownOption[0]};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){null==
a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a)};var g=!1,k=!1;e.registerOption=function(a,b,f,g,k){if(f.$attr.ngValue){var q,r;f.$observe("value",function(a){var d,f=b.prop("selected");w(r)&&(e.removeOption(q),delete e.selectValueMap[r],d=!0);r=La(a);q=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");
w(q)&&(e.removeOption(q),d=!0);q=a;e.addOption(a,b);d&&f&&c()}):k?a.$watch(k,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Pe=function(){return{restrict:"E",
require:["select","?ngModel"],controller:Bh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];r(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){r(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,
b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Oa(x(b),c)})};var g,k=NaN;a.$watch(function(){k!==f.$viewValue||va(g,f.$viewValue)||(g=ja(f.$viewValue),f.$render());k=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=E},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Qe=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;w(d.ngValue)||
(w(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var h=b.parent();(h=h.data("$selectController")||h.parent().data("$selectController"))&&h.registerOption(a,b,d,c,e)}}}}],$c=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.hasOwnProperty("required")||a(c.ngRequired)(b);c.ngRequired||(c.required=!0);e.$validators.required=function(a,b){return!f||!e.$isEmpty(b)};c.$observe("required",function(a){f!==a&&(f=
a,e.$validate())})}}}}],Zc=["$parse",function(a){return{restrict:"A",require:"?ngModel",compile:function(b,d){var c,e;d.ngPattern&&(c=d.ngPattern,e="/"===d.ngPattern.charAt(0)&&ie.test(d.ngPattern)?function(){return d.ngPattern}:a(d.ngPattern));return function(a,b,d,h){if(h){var l=d.pattern;d.ngPattern?l=e(a):c=d.pattern;var m=he(l,c,b);d.$observe("pattern",function(a){var d=m;m=he(a,c,b);(d&&d.toString())!==(m&&m.toString())&&h.$validate()});h.$validators.pattern=function(a,b){return h.$isEmpty(b)||
z(m)||m.test(b)}}}}}}],bd=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.maxlength||a(c.ngMaxlength)(b),g=Tb(f);c.$observe("maxlength",function(a){f!==a&&(g=Tb(a),f=a,e.$validate())});e.$validators.maxlength=function(a,b){return 0>g||e.$isEmpty(b)||b.length<=g}}}}}],ad=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.minlength||a(c.ngMinlength)(b),g=Tb(f)||-1;c.$observe("minlength",function(a){f!==
a&&(g=Tb(a)||-1,f=a,e.$validate())});e.$validators.minlength=function(a,b){return e.$isEmpty(b)||b.length>=g}}}}}];C.angular.bootstrap?C.console&&console.log("WARNING: Tried to load AngularJS more than once."):(Fe(),Je(ca),ca.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],
ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a",
"short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),x(function(){Ae(C.document,
Uc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map


/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/metro4/build/js/metro.min.js":
/*!***************************************************!*\
  !*** ./node_modules/metro4/build/js/metro.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Metro 4 Components Library v4.3.6  (https://metroui.org.ua)
 * Copyright 2012-2020 Sergey Pimenov
 * Built at 15/03/2020 11:45:17
 * Licensed under MIT
 */

!function(e){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(function(){"use strict";window.hideM4QVersion=!0,function(e,h){var s=["opacity","zIndex"];function o(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}function v(e){return e===h||null===e}function g(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}function C(e){var t;return!(!e||"[object Object]"!==Object.prototype.toString.call(e))&&(!(t=e.prototype!==h)||t.constructor&&"function"==typeof t.constructor)}function b(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function a(e){return e instanceof Object&&"length"in e}function i(e,t){return t=t||" ",e.split(t).map(function(e){return(""+e).trim()}).filter(function(e){return""!==e})}function f(e,t){return t||(t=[0,""]),e=String(e),t[0]=parseFloat(e),t[1]=e.match(/[\d.\-+]*\s*(.*)/)[1]||"",t}function r(e,t,n){t=g(t),-1<["scrollLeft","scrollTop"].indexOf(t)?e[t]=parseInt(n):e.style[t]=isNaN(n)||-1<s.indexOf(""+t)?n:n+"px"}function n(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}function l(t){try{return JSON.parse(t)}catch(e){return t}}function c(e,t,n){var i;if(v(n)&&1===e.nodeType)if(i="data-"+t.replace(/[A-Z]/g,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n=l(n)}catch(e){}S.set(e,t,n)}else n=h;return n}function u(e){return"string"!=typeof e?h:e.replace(/\-/g,"").toLowerCase()}!function(t,i){if(!t.setImmediate){var s,n,a=1,o={},r=!1,e=Object.getPrototypeOf&&Object.getPrototypeOf(t);e=e&&e.setTimeout?e:t,n="setImmediate$"+Math.random()+"$",t.addEventListener("message",function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(n)&&c(+e.data.slice(n.length))},!1),s=function(e){t.postMessage(n+e,"*")},e.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];return o[a]={callback:e,args:t},s(a),a++},e.clearImmediate=l}function l(e){delete o[e]}function c(e){if(r)setTimeout(c,0,e);else{var t=o[e];if(t){r=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(i,n)}}(t)}finally{l(e),r=!1}}}}}(window),function(e,i){if(!e.Promise){var n,s="pending",a="sealed",o="fulfilled",r="rejected",l=function(){},c="undefined"!=typeof setImmediate?setImmediate:setTimeout,d=[];y.prototype={constructor:y,state_:s,then_:null,data_:i,then:function(e,t){var n={owner:this,then:new this.constructor(l),fulfilled:e,rejected:t};return this.state_===o||this.state_===r?u(p,n):this.then_.push(n),n.then},done:function(e){return this.then(e,null)},always:function(e){return this.then(e,e)},catch:function(e){return this.then(null,e)}},y.all=function(r){if(!t(r))throw new TypeError("You must pass an array to Promise.all().");return new this(function(n,e){var i=[],s=0;function t(t){return s++,function(e){i[t]=e,--s||n(i)}}for(var a,o=0;o<r.length;o++)(a=r[o])&&"function"==typeof a.then?a.then(t(o),e):i[o]=a;s||n(i)})},y.race=function(s){if(!t(s))throw new TypeError("You must pass an array to Promise.race().");return new this(function(e,t){for(var n,i=0;i<s.length;i++)(n=s[i])&&"function"==typeof n.then?n.then(e,t):e(n)})},y.resolve=function(t){return t&&"object"==typeof t&&t.constructor===this?t:new this(function(e){e(t)})},y.reject=function(n){return new this(function(e,t){t(n)})},void 0===e.Promise&&(e.Promise=y)}function t(e){return"[object Array]"===Object.prototype.toString.call(e)}function h(){for(var e=0;e<d.length;e++)d[e][0](d[e][1]);n=!(d=[])}function u(e,t){d.push([e,t]),n||(n=!0,c(h,0))}function p(e){var t=e.owner,n=t.state_,i=t.data_,s=e[n],a=e.then;if("function"==typeof s){n=o;try{i=s(i)}catch(e){g(a,e)}}f(a,i)||(n===o&&m(a,i),n===r&&g(a,i))}function f(t,n){var i;try{if(t===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"==typeof n)){var e=n.then;if("function"==typeof e)return e.call(n,function(e){i||(i=!0,n!==e?m(t,e):v(t,e))},function(e){i||(i=!0,g(t,e))}),!0}}catch(e){return i||g(t,e),!0}return!1}function m(e,t){e!==t&&f(e,t)||v(e,t)}function v(e,t){e.state_===s&&(e.state_=a,e.data_=t,u(b,e))}function g(e,t){e.state_===s&&(e.state_=a,e.data_=t,u(w,e))}function C(e){var t=e.then_;e.then_=i;for(var n=0;n<t.length;n++)p(t[n])}function b(e){e.state_=o,C(e)}function w(e){e.state_=r,C(e)}function y(e){if("function"!=typeof e)throw new TypeError("Promise constructor takes a function argument");if(!this instanceof y)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this.then_=[],function(e,t){function n(e){g(t,e)}try{e(function(e){m(t,e)},n)}catch(e){n(e)}}(e,this)}}(window);var t="v1.0.6. Built at 14/02/2020 19:08:43",d=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,p=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,w=function(e,t){return new w.init(e,t)};w.version=t,w.fn=w.prototype={version:t,constructor:w,length:0,uid:"",push:[].push,sort:[].sort,splice:[].splice,indexOf:[].indexOf},w.extend=w.fn.extend=function(){var e,t,n=arguments[0]||{},i=1,s=arguments.length;for("object"!=typeof n&&"function"!=typeof n&&(n={}),i===s&&(n=this,i--);i<s;i++)if(null!=(e=arguments[i]))for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n},void 0===window.hideM4QVersion&&console.info("m4q "+w.version);function m(){return Date.now()}function y(e){var t=document.createElement("script");if(t.type="text/javascript",v(e))return w(t);var n=w(e)[0];return n.src?t.src=n.src:t.textContent=n.innerText,document.body.appendChild(t),n.parentNode&&n.parentNode.removeChild(n),t}w.extend({intervalId:-1,intervalQueue:[],intervalTicking:!1,intervalTickId:null,setInterval:function(e,t){var n=this;if(this.intervalId++,this.intervalQueue.push({id:this.intervalId,fn:e,interval:t,lastTime:m()}),!this.intervalTicking){var i=function(){n.intervalTickId=requestAnimationFrame(i),w.each(n.intervalQueue,function(){var e=this;(e.interval<17||m()-e.lastTime>=e.interval)&&(e.fn(),e.lastTime=m())})};this.intervalTicking=!0,i()}return this.intervalId},clearInterval:function(e){for(var t=0;t<this.intervalQueue.length;t++)if(e===this.intervalQueue[t].id){this.intervalQueue.splice(t,1);break}0===this.intervalQueue.length&&(O(this.intervalTickId),this.intervalTicking=!1)},setTimeout:function(e,t){var n=this,i=this.setInterval(function(){n.clearInterval(i),e()},t);return i},clearTimeout:function(e){return this.clearInterval(e)}}),w.fn.extend({index:function(e){var t,n=-1;return 0===this.length||v(t=v(e)?this[0]:e instanceof w&&0<e.length?e[0]:"string"==typeof e?w(e)[0]:h)||t&&t.parentNode&&w.each(t.parentNode.children,function(e){this===t&&(n=e)}),n},get:function(e){return e===h?this.items():e<0?this[e+this.length]:this[e]},eq:function(e){return!v(e)&&0<this.length?w.extend(w(this.get(e)),{_prevObj:this}):this},is:function(t){var n=!1;return 0!==this.length&&(t instanceof w?this.same(t):(":selected"===t?this.each(function(){this.selected&&(n=!0)}):":checked"===t?this.each(function(){this.checked&&(n=!0)}):":hidden"===t?this.each(function(){var e=getComputedStyle(this);"hidden"!==this.getAttribute("type")&&!this.hidden&&"none"!==e.display&&"hidden"!==e.visibility&&0!==parseInt(e.opacity)||(n=!0)}):"string"==typeof t&&-1===[":selected"].indexOf(t)?this.each(function(){p.call(this,t)&&(n=!0)}):a(t)?this.each(function(){var e=this;w.each(t,function(){e===this&&(n=!0)})}):"object"==typeof t&&1===t.nodeType&&this.each(function(){this===t&&(n=!0)}),n))},same:function(e){var t=!0;return e instanceof w||(e=w(e)),this.length===e.length&&(this.each(function(){-1===e.items().indexOf(this)&&(t=!1)}),t)},last:function(){return this.eq(this.length-1)},first:function(){return this.eq(0)},odd:function(){var e=this.filter(function(e,t){return t%2==0});return w.extend(e,{_prevObj:this})},even:function(){var e=this.filter(function(e,t){return t%2!=0});return w.extend(e,{_prevObj:this})},filter:function(e){if("string"==typeof e){var t=e;e=function(e){return p.call(e,t)}}return w.extend(w.merge(w(),[].filter.call(this,e)),{_prevObj:this})},find:function(e){var t,n=[];return e instanceof w?e:(t=0===this.length?this:(this.each(function(){void 0!==this.querySelectorAll&&(n=n.concat([].slice.call(this.querySelectorAll(e))))}),w.merge(w(),n)),w.extend(t,{_prevObj:this}))},contains:function(e){return 0<this.find(e).length},children:function(t){var e,n=[];return t instanceof w?t:(this.each(function(){for(e=0;e<this.children.length;e++)1===this.children[e].nodeType&&n.push(this.children[e])}),n=t?n.filter(function(e){return p.call(e,t)}):n,w.extend(w.merge(w(),n),{_prevObj:this}))},parent:function(t){var e=[];if(0!==this.length)return t instanceof w?t:(this.each(function(){this.parentNode&&-1===e.indexOf(this.parentNode)&&e.push(this.parentNode)}),e=t?e.filter(function(e){return p.call(e,t)}):e,w.extend(w.merge(w(),e),{_prevObj:this}))},parents:function(t){var n=[];if(0!==this.length)return t instanceof w?t:(this.each(function(){for(var e=this.parentNode;e;)1===e.nodeType&&-1===n.indexOf(e)&&(v(t)?n.push(e):p.call(e,t)&&n.push(e)),e=e.parentNode}),w.extend(w.merge(w(),n),{_prevObj:this}))},siblings:function(t){var n=[];if(0!==this.length)return t instanceof w?t:(this.each(function(){var e=this;e.parentNode&&w.each(e.parentNode.children,function(){e!==this&&n.push(this)})}),t&&(n=n.filter(function(e){return p.call(e,t)})),w.extend(w.merge(w(),n),{_prevObj:this}))},_siblingAll:function(t,n){var i=[];if(0!==this.length)return n instanceof w?n:(this.each(function(){for(var e=this;e&&(e=e[t]);)i.push(e)}),n&&(i=i.filter(function(e){return p.call(e,n)})),w.extend(w.merge(w(),i),{_prevObj:this}))},_sibling:function(t,n){var i=[];if(0!==this.length)return n instanceof w?n:(this.each(function(){var e=this[t];e&&1===e.nodeType&&i.push(e)}),n&&(i=i.filter(function(e){return p.call(e,n)})),w.extend(w.merge(w(),i),{_prevObj:this}))},prev:function(e){return this._sibling("previousElementSibling",e)},next:function(e){return this._sibling("nextElementSibling",e)},prevAll:function(e){return this._siblingAll("previousElementSibling",e)},nextAll:function(e){return this._siblingAll("nextElementSibling",e)},closest:function(t){var n=[];if(0!==this.length)return t instanceof w?t:t?(this.each(function(){for(var e=this;e&&e;){if(p.call(e,t))return void n.push(e);e=e.parentElement}}),w.extend(w.merge(w(),n.reverse()),{_prevObj:this})):this.parent(t)},has:function(e){var t=[];if(0!==this.length)return this.each(function(){0<w(this).children(e).length&&t.push(this)}),w.extend(w.merge(w(),t),{_prevObj:this})},back:function(e){var t;if(!0===e)for(t=this._prevObj;t&&t._prevObj;)t=t._prevObj;else t=this._prevObj?this._prevObj:this;return t}}),w.extend({script:function(e){if(v(e))return y();var t=w(e)[0];t.tagName&&"SCRIPT"===t.tagName?y(t):w.each(w(t).find("script"),function(){y(this)})}}),w.fn.extend({script:function(){return this.each(function(){w.script(this)})}}),w.fn.extend({_prop:function(e,t){return 1===arguments.length?0===this.length?h:this[0][e]:(v(t)&&(t=""),this.each(function(){this[e]=t,"innerHTML"===e&&w.script(this)}))},prop:function(e,t){return 1===arguments.length?this._prop(e):this._prop(e,void 0===t?"":t)},val:function(t){return v(t)?0===this.length?h:this[0].value:this.each(function(){var e=w(this);void 0!==this.value?this.value=t:e.html(t)})},html:function(e){var t=[];return 0===arguments.length?this._prop("innerHTML"):(e instanceof w?e.each(function(){t.push(w(this).outerHTML())}):t.push(e),this._prop("innerHTML",1===t.length&&v(t[0])?"":t.join("\n")),this)},outerHTML:function(){return this._prop("outerHTML")},text:function(e){return 0===arguments.length?this._prop("textContent"):this._prop("textContent",void 0===e?"":e)},innerText:function(e){return 0===arguments.length?this._prop("innerText"):this._prop("innerText",void 0===e?"":e)},empty:function(){return this.each(function(){void 0!==this.innerHTML&&(this.innerHTML="")})},clear:function(){return this.empty()}}),w.each=function(e,n){var t=0;if(a(e))[].forEach.call(e,function(e,t){n.apply(e,[t,e])});else for(var i in e)e.hasOwnProperty(i)&&n.apply(e[i],[i,e[i],t++]);return e},w.fn.extend({each:function(e){return w.each(this,e)}});var x=function(e){this.expando="DATASET:UID:"+e.toUpperCase(),x.uid++};x.uid=-1,x.prototype={cache:function(e){var t=e[this.expando];return t||(t={},n(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,s=this.cache(e);if("string"==typeof t)s[g(t)]=n;else for(i in t)t.hasOwnProperty(i)&&(s[g(i)]=t[i]);return s},get:function(e,t){return t===h?this.cache(e):e[this.expando]&&e[this.expando][g(t)]},access:function(e,t,n){return t===h||t&&"string"==typeof t&&n===h?this.get(e,t):(this.set(e,t,n),n!==h?n:t)},remove:function(e,t){var n,i=e[this.expando];if(i!==h){if(t!==h){n=(t=Array.isArray(t)?t.map(g):(t=g(t))in i?[t]:t.match(/[^\x20\t\r\n\f]+/g)||[]).length;for(;n--;)delete i[t[n]]}return t!==h&&!b(i)||(e.nodeType?e[this.expando]=h:delete e[this.expando]),!0}},hasData:function(e){var t=e[this.expando];return t!==h&&!b(t)}};var S=new x("m4q");w.extend({hasData:function(e){return S.hasData(e)},data:function(e,t,n){return S.access(e,t,n)},removeData:function(e,t){return S.remove(e,t)},dataSet:function(e){if(v(e))return S;if(-1<["INTERNAL","M4Q"].indexOf(e.toUpperCase()))throw Error("You can not use reserved name for your dataset");return new x(e)}}),w.fn.extend({data:function(e,t){var n,i,s,a,o,r;if(0!==this.length){if(i=this[0],0!==arguments.length)return 1===arguments.length?((n=S.get(i,e))===h&&1===i.nodeType&&i.hasAttribute("data-"+e)&&(n=i.getAttribute("data-"+e)),n):this.each(function(){S.set(this,e,t)});if(this.length&&(s=S.get(i),1===i.nodeType))for(r=(a=i.attributes).length;r--;)a[r]&&0===(o=a[r].name).indexOf("data-")&&c(i,o=g(o.slice(5)),s[o]);return s}},removeData:function(e){return this.each(function(){S.remove(this,e)})},origin:function(e,t,n){if(0===this.length)return this;if(v(e)&&v(t))return w.data(this[0]);if(v(t)){var i=w.data(this[0],"origin-"+e);return v(i)?n:i}return this.data("origin-"+e,t),this}}),w.extend({uniqueId:function(){var n=(new Date).getTime();return"m4q-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===e?t:3&t|8).toString(16)})},toArray:function(e){var t,n=[];for(t=0;t<e.length;t++)n.push(e[t]);return n},import:function(e){var t=[];return this.each(e,function(){t.push(this)}),this.merge(w(),t)},merge:function(e,t){for(var n=+t.length,i=0,s=e.length;i<n;i++)e[s++]=t[i];return e.length=s,e},type:function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)]$/,"$1").toLowerCase()},sleep:function(e){for(e+=(new Date).getTime();new Date<e;);},isSelector:function(e){if("string"!=typeof e)return!1;if(-1!==e.indexOf("<"))return!1;try{w(e)}catch(e){return!1}return!0},remove:function(e){return w(e).remove()},camelCase:function(e){return g(e)},isPlainObject:function(e){return C(e)},isEmptyObject:function(e){return b(e)},isArrayLike:function(e){return a(e)},acceptData:function(e){return n(e)},not:function(e){return v(e)},parseUnit:function(e,t){return f(e,t)},unit:function(e,t){return f(e,t)},isVisible:function(e){return o(e)},isHidden:function(e){return function(e){var t=getComputedStyle(e);return!o(e)||0==+t.opacity||e.hidden||"hidden"===t.visibility}(e)},matches:function(e,t){return p.call(e,t)},serializeToArray:function(e){var t=w(e)[0];if(t&&"FORM"===t.nodeName){var n,i,s=[];for(n=t.elements.length-1;0<=n;n-=1)if(""!==t.elements[n].name)switch(t.elements[n].nodeName){case"INPUT":switch(t.elements[n].type){case"checkbox":case"radio":t.elements[n].checked&&s.push(t.elements[n].name+"="+encodeURIComponent(t.elements[n].value));break;case"file":break;default:s.push(t.elements[n].name+"="+encodeURIComponent(t.elements[n].value))}break;case"TEXTAREA":s.push(t.elements[n].name+"="+encodeURIComponent(t.elements[n].value));break;case"SELECT":switch(t.elements[n].type){case"select-one":s.push(t.elements[n].name+"="+encodeURIComponent(t.elements[n].value));break;case"select-multiple":for(i=t.elements[n].options.length-1;0<=i;i-=1)t.elements[n].options[i].selected&&s.push(t.elements[n].name+"="+encodeURIComponent(t.elements[n].options[i].value))}break;case"BUTTON":switch(t.elements[n].type){case"reset":case"submit":case"button":s.push(t.elements[n].name+"="+encodeURIComponent(t.elements[n].value))}}return s}console.warn("Element is not a HTMLFromElement")},serialize:function(e){return w.serializeToArray(e).join("&")}}),w.fn.extend({items:function(){return w.toArray(this)}}),function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var T=Event.prototype.stopPropagation,k=Event.prototype.preventDefault;Event.prototype.stopPropagation=function(){this.isPropagationStopped=!0,T.apply(this,arguments)},Event.prototype.preventDefault=function(){this.isPreventedDefault=!0,k.apply(this,arguments)},Event.prototype.stop=function(e){return e?this.stopImmediatePropagation():this.stopPropagation()},w.extend({events:[],eventHooks:{},eventUID:-1,setEventHandler:function(e){var t,n,i=-1;if(0<this.events.length)for(t=0;t<this.events.length;t++)if(null===this.events[t].handler){i=t;break}return n={element:e.el,event:e.event,handler:e.handler,selector:e.selector,ns:e.ns,id:e.id,options:e.options},-1===i?(this.events.push(n),this.events.length-1):(this.events[i]=n,i)},getEventHandler:function(e){return this.events[e]!==h&&null!==this.events[e]?(this.events[e]=null,this.events[e].handler):h},off:function(){return w.each(this.events,function(){this.element.removeEventListener(this.event,this.handler,!0)}),this.events=[],this},getEvents:function(){return this.events},getEventHooks:function(){return this.eventHooks},addEventHook:function(e,t,n){return v(n)&&(n="before"),w.each(i(e),function(){this.eventHooks[g(n+"-"+this)]=t}),this},removeEventHook:function(e,t){return v(t)&&(t="before"),w.each(i(e),function(){delete this.eventHooks[g(t+"-"+this)]}),this},removeEventHooks:function(e){var t=this;return v(e)?this.eventHooks={}:w.each(i(e),function(){delete t.eventHooks[g(type+"-"+this)]}),this}}),w.fn.extend({on:function(e,l,c,d){if(0!==this.length)return"function"==typeof l&&(d=c,c=l,l=h),C(d)||(d={}),this.each(function(){var r=this;w.each(i(e),function(){var e,s,t,n=this.split("."),a=u(n[0]),o=d.ns?d.ns:n[1];w.eventUID++,e=function(e){var t=e.target,n=w.eventHooks[g("before-"+a)],i=w.eventHooks[g("after-"+a)];if("function"==typeof n&&n.call(t,e),l)for(;t&&t!==r;){if(p.call(t,l)&&(c.call(t,e),e.isPropagationStopped)){e.stopImmediatePropagation();break}t=t.parentNode}else c.call(r,e);"function"==typeof i&&i.call(t,e),d.once&&(s=+w(r).origin("event-"+e.type+(l?":"+l:"")+(o?":"+o:"")),isNaN(s)||w.events.splice(s,1))},Object.defineProperty(e,"name",{value:c.name&&""!==c.name?c.name:"func_event_"+a+"_"+w.eventUID}),t=a+(l?":"+l:"")+(o?":"+o:""),r.addEventListener(a,e,!b(d)&&d),s=w.setEventHandler({el:r,event:a,handler:e,selector:l,ns:o,id:w.eventUID,options:!b(d)&&d}),w(r).origin("event-"+t,s)})})},one:function(e,t,n,i){return C(i)||(i={}),i.once=!0,this.on.apply(this,[e,t,n,i])},off:function(e,o,r){return C(o)&&(r=o,o=null),C(r)||(r={}),v(e)||"all"===e.toLowerCase()?this.each(function(){var t=this;w.each(w.events,function(){var e=this;e.element===t&&(t.removeEventListener(e.event,e.handler,e.options),e.handler=null,w(t).origin("event-"+name+(e.selector?":"+e.selector:"")+(e.ns?":"+e.ns:""),null))})}):this.each(function(){var a=this;w.each(i(e),function(){var e,t,n=this.split("."),i=u(n[0]),s=r.ns?r.ns:n[1];e="event-"+i+(o?":"+o:"")+(s?":"+s:""),(t=w(a).origin(e))!==h&&w.events[t].handler&&(a.removeEventListener(i,w.events[t].handler,w.events[t].options),w.events[t].handler=null),w(a).origin(e,null)})})},trigger:function(e,t){return this.fire(e,t)},fire:function(e,t){var n;if(0!==this.length){if(n=u(e),-1<["focus","blur"].indexOf(n))return this[0][n](),this;var i=document.createEvent("Events");return i.detail=t,i.initEvent(n,!0,!1),this.each(function(){this.dispatchEvent(i)})}}}),"blur focus resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu touchstart touchend touchmove touchcancel".split(" ").forEach(function(i){w.fn[i]=function(e,t,n){return 0<arguments.length?this.on(i,e,t,n):this.fire(i)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.ready=function(e,t){document.addEventListener("DOMContentLoaded",e,t||!1)},w.load=function(e){return w(window).on("load",e)},w.unload=function(e){return w(window).on("unload",e)},w.fn.extend({unload:function(e){return 0===this.length||this[0].self!==window?h:w.unload(e)}}),w.beforeunload=function(t){return"string"==typeof t?w(window).on("beforeunload",function(e){return e.returnValue=t}):w(window).on("beforeunload",t)},w.fn.extend({beforeunload:function(e){return 0===this.length||this[0].self!==window?h:w.beforeunload(e)}}),w.fn.extend({ready:function(e){if(this.length&&this[0]===document&&"function"==typeof e)return w.ready(e)}}),w.ajax=function(m){return new Promise(function(n,i){function s(e,t){"function"==typeof e&&e.apply(null,t)}function e(e){return-1!==["GET","JSON"].indexOf(e)}var t,a,o=new XMLHttpRequest,r=(m.method||"GET").toUpperCase(),l=[],c=!!v(m.async)||m.async,d=m.url;if(m.data instanceof HTMLFormElement){var h=m.data.getAttribute("action"),u=m.data.getAttribute("method");v(d)&&h&&""!==h.trim()&&(d=h),u&&""!==u.trim()&&(r=u.toUpperCase())}if(m.timeout&&(o.timeout=m.timeout),m.withCredentials&&(o.withCredentials=m.withCredentials),m.data instanceof HTMLFormElement)t=w.serialize(m.data);else if(m.data instanceof HTMLElement&&m.data.getAttribute("type")&&"file"===m.data.getAttribute("type").toLowerCase()){var p=m.data.getAttribute("name");t=new FormData;for(var f=0;f<m.data.files.length;f++)t.append(p,m.data.files[f])}else C(m.data)?(m.data,a=[],w.each(m.data,function(e,t){var n=function(e){return"string"==typeof e||"boolean"==typeof e||"number"==typeof e}(t)?t:JSON.stringify(t);a.push(e+"="+n)}),t=a.join("&")):m.data instanceof FormData?t=m.data:"string"==typeof m.data?t=m.data:(t=new FormData).append("_data",JSON.stringify(m.data));e(r)&&(d+="string"==typeof t?"?"+t:b(t)?"":"?"+JSON.stringify(t)),o.open(r,d,c,m.user,m.password),m.headers&&w.each(m.headers,function(e,t){o.setRequestHeader(e,t),l.push(e)}),e(r)||-1===l.indexOf("Content-type")&&!1!==m.contentType&&o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.send(t),o.addEventListener("load",function(e){if(4===o.readyState&&o.status<300){var t=m.returnValue&&"xhr"===m.returnValue?o:o.response;if(m.parseJson)try{t=JSON.parse(t)}catch(e){t={}}s(n,[t]),s(m.onSuccess,[e,o])}else s(i,[o]),s(m.onFail,[e,o]);s(m.onLoad,[e,o])}),w.each(["readystatechange","error","timeout","progress","loadstart","loadend","abort"],function(){var t=g("on-"+("readystatechange"===this?"state":this));o.addEventListener(t,function(e){s(m[t],[e,o])})})})},["get","post","put","patch","delete","json"].forEach(function(a){w[a]=function(e,t,n){var i=a.toUpperCase(),s={method:"JSON"===i?"GET":i,url:e,data:t,parseJson:"JSON"===i};return w.ajax(w.extend({},s,n))}}),w.fn.extend({load:function(e,t,n){var i=this;return this[0].self===window?w.load(e):w.get(e,t,n).then(function(e){i.each(function(){this.innerHTML=e})})}}),w.fn.extend({style:function(e,t){var n;function i(e,t,n){return-1<["scrollLeft","scrollTop"].indexOf(t)?w(e)[t]():getComputedStyle(e,n)[t]}if("string"==typeof e&&0===this.length)return h;if(0===this.length)return this;if(n=this[0],v(e)||"all"===e)return getComputedStyle(n,t);var s={},a=e.split(", ").map(function(e){return(""+e).trim()});return 1===a.length?i(n,a[0],t):(w.each(a,function(){s[this]=i(n,this,t)}),s)},removeStyleProperty:function(e){if(v(e)||0===this.length)return this;var t=e.split(", ").map(function(e){return(""+e).trim()});return this.each(function(){var e=this;w.each(t,function(){e.style.removeProperty(this)})})},css:function(e,t){return"string"==typeof(e=e||"all")&&v(t)?this.style(e):this.each(function(){var n=this;"object"==typeof e?w.each(e,function(e,t){r(n,e,t)}):"string"==typeof e&&r(n,e,t)})},scrollTop:function(e){return v(e)?0===this.length?h:this[0]===window?pageYOffset:this[0].scrollTop:this.each(function(){this.scrollTop=e})},scrollLeft:function(e){return v(e)?0===this.length?h:this[0]===window?pageXOffset:this[0].scrollLeft:this.each(function(){this.scrollLeft=e})}}),w.fn.extend({addClass:function(){},removeClass:function(){},toggleClass:function(){},containsClass:function(e){return this.hasClass(e)},hasClass:function(e){var t=!1,n=e.split(" ").filter(function(e){return""!==(""+e).trim()});return!v(e)&&(this.each(function(){var e=this;w.each(n,function(){!t&&e.classList&&e.classList.contains(this)&&(t=!0)})}),t)},clearClasses:function(){return this.each(function(){this.className=""})},cls:function(e){return 0===this.length?h:e?this[0].className.split(" "):this[0].className}}),["add","remove","toggle"].forEach(function(i){w.fn[i+"Class"]=function(n){return v(n)||""===(""+n).trim()?this:this.each(function(){var e=this,t=void 0!==e.classList;w.each(n.split(" ").filter(function(e){return""!==(""+e).trim()}),function(){t&&e.classList[i](this)})})}}),w.parseHTML=function(e,t){var n,i,s,a,o=[];if("string"!=typeof e)return[];if(e=e.trim(),(n=(s=document.implementation.createHTMLDocument("")).createElement("base")).href=document.location.href,s.head.appendChild(n),a=s.body,i=d.exec(e))o.push(document.createElement(i[1]));else{a.innerHTML=e;for(var r=0;r<a.childNodes.length;r++)o.push(a.childNodes[r])}return!t||t instanceof w||!C(t)||w.each(o,function(){for(var e in t)t.hasOwnProperty(e)&&this.setAttribute(e,t[e])}),o},w.fn.extend({_size:function(e,t){if(0!==this.length){if(v(t)){var n=this[0];if("height"===e)return n===window?window.innerHeight:n===document?n.body.clientHeight:parseInt(getComputedStyle(n).height);if("width"===e)return n===window?window.innerWidth:n===document?n.body.clientWidth:parseInt(getComputedStyle(n).width)}return this.each(function(){this!==window&&this!==document&&(this.style[e]=isNaN(t)?t:t+"px")})}},height:function(e){return this._size("height",e)},width:function(e){return this._size("width",e)},_sizeOut:function(s,a){var e,t,n,i;if(0!==this.length)return v(a)||"boolean"==typeof a?(t=(e=this[0])["width"===s?"offsetWidth":"offsetHeight"],n=getComputedStyle(e),i=t+parseInt(n["width"===s?"margin-left":"margin-top"])+parseInt(n["width"===s?"margin-right":"margin-bottom"]),!0===a?i:t):this.each(function(){if(this!==window&&this!==document){var e,t=getComputedStyle(this),n="width"===s?parseInt(t["border-left-width"])+parseInt(t["border-right-width"]):parseInt(t["border-top-width"])+parseInt(t["border-bottom-width"]),i="width"===s?parseInt(t["padding-left"])+parseInt(t["padding-right"]):parseInt(t["padding-top"])+parseInt(t["padding-bottom"]);e=w(this)[s](a)[s]()-n-i,this.style[s]=e+"px"}})},outerWidth:function(e){return this._sizeOut("width",e)},outerHeight:function(e){return this._sizeOut("height",e)},padding:function(e){if(0!==this.length){var t=getComputedStyle(this[0],e);return{top:parseInt(t["padding-top"]),right:parseInt(t["padding-right"]),bottom:parseInt(t["padding-bottom"]),left:parseInt(t["padding-left"])}}},margin:function(e){if(0!==this.length){var t=getComputedStyle(this[0],e);return{top:parseInt(t["margin-top"]),right:parseInt(t["margin-right"]),bottom:parseInt(t["margin-bottom"]),left:parseInt(t["margin-left"])}}},border:function(e){if(0!==this.length){var t=getComputedStyle(this[0],e);return{top:parseInt(t["border-top-width"]),right:parseInt(t["border-right-width"]),bottom:parseInt(t["border-bottom-width"]),left:parseInt(t["border-left-width"])}}}}),w.fn.extend({offset:function(a){var e;return v(a)?0===this.length?h:{top:(e=this[0].getBoundingClientRect()).top+pageYOffset,left:e.left+pageXOffset}:this.each(function(){var e=w(this),t=a.top,n=a.left,i=getComputedStyle(this).position,s=e.offset();"static"===i&&e.css("position","relative"),-1===["absolute","fixed"].indexOf(i)&&(t-=s.top,n-=s.left),e.css({top:t,left:n})})},position:function(e){var t,n,i=0,s=0;return e=!v(e)&&l(e),0===this.length?h:(t=this[0],n=getComputedStyle(t),e&&(i=parseInt(n["margin-left"]),s=parseInt(n["margin-top"])),{left:t.offsetLeft-i,top:t.offsetTop-s})},left:function(e,t){if(0!==this.length)return v(e)?this.position(t).left:"boolean"==typeof e?(t=e,this.position(t).left):this.each(function(){w(this).css({left:e})})},top:function(e,t){if(0!==this.length)return v(e)?this.position(t).top:"boolean"==typeof e?(t=e,this.position(t).top):this.each(function(){w(this).css({top:e})})},coord:function(){return 0===this.length?h:this[0].getBoundingClientRect()},pos:function(){if(0!==this.length)return{top:parseInt(w(this[0]).style("top")),left:parseInt(w(this[0]).style("left"))}}}),w.fn.extend({attr:function(e,t){var n={};return 0===this.length&&0===arguments.length?h:this.length&&0===arguments.length?(w.each(this[0].attributes,function(){n[this.nodeName]=this.nodeValue}),n):"string"==typeof e&&t===h?this.length&&1===this[0].nodeType&&this[0].hasAttribute(e)?this[0].getAttribute(e):h:this.each(function(){var n=this;C(e)?w.each(e,function(e,t){n.setAttribute(e,t)}):n.setAttribute(e,t)})},removeAttr:function(e){var t;return v(e)?this.each(function(){var e=this;w.each(this.attributes,function(){e.removeAttribute(this)})}):(t="string"==typeof e?e.split(",").map(function(e){return e.trim()}):e,this.each(function(){var e=this;w.each(t,function(){e.hasAttribute(this)&&e.removeAttribute(this)})}))},toggleAttr:function(e,t){return this.each(function(){v(t)?this.removeAttribute(e):this.setAttribute(e,t)})},id:function(e){return this.length?w(this[0]).attr("id",e):h}}),w.extend({meta:function(e){return v(e)?w("meta"):w("meta[name='$name']".replace("$name",e))},metaBy:function(e){return v(e)?w("meta"):w("meta[$name]".replace("$name",e))},doctype:function(){return w("doctype")},html:function(){return w("html")},head:function(){return w("html").find("head")},body:function(){return w("body")},document:function(){return w(document)},window:function(){return w(window)},charset:function(e){var t=w("meta[charset]");return e&&t.attr("charset",e),t.attr("charset")}}),w.extend({proxy:function(e,t){return"function"!=typeof e?h:e.bind(t)},bind:function(e,t){return this.proxy(e,t)}}),[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach(function(e){["append","prepend"].forEach(function(t){e.hasOwnProperty(t)||Object.defineProperty(e,t,{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),n=document.createDocumentFragment();e.forEach(function(e){var t=e instanceof Node;n.appendChild(t?e:document.createTextNode(String(e)))}),"prepend"===t?this.insertBefore(n,this.firstChild):this.appendChild(n)}})})});function _(e){var t=h;return"string"==typeof e?t=w.isSelector(e)?w(e):w.parseHTML(e):e instanceof HTMLElement?t=[e]:a(e)&&(t=e),t}w.fn.extend({append:function(e){var i=_(e);return this.each(function(t,n){w.each(i,function(){if(n!==this){var e=0===t?this:this.cloneNode(!0);w.script(e),e.tagName&&"SCRIPT"!==e.tagName&&n.append(e)}})})},appendTo:function(e){var t=_(e);return this.each(function(){var n=this;w.each(t,function(e,t){n!==this&&t.append(0===e?n:n.cloneNode(!0))})})},prepend:function(e){var i=_(e);return this.each(function(t,n){w.each(i,function(){if(n!==this){var e=0===t?this:this.cloneNode(!0);w.script(e),e.tagName&&"SCRIPT"!==e.tagName&&n.prepend(e)}})})},prependTo:function(e){var t=_(e);return this.each(function(){var n=this;w.each(t,function(e,t){n!==this&&w(t).prepend(0===e?n:n.cloneNode(!0))})})},insertBefore:function(e){var t=_(e);return this.each(function(){var n=this;w.each(t,function(e){if(n!==this){var t=this.parentNode;t&&t.insertBefore(0===e?n:n.cloneNode(!0),this)}})})},insertAfter:function(e){var t=_(e);return this.each(function(){var i=this;w.each(t,function(e,t){if(i!==this){var n=this.parentNode;n&&n.insertBefore(0===e?i:i.cloneNode(!0),t.nextSibling)}})})},after:function(e){return this.each(function(){"string"==typeof e?this.insertAdjacentHTML("afterend",e):w(e).insertAfter(this)})},before:function(e){return this.each(function(){"string"==typeof e?this.insertAdjacentHTML("beforebegin",e):w(e).insertBefore(this)})},clone:function(i,s){var a=[];return v(i)&&(i=!1),v(s)&&(s=!1),this.each(function(){var e,t=this.cloneNode(i),n=w(t);s&&w.hasData(this)&&(e=w(this).data(),w.each(e,function(e,t){n.data(e,t)})),a.push(t)}),w.merge(w(),a)},import:function(e){var t=[];return v(e)&&(e=!1),this.each(function(){t.push(document.importNode(this,e))}),w.merge(w(),t)},adopt:function(){var e=[];return this.each(function(){e.push(document.adoptNode(this))}),w.merge(w(),e)},remove:function(t){var e,n,i=0,s=[];if(0!==this.length){for(n=t?this.filter(function(e){return p.call(e,t)}):this.items();null!=(e=n[i]);i++)e.parentNode&&(s.push(e.parentNode.removeChild(e)),w.removeData(e));return w.merge(w(),s)}}});var O=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame,I={def:"linear",linear:function(e){return e},easeInSine:function(e){return-1*Math.cos(e*(Math.PI/2))+1},easeOutSine:function(e){return Math.sin(e*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e)-1)},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){var t=e-1;return t*t*t+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){var t=e-1;return 1-t*t*t*t},easeInOutQuart:function(e){var t=e-1;return e<.5?8*e*e*e*e:1-8*t*t*t*t},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){var t=e-1;return 1+t*t*t*t*t},easeInOutQuint:function(e){var t=e-1;return e<.5?16*e*e*e*e*e:1+16*t*t*t*t*t},easeInExpo:function(e){return 0===e?0:Math.pow(2,10*(e-1))},easeOutExpo:function(e){return 1===e?1:1-Math.pow(2,-10*e)},easeInOutExpo:function(e){if(0===e||1===e)return e;var t=2*e,n=t-1;return t<1?.5*Math.pow(2,10*n):.5*(2-Math.pow(2,-10*n))},easeInCirc:function(e){var t=e/1;return-1*(Math.sqrt(1-t*e)-1)},easeOutCirc:function(e){var t=e-1;return Math.sqrt(1-t*t)},easeInOutCirc:function(e){var t=2*e,n=t-2;return t<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-n*n)+1)},easeInBack:function(e,t){return e*e*(((t=t||1.70158)+1)*e-t)},easeOutBack:function(e,t){var n=e/1-1;return n*n*(((t=t||1.70158)+1)*n+t)+1},easeInOutBack:function(e,t){var n=2*e,i=n-2,s=1.525*(t=t||1.70158);return n<1?.5*n*n*((1+s)*n-s):.5*(i*i*((1+s)*i+s)+2)},easeInElastic:function(e,t){if(0===e||1===e)return e;var n=e/1-1,i=1-(t=t||.7),s=i/(2*Math.PI)*Math.asin(1);return-Math.pow(2,10*n)*Math.sin((n-s)*(2*Math.PI)/i)},easeOutElastic:function(e,t){var n=1-(t=t||.7),i=2*e;if(0===e||1===e)return e;var s=n/(2*Math.PI)*Math.asin(1);return Math.pow(2,-10*i)*Math.sin((i-s)*(2*Math.PI)/n)+1},easeInOutElastic:function(e,t){var n=1-(t=t||.65);if(0===e||1===e)return e;var i=2*e,s=i-1,a=n/(2*Math.PI)*Math.asin(1);return i<1?Math.pow(2,10*s)*Math.sin((s-a)*(2*Math.PI)/n)*-.5:Math.pow(2,-10*s)*Math.sin((s-a)*(2*Math.PI)/n)*.5+1},easeOutBounce:function(e){var t,n=e/1;return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(t=n-1.5/2.75)*t+.75:n<2.5/2.75?7.5625*(t=n-2.25/2.75)*t+.9375:7.5625*(t=n-2.625/2.75)*t+.984375},easeInBounce:function(e){return 1-I.easeOutBounce(1-e)},easeInOutBounce:function(e){return e<.5?.5*I.easeInBounce(2*e):.5*I.easeOutBounce(2*e-1)+.5}};w.easing={},w.extend(w.easing,I),w.extend({animate:function(a,o,r,l,c){var d,e,t,n,i,h=w(a),u=performance.now(),p={};if(0!==r&&!w.fx.off||(r=1),r=r||300,l=l||this.easing.def,"function"==typeof r&&(c=r,r=300,l="linear"),"function"==typeof l&&(c=l,l=this.easing.def),h.origin("animation-stop",0),C(o))for(d in o)o.hasOwnProperty(d)&&(i=""===(t=Array.isArray(o[d])?(e=f(o[d][0]),f(o[d][1])):(e=f(h.style(d)),f(o[d])))[1]&&-1===s.indexOf(d)?"px":t[1],n=t[0]-e[0],p[d]=[e[0],t[0],n,i]);return h.origin("animation",requestAnimationFrame(function e(t){var n,i,s=h.origin("animation-stop");if(0<s)return 2===s&&("function"==typeof o?w.proxy(o,h[0])(1,1):C(o)&&function(e,t){for(d in p)p.hasOwnProperty(d)&&h.css(d,p[d][0]+1*p[d][2]+p[d][3])}()),O(w(a).origin("animation")),void("function"==typeof c&&w.proxy(c,h[0])());if(1<(i=(t-u)/r)&&(i=1),i<0&&(i=0),n=("string"==typeof l?w.easing[l]?w.easing[l]:w.easing[w.easing.def]:l)(i),"function"==typeof o)w.proxy(o,h[0])(i,n);else{if(!C(o))throw new Error("Unknown draw object. Must be a function or plain object");!function(e,t){for(d in p)p.hasOwnProperty(d)&&h.css(d,p[d][0]+p[d][2]*t+p[d][3])}(0,n)}1===i&&"function"==typeof c&&w.proxy(c,h[0])(),i<1&&h.origin("animation",requestAnimationFrame(e))})),this},stop:function(e,t){w(e).origin("animation-stop",!0===t?2:1)}}),w.fn.extend({animate:function(e,t,n,i){return this.each(function(){return w.animate(this,e,t,n,i)})},stop:function(e){return this.each(function(){return w.stop(this,e)})}}),w.extend({hidden:function(e,t,n){return e=w(e)[0],"string"==typeof t&&(t="true"===t.toLowerCase()),"function"==typeof t&&(n=t,t=!e.hidden),e.hidden=t,"function"==typeof n&&(w.bind(n,e),n.call(e,arguments)),this},hide:function(e,t){var n=w(e);return e.style.display&&n.origin("display",e.style.display?e.style.display:getComputedStyle(e,null).display),e.style.display="none","function"==typeof t&&(w.bind(t,e),t.call(e,arguments)),this},show:function(e,t){var n=w(e).origin("display",h,"block");return e.style.display=n?"none"===n?"block":n:"",0===parseInt(e.style.opacity)&&(e.style.opacity="1"),"function"==typeof t&&(w.bind(t,e),t.call(e,arguments)),this},visible:function(e,t,n){return t===h&&(t=!0),e.style.visibility=t?"visible":"hidden","function"==typeof n&&(w.bind(n,e),n.call(e,arguments)),this},toggle:function(e,t){var n;return n="none"!==getComputedStyle(e,null).display?"hide":"show",w[n](e,t)}}),w.fn.extend({hide:function(e){var t=h;return w.each(arguments,function(){"function"==typeof this&&(t=this)}),this.each(function(){w.hide(this,t)})},show:function(e){var t=h;return w.each(arguments,function(){"function"==typeof this&&(t=this)}),this.each(function(){w.show(this,t)})},visible:function(e,t){return this.each(function(){w.visible(this,e,t)})},toggle:function(e){return this.each(function(){w.toggle(this,e)})},hidden:function(e,t){return this.each(function(){w.hidden(this,e,t)})}}),w.extend({fx:{off:!1},fadeIn:function(e,t,n,i){var s=w(e);if(!o(s[0])||o(s[0])&&0===parseInt(s.style("opacity"))){v(t)&&v(n)&&v(i)?(i=null,t=1e3):"function"==typeof t&&(i=t,t=1e3),"function"==typeof n&&(i=n,n="linear");var a=w(e).origin("display",h,"block");return e.style.opacity="0",e.style.display=a,this.animate(e,{opacity:1},t,n,function(){this.style.removeProperty("opacity"),"function"==typeof i&&w.proxy(i,this)()})}return this},fadeOut:function(e,t,n,i){var s=w(e);if(o(s[0]))return v(t)&&v(n)&&v(i)?(i=null,t=1e3):"function"==typeof t&&(i=t,t=1e3),"function"==typeof n&&(i=n,n="linear"),s.origin("display",w(e).style("display")),this.animate(e,{opacity:0},t,n,function(){this.style.display="none",this.style.removeProperty("opacity"),"function"==typeof i&&w.proxy(i,this)()})},slideDown:function(n,e,t,i){var s,a,o=w(n);if(isNaN(o.height())||0===o.height())return v(e)&&v(t)&&v(i)?(i=null,e=100):"function"==typeof e&&(i=e,e=100),"function"==typeof t&&(i=t,t="linear"),o.show().visible(!1),s=o.origin("height",h,o.height()),a=o.origin("display",w(n).style("display"),"block"),o.height(0).visible(!0),o.css({overflow:"hidden",display:"none"===a?"block":a}),this.animate(n,function(e,t){n.style.height=s*t+"px",1===e&&w(n).removeStyleProperty("overflow, height, visibility")},e,t,i)},slideUp:function(n,e,t,i){var s,a=w(n);if(0!==a.height())return v(e)&&v(t)&&v(i)?(i=null,e=100):"function"==typeof e&&(i=e,e=100),"function"==typeof t&&(i=t,t="linear"),s=a.height(),a.origin("height",s),a.origin("display",w(n).style("display")),a.css({overflow:"hidden"}),this.animate(n,function(e,t){n.style.height=(1-t)*s+"px",1===e&&a.hide().removeStyleProperty("overflow, height")},e,t,i)}}),w.fn.extend({fadeIn:function(e,t,n){return this.each(function(){w.fadeIn(this,e,t,n)})},fadeOut:function(e,t,n){return this.each(function(){w.fadeOut(this,e,t,n)})},slideUp:function(e,t,n){return this.each(function(){w.slideUp(this,e,t,n)})},slideDown:function(e,t,n){return this.each(function(){w.slideDown(this,e,t,n)})}}),w.init=function(e,t){var n,i;if(this.uid=w.uniqueId(),!e)return this;if("function"==typeof e)return w.ready(e);if("object"==typeof e&&"undefined"!=typeof jQuery&&e instanceof jQuery)return w.import(e);if("string"==typeof e&&"document"===e&&(e=document),"string"==typeof e&&"body"===e&&(e=document.body),"string"==typeof e&&"html"===e&&(e=document.documentElement),"string"==typeof e&&"doctype"===e&&(e=document.doctype),e&&(e.nodeType||e.self===window))return this[0]=e,this.length=1,this;if(e instanceof w)return i=w(),w.each(e,function(){i.push(this)}),i;if(Array.isArray(e))return i=w(),w.each(e,function(){w(this).each(function(){i.push(this)})}),i;if("object"==typeof e)return e;if("string"==typeof e){if("#"===(e=e.trim())||"."===e)throw new Error("sel can't be # or .");1===(n=w.parseHTML(e,t)).length&&3===n[0].nodeType?[].push.apply(this,document.querySelectorAll(e)):w.merge(this,n)}if(t!==h){var s=this;t instanceof w?this.each(function(){w(t).append(s)}):t instanceof HTMLElement&&w(t).append(s)}return this},w.init.prototype=w.fn;var D=e.$;e.m4q;w.Promise=Promise,e.m4q=w,void 0===e.$&&(e.$=w),m4q.global=function(){D=e.$,e.m4q,e.$=w},m4q.noConflict=function(){return e.$===w&&(e.$=D),w}}(window);var D=m4q;if("undefined"==typeof m4q)throw new Error("Metro 4 requires m4q helper!");if(!1 in window)throw new Error("Metro 4 requires MutationObserver!");var e=D.meta("metro4:init").attr("content"),t=D.meta("metro4:init:mode").attr("content"),n=D.meta("metro4:locale").attr("content"),i=D.meta("metro4:week_start").attr("content"),s=D.meta("metro4:date_format").attr("content"),a=D.meta("metro4:date_format_input").attr("content"),r=D.meta("metro4:animation_duration").attr("content"),l=D.meta("metro4:callback_timeout").attr("content"),c=D.meta("metro4:timeout").attr("content"),d=D.meta("metro4:scroll_multiple").attr("content"),h=D.meta("metro4:cloak").attr("content"),u=D.meta("metro4:cloak_duration").attr("content"),p=D.meta("metro4:jquery").attr("content");window.jquery_present="undefined"!=typeof jQuery,void 0===window.METRO_JQUERY&&(window.METRO_JQUERY=void 0===p||JSON.parse(p));var f=D.meta("metro4:about").attr("content");void 0===window.METRO_SHOW_ABOUT&&(window.METRO_SHOW_ABOUT=void 0===f||JSON.parse(f));var m=D.meta("metro4:compile").attr("content");void 0===window.METRO_SHOW_COMPILE_TIME&&(window.METRO_SHOW_COMPILE_TIME=void 0===m||JSON.parse(m)),void 0===window.METRO_INIT&&(window.METRO_INIT=void 0===e||JSON.parse(e)),void 0===window.METRO_INIT_MODE&&(window.METRO_INIT_MODE=void 0!==t?t:"contentloaded"),void 0===window.METRO_DEBUG&&(window.METRO_DEBUG=!0),void 0===window.METRO_WEEK_START&&(window.METRO_WEEK_START=void 0!==i?parseInt(i):0),void 0===window.METRO_DATE_FORMAT&&(window.METRO_DATE_FORMAT=void 0!==s?s:"%Y-%m-%d"),void 0===window.METRO_DATE_FORMAT_INPUT&&(window.METRO_DATE_FORMAT_INPUT=void 0!==a?a:"%Y-%m-%d"),void 0===window.METRO_LOCALE&&(window.METRO_LOCALE=void 0!==n?n:"en-US"),void 0===window.METRO_ANIMATION_DURATION&&(window.METRO_ANIMATION_DURATION=void 0!==r?parseInt(r):100),void 0===window.METRO_CALLBACK_TIMEOUT&&(window.METRO_CALLBACK_TIMEOUT=void 0!==l?parseInt(l):500),void 0===window.METRO_TIMEOUT&&(window.METRO_TIMEOUT=void 0!==c?parseInt(c):2e3),void 0===window.METRO_SCROLL_MULTIPLE&&(window.METRO_SCROLL_MULTIPLE=void 0!==d?parseInt(d):20),void 0===window.METRO_CLOAK_REMOVE&&(window.METRO_CLOAK_REMOVE=void 0!==h?(""+h).toLowerCase():"fade"),void 0===window.METRO_CLOAK_DURATION&&(window.METRO_CLOAK_DURATION=void 0!==u?parseInt(u):500),void 0===window.METRO_HOTKEYS_FILTER_CONTENT_EDITABLE&&(window.METRO_HOTKEYS_FILTER_CONTENT_EDITABLE=!0),void 0===window.METRO_HOTKEYS_FILTER_INPUT_ACCEPTING_ELEMENTS&&(window.METRO_HOTKEYS_FILTER_INPUT_ACCEPTING_ELEMENTS=!0),void 0===window.METRO_HOTKEYS_FILTER_TEXT_INPUTS&&(window.METRO_HOTKEYS_FILTER_TEXT_INPUTS=!0),void 0===window.METRO_HOTKEYS_BUBBLE_UP&&(window.METRO_HOTKEYS_BUBBLE_UP=!1),void 0===window.METRO_THROWS&&(window.METRO_THROWS=!0),window.METRO_MEDIA=[],"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),"function"!=typeof Object.values&&(Object.values=function(t){return Object.keys(t).map(function(e){return t[e]})});function v(e){return"string"!=typeof e?void 0:e.replace(/\-/g,"")}var g="ontouchstart"in window||0<navigator.MaxTouchPoints||0<navigator.msMaxTouchPoints,M={version:"4.3.6",compileTime:"15/03/2020 11:45:22",buildNumber:"744",isTouchable:g,fullScreenEnabled:document.fullscreenEnabled,sheet:null,controlsPosition:{INSIDE:"inside",OUTSIDE:"outside"},groupMode:{ONE:"one",MULTI:"multi"},aspectRatio:{HD:"hd",SD:"sd",CINEMA:"cinema"},fullScreenMode:{WINDOW:"window",DESKTOP:"desktop"},position:{TOP:"top",BOTTOM:"bottom",LEFT:"left",RIGHT:"right",TOP_RIGHT:"top-right",TOP_LEFT:"top-left",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",LEFT_BOTTOM:"left-bottom",LEFT_TOP:"left-top",RIGHT_TOP:"right-top",RIGHT_BOTTOM:"right-bottom"},popoverEvents:{CLICK:"click",HOVER:"hover",FOCUS:"focus"},stepperView:{SQUARE:"square",CYCLE:"cycle",DIAMOND:"diamond"},listView:{LIST:"list",CONTENT:"content",ICONS:"icons",ICONS_MEDIUM:"icons-medium",ICONS_LARGE:"icons-large",TILES:"tiles",TABLE:"table"},events:{click:"click",start:g?"touchstart":"mousedown",stop:g?"touchend":"mouseup",move:g?"touchmove":"mousemove",enter:g?"touchstart":"mouseenter",startAll:"mousedown touchstart",stopAll:"mouseup touchend",moveAll:"mousemove touchmove",leave:"mouseleave",focus:"focus",blur:"blur",resize:"resize",keyup:"keyup",keydown:"keydown",keypress:"keypress",dblclick:"dblclick",input:"input",change:"change",cut:"cut",paste:"paste",scroll:"scroll",mousewheel:"mousewheel",inputchange:"change input propertychange cut paste copy drop",dragstart:"dragstart",dragend:"dragend",dragenter:"dragenter",dragover:"dragover",dragleave:"dragleave",drop:"drop",drag:"drag"},keyCode:{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,BREAK:19,CAPS:20,ESCAPE:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,COMMA:188},media_queries:{FS:"(min-width: 0px)",XS:"(min-width: 360px)",SM:"(min-width: 576px)",MD:"(min-width: 768px)",LG:"(min-width: 992px)",XL:"(min-width: 1200px)",XXL:"(min-width: 1452px)"},media_sizes:{FS:0,XS:360,SM:576,LD:640,MD:768,LG:992,XL:1200,XXL:1452},media_mode:{FS:"fs",XS:"xs",SM:"sm",MD:"md",LG:"lg",XL:"xl",XXL:"xxl"},media_modes:["fs","xs","sm","md","lg","xl","xxl"],actions:{REMOVE:1,HIDE:2},hotkeys:{},about:function(){console.info("Metro 4 - v"+M.version+". "+M.showCompileTime()),console.info("m4q - "+m4q.version)},showCompileTime:function(){return"Built at: "+M.compileTime},aboutDlg:function(){alert("Metro 4 - v"+M.version+". "+M.showCompileTime())},ver:function(){return M.version},build:function(){return M.build},compile:function(){return M.compileTime},observe:function(){new MutationObserver(function(e){e.map(function(t){if("attributes"===t.type&&"data-role"!==t.attributeName)if("data-hotkey"===t.attributeName)M.initHotkeys([t.target],!0);else{var n=D(t.target),e=n.data("metroComponent");void 0!==e&&D.each(e,function(){var e=M.getPlugin(n,this);e&&e.changeAttribute(t.attributeName)})}else if("childList"===t.type&&0<t.addedNodes.length){var i,s,a,o=[],r=t.addedNodes;if(r.length){for(i=0;i<r.length;i++)a=r[i],void 0!==(s=D(a)).attr("data-role")&&o.push(a),D.each(s.find("[data-role]"),function(){-1===o.indexOf(this)&&o.push(this)});o.length&&M.initWidgets(o,"observe")}}})}).observe(D("html")[0],{childList:!0,attributes:!0,subtree:!0})},init:function(){var e=D("[data-role]"),t=D("[data-hotkey]"),n=D("html");METRO_SHOW_ABOUT&&M.about(!0),!0==g?n.addClass("metro-touch-device"):n.addClass("metro-no-touch-device"),M.sheet=H.newCssSheet(),window.METRO_MEDIA=[],D.each(M.media_queries,function(e,t){H.media(t)&&METRO_MEDIA.push(M.media_mode[e])}),M.observe(),M.initHotkeys(t),M.initWidgets(e,"init"),"fade"!==METRO_CLOAK_REMOVE?D(".m4-cloak").removeClass("m4-cloak"):D(".m4-cloak").animate({opacity:1},METRO_CLOAK_DURATION,function(){D(".m4-cloak").removeClass("m4-cloak")})},initHotkeys:function(e,i){D.each(e,function(){var e=D(this),t=!!e.attr("data-hotkey")&&e.attr("data-hotkey").toLowerCase(),n=!!e.attr("data-hotkey-func")&&e.attr("data-hotkey-func");!1!==t&&(!0===e.data("hotKeyBonded")&&!H.bool(i)||(M.hotkeys[t]=[this,n],e.data("hotKeyBonded",!0)))})},initWidgets:function(e){D.each(e,function(){var s=D(this);s.data("role").split(/\s*,\s*/).map(function(t){var e=H.$(),n=v(t);if(void 0!==e.fn[n]&&void 0===s.attr("data-role-"+n))try{e.fn[n].call(s),s.attr("data-role-"+n,!0);var i=s.data("metroComponent");void 0===i?i=[n]:i.push(n),s.data("metroComponent",i)}catch(e){throw console.error("Error creating component "+t),e}})})},plugin:function(e,t){var n=v(e);D.fn[n]=function(e){return this.each(function(){D.data(this,n,Object.create(t).init(e,this))})},METRO_JQUERY&&jquery_present&&(jQuery.fn[n]=function(e){return this.each(function(){jQuery.data(this,n,Object.create(t).init(e,this))})})},destroyPlugin:function(e,t){var n,i,s=D(e),a=v(t);if(n=s.data(a),!H.isValue(n))throw new Error("Component "+t+" can not be destroyed: the element is not a Metro 4 component.");if(!H.isFunc(n.destroy))throw new Error("Component "+t+" can not be destroyed: method destroy not found.");n.destroy(),i=s.data("metroComponent"),H.arrayDelete(i,a),s.data("metroComponent",i),D.removeData(s[0],a),s.removeAttr("data-role-"+a)},destroyPluginAll:function(e){var t=D(e),n=t.data("metroComponent");void 0!==n&&0<n.length&&D.each(n,function(){M.destroyPlugin(t[0],this)})},noop:function(){},noop_true:function(){return!0},noop_false:function(){return!1},requestFullScreen:function(e){e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():e.requestFullscreen().catch(function(e){console.warn("Error attempting to enable full-screen mode: "+e.message+" "+e.name)})},exitFullScreen:function(){document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.exitFullscreen().catch(function(e){console.warn("Error attempting to disable full-screen mode: "+e.message+" "+e.name)})},inFullScreen:function(){return void 0!==(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)},checkRuntime:function(e,t){var n=D(e),i=t.replace(/\-/g,"");n.attr("data-role-"+i)||M.makeRuntime(n,i)},makeRuntime:function(e,t){var n=D(e),i=v(t);n.attr("data-role-"+i,!0),n.attr("data-role",i);var s=n.data("metroComponent");void 0===s?s=[i]:s.push(i),n.data("metroComponent",s)},$:function(){return METRO_JQUERY&&jquery_present?jQuery:m4q},get$el:function(e){return M.$()(D(e)[0])},getPlugin:function(e,t){var n=v(t),i=M.get$el(e);return i.length?i.data(n):void 0},makePlugin:function(e,t,n){var i=v(t),s=M.get$el(e);return s.length&&"function"==typeof s[i]?s[i](n):void 0},createExec:function(e){var t=e.options[e.name.toLowerCase()+"Deferred"];0<t?setTimeout(function(){e._create()},t):e._create()}};window.Metro=M,D(window).on(M.events.resize,function(){window.METRO_MEDIA=[],D.each(M.media_queries,function(e,t){H.media(t)&&METRO_MEDIA.push(M.media_mode[e])})});var C={duration:METRO_ANIMATION_DURATION,func:"linear",switch:function(e,t){e.hide(),t.css({top:0,left:0}).show()},slideUp:function(e,t,n,i){var s=e.parent().outerHeight(!0);void 0===n&&(n=this.duration),void 0===i&&(i=this.func),e.css("z-index",1).animate({top:-s,opacity:0},n,i),t.css({top:s,left:0,zIndex:2}).animate({top:0,opacity:1},n,i)},slideDown:function(e,t,n,i){var s=e.parent().outerHeight(!0);void 0===n&&(n=this.duration),void 0===i&&(i=this.func),e.css("z-index",1).animate({top:s,opacity:0},n,i),t.css({left:0,top:-s,zIndex:2}).animate({top:0,opacity:1},n,i)},slideLeft:function(e,t,n,i){var s=e.parent().outerWidth(!0);void 0===n&&(n=this.duration),void 0===i&&(i=this.func),e.css("z-index",1).animate({left:-s,opacity:0},n,i),t.css({left:s,zIndex:2}).animate({left:0,opacity:1},n,i)},slideRight:function(e,t,n,i){var s=e.parent().outerWidth(!0);void 0===n&&(n=this.duration),void 0===i&&(i=this.func),e.css("z-index",1).animate({left:s,opacity:0},n,i),t.css({left:-s,zIndex:2}).animate({left:0,opacity:1},n,i)},fade:function(e,t,n){void 0===n&&(n=this.duration),e.animate({opacity:0},n),t.css({top:0,left:0,opacity:0}).animate({opacity:1},n)}};function b(e,t,n){this.r=e||0,this.g=t||0,this.b=n||0}function w(e,t,n){this.h=e||0,this.s=t||0,this.v=n||0}function y(e,t,n,i){this.c=e||0,this.m=t||0,this.y=n||0,this.k=i||0}M.animation=C,"function"!=typeof Array.shuffle&&(Array.prototype.shuffle=function(){for(var e,t,n=this.length;0!==n;)t=Math.floor(Math.random()*n),e=this[n-=1],this[n]=this[t],this[t]=e;return this}),"function"!=typeof Array.clone&&(Array.prototype.clone=function(){return this.slice(0)}),"function"!=typeof Array.unique&&(Array.prototype.unique=function(){for(var e=this.concat(),t=0;t<e.length;++t)for(var n=t+1;n<e.length;++n)e[t]===e[n]&&e.splice(n--,1);return e}),"function"!=typeof Array.from&&(Array.from=function(e){var t,n=[];if(void 0===e.length&&"object"==typeof e)return Object.values(e);if(void 0===e.length)throw new Error("Value can not be converted to array");for(t=0;t<e.length;t++)n.push(e[t]);return n}),"function"!=typeof Array.contains&&(Array.prototype.contains=function(e,t){return-1<this.indexOf(e,t)});var x={TYPES:{HEX:"hex",RGB:"rgb",RGBA:"rgba",HSV:"hsv",HSL:"hsl",CMYK:"cmyk",UNKNOWN:"unknown"},PALETTES:{ALL:"colorList",METRO:"colorListMetro",STANDARD:"colorListStandard"},colorListMetro:{lime:"#a4c400",green:"#60a917",emerald:"#008a00",blue:"#00AFF0",teal:"#00aba9",cyan:"#1ba1e2",cobalt:"#0050ef",indigo:"#6a00ff",violet:"#aa00ff",pink:"#dc4fad",magenta:"#d80073",crimson:"#a20025",red:"#CE352C",orange:"#fa6800",amber:"#f0a30a",yellow:"#fff000",brown:"#825a2c",olive:"#6d8764",steel:"#647687",mauve:"#76608a",taupe:"#87794e"},colorListStandard:{aliceBlue:"#f0f8ff",antiqueWhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedAlmond:"#ffebcd",blue:"#0000ff",blueViolet:"#8a2be2",brown:"#a52a2a",burlyWood:"#deb887",cadetBlue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerBlue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkBlue:"#00008b",darkCyan:"#008b8b",darkGoldenRod:"#b8860b",darkGray:"#a9a9a9",darkGreen:"#006400",darkKhaki:"#bdb76b",darkMagenta:"#8b008b",darkOliveGreen:"#556b2f",darkOrange:"#ff8c00",darkOrchid:"#9932cc",darkRed:"#8b0000",darkSalmon:"#e9967a",darkSeaGreen:"#8fbc8f",darkSlateBlue:"#483d8b",darkSlateGray:"#2f4f4f",darkTurquoise:"#00ced1",darkViolet:"#9400d3",deepPink:"#ff1493",deepSkyBlue:"#00bfff",dimGray:"#696969",dodgerBlue:"#1e90ff",fireBrick:"#b22222",floralWhite:"#fffaf0",forestGreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#DCDCDC",ghostWhite:"#F8F8FF",gold:"#ffd700",goldenRod:"#daa520",gray:"#808080",green:"#008000",greenYellow:"#adff2f",honeyDew:"#f0fff0",hotPink:"#ff69b4",indianRed:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderBlush:"#fff0f5",lawnGreen:"#7cfc00",lemonChiffon:"#fffacd",lightBlue:"#add8e6",lightCoral:"#f08080",lightCyan:"#e0ffff",lightGoldenRodYellow:"#fafad2",lightGray:"#d3d3d3",lightGreen:"#90ee90",lightPink:"#ffb6c1",lightSalmon:"#ffa07a",lightSeaGreen:"#20b2aa",lightSkyBlue:"#87cefa",lightSlateGray:"#778899",lightSteelBlue:"#b0c4de",lightYellow:"#ffffe0",lime:"#00ff00",limeGreen:"#32dc32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumAquaMarine:"#66cdaa",mediumBlue:"#0000cd",mediumOrchid:"#ba55d3",mediumPurple:"#9370db",mediumSeaGreen:"#3cb371",mediumSlateBlue:"#7b68ee",mediumSpringGreen:"#00fa9a",mediumTurquoise:"#48d1cc",mediumVioletRed:"#c71585",midnightBlue:"#191970",mintCream:"#f5fffa",mistyRose:"#ffe4e1",moccasin:"#ffe4b5",navajoWhite:"#ffdead",navy:"#000080",oldLace:"#fdd5e6",olive:"#808000",oliveDrab:"#6b8e23",orange:"#ffa500",orangeRed:"#ff4500",orchid:"#da70d6",paleGoldenRod:"#eee8aa",paleGreen:"#98fb98",paleTurquoise:"#afeeee",paleVioletRed:"#db7093",papayaWhip:"#ffefd5",peachPuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderBlue:"#b0e0e6",purple:"#800080",rebeccaPurple:"#663399",red:"#ff0000",rosyBrown:"#bc8f8f",royalBlue:"#4169e1",saddleBrown:"#8b4513",salmon:"#fa8072",sandyBrown:"#f4a460",seaGreen:"#2e8b57",seaShell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",slyBlue:"#87ceeb",slateBlue:"#6a5acd",slateGray:"#708090",snow:"#fffafa",springGreen:"#00ff7f",steelBlue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whiteSmoke:"#f5f5f5",yellow:"#ffff00",yellowGreen:"#9acd32"},colorList:{},options:{angle:30,algorithm:1,step:.1,distance:5,tint1:.8,tint2:.4,shade1:.6,shade2:.3,alpha:1},init:function(){return this.colorList=D.extend({},this.colorListStandard,this.colorListMetro),this},setup:function(e){this.options=D.extend({},this.options,e)},color:function(e,t){return void 0!==this[t=t||this.PALETTES.ALL][e]&&this[t][e]},palette:function(e){return e=e||this.PALETTES.ALL,Object.keys(this[e])},colors:function(e){var t=[];return e=e||this.PALETTES.ALL,D.each(this[e],function(){t.push(this)}),t},hex2rgb:function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,i){return t+t+n+n+i+i});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},rgb2hex:function(e){return"#"+((1<<24)+(e.r<<16)+(e.g<<8)+e.b).toString(16).slice(1)},rgb2hsv:function(e){var t,n,i,s=new w,a=e.r/255,o=e.g/255,r=e.b/255,l=Math.max(a,o,r),c=Math.min(a,o,r),d=l-c;return n=0===(i=l)?0:1-c/l,t=l===c?0:l===a&&r<=o?(o-r)/d*60:l===a&&o<r?(o-r)/d*60+360:l===o?(r-a)/d*60+120:l===r?(a-o)/d*60+240:0,s.h=t,s.s=n,s.v=i,s},hsv2rgb:function(e){var t,n,i,s=e.h,a=100*e.s,o=100*e.v,r=(100-a)*o/100,l=s%60/60*(o-r),c=r+l,d=o-l;switch(Math.floor(s/60)){case 0:t=o,n=c,i=r;break;case 1:t=d,n=o,i=r;break;case 2:t=r,n=o,i=c;break;case 3:t=r,n=d,i=o;break;case 4:t=c,n=r,i=o;break;case 5:t=o,n=r,i=d}return{r:Math.round(255*t/100),g:Math.round(255*n/100),b:Math.round(255*i/100)}},hsv2hex:function(e){return this.rgb2hex(this.hsv2rgb(e))},hex2hsv:function(e){return this.rgb2hsv(this.hex2rgb(e))},rgb2cmyk:function(e){var t=new y,n=e.r/255,i=e.g/255,s=e.b/255;return t.k=Math.min(1-n,1-i,1-s),t.c=(1-n-t.k)/(1-t.k),t.m=(1-i-t.k)/(1-t.k),t.y=(1-s-t.k)/(1-t.k),t.c=Math.round(100*t.c),t.m=Math.round(100*t.m),t.y=Math.round(100*t.y),t.k=Math.round(100*t.k),t},cmyk2rgb:function(e){var t=new b,n=e.c/100,i=e.m/100,s=e.y/100,a=e.k/100;return t.r=1-Math.min(1,n*(1-a)+a),t.g=1-Math.min(1,i*(1-a)+a),t.b=1-Math.min(1,s*(1-a)+a),t.r=Math.round(255*t.r),t.g=Math.round(255*t.g),t.b=Math.round(255*t.b),t},hsv2hsl:function(e){var t,n,i;return t=e.h,i=(2-e.s)*e.v,n=e.s*e.v,{h:t,s:n/=i<=1?i:2-i,l:i/=2}},hsl2hsv:function(e){var t,n,i,s;return t=e.h,i=((s=2*e.l)+(n=e.s*(s<=1?s:2-s)))/2,{h:t,s:n=2*n/(s+n),l:i}},rgb2websafe:function(e){return{r:51*Math.round(e.r/51),g:51*Math.round(e.g/51),b:51*Math.round(e.b/51)}},rgba2websafe:function(e){return{r:51*Math.round(e.r/51),g:51*Math.round(e.g/51),b:51*Math.round(e.b/51),a:e.a}},hex2websafe:function(e){return this.rgb2hex(this.rgb2websafe(this.toRGB(e)))},hsv2websafe:function(e){return this.rgb2hsv(this.rgb2websafe(this.toRGB(e)))},hsl2websafe:function(e){return this.hsv2hsl(this.rgb2hsv(this.rgb2websafe(this.toRGB(e))))},cmyk2websafe:function(e){return this.rgb2cmyk(this.rgb2websafe(this.cmyk2rgb(e)))},websafe:function(e){return this.isHEX(e)?this.hex2websafe(e):this.isRGB(e)?this.rgb2websafe(e):this.isRGBA(e)?this.rgba2websafe(e):this.isHSV(e)?this.hsv2websafe(e):this.isHSL(e)?this.hsl2websafe(e):this.isCMYK(e)?this.cmyk2websafe(e):e},is:function(e){return this.isHEX(e)?this.TYPES.HEX:this.isRGB(e)?this.TYPES.RGB:this.isRGBA(e)?this.TYPES.RGBA:this.isHSV(e)?this.TYPES.HSV:this.isHSL(e)?this.TYPES.HSL:this.isCMYK(e)?this.TYPES.CMYK:this.TYPES.UNKNOWN},toRGB:function(e){if(this.isHSV(e))return this.hsv2rgb(e);if(this.isHSL(e))return this.hsv2rgb(this.hsl2hsv(e));if(this.isRGB(e))return e;if(this.isHEX(e))return this.hex2rgb(e);if(this.isCMYK(e))return this.cmyk2rgb(e);throw new Error("Unknown color format!")},toRGBA:function(e,t){var n=this.toRGB(e);return n.a=t||1,n},toHSV:function(e){return this.rgb2hsv(this.toRGB(e))},toHSL:function(e){return this.hsv2hsl(this.rgb2hsv(this.toRGB(e)))},toHSLA:function(e,t){var n;return(n=this.hsv2hsl(this.rgb2hsv(this.toRGB(e)))).a=t||this.options.alpha,n},toHEX:function(e){return this.rgb2hex(this.toRGB(e))},toCMYK:function(e){return this.rgb2cmyk(this.toRGB(e))},toHexString:function(e){return this.toHEX(e)},toHsvString:function(e){var t=this.toHSV(e);return"hsv("+[t.h,t.s,t.v].join(",")+")"},toHslString:function(e){var t=this.toHSL(e);return"hsl("+[Math.round(t.h),Math.round(100*t.s)+"%",Math.round(100*t.l)+"%"].join(",")+")"},toHslaString:function(e){var t=this.toHSLA(e);return"hsl("+[Math.round(t.h),Math.round(100*t.s)+"%",Math.round(100*t.l)+"%",t.a].join(",")+")"},toCmykString:function(e){var t=this.toCMYK(e);return"cmyk("+[t.c,t.m,t.y,t.k].join(",")+")"},toRgbString:function(e){var t=this.toRGB(e);return"rgb("+[t.r,t.g,t.b].join(",")+")"},toRgbaString:function(e){var t=this.toRGBA(e);return"rgba("+[t.r,t.g,t.b,t.a].join(",")+")"},toString:function(e){if(this.isHEX(e))return this.toHexString(e);if(this.isRGB(e))return this.toRgbString(e);if(this.isRGBA(e))return this.toRgbaString(e);if(this.isHSV(e))return this.toHsvString(e);if(this.isHSL(e))return this.toHslString(e);if(this.isHSLA(e))return this.toHslaString(e);if(this.isCMYK(e))return this.toCmykString(e);throw new Error("Unknown color format!")},grayscale:function(e,t){t=t||"hex";var n=this.toRGB(e),i=Math.round(.2125*n.r+.7154*n.g+.0721*n.b),s={r:i,g:i,b:i};return this["rgb2"+t](s)},darken:function(e,t){return void 0===t&&(t=10),this.lighten(e,-1*Math.abs(t))},lighten:function(e,t){function n(e,t){var n=e.slice(1),i=parseInt(n,16),s=(i>>16)+t;255<s?s=255:s<0&&(s=0);var a=(i>>8&255)+t;255<a?a=255:a<0&&(a=0);var o=(255&i)+t;return 255<o?o=255:o<0&&(o=0),r="#"+(o|a<<8|s<<16).toString(16)}var i,r,s=1,a=0<t;for(void 0===t&&(t=10),(i=this.is(e))===this.TYPES.RGBA&&(s=e.a);r=n(this.toHEX(e),t),a?t--:t++,r.length<7;);switch(i){case"rgb":return this.toRGB(r);case"rgba":return this.toRGBA(r,s);case"hsv":return this.toHSV(r);case"hsl":return this.toHSL(r);case"cmyk":return this.toCMYK(r);default:return r}},isDark:function(e){var t=this.toRGB(e);return(299*t.r+587*t.g+114*t.b)/1e3<128},isLight:function(e){return!this.isDark(e)},isHSV:function(e){return H.isObject(e)&&"h"in e&&"s"in e&&"v"in e},isHSL:function(e){return H.isObject(e)&&"h"in e&&"s"in e&&"l"in e},isHSLA:function(e){return H.isObject(e)&&"h"in e&&"s"in e&&"l"in e&&"a"in e},isRGB:function(e){return H.isObject(e)&&"r"in e&&"g"in e&&"b"in e},isRGBA:function(e){return H.isObject(e)&&"r"in e&&"g"in e&&"b"in e&&"a"in e},isCMYK:function(e){return H.isObject(e)&&"c"in e&&"m"in e&&"y"in e&&"k"in e},isHEX:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},isColor:function(e){return this.isHEX(e)||this.isRGB(e)||this.isRGBA(e)||this.isHSV(e)||this.isHSL(e)||this.isCMYK(e)},hueShift:function(e,t){for(e+=t;360<=e;)e-=360;for(;e<0;)e+=360;return e},getScheme:function(e,t,n,i){var s;this.options=D.extend({},this.options,i);var a,o=[],r=this;if(a=this.toHSV(e),!1===this.isHSV(a))return console.warn("The value is a not supported color format!"),!1;function l(e,t,n){return Math.max(t,Math.min(e,n))}function c(e,t,n){return e<t?t:n<e?n:e}var d,h=a.h,u=a.s,p=a.v,f=this.options;switch(t){case"monochromatic":case"mono":if(1===f.algorithm)(d=this.hsv2rgb(a)).r=c(Math.round(d.r+(255-d.r)*f.tint1),0,255),d.g=c(Math.round(d.g+(255-d.g)*f.tint1),0,255),d.b=c(Math.round(d.b+(255-d.b)*f.tint1),0,255),o.push(this.rgb2hsv(d)),(d=this.hsv2rgb(a)).r=c(Math.round(d.r+(255-d.r)*f.tint2),0,255),d.g=c(Math.round(d.g+(255-d.g)*f.tint2),0,255),d.b=c(Math.round(d.b+(255-d.b)*f.tint2),0,255),o.push(this.rgb2hsv(d)),o.push(a),(d=this.hsv2rgb(a)).r=c(Math.round(d.r*f.shade1),0,255),d.g=c(Math.round(d.g*f.shade1),0,255),d.b=c(Math.round(d.b*f.shade1),0,255),o.push(this.rgb2hsv(d)),(d=this.hsv2rgb(a)).r=c(Math.round(d.r*f.shade2),0,255),d.g=c(Math.round(d.g*f.shade2),0,255),d.b=c(Math.round(d.b*f.shade2),0,255),o.push(this.rgb2hsv(d));else if(2===f.algorithm)for(o.push(a),s=1;s<=f.distance;s++)p=l(p-f.step,0,1),u=l(u-f.step,0,1),o.push({h:h,s:u,v:p});else if(3===f.algorithm)for(o.push(a),s=1;s<=f.distance;s++)p=l(p-f.step,0,1),o.push({h:h,s:u,v:p});else p=l(a.v+2*f.step,0,1),o.push({h:h,s:u,v:p}),p=l(a.v+f.step,0,1),o.push({h:h,s:u,v:p}),o.push(a),u=a.s,p=a.v,p=l(a.v-f.step,0,1),o.push({h:h,s:u,v:p}),p=l(a.v-2*f.step,0,1),o.push({h:h,s:u,v:p});break;case"complementary":case"complement":case"comp":o.push(a),h=this.hueShift(a.h,180),o.push({h:h,s:u,v:p});break;case"double-complementary":case"double-complement":case"double":o.push(a),h=this.hueShift(h,180),o.push({h:h,s:u,v:p}),h=this.hueShift(h,f.angle),o.push({h:h,s:u,v:p}),h=this.hueShift(h,180),o.push({h:h,s:u,v:p});break;case"analogous":case"analog":h=this.hueShift(h,f.angle),o.push({h:h,s:u,v:p}),o.push(a),h=this.hueShift(a.h,0-f.angle),o.push({h:h,s:u,v:p});break;case"triadic":case"triad":for(o.push(a),s=1;s<3;s++)h=this.hueShift(h,120),o.push({h:h,s:u,v:p});break;case"tetradic":case"tetra":o.push(a),h=this.hueShift(a.h,180),o.push({h:h,s:u,v:p}),h=this.hueShift(a.h,-1*f.angle),o.push({h:h,s:u,v:p}),h=this.hueShift(h,180),o.push({h:h,s:u,v:p});break;case"square":for(o.push(a),s=1;s<4;s++)h=this.hueShift(h,90),o.push({h:h,s:u,v:p});break;case"split-complementary":case"split-complement":case"split":h=this.hueShift(h,180-f.angle),o.push({h:h,s:u,v:p}),o.push(a),h=this.hueShift(a.h,180+f.angle),o.push({h:h,s:u,v:p});break;default:console.warn("Unknown scheme name "+t)}return function(e,t){var n=[],i=r.options;switch(t){case"hex":n=e.map(function(e){return x.toHEX(e)});break;case"rgb":n=e.map(function(e){return x.toRGB(e)});break;case"rgba":n=e.map(function(e){return x.toRGBA(e,i.alpha)});break;case"hsl":n=e.map(function(e){return x.toHSL(e)});break;case"cmyk":n=e.map(function(e){return x.toCMYK(e)});break;default:n=e}return n}(o,n)}};M.colors=x.init(),Date.prototype.getWeek=function(e){var t,n,i,s,a;return e=H.isValue(e)?"number"==typeof e?parseInt(e):0:METRO_WEEK_START,i=0<=(i=(n=new Date(this.getFullYear(),0,1)).getDay()-e)?i:i+7,s=Math.floor((this.getTime()-n.getTime()-6e4*(this.getTimezoneOffset()-n.getTimezoneOffset()))/864e5)+1,i<4?52<(a=Math.floor((s+i-1)/7)+1)&&(a=(t=0<=(t=new Date(this.getFullYear()+1,0,1).getDay()-e)?t:t+7)<4?1:53):a=Math.floor((s+i-1)/7),a},Date.prototype.getYear=function(){return this.getFullYear().toString().substr(-2)},Date.prototype.format=function(e,t){void 0===t&&(t="en-US");function i(){var e=new Date(a);return e.setDate(r-(o+6)%7+3),e}function s(e,t){return(""+(Math.pow(10,t)+e)).slice(1)}var n=(void 0!==M.locales&&void 0!==M.locales[t]?M.locales[t]:M.locales["en-US"]).calendar,a=this,o=a.getDay(),r=a.getDate(),l=a.getMonth(),c=a.getFullYear(),d=a.getHours(),h=n.days,u=n.months,p=[0,31,59,90,120,151,181,212,243,273,304,334];return e.replace(/(%[a-z])/gi,function(e){return{"%a":h[o].slice(0,3),"%A":h[o],"%b":u[l].slice(0,3),"%B":u[l],"%c":a.toUTCString(),"%C":Math.floor(c/100),"%d":s(r,2),dd:s(r,2),"%e":r,"%F":a.toISOString().slice(0,10),"%G":i().getFullYear(),"%g":(""+i().getFullYear()).slice(2),"%H":s(d,2),"%I":s((d+11)%12+1,2),"%j":s(p[l]+r+(1<l&&(c%4==0&&c%100!=0||c%400==0)?1:0),3),"%k":""+d,"%l":(d+11)%12+1,"%m":s(l+1,2),"%M":s(a.getMinutes(),2),"%p":d<12?"AM":"PM","%P":d<12?"am":"pm","%s":Math.round(a.getTime()/1e3),"%S":s(a.getSeconds(),2),"%u":o||7,"%V":function(){var e=i(),t=e.valueOf();e.setMonth(0,1);var n=e.getDay();return 4!==n&&e.setMonth(0,1+(4-n+7)%7),s(1+Math.ceil((t-e)/6048e5),2)}(),"%w":""+o,"%x":a.toLocaleDateString(),"%X":a.toLocaleTimeString(),"%y":(""+c).slice(2),"%Y":c,"%z":a.toTimeString().replace(/.+GMT([+-]\d+).+/,"$1"),"%Z":a.toTimeString().replace(/.+\((.+?)\)$/,"$1")}[e]||e})},Date.prototype.addHours=function(e){return this.setTime(this.getTime()+60*e*60*1e3),this},Date.prototype.addDays=function(e){return this.setDate(this.getDate()+e),this},Date.prototype.addMonths=function(e){return this.setMonth(this.getMonth()+e),this},Date.prototype.addYears=function(e){return this.setFullYear(this.getFullYear()+e),this};var S={init:function(){return this},options:{csvDelimiter:"\t",csvNewLine:"\r\n",includeHeader:!0},setup:function(e){return this.options=D.extend({},this.options,e),this},base64:function(e){return window.btoa(unescape(encodeURIComponent(e)))},b64toBlob:function(e,t,n){t=t||"",n=n||512;var i,s=window.atob(e),a=[];for(i=0;i<s.length;i+=n){var o,r=s.slice(i,i+n),l=new Array(r.length);for(o=0;o<r.length;o+=1)l[o]=r.charCodeAt(o);var c=new window.Uint8Array(l);a.push(c)}return new Blob(a,{type:t})},tableToCSV:function(e,t,n){var i,s,a,o,r,l,c=this.options,d="";if(c=D.extend({},c,n),e=D(e)[0],H.bool(c.includeHeader))for(s=e.querySelectorAll("thead")[0],a=0;a<s.rows.length;a++){for(r=s.rows[a],o=0;o<r.cells.length;o++)l=r.cells[o],d+=(o?c.csvDelimiter:"")+l.textContent.trim();d+=c.csvNewLine}for(i=e.querySelectorAll("tbody")[0],a=0;a<i.rows.length;a++){for(r=i.rows[a],o=0;o<r.cells.length;o++)l=r.cells[o],d+=(o?c.csvDelimiter:"")+l.textContent.trim();d+=c.csvNewLine}return H.isValue(t)?this.createDownload(this.base64("\ufeff"+d),"application/csv",t):d},createDownload:function(e,t,n){var i,s,a;return(s=document.createElement("a")).style.display="none",document.body.appendChild(s),i=this.b64toBlob(e,t),a=window.URL.createObjectURL(i),s.href=a,s.download=n||H.elementId("download"),s.click(),window.URL.revokeObjectURL(a),document.body.removeChild(s),!0}};M.export=S.init();var T={"en-US":{calendar:{months:["January","February","March","April","May","June","July","August","September","October","November","December","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Su","Mo","Tu","We","Th","Fr","Sa","Sun","Mon","Tus","Wen","Thu","Fri","Sat"],time:{days:"DAYS",hours:"HOURS",minutes:"MINS",seconds:"SECS",month:"MON",day:"DAY",year:"YEAR"}},buttons:{ok:"OK",cancel:"Cancel",done:"Done",today:"Today",now:"Now",clear:"Clear",help:"Help",yes:"Yes",no:"No",random:"Random",save:"Save",reset:"Reset"}},"tw-ZH":{calendar:{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六","日","一","二","三","四","五","六","週日","週一","週二","週三","週四","週五","週六"],time:{days:"天",hours:"時",minutes:"分",seconds:"秒",month:"月",day:"日",year:"年"}},buttons:{ok:"確認",cancel:"取消",done:"完成",today:"今天",now:"現在",clear:"清除",help:"幫助",yes:"是",no:"否",random:"隨機",save:"保存",reset:"重啟"}},"cn-ZH":{calendar:{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六","日","一","二","三","四","五","六","周日","周一","周二","周三","周四","周五","周六"],time:{days:"天",hours:"时",minutes:"分",seconds:"秒",month:"月",day:"日",year:"年"}},buttons:{ok:"确认",cancel:"取消",done:"完成",today:"今天",now:"现在",clear:"清除",help:"帮助",yes:"是",no:"否",random:"随机",save:"保存",reset:"重啟"}},"de-DE":{calendar:{months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember","Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","So","Mo","Di","Mi","Do","Fr","Sa","Son","Mon","Die","Mit","Don","Fre","Sam"],time:{days:"TAGE",hours:"STD",minutes:"MIN",seconds:"SEK"}},buttons:{ok:"OK",cancel:"Abbrechen",done:"Fertig",today:"Heute",now:"Jetzt",clear:"Löschen",help:"Hilfe",yes:"Ja",no:"Nein",random:"Zufällig",save:"Speichern",reset:"Zurücksetzen"}},"hu-HU":{calendar:{months:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December","Jan","Feb","Már","Ápr","Máj","Jún","Júl","Aug","Szep","Okt","Nov","Dec"],days:["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat","V","H","K","Sz","Cs","P","Sz","Vas","Hét","Ke","Sze","Csü","Pén","Szom"],time:{days:"NAP",hours:"ÓRA",minutes:"PERC",seconds:"MP"}},buttons:{ok:"OK",cancel:"Mégse",done:"Kész",today:"Ma",now:"Most",clear:"Törlés",help:"Segítség",yes:"Igen",no:"Nem",random:"Véletlen",save:"Mentés",reset:"Visszaállítás"}},"ru-RU":{calendar:{months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь","Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Вс","Пн","Вт","Ср","Чт","Пт","Сб","Вос","Пон","Вто","Сре","Чет","Пят","Суб"],time:{days:"ДНИ",hours:"ЧАСЫ",minutes:"МИН",seconds:"СЕК"}},buttons:{ok:"ОК",cancel:"Отмена",done:"Готово",today:"Сегодня",now:"Сейчас",clear:"Очистить",help:"Помощь",yes:"Да",no:"Нет",random:"Случайно",save:"Сохранить",reset:"Сброс"}},"uk-UA":{calendar:{months:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень","Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],days:["Неділя","Понеділок","Вівторок","Середа","Четвер","П’ятниця","Субота","Нд","Пн","Вт","Ср","Чт","Пт","Сб","Нед","Пон","Вiв","Сер","Чет","Пят","Суб"],time:{days:"ДНІ",hours:"ГОД",minutes:"ХВИЛ",seconds:"СЕК"}},buttons:{ok:"ОК",cancel:"Відміна",done:"Готово",today:"Сьогодні",now:"Зараз",clear:"Очистити",help:"Допомога",yes:"Так",no:"Ні",random:"Випадково",save:"Зберегти",reset:"Скинути"}},"es-MX":{calendar:{months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre","Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],days:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Do","Lu","Ma","Mi","Ju","Vi","Sa","Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],time:{days:"DÍAS",hours:"HORAS",minutes:"MINS",seconds:"SEGS",month:"MES",day:"DÍA",year:"AÑO"}},buttons:{ok:"Aceptar",cancel:"Cancelar",done:"Hecho",today:"Hoy",now:"Ahora",clear:"Limpiar",help:"Ayuda",yes:"Si",no:"No",random:"Aleatorio",save:"Salvar",reset:"Reiniciar"}},"fr-FR":{calendar:{months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre","Janv","Févr","Mars","Avr","Mai","Juin","Juil","Août","Sept","Oct","Nov","Déc"],days:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Di","Lu","Ma","Me","Je","Ve","Sa","Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],time:{days:"JOURS",hours:"HEURES",minutes:"MINS",seconds:"SECS",month:"MOIS",day:"JOUR",year:"ANNEE"}},buttons:{ok:"OK",cancel:"Annulé",done:"Fait",today:"Aujourd'hui",now:"Maintenant",clear:"Effacé",help:"Aide",yes:"Oui",no:"Non",random:"Aléatoire",save:"Sauvegarder",reset:"Réinitialiser"}},"it-IT":{calendar:{months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre","Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],days:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato","Do","Lu","Ma","Me","Gi","Ve","Sa","Dom","Lun","Mar","Mer","Gio","Ven","Sab"],time:{days:"GIORNI",hours:"ORE",minutes:"MIN",seconds:"SEC",month:"MESE",day:"GIORNO",year:"ANNO"}},buttons:{ok:"OK",cancel:"Annulla",done:"Fatto",today:"Oggi",now:"Adesso",clear:"Cancella",help:"Aiuto",yes:"Sì",no:"No",random:"Random",save:"Salvare",reset:"Reset"}}};M.locales=T;var k=0;function _(e){return A(P(E(e),8*e.length))}function O(e){for(var t,n=k?"0123456789ABCDEF":"0123456789abcdef",i="",s=0;s<e.length;s++)t=e.charCodeAt(s),i+=n.charAt(t>>>4&15)+n.charAt(15&t);return i}function I(e){for(var t,n,i="",s=-1;++s<e.length;)t=e.charCodeAt(s),n=s+1<e.length?e.charCodeAt(s+1):0,55296<=t&&t<=56319&&56320<=n&&n<=57343&&(t=65536+((1023&t)<<10)+(1023&n),s++),t<=127?i+=String.fromCharCode(t):t<=2047?i+=String.fromCharCode(192|t>>>6&31,128|63&t):t<=65535?i+=String.fromCharCode(224|t>>>12&15,128|t>>>6&63,128|63&t):t<=2097151&&(i+=String.fromCharCode(240|t>>>18&7,128|t>>>12&63,128|t>>>6&63,128|63&t));return i}function E(e){var t,n=new Array(e.length>>2);for(t=0;t<n.length;t++)n[t]=0;for(t=0;t<8*e.length;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function A(e){for(var t="",n=0;n<32*e.length;n+=8)t+=String.fromCharCode(e[n>>5]>>>n%32&255);return t}function P(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n=1732584193,i=-271733879,s=-1732584194,a=271733878,o=0;o<e.length;o+=16){var r=n,l=i,c=s,d=a;i=V(i=V(i=V(i=V(i=L(i=L(i=L(i=L(i=F(i=F(i=F(i=F(i=R(i=R(i=R(i=R(i,s=R(s,a=R(a,n=R(n,i,s,a,e[o],7,-680876936),i,s,e[o+1],12,-389564586),n,i,e[o+2],17,606105819),a,n,e[o+3],22,-1044525330),s=R(s,a=R(a,n=R(n,i,s,a,e[o+4],7,-176418897),i,s,e[o+5],12,1200080426),n,i,e[o+6],17,-1473231341),a,n,e[o+7],22,-45705983),s=R(s,a=R(a,n=R(n,i,s,a,e[o+8],7,1770035416),i,s,e[o+9],12,-1958414417),n,i,e[o+10],17,-42063),a,n,e[o+11],22,-1990404162),s=R(s,a=R(a,n=R(n,i,s,a,e[o+12],7,1804603682),i,s,e[o+13],12,-40341101),n,i,e[o+14],17,-1502002290),a,n,e[o+15],22,1236535329),s=F(s,a=F(a,n=F(n,i,s,a,e[o+1],5,-165796510),i,s,e[o+6],9,-1069501632),n,i,e[o+11],14,643717713),a,n,e[o],20,-373897302),s=F(s,a=F(a,n=F(n,i,s,a,e[o+5],5,-701558691),i,s,e[o+10],9,38016083),n,i,e[o+15],14,-660478335),a,n,e[o+4],20,-405537848),s=F(s,a=F(a,n=F(n,i,s,a,e[o+9],5,568446438),i,s,e[o+14],9,-1019803690),n,i,e[o+3],14,-187363961),a,n,e[o+8],20,1163531501),s=F(s,a=F(a,n=F(n,i,s,a,e[o+13],5,-1444681467),i,s,e[o+2],9,-51403784),n,i,e[o+7],14,1735328473),a,n,e[o+12],20,-1926607734),s=L(s,a=L(a,n=L(n,i,s,a,e[o+5],4,-378558),i,s,e[o+8],11,-2022574463),n,i,e[o+11],16,1839030562),a,n,e[o+14],23,-35309556),s=L(s,a=L(a,n=L(n,i,s,a,e[o+1],4,-1530992060),i,s,e[o+4],11,1272893353),n,i,e[o+7],16,-155497632),a,n,e[o+10],23,-1094730640),s=L(s,a=L(a,n=L(n,i,s,a,e[o+13],4,681279174),i,s,e[o],11,-358537222),n,i,e[o+3],16,-722521979),a,n,e[o+6],23,76029189),s=L(s,a=L(a,n=L(n,i,s,a,e[o+9],4,-640364487),i,s,e[o+12],11,-421815835),n,i,e[o+15],16,530742520),a,n,e[o+2],23,-995338651),s=V(s,a=V(a,n=V(n,i,s,a,e[o],6,-198630844),i,s,e[o+7],10,1126891415),n,i,e[o+14],15,-1416354905),a,n,e[o+5],21,-57434055),s=V(s,a=V(a,n=V(n,i,s,a,e[o+12],6,1700485571),i,s,e[o+3],10,-1894986606),n,i,e[o+10],15,-1051523),a,n,e[o+1],21,-2054922799),s=V(s,a=V(a,n=V(n,i,s,a,e[o+8],6,1873313359),i,s,e[o+15],10,-30611744),n,i,e[o+6],15,-1560198380),a,n,e[o+13],21,1309151649),s=V(s,a=V(a,n=V(n,i,s,a,e[o+4],6,-145523070),i,s,e[o+11],10,-1120210379),n,i,e[o+2],15,718787259),a,n,e[o+9],21,-343485551),n=B(n,r),i=B(i,l),s=B(s,c),a=B(a,d)}return[n,i,s,a]}function N(e,t,n,i,s,a){return B(function(e,t){return e<<t|e>>>32-t}(B(B(t,e),B(i,a)),s),n)}function R(e,t,n,i,s,a,o){return N(t&n|~t&i,e,t,s,a,o)}function F(e,t,n,i,s,a,o){return N(t&i|n&~i,e,t,s,a,o)}function L(e,t,n,i,s,a,o){return N(t^n^i,e,t,s,a,o)}function V(e,t,n,i,s,a,o){return N(n^(t|~i),e,t,s,a,o)}function B(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}Number.prototype.format=function(e,t,n,i){var s="\\d(?=(\\d{"+(t||3)+"})+"+(0<e?"\\D":"$")+")",a=this.toFixed(Math.max(0,~~e));return(i?a.replace(".",i):a).replace(new RegExp(s,"g"),"$&"+(n||","))},String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},String.prototype.contains=function(){return!!~String.prototype.indexOf.apply(this,arguments)},String.prototype.toDate=function(e,a){var t,n,i,s,o,r,l,c,d,h,u,p,f,m,v,g;a=a||"en-US";if(null==e||""===e)return new Date(this);if(t=this.replace(/[\/,.:\s]/g,"-"),n=e.toLowerCase().replace(/[^a-zA-Z0-9%]/g,"-").split("-"),i=t.split("-"),""===t.replace(/\-/g,"").trim())return"Invalid Date";if(s=-1<n.indexOf("mm")?n.indexOf("mm"):n.indexOf("%m"),o=-1<n.indexOf("dd")?n.indexOf("dd"):n.indexOf("%d"),r=-1<n.indexOf("yyyy")?n.indexOf("yyyy"):-1<n.indexOf("yy")?n.indexOf("yy"):n.indexOf("%y"),l=-1<n.indexOf("hh")?n.indexOf("hh"):n.indexOf("%h"),c=-1<n.indexOf("ii")?n.indexOf("ii"):-1<n.indexOf("mi")?n.indexOf("mi"):n.indexOf("%i"),d=-1<n.indexOf("ss")?n.indexOf("ss"):n.indexOf("%s"),!(-1<s&&""!==i[s]))return"Invalid Date";if(isNaN(parseInt(i[s]))){if(i[s]=function(e){var t,n,i,s;if(!H.isValue(e))return-1;if(e=e.substr(0,3),void 0!==a&&"en-US"!==a&&void 0!==T[a]&&void 0!==T[a].calendar&&void 0!==T[a].calendar.months){for(n=T[a].calendar.months,s=12;s<n.length;s++)if(n[s].toLowerCase()===e.toLowerCase()){i=s-12;break}e=T["en-US"].calendar.months[i]}return t=Date.parse(e+" 1, 1972"),isNaN(t)?-1:new Date(t).getMonth()+1}(i[s]),-1===i[s])return"Invalid Date"}else if((g=parseInt(i[s]))<1||12<g)return"Invalid Date";return h=-1<r&&""!==i[r]?i[r]:null,u=-1<s&&""!==i[s]?i[s]:null,p=-1<o&&""!==i[o]?i[o]:null,f=-1<l&&""!==i[l]?i[l]:null,m=-1<c&&""!==i[c]?i[c]:null,v=-1<d&&""!==i[d]?i[d]:null,new Date(h,u-1,p,f,m,v)},String.prototype.toArray=function(e,n,i){return n=n||"string",i=null!=i&&i,(""+this).split(e=e||",").map(function(e){var t;switch(n){case"int":case"integer":t=parseInt(e);break;case"number":case"float":t=parseFloat(e);break;case"date":t=i?e.toDate(i):new Date(e);break;default:t=e.trim()}return t})};M.template=function(e,t,n){var i,s,a,o="<%(.+?)%>",r=/(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g,l="with(obj) { var r=[];\n",c=0,d=function(e,t){return l+=t?e.match(r)?e+"\n":"r.push("+e+");\n":""!==e?'r.push("'+e.replace(/"/g,'\\"')+'");\n':"",d};for(H.isValue(n)&&(n.hasOwnProperty("beginToken")&&(o=o.replace("<%",n.beginToken)),n.hasOwnProperty("endToken")&&(o=o.replace("%>",n.endToken))),a=(i=new RegExp(o,"g")).exec(e);a;)d(e.slice(c,a.index))(a[1],!0),c=a.index+a[0].length,a=i.exec(e);d(e.substr(c,e.length-c)),l=(l+'return r.join(""); }').replace(/[\r\t\n]/g," ");try{s=new Function("obj",l).apply(t,[t])}catch(e){console.error("'"+e.message+"'"," in \n\nCode:\n",l,"\n")}return s};var H={isUrl:function(e){return/^(\.\/|\.\.\/|ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@\-\/]))?/.test(e)},isTag:function(e){return/^<\/?[\w\s="/.':;#-\/\?]+>/gi.test(e)},isColor:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},isEmbedObject:function(e){var t=!1;return D.each(["iframe","object","embed","video"],function(){"string"==typeof e&&e.toLowerCase()===this?t=!0:void 0!==e.nodeType&&e.tagName.toLowerCase()===this&&(t=!0)}),t},isVideoUrl:function(e){return/youtu\.be|youtube|vimeo/gi.test(e)},isDate:function(e,t){return!("object"!=typeof e||!H.isFunc(e.getMonth))||"Invalid Date"!==(H.isValue(t)?String(e).toDate(t):String(new Date(e)))},isDateObject:function(e){return"object"==typeof e&&void 0!==e.getMonth},isInt:function(e){return!isNaN(e)&&+e%1==0},isFloat:function(e){return!isNaN(e)&&+e%1!=0},isTouchDevice:function(){return"ontouchstart"in window||0<navigator.MaxTouchPoints||0<navigator.msMaxTouchPoints},isFunc:function(e){return H.isType(e,"function")},isObject:function(e){return H.isType(e,"object")},isArray:function(e){return Array.isArray(e)},isType:function(e,t){if(!H.isValue(e))return!1;if(typeof e===t)return e;if(H.isTag(e)||H.isUrl(e))return!1;if(typeof window[e]===t)return window[e];if("string"==typeof e&&-1===e.indexOf("."))return!1;if("string"==typeof e&&-1!==e.indexOf("/"))return!1;if("string"==typeof e&&-1!==e.indexOf(" "))return!1;if("string"==typeof e&&-1!==e.indexOf("("))return!1;if("string"==typeof e&&-1!==e.indexOf("["))return!1;if("number"==typeof e&&"number"!==t.toLowerCase())return!1;var n,i=e.split("."),s=window;for(n=0;n<i.length;n++)s=s[i[n]];return typeof s===t&&s},$:function(){return METRO_JQUERY&&jquery_present?jQuery:m4q},isMetroObject:function(e,t){var n=D(e),i=M.getPlugin(e,t);return 0===n.length?(console.warn(t+" "+e+" not found!"),!1):void 0!==i||(console.warn("Element not contain role "+t+'! Please add attribute data-role="'+t+'" to element '+e),!1)},isJQuery:function(e){return"undefined"!=typeof jQuery&&e instanceof jQuery},isM4Q:function(e){return"undefined"!=typeof m4q&&e instanceof m4q},isQ:function(e){return H.isJQuery(e)||H.isM4Q(e)},isIE11:function(){return!!window.MSInputMethodContext&&!!document.documentMode},embedObject:function(e){return"<div class='embed-container'>"+D(e)[0].outerHTML+"</div>"},embedUrl:function(e){return-1!==e.indexOf("youtu.be")&&(e="https://www.youtube.com/embed/"+e.split("/").pop()),"<div class='embed-container'><iframe src='"+e+"'></iframe></div>"},secondsToTime:function(e){var t=e%3600,n=t%60;return{h:Math.floor(e/3600),m:Math.floor(t/60),s:Math.ceil(n)}},hex2rgba:function(e,t){var n;if(t=isNaN(t)?1:t,/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return 3===(n=e.substring(1).split("")).length&&(n=[n[0],n[0],n[1],n[1],n[2],n[2]]),"rgba("+[(n="0x"+n.join(""))>>16&255,n>>8&255,255&n].join(",")+","+t+")";throw new Error("Hex2rgba error. Bad Hex value")},random:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},uniqueId:function(){var n=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===e?t:3&t|8).toString(16)})},elementId:function(e){return e+"-"+(new Date).getTime()+H.random(1,1e3)},secondsToFormattedString:function(e){var t=parseInt(e,10),n=Math.floor(t/3600),i=Math.floor((t-3600*n)/60),s=t-3600*n-60*i;return n<10&&(n="0"+n),i<10&&(i="0"+i),s<10&&(s="0"+s),[n,i,s].join(":")},callback:function(e,t,n){return H.exec(e,t,n)},func:function(e){return new Function("a",e)},exec:function(e,t,n){var i;if(null==e)return!1;var s=H.isFunc(e);!1===s&&(s=H.func(e));try{i=s.apply(n,t)}catch(e){if(!(i=null)===METRO_THROWS)throw e}return i},isOutsider:function(e){var t,n=D(e),i=n.clone();return i.removeAttr("data-role").css({visibility:"hidden",position:"absolute",display:"block"}),n.parent().append(i),t=i[0].getBoundingClientRect(),i.remove(),0<=t.top&&0<=t.left&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},inViewport:function(e){var t=H.rect(e);return 0<=t.top&&0<=t.left&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},rect:function(e){return e.getBoundingClientRect()},getCursorPosition:function(e,t){var n=H.rect(e);return{x:H.pageXY(t).x-n.left-window.pageXOffset,y:H.pageXY(t).y-n.top-window.pageYOffset}},getCursorPositionX:function(e,t){return H.getCursorPosition(e,t).x},getCursorPositionY:function(e,t){return H.getCursorPosition(e,t).y},objectLength:function(e){return Object.keys(e).length},percent:function(e,t,n){if(0===e)return 0;var i=100*t/e;return!0===n?Math.round(i):Math.round(100*i)/100},camelCase:function(e){return e.replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})},dashedName:function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})},objectShift:function(e){var t=0;return D.each(e,function(e){0===t?t=e:e<t&&(t=e)}),delete e[t],e},objectDelete:function(e,t){void 0!==e[t]&&delete e[t]},arrayDeleteByMultipleKeys:function(t,e){return e.forEach(function(e){delete t[e]}),t.filter(function(e){return void 0!==e})},arrayDelete:function(e,t){-1<e.indexOf(t)&&e.splice(e.indexOf(t),1)},arrayDeleteByKey:function(e,t){e.splice(t,1)},nvl:function(e,t){return null==e?t:e},objectClone:function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},github:function(e,t){D.json("https://api.github.com/repos/"+e).then(function(e){H.exec(t,[e])})},detectIE:function(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(0<t)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(0<e.indexOf("Trident/")){var n=e.indexOf("rv:");return parseInt(e.substring(n+3,e.indexOf(".",n)),10)}var i=e.indexOf("Edge/");return 0<i&&parseInt(e.substring(i+5,e.indexOf(".",i)),10)},detectChrome:function(){return/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)},md5:function(e){return function(e){return O(_(I(e)))}(e)},encodeURI:function(e){return encodeURI(e).replace(/%5B/g,"[").replace(/%5D/g,"]")},pageHeight:function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)},cleanPreCode:function(e){Array.prototype.slice.call(document.querySelectorAll(e),0).forEach(function(e){var t=e.textContent.replace(/^[\r\n]+/,"").replace(/\s+$/g,"");if(/^\S/gm.test(t))e.textContent=t;else{for(var n,i,s,a=/^[\t ]+/gm,o=1e3;n=a.exec(t);)(s=n[0].length)<o&&(o=s,i=n[0]);1e3!==o&&(e.textContent=t.replace(new RegExp("^"+i,"gm"),"").trim())}})},coords:function(e){var t=D(e)[0].getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},positionXY:function(e,t){switch(t){case"client":return H.clientXY(e);case"screen":return H.screenXY(e);case"page":return H.pageXY(e);default:return{x:0,y:0}}},clientXY:function(e){return{x:e.changedTouches?e.changedTouches[0].clientX:e.clientX,y:e.changedTouches?e.changedTouches[0].clientY:e.clientY}},screenXY:function(e){return{x:e.changedTouches?e.changedTouches[0].screenX:e.screenX,y:e.changedTouches?e.changedTouches[0].screenY:e.screenY}},pageXY:function(e){return{x:e.changedTouches?e.changedTouches[0].pageX:e.pageX,y:e.changedTouches?e.changedTouches[0].pageY:e.pageY}},isRightMouse:function(e){return"which"in e?3===e.which:"button"in e?2===e.button:void 0},hiddenElementSize:function(e,t){var n,i,s=D(e).clone(!0);return s.removeAttr("data-role").css({visibility:"hidden",position:"absolute",display:"block"}),D("body").append(s),H.isValue(t)||(t=!1),n=s.outerWidth(t),i=s.outerHeight(t),s.remove(),{width:n,height:i}},getStyle:function(e,t){var n=D(e)[0];return window.getComputedStyle(n,t)},getStyleOne:function(e,t){return H.getStyle(e).getPropertyValue(t)},getTransformMatrix:function(e,t){var n=H.getStyleOne(e,"transform").replace("matrix(","").slice(0,-1).split(",");return!0!==t?{a:n[0],b:n[1],c:n[2],d:n[3],tx:n[4],ty:n[5]}:n},computedRgbToHex:function(e){var t,n=e.replace(/[^\d,]/g,"").split(","),i="#";for(t=0;t<3;t++){var s=parseInt(n[t]).toString(16);i+=1===s.length?"0"+s:s}return i},computedRgbToRgba:function(e,t){var n=e.replace(/[^\d,]/g,"").split(",");return void 0===t&&(t=1),n.push(t),"rgba("+n.join(",")+")"},computedRgbToArray:function(e){return e.replace(/[^\d,]/g,"").split(",")},hexColorToArray:function(e){var t;return/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)?(3===(t=e.substring(1).split("")).length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),[(t="0x"+t.join(""))>>16&255,t>>8&255,255&t]):[0,0,0]},hexColorToRgbA:function(e,t){var n;return/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)?(3===(n=e.substring(1).split("")).length&&(n=[n[0],n[0],n[1],n[1],n[2],n[2]]),"rgba("+[(n="0x"+n.join(""))>>16&255,n>>8&255,255&n,t||1].join(",")+")"):"rgba(0,0,0,1)"},getInlineStyles:function(e){var t,n,i={},s=D(e)[0];for(t=0,n=s.style.length;t<n;t++){var a=s.style[t];i[a]=s.style[a]}return i},updateURIParameter:function(e,t,n){var i=new RegExp("([?&])"+t+"=.*?(&|$)","i"),s=-1!==e.indexOf("?")?"&":"?";return e.match(i)?e.replace(i,"$1"+t+"="+n+"$2"):e+s+t+"="+n},getURIParameter:function(e,t){e||(e=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},getLocales:function(){return Object.keys(M.locales)},addLocale:function(e){M.locales=D.extend({},M.locales,e)},strToArray:function(e,t,n,i){return H.isValue(t)||(t=","),H.isValue(n)||(n="string"),(""+e).split(t).map(function(e){var t;switch(n){case"int":case"integer":t=parseInt(e);break;case"number":case"float":t=parseFloat(e);break;case"date":t=H.isValue(i)?e.toDate(i):new Date(e);break;default:t=e.trim()}return t})},aspectRatioH:function(e,t){return"16/9"===t?9*e/16:"21/9"===t?9*e/21:"4/3"===t?3*e/4:void 0},aspectRatioW:function(e,t){return"16/9"===t?16*e/9:"21/9"===t?21*e/9:"4/3"===t?4*e/3:void 0},valueInObject:function(e,t){return-1<Object.values(e).indexOf(t)},keyInObject:function(e,t){return-1<Object.keys(e).indexOf(t)},inObject:function(e,t,n){return void 0!==e[t]&&e[t]===n},newCssSheet:function(e){var t=document.createElement("style");return void 0!==e&&t.setAttribute("media",e),t.appendChild(document.createTextNode("")),document.head.appendChild(t),t.sheet},addCssRule:function(e,t,n,i){"insertRule"in e?e.insertRule(t+"{"+n+"}",i):"addRule"in e&&e.addRule(t,n,i)},media:function(e){return window.matchMedia(e).matches},mediaModes:function(){return METRO_MEDIA},mediaExist:function(e){return-1<METRO_MEDIA.indexOf(e)},inMedia:function(e){return-1<METRO_MEDIA.indexOf(e)&&METRO_MEDIA.indexOf(e)===METRO_MEDIA.length-1},isValue:function(e){return null!=e&&""!==e},isNull:function(e){return null==e},isNegative:function(e){return parseFloat(e)<0},isPositive:function(e){return 0<parseFloat(e)},isZero:function(e){return 0===parseFloat(e.toFixed(2))},between:function(e,t,n,i){return!0===i?t<=e&&e<=n:t<e&&e<n},parseMoney:function(e){return Number(parseFloat(e.replace(/[^0-9-.]/g,"")))},parseCard:function(e){return e.replace(/[^0-9]/g,"")},parsePhone:function(e){return H.parseCard(e)},isVisible:function(e){var t=D(e)[0];return"none"!==H.getStyleOne(t,"display")&&"hidden"!==H.getStyleOne(t,"visibility")&&null!==t.offsetParent},parseNumber:function(e,t,n){return e.replace(new RegExp("\\"+t,"g"),"").replace(new RegExp("\\"+n,"g"),".")},nearest:function(e,t,n){return e/=t,e=Math[!0===n?"floor":"ceil"](e)*t},bool:function(e){switch(e){case!0:case"true":case 1:case"1":case"on":case"yes":return!0;default:return!1}},copy:function(e){var t,n,i=document.body,s=D(e)[0];if(document.createRange&&window.getSelection){t=document.createRange(),(n=window.getSelection()).removeAllRanges();try{t.selectNodeContents(s),n.addRange(t)}catch(e){t.selectNode(s),n.addRange(t)}}else i.createTextRange&&((t=i.createTextRange()).moveToElementText(s),t.select());document.execCommand("Copy"),window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty()},isLocalhost:function(e){return e=e||".local","localhost"===location.hostname||"127.0.0.1"===location.hostname||"[::1]"===location.hostname||""===location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)||-1!==location.hostname.indexOf(e)},formData:function(e){var t,n,i=D(e)[0],s={};if(i&&"FORM"===i.nodeName){for(t=i.elements.length-1;0<=t;t-=1)if(""!==i.elements[t].name)switch(i.elements[t].nodeName){case"INPUT":switch(i.elements[t].type){case"text":case"hidden":case"password":case"button":case"reset":case"submit":s[i.elements[t].name]=i.elements[t].value;break;case"checkbox":case"radio":i.elements[t].checked&&(s[i.elements[t].name]=i.elements[t].value)}break;case"TEXTAREA":s[i.elements[t].name]=i.elements[t].value;break;case"SELECT":switch(i.elements[t].type){case"select-one":s[i.elements[t].name]=i.elements[t].value;break;case"select-multiple":for(s[i.elements[t].name]=[],n=i.elements[t].options.length-1;0<=n;n-=1)i.elements[t].options[n].selected&&s[i.elements[t].name].push(i.elements[t].options[n].value)}break;case"BUTTON":switch(i.elements[t].type){case"reset":case"submit":case"button":s[i.elements[t].name]=i.elements[t].value}}return s}},decCount:function(e){return e%1==0?0:e.toString().split(".")[1].length}};M.utils=H;var z={accordionDeferred:0,showMarker:!0,material:!1,duration:METRO_ANIMATION_DURATION,oneFrame:!0,showActive:!0,activeFrameClass:"",activeHeadingClass:"",activeContentClass:"",onFrameOpen:M.noop,onFrameBeforeOpen:M.noop_true,onFrameClose:M.noop,onFrameBeforeClose:M.noop_true,onAccordionCreate:M.noop};M.accordionSetup=function(e){z=D.extend({},z,e)},window.metroAccordionSetup,M.accordionSetup(window.metroAccordionSetup);var j={name:"Accordion",init:function(e,t){return this.options=D.extend({},z,e),this.elem=t,this.element=D(t),this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"accordion"),this._createStructure(),this._createEvents(),H.exec(t.onAccordionCreate,[e]),e.fire("accordioncreate")},_createStructure:function(){var e,t=this,n=this.element,i=this.options,s=n.children(".frame"),a=n.children(".frame.active");n.addClass("accordion"),!0===i.showMarker&&n.addClass("marker-on"),!0===i.material&&n.addClass("material"),e=0===a.length?s[0]:a[0],this._hideAll(),!0===i.showActive&&(!0===i.oneFrame?this._openFrame(e):D.each(a,function(){t._openFrame(this)}))},_createEvents:function(){var n=this,i=this.element,s=this.options,a=i.children(".frame.active");i.on(M.events.click,".heading",function(){var e=D(this),t=e.parent();if(e.closest(".accordion")[0]!==i[0])return!1;t.hasClass("active")?1===a.length&&s.oneFrame||n._closeFrame(t):n._openFrame(t)})},_openFrame:function(e){var t=this.element,n=this.options,i=D(e);if(!1===H.exec(n.onFrameBeforeOpen,[i[0]],t[0]))return!1;!0===n.oneFrame&&this._closeAll(i[0]),i.addClass("active "+n.activeFrameClass),i.children(".heading").addClass(n.activeHeadingClass),i.children(".content").addClass(n.activeContentClass).slideDown(n.duration),H.exec(n.onFrameOpen,[i[0]],t[0]),t.fire("frameopen",{frame:i[0]})},_closeFrame:function(e){var t=this.element,n=this.options,i=D(e);i.hasClass("active")&&!1!==H.exec(n.onFrameBeforeClose,[i[0]],t[0])&&(i.removeClass("active "+n.activeFrameClass),i.children(".heading").removeClass(n.activeHeadingClass),i.children(".content").removeClass(n.activeContentClass).slideUp(n.duration),H.callback(n.onFrameClose,[i[0]],t[0]),t.fire("frameclose",{frame:i[0]}))},_closeAll:function(e){var t=this,n=this.element.children(".frame");D.each(n,function(){e!==this&&t._closeFrame(this)})},_hideAll:function(){var e=this.element.children(".frame");D.each(e,function(){D(this).children(".content").hide()})},_openAll:function(){var e=this,t=this.element.children(".frame");D.each(t,function(){e._openFrame(this)})},changeAttribute:function(e){},destroy:function(){var e=this.element;return e.off(M.events.click,".heading"),e}};M.plugin("accordion",j);var U={activityDeferred:0,type:"ring",style:"light",size:64,radius:20,onActivityCreate:M.noop};M.activitySetup=function(e){U=D.extend({},U,e)},window.metroActivitySetup,M.activitySetup(window.metroActivitySetup);var W={name:"Activity",init:function(e,t){return this.options=D.extend({},U,e),this.elem=t,this.element=D(t),this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e,t,n=this.element,i=this.options;switch(M.checkRuntime(n,"activity"),n.html("").addClass(i.style+"-style").addClass("activity-"+i.type),i.type){case"metro":!function(){for(e=0;e<5;e++)D("<div/>").addClass("circle").appendTo(n)}();break;case"square":!function(){for(e=0;e<4;e++)D("<div/>").addClass("square").appendTo(n)}();break;case"cycle":D("<div/>").addClass("cycle").appendTo(n);break;case"simple":D('<svg class="circular"><circle class="path" cx="'+i.size/2+'" cy="'+i.size/2+'" r="'+i.radius+'" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg>').appendTo(n);break;default:!function(){for(e=0;e<5;e++)t=D("<div/>").addClass("wrap").appendTo(n),D("<div/>").addClass("circle").appendTo(t)}()}H.exec(this.options.onActivityCreate,[this.element]),n.fire("activitycreate")},changeAttribute:function(e){},destroy:function(){return this.element}};M.plugin("activity",W);var Y={appbarDeferred:0,expand:!(M.activity={open:function(e){var t=e||{},n='<div data-role="activity" data-type="'+(t.type?t.type:"cycle")+'" data-style="'+(t.style?t.style:"color")+'"></div>',i=t.text?'<div class="text-center">'+t.text+"</div>":"";return M.dialog.create({content:n+i,defaultAction:!1,clsContent:"d-flex flex-column flex-justify-center flex-align-center bg-transparent no-shadow w-auto",clsDialog:"no-border no-shadow bg-transparent global-dialog",autoHide:t.autoHide?t.autoHide:0,overlayClickClose:!0===t.overlayClickClose,overlayColor:t.overlayColor?t.overlayColor:"#000000",overlayAlpha:t.overlayAlpha?t.overlayAlpha:.5,clsOverlay:"global-overlay"})},close:function(e){M.dialog.close(e)}}),expandPoint:null,duration:100,onMenuOpen:M.noop,onMenuClose:M.noop,onMenuCollapse:M.noop,onMenuExpand:M.noop,onAppBarCreate:M.noop};M.appBarSetup=function(e){Y=D.extend({},Y,e)},window.metroAppBarSetup,M.appBarSetup(window.metroAppBarSetup);var J={name:"AppBar",init:function(e,t){return this.options=D.extend({},Y,e),this.elem=t,this.element=D(t),this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"appbar"),this._createStructure(),this._createEvents(),H.exec(t.onAppBarCreate,[e]),e.fire("appbarcreate")},_createStructure:function(){var e,t,n=this.element,i=this.options,s=H.elementId("app-bar");if(n.addClass("app-bar"),0===(e=n.find(".hamburger")).length){e=D("<button>").attr("type","button").addClass("hamburger menu-down");for(var a=0;a<3;a++)D("<span>").addClass("line").appendTo(e);!0===x.isLight(H.computedRgbToHex(H.getStyleOne(n,"background-color")))&&e.addClass("dark")}n.prepend(e),0===(t=n.find(".app-bar-menu")).length?e.css("display","none"):H.addCssRule(M.sheet,".app-bar-menu li","list-style: none!important;"),!1==!!n.attr("id")&&n.attr("id",s),"block"===e.css("display")?(t.hide().addClass("collapsed"),e.removeClass("hidden")):e.addClass("hidden"),!0===i.expand?(n.addClass("app-bar-expand"),e.addClass("hidden")):H.isValue(i.expandPoint)&&H.mediaExist(i.expandPoint)&&(n.addClass("app-bar-expand"),e.addClass("hidden"))},_createEvents:function(){var e=this,t=this.element,n=this.options,i=t.find(".app-bar-menu"),s=t.find(".hamburger");t.on(M.events.click,".hamburger",function(){0!==i.length&&(i.hasClass("collapsed")?e.open():e.close())}),D(window).on(M.events.resize,function(){!0!==n.expand&&(H.isValue(n.expandPoint)&&H.mediaExist(n.expandPoint)?(t.addClass("app-bar-expand"),H.exec(n.onMenuExpand,null,t[0]),t.fire("menuexpand")):(t.removeClass("app-bar-expand"),H.exec(n.onMenuCollapse,null,t[0]),t.fire("menucollapse"))),0!==i.length&&("block"!==s.css("display")?(i.show(function(){D(this).removeStyleProperty("display")}),s.addClass("hidden")):(s.removeClass("hidden"),s.hasClass("active")?i.show().removeClass("collapsed"):i.hide().addClass("collapsed")))},{ns:t.attr("id")})},close:function(){var e=this.element,t=this.options,n=e.find(".app-bar-menu"),i=e.find(".hamburger");n.slideUp(t.duration,function(){n.addClass("collapsed").removeClass("opened"),i.removeClass("active")}),H.exec(t.onMenuClose,[n[0]],e[0]),e.fire("menuclose",{menu:n[0]})},open:function(){var e=this.element,t=this.options,n=e.find(".app-bar-menu"),i=e.find(".hamburger");n.slideDown(t.duration,function(){n.removeClass("collapsed").addClass("opened"),i.addClass("active")}),H.exec(t.onMenuOpen,[n[0]],e[0]),e.fire("menuopen",{menu:n[0]})},changeAttribute:function(e){},destroy:function(){var e=this.element;return e.off(M.events.click,".hamburger"),D(window).off(M.events.resize,{ns:e.attr("id")}),e}};M.plugin("appbar",J);var G={audioDeferred:0,playlist:null,src:null,volume:.5,loop:!1,autoplay:!1,showLoop:!0,showPlay:!0,showStop:!0,showMute:!0,showFull:!0,showStream:!0,showVolume:!0,showInfo:!0,showPlaylist:!0,showNext:!0,showPrev:!0,showFirst:!0,showLast:!0,showForward:!0,showBackward:!0,showShuffle:!0,showRandom:!0,loopIcon:"<span class='default-icon-loop'></span>",stopIcon:"<span class='default-icon-stop'></span>",playIcon:"<span class='default-icon-play'></span>",pauseIcon:"<span class='default-icon-pause'></span>",muteIcon:"<span class='default-icon-mute'></span>",volumeLowIcon:"<span class='default-icon-low-volume'></span>",volumeMediumIcon:"<span class='default-icon-medium-volume'></span>",volumeHighIcon:"<span class='default-icon-high-volume'></span>",playlistIcon:"<span class='default-icon-playlist'></span>",nextIcon:"<span class='default-icon-next'></span>",prevIcon:"<span class='default-icon-prev'></span>",firstIcon:"<span class='default-icon-first'></span>",lastIcon:"<span class='default-icon-last'></span>",forwardIcon:"<span class='default-icon-forward'></span>",backwardIcon:"<span class='default-icon-backward'></span>",shuffleIcon:"<span class='default-icon-shuffle'></span>",randomIcon:"<span class='default-icon-random'></span>",onPlay:M.noop,onPause:M.noop,onStop:M.noop,onEnd:M.noop,onMetadata:M.noop,onTime:M.noop,onAudioCreate:M.noop};M.audioSetup=function(e){G=D.extend({},G,e)},window.metroAudioSetup,M.audioSetup(window.metroAudioSetup);var K={name:"Audio",init:function(e,t){return this.options=D.extend({},G,e),this.elem=t,this.element=D(t),this.preloader=null,this.player=null,this.audio=t,this.stream=null,this.volume=null,this.volumeBackup=0,this.muted=!1,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"audio"),this._createPlayer(),this._createControls(),this._createEvents(),!0===t.autoplay&&this.play(),H.exec(t.onAudioCreate,[e,this.player],e[0]),e.fire("audiocreate")},_createPlayer:function(){var e=this.element,t=this.options,n=this.audio,i=e.prev(),s=e.parent(),a=D("<div>").addClass("media-player audio-player "+e[0].className);0===i.length?s.prepend(a):a.insertAfter(i),e.appendTo(a),D.each(["muted","autoplay","controls","height","width","loop","poster","preload"],function(){e.removeAttr(this)}),e.attr("preload","auto"),n.volume=t.volume,null!==t.src&&this._setSource(t.src),e[0].className="",this.player=a},_setSource:function(e){var t=this.element;t.find("source").remove(),t.removeAttr("src"),Array.isArray(e)?D.each(e,function(){void 0!==this.src&&D("<source>").attr("src",this.src).attr("type",void 0!==this.type?this.type:"").appendTo(t)}):t.attr("src",e)},_createControls:function(){var e,t=this,n=this.element,i=this.options,s=this.elem,a=D("<div>").addClass("controls").addClass(i.clsControls).insertAfter(n),o=D("<div>").addClass("stream").appendTo(a),r=D("<input>").addClass("stream-slider ultra-thin cycle-marker").appendTo(o),l=D("<div>").addClass("load-audio").appendTo(o),c=D("<div>").addClass("volume").appendTo(a),d=D("<input>").addClass("volume-slider ultra-thin cycle-marker").appendTo(c),h=D("<div>").addClass("info-box").appendTo(a);!0!==i.showInfo&&h.hide(),l.activity({type:"metro",style:"color"}),l.hide(0),this.preloader=l,M.makePlugin(r,"slider",{clsMarker:"bg-red",clsHint:"bg-cyan fg-white",clsComplete:"bg-cyan",hint:!0,onStart:function(){s.paused||s.pause()},onStop:function(e){0<s.seekable.length&&(s.currentTime=(t.duration*e/100).toFixed(0)),s.paused&&0<s.currentTime&&s.play()}}),this.stream=r,!0!==i.showStream&&o.hide(),M.makePlugin(d,"slider",{clsMarker:"bg-red",clsHint:"bg-cyan fg-white",hint:!0,value:100*i.volume,onChangeValue:function(e){s.volume=e/100}}),this.volume=d,!0!==i.showVolume&&c.hide(),!0===i.showLoop&&(e=D("<button>").attr("type","button").addClass("button square loop").html(i.loopIcon).appendTo(a)),!0===i.showPlay&&D("<button>").attr("type","button").addClass("button square play").html(i.playIcon).appendTo(a),!0===i.showStop&&D("<button>").attr("type","button").addClass("button square stop").html(i.stopIcon).appendTo(a),!0===i.showMute&&D("<button>").attr("type","button").addClass("button square mute").html(i.muteIcon).appendTo(a),!0===i.loop&&(e.addClass("active"),n.attr("loop","loop")),this._setVolume(),i.muted&&(t.volumeBackup=s.volume,M.getPlugin(t.volume,"slider").val(0),s.volume=0),h.html("00:00 / 00:00")},_createEvents:function(){var t=this,n=this.element,i=this.options,s=this.elem,a=this.player;n.on("loadstart",function(){t.preloader.fadeIn()}),n.on("loadedmetadata",function(){t.duration=s.duration.toFixed(0),t._setInfo(0,t.duration),H.exec(i.onMetadata,[s,a],n[0])}),n.on("canplay",function(){t._setBuffer(),t.preloader.fadeOut()}),n.on("progress",function(){t._setBuffer()}),n.on("timeupdate",function(){var e=Math.round(100*s.currentTime/t.duration);t._setInfo(s.currentTime,t.duration),M.getPlugin(t.stream,"slider").val(e),H.exec(i.onTime,[s.currentTime,t.duration,s,a],n[0])}),n.on("waiting",function(){t.preloader.fadeIn()}),n.on("loadeddata",function(){}),n.on("play",function(){a.find(".play").html(i.pauseIcon),H.exec(i.onPlay,[s,a],n[0])}),n.on("pause",function(){a.find(".play").html(i.playIcon),H.exec(i.onPause,[s,a],n[0])}),n.on("stop",function(){M.getPlugin(t.stream,"slider").val(0),H.exec(i.onStop,[s,a],n[0])}),n.on("ended",function(){M.getPlugin(t.stream,"slider").val(0),H.exec(i.onEnd,[s,a],n[0])}),n.on("volumechange",function(){t._setVolume()}),a.on(M.events.click,".play",function(){s.paused?t.play():t.pause()}),a.on(M.events.click,".stop",function(){t.stop()}),a.on(M.events.click,".mute",function(){t._toggleMute()}),a.on(M.events.click,".loop",function(){t._toggleLoop()})},_toggleLoop:function(){var e=this.player.find(".loop");0!==e.length&&(e.toggleClass("active"),e.hasClass("active")?this.element.attr("loop","loop"):this.element.removeAttr("loop"))},_toggleMute:function(){this.muted=!this.muted,!1===this.muted?this.audio.volume=this.volumeBackup:(this.volumeBackup=this.audio.volume,this.audio.volume=0),M.getPlugin(this.volume,"slider").val(!1===this.muted?100*this.volumeBackup:0)},_setInfo:function(e,t){this.player.find(".info-box").html(H.secondsToFormattedString(Math.round(e))+" / "+H.secondsToFormattedString(Math.round(t)))},_setBuffer:function(){var e=this.audio.buffered.length?Math.round(Math.floor(this.audio.buffered.end(0))/Math.floor(this.audio.duration)*100):0;M.getPlugin(this.stream,"slider").buff(e)},_setVolume:function(){var e=this.audio,t=this.player,n=this.options,i=t.find(".mute"),s=100*e.volume;1<s&&s<30?i.html(n.volumeLowIcon):30<=s&&s<60?i.html(n.volumeMediumIcon):60<=s&&s<=100?i.html(n.volumeHighIcon):i.html(n.muteIcon)},play:function(e){void 0!==e&&this._setSource(e),void 0===this.element.attr("src")&&0===this.element.find("source").length||this.audio.play()},pause:function(){this.audio.pause()},resume:function(){this.audio.paused&&this.play()},stop:function(){this.audio.pause(),this.audio.currentTime=0,M.getPlugin(this.stream,"slider").val(0)},volume:function(e){if(void 0===e)return this.audio.volume;1<e&&(e/=100),this.audio.volume=e,M.getPlugin(this.volume,"slider").val(100*e)},loop:function(){this._toggleLoop()},mute:function(){this._toggleMute()},changeSource:function(){var e=JSON.parse(this.element.attr("data-src"));this.play(e)},changeVolume:function(){var e=this.element.attr("data-volume");this.volume(e)},changeAttribute:function(e){switch(e){case"data-src":this.changeSource();break;case"data-volume":this.changeVolume()}},destroy:function(){var e=this.element,t=this.player;return e.off("all"),t.off("all"),M.getPlugin(this.stream[0],"slider").destroy(),M.getPlugin(this.volume[0],"slider").destroy(),e}};M.plugin("audio",K);var q={bottomsheetDeferred:0,mode:"list",toggle:null,onOpen:M.noop,onClose:M.noop,onBottomSheetCreate:M.noop};M.bottomSheetSetup=function(e){q=D.extend({},q,e)},window.metroBottomSheetSetup,M.bottomSheetSetup(window.metroBottomSheetSetup);var Q={name:"BottomSheet",init:function(e,t){return this.options=D.extend({},q,e),this.elem=t,this.element=D(t),this.toggle=null,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"bottomsheet"),this._createStructure(),this._createEvents(),H.exec(t.onBottomSheetCreate,[e],e[0]),e.fire("bottomsheetcreate")},_createStructure:function(){var e=this.element,t=this.options;e.addClass("bottom-sheet").addClass(t.mode+"-list"),H.isValue(t.toggle)&&0<D(t.toggle).length&&(this.toggle=D(t.toggle))},_createEvents:function(){var e=this,t=this.element;H.isValue(this.toggle)&&this.toggle.on(M.events.click,function(){e.toggle()}),t.on(M.events.click,"li",function(){e.close()})},isOpen:function(){return this.element.hasClass("opened")},open:function(e){var t=this.element,n=this.options;H.isValue(e)&&t.removeClass("list-style grid-style").addClass(e+"-style"),this.element.addClass("opened"),H.exec(n.onOpen,[t],t[0]),t.fire("open")},close:function(){var e=this.element,t=this.options;e.removeClass("opened"),H.exec(t.onClose,[e],e[0]),e.fire("close")},toggle:function(e){this.isOpen()?this.close():this.open(e)},changeAttribute:function(e){},destroy:function(){var e=this.element;return H.isValue(this.toggle)&&this.toggle.off(M.events.click),e.off(M.events.click,"li"),e}};M.plugin("bottomsheet",Q);var X={buttongroupDeferred:0,targets:"button",clsActive:"active",requiredButton:!(M.bottomsheet={isBottomSheet:function(e){return H.isMetroObject(e,"bottomsheet")},open:function(e,t){if(!this.isBottomSheet(e))return!1;M.getPlugin(D(e)[0],"bottomsheet").open(t)},close:function(e){if(!this.isBottomSheet(e))return!1;M.getPlugin(D(e)[0],"bottomsheet").close()},toggle:function(e,t){if(!this.isBottomSheet(e))return!1;this.isOpen(e)?this.close(e):this.open(e,t)},isOpen:function(e){return!!this.isBottomSheet(e)&&M.getPlugin(D(e)[0],"bottomsheet").isOpen()}}),mode:M.groupMode.ONE,onButtonClick:M.noop,onButtonsGroupCreate:M.noop};M.buttonGroupSetup=function(e){X=D.extend({},X,e)},window.metroButtonGroupSetup,M.buttonGroupSetup(window.metroButtonGroupSetup);var $={name:"ButtonGroup",init:function(e,t){return this.options=D.extend({},X,e),this.elem=t,this.element=D(t),this.active=null,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"buttongroup"),this._createGroup(),this._createEvents(),H.exec(t.onButtonsGroupCreate,[e]),e.fire("buttongroupcreate")},_createGroup:function(){var e,t,n=this.element,i=this.options,s=H.elementId("button-group");void 0===n.attr("id")&&n.attr("id",s),n.addClass("button-group"),e=n.find(i.targets),t=n.find("."+i.clsActive),i.mode===M.groupMode.ONE&&0===t.length&&!0===i.requiredButton&&D(e[0]).addClass(i.clsActive),i.mode===M.groupMode.ONE&&1<t.length&&(e.removeClass(i.clsActive),D(e[0]).addClass(i.clsActive)),n.find("."+i.clsActive).addClass("js-active")},_createEvents:function(){var t=this.element,n=this.options;t.on(M.events.click,n.targets,function(){var e=D(this);H.exec(n.onButtonClick,[e],this),t.fire("buttonclick",{button:this}),n.mode===M.groupMode.ONE&&e.hasClass(n.clsActive)||(n.mode===M.groupMode.ONE?(t.find(n.targets).removeClass(n.clsActive).removeClass("js-active"),e.addClass(n.clsActive).addClass("js-active")):e.toggleClass(n.clsActive).toggleClass("js-active"))})},changeAttribute:function(e){},destroy:function(){var e=this.element,t=this.options;return e.off(M.events.click,t.targets),e}};M.plugin("buttongroup",$);var Z={calendarDeferred:0,dayBorder:!1,excludeDay:null,prevMonthIcon:"<span class='default-icon-chevron-left'></span>",nextMonthIcon:"<span class='default-icon-chevron-right'></span>",prevYearIcon:"<span class='default-icon-chevron-left'></span>",nextYearIcon:"<span class='default-icon-chevron-right'></span>",compact:!1,wide:!1,widePoint:null,pickerMode:!1,show:null,locale:METRO_LOCALE,weekStart:METRO_WEEK_START,outside:!0,buttons:"cancel, today, clear, done",yearsBefore:100,yearsAfter:100,headerFormat:"%A, %b %e",showHeader:!0,showFooter:!0,showTimeField:!0,showWeekNumber:!1,clsCalendar:"",clsCalendarHeader:"",clsCalendarContent:"",clsCalendarFooter:"",clsCalendarMonths:"",clsCalendarYears:"",clsToday:"",clsSelected:"",clsExcluded:"",clsCancelButton:"",clsTodayButton:"",clsClearButton:"",clsDoneButton:"",isDialog:!1,ripple:!1,rippleColor:"#cccccc",exclude:null,preset:null,minDate:null,maxDate:null,weekDayClick:!1,weekNumberClick:!1,multiSelect:!1,special:null,format:METRO_DATE_FORMAT,inputFormat:null,onCancel:M.noop,onToday:M.noop,onClear:M.noop,onDone:M.noop,onDayClick:M.noop,onDayDraw:M.noop,onWeekDayClick:M.noop,onWeekNumberClick:M.noop,onMonthChange:M.noop,onYearChange:M.noop,onCalendarCreate:M.noop};M.calendarSetup=function(e){Z=D.extend({},Z,e)},window.metroCalendarSetup,M.calendarSetup(window.metroCalendarSetup);var ee={name:"Calendar",init:function(e,t){return this.options=D.extend({},Z,e),this.elem=t,this.element=D(t),this.today=new Date,this.today.setHours(0,0,0,0),this.show=new Date,this.show.setHours(0,0,0,0),this.current={year:this.show.getFullYear(),month:this.show.getMonth(),day:this.show.getDate()},this.preset=[],this.selected=[],this.exclude=[],this.special=[],this.excludeDay=[],this.min=null,this.max=null,this.locale=null,this.minYear=this.current.year-this.options.yearsBefore,this.maxYear=this.current.year+this.options.yearsAfter,this.offset=(new Date).getTimezoneOffset()/60+1,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"calendar"),e.attr("id")||e.attr("id",H.elementId("calendar")),e.html("").addClass("calendar "+(!0===t.compact?"compact":"")).addClass(t.clsCalendar),!0===t.dayBorder&&e.addClass("day-border"),H.isValue(t.excludeDay)&&(this.excludeDay=(""+t.excludeDay).toArray(",","int")),H.isValue(t.preset)&&this._dates2array(t.preset,"selected"),H.isValue(t.exclude)&&this._dates2array(t.exclude,"exclude"),H.isValue(t.special)&&this._dates2array(t.special,"special"),!1!==t.buttons&&!1===Array.isArray(t.buttons)&&(t.buttons=t.buttons.split(",").map(function(e){return e.trim()})),null!==t.minDate&&H.isDate(t.minDate,t.inputFormat)&&(this.min=H.isValue(t.inputFormat)?t.minDate.toDate(t.inputFormat):new Date(t.minDate)),null!==t.maxDate&&H.isDate(t.maxDate,t.inputFormat)&&(this.max=H.isValue(t.inputFormat)?t.maxDate.toDate(t.inputFormat):new Date(t.maxDate)),null!==t.show&&H.isDate(t.show,t.inputFormat)&&(this.show=H.isValue(t.inputFormat)?t.show.toDate(t.inputFormat):new Date(t.show),this.show.setHours(0,0,0,0),this.current={year:this.show.getFullYear(),month:this.show.getMonth(),day:this.show.getDate()}),this.locale=void 0!==M.locales[t.locale]?M.locales[t.locale]:M.locales["en-US"],this._drawCalendar(),this._createEvents(),!0===t.wide?e.addClass("calendar-wide"):!H.isNull(t.widePoint)&&H.mediaExist(t.widePoint)&&e.addClass("calendar-wide"),!0===t.ripple&&!1!==H.isFunc(e.ripple)&&e.ripple({rippleTarget:".button, .prev-month, .next-month, .prev-year, .next-year, .day",rippleColor:this.options.rippleColor}),H.exec(this.options.onCalendarCreate,[this.element]),e.fire("calendarcreate")},_dates2array:function(e,t){var n,i=this,s=this.options;H.isNull(e)||(n="string"==typeof e?H.strToArray(e):e,D.each(n,function(){var e;if(H.isDateObject(this))e=this;else{if(e=H.isValue(s.inputFormat)?this.toDate(s.inputFormat):new Date(this),!1===H.isDate(e))return;e.setHours(0,0,0,0)}i[t].push(e.getTime())}))},_createEvents:function(){var s=this,a=this.element,o=this.options;D(window).on(M.events.resize,function(){!0!==o.wide&&(!H.isNull(o.widePoint)&&H.mediaExist(o.widePoint)?a.addClass("calendar-wide"):a.removeClass("calendar-wide"))},{ns:a.attr("id")}),a.on(M.events.click,function(e){var t=a.find(".calendar-months"),n=a.find(".calendar-years");t.hasClass("open")&&t.removeClass("open"),n.hasClass("open")&&n.removeClass("open")}),a.on(M.events.click,".prev-month, .next-month, .prev-year, .next-year",function(e){var t,n=D(this);n.hasClass("prev-month")&&(t=new Date(s.current.year,s.current.month-1,1)).getFullYear()<s.minYear||n.hasClass("next-month")&&(t=new Date(s.current.year,s.current.month+1,1)).getFullYear()>s.maxYear||n.hasClass("prev-year")&&(t=new Date(s.current.year-1,s.current.month,1)).getFullYear()<s.minYear||n.hasClass("next-year")&&(t=new Date(s.current.year+1,s.current.month,1)).getFullYear()>s.maxYear||(s.current={year:t.getFullYear(),month:t.getMonth(),day:t.getDate()},setTimeout(function(){s._drawContent(),(n.hasClass("prev-month")||n.hasClass("next-month"))&&(H.exec(o.onMonthChange,[s.current,a],a[0]),a.fire("monthchange",{current:s.current})),(n.hasClass("prev-year")||n.hasClass("next-year"))&&(H.exec(o.onYearChange,[s.current,a],a[0]),a.fire("yearchange",{current:s.current}))},o.ripple?300:1))}),a.on(M.events.click,".button.today",function(e){s.toDay(),H.exec(o.onToday,[s.today,a]),a.fire("today",{today:s.today})}),a.on(M.events.click,".button.clear",function(e){s.selected=[],s._drawContent(),H.exec(o.onClear,[a]),a.fire("clear")}),a.on(M.events.click,".button.cancel",function(e){s._drawContent(),H.exec(o.onCancel,[a]),a.fire("cancel")}),a.on(M.events.click,".button.done",function(e){s._drawContent(),H.exec(o.onDone,[s.selected,a]),a.fire("done")}),!0===o.weekDayClick&&a.on(M.events.click,".week-days .day",function(e){var t,n,i;n=(t=D(this)).index(),!0===o.multiSelect&&(i=!0===o.outside?a.find(".days-row .day:nth-child("+(n+1)+")"):a.find(".days-row .day:not(.outside):nth-child("+(n+1)+")"),D.each(i,function(){var e=D(this),t=e.data("day");e.hasClass("disabled")||e.hasClass("excluded")||(s.selected.contains(t)||s.selected.push(t),e.addClass("selected").addClass(o.clsSelected))})),H.exec(o.onWeekDayClick,[s.selected,t],a[0]),a.fire("weekdayclick",{day:t,selected:s.selected}),e.preventDefault(),e.stopPropagation()}),o.weekNumberClick&&a.on(M.events.click,".days-row .week-number",function(e){var t,n,i;n=(t=D(this)).text(),!0===o.multiSelect&&(i=D(this).siblings(".day"),D.each(i,function(){var e=D(this),t=e.data("day");e.hasClass("disabled")||e.hasClass("excluded")||(s.selected.contains(t)||s.selected.push(t),e.addClass("selected").addClass(o.clsSelected))})),H.exec(o.onWeekNumberClick,[s.selected,n,t],a[0]),a.fire("weeknumberclick",{el:this,num:n,selected:s.selected}),e.preventDefault(),e.stopPropagation()}),a.on(M.events.click,".days-row .day",function(e){var t,n,i=D(this);if(n=i.data("day"),t=s.selected.indexOf(n),i.hasClass("outside"))return n=new Date(n),s.current={year:n.getFullYear(),month:n.getMonth(),day:n.getDate()},void s._drawContent();i.hasClass("disabled")||(!0===o.pickerMode?(s.selected=[n],s.today=new Date(n),s.current.year=s.today.getFullYear(),s.current.month=s.today.getMonth(),s.current.day=s.today.getDate(),s._drawHeader(),s._drawContent()):-1===t?(!1===o.multiSelect&&(a.find(".days-row .day").removeClass("selected").removeClass(o.clsSelected),s.selected=[]),s.selected.push(n),i.addClass("selected").addClass(o.clsSelected)):(i.removeClass("selected").removeClass(o.clsSelected),H.arrayDelete(s.selected,n))),H.exec(o.onDayClick,[s.selected,i,a]),a.fire("dayclick",{day:i,selected:s.selected}),e.preventDefault(),e.stopPropagation()}),a.on(M.events.click,".curr-month",function(e){var t,n=a.find(".months-list");n.find(".active").removeClass("active"),n.scrollTop(0),a.find(".calendar-months").addClass("open"),t=n.find(".js-month-"+s.current.month).addClass("active"),setTimeout(function(){n.animate({scrollTop:t.position().top-(n.height()-t.height())/2},200)},300),e.preventDefault(),e.stopPropagation()}),a.on(M.events.click,".calendar-months li",function(e){s.current.month=D(this).index(),s._drawContent(),H.exec(o.onMonthChange,[s.current,a],a[0]),a.fire("monthchange",{current:s.current}),a.find(".calendar-months").removeClass("open"),e.preventDefault(),e.stopPropagation()}),a.on(M.events.click,".curr-year",function(e){var t,n=a.find(".years-list");n.find(".active").removeClass("active"),n.scrollTop(0),a.find(".calendar-years").addClass("open"),t=n.find(".js-year-"+s.current.year).addClass("active"),setTimeout(function(){n.animate({scrollTop:t.position().top-(n.height()-t.height())/2},200)},300),e.preventDefault(),e.stopPropagation()}),a.on(M.events.click,".calendar-years li",function(e){s.current.year=D(this).text(),s._drawContent(),H.exec(o.onYearChange,[s.current,a],a[0]),a.fire("yearchange",{current:s.current}),a.find(".calendar-years").removeClass("open"),e.preventDefault(),e.stopPropagation()})},_drawHeader:function(){var e=this.element,t=this.options,n=e.find(".calendar-header");0===n.length&&(n=D("<div>").addClass("calendar-header").addClass(t.clsCalendarHeader).appendTo(e)),n.html(""),D("<div>").addClass("header-year").html(this.today.getFullYear()).appendTo(n),D("<div>").addClass("header-day").html(this.today.format(t.headerFormat,t.locale)).appendTo(n),!1===t.showHeader&&n.hide()},_drawFooter:function(){var e=this.element,t=this.options,n=this.locale.buttons,i=e.find(".calendar-footer");!1!==t.buttons&&(0===i.length&&(i=D("<div>").addClass("calendar-footer").addClass(t.clsCalendarFooter).appendTo(e)),i.html(""),D.each(t.buttons,function(){var e=D("<button>").attr("type","button").addClass("button "+this+" "+t["cls"+this.capitalize()+"Button"]).html(n[this]).appendTo(i);"cancel"!==this&&"done"!==this||e.addClass("js-dialog-close")}),!1===t.showFooter&&i.hide())},_drawMonths:function(){var e,t=this.element,n=this.options,i=D("<div>").addClass("calendar-months").addClass(n.clsCalendarMonths).appendTo(t),s=D("<ul>").addClass("months-list").appendTo(i),a=this.locale.calendar;for(e=0;e<12;e++)D("<li>").addClass("js-month-"+e).html(a.months[e]).appendTo(s)},_drawYears:function(){var e,t=this.element,n=this.options,i=D("<div>").addClass("calendar-years").addClass(n.clsCalendarYears).appendTo(t),s=D("<ul>").addClass("years-list").appendTo(i);for(e=this.minYear;e<=this.maxYear;e++)D("<li>").addClass("js-year-"+e).html(e).appendTo(s)},_drawContent:function(){var e,t,n,i,s,a,o,r,l=this.element,c=this.options,d=l.find(".calendar-content"),h=this.locale.calendar,u=0,p=new Date(this.current.year,this.current.month,1),f=new Date(this.current.year,this.current.month,0).getDate();0===d.length&&(d=D("<div>").addClass("calendar-content").addClass(c.clsCalendarContent).appendTo(l)),d.html(""),e=D("<div>").addClass("calendar-toolbar").appendTo(d),D("<span>").addClass("prev-month").html(c.prevMonthIcon).appendTo(e),D("<span>").addClass("curr-month").html(h.months[this.current.month]).appendTo(e),D("<span>").addClass("next-month").html(c.nextMonthIcon).appendTo(e),D("<span>").addClass("prev-year").html(c.prevYearIcon).appendTo(e),D("<span>").addClass("curr-year").html(this.current.year).appendTo(e),D("<span>").addClass("next-year").html(c.nextYearIcon).appendTo(e);var m=D("<div>").addClass("week-days").appendTo(d),v="day";for(!0===c.showWeekNumber&&(D("<span>").addClass("week-number").html("#").appendTo(m),v+=" and-week-number"),t=0;t<7;t++)0===c.weekStart?n=t:7===(n=t+1)&&(n=0),D("<span>").addClass(v).html(h.days[n+7]).appendTo(m);var g=D("<div>").addClass("days").appendTo(d),C=D("<div>").addClass("days-row").appendTo(g);for(a=0===c.weekStart?p.getDay():0===p.getDay()?6:p.getDay()-1,o=this.current.month-1<0?(r=11,this.current.year-1):(r=this.current.month-1,this.current.year),!0===c.showWeekNumber&&D("<div>").addClass("week-number").html(new Date(o,r,f-a+1).getWeek(c.weekStart)).appendTo(C),t=0;t<a;t++){var b=f-a+t+1;i=D("<div>").addClass(v+" outside").appendTo(C),(s=new Date(o,r,b)).setHours(0,0,0,0),i.data("day",s.getTime()),!0===c.outside&&(i.html(b),0<this.excludeDay.length&&-1<this.excludeDay.indexOf(s.getDay())&&i.addClass("disabled excluded").addClass(c.clsExcluded),H.exec(c.onDayDraw,[s],i[0]),l.fire("daydraw",{cell:i[0],date:s})),u++}for(p.setHours(0,0,0,0);p.getMonth()===this.current.month;)(i=D("<div>").addClass(v).html(p.getDate()).appendTo(C)).data("day",p.getTime()),this.show.getTime()===p.getTime()&&i.addClass("showed"),this.today.getTime()===p.getTime()&&i.addClass("today").addClass(c.clsToday),0===this.special.length?(-1!==this.selected.indexOf(p.getTime())&&i.addClass("selected").addClass(c.clsSelected),-1!==this.exclude.indexOf(p.getTime())&&i.addClass("disabled excluded").addClass(c.clsExcluded),null!==this.min&&p.getTime()<this.min.getTime()&&i.addClass("disabled excluded").addClass(c.clsExcluded),null!==this.max&&p.getTime()>this.max.getTime()&&i.addClass("disabled excluded").addClass(c.clsExcluded),0<this.excludeDay.length&&-1<this.excludeDay.indexOf(p.getDay())&&i.addClass("disabled excluded").addClass(c.clsExcluded)):-1===this.special.indexOf(p.getTime())&&i.addClass("disabled excluded").addClass(c.clsExcluded),H.exec(c.onDayDraw,[p],i[0]),l.fire("daydraw",{cell:i[0],date:p}),++u%7==0&&(C=D("<div>").addClass("days-row").appendTo(g),!0===c.showWeekNumber&&D("<div>").addClass("week-number").html(new Date(p.getFullYear(),p.getMonth(),p.getDate()+1).getWeek(c.weekStart)).appendTo(C)),p.setDate(p.getDate()+1),p.setHours(0,0,0,0);if(a=0===c.weekStart?p.getDay():0===p.getDay()?6:p.getDay()-1,o=11<this.current.month+1?(r=0,this.current.year+1):(r=this.current.month+1,this.current.year),0<a)for(t=0;t<7-a;t++)i=D("<div>").addClass(v+" outside").appendTo(C),(s=new Date(o,r,t+1)).setHours(0,0,0,0),i.data("day",s.getTime()),!0===c.outside&&(i.html(t+1),0<this.excludeDay.length&&-1<this.excludeDay.indexOf(s.getDay())&&i.addClass("disabled excluded").addClass(c.clsExcluded),H.exec(c.onDayDraw,[s],i[0]),l.fire("daydraw",{cell:i[0],date:s}))},_drawCalendar:function(){var e=this;setTimeout(function(){e.element.html(""),e._drawHeader(),e._drawContent(),e._drawFooter(),e._drawMonths(),e._drawYears()},0)},getPreset:function(){return this.preset},getSelected:function(){return this.selected},getExcluded:function(){return this.exclude},getToday:function(){return this.today},getCurrent:function(){return this.current},clearSelected:function(){this.selected=[],this._drawContent()},toDay:function(){this.today=new Date,this.today.setHours(0,0,0,0),this.current={year:this.today.getFullYear(),month:this.today.getMonth(),day:this.today.getDate()},this._drawHeader(),this._drawContent()},setExclude:function(e){var t=this.element,n=this.options;H.isNull(e)&&H.isNull(t.attr("data-exclude"))||(n.exclude=H.isNull(e)?t.attr("data-exclude"):e,this._dates2array(n.exclude,"exclude"),this._drawContent())},setPreset:function(e){var t=this.element,n=this.options;H.isNull(e)&&H.isNull(t.attr("data-preset"))||(n.preset=H.isNull(e)?t.attr("data-preset"):e,this._dates2array(n.preset,"selected"),this._drawContent())},setSpecial:function(e){var t=this.element,n=this.options;H.isNull(e)&&H.isNull(t.attr("data-special"))||(n.special=H.isNull(e)?t.attr("data-special"):e,this._dates2array(n.exclude,"special"),this._drawContent())},setShow:function(e){var t=this.element,n=this.options;H.isNull(e)&&H.isNull(t.attr("data-show"))||(n.show=H.isNull(e)?t.attr("data-show"):e,this.show=H.isDateObject(e)?e:H.isValue(n.inputFormat)?n.show.toDate(n.inputFormat):new Date(n.show),this.show.setHours(0,0,0,0),this.current={year:this.show.getFullYear(),month:this.show.getMonth(),day:this.show.getDate()},this._drawContent())},setMinDate:function(e){var t=this.element,n=this.options;n.minDate=H.isValue(e)?e:t.attr("data-min-date"),H.isValue(n.minDate)&&H.isDate(n.minDate,n.inputFormat)&&(this.min=H.isValue(n.inputFormat)?n.minDate.toDate(n.inputFormat):new Date(n.minDate)),this._drawContent()},setMaxDate:function(e){var t=this.element,n=this.options;n.maxDate=H.isValue(e)?e:t.attr("data-max-date"),H.isValue(n.maxDate)&&H.isDate(n.maxDate,n.inputFormat)&&(this.max=H.isValue(n.inputFormat)?n.maxDate.toDate(n.inputFormat):new Date(n.maxDate)),this._drawContent()},setToday:function(e){var t=this.options;H.isValue(e)||(e=new Date),this.today=H.isDateObject(e)?e:H.isValue(t.inputFormat)?e.toDate(t.inputFormat):new Date(e),this.today.setHours(0,0,0,0),this._drawHeader(),this._drawContent()},i18n:function(e){var t=this.options;return void 0===e?t.locale:void 0!==M.locales[e]&&(t.locale=e,this.locale=M.locales[t.locale],void this._drawCalendar())},changeAttrLocale:function(){var e=this.element;this.options;this.i18n(e.attr("data-locale"))},changeAttribute:function(e){switch(e){case"data-exclude":this.setExclude();break;case"data-preset":this.setPreset();break;case"data-special":this.setSpecial();break;case"data-show":this.setShow();break;case"data-min-date":this.setMinDate();break;case"data-max-date":this.setMaxDate();break;case"data-locale":this.changeAttrLocale()}},destroy:function(){var e=this.element,t=this.options;return e.off(M.events.click,".prev-month, .next-month, .prev-year, .next-year"),e.off(M.events.click,".button.today"),e.off(M.events.click,".button.clear"),e.off(M.events.click,".button.cancel"),e.off(M.events.click,".button.done"),e.off(M.events.click,".week-days .day"),e.off(M.events.click,".days-row .day"),e.off(M.events.click,".curr-month"),e.off(M.events.click,".calendar-months li"),e.off(M.events.click,".curr-year"),e.off(M.events.click,".calendar-years li"),e.off(M.events.click),!0===t.ripple&&e.data("ripple").destroy(),e}};D(document).on(M.events.click,function(e){D(".calendar .calendar-years").each(function(){D(this).removeClass("open")}),D(".calendar .calendar-months").each(function(){D(this).removeClass("open")})}),M.plugin("calendar",ee);var te={value:"",calendarpickerDeferred:0,nullValue:!0,useNow:!1,prepend:"",calendarWide:!1,calendarWidePoint:null,dialogMode:!1,dialogPoint:360,dialogOverlay:!0,overlayColor:"#000000",overlayAlpha:.5,locale:METRO_LOCALE,size:"100%",format:METRO_DATE_FORMAT,inputFormat:null,headerFormat:"%A, %b %e",clearButton:!1,calendarButtonIcon:"<span class='default-icon-calendar'></span>",clearButtonIcon:"<span class='default-icon-cross'></span>",copyInlineStyles:!1,clsPicker:"",clsInput:"",yearsBefore:100,yearsAfter:100,weekStart:METRO_WEEK_START,outside:!0,ripple:!1,rippleColor:"#cccccc",exclude:null,minDate:null,maxDate:null,special:null,showHeader:!0,showWeekNumber:!1,clsCalendar:"",clsCalendarHeader:"",clsCalendarContent:"",clsCalendarMonths:"",clsCalendarYears:"",clsToday:"",clsSelected:"",clsExcluded:"",onDayClick:M.noop,onCalendarPickerCreate:M.noop,onCalendarShow:M.noop,onCalendarHide:M.noop,onChange:M.noop,onMonthChange:M.noop,onYearChange:M.noop};M.calendarPickerSetup=function(e){te=D.extend({},te,e)},window.metroCalendarPickerSetup,M.calendarPickerSetup(window.metroCalendarPickerSetup);var ne={name:"CalendarPicker",init:function(e,t){return this.options=D.extend({},te,e),this.elem=t,this.element=D(t),this.value=null,this.value_date=null,this.calendar=null,this.overlay=null,this._setOptionsFromDOM(),M.createExec(this),this},dependencies:["calendar"],_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){M.checkRuntime(this.element,"calendarpicker"),this._createStructure(),this._createEvents(),H.exec(this.options.onCalendarPickerCreate,[this.element],this.elem),this.element.fire("calendarpickercreate")},_createStructure:function(){var e,s=this,a=this.element,o=this.options,n=D("<div>").addClass("input "+a[0].className+" calendar-picker"),t=D("<div>").addClass("button-group"),r=D("<div>").addClass("drop-shadow"),i=H.elementId("calendarpicker"),l=D("body");n.attr("id",i),a.attr("type","text"),a.attr("autocomplete","off"),a.attr("readonly",!0),e=""!==(""+o.value).trim()?o.value:a.val().trim(),H.isValue(e)?this.value=H.isValue(o.inputFormat)?e.toDate(o.inputFormat,o.locale):new Date(e):o.useNow&&(this.value=new Date),H.isValue(this.value)&&this.value.setHours(0,0,0,0),a.val(H.isValue(e)||!0!==o.nullValue?s.value.format(o.format,o.locale):""),n.insertBefore(a),a.appendTo(n),t.appendTo(n),r.appendTo(o.dialogMode?l:n),M.makePlugin(r,"calendar",{wide:o.calendarWide,widePoint:o.calendarWidePoint,format:o.format,inputFormat:o.inputFormat,pickerMode:!0,show:o.value,locale:o.locale,weekStart:o.weekStart,outside:o.outside,buttons:!1,headerFormat:o.headerFormat,clsCalendar:[o.clsCalendar,"calendar-for-picker",o.dialogMode?"dialog-mode":""].join(" "),clsCalendarHeader:o.clsCalendarHeader,clsCalendarContent:o.clsCalendarContent,clsCalendarFooter:"d-none",clsCalendarMonths:o.clsCalendarMonths,clsCalendarYears:o.clsCalendarYears,clsToday:o.clsToday,clsSelected:o.clsSelected,clsExcluded:o.clsExcluded,ripple:o.ripple,rippleColor:o.rippleColor,exclude:o.exclude,minDate:o.minDate,maxDate:o.maxDate,yearsBefore:o.yearsBefore,yearsAfter:o.yearsAfter,special:o.special,showHeader:o.showHeader,showFooter:!1,showWeekNumber:o.showWeekNumber,onDayClick:function(e,t,n){var i=new Date(e[0]);i.setHours(0,0,0,0),s._removeOverlay(),s.value=i,a.val(i.format(o.format,o.locale)),a.trigger("change"),r.removeClass("open open-up"),r.hide(),H.exec(o.onChange,[s.value],a[0]),a.fire("change",{val:s.value}),H.exec(o.onDayClick,[e,t,n],a[0]),a.fire("dayclick",{sel:e,day:t,el:n})},onMonthChange:o.onMonthChange,onYearChange:o.onYearChange}),this.calendar=r,!0===o.clearButton&&D("<button>").addClass("button input-clear-button").attr("tabindex",-1).attr("type","button").html(o.clearButtonIcon).appendTo(t),D("<button>").addClass("button").attr("tabindex",-1).attr("type","button").html(o.calendarButtonIcon).appendTo(t),""!==o.prepend&&D("<div>").html(o.prepend).addClass("prepend").addClass(o.clsPrepend).appendTo(n);"rtl"===a.attr("dir")&&n.addClass("rtl"),-1<String(o.size).indexOf("%")?n.css({width:o.size}):n.css({width:parseInt(o.size)+"px"}),!(a[0].className="")===o.copyInlineStyles&&D.each(H.getInlineStyles(a),function(e,t){n.css(e,t)}),n.addClass(o.clsPicker),a.addClass(o.clsInput),!0===o.dialogOverlay&&(this.overlay=s._overlay()),!0===o.dialogMode?n.addClass("dialog-mode"):H.media("(max-width: "+o.dialogPoint+"px)")&&n.addClass("dialog-mode"),a.is(":disabled")?this.disable():this.enable()},_createEvents:function(){var n=this,i=this.element,s=this.options,a=i.parent(),e=a.find(".input-clear-button"),o=this.calendar,r=M.getPlugin(o[0],"calendar");D(window).on(M.events.resize,function(){!0!==s.dialogMode&&(H.media("(max-width: "+s.dialogPoint+"px)")?a.addClass("dialog-mode"):a.removeClass("dialog-mode"))},{ns:a.attr("id")}),0<e.length&&e.on(M.events.click,function(e){i.val("").trigger("change").blur(),n.value=null,e.preventDefault(),e.stopPropagation()}),a.on(M.events.click,"button, input",function(e){var t=H.isValue(n.value)?n.value:new Date;t.setHours(0,0,0,0),!1===o.hasClass("open")&&!1===o.hasClass("open-up")?(D(".calendar-picker .calendar").removeClass("open open-up").hide(),r.setPreset([t]),r.setShow(t),r.setToday(t),a.hasClass("dialog-mode")&&n.overlay.appendTo(D("body")),o.addClass("open"),!1===H.isOutsider(o)&&o.addClass("open-up"),H.exec(s.onCalendarShow,[i,o],o),i.fire("calendarshow",{calendar:o})):(n._removeOverlay(),o.removeClass("open open-up"),H.exec(s.onCalendarHide,[i,o],o),i.fire("calendarhide",{calendar:o})),e.preventDefault(),e.stopPropagation()}),i.on(M.events.blur,function(){a.removeClass("focused")}),i.on(M.events.focus,function(){a.addClass("focused")}),i.on(M.events.change,function(){H.exec(s.onChange,[n.value],i[0])}),a.on(M.events.click,function(e){e.preventDefault(),e.stopPropagation()})},_overlay:function(){var e=this.options,t=D("<div>");return t.addClass("overlay for-calendar-picker").addClass(e.clsOverlay),"transparent"===e.overlayColor?t.addClass("transparent"):t.css({background:H.hex2rgba(e.overlayColor,e.overlayAlpha)}),t},_removeOverlay:function(){D("body").find(".overlay.for-calendar-picker").remove()},val:function(e){var t=this.element,n=this.options;if(H.isNull(e))return this.value;!0===H.isDate(e,n.inputFormat)&&(M.getPlugin(this.calendar[0],"calendar").clearSelected(),this.value="string"==typeof e?n.inputFormat?e.toDate(n.inputFormat,n.locale):new Date(e):e,H.isValue(this.value)&&this.value.setHours(0,0,0,0),t.val(this.value.format(n.format,n.locale)),t.trigger("change"))},disable:function(){this.element.data("disabled",!0),this.element.parent().addClass("disabled")},enable:function(){this.element.data("disabled",!1),this.element.parent().removeClass("disabled")},toggleState:function(){this.elem.disabled?this.disable():this.enable()},i18n:function(e){var t,n=this.options,i=this.calendar;return void 0===e?n.locale:void 0!==M.locales[e]&&((t=i[0].hidden)&&i.css({visibility:"hidden",display:"block"}),M.getPlugin(i[0],"calendar").i18n(e),void(t&&i.css({visibility:"visible",display:"none"})))},changeAttribute:function(e){var t=this,n=this.element,i=(this.options,M.getPlugin(this.calendar[0],"calendar"));switch(e){case"value":t.val(n.attr("value"));break;case"disabled":this.toggleState();break;case"data-locale":t.i18n(n.attr("data-locale"));break;case"data-special":i.setSpecial(n.attr("data-special"));break;case"data-exclude":i.setExclude(n.attr("data-exclude"));break;case"data-min-date":i.setMinDate(n.attr("data-min-date"));break;case"data-max-date":i.setMaxDate(n.attr("data-max-date"));break;case"data-value":t.val(n.attr("data-value"))}},destroy:function(){var e=this.element,t=e.parent(),n=t.find(".input-clear-button");return D(window).off(M.events.resize,{ns:t.attr("id")}),n.off(M.events.click),t.off(M.events.click,"button, input"),e.off(M.events.blur),e.off(M.events.focus),e.off(M.events.change),M.getPlugin(this.calendar,"calendar").destroy(),e}};M.plugin("calendarpicker",ne),D(document).on(M.events.click,".overlay.for-calendar-picker",function(){D(this).remove(),D(".calendar-for-picker.open").removeClass("open open-up")}),D(document).on(M.events.click,function(){D(".calendar-picker .calendar").removeClass("open open-up")});var ie={carouselDeferred:0,autoStart:!1,width:"100%",height:"16/9",effect:"slide",effectFunc:"linear",direction:"left",duration:METRO_ANIMATION_DURATION,period:5e3,stopOnMouse:!0,controls:!0,bullets:!0,bulletsStyle:"square",bulletsSize:"default",controlsOnMouse:!1,controlsOutside:!1,bulletsPosition:"default",controlPrev:"&#x23F4",controlNext:"&#x23F5",clsCarousel:"",clsSlides:"",clsSlide:"",clsControls:"",clsControlNext:"",clsControlPrev:"",clsBullets:"",clsBullet:"",clsBulletOn:"",clsThumbOn:"",onStop:M.noop,onStart:M.noop,onPlay:M.noop,onSlideClick:M.noop,onBulletClick:M.noop,onThumbClick:M.noop,onMouseEnter:M.noop,onMouseLeave:M.noop,onNextClick:M.noop,onPrevClick:M.noop,onSlideShow:M.noop,onSlideHide:M.noop,onCarouselCreate:M.noop};M.carouselSetup=function(e){ie=D.extend({},ie,e)},window.metroCarouselSetup,M.carouselSetup(window.metroCarouselSetup);var se={name:"Carousel",init:function(e,t){return this.options=D.extend({},ie,e),this.elem=t,this.element=D(t),this.height=0,this.width=0,this.slides=[],this.current=null,this.currentIndex=null,this.dir=this.options.direction,this.interval=!1,this.isAnimate=!1,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options,n=e.find(".slide"),i=e.find(".slides"),s=H.elementId("carousel");M.checkRuntime(e,"carousel"),void 0===e.attr("id")&&e.attr("id",s),e.addClass("carousel").addClass(t.clsCarousel),!0===t.controlsOutside&&e.addClass("controls-outside"),0===i.length&&(i=D("<div>").addClass("slides").appendTo(e),n.appendTo(i)),n.addClass(t.clsSlides),0===n.length||(this._createSlides(),this._createControls(),this._createBullets(),this._createEvents(),this._resize(),!0===t.controlsOnMouse&&(e.find("[class*=carousel-switch]").fadeOut(0),e.find(".carousel-bullets").fadeOut(0)),!0===t.autoStart?this._start():(H.exec(t.onSlideShow,[this.slides[this.currentIndex][0],void 0],this.slides[this.currentIndex][0]),e.fire("slideshow",{current:this.slides[this.currentIndex][0],prev:void 0}))),H.exec(t.onCarouselCreate,[e]),e.fire("carouselcreate")},_start:function(){var t=this,e=this.element,n=this.options,i=n.period,s=this.slides[this.currentIndex];void 0!==s.data("period")&&(i=s.data("period")),this.slides.length<=1||(!1===this.interval&&(this.interval=setTimeout(function(){var e="left"===n.direction?"next":"prior";t._slideTo(e,!0)},i)),H.exec(n.onStart,[e],e[0]),e.fire("start"))},_stop:function(){clearInterval(this.interval),this.interval=!1},_resize:function(){var t,e=this.element,n=this.options,i=e.outerWidth(),s=[];-1<["16/9","21/9","4/3"].indexOf(n.height)?t=H.aspectRatioH(i,n.height):-1<String(n.height).indexOf("@")?(s=H.strToArray(n.height.substr(1),"|"),D.each(s,function(){var e=H.strToArray(this,",");window.matchMedia(e[0]).matches&&(t=-1<["16/9","21/9","4/3"].indexOf(e[1])?H.aspectRatioH(i,e[1]):parseInt(e[1]))})):t=parseInt(n.height),e.css({height:t})},_createSlides:function(){var n=this,e=this.element,i=this.options,t=e.find(".slide");D.each(t,function(e){var t=D(this);if(void 0!==t.data("cover")&&t.css({backgroundImage:"url("+t.data("cover")+")"}),0!==e)switch(i.effect){case"switch":case"slide":t.css("left","100%");break;case"slide-v":t.css("top","100%");break;case"fade":t.css("opacity","0")}t.addClass(i.clsSlide),n.slides.push(t)}),this.currentIndex=0,this.current=this.slides[this.currentIndex]},_createControls:function(){var e,t,n=this.element,i=this.options;!1!==i.controls&&(e=D("<span/>").addClass("carousel-switch-next").addClass(i.clsControls).addClass(i.clsControlNext).html(">"),t=D("<span/>").addClass("carousel-switch-prev").addClass(i.clsControls).addClass(i.clsControlPrev).html("<"),i.controlNext&&e.html(i.controlNext),i.controlPrev&&t.html(i.controlPrev),e.appendTo(n),t.appendTo(n))},_createBullets:function(){var e,t,n=this.element,i=this.options;if(!1!==i.bullets){for(e=D("<div>").addClass("carousel-bullets").addClass(i.bulletsSize+"-size").addClass("bullet-style-"+i.bulletsStyle).addClass(i.clsBullets),"default"===i.bulletsPosition||"center"===i.bulletsPosition?e.addClass("flex-justify-center"):"left"===i.bulletsPosition?e.addClass("flex-justify-start"):e.addClass("flex-justify-end"),t=0;t<this.slides.length;t++){var s=D("<span>").addClass("carousel-bullet").addClass(i.clsBullet).data("slide",t);0===t&&s.addClass("bullet-on").addClass(i.clsBulletOn),s.appendTo(e)}e.appendTo(n)}},_createEvents:function(){var n=this,i=this.element,s=this.options;i.on(M.events.click,".carousel-bullet",function(e){var t=D(this);!1===n.isAnimate&&(n._slideToSlide(t.data("slide")),H.exec(s.onBulletClick,[t,i,e]),i.fire("bulletclick",{bullet:t}))}),i.on(M.events.click,".carousel-switch-next",function(e){!1===n.isAnimate&&(n._slideTo("next",!1),H.exec(s.onNextClick,[i,e]),i.fire("nextclick",{button:this}))}),i.on(M.events.click,".carousel-switch-prev",function(e){!1===n.isAnimate&&(n._slideTo("prev",!1),H.exec(s.onPrevClick,[i,e]),i.fire("prevclick",{button:this}))}),!0===s.stopOnMouse&&!0===s.autoStart&&(i.on(M.events.enter,function(e){n._stop(),H.exec(s.onMouseEnter,[i,e])}),i.on(M.events.leave,function(e){n._start(),H.exec(s.onMouseLeave,[i,e])})),!0===s.controlsOnMouse&&(i.on(M.events.enter,function(){i.find("[class*=carousel-switch]").fadeIn(),i.find(".carousel-bullets").fadeIn()}),i.on(M.events.leave,function(){i.find("[class*=carousel-switch]").fadeOut(),i.find(".carousel-bullets").fadeOut()})),i.on(M.events.click,".slide",function(e){var t=D(this);H.exec(s.onSlideClick,[t,i,e]),i.fire("slideclick",{slide:t})}),D(window).on(M.events.resize,function(){n._resize()},{ns:i.attr("id")})},_slideToSlide:function(e){var t,n,i,s=this.element,a=this.options;void 0!==this.slides[e]&&this.currentIndex!==e&&(i=e>this.currentIndex?"next":"prev",t=this.slides[this.currentIndex],n=this.slides[e],this.currentIndex=e,this._effect(t,n,a.effect,i),s.find(".carousel-bullet").removeClass("bullet-on").removeClass(a.clsBulletOn),s.find(".carousel-bullet:nth-child("+(this.currentIndex+1)+")").addClass("bullet-on").addClass(a.clsBulletOn))},_slideTo:function(e,t){var n,i,s=this.element,a=this.options;void 0===e&&(e="next"),n=this.slides[this.currentIndex],"next"===e?(this.currentIndex++,this.currentIndex>=this.slides.length&&(this.currentIndex=0)):(this.currentIndex--,this.currentIndex<0&&(this.currentIndex=this.slides.length-1)),i=this.slides[this.currentIndex],this._effect(n,i,a.effect,e,t),s.find(".carousel-bullet").removeClass("bullet-on").removeClass(a.clsBulletOn),s.find(".carousel-bullet:nth-child("+(this.currentIndex+1)+")").addClass("bullet-on").addClass(a.clsBulletOn)},_effect:function(e,t,n,i,s){var a,o=this,r=this.element,l=this.options,c=l.duration,d=l.effectFunc,h=l.period;switch(void 0!==t.data("duration")&&(c=t.data("duration")),void 0!==t.data("effectFunc")&&(d=t.data("effectFunc")),"switch"===n&&(c=0),e.stop(!0),t.stop(!0),this.isAnimate=!0,setTimeout(function(){o.isAnimate=!1},c),"slide"===n&&(a="next"===i?"slideLeft":"slideRight"),"slide-v"===n&&(a="next"===i?"slideUp":"slideDown"),n){case"slide":case"slide-v":C[a](e,t,c,d);break;case"fade":C.fade(e,t,c,d);break;default:C.switch(e,t)}setTimeout(function(){H.exec(l.onSlideShow,[t[0],e[0]],t[0]),r.fire("slideshow",{current:t[0],prev:e[0]})},c),setTimeout(function(){H.exec(l.onSlideHide,[e[0],t[0]],e[0]),r.fire("slidehide",{current:e[0],next:t[0]})},c),!0===s&&(void 0!==t.data("period")&&(h=t.data("period")),this.interval=setTimeout(function(){var e="left"===l.direction?"next":"prior";o._slideTo(e,!0)},h))},toSlide:function(e){this._slideToSlide(e)},next:function(){this._slideTo("next")},prev:function(){this._slideTo("prev")},stop:function(){clearInterval(this.interval),H.exec(this.options.onStop,[this.element]),this.element.fire("stop")},play:function(){this._start(),H.exec(this.options.onPlay,[this.element]),this.element.fire("play")},changeAttribute:function(e){},destroy:function(){var e=this.element,t=this.options;return e.off(M.events.click,".carousel-bullet"),e.off(M.events.click,".carousel-switch-next"),e.off(M.events.click,".carousel-switch-prev"),!0===t.stopOnMouse&&!0===t.autoStart&&(e.off(M.events.enter),e.off(M.events.leave)),!0===t.controlsOnMouse&&(e.off(M.events.enter),e.off(M.events.leave)),e.off(M.events.click,".slide"),D(window).off(M.events.resize+"-"+e.attr("id")),e}};M.plugin("carousel",se);var ae={charmsDeferred:0,position:"right",opacity:1,clsCharms:"",onCharmCreate:M.noop,onOpen:M.noop,onClose:M.noop,onToggle:M.noop};M.charmsSetup=function(e){ae=D.extend({},ae,e)},window.metroCharmsSetup,M.charmsSetup(window.metroCharmsSetup);var oe={name:"Charms",init:function(e,t){return this.options=D.extend({},ae,e),this.elem=t,this.element=D(t),this.origin={background:""},this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"charms"),this._createStructure(),this._createEvents(),H.exec(t.onCharmCreate,[e]),e.fire("charmcreate")},_createStructure:function(){var e=this.element,t=this.options;e.addClass("charms").addClass(t.position+"-side").addClass(t.clsCharms),this.origin.background=e.css("background-color"),e.css({backgroundColor:H.computedRgbToRgba(H.getStyleOne(e,"background-color"),t.opacity)})},_createEvents:function(){},open:function(){var e=this.element,t=this.options;e.addClass("open"),H.exec(t.onOpen,null,e[0]),e.fire("open")},close:function(){var e=this.element,t=this.options;e.removeClass("open"),H.exec(t.onClose,null,e[0]),e.fire("close")},toggle:function(){var e=this.element,t=this.options;!0===e.hasClass("open")?this.close():this.open(),H.exec(t.onToggle,null,e[0]),e.fire("toggle")},opacity:function(e){var t=this.element,n=this.options;if(void 0===e)return n.opacity;var i=Math.abs(parseFloat(e));i<0||1<i||(n.opacity=i,t.css({backgroundColor:H.computedRgbToRgba(H.getStyleOne(t,"background-color"),i)}))},changeOpacity:function(){var e=this.element;this.opacity(e.attr("data-opacity"))},changeAttribute:function(e){switch(e){case"data-opacity":this.changeOpacity()}},destroy:function(){return this.element}};M.plugin("charms",oe),M.charms={check:function(e){return!1!==H.isMetroObject(e,"charms")||(console.warn("Element is not a charms component"),!1)},isOpen:function(e){if(!1!==this.check(e))return D(e).hasClass("open")},open:function(e){!1!==this.check(e)&&M.getPlugin(D(e)[0],"charms").open()},close:function(e){!1!==this.check(e)&&M.getPlugin(D(e)[0],"charms").close()},toggle:function(e){!1!==this.check(e)&&M.getPlugin(D(e)[0],"charms").toggle()},closeAll:function(){D("[data-role*=charms]").each(function(){M.getPlugin(this,"charms").close()})},opacity:function(e,t){!1!==this.check(e)&&M.getPlugin(D(e)[0],"charms").opacity(t)}};var re="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAUABQAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+t+KKPxo/GgA70Yo/Gj8aADFH4VesdC1HUl3WtjcXCf344yV/PGKW+0HUtNXddWNzbp/fkjIX88YoAofhR+FH40fjQAfhR+FH40fjQAUUUUAFepeAPh5D9li1LVYhK8g3Q27j5VXszDuT6f5HA+FtOXVvEWn2rjMcko3j1UckfkDX0MBgYHAoARVCKFUBVHAA6ClZQwKkZBGCDS0UAec+Pvh3BJay6lpUQimjBeW3QYVx3Kjsfbv/PyqvpuvnvxfpqaT4l1C1QbY0lJUDsrfMB+RoAyKKKKACiiigDa8GXq6f4p02eQgIJQpJ7Bvlz+tfQP4V8yDg17P4A8cw65ZxWV5IE1KMbfmP+uA7j39R+NAHaUfhSUUAL+FeA+OL1NQ8WalNGQU83YCO+0Bf6V6b498cQ6BZyWlrIJNSkXaApz5QP8AEff0FeKk5OTyTQAUUUUAH40fjRU1naTX93DbQIXmlYIijuTQBc0Dw/eeI74W1mm49XkbhUHqTXsHhz4eaXoCpI8YvbscmaYZAP8Asr0H8/etHwv4cg8M6XHaxANIfmllxy7dz9PStigA/Gk/GlooA5bxJ8PdL19XkWMWd43PnwjGT/tL0P8AP3rx/X/D954cvjbXibT1SReVceoNfRFZHijw5B4m0uS1lAWQfNFLjlG7H6etAHz5+NH41NeWk1hdzW06FJonKMp7EGoaACvQfhBowudTudRkXK2y7I8j+Nup/Afzrz6vafhRaCDwmkgHM8zufwO3/wBloA7Kiij8KACkpaSgBaSj8KKAPJvi/owttTttRjXC3K7JMf3l6H8R/KvPq9p+K1qJ/CbyEcwTI4P1O3/2avFqAP/Z",le={chatDeferred:0,inputTimeFormat:"%m-%d-%y",timeFormat:"%d %b %l:%M %p",name:"John Doe",avatar:re,welcome:null,title:null,width:"100%",height:"auto",randomColor:!1,messages:null,sendButtonTitle:"Send",readonly:!1,clsChat:"",clsName:"",clsTime:"",clsInput:"",clsSendButton:"",clsMessageLeft:"default",clsMessageRight:"default",onMessage:M.noop,onSend:M.noop,onSendButtonClick:M.noop,onChatCreate:M.noop};M.chatSetup=function(e){le=D.extend({},le,e)},window.metroChatSetup,M.chatSetup(window.metroChatSetup);var ce={name:"Chat",init:function(e,t){return this.options=D.extend({},le,e),this.elem=t,this.element=D(t),this.input=null,this.classes="primary secondary success alert warning yellow info dark light".split(" "),this.lastMessage=null,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"chat"),this._createStructure(),this._createEvents(),H.exec(t.onChatCreate,[e]),e.fire("chatcreate")},_createStructure:function(){var e,t,n=this,i=this.element,s=this.options,a=[{html:s.sendButtonTitle,cls:s.clsSendButton+" js-chat-send-button",onclick:s.onSendButtonClick}];i.addClass("chat").addClass(s.clsChat),i.css({width:s.width,height:s.height}),H.isValue(s.title)&&D("<div>").addClass("title").html(s.title).appendTo(i),D("<div>").addClass("messages").appendTo(i),e=D("<div>").addClass("message-input").appendTo(i),(t=D("<input type='text'>")).appendTo(e),t.input({customButtons:a,clsInput:s.clsInput}),s.welcome&&this.add({text:s.welcome,time:new Date,position:"left",name:"Welcome",avatar:re}),H.isValue(s.messages)&&"string"==typeof s.messages&&(s.messages=H.isObject(s.messages)),!H.isNull(s.messages)&&"object"==typeof s.messages&&0<H.objectLength(s.messages)&&D.each(s.messages,function(){n.add(this)}),i.find(".message-input")[s.readonly?"addClass":"removeClass"]("disabled")},_createEvents:function(){function t(){var e,t=""+a.val();if(""===t.trim())return!1;e={id:H.elementId(""),name:s.name,avatar:s.avatar,text:t,position:"right",time:new Date},n.add(e),H.exec(s.onSend,[e],i[0]),i.fire("send",{msg:e}),a.val("")}var n=this,i=this.element,s=this.options,e=i.find(".js-chat-send-button"),a=i.find("input[type=text]");e.on(M.events.click,function(){t()}),a.on(M.events.keyup,function(e){e.keyCode===M.keyCode.ENTER&&t()})},add:function(e){var t,n,i,s,a,o,r,l,c=this.element,d=this.options,h=c.find(".messages");return l="string"==typeof e.time?e.time.toDate(d.inputTimeFormat):e.time,n=D("<div>").addClass("message").addClass(e.position).appendTo(h),i=D("<div>").addClass("message-sender").addClass(d.clsName).html(e.name).appendTo(n),s=D("<div>").addClass("message-time").addClass(d.clsTime).html(l.format(d.timeFormat)).appendTo(n),a=D("<div>").addClass("message-item").appendTo(n),o=D("<img>").attr("src",e.avatar).addClass("message-avatar").appendTo(a),r=D("<div>").addClass("message-text").html(e.text).appendTo(a),H.isValue(e.id)&&n.attr("id",e.id),!0===d.randomColor?(t=H.random(0,this.classes.length-1),r.addClass(this.classes[t])):("left"===e.position&&H.isValue(d.clsMessageLeft)&&r.addClass(d.clsMessageLeft),"right"===e.position&&H.isValue(d.clsMessageRight)&&r.addClass(d.clsMessageRight)),H.exec(d.onMessage,[e,{message:n,sender:i,time:s,item:a,avatar:o,text:r}],n[0]),c.fire("message",{msg:e,el:{message:n,sender:i,time:s,item:a,avatar:o,text:r}}),setImmediate(function(){c.fire("onmessage",{message:e,element:n[0]})}),h.animate({scrollTop:h[0].scrollHeight},1e3),this.lastMessage=e,this},addMessages:function(e){var t=this;return H.isValue(e)&&"string"==typeof e&&(e=H.isObject(e)),"object"==typeof e&&0<H.objectLength(e)&&D.each(e,function(){t.add(this)}),this},delMessage:function(e){return this.element.find(".messages").find("#"+e).remove(),this},updMessage:function(e){var t=this.element.find(".messages").find("#"+e.id);return 0===t.length||(t.find(".message-text").html(e.text),t.find(".message-time").html(e.time)),this},clear:function(){this.element.find(".messages").html(""),this.lastMessage=null},toggleReadonly:function(e){var t=this.element,n=this.options;n.readonly=void 0===e?!n.readonly:e,t.find(".message-input")[n.readonly?"addClass":"removeClass"]("disabled")},changeAttribute:function(e){switch(e){case"data-readonly":this.toggleReadonly()}},destroy:function(){var e=this.element,t=e.find(".js-chat-send-button"),n=e.find("input[type=text]");return t.off(M.events.click),n.off(M.events.keyup),e}};M.plugin("chat",ce);var de={checkboxDeferred:0,transition:!0,style:1,caption:"",captionPosition:"right",indeterminate:!1,clsCheckbox:"",clsCheck:"",clsCaption:"",onCheckboxCreate:M.noop};M.checkboxSetup=function(e){de=D.extend({},de,e)},window.metroCheckboxSetup,M.checkboxSetup(window.metroCheckboxSetup);var he={name:"Checkbox",init:function(e,t){return this.options=D.extend({},de,e),this.elem=t,this.element=D(t),this.origin={className:""},this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){this._createStructure(),this._createEvents(),H.exec(this.options.onCheckboxCreate,null,this.element[0]),this.element.fire("checkboxcreate")},_createStructure:function(){var e=this.element,t=this.options,n=D("<label>").addClass("checkbox "+e[0].className).addClass(2===t.style?"style2":""),i=D("<span>").addClass("check"),s=D("<span>").addClass("caption").html(t.caption);M.checkRuntime(e,"checkbox"),void 0===e.attr("id")&&e.attr("id",H.elementId("checkbox")),void 0!==e.attr("readonly")&&e.on("click",function(e){e.preventDefault()}),n.attr("for",e.attr("id")),e.attr("type","checkbox"),n.insertBefore(e),e.appendTo(n),i.appendTo(n),s.appendTo(n),!0===t.transition&&n.addClass("transition-on"),"left"===t.captionPosition&&n.addClass("caption-left"),this.origin.className=e[0].className,e[0].className="",n.addClass(t.clsCheckbox),s.addClass(t.clsCaption),i.addClass(t.clsCheck),t.indeterminate&&(e[0].indeterminate=!0),e.is(":disabled")?this.disable():this.enable()},_createEvents:function(){var e=this.element,t=e.siblings(".check");e.on("focus",function(){t.addClass("focused")}),e.on("blur",function(){t.removeClass("focused")})},indeterminate:function(e){H.isNull(e)&&(e=!0),this.element[0].indeterminate=e},disable:function(){this.element.data("disabled",!0),this.element.parent().addClass("disabled")},enable:function(){this.element.data("disabled",!1),this.element.parent().removeClass("disabled")},toggleState:function(){this.elem.disabled?this.disable():this.enable()},changeAttribute:function(e){var t,n=this.element,i=this.options,s=n.parent();switch(e){case"disabled":this.toggleState();break;case"data-indeterminate":n[0].indeterminate=!0===JSON.parse(n.attr("data-indeterminate"));break;case"data-style":t=parseInt(n.attr("data-style")),H.isInt(t)&&(i.style=t,s.removeClass("style1 style2").addClass("style"+t))}},destroy:function(){var e=this.element;return e.off("focus"),e.off("blur"),e}};M.plugin("checkbox",he);var ue={clockDeferred:0,showTime:!0,showDate:!0,timeFormat:"24",dateFormat:"american",divider:"&nbsp;&nbsp;",leadingZero:!0,dateDivider:"-",timeDivider:":",onClockCreate:M.noop};M.clockSetup=function(e){ue=D.extend({},ue,e)},window.metroClockSetup,M.clockSetup(window.metroClockSetup);var pe={name:"Clock",init:function(e,t){return this.options=D.extend({},ue,e),this.elem=t,this.element=D(t),this._clockInterval=null,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this,t=this.element;M.checkRuntime(t,"clock"),this._tick(),H.exec(this.options.onClockCreate,[this.element]),t.fire("clockcreate"),this._clockInterval=setInterval(function(){e._tick()},500)},_addLeadingZero:function(e){return e<10&&(e="0"+e),e},_tick:function(){var e=this.element,t=this.options,n=new Date,i="",s=n.getHours(),a=n.getMinutes(),o=n.getSeconds(),r=n.getDate(),l=n.getMonth()+1,c=n.getFullYear(),d="";12===parseInt(t.timeFormat)&&(d=" AM",11<s&&(d=" PM"),12<s&&(s-=12),0===s&&(s=12)),a=this._addLeadingZero(a),o=this._addLeadingZero(o),t.leadingZero&&(s=this._addLeadingZero(s),l=this._addLeadingZero(l),r=this._addLeadingZero(r)),t.showDate&&("american"===t.dateFormat?(i+="<span class='date-month'>"+l+"</span>",i+="<span class='date-divider'>"+t.dateDivider+"</span>",i+="<span class='date-day'>"+r+"</span>"):(i+="<span class='date-day'>"+r+"</span>",i+="<span class='date-divider'>"+t.dateDivider+"</span>",i+="<span class='date-month'>"+l+"</span>"),i+="<span class='date-divider'>"+t.dateDivider+"</span>",i+="<span class='date-year'>"+c+"</span>",i+=t.divider),t.showTime&&(i+="<span class='clock-hour'>"+s+"</span>",i+="<span class='clock-divider'>"+t.timeDivider+"</span>",i+="<span class='clock-minute'>"+a+"</span>",i+="<span class='clock-divider'>"+t.timeDivider+"</span>",i+="<span class='clock-second'>"+o+"</span>",i+="<span class='clock-suffix'>"+d+"</span>"),e.html(i)},changeAttribute:function(e){},destroy:function(){return clearInterval(this._clockInterval),this._clockInterval=null,this.element}};M.plugin("clock",pe);var fe={collapseDeferred:0,collapsed:!1,toggleElement:!1,duration:100,onExpand:M.noop,onCollapse:M.noop,onCollapseCreate:M.noop};M.collapseSetup=function(e){fe=D.extend({},fe,e)},window.metroCollapseSetup,M.collapseSetup(window.metroCollapseSetup);var me={name:"Collapse",init:function(e,t){return this.options=D.extend({},fe,e),this.elem=t,this.element=D(t),this.toggle=null,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e,t=this,n=this.element,i=this.options;M.checkRuntime(n,"collapse"),e=!1!==i.toggleElement?D(i.toggleElement):0<n.siblings(".collapse-toggle").length?n.siblings(".collapse-toggle"):n.siblings("a:nth-child(1)"),!0!==i.collapsed&&!0!==n.attr("collapsed")||n.hide(0),e.on(M.events.click,function(e){"block"!==n.css("display")||n.hasClass("keep-open")?t._open(n):t._close(n),-1===["INPUT"].indexOf(e.target.tagName)&&e.preventDefault(),e.stopPropagation()}),this.toggle=e,H.exec(this.options.onCollapseCreate,[this.element]),n.fire("collapsecreate")},_close:function(e,t){var n=D(e),i=M.getPlugin(n[0],"collapse").options,s=t?"show":"slideUp",a=t?0:i.duration;this.toggle.removeClass("active-toggle"),n[s](a,function(){e.trigger("onCollapse",null,e),e.data("collapsed",!0),e.addClass("collapsed"),H.exec(i.onCollapse,null,n[0]),n.fire("collapse")})},_open:function(e,t){var n=D(e),i=M.getPlugin(n[0],"collapse").options,s=t?"show":"slideDown",a=t?0:i.duration;this.toggle.addClass("active-toggle"),n[s](a,function(){e.trigger("onExpand",null,e),e.data("collapsed",!1),e.removeClass("collapsed"),H.exec(i.onExpand,null,n[0]),n.fire("expand")})},collapse:function(e){this._close(this.element,e)},expand:function(e){this._open(this.element,e)},close:function(e){this._close(this.element,e)},open:function(e){this._open(this.element,e)},isCollapsed:function(){return this.element.data("collapsed")},toggleState:function(){var e=this.element;!0===e.attr("collapsed")||!0===e.data("collapsed")?this.collapse():this.expand()},changeAttribute:function(e){switch(e){case"collapsed":case"data-collapsed":this.toggleState()}},destroy:function(){return this.toggle.off(M.events.click),this.element}};M.plugin("collapse",me);var ve={countdownDeferred:0,stopOnBlur:!0,animate:"none",animationFunc:"line",inputFormat:null,locale:METRO_LOCALE,days:0,hours:0,minutes:0,seconds:0,date:null,start:!0,clsCountdown:"",clsPart:"",clsZero:"",clsAlarm:"",clsDays:"",clsHours:"",clsMinutes:"",clsSeconds:"",onAlarm:M.noop,onTick:M.noop,onZero:M.noop,onBlink:M.noop,onCountdownCreate:M.noop};M.countdownSetup=function(e){ve=D.extend({},ve,e)},window.metroCountdownSetup,M.countdownSetup(window.metroCountdownSetup);var ge={name:"Countdown",init:function(e,t){return this.options=D.extend({},ve,e),this.elem=t,this.element=D(t),this.breakpoint=(new Date).getTime(),this.blinkInterval=null,this.tickInterval=null,this.zeroDaysFired=!1,this.zeroHoursFired=!1,this.zeroMinutesFired=!1,this.zeroSecondsFired=!1,this.fontSize=parseInt(H.getStyleOne(t,"font-size")),this.current={d:0,h:0,m:0,s:0},this.locale=null,this.inactiveTab=!1,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;this.locale=void 0!==M.locales[t.locale]?M.locales[t.locale]:M.locales["en-US"],M.checkRuntime(e,"countdown"),this._build(),this._createEvents()},_setBreakpoint:function(){var e=this.options;this.breakpoint=(new Date).getTime(),H.isValue(e.date)&&H.isDate(e.date,e.inputFormat)&&(this.breakpoint=H.isValue(e.inputFormat)?e.date.toDate(e.inputFormat).getTime():new Date(e.date).getTime()),0<parseInt(e.days)&&(this.breakpoint+=864e5*parseInt(e.days)),0<parseInt(e.hours)&&(this.breakpoint+=36e5*parseInt(e.hours)),0<parseInt(e.minutes)&&(this.breakpoint+=6e4*parseInt(e.minutes)),0<parseInt(e.seconds)&&(this.breakpoint+=1e3*parseInt(e.seconds))},_build:function(){var n,e,i=this,s=this.element,a=this.options,t=(new Date).getTime();s.attr("id")||s.attr("id",H.elementId("countdown")),H.isValue(s.attr("id"))||s.attr("id",H.elementId("countdown")),s.addClass("countdown").addClass(a.clsCountdown),this._setBreakpoint(),n=Math.round((i.breakpoint-t)/864e5),D.each(["days","hours","minutes","seconds"],function(){var e=D("<div>").addClass("part "+this).addClass(a.clsPart).attr("data-label",i.locale.calendar.time[this]).appendTo(s);if("days"===this&&e.addClass(a.clsDays),"hours"===this&&e.addClass(a.clsHours),"minutes"===this&&e.addClass(a.clsMinutes),"seconds"===this&&e.addClass(a.clsSeconds),D("<div>").addClass("digit").appendTo(e),D("<div>").addClass("digit").appendTo(e),"days"===this&&100<=n)for(var t=0;t<String(Math.round(n/100)).length;t++)D("<div>").addClass("digit").appendTo(e)}),(e=s.find(".digit")).append(D("<span class='digit-placeholder'>").html("0")),e.append(D("<span class='digit-value'>").html("0")),H.exec(a.onCountdownCreate,[s],s[0]),s.fire("countdowncreate"),!0===a.start?this.start():this.tick()},_createEvents:function(){var e=this,t=this.element;this.options;D(document).on("visibilitychange",function(){document.hidden?e.pause():e.resume()},{ns:t.attr("id")})},blink:function(){var e=this.element,t=this.options;e.toggleClass("blink"),H.exec(t.onBlink,[this.current],e[0]),e.fire("blink",{time:this.current})},tick:function(){var e,t,n,i,s,a=this.element,o=this.options,r=(new Date).getTime(),l=a.find(".days"),c=a.find(".hours"),d=a.find(".minutes"),h=a.find(".seconds");if((e=Math.floor((this.breakpoint-r)/1e3))<=-1)return this.stop(),a.addClass(o.clsAlarm),H.exec(o.onAlarm,[r],a[0]),void a.fire("alarm",{time:r});e-=86400*(t=Math.floor(e/86400)),this.current.d!==t&&(this.current.d=t,this.draw("days",t)),0===t&&!1===this.zeroDaysFired&&(this.zeroDaysFired=!0,l.addClass(o.clsZero),H.exec(o.onZero,["days",l],a[0]),a.fire("zero",{parts:["days",l]})),e-=3600*(n=Math.floor(e/3600)),this.current.h!==n&&(this.current.h=n,this.draw("hours",n)),0===t&&0===n&&!1===this.zeroHoursFired&&(this.zeroHoursFired=!0,c.addClass(o.clsZero),H.exec(o.onZero,["hours",c],a[0]),a.fire("zero",{parts:["hours",c]})),e-=60*(i=Math.floor(e/60)),this.current.m!==i&&(this.current.m=i,this.draw("minutes",i)),0===t&&0===n&&0===i&&!1===this.zeroMinutesFired&&(this.zeroMinutesFired=!0,d.addClass(o.clsZero),H.exec(o.onZero,["minutes",d],a[0]),a.fire("zero",{parts:["minutes",d]})),s=Math.floor(e/1),this.current.s!==s&&(this.current.s=s,this.draw("seconds",s)),0===t&&0===n&&0===i&&0===s&&!1===this.zeroSecondsFired&&(this.zeroSecondsFired=!0,h.addClass(o.clsZero),H.exec(o.onZero,["seconds",h],a[0]),a.fire("zero",{parts:["seconds",h]})),H.exec(o.onTick,[{days:t,hours:n,minutes:i,seconds:s}],a[0]),a.fire("tick",{days:t,hours:n,minutes:i,seconds:s})},draw:function(e,t){function n(e){var t,n=e.height();e.siblings(".-old-digit").remove(),(t=e.clone().appendTo(e.parent())).css({top:-1*n+"px"}),e.addClass("-old-digit").animate(function(e,t){D(this).css({top:n*t+"px",opacity:1-t})},900,p.animationFunc,function(){D(this).remove()}),t.html(o).animate(function(e,t){D(this).css({top:n*t-n+"px",opacity:t})},900,p.animationFunc)}function i(e){var t,n=e.height(),i=parseInt(e.style("font-size"));e.siblings(".-old-digit").remove(),(t=e.clone().appendTo(e.parent())).css({top:0,left:0}),e.addClass("-old-digit").animate(function(e,t){D(this).css({top:n*t+"px",opacity:1-t,fontSize:i*(1-t)+"px"})},900,p.animationFunc,function(){D(this).remove()}),t.html(o).animate(function(e,t){D(this).css({top:n*t-n+"px",opacity:t,fontSize:i*t+"px"})},900,p.animationFunc)}var s,a,o,r,l,c,d,h,u=this.element,p=this.options;for(1===(t=""+t).length&&(t="0"+t),l=t.length,a=(s=u.find("."+e+" .digit:not(-old-digit)")).length,c=0;c<l;c++)if(r=s.eq(a-1).find(".digit-value"),o=Math.floor(parseInt(t)/Math.pow(10,c))%10,parseInt(r.text())!==o){switch((""+p.animate).toLowerCase()){case"slide":n(r);break;case"fade":h=void 0,(d=r).siblings(".-old-digit").remove(),(h=d.clone().appendTo(d.parent())).css({opacity:0}),d.addClass("-old-digit").animate(function(e,t){D(this).css({opacity:1-t})},450,p.animationFunc,function(){D(this).remove()}),h.html(o).animate(function(e,t){D(this).css({opacity:t})},900,p.animationFunc);break;case"zoom":i(r);break;default:r.html(o)}a--}},start:function(){var e=this,t=this.element;!1!==t.data("paused")&&(clearInterval(this.blinkInterval),clearInterval(this.tickInterval),t.data("paused",!1),this._setBreakpoint(),this.tick(),this.blinkInterval=setInterval(function(){e.blink()},500),this.tickInterval=setInterval(function(){e.tick()},1e3))},stop:function(){var e=this.element;clearInterval(this.blinkInterval),clearInterval(this.tickInterval),e.data("paused",!0),e.find(".digit").html("0"),this.current={d:0,h:0,m:0,s:0}},pause:function(){clearInterval(this.blinkInterval),clearInterval(this.tickInterval),this.element.data("paused",!0)},resume:function(){var e=this;this.element.data("paused",!1),this.blinkInterval=setInterval(function(){e.blink()},500),this.tickInterval=setInterval(function(){e.tick()},1e3)},reset:function(){var e=this,t=this.element,n=this.options;clearInterval(this.blinkInterval),clearInterval(this.tickInterval),t.find(".part").removeClass(n.clsZero),t.find(".digit").html("0"),this._setBreakpoint(),t.data("paused",!1),this.tick(),this.blinkInterval=setInterval(function(){e.blink()},500),this.tickInterval=setInterval(function(){e.tick()},1e3)},togglePlay:function(){!0===this.element.attr("data-pause")?this.pause():this.start()},isPaused:function(){return this.element.data("paused")},getBreakpoint:function(e){return!0===e?new Date(this.breakpoint):this.breakpoint},getLeft:function(){var e=(new Date).getTime(),t=Math.floor(this.breakpoint-e);return{days:Math.round(t/864e5),hours:Math.round(t/36e5),minutes:Math.round(t/6e4),seconds:Math.round(t/1e3)}},i18n:function(e){var t=this,n=this.element,i=this.options;return void 0===e?i.locale:void 0!==M.locales[e]&&(i.locale=e,this.locale=M.locales[i.locale],void D.each(["days","hours","minutes","seconds"],function(){var e=".part."+this;n.find(e).attr("data-label",t.locale.calendar.time[this])}))},changeAttrLocale:function(){var e=this.element.attr("data-locale");this.i18n(e)},changeAttribute:function(e){switch(e){case"data-pause":this.togglePlay();break;case"data-locale":this.changeAttrLocale()}},destroy:function(){return clearInterval(this.blinkInterval),clearInterval(this.tickInterval),D(document).off("visibilitychange",{ns:element.attr("id")}),this.element}};M.plugin("countdown",ge);var Ce={startOnViewport:!0,counterDeferred:0,delay:10,step:1,value:0,timeout:0,delimiter:",",onStart:M.noop,onStop:M.noop,onTick:M.noop,onCounterCreate:M.noop};M.counterSetup=function(e){Ce=D.extend({},Ce,e)},window.metroCounterSetup,M.counterSetup(window.metroCounterSetup);var be={name:"Counter",init:function(e,t){return this.options=D.extend({},Ce,e),this.elem=t,this.element=D(t),this.numbers=[],this.html=this.element.html(),this.started=!1,this.id=H.elementId("counter"),this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var t=this,n=this.element,i=this.options;M.checkRuntime(n,"counter"),this._calcArray(),H.exec(i.onCounterCreate,[n],this.elem),n.fire("countercreate"),0<i.timeout&&!0!==i.startOnViewport&&setTimeout(function(){t.start()},i.timeout),!0===i.startOnViewport&&D.window().on("scroll",function(e){H.inViewport(n[0])&&!t.started&&(t.started=!0,setTimeout(function(){t.start()},i.timeout))},{ns:this.id})},_calcArray:function(){var e,t=this.options;for(this.numbers=[],e=0;e<=t.value;e+=t.step)this.numbers.push(e);this.numbers[this.numbers.length-1]!==t.value&&this.numbers.push(t.value)},_tick:function(){var e=this,t=this.element,n=this.options;if(0===this.numbers.length)return this.started=!1,H.exec(n.onStop,[t],t[0]),void t.fire("stop");var i=e.numbers.shift();H.exec(n.onTick,[i,t],t[0]),t.fire("tick"),t.html(Number(i).format(0,0,n.delimiter)),0<e.numbers.length&&e.started?setTimeout(function(){e._tick()},n.delay):(e.started=!1,H.exec(n.onStop,[t],t[0]),t.fire("stop"))},start:function(){var e=this,t=this.element,n=this.options;this.started=!0,H.exec(n.onStart,[t],t[0]),t.fire("start"),setTimeout(function(){e._tick()},n.delay)},reset:function(){this.started=!1,this._calcArray(),this.element.html(this.html)},setValueAttribute:function(){this.options.value=this.element.attr("data-value"),this._calcArray()},changeAttribute:function(e){"data-value"===e&&this.setValueAttribute()},destroy:function(){return!0===this.options.startOnViewport&&D.window().off("scroll",{ns:this.id}),this.element}};M.plugin("counter",be);var we={cubeDeferred:0,rules:null,color:null,flashColor:null,flashInterval:1e3,numbers:!1,offBefore:!0,attenuation:.3,stopOnBlur:!1,cells:4,margin:8,showAxis:!1,axisStyle:"arrow",cellClick:!1,autoRestart:5e3,clsCube:"",clsCell:"",clsSide:"",clsSideLeft:"",clsSideRight:"",clsSideTop:"",clsSideLeftCell:"",clsSideRightCell:"",clsSideTopCell:"",clsAxis:"",clsAxisX:"",clsAxisY:"",clsAxisZ:"",custom:M.noop,onTick:M.noop,onCubeCreate:M.noop};M.cubeSetup=function(e){we=D.extend({},we,e)},window.metroCubeSetup,M.cubeSetup(window.metroCubeSetup);var ye={name:"Cube",init:function(e,t){return this.options=D.extend({},we,e),this.elem=t,this.element=D(t),this.id=null,this.rules=null,this.interval=!1,this.ruleInterval=!1,this.running=!1,this.intervals=[],this._setOptionsFromDOM(),M.createExec(this),this},default_rules:[{on:{top:[16],left:[4],right:[1]},off:{top:[13,4],left:[1,16],right:[13,4]}},{on:{top:[12,15],left:[3,8],right:[2,5]},off:{top:[9,6,3],left:[5,10,15],right:[14,11,8]}},{on:{top:[11],left:[7],right:[6]},off:{top:[1,2,5],left:[9,13,14],right:[15,12,16]}},{on:{top:[8,14],left:[2,12],right:[9,3]},off:{top:[16],left:[4],right:[1]}},{on:{top:[10,7],left:[6,11],right:[10,7]},off:{top:[12,15],left:[3,8],right:[2,5]}},{on:{top:[13,4],left:[1,16],right:[13,4]},off:{top:[11],left:[7],right:[6]}},{on:{top:[9,6,3],left:[5,10,15],right:[14,11,8]},off:{top:[8,14],left:[2,12],right:[9,3]}},{on:{top:[1,2,5],left:[9,13,14],right:[15,12,16]},off:{top:[10,7],left:[6,11],right:[10,7]}}],_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"cube"),null===t.rules?this.rules=this.default_rules:this._parseRules(t.rules),this._createCube(),this._createEvents(),H.exec(t.onCubeCreate,[e]),e.fire("cubecreate")},_parseRules:function(e){if(null==e)return!1;if(H.isObject(e))return this.rules=H.isObject(e),!0;try{return this.rules=JSON.parse(e),!0}catch(e){return console.warn("Unknown or empty rules for cell flashing!"),!1}},_createCube:function(){var i=this.element,s=this.options,e=H.elementId("cube"),a=Math.pow(s.cells,2);i.addClass("cube").addClass(s.clsCube),i.attr("id")||i.attr("id",e),this.id=i.attr("id"),this._createCssForFlashColor(),this._createCssForCellSize(),D.each(["left","right","top"],function(){var e,t,n;for(e=D("<div>").addClass("side "+this+"-side").addClass(s.clsSide).appendTo(i),"left"===this&&e.addClass(s.clsSideLeft),"right"===this&&e.addClass(s.clsSideRight),"top"===this&&e.addClass(s.clsSideTop),n=0;n<a;n++)(t=D("<div>").addClass("cube-cell").addClass("cell-id-"+(n+1)).addClass(s.clsCell)).data("id",n+1).data("side",this),t.appendTo(e),!0===s.numbers&&t.html(n+1)});var t=i.find(".cube-cell");null!==s.color&&(H.isColor(s.color)?t.css({backgroundColor:s.color,borderColor:s.color}):t.addClass(s.color));D.each(["x","y","z"],function(){var e=D("<div>").addClass("axis "+s.axisStyle).addClass("axis-"+this).addClass(s.clsAxis);"x"===this&&e.addClass(s.clsAxisX),"y"===this&&e.addClass(s.clsAxisY),"z"===this&&e.addClass(s.clsAxisZ),e.appendTo(i)}),!1===s.showAxis&&i.find(".axis").hide(),this._run()},_run:function(){var e=this,t=this.element,n=this.options,i=0;clearInterval(this.interval),t.find(".cube-cell").removeClass("light"),n.custom!==M.noop?H.exec(n.custom,[t]):(t.find(".cube-cell").removeClass("light"),e._start(),i=H.isObject(this.rules)?H.objectLength(this.rules):0,this.interval=setInterval(function(){e._start()},i*n.flashInterval))},_createCssForCellSize:function(){var e,t,n=this.element,i=this.options,s=M.sheet;8===i.margin&&4===i.cells||(e=parseInt(H.getStyleOne(n,"width")),t=Math.ceil((e/2-i.margin*i.cells*2)/i.cells),H.addCssRule(s,"#"+n.attr("id")+" .side .cube-cell","width: "+t+"px!important; height: "+t+"px!important; margin: "+i.margin+"px!important;"))},_createCssForFlashColor:function(){var e,t,n,i=this.element,s=this.options,a=M.sheet,o=[],r=[];if(null!==s.flashColor){for(e="0 0 10px "+H.hexColorToRgbA(s.flashColor,1),t="0 0 10px "+H.hexColorToRgbA(s.flashColor,s.attenuation),n=0;n<3;n++)o.push(e),r.push(t);H.addCssRule(a,"@keyframes pulsar-cell-"+i.attr("id"),"0%, 100% { box-shadow: "+o.join(",")+"} 50% { box-shadow: "+r.join(",")+" }"),H.addCssRule(a,"#"+i.attr("id")+" .side .cube-cell.light","animation: pulsar-cell-"+i.attr("id")+" 2.5s 0s ease-out infinite; background-color: "+s.flashColor+"!important; border-color: "+s.flashColor+"!important;")}},_createEvents:function(){var e=this,t=this.element,n=this.options;D(window).on(M.events.blur,function(){!0===n.stopOnBlur&&!0===e.running&&e._stop()},{ns:t.attr("id")}),D(window).on(M.events.focus,function(){!0===n.stopOnBlur&&!1===e.running&&e._start()},{ns:t.attr("id")}),t.on(M.events.click,".cube-cell",function(){!0===n.cellClick&&D(this).toggleClass("light")})},_start:function(){var n=this;this.element.find(".cube-cell").removeClass("light"),this.running=!0,D.each(this.rules,function(e,t){n._execRule(e,t)})},_stop:function(){this.running=!1,clearInterval(this.interval),D.each(this.intervals,function(){clearInterval(this)})},_tick:function(e,t){var n=this,i=this.element,s=this.options;void 0===t&&(t=s.flashInterval*e);var a=setTimeout(function(){H.exec(s.onTick,[e],i[0]),i.fire("tick",{index:e}),clearInterval(a),H.arrayDelete(n.intervals,a)},t);this.intervals.push(a)},_toggle:function(e,t,n,i){var s=this;void 0===i&&(i=this.options.flashInterval*n);var a=setTimeout(function(){e["on"===t?"addClass":"removeClass"]("light"),clearInterval(a),H.arrayDelete(s.intervals,a)},i);this.intervals.push(a)},start:function(){this._start()},stop:function(){this._stop()},toRule:function(e,t){var n=this,i=this.element,s=this.options,a=this.rules;if(null!=a&&void 0!==a[e]){clearInterval(this.ruleInterval),this.ruleInterval=!1,this.stop(),i.find(".cube-cell").removeClass("light");for(var o=0;o<=e;o++)this._execRule(o,a[o],t);H.isInt(s.autoRestart)&&0<s.autoRestart&&(this.ruleInterval=setTimeout(function(){n._run()},s.autoRestart))}},_execRule:function(i,s,a){var o=this,r=this.element;this._tick(i,a),D.each(["left","right","top"],function(){var t="."+this+"-side",e=void 0!==s.on&&void 0!==s.on[this]&&s.on[this],n=void 0!==s.off&&void 0!==s.off[this]&&s.off[this];!1!==e&&D.each(e,function(){var e=r.find(t+" .cell-id-"+this);o._toggle(e,"on",i,a)}),!1!==n&&D.each(n,function(){var e=r.find(t+" .cell-id-"+this);o._toggle(e,"off",i,a)})})},rule:function(e){if(void 0===e)return this.rules;!0===this._parseRules(e)&&(this.options.rules=e,this.stop(),this.element.find(".cube-cell").removeClass("light"),this._run())},axis:function(e){var t=!0===e?"show":"hide";this.element.find(".axis")[t]()},changeRules:function(){var e=this.element,t=this.options,n=e.attr("data-rules");!0===this._parseRules(n)&&(this.stop(),e.find(".cube-cell").removeClass("light"),t.rules=n,this._run())},changeAxisVisibility:function(){var e=this.element,t=!0===JSON.parse(e.attr("data-show-axis"))?"show":"hide";e.find(".axis")[t]()},changeAxisStyle:function(){var e=this.element,t=e.attr("data-axis-style");e.find(".axis").removeClass("arrow line no-style").addClass(t)},changeAttribute:function(e){switch(e){case"data-rules":this.changeRules();break;case"data-show-axis":this.changeAxisVisibility();break;case"data-axis-style":this.changeAxisStyle()}},destroy:function(){var e=this.element;return clearInterval(this.interval),this.interval=null,D(window).off(M.events.blur,{ns:e.attr("id")}),D(window).off(M.events.focus,{ns:e.attr("id")}),e.off(M.events.click,".cube-cell"),e}};M.plugin("cube",ye);var xe={datepickerDeferred:0,gmt:0,format:"%Y-%m-%d",inputFormat:null,locale:METRO_LOCALE,value:null,distance:3,month:!0,day:!0,year:!0,minYear:null,maxYear:null,scrollSpeed:4,copyInlineStyles:!1,clsPicker:"",clsPart:"",clsMonth:"",clsDay:"",clsYear:"",okButtonIcon:"<span class='default-icon-check'></span>",cancelButtonIcon:"<span class='default-icon-cross'></span>",onSet:M.noop,onOpen:M.noop,onClose:M.noop,onScroll:M.noop,onDatePickerCreate:M.noop};M.datePickerSetup=function(e){xe=D.extend({},xe,e)},window.metroDatePickerSetup,M.datePickerSetup(window.metroDatePickerSetup);var Se={name:"DatePicker",init:function(e,t){return this.options=D.extend({},xe,e),this.elem=t,this.element=D(t),this.picker=null,this.isOpen=!1,this.value=new Date,this.locale=M.locales[this.options.locale].calendar,this.offset=(new Date).getTimezoneOffset()/60+1,this.listTimer={day:null,month:null,year:null},this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"datepicker"),t.distance<1&&(t.distance=1),H.isValue(e.val())&&(t.value=e.val()),H.isValue(t.value)&&(H.isValue(t.inputFormat)?this.value=(""+t.value).toDate(t.inputFormat):H.isDate(t.value)&&(this.value=new Date(t.value))),void 0===M.locales[t.locale]&&(t.locale=METRO_LOCALE),this.locale=M.locales[t.locale].calendar,null===t.minYear&&(t.minYear=(new Date).getFullYear()-100),null===t.maxYear&&(t.maxYear=(new Date).getFullYear()+100),this._createStructure(),this._createEvents(),this._set(),H.exec(t.onDatePickerCreate,[e]),e.fire("datepickercreate")},_createStructure:function(){var e,t,n,i,s,a,o,r,l,c,d=this.element,h=this.options,u=d.prev(),p=d.parent(),f=H.elementId("datepicker");if(e=D("<div>").attr("id",f).addClass("wheel-picker date-picker "+d[0].className).addClass(h.clsPicker),0===u.length?p.prepend(e):e.insertAfter(u),d.appendTo(e),o=D("<div>").addClass("date-wrapper").appendTo(e),!0===h.month&&(t=D("<div>").addClass("month").addClass(h.clsPart).addClass(h.clsMonth).appendTo(o)),!0===h.day&&(n=D("<div>").addClass("day").addClass(h.clsPart).addClass(h.clsDay).appendTo(o)),!0===h.year&&(i=D("<div>").addClass("year").addClass(h.clsPart).addClass(h.clsYear).appendTo(o)),r=D("<div>").addClass("select-wrapper").appendTo(e),l=D("<div>").addClass("select-block").appendTo(r),!0===h.month){for(t=D("<ul>").addClass("sel-month").appendTo(l),s=0;s<h.distance;s++)D("<li>").html("&nbsp;").data("value",-1).appendTo(t);for(s=0;s<12;s++)D("<li>").addClass("js-month-"+s+" js-month-real-"+this.locale.months[s].toLowerCase()).html(this.locale.months[s]).data("value",s).appendTo(t);for(s=0;s<h.distance;s++)D("<li>").html("&nbsp;").data("value",-1).appendTo(t)}if(!0===h.day){for(n=D("<ul>").addClass("sel-day").appendTo(l),s=0;s<h.distance;s++)D("<li>").html("&nbsp;").data("value",-1).appendTo(n);for(s=0;s<31;s++)D("<li>").addClass("js-day-"+s+" js-day-real-"+(s+1)).html(s+1).data("value",s+1).appendTo(n);for(s=0;s<h.distance;s++)D("<li>").html("&nbsp;").data("value",-1).appendTo(n)}if(!0===h.year){for(i=D("<ul>").addClass("sel-year").appendTo(l),s=0;s<h.distance;s++)D("<li>").html("&nbsp;").data("value",-1).appendTo(i);for(s=h.minYear,a=0;s<=h.maxYear;s++,a++)D("<li>").addClass("js-year-"+a+" js-year-real-"+s).html(s).data("value",s).appendTo(i);for(s=0;s<h.distance;s++)D("<li>").html("&nbsp;").data("value",-1).appendTo(i)}if(l.height(40*(2*h.distance+1)),c=D("<div>").addClass("action-block").appendTo(r),D("<button>").attr("type","button").addClass("button action-ok").html(h.okButtonIcon).appendTo(c),D("<button>").attr("type","button").addClass("button action-cancel").html(h.cancelButtonIcon).appendTo(c),!(d[0].className="")===h.copyInlineStyles)for(s=0;s<d[0].style.length;s++)e.css(d[0].style[s],d.css(d[0].style[s]));this.picker=e},_createEvents:function(){var r=this,a=this.options,l=this.picker;l.on(M.events.start,".select-block ul",function(e){if(!e.changedTouches){var t=this,n=H.pageXY(e).y;D(document).on(M.events.move,function(e){t.scrollTop-=a.scrollSpeed*(n>H.pageXY(e).y?-1:1),n=H.pageXY(e).y},{ns:l.attr("id")}),D(document).on(M.events.stop,function(){D(document).off(M.events.move,{ns:l.attr("id")}),D(document).off(M.events.stop,{ns:l.attr("id")})},{ns:l.attr("id")})}}),l.on(M.events.click,function(e){!1===r.isOpen&&r.open(),e.stopPropagation()}),l.on(M.events.click,".action-ok",function(e){var t,n,i,s=l.find(".sel-month li.active"),a=l.find(".sel-day li.active"),o=l.find(".sel-year li.active");t=0===s.length?r.value.getMonth():s.data("value"),n=0===a.length?r.value.getDate():a.data("value"),i=0===o.length?r.value.getFullYear():o.data("value"),r.value=new Date(i,t,n),r._correct(),r._set(),r.close(),e.stopPropagation()}),l.on(M.events.click,".action-cancel",function(e){r.close(),e.stopPropagation()});D.each(["month","day","year"],function(){var i=this,s=l.find(".sel-"+i);s.on("scroll",function(){r.isOpen&&(r.listTimer[i]&&(clearTimeout(r.listTimer[i]),r.listTimer[i]=null),r.listTimer[i]||(r.listTimer[i]=setTimeout(function(){var e,t,n;r.listTimer[i]=null,e=Math.round(Math.ceil(s.scrollTop())/40),n=(t=s.find(".js-"+i+"-"+e)).position().top-40*a.distance,s.find(".active").removeClass("active"),s[0].scrollTop=n,t.addClass("active"),H.exec(a.onScroll,[t,s,l],s[0])},150)))})})},_correct:function(){var e=this.value.getMonth(),t=this.value.getDate(),n=this.value.getFullYear();this.value=new Date(n,e,t)},_set:function(){var e=this.element,t=this.options,n=this.picker,i=this.locale.months[this.value.getMonth()],s=this.value.getDate(),a=this.value.getFullYear();!0===t.month&&n.find(".month").html(i),!0===t.day&&n.find(".day").html(s),!0===t.year&&n.find(".year").html(a),e.val(this.value.format(t.format,t.locale)).trigger("change"),H.exec(t.onSet,[this.value,e.val(),e,n],e[0]),e.fire("set",{value:this.value})},open:function(){var e,t,n,i,s,a=this.element,o=this.options,r=this.picker,l=this.value.getMonth(),c=this.value.getDate()-1,d=this.value.getFullYear(),h=r.find(".select-wrapper");h.parent().removeClass("for-top for-bottom"),h.show(0),r.find("li").removeClass("active"),i=H.inViewport(h[0]),s=H.rect(h[0]),!i&&0<s.top&&h.parent().addClass("for-bottom"),!i&&s.top<0&&h.parent().addClass("for-top"),!0===o.month&&(e=r.find(".sel-month")).scrollTop(0).animate({scrollTop:e.find("li.js-month-"+l).addClass("active").position().top-40*o.distance},100),!0===o.day&&(t=r.find(".sel-day")).scrollTop(0).animate({scrollTop:t.find("li.js-day-"+c).addClass("active").position().top-40*o.distance},100),!0===o.year&&(n=r.find(".sel-year")).scrollTop(0).animate({scrollTop:n.find("li.js-year-real-"+d).addClass("active").position().top-40*o.distance},100),this.isOpen=!0,H.exec(o.onOpen,[this.value,a,r],a[0]),a.fire("open",{value:this.value})},close:function(){var e=this.picker,t=this.options,n=this.element;e.find(".select-wrapper").hide(0),this.isOpen=!1,H.exec(t.onClose,[this.value,n,e],n[0]),n.fire("close",{value:this.value})},val:function(e){var t=this.options;if(!H.isValue(e))return this.element.val();H.isValue(t.inputFormat)?this.value=(""+e).toDate(t.inputFormat):this.value=new Date(e),this._set()},date:function(e){if(void 0===e)return this.value;try{this.value=new Date(e.format("%Y-%m-%d")),this._set()}catch(e){return!1}},i18n:function(e){var t,n,i=this.element,s=this.options;if(s.locale=e||i.attr("data-locale"),this.locale=M.locales[s.locale].calendar,!0===s.month){for(t=i.closest(".date-picker").find(".sel-month").html(""),n=0;n<s.distance;n++)D("<li>").html("&nbsp;").data("value",-1).appendTo(t);for(n=0;n<12;n++)D("<li>").addClass("js-month-"+n+" js-month-real-"+this.locale.months[n].toLowerCase()).html(this.locale.months[n]).data("value",n).appendTo(t);for(n=0;n<s.distance;n++)D("<li>").html("&nbsp;").data("value",-1).appendTo(t)}this._set()},changeAttribute:function(e){var t=this;switch(e){case"data-value":t.val(t.element.attr("data-value"));break;case"data-locale":t.i18n(t.element.attr("data-locale"));break;case"data-format":t.options.format=t.element.attr("data-format"),t._set()}},destroy:function(){var e=this.element,t=this.picker;return D.each(["moth","day","year"],function(){t.find(".sel-"+this).off("scroll")}),t.off(M.events.start,".select-block ul"),t.off(M.events.click),t.off(M.events.click,".action-ok"),t.off(M.events.click,".action-cancel"),e}};M.plugin("datepicker",Se),D(document).on(M.events.click,function(){D.each(D(".date-picker"),function(){D(this).find("input").each(function(){M.getPlugin(this,"datepicker").close()})})});var Te={dialogDeferred:0,closeButton:!1,leaveOverlayOnClose:!1,toTop:!1,toBottom:!1,locale:METRO_LOCALE,title:"",content:"",actions:{},actionsAlign:"right",defaultAction:!0,overlay:!0,overlayColor:"#000000",overlayAlpha:.5,overlayClickClose:!1,width:"480",height:"auto",shadow:!0,closeAction:!0,clsDialog:"",clsTitle:"",clsContent:"",clsAction:"",clsDefaultAction:"",clsOverlay:"",autoHide:0,removeOnClose:!1,show:!1,_runtime:!1,onShow:M.noop,onHide:M.noop,onOpen:M.noop,onClose:M.noop,onDialogCreate:M.noop};M.dialogSetup=function(e){Te=D.extend({},Te,e)},window.metroDialogSetup,M.dialogSetup(window.metroDialogSetup);var ke={_counter:0,name:"Dialog",init:function(e,t){return this.options=D.extend({},Te,e),this.elem=t,this.element=D(t),this.interval=null,this.overlay=null,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;this.locale=void 0!==M.locales[t.locale]?M.locales[t.locale]:M.locales["en-US"],M.checkRuntime(e,"dialog"),this._build()},_build:function(){var e,t=this,n=this.element,i=this.options,s=D("body");if(n.addClass("dialog"),!0===i.shadow&&n.addClass("shadow-on"),void 0===n.attr("id")&&n.attr("id",H.elementId("dialog")),""!==i.title&&this.setTitle(i.title),""!==i.content&&this.setContent(i.content),!0===i.defaultAction||!1!==i.actions&&"object"==typeof i.actions&&0<H.objectLength(i.actions)){var a,o=n.find(".dialog-actions");0===o.length&&(o=D("<div>").addClass("dialog-actions").addClass("text-"+i.actionsAlign).appendTo(n)),!0===i.defaultAction&&0===H.objectLength(i.actions)&&0===n.find(".dialog-actions > *").length&&(a=D("<button>").addClass("button js-dialog-close").addClass(i.clsDefaultAction).html(this.locale.buttons.ok)).appendTo(o),H.isObject(i.actions)&&D.each(H.isObject(i.actions),function(){var e=this;a=D("<button>").addClass("button").addClass(e.cls).html(e.caption),void 0!==e.onclick&&a.on(M.events.click,function(){H.exec(e.onclick,[n])}),a.appendTo(o)})}!0===i.overlay&&(e=this._overlay(),this.overlay=e),!0===i.closeAction&&n.on(M.events.click,".js-dialog-close",function(){t.close()});var r=n.find("closer");0===r.length&&(r=D("<span>").addClass("button square closer js-dialog-close")).appendTo(n),!0!==i.closeButton&&r.hide(),n.css({width:i.width,height:i.height,visibility:"hidden",top:"100%",left:(D(window).width()-n.outerWidth())/2}),n.addClass(i.clsDialog),n.find(".dialog-title").addClass(i.clsTitle),n.find(".dialog-content").addClass(i.clsContent),n.find(".dialog-actions").addClass(i.clsAction),n.appendTo(s),i.show&&this.open(),D(window).on(M.events.resize,function(){t.setPosition()},{ns:n.attr("id")}),H.exec(this.options.onDialogCreate,[this.element]),n.fire("dialogcreate")},_overlay:function(){var e=this.options,t=D("<div>");return t.addClass("overlay").addClass(e.clsOverlay),"transparent"===e.overlayColor?t.addClass("transparent"):t.css({background:H.hex2rgba(e.overlayColor,e.overlayAlpha)}),t},hide:function(e){var t=this.element,n=this.options,i=0;n.onHide!==M.noop&&(i=500,H.exec(n.onHide,null,t[0]),t.fire("hide")),setTimeout(function(){H.callback(e),t.css({visibility:"hidden",top:"100%"})},i)},show:function(e){var t=this.element,n=this.options;this.setPosition(),t.css({visibility:"visible"}),H.exec(n.onShow,[this],t[0]),t.fire("show"),H.callback(e)},setPosition:function(){var e,t,n=this.element,i=this.options;!0!==i.toTop&&!0!==i.toBottom?((e=(D(window).height()-n.outerHeight())/2)<0&&(e=0),t="auto"):(!0===i.toTop&&(e=0,t="auto"),!0!==i.toTop&&!0===i.toBottom&&(t=0,e="auto")),n.css({top:e,bottom:t,left:(D(window).width()-n.outerWidth())/2})},setContent:function(e){var t=this.element,n=t.find(".dialog-content");0===n.length&&(n=D("<div>").addClass("dialog-content")).appendTo(t),!H.isQ(e)&&H.isFunc(e)&&(e=H.exec(e)),H.isQ(e)?e.appendTo(n):n.html(e)},setTitle:function(e){var t=this.element,n=t.find(".dialog-title");0===n.length&&(n=D("<div>").addClass("dialog-title")).appendTo(t),n.html(e)},close:function(){var e=this.element,t=this.options;H.bool(t.leaveOverlayOnClose)||D("body").find(".overlay").remove(),this.hide(function(){e.data("open",!1),H.exec(t.onClose,[e],e[0]),e.fire("close"),!0===t.removeOnClose&&e.remove()})},open:function(){var e=this,t=this.element,n=this.options;!0===n.overlay&&0===D(".overlay").length&&(this.overlay.appendTo(D("body")),!0===n.overlayClickClose&&this.overlay.on(M.events.click,function(){e.close()})),this.show(function(){H.exec(n.onOpen,[t],t[0]),t.fire("open"),t.data("open",!0),0<parseInt(n.autoHide)&&setTimeout(function(){e.close()},parseInt(n.autoHide))})},toggle:function(){this.element.data("open")?this.close():this.open()},isOpen:function(){return!0===this.element.data("open")},changeAttribute:function(e){},destroy:function(){var e=this.element;this.options;return e.off(M.events.click,".js-dialog-close"),e.find(".button").off(M.events.click),D(window).off(M.events.resize,{ns:e.attr("id")}),e}};M.plugin("dialog",ke);var _e={donutDeferred:0,size:100,radius:50,hole:.8,value:0,background:"#ffffff",color:"",stroke:"#d1d8e7",fill:"#49649f",fontSize:24,total:100,cap:"%",showText:!0,showValue:!(M.dialog={isDialog:function(e){return H.isMetroObject(e,"dialog")},open:function(e,t,n){if(!this.isDialog(e))return!1;var i=M.getPlugin(e,"dialog");void 0!==n&&i.setTitle(n),void 0!==t&&i.setContent(t),i.open()},close:function(e){if(!this.isDialog(e))return!1;M.getPlugin(D(e)[0],"dialog").close()},toggle:function(e){if(!this.isDialog(e))return!1;M.getPlugin(D(e)[0],"dialog").toggle()},isOpen:function(e){if(!this.isDialog(e))return!1;M.getPlugin(D(e)[0],"dialog").isOpen()},remove:function(e){if(!this.isDialog(e))return!1;var t=M.getPlugin(D(e)[0],"dialog");t.options.removeOnClose=!0,t.close()},create:function(e){var t;t=D("<div>").appendTo(D("body"));var n=D.extend({},{show:!0,closeAction:!0,removeOnClose:!0},void 0!==e?e:{});return n._runtime=!0,M.makePlugin(t,"dialog",n)}}),animate:0,onChange:M.noop,onDonutCreate:M.noop};M.donutSetup=function(e){_e=D.extend({},_e,e)},window.metroDonutSetup,M.donutSetup(window.metroDonutSetup);var Oe={name:"Donut",init:function(e,t){return this.options=D.extend({},_e,e),this.elem=t,this.element=D(t),this.value=0,this.animation_change_interval=null,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options,n="",i=t.radius*(1-(1-t.hole)/2),s=t.radius*(1-t.hole),a=2*Math.PI*i,o=(t.value,t.total,"rotate(-90 "+t.radius+","+t.radius+")"),r=i*t.hole*.6;M.checkRuntime(e,"donut"),e.addClass("donut"),e.css({width:t.size,height:t.size,background:t.background}),n+="<svg>",n+="   <circle class='donut-back' r='"+i+"px' cx='"+t.radius+"px' cy='"+t.radius+"px' transform='"+o+"' fill='none' stroke='"+t.stroke+"' stroke-width='"+s+"'/>",n+="   <circle class='donut-fill' r='"+i+"px' cx='"+t.radius+"px' cy='"+t.radius+"px' transform='"+o+"' fill='none' stroke='"+t.fill+"' stroke-width='"+s+"'/>",!0===t.showText&&(n+="   <text   class='donut-title' x='"+t.radius+"px' y='"+t.radius+"px' dy='"+r/3+"px' text-anchor='middle' fill='"+(""!==t.color?t.color:t.fill)+"' font-size='"+r+"px'>0"+t.cap+"</text>"),n+="</svg>",e.html(n),this.val(t.value),H.exec(t.onDonutCreate,null,e[0]),e.fire("donutcreate")},_setValue:function(e){var t=this.element,n=this.options,i=t.find(".donut-fill"),s=t.find(".donut-title"),a=n.radius*(1-(1-n.hole)/2),o=2*Math.PI*a,r=(n.showValue?e:H.percent(n.total,e,!0))+n.cap,l=e*o/n.total+" "+o;i.attr("stroke-dasharray",l),s.html(r)},val:function(e){var t=this,n=this.element,i=this.options;if(void 0===e)return this.value;if(parseInt(e)<0||parseInt(e)>i.total)return!1;if(0<i.animate&&!document.hidden){var s=e>t.value,a=t.value+(s?-1:1);clearInterval(t.animation_change_interval),this.animation_change_interval=setInterval(function(){s?(t._setValue(++a),e<=a&&clearInterval(t.animation_change_interval)):(t._setValue(--a),a<=e&&clearInterval(t.animation_change_interval))},i.animate)}else clearInterval(t.animation_change_interval),this._setValue(e);this.value=e,H.exec(i.onChange,[this.value],n[0]),n.fire("change",{value:this.value})},changeValue:function(){this.val(this.element.attr("data-value"))},changeAttribute:function(e){switch(e){case"data-value":this.changeValue()}},destroy:function(){return this.element}};M.plugin("donut",Oe);var Ie={dragitemsDeferred:0,target:null,dragItem:"li",dragMarker:".drag-item-marker",drawDragMarker:!1,clsDragItemAvatar:"",clsDragItem:"",canDrag:!0,onDragStartItem:M.noop,onDragMoveItem:M.noop,onDragDropItem:M.noop,onTarget:M.noop,onTargetIn:M.noop,onTargetOut:M.noop,onDragItemsCreate:M.noop};M.dragItemsSetup=function(e){Ie=D.extend({},Ie,e)},window.metroDragItemsSetup,M.dragItemsSetup(window.metroDragItemsSetup);var De={name:"DragItems",init:function(e,t){return this.options=D.extend({},Ie,e),this.elem=t,this.element=D(t),this.id=null,this.canDrag=!1,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;this.id=H.elementId("dragItems"),t.canDrag?this.on():this.off(),this._createStructure(),this._createEvents(),H.exec(t.onDragItemsCreate,[e]),e.fire("dragitemscreate")},_createStructure:function(){var e=this.element,t=this.options;e.addClass("drag-items-target"),!0===t.drawDragMarker&&e.find(t.dragItem).each(function(){D("<span>").addClass("drag-item-marker").appendTo(this)})},_createEvents:function(){var i,s,a,o=this,v=this.element,g=this.options,r=D.document(),l=D.body(),C={top:0,left:0};v.on(M.events.startAll,g.drawDragMarker?g.dragMarker:g.dragItem,function(e){var t,n=D(e.target).closest(g.dragItem);H.isRightMouse(e)||!0===o.canDrag&&(n.addClass("dragged-item").addClass(g.clsDragItem),t=D("<div>").addClass("dragged-item-avatar").addClass(g.clsDragItemAvatar),i=n.offset(),s=n.width(),a=n.height(),C.top=H.pageXY(e).y-i.top,C.left=H.pageXY(e).x-i.left,t.css({top:i.top,left:i.left,width:s,height:a}).appendTo(l),H.exec(g.onDragStartItem,[n[0],t[0]],v[0]),v.fire("dragstartitem",{dragItem:n[0],avatar:t[0]}),r.on(M.events.moveAll,function(e){!function(e,t,n){var i=H.pageXY(e).x,s=H.pageXY(e).y,a=s-C.top,o=i-C.left;t.css({top:a,left:o});var r=document.elementsFromPoint(i,s).filter(function(e){return D(e).hasClass("drag-items-target")});if(0!==r.length){H.exec(g.onTarget,[r],v[0]),v.fire("target",{target:r});var l=document.elementsFromPoint(i,s).filter(function(e){var t=D(e);return D.matches(e,g.dragItem)&&!t.hasClass("dragged-item-avatar")})[0];if(H.isValue(l)){var c,d=D(l),h=d.offset(),u=s-h.top,p=i-h.left,f=d.width(),m=d.height();c=p<f/3&&(u<m/2||m/2<u)?"left":2*f/3<p&&(u<m/2||m/2<u)?"right":f/3<p&&p<2*f/3&&m/2<u?"bottom":"top",d.hasClass("dragged-item")||("top"===c||"left"===c?n.insertBefore(d):n.insertAfter(d))}else n.appendTo(r)}}(e,t,n),H.exec(g.onDragMoveItem,[n[0],t[0]],v[0]),v.fire("dragmoveitem",{dragItem:n[0],avatar:t[0]}),e.preventDefault()},{ns:o.id,passive:!1}),r.on(M.events.stopAll,function(e){H.exec(g.onDragDropItem,[n[0],t[0]],v[0]),v.fire("dragdropitem",{dragItem:n[0],avatar:t[0]}),n.removeClass("dragged-item").removeClass(g.clsDragItem),t.remove(),r.off(M.events.moveAll,{ns:o.id}),r.off(M.events.stopAll,{ns:o.id})},{ns:o.id}),g.drawDragMarker&&(e.preventDefault(),e.stopPropagation()))})},on:function(){this.canDrag=!0,this.element.find(".drag-item-marker").show()},off:function(){this.canDrag=!1,this.element.find(".drag-item-marker").hide()},toggle:function(){this.canDrag=this.canDrag?this.off():this.on()},changeAttribute:function(e){var t=this,n=this.element,i=this.options;"data-can-drag"===e&&(i.canDtag=JSON.parse(n.attr("data-can-drag")),i.canDtag?t.on():t.off())},destroy:function(){var e=this.element;return e.off(M.events.startAll,o.drawDragMarker?o.dragMarker:o.dragItem),e}};M.plugin("dragitems",De);var Me={draggableDeferred:0,dragElement:"self",dragArea:"parent",timeout:0,onCanDrag:M.noop_true,onDragStart:M.noop,onDragStop:M.noop,onDragMove:M.noop,onDraggableCreate:M.noop};M.draggableSetup=function(e){Me=D.extend({},Me,e)},window.metroDraggableSetup,M.draggableSetup(window.metroDraggableSetup);var Ee={name:"Draggable",init:function(e,t){return this.options=D.extend({},Me,e),this.elem=t,this.element=D(t),this.drag=!1,this.move=!1,this.backup={cursor:"default",zIndex:"0"},this.dragArea=null,this.dragElement=null,this.id=H.elementId("draggable"),this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){this._createStructure(),this._createEvents(),H.exec(this.options.onDraggableCreate,[this.element]),this.element.fire("draggablecreate")},_createStructure:function(){var e=this,t=this.element,n=(this.elem,this.options),i=t.offset(),s="self"!==n.dragElement?t.find(n.dragElement):t;M.checkRuntime(t,"draggable"),t.data("canDrag",!0),(this.dragElement=s)[0].ondragstart=function(){return!1},t.css("position","absolute"),"document"!==n.dragArea&&"window"!==n.dragArea||(n.dragArea="body"),setImmediate(function(){e.dragArea="parent"===n.dragArea?t.parent():D(n.dragArea),"parent"!==n.dragArea&&(t.appendTo(e.dragArea),t.css({top:i.top,left:i.left}))}),t.attr("id")||t.attr("id",H.elementId("draggable"))},_createEvents:function(){var a=this,o=this.element,r=this.elem,l=this.options,c={x:0,y:0};this.dragElement.on(M.events.startAll,function(e){function t(e){var t=H.pageXY(e).y-s,n=H.pageXY(e).x-i;t<0&&(t=0),n<0&&(n=0),t>a.dragArea.outerHeight()-o.outerHeight()&&(t=a.dragArea.outerHeight()-o.outerHeight()),n>a.dragArea.outerWidth()-o.outerWidth()&&(n=a.dragArea.outerWidth()-o.outerWidth()),c.y=t,c.x=n,o.css({left:n,top:t})}var n="parent"!==l.dragArea?o.offset():o.position(),i=H.pageXY(e).x-n.left,s=H.pageXY(e).y-n.top;!1!==o.data("canDrag")&&!0===H.exec(l.onCanDrag,[o])&&(!1==g&&1!==e.which||(a.drag=!0,a.backup.cursor=o.css("cursor"),a.backup.zIndex=o.css("z-index"),o.addClass("draggable"),t(e),H.exec(l.onDragStart,[c],o[0]),o.fire("dragstart",{position:c}),D(document).on(M.events.moveAll,function(e){e.preventDefault(),t(e),H.exec(l.onDragMove,[c],r),o.fire("dragmove",{position:c})},{ns:a.id,passive:!1}),D(document).on(M.events.stopAll,function(){o.css({cursor:a.backup.cursor,zIndex:a.backup.zIndex}).removeClass("draggable"),a.drag&&(D(document).off(M.events.moveAll,{ns:a.id}),D(document).off(M.events.stopAll,{ns:a.id})),a.drag=!1,a.move=!1,H.exec(l.onDragStop,[c],r),o.fire("dragstop",{position:c})},{ns:a.id})))})},off:function(){this.element.data("canDrag",!1)},on:function(){this.element.data("canDrag",!0)},changeAttribute:function(e){},destroy:function(){var e=this.element;this.options;return this.dragElement.off(M.events.startAll),e}};M.plugin("draggable",Ee);var Ae={dropdownDeferred:0,dropFilter:null,toggleElement:null,noClose:!1,duration:100,onDrop:M.noop,onUp:M.noop,onDropdownCreate:M.noop};M.dropdownSetup=function(e){Ae=D.extend({},Ae,e)},window.metroDropdownSetup,M.dropdownSetup(window.metroDropdownSetup);var Pe={name:"Dropdown",init:function(e,t){return this.options=D.extend({},Ae,e),this.elem=t,this.element=D(t),this._toggle=null,this.displayOrigin=null,this.isOpen=!1,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this,t=this.element,n=this.options;M.checkRuntime(t,"dropdown"),this._createStructure(),this._createEvents(),H.exec(n.onDropdownCreate,null,t),t.fire("dropdowncreate"),t.hasClass("open")&&(t.removeClass("open"),setImmediate(function(){e.open(!0)}))},_createStructure:function(){var e,t=this.element,n=this.options;e=null!==n.toggleElement?D(n.toggleElement):0<t.siblings(".dropdown-toggle").length?t.siblings(".dropdown-toggle"):t.prev(),this.displayOrigin=H.getStyleOne(t,"display"),t.hasClass("v-menu")&&t.addClass("for-dropdown"),t.css("display","none"),this._toggle=e},_createEvents:function(){var n=this,i=this.element,s=this.options,e=this._toggle,a=i.parent();e.on(M.events.click,function(e){if(a.siblings(a[0].tagName).removeClass("active-container"),D(".active-container").removeClass("active-container"),"none"===i.css("display")||i.hasClass("keep-open")){if(D("[data-role=dropdown]").each(function(e,t){i.parents("[data-role=dropdown]").is(t)||D(t).hasClass("keep-open")||"none"===D(t).css("display")||(H.isValue(s.dropFilter)?0<D(t).closest(s.dropFilter).length&&n._close(t):n._close(t))}),i.hasClass("horizontal")){i.css({visibility:"hidden",display:"block"});var t=0;D.each(i.children("li"),function(){t+=D(this).outerWidth(!0)}),i.css({visibility:"visible",display:"none"}),i.css("width",t)}n._open(i),a.addClass("active-container")}else n._close(i);e.preventDefault(),e.stopPropagation()}),!0===s.noClose&&i.addClass("keep-open").on(M.events.click,function(e){e.stopPropagation()}),D(i).find("li.disabled a").on(M.events.click,function(e){e.preventDefault()})},_close:function(e,t){e=D(e);var n=M.getPlugin(e,"dropdown"),i=n._toggle,s=n.options,a="slideUp";i.removeClass("active-toggle").removeClass("active-control"),n.element.parent().removeClass("active-container"),t&&(a="hide"),e[a](t?0:s.duration,function(){e.trigger("onClose",null,e)}),H.exec(s.onUp,null,e[0]),e.fire("up"),this.isOpen=!1},_open:function(e,t){e=D(e);var n=M.getPlugin(e,"dropdown"),i=n._toggle,s=n.options,a="slideDown";i.addClass("active-toggle").addClass("active-control"),t&&(a="show"),e[a](t?0:s.duration,function(){e.fire("onopen")}),H.exec(s.onDrop,null,e[0]),e.fire("drop"),this.isOpen=!0},close:function(e){this._close(this.element,e)},open:function(e){this._open(this.element,e)},toggle:function(){this.isOpen?this.close():this.open()},changeAttribute:function(e){},destroy:function(){this._toggle.off(M.events.click)}};D(document).on(M.events.click,function(){D("[data-role*=dropdown]").each(function(){var e=D(this);"none"===e.css("display")||e.hasClass("keep-open")||e.hasClass("stay-open")||e.hasClass("ignore-document-click")||M.getPlugin(e,"dropdown").close()})}),M.plugin("dropdown",Pe);var Ne={fileDeferred:0,mode:"input",buttonTitle:"Choose file(s)",filesTitle:"file(s) selected",dropTitle:"<strong>Choose a file(s)</strong> or drop it here",dropIcon:"<span class='default-icon-upload'></span>",prepend:"",clsComponent:"",clsPrepend:"",clsButton:"",clsCaption:"",copyInlineStyles:!1,onSelect:M.noop,onFileCreate:M.noop};M.fileSetup=function(e){Ne=D.extend({},Ne,e)},window.metroFileSetup,M.fileSetup(window.metroFileSetup);var Re={name:"File",init:function(e,t){return this.options=D.extend({},Ne,e),this.elem=t,this.element=D(t),this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element;M.checkRuntime(e,"file"),this._createStructure(),this._createEvents()},_createStructure:function(){var e,t,n=this.element,i=this.options,s=D("<label>").addClass(("input"===i.mode?" file ":"button"===i.mode?" file-button ":" drop-zone ")+n[0].className).addClass(i.clsComponent),a=D("<span>").addClass("caption").addClass(i.clsCaption),o=D("<span>").addClass("files").addClass(i.clsCaption);if(s.insertBefore(n),n.appendTo(s),"drop"===i.mode||"dropzone"===i.mode)e=D(i.dropIcon).addClass("icon").appendTo(s),a.html(i.dropTitle).insertAfter(e),o.html("0 "+i.filesTitle).insertAfter(a);else if("button"===i.mode)(t=D("<span>").addClass("button").attr("tabindex",-1).html(i.buttonTitle)).appendTo(s),t.addClass(i.clsButton);else{if(a.insertBefore(n),(t=D("<span>").addClass("button").attr("tabindex",-1).html(i.buttonTitle)).appendTo(s),t.addClass(i.clsButton),"rtl"===n.attr("dir")&&s.addClass("rtl"),""!==i.prepend)D("<div>").html(i.prepend).addClass("prepend").addClass(i.clsPrepend).appendTo(s)}if(!(n[0].className="")===i.copyInlineStyles)for(var r=0,l=n[0].style.length;r<l;r++)s.css(n[0].style[r],n.css(n[0].style[r]));n.is(":disabled")?this.disable():this.enable(),H.exec(i.onFileCreate,null,n[0]),n.fire("filecreate")},_createEvents:function(){var n=this.element,i=this.options,t=n.closest("label"),s=t.find(".caption"),a=t.find(".files");t.on(M.events.click,"button",function(){n[0].click()}),n.on(M.events.change,function(){var e,t=[];Array.from(this.files).forEach(function(e){t.push(e.name)}),"input"===i.mode?(e=t.join(", "),s.html(e),s.attr("title",e)):a.html(n[0].files.length+" "+i.filesTitle),H.exec(i.onSelect,[this.files],n[0]),n.fire("select",{files:this.files})}),n.on(M.events.focus,function(){t.addClass("focused")}),n.on(M.events.blur,function(){t.removeClass("focused")}),"input"!==i.mode&&(t.on("drag dragstart dragend dragover dragenter dragleave drop",function(e){e.preventDefault()}),t.on("dragenter dragover",function(){t.addClass("drop-on")}),t.on("dragleave",function(){t.removeClass("drop-on")}),t.on("drop",function(e){n[0].files=e.dataTransfer.files,a.html(n[0].files.length+" "+i.filesTitle),t.removeClass("drop-on"),n.trigger("change")}))},clear:function(){var e=this.element,t=this.options;"input"===t.mode?e.siblings(".caption").html(""):(e.siblings(".caption").html(t.dropTitle),e.siblings(".files").html("0 "+t.filesTitle)),e.val("")},disable:function(){this.element.data("disabled",!0),this.element.parent().addClass("disabled")},enable:function(){this.element.data("disabled",!1),this.element.parent().removeClass("disabled")},toggleState:function(){this.elem.disabled?this.disable():this.enable()},toggleDir:function(){"rtl"===this.element.attr("dir")?this.element.parent().addClass("rtl"):this.element.parent().removeClass("rtl")},changeAttribute:function(e){switch(e){case"disabled":this.toggleState();break;case"dir":this.toggleDir()}},destroy:function(){var e=this.element,t=e.parent();return e.off(M.events.change),t.off(M.events.click,"button"),e}};M.plugin("file",Re);var Fe={gravatarDeferred:0,email:"",size:80,default:"mp",onGravatarCreate:M.noop};M.gravatarSetup=function(e){Fe=D.extend({},Fe,e)},window.metroGravatarSetup,M.gravatarSetup(window.metroGravatarSetup);var Le={name:"Gravatar",init:function(e,t){return this.options=D.extend({},Fe,e),this.elem=t,this.element=D(t),this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){M.checkRuntime(this.element,"gravatar"),this.get()},getImage:function(e,t,n,i){var s=D("<img>");return s.attr("src",this.getImageSrc(e,t)),!0===i?s:s[0]},getImageSrc:function(e,t,n){return void 0===e||""===e.trim()?"":(t=t||80,n=H.encodeURI(n)||"404","//www.gravatar.com/avatar/"+H.md5(e.toLowerCase().trim())+"?size="+t+"&d="+n)},get:function(){var e=this.element,t=this.options,n="IMG"===e[0].tagName?e:e.find("img");if(0!==n.length)return n.attr("src",this.getImageSrc(t.email,t.size,t.default)),H.exec(t.onGravatarCreate,null,e[0]),e.fire("gravatarcreate"),this},resize:function(e){this.options.size=void 0!==e?e:this.element.attr("data-size"),this.get()},email:function(e){this.options.email=void 0!==e?e:this.element.attr("data-email"),this.get()},changeAttribute:function(e){switch(e){case"data-size":this.resize();break;case"data-email":this.email()}},destroy:function(){return this.element}};M.plugin("gravatar",Le);var Ve={hintDeferred:0,hintHide:5e3,clsHint:"",hintText:"",hintPosition:M.position.TOP,hintOffset:4,onHintShow:M.noop,onHintHide:M.noop,onHintCreate:M.noop};M.hintSetup=function(e){Ve=D.extend({},Ve,e)},window.metroHintSetup,M.hintSetup(window.metroHintSetup);var Be={name:"Hint",init:function(e,t){return this.options=D.extend({},Ve,e),this.elem=t,this.element=D(t),this.hint=null,this.hint_size={width:0,height:0},this.id=H.elementId("hint"),this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this,t=this.element,n=this.options;M.checkRuntime(t,"hint"),t.on(M.events.enter,function(){e.createHint(),0<+n.hintHide&&setTimeout(function(){e.removeHint()},n.hintHide)}),t.on(M.events.leave,function(){e.removeHint()}),D(window).on(M.events.scroll+" "+M.events.resize,function(){null!==e.hint&&e.setPosition()},{ns:this.id}),H.exec(n.onHintCreate,null,t[0]),t.fire("hintcreate")},createHint:function(){var e=this.elem,t=this.element,n=this.options,i=D("<div>").addClass("hint").addClass(n.clsHint).html(n.hintText);if(this.hint=i,this.hint_size=H.hiddenElementSize(i),D(".hint:not(.permanent-hint)").remove(),"TD"===e.tagName||"TH"===e.tagName){var s=D("<div/>").css("display","inline-block").html(t.html());t.html(s),t=s}this.setPosition(),i.appendTo(D("body")),H.exec(n.onHintShow,[i[0]],t[0]),t.fire("hintshow",{hint:i[0]})},setPosition:function(){var e=this.hint,t=this.hint_size,n=this.options,i=this.element;n.hintPosition===M.position.BOTTOM?(e.addClass("bottom"),e.css({top:i.offset().top-D(window).scrollTop()+i.outerHeight()+n.hintOffset,left:i.offset().left+i.outerWidth()/2-t.width/2-D(window).scrollLeft()})):n.hintPosition===M.position.RIGHT?(e.addClass("right"),e.css({top:i.offset().top+i.outerHeight()/2-t.height/2-D(window).scrollTop(),left:i.offset().left+i.outerWidth()-D(window).scrollLeft()+n.hintOffset})):n.hintPosition===M.position.LEFT?(e.addClass("left"),e.css({top:i.offset().top+i.outerHeight()/2-t.height/2-D(window).scrollTop(),left:i.offset().left-t.width-D(window).scrollLeft()-n.hintOffset})):(e.addClass("top"),e.css({top:i.offset().top-D(window).scrollTop()-t.height-n.hintOffset,left:i.offset().left-D(window).scrollLeft()+i.outerWidth()/2-t.width/2}))},removeHint:function(){var e=this,t=this.hint,n=this.element,i=this.options,s=i.onHintHide===M.noop?0:300;null!==t&&(H.exec(i.onHintHide,[t[0]],n[0]),n.fire("hinthide",{hint:t[0]}),setTimeout(function(){t.hide(0,function(){t.remove(),e.hint=null})},s))},changeText:function(){this.options.hintText=this.element.attr("data-hint-text")},changeAttribute:function(e){"data-hint-text"===e&&this.changeText()},destroy:function(){var e=this.element;this.removeHint(),e.off(M.events.enter+"-hint"),e.off(M.events.leave+"-hint"),D(window).off(M.events.scroll+"-hint")}};M.plugin("hint",Be);var He={specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",188:",",190:".",191:"/",224:"meta"},shiftNums:{"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},shiftNumsInverse:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"},textAcceptingInputTypes:["text","password","number","email","url","range","date","month","week","time","datetime","datetime-local","search","color","tel"],getKey:function(e){var t,n=e.keyCode,i=String.fromCharCode(n).toLowerCase();return t=e.shiftKey?He.shiftNums[i]?He.shiftNums[i]:i:void 0===He.specialKeys[n]?i:He.specialKeys[n],He.getModifier(e).length?He.getModifier(e).join("+")+"+"+t:t},getModifier:function(e){var t=[];return e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.shiftKey&&t.push("shift"),t}};function ze(s,a){return this.each(function(){D(this).on(M.events.keyup+".hotkey-method-"+s,function(e){var t=He.getKey(e),n=D(this),i=""+n.attr("href");s===t&&(n.is("a")&&i&&"#"!==i.trim()&&(window.location.href=i),H.exec(a,[e,t,s],this))})})}D.fn.hotkey=ze,METRO_JQUERY&&jquery_present&&(jQuery.fn.hotkey=ze),D(document).on(M.events.keyup+".hotkey-data",function(e){var t,n,i,s;METRO_HOTKEYS_FILTER_INPUT_ACCEPTING_ELEMENTS&&/textarea|input|select/i.test(e.target.nodeName)||METRO_HOTKEYS_FILTER_CONTENT_EDITABLE&&D(e.target).attr("contenteditable")||METRO_HOTKEYS_FILTER_TEXT_INPUTS&&-1<He.textAcceptingInputTypes.indexOf(e.target.type)||(i=He.getKey(e),H.keyInObject(M.hotkeys,i)&&(t=D(M.hotkeys[i][0]),n=M.hotkeys[i][1],s=(""+t.attr("href")).trim(),n?H.exec(n):t.is("a")&&s&&0<s.length&&"#"!==s.trim()?window.location.href=s:t.click()))});var je={htmlcontainerDeferred:0,method:"get",htmlSource:null,requestData:null,requestOptions:null,insertMode:"replace",onHtmlLoad:M.noop,onHtmlLoadFail:M.noop,onHtmlLoadDone:M.noop,onHtmlContainerCreate:M.noop};M.htmlContainerSetup=function(e){je=D.extend({},je,e)},window.metroHtmlContainerSetup,M.htmlContainerSetup(window.metroHtmlContainerSetup);var Ue={name:"HtmlContainer",init:function(e,t){return this.options=D.extend({},je,e),this.elem=t,this.element=D(t),this.data={},this.opt={},this.htmlSource="",this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"htmlcontainer"),"string"==typeof t.requestData&&(t.requestData=JSON.parse(t.requestData)),H.isObject(t.requestData)&&(this.data=H.isObject(t.requestData)),"string"==typeof t.requestOptions&&(t.requestOptions=JSON.parse(t.requestOptions)),H.isObject(t.requestOptions)&&(this.opt=H.isObject(t.requestOptions)),t.method=t.method.toLowerCase(),H.isValue(t.htmlSource)&&(this.htmlSource=t.htmlSource,this._load()),H.exec(t.onHtmlContainerCreate,null,e[0]),e.fire("htmlcontainercreate")},_load:function(){var n=this,i=this.element,s=this.options;D[s.method](this.htmlSource,this.data,this.opt).then(function(e){var t=D(e);switch(s.insertMode.toLowerCase()){case"prepend":i.prepend(t);break;case"append":i.append(t);break;case"replace":t.insertBefore(i).script(),i.remove();break;default:i.html(t)}H.exec(s.onHtmlLoad,[e,s.htmlSource,n.data,n.opt],i[0]),i.fire("htmlload",{data:e,source:s.htmlSource,requestData:n.data,requestOptions:n.opt})},function(e){H.exec(s.onHtmlLoadFail,[e],i[0]),i.fire("htmlloadfail",{xhr:e})})},load:function(e,t,n){this.options;e&&(this.htmlSource=e),t&&(this.data=H.isObject(t)),n&&(this.opt=H.isObject(n)),this._load()},changeAttribute:function(e){var t,n,i,s=this,a=this.element,o=this.options;switch(e){case"data-html-source":i=a.attr("data-html-source"),H.isNull(i)||(""===i.trim()&&a.html(""),o.htmlSource=i,s._load());break;case"data-insert-mode":n=a.attr("data-insert-mode"),H.isValue(n)&&(o.insertMode=n);break;case"data-request-data":t=a.attr("data-request-data"),s.load(o.htmlSource,t)}},destroy:function(){}};M.plugin("htmlcontainer",Ue);var We={imagecompareDeferred:0,width:"100%",height:"auto",onResize:M.noop,onSliderMove:M.noop,onImageCompareCreate:M.noop};M.imageCompareSetup=function(e){We=D.extend({},We,e)},window.metroImageCompareSetup,M.imageCompareSetup(window.metroImageCompareSetup);var Ye={name:"ImageCompare",init:function(e,t){return this.options=D.extend({},We,e),this.elem=t,this.element=D(t),this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"imagecompare"),this._createStructure(),this._createEvents(),H.exec(t.onImageCompareCreate,null,e[0]),e.fire("imagecomparecreate")},_createStructure:function(){var i,s,e,t,a,o,n=this.element,r=this.options;switch(H.isValue(n.attr("id"))||n.attr("id",H.elementId("image-compare")),n.addClass("image-compare").css({width:r.width}),a=n.width(),r.height){case"16/9":case"21/9":case"4/3":o=H.aspectRatioH(a,r.height);break;case"auto":o=H.aspectRatioH(a,"16/9");break;default:o=r.height}n.css({height:o}),i=D("<div>").addClass("image-container").appendTo(n),s=D("<div>").addClass("image-container-overlay").appendTo(n).css({width:a/2}),(e=D("<div>").addClass("image-slider").appendTo(n)).css({top:o/2-e.height()/2,left:a/2-e.width()/2}),t=n.find("img"),D.each(t,function(e,t){var n=D("<div>").addClass("image-wrapper");n.css({width:a,height:o,backgroundImage:"url("+this.src+")"}),n.appendTo(0===e?i:s)})},_createEvents:function(){var s=this.element,a=this.options,o=s.find(".image-container-overlay"),r=s.find(".image-slider");r.on(M.events.startAll,function(e){var i=s.width();D(document).on(M.events.moveAll,function(e){var t,n=H.getCursorPositionX(s[0],e);n<0&&(n=0),i<n&&(n=i),o.css({width:n}),t=n-r.width()/2,r.css({left:t}),H.exec(a.onSliderMove,[n,t],r[0]),s.fire("slidermove",{x:n,l:t})}),D(document).on(M.events.stopAll,function(){D(document).off(M.events.moveAll),D(document).off(M.events.stopAll)})}),D(window).on(M.events.resize,function(){var e,t=s.width();if("100%"===a.width){switch(a.height){case"16/9":case"21/9":case"4/3":e=H.aspectRatioH(t,a.height);break;case"auto":e=H.aspectRatioH(t,"16/9");break;default:e=a.height}s.css({height:e}),D.each(s.find(".image-wrapper"),function(){D(this).css({width:t,height:e})}),s.find(".image-container-overlay").css({width:t/2}),r.css({top:e/2-r.height()/2,left:t/2-r.width()/2}),H.exec(a.onResize,[t,e],s[0]),s.fire("comparerresize",{width:t,height:e})}},{ns:s.attr("id")})},changeAttribute:function(e){},destroy:function(){var e=this.element;return e.off(M.events.start),D(window).off(M.events.resize,{ns:e.attr("id")}),e}};M.plugin("imagecompare",Ye);var Je={imagemagnifierDeferred:0,width:"100%",height:"auto",lensSize:100,lensType:"square",magnifierZoom:2,magnifierMode:"glass",magnifierZoomElement:null,clsMagnifier:"",clsLens:"",clsZoom:"",onMagnifierMove:M.noop,onImageMagnifierCreate:M.noop};M.imageMagnifierSetup=function(e){Je=D.extend({},Je,e)},window.metroImageMagnifierSetup,M.imageMagnifierSetup(window.metroImageMagnifierSetup);var Ge={name:"ImageMagnifier",init:function(e,t){return this.options=D.extend({},Je,e),this.elem=t,this.element=D(t),this.zoomElement=null,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"imagemagnifier"),this._createStructure(),this._createEvents(),H.exec(t.onImageMagnifierCreate,null,e[0]),e.fire("imagemagnifiercreate")},_createStructure:function(){var e,t,n,i=this.element,s=this.options,a=i.find("img");if(0===a.length)throw new Error("Image not defined");switch(H.isValue(i.attr("id"))||i.attr("id",H.elementId("image-magnifier")),i.addClass("image-magnifier").css({width:s.width}).addClass(s.clsMagnifier),t=i.width(),s.height){case"16/9":case"21/9":case"4/3":n=H.aspectRatioH(t,s.height);break;case"auto":n=H.aspectRatioH(t,"16/9");break;default:n=s.height}i.css({height:n});var o=t/2-s.lensSize/2,r=n/2-s.lensSize/2;if("glass"===s.magnifierMode)(e=D("<div>").addClass("image-magnifier-glass").appendTo(i)).css({width:s.lensSize,height:s.lensSize,borderRadius:"circle"!==s.lensType?0:"50%",top:r,left:o,backgroundImage:"url("+a[0].src+")",backgroundRepeat:"no-repeat",backgroundPosition:"-"+(o*s.magnifierZoom-s.lensSize/4+4)+"px -"+(r*s.magnifierZoom-s.lensSize/4+4)+"px",backgroundSize:a[0].width*s.magnifierZoom+"px "+a[0].height*s.magnifierZoom+"px"}).addClass(s.clsLens);else{(e=D("<div>").addClass("image-magnifier-glass").appendTo(i)).css({width:s.lensSize,height:s.lensSize,borderRadius:0,borderWidth:1,top:r,left:o}).addClass(s.clsLens),H.isValue(s.magnifierZoomElement)&&0!==D(s.magnifierZoomElement).length?this.zoomElement=D(s.magnifierZoomElement):this.zoomElement=D("<div>").insertAfter(i);var l=e[0].offsetWidth*s.magnifierZoom,c=e[0].offsetHeight*s.magnifierZoom,d=l/s.lensSize,h=c/s.lensSize;this.zoomElement.css({width:l,height:c,backgroundImage:"url("+a[0].src+")",backgroundRepeat:"no-repeat",backgroundPosition:"-"+o*d+"px -"+r*h+"px",backgroundSize:a[0].width*d+"px "+a[0].height*h+"px"}).addClass(s.clsZoom)}},_createEvents:function(){var s,a,n=this.element,o=this.options,r=n.find(".image-magnifier-glass"),l=r[0].offsetWidth/2,c=n.find("img")[0],d=this.zoomElement;"glass"!==o.magnifierMode&&(s=d[0].offsetWidth/l/2,a=d[0].offsetHeight/l/2,d.css({backgroundSize:c.width*s+"px "+c.height*a+"px"}));function i(e){var t,n,i=parseInt(o.magnifierZoom);"glass"===o.magnifierMode?(t=e.x,n=e.y,t>c.width-l/i&&(t=c.width-l/i),t<l/i&&(t=l/i),n>c.height-l/i&&(n=c.height-l/i),n<l/i&&(n=l/i),r.css({top:n-l,left:t-l,backgroundPosition:"-"+(t*i-l+4)+"px -"+(n*i-l+4)+"px"})):(t=e.x-l,n=e.y-l,t>c.width-2*l&&(t=c.width-2*l),t<0&&(t=0),n>c.height-2*l&&(n=c.height-2*l),n<0&&(n=0),r.css({top:n,left:t}),d.css({backgroundPosition:"-"+t*s+"px -"+n*a+"px"}))}n.on(M.events.move,function(e){var t=H.getCursorPosition(c,e);i(t),H.exec(o.onMagnifierMove,[t,r[0],d?d[0]:void 0],n[0]),n.fire("magnifiermove",{pos:t,glass:r[0],zoomElement:d?d[0]:void 0}),e.preventDefault()}),n.on(M.events.leave,function(){var e=n.width()/2-o.lensSize/2,t=n.height()/2-o.lensSize/2;r.animate({top:t,left:e}),i({x:e+o.lensSize/2,y:t+o.lensSize/2})})},changeAttribute:function(e){},destroy:function(){var e=this.element;return e.off(M.events.move),e.off(M.events.leave),e}};M.plugin("imagemagnifier",Ge);var Ke={infoboxDeferred:0,type:"",width:480,height:"auto",overlay:!0,overlayColor:"#000000",overlayAlpha:.5,autoHide:0,removeOnClose:!1,closeButton:!0,clsBox:"",clsBoxContent:"",clsOverlay:"",onOpen:M.noop,onClose:M.noop,onInfoBoxCreate:M.noop};M.infoBoxSetup=function(e){Ke=D.extend({},Ke,e)},window.metroInfoBoxSetup,M.infoBoxSetup(window.metroInfoBoxSetup);var qe={name:"InfoBox",init:function(e,t){return this.options=D.extend({},Ke,e),this.elem=t,this.element=D(t),this.overlay=null,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"infobox"),this._createStructure(),this._createEvents(),H.exec(t.onInfoBoxCreate,null,e[0]),e.fire("infoboxcreate")},_overlay:function(){this.element;var e=this.options,t=D("<div>");return t.addClass("overlay").addClass(e.clsOverlay),"transparent"===e.overlayColor?t.addClass("transparent"):t.css({background:H.hex2rgba(e.overlayColor,e.overlayAlpha)}),t},_createStructure:function(){var e,t,n=this.element,i=this.options;!0===i.overlay&&(this.overlay=this._overlay()),void 0===n.attr("id")&&n.attr("id",H.elementId("infobox")),n.addClass("info-box").addClass(i.type).addClass(i.clsBox),0===(e=n.find("closer")).length&&(e=D("<span>").addClass("button square closer")).appendTo(n),!0!==i.closeButton&&e.hide(),0<(t=n.find(".info-box-content")).length&&t.addClass(i.clsBoxContent),n.css({width:i.width,height:i.height,visibility:"hidden",top:"100%",left:(D(window).width()-n.outerWidth())/2}),n.appendTo(D("body"))},_createEvents:function(){var e=this,t=this.element;this.options;t.on(M.events.click,".closer",function(){e.close()}),t.on(M.events.click,".js-dialog-close",function(){e.close()}),D(window).on(M.events.resize,function(){e.reposition()},{ns:t.attr("id")})},_setPosition:function(){var e=this.element;e.css({top:(D(window).height()-e.outerHeight())/2,left:(D(window).width()-e.outerWidth())/2})},reposition:function(){this._setPosition()},setContent:function(e){var t=this.element.find(".info-box-content");0!==t.length&&(t.html(e),this.reposition())},setType:function(e){this.element.removeClass("success info alert warning").addClass(e)},open:function(){var e=this,t=this.element,n=this.options;!0===n.overlay&&this.overlay.appendTo(D("body")),this._setPosition(),t.css({visibility:"visible"}),H.exec(n.onOpen,null,t[0]),t.fire("open"),t.data("open",!0),0<parseInt(n.autoHide)&&setTimeout(function(){e.close()},parseInt(n.autoHide))},close:function(){var e=this.element,t=this.options;!0===t.overlay&&D("body").find(".overlay").remove(),e.css({visibility:"hidden",top:"100%"}),H.exec(t.onClose,null,e[0]),e.fire("close"),e.data("open",!1),!0===t.removeOnClose&&(this.destroy(),e.remove())},isOpen:function(){return!0===this.element.data("open")},changeAttribute:function(e){},destroy:function(){var e=this.element;return e.off("all"),D(window).off(M.events.resize,{ns:e.attr("id")}),e}};M.plugin("infobox",qe);var Qe={materialinputDeferred:0,label:"",informer:"",icon:"",permanentLabel:!(M.infobox={isInfoBox:function(e){return H.isMetroObject(e,"infobox")},open:function(e,t,n){var i=H.$();if(!this.isInfoBox(e))return!1;var s=i(e).data("infobox");void 0!==t&&s.setContent(t),void 0!==n&&s.setType(n),s.open()},close:function(e){var t=H.$();if(!this.isInfoBox(e))return!1;t(e).data("infobox").close()},setContent:function(e,t){var n=H.$();if(!this.isInfoBox(e))return!1;void 0===t&&(t="");var i=n(e).data("infobox");i.setContent(t),i.reposition()},setType:function(e,t){var n=H.$();if(!this.isInfoBox(e))return!1;var i=n(e).data("infobox");i.setType(t),i.reposition()},isOpen:function(e){var t=H.$();return!!this.isInfoBox(e)&&t(e).data("infobox").isOpen()},create:function(e,t,n,i){var s,a,o,r=H.$();o=void 0!==t?t:"",s=r("<div>").appendTo(r("body")),r("<div>").addClass("info-box-content").appendTo(s);var l=r.extend({},{removeOnClose:!0,type:o},void 0!==n?n:{});return l._runtime=!0,s.infobox(l),(a=M.getPlugin(s,"infobox")).setContent(e),!1!==i&&a.open(),s}}),clsComponent:"",clsInput:"",clsLabel:"",clsInformer:"",clsIcon:"",clsLine:"",onInputCreate:M.noop};M.materialInputSetup=function(e){Qe=D.extend({},Qe,e)},window.metroMaterialInputSetup,M.materialInputSetup(window.metroMaterialInputSetup);var Xe={name:"MaterialInput",init:function(e,t){return this.options=D.extend({},Qe,e),this.elem=t,this.element=D(t),this.history=[],this.historyIndex=-1,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"materialinput"),this._createStructure(),this._createEvents(),H.exec(t.onInputCreate,null,e[0]),e.fire("inputcreate")},_createStructure:function(){var e=this.element,t=this.options,n=D("<div>").addClass("input-material "+e[0].className);e[0].className="",e.attr("autocomplete","nope"),void 0===e.attr("type")&&e.attr("type","text"),n.insertBefore(e),e.appendTo(n),H.isValue(t.label)&&D("<span>").html(t.label).addClass("label").addClass(t.clsLabel).insertAfter(e),H.isValue(t.informer)&&D("<span>").html(t.informer).addClass("informer").addClass(t.clsInformer).insertAfter(e),H.isValue(t.icon)&&(n.addClass("with-icon"),D("<span>").html(t.icon).addClass("icon").addClass(t.clsIcon).insertAfter(e)),n.append(D("<hr>").addClass(t.clsLine)),!0===t.permanentLabel&&n.addClass("permanent-label"),n.addClass(t.clsComponent),e.addClass(t.clsInput),e.is(":disabled")?this.disable():this.enable()},_createEvents:function(){},clear:function(){this.element.val("")},disable:function(){this.element.data("disabled",!0),this.element.parent().addClass("disabled")},enable:function(){this.element.data("disabled",!1),this.element.parent().removeClass("disabled")},toggleState:function(){this.elem.disabled?this.disable():this.enable()},changeAttribute:function(e){"disabled"===e&&this.toggleState()},destroy:function(){return this.element}};M.plugin("materialinput",Xe);var $e={inputDeferred:0,autocomplete:null,autocompleteDivider:",",autocompleteListHeight:200,history:!1,historyPreset:"",historyDivider:"|",preventSubmit:!1,defaultValue:"",size:"default",prepend:"",append:"",copyInlineStyles:!1,searchButton:!1,clearButton:!0,revealButton:!0,clearButtonIcon:"<span class='default-icon-cross'></span>",revealButtonIcon:"<span class='default-icon-eye'></span>",searchButtonIcon:"<span class='default-icon-search'></span>",customButtons:[],searchButtonClick:"submit",clsComponent:"",clsInput:"",clsPrepend:"",clsAppend:"",clsClearButton:"",clsRevealButton:"",clsCustomButton:"",clsSearchButton:"",onHistoryChange:M.noop,onHistoryUp:M.noop,onHistoryDown:M.noop,onClearClick:M.noop,onRevealClick:M.noop,onSearchButtonClick:M.noop,onEnterClick:M.noop,onInputCreate:M.noop};M.inputSetup=function(e){$e=D.extend({},$e,e)},window.metroInputSetup,M.inputSetup(window.metroInputSetup);var Ze={name:"Input",init:function(e,t){return this.options=D.extend({},$e,e),this.elem=t,this.element=D(t),this.history=[],this.historyIndex=-1,this.autocomplete=[],this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"input"),this._createStructure(),this._createEvents(),H.exec(t.onInputCreate,null,e[0]),e.fire("inputcreate")},_createStructure:function(){var e=this,t=this.element,n=this.options,i=D("<div>").addClass("input "+t[0].className),s=D("<div>").addClass("button-group");H.isValue(n.historyPreset)&&(D.each(H.strToArray(n.historyPreset,n.historyDivider),function(){e.history.push(this)}),e.historyIndex=e.history.length-1),void 0===t.attr("type")&&t.attr("type","text"),i.insertBefore(t),t.appendTo(i),s.appendTo(i),H.isValue(t.val().trim())||t.val(n.defaultValue),!0!==n.clearButton||t[0].readOnly||D("<button>").addClass("button input-clear-button").addClass(n.clsClearButton).attr("tabindex",-1).attr("type","button").html(n.clearButtonIcon).appendTo(s),"password"===t.attr("type")&&!0===n.revealButton&&D("<button>").addClass("button input-reveal-button").addClass(n.clsRevealButton).attr("tabindex",-1).attr("type","button").html(n.revealButtonIcon).appendTo(s),!0===n.searchButton&&D("<button>").addClass("button input-search-button").addClass(n.clsSearchButton).attr("tabindex",-1).attr("type","submit"===n.searchButtonClick?"submit":"button").html(n.searchButtonIcon).appendTo(s),H.isValue(n.prepend)&&D("<div>").html(n.prepend).addClass("prepend").addClass(n.clsPrepend).appendTo(i);H.isValue(n.append)&&D("<div>").html(n.append).addClass("append").addClass(n.clsAppend).appendTo(i);if("string"==typeof n.customButtons&&(n.customButtons=H.isObject(n.customButtons)),"object"==typeof n.customButtons&&0<H.objectLength(n.customButtons)&&D.each(n.customButtons,function(){var e=D("<button>");e.addClass("button input-custom-button").addClass(n.clsCustomButton).addClass(this.cls).attr("tabindex",-1).attr("type","button").html(this.html),e.data("action",this.onclick),e.appendTo(s)}),H.isValue(t.attr("data-exclaim"))&&i.attr("data-exclaim",t.attr("data-exclaim")),"rtl"===t.attr("dir")&&i.addClass("rtl").attr("dir","rtl"),!(t[0].className="")===n.copyInlineStyles)for(var a=0,o=t[0].style.length;a<o;a++)i.css(t[0].style[a],t.css(t[0].style[a]));if(i.addClass(n.clsComponent),t.addClass(n.clsInput),"default"!==n.size&&i.css({width:n.size}),!H.isNull(n.autocomplete)){var r=H.isObject(n.autocomplete);!1!==r?e.autocomplete=r:this.autocomplete=H.strToArray(n.autocomplete,n.autocompleteDivider),D("<div>").addClass("autocomplete-list").css({maxHeight:n.autocompleteListHeight,display:"none"}).appendTo(i)}t.is(":disabled")?this.disable():this.enable()},_createEvents:function(){var n=this,i=this.element,s=this.options,e=i.closest(".input"),o=e.find(".autocomplete-list");e.on(M.events.click,".input-clear-button",function(){var e=i.val();i.val(H.isValue(s.defaultValue)?s.defaultValue:"").fire("clear").fire("change").fire("keyup").focus(),0<o.length&&o.css({display:"none"}),H.exec(s.onClearClick,[e,i.val()],i[0]),i.fire("clearclick",{prev:e,val:i.val()})}),e.on(M.events.click,".input-reveal-button",function(){"password"===i.attr("type")?i.attr("type","text"):i.attr("type","password"),H.exec(s.onRevealClick,[i.val()],i[0]),i.fire("revealclick",{val:i.val()})}),e.on(M.events.click,".input-search-button",function(){"submit"!==s.searchButtonClick?(H.exec(s.onSearchButtonClick,[i.val()],this),i.fire("searchbuttonclick",{val:i.val(),button:this})):this.form.submit()}),e.on(M.events.click,".input-custom-button",function(){var e=D(this),t=e.data("action");H.exec(t,[i.val(),e],this)}),i.on(M.events.keyup,function(e){var t=i.val().trim();s.history&&e.keyCode===M.keyCode.ENTER&&""!==t&&(i.val(""),n.history.push(t),n.historyIndex=n.history.length-1,H.exec(s.onHistoryChange,[t,n.history,n.historyIndex],i[0]),i.fire("historychange",{val:t,history:n.history,historyIndex:n.historyIndex}),!0===s.preventSubmit&&e.preventDefault()),s.history&&e.keyCode===M.keyCode.UP_ARROW&&(n.historyIndex--,0<=n.historyIndex?(i.val(""),i.val(n.history[n.historyIndex]),H.exec(s.onHistoryDown,[i.val(),n.history,n.historyIndex],i[0]),i.fire("historydown",{val:i.val(),history:n.history,historyIndex:n.historyIndex})):n.historyIndex=0,e.preventDefault()),s.history&&e.keyCode===M.keyCode.DOWN_ARROW&&(n.historyIndex++,n.historyIndex<n.history.length?(i.val(""),i.val(n.history[n.historyIndex]),H.exec(s.onHistoryUp,[i.val(),n.history,n.historyIndex],i[0]),i.fire("historyup",{val:i.val(),history:n.history,historyIndex:n.historyIndex})):n.historyIndex=n.history.length-1,e.preventDefault())}),i.on(M.events.keydown,function(e){e.keyCode===M.keyCode.ENTER&&(H.exec(s.onEnterClick,[i.val()],i[0]),i.fire("enterclick",{val:i.val()}))}),i.on(M.events.blur,function(){e.removeClass("focused")}),i.on(M.events.focus,function(){e.addClass("focused")}),i.on(M.events.input,function(){var e,a=this.value.toLowerCase();0!==o.length&&(o.html(""),e=n.autocomplete.filter(function(e){return-1<e.toLowerCase().indexOf(a)}),o.css({display:0<e.length?"block":"none"}),D.each(e,function(e,t){var n,i=t.toLowerCase().indexOf(a),s=D("<div>").addClass("item").attr("data-autocomplete-value",t);n=0===i?"<strong>"+t.substr(0,a.length)+"</strong>"+t.substr(a.length):t.substr(0,i)+"<strong>"+t.substr(i,a.length)+"</strong>"+t.substr(i+a.length),s.html(n).appendTo(o)}))}),e.on(M.events.click,".autocomplete-list .item",function(){i.val(D(this).attr("data-autocomplete-value")),o.css({display:"none"}),i.trigger("change")})},getHistory:function(){return this.history},getHistoryIndex:function(){return this.historyIndex},setHistoryIndex:function(e){this.historyIndex=e>=this.history.length?this.history.length-1:e},setHistory:function(e,t){var n=this,i=this.options;H.isNull(e)||(Array.isArray(e)||(e=H.strToArray(e,i.historyDivider)),!0===t?D.each(e,function(){n.history.push(this)}):this.history=e,this.historyIndex=this.history.length-1)},clear:function(){this.element.val("")},toDefault:function(){this.element.val(H.isValue(this.options.defaultValue)?this.options.defaultValue:"")},disable:function(){this.element.data("disabled",!0),this.element.parent().addClass("disabled")},enable:function(){this.element.data("disabled",!1),this.element.parent().removeClass("disabled")},toggleState:function(){this.elem.disabled?this.disable():this.enable()},changeAttribute:function(e){switch(e){case"disabled":this.toggleState()}},destroy:function(){var e=this.element,t=e.parent(),n=t.find(".input-clear-button"),i=t.find(".input-reveal-button"),s=t.find(".input-custom-button");return 0<n.length&&n.off(M.events.click),0<i.length&&(i.off(M.events.start),i.off(M.events.stop)),0<s.length&&n.off(M.events.click),e.off(M.events.blur),e.off(M.events.focus),e}};M.plugin("input",Ze),D(document).on(M.events.click,function(){D(".input .autocomplete-list").hide()});var et={keypadDeferred:0,keySize:48,keys:"1, 2, 3, 4, 5, 6, 7, 8, 9, 0",copyInlineStyles:!1,target:null,keyLength:0,shuffle:!1,shuffleCount:3,position:M.position.BOTTOM_LEFT,dynamicPosition:!1,serviceButtons:!0,showValue:!0,open:!1,sizeAsKeys:!1,clsKeypad:"",clsInput:"",clsKeys:"",clsKey:"",clsServiceKey:"",clsBackspace:"",clsClear:"",onChange:M.noop,onClear:M.noop,onBackspace:M.noop,onShuffle:M.noop,onKey:M.noop,onKeypadCreate:M.noop};M.keypadSetup=function(e){et=D.extend({},et,e)},window.metroKeypadSetup,M.keypadSetup(window.metroKeypadSetup);var tt={name:"Keypad",init:function(e,t){return this.options=D.extend({},et,e),this.elem=t,this.element=D(t),this.value="",this.positions=["top-left","top","top-right","right","bottom-right","bottom","bottom-left","left"],this.keypad=null,this._setOptionsFromDOM(),this.keys=H.strToArray(this.options.keys,","),this.keys_to_work=this.keys,M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"keypad"),this._createKeypad(),!0===t.shuffle&&this.shuffle(),this._createKeys(),this._createEvents(),H.exec(t.onKeypadCreate,null,e[0]),e.fire("keypadcreate")},_createKeypad:function(){var e,t,n=this.element,i=this.options,s=n.parent();if((e=s.hasClass("input")?s:D("<div>").addClass("input").addClass(n[0].className)).addClass("keypad"),"static"!==e.css("position")&&""!==e.css("position")||e.css({position:"relative"}),void 0===n.attr("type")&&n.attr("type","text"),e.insertBefore(n),n.attr("readonly",!0),n.appendTo(e),(t=D("<div>").addClass("keys").addClass(i.clsKeys)).appendTo(e),this._setKeysPosition(),!0===i.open&&t.addClass("open keep-open"),!(n[0].className="")===i.copyInlineStyles)for(var a=0,o=n[0].style.length;a<o;a++)e.css(n[0].style[a],n.css(n[0].style[a]));n.addClass(i.clsInput),e.addClass(i.clsKeypad),n.on(M.events.blur,function(){e.removeClass("focused")}),n.on(M.events.focus,function(){e.addClass("focused")}),!0===i.disabled||n.is(":disabled")?this.disable():this.enable(),this.keypad=e},_setKeysPosition:function(){var e=this.element,t=this.options;e.parent().find(".keys").removeClass(this.positions.join(" ")).addClass(t.position)},_createKeys:function(){var e,t,n=this.element,i=this.options,s=n.parent(),a=s.find(".keys"),o=Math.round(Math.sqrt(this.keys.length+2)),r=i.keySize;if(a.html(""),D.each(this.keys_to_work,function(){(e=D("<span>").addClass("key").addClass(i.clsKey).html(this)).data("key",this),e.css({width:i.keySize,height:i.keySize,lineHeight:i.keySize-4}).appendTo(a)}),!0===i.serviceButtons){D.each(["&larr;","&times;"],function(){e=D("<span>").addClass("key service-key").addClass(i.clsKey).addClass(i.clsServiceKey).html(this),"&larr;"===this&&e.addClass(i.clsBackspace),"&times;"===this&&e.addClass(i.clsClear),e.data("key",this),e.css({width:i.keySize,height:i.keySize,lineHeight:i.keySize-4}).appendTo(a)})}t=o*(r+2)-6,a.outerWidth(t),!0===i.sizeAsKeys&&-1!==["top-left","top","top-right","bottom-left","bottom","bottom-right"].indexOf(i.position)&&s.outerWidth(a.outerWidth())},_createEvents:function(){var n=this,i=this.element,s=this.options,e=i.parent(),t=e.find(".keys");t.on(M.events.click,".key",function(e){var t=D(this);if("&larr;"!==t.data("key")&&"&times;"!==t.data("key")){if(0<s.keyLength&&String(n.value).length===s.keyLength)return!1;n.value=n.value+""+t.data("key"),!0===s.shuffle&&(n.shuffle(),n._createKeys()),!0===s.dynamicPosition&&(s.position=n.positions[H.random(0,n.positions.length-1)],n._setKeysPosition()),H.exec(s.onKey,[t.data("key"),n.value],i[0]),i.fire("key",{key:t.data("key"),val:n.value})}else"&times;"===t.data("key")&&(n.value="",H.exec(s.onClear,null,i[0]),i.fire("clear")),"&larr;"===t.data("key")&&(n.value=n.value.substring(0,n.value.length-1),H.exec(s.onBackspace,[n.value],i[0]),i.fire("backspace"));!0===s.showValue&&("INPUT"===i[0].tagName?i.val(n.value):i.text(n.value)),i.trigger("change"),H.exec(s.onChange,[n.value],i[0]),e.preventDefault(),e.stopPropagation()}),e.on(M.events.click,function(e){!0!==s.open&&(!0===t.hasClass("open")?t.removeClass("open"):t.addClass("open"),e.preventDefault(),e.stopPropagation())}),null!==s.target&&i.on(M.events.change,function(){var e=D(s.target);0!==e.length&&("INPUT"===e[0].tagName?e.val(n.value):e.text(n.value))})},shuffle:function(){for(var e=this.element,t=this.options,n=0;n<t.shuffleCount;n++)this.keys_to_work=this.keys_to_work.shuffle();H.exec(t.onShuffle,[this.keys_to_work,this.keys],e[0]),e.fire("shuffle",{keys:this.keys,keysToWork:this.keys_to_work})},shuffleKeys:function(e){void 0===e&&(e=this.options.shuffleCount);for(var t=0;t<e;t++)this.keys_to_work=this.keys_to_work.shuffle();this._createKeys()},val:function(e){if(void 0===e)return this.value;this.value=e,"INPUT"===this.element[0].tagName?this.element.val(e):this.element.text(e)},open:function(){this.element.parent().find(".keys").addClass("open")},close:function(){this.element.parent().find(".keys").removeClass("open")},disable:function(){this.element.data("disabled",!0),this.element.parent().addClass("disabled")},enable:function(){this.element.data("disabled",!1),this.element.parent().removeClass("disabled")},toggleState:function(){this.elem.disabled?this.disable():this.enable()},setPosition:function(e){var t=void 0!==e?e:this.element.attr("data-position");-1!==this.positions.indexOf(t)&&(this.options.position=t,this._setKeysPosition())},changeAttribute:function(e){switch(e){case"disabled":this.toggleState();break;case"data-position":this.setPosition()}},destroy:function(){var e=this.element,t=this.keypad,n=t.find(".keys");return t.off(M.events.click),n.off(M.events.click,".key"),e.off(M.events.change),e}};M.plugin("keypad",tt),D(document).on(M.events.click,function(){var e=D(".keypad .keys");D.each(e,function(){D(this).hasClass("keep-open")||D(this).removeClass("open")})});var nt={listDeferred:0,templateBeginToken:"<%",templateEndToken:"%>",paginationDistance:5,paginationShortMode:!0,thousandSeparator:",",decimalSeparator:",",sortTarget:"li",sortClass:null,sortDir:"asc",sortInitial:!0,filterClass:null,filter:null,filterString:"",filters:null,source:null,showItemsSteps:!1,showSearch:!1,showListInfo:!1,showPagination:!1,showActivity:!0,muteList:!0,items:-1,itemsSteps:"all, 10,25,50,100",itemsAllTitle:"Show all",listItemsCountTitle:"Show entries:",listSearchTitle:"Search:",listInfoTitle:"Showing $1 to $2 of $3 entries",paginationPrevTitle:"Prev",paginationNextTitle:"Next",activityType:"cycle",activityStyle:"color",activityTimeout:100,searchWrapper:null,rowsWrapper:null,infoWrapper:null,paginationWrapper:null,clsComponent:"",clsList:"",clsListItem:"",clsListTop:"",clsItemsCount:"",clsSearch:"",clsListBottom:"",clsListInfo:"",clsListPagination:"",clsPagination:"",onDraw:M.noop,onDrawItem:M.noop,onSortStart:M.noop,onSortStop:M.noop,onSortItemSwitch:M.noop,onSearch:M.noop,onRowsCountChange:M.noop,onDataLoad:M.noop,onDataLoaded:M.noop,onDataLoadError:M.noop,onFilterItemAccepted:M.noop,onFilterItemDeclined:M.noop,onListCreate:M.noop};M.listSetup=function(e){nt=D.extend({},nt,e)},window.metroListSetup,M.listSetup(window.metroListSetup);var it={name:"List",init:function(e,t){return this.options=D.extend({},nt,e),this.elem=t,this.element=D(t),this.currentPage=1,this.pagesCount=1,this.filterString="",this.data=null,this.activity=null,this.busy=!1,this.filters=[],this.wrapperInfo=null,this.wrapperSearch=null,this.wrapperRows=null,this.wrapperPagination=null,this.filterIndex=null,this.filtersIndexes=[],this.itemTemplate=null,this.sort={dir:"asc",colIndex:0},this.header=null,this.items=[],this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var t=this,n=this.element,i=this.options;M.checkRuntime(n,"list"),null!==i.source?(H.exec(i.onDataLoad,[i.source],n[0]),n.fire("dataload",{source:i.source}),D.json(i.source).then(function(e){H.exec(i.onDataLoaded,[i.source,e],n[0]),n.fire("dataloaded",{source:i.source,data:e}),t._build(e)},function(e){H.exec(i.onDataLoadError,[i.source,e],n[0]),n.fire("dataloaderror",{source:i.source,xhr:e})})):t._build()},_build:function(e){var t=this.element,n=this.options;H.isValue(e)?this._createItemsFromJSON(e):this._createItemsFromHTML(),this._createStructure(),this._createEvents(),H.exec(n.onListCreate,null,t[0]),t.fire("listcreate")},_createItemsFromHTML:function(){var e=this,t=this.element,n=this.options;this.items=[],D.each(t.children(n.sortTarget),function(){e.items.push(this)})},_createItemsFromJSON:function(e){var n=this,i=this.options;this.items=[],H.isValue(e.template)&&(this.itemTemplate=e.template),H.isValue(e.header)&&(this.header=e.header),H.isValue(e.data)&&D.each(e.data,function(){var e,t=document.createElement("li");H.isValue(n.itemTemplate)&&(e=M.template(n.itemTemplate,this,{beginToken:i.templateBeginToken,endToken:i.templateEndToken}),t.innerHTML=e,n.items.push(t))})},_createTopBlock:function(){var e,t,n,i=this,s=this.element,a=this.options,o=D("<div>").addClass("list-top").addClass(a.clsListTop).insertBefore(s);return e=H.isValue(this.wrapperSearch)?this.wrapperSearch:D("<div>").addClass("list-search-block").addClass(a.clsSearch).appendTo(o),D("<input>").attr("type","text").appendTo(e).input({prepend:a.listSearchTitle}),!0!==a.showSearch&&e.hide(),t=H.isValue(this.wrapperRows)?this.wrapperRows:D("<div>").addClass("list-rows-block").addClass(a.clsItemsCount).appendTo(o),n=D("<select>").appendTo(t),D.each(H.strToArray(a.itemsSteps),function(){var e=D("<option>").attr("value","all"===this?-1:this).text("all"===this?a.itemsAllTitle:this).appendTo(n);parseInt(this)===parseInt(a.items)&&e.attr("selected","selected")}),n.select({filter:!1,prepend:a.listItemsCountTitle,onChange:function(e){parseInt(e)!==parseInt(a.items)&&(a.items=parseInt(e),i.currentPage=1,i._draw(),H.exec(a.onRowsCountChange,[e],s[0]),s.fire("rowscountchange",{val:e}))}}),!0!==a.showItemsSteps&&t.hide(),o},_createBottomBlock:function(){var e,t,n=this.element,i=this.options,s=D("<div>").addClass("list-bottom").addClass(i.clsListBottom).insertAfter(n);return e=D("<div>").addClass("list-info").addClass(i.clsListInfo).appendTo(s),!0!==i.showListInfo&&e.hide(),t=D("<div>").addClass("list-pagination").addClass(i.clsListPagination).appendTo(s),!0!==i.showPagination&&t.hide(),s},_createStructure:function(){var e,t,n=this,i=this.element,s=this.options,a=D(s.searchWrapper),o=D(s.infoWrapper),r=D(s.rowsWrapper),l=D(s.paginationWrapper);0<a.length&&(this.wrapperSearch=a),0<o.length&&(this.wrapperInfo=o),0<r.length&&(this.wrapperRows=r),0<l.length&&(this.wrapperPagination=l),i.parent().hasClass("list-component")?e=i.parent():(e=D("<div>").addClass("list-component").insertBefore(i),i.appendTo(e)),e.addClass(s.clsComponent),this.activity=D("<div>").addClass("list-progress").appendTo(e),D("<div>").activity({type:s.activityType,style:s.activityStyle}).appendTo(this.activity),!0!==s.showActivity&&this.activity.css({visibility:"hidden"}),i.addClass(s.clsList),this._createTopBlock(),this._createBottomBlock(),H.isValue(s.filterString)&&(this.filterString=s.filterString),H.isValue(s.filter)&&(!1===(t=H.isFunc(s.filter))&&(t=H.func(s.filter)),n.filterIndex=n.addFilter(t)),H.isValue(s.filters)&&D.each(H.strToArray(s.filters),function(){!1!==(t=H.isFunc(this))&&n.filtersIndexes.push(n.addFilter(t))}),!(this.currentPage=1)!==s.sortInitial?this.sorting(s.sortClass,s.sortDir,!0):this.draw()},_createEvents:function(){var e,i=this,t=this.element.parent();function n(e){var t=D(e),n=t.parent();n.hasClass("active")||(n.hasClass("service")?"prev"===t.data("page")?(i.currentPage--,0===i.currentPage&&(i.currentPage=1)):(i.currentPage++,i.currentPage>i.pagesCount&&(i.currentPage=i.pagesCount)):i.currentPage=t.data("page"),i._draw())}t.find(".list-search-block input").on(M.events.inputchange,function(){i.filterString=this.value.trim().toLowerCase(),":"!==i.filterString[i.filterString.length-1]&&(i.currentPage=1,i._draw())}),H.isValue(this.wrapperSearch)&&0<(e=this.wrapperSearch.find("input")).length&&e.on(M.events.inputchange,function(){i.filterString=this.value.trim().toLowerCase(),":"!==i.filterString[i.filterString.length-1]&&(i.currentPage=1,i._draw())}),t.on(M.events.click,".pagination .page-link",function(){n(this)}),H.isValue(this.wrapperPagination)&&this.wrapperPagination.on(M.events.click,".pagination .page-link",function(){n(this)})},_info:function(e,t,n){var i,s=this.element,a=this.options,o=s.parent(),r=H.isValue(this.wrapperInfo)?this.wrapperInfo:o.find(".list-info");0!==r.length&&(n<t&&(t=n),0===this.items.length&&(e=t=n=0),i=(i=(i=(i=a.listInfoTitle).replace("$1",e)).replace("$2",t)).replace("$3",n),r.html(i))},_paging:function(e){var t=this.element,n=this.options,i=t.parent();this.pagesCount=Math.ceil(e/n.items),ut({length:e,rows:n.items,current:this.currentPage,target:H.isValue(this.wrapperPagination)?this.wrapperPagination:i.find(".list-pagination"),claPagination:n.clsPagination,prevTitle:n.paginationPrevTitle,nextTitle:n.paginationNextTitle,distance:!0===n.paginationShortMode?n.paginationDistance:0})},_filter:function(){var e,t,n,i,s,a,o=this,r=this.element,l=this.options;return H.isValue(this.filterString)||0<this.filters.length?(e=this.items.filter(function(e){if(n="",H.isValue(l.filterClass)){if(0<(i=e.getElementsByClassName(l.filterClass)).length)for(t=0;t<i.length;t++)n+=i[t].textContent}else n=e.textContent;if(s=n.replace(/[\n\r]+|[\s]{2,}/g," ").trim().toLowerCase(),!0===(a=!H.isValue(o.filterString)||-1<s.indexOf(o.filterString))&&0<o.filters.length)for(t=0;t<o.filters.length;t++)if(!0!==H.exec(o.filters[t],[e])){a=!1;break}return a?(H.exec(l.onFilterItemAccepted,[e],r[0]),r.fire("filteritemaccepted",{item:e})):(H.exec(l.onFilterItemDeclined,[e],r[0]),r.fire("filteritemdeclined",{item:e})),a}),H.exec(l.onSearch,[o.filterString,e],r[0]),r.fire("search",{search:o.filterString,items:e})):e=this.items,e},_draw:function(e){var t,n,i=this.element,s=this.options,a=-1===s.items?0:s.items*(this.currentPage-1),o=-1===s.items?this.items.length-1:a+s.items-1;for(n=this._filter(),i.children(s.sortTarget).remove(),t=a;t<=o;t++)H.isValue(n[t])&&D(n[t]).addClass(s.clsListItem).appendTo(i),H.exec(s.onDrawItem,[n[t]],i[0]),i.fire("drawitem",{item:n[t]});this._info(1+a,1+o,n.length),this._paging(n.length),this.activity.hide(),H.exec(s.onDraw,null,i[0]),i.fire("draw"),void 0!==e&&H.exec(e,[i],i[0])},_getItemContent:function(e){var t,n,i,s,a=this.options,o=D(e),r=H.isValue(o.data("formatMask"))?o.data("formatMask"):null;if(H.isValue(a.sortClass)){if(i="",0<(n=D(e).find("."+a.sortClass)).length)for(t=0;t<n.length;t++)i+=n[t].textContent;s=0<n.length?n[0].getAttribute("data-format"):""}else i=e.textContent,s=e.getAttribute("data-format");if(i=(""+i).toLowerCase().replace(/[\n\r]+|[\s]{2,}/g," ").trim(),H.isValue(s))switch(-1===["number","int","integer","float","money"].indexOf(s)||","===a.thousandSeparator&&"."===a.decimalSeparator||(i=H.parseNumber(i,a.thousandSeparator,a.decimalSeparator)),s){case"date":i=H.isValue(r)?i.toDate(r):new Date(i);break;case"number":i=Number(i);break;case"int":case"integer":i=parseInt(i);break;case"float":i=parseFloat(i);break;case"money":i=H.parseMoney(i);break;case"card":i=H.parseCard(i);break;case"phone":i=H.parsePhone(i)}return i},deleteItem:function(e){var t,n,i=[],s=H.isFunc(e);for(t=0;t<this.items.length;t++)n=this.items[t],s?H.exec(e,[n])&&i.push(t):n.textContent.contains(e)&&i.push(t);return this.items=H.arrayDeleteByMultipleKeys(this.items,i),this},draw:function(){return this._draw()},sorting:function(e,t,n){var a=this,o=this.element,r=this.options;return H.isValue(e)&&(r.sortClass=e),H.isValue(t)&&-1<["asc","desc"].indexOf(t)&&(r.sortDir=t),H.exec(r.onSortStart,[this.items],o[0]),o.fire("sortstart",{items:this.items}),this.items.sort(function(e,t){var n=a._getItemContent(e),i=a._getItemContent(t),s=0;return n<i&&(s="asc"===r.sortDir?-1:1),i<n&&(s="asc"===r.sortDir?1:-1),0!==s&&(H.exec(r.onSortItemSwitch,[e,t,s],o[0]),o.fire("sortitemswitch",{a:e,b:t,result:s})),s}),H.exec(r.onSortStop,[this.items],o[0]),o.fire("sortstop",{items:this.items}),!0===n&&this._draw(),this},filter:function(e){this.filterString=e.trim().toLowerCase(),this.currentPage=1,this._draw()},loadData:function(e){var n=this,i=this.element,s=this.options;!0===H.isValue(e)&&(s.source=e,H.exec(s.onDataLoad,[s.source],i[0]),i.fire("dataload",{source:s.source}),D.json(s.source).then(function(e){var t;H.exec(s.onDataLoaded,[s.source,e],i[0]),i.fire("dataloaded",{source:s.source,data:e}),n._createItemsFromJSON(e),i.html(""),H.isValue(s.filterString)&&(n.filterString=s.filterString),H.isValue(s.filter)&&(!1===(t=H.isFunc(s.filter))&&(t=H.func(s.filter)),n.filterIndex=n.addFilter(t)),H.isValue(s.filters)&&D.each(H.strToArray(s.filters),function(){!1!==(t=H.isFunc(this))&&n.filtersIndexes.push(n.addFilter(t))}),n.currentPage=1,n.sorting(s.sortClass,s.sortDir,!0)},function(e){H.exec(s.onDataLoadError,[s.source,e],i[0]),i.fire("dataloaderror",{source:s.source,xhr:e})}))},next:function(){0!==this.items.length&&(this.currentPage++,this.currentPage>this.pagesCount?this.currentPage=this.pagesCount:this._draw())},prev:function(){0!==this.items.length&&(this.currentPage--,0!==this.currentPage?this._draw():this.currentPage=1)},first:function(){0!==this.items.length&&(this.currentPage=1,this._draw())},last:function(){0!==this.items.length&&(this.currentPage=this.pagesCount,this._draw())},page:function(e){e<=0&&(e=1),e>this.pagesCount&&(e=this.pagesCount),this.currentPage=e,this._draw()},addFilter:function(e,t){var n=H.isFunc(e);if(!1!==n)return this.filters.push(n),!0===t&&(this.currentPage=1,this.draw()),this.filters.length-1},removeFilter:function(e,t){return H.arrayDeleteByKey(this.filters,e),!0===t&&(this.currentPage=1,this.draw()),this},removeFilters:function(e){this.filters=[],!0===e&&(this.currentPage=1,this.draw())},getFilters:function(){return this.filters},getFilterIndex:function(){return this.filterIndex},getFiltersIndexes:function(){return this.filtersIndexes},changeAttribute:function(e){var t,n,i,s=this,a=this.element,o=this.options;switch(e){case"data-sort-dir":i=a.attr("data-sort-dir"),H.isValue(i)&&(o.sortDir=i,s.sorting(o.sortClass,o.sortDir,!0));break;case"data-sort-source":n=a.attr("data-sort-source"),H.isValue(n)&&(o.sortClass=n,s.sorting(o.sortClass,o.sortDir,!0));break;case"data-filter-string":t=a.attr("data-filter-string"),H.isValue(t)&&(o.filterString=t,s.filter(o.filterString))}},destroy:function(){var e,t=this.element,n=t.parent();return n.find(".list-search-block input").off(M.events.inputchange),H.isValue(this.wrapperSearch)&&0<(e=this.wrapperSearch.find("input")).length&&e.off(M.events.inputchange),n.off(M.events.click,".pagination .page-link"),H.isValue(this.wrapperPagination)&&this.wrapperPagination.off(M.events.click,".pagination .page-link"),t}};M.plugin("list",it);var st={listviewDeferred:0,selectable:!1,checkStyle:1,duration:100,view:M.listView.LIST,selectCurrent:!0,structure:{},onNodeInsert:M.noop,onNodeDelete:M.noop,onNodeClean:M.noop,onCollapseNode:M.noop,onExpandNode:M.noop,onGroupNodeClick:M.noop,onNodeClick:M.noop,onNodeDblClick:M.noop,onListViewCreate:M.noop};M.listViewSetup=function(e){st=D.extend({},st,e)},window.metroListViewSetup,M.listViewSetup(window.metroListViewSetup);var at={name:"ListView",init:function(e,t){return this.options=D.extend({},st,e),this.elem=t,this.element=D(t),this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"listview"),this._createView(),this._createEvents(),H.exec(t.onListViewCreate,null,e[0]),e.fire("listviewcreate")},_createIcon:function(e){var t,n;return n=H.isTag(e)?D(e):D("<img>").attr("src",e),(t=D("<span>").addClass("icon")).html(n.outerHTML()),t},_createCaption:function(e){return D("<div>").addClass("caption").html(e)},_createContent:function(e){return D("<div>").addClass("content").html(e)},_createToggle:function(){return D("<span>").addClass("node-toggle")},_createNode:function(n){var i,e=this.options;if(i=D("<li>"),void 0!==n.caption||void 0!==n.content){var t=D("<div>").addClass("data");i.prepend(t),void 0!==n.caption&&t.append(this._createCaption(n.caption)),void 0!==n.content&&t.append(this._createContent(n.content))}return void 0!==n.icon&&i.prepend(this._createIcon(n.icon)),0<H.objectLength(e.structure)&&D.each(e.structure,function(e,t){void 0!==n[e]&&D("<div>").addClass("node-data item-data-"+e).addClass(n[t]).html(n[e]).appendTo(i)}),i},_createView:function(){var i=this,e=this.element,s=this.options,t=e.find("li"),a=H.objectLength(s.structure);e.addClass("listview"),e.find("ul").addClass("listview"),D.each(t,function(){var t=D(this);if(void 0!==t.data("caption")||void 0!==t.data("content")){var e=D("<div>").addClass("data");t.prepend(e),void 0!==t.data("caption")&&e.append(i._createCaption(t.data("caption"))),void 0!==t.data("content")&&e.append(i._createContent(t.data("content")))}if(void 0!==t.data("icon")&&t.prepend(i._createIcon(t.data("icon"))),0<t.children("ul").length?(t.addClass("node-group"),t.append(i._createToggle()),!0!==t.data("collapsed")&&t.addClass("expanded")):t.addClass("node"),t.hasClass("node")){var n=D("<input type='checkbox' data-role='checkbox' data-style='"+s.checkStyle+"'>");n.data("node",t),t.prepend(n)}0<a&&D.each(s.structure,function(e){void 0!==t.data(e)&&D("<div>").addClass("node-data item-data-"+e).addClass(t.data(e)).html(t.data(e)).appendTo(t)})}),this.toggleSelectable(),this.view(s.view)},_createEvents:function(){var t=this,n=this.element,i=this.options;n.on(M.events.click,".node",function(){var e=D(this);n.find(".node").removeClass("current"),e.toggleClass("current"),!0===i.selectCurrent&&(n.find(".node").removeClass("current-select"),e.toggleClass("current-select")),H.exec(i.onNodeClick,[e],n[0]),n.fire("nodeclick",{node:e})}),n.on(M.events.click,".node-toggle",function(){var e=D(this).closest("li");t.toggleNode(e)}),n.on(M.events.click,".node-group > .data > .caption",function(){var e=D(this).closest("li");n.find(".node-group").removeClass("current-group"),e.addClass("current-group"),H.exec(i.onGroupNodeClick,[e],n[0]),n.fire("groupnodeclick",{node:e})}),n.on(M.events.dblclick,".node-group > .data > .caption",function(){var e=D(this).closest("li");t.toggleNode(e),H.exec(i.onNodeDblClick,[e],n[0]),n.fire("nodedblclick",{node:e})})},view:function(e){var n=this.element,t=this.options;if(void 0===e)return t.view;t.view=e,D.each(M.listView,function(e,t){n.removeClass("view-"+t),n.find("ul").removeClass("view-"+t)}),n.addClass("view-"+t.view),n.find("ul").addClass("view-"+t.view)},toggleNode:function(e){var t,n=this.element,i=this.options;(e=D(e)).hasClass("node-group")&&(e.toggleClass("expanded"),t=!0!==e.hasClass("expanded")?"slideUp":"slideDown",H.exec(i.onCollapseNode,[e],n[0]),n.fire("collapsenode",{node:e}),e.children("ul")[t](i.duration))},toggleSelectable:function(){var e=this.element,t=!0===this.options.selectable?"addClass":"removeClass";e[t]("selectable"),e.find("ul")[t]("selectable")},add:function(e,t){var n,i,s=this.element,a=this.options;if(null===e)n=s;else{if(!(e=D(e)).hasClass("node-group"))return;0===(n=e.children("ul")).length&&(n=D("<ul>").addClass("listview").addClass("view-"+a.view).appendTo(e),this._createToggle().appendTo(e),e.addClass("expanded"))}(i=this._createNode(t)).addClass("node").appendTo(n);var o=D("<input type='checkbox'>");return o.data("node",i),i.prepend(o),M.makePlugin(o,"checkbox",{}),H.exec(a.onNodeInsert,[i,e,n],s[0]),s.fire("nodeinsert",{newNode:i,parentNode:e,list:n}),i},addGroup:function(e){var t,n=this.element,i=this.options;return delete e.icon,(t=this._createNode(e)).addClass("node-group").appendTo(n),t.append(this._createToggle()),t.addClass("expanded"),t.append(D("<ul>").addClass("listview").addClass("view-"+i.view)),H.exec(i.onNodeInsert,[t,null,n],n[0]),n.fire("nodeinsert",{newNode:t,parentNode:null,list:n}),t},insertBefore:function(e,t){var n,i,s,a=this.element,o=this.options;if((e=D(e)).length)return(n=this._createNode(t)).addClass("node").insertBefore(e),i=n.closest(".node"),s=n.closest("ul"),H.exec(o.onNodeInsert,[n,i,s],a[0]),a.fire("nodeinsert",{newNode:n,parentNode:i,list:s}),n},insertAfter:function(e,t){var n,i,s,a=this.element,o=this.options;if((e=D(e)).length)return(n=this._createNode(t)).addClass("node").insertAfter(e),i=n.closest(".node"),s=n.closest("ul"),H.exec(o.onNodeInsert,[n,i,s],a[0]),a.fire("nodeinsert",{newNode:n,parentNode:i,list:s}),n},del:function(e){var t=this.element,n=this.options;if((e=D(e)).length){var i=e.closest("ul"),s=i.closest("li");e.remove(),0!==i.children().length||i.is(t)||(i.remove(),s.removeClass("expanded"),s.children(".node-toggle").remove()),H.exec(n.onNodeDelete,[e],t[0]),t.fire("nodedelete",{node:e})}},clean:function(e){var t=this.element,n=this.options;(e=D(e)).length&&(e.children("ul").remove(),e.removeClass("expanded"),e.children(".node-toggle").remove(),H.exec(n.onNodeClean,[e],t[0]),t.fire("nodeclean",{node:e}))},getSelected:function(){var e=this.element,t=[];return D.each(e.find(":checked"),function(){var e=D(this);t.push(e.closest(".node")[0])}),t},clearSelected:function(){this.element.find(":checked").prop("checked",!1),this.element.trigger("change")},selectAll:function(e){this.element.find(".node > .checkbox input").prop("checked",!1!==e),this.element.trigger("change")},changeAttribute:function(e){var t,n=this,i=this.element,s=this.options;switch(e){case"data-view":t="view-"+i.attr("data-view"),n.view(t);break;case"data-selectable":s.selectable=!0===JSON.parse(i.attr("data-selectable")),n.toggleSelectable()}},destroy:function(){var e=this.element;return e.off(M.events.click,".node"),e.off(M.events.click,".node-toggle"),e.off(M.events.click,".node-group > .data > .caption"),e.off(M.events.dblclick,".node-group > .data > .caption"),e}};M.plugin("listview",at);var ot={masterDeferred:0,effect:"slide",effectFunc:"linear",duration:METRO_ANIMATION_DURATION,controlPrev:"<span class='default-icon-left-arrow'></span>",controlNext:"<span class='default-icon-right-arrow'></span>",controlTitle:"Master, page $1 of $2",backgroundImage:"",clsMaster:"",clsControls:"",clsControlPrev:"",clsControlNext:"",clsControlTitle:"",clsPages:"",clsPage:"",onBeforePage:M.noop_true,onBeforeNext:M.noop_true,onBeforePrev:M.noop_true,onNextPage:M.noop,onPrevPage:M.noop,onMasterCreate:M.noop};M.masterSetup=function(e){ot=D.extend({},ot,e)},window.metroMasterSetup,M.masterSetup(window.metroMasterSetup);var rt={name:"Master",init:function(e,t){return this.options=D.extend({},ot,e),this.elem=t,this.element=D(t),this.pages=[],this.currentIndex=0,this.isAnimate=!1,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"master"),e.addClass("master").addClass(t.clsMaster),e.css({backgroundImage:"url("+t.backgroundImage+")"}),this._createControls(),this._createPages(),this._createEvents(),H.exec(t.onMasterCreate,null,e[0]),e.fire("mastercreate")},_createControls:function(){var e,t,n=this.element,i=this.options,s=n.find(".page");t=String(i.controlTitle).replace("$1","1"),t=String(t).replace("$2",s.length),D.each(["top","bottom"],function(){e=D("<div>").addClass("controls controls-"+this).addClass(i.clsControls).appendTo(n),D("<span>").addClass("prev").addClass(i.clsControlPrev).html(i.controlPrev).appendTo(e),D("<span>").addClass("next").addClass(i.clsControlNext).html(i.controlNext).appendTo(e),D("<span>").addClass("title").addClass(i.clsControlTitle).html(t).appendTo(e)}),this._enableControl("prev",!1)},_enableControl:function(e,t){var n=this.element.find(".controls ."+e);!0===t?n.removeClass("disabled"):n.addClass("disabled")},_setTitle:function(){var e=this.element.find(".controls .title"),t=this.options.controlTitle.replace("$1",this.currentIndex+1);t=t.replace("$2",String(this.pages.length)),e.html(t)},_createPages:function(){var t=this,n=this.element,i=this.options,e=n.find(".pages"),s=n.find(".page");0===e.length&&(e=D("<div>").addClass("pages").appendTo(n)),e.addClass(i.clsPages),D.each(s,function(){var e=D(this);void 0!==e.data("cover")?n.css({backgroundImage:"url("+e.data("cover")+")"}):n.css({backgroundImage:"url("+i.backgroundImage+")"}),e.css({left:"100%"}),e.addClass(i.clsPage).hide(0),t.pages.push(e)}),s.appendTo(e),void(this.currentIndex=0)!==this.pages[this.currentIndex]&&(void 0!==this.pages[this.currentIndex].data("cover")&&n.css({backgroundImage:"url("+this.pages[this.currentIndex].data("cover")+")"}),this.pages[this.currentIndex].css("left","0").show(0),setTimeout(function(){e.css({height:t.pages[0].outerHeight(!0)+2})},0))},_createEvents:function(){var e=this,t=this.element,n=this.options;t.on(M.events.click,".controls .prev",function(){!0!==e.isAnimate&&!0===H.exec(n.onBeforePrev,[e.currentIndex,e.pages[e.currentIndex],t])&&!0===H.exec(n.onBeforePage,["prev",e.currentIndex,e.pages[e.currentIndex],t])&&e.prev()}),t.on(M.events.click,".controls .next",function(){!0!==e.isAnimate&&!0===H.exec(n.onBeforeNext,[e.currentIndex,e.pages[e.currentIndex],t])&&!0===H.exec(n.onBeforePage,["next",e.currentIndex,e.pages[e.currentIndex],t])&&e.next()}),D(window).on(M.events.resize,function(){t.find(".pages").height(e.pages[e.currentIndex].outerHeight(!0)+2)},{ns:t.attr("id")})},_slideToPage:function(e){var t,n,i;void 0!==this.pages[e]&&this.currentIndex!==e&&(i=e>this.currentIndex?"next":"prev",t=this.pages[this.currentIndex],n=this.pages[e],this.currentIndex=e,this._effect(t,n,i))},_slideTo:function(e){var t,n,i=this.element,s=this.options,a="next"===e.toLowerCase();if(t=this.pages[this.currentIndex],a){if(this.currentIndex+1>=this.pages.length)return;this.currentIndex++}else{if(this.currentIndex-1<0)return;this.currentIndex--}n=this.pages[this.currentIndex],H.exec(a?s.onNextPage:s.onPrevPage,[t,n],i[0]),i.fire(a?"nextpage":"prevpage",{current:t,next:n,forward:a}),this._effect(t,n,e)},_effect:function(e,t,n){var i=this,s=this.element,a=this.options,o=s.width(),r=s.find(".pages");function l(){void 0!==t.data("cover")?s.css({backgroundImage:"url("+t.data("cover")+")"}):s.css({backgroundImage:"url("+a.backgroundImage+")"}),r.css("overflow","initial"),i.isAnimate=!1}switch(this._setTitle(),this.currentIndex===this.pages.length-1?this._enableControl("next",!1):this._enableControl("next",!0),0===this.currentIndex?this._enableControl("prev",!1):this._enableControl("prev",!0),this.isAnimate=!0,setTimeout(function(){r.animate({height:t.outerHeight(!0)+2})},0),r.css("overflow","hidden"),a.effect){case"fade":e.fadeOut(a.duration),t.css({top:0,left:0,opacity:0}).fadeIn(a.duration,"linear",function(){l()});break;case"switch":e.hide(),t.css({top:0,left:0,opacity:0}).show(function(){l()});break;default:e.stop(!0).animate({left:"next"===n?-o:o},a.duration,a.effectFunc,function(){e.hide(0)}),t.stop(!0).css({left:"next"===n?o:-o}).show(0).animate({left:0},a.duration,a.effectFunc,function(){l()})}},toPage:function(e){this._slideToPage(e)},next:function(){this._slideTo("next")},prev:function(){this._slideTo("prev")},changeEffect:function(){this.options.effect=this.element.attr("data-effect")},changeEffectFunc:function(){this.options.effectFunc=this.element.attr("data-effect-func")},changeEffectDuration:function(){this.options.duration=this.element.attr("data-duration")},changeAttribute:function(e){switch(e){case"data-effect":this.changeEffect();break;case"data-effect-func":this.changeEffectFunc();break;case"data-duration":this.changeEffectDuration()}},destroy:function(){var e=this.element;return e.off(M.events.click,".controls .prev"),e.off(M.events.click,".controls .next"),D(window).off(M.events.resize,{ns:e.attr("id")}),e}};M.plugin("master",rt);var lt={navviewDeferred:0,compact:"md",expand:"lg",toggle:null,activeState:!1,onMenuItemClick:M.noop,onNavViewCreate:M.noop};M.navigationViewSetup=function(e){lt=D.extend({},lt,e)},window.metroNavigationViewSetup,M.navigationViewSetup(window.metroNavigationSetup);var ct={name:"NavView",init:function(e,t){return this.options=D.extend({},lt,e),this.elem=t,this.element=D(t),this.pane=null,this.content=null,this.paneToggle=null,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"navview"),this._createView(),this._createEvents(),H.exec(t.onNavViewCreate,null,e[0]),e.fire("navviewcreate")},_calcMenuHeight:function(){var e,t,n=this.element,i=0;0!==(e=n.children(".navview-pane")).length&&0!==(t=e.children(".navview-menu")).length&&(D.each(t.prevAll(),function(){i+=D(this).outerHeight(!0)}),D.each(t.nextAll(),function(){i+=D(this).outerHeight(!0)}),t.css({height:"calc(100% - "+(i+20)+"px)"}))},_createView:function(){var e,t,n,i=this,s=this.element,a=this.options;s.attr("id")||s.attr("id",H.elementId("navview")),s.addClass("navview").addClass(!1!==a.compact?"navview-compact-"+a.compact:"").addClass(!1!==a.expand?"navview-expand-"+a.expand:""),e=s.children(".navview-pane"),t=s.children(".navview-content"),n=D(a.toggle),this._calcMenuHeight(),this.pane=0<e.length?e:null,this.content=0<t.length?t:null,this.paneToggle=0<n.length?n:null,setTimeout(function(){48===i.pane.width()?s.addClass("js-compact"):s.removeClass("js-compact")},200)},_createEvents:function(){var e=this,t=this.element,n=this.options;t.on(M.events.click,".pull-button, .holder",function(){e.pullClick(this)}),t.on(M.events.click,".navview-menu li",function(){!0===n.activeState&&(t.find(".navview-menu li").removeClass("active"),D(this).toggleClass("active"))}),t.on(M.events.click,".navview-menu li > a",function(){H.exec(n.onMenuItemClick,null,this),t.fire("menuitemclick",{item:this})}),null!==this.paneToggle&&this.paneToggle.on(M.events.click,function(){e.pane.toggleClass("open")}),D(window).on(M.events.resize,function(){t.removeClass("expanded"),e.pane.removeClass("open"),D(this).width()<=M.media_sizes[String(n.compact).toUpperCase()]&&t.removeClass("compacted"),e._calcMenuHeight(),t.removeClass("js-compact"),setTimeout(function(){48===e.pane.width()&&t.addClass("js-compact")},200)},{ns:t.attr("id")})},pullClick:function(e){var t,n=this,i=this.element,s=this.pane.width()<280,a=D(e);return a&&a.hasClass("holder")&&(t=a.parent().find("input"),setTimeout(function(){t.focus()},200)),n.pane.hasClass("open")?n.close():!s&&!i.hasClass("expanded")||i.hasClass("compacted")?!i.hasClass("compacted")&&s||i.toggleClass("compacted"):i.toggleClass("expanded"),setTimeout(function(){48===n.pane.width()?i.addClass("js-compact"):i.removeClass("js-compact")},200),!0},open:function(){this.pane.addClass("open")},close:function(){this.pane.removeClass("open")},toggle:function(){var e=this.pane;e.hasClass("open")?e.removeClass("open"):e.addClass("open")},changeAttribute:function(e){},destroy:function(){var e=this.element;this.options;return e.off(M.events.click,".pull-button, .holder"),e.off(M.events.click,".navview-menu li"),e.off(M.events.click,".navview-menu li > a"),null!==this.paneToggle&&this.paneToggle.off(M.events.click),D(window).off(M.events.resize,{ns:e.attr("id")}),e}};M.plugin("navview",ct);var dt={container:null,width:220,timeout:METRO_TIMEOUT,duration:METRO_ANIMATION_DURATION,distance:"100vh",animation:"linear",onClick:M.noop,onClose:M.noop,onShow:M.noop,onAppend:M.noop,onNotifyCreate:M.noop};M.notifySetup=function(e){dt=D.extend({},dt,e)},window.metroNotifySetup,M.notifySetup(window.metroNotifySetup);var ht={container:null,options:{},notifies:[],setup:function(e){return this.options=D.extend({},dt,e),this},reset:function(){var e={width:220,timeout:METRO_TIMEOUT,duration:METRO_ANIMATION_DURATION,distance:"100vh",animation:"linear"};this.options=D.extend({},dt,e)},_createContainer:function(){var e=D("<div>").addClass("notify-container");return D("body").prepend(e),e},create:function(e,t,n){var i,s,a=this,o=this.options,r=H.elementId("notify");if(H.isNull(n)&&(n={}),!H.isValue(e))return!1;(i=D("<div>").addClass("notify").attr("id",r)).css({width:o.width}),t&&(s=D("<div>").addClass("notify-title").html(t),i.prepend(s)),D("<div>").addClass("notify-message").html(e).appendTo(i),void 0!==n&&(void 0!==n.cls&&i.addClass(n.cls),void 0!==n.width&&i.css({width:n.width})),i.on(M.events.click,function(){H.exec(H.isValue(n.onClick)?n.onClick:o.onClick,null,this),a.kill(D(this).closest(".notify"),H.isValue(n.onClose)?n.onClose:o.onClose)}),null===ht.container&&(ht.container=ht._createContainer()),i.appendTo(ht.container),i.hide(function(){H.exec(H.isValue(n.onAppend)?n.onAppend:o.onAppend,null,i[0]),i.css({marginTop:H.isValue(n.distance)?n.distance:o.distance}).fadeIn(100,function(){var e=H.isValue(n.duration)?n.duration:o.duration,t=H.isValue(n.animation)?n.animation:o.animation;i.animate({marginTop:4},e,t,function(){H.exec(o.onNotifyCreate,null,this),void 0!==n&&!0===n.keepOpen||setTimeout(function(){a.kill(i,H.isValue(n.onClose)?n.onClose:o.onClose)},o.timeout),H.exec(H.isValue(n.onShow)?n.onShow:o.onShow,null,i[0])})})})},kill:function(e,t){var n=this,i=this.options;e.off(M.events.click),e.fadeOut(i.duration,"linear",function(){H.exec(H.isValue(t)?t:n.options.onClose,null,e[0]),e.remove()})},killAll:function(){var e=this,t=D(".notify");D.each(t,function(){e.kill(D(this))})}};M.notify=ht.setup();var ut=function(e){var t,n,i,s,a,o,r;if(t=D.extend({},{length:0,rows:0,current:0,target:"body",clsPagination:"",prevTitle:"Prev",nextTitle:"Next",distance:5},e),r=parseInt(t.distance),(i=D(t.target)).html(""),n=D("<ul>").addClass("pagination").addClass(t.clsPagination).appendTo(i),0!==t.length&&-1!==t.rows){t.pages=Math.ceil(t.length/t.rows);var l=function(e,t,n){var i,s;return i=D("<li>").addClass("page-item").addClass(t),(s=D("<a>").addClass("page-link").html(e)).data("page",n),s.appendTo(i),i};if(a=l(t.prevTitle,"service prev-page","prev"),n.append(a),n.append(l(1,1===t.current?"active":"",1)),0===r||t.pages<=7)for(s=2;s<t.pages;s++)n.append(l(s,s===t.current?"active":"",s));else if(t.current<r){for(s=2;s<=r;s++)n.append(l(s,s===t.current?"active":"",s));t.pages>r&&n.append(l("...","no-link",null))}else if(t.current<=t.pages&&t.current>t.pages-r+1)for(t.pages>r&&n.append(l("...","no-link",null)),s=t.pages-r+1;s<t.pages;s++)n.append(l(s,s===t.current?"active":"",s));else n.append(l("...","no-link",null)),n.append(l(t.current-1,"",t.current-1)),n.append(l(t.current,"active",t.current)),n.append(l(t.current+1,"",t.current+1)),n.append(l("...","no-link",null));return(1<t.pages||t.current<t.pages)&&n.append(l(t.pages,t.current===t.pages?"active":"",t.pages)),o=l(t.nextTitle,"service next-page","next"),n.append(o),1===t.current&&a.addClass("disabled"),t.current===t.pages&&o.addClass("disabled"),0===t.length&&(n.addClass("disabled"),n.children().addClass("disabled")),n}};M.pagination=ut;var pt={panelDeferred:0,id:null,titleCaption:"",titleIcon:"",collapsible:!1,collapsed:!1,collapseDuration:METRO_ANIMATION_DURATION,width:"auto",height:"auto",draggable:!1,customButtons:null,clsCustomButton:"",clsPanel:"",clsTitle:"",clsTitleCaption:"",clsTitleIcon:"",clsContent:"",clsCollapseToggle:"",onCollapse:M.noop,onExpand:M.noop,onDragStart:M.noop,onDragStop:M.noop,onDragMove:M.noop,onPanelCreate:M.noop};M.panelSetup=function(e){pt=D.extend({},pt,e)},window.metroPanelSetup,M.panelSetup(window.metroPanelSetup);var ft={name:"Panel",init:function(e,t){return this.options=D.extend({},pt,e),this.elem=t,this.element=D(t),this._setOptionsFromDOM(),M.createExec(this),this},dependencies:["draggable","collapse"],_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_addCustomButtons:function(e){var t,n=this.element,i=this.options,s=n.closest(".panel").find(".panel-title"),a=[];if("string"==typeof e&&-1<e.indexOf("{"))a=JSON.parse(e);else if("string"==typeof e&&H.isObject(e))a=H.isObject(e);else{if(!("object"==typeof e&&0<H.objectLength(e)))return void console.warn("Unknown format for custom buttons",e);a=e}if(0!==s.length)return 0===(t=s.find(".custom-buttons")).length?t=D("<div>").addClass("custom-buttons").appendTo(s):(t.find(".btn-custom").off(M.events.click),t.html("")),D.each(a,function(){var e=D("<span>");e.addClass("button btn-custom").addClass(i.clsCustomButton).addClass(this.cls).attr("tabindex",-1).html(this.html),e.data("action",this.onclick),t.prepend(e)}),s.on(M.events.click,".btn-custom",function(e){if(!H.isRightMouse(e)){var t=D(this),n=t.data("action");H.exec(n,[t],this)}}),this;console.warn("No place for custom buttons")},_create:function(){var e,t,n=this.element,i=this.options,s=D("<div>").addClass("panel").addClass(i.clsPanel),a=i.id?i.id:H.elementId("panel"),o=n[0].className;if(M.checkRuntime(n,"panel"),s.attr("id",a).addClass(o),s.insertBefore(n),n.appendTo(s),n[0].className="",n.addClass("panel-content").addClass(i.clsContent).appendTo(s),""!==i.titleCaption||""!==i.titleIcon||!0===i.collapsible){if(e=D("<div>").addClass("panel-title").addClass(i.clsTitle),""!==i.titleCaption&&D("<span>").addClass("caption").addClass(i.clsTitleCaption).html(i.titleCaption).appendTo(e),""!==i.titleIcon&&D(i.titleIcon).addClass("icon").addClass(i.clsTitleIcon).appendTo(e),!0===i.collapsible){var r=D("<span>").addClass("dropdown-toggle marker-center active-toggle").addClass(i.clsCollapseToggle).appendTo(e);M.makePlugin(n,"collapse",{toggleElement:r,duration:i.collapseDuration,onCollapse:i.onCollapse,onExpand:i.onExpand}),!0===i.collapsed&&this.collapse()}e.appendTo(s)}e&&H.isValue(i.customButtons)&&this._addCustomButtons(i.customButtons),!0===i.draggable&&(t=e?e.find(".caption, .icon"):s,M.makePlugin(s,"draggable",{dragElement:t,onDragStart:i.onDragStart,onDragStop:i.onDragStop,onDragMove:i.onDragMove}));"auto"!==i.width&&0<=parseInt(i.width)&&s.outerWidth(parseInt(i.width)),"auto"!==i.height&&0<=parseInt(i.height)&&(s.outerHeight(parseInt(i.height)),n.css({overflow:"auto"})),this.panel=s,H.exec(i.onPanelCreate,null,n[0]),n.fire("panelcreate")},customButtons:function(e){return this._addCustomButtons(e)},collapse:function(){var e=this.element;!1!==H.isMetroObject(e,"collapse")&&M.getPlugin(e,"collapse").collapse()},expand:function(){var e=this.element;!1!==H.isMetroObject(e,"collapse")&&M.getPlugin(e,"collapse").expand()},changeAttribute:function(e){},destroy:function(){var e=this.element;return!0===o.collapsible&&M.getPlugin(e,"collapse").destroy(),!0===o.draggable&&M.getPlugin(e,"draggable").destroy(),e}};M.plugin("panel",ft);var mt={popoverDeferred:0,popoverText:"",popoverHide:3e3,popoverTimeout:10,popoverOffset:10,popoverTrigger:M.popoverEvents.HOVER,popoverPosition:M.position.TOP,hideOnLeave:!1,closeButton:!0,clsPopover:"",clsPopoverContent:"",onPopoverShow:M.noop,onPopoverHide:M.noop,onPopoverCreate:M.noop};M.popoverSetup=function(e){mt=D.extend({},mt,e)},window.metroPopoverSetup,M.popoverSetup(window.metroPopoverSetup);var vt={name:"Popover",init:function(e,t){return this.options=D.extend({},mt,e),this.elem=t,this.element=D(t),this.popover=null,this.popovered=!1,this.size={width:0,height:0},this.id=H.elementId("popover"),this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){this._createEvents()},_createEvents:function(){var e,t=this,n=this.element,i=this.options;switch(i.popoverTrigger){case M.popoverEvents.CLICK:e=M.events.click;break;case M.popoverEvents.FOCUS:e=M.events.focus;break;default:e=M.events.enter}n.on(e,function(){null===t.popover&&!0!==t.popovered&&setTimeout(function(){t.createPopover(),H.exec(i.onPopoverShow,[t.popover],n[0]),n.fire("popovershow",{popover:t.popover}),0<i.popoverHide&&setTimeout(function(){t.removePopover()},i.popoverHide)},i.popoverTimeout)}),!0===i.hideOnLeave&&n.on(M.events.leave,function(){t.removePopover()}),D(window).on(M.events.scroll,function(){null!==t.popover&&t.setPosition()},{ns:this.id})},setPosition:function(){var e=this.popover,t=this.size,n=this.options,i=this.element;n.popoverPosition===M.position.BOTTOM?(e.addClass("bottom"),e.css({top:i.offset().top-D(window).scrollTop()+i.outerHeight()+n.popoverOffset,left:i.offset().left+i.outerWidth()/2-t.width/2-D(window).scrollLeft()})):n.popoverPosition===M.position.RIGHT?(e.addClass("right"),e.css({top:i.offset().top+i.outerHeight()/2-t.height/2-D(window).scrollTop(),left:i.offset().left+i.outerWidth()-D(window).scrollLeft()+n.popoverOffset})):n.popoverPosition===M.position.LEFT?(e.addClass("left"),e.css({top:i.offset().top+i.outerHeight()/2-t.height/2-D(window).scrollTop(),left:i.offset().left-t.width-D(window).scrollLeft()-n.popoverOffset})):(e.addClass("top"),e.css({top:i.offset().top-D(window).scrollTop()-t.height-n.popoverOffset,left:i.offset().left+i.outerWidth()/2-t.width/2-D(window).scrollLeft()}))},createPopover:function(){var e,t,n=this,i=this.elem,s=this.element,a=this.options,o=H.elementId("popover");if(!this.popovered){switch((e=D("<div>").addClass("popover neb").addClass(a.clsPopover)).attr("id",o),D("<div>").addClass("popover-content").addClass(a.clsPopoverContent).html(a.popoverText).appendTo(e),0===a.popoverHide&&!0===a.closeButton&&D("<button>").addClass("button square small popover-close-button bg-white").html("&times;").appendTo(e).on(M.events.click,function(){n.removePopover()}),a.popoverPosition){case M.position.TOP:t="neb-s";break;case M.position.BOTTOM:t="neb-n";break;case M.position.RIGHT:t="neb-w";break;case M.position.LEFT:t="neb-e"}if(e.addClass(t),!0!==a.closeButton&&e.on(M.events.click,function(){n.removePopover()}),this.popover=e,this.size=H.hiddenElementSize(e),"TD"===i.tagName||"TH"===i.tagName){var r=D("<div/>").css("display","inline-block").html(s.html());s.html(r),s=r}this.setPosition(),e.appendTo(D("body")),this.popovered=!0,H.exec(a.onPopoverCreate,[e],s[0]),s.fire("popovercreate",{popover:e})}},removePopover:function(){var e=this,t=this.element,n=this.options.onPopoverHide===M.noop?0:300,i=this.popover;this.popovered&&(H.exec(this.options.onPopoverHide,[i],this.elem),t.fire("popoverhide",{popover:i}),setTimeout(function(){i.hide(0,function(){i.remove(),e.popover=null,e.popovered=!1})},n))},show:function(){var e=this,t=this.element,n=this.options;!0!==this.popovered&&setTimeout(function(){e.createPopover(),H.exec(n.onPopoverShow,[e.popover],t[0]),t.fire("popovershow",{popover:e.popover}),0<n.popoverHide&&setTimeout(function(){e.removePopover()},n.popoverHide)},n.popoverTimeout)},hide:function(){this.removePopover()},changeAttribute:function(e){var t=this,n=this.element,i=this.options;switch(e){case"data-popover-text":i.popoverText=n.attr("data-popover-text"),t.popover&&(t.popover.find(".popover-content").html(i.popoverText),t.setPosition());break;case"data-popover-position":i.popoverPosition=n.attr("data-popover-position"),t.setPosition()}},destroy:function(){var e,t=this.element,n=this.options;switch(n.popoverTrigger){case M.popoverEvents.CLICK:e=M.events.click;break;case M.popoverEvents.FOCUS:e=M.events.focus;break;default:e=M.events.enter}return t.off(e),!0===n.hideOnLeave&&t.off(M.events.leave),D(window).off(M.events.scroll,{ns:this.id}),t}};M.plugin("popover",vt);var gt={progressDeferred:0,showValue:!1,valuePosition:"free",showLabel:!1,labelPosition:"before",labelTemplate:"",value:0,buffer:0,type:"bar",small:!1,clsBack:"",clsBar:"",clsBuffer:"",clsValue:"",clsLabel:"",onValueChange:M.noop,onBufferChange:M.noop,onComplete:M.noop,onBuffered:M.noop,onProgressCreate:M.noop};M.progressSetup=function(e){gt=D.extend({},gt,e)},window.metroProgressSetup,M.progressSetup(window.metroProgressSetup);var Ct={name:"Progress",init:function(e,t){return this.options=D.extend({},gt,e),this.elem=t,this.element=D(t),this.value=0,this.buffer=0,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e,t=this.element,n=this.options;switch(M.checkRuntime(t,"progress"),"string"==typeof n.type&&(n.type=n.type.toLowerCase()),t.html("").addClass("progress"),n.type){case"buffer":D("<div>").addClass("bar").appendTo(t),D("<div>").addClass("buffer").appendTo(t);break;case"load":t.addClass("with-load"),D("<div>").addClass("bar").appendTo(t),D("<div>").addClass("buffer").appendTo(t),D("<div>").addClass("load").appendTo(t);break;case"line":t.addClass("line");break;default:D("<div>").addClass("bar").appendTo(t)}if("line"!==n.type&&(e=D("<span>").addClass("value").addClass(n.clsValue).appendTo(t),"center"===n.valuePosition&&e.addClass("centered"),!1===n.showValue&&e.hide()),!0===n.small&&t.addClass("small"),t.addClass(n.clsBack),t.find(".bar").addClass(n.clsBar),t.find(".buffer").addClass(n.clsBuffer),!0===n.showLabel){var i=D("<span>").addClass("progress-label").addClass(n.clsLabel).html(""===n.labelTemplate?n.value+"%":n.labelTemplate.replace("%VAL%",n.value));"before"===n.labelPosition?i.insertBefore(t):i.insertAfter(t)}this.val(n.value),this.buff(n.buffer),H.exec(n.onProgressCreate,null,t[0]),t.fire("progresscreate")},val:function(e){var t=this.element,n=this.options,i=t.find(".value");if(void 0===e)return this.value;var s=t.find(".bar");if(0===s.length)return!1;this.value=parseInt(e,10),s.css("width",this.value+"%"),i.html(this.value+"%");var a=t.width()-s.width(),o=i.width()>a?{left:"auto",right:a+"px"}:{left:e+"%"};if("free"===n.valuePosition&&i.css(o),!0===n.showLabel){var r=t["before"===n.labelPosition?"prev":"next"](".progress-label");r.length&&r.html(""===n.labelTemplate?n.value+"%":n.labelTemplate.replace("%VAL%",n.value))}H.exec(n.onValueChange,[this.value],t[0]),t.fire("valuechange",{vsl:this.value}),100===this.value&&(H.exec(n.onComplete,[this.value],t[0]),t.fire("complete",{val:this.value}))},buff:function(e){var t=this.element,n=this.options;if(void 0===e)return this.buffer;var i=t.find(".buffer");if(0===i.length)return!1;this.buffer=parseInt(e,10),i.css("width",this.buffer+"%"),H.exec(n.onBufferChange,[this.buffer],t[0]),t.fire("bufferchange",{val:this.buffer}),100===this.buffer&&(H.exec(n.onBuffered,[this.buffer],t[0]),t.fire("buffered",{val:this.buffer}))},changeValue:function(){this.val(this.element.attr("data-value"))},changeBuffer:function(){this.buff(this.element.attr("data-buffer"))},changeAttribute:function(e){switch(e){case"data-value":this.changeValue();break;case"data-buffer":this.changeBuffer()}},destroy:function(){return this.element}};M.plugin("progress",Ct);var bt={radioDeferred:0,transition:!0,style:1,caption:"",captionPosition:"right",clsRadio:"",clsCheck:"",clsCaption:"",onRadioCreate:M.noop};M.radioSetup=function(e){bt=D.extend({},bt,e)},window.metroRadioSetup,M.radioSetup(window.metroRadioSetup);var wt={name:"Radio",init:function(e,t){return this.options=D.extend({},bt,e),this.elem=t,this.element=D(t),this.origin={className:""},this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;this._createStructure(),this._createEvents(),H.exec(t.onRadioCreate,null,e[0]),e.fire("radiocreate")},_createStructure:function(){var e=this.element,t=this.options,n=D("<label>").addClass("radio "+e[0].className).addClass(2===t.style?"style2":""),i=D("<span>").addClass("check"),s=D("<span>").addClass("caption").html(t.caption);M.checkRuntime(e,"radio"),e.attr("type","radio"),n.insertBefore(e),e.appendTo(n),i.appendTo(n),s.appendTo(n),!0===t.transition&&n.addClass("transition-on"),"left"===t.captionPosition&&n.addClass("caption-left"),this.origin.className=e[0].className,e[0].className="",n.addClass(t.clsRadio),s.addClass(t.clsCaption),i.addClass(t.clsCheck),e.is(":disabled")?this.disable():this.enable()},_createEvents:function(){var e=this.element,t=e.siblings(".check");e.on("focus",function(){t.addClass("focused")}),e.on("blur",function(){t.removeClass("focused")})},disable:function(){this.element.data("disabled",!0),this.element.parent().addClass("disabled")},enable:function(){this.element.data("disabled",!1),this.element.parent().removeClass("disabled")},toggleState:function(){this.elem.disabled?this.disable():this.enable()},changeAttribute:function(e){var t,n=this.element,i=this.options,s=n.parent();switch(e){case"disabled":this.toggleState();break;case"data-style":t=parseInt(n.attr("data-style")),H.isInt(t)&&(i.style=t,s.removeClass("style1 style2").addClass("style"+t))}},destroy:function(){return this.element}};M.plugin("radio",wt);var yt={ratingDeferred:0,static:!1,title:null,value:0,values:null,message:"",stars:5,starColor:null,staredColor:null,roundFunc:"round",half:!0,clsRating:"",clsTitle:"",clsStars:"",clsResult:"",onStarClick:M.noop,onRatingCreate:M.noop};M.ratingSetup=function(e){yt=D.extend({},yt,e)},window.metroRatingSetup,M.ratingSetup(window.metroRatingSetup);var xt={name:"Rating",init:function(e,t){return this.options=D.extend({},yt,e),this.elem=t,this.element=D(t),this.value=0,this.originValue=0,this.values=[],this.rate=0,this.rating=null,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e,t=this.element,n=this.options;if(M.checkRuntime(t,"rating"),isNaN(n.value)?n.value=0:n.value=parseFloat(n.value).toFixed(1),null!==n.values)Array.isArray(n.values)?this.values=n.values:"string"==typeof n.values&&(this.values=H.strToArray(n.values));else for(e=1;e<=n.stars;e++)this.values.push(e);this.originValue=n.value,this.value=0<n.value?Math[n.roundFunc](n.value):0,null!==n.starColor&&(H.isColor(n.starColor)||(n.starColor=x.color(n.starColor))),null!==n.staredColor&&(H.isColor(n.staredColor)||(n.staredColor=x.color(n.staredColor))),this._createRating(),this._createEvents(),H.exec(n.onRatingCreate,null,t[0]),t.fire("ratingcreate")},_createRating:function(){var e,t,n,i=this.element,s=this.options,a=H.elementId("rating"),o=D("<div>").addClass("rating "+String(i[0].className).replace("d-block","d-flex")).addClass(s.clsRating),r=M.sheet,l=s.static?Math.floor(this.originValue):this.value;for(i.val(this.value),o.attr("id",a),o.insertBefore(i),i.appendTo(o),t=D("<ul>").addClass("stars").addClass(s.clsStars).appendTo(o),e=1;e<=s.stars;e++)n=D("<li>").data("value",this.values[e-1]).appendTo(t),e<=l&&n.addClass("on");if(D("<span>").addClass("result").addClass(s.clsResult).appendTo(o).html(s.message),null!==s.starColor&&H.addCssRule(r,"#"+a+" .stars:hover li","color: "+s.starColor+";"),null!==s.staredColor&&(H.addCssRule(r,"#"+a+" .stars li.on","color: "+s.staredColor+";"),H.addCssRule(r,"#"+a+" .stars li.half::after","color: "+s.staredColor+";")),null!==s.title){var c=D("<span>").addClass("title").addClass(s.clsTitle).html(s.title);o.prepend(c)}if(!0===s.static&&(o.addClass("static"),!0===s.half)){var d=Math.round(this.originValue%1*10);0<d&&d<=9&&o.find(".stars li.on").last().next("li").addClass("half half-"+10*d)}if(!(i[0].className="")===s.copyInlineStyles)for(e=0;e<i[0].style.length;e++)o.css(i[0].style[e],i.css(i[0].style[e]));i.is(":disabled")?this.disable():this.enable(),this.rating=o},_createEvents:function(){var n=this.element,i=this.options;this.rating.on(M.events.click,".stars li",function(){if(!0!==i.static){var e=D(this),t=e.data("value");e.addClass("scale"),setTimeout(function(){e.removeClass("scale")},300),n.val(t).trigger("change"),e.addClass("on"),e.prevAll().addClass("on"),e.nextAll().removeClass("on"),H.exec(i.onStarClick,[t,e[0]],n[0]),n.fire("starclick",{value:t,star:e[0]})}})},val:function(e){var t=this,n=this.element,i=this.options,s=this.rating;if(void 0===e)return this.value;this.value=0<e?Math[i.roundFunc](e):0,n.val(this.value).trigger("change");var a=s.find(".stars li").removeClass("on");return D.each(a,function(){var e=D(this);e.data("value")<=t.value&&e.addClass("on")}),this},msg:function(e){var t=this.rating;if(void 0!==e)return t.find(".result").html(e),this},static:function(e){var t=this.options,n=this.rating;!0===(t.static=e)?n.addClass("static"):n.removeClass("static")},changeAttributeValue:function(e){var t=this.element,n="value"===e?t.val():t.attr("data-value");this.val(n)},changeAttributeMessage:function(){var e=this.element.attr("data-message");this.msg(e)},changeAttributeStatic:function(){var e=this.element,t=!0===JSON.parse(e.attr("data-static"));this.static(t)},disable:function(){this.element.data("disabled",!0),this.element.parent().addClass("disabled")},enable:function(){this.element.data("disabled",!1),this.element.parent().removeClass("disabled")},toggleState:function(){this.elem.disabled?this.disable():this.enable()},changeAttribute:function(e){switch(e){case"value":case"data-value":this.changeAttributeValue(e);break;case"disabled":this.toggleState();break;case"data-message":this.changeAttributeMessage();break;case"data-static":this.changeAttributeStatic()}},destroy:function(){var e=this.element;return this.rating.off(M.events.click,".stars li"),e}};M.plugin("rating",xt);var St={resizeableDeferred:0,canResize:!0,resizeElement:".resize-element",minWidth:0,minHeight:0,maxWidth:0,maxHeight:0,preserveRatio:!1,onResizeStart:M.noop,onResizeStop:M.noop,onResize:M.noop,onResizableCreate:M.noop};M.resizeableSetup=function(e){St=D.extend({},St,e)},window.metroResizeableSetup,M.resizeableSetup(window.metroResizeableSetup);var Tt={name:"Resizeable",init:function(e,t){return this.options=D.extend({},St,e),this.elem=t,this.element=D(t),this.resizer=null,this.id=H.elementId("resizeable"),this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"resizeable"),this._createStructure(),this._createEvents(),H.exec(t.onResizableCreate,null,e[0]),e.fire("resizeablecreate")},_createStructure:function(){var e=this.element,t=this.options;e.data("canResize",!0),e.addClass("resizeable-element"),H.isValue(t.resizeElement)&&0<e.find(t.resizeElement).length?this.resizer=e.find(t.resizeElement):this.resizer=D("<span>").addClass("resize-element").appendTo(e),e.data("canResize",t.canResize)},_createEvents:function(){var n=this,o=this.element,r=this.options;this.resizer.on(M.events.start,function(e){if(!1!==o.data("canResize")){var i=H.pageXY(e),s=parseInt(o.outerWidth()),a=parseInt(o.outerHeight()),t={width:s,height:a};o.addClass("stop-pointer"),H.exec(r.onResizeStart,[t],o[0]),o.fire("resizestart",{size:t}),D(document).on(M.events.move,function(e){var t=H.pageXY(e),n={width:s+t.x-i.x,height:a+t.y-i.y};return 0<r.maxWidth&&n.width>r.maxWidth||(0<r.minWidth&&n.width<r.minWidth||(0<r.maxHeight&&n.height>r.maxHeight||(0<r.minHeight&&n.height<r.minHeight||(o.css(n),H.exec(r.onResize,[n],o[0]),void o.fire("resize",{size:n})))))},{ns:n.id}),D(document).on(M.events.stop,function(){o.removeClass("stop-pointer"),D(document).off(M.events.move,{ns:n.id}),D(document).off(M.events.stop,{ns:n.id});var e={width:parseInt(o.outerWidth()),height:parseInt(o.outerHeight())};H.exec(r.onResizeStop,[e],o[0]),o.fire("resizestop",{size:e})},{ns:n.id}),e.preventDefault(),e.stopPropagation()}})},off:function(){this.element.data("canResize",!1)},on:function(){this.element.data("canResize",!0)},changeAttribute:function(e){var t=this.element,n=this.options;switch(e){case"data-can-resize":n.canResize=!0===JSON.parse(t.attr("data-can-resize"))}},destroy:function(){return this.resizer.off(M.events.start),this.element}};M.plugin("resizable",Tt);var kt={resizerDeferred:0,onMediaPoint:M.noop,onMediaPointEnter:M.noop,onMediaPointLeave:M.noop,onWindowResize:M.noop,onElementResize:M.noop,onResizerCreate:M.noop};M.resizerSetup=function(e){kt=D.extend({},kt,e)},window.metroResizerSetup,M.resizerSetup(window.metroResizerSetup);var _t={name:"Resizer",init:function(e,t){return this.options=D.extend({},kt,e),this.elem=t,this.element=D(t),this.id=null,this.size={width:0,height:0},this.media=window.METRO_MEDIA,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"resizer"),this.id=H.elementId("resizer"),this.size={width:e.width(),height:e.height()},this._createStructure(),this._createEvents(),H.exec(t.onMyObjectCreate,[e])},_createStructure:function(){this.element,this.options},_createEvents:function(){var r=this,l=this.element,c=this.options,d=D.window();d.on("resize",function(e){var t,n=d.width(),i=d.height(),s=l.width(),a=l.height(),o=r.size;H.exec(c.onWindowResize,[n,i,window.METRO_MEDIA],l[0]),l.fire("windowresize",{width:n,height:i,media:window.METRO_MEDIA}),r.size.width===s&&r.size.height===a||(r.size={width:s,height:a},H.exec(c.onElementResize,[s,a,o,window.METRO_MEDIA],l[0]),l.fire("windowresize",{width:s,height:a,oldSize:o,media:window.METRO_MEDIA})),r.media.length!==window.METRO_MEDIA.length&&(r.media.length>window.METRO_MEDIA.length?(t=r.media.filter(function(e){return!window.METRO_MEDIA.contains(e)}),H.exec(c.onMediaPointLeave,[t,window.METRO_MEDIA],l[0]),l.fire("mediapointleave",{point:t,media:window.METRO_MEDIA})):(t=window.METRO_MEDIA.filter(function(e){return!r.media.contains(e)}),H.exec(c.onMediaPointEnter,[t,window.METRO_MEDIA],l[0]),l.fire("mediapointenter",{point:t,media:window.METRO_MEDIA})),r.media=window.METRO_MEDIA,H.exec(c.onMediaPoint,[t,window.METRO_MEDIA],l[0]),l.fire("mediapoint",{point:t,media:window.METRO_MEDIA}))},{ns:this.id})},changeAttribute:function(e){},destroy:function(){D(window).off("resize",{ns:this.id})}};M.plugin("resizer",_t);var Ot={ribbonmenuDeferred:0,onStatic:M.noop,onBeforeTab:M.noop_true,onTab:M.noop,onRibbonMenuCreate:M.noop};M.ribbonMenuSetup=function(e){Ot=D.extend({},Ot,e)},window.metroRibbonMenuSetup,M.ribbonMenuSetup(window.metroRibbonMenuSetup);var It={name:"RibbonMenu",init:function(e,t){return this.options=D.extend({},Ot,e),this.elem=t,this.element=D(t),this._setOptionsFromDOM(),M.createExec(this),this},dependencies:["buttongroup"],_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"ribbonmenu"),this._createStructure(),this._createEvents(),H.exec(t.onRibbonMenuCreate,null,e[0]),e.fire("ribbonmenucreate")},_createStructure:function(){var e=this.element;e.addClass("ribbon-menu");var t=e.find(".tabs-holder li:not(.static)"),n=e.find(".tabs-holder li.active");0<n.length?this.open(D(n[0])):0<t.length&&this.open(D(t[0]));var i=e.find(".ribbon-toggle-group");D.each(i,function(){var e=D(this);e.buttongroup({clsActive:"active"});var t=0,n=e.find(".ribbon-icon-button");D.each(n,function(){var e=D(this).outerWidth(!0);t<e&&(t=e)}),e.css("width",t*Math.ceil(n.length/3)+4)})},_createEvents:function(){var i=this,s=this.element,a=this.options;s.on(M.events.click,".tabs-holder li a",function(e){var t=D(this),n=D(this).parent("li");n.hasClass("static")?a.onStatic===M.noop&&void 0!==t.attr("href")?document.location.href=t.attr("href"):(H.exec(a.onStatic,[n[0]],s[0]),s.fire("static",{tab:n[0]})):!0===H.exec(a.onBeforeTab,[n[0]],s[0])&&i.open(n[0]),e.preventDefault()})},open:function(e){var t=this.element,n=this.options,i=D(e),s=t.find(".tabs-holder li"),a=t.find(".content-holder .section"),o=i.children("a").attr("href"),r="#"!==o?t.find(o):null;s.removeClass("active"),i.addClass("active"),a.removeClass("active"),r&&r.addClass("active"),H.exec(n.onTab,[i[0]],t[0]),t.fire("tab",{tab:i[0]})},changeAttribute:function(e){},destroy:function(){var e=this.element;return e.off(M.events.click,".tabs-holder li a"),e}};M.plugin("ribbonmenu",It);var Dt={rippleDeferred:0,rippleColor:"#fff",rippleAlpha:.4,rippleTarget:"default",onRippleCreate:M.noop};M.rippleSetup=function(e){Dt=D.extend({},Dt,e)},window.metroRippleSetup,M.rippleSetup(window.metroRippleSetup);var Mt={name:"Ripple",init:function(e,t){return this.options=D.extend({},Dt,e),this.elem=t,this.element=D(t),this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,o=this.options,t="default"===o.rippleTarget?null:o.rippleTarget;M.checkRuntime(e,"ripple"),e.on(M.events.click,t,function(e){var t=D(this);"static"===t.css("position")&&t.css("position","relative"),t.css({overflow:"hidden"}),D(".ripple").remove();var n=Math.max(t.outerWidth(),t.outerHeight()),i=D("<span class='ripple'></span>").css({width:n,height:n});t.prepend(i);var s=e.pageX-t.offset().left-i.width()/2,a=e.pageY-t.offset().top-i.height()/2;i.css({background:H.hex2rgba(o.rippleColor,o.rippleAlpha),width:n,height:n,top:a+"px",left:s+"px"}).addClass("rippleEffect"),setTimeout(function(){null,D(".ripple").remove()},400)}),H.exec(o.onRippleCreate,null,e[0]),e.fire("ripplecreate")},changeAttribute:function(e){},destroy:function(){var e=this.element,t=this.options,n="default"===t.rippleTarget?null:t.rippleTarget;e.off(M.events.click,n)}};M.plugin("ripple",Mt);var Et={selectDeferred:0,clearButton:!1,clearButtonIcon:"<span class='default-icon-cross'></span>",placeholder:"",addEmptyValue:!1,emptyValue:"",duration:100,prepend:"",append:"",filterPlaceholder:"",filter:!0,copyInlineStyles:!1,dropHeight:200,clsSelect:"",clsSelectInput:"",clsPrepend:"",clsAppend:"",clsOption:"",clsOptionActive:"",clsOptionGroup:"",clsDropList:"",clsDropContainer:"",clsSelectedItem:"",clsSelectedItemRemover:"",onChange:M.noop,onUp:M.noop,onDrop:M.noop,onItemSelect:M.noop,onItemDeselect:M.noop,onSelectCreate:M.noop};M.selectSetup=function(e){Et=D.extend({},Et,e)},window.metroSelectSetup,M.selectSetup(window.metroSelectSetup);var At={name:"Select",init:function(e,t){return this.options=D.extend({},Et,e),this.elem=t,this.element=D(t),this.list=null,this.placeholder=null,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"select"),this._createSelect(),this._createEvents(),H.exec(t.onSelectCreate,null,e[0]),e.fire("selectcreate")},_setPlaceholder:function(){var e=this.element,t=this.options,n=e.siblings(".select-input");H.isValue(e.val())&&e.val()!=t.emptyValue||n.html(this.placeholder)},_addOption:function(e,t){var n,i,s,a=D(e),o=this.element,r=this.options,l=o[0].multiple,c=o.siblings(".select-input"),d=H.isValue(a.attr("data-template"))?a.attr("data-template").replace("$1",e.text):e.text;n=D("<li>").addClass(r.clsOption).data("option",e).attr("data-text",e.text).attr("data-value",H.isValue(e.value)?e.value:e.text).appendTo(t),i=D("<a>").html(d).appendTo(n),n.addClass(e.className),a.is(":disabled")&&n.addClass("disabled"),a.is(":selected")&&(l?(n.addClass("d-none"),(s=D("<div>").addClass("selected-item").addClass(r.clsSelectedItem).html("<span class='title'>"+d+"</span>").appendTo(c)).data("option",n),D("<span>").addClass("remover").addClass(r.clsSelectedItemRemover).html("&times;").appendTo(s)):(o.val(e.value),c.html(d),o.fire("change",{val:e.value}),n.addClass("active"))),i.appendTo(n),n.appendTo(t)},_addOptionGroup:function(e,t){var n=this,i=D(e);D("<li>").html(e.label).addClass("group-title").appendTo(t),D.each(i.children(),function(){n._addOption(this,t)})},_createOptions:function(){var e=this,t=this.element,n=this.options,i=t.parent().find("ul").empty(),s=0<t.find("option[selected]").length;t.siblings(".select-input").empty(),!0===n.addEmptyValue&&t.prepend(D("<option "+(s?"":"selected")+" value='"+n.emptyValue+"' class='d-none'></option>")),D.each(t.children(),function(){"OPTION"===this.tagName?e._addOption(this,i):"OPTGROUP"===this.tagName&&e._addOptionGroup(this,i)})},_createSelect:function(){var e,n,t,i,s,a,o=this.element,r=this.options,l=D("<label>").addClass("select "+o[0].className).addClass(r.clsSelect),c=o[0].multiple,d=H.elementId("select"),h=D("<div>").addClass("button-group"),u=H.elementId("select-focus-trigger"),p=D("<input type='checkbox'>").addClass("select-focus-trigger").attr("id",u);(this.placeholder=D("<span>").addClass("placeholder").html(r.placeholder),o.attr("id")||o.attr("id",H.elementId("select-origin")),l.attr("id",d).attr("for",u),(a=D("<span>").addClass("dropdown-toggle")).appendTo(l),c&&l.addClass("multiple"),l.insertBefore(o),o.appendTo(l),h.appendTo(l),p.appendTo(l),e=D("<div>").addClass("select-input").addClass(r.clsSelectInput).attr("name","__"+d+"__"),n=D("<div>").addClass("drop-container").addClass(r.clsDropContainer),t=D("<div>").appendTo(n),i=D("<ul>").addClass(""===r.clsDropList?"d-menu":r.clsDropList).css({"max-height":r.dropHeight}),s=D("<input type='text' data-role='input'>").attr("placeholder",r.filterPlaceholder).appendTo(t),l.append(e),l.append(n),n.append(t),!0!==r.filter&&t.hide(),n.append(i),this._createOptions(),this._setPlaceholder(),M.makePlugin(n,"dropdown",{dropFilter:".select",duration:r.duration,toggleElement:[l],onDrop:function(){var e,t;a.addClass("active-toggle"),e=D(".select .drop-container"),D.each(e,function(){var e=D(this);if(!e.is(n)){var t=e.data("dropdown");t&&t.close&&t.close()}}),s.val("").trigger(M.events.keyup).focus(),void 0!==(t=0<i.find("li.active").length?D(i.find("li.active")[0]):void 0)&&(i[0].scrollTop=t.position().top-(i.height()-t.height())/2),H.exec(r.onDrop,[i[0]],o[0]),o.fire("drop",{list:i[0]})},onUp:function(){a.removeClass("active-toggle"),H.exec(r.onUp,[i[0]],o[0]),o.fire("up",{list:i[0]})}}),this.list=i,!0!==r.clearButton||o[0].readOnly)?h.addClass("d-none"):D("<button>").addClass("button input-clear-button").addClass(r.clsClearButton).attr("tabindex",-1).attr("type","button").html(r.clearButtonIcon).appendTo(h);""!==r.prepend&&D("<div>").html(r.prepend).addClass("prepend").addClass(r.clsPrepend).appendTo(l);""!==r.append&&D("<div>").html(r.append).addClass("append").addClass(r.clsAppend).appendTo(l);if(!0===r.copyInlineStyles)for(var f=0,m=o[0].style.length;f<m;f++)l.css(o[0].style[f],o.css(o[0].style[f]));"rtl"===o.attr("dir")&&l.addClass("rtl").attr("dir","rtl"),o.is(":disabled")?this.disable():this.enable()},_createEvents:function(){var l=this,c=this.element,d=this.options,t=c.closest(".select"),h=t.find(".drop-container"),u=c.siblings(".select-input"),e=h.find("input"),p=h.find("ul"),n=t.find(".input-clear-button"),i=t.find(".select-focus-trigger");i.on("focus",function(){t.addClass("focused")}),i.on("blur",function(){t.removeClass("focused")}),n.on(M.events.click,function(e){c.val(d.emptyValue),c[0].multiple&&p.find("li").removeClass("d-none"),l._setPlaceholder(),e.preventDefault(),e.stopPropagation()}),c.on(M.events.change,function(){l._setPlaceholder()}),t.on(M.events.click,function(e){D(".focused").removeClass("focused"),t.addClass("focused")}),u.on(M.events.click,function(){D(".focused").removeClass("focused"),t.addClass("focused")}),p.on(M.events.click,"li",function(e){if(D(this).hasClass("group-title"))return e.preventDefault(),void e.stopPropagation();var t,n,i=D(this),s=i.data("value"),a=i.children("a").html(),o=i.data("option"),r=c.find("option");c[0].multiple?(i.addClass("d-none"),(t=D("<div>").addClass("selected-item").addClass(d.clsSelectedItem).html("<span class='title'>"+a+"</span>").appendTo(u)).data("option",i),D("<span>").addClass("remover").addClass(d.clsSelectedItemRemover).html("&times;").appendTo(t)):(p.find("li.active").removeClass("active").removeClass(d.clsOptionActive),i.addClass("active").addClass(d.clsOptionActive),u.html(a),M.getPlugin(h[0],"dropdown").close()),D.each(r,function(){this===o&&(this.selected=!0)}),H.exec(d.onItemSelect,[s,o,i[0]],c[0]),c.fire("itemselect",{val:s,option:o,leaf:i[0]}),n=l.getSelected(),H.exec(d.onChange,[n],c[0]),c.fire("change",{selected:n})}),u.on("click",".selected-item .remover",function(e){var t,n=D(this).closest(".selected-item"),i=n.data("option"),s=i.data("option");i.removeClass("d-none"),D.each(c.find("option"),function(){this===s&&(this.selected=!1)}),n.remove(),H.exec(d.onItemDeselect,[s],c[0]),c.fire("itemdeselect",{option:s}),t=l.getSelected(),H.exec(d.onChange,[t],c[0]),c.fire("change",{selected:t}),e.preventDefault(),e.stopPropagation()}),e.on(M.events.keyup,function(){var e,t=this.value.toUpperCase(),n=p.find("li");for(e=0;e<n.length;e++)D(n[e]).hasClass("group-title")||(-1<n[e].getElementsByTagName("a")[0].innerHTML.toUpperCase().indexOf(t)?n[e].style.display="":n[e].style.display="none")}),e.on(M.events.click,function(e){e.preventDefault(),e.stopPropagation()}),h.on(M.events.click,function(e){e.preventDefault(),e.stopPropagation()})},disable:function(){this.element.data("disabled",!0),this.element.closest(".select").addClass("disabled")},enable:function(){this.element.data("disabled",!1),this.element.closest(".select").removeClass("disabled")},toggleState:function(){this.elem.disabled?this.disable():this.enable()},reset:function(e){var t,n=this.element,i=this.options,s=n.find("option"),a=n.closest(".select");D.each(s,function(){this.selected=!H.isNull(e)&&this.defaultSelected}),this.list.find("li").remove(),a.find(".select-input").html(""),this._createOptions(),t=this.getSelected(),H.exec(i.onChange,[t],n[0]),n.fire("change",{selected:t})},getSelected:function(){var e=this.element,t=[];return e.find("option").each(function(){this.selected&&t.push(this.value)}),t},val:function(e){var t,n,i,s,a,o,r=this.element,l=this.options,c=r.siblings(".select-input"),d=r.find("option"),h=this.list.find("li"),u=[],p=void 0!==r.attr("multiple");if(H.isNull(e))return D.each(d,function(){this.selected&&u.push(this.value)}),p?u:u[0];D.each(d,function(){this.selected=!1}),h.removeClass("active"),c.html(""),!1===Array.isArray(e)&&(e=[e]),D.each(e,function(){for(n=0;n<d.length;n++)if(t=d[n],i=H.isValue(t.getAttribute("data-template"))?t.getAttribute("data-template").replace("$1",t.text):t.text,""+t.value==""+this){t.selected=!0;break}for(n=0;n<h.length;n++)if(s=D(h[n]),""+s.attr("data-value")==""+this){p?(s.addClass("d-none"),(a=D("<div>").addClass("selected-item").addClass(l.clsSelectedItem).html("<span class='title'>"+i+"</span>").appendTo(c)).data("option",s),D("<span>").addClass("remover").addClass(l.clsSelectedItemRemover).html("&times;").appendTo(a)):(s.addClass("active"),c.html(i));break}}),o=this.getSelected(),H.exec(l.onChange,[o],r[0]),r.fire("change",{selected:o})},data:function(e){var n,i=this.element;i.empty(),"string"==typeof e?i.html(e):H.isObject(e)&&D.each(e,function(e,t){H.isObject(t)?(n=D("<optgroup label=''>").attr("label",e).appendTo(i),D.each(t,function(e,t){D("<option>").attr("value",e).text(t).appendTo(n)})):D("<option>").attr("value",e).text(t).appendTo(i)}),this._createOptions()},changeAttribute:function(e){"disabled"===e&&this.toggleState()},destroy:function(){var e=this.element,t=e.closest(".select"),n=t.find(".drop-container"),i=e.siblings(".select-input"),s=n.find("input"),a=n.find("ul"),o=t.find(".input-clear-button");return t.off(M.events.click),t.off(M.events.click,".input-clear-button"),i.off(M.events.click),s.off(M.events.blur),s.off(M.events.focus),a.off(M.events.click,"li"),s.off(M.events.keyup),n.off(M.events.click),o.off(M.events.click),n.data("dropdown").destroy(),e}};D(document).on(M.events.click,function(){D(".select").removeClass("focused")},{ns:"blur-select-elements"}),M.plugin("select",At);var Pt={sidebarDeferred:0,shadow:!0,position:"left",size:290,shift:null,staticShift:null,toggle:null,duration:METRO_ANIMATION_DURATION,static:null,menuItemClick:!0,onOpen:M.noop,onClose:M.noop,onToggle:M.noop,onStaticSet:M.noop,onStaticLoss:M.noop,onSidebarCreate:M.noop};M.sidebarSetup=function(e){Pt=D.extend({},Pt,e)},window.metroSidebarSetup,M.sidebarSetup(window.metroSidebarSetup);var Nt={name:"Sidebar",init:function(e,t){return this.options=D.extend({},Pt,e),this.elem=t,this.element=D(t),this.toggle_element=null,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"sidebar"),this._createStructure(),this._createEvents(),D(window).resize(),this._checkStatic(),H.exec(t.onSidebarCreate,null,e[0]),e.fire("sidebarcreate")},_createStructure:function(){var e=this.element,t=this.options,n=e.find(".sidebar-header"),i=M.sheet;e.addClass("sidebar").addClass("on-"+t.position),290!==t.size&&(H.addCssRule(i,".sidebar","width: "+t.size+"px;"),"left"===t.position?H.addCssRule(i,".sidebar.on-left","left: "+-t.size+"px;"):H.addCssRule(i,".sidebar.on-right","right: "+-t.size+"px;")),!0===t.shadow&&e.addClass("sidebar-shadow"),void 0===e.attr("id")&&e.attr("id",H.elementId("sidebar")),null!==t.toggle&&0<D(t.toggle).length&&(this.toggle_element=D(t.toggle)),0<n.length&&void 0!==n.data("image")&&n.css({backgroundImage:"url("+n.data("image")+")"}),null!==t.static&&null!==t.staticShift&&("left"===t.position?H.addCssRule(i,"@media screen and "+M.media_queries[t.static.toUpperCase()],t.staticShift+"{margin-left: "+t.size+"px; width: calc(100% - "+t.size+"px);}"):H.addCssRule(i,"@media screen and "+M.media_queries[t.static.toUpperCase()],t.staticShift+"{margin-right: "+t.size+"px; width: calc(100% - "+t.size+"px);}"))},_createEvents:function(){var t=this,e=this.element,n=this.options,i=this.toggle_element;null!==i?i.on(M.events.click,function(e){t.toggle(),e.stopPropagation()}):n.toggle&&D.document().on("click",n.toggle,function(e){t.toggle(),e.stopPropagation()}),null!==n.static&&-1<["fs","sm","md","lg","xl","xxl"].indexOf(n.static)&&D(window).on(M.events.resize,function(){t._checkStatic()},{ns:e.attr("id")}),!0===n.menuItemClick&&e.on(M.events.click,".sidebar-menu li > a",function(e){t.close(),e.stopPropagation()}),e.on(M.events.click,".sidebar-menu .js-sidebar-close",function(e){t.close(),e.stopPropagation()}),e.on(M.events.click,function(e){e.stopPropagation()})},_checkStatic:function(){var e=this.element,t=this.options;H.mediaExist(t.static)&&!e.hasClass("static")&&(e.addClass("static"),e.data("opened",!1).removeClass("open"),null!==t.shift&&D.each(t.shift.split(","),function(){D(""+this).animate({left:0},t.duration)}),H.exec(t.onStaticSet,null,e[0]),e.fire("staticset")),H.mediaExist(t.static)||(e.removeClass("static"),H.exec(t.onStaticLoss,null,e[0]),e.fire("staticloss"))},isOpen:function(){return!0===this.element.data("opened")},open:function(){var e=this.element,t=this.options;e.hasClass("static")||(e.data("opened",!0).addClass("open"),null!==t.shift&&D(t.shift).animate({left:e.outerWidth()},t.duration),H.exec(t.onOpen,null,e[0]),e.fire("open"))},close:function(){var e=this.element,t=this.options;e.hasClass("static")||(e.data("opened",!1).removeClass("open"),null!==t.shift&&D(t.shift).animate({left:0},t.duration),H.exec(t.onClose,null,e[0]),e.fire("close"))},toggle:function(){this.isOpen()?this.close():this.open(),H.exec(this.options.onToggle,null,this.element[0]),this.element.fire("toggle")},changeAttribute:function(e){},destroy:function(){var e=this.element,t=this.options,n=this.toggle_element;return null!==n&&n.off(M.events.click),null!==t.static&&-1<["fs","sm","md","lg","xl","xxl"].indexOf(t.static)&&D(window).off(M.events.resize,{ns:e.attr("id")}),!0===t.menuItemClick&&e.off(M.events.click,".sidebar-menu li > a"),e.off(M.events.click,".sidebar-menu .js-sidebar-close"),e}};M.plugin("sidebar",Nt);var Rt={doublesliderDeferred:0,roundValue:!0,min:0,max:100,accuracy:0,showMinMax:!(M.sidebar={isSidebar:function(e){return H.isMetroObject(e,"sidebar")},open:function(e){this.isSidebar(e)&&M.getPlugin(D(e)[0],"sidebar").open()},close:function(e){this.isSidebar(e)&&M.getPlugin(D(e)[0],"sidebar").close()},toggle:function(e){this.isSidebar(e)&&M.getPlugin(D(e)[0],"sidebar").toggle()},isOpen:function(e){if(this.isSidebar(e))return M.getPlugin(D(e)[0],"sidebar").isOpen()}}),minMaxPosition:M.position.TOP,valueMin:null,valueMax:null,hint:!1,hintAlways:!1,hintPositionMin:M.position.TOP,hintPositionMax:M.position.TOP,hintMaskMin:"$1",hintMaskMax:"$1",target:null,size:0,clsSlider:"",clsBackside:"",clsComplete:"",clsMarker:"",clsMarkerMin:"",clsMarkerMax:"",clsHint:"",clsHintMin:"",clsHintMax:"",clsMinMax:"",clsMin:"",clsMax:"",onStart:M.noop,onStop:M.noop,onMove:M.noop,onChange:M.noop,onChangeValue:M.noop,onFocus:M.noop,onBlur:M.noop,onDoubleSliderCreate:M.noop};M.doubleSliderSetup=function(e){Rt=D.extend({},Rt,e)},window.metroDoubleSliderSetup,M.doubleSliderSetup(window.metroDoubleSliderSetup);var Ft={name:"DoubleSlider",init:function(e,t){return this.options=D.extend({},Rt,e),this.elem=t,this.element=D(t),this.slider=null,this.valueMin=null,this.valueMax=null,this.keyInterval=!1,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"doubleslider"),this.valueMin=H.isValue(t.valueMin)?+t.valueMin:+t.min,this.valueMax=H.isValue(t.valueMax)?+t.valueMax:+t.max,this._createSlider(),this._createEvents(),this.val(this.valueMin,this.valueMax),H.exec(t.onDoubleSliderCreate,null,e[0]),e.fire("doubleslidercreate")},_createSlider:function(){var e,t=this.element,n=this.options,i=D("<div>").addClass("slider").addClass(n.clsSlider).addClass(this.elem.className),s=D("<div>").addClass("backside").addClass(n.clsBackside),a=D("<div>").addClass("complete").addClass(n.clsComplete),o=D("<button>").attr("type","button").addClass("marker marker-min").addClass(n.clsMarker).addClass(n.clsMarkerMin),r=D("<button>").attr("type","button").addClass("marker marker-max").addClass(n.clsMarker).addClass(n.clsMarkerMax),l=D("<div>").addClass("hint hint-min").addClass(n.hintPositionMin+"-side").addClass(n.clsHint).addClass(n.clsHintMin),c=D("<div>").addClass("hint hint-max").addClass(n.hintPositionMax+"-side").addClass(n.clsHint).addClass(n.clsHintMax),d=H.elementId("slider");if(M.checkRuntime(t,"doubleslider"),i.attr("id",d),0<n.size&&i.outerWidth(n.size),i.insertBefore(t),t.appendTo(i),s.appendTo(i),a.appendTo(i),o.appendTo(i),r.appendTo(i),l.appendTo(o),c.appendTo(r),!0===n.hintAlways&&D([l,c]).css({display:"block"}).addClass("permanent-hint"),!0===n.showMinMax){var h=D("<div>").addClass("slider-min-max clear").addClass(n.clsMinMax);D("<span>").addClass("place-left").addClass(n.clsMin).html(n.min).appendTo(h),D("<span>").addClass("place-right").addClass(n.clsMax).html(n.max).appendTo(h),n.minMaxPosition===M.position.TOP?h.insertBefore(i):h.insertAfter(i)}if(!(t[0].className="")===n.copyInlineStyles)for(e=0;e<t[0].style.length;e++)i.css(t[0].style[e],t.css(t[0].style[e]));t.is(":disabled")?this.disable():this.enable(),this.slider=i},_createEvents:function(){var t=this,n=this.element,i=this.slider,s=this.options,e=i.find(".marker");e.on(M.events.startAll,function(){var e=D(this).find(".hint");!0===s.hint&&!0!==s.hintAlways&&e.fadeIn(300),D(document).on(M.events.moveAll,function(e){t._move(e),H.exec(s.onMove,[t.valueMin,t.valueMax],n[0]),n.fire("move",{val:[t.valueMin,t.valueMax]})},{ns:i.attr("id")}),D(document).on(M.events.stopAll,function(){D(document).off(M.events.moveAll,{ns:i.attr("id")}),D(document).off(M.events.stopAll,{ns:i.attr("id")}),!0!==s.hintAlways&&e.fadeOut(300),H.exec(s.onStop,[t.valueMin,t.valueMax],n[0]),n.fire("stop",{val:[t.valueMin,t.valueMax]})},{ns:i.attr("id")}),H.exec(s.onStart,[t.valueMin,t.valueMax],n[0]),n.fire("start",{val:[t.valueMin,t.valueMax]})}),e.on(M.events.focus,function(){H.exec(s.onFocus,[t.valueMin,t.valueMax],n[0]),n.fire("focus",{val:[t.valueMin,t.valueMax]})}),e.on(M.events.blur,function(){H.exec(s.onBlur,[t.valueMin,t.valueMax],n[0]),n.fire("blur",{val:[t.valueMin,t.valueMax]})}),D(window).on(M.events.resize,function(){t.val(t.valueMin,t.valueMax)},{ns:i.attr("id")})},_convert:function(e,t){var n=this.slider,i=this.options,s=n.outerWidth()-n.find(".marker").outerWidth();switch(t){case"pix2prc":return 100*e/s;case"pix2val":return this._convert(e,"pix2prc")*((i.max-i.min)/100)+i.min;case"val2prc":return(e-i.min)/((i.max-i.min)/100);case"prc2pix":return e/(100/s);case"val2pix":return this._convert(this._convert(e,"val2prc"),"prc2pix")}return 0},_correct:function(e){var t,n=e,i=this.options.accuracy,s=this.options.min,a=this.options.max;return 0===i||isNaN(i)?n:((n=Math.round(e/i)*i)<s&&(n=s),a<n&&(n=a),n.toFixed((t=i)%1==0?0:t.toString().split(".")[1].length))},_move:function(e){var t,n,i,s=D(e.target).hasClass("marker-min"),a=this.slider,o=(this.options,a.offset()),r=a.find(".marker").outerWidth(),l=a.find(".marker-min"),c=a.find(".marker-max"),d=a.outerWidth();t=H.pageXY(e).x-o.left-r/2,i=s?(n=0,parseInt(c.css("left"))-r):(n=parseInt(l.css("left"))+r,d-r),t<n||i<t||(this[s?"valueMin":"valueMax"]=this._correct(this._convert(t,"pix2val")),this._redraw())},_hint:function(){var s=this,a=this.options;this.slider.find(".hint").each(function(){var e=D(this),t=e.hasClass("hint-min"),n=t?a.hintMaskMin:a.hintMaskMax,i=+(t?s.valueMin:s.valueMax)||0;e.text(n.replace("$1",i.toFixed(H.decCount(a.accuracy))))})},_value:function(){var t,e=this.element,n=this.options,i=+this.valueMin||0,s=+this.valueMax||0;if(n.roundValue&&(i=i.toFixed(H.decCount(n.accuracy)),s=s.toFixed(H.decCount(n.accuracy))),t=[i,s].join(", "),"INPUT"===e[0].tagName&&e.val(t),null!==n.target){var a=D(n.target);0!==a.length&&D.each(a,function(){var e=D(this);"INPUT"===this.tagName?e.val(t):e.text(t),e.trigger("change")})}H.exec(n.onChangeValue,[t],e[0]),e.fire("changevalue",{val:t}),H.exec(n.onChange,[t],e[0]),e.fire("change",{val:t})},_marker:function(){var e=this.slider,t=(this.options,e.find(".marker-min")),n=e.find(".marker-max"),i=e.find(".complete"),s=parseInt(H.getStyleOne(t,"width")),a=H.isVisible(e);a&&D([t,n]).css({"margin-top":0,"margin-left":0}),a?(t.css("left",this._convert(this.valueMin,"val2pix")),n.css("left",this._convert(this.valueMax,"val2pix"))):(t.css({left:this._convert(this.valueMin,"val2prc")+"%","margin-top":0===this._convert(this.valueMin,"val2prc")?0:-1*s/2}),n.css({left:this._convert(this.valueMax,"val2prc")+"%","margin-top":0===this._convert(this.valueMax,"val2prc")?0:-1*s/2})),i.css({left:this._convert(this.valueMin,"val2pix"),width:this._convert(this.valueMax,"val2pix")-this._convert(this.valueMin,"val2pix")})},_redraw:function(){this._marker(),this._value(),this._hint()},val:function(e,t){var n=this.options;if(!H.isValue(e)&&!H.isValue(t))return[this.valueMin,this.valueMax];e<n.min&&(e=n.min),t<n.min&&(t=n.min),e>n.max&&(e=n.max),t>n.max&&(t=n.max),this.valueMin=this._correct(e),this.valueMax=this._correct(t),this._redraw()},changeValue:function(){var e=this.element,t=+e.attr("data-value-min"),n=+e.attr("data-value-max");this.val(t,n)},disable:function(){var e=this.element;e.data("disabled",!0),e.parent().addClass("disabled")},enable:function(){var e=this.element;e.data("disabled",!1),e.parent().removeClass("disabled")},toggleState:function(){this.elem.disabled?this.disable():this.enable()},changeAttribute:function(e){switch(e){case"data-value-min":case"data-value-max":this.changeValue();break;case"disabled":this.toggleState()}},destroy:function(){var e=this.element,t=this.slider,n=t.find(".marker");return n.off(M.events.startAll),n.off(M.events.focus),n.off(M.events.blur),n.off(M.events.keydown),n.off(M.events.keyup),t.off(M.events.click),D(window).off(M.events.resize,{ns:t.attr("id")}),e}};M.plugin("doubleslider",Ft);var Lt={sliderDeferred:0,roundValue:!0,min:0,max:100,accuracy:0,showMinMax:!1,minMaxPosition:M.position.TOP,value:0,buffer:0,hint:!1,hintAlways:!1,hintPosition:M.position.TOP,hintMask:"$1",vertical:!1,target:null,returnType:"value",size:0,clsSlider:"",clsBackside:"",clsComplete:"",clsBuffer:"",clsMarker:"",clsHint:"",clsMinMax:"",clsMin:"",clsMax:"",onStart:M.noop,onStop:M.noop,onMove:M.noop,onSliderClick:M.noop,onChange:M.noop,onChangeValue:M.noop,onChangeBuffer:M.noop,onFocus:M.noop,onBlur:M.noop,onSliderCreate:M.noop};M.sliderSetup=function(e){Lt=D.extend({},Lt,e)},window.metroSliderSetup,M.sliderSetup(window.metroSliderSetup);var Vt={name:"Slider",init:function(e,t){return this.options=D.extend({},Lt,e),this.elem=t,this.element=D(t),this.slider=null,this.value=0,this.percent=0,this.pixel=0,this.buffer=0,this.keyInterval=!1,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"slider"),this._createSlider(),this._createEvents(),this.buff(t.buffer),this.val(t.value),H.exec(t.onSliderCreate,null,e[0]),e.fire("slidercreate")},_createSlider:function(){var e,t=this.element,n=this.options,i=t.prev(),s=t.parent(),a=D("<div>").addClass("slider "+t[0].className).addClass(n.clsSlider),o=D("<div>").addClass("backside").addClass(n.clsBackside),r=D("<div>").addClass("complete").addClass(n.clsComplete),l=D("<div>").addClass("buffer").addClass(n.clsBuffer),c=D("<button>").attr("type","button").addClass("marker").addClass(n.clsMarker),d=D("<div>").addClass("hint").addClass(n.hintPosition+"-side").addClass(n.clsHint),h=H.elementId("slider");if(M.checkRuntime(t,"slider"),a.attr("id",h),0<n.size&&(!0===n.vertical?a.outerHeight(n.size):a.outerWidth(n.size)),!0===n.vertical&&a.addClass("vertical-slider"),0===i.length?s.prepend(a):a.insertAfter(i),!0===n.hintAlways&&d.css({display:"block"}).addClass("permanent-hint"),t.appendTo(a),o.appendTo(a),r.appendTo(a),l.appendTo(a),c.appendTo(a),d.appendTo(c),!0===n.showMinMax){var u=D("<div>").addClass("slider-min-max clear").addClass(n.clsMinMax);D("<span>").addClass("place-left").addClass(n.clsMin).html(n.min).appendTo(u),D("<span>").addClass("place-right").addClass(n.clsMax).html(n.max).appendTo(u),n.minMaxPosition===M.position.TOP?u.insertBefore(a):u.insertAfter(a)}if(!(t[0].className="")===n.copyInlineStyles)for(e=0;e<t[0].style.length;e++)a.css(t[0].style[e],t.css(t[0].style[e]));t.is(":disabled")?this.disable():this.enable(),this.slider=a},_createEvents:function(){var i=this,t=this.element,e=this.slider,s=this.options,n=e.find(".marker"),a=e.find(".hint");n.on(M.events.startAll,function(){!0===s.hint&&!0!==s.hintAlways&&a.fadeIn(300),D(document).on(M.events.moveAll,function(e){i._move(e),H.exec(s.onMove,[i.value,i.percent],t[0]),t.fire("move",{val:i.value,percent:i.percent})},{ns:e.attr("id"),passive:!1}),D(document).on(M.events.stopAll,function(){D(document).off(M.events.moveAll,{ns:e.attr("id")}),D(document).off(M.events.stopAll,{ns:e.attr("id")}),!0!==s.hintAlways&&a.fadeOut(300),H.exec(s.onStop,[i.value,i.percent],t[0]),t.fire("stop",{val:i.value,percent:i.percent})},{ns:e.attr("id")}),H.exec(s.onStart,[i.value,i.percent],t[0]),t.fire("start",{val:i.value,percent:i.percent})}),n.on(M.events.focus,function(){H.exec(s.onFocus,[i.value,i.percent],t[0]),t.fire("focus",{val:i.value,percent:i.percent})}),n.on(M.events.blur,function(){H.exec(s.onBlur,[i.value,i.percent],t[0]),t.fire("blur",{val:i.value,percent:i.percent})}),n.on(M.events.keydown,function(t){var e=t.keyCode?t.keyCode:t.which;if(-1!==[37,38,39,40].indexOf(e)){var n=0===s.accuracy?1:s.accuracy;i.keyInterval||(i.keyInterval=setInterval(function(){var e=i.value;37!==t.keyCode&&40!==t.keyCode||(e-n<s.min?e=s.min:e-=n),38!==t.keyCode&&39!==t.keyCode||(e+n>s.max?e=s.max:e+=n),i.value=i._correct(e),i.percent=i._convert(i.value,"val2prc"),i.pixel=i._convert(i.percent,"prc2pix"),i._redraw()},100),t.preventDefault())}}),n.on(M.events.keyup,function(){clearInterval(i.keyInterval),i.keyInterval=!1}),e.on(M.events.click,function(e){i._move(e),H.exec(s.onSliderClick,[i.value,i.percent],t[0]),t.fire("sliderclick",{val:i.value,percent:i.percent}),H.exec(s.onStop,[i.value,i.percent],t[0]),t.fire("stop",{val:i.value,percent:i.percent})}),D(window).on(M.events.resize,function(){i.val(i.value),i.buff(i.buffer)},{ns:e.attr("id")})},_convert:function(e,t){var n=this.slider,i=this.options,s=(!0===i.vertical?n.outerHeight():n.outerWidth())-n.find(".marker").outerWidth();switch(t){case"pix2prc":return 100*e/s;case"pix2val":return this._convert(e,"pix2prc")*((i.max-i.min)/100)+i.min;case"val2prc":return(e-i.min)/((i.max-i.min)/100);case"prc2pix":return e/(100/s);case"val2pix":return this._convert(this._convert(e,"val2prc"),"prc2pix")}return 0},_correct:function(e){var t=e,n=this.options.accuracy,i=this.options.min,s=this.options.max;return 0===n||isNaN(n)?t:((t=Math.round(e/n)*n)<i&&(t=i),s<t&&(t=s),t.toFixed(H.decCount(n)))},_move:function(e){var t,n,i=this.slider,s=this.options,a=i.offset(),o=i.find(".marker").outerWidth(),r=!0===s.vertical?i.outerHeight():i.outerWidth(),l=r-o;t=!0===s.vertical?H.pageXY(e).y-a.top:H.pageXY(e).x-a.left,(n=!0===s.vertical?r-t-o/2:t-o/2)<0||l<n||(this.value=this._correct(this._convert(n,"pix2val")),this.percent=this._convert(this.value,"val2prc"),this.pixel=this._convert(this.percent,"prc2pix"),this._redraw())},_hint:function(){var e=this.options,t=this.slider.find(".hint"),n=+this.value||0,i=+this.percent||0;e.roundValue&&(n=(H.isValue(n)?+n:0).toFixed(H.decCount(e.accuracy)),i=(H.isValue(i)?+i:0).toFixed(H.decCount(e.accuracy))),t.text(e.hintMask.replace("$1",n).replace("$2",i))},_value:function(){var e=this.element,t=this.options,n=(this.slider,"value"===t.returnType?this.value:this.percent),i=this.percent,s=this.buffer;if(t.roundValue&&(n=(H.isValue(n)?+n:0).toFixed(H.decCount(t.accuracy)),i=(H.isValue(i)?+i:0).toFixed(H.decCount(t.accuracy)),s=(H.isValue(s)?+s:0).toFixed(H.decCount(t.accuracy))),"INPUT"===e[0].tagName&&e.val(n),null!==t.target){var a=D(t.target);0!==a.length&&D.each(a,function(){var e=D(this);"INPUT"===this.tagName?e.val(n):e.text(n),e.trigger("change")})}H.exec(t.onChangeValue,[n],e[0]),e.fire("changevalue",{val:n}),H.exec(t.onChange,[n,i,s],e[0]),e.fire("change",{val:n,percent:i,buffer:s})},_marker:function(){var e=this.slider,t=this.options,n=e.find(".marker"),i=e.find(".complete"),s=!0===t.vertical?e.outerHeight():e.outerWidth(),a=parseInt(H.getStyleOne(n,"width")),o=H.isVisible(e);o&&n.css({"margin-top":0,"margin-left":0}),!0===t.vertical?(o?n.css("top",s-this.pixel):(n.css("top",100-this.percent+"%"),n.css("margin-top",a/2)),i.css("height",this.percent+"%")):(o?n.css("left",this.pixel):(n.css("left",this.percent+"%"),n.css("margin-left",0===this.percent?0:-1*a/2)),i.css("width",this.percent+"%"))},_redraw:function(){this._marker(),this._value(),this._hint()},_buffer:function(){var e=this.element,t=this.options,n=this.slider.find(".buffer");!0===t.vertical?n.css("height",this.buffer+"%"):n.css("width",this.buffer+"%"),H.exec(t.onChangeBuffer,[this.buffer],e[0]),e.fire("changebuffer",{val:this.buffer}),H.exec(t.onChange,[e.val(),this.percent,this.buffer],e[0]),e.fire("change",{val:e.val(),percent:this.percent,buffer:this.buffer})},val:function(e){var t=this.options;if(void 0===e||isNaN(e))return this.value;e<t.min&&(e=t.min),e>t.max&&(e=t.max),this.value=this._correct(e),this.percent=this._convert(this.value,"val2prc"),this.pixel=this._convert(this.percent,"prc2pix"),this._redraw()},buff:function(e){var t=this.slider.find(".buffer");return void 0===e||isNaN(e)?this.buffer:0!==t.length&&(100<(e=parseInt(e))&&(e=100),e<0&&(e=0),this.buffer=e,void this._buffer())},changeValue:function(){var e=this.element,t=this.options,n=e.attr("data-value");n<t.min&&(n=t.min),n>t.max&&(n=t.max),this.val(n)},changeBuffer:function(){var e=this.element,t=parseInt(e.attr("data-buffer"));t<0&&(t=0),100<t&&(t=100),this.buff(t)},disable:function(){this.element.data("disabled",!0),this.element.parent().addClass("disabled")},enable:function(){this.element.data("disabled",!1),this.element.parent().removeClass("disabled")},toggleState:function(){this.elem.disabled?this.disable():this.enable()},changeAttribute:function(e){switch(e){case"data-value":this.changeValue();break;case"data-buffer":this.changeBuffer();break;case"disabled":this.toggleState()}},destroy:function(){var e=this.element,t=this.slider,n=t.find(".marker");return n.off(M.events.startAll),n.off(M.events.focus),n.off(M.events.blur),n.off(M.events.keydown),n.off(M.events.keyup),t.off(M.events.click),D(window).off(M.events.resize,{ns:t.attr("id")}),e}};M.plugin("slider",Vt);var Bt={sorterDeferred:0,thousandSeparator:",",decimalSeparator:",",sortTarget:null,sortSource:null,sortDir:"asc",sortStart:!0,saveInitial:!0,onSortStart:M.noop,onSortStop:M.noop,onSortItemSwitch:M.noop,onSorterCreate:M.noop};M.sorterSetup=function(e){Bt=D.extend({},Bt,e)},window.metroSorterSetup,M.sorterSetup(window.metroSorterSetup);var Ht={name:"Sorter",init:function(e,t){return this.options=D.extend({},Bt,e),this.elem=t,this.element=D(t),this.initial=[],this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"sorter"),this._createStructure(),H.exec(t.onSorterCreate,null,e[0]),e.fire("sortercreate")},_createStructure:function(){var e=this.element,t=this.options;null===t.sortTarget&&(t.sortTarget=e.children()[0].tagName),this.initial=e.find(t.sortTarget).get(),!0===t.sortStart&&this.sort(t.sortDir)},_getItemContent:function(e){var t,n,i,s,a=this.options;if(H.isValue(a.sortSource)){if(t="",0<(n=e.getElementsByClassName(a.sortSource)).length)for(i=0;i<n.length;i++)t+=n[i].textContent;s=n[0].dataset.format}else t=e.textContent,s=e.dataset.format;if(t=(""+t).toLowerCase().replace(/[\n\r]+|[\s]{2,}/g," ").trim(),H.isValue(s))switch(-1===["number","int","float","money"].indexOf(s)||","===a.thousandSeparator&&"."===a.decimalSeparator||(t=H.parseNumber(t,a.thousandSeparator,a.decimalSeparator)),s){case"date":t=H.isDate(t)?new Date(t):"";break;case"number":t=Number(t);break;case"int":t=parseInt(t);break;case"float":t=parseFloat(t);break;case"money":t=H.parseMoney(t);break;case"card":t=H.parseCard(t);break;case"phone":t=H.parsePhone(t)}return t},sort:function(e){var t,n,a=this,o=this.element,r=this.options,i=H.elementId("temp");void 0!==e&&(r.sortDir=e),0!==(t=o.find(r.sortTarget).get()).length&&(n=D("<div>").attr("id",i).insertBefore(D(o.find(r.sortTarget)[0])),H.exec(r.onSortStart,[t],o[0]),o.fire("sortstart",{items:t}),t.sort(function(e,t){var n=a._getItemContent(e),i=a._getItemContent(t),s=0;return n<i?-1:i<n?1:(0!==s&&(H.exec(r.onSortItemSwitch,[e,t,s],o[0]),o.fire("sortitemswitch",{a:e,b:t,result:s})),s)}),"desc"===r.sortDir&&t.reverse(),o.find(r.sortTarget).remove(),D.each(t,function(){var e=D(this);e.insertAfter(n),n=e}),D("#"+i).remove(),H.exec(r.onSortStop,[t],o[0]),o.fire("sortstop"))},reset:function(){var e,t,n=this.element,i=this.options,s=H.uniqueId();0!==(e=this.initial).length&&(t=D("<div>").attr("id",s).insertBefore(D(n.find(i.sortTarget)[0])),n.find(i.sortTarget).remove(),D.each(e,function(){var e=D(this);e.insertAfter(t),t=e}),D("#"+s).remove())},changeAttribute:function(e){var t,n,i=this,s=this.element,a=this.options;switch(e){case"data-sort-dir":""!==(n=s.attr("data-sort-dir").trim())&&(a.sortDir=n,i.sort());break;case"data-sort-content":""!==(t=s.attr("data-sort-content").trim())&&(a.sortContent=t,i.sort())}},destroy:function(){return this.element}};M.plugin("sorter",Ht);var zt={spinnerDeferred:0,step:1,plusIcon:"<span class='default-icon-plus'></span>",minusIcon:"<span class='default-icon-minus'></span>",buttonsPosition:"default",defaultValue:0,minValue:null,maxValue:null,fixed:0,repeatThreshold:1e3,hideCursor:!(M.sorter={create:function(e,t){return H.$()(e).sorter(t)},isSorter:function(e){return H.isMetroObject(e,"sorter")},sort:function(e,t){if(!this.isSorter(e))return!1;void 0===t&&(t="asc"),M.getPlugin(D(e)[0],"sorter").sort(t)},reset:function(e){if(!this.isSorter(e))return!1;M.getPlugin(D(e)[0],"sorter").reset()}}),clsSpinner:"",clsSpinnerInput:"",clsSpinnerButton:"",clsSpinnerButtonPlus:"",clsSpinnerButtonMinus:"",onBeforeChange:M.noop_true,onChange:M.noop,onPlusClick:M.noop,onMinusClick:M.noop,onArrowUp:M.noop,onArrowDown:M.noop,onButtonClick:M.noop,onArrowClick:M.noop,onSpinnerCreate:M.noop};M.spinnerSetup=function(e){zt=D.extend({},zt,e)},window.metroSpinnerSetup,M.spinnerSetup(window.metroSpinnerSetup);var jt={name:"Spinner",init:function(e,t){return this.options=D.extend({},zt,e),this.elem=t,this.element=D(t),this.repeat_timer=!1,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"spinner"),this._createStructure(),this._createEvents(),H.exec(t.onSpinnerCreate,null,e[0]),e.fire("spinnercreate")},_createStructure:function(){var e=this.element,t=this.options,n=D("<div>").addClass("spinner").addClass("buttons-"+t.buttonsPosition).addClass(e[0].className).addClass(t.clsSpinner),i=D("<button>").attr("type","button").addClass("button spinner-button spinner-button-plus").addClass(t.clsSpinnerButton+" "+t.clsSpinnerButtonPlus).html(t.plusIcon),s=D("<button>").attr("type","button").addClass("button spinner-button spinner-button-minus").addClass(t.clsSpinnerButton+" "+t.clsSpinnerButtonMinus).html(t.minusIcon),a=e.val().trim();H.isValue(a)||e.val(0),e[0].className="",n.insertBefore(e),e.appendTo(n).addClass(t.clsSpinnerInput),e.addClass("original-input"),i.appendTo(n),s.appendTo(n),!0===t.hideCursor&&n.addClass("hide-cursor"),!0===t.disabled||e.is(":disabled")?this.disable():this.enable()},_createEvents:function(){var a=this,o=this.element,r=this.options,t=o.closest(".spinner"),e=t.find(".spinner-button"),l=function(e,t){var n=o.val(),i=Number(o.val()),s=Number(r.step);e?i+=s:i-=s,a._setValue(i.toFixed(r.fixed),!0),H.exec(e?r.onPlusClick:r.onMinusClick,[n,i,o.val()],o[0]),o.fire(e?"plusclick":"minusclick",{curr:n,val:i,elementVal:o.val()}),H.exec(e?r.onArrowUp:r.onArrowDown,[n,i,o.val()],o[0]),o.fire(e?"arrowup":"arrowdown",{curr:n,val:i,elementVal:o.val()}),H.exec(r.onButtonClick,[n,i,o.val(),e?"plus":"minus"],o[0]),o.fire("buttonclick",{button:e?"plus":"minus",curr:n,val:i,elementVal:o.val()}),H.exec(r.onArrowClick,[n,i,o.val(),e?"plus":"minus"],o[0]),o.fire("arrowclick",{button:e?"plus":"minus",curr:n,val:i,elementVal:o.val()}),setTimeout(function(){a.repeat_timer&&l(e,100)},t)};t.on(M.events.click,function(e){D(".focused").removeClass("focused"),t.addClass("focused"),e.preventDefault(),e.stopPropagation()}),e.on(M.events.start,function(e){var t=D(this).closest(".spinner-button").hasClass("spinner-button-plus");e.preventDefault(),a.repeat_timer=!0,l(t,r.repeatThreshold)}),e.on(M.events.stop,function(){a.repeat_timer=!1}),o.on(M.events.keydown,function(e){e.keyCode!==M.keyCode.UP_ARROW&&e.keyCode!==M.keyCode.DOWN_ARROW||(a.repeat_timer=!0,l(e.keyCode===M.keyCode.UP_ARROW,r.repeatThreshold))}),t.on(M.events.keyup,function(){a.repeat_timer=!1})},_setValue:function(e,t){var n=this.element,i=this.options;!0===H.exec(i.onBeforeChange,[e],n[0])&&(H.isValue(i.maxValue)&&e>Number(i.maxValue)&&(e=Number(i.maxValue)),H.isValue(i.minValue)&&e<Number(i.minValue)&&(e=Number(i.minValue)),n.val(e),H.exec(i.onChange,[e],n[0]),!0===t&&n.fire("change",{val:e}))},val:function(e){var t=this.element,n=this.options;if(!H.isValue(e))return t.val();this._setValue(e.toFixed(n.fixed),!0)},toDefault:function(){var e=this.element,t=this.options,n=H.isValue(t.defaultValue)?Number(t.defaultValue):0;this._setValue(n.toFixed(t.fixed),!0),H.exec(t.onChange,[n],e[0]),e.fire("change",{val:n})},disable:function(){this.element.data("disabled",!0),this.element.parent().addClass("disabled")},enable:function(){this.element.data("disabled",!1),this.element.parent().removeClass("disabled")},toggleState:function(){this.elem.disabled?this.disable():this.enable()},changeAttribute:function(e){var t,n=this,i=this.element;switch(e){case"disabled":this.toggleState();break;case"value":t=i.attr("value").trim(),H.isValue(t)&&n._setValue(Number(t),!1)}},destroy:function(){var e=this.element,t=e.closest(".spinner"),n=t.find(".spinner-button");return t.off(M.events.click),n.off(M.events.start),n.off(M.events.stop),e.off(M.events.keydown),t.off(M.events.keyup),e}};M.plugin("spinner",jt),D(document).on(M.events.click,function(){D(".spinner").removeClass("focused")});var Ut={splitterDeferred:0,splitMode:"horizontal",splitSizes:null,gutterSize:4,minSizes:null,children:"*",gutterClick:"expand",saveState:!1,onResizeStart:M.noop,onResizeStop:M.noop,onResizeSplit:M.noop,onSplitterCreate:M.noop};M.splitterSetup=function(e){Ut=D.extend({},Ut,e)},window.metroSplitterSetup,M.splitterSetup(window.metroSplitterSetup);var Wt={name:"Splitter",init:function(e,t){return this.options=D.extend({},Ut,e),this.elem=t,this.element=D(t),this.storage=H.isValue(M.storage)?M.storage:null,this.storageKey="SPLITTER:",this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"splitter"),this._createStructure(),this._createEvents(),H.exec(t.onSplitterCreate,null,e[0]),e.fire("splittercreate")},_createStructure:function(){var e,t=this.element,n=this.options,i=t.children(n.children).addClass("split-block"),s=[],a="horizontal"===n.splitMode?"width":"height";for(H.isValue(t.attr("id"))||t.attr("id",H.elementId("splitter")),t.addClass("splitter"),"vertical"===n.splitMode.toLowerCase()&&t.addClass("vertical"),e=0;e<i.length-1;e++)D("<div>").addClass("gutter").css(a,n.gutterSize).insertAfter(D(i[e]));if(this._setSize(),H.isValue(n.minSizes))if(String(n.minSizes).contains(","))for(s=H.strToArray(n.minSizes),e=0;e<s.length;e++)D(i[e]).data("min-size",s[e]),i[e].style.setProperty("min-"+a,String(s[e]).contains("%")?s[e]:String(s[e]).replace("px","")+"px","important");else D.each(i,function(){this.style.setProperty("min-"+a,String(n.minSizes).contains("%")?n.minSizes:String(n.minSizes).replace("px","")+"px","important")});n.saveState&&null!==this.storage&&this._getSize()},_setSize:function(){var e,t,n,i=this.element,s=this.options,a=i.children(".split-block");if(e=i.children(".gutter"),H.isValue(s.splitSizes))for(t=H.strToArray(s.splitSizes),n=0;n<t.length;n++)D(a[n]).css({flexBasis:"calc("+t[n]+"% - "+e.length*s.gutterSize+"px)"});else a.css({flexBasis:"calc("+100/a.length+"% - "+e.length*s.gutterSize+"px)"})},_createEvents:function(){var n=this,d=this.element,h=this.options,u=d.children(".gutter"),p=d.attr("id");u.on(M.events.startAll,function(e){var i="horizontal"===h.splitMode?d.width():d.height(),s=D(this),a=s.prev(".split-block"),o=s.next(".split-block"),r=100*("horizontal"===h.splitMode?a.outerWidth(!0):a.outerHeight(!0))/i,l=100*("horizontal"===h.splitMode?o.outerWidth(!0):o.outerHeight(!0))/i,c=H.getCursorPosition(d[0],e);s.addClass("active"),a.addClass("stop-pointer"),o.addClass("stop-pointer"),H.exec(h.onResizeStart,[c,s[0],a[0],o[0]],d[0]),d.fire("resizestart",{pos:c,gutter:s[0],prevBlock:a[0],nextBlock:o[0]}),D(window).on(M.events.moveAll,function(e){var t,n=H.getCursorPosition(d[0],e);t="horizontal"===h.splitMode?100*n.x/i-100*c.x/i:100*n.y/i-100*c.y/i,a.css("flex-basis","calc("+(r+t)+"% - "+u.length*h.gutterSize+"px)"),o.css("flex-basis","calc("+(l-t)+"% - "+u.length*h.gutterSize+"px)"),H.exec(h.onResizeSplit,[n,s[0],a[0],o[0]],d[0]),d.fire("resizesplit",{pos:n,gutter:s[0],prevBlock:a[0],nextBlock:o[0]})},{ns:p}),D(window).on(M.events.stopAll,function(e){var t;a.removeClass("stop-pointer"),o.removeClass("stop-pointer"),n._saveSize(),s.removeClass("active"),D(window).off(M.events.moveAll,{ns:p}),D(window).off(M.events.stopAll,{ns:p}),t=H.getCursorPosition(d[0],e),H.exec(h.onResizeStop,[t,s[0],a[0],o[0]],d[0]),d.fire("resizestop",{pos:t,gutter:s[0],prevBlock:a[0],nextBlock:o[0]})},{ns:p})})},_saveSize:function(){var e=this.element,t=this.options,n=this.storage,i=[];!0===t.saveState&&null!==n&&(D.each(e.children(".split-block"),function(){var e=D(this);i.push(e.css("flex-basis"))}),n.setItem(this.storageKey+e.attr("id"),i))},_getSize:function(){var e=this.element,t=this.options,n=this.storage,i=[];!0===t.saveState&&null!==n&&(i=n.getItem(this.storageKey+e.attr("id")),D.each(e.children(".split-block"),function(e,t){var n=D(t);H.isValue(i)&&H.isValue(i[e])&&n.css("flex-basis",i[e])}))},size:function(e){var t=this.options;return H.isValue(e)&&(t.splitSizes=e,this._setSize()),this},changeAttribute:function(e){var t,n=this,i=this.element;"data-split-sizes"===e&&(t=i.attr("data-split-sizes"),n.size(t))},destroy:function(){var e=this.element;return e.children(".gutter").off(M.events.start),e}};M.plugin("splitter",Wt);var Yt={stepperDeferred:0,view:M.stepperView.SQUARE,steps:3,step:1,stepClick:!1,clsStepper:"",clsStep:"",clsComplete:"",clsCurrent:"",onStep:M.noop,onStepClick:M.noop,onStepperCreate:M.noop};M.stepperSetup=function(e){Yt=D.extend({},Yt,e)},window.metroStepperSetup,M.stepperSetup(window.metroStepperSetup);var Jt={name:"Stepper",init:function(e,t){return this.options=D.extend({},Yt,e),this.elem=t,this.element=D(t),this.current=0,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"stepper"),t.step<=0&&(t.step=1),this._createStepper(),this._createEvents(),H.exec(t.onStepperCreate,null,e[0]),e.fire("steppercreate")},_createStepper:function(){var e,t=this.element,n=this.options;for(t.addClass("stepper").addClass(n.view).addClass(n.clsStepper),e=1;e<=n.steps;e++)D("<span>").addClass("step").addClass(n.clsStep).data("step",e).html("<span>"+e+"</span>").appendTo(t);this.current=1,this.toStep(n.step)},_createEvents:function(){var t=this,n=this.element,i=this.options;n.on(M.events.click,".step",function(){var e=D(this).data("step");!0===i.stepClick&&(t.toStep(e),H.exec(i.onStepClick,[e],n[0]),n.fire("stepclick",{step:e}))})},next:function(){var e=this.element,t=(this.options,e.find(".step"));this.current+1>t.length||(this.current++,this.toStep(this.current))},prev:function(){this.element,this.options;this.current-1!=0&&(this.current--,this.toStep(this.current))},last:function(){var e=this.element;this.options;this.toStep(e.find(".step").length)},first:function(){this.toStep(1)},toStep:function(e){var t=this.element,n=this.options,i=D(t.find(".step").get(e-1));0!==i.length&&(this.current=e,t.find(".step").removeClass("complete current").removeClass(n.clsCurrent).removeClass(n.clsComplete),i.addClass("current").addClass(n.clsCurrent),i.prevAll().addClass("complete").addClass(n.clsComplete),H.exec(n.onStep,[this.current],t[0]),t.fire("step",{step:this.current}))},changeAttribute:function(e){},destroy:function(){var e=this.element;return e.off(M.events.click,".step"),e}};M.plugin("stepper",Jt);var Gt=function(e){return new Gt.init(e)};Gt.prototype={setKey:function(e){this.key=e},getKey:function(){return this.key},setItem:function(e,t){this.storage.setItem(this.key+":"+e,JSON.stringify(t))},getItem:function(e,t,n){var i,s;s=this.storage.getItem(this.key+":"+e);try{i=JSON.parse(s,n)}catch(e){i=null}return H.nvl(i,t)},getItemPart:function(e,t,n,i){var s,a=this.getItem(e,n,i);for(t=t.split("->"),s=0;s<t.length;s++)a=a[t[s]];return a},delItem:function(e){this.storage.removeItem(this.key+":"+e)},size:function(e){var t;switch(e){case"m":case"M":t=1048576;break;case"k":case"K":t=1024;break;default:t=1}return JSON.stringify(this.storage).length/t}},Gt.init=function(e){return this.key="",this.storage=e||window.localStorage,this},Gt.init.prototype=Gt.prototype,M.storage=Gt(window.localStorage),M.session=Gt(window.sessionStorage);var Kt={streamerDeferred:0,wheel:!0,wheelStep:20,duration:METRO_ANIMATION_DURATION,defaultClosedIcon:"",defaultOpenIcon:"",changeUri:!0,encodeLink:!0,closed:!1,chromeNotice:!1,startFrom:null,slideToStart:!0,startSlideSleep:1e3,source:null,data:null,eventClick:"select",selectGlobal:!0,streamSelect:!1,excludeSelectElement:null,excludeClickElement:null,excludeElement:null,excludeSelectClass:"",excludeClickClass:"",excludeClass:"",onDataLoad:M.noop,onDataLoaded:M.noop,onDataLoadError:M.noop,onDrawEvent:M.noop,onDrawGlobalEvent:M.noop,onDrawStream:M.noop,onStreamClick:M.noop,onStreamSelect:M.noop,onEventClick:M.noop,onEventSelect:M.noop,onEventsScroll:M.noop,onStreamerCreate:M.noop};M.streamerSetup=function(e){Kt=D.extend({},Kt,e)},window.metroStreamerSetup,M.streamerSetup(window.metroStreamerSetup);var qt={name:"Streamer",init:function(e,t){return this.options=D.extend({},Kt,e),this.elem=t,this.element=D(t),this.data=null,this.scroll=0,this.scrollDir="left",this.events=null,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var t=this,n=this.element,i=this.options;if(M.checkRuntime(n,"streamer"),n.addClass("streamer"),void 0===n.attr("id")&&n.attr("id",H.elementId("streamer")),null===i.source&&null===i.data)return!1;D("<div>").addClass("streams").appendTo(n),D("<div>").addClass("events-area").appendTo(n),null!==i.source?(H.exec(i.onDataLoad,[i.source],n[0]),n.fire("dataload",{source:i.source}),D.json(i.source).then(function(e){H.exec(i.onDataLoaded,[i.source,e],n[0]),n.fire("dataloaded",{source:i.source,data:e}),t.data=e,t.build()},function(e){H.exec(i.onDataLoadError,[i.source,e],n[0]),n.fire("dataloaderror",{source:i.source,xhr:e})})):(this.data=i.data,this.build()),!0===i.chromeNotice&&!0===H.detectChrome()&&!1===H.isTouchDevice()&&D("<p>").addClass("text-small text-muted").html("*) In Chrome browser please press and hold Shift and turn the mouse wheel.").insertAfter(n)},build:function(){var e,t=this,b=this.element,w=this.options,n=this.data,i=b.find(".streams").html(""),s=b.find(".events-area").html(""),y=D("<ul>").addClass("streamer-timeline").html("").appendTo(s),a=D("<div>").addClass("streamer-events").appendTo(s),o=D("<div>").addClass("event-group").appendTo(a),r=H.getURIParameter(null,"StreamerIDS");null!==r&&!0===w.encodeLink&&(r=atob(r));var x=r?r.split("|")[0]:null,S=r?r.split("|")[1].split(","):[];if(void 0!==n.actions){var l=D("<div>").addClass("streamer-actions").appendTo(i);D.each(n.actions,function(){var e=this,t=D("<button>").addClass("streamer-action").addClass(e.cls).html(e.html);void 0!==e.onclick&&t.on(M.events.click,function(){H.exec(e.onclick,[b])}),t.appendTo(l)})}y.html(""),void 0===n.timeline&&(n.timeline={start:"09:00",stop:"18:00",step:20});var c,d,h,u,p,f,m,v,g,C=new Date,T=new Date,k=n.timeline.start?n.timeline.start.split(":"):[9,0],_=n.timeline.stop?n.timeline.stop.split(":"):[18,0],O=n.timeline.step?60*parseInt(n.timeline.step):1200;for(C.setHours(k[0]),C.setMinutes(k[1]),C.setSeconds(0),T.setHours(_[0]),T.setMinutes(_[1]),T.setSeconds(0),c=C.getTime()/1e3;c<=T.getTime()/1e3;c+=O)for(u=((h=(d=new Date(1e3*c)).getHours())<10?"0"+h:h)+":"+((p=d.getMinutes())<10?"0"+p:p),g=(v=D("<li>").data("time",u).addClass("js-time-point-"+u.replace(":","-")).html("<em>"+u+"</em>").appendTo(y)).width()/parseInt(n.timeline.step),e=D("<ul>").addClass("streamer-fake-timeline").html("").appendTo(v),f=0;f<parseInt(n.timeline.step);f++)u=(h<10?"0"+h:h)+":"+((m=p+f)<10?"0"+m:m),D("<li>").data("time",u).addClass("js-fake-time-point-"+u.replace(":","-")).html("|").appendTo(e).css({width:g});if(void 0!==n.streams&&D.each(n.streams,function(f){var m=0,e=D("<div>").addClass("stream").addClass(this.cls).appendTo(i);e.addClass(this.cls).data("one",!1).data("data",this.data),D("<div>").addClass("stream-title").html(this.title).appendTo(e),D("<div>").addClass("stream-secondary").html(this.secondary).appendTo(e),D(this.icon).addClass("stream-icon").appendTo(e);var v=H.computedRgbToHex(H.getStyleOne(e,"background-color")),g=H.computedRgbToHex(H.getStyleOne(e,"color")),C=D("<div>").addClass("stream-events").data("background-color",v).data("text-color",g).appendTo(o);if(void 0!==this.events){D.each(this.events,function(e){var t,n,i=this,s=void 0===i.row?1:parseInt(i.row),a=f+":"+e,o=void 0!==i.custom?i.custom:"",r=void 0!==i.custom_open?i.custom_open:"",l=void 0!==i.custom_close?i.custom_close:"";if(void 0===i.skip||!H.bool(i.skip)){n=D("<div>").data("origin",i).data("sid",a).data("data",i.data).data("time",i.time).data("target",i.target).addClass("stream-event").addClass("size-"+i.size+(["half","one-third"].contains(i.size)?"":"x")).addClass(i.cls).appendTo(C);var c=y.find(".js-fake-time-point-"+this.time.replace(":","-")).offset().left-C.offset().left,d=75*(s-1);if(m<s&&(m=s),n.css({position:"absolute",left:c,top:d}),H.isNull(i.html)){var h=D("<div>").addClass("stream-event-slide").appendTo(n),u=D("<div>").addClass("slide-logo").appendTo(h),p=D("<div>").addClass("slide-data").appendTo(h);void 0!==i.icon&&(H.isTag(i.icon)?D(i.icon).addClass("icon").appendTo(u):D("<img>").addClass("icon").attr("src",i.icon).appendTo(u)),D("<span>").addClass("time").css({backgroundColor:v,color:g}).html(i.time).appendTo(u),D("<div>").addClass("title").html(i.title).appendTo(p),D("<div>").addClass("subtitle").html(i.subtitle).appendTo(p),D("<div>").addClass("desc").html(i.desc).appendTo(p),(!1===w.closed&&b.attr("id")===x&&-1!==S.indexOf(a)||!0===i.selected||1===parseInt(i.selected))&&n.addClass("selected"),!0===w.closed||!0===i.closed||1===parseInt(i.closed)?(t=void 0!==i.closedIcon?H.isTag(i.closedIcon)?i.closedIcon:"<span>"+i.closedIcon+"</span>":H.isTag(w.defaultClosedIcon)?w.defaultClosedIcon:"<span>"+w.defaultClosedIcon+"</span>",D(t).addClass("state-icon").addClass(i.clsClosedIcon).appendTo(h),n.data("closed",!0).data("target",i.target),n.append(r)):(t=void 0!==i.openIcon?H.isTag(i.openIcon)?i.openIcon:"<span>"+i.openIcon+"</span>":H.isTag(w.defaultOpenIcon)?w.defaultOpenIcon:"<span>"+w.defaultOpenIcon+"</span>",D(t).addClass("state-icon").addClass(i.clsOpenIcon).appendTo(h),n.data("closed",!1),n.append(l)),n.append(o)}else n.html(i.html);H.exec(w.onDrawEvent,[n[0]],b[0]),b.fire("drawevent",{event:n[0]})}});var t=C.find(".stream-event").last();0<t.length&&C.outerWidth(t[0].offsetLeft+t.outerWidth())}C.css({height:75*m}),b.find(".stream").eq(C.index()).css({height:75*m}),H.exec(w.onDrawStream,[e[0]],b[0]),b.fire("drawstream",{stream:e[0]})}),void 0!==n.global){var I=a.offset().left;D.each(["before","after"],function(){void 0!==n.global[this]&&D.each(n.global[this],function(){var e=D("<div>").addClass("event-group").addClass("size-"+this.size+(["half","one-third"].contains(this.size)?"":"x")),t=D("<div>").addClass("stream-events global-stream").appendTo(e),n=D("<div>").addClass("stream-event").appendTo(t);n.addClass("global-event").addClass(this.cls).data("time",this.time).data("origin",this).data("data",this.data),D("<div>").addClass("event-title").html(this.title).appendTo(n),D("<div>").addClass("event-subtitle").html(this.subtitle).appendTo(n),D("<div>").addClass("event-html").html(this.html).appendTo(n);var i,s=y.find(".js-fake-time-point-"+this.time.replace(":","-"));0<s.length&&(i=s.offset().left-I),e.css({position:"absolute",left:i,height:"100%"}).appendTo(a),H.exec(w.onDrawGlobalEvent,[n[0]],b[0]),b.fire("dataloaded",{event:n[0]})})})}b.data("stream",-1),b.find(".events-area").scrollLeft(0),this.events=b.find(".stream-event"),this._createEvents(),null!==w.startFrom&&!0===w.slideToStart&&setTimeout(function(){t.slideTo(w.startFrom)},w.startSlideSleep),H.exec(w.onStreamerCreate,null,b[0]),b.fire("streamercreate"),this._fireScroll()},_fireScroll:function(){var e=this.element,t=this.options,n=e.find(".events-area"),i=this.scroll;0!==n.length&&(this.scrollDir=this.scroll<n[0].scrollLeft?"left":"right",this.scroll=n[0].scrollLeft,H.exec(t.onEventsScroll,[n[0].scrollLeft,i,this.scrollDir,D.toArray(this.events)],e[0]),e.fire("eventsscroll",{scrollLeft:n[0].scrollLeft,oldScroll:i,scrollDir:this.scrollDir,events:D.toArray(this.events)}))},_createEvents:function(){var i=this,s=this.element,a=this.options;s.off(M.events.click,".stream-event").on(M.events.click,".stream-event",function(e){var t=D(this);if(!(""!==a.excludeClass&&t.hasClass(a.excludeClass)||null!==a.excludeElement&&D(e.target).is(a.excludeElement)))if(!1===a.closed&&!0!==t.data("closed")&&"select"===a.eventClick)""!==a.excludeSelectClass&&t.hasClass(a.excludeSelectClass)||null!==a.excludeSelectElement&&D(e.target).is(a.excludeSelectElement)||(t.hasClass("global-event")?!0===a.selectGlobal&&t.toggleClass("selected"):t.toggleClass("selected"),!0===a.changeUri&&i._changeURI(),H.exec(a.onEventSelect,[t[0],t.hasClass("selected")],s[0]),s.fire("eventselect",{event:t[0],selected:t.hasClass("selected")}));else if(""!==a.excludeClickClass&&t.hasClass(a.excludeClickClass));else if(null!==a.excludeClickElement&&D(e.target).is(a.excludeClickElement));else if(H.exec(a.onEventClick,[t[0]],s[0]),s.fire("eventclick",{event:t[0]}),!0===a.closed||!0===t.data("closed")){var n=t.data("target");n&&(window.location.href=n)}}),s.off(M.events.click,".stream").on(M.events.click,".stream",function(e){var t=D(this),n=t.index();!1!==a.streamSelect&&(s.data("stream")===n?(s.find(".stream-event").removeClass("disabled"),s.data("stream",-1)):(s.data("stream",n),s.find(".stream-event").addClass("disabled"),i.enableStream(t),H.exec(a.onStreamSelect,[t],s[0]),s.fire("streamselect",{stream:t})),H.exec(a.onStreamClick,[t],s[0]),s.fire("streamclick",{stream:t}))}),!0===a.wheel&&(s.find(".events-area").off(M.events.mousewheel).on(M.events.mousewheel,function(e){if(void 0!==e.deltaY){var t,n=D(this),i=0<e.deltaY?-1:1,s=a.wheelStep;t=n.scrollLeft()-i*s,n.scrollLeft(t)}}),s.find(".events-area").off("mouseenter").on("mouseenter",function(e){!function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=window.pageXOffset||document.documentElement.scrollLeft;window.onscroll=function(){window.scrollTo(t,e)}}()}),s.find(".events-area").off("mouseleave").on("mouseleave",function(e){window.onscroll=function(){}})),s.find(".events-area").last().off("scroll").on("scroll",function(e){i._fireScroll()}),!0===H.isTouchDevice()&&s.off(M.events.click,".stream").on(M.events.click,".stream",function(){var e=D(this);e.toggleClass("focused"),D.each(s.find(".stream"),function(){D(this).is(e)||D(this).removeClass("focused")})})},_changeURI:function(){this.element,this.options,this.data;var e=this.getLink();history.pushState({},document.title,e)},slideTo:function(e){var t,n=this.element,i=this.options;this.data;t=D(void 0===e?n.find(".streamer-timeline li")[0]:n.find(".streamer-timeline .js-time-point-"+e.replace(":","-"))[0]),n.find(".events-area").animate({scrollLeft:t[0].offsetLeft-n.find(".streams .stream").outerWidth()},i.duration)},enableStream:function(e){var t=this.element,n=(this.options,this.data,e.index()-1);e.removeClass("disabled").data("streamDisabled",!1),t.find(".stream-events").eq(n).find(".stream-event").removeClass("disabled")},disableStream:function(e){var t=this.element,n=(this.options,this.data,e.index()-1);e.addClass("disabled").data("streamDisabled",!0),t.find(".stream-events").eq(n).find(".stream-event").addClass("disabled")},toggleStream:function(e){!0===e.data("streamDisabled")?this.enableStream(e):this.disableStream(e)},getLink:function(){var e,t=this.element,n=this.options,i=(this.data,t.find(".stream-event")),s=[],a=window.location.href;return D.each(i,function(){var e=D(this);void 0!==e.data("sid")&&e.hasClass("selected")&&s.push(e.data("sid"))}),e=t.attr("id")+"|"+s.join(","),!0===n.encodeLink&&(e=btoa(e)),H.updateURIParameter(a,"StreamerIDS",e)},getTimes:function(){var e=this.element,t=(this.options,this.data,e.find(".streamer-timeline > li")),n=[];return D.each(t,function(){n.push(D(this).data("time"))}),n},getEvents:function(e,n){var t,i=this.element,s=(this.options,this.data,[]);switch(e){case"selected":t=i.find(".stream-event.selected");break;case"non-selected":t=i.find(".stream-event:not(.selected)");break;default:t=i.find(".stream-event")}return D.each(t,function(){var e,t=D(this);!0!==n&&t.parent().hasClass("global-stream")||(e=t.data("origin"),s.push(e))}),s},source:function(e){var t=this.element;this.options;if(void 0===e)return this.options.source;t.attr("data-source",e),this.options.source=e,this.changeSource()},dataSet:function(e){if(void 0===e)return this.options.data;this.options.data=e,this.changeData(e)},getStreamerData:function(){return this.data},toggleEvent:function(e){this.element;var t=this.options;this.data;(e=D(e)).hasClass("global-event")&&!0!==t.selectGlobal||(e.hasClass("selected")?this.selectEvent(e,!1):this.selectEvent(e,!0))},selectEvent:function(e,t){var n=this.element,i=this.options;this.data;void 0===t&&(t=!0),(e=D(e)).hasClass("global-event")&&!0!==i.selectGlobal||(!0===t?e.addClass("selected"):e.removeClass("selected"),!0===i.changeUri&&this._changeURI(),H.exec(i.onEventSelect,[e[0],t],n[0]),n.fire("eventselect",{event:e[0],selected:t}))},changeSource:function(){var t=this,n=this.element,i=this.options,e=(this.data,n.attr("data-source"));""!==String(e).trim()&&(i.source=e,H.exec(i.onDataLoad,[i.source],n[0]),n.fire("dataload",{source:i.source}),D.json(i.source).then(function(e){H.exec(i.onDataLoaded,[i.source,e],n[0]),n.fire("dataloaded",{source:i.source,data:e}),t.data=e,t.build()},function(e){H.exec(i.onDataLoadError,[i.source,e],n[0]),n.fire("dataloaderror",{source:i.source,xhr:e})}),n.fire("sourcechange"))},changeData:function(e){var t=this.element,n=this.options,i=this.data;n.data="object"==typeof e?e:JSON.parse(t.attr("data-data")),this.data=n.data,this.build(),t.fire("datachange",{oldData:i,newData:n.data})},changeStreamSelectOption:function(){var e=this.element,t=this.options;this.data;t.streamSelect="true"===e.attr("data-stream-select").toLowerCase()},changeAttribute:function(e){switch(e){case"data-source":this.changeSource();break;case"data-data":this.changeData();break;case"data-stream-select":this.changeStreamSelectOption()}},destroy:function(){var e=this.element;return e.off(M.events.click,".stream-event"),e.off(M.events.click,".stream"),e.find(".events-area").off(M.events.mousewheel),e.find(".events-area").last().off("scroll"),e}};M.plugin("streamer",qt);var Qt={switchDeferred:0,material:!1,transition:!0,caption:"",captionPosition:"right",clsSwitch:"",clsCheck:"",clsCaption:"",onSwitchCreate:M.noop};M.switchSetup=function(e){Qt=D.extend({},Qt,e)},window.metroSwitchSetup,M.switchSetup(window.metroSwitchSetup);var Xt={name:"Switch",init:function(e,t){return this.options=D.extend({},Qt,e),this.elem=t,this.element=D(t),this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options,n=D("<label>").addClass((!0===t.material?" switch-material ":" switch ")+e[0].className),i=D("<span>").addClass("check"),s=D("<span>").addClass("caption").html(t.caption);M.checkRuntime(e,"switch"),e.attr("type","checkbox"),void 0!==e.attr("readonly")&&e.on("click",function(e){e.preventDefault()}),n.insertBefore(e),e.appendTo(n),i.appendTo(n),s.appendTo(n),!0===t.transition&&n.addClass("transition-on"),"left"===t.captionPosition&&n.addClass("caption-left"),e[0].className="",n.addClass(t.clsSwitch),s.addClass(t.clsCaption),i.addClass(t.clsCheck),e.is(":disabled")?this.disable():this.enable(),H.exec(t.onSwitchCreate,null,e[0]),e.fire("switchcreate")},disable:function(){this.element.data("disabled",!0),this.element.parent().addClass("disabled")},enable:function(){this.element.data("disabled",!1),this.element.parent().removeClass("disabled")},toggleState:function(){this.elem.disabled?this.disable():this.enable()},changeAttribute:function(e){switch(e){case"disabled":this.toggleState()}},destroy:function(){return this.element}};M.plugin("switch",Xt);var $t={tableDeferred:0,emptyTableTitle:"Nothing to show",templateBeginToken:"<%",templateEndToken:"%>",paginationDistance:5,locale:METRO_LOCALE,horizontalScroll:!1,horizontalScrollStop:null,check:!1,checkType:"checkbox",checkStyle:1,checkColIndex:0,checkName:null,checkStoreKey:"TABLE:$1:KEYS",rownum:!1,rownumTitle:"#",filters:null,filtersOperator:"and",head:null,body:null,static:!1,source:null,searchMinLength:1,searchThreshold:500,searchFields:null,showRowsSteps:!0,showSearch:!0,showTableInfo:!0,showPagination:!0,paginationShortMode:!0,showActivity:!0,muteTable:!0,rows:10,rowsSteps:"10,25,50,100",staticView:!1,viewSaveMode:"client",viewSavePath:"TABLE:$1:OPTIONS",sortDir:"asc",decimalSeparator:".",thousandSeparator:",",tableRowsCountTitle:"Show entries:",tableSearchTitle:"Search:",tableInfoTitle:"Showing $1 to $2 of $3 entries",paginationPrevTitle:"Prev",paginationNextTitle:"Next",allRecordsTitle:"All",inspectorTitle:"Inspector",activityType:"cycle",activityStyle:"color",activityTimeout:100,searchWrapper:null,rowsWrapper:null,infoWrapper:null,paginationWrapper:null,cellWrapper:!1,clsComponent:"",clsTableContainer:"",clsTable:"",clsHead:"",clsHeadRow:"",clsHeadCell:"",clsBody:"",clsBodyRow:"",clsBodyCell:"",clsCellWrapper:"",clsFooter:"",clsFooterRow:"",clsFooterCell:"",clsTableTop:"",clsRowsCount:"",clsSearch:"",clsTableBottom:"",clsTableInfo:"",clsTablePagination:"",clsPagination:"",clsEvenRow:"",clsOddRow:"",clsRow:"",clsEmptyTableTitle:"",onDraw:M.noop,onDrawRow:M.noop,onDrawCell:M.noop,onAppendRow:M.noop,onAppendCell:M.noop,onSortStart:M.noop,onSortStop:M.noop,onSortItemSwitch:M.noop,onSearch:M.noop,onRowsCountChange:M.noop,onDataLoad:M.noop,onDataLoadError:M.noop,onDataLoaded:M.noop,onDataSaveError:M.noop,onFilterRowAccepted:M.noop,onFilterRowDeclined:M.noop,onCheckClick:M.noop,onCheckClickAll:M.noop,onCheckDraw:M.noop,onViewSave:M.noop,onViewGet:M.noop,onViewCreated:M.noop,onTableCreate:M.noop};M.tableSetup=function(e){$t=D.extend({},$t,e)},window.metroTableSetup,M.tableSetup(window.metroTableSetup);var Zt={name:"Table",init:function(e,t){return this.options=D.extend({},$t,e),this.elem=t,this.element=D(t),this.currentPage=1,this.pagesCount=1,this.searchString="",this.data=null,this.activity=null,this.loadActivity=null,this.busy=!1,this.filters=[],this.wrapperInfo=null,this.wrapperSearch=null,this.wrapperRows=null,this.wrapperPagination=null,this.filterIndex=null,this.filtersIndexes=[],this.component=null,this.inspector=null,this.view={},this.viewDefault={},this.locale=M.locales["en-US"],this.input_interval=null,this.searchFields=[],this.sort={dir:"asc",colIndex:0},this.service=[],this.heads=[],this.items=[],this.foots=[],this.filteredItems=[],this.index={},this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e,t,n,i=this,s=this.element,a=this.options,o=H.elementId("table");if(M.checkRuntime(s,"table"),H.isValue(s.attr("id"))||s.attr("id",o),H.isValue(M.locales[a.locale])&&(this.locale=M.locales[a.locale]),H.isValue(a.searchFields)&&(this.searchFields=H.strToArray(a.searchFields)),H.isValue(a.head)){var r=a.head;a.head=H.isObject(a.head),a.head||(console.warn("Head "+r+" defined but not exists!"),a.head=null)}if(H.isValue(a.body)){var l=a.body;a.body=H.isObject(a.body),a.body||(console.warn("Body "+l+" defined but not exists!"),a.body=null)}if(!0===a.static&&(a.showPagination=!1,a.showRowsSteps=!1,a.showSearch=!1,a.showTableInfo=!1,a.rows=-1),(e=D("<div>").addClass("table-component")).attr("id",H.elementId("table")),e.insertBefore(s),t=D("<div>").addClass("table-container").addClass(a.clsTableContainer).appendTo(e),s.appendTo(t),!0===a.horizontalScroll&&t.addClass("horizontal-scroll"),!H.isNull(a.horizontalScrollStop)&&H.mediaExist(a.horizontalScrollStop)&&t.removeClass("horizontal-scroll"),e.addClass(a.clsComponent),this.activity=D("<div>").addClass("table-progress").appendTo(e),n=D("<div>").appendTo(this.activity),M.makePlugin(n,"activity",{type:a.activityType,style:a.activityStyle}),!0!==a.showActivity&&this.activity.css({visibility:"hidden"}),this.component=e,null!==a.source){H.exec(a.onDataLoad,[a.source],s[0]),s.fire("dataload",{source:a.source});var c=H.isObject(a.source);!1!==c&&D.isPlainObject(c)?i._build(c):this.activity.show(function(){D.json(a.source).then(function(e){if(i.activity.hide(),"object"!=typeof e)throw new Error("Data for table is not a object");H.exec(a.onDataLoaded,[a.source,e],s[0]),s.fire("dataloaded",{source:a.source,data:e}),i._build(e)},function(e){i.activity.hide(),H.exec(a.onDataLoadError,[a.source,e],s[0]),s.fire("dataloaderror",{source:a.source,xhr:e})})})}else i._build()},_createIndex:function(){var n=this,i=this.options.checkColIndex;setImmediate(function(){n.items.forEach(function(e,t){n.index[e[i]]=t})})},_build:function(e){var t,n,i=this,s=this.element,a=this.options,o=s.attr("id");a.rows=parseInt(a.rows),this.items=[],this.heads=[],this.foots=[],Array.isArray(a.head)&&(this.heads=a.head),Array.isArray(a.body)&&(this.items=a.body),H.isValue(e)?this._createItemsFromJSON(e):this._createItemsFromHTML(),this._createIndex(),this.view=this._createView(),this.viewDefault=H.objectClone(this.view),n=a.viewSavePath.replace("$1",o),"client"===a.viewSaveMode.toLowerCase()?(t=M.storage.getItem(n),H.isValue(t)&&H.objectLength(t)===H.objectLength(this.view)&&(this.view=t,H.exec(a.onViewGet,[t],s[0]),s.fire("viewget",{source:"client",view:t})),this._final()):D.json(n,n!==a.viewSavePath?null:{id:o}).then(function(e){H.isValue(e)&&H.objectLength(e)===H.objectLength(i.view)&&(i.view=e,H.exec(a.onViewGet,[e],s[0]),s.fire("viewget",{source:"server",view:e})),i._final()},function(){i._final(),console.warn("Warning! Error loading view for table "+s.attr("id")+" ")})},_final:function(){var e=this.element,t=this.options,n=e.attr("id");M.storage.delItem(t.checkStoreKey.replace("$1",n)),this._service(),this._createStructure(),this._createInspector(),this._createEvents(),H.exec(t.onTableCreate,[e],e[0]),e.fire("tablecreate")},_service:function(){var e=this.options;this.service=[{title:e.rownumTitle,format:void 0,name:void 0,sortable:!1,sortDir:void 0,clsColumn:"rownum-cell "+(!0!==e.rownum?"d-none":""),cls:"rownum-cell "+(!0!==e.rownum?"d-none":""),colspan:void 0,type:"rownum"},{title:"checkbox"===e.checkType?"<input type='checkbox' data-role='checkbox' class='table-service-check-all' data-style='"+e.checkStyle+"'>":"",format:void 0,name:void 0,sortable:!1,sortDir:void 0,clsColumn:"check-cell "+(!0!==e.check?"d-none":""),cls:"check-cell "+(!0!==e.check?"d-none":""),colspan:void 0,type:"rowcheck"}]},_createView:function(){var t,e=this.element,n=this.options;return t={},D.each(this.heads,function(e){H.isValue(this.cls)&&(this.cls=this.cls.replace("hidden","")),H.isValue(this.clsColumn)&&(this.clsColumn=this.clsColumn.replace("hidden","")),t[e]={index:e,"index-view":e,show:!H.isValue(this.show)||this.show,size:H.isValue(this.size)?this.size:""}}),H.exec(n.onViewCreated,[t],t),e.fire("viewcreated",{view:t}),t},_createInspectorItems:function(e){var t,n,i=this,s=this.options,a=[],o=this.heads;for(e.html(""),t=0;t<o.length;t++)a[t]=null;for(D.each(o,function(e){(n=D("<tr>")).data("index",e),n.data("index-view",e),D("<td>").html("<input type='checkbox' data-style='"+s.checkStyle+"' data-role='checkbox' name='column_show_check[]' value='"+e+"' "+(H.bool(i.view[e].show)?"checked":"")+">").appendTo(n),D("<td>").html(this.title).appendTo(n),D("<td>").html("<input type='number' data-role='spinner' name='column_size' value='"+i.view[e].size+"' data-index='"+e+"'>").appendTo(n),D("<td>").html("<button class='button square js-table-inspector-field-up' type='button'><span class='mif-arrow-up'></span></button><button class='button square js-table-inspector-field-down' type='button'><span class='mif-arrow-down'></span></button>").appendTo(n),a[i.view[e]["index-view"]]=n}),t=0;t<o.length;t++)a[t].appendTo(e)},_createInspector:function(){var e,t,n,i,s,a=this.options;(e=D("<div data-role='draggable' data-drag-element='.table-inspector-header' data-drag-area='body'>").addClass("table-inspector")).attr("for",this.element.attr("id")),D("<div class='table-inspector-header'>"+a.inspectorTitle+"</div>").appendTo(e),t=D("<div>").addClass("table-wrap").appendTo(e),n=D("<table>").addClass("table subcompact"),i=D("<tbody>").appendTo(n),n.appendTo(t),this._createInspectorItems(i),s=D("<div class='table-inspector-actions'>").appendTo(e),D("<button class='button primary js-table-inspector-save' type='button'>").html(this.locale.buttons.save).appendTo(s),D("<button class='button secondary js-table-inspector-reset ml-2 mr-2' type='button'>").html(this.locale.buttons.reset).appendTo(s),D("<button class='button link js-table-inspector-cancel place-right' type='button'>").html(this.locale.buttons.cancel).appendTo(s),e.data("open",!1),this.inspector=e,D("body").append(e),this._createInspectorEvents()},_resetInspector:function(){var e=this.inspector.find("table tbody");this._createInspectorItems(e),this._createInspectorEvents()},_createHeadsFromHTML:function(){var s=this,e=this.element.find("thead");0<e.length&&D.each(e.find("tr > *"),function(){var e,t,n,i=D(this);e=H.isValue(i.data("sort-dir"))?i.data("sort-dir"):i.hasClass("sort-asc")?"asc":i.hasClass("sort-desc")?"desc":void 0,n=(n=(n=(n=i[0].className.replace("sortable-column","")).replace("sort-asc","")).replace("sort-desc","")).replace("hidden",""),t={type:"data",title:i.html(),name:H.isValue(i.data("name"))?i.data("name"):i.text().replace(" ","_"),sortable:i.hasClass("sortable-column")||H.isValue(i.data("sortable"))&&JSON.parse(!0===i.data("sortable")),sortDir:e,format:H.isValue(i.data("format"))?i.data("format"):"string",formatMask:H.isValue(i.data("format-mask"))?i.data("format-mask"):null,clsColumn:H.isValue(i.data("cls-column"))?i.data("cls-column"):"",cls:n,colspan:i.attr("colspan"),size:H.isValue(i.data("size"))?i.data("size"):"",show:!(i.hasClass("hidden")||H.isValue(i.data("show"))&&!1===JSON.parse(i.data("show"))),required:!!H.isValue(i.data("required"))&&!0===JSON.parse(i.data("required")),field:H.isValue(i.data("field"))?i.data("field"):"input",fieldType:H.isValue(i.data("field-type"))?i.data("field-type"):"text",validator:H.isValue(i.data("validator"))?i.data("validator"):null,template:H.isValue(i.data("template"))?i.data("template"):null},s.heads.push(t)})},_createFootsFromHTML:function(){var n=this,e=this.element.find("tfoot");0<e.length&&D.each(e.find("tr > *"),function(){var e,t=D(this);e={title:t.html(),name:!!H.isValue(t.data("name"))&&t.data("name"),cls:t[0].className,colspan:t.attr("colspan")},n.foots.push(e)})},_createItemsFromHTML:function(){var n=this,e=this.element.find("tbody");0<e.length&&D.each(e.find("tr"),function(){var e=D(this),t=[];D.each(e.children("td"),function(){var e=D(this);t.push(e.html())}),n.items.push(t)}),this._createHeadsFromHTML(),this._createFootsFromHTML()},_createItemsFromJSON:function(e){var t=this;"string"==typeof e&&(e=JSON.parse(e)),void 0!==e.header?t.heads=e.header:this._createHeadsFromHTML(),void 0!==e.data&&D.each(e.data,function(){var e=[];D.each(this,function(){e.push(this)}),t.items.push(e)}),void 0!==e.footer?this.foots=e.footer:this._createFootsFromHTML()},_createTableHeader:function(){var t,i,e,n,s=this.element,a=this.options,o=D("<thead>").html(""),r=[],l=a.staticView?this._createView():this.view;if(s.find("thead").remove(),o.addClass(a.clsHead),0===this.heads.length)return o;for(t=D("<tr>").addClass(a.clsHeadRow).appendTo(o),D.each(this.service,function(){var e=[];i=D("<th>").appendTo(t),H.isValue(this.title)&&i.html(this.title),H.isValue(this.size)&&i.css({width:this.size}),H.isValue(this.cls)&&e.push(this.cls),e.push(a.clsHeadCell),i.addClass(e.join(" "))}),n=this.heads,e=0;e<n.length;e++)r[e]=null;for(D.each(n,function(e){var t=this,n=[];(i=D("<th>")).data("index",e),H.isValue(t.title)&&i.html(t.title),H.isValue(t.format)&&i.attr("data-format",t.format),H.isValue(t.name)&&i.attr("data-name",t.name),H.isValue(t.colspan)&&i.attr("colspan",t.colspan),H.isValue(l[e].size)&&i.css({width:l[e].size}),!0===t.sortable&&(n.push("sortable-column"),H.isValue(t.sortDir)&&n.push("sort-"+t.sortDir)),H.isValue(t.cls)&&D.each(t.cls.toArray(),function(){n.push(this)}),!1===H.bool(l[e].show)&&-1===n.indexOf("hidden")&&n.push("hidden"),n.push(a.clsHeadCell),H.bool(l[e].show)&&H.arrayDelete(n,"hidden"),i.addClass(n.join(" ")),r[l[e]["index-view"]]=i}),e=0;e<n.length;e++)r[e].appendTo(t);s.prepend(o)},_createTableBody:function(){var e,t=this.element;e=t.find("thead"),t.find("tbody").remove(),D("<tbody>").addClass(this.options.clsBody).insertAfter(e)},_createTableFooter:function(){var e,t,n=this.element,i=this.options,s=D("<tfoot>").addClass(i.clsFooter);n.find("tfoot").remove(),0!==this.foots.length&&(e=D("<tr>").addClass(i.clsHeadRow).appendTo(s),D.each(this.foots,function(){t=D("<th>").appendTo(e),void 0!==this.title&&t.html(this.title),void 0!==this.name&&t.addClass("foot-column-name-"+this.name),void 0!==this.cls&&t.addClass(this.cls),H.isValue(this.colspan)&&t.attr("colspan",this.colspan),t.appendTo(e)})),n.append(s)},_createTopBlock:function(){var e,t,n,i,s=this,a=this.element,o=this.options,r=D("<div>").addClass("table-top").addClass(o.clsTableTop).insertBefore(a.parent());return(e=H.isValue(this.wrapperSearch)?this.wrapperSearch:D("<div>").addClass("table-search-block").addClass(o.clsSearch).appendTo(r)).addClass(o.clsSearch),t=D("<input>").attr("type","text").appendTo(e),M.makePlugin(t,"input",{prepend:o.tableSearchTitle}),!0!==o.showSearch&&e.hide(),(n=H.isValue(this.wrapperRows)?this.wrapperRows:D("<div>").addClass("table-rows-block").appendTo(r)).addClass(o.clsRowsCount),i=D("<select>").appendTo(n),D.each(H.strToArray(o.rowsSteps),function(){var e=parseInt(this),t=D("<option>").attr("value",e).text(-1===e?o.allRecordsTitle:e).appendTo(i);e===parseInt(o.rows)&&t.attr("selected","selected")}),M.makePlugin(i,"select",{filter:!1,prepend:o.tableRowsCountTitle,onChange:function(e){(e=parseInt(e))!==parseInt(o.rows)&&(o.rows=e,s.currentPage=1,s._draw(),H.exec(o.onRowsCountChange,[e],a[0]),a.fire("rowscountchange",{val:e}))}}),!0!==o.showRowsSteps&&n.hide(),r},_createBottomBlock:function(){var e,t,n=this.element,i=this.options,s=D("<div>").addClass("table-bottom").addClass(i.clsTableBottom).insertAfter(n.parent());return(e=H.isValue(this.wrapperInfo)?this.wrapperInfo:D("<div>").addClass("table-info").appendTo(s)).addClass(i.clsTableInfo),!0!==i.showTableInfo&&e.hide(),(t=H.isValue(this.wrapperPagination)?this.wrapperPagination:D("<div>").addClass("table-pagination").appendTo(s)).addClass(i.clsTablePagination),!0!==i.showPagination&&t.hide(),s},_createStructure:function(){var e,t=this,n=this.element,i=this.options,s=D(i.searchWrapper),a=D(i.infoWrapper),o=D(i.rowsWrapper),r=D(i.paginationWrapper);0<s.length&&(this.wrapperSearch=s),0<a.length&&(this.wrapperInfo=a),0<o.length&&(this.wrapperRows=o),0<r.length&&(this.wrapperPagination=r),n.html("").addClass(i.clsTable),this._createTableHeader(),this._createTableBody(),this._createTableFooter(),this._createTopBlock(),this._createBottomBlock();var l,c=!1;0<this.heads.length&&D.each(this.heads,function(e){!c&&-1<["asc","desc"].indexOf(this.sortDir)&&(c=!0,t.sort.colIndex=e,t.sort.dir=this.sortDir)}),c&&(e=n.find("thead th"),this._resetSortClass(e),D(e.get(this.sort.colIndex+t.service.length)).addClass("sort-"+this.sort.dir),this.sorting()),H.isValue(i.filters)&&D.each(H.strToArray(i.filters),function(){!1!==(l=H.isFunc(this))&&t.filtersIndexes.push(t.addFilter(l))}),this.currentPage=1,this._draw()},_resetSortClass:function(e){D(e).removeClass("sort-asc sort-desc")},_createEvents:function(){var e,i=this,o=this.element,r=this.options,t=o.closest(".table-component"),n=t.find(".table-container"),s=t.find(".table-search-block input"),l=o.attr("id");D(window).on(M.events.resize,function(){!0===r.horizontalScroll&&(!H.isNull(r.horizontalScrollStop)&&H.mediaExist(r.horizontalScrollStop)?n.removeClass("horizontal-scroll"):n.addClass("horizontal-scroll"))},{ns:t.attr("id")}),o.on(M.events.click,".sortable-column",function(){if(!0===r.muteTable&&o.addClass("disabled"),i.busy)return!1;i.busy=!0;var e=D(this);i.activity.show(function(){setImmediate(function(){i.currentPage=1,i.sort.colIndex=e.data("index"),e.hasClass("sort-asc")||e.hasClass("sort-desc")?e.hasClass("sort-asc")?i.sort.dir="desc":i.sort.dir="asc":i.sort.dir=r.sortDir,i._resetSortClass(o.find(".sortable-column")),e.addClass("sort-"+i.sort.dir),i.sorting(),i._draw(function(){!(i.busy=!1)===r.muteTable&&o.removeClass("disabled")})})})}),o.on(M.events.click,".table-service-check input",function(){var e=D(this),t=e.is(":checked"),n=""+e.val(),i=r.checkStoreKey.replace("$1",l),s=M.storage,a=s.getItem(i);"radio"===e.attr("type")&&(a=[]),t?H.isValue(a)?-1===Array(a).indexOf(n)&&a.push(n):a=[n]:H.isValue(a)?H.arrayDelete(a,n):a=[],s.setItem(i,a),H.exec(r.onCheckClick,[t],this),o.fire("checkclick",{check:this,status:t})}),o.on(M.events.click,".table-service-check-all input",function(){var e=D(this).is(":checked"),t=r.checkStoreKey.replace("$1",l),n=[];e?D.each(i.filteredItems,function(){-1===n.indexOf(this[r.checkColIndex])&&n.push(""+this[r.checkColIndex])}):n=[],M.storage.setItem(t,n),i._draw(),H.exec(r.onCheckClickAll,[e],this),o.fire("checkclickall",{check:this,status:e})});function a(){i.searchString=this.value.trim().toLowerCase(),clearInterval(i.input_interval),i.input_interval=!1,i.input_interval||(i.input_interval=setTimeout(function(){i.currentPage=1,i._draw(),clearInterval(i.input_interval),i.input_interval=!1},r.searchThreshold))}function c(e){var t=D(e),n=t.parent();0!==i.filteredItems.length&&(n.hasClass("active")||(n.hasClass("service")?"prev"===t.data("page")?(i.currentPage--,0===i.currentPage&&(i.currentPage=1)):(i.currentPage++,i.currentPage>i.pagesCount&&(i.currentPage=i.pagesCount)):i.currentPage=t.data("page"),i._draw()))}s.on(M.events.inputchange,a),H.isValue(this.wrapperSearch)&&0<(e=this.wrapperSearch.find("input")).length&&e.on(M.events.inputchange,a),t.on(M.events.click,".pagination .page-link",function(){c(this)}),H.isValue(this.wrapperPagination)&&this.wrapperPagination.on(M.events.click,".pagination .page-link",function(){c(this)}),this._createInspectorEvents(),o.on(M.events.click,".js-table-crud-button",function(){})},_createInspectorEvents:function(){var s=this,e=this.inspector;this._removeInspectorEvents(),e.on(M.events.click,".js-table-inspector-field-up",function(){var t,e=D(this).closest("tr"),n=e.prev("tr"),i=e.data("index");0!==n.length&&(e.insertBefore(n),e.addClass("flash"),setTimeout(function(){e.removeClass("flash")},1e3),t=e.index(),e.data("index-view",t),s.view[i]["index-view"]=t,D.each(e.nextAll(),function(){var e=D(this);t++,e.data("index-view",t),s.view[e.data("index")]["index-view"]=t}),s._createTableHeader(),s._draw())}),e.on(M.events.click,".js-table-inspector-field-down",function(){var t,e=D(this).closest("tr"),n=e.next("tr"),i=e.data("index");0!==n.length&&(e.insertAfter(n),e.addClass("flash"),setTimeout(function(){e.removeClass("flash")},1e3),t=e.index(),e.data("index-view",t),s.view[i]["index-view"]=t,D.each(e.prevAll(),function(){var e=D(this);t--,e.data("index-view",t),s.view[e.data("index")]["index-view"]=t}),s._createTableHeader(),s._draw())}),e.on(M.events.click,"input[type=checkbox]",function(){var e=D(this),t=e.is(":checked"),n=e.val(),i=["cls","clsColumn"];t?D.each(i,function(){var e;e=H.isValue(s.heads[n][this])?H.strToArray(s.heads[n][this]," "):[],H.arrayDelete(e,"hidden"),s.heads[n][this]=e.join(" "),s.view[n].show=!0}):D.each(i,function(){var e;-1===(e=H.isValue(s.heads[n][this])?H.strToArray(s.heads[n][this]," "):[]).indexOf("hidden")&&e.push("hidden"),s.heads[n][this]=e.join(" "),s.view[n].show=!1}),s._createTableHeader(),s._draw()}),e.find("input[type=number]").on(M.events.inputchange,function(){var e=D(this),t=e.attr("data-index"),n=parseInt(e.val());s.view[t].size=0===n?"":n,s._createTableHeader()}),e.on(M.events.click,".js-table-inspector-save",function(){s._saveTableView(),s.openInspector(!1)}),e.on(M.events.click,".js-table-inspector-cancel",function(){s.openInspector(!1)}),e.on(M.events.click,".js-table-inspector-reset",function(){s.resetView()})},_removeInspectorEvents:function(){var e=this.inspector;e.off(M.events.click,".js-table-inspector-field-up"),e.off(M.events.click,".js-table-inspector-field-down"),e.off(M.events.click,"input[type=checkbox]"),e.off(M.events.click,".js-table-inspector-save"),e.off(M.events.click,".js-table-inspector-cancel"),e.off(M.events.click,".js-table-inspector-reset"),e.find("input[type=number]").off(M.events.inputchange)},_saveTableView:function(){var t=this.element,n=this.options,i=this.view,e=t.attr("id"),s=n.viewSavePath.replace("$1",e);if("client"===n.viewSaveMode.toLowerCase())M.storage.setItem(s,i),H.exec(n.onViewSave,[n.viewSavePath,i],t[0]),t.fire("viewsave",{target:"client",path:n.viewSavePath,view:i});else{var a={id:t.attr("id"),view:i};D.post(s,a).then(function(e){H.exec(n.onViewSave,[n.viewSavePath,i,a,e],t[0]),t.fire("viewsave",{target:"server",path:n.viewSavePath,view:i,post_data:a})},function(e){H.exec(n.onDataSaveError,[n.viewSavePath,a,e],t[0]),t.fire("datasaveerror",{source:n.viewSavePath,xhr:e,post_data:a})})}},_info:function(e,t,n){var i,s=this.element,a=this.options,o=s.closest(".table-component"),r=H.isValue(this.wrapperInfo)?this.wrapperInfo:o.find(".table-info");0!==r.length&&(n<t&&(t=n),0===this.items.length&&(e=t=n=0),i=(i=(i=(i=a.tableInfoTitle).replace("$1",e)).replace("$2",t)).replace("$3",n),r.html(i))},_paging:function(e){var t=this.element,n=this.options,i=t.closest(".table-component");this.pagesCount=Math.ceil(e/n.rows),ut({length:e,rows:n.rows,current:this.currentPage,target:H.isValue(this.wrapperPagination)?this.wrapperPagination:i.find(".table-pagination"),claPagination:n.clsPagination,prevTitle:n.paginationPrevTitle,nextTitle:n.paginationNextTitle,distance:!0===n.paginationShortMode?n.paginationDistance:0})},_filter:function(){var e,o=this,r=this.options,l=this.element;return e=H.isValue(this.searchString)&&o.searchString.length>=r.searchMinLength||0<this.filters.length?this.items.filter(function(n){var e,t,i,s="",a=0;if(0<o.filters.length){for(e="and"===r.filtersOperator.toLowerCase(),i=0;i<o.filters.length;i++)H.isNull(o.filters[i])||(a++,e="and"===r.filtersOperator.toLowerCase()?e&&H.exec(o.filters[i],[n,o.heads]):e||H.exec(o.filters[i],[n,o.heads]));0===a&&(e=!0)}else e=!0;return 0<o.searchFields.length?D.each(o.heads,function(e,t){-1<o.searchFields.indexOf(t.name)&&(s+="•"+n[e])}):s=n.join("•"),s=s.replace(/[\n\r]+|[\s]{2,}/g," ").trim().toLowerCase(),t=!(H.isValue(o.searchString)&&o.searchString.length>=r.searchMinLength)||~s.indexOf(o.searchString),(e=e&&t)?(H.exec(r.onFilterRowAccepted,[n],l[0]),l.fire("filterrowaccepted",{row:n})):(H.exec(r.onFilterRowDeclined,[n],l[0]),l.fire("filterrowdeclined",{row:n})),e}):this.items,H.exec(r.onSearch,[o.searchString,e],l[0]),l.fire("search",{search:o.searchString,items:e}),this.filteredItems=e},_draw:function(e){var t,n,i,s,a,o,r,l,c,d=this,h=this.element,u=this.options,p=h.find("tbody"),f=-1===parseInt(u.rows)?0:u.rows*(this.currentPage-1),m=-1===parseInt(u.rows)?this.items.length-1:f+u.rows-1,v=M.storage.getItem(u.checkStoreKey.replace("$1",h.attr("id"))),g=u.staticView?this.viewDefault:this.view;if(p.html(""),this.heads.length){if(0<(c=this._filter()).length){for(t=f;t<=m;t++)if(o=c[t],r=[],H.isValue(o)){for((i=D("<tr>").addClass(u.clsBodyRow)).data("original",o),l=t%2==0,s=D("<td>").html(t+1),void 0!==d.service[0].clsColumn&&s.addClass(d.service[0].clsColumn),s.appendTo(i),s=D("<td>"),a="checkbox"===u.checkType?D("<input type='checkbox' data-style='"+u.checkStyle+"' data-role='checkbox' name='"+(H.isValue(u.checkName)?u.checkName:"table_row_check")+"[]' value='"+c[t][u.checkColIndex]+"'>"):D("<input type='radio' data-style='"+u.checkStyle+"' data-role='radio' name='"+(H.isValue(u.checkName)?u.checkName:"table_row_check")+"' value='"+c[t][u.checkColIndex]+"'>"),H.isValue(v)&&Array.isArray(v)&&-1<v.indexOf(""+c[t][u.checkColIndex])&&a.prop("checked",!0),a.addClass("table-service-check"),H.exec(u.onCheckDraw,[a],a[0]),h.fire("checkdraw",{check:a}),a.appendTo(s),void 0!==d.service[1].clsColumn&&s.addClass(d.service[1].clsColumn),s.appendTo(i),n=0;n<o.length;n++)r[n]=null;for(D.each(o,function(e){var t=this,n=D("<td>");H.isValue(d.heads[e].template)&&(t=d.heads[e].template.replace("%VAL%",t)),n.html(t),n.addClass(u.clsBodyCell),H.isValue(d.heads[e].clsColumn)&&n.addClass(d.heads[e].clsColumn),!1===H.bool(g[e].show)&&n.addClass("hidden"),H.bool(g[e].show)&&n.removeClass("hidden"),n.data("original",this),r[g[e]["index-view"]]=n,H.exec(u.onDrawCell,[n,t,e,d.heads[e],o],n[0]),h.fire("drawcell",{td:n,val:t,cellIndex:e,head:d.heads[e],items:o}),!0===u.cellWrapper&&(t=D("<div>").addClass("data-wrapper").addClass(u.clsCellWrapper).html(n.html()),n.html("").append(t))}),n=0;n<o.length;n++)r[n].appendTo(i),H.exec(u.onAppendCell,[r[n],i,n,h],r[n][0]),h.fire("appendcell",{td:r[n],tr:i,index:n});H.exec(u.onDrawRow,[i,d.view,d.heads,o],i[0]),h.fire("drawrow",{tr:i,view:d.view,heads:d.heads,items:o}),i.addClass(u.clsRow).addClass(l?u.clsEvenRow:u.clsOddRow).appendTo(p),H.exec(u.onAppendRow,[i,h],i[0]),h.fire("appendrow",{tr:i})}}else n=0,D.each(g,function(){this.show&&n++}),!0===u.check&&n++,!0===u.rownum&&n++,i=D("<tr>").addClass(u.clsBodyRow).appendTo(p),(s=D("<td>").attr("colspan",n).addClass("text-center").html(D("<span>").addClass(u.clsEmptyTableTitle).html(u.emptyTableTitle))).appendTo(i);this._info(1+f,1+m,c.length),this._paging(c.length),this.activity&&this.activity.hide(),H.exec(u.onDraw,[h],h[0]),h.fire("draw",h[0]),void 0!==e&&H.exec(e,[h],h[0])}else console.warn("Heads is not defined for table ID "+h.attr("id"))},_getItemContent:function(e){var t,n=this.options,i=e[this.sort.colIndex],s=this.heads[this.sort.colIndex].format,a=H.isNull(this.heads)||H.isNull(this.heads[this.sort.colIndex])||!H.isValue(this.heads[this.sort.colIndex].formatMask)?"%Y-%m-%d":this.heads[this.sort.colIndex].formatMask,o=this.heads&&this.heads[this.sort.colIndex]&&this.heads[this.sort.colIndex].thousandSeparator?this.heads[this.sort.colIndex].thousandSeparator:n.thousandSeparator,r=this.heads&&this.heads[this.sort.colIndex]&&this.heads[this.sort.colIndex].decimalSeparator?this.heads[this.sort.colIndex].decimalSeparator:n.decimalSeparator;if(t=(""+i).toLowerCase().replace(/[\n\r]+|[\s]{2,}/g," ").trim(),H.isValue(t)&&H.isValue(s))switch(-1!==["number","int","float","money"].indexOf(s)&&(t=H.parseNumber(t,o,r)),s){case"date":t=H.isValue(a)?t.toDate(a):new Date(t);break;case"number":t=Number(t);break;case"int":t=parseInt(t);break;case"float":t=parseFloat(t);break;case"money":t=H.parseMoney(t);break;case"card":t=H.parseCard(t);break;case"phone":t=H.parsePhone(t)}return t},addItem:function(e,t){if(!Array.isArray(e))return console.warn("Item is not an array and can't be added"),this;this.items.push(e),!1!==t&&this.draw()},addItems:function(e,t){if(!Array.isArray(e))return console.warn("Items is not an array and can't be added"),this;e.forEach(function(e){Array.isArray(e)&&this.items.push(e,!1)}),this.draw(),!1!==t&&this.draw()},updateItem:function(e,n,t){var i=this.items[this.index[e]],s=null;return H.isNull(i)?(console.warn("Item is undefined for update"),this):(isNaN(n)&&this.heads.forEach(function(e,t){e.name===n&&(s=t)}),H.isNull(s)?console.warn("Item is undefined for update. Field "+n+" not found in data structure"):(i[s]=t,this.items[this.index[e]]=i),this)},getItem:function(e){return this.items[this.index[e]]},deleteItem:function(e,t){var n,i=[],s=H.isFunc(t);for(n=0;n<this.items.length;n++)s?H.exec(t,[this.items[n][e]])&&i.push(n):this.items[n][e]===t&&i.push(n);return this.items=H.arrayDeleteByMultipleKeys(this.items,i),this},deleteItemByName:function(e,t){var n,i,s=[],a=H.isFunc(t);for(n=0;n<this.heads.length;n++)if(this.heads[n].name===e){i=n;break}for(n=0;n<this.items.length;n++)a?H.exec(t,[this.items[n][i]])&&s.push(n):this.items[n][i]===t&&s.push(n);return this.items=H.arrayDeleteByMultipleKeys(this.items,s),this},draw:function(){return this._draw(),this},sorting:function(e){var a=this,o=this.element,r=this.options;return H.isValue(e)&&(this.sort.dir=e),H.exec(r.onSortStart,[this.items],o[0]),o.fire("sortstart",this.items),this.items.sort(function(e,t){var n=a._getItemContent(e),i=a._getItemContent(t),s=0;return n<i&&(s="asc"===a.sort.dir?-1:1),i<n&&(s="asc"===a.sort.dir?1:-1),0!==s&&(H.exec(r.onSortItemSwitch,[e,t,s],o[0]),o.fire("sortitemswitch",{a:e,b:t,result:s})),s}),H.exec(r.onSortStop,[this.items],o[0]),o.fire("sortstop",this.items),this},search:function(e){return this.searchString=e.trim().toLowerCase(),this.currentPage=1,this._draw(),this},_rebuild:function(e){var t,n=this,i=this.element,s=!1;this._createIndex(),!0===e&&(this.view=this._createView()),this._createTableHeader(),this._createTableBody(),this._createTableFooter(),0<this.heads.length&&D.each(this.heads,function(e){!s&&-1<["asc","desc"].indexOf(this.sortDir)&&(s=!0,n.sort.colIndex=e,n.sort.dir=this.sortDir)}),s&&(t=i.find(".sortable-column"),this._resetSortClass(t),D(t.get(n.sort.colIndex)).addClass("sort-"+n.sort.dir),this.sorting()),n.currentPage=1,n._draw()},setHeads:function(e){return this.heads=e,this},setHeadItem:function(e,t){var n,i;for(n=0;n<this.heads.length;n++)if(this.heads[n].name===e){i=n;break}return this.heads[i]=t,this},setItems:function(e){return this.items=e,this},setData:function(e){var t=this.options;return this.items=[],this.heads=[],this.foots=[],Array.isArray(t.head)&&(this.heads=t.head),Array.isArray(t.body)&&(this.items=t.body),this._createItemsFromJSON(e),this._rebuild(!0),this},loadData:function(e,t){var n=this,i=this.element,s=this.options;H.isValue(t)||(t=!0),i.html(""),H.isValue(e)?(s.source=e,H.exec(s.onDataLoad,[s.source],i[0]),i.fire("dataload",{source:s.source}),n.activity.show(function(){D.json(s.source).then(function(e){n.activity.hide(),n.items=[],n.heads=[],n.foots=[],H.exec(s.onDataLoaded,[s.source,e],i[0]),i.fire("dataloaded",{source:s.source,data:e}),Array.isArray(s.head)&&(n.heads=s.head),Array.isArray(s.body)&&(n.items=s.body),n._createItemsFromJSON(e),n._rebuild(t)},function(e){n.activity.hide(),H.exec(s.onDataLoadError,[s.source,e],i[0]),n._createItemsFromJSON(data),n._rebuild(t),i.fire("dataloaderror",{source:s.source,xhr:e})})})):this._rebuild(t)},reload:function(e){this.loadData(this.options.source,e)},clear:function(){return this.items=[],this.draw()},next:function(){if(0!==this.items.length){if(this.currentPage++,!(this.currentPage>this.pagesCount))return this._draw(),this;this.currentPage=this.pagesCount}},prev:function(){if(0!==this.items.length){if(this.currentPage--,0!==this.currentPage)return this._draw(),this;this.currentPage=1}},first:function(){if(0!==this.items.length)return this.currentPage=1,this._draw(),this},last:function(){if(0!==this.items.length)return this.currentPage=this.pagesCount,this._draw(),this},page:function(e){return e<=0&&(e=1),e>this.pagesCount&&(e=this.pagesCount),this.currentPage=e,this._draw(),this},addFilter:function(e,t){var n,i=null,s=H.isFunc(e);if(!1!==s){for(n=0;n<this.filters.length;n++)if(H.isNull(this.filters[n])){i=n,this.filters[n]=s;break}return H.isNull(i)&&(this.filters.push(s),i=this.filters.length-1),!0===t&&(this.currentPage=1,this.draw()),i}},removeFilter:function(e,t){return!(this.filters[e]=null)===t&&(this.currentPage=1,this.draw()),this},removeFilters:function(e){return this.filters=[],!0===e&&(this.currentPage=1,this.draw()),this},getItems:function(){return this.items},getHeads:function(){return this.heads},getView:function(){return this.view},getFilteredItems:function(){return 0<this.filteredItems.length?this.filteredItems:this.items},getSelectedItems:function(){var e=this.element,t=this.options,n=M.storage.getItem(t.checkStoreKey.replace("$1",e.attr("id"))),i=[];return H.isValue(n)?(D.each(this.items,function(){-1!==n.indexOf(""+this[t.checkColIndex])&&i.push(this)}),i):[]},getStoredKeys:function(){var e=this.element,t=this.options;return M.storage.getItem(t.checkStoreKey.replace("$1",e.attr("id")),[])},clearSelected:function(e){var t=this.element,n=this.options;M.storage.setItem(n.checkStoreKey.replace("$1",t.attr("id")),[]),t.find("table-service-check-all input").prop("checked",!1),!0===e&&this._draw()},getFilters:function(){return this.filters},getFiltersIndexes:function(){return this.filtersIndexes},openInspector:function(e){var t=this.inspector;e?t.show(0,function(){t.css({top:(D(window).height()-t.outerHeight(!0))/2+pageYOffset,left:(D(window).width()-t.outerWidth(!0))/2+pageXOffset}).data("open",!0)}):t.hide().data("open",!1)},closeInspector:function(){this.openInspector(!1)},toggleInspector:function(){this.openInspector(!this.inspector.data("open"))},resetView:function(){this.view=this._createView(),this._createTableHeader(),this._createTableFooter(),this._draw(),this._resetInspector(),this._saveTableView()},rebuildIndex:function(){this._createIndex()},getIndex:function(){return this.index},export:function(e,t,n,i){var s,a,o,r,l,c,d,h,u=this,p=this.options,f=document.createElement("table"),m=D("<thead>").appendTo(f),v=D("<tbody>").appendTo(f),g=[];if("function"==typeof S.tableToCSV){for(t=H.isValue(t)?t.toLowerCase():"all-filtered",n=H.isValue(n)?n:H.elementId("table")+"-export.csv",l=D("<tr>"),o=this.heads,a=0;a<o.length;a++)g[a]=null;for(D.each(o,function(e){!1!==H.bool(u.view[e].show)&&(c=D("<th>"),H.isValue(this.title)&&c.html(this.title),g[u.view[e]["index-view"]]=c)}),a=0;a<o.length;a++)H.isValue(g[a])&&g[a].appendTo(l);for(l.appendTo(m),h="checked"===t?(d=0,(r=this.getSelectedItems()).length-1):"view"===t?(r=this._filter(),d=-1===parseInt(p.rows)?0:p.rows*(this.currentPage-1),-1===parseInt(p.rows)?r.length-1:d+p.rows-1):"all"===t?(d=0,(r=this.items).length-1):(d=0,(r=this._filter()).length-1),s=d;s<=h;s++)if(H.isValue(r[s])){for(l=D("<tr>"),o=r[s],a=0;a<o.length;a++)g[a]=null;for(D.each(o,function(e){!1!==H.bool(u.view[e].show)&&(c=D("<td>").html(this),g[u.view[e]["index-view"]]=c)}),a=0;a<o.length;a++)H.isValue(g[a])&&g[a].appendTo(l);l.appendTo(v)}S.tableToCSV(f,n,i),f.remove()}},changeAttribute:function(e){var t=this,n=this.element,i=this.options;switch(e){case"data-check":i.check=H.bool(n.attr("data-check")),t._service(),t._createTableHeader(),t._draw();break;case"data-rownum":i.rownum=H.bool(n.attr("data-rownum")),t._service(),t._createTableHeader(),t._draw()}},destroy:function(){var e=this.element,t=e.closest(".table-component"),n=t.find("input"),i=t.find("select");if(n.data("input").destroy(),i.data("select").destroy(),D(window).off(M.events.resize,{ns:t.attr("id")}),e.off(M.events.click,".sortable-column"),e.off(M.events.click,".table-service-check input"),e.off(M.events.click,".table-service-check-all input"),n.off(M.events.inputchange),H.isValue(this.wrapperSearch)){var s=this.wrapperSearch.find("input");0<s.length&&s.off(M.events.inputchange)}return t.off(M.events.click,".pagination .page-link"),H.isValue(this.wrapperPagination)&&this.wrapperPagination.off(M.events.click,".pagination .page-link"),e.off(M.events.click,".js-table-crud-button"),this._removeInspectorEvents(),e}};M.plugin("table",Zt);var en={materialtabsDeferred:0,deep:!1,fixedTabs:!1,clsComponent:"",clsTab:"",clsTabActive:"",clsMarker:"",onBeforeTabOpen:M.noop_true,onTabOpen:M.noop,onTabsScroll:M.noop,onTabsCreate:M.noop};M.materialTabsSetup=function(e){en=D.extend({},en,e)},window.metroMaterialTabsSetup,M.materialTabsSetup(window.metroMaterialTabsSetup);var tn={name:"MaterialTabs",init:function(e,t){return this.options=D.extend({},en,e),this.elem=t,this.element=D(t),this.marker=null,this.scroll=0,this.scrollDir="left",this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"materialtabs"),this._createStructure(),this._createEvents(),H.exec(t.onTabsCreate,null,e[0]),e.fire("tabscreate")},_applyColor:function(e,t,n){e=D(e),H.isValue(t)&&(H.isColor(t)?e.css(n,t):e.addClass(t))},_createStructure:function(){var e=this.element,t=this.options,n=e.find("li"),i=e.find("li.active");e.addClass("tabs-material").addClass(t.clsComponent),n.addClass(t.clsTab),!0===t.deep&&e.addClass("deep"),!0===t.fixedTabs&&e.addClass("fixed-tabs"),this.marker=e.find(".tab-marker"),0===this.marker.length&&(this.marker=D("<span>").addClass("tab-marker").addClass(t.clsMarker).appendTo(e)),this.openTab(0===i.length?n[0]:i[0])},_createEvents:function(){var a=this,o=this.element,r=this.options;o.on(M.events.click,"li",function(e){var t=D(this),n=o.find("li.active"),i=t.index()>n.index(),s=t.children("a").attr("href");if(H.isValue(s)&&"#"===s[0]){if(t.hasClass("active"))return;if(t.hasClass("disabled"))return;if(!1===H.exec(r.onBeforeTabOpen,[t,s,i],this))return;a.openTab(t,i),e.preventDefault()}}),o.on(M.events.scroll,function(){var e=this.scroll;this.scrollDir=this.scroll<o[0].scrollLeft?"left":"right",this.scroll=o[0].scrollLeft,H.exec(r.onTabsScroll,[o[0].scrollLeft,e,this.scrollDir],o[0]),o.fire("tabsscroll",{scrollLeft:o[0].scrollLeft,oldScroll:e,scrollDir:a.scrollDir})})},openTab:function(e,t){var n,i,s,a,o,r,l,c=this.element,d=this.options,h=c.find("li");e=D(e),D.each(h,function(){var e=D(this).find("a").attr("href");H.isValue(e)&&"#"===e[0]&&1<e.length&&D(e).hide()}),i=c.width(),r=c.scrollLeft(),n=(o=e.position().left)+(s=e.width()),h.removeClass("active").removeClass(d.clsTabActive),e.addClass("active").addClass(d.clsTabActive),l=i+r<n+52?r+104:o<r?o-104:r,c.animate({scrollLeft:l}),this.marker.animate({left:o,width:s}),a=e.find("a").attr("href"),H.isValue(a)&&"#"===a[0]&&1<a.length&&D(a).show(),H.exec(d.onTabOpen,[e[0],a,t],c[0]),c.fire("tabopen",{tab:e[0],target:a,tab_next:t})},open:function(e){var t=this.element,n=t.find("li"),i=t.find("li.active"),s=n.eq(e-1),a=n.index(s)>n.index(i);this.openTab(s,a)},changeAttribute:function(e){},destroy:function(){var e=this.element;return e.off(M.events.click,"li"),e.off(M.events.scroll),e}};M.plugin("materialtabs",tn);var nn={tabsDeferred:0,expand:!1,expandPoint:null,tabsPosition:"top",tabsType:"default",clsTabs:"",clsTabsList:"",clsTabsListItem:"",clsTabsListItemActive:"",onTab:M.noop,onBeforeTab:M.noop_true,onTabsCreate:M.noop};M.tabsSetup=function(e){nn=D.extend({},nn,e)},window.metroTabsSetup,M.tabsSetup(window.metroTabsSetup);var sn={name:"Tabs",init:function(e,t){return this.options=D.extend({},nn,e),this.elem=t,this.element=D(t),this._targets=[],this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options,n=0<e.find(".active").length?D(e.find(".active")[0]):void 0;M.checkRuntime(e,"tabs"),this._createStructure(),this._createEvents(),this._open(n),H.exec(t.onTabsCreate,null,e[0]),e.fire("tabscreate")},_createStructure:function(){var e,t,n=this.element,i=this.options,s=n.parent(),a=s.hasClass("tabs"),o=a?s:D("<div>").addClass("tabs tabs-wrapper");if(H.isValue(n.attr("id"))||n.attr("id",H.elementId("tabs")),o.addClass(i.tabsPosition.replace(["-","_","+"]," ")),n.addClass("tabs-list"),"default"!==i.tabsType&&n.addClass("tabs-"+i.tabsType),a||(o.insertBefore(n),n.appendTo(o)),n.data("expanded",!1),e=D("<div>").addClass("expand-title"),o.prepend(e),0===(t=o.find(".hamburger")).length){t=D("<button>").attr("type","button").addClass("hamburger menu-down").appendTo(o);for(var r=0;r<3;r++)D("<span>").addClass("line").appendTo(t);!0===x.isLight(H.computedRgbToHex(H.getStyleOne(o,"background-color")))&&t.addClass("dark")}o.addClass(i.clsTabs),n.addClass(i.clsTabsList),n.children("li").addClass(i.clsTabsListItem),!0!==i.expand||i.tabsPosition.contains("vertical")?H.isValue(i.expandPoint)&&H.mediaExist(i.expandPoint)&&!i.tabsPosition.contains("vertical")&&o.addClass("tabs-expand"):o.addClass("tabs-expand"),i.tabsPosition.contains("vertical")&&o.addClass("tabs-expand")},_createEvents:function(){var s=this,a=this.element,o=this.options,r=a.parent();D(window).on(M.events.resize,function(){o.tabsPosition.contains("vertical")||(!0!==o.expand||o.tabsPosition.contains("vertical")?H.isValue(o.expandPoint)&&H.mediaExist(o.expandPoint)&&!o.tabsPosition.contains("vertical")?r.hasClass("tabs-expand")||r.addClass("tabs-expand"):r.hasClass("tabs-expand")&&r.removeClass("tabs-expand"):r.addClass("tabs-expand"))},{ns:a.attr("id")}),r.on(M.events.click,".hamburger, .expand-title",function(){!1===a.data("expanded")?(a.addClass("expand"),a.data("expanded",!0),r.find(".hamburger").addClass("active")):(a.removeClass("expand"),a.data("expanded",!1),r.find(".hamburger").removeClass("active"))}),a.on(M.events.click,"a",function(e){var t=D(this),n=t.attr("href").trim(),i=t.parent("li");if(i.hasClass("active")&&e.preventDefault(),!0===a.data("expanded")&&(a.removeClass("expand"),a.data("expanded",!1),r.find(".hamburger").removeClass("active")),!0!==H.exec(o.onBeforeTab,[i,a],i[0]))return!1;H.isValue(n)&&"#"===n[0]&&(s._open(i),e.preventDefault())})},_collectTargets:function(){var t=this,e=this.element.find("li");this._targets=[],D.each(e,function(){var e=D(this).find("a").attr("href").trim();1<e.length&&"#"===e[0]&&t._targets.push(e)})},_open:function(e){var t=this.element,n=this.options,i=t.find("li"),s=t.siblings(".expand-title");if(0!==i.length){this._collectTargets(),void 0===e&&(e=D(i[0]));var a=e.find("a").attr("href");void 0!==a&&(i.removeClass("active"),e.parent().hasClass("d-menu")?e.parent().parent().addClass("active"):e.addClass("active"),D.each(this._targets,function(){var e=D(this);0<e.length&&e.hide()}),"#"!==a&&"#"===a[0]&&D(a).show(),s.html(e.find("a").html()),e.addClass(n.clsTabsListItemActive),H.exec(n.onTab,[e[0]],t[0]),t.fire("tab",{tab:e[0]}))}},next:function(){var e;0<(e=this.element.find("li.active").next("li")).length&&this._open(e)},prev:function(){var e;0<(e=this.element.find("li.active").prev("li")).length&&this._open(e)},open:function(e){var t=this.element.find("li");H.isValue(e)||(e=1),H.isInt(e)?H.isValue(t[e-1])&&this._open(D(t[e-1])):this._open(D(e))},changeAttribute:function(e){},destroy:function(){var e=this.element,t=e.parent();return D(window).off(M.events.resize,{ns:e.attr("id")}),t.off(M.events.click,".hamburger, .expand-title"),e.off(M.events.click,"a"),e}};M.plugin("tabs",sn);var an={taginputDeferred:0,static:!1,clearButton:!0,clearButtonIcon:"<span class='default-icon-cross'></span>",randomColor:!1,maxTags:0,tagSeparator:",",tagTrigger:"Enter, Space, Comma",backspace:!0,clsComponent:"",clsInput:"",clsClearButton:"",clsTag:"",clsTagTitle:"",clsTagRemover:"",onBeforeTagAdd:M.noop_true,onTagAdd:M.noop,onBeforeTagRemove:M.noop_true,onTagRemove:M.noop,onTag:M.noop,onClear:M.noop,onTagTrigger:M.noop,onTagInputCreate:M.noop};M.tagInputSetup=function(e){an=D.extend({},an,e)},window.metroTagInputSetup,M.tagInputSetup(window.metroTagInputSetup);var on={name:"TagInput",init:function(e,t){return this.options=D.extend({},an,e),this.elem=t,this.element=D(t),this.values=[],this.triggers=[],this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"taginput"),this.triggers=(""+t.tagTrigger).toArray(","),(this.triggers.contains("Space")||this.triggers.contains("Spacebar"))&&(this.triggers.push(" "),this.triggers.push("Spacebar")),this.triggers.contains("Comma")&&this.triggers.push(","),this._createStructure(),this._createEvents(),H.exec(t.onTagInputCreate,null,e[0]),e.fire("taginputcreate")},_createStructure:function(){var e,t=this,n=this.element,i=this.options,s=n.val().trim();e=D("<div>").addClass("tag-input "+n[0].className).addClass(i.clsComponent).insertBefore(n),n.appendTo(e),n[0].className="",n.addClass("original-input"),D("<input type='text'>").addClass("input-wrapper").addClass(i.clsInput).attr("size",1).appendTo(e),!1===i.clearButton||n[0].readOnly||(e.addClass("padding-for-clear"),D("<button>").addClass("button input-clear-button").attr("tabindex",-1).attr("type","button").html(i.clearButtonIcon).appendTo(e)),H.isValue(s)&&D.each(H.strToArray(s,i.tagSeparator),function(){t._addTag(this)}),n.is(":disabled")?this.disable():this.enable(),!0!==i.static&&void 0===n.attr("readonly")||e.addClass("static-mode")},_createEvents:function(){var i=this,s=this.element,a=this.options,e=s.closest(".tag-input"),o=e.find(".input-wrapper");o.on(M.events.focus,function(){e.addClass("focused")}),o.on(M.events.blur,function(){e.removeClass("focused")}),o.on(M.events.inputchange,function(){o.attr("size",Math.ceil(o.val().length/2)+2)}),o.on(M.events.keydown,function(e){var t=o.val().trim(),n=e.key;"Enter"===n&&e.preventDefault(),!0!==a.backspace||"Backspace"!==n||0!==t.length?""!==t&&i.triggers.contains(n)&&(H.exec(a.onTagTrigger,[n],s[0]),s.fire("tagtrigger",{key:n}),o.val(""),i._addTag(t),o.attr("size",1)):0<i.values.length&&(i.values.splice(-1,1),s.siblings(".tag").last().remove(),s.val(i.values.join(a.tagSeparator)))}),o.on(M.events.keyup,function(e){var t=o.val(),n=e.key;i.triggers.contains(n)&&t[t.length-1]===n&&o.val(t.slice(0,-1))}),e.on(M.events.click,".tag .remover",function(){var e=D(this).closest(".tag");i._delTag(e)}),e.on(M.events.click,function(){o.focus()}),e.on(M.events.click,".input-clear-button",function(){var e=s.val();i.clear(),H.exec(a.onClear,[e],s[0]),s.fire("clear",{val:e})})},_addTag:function(e){var t,n,i,s=this.element,a=this.options,o=s.closest(".tag-input").find(".input-wrapper");if(!(0<a.maxTags&&this.values.length===a.maxTags)&&""!==(""+e).trim()&&H.exec(a.onBeforeTagAdd,[e,this.values],s[0])){if((t=D("<span>").addClass("tag").addClass(a.clsTag).insertBefore(o)).data("value",e),n=D("<span>").addClass("title").addClass(a.clsTagTitle).html(e),i=D("<span>").addClass("remover").addClass(a.clsTagRemover).html("&times;"),n.appendTo(t),i.appendTo(t),!0===a.randomColor){var r,l,c,d=x.colors(x.PALETTES.ALL);r=d[H.random(0,d.length-1)],c=x.darken(r,15),l=x.isDark(r)?"#ffffff":"#000000",t.css({backgroundColor:r,color:l}),i.css({backgroundColor:c,color:l})}this.values.push(e),s.val(this.values.join(a.tagSeparator)),H.exec(a.onTagAdd,[t[0],e,this.values],s[0]),s.fire("tagadd",{tag:t[0],val:e,values:this.values}),H.exec(a.onTag,[t[0],e,this.values],s[0]),s.fire("tag",{tag:t[0],val:e,values:this.values})}},_delTag:function(e){var t=this.element,n=this.options,i=e.data("value");H.exec(n.onBeforeTagRemove,[e,i,this.values],t[0])&&(H.arrayDelete(this.values,i),t.val(this.values.join(n.tagSeparator)),H.exec(n.onTagRemove,[e[0],i,this.values],t[0]),t.fire("tagremove",{tag:e[0],val:i,values:this.values}),H.exec(n.onTag,[e[0],i,this.values],t[0]),t.fire("tag",{tag:e[0],val:i,values:this.values}),e.remove())},tags:function(){return this.values},val:function(e){var t=this,n=this.options;if(!H.isValue(e))return this.tags();this.values=[],H.isValue(e)&&D.each(H.strToArray(e,n.tagSeparator),function(){t._addTag(this)})},clear:function(){var e=this.element,t=e.closest(".tag-input");this.values=[],e.val("").trigger("change"),t.find(".tag").remove()},disable:function(){this.element.data("disabled",!0),this.element.parent().addClass("disabled")},enable:function(){this.element.data("disabled",!1),this.element.parent().removeClass("disabled")},toggleState:function(){this.elem.disabled?this.disable():this.enable()},toggleStatic:function(e){var t=this.element.closest(".tag-input");(H.isValue(e)?H.bool(e):!t.hasClass("static-mode"))?t.addClass("static-mode"):t.removeClass("static-mode")},changeAttribute:function(e){var t,n=this,i=this.element;this.options;switch(e){case"value":t=i.attr("value").trim(),n.clear(),H.isValue(t)&&n.val(H.strToArray(t,","));break;case"disabled":this.toggleState();break;case"static":this.toggleStatic()}},destroy:function(){var e=this.element,t=e.closest(".tag-input"),n=t.find(".input-wrapper");return n.off(M.events.focus),n.off(M.events.blur),n.off(M.events.keydown),t.off(M.events.click,".tag .remover"),t.off(M.events.click),e}};M.plugin("taginput",on);var rn={textareaDeferred:0,charsCounter:null,charsCounterTemplate:"$1",defaultValue:"",prepend:"",append:"",copyInlineStyles:!1,clearButton:!0,clearButtonIcon:"<span class='default-icon-cross'></span>",autoSize:!0,clsPrepend:"",clsAppend:"",clsComponent:"",clsTextarea:"",onChange:M.noop,onTextareaCreate:M.noop};M.textareaSetup=function(e){rn=D.extend({},rn,e)},window.metroTextareaSetup,M.textareaSetup(window.metroTextareaSetup);var ln={name:"Textarea",init:function(e,t){return this.options=D.extend({},rn,e),this.elem=t,this.element=D(t),this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"textarea"),this._createStructure(),this._createEvents(),H.exec(t.onTextareaCreate,null,e[0]),e.fire("textareacreate")},_createStructure:function(){var e,t=this,n=this.element,i=this.elem,s=this.options,a=D("<div>").addClass("textarea "+n[0].className),o=D("<textarea>").addClass("fake-textarea");a.insertBefore(n),n.appendTo(a),o.appendTo(a),!1===s.clearButton||n[0].readOnly||(e=D("<button>").addClass("button input-clear-button").attr("tabindex",-1).attr("type","button").html(s.clearButtonIcon)).appendTo(a),"rtl"===n.attr("dir")&&a.addClass("rtl").attr("dir","rtl"),""!==s.prepend&&D("<div>").html(s.prepend).addClass("prepend").addClass(s.clsPrepend).appendTo(a);if(""!==s.append){var r=D("<div>").html(s.append);r.addClass("append").addClass(s.clsAppend).appendTo(a),e.css({right:r.outerWidth()+4})}if(!(i.className="")===s.copyInlineStyles)for(var l=0,c=i.style.length;l<c;l++)a.css(i.style[l],n.css(i.style[l]));H.isValue(s.defaultValue)&&""===n.val().trim()&&n.val(s.defaultValue),a.addClass(s.clsComponent),n.addClass(s.clsTextarea),n.is(":disabled")?this.disable():this.enable(),o.val(n.val()),!0===s.autoSize&&(a.addClass("autosize no-scroll-vertical"),setTimeout(function(){null,t.resize()},100))},_createEvents:function(){var e=this,t=this.element,n=this.options,i=t.closest(".textarea"),s=i.find(".fake-textarea"),a=D(n.charsCounter);i.on(M.events.click,".input-clear-button",function(){t.val(H.isValue(n.defaultValue)?n.defaultValue:"").trigger("change").trigger("keyup").focus()}),n.autoSize&&t.on(M.events.inputchange+" "+M.events.keyup,function(){s.val(this.value),e.resize()}),t.on(M.events.blur,function(){i.removeClass("focused")}),t.on(M.events.focus,function(){i.addClass("focused")}),t.on(M.events.keyup,function(){H.isValue(n.charsCounter)&&0<a.length&&("INPUT"===a[0].tagName?a.val(e.length()):a.html(n.charsCounterTemplate.replace("$1",e.length()))),H.exec(n.onChange,[t.val(),e.length()],t[0]),t.fire("change",{val:t.val(),length:e.length()})})},resize:function(){var e=this.element,t=e.closest(".textarea").find(".fake-textarea");t[0].style.cssText="height:auto;",t[0].style.cssText="height:"+t[0].scrollHeight+"px",e[0].style.cssText="height:"+t[0].scrollHeight+"px"},clear:function(){this.element.val("").trigger("change").trigger("keyup").focus()},toDefault:function(){this.element.val(H.isValue(this.options.defaultValue)?this.options.defaultValue:"").trigger("change").trigger("keyup").focus()},length:function(){return this.elem.value.split("").length},disable:function(){this.element.data("disabled",!0),this.element.parent().addClass("disabled")},enable:function(){this.element.data("disabled",!1),this.element.parent().removeClass("disabled")},toggleState:function(){this.elem.disabled?this.disable():this.enable()},changeAttribute:function(e){switch(e){case"disabled":this.toggleState()}},destroy:function(){var e=this.element,t=this.options;return e.closest(".textarea").off(M.events.click,".input-clear-button"),t.autoSize&&e.off(M.events.inputchange+" "+M.events.keyup),e.off(M.events.blur),e.off(M.events.focus),e.off(M.events.keyup),e}};M.plugin("textarea",ln);var cn={tileDeferred:0,size:"medium",cover:"",coverPosition:"center",effect:"",effectInterval:3e3,effectDuration:500,target:null,canTransform:!0,onClick:M.noop,onTileCreate:M.noop};M.tileSetup=function(e){cn=D.extend({},cn,e)},window.metroTileSetup,M.tileSetup(window.metroTileSetup);var dn={name:"Tile",init:function(e,t){return this.options=D.extend({},cn,e),this.elem=t,this.element=D(t),this.effectInterval=!1,this.images=[],this.slides=[],this.currentSlide=-1,this.unload=!1,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"tile"),this._createTile(),this._createEvents(),H.exec(t.onTileCreate,null,e[0]),e.fire("tilecreate")},_createTile:function(){function a(e,t,n){D.setTimeout(function(){e.fadeOut(500,function(){e.css("background-image","url("+t+")"),e.fadeIn()})},300*n)}var o=this,r=this.element,n=this.options,e=r.find(".slide"),t=r.find(".slide-front, .slide-back");if(r.addClass("tile-"+n.size),-1<n.effect.indexOf("hover-")&&(r.addClass("effect-"+n.effect),D.each(t,function(){var e=D(this);void 0!==e.data("cover")&&o._setCover(e,e.data("cover"),e.data("cover-position"))})),-1<n.effect.indexOf("animate-")&&1<e.length&&(D.each(e,function(e){var t=D(this);o.slides.push(this),void 0!==t.data("cover")&&o._setCover(t,t.data("cover"),t.data("cover-position")),0<e&&(-1<["animate-slide-up","animate-slide-down"].indexOf(n.effect)&&t.css("top","100%"),-1<["animate-slide-left","animate-slide-right"].indexOf(n.effect)&&t.css("left","100%"),-1<["animate-fade"].indexOf(n.effect)&&t.css("opacity",0))}),this.currentSlide=0,this._runEffects()),""!==n.cover&&this._setCover(r,n.cover),"image-set"===n.effect){r.addClass("image-set"),D.each(r.children("img"),function(e){o.images.push(this),D(this).remove()});for(var i=this.images.slice(),s=0;s<5;s++){var l=H.random(0,i.length-1),c=D("<div>").addClass("img -js-img-"+s).css("background-image","url("+i[l].src+")");r.prepend(c),i.splice(l,1)}var d=[0,1,4,3,2];D.setInterval(function(){var e,t=o.images.slice(),n=x.colors(x.PALETTES.ALL);e=n[H.random(0,n.length-1)],r.css("background-color",e);for(var i=0;i<d.length;i++){var s=H.random(0,t.length-1);a(r.find(".-js-img-"+d[i]),t[s].src,i),t.splice(s,1)}d=d.reverse()},5e3)}},_runEffects:function(){var n=this,i=this.options;!1===this.effectInterval&&(this.effectInterval=D.setInterval(function(){var e,t;e=D(n.slides[n.currentSlide]),n.currentSlide++,n.currentSlide===n.slides.length&&(n.currentSlide=0),t=n.slides[n.currentSlide],"animate-slide-up"===i.effect&&C.slideUp(D(e),D(t),i.effectDuration),"animate-slide-down"===i.effect&&C.slideDown(D(e),D(t),i.effectDuration),"animate-slide-left"===i.effect&&C.slideLeft(D(e),D(t),i.effectDuration),"animate-slide-right"===i.effect&&C.slideRight(D(e),D(t),i.effectDuration),"animate-fade"===i.effect&&C.fade(D(e),D(t),i.effectDuration)},i.effectInterval))},_stopEffects:function(){D.clearInterval(this.effectInterval),this.effectInterval=!1},_setCover:function(e,t,n){H.isValue(n)||(n=this.options.coverPosition),e.css({backgroundImage:"url("+t+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:n})},_createEvents:function(){var r=this.element,l=this.options;r.on(M.events.startAll,function(e){var t,n=D(this),i=r.width(),s=r.height(),a=H.pageXY(e).x-n.offset().left,o=H.pageXY(e).y-n.offset().top;!1===H.isRightMouse(e)&&(t=a<1*i/3&&(o<1*s/2||1*s/2<o)?"left":2*i/3<a&&(o<1*s/2||1*s/2<o)?"right":1*i/3<a&&a<2*i/3&&s/2<o?"bottom":"top",!0===l.canTransform&&n.addClass("transform-"+t),null!==l.target&&setTimeout(function(){document.location.href=l.target},100),H.exec(l.onClick,[t],r[0]),r.fire("click",{side:t}))}),r.on([M.events.stopAll,M.events.leave].join(" "),function(){D(this).removeClass("transform-left").removeClass("transform-right").removeClass("transform-top").removeClass("transform-bottom")})},changeAttribute:function(e){},destroy:function(){var e=this.element;return e.off(M.events.startAll),e.off([M.events.stopAll,M.events.leave].join(" ")),e}};M.plugin("tile",dn);var hn={timepickerDeferred:0,hoursStep:1,minutesStep:1,secondsStep:1,value:null,locale:METRO_LOCALE,distance:3,hours:!0,minutes:!0,seconds:!0,showLabels:!0,scrollSpeed:4,copyInlineStyles:!1,clsPicker:"",clsPart:"",clsHours:"",clsMinutes:"",clsSeconds:"",okButtonIcon:"<span class='default-icon-check'></span>",cancelButtonIcon:"<span class='default-icon-cross'></span>",onSet:M.noop,onOpen:M.noop,onClose:M.noop,onScroll:M.noop,onTimePickerCreate:M.noop};M.timePickerSetup=function(e){hn=D.extend({},hn,e)},window.metroTimePickerSetup,M.timePickerSetup(window.metroTimePickerSetup);var un={name:"TimePicker",init:function(e,t){return this.options=D.extend({},hn,e),this.elem=t,this.element=D(t),this.picker=null,this.isOpen=!1,this.value=[],this.locale=M.locales[METRO_LOCALE].calendar,this.listTimer={hours:null,minutes:null,seconds:null},this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e,t=this.element,n=this.options;for(M.checkRuntime(t,"timepicker"),n.distance<1&&(n.distance=1),n.hoursStep<1&&(n.hoursStep=1),23<n.hoursStep&&(n.hoursStep=23),n.minutesStep<1&&(n.minutesStep=1),59<n.minutesStep&&(n.minutesStep=59),n.secondsStep<1&&(n.secondsStep=1),59<n.secondsStep&&(n.secondsStep=59),""!==t.val()||H.isValue(n.value)||(n.value=(new Date).format("%H:%M:%S")),this.value=H.strToArray(""!==t.val()?t.val():String(n.value),":"),e=0;e<3;e++)void 0===this.value[e]||null===this.value[e]?this.value[e]=0:this.value[e]=parseInt(this.value[e]);this._normalizeValue(),void 0===M.locales[n.locale]&&(n.locale=METRO_LOCALE),this.locale=M.locales[n.locale].calendar,this._createStructure(),this._createEvents(),this._set(),H.exec(n.onTimePickerCreate,null,t[0]),t.fire("timepickercreate")},_normalizeValue:function(){var e=this.options;1<e.hoursStep&&(this.value[0]=H.nearest(this.value[0],e.hoursStep,!0)),1<e.minutesStep&&(this.value[1]=H.nearest(this.value[1],e.minutesStep,!0)),1<e.minutesStep&&(this.value[2]=H.nearest(this.value[2],e.secondsStep,!0))},_createStructure:function(){var e,t,n,i,s,a,o,r,l,c=this.element,d=this.options,h=c.prev(),u=c.parent(),p=H.elementId("time-picker");if(e=D("<div>").attr("id",p).addClass("wheel-picker time-picker "+c[0].className).addClass(d.clsPicker),0===h.length?u.prepend(e):e.insertAfter(h),c.attr("readonly",!0).appendTo(e),a=D("<div>").addClass("time-wrapper").appendTo(e),!0===d.hours&&(t=D("<div>").attr("data-title",this.locale.time.hours).addClass("hours").addClass(d.clsPart).addClass(d.clsHours).appendTo(a)),!0===d.minutes&&(n=D("<div>").attr("data-title",this.locale.time.minutes).addClass("minutes").addClass(d.clsPart).addClass(d.clsMinutes).appendTo(a)),!0===d.seconds&&(i=D("<div>").attr("data-title",this.locale.time.seconds).addClass("seconds").addClass(d.clsPart).addClass(d.clsSeconds).appendTo(a)),o=D("<div>").addClass("select-wrapper").appendTo(e),r=D("<div>").addClass("select-block").appendTo(o),!0===d.hours){for(t=D("<ul>").addClass("sel-hours").appendTo(r),s=0;s<d.distance;s++)D("<li>").html("&nbsp;").data("value",-1).appendTo(t);for(s=0;s<24;s+=d.hoursStep)D("<li>").addClass("js-hours-"+s).html(s<10?"0"+s:s).data("value",s).appendTo(t);for(s=0;s<d.distance;s++)D("<li>").html("&nbsp;").data("value",-1).appendTo(t)}if(!0===d.minutes){for(n=D("<ul>").addClass("sel-minutes").appendTo(r),s=0;s<d.distance;s++)D("<li>").html("&nbsp;").data("value",-1).appendTo(n);for(s=0;s<60;s+=d.minutesStep)D("<li>").addClass("js-minutes-"+s).html(s<10?"0"+s:s).data("value",s).appendTo(n);for(s=0;s<d.distance;s++)D("<li>").html("&nbsp;").data("value",-1).appendTo(n)}if(!0===d.seconds){for(i=D("<ul>").addClass("sel-seconds").appendTo(r),s=0;s<d.distance;s++)D("<li>").html("&nbsp;").data("value",-1).appendTo(i);for(s=0;s<60;s+=d.secondsStep)D("<li>").addClass("js-seconds-"+s).html(s<10?"0"+s:s).data("value",s).appendTo(i);for(s=0;s<d.distance;s++)D("<li>").html("&nbsp;").data("value",-1).appendTo(i)}if(r.height(40*(2*d.distance+1)),l=D("<div>").addClass("action-block").appendTo(o),D("<button>").attr("type","button").addClass("button action-ok").html(d.okButtonIcon).appendTo(l),D("<button>").attr("type","button").addClass("button action-cancel").html(d.cancelButtonIcon).appendTo(l),!(c[0].className="")===d.copyInlineStyles)for(s=0;s<c[0].style.length;s++)e.css(c[0].style[s],c.css(c[0].style[s]));!0===d.showLabels&&e.addClass("show-labels"),this.picker=e},_createEvents:function(){var r=this,a=this.options,l=this.picker;l.on(M.events.start,".select-block ul",function(e){if(!e.changedTouches){var t=this,n=H.pageXY(e).y;D(document).on(M.events.move,function(e){t.scrollTop-=a.scrollSpeed*(n>H.pageXY(e).y?-1:1),n=H.pageXY(e).y},{ns:l.attr("id")}),D(document).on(M.events.stop,function(){D(document).off(M.events.move,{ns:l.attr("id")}),D(document).off(M.events.stop,{ns:l.attr("id")})},{ns:l.attr("id")})}}),l.on(M.events.click,function(e){!1===r.isOpen&&r.open(),e.stopPropagation()}),l.on(M.events.click,".action-ok",function(e){var t,n,i,s=l.find(".sel-hours li.active"),a=l.find(".sel-minutes li.active"),o=l.find(".sel-seconds li.active");t=0===s.length?0:s.data("value"),n=0===a.length?0:a.data("value"),i=0===o.length?0:o.data("value"),r.value=[t,n,i],r._normalizeValue(),r._set(),r.close(),e.stopPropagation()}),l.on(M.events.click,".action-cancel",function(e){r.close(),e.stopPropagation()});D.each(["hours","minutes","seconds"],function(){var i=this,s=l.find(".sel-"+i);s.on("scroll",function(){r.isOpen&&(r.listTimer[i]&&(clearTimeout(r.listTimer[i]),r.listTimer[i]=null),r.listTimer[i]||(r.listTimer[i]=setTimeout(function(){var e,t,n;r.listTimer[i]=null,e=Math.round(Math.ceil(s.scrollTop())/40),n=(t=s.find(".js-"+i+"-"+e)).position().top-40*a.distance,s.find(".active").removeClass("active"),s[0].scrollTop=n,t.addClass("active"),H.exec(a.onScroll,[t,s,l],s[0])},150)))})})},_set:function(){var e=this.element,t=this.options,n=this.picker,i="00",s="00",a="00";!0===t.hours&&((i=parseInt(this.value[0]))<10&&(i="0"+i),n.find(".hours").html(i)),!0===t.minutes&&((s=parseInt(this.value[1]))<10&&(s="0"+s),n.find(".minutes").html(s)),!0===t.seconds&&((a=parseInt(this.value[2]))<10&&(a="0"+a),n.find(".seconds").html(a)),e.val([i,s,a].join(":")).trigger("change"),H.exec(t.onSet,[this.value,e.val()],e[0]),e.fire("set",{val:this.value,elementVal:e.val()})},open:function(){var e,t,n,i,s,a,o,r,l,c,d,h=this.element,u=this.options,p=this.picker,f=p.find("li"),m=p.find(".select-wrapper");m.parent().removeClass("for-top for-bottom"),m.show(0),f.removeClass("active"),o=H.inViewport(m[0]),r=H.rect(m[0]),!o&&0<r.top&&m.parent().addClass("for-bottom"),!o&&r.top<0&&m.parent().addClass("for-top");function v(e,t){e.scrollTop(0).animate({scrollTop:t.position().top-40*u.distance+e.scrollTop()},100)}!0===u.hours&&(e=parseInt(this.value[0]),l=(i=p.find(".sel-hours")).find("li.js-hours-"+e).addClass("active"),v(i,l)),!0===u.minutes&&(t=parseInt(this.value[1]),c=(s=p.find(".sel-minutes")).find("li.js-minutes-"+t).addClass("active"),v(s,c)),!0===u.seconds&&(n=parseInt(this.value[2]),d=(a=p.find(".sel-seconds")).find("li.js-seconds-"+n).addClass("active"),v(a,d)),this.isOpen=!0,H.exec(u.onOpen,[this.value],h[0]),h.fire("open",{val:this.value})},close:function(){var e=this.picker,t=this.options,n=this.element;e.find(".select-wrapper").hide(0),this.isOpen=!1,H.exec(t.onClose,[this.value],n[0]),n.fire("close",{val:this.value})},_convert:function(e){return Array.isArray(e)?e:"function"==typeof e.getMonth?[e.getHours(),e.getMinutes(),e.getSeconds()]:H.isObject(e)?[e.h,e.m,e.s]:H.strToArray(e,":")},val:function(e){if(void 0===e)return this.element.val();this.value=this._convert(e),this._normalizeValue(),this._set()},time:function(e){if(void 0===e)return{h:this.value[0],m:this.value[1],s:this.value[2]};this.value=this._convert(e),this._normalizeValue(),this._set()},date:function(e){if(void 0===e||"function"!=typeof e.getMonth){var t=new Date;return t.setHours(this.value[0]),t.setMinutes(this.value[1]),t.setSeconds(this.value[2]),t.setMilliseconds(0),t}this.value=this._convert(e),this._normalizeValue(),this._set()},changeAttribute:function(e){var t=this,n=this.element;"data-value"===e&&t.val(n.attr("data-value"))},destroy:function(){var e=this.element,t=this.picker;return D.each(["hours","minutes","seconds"],function(){t.find(".sel-"+this).off("scroll")}),t.off(M.events.start,".select-block ul"),t.off(M.events.click),t.off(M.events.click,".action-ok"),t.off(M.events.click,".action-cancel"),e}};M.plugin("timepicker",un),D(document).on(M.events.click,function(){D.each(D(".time-picker"),function(){D(this).find("input").each(function(){M.getPlugin(this,"timepicker").close()})})});var pn={callback:M.noop,timeout:METRO_TIMEOUT,distance:20,showTop:!1,clsToast:""};M.toastSetup=function(e){pn=D.extend({},pn,e)},window.metroToastSetup,M.toastSetup(window.metroToastSetup);var fn={create:function(e,t,n,i,s){var a=D.extend({},pn,s),o=D("<div>").addClass("toast").html(e).appendTo(D("body")),r=o.outerWidth();o.hide(),n=n||a.timeout,t=t||a.callback,i=i||a.clsToast,!0===a.showTop?o.addClass("show-top").css({top:a.distance}):o.css({bottom:a.distance}),o.css({left:"50%","margin-left":-r/2}),o.addClass(a.clsToast),o.addClass(i),o.fadeIn(METRO_ANIMATION_DURATION),setTimeout(function(){null,o.fadeOut(METRO_ANIMATION_DURATION,function(){o.remove(),H.callback(t)})},n)}};M.toast=fn;var mn={LEFT:"left",RIGHT:"right",UP:"up",DOWN:"down",IN:"in",OUT:"out",NONE:"none",AUTO:"auto",SWIPE:"swipe",PINCH:"pinch",TAP:"tap",DOUBLE_TAP:"doubletap",LONG_TAP:"longtap",HOLD:"hold",HORIZONTAL:"horizontal",VERTICAL:"vertical",ALL_FINGERS:"all",DOUBLE_TAP_THRESHOLD:10,PHASE_START:"start",PHASE_MOVE:"move",PHASE_END:"end",PHASE_CANCEL:"cancel",SUPPORTS_TOUCH:"ontouchstart"in window,SUPPORTS_POINTER_IE10:window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!("ontouchstart"in window),SUPPORTS_POINTER:(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!("ontouchstart"in window),IN_TOUCH:"intouch"},vn={touchDeferred:0,fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".no-swipe",preventDefaultEvents:!0,onSwipe:M.noop,onSwipeLeft:M.noop,onSwipeRight:M.noop,onSwipeUp:M.noop,onSwipeDown:M.noop,onSwipeStatus:M.noop_true,onPinchIn:M.noop,onPinchOut:M.noop,onPinchStatus:M.noop_true,onTap:M.noop,onDoubleTap:M.noop,onLongTap:M.noop,onHold:M.noop,onSwipeCreate:M.noop};M.touchSetup=function(e){vn=D.extend({},vn,e)},window.metroTouchSetup,M.sliderSetup(window.metroTouchSetup);var gn={name:"Touch",init:function(e,t){return this.options=D.extend({},vn,e),this.elem=t,this.element=D(t),this.useTouchEvents=mn.SUPPORTS_TOUCH||mn.SUPPORTS_POINTER||!this.options.fallbackToMouseEvents,this.START_EV=this.useTouchEvents?mn.SUPPORTS_POINTER?mn.SUPPORTS_POINTER_IE10?"MSPointerDown":"pointerdown":"touchstart":"mousedown",this.MOVE_EV=this.useTouchEvents?mn.SUPPORTS_POINTER?mn.SUPPORTS_POINTER_IE10?"MSPointerMove":"pointermove":"touchmove":"mousemove",this.END_EV=this.useTouchEvents?mn.SUPPORTS_POINTER?mn.SUPPORTS_POINTER_IE10?"MSPointerUp":"pointerup":"touchend":"mouseup",this.LEAVE_EV=this.useTouchEvents?mn.SUPPORTS_POINTER?"mouseleave":null:"mouseleave",this.CANCEL_EV=mn.SUPPORTS_POINTER?mn.SUPPORTS_POINTER_IE10?"MSPointerCancel":"pointercancel":"touchcancel",this.distance=0,this.direction=null,this.currentDirection=null,this.duration=0,this.startTouchesDistance=0,this.endTouchesDistance=0,this.pinchZoom=1,this.pinchDistance=0,this.pinchDirection=0,this.maximumsMap=null,this.phase="start",this.fingerCount=0,this.fingerData={},this.startTime=0,this.endTime=0,this.previousTouchEndTime=0,this.fingerCountAtRelease=0,this.doubleTapStartTime=0,this.singleTapTimeout=null,this.holdTimeout=null,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;void 0!==t.allowPageScroll||t.onSwipe===M.noop&&t.onSwipeStatus===M.noop||(t.allowPageScroll=mn.NONE);try{e.on(this.START_EV,D.proxy(this.touchStart,this)),e.on(this.CANCEL_EV,D.proxy(this.touchCancel,this))}catch(e){throw new Error("Events not supported "+this.START_EV+","+this.CANCEL_EV+" on Swipe")}H.exec(t.onSwipeCreate,null,e[0]),e.fire("swipecreate")},touchStart:function(e){var t=this.element,n=this.options;if(!(this.getTouchInProgress()||0<D(e.target).closest(n.excludedElements).length)){var i,s=e,a=s.touches,o=a?a[0]:s;return this.phase=mn.PHASE_START,a?this.fingerCount=a.length:!1!==n.preventDefaultEvents&&e.preventDefault(),this.distance=0,this.direction=null,this.currentDirection=null,this.pinchDirection=null,this.duration=0,this.startTouchesDistance=0,this.endTouchesDistance=0,this.pinchZoom=1,this.pinchDistance=0,this.maximumsMap=this.createMaximumsData(),this.cancelMultiFingerRelease(),this.createFingerData(0,o),!a||this.fingerCount===n.fingers||n.fingers===mn.ALL_FINGERS||this.hasPinches()?(this.startTime=this.getTimeStamp(),2===this.fingerCount&&(this.createFingerData(1,a[1]),this.startTouchesDistance=this.endTouchesDistance=this.calculateTouchesDistance(this.fingerData[0].start,this.fingerData[1].start)),n.onSwipeStatus===M.noop&&n.onPinchStatus===M.noop||(i=this.triggerHandler(s,this.phase))):i=!1,!1===i?(this.phase=mn.PHASE_CANCEL,this.triggerHandler(s,this.phase),i):(n.onHold!==M.noop&&(this.holdTimeout=setTimeout(D.proxy(function(){t.trigger("hold",[s.target]),n.onHold!==M.noop&&(i=H.exec(n.onHold,[s,s.target],t[0]),t.fire("hold",{event:s,target:s.target}))},this),n.longTapThreshold)),this.setTouchInProgress(!0),null)}},touchMove:function(e){var t=e;if(this.phase!==mn.PHASE_END&&this.phase!==mn.PHASE_CANCEL&&!this.inMultiFingerRelease()){var n,i=t.touches,s=i?i[0]:t,a=this.updateFingerData(s);if(this.endTime=this.getTimeStamp(),i&&(this.fingerCount=i.length),this.options.onHold!==M.noop&&clearTimeout(this.holdTimeout),this.phase=mn.PHASE_MOVE,2===this.fingerCount&&(0===this.startTouchesDistance?(this.createFingerData(1,i[1]),this.startTouchesDistance=this.endTouchesDistance=this.calculateTouchesDistance(this.fingerData[0].start,this.fingerData[1].start)):(this.updateFingerData(i[1]),this.endTouchesDistance=this.calculateTouchesDistance(this.fingerData[0].end,this.fingerData[1].end),this.pinchDirection=this.calculatePinchDirection(this.fingerData[0].end,this.fingerData[1].end)),this.pinchZoom=this.calculatePinchZoom(this.startTouchesDistance,this.endTouchesDistance),this.pinchDistance=Math.abs(this.startTouchesDistance-this.endTouchesDistance)),this.fingerCount===this.options.fingers||this.options.fingers===mn.ALL_FINGERS||!i||this.hasPinches()){if(this.direction=this.calculateDirection(a.start,a.end),this.currentDirection=this.calculateDirection(a.last,a.end),this.validateDefaultEvent(e,this.currentDirection),this.distance=this.calculateDistance(a.start,a.end),this.duration=this.calculateDuration(),this.setMaxDistance(this.direction,this.distance),n=this.triggerHandler(t,this.phase),!this.options.triggerOnTouchEnd||this.options.triggerOnTouchLeave){var o=!0;if(this.options.triggerOnTouchLeave){var r=this.getBounds(this);o=this.isInBounds(a.end,r)}!this.options.triggerOnTouchEnd&&o?this.phase=this.getNextPhase(mn.PHASE_MOVE):this.options.triggerOnTouchLeave&&!o&&(this.phase=this.getNextPhase(mn.PHASE_END)),this.phase!==mn.PHASE_CANCEL&&this.phase!==mn.PHASE_END||this.triggerHandler(t,this.phase)}}else this.phase=mn.PHASE_CANCEL,this.triggerHandler(t,this.phase);!1===n&&(this.phase=mn.PHASE_CANCEL,this.triggerHandler(t,this.phase))}},touchEnd:function(e){var t=e,n=t.touches;if(n){if(n.length&&!this.inMultiFingerRelease())return this.startMultiFingerRelease(t),!0;if(n.length&&this.inMultiFingerRelease())return!0}return this.inMultiFingerRelease()&&(this.fingerCount=this.fingerCountAtRelease),this.endTime=this.getTimeStamp(),this.duration=this.calculateDuration(),this.didSwipeBackToCancel()||!this.validateSwipeDistance()?(this.phase=mn.PHASE_CANCEL,this.triggerHandler(t,this.phase)):this.options.triggerOnTouchEnd||!1===this.options.triggerOnTouchEnd&&this.phase===mn.PHASE_MOVE?(!1!==this.options.preventDefaultEvents&&e.preventDefault(),this.phase=mn.PHASE_END,this.triggerHandler(t,this.phase)):!this.options.triggerOnTouchEnd&&this.hasTap()?(this.phase=mn.PHASE_END,this.triggerHandlerForGesture(t,this.phase,mn.TAP)):this.phase===mn.PHASE_MOVE&&(this.phase=mn.PHASE_CANCEL,this.triggerHandler(t,this.phase)),this.setTouchInProgress(!1),null},touchCancel:function(){this.fingerCount=0,this.endTime=0,this.startTime=0,this.startTouchesDistance=0,this.endTouchesDistance=0,this.pinchZoom=1,this.cancelMultiFingerRelease(),this.setTouchInProgress(!1)},touchLeave:function(e){this.options.triggerOnTouchLeave&&(this.phase=this.getNextPhase(mn.PHASE_END),this.triggerHandler(e,this.phase))},getNextPhase:function(e){var t=this.options,n=e,i=this.validateSwipeTime(),s=this.validateSwipeDistance(),a=this.didSwipeBackToCancel();return!i||a?n=mn.PHASE_CANCEL:!s||e!==mn.PHASE_MOVE||t.triggerOnTouchEnd&&!t.triggerOnTouchLeave?!s&&e===mn.PHASE_END&&t.triggerOnTouchLeave&&(n=mn.PHASE_CANCEL):n=mn.PHASE_END,n},triggerHandler:function(e,t){var n,i=e.touches;return(this.didSwipe()||this.hasSwipes())&&(n=this.triggerHandlerForGesture(e,t,mn.SWIPE)),(this.didPinch()||this.hasPinches())&&!1!==n&&(n=this.triggerHandlerForGesture(e,t,mn.PINCH)),this.didDoubleTap()&&!1!==n?n=this.triggerHandlerForGesture(e,t,mn.DOUBLE_TAP):this.didLongTap()&&!1!==n?n=this.triggerHandlerForGesture(e,t,mn.LONG_TAP):this.didTap()&&!1!==n&&(n=this.triggerHandlerForGesture(e,t,mn.TAP)),t===mn.PHASE_CANCEL&&this.touchCancel(e),t===mn.PHASE_END&&(i&&i.length||this.touchCancel(e)),n},triggerHandlerForGesture:function(e,t,n){var i,s=this.element,a=this.options;if(n===mn.SWIPE){if(s.trigger("swipeStatus",[t,this.direction||null,this.distance||0,this.duration||0,this.fingerCount,this.fingerData,this.currentDirection]),i=H.exec(a.onSwipeStatus,[e,t,this.direction||null,this.distance||0,this.duration||0,this.fingerCount,this.fingerData,this.currentDirection],s[0]),s.fire("swipestatus",{event:e,phase:t,direction:this.direction,distance:this.distance,duration:this.duration,fingerCount:this.fingerCount,fingerData:this.fingerData,currentDirection:this.currentDirection}),!1===i)return!1;if(t===mn.PHASE_END&&this.validateSwipe()){if(clearTimeout(this.singleTapTimeout),clearTimeout(this.holdTimeout),s.trigger("swipe",[this.direction,this.distance,this.duration,this.fingerCount,this.fingerData,this.currentDirection]),i=H.exec(a.onSwipe,[e,this.direction,this.distance,this.duration,this.fingerCount,this.fingerData,this.currentDirection],s[0]),s.fire("swipe",{event:e,direction:this.direction,distance:this.distance,duration:this.duration,fingerCount:this.fingerCount,fingerData:this.fingerData,currentDirection:this.currentDirection}),!1===i)return!1;switch(this.direction){case mn.LEFT:s.trigger("swipeLeft",[this.direction,this.distance,this.duration,this.fingerCount,this.fingerData,this.currentDirection]),i=H.exec(a.onSwipeLeft,[e,this.direction,this.distance,this.duration,this.fingerCount,this.fingerData,this.currentDirection],s[0]),s.fire("swipeleft",{event:e,direction:this.direction,distance:this.distance,duration:this.duration,fingerCount:this.fingerCount,fingerData:this.fingerData,currentDirection:this.currentDirection});break;case mn.RIGHT:s.trigger("swipeRight",[this.direction,this.distance,this.duration,this.fingerCount,this.fingerData,this.currentDirection]),i=H.exec(a.onSwipeRight,[e,this.direction,this.distance,this.duration,this.fingerCount,this.fingerData,this.currentDirection],s[0]),s.fire("swiperight",{event:e,direction:this.direction,distance:this.distance,duration:this.duration,fingerCount:this.fingerCount,fingerData:this.fingerData,currentDirection:this.currentDirection});break;case mn.UP:s.trigger("swipeUp",[this.direction,this.distance,this.duration,this.fingerCount,this.fingerData,this.currentDirection]),i=H.exec(a.onSwipeUp,[e,this.direction,this.distance,this.duration,this.fingerCount,this.fingerData,this.currentDirection],s[0]),s.fire("swipeup",{event:e,direction:this.direction,distance:this.distance,duration:this.duration,fingerCount:this.fingerCount,fingerData:this.fingerData,currentDirection:this.currentDirection});break;case mn.DOWN:s.trigger("swipeDown",[this.direction,this.distance,this.duration,this.fingerCount,this.fingerData,this.currentDirection]),i=H.exec(a.onSwipeDown,[e,this.direction,this.distance,this.duration,this.fingerCount,this.fingerData,this.currentDirection],s[0]),s.fire("swipedown",{event:e,direction:this.direction,distance:this.distance,duration:this.duration,fingerCount:this.fingerCount,fingerData:this.fingerData,currentDirection:this.currentDirection})}}}if(n===mn.PINCH){if(s.trigger("pinchStatus",[t,this.pinchDirection||null,this.pinchDistance||0,this.duration||0,this.fingerCount,this.fingerData,this.pinchZoom]),i=H.exec(a.onPinchStatus,[e,t,this.pinchDirection||null,this.pinchDistance||0,this.duration||0,this.fingerCount,this.fingerData,this.pinchZoom],s[0]),s.fire("pinchstatus",{event:e,phase:t,direction:this.pinchDirection,distance:this.pinchDistance,duration:this.duration,fingerCount:this.fingerCount,fingerData:this.fingerData,zoom:this.pinchZoom}),!1===i)return!1;if(t===mn.PHASE_END&&this.validatePinch())switch(this.pinchDirection){case mn.IN:s.trigger("pinchIn",[this.pinchDirection||null,this.pinchDistance||0,this.duration||0,this.fingerCount,this.fingerData,this.pinchZoom]),i=H.exec(a.onPinchIn,[e,this.pinchDirection||null,this.pinchDistance||0,this.duration||0,this.fingerCount,this.fingerData,this.pinchZoom],s[0]),s.fire("pinchin",{event:e,direction:this.pinchDirection,distance:this.pinchDistance,duration:this.duration,fingerCount:this.fingerCount,fingerData:this.fingerData,zoom:this.pinchZoom});break;case mn.OUT:s.trigger("pinchOut",[this.pinchDirection||null,this.pinchDistance||0,this.duration||0,this.fingerCount,this.fingerData,this.pinchZoom]),i=H.exec(a.onPinchOut,[e,this.pinchDirection||null,this.pinchDistance||0,this.duration||0,this.fingerCount,this.fingerData,this.pinchZoom],s[0]),s.fire("pinchout",{event:e,direction:this.pinchDirection,distance:this.pinchDistance,duration:this.duration,fingerCount:this.fingerCount,fingerData:this.fingerData,zoom:this.pinchZoom})}}return n===mn.TAP?t!==mn.PHASE_CANCEL&&t!==mn.PHASE_END||(clearTimeout(this.singleTapTimeout),clearTimeout(this.holdTimeout),this.hasDoubleTap()&&!this.inDoubleTap()?(this.doubleTapStartTime=this.getTimeStamp(),this.singleTapTimeout=setTimeout(D.proxy(function(){this.doubleTapStartTime=null,i=H.exec(a.onTap,[e,e.target],s[0]),s.fire("tap",{event:e,target:e.target})},this),a.doubleTapThreshold)):(this.doubleTapStartTime=null,i=H.exec(a.onTap,[e,e.target],s[0]),s.fire("tap",{event:e,target:e.target}))):n===mn.DOUBLE_TAP?t!==mn.PHASE_CANCEL&&t!==mn.PHASE_END||(clearTimeout(this.singleTapTimeout),clearTimeout(this.holdTimeout),this.doubleTapStartTime=null,i=H.exec(a.onDoubleTap,[e,e.target],s[0]),s.fire("doubletap",{event:e,target:e.target})):n===mn.LONG_TAP&&(t!==mn.PHASE_CANCEL&&t!==mn.PHASE_END||(clearTimeout(this.singleTapTimeout),this.doubleTapStartTime=null,i=H.exec(a.onLongTap,[e,e.target],s[0]),s.fire("longtap",{event:e,target:e.target}))),i},validateSwipeDistance:function(){var e=!0;return null!==this.options.threshold&&(e=this.distance>=this.options.threshold),e},didSwipeBackToCancel:function(){var e=this.options,t=!1;return null!==e.cancelThreshold&&null!==this.direction&&(t=this.getMaxDistance(this.direction)-this.distance>=e.cancelThreshold),t},validatePinchDistance:function(){return null===this.options.pinchThreshold||this.pinchDistance>=this.options.pinchThreshold},validateSwipeTime:function(){var e=this.options;return!e.maxTimeThreshold||duration<e.maxTimeThreshold},validateDefaultEvent:function(e,t){var n=this.options;if(!1!==n.preventDefaultEvents)if(n.allowPageScroll===mn.NONE)e.preventDefault();else{var i=n.allowPageScroll===mn.AUTO;switch(t){case mn.LEFT:(n.onSwipeLeft!==M.noop&&i||!i&&n.allowPageScroll.toLowerCase()!==mn.HORIZONTAL)&&e.preventDefault();break;case mn.RIGHT:(n.onSwipeRight!==M.noop&&i||!i&&n.allowPageScroll.toLowerCase()!==mn.HORIZONTAL)&&e.preventDefault();break;case mn.UP:(n.onSwipeUp!==M.noop&&i||!i&&n.allowPageScroll.toLowerCase()!==mn.VERTICAL)&&e.preventDefault();break;case mn.DOWN:(n.onSwipeDown!==M.noop&&i||!i&&n.allowPageScroll.toLowerCase()!==mn.VERTICAL)&&e.preventDefault()}}},validatePinch:function(){var e=this.validateFingers(),t=this.validateEndPoint(),n=this.validatePinchDistance();return e&&t&&n},hasPinches:function(){return!!(this.options.onPinchStatus||this.options.onPinchIn||this.options.onPinchOut)},didPinch:function(){return!(!this.validatePinch()||!this.hasPinches())},validateSwipe:function(){var e=this.validateSwipeTime(),t=this.validateSwipeDistance(),n=this.validateFingers(),i=this.validateEndPoint();return!this.didSwipeBackToCancel()&&i&&n&&t&&e},hasSwipes:function(){var e=this.options;return!(e.onSwipe===M.noop&&e.onSwipeStatus===M.noop&&e.onSwipeLeft===M.noop&&e.onSwipeRight===M.noop&&e.onSwipeUp===M.noop&&e.onSwipeDown===M.noop)},didSwipe:function(){return!(!this.validateSwipe()||!this.hasSwipes())},validateFingers:function(){return this.fingerCount===this.options.fingers||this.options.fingers===mn.ALL_FINGERS||!mn.SUPPORTS_TOUCH},validateEndPoint:function(){return 0!==this.fingerData[0].end.x},hasTap:function(){return this.options.onTap!==M.noop},hasDoubleTap:function(){return this.options.onDoubleTap!==M.noop},hasLongTap:function(){return this.options.onLongTap!==M.noop},validateDoubleTap:function(){if(null==this.doubleTapStartTime)return!1;var e=this.getTimeStamp();return this.hasDoubleTap()&&e-this.doubleTapStartTime<=this.options.doubleTapThreshold},inDoubleTap:function(){return this.validateDoubleTap()},validateTap:function(){return(1===this.fingerCount||!mn.SUPPORTS_TOUCH)&&(isNaN(this.distance)||this.distance<this.options.threshold)},validateLongTap:function(){var e=this.options;return this.duration>e.longTapThreshold&&this.distance<mn.DOUBLE_TAP_THRESHOLD},didTap:function(){return!(!this.validateTap()||!this.hasTap())},didDoubleTap:function(){return!(!this.validateDoubleTap()||!this.hasDoubleTap())},didLongTap:function(){return!(!this.validateLongTap()||!this.hasLongTap())},startMultiFingerRelease:function(e){this.previousTouchEndTime=this.getTimeStamp(),this.fingerCountAtRelease=e.touches.length+1},cancelMultiFingerRelease:function(){this.previousTouchEndTime=0,this.fingerCountAtRelease=0},inMultiFingerRelease:function(){var e=!1;this.previousTouchEndTime&&this.getTimeStamp()-this.previousTouchEndTime<=this.options.fingerReleaseThreshold&&(e=!0);return e},getTouchInProgress:function(){return!0===this.element.data("intouch")},setTouchInProgress:function(e){var t=this.element;t&&(!0===e?(t.on(this.MOVE_EV,D.proxy(this.touchMove,this)),t.on(this.END_EV,D.proxy(this.touchEnd,this)),this.LEAVE_EV&&t.on(this.LEAVE_EV,D.proxy(this.touchLeave,this))):(t.off(this.MOVE_EV),t.off(this.END_EV),this.LEAVE_EV&&t.off(this.LEAVE_EV)),t.data("intouch",!0===e))},createFingerData:function(e,t){var n={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return n.start.x=n.last.x=n.end.x=t.pageX||t.clientX,n.start.y=n.last.y=n.end.y=t.pageY||t.clientY,this.fingerData[e]=n},updateFingerData:function(e){var t=void 0!==e.identifier?e.identifier:0,n=this.getFingerData(t);return null===n&&(n=this.createFingerData(t,e)),n.last.x=n.end.x,n.last.y=n.end.y,n.end.x=e.pageX||e.clientX,n.end.y=e.pageY||e.clientY,n},getFingerData:function(e){return this.fingerData[e]||null},setMaxDistance:function(e,t){e!==mn.NONE&&(t=Math.max(t,this.getMaxDistance(e)),this.maximumsMap[e].distance=t)},getMaxDistance:function(e){return this.maximumsMap[e]?this.maximumsMap[e].distance:void 0},createMaximumsData:function(){var e={};return e[mn.LEFT]=this.createMaximumVO(mn.LEFT),e[mn.RIGHT]=this.createMaximumVO(mn.RIGHT),e[mn.UP]=this.createMaximumVO(mn.UP),e[mn.DOWN]=this.createMaximumVO(mn.DOWN),e},createMaximumVO:function(e){return{direction:e,distance:0}},calculateDuration:function(){return this.endTime-this.startTime},calculateTouchesDistance:function(e,t){var n=Math.abs(e.x-t.x),i=Math.abs(e.y-t.y);return Math.round(Math.sqrt(n*n+i*i))},calculatePinchZoom:function(e,t){return(t/e*100).toFixed(2)},calculatePinchDirection:function(){return this.pinchZoom<1?mn.OUT:mn.IN},calculateDistance:function(e,t){return Math.round(Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)))},calculateAngle:function(e,t){var n=e.x-t.x,i=t.y-e.y,s=Math.atan2(i,n),a=Math.round(180*s/Math.PI);return a<0&&(a=360-Math.abs(a)),a},calculateDirection:function(e,t){if(this.comparePoints(e,t))return mn.NONE;var n=this.calculateAngle(e,t);return n<=45&&0<=n?mn.LEFT:n<=360&&315<=n?mn.LEFT:135<=n&&n<=225?mn.RIGHT:45<n&&n<135?mn.DOWN:mn.UP},getTimeStamp:function(){return(new Date).getTime()},getBounds:function(e){var t=(e=D(e)).offset();return{left:t.left,right:t.left+e.outerWidth(),top:t.top,bottom:t.top+e.outerHeight()}},isInBounds:function(e,t){return e.x>t.left&&e.x<t.right&&e.y>t.top&&e.y<t.bottom},comparePoints:function(e,t){return e.x===t.x&&e.y===t.y},removeListeners:function(){var e=this.element;e.off(this.START_EV),e.off(this.CANCEL_EV),e.off(this.MOVE_EV),e.off(this.END_EV),this.LEAVE_EV&&e.off(this.LEAVE_EV),this.setTouchInProgress(!1)},enable:function(){return this.disable(),this.element.on(this.START_EV,this.touchStart),this.element.on(this.CANCEL_EV,this.touchCancel),this.element},disable:function(){return this.removeListeners(),this.element},changeAttribute:function(e){},destroy:function(){this.removeListeners()}};M.touch=mn,M.plugin("touch",gn);var Cn={treeviewDeferred:0,showChildCount:!1,duration:100,onNodeClick:M.noop,onNodeDblClick:M.noop,onNodeDelete:M.noop,onNodeInsert:M.noop,onNodeClean:M.noop,onCheckClick:M.noop,onRadioClick:M.noop,onExpandNode:M.noop,onCollapseNode:M.noop,onTreeViewCreate:M.noop};M.treeViewSetup=function(e){Cn=D.extend({},Cn,e)},window.metroTreeViewSetup,M.treeViewSetup(window.metroTreeViewSetup);var bn={name:"TreeView",init:function(e,t){return this.options=D.extend({},Cn,e),this.elem=t,this.element=D(t),this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this,t=this.element,n=this.options;M.checkRuntime(t,"treeview"),this._createTree(),this._createEvents(),D.each(t.find("input"),function(){D(this).is(":checked")&&e._recheck(this)}),H.exec(n.onTreeViewCreate,null,t[0]),t.fire("treeviewcreate")},_createIcon:function(e){var t,n;return n=H.isTag(e)?D(e):D("<img src='' alt=''>").attr("src",e),(t=D("<span>").addClass("icon")).html(n.outerHTML()),t},_createCaption:function(e){return D("<span>").addClass("caption").html(e)},_createToggle:function(){return D("<span>").addClass("node-toggle")},_createNode:function(e){var t;return t=D("<li>"),void 0!==e.caption&&t.prepend(this._createCaption(e.caption)),void 0!==e.icon&&t.prepend(this._createIcon(e.icon)),void 0!==e.html&&t.append(e.html),t},_createTree:function(){var i=this,e=this.element,s=this.options,t=e.find("li");e.addClass("treeview"),D.each(t,function(){var e,t,n=D(this);e=n.data("caption"),t=n.data("icon"),void 0!==e&&(0<n.children("ul").length&&!0===s.showChildCount&&(e+=" ("+n.children("ul").children("li").length+")"),n.prepend(i._createCaption(e))),void 0!==t&&n.prepend(i._createIcon(t)),0<n.children("ul").length&&(n.addClass("tree-node"),n.append(i._createToggle()),!0!==H.bool(n.attr("data-collapsed"))?n.addClass("expanded"):n.children("ul").hide())})},_createEvents:function(){var s=this,a=this.element,o=this.options;a.on(M.events.click,".node-toggle",function(e){var t=D(this).parent();s.toggleNode(t),e.preventDefault()}),a.on(M.events.click,"li > .caption",function(e){var t=D(this).parent();s.current(t),H.exec(o.onNodeClick,[t[0]],a[0]),a.fire("nodeclick",{node:t[0]}),e.preventDefault()}),a.on(M.events.dblclick,"li > .caption",function(e){var t=D(this).closest("li"),n=t.children(".node-toggle"),i=t.children("ul");(0<n.length||0<i.length)&&s.toggleNode(t),H.exec(o.onNodeDblClick,[t[0]],a[0]),a.fire("nodedblclick",{node:t[0]}),e.preventDefault()}),a.on(M.events.click,"input[type=radio]",function(){var e=D(this),t=e.is(":checked"),n=e.closest("li");s.current(n),H.exec(o.onRadioClick,[t,e[0],n[0]],a[0]),a.fire("radioclick",{checked:t,check:e[0],node:n[0]})}),a.on(M.events.click,"input[type=checkbox]",function(){var e=D(this),t=e.is(":checked"),n=e.closest("li");s._recheck(e),H.exec(o.onCheckClick,[t,e[0],n[0]],a[0]),a.fire("checkclick",{checked:t,check:e[0],node:n[0]})})},_recheck:function(e){var t,n,i,s,a=this.element;t=(e=D(e)).is(":checked"),n=e.closest("li"),this.current(n),(i=e.closest("li").find("ul input[type=checkbox]")).attr("data-indeterminate",!1),i.prop("checked",t),i.trigger("change"),s=[],D.each(a.find("input[type=checkbox]"),function(){s.push(this)}),D.each(s.reverse(),function(){var e=D(this),t=e.closest("li").children("ul").find("input[type=checkbox]").length,n=e.closest("li").children("ul").find("input[type=checkbox]").filter(function(e){return e.checked}).length;0<t&&0===n&&(e.attr("data-indeterminate",!1),e.prop("checked",!1),e.trigger("change")),0===n?e.attr("data-indeterminate",!1):0<n&&n<t?e.attr("data-indeterminate",!0):t===n&&(e.attr("data-indeterminate",!1),e.prop("checked",!0),e.trigger("change"))})},current:function(e){var t=this.element;if(void 0===e)return t.find("li.current");t.find("li").removeClass("current"),e.addClass("current")},toggleNode:function(e){var t,n=D(e),i=this.element,s=this.options,a=!n.data("collapsed");n.toggleClass("expanded"),n.data("collapsed",a),t=!0==a?"slideUp":"slideDown",a?(H.exec(s.onCollapseNode,[n[0]],i[0]),i.fire("collapsenode",{node:n[0]})):(H.exec(s.onExpandNode,[n[0]],i[0]),i.fire("expandnode",{node:n[0]})),n.children("ul")[t](s.duration)},addTo:function(e,t){var n,i,s=this.element,a=this.options;return null===e?n=s:0===(n=(e=D(e)).children("ul")).length&&(n=D("<ul>").appendTo(e),this._createToggle().appendTo(e),e.addClass("expanded")),(i=this._createNode(t)).appendTo(n),H.exec(a.onNodeInsert,[i[0],e?e[0]:null],s[0]),s.fire("nodeinsert",{node:i[0],parent:e?e[0]:null}),i},insertBefore:function(e,t){var n=this.element,i=this.options,s=this._createNode(t);return H.isNull(e)?this.addTo(e,t):(e=D(e),s.insertBefore(e),H.exec(i.onNodeInsert,[s[0],e[0]],n[0]),n.fire("nodeinsert",{node:s[0],parent:e?e[0]:null}),s)},insertAfter:function(e,t){var n=this.element,i=this.options,s=this._createNode(t);return H.isNull(e)?this.addTo(e,t):(e=D(e),s.insertAfter(e),H.exec(i.onNodeInsert,[s[0],e[0]],n[0]),n.fire("nodeinsert",{node:s[0],parent:e[0]}),s)},del:function(e){var t=this.element,n=this.options,i=(e=D(e)).closest("ul"),s=i.closest("li");H.exec(n.onNodeDelete,[e[0]],t[0]),t.fire("nodedelete",{node:e[0]}),e.remove(),0!==i.children().length||i.is(t)||(i.remove(),s.removeClass("expanded"),s.children(".node-toggle").remove())},clean:function(e){var t=this.element,n=this.options;(e=D(e)).children("ul").remove(),e.removeClass("expanded"),e.children(".node-toggle").remove(),H.exec(n.onNodeClean,[e[0]],t[0]),t.fire("nodeclean",{node:e[0]})},changeAttribute:function(e){},destroy:function(){var e=this.element;return e.off(M.events.click,".node-toggle"),e.off(M.events.click,"li > .caption"),e.off(M.events.dblclick,"li > .caption"),e.off(M.events.click,"input[type=radio]"),e.off(M.events.click,"input[type=checkbox]"),e}};M.plugin("treeview",bn);var wn={required:function(e){return Array.isArray(e)?0<e.length&&e:!!H.isValue(e)&&e.trim()},length:function(e,t){return Array.isArray(e)?e.length===parseInt(t):!(!H.isValue(t)||isNaN(t)||t<=0)&&e.trim().length===parseInt(t)},minlength:function(e,t){return Array.isArray(e)?e.length>=parseInt(t):!(!H.isValue(t)||isNaN(t)||t<=0)&&e.trim().length>=parseInt(t)},maxlength:function(e,t){return Array.isArray(e)?e.length<=parseInt(t):!(!H.isValue(t)||isNaN(t)||t<=0)&&e.trim().length<=parseInt(t)},min:function(e,t){return!(!H.isValue(t)||isNaN(t))&&(!!this.number(e)&&(!isNaN(e)&&Number(e)>=Number(t)))},max:function(e,t){return!(!H.isValue(t)||isNaN(t))&&(!!this.number(e)&&(!isNaN(e)&&Number(e)<=Number(t)))},email:function(e){return/^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i.test(e)},domain:function(e){return/^((xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/.test(e)},url:function(e){return/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)},date:function(e,t,n){return H.isNull(t)?"invalid date"!==String(new Date(e)).toLowerCase():"invalid date"!==String(e.toDate(t,n)).toLowerCase()},number:function(e){return!isNaN(e)},integer:function(e){return H.isInt(e)},float:function(e){return H.isFloat(e)},digits:function(e){return/^\d+$/.test(e)},hexcolor:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},color:function(e){return!!H.isValue(e)&&!1!==x.color(e,x.PALETTES.STANDARD)},pattern:function(e,t){return!!H.isValue(e)&&(!!H.isValue(t)&&new RegExp(t).test(e))},compare:function(e,t){return e===t},not:function(e,t){return e!==t},notequals:function(e,t){return!H.isNull(e)&&(!H.isNull(t)&&e.trim()!==t.trim())},equals:function(e,t){return!H.isNull(e)&&(!H.isNull(t)&&e.trim()===t.trim())},custom:function(e,t){return!1!==H.isFunc(t)&&H.exec(t,[e])},is_control:function(e){return e.parent().hasClass("input")||e.parent().hasClass("select")||e.parent().hasClass("textarea")||e.parent().hasClass("checkbox")||e.parent().hasClass("switch")||e.parent().hasClass("radio")||e.parent().hasClass("spinner")},reset_state:function(e){var t=D(e);wn.is_control(t)?t.parent().removeClass("invalid valid"):t.removeClass("invalid valid")},set_valid_state:function(e){var t=D(e);wn.is_control(t)?t.parent().addClass("valid"):t.addClass("valid")},set_invalid_state:function(e){var t=D(e);wn.is_control(t)?t.parent().addClass("invalid"):t.addClass("invalid")},reset:function(e){var t=this;return D.each(D(e).find("[data-validate]"),function(){t.reset_state(this)}),this},validate:function(e,s,t,n,a){var o=!0,r=D(e),i=void 0!==r.data("validate")?String(r.data("validate")).split(" ").map(function(e){return e.trim()}):[],l=[];if(0===i.length)return!0;if(this.reset_state(r),r.attr("type")&&"checkbox"===r.attr("type").toLowerCase())!1===(o=-1===i.indexOf("required")||r.is(":checked"))&&l.push("required"),void 0!==s&&(s.val+=o?0:1);else if(r.attr("type")&&"radio"===r.attr("type").toLowerCase()){void 0===r.attr("name")&&(o=!0);var c="input[name="+r.attr("name")+"]:checked";o=0<D(c).length,void 0!==s&&(s.val+=o?0:1)}else D.each(i,function(){if(!1!==o){var e,t,n,i=this.split("=");e=i[0],i.shift(),t=i.join("="),-1<["compare","equals","notequals"].indexOf(e)&&(t=r[0].form.elements[t].value),"date"===e&&(t=r.attr("data-value-format"),n=r.attr("data-value-locale")),!1===(o=!1===H.isFunc(wn[e])||(!0===a||"required"===e?wn[e](r.val(),t,n):""===r.val().trim()||wn[e](r.val(),t,n)))&&l.push(e),void 0!==s&&(s.val+=o?0:1)}});return!1===o?(this.set_invalid_state(r),void 0!==s&&s.log.push({input:r[0],name:r.attr("name"),value:r.val(),funcs:i,errors:l}),void 0!==n&&H.exec(n,[r,r.val()],r[0])):(this.set_valid_state(r),void 0!==t&&H.exec(t,[r,r.val()],r[0])),o}};M.validator=wn;var yn={validatorDeferred:0,submitTimeout:200,interactiveCheck:!1,clearInvalid:0,requiredMode:!0,useRequiredClass:!0,onBeforeSubmit:M.noop_true,onSubmit:M.noop,onError:M.noop,onValidate:M.noop,onErrorForm:M.noop,onValidateForm:M.noop,onValidatorCreate:M.noop};M.validatorSetup=function(e){yn=D.extend({},yn,e)},window.metroValidatorSetup,M.validatorSetup(window.metroValidatorSetup);var xn={name:"Validator",init:function(e,t){return this.options=D.extend({},yn,e),this.elem=t,this.element=D(t),this._onsubmit=null,this._onreset=null,this.result=[],this._setOptionsFromDOM(),M.createExec(this),this},dependencies:["utils","colors"],_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this,t=this.element,n=this.options,i=t.find("[data-validate]");t.attr("novalidate","novalidate"),D.each(i,function(){var e=D(this);-1<e.data("validate").indexOf("required")&&!0===n.useRequiredClass&&(wn.is_control(e)?e.parent().addClass("required"):e.addClass("required")),!0===n.interactiveCheck&&e.on(M.events.inputchange,function(){wn.validate(this,void 0,void 0,void 0,n.requiredMode)})}),this._onsubmit=null,(this._onreset=null)!==t[0].onsubmit&&(this._onsubmit=t[0].onsubmit,t[0].onsubmit=null),null!==t[0].onreset&&(this._onreset=t[0].onreset,t[0].onreset=null),t[0].onsubmit=function(){return e._submit()},t[0].onreset=function(){return e._reset()},H.exec(n.onValidatorCreate,null,t[0]),t.fire("validatorcreate")},_reset:function(){wn.reset(this.element),null!==this._onsubmit&&H.exec(this._onsubmit,null,this.element[0])},_submit:function(){var e=this,t=this.element,n=this.options,i=this.elem,s=t.find("[data-validate]"),a=t.find("input[type=submit], button[type=submit]"),o={val:0,log:[]},r=H.formData(t);return 0<a.length&&a.attr("disabled","disabled").addClass("disabled"),D.each(s,function(){wn.validate(this,o,n.onValidate,n.onError,n.requiredMode)}),a.removeAttr("disabled").removeClass("disabled"),o.val+=!1===H.exec(n.onBeforeSubmit,[r],this.elem)?1:0,0===o.val?(H.exec(n.onValidateForm,[r],i),t.fire("validateform",{data:r}),setTimeout(function(){H.exec(n.onSubmit,[r],i),t.fire("formsubmit",{data:r}),null!==e._onsubmit&&H.exec(e._onsubmit,null,i)},n.submitTimeout)):(H.exec(n.onErrorForm,[o.log,r],i),t.fire("errorform",{log:o.log,data:r}),0<n.clearInvalid&&setTimeout(function(){D.each(s,function(){var e=D(this);wn.is_control(e)?e.parent().removeClass("invalid"):e.removeClass("invalid")})},n.clearInvalid)),console.log(0===o.val),0===o.val},changeAttribute:function(e){}};M.plugin("validator",xn);var Sn={videoDeferred:0,src:null,poster:"",logo:"",logoHeight:32,logoWidth:"auto",logoTarget:"",volume:.5,loop:!1,autoplay:!1,fullScreenMode:M.fullScreenMode.DESKTOP,aspectRatio:M.aspectRatio.HD,controlsHide:3e3,showLoop:!0,showPlay:!0,showStop:!0,showMute:!0,showFull:!0,showStream:!0,showVolume:!0,showInfo:!0,loopIcon:"<span class='default-icon-loop'></span>",stopIcon:"<span class='default-icon-stop'></span>",playIcon:"<span class='default-icon-play'></span>",pauseIcon:"<span class='default-icon-pause'></span>",muteIcon:"<span class='default-icon-mute'></span>",volumeLowIcon:"<span class='default-icon-low-volume'></span>",volumeMediumIcon:"<span class='default-icon-medium-volume'></span>",volumeHighIcon:"<span class='default-icon-high-volume'></span>",screenMoreIcon:"<span class='default-icon-enlarge'></span>",screenLessIcon:"<span class='default-icon-shrink'></span>",onPlay:M.noop,onPause:M.noop,onStop:M.noop,onEnd:M.noop,onMetadata:M.noop,onTime:M.noop,onVideoCreate:M.noop};M.videoSetup=function(e){Sn=D.extend({},Sn,e)},window.metroVideoSetup,M.videoSetup(window.metroVideoSetup);var Tn={name:"Video",init:function(e,t){return this.options=D.extend({},Sn,e),this.elem=t,this.element=D(t),this.fullscreen=!1,this.preloader=null,this.player=null,this.video=t,this.stream=null,this.volume=null,this.volumeBackup=0,this.muted=!1,this.fullScreenInterval=!1,this.isPlaying=!1,this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;this.video;M.checkRuntime(e,"video"),!1===M.fullScreenEnabled&&(t.fullScreenMode=M.fullScreenMode.WINDOW),this._createPlayer(),this._createControls(),this._createEvents(),this._setAspectRatio(),!0===t.autoplay&&this.play(),H.exec(t.onVideoCreate,[e,this.player],e[0]),e.fire("videocreate")},_createPlayer:function(){var e=this.element,t=this.options,n=this.video,i=D("<div>").addClass("media-player video-player "+e[0].className),s=D("<div>").addClass("preloader").appendTo(i),a=D("<a>").attr("href",t.logoTarget).addClass("logo").appendTo(i);e.attr("id")||e.attr("id",H.elementId("video")),i.insertBefore(e),e.appendTo(i),D.each(["muted","autoplay","controls","height","width","loop","poster","preload"],function(){e.removeAttr(this)}),e.attr("preload","auto"),""!==t.poster&&e.attr("poster",t.poster),n.volume=t.volume,s.activity({type:"cycle",style:"color"}),s.hide(),this.preloader=s,""!==t.logo&&D("<img>").css({height:t.logoHeight,width:t.logoWidth}).attr("src",t.logo).appendTo(a),null!==t.src&&this._setSource(t.src),e[0].className="",this.player=i},_setSource:function(e){var t=this.element;t.find("source").remove(),t.removeAttr("src"),Array.isArray(e)?D.each(e,function(){void 0!==this.src&&D("<source>").attr("src",this.src).attr("type",void 0!==this.type?this.type:"").appendTo(t)}):t.attr("src",e)},_createControls:function(){var e,t=this,n=this.element,i=this.options,s=this.elem,a=(this.player,D("<div>").addClass("controls").addClass(i.clsControls).insertAfter(n)),o=D("<div>").addClass("stream").appendTo(a),r=D("<input>").addClass("stream-slider ultra-thin cycle-marker").appendTo(o),l=D("<div>").addClass("volume").appendTo(a),c=D("<input>").addClass("volume-slider ultra-thin cycle-marker").appendTo(l),d=D("<div>").addClass("info-box").appendTo(a);!0!==i.showInfo&&d.hide(),M.makePlugin(r,"slider",{clsMarker:"bg-red",clsHint:"bg-cyan fg-white",clsComplete:"bg-cyan",hint:!0,onStart:function(){s.paused||s.pause()},onStop:function(e){0<s.seekable.length&&(s.currentTime=(t.duration*e/100).toFixed(0)),s.paused&&0<s.currentTime&&s.play()}}),this.stream=r,!0!==i.showStream&&o.hide(),M.makePlugin(c,"slider",{clsMarker:"bg-red",clsHint:"bg-cyan fg-white",hint:!0,value:100*i.volume,onChangeValue:function(e){s.volume=e/100}}),this.volume=c,!0!==i.showVolume&&l.hide(),!0===i.showLoop&&(e=D("<button>").attr("type","button").addClass("button square loop").html(i.loopIcon).appendTo(a)),!0===i.showPlay&&D("<button>").attr("type","button").addClass("button square play").html(i.playIcon).appendTo(a),!0===i.showStop&&D("<button>").attr("type","button").addClass("button square stop").html(i.stopIcon).appendTo(a),!0===i.showMute&&D("<button>").attr("type","button").addClass("button square mute").html(i.muteIcon).appendTo(a),!0===i.showFull&&D("<button>").attr("type","button").addClass("button square full").html(i.screenMoreIcon).appendTo(a),!0===i.loop&&(e.addClass("active"),n.attr("loop","loop")),this._setVolume(),i.muted&&(t.volumeBackup=s.volume,M.getPlugin(t.volume[0],"slider").val(0),s.volume=0),d.html("00:00 / 00:00")},_createEvents:function(){var t=this,n=this.element,i=this.options,s=this.elem,a=this.player;n.on("loadstart",function(){t.preloader.show()}),n.on("loadedmetadata",function(){t.duration=s.duration.toFixed(0),t._setInfo(0,t.duration),H.exec(i.onMetadata,[s,a],n[0])}),n.on("canplay",function(){t._setBuffer(),t.preloader.hide()}),n.on("progress",function(){t._setBuffer()}),n.on("timeupdate",function(){var e=Math.round(100*s.currentTime/t.duration);t._setInfo(s.currentTime,t.duration),M.getPlugin(t.stream[0],"slider").val(e),H.exec(i.onTime,[s.currentTime,t.duration,s,a],n[0])}),n.on("waiting",function(){t.preloader.show()}),n.on("loadeddata",function(){}),n.on("play",function(){a.find(".play").html(i.pauseIcon),H.exec(i.onPlay,[s,a],n[0]),t._onMouse()}),n.on("pause",function(){a.find(".play").html(i.playIcon),H.exec(i.onPause,[s,a],n[0]),t._offMouse()}),n.on("stop",function(){M.getPlugin(t.stream[0],"slider").val(0),H.exec(i.onStop,[s,a],n[0]),t._offMouse()}),n.on("ended",function(){M.getPlugin(t.stream[0],"slider").val(0),H.exec(i.onEnd,[s,a],n[0]),t._offMouse()}),n.on("volumechange",function(){t._setVolume()}),a.on(M.events.click,".play",function(e){s.paused?t.play():t.pause()}),a.on(M.events.click,".stop",function(e){t.stop()}),a.on(M.events.click,".mute",function(e){t._toggleMute()}),a.on(M.events.click,".loop",function(){t._toggleLoop()}),a.on(M.events.click,".full",function(){t.fullscreen=!t.fullscreen,a.find(".full").html(!0===t.fullscreen?i.screenLessIcon:i.screenMoreIcon),i.fullScreenMode===M.fullScreenMode.WINDOW?!0===t.fullscreen?a.addClass("full-screen"):a.removeClass("full-screen"):!0===t.fullscreen?(M.requestFullScreen(s),!1===t.fullScreenInterval&&(t.fullScreenInterval=setInterval(function(){!1===M.inFullScreen()&&(t.fullscreen=!1,clearInterval(t.fullScreenInterval),t.fullScreenInterval=!1,a.find(".full").html(i.screenMoreIcon))},1e3))):M.exitFullScreen()}),D(window).on(M.events.keyup,function(e){t.fullscreen&&27===e.keyCode&&a.find(".full").click()},{ns:n.attr("id")}),D(window).on(M.events.resize,function(){t._setAspectRatio()},{ns:n.attr("id")})},_onMouse:function(){var t=this.options,n=this.player;n.on(M.events.enter,function(){var e=n.find(".controls");0<t.controlsHide&&"none"===e.style("display")&&e.stop(!0).fadeIn(500,function(){e.css("display","flex")})}),n.on(M.events.leave,function(){var e=n.find(".controls");0<t.controlsHide&&1===parseInt(e.style("opacity"))&&setTimeout(function(){e.stop(!0).fadeOut(500)},t.controlsHide)})},_offMouse:function(){var e=this.player,t=this.options,n=e.find(".controls");e.off(M.events.enter),e.off(M.events.leave),0<t.controlsHide&&"none"===n.style("display")&&n.stop(!0).fadeIn(500,function(){n.css("display","flex")})},_toggleLoop:function(){var e=this.player.find(".loop");0!==e.length&&(e.toggleClass("active"),e.hasClass("active")?this.element.attr("loop","loop"):this.element.removeAttr("loop"))},_toggleMute:function(){this.muted=!this.muted,!1===this.muted?this.video.volume=this.volumeBackup:(this.volumeBackup=this.video.volume,this.video.volume=0),M.getPlugin(this.volume,"slider").val(!1===this.muted?100*this.volumeBackup:0)},_setInfo:function(e,t){this.player.find(".info-box").html(H.secondsToFormattedString(Math.round(e))+" / "+H.secondsToFormattedString(Math.round(t)))},_setBuffer:function(){var e=this.video.buffered.length?Math.round(Math.floor(this.video.buffered.end(0))/Math.floor(this.video.duration)*100):0;M.getPlugin(this.stream,"slider").buff(e)},_setVolume:function(){var e=this.video,t=this.player,n=this.options,i=t.find(".mute"),s=100*e.volume;1<s&&s<30?i.html(n.volumeLowIcon):30<=s&&s<60?i.html(n.volumeMediumIcon):60<=s&&s<=100?i.html(n.volumeHighIcon):i.html(n.muteIcon)},_setAspectRatio:function(){var e,t=this.player,n=this.options,i=t.outerWidth();switch(n.aspectRatio){case M.aspectRatio.SD:e=H.aspectRatioH(i,"4/3");break;case M.aspectRatio.CINEMA:e=H.aspectRatioH(i,"21/9");break;default:e=H.aspectRatioH(i,"16/9")}t.outerHeight(e)},aspectRatio:function(e){this.options.aspectRatio=e,this._setAspectRatio()},play:function(e){void 0!==e&&this._setSource(e),void 0===this.element.attr("src")&&0===this.element.find("source").length||(this.isPlaying=!0,this.video.play())},pause:function(){this.isPlaying=!1,this.video.pause()},resume:function(){this.video.paused&&this.play()},stop:function(){this.isPlaying=!1,this.video.pause(),this.video.currentTime=0,M.getPlugin(this.stream[0],"slider").val(0),this._offMouse()},volume:function(e){if(void 0===e)return this.video.volume;1<e&&(e/=100),this.video.volume=e,M.getPlugin(this.volume[0],"slider").val(100*e)},loop:function(){this._toggleLoop()},mute:function(){this._toggleMute()},changeAspectRatio:function(){this.options.aspectRatio=this.element.attr("data-aspect-ratio"),this._setAspectRatio()},changeSource:function(){var e=JSON.parse(this.element.attr("data-src"));this.play(e)},changeVolume:function(){var e=this.element.attr("data-volume");this.volume(e)},changeAttribute:function(e){switch(e){case"data-aspect-ratio":this.changeAspectRatio();break;case"data-src":this.changeSource();break;case"data-volume":this.changeVolume()}},destroy:function(){var e=this.element,t=this.player;return M.getPlugin(this.stream[0],"slider").destroy(),M.getPlugin(this.volume[0],"slider").destroy(),e.off("loadstart"),e.off("loadedmetadata"),e.off("canplay"),e.off("progress"),e.off("timeupdate"),e.off("waiting"),e.off("loadeddata"),e.off("play"),e.off("pause"),e.off("stop"),e.off("ended"),e.off("volumechange"),t.off(M.events.click,".play"),t.off(M.events.click,".stop"),t.off(M.events.click,".mute"),t.off(M.events.click,".loop"),t.off(M.events.click,".full"),D(window).off(M.events.keyup,{ns:e.attr("id")}),D(window).off(M.events.resize,{ns:e.attr("id")}),e}};M.plugin("video",Tn);var kn={windowDeferred:0,hidden:!1,width:"auto",height:"auto",btnClose:!0,btnMin:!0,btnMax:!0,draggable:!0,dragElement:".window-caption .icon, .window-caption .title",dragArea:"parent",shadow:!1,icon:"",title:"Window",content:null,resizable:!0,overlay:!1,overlayColor:"transparent",overlayAlpha:.5,modal:!1,position:"absolute",checkEmbed:!0,top:"auto",left:"auto",place:"auto",closeAction:M.actions.REMOVE,customButtons:null,clsCustomButton:"",clsCaption:"",clsContent:"",clsWindow:"",_runtime:!1,minWidth:0,minHeight:0,maxWidth:0,maxHeight:0,onDragStart:M.noop,onDragStop:M.noop,onDragMove:M.noop,onCaptionDblClick:M.noop,onCloseClick:M.noop,onMaxClick:M.noop,onMinClick:M.noop,onResizeStart:M.noop,onResizeStop:M.noop,onResize:M.noop,onWindowCreate:M.noop,onShow:M.noop,onWindowDestroy:M.noop,onCanClose:M.noop_true,onClose:M.noop};M.windowSetup=function(e){kn=D.extend({},kn,e)},window.metroWindowSetup,M.windowSetup(window.metroWindowSetup);var _n={name:"Window",init:function(e,t){return this.options=D.extend({},kn,e),this.elem=t,this.element=D(t),this.win=null,this.overlay=null,this.position={top:0,left:0},this.hidden=!1,this.content=null,this._setOptionsFromDOM(),M.createExec(this),this},dependencies:["draggable","resizeable"],_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e,t,n=this,i=this.element,s=this.options,a="parent"===s.dragArea?i.parent():D(s.dragArea);M.checkRuntime(i,"window"),!0===s.modal&&(s.btnMax=!1,s.btnMin=!1,s.resizable=!1),H.isNull(s.content)||(H.isUrl(s.content)&&H.isVideoUrl(s.content)?(s.content=H.embedUrl(s.content),i.css({height:"100%"})):!H.isQ(s.content)&&H.isFunc(s.content)&&(s.content=H.exec(s.content)),i.append(s.content)),s.content=i,!0===s._runtime&&M.makeRuntime(i,"window"),(e=this._window(s)).addClass("no-visible"),a.append(e),!0===s.overlay&&((t=this._overlay()).appendTo(e.parent()),this.overlay=t),this.win=e,H.exec(s.onWindowCreate,[this.win[0]],i[0]),i.fire("windowcreate",{win:e[0]}),setTimeout(function(){n._setPosition(),!0!==s.hidden&&n.win.removeClass("no-visible"),H.exec(s.onShow,[n.win[0]],i[0]),i.fire("show",{win:n.win[0]})},100)},_setPosition:function(){var e,t,n,i,s=this.options,a=this.win,o="parent"===s.dragArea?a.parent():D(s.dragArea),r=o.height()/2-a[0].offsetHeight/2,l=o.width()/2-a[0].offsetWidth/2;if("auto"!==s.place){switch(s.place.toLowerCase()){case"top-left":t=e=0,i=n="auto";break;case"top-center":e=0,t=l,i=n="auto";break;case"top-right":n=e=0,i=t="auto";break;case"right-center":e=r,n=0,i=t="auto";break;case"bottom-right":n=i=0,e=t="auto";break;case"bottom-center":i=0,t=l,e=n="auto";break;case"bottom-left":t=i=0,e=n="auto";break;case"left-center":e=r,t=0,i=n="auto";break;default:e=r,t=l,n=i="auto"}a.css({top:e,left:t,bottom:i,right:n})}},_window:function(t){var e,n,i,s,a,o=this,r=(this.element,t.width),l=t.height;if(e=D("<div>").addClass("window"),!0===t.modal&&e.addClass("modal"),n=D("<div>").addClass("window-caption"),i=D("<div>").addClass("window-content"),e.append(n),e.append(i),!0===t.status&&(a=D("<div>").addClass("window-status"),e.append(a)),!0===t.shadow&&e.addClass("win-shadow"),H.isValue(t.icon)&&D("<span>").addClass("icon").html(t.icon).appendTo(n),D("<span>").addClass("title").html(H.isValue(t.title)?t.title:"&nbsp;").appendTo(n),H.isNull(t.content)||(H.isQ(t.content)?t.content.appendTo(i):i.html(t.content)),(s=D("<div>").addClass("buttons")).appendTo(n),!0===t.btnMax&&D("<span>").addClass("button btn-max sys-button").appendTo(s),!0===t.btnMin&&D("<span>").addClass("button btn-min sys-button").appendTo(s),!0===t.btnClose&&D("<span>").addClass("button btn-close sys-button").appendTo(s),H.isValue(t.customButtons)){var c=[];!1!==H.isObject(t.customButtons)&&(t.customButtons=H.isObject(t.customButtons)),"string"==typeof t.customButtons&&-1<t.customButtons.indexOf("{")?c=JSON.parse(t.customButtons):"object"==typeof t.customButtons&&0<H.objectLength(t.customButtons)?c=t.customButtons:console.warn("Unknown format for custom buttons"),D.each(c,function(){var e=D("<span>");e.addClass("button btn-custom").addClass(t.clsCustomButton).addClass(this.cls).attr("tabindex",-1).html(this.html),e.data("action",this.onclick),s.prepend(e)})}return n.on(M.events.stop,".btn-custom",function(e){if(!H.isRightMouse(e)){var t=D(this),n=t.data("action");H.exec(n,[t],this)}}),e.attr("id",void 0===t.id?H.elementId("window"):t.id),e.on(M.events.dblclick,".window-caption",function(e){o.maximized(e)}),n.on(M.events.click,".btn-max, .btn-min, .btn-close",function(e){if(!H.isRightMouse(e)){var t=D(e.target);t.hasClass("btn-max")&&o.maximized(e),t.hasClass("btn-min")&&o.minimized(e),t.hasClass("btn-close")&&o.close(e)}}),!0===t.draggable&&M.makePlugin(e,"draggable",{dragElement:t.dragElement,dragArea:t.dragArea,onDragStart:t.onDragStart,onDragStop:t.onDragStop,onDragMove:t.onDragMove}),e.addClass(t.clsWindow),n.addClass(t.clsCaption),i.addClass(t.clsContent),0===t.minWidth&&(t.minWidth=34,D.each(s.children(".btn-custom"),function(){t.minWidth+=H.hiddenElementSize(this).width}),t.btnMax&&(t.minWidth+=34),t.btnMin&&(t.minWidth+=34),t.btnClose&&(t.minWidth+=34)),0<t.minWidth&&!isNaN(t.width)&&t.width<t.minWidth&&(r=t.minWidth),0<t.minHeight&&!isNaN(t.height)&&t.height>t.minHeight&&(l=t.minHeight),!0===t.resizable&&(D("<span>").addClass("resize-element").appendTo(e),e.addClass("resizable"),M.makePlugin(e,"resizable",{minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,resizeElement:".resize-element",onResizeStart:t.onResizeStart,onResizeStop:t.onResizeStop,onResize:t.onResize})),e.css({width:r,height:l,position:t.position,top:t.top,left:t.left}),e},_overlay:function(){var e=this.options,t=D("<div>");return t.addClass("overlay"),"transparent"===e.overlayColor?t.addClass("transparent"):t.css({background:H.hex2rgba(e.overlayColor,e.overlayAlpha)}),t},maximized:function(e){var t=this.win,n=this.element,i=this.options,s=D(e.currentTarget);t.removeClass("minimized"),t.toggleClass("maximized"),s.hasClass("window-caption")?(H.exec(i.onCaptionDblClick,[t[0]],n[0]),n.fire("captiondblclick",{win:t[0]})):(H.exec(i.onMaxClick,[t[0]],n[0]),n.fire("maxclick",{win:t[0]}))},minimized:function(){var e=this.win,t=this.element,n=this.options;e.removeClass("maximized"),e.toggleClass("minimized"),H.exec(n.onMinClick,[e[0]],t[0]),t.fire("minclick",{win:e[0]})},close:function(){var e=this,t=this.win,n=this.element,i=this.options;if(!1===H.exec(i.onCanClose,[t]))return!1;var s=0;i.onClose!==M.noop&&(s=500),H.exec(i.onClose,[t[0]],n[0]),n.fire("close",{win:t[0]}),setTimeout(function(){!null===i.modal&&t.siblings(".overlay").remove(),H.exec(i.onCloseClick,[t[0]],n[0]),n.fire("closeclick",{win:t[0]}),H.exec(i.onWindowDestroy,[t[0]],n[0]),n.fire("windowdestroy",{win:t[0]}),i.closeAction===M.actions.REMOVE?t.remove():e.hide()},s)},hide:function(){var e=this.element,t=this.options;this.win.css({display:"none"}),H.exec(t.onHide,[this.win[0]],e[0]),e.fire("hide",{win:this.win[0]})},show:function(){var e=this.element,t=this.options;this.win.removeClass("no-visible"),this.win.css({display:"flex"}),H.exec(t.onShow,[this.win[0]],e[0]),e.fire("show",{win:this.win[0]})},toggle:function(){"none"===this.win.css("display")||this.win.hasClass("no-visible")?this.show():this.hide()},isOpen:function(){return this.win.hasClass("no-visible")},min:function(e){e?this.win.addClass("minimized"):this.win.removeClass("minimized")},max:function(e){e?this.win.addClass("maximized"):this.win.removeClass("maximized")},toggleButtons:function(e){var t=this.win,n=t.find(".btn-close"),i=t.find(".btn-min"),s=t.find(".btn-max");"data-btn-close"===e&&n.toggle(),"data-btn-min"===e&&i.toggle(),"data-btn-max"===e&&s.toggle()},changeSize:function(e){var t=this.element,n=this.win;"data-width"===e&&n.css("width",t.data("width")),"data-height"===e&&n.css("height",t.data("height"))},changeClass:function(e){var t=this.element,n=this.win,i=this.options;"data-cls-window"===e&&(n[0].className="window "+(i.resizable?" resizeable ":" ")+t.attr("data-cls-window")),"data-cls-caption"===e&&(n.find(".window-caption")[0].className="window-caption "+t.attr("data-cls-caption")),"data-cls-content"===e&&(n.find(".window-content")[0].className="window-content "+t.attr("data-cls-content"))},toggleShadow:function(){var e=this.element,t=this.win;!0===JSON.parse(e.attr("data-shadow"))?t.addClass("win-shadow"):t.removeClass("win-shadow")},setContent:function(e){var t,n=this.element,i=this.win,s=H.isValue(e)?e:n.attr("data-content");t=!H.isQ(s)&&H.isFunc(s)?H.exec(s):H.isQ(s)?s.html():s,i.find(".window-content").html(t)},setTitle:function(e){var t=this.element,n=this.win,i=H.isValue(e)?e:t.attr("data-title");n.find(".window-caption .title").html(i)},setIcon:function(e){var t=this.element,n=this.win,i=H.isValue(e)?e:t.attr("data-icon");n.find(".window-caption .icon").html(i)},getIcon:function(){return this.win.find(".window-caption .icon").html()},getTitle:function(){return this.win.find(".window-caption .title").html()},toggleDraggable:function(){var e=this.element,t=this.win,n=JSON.parse(e.attr("data-draggable")),i=M.getPlugin(t,"draggable");!0===n?i.on():i.off()},toggleResizable:function(){var e=this.element,t=this.win,n=JSON.parse(e.attr("data-resizable")),i=M.getPlugin(t,"resizable");!0===n?(i.on(),t.find(".resize-element").removeClass("resize-element-disabled")):(i.off(),t.find(".resize-element").addClass("resize-element-disabled"))},changeTopLeft:function(e){var t,n=this.element,i=this.win;if("data-top"===e){if(t=parseInt(n.attr("data-top")),!isNaN(t))return;i.css("top",t)}if("data-left"===e){if(t=parseInt(n.attr("data-left")),!isNaN(t))return;i.css("left",t)}},changePlace:function(e){var t=this.element,n=this.win,i=H.isValue(e)?e:t.attr("data-place");n.addClass(i)},changeAttribute:function(e){switch(e){case"data-btn-close":case"data-btn-min":case"data-btn-max":this.toggleButtons(e);break;case"data-width":case"data-height":this.changeSize(e);break;case"data-cls-window":case"data-cls-caption":case"data-cls-content":this.changeClass(e);break;case"data-shadow":this.toggleShadow();break;case"data-icon":this.setIcon();break;case"data-title":this.setTitle();break;case"data-content":this.setContent();break;case"data-draggable":this.toggleDraggable();break;case"data-resizable":this.toggleResizable();break;case"data-top":case"data-left":this.changeTopLeft(e);break;case"data-place":this.changePlace()}},destroy:function(){return this.element}};M.plugin("window",_n),M.window={isWindow:function(e){return H.isMetroObject(e,"window")},min:function(e,t){if(!this.isWindow(e))return!1;M.getPlugin(e,"window").min(t)},max:function(e,t){if(!this.isWindow(e))return!1;M.getPlugin(e,"window").max(t)},show:function(e){if(!this.isWindow(e))return!1;M.getPlugin(e,"window").show()},hide:function(e){if(!this.isWindow(e))return!1;M.getPlugin(e,"window").hide()},toggle:function(e){if(!this.isWindow(e))return!1;M.getPlugin(e,"window").toggle()},isOpen:function(e){return!!this.isWindow(e)&&M.getPlugin(e,"window").isOpen()},close:function(e){if(!this.isWindow(e))return!1;M.getPlugin(e,"window").close()},create:function(e){var t;t=D("<div>").appendTo(D("body"));var n=D.extend({},{},void 0!==e?e:{});return n._runtime=!0,M.makePlugin(t,"window",n)}};var On={wizardDeferred:0,start:1,finish:0,iconHelp:"<span class='default-icon-help'></span>",iconPrev:"<span class='default-icon-left-arrow'></span>",iconNext:"<span class='default-icon-right-arrow'></span>",iconFinish:"<span class='default-icon-check'></span>",buttonMode:"cycle",buttonOutline:!0,clsWizard:"",clsActions:"",clsHelp:"",clsPrev:"",clsNext:"",clsFinish:"",onPage:M.noop,onNextPage:M.noop,onPrevPage:M.noop,onFirstPage:M.noop,onLastPage:M.noop,onFinishPage:M.noop,onHelpClick:M.noop,onPrevClick:M.noop,onNextClick:M.noop,onFinishClick:M.noop,onBeforePrev:M.noop_true,onBeforeNext:M.noop_true,onWizardCreate:M.noop};M.wizardSetup=function(e){On=D.extend({},On,e)},window.metroWizardSetup,M.wizardSetup(window.metroWizardSetup);var In={name:"Wizard",init:function(e,t){return this.options=D.extend({},On,e),this.elem=t,this.element=D(t),this._setOptionsFromDOM(),M.createExec(this),this},_setOptionsFromDOM:function(){var e=this.element,i=this.options;D.each(e.data(),function(t,n){if(t in i)try{i[t]=JSON.parse(n)}catch(e){i[t]=n}})},_create:function(){var e=this.element,t=this.options;M.checkRuntime(e,"wizard"),this._createWizard(),this._createEvents(),H.exec(t.onWizardCreate,null,e[0]),e.fire("wizardcreate")},_createWizard:function(){var e,t=this.element,n=this.options;t.attr("id")||t.attr("id",H.elementId("wizard")),t.addClass("wizard").addClass(n.view).addClass(n.clsWizard),e=D("<div>").addClass("action-bar").addClass(n.clsActions).appendTo(t);var i="button"===n.buttonMode?"":n.buttonMode;!0===n.buttonOutline&&(i+=" outline"),!1!==n.iconHelp&&D("<button>").attr("type","button").addClass("button wizard-btn-help").addClass(i).addClass(n.clsHelp).html(H.isTag(n.iconHelp)?n.iconHelp:D("<img>").attr("src",n.iconHelp)).appendTo(e),!1!==n.iconPrev&&D("<button>").attr("type","button").addClass("button wizard-btn-prev").addClass(i).addClass(n.clsPrev).html(H.isTag(n.iconPrev)?n.iconPrev:D("<img>").attr("src",n.iconPrev)).appendTo(e),!1!==n.iconNext&&D("<button>").attr("type","button").addClass("button wizard-btn-next").addClass(i).addClass(n.clsNext).html(H.isTag(n.iconNext)?n.iconNext:D("<img>").attr("src",n.iconNext)).appendTo(e),!1!==n.iconFinish&&D("<button>").attr("type","button").addClass("button wizard-btn-finish").addClass(i).addClass(n.clsFinish).html(H.isTag(n.iconFinish)?n.iconFinish:D("<img>").attr("src",n.iconFinish)).appendTo(e),this.toPage(n.start),this._setHeight()},_setHeight:function(){var e=this.element,t=(this.options,e.children("section")),n=0;t.children(".page-content").css("max-height","none"),D.each(t,function(){var e=D(this).height();n<parseInt(e)&&(n=e)}),e.height(n)},_createEvents:function(){var t=this,n=this.element,i=this.options;n.on(M.events.click,".wizard-btn-help",function(){var e=n.children("section").get(t.current-1);H.exec(i.onHelpClick,[t.current,e,n[0]]),n.fire("helpclick",{index:t.current,page:e})}),n.on(M.events.click,".wizard-btn-prev",function(){t.prev();var e=n.children("section").get(t.current-1);H.exec(i.onPrevClick,[t.current,e],n[0]),n.fire("prevclick",{index:t.current,page:e})}),n.on(M.events.click,".wizard-btn-next",function(){t.next();var e=n.children("section").get(t.current-1);H.exec(i.onNextClick,[t.current,e],n[0]),n.fire("nextclick",{index:t.current,page:e})}),n.on(M.events.click,".wizard-btn-finish",function(){var e=n.children("section").get(t.current-1);H.exec(i.onFinishClick,[t.current,e],n[0]),n.fire("finishclick",{index:t.current,page:e})}),n.on(M.events.click,".complete",function(){var e=D(this).index()+1;t.toPage(e)}),D(window).on(M.events.resize,function(){t._setHeight()},{ns:n.attr("id")})},next:function(){var e=this.element,t=this.options,n=e.children("section"),i=D(e.children("section").get(this.current-1));this.current+1>n.length||!1===H.exec(t.onBeforeNext,[this.current,i,e])||(this.current++,this.toPage(this.current),i=D(e.children("section").get(this.current-1)),H.exec(t.onNextPage,[this.current,i[0]],e[0]),e.fire("nextpage",{index:this.current,page:i[0]}))},prev:function(){var e=this.element,t=this.options,n=D(e.children("section").get(this.current-1));this.current-1!=0&&!1!==H.exec(t.onBeforePrev,[this.current,n,e])&&(this.current--,this.toPage(this.current),n=D(e.children("section").get(this.current-1)),H.exec(t.onPrevPage,[this.current,n[0]],e[0]),e.fire("prevpage",{index:this.current,page:n[0]}))},last:function(){var e,t=this.element,n=this.options;this.toPage(t.children("section").length),e=D(t.children("section").get(this.current-1)),H.exec(n.onLastPage,[this.current,e[0]],t[0]),t.fire("lastpage",{index:this.current,page:e[0]})},first:function(){var e,t=this.element,n=this.options;this.toPage(1),e=D(t.children("section").get(0)),H.exec(n.onFirstPage,[this.current,e[0]],t[0]),t.fire("firstpage",{index:this.current,page:e[0]})},toPage:function(e){var t=this.element,n=this.options,i=D(t.children("section").get(e-1)),s=t.children("section"),a=t.find(".action-bar");if(0!==i.length){var o=t.find(".wizard-btn-finish").addClass("disabled"),r=t.find(".wizard-btn-next").addClass("disabled"),l=t.find(".wizard-btn-prev").addClass("disabled");this.current=e,t.children("section").removeClass("complete current").removeClass(n.clsCurrent).removeClass(n.clsComplete),i.addClass("current").addClass(n.clsCurrent),i.prevAll().addClass("complete").addClass(n.clsComplete);var c=0===t.children("section.complete").length?0:parseInt(H.getStyleOne(t.children("section.complete")[0],"border-left-width"));a.animate({left:t.children("section.complete").length*c+41}),(this.current===s.length||0<n.finish&&this.current>=n.finish)&&o.removeClass("disabled"),0<parseInt(n.finish)&&this.current===parseInt(n.finish)&&(H.exec(n.onFinishPage,[this.current,i[0]],t[0]),t.fire("finishpage",{index:this.current,page:i[0]})),this.current<s.length&&r.removeClass("disabled"),1<this.current&&l.removeClass("disabled"),H.exec(n.onPage,[this.current,i[0]],t[0]),t.fire("page",{index:this.current,page:i[0]})}},changeAttribute:function(e){},destroy:function(){var e=this.element;return e.off(M.events.click,".wizard-btn-help"),e.off(M.events.click,".wizard-btn-prev"),e.off(M.events.click,".wizard-btn-next"),e.off(M.events.click,".wizard-btn-finish"),e.off(M.events.click,".complete"),D(window).off(M.events.resize,{ns:e.attr("id")}),e}};return M.plugin("wizard",In),!0===METRO_INIT&&("immediate"===METRO_INIT_MODE?M.init():D(function(){M.init()})),M});
//# sourceMappingURL=metro.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! exports provided: ACIDE, IDE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACIDE", function() { return ACIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDE", function() { return IDE; });
var ACIDE = {
  getWebsiteUrl: function getWebsiteUrl() {
    if (location.host === 'localhost') {
      return (location.origin + '/' + 'acide').toLowerCase();
    } else {
      return location.origin;
    }
  },
  getTemplateURL: function getTemplateURL(name) {
    return this.getWebsiteUrl() + '/resources/views/' + name + '.html';
  },
  getFullRoute: function getFullRoute(controller) {
    return this.getWebsiteUrl() + '/controller/' + controller;
  }
};
var IDE = angular.module('ideApp', ['ngRoute']);
IDE.config(function ($routeProvider) {
  $routeProvider.when("/newproject", {
    templateUrl: ACIDE.getTemplateURL('windows/html/new_project'),
    controller: 'newProjectCtrl'
  });
});
IDE.run(function ($rootScope, $templateCache) {
  $rootScope.$on('$viewContentLoaded', function () {
    $templateCache.removeAll();
  });
});
IDE.service('window', function () {
  this.show = function () {
    $('.window').removeClass('size-0');
  };

  this.hide = function () {
    $('.window').addClass('size-0');
  };

  this.title = function (title) {
    $('.window .window-caption .title').html(title);
  };
});
IDE.controller('ideCtrl', function ($scope, $location) {
  $location.path('');
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/javascript");
});


/***/ }),

/***/ "./resources/js/newProjectCtrl.js":
/*!****************************************!*\
  !*** ./resources/js/newProjectCtrl.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./resources/js/app.js");

_app__WEBPACK_IMPORTED_MODULE_0__["IDE"].controller('newProjectCtrl', function ($scope, $http, window) {
  window.title('New Project');
  window.show();
  $scope.project_duplicated = true;

  $scope.createProject = function () {
    if ($scope.project_type == 1) {
      $http.post(_app__WEBPACK_IMPORTED_MODULE_0__["ACIDE"].getFullRoute('NewProjectController@createDatabaseProject'), {
        'name': $scope.project_name,
        'slug': $scope.project_slug
      }).then(function (response) {
        if (response.data.message.project !== undefined && response.data.type === 'error') {
          $scope.project_duplicated = false;
        }

        if (response.data.type === 'success') {
          window.hide();
        }
      }, function (response) {
        console.log('New Project AJAX Error !');
      });
    }
  };
});

/***/ }),

/***/ "./resources/sass/app.sass":
/*!*********************************!*\
  !*** ./resources/sass/app.sass ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/jquery/dist/jquery.js ./node_modules/angular/angular.min.js ./node_modules/angular-route/angular-route.min.js ./node_modules/metro4/build/js/metro.min.js ./resources/js/newProjectCtrl.js ./resources/js/app.js ./resources/sass/app.sass ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\wamp64\www\acide\node_modules\jquery\dist\jquery.js */"./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! C:\wamp64\www\acide\node_modules\angular\angular.min.js */"./node_modules/angular/angular.min.js");
__webpack_require__(/*! C:\wamp64\www\acide\node_modules\angular-route\angular-route.min.js */"./node_modules/angular-route/angular-route.min.js");
__webpack_require__(/*! C:\wamp64\www\acide\node_modules\metro4\build\js\metro.min.js */"./node_modules/metro4/build/js/metro.min.js");
__webpack_require__(/*! C:\wamp64\www\acide\resources\js\newProjectCtrl.js */"./resources/js/newProjectCtrl.js");
__webpack_require__(/*! C:\wamp64\www\acide\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\wamp64\www\acide\resources\sass\app.sass */"./resources/sass/app.sass");


/***/ })

/******/ });