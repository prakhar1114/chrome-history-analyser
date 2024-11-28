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
/* harmony export */   summarize: () => (/* binding */ summarize),
/* harmony export */   summarizeLargeTextWithContext: () => (/* binding */ summarizeLargeTextWithContext),
/* harmony export */   summarizeWithContext: () => (/* binding */ summarizeWithContext)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function getSummarizer() {
  return _getSummarizer.apply(this, arguments);
}
function _getSummarizer() {
  _getSummarizer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var options, available, summarizer;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          options = {
            sharedContext: 'This is a list of titles visited by the user',
            type: 'key-points',
            format: 'markdown',
            length: 'medium'
          };
          _context.next = 3;
          return self.ai.summarizer.capabilities();
        case 3:
          available = _context.sent.available;
          if (!(available === 'no')) {
            _context.next = 6;
            break;
          }
          throw new Error('Summarizer API is not available');
        case 6:
          if (!(available === 'readily')) {
            _context.next = 13;
            break;
          }
          _context.next = 9;
          return self.ai.summarizer.create(options);
        case 9:
          summarizer = _context.sent;
          return _context.abrupt("return", summarizer);
        case 13:
          _context.next = 15;
          return self.ai.summarizer.create(options);
        case 15:
          summarizer = _context.sent;
          summarizer.addEventListener('downloadprogress', function (e) {
            console.log(e.loaded, e.total);
          });
          _context.next = 19;
          return summarizer.ready;
        case 19:
          return _context.abrupt("return", summarizer);
        case 20:
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
          return summarizer.summarize(text, {
            context: 'Give interesting insights about user behaviours from the titles. Give important information about the user\'s interests and habits.'
          });
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
function summarizeWithContext(_x2, _x3) {
  return _summarizeWithContext.apply(this, arguments);
}
function _summarizeWithContext() {
  _summarizeWithContext = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(text, context) {
    var summarizer, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return getSummarizer();
        case 3:
          summarizer = _context3.sent;
          _context3.next = 6;
          return summarizer.summarize(text, {
            context: context
          });
        case 6:
          result = _context3.sent;
          _context3.next = 9;
          return summarizer.destroy();
        case 9:
          return _context3.abrupt("return", result);
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          console.log('Error during summarization:', _context3.t0);
          return _context3.abrupt("return", '');
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return _summarizeWithContext.apply(this, arguments);
}
function summarizeLargeTextWithContext(_x4, _x5) {
  return _summarizeLargeTextWithContext.apply(this, arguments);
}
function _summarizeLargeTextWithContext() {
  _summarizeLargeTextWithContext = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(text, context) {
    var chunks, summaries, _iterator, _step, chunk, summary;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          chunks = text.match(/.{1,2000}/g);
          summaries = [];
          _iterator = _createForOfIteratorHelper(chunks);
          _context4.prev = 3;
          _iterator.s();
        case 5:
          if ((_step = _iterator.n()).done) {
            _context4.next = 13;
            break;
          }
          chunk = _step.value;
          _context4.next = 9;
          return summarizeWithContext(cleanInput(chunk), context);
        case 9:
          summary = _context4.sent;
          summaries.push(summary);
        case 11:
          _context4.next = 5;
          break;
        case 13:
          _context4.next = 18;
          break;
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](3);
          _iterator.e(_context4.t0);
        case 18:
          _context4.prev = 18;
          _iterator.f();
          return _context4.finish(18);
        case 21:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[3, 15, 18, 21]]);
  }));
  return _summarizeLargeTextWithContext.apply(this, arguments);
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
          return _context2.abrupt("return", {
            topNHostnamesWithTitles: topNHostnamesWithTitles,
            filteredHistoryItems: filteredHistoryItems
          });
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
function adjustWidgetSize(widget, selectors, offset) {
  var height = 0;
  selectors.forEach(function (selector) {
    // Use querySelectorAll to handle multiple elements for each selector
    var elements = widget.querySelectorAll(selector);
    elements.forEach(function (element) {
      height += element.offsetHeight;
    });
  });
  // console.log("New height: ", height);
  widget.style.height = "".concat(height + offset, "px");
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





var startDate, endDate;
var defaultDateRange = '1w';
var enableBasicSummary = false;

// Global variables to store selected filters
var selectedFilters = [];
var excludeFilters = [];
document.addEventListener('DOMContentLoaded', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        addDateRangeButtons(defaultDateRange);
        addRefreshButton();
        setDateRange(defaultDateRange);
        // Initialize category and exclude filters
        _context.next = 5;
        return initializeFilters();
      case 5:
        addOrUpdateRecentHistoryWidget();
        if (enableBasicSummary) {
          addOrUpdateBasicSummaryWidget();
        }
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
/* Event listener for adding new category filter */
document.getElementById('add-filter-form').addEventListener('submit', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
    var input, newFilter, customFilters;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          e.preventDefault();
          input = document.getElementById('new-filter-input');
          newFilter = input.value.trim();
          if (!(newFilter && !selectedFilters.includes(newFilter))) {
            _context2.next = 11;
            break;
          }
          // Create toggle button
          createToggleButton(newFilter, false, 'category-filters');

          // Save to custom filters
          _context2.next = 7;
          return getCustomFilters();
        case 7:
          customFilters = _context2.sent;
          customFilters.push(newFilter);
          saveCustomFilters(customFilters);
          input.value = '';
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());

/* Event listener for adding new exclude filter */
document.getElementById('add-exclude-filter-form').addEventListener('submit', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
    var input, newExcludeFilter, customExcludeFilters;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          e.preventDefault();
          input = document.getElementById('new-exclude-filter-input');
          newExcludeFilter = input.value.trim();
          if (!(newExcludeFilter && !excludeFilters.includes(newExcludeFilter))) {
            _context3.next = 11;
            break;
          }
          // Create toggle button
          createToggleButton(newExcludeFilter, false, 'exclude-filters');

          // Save to custom exclude filters
          _context3.next = 7;
          return getCustomExcludeFilters();
        case 7:
          customExcludeFilters = _context3.sent;
          customExcludeFilters.push(newExcludeFilter);
          saveCustomExcludeFilters(customExcludeFilters);
          input.value = '';
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x2) {
    return _ref3.apply(this, arguments);
  };
}());
function addRefreshButton() {
  var refreshButton = document.createElement('button');
  refreshButton.id = 'refresh-button';
  refreshButton.textContent = 'Refresh';
  var container = document.querySelector('.date-range-container');
  container.appendChild(refreshButton);
}

/* Initialize Date Range Inputs */
function addDateRangeButtons(defaultDateRange) {
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
    if (data.range === defaultDateRange) {
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
            (0,_widgets_js__WEBPACK_IMPORTED_MODULE_2__.adjustWidgetSize)(newWidget, ['.widget-header', '.history-container'], 50);
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
          while (newWidget.lastChild && newWidget.lastChild.className && newWidget.lastChild.className.includes('contents')) {
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
          if (!enableBasicSummary) {
            _context7.next = 7;
            break;
          }
          _context7.next = 7;
          return addOrUpdateBasicSummaryWidget();
        case 7:
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
    var _yield$getHistoryWith, topNHostnamesWithTitles, container;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0,_history_js__WEBPACK_IMPORTED_MODULE_1__.getHistoryWithTopNStats)(startDate, endDate, 10, selectedFilters, excludeFilters);
        case 2:
          _yield$getHistoryWith = _context8.sent;
          topNHostnamesWithTitles = _yield$getHistoryWith.topNHostnamesWithTitles;
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
        case 9:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _createRecentHistoryElement.apply(this, arguments);
}
function createBasicSummaryElement(_x3) {
  return _createBasicSummaryElement.apply(this, arguments);
}
function _createBasicSummaryElement() {
  _createBasicSummaryElement = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(newWidget) {
    var _yield$getHistoryWith2, topNHostnamesWithTitles, historyItems, historyItemTitles, chunks, i, _i, _chunks, chunk, result, textElement;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0,_history_js__WEBPACK_IMPORTED_MODULE_1__.getHistoryWithTopNStats)(startDate, endDate, 10, selectedFilters, excludeFilters);
        case 2:
          _yield$getHistoryWith2 = _context9.sent;
          topNHostnamesWithTitles = _yield$getHistoryWith2.topNHostnamesWithTitles;
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
        case 9:
          if (!(_i < _chunks.length)) {
            _context9.next = 22;
            break;
          }
          chunk = _chunks[_i];
          _context9.next = 13;
          return (0,_ai_summarizer_js__WEBPACK_IMPORTED_MODULE_0__.summarize)((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.cleanInput)(chunk));
        case 13:
          result = _context9.sent;
          textElement = document.createElement('p'); // Use a class instead of an ID to allow multiple elements
          textElement.classList.add('basic-summary-contents');
          textElement.innerHTML = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.markdownToHtml)(result);
          newWidget.appendChild(textElement);
          (0,_widgets_js__WEBPACK_IMPORTED_MODULE_2__.adjustWidgetSize)(newWidget, ['.widget-header', '.basic-summary-contents'], 60);
        case 19:
          _i++;
          _context9.next = 9;
          break;
        case 22:
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
      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              e.stopPropagation();
              _context4.next = 3;
              return removeFilter(label, filterType);
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x4) {
        return _ref4.apply(this, arguments);
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
function removeFilter(_x5, _x6) {
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSw0Q0FBNEMsU0FBUztBQUNyRDtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUk7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxTQUFTO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksa0NBQWtDOztBQUU5Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsVUFB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TUFBTSxFQUFJO01BQ3RCLElBQU1GLEtBQUssR0FBR0UsTUFBTSxDQUFDMEMsT0FBTyxDQUFDNUMsS0FBSztNQUNsQyxJQUFJek4sY0FBYyxDQUFDMkwsUUFBUSxDQUFDOEIsS0FBSyxDQUFDLEVBQUU7UUFDaENFLE1BQU0sQ0FBQ2hKLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUNsQyxDQUFDLE1BQU07UUFDSCtJLE1BQU0sQ0FBQ2hKLFNBQVMsQ0FBQ29CLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDckM7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLE1BQU07SUFDSGdPLE9BQU8sR0FBRzlQLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsMkNBQTJDLENBQUM7SUFDaEY2UCxPQUFPLENBQUMxYyxPQUFPLENBQUMsVUFBQXNXLE1BQU0sRUFBSTtNQUN0QixJQUFNRixLQUFLLEdBQUdFLE1BQU0sQ0FBQzBDLE9BQU8sQ0FBQzVDLEtBQUs7TUFDbEMsSUFBSTFOLGVBQWUsQ0FBQzRMLFFBQVEsQ0FBQzhCLEtBQUssQ0FBQyxFQUFFO1FBQ2pDRSxNQUFNLENBQUNoSixTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDbEMsQ0FBQyxNQUFNO1FBQ0grSSxNQUFNLENBQUNoSixTQUFTLENBQUNvQixNQUFNLENBQUMsUUFBUSxDQUFDO01BQ3JDO0lBQ0osQ0FBQyxDQUFDO0VBQ047QUFDSixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvYWkvc3VtbWFyaXplci5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci8uL3NyYy91c2VyX2Rhc2hib2FyZC9oaXN0b3J5LmpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3VzZXJfZGFzaGJvYXJkL3V0aWxzLmpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3VzZXJfZGFzaGJvYXJkL3dpZGdldHMuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvdXRpbHMvZGIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvdXRpbHMvc2VhcmNoLmpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3VzZXJfZGFzaGJvYXJkL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9ub2RlX21vZHVsZXMvZnVzZS5qcy9kaXN0L2Z1c2UubWpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvdXNlcl9kYXNoYm9hcmQvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5hc3luYyBmdW5jdGlvbiBnZXRTdW1tYXJpemVyKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHNoYXJlZENvbnRleHQ6ICdUaGlzIGlzIGEgbGlzdCBvZiB0aXRsZXMgdmlzaXRlZCBieSB0aGUgdXNlcicsXG4gICAgICAgIHR5cGU6ICdrZXktcG9pbnRzJyxcbiAgICAgICAgZm9ybWF0OiAnbWFya2Rvd24nLFxuICAgICAgICBsZW5ndGg6ICdtZWRpdW0nLFxuICAgICAgfTtcbiAgICAgIFxuICAgICAgY29uc3QgYXZhaWxhYmxlID0gKGF3YWl0IHNlbGYuYWkuc3VtbWFyaXplci5jYXBhYmlsaXRpZXMoKSkuYXZhaWxhYmxlO1xuICAgICAgbGV0IHN1bW1hcml6ZXI7XG4gICAgICBpZiAoYXZhaWxhYmxlID09PSAnbm8nKSB7XG4gICAgICAgIC8vIFRoZSBTdW1tYXJpemVyIEFQSSBpc24ndCB1c2FibGUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3VtbWFyaXplciBBUEkgaXMgbm90IGF2YWlsYWJsZScpO1xuICAgICAgfVxuICAgICAgaWYgKGF2YWlsYWJsZSA9PT0gJ3JlYWRpbHknKSB7XG4gICAgICAgIC8vIFRoZSBTdW1tYXJpemVyIEFQSSBjYW4gYmUgdXNlZCBpbW1lZGlhdGVseSAuXG4gICAgICAgIHN1bW1hcml6ZXIgPSBhd2FpdCBzZWxmLmFpLnN1bW1hcml6ZXIuY3JlYXRlKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gc3VtbWFyaXplcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRoZSBTdW1tYXJpemVyIEFQSSBjYW4gYmUgdXNlZCBhZnRlciB0aGUgbW9kZWwgaXMgZG93bmxvYWRlZC5cbiAgICAgICAgc3VtbWFyaXplciA9IGF3YWl0IHNlbGYuYWkuc3VtbWFyaXplci5jcmVhdGUob3B0aW9ucyk7XG4gICAgICAgIHN1bW1hcml6ZXIuYWRkRXZlbnRMaXN0ZW5lcignZG93bmxvYWRwcm9ncmVzcycsIChlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZS5sb2FkZWQsIGUudG90YWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgc3VtbWFyaXplci5yZWFkeTtcbiAgICAgICAgcmV0dXJuIHN1bW1hcml6ZXI7XG4gICAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN1bW1hcml6ZSh0ZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3VtbWFyaXplciA9IGF3YWl0IGdldFN1bW1hcml6ZXIoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VtbWFyaXplci5zdW1tYXJpemUodGV4dCwge1xuICAgICAgICAgICAgY29udGV4dDogJ0dpdmUgaW50ZXJlc3RpbmcgaW5zaWdodHMgYWJvdXQgdXNlciBiZWhhdmlvdXJzIGZyb20gdGhlIHRpdGxlcy4gR2l2ZSBpbXBvcnRhbnQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHVzZXJcXCdzIGludGVyZXN0cyBhbmQgaGFiaXRzLicsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBzdW1tYXJpemVyLmRlc3Ryb3koKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZHVyaW5nIHN1bW1hcml6YXRpb246JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBzdW1tYXJpemVXaXRoQ29udGV4dCh0ZXh0LCBjb250ZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3VtbWFyaXplciA9IGF3YWl0IGdldFN1bW1hcml6ZXIoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VtbWFyaXplci5zdW1tYXJpemUodGV4dCwgeyBjb250ZXh0IH0pO1xuICAgICAgICBhd2FpdCBzdW1tYXJpemVyLmRlc3Ryb3koKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZHVyaW5nIHN1bW1hcml6YXRpb246JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBzdW1tYXJpemVMYXJnZVRleHRXaXRoQ29udGV4dCh0ZXh0LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2h1bmtzID0gdGV4dC5tYXRjaCgvLnsxLDIwMDB9L2cpO1xuICAgIGNvbnN0IHN1bW1hcmllcyA9IFtdO1xuICAgIGZvciAoY29uc3QgY2h1bmsgb2YgY2h1bmtzKSB7XG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBzdW1tYXJpemVXaXRoQ29udGV4dChjbGVhbklucHV0KGNodW5rKSwgY29udGV4dCk7XG4gICAgICAgIHN1bW1hcmllcy5wdXNoKHN1bW1hcnkpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgc3VtbWFyaXplLCBzdW1tYXJpemVXaXRoQ29udGV4dCwgc3VtbWFyaXplTGFyZ2VUZXh0V2l0aENvbnRleHQgfTsiLCJpbXBvcnQgeyBnZXRIaXN0b3J5SW5UaW1lUmFuZ2UgfSBmcm9tICcuLi91dGlscy9kYi5qcyc7XG5pbXBvcnQgeyBnZXRGaWx0ZXJlZEhpc3RvcnlJdGVtcyB9IGZyb20gJy4uL3V0aWxzL3NlYXJjaC5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEhpc3Rvcnkoc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLmhpc3Rvcnkuc2VhcmNoKHt0ZXh0OiAnJywgc3RhcnRUaW1lOiBzdGFydERhdGUuZ2V0VGltZSgpLCBlbmRUaW1lOiBlbmREYXRlLmdldFRpbWUoKSwgbWF4UmVzdWx0czogNDAgfSwgKHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIHJlamVjdChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gc3RhcnREYXRlIFxuICogQHBhcmFtIHsqfSBlbmREYXRlIFxuICogQHBhcmFtIHsqfSBOIFxuICogQHJldHVybnMgXG4gKiBcbiAqIFxuICogKDUpIFt74oCmfSwge+KApn0sIHvigKZ9LCB74oCmfSwge+KApn1dXG4wXG46IFxue2hvc3RuYW1lOiAnd3d3LmN1cnNvci5jb20nLCB0aXRsZXM6IEFycmF5KDYpLCBjb3VudDogMjR9XG4xXG46IFxue2hvc3RuYW1lOiAnd3d3LnlvdXR1YmUuY29tJywgdGl0bGVzOiBBcnJheSgxMiksIGNvdW50OiAyMX1cbjJcbjogXG57aG9zdG5hbWU6ICdtYWlsLmdvb2dsZS5jb20nLCB0aXRsZXM6IEFycmF5KDEyKSwgY291bnQ6IDE4fVxuM1xuOiBcbntob3N0bmFtZTogJ2RldmVsb3Blci5jaHJvbWUuY29tJywgdGl0bGVzOiBBcnJheSgyKSwgY291bnQ6IDE2fVxuNFxuOiBcbntob3N0bmFtZTogJ2dpdGh1Yi5jb20nLCB0aXRsZXM6IEFycmF5KDcpLCBjb3VudDogMTJ9XG5cbmV4YW1wbGUgdGl0bGVzOlxuXG4wXG46IFxue3RpdGxlOiAnaW4gY3Vyc3VyIGR1cmluZyBpbmRleGluZywgaXMgdGhlIHJlc3VsdHMgc3RvcmVkIGxjb2FsbHkgLSBHb29nbGUgU2VhcmNoJywgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1pbitjdXJzdXIrZHVyaW5nK2nigKZTQVFreE1qVXpNR293YWplb0FnQ3dBZ0Emc291cmNlaWQ9Y2hyb21lJmllPVVURi04J31cbjFcbjogXG57dGl0bGU6ICdzbGFjayBpbnRlZ3JhdGlvbiB0byBub3Rpb24gLSBHb29nbGUgU2VhcmNoJywgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1zbGFjaytpbnRlZ3JhdGlvbivigKZUU0FRZzJNekF5YWpCcU42Z0NBTEFDQUEmc291cmNlaWQ9Y2hyb21lJmllPVVURi04J31cbjJcbjogXG57dGl0bGU6ICdpIHdhbnQgdG8gY29udmVydCBhIHNsYWNrIGNoYW5uZWwgdG8gbm90aW9uIGRvY3VtZW50IC0gR29vZ2xlIFNlYXJjaCcsIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9aSt3YW50K3RvK2NvbnZlcnQr4oCmdWdZR0NBRVFBUmdUa2djRU9TNHpONkFIZ2NjQyZzY2xpZW50PWd3cy13aXotc2VycCd9XG4zXG46IFxue3RpdGxlOiAnY29udmVydCBwaWwgaW1hZ2UgdG8gZGljb20gZmlsZSAtIEdvb2dsZSBTZWFyY2gnLCB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPWNvbnZlcnQrcGlsK2ltYWdlK+KApkFkSUJDRGcwTnpscU1HbzNxQUlBc0FJQSZzb3VyY2VpZD1jaHJvbWUmaWU9VVRGLTgnfVxuNFxuOiBcbnt0aXRsZTogJ3N1cGVyIHJlc29sdXRpb24gbW9kZWxzIC0gR29vZ2xlIFNlYXJjaCcsIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9c3VwZXIrcmVzb2x1dGlvbitt4oCmZTBnRUlOakl5TUdvd2FqZW9BZ0N3QWdBJnNvdXJjZWlkPWNocm9tZSZpZT1VVEYtOCd9XG41XG46IFxue3RpdGxlOiAnc3VwZXIgcmVzb2x1dGlvbiBtb2RlbCBvbmxpbmUgZnJlZSAtIEdvb2dsZSBTZWFyY2gnLCB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPXN1cGVyK3Jlc29sdXRpb24rbeKApkZtQU1BaUFZQmtBWUlrZ2NFTWk0eE02QUhrbGsmc2NsaWVudD1nd3Mtd2l6LXNlcnAnfVxuICovXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEhpc3RvcnlXaXRoVG9wTlN0YXRzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgTiwgc2VsZWN0ZWRGaWx0ZXJzLCBleGNsdWRlRmlsdGVycykge1xuICAgIGNvbnN0IGhpc3RvcnlJdGVtcyA9IGF3YWl0IGdldEhpc3RvcnlJblRpbWVSYW5nZShzdGFydERhdGUuZ2V0VGltZSgpLCBlbmREYXRlLmdldFRpbWUoKSk7XG4gICAgY29uc3QgZmlsdGVyZWRIaXN0b3J5SXRlbXMgPSBnZXRGaWx0ZXJlZEhpc3RvcnlJdGVtcyhoaXN0b3J5SXRlbXMsIHNlbGVjdGVkRmlsdGVycywgZXhjbHVkZUZpbHRlcnMpO1xuICAgIGNvbnN0IHBhcnNlZEhpc3RvcnlJdGVtcyA9IGZpbHRlcmVkSGlzdG9yeUl0ZW1zLm1hcChpdGVtID0+IHBhcnNlX3VybF9wYXJ0KGl0ZW0udXJsLCBpdGVtLnRpdGxlKSk7XG4gICAgY29uc3QgaG9zdG5hbWVNYXAgPSBjb3VudF9ieV9ob3N0bmFtZShwYXJzZWRIaXN0b3J5SXRlbXMpO1xuICAgIGNvbnN0IGhvc3RuYW1lVGl0bGVNYXAgPSBjcmVhdGVIb3N0TmFtZVRpdGxlTWFwKHBhcnNlZEhpc3RvcnlJdGVtcyk7XG4gICAgY29uc3Qgc29ydGVkSG9zdG5hbWVzID0gQXJyYXkuZnJvbShob3N0bmFtZU1hcC5lbnRyaWVzKCkpLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKTtcbiAgICBjb25zdCB0b3BOSG9zdG5hbWVzID0gc29ydGVkSG9zdG5hbWVzLnNsaWNlKDAsIE4pO1xuICAgIGNvbnN0IHRvcE5Ib3N0bmFtZXNXaXRoVGl0bGVzID0gdG9wTkhvc3RuYW1lcy5tYXAoaXRlbSA9PiAoeyBob3N0bmFtZTogaXRlbVswXSwgdGl0bGVzOiBob3N0bmFtZVRpdGxlTWFwLmdldChpdGVtWzBdKSwgY291bnQ6IGl0ZW1bMV0gfSkpO1xuXG4gICAgcmV0dXJuIHsgdG9wTkhvc3RuYW1lc1dpdGhUaXRsZXMsIGZpbHRlcmVkSGlzdG9yeUl0ZW1zIH07XG59XG5cblxuZnVuY3Rpb24gcGFyc2VfdXJsX3BhcnQodXJsLCB0aXRsZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFVybCA9IG5ldyBVUkwodXJsKTtcblxuICAgICAgICAvLyBFeHRyYWN0IHByb3RvY29sIHdpdGhvdXQgdGhlIHRyYWlsaW5nIGNvbG9uIChlLmcuLCAnaHR0cHMnKVxuICAgICAgICBjb25zdCBwcm90b2NvbCA9IHBhcnNlZFVybC5wcm90b2NvbC5yZXBsYWNlKCc6JywgJycpO1xuXG4gICAgICAgIC8vIFNwbGl0IGhvc3RuYW1lIGludG8gcGFydHMgdG8gaWRlbnRpZnkgc3ViZG9tYWluLCBkb21haW4sIGFuZCBUTERcbiAgICAgICAgY29uc3QgaG9zdG5hbWVQYXJ0cyA9IHBhcnNlZFVybC5ob3N0bmFtZS5zcGxpdCgnLicpO1xuICAgICAgICBsZXQgc3ViZG9tYWluID0gJyc7XG4gICAgICAgIGxldCBkb21haW4gPSAnJztcbiAgICAgICAgbGV0IHRsZCA9ICcnO1xuXG4gICAgICAgIGlmIChob3N0bmFtZVBhcnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIHN1YmRvbWFpbiA9IGhvc3RuYW1lUGFydHMuc2xpY2UoMCwgaG9zdG5hbWVQYXJ0cy5sZW5ndGggLSAyKS5qb2luKCcuJyk7XG4gICAgICAgICAgICBkb21haW4gPSBob3N0bmFtZVBhcnRzW2hvc3RuYW1lUGFydHMubGVuZ3RoIC0gMl07XG4gICAgICAgICAgICB0bGQgPSBob3N0bmFtZVBhcnRzW2hvc3RuYW1lUGFydHMubGVuZ3RoIC0gMV07XG4gICAgICAgIH0gZWxzZSBpZiAoaG9zdG5hbWVQYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGRvbWFpbiA9IGhvc3RuYW1lUGFydHNbMF07XG4gICAgICAgICAgICB0bGQgPSBob3N0bmFtZVBhcnRzWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9tYWluID0gcGFyc2VkVXJsLmhvc3RuYW1lO1xuICAgICAgICAgICAgdGxkID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFeHRyYWN0IHBhdGggKGVuZHBvaW50KVxuICAgICAgICBjb25zdCBwYXRoID0gcGFyc2VkVXJsLnBhdGhuYW1lO1xuXG4gICAgICAgIC8vIEV4dHJhY3QgcXVlcnkgcGFyYW1ldGVycyBhcyBrZXktdmFsdWUgcGFpcnNcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7fTtcbiAgICAgICAgcGFyc2VkVXJsLnNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAvLyBJZiB0aGUga2V5IGFscmVhZHkgZXhpc3RzLCBjb252ZXJ0IGl0IGludG8gYW4gYXJyYXlcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtc1trZXldKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlQYXJhbXNba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc1trZXldID0gW3F1ZXJ5UGFyYW1zW2tleV0sIHZhbHVlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRXh0cmFjdCBmcmFnbWVudCB3aXRob3V0IHRoZSBsZWFkaW5nIGhhc2ggKGUuZy4sICdzZWN0aW9uMScpXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gcGFyc2VkVXJsLmhhc2gucmVwbGFjZSgnIycsICcnKTtcblxuICAgICAgICAvLyBFeHRyYWN0IHBvcnQgaWYgc3BlY2lmaWVkLCBlbHNlIGRlZmF1bHQgYmFzZWQgb24gcHJvdG9jb2xcbiAgICAgICAgbGV0IHBvcnQgPSBwYXJzZWRVcmwucG9ydDtcbiAgICAgICAgaWYgKCFwb3J0KSB7XG4gICAgICAgICAgICBpZiAocHJvdG9jb2wgPT09ICdodHRwJykge1xuICAgICAgICAgICAgICAgIHBvcnQgPSAnODAnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm90b2NvbCA9PT0gJ2h0dHBzJykge1xuICAgICAgICAgICAgICAgIHBvcnQgPSAnNDQzJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9ydCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb3RvY29sLFxuICAgICAgICAgICAgc3ViZG9tYWluLFxuICAgICAgICAgICAgZG9tYWluLFxuICAgICAgICAgICAgdGxkLFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgZnJhZ21lbnQsXG4gICAgICAgICAgICBwb3J0LFxuICAgICAgICAgICAgLy8gQWRkaXRpb25hbCBVc2VmdWwgQ29tcG9uZW50c1xuICAgICAgICAgICAgaG9zdDogcGFyc2VkVXJsLmhvc3QsIC8vIGluY2x1ZGVzIGhvc3RuYW1lIGFuZCBwb3J0XG4gICAgICAgICAgICBob3N0bmFtZTogcGFyc2VkVXJsLmhvc3RuYW1lLFxuICAgICAgICAgICAgaHJlZjogcGFyc2VkVXJsLmhyZWYsXG4gICAgICAgICAgICBvcmlnaW46IHBhcnNlZFVybC5vcmlnaW4sXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgVVJMOiAke3VybH1gLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY291bnRfYnlfaG9zdG5hbWUocGFyc2VkSGlzdG9yeUl0ZW1zKSB7XG4gICAgY29uc3QgaG9zdG5hbWVNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICBwYXJzZWRIaXN0b3J5SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgaG9zdG5hbWUgPSBpdGVtLmhvc3RuYW1lO1xuICAgICAgICBpZiAoaG9zdG5hbWUpIHtcbiAgICAgICAgICAgIGlmIChob3N0bmFtZU1hcC5oYXMoaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgaG9zdG5hbWVNYXAuc2V0KGhvc3RuYW1lLCBob3N0bmFtZU1hcC5nZXQoaG9zdG5hbWUpICsgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhvc3RuYW1lTWFwLnNldChob3N0bmFtZSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBob3N0bmFtZU1hcDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9zdE5hbWVUaXRsZU1hcChwYXJzZWRIaXN0b3J5SXRlbXMpIHtcbiAgICBjb25zdCBob3N0bmFtZU1hcCA9IG5ldyBNYXAoKTtcbiAgICBwYXJzZWRIaXN0b3J5SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgaG9zdG5hbWUgPSBpdGVtLmhvc3RuYW1lO1xuICAgICAgICB2YXIgdGl0bGUgPSBpdGVtLnRpdGxlO1xuICAgICAgICBjb25zdCB1cmwgPSBpdGVtLmhyZWY7XG5cbiAgICAgICAgLy8gaWYgdGl0bGUgaXMgZW1wdHksIHVzZSBob3N0bmFtZSBhcyB0aXRsZVxuICAgICAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgICAgICB0aXRsZSA9IGhvc3RuYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWFpbnRhaW4gYSBsaXN0IG9mIHRpdGxlcyBmb3IgZWFjaCBob3N0bmFtZVxuICAgICAgICBpZiAoaG9zdG5hbWVNYXAuaGFzKGhvc3RuYW1lKSkge1xuICAgICAgICAgICAgLy8gaWYgdGl0bGUgaXMgYWxyZWFkeSBpbiB0aGUgbGlzdCwgZG9uJ3QgYWRkIGl0IGFnYWluXG4gICAgICAgICAgICBpZiAoIWhvc3RuYW1lTWFwLmdldChob3N0bmFtZSkuc29tZSh0ID0+IHQudGl0bGUgPT09IHRpdGxlKSkge1xuICAgICAgICAgICAgICAgIGhvc3RuYW1lTWFwLmdldChob3N0bmFtZSkucHVzaCh7dGl0bGUsIHVybH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaG9zdG5hbWVNYXAuc2V0KGhvc3RuYW1lLCBbe3RpdGxlLCB1cmx9XSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBob3N0bmFtZU1hcDtcbn1cblxuXG5cbmV4cG9ydCB7IGdldEhpc3RvcnlXaXRoVG9wTlN0YXRzIH07IiwiLy8gd3JpdGUgYSBmdW5jdGlvbiB0byBleHRyYWN0IGRvbWFpbiBuYW1lIGZyb20gYSB1cmxcbmZ1bmN0aW9uIGV4dHJhY3REb21haW4odXJsKSB7XG4gICAgcmV0dXJuIG5ldyBVUkwodXJsKS5ob3N0bmFtZTtcbiAgfVxuICBcbiAgXG4gIGZ1bmN0aW9uIG1hcmtkb3duVG9IdG1sKG1hcmtkb3duVGV4dCkge1xuICAgIC8vIENvbnZlcnQgYm9sZCB0ZXh0OiAqKnRleHQqKlxuICAgIGxldCBodG1sID0gbWFya2Rvd25UZXh0LnJlcGxhY2UoL1xcKlxcKiguKz8pXFwqXFwqL2csICc8c3Ryb25nPiQxPC9zdHJvbmc+Jyk7XG4gICAgXG4gICAgLy8gQ29udmVydCBpdGFsaWMgdGV4dDogKnRleHQqXG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFwqKC4rPylcXCovZywgJzxlbT4kMTwvZW0+Jyk7XG4gICAgXG4gICAgLy8gQ29udmVydCBidWxsZXQgcG9pbnRzOiAqIGl0ZW1cbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKC9eXFwqICguKykkL2dtLCAnPGxpPiQxPC9saT4nKTtcbiAgICBcbiAgICAvLyBXcmFwIGxpc3QgaXRlbXMgaW4gPHVsPiB0YWdzXG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvKDxsaT4uKjxcXC9saT4pL2csICc8dWw+JDE8L3VsPicpO1xuICBcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG5cbi8qKlxuICogQ2xlYW5zIGFuZCBzYW5pdGl6ZXMgaW5wdXQgdGV4dCBmb3Igc2FmZSBwcm9jZXNzaW5nIHdpdGggbGFuZ3VhZ2UgbW9kZWxzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGhlIGlucHV0IHRleHQgdG8gYmUgc2FuaXRpemVkLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heExlbmd0aCAtIE1heGltdW0gYWxsb3dlZCBsZW5ndGggZm9yIHRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbml0aXplZCB0ZXh0LlxuICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBzYW5pdGl6ZWQgdGV4dCBleGNlZWRzIHRoZSBtYXhpbXVtIGxlbmd0aC5cbiAqL1xuZnVuY3Rpb24gY2xlYW5JbnB1dCh0ZXh0LCBtYXhMZW5ndGggPSA0MDAwKSB7XG4gIC8vIDEuIFJlbW92ZSBDb250cm9sIENoYXJhY3RlcnNcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvW1xceDAwLVxceDFGXFx4N0ZdL2csICcnKTtcblxuICAvLyAyLiBOb3JtYWxpemUgVW5pY29kZVxuICB0ZXh0ID0gdGV4dC5ub3JtYWxpemUoJ05GQycpO1xuXG4gIC8vIDMuIFJlbW92ZSBNYWxmb3JtZWQgVW5pY29kZVxuICB0cnkge1xuICAgICAgZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSh0ZXh0KSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL++/vS9nLCAnJyk7XG4gIH1cblxuICAvLyA0LiBFc2NhcGUgU3BlY2lhbCBTeW1ib2xzXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1tcXFxcYHt9XFxbXFxdKCk8Pjt8Jl0vZywgJ1xcXFwkJicpO1xuXG4gIC8vIDUuIExpbWl0IFJlcGV0aXRpdmUgQ2hhcmFjdGVycyB0byAzXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyguKVxcMXszLH0vZywgJyQxJDEkMScpO1xuXG4gIC8vIDYuIFdoaXRlbGlzdCBBbGxvd2VkIENoYXJhY3RlcnMgKEFscGhhbnVtZXJpY3MgYW5kIGNvbW1vbiBwdW5jdHVhdGlvbilcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvW15hLXpBLVowLTkgLiwhPyctXS9nLCAnJyk7XG5cbiAgLy8gNy4gVHJpbSBFeGNlc3NpdmUgV2hpdGVzcGFjZVxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpO1xuXG4gIC8vIDguIFZhbGlkYXRlIExlbmd0aFxuICBpZiAodGV4dC5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW5wdXQgZXhjZWVkcyBtYXhpbXVtIGFsbG93ZWQgbGVuZ3RoIG9mICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzLmApO1xuICB9XG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cbmV4cG9ydCB7IGV4dHJhY3REb21haW4sIG1hcmtkb3duVG9IdG1sLCBjbGVhbklucHV0IH07IiwiLyogRW5hYmxlIFJlc2l6aW5nICovXG5mdW5jdGlvbiBlbmFibGVSZXNpemluZygpIHtcbiAgICBjb25zdCByZXNpemFibGVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNpemFibGUnKTtcbiAgXG4gICAgcmVzaXphYmxlRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZUhhbmRsZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2l6ZS1oYW5kbGUnKTtcbiAgICAgIGxldCBpc1Jlc2l6aW5nID0gZmFsc2U7XG4gIFxuICAgICAgcmVzaXplSGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaXNSZXNpemluZyA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ3NlLXJlc2l6ZSc7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncmVzaXppbmcnKTtcbiAgXG4gICAgICAgIGNvbnN0IHN0YXJ0V2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBjb25zdCBzdGFydEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBjb25zdCBzdGFydFggPSBlLmNsaWVudFg7XG4gICAgICAgIGNvbnN0IHN0YXJ0WSA9IGUuY2xpZW50WTtcbiAgXG4gICAgICAgIGNvbnN0IG9uTW91c2VNb3ZlID0gKGUpID0+IHtcbiAgICAgICAgICBpZiAoIWlzUmVzaXppbmcpIHJldHVybjtcbiAgXG4gICAgICAgICAgY29uc3QgY3VycmVudFdpZHRoID0gc3RhcnRXaWR0aCArIChlLmNsaWVudFggLSBzdGFydFgpO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRIZWlnaHQgPSBzdGFydEhlaWdodCArIChlLmNsaWVudFkgLSBzdGFydFkpO1xuICBcbiAgICAgICAgICAvLyBTZXQgbWluaW11bSBkaW1lbnNpb25zXG4gICAgICAgICAgY29uc3QgbWluV2lkdGggPSAyMDA7XG4gICAgICAgICAgY29uc3QgbWluSGVpZ2h0ID0gMTAwO1xuICBcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gYCR7TWF0aC5tYXgoY3VycmVudFdpZHRoLCBtaW5XaWR0aCl9cHhgO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7TWF0aC5tYXgoY3VycmVudEhlaWdodCwgbWluSGVpZ2h0KX1weGA7XG4gICAgICAgIH07XG4gIFxuICAgICAgICBjb25zdCBvbk1vdXNlVXAgPSAoKSA9PiB7XG4gICAgICAgICAgaXNSZXNpemluZyA9IGZhbHNlO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncmVzaXppbmcnKTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgXG4gICAgICAgICAgLy8gU2F2ZSBkaW1lbnNpb25zXG4gICAgICAgICAgc2F2ZVdpZGdldFNpemUoZWxlbWVudC5pZCwgZWxlbWVudC5zdHlsZS53aWR0aCwgZWxlbWVudC5zdHlsZS5oZWlnaHQpO1xuICAgICAgICB9O1xuICBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICAgICAgfSk7XG4gIFxuICAgICAgLy8gTG9hZCBzYXZlZCBkaW1lbnNpb25zXG4gICAgICBsb2FkV2lkZ2V0U2l6ZShlbGVtZW50LmlkLCBlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuICBcbiAgLyogU2F2ZSBXaWRnZXQgU2l6ZSAqL1xuICBmdW5jdGlvbiBzYXZlV2lkZ2V0U2l6ZSh3aWRnZXRJZCwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICBpZiAoY2hyb21lICYmIGNocm9tZS5zdG9yYWdlICYmIGNocm9tZS5zdG9yYWdlLmxvY2FsKSB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBbd2lkZ2V0SWRdOiBzaXplIH0sICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYFNhdmVkIHNpemUgZm9yICR7d2lkZ2V0SWR9OmAsIHNpemUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZvciB0ZXN0aW5nIG91dHNpZGUgb2YgQ2hyb21lIGV4dGVuc2lvblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0od2lkZ2V0SWQsIEpTT04uc3RyaW5naWZ5KHNpemUpKTtcbiAgICB9XG4gIH1cbiAgXG4gIC8qIExvYWQgV2lkZ2V0IFNpemUgKi9cbiAgZnVuY3Rpb24gbG9hZFdpZGdldFNpemUod2lkZ2V0SWQsIGVsZW1lbnQpIHtcbiAgICBpZiAoY2hyb21lICYmIGNocm9tZS5zdG9yYWdlICYmIGNocm9tZS5zdG9yYWdlLmxvY2FsKSB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQod2lkZ2V0SWQsIChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdFt3aWRnZXRJZF0pIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gcmVzdWx0W3dpZGdldElkXS53aWR0aDtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IHJlc3VsdFt3aWRnZXRJZF0uaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRm9yIHRlc3Rpbmcgb3V0c2lkZSBvZiBDaHJvbWUgZXh0ZW5zaW9uXG4gICAgICBjb25zdCBzaXplID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh3aWRnZXRJZCkpO1xuICAgICAgaWYgKHNpemUpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IHNpemUud2lkdGg7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBmdW5jdGlvbiBjcmVhdGVPckdldFdpZGdldCh1bmlxdWVJRCwgd2lkZ2V0VGl0bGUpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodW5pcXVlSUQpKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodW5pcXVlSUQpO1xuICAgIH1cbiAgXG4gICAgY29uc3Qgd2lkZ2V0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpZGdldC1jb250YWluZXInKTtcbiAgXG4gICAgLy8gQ3JlYXRlIGEgbmV3IHdpZGdldCBlbGVtZW50XG4gICAgY29uc3QgbmV3V2lkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3V2lkZ2V0LmNsYXNzTmFtZSA9ICd3aWRnZXQgcmVzaXphYmxlJztcbiAgXG4gICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIHRoZSBuZXcgd2lkZ2V0XG4gICAgbmV3V2lkZ2V0LmlkID0gdW5pcXVlSUQ7XG4gIFxuICAgIC8vIFNldCB0aGUgY29udGVudCBvZiB0aGUgbmV3IHdpZGdldFxuICAgIG5ld1dpZGdldC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDI+JHt3aWRnZXRUaXRsZX08L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc2l6ZS1oYW5kbGVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgXG4gICAgLy8gQXBwZW5kIHRoZSBuZXcgd2lkZ2V0IHRvIHRoZSB3aWRnZXQgY29udGFpbmVyXG4gICAgd2lkZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1dpZGdldCk7XG4gIFxuICAgIHJldHVybiBuZXdXaWRnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBhZGp1c3RXaWRnZXRTaXplKHdpZGdldCwgc2VsZWN0b3JzLCBvZmZzZXQpIHtcbiAgICBsZXQgaGVpZ2h0ID0gMDtcbiAgICBcbiAgICBzZWxlY3RvcnMuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gICAgICAgIC8vIFVzZSBxdWVyeVNlbGVjdG9yQWxsIHRvIGhhbmRsZSBtdWx0aXBsZSBlbGVtZW50cyBmb3IgZWFjaCBzZWxlY3RvclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHdpZGdldC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBoZWlnaHQgKz0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiTmV3IGhlaWdodDogXCIsIGhlaWdodCk7XG4gICAgd2lkZ2V0LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodCArIG9mZnNldH1weGA7XG4gIH1cblxuXG5leHBvcnQgeyBlbmFibGVSZXNpemluZywgc2F2ZVdpZGdldFNpemUsIGxvYWRXaWRnZXRTaXplLCBjcmVhdGVPckdldFdpZGdldCwgYWRqdXN0V2lkZ2V0U2l6ZSB9O1xuICAiLCIvLyBkYi5qc1xuXG5sZXQgZGI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvcGVuRGF0YWJhc2UoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGRiKSB7XG4gICAgICByZXNvbHZlKGRiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKCdIaXN0b3J5SW5kZXhlckRCJywgMSk7XG5cbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0RhdGFiYXNlIGVycm9yOicsIGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgIH07XG5cbiAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IChldmVudCkgPT4ge1xuICAgICAgZGIgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgY29uc3Qgb2JqZWN0U3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZSgnaGlzdG9yeScsIHsga2V5UGF0aDogJ2lkJyB9KTtcbiAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KCd1cmwnLCAndXJsJywgeyB1bmlxdWU6IGZhbHNlIH0pO1xuICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ3RpdGxlJywgJ3RpdGxlJywgeyB1bmlxdWU6IGZhbHNlIH0pO1xuICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ3RhZ3MnLCAndGFncycsIHsgdW5pcXVlOiBmYWxzZSwgbXVsdGlFbnRyeTogdHJ1ZSB9KTtcbiAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KCdzdW1tYXJ5JywgJ3N1bW1hcnknLCB7IHVuaXF1ZTogZmFsc2UgfSk7XG4gICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgnbGFzdFZpc2l0VGltZScsICdsYXN0VmlzaXRUaW1lJywgeyB1bmlxdWU6IHRydWUgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkRhdGFiYXNlIHVwZ3JhZGVkXCIpO1xuICAgIH07XG5cbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xuICAgICAgZGIgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgcmVzb2x2ZShkYik7XG4gICAgfTtcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhckRhdGFiYXNlKCkge1xuICBhd2FpdCBvcGVuRGF0YWJhc2UoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFsnaGlzdG9yeSddLCAncmVhZHdyaXRlJyk7XG4gICAgY29uc3Qgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgnaGlzdG9yeScpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBvYmplY3RTdG9yZS5jbGVhcigpO1xuICAgIGNvbnNvbGUubG9nKFwiQ2xlYXJpbmcgZGF0YWJhc2VcIik7XG5cbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9O1xuXG4gICAgcmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRIaXN0b3J5SXRlbShpdGVtKSB7XG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oWydoaXN0b3J5J10sICdyZWFkd3JpdGUnKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gICAgY29uc3QgaW5kZXggPSBvYmplY3RTdG9yZS5pbmRleCgnbGFzdFZpc2l0VGltZScpO1xuXG4gICAgLy8gQ2hlY2sgaWYgYW4gaXRlbSB3aXRoIHRoZSBzYW1lIGxhc3RWaXNpdFRpbWUgYWxyZWFkeSBleGlzdHNcbiAgICBjb25zdCBjaGVja1JlcXVlc3QgPSBpbmRleC5nZXQoaXRlbS5sYXN0VmlzaXRUaW1lKTtcblxuICAgIGNoZWNrUmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQucmVzdWx0KSB7XG4gICAgICAgIC8vIEl0ZW0gd2l0aCB0aGUgc2FtZSBsYXN0VmlzaXRUaW1lIGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSB3aXRoIHRoZSBzYW1lIGxhc3RWaXNpdFRpbWUgYWxyZWFkeSBleGlzdHMsIG5vdCBhZGRpbmcuXCIpO1xuICAgICAgICByZXNvbHZlKCk7IC8vIFJlc29sdmUgd2l0aG91dCBhZGRpbmdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vIGl0ZW0gd2l0aCB0aGUgc2FtZSBsYXN0VmlzaXRUaW1lLCBwcm9jZWVkIHRvIGFkZFxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gb2JqZWN0U3RvcmUucHV0KGl0ZW0pO1xuXG4gICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBIaXN0b3J5IGl0ZW0gYWRkZWRgKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIGl0ZW06JywgZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjaGVja1JlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgbGFzdFZpc2l0VGltZTonLCBldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICAgIHJlamVjdChldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEhpc3RvcnlJdGVtcygpIHtcbiAgYXdhaXQgb3BlbkRhdGFiYXNlKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbJ2hpc3RvcnknXSwgJ3JlYWRvbmx5Jyk7XG4gICAgY29uc3Qgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgnaGlzdG9yeScpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBvYmplY3RTdG9yZS5nZXRBbGwoKTtcblxuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICByZXNvbHZlKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgY29uc29sZS5sb2coXCJBbGwgaGlzdG9yeSBpdGVtcyBmZXRjaGVkXCIpO1xuICAgIH07XG5cbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgIHJlamVjdChldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFsbCBoaXN0b3J5IGl0ZW1zOicsIGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgIH07XG4gIH0pO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhpc3RvcnkgaXRlbSB3aXRoIHRoZSBzcGVjaWZpZWQgbGFzdFZpc2l0VGltZSBleGlzdHMgaW4gdGhlIEluZGV4ZWREQi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsYXN0VmlzaXRUaW1lIC0gVGhlIGxhc3QgdmlzaXQgdGltZSBvZiB0aGUgaGlzdG9yeSBpdGVtLlxuICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IC0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgaXRlbSBleGlzdHMsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrSWZJdGVtRXhpc3RzKGxhc3RWaXNpdFRpbWUpIHtcbiAgLy8gRW5zdXJlIHRoZSBkYXRhYmFzZSBpcyBvcGVuXG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuXG4gIHRyeSB7XG4gICAgLy8gU3RhcnQgYSByZWFkb25seSB0cmFuc2FjdGlvblxuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oWydoaXN0b3J5J10sICdyZWFkb25seScpO1xuICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ2hpc3RvcnknKTtcbiAgICBjb25zdCBpbmRleCA9IG9iamVjdFN0b3JlLmluZGV4KCdsYXN0VmlzaXRUaW1lJyk7XG5cbiAgICAvLyBJbml0aWF0ZSB0aGUgZ2V0IHJlcXVlc3RcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXguZ2V0KGxhc3RWaXNpdFRpbWUpO1xuXG4gICAgLy8gQXdhaXQgdGhlIHJlc3VsdCBvZiB0aGUgZ2V0IHJlcXVlc3RcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpO1xuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBpdGVtIGV4aXN0c1xuICAgIGNvbnN0IGV4aXN0cyA9IHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdCAhPT0gbnVsbDtcblxuICAgIC8vIGNvbnNvbGUubG9nKGBJdGVtIGV4aXN0cyBmb3IgbGFzdFZpc2l0VGltZSAke2xhc3RWaXNpdFRpbWV9OiAke2V4aXN0c31gKTtcblxuICAgIHJldHVybiBleGlzdHM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgRXJyb3IgY2hlY2tpbmcgaWYgaXRlbSBleGlzdHMgZm9yIGxhc3RWaXNpdFRpbWUgJHtsYXN0VmlzaXRUaW1lfTpgLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7IC8vIFByb3BhZ2F0ZSB0aGUgZXJyb3IgdG8gdGhlIGNhbGxlclxuICB9XG59XG5cbi8qKlxuICogUHJvbWlzaWZpZXMgYW4gSW5kZXhlZERCIHJlcXVlc3QuXG4gKiBAcGFyYW0ge0lEQlJlcXVlc3R9IHJlcXVlc3QgLSBUaGUgSW5kZXhlZERCIHJlcXVlc3Qgb2JqZWN0LlxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZXF1ZXN0IHJlc3VsdC5cbiAqL1xuZnVuY3Rpb24gcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKHJlcXVlc3QucmVzdWx0KTtcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gIH0pO1xufVxuXG4vKipcbiAqIElucHV0IHN0YXJ0RGF0ZSBhbmQgZW5kRGF0ZSwgZmV0Y2ggYWxsIGhpc3RvcnkgaXRlbXMgaW4gdGhhdCByYW5nZSwgc2VhcmNoIHdpdGhpbiBsYXN0VmlzaXRUaW1lIGluZGV4IG9mIHRoZSBkYiAgXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIaXN0b3J5SW5UaW1lUmFuZ2Uoc3RhcnREYXRlLCBlbmREYXRlKSB7XG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFsnaGlzdG9yeSddLCAncmVhZG9ubHknKTtcbiAgY29uc3Qgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgnaGlzdG9yeScpO1xuICBjb25zdCBpbmRleCA9IG9iamVjdFN0b3JlLmluZGV4KCdsYXN0VmlzaXRUaW1lJyk7XG4gIGNvbnN0IHJhbmdlID0gSURCS2V5UmFuZ2UuYm91bmQoc3RhcnREYXRlLCBlbmREYXRlKTtcbiAgY29uc3QgcmVxdWVzdCA9IGluZGV4LmdldEFsbChyYW5nZSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgRnVzZSBmcm9tICdmdXNlLmpzJztcbmltcG9ydCB7IGdldEFsbEhpc3RvcnlJdGVtcyB9IGZyb20gJy4uL3V0aWxzL2RiLmpzJztcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRTZWFyY2hSZXN1bHRzKHJhd19xdWVyeSkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gcmF3X3F1ZXJ5LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGhpc3RvcnlJdGVtcyA9IGF3YWl0IGdldEFsbEhpc3RvcnlJdGVtcygpO1xuICAgIGNvbnN0IGZ1c2UgPSBuZXcgRnVzZShoaXN0b3J5SXRlbXMsIHtcbiAgICAgICAga2V5czogW1xuICAgICAgICAgICAgJ3RpdGxlJyxcbiAgICAgICAgICAgICdzdW1tYXJ5JyxcbiAgICAgICAgICAgIHsgbmFtZTogJ3RhZ3MnLCB3ZWlnaHQ6IDAuNSB9XG4gICAgICAgIF0sXG4gICAgICAgIHRocmVzaG9sZDogMC4yXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXN1bHRzID0gZnVzZS5zZWFyY2gocXVlcnkpO1xuICAgIHJldHVybiByZXN1bHRzO1xufVxuXG5mdW5jdGlvbiBnZXRGaWx0ZXJlZEhpc3RvcnlJdGVtcyhoaXN0b3J5SXRlbXMsIHNlbGVjdGVkRmlsdGVycywgZXhjbHVkZUZpbHRlcnMpIHtcbiAgICAvLyBTdGFydCB3aXRoIGFsbCBoaXN0b3J5IGl0ZW1zXG4gICAgbGV0IGZpbHRlcmVkSXRlbXMgPSBoaXN0b3J5SXRlbXM7XG5cbiAgICAvLyBBcHBseSBpbmNsdXNpb24gZmlsdGVycyBpZiBhbnlcbiAgICBpZiAoc2VsZWN0ZWRGaWx0ZXJzICYmIHNlbGVjdGVkRmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyQ2FzZVNlbGVjdGVkRmlsdGVycyA9IHNlbGVjdGVkRmlsdGVycy5tYXAoZmlsdGVyID0+IGZpbHRlci50b0xvd2VyQ2FzZSgpKTtcblxuICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gZmlsdGVyZWRJdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGl0ZW0udGl0bGUgPyBpdGVtLnRpdGxlLnRvTG93ZXJDYXNlKCkgOiAnJztcbiAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSBpdGVtLnN1bW1hcnkgPyBpdGVtLnN1bW1hcnkudG9Mb3dlckNhc2UoKSA6ICcnO1xuICAgICAgICAgICAgY29uc3QgdGFncyA9IGl0ZW0udGFncyA/IGl0ZW0udGFncy5tYXAodGFnID0+IHRhZy50b0xvd2VyQ2FzZSgpKSA6IFtdO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gaXRlbS51cmwgPyBpdGVtLnVybC50b0xvd2VyQ2FzZSgpIDogJyc7XG5cbiAgICAgICAgICAgIHJldHVybiBsb3dlckNhc2VTZWxlY3RlZEZpbHRlcnMuc29tZShmaWx0ZXIgPT4gXG4gICAgICAgICAgICAgICAgdGl0bGUuaW5jbHVkZXMoZmlsdGVyKSB8fFxuICAgICAgICAgICAgICAgIHN1bW1hcnkuaW5jbHVkZXMoZmlsdGVyKSB8fFxuICAgICAgICAgICAgICAgIHRhZ3MuaW5jbHVkZXMoZmlsdGVyKSB8fFxuICAgICAgICAgICAgICAgIHVybC5pbmNsdWRlcyhmaWx0ZXIpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBleGNsdXNpb24gZmlsdGVycyBpZiBhbnlcbiAgICBpZiAoZXhjbHVkZUZpbHRlcnMgJiYgZXhjbHVkZUZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBsb3dlckNhc2VFeGNsdWRlRmlsdGVycyA9IGV4Y2x1ZGVGaWx0ZXJzLm1hcChmaWx0ZXIgPT4gZmlsdGVyLnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgICAgIGZpbHRlcmVkSXRlbXMgPSBmaWx0ZXJlZEl0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS50aXRsZSA/IGl0ZW0udGl0bGUudG9Mb3dlckNhc2UoKSA6ICcnO1xuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGl0ZW0uc3VtbWFyeSA/IGl0ZW0uc3VtbWFyeS50b0xvd2VyQ2FzZSgpIDogJyc7XG4gICAgICAgICAgICBjb25zdCB0YWdzID0gaXRlbS50YWdzID8gaXRlbS50YWdzLm1hcCh0YWcgPT4gdGFnLnRvTG93ZXJDYXNlKCkpIDogW107XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBpdGVtLnVybCA/IGl0ZW0udXJsLnRvTG93ZXJDYXNlKCkgOiAnJztcblxuICAgICAgICAgICAgcmV0dXJuICFsb3dlckNhc2VFeGNsdWRlRmlsdGVycy5zb21lKGZpbHRlciA9PiBcbiAgICAgICAgICAgICAgICB0aXRsZS5pbmNsdWRlcyhmaWx0ZXIpIHx8XG4gICAgICAgICAgICAgICAgc3VtbWFyeS5pbmNsdWRlcyhmaWx0ZXIpIHx8XG4gICAgICAgICAgICAgICAgdGFncy5pbmNsdWRlcyhmaWx0ZXIpIHx8XG4gICAgICAgICAgICAgICAgdXJsLmluY2x1ZGVzKGZpbHRlcilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmaWx0ZXJlZEl0ZW1zO1xufVxuXG5leHBvcnQgeyBnZXRGaWx0ZXJlZEhpc3RvcnlJdGVtcywgZ2V0U2VhcmNoUmVzdWx0cyB9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qKlxuICogRnVzZS5qcyB2Ny4wLjAgLSBMaWdodHdlaWdodCBmdXp6eS1zZWFyY2ggKGh0dHA6Ly9mdXNlanMuaW8pXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDIzIEtpcm8gUmlzayAoaHR0cDovL2tpcm8ubWUpXG4gKiBBbGwgUmlnaHRzIFJlc2VydmVkLiBBcGFjaGUgU29mdHdhcmUgTGljZW5zZSAyLjBcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqL1xuXG5mdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gIHJldHVybiAhQXJyYXkuaXNBcnJheVxuICAgID8gZ2V0VGFnKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICAgIDogQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuLy8gQWRhcHRlZCBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vbG9kYXNoL2xvZGFzaC9ibG9iL21hc3Rlci8uaW50ZXJuYWwvYmFzZVRvU3RyaW5nLmpzXG5jb25zdCBJTkZJTklUWSA9IDEgLyAwO1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuICBsZXQgcmVzdWx0ID0gdmFsdWUgKyAnJztcbiAgcmV0dXJuIHJlc3VsdCA9PSAnMCcgJiYgMSAvIHZhbHVlID09IC1JTkZJTklUWSA/ICctMCcgOiByZXN1bHRcbn1cblxuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSlcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuLy8gQWRhcHRlZCBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vbG9kYXNoL2xvZGFzaC9ibG9iL21hc3Rlci9pc0Jvb2xlYW4uanNcbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlID09PSB0cnVlIHx8XG4gICAgdmFsdWUgPT09IGZhbHNlIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSAnW29iamVjdCBCb29sZWFuXScpXG4gIClcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuLy8gQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZSAhPT0gbnVsbFxufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGxcbn1cblxuZnVuY3Rpb24gaXNCbGFuayh2YWx1ZSkge1xuICByZXR1cm4gIXZhbHVlLnRyaW0oKS5sZW5ndGhcbn1cblxuLy8gR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuLy8gQWRhcHRlZCBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vbG9kYXNoL2xvZGFzaC9ibG9iL21hc3Rlci8uaW50ZXJuYWwvZ2V0VGFnLmpzXG5mdW5jdGlvbiBnZXRUYWcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGxcbiAgICA/IHZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgID8gJ1tvYmplY3QgVW5kZWZpbmVkXSdcbiAgICAgIDogJ1tvYmplY3QgTnVsbF0nXG4gICAgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpXG59XG5cbmNvbnN0IEVYVEVOREVEX1NFQVJDSF9VTkFWQUlMQUJMRSA9ICdFeHRlbmRlZCBzZWFyY2ggaXMgbm90IGF2YWlsYWJsZSc7XG5cbmNvbnN0IElOQ09SUkVDVF9JTkRFWF9UWVBFID0gXCJJbmNvcnJlY3QgJ2luZGV4JyB0eXBlXCI7XG5cbmNvbnN0IExPR0lDQUxfU0VBUkNIX0lOVkFMSURfUVVFUllfRk9SX0tFWSA9IChrZXkpID0+XG4gIGBJbnZhbGlkIHZhbHVlIGZvciBrZXkgJHtrZXl9YDtcblxuY29uc3QgUEFUVEVSTl9MRU5HVEhfVE9PX0xBUkdFID0gKG1heCkgPT5cbiAgYFBhdHRlcm4gbGVuZ3RoIGV4Y2VlZHMgbWF4IG9mICR7bWF4fS5gO1xuXG5jb25zdCBNSVNTSU5HX0tFWV9QUk9QRVJUWSA9IChuYW1lKSA9PiBgTWlzc2luZyAke25hbWV9IHByb3BlcnR5IGluIGtleWA7XG5cbmNvbnN0IElOVkFMSURfS0VZX1dFSUdIVF9WQUxVRSA9IChrZXkpID0+XG4gIGBQcm9wZXJ0eSAnd2VpZ2h0JyBpbiBrZXkgJyR7a2V5fScgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJgO1xuXG5jb25zdCBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5jbGFzcyBLZXlTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKGtleXMpIHtcbiAgICB0aGlzLl9rZXlzID0gW107XG4gICAgdGhpcy5fa2V5TWFwID0ge307XG5cbiAgICBsZXQgdG90YWxXZWlnaHQgPSAwO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGxldCBvYmogPSBjcmVhdGVLZXkoa2V5KTtcblxuICAgICAgdGhpcy5fa2V5cy5wdXNoKG9iaik7XG4gICAgICB0aGlzLl9rZXlNYXBbb2JqLmlkXSA9IG9iajtcblxuICAgICAgdG90YWxXZWlnaHQgKz0gb2JqLndlaWdodDtcbiAgICB9KTtcblxuICAgIC8vIE5vcm1hbGl6ZSB3ZWlnaHRzIHNvIHRoYXQgdGhlaXIgc3VtIGlzIGVxdWFsIHRvIDFcbiAgICB0aGlzLl9rZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAga2V5LndlaWdodCAvPSB0b3RhbFdlaWdodDtcbiAgICB9KTtcbiAgfVxuICBnZXQoa2V5SWQpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5TWFwW2tleUlkXVxuICB9XG4gIGtleXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleXNcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuX2tleXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlS2V5KGtleSkge1xuICBsZXQgcGF0aCA9IG51bGw7XG4gIGxldCBpZCA9IG51bGw7XG4gIGxldCBzcmMgPSBudWxsO1xuICBsZXQgd2VpZ2h0ID0gMTtcbiAgbGV0IGdldEZuID0gbnVsbDtcblxuICBpZiAoaXNTdHJpbmcoa2V5KSB8fCBpc0FycmF5KGtleSkpIHtcbiAgICBzcmMgPSBrZXk7XG4gICAgcGF0aCA9IGNyZWF0ZUtleVBhdGgoa2V5KTtcbiAgICBpZCA9IGNyZWF0ZUtleUlkKGtleSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFoYXNPd24uY2FsbChrZXksICduYW1lJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihNSVNTSU5HX0tFWV9QUk9QRVJUWSgnbmFtZScpKVxuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSBrZXkubmFtZTtcbiAgICBzcmMgPSBuYW1lO1xuXG4gICAgaWYgKGhhc093bi5jYWxsKGtleSwgJ3dlaWdodCcpKSB7XG4gICAgICB3ZWlnaHQgPSBrZXkud2VpZ2h0O1xuXG4gICAgICBpZiAod2VpZ2h0IDw9IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfS0VZX1dFSUdIVF9WQUxVRShuYW1lKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXRoID0gY3JlYXRlS2V5UGF0aChuYW1lKTtcbiAgICBpZCA9IGNyZWF0ZUtleUlkKG5hbWUpO1xuICAgIGdldEZuID0ga2V5LmdldEZuO1xuICB9XG5cbiAgcmV0dXJuIHsgcGF0aCwgaWQsIHdlaWdodCwgc3JjLCBnZXRGbiB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleVBhdGgoa2V5KSB7XG4gIHJldHVybiBpc0FycmF5KGtleSkgPyBrZXkgOiBrZXkuc3BsaXQoJy4nKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXlJZChrZXkpIHtcbiAgcmV0dXJuIGlzQXJyYXkoa2V5KSA/IGtleS5qb2luKCcuJykgOiBrZXlcbn1cblxuZnVuY3Rpb24gZ2V0KG9iaiwgcGF0aCkge1xuICBsZXQgbGlzdCA9IFtdO1xuICBsZXQgYXJyID0gZmFsc2U7XG5cbiAgY29uc3QgZGVlcEdldCA9IChvYmosIHBhdGgsIGluZGV4KSA9PiB7XG4gICAgaWYgKCFpc0RlZmluZWQob2JqKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICghcGF0aFtpbmRleF0pIHtcbiAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gcGF0aCBsZWZ0LCB3ZSd2ZSBhcnJpdmVkIGF0IHRoZSBvYmplY3Qgd2UgY2FyZSBhYm91dC5cbiAgICAgIGxpc3QucHVzaChvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQga2V5ID0gcGF0aFtpbmRleF07XG5cbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG5cbiAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGxhc3QgdmFsdWUgaW4gdGhlIHBhdGgsIGFuZCBpZiBpdCdzIGEgc3RyaW5nL251bWJlci9ib29sLFxuICAgICAgLy8gYWRkIGl0IHRvIHRoZSBsaXN0XG4gICAgICBpZiAoXG4gICAgICAgIGluZGV4ID09PSBwYXRoLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgKGlzU3RyaW5nKHZhbHVlKSB8fCBpc051bWJlcih2YWx1ZSkgfHwgaXNCb29sZWFuKHZhbHVlKSlcbiAgICAgICkge1xuICAgICAgICBsaXN0LnB1c2godG9TdHJpbmcodmFsdWUpKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgYXJyID0gdHJ1ZTtcbiAgICAgICAgLy8gU2VhcmNoIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgIGRlZXBHZXQodmFsdWVbaV0sIHBhdGgsIGluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGF0aC5sZW5ndGgpIHtcbiAgICAgICAgLy8gQW4gb2JqZWN0LiBSZWN1cnNlIGZ1cnRoZXIuXG4gICAgICAgIGRlZXBHZXQodmFsdWUsIHBhdGgsIGluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IChzaW5jZSBwYXRoIHVzZWQgdG8gYmUgYSBzdHJpbmcpXG4gIGRlZXBHZXQob2JqLCBpc1N0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGgsIDApO1xuXG4gIHJldHVybiBhcnIgPyBsaXN0IDogbGlzdFswXVxufVxuXG5jb25zdCBNYXRjaE9wdGlvbnMgPSB7XG4gIC8vIFdoZXRoZXIgdGhlIG1hdGNoZXMgc2hvdWxkIGJlIGluY2x1ZGVkIGluIHRoZSByZXN1bHQgc2V0LiBXaGVuIGB0cnVlYCwgZWFjaCByZWNvcmQgaW4gdGhlIHJlc3VsdFxuICAvLyBzZXQgd2lsbCBpbmNsdWRlIHRoZSBpbmRpY2VzIG9mIHRoZSBtYXRjaGVkIGNoYXJhY3RlcnMuXG4gIC8vIFRoZXNlIGNhbiBjb25zZXF1ZW50bHkgYmUgdXNlZCBmb3IgaGlnaGxpZ2h0aW5nIHB1cnBvc2VzLlxuICBpbmNsdWRlTWF0Y2hlczogZmFsc2UsXG4gIC8vIFdoZW4gYHRydWVgLCB0aGUgbWF0Y2hpbmcgZnVuY3Rpb24gd2lsbCBjb250aW51ZSB0byB0aGUgZW5kIG9mIGEgc2VhcmNoIHBhdHRlcm4gZXZlbiBpZlxuICAvLyBhIHBlcmZlY3QgbWF0Y2ggaGFzIGFscmVhZHkgYmVlbiBsb2NhdGVkIGluIHRoZSBzdHJpbmcuXG4gIGZpbmRBbGxNYXRjaGVzOiBmYWxzZSxcbiAgLy8gTWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IG11c3QgYmUgbWF0Y2hlZCBiZWZvcmUgYSByZXN1bHQgaXMgY29uc2lkZXJlZCBhIG1hdGNoXG4gIG1pbk1hdGNoQ2hhckxlbmd0aDogMVxufTtcblxuY29uc3QgQmFzaWNPcHRpb25zID0ge1xuICAvLyBXaGVuIGB0cnVlYCwgdGhlIGFsZ29yaXRobSBjb250aW51ZXMgc2VhcmNoaW5nIHRvIHRoZSBlbmQgb2YgdGhlIGlucHV0IGV2ZW4gaWYgYSBwZXJmZWN0XG4gIC8vIG1hdGNoIGlzIGZvdW5kIGJlZm9yZSB0aGUgZW5kIG9mIHRoZSBzYW1lIGlucHV0LlxuICBpc0Nhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAvLyBXaGVuIHRydWUsIHRoZSBtYXRjaGluZyBmdW5jdGlvbiB3aWxsIGNvbnRpbnVlIHRvIHRoZSBlbmQgb2YgYSBzZWFyY2ggcGF0dGVybiBldmVuIGlmXG4gIGluY2x1ZGVTY29yZTogZmFsc2UsXG4gIC8vIExpc3Qgb2YgcHJvcGVydGllcyB0aGF0IHdpbGwgYmUgc2VhcmNoZWQuIFRoaXMgYWxzbyBzdXBwb3J0cyBuZXN0ZWQgcHJvcGVydGllcy5cbiAga2V5czogW10sXG4gIC8vIFdoZXRoZXIgdG8gc29ydCB0aGUgcmVzdWx0IGxpc3QsIGJ5IHNjb3JlXG4gIHNob3VsZFNvcnQ6IHRydWUsXG4gIC8vIERlZmF1bHQgc29ydCBmdW5jdGlvbjogc29ydCBieSBhc2NlbmRpbmcgc2NvcmUsIGFzY2VuZGluZyBpbmRleFxuICBzb3J0Rm46IChhLCBiKSA9PlxuICAgIGEuc2NvcmUgPT09IGIuc2NvcmUgPyAoYS5pZHggPCBiLmlkeCA/IC0xIDogMSkgOiBhLnNjb3JlIDwgYi5zY29yZSA/IC0xIDogMVxufTtcblxuY29uc3QgRnV6enlPcHRpb25zID0ge1xuICAvLyBBcHByb3hpbWF0ZWx5IHdoZXJlIGluIHRoZSB0ZXh0IGlzIHRoZSBwYXR0ZXJuIGV4cGVjdGVkIHRvIGJlIGZvdW5kP1xuICBsb2NhdGlvbjogMCxcbiAgLy8gQXQgd2hhdCBwb2ludCBkb2VzIHRoZSBtYXRjaCBhbGdvcml0aG0gZ2l2ZSB1cC4gQSB0aHJlc2hvbGQgb2YgJzAuMCcgcmVxdWlyZXMgYSBwZXJmZWN0IG1hdGNoXG4gIC8vIChvZiBib3RoIGxldHRlcnMgYW5kIGxvY2F0aW9uKSwgYSB0aHJlc2hvbGQgb2YgJzEuMCcgd291bGQgbWF0Y2ggYW55dGhpbmcuXG4gIHRocmVzaG9sZDogMC42LFxuICAvLyBEZXRlcm1pbmVzIGhvdyBjbG9zZSB0aGUgbWF0Y2ggbXVzdCBiZSB0byB0aGUgZnV6enkgbG9jYXRpb24gKHNwZWNpZmllZCBhYm92ZSkuXG4gIC8vIEFuIGV4YWN0IGxldHRlciBtYXRjaCB3aGljaCBpcyAnZGlzdGFuY2UnIGNoYXJhY3RlcnMgYXdheSBmcm9tIHRoZSBmdXp6eSBsb2NhdGlvblxuICAvLyB3b3VsZCBzY29yZSBhcyBhIGNvbXBsZXRlIG1pc21hdGNoLiBBIGRpc3RhbmNlIG9mICcwJyByZXF1aXJlcyB0aGUgbWF0Y2ggYmUgYXRcbiAgLy8gdGhlIGV4YWN0IGxvY2F0aW9uIHNwZWNpZmllZCwgYSB0aHJlc2hvbGQgb2YgJzEwMDAnIHdvdWxkIHJlcXVpcmUgYSBwZXJmZWN0IG1hdGNoXG4gIC8vIHRvIGJlIHdpdGhpbiA4MDAgY2hhcmFjdGVycyBvZiB0aGUgZnV6enkgbG9jYXRpb24gdG8gYmUgZm91bmQgdXNpbmcgYSAwLjggdGhyZXNob2xkLlxuICBkaXN0YW5jZTogMTAwXG59O1xuXG5jb25zdCBBZHZhbmNlZE9wdGlvbnMgPSB7XG4gIC8vIFdoZW4gYHRydWVgLCBpdCBlbmFibGVzIHRoZSB1c2Ugb2YgdW5peC1saWtlIHNlYXJjaCBjb21tYW5kc1xuICB1c2VFeHRlbmRlZFNlYXJjaDogZmFsc2UsXG4gIC8vIFRoZSBnZXQgZnVuY3Rpb24gdG8gdXNlIHdoZW4gZmV0Y2hpbmcgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgLy8gVGhlIGRlZmF1bHQgd2lsbCBzZWFyY2ggbmVzdGVkIHBhdGhzICppZSBmb28uYmFyLmJheipcbiAgZ2V0Rm46IGdldCxcbiAgLy8gV2hlbiBgdHJ1ZWAsIHNlYXJjaCB3aWxsIGlnbm9yZSBgbG9jYXRpb25gIGFuZCBgZGlzdGFuY2VgLCBzbyBpdCB3b24ndCBtYXR0ZXJcbiAgLy8gd2hlcmUgaW4gdGhlIHN0cmluZyB0aGUgcGF0dGVybiBhcHBlYXJzLlxuICAvLyBNb3JlIGluZm86IGh0dHBzOi8vZnVzZWpzLmlvL2NvbmNlcHRzL3Njb3JpbmctdGhlb3J5Lmh0bWwjZnV6emluZXNzLXNjb3JlXG4gIGlnbm9yZUxvY2F0aW9uOiBmYWxzZSxcbiAgLy8gV2hlbiBgdHJ1ZWAsIHRoZSBjYWxjdWxhdGlvbiBmb3IgdGhlIHJlbGV2YW5jZSBzY29yZSAodXNlZCBmb3Igc29ydGluZykgd2lsbFxuICAvLyBpZ25vcmUgdGhlIGZpZWxkLWxlbmd0aCBub3JtLlxuICAvLyBNb3JlIGluZm86IGh0dHBzOi8vZnVzZWpzLmlvL2NvbmNlcHRzL3Njb3JpbmctdGhlb3J5Lmh0bWwjZmllbGQtbGVuZ3RoLW5vcm1cbiAgaWdub3JlRmllbGROb3JtOiBmYWxzZSxcbiAgLy8gVGhlIHdlaWdodCB0byBkZXRlcm1pbmUgaG93IG11Y2ggZmllbGQgbGVuZ3RoIG5vcm0gZWZmZWN0cyBzY29yaW5nLlxuICBmaWVsZE5vcm1XZWlnaHQ6IDFcbn07XG5cbnZhciBDb25maWcgPSB7XG4gIC4uLkJhc2ljT3B0aW9ucyxcbiAgLi4uTWF0Y2hPcHRpb25zLFxuICAuLi5GdXp6eU9wdGlvbnMsXG4gIC4uLkFkdmFuY2VkT3B0aW9uc1xufTtcblxuY29uc3QgU1BBQ0UgPSAvW14gXSsvZztcblxuLy8gRmllbGQtbGVuZ3RoIG5vcm06IHRoZSBzaG9ydGVyIHRoZSBmaWVsZCwgdGhlIGhpZ2hlciB0aGUgd2VpZ2h0LlxuLy8gU2V0IHRvIDMgZGVjaW1hbHMgdG8gcmVkdWNlIGluZGV4IHNpemUuXG5mdW5jdGlvbiBub3JtKHdlaWdodCA9IDEsIG1hbnRpc3NhID0gMykge1xuICBjb25zdCBjYWNoZSA9IG5ldyBNYXAoKTtcbiAgY29uc3QgbSA9IE1hdGgucG93KDEwLCBtYW50aXNzYSk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQodmFsdWUpIHtcbiAgICAgIGNvbnN0IG51bVRva2VucyA9IHZhbHVlLm1hdGNoKFNQQUNFKS5sZW5ndGg7XG5cbiAgICAgIGlmIChjYWNoZS5oYXMobnVtVG9rZW5zKSkge1xuICAgICAgICByZXR1cm4gY2FjaGUuZ2V0KG51bVRva2VucylcbiAgICAgIH1cblxuICAgICAgLy8gRGVmYXVsdCBmdW5jdGlvbiBpcyAxL3NxcnQoeCksIHdlaWdodCBtYWtlcyB0aGF0IHZhcmlhYmxlXG4gICAgICBjb25zdCBub3JtID0gMSAvIE1hdGgucG93KG51bVRva2VucywgMC41ICogd2VpZ2h0KTtcblxuICAgICAgLy8gSW4gcGxhY2Ugb2YgYHRvRml4ZWQobWFudGlzc2EpYCwgZm9yIGZhc3RlciBjb21wdXRhdGlvblxuICAgICAgY29uc3QgbiA9IHBhcnNlRmxvYXQoTWF0aC5yb3VuZChub3JtICogbSkgLyBtKTtcblxuICAgICAgY2FjaGUuc2V0KG51bVRva2Vucywgbik7XG5cbiAgICAgIHJldHVybiBuXG4gICAgfSxcbiAgICBjbGVhcigpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIEZ1c2VJbmRleCB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBnZXRGbiA9IENvbmZpZy5nZXRGbixcbiAgICBmaWVsZE5vcm1XZWlnaHQgPSBDb25maWcuZmllbGROb3JtV2VpZ2h0XG4gIH0gPSB7fSkge1xuICAgIHRoaXMubm9ybSA9IG5vcm0oZmllbGROb3JtV2VpZ2h0LCAzKTtcbiAgICB0aGlzLmdldEZuID0gZ2V0Rm47XG4gICAgdGhpcy5pc0NyZWF0ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0SW5kZXhSZWNvcmRzKCk7XG4gIH1cbiAgc2V0U291cmNlcyhkb2NzID0gW10pIHtcbiAgICB0aGlzLmRvY3MgPSBkb2NzO1xuICB9XG4gIHNldEluZGV4UmVjb3JkcyhyZWNvcmRzID0gW10pIHtcbiAgICB0aGlzLnJlY29yZHMgPSByZWNvcmRzO1xuICB9XG4gIHNldEtleXMoa2V5cyA9IFtdKSB7XG4gICAgdGhpcy5rZXlzID0ga2V5cztcbiAgICB0aGlzLl9rZXlzTWFwID0ge307XG4gICAga2V5cy5mb3JFYWNoKChrZXksIGlkeCkgPT4ge1xuICAgICAgdGhpcy5fa2V5c01hcFtrZXkuaWRdID0gaWR4O1xuICAgIH0pO1xuICB9XG4gIGNyZWF0ZSgpIHtcbiAgICBpZiAodGhpcy5pc0NyZWF0ZWQgfHwgIXRoaXMuZG9jcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaXNDcmVhdGVkID0gdHJ1ZTtcblxuICAgIC8vIExpc3QgaXMgQXJyYXk8U3RyaW5nPlxuICAgIGlmIChpc1N0cmluZyh0aGlzLmRvY3NbMF0pKSB7XG4gICAgICB0aGlzLmRvY3MuZm9yRWFjaCgoZG9jLCBkb2NJbmRleCkgPT4ge1xuICAgICAgICB0aGlzLl9hZGRTdHJpbmcoZG9jLCBkb2NJbmRleCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTGlzdCBpcyBBcnJheTxPYmplY3Q+XG4gICAgICB0aGlzLmRvY3MuZm9yRWFjaCgoZG9jLCBkb2NJbmRleCkgPT4ge1xuICAgICAgICB0aGlzLl9hZGRPYmplY3QoZG9jLCBkb2NJbmRleCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLm5vcm0uY2xlYXIoKTtcbiAgfVxuICAvLyBBZGRzIGEgZG9jIHRvIHRoZSBlbmQgb2YgdGhlIGluZGV4XG4gIGFkZChkb2MpIHtcbiAgICBjb25zdCBpZHggPSB0aGlzLnNpemUoKTtcblxuICAgIGlmIChpc1N0cmluZyhkb2MpKSB7XG4gICAgICB0aGlzLl9hZGRTdHJpbmcoZG9jLCBpZHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hZGRPYmplY3QoZG9jLCBpZHgpO1xuICAgIH1cbiAgfVxuICAvLyBSZW1vdmVzIHRoZSBkb2MgYXQgdGhlIHNwZWNpZmllZCBpbmRleCBvZiB0aGUgaW5kZXhcbiAgcmVtb3ZlQXQoaWR4KSB7XG4gICAgdGhpcy5yZWNvcmRzLnNwbGljZShpZHgsIDEpO1xuXG4gICAgLy8gQ2hhbmdlIHJlZiBpbmRleCBvZiBldmVyeSBzdWJzcXVlbnQgZG9jXG4gICAgZm9yIChsZXQgaSA9IGlkeCwgbGVuID0gdGhpcy5zaXplKCk7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgdGhpcy5yZWNvcmRzW2ldLmkgLT0gMTtcbiAgICB9XG4gIH1cbiAgZ2V0VmFsdWVGb3JJdGVtQXRLZXlJZChpdGVtLCBrZXlJZCkge1xuICAgIHJldHVybiBpdGVtW3RoaXMuX2tleXNNYXBba2V5SWRdXVxuICB9XG4gIHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjb3Jkcy5sZW5ndGhcbiAgfVxuICBfYWRkU3RyaW5nKGRvYywgZG9jSW5kZXgpIHtcbiAgICBpZiAoIWlzRGVmaW5lZChkb2MpIHx8IGlzQmxhbmsoZG9jKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHJlY29yZCA9IHtcbiAgICAgIHY6IGRvYyxcbiAgICAgIGk6IGRvY0luZGV4LFxuICAgICAgbjogdGhpcy5ub3JtLmdldChkb2MpXG4gICAgfTtcblxuICAgIHRoaXMucmVjb3Jkcy5wdXNoKHJlY29yZCk7XG4gIH1cbiAgX2FkZE9iamVjdChkb2MsIGRvY0luZGV4KSB7XG4gICAgbGV0IHJlY29yZCA9IHsgaTogZG9jSW5kZXgsICQ6IHt9IH07XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkga2V5IChpLmUsIHBhdGgpLCBhbmQgZmV0Y2ggdGhlIHZhbHVlIGF0IHRoYXQga2V5XG4gICAgdGhpcy5rZXlzLmZvckVhY2goKGtleSwga2V5SW5kZXgpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGtleS5nZXRGbiA/IGtleS5nZXRGbihkb2MpIDogdGhpcy5nZXRGbihkb2MsIGtleS5wYXRoKTtcblxuICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgbGV0IHN1YlJlY29yZHMgPSBbXTtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBbeyBuZXN0ZWRBcnJJbmRleDogLTEsIHZhbHVlIH1dO1xuXG4gICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCB7IG5lc3RlZEFyckluZGV4LCB2YWx1ZSB9ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiAhaXNCbGFuayh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCBzdWJSZWNvcmQgPSB7XG4gICAgICAgICAgICAgIHY6IHZhbHVlLFxuICAgICAgICAgICAgICBpOiBuZXN0ZWRBcnJJbmRleCxcbiAgICAgICAgICAgICAgbjogdGhpcy5ub3JtLmdldCh2YWx1ZSlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHN1YlJlY29yZHMucHVzaChzdWJSZWNvcmQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0sIGspID0+IHtcbiAgICAgICAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgICAgICAgbmVzdGVkQXJySW5kZXg6IGssXG4gICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgO1xuICAgICAgICB9XG4gICAgICAgIHJlY29yZC4kW2tleUluZGV4XSA9IHN1YlJlY29yZHM7XG4gICAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiAhaXNCbGFuayh2YWx1ZSkpIHtcbiAgICAgICAgbGV0IHN1YlJlY29yZCA9IHtcbiAgICAgICAgICB2OiB2YWx1ZSxcbiAgICAgICAgICBuOiB0aGlzLm5vcm0uZ2V0KHZhbHVlKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlY29yZC4kW2tleUluZGV4XSA9IHN1YlJlY29yZDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucmVjb3Jkcy5wdXNoKHJlY29yZCk7XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXlzOiB0aGlzLmtleXMsXG4gICAgICByZWNvcmRzOiB0aGlzLnJlY29yZHNcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5kZXgoXG4gIGtleXMsXG4gIGRvY3MsXG4gIHsgZ2V0Rm4gPSBDb25maWcuZ2V0Rm4sIGZpZWxkTm9ybVdlaWdodCA9IENvbmZpZy5maWVsZE5vcm1XZWlnaHQgfSA9IHt9XG4pIHtcbiAgY29uc3QgbXlJbmRleCA9IG5ldyBGdXNlSW5kZXgoeyBnZXRGbiwgZmllbGROb3JtV2VpZ2h0IH0pO1xuICBteUluZGV4LnNldEtleXMoa2V5cy5tYXAoY3JlYXRlS2V5KSk7XG4gIG15SW5kZXguc2V0U291cmNlcyhkb2NzKTtcbiAgbXlJbmRleC5jcmVhdGUoKTtcbiAgcmV0dXJuIG15SW5kZXhcbn1cblxuZnVuY3Rpb24gcGFyc2VJbmRleChcbiAgZGF0YSxcbiAgeyBnZXRGbiA9IENvbmZpZy5nZXRGbiwgZmllbGROb3JtV2VpZ2h0ID0gQ29uZmlnLmZpZWxkTm9ybVdlaWdodCB9ID0ge31cbikge1xuICBjb25zdCB7IGtleXMsIHJlY29yZHMgfSA9IGRhdGE7XG4gIGNvbnN0IG15SW5kZXggPSBuZXcgRnVzZUluZGV4KHsgZ2V0Rm4sIGZpZWxkTm9ybVdlaWdodCB9KTtcbiAgbXlJbmRleC5zZXRLZXlzKGtleXMpO1xuICBteUluZGV4LnNldEluZGV4UmVjb3JkcyhyZWNvcmRzKTtcbiAgcmV0dXJuIG15SW5kZXhcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVNjb3JlJDEoXG4gIHBhdHRlcm4sXG4gIHtcbiAgICBlcnJvcnMgPSAwLFxuICAgIGN1cnJlbnRMb2NhdGlvbiA9IDAsXG4gICAgZXhwZWN0ZWRMb2NhdGlvbiA9IDAsXG4gICAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2UsXG4gICAgaWdub3JlTG9jYXRpb24gPSBDb25maWcuaWdub3JlTG9jYXRpb25cbiAgfSA9IHt9XG4pIHtcbiAgY29uc3QgYWNjdXJhY3kgPSBlcnJvcnMgLyBwYXR0ZXJuLmxlbmd0aDtcblxuICBpZiAoaWdub3JlTG9jYXRpb24pIHtcbiAgICByZXR1cm4gYWNjdXJhY3lcbiAgfVxuXG4gIGNvbnN0IHByb3hpbWl0eSA9IE1hdGguYWJzKGV4cGVjdGVkTG9jYXRpb24gLSBjdXJyZW50TG9jYXRpb24pO1xuXG4gIGlmICghZGlzdGFuY2UpIHtcbiAgICAvLyBEb2RnZSBkaXZpZGUgYnkgemVybyBlcnJvci5cbiAgICByZXR1cm4gcHJveGltaXR5ID8gMS4wIDogYWNjdXJhY3lcbiAgfVxuXG4gIHJldHVybiBhY2N1cmFjeSArIHByb3hpbWl0eSAvIGRpc3RhbmNlXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRNYXNrVG9JbmRpY2VzKFxuICBtYXRjaG1hc2sgPSBbXSxcbiAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aFxuKSB7XG4gIGxldCBpbmRpY2VzID0gW107XG4gIGxldCBzdGFydCA9IC0xO1xuICBsZXQgZW5kID0gLTE7XG4gIGxldCBpID0gMDtcblxuICBmb3IgKGxldCBsZW4gPSBtYXRjaG1hc2subGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBsZXQgbWF0Y2ggPSBtYXRjaG1hc2tbaV07XG4gICAgaWYgKG1hdGNoICYmIHN0YXJ0ID09PSAtMSkge1xuICAgICAgc3RhcnQgPSBpO1xuICAgIH0gZWxzZSBpZiAoIW1hdGNoICYmIHN0YXJ0ICE9PSAtMSkge1xuICAgICAgZW5kID0gaSAtIDE7XG4gICAgICBpZiAoZW5kIC0gc3RhcnQgKyAxID49IG1pbk1hdGNoQ2hhckxlbmd0aCkge1xuICAgICAgICBpbmRpY2VzLnB1c2goW3N0YXJ0LCBlbmRdKTtcbiAgICAgIH1cbiAgICAgIHN0YXJ0ID0gLTE7XG4gICAgfVxuICB9XG5cbiAgLy8gKGktMSAtIHN0YXJ0KSArIDEgPT4gaSAtIHN0YXJ0XG4gIGlmIChtYXRjaG1hc2tbaSAtIDFdICYmIGkgLSBzdGFydCA+PSBtaW5NYXRjaENoYXJMZW5ndGgpIHtcbiAgICBpbmRpY2VzLnB1c2goW3N0YXJ0LCBpIC0gMV0pO1xuICB9XG5cbiAgcmV0dXJuIGluZGljZXNcbn1cblxuLy8gTWFjaGluZSB3b3JkIHNpemVcbmNvbnN0IE1BWF9CSVRTID0gMzI7XG5cbmZ1bmN0aW9uIHNlYXJjaChcbiAgdGV4dCxcbiAgcGF0dGVybixcbiAgcGF0dGVybkFscGhhYmV0LFxuICB7XG4gICAgbG9jYXRpb24gPSBDb25maWcubG9jYXRpb24sXG4gICAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2UsXG4gICAgdGhyZXNob2xkID0gQ29uZmlnLnRocmVzaG9sZCxcbiAgICBmaW5kQWxsTWF0Y2hlcyA9IENvbmZpZy5maW5kQWxsTWF0Y2hlcyxcbiAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uXG4gIH0gPSB7fVxuKSB7XG4gIGlmIChwYXR0ZXJuLmxlbmd0aCA+IE1BWF9CSVRTKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFBBVFRFUk5fTEVOR1RIX1RPT19MQVJHRShNQVhfQklUUykpXG4gIH1cblxuICBjb25zdCBwYXR0ZXJuTGVuID0gcGF0dGVybi5sZW5ndGg7XG4gIC8vIFNldCBzdGFydGluZyBsb2NhdGlvbiBhdCBiZWdpbm5pbmcgdGV4dCBhbmQgaW5pdGlhbGl6ZSB0aGUgYWxwaGFiZXQuXG4gIGNvbnN0IHRleHRMZW4gPSB0ZXh0Lmxlbmd0aDtcbiAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZW4gbG9jYXRpb24gPiB0ZXh0Lmxlbmd0aFxuICBjb25zdCBleHBlY3RlZExvY2F0aW9uID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obG9jYXRpb24sIHRleHRMZW4pKTtcbiAgLy8gSGlnaGVzdCBzY29yZSBiZXlvbmQgd2hpY2ggd2UgZ2l2ZSB1cC5cbiAgbGV0IGN1cnJlbnRUaHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gIC8vIElzIHRoZXJlIGEgbmVhcmJ5IGV4YWN0IG1hdGNoPyAoc3BlZWR1cClcbiAgbGV0IGJlc3RMb2NhdGlvbiA9IGV4cGVjdGVkTG9jYXRpb247XG5cbiAgLy8gUGVyZm9ybWFuY2U6IG9ubHkgY29tcHV0ZXIgbWF0Y2hlcyB3aGVuIHRoZSBtaW5NYXRjaENoYXJMZW5ndGggPiAxXG4gIC8vIE9SIGlmIGBpbmNsdWRlTWF0Y2hlc2AgaXMgdHJ1ZS5cbiAgY29uc3QgY29tcHV0ZU1hdGNoZXMgPSBtaW5NYXRjaENoYXJMZW5ndGggPiAxIHx8IGluY2x1ZGVNYXRjaGVzO1xuICAvLyBBIG1hc2sgb2YgdGhlIG1hdGNoZXMsIHVzZWQgZm9yIGJ1aWxkaW5nIHRoZSBpbmRpY2VzXG4gIGNvbnN0IG1hdGNoTWFzayA9IGNvbXB1dGVNYXRjaGVzID8gQXJyYXkodGV4dExlbikgOiBbXTtcblxuICBsZXQgaW5kZXg7XG5cbiAgLy8gR2V0IGFsbCBleGFjdCBtYXRjaGVzLCBoZXJlIGZvciBzcGVlZCB1cFxuICB3aGlsZSAoKGluZGV4ID0gdGV4dC5pbmRleE9mKHBhdHRlcm4sIGJlc3RMb2NhdGlvbikpID4gLTEpIHtcbiAgICBsZXQgc2NvcmUgPSBjb21wdXRlU2NvcmUkMShwYXR0ZXJuLCB7XG4gICAgICBjdXJyZW50TG9jYXRpb246IGluZGV4LFxuICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgaWdub3JlTG9jYXRpb25cbiAgICB9KTtcblxuICAgIGN1cnJlbnRUaHJlc2hvbGQgPSBNYXRoLm1pbihzY29yZSwgY3VycmVudFRocmVzaG9sZCk7XG4gICAgYmVzdExvY2F0aW9uID0gaW5kZXggKyBwYXR0ZXJuTGVuO1xuXG4gICAgaWYgKGNvbXB1dGVNYXRjaGVzKSB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IHBhdHRlcm5MZW4pIHtcbiAgICAgICAgbWF0Y2hNYXNrW2luZGV4ICsgaV0gPSAxO1xuICAgICAgICBpICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUmVzZXQgdGhlIGJlc3QgbG9jYXRpb25cbiAgYmVzdExvY2F0aW9uID0gLTE7XG5cbiAgbGV0IGxhc3RCaXRBcnIgPSBbXTtcbiAgbGV0IGZpbmFsU2NvcmUgPSAxO1xuICBsZXQgYmluTWF4ID0gcGF0dGVybkxlbiArIHRleHRMZW47XG5cbiAgY29uc3QgbWFzayA9IDEgPDwgKHBhdHRlcm5MZW4gLSAxKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdHRlcm5MZW47IGkgKz0gMSkge1xuICAgIC8vIFNjYW4gZm9yIHRoZSBiZXN0IG1hdGNoOyBlYWNoIGl0ZXJhdGlvbiBhbGxvd3MgZm9yIG9uZSBtb3JlIGVycm9yLlxuICAgIC8vIFJ1biBhIGJpbmFyeSBzZWFyY2ggdG8gZGV0ZXJtaW5lIGhvdyBmYXIgZnJvbSB0aGUgbWF0Y2ggbG9jYXRpb24gd2UgY2FuIHN0cmF5XG4gICAgLy8gYXQgdGhpcyBlcnJvciBsZXZlbC5cbiAgICBsZXQgYmluTWluID0gMDtcbiAgICBsZXQgYmluTWlkID0gYmluTWF4O1xuXG4gICAgd2hpbGUgKGJpbk1pbiA8IGJpbk1pZCkge1xuICAgICAgY29uc3Qgc2NvcmUgPSBjb21wdXRlU2NvcmUkMShwYXR0ZXJuLCB7XG4gICAgICAgIGVycm9yczogaSxcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBleHBlY3RlZExvY2F0aW9uICsgYmluTWlkLFxuICAgICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgaWdub3JlTG9jYXRpb25cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc2NvcmUgPD0gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgICBiaW5NaW4gPSBiaW5NaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaW5NYXggPSBiaW5NaWQ7XG4gICAgICB9XG5cbiAgICAgIGJpbk1pZCA9IE1hdGguZmxvb3IoKGJpbk1heCAtIGJpbk1pbikgLyAyICsgYmluTWluKTtcbiAgICB9XG5cbiAgICAvLyBVc2UgdGhlIHJlc3VsdCBmcm9tIHRoaXMgaXRlcmF0aW9uIGFzIHRoZSBtYXhpbXVtIGZvciB0aGUgbmV4dC5cbiAgICBiaW5NYXggPSBiaW5NaWQ7XG5cbiAgICBsZXQgc3RhcnQgPSBNYXRoLm1heCgxLCBleHBlY3RlZExvY2F0aW9uIC0gYmluTWlkICsgMSk7XG4gICAgbGV0IGZpbmlzaCA9IGZpbmRBbGxNYXRjaGVzXG4gICAgICA/IHRleHRMZW5cbiAgICAgIDogTWF0aC5taW4oZXhwZWN0ZWRMb2NhdGlvbiArIGJpbk1pZCwgdGV4dExlbikgKyBwYXR0ZXJuTGVuO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgYml0IGFycmF5XG4gICAgbGV0IGJpdEFyciA9IEFycmF5KGZpbmlzaCArIDIpO1xuXG4gICAgYml0QXJyW2ZpbmlzaCArIDFdID0gKDEgPDwgaSkgLSAxO1xuXG4gICAgZm9yIChsZXQgaiA9IGZpbmlzaDsgaiA+PSBzdGFydDsgaiAtPSAxKSB7XG4gICAgICBsZXQgY3VycmVudExvY2F0aW9uID0gaiAtIDE7XG4gICAgICBsZXQgY2hhck1hdGNoID0gcGF0dGVybkFscGhhYmV0W3RleHQuY2hhckF0KGN1cnJlbnRMb2NhdGlvbildO1xuXG4gICAgICBpZiAoY29tcHV0ZU1hdGNoZXMpIHtcbiAgICAgICAgLy8gU3BlZWQgdXA6IHF1aWNrIGJvb2wgdG8gaW50IGNvbnZlcnNpb24gKGkuZSwgYGNoYXJNYXRjaCA/IDEgOiAwYClcbiAgICAgICAgbWF0Y2hNYXNrW2N1cnJlbnRMb2NhdGlvbl0gPSArISFjaGFyTWF0Y2g7XG4gICAgICB9XG5cbiAgICAgIC8vIEZpcnN0IHBhc3M6IGV4YWN0IG1hdGNoXG4gICAgICBiaXRBcnJbal0gPSAoKGJpdEFycltqICsgMV0gPDwgMSkgfCAxKSAmIGNoYXJNYXRjaDtcblxuICAgICAgLy8gU3Vic2VxdWVudCBwYXNzZXM6IGZ1enp5IG1hdGNoXG4gICAgICBpZiAoaSkge1xuICAgICAgICBiaXRBcnJbal0gfD1cbiAgICAgICAgICAoKGxhc3RCaXRBcnJbaiArIDFdIHwgbGFzdEJpdEFycltqXSkgPDwgMSkgfCAxIHwgbGFzdEJpdEFycltqICsgMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChiaXRBcnJbal0gJiBtYXNrKSB7XG4gICAgICAgIGZpbmFsU2NvcmUgPSBjb21wdXRlU2NvcmUkMShwYXR0ZXJuLCB7XG4gICAgICAgICAgZXJyb3JzOiBpLFxuICAgICAgICAgIGN1cnJlbnRMb2NhdGlvbixcbiAgICAgICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICAgIGRpc3RhbmNlLFxuICAgICAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRoaXMgbWF0Y2ggd2lsbCBhbG1vc3QgY2VydGFpbmx5IGJlIGJldHRlciB0aGFuIGFueSBleGlzdGluZyBtYXRjaC5cbiAgICAgICAgLy8gQnV0IGNoZWNrIGFueXdheS5cbiAgICAgICAgaWYgKGZpbmFsU2NvcmUgPD0gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgICAgIC8vIEluZGVlZCBpdCBpc1xuICAgICAgICAgIGN1cnJlbnRUaHJlc2hvbGQgPSBmaW5hbFNjb3JlO1xuICAgICAgICAgIGJlc3RMb2NhdGlvbiA9IGN1cnJlbnRMb2NhdGlvbjtcblxuICAgICAgICAgIC8vIEFscmVhZHkgcGFzc2VkIGBsb2NgLCBkb3duaGlsbCBmcm9tIGhlcmUgb24gaW4uXG4gICAgICAgICAgaWYgKGJlc3RMb2NhdGlvbiA8PSBleHBlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFdoZW4gcGFzc2luZyBgYmVzdExvY2F0aW9uYCwgZG9uJ3QgZXhjZWVkIG91ciBjdXJyZW50IGRpc3RhbmNlIGZyb20gYGV4cGVjdGVkTG9jYXRpb25gLlxuICAgICAgICAgIHN0YXJ0ID0gTWF0aC5tYXgoMSwgMiAqIGV4cGVjdGVkTG9jYXRpb24gLSBiZXN0TG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm8gaG9wZSBmb3IgYSAoYmV0dGVyKSBtYXRjaCBhdCBncmVhdGVyIGVycm9yIGxldmVscy5cbiAgICBjb25zdCBzY29yZSA9IGNvbXB1dGVTY29yZSQxKHBhdHRlcm4sIHtcbiAgICAgIGVycm9yczogaSArIDEsXG4gICAgICBjdXJyZW50TG9jYXRpb246IGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH0pO1xuXG4gICAgaWYgKHNjb3JlID4gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBsYXN0Qml0QXJyID0gYml0QXJyO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIGlzTWF0Y2g6IGJlc3RMb2NhdGlvbiA+PSAwLFxuICAgIC8vIENvdW50IGV4YWN0IG1hdGNoZXMgKHRob3NlIHdpdGggYSBzY29yZSBvZiAwKSB0byBiZSBcImFsbW9zdFwiIGV4YWN0XG4gICAgc2NvcmU6IE1hdGgubWF4KDAuMDAxLCBmaW5hbFNjb3JlKVxuICB9O1xuXG4gIGlmIChjb21wdXRlTWF0Y2hlcykge1xuICAgIGNvbnN0IGluZGljZXMgPSBjb252ZXJ0TWFza1RvSW5kaWNlcyhtYXRjaE1hc2ssIG1pbk1hdGNoQ2hhckxlbmd0aCk7XG4gICAgaWYgKCFpbmRpY2VzLmxlbmd0aCkge1xuICAgICAgcmVzdWx0LmlzTWF0Y2ggPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICByZXN1bHQuaW5kaWNlcyA9IGluZGljZXM7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXR0ZXJuQWxwaGFiZXQocGF0dGVybikge1xuICBsZXQgbWFzayA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwYXR0ZXJuLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgY29uc3QgY2hhciA9IHBhdHRlcm4uY2hhckF0KGkpO1xuICAgIG1hc2tbY2hhcl0gPSAobWFza1tjaGFyXSB8fCAwKSB8ICgxIDw8IChsZW4gLSBpIC0gMSkpO1xuICB9XG5cbiAgcmV0dXJuIG1hc2tcbn1cblxuY2xhc3MgQml0YXBTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwYXR0ZXJuLFxuICAgIHtcbiAgICAgIGxvY2F0aW9uID0gQ29uZmlnLmxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkID0gQ29uZmlnLnRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlID0gQ29uZmlnLmRpc3RhbmNlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMgPSBDb25maWcuaW5jbHVkZU1hdGNoZXMsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyA9IENvbmZpZy5maW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpc0Nhc2VTZW5zaXRpdmUgPSBDb25maWcuaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaWdub3JlTG9jYXRpb24gPSBDb25maWcuaWdub3JlTG9jYXRpb25cbiAgICB9ID0ge31cbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgbG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH07XG5cbiAgICB0aGlzLnBhdHRlcm4gPSBpc0Nhc2VTZW5zaXRpdmUgPyBwYXR0ZXJuIDogcGF0dGVybi50b0xvd2VyQ2FzZSgpO1xuXG4gICAgdGhpcy5jaHVua3MgPSBbXTtcblxuICAgIGlmICghdGhpcy5wYXR0ZXJuLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWRkQ2h1bmsgPSAocGF0dGVybiwgc3RhcnRJbmRleCkgPT4ge1xuICAgICAgdGhpcy5jaHVua3MucHVzaCh7XG4gICAgICAgIHBhdHRlcm4sXG4gICAgICAgIGFscGhhYmV0OiBjcmVhdGVQYXR0ZXJuQWxwaGFiZXQocGF0dGVybiksXG4gICAgICAgIHN0YXJ0SW5kZXhcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBsZW4gPSB0aGlzLnBhdHRlcm4ubGVuZ3RoO1xuXG4gICAgaWYgKGxlbiA+IE1BWF9CSVRTKSB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBjb25zdCByZW1haW5kZXIgPSBsZW4gJSBNQVhfQklUUztcbiAgICAgIGNvbnN0IGVuZCA9IGxlbiAtIHJlbWFpbmRlcjtcblxuICAgICAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICAgICAgYWRkQ2h1bmsodGhpcy5wYXR0ZXJuLnN1YnN0cihpLCBNQVhfQklUUyksIGkpO1xuICAgICAgICBpICs9IE1BWF9CSVRTO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVtYWluZGVyKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBsZW4gLSBNQVhfQklUUztcbiAgICAgICAgYWRkQ2h1bmsodGhpcy5wYXR0ZXJuLnN1YnN0cihzdGFydEluZGV4KSwgc3RhcnRJbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENodW5rKHRoaXMucGF0dGVybiwgMCk7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoSW4odGV4dCkge1xuICAgIGNvbnN0IHsgaXNDYXNlU2Vuc2l0aXZlLCBpbmNsdWRlTWF0Y2hlcyB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgaWYgKCFpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgIHRleHQgPSB0ZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLy8gRXhhY3QgbWF0Y2hcbiAgICBpZiAodGhpcy5wYXR0ZXJuID09PSB0ZXh0KSB7XG4gICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICBpc01hdGNoOiB0cnVlLFxuICAgICAgICBzY29yZTogMFxuICAgICAgfTtcblxuICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgIHJlc3VsdC5pbmRpY2VzID0gW1swLCB0ZXh0Lmxlbmd0aCAtIDFdXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgdXNlIEJpdGFwIGFsZ29yaXRobVxuICAgIGNvbnN0IHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGxldCBhbGxJbmRpY2VzID0gW107XG4gICAgbGV0IHRvdGFsU2NvcmUgPSAwO1xuICAgIGxldCBoYXNNYXRjaGVzID0gZmFsc2U7XG5cbiAgICB0aGlzLmNodW5rcy5mb3JFYWNoKCh7IHBhdHRlcm4sIGFscGhhYmV0LCBzdGFydEluZGV4IH0pID0+IHtcbiAgICAgIGNvbnN0IHsgaXNNYXRjaCwgc2NvcmUsIGluZGljZXMgfSA9IHNlYXJjaCh0ZXh0LCBwYXR0ZXJuLCBhbHBoYWJldCwge1xuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24gKyBzdGFydEluZGV4LFxuICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgdGhyZXNob2xkLFxuICAgICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgICAgaWdub3JlTG9jYXRpb25cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICBoYXNNYXRjaGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdG90YWxTY29yZSArPSBzY29yZTtcblxuICAgICAgaWYgKGlzTWF0Y2ggJiYgaW5kaWNlcykge1xuICAgICAgICBhbGxJbmRpY2VzID0gWy4uLmFsbEluZGljZXMsIC4uLmluZGljZXNdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgIGlzTWF0Y2g6IGhhc01hdGNoZXMsXG4gICAgICBzY29yZTogaGFzTWF0Y2hlcyA/IHRvdGFsU2NvcmUgLyB0aGlzLmNodW5rcy5sZW5ndGggOiAxXG4gICAgfTtcblxuICAgIGlmIChoYXNNYXRjaGVzICYmIGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICByZXN1bHQuaW5kaWNlcyA9IGFsbEluZGljZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmNsYXNzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuICB9XG4gIHN0YXRpYyBpc011bHRpTWF0Y2gocGF0dGVybikge1xuICAgIHJldHVybiBnZXRNYXRjaChwYXR0ZXJuLCB0aGlzLm11bHRpUmVnZXgpXG4gIH1cbiAgc3RhdGljIGlzU2luZ2xlTWF0Y2gocGF0dGVybikge1xuICAgIHJldHVybiBnZXRNYXRjaChwYXR0ZXJuLCB0aGlzLnNpbmdsZVJlZ2V4KVxuICB9XG4gIHNlYXJjaCgvKnRleHQqLykge31cbn1cblxuZnVuY3Rpb24gZ2V0TWF0Y2gocGF0dGVybiwgZXhwKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwYXR0ZXJuLm1hdGNoKGV4cCk7XG4gIHJldHVybiBtYXRjaGVzID8gbWF0Y2hlc1sxXSA6IG51bGxcbn1cblxuLy8gVG9rZW46ICdmaWxlXG5cbmNsYXNzIEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZXhhY3QnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXj1cIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL149KC4qKSQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpc01hdGNoID0gdGV4dCA9PT0gdGhpcy5wYXR0ZXJuO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogWzAsIHRoaXMucGF0dGVybi5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb2tlbjogIWZpcmVcblxuY2xhc3MgSW52ZXJzZUV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaW52ZXJzZS1leGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eIVwiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiEoLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGV4dC5pbmRleE9mKHRoaXMucGF0dGVybik7XG4gICAgY29uc3QgaXNNYXRjaCA9IGluZGV4ID09PSAtMTtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbi8vIFRva2VuOiBeZmlsZVxuXG5jbGFzcyBQcmVmaXhFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ3ByZWZpeC1leGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eXFxeXCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eXFxeKC4qKSQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpc01hdGNoID0gdGV4dC5zdGFydHNXaXRoKHRoaXMucGF0dGVybik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbMCwgdGhpcy5wYXR0ZXJuLmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbi8vIFRva2VuOiAhXmZpcmVcblxuY2xhc3MgSW52ZXJzZVByZWZpeEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaW52ZXJzZS1wcmVmaXgtZXhhY3QnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiFcXF5cIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14hXFxeKC4qKSQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpc01hdGNoID0gIXRleHQuc3RhcnRzV2l0aCh0aGlzLnBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogWzAsIHRleHQubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuLy8gVG9rZW46IC5maWxlJFxuXG5jbGFzcyBTdWZmaXhFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ3N1ZmZpeC1leGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eXCIoLiopXCJcXCQkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eKC4qKVxcJCQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpc01hdGNoID0gdGV4dC5lbmRzV2l0aCh0aGlzLnBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogW3RleHQubGVuZ3RoIC0gdGhpcy5wYXR0ZXJuLmxlbmd0aCwgdGV4dC5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb2tlbjogIS5maWxlJFxuXG5jbGFzcyBJbnZlcnNlU3VmZml4RXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdpbnZlcnNlLXN1ZmZpeC1leGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eIVwiKC4qKVwiXFwkJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiEoLiopXFwkJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSAhdGV4dC5lbmRzV2l0aCh0aGlzLnBhdHRlcm4pO1xuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbmNsYXNzIEZ1enp5TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwYXR0ZXJuLFxuICAgIHtcbiAgICAgIGxvY2F0aW9uID0gQ29uZmlnLmxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkID0gQ29uZmlnLnRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlID0gQ29uZmlnLmRpc3RhbmNlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMgPSBDb25maWcuaW5jbHVkZU1hdGNoZXMsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyA9IENvbmZpZy5maW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpc0Nhc2VTZW5zaXRpdmUgPSBDb25maWcuaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaWdub3JlTG9jYXRpb24gPSBDb25maWcuaWdub3JlTG9jYXRpb25cbiAgICB9ID0ge31cbiAgKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gICAgdGhpcy5fYml0YXBTZWFyY2ggPSBuZXcgQml0YXBTZWFyY2gocGF0dGVybiwge1xuICAgICAgbG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH0pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2Z1enp5J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL15cIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14oLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIHJldHVybiB0aGlzLl9iaXRhcFNlYXJjaC5zZWFyY2hJbih0ZXh0KVxuICB9XG59XG5cbi8vIFRva2VuOiAnZmlsZVxuXG5jbGFzcyBJbmNsdWRlTWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaW5jbHVkZSdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eJ1wiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXicoLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGxldCBsb2NhdGlvbiA9IDA7XG4gICAgbGV0IGluZGV4O1xuXG4gICAgY29uc3QgaW5kaWNlcyA9IFtdO1xuICAgIGNvbnN0IHBhdHRlcm5MZW4gPSB0aGlzLnBhdHRlcm4ubGVuZ3RoO1xuXG4gICAgLy8gR2V0IGFsbCBleGFjdCBtYXRjaGVzXG4gICAgd2hpbGUgKChpbmRleCA9IHRleHQuaW5kZXhPZih0aGlzLnBhdHRlcm4sIGxvY2F0aW9uKSkgPiAtMSkge1xuICAgICAgbG9jYXRpb24gPSBpbmRleCArIHBhdHRlcm5MZW47XG4gICAgICBpbmRpY2VzLnB1c2goW2luZGV4LCBsb2NhdGlvbiAtIDFdKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc01hdGNoID0gISFpbmRpY2VzLmxlbmd0aDtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXNcbiAgICB9XG4gIH1cbn1cblxuLy8g4p2XT3JkZXIgaXMgaW1wb3J0YW50LiBETyBOT1QgQ0hBTkdFLlxuY29uc3Qgc2VhcmNoZXJzID0gW1xuICBFeGFjdE1hdGNoLFxuICBJbmNsdWRlTWF0Y2gsXG4gIFByZWZpeEV4YWN0TWF0Y2gsXG4gIEludmVyc2VQcmVmaXhFeGFjdE1hdGNoLFxuICBJbnZlcnNlU3VmZml4RXhhY3RNYXRjaCxcbiAgU3VmZml4RXhhY3RNYXRjaCxcbiAgSW52ZXJzZUV4YWN0TWF0Y2gsXG4gIEZ1enp5TWF0Y2hcbl07XG5cbmNvbnN0IHNlYXJjaGVyc0xlbiA9IHNlYXJjaGVycy5sZW5ndGg7XG5cbi8vIFJlZ2V4IHRvIHNwbGl0IGJ5IHNwYWNlcywgYnV0IGtlZXAgYW55dGhpbmcgaW4gcXVvdGVzIHRvZ2V0aGVyXG5jb25zdCBTUEFDRV9SRSA9IC8gKyg/PSg/OlteXFxcIl0qXFxcIlteXFxcIl0qXFxcIikqW15cXFwiXSokKS87XG5jb25zdCBPUl9UT0tFTiA9ICd8JztcblxuLy8gUmV0dXJuIGEgMkQgYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHF1ZXJ5LCBmb3Igc2ltcGxlciBwYXJzaW5nLlxuLy8gRXhhbXBsZTpcbi8vIFwiXmNvcmUgZ28kIHwgcmIkIHwgcHkkIHh5JFwiID0+IFtbXCJeY29yZVwiLCBcImdvJFwiXSwgW1wicmIkXCJdLCBbXCJweSRcIiwgXCJ4eSRcIl1dXG5mdW5jdGlvbiBwYXJzZVF1ZXJ5KHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gcGF0dGVybi5zcGxpdChPUl9UT0tFTikubWFwKChpdGVtKSA9PiB7XG4gICAgbGV0IHF1ZXJ5ID0gaXRlbVxuICAgICAgLnRyaW0oKVxuICAgICAgLnNwbGl0KFNQQUNFX1JFKVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAmJiAhIWl0ZW0udHJpbSgpKTtcblxuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHF1ZXJ5Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBxdWVyeUl0ZW0gPSBxdWVyeVtpXTtcblxuICAgICAgLy8gMS4gSGFuZGxlIG11bHRpcGxlIHF1ZXJ5IG1hdGNoIChpLmUsIG9uY2UgdGhhdCBhcmUgcXVvdGVkLCBsaWtlIGBcImhlbGxvIHdvcmxkXCJgKVxuICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICBsZXQgaWR4ID0gLTE7XG4gICAgICB3aGlsZSAoIWZvdW5kICYmICsraWR4IDwgc2VhcmNoZXJzTGVuKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaGVyID0gc2VhcmNoZXJzW2lkeF07XG4gICAgICAgIGxldCB0b2tlbiA9IHNlYXJjaGVyLmlzTXVsdGlNYXRjaChxdWVyeUl0ZW0pO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobmV3IHNlYXJjaGVyKHRva2VuLCBvcHRpb25zKSk7XG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyLiBIYW5kbGUgc2luZ2xlIHF1ZXJ5IG1hdGNoZXMgKGkuZSwgb25jZSB0aGF0IGFyZSAqbm90KiBxdW90ZWQpXG4gICAgICBpZHggPSAtMTtcbiAgICAgIHdoaWxlICgrK2lkeCA8IHNlYXJjaGVyc0xlbikge1xuICAgICAgICBjb25zdCBzZWFyY2hlciA9IHNlYXJjaGVyc1tpZHhdO1xuICAgICAgICBsZXQgdG9rZW4gPSBzZWFyY2hlci5pc1NpbmdsZU1hdGNoKHF1ZXJ5SXRlbSk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChuZXcgc2VhcmNoZXIodG9rZW4sIG9wdGlvbnMpKTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfSlcbn1cblxuLy8gVGhlc2UgZXh0ZW5kZWQgbWF0Y2hlcnMgY2FuIHJldHVybiBhbiBhcnJheSBvZiBtYXRjaGVzLCBhcyBvcHBvc2VkXG4vLyB0byBhIHNpbmdsIG1hdGNoXG5jb25zdCBNdWx0aU1hdGNoU2V0ID0gbmV3IFNldChbRnV6enlNYXRjaC50eXBlLCBJbmNsdWRlTWF0Y2gudHlwZV0pO1xuXG4vKipcbiAqIENvbW1hbmQtbGlrZSBzZWFyY2hpbmdcbiAqID09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiBHaXZlbiBtdWx0aXBsZSBzZWFyY2ggdGVybXMgZGVsaW1pdGVkIGJ5IHNwYWNlcy5lLmcuIGBeanNjcmlwdCAucHl0aG9uJCBydWJ5ICFqYXZhYCxcbiAqIHNlYXJjaCBpbiBhIGdpdmVuIHRleHQuXG4gKlxuICogU2VhcmNoIHN5bnRheDpcbiAqXG4gKiB8IFRva2VuICAgICAgIHwgTWF0Y2ggdHlwZSAgICAgICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGBqc2NyaXB0YCAgIHwgZnV6enktbWF0Y2ggICAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IGZ1enp5IG1hdGNoIGBqc2NyaXB0YCAgICAgICB8XG4gKiB8IGA9c2NoZW1lYCAgIHwgZXhhY3QtbWF0Y2ggICAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IGFyZSBgc2NoZW1lYCAgICAgICAgICAgICAgICB8XG4gKiB8IGAncHl0aG9uYCAgIHwgaW5jbHVkZS1tYXRjaCAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IGluY2x1ZGUgYHB5dGhvbmAgICAgICAgICAgICB8XG4gKiB8IGAhcnVieWAgICAgIHwgaW52ZXJzZS1leGFjdC1tYXRjaCAgICAgICAgfCBJdGVtcyB0aGF0IGRvIG5vdCBpbmNsdWRlIGBydWJ5YCAgICAgICB8XG4gKiB8IGBeamF2YWAgICAgIHwgcHJlZml4LWV4YWN0LW1hdGNoICAgICAgICAgfCBJdGVtcyB0aGF0IHN0YXJ0IHdpdGggYGphdmFgICAgICAgICAgICB8XG4gKiB8IGAhXmVhcmxhbmdgIHwgaW52ZXJzZS1wcmVmaXgtZXhhY3QtbWF0Y2ggfCBJdGVtcyB0aGF0IGRvIG5vdCBzdGFydCB3aXRoIGBlYXJsYW5nYCB8XG4gKiB8IGAuanMkYCAgICAgIHwgc3VmZml4LWV4YWN0LW1hdGNoICAgICAgICAgfCBJdGVtcyB0aGF0IGVuZCB3aXRoIGAuanNgICAgICAgICAgICAgICB8XG4gKiB8IGAhLmdvJGAgICAgIHwgaW52ZXJzZS1zdWZmaXgtZXhhY3QtbWF0Y2ggfCBJdGVtcyB0aGF0IGRvIG5vdCBlbmQgd2l0aCBgLmdvYCAgICAgICB8XG4gKlxuICogQSBzaW5nbGUgcGlwZSBjaGFyYWN0ZXIgYWN0cyBhcyBhbiBPUiBvcGVyYXRvci4gRm9yIGV4YW1wbGUsIHRoZSBmb2xsb3dpbmdcbiAqIHF1ZXJ5IG1hdGNoZXMgZW50cmllcyB0aGF0IHN0YXJ0IHdpdGggYGNvcmVgIGFuZCBlbmQgd2l0aCBlaXRoZXJgZ29gLCBgcmJgLFxuICogb3JgcHlgLlxuICpcbiAqIGBgYFxuICogXmNvcmUgZ28kIHwgcmIkIHwgcHkkXG4gKiBgYGBcbiAqL1xuY2xhc3MgRXh0ZW5kZWRTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwYXR0ZXJuLFxuICAgIHtcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvbixcbiAgICAgIGZpbmRBbGxNYXRjaGVzID0gQ29uZmlnLmZpbmRBbGxNYXRjaGVzLFxuICAgICAgbG9jYXRpb24gPSBDb25maWcubG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQgPSBDb25maWcudGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2VcbiAgICB9ID0ge31cbiAgKSB7XG4gICAgdGhpcy5xdWVyeSA9IG51bGw7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIGlnbm9yZUxvY2F0aW9uLFxuICAgICAgbG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZVxuICAgIH07XG5cbiAgICB0aGlzLnBhdHRlcm4gPSBpc0Nhc2VTZW5zaXRpdmUgPyBwYXR0ZXJuIDogcGF0dGVybi50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMucXVlcnkgPSBwYXJzZVF1ZXJ5KHRoaXMucGF0dGVybiwgdGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyBjb25kaXRpb24oXywgb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLnVzZUV4dGVuZGVkU2VhcmNoXG4gIH1cblxuICBzZWFyY2hJbih0ZXh0KSB7XG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLnF1ZXJ5O1xuXG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNNYXRjaDogZmFsc2UsXG4gICAgICAgIHNjb3JlOiAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBpbmNsdWRlTWF0Y2hlcywgaXNDYXNlU2Vuc2l0aXZlIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICB0ZXh0ID0gaXNDYXNlU2Vuc2l0aXZlID8gdGV4dCA6IHRleHQudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBudW1NYXRjaGVzID0gMDtcbiAgICBsZXQgYWxsSW5kaWNlcyA9IFtdO1xuICAgIGxldCB0b3RhbFNjb3JlID0gMDtcblxuICAgIC8vIE9Sc1xuICAgIGZvciAobGV0IGkgPSAwLCBxTGVuID0gcXVlcnkubGVuZ3RoOyBpIDwgcUxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzZWFyY2hlcnMgPSBxdWVyeVtpXTtcblxuICAgICAgLy8gUmVzZXQgaW5kaWNlc1xuICAgICAgYWxsSW5kaWNlcy5sZW5ndGggPSAwO1xuICAgICAgbnVtTWF0Y2hlcyA9IDA7XG5cbiAgICAgIC8vIEFORHNcbiAgICAgIGZvciAobGV0IGogPSAwLCBwTGVuID0gc2VhcmNoZXJzLmxlbmd0aDsgaiA8IHBMZW47IGogKz0gMSkge1xuICAgICAgICBjb25zdCBzZWFyY2hlciA9IHNlYXJjaGVyc1tqXTtcbiAgICAgICAgY29uc3QgeyBpc01hdGNoLCBpbmRpY2VzLCBzY29yZSB9ID0gc2VhcmNoZXIuc2VhcmNoKHRleHQpO1xuXG4gICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgbnVtTWF0Y2hlcyArPSAxO1xuICAgICAgICAgIHRvdGFsU2NvcmUgKz0gc2NvcmU7XG4gICAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gc2VhcmNoZXIuY29uc3RydWN0b3IudHlwZTtcbiAgICAgICAgICAgIGlmIChNdWx0aU1hdGNoU2V0Lmhhcyh0eXBlKSkge1xuICAgICAgICAgICAgICBhbGxJbmRpY2VzID0gWy4uLmFsbEluZGljZXMsIC4uLmluZGljZXNdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWxsSW5kaWNlcy5wdXNoKGluZGljZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b3RhbFNjb3JlID0gMDtcbiAgICAgICAgICBudW1NYXRjaGVzID0gMDtcbiAgICAgICAgICBhbGxJbmRpY2VzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPUiBjb25kaXRpb24sIHNvIGlmIFRSVUUsIHJldHVyblxuICAgICAgaWYgKG51bU1hdGNoZXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgICBpc01hdGNoOiB0cnVlLFxuICAgICAgICAgIHNjb3JlOiB0b3RhbFNjb3JlIC8gbnVtTWF0Y2hlc1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICAgIHJlc3VsdC5pbmRpY2VzID0gYWxsSW5kaWNlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3RoaW5nIHdhcyBtYXRjaGVkXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2g6IGZhbHNlLFxuICAgICAgc2NvcmU6IDFcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcmVnaXN0ZXJlZFNlYXJjaGVycyA9IFtdO1xuXG5mdW5jdGlvbiByZWdpc3RlciguLi5hcmdzKSB7XG4gIHJlZ2lzdGVyZWRTZWFyY2hlcnMucHVzaCguLi5hcmdzKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VhcmNoZXIocGF0dGVybiwgb3B0aW9ucykge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVnaXN0ZXJlZFNlYXJjaGVycy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGxldCBzZWFyY2hlckNsYXNzID0gcmVnaXN0ZXJlZFNlYXJjaGVyc1tpXTtcbiAgICBpZiAoc2VhcmNoZXJDbGFzcy5jb25kaXRpb24ocGF0dGVybiwgb3B0aW9ucykpIHtcbiAgICAgIHJldHVybiBuZXcgc2VhcmNoZXJDbGFzcyhwYXR0ZXJuLCBvcHRpb25zKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgQml0YXBTZWFyY2gocGF0dGVybiwgb3B0aW9ucylcbn1cblxuY29uc3QgTG9naWNhbE9wZXJhdG9yID0ge1xuICBBTkQ6ICckYW5kJyxcbiAgT1I6ICckb3InXG59O1xuXG5jb25zdCBLZXlUeXBlID0ge1xuICBQQVRIOiAnJHBhdGgnLFxuICBQQVRURVJOOiAnJHZhbCdcbn07XG5cbmNvbnN0IGlzRXhwcmVzc2lvbiA9IChxdWVyeSkgPT5cbiAgISEocXVlcnlbTG9naWNhbE9wZXJhdG9yLkFORF0gfHwgcXVlcnlbTG9naWNhbE9wZXJhdG9yLk9SXSk7XG5cbmNvbnN0IGlzUGF0aCA9IChxdWVyeSkgPT4gISFxdWVyeVtLZXlUeXBlLlBBVEhdO1xuXG5jb25zdCBpc0xlYWYgPSAocXVlcnkpID0+XG4gICFpc0FycmF5KHF1ZXJ5KSAmJiBpc09iamVjdChxdWVyeSkgJiYgIWlzRXhwcmVzc2lvbihxdWVyeSk7XG5cbmNvbnN0IGNvbnZlcnRUb0V4cGxpY2l0ID0gKHF1ZXJ5KSA9PiAoe1xuICBbTG9naWNhbE9wZXJhdG9yLkFORF06IE9iamVjdC5rZXlzKHF1ZXJ5KS5tYXAoKGtleSkgPT4gKHtcbiAgICBba2V5XTogcXVlcnlba2V5XVxuICB9KSlcbn0pO1xuXG4vLyBXaGVuIGBhdXRvYCBpcyBgdHJ1ZWAsIHRoZSBwYXJzZSBmdW5jdGlvbiB3aWxsIGluZmVyIGFuZCBpbml0aWFsaXplIGFuZCBhZGRcbi8vIHRoZSBhcHByb3ByaWF0ZSBgU2VhcmNoZXJgIGluc3RhbmNlXG5mdW5jdGlvbiBwYXJzZShxdWVyeSwgb3B0aW9ucywgeyBhdXRvID0gdHJ1ZSB9ID0ge30pIHtcbiAgY29uc3QgbmV4dCA9IChxdWVyeSkgPT4ge1xuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMocXVlcnkpO1xuXG4gICAgY29uc3QgaXNRdWVyeVBhdGggPSBpc1BhdGgocXVlcnkpO1xuXG4gICAgaWYgKCFpc1F1ZXJ5UGF0aCAmJiBrZXlzLmxlbmd0aCA+IDEgJiYgIWlzRXhwcmVzc2lvbihxdWVyeSkpIHtcbiAgICAgIHJldHVybiBuZXh0KGNvbnZlcnRUb0V4cGxpY2l0KHF1ZXJ5KSlcbiAgICB9XG5cbiAgICBpZiAoaXNMZWFmKHF1ZXJ5KSkge1xuICAgICAgY29uc3Qga2V5ID0gaXNRdWVyeVBhdGggPyBxdWVyeVtLZXlUeXBlLlBBVEhdIDoga2V5c1swXTtcblxuICAgICAgY29uc3QgcGF0dGVybiA9IGlzUXVlcnlQYXRoID8gcXVlcnlbS2V5VHlwZS5QQVRURVJOXSA6IHF1ZXJ5W2tleV07XG5cbiAgICAgIGlmICghaXNTdHJpbmcocGF0dGVybikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKExPR0lDQUxfU0VBUkNIX0lOVkFMSURfUVVFUllfRk9SX0tFWShrZXkpKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIGtleUlkOiBjcmVhdGVLZXlJZChrZXkpLFxuICAgICAgICBwYXR0ZXJuXG4gICAgICB9O1xuXG4gICAgICBpZiAoYXV0bykge1xuICAgICAgICBvYmouc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihwYXR0ZXJuLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9ialxuICAgIH1cblxuICAgIGxldCBub2RlID0ge1xuICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgb3BlcmF0b3I6IGtleXNbMF1cbiAgICB9O1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlba2V5XTtcblxuICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBub2RlLmNoaWxkcmVuLnB1c2gobmV4dChpdGVtKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVcbiAgfTtcblxuICBpZiAoIWlzRXhwcmVzc2lvbihxdWVyeSkpIHtcbiAgICBxdWVyeSA9IGNvbnZlcnRUb0V4cGxpY2l0KHF1ZXJ5KTtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHF1ZXJ5KVxufVxuXG4vLyBQcmFjdGljYWwgc2NvcmluZyBmdW5jdGlvblxuZnVuY3Rpb24gY29tcHV0ZVNjb3JlKFxuICByZXN1bHRzLFxuICB7IGlnbm9yZUZpZWxkTm9ybSA9IENvbmZpZy5pZ25vcmVGaWVsZE5vcm0gfVxuKSB7XG4gIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgbGV0IHRvdGFsU2NvcmUgPSAxO1xuXG4gICAgcmVzdWx0Lm1hdGNoZXMuZm9yRWFjaCgoeyBrZXksIG5vcm0sIHNjb3JlIH0pID0+IHtcbiAgICAgIGNvbnN0IHdlaWdodCA9IGtleSA/IGtleS53ZWlnaHQgOiBudWxsO1xuXG4gICAgICB0b3RhbFNjb3JlICo9IE1hdGgucG93KFxuICAgICAgICBzY29yZSA9PT0gMCAmJiB3ZWlnaHQgPyBOdW1iZXIuRVBTSUxPTiA6IHNjb3JlLFxuICAgICAgICAod2VpZ2h0IHx8IDEpICogKGlnbm9yZUZpZWxkTm9ybSA/IDEgOiBub3JtKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJlc3VsdC5zY29yZSA9IHRvdGFsU2NvcmU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXRjaGVzKHJlc3VsdCwgZGF0YSkge1xuICBjb25zdCBtYXRjaGVzID0gcmVzdWx0Lm1hdGNoZXM7XG4gIGRhdGEubWF0Y2hlcyA9IFtdO1xuXG4gIGlmICghaXNEZWZpbmVkKG1hdGNoZXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBtYXRjaGVzLmZvckVhY2goKG1hdGNoKSA9PiB7XG4gICAgaWYgKCFpc0RlZmluZWQobWF0Y2guaW5kaWNlcykgfHwgIW1hdGNoLmluZGljZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IGluZGljZXMsIHZhbHVlIH0gPSBtYXRjaDtcblxuICAgIGxldCBvYmogPSB7XG4gICAgICBpbmRpY2VzLFxuICAgICAgdmFsdWVcbiAgICB9O1xuXG4gICAgaWYgKG1hdGNoLmtleSkge1xuICAgICAgb2JqLmtleSA9IG1hdGNoLmtleS5zcmM7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoLmlkeCA+IC0xKSB7XG4gICAgICBvYmoucmVmSW5kZXggPSBtYXRjaC5pZHg7XG4gICAgfVxuXG4gICAgZGF0YS5tYXRjaGVzLnB1c2gob2JqKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVNjb3JlKHJlc3VsdCwgZGF0YSkge1xuICBkYXRhLnNjb3JlID0gcmVzdWx0LnNjb3JlO1xufVxuXG5mdW5jdGlvbiBmb3JtYXQoXG4gIHJlc3VsdHMsXG4gIGRvY3MsXG4gIHtcbiAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICBpbmNsdWRlU2NvcmUgPSBDb25maWcuaW5jbHVkZVNjb3JlXG4gIH0gPSB7fVxuKSB7XG4gIGNvbnN0IHRyYW5zZm9ybWVycyA9IFtdO1xuXG4gIGlmIChpbmNsdWRlTWF0Y2hlcykgdHJhbnNmb3JtZXJzLnB1c2godHJhbnNmb3JtTWF0Y2hlcyk7XG4gIGlmIChpbmNsdWRlU2NvcmUpIHRyYW5zZm9ybWVycy5wdXNoKHRyYW5zZm9ybVNjb3JlKTtcblxuICByZXR1cm4gcmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IHsgaWR4IH0gPSByZXN1bHQ7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgaXRlbTogZG9jc1tpZHhdLFxuICAgICAgcmVmSW5kZXg6IGlkeFxuICAgIH07XG5cbiAgICBpZiAodHJhbnNmb3JtZXJzLmxlbmd0aCkge1xuICAgICAgdHJhbnNmb3JtZXJzLmZvckVhY2goKHRyYW5zZm9ybWVyKSA9PiB7XG4gICAgICAgIHRyYW5zZm9ybWVyKHJlc3VsdCwgZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YVxuICB9KVxufVxuXG5jbGFzcyBGdXNlIHtcbiAgY29uc3RydWN0b3IoZG9jcywgb3B0aW9ucyA9IHt9LCBpbmRleCkge1xuICAgIHRoaXMub3B0aW9ucyA9IHsgLi4uQ29uZmlnLCAuLi5vcHRpb25zIH07XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdGlvbnMudXNlRXh0ZW5kZWRTZWFyY2ggJiZcbiAgICAgICF0cnVlXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoRVhURU5ERURfU0VBUkNIX1VOQVZBSUxBQkxFKVxuICAgIH1cblxuICAgIHRoaXMuX2tleVN0b3JlID0gbmV3IEtleVN0b3JlKHRoaXMub3B0aW9ucy5rZXlzKTtcblxuICAgIHRoaXMuc2V0Q29sbGVjdGlvbihkb2NzLCBpbmRleCk7XG4gIH1cblxuICBzZXRDb2xsZWN0aW9uKGRvY3MsIGluZGV4KSB7XG4gICAgdGhpcy5fZG9jcyA9IGRvY3M7XG5cbiAgICBpZiAoaW5kZXggJiYgIShpbmRleCBpbnN0YW5jZW9mIEZ1c2VJbmRleCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihJTkNPUlJFQ1RfSU5ERVhfVFlQRSlcbiAgICB9XG5cbiAgICB0aGlzLl9teUluZGV4ID1cbiAgICAgIGluZGV4IHx8XG4gICAgICBjcmVhdGVJbmRleCh0aGlzLm9wdGlvbnMua2V5cywgdGhpcy5fZG9jcywge1xuICAgICAgICBnZXRGbjogdGhpcy5vcHRpb25zLmdldEZuLFxuICAgICAgICBmaWVsZE5vcm1XZWlnaHQ6IHRoaXMub3B0aW9ucy5maWVsZE5vcm1XZWlnaHRcbiAgICAgIH0pO1xuICB9XG5cbiAgYWRkKGRvYykge1xuICAgIGlmICghaXNEZWZpbmVkKGRvYykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2RvY3MucHVzaChkb2MpO1xuICAgIHRoaXMuX215SW5kZXguYWRkKGRvYyk7XG4gIH1cblxuICByZW1vdmUocHJlZGljYXRlID0gKC8qIGRvYywgaWR4ICovKSA9PiBmYWxzZSkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLl9kb2NzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBkb2MgPSB0aGlzLl9kb2NzW2ldO1xuICAgICAgaWYgKHByZWRpY2F0ZShkb2MsIGkpKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQXQoaSk7XG4gICAgICAgIGkgLT0gMTtcbiAgICAgICAgbGVuIC09IDE7XG5cbiAgICAgICAgcmVzdWx0cy5wdXNoKGRvYyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIHJlbW92ZUF0KGlkeCkge1xuICAgIHRoaXMuX2RvY3Muc3BsaWNlKGlkeCwgMSk7XG4gICAgdGhpcy5fbXlJbmRleC5yZW1vdmVBdChpZHgpO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX215SW5kZXhcbiAgfVxuXG4gIHNlYXJjaChxdWVyeSwgeyBsaW1pdCA9IC0xIH0gPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgaW5jbHVkZVNjb3JlLFxuICAgICAgc2hvdWxkU29ydCxcbiAgICAgIHNvcnRGbixcbiAgICAgIGlnbm9yZUZpZWxkTm9ybVxuICAgIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBsZXQgcmVzdWx0cyA9IGlzU3RyaW5nKHF1ZXJ5KVxuICAgICAgPyBpc1N0cmluZyh0aGlzLl9kb2NzWzBdKVxuICAgICAgICA/IHRoaXMuX3NlYXJjaFN0cmluZ0xpc3QocXVlcnkpXG4gICAgICAgIDogdGhpcy5fc2VhcmNoT2JqZWN0TGlzdChxdWVyeSlcbiAgICAgIDogdGhpcy5fc2VhcmNoTG9naWNhbChxdWVyeSk7XG5cbiAgICBjb21wdXRlU2NvcmUocmVzdWx0cywgeyBpZ25vcmVGaWVsZE5vcm0gfSk7XG5cbiAgICBpZiAoc2hvdWxkU29ydCkge1xuICAgICAgcmVzdWx0cy5zb3J0KHNvcnRGbik7XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtYmVyKGxpbWl0KSAmJiBsaW1pdCA+IC0xKSB7XG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5zbGljZSgwLCBsaW1pdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdChyZXN1bHRzLCB0aGlzLl9kb2NzLCB7XG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGluY2x1ZGVTY29yZVxuICAgIH0pXG4gIH1cblxuICBfc2VhcmNoU3RyaW5nTGlzdChxdWVyeSkge1xuICAgIGNvbnN0IHNlYXJjaGVyID0gY3JlYXRlU2VhcmNoZXIocXVlcnksIHRoaXMub3B0aW9ucyk7XG4gICAgY29uc3QgeyByZWNvcmRzIH0gPSB0aGlzLl9teUluZGV4O1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBzdHJpbmcgaW4gdGhlIGluZGV4XG4gICAgcmVjb3Jkcy5mb3JFYWNoKCh7IHY6IHRleHQsIGk6IGlkeCwgbjogbm9ybSB9KSA9PiB7XG4gICAgICBpZiAoIWlzRGVmaW5lZCh0ZXh0KSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSwgaW5kaWNlcyB9ID0gc2VhcmNoZXIuc2VhcmNoSW4odGV4dCk7XG5cbiAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgaXRlbTogdGV4dCxcbiAgICAgICAgICBpZHgsXG4gICAgICAgICAgbWF0Y2hlczogW3sgc2NvcmUsIHZhbHVlOiB0ZXh0LCBub3JtLCBpbmRpY2VzIH1dXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIF9zZWFyY2hMb2dpY2FsKHF1ZXJ5KSB7XG5cbiAgICBjb25zdCBleHByZXNzaW9uID0gcGFyc2UocXVlcnksIHRoaXMub3B0aW9ucyk7XG5cbiAgICBjb25zdCBldmFsdWF0ZSA9IChub2RlLCBpdGVtLCBpZHgpID0+IHtcbiAgICAgIGlmICghbm9kZS5jaGlsZHJlbikge1xuICAgICAgICBjb25zdCB7IGtleUlkLCBzZWFyY2hlciB9ID0gbm9kZTtcblxuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5fZmluZE1hdGNoZXMoe1xuICAgICAgICAgIGtleTogdGhpcy5fa2V5U3RvcmUuZ2V0KGtleUlkKSxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5fbXlJbmRleC5nZXRWYWx1ZUZvckl0ZW1BdEtleUlkKGl0ZW0sIGtleUlkKSxcbiAgICAgICAgICBzZWFyY2hlclxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkeCxcbiAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgbWF0Y2hlc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gbm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZXZhbHVhdGUoY2hpbGQsIGl0ZW0sIGlkeCk7XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgcmVzLnB1c2goLi4ucmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLm9wZXJhdG9yID09PSBMb2dpY2FsT3BlcmF0b3IuQU5EKSB7XG4gICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNcbiAgICB9O1xuXG4gICAgY29uc3QgcmVjb3JkcyA9IHRoaXMuX215SW5kZXgucmVjb3JkcztcbiAgICBjb25zdCByZXN1bHRNYXAgPSB7fTtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG5cbiAgICByZWNvcmRzLmZvckVhY2goKHsgJDogaXRlbSwgaTogaWR4IH0pID0+IHtcbiAgICAgIGlmIChpc0RlZmluZWQoaXRlbSkpIHtcbiAgICAgICAgbGV0IGV4cFJlc3VsdHMgPSBldmFsdWF0ZShleHByZXNzaW9uLCBpdGVtLCBpZHgpO1xuXG4gICAgICAgIGlmIChleHBSZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICAgIC8vIERlZHVwZSB3aGVuIGFkZGluZ1xuICAgICAgICAgIGlmICghcmVzdWx0TWFwW2lkeF0pIHtcbiAgICAgICAgICAgIHJlc3VsdE1hcFtpZHhdID0geyBpZHgsIGl0ZW0sIG1hdGNoZXM6IFtdIH07XG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0TWFwW2lkeF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBleHBSZXN1bHRzLmZvckVhY2goKHsgbWF0Y2hlcyB9KSA9PiB7XG4gICAgICAgICAgICByZXN1bHRNYXBbaWR4XS5tYXRjaGVzLnB1c2goLi4ubWF0Y2hlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cblxuICBfc2VhcmNoT2JqZWN0TGlzdChxdWVyeSkge1xuICAgIGNvbnN0IHNlYXJjaGVyID0gY3JlYXRlU2VhcmNoZXIocXVlcnksIHRoaXMub3B0aW9ucyk7XG4gICAgY29uc3QgeyBrZXlzLCByZWNvcmRzIH0gPSB0aGlzLl9teUluZGV4O1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgIC8vIExpc3QgaXMgQXJyYXk8T2JqZWN0PlxuICAgIHJlY29yZHMuZm9yRWFjaCgoeyAkOiBpdGVtLCBpOiBpZHggfSkgPT4ge1xuICAgICAgaWYgKCFpc0RlZmluZWQoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBtYXRjaGVzID0gW107XG5cbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBrZXkgKGkuZSwgcGF0aCksIGFuZCBmZXRjaCB0aGUgdmFsdWUgYXQgdGhhdCBrZXlcbiAgICAgIGtleXMuZm9yRWFjaCgoa2V5LCBrZXlJbmRleCkgPT4ge1xuICAgICAgICBtYXRjaGVzLnB1c2goXG4gICAgICAgICAgLi4udGhpcy5fZmluZE1hdGNoZXMoe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgdmFsdWU6IGl0ZW1ba2V5SW5kZXhdLFxuICAgICAgICAgICAgc2VhcmNoZXJcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIGlkeCxcbiAgICAgICAgICBpdGVtLFxuICAgICAgICAgIG1hdGNoZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG4gIF9maW5kTWF0Y2hlcyh7IGtleSwgdmFsdWUsIHNlYXJjaGVyIH0pIHtcbiAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGxldCBtYXRjaGVzID0gW107XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKHsgdjogdGV4dCwgaTogaWR4LCBuOiBub3JtIH0pID0+IHtcbiAgICAgICAgaWYgKCFpc0RlZmluZWQodGV4dCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgaXNNYXRjaCwgc2NvcmUsIGluZGljZXMgfSA9IHNlYXJjaGVyLnNlYXJjaEluKHRleHQpO1xuXG4gICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgbWF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICAgIHNjb3JlLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgdmFsdWU6IHRleHQsXG4gICAgICAgICAgICBpZHgsXG4gICAgICAgICAgICBub3JtLFxuICAgICAgICAgICAgaW5kaWNlc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyB2OiB0ZXh0LCBuOiBub3JtIH0gPSB2YWx1ZTtcblxuICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSwgaW5kaWNlcyB9ID0gc2VhcmNoZXIuc2VhcmNoSW4odGV4dCk7XG5cbiAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgIG1hdGNoZXMucHVzaCh7IHNjb3JlLCBrZXksIHZhbHVlOiB0ZXh0LCBub3JtLCBpbmRpY2VzIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzXG4gIH1cbn1cblxuRnVzZS52ZXJzaW9uID0gJzcuMC4wJztcbkZ1c2UuY3JlYXRlSW5kZXggPSBjcmVhdGVJbmRleDtcbkZ1c2UucGFyc2VJbmRleCA9IHBhcnNlSW5kZXg7XG5GdXNlLmNvbmZpZyA9IENvbmZpZztcblxue1xuICBGdXNlLnBhcnNlUXVlcnkgPSBwYXJzZTtcbn1cblxue1xuICByZWdpc3RlcihFeHRlbmRlZFNlYXJjaCk7XG59XG5cbmV4cG9ydCB7IEZ1c2UgYXMgZGVmYXVsdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzdW1tYXJpemUgfSBmcm9tICcuLi9haS9zdW1tYXJpemVyLmpzJztcbmltcG9ydCB7IGdldEhpc3RvcnlXaXRoVG9wTlN0YXRzIH0gZnJvbSAnLi9oaXN0b3J5LmpzJztcbmltcG9ydCB7IGVuYWJsZVJlc2l6aW5nLCBjcmVhdGVPckdldFdpZGdldCwgYWRqdXN0V2lkZ2V0U2l6ZSB9IGZyb20gJy4vd2lkZ2V0cy5qcyc7XG5pbXBvcnQgeyBtYXJrZG93blRvSHRtbCwgY2xlYW5JbnB1dCB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xubGV0IHN0YXJ0RGF0ZSwgZW5kRGF0ZTtcbmNvbnN0IGRlZmF1bHREYXRlUmFuZ2UgPSAnMXcnO1xuY29uc3QgZW5hYmxlQmFzaWNTdW1tYXJ5ID0gZmFsc2U7XG5cbi8vIEdsb2JhbCB2YXJpYWJsZXMgdG8gc3RvcmUgc2VsZWN0ZWQgZmlsdGVyc1xubGV0IHNlbGVjdGVkRmlsdGVycyA9IFtdO1xubGV0IGV4Y2x1ZGVGaWx0ZXJzID0gW107XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gICAgYWRkRGF0ZVJhbmdlQnV0dG9ucyhkZWZhdWx0RGF0ZVJhbmdlKTtcbiAgICBhZGRSZWZyZXNoQnV0dG9uKCk7XG4gICAgc2V0RGF0ZVJhbmdlKGRlZmF1bHREYXRlUmFuZ2UpO1xuICAgIC8vIEluaXRpYWxpemUgY2F0ZWdvcnkgYW5kIGV4Y2x1ZGUgZmlsdGVyc1xuICAgIGF3YWl0IGluaXRpYWxpemVGaWx0ZXJzKCk7XG4gICAgYWRkT3JVcGRhdGVSZWNlbnRIaXN0b3J5V2lkZ2V0KCk7XG4gICAgaWYgKGVuYWJsZUJhc2ljU3VtbWFyeSkge1xuICAgICAgYWRkT3JVcGRhdGVCYXNpY1N1bW1hcnlXaWRnZXQoKTtcbiAgICB9XG4gICAgZW5hYmxlUmVzaXppbmcoKTtcbiAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZnJlc2gtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsb2FkQ29udGVudCgpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmstbW9kZS10b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrLW1vZGUnKTtcbiAgICAgICAgLy8gT3B0aW9uYWw6IFNhdmUgdXNlciBwcmVmZXJlbmNlIHVzaW5nIGxvY2FsU3RvcmFnZVxuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstbW9kZScpKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFwcGx5IHNhdmVkIHRoZW1lIG9uIGxvYWRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2F2ZWRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xuICAgICAgICBpZiAoc2F2ZWRUaGVtZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbi8qIEV2ZW50IGxpc3RlbmVyIGZvciBhZGRpbmcgbmV3IGNhdGVnb3J5IGZpbHRlciAqL1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1maWx0ZXItZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1maWx0ZXItaW5wdXQnKTtcbiAgICBjb25zdCBuZXdGaWx0ZXIgPSBpbnB1dC52YWx1ZS50cmltKCk7XG4gICAgaWYgKG5ld0ZpbHRlciAmJiAhc2VsZWN0ZWRGaWx0ZXJzLmluY2x1ZGVzKG5ld0ZpbHRlcikpIHtcbiAgICAgICAgLy8gQ3JlYXRlIHRvZ2dsZSBidXR0b25cbiAgICAgICAgY3JlYXRlVG9nZ2xlQnV0dG9uKG5ld0ZpbHRlciwgZmFsc2UsICdjYXRlZ29yeS1maWx0ZXJzJyk7XG5cbiAgICAgICAgLy8gU2F2ZSB0byBjdXN0b20gZmlsdGVyc1xuICAgICAgICBjb25zdCBjdXN0b21GaWx0ZXJzID0gYXdhaXQgZ2V0Q3VzdG9tRmlsdGVycygpO1xuICAgICAgICBjdXN0b21GaWx0ZXJzLnB1c2gobmV3RmlsdGVyKTtcbiAgICAgICAgc2F2ZUN1c3RvbUZpbHRlcnMoY3VzdG9tRmlsdGVycyk7XG5cbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG59KTtcblxuLyogRXZlbnQgbGlzdGVuZXIgZm9yIGFkZGluZyBuZXcgZXhjbHVkZSBmaWx0ZXIgKi9cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtZXhjbHVkZS1maWx0ZXItZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1leGNsdWRlLWZpbHRlci1pbnB1dCcpO1xuICAgIGNvbnN0IG5ld0V4Y2x1ZGVGaWx0ZXIgPSBpbnB1dC52YWx1ZS50cmltKCk7XG4gICAgaWYgKG5ld0V4Y2x1ZGVGaWx0ZXIgJiYgIWV4Y2x1ZGVGaWx0ZXJzLmluY2x1ZGVzKG5ld0V4Y2x1ZGVGaWx0ZXIpKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0b2dnbGUgYnV0dG9uXG4gICAgICAgIGNyZWF0ZVRvZ2dsZUJ1dHRvbihuZXdFeGNsdWRlRmlsdGVyLCBmYWxzZSwgJ2V4Y2x1ZGUtZmlsdGVycycpO1xuXG4gICAgICAgIC8vIFNhdmUgdG8gY3VzdG9tIGV4Y2x1ZGUgZmlsdGVyc1xuICAgICAgICBjb25zdCBjdXN0b21FeGNsdWRlRmlsdGVycyA9IGF3YWl0IGdldEN1c3RvbUV4Y2x1ZGVGaWx0ZXJzKCk7XG4gICAgICAgIGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzLnB1c2gobmV3RXhjbHVkZUZpbHRlcik7XG4gICAgICAgIHNhdmVDdXN0b21FeGNsdWRlRmlsdGVycyhjdXN0b21FeGNsdWRlRmlsdGVycyk7XG5cbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG59KTtcblxuXG5mdW5jdGlvbiBhZGRSZWZyZXNoQnV0dG9uKCkge1xuICBjb25zdCByZWZyZXNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlZnJlc2hCdXR0b24uaWQgPSAncmVmcmVzaC1idXR0b24nO1xuICByZWZyZXNoQnV0dG9uLnRleHRDb250ZW50ID0gJ1JlZnJlc2gnO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXJhbmdlLWNvbnRhaW5lcicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVmcmVzaEJ1dHRvbik7XG59XG5cbi8qIEluaXRpYWxpemUgRGF0ZSBSYW5nZSBJbnB1dHMgKi9cbmZ1bmN0aW9uIGFkZERhdGVSYW5nZUJ1dHRvbnMoZGVmYXVsdERhdGVSYW5nZSkge1xuICBcbiAgY29uc3QgYnV0dG9uRGF0YSA9IFtcbiAgICAgIHsgbGFiZWw6ICdMYXN0IDI0IEhvdXJzJywgcmFuZ2U6ICcyNGgnIH0sXG4gICAgICB7IGxhYmVsOiAnTGFzdCBXZWVrJywgcmFuZ2U6ICcxdycgfSxcbiAgICAgIHsgbGFiZWw6ICdMYXN0IE1vbnRoJywgcmFuZ2U6ICcxbScgfSxcbiAgICAgIHsgbGFiZWw6ICdMYXN0IDMgTW9udGhzJywgcmFuZ2U6ICczbScgfSxcbiAgICAgIHsgbGFiZWw6ICdMYXN0IDYgTW9udGhzJywgcmFuZ2U6ICc2bScgfSxcbiAgICAgIC8vIFRPRE86IGFkZCBtb250aCB3aXNlIG9wdGlvbnMgaW4gZHJvcCBkb3duXG4gICAgICB7IGxhYmVsOiAnSmFudWFyeScsIHJhbmdlOiAnamFuJyB9LFxuICAgICAgeyBsYWJlbDogJ0ZlYnJ1YXJ5JywgcmFuZ2U6ICdmZWInIH0sXG4gICAgICB7IGxhYmVsOiAnTWFyY2gnLCByYW5nZTogJ21hcicgfVxuXG4gIF07XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcmFuZ2UtY29udGFpbmVyJyk7XG5cbiAgYnV0dG9uRGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidXR0b24uY2xhc3NOYW1lID0gJ2RhdGUtcmFuZ2UtYnV0dG9uJztcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGRhdGEubGFiZWw7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXJhbmdlJywgZGF0YS5yYW5nZSk7XG5cbiAgICAgIC8vIEhpZ2hsaWdodCB0aGUgZGVmYXVsdCBzZWxlY3RlZCBidXR0b25cbiAgICAgIGlmIChkYXRhLnJhbmdlID09PSBkZWZhdWx0RGF0ZVJhbmdlKSB7XG4gICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBzZXREYXRlUmFuZ2UoZGF0YS5yYW5nZSk7XG4gICAgICAgICAgbG9hZENvbnRlbnQoKTtcblxuICAgICAgICAgIC8vIFJlbW92ZSAnc2VsZWN0ZWQnIGNsYXNzIGZyb20gYWxsIGJ1dHRvbnNcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZS1yYW5nZS1idXR0b24nKS5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gQWRkICdzZWxlY3RlZCcgY2xhc3MgdG8gdGhlIGNsaWNrZWQgYnV0dG9uXG4gICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9KTtcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXREYXRlUmFuZ2UocmFuZ2UpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gIHN3aXRjaCAocmFuZ2UpIHtcbiAgICAgIGNhc2UgJzI0aCc6XG4gICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkpO1xuICAgICAgICAgIHN0YXJ0RGF0ZS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSAtIDEpO1xuICAgICAgICAgIGVuZERhdGUgPSB0b2RheTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzF3JzpcbiAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheSk7XG4gICAgICAgICAgc3RhcnREYXRlLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpIC0gNyk7XG4gICAgICAgICAgZW5kRGF0ZSA9IHRvZGF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnMW0nOlxuICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICAgICAgICBzdGFydERhdGUuc2V0TW9udGgodG9kYXkuZ2V0TW9udGgoKSAtIDEpO1xuICAgICAgICAgIGVuZERhdGUgPSB0b2RheTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzNtJzpcbiAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheSk7XG4gICAgICAgICAgc3RhcnREYXRlLnNldE1vbnRoKHRvZGF5LmdldE1vbnRoKCkgLSAzKTtcbiAgICAgICAgICBlbmREYXRlID0gdG9kYXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc2bSc6XG4gICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkpO1xuICAgICAgICAgIHN0YXJ0RGF0ZS5zZXRNb250aCh0b2RheS5nZXRNb250aCgpIC0gNik7XG4gICAgICAgICAgZW5kRGF0ZSA9IHRvZGF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnamFuJzpcbiAgICAgIGNhc2UgJ2ZlYic6XG4gICAgICBjYXNlICdtYXInOlxuICAgICAgICAgIGNvbnN0IG1vbnRoTWFwID0geyBqYW46IDAsIGZlYjogMSwgbWFyOiAyIH07XG4gICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgbW9udGhNYXBbcmFuZ2VdLCAxKTtcbiAgICAgICAgICBlbmREYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgbW9udGhNYXBbcmFuZ2VdICsgMSwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICAgICAgICBlbmREYXRlID0gdG9kYXk7XG4gIH1cblxuICAvLyBVcGRhdGUgZGlzcGxheSBkYXRlc1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheS1zdGFydC1kYXRlJykudGV4dENvbnRlbnQgPSBzdGFydERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5LWVuZC1kYXRlJykudGV4dENvbnRlbnQgPSBlbmREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xufVxuXG4vKiBBZGQgT3ZlcmFsbCBTdW1tYXJ5IFdpZGdldCAqL1xuYXN5bmMgZnVuY3Rpb24gYWRkT3JVcGRhdGVSZWNlbnRIaXN0b3J5V2lkZ2V0KCkge1xuICBjb25zdCBuZXdXaWRnZXQgPSBjcmVhdGVPckdldFdpZGdldCgncmVjZW50LWhpc3RvcnknLCAnUmVjZW50IEhpc3RvcnknKTtcblxuICAvLyBkZWxldGUgY2hpbGRyZW4gY29udGFpbmluZyAqcmVjZW50LWhpc3RvcnktY29udGVudHMqXG4gIHdoaWxlIChuZXdXaWRnZXQubGFzdENoaWxkICYmIG5ld1dpZGdldC5sYXN0Q2hpbGQuaWQgJiYgbmV3V2lkZ2V0Lmxhc3RDaGlsZC5pZC5pbmNsdWRlcygncmVjZW50LWhpc3RvcnktY29udGVudHMnKSkge1xuICAgICAgbmV3V2lkZ2V0LnJlbW92ZUNoaWxkKG5ld1dpZGdldC5sYXN0Q2hpbGQpO1xuICB9XG5cbiAgY3JlYXRlUmVjZW50SGlzdG9yeUVsZW1lbnQoKS50aGVuKCh3aWRnZXQpID0+IHtcbiAgICAgIG5ld1dpZGdldC5hcHBlbmRDaGlsZCh3aWRnZXQpO1xuICAgICAgLy8gYWRqdXN0IHNpemUgb2YgbmV3V2lkZ2V0XG4gICAgICBjb25zb2xlLmxvZygnYWRqdXN0aW5nIHNpemUgb2YgbmV3V2lkZ2V0Jyk7XG4gICAgICBhZGp1c3RXaWRnZXRTaXplKG5ld1dpZGdldCwgWycud2lkZ2V0LWhlYWRlcicsICcuaGlzdG9yeS1jb250YWluZXInXSwgNTApO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYWRkT3JVcGRhdGVCYXNpY1N1bW1hcnlXaWRnZXQoKSB7XG4gIGNvbnN0IG5ld1dpZGdldCA9IGNyZWF0ZU9yR2V0V2lkZ2V0KCdiYXNpYy1zdW1tYXJ5JywgJ1N1bW1hcnknKTtcblxuICAvLyBkZWxldGUgY2hpbGRyZW4gY29udGFpbmluZyAqY29udGVudHMqXG4gIHdoaWxlIChuZXdXaWRnZXQubGFzdENoaWxkICYmIG5ld1dpZGdldC5sYXN0Q2hpbGQuY2xhc3NOYW1lICYmIG5ld1dpZGdldC5sYXN0Q2hpbGQuY2xhc3NOYW1lLmluY2x1ZGVzKCdjb250ZW50cycpKSB7XG4gICAgICBuZXdXaWRnZXQucmVtb3ZlQ2hpbGQobmV3V2lkZ2V0Lmxhc3RDaGlsZCk7XG4gIH1cblxuICBhd2FpdCBjcmVhdGVCYXNpY1N1bW1hcnlFbGVtZW50KG5ld1dpZGdldCk7XG59XG5cbi8qIExvYWQgQ29udGVudCBCYXNlZCBvbiBEYXRlIFJhbmdlICovXG5hc3luYyBmdW5jdGlvbiBsb2FkQ29udGVudCgpIHtcbiAgY29uc29sZS5sb2coJ1NlbGVjdGVkIEZpbHRlcnM6Jywgc2VsZWN0ZWRGaWx0ZXJzKTtcbiAgY29uc29sZS5sb2coJ0V4Y2x1ZGUgRmlsdGVyczonLCBleGNsdWRlRmlsdGVycyk7XG4gIGF3YWl0IGFkZE9yVXBkYXRlUmVjZW50SGlzdG9yeVdpZGdldCgpO1xuICBpZiAoZW5hYmxlQmFzaWNTdW1tYXJ5KSB7XG4gICAgYXdhaXQgYWRkT3JVcGRhdGVCYXNpY1N1bW1hcnlXaWRnZXQoKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVSZWNlbnRIaXN0b3J5RWxlbWVudCgpIHtcbiAgY29uc3QgeyB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcyB9ID0gYXdhaXQgZ2V0SGlzdG9yeVdpdGhUb3BOU3RhdHMoc3RhcnREYXRlLCBlbmREYXRlLCAxMCwgc2VsZWN0ZWRGaWx0ZXJzLCBleGNsdWRlRmlsdGVycyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2hpc3RvcnktY29udGFpbmVyJztcbiAgY29udGFpbmVyLmlkID0gJ3JlY2VudC1oaXN0b3J5LWNvbnRlbnRzJztcblxuICB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIC8vIENyZWF0ZSB0aGUgbWFpbiBib3ggZm9yIGVhY2ggaG9zdG5hbWVcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3guY2xhc3NOYW1lID0gJ2hpc3RvcnktYm94JztcblxuICAgIC8vIEZpcnN0IHBhcnQ6IEhvc3RuYW1lIGFuZCBoaXQgY291bnQgd2l0aCBhbiBpY29uXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoaXN0b3J5LWhlYWRlcic7XG5cbiAgICBjb25zdCBob3N0bmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgLy8gQWRkIGFuIGljb24gYmVmb3JlIHRoZSBob3N0bmFtZVxuICAgIGhvc3RuYW1lLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhcyBmYS1nbG9iZS1hbWVyaWNhc1wiPjwvaT4gJHtpdGVtLmhvc3RuYW1lfWA7XG5cbiAgICBjb25zdCBoaXRDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBoaXRDb3VudC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtY2hhcnQtbGluZVwiPjwvaT4gSGl0IENvdW50OiAke2l0ZW0uY291bnR9YDtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChob3N0bmFtZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhpdENvdW50KTtcblxuICAgIC8vIFNlY29uZCBwYXJ0OiBUaXRsZXMgd2l0aCBVUkxzXG4gICAgY29uc3QgdGl0bGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0aXRsZXMtY29udGFpbmVyJztcblxuICAgIGNvbnN0IHRpdGxlc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgLy8gSW5pdGlhbCBkaXNwbGF5IGNvdW50XG4gICAgY29uc3QgaW5pdGlhbERpc3BsYXlDb3VudCA9IDEwO1xuICAgIGNvbnN0IGFkZGl0aW9uYWxMb2FkQ291bnQgPSAyMDtcblxuICAgIC8vIERldGVybWluZSBob3cgbWFueSB0aXRsZXMgdG8gc2hvdyBpbml0aWFsbHlcbiAgICBjb25zdCBkaXNwbGF5ZWRUaXRsZXMgPSBpdGVtLnRpdGxlcy5zbGljZSgwLCBpbml0aWFsRGlzcGxheUNvdW50KTtcbiAgICBkaXNwbGF5ZWRUaXRsZXMuZm9yRWFjaCh0aXRsZUl0ZW0gPT4ge1xuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGxpbmsuaHJlZiA9IHRpdGxlSXRlbS51cmw7XG4gICAgICBsaW5rLnRleHRDb250ZW50ID0gdGl0bGVJdGVtLnRpdGxlO1xuICAgICAgbGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgdGl0bGVzTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfSk7XG5cbiAgICB0aXRsZXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVzTGlzdCk7XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgbW9yZSB0aXRsZXMsIGFkZCBhIFwibW9yZVwiIGJ1dHRvblxuICAgIGlmIChpdGVtLnRpdGxlcy5sZW5ndGggPiBpbml0aWFsRGlzcGxheUNvdW50KSB7XG4gICAgICBjb25zdCBtb3JlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBtb3JlQnV0dG9uLmNsYXNzTmFtZSA9ICdtb3JlLWJ1dHRvbic7XG4gICAgICBtb3JlQnV0dG9uLnRleHRDb250ZW50ID0gYGFuZCAke2l0ZW0udGl0bGVzLmxlbmd0aCAtIGluaXRpYWxEaXNwbGF5Q291bnR9IG1vcmUuLi5gO1xuICAgICAgbW9yZUJ1dHRvbi5kYXRhc2V0Lmhvc3RuYW1lID0gaXRlbS5ob3N0bmFtZTsgLy8gRm9yIGlkZW50aWZ5aW5nIHdoaWNoIGJveCB0byBleHBhbmRcblxuICAgICAgbW9yZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbG9hZE1vcmVUaXRsZXMoaXRlbSwgdGl0bGVzTGlzdCwgbW9yZUJ1dHRvbiwgaW5pdGlhbERpc3BsYXlDb3VudCwgYWRkaXRpb25hbExvYWRDb3VudCk7XG4gICAgICB9KTtcblxuICAgICAgdGl0bGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vcmVCdXR0b24pO1xuICAgIH1cblxuICAgIC8vIEFzc2VtYmxlIHRoZSBib3hcbiAgICBib3guYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBib3guYXBwZW5kQ2hpbGQodGl0bGVzQ29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm94KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmFzaWNTdW1tYXJ5RWxlbWVudChuZXdXaWRnZXQpIHtcbiAgY29uc3QgeyB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcyB9ID0gYXdhaXQgZ2V0SGlzdG9yeVdpdGhUb3BOU3RhdHMoc3RhcnREYXRlLCBlbmREYXRlLCAxMCwgc2VsZWN0ZWRGaWx0ZXJzLCBleGNsdWRlRmlsdGVycyk7XG4gIGNvbnN0IGhpc3RvcnlJdGVtcyA9IHRvcE5Ib3N0bmFtZXNXaXRoVGl0bGVzLm1hcChpdGVtID0+IGl0ZW0udGl0bGVzKS5mbGF0KCk7XG5cbiAgLy8gQXBwZW5kIGFsbCBoaXN0b3J5IGl0ZW1zIHRvIGEgc2luZ2xlIHN0cmluZ1xuICBjb25zdCBoaXN0b3J5SXRlbVRpdGxlcyA9IGhpc3RvcnlJdGVtcy5tYXAoaXRlbSA9PiBpdGVtLnRpdGxlKS5qb2luKCcsICcpO1xuXG4gIC8vIENyZWF0ZSBjaHVua3Mgb2YgNDAwMCBjaGFyYWN0ZXJzXG4gIGNvbnN0IGNodW5rcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGhpc3RvcnlJdGVtVGl0bGVzLmxlbmd0aDsgaSArPSAyMDAwKSB7XG4gICAgY2h1bmtzLnB1c2goaGlzdG9yeUl0ZW1UaXRsZXMuc2xpY2UoaSwgaSArIDIwMDApKTtcbiAgfVxuXG4gIC8vIFN1bW1hcml6ZSBlYWNoIGNodW5rIGFuZCBhcHBlbmQgdG8gdGhlIHJlc3VsdFxuICBmb3IgKGNvbnN0IGNodW5rIG9mIGNodW5rcykge1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBzdW1tYXJpemUoY2xlYW5JbnB1dChjaHVuaykpO1xuXG4gICAgbGV0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIFVzZSBhIGNsYXNzIGluc3RlYWQgb2YgYW4gSUQgdG8gYWxsb3cgbXVsdGlwbGUgZWxlbWVudHNcbiAgICB0ZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiYXNpYy1zdW1tYXJ5LWNvbnRlbnRzJyk7XG5cbiAgICB0ZXh0RWxlbWVudC5pbm5lckhUTUwgPSBtYXJrZG93blRvSHRtbChyZXN1bHQpO1xuICAgIG5ld1dpZGdldC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XG4gICAgYWRqdXN0V2lkZ2V0U2l6ZShuZXdXaWRnZXQsIFsnLndpZGdldC1oZWFkZXInLCAnLmJhc2ljLXN1bW1hcnktY29udGVudHMnXSwgNjApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRNb3JlVGl0bGVzKGl0ZW0sIHRpdGxlc0xpc3QsIG1vcmVCdXR0b24sIGluaXRpYWxDb3VudCwgbG9hZENvdW50KSB7XG4gIC8vIERldGVybWluZSB0aGUgY3VycmVudCBudW1iZXIgb2YgdGl0bGVzIGRpc3BsYXllZFxuICBjb25zdCBjdXJyZW50Q291bnQgPSB0aXRsZXNMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykubGVuZ3RoO1xuICBjb25zdCBuZXh0Q291bnQgPSBjdXJyZW50Q291bnQgKyBsb2FkQ291bnQ7XG4gIGNvbnN0IHRpdGxlc1RvQWRkID0gaXRlbS50aXRsZXMuc2xpY2UoY3VycmVudENvdW50LCBuZXh0Q291bnQpO1xuXG4gIHRpdGxlc1RvQWRkLmZvckVhY2godGl0bGVJdGVtID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rLmhyZWYgPSB0aXRsZUl0ZW0udXJsO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSB0aXRsZUl0ZW0udGl0bGU7XG4gICAgbGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB0aXRsZXNMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfSk7XG5cbiAgLy8gVXBkYXRlIHRoZSByZW1haW5pbmcgY291bnRcbiAgY29uc3QgcmVtYWluaW5nID0gaXRlbS50aXRsZXMubGVuZ3RoIC0gbmV4dENvdW50O1xuXG4gIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgbW9yZUJ1dHRvbi50ZXh0Q29udGVudCA9IGBhbmQgJHtyZW1haW5pbmd9IG1vcmUuLi5gO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlbW92ZSB0aGUgXCJtb3JlXCIgYnV0dG9uIGlmIG5vIG1vcmUgdGl0bGVzIGFyZSBsZWZ0XG4gICAgbW9yZUJ1dHRvbi5yZW1vdmUoKTtcbiAgfVxufVxuXG4vKiBJbml0aWFsaXplIEZpbHRlcnMgKFRhZyBGaWx0ZXJzIGFuZCBFeGNsdWRlIFRhZ3MpICovXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplRmlsdGVycygpIHtcbiAgICBhd2FpdCBpbml0aWFsaXplQ2F0ZWdvcnlGaWx0ZXJzKCk7XG4gICAgYXdhaXQgaW5pdGlhbGl6ZUV4Y2x1ZGVGaWx0ZXJzKCk7XG59XG5cbi8qIEluaXRpYWxpemUgVGFnIEZpbHRlcnMgKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVDYXRlZ29yeUZpbHRlcnMoKSB7XG4gICAgY29uc3QgZGVmYXVsdEZpbHRlcnMgPSBbJ0NvZGUnLCAnUHJvZHVjdGl2aXR5JywgJ0FJJywgJ0VudGVydGFpbm1lbnQnLCAnU29jaWFsJ107XG4gICAgY29uc3QgY3VzdG9tRmlsdGVycyA9IGF3YWl0IGdldEN1c3RvbUZpbHRlcnMoKTtcblxuICAgIGNvbnN0IGFsbEZpbHRlcnMgPSBbLi4uZGVmYXVsdEZpbHRlcnMsIC4uLmN1c3RvbUZpbHRlcnNdO1xuXG4gICAgYWxsRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgIGNyZWF0ZVRvZ2dsZUJ1dHRvbihmaWx0ZXIsIGZhbHNlLCAnY2F0ZWdvcnktZmlsdGVycycpO1xuICAgIH0pO1xuXG4gICAgLy8gTG9hZCBzZWxlY3RlZCBmaWx0ZXJzIGZyb20gc3RvcmFnZVxuICAgIHNlbGVjdGVkRmlsdGVycyA9IGF3YWl0IGdldFNlbGVjdGVkRmlsdGVycygpO1xuICAgIHVwZGF0ZUZpbHRlclN0YXRlcygnY2F0ZWdvcnktZmlsdGVycycpO1xufVxuXG4vKiBJbml0aWFsaXplIEV4Y2x1ZGUgRmlsdGVycyAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZUV4Y2x1ZGVGaWx0ZXJzKCkge1xuICAgIGNvbnN0IGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzID0gYXdhaXQgZ2V0Q3VzdG9tRXhjbHVkZUZpbHRlcnMoKTtcblxuICAgIGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgICAgY3JlYXRlVG9nZ2xlQnV0dG9uKGZpbHRlciwgZmFsc2UsICdleGNsdWRlLWZpbHRlcnMnKTtcbiAgICB9KTtcblxuICAgIC8vIExvYWQgc2VsZWN0ZWQgZXhjbHVkZSBmaWx0ZXJzIGZyb20gc3RvcmFnZVxuICAgIGV4Y2x1ZGVGaWx0ZXJzID0gYXdhaXQgZ2V0U2VsZWN0ZWRFeGNsdWRlRmlsdGVycygpO1xuICAgIHVwZGF0ZUZpbHRlclN0YXRlcygnZXhjbHVkZS1maWx0ZXJzJyk7XG59XG5cbi8qIEZ1bmN0aW9ucyBmb3IgQ2F0ZWdvcnkgRmlsdGVycyAqL1xuXG4vKiBGdW5jdGlvbiB0byBnZXQgY3VzdG9tIGZpbHRlcnMgZnJvbSBDaHJvbWUgc3RvcmFnZSAqL1xuZnVuY3Rpb24gZ2V0Q3VzdG9tRmlsdGVycygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnY3VzdG9tRmlsdGVycyddLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5jdXN0b21GaWx0ZXJzIHx8IFtdKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8qIEZ1bmN0aW9uIHRvIGdldCBzZWxlY3RlZCBmaWx0ZXJzIGZyb20gQ2hyb21lIHN0b3JhZ2UgKi9cbmZ1bmN0aW9uIGdldFNlbGVjdGVkRmlsdGVycygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnc2VsZWN0ZWRGaWx0ZXJzJ10sIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LnNlbGVjdGVkRmlsdGVycyB8fCBbXSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vKiBGdW5jdGlvbiB0byBzYXZlIHNlbGVjdGVkIGZpbHRlcnMgdG8gQ2hyb21lIHN0b3JhZ2UgKi9cbmZ1bmN0aW9uIHNhdmVTZWxlY3RlZEZpbHRlcnMoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2VsZWN0ZWRGaWx0ZXJzIH0sICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIGZpbHRlcnMgc2F2ZWQ6Jywgc2VsZWN0ZWRGaWx0ZXJzKTtcbiAgICB9KTtcbn1cblxuLyogRnVuY3Rpb24gdG8gc2F2ZSBjdXN0b20gZmlsdGVycyB0byBDaHJvbWUgc3RvcmFnZSAqL1xuZnVuY3Rpb24gc2F2ZUN1c3RvbUZpbHRlcnMoY3VzdG9tRmlsdGVycykge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGN1c3RvbUZpbHRlcnMgfSwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ3VzdG9tIGZpbHRlcnMgc2F2ZWQ6JywgY3VzdG9tRmlsdGVycyk7XG4gICAgfSk7XG59XG5cbi8qIEZ1bmN0aW9ucyBmb3IgRXhjbHVkZSBGaWx0ZXJzICovXG5cbi8qIEZ1bmN0aW9uIHRvIGdldCBjdXN0b20gZXhjbHVkZSBmaWx0ZXJzIGZyb20gQ2hyb21lIHN0b3JhZ2UgKi9cbmZ1bmN0aW9uIGdldEN1c3RvbUV4Y2x1ZGVGaWx0ZXJzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydjdXN0b21FeGNsdWRlRmlsdGVycyddLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5jdXN0b21FeGNsdWRlRmlsdGVycyB8fCBbXSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vKiBGdW5jdGlvbiB0byBnZXQgc2VsZWN0ZWQgZXhjbHVkZSBmaWx0ZXJzIGZyb20gQ2hyb21lIHN0b3JhZ2UgKi9cbmZ1bmN0aW9uIGdldFNlbGVjdGVkRXhjbHVkZUZpbHRlcnMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ3NlbGVjdGVkRXhjbHVkZUZpbHRlcnMnXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuc2VsZWN0ZWRFeGNsdWRlRmlsdGVycyB8fCBbXSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vKiBGdW5jdGlvbiB0byBzYXZlIHNlbGVjdGVkIGV4Y2x1ZGUgZmlsdGVycyB0byBDaHJvbWUgc3RvcmFnZSAqL1xuZnVuY3Rpb24gc2F2ZVNlbGVjdGVkRXhjbHVkZUZpbHRlcnMoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2VsZWN0ZWRFeGNsdWRlRmlsdGVyczogZXhjbHVkZUZpbHRlcnMgfSwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQgZXhjbHVkZSBmaWx0ZXJzIHNhdmVkOicsIGV4Y2x1ZGVGaWx0ZXJzKTtcbiAgICB9KTtcbn1cblxuLyogRnVuY3Rpb24gdG8gc2F2ZSBjdXN0b20gZXhjbHVkZSBmaWx0ZXJzIHRvIENocm9tZSBzdG9yYWdlICovXG5mdW5jdGlvbiBzYXZlQ3VzdG9tRXhjbHVkZUZpbHRlcnMoY3VzdG9tRXhjbHVkZUZpbHRlcnMpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBjdXN0b21FeGNsdWRlRmlsdGVycyB9LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDdXN0b20gZXhjbHVkZSBmaWx0ZXJzIHNhdmVkOicsIGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzKTtcbiAgICB9KTtcbn1cblxuLyogRnVuY3Rpb24gdG8gY3JlYXRlIGEgdG9nZ2xlIGJ1dHRvbiAqL1xuZnVuY3Rpb24gY3JlYXRlVG9nZ2xlQnV0dG9uKGxhYmVsLCBpc0RlZmF1bHQgPSBmYWxzZSwgZmlsdGVyVHlwZSA9ICdjYXRlZ29yeS1maWx0ZXJzJykge1xuICAgIGNvbnN0IGNvbnRhaW5lcklkID0gZmlsdGVyVHlwZSA9PT0gJ2V4Y2x1ZGUtZmlsdGVycycgPyAnZXhjbHVkZS1maWx0ZXJzJyA6ICdjYXRlZ29yeS1maWx0ZXJzJztcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCk7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gJ2NhdGVnb3J5LXRvZ2dsZS1idXR0b24nO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIGJ1dHRvbi5kYXRhc2V0LmxhYmVsID0gbGFiZWw7XG4gICAgYnV0dG9uLmRhdGFzZXQuZGVmYXVsdCA9IGlzRGVmYXVsdDtcblxuICAgIC8vIEFkZCAnY3VzdG9tJyBjbGFzcyBpZiBpdCdzIG5vdCBhIGRlZmF1bHQgZmlsdGVyXG4gICAgaWYgKCFpc0RlZmF1bHQpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbScpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgcmVtb3ZlIChYKSBidXR0b25cbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJlbW92ZUJ0bi5jbGFzc05hbWUgPSAncmVtb3ZlLWJ0bic7XG4gICAgICAgIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9ICfinJUnO1xuICAgICAgICByZW1vdmVCdG4udGl0bGUgPSAnUmVtb3ZlIGZpbHRlcic7XG5cbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHJlbW92aW5nIHRoZSBmaWx0ZXJcbiAgICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBhd2FpdCByZW1vdmVGaWx0ZXIobGFiZWwsIGZpbHRlclR5cGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgaW5pdGlhbCBzdGF0ZSBiYXNlZCBvbiBzZWxlY3RlZCBmaWx0ZXJzXG4gICAgaWYgKGZpbHRlclR5cGUgPT09ICdleGNsdWRlLWZpbHRlcnMnKSB7XG4gICAgICAgIGlmIChleGNsdWRlRmlsdGVycy5pbmNsdWRlcyhsYWJlbCkpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzZWxlY3RlZEZpbHRlcnMuaW5jbHVkZXMobGFiZWwpKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgdG9nZ2xpbmcgYWN0aXZlIHN0YXRlXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoZmlsdGVyVHlwZSA9PT0gJ2V4Y2x1ZGUtZmlsdGVycycpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZXhjbHVkZUZpbHRlcnMuaW5kZXhPZihsYWJlbCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVGaWx0ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlRmlsdGVycy5wdXNoKGxhYmVsKTtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzYXZlU2VsZWN0ZWRFeGNsdWRlRmlsdGVycygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZEZpbHRlcnMuaW5kZXhPZihsYWJlbCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsdGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWx0ZXJzLnB1c2gobGFiZWwpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNhdmVTZWxlY3RlZEZpbHRlcnMoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkQ29udGVudCgpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG59XG5cbi8qIEZ1bmN0aW9uIHRvIHJlbW92ZSBhIGN1c3RvbSBmaWx0ZXIgKi9cbmFzeW5jIGZ1bmN0aW9uIHJlbW92ZUZpbHRlcihsYWJlbCwgZmlsdGVyVHlwZSkge1xuICAgIGlmIChmaWx0ZXJUeXBlID09PSAnZXhjbHVkZS1maWx0ZXJzJykge1xuICAgICAgICAvLyBSZW1vdmUgZnJvbSBleGNsdWRlRmlsdGVycyBpZiBwcmVzZW50XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZXhjbHVkZUZpbHRlcnMuaW5kZXhPZihsYWJlbCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBleGNsdWRlRmlsdGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgc2F2ZVNlbGVjdGVkRXhjbHVkZUZpbHRlcnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzIGluIHN0b3JhZ2VcbiAgICAgICAgY29uc3QgY3VzdG9tRXhjbHVkZUZpbHRlcnMgPSBhd2FpdCBnZXRDdXN0b21FeGNsdWRlRmlsdGVycygpO1xuICAgICAgICBjb25zdCBmaWx0ZXJJbmRleCA9IGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzLmluZGV4T2YobGFiZWwpO1xuICAgICAgICBpZiAoZmlsdGVySW5kZXggPiAtMSkge1xuICAgICAgICAgICAgY3VzdG9tRXhjbHVkZUZpbHRlcnMuc3BsaWNlKGZpbHRlckluZGV4LCAxKTtcbiAgICAgICAgICAgIHNhdmVDdXN0b21FeGNsdWRlRmlsdGVycyhjdXN0b21FeGNsdWRlRmlsdGVycyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGJ1dHRvbiBmcm9tIHRoZSBET01cbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhdGVnb3J5LXRvZ2dsZS1idXR0b25bZGF0YS1sYWJlbD1cIiR7bGFiZWx9XCJdYCk7XG4gICAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEV4aXN0aW5nIGNhdGVnb3J5IGZpbHRlcnMgcmVtb3ZhbFxuICAgICAgICAvLyBSZW1vdmUgZnJvbSBzZWxlY3RlZEZpbHRlcnMgaWYgcHJlc2VudFxuICAgICAgICBjb25zdCBpbmRleCA9IHNlbGVjdGVkRmlsdGVycy5pbmRleE9mKGxhYmVsKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkRmlsdGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgc2F2ZVNlbGVjdGVkRmlsdGVycygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gY3VzdG9tRmlsdGVycyBpbiBzdG9yYWdlXG4gICAgICAgIGNvbnN0IGN1c3RvbUZpbHRlcnMgPSBhd2FpdCBnZXRDdXN0b21GaWx0ZXJzKCk7XG4gICAgICAgIGNvbnN0IGZpbHRlckluZGV4ID0gY3VzdG9tRmlsdGVycy5pbmRleE9mKGxhYmVsKTtcbiAgICAgICAgaWYgKGZpbHRlckluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGN1c3RvbUZpbHRlcnMuc3BsaWNlKGZpbHRlckluZGV4LCAxKTtcbiAgICAgICAgICAgIHNhdmVDdXN0b21GaWx0ZXJzKGN1c3RvbUZpbHRlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBidXR0b24gZnJvbSB0aGUgRE9NXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXRlZ29yeS10b2dnbGUtYnV0dG9uW2RhdGEtbGFiZWw9XCIke2xhYmVsfVwiXWApO1xuICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qIEZ1bmN0aW9uIHRvIHVwZGF0ZSBmaWx0ZXIgYnV0dG9uIHN0YXRlcyBiYXNlZCBvbiBzZWxlY3RlZEZpbHRlcnMgKi9cbmZ1bmN0aW9uIHVwZGF0ZUZpbHRlclN0YXRlcyhmaWx0ZXJUeXBlID0gJ2NhdGVnb3J5LWZpbHRlcnMnKSB7XG4gICAgbGV0IGJ1dHRvbnM7XG4gICAgaWYgKGZpbHRlclR5cGUgPT09ICdleGNsdWRlLWZpbHRlcnMnKSB7XG4gICAgICAgIGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZXhjbHVkZS1maWx0ZXJzIC5jYXRlZ29yeS10b2dnbGUtYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBidXR0b24uZGF0YXNldC5sYWJlbDtcbiAgICAgICAgICAgIGlmIChleGNsdWRlRmlsdGVycy5pbmNsdWRlcyhsYWJlbCkpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYXRlZ29yeS1maWx0ZXJzIC5jYXRlZ29yeS10b2dnbGUtYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBidXR0b24uZGF0YXNldC5sYWJlbDtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEZpbHRlcnMuaW5jbHVkZXMobGFiZWwpKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiZ2V0U3VtbWFyaXplciIsIl9nZXRTdW1tYXJpemVyIiwiX2NhbGxlZSIsIm9wdGlvbnMiLCJhdmFpbGFibGUiLCJzdW1tYXJpemVyIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInNoYXJlZENvbnRleHQiLCJmb3JtYXQiLCJzZWxmIiwiYWkiLCJjYXBhYmlsaXRpZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImxvYWRlZCIsInRvdGFsIiwicmVhZHkiLCJzdW1tYXJpemUiLCJfeCIsIl9zdW1tYXJpemUiLCJfY2FsbGVlMiIsInRleHQiLCJyZXN1bHQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJjb250ZXh0IiwiZGVzdHJveSIsInQwIiwic3VtbWFyaXplV2l0aENvbnRleHQiLCJfeDIiLCJfeDMiLCJfc3VtbWFyaXplV2l0aENvbnRleHQiLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsInN1bW1hcml6ZUxhcmdlVGV4dFdpdGhDb250ZXh0IiwiX3g0IiwiX3g1IiwiX3N1bW1hcml6ZUxhcmdlVGV4dFdpdGhDb250ZXh0IiwiX2NhbGxlZTQiLCJjaHVua3MiLCJzdW1tYXJpZXMiLCJfaXRlcmF0b3IiLCJfc3RlcCIsImNodW5rIiwic3VtbWFyeSIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIm1hdGNoIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJjbGVhbklucHV0IiwiZ2V0SGlzdG9yeUluVGltZVJhbmdlIiwiZ2V0RmlsdGVyZWRIaXN0b3J5SXRlbXMiLCJnZXRIaXN0b3J5IiwiX2dldEhpc3RvcnkiLCJzdGFydERhdGUiLCJlbmREYXRlIiwicmVqZWN0IiwiY2hyb21lIiwiaGlzdG9yeSIsInNlYXJjaCIsInN0YXJ0VGltZSIsImdldFRpbWUiLCJlbmRUaW1lIiwibWF4UmVzdWx0cyIsInJlc3VsdHMiLCJydW50aW1lIiwibGFzdEVycm9yIiwiZ2V0SGlzdG9yeVdpdGhUb3BOU3RhdHMiLCJfeDYiLCJfeDciLCJfZ2V0SGlzdG9yeVdpdGhUb3BOU3RhdHMiLCJOIiwic2VsZWN0ZWRGaWx0ZXJzIiwiZXhjbHVkZUZpbHRlcnMiLCJoaXN0b3J5SXRlbXMiLCJmaWx0ZXJlZEhpc3RvcnlJdGVtcyIsInBhcnNlZEhpc3RvcnlJdGVtcyIsImhvc3RuYW1lTWFwIiwiaG9zdG5hbWVUaXRsZU1hcCIsInNvcnRlZEhvc3RuYW1lcyIsInRvcE5Ib3N0bmFtZXMiLCJ0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcyIsIm1hcCIsIml0ZW0iLCJwYXJzZV91cmxfcGFydCIsInVybCIsInRpdGxlIiwiY291bnRfYnlfaG9zdG5hbWUiLCJjcmVhdGVIb3N0TmFtZVRpdGxlTWFwIiwiQXJyYXkiLCJmcm9tIiwiZW50cmllcyIsInNvcnQiLCJiIiwiaG9zdG5hbWUiLCJ0aXRsZXMiLCJnZXQiLCJjb3VudCIsInBhcnNlZFVybCIsIlVSTCIsInByb3RvY29sIiwicmVwbGFjZSIsImhvc3RuYW1lUGFydHMiLCJzcGxpdCIsInN1YmRvbWFpbiIsImRvbWFpbiIsInRsZCIsImpvaW4iLCJwYXRoIiwicGF0aG5hbWUiLCJxdWVyeVBhcmFtcyIsInNlYXJjaFBhcmFtcyIsImtleSIsImlzQXJyYXkiLCJmcmFnbWVudCIsImhhc2giLCJwb3J0IiwiaG9zdCIsImhyZWYiLCJvcmlnaW4iLCJlcnJvciIsImNvbmNhdCIsIk1hcCIsImhhcyIsInNldCIsInNvbWUiLCJleHRyYWN0RG9tYWluIiwibWFya2Rvd25Ub0h0bWwiLCJtYXJrZG93blRleHQiLCJodG1sIiwibWF4TGVuZ3RoIiwidW5kZWZpbmVkIiwibm9ybWFsaXplIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZXNjYXBlIiwidHJpbSIsImVuYWJsZVJlc2l6aW5nIiwicmVzaXphYmxlRWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwicmVzaXplSGFuZGxlIiwicXVlcnlTZWxlY3RvciIsImlzUmVzaXppbmciLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJzdHlsZSIsImN1cnNvciIsImNsYXNzTGlzdCIsImFkZCIsInN0YXJ0V2lkdGgiLCJvZmZzZXRXaWR0aCIsInN0YXJ0SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic3RhcnRYIiwiY2xpZW50WCIsInN0YXJ0WSIsImNsaWVudFkiLCJvbk1vdXNlTW92ZSIsImN1cnJlbnRXaWR0aCIsImN1cnJlbnRIZWlnaHQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIndpZHRoIiwiTWF0aCIsIm1heCIsImhlaWdodCIsIm9uTW91c2VVcCIsInJlbW92ZSIsIndpbmRvdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzYXZlV2lkZ2V0U2l6ZSIsImlkIiwibG9hZFdpZGdldFNpemUiLCJ3aWRnZXRJZCIsInNpemUiLCJzdG9yYWdlIiwibG9jYWwiLCJfZGVmaW5lUHJvcGVydHkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiZ2V0SXRlbSIsImNyZWF0ZU9yR2V0V2lkZ2V0IiwidW5pcXVlSUQiLCJ3aWRnZXRUaXRsZSIsImdldEVsZW1lbnRCeUlkIiwid2lkZ2V0Q29udGFpbmVyIiwibmV3V2lkZ2V0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiYWRqdXN0V2lkZ2V0U2l6ZSIsIndpZGdldCIsInNlbGVjdG9ycyIsIm9mZnNldCIsInNlbGVjdG9yIiwiZWxlbWVudHMiLCJkYiIsIm9wZW5EYXRhYmFzZSIsIl9vcGVuRGF0YWJhc2UiLCJyZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsIm9uZXJyb3IiLCJldmVudCIsInRhcmdldCIsImVycm9yQ29kZSIsIm9udXBncmFkZW5lZWRlZCIsIm9iamVjdFN0b3JlIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwiY3JlYXRlSW5kZXgiLCJ1bmlxdWUiLCJtdWx0aUVudHJ5Iiwib25zdWNjZXNzIiwiY2xlYXJEYXRhYmFzZSIsIl9jbGVhckRhdGFiYXNlIiwidHJhbnNhY3Rpb24iLCJjbGVhciIsImFkZEhpc3RvcnlJdGVtIiwiX2FkZEhpc3RvcnlJdGVtIiwiaW5kZXgiLCJjaGVja1JlcXVlc3QiLCJsYXN0VmlzaXRUaW1lIiwicHV0IiwiZ2V0QWxsSGlzdG9yeUl0ZW1zIiwiX2dldEFsbEhpc3RvcnlJdGVtcyIsImdldEFsbCIsImNoZWNrSWZJdGVtRXhpc3RzIiwiX2NoZWNrSWZJdGVtRXhpc3RzIiwiX2NhbGxlZTUiLCJleGlzdHMiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJwcm9taXNpZnlSZXF1ZXN0IiwiX2dldEhpc3RvcnlJblRpbWVSYW5nZSIsIl9jYWxsZWU2IiwicmFuZ2UiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJJREJLZXlSYW5nZSIsImJvdW5kIiwiRnVzZSIsImdldFNlYXJjaFJlc3VsdHMiLCJfZ2V0U2VhcmNoUmVzdWx0cyIsInJhd19xdWVyeSIsInF1ZXJ5IiwiZnVzZSIsInRvTG93ZXJDYXNlIiwid2VpZ2h0IiwidGhyZXNob2xkIiwiZmlsdGVyZWRJdGVtcyIsImxvd2VyQ2FzZVNlbGVjdGVkRmlsdGVycyIsImZpbHRlciIsInRhZ3MiLCJ0YWciLCJpbmNsdWRlcyIsImxvd2VyQ2FzZUV4Y2x1ZGVGaWx0ZXJzIiwiZGVmYXVsdERhdGVSYW5nZSIsImVuYWJsZUJhc2ljU3VtbWFyeSIsImFkZERhdGVSYW5nZUJ1dHRvbnMiLCJhZGRSZWZyZXNoQnV0dG9uIiwic2V0RGF0ZVJhbmdlIiwiaW5pdGlhbGl6ZUZpbHRlcnMiLCJhZGRPclVwZGF0ZVJlY2VudEhpc3RvcnlXaWRnZXQiLCJhZGRPclVwZGF0ZUJhc2ljU3VtbWFyeVdpZGdldCIsImxvYWRDb250ZW50IiwidG9nZ2xlIiwiY29udGFpbnMiLCJzYXZlZFRoZW1lIiwiX3JlZjIiLCJpbnB1dCIsIm5ld0ZpbHRlciIsImN1c3RvbUZpbHRlcnMiLCJjcmVhdGVUb2dnbGVCdXR0b24iLCJnZXRDdXN0b21GaWx0ZXJzIiwic2F2ZUN1c3RvbUZpbHRlcnMiLCJfcmVmMyIsIm5ld0V4Y2x1ZGVGaWx0ZXIiLCJjdXN0b21FeGNsdWRlRmlsdGVycyIsImdldEN1c3RvbUV4Y2x1ZGVGaWx0ZXJzIiwic2F2ZUN1c3RvbUV4Y2x1ZGVGaWx0ZXJzIiwicmVmcmVzaEJ1dHRvbiIsInRleHRDb250ZW50IiwiY29udGFpbmVyIiwiYnV0dG9uRGF0YSIsImxhYmVsIiwiZGF0YSIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsImJ0biIsInRvZGF5IiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwic2V0TW9udGgiLCJnZXRNb250aCIsIm1vbnRoTWFwIiwiamFuIiwiZmViIiwibWFyIiwiZ2V0RnVsbFllYXIiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJfYWRkT3JVcGRhdGVSZWNlbnRIaXN0b3J5V2lkZ2V0IiwibGFzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVSZWNlbnRIaXN0b3J5RWxlbWVudCIsIl9hZGRPclVwZGF0ZUJhc2ljU3VtbWFyeVdpZGdldCIsImNyZWF0ZUJhc2ljU3VtbWFyeUVsZW1lbnQiLCJfbG9hZENvbnRlbnQiLCJfY2FsbGVlNyIsIl9jYWxsZWU3JCIsIl9jb250ZXh0NyIsIl9jcmVhdGVSZWNlbnRIaXN0b3J5RWxlbWVudCIsIl9jYWxsZWU4IiwiX3lpZWxkJGdldEhpc3RvcnlXaXRoIiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4IiwiYm94IiwiaGVhZGVyIiwiaGl0Q291bnQiLCJ0aXRsZXNDb250YWluZXIiLCJ0aXRsZXNMaXN0IiwiaW5pdGlhbERpc3BsYXlDb3VudCIsImFkZGl0aW9uYWxMb2FkQ291bnQiLCJkaXNwbGF5ZWRUaXRsZXMiLCJ0aXRsZUl0ZW0iLCJsaXN0SXRlbSIsImxpbmsiLCJtb3JlQnV0dG9uIiwiZGF0YXNldCIsImxvYWRNb3JlVGl0bGVzIiwiX2NyZWF0ZUJhc2ljU3VtbWFyeUVsZW1lbnQiLCJfY2FsbGVlOSIsIl95aWVsZCRnZXRIaXN0b3J5V2l0aDIiLCJoaXN0b3J5SXRlbVRpdGxlcyIsIl9pIiwiX2NodW5rcyIsInRleHRFbGVtZW50IiwiX2NhbGxlZTkkIiwiX2NvbnRleHQ5IiwiZmxhdCIsImluaXRpYWxDb3VudCIsImxvYWRDb3VudCIsImN1cnJlbnRDb3VudCIsIm5leHRDb3VudCIsInRpdGxlc1RvQWRkIiwicmVtYWluaW5nIiwiX2luaXRpYWxpemVGaWx0ZXJzIiwiX2NhbGxlZTEwIiwiX2NhbGxlZTEwJCIsIl9jb250ZXh0MTAiLCJpbml0aWFsaXplQ2F0ZWdvcnlGaWx0ZXJzIiwiaW5pdGlhbGl6ZUV4Y2x1ZGVGaWx0ZXJzIiwiX2luaXRpYWxpemVDYXRlZ29yeUZpbHRlcnMiLCJfY2FsbGVlMTEiLCJkZWZhdWx0RmlsdGVycyIsImFsbEZpbHRlcnMiLCJfY2FsbGVlMTEkIiwiX2NvbnRleHQxMSIsIl90b0NvbnN1bWFibGVBcnJheSIsImdldFNlbGVjdGVkRmlsdGVycyIsInVwZGF0ZUZpbHRlclN0YXRlcyIsIl9pbml0aWFsaXplRXhjbHVkZUZpbHRlcnMiLCJfY2FsbGVlMTIiLCJfY2FsbGVlMTIkIiwiX2NvbnRleHQxMiIsImdldFNlbGVjdGVkRXhjbHVkZUZpbHRlcnMiLCJzYXZlU2VsZWN0ZWRGaWx0ZXJzIiwic2VsZWN0ZWRFeGNsdWRlRmlsdGVycyIsInNhdmVTZWxlY3RlZEV4Y2x1ZGVGaWx0ZXJzIiwiaXNEZWZhdWx0IiwiZmlsdGVyVHlwZSIsImNvbnRhaW5lcklkIiwicmVtb3ZlQnRuIiwiX3JlZjQiLCJzdG9wUHJvcGFnYXRpb24iLCJyZW1vdmVGaWx0ZXIiLCJpbmRleE9mIiwic3BsaWNlIiwiX3JlbW92ZUZpbHRlciIsIl9jYWxsZWUxMyIsImZpbHRlckluZGV4IiwiX2luZGV4MiIsIl9maWx0ZXJJbmRleCIsIl9idXR0b24iLCJfY2FsbGVlMTMkIiwiX2NvbnRleHQxMyIsImJ1dHRvbnMiXSwic291cmNlUm9vdCI6IiJ9