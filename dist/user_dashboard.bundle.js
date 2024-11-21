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
var topNHostnamesWithTitles;
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
    var container;
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsRUFBSTtJQUMvQixJQUFNQyxRQUFRLEdBQUc3SixRQUFRLENBQUNzRCxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQzdDLElBQU13RyxJQUFJLEdBQUc5SixRQUFRLENBQUNzRCxhQUFhLENBQUMsR0FBRyxDQUFDO0lBQ3hDd0csSUFBSSxDQUFDNUssSUFBSSxHQUFHMEssU0FBUyxDQUFDM00sR0FBRztJQUN6QjZNLElBQUksQ0FBQ3JDLFdBQVcsR0FBR21DLFNBQVMsQ0FBQzFNLEtBQUs7SUFDbEM0TSxJQUFJLENBQUM1RixNQUFNLEdBQUcsUUFBUTtJQUN0QjJGLFFBQVEsQ0FBQ3BHLFdBQVcsQ0FBQ3FHLElBQUksQ0FBQztJQUMxQk4sVUFBVSxDQUFDL0YsV0FBVyxDQUFDb0csUUFBUSxDQUFDO0VBQ2xDLENBQUMsQ0FBQzs7RUFFRjtFQUNBLElBQU1jLFNBQVMsR0FBRzVOLElBQUksQ0FBQ1ksTUFBTSxDQUFDOUYsTUFBTSxHQUFHNFMsU0FBUztFQUVoRCxJQUFJRSxTQUFTLEdBQUcsQ0FBQyxFQUFFO0lBQ2pCWixVQUFVLENBQUN0QyxXQUFXLFVBQUFwSSxNQUFBLENBQVVzTCxTQUFTLGFBQVU7RUFDckQsQ0FBQyxNQUFNO0lBQ0w7SUFDQVosVUFBVSxDQUFDakksTUFBTSxDQUFDLENBQUM7RUFDckI7QUFDRixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvYWkvc3VtbWFyaXplci5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci8uL3NyYy91c2VyX2Rhc2hib2FyZC9oaXN0b3J5LmpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3VzZXJfZGFzaGJvYXJkL3V0aWxzLmpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3VzZXJfZGFzaGJvYXJkL3dpZGdldHMuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvdXRpbHMvZGIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvdXNlcl9kYXNoYm9hcmQvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3VzZXJfZGFzaGJvYXJkL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXRTdW1tYXJpemVyKCkge1xuICAgIGNvbnN0IGNhblN1bW1hcml6ZSA9IGF3YWl0IGFpLnN1bW1hcml6ZXIuY2FwYWJpbGl0aWVzKCk7XG4gICAgbGV0IHN1bW1hcml6ZXI7XG4gICAgaWYgKGNhblN1bW1hcml6ZSAmJiBjYW5TdW1tYXJpemUuYXZhaWxhYmxlICE9PSAnbm8nKSB7XG4gICAgICAgIGlmIChjYW5TdW1tYXJpemUuYXZhaWxhYmxlID09PSAncmVhZGlseScpIHtcbiAgICAgICAgICAgIC8vIFRoZSBzdW1tYXJpemVyIGNhbiBpbW1lZGlhdGVseSBiZSB1c2VkLlxuICAgICAgICAgICAgc3VtbWFyaXplciA9IGF3YWl0IGFpLnN1bW1hcml6ZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VtbWFyaXplciByZWFkeSBub3cnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoZSBzdW1tYXJpemVyIGNhbiBiZSB1c2VkIGFmdGVyIHRoZSBtb2RlbCBkb3dubG9hZC5cbiAgICAgICAgICAgIHN1bW1hcml6ZXIgPSBhd2FpdCBhaS5zdW1tYXJpemVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgc3VtbWFyaXplci5hZGRFdmVudExpc3RlbmVyKCdkb3dubG9hZHByb2dyZXNzJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLmxvYWRlZCwgZS50b3RhbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGF3YWl0IHN1bW1hcml6ZXIucmVhZHk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnRmVhdHVyZSBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmVhdHVyZSBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICAgIC8vIFRoZSBzdW1tYXJpemVyIGNhbid0IGJlIHVzZWQgYXQgYWxsLlxuICAgIH1cbiAgICByZXR1cm4gc3VtbWFyaXplcjtcbn1cblxuZXhwb3J0IHsgZ2V0U3VtbWFyaXplciB9OyIsImltcG9ydCB7IGdldEhpc3RvcnlJblRpbWVSYW5nZSB9IGZyb20gJy4uL3V0aWxzL2RiLmpzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhpc3Rvcnkoc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLmhpc3Rvcnkuc2VhcmNoKHt0ZXh0OiAnJywgc3RhcnRUaW1lOiBzdGFydERhdGUuZ2V0VGltZSgpLCBlbmRUaW1lOiBlbmREYXRlLmdldFRpbWUoKSwgbWF4UmVzdWx0czogNDAgfSwgKHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIHJlamVjdChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gc3RhcnREYXRlIFxuICogQHBhcmFtIHsqfSBlbmREYXRlIFxuICogQHBhcmFtIHsqfSBOIFxuICogQHJldHVybnMgXG4gKiBcbiAqIFxuICogKDUpIFt74oCmfSwge+KApn0sIHvigKZ9LCB74oCmfSwge+KApn1dXG4wXG46IFxue2hvc3RuYW1lOiAnd3d3LmN1cnNvci5jb20nLCB0aXRsZXM6IEFycmF5KDYpLCBjb3VudDogMjR9XG4xXG46IFxue2hvc3RuYW1lOiAnd3d3LnlvdXR1YmUuY29tJywgdGl0bGVzOiBBcnJheSgxMiksIGNvdW50OiAyMX1cbjJcbjogXG57aG9zdG5hbWU6ICdtYWlsLmdvb2dsZS5jb20nLCB0aXRsZXM6IEFycmF5KDEyKSwgY291bnQ6IDE4fVxuM1xuOiBcbntob3N0bmFtZTogJ2RldmVsb3Blci5jaHJvbWUuY29tJywgdGl0bGVzOiBBcnJheSgyKSwgY291bnQ6IDE2fVxuNFxuOiBcbntob3N0bmFtZTogJ2dpdGh1Yi5jb20nLCB0aXRsZXM6IEFycmF5KDcpLCBjb3VudDogMTJ9XG5cbmV4YW1wbGUgdGl0bGVzOlxuXG4wXG46IFxue3RpdGxlOiAnaW4gY3Vyc3VyIGR1cmluZyBpbmRleGluZywgaXMgdGhlIHJlc3VsdHMgc3RvcmVkIGxjb2FsbHkgLSBHb29nbGUgU2VhcmNoJywgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1pbitjdXJzdXIrZHVyaW5nK2nigKZTQVFreE1qVXpNR293YWplb0FnQ3dBZ0Emc291cmNlaWQ9Y2hyb21lJmllPVVURi04J31cbjFcbjogXG57dGl0bGU6ICdzbGFjayBpbnRlZ3JhdGlvbiB0byBub3Rpb24gLSBHb29nbGUgU2VhcmNoJywgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1zbGFjaytpbnRlZ3JhdGlvbivigKZUU0FRZzJNekF5YWpCcU42Z0NBTEFDQUEmc291cmNlaWQ9Y2hyb21lJmllPVVURi04J31cbjJcbjogXG57dGl0bGU6ICdpIHdhbnQgdG8gY29udmVydCBhIHNsYWNrIGNoYW5uZWwgdG8gbm90aW9uIGRvY3VtZW50IC0gR29vZ2xlIFNlYXJjaCcsIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9aSt3YW50K3RvK2NvbnZlcnQr4oCmdWdZR0NBRVFBUmdUa2djRU9TNHpONkFIZ2NjQyZzY2xpZW50PWd3cy13aXotc2VycCd9XG4zXG46IFxue3RpdGxlOiAnY29udmVydCBwaWwgaW1hZ2UgdG8gZGljb20gZmlsZSAtIEdvb2dsZSBTZWFyY2gnLCB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPWNvbnZlcnQrcGlsK2ltYWdlK+KApkFkSUJDRGcwTnpscU1HbzNxQUlBc0FJQSZzb3VyY2VpZD1jaHJvbWUmaWU9VVRGLTgnfVxuNFxuOiBcbnt0aXRsZTogJ3N1cGVyIHJlc29sdXRpb24gbW9kZWxzIC0gR29vZ2xlIFNlYXJjaCcsIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9c3VwZXIrcmVzb2x1dGlvbitt4oCmZTBnRUlOakl5TUdvd2FqZW9BZ0N3QWdBJnNvdXJjZWlkPWNocm9tZSZpZT1VVEYtOCd9XG41XG46IFxue3RpdGxlOiAnc3VwZXIgcmVzb2x1dGlvbiBtb2RlbCBvbmxpbmUgZnJlZSAtIEdvb2dsZSBTZWFyY2gnLCB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPXN1cGVyK3Jlc29sdXRpb24rbeKApkZtQU1BaUFZQmtBWUlrZ2NFTWk0eE02QUhrbGsmc2NsaWVudD1nd3Mtd2l6LXNlcnAnfVxuICovXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIaXN0b3J5V2l0aFRvcE5TdGF0cyhzdGFydERhdGUsIGVuZERhdGUsIE4pIHtcbiAgICBjb25zdCBoaXN0b3J5SXRlbXMgPSBhd2FpdCBnZXRIaXN0b3J5SW5UaW1lUmFuZ2Uoc3RhcnREYXRlLmdldFRpbWUoKSwgZW5kRGF0ZS5nZXRUaW1lKCkpO1xuICAgIGNvbnN0IHBhcnNlZEhpc3RvcnlJdGVtcyA9IGhpc3RvcnlJdGVtcy5tYXAoaXRlbSA9PiBwYXJzZV91cmxfcGFydChpdGVtLnVybCwgaXRlbS50aXRsZSkpO1xuICAgIGNvbnN0IGhvc3RuYW1lTWFwID0gY291bnRfYnlfaG9zdG5hbWUocGFyc2VkSGlzdG9yeUl0ZW1zKTtcbiAgICBjb25zdCBob3N0bmFtZVRpdGxlTWFwID0gY3JlYXRlSG9zdE5hbWVUaXRsZU1hcChwYXJzZWRIaXN0b3J5SXRlbXMpO1xuICAgIGNvbnN0IHNvcnRlZEhvc3RuYW1lcyA9IEFycmF5LmZyb20oaG9zdG5hbWVNYXAuZW50cmllcygpKS5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSk7XG4gICAgY29uc3QgdG9wTkhvc3RuYW1lcyA9IHNvcnRlZEhvc3RuYW1lcy5zbGljZSgwLCBOKTtcbiAgICBjb25zdCB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcyA9IHRvcE5Ib3N0bmFtZXMubWFwKGl0ZW0gPT4gKHsgaG9zdG5hbWU6IGl0ZW1bMF0sIHRpdGxlczogaG9zdG5hbWVUaXRsZU1hcC5nZXQoaXRlbVswXSksIGNvdW50OiBpdGVtWzFdIH0pKTtcblxuICAgIHJldHVybiB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcztcbn1cblxuXG5mdW5jdGlvbiBwYXJzZV91cmxfcGFydCh1cmwsIHRpdGxlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTCh1cmwpO1xuXG4gICAgICAgIC8vIEV4dHJhY3QgcHJvdG9jb2wgd2l0aG91dCB0aGUgdHJhaWxpbmcgY29sb24gKGUuZy4sICdodHRwcycpXG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gcGFyc2VkVXJsLnByb3RvY29sLnJlcGxhY2UoJzonLCAnJyk7XG5cbiAgICAgICAgLy8gU3BsaXQgaG9zdG5hbWUgaW50byBwYXJ0cyB0byBpZGVudGlmeSBzdWJkb21haW4sIGRvbWFpbiwgYW5kIFRMRFxuICAgICAgICBjb25zdCBob3N0bmFtZVBhcnRzID0gcGFyc2VkVXJsLmhvc3RuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIGxldCBzdWJkb21haW4gPSAnJztcbiAgICAgICAgbGV0IGRvbWFpbiA9ICcnO1xuICAgICAgICBsZXQgdGxkID0gJyc7XG5cbiAgICAgICAgaWYgKGhvc3RuYW1lUGFydHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgc3ViZG9tYWluID0gaG9zdG5hbWVQYXJ0cy5zbGljZSgwLCBob3N0bmFtZVBhcnRzLmxlbmd0aCAtIDIpLmpvaW4oJy4nKTtcbiAgICAgICAgICAgIGRvbWFpbiA9IGhvc3RuYW1lUGFydHNbaG9zdG5hbWVQYXJ0cy5sZW5ndGggLSAyXTtcbiAgICAgICAgICAgIHRsZCA9IGhvc3RuYW1lUGFydHNbaG9zdG5hbWVQYXJ0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSBlbHNlIGlmIChob3N0bmFtZVBhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgZG9tYWluID0gaG9zdG5hbWVQYXJ0c1swXTtcbiAgICAgICAgICAgIHRsZCA9IGhvc3RuYW1lUGFydHNbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb21haW4gPSBwYXJzZWRVcmwuaG9zdG5hbWU7XG4gICAgICAgICAgICB0bGQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV4dHJhY3QgcGF0aCAoZW5kcG9pbnQpXG4gICAgICAgIGNvbnN0IHBhdGggPSBwYXJzZWRVcmwucGF0aG5hbWU7XG5cbiAgICAgICAgLy8gRXh0cmFjdCBxdWVyeSBwYXJhbWV0ZXJzIGFzIGtleS12YWx1ZSBwYWlyc1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICBwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBrZXkgYWxyZWFkeSBleGlzdHMsIGNvbnZlcnQgaXQgaW50byBhbiBhcnJheVxuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zW2tleV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVBhcmFtc1trZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc1trZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW2tleV0gPSBbcXVlcnlQYXJhbXNba2V5XSwgdmFsdWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBFeHRyYWN0IGZyYWdtZW50IHdpdGhvdXQgdGhlIGxlYWRpbmcgaGFzaCAoZS5nLiwgJ3NlY3Rpb24xJylcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBwYXJzZWRVcmwuaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuXG4gICAgICAgIC8vIEV4dHJhY3QgcG9ydCBpZiBzcGVjaWZpZWQsIGVsc2UgZGVmYXVsdCBiYXNlZCBvbiBwcm90b2NvbFxuICAgICAgICBsZXQgcG9ydCA9IHBhcnNlZFVybC5wb3J0O1xuICAgICAgICBpZiAoIXBvcnQpIHtcbiAgICAgICAgICAgIGlmIChwcm90b2NvbCA9PT0gJ2h0dHAnKSB7XG4gICAgICAgICAgICAgICAgcG9ydCA9ICc4MCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3RvY29sID09PSAnaHR0cHMnKSB7XG4gICAgICAgICAgICAgICAgcG9ydCA9ICc0NDMnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3J0ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvdG9jb2wsXG4gICAgICAgICAgICBzdWJkb21haW4sXG4gICAgICAgICAgICBkb21haW4sXG4gICAgICAgICAgICB0bGQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICAgICAgICBmcmFnbWVudCxcbiAgICAgICAgICAgIHBvcnQsXG4gICAgICAgICAgICAvLyBBZGRpdGlvbmFsIFVzZWZ1bCBDb21wb25lbnRzXG4gICAgICAgICAgICBob3N0OiBwYXJzZWRVcmwuaG9zdCwgLy8gaW5jbHVkZXMgaG9zdG5hbWUgYW5kIHBvcnRcbiAgICAgICAgICAgIGhvc3RuYW1lOiBwYXJzZWRVcmwuaG9zdG5hbWUsXG4gICAgICAgICAgICBocmVmOiBwYXJzZWRVcmwuaHJlZixcbiAgICAgICAgICAgIG9yaWdpbjogcGFyc2VkVXJsLm9yaWdpbixcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBVUkw6ICR7dXJsfWAsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb3VudF9ieV9ob3N0bmFtZShwYXJzZWRIaXN0b3J5SXRlbXMpIHtcbiAgICBjb25zdCBob3N0bmFtZU1hcCA9IG5ldyBNYXAoKTtcblxuICAgIHBhcnNlZEhpc3RvcnlJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBob3N0bmFtZSA9IGl0ZW0uaG9zdG5hbWU7XG4gICAgICAgIGlmIChob3N0bmFtZSkge1xuICAgICAgICAgICAgaWYgKGhvc3RuYW1lTWFwLmhhcyhob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICBob3N0bmFtZU1hcC5zZXQoaG9zdG5hbWUsIGhvc3RuYW1lTWFwLmdldChob3N0bmFtZSkgKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaG9zdG5hbWVNYXAuc2V0KGhvc3RuYW1lLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhvc3RuYW1lTWFwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3N0TmFtZVRpdGxlTWFwKHBhcnNlZEhpc3RvcnlJdGVtcykge1xuICAgIGNvbnN0IGhvc3RuYW1lTWFwID0gbmV3IE1hcCgpO1xuICAgIHBhcnNlZEhpc3RvcnlJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBob3N0bmFtZSA9IGl0ZW0uaG9zdG5hbWU7XG4gICAgICAgIHZhciB0aXRsZSA9IGl0ZW0udGl0bGU7XG4gICAgICAgIGNvbnN0IHVybCA9IGl0ZW0uaHJlZjtcblxuICAgICAgICAvLyBpZiB0aXRsZSBpcyBlbXB0eSwgdXNlIGhvc3RuYW1lIGFzIHRpdGxlXG4gICAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgICAgIHRpdGxlID0gaG9zdG5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYWludGFpbiBhIGxpc3Qgb2YgdGl0bGVzIGZvciBlYWNoIGhvc3RuYW1lXG4gICAgICAgIGlmIChob3N0bmFtZU1hcC5oYXMoaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAvLyBpZiB0aXRsZSBpcyBhbHJlYWR5IGluIHRoZSBsaXN0LCBkb24ndCBhZGQgaXQgYWdhaW5cbiAgICAgICAgICAgIGlmICghaG9zdG5hbWVNYXAuZ2V0KGhvc3RuYW1lKS5zb21lKHQgPT4gdC50aXRsZSA9PT0gdGl0bGUpKSB7XG4gICAgICAgICAgICAgICAgaG9zdG5hbWVNYXAuZ2V0KGhvc3RuYW1lKS5wdXNoKHt0aXRsZSwgdXJsfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBob3N0bmFtZU1hcC5zZXQoaG9zdG5hbWUsIFt7dGl0bGUsIHVybH1dKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhvc3RuYW1lTWFwO1xufVxuXG5cblxuLy8gZXhwb3J0IHsgZ2V0SGlzdG9yeSB9OyIsIi8vIHdyaXRlIGEgZnVuY3Rpb24gdG8gZXh0cmFjdCBkb21haW4gbmFtZSBmcm9tIGEgdXJsXG5mdW5jdGlvbiBleHRyYWN0RG9tYWluKHVybCkge1xuICAgIHJldHVybiBuZXcgVVJMKHVybCkuaG9zdG5hbWU7XG4gIH1cbiAgXG4gIFxuICBmdW5jdGlvbiBtYXJrZG93blRvSHRtbChtYXJrZG93blRleHQpIHtcbiAgICAvLyBDb252ZXJ0IGJvbGQgdGV4dDogKip0ZXh0KipcbiAgICBsZXQgaHRtbCA9IG1hcmtkb3duVGV4dC5yZXBsYWNlKC9cXCpcXCooLis/KVxcKlxcKi9nLCAnPHN0cm9uZz4kMTwvc3Ryb25nPicpO1xuICAgIFxuICAgIC8vIENvbnZlcnQgaXRhbGljIHRleHQ6ICp0ZXh0KlxuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcKiguKz8pXFwqL2csICc8ZW0+JDE8L2VtPicpO1xuICAgIFxuICAgIC8vIENvbnZlcnQgYnVsbGV0IHBvaW50czogKiBpdGVtXG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXlxcKiAoLispJC9nbSwgJzxsaT4kMTwvbGk+Jyk7XG4gICAgXG4gICAgLy8gV3JhcCBsaXN0IGl0ZW1zIGluIDx1bD4gdGFnc1xuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoLyg8bGk+Lio8XFwvbGk+KS9nLCAnPHVsPiQxPC91bD4nKTtcbiAgXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuZXhwb3J0IHsgZXh0cmFjdERvbWFpbiwgbWFya2Rvd25Ub0h0bWwgfTsiLCIvKiBFbmFibGUgUmVzaXppbmcgKi9cbmZ1bmN0aW9uIGVuYWJsZVJlc2l6aW5nKCkge1xuICAgIGNvbnN0IHJlc2l6YWJsZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2l6YWJsZScpO1xuICBcbiAgICByZXNpemFibGVFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgcmVzaXplSGFuZGxlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucmVzaXplLWhhbmRsZScpO1xuICAgICAgbGV0IGlzUmVzaXppbmcgPSBmYWxzZTtcbiAgXG4gICAgICByZXNpemVIYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpc1Jlc2l6aW5nID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnc2UtcmVzaXplJztcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdyZXNpemluZycpO1xuICBcbiAgICAgICAgY29uc3Qgc3RhcnRXaWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIGNvbnN0IHN0YXJ0SGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IHN0YXJ0WCA9IGUuY2xpZW50WDtcbiAgICAgICAgY29uc3Qgc3RhcnRZID0gZS5jbGllbnRZO1xuICBcbiAgICAgICAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoZSkgPT4ge1xuICAgICAgICAgIGlmICghaXNSZXNpemluZykgcmV0dXJuO1xuICBcbiAgICAgICAgICBjb25zdCBjdXJyZW50V2lkdGggPSBzdGFydFdpZHRoICsgKGUuY2xpZW50WCAtIHN0YXJ0WCk7XG4gICAgICAgICAgY29uc3QgY3VycmVudEhlaWdodCA9IHN0YXJ0SGVpZ2h0ICsgKGUuY2xpZW50WSAtIHN0YXJ0WSk7XG4gIFxuICAgICAgICAgIC8vIFNldCBtaW5pbXVtIGRpbWVuc2lvbnNcbiAgICAgICAgICBjb25zdCBtaW5XaWR0aCA9IDIwMDtcbiAgICAgICAgICBjb25zdCBtaW5IZWlnaHQgPSAxMDA7XG4gIFxuICAgICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtNYXRoLm1heChjdXJyZW50V2lkdGgsIG1pbldpZHRoKX1weGA7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtNYXRoLm1heChjdXJyZW50SGVpZ2h0LCBtaW5IZWlnaHQpfXB4YDtcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIGNvbnN0IG9uTW91c2VVcCA9ICgpID0+IHtcbiAgICAgICAgICBpc1Jlc2l6aW5nID0gZmFsc2U7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdyZXNpemluZycpO1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICBcbiAgICAgICAgICAvLyBTYXZlIGRpbWVuc2lvbnNcbiAgICAgICAgICBzYXZlV2lkZ2V0U2l6ZShlbGVtZW50LmlkLCBlbGVtZW50LnN0eWxlLndpZHRoLCBlbGVtZW50LnN0eWxlLmhlaWdodCk7XG4gICAgICAgIH07XG4gIFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICB9KTtcbiAgXG4gICAgICAvLyBMb2FkIHNhdmVkIGRpbWVuc2lvbnNcbiAgICAgIGxvYWRXaWRnZXRTaXplKGVsZW1lbnQuaWQsIGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG4gIFxuICAvKiBTYXZlIFdpZGdldCBTaXplICovXG4gIGZ1bmN0aW9uIHNhdmVXaWRnZXRTaXplKHdpZGdldElkLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3Qgc2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIGlmIChjaHJvbWUgJiYgY2hyb21lLnN0b3JhZ2UgJiYgY2hyb21lLnN0b3JhZ2UubG9jYWwpIHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFt3aWRnZXRJZF06IHNpemUgfSwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgU2F2ZWQgc2l6ZSBmb3IgJHt3aWRnZXRJZH06YCwgc2l6ZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRm9yIHRlc3Rpbmcgb3V0c2lkZSBvZiBDaHJvbWUgZXh0ZW5zaW9uXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh3aWRnZXRJZCwgSlNPTi5zdHJpbmdpZnkoc2l6ZSkpO1xuICAgIH1cbiAgfVxuICBcbiAgLyogTG9hZCBXaWRnZXQgU2l6ZSAqL1xuICBmdW5jdGlvbiBsb2FkV2lkZ2V0U2l6ZSh3aWRnZXRJZCwgZWxlbWVudCkge1xuICAgIGlmIChjaHJvbWUgJiYgY2hyb21lLnN0b3JhZ2UgJiYgY2hyb21lLnN0b3JhZ2UubG9jYWwpIHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh3aWRnZXRJZCwgKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0W3dpZGdldElkXSkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSByZXN1bHRbd2lkZ2V0SWRdLndpZHRoO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gcmVzdWx0W3dpZGdldElkXS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGb3IgdGVzdGluZyBvdXRzaWRlIG9mIENocm9tZSBleHRlbnNpb25cbiAgICAgIGNvbnN0IHNpemUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHdpZGdldElkKSk7XG4gICAgICBpZiAoc2l6ZSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aDtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBzaXplLmhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9yR2V0V2lkZ2V0KHVuaXF1ZUlELCB3aWRnZXRUaXRsZSkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh1bmlxdWVJRCkpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh1bmlxdWVJRCk7XG4gICAgfVxuICBcbiAgICBjb25zdCB3aWRnZXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lkZ2V0LWNvbnRhaW5lcicpO1xuICBcbiAgICAvLyBDcmVhdGUgYSBuZXcgd2lkZ2V0IGVsZW1lbnRcbiAgICBjb25zdCBuZXdXaWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdXaWRnZXQuY2xhc3NOYW1lID0gJ3dpZGdldCByZXNpemFibGUnO1xuICBcbiAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgdGhlIG5ldyB3aWRnZXRcbiAgICBuZXdXaWRnZXQuaWQgPSB1bmlxdWVJRDtcbiAgXG4gICAgLy8gU2V0IHRoZSBjb250ZW50IG9mIHRoZSBuZXcgd2lkZ2V0XG4gICAgbmV3V2lkZ2V0LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIndpZGdldC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMj4ke3dpZGdldFRpdGxlfTwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzaXplLWhhbmRsZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICBcbiAgICAvLyBBcHBlbmQgdGhlIG5ldyB3aWRnZXQgdG8gdGhlIHdpZGdldCBjb250YWluZXJcbiAgICB3aWRnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3V2lkZ2V0KTtcbiAgXG4gICAgcmV0dXJuIG5ld1dpZGdldDtcbiAgfVxuXG5leHBvcnQgeyBlbmFibGVSZXNpemluZywgc2F2ZVdpZGdldFNpemUsIGxvYWRXaWRnZXRTaXplLCBjcmVhdGVPckdldFdpZGdldCB9O1xuICAiLCIvLyBkYi5qc1xuXG5sZXQgZGI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvcGVuRGF0YWJhc2UoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGRiKSB7XG4gICAgICByZXNvbHZlKGRiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKCdIaXN0b3J5SW5kZXhlckRCJywgMSk7XG5cbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0RhdGFiYXNlIGVycm9yOicsIGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgIH07XG5cbiAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IChldmVudCkgPT4ge1xuICAgICAgZGIgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgY29uc3Qgb2JqZWN0U3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZSgnaGlzdG9yeScsIHsga2V5UGF0aDogJ2lkJyB9KTtcbiAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KCd1cmwnLCAndXJsJywgeyB1bmlxdWU6IGZhbHNlIH0pO1xuICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ3RpdGxlJywgJ3RpdGxlJywgeyB1bmlxdWU6IGZhbHNlIH0pO1xuICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ3RhZ3MnLCAndGFncycsIHsgdW5pcXVlOiBmYWxzZSwgbXVsdGlFbnRyeTogdHJ1ZSB9KTtcbiAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KCdzdW1tYXJ5JywgJ3N1bW1hcnknLCB7IHVuaXF1ZTogZmFsc2UgfSk7XG4gICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgnbGFzdFZpc2l0VGltZScsICdsYXN0VmlzaXRUaW1lJywgeyB1bmlxdWU6IHRydWUgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkRhdGFiYXNlIHVwZ3JhZGVkXCIpO1xuICAgIH07XG5cbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xuICAgICAgZGIgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgcmVzb2x2ZShkYik7XG4gICAgfTtcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhckRhdGFiYXNlKCkge1xuICBhd2FpdCBvcGVuRGF0YWJhc2UoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFsnaGlzdG9yeSddLCAncmVhZHdyaXRlJyk7XG4gICAgY29uc3Qgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgnaGlzdG9yeScpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBvYmplY3RTdG9yZS5jbGVhcigpO1xuICAgIGNvbnNvbGUubG9nKFwiQ2xlYXJpbmcgZGF0YWJhc2VcIik7XG5cbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9O1xuXG4gICAgcmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRIaXN0b3J5SXRlbShpdGVtKSB7XG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oWydoaXN0b3J5J10sICdyZWFkd3JpdGUnKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gICAgY29uc3QgaW5kZXggPSBvYmplY3RTdG9yZS5pbmRleCgnbGFzdFZpc2l0VGltZScpO1xuXG4gICAgLy8gQ2hlY2sgaWYgYW4gaXRlbSB3aXRoIHRoZSBzYW1lIGxhc3RWaXNpdFRpbWUgYWxyZWFkeSBleGlzdHNcbiAgICBjb25zdCBjaGVja1JlcXVlc3QgPSBpbmRleC5nZXQoaXRlbS5sYXN0VmlzaXRUaW1lKTtcblxuICAgIGNoZWNrUmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQucmVzdWx0KSB7XG4gICAgICAgIC8vIEl0ZW0gd2l0aCB0aGUgc2FtZSBsYXN0VmlzaXRUaW1lIGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSB3aXRoIHRoZSBzYW1lIGxhc3RWaXNpdFRpbWUgYWxyZWFkeSBleGlzdHMsIG5vdCBhZGRpbmcuXCIpO1xuICAgICAgICByZXNvbHZlKCk7IC8vIFJlc29sdmUgd2l0aG91dCBhZGRpbmdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vIGl0ZW0gd2l0aCB0aGUgc2FtZSBsYXN0VmlzaXRUaW1lLCBwcm9jZWVkIHRvIGFkZFxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gb2JqZWN0U3RvcmUucHV0KGl0ZW0pO1xuXG4gICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBIaXN0b3J5IGl0ZW0gYWRkZWRgKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIGl0ZW06JywgZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjaGVja1JlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgbGFzdFZpc2l0VGltZTonLCBldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICAgIHJlamVjdChldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEhpc3RvcnlJdGVtcygpIHtcbiAgYXdhaXQgb3BlbkRhdGFiYXNlKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbJ2hpc3RvcnknXSwgJ3JlYWRvbmx5Jyk7XG4gICAgY29uc3Qgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgnaGlzdG9yeScpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBvYmplY3RTdG9yZS5nZXRBbGwoKTtcblxuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICByZXNvbHZlKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgY29uc29sZS5sb2coXCJBbGwgaGlzdG9yeSBpdGVtcyBmZXRjaGVkXCIpO1xuICAgIH07XG5cbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgIHJlamVjdChldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFsbCBoaXN0b3J5IGl0ZW1zOicsIGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgIH07XG4gIH0pO1xufVxuXG5cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoaXN0b3J5IGl0ZW0gd2l0aCB0aGUgc3BlY2lmaWVkIGxhc3RWaXNpdFRpbWUgZXhpc3RzIGluIHRoZSBJbmRleGVkREIuXG4gKiBAcGFyYW0ge251bWJlcn0gbGFzdFZpc2l0VGltZSAtIFRoZSBsYXN0IHZpc2l0IHRpbWUgb2YgdGhlIGhpc3RvcnkgaXRlbS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSAtIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRydWUgaWYgdGhlIGl0ZW0gZXhpc3RzLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0lmSXRlbUV4aXN0cyhsYXN0VmlzaXRUaW1lKSB7XG4gIC8vIEVuc3VyZSB0aGUgZGF0YWJhc2UgaXMgb3BlblxuICBhd2FpdCBvcGVuRGF0YWJhc2UoKTtcblxuICB0cnkge1xuICAgIC8vIFN0YXJ0IGEgcmVhZG9ubHkgdHJhbnNhY3Rpb25cbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFsnaGlzdG9yeSddLCAncmVhZG9ubHknKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gICAgY29uc3QgaW5kZXggPSBvYmplY3RTdG9yZS5pbmRleCgnbGFzdFZpc2l0VGltZScpO1xuXG4gICAgLy8gSW5pdGlhdGUgdGhlIGdldCByZXF1ZXN0XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4LmdldChsYXN0VmlzaXRUaW1lKTtcblxuICAgIC8vIEF3YWl0IHRoZSByZXN1bHQgb2YgdGhlIGdldCByZXF1ZXN0XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KTtcblxuICAgIC8vIERldGVybWluZSBpZiB0aGUgaXRlbSBleGlzdHNcbiAgICBjb25zdCBleGlzdHMgPSByZXN1bHQgIT09IHVuZGVmaW5lZCAmJiByZXN1bHQgIT09IG51bGw7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhgSXRlbSBleGlzdHMgZm9yIGxhc3RWaXNpdFRpbWUgJHtsYXN0VmlzaXRUaW1lfTogJHtleGlzdHN9YCk7XG5cbiAgICByZXR1cm4gZXhpc3RzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGNoZWNraW5nIGlmIGl0ZW0gZXhpc3RzIGZvciBsYXN0VmlzaXRUaW1lICR7bGFzdFZpc2l0VGltZX06YCwgZXJyb3IpO1xuICAgIHRocm93IGVycm9yOyAvLyBQcm9wYWdhdGUgdGhlIGVycm9yIHRvIHRoZSBjYWxsZXJcbiAgfVxufVxuXG4vKipcbiAqIFByb21pc2lmaWVzIGFuIEluZGV4ZWREQiByZXF1ZXN0LlxuICogQHBhcmFtIHtJREJSZXF1ZXN0fSByZXF1ZXN0IC0gVGhlIEluZGV4ZWREQiByZXF1ZXN0IG9iamVjdC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IC0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVxdWVzdCByZXN1bHQuXG4gKi9cbmZ1bmN0aW9uIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdCk7XG4gICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJbnB1dCBzdGFydGRhdGUgYW5kIGVuZGRhdGUsIGZldGNoIGFsbCBoaXN0b3J5IGl0ZW1zIGluIHRoYXQgcmFuZ2UsIHNlYXJjaCB3aXRoaW4gbGFzdFZpc2l0VGltZSBpbmRleCBvZiB0aGUgZGIgIFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SGlzdG9yeUluVGltZVJhbmdlKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuICBhd2FpdCBvcGVuRGF0YWJhc2UoKTtcbiAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbJ2hpc3RvcnknXSwgJ3JlYWRvbmx5Jyk7XG4gIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ2hpc3RvcnknKTtcbiAgY29uc3QgaW5kZXggPSBvYmplY3RTdG9yZS5pbmRleCgnbGFzdFZpc2l0VGltZScpO1xuICBjb25zdCByYW5nZSA9IElEQktleVJhbmdlLmJvdW5kKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG4gIGNvbnN0IHJlcXVlc3QgPSBpbmRleC5nZXRBbGwocmFuZ2UpOyAgXG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldFN1bW1hcml6ZXIgfSBmcm9tICcuLi9haS9zdW1tYXJpemVyLmpzJztcbmltcG9ydCB7IGdldEhpc3RvcnksIGdldEhpc3RvcnlXaXRoVG9wTlN0YXRzIH0gZnJvbSAnLi9oaXN0b3J5LmpzJztcbmltcG9ydCB7IGVuYWJsZVJlc2l6aW5nLCBjcmVhdGVPckdldFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy5qcyc7XG5pbXBvcnQgeyBleHRyYWN0RG9tYWluLCBtYXJrZG93blRvSHRtbCB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xubGV0IHN0YXJ0RGF0ZSwgZW5kRGF0ZTtcbmxldCB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcztcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGFkZERhdGVSYW5nZUJ1dHRvbnMoKTtcbiAgICBhZGRSZWZyZXNoQnV0dG9uKCk7XG4gICAgc2V0RGF0ZVJhbmdlKCcyNGgnKTtcbiAgICBhZGRPclVwZGF0ZVJlY2VudEhpc3RvcnlXaWRnZXQoKTtcbiAgICBhZGRPclVwZGF0ZUJhc2ljU3VtbWFyeVdpZGdldCgpO1xuICAgIGVuYWJsZVJlc2l6aW5nKCk7XG4gIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWZyZXNoLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbG9hZENvbnRlbnQoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrLW1vZGUtdG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyay1tb2RlJyk7XG4gICAgICAgIC8vIE9wdGlvbmFsOiBTYXZlIHVzZXIgcHJlZmVyZW5jZSB1c2luZyBsb2NhbFN0b3JhZ2VcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrLW1vZGUnKSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2RhcmsnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdsaWdodCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBcHBseSBzYXZlZCB0aGVtZSBvbiBsb2FkXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcbiAgICAgICAgaWYgKHNhdmVkVGhlbWUgPT09ICdkYXJrJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuZnVuY3Rpb24gYWRkUmVmcmVzaEJ1dHRvbigpIHtcbiAgY29uc3QgcmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZWZyZXNoQnV0dG9uLmlkID0gJ3JlZnJlc2gtYnV0dG9uJztcbiAgcmVmcmVzaEJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZWZyZXNoJztcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1yYW5nZS1jb250YWluZXInKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlZnJlc2hCdXR0b24pO1xufVxuXG4gIFxuLyogSW5pdGlhbGl6ZSBEYXRlIFJhbmdlIElucHV0cyAqL1xuZnVuY3Rpb24gYWRkRGF0ZVJhbmdlQnV0dG9ucygpIHtcbiAgXG4gIGNvbnN0IGJ1dHRvbkRhdGEgPSBbXG4gICAgICB7IGxhYmVsOiAnTGFzdCAyNCBIb3VycycsIHJhbmdlOiAnMjRoJyB9LFxuICAgICAgeyBsYWJlbDogJ0xhc3QgV2VlaycsIHJhbmdlOiAnMXcnIH0sXG4gICAgICB7IGxhYmVsOiAnTGFzdCBNb250aCcsIHJhbmdlOiAnMW0nIH0sXG4gICAgICB7IGxhYmVsOiAnTGFzdCAzIE1vbnRocycsIHJhbmdlOiAnM20nIH0sXG4gICAgICB7IGxhYmVsOiAnTGFzdCA2IE1vbnRocycsIHJhbmdlOiAnNm0nIH0sXG4gICAgICAvLyBUT0RPOiBhZGQgbW9udGggd2lzZSBvcHRpb25zIGluIGRyb3AgZG93blxuICAgICAgeyBsYWJlbDogJ0phbnVhcnknLCByYW5nZTogJ2phbicgfSxcbiAgICAgIHsgbGFiZWw6ICdGZWJydWFyeScsIHJhbmdlOiAnZmViJyB9LFxuICAgICAgeyBsYWJlbDogJ01hcmNoJywgcmFuZ2U6ICdtYXInIH1cblxuICBdO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXJhbmdlLWNvbnRhaW5lcicpO1xuXG4gIGJ1dHRvbkRhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdkYXRlLXJhbmdlLWJ1dHRvbic7XG4gICAgICBidXR0b24udGV4dENvbnRlbnQgPSBkYXRhLmxhYmVsO1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1yYW5nZScsIGRhdGEucmFuZ2UpO1xuXG4gICAgICAvLyBIaWdobGlnaHQgdGhlIGRlZmF1bHQgc2VsZWN0ZWQgYnV0dG9uXG4gICAgICBpZiAoZGF0YS5yYW5nZSA9PT0gJzI0aCcpIHtcbiAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHNldERhdGVSYW5nZShkYXRhLnJhbmdlKTtcbiAgICAgICAgICBsb2FkQ29udGVudCgpO1xuXG4gICAgICAgICAgLy8gUmVtb3ZlICdzZWxlY3RlZCcgY2xhc3MgZnJvbSBhbGwgYnV0dG9uc1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlLXJhbmdlLWJ1dHRvbicpLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBBZGQgJ3NlbGVjdGVkJyBjbGFzcyB0byB0aGUgY2xpY2tlZCBidXR0b25cbiAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgfSk7XG59XG5cblxuZnVuY3Rpb24gc2V0RGF0ZVJhbmdlKHJhbmdlKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICBzd2l0Y2ggKHJhbmdlKSB7XG4gICAgICBjYXNlICcyNGgnOlxuICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICAgICAgICBzdGFydERhdGUuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgLSAxKTtcbiAgICAgICAgICBlbmREYXRlID0gdG9kYXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcxdyc6XG4gICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkpO1xuICAgICAgICAgIHN0YXJ0RGF0ZS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSAtIDcpO1xuICAgICAgICAgIGVuZERhdGUgPSB0b2RheTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzFtJzpcbiAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheSk7XG4gICAgICAgICAgc3RhcnREYXRlLnNldE1vbnRoKHRvZGF5LmdldE1vbnRoKCkgLSAxKTtcbiAgICAgICAgICBlbmREYXRlID0gdG9kYXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICczbSc6XG4gICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkpO1xuICAgICAgICAgIHN0YXJ0RGF0ZS5zZXRNb250aCh0b2RheS5nZXRNb250aCgpIC0gMyk7XG4gICAgICAgICAgZW5kRGF0ZSA9IHRvZGF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnNm0nOlxuICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICAgICAgICBzdGFydERhdGUuc2V0TW9udGgodG9kYXkuZ2V0TW9udGgoKSAtIDYpO1xuICAgICAgICAgIGVuZERhdGUgPSB0b2RheTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2phbic6XG4gICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XG4gICAgICAgICAgZW5kRGF0ZSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIDEsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZmViJzpcbiAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCAxLCAxKTtcbiAgICAgICAgICBlbmREYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgMiwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtYXInOlxuICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIDIsIDEpO1xuICAgICAgICAgIGVuZERhdGUgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCAzLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3RhcnREYXRlID0gdG9kYXk7XG4gICAgICAgICAgZW5kRGF0ZSA9IHRvZGF5O1xuICB9XG5cbiAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PiB7XG4gICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgY29uc3QgbW9udGggPSAoJzAnICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMik7XG4gICAgICBjb25zdCBkYXkgPSAoJzAnICsgZGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKTtcbiAgICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICB9O1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5LXN0YXJ0LWRhdGUnKS50ZXh0Q29udGVudCA9IGZvcm1hdERhdGUoc3RhcnREYXRlKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktZW5kLWRhdGUnKS50ZXh0Q29udGVudCA9IGZvcm1hdERhdGUoZW5kRGF0ZSk7XG59XG4gIFxuXG4gIC8qIEFkZCBPdmVyYWxsIFN1bW1hcnkgV2lkZ2V0ICovXG5mdW5jdGlvbiBhZGRPclVwZGF0ZVJlY2VudEhpc3RvcnlXaWRnZXQoKSB7XG4gIGNvbnN0IG5ld1dpZGdldCA9IGNyZWF0ZU9yR2V0V2lkZ2V0KCdyZWNlbnQtaGlzdG9yeScsICdSZWNlbnQgSGlzdG9yeScpO1xuXG4gIC8vIGRlbGV0ZSBjaGlkbHJlbiBjb250YWluaW5nICpjb250ZW50cypcbiAgd2hpbGUgKG5ld1dpZGdldC5sYXN0Q2hpbGQgJiYgbmV3V2lkZ2V0Lmxhc3RDaGlsZC5pZCAmJiBuZXdXaWRnZXQubGFzdENoaWxkLmlkLmluY2x1ZGVzKCdyZWNlbnQtaGlzdG9yeS1jb250ZW50cycpKSB7XG4gICAgICBuZXdXaWRnZXQucmVtb3ZlQ2hpbGQobmV3V2lkZ2V0Lmxhc3RDaGlsZCk7XG4gIH1cblxuICBjcmVhdGVSZWNlbnRIaXN0b3J5RWxlbWVudCgpLnRoZW4oKHdpZGdldCkgPT4ge1xuICAgICAgbmV3V2lkZ2V0LmFwcGVuZENoaWxkKHdpZGdldCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRPclVwZGF0ZUJhc2ljU3VtbWFyeVdpZGdldCgpIHtcbiAgY29uc3QgbmV3V2lkZ2V0ID0gY3JlYXRlT3JHZXRXaWRnZXQoJ2Jhc2ljLXN1bW1hcnknLCAnU3VtbWFyeScpO1xuXG4gIC8vIGRlbGV0ZSBjaGlkbHJlbiBjb250YWluaW5nICpjb250ZW50cypcbiAgd2hpbGUgKG5ld1dpZGdldC5sYXN0Q2hpbGQgJiYgbmV3V2lkZ2V0Lmxhc3RDaGlsZC5pZCAmJiBuZXdXaWRnZXQubGFzdENoaWxkLmlkLmluY2x1ZGVzKCdjb250ZW50cycpKSB7XG4gICAgICBuZXdXaWRnZXQucmVtb3ZlQ2hpbGQobmV3V2lkZ2V0Lmxhc3RDaGlsZCk7XG4gIH1cblxuICBjcmVhdGVCYXNpY1N1bW1hcnlFbGVtZW50KCkudGhlbigod2lkZ2V0KSA9PiB7XG4gICAgICBuZXdXaWRnZXQuYXBwZW5kQ2hpbGQod2lkZ2V0KTtcbiAgfSk7XG59XG5cbi8qIExvYWQgQ29udGVudCBCYXNlZCBvbiBEYXRlIFJhbmdlICovXG5mdW5jdGlvbiBsb2FkQ29udGVudCgpIHtcbiAgYWRkT3JVcGRhdGVSZWNlbnRIaXN0b3J5V2lkZ2V0KCk7XG4gIGFkZE9yVXBkYXRlQmFzaWNTdW1tYXJ5V2lkZ2V0KCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlY2VudEhpc3RvcnlFbGVtZW50KCkge1xuICB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcyA9IGF3YWl0IGdldEhpc3RvcnlXaXRoVG9wTlN0YXRzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgMTApO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdoaXN0b3J5LWNvbnRhaW5lcic7XG4gIGNvbnRhaW5lci5pZCA9ICdyZWNlbnQtaGlzdG9yeS1jb250ZW50cyc7XG5cbiAgdG9wTkhvc3RuYW1lc1dpdGhUaXRsZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAvLyBDcmVhdGUgdGhlIG1haW4gYm94IGZvciBlYWNoIGhvc3RuYW1lXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm94LmNsYXNzTmFtZSA9ICdoaXN0b3J5LWJveCc7XG5cbiAgICAvLyBGaXJzdCBwYXJ0OiBIb3N0bmFtZSBhbmQgaGl0IGNvdW50IHdpdGggYW4gaWNvblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSAnaGlzdG9yeS1oZWFkZXInO1xuXG4gICAgY29uc3QgaG9zdG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIC8vIEFkZCBhbiBpY29uIGJlZm9yZSB0aGUgaG9zdG5hbWVcbiAgICBob3N0bmFtZS5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtZ2xvYmUtYW1lcmljYXNcIj48L2k+ICR7aXRlbS5ob3N0bmFtZX1gO1xuXG4gICAgY29uc3QgaGl0Q291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaGl0Q291bnQuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLWNoYXJ0LWxpbmVcIj48L2k+IEhpdCBDb3VudDogJHtpdGVtLmNvdW50fWA7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaG9zdG5hbWUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoaXRDb3VudCk7XG5cbiAgICAvLyBTZWNvbmQgcGFydDogVGl0bGVzIHdpdGggVVJMc1xuICAgIGNvbnN0IHRpdGxlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlc0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGl0bGVzLWNvbnRhaW5lcic7XG5cbiAgICBjb25zdCB0aXRsZXNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIC8vIEluaXRpYWwgZGlzcGxheSBjb3VudFxuICAgIGNvbnN0IGluaXRpYWxEaXNwbGF5Q291bnQgPSAxMDtcbiAgICBjb25zdCBhZGRpdGlvbmFsTG9hZENvdW50ID0gMjA7XG5cbiAgICAvLyBEZXRlcm1pbmUgaG93IG1hbnkgdGl0bGVzIHRvIHNob3cgaW5pdGlhbGx5XG4gICAgY29uc3QgZGlzcGxheWVkVGl0bGVzID0gaXRlbS50aXRsZXMuc2xpY2UoMCwgaW5pdGlhbERpc3BsYXlDb3VudCk7XG4gICAgZGlzcGxheWVkVGl0bGVzLmZvckVhY2godGl0bGVJdGVtID0+IHtcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBsaW5rLmhyZWYgPSB0aXRsZUl0ZW0udXJsO1xuICAgICAgbGluay50ZXh0Q29udGVudCA9IHRpdGxlSXRlbS50aXRsZTtcbiAgICAgIGxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgIHRpdGxlc0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgdGl0bGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlc0xpc3QpO1xuXG4gICAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgdGl0bGVzLCBhZGQgYSBcIm1vcmVcIiBidXR0b25cbiAgICBpZiAoaXRlbS50aXRsZXMubGVuZ3RoID4gaW5pdGlhbERpc3BsYXlDb3VudCkge1xuICAgICAgY29uc3QgbW9yZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgbW9yZUJ1dHRvbi5jbGFzc05hbWUgPSAnbW9yZS1idXR0b24nO1xuICAgICAgbW9yZUJ1dHRvbi50ZXh0Q29udGVudCA9IGBhbmQgJHtpdGVtLnRpdGxlcy5sZW5ndGggLSBpbml0aWFsRGlzcGxheUNvdW50fSBtb3JlLi4uYDtcbiAgICAgIG1vcmVCdXR0b24uZGF0YXNldC5ob3N0bmFtZSA9IGl0ZW0uaG9zdG5hbWU7IC8vIEZvciBpZGVudGlmeWluZyB3aGljaCBib3ggdG8gZXhwYW5kXG5cbiAgICAgIG1vcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvYWRNb3JlVGl0bGVzKGl0ZW0sIHRpdGxlc0xpc3QsIG1vcmVCdXR0b24sIGluaXRpYWxEaXNwbGF5Q291bnQsIGFkZGl0aW9uYWxMb2FkQ291bnQpO1xuICAgICAgfSk7XG5cbiAgICAgIHRpdGxlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb3JlQnV0dG9uKTtcbiAgICB9XG5cbiAgICAvLyBBc3NlbWJsZSB0aGUgYm94XG4gICAgYm94LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgYm94LmFwcGVuZENoaWxkKHRpdGxlc0NvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJveCk7XG4gIH0pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJhc2ljU3VtbWFyeUVsZW1lbnQoKSB7XG4gIC8vIFRPRE86IGdldCBhIG51bWJlciBvZiBpdGVtcyBmcm9tIHNvbWV3aGVyZVxuICBjb25zdCBoaXN0b3J5SXRlbXMgPSBhd2FpdCBnZXRIaXN0b3J5KHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG4gIGNvbnNvbGUubG9nKGhpc3RvcnlJdGVtcyk7XG4gIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZXh0RWxlbWVudC5pZCA9ICdiYXNpYy1zdW1tYXJ5LWNvbnRlbnRzJztcblxuICBjb25zdCBoaXN0b3J5SXRlbVRpdGxlcyA9IGhpc3RvcnlJdGVtcy5tYXAoaXRlbSA9PiBpdGVtLnRpdGxlIHx8IGV4dHJhY3REb21haW4oaXRlbS51cmwpKS5qb2luKCdcXG4nKTtcblxuICBjb25zdCBzdW1tYXJpemVyID0gYXdhaXQgZ2V0U3VtbWFyaXplcigpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdW1tYXJpemVyLnN1bW1hcml6ZShoaXN0b3J5SXRlbVRpdGxlcyk7XG4gIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgLy8gdXBkYXRlIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIHRleHQgZWxlbWVudFxuICAvLyB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IHJlc3VsdDtcbiAgdGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gbWFya2Rvd25Ub0h0bWwocmVzdWx0KTtcblxuICByZXR1cm4gdGV4dEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGxvYWRNb3JlVGl0bGVzKGl0ZW0sIHRpdGxlc0xpc3QsIG1vcmVCdXR0b24sIGluaXRpYWxDb3VudCwgbG9hZENvdW50KSB7XG4gIC8vIERldGVybWluZSB0aGUgY3VycmVudCBudW1iZXIgb2YgdGl0bGVzIGRpc3BsYXllZFxuICBjb25zdCBjdXJyZW50Q291bnQgPSB0aXRsZXNMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykubGVuZ3RoO1xuICBjb25zdCBuZXh0Q291bnQgPSBjdXJyZW50Q291bnQgKyBsb2FkQ291bnQ7XG4gIGNvbnN0IHRpdGxlc1RvQWRkID0gaXRlbS50aXRsZXMuc2xpY2UoY3VycmVudENvdW50LCBuZXh0Q291bnQpO1xuXG4gIHRpdGxlc1RvQWRkLmZvckVhY2godGl0bGVJdGVtID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rLmhyZWYgPSB0aXRsZUl0ZW0udXJsO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSB0aXRsZUl0ZW0udGl0bGU7XG4gICAgbGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB0aXRsZXNMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfSk7XG5cbiAgLy8gVXBkYXRlIHRoZSByZW1haW5pbmcgY291bnRcbiAgY29uc3QgcmVtYWluaW5nID0gaXRlbS50aXRsZXMubGVuZ3RoIC0gbmV4dENvdW50O1xuXG4gIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgbW9yZUJ1dHRvbi50ZXh0Q29udGVudCA9IGBhbmQgJHtyZW1haW5pbmd9IG1vcmUuLi5gO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlbW92ZSB0aGUgXCJtb3JlXCIgYnV0dG9uIGlmIG5vIG1vcmUgdGl0bGVzIGFyZSBsZWZ0XG4gICAgbW9yZUJ1dHRvbi5yZW1vdmUoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJnZXRTdW1tYXJpemVyIiwiX2dldFN1bW1hcml6ZXIiLCJfY2FsbGVlIiwiY2FuU3VtbWFyaXplIiwic3VtbWFyaXplciIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJhaSIsImNhcGFiaWxpdGllcyIsImF2YWlsYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwibG9hZGVkIiwidG90YWwiLCJyZWFkeSIsImdldEhpc3RvcnlJblRpbWVSYW5nZSIsImdldEhpc3RvcnkiLCJfeCIsIl94MiIsIl9nZXRIaXN0b3J5Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInJlamVjdCIsImNocm9tZSIsImhpc3RvcnkiLCJzZWFyY2giLCJ0ZXh0Iiwic3RhcnRUaW1lIiwiZ2V0VGltZSIsImVuZFRpbWUiLCJtYXhSZXN1bHRzIiwicmVzdWx0cyIsInJ1bnRpbWUiLCJsYXN0RXJyb3IiLCJnZXRIaXN0b3J5V2l0aFRvcE5TdGF0cyIsIl94MyIsIl94NCIsIl94NSIsIl9nZXRIaXN0b3J5V2l0aFRvcE5TdGF0cyIsIl9jYWxsZWUyIiwiTiIsImhpc3RvcnlJdGVtcyIsInBhcnNlZEhpc3RvcnlJdGVtcyIsImhvc3RuYW1lTWFwIiwiaG9zdG5hbWVUaXRsZU1hcCIsInNvcnRlZEhvc3RuYW1lcyIsInRvcE5Ib3N0bmFtZXMiLCJ0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIm1hcCIsIml0ZW0iLCJwYXJzZV91cmxfcGFydCIsInVybCIsInRpdGxlIiwiY291bnRfYnlfaG9zdG5hbWUiLCJjcmVhdGVIb3N0TmFtZVRpdGxlTWFwIiwiQXJyYXkiLCJmcm9tIiwiZW50cmllcyIsInNvcnQiLCJiIiwiaG9zdG5hbWUiLCJ0aXRsZXMiLCJnZXQiLCJjb3VudCIsInBhcnNlZFVybCIsIlVSTCIsInByb3RvY29sIiwicmVwbGFjZSIsImhvc3RuYW1lUGFydHMiLCJzcGxpdCIsInN1YmRvbWFpbiIsImRvbWFpbiIsInRsZCIsImpvaW4iLCJwYXRoIiwicGF0aG5hbWUiLCJxdWVyeVBhcmFtcyIsInNlYXJjaFBhcmFtcyIsImtleSIsImlzQXJyYXkiLCJmcmFnbWVudCIsImhhc2giLCJwb3J0IiwiaG9zdCIsImhyZWYiLCJvcmlnaW4iLCJlcnJvciIsImNvbmNhdCIsIk1hcCIsImhhcyIsInNldCIsInNvbWUiLCJleHRyYWN0RG9tYWluIiwibWFya2Rvd25Ub0h0bWwiLCJtYXJrZG93blRleHQiLCJodG1sIiwiZW5hYmxlUmVzaXppbmciLCJyZXNpemFibGVFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJyZXNpemVIYW5kbGUiLCJxdWVyeVNlbGVjdG9yIiwiaXNSZXNpemluZyIsInByZXZlbnREZWZhdWx0IiwiYm9keSIsInN0eWxlIiwiY3Vyc29yIiwiY2xhc3NMaXN0IiwiYWRkIiwic3RhcnRXaWR0aCIsIm9mZnNldFdpZHRoIiwic3RhcnRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzdGFydFgiLCJjbGllbnRYIiwic3RhcnRZIiwiY2xpZW50WSIsIm9uTW91c2VNb3ZlIiwiY3VycmVudFdpZHRoIiwiY3VycmVudEhlaWdodCIsIm1pbldpZHRoIiwibWluSGVpZ2h0Iiwid2lkdGgiLCJNYXRoIiwibWF4IiwiaGVpZ2h0Iiwib25Nb3VzZVVwIiwicmVtb3ZlIiwid2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNhdmVXaWRnZXRTaXplIiwiaWQiLCJsb2FkV2lkZ2V0U2l6ZSIsIndpZGdldElkIiwic2l6ZSIsInN0b3JhZ2UiLCJsb2NhbCIsIl9kZWZpbmVQcm9wZXJ0eSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0IiwicGFyc2UiLCJnZXRJdGVtIiwiY3JlYXRlT3JHZXRXaWRnZXQiLCJ1bmlxdWVJRCIsIndpZGdldFRpdGxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWRnZXRDb250YWluZXIiLCJuZXdXaWRnZXQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJkYiIsIm9wZW5EYXRhYmFzZSIsIl9vcGVuRGF0YWJhc2UiLCJyZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsIm9uZXJyb3IiLCJldmVudCIsInRhcmdldCIsImVycm9yQ29kZSIsIm9udXBncmFkZW5lZWRlZCIsIm9iamVjdFN0b3JlIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwiY3JlYXRlSW5kZXgiLCJ1bmlxdWUiLCJtdWx0aUVudHJ5Iiwib25zdWNjZXNzIiwiY2xlYXJEYXRhYmFzZSIsIl9jbGVhckRhdGFiYXNlIiwidHJhbnNhY3Rpb24iLCJjbGVhciIsImFkZEhpc3RvcnlJdGVtIiwiX2FkZEhpc3RvcnlJdGVtIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJpbmRleCIsImNoZWNrUmVxdWVzdCIsImxhc3RWaXNpdFRpbWUiLCJwdXQiLCJnZXRBbGxIaXN0b3J5SXRlbXMiLCJfZ2V0QWxsSGlzdG9yeUl0ZW1zIiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJnZXRBbGwiLCJjaGVja0lmSXRlbUV4aXN0cyIsIl9jaGVja0lmSXRlbUV4aXN0cyIsIl9jYWxsZWU1IiwiZXhpc3RzIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwicHJvbWlzaWZ5UmVxdWVzdCIsInVuZGVmaW5lZCIsInQwIiwiX2dldEhpc3RvcnlJblRpbWVSYW5nZSIsIl9jYWxsZWU2IiwicmFuZ2UiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJJREJLZXlSYW5nZSIsImJvdW5kIiwiYWRkRGF0ZVJhbmdlQnV0dG9ucyIsImFkZFJlZnJlc2hCdXR0b24iLCJzZXREYXRlUmFuZ2UiLCJhZGRPclVwZGF0ZVJlY2VudEhpc3RvcnlXaWRnZXQiLCJhZGRPclVwZGF0ZUJhc2ljU3VtbWFyeVdpZGdldCIsImxvYWRDb250ZW50IiwidG9nZ2xlIiwiY29udGFpbnMiLCJzYXZlZFRoZW1lIiwicmVmcmVzaEJ1dHRvbiIsInRleHRDb250ZW50IiwiY29udGFpbmVyIiwiYnV0dG9uRGF0YSIsImxhYmVsIiwiZGF0YSIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsImJ0biIsInRvZGF5IiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwic2V0TW9udGgiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJsYXN0Q2hpbGQiLCJpbmNsdWRlcyIsInJlbW92ZUNoaWxkIiwiY3JlYXRlUmVjZW50SGlzdG9yeUVsZW1lbnQiLCJ3aWRnZXQiLCJjcmVhdGVCYXNpY1N1bW1hcnlFbGVtZW50IiwiX2NyZWF0ZVJlY2VudEhpc3RvcnlFbGVtZW50IiwiYm94IiwiaGVhZGVyIiwiaGl0Q291bnQiLCJ0aXRsZXNDb250YWluZXIiLCJ0aXRsZXNMaXN0IiwiaW5pdGlhbERpc3BsYXlDb3VudCIsImFkZGl0aW9uYWxMb2FkQ291bnQiLCJkaXNwbGF5ZWRUaXRsZXMiLCJ0aXRsZUl0ZW0iLCJsaXN0SXRlbSIsImxpbmsiLCJtb3JlQnV0dG9uIiwiZGF0YXNldCIsImxvYWRNb3JlVGl0bGVzIiwiX2NyZWF0ZUJhc2ljU3VtbWFyeUVsZW1lbnQiLCJ0ZXh0RWxlbWVudCIsImhpc3RvcnlJdGVtVGl0bGVzIiwic3VtbWFyaXplIiwiaW5pdGlhbENvdW50IiwibG9hZENvdW50IiwiY3VycmVudENvdW50IiwibmV4dENvdW50IiwidGl0bGVzVG9BZGQiLCJyZW1haW5pbmciXSwic291cmNlUm9vdCI6IiJ9