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
/* harmony export */   getSummarizer: () => (/* binding */ getSummarizer)
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


/***/ }),

/***/ "./src/user_dashboard/history.js":
/*!***************************************!*\
  !*** ./src/user_dashboard/history.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHistory: () => (/* binding */ getHistory),
/* harmony export */   getHistoryWithTopNStats: () => (/* binding */ getHistoryWithTopNStats)
/* harmony export */ });
/* harmony import */ var _utils_db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/db.js */ "./src/utils/db.js");
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
function getHistoryWithTopNStats(_x3, _x4, _x5) {
  return _getHistoryWithTopNStats.apply(this, arguments);
}
function _getHistoryWithTopNStats() {
  _getHistoryWithTopNStats = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(startDate, endDate, N) {
    var historyItems, parsedHistoryItems, hostnameMap, hostnameTitleMap, sortedHostnames, topNHostnames, topNHostnamesWithTitles;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0,_utils_db_js__WEBPACK_IMPORTED_MODULE_0__.getHistoryInTimeRange)(startDate.getTime(), endDate.getTime());
        case 2:
          historyItems = _context2.sent;
          parsedHistoryItems = historyItems.map(function (item) {
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
        case 10:
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


/***/ }),

/***/ "./src/user_dashboard/widgets.js":
/*!***************************************!*\
  !*** ./src/user_dashboard/widgets.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
 * Input startdate and enddate, fetch all history items in that range, search within lastVisitTime index of the db  
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

/***/ "./src/user_dashboard/styles.css":
/*!***************************************!*\
  !*** ./src/user_dashboard/styles.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





var startDate, endDate;
document.addEventListener('DOMContentLoaded', function () {
  addDateRangeButtons();
  addRefreshButton();
  setDateRange('24h');
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
});
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
      startDate = new Date(today.getFullYear(), 0, 1);
      endDate = new Date(today.getFullYear(), 1, 0);
      break;
    case 'feb':
      startDate = new Date(today.getFullYear(), 1, 1);
      endDate = new Date(today.getFullYear(), 2, 0);
      break;
    case 'mar':
      startDate = new Date(today.getFullYear(), 2, 1);
      endDate = new Date(today.getFullYear(), 3, 0);
      break;
    default:
      startDate = today;
      endDate = today;
  }
  var formatDate = function formatDate(date) {
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);
    return "".concat(year, "-").concat(month, "-").concat(day);
  };
  document.getElementById('display-start-date').textContent = formatDate(startDate);
  document.getElementById('display-end-date').textContent = formatDate(endDate);
}

/* Add Overall Summary Widget */
function addOrUpdateRecentHistoryWidget() {
  var newWidget = (0,_widgets_js__WEBPACK_IMPORTED_MODULE_2__.createOrGetWidget)('recent-history', 'Recent History');

  // delete chidlren containing *contents*
  while (newWidget.lastChild && newWidget.lastChild.id && newWidget.lastChild.id.includes('recent-history-contents')) {
    newWidget.removeChild(newWidget.lastChild);
  }
  createRecentHistoryElement().then(function (widget) {
    newWidget.appendChild(widget);
  });
}
function addOrUpdateBasicSummaryWidget() {
  var newWidget = (0,_widgets_js__WEBPACK_IMPORTED_MODULE_2__.createOrGetWidget)('basic-summary', 'Summary');

  // delete chidlren containing *contents*
  while (newWidget.lastChild && newWidget.lastChild.id && newWidget.lastChild.id.includes('contents')) {
    newWidget.removeChild(newWidget.lastChild);
  }
  createBasicSummaryElement().then(function (widget) {
    newWidget.appendChild(widget);
  });
}

/* Load Content Based on Date Range */
function loadContent() {
  addOrUpdateRecentHistoryWidget();
  addOrUpdateBasicSummaryWidget();
}
function createRecentHistoryElement() {
  return _createRecentHistoryElement.apply(this, arguments);
}
function _createRecentHistoryElement() {
  _createRecentHistoryElement = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var topNHostnamesWithTitles, container;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_history_js__WEBPACK_IMPORTED_MODULE_1__.getHistoryWithTopNStats)(startDate, endDate, 10);
        case 2:
          topNHostnamesWithTitles = _context.sent;
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

            // Display top 10 titles
            var topTitles = item.titles.slice(0, 10);
            topTitles.forEach(function (titleItem) {
              var listItem = document.createElement('li');
              var link = document.createElement('a');
              link.href = titleItem.url;
              link.textContent = titleItem.title;
              link.target = '_blank';
              listItem.appendChild(link);
              titlesList.appendChild(listItem);
            });

            // If there are more than 10 titles, make the list scrollable
            if (item.titles.length > 10) {
              var moreCount = item.titles.length - 10;
              var scrollable = document.createElement('div');
              scrollable.className = 'scrollable-titles';
              scrollable.appendChild(titlesList);
              var moreIndicator = document.createElement('p');
              moreIndicator.textContent = "and ".concat(moreCount, " more...");
              scrollable.appendChild(moreIndicator);
              titlesContainer.appendChild(scrollable);
            } else {
              titlesContainer.appendChild(titlesList);
            }

            // Assemble the box
            box.appendChild(header);
            box.appendChild(titlesContainer);
            container.appendChild(box);
          });
          return _context.abrupt("return", container);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _createRecentHistoryElement.apply(this, arguments);
}
function createBasicSummaryElement() {
  return _createBasicSummaryElement.apply(this, arguments);
}
function _createBasicSummaryElement() {
  _createBasicSummaryElement = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var historyItems, textElement, historyItemTitles, summarizer, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0,_history_js__WEBPACK_IMPORTED_MODULE_1__.getHistory)(startDate, endDate);
        case 2:
          historyItems = _context2.sent;
          console.log(historyItems);
          textElement = document.createElement('p');
          textElement.id = 'basic-summary-contents';
          historyItemTitles = historyItems.map(function (item) {
            return item.title || (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.extractDomain)(item.url);
          }).join('\n');
          _context2.next = 9;
          return (0,_ai_summarizer_js__WEBPACK_IMPORTED_MODULE_0__.getSummarizer)();
        case 9:
          summarizer = _context2.sent;
          _context2.next = 12;
          return summarizer.summarize(historyItemTitles);
        case 12:
          result = _context2.sent;
          console.log(result);

          // update the text content of the text element
          // textElement.textContent = result;
          textElement.innerHTML = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.markdownToHtml)(result);
          return _context2.abrupt("return", textElement);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _createBasicSummaryElement.apply(this, arguments);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQztVQUFBMUIsU0FBQSxDQUFBN0YsSUFBQTtVQUFBLE9BRTNFMkMsZ0VBQWEsQ0FBQyxDQUFDO1FBQUE7VUFBbENJLFVBQVUsR0FBQThDLFNBQUEsQ0FBQW5HLElBQUE7VUFBQW1HLFNBQUEsQ0FBQTdGLElBQUE7VUFBQSxPQUNLK0MsVUFBVSxDQUFDb1EsU0FBUyxDQUFDRCxpQkFBaUIsQ0FBQztRQUFBO1VBQXREckgsTUFBTSxHQUFBaEcsU0FBQSxDQUFBbkcsSUFBQTtVQUNaMkQsT0FBTyxDQUFDQyxHQUFHLENBQUN1SSxNQUFNLENBQUM7O1VBRW5CO1VBQ0E7VUFDQW9ILFdBQVcsQ0FBQ3pHLFNBQVMsR0FBRzdELHlEQUFjLENBQUNrRCxNQUFNLENBQUM7VUFBQyxPQUFBaEcsU0FBQSxDQUFBaEcsTUFBQSxXQUV4Q29ULFdBQVc7UUFBQTtRQUFBO1VBQUEsT0FBQXBOLFNBQUEsQ0FBQS9ELElBQUE7TUFBQTtJQUFBLEdBQUFxRCxRQUFBO0VBQUEsQ0FDbkI7RUFBQSxPQUFBNk4sMEJBQUEsQ0FBQXhRLEtBQUEsT0FBQUQsU0FBQTtBQUFBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci8uL3NyYy9haS9zdW1tYXJpemVyLmpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3VzZXJfZGFzaGJvYXJkL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvdXNlcl9kYXNoYm9hcmQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvdXNlcl9kYXNoYm9hcmQvd2lkZ2V0cy5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci8uL3NyYy91dGlscy9kYi5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci8uL3NyYy91c2VyX2Rhc2hib2FyZC9zdHlsZXMuY3NzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvdXNlcl9kYXNoYm9hcmQvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldFN1bW1hcml6ZXIoKSB7XG4gICAgY29uc3QgY2FuU3VtbWFyaXplID0gYXdhaXQgYWkuc3VtbWFyaXplci5jYXBhYmlsaXRpZXMoKTtcbiAgICBsZXQgc3VtbWFyaXplcjtcbiAgICBpZiAoY2FuU3VtbWFyaXplICYmIGNhblN1bW1hcml6ZS5hdmFpbGFibGUgIT09ICdubycpIHtcbiAgICAgICAgaWYgKGNhblN1bW1hcml6ZS5hdmFpbGFibGUgPT09ICdyZWFkaWx5Jykge1xuICAgICAgICAgICAgLy8gVGhlIHN1bW1hcml6ZXIgY2FuIGltbWVkaWF0ZWx5IGJlIHVzZWQuXG4gICAgICAgICAgICBzdW1tYXJpemVyID0gYXdhaXQgYWkuc3VtbWFyaXplci5jcmVhdGUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdW1tYXJpemVyIHJlYWR5IG5vdycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhlIHN1bW1hcml6ZXIgY2FuIGJlIHVzZWQgYWZ0ZXIgdGhlIG1vZGVsIGRvd25sb2FkLlxuICAgICAgICAgICAgc3VtbWFyaXplciA9IGF3YWl0IGFpLnN1bW1hcml6ZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICBzdW1tYXJpemVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Rvd25sb2FkcHJvZ3Jlc3MnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubG9hZGVkLCBlLnRvdGFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXdhaXQgc3VtbWFyaXplci5yZWFkeTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGZWF0dXJlIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGZWF0dXJlIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgLy8gVGhlIHN1bW1hcml6ZXIgY2FuJ3QgYmUgdXNlZCBhdCBhbGwuXG4gICAgfVxuICAgIHJldHVybiBzdW1tYXJpemVyO1xufVxuXG5leHBvcnQgeyBnZXRTdW1tYXJpemVyIH07IiwiaW1wb3J0IHsgZ2V0SGlzdG9yeUluVGltZVJhbmdlIH0gZnJvbSAnLi4vdXRpbHMvZGIuanMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SGlzdG9yeShzdGFydERhdGUsIGVuZERhdGUpIHtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuaGlzdG9yeS5zZWFyY2goe3RleHQ6ICcnLCBzdGFydFRpbWU6IHN0YXJ0RGF0ZS5nZXRUaW1lKCksIGVuZFRpbWU6IGVuZERhdGUuZ2V0VGltZSgpLCBtYXhSZXN1bHRzOiA0MCB9LCAocmVzdWx0cykgPT4ge1xuICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cyk7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4vKipcbiAqIFxuICogQHBhcmFtIHsqfSBzdGFydERhdGUgXG4gKiBAcGFyYW0geyp9IGVuZERhdGUgXG4gKiBAcGFyYW0geyp9IE4gXG4gKiBAcmV0dXJucyBcbiAqIFxuICogXG4gKiAoNSkgW3vigKZ9LCB74oCmfSwge+KApn0sIHvigKZ9LCB74oCmfV1cbjBcbjogXG57aG9zdG5hbWU6ICd3d3cuY3Vyc29yLmNvbScsIHRpdGxlczogQXJyYXkoNiksIGNvdW50OiAyNH1cbjFcbjogXG57aG9zdG5hbWU6ICd3d3cueW91dHViZS5jb20nLCB0aXRsZXM6IEFycmF5KDEyKSwgY291bnQ6IDIxfVxuMlxuOiBcbntob3N0bmFtZTogJ21haWwuZ29vZ2xlLmNvbScsIHRpdGxlczogQXJyYXkoMTIpLCBjb3VudDogMTh9XG4zXG46IFxue2hvc3RuYW1lOiAnZGV2ZWxvcGVyLmNocm9tZS5jb20nLCB0aXRsZXM6IEFycmF5KDIpLCBjb3VudDogMTZ9XG40XG46IFxue2hvc3RuYW1lOiAnZ2l0aHViLmNvbScsIHRpdGxlczogQXJyYXkoNyksIGNvdW50OiAxMn1cblxuZXhhbXBsZSB0aXRsZXM6XG5cbjBcbjogXG57dGl0bGU6ICdpbiBjdXJzdXIgZHVyaW5nIGluZGV4aW5nLCBpcyB0aGUgcmVzdWx0cyBzdG9yZWQgbGNvYWxseSAtIEdvb2dsZSBTZWFyY2gnLCB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPWluK2N1cnN1citkdXJpbmcraeKAplNBUWt4TWpVek1Hb3dhamVvQWdDd0FnQSZzb3VyY2VpZD1jaHJvbWUmaWU9VVRGLTgnfVxuMVxuOiBcbnt0aXRsZTogJ3NsYWNrIGludGVncmF0aW9uIHRvIG5vdGlvbiAtIEdvb2dsZSBTZWFyY2gnLCB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPXNsYWNrK2ludGVncmF0aW9uK+KAplRTQVFnMk16QXlhakJxTjZnQ0FMQUNBQSZzb3VyY2VpZD1jaHJvbWUmaWU9VVRGLTgnfVxuMlxuOiBcbnt0aXRsZTogJ2kgd2FudCB0byBjb252ZXJ0IGEgc2xhY2sgY2hhbm5lbCB0byBub3Rpb24gZG9jdW1lbnQgLSBHb29nbGUgU2VhcmNoJywgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1pK3dhbnQrdG8rY29udmVydCvigKZ1Z1lHQ0FFUUFSZ1RrZ2NFT1M0ek42QUhnY2NDJnNjbGllbnQ9Z3dzLXdpei1zZXJwJ31cbjNcbjogXG57dGl0bGU6ICdjb252ZXJ0IHBpbCBpbWFnZSB0byBkaWNvbSBmaWxlIC0gR29vZ2xlIFNlYXJjaCcsIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9Y29udmVydCtwaWwraW1hZ2Ur4oCmQWRJQkNEZzBOemxxTUdvM3FBSUFzQUlBJnNvdXJjZWlkPWNocm9tZSZpZT1VVEYtOCd9XG40XG46IFxue3RpdGxlOiAnc3VwZXIgcmVzb2x1dGlvbiBtb2RlbHMgLSBHb29nbGUgU2VhcmNoJywgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1zdXBlcityZXNvbHV0aW9uK23igKZlMGdFSU5qSXlNR293YWplb0FnQ3dBZ0Emc291cmNlaWQ9Y2hyb21lJmllPVVURi04J31cbjVcbjogXG57dGl0bGU6ICdzdXBlciByZXNvbHV0aW9uIG1vZGVsIG9ubGluZSBmcmVlIC0gR29vZ2xlIFNlYXJjaCcsIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9c3VwZXIrcmVzb2x1dGlvbitt4oCmRm1BTUFpQVlCa0FZSWtnY0VNaTR4TTZBSGtsayZzY2xpZW50PWd3cy13aXotc2VycCd9XG4gKi9cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhpc3RvcnlXaXRoVG9wTlN0YXRzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgTikge1xuICAgIGNvbnN0IGhpc3RvcnlJdGVtcyA9IGF3YWl0IGdldEhpc3RvcnlJblRpbWVSYW5nZShzdGFydERhdGUuZ2V0VGltZSgpLCBlbmREYXRlLmdldFRpbWUoKSk7XG4gICAgY29uc3QgcGFyc2VkSGlzdG9yeUl0ZW1zID0gaGlzdG9yeUl0ZW1zLm1hcChpdGVtID0+IHBhcnNlX3VybF9wYXJ0KGl0ZW0udXJsLCBpdGVtLnRpdGxlKSk7XG4gICAgY29uc3QgaG9zdG5hbWVNYXAgPSBjb3VudF9ieV9ob3N0bmFtZShwYXJzZWRIaXN0b3J5SXRlbXMpO1xuICAgIGNvbnN0IGhvc3RuYW1lVGl0bGVNYXAgPSBjcmVhdGVIb3N0TmFtZVRpdGxlTWFwKHBhcnNlZEhpc3RvcnlJdGVtcyk7XG4gICAgY29uc3Qgc29ydGVkSG9zdG5hbWVzID0gQXJyYXkuZnJvbShob3N0bmFtZU1hcC5lbnRyaWVzKCkpLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKTtcbiAgICBjb25zdCB0b3BOSG9zdG5hbWVzID0gc29ydGVkSG9zdG5hbWVzLnNsaWNlKDAsIE4pO1xuICAgIGNvbnN0IHRvcE5Ib3N0bmFtZXNXaXRoVGl0bGVzID0gdG9wTkhvc3RuYW1lcy5tYXAoaXRlbSA9PiAoeyBob3N0bmFtZTogaXRlbVswXSwgdGl0bGVzOiBob3N0bmFtZVRpdGxlTWFwLmdldChpdGVtWzBdKSwgY291bnQ6IGl0ZW1bMV0gfSkpO1xuXG4gICAgcmV0dXJuIHRvcE5Ib3N0bmFtZXNXaXRoVGl0bGVzO1xufVxuXG5cbmZ1bmN0aW9uIHBhcnNlX3VybF9wYXJ0KHVybCwgdGl0bGUpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKHVybCk7XG5cbiAgICAgICAgLy8gRXh0cmFjdCBwcm90b2NvbCB3aXRob3V0IHRoZSB0cmFpbGluZyBjb2xvbiAoZS5nLiwgJ2h0dHBzJylcbiAgICAgICAgY29uc3QgcHJvdG9jb2wgPSBwYXJzZWRVcmwucHJvdG9jb2wucmVwbGFjZSgnOicsICcnKTtcblxuICAgICAgICAvLyBTcGxpdCBob3N0bmFtZSBpbnRvIHBhcnRzIHRvIGlkZW50aWZ5IHN1YmRvbWFpbiwgZG9tYWluLCBhbmQgVExEXG4gICAgICAgIGNvbnN0IGhvc3RuYW1lUGFydHMgPSBwYXJzZWRVcmwuaG9zdG5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgbGV0IHN1YmRvbWFpbiA9ICcnO1xuICAgICAgICBsZXQgZG9tYWluID0gJyc7XG4gICAgICAgIGxldCB0bGQgPSAnJztcblxuICAgICAgICBpZiAoaG9zdG5hbWVQYXJ0cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBzdWJkb21haW4gPSBob3N0bmFtZVBhcnRzLnNsaWNlKDAsIGhvc3RuYW1lUGFydHMubGVuZ3RoIC0gMikuam9pbignLicpO1xuICAgICAgICAgICAgZG9tYWluID0gaG9zdG5hbWVQYXJ0c1tob3N0bmFtZVBhcnRzLmxlbmd0aCAtIDJdO1xuICAgICAgICAgICAgdGxkID0gaG9zdG5hbWVQYXJ0c1tob3N0bmFtZVBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9IGVsc2UgaWYgKGhvc3RuYW1lUGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBkb21haW4gPSBob3N0bmFtZVBhcnRzWzBdO1xuICAgICAgICAgICAgdGxkID0gaG9zdG5hbWVQYXJ0c1sxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvbWFpbiA9IHBhcnNlZFVybC5ob3N0bmFtZTtcbiAgICAgICAgICAgIHRsZCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXh0cmFjdCBwYXRoIChlbmRwb2ludClcbiAgICAgICAgY29uc3QgcGF0aCA9IHBhcnNlZFVybC5wYXRobmFtZTtcblxuICAgICAgICAvLyBFeHRyYWN0IHF1ZXJ5IHBhcmFtZXRlcnMgYXMga2V5LXZhbHVlIHBhaXJzXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0ge307XG4gICAgICAgIHBhcnNlZFVybC5zZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGtleSBhbHJlYWR5IGV4aXN0cywgY29udmVydCBpdCBpbnRvIGFuIGFycmF5XG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXNba2V5XSkge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5UGFyYW1zW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNba2V5XSA9IFtxdWVyeVBhcmFtc1trZXldLCB2YWx1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEV4dHJhY3QgZnJhZ21lbnQgd2l0aG91dCB0aGUgbGVhZGluZyBoYXNoIChlLmcuLCAnc2VjdGlvbjEnKVxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHBhcnNlZFVybC5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG5cbiAgICAgICAgLy8gRXh0cmFjdCBwb3J0IGlmIHNwZWNpZmllZCwgZWxzZSBkZWZhdWx0IGJhc2VkIG9uIHByb3RvY29sXG4gICAgICAgIGxldCBwb3J0ID0gcGFyc2VkVXJsLnBvcnQ7XG4gICAgICAgIGlmICghcG9ydCkge1xuICAgICAgICAgICAgaWYgKHByb3RvY29sID09PSAnaHR0cCcpIHtcbiAgICAgICAgICAgICAgICBwb3J0ID0gJzgwJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvdG9jb2wgPT09ICdodHRwcycpIHtcbiAgICAgICAgICAgICAgICBwb3J0ID0gJzQ0Myc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcnQgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm90b2NvbCxcbiAgICAgICAgICAgIHN1YmRvbWFpbixcbiAgICAgICAgICAgIGRvbWFpbixcbiAgICAgICAgICAgIHRsZCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBxdWVyeVBhcmFtcyxcbiAgICAgICAgICAgIGZyYWdtZW50LFxuICAgICAgICAgICAgcG9ydCxcbiAgICAgICAgICAgIC8vIEFkZGl0aW9uYWwgVXNlZnVsIENvbXBvbmVudHNcbiAgICAgICAgICAgIGhvc3Q6IHBhcnNlZFVybC5ob3N0LCAvLyBpbmNsdWRlcyBob3N0bmFtZSBhbmQgcG9ydFxuICAgICAgICAgICAgaG9zdG5hbWU6IHBhcnNlZFVybC5ob3N0bmFtZSxcbiAgICAgICAgICAgIGhyZWY6IHBhcnNlZFVybC5ocmVmLFxuICAgICAgICAgICAgb3JpZ2luOiBwYXJzZWRVcmwub3JpZ2luLFxuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIFVSTDogJHt1cmx9YCwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvdW50X2J5X2hvc3RuYW1lKHBhcnNlZEhpc3RvcnlJdGVtcykge1xuICAgIGNvbnN0IGhvc3RuYW1lTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgcGFyc2VkSGlzdG9yeUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGhvc3RuYW1lID0gaXRlbS5ob3N0bmFtZTtcbiAgICAgICAgaWYgKGhvc3RuYW1lKSB7XG4gICAgICAgICAgICBpZiAoaG9zdG5hbWVNYXAuaGFzKGhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIGhvc3RuYW1lTWFwLnNldChob3N0bmFtZSwgaG9zdG5hbWVNYXAuZ2V0KGhvc3RuYW1lKSArIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBob3N0bmFtZU1hcC5zZXQoaG9zdG5hbWUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaG9zdG5hbWVNYXA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvc3ROYW1lVGl0bGVNYXAocGFyc2VkSGlzdG9yeUl0ZW1zKSB7XG4gICAgY29uc3QgaG9zdG5hbWVNYXAgPSBuZXcgTWFwKCk7XG4gICAgcGFyc2VkSGlzdG9yeUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGhvc3RuYW1lID0gaXRlbS5ob3N0bmFtZTtcbiAgICAgICAgdmFyIHRpdGxlID0gaXRlbS50aXRsZTtcbiAgICAgICAgY29uc3QgdXJsID0gaXRlbS5ocmVmO1xuXG4gICAgICAgIC8vIGlmIHRpdGxlIGlzIGVtcHR5LCB1c2UgaG9zdG5hbWUgYXMgdGl0bGVcbiAgICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICAgICAgdGl0bGUgPSBob3N0bmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1haW50YWluIGEgbGlzdCBvZiB0aXRsZXMgZm9yIGVhY2ggaG9zdG5hbWVcbiAgICAgICAgaWYgKGhvc3RuYW1lTWFwLmhhcyhob3N0bmFtZSkpIHtcbiAgICAgICAgICAgIC8vIGlmIHRpdGxlIGlzIGFscmVhZHkgaW4gdGhlIGxpc3QsIGRvbid0IGFkZCBpdCBhZ2FpblxuICAgICAgICAgICAgaWYgKCFob3N0bmFtZU1hcC5nZXQoaG9zdG5hbWUpLnNvbWUodCA9PiB0LnRpdGxlID09PSB0aXRsZSkpIHtcbiAgICAgICAgICAgICAgICBob3N0bmFtZU1hcC5nZXQoaG9zdG5hbWUpLnB1c2goe3RpdGxlLCB1cmx9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhvc3RuYW1lTWFwLnNldChob3N0bmFtZSwgW3t0aXRsZSwgdXJsfV0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaG9zdG5hbWVNYXA7XG59XG5cblxuXG4vLyBleHBvcnQgeyBnZXRIaXN0b3J5IH07IiwiLy8gd3JpdGUgYSBmdW5jdGlvbiB0byBleHRyYWN0IGRvbWFpbiBuYW1lIGZyb20gYSB1cmxcbmZ1bmN0aW9uIGV4dHJhY3REb21haW4odXJsKSB7XG4gICAgcmV0dXJuIG5ldyBVUkwodXJsKS5ob3N0bmFtZTtcbiAgfVxuICBcbiAgXG4gIGZ1bmN0aW9uIG1hcmtkb3duVG9IdG1sKG1hcmtkb3duVGV4dCkge1xuICAgIC8vIENvbnZlcnQgYm9sZCB0ZXh0OiAqKnRleHQqKlxuICAgIGxldCBodG1sID0gbWFya2Rvd25UZXh0LnJlcGxhY2UoL1xcKlxcKiguKz8pXFwqXFwqL2csICc8c3Ryb25nPiQxPC9zdHJvbmc+Jyk7XG4gICAgXG4gICAgLy8gQ29udmVydCBpdGFsaWMgdGV4dDogKnRleHQqXG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFwqKC4rPylcXCovZywgJzxlbT4kMTwvZW0+Jyk7XG4gICAgXG4gICAgLy8gQ29udmVydCBidWxsZXQgcG9pbnRzOiAqIGl0ZW1cbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKC9eXFwqICguKykkL2dtLCAnPGxpPiQxPC9saT4nKTtcbiAgICBcbiAgICAvLyBXcmFwIGxpc3QgaXRlbXMgaW4gPHVsPiB0YWdzXG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvKDxsaT4uKjxcXC9saT4pL2csICc8dWw+JDE8L3VsPicpO1xuICBcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG5leHBvcnQgeyBleHRyYWN0RG9tYWluLCBtYXJrZG93blRvSHRtbCB9OyIsIi8qIEVuYWJsZSBSZXNpemluZyAqL1xuZnVuY3Rpb24gZW5hYmxlUmVzaXppbmcoKSB7XG4gICAgY29uc3QgcmVzaXphYmxlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzaXphYmxlJyk7XG4gIFxuICAgIHJlc2l6YWJsZUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCByZXNpemVIYW5kbGUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNpemUtaGFuZGxlJyk7XG4gICAgICBsZXQgaXNSZXNpemluZyA9IGZhbHNlO1xuICBcbiAgICAgIHJlc2l6ZUhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlzUmVzaXppbmcgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdzZS1yZXNpemUnO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Jlc2l6aW5nJyk7XG4gIFxuICAgICAgICBjb25zdCBzdGFydFdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3Qgc3RhcnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgY29uc3Qgc3RhcnRYID0gZS5jbGllbnRYO1xuICAgICAgICBjb25zdCBzdGFydFkgPSBlLmNsaWVudFk7XG4gIFxuICAgICAgICBjb25zdCBvbk1vdXNlTW92ZSA9IChlKSA9PiB7XG4gICAgICAgICAgaWYgKCFpc1Jlc2l6aW5nKSByZXR1cm47XG4gIFxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRXaWR0aCA9IHN0YXJ0V2lkdGggKyAoZS5jbGllbnRYIC0gc3RhcnRYKTtcbiAgICAgICAgICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gc3RhcnRIZWlnaHQgKyAoZS5jbGllbnRZIC0gc3RhcnRZKTtcbiAgXG4gICAgICAgICAgLy8gU2V0IG1pbmltdW0gZGltZW5zaW9uc1xuICAgICAgICAgIGNvbnN0IG1pbldpZHRoID0gMjAwO1xuICAgICAgICAgIGNvbnN0IG1pbkhlaWdodCA9IDEwMDtcbiAgXG4gICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke01hdGgubWF4KGN1cnJlbnRXaWR0aCwgbWluV2lkdGgpfXB4YDtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke01hdGgubWF4KGN1cnJlbnRIZWlnaHQsIG1pbkhlaWdodCl9cHhgO1xuICAgICAgICB9O1xuICBcbiAgICAgICAgY29uc3Qgb25Nb3VzZVVwID0gKCkgPT4ge1xuICAgICAgICAgIGlzUmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Jlc2l6aW5nJyk7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gIFxuICAgICAgICAgIC8vIFNhdmUgZGltZW5zaW9uc1xuICAgICAgICAgIHNhdmVXaWRnZXRTaXplKGVsZW1lbnQuaWQsIGVsZW1lbnQuc3R5bGUud2lkdGgsIGVsZW1lbnQuc3R5bGUuaGVpZ2h0KTtcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgIH0pO1xuICBcbiAgICAgIC8vIExvYWQgc2F2ZWQgZGltZW5zaW9uc1xuICAgICAgbG9hZFdpZGdldFNpemUoZWxlbWVudC5pZCwgZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIC8qIFNhdmUgV2lkZ2V0IFNpemUgKi9cbiAgZnVuY3Rpb24gc2F2ZVdpZGdldFNpemUod2lkZ2V0SWQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgaWYgKGNocm9tZSAmJiBjaHJvbWUuc3RvcmFnZSAmJiBjaHJvbWUuc3RvcmFnZS5sb2NhbCkge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW3dpZGdldElkXTogc2l6ZSB9LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTYXZlZCBzaXplIGZvciAke3dpZGdldElkfTpgLCBzaXplKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGb3IgdGVzdGluZyBvdXRzaWRlIG9mIENocm9tZSBleHRlbnNpb25cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHdpZGdldElkLCBKU09OLnN0cmluZ2lmeShzaXplKSk7XG4gICAgfVxuICB9XG4gIFxuICAvKiBMb2FkIFdpZGdldCBTaXplICovXG4gIGZ1bmN0aW9uIGxvYWRXaWRnZXRTaXplKHdpZGdldElkLCBlbGVtZW50KSB7XG4gICAgaWYgKGNocm9tZSAmJiBjaHJvbWUuc3RvcmFnZSAmJiBjaHJvbWUuc3RvcmFnZS5sb2NhbCkge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHdpZGdldElkLCAocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHRbd2lkZ2V0SWRdKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IHJlc3VsdFt3aWRnZXRJZF0ud2lkdGg7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSByZXN1bHRbd2lkZ2V0SWRdLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZvciB0ZXN0aW5nIG91dHNpZGUgb2YgQ2hyb21lIGV4dGVuc2lvblxuICAgICAgY29uc3Qgc2l6ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0od2lkZ2V0SWQpKTtcbiAgICAgIGlmIChzaXplKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBzaXplLndpZHRoO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gY3JlYXRlT3JHZXRXaWRnZXQodW5pcXVlSUQsIHdpZGdldFRpdGxlKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVuaXF1ZUlEKSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVuaXF1ZUlEKTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IHdpZGdldENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aWRnZXQtY29udGFpbmVyJyk7XG4gIFxuICAgIC8vIENyZWF0ZSBhIG5ldyB3aWRnZXQgZWxlbWVudFxuICAgIGNvbnN0IG5ld1dpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1dpZGdldC5jbGFzc05hbWUgPSAnd2lkZ2V0IHJlc2l6YWJsZSc7XG4gIFxuICAgIC8vIEdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciB0aGUgbmV3IHdpZGdldFxuICAgIG5ld1dpZGdldC5pZCA9IHVuaXF1ZUlEO1xuICBcbiAgICAvLyBTZXQgdGhlIGNvbnRlbnQgb2YgdGhlIG5ldyB3aWRnZXRcbiAgICBuZXdXaWRnZXQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0LWhlYWRlclwiPlxuICAgICAgICAgICAgPGgyPiR7d2lkZ2V0VGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXNpemUtaGFuZGxlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gIFxuICAgIC8vIEFwcGVuZCB0aGUgbmV3IHdpZGdldCB0byB0aGUgd2lkZ2V0IGNvbnRhaW5lclxuICAgIHdpZGdldENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdXaWRnZXQpO1xuICBcbiAgICByZXR1cm4gbmV3V2lkZ2V0O1xuICB9XG5cbmV4cG9ydCB7IGVuYWJsZVJlc2l6aW5nLCBzYXZlV2lkZ2V0U2l6ZSwgbG9hZFdpZGdldFNpemUsIGNyZWF0ZU9yR2V0V2lkZ2V0IH07XG4gICIsIi8vIGRiLmpzXG5cbmxldCBkYjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9wZW5EYXRhYmFzZSgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoZGIpIHtcbiAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oJ0hpc3RvcnlJbmRleGVyREInLCAxKTtcblxuICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRGF0YWJhc2UgZXJyb3I6JywgZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2ZW50KSA9PiB7XG4gICAgICBkYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICBjb25zdCBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdoaXN0b3J5JywgeyBrZXlQYXRoOiAnaWQnIH0pO1xuICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ3VybCcsICd1cmwnLCB7IHVuaXF1ZTogZmFsc2UgfSk7XG4gICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgndGl0bGUnLCAndGl0bGUnLCB7IHVuaXF1ZTogZmFsc2UgfSk7XG4gICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgndGFncycsICd0YWdzJywgeyB1bmlxdWU6IGZhbHNlLCBtdWx0aUVudHJ5OiB0cnVlIH0pO1xuICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ3N1bW1hcnknLCAnc3VtbWFyeScsIHsgdW5pcXVlOiBmYWxzZSB9KTtcbiAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KCdsYXN0VmlzaXRUaW1lJywgJ2xhc3RWaXNpdFRpbWUnLCB7IHVuaXF1ZTogdHJ1ZSB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgdXBncmFkZWRcIik7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICBkYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICByZXNvbHZlKGRiKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFyRGF0YWJhc2UoKSB7XG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oWydoaXN0b3J5J10sICdyZWFkd3JpdGUnKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gICAgY29uc3QgcmVxdWVzdCA9IG9iamVjdFN0b3JlLmNsZWFyKCk7XG4gICAgY29uc29sZS5sb2coXCJDbGVhcmluZyBkYXRhYmFzZVwiKTtcblxuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgIHJlamVjdChldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEhpc3RvcnlJdGVtKGl0ZW0pIHtcbiAgYXdhaXQgb3BlbkRhdGFiYXNlKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbJ2hpc3RvcnknXSwgJ3JlYWR3cml0ZScpO1xuICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ2hpc3RvcnknKTtcbiAgICBjb25zdCBpbmRleCA9IG9iamVjdFN0b3JlLmluZGV4KCdsYXN0VmlzaXRUaW1lJyk7XG5cbiAgICAvLyBDaGVjayBpZiBhbiBpdGVtIHdpdGggdGhlIHNhbWUgbGFzdFZpc2l0VGltZSBhbHJlYWR5IGV4aXN0c1xuICAgIGNvbnN0IGNoZWNrUmVxdWVzdCA9IGluZGV4LmdldChpdGVtLmxhc3RWaXNpdFRpbWUpO1xuXG4gICAgY2hlY2tSZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5yZXN1bHQpIHtcbiAgICAgICAgLy8gSXRlbSB3aXRoIHRoZSBzYW1lIGxhc3RWaXNpdFRpbWUgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIHdpdGggdGhlIHNhbWUgbGFzdFZpc2l0VGltZSBhbHJlYWR5IGV4aXN0cywgbm90IGFkZGluZy5cIik7XG4gICAgICAgIHJlc29sdmUoKTsgLy8gUmVzb2x2ZSB3aXRob3V0IGFkZGluZ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm8gaXRlbSB3aXRoIHRoZSBzYW1lIGxhc3RWaXNpdFRpbWUsIHByb2NlZWQgdG8gYWRkXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBvYmplY3RTdG9yZS5wdXQoaXRlbSk7XG5cbiAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYEhpc3RvcnkgaXRlbSBhZGRlZGApO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgaXRlbTonLCBldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICAgICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNoZWNrUmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBsYXN0VmlzaXRUaW1lOicsIGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgIH07XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsSGlzdG9yeUl0ZW1zKCkge1xuICBhd2FpdCBvcGVuRGF0YWJhc2UoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFsnaGlzdG9yeSddLCAncmVhZG9ubHknKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gICAgY29uc3QgcmVxdWVzdCA9IG9iamVjdFN0b3JlLmdldEFsbCgpO1xuXG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgIHJlc29sdmUoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkFsbCBoaXN0b3J5IGl0ZW1zIGZldGNoZWRcIik7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWxsIGhpc3RvcnkgaXRlbXM6JywgZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgfTtcbiAgfSk7XG59XG5cblxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhpc3RvcnkgaXRlbSB3aXRoIHRoZSBzcGVjaWZpZWQgbGFzdFZpc2l0VGltZSBleGlzdHMgaW4gdGhlIEluZGV4ZWREQi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsYXN0VmlzaXRUaW1lIC0gVGhlIGxhc3QgdmlzaXQgdGltZSBvZiB0aGUgaGlzdG9yeSBpdGVtLlxuICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IC0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgaXRlbSBleGlzdHMsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrSWZJdGVtRXhpc3RzKGxhc3RWaXNpdFRpbWUpIHtcbiAgLy8gRW5zdXJlIHRoZSBkYXRhYmFzZSBpcyBvcGVuXG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuXG4gIHRyeSB7XG4gICAgLy8gU3RhcnQgYSByZWFkb25seSB0cmFuc2FjdGlvblxuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oWydoaXN0b3J5J10sICdyZWFkb25seScpO1xuICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ2hpc3RvcnknKTtcbiAgICBjb25zdCBpbmRleCA9IG9iamVjdFN0b3JlLmluZGV4KCdsYXN0VmlzaXRUaW1lJyk7XG5cbiAgICAvLyBJbml0aWF0ZSB0aGUgZ2V0IHJlcXVlc3RcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXguZ2V0KGxhc3RWaXNpdFRpbWUpO1xuXG4gICAgLy8gQXdhaXQgdGhlIHJlc3VsdCBvZiB0aGUgZ2V0IHJlcXVlc3RcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpO1xuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBpdGVtIGV4aXN0c1xuICAgIGNvbnN0IGV4aXN0cyA9IHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdCAhPT0gbnVsbDtcblxuICAgIC8vIGNvbnNvbGUubG9nKGBJdGVtIGV4aXN0cyBmb3IgbGFzdFZpc2l0VGltZSAke2xhc3RWaXNpdFRpbWV9OiAke2V4aXN0c31gKTtcblxuICAgIHJldHVybiBleGlzdHM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgRXJyb3IgY2hlY2tpbmcgaWYgaXRlbSBleGlzdHMgZm9yIGxhc3RWaXNpdFRpbWUgJHtsYXN0VmlzaXRUaW1lfTpgLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7IC8vIFByb3BhZ2F0ZSB0aGUgZXJyb3IgdG8gdGhlIGNhbGxlclxuICB9XG59XG5cbi8qKlxuICogUHJvbWlzaWZpZXMgYW4gSW5kZXhlZERCIHJlcXVlc3QuXG4gKiBAcGFyYW0ge0lEQlJlcXVlc3R9IHJlcXVlc3QgLSBUaGUgSW5kZXhlZERCIHJlcXVlc3Qgb2JqZWN0LlxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZXF1ZXN0IHJlc3VsdC5cbiAqL1xuZnVuY3Rpb24gcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKHJlcXVlc3QucmVzdWx0KTtcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gIH0pO1xufVxuXG4vKipcbiAqIElucHV0IHN0YXJ0ZGF0ZSBhbmQgZW5kZGF0ZSwgZmV0Y2ggYWxsIGhpc3RvcnkgaXRlbXMgaW4gdGhhdCByYW5nZSwgc2VhcmNoIHdpdGhpbiBsYXN0VmlzaXRUaW1lIGluZGV4IG9mIHRoZSBkYiAgXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIaXN0b3J5SW5UaW1lUmFuZ2Uoc3RhcnREYXRlLCBlbmREYXRlKSB7XG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFsnaGlzdG9yeSddLCAncmVhZG9ubHknKTtcbiAgY29uc3Qgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgnaGlzdG9yeScpO1xuICBjb25zdCBpbmRleCA9IG9iamVjdFN0b3JlLmluZGV4KCdsYXN0VmlzaXRUaW1lJyk7XG4gIGNvbnN0IHJhbmdlID0gSURCS2V5UmFuZ2UuYm91bmQoc3RhcnREYXRlLCBlbmREYXRlKTtcbiAgY29uc3QgcmVxdWVzdCA9IGluZGV4LmdldEFsbChyYW5nZSk7ICBcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpO1xuICByZXR1cm4gcmVzdWx0O1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2V0U3VtbWFyaXplciB9IGZyb20gJy4uL2FpL3N1bW1hcml6ZXIuanMnO1xuaW1wb3J0IHsgZ2V0SGlzdG9yeSwgZ2V0SGlzdG9yeVdpdGhUb3BOU3RhdHMgfSBmcm9tICcuL2hpc3RvcnkuanMnO1xuaW1wb3J0IHsgZW5hYmxlUmVzaXppbmcsIGNyZWF0ZU9yR2V0V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzLmpzJztcbmltcG9ydCB7IGV4dHJhY3REb21haW4sIG1hcmtkb3duVG9IdG1sIH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5sZXQgc3RhcnREYXRlLCBlbmREYXRlO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgYWRkRGF0ZVJhbmdlQnV0dG9ucygpO1xuICAgIGFkZFJlZnJlc2hCdXR0b24oKTtcbiAgICBzZXREYXRlUmFuZ2UoJzI0aCcpO1xuICAgIGFkZE9yVXBkYXRlUmVjZW50SGlzdG9yeVdpZGdldCgpO1xuICAgIGFkZE9yVXBkYXRlQmFzaWNTdW1tYXJ5V2lkZ2V0KCk7XG4gICAgZW5hYmxlUmVzaXppbmcoKTtcbiAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZnJlc2gtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsb2FkQ29udGVudCgpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmstbW9kZS10b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrLW1vZGUnKTtcbiAgICAgICAgLy8gT3B0aW9uYWw6IFNhdmUgdXNlciBwcmVmZXJlbmNlIHVzaW5nIGxvY2FsU3RvcmFnZVxuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstbW9kZScpKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFwcGx5IHNhdmVkIHRoZW1lIG9uIGxvYWRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2F2ZWRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xuICAgICAgICBpZiAoc2F2ZWRUaGVtZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG5mdW5jdGlvbiBhZGRSZWZyZXNoQnV0dG9uKCkge1xuICBjb25zdCByZWZyZXNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlZnJlc2hCdXR0b24uaWQgPSAncmVmcmVzaC1idXR0b24nO1xuICByZWZyZXNoQnV0dG9uLnRleHRDb250ZW50ID0gJ1JlZnJlc2gnO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXJhbmdlLWNvbnRhaW5lcicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVmcmVzaEJ1dHRvbik7XG59XG5cbiAgXG4vKiBJbml0aWFsaXplIERhdGUgUmFuZ2UgSW5wdXRzICovXG5mdW5jdGlvbiBhZGREYXRlUmFuZ2VCdXR0b25zKCkge1xuICBcbiAgY29uc3QgYnV0dG9uRGF0YSA9IFtcbiAgICAgIHsgbGFiZWw6ICdMYXN0IDI0IEhvdXJzJywgcmFuZ2U6ICcyNGgnIH0sXG4gICAgICB7IGxhYmVsOiAnTGFzdCBXZWVrJywgcmFuZ2U6ICcxdycgfSxcbiAgICAgIHsgbGFiZWw6ICdMYXN0IE1vbnRoJywgcmFuZ2U6ICcxbScgfSxcbiAgICAgIHsgbGFiZWw6ICdMYXN0IDMgTW9udGhzJywgcmFuZ2U6ICczbScgfSxcbiAgICAgIHsgbGFiZWw6ICdMYXN0IDYgTW9udGhzJywgcmFuZ2U6ICc2bScgfSxcbiAgICAgIC8vIFRPRE86IGFkZCBtb250aCB3aXNlIG9wdGlvbnMgaW4gZHJvcCBkb3duXG4gICAgICB7IGxhYmVsOiAnSmFudWFyeScsIHJhbmdlOiAnamFuJyB9LFxuICAgICAgeyBsYWJlbDogJ0ZlYnJ1YXJ5JywgcmFuZ2U6ICdmZWInIH0sXG4gICAgICB7IGxhYmVsOiAnTWFyY2gnLCByYW5nZTogJ21hcicgfVxuXG4gIF07XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcmFuZ2UtY29udGFpbmVyJyk7XG5cbiAgYnV0dG9uRGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidXR0b24uY2xhc3NOYW1lID0gJ2RhdGUtcmFuZ2UtYnV0dG9uJztcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGRhdGEubGFiZWw7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXJhbmdlJywgZGF0YS5yYW5nZSk7XG5cbiAgICAgIC8vIEhpZ2hsaWdodCB0aGUgZGVmYXVsdCBzZWxlY3RlZCBidXR0b25cbiAgICAgIGlmIChkYXRhLnJhbmdlID09PSAnMjRoJykge1xuICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgc2V0RGF0ZVJhbmdlKGRhdGEucmFuZ2UpO1xuICAgICAgICAgIGxvYWRDb250ZW50KCk7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgJ3NlbGVjdGVkJyBjbGFzcyBmcm9tIGFsbCBidXR0b25zXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGUtcmFuZ2UtYnV0dG9uJykuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIEFkZCAnc2VsZWN0ZWQnIGNsYXNzIHRvIHRoZSBjbGlja2VkIGJ1dHRvblxuICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9KTtcbn1cblxuXG5mdW5jdGlvbiBzZXREYXRlUmFuZ2UocmFuZ2UpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gIHN3aXRjaCAocmFuZ2UpIHtcbiAgICAgIGNhc2UgJzI0aCc6XG4gICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkpO1xuICAgICAgICAgIHN0YXJ0RGF0ZS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSAtIDEpO1xuICAgICAgICAgIGVuZERhdGUgPSB0b2RheTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzF3JzpcbiAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheSk7XG4gICAgICAgICAgc3RhcnREYXRlLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpIC0gNyk7XG4gICAgICAgICAgZW5kRGF0ZSA9IHRvZGF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnMW0nOlxuICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICAgICAgICBzdGFydERhdGUuc2V0TW9udGgodG9kYXkuZ2V0TW9udGgoKSAtIDEpO1xuICAgICAgICAgIGVuZERhdGUgPSB0b2RheTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzNtJzpcbiAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheSk7XG4gICAgICAgICAgc3RhcnREYXRlLnNldE1vbnRoKHRvZGF5LmdldE1vbnRoKCkgLSAzKTtcbiAgICAgICAgICBlbmREYXRlID0gdG9kYXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc2bSc6XG4gICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkpO1xuICAgICAgICAgIHN0YXJ0RGF0ZS5zZXRNb250aCh0b2RheS5nZXRNb250aCgpIC0gNik7XG4gICAgICAgICAgZW5kRGF0ZSA9IHRvZGF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnamFuJzpcbiAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcbiAgICAgICAgICBlbmREYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgMSwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmZWInOlxuICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIDEsIDEpO1xuICAgICAgICAgIGVuZERhdGUgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCAyLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21hcic6XG4gICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgMiwgMSk7XG4gICAgICAgICAgZW5kRGF0ZSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIDMsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzdGFydERhdGUgPSB0b2RheTtcbiAgICAgICAgICBlbmREYXRlID0gdG9kYXk7XG4gIH1cblxuICBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcbiAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICBjb25zdCBtb250aCA9ICgnMCcgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKTtcbiAgICAgIGNvbnN0IGRheSA9ICgnMCcgKyBkYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpO1xuICAgICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gIH07XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktc3RhcnQtZGF0ZScpLnRleHRDb250ZW50ID0gZm9ybWF0RGF0ZShzdGFydERhdGUpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheS1lbmQtZGF0ZScpLnRleHRDb250ZW50ID0gZm9ybWF0RGF0ZShlbmREYXRlKTtcbn1cbiAgXG5cbiAgLyogQWRkIE92ZXJhbGwgU3VtbWFyeSBXaWRnZXQgKi9cbmZ1bmN0aW9uIGFkZE9yVXBkYXRlUmVjZW50SGlzdG9yeVdpZGdldCgpIHtcbiAgY29uc3QgbmV3V2lkZ2V0ID0gY3JlYXRlT3JHZXRXaWRnZXQoJ3JlY2VudC1oaXN0b3J5JywgJ1JlY2VudCBIaXN0b3J5Jyk7XG5cbiAgLy8gZGVsZXRlIGNoaWRscmVuIGNvbnRhaW5pbmcgKmNvbnRlbnRzKlxuICB3aGlsZSAobmV3V2lkZ2V0Lmxhc3RDaGlsZCAmJiBuZXdXaWRnZXQubGFzdENoaWxkLmlkICYmIG5ld1dpZGdldC5sYXN0Q2hpbGQuaWQuaW5jbHVkZXMoJ3JlY2VudC1oaXN0b3J5LWNvbnRlbnRzJykpIHtcbiAgICAgIG5ld1dpZGdldC5yZW1vdmVDaGlsZChuZXdXaWRnZXQubGFzdENoaWxkKTtcbiAgfVxuXG4gIGNyZWF0ZVJlY2VudEhpc3RvcnlFbGVtZW50KCkudGhlbigod2lkZ2V0KSA9PiB7XG4gICAgICBuZXdXaWRnZXQuYXBwZW5kQ2hpbGQod2lkZ2V0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZE9yVXBkYXRlQmFzaWNTdW1tYXJ5V2lkZ2V0KCkge1xuICBjb25zdCBuZXdXaWRnZXQgPSBjcmVhdGVPckdldFdpZGdldCgnYmFzaWMtc3VtbWFyeScsICdTdW1tYXJ5Jyk7XG5cbiAgLy8gZGVsZXRlIGNoaWRscmVuIGNvbnRhaW5pbmcgKmNvbnRlbnRzKlxuICB3aGlsZSAobmV3V2lkZ2V0Lmxhc3RDaGlsZCAmJiBuZXdXaWRnZXQubGFzdENoaWxkLmlkICYmIG5ld1dpZGdldC5sYXN0Q2hpbGQuaWQuaW5jbHVkZXMoJ2NvbnRlbnRzJykpIHtcbiAgICAgIG5ld1dpZGdldC5yZW1vdmVDaGlsZChuZXdXaWRnZXQubGFzdENoaWxkKTtcbiAgfVxuXG4gIGNyZWF0ZUJhc2ljU3VtbWFyeUVsZW1lbnQoKS50aGVuKCh3aWRnZXQpID0+IHtcbiAgICAgIG5ld1dpZGdldC5hcHBlbmRDaGlsZCh3aWRnZXQpO1xuICB9KTtcbn1cblxuLyogTG9hZCBDb250ZW50IEJhc2VkIG9uIERhdGUgUmFuZ2UgKi9cbmZ1bmN0aW9uIGxvYWRDb250ZW50KCkge1xuICBhZGRPclVwZGF0ZVJlY2VudEhpc3RvcnlXaWRnZXQoKTtcbiAgYWRkT3JVcGRhdGVCYXNpY1N1bW1hcnlXaWRnZXQoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVjZW50SGlzdG9yeUVsZW1lbnQoKSB7XG4gIGNvbnN0IHRvcE5Ib3N0bmFtZXNXaXRoVGl0bGVzID0gYXdhaXQgZ2V0SGlzdG9yeVdpdGhUb3BOU3RhdHMoc3RhcnREYXRlLCBlbmREYXRlLCAxMCk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2hpc3RvcnktY29udGFpbmVyJztcbiAgY29udGFpbmVyLmlkID0gJ3JlY2VudC1oaXN0b3J5LWNvbnRlbnRzJztcblxuICB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIC8vIENyZWF0ZSB0aGUgbWFpbiBib3ggZm9yIGVhY2ggaG9zdG5hbWVcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3guY2xhc3NOYW1lID0gJ2hpc3RvcnktYm94JztcblxuICAgIC8vIEZpcnN0IHBhcnQ6IEhvc3RuYW1lIGFuZCBoaXQgY291bnQgd2l0aCBhbiBpY29uXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoaXN0b3J5LWhlYWRlcic7XG5cbiAgICBjb25zdCBob3N0bmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgLy8gQWRkIGFuIGljb24gYmVmb3JlIHRoZSBob3N0bmFtZVxuICAgIGhvc3RuYW1lLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhcyBmYS1nbG9iZS1hbWVyaWNhc1wiPjwvaT4gJHtpdGVtLmhvc3RuYW1lfWA7XG5cbiAgICBjb25zdCBoaXRDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBoaXRDb3VudC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtY2hhcnQtbGluZVwiPjwvaT4gSGl0IENvdW50OiAke2l0ZW0uY291bnR9YDtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChob3N0bmFtZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhpdENvdW50KTtcblxuICAgIC8vIFNlY29uZCBwYXJ0OiBUaXRsZXMgd2l0aCBVUkxzXG4gICAgY29uc3QgdGl0bGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0aXRsZXMtY29udGFpbmVyJztcblxuICAgIGNvbnN0IHRpdGxlc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgLy8gRGlzcGxheSB0b3AgMTAgdGl0bGVzXG4gICAgY29uc3QgdG9wVGl0bGVzID0gaXRlbS50aXRsZXMuc2xpY2UoMCwgMTApO1xuICAgIHRvcFRpdGxlcy5mb3JFYWNoKHRpdGxlSXRlbSA9PiB7XG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgbGluay5ocmVmID0gdGl0bGVJdGVtLnVybDtcbiAgICAgIGxpbmsudGV4dENvbnRlbnQgPSB0aXRsZUl0ZW0udGl0bGU7XG4gICAgICBsaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICB0aXRsZXNMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9KTtcblxuICAgIC8vIElmIHRoZXJlIGFyZSBtb3JlIHRoYW4gMTAgdGl0bGVzLCBtYWtlIHRoZSBsaXN0IHNjcm9sbGFibGVcbiAgICBpZiAoaXRlbS50aXRsZXMubGVuZ3RoID4gMTApIHtcbiAgICAgIGNvbnN0IG1vcmVDb3VudCA9IGl0ZW0udGl0bGVzLmxlbmd0aCAtIDEwO1xuICAgICAgY29uc3Qgc2Nyb2xsYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc2Nyb2xsYWJsZS5jbGFzc05hbWUgPSAnc2Nyb2xsYWJsZS10aXRsZXMnO1xuICAgICAgc2Nyb2xsYWJsZS5hcHBlbmRDaGlsZCh0aXRsZXNMaXN0KTtcblxuICAgICAgY29uc3QgbW9yZUluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIG1vcmVJbmRpY2F0b3IudGV4dENvbnRlbnQgPSBgYW5kICR7bW9yZUNvdW50fSBtb3JlLi4uYDtcbiAgICAgIHNjcm9sbGFibGUuYXBwZW5kQ2hpbGQobW9yZUluZGljYXRvcik7XG5cbiAgICAgIHRpdGxlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzY3JvbGxhYmxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlc0xpc3QpO1xuICAgIH1cblxuICAgIC8vIEFzc2VtYmxlIHRoZSBib3hcbiAgICBib3guYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBib3guYXBwZW5kQ2hpbGQodGl0bGVzQ29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm94KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmFzaWNTdW1tYXJ5RWxlbWVudCgpIHtcbiAgLy8gVE9ETzogZ2V0IGEgbnVtYmVyIG9mIGl0ZW1zIGZyb20gc29tZXdoZXJlXG4gIGNvbnN0IGhpc3RvcnlJdGVtcyA9IGF3YWl0IGdldEhpc3Rvcnkoc3RhcnREYXRlLCBlbmREYXRlKTtcbiAgY29uc29sZS5sb2coaGlzdG9yeUl0ZW1zKTtcbiAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRleHRFbGVtZW50LmlkID0gJ2Jhc2ljLXN1bW1hcnktY29udGVudHMnO1xuXG4gIGNvbnN0IGhpc3RvcnlJdGVtVGl0bGVzID0gaGlzdG9yeUl0ZW1zLm1hcChpdGVtID0+IGl0ZW0udGl0bGUgfHwgZXh0cmFjdERvbWFpbihpdGVtLnVybCkpLmpvaW4oJ1xcbicpO1xuXG4gIGNvbnN0IHN1bW1hcml6ZXIgPSBhd2FpdCBnZXRTdW1tYXJpemVyKCk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1bW1hcml6ZXIuc3VtbWFyaXplKGhpc3RvcnlJdGVtVGl0bGVzKTtcbiAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAvLyB1cGRhdGUgdGhlIHRleHQgY29udGVudCBvZiB0aGUgdGV4dCBlbGVtZW50XG4gIC8vIHRleHRFbGVtZW50LnRleHRDb250ZW50ID0gcmVzdWx0O1xuICB0ZXh0RWxlbWVudC5pbm5lckhUTUwgPSBtYXJrZG93blRvSHRtbChyZXN1bHQpO1xuXG4gIHJldHVybiB0ZXh0RWxlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiZ2V0U3VtbWFyaXplciIsIl9nZXRTdW1tYXJpemVyIiwiX2NhbGxlZSIsImNhblN1bW1hcml6ZSIsInN1bW1hcml6ZXIiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiYWkiLCJjYXBhYmlsaXRpZXMiLCJhdmFpbGFibGUiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRlZCIsInRvdGFsIiwicmVhZHkiLCJnZXRIaXN0b3J5SW5UaW1lUmFuZ2UiLCJnZXRIaXN0b3J5IiwiX3giLCJfeDIiLCJfZ2V0SGlzdG9yeSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJyZWplY3QiLCJjaHJvbWUiLCJoaXN0b3J5Iiwic2VhcmNoIiwidGV4dCIsInN0YXJ0VGltZSIsImdldFRpbWUiLCJlbmRUaW1lIiwibWF4UmVzdWx0cyIsInJlc3VsdHMiLCJydW50aW1lIiwibGFzdEVycm9yIiwiZ2V0SGlzdG9yeVdpdGhUb3BOU3RhdHMiLCJfeDMiLCJfeDQiLCJfeDUiLCJfZ2V0SGlzdG9yeVdpdGhUb3BOU3RhdHMiLCJfY2FsbGVlMiIsIk4iLCJoaXN0b3J5SXRlbXMiLCJwYXJzZWRIaXN0b3J5SXRlbXMiLCJob3N0bmFtZU1hcCIsImhvc3RuYW1lVGl0bGVNYXAiLCJzb3J0ZWRIb3N0bmFtZXMiLCJ0b3BOSG9zdG5hbWVzIiwidG9wTkhvc3RuYW1lc1dpdGhUaXRsZXMiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJtYXAiLCJpdGVtIiwicGFyc2VfdXJsX3BhcnQiLCJ1cmwiLCJ0aXRsZSIsImNvdW50X2J5X2hvc3RuYW1lIiwiY3JlYXRlSG9zdE5hbWVUaXRsZU1hcCIsIkFycmF5IiwiZnJvbSIsImVudHJpZXMiLCJzb3J0IiwiYiIsImhvc3RuYW1lIiwidGl0bGVzIiwiZ2V0IiwiY291bnQiLCJwYXJzZWRVcmwiLCJVUkwiLCJwcm90b2NvbCIsInJlcGxhY2UiLCJob3N0bmFtZVBhcnRzIiwic3BsaXQiLCJzdWJkb21haW4iLCJkb21haW4iLCJ0bGQiLCJqb2luIiwicGF0aCIsInBhdGhuYW1lIiwicXVlcnlQYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJrZXkiLCJpc0FycmF5IiwiZnJhZ21lbnQiLCJoYXNoIiwicG9ydCIsImhvc3QiLCJocmVmIiwib3JpZ2luIiwiZXJyb3IiLCJjb25jYXQiLCJNYXAiLCJoYXMiLCJzZXQiLCJzb21lIiwiZXh0cmFjdERvbWFpbiIsIm1hcmtkb3duVG9IdG1sIiwibWFya2Rvd25UZXh0IiwiaHRtbCIsImVuYWJsZVJlc2l6aW5nIiwicmVzaXphYmxlRWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwicmVzaXplSGFuZGxlIiwicXVlcnlTZWxlY3RvciIsImlzUmVzaXppbmciLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJzdHlsZSIsImN1cnNvciIsImNsYXNzTGlzdCIsImFkZCIsInN0YXJ0V2lkdGgiLCJvZmZzZXRXaWR0aCIsInN0YXJ0SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic3RhcnRYIiwiY2xpZW50WCIsInN0YXJ0WSIsImNsaWVudFkiLCJvbk1vdXNlTW92ZSIsImN1cnJlbnRXaWR0aCIsImN1cnJlbnRIZWlnaHQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIndpZHRoIiwiTWF0aCIsIm1heCIsImhlaWdodCIsIm9uTW91c2VVcCIsInJlbW92ZSIsIndpbmRvdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzYXZlV2lkZ2V0U2l6ZSIsImlkIiwibG9hZFdpZGdldFNpemUiLCJ3aWRnZXRJZCIsInNpemUiLCJzdG9yYWdlIiwibG9jYWwiLCJfZGVmaW5lUHJvcGVydHkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsInBhcnNlIiwiZ2V0SXRlbSIsImNyZWF0ZU9yR2V0V2lkZ2V0IiwidW5pcXVlSUQiLCJ3aWRnZXRUaXRsZSIsImdldEVsZW1lbnRCeUlkIiwid2lkZ2V0Q29udGFpbmVyIiwibmV3V2lkZ2V0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiZGIiLCJvcGVuRGF0YWJhc2UiLCJfb3BlbkRhdGFiYXNlIiwicmVxdWVzdCIsImluZGV4ZWREQiIsIm9wZW4iLCJvbmVycm9yIiwiZXZlbnQiLCJ0YXJnZXQiLCJlcnJvckNvZGUiLCJvbnVwZ3JhZGVuZWVkZWQiLCJvYmplY3RTdG9yZSIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsImNyZWF0ZUluZGV4IiwidW5pcXVlIiwibXVsdGlFbnRyeSIsIm9uc3VjY2VzcyIsImNsZWFyRGF0YWJhc2UiLCJfY2xlYXJEYXRhYmFzZSIsInRyYW5zYWN0aW9uIiwiY2xlYXIiLCJhZGRIaXN0b3J5SXRlbSIsIl9hZGRIaXN0b3J5SXRlbSIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiaW5kZXgiLCJjaGVja1JlcXVlc3QiLCJsYXN0VmlzaXRUaW1lIiwicHV0IiwiZ2V0QWxsSGlzdG9yeUl0ZW1zIiwiX2dldEFsbEhpc3RvcnlJdGVtcyIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiZ2V0QWxsIiwiY2hlY2tJZkl0ZW1FeGlzdHMiLCJfY2hlY2tJZkl0ZW1FeGlzdHMiLCJfY2FsbGVlNSIsImV4aXN0cyIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsInByb21pc2lmeVJlcXVlc3QiLCJ1bmRlZmluZWQiLCJ0MCIsIl9nZXRIaXN0b3J5SW5UaW1lUmFuZ2UiLCJfY2FsbGVlNiIsInJhbmdlIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiSURCS2V5UmFuZ2UiLCJib3VuZCIsImFkZERhdGVSYW5nZUJ1dHRvbnMiLCJhZGRSZWZyZXNoQnV0dG9uIiwic2V0RGF0ZVJhbmdlIiwiYWRkT3JVcGRhdGVSZWNlbnRIaXN0b3J5V2lkZ2V0IiwiYWRkT3JVcGRhdGVCYXNpY1N1bW1hcnlXaWRnZXQiLCJsb2FkQ29udGVudCIsInRvZ2dsZSIsImNvbnRhaW5zIiwic2F2ZWRUaGVtZSIsInJlZnJlc2hCdXR0b24iLCJ0ZXh0Q29udGVudCIsImNvbnRhaW5lciIsImJ1dHRvbkRhdGEiLCJsYWJlbCIsImRhdGEiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJidG4iLCJ0b2RheSIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInNldE1vbnRoIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImZvcm1hdERhdGUiLCJkYXRlIiwieWVhciIsIm1vbnRoIiwiZGF5IiwibGFzdENoaWxkIiwiaW5jbHVkZXMiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZVJlY2VudEhpc3RvcnlFbGVtZW50Iiwid2lkZ2V0IiwiY3JlYXRlQmFzaWNTdW1tYXJ5RWxlbWVudCIsIl9jcmVhdGVSZWNlbnRIaXN0b3J5RWxlbWVudCIsImJveCIsImhlYWRlciIsImhpdENvdW50IiwidGl0bGVzQ29udGFpbmVyIiwidGl0bGVzTGlzdCIsInRvcFRpdGxlcyIsInRpdGxlSXRlbSIsImxpc3RJdGVtIiwibGluayIsIm1vcmVDb3VudCIsInNjcm9sbGFibGUiLCJtb3JlSW5kaWNhdG9yIiwiX2NyZWF0ZUJhc2ljU3VtbWFyeUVsZW1lbnQiLCJ0ZXh0RWxlbWVudCIsImhpc3RvcnlJdGVtVGl0bGVzIiwic3VtbWFyaXplIl0sInNvdXJjZVJvb3QiOiIifQ==