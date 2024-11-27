/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ai/summarizer.js":
/*!******************************!*\
  !*** ./src/ai/summarizer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   summarize: () => (/* binding */ summarize)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function getSummarizer() {
  return _getSummarizer.apply(this, arguments);
}
function _getSummarizer() {
  _getSummarizer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var canSummarize, summarizer;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return ai.summarizer.capabilities();
        case 2:
          canSummarize = _context.sent;
          if (!(canSummarize && canSummarize.available !== 'no')) {
            _context.next = 19;
            break;
          }
          if (!(canSummarize.available === 'readily')) {
            _context.next = 11;
            break;
          }
          _context.next = 7;
          return ai.summarizer.create();
        case 7:
          summarizer = _context.sent;
          console.log('summarizer ready now');
          _context.next = 17;
          break;
        case 11:
          _context.next = 13;
          return ai.summarizer.create();
        case 13:
          summarizer = _context.sent;
          summarizer.addEventListener('downloadprogress', function (e) {
            console.log(e.loaded, e.total);
          });
          _context.next = 17;
          return summarizer.ready;
        case 17:
          _context.next = 21;
          break;
        case 19:
          console.log('Feature not supported');
          throw new Error('Feature not supported');
        case 21:
          return _context.abrupt("return", summarizer);
        case 22:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getSummarizer.apply(this, arguments);
}
function summarize(_x) {
  return _summarize.apply(this, arguments);
}
function _summarize() {
  _summarize = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(text) {
    var summarizer, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return getSummarizer();
        case 3:
          summarizer = _context2.sent;
          _context2.next = 6;
          return summarizer.summarize(text);
        case 6:
          result = _context2.sent;
          _context2.next = 9;
          return summarizer.destroy();
        case 9:
          return _context2.abrupt("return", result);
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          console.log('Error during summarization:', _context2.t0);
          return _context2.abrupt("return", '');
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return _summarize.apply(this, arguments);
}


/***/ }),

/***/ "./src/user_dashboard/history.js":
/*!***************************************!*\
  !*** ./src/user_dashboard/history.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHistoryWithTopNStats: () => (/* binding */ getHistoryWithTopNStats)
/* harmony export */ });
/* harmony import */ var _utils_db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/db.js */ "./src/utils/db.js");
/* harmony import */ var _utils_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/search.js */ "./src/utils/search.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


function getHistory(_x, _x2) {
  return _getHistory.apply(this, arguments);
}
/**
 * 
 * @param {*} startDate 
 * @param {*} endDate 
 * @param {*} N 
 * @returns 
 * 
 * 
 * (5) [{…}, {…}, {…}, {…}, {…}]
0
: 
{hostname: 'www.cursor.com', titles: Array(6), count: 24}
1
: 
{hostname: 'www.youtube.com', titles: Array(12), count: 21}
2
: 
{hostname: 'mail.google.com', titles: Array(12), count: 18}
3
: 
{hostname: 'developer.chrome.com', titles: Array(2), count: 16}
4
: 
{hostname: 'github.com', titles: Array(7), count: 12}

example titles:

0
: 
{title: 'in cursur during indexing, is the results stored lcoally - Google Search', url: 'https://www.google.com/search?q=in+cursur+during+i…SAQkxMjUzMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8'}
1
: 
{title: 'slack integration to notion - Google Search', url: 'https://www.google.com/search?q=slack+integration+…TSAQg2MzAyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8'}
2
: 
{title: 'i want to convert a slack channel to notion document - Google Search', url: 'https://www.google.com/search?q=i+want+to+convert+…ugYGCAEQARgTkgcEOS4zN6AHgccC&sclient=gws-wiz-serp'}
3
: 
{title: 'convert pil image to dicom file - Google Search', url: 'https://www.google.com/search?q=convert+pil+image+…AdIBCDg0NzlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8'}
4
: 
{title: 'super resolution models - Google Search', url: 'https://www.google.com/search?q=super+resolution+m…e0gEINjIyMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8'}
5
: 
{title: 'super resolution model online free - Google Search', url: 'https://www.google.com/search?q=super+resolution+m…FmAMAiAYBkAYIkgcEMi4xM6AHklk&sclient=gws-wiz-serp'}
 */
function _getHistory() {
  _getHistory = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(startDate, endDate) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            chrome.history.search({
              text: '',
              startTime: startDate.getTime(),
              endTime: endDate.getTime(),
              maxResults: 40
            }, function (results) {
              if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
              } else {
                console.log(results);
                resolve(results);
              }
            });
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getHistory.apply(this, arguments);
}
function getHistoryWithTopNStats(_x3, _x4, _x5, _x6, _x7) {
  return _getHistoryWithTopNStats.apply(this, arguments);
}
function _getHistoryWithTopNStats() {
  _getHistoryWithTopNStats = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(startDate, endDate, N, selectedFilters, excludeFilters) {
    var historyItems, filteredHistoryItems, parsedHistoryItems, hostnameMap, hostnameTitleMap, sortedHostnames, topNHostnames, topNHostnamesWithTitles;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0,_utils_db_js__WEBPACK_IMPORTED_MODULE_0__.getHistoryInTimeRange)(startDate.getTime(), endDate.getTime());
        case 2:
          historyItems = _context2.sent;
          filteredHistoryItems = (0,_utils_search_js__WEBPACK_IMPORTED_MODULE_1__.getFilteredHistoryItems)(historyItems, selectedFilters, excludeFilters);
          parsedHistoryItems = filteredHistoryItems.map(function (item) {
            return parse_url_part(item.url, item.title);
          });
          hostnameMap = count_by_hostname(parsedHistoryItems);
          hostnameTitleMap = createHostNameTitleMap(parsedHistoryItems);
          sortedHostnames = Array.from(hostnameMap.entries()).sort(function (a, b) {
            return b[1] - a[1];
          });
          topNHostnames = sortedHostnames.slice(0, N);
          topNHostnamesWithTitles = topNHostnames.map(function (item) {
            return {
              hostname: item[0],
              titles: hostnameTitleMap.get(item[0]),
              count: item[1]
            };
          });
          return _context2.abrupt("return", topNHostnamesWithTitles);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getHistoryWithTopNStats.apply(this, arguments);
}
function parse_url_part(url, title) {
  try {
    var parsedUrl = new URL(url);

    // Extract protocol without the trailing colon (e.g., 'https')
    var protocol = parsedUrl.protocol.replace(':', '');

    // Split hostname into parts to identify subdomain, domain, and TLD
    var hostnameParts = parsedUrl.hostname.split('.');
    var subdomain = '';
    var domain = '';
    var tld = '';
    if (hostnameParts.length > 2) {
      subdomain = hostnameParts.slice(0, hostnameParts.length - 2).join('.');
      domain = hostnameParts[hostnameParts.length - 2];
      tld = hostnameParts[hostnameParts.length - 1];
    } else if (hostnameParts.length === 2) {
      domain = hostnameParts[0];
      tld = hostnameParts[1];
    } else {
      domain = parsedUrl.hostname;
      tld = '';
    }

    // Extract path (endpoint)
    var path = parsedUrl.pathname;

    // Extract query parameters as key-value pairs
    var queryParams = {};
    parsedUrl.searchParams.forEach(function (value, key) {
      // If the key already exists, convert it into an array
      if (queryParams[key]) {
        if (Array.isArray(queryParams[key])) {
          queryParams[key].push(value);
        } else {
          queryParams[key] = [queryParams[key], value];
        }
      } else {
        queryParams[key] = value;
      }
    });

    // Extract fragment without the leading hash (e.g., 'section1')
    var fragment = parsedUrl.hash.replace('#', '');

    // Extract port if specified, else default based on protocol
    var port = parsedUrl.port;
    if (!port) {
      if (protocol === 'http') {
        port = '80';
      } else if (protocol === 'https') {
        port = '443';
      } else {
        port = '';
      }
    }
    return {
      protocol: protocol,
      subdomain: subdomain,
      domain: domain,
      tld: tld,
      path: path,
      queryParams: queryParams,
      fragment: fragment,
      port: port,
      // Additional Useful Components
      host: parsedUrl.host,
      // includes hostname and port
      hostname: parsedUrl.hostname,
      href: parsedUrl.href,
      origin: parsedUrl.origin,
      title: title
    };
  } catch (error) {
    console.error("Invalid URL: ".concat(url), error);
    return null;
  }
}
function count_by_hostname(parsedHistoryItems) {
  var hostnameMap = new Map();
  parsedHistoryItems.forEach(function (item) {
    var hostname = item.hostname;
    if (hostname) {
      if (hostnameMap.has(hostname)) {
        hostnameMap.set(hostname, hostnameMap.get(hostname) + 1);
      } else {
        hostnameMap.set(hostname, 1);
      }
    }
  });
  return hostnameMap;
}
function createHostNameTitleMap(parsedHistoryItems) {
  var hostnameMap = new Map();
  parsedHistoryItems.forEach(function (item) {
    var hostname = item.hostname;
    var title = item.title;
    var url = item.href;

    // if title is empty, use hostname as title
    if (!title) {
      title = hostname;
    }

    // maintain a list of titles for each hostname
    if (hostnameMap.has(hostname)) {
      // if title is already in the list, don't add it again
      if (!hostnameMap.get(hostname).some(function (t) {
        return t.title === title;
      })) {
        hostnameMap.get(hostname).push({
          title: title,
          url: url
        });
      }
    } else {
      hostnameMap.set(hostname, [{
        title: title,
        url: url
      }]);
    }
  });
  return hostnameMap;
}

// export { getHistory };

/***/ }),

/***/ "./src/user_dashboard/utils.js":
/*!*************************************!*\
  !*** ./src/user_dashboard/utils.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanInput: () => (/* binding */ cleanInput),
/* harmony export */   extractDomain: () => (/* binding */ extractDomain),
/* harmony export */   markdownToHtml: () => (/* binding */ markdownToHtml)
/* harmony export */ });
// write a function to extract domain name from a url
function extractDomain(url) {
  return new URL(url).hostname;
}
function markdownToHtml(markdownText) {
  // Convert bold text: **text**
  var html = markdownText.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Convert italic text: *text*
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Convert bullet points: * item
  html = html.replace(/^\* (.+)$/gm, '<li>$1</li>');

  // Wrap list items in <ul> tags
  html = html.replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>');
  return html;
}

/**
 * Cleans and sanitizes input text for safe processing with language models.
 *
 * @param {string} text - The input text to be sanitized.
 * @param {number} maxLength - Maximum allowed length for the input text.
 * @returns {string} The sanitized text.
 * @throws {Error} If the sanitized text exceeds the maximum length.
 */
function cleanInput(text) {
  var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4000;
  // 1. Remove Control Characters
  text = text.replace(/[\x00-\x1F\x7F]/g, '');

  // 2. Normalize Unicode
  text = text.normalize('NFC');

  // 3. Remove Malformed Unicode
  try {
    decodeURIComponent(escape(text));
  } catch (e) {
    text = text.replace(/�/g, '');
  }

  // 4. Escape Special Symbols
  text = text.replace(/[\\`{}\[\]()<>;|&]/g, '\\$&');

  // 5. Limit Repetitive Characters to 3
  text = text.replace(/(.)\1{3,}/g, '$1$1$1');

  // 6. Whitelist Allowed Characters (Alphanumerics and common punctuation)
  text = text.replace(/[^a-zA-Z0-9 .,!?'-]/g, '');

  // 7. Trim Excessive Whitespace
  text = text.replace(/\s+/g, ' ').trim();

  // 8. Validate Length
  if (text.length > maxLength) {
    throw new Error("Input exceeds maximum allowed length of ".concat(maxLength, " characters."));
  }
  return text;
}


/***/ }),

/***/ "./src/user_dashboard/widgets.js":
/*!***************************************!*\
  !*** ./src/user_dashboard/widgets.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustWidgetSize: () => (/* binding */ adjustWidgetSize),
/* harmony export */   createOrGetWidget: () => (/* binding */ createOrGetWidget),
/* harmony export */   enableResizing: () => (/* binding */ enableResizing),
/* harmony export */   loadWidgetSize: () => (/* binding */ loadWidgetSize),
/* harmony export */   saveWidgetSize: () => (/* binding */ saveWidgetSize)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* Enable Resizing */
function enableResizing() {
  var resizableElements = document.querySelectorAll('.resizable');
  resizableElements.forEach(function (element) {
    var resizeHandle = element.querySelector('.resize-handle');
    var isResizing = false;
    resizeHandle.addEventListener('mousedown', function (e) {
      e.preventDefault();
      isResizing = true;
      document.body.style.cursor = 'se-resize';
      element.classList.add('resizing');
      var startWidth = element.offsetWidth;
      var startHeight = element.offsetHeight;
      var startX = e.clientX;
      var startY = e.clientY;
      var onMouseMove = function onMouseMove(e) {
        if (!isResizing) return;
        var currentWidth = startWidth + (e.clientX - startX);
        var currentHeight = startHeight + (e.clientY - startY);

        // Set minimum dimensions
        var minWidth = 200;
        var minHeight = 100;
        element.style.width = "".concat(Math.max(currentWidth, minWidth), "px");
        element.style.height = "".concat(Math.max(currentHeight, minHeight), "px");
      };
      var _onMouseUp = function onMouseUp() {
        isResizing = false;
        document.body.style.cursor = 'default';
        element.classList.remove('resizing');
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', _onMouseUp);

        // Save dimensions
        saveWidgetSize(element.id, element.style.width, element.style.height);
      };
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', _onMouseUp);
    });

    // Load saved dimensions
    loadWidgetSize(element.id, element);
  });
}

/* Save Widget Size */
function saveWidgetSize(widgetId, width, height) {
  var size = {
    width: width,
    height: height
  };
  if (chrome && chrome.storage && chrome.storage.local) {
    chrome.storage.local.set(_defineProperty({}, widgetId, size), function () {
      console.log("Saved size for ".concat(widgetId, ":"), size);
    });
  } else {
    // For testing outside of Chrome extension
    localStorage.setItem(widgetId, JSON.stringify(size));
  }
}

/* Load Widget Size */
function loadWidgetSize(widgetId, element) {
  if (chrome && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(widgetId, function (result) {
      if (result[widgetId]) {
        element.style.width = result[widgetId].width;
        element.style.height = result[widgetId].height;
      }
    });
  } else {
    // For testing outside of Chrome extension
    var size = JSON.parse(localStorage.getItem(widgetId));
    if (size) {
      element.style.width = size.width;
      element.style.height = size.height;
    }
  }
}
function createOrGetWidget(uniqueID, widgetTitle) {
  if (document.getElementById(uniqueID)) {
    return document.getElementById(uniqueID);
  }
  var widgetContainer = document.querySelector('.widget-container');

  // Create a new widget element
  var newWidget = document.createElement('div');
  newWidget.className = 'widget resizable';

  // Generate a unique ID for the new widget
  newWidget.id = uniqueID;

  // Set the content of the new widget
  newWidget.innerHTML = "\n        <div class=\"widget-header\">\n            <h2>".concat(widgetTitle, "</h2>\n            <div class=\"resize-handle\"></div>\n        </div>\n    ");

  // Append the new widget to the widget container
  widgetContainer.appendChild(newWidget);
  return newWidget;
}
function adjustWidgetSize(widget) {
  var content = widget.querySelector('.history-container');
  var header = widget.querySelector('.widget-header');
  var headerHeight = header.offsetHeight;
  var contentHeight = content.offsetHeight;
  widget.style.height = "".concat(headerHeight + contentHeight + 50, "px");
}


/***/ }),

/***/ "./src/utils/db.js":
/*!*************************!*\
  !*** ./src/utils/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addHistoryItem: () => (/* binding */ addHistoryItem),
/* harmony export */   checkIfItemExists: () => (/* binding */ checkIfItemExists),
/* harmony export */   clearDatabase: () => (/* binding */ clearDatabase),
/* harmony export */   getAllHistoryItems: () => (/* binding */ getAllHistoryItems),
/* harmony export */   getHistoryInTimeRange: () => (/* binding */ getHistoryInTimeRange),
/* harmony export */   openDatabase: () => (/* binding */ openDatabase)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// db.js

var db;
function openDatabase() {
  return _openDatabase.apply(this, arguments);
}
function _openDatabase() {
  _openDatabase = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            if (db) {
              resolve(db);
              return;
            }
            var request = indexedDB.open('HistoryIndexerDB', 1);
            request.onerror = function (event) {
              console.error('Database error:', event.target.errorCode);
              reject(event.target.errorCode);
            };
            request.onupgradeneeded = function (event) {
              db = event.target.result;
              var objectStore = db.createObjectStore('history', {
                keyPath: 'id'
              });
              objectStore.createIndex('url', 'url', {
                unique: false
              });
              objectStore.createIndex('title', 'title', {
                unique: false
              });
              objectStore.createIndex('tags', 'tags', {
                unique: false,
                multiEntry: true
              });
              objectStore.createIndex('summary', 'summary', {
                unique: false
              });
              objectStore.createIndex('lastVisitTime', 'lastVisitTime', {
                unique: true
              });
              console.log("Database upgraded");
            };
            request.onsuccess = function (event) {
              db = event.target.result;
              resolve(db);
            };
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _openDatabase.apply(this, arguments);
}
function clearDatabase() {
  return _clearDatabase.apply(this, arguments);
}
function _clearDatabase() {
  _clearDatabase = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return openDatabase();
        case 2:
          return _context2.abrupt("return", new Promise(function (resolve, reject) {
            var transaction = db.transaction(['history'], 'readwrite');
            var objectStore = transaction.objectStore('history');
            var request = objectStore.clear();
            console.log("Clearing database");
            request.onsuccess = function () {
              resolve();
            };
            request.onerror = function (event) {
              reject(event.target.errorCode);
            };
          }));
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _clearDatabase.apply(this, arguments);
}
function addHistoryItem(_x) {
  return _addHistoryItem.apply(this, arguments);
}
function _addHistoryItem() {
  _addHistoryItem = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(item) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return openDatabase();
        case 2:
          return _context3.abrupt("return", new Promise(function (resolve, reject) {
            var transaction = db.transaction(['history'], 'readwrite');
            var objectStore = transaction.objectStore('history');
            var index = objectStore.index('lastVisitTime');

            // Check if an item with the same lastVisitTime already exists
            var checkRequest = index.get(item.lastVisitTime);
            checkRequest.onsuccess = function (event) {
              if (event.target.result) {
                // Item with the same lastVisitTime already exists
                console.log("Item with the same lastVisitTime already exists, not adding.");
                resolve(); // Resolve without adding
              } else {
                // No item with the same lastVisitTime, proceed to add
                var request = objectStore.put(item);
                request.onsuccess = function () {
                  console.log("History item added");
                  resolve();
                };
                request.onerror = function (event) {
                  console.error('Error adding item:', event.target.errorCode);
                  reject(event.target.errorCode);
                };
              }
            };
            checkRequest.onerror = function (event) {
              console.error('Error checking lastVisitTime:', event.target.errorCode);
              reject(event.target.errorCode);
            };
          }));
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _addHistoryItem.apply(this, arguments);
}
function getAllHistoryItems() {
  return _getAllHistoryItems.apply(this, arguments);
}

/**
 * Checks if a history item with the specified lastVisitTime exists in the IndexedDB.
 * @param {number} lastVisitTime - The last visit time of the history item.
 * @returns {Promise<boolean>} - A promise that resolves to true if the item exists, false otherwise.
 */
function _getAllHistoryItems() {
  _getAllHistoryItems = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return openDatabase();
        case 2:
          return _context4.abrupt("return", new Promise(function (resolve, reject) {
            var transaction = db.transaction(['history'], 'readonly');
            var objectStore = transaction.objectStore('history');
            var request = objectStore.getAll();
            request.onsuccess = function (event) {
              resolve(event.target.result);
              console.log("All history items fetched");
            };
            request.onerror = function (event) {
              reject(event.target.errorCode);
              console.error('Error fetching all history items:', event.target.errorCode);
            };
          }));
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _getAllHistoryItems.apply(this, arguments);
}
function checkIfItemExists(_x2) {
  return _checkIfItemExists.apply(this, arguments);
}

/**
 * Promisifies an IndexedDB request.
 * @param {IDBRequest} request - The IndexedDB request object.
 * @returns {Promise<any>} - A promise that resolves with the request result.
 */
function _checkIfItemExists() {
  _checkIfItemExists = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(lastVisitTime) {
    var transaction, objectStore, index, request, result, exists;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return openDatabase();
        case 2:
          _context5.prev = 2;
          // Start a readonly transaction
          transaction = db.transaction(['history'], 'readonly');
          objectStore = transaction.objectStore('history');
          index = objectStore.index('lastVisitTime'); // Initiate the get request
          request = index.get(lastVisitTime); // Await the result of the get request
          _context5.next = 9;
          return promisifyRequest(request);
        case 9:
          result = _context5.sent;
          // Determine if the item exists
          exists = result !== undefined && result !== null; // console.log(`Item exists for lastVisitTime ${lastVisitTime}: ${exists}`);
          return _context5.abrupt("return", exists);
        case 14:
          _context5.prev = 14;
          _context5.t0 = _context5["catch"](2);
          console.error("Error checking if item exists for lastVisitTime ".concat(lastVisitTime, ":"), _context5.t0);
          throw _context5.t0;
        case 18:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 14]]);
  }));
  return _checkIfItemExists.apply(this, arguments);
}
function promisifyRequest(request) {
  return new Promise(function (resolve, reject) {
    request.onsuccess = function () {
      return resolve(request.result);
    };
    request.onerror = function () {
      return reject(request.error);
    };
  });
}

/**
 * Input startDate and endDate, fetch all history items in that range, search within lastVisitTime index of the db  
 */
function getHistoryInTimeRange(_x3, _x4) {
  return _getHistoryInTimeRange.apply(this, arguments);
}
function _getHistoryInTimeRange() {
  _getHistoryInTimeRange = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(startDate, endDate) {
    var transaction, objectStore, index, range, request, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return openDatabase();
        case 2:
          transaction = db.transaction(['history'], 'readonly');
          objectStore = transaction.objectStore('history');
          index = objectStore.index('lastVisitTime');
          range = IDBKeyRange.bound(startDate, endDate);
          request = index.getAll(range);
          _context6.next = 9;
          return promisifyRequest(request);
        case 9:
          result = _context6.sent;
          return _context6.abrupt("return", result);
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _getHistoryInTimeRange.apply(this, arguments);
}

/***/ }),

/***/ "./src/utils/search.js":
/*!*****************************!*\
  !*** ./src/utils/search.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFilteredHistoryItems: () => (/* binding */ getFilteredHistoryItems),
/* harmony export */   getSearchResults: () => (/* binding */ getSearchResults)
/* harmony export */ });
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.mjs");
/* harmony import */ var _utils_db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/db.js */ "./src/utils/db.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


function getSearchResults(_x) {
  return _getSearchResults.apply(this, arguments);
}
function _getSearchResults() {
  _getSearchResults = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(raw_query) {
    var query, historyItems, fuse, results;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          query = raw_query.trim().toLowerCase();
          _context.next = 3;
          return (0,_utils_db_js__WEBPACK_IMPORTED_MODULE_0__.getAllHistoryItems)();
        case 3:
          historyItems = _context.sent;
          fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_1__["default"](historyItems, {
            keys: ['title', 'summary', {
              name: 'tags',
              weight: 0.5
            }],
            threshold: 0.2
          });
          results = fuse.search(query);
          return _context.abrupt("return", results);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getSearchResults.apply(this, arguments);
}
function getFilteredHistoryItems(historyItems, selectedFilters, excludeFilters) {
  // Start with all history items
  var filteredItems = historyItems;

  // Apply inclusion filters if any
  if (selectedFilters && selectedFilters.length > 0) {
    var lowerCaseSelectedFilters = selectedFilters.map(function (filter) {
      return filter.toLowerCase();
    });
    filteredItems = filteredItems.filter(function (item) {
      var title = item.title ? item.title.toLowerCase() : '';
      var summary = item.summary ? item.summary.toLowerCase() : '';
      var tags = item.tags ? item.tags.map(function (tag) {
        return tag.toLowerCase();
      }) : [];
      var url = item.url ? item.url.toLowerCase() : '';
      return lowerCaseSelectedFilters.some(function (filter) {
        return title.includes(filter) || summary.includes(filter) || tags.includes(filter) || url.includes(filter);
      });
    });
  }

  // Apply exclusion filters if any
  if (excludeFilters && excludeFilters.length > 0) {
    var lowerCaseExcludeFilters = excludeFilters.map(function (filter) {
      return filter.toLowerCase();
    });
    filteredItems = filteredItems.filter(function (item) {
      var title = item.title ? item.title.toLowerCase() : '';
      var summary = item.summary ? item.summary.toLowerCase() : '';
      var tags = item.tags ? item.tags.map(function (tag) {
        return tag.toLowerCase();
      }) : [];
      var url = item.url ? item.url.toLowerCase() : '';
      return !lowerCaseExcludeFilters.some(function (filter) {
        return title.includes(filter) || summary.includes(filter) || tags.includes(filter) || url.includes(filter);
      });
    });
  }
  return filteredItems;
}

/***/ }),

/***/ "./src/user_dashboard/styles.css":
/*!***************************************!*\
  !*** ./src/user_dashboard/styles.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/fuse.js/dist/fuse.mjs":
/*!********************************************!*\
  !*** ./node_modules/fuse.js/dist/fuse.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Fuse)
/* harmony export */ });
/**
 * Fuse.js v7.0.0 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2023 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function isArray(value) {
  return !Array.isArray
    ? getTag(value) === '[object Array]'
    : Array.isArray(value)
}

// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
const INFINITY = 1 / 0;
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value
  }
  let result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result
}

function toString(value) {
  return value == null ? '' : baseToString(value)
}

function isString(value) {
  return typeof value === 'string'
}

function isNumber(value) {
  return typeof value === 'number'
}

// Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
function isBoolean(value) {
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && getTag(value) == '[object Boolean]')
  )
}

function isObject(value) {
  return typeof value === 'object'
}

// Checks if `value` is object-like.
function isObjectLike(value) {
  return isObject(value) && value !== null
}

function isDefined(value) {
  return value !== undefined && value !== null
}

function isBlank(value) {
  return !value.trim().length
}

// Gets the `toStringTag` of `value`.
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
function getTag(value) {
  return value == null
    ? value === undefined
      ? '[object Undefined]'
      : '[object Null]'
    : Object.prototype.toString.call(value)
}

const EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';

const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";

const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) =>
  `Invalid value for key ${key}`;

const PATTERN_LENGTH_TOO_LARGE = (max) =>
  `Pattern length exceeds max of ${max}.`;

const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;

const INVALID_KEY_WEIGHT_VALUE = (key) =>
  `Property 'weight' in key '${key}' must be a positive integer`;

const hasOwn = Object.prototype.hasOwnProperty;

class KeyStore {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};

    let totalWeight = 0;

    keys.forEach((key) => {
      let obj = createKey(key);

      this._keys.push(obj);
      this._keyMap[obj.id] = obj;

      totalWeight += obj.weight;
    });

    // Normalize weights so that their sum is equal to 1
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId]
  }
  keys() {
    return this._keys
  }
  toJSON() {
    return JSON.stringify(this._keys)
  }
}

function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;

  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, 'name')) {
      throw new Error(MISSING_KEY_PROPERTY('name'))
    }

    const name = key.name;
    src = name;

    if (hasOwn.call(key, 'weight')) {
      weight = key.weight;

      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name))
      }
    }

    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn;
  }

  return { path, id, weight, src, getFn }
}

function createKeyPath(key) {
  return isArray(key) ? key : key.split('.')
}

function createKeyId(key) {
  return isArray(key) ? key.join('.') : key
}

function get(obj, path) {
  let list = [];
  let arr = false;

  const deepGet = (obj, path, index) => {
    if (!isDefined(obj)) {
      return
    }
    if (!path[index]) {
      // If there's no path left, we've arrived at the object we care about.
      list.push(obj);
    } else {
      let key = path[index];

      const value = obj[key];

      if (!isDefined(value)) {
        return
      }

      // If we're at the last value in the path, and if it's a string/number/bool,
      // add it to the list
      if (
        index === path.length - 1 &&
        (isString(value) || isNumber(value) || isBoolean(value))
      ) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        // Search each item in the array.
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path, index + 1);
        }
      } else if (path.length) {
        // An object. Recurse further.
        deepGet(value, path, index + 1);
      }
    }
  };

  // Backwards compatibility (since path used to be a string)
  deepGet(obj, isString(path) ? path.split('.') : path, 0);

  return arr ? list : list[0]
}

const MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};

const BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a, b) =>
    a.score === b.score ? (a.idx < b.idx ? -1 : 1) : a.score < b.score ? -1 : 1
};

const FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};

const AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};

var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};

const SPACE = /[^ ]+/g;

// Field-length norm: the shorter the field, the higher the weight.
// Set to 3 decimals to reduce index size.
function norm(weight = 1, mantissa = 3) {
  const cache = new Map();
  const m = Math.pow(10, mantissa);

  return {
    get(value) {
      const numTokens = value.match(SPACE).length;

      if (cache.has(numTokens)) {
        return cache.get(numTokens)
      }

      // Default function is 1/sqrt(x), weight makes that variable
      const norm = 1 / Math.pow(numTokens, 0.5 * weight);

      // In place of `toFixed(mantissa)`, for faster computation
      const n = parseFloat(Math.round(norm * m) / m);

      cache.set(numTokens, n);

      return n
    },
    clear() {
      cache.clear();
    }
  }
}

class FuseIndex {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;

    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return
    }

    this.isCreated = true;

    // List is Array<String>
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      // List is Array<Object>
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }

    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();

    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);

    // Change ref index of every subsquent doc
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]]
  }
  size() {
    return this.records.length
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return
    }

    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };

    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };

    // Iterate over every key (i.e, path), and fetch the value at that key
    this.keys.forEach((key, keyIndex) => {
      let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);

      if (!isDefined(value)) {
        return
      }

      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];

        while (stack.length) {
          const { nestedArrIndex, value } = stack.pop();

          if (!isDefined(value)) {
            continue
          }

          if (isString(value) && !isBlank(value)) {
            let subRecord = {
              v: value,
              i: nestedArrIndex,
              n: this.norm.get(value)
            };

            subRecords.push(subRecord);
          } else if (isArray(value)) {
            value.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          } else ;
        }
        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };

        record.$[keyIndex] = subRecord;
      }
    });

    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    }
  }
}

function createIndex(
  keys,
  docs,
  { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}
) {
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex
}

function parseIndex(
  data,
  { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}
) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex
}

function computeScore$1(
  pattern,
  {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  const accuracy = errors / pattern.length;

  if (ignoreLocation) {
    return accuracy
  }

  const proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy
  }

  return accuracy + proximity / distance
}

function convertMaskToIndices(
  matchmask = [],
  minMatchCharLength = Config.minMatchCharLength
) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;

  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }

  return indices
}

// Machine word size
const MAX_BITS = 32;

function search(
  text,
  pattern,
  patternAlphabet,
  {
    location = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS))
  }

  const patternLen = pattern.length;
  // Set starting location at beginning text and initialize the alphabet.
  const textLen = text.length;
  // Handle the case when location > text.length
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  // Highest score beyond which we give up.
  let currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  let bestLocation = expectedLocation;

  // Performance: only computer matches when the minMatchCharLength > 1
  // OR if `includeMatches` is true.
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  // A mask of the matches, used for building the indices
  const matchMask = computeMatches ? Array(textLen) : [];

  let index;

  // Get all exact matches, here for speed up
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });

    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;

    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }

  // Reset the best location
  bestLocation = -1;

  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;

  const mask = 1 << (patternLen - 1);

  for (let i = 0; i < patternLen; i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    let binMin = 0;
    let binMid = binMax;

    while (binMin < binMid) {
      const score = computeScore$1(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });

      if (score <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches
      ? textLen
      : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    let bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << i) - 1;

    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (computeMatches) {
        // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
        matchMask[currentLocation] = +!!charMatch;
      }

      // First pass: exact match
      bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (i) {
        bitArr[j] |=
          ((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    const score = computeScore$1(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });

    if (score > currentThreshold) {
      break
    }

    lastBitArr = bitArr;
  }

  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(0.001, finalScore)
  };

  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }

  return result
}

function createPatternAlphabet(pattern) {
  let mask = {};

  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | (1 << (len - i - 1));
  }

  return mask
}

class BitapSearch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();

    this.chunks = [];

    if (!this.pattern.length) {
      return
    }

    const addChunk = (pattern, startIndex) => {
      this.chunks.push({
        pattern,
        alphabet: createPatternAlphabet(pattern),
        startIndex
      });
    };

    const len = this.pattern.length;

    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;

      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }

      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }

  searchIn(text) {
    const { isCaseSensitive, includeMatches } = this.options;

    if (!isCaseSensitive) {
      text = text.toLowerCase();
    }

    // Exact match
    if (this.pattern === text) {
      let result = {
        isMatch: true,
        score: 0
      };

      if (includeMatches) {
        result.indices = [[0, text.length - 1]];
      }

      return result
    }

    // Otherwise, use Bitap algorithm
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;

    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;

    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });

      if (isMatch) {
        hasMatches = true;
      }

      totalScore += score;

      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });

    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };

    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }

    return result
  }
}

class BaseMatch {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex)
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex)
  }
  search(/*text*/) {}
}

function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null
}

// Token: 'file

class ExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'exact'
  }
  static get multiRegex() {
    return /^="(.*)"$/
  }
  static get singleRegex() {
    return /^=(.*)$/
  }
  search(text) {
    const isMatch = text === this.pattern;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !fire

class InverseExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"$/
  }
  static get singleRegex() {
    return /^!(.*)$/
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: ^file

class PrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'prefix-exact'
  }
  static get multiRegex() {
    return /^\^"(.*)"$/
  }
  static get singleRegex() {
    return /^\^(.*)$/
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !^fire

class InversePrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-prefix-exact'
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/
  }
  static get singleRegex() {
    return /^!\^(.*)$/
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: .file$

class SuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'suffix-exact'
  }
  static get multiRegex() {
    return /^"(.*)"\$$/
  }
  static get singleRegex() {
    return /^(.*)\$$/
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    }
  }
}

// Token: !.file$

class InverseSuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-suffix-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/
  }
  static get singleRegex() {
    return /^!(.*)\$$/
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

class FuzzyMatch extends BaseMatch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    });
  }
  static get type() {
    return 'fuzzy'
  }
  static get multiRegex() {
    return /^"(.*)"$/
  }
  static get singleRegex() {
    return /^(.*)$/
  }
  search(text) {
    return this._bitapSearch.searchIn(text)
  }
}

// Token: 'file

class IncludeMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'include'
  }
  static get multiRegex() {
    return /^'"(.*)"$/
  }
  static get singleRegex() {
    return /^'(.*)$/
  }
  search(text) {
    let location = 0;
    let index;

    const indices = [];
    const patternLen = this.pattern.length;

    // Get all exact matches
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }

    const isMatch = !!indices.length;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    }
  }
}

// ❗Order is important. DO NOT CHANGE.
const searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];

const searchersLen = searchers.length;

// Regex to split by spaces, but keep anything in quotes together
const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = '|';

// Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item
      .trim()
      .split(SPACE_RE)
      .filter((item) => item && !!item.trim());

    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];

      // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }

      if (found) {
        continue
      }

      // 2. Handle single query matches (i.e, once that are *not* quoted)
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break
        }
      }
    }

    return results
  })
}

// These extended matchers can return an array of matches, as opposed
// to a singl match
const MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);

/**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */
class ExtendedSearch {
  constructor(
    pattern,
    {
      isCaseSensitive = Config.isCaseSensitive,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}
  ) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.query = parseQuery(this.pattern, this.options);
  }

  static condition(_, options) {
    return options.useExtendedSearch
  }

  searchIn(text) {
    const query = this.query;

    if (!query) {
      return {
        isMatch: false,
        score: 1
      }
    }

    const { includeMatches, isCaseSensitive } = this.options;

    text = isCaseSensitive ? text : text.toLowerCase();

    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;

    // ORs
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers = query[i];

      // Reset indices
      allIndices.length = 0;
      numMatches = 0;

      // ANDs
      for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
        const searcher = searchers[j];
        const { isMatch, indices, score } = searcher.search(text);

        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break
        }
      }

      // OR condition, so if TRUE, return
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };

        if (includeMatches) {
          result.indices = allIndices;
        }

        return result
      }
    }

    // Nothing was matched
    return {
      isMatch: false,
      score: 1
    }
  }
}

const registeredSearchers = [];

function register(...args) {
  registeredSearchers.push(...args);
}

function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options)
    }
  }

  return new BitapSearch(pattern, options)
}

const LogicalOperator = {
  AND: '$and',
  OR: '$or'
};

const KeyType = {
  PATH: '$path',
  PATTERN: '$val'
};

const isExpression = (query) =>
  !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);

const isPath = (query) => !!query[KeyType.PATH];

const isLeaf = (query) =>
  !isArray(query) && isObject(query) && !isExpression(query);

const convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});

// When `auto` is `true`, the parse function will infer and initialize and add
// the appropriate `Searcher` instance
function parse(query, options, { auto = true } = {}) {
  const next = (query) => {
    let keys = Object.keys(query);

    const isQueryPath = isPath(query);

    if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
      return next(convertToExplicit(query))
    }

    if (isLeaf(query)) {
      const key = isQueryPath ? query[KeyType.PATH] : keys[0];

      const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key))
      }

      const obj = {
        keyId: createKeyId(key),
        pattern
      };

      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }

      return obj
    }

    let node = {
      children: [],
      operator: keys[0]
    };

    keys.forEach((key) => {
      const value = query[key];

      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });

    return node
  };

  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }

  return next(query)
}

// Practical scoring function
function computeScore(
  results,
  { ignoreFieldNorm = Config.ignoreFieldNorm }
) {
  results.forEach((result) => {
    let totalScore = 1;

    result.matches.forEach(({ key, norm, score }) => {
      const weight = key ? key.weight : null;

      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm)
      );
    });

    result.score = totalScore;
  });
}

function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];

  if (!isDefined(matches)) {
    return
  }

  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return
    }

    const { indices, value } = match;

    let obj = {
      indices,
      value
    };

    if (match.key) {
      obj.key = match.key.src;
    }

    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }

    data.matches.push(obj);
  });
}

function transformScore(result, data) {
  data.score = result.score;
}

function format(
  results,
  docs,
  {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}
) {
  const transformers = [];

  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);

  return results.map((result) => {
    const { idx } = result;

    const data = {
      item: docs[idx],
      refIndex: idx
    };

    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }

    return data
  })
}

class Fuse {
  constructor(docs, options = {}, index) {
    this.options = { ...Config, ...options };

    if (
      this.options.useExtendedSearch &&
      !true
    ) {}

    this._keyStore = new KeyStore(this.options.keys);

    this.setCollection(docs, index);
  }

  setCollection(docs, index) {
    this._docs = docs;

    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE)
    }

    this._myIndex =
      index ||
      createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      });
  }

  add(doc) {
    if (!isDefined(doc)) {
      return
    }

    this._docs.push(doc);
    this._myIndex.add(doc);
  }

  remove(predicate = (/* doc, idx */) => false) {
    const results = [];

    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;

        results.push(doc);
      }
    }

    return results
  }

  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }

  getIndex() {
    return this._myIndex
  }

  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;

    let results = isString(query)
      ? isString(this._docs[0])
        ? this._searchStringList(query)
        : this._searchObjectList(query)
      : this._searchLogical(query);

    computeScore(results, { ignoreFieldNorm });

    if (shouldSort) {
      results.sort(sortFn);
    }

    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }

    return format(results, this._docs, {
      includeMatches,
      includeScore
    })
  }

  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];

    // Iterate over every string in the index
    records.forEach(({ v: text, i: idx, n: norm }) => {
      if (!isDefined(text)) {
        return
      }

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{ score, value: text, norm, indices }]
        });
      }
    });

    return results
  }

  _searchLogical(query) {

    const expression = parse(query, this.options);

    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;

        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });

        if (matches && matches.length) {
          return [
            {
              idx,
              item,
              matches
            }
          ]
        }

        return []
      }

      const res = [];
      for (let i = 0, len = node.children.length; i < len; i += 1) {
        const child = node.children[i];
        const result = evaluate(child, item, idx);
        if (result.length) {
          res.push(...result);
        } else if (node.operator === LogicalOperator.AND) {
          return []
        }
      }
      return res
    };

    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];

    records.forEach(({ $: item, i: idx }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);

        if (expResults.length) {
          // Dedupe when adding
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });

    return results
  }

  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];

    // List is Array<Object>
    records.forEach(({ $: item, i: idx }) => {
      if (!isDefined(item)) {
        return
      }

      let matches = [];

      // Iterate over every key (i.e, path), and fetch the value at that key
      keys.forEach((key, keyIndex) => {
        matches.push(
          ...this._findMatches({
            key,
            value: item[keyIndex],
            searcher
          })
        );
      });

      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });

    return results
  }
  _findMatches({ key, value, searcher }) {
    if (!isDefined(value)) {
      return []
    }

    let matches = [];

    if (isArray(value)) {
      value.forEach(({ v: text, i: idx, n: norm }) => {
        if (!isDefined(text)) {
          return
        }

        const { isMatch, score, indices } = searcher.searchIn(text);

        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm,
            indices
          });
        }
      });
    } else {
      const { v: text, n: norm } = value;

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        matches.push({ score, key, value: text, norm, indices });
      }
    }

    return matches
  }
}

Fuse.version = '7.0.0';
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;

{
  Fuse.parseQuery = parse;
}

{
  register(ExtendedSearch);
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/user_dashboard/script.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ai_summarizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ai/summarizer.js */ "./src/ai/summarizer.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.js */ "./src/user_dashboard/history.js");
/* harmony import */ var _widgets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets.js */ "./src/user_dashboard/widgets.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./src/user_dashboard/utils.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/user_dashboard/styles.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





var startDate, endDate, topNHostnamesWithTitles;

// Global variables to store selected filters
var selectedFilters = [];
var excludeFilters = [];
document.addEventListener('DOMContentLoaded', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        addDateRangeButtons();
        addRefreshButton();
        setDateRange('24h');
        // Initialize category and exclude filters
        _context.next = 5;
        return initializeFilters();
      case 5:
        addOrUpdateRecentHistoryWidget();
        addOrUpdateBasicSummaryWidget();
        (0,_widgets_js__WEBPACK_IMPORTED_MODULE_2__.enableResizing)();
        document.getElementById('refresh-button').addEventListener('click', function () {
          loadContent();
        });
        document.getElementById('dark-mode-toggle').addEventListener('click', function () {
          document.body.classList.toggle('dark-mode');
          // Optional: Save user preference using localStorage
          if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
          } else {
            localStorage.setItem('theme', 'light');
          }
        });

        // Apply saved theme on load
        window.addEventListener('DOMContentLoaded', function () {
          var savedTheme = localStorage.getItem('theme');
          if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
          }
        });
      case 11:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
function addRefreshButton() {
  var refreshButton = document.createElement('button');
  refreshButton.id = 'refresh-button';
  refreshButton.textContent = 'Refresh';
  var container = document.querySelector('.date-range-container');
  container.appendChild(refreshButton);
}

/* Initialize Date Range Inputs */
function addDateRangeButtons() {
  var buttonData = [{
    label: 'Last 24 Hours',
    range: '24h'
  }, {
    label: 'Last Week',
    range: '1w'
  }, {
    label: 'Last Month',
    range: '1m'
  }, {
    label: 'Last 3 Months',
    range: '3m'
  }, {
    label: 'Last 6 Months',
    range: '6m'
  },
  // TODO: add month wise options in drop down
  {
    label: 'January',
    range: 'jan'
  }, {
    label: 'February',
    range: 'feb'
  }, {
    label: 'March',
    range: 'mar'
  }];
  var container = document.querySelector('.date-range-container');
  buttonData.forEach(function (data) {
    var button = document.createElement('button');
    button.className = 'date-range-button';
    button.textContent = data.label;
    button.setAttribute('data-range', data.range);

    // Highlight the default selected button
    if (data.range === '24h') {
      button.classList.add('selected');
    }
    button.addEventListener('click', function () {
      setDateRange(data.range);
      loadContent();

      // Remove 'selected' class from all buttons
      document.querySelectorAll('.date-range-button').forEach(function (btn) {
        btn.classList.remove('selected');
      });

      // Add 'selected' class to the clicked button
      button.classList.add('selected');
    });
    container.appendChild(button);
  });
}
function setDateRange(range) {
  var today = new Date();
  switch (range) {
    case '24h':
      startDate = new Date(today);
      startDate.setDate(today.getDate() - 1);
      endDate = today;
      break;
    case '1w':
      startDate = new Date(today);
      startDate.setDate(today.getDate() - 7);
      endDate = today;
      break;
    case '1m':
      startDate = new Date(today);
      startDate.setMonth(today.getMonth() - 1);
      endDate = today;
      break;
    case '3m':
      startDate = new Date(today);
      startDate.setMonth(today.getMonth() - 3);
      endDate = today;
      break;
    case '6m':
      startDate = new Date(today);
      startDate.setMonth(today.getMonth() - 6);
      endDate = today;
      break;
    case 'jan':
    case 'feb':
    case 'mar':
      var monthMap = {
        jan: 0,
        feb: 1,
        mar: 2
      };
      startDate = new Date(today.getFullYear(), monthMap[range], 1);
      endDate = new Date(today.getFullYear(), monthMap[range] + 1, 0);
      break;
    default:
      startDate = new Date(today);
      endDate = today;
  }

  // Update display dates
  document.getElementById('display-start-date').textContent = startDate.toLocaleDateString();
  document.getElementById('display-end-date').textContent = endDate.toLocaleDateString();
}

/* Add Overall Summary Widget */
function addOrUpdateRecentHistoryWidget() {
  return _addOrUpdateRecentHistoryWidget.apply(this, arguments);
}
function _addOrUpdateRecentHistoryWidget() {
  _addOrUpdateRecentHistoryWidget = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var newWidget;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          newWidget = (0,_widgets_js__WEBPACK_IMPORTED_MODULE_2__.createOrGetWidget)('recent-history', 'Recent History'); // delete children containing *recent-history-contents*
          while (newWidget.lastChild && newWidget.lastChild.id && newWidget.lastChild.id.includes('recent-history-contents')) {
            newWidget.removeChild(newWidget.lastChild);
          }
          createRecentHistoryElement().then(function (widget) {
            newWidget.appendChild(widget);
            // adjust size of newWidget
            console.log('adjusting size of newWidget');
            (0,_widgets_js__WEBPACK_IMPORTED_MODULE_2__.adjustWidgetSize)(newWidget);
          });
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _addOrUpdateRecentHistoryWidget.apply(this, arguments);
}
function addOrUpdateBasicSummaryWidget() {
  return _addOrUpdateBasicSummaryWidget.apply(this, arguments);
}
/* Load Content Based on Date Range */
function _addOrUpdateBasicSummaryWidget() {
  _addOrUpdateBasicSummaryWidget = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var newWidget;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          newWidget = (0,_widgets_js__WEBPACK_IMPORTED_MODULE_2__.createOrGetWidget)('basic-summary', 'Summary'); // delete children containing *contents*
          while (newWidget.lastChild && newWidget.lastChild.id && newWidget.lastChild.id.includes('contents')) {
            newWidget.removeChild(newWidget.lastChild);
          }
          _context6.next = 4;
          return createBasicSummaryElement(newWidget);
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _addOrUpdateBasicSummaryWidget.apply(this, arguments);
}
function loadContent() {
  return _loadContent.apply(this, arguments);
}
function _loadContent() {
  _loadContent = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          console.log('Selected Filters:', selectedFilters);
          console.log('Exclude Filters:', excludeFilters);
          _context7.next = 4;
          return addOrUpdateRecentHistoryWidget();
        case 4:
          _context7.next = 6;
          return addOrUpdateBasicSummaryWidget();
        case 6:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _loadContent.apply(this, arguments);
}
function createRecentHistoryElement() {
  return _createRecentHistoryElement.apply(this, arguments);
}
function _createRecentHistoryElement() {
  _createRecentHistoryElement = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var container;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0,_history_js__WEBPACK_IMPORTED_MODULE_1__.getHistoryWithTopNStats)(startDate, endDate, 10, selectedFilters, excludeFilters);
        case 2:
          topNHostnamesWithTitles = _context8.sent;
          container = document.createElement('div');
          container.className = 'history-container';
          container.id = 'recent-history-contents';
          topNHostnamesWithTitles.forEach(function (item) {
            // Create the main box for each hostname
            var box = document.createElement('div');
            box.className = 'history-box';

            // First part: Hostname and hit count with an icon
            var header = document.createElement('div');
            header.className = 'history-header';
            var hostname = document.createElement('h3');
            // Add an icon before the hostname
            hostname.innerHTML = "<i class=\"fas fa-globe-americas\"></i> ".concat(item.hostname);
            var hitCount = document.createElement('p');
            hitCount.innerHTML = "<i class=\"fas fa-chart-line\"></i> Hit Count: ".concat(item.count);
            header.appendChild(hostname);
            header.appendChild(hitCount);

            // Second part: Titles with URLs
            var titlesContainer = document.createElement('div');
            titlesContainer.className = 'titles-container';
            var titlesList = document.createElement('ul');

            // Initial display count
            var initialDisplayCount = 10;
            var additionalLoadCount = 20;

            // Determine how many titles to show initially
            var displayedTitles = item.titles.slice(0, initialDisplayCount);
            displayedTitles.forEach(function (titleItem) {
              var listItem = document.createElement('li');
              var link = document.createElement('a');
              link.href = titleItem.url;
              link.textContent = titleItem.title;
              link.target = '_blank';
              listItem.appendChild(link);
              titlesList.appendChild(listItem);
            });
            titlesContainer.appendChild(titlesList);

            // If there are more titles, add a "more" button
            if (item.titles.length > initialDisplayCount) {
              var moreButton = document.createElement('button');
              moreButton.className = 'more-button';
              moreButton.textContent = "and ".concat(item.titles.length - initialDisplayCount, " more...");
              moreButton.dataset.hostname = item.hostname; // For identifying which box to expand

              moreButton.addEventListener('click', function () {
                loadMoreTitles(item, titlesList, moreButton, initialDisplayCount, additionalLoadCount);
              });
              titlesContainer.appendChild(moreButton);
            }

            // Assemble the box
            box.appendChild(header);
            box.appendChild(titlesContainer);
            container.appendChild(box);
          });
          return _context8.abrupt("return", container);
        case 8:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _createRecentHistoryElement.apply(this, arguments);
}
function createBasicSummaryElement(_x) {
  return _createBasicSummaryElement.apply(this, arguments);
}
function _createBasicSummaryElement() {
  _createBasicSummaryElement = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(newWidget) {
    var topNHostnamesWithTitles, historyItems, historyItemTitles, chunks, i, _i, _chunks, chunk, result, textElement;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0,_history_js__WEBPACK_IMPORTED_MODULE_1__.getHistoryWithTopNStats)(startDate, endDate, 10, selectedFilters, excludeFilters);
        case 2:
          topNHostnamesWithTitles = _context9.sent;
          historyItems = topNHostnamesWithTitles.map(function (item) {
            return item.titles;
          }).flat(); // Append all history items to a single string
          historyItemTitles = historyItems.map(function (item) {
            return item.title;
          }).join(', '); // Create chunks of 4000 characters
          chunks = [];
          for (i = 0; i < historyItemTitles.length; i += 2000) {
            chunks.push(historyItemTitles.slice(i, i + 2000));
          }

          // Summarize each chunk and append to the result
          _i = 0, _chunks = chunks;
        case 8:
          if (!(_i < _chunks.length)) {
            _context9.next = 20;
            break;
          }
          chunk = _chunks[_i];
          _context9.next = 12;
          return (0,_ai_summarizer_js__WEBPACK_IMPORTED_MODULE_0__.summarize)((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.cleanInput)(chunk));
        case 12:
          result = _context9.sent;
          textElement = document.createElement('p');
          textElement.id = 'basic-summary-contents';
          textElement.innerHTML = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.markdownToHtml)(result);
          newWidget.appendChild(textElement);
        case 17:
          _i++;
          _context9.next = 8;
          break;
        case 20:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _createBasicSummaryElement.apply(this, arguments);
}
function loadMoreTitles(item, titlesList, moreButton, initialCount, loadCount) {
  // Determine the current number of titles displayed
  var currentCount = titlesList.querySelectorAll('li').length;
  var nextCount = currentCount + loadCount;
  var titlesToAdd = item.titles.slice(currentCount, nextCount);
  titlesToAdd.forEach(function (titleItem) {
    var listItem = document.createElement('li');
    var link = document.createElement('a');
    link.href = titleItem.url;
    link.textContent = titleItem.title;
    link.target = '_blank';
    listItem.appendChild(link);
    titlesList.appendChild(listItem);
  });

  // Update the remaining count
  var remaining = item.titles.length - nextCount;
  if (remaining > 0) {
    moreButton.textContent = "and ".concat(remaining, " more...");
  } else {
    // Remove the "more" button if no more titles are left
    moreButton.remove();
  }
}

/* Initialize Filters (Tag Filters and Exclude Tags) */
function initializeFilters() {
  return _initializeFilters.apply(this, arguments);
}
/* Initialize Tag Filters */
function _initializeFilters() {
  _initializeFilters = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return initializeCategoryFilters();
        case 2:
          _context10.next = 4;
          return initializeExcludeFilters();
        case 4:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _initializeFilters.apply(this, arguments);
}
function initializeCategoryFilters() {
  return _initializeCategoryFilters.apply(this, arguments);
}
/* Initialize Exclude Filters */
function _initializeCategoryFilters() {
  _initializeCategoryFilters = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
    var defaultFilters, customFilters, allFilters;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          defaultFilters = ['Code', 'Productivity', 'AI', 'Entertainment', 'Social'];
          _context11.next = 3;
          return getCustomFilters();
        case 3:
          customFilters = _context11.sent;
          allFilters = [].concat(defaultFilters, _toConsumableArray(customFilters));
          allFilters.forEach(function (filter) {
            createToggleButton(filter, false, 'category-filters');
          });

          // Load selected filters from storage
          _context11.next = 8;
          return getSelectedFilters();
        case 8:
          selectedFilters = _context11.sent;
          updateFilterStates('category-filters');
        case 10:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return _initializeCategoryFilters.apply(this, arguments);
}
function initializeExcludeFilters() {
  return _initializeExcludeFilters.apply(this, arguments);
}
/* Functions for Category Filters */
/* Function to get custom filters from Chrome storage */
function _initializeExcludeFilters() {
  _initializeExcludeFilters = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
    var customExcludeFilters;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return getCustomExcludeFilters();
        case 2:
          customExcludeFilters = _context12.sent;
          customExcludeFilters.forEach(function (filter) {
            createToggleButton(filter, false, 'exclude-filters');
          });

          // Load selected exclude filters from storage
          _context12.next = 6;
          return getSelectedExcludeFilters();
        case 6:
          excludeFilters = _context12.sent;
          updateFilterStates('exclude-filters');
        case 8:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _initializeExcludeFilters.apply(this, arguments);
}
function getCustomFilters() {
  return new Promise(function (resolve) {
    chrome.storage.local.get(['customFilters'], function (result) {
      resolve(result.customFilters || []);
    });
  });
}

/* Function to get selected filters from Chrome storage */
function getSelectedFilters() {
  return new Promise(function (resolve) {
    chrome.storage.local.get(['selectedFilters'], function (result) {
      resolve(result.selectedFilters || []);
    });
  });
}

/* Function to save selected filters to Chrome storage */
function saveSelectedFilters() {
  chrome.storage.local.set({
    selectedFilters: selectedFilters
  }, function () {
    console.log('Selected filters saved:', selectedFilters);
  });
}

/* Function to save custom filters to Chrome storage */
function saveCustomFilters(customFilters) {
  chrome.storage.local.set({
    customFilters: customFilters
  }, function () {
    console.log('Custom filters saved:', customFilters);
  });
}

/* Functions for Exclude Filters */

/* Function to get custom exclude filters from Chrome storage */
function getCustomExcludeFilters() {
  return new Promise(function (resolve) {
    chrome.storage.local.get(['customExcludeFilters'], function (result) {
      resolve(result.customExcludeFilters || []);
    });
  });
}

/* Function to get selected exclude filters from Chrome storage */
function getSelectedExcludeFilters() {
  return new Promise(function (resolve) {
    chrome.storage.local.get(['selectedExcludeFilters'], function (result) {
      resolve(result.selectedExcludeFilters || []);
    });
  });
}

/* Function to save selected exclude filters to Chrome storage */
function saveSelectedExcludeFilters() {
  chrome.storage.local.set({
    selectedExcludeFilters: excludeFilters
  }, function () {
    console.log('Selected exclude filters saved:', excludeFilters);
  });
}

/* Function to save custom exclude filters to Chrome storage */
function saveCustomExcludeFilters(customExcludeFilters) {
  chrome.storage.local.set({
    customExcludeFilters: customExcludeFilters
  }, function () {
    console.log('Custom exclude filters saved:', customExcludeFilters);
  });
}

/* Function to create a toggle button */
function createToggleButton(label) {
  var isDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var filterType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'category-filters';
  var containerId = filterType === 'exclude-filters' ? 'exclude-filters' : 'category-filters';
  var container = document.getElementById(containerId);
  var button = document.createElement('button');
  button.className = 'category-toggle-button';
  button.textContent = label;
  button.dataset.label = label;
  button.dataset["default"] = isDefault;

  // Add 'custom' class if it's not a default filter
  if (!isDefault) {
    button.classList.add('custom');

    // Create the remove (X) button
    var removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = '✕';
    removeBtn.title = 'Remove filter';

    // Event listener for removing the filter
    removeBtn.addEventListener('click', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              e.stopPropagation();
              _context2.next = 3;
              return removeFilter(label, filterType);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    button.appendChild(removeBtn);
  }

  // Set initial state based on selected filters
  if (filterType === 'exclude-filters') {
    if (excludeFilters.includes(label)) {
      button.classList.add('active');
    }
  } else {
    if (selectedFilters.includes(label)) {
      button.classList.add('active');
    }
  }

  // Event listener for toggling active state
  button.addEventListener('click', function () {
    if (filterType === 'exclude-filters') {
      var index = excludeFilters.indexOf(label);
      if (index > -1) {
        excludeFilters.splice(index, 1);
        button.classList.remove('active');
      } else {
        excludeFilters.push(label);
        button.classList.add('active');
      }
      saveSelectedExcludeFilters();
    } else {
      var _index = selectedFilters.indexOf(label);
      if (_index > -1) {
        selectedFilters.splice(_index, 1);
        button.classList.remove('active');
      } else {
        selectedFilters.push(label);
        button.classList.add('active');
      }
      saveSelectedFilters();
    }
    loadContent();
  });
  container.appendChild(button);
}

/* Function to remove a custom filter */
function removeFilter(_x3, _x4) {
  return _removeFilter.apply(this, arguments);
}
/* Function to update filter button states based on selectedFilters */
function _removeFilter() {
  _removeFilter = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(label, filterType) {
    var index, customExcludeFilters, filterIndex, button, _index2, customFilters, _filterIndex, _button;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          if (!(filterType === 'exclude-filters')) {
            _context13.next = 12;
            break;
          }
          // Remove from excludeFilters if present
          index = excludeFilters.indexOf(label);
          if (index > -1) {
            excludeFilters.splice(index, 1);
            saveSelectedExcludeFilters();
          }

          // Remove from customExcludeFilters in storage
          _context13.next = 5;
          return getCustomExcludeFilters();
        case 5:
          customExcludeFilters = _context13.sent;
          filterIndex = customExcludeFilters.indexOf(label);
          if (filterIndex > -1) {
            customExcludeFilters.splice(filterIndex, 1);
            saveCustomExcludeFilters(customExcludeFilters);
          }

          // Remove the button from the DOM
          button = document.querySelector(".category-toggle-button[data-label=\"".concat(label, "\"]"));
          if (button) {
            button.remove();
          }
          _context13.next = 21;
          break;
        case 12:
          // Existing category filters removal
          // Remove from selectedFilters if present
          _index2 = selectedFilters.indexOf(label);
          if (_index2 > -1) {
            selectedFilters.splice(_index2, 1);
            saveSelectedFilters();
          }

          // Remove from customFilters in storage
          _context13.next = 16;
          return getCustomFilters();
        case 16:
          customFilters = _context13.sent;
          _filterIndex = customFilters.indexOf(label);
          if (_filterIndex > -1) {
            customFilters.splice(_filterIndex, 1);
            saveCustomFilters(customFilters);
          }

          // Remove the button from the DOM
          _button = document.querySelector(".category-toggle-button[data-label=\"".concat(label, "\"]"));
          if (_button) {
            _button.remove();
          }
        case 21:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return _removeFilter.apply(this, arguments);
}
function updateFilterStates() {
  var filterType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'category-filters';
  var buttons;
  if (filterType === 'exclude-filters') {
    buttons = document.querySelectorAll('#exclude-filters .category-toggle-button');
    buttons.forEach(function (button) {
      var label = button.dataset.label;
      if (excludeFilters.includes(label)) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  } else {
    buttons = document.querySelectorAll('#category-filters .category-toggle-button');
    buttons.forEach(function (button) {
      var label = button.dataset.label;
      if (selectedFilters.includes(label)) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
}

/* Event listener for adding new category filter */
document.getElementById('add-filter-form').addEventListener('submit', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
    var input, newFilter, customFilters;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          e.preventDefault();
          input = document.getElementById('new-filter-input');
          newFilter = input.value.trim();
          if (!(newFilter && !selectedFilters.includes(newFilter))) {
            _context3.next = 11;
            break;
          }
          // Create toggle button
          createToggleButton(newFilter, false, 'category-filters');

          // Save to custom filters
          _context3.next = 7;
          return getCustomFilters();
        case 7:
          customFilters = _context3.sent;
          customFilters.push(newFilter);
          saveCustomFilters(customFilters);
          input.value = '';
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5) {
    return _ref3.apply(this, arguments);
  };
}());

/* Event listener for adding new exclude filter */
document.getElementById('add-exclude-filter-form').addEventListener('submit', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
    var input, newExcludeFilter, customExcludeFilters;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          e.preventDefault();
          input = document.getElementById('new-exclude-filter-input');
          newExcludeFilter = input.value.trim();
          if (!(newExcludeFilter && !excludeFilters.includes(newExcludeFilter))) {
            _context4.next = 11;
            break;
          }
          // Create toggle button
          createToggleButton(newExcludeFilter, false, 'exclude-filters');

          // Save to custom exclude filters
          _context4.next = 7;
          return getCustomExcludeFilters();
        case 7:
          customExcludeFilters = _context4.sent;
          customExcludeFilters.push(newExcludeFilter);
          saveCustomExcludeFilters(customExcludeFilters);
          input.value = '';
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x6) {
    return _ref4.apply(this, arguments);
  };
}());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJOztBQUV2QyxrREFBa0QsTUFBTTs7QUFFeEQ7QUFDQSwrQkFBK0IsSUFBSTs7QUFFbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSw0Q0FBNEMsU0FBUztBQUNyRDtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNSO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEseUJBQXlCLFlBQVk7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxrQ0FBa0M7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBOztBQUVBLDJCQUEyQiwrQkFBK0I7QUFDMUQsY0FBYywwQkFBMEI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxTQUFTO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDO1VBQUEsTUFDdkNxUSxnQkFBZ0IsSUFBSSxDQUFDcFUsY0FBYyxDQUFDbU0sUUFBUSxDQUFDaUksZ0JBQWdCLENBQUM7WUFBQWhLLFNBQUEsQ0FBQXBRLElBQUE7WUFBQTtVQUFBO1VBQzlEO1VBQ0ErWCxrQkFBa0IsQ0FBQ3FDLGdCQUFnQixFQUFFLEtBQUssRUFBRSxpQkFBaUIsQ0FBQzs7VUFFOUQ7VUFBQWhLLFNBQUEsQ0FBQXBRLElBQUE7VUFBQSxPQUNtQ3VZLHVCQUF1QixDQUFDLENBQUM7UUFBQTtVQUF0REgsb0JBQW9CLEdBQUFoSSxTQUFBLENBQUExUSxJQUFBO1VBQzFCMFksb0JBQW9CLENBQUM1WCxJQUFJLENBQUM0WixnQkFBZ0IsQ0FBQztVQUMzQ3ZCLHdCQUF3QixDQUFDVCxvQkFBb0IsQ0FBQztVQUU5QzZCLEtBQUssQ0FBQ3pkLEtBQUssR0FBRyxFQUFFO1FBQUM7UUFBQTtVQUFBLE9BQUE0VCxTQUFBLENBQUF0TyxJQUFBO01BQUE7SUFBQSxHQUFBb08sUUFBQTtFQUFBLENBRXhCO0VBQUEsaUJBQUF2SyxHQUFBO0lBQUEsT0FBQXdVLEtBQUEsQ0FBQTNYLEtBQUEsT0FBQUQsU0FBQTtFQUFBO0FBQUEsSUFBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvYWkvc3VtbWFyaXplci5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci8uL3NyYy91c2VyX2Rhc2hib2FyZC9oaXN0b3J5LmpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3VzZXJfZGFzaGJvYXJkL3V0aWxzLmpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3VzZXJfZGFzaGJvYXJkL3dpZGdldHMuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvdXRpbHMvZGIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvdXRpbHMvc2VhcmNoLmpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3VzZXJfZGFzaGJvYXJkL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9ub2RlX21vZHVsZXMvZnVzZS5qcy9kaXN0L2Z1c2UubWpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvdXNlcl9kYXNoYm9hcmQvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldFN1bW1hcml6ZXIoKSB7XG4gICAgY29uc3QgY2FuU3VtbWFyaXplID0gYXdhaXQgYWkuc3VtbWFyaXplci5jYXBhYmlsaXRpZXMoKTtcbiAgICBsZXQgc3VtbWFyaXplcjtcbiAgICBpZiAoY2FuU3VtbWFyaXplICYmIGNhblN1bW1hcml6ZS5hdmFpbGFibGUgIT09ICdubycpIHtcbiAgICAgICAgaWYgKGNhblN1bW1hcml6ZS5hdmFpbGFibGUgPT09ICdyZWFkaWx5Jykge1xuICAgICAgICAgICAgLy8gVGhlIHN1bW1hcml6ZXIgY2FuIGltbWVkaWF0ZWx5IGJlIHVzZWQuXG4gICAgICAgICAgICBzdW1tYXJpemVyID0gYXdhaXQgYWkuc3VtbWFyaXplci5jcmVhdGUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdW1tYXJpemVyIHJlYWR5IG5vdycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhlIHN1bW1hcml6ZXIgY2FuIGJlIHVzZWQgYWZ0ZXIgdGhlIG1vZGVsIGRvd25sb2FkLlxuICAgICAgICAgICAgc3VtbWFyaXplciA9IGF3YWl0IGFpLnN1bW1hcml6ZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICBzdW1tYXJpemVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Rvd25sb2FkcHJvZ3Jlc3MnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubG9hZGVkLCBlLnRvdGFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXdhaXQgc3VtbWFyaXplci5yZWFkeTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGZWF0dXJlIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGZWF0dXJlIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgLy8gVGhlIHN1bW1hcml6ZXIgY2FuJ3QgYmUgdXNlZCBhdCBhbGwuXG4gICAgfVxuICAgIHJldHVybiBzdW1tYXJpemVyO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzdW1tYXJpemUodGV4dCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHN1bW1hcml6ZXIgPSBhd2FpdCBnZXRTdW1tYXJpemVyKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1bW1hcml6ZXIuc3VtbWFyaXplKHRleHQpO1xuICAgICAgICBhd2FpdCBzdW1tYXJpemVyLmRlc3Ryb3koKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZHVyaW5nIHN1bW1hcml6YXRpb246JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuXG5leHBvcnQgeyBzdW1tYXJpemUgfTsiLCJpbXBvcnQgeyBnZXRIaXN0b3J5SW5UaW1lUmFuZ2UgfSBmcm9tICcuLi91dGlscy9kYi5qcyc7XG5pbXBvcnQgeyBnZXRGaWx0ZXJlZEhpc3RvcnlJdGVtcyB9IGZyb20gJy4uL3V0aWxzL3NlYXJjaC5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEhpc3Rvcnkoc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLmhpc3Rvcnkuc2VhcmNoKHt0ZXh0OiAnJywgc3RhcnRUaW1lOiBzdGFydERhdGUuZ2V0VGltZSgpLCBlbmRUaW1lOiBlbmREYXRlLmdldFRpbWUoKSwgbWF4UmVzdWx0czogNDAgfSwgKHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIHJlamVjdChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gc3RhcnREYXRlIFxuICogQHBhcmFtIHsqfSBlbmREYXRlIFxuICogQHBhcmFtIHsqfSBOIFxuICogQHJldHVybnMgXG4gKiBcbiAqIFxuICogKDUpIFt74oCmfSwge+KApn0sIHvigKZ9LCB74oCmfSwge+KApn1dXG4wXG46IFxue2hvc3RuYW1lOiAnd3d3LmN1cnNvci5jb20nLCB0aXRsZXM6IEFycmF5KDYpLCBjb3VudDogMjR9XG4xXG46IFxue2hvc3RuYW1lOiAnd3d3LnlvdXR1YmUuY29tJywgdGl0bGVzOiBBcnJheSgxMiksIGNvdW50OiAyMX1cbjJcbjogXG57aG9zdG5hbWU6ICdtYWlsLmdvb2dsZS5jb20nLCB0aXRsZXM6IEFycmF5KDEyKSwgY291bnQ6IDE4fVxuM1xuOiBcbntob3N0bmFtZTogJ2RldmVsb3Blci5jaHJvbWUuY29tJywgdGl0bGVzOiBBcnJheSgyKSwgY291bnQ6IDE2fVxuNFxuOiBcbntob3N0bmFtZTogJ2dpdGh1Yi5jb20nLCB0aXRsZXM6IEFycmF5KDcpLCBjb3VudDogMTJ9XG5cbmV4YW1wbGUgdGl0bGVzOlxuXG4wXG46IFxue3RpdGxlOiAnaW4gY3Vyc3VyIGR1cmluZyBpbmRleGluZywgaXMgdGhlIHJlc3VsdHMgc3RvcmVkIGxjb2FsbHkgLSBHb29nbGUgU2VhcmNoJywgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1pbitjdXJzdXIrZHVyaW5nK2nigKZTQVFreE1qVXpNR293YWplb0FnQ3dBZ0Emc291cmNlaWQ9Y2hyb21lJmllPVVURi04J31cbjFcbjogXG57dGl0bGU6ICdzbGFjayBpbnRlZ3JhdGlvbiB0byBub3Rpb24gLSBHb29nbGUgU2VhcmNoJywgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1zbGFjaytpbnRlZ3JhdGlvbivigKZUU0FRZzJNekF5YWpCcU42Z0NBTEFDQUEmc291cmNlaWQ9Y2hyb21lJmllPVVURi04J31cbjJcbjogXG57dGl0bGU6ICdpIHdhbnQgdG8gY29udmVydCBhIHNsYWNrIGNoYW5uZWwgdG8gbm90aW9uIGRvY3VtZW50IC0gR29vZ2xlIFNlYXJjaCcsIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9aSt3YW50K3RvK2NvbnZlcnQr4oCmdWdZR0NBRVFBUmdUa2djRU9TNHpONkFIZ2NjQyZzY2xpZW50PWd3cy13aXotc2VycCd9XG4zXG46IFxue3RpdGxlOiAnY29udmVydCBwaWwgaW1hZ2UgdG8gZGljb20gZmlsZSAtIEdvb2dsZSBTZWFyY2gnLCB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPWNvbnZlcnQrcGlsK2ltYWdlK+KApkFkSUJDRGcwTnpscU1HbzNxQUlBc0FJQSZzb3VyY2VpZD1jaHJvbWUmaWU9VVRGLTgnfVxuNFxuOiBcbnt0aXRsZTogJ3N1cGVyIHJlc29sdXRpb24gbW9kZWxzIC0gR29vZ2xlIFNlYXJjaCcsIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9c3VwZXIrcmVzb2x1dGlvbitt4oCmZTBnRUlOakl5TUdvd2FqZW9BZ0N3QWdBJnNvdXJjZWlkPWNocm9tZSZpZT1VVEYtOCd9XG41XG46IFxue3RpdGxlOiAnc3VwZXIgcmVzb2x1dGlvbiBtb2RlbCBvbmxpbmUgZnJlZSAtIEdvb2dsZSBTZWFyY2gnLCB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPXN1cGVyK3Jlc29sdXRpb24rbeKApkZtQU1BaUFZQmtBWUlrZ2NFTWk0eE02QUhrbGsmc2NsaWVudD1nd3Mtd2l6LXNlcnAnfVxuICovXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIaXN0b3J5V2l0aFRvcE5TdGF0cyhzdGFydERhdGUsIGVuZERhdGUsIE4sIHNlbGVjdGVkRmlsdGVycywgZXhjbHVkZUZpbHRlcnMpIHtcbiAgICBjb25zdCBoaXN0b3J5SXRlbXMgPSBhd2FpdCBnZXRIaXN0b3J5SW5UaW1lUmFuZ2Uoc3RhcnREYXRlLmdldFRpbWUoKSwgZW5kRGF0ZS5nZXRUaW1lKCkpO1xuICAgIGNvbnN0IGZpbHRlcmVkSGlzdG9yeUl0ZW1zID0gZ2V0RmlsdGVyZWRIaXN0b3J5SXRlbXMoaGlzdG9yeUl0ZW1zLCBzZWxlY3RlZEZpbHRlcnMsIGV4Y2x1ZGVGaWx0ZXJzKTtcbiAgICBjb25zdCBwYXJzZWRIaXN0b3J5SXRlbXMgPSBmaWx0ZXJlZEhpc3RvcnlJdGVtcy5tYXAoaXRlbSA9PiBwYXJzZV91cmxfcGFydChpdGVtLnVybCwgaXRlbS50aXRsZSkpO1xuICAgIGNvbnN0IGhvc3RuYW1lTWFwID0gY291bnRfYnlfaG9zdG5hbWUocGFyc2VkSGlzdG9yeUl0ZW1zKTtcbiAgICBjb25zdCBob3N0bmFtZVRpdGxlTWFwID0gY3JlYXRlSG9zdE5hbWVUaXRsZU1hcChwYXJzZWRIaXN0b3J5SXRlbXMpO1xuICAgIGNvbnN0IHNvcnRlZEhvc3RuYW1lcyA9IEFycmF5LmZyb20oaG9zdG5hbWVNYXAuZW50cmllcygpKS5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSk7XG4gICAgY29uc3QgdG9wTkhvc3RuYW1lcyA9IHNvcnRlZEhvc3RuYW1lcy5zbGljZSgwLCBOKTtcbiAgICBjb25zdCB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcyA9IHRvcE5Ib3N0bmFtZXMubWFwKGl0ZW0gPT4gKHsgaG9zdG5hbWU6IGl0ZW1bMF0sIHRpdGxlczogaG9zdG5hbWVUaXRsZU1hcC5nZXQoaXRlbVswXSksIGNvdW50OiBpdGVtWzFdIH0pKTtcblxuICAgIHJldHVybiB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcztcbn1cblxuXG5mdW5jdGlvbiBwYXJzZV91cmxfcGFydCh1cmwsIHRpdGxlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTCh1cmwpO1xuXG4gICAgICAgIC8vIEV4dHJhY3QgcHJvdG9jb2wgd2l0aG91dCB0aGUgdHJhaWxpbmcgY29sb24gKGUuZy4sICdodHRwcycpXG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gcGFyc2VkVXJsLnByb3RvY29sLnJlcGxhY2UoJzonLCAnJyk7XG5cbiAgICAgICAgLy8gU3BsaXQgaG9zdG5hbWUgaW50byBwYXJ0cyB0byBpZGVudGlmeSBzdWJkb21haW4sIGRvbWFpbiwgYW5kIFRMRFxuICAgICAgICBjb25zdCBob3N0bmFtZVBhcnRzID0gcGFyc2VkVXJsLmhvc3RuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIGxldCBzdWJkb21haW4gPSAnJztcbiAgICAgICAgbGV0IGRvbWFpbiA9ICcnO1xuICAgICAgICBsZXQgdGxkID0gJyc7XG5cbiAgICAgICAgaWYgKGhvc3RuYW1lUGFydHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgc3ViZG9tYWluID0gaG9zdG5hbWVQYXJ0cy5zbGljZSgwLCBob3N0bmFtZVBhcnRzLmxlbmd0aCAtIDIpLmpvaW4oJy4nKTtcbiAgICAgICAgICAgIGRvbWFpbiA9IGhvc3RuYW1lUGFydHNbaG9zdG5hbWVQYXJ0cy5sZW5ndGggLSAyXTtcbiAgICAgICAgICAgIHRsZCA9IGhvc3RuYW1lUGFydHNbaG9zdG5hbWVQYXJ0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSBlbHNlIGlmIChob3N0bmFtZVBhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgZG9tYWluID0gaG9zdG5hbWVQYXJ0c1swXTtcbiAgICAgICAgICAgIHRsZCA9IGhvc3RuYW1lUGFydHNbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb21haW4gPSBwYXJzZWRVcmwuaG9zdG5hbWU7XG4gICAgICAgICAgICB0bGQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV4dHJhY3QgcGF0aCAoZW5kcG9pbnQpXG4gICAgICAgIGNvbnN0IHBhdGggPSBwYXJzZWRVcmwucGF0aG5hbWU7XG5cbiAgICAgICAgLy8gRXh0cmFjdCBxdWVyeSBwYXJhbWV0ZXJzIGFzIGtleS12YWx1ZSBwYWlyc1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICBwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBrZXkgYWxyZWFkeSBleGlzdHMsIGNvbnZlcnQgaXQgaW50byBhbiBhcnJheVxuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zW2tleV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVBhcmFtc1trZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc1trZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW2tleV0gPSBbcXVlcnlQYXJhbXNba2V5XSwgdmFsdWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBFeHRyYWN0IGZyYWdtZW50IHdpdGhvdXQgdGhlIGxlYWRpbmcgaGFzaCAoZS5nLiwgJ3NlY3Rpb24xJylcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBwYXJzZWRVcmwuaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuXG4gICAgICAgIC8vIEV4dHJhY3QgcG9ydCBpZiBzcGVjaWZpZWQsIGVsc2UgZGVmYXVsdCBiYXNlZCBvbiBwcm90b2NvbFxuICAgICAgICBsZXQgcG9ydCA9IHBhcnNlZFVybC5wb3J0O1xuICAgICAgICBpZiAoIXBvcnQpIHtcbiAgICAgICAgICAgIGlmIChwcm90b2NvbCA9PT0gJ2h0dHAnKSB7XG4gICAgICAgICAgICAgICAgcG9ydCA9ICc4MCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3RvY29sID09PSAnaHR0cHMnKSB7XG4gICAgICAgICAgICAgICAgcG9ydCA9ICc0NDMnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3J0ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvdG9jb2wsXG4gICAgICAgICAgICBzdWJkb21haW4sXG4gICAgICAgICAgICBkb21haW4sXG4gICAgICAgICAgICB0bGQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICAgICAgICBmcmFnbWVudCxcbiAgICAgICAgICAgIHBvcnQsXG4gICAgICAgICAgICAvLyBBZGRpdGlvbmFsIFVzZWZ1bCBDb21wb25lbnRzXG4gICAgICAgICAgICBob3N0OiBwYXJzZWRVcmwuaG9zdCwgLy8gaW5jbHVkZXMgaG9zdG5hbWUgYW5kIHBvcnRcbiAgICAgICAgICAgIGhvc3RuYW1lOiBwYXJzZWRVcmwuaG9zdG5hbWUsXG4gICAgICAgICAgICBocmVmOiBwYXJzZWRVcmwuaHJlZixcbiAgICAgICAgICAgIG9yaWdpbjogcGFyc2VkVXJsLm9yaWdpbixcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBVUkw6ICR7dXJsfWAsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb3VudF9ieV9ob3N0bmFtZShwYXJzZWRIaXN0b3J5SXRlbXMpIHtcbiAgICBjb25zdCBob3N0bmFtZU1hcCA9IG5ldyBNYXAoKTtcblxuICAgIHBhcnNlZEhpc3RvcnlJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBob3N0bmFtZSA9IGl0ZW0uaG9zdG5hbWU7XG4gICAgICAgIGlmIChob3N0bmFtZSkge1xuICAgICAgICAgICAgaWYgKGhvc3RuYW1lTWFwLmhhcyhob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICBob3N0bmFtZU1hcC5zZXQoaG9zdG5hbWUsIGhvc3RuYW1lTWFwLmdldChob3N0bmFtZSkgKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaG9zdG5hbWVNYXAuc2V0KGhvc3RuYW1lLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhvc3RuYW1lTWFwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3N0TmFtZVRpdGxlTWFwKHBhcnNlZEhpc3RvcnlJdGVtcykge1xuICAgIGNvbnN0IGhvc3RuYW1lTWFwID0gbmV3IE1hcCgpO1xuICAgIHBhcnNlZEhpc3RvcnlJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBob3N0bmFtZSA9IGl0ZW0uaG9zdG5hbWU7XG4gICAgICAgIHZhciB0aXRsZSA9IGl0ZW0udGl0bGU7XG4gICAgICAgIGNvbnN0IHVybCA9IGl0ZW0uaHJlZjtcblxuICAgICAgICAvLyBpZiB0aXRsZSBpcyBlbXB0eSwgdXNlIGhvc3RuYW1lIGFzIHRpdGxlXG4gICAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgICAgIHRpdGxlID0gaG9zdG5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYWludGFpbiBhIGxpc3Qgb2YgdGl0bGVzIGZvciBlYWNoIGhvc3RuYW1lXG4gICAgICAgIGlmIChob3N0bmFtZU1hcC5oYXMoaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAvLyBpZiB0aXRsZSBpcyBhbHJlYWR5IGluIHRoZSBsaXN0LCBkb24ndCBhZGQgaXQgYWdhaW5cbiAgICAgICAgICAgIGlmICghaG9zdG5hbWVNYXAuZ2V0KGhvc3RuYW1lKS5zb21lKHQgPT4gdC50aXRsZSA9PT0gdGl0bGUpKSB7XG4gICAgICAgICAgICAgICAgaG9zdG5hbWVNYXAuZ2V0KGhvc3RuYW1lKS5wdXNoKHt0aXRsZSwgdXJsfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBob3N0bmFtZU1hcC5zZXQoaG9zdG5hbWUsIFt7dGl0bGUsIHVybH1dKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhvc3RuYW1lTWFwO1xufVxuXG5cblxuLy8gZXhwb3J0IHsgZ2V0SGlzdG9yeSB9OyIsIi8vIHdyaXRlIGEgZnVuY3Rpb24gdG8gZXh0cmFjdCBkb21haW4gbmFtZSBmcm9tIGEgdXJsXG5mdW5jdGlvbiBleHRyYWN0RG9tYWluKHVybCkge1xuICAgIHJldHVybiBuZXcgVVJMKHVybCkuaG9zdG5hbWU7XG4gIH1cbiAgXG4gIFxuICBmdW5jdGlvbiBtYXJrZG93blRvSHRtbChtYXJrZG93blRleHQpIHtcbiAgICAvLyBDb252ZXJ0IGJvbGQgdGV4dDogKip0ZXh0KipcbiAgICBsZXQgaHRtbCA9IG1hcmtkb3duVGV4dC5yZXBsYWNlKC9cXCpcXCooLis/KVxcKlxcKi9nLCAnPHN0cm9uZz4kMTwvc3Ryb25nPicpO1xuICAgIFxuICAgIC8vIENvbnZlcnQgaXRhbGljIHRleHQ6ICp0ZXh0KlxuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcKiguKz8pXFwqL2csICc8ZW0+JDE8L2VtPicpO1xuICAgIFxuICAgIC8vIENvbnZlcnQgYnVsbGV0IHBvaW50czogKiBpdGVtXG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXlxcKiAoLispJC9nbSwgJzxsaT4kMTwvbGk+Jyk7XG4gICAgXG4gICAgLy8gV3JhcCBsaXN0IGl0ZW1zIGluIDx1bD4gdGFnc1xuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoLyg8bGk+Lio8XFwvbGk+KS9nLCAnPHVsPiQxPC91bD4nKTtcbiAgXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuXG4vKipcbiAqIENsZWFucyBhbmQgc2FuaXRpemVzIGlucHV0IHRleHQgZm9yIHNhZmUgcHJvY2Vzc2luZyB3aXRoIGxhbmd1YWdlIG1vZGVscy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRoZSBpbnB1dCB0ZXh0IHRvIGJlIHNhbml0aXplZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhMZW5ndGggLSBNYXhpbXVtIGFsbG93ZWQgbGVuZ3RoIGZvciB0aGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW5pdGl6ZWQgdGV4dC5cbiAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgc2FuaXRpemVkIHRleHQgZXhjZWVkcyB0aGUgbWF4aW11bSBsZW5ndGguXG4gKi9cbmZ1bmN0aW9uIGNsZWFuSW5wdXQodGV4dCwgbWF4TGVuZ3RoID0gNDAwMCkge1xuICAvLyAxLiBSZW1vdmUgQ29udHJvbCBDaGFyYWN0ZXJzXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1tcXHgwMC1cXHgxRlxceDdGXS9nLCAnJyk7XG5cbiAgLy8gMi4gTm9ybWFsaXplIFVuaWNvZGVcbiAgdGV4dCA9IHRleHQubm9ybWFsaXplKCdORkMnKTtcblxuICAvLyAzLiBSZW1vdmUgTWFsZm9ybWVkIFVuaWNvZGVcbiAgdHJ5IHtcbiAgICAgIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUodGV4dCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC/vv70vZywgJycpO1xuICB9XG5cbiAgLy8gNC4gRXNjYXBlIFNwZWNpYWwgU3ltYm9sc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9bXFxcXGB7fVxcW1xcXSgpPD47fCZdL2csICdcXFxcJCYnKTtcblxuICAvLyA1LiBMaW1pdCBSZXBldGl0aXZlIENoYXJhY3RlcnMgdG8gM1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oLilcXDF7Myx9L2csICckMSQxJDEnKTtcblxuICAvLyA2LiBXaGl0ZWxpc3QgQWxsb3dlZCBDaGFyYWN0ZXJzIChBbHBoYW51bWVyaWNzIGFuZCBjb21tb24gcHVuY3R1YXRpb24pXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1teYS16QS1aMC05IC4sIT8nLV0vZywgJycpO1xuXG4gIC8vIDcuIFRyaW0gRXhjZXNzaXZlIFdoaXRlc3BhY2VcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKTtcblxuICAvLyA4LiBWYWxpZGF0ZSBMZW5ndGhcbiAgaWYgKHRleHQubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElucHV0IGV4Y2VlZHMgbWF4aW11bSBhbGxvd2VkIGxlbmd0aCBvZiAke21heExlbmd0aH0gY2hhcmFjdGVycy5gKTtcbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5leHBvcnQgeyBleHRyYWN0RG9tYWluLCBtYXJrZG93blRvSHRtbCwgY2xlYW5JbnB1dCB9OyIsIi8qIEVuYWJsZSBSZXNpemluZyAqL1xuZnVuY3Rpb24gZW5hYmxlUmVzaXppbmcoKSB7XG4gICAgY29uc3QgcmVzaXphYmxlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzaXphYmxlJyk7XG4gIFxuICAgIHJlc2l6YWJsZUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCByZXNpemVIYW5kbGUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNpemUtaGFuZGxlJyk7XG4gICAgICBsZXQgaXNSZXNpemluZyA9IGZhbHNlO1xuICBcbiAgICAgIHJlc2l6ZUhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlzUmVzaXppbmcgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdzZS1yZXNpemUnO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Jlc2l6aW5nJyk7XG4gIFxuICAgICAgICBjb25zdCBzdGFydFdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3Qgc3RhcnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgY29uc3Qgc3RhcnRYID0gZS5jbGllbnRYO1xuICAgICAgICBjb25zdCBzdGFydFkgPSBlLmNsaWVudFk7XG4gIFxuICAgICAgICBjb25zdCBvbk1vdXNlTW92ZSA9IChlKSA9PiB7XG4gICAgICAgICAgaWYgKCFpc1Jlc2l6aW5nKSByZXR1cm47XG4gIFxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRXaWR0aCA9IHN0YXJ0V2lkdGggKyAoZS5jbGllbnRYIC0gc3RhcnRYKTtcbiAgICAgICAgICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gc3RhcnRIZWlnaHQgKyAoZS5jbGllbnRZIC0gc3RhcnRZKTtcbiAgXG4gICAgICAgICAgLy8gU2V0IG1pbmltdW0gZGltZW5zaW9uc1xuICAgICAgICAgIGNvbnN0IG1pbldpZHRoID0gMjAwO1xuICAgICAgICAgIGNvbnN0IG1pbkhlaWdodCA9IDEwMDtcbiAgXG4gICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke01hdGgubWF4KGN1cnJlbnRXaWR0aCwgbWluV2lkdGgpfXB4YDtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke01hdGgubWF4KGN1cnJlbnRIZWlnaHQsIG1pbkhlaWdodCl9cHhgO1xuICAgICAgICB9O1xuICBcbiAgICAgICAgY29uc3Qgb25Nb3VzZVVwID0gKCkgPT4ge1xuICAgICAgICAgIGlzUmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Jlc2l6aW5nJyk7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gIFxuICAgICAgICAgIC8vIFNhdmUgZGltZW5zaW9uc1xuICAgICAgICAgIHNhdmVXaWRnZXRTaXplKGVsZW1lbnQuaWQsIGVsZW1lbnQuc3R5bGUud2lkdGgsIGVsZW1lbnQuc3R5bGUuaGVpZ2h0KTtcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgIH0pO1xuICBcbiAgICAgIC8vIExvYWQgc2F2ZWQgZGltZW5zaW9uc1xuICAgICAgbG9hZFdpZGdldFNpemUoZWxlbWVudC5pZCwgZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIC8qIFNhdmUgV2lkZ2V0IFNpemUgKi9cbiAgZnVuY3Rpb24gc2F2ZVdpZGdldFNpemUod2lkZ2V0SWQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgaWYgKGNocm9tZSAmJiBjaHJvbWUuc3RvcmFnZSAmJiBjaHJvbWUuc3RvcmFnZS5sb2NhbCkge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW3dpZGdldElkXTogc2l6ZSB9LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTYXZlZCBzaXplIGZvciAke3dpZGdldElkfTpgLCBzaXplKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGb3IgdGVzdGluZyBvdXRzaWRlIG9mIENocm9tZSBleHRlbnNpb25cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHdpZGdldElkLCBKU09OLnN0cmluZ2lmeShzaXplKSk7XG4gICAgfVxuICB9XG4gIFxuICAvKiBMb2FkIFdpZGdldCBTaXplICovXG4gIGZ1bmN0aW9uIGxvYWRXaWRnZXRTaXplKHdpZGdldElkLCBlbGVtZW50KSB7XG4gICAgaWYgKGNocm9tZSAmJiBjaHJvbWUuc3RvcmFnZSAmJiBjaHJvbWUuc3RvcmFnZS5sb2NhbCkge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHdpZGdldElkLCAocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHRbd2lkZ2V0SWRdKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IHJlc3VsdFt3aWRnZXRJZF0ud2lkdGg7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSByZXN1bHRbd2lkZ2V0SWRdLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZvciB0ZXN0aW5nIG91dHNpZGUgb2YgQ2hyb21lIGV4dGVuc2lvblxuICAgICAgY29uc3Qgc2l6ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0od2lkZ2V0SWQpKTtcbiAgICAgIGlmIChzaXplKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBzaXplLndpZHRoO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gY3JlYXRlT3JHZXRXaWRnZXQodW5pcXVlSUQsIHdpZGdldFRpdGxlKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVuaXF1ZUlEKSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVuaXF1ZUlEKTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IHdpZGdldENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aWRnZXQtY29udGFpbmVyJyk7XG4gIFxuICAgIC8vIENyZWF0ZSBhIG5ldyB3aWRnZXQgZWxlbWVudFxuICAgIGNvbnN0IG5ld1dpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1dpZGdldC5jbGFzc05hbWUgPSAnd2lkZ2V0IHJlc2l6YWJsZSc7XG4gIFxuICAgIC8vIEdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciB0aGUgbmV3IHdpZGdldFxuICAgIG5ld1dpZGdldC5pZCA9IHVuaXF1ZUlEO1xuICBcbiAgICAvLyBTZXQgdGhlIGNvbnRlbnQgb2YgdGhlIG5ldyB3aWRnZXRcbiAgICBuZXdXaWRnZXQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0LWhlYWRlclwiPlxuICAgICAgICAgICAgPGgyPiR7d2lkZ2V0VGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXNpemUtaGFuZGxlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gIFxuICAgIC8vIEFwcGVuZCB0aGUgbmV3IHdpZGdldCB0byB0aGUgd2lkZ2V0IGNvbnRhaW5lclxuICAgIHdpZGdldENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdXaWRnZXQpO1xuICBcbiAgICByZXR1cm4gbmV3V2lkZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRqdXN0V2lkZ2V0U2l6ZSh3aWRnZXQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gd2lkZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5oaXN0b3J5LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhlYWRlciA9IHdpZGdldC5xdWVyeVNlbGVjdG9yKCcud2lkZ2V0LWhlYWRlcicpO1xuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IGhlYWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgY29udGVudEhlaWdodCA9IGNvbnRlbnQub2Zmc2V0SGVpZ2h0O1xuICAgIHdpZGdldC5zdHlsZS5oZWlnaHQgPSBgJHtoZWFkZXJIZWlnaHQgKyBjb250ZW50SGVpZ2h0ICsgNTB9cHhgO1xuICB9XG5cbmV4cG9ydCB7IGVuYWJsZVJlc2l6aW5nLCBzYXZlV2lkZ2V0U2l6ZSwgbG9hZFdpZGdldFNpemUsIGNyZWF0ZU9yR2V0V2lkZ2V0LCBhZGp1c3RXaWRnZXRTaXplIH07XG4gICIsIi8vIGRiLmpzXG5cbmxldCBkYjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9wZW5EYXRhYmFzZSgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoZGIpIHtcbiAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oJ0hpc3RvcnlJbmRleGVyREInLCAxKTtcblxuICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRGF0YWJhc2UgZXJyb3I6JywgZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2ZW50KSA9PiB7XG4gICAgICBkYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICBjb25zdCBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdoaXN0b3J5JywgeyBrZXlQYXRoOiAnaWQnIH0pO1xuICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ3VybCcsICd1cmwnLCB7IHVuaXF1ZTogZmFsc2UgfSk7XG4gICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgndGl0bGUnLCAndGl0bGUnLCB7IHVuaXF1ZTogZmFsc2UgfSk7XG4gICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgndGFncycsICd0YWdzJywgeyB1bmlxdWU6IGZhbHNlLCBtdWx0aUVudHJ5OiB0cnVlIH0pO1xuICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ3N1bW1hcnknLCAnc3VtbWFyeScsIHsgdW5pcXVlOiBmYWxzZSB9KTtcbiAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KCdsYXN0VmlzaXRUaW1lJywgJ2xhc3RWaXNpdFRpbWUnLCB7IHVuaXF1ZTogdHJ1ZSB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgdXBncmFkZWRcIik7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICBkYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICByZXNvbHZlKGRiKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFyRGF0YWJhc2UoKSB7XG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oWydoaXN0b3J5J10sICdyZWFkd3JpdGUnKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gICAgY29uc3QgcmVxdWVzdCA9IG9iamVjdFN0b3JlLmNsZWFyKCk7XG4gICAgY29uc29sZS5sb2coXCJDbGVhcmluZyBkYXRhYmFzZVwiKTtcblxuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgIHJlamVjdChldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEhpc3RvcnlJdGVtKGl0ZW0pIHtcbiAgYXdhaXQgb3BlbkRhdGFiYXNlKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbJ2hpc3RvcnknXSwgJ3JlYWR3cml0ZScpO1xuICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ2hpc3RvcnknKTtcbiAgICBjb25zdCBpbmRleCA9IG9iamVjdFN0b3JlLmluZGV4KCdsYXN0VmlzaXRUaW1lJyk7XG5cbiAgICAvLyBDaGVjayBpZiBhbiBpdGVtIHdpdGggdGhlIHNhbWUgbGFzdFZpc2l0VGltZSBhbHJlYWR5IGV4aXN0c1xuICAgIGNvbnN0IGNoZWNrUmVxdWVzdCA9IGluZGV4LmdldChpdGVtLmxhc3RWaXNpdFRpbWUpO1xuXG4gICAgY2hlY2tSZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5yZXN1bHQpIHtcbiAgICAgICAgLy8gSXRlbSB3aXRoIHRoZSBzYW1lIGxhc3RWaXNpdFRpbWUgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIHdpdGggdGhlIHNhbWUgbGFzdFZpc2l0VGltZSBhbHJlYWR5IGV4aXN0cywgbm90IGFkZGluZy5cIik7XG4gICAgICAgIHJlc29sdmUoKTsgLy8gUmVzb2x2ZSB3aXRob3V0IGFkZGluZ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm8gaXRlbSB3aXRoIHRoZSBzYW1lIGxhc3RWaXNpdFRpbWUsIHByb2NlZWQgdG8gYWRkXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBvYmplY3RTdG9yZS5wdXQoaXRlbSk7XG5cbiAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYEhpc3RvcnkgaXRlbSBhZGRlZGApO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgaXRlbTonLCBldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICAgICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNoZWNrUmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBsYXN0VmlzaXRUaW1lOicsIGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgIH07XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsSGlzdG9yeUl0ZW1zKCkge1xuICBhd2FpdCBvcGVuRGF0YWJhc2UoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFsnaGlzdG9yeSddLCAncmVhZG9ubHknKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gICAgY29uc3QgcmVxdWVzdCA9IG9iamVjdFN0b3JlLmdldEFsbCgpO1xuXG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgIHJlc29sdmUoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkFsbCBoaXN0b3J5IGl0ZW1zIGZldGNoZWRcIik7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWxsIGhpc3RvcnkgaXRlbXM6JywgZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGlzdG9yeSBpdGVtIHdpdGggdGhlIHNwZWNpZmllZCBsYXN0VmlzaXRUaW1lIGV4aXN0cyBpbiB0aGUgSW5kZXhlZERCLlxuICogQHBhcmFtIHtudW1iZXJ9IGxhc3RWaXNpdFRpbWUgLSBUaGUgbGFzdCB2aXNpdCB0aW1lIG9mIHRoZSBoaXN0b3J5IGl0ZW0uXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0cnVlIGlmIHRoZSBpdGVtIGV4aXN0cywgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tJZkl0ZW1FeGlzdHMobGFzdFZpc2l0VGltZSkge1xuICAvLyBFbnN1cmUgdGhlIGRhdGFiYXNlIGlzIG9wZW5cbiAgYXdhaXQgb3BlbkRhdGFiYXNlKCk7XG5cbiAgdHJ5IHtcbiAgICAvLyBTdGFydCBhIHJlYWRvbmx5IHRyYW5zYWN0aW9uXG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbJ2hpc3RvcnknXSwgJ3JlYWRvbmx5Jyk7XG4gICAgY29uc3Qgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgnaGlzdG9yeScpO1xuICAgIGNvbnN0IGluZGV4ID0gb2JqZWN0U3RvcmUuaW5kZXgoJ2xhc3RWaXNpdFRpbWUnKTtcblxuICAgIC8vIEluaXRpYXRlIHRoZSBnZXQgcmVxdWVzdFxuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleC5nZXQobGFzdFZpc2l0VGltZSk7XG5cbiAgICAvLyBBd2FpdCB0aGUgcmVzdWx0IG9mIHRoZSBnZXQgcmVxdWVzdFxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCk7XG5cbiAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIGl0ZW0gZXhpc3RzXG4gICAgY29uc3QgZXhpc3RzID0gcmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgcmVzdWx0ICE9PSBudWxsO1xuXG4gICAgLy8gY29uc29sZS5sb2coYEl0ZW0gZXhpc3RzIGZvciBsYXN0VmlzaXRUaW1lICR7bGFzdFZpc2l0VGltZX06ICR7ZXhpc3RzfWApO1xuXG4gICAgcmV0dXJuIGV4aXN0cztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBFcnJvciBjaGVja2luZyBpZiBpdGVtIGV4aXN0cyBmb3IgbGFzdFZpc2l0VGltZSAke2xhc3RWaXNpdFRpbWV9OmAsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjsgLy8gUHJvcGFnYXRlIHRoZSBlcnJvciB0byB0aGUgY2FsbGVyXG4gIH1cbn1cblxuLyoqXG4gKiBQcm9taXNpZmllcyBhbiBJbmRleGVkREIgcmVxdWVzdC5cbiAqIEBwYXJhbSB7SURCUmVxdWVzdH0gcmVxdWVzdCAtIFRoZSBJbmRleGVkREIgcmVxdWVzdCBvYmplY3QuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSAtIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlcXVlc3QgcmVzdWx0LlxuICovXG5mdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxdWVzdC5yZXN1bHQpO1xuICAgIHJlcXVlc3Qub25lcnJvciA9ICgpID0+IHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgfSk7XG59XG5cbi8qKlxuICogSW5wdXQgc3RhcnREYXRlIGFuZCBlbmREYXRlLCBmZXRjaCBhbGwgaGlzdG9yeSBpdGVtcyBpbiB0aGF0IHJhbmdlLCBzZWFyY2ggd2l0aGluIGxhc3RWaXNpdFRpbWUgaW5kZXggb2YgdGhlIGRiICBcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhpc3RvcnlJblRpbWVSYW5nZShzdGFydERhdGUsIGVuZERhdGUpIHtcbiAgYXdhaXQgb3BlbkRhdGFiYXNlKCk7XG4gIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oWydoaXN0b3J5J10sICdyZWFkb25seScpO1xuICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gIGNvbnN0IGluZGV4ID0gb2JqZWN0U3RvcmUuaW5kZXgoJ2xhc3RWaXNpdFRpbWUnKTtcbiAgY29uc3QgcmFuZ2UgPSBJREJLZXlSYW5nZS5ib3VuZChzdGFydERhdGUsIGVuZERhdGUpO1xuICBjb25zdCByZXF1ZXN0ID0gaW5kZXguZ2V0QWxsKHJhbmdlKTsgIFxuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCk7XG4gIHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IEZ1c2UgZnJvbSAnZnVzZS5qcyc7XG5pbXBvcnQgeyBnZXRBbGxIaXN0b3J5SXRlbXMgfSBmcm9tICcuLi91dGlscy9kYi5qcyc7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlYXJjaFJlc3VsdHMocmF3X3F1ZXJ5KSB7XG4gICAgY29uc3QgcXVlcnkgPSByYXdfcXVlcnkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgaGlzdG9yeUl0ZW1zID0gYXdhaXQgZ2V0QWxsSGlzdG9yeUl0ZW1zKCk7XG4gICAgY29uc3QgZnVzZSA9IG5ldyBGdXNlKGhpc3RvcnlJdGVtcywge1xuICAgICAgICBrZXlzOiBbXG4gICAgICAgICAgICAndGl0bGUnLFxuICAgICAgICAgICAgJ3N1bW1hcnknLFxuICAgICAgICAgICAgeyBuYW1lOiAndGFncycsIHdlaWdodDogMC41IH1cbiAgICAgICAgXSxcbiAgICAgICAgdGhyZXNob2xkOiAwLjJcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdHMgPSBmdXNlLnNlYXJjaChxdWVyeSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWx0ZXJlZEhpc3RvcnlJdGVtcyhoaXN0b3J5SXRlbXMsIHNlbGVjdGVkRmlsdGVycywgZXhjbHVkZUZpbHRlcnMpIHtcbiAgICAvLyBTdGFydCB3aXRoIGFsbCBoaXN0b3J5IGl0ZW1zXG4gICAgbGV0IGZpbHRlcmVkSXRlbXMgPSBoaXN0b3J5SXRlbXM7XG5cbiAgICAvLyBBcHBseSBpbmNsdXNpb24gZmlsdGVycyBpZiBhbnlcbiAgICBpZiAoc2VsZWN0ZWRGaWx0ZXJzICYmIHNlbGVjdGVkRmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyQ2FzZVNlbGVjdGVkRmlsdGVycyA9IHNlbGVjdGVkRmlsdGVycy5tYXAoZmlsdGVyID0+IGZpbHRlci50b0xvd2VyQ2FzZSgpKTtcblxuICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gZmlsdGVyZWRJdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGl0ZW0udGl0bGUgPyBpdGVtLnRpdGxlLnRvTG93ZXJDYXNlKCkgOiAnJztcbiAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSBpdGVtLnN1bW1hcnkgPyBpdGVtLnN1bW1hcnkudG9Mb3dlckNhc2UoKSA6ICcnO1xuICAgICAgICAgICAgY29uc3QgdGFncyA9IGl0ZW0udGFncyA/IGl0ZW0udGFncy5tYXAodGFnID0+IHRhZy50b0xvd2VyQ2FzZSgpKSA6IFtdO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gaXRlbS51cmwgPyBpdGVtLnVybC50b0xvd2VyQ2FzZSgpIDogJyc7XG5cbiAgICAgICAgICAgIHJldHVybiBsb3dlckNhc2VTZWxlY3RlZEZpbHRlcnMuc29tZShmaWx0ZXIgPT4gXG4gICAgICAgICAgICAgICAgdGl0bGUuaW5jbHVkZXMoZmlsdGVyKSB8fFxuICAgICAgICAgICAgICAgIHN1bW1hcnkuaW5jbHVkZXMoZmlsdGVyKSB8fFxuICAgICAgICAgICAgICAgIHRhZ3MuaW5jbHVkZXMoZmlsdGVyKSB8fFxuICAgICAgICAgICAgICAgIHVybC5pbmNsdWRlcyhmaWx0ZXIpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBleGNsdXNpb24gZmlsdGVycyBpZiBhbnlcbiAgICBpZiAoZXhjbHVkZUZpbHRlcnMgJiYgZXhjbHVkZUZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBsb3dlckNhc2VFeGNsdWRlRmlsdGVycyA9IGV4Y2x1ZGVGaWx0ZXJzLm1hcChmaWx0ZXIgPT4gZmlsdGVyLnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgICAgIGZpbHRlcmVkSXRlbXMgPSBmaWx0ZXJlZEl0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS50aXRsZSA/IGl0ZW0udGl0bGUudG9Mb3dlckNhc2UoKSA6ICcnO1xuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGl0ZW0uc3VtbWFyeSA/IGl0ZW0uc3VtbWFyeS50b0xvd2VyQ2FzZSgpIDogJyc7XG4gICAgICAgICAgICBjb25zdCB0YWdzID0gaXRlbS50YWdzID8gaXRlbS50YWdzLm1hcCh0YWcgPT4gdGFnLnRvTG93ZXJDYXNlKCkpIDogW107XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBpdGVtLnVybCA/IGl0ZW0udXJsLnRvTG93ZXJDYXNlKCkgOiAnJztcblxuICAgICAgICAgICAgcmV0dXJuICFsb3dlckNhc2VFeGNsdWRlRmlsdGVycy5zb21lKGZpbHRlciA9PiBcbiAgICAgICAgICAgICAgICB0aXRsZS5pbmNsdWRlcyhmaWx0ZXIpIHx8XG4gICAgICAgICAgICAgICAgc3VtbWFyeS5pbmNsdWRlcyhmaWx0ZXIpIHx8XG4gICAgICAgICAgICAgICAgdGFncy5pbmNsdWRlcyhmaWx0ZXIpIHx8XG4gICAgICAgICAgICAgICAgdXJsLmluY2x1ZGVzKGZpbHRlcilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmaWx0ZXJlZEl0ZW1zO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyoqXG4gKiBGdXNlLmpzIHY3LjAuMCAtIExpZ2h0d2VpZ2h0IGZ1enp5LXNlYXJjaCAoaHR0cDovL2Z1c2Vqcy5pbylcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjMgS2lybyBSaXNrIChodHRwOi8va2lyby5tZSlcbiAqIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIEFwYWNoZSBTb2Z0d2FyZSBMaWNlbnNlIDIuMFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICovXG5cbmZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5XG4gICAgPyBnZXRUYWcodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nXG4gICAgOiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG4vLyBBZGFwdGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvbWFzdGVyLy5pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanNcbmNvbnN0IElORklOSVRZID0gMSAvIDA7XG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG4gIGxldCByZXN1bHQgPSB2YWx1ZSArICcnO1xuICByZXR1cm4gcmVzdWx0ID09ICcwJyAmJiAxIC8gdmFsdWUgPT0gLUlORklOSVRZID8gJy0wJyA6IHJlc3VsdFxufVxuXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKVxufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG4vLyBBZGFwdGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvbWFzdGVyL2lzQm9vbGVhbi5qc1xuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgPT09IHRydWUgfHxcbiAgICB2YWx1ZSA9PT0gZmFsc2UgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09ICdbb2JqZWN0IEJvb2xlYW5dJylcbiAgKVxufVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG4vLyBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS5cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIHZhbHVlICE9PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbFxufVxuXG5mdW5jdGlvbiBpc0JsYW5rKHZhbHVlKSB7XG4gIHJldHVybiAhdmFsdWUudHJpbSgpLmxlbmd0aFxufVxuXG4vLyBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4vLyBBZGFwdGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvbWFzdGVyLy5pbnRlcm5hbC9nZXRUYWcuanNcbmZ1bmN0aW9uIGdldFRhZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbFxuICAgID8gdmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICAgPyAnW29iamVjdCBVbmRlZmluZWRdJ1xuICAgICAgOiAnW29iamVjdCBOdWxsXSdcbiAgICA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSlcbn1cblxuY29uc3QgRVhURU5ERURfU0VBUkNIX1VOQVZBSUxBQkxFID0gJ0V4dGVuZGVkIHNlYXJjaCBpcyBub3QgYXZhaWxhYmxlJztcblxuY29uc3QgSU5DT1JSRUNUX0lOREVYX1RZUEUgPSBcIkluY29ycmVjdCAnaW5kZXgnIHR5cGVcIjtcblxuY29uc3QgTE9HSUNBTF9TRUFSQ0hfSU5WQUxJRF9RVUVSWV9GT1JfS0VZID0gKGtleSkgPT5cbiAgYEludmFsaWQgdmFsdWUgZm9yIGtleSAke2tleX1gO1xuXG5jb25zdCBQQVRURVJOX0xFTkdUSF9UT09fTEFSR0UgPSAobWF4KSA9PlxuICBgUGF0dGVybiBsZW5ndGggZXhjZWVkcyBtYXggb2YgJHttYXh9LmA7XG5cbmNvbnN0IE1JU1NJTkdfS0VZX1BST1BFUlRZID0gKG5hbWUpID0+IGBNaXNzaW5nICR7bmFtZX0gcHJvcGVydHkgaW4ga2V5YDtcblxuY29uc3QgSU5WQUxJRF9LRVlfV0VJR0hUX1ZBTFVFID0gKGtleSkgPT5cbiAgYFByb3BlcnR5ICd3ZWlnaHQnIGluIGtleSAnJHtrZXl9JyBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlcmA7XG5cbmNvbnN0IGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmNsYXNzIEtleVN0b3JlIHtcbiAgY29uc3RydWN0b3Ioa2V5cykge1xuICAgIHRoaXMuX2tleXMgPSBbXTtcbiAgICB0aGlzLl9rZXlNYXAgPSB7fTtcblxuICAgIGxldCB0b3RhbFdlaWdodCA9IDA7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgbGV0IG9iaiA9IGNyZWF0ZUtleShrZXkpO1xuXG4gICAgICB0aGlzLl9rZXlzLnB1c2gob2JqKTtcbiAgICAgIHRoaXMuX2tleU1hcFtvYmouaWRdID0gb2JqO1xuXG4gICAgICB0b3RhbFdlaWdodCArPSBvYmoud2VpZ2h0O1xuICAgIH0pO1xuXG4gICAgLy8gTm9ybWFsaXplIHdlaWdodHMgc28gdGhhdCB0aGVpciBzdW0gaXMgZXF1YWwgdG8gMVxuICAgIHRoaXMuX2tleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBrZXkud2VpZ2h0IC89IHRvdGFsV2VpZ2h0O1xuICAgIH0pO1xuICB9XG4gIGdldChrZXlJZCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlNYXBba2V5SWRdXG4gIH1cbiAga2V5cygpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5c1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fa2V5cylcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXkoa2V5KSB7XG4gIGxldCBwYXRoID0gbnVsbDtcbiAgbGV0IGlkID0gbnVsbDtcbiAgbGV0IHNyYyA9IG51bGw7XG4gIGxldCB3ZWlnaHQgPSAxO1xuICBsZXQgZ2V0Rm4gPSBudWxsO1xuXG4gIGlmIChpc1N0cmluZyhrZXkpIHx8IGlzQXJyYXkoa2V5KSkge1xuICAgIHNyYyA9IGtleTtcbiAgICBwYXRoID0gY3JlYXRlS2V5UGF0aChrZXkpO1xuICAgIGlkID0gY3JlYXRlS2V5SWQoa2V5KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWhhc093bi5jYWxsKGtleSwgJ25hbWUnKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKE1JU1NJTkdfS0VZX1BST1BFUlRZKCduYW1lJykpXG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IGtleS5uYW1lO1xuICAgIHNyYyA9IG5hbWU7XG5cbiAgICBpZiAoaGFzT3duLmNhbGwoa2V5LCAnd2VpZ2h0JykpIHtcbiAgICAgIHdlaWdodCA9IGtleS53ZWlnaHQ7XG5cbiAgICAgIGlmICh3ZWlnaHQgPD0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9LRVlfV0VJR0hUX1ZBTFVFKG5hbWUpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHBhdGggPSBjcmVhdGVLZXlQYXRoKG5hbWUpO1xuICAgIGlkID0gY3JlYXRlS2V5SWQobmFtZSk7XG4gICAgZ2V0Rm4gPSBrZXkuZ2V0Rm47XG4gIH1cblxuICByZXR1cm4geyBwYXRoLCBpZCwgd2VpZ2h0LCBzcmMsIGdldEZuIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlS2V5UGF0aChrZXkpIHtcbiAgcmV0dXJuIGlzQXJyYXkoa2V5KSA/IGtleSA6IGtleS5zcGxpdCgnLicpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleUlkKGtleSkge1xuICByZXR1cm4gaXNBcnJheShrZXkpID8ga2V5LmpvaW4oJy4nKSA6IGtleVxufVxuXG5mdW5jdGlvbiBnZXQob2JqLCBwYXRoKSB7XG4gIGxldCBsaXN0ID0gW107XG4gIGxldCBhcnIgPSBmYWxzZTtcblxuICBjb25zdCBkZWVwR2V0ID0gKG9iaiwgcGF0aCwgaW5kZXgpID0+IHtcbiAgICBpZiAoIWlzRGVmaW5lZChvYmopKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKCFwYXRoW2luZGV4XSkge1xuICAgICAgLy8gSWYgdGhlcmUncyBubyBwYXRoIGxlZnQsIHdlJ3ZlIGFycml2ZWQgYXQgdGhlIG9iamVjdCB3ZSBjYXJlIGFib3V0LlxuICAgICAgbGlzdC5wdXNoKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBrZXkgPSBwYXRoW2luZGV4XTtcblxuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgbGFzdCB2YWx1ZSBpbiB0aGUgcGF0aCwgYW5kIGlmIGl0J3MgYSBzdHJpbmcvbnVtYmVyL2Jvb2wsXG4gICAgICAvLyBhZGQgaXQgdG8gdGhlIGxpc3RcbiAgICAgIGlmIChcbiAgICAgICAgaW5kZXggPT09IHBhdGgubGVuZ3RoIC0gMSAmJlxuICAgICAgICAoaXNTdHJpbmcodmFsdWUpIHx8IGlzTnVtYmVyKHZhbHVlKSB8fCBpc0Jvb2xlYW4odmFsdWUpKVxuICAgICAgKSB7XG4gICAgICAgIGxpc3QucHVzaCh0b1N0cmluZyh2YWx1ZSkpO1xuICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBhcnIgPSB0cnVlO1xuICAgICAgICAvLyBTZWFyY2ggZWFjaCBpdGVtIGluIHRoZSBhcnJheS5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgZGVlcEdldCh2YWx1ZVtpXSwgcGF0aCwgaW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmxlbmd0aCkge1xuICAgICAgICAvLyBBbiBvYmplY3QuIFJlY3Vyc2UgZnVydGhlci5cbiAgICAgICAgZGVlcEdldCh2YWx1ZSwgcGF0aCwgaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gQmFja3dhcmRzIGNvbXBhdGliaWxpdHkgKHNpbmNlIHBhdGggdXNlZCB0byBiZSBhIHN0cmluZylcbiAgZGVlcEdldChvYmosIGlzU3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aCwgMCk7XG5cbiAgcmV0dXJuIGFyciA/IGxpc3QgOiBsaXN0WzBdXG59XG5cbmNvbnN0IE1hdGNoT3B0aW9ucyA9IHtcbiAgLy8gV2hldGhlciB0aGUgbWF0Y2hlcyBzaG91bGQgYmUgaW5jbHVkZWQgaW4gdGhlIHJlc3VsdCBzZXQuIFdoZW4gYHRydWVgLCBlYWNoIHJlY29yZCBpbiB0aGUgcmVzdWx0XG4gIC8vIHNldCB3aWxsIGluY2x1ZGUgdGhlIGluZGljZXMgb2YgdGhlIG1hdGNoZWQgY2hhcmFjdGVycy5cbiAgLy8gVGhlc2UgY2FuIGNvbnNlcXVlbnRseSBiZSB1c2VkIGZvciBoaWdobGlnaHRpbmcgcHVycG9zZXMuXG4gIGluY2x1ZGVNYXRjaGVzOiBmYWxzZSxcbiAgLy8gV2hlbiBgdHJ1ZWAsIHRoZSBtYXRjaGluZyBmdW5jdGlvbiB3aWxsIGNvbnRpbnVlIHRvIHRoZSBlbmQgb2YgYSBzZWFyY2ggcGF0dGVybiBldmVuIGlmXG4gIC8vIGEgcGVyZmVjdCBtYXRjaCBoYXMgYWxyZWFkeSBiZWVuIGxvY2F0ZWQgaW4gdGhlIHN0cmluZy5cbiAgZmluZEFsbE1hdGNoZXM6IGZhbHNlLFxuICAvLyBNaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgbXVzdCBiZSBtYXRjaGVkIGJlZm9yZSBhIHJlc3VsdCBpcyBjb25zaWRlcmVkIGEgbWF0Y2hcbiAgbWluTWF0Y2hDaGFyTGVuZ3RoOiAxXG59O1xuXG5jb25zdCBCYXNpY09wdGlvbnMgPSB7XG4gIC8vIFdoZW4gYHRydWVgLCB0aGUgYWxnb3JpdGhtIGNvbnRpbnVlcyBzZWFyY2hpbmcgdG8gdGhlIGVuZCBvZiB0aGUgaW5wdXQgZXZlbiBpZiBhIHBlcmZlY3RcbiAgLy8gbWF0Y2ggaXMgZm91bmQgYmVmb3JlIHRoZSBlbmQgb2YgdGhlIHNhbWUgaW5wdXQuXG4gIGlzQ2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gIC8vIFdoZW4gdHJ1ZSwgdGhlIG1hdGNoaW5nIGZ1bmN0aW9uIHdpbGwgY29udGludWUgdG8gdGhlIGVuZCBvZiBhIHNlYXJjaCBwYXR0ZXJuIGV2ZW4gaWZcbiAgaW5jbHVkZVNjb3JlOiBmYWxzZSxcbiAgLy8gTGlzdCBvZiBwcm9wZXJ0aWVzIHRoYXQgd2lsbCBiZSBzZWFyY2hlZC4gVGhpcyBhbHNvIHN1cHBvcnRzIG5lc3RlZCBwcm9wZXJ0aWVzLlxuICBrZXlzOiBbXSxcbiAgLy8gV2hldGhlciB0byBzb3J0IHRoZSByZXN1bHQgbGlzdCwgYnkgc2NvcmVcbiAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgLy8gRGVmYXVsdCBzb3J0IGZ1bmN0aW9uOiBzb3J0IGJ5IGFzY2VuZGluZyBzY29yZSwgYXNjZW5kaW5nIGluZGV4XG4gIHNvcnRGbjogKGEsIGIpID0+XG4gICAgYS5zY29yZSA9PT0gYi5zY29yZSA/IChhLmlkeCA8IGIuaWR4ID8gLTEgOiAxKSA6IGEuc2NvcmUgPCBiLnNjb3JlID8gLTEgOiAxXG59O1xuXG5jb25zdCBGdXp6eU9wdGlvbnMgPSB7XG4gIC8vIEFwcHJveGltYXRlbHkgd2hlcmUgaW4gdGhlIHRleHQgaXMgdGhlIHBhdHRlcm4gZXhwZWN0ZWQgdG8gYmUgZm91bmQ/XG4gIGxvY2F0aW9uOiAwLFxuICAvLyBBdCB3aGF0IHBvaW50IGRvZXMgdGhlIG1hdGNoIGFsZ29yaXRobSBnaXZlIHVwLiBBIHRocmVzaG9sZCBvZiAnMC4wJyByZXF1aXJlcyBhIHBlcmZlY3QgbWF0Y2hcbiAgLy8gKG9mIGJvdGggbGV0dGVycyBhbmQgbG9jYXRpb24pLCBhIHRocmVzaG9sZCBvZiAnMS4wJyB3b3VsZCBtYXRjaCBhbnl0aGluZy5cbiAgdGhyZXNob2xkOiAwLjYsXG4gIC8vIERldGVybWluZXMgaG93IGNsb3NlIHRoZSBtYXRjaCBtdXN0IGJlIHRvIHRoZSBmdXp6eSBsb2NhdGlvbiAoc3BlY2lmaWVkIGFib3ZlKS5cbiAgLy8gQW4gZXhhY3QgbGV0dGVyIG1hdGNoIHdoaWNoIGlzICdkaXN0YW5jZScgY2hhcmFjdGVycyBhd2F5IGZyb20gdGhlIGZ1enp5IGxvY2F0aW9uXG4gIC8vIHdvdWxkIHNjb3JlIGFzIGEgY29tcGxldGUgbWlzbWF0Y2guIEEgZGlzdGFuY2Ugb2YgJzAnIHJlcXVpcmVzIHRoZSBtYXRjaCBiZSBhdFxuICAvLyB0aGUgZXhhY3QgbG9jYXRpb24gc3BlY2lmaWVkLCBhIHRocmVzaG9sZCBvZiAnMTAwMCcgd291bGQgcmVxdWlyZSBhIHBlcmZlY3QgbWF0Y2hcbiAgLy8gdG8gYmUgd2l0aGluIDgwMCBjaGFyYWN0ZXJzIG9mIHRoZSBmdXp6eSBsb2NhdGlvbiB0byBiZSBmb3VuZCB1c2luZyBhIDAuOCB0aHJlc2hvbGQuXG4gIGRpc3RhbmNlOiAxMDBcbn07XG5cbmNvbnN0IEFkdmFuY2VkT3B0aW9ucyA9IHtcbiAgLy8gV2hlbiBgdHJ1ZWAsIGl0IGVuYWJsZXMgdGhlIHVzZSBvZiB1bml4LWxpa2Ugc2VhcmNoIGNvbW1hbmRzXG4gIHVzZUV4dGVuZGVkU2VhcmNoOiBmYWxzZSxcbiAgLy8gVGhlIGdldCBmdW5jdGlvbiB0byB1c2Ugd2hlbiBmZXRjaGluZyBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICAvLyBUaGUgZGVmYXVsdCB3aWxsIHNlYXJjaCBuZXN0ZWQgcGF0aHMgKmllIGZvby5iYXIuYmF6KlxuICBnZXRGbjogZ2V0LFxuICAvLyBXaGVuIGB0cnVlYCwgc2VhcmNoIHdpbGwgaWdub3JlIGBsb2NhdGlvbmAgYW5kIGBkaXN0YW5jZWAsIHNvIGl0IHdvbid0IG1hdHRlclxuICAvLyB3aGVyZSBpbiB0aGUgc3RyaW5nIHRoZSBwYXR0ZXJuIGFwcGVhcnMuXG4gIC8vIE1vcmUgaW5mbzogaHR0cHM6Ly9mdXNlanMuaW8vY29uY2VwdHMvc2NvcmluZy10aGVvcnkuaHRtbCNmdXp6aW5lc3Mtc2NvcmVcbiAgaWdub3JlTG9jYXRpb246IGZhbHNlLFxuICAvLyBXaGVuIGB0cnVlYCwgdGhlIGNhbGN1bGF0aW9uIGZvciB0aGUgcmVsZXZhbmNlIHNjb3JlICh1c2VkIGZvciBzb3J0aW5nKSB3aWxsXG4gIC8vIGlnbm9yZSB0aGUgZmllbGQtbGVuZ3RoIG5vcm0uXG4gIC8vIE1vcmUgaW5mbzogaHR0cHM6Ly9mdXNlanMuaW8vY29uY2VwdHMvc2NvcmluZy10aGVvcnkuaHRtbCNmaWVsZC1sZW5ndGgtbm9ybVxuICBpZ25vcmVGaWVsZE5vcm06IGZhbHNlLFxuICAvLyBUaGUgd2VpZ2h0IHRvIGRldGVybWluZSBob3cgbXVjaCBmaWVsZCBsZW5ndGggbm9ybSBlZmZlY3RzIHNjb3JpbmcuXG4gIGZpZWxkTm9ybVdlaWdodDogMVxufTtcblxudmFyIENvbmZpZyA9IHtcbiAgLi4uQmFzaWNPcHRpb25zLFxuICAuLi5NYXRjaE9wdGlvbnMsXG4gIC4uLkZ1enp5T3B0aW9ucyxcbiAgLi4uQWR2YW5jZWRPcHRpb25zXG59O1xuXG5jb25zdCBTUEFDRSA9IC9bXiBdKy9nO1xuXG4vLyBGaWVsZC1sZW5ndGggbm9ybTogdGhlIHNob3J0ZXIgdGhlIGZpZWxkLCB0aGUgaGlnaGVyIHRoZSB3ZWlnaHQuXG4vLyBTZXQgdG8gMyBkZWNpbWFscyB0byByZWR1Y2UgaW5kZXggc2l6ZS5cbmZ1bmN0aW9uIG5vcm0od2VpZ2h0ID0gMSwgbWFudGlzc2EgPSAzKSB7XG4gIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuICBjb25zdCBtID0gTWF0aC5wb3coMTAsIG1hbnRpc3NhKTtcblxuICByZXR1cm4ge1xuICAgIGdldCh2YWx1ZSkge1xuICAgICAgY29uc3QgbnVtVG9rZW5zID0gdmFsdWUubWF0Y2goU1BBQ0UpLmxlbmd0aDtcblxuICAgICAgaWYgKGNhY2hlLmhhcyhudW1Ub2tlbnMpKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5nZXQobnVtVG9rZW5zKVxuICAgICAgfVxuXG4gICAgICAvLyBEZWZhdWx0IGZ1bmN0aW9uIGlzIDEvc3FydCh4KSwgd2VpZ2h0IG1ha2VzIHRoYXQgdmFyaWFibGVcbiAgICAgIGNvbnN0IG5vcm0gPSAxIC8gTWF0aC5wb3cobnVtVG9rZW5zLCAwLjUgKiB3ZWlnaHQpO1xuXG4gICAgICAvLyBJbiBwbGFjZSBvZiBgdG9GaXhlZChtYW50aXNzYSlgLCBmb3IgZmFzdGVyIGNvbXB1dGF0aW9uXG4gICAgICBjb25zdCBuID0gcGFyc2VGbG9hdChNYXRoLnJvdW5kKG5vcm0gKiBtKSAvIG0pO1xuXG4gICAgICBjYWNoZS5zZXQobnVtVG9rZW5zLCBuKTtcblxuICAgICAgcmV0dXJuIG5cbiAgICB9LFxuICAgIGNsZWFyKCkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgRnVzZUluZGV4IHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGdldEZuID0gQ29uZmlnLmdldEZuLFxuICAgIGZpZWxkTm9ybVdlaWdodCA9IENvbmZpZy5maWVsZE5vcm1XZWlnaHRcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5ub3JtID0gbm9ybShmaWVsZE5vcm1XZWlnaHQsIDMpO1xuICAgIHRoaXMuZ2V0Rm4gPSBnZXRGbjtcbiAgICB0aGlzLmlzQ3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRJbmRleFJlY29yZHMoKTtcbiAgfVxuICBzZXRTb3VyY2VzKGRvY3MgPSBbXSkge1xuICAgIHRoaXMuZG9jcyA9IGRvY3M7XG4gIH1cbiAgc2V0SW5kZXhSZWNvcmRzKHJlY29yZHMgPSBbXSkge1xuICAgIHRoaXMucmVjb3JkcyA9IHJlY29yZHM7XG4gIH1cbiAgc2V0S2V5cyhrZXlzID0gW10pIHtcbiAgICB0aGlzLmtleXMgPSBrZXlzO1xuICAgIHRoaXMuX2tleXNNYXAgPSB7fTtcbiAgICBrZXlzLmZvckVhY2goKGtleSwgaWR4KSA9PiB7XG4gICAgICB0aGlzLl9rZXlzTWFwW2tleS5pZF0gPSBpZHg7XG4gICAgfSk7XG4gIH1cbiAgY3JlYXRlKCkge1xuICAgIGlmICh0aGlzLmlzQ3JlYXRlZCB8fCAhdGhpcy5kb2NzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pc0NyZWF0ZWQgPSB0cnVlO1xuXG4gICAgLy8gTGlzdCBpcyBBcnJheTxTdHJpbmc+XG4gICAgaWYgKGlzU3RyaW5nKHRoaXMuZG9jc1swXSkpIHtcbiAgICAgIHRoaXMuZG9jcy5mb3JFYWNoKChkb2MsIGRvY0luZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuX2FkZFN0cmluZyhkb2MsIGRvY0luZGV4KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMaXN0IGlzIEFycmF5PE9iamVjdD5cbiAgICAgIHRoaXMuZG9jcy5mb3JFYWNoKChkb2MsIGRvY0luZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuX2FkZE9iamVjdChkb2MsIGRvY0luZGV4KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMubm9ybS5jbGVhcigpO1xuICB9XG4gIC8vIEFkZHMgYSBkb2MgdG8gdGhlIGVuZCBvZiB0aGUgaW5kZXhcbiAgYWRkKGRvYykge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuc2l6ZSgpO1xuXG4gICAgaWYgKGlzU3RyaW5nKGRvYykpIHtcbiAgICAgIHRoaXMuX2FkZFN0cmluZyhkb2MsIGlkeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZE9iamVjdChkb2MsIGlkeCk7XG4gICAgfVxuICB9XG4gIC8vIFJlbW92ZXMgdGhlIGRvYyBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IG9mIHRoZSBpbmRleFxuICByZW1vdmVBdChpZHgpIHtcbiAgICB0aGlzLnJlY29yZHMuc3BsaWNlKGlkeCwgMSk7XG5cbiAgICAvLyBDaGFuZ2UgcmVmIGluZGV4IG9mIGV2ZXJ5IHN1YnNxdWVudCBkb2NcbiAgICBmb3IgKGxldCBpID0gaWR4LCBsZW4gPSB0aGlzLnNpemUoKTsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICB0aGlzLnJlY29yZHNbaV0uaSAtPSAxO1xuICAgIH1cbiAgfVxuICBnZXRWYWx1ZUZvckl0ZW1BdEtleUlkKGl0ZW0sIGtleUlkKSB7XG4gICAgcmV0dXJuIGl0ZW1bdGhpcy5fa2V5c01hcFtrZXlJZF1dXG4gIH1cbiAgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWNvcmRzLmxlbmd0aFxuICB9XG4gIF9hZGRTdHJpbmcoZG9jLCBkb2NJbmRleCkge1xuICAgIGlmICghaXNEZWZpbmVkKGRvYykgfHwgaXNCbGFuayhkb2MpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgcmVjb3JkID0ge1xuICAgICAgdjogZG9jLFxuICAgICAgaTogZG9jSW5kZXgsXG4gICAgICBuOiB0aGlzLm5vcm0uZ2V0KGRvYylcbiAgICB9O1xuXG4gICAgdGhpcy5yZWNvcmRzLnB1c2gocmVjb3JkKTtcbiAgfVxuICBfYWRkT2JqZWN0KGRvYywgZG9jSW5kZXgpIHtcbiAgICBsZXQgcmVjb3JkID0geyBpOiBkb2NJbmRleCwgJDoge30gfTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBrZXkgKGkuZSwgcGF0aCksIGFuZCBmZXRjaCB0aGUgdmFsdWUgYXQgdGhhdCBrZXlcbiAgICB0aGlzLmtleXMuZm9yRWFjaCgoa2V5LCBrZXlJbmRleCkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0ga2V5LmdldEZuID8ga2V5LmdldEZuKGRvYykgOiB0aGlzLmdldEZuKGRvYywga2V5LnBhdGgpO1xuXG4gICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBsZXQgc3ViUmVjb3JkcyA9IFtdO1xuICAgICAgICBjb25zdCBzdGFjayA9IFt7IG5lc3RlZEFyckluZGV4OiAtMSwgdmFsdWUgfV07XG5cbiAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IHsgbmVzdGVkQXJySW5kZXgsIHZhbHVlIH0gPSBzdGFjay5wb3AoKTtcblxuICAgICAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmICFpc0JsYW5rKHZhbHVlKSkge1xuICAgICAgICAgICAgbGV0IHN1YlJlY29yZCA9IHtcbiAgICAgICAgICAgICAgdjogdmFsdWUsXG4gICAgICAgICAgICAgIGk6IG5lc3RlZEFyckluZGV4LFxuICAgICAgICAgICAgICBuOiB0aGlzLm5vcm0uZ2V0KHZhbHVlKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc3ViUmVjb3Jkcy5wdXNoKHN1YlJlY29yZCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaykgPT4ge1xuICAgICAgICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICAgICAgICBuZXN0ZWRBcnJJbmRleDogayxcbiAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSA7XG4gICAgICAgIH1cbiAgICAgICAgcmVjb3JkLiRba2V5SW5kZXhdID0gc3ViUmVjb3JkcztcbiAgICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpICYmICFpc0JsYW5rKHZhbHVlKSkge1xuICAgICAgICBsZXQgc3ViUmVjb3JkID0ge1xuICAgICAgICAgIHY6IHZhbHVlLFxuICAgICAgICAgIG46IHRoaXMubm9ybS5nZXQodmFsdWUpXG4gICAgICAgIH07XG5cbiAgICAgICAgcmVjb3JkLiRba2V5SW5kZXhdID0gc3ViUmVjb3JkO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5yZWNvcmRzLnB1c2gocmVjb3JkKTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleXM6IHRoaXMua2V5cyxcbiAgICAgIHJlY29yZHM6IHRoaXMucmVjb3Jkc1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmRleChcbiAga2V5cyxcbiAgZG9jcyxcbiAgeyBnZXRGbiA9IENvbmZpZy5nZXRGbiwgZmllbGROb3JtV2VpZ2h0ID0gQ29uZmlnLmZpZWxkTm9ybVdlaWdodCB9ID0ge31cbikge1xuICBjb25zdCBteUluZGV4ID0gbmV3IEZ1c2VJbmRleCh7IGdldEZuLCBmaWVsZE5vcm1XZWlnaHQgfSk7XG4gIG15SW5kZXguc2V0S2V5cyhrZXlzLm1hcChjcmVhdGVLZXkpKTtcbiAgbXlJbmRleC5zZXRTb3VyY2VzKGRvY3MpO1xuICBteUluZGV4LmNyZWF0ZSgpO1xuICByZXR1cm4gbXlJbmRleFxufVxuXG5mdW5jdGlvbiBwYXJzZUluZGV4KFxuICBkYXRhLFxuICB7IGdldEZuID0gQ29uZmlnLmdldEZuLCBmaWVsZE5vcm1XZWlnaHQgPSBDb25maWcuZmllbGROb3JtV2VpZ2h0IH0gPSB7fVxuKSB7XG4gIGNvbnN0IHsga2V5cywgcmVjb3JkcyB9ID0gZGF0YTtcbiAgY29uc3QgbXlJbmRleCA9IG5ldyBGdXNlSW5kZXgoeyBnZXRGbiwgZmllbGROb3JtV2VpZ2h0IH0pO1xuICBteUluZGV4LnNldEtleXMoa2V5cyk7XG4gIG15SW5kZXguc2V0SW5kZXhSZWNvcmRzKHJlY29yZHMpO1xuICByZXR1cm4gbXlJbmRleFxufVxuXG5mdW5jdGlvbiBjb21wdXRlU2NvcmUkMShcbiAgcGF0dGVybixcbiAge1xuICAgIGVycm9ycyA9IDAsXG4gICAgY3VycmVudExvY2F0aW9uID0gMCxcbiAgICBleHBlY3RlZExvY2F0aW9uID0gMCxcbiAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZSxcbiAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvblxuICB9ID0ge31cbikge1xuICBjb25zdCBhY2N1cmFjeSA9IGVycm9ycyAvIHBhdHRlcm4ubGVuZ3RoO1xuXG4gIGlmIChpZ25vcmVMb2NhdGlvbikge1xuICAgIHJldHVybiBhY2N1cmFjeVxuICB9XG5cbiAgY29uc3QgcHJveGltaXR5ID0gTWF0aC5hYnMoZXhwZWN0ZWRMb2NhdGlvbiAtIGN1cnJlbnRMb2NhdGlvbik7XG5cbiAgaWYgKCFkaXN0YW5jZSkge1xuICAgIC8vIERvZGdlIGRpdmlkZSBieSB6ZXJvIGVycm9yLlxuICAgIHJldHVybiBwcm94aW1pdHkgPyAxLjAgOiBhY2N1cmFjeVxuICB9XG5cbiAgcmV0dXJuIGFjY3VyYWN5ICsgcHJveGltaXR5IC8gZGlzdGFuY2Vcbn1cblxuZnVuY3Rpb24gY29udmVydE1hc2tUb0luZGljZXMoXG4gIG1hdGNobWFzayA9IFtdLFxuICBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoXG4pIHtcbiAgbGV0IGluZGljZXMgPSBbXTtcbiAgbGV0IHN0YXJ0ID0gLTE7XG4gIGxldCBlbmQgPSAtMTtcbiAgbGV0IGkgPSAwO1xuXG4gIGZvciAobGV0IGxlbiA9IG1hdGNobWFzay5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGxldCBtYXRjaCA9IG1hdGNobWFza1tpXTtcbiAgICBpZiAobWF0Y2ggJiYgc3RhcnQgPT09IC0xKSB7XG4gICAgICBzdGFydCA9IGk7XG4gICAgfSBlbHNlIGlmICghbWF0Y2ggJiYgc3RhcnQgIT09IC0xKSB7XG4gICAgICBlbmQgPSBpIC0gMTtcbiAgICAgIGlmIChlbmQgLSBzdGFydCArIDEgPj0gbWluTWF0Y2hDaGFyTGVuZ3RoKSB7XG4gICAgICAgIGluZGljZXMucHVzaChbc3RhcnQsIGVuZF0pO1xuICAgICAgfVxuICAgICAgc3RhcnQgPSAtMTtcbiAgICB9XG4gIH1cblxuICAvLyAoaS0xIC0gc3RhcnQpICsgMSA9PiBpIC0gc3RhcnRcbiAgaWYgKG1hdGNobWFza1tpIC0gMV0gJiYgaSAtIHN0YXJ0ID49IG1pbk1hdGNoQ2hhckxlbmd0aCkge1xuICAgIGluZGljZXMucHVzaChbc3RhcnQsIGkgLSAxXSk7XG4gIH1cblxuICByZXR1cm4gaW5kaWNlc1xufVxuXG4vLyBNYWNoaW5lIHdvcmQgc2l6ZVxuY29uc3QgTUFYX0JJVFMgPSAzMjtcblxuZnVuY3Rpb24gc2VhcmNoKFxuICB0ZXh0LFxuICBwYXR0ZXJuLFxuICBwYXR0ZXJuQWxwaGFiZXQsXG4gIHtcbiAgICBsb2NhdGlvbiA9IENvbmZpZy5sb2NhdGlvbixcbiAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZSxcbiAgICB0aHJlc2hvbGQgPSBDb25maWcudGhyZXNob2xkLFxuICAgIGZpbmRBbGxNYXRjaGVzID0gQ29uZmlnLmZpbmRBbGxNYXRjaGVzLFxuICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgaW5jbHVkZU1hdGNoZXMgPSBDb25maWcuaW5jbHVkZU1hdGNoZXMsXG4gICAgaWdub3JlTG9jYXRpb24gPSBDb25maWcuaWdub3JlTG9jYXRpb25cbiAgfSA9IHt9XG4pIHtcbiAgaWYgKHBhdHRlcm4ubGVuZ3RoID4gTUFYX0JJVFMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoUEFUVEVSTl9MRU5HVEhfVE9PX0xBUkdFKE1BWF9CSVRTKSlcbiAgfVxuXG4gIGNvbnN0IHBhdHRlcm5MZW4gPSBwYXR0ZXJuLmxlbmd0aDtcbiAgLy8gU2V0IHN0YXJ0aW5nIGxvY2F0aW9uIGF0IGJlZ2lubmluZyB0ZXh0IGFuZCBpbml0aWFsaXplIHRoZSBhbHBoYWJldC5cbiAgY29uc3QgdGV4dExlbiA9IHRleHQubGVuZ3RoO1xuICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlbiBsb2NhdGlvbiA+IHRleHQubGVuZ3RoXG4gIGNvbnN0IGV4cGVjdGVkTG9jYXRpb24gPSBNYXRoLm1heCgwLCBNYXRoLm1pbihsb2NhdGlvbiwgdGV4dExlbikpO1xuICAvLyBIaWdoZXN0IHNjb3JlIGJleW9uZCB3aGljaCB3ZSBnaXZlIHVwLlxuICBsZXQgY3VycmVudFRocmVzaG9sZCA9IHRocmVzaG9sZDtcbiAgLy8gSXMgdGhlcmUgYSBuZWFyYnkgZXhhY3QgbWF0Y2g/IChzcGVlZHVwKVxuICBsZXQgYmVzdExvY2F0aW9uID0gZXhwZWN0ZWRMb2NhdGlvbjtcblxuICAvLyBQZXJmb3JtYW5jZTogb25seSBjb21wdXRlciBtYXRjaGVzIHdoZW4gdGhlIG1pbk1hdGNoQ2hhckxlbmd0aCA+IDFcbiAgLy8gT1IgaWYgYGluY2x1ZGVNYXRjaGVzYCBpcyB0cnVlLlxuICBjb25zdCBjb21wdXRlTWF0Y2hlcyA9IG1pbk1hdGNoQ2hhckxlbmd0aCA+IDEgfHwgaW5jbHVkZU1hdGNoZXM7XG4gIC8vIEEgbWFzayBvZiB0aGUgbWF0Y2hlcywgdXNlZCBmb3IgYnVpbGRpbmcgdGhlIGluZGljZXNcbiAgY29uc3QgbWF0Y2hNYXNrID0gY29tcHV0ZU1hdGNoZXMgPyBBcnJheSh0ZXh0TGVuKSA6IFtdO1xuXG4gIGxldCBpbmRleDtcblxuICAvLyBHZXQgYWxsIGV4YWN0IG1hdGNoZXMsIGhlcmUgZm9yIHNwZWVkIHVwXG4gIHdoaWxlICgoaW5kZXggPSB0ZXh0LmluZGV4T2YocGF0dGVybiwgYmVzdExvY2F0aW9uKSkgPiAtMSkge1xuICAgIGxldCBzY29yZSA9IGNvbXB1dGVTY29yZSQxKHBhdHRlcm4sIHtcbiAgICAgIGN1cnJlbnRMb2NhdGlvbjogaW5kZXgsXG4gICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH0pO1xuXG4gICAgY3VycmVudFRocmVzaG9sZCA9IE1hdGgubWluKHNjb3JlLCBjdXJyZW50VGhyZXNob2xkKTtcbiAgICBiZXN0TG9jYXRpb24gPSBpbmRleCArIHBhdHRlcm5MZW47XG5cbiAgICBpZiAoY29tcHV0ZU1hdGNoZXMpIHtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgcGF0dGVybkxlbikge1xuICAgICAgICBtYXRjaE1hc2tbaW5kZXggKyBpXSA9IDE7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZXNldCB0aGUgYmVzdCBsb2NhdGlvblxuICBiZXN0TG9jYXRpb24gPSAtMTtcblxuICBsZXQgbGFzdEJpdEFyciA9IFtdO1xuICBsZXQgZmluYWxTY29yZSA9IDE7XG4gIGxldCBiaW5NYXggPSBwYXR0ZXJuTGVuICsgdGV4dExlbjtcblxuICBjb25zdCBtYXNrID0gMSA8PCAocGF0dGVybkxlbiAtIDEpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0dGVybkxlbjsgaSArPSAxKSB7XG4gICAgLy8gU2NhbiBmb3IgdGhlIGJlc3QgbWF0Y2g7IGVhY2ggaXRlcmF0aW9uIGFsbG93cyBmb3Igb25lIG1vcmUgZXJyb3IuXG4gICAgLy8gUnVuIGEgYmluYXJ5IHNlYXJjaCB0byBkZXRlcm1pbmUgaG93IGZhciBmcm9tIHRoZSBtYXRjaCBsb2NhdGlvbiB3ZSBjYW4gc3RyYXlcbiAgICAvLyBhdCB0aGlzIGVycm9yIGxldmVsLlxuICAgIGxldCBiaW5NaW4gPSAwO1xuICAgIGxldCBiaW5NaWQgPSBiaW5NYXg7XG5cbiAgICB3aGlsZSAoYmluTWluIDwgYmluTWlkKSB7XG4gICAgICBjb25zdCBzY29yZSA9IGNvbXB1dGVTY29yZSQxKHBhdHRlcm4sIHtcbiAgICAgICAgZXJyb3JzOiBpLFxuICAgICAgICBjdXJyZW50TG9jYXRpb246IGV4cGVjdGVkTG9jYXRpb24gKyBiaW5NaWQsXG4gICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGRpc3RhbmNlLFxuICAgICAgICBpZ25vcmVMb2NhdGlvblxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzY29yZSA8PSBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICAgIGJpbk1pbiA9IGJpbk1pZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJpbk1heCA9IGJpbk1pZDtcbiAgICAgIH1cblxuICAgICAgYmluTWlkID0gTWF0aC5mbG9vcigoYmluTWF4IC0gYmluTWluKSAvIDIgKyBiaW5NaW4pO1xuICAgIH1cblxuICAgIC8vIFVzZSB0aGUgcmVzdWx0IGZyb20gdGhpcyBpdGVyYXRpb24gYXMgdGhlIG1heGltdW0gZm9yIHRoZSBuZXh0LlxuICAgIGJpbk1heCA9IGJpbk1pZDtcblxuICAgIGxldCBzdGFydCA9IE1hdGgubWF4KDEsIGV4cGVjdGVkTG9jYXRpb24gLSBiaW5NaWQgKyAxKTtcbiAgICBsZXQgZmluaXNoID0gZmluZEFsbE1hdGNoZXNcbiAgICAgID8gdGV4dExlblxuICAgICAgOiBNYXRoLm1pbihleHBlY3RlZExvY2F0aW9uICsgYmluTWlkLCB0ZXh0TGVuKSArIHBhdHRlcm5MZW47XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBiaXQgYXJyYXlcbiAgICBsZXQgYml0QXJyID0gQXJyYXkoZmluaXNoICsgMik7XG5cbiAgICBiaXRBcnJbZmluaXNoICsgMV0gPSAoMSA8PCBpKSAtIDE7XG5cbiAgICBmb3IgKGxldCBqID0gZmluaXNoOyBqID49IHN0YXJ0OyBqIC09IDEpIHtcbiAgICAgIGxldCBjdXJyZW50TG9jYXRpb24gPSBqIC0gMTtcbiAgICAgIGxldCBjaGFyTWF0Y2ggPSBwYXR0ZXJuQWxwaGFiZXRbdGV4dC5jaGFyQXQoY3VycmVudExvY2F0aW9uKV07XG5cbiAgICAgIGlmIChjb21wdXRlTWF0Y2hlcykge1xuICAgICAgICAvLyBTcGVlZCB1cDogcXVpY2sgYm9vbCB0byBpbnQgY29udmVyc2lvbiAoaS5lLCBgY2hhck1hdGNoID8gMSA6IDBgKVxuICAgICAgICBtYXRjaE1hc2tbY3VycmVudExvY2F0aW9uXSA9ICshIWNoYXJNYXRjaDtcbiAgICAgIH1cblxuICAgICAgLy8gRmlyc3QgcGFzczogZXhhY3QgbWF0Y2hcbiAgICAgIGJpdEFycltqXSA9ICgoYml0QXJyW2ogKyAxXSA8PCAxKSB8IDEpICYgY2hhck1hdGNoO1xuXG4gICAgICAvLyBTdWJzZXF1ZW50IHBhc3NlczogZnV6enkgbWF0Y2hcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIGJpdEFycltqXSB8PVxuICAgICAgICAgICgobGFzdEJpdEFycltqICsgMV0gfCBsYXN0Qml0QXJyW2pdKSA8PCAxKSB8IDEgfCBsYXN0Qml0QXJyW2ogKyAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJpdEFycltqXSAmIG1hc2spIHtcbiAgICAgICAgZmluYWxTY29yZSA9IGNvbXB1dGVTY29yZSQxKHBhdHRlcm4sIHtcbiAgICAgICAgICBlcnJvcnM6IGksXG4gICAgICAgICAgY3VycmVudExvY2F0aW9uLFxuICAgICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgICAgaWdub3JlTG9jYXRpb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVGhpcyBtYXRjaCB3aWxsIGFsbW9zdCBjZXJ0YWlubHkgYmUgYmV0dGVyIHRoYW4gYW55IGV4aXN0aW5nIG1hdGNoLlxuICAgICAgICAvLyBCdXQgY2hlY2sgYW55d2F5LlxuICAgICAgICBpZiAoZmluYWxTY29yZSA8PSBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICAgICAgLy8gSW5kZWVkIGl0IGlzXG4gICAgICAgICAgY3VycmVudFRocmVzaG9sZCA9IGZpbmFsU2NvcmU7XG4gICAgICAgICAgYmVzdExvY2F0aW9uID0gY3VycmVudExvY2F0aW9uO1xuXG4gICAgICAgICAgLy8gQWxyZWFkeSBwYXNzZWQgYGxvY2AsIGRvd25oaWxsIGZyb20gaGVyZSBvbiBpbi5cbiAgICAgICAgICBpZiAoYmVzdExvY2F0aW9uIDw9IGV4cGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2hlbiBwYXNzaW5nIGBiZXN0TG9jYXRpb25gLCBkb24ndCBleGNlZWQgb3VyIGN1cnJlbnQgZGlzdGFuY2UgZnJvbSBgZXhwZWN0ZWRMb2NhdGlvbmAuXG4gICAgICAgICAgc3RhcnQgPSBNYXRoLm1heCgxLCAyICogZXhwZWN0ZWRMb2NhdGlvbiAtIGJlc3RMb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBObyBob3BlIGZvciBhIChiZXR0ZXIpIG1hdGNoIGF0IGdyZWF0ZXIgZXJyb3IgbGV2ZWxzLlxuICAgIGNvbnN0IHNjb3JlID0gY29tcHV0ZVNjb3JlJDEocGF0dGVybiwge1xuICAgICAgZXJyb3JzOiBpICsgMSxcbiAgICAgIGN1cnJlbnRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfSk7XG5cbiAgICBpZiAoc2NvcmUgPiBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGxhc3RCaXRBcnIgPSBiaXRBcnI7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSB7XG4gICAgaXNNYXRjaDogYmVzdExvY2F0aW9uID49IDAsXG4gICAgLy8gQ291bnQgZXhhY3QgbWF0Y2hlcyAodGhvc2Ugd2l0aCBhIHNjb3JlIG9mIDApIHRvIGJlIFwiYWxtb3N0XCIgZXhhY3RcbiAgICBzY29yZTogTWF0aC5tYXgoMC4wMDEsIGZpbmFsU2NvcmUpXG4gIH07XG5cbiAgaWYgKGNvbXB1dGVNYXRjaGVzKSB7XG4gICAgY29uc3QgaW5kaWNlcyA9IGNvbnZlcnRNYXNrVG9JbmRpY2VzKG1hdGNoTWFzaywgbWluTWF0Y2hDaGFyTGVuZ3RoKTtcbiAgICBpZiAoIWluZGljZXMubGVuZ3RoKSB7XG4gICAgICByZXN1bHQuaXNNYXRjaCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgIHJlc3VsdC5pbmRpY2VzID0gaW5kaWNlcztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhdHRlcm5BbHBoYWJldChwYXR0ZXJuKSB7XG4gIGxldCBtYXNrID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHBhdHRlcm4ubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBjb25zdCBjaGFyID0gcGF0dGVybi5jaGFyQXQoaSk7XG4gICAgbWFza1tjaGFyXSA9IChtYXNrW2NoYXJdIHx8IDApIHwgKDEgPDwgKGxlbiAtIGkgLSAxKSk7XG4gIH1cblxuICByZXR1cm4gbWFza1xufVxuXG5jbGFzcyBCaXRhcFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdHRlcm4sXG4gICAge1xuICAgICAgbG9jYXRpb24gPSBDb25maWcubG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQgPSBDb25maWcudGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2UsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGZpbmRBbGxNYXRjaGVzID0gQ29uZmlnLmZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvblxuICAgIH0gPSB7fVxuICApIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfTtcblxuICAgIHRoaXMucGF0dGVybiA9IGlzQ2FzZVNlbnNpdGl2ZSA/IHBhdHRlcm4gOiBwYXR0ZXJuLnRvTG93ZXJDYXNlKCk7XG5cbiAgICB0aGlzLmNodW5rcyA9IFtdO1xuXG4gICAgaWYgKCF0aGlzLnBhdHRlcm4ubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhZGRDaHVuayA9IChwYXR0ZXJuLCBzdGFydEluZGV4KSA9PiB7XG4gICAgICB0aGlzLmNodW5rcy5wdXNoKHtcbiAgICAgICAgcGF0dGVybixcbiAgICAgICAgYWxwaGFiZXQ6IGNyZWF0ZVBhdHRlcm5BbHBoYWJldChwYXR0ZXJuKSxcbiAgICAgICAgc3RhcnRJbmRleFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxlbiA9IHRoaXMucGF0dGVybi5sZW5ndGg7XG5cbiAgICBpZiAobGVuID4gTUFYX0JJVFMpIHtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGNvbnN0IHJlbWFpbmRlciA9IGxlbiAlIE1BWF9CSVRTO1xuICAgICAgY29uc3QgZW5kID0gbGVuIC0gcmVtYWluZGVyO1xuXG4gICAgICB3aGlsZSAoaSA8IGVuZCkge1xuICAgICAgICBhZGRDaHVuayh0aGlzLnBhdHRlcm4uc3Vic3RyKGksIE1BWF9CSVRTKSwgaSk7XG4gICAgICAgIGkgKz0gTUFYX0JJVFM7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZW1haW5kZXIpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGxlbiAtIE1BWF9CSVRTO1xuICAgICAgICBhZGRDaHVuayh0aGlzLnBhdHRlcm4uc3Vic3RyKHN0YXJ0SW5kZXgpLCBzdGFydEluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2h1bmsodGhpcy5wYXR0ZXJuLCAwKTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hJbih0ZXh0KSB7XG4gICAgY29uc3QgeyBpc0Nhc2VTZW5zaXRpdmUsIGluY2x1ZGVNYXRjaGVzIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBpZiAoIWlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgdGV4dCA9IHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvLyBFeGFjdCBtYXRjaFxuICAgIGlmICh0aGlzLnBhdHRlcm4gPT09IHRleHQpIHtcbiAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgIGlzTWF0Y2g6IHRydWUsXG4gICAgICAgIHNjb3JlOiAwXG4gICAgICB9O1xuXG4gICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgcmVzdWx0LmluZGljZXMgPSBbWzAsIHRleHQubGVuZ3RoIC0gMV1dO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCB1c2UgQml0YXAgYWxnb3JpdGhtXG4gICAgY29uc3Qge1xuICAgICAgbG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaWdub3JlTG9jYXRpb25cbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgbGV0IGFsbEluZGljZXMgPSBbXTtcbiAgICBsZXQgdG90YWxTY29yZSA9IDA7XG4gICAgbGV0IGhhc01hdGNoZXMgPSBmYWxzZTtcblxuICAgIHRoaXMuY2h1bmtzLmZvckVhY2goKHsgcGF0dGVybiwgYWxwaGFiZXQsIHN0YXJ0SW5kZXggfSkgPT4ge1xuICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSwgaW5kaWNlcyB9ID0gc2VhcmNoKHRleHQsIHBhdHRlcm4sIGFscGhhYmV0LCB7XG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbiArIHN0YXJ0SW5kZXgsXG4gICAgICAgIGRpc3RhbmNlLFxuICAgICAgICB0aHJlc2hvbGQsXG4gICAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgICBpZ25vcmVMb2NhdGlvblxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgIGhhc01hdGNoZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0b3RhbFNjb3JlICs9IHNjb3JlO1xuXG4gICAgICBpZiAoaXNNYXRjaCAmJiBpbmRpY2VzKSB7XG4gICAgICAgIGFsbEluZGljZXMgPSBbLi4uYWxsSW5kaWNlcywgLi4uaW5kaWNlc107XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgaXNNYXRjaDogaGFzTWF0Y2hlcyxcbiAgICAgIHNjb3JlOiBoYXNNYXRjaGVzID8gdG90YWxTY29yZSAvIHRoaXMuY2h1bmtzLmxlbmd0aCA6IDFcbiAgICB9O1xuXG4gICAgaWYgKGhhc01hdGNoZXMgJiYgaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgIHJlc3VsdC5pbmRpY2VzID0gYWxsSW5kaWNlcztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuY2xhc3MgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHRoaXMucGF0dGVybiA9IHBhdHRlcm47XG4gIH1cbiAgc3RhdGljIGlzTXVsdGlNYXRjaChwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGdldE1hdGNoKHBhdHRlcm4sIHRoaXMubXVsdGlSZWdleClcbiAgfVxuICBzdGF0aWMgaXNTaW5nbGVNYXRjaChwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGdldE1hdGNoKHBhdHRlcm4sIHRoaXMuc2luZ2xlUmVnZXgpXG4gIH1cbiAgc2VhcmNoKC8qdGV4dCovKSB7fVxufVxuXG5mdW5jdGlvbiBnZXRNYXRjaChwYXR0ZXJuLCBleHApIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHBhdHRlcm4ubWF0Y2goZXhwKTtcbiAgcmV0dXJuIG1hdGNoZXMgPyBtYXRjaGVzWzFdIDogbnVsbFxufVxuXG4vLyBUb2tlbjogJ2ZpbGVcblxuY2xhc3MgRXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdleGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9ePVwiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXj0oLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0ID09PSB0aGlzLnBhdHRlcm47XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbMCwgdGhpcy5wYXR0ZXJuLmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbi8vIFRva2VuOiAhZmlyZVxuXG5jbGFzcyBJbnZlcnNlRXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdpbnZlcnNlLWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL14hXCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eISguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0ZXh0LmluZGV4T2YodGhpcy5wYXR0ZXJuKTtcbiAgICBjb25zdCBpc01hdGNoID0gaW5kZXggPT09IC0xO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogWzAsIHRleHQubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuLy8gVG9rZW46IF5maWxlXG5cbmNsYXNzIFByZWZpeEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAncHJlZml4LWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL15cXF5cIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL15cXF4oLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0LnN0YXJ0c1dpdGgodGhpcy5wYXR0ZXJuKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0aGlzLnBhdHRlcm4ubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuLy8gVG9rZW46ICFeZmlyZVxuXG5jbGFzcyBJbnZlcnNlUHJlZml4RXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdpbnZlcnNlLXByZWZpeC1leGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eIVxcXlwiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiFcXF4oLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSAhdGV4dC5zdGFydHNXaXRoKHRoaXMucGF0dGVybik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbMCwgdGV4dC5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb2tlbjogLmZpbGUkXG5cbmNsYXNzIFN1ZmZpeEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnc3VmZml4LWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL15cIiguKilcIlxcJCQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14oLiopXFwkJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0LmVuZHNXaXRoKHRoaXMucGF0dGVybik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbdGV4dC5sZW5ndGggLSB0aGlzLnBhdHRlcm4ubGVuZ3RoLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbi8vIFRva2VuOiAhLmZpbGUkXG5cbmNsYXNzIEludmVyc2VTdWZmaXhFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2ludmVyc2Utc3VmZml4LWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL14hXCIoLiopXCJcXCQkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eISguKilcXCQkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaXNNYXRjaCA9ICF0ZXh0LmVuZHNXaXRoKHRoaXMucGF0dGVybik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogWzAsIHRleHQubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgRnV6enlNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdHRlcm4sXG4gICAge1xuICAgICAgbG9jYXRpb24gPSBDb25maWcubG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQgPSBDb25maWcudGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2UsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGZpbmRBbGxNYXRjaGVzID0gQ29uZmlnLmZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvblxuICAgIH0gPSB7fVxuICApIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgICB0aGlzLl9iaXRhcFNlYXJjaCA9IG5ldyBCaXRhcFNlYXJjaChwYXR0ZXJuLCB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfSk7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZnV6enknXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXlwiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2JpdGFwU2VhcmNoLnNlYXJjaEluKHRleHQpXG4gIH1cbn1cblxuLy8gVG9rZW46ICdmaWxlXG5cbmNsYXNzIEluY2x1ZGVNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdpbmNsdWRlJ1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL14nXCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eJyguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgbGV0IGxvY2F0aW9uID0gMDtcbiAgICBsZXQgaW5kZXg7XG5cbiAgICBjb25zdCBpbmRpY2VzID0gW107XG4gICAgY29uc3QgcGF0dGVybkxlbiA9IHRoaXMucGF0dGVybi5sZW5ndGg7XG5cbiAgICAvLyBHZXQgYWxsIGV4YWN0IG1hdGNoZXNcbiAgICB3aGlsZSAoKGluZGV4ID0gdGV4dC5pbmRleE9mKHRoaXMucGF0dGVybiwgbG9jYXRpb24pKSA+IC0xKSB7XG4gICAgICBsb2NhdGlvbiA9IGluZGV4ICsgcGF0dGVybkxlbjtcbiAgICAgIGluZGljZXMucHVzaChbaW5kZXgsIGxvY2F0aW9uIC0gMV0pO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTWF0Y2ggPSAhIWluZGljZXMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlc1xuICAgIH1cbiAgfVxufVxuXG4vLyDinZdPcmRlciBpcyBpbXBvcnRhbnQuIERPIE5PVCBDSEFOR0UuXG5jb25zdCBzZWFyY2hlcnMgPSBbXG4gIEV4YWN0TWF0Y2gsXG4gIEluY2x1ZGVNYXRjaCxcbiAgUHJlZml4RXhhY3RNYXRjaCxcbiAgSW52ZXJzZVByZWZpeEV4YWN0TWF0Y2gsXG4gIEludmVyc2VTdWZmaXhFeGFjdE1hdGNoLFxuICBTdWZmaXhFeGFjdE1hdGNoLFxuICBJbnZlcnNlRXhhY3RNYXRjaCxcbiAgRnV6enlNYXRjaFxuXTtcblxuY29uc3Qgc2VhcmNoZXJzTGVuID0gc2VhcmNoZXJzLmxlbmd0aDtcblxuLy8gUmVnZXggdG8gc3BsaXQgYnkgc3BhY2VzLCBidXQga2VlcCBhbnl0aGluZyBpbiBxdW90ZXMgdG9nZXRoZXJcbmNvbnN0IFNQQUNFX1JFID0gLyArKD89KD86W15cXFwiXSpcXFwiW15cXFwiXSpcXFwiKSpbXlxcXCJdKiQpLztcbmNvbnN0IE9SX1RPS0VOID0gJ3wnO1xuXG4vLyBSZXR1cm4gYSAyRCBhcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcXVlcnksIGZvciBzaW1wbGVyIHBhcnNpbmcuXG4vLyBFeGFtcGxlOlxuLy8gXCJeY29yZSBnbyQgfCByYiQgfCBweSQgeHkkXCIgPT4gW1tcIl5jb3JlXCIsIFwiZ28kXCJdLCBbXCJyYiRcIl0sIFtcInB5JFwiLCBcInh5JFwiXV1cbmZ1bmN0aW9uIHBhcnNlUXVlcnkocGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBwYXR0ZXJuLnNwbGl0KE9SX1RPS0VOKS5tYXAoKGl0ZW0pID0+IHtcbiAgICBsZXQgcXVlcnkgPSBpdGVtXG4gICAgICAudHJpbSgpXG4gICAgICAuc3BsaXQoU1BBQ0VfUkUpXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtICYmICEhaXRlbS50cmltKCkpO1xuXG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcXVlcnkubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5SXRlbSA9IHF1ZXJ5W2ldO1xuXG4gICAgICAvLyAxLiBIYW5kbGUgbXVsdGlwbGUgcXVlcnkgbWF0Y2ggKGkuZSwgb25jZSB0aGF0IGFyZSBxdW90ZWQsIGxpa2UgYFwiaGVsbG8gd29ybGRcImApXG4gICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgIHdoaWxlICghZm91bmQgJiYgKytpZHggPCBzZWFyY2hlcnNMZW4pIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoZXIgPSBzZWFyY2hlcnNbaWR4XTtcbiAgICAgICAgbGV0IHRva2VuID0gc2VhcmNoZXIuaXNNdWx0aU1hdGNoKHF1ZXJ5SXRlbSk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChuZXcgc2VhcmNoZXIodG9rZW4sIG9wdGlvbnMpKTtcbiAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIuIEhhbmRsZSBzaW5nbGUgcXVlcnkgbWF0Y2hlcyAoaS5lLCBvbmNlIHRoYXQgYXJlICpub3QqIHF1b3RlZClcbiAgICAgIGlkeCA9IC0xO1xuICAgICAgd2hpbGUgKCsraWR4IDwgc2VhcmNoZXJzTGVuKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaGVyID0gc2VhcmNoZXJzW2lkeF07XG4gICAgICAgIGxldCB0b2tlbiA9IHNlYXJjaGVyLmlzU2luZ2xlTWF0Y2gocXVlcnlJdGVtKTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG5ldyBzZWFyY2hlcih0b2tlbiwgb3B0aW9ucykpO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9KVxufVxuXG4vLyBUaGVzZSBleHRlbmRlZCBtYXRjaGVycyBjYW4gcmV0dXJuIGFuIGFycmF5IG9mIG1hdGNoZXMsIGFzIG9wcG9zZWRcbi8vIHRvIGEgc2luZ2wgbWF0Y2hcbmNvbnN0IE11bHRpTWF0Y2hTZXQgPSBuZXcgU2V0KFtGdXp6eU1hdGNoLnR5cGUsIEluY2x1ZGVNYXRjaC50eXBlXSk7XG5cbi8qKlxuICogQ29tbWFuZC1saWtlIHNlYXJjaGluZ1xuICogPT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIEdpdmVuIG11bHRpcGxlIHNlYXJjaCB0ZXJtcyBkZWxpbWl0ZWQgYnkgc3BhY2VzLmUuZy4gYF5qc2NyaXB0IC5weXRob24kIHJ1YnkgIWphdmFgLFxuICogc2VhcmNoIGluIGEgZ2l2ZW4gdGV4dC5cbiAqXG4gKiBTZWFyY2ggc3ludGF4OlxuICpcbiAqIHwgVG9rZW4gICAgICAgfCBNYXRjaCB0eXBlICAgICAgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgYGpzY3JpcHRgICAgfCBmdXp6eS1tYXRjaCAgICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgZnV6enkgbWF0Y2ggYGpzY3JpcHRgICAgICAgIHxcbiAqIHwgYD1zY2hlbWVgICAgfCBleGFjdC1tYXRjaCAgICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgYXJlIGBzY2hlbWVgICAgICAgICAgICAgICAgIHxcbiAqIHwgYCdweXRob25gICAgfCBpbmNsdWRlLW1hdGNoICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgaW5jbHVkZSBgcHl0aG9uYCAgICAgICAgICAgIHxcbiAqIHwgYCFydWJ5YCAgICAgfCBpbnZlcnNlLWV4YWN0LW1hdGNoICAgICAgICB8IEl0ZW1zIHRoYXQgZG8gbm90IGluY2x1ZGUgYHJ1YnlgICAgICAgIHxcbiAqIHwgYF5qYXZhYCAgICAgfCBwcmVmaXgtZXhhY3QtbWF0Y2ggICAgICAgICB8IEl0ZW1zIHRoYXQgc3RhcnQgd2l0aCBgamF2YWAgICAgICAgICAgIHxcbiAqIHwgYCFeZWFybGFuZ2AgfCBpbnZlcnNlLXByZWZpeC1leGFjdC1tYXRjaCB8IEl0ZW1zIHRoYXQgZG8gbm90IHN0YXJ0IHdpdGggYGVhcmxhbmdgIHxcbiAqIHwgYC5qcyRgICAgICAgfCBzdWZmaXgtZXhhY3QtbWF0Y2ggICAgICAgICB8IEl0ZW1zIHRoYXQgZW5kIHdpdGggYC5qc2AgICAgICAgICAgICAgIHxcbiAqIHwgYCEuZ28kYCAgICAgfCBpbnZlcnNlLXN1ZmZpeC1leGFjdC1tYXRjaCB8IEl0ZW1zIHRoYXQgZG8gbm90IGVuZCB3aXRoIGAuZ29gICAgICAgIHxcbiAqXG4gKiBBIHNpbmdsZSBwaXBlIGNoYXJhY3RlciBhY3RzIGFzIGFuIE9SIG9wZXJhdG9yLiBGb3IgZXhhbXBsZSwgdGhlIGZvbGxvd2luZ1xuICogcXVlcnkgbWF0Y2hlcyBlbnRyaWVzIHRoYXQgc3RhcnQgd2l0aCBgY29yZWAgYW5kIGVuZCB3aXRoIGVpdGhlcmBnb2AsIGByYmAsXG4gKiBvcmBweWAuXG4gKlxuICogYGBgXG4gKiBeY29yZSBnbyQgfCByYiQgfCBweSRcbiAqIGBgYFxuICovXG5jbGFzcyBFeHRlbmRlZFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdHRlcm4sXG4gICAge1xuICAgICAgaXNDYXNlU2Vuc2l0aXZlID0gQ29uZmlnLmlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uLFxuICAgICAgZmluZEFsbE1hdGNoZXMgPSBDb25maWcuZmluZEFsbE1hdGNoZXMsXG4gICAgICBsb2NhdGlvbiA9IENvbmZpZy5sb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCA9IENvbmZpZy50aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZVxuICAgIH0gPSB7fVxuICApIHtcbiAgICB0aGlzLnF1ZXJ5ID0gbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBpc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgaWdub3JlTG9jYXRpb24sXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlXG4gICAgfTtcblxuICAgIHRoaXMucGF0dGVybiA9IGlzQ2FzZVNlbnNpdGl2ZSA/IHBhdHRlcm4gOiBwYXR0ZXJuLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5xdWVyeSA9IHBhcnNlUXVlcnkodGhpcy5wYXR0ZXJuLCB0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGNvbmRpdGlvbihfLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMudXNlRXh0ZW5kZWRTZWFyY2hcbiAgfVxuXG4gIHNlYXJjaEluKHRleHQpIHtcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMucXVlcnk7XG5cbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc01hdGNoOiBmYWxzZSxcbiAgICAgICAgc2NvcmU6IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IGluY2x1ZGVNYXRjaGVzLCBpc0Nhc2VTZW5zaXRpdmUgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIHRleHQgPSBpc0Nhc2VTZW5zaXRpdmUgPyB0ZXh0IDogdGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgbGV0IG51bU1hdGNoZXMgPSAwO1xuICAgIGxldCBhbGxJbmRpY2VzID0gW107XG4gICAgbGV0IHRvdGFsU2NvcmUgPSAwO1xuXG4gICAgLy8gT1JzXG4gICAgZm9yIChsZXQgaSA9IDAsIHFMZW4gPSBxdWVyeS5sZW5ndGg7IGkgPCBxTGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNlYXJjaGVycyA9IHF1ZXJ5W2ldO1xuXG4gICAgICAvLyBSZXNldCBpbmRpY2VzXG4gICAgICBhbGxJbmRpY2VzLmxlbmd0aCA9IDA7XG4gICAgICBudW1NYXRjaGVzID0gMDtcblxuICAgICAgLy8gQU5Ec1xuICAgICAgZm9yIChsZXQgaiA9IDAsIHBMZW4gPSBzZWFyY2hlcnMubGVuZ3RoOyBqIDwgcExlbjsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaGVyID0gc2VhcmNoZXJzW2pdO1xuICAgICAgICBjb25zdCB7IGlzTWF0Y2gsIGluZGljZXMsIHNjb3JlIH0gPSBzZWFyY2hlci5zZWFyY2godGV4dCk7XG5cbiAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICBudW1NYXRjaGVzICs9IDE7XG4gICAgICAgICAgdG90YWxTY29yZSArPSBzY29yZTtcbiAgICAgICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBzZWFyY2hlci5jb25zdHJ1Y3Rvci50eXBlO1xuICAgICAgICAgICAgaWYgKE11bHRpTWF0Y2hTZXQuaGFzKHR5cGUpKSB7XG4gICAgICAgICAgICAgIGFsbEluZGljZXMgPSBbLi4uYWxsSW5kaWNlcywgLi4uaW5kaWNlc107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhbGxJbmRpY2VzLnB1c2goaW5kaWNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvdGFsU2NvcmUgPSAwO1xuICAgICAgICAgIG51bU1hdGNoZXMgPSAwO1xuICAgICAgICAgIGFsbEluZGljZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE9SIGNvbmRpdGlvbiwgc28gaWYgVFJVRSwgcmV0dXJuXG4gICAgICBpZiAobnVtTWF0Y2hlcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICAgIGlzTWF0Y2g6IHRydWUsXG4gICAgICAgICAgc2NvcmU6IHRvdGFsU2NvcmUgLyBudW1NYXRjaGVzXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgcmVzdWx0LmluZGljZXMgPSBhbGxJbmRpY2VzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdGhpbmcgd2FzIG1hdGNoZWRcbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaDogZmFsc2UsXG4gICAgICBzY29yZTogMVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCByZWdpc3RlcmVkU2VhcmNoZXJzID0gW107XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyKC4uLmFyZ3MpIHtcbiAgcmVnaXN0ZXJlZFNlYXJjaGVycy5wdXNoKC4uLmFyZ3MpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hlcihwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZWdpc3RlcmVkU2VhcmNoZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbGV0IHNlYXJjaGVyQ2xhc3MgPSByZWdpc3RlcmVkU2VhcmNoZXJzW2ldO1xuICAgIGlmIChzZWFyY2hlckNsYXNzLmNvbmRpdGlvbihwYXR0ZXJuLCBvcHRpb25zKSkge1xuICAgICAgcmV0dXJuIG5ldyBzZWFyY2hlckNsYXNzKHBhdHRlcm4sIG9wdGlvbnMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBCaXRhcFNlYXJjaChwYXR0ZXJuLCBvcHRpb25zKVxufVxuXG5jb25zdCBMb2dpY2FsT3BlcmF0b3IgPSB7XG4gIEFORDogJyRhbmQnLFxuICBPUjogJyRvcidcbn07XG5cbmNvbnN0IEtleVR5cGUgPSB7XG4gIFBBVEg6ICckcGF0aCcsXG4gIFBBVFRFUk46ICckdmFsJ1xufTtcblxuY29uc3QgaXNFeHByZXNzaW9uID0gKHF1ZXJ5KSA9PlxuICAhIShxdWVyeVtMb2dpY2FsT3BlcmF0b3IuQU5EXSB8fCBxdWVyeVtMb2dpY2FsT3BlcmF0b3IuT1JdKTtcblxuY29uc3QgaXNQYXRoID0gKHF1ZXJ5KSA9PiAhIXF1ZXJ5W0tleVR5cGUuUEFUSF07XG5cbmNvbnN0IGlzTGVhZiA9IChxdWVyeSkgPT5cbiAgIWlzQXJyYXkocXVlcnkpICYmIGlzT2JqZWN0KHF1ZXJ5KSAmJiAhaXNFeHByZXNzaW9uKHF1ZXJ5KTtcblxuY29uc3QgY29udmVydFRvRXhwbGljaXQgPSAocXVlcnkpID0+ICh7XG4gIFtMb2dpY2FsT3BlcmF0b3IuQU5EXTogT2JqZWN0LmtleXMocXVlcnkpLm1hcCgoa2V5KSA9PiAoe1xuICAgIFtrZXldOiBxdWVyeVtrZXldXG4gIH0pKVxufSk7XG5cbi8vIFdoZW4gYGF1dG9gIGlzIGB0cnVlYCwgdGhlIHBhcnNlIGZ1bmN0aW9uIHdpbGwgaW5mZXIgYW5kIGluaXRpYWxpemUgYW5kIGFkZFxuLy8gdGhlIGFwcHJvcHJpYXRlIGBTZWFyY2hlcmAgaW5zdGFuY2VcbmZ1bmN0aW9uIHBhcnNlKHF1ZXJ5LCBvcHRpb25zLCB7IGF1dG8gPSB0cnVlIH0gPSB7fSkge1xuICBjb25zdCBuZXh0ID0gKHF1ZXJ5KSA9PiB7XG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhxdWVyeSk7XG5cbiAgICBjb25zdCBpc1F1ZXJ5UGF0aCA9IGlzUGF0aChxdWVyeSk7XG5cbiAgICBpZiAoIWlzUXVlcnlQYXRoICYmIGtleXMubGVuZ3RoID4gMSAmJiAhaXNFeHByZXNzaW9uKHF1ZXJ5KSkge1xuICAgICAgcmV0dXJuIG5leHQoY29udmVydFRvRXhwbGljaXQocXVlcnkpKVxuICAgIH1cblxuICAgIGlmIChpc0xlYWYocXVlcnkpKSB7XG4gICAgICBjb25zdCBrZXkgPSBpc1F1ZXJ5UGF0aCA/IHF1ZXJ5W0tleVR5cGUuUEFUSF0gOiBrZXlzWzBdO1xuXG4gICAgICBjb25zdCBwYXR0ZXJuID0gaXNRdWVyeVBhdGggPyBxdWVyeVtLZXlUeXBlLlBBVFRFUk5dIDogcXVlcnlba2V5XTtcblxuICAgICAgaWYgKCFpc1N0cmluZyhwYXR0ZXJuKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTE9HSUNBTF9TRUFSQ0hfSU5WQUxJRF9RVUVSWV9GT1JfS0VZKGtleSkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAga2V5SWQ6IGNyZWF0ZUtleUlkKGtleSksXG4gICAgICAgIHBhdHRlcm5cbiAgICAgIH07XG5cbiAgICAgIGlmIChhdXRvKSB7XG4gICAgICAgIG9iai5zZWFyY2hlciA9IGNyZWF0ZVNlYXJjaGVyKHBhdHRlcm4sIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqXG4gICAgfVxuXG4gICAgbGV0IG5vZGUgPSB7XG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgICBvcGVyYXRvcjoga2V5c1swXVxuICAgIH07XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeVtrZXldO1xuXG4gICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIG5vZGUuY2hpbGRyZW4ucHVzaChuZXh0KGl0ZW0pKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZVxuICB9O1xuXG4gIGlmICghaXNFeHByZXNzaW9uKHF1ZXJ5KSkge1xuICAgIHF1ZXJ5ID0gY29udmVydFRvRXhwbGljaXQocXVlcnkpO1xuICB9XG5cbiAgcmV0dXJuIG5leHQocXVlcnkpXG59XG5cbi8vIFByYWN0aWNhbCBzY29yaW5nIGZ1bmN0aW9uXG5mdW5jdGlvbiBjb21wdXRlU2NvcmUoXG4gIHJlc3VsdHMsXG4gIHsgaWdub3JlRmllbGROb3JtID0gQ29uZmlnLmlnbm9yZUZpZWxkTm9ybSB9XG4pIHtcbiAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQpID0+IHtcbiAgICBsZXQgdG90YWxTY29yZSA9IDE7XG5cbiAgICByZXN1bHQubWF0Y2hlcy5mb3JFYWNoKCh7IGtleSwgbm9ybSwgc2NvcmUgfSkgPT4ge1xuICAgICAgY29uc3Qgd2VpZ2h0ID0ga2V5ID8ga2V5LndlaWdodCA6IG51bGw7XG5cbiAgICAgIHRvdGFsU2NvcmUgKj0gTWF0aC5wb3coXG4gICAgICAgIHNjb3JlID09PSAwICYmIHdlaWdodCA/IE51bWJlci5FUFNJTE9OIDogc2NvcmUsXG4gICAgICAgICh3ZWlnaHQgfHwgMSkgKiAoaWdub3JlRmllbGROb3JtID8gMSA6IG5vcm0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmVzdWx0LnNjb3JlID0gdG90YWxTY29yZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdGNoZXMocmVzdWx0LCBkYXRhKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSByZXN1bHQubWF0Y2hlcztcbiAgZGF0YS5tYXRjaGVzID0gW107XG5cbiAgaWYgKCFpc0RlZmluZWQobWF0Y2hlcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG1hdGNoZXMuZm9yRWFjaCgobWF0Y2gpID0+IHtcbiAgICBpZiAoIWlzRGVmaW5lZChtYXRjaC5pbmRpY2VzKSB8fCAhbWF0Y2guaW5kaWNlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgaW5kaWNlcywgdmFsdWUgfSA9IG1hdGNoO1xuXG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIGluZGljZXMsXG4gICAgICB2YWx1ZVxuICAgIH07XG5cbiAgICBpZiAobWF0Y2gua2V5KSB7XG4gICAgICBvYmoua2V5ID0gbWF0Y2gua2V5LnNyYztcbiAgICB9XG5cbiAgICBpZiAobWF0Y2guaWR4ID4gLTEpIHtcbiAgICAgIG9iai5yZWZJbmRleCA9IG1hdGNoLmlkeDtcbiAgICB9XG5cbiAgICBkYXRhLm1hdGNoZXMucHVzaChvYmopO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU2NvcmUocmVzdWx0LCBkYXRhKSB7XG4gIGRhdGEuc2NvcmUgPSByZXN1bHQuc2NvcmU7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChcbiAgcmVzdWx0cyxcbiAgZG9jcyxcbiAge1xuICAgIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICAgIGluY2x1ZGVTY29yZSA9IENvbmZpZy5pbmNsdWRlU2NvcmVcbiAgfSA9IHt9XG4pIHtcbiAgY29uc3QgdHJhbnNmb3JtZXJzID0gW107XG5cbiAgaWYgKGluY2x1ZGVNYXRjaGVzKSB0cmFuc2Zvcm1lcnMucHVzaCh0cmFuc2Zvcm1NYXRjaGVzKTtcbiAgaWYgKGluY2x1ZGVTY29yZSkgdHJhbnNmb3JtZXJzLnB1c2godHJhbnNmb3JtU2NvcmUpO1xuXG4gIHJldHVybiByZXN1bHRzLm1hcCgocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgeyBpZHggfSA9IHJlc3VsdDtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBpdGVtOiBkb2NzW2lkeF0sXG4gICAgICByZWZJbmRleDogaWR4XG4gICAgfTtcblxuICAgIGlmICh0cmFuc2Zvcm1lcnMubGVuZ3RoKSB7XG4gICAgICB0cmFuc2Zvcm1lcnMuZm9yRWFjaCgodHJhbnNmb3JtZXIpID0+IHtcbiAgICAgICAgdHJhbnNmb3JtZXIocmVzdWx0LCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG4gIH0pXG59XG5cbmNsYXNzIEZ1c2Uge1xuICBjb25zdHJ1Y3Rvcihkb2NzLCBvcHRpb25zID0ge30sIGluZGV4KSB7XG4gICAgdGhpcy5vcHRpb25zID0geyAuLi5Db25maWcsIC4uLm9wdGlvbnMgfTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9ucy51c2VFeHRlbmRlZFNlYXJjaCAmJlxuICAgICAgIXRydWVcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihFWFRFTkRFRF9TRUFSQ0hfVU5BVkFJTEFCTEUpXG4gICAgfVxuXG4gICAgdGhpcy5fa2V5U3RvcmUgPSBuZXcgS2V5U3RvcmUodGhpcy5vcHRpb25zLmtleXMpO1xuXG4gICAgdGhpcy5zZXRDb2xsZWN0aW9uKGRvY3MsIGluZGV4KTtcbiAgfVxuXG4gIHNldENvbGxlY3Rpb24oZG9jcywgaW5kZXgpIHtcbiAgICB0aGlzLl9kb2NzID0gZG9jcztcblxuICAgIGlmIChpbmRleCAmJiAhKGluZGV4IGluc3RhbmNlb2YgRnVzZUluZGV4KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKElOQ09SUkVDVF9JTkRFWF9UWVBFKVxuICAgIH1cblxuICAgIHRoaXMuX215SW5kZXggPVxuICAgICAgaW5kZXggfHxcbiAgICAgIGNyZWF0ZUluZGV4KHRoaXMub3B0aW9ucy5rZXlzLCB0aGlzLl9kb2NzLCB7XG4gICAgICAgIGdldEZuOiB0aGlzLm9wdGlvbnMuZ2V0Rm4sXG4gICAgICAgIGZpZWxkTm9ybVdlaWdodDogdGhpcy5vcHRpb25zLmZpZWxkTm9ybVdlaWdodFxuICAgICAgfSk7XG4gIH1cblxuICBhZGQoZG9jKSB7XG4gICAgaWYgKCFpc0RlZmluZWQoZG9jKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZG9jcy5wdXNoKGRvYyk7XG4gICAgdGhpcy5fbXlJbmRleC5hZGQoZG9jKTtcbiAgfVxuXG4gIHJlbW92ZShwcmVkaWNhdGUgPSAoLyogZG9jLCBpZHggKi8pID0+IGZhbHNlKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuX2RvY3MubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGRvYyA9IHRoaXMuX2RvY3NbaV07XG4gICAgICBpZiAocHJlZGljYXRlKGRvYywgaSkpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBdChpKTtcbiAgICAgICAgaSAtPSAxO1xuICAgICAgICBsZW4gLT0gMTtcblxuICAgICAgICByZXN1bHRzLnB1c2goZG9jKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgcmVtb3ZlQXQoaWR4KSB7XG4gICAgdGhpcy5fZG9jcy5zcGxpY2UoaWR4LCAxKTtcbiAgICB0aGlzLl9teUluZGV4LnJlbW92ZUF0KGlkeCk7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbXlJbmRleFxuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5LCB7IGxpbWl0ID0gLTEgfSA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBpbmNsdWRlU2NvcmUsXG4gICAgICBzaG91bGRTb3J0LFxuICAgICAgc29ydEZuLFxuICAgICAgaWdub3JlRmllbGROb3JtXG4gICAgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGxldCByZXN1bHRzID0gaXNTdHJpbmcocXVlcnkpXG4gICAgICA/IGlzU3RyaW5nKHRoaXMuX2RvY3NbMF0pXG4gICAgICAgID8gdGhpcy5fc2VhcmNoU3RyaW5nTGlzdChxdWVyeSlcbiAgICAgICAgOiB0aGlzLl9zZWFyY2hPYmplY3RMaXN0KHF1ZXJ5KVxuICAgICAgOiB0aGlzLl9zZWFyY2hMb2dpY2FsKHF1ZXJ5KTtcblxuICAgIGNvbXB1dGVTY29yZShyZXN1bHRzLCB7IGlnbm9yZUZpZWxkTm9ybSB9KTtcblxuICAgIGlmIChzaG91bGRTb3J0KSB7XG4gICAgICByZXN1bHRzLnNvcnQoc29ydEZuKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOdW1iZXIobGltaXQpICYmIGxpbWl0ID4gLTEpIHtcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKDAsIGxpbWl0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0KHJlc3VsdHMsIHRoaXMuX2RvY3MsIHtcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgaW5jbHVkZVNjb3JlXG4gICAgfSlcbiAgfVxuXG4gIF9zZWFyY2hTdHJpbmdMaXN0KHF1ZXJ5KSB7XG4gICAgY29uc3Qgc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihxdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICBjb25zdCB7IHJlY29yZHMgfSA9IHRoaXMuX215SW5kZXg7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IHN0cmluZyBpbiB0aGUgaW5kZXhcbiAgICByZWNvcmRzLmZvckVhY2goKHsgdjogdGV4dCwgaTogaWR4LCBuOiBub3JtIH0pID0+IHtcbiAgICAgIGlmICghaXNEZWZpbmVkKHRleHQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlLCBpbmRpY2VzIH0gPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcblxuICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICBpdGVtOiB0ZXh0LFxuICAgICAgICAgIGlkeCxcbiAgICAgICAgICBtYXRjaGVzOiBbeyBzY29yZSwgdmFsdWU6IHRleHQsIG5vcm0sIGluZGljZXMgfV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgX3NlYXJjaExvZ2ljYWwocXVlcnkpIHtcblxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBwYXJzZShxdWVyeSwgdGhpcy5vcHRpb25zKTtcblxuICAgIGNvbnN0IGV2YWx1YXRlID0gKG5vZGUsIGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgaWYgKCFub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IHsga2V5SWQsIHNlYXJjaGVyIH0gPSBub2RlO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLl9maW5kTWF0Y2hlcyh7XG4gICAgICAgICAga2V5OiB0aGlzLl9rZXlTdG9yZS5nZXQoa2V5SWQpLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLl9teUluZGV4LmdldFZhbHVlRm9ySXRlbUF0S2V5SWQoaXRlbSwga2V5SWQpLFxuICAgICAgICAgIHNlYXJjaGVyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWR4LFxuICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICBtYXRjaGVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBldmFsdWF0ZShjaGlsZCwgaXRlbSwgaWR4KTtcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICByZXMucHVzaCguLi5yZXN1bHQpO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUub3BlcmF0b3IgPT09IExvZ2ljYWxPcGVyYXRvci5BTkQpIHtcbiAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc1xuICAgIH07XG5cbiAgICBjb25zdCByZWNvcmRzID0gdGhpcy5fbXlJbmRleC5yZWNvcmRzO1xuICAgIGNvbnN0IHJlc3VsdE1hcCA9IHt9O1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgIHJlY29yZHMuZm9yRWFjaCgoeyAkOiBpdGVtLCBpOiBpZHggfSkgPT4ge1xuICAgICAgaWYgKGlzRGVmaW5lZChpdGVtKSkge1xuICAgICAgICBsZXQgZXhwUmVzdWx0cyA9IGV2YWx1YXRlKGV4cHJlc3Npb24sIGl0ZW0sIGlkeCk7XG5cbiAgICAgICAgaWYgKGV4cFJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gRGVkdXBlIHdoZW4gYWRkaW5nXG4gICAgICAgICAgaWYgKCFyZXN1bHRNYXBbaWR4XSkge1xuICAgICAgICAgICAgcmVzdWx0TWFwW2lkeF0gPSB7IGlkeCwgaXRlbSwgbWF0Y2hlczogW10gfTtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHRNYXBbaWR4XSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGV4cFJlc3VsdHMuZm9yRWFjaCgoeyBtYXRjaGVzIH0pID0+IHtcbiAgICAgICAgICAgIHJlc3VsdE1hcFtpZHhdLm1hdGNoZXMucHVzaCguLi5tYXRjaGVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIF9zZWFyY2hPYmplY3RMaXN0KHF1ZXJ5KSB7XG4gICAgY29uc3Qgc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihxdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICBjb25zdCB7IGtleXMsIHJlY29yZHMgfSA9IHRoaXMuX215SW5kZXg7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgLy8gTGlzdCBpcyBBcnJheTxPYmplY3Q+XG4gICAgcmVjb3Jkcy5mb3JFYWNoKCh7ICQ6IGl0ZW0sIGk6IGlkeCB9KSA9PiB7XG4gICAgICBpZiAoIWlzRGVmaW5lZChpdGVtKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGtleSAoaS5lLCBwYXRoKSwgYW5kIGZldGNoIHRoZSB2YWx1ZSBhdCB0aGF0IGtleVxuICAgICAga2V5cy5mb3JFYWNoKChrZXksIGtleUluZGV4KSA9PiB7XG4gICAgICAgIG1hdGNoZXMucHVzaChcbiAgICAgICAgICAuLi50aGlzLl9maW5kTWF0Y2hlcyh7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB2YWx1ZTogaXRlbVtrZXlJbmRleF0sXG4gICAgICAgICAgICBzZWFyY2hlclxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgaWR4LFxuICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgbWF0Y2hlc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cbiAgX2ZpbmRNYXRjaGVzKHsga2V5LCB2YWx1ZSwgc2VhcmNoZXIgfSkge1xuICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoeyB2OiB0ZXh0LCBpOiBpZHgsIG46IG5vcm0gfSkgPT4ge1xuICAgICAgICBpZiAoIWlzRGVmaW5lZCh0ZXh0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSwgaW5kaWNlcyB9ID0gc2VhcmNoZXIuc2VhcmNoSW4odGV4dCk7XG5cbiAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICBtYXRjaGVzLnB1c2goe1xuICAgICAgICAgICAgc2NvcmUsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdGV4dCxcbiAgICAgICAgICAgIGlkeCxcbiAgICAgICAgICAgIG5vcm0sXG4gICAgICAgICAgICBpbmRpY2VzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IHY6IHRleHQsIG46IG5vcm0gfSA9IHZhbHVlO1xuXG4gICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlLCBpbmRpY2VzIH0gPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcblxuICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgbWF0Y2hlcy5wdXNoKHsgc2NvcmUsIGtleSwgdmFsdWU6IHRleHQsIG5vcm0sIGluZGljZXMgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNcbiAgfVxufVxuXG5GdXNlLnZlcnNpb24gPSAnNy4wLjAnO1xuRnVzZS5jcmVhdGVJbmRleCA9IGNyZWF0ZUluZGV4O1xuRnVzZS5wYXJzZUluZGV4ID0gcGFyc2VJbmRleDtcbkZ1c2UuY29uZmlnID0gQ29uZmlnO1xuXG57XG4gIEZ1c2UucGFyc2VRdWVyeSA9IHBhcnNlO1xufVxuXG57XG4gIHJlZ2lzdGVyKEV4dGVuZGVkU2VhcmNoKTtcbn1cblxuZXhwb3J0IHsgRnVzZSBhcyBkZWZhdWx0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHN1bW1hcml6ZSB9IGZyb20gJy4uL2FpL3N1bW1hcml6ZXIuanMnO1xuaW1wb3J0IHsgZ2V0SGlzdG9yeVdpdGhUb3BOU3RhdHMgfSBmcm9tICcuL2hpc3RvcnkuanMnO1xuaW1wb3J0IHsgZW5hYmxlUmVzaXppbmcsIGNyZWF0ZU9yR2V0V2lkZ2V0LCBhZGp1c3RXaWRnZXRTaXplIH0gZnJvbSAnLi93aWRnZXRzLmpzJztcbmltcG9ydCB7IGV4dHJhY3REb21haW4sIG1hcmtkb3duVG9IdG1sLCBjbGVhbklucHV0IH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5sZXQgc3RhcnREYXRlLCBlbmREYXRlLCB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcztcblxuLy8gR2xvYmFsIHZhcmlhYmxlcyB0byBzdG9yZSBzZWxlY3RlZCBmaWx0ZXJzXG5sZXQgc2VsZWN0ZWRGaWx0ZXJzID0gW107XG5sZXQgZXhjbHVkZUZpbHRlcnMgPSBbXTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcbiAgICBhZGREYXRlUmFuZ2VCdXR0b25zKCk7XG4gICAgYWRkUmVmcmVzaEJ1dHRvbigpO1xuICAgIHNldERhdGVSYW5nZSgnMjRoJyk7XG4gICAgLy8gSW5pdGlhbGl6ZSBjYXRlZ29yeSBhbmQgZXhjbHVkZSBmaWx0ZXJzXG4gICAgYXdhaXQgaW5pdGlhbGl6ZUZpbHRlcnMoKTtcbiAgICBhZGRPclVwZGF0ZVJlY2VudEhpc3RvcnlXaWRnZXQoKTtcbiAgICBhZGRPclVwZGF0ZUJhc2ljU3VtbWFyeVdpZGdldCgpO1xuICAgIGVuYWJsZVJlc2l6aW5nKCk7XG4gIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWZyZXNoLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbG9hZENvbnRlbnQoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrLW1vZGUtdG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyay1tb2RlJyk7XG4gICAgICAgIC8vIE9wdGlvbmFsOiBTYXZlIHVzZXIgcHJlZmVyZW5jZSB1c2luZyBsb2NhbFN0b3JhZ2VcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrLW1vZGUnKSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2RhcmsnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdsaWdodCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBcHBseSBzYXZlZCB0aGVtZSBvbiBsb2FkXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcbiAgICAgICAgaWYgKHNhdmVkVGhlbWUgPT09ICdkYXJrJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGFkZFJlZnJlc2hCdXR0b24oKSB7XG4gIGNvbnN0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVmcmVzaEJ1dHRvbi5pZCA9ICdyZWZyZXNoLWJ1dHRvbic7XG4gIHJlZnJlc2hCdXR0b24udGV4dENvbnRlbnQgPSAnUmVmcmVzaCc7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcmFuZ2UtY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZWZyZXNoQnV0dG9uKTtcbn1cblxuLyogSW5pdGlhbGl6ZSBEYXRlIFJhbmdlIElucHV0cyAqL1xuZnVuY3Rpb24gYWRkRGF0ZVJhbmdlQnV0dG9ucygpIHtcbiAgXG4gIGNvbnN0IGJ1dHRvbkRhdGEgPSBbXG4gICAgICB7IGxhYmVsOiAnTGFzdCAyNCBIb3VycycsIHJhbmdlOiAnMjRoJyB9LFxuICAgICAgeyBsYWJlbDogJ0xhc3QgV2VlaycsIHJhbmdlOiAnMXcnIH0sXG4gICAgICB7IGxhYmVsOiAnTGFzdCBNb250aCcsIHJhbmdlOiAnMW0nIH0sXG4gICAgICB7IGxhYmVsOiAnTGFzdCAzIE1vbnRocycsIHJhbmdlOiAnM20nIH0sXG4gICAgICB7IGxhYmVsOiAnTGFzdCA2IE1vbnRocycsIHJhbmdlOiAnNm0nIH0sXG4gICAgICAvLyBUT0RPOiBhZGQgbW9udGggd2lzZSBvcHRpb25zIGluIGRyb3AgZG93blxuICAgICAgeyBsYWJlbDogJ0phbnVhcnknLCByYW5nZTogJ2phbicgfSxcbiAgICAgIHsgbGFiZWw6ICdGZWJydWFyeScsIHJhbmdlOiAnZmViJyB9LFxuICAgICAgeyBsYWJlbDogJ01hcmNoJywgcmFuZ2U6ICdtYXInIH1cblxuICBdO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXJhbmdlLWNvbnRhaW5lcicpO1xuXG4gIGJ1dHRvbkRhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdkYXRlLXJhbmdlLWJ1dHRvbic7XG4gICAgICBidXR0b24udGV4dENvbnRlbnQgPSBkYXRhLmxhYmVsO1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1yYW5nZScsIGRhdGEucmFuZ2UpO1xuXG4gICAgICAvLyBIaWdobGlnaHQgdGhlIGRlZmF1bHQgc2VsZWN0ZWQgYnV0dG9uXG4gICAgICBpZiAoZGF0YS5yYW5nZSA9PT0gJzI0aCcpIHtcbiAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHNldERhdGVSYW5nZShkYXRhLnJhbmdlKTtcbiAgICAgICAgICBsb2FkQ29udGVudCgpO1xuXG4gICAgICAgICAgLy8gUmVtb3ZlICdzZWxlY3RlZCcgY2xhc3MgZnJvbSBhbGwgYnV0dG9uc1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlLXJhbmdlLWJ1dHRvbicpLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBBZGQgJ3NlbGVjdGVkJyBjbGFzcyB0byB0aGUgY2xpY2tlZCBidXR0b25cbiAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldERhdGVSYW5nZShyYW5nZSkge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbiAgc3dpdGNoIChyYW5nZSkge1xuICAgICAgY2FzZSAnMjRoJzpcbiAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheSk7XG4gICAgICAgICAgc3RhcnREYXRlLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpIC0gMSk7XG4gICAgICAgICAgZW5kRGF0ZSA9IHRvZGF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnMXcnOlxuICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICAgICAgICBzdGFydERhdGUuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgLSA3KTtcbiAgICAgICAgICBlbmREYXRlID0gdG9kYXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcxbSc6XG4gICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkpO1xuICAgICAgICAgIHN0YXJ0RGF0ZS5zZXRNb250aCh0b2RheS5nZXRNb250aCgpIC0gMSk7XG4gICAgICAgICAgZW5kRGF0ZSA9IHRvZGF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnM20nOlxuICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICAgICAgICBzdGFydERhdGUuc2V0TW9udGgodG9kYXkuZ2V0TW9udGgoKSAtIDMpO1xuICAgICAgICAgIGVuZERhdGUgPSB0b2RheTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzZtJzpcbiAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheSk7XG4gICAgICAgICAgc3RhcnREYXRlLnNldE1vbnRoKHRvZGF5LmdldE1vbnRoKCkgLSA2KTtcbiAgICAgICAgICBlbmREYXRlID0gdG9kYXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdqYW4nOlxuICAgICAgY2FzZSAnZmViJzpcbiAgICAgIGNhc2UgJ21hcic6XG4gICAgICAgICAgY29uc3QgbW9udGhNYXAgPSB7IGphbjogMCwgZmViOiAxLCBtYXI6IDIgfTtcbiAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCBtb250aE1hcFtyYW5nZV0sIDEpO1xuICAgICAgICAgIGVuZERhdGUgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCBtb250aE1hcFtyYW5nZV0gKyAxLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkpO1xuICAgICAgICAgIGVuZERhdGUgPSB0b2RheTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSBkaXNwbGF5IGRhdGVzXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5LXN0YXJ0LWRhdGUnKS50ZXh0Q29udGVudCA9IHN0YXJ0RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktZW5kLWRhdGUnKS50ZXh0Q29udGVudCA9IGVuZERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG59XG5cbi8qIEFkZCBPdmVyYWxsIFN1bW1hcnkgV2lkZ2V0ICovXG5hc3luYyBmdW5jdGlvbiBhZGRPclVwZGF0ZVJlY2VudEhpc3RvcnlXaWRnZXQoKSB7XG4gIGNvbnN0IG5ld1dpZGdldCA9IGNyZWF0ZU9yR2V0V2lkZ2V0KCdyZWNlbnQtaGlzdG9yeScsICdSZWNlbnQgSGlzdG9yeScpO1xuXG4gIC8vIGRlbGV0ZSBjaGlsZHJlbiBjb250YWluaW5nICpyZWNlbnQtaGlzdG9yeS1jb250ZW50cypcbiAgd2hpbGUgKG5ld1dpZGdldC5sYXN0Q2hpbGQgJiYgbmV3V2lkZ2V0Lmxhc3RDaGlsZC5pZCAmJiBuZXdXaWRnZXQubGFzdENoaWxkLmlkLmluY2x1ZGVzKCdyZWNlbnQtaGlzdG9yeS1jb250ZW50cycpKSB7XG4gICAgICBuZXdXaWRnZXQucmVtb3ZlQ2hpbGQobmV3V2lkZ2V0Lmxhc3RDaGlsZCk7XG4gIH1cblxuICBjcmVhdGVSZWNlbnRIaXN0b3J5RWxlbWVudCgpLnRoZW4oKHdpZGdldCkgPT4ge1xuICAgICAgbmV3V2lkZ2V0LmFwcGVuZENoaWxkKHdpZGdldCk7XG4gICAgICAvLyBhZGp1c3Qgc2l6ZSBvZiBuZXdXaWRnZXRcbiAgICAgIGNvbnNvbGUubG9nKCdhZGp1c3Rpbmcgc2l6ZSBvZiBuZXdXaWRnZXQnKTtcbiAgICAgIGFkanVzdFdpZGdldFNpemUobmV3V2lkZ2V0KTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZE9yVXBkYXRlQmFzaWNTdW1tYXJ5V2lkZ2V0KCkge1xuICBjb25zdCBuZXdXaWRnZXQgPSBjcmVhdGVPckdldFdpZGdldCgnYmFzaWMtc3VtbWFyeScsICdTdW1tYXJ5Jyk7XG5cbiAgLy8gZGVsZXRlIGNoaWxkcmVuIGNvbnRhaW5pbmcgKmNvbnRlbnRzKlxuICB3aGlsZSAobmV3V2lkZ2V0Lmxhc3RDaGlsZCAmJiBuZXdXaWRnZXQubGFzdENoaWxkLmlkICYmIG5ld1dpZGdldC5sYXN0Q2hpbGQuaWQuaW5jbHVkZXMoJ2NvbnRlbnRzJykpIHtcbiAgICAgIG5ld1dpZGdldC5yZW1vdmVDaGlsZChuZXdXaWRnZXQubGFzdENoaWxkKTtcbiAgfVxuXG4gIGF3YWl0IGNyZWF0ZUJhc2ljU3VtbWFyeUVsZW1lbnQobmV3V2lkZ2V0KTtcbn1cblxuLyogTG9hZCBDb250ZW50IEJhc2VkIG9uIERhdGUgUmFuZ2UgKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRDb250ZW50KCkge1xuICBjb25zb2xlLmxvZygnU2VsZWN0ZWQgRmlsdGVyczonLCBzZWxlY3RlZEZpbHRlcnMpO1xuICBjb25zb2xlLmxvZygnRXhjbHVkZSBGaWx0ZXJzOicsIGV4Y2x1ZGVGaWx0ZXJzKTtcbiAgYXdhaXQgYWRkT3JVcGRhdGVSZWNlbnRIaXN0b3J5V2lkZ2V0KCk7XG4gIGF3YWl0IGFkZE9yVXBkYXRlQmFzaWNTdW1tYXJ5V2lkZ2V0KCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlY2VudEhpc3RvcnlFbGVtZW50KCkge1xuICB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcyA9IGF3YWl0IGdldEhpc3RvcnlXaXRoVG9wTlN0YXRzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgMTAsIHNlbGVjdGVkRmlsdGVycywgZXhjbHVkZUZpbHRlcnMpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdoaXN0b3J5LWNvbnRhaW5lcic7XG4gIGNvbnRhaW5lci5pZCA9ICdyZWNlbnQtaGlzdG9yeS1jb250ZW50cyc7XG5cbiAgdG9wTkhvc3RuYW1lc1dpdGhUaXRsZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAvLyBDcmVhdGUgdGhlIG1haW4gYm94IGZvciBlYWNoIGhvc3RuYW1lXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm94LmNsYXNzTmFtZSA9ICdoaXN0b3J5LWJveCc7XG5cbiAgICAvLyBGaXJzdCBwYXJ0OiBIb3N0bmFtZSBhbmQgaGl0IGNvdW50IHdpdGggYW4gaWNvblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSAnaGlzdG9yeS1oZWFkZXInO1xuXG4gICAgY29uc3QgaG9zdG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIC8vIEFkZCBhbiBpY29uIGJlZm9yZSB0aGUgaG9zdG5hbWVcbiAgICBob3N0bmFtZS5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtZ2xvYmUtYW1lcmljYXNcIj48L2k+ICR7aXRlbS5ob3N0bmFtZX1gO1xuXG4gICAgY29uc3QgaGl0Q291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaGl0Q291bnQuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLWNoYXJ0LWxpbmVcIj48L2k+IEhpdCBDb3VudDogJHtpdGVtLmNvdW50fWA7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaG9zdG5hbWUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoaXRDb3VudCk7XG5cbiAgICAvLyBTZWNvbmQgcGFydDogVGl0bGVzIHdpdGggVVJMc1xuICAgIGNvbnN0IHRpdGxlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlc0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGl0bGVzLWNvbnRhaW5lcic7XG5cbiAgICBjb25zdCB0aXRsZXNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIC8vIEluaXRpYWwgZGlzcGxheSBjb3VudFxuICAgIGNvbnN0IGluaXRpYWxEaXNwbGF5Q291bnQgPSAxMDtcbiAgICBjb25zdCBhZGRpdGlvbmFsTG9hZENvdW50ID0gMjA7XG5cbiAgICAvLyBEZXRlcm1pbmUgaG93IG1hbnkgdGl0bGVzIHRvIHNob3cgaW5pdGlhbGx5XG4gICAgY29uc3QgZGlzcGxheWVkVGl0bGVzID0gaXRlbS50aXRsZXMuc2xpY2UoMCwgaW5pdGlhbERpc3BsYXlDb3VudCk7XG4gICAgZGlzcGxheWVkVGl0bGVzLmZvckVhY2godGl0bGVJdGVtID0+IHtcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBsaW5rLmhyZWYgPSB0aXRsZUl0ZW0udXJsO1xuICAgICAgbGluay50ZXh0Q29udGVudCA9IHRpdGxlSXRlbS50aXRsZTtcbiAgICAgIGxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgIHRpdGxlc0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgdGl0bGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlc0xpc3QpO1xuXG4gICAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgdGl0bGVzLCBhZGQgYSBcIm1vcmVcIiBidXR0b25cbiAgICBpZiAoaXRlbS50aXRsZXMubGVuZ3RoID4gaW5pdGlhbERpc3BsYXlDb3VudCkge1xuICAgICAgY29uc3QgbW9yZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgbW9yZUJ1dHRvbi5jbGFzc05hbWUgPSAnbW9yZS1idXR0b24nO1xuICAgICAgbW9yZUJ1dHRvbi50ZXh0Q29udGVudCA9IGBhbmQgJHtpdGVtLnRpdGxlcy5sZW5ndGggLSBpbml0aWFsRGlzcGxheUNvdW50fSBtb3JlLi4uYDtcbiAgICAgIG1vcmVCdXR0b24uZGF0YXNldC5ob3N0bmFtZSA9IGl0ZW0uaG9zdG5hbWU7IC8vIEZvciBpZGVudGlmeWluZyB3aGljaCBib3ggdG8gZXhwYW5kXG5cbiAgICAgIG1vcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvYWRNb3JlVGl0bGVzKGl0ZW0sIHRpdGxlc0xpc3QsIG1vcmVCdXR0b24sIGluaXRpYWxEaXNwbGF5Q291bnQsIGFkZGl0aW9uYWxMb2FkQ291bnQpO1xuICAgICAgfSk7XG5cbiAgICAgIHRpdGxlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb3JlQnV0dG9uKTtcbiAgICB9XG5cbiAgICAvLyBBc3NlbWJsZSB0aGUgYm94XG4gICAgYm94LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgYm94LmFwcGVuZENoaWxkKHRpdGxlc0NvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJveCk7XG4gIH0pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJhc2ljU3VtbWFyeUVsZW1lbnQobmV3V2lkZ2V0KSB7XG4gIGNvbnN0IHRvcE5Ib3N0bmFtZXNXaXRoVGl0bGVzID0gYXdhaXQgZ2V0SGlzdG9yeVdpdGhUb3BOU3RhdHMoc3RhcnREYXRlLCBlbmREYXRlLCAxMCwgc2VsZWN0ZWRGaWx0ZXJzLCBleGNsdWRlRmlsdGVycyk7XG4gIGNvbnN0IGhpc3RvcnlJdGVtcyA9IHRvcE5Ib3N0bmFtZXNXaXRoVGl0bGVzLm1hcChpdGVtID0+IGl0ZW0udGl0bGVzKS5mbGF0KCk7XG5cbiAgLy8gQXBwZW5kIGFsbCBoaXN0b3J5IGl0ZW1zIHRvIGEgc2luZ2xlIHN0cmluZ1xuICBjb25zdCBoaXN0b3J5SXRlbVRpdGxlcyA9IGhpc3RvcnlJdGVtcy5tYXAoaXRlbSA9PiBpdGVtLnRpdGxlKS5qb2luKCcsICcpO1xuXG4gIC8vIENyZWF0ZSBjaHVua3Mgb2YgNDAwMCBjaGFyYWN0ZXJzXG4gIGNvbnN0IGNodW5rcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGhpc3RvcnlJdGVtVGl0bGVzLmxlbmd0aDsgaSArPSAyMDAwKSB7XG4gICAgY2h1bmtzLnB1c2goaGlzdG9yeUl0ZW1UaXRsZXMuc2xpY2UoaSwgaSArIDIwMDApKTtcbiAgfVxuXG4gIC8vIFN1bW1hcml6ZSBlYWNoIGNodW5rIGFuZCBhcHBlbmQgdG8gdGhlIHJlc3VsdFxuICBmb3IgKGNvbnN0IGNodW5rIG9mIGNodW5rcykge1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBzdW1tYXJpemUoY2xlYW5JbnB1dChjaHVuaykpO1xuXG4gICAgbGV0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHRFbGVtZW50LmlkID0gJ2Jhc2ljLXN1bW1hcnktY29udGVudHMnO1xuXG4gICAgdGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gbWFya2Rvd25Ub0h0bWwocmVzdWx0KTtcbiAgICBuZXdXaWRnZXQuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRNb3JlVGl0bGVzKGl0ZW0sIHRpdGxlc0xpc3QsIG1vcmVCdXR0b24sIGluaXRpYWxDb3VudCwgbG9hZENvdW50KSB7XG4gIC8vIERldGVybWluZSB0aGUgY3VycmVudCBudW1iZXIgb2YgdGl0bGVzIGRpc3BsYXllZFxuICBjb25zdCBjdXJyZW50Q291bnQgPSB0aXRsZXNMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykubGVuZ3RoO1xuICBjb25zdCBuZXh0Q291bnQgPSBjdXJyZW50Q291bnQgKyBsb2FkQ291bnQ7XG4gIGNvbnN0IHRpdGxlc1RvQWRkID0gaXRlbS50aXRsZXMuc2xpY2UoY3VycmVudENvdW50LCBuZXh0Q291bnQpO1xuXG4gIHRpdGxlc1RvQWRkLmZvckVhY2godGl0bGVJdGVtID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rLmhyZWYgPSB0aXRsZUl0ZW0udXJsO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSB0aXRsZUl0ZW0udGl0bGU7XG4gICAgbGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB0aXRsZXNMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfSk7XG5cbiAgLy8gVXBkYXRlIHRoZSByZW1haW5pbmcgY291bnRcbiAgY29uc3QgcmVtYWluaW5nID0gaXRlbS50aXRsZXMubGVuZ3RoIC0gbmV4dENvdW50O1xuXG4gIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgbW9yZUJ1dHRvbi50ZXh0Q29udGVudCA9IGBhbmQgJHtyZW1haW5pbmd9IG1vcmUuLi5gO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlbW92ZSB0aGUgXCJtb3JlXCIgYnV0dG9uIGlmIG5vIG1vcmUgdGl0bGVzIGFyZSBsZWZ0XG4gICAgbW9yZUJ1dHRvbi5yZW1vdmUoKTtcbiAgfVxufVxuXG4vKiBJbml0aWFsaXplIEZpbHRlcnMgKFRhZyBGaWx0ZXJzIGFuZCBFeGNsdWRlIFRhZ3MpICovXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplRmlsdGVycygpIHtcbiAgICBhd2FpdCBpbml0aWFsaXplQ2F0ZWdvcnlGaWx0ZXJzKCk7XG4gICAgYXdhaXQgaW5pdGlhbGl6ZUV4Y2x1ZGVGaWx0ZXJzKCk7XG59XG5cbi8qIEluaXRpYWxpemUgVGFnIEZpbHRlcnMgKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVDYXRlZ29yeUZpbHRlcnMoKSB7XG4gICAgY29uc3QgZGVmYXVsdEZpbHRlcnMgPSBbJ0NvZGUnLCAnUHJvZHVjdGl2aXR5JywgJ0FJJywgJ0VudGVydGFpbm1lbnQnLCAnU29jaWFsJ107XG4gICAgY29uc3QgY3VzdG9tRmlsdGVycyA9IGF3YWl0IGdldEN1c3RvbUZpbHRlcnMoKTtcblxuICAgIGNvbnN0IGFsbEZpbHRlcnMgPSBbLi4uZGVmYXVsdEZpbHRlcnMsIC4uLmN1c3RvbUZpbHRlcnNdO1xuXG4gICAgYWxsRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgIGNyZWF0ZVRvZ2dsZUJ1dHRvbihmaWx0ZXIsIGZhbHNlLCAnY2F0ZWdvcnktZmlsdGVycycpO1xuICAgIH0pO1xuXG4gICAgLy8gTG9hZCBzZWxlY3RlZCBmaWx0ZXJzIGZyb20gc3RvcmFnZVxuICAgIHNlbGVjdGVkRmlsdGVycyA9IGF3YWl0IGdldFNlbGVjdGVkRmlsdGVycygpO1xuICAgIHVwZGF0ZUZpbHRlclN0YXRlcygnY2F0ZWdvcnktZmlsdGVycycpO1xufVxuXG4vKiBJbml0aWFsaXplIEV4Y2x1ZGUgRmlsdGVycyAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZUV4Y2x1ZGVGaWx0ZXJzKCkge1xuICAgIGNvbnN0IGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzID0gYXdhaXQgZ2V0Q3VzdG9tRXhjbHVkZUZpbHRlcnMoKTtcblxuICAgIGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgICAgY3JlYXRlVG9nZ2xlQnV0dG9uKGZpbHRlciwgZmFsc2UsICdleGNsdWRlLWZpbHRlcnMnKTtcbiAgICB9KTtcblxuICAgIC8vIExvYWQgc2VsZWN0ZWQgZXhjbHVkZSBmaWx0ZXJzIGZyb20gc3RvcmFnZVxuICAgIGV4Y2x1ZGVGaWx0ZXJzID0gYXdhaXQgZ2V0U2VsZWN0ZWRFeGNsdWRlRmlsdGVycygpO1xuICAgIHVwZGF0ZUZpbHRlclN0YXRlcygnZXhjbHVkZS1maWx0ZXJzJyk7XG59XG5cbi8qIEZ1bmN0aW9ucyBmb3IgQ2F0ZWdvcnkgRmlsdGVycyAqL1xuXG4vKiBGdW5jdGlvbiB0byBnZXQgY3VzdG9tIGZpbHRlcnMgZnJvbSBDaHJvbWUgc3RvcmFnZSAqL1xuZnVuY3Rpb24gZ2V0Q3VzdG9tRmlsdGVycygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnY3VzdG9tRmlsdGVycyddLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5jdXN0b21GaWx0ZXJzIHx8IFtdKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8qIEZ1bmN0aW9uIHRvIGdldCBzZWxlY3RlZCBmaWx0ZXJzIGZyb20gQ2hyb21lIHN0b3JhZ2UgKi9cbmZ1bmN0aW9uIGdldFNlbGVjdGVkRmlsdGVycygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnc2VsZWN0ZWRGaWx0ZXJzJ10sIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LnNlbGVjdGVkRmlsdGVycyB8fCBbXSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vKiBGdW5jdGlvbiB0byBzYXZlIHNlbGVjdGVkIGZpbHRlcnMgdG8gQ2hyb21lIHN0b3JhZ2UgKi9cbmZ1bmN0aW9uIHNhdmVTZWxlY3RlZEZpbHRlcnMoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2VsZWN0ZWRGaWx0ZXJzIH0sICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIGZpbHRlcnMgc2F2ZWQ6Jywgc2VsZWN0ZWRGaWx0ZXJzKTtcbiAgICB9KTtcbn1cblxuLyogRnVuY3Rpb24gdG8gc2F2ZSBjdXN0b20gZmlsdGVycyB0byBDaHJvbWUgc3RvcmFnZSAqL1xuZnVuY3Rpb24gc2F2ZUN1c3RvbUZpbHRlcnMoY3VzdG9tRmlsdGVycykge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGN1c3RvbUZpbHRlcnMgfSwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ3VzdG9tIGZpbHRlcnMgc2F2ZWQ6JywgY3VzdG9tRmlsdGVycyk7XG4gICAgfSk7XG59XG5cbi8qIEZ1bmN0aW9ucyBmb3IgRXhjbHVkZSBGaWx0ZXJzICovXG5cbi8qIEZ1bmN0aW9uIHRvIGdldCBjdXN0b20gZXhjbHVkZSBmaWx0ZXJzIGZyb20gQ2hyb21lIHN0b3JhZ2UgKi9cbmZ1bmN0aW9uIGdldEN1c3RvbUV4Y2x1ZGVGaWx0ZXJzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydjdXN0b21FeGNsdWRlRmlsdGVycyddLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5jdXN0b21FeGNsdWRlRmlsdGVycyB8fCBbXSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vKiBGdW5jdGlvbiB0byBnZXQgc2VsZWN0ZWQgZXhjbHVkZSBmaWx0ZXJzIGZyb20gQ2hyb21lIHN0b3JhZ2UgKi9cbmZ1bmN0aW9uIGdldFNlbGVjdGVkRXhjbHVkZUZpbHRlcnMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ3NlbGVjdGVkRXhjbHVkZUZpbHRlcnMnXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuc2VsZWN0ZWRFeGNsdWRlRmlsdGVycyB8fCBbXSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vKiBGdW5jdGlvbiB0byBzYXZlIHNlbGVjdGVkIGV4Y2x1ZGUgZmlsdGVycyB0byBDaHJvbWUgc3RvcmFnZSAqL1xuZnVuY3Rpb24gc2F2ZVNlbGVjdGVkRXhjbHVkZUZpbHRlcnMoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2VsZWN0ZWRFeGNsdWRlRmlsdGVyczogZXhjbHVkZUZpbHRlcnMgfSwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQgZXhjbHVkZSBmaWx0ZXJzIHNhdmVkOicsIGV4Y2x1ZGVGaWx0ZXJzKTtcbiAgICB9KTtcbn1cblxuLyogRnVuY3Rpb24gdG8gc2F2ZSBjdXN0b20gZXhjbHVkZSBmaWx0ZXJzIHRvIENocm9tZSBzdG9yYWdlICovXG5mdW5jdGlvbiBzYXZlQ3VzdG9tRXhjbHVkZUZpbHRlcnMoY3VzdG9tRXhjbHVkZUZpbHRlcnMpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBjdXN0b21FeGNsdWRlRmlsdGVycyB9LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDdXN0b20gZXhjbHVkZSBmaWx0ZXJzIHNhdmVkOicsIGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzKTtcbiAgICB9KTtcbn1cblxuLyogRnVuY3Rpb24gdG8gY3JlYXRlIGEgdG9nZ2xlIGJ1dHRvbiAqL1xuZnVuY3Rpb24gY3JlYXRlVG9nZ2xlQnV0dG9uKGxhYmVsLCBpc0RlZmF1bHQgPSBmYWxzZSwgZmlsdGVyVHlwZSA9ICdjYXRlZ29yeS1maWx0ZXJzJykge1xuICAgIGNvbnN0IGNvbnRhaW5lcklkID0gZmlsdGVyVHlwZSA9PT0gJ2V4Y2x1ZGUtZmlsdGVycycgPyAnZXhjbHVkZS1maWx0ZXJzJyA6ICdjYXRlZ29yeS1maWx0ZXJzJztcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCk7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gJ2NhdGVnb3J5LXRvZ2dsZS1idXR0b24nO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIGJ1dHRvbi5kYXRhc2V0LmxhYmVsID0gbGFiZWw7XG4gICAgYnV0dG9uLmRhdGFzZXQuZGVmYXVsdCA9IGlzRGVmYXVsdDtcblxuICAgIC8vIEFkZCAnY3VzdG9tJyBjbGFzcyBpZiBpdCdzIG5vdCBhIGRlZmF1bHQgZmlsdGVyXG4gICAgaWYgKCFpc0RlZmF1bHQpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbScpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgcmVtb3ZlIChYKSBidXR0b25cbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJlbW92ZUJ0bi5jbGFzc05hbWUgPSAncmVtb3ZlLWJ0bic7XG4gICAgICAgIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9ICfinJUnO1xuICAgICAgICByZW1vdmVCdG4udGl0bGUgPSAnUmVtb3ZlIGZpbHRlcic7XG5cbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHJlbW92aW5nIHRoZSBmaWx0ZXJcbiAgICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBhd2FpdCByZW1vdmVGaWx0ZXIobGFiZWwsIGZpbHRlclR5cGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgaW5pdGlhbCBzdGF0ZSBiYXNlZCBvbiBzZWxlY3RlZCBmaWx0ZXJzXG4gICAgaWYgKGZpbHRlclR5cGUgPT09ICdleGNsdWRlLWZpbHRlcnMnKSB7XG4gICAgICAgIGlmIChleGNsdWRlRmlsdGVycy5pbmNsdWRlcyhsYWJlbCkpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzZWxlY3RlZEZpbHRlcnMuaW5jbHVkZXMobGFiZWwpKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgdG9nZ2xpbmcgYWN0aXZlIHN0YXRlXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoZmlsdGVyVHlwZSA9PT0gJ2V4Y2x1ZGUtZmlsdGVycycpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZXhjbHVkZUZpbHRlcnMuaW5kZXhPZihsYWJlbCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVGaWx0ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlRmlsdGVycy5wdXNoKGxhYmVsKTtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzYXZlU2VsZWN0ZWRFeGNsdWRlRmlsdGVycygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZEZpbHRlcnMuaW5kZXhPZihsYWJlbCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsdGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWx0ZXJzLnB1c2gobGFiZWwpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNhdmVTZWxlY3RlZEZpbHRlcnMoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkQ29udGVudCgpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG59XG5cbi8qIEZ1bmN0aW9uIHRvIHJlbW92ZSBhIGN1c3RvbSBmaWx0ZXIgKi9cbmFzeW5jIGZ1bmN0aW9uIHJlbW92ZUZpbHRlcihsYWJlbCwgZmlsdGVyVHlwZSkge1xuICAgIGlmIChmaWx0ZXJUeXBlID09PSAnZXhjbHVkZS1maWx0ZXJzJykge1xuICAgICAgICAvLyBSZW1vdmUgZnJvbSBleGNsdWRlRmlsdGVycyBpZiBwcmVzZW50XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZXhjbHVkZUZpbHRlcnMuaW5kZXhPZihsYWJlbCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBleGNsdWRlRmlsdGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgc2F2ZVNlbGVjdGVkRXhjbHVkZUZpbHRlcnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzIGluIHN0b3JhZ2VcbiAgICAgICAgY29uc3QgY3VzdG9tRXhjbHVkZUZpbHRlcnMgPSBhd2FpdCBnZXRDdXN0b21FeGNsdWRlRmlsdGVycygpO1xuICAgICAgICBjb25zdCBmaWx0ZXJJbmRleCA9IGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzLmluZGV4T2YobGFiZWwpO1xuICAgICAgICBpZiAoZmlsdGVySW5kZXggPiAtMSkge1xuICAgICAgICAgICAgY3VzdG9tRXhjbHVkZUZpbHRlcnMuc3BsaWNlKGZpbHRlckluZGV4LCAxKTtcbiAgICAgICAgICAgIHNhdmVDdXN0b21FeGNsdWRlRmlsdGVycyhjdXN0b21FeGNsdWRlRmlsdGVycyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGJ1dHRvbiBmcm9tIHRoZSBET01cbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhdGVnb3J5LXRvZ2dsZS1idXR0b25bZGF0YS1sYWJlbD1cIiR7bGFiZWx9XCJdYCk7XG4gICAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEV4aXN0aW5nIGNhdGVnb3J5IGZpbHRlcnMgcmVtb3ZhbFxuICAgICAgICAvLyBSZW1vdmUgZnJvbSBzZWxlY3RlZEZpbHRlcnMgaWYgcHJlc2VudFxuICAgICAgICBjb25zdCBpbmRleCA9IHNlbGVjdGVkRmlsdGVycy5pbmRleE9mKGxhYmVsKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkRmlsdGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgc2F2ZVNlbGVjdGVkRmlsdGVycygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gY3VzdG9tRmlsdGVycyBpbiBzdG9yYWdlXG4gICAgICAgIGNvbnN0IGN1c3RvbUZpbHRlcnMgPSBhd2FpdCBnZXRDdXN0b21GaWx0ZXJzKCk7XG4gICAgICAgIGNvbnN0IGZpbHRlckluZGV4ID0gY3VzdG9tRmlsdGVycy5pbmRleE9mKGxhYmVsKTtcbiAgICAgICAgaWYgKGZpbHRlckluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGN1c3RvbUZpbHRlcnMuc3BsaWNlKGZpbHRlckluZGV4LCAxKTtcbiAgICAgICAgICAgIHNhdmVDdXN0b21GaWx0ZXJzKGN1c3RvbUZpbHRlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBidXR0b24gZnJvbSB0aGUgRE9NXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXRlZ29yeS10b2dnbGUtYnV0dG9uW2RhdGEtbGFiZWw9XCIke2xhYmVsfVwiXWApO1xuICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qIEZ1bmN0aW9uIHRvIHVwZGF0ZSBmaWx0ZXIgYnV0dG9uIHN0YXRlcyBiYXNlZCBvbiBzZWxlY3RlZEZpbHRlcnMgKi9cbmZ1bmN0aW9uIHVwZGF0ZUZpbHRlclN0YXRlcyhmaWx0ZXJUeXBlID0gJ2NhdGVnb3J5LWZpbHRlcnMnKSB7XG4gICAgbGV0IGJ1dHRvbnM7XG4gICAgaWYgKGZpbHRlclR5cGUgPT09ICdleGNsdWRlLWZpbHRlcnMnKSB7XG4gICAgICAgIGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZXhjbHVkZS1maWx0ZXJzIC5jYXRlZ29yeS10b2dnbGUtYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBidXR0b24uZGF0YXNldC5sYWJlbDtcbiAgICAgICAgICAgIGlmIChleGNsdWRlRmlsdGVycy5pbmNsdWRlcyhsYWJlbCkpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYXRlZ29yeS1maWx0ZXJzIC5jYXRlZ29yeS10b2dnbGUtYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBidXR0b24uZGF0YXNldC5sYWJlbDtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEZpbHRlcnMuaW5jbHVkZXMobGFiZWwpKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyogRXZlbnQgbGlzdGVuZXIgZm9yIGFkZGluZyBuZXcgY2F0ZWdvcnkgZmlsdGVyICovXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWZpbHRlci1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWZpbHRlci1pbnB1dCcpO1xuICAgIGNvbnN0IG5ld0ZpbHRlciA9IGlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICBpZiAobmV3RmlsdGVyICYmICFzZWxlY3RlZEZpbHRlcnMuaW5jbHVkZXMobmV3RmlsdGVyKSkge1xuICAgICAgICAvLyBDcmVhdGUgdG9nZ2xlIGJ1dHRvblxuICAgICAgICBjcmVhdGVUb2dnbGVCdXR0b24obmV3RmlsdGVyLCBmYWxzZSwgJ2NhdGVnb3J5LWZpbHRlcnMnKTtcblxuICAgICAgICAvLyBTYXZlIHRvIGN1c3RvbSBmaWx0ZXJzXG4gICAgICAgIGNvbnN0IGN1c3RvbUZpbHRlcnMgPSBhd2FpdCBnZXRDdXN0b21GaWx0ZXJzKCk7XG4gICAgICAgIGN1c3RvbUZpbHRlcnMucHVzaChuZXdGaWx0ZXIpO1xuICAgICAgICBzYXZlQ3VzdG9tRmlsdGVycyhjdXN0b21GaWx0ZXJzKTtcblxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbn0pO1xuXG4vKiBFdmVudCBsaXN0ZW5lciBmb3IgYWRkaW5nIG5ldyBleGNsdWRlIGZpbHRlciAqL1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1leGNsdWRlLWZpbHRlci1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWV4Y2x1ZGUtZmlsdGVyLWlucHV0Jyk7XG4gICAgY29uc3QgbmV3RXhjbHVkZUZpbHRlciA9IGlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICBpZiAobmV3RXhjbHVkZUZpbHRlciAmJiAhZXhjbHVkZUZpbHRlcnMuaW5jbHVkZXMobmV3RXhjbHVkZUZpbHRlcikpIHtcbiAgICAgICAgLy8gQ3JlYXRlIHRvZ2dsZSBidXR0b25cbiAgICAgICAgY3JlYXRlVG9nZ2xlQnV0dG9uKG5ld0V4Y2x1ZGVGaWx0ZXIsIGZhbHNlLCAnZXhjbHVkZS1maWx0ZXJzJyk7XG5cbiAgICAgICAgLy8gU2F2ZSB0byBjdXN0b20gZXhjbHVkZSBmaWx0ZXJzXG4gICAgICAgIGNvbnN0IGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzID0gYXdhaXQgZ2V0Q3VzdG9tRXhjbHVkZUZpbHRlcnMoKTtcbiAgICAgICAgY3VzdG9tRXhjbHVkZUZpbHRlcnMucHVzaChuZXdFeGNsdWRlRmlsdGVyKTtcbiAgICAgICAgc2F2ZUN1c3RvbUV4Y2x1ZGVGaWx0ZXJzKGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzKTtcblxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJnZXRTdW1tYXJpemVyIiwiX2dldFN1bW1hcml6ZXIiLCJfY2FsbGVlIiwiY2FuU3VtbWFyaXplIiwic3VtbWFyaXplciIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJhaSIsImNhcGFiaWxpdGllcyIsImF2YWlsYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwibG9hZGVkIiwidG90YWwiLCJyZWFkeSIsInN1bW1hcml6ZSIsIl94IiwiX3N1bW1hcml6ZSIsIl9jYWxsZWUyIiwidGV4dCIsInJlc3VsdCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImRlc3Ryb3kiLCJ0MCIsImdldEhpc3RvcnlJblRpbWVSYW5nZSIsImdldEZpbHRlcmVkSGlzdG9yeUl0ZW1zIiwiZ2V0SGlzdG9yeSIsIl94MiIsIl9nZXRIaXN0b3J5Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInJlamVjdCIsImNocm9tZSIsImhpc3RvcnkiLCJzZWFyY2giLCJzdGFydFRpbWUiLCJnZXRUaW1lIiwiZW5kVGltZSIsIm1heFJlc3VsdHMiLCJyZXN1bHRzIiwicnVudGltZSIsImxhc3RFcnJvciIsImdldEhpc3RvcnlXaXRoVG9wTlN0YXRzIiwiX3gzIiwiX3g0IiwiX3g1IiwiX3g2IiwiX3g3IiwiX2dldEhpc3RvcnlXaXRoVG9wTlN0YXRzIiwiTiIsInNlbGVjdGVkRmlsdGVycyIsImV4Y2x1ZGVGaWx0ZXJzIiwiaGlzdG9yeUl0ZW1zIiwiZmlsdGVyZWRIaXN0b3J5SXRlbXMiLCJwYXJzZWRIaXN0b3J5SXRlbXMiLCJob3N0bmFtZU1hcCIsImhvc3RuYW1lVGl0bGVNYXAiLCJzb3J0ZWRIb3N0bmFtZXMiLCJ0b3BOSG9zdG5hbWVzIiwidG9wTkhvc3RuYW1lc1dpdGhUaXRsZXMiLCJtYXAiLCJpdGVtIiwicGFyc2VfdXJsX3BhcnQiLCJ1cmwiLCJ0aXRsZSIsImNvdW50X2J5X2hvc3RuYW1lIiwiY3JlYXRlSG9zdE5hbWVUaXRsZU1hcCIsIkFycmF5IiwiZnJvbSIsImVudHJpZXMiLCJzb3J0IiwiYiIsImhvc3RuYW1lIiwidGl0bGVzIiwiZ2V0IiwiY291bnQiLCJwYXJzZWRVcmwiLCJVUkwiLCJwcm90b2NvbCIsInJlcGxhY2UiLCJob3N0bmFtZVBhcnRzIiwic3BsaXQiLCJzdWJkb21haW4iLCJkb21haW4iLCJ0bGQiLCJqb2luIiwicGF0aCIsInBhdGhuYW1lIiwicXVlcnlQYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJrZXkiLCJpc0FycmF5IiwiZnJhZ21lbnQiLCJoYXNoIiwicG9ydCIsImhvc3QiLCJocmVmIiwib3JpZ2luIiwiZXJyb3IiLCJjb25jYXQiLCJNYXAiLCJoYXMiLCJzZXQiLCJzb21lIiwiZXh0cmFjdERvbWFpbiIsIm1hcmtkb3duVG9IdG1sIiwibWFya2Rvd25UZXh0IiwiaHRtbCIsImNsZWFuSW5wdXQiLCJtYXhMZW5ndGgiLCJ1bmRlZmluZWQiLCJub3JtYWxpemUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlc2NhcGUiLCJ0cmltIiwiZW5hYmxlUmVzaXppbmciLCJyZXNpemFibGVFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJyZXNpemVIYW5kbGUiLCJxdWVyeVNlbGVjdG9yIiwiaXNSZXNpemluZyIsInByZXZlbnREZWZhdWx0IiwiYm9keSIsInN0eWxlIiwiY3Vyc29yIiwiY2xhc3NMaXN0IiwiYWRkIiwic3RhcnRXaWR0aCIsIm9mZnNldFdpZHRoIiwic3RhcnRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzdGFydFgiLCJjbGllbnRYIiwic3RhcnRZIiwiY2xpZW50WSIsIm9uTW91c2VNb3ZlIiwiY3VycmVudFdpZHRoIiwiY3VycmVudEhlaWdodCIsIm1pbldpZHRoIiwibWluSGVpZ2h0Iiwid2lkdGgiLCJNYXRoIiwibWF4IiwiaGVpZ2h0Iiwib25Nb3VzZVVwIiwicmVtb3ZlIiwid2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNhdmVXaWRnZXRTaXplIiwiaWQiLCJsb2FkV2lkZ2V0U2l6ZSIsIndpZGdldElkIiwic2l6ZSIsInN0b3JhZ2UiLCJsb2NhbCIsIl9kZWZpbmVQcm9wZXJ0eSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJnZXRJdGVtIiwiY3JlYXRlT3JHZXRXaWRnZXQiLCJ1bmlxdWVJRCIsIndpZGdldFRpdGxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWRnZXRDb250YWluZXIiLCJuZXdXaWRnZXQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJhZGp1c3RXaWRnZXRTaXplIiwid2lkZ2V0IiwiY29udGVudCIsImhlYWRlciIsImhlYWRlckhlaWdodCIsImNvbnRlbnRIZWlnaHQiLCJkYiIsIm9wZW5EYXRhYmFzZSIsIl9vcGVuRGF0YWJhc2UiLCJyZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsIm9uZXJyb3IiLCJldmVudCIsInRhcmdldCIsImVycm9yQ29kZSIsIm9udXBncmFkZW5lZWRlZCIsIm9iamVjdFN0b3JlIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwiY3JlYXRlSW5kZXgiLCJ1bmlxdWUiLCJtdWx0aUVudHJ5Iiwib25zdWNjZXNzIiwiY2xlYXJEYXRhYmFzZSIsIl9jbGVhckRhdGFiYXNlIiwidHJhbnNhY3Rpb24iLCJjbGVhciIsImFkZEhpc3RvcnlJdGVtIiwiX2FkZEhpc3RvcnlJdGVtIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJpbmRleCIsImNoZWNrUmVxdWVzdCIsImxhc3RWaXNpdFRpbWUiLCJwdXQiLCJnZXRBbGxIaXN0b3J5SXRlbXMiLCJfZ2V0QWxsSGlzdG9yeUl0ZW1zIiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJnZXRBbGwiLCJjaGVja0lmSXRlbUV4aXN0cyIsIl9jaGVja0lmSXRlbUV4aXN0cyIsIl9jYWxsZWU1IiwiZXhpc3RzIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwicHJvbWlzaWZ5UmVxdWVzdCIsIl9nZXRIaXN0b3J5SW5UaW1lUmFuZ2UiLCJfY2FsbGVlNiIsInJhbmdlIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiSURCS2V5UmFuZ2UiLCJib3VuZCIsIkZ1c2UiLCJnZXRTZWFyY2hSZXN1bHRzIiwiX2dldFNlYXJjaFJlc3VsdHMiLCJyYXdfcXVlcnkiLCJxdWVyeSIsImZ1c2UiLCJ0b0xvd2VyQ2FzZSIsIndlaWdodCIsInRocmVzaG9sZCIsImZpbHRlcmVkSXRlbXMiLCJsb3dlckNhc2VTZWxlY3RlZEZpbHRlcnMiLCJmaWx0ZXIiLCJzdW1tYXJ5IiwidGFncyIsInRhZyIsImluY2x1ZGVzIiwibG93ZXJDYXNlRXhjbHVkZUZpbHRlcnMiLCJhZGREYXRlUmFuZ2VCdXR0b25zIiwiYWRkUmVmcmVzaEJ1dHRvbiIsInNldERhdGVSYW5nZSIsImluaXRpYWxpemVGaWx0ZXJzIiwiYWRkT3JVcGRhdGVSZWNlbnRIaXN0b3J5V2lkZ2V0IiwiYWRkT3JVcGRhdGVCYXNpY1N1bW1hcnlXaWRnZXQiLCJsb2FkQ29udGVudCIsInRvZ2dsZSIsImNvbnRhaW5zIiwic2F2ZWRUaGVtZSIsInJlZnJlc2hCdXR0b24iLCJ0ZXh0Q29udGVudCIsImNvbnRhaW5lciIsImJ1dHRvbkRhdGEiLCJsYWJlbCIsImRhdGEiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJidG4iLCJ0b2RheSIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInNldE1vbnRoIiwiZ2V0TW9udGgiLCJtb250aE1hcCIsImphbiIsImZlYiIsIm1hciIsImdldEZ1bGxZZWFyIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiX2FkZE9yVXBkYXRlUmVjZW50SGlzdG9yeVdpZGdldCIsImxhc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiY3JlYXRlUmVjZW50SGlzdG9yeUVsZW1lbnQiLCJfYWRkT3JVcGRhdGVCYXNpY1N1bW1hcnlXaWRnZXQiLCJjcmVhdGVCYXNpY1N1bW1hcnlFbGVtZW50IiwiX2xvYWRDb250ZW50IiwiX2NhbGxlZTciLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJfY3JlYXRlUmVjZW50SGlzdG9yeUVsZW1lbnQiLCJfY2FsbGVlOCIsIl9jYWxsZWU4JCIsIl9jb250ZXh0OCIsImJveCIsImhpdENvdW50IiwidGl0bGVzQ29udGFpbmVyIiwidGl0bGVzTGlzdCIsImluaXRpYWxEaXNwbGF5Q291bnQiLCJhZGRpdGlvbmFsTG9hZENvdW50IiwiZGlzcGxheWVkVGl0bGVzIiwidGl0bGVJdGVtIiwibGlzdEl0ZW0iLCJsaW5rIiwibW9yZUJ1dHRvbiIsImRhdGFzZXQiLCJsb2FkTW9yZVRpdGxlcyIsIl9jcmVhdGVCYXNpY1N1bW1hcnlFbGVtZW50IiwiX2NhbGxlZTkiLCJoaXN0b3J5SXRlbVRpdGxlcyIsImNodW5rcyIsIl9pIiwiX2NodW5rcyIsImNodW5rIiwidGV4dEVsZW1lbnQiLCJfY2FsbGVlOSQiLCJfY29udGV4dDkiLCJmbGF0IiwiaW5pdGlhbENvdW50IiwibG9hZENvdW50IiwiY3VycmVudENvdW50IiwibmV4dENvdW50IiwidGl0bGVzVG9BZGQiLCJyZW1haW5pbmciLCJfaW5pdGlhbGl6ZUZpbHRlcnMiLCJfY2FsbGVlMTAiLCJfY2FsbGVlMTAkIiwiX2NvbnRleHQxMCIsImluaXRpYWxpemVDYXRlZ29yeUZpbHRlcnMiLCJpbml0aWFsaXplRXhjbHVkZUZpbHRlcnMiLCJfaW5pdGlhbGl6ZUNhdGVnb3J5RmlsdGVycyIsIl9jYWxsZWUxMSIsImRlZmF1bHRGaWx0ZXJzIiwiY3VzdG9tRmlsdGVycyIsImFsbEZpbHRlcnMiLCJfY2FsbGVlMTEkIiwiX2NvbnRleHQxMSIsImdldEN1c3RvbUZpbHRlcnMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJjcmVhdGVUb2dnbGVCdXR0b24iLCJnZXRTZWxlY3RlZEZpbHRlcnMiLCJ1cGRhdGVGaWx0ZXJTdGF0ZXMiLCJfaW5pdGlhbGl6ZUV4Y2x1ZGVGaWx0ZXJzIiwiX2NhbGxlZTEyIiwiY3VzdG9tRXhjbHVkZUZpbHRlcnMiLCJfY2FsbGVlMTIkIiwiX2NvbnRleHQxMiIsImdldEN1c3RvbUV4Y2x1ZGVGaWx0ZXJzIiwiZ2V0U2VsZWN0ZWRFeGNsdWRlRmlsdGVycyIsInNhdmVTZWxlY3RlZEZpbHRlcnMiLCJzYXZlQ3VzdG9tRmlsdGVycyIsInNlbGVjdGVkRXhjbHVkZUZpbHRlcnMiLCJzYXZlU2VsZWN0ZWRFeGNsdWRlRmlsdGVycyIsInNhdmVDdXN0b21FeGNsdWRlRmlsdGVycyIsImlzRGVmYXVsdCIsImZpbHRlclR5cGUiLCJjb250YWluZXJJZCIsInJlbW92ZUJ0biIsIl9yZWYyIiwic3RvcFByb3BhZ2F0aW9uIiwicmVtb3ZlRmlsdGVyIiwiaW5kZXhPZiIsInNwbGljZSIsIl9yZW1vdmVGaWx0ZXIiLCJfY2FsbGVlMTMiLCJmaWx0ZXJJbmRleCIsIl9pbmRleDIiLCJfZmlsdGVySW5kZXgiLCJfYnV0dG9uIiwiX2NhbGxlZTEzJCIsIl9jb250ZXh0MTMiLCJidXR0b25zIiwiX3JlZjMiLCJpbnB1dCIsIm5ld0ZpbHRlciIsIl9yZWY0IiwibmV3RXhjbHVkZUZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=