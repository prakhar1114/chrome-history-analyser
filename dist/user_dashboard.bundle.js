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
function getHistoryWithTopNStats(_x3, _x4, _x5, _x6) {
  return _getHistoryWithTopNStats.apply(this, arguments);
}
function _getHistoryWithTopNStats() {
  _getHistoryWithTopNStats = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(startDate, endDate, N, selectedFilters) {
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

// Global variable to store selected filters
var selectedFilters = [];
document.addEventListener('DOMContentLoaded', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        addDateRangeButtons();
        addRefreshButton();
        setDateRange('24h');
        // Initialize category filters
        _context.next = 5;
        return initializeCategoryFilters();
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
  return _addOrUpdateRecentHistoryWidget.apply(this, arguments);
}
function _addOrUpdateRecentHistoryWidget() {
  _addOrUpdateRecentHistoryWidget = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var newWidget;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          newWidget = (0,_widgets_js__WEBPACK_IMPORTED_MODULE_2__.createOrGetWidget)('recent-history', 'Recent History'); // delete children containing *contents*
          while (newWidget.lastChild && newWidget.lastChild.id && newWidget.lastChild.id.includes('recent-history-contents')) {
            newWidget.removeChild(newWidget.lastChild);
          }
          createRecentHistoryElement().then(function (widget) {
            newWidget.appendChild(widget);
          });
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _addOrUpdateRecentHistoryWidget.apply(this, arguments);
}
function addOrUpdateBasicSummaryWidget() {
  return _addOrUpdateBasicSummaryWidget.apply(this, arguments);
}
/* Load Content Based on Date Range */
function _addOrUpdateBasicSummaryWidget() {
  _addOrUpdateBasicSummaryWidget = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var newWidget;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          newWidget = (0,_widgets_js__WEBPACK_IMPORTED_MODULE_2__.createOrGetWidget)('basic-summary', 'Summary'); // delete children containing *contents*
          while (newWidget.lastChild && newWidget.lastChild.id && newWidget.lastChild.id.includes('contents')) {
            newWidget.removeChild(newWidget.lastChild);
          }
          _context4.next = 4;
          return createBasicSummaryElement(newWidget);
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _addOrUpdateBasicSummaryWidget.apply(this, arguments);
}
function loadContent() {
  return _loadContent.apply(this, arguments);
}
function _loadContent() {
  _loadContent = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          console.log(selectedFilters);
          addOrUpdateRecentHistoryWidget();
          addOrUpdateBasicSummaryWidget();
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _loadContent.apply(this, arguments);
}
function createRecentHistoryElement() {
  return _createRecentHistoryElement.apply(this, arguments);
}
function _createRecentHistoryElement() {
  _createRecentHistoryElement = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var topNHostnamesWithTitles, container;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0,_history_js__WEBPACK_IMPORTED_MODULE_1__.getHistoryWithTopNStats)(startDate, endDate, 10, selectedFilters);
        case 2:
          topNHostnamesWithTitles = _context6.sent;
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
          return _context6.abrupt("return", container);
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _createRecentHistoryElement.apply(this, arguments);
}
function createBasicSummaryElement(_x) {
  return _createBasicSummaryElement.apply(this, arguments);
}
function _createBasicSummaryElement() {
  _createBasicSummaryElement = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(newWidget) {
    var topNHostnamesWithTitles, historyItems, historyItemTitles, chunks, i, _i, _chunks, chunk, result, textElement;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0,_history_js__WEBPACK_IMPORTED_MODULE_1__.getHistoryWithTopNStats)(startDate, endDate, 10, selectedFilters);
        case 2:
          topNHostnamesWithTitles = _context7.sent;
          historyItems = topNHostnamesWithTitles.map(function (item) {
            return item.titles;
          }).flat(); // Append all history items to a single string
          historyItemTitles = historyItems.map(function (item) {
            return item.title;
          }).join(','); // Create chunks of 4000 characters
          chunks = [];
          for (i = 0; i < historyItemTitles.length; i += 2000) {
            chunks.push(historyItemTitles.slice(i, i + 2000));
          }

          // Summarize each chunk and append to the result
          _i = 0, _chunks = chunks;
        case 8:
          if (!(_i < _chunks.length)) {
            _context7.next = 20;
            break;
          }
          chunk = _chunks[_i];
          _context7.next = 12;
          return (0,_ai_summarizer_js__WEBPACK_IMPORTED_MODULE_0__.summarize)((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.cleanInput)(chunk));
        case 12:
          result = _context7.sent;
          textElement = document.createElement('p');
          textElement.id = 'basic-summary-contents';
          textElement.innerHTML = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.markdownToHtml)(result);
          newWidget.appendChild(textElement);
        case 17:
          _i++;
          _context7.next = 8;
          break;
        case 20:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
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

// Function to initialize category filters
function initializeCategoryFilters() {
  return _initializeCategoryFilters.apply(this, arguments);
} // Function to get custom filters from Chrome storage
function _initializeCategoryFilters() {
  _initializeCategoryFilters = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var defaultFilters, customFilters, allFilters;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          defaultFilters = ['Code', 'Productivity', 'AI', 'Entertainment', 'Social'];
          _context8.next = 3;
          return getCustomFilters();
        case 3:
          customFilters = _context8.sent;
          allFilters = [].concat(defaultFilters, _toConsumableArray(customFilters));
          allFilters.forEach(function (filter) {
            createToggleButton(filter, defaultFilters.includes(filter));
          });

          // Load selected filters from storage
          _context8.next = 8;
          return getSelectedFilters();
        case 8:
          selectedFilters = _context8.sent;
          updateFilterStates();
        case 10:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _initializeCategoryFilters.apply(this, arguments);
}
function getCustomFilters() {
  return new Promise(function (resolve) {
    chrome.storage.local.get(['customFilters'], function (result) {
      resolve(result.customFilters || []);
    });
  });
}

// Function to get selected filters from Chrome storage
function getSelectedFilters() {
  return new Promise(function (resolve) {
    chrome.storage.local.get(['selectedFilters'], function (result) {
      resolve(result.selectedFilters || []);
    });
  });
}

// Function to save selected filters to Chrome storage
function saveSelectedFilters() {
  chrome.storage.local.set({
    selectedFilters: selectedFilters
  }, function () {
    console.log('Selected filters saved:', selectedFilters);
  });
}

// Function to save custom filters to Chrome storage
function saveCustomFilters(customFilters) {
  chrome.storage.local.set({
    customFilters: customFilters
  }, function () {
    console.log('Custom filters saved:', customFilters);
  });
}

// Function to create a toggle button
function createToggleButton(label) {
  var isDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var container = document.getElementById('category-filters');
  var button = document.createElement('button');
  button.className = 'category-toggle-button';
  button.textContent = label;
  button.dataset.label = label;
  button.dataset["default"] = isDefault;
  if (!isDefault) {
    button.classList.add('custom');
    var removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = '✕';
    removeBtn.title = 'Remove filter';
    removeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      removeFilter(label);
    });
    button.appendChild(removeBtn);
  }

  // Set initial state
  if (selectedFilters.includes(label)) {
    button.classList.add('active');
  }

  // Event listener for toggling
  button.addEventListener('click', function () {
    var index = selectedFilters.indexOf(label);
    if (index > -1) {
      selectedFilters.splice(index, 1);
      button.classList.remove('active');
    } else {
      selectedFilters.push(label);
      button.classList.add('active');
    }
    saveSelectedFilters();
    loadContent();
    // Call any function that depends on selectedFilters
    // e.g., loadContent();
  });
  container.appendChild(button);
}

// Function to remove a custom filter
function removeFilter(_x2) {
  return _removeFilter.apply(this, arguments);
} // Function to update filter button states based on selectedFilters
function _removeFilter() {
  _removeFilter = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(label) {
    var index, customFilters, filterIndex, button;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          // Remove from selectedFilters if present
          index = selectedFilters.indexOf(label);
          if (index > -1) {
            selectedFilters.splice(index, 1);
            saveSelectedFilters();
          }

          // Remove from customFilters in storage
          _context9.next = 4;
          return getCustomFilters();
        case 4:
          customFilters = _context9.sent;
          filterIndex = customFilters.indexOf(label);
          if (filterIndex > -1) {
            customFilters.splice(filterIndex, 1);
            saveCustomFilters(customFilters);
          }

          // Remove the button from the DOM
          button = document.querySelector(".category-toggle-button[data-label=\"".concat(label, "\"]"));
          if (button) {
            button.remove();
          }
        case 9:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _removeFilter.apply(this, arguments);
}
function updateFilterStates() {
  var buttons = document.querySelectorAll('.category-toggle-button');
  buttons.forEach(function (button) {
    var label = button.dataset.label;
    if (selectedFilters.includes(label)) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

// Event listener for adding new filter
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
          createToggleButton(newFilter, false);

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
  return function (_x3) {
    return _ref2.apply(this, arguments);
  };
}());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcl9kYXNoYm9hcmQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVMsS0FBQSxFQUFBUCxDQUFBLEVBQUFpQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBcEIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFrQixNQUFBLG1CQUFBakIsQ0FBQSxJQUFBaUIsTUFBQSxZQUFBQSxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFvQixLQUFBckIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBSyxDQUFBLEdBQUFWLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxTQUFBLFlBQUFtQixTQUFBLEdBQUF2QixDQUFBLEdBQUF1QixTQUFBLEVBQUFYLENBQUEsR0FBQVQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBZCxDQUFBLENBQUFOLFNBQUEsR0FBQVUsQ0FBQSxPQUFBVyxPQUFBLENBQUFwQixDQUFBLGdCQUFBRSxDQUFBLENBQUFLLENBQUEsZUFBQUgsS0FBQSxFQUFBaUIsZ0JBQUEsQ0FBQXpCLENBQUEsRUFBQUMsQ0FBQSxFQUFBWSxDQUFBLE1BQUFGLENBQUEsYUFBQWUsU0FBQTFCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLG1CQUFBMEIsSUFBQSxZQUFBQyxHQUFBLEVBQUE1QixDQUFBLENBQUE2QixJQUFBLENBQUE5QixDQUFBLEVBQUFFLENBQUEsY0FBQUQsQ0FBQSxhQUFBMkIsSUFBQSxXQUFBQyxHQUFBLEVBQUE1QixDQUFBLFFBQUFELENBQUEsQ0FBQXNCLElBQUEsR0FBQUEsSUFBQSxNQUFBUyxDQUFBLHFCQUFBQyxDQUFBLHFCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBWixVQUFBLGNBQUFhLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLENBQUEsT0FBQXBCLE1BQUEsQ0FBQW9CLENBQUEsRUFBQTFCLENBQUEscUNBQUEyQixDQUFBLEdBQUFwQyxNQUFBLENBQUFxQyxjQUFBLEVBQUFDLENBQUEsR0FBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFBLENBQUEsQ0FBQUcsTUFBQSxRQUFBRCxDQUFBLElBQUFBLENBQUEsS0FBQXZDLENBQUEsSUFBQUcsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBVyxDQUFBLEVBQUE3QixDQUFBLE1BQUEwQixDQUFBLEdBQUFHLENBQUEsT0FBQUUsQ0FBQSxHQUFBTiwwQkFBQSxDQUFBakMsU0FBQSxHQUFBbUIsU0FBQSxDQUFBbkIsU0FBQSxHQUFBRCxNQUFBLENBQUFxQixNQUFBLENBQUFjLENBQUEsWUFBQU0sc0JBQUEzQyxDQUFBLGdDQUFBNEMsT0FBQSxXQUFBN0MsQ0FBQSxJQUFBa0IsTUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLFlBQUFDLENBQUEsZ0JBQUE2QyxPQUFBLENBQUE5QyxDQUFBLEVBQUFDLENBQUEsc0JBQUE4QyxjQUFBOUMsQ0FBQSxFQUFBRCxDQUFBLGFBQUFnRCxPQUFBOUMsQ0FBQSxFQUFBSyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEdBQUFhLFFBQUEsQ0FBQTFCLENBQUEsQ0FBQUMsQ0FBQSxHQUFBRCxDQUFBLEVBQUFNLENBQUEsbUJBQUFPLENBQUEsQ0FBQWMsSUFBQSxRQUFBWixDQUFBLEdBQUFGLENBQUEsQ0FBQWUsR0FBQSxFQUFBRSxDQUFBLEdBQUFmLENBQUEsQ0FBQVAsS0FBQSxTQUFBc0IsQ0FBQSxnQkFBQWtCLE9BQUEsQ0FBQWxCLENBQUEsS0FBQTFCLENBQUEsQ0FBQXlCLElBQUEsQ0FBQUMsQ0FBQSxlQUFBL0IsQ0FBQSxDQUFBa0QsT0FBQSxDQUFBbkIsQ0FBQSxDQUFBb0IsT0FBQSxFQUFBQyxJQUFBLFdBQUFuRCxDQUFBLElBQUErQyxNQUFBLFNBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxnQkFBQVgsQ0FBQSxJQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsUUFBQVosQ0FBQSxDQUFBa0QsT0FBQSxDQUFBbkIsQ0FBQSxFQUFBcUIsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBZSxDQUFBLENBQUFQLEtBQUEsR0FBQVIsQ0FBQSxFQUFBUyxDQUFBLENBQUFNLENBQUEsZ0JBQUFmLENBQUEsV0FBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsQ0FBQUUsQ0FBQSxDQUFBZSxHQUFBLFNBQUEzQixDQUFBLEVBQUFLLENBQUEsb0JBQUFFLEtBQUEsV0FBQUEsTUFBQVIsQ0FBQSxFQUFBSSxDQUFBLGFBQUFnRCwyQkFBQSxlQUFBckQsQ0FBQSxXQUFBQSxDQUFBLEVBQUFFLENBQUEsSUFBQThDLE1BQUEsQ0FBQS9DLENBQUEsRUFBQUksQ0FBQSxFQUFBTCxDQUFBLEVBQUFFLENBQUEsZ0JBQUFBLENBQUEsR0FBQUEsQ0FBQSxHQUFBQSxDQUFBLENBQUFrRCxJQUFBLENBQUFDLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBM0IsaUJBQUExQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBRSxDQUFBLEdBQUF3QixDQUFBLG1CQUFBckIsQ0FBQSxFQUFBRSxDQUFBLFFBQUFMLENBQUEsS0FBQTBCLENBQUEsUUFBQXFCLEtBQUEsc0NBQUEvQyxDQUFBLEtBQUEyQixDQUFBLG9CQUFBeEIsQ0FBQSxRQUFBRSxDQUFBLFdBQUFILEtBQUEsRUFBQVIsQ0FBQSxFQUFBc0QsSUFBQSxlQUFBbEQsQ0FBQSxDQUFBbUQsTUFBQSxHQUFBOUMsQ0FBQSxFQUFBTCxDQUFBLENBQUF3QixHQUFBLEdBQUFqQixDQUFBLFVBQUFFLENBQUEsR0FBQVQsQ0FBQSxDQUFBb0QsUUFBQSxNQUFBM0MsQ0FBQSxRQUFBRSxDQUFBLEdBQUEwQyxtQkFBQSxDQUFBNUMsQ0FBQSxFQUFBVCxDQUFBLE9BQUFXLENBQUEsUUFBQUEsQ0FBQSxLQUFBbUIsQ0FBQSxtQkFBQW5CLENBQUEscUJBQUFYLENBQUEsQ0FBQW1ELE1BQUEsRUFBQW5ELENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQXVELEtBQUEsR0FBQXZELENBQUEsQ0FBQXdCLEdBQUEsc0JBQUF4QixDQUFBLENBQUFtRCxNQUFBLFFBQUFqRCxDQUFBLEtBQUF3QixDQUFBLFFBQUF4QixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUF3QixHQUFBLEVBQUF4QixDQUFBLENBQUF3RCxpQkFBQSxDQUFBeEQsQ0FBQSxDQUFBd0IsR0FBQSx1QkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsSUFBQW5ELENBQUEsQ0FBQXlELE1BQUEsV0FBQXpELENBQUEsQ0FBQXdCLEdBQUEsR0FBQXRCLENBQUEsR0FBQTBCLENBQUEsTUFBQUssQ0FBQSxHQUFBWCxRQUFBLENBQUEzQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxvQkFBQWlDLENBQUEsQ0FBQVYsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUFrRCxJQUFBLEdBQUFyQixDQUFBLEdBQUFGLENBQUEsRUFBQU0sQ0FBQSxDQUFBVCxHQUFBLEtBQUFNLENBQUEscUJBQUExQixLQUFBLEVBQUE2QixDQUFBLENBQUFULEdBQUEsRUFBQTBCLElBQUEsRUFBQWxELENBQUEsQ0FBQWtELElBQUEsa0JBQUFqQixDQUFBLENBQUFWLElBQUEsS0FBQXJCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQW1ELE1BQUEsWUFBQW5ELENBQUEsQ0FBQXdCLEdBQUEsR0FBQVMsQ0FBQSxDQUFBVCxHQUFBLG1CQUFBNkIsb0JBQUExRCxDQUFBLEVBQUFFLENBQUEsUUFBQUcsQ0FBQSxHQUFBSCxDQUFBLENBQUFzRCxNQUFBLEVBQUFqRCxDQUFBLEdBQUFQLENBQUEsQ0FBQWEsUUFBQSxDQUFBUixDQUFBLE9BQUFFLENBQUEsS0FBQU4sQ0FBQSxTQUFBQyxDQUFBLENBQUF1RCxRQUFBLHFCQUFBcEQsQ0FBQSxJQUFBTCxDQUFBLENBQUFhLFFBQUEsZUFBQVgsQ0FBQSxDQUFBc0QsTUFBQSxhQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxFQUFBeUQsbUJBQUEsQ0FBQTFELENBQUEsRUFBQUUsQ0FBQSxlQUFBQSxDQUFBLENBQUFzRCxNQUFBLGtCQUFBbkQsQ0FBQSxLQUFBSCxDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHVDQUFBMUQsQ0FBQSxpQkFBQThCLENBQUEsTUFBQXpCLENBQUEsR0FBQWlCLFFBQUEsQ0FBQXBCLENBQUEsRUFBQVAsQ0FBQSxDQUFBYSxRQUFBLEVBQUFYLENBQUEsQ0FBQTJCLEdBQUEsbUJBQUFuQixDQUFBLENBQUFrQixJQUFBLFNBQUExQixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUFuQixDQUFBLENBQUFtQixHQUFBLEVBQUEzQixDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLE1BQUF2QixDQUFBLEdBQUFGLENBQUEsQ0FBQW1CLEdBQUEsU0FBQWpCLENBQUEsR0FBQUEsQ0FBQSxDQUFBMkMsSUFBQSxJQUFBckQsQ0FBQSxDQUFBRixDQUFBLENBQUFnRSxVQUFBLElBQUFwRCxDQUFBLENBQUFILEtBQUEsRUFBQVAsQ0FBQSxDQUFBK0QsSUFBQSxHQUFBakUsQ0FBQSxDQUFBa0UsT0FBQSxlQUFBaEUsQ0FBQSxDQUFBc0QsTUFBQSxLQUFBdEQsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxHQUFBQyxDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLElBQUF2QixDQUFBLElBQUFWLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsc0NBQUE3RCxDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLGNBQUFnQyxhQUFBbEUsQ0FBQSxRQUFBRCxDQUFBLEtBQUFvRSxNQUFBLEVBQUFuRSxDQUFBLFlBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBcUUsUUFBQSxHQUFBcEUsQ0FBQSxXQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXNFLFVBQUEsR0FBQXJFLENBQUEsS0FBQUQsQ0FBQSxDQUFBdUUsUUFBQSxHQUFBdEUsQ0FBQSxXQUFBdUUsVUFBQSxDQUFBQyxJQUFBLENBQUF6RSxDQUFBLGNBQUEwRSxjQUFBekUsQ0FBQSxRQUFBRCxDQUFBLEdBQUFDLENBQUEsQ0FBQTBFLFVBQUEsUUFBQTNFLENBQUEsQ0FBQTRCLElBQUEsb0JBQUE1QixDQUFBLENBQUE2QixHQUFBLEVBQUE1QixDQUFBLENBQUEwRSxVQUFBLEdBQUEzRSxDQUFBLGFBQUF5QixRQUFBeEIsQ0FBQSxTQUFBdUUsVUFBQSxNQUFBSixNQUFBLGFBQUFuRSxDQUFBLENBQUE0QyxPQUFBLENBQUFzQixZQUFBLGNBQUFTLEtBQUEsaUJBQUFsQyxPQUFBMUMsQ0FBQSxRQUFBQSxDQUFBLFdBQUFBLENBQUEsUUFBQUUsQ0FBQSxHQUFBRixDQUFBLENBQUFZLENBQUEsT0FBQVYsQ0FBQSxTQUFBQSxDQUFBLENBQUE0QixJQUFBLENBQUE5QixDQUFBLDRCQUFBQSxDQUFBLENBQUFpRSxJQUFBLFNBQUFqRSxDQUFBLE9BQUE2RSxLQUFBLENBQUE3RSxDQUFBLENBQUE4RSxNQUFBLFNBQUF2RSxDQUFBLE9BQUFHLENBQUEsWUFBQXVELEtBQUEsYUFBQTFELENBQUEsR0FBQVAsQ0FBQSxDQUFBOEUsTUFBQSxPQUFBekUsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBTyxDQUFBLFVBQUEwRCxJQUFBLENBQUF4RCxLQUFBLEdBQUFULENBQUEsQ0FBQU8sQ0FBQSxHQUFBMEQsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsU0FBQUEsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxZQUFBdkQsQ0FBQSxDQUFBdUQsSUFBQSxHQUFBdkQsQ0FBQSxnQkFBQXFELFNBQUEsQ0FBQWQsT0FBQSxDQUFBakQsQ0FBQSxrQ0FBQW9DLGlCQUFBLENBQUFoQyxTQUFBLEdBQUFpQywwQkFBQSxFQUFBOUIsQ0FBQSxDQUFBb0MsQ0FBQSxtQkFBQWxDLEtBQUEsRUFBQTRCLDBCQUFBLEVBQUFqQixZQUFBLFNBQUFiLENBQUEsQ0FBQThCLDBCQUFBLG1CQUFBNUIsS0FBQSxFQUFBMkIsaUJBQUEsRUFBQWhCLFlBQUEsU0FBQWdCLGlCQUFBLENBQUEyQyxXQUFBLEdBQUE3RCxNQUFBLENBQUFtQiwwQkFBQSxFQUFBckIsQ0FBQSx3QkFBQWhCLENBQUEsQ0FBQWdGLG1CQUFBLGFBQUEvRSxDQUFBLFFBQUFELENBQUEsd0JBQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBZ0YsV0FBQSxXQUFBakYsQ0FBQSxLQUFBQSxDQUFBLEtBQUFvQyxpQkFBQSw2QkFBQXBDLENBQUEsQ0FBQStFLFdBQUEsSUFBQS9FLENBQUEsQ0FBQWtGLElBQUEsT0FBQWxGLENBQUEsQ0FBQW1GLElBQUEsYUFBQWxGLENBQUEsV0FBQUUsTUFBQSxDQUFBaUYsY0FBQSxHQUFBakYsTUFBQSxDQUFBaUYsY0FBQSxDQUFBbkYsQ0FBQSxFQUFBb0MsMEJBQUEsS0FBQXBDLENBQUEsQ0FBQW9GLFNBQUEsR0FBQWhELDBCQUFBLEVBQUFuQixNQUFBLENBQUFqQixDQUFBLEVBQUFlLENBQUEseUJBQUFmLENBQUEsQ0FBQUcsU0FBQSxHQUFBRCxNQUFBLENBQUFxQixNQUFBLENBQUFtQixDQUFBLEdBQUExQyxDQUFBLEtBQUFELENBQUEsQ0FBQXNGLEtBQUEsYUFBQXJGLENBQUEsYUFBQWtELE9BQUEsRUFBQWxELENBQUEsT0FBQTJDLHFCQUFBLENBQUFHLGFBQUEsQ0FBQTNDLFNBQUEsR0FBQWMsTUFBQSxDQUFBNkIsYUFBQSxDQUFBM0MsU0FBQSxFQUFBVSxDQUFBLGlDQUFBZCxDQUFBLENBQUErQyxhQUFBLEdBQUFBLGFBQUEsRUFBQS9DLENBQUEsQ0FBQXVGLEtBQUEsYUFBQXRGLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxlQUFBQSxDQUFBLEtBQUFBLENBQUEsR0FBQThFLE9BQUEsT0FBQTVFLENBQUEsT0FBQW1DLGFBQUEsQ0FBQXpCLElBQUEsQ0FBQXJCLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsR0FBQUcsQ0FBQSxVQUFBVixDQUFBLENBQUFnRixtQkFBQSxDQUFBOUUsQ0FBQSxJQUFBVSxDQUFBLEdBQUFBLENBQUEsQ0FBQXFELElBQUEsR0FBQWIsSUFBQSxXQUFBbkQsQ0FBQSxXQUFBQSxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUFRLEtBQUEsR0FBQUcsQ0FBQSxDQUFBcUQsSUFBQSxXQUFBckIscUJBQUEsQ0FBQUQsQ0FBQSxHQUFBekIsTUFBQSxDQUFBeUIsQ0FBQSxFQUFBM0IsQ0FBQSxnQkFBQUUsTUFBQSxDQUFBeUIsQ0FBQSxFQUFBL0IsQ0FBQSxpQ0FBQU0sTUFBQSxDQUFBeUIsQ0FBQSw2REFBQTNDLENBQUEsQ0FBQXlGLElBQUEsYUFBQXhGLENBQUEsUUFBQUQsQ0FBQSxHQUFBRyxNQUFBLENBQUFGLENBQUEsR0FBQUMsQ0FBQSxnQkFBQUcsQ0FBQSxJQUFBTCxDQUFBLEVBQUFFLENBQUEsQ0FBQXVFLElBQUEsQ0FBQXBFLENBQUEsVUFBQUgsQ0FBQSxDQUFBd0YsT0FBQSxhQUFBekIsS0FBQSxXQUFBL0QsQ0FBQSxDQUFBNEUsTUFBQSxTQUFBN0UsQ0FBQSxHQUFBQyxDQUFBLENBQUF5RixHQUFBLFFBQUExRixDQUFBLElBQUFELENBQUEsU0FBQWlFLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsV0FBQUEsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsUUFBQWpFLENBQUEsQ0FBQTBDLE1BQUEsR0FBQUEsTUFBQSxFQUFBakIsT0FBQSxDQUFBckIsU0FBQSxLQUFBNkUsV0FBQSxFQUFBeEQsT0FBQSxFQUFBbUQsS0FBQSxXQUFBQSxNQUFBNUUsQ0FBQSxhQUFBNEYsSUFBQSxXQUFBM0IsSUFBQSxXQUFBTixJQUFBLFFBQUFDLEtBQUEsR0FBQTNELENBQUEsT0FBQXNELElBQUEsWUFBQUUsUUFBQSxjQUFBRCxNQUFBLGdCQUFBM0IsR0FBQSxHQUFBNUIsQ0FBQSxPQUFBdUUsVUFBQSxDQUFBM0IsT0FBQSxDQUFBNkIsYUFBQSxJQUFBMUUsQ0FBQSxXQUFBRSxDQUFBLGtCQUFBQSxDQUFBLENBQUEyRixNQUFBLE9BQUF4RixDQUFBLENBQUF5QixJQUFBLE9BQUE1QixDQUFBLE1BQUEyRSxLQUFBLEVBQUEzRSxDQUFBLENBQUE0RixLQUFBLGNBQUE1RixDQUFBLElBQUFELENBQUEsTUFBQThGLElBQUEsV0FBQUEsS0FBQSxTQUFBeEMsSUFBQSxXQUFBdEQsQ0FBQSxRQUFBdUUsVUFBQSxJQUFBRyxVQUFBLGtCQUFBMUUsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxjQUFBbUUsSUFBQSxLQUFBbkMsaUJBQUEsV0FBQUEsa0JBQUE3RCxDQUFBLGFBQUF1RCxJQUFBLFFBQUF2RCxDQUFBLE1BQUFFLENBQUEsa0JBQUErRixPQUFBNUYsQ0FBQSxFQUFBRSxDQUFBLFdBQUFLLENBQUEsQ0FBQWdCLElBQUEsWUFBQWhCLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQUUsQ0FBQSxDQUFBK0QsSUFBQSxHQUFBNUQsQ0FBQSxFQUFBRSxDQUFBLEtBQUFMLENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsS0FBQU0sQ0FBQSxhQUFBQSxDQUFBLFFBQUFpRSxVQUFBLENBQUFNLE1BQUEsTUFBQXZFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRyxDQUFBLFFBQUE4RCxVQUFBLENBQUFqRSxDQUFBLEdBQUFLLENBQUEsR0FBQUYsQ0FBQSxDQUFBaUUsVUFBQSxpQkFBQWpFLENBQUEsQ0FBQTBELE1BQUEsU0FBQTZCLE1BQUEsYUFBQXZGLENBQUEsQ0FBQTBELE1BQUEsU0FBQXdCLElBQUEsUUFBQTlFLENBQUEsR0FBQVQsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxlQUFBTSxDQUFBLEdBQUFYLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEscUJBQUFJLENBQUEsSUFBQUUsQ0FBQSxhQUFBNEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxnQkFBQXVCLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsY0FBQXhELENBQUEsYUFBQThFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEscUJBQUFyRCxDQUFBLFFBQUFzQyxLQUFBLHFEQUFBc0MsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxZQUFBUixNQUFBLFdBQUFBLE9BQUE3RCxDQUFBLEVBQUFELENBQUEsYUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE1RSxDQUFBLFNBQUFBLENBQUEsUUFBQUssQ0FBQSxRQUFBaUUsVUFBQSxDQUFBdEUsQ0FBQSxPQUFBSyxDQUFBLENBQUE2RCxNQUFBLFNBQUF3QixJQUFBLElBQUF2RixDQUFBLENBQUF5QixJQUFBLENBQUF2QixDQUFBLHdCQUFBcUYsSUFBQSxHQUFBckYsQ0FBQSxDQUFBK0QsVUFBQSxRQUFBNUQsQ0FBQSxHQUFBSCxDQUFBLGFBQUFHLENBQUEsaUJBQUFULENBQUEsbUJBQUFBLENBQUEsS0FBQVMsQ0FBQSxDQUFBMEQsTUFBQSxJQUFBcEUsQ0FBQSxJQUFBQSxDQUFBLElBQUFVLENBQUEsQ0FBQTRELFVBQUEsS0FBQTVELENBQUEsY0FBQUUsQ0FBQSxHQUFBRixDQUFBLEdBQUFBLENBQUEsQ0FBQWlFLFVBQUEsY0FBQS9ELENBQUEsQ0FBQWdCLElBQUEsR0FBQTNCLENBQUEsRUFBQVcsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBVSxDQUFBLFNBQUE4QyxNQUFBLGdCQUFBUyxJQUFBLEdBQUF2RCxDQUFBLENBQUE0RCxVQUFBLEVBQUFuQyxDQUFBLFNBQUErRCxRQUFBLENBQUF0RixDQUFBLE1BQUFzRixRQUFBLFdBQUFBLFNBQUFqRyxDQUFBLEVBQUFELENBQUEsb0JBQUFDLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEscUJBQUE1QixDQUFBLENBQUEyQixJQUFBLG1CQUFBM0IsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBcUMsSUFBQSxHQUFBaEUsQ0FBQSxDQUFBNEIsR0FBQSxnQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsU0FBQW9FLElBQUEsUUFBQW5FLEdBQUEsR0FBQTVCLENBQUEsQ0FBQTRCLEdBQUEsT0FBQTJCLE1BQUEsa0JBQUFTLElBQUEseUJBQUFoRSxDQUFBLENBQUEyQixJQUFBLElBQUE1QixDQUFBLFVBQUFpRSxJQUFBLEdBQUFqRSxDQUFBLEdBQUFtQyxDQUFBLEtBQUFnRSxNQUFBLFdBQUFBLE9BQUFsRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBb0UsVUFBQSxLQUFBckUsQ0FBQSxjQUFBaUcsUUFBQSxDQUFBaEcsQ0FBQSxDQUFBeUUsVUFBQSxFQUFBekUsQ0FBQSxDQUFBcUUsUUFBQSxHQUFBRyxhQUFBLENBQUF4RSxDQUFBLEdBQUFpQyxDQUFBLHlCQUFBaUUsT0FBQW5HLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFrRSxNQUFBLEtBQUFuRSxDQUFBLFFBQUFJLENBQUEsR0FBQUgsQ0FBQSxDQUFBeUUsVUFBQSxrQkFBQXRFLENBQUEsQ0FBQXVCLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBNkMsYUFBQSxDQUFBeEUsQ0FBQSxZQUFBSyxDQUFBLFlBQUErQyxLQUFBLDhCQUFBK0MsYUFBQSxXQUFBQSxjQUFBckcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZ0JBQUFvRCxRQUFBLEtBQUE1QyxRQUFBLEVBQUE2QixNQUFBLENBQUExQyxDQUFBLEdBQUFnRSxVQUFBLEVBQUE5RCxDQUFBLEVBQUFnRSxPQUFBLEVBQUE3RCxDQUFBLG9CQUFBbUQsTUFBQSxVQUFBM0IsR0FBQSxHQUFBNUIsQ0FBQSxHQUFBa0MsQ0FBQSxPQUFBbkMsQ0FBQTtBQUFBLFNBQUFzRyxtQkFBQWpHLENBQUEsRUFBQUosQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUssQ0FBQSxFQUFBSyxDQUFBLEVBQUFFLENBQUEsY0FBQUosQ0FBQSxHQUFBTCxDQUFBLENBQUFPLENBQUEsRUFBQUUsQ0FBQSxHQUFBRSxDQUFBLEdBQUFOLENBQUEsQ0FBQUQsS0FBQSxXQUFBSixDQUFBLGdCQUFBTCxDQUFBLENBQUFLLENBQUEsS0FBQUssQ0FBQSxDQUFBNkMsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBZSxDQUFBLElBQUF3RSxPQUFBLENBQUF0QyxPQUFBLENBQUFsQyxDQUFBLEVBQUFvQyxJQUFBLENBQUFsRCxDQUFBLEVBQUFLLENBQUE7QUFBQSxTQUFBZ0csa0JBQUFsRyxDQUFBLDZCQUFBSixDQUFBLFNBQUFELENBQUEsR0FBQXdHLFNBQUEsYUFBQWhCLE9BQUEsV0FBQXRGLENBQUEsRUFBQUssQ0FBQSxRQUFBSyxDQUFBLEdBQUFQLENBQUEsQ0FBQW9HLEtBQUEsQ0FBQXhHLENBQUEsRUFBQUQsQ0FBQSxZQUFBMEcsTUFBQXJHLENBQUEsSUFBQWlHLGtCQUFBLENBQUExRixDQUFBLEVBQUFWLENBQUEsRUFBQUssQ0FBQSxFQUFBbUcsS0FBQSxFQUFBQyxNQUFBLFVBQUF0RyxDQUFBLGNBQUFzRyxPQUFBdEcsQ0FBQSxJQUFBaUcsa0JBQUEsQ0FBQTFGLENBQUEsRUFBQVYsQ0FBQSxFQUFBSyxDQUFBLEVBQUFtRyxLQUFBLEVBQUFDLE1BQUEsV0FBQXRHLENBQUEsS0FBQXFHLEtBQUE7QUFBQSxTQURlRSxhQUFhQSxDQUFBO0VBQUEsT0FBQUMsY0FBQSxDQUFBSixLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUFBLFNBQUFLLGVBQUE7RUFBQUEsY0FBQSxHQUFBTixpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FBNUIsU0FBQTJCLFFBQUE7SUFBQSxJQUFBQyxZQUFBLEVBQUFDLFVBQUE7SUFBQSxPQUFBakgsbUJBQUEsR0FBQXVCLElBQUEsVUFBQTJGLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBdEIsSUFBQSxHQUFBc0IsUUFBQSxDQUFBakQsSUFBQTtRQUFBO1VBQUFpRCxRQUFBLENBQUFqRCxJQUFBO1VBQUEsT0FDK0JrRCxFQUFFLENBQUNILFVBQVUsQ0FBQ0ksWUFBWSxDQUFDLENBQUM7UUFBQTtVQUFqREwsWUFBWSxHQUFBRyxRQUFBLENBQUF2RCxJQUFBO1VBQUEsTUFFZG9ELFlBQVksSUFBSUEsWUFBWSxDQUFDTSxTQUFTLEtBQUssSUFBSTtZQUFBSCxRQUFBLENBQUFqRCxJQUFBO1lBQUE7VUFBQTtVQUFBLE1BQzNDOEMsWUFBWSxDQUFDTSxTQUFTLEtBQUssU0FBUztZQUFBSCxRQUFBLENBQUFqRCxJQUFBO1lBQUE7VUFBQTtVQUFBaUQsUUFBQSxDQUFBakQsSUFBQTtVQUFBLE9BRWpCa0QsRUFBRSxDQUFDSCxVQUFVLENBQUN4RixNQUFNLENBQUMsQ0FBQztRQUFBO1VBQXpDd0YsVUFBVSxHQUFBRSxRQUFBLENBQUF2RCxJQUFBO1VBQ1YyRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztVQUFDTCxRQUFBLENBQUFqRCxJQUFBO1VBQUE7UUFBQTtVQUFBaUQsUUFBQSxDQUFBakQsSUFBQTtVQUFBLE9BR2pCa0QsRUFBRSxDQUFDSCxVQUFVLENBQUN4RixNQUFNLENBQUMsQ0FBQztRQUFBO1VBQXpDd0YsVUFBVSxHQUFBRSxRQUFBLENBQUF2RCxJQUFBO1VBQ1ZxRCxVQUFVLENBQUNRLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFVBQUN4SCxDQUFDLEVBQUs7WUFDbkRzSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ3ZILENBQUMsQ0FBQ3lILE1BQU0sRUFBRXpILENBQUMsQ0FBQzBILEtBQUssQ0FBQztVQUNsQyxDQUFDLENBQUM7VUFBQ1IsUUFBQSxDQUFBakQsSUFBQTtVQUFBLE9BQ0crQyxVQUFVLENBQUNXLEtBQUs7UUFBQTtVQUFBVCxRQUFBLENBQUFqRCxJQUFBO1VBQUE7UUFBQTtVQUcxQnFELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVCQUF1QixDQUFDO1VBQUMsTUFDL0IsSUFBSWpFLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztRQUFBO1VBQUEsT0FBQTRELFFBQUEsQ0FBQXBELE1BQUEsV0FHckNrRCxVQUFVO1FBQUE7UUFBQTtVQUFBLE9BQUFFLFFBQUEsQ0FBQW5CLElBQUE7TUFBQTtJQUFBLEdBQUFlLE9BQUE7RUFBQSxDQUNwQjtFQUFBLE9BQUFELGNBQUEsQ0FBQUosS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFBQSxTQUVjb0IsU0FBU0EsQ0FBQUMsRUFBQTtFQUFBLE9BQUFDLFVBQUEsQ0FBQXJCLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBQUEsU0FBQXNCLFdBQUE7RUFBQUEsVUFBQSxHQUFBdkIsaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBQXhCLFNBQUE0QyxTQUF5QkMsSUFBSTtJQUFBLElBQUFoQixVQUFBLEVBQUFpQixNQUFBO0lBQUEsT0FBQWxJLG1CQUFBLEdBQUF1QixJQUFBLFVBQUE0RyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQXZDLElBQUEsR0FBQXVDLFNBQUEsQ0FBQWxFLElBQUE7UUFBQTtVQUFBa0UsU0FBQSxDQUFBdkMsSUFBQTtVQUFBdUMsU0FBQSxDQUFBbEUsSUFBQTtVQUFBLE9BRUkyQyxhQUFhLENBQUMsQ0FBQztRQUFBO1VBQWxDSSxVQUFVLEdBQUFtQixTQUFBLENBQUF4RSxJQUFBO1VBQUF3RSxTQUFBLENBQUFsRSxJQUFBO1VBQUEsT0FDSytDLFVBQVUsQ0FBQ1ksU0FBUyxDQUFDSSxJQUFJLENBQUM7UUFBQTtVQUF6Q0MsTUFBTSxHQUFBRSxTQUFBLENBQUF4RSxJQUFBO1VBQUF3RSxTQUFBLENBQUFsRSxJQUFBO1VBQUEsT0FDTitDLFVBQVUsQ0FBQ29CLE9BQU8sQ0FBQyxDQUFDO1FBQUE7VUFBQSxPQUFBRCxTQUFBLENBQUFyRSxNQUFBLFdBQ25CbUUsTUFBTTtRQUFBO1VBQUFFLFNBQUEsQ0FBQXZDLElBQUE7VUFBQXVDLFNBQUEsQ0FBQUUsRUFBQSxHQUFBRixTQUFBO1VBRWJiLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixFQUFBWSxTQUFBLENBQUFFLEVBQU8sQ0FBQztVQUFDLE9BQUFGLFNBQUEsQ0FBQXJFLE1BQUEsV0FDM0MsRUFBRTtRQUFBO1FBQUE7VUFBQSxPQUFBcUUsU0FBQSxDQUFBcEMsSUFBQTtNQUFBO0lBQUEsR0FBQWdDLFFBQUE7RUFBQSxDQUVoQjtFQUFBLE9BQUFELFVBQUEsQ0FBQXJCLEtBQUEsT0FBQUQsU0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NqQ0QscUpBQUF6RyxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUyxLQUFBLEVBQUFQLENBQUEsRUFBQWlCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFwQixDQUFBLENBQUFELENBQUEsV0FBQWtCLE1BQUEsbUJBQUFqQixDQUFBLElBQUFpQixNQUFBLFlBQUFBLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQW9CLEtBQUFyQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFLLENBQUEsR0FBQVYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFNBQUEsWUFBQW1CLFNBQUEsR0FBQXZCLENBQUEsR0FBQXVCLFNBQUEsRUFBQVgsQ0FBQSxHQUFBVCxNQUFBLENBQUFxQixNQUFBLENBQUFkLENBQUEsQ0FBQU4sU0FBQSxHQUFBVSxDQUFBLE9BQUFXLE9BQUEsQ0FBQXBCLENBQUEsZ0JBQUFFLENBQUEsQ0FBQUssQ0FBQSxlQUFBSCxLQUFBLEVBQUFpQixnQkFBQSxDQUFBekIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFZLENBQUEsTUFBQUYsQ0FBQSxhQUFBZSxTQUFBMUIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsbUJBQUEwQixJQUFBLFlBQUFDLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTZCLElBQUEsQ0FBQTlCLENBQUEsRUFBQUUsQ0FBQSxjQUFBRCxDQUFBLGFBQUEyQixJQUFBLFdBQUFDLEdBQUEsRUFBQTVCLENBQUEsUUFBQUQsQ0FBQSxDQUFBc0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFTLENBQUEscUJBQUFDLENBQUEscUJBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFaLFVBQUEsY0FBQWEsa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsQ0FBQSxPQUFBcEIsTUFBQSxDQUFBb0IsQ0FBQSxFQUFBMUIsQ0FBQSxxQ0FBQTJCLENBQUEsR0FBQXBDLE1BQUEsQ0FBQXFDLGNBQUEsRUFBQUMsQ0FBQSxHQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUEsQ0FBQSxDQUFBRyxNQUFBLFFBQUFELENBQUEsSUFBQUEsQ0FBQSxLQUFBdkMsQ0FBQSxJQUFBRyxDQUFBLENBQUF5QixJQUFBLENBQUFXLENBQUEsRUFBQTdCLENBQUEsTUFBQTBCLENBQUEsR0FBQUcsQ0FBQSxPQUFBRSxDQUFBLEdBQUFOLDBCQUFBLENBQUFqQyxTQUFBLEdBQUFtQixTQUFBLENBQUFuQixTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWMsQ0FBQSxZQUFBTSxzQkFBQTNDLENBQUEsZ0NBQUE0QyxPQUFBLFdBQUE3QyxDQUFBLElBQUFrQixNQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsWUFBQUMsQ0FBQSxnQkFBQTZDLE9BQUEsQ0FBQTlDLENBQUEsRUFBQUMsQ0FBQSxzQkFBQThDLGNBQUE5QyxDQUFBLEVBQUFELENBQUEsYUFBQWdELE9BQUE5QyxDQUFBLEVBQUFLLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQWEsUUFBQSxDQUFBMUIsQ0FBQSxDQUFBQyxDQUFBLEdBQUFELENBQUEsRUFBQU0sQ0FBQSxtQkFBQU8sQ0FBQSxDQUFBYyxJQUFBLFFBQUFaLENBQUEsR0FBQUYsQ0FBQSxDQUFBZSxHQUFBLEVBQUFFLENBQUEsR0FBQWYsQ0FBQSxDQUFBUCxLQUFBLFNBQUFzQixDQUFBLGdCQUFBa0IsT0FBQSxDQUFBbEIsQ0FBQSxLQUFBMUIsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBQyxDQUFBLGVBQUEvQixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLENBQUFvQixPQUFBLEVBQUFDLElBQUEsV0FBQW5ELENBQUEsSUFBQStDLE1BQUEsU0FBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBWCxDQUFBLElBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxRQUFBWixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLEVBQUFxQixJQUFBLFdBQUFuRCxDQUFBLElBQUFlLENBQUEsQ0FBQVAsS0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsQ0FBQU0sQ0FBQSxnQkFBQWYsQ0FBQSxXQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFlLEdBQUEsU0FBQTNCLENBQUEsRUFBQUssQ0FBQSxvQkFBQUUsS0FBQSxXQUFBQSxNQUFBUixDQUFBLEVBQUFJLENBQUEsYUFBQWdELDJCQUFBLGVBQUFyRCxDQUFBLFdBQUFBLENBQUEsRUFBQUUsQ0FBQSxJQUFBOEMsTUFBQSxDQUFBL0MsQ0FBQSxFQUFBSSxDQUFBLEVBQUFMLENBQUEsRUFBQUUsQ0FBQSxnQkFBQUEsQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUEsQ0FBQWtELElBQUEsQ0FBQUMsMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUEzQixpQkFBQTFCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFFLENBQUEsR0FBQXdCLENBQUEsbUJBQUFyQixDQUFBLEVBQUFFLENBQUEsUUFBQUwsQ0FBQSxLQUFBMEIsQ0FBQSxRQUFBcUIsS0FBQSxzQ0FBQS9DLENBQUEsS0FBQTJCLENBQUEsb0JBQUF4QixDQUFBLFFBQUFFLENBQUEsV0FBQUgsS0FBQSxFQUFBUixDQUFBLEVBQUFzRCxJQUFBLGVBQUFsRCxDQUFBLENBQUFtRCxNQUFBLEdBQUE5QyxDQUFBLEVBQUFMLENBQUEsQ0FBQXdCLEdBQUEsR0FBQWpCLENBQUEsVUFBQUUsQ0FBQSxHQUFBVCxDQUFBLENBQUFvRCxRQUFBLE1BQUEzQyxDQUFBLFFBQUFFLENBQUEsR0FBQTBDLG1CQUFBLENBQUE1QyxDQUFBLEVBQUFULENBQUEsT0FBQVcsQ0FBQSxRQUFBQSxDQUFBLEtBQUFtQixDQUFBLG1CQUFBbkIsQ0FBQSxxQkFBQVgsQ0FBQSxDQUFBbUQsTUFBQSxFQUFBbkQsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBdUQsS0FBQSxHQUFBdkQsQ0FBQSxDQUFBd0IsR0FBQSxzQkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsUUFBQWpELENBQUEsS0FBQXdCLENBQUEsUUFBQXhCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQXdCLEdBQUEsRUFBQXhCLENBQUEsQ0FBQXdELGlCQUFBLENBQUF4RCxDQUFBLENBQUF3QixHQUFBLHVCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxJQUFBbkQsQ0FBQSxDQUFBeUQsTUFBQSxXQUFBekQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBdEIsQ0FBQSxHQUFBMEIsQ0FBQSxNQUFBSyxDQUFBLEdBQUFYLFFBQUEsQ0FBQTNCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLG9CQUFBaUMsQ0FBQSxDQUFBVixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQWtELElBQUEsR0FBQXJCLENBQUEsR0FBQUYsQ0FBQSxFQUFBTSxDQUFBLENBQUFULEdBQUEsS0FBQU0sQ0FBQSxxQkFBQTFCLEtBQUEsRUFBQTZCLENBQUEsQ0FBQVQsR0FBQSxFQUFBMEIsSUFBQSxFQUFBbEQsQ0FBQSxDQUFBa0QsSUFBQSxrQkFBQWpCLENBQUEsQ0FBQVYsSUFBQSxLQUFBckIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBbUQsTUFBQSxZQUFBbkQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBUyxDQUFBLENBQUFULEdBQUEsbUJBQUE2QixvQkFBQTFELENBQUEsRUFBQUUsQ0FBQSxRQUFBRyxDQUFBLEdBQUFILENBQUEsQ0FBQXNELE1BQUEsRUFBQWpELENBQUEsR0FBQVAsQ0FBQSxDQUFBYSxRQUFBLENBQUFSLENBQUEsT0FBQUUsQ0FBQSxLQUFBTixDQUFBLFNBQUFDLENBQUEsQ0FBQXVELFFBQUEscUJBQUFwRCxDQUFBLElBQUFMLENBQUEsQ0FBQWEsUUFBQSxlQUFBWCxDQUFBLENBQUFzRCxNQUFBLGFBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEVBQUF5RCxtQkFBQSxDQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsQ0FBQXNELE1BQUEsa0JBQUFuRCxDQUFBLEtBQUFILENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsdUNBQUExRCxDQUFBLGlCQUFBOEIsQ0FBQSxNQUFBekIsQ0FBQSxHQUFBaUIsUUFBQSxDQUFBcEIsQ0FBQSxFQUFBUCxDQUFBLENBQUFhLFFBQUEsRUFBQVgsQ0FBQSxDQUFBMkIsR0FBQSxtQkFBQW5CLENBQUEsQ0FBQWtCLElBQUEsU0FBQTFCLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQW5CLENBQUEsQ0FBQW1CLEdBQUEsRUFBQTNCLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsTUFBQXZCLENBQUEsR0FBQUYsQ0FBQSxDQUFBbUIsR0FBQSxTQUFBakIsQ0FBQSxHQUFBQSxDQUFBLENBQUEyQyxJQUFBLElBQUFyRCxDQUFBLENBQUFGLENBQUEsQ0FBQWdFLFVBQUEsSUFBQXBELENBQUEsQ0FBQUgsS0FBQSxFQUFBUCxDQUFBLENBQUErRCxJQUFBLEdBQUFqRSxDQUFBLENBQUFrRSxPQUFBLGVBQUFoRSxDQUFBLENBQUFzRCxNQUFBLEtBQUF0RCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEdBQUFDLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsSUFBQXZCLENBQUEsSUFBQVYsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSxzQ0FBQTdELENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsY0FBQWdDLGFBQUFsRSxDQUFBLFFBQUFELENBQUEsS0FBQW9FLE1BQUEsRUFBQW5FLENBQUEsWUFBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFxRSxRQUFBLEdBQUFwRSxDQUFBLFdBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0UsVUFBQSxHQUFBckUsQ0FBQSxLQUFBRCxDQUFBLENBQUF1RSxRQUFBLEdBQUF0RSxDQUFBLFdBQUF1RSxVQUFBLENBQUFDLElBQUEsQ0FBQXpFLENBQUEsY0FBQTBFLGNBQUF6RSxDQUFBLFFBQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBMEUsVUFBQSxRQUFBM0UsQ0FBQSxDQUFBNEIsSUFBQSxvQkFBQTVCLENBQUEsQ0FBQTZCLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTBFLFVBQUEsR0FBQTNFLENBQUEsYUFBQXlCLFFBQUF4QixDQUFBLFNBQUF1RSxVQUFBLE1BQUFKLE1BQUEsYUFBQW5FLENBQUEsQ0FBQTRDLE9BQUEsQ0FBQXNCLFlBQUEsY0FBQVMsS0FBQSxpQkFBQWxDLE9BQUExQyxDQUFBLFFBQUFBLENBQUEsV0FBQUEsQ0FBQSxRQUFBRSxDQUFBLEdBQUFGLENBQUEsQ0FBQVksQ0FBQSxPQUFBVixDQUFBLFNBQUFBLENBQUEsQ0FBQTRCLElBQUEsQ0FBQTlCLENBQUEsNEJBQUFBLENBQUEsQ0FBQWlFLElBQUEsU0FBQWpFLENBQUEsT0FBQTZFLEtBQUEsQ0FBQTdFLENBQUEsQ0FBQThFLE1BQUEsU0FBQXZFLENBQUEsT0FBQUcsQ0FBQSxZQUFBdUQsS0FBQSxhQUFBMUQsQ0FBQSxHQUFBUCxDQUFBLENBQUE4RSxNQUFBLE9BQUF6RSxDQUFBLENBQUF5QixJQUFBLENBQUE5QixDQUFBLEVBQUFPLENBQUEsVUFBQTBELElBQUEsQ0FBQXhELEtBQUEsR0FBQVQsQ0FBQSxDQUFBTyxDQUFBLEdBQUEwRCxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxTQUFBQSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFlBQUF2RCxDQUFBLENBQUF1RCxJQUFBLEdBQUF2RCxDQUFBLGdCQUFBcUQsU0FBQSxDQUFBZCxPQUFBLENBQUFqRCxDQUFBLGtDQUFBb0MsaUJBQUEsQ0FBQWhDLFNBQUEsR0FBQWlDLDBCQUFBLEVBQUE5QixDQUFBLENBQUFvQyxDQUFBLG1CQUFBbEMsS0FBQSxFQUFBNEIsMEJBQUEsRUFBQWpCLFlBQUEsU0FBQWIsQ0FBQSxDQUFBOEIsMEJBQUEsbUJBQUE1QixLQUFBLEVBQUEyQixpQkFBQSxFQUFBaEIsWUFBQSxTQUFBZ0IsaUJBQUEsQ0FBQTJDLFdBQUEsR0FBQTdELE1BQUEsQ0FBQW1CLDBCQUFBLEVBQUFyQixDQUFBLHdCQUFBaEIsQ0FBQSxDQUFBZ0YsbUJBQUEsYUFBQS9FLENBQUEsUUFBQUQsQ0FBQSx3QkFBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFnRixXQUFBLFdBQUFqRixDQUFBLEtBQUFBLENBQUEsS0FBQW9DLGlCQUFBLDZCQUFBcEMsQ0FBQSxDQUFBK0UsV0FBQSxJQUFBL0UsQ0FBQSxDQUFBa0YsSUFBQSxPQUFBbEYsQ0FBQSxDQUFBbUYsSUFBQSxhQUFBbEYsQ0FBQSxXQUFBRSxNQUFBLENBQUFpRixjQUFBLEdBQUFqRixNQUFBLENBQUFpRixjQUFBLENBQUFuRixDQUFBLEVBQUFvQywwQkFBQSxLQUFBcEMsQ0FBQSxDQUFBb0YsU0FBQSxHQUFBaEQsMEJBQUEsRUFBQW5CLE1BQUEsQ0FBQWpCLENBQUEsRUFBQWUsQ0FBQSx5QkFBQWYsQ0FBQSxDQUFBRyxTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQW1CLENBQUEsR0FBQTFDLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0YsS0FBQSxhQUFBckYsQ0FBQSxhQUFBa0QsT0FBQSxFQUFBbEQsQ0FBQSxPQUFBMkMscUJBQUEsQ0FBQUcsYUFBQSxDQUFBM0MsU0FBQSxHQUFBYyxNQUFBLENBQUE2QixhQUFBLENBQUEzQyxTQUFBLEVBQUFVLENBQUEsaUNBQUFkLENBQUEsQ0FBQStDLGFBQUEsR0FBQUEsYUFBQSxFQUFBL0MsQ0FBQSxDQUFBdUYsS0FBQSxhQUFBdEYsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGVBQUFBLENBQUEsS0FBQUEsQ0FBQSxHQUFBOEUsT0FBQSxPQUFBNUUsQ0FBQSxPQUFBbUMsYUFBQSxDQUFBekIsSUFBQSxDQUFBckIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxHQUFBRyxDQUFBLFVBQUFWLENBQUEsQ0FBQWdGLG1CQUFBLENBQUE5RSxDQUFBLElBQUFVLENBQUEsR0FBQUEsQ0FBQSxDQUFBcUQsSUFBQSxHQUFBYixJQUFBLFdBQUFuRCxDQUFBLFdBQUFBLENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQVEsS0FBQSxHQUFBRyxDQUFBLENBQUFxRCxJQUFBLFdBQUFyQixxQkFBQSxDQUFBRCxDQUFBLEdBQUF6QixNQUFBLENBQUF5QixDQUFBLEVBQUEzQixDQUFBLGdCQUFBRSxNQUFBLENBQUF5QixDQUFBLEVBQUEvQixDQUFBLGlDQUFBTSxNQUFBLENBQUF5QixDQUFBLDZEQUFBM0MsQ0FBQSxDQUFBeUYsSUFBQSxhQUFBeEYsQ0FBQSxRQUFBRCxDQUFBLEdBQUFHLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBQyxDQUFBLGdCQUFBRyxDQUFBLElBQUFMLENBQUEsRUFBQUUsQ0FBQSxDQUFBdUUsSUFBQSxDQUFBcEUsQ0FBQSxVQUFBSCxDQUFBLENBQUF3RixPQUFBLGFBQUF6QixLQUFBLFdBQUEvRCxDQUFBLENBQUE0RSxNQUFBLFNBQUE3RSxDQUFBLEdBQUFDLENBQUEsQ0FBQXlGLEdBQUEsUUFBQTFGLENBQUEsSUFBQUQsQ0FBQSxTQUFBaUUsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxXQUFBQSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxRQUFBakUsQ0FBQSxDQUFBMEMsTUFBQSxHQUFBQSxNQUFBLEVBQUFqQixPQUFBLENBQUFyQixTQUFBLEtBQUE2RSxXQUFBLEVBQUF4RCxPQUFBLEVBQUFtRCxLQUFBLFdBQUFBLE1BQUE1RSxDQUFBLGFBQUE0RixJQUFBLFdBQUEzQixJQUFBLFdBQUFOLElBQUEsUUFBQUMsS0FBQSxHQUFBM0QsQ0FBQSxPQUFBc0QsSUFBQSxZQUFBRSxRQUFBLGNBQUFELE1BQUEsZ0JBQUEzQixHQUFBLEdBQUE1QixDQUFBLE9BQUF1RSxVQUFBLENBQUEzQixPQUFBLENBQUE2QixhQUFBLElBQUExRSxDQUFBLFdBQUFFLENBQUEsa0JBQUFBLENBQUEsQ0FBQTJGLE1BQUEsT0FBQXhGLENBQUEsQ0FBQXlCLElBQUEsT0FBQTVCLENBQUEsTUFBQTJFLEtBQUEsRUFBQTNFLENBQUEsQ0FBQTRGLEtBQUEsY0FBQTVGLENBQUEsSUFBQUQsQ0FBQSxNQUFBOEYsSUFBQSxXQUFBQSxLQUFBLFNBQUF4QyxJQUFBLFdBQUF0RCxDQUFBLFFBQUF1RSxVQUFBLElBQUFHLFVBQUEsa0JBQUExRSxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLGNBQUFtRSxJQUFBLEtBQUFuQyxpQkFBQSxXQUFBQSxrQkFBQTdELENBQUEsYUFBQXVELElBQUEsUUFBQXZELENBQUEsTUFBQUUsQ0FBQSxrQkFBQStGLE9BQUE1RixDQUFBLEVBQUFFLENBQUEsV0FBQUssQ0FBQSxDQUFBZ0IsSUFBQSxZQUFBaEIsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBRSxDQUFBLENBQUErRCxJQUFBLEdBQUE1RCxDQUFBLEVBQUFFLENBQUEsS0FBQUwsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxLQUFBTSxDQUFBLGFBQUFBLENBQUEsUUFBQWlFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBdkUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFHLENBQUEsUUFBQThELFVBQUEsQ0FBQWpFLENBQUEsR0FBQUssQ0FBQSxHQUFBRixDQUFBLENBQUFpRSxVQUFBLGlCQUFBakUsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBNkIsTUFBQSxhQUFBdkYsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBd0IsSUFBQSxRQUFBOUUsQ0FBQSxHQUFBVCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLGVBQUFNLENBQUEsR0FBQVgsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxxQkFBQUksQ0FBQSxJQUFBRSxDQUFBLGFBQUE0RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLGdCQUFBdUIsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxjQUFBeEQsQ0FBQSxhQUFBOEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxxQkFBQXJELENBQUEsUUFBQXNDLEtBQUEscURBQUFzQyxJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLFlBQUFSLE1BQUEsV0FBQUEsT0FBQTdELENBQUEsRUFBQUQsQ0FBQSxhQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUFNLE1BQUEsTUFBQTVFLENBQUEsU0FBQUEsQ0FBQSxRQUFBSyxDQUFBLFFBQUFpRSxVQUFBLENBQUF0RSxDQUFBLE9BQUFLLENBQUEsQ0FBQTZELE1BQUEsU0FBQXdCLElBQUEsSUFBQXZGLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXZCLENBQUEsd0JBQUFxRixJQUFBLEdBQUFyRixDQUFBLENBQUErRCxVQUFBLFFBQUE1RCxDQUFBLEdBQUFILENBQUEsYUFBQUcsQ0FBQSxpQkFBQVQsQ0FBQSxtQkFBQUEsQ0FBQSxLQUFBUyxDQUFBLENBQUEwRCxNQUFBLElBQUFwRSxDQUFBLElBQUFBLENBQUEsSUFBQVUsQ0FBQSxDQUFBNEQsVUFBQSxLQUFBNUQsQ0FBQSxjQUFBRSxDQUFBLEdBQUFGLENBQUEsR0FBQUEsQ0FBQSxDQUFBaUUsVUFBQSxjQUFBL0QsQ0FBQSxDQUFBZ0IsSUFBQSxHQUFBM0IsQ0FBQSxFQUFBVyxDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFVLENBQUEsU0FBQThDLE1BQUEsZ0JBQUFTLElBQUEsR0FBQXZELENBQUEsQ0FBQTRELFVBQUEsRUFBQW5DLENBQUEsU0FBQStELFFBQUEsQ0FBQXRGLENBQUEsTUFBQXNGLFFBQUEsV0FBQUEsU0FBQWpHLENBQUEsRUFBQUQsQ0FBQSxvQkFBQUMsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxxQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsbUJBQUEzQixDQUFBLENBQUEyQixJQUFBLFFBQUFxQyxJQUFBLEdBQUFoRSxDQUFBLENBQUE0QixHQUFBLGdCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxTQUFBb0UsSUFBQSxRQUFBbkUsR0FBQSxHQUFBNUIsQ0FBQSxDQUFBNEIsR0FBQSxPQUFBMkIsTUFBQSxrQkFBQVMsSUFBQSx5QkFBQWhFLENBQUEsQ0FBQTJCLElBQUEsSUFBQTVCLENBQUEsVUFBQWlFLElBQUEsR0FBQWpFLENBQUEsR0FBQW1DLENBQUEsS0FBQWdFLE1BQUEsV0FBQUEsT0FBQWxHLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFvRSxVQUFBLEtBQUFyRSxDQUFBLGNBQUFpRyxRQUFBLENBQUFoRyxDQUFBLENBQUF5RSxVQUFBLEVBQUF6RSxDQUFBLENBQUFxRSxRQUFBLEdBQUFHLGFBQUEsQ0FBQXhFLENBQUEsR0FBQWlDLENBQUEseUJBQUFpRSxPQUFBbkcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQWtFLE1BQUEsS0FBQW5FLENBQUEsUUFBQUksQ0FBQSxHQUFBSCxDQUFBLENBQUF5RSxVQUFBLGtCQUFBdEUsQ0FBQSxDQUFBdUIsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUF3QixHQUFBLEVBQUE2QyxhQUFBLENBQUF4RSxDQUFBLFlBQUFLLENBQUEsWUFBQStDLEtBQUEsOEJBQUErQyxhQUFBLFdBQUFBLGNBQUFyRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxnQkFBQW9ELFFBQUEsS0FBQTVDLFFBQUEsRUFBQTZCLE1BQUEsQ0FBQTFDLENBQUEsR0FBQWdFLFVBQUEsRUFBQTlELENBQUEsRUFBQWdFLE9BQUEsRUFBQTdELENBQUEsb0JBQUFtRCxNQUFBLFVBQUEzQixHQUFBLEdBQUE1QixDQUFBLEdBQUFrQyxDQUFBLE9BQUFuQyxDQUFBO0FBQUEsU0FBQXNHLG1CQUFBakcsQ0FBQSxFQUFBSixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBSyxDQUFBLEVBQUFLLENBQUEsRUFBQUUsQ0FBQSxjQUFBSixDQUFBLEdBQUFMLENBQUEsQ0FBQU8sQ0FBQSxFQUFBRSxDQUFBLEdBQUFFLENBQUEsR0FBQU4sQ0FBQSxDQUFBRCxLQUFBLFdBQUFKLENBQUEsZ0JBQUFMLENBQUEsQ0FBQUssQ0FBQSxLQUFBSyxDQUFBLENBQUE2QyxJQUFBLEdBQUF0RCxDQUFBLENBQUFlLENBQUEsSUFBQXdFLE9BQUEsQ0FBQXRDLE9BQUEsQ0FBQWxDLENBQUEsRUFBQW9DLElBQUEsQ0FBQWxELENBQUEsRUFBQUssQ0FBQTtBQUFBLFNBQUFnRyxrQkFBQWxHLENBQUEsNkJBQUFKLENBQUEsU0FBQUQsQ0FBQSxHQUFBd0csU0FBQSxhQUFBaEIsT0FBQSxXQUFBdEYsQ0FBQSxFQUFBSyxDQUFBLFFBQUFLLENBQUEsR0FBQVAsQ0FBQSxDQUFBb0csS0FBQSxDQUFBeEcsQ0FBQSxFQUFBRCxDQUFBLFlBQUEwRyxNQUFBckcsQ0FBQSxJQUFBaUcsa0JBQUEsQ0FBQTFGLENBQUEsRUFBQVYsQ0FBQSxFQUFBSyxDQUFBLEVBQUFtRyxLQUFBLEVBQUFDLE1BQUEsVUFBQXRHLENBQUEsY0FBQXNHLE9BQUF0RyxDQUFBLElBQUFpRyxrQkFBQSxDQUFBMUYsQ0FBQSxFQUFBVixDQUFBLEVBQUFLLENBQUEsRUFBQW1HLEtBQUEsRUFBQUMsTUFBQSxXQUFBdEcsQ0FBQSxLQUFBcUcsS0FBQTtBQUR1RDtBQUFBLFNBRXhDNkIsVUFBVUEsQ0FBQVYsRUFBQSxFQUFBVyxHQUFBO0VBQUEsT0FBQUMsV0FBQSxDQUFBaEMsS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFlekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3Q0EsU0FBQWlDLFlBQUE7RUFBQUEsV0FBQSxHQUFBbEMsaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBZkEsU0FBQTJCLFFBQTBCNEIsU0FBUyxFQUFFQyxPQUFPO0lBQUEsT0FBQTVJLG1CQUFBLEdBQUF1QixJQUFBLFVBQUEyRixTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQXRCLElBQUEsR0FBQXNCLFFBQUEsQ0FBQWpELElBQUE7UUFBQTtVQUFBLE9BQUFpRCxRQUFBLENBQUFwRCxNQUFBLFdBRWpDLElBQUkwQixPQUFPLENBQUMsVUFBQ3RDLE9BQU8sRUFBRTBGLE1BQU0sRUFBSztZQUN0Q0MsTUFBTSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQztjQUFDZixJQUFJLEVBQUUsRUFBRTtjQUFFZ0IsU0FBUyxFQUFFTixTQUFTLENBQUNPLE9BQU8sQ0FBQyxDQUFDO2NBQUVDLE9BQU8sRUFBRVAsT0FBTyxDQUFDTSxPQUFPLENBQUMsQ0FBQztjQUFFRSxVQUFVLEVBQUU7WUFBRyxDQUFDLEVBQUUsVUFBQ0MsT0FBTyxFQUFLO2NBQzFILElBQUlQLE1BQU0sQ0FBQ1EsT0FBTyxDQUFDQyxTQUFTLEVBQUU7Z0JBQzVCVixNQUFNLENBQUNDLE1BQU0sQ0FBQ1EsT0FBTyxDQUFDQyxTQUFTLENBQUM7Y0FDbEMsQ0FBQyxNQUFNO2dCQUNMaEMsT0FBTyxDQUFDQyxHQUFHLENBQUM2QixPQUFPLENBQUM7Z0JBQ3BCbEcsT0FBTyxDQUFDa0csT0FBTyxDQUFDO2NBQ2xCO1lBQ0YsQ0FBQyxDQUFDO1VBQ0osQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFsQyxRQUFBLENBQUFuQixJQUFBO01BQUE7SUFBQSxHQUFBZSxPQUFBO0VBQUEsQ0FDSDtFQUFBLE9BQUEyQixXQUFBLENBQUFoQyxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQWtESSxTQUFlK0MsdUJBQXVCQSxDQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxHQUFBO0VBQUEsT0FBQUMsd0JBQUEsQ0FBQW5ELEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBVTVDLFNBQUFvRCx5QkFBQTtFQUFBQSx3QkFBQSxHQUFBckQsaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBVk0sU0FBQTRDLFNBQXVDVyxTQUFTLEVBQUVDLE9BQU8sRUFBRWtCLENBQUMsRUFBRUMsZUFBZTtJQUFBLElBQUFDLFlBQUEsRUFBQUMsa0JBQUEsRUFBQUMsV0FBQSxFQUFBQyxnQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGFBQUEsRUFBQUMsdUJBQUE7SUFBQSxPQUFBdEssbUJBQUEsR0FBQXVCLElBQUEsVUFBQTRHLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBdkMsSUFBQSxHQUFBdUMsU0FBQSxDQUFBbEUsSUFBQTtRQUFBO1VBQUFrRSxTQUFBLENBQUFsRSxJQUFBO1VBQUEsT0FDckRxRSxtRUFBcUIsQ0FBQ0ksU0FBUyxDQUFDTyxPQUFPLENBQUMsQ0FBQyxFQUFFTixPQUFPLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFBQTtVQUFsRmMsWUFBWSxHQUFBNUIsU0FBQSxDQUFBeEUsSUFBQTtVQUNacUcsa0JBQWtCLEdBQUdELFlBQVksQ0FBQ08sR0FBRyxDQUFDLFVBQUFDLElBQUk7WUFBQSxPQUFJQyxjQUFjLENBQUNELElBQUksQ0FBQ0UsR0FBRyxFQUFFRixJQUFJLENBQUNHLEtBQUssQ0FBQztVQUFBLEVBQUM7VUFDbkZULFdBQVcsR0FBR1UsaUJBQWlCLENBQUNYLGtCQUFrQixDQUFDO1VBQ25ERSxnQkFBZ0IsR0FBR1Usc0JBQXNCLENBQUNaLGtCQUFrQixDQUFDO1VBQzdERyxlQUFlLEdBQUdVLEtBQUssQ0FBQ0MsSUFBSSxDQUFDYixXQUFXLENBQUNjLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNwSyxDQUFDLEVBQUVxSyxDQUFDO1lBQUEsT0FBS0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHckssQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUFBLEVBQUM7VUFDL0V3SixhQUFhLEdBQUdELGVBQWUsQ0FBQ3JFLEtBQUssQ0FBQyxDQUFDLEVBQUUrRCxDQUFDLENBQUM7VUFDM0NRLHVCQUF1QixHQUFHRCxhQUFhLENBQUNFLEdBQUcsQ0FBQyxVQUFBQyxJQUFJO1lBQUEsT0FBSztjQUFFVyxRQUFRLEVBQUVYLElBQUksQ0FBQyxDQUFDLENBQUM7Y0FBRVksTUFBTSxFQUFFakIsZ0JBQWdCLENBQUNrQixHQUFHLENBQUNiLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUFFYyxLQUFLLEVBQUVkLElBQUksQ0FBQyxDQUFDO1lBQUUsQ0FBQztVQUFBLENBQUMsQ0FBQztVQUFBLE9BQUFwQyxTQUFBLENBQUFyRSxNQUFBLFdBRWxJdUcsdUJBQXVCO1FBQUE7UUFBQTtVQUFBLE9BQUFsQyxTQUFBLENBQUFwQyxJQUFBO01BQUE7SUFBQSxHQUFBZ0MsUUFBQTtFQUFBLENBQ2pDO0VBQUEsT0FBQTZCLHdCQUFBLENBQUFuRCxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUdELFNBQVNnRSxjQUFjQSxDQUFDQyxHQUFHLEVBQUVDLEtBQUssRUFBRTtFQUNoQyxJQUFJO0lBQ0EsSUFBTVksU0FBUyxHQUFHLElBQUlDLEdBQUcsQ0FBQ2QsR0FBRyxDQUFDOztJQUU5QjtJQUNBLElBQU1lLFFBQVEsR0FBR0YsU0FBUyxDQUFDRSxRQUFRLENBQUNDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDOztJQUVwRDtJQUNBLElBQU1DLGFBQWEsR0FBR0osU0FBUyxDQUFDSixRQUFRLENBQUNTLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbkQsSUFBSUMsU0FBUyxHQUFHLEVBQUU7SUFDbEIsSUFBSUMsTUFBTSxHQUFHLEVBQUU7SUFDZixJQUFJQyxHQUFHLEdBQUcsRUFBRTtJQUVaLElBQUlKLGFBQWEsQ0FBQzVHLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDMUI4RyxTQUFTLEdBQUdGLGFBQWEsQ0FBQzVGLEtBQUssQ0FBQyxDQUFDLEVBQUU0RixhQUFhLENBQUM1RyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUNpSCxJQUFJLENBQUMsR0FBRyxDQUFDO01BQ3RFRixNQUFNLEdBQUdILGFBQWEsQ0FBQ0EsYUFBYSxDQUFDNUcsTUFBTSxHQUFHLENBQUMsQ0FBQztNQUNoRGdILEdBQUcsR0FBR0osYUFBYSxDQUFDQSxhQUFhLENBQUM1RyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2pELENBQUMsTUFBTSxJQUFJNEcsYUFBYSxDQUFDNUcsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUNuQytHLE1BQU0sR0FBR0gsYUFBYSxDQUFDLENBQUMsQ0FBQztNQUN6QkksR0FBRyxHQUFHSixhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsTUFBTTtNQUNIRyxNQUFNLEdBQUdQLFNBQVMsQ0FBQ0osUUFBUTtNQUMzQlksR0FBRyxHQUFHLEVBQUU7SUFDWjs7SUFFQTtJQUNBLElBQU1FLElBQUksR0FBR1YsU0FBUyxDQUFDVyxRQUFROztJQUUvQjtJQUNBLElBQU1DLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDdEJaLFNBQVMsQ0FBQ2EsWUFBWSxDQUFDdEosT0FBTyxDQUFDLFVBQUNwQyxLQUFLLEVBQUUyTCxHQUFHLEVBQUs7TUFDM0M7TUFDQSxJQUFJRixXQUFXLENBQUNFLEdBQUcsQ0FBQyxFQUFFO1FBQ2xCLElBQUl2QixLQUFLLENBQUN3QixPQUFPLENBQUNILFdBQVcsQ0FBQ0UsR0FBRyxDQUFDLENBQUMsRUFBRTtVQUNqQ0YsV0FBVyxDQUFDRSxHQUFHLENBQUMsQ0FBQzNILElBQUksQ0FBQ2hFLEtBQUssQ0FBQztRQUNoQyxDQUFDLE1BQU07VUFDSHlMLFdBQVcsQ0FBQ0UsR0FBRyxDQUFDLEdBQUcsQ0FBQ0YsV0FBVyxDQUFDRSxHQUFHLENBQUMsRUFBRTNMLEtBQUssQ0FBQztRQUNoRDtNQUNKLENBQUMsTUFBTTtRQUNIeUwsV0FBVyxDQUFDRSxHQUFHLENBQUMsR0FBRzNMLEtBQUs7TUFDNUI7SUFDSixDQUFDLENBQUM7O0lBRUY7SUFDQSxJQUFNNkwsUUFBUSxHQUFHaEIsU0FBUyxDQUFDaUIsSUFBSSxDQUFDZCxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQzs7SUFFaEQ7SUFDQSxJQUFJZSxJQUFJLEdBQUdsQixTQUFTLENBQUNrQixJQUFJO0lBQ3pCLElBQUksQ0FBQ0EsSUFBSSxFQUFFO01BQ1AsSUFBSWhCLFFBQVEsS0FBSyxNQUFNLEVBQUU7UUFDckJnQixJQUFJLEdBQUcsSUFBSTtNQUNmLENBQUMsTUFBTSxJQUFJaEIsUUFBUSxLQUFLLE9BQU8sRUFBRTtRQUM3QmdCLElBQUksR0FBRyxLQUFLO01BQ2hCLENBQUMsTUFBTTtRQUNIQSxJQUFJLEdBQUcsRUFBRTtNQUNiO0lBQ0o7SUFFQSxPQUFPO01BQ0hoQixRQUFRLEVBQVJBLFFBQVE7TUFDUkksU0FBUyxFQUFUQSxTQUFTO01BQ1RDLE1BQU0sRUFBTkEsTUFBTTtNQUNOQyxHQUFHLEVBQUhBLEdBQUc7TUFDSEUsSUFBSSxFQUFKQSxJQUFJO01BQ0pFLFdBQVcsRUFBWEEsV0FBVztNQUNYSSxRQUFRLEVBQVJBLFFBQVE7TUFDUkUsSUFBSSxFQUFKQSxJQUFJO01BQ0o7TUFDQUMsSUFBSSxFQUFFbkIsU0FBUyxDQUFDbUIsSUFBSTtNQUFFO01BQ3RCdkIsUUFBUSxFQUFFSSxTQUFTLENBQUNKLFFBQVE7TUFDNUJ3QixJQUFJLEVBQUVwQixTQUFTLENBQUNvQixJQUFJO01BQ3BCQyxNQUFNLEVBQUVyQixTQUFTLENBQUNxQixNQUFNO01BQ3hCakMsS0FBSyxFQUFMQTtJQUNKLENBQUM7RUFDTCxDQUFDLENBQUMsT0FBT2tDLEtBQUssRUFBRTtJQUNadEYsT0FBTyxDQUFDc0YsS0FBSyxpQkFBQUMsTUFBQSxDQUFpQnBDLEdBQUcsR0FBSW1DLEtBQUssQ0FBQztJQUMzQyxPQUFPLElBQUk7RUFDZjtBQUNKO0FBRUEsU0FBU2pDLGlCQUFpQkEsQ0FBQ1gsa0JBQWtCLEVBQUU7RUFDM0MsSUFBTUMsV0FBVyxHQUFHLElBQUk2QyxHQUFHLENBQUMsQ0FBQztFQUU3QjlDLGtCQUFrQixDQUFDbkgsT0FBTyxDQUFDLFVBQUEwSCxJQUFJLEVBQUk7SUFDL0IsSUFBTVcsUUFBUSxHQUFHWCxJQUFJLENBQUNXLFFBQVE7SUFDOUIsSUFBSUEsUUFBUSxFQUFFO01BQ1YsSUFBSWpCLFdBQVcsQ0FBQzhDLEdBQUcsQ0FBQzdCLFFBQVEsQ0FBQyxFQUFFO1FBQzNCakIsV0FBVyxDQUFDK0MsR0FBRyxDQUFDOUIsUUFBUSxFQUFFakIsV0FBVyxDQUFDbUIsR0FBRyxDQUFDRixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDNUQsQ0FBQyxNQUFNO1FBQ0hqQixXQUFXLENBQUMrQyxHQUFHLENBQUM5QixRQUFRLEVBQUUsQ0FBQyxDQUFDO01BQ2hDO0lBQ0o7RUFDSixDQUFDLENBQUM7RUFFRixPQUFPakIsV0FBVztBQUN0QjtBQUVBLFNBQVNXLHNCQUFzQkEsQ0FBQ1osa0JBQWtCLEVBQUU7RUFDaEQsSUFBTUMsV0FBVyxHQUFHLElBQUk2QyxHQUFHLENBQUMsQ0FBQztFQUM3QjlDLGtCQUFrQixDQUFDbkgsT0FBTyxDQUFDLFVBQUEwSCxJQUFJLEVBQUk7SUFDL0IsSUFBTVcsUUFBUSxHQUFHWCxJQUFJLENBQUNXLFFBQVE7SUFDOUIsSUFBSVIsS0FBSyxHQUFHSCxJQUFJLENBQUNHLEtBQUs7SUFDdEIsSUFBTUQsR0FBRyxHQUFHRixJQUFJLENBQUNtQyxJQUFJOztJQUVyQjtJQUNBLElBQUksQ0FBQ2hDLEtBQUssRUFBRTtNQUNSQSxLQUFLLEdBQUdRLFFBQVE7SUFDcEI7O0lBRUE7SUFDQSxJQUFJakIsV0FBVyxDQUFDOEMsR0FBRyxDQUFDN0IsUUFBUSxDQUFDLEVBQUU7TUFDM0I7TUFDQSxJQUFJLENBQUNqQixXQUFXLENBQUNtQixHQUFHLENBQUNGLFFBQVEsQ0FBQyxDQUFDK0IsSUFBSSxDQUFDLFVBQUFoTixDQUFDO1FBQUEsT0FBSUEsQ0FBQyxDQUFDeUssS0FBSyxLQUFLQSxLQUFLO01BQUEsRUFBQyxFQUFFO1FBQ3pEVCxXQUFXLENBQUNtQixHQUFHLENBQUNGLFFBQVEsQ0FBQyxDQUFDekcsSUFBSSxDQUFDO1VBQUNpRyxLQUFLLEVBQUxBLEtBQUs7VUFBRUQsR0FBRyxFQUFIQTtRQUFHLENBQUMsQ0FBQztNQUNoRDtJQUNKLENBQUMsTUFBTTtNQUNIUixXQUFXLENBQUMrQyxHQUFHLENBQUM5QixRQUFRLEVBQUUsQ0FBQztRQUFDUixLQUFLLEVBQUxBLEtBQUs7UUFBRUQsR0FBRyxFQUFIQTtNQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdDO0VBQ0osQ0FBQyxDQUFDO0VBRUYsT0FBT1IsV0FBVztBQUN0Qjs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFNQTtBQUNBLFNBQVNpRCxhQUFhQSxDQUFDekMsR0FBRyxFQUFFO0VBQ3hCLE9BQU8sSUFBSWMsR0FBRyxDQUFDZCxHQUFHLENBQUMsQ0FBQ1MsUUFBUTtBQUM5QjtBQUdBLFNBQVNpQyxjQUFjQSxDQUFDQyxZQUFZLEVBQUU7RUFDcEM7RUFDQSxJQUFJQyxJQUFJLEdBQUdELFlBQVksQ0FBQzNCLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxxQkFBcUIsQ0FBQzs7RUFFeEU7RUFDQTRCLElBQUksR0FBR0EsSUFBSSxDQUFDNUIsT0FBTyxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7O0VBRWhEO0VBQ0E0QixJQUFJLEdBQUdBLElBQUksQ0FBQzVCLE9BQU8sQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDOztFQUVqRDtFQUNBNEIsSUFBSSxHQUFHQSxJQUFJLENBQUM1QixPQUFPLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxDQUFDO0VBRXJELE9BQU80QixJQUFJO0FBQ2I7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNDLFVBQVVBLENBQUN0RixJQUFJLEVBQW9CO0VBQUEsSUFBbEJ1RixTQUFTLEdBQUEvRyxTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUFnSCxTQUFBLEdBQUFoSCxTQUFBLE1BQUcsSUFBSTtFQUN4QztFQUNBd0IsSUFBSSxHQUFHQSxJQUFJLENBQUN5RCxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDOztFQUUzQztFQUNBekQsSUFBSSxHQUFHQSxJQUFJLENBQUN5RixTQUFTLENBQUMsS0FBSyxDQUFDOztFQUU1QjtFQUNBLElBQUk7SUFDQUMsa0JBQWtCLENBQUNDLE1BQU0sQ0FBQzNGLElBQUksQ0FBQyxDQUFDO0VBQ3BDLENBQUMsQ0FBQyxPQUFPaEksQ0FBQyxFQUFFO0lBQ1JnSSxJQUFJLEdBQUdBLElBQUksQ0FBQ3lELE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO0VBQ2pDOztFQUVBO0VBQ0F6RCxJQUFJLEdBQUdBLElBQUksQ0FBQ3lELE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUM7O0VBRWxEO0VBQ0F6RCxJQUFJLEdBQUdBLElBQUksQ0FBQ3lELE9BQU8sQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDOztFQUUzQztFQUNBekQsSUFBSSxHQUFHQSxJQUFJLENBQUN5RCxPQUFPLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxDQUFDOztFQUUvQztFQUNBekQsSUFBSSxHQUFHQSxJQUFJLENBQUN5RCxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDbUMsSUFBSSxDQUFDLENBQUM7O0VBRXZDO0VBQ0EsSUFBSTVGLElBQUksQ0FBQ2xELE1BQU0sR0FBR3lJLFNBQVMsRUFBRTtJQUN6QixNQUFNLElBQUlqSyxLQUFLLDRDQUFBdUosTUFBQSxDQUE0Q1UsU0FBUyxpQkFBYyxDQUFDO0VBQ3ZGO0VBRUEsT0FBT3ZGLElBQUk7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBLFNBQVM2RixjQUFjQSxDQUFBLEVBQUc7RUFDdEIsSUFBTUMsaUJBQWlCLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO0VBRWpFRixpQkFBaUIsQ0FBQ2pMLE9BQU8sQ0FBQyxVQUFBb0wsT0FBTyxFQUFJO0lBQ25DLElBQU1DLFlBQVksR0FBR0QsT0FBTyxDQUFDRSxhQUFhLENBQUMsZ0JBQWdCLENBQUM7SUFDNUQsSUFBSUMsVUFBVSxHQUFHLEtBQUs7SUFFdEJGLFlBQVksQ0FBQzFHLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxVQUFDeEgsQ0FBQyxFQUFLO01BQ2hEQSxDQUFDLENBQUNxTyxjQUFjLENBQUMsQ0FBQztNQUNsQkQsVUFBVSxHQUFHLElBQUk7TUFDakJMLFFBQVEsQ0FBQ08sSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sR0FBRyxXQUFXO01BQ3hDUCxPQUFPLENBQUNRLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUVqQyxJQUFNQyxVQUFVLEdBQUdWLE9BQU8sQ0FBQ1csV0FBVztNQUN0QyxJQUFNQyxXQUFXLEdBQUdaLE9BQU8sQ0FBQ2EsWUFBWTtNQUN4QyxJQUFNQyxNQUFNLEdBQUcvTyxDQUFDLENBQUNnUCxPQUFPO01BQ3hCLElBQU1DLE1BQU0sR0FBR2pQLENBQUMsQ0FBQ2tQLE9BQU87TUFFeEIsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUluUCxDQUFDLEVBQUs7UUFDekIsSUFBSSxDQUFDb08sVUFBVSxFQUFFO1FBRWpCLElBQU1nQixZQUFZLEdBQUdULFVBQVUsSUFBSTNPLENBQUMsQ0FBQ2dQLE9BQU8sR0FBR0QsTUFBTSxDQUFDO1FBQ3RELElBQU1NLGFBQWEsR0FBR1IsV0FBVyxJQUFJN08sQ0FBQyxDQUFDa1AsT0FBTyxHQUFHRCxNQUFNLENBQUM7O1FBRXhEO1FBQ0EsSUFBTUssUUFBUSxHQUFHLEdBQUc7UUFDcEIsSUFBTUMsU0FBUyxHQUFHLEdBQUc7UUFFckJ0QixPQUFPLENBQUNNLEtBQUssQ0FBQ2lCLEtBQUssTUFBQTNDLE1BQUEsQ0FBTTRDLElBQUksQ0FBQ0MsR0FBRyxDQUFDTixZQUFZLEVBQUVFLFFBQVEsQ0FBQyxPQUFJO1FBQzdEckIsT0FBTyxDQUFDTSxLQUFLLENBQUNvQixNQUFNLE1BQUE5QyxNQUFBLENBQU00QyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0wsYUFBYSxFQUFFRSxTQUFTLENBQUMsT0FBSTtNQUNsRSxDQUFDO01BRUQsSUFBTUssVUFBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUEsRUFBUztRQUN0QnhCLFVBQVUsR0FBRyxLQUFLO1FBQ2xCTCxRQUFRLENBQUNPLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsU0FBUztRQUN0Q1AsT0FBTyxDQUFDUSxTQUFTLENBQUNvQixNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BDQyxNQUFNLENBQUNDLG1CQUFtQixDQUFDLFdBQVcsRUFBRVosV0FBVyxDQUFDO1FBQ3BEVyxNQUFNLENBQUNDLG1CQUFtQixDQUFDLFNBQVMsRUFBRUgsVUFBUyxDQUFDOztRQUVoRDtRQUNBSSxjQUFjLENBQUMvQixPQUFPLENBQUNnQyxFQUFFLEVBQUVoQyxPQUFPLENBQUNNLEtBQUssQ0FBQ2lCLEtBQUssRUFBRXZCLE9BQU8sQ0FBQ00sS0FBSyxDQUFDb0IsTUFBTSxDQUFDO01BQ3ZFLENBQUM7TUFFREcsTUFBTSxDQUFDdEksZ0JBQWdCLENBQUMsV0FBVyxFQUFFMkgsV0FBVyxDQUFDO01BQ2pEVyxNQUFNLENBQUN0SSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUVvSSxVQUFTLENBQUM7SUFDL0MsQ0FBQyxDQUFDOztJQUVGO0lBQ0FNLGNBQWMsQ0FBQ2pDLE9BQU8sQ0FBQ2dDLEVBQUUsRUFBRWhDLE9BQU8sQ0FBQztFQUNyQyxDQUFDLENBQUM7QUFDSjs7QUFFQTtBQUNBLFNBQVMrQixjQUFjQSxDQUFDRyxRQUFRLEVBQUVYLEtBQUssRUFBRUcsTUFBTSxFQUFFO0VBQy9DLElBQU1TLElBQUksR0FBRztJQUFFWixLQUFLLEVBQUxBLEtBQUs7SUFBRUcsTUFBTSxFQUFOQTtFQUFPLENBQUM7RUFDOUIsSUFBSTlHLE1BQU0sSUFBSUEsTUFBTSxDQUFDd0gsT0FBTyxJQUFJeEgsTUFBTSxDQUFDd0gsT0FBTyxDQUFDQyxLQUFLLEVBQUU7SUFDcER6SCxNQUFNLENBQUN3SCxPQUFPLENBQUNDLEtBQUssQ0FBQ3RELEdBQUcsQ0FBQXVELGVBQUEsS0FBSUosUUFBUSxFQUFHQyxJQUFJLEdBQUksWUFBTTtNQUNuRDlJLE9BQU8sQ0FBQ0MsR0FBRyxtQkFBQXNGLE1BQUEsQ0FBbUJzRCxRQUFRLFFBQUtDLElBQUksQ0FBQztJQUNsRCxDQUFDLENBQUM7RUFDSixDQUFDLE1BQU07SUFDTDtJQUNBSSxZQUFZLENBQUNDLE9BQU8sQ0FBQ04sUUFBUSxFQUFFTyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1AsSUFBSSxDQUFDLENBQUM7RUFDdEQ7QUFDRjs7QUFFQTtBQUNBLFNBQVNGLGNBQWNBLENBQUNDLFFBQVEsRUFBRWxDLE9BQU8sRUFBRTtFQUN6QyxJQUFJcEYsTUFBTSxJQUFJQSxNQUFNLENBQUN3SCxPQUFPLElBQUl4SCxNQUFNLENBQUN3SCxPQUFPLENBQUNDLEtBQUssRUFBRTtJQUNwRHpILE1BQU0sQ0FBQ3dILE9BQU8sQ0FBQ0MsS0FBSyxDQUFDbEYsR0FBRyxDQUFDK0UsUUFBUSxFQUFFLFVBQUNsSSxNQUFNLEVBQUs7TUFDN0MsSUFBSUEsTUFBTSxDQUFDa0ksUUFBUSxDQUFDLEVBQUU7UUFDcEJsQyxPQUFPLENBQUNNLEtBQUssQ0FBQ2lCLEtBQUssR0FBR3ZILE1BQU0sQ0FBQ2tJLFFBQVEsQ0FBQyxDQUFDWCxLQUFLO1FBQzVDdkIsT0FBTyxDQUFDTSxLQUFLLENBQUNvQixNQUFNLEdBQUcxSCxNQUFNLENBQUNrSSxRQUFRLENBQUMsQ0FBQ1IsTUFBTTtNQUNoRDtJQUNGLENBQUMsQ0FBQztFQUNKLENBQUMsTUFBTTtJQUNMO0lBQ0EsSUFBTVMsSUFBSSxHQUFHTSxJQUFJLENBQUNFLEtBQUssQ0FBQ0osWUFBWSxDQUFDSyxPQUFPLENBQUNWLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELElBQUlDLElBQUksRUFBRTtNQUNSbkMsT0FBTyxDQUFDTSxLQUFLLENBQUNpQixLQUFLLEdBQUdZLElBQUksQ0FBQ1osS0FBSztNQUNoQ3ZCLE9BQU8sQ0FBQ00sS0FBSyxDQUFDb0IsTUFBTSxHQUFHUyxJQUFJLENBQUNULE1BQU07SUFDcEM7RUFDRjtBQUNGO0FBR0EsU0FBU21CLGlCQUFpQkEsQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLEVBQUU7RUFDaEQsSUFBSWpELFFBQVEsQ0FBQ2tELGNBQWMsQ0FBQ0YsUUFBUSxDQUFDLEVBQUU7SUFDckMsT0FBT2hELFFBQVEsQ0FBQ2tELGNBQWMsQ0FBQ0YsUUFBUSxDQUFDO0VBQzFDO0VBRUEsSUFBTUcsZUFBZSxHQUFHbkQsUUFBUSxDQUFDSSxhQUFhLENBQUMsbUJBQW1CLENBQUM7O0VBRW5FO0VBQ0EsSUFBTWdELFNBQVMsR0FBR3BELFFBQVEsQ0FBQ3FELGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDL0NELFNBQVMsQ0FBQ0UsU0FBUyxHQUFHLGtCQUFrQjs7RUFFeEM7RUFDQUYsU0FBUyxDQUFDbEIsRUFBRSxHQUFHYyxRQUFROztFQUV2QjtFQUNBSSxTQUFTLENBQUNHLFNBQVMsK0RBQUF6RSxNQUFBLENBRUxtRSxXQUFXLGlGQUd4Qjs7RUFFRDtFQUNBRSxlQUFlLENBQUNLLFdBQVcsQ0FBQ0osU0FBUyxDQUFDO0VBRXRDLE9BQU9BLFNBQVM7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0MvR0YscUpBQUFwUixtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUyxLQUFBLEVBQUFQLENBQUEsRUFBQWlCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFwQixDQUFBLENBQUFELENBQUEsV0FBQWtCLE1BQUEsbUJBQUFqQixDQUFBLElBQUFpQixNQUFBLFlBQUFBLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQW9CLEtBQUFyQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFLLENBQUEsR0FBQVYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFNBQUEsWUFBQW1CLFNBQUEsR0FBQXZCLENBQUEsR0FBQXVCLFNBQUEsRUFBQVgsQ0FBQSxHQUFBVCxNQUFBLENBQUFxQixNQUFBLENBQUFkLENBQUEsQ0FBQU4sU0FBQSxHQUFBVSxDQUFBLE9BQUFXLE9BQUEsQ0FBQXBCLENBQUEsZ0JBQUFFLENBQUEsQ0FBQUssQ0FBQSxlQUFBSCxLQUFBLEVBQUFpQixnQkFBQSxDQUFBekIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFZLENBQUEsTUFBQUYsQ0FBQSxhQUFBZSxTQUFBMUIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsbUJBQUEwQixJQUFBLFlBQUFDLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTZCLElBQUEsQ0FBQTlCLENBQUEsRUFBQUUsQ0FBQSxjQUFBRCxDQUFBLGFBQUEyQixJQUFBLFdBQUFDLEdBQUEsRUFBQTVCLENBQUEsUUFBQUQsQ0FBQSxDQUFBc0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFTLENBQUEscUJBQUFDLENBQUEscUJBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFaLFVBQUEsY0FBQWEsa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsQ0FBQSxPQUFBcEIsTUFBQSxDQUFBb0IsQ0FBQSxFQUFBMUIsQ0FBQSxxQ0FBQTJCLENBQUEsR0FBQXBDLE1BQUEsQ0FBQXFDLGNBQUEsRUFBQUMsQ0FBQSxHQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUEsQ0FBQSxDQUFBRyxNQUFBLFFBQUFELENBQUEsSUFBQUEsQ0FBQSxLQUFBdkMsQ0FBQSxJQUFBRyxDQUFBLENBQUF5QixJQUFBLENBQUFXLENBQUEsRUFBQTdCLENBQUEsTUFBQTBCLENBQUEsR0FBQUcsQ0FBQSxPQUFBRSxDQUFBLEdBQUFOLDBCQUFBLENBQUFqQyxTQUFBLEdBQUFtQixTQUFBLENBQUFuQixTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWMsQ0FBQSxZQUFBTSxzQkFBQTNDLENBQUEsZ0NBQUE0QyxPQUFBLFdBQUE3QyxDQUFBLElBQUFrQixNQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsWUFBQUMsQ0FBQSxnQkFBQTZDLE9BQUEsQ0FBQTlDLENBQUEsRUFBQUMsQ0FBQSxzQkFBQThDLGNBQUE5QyxDQUFBLEVBQUFELENBQUEsYUFBQWdELE9BQUE5QyxDQUFBLEVBQUFLLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQWEsUUFBQSxDQUFBMUIsQ0FBQSxDQUFBQyxDQUFBLEdBQUFELENBQUEsRUFBQU0sQ0FBQSxtQkFBQU8sQ0FBQSxDQUFBYyxJQUFBLFFBQUFaLENBQUEsR0FBQUYsQ0FBQSxDQUFBZSxHQUFBLEVBQUFFLENBQUEsR0FBQWYsQ0FBQSxDQUFBUCxLQUFBLFNBQUFzQixDQUFBLGdCQUFBa0IsT0FBQSxDQUFBbEIsQ0FBQSxLQUFBMUIsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBQyxDQUFBLGVBQUEvQixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLENBQUFvQixPQUFBLEVBQUFDLElBQUEsV0FBQW5ELENBQUEsSUFBQStDLE1BQUEsU0FBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBWCxDQUFBLElBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxRQUFBWixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLEVBQUFxQixJQUFBLFdBQUFuRCxDQUFBLElBQUFlLENBQUEsQ0FBQVAsS0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsQ0FBQU0sQ0FBQSxnQkFBQWYsQ0FBQSxXQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFlLEdBQUEsU0FBQTNCLENBQUEsRUFBQUssQ0FBQSxvQkFBQUUsS0FBQSxXQUFBQSxNQUFBUixDQUFBLEVBQUFJLENBQUEsYUFBQWdELDJCQUFBLGVBQUFyRCxDQUFBLFdBQUFBLENBQUEsRUFBQUUsQ0FBQSxJQUFBOEMsTUFBQSxDQUFBL0MsQ0FBQSxFQUFBSSxDQUFBLEVBQUFMLENBQUEsRUFBQUUsQ0FBQSxnQkFBQUEsQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUEsQ0FBQWtELElBQUEsQ0FBQUMsMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUEzQixpQkFBQTFCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFFLENBQUEsR0FBQXdCLENBQUEsbUJBQUFyQixDQUFBLEVBQUFFLENBQUEsUUFBQUwsQ0FBQSxLQUFBMEIsQ0FBQSxRQUFBcUIsS0FBQSxzQ0FBQS9DLENBQUEsS0FBQTJCLENBQUEsb0JBQUF4QixDQUFBLFFBQUFFLENBQUEsV0FBQUgsS0FBQSxFQUFBUixDQUFBLEVBQUFzRCxJQUFBLGVBQUFsRCxDQUFBLENBQUFtRCxNQUFBLEdBQUE5QyxDQUFBLEVBQUFMLENBQUEsQ0FBQXdCLEdBQUEsR0FBQWpCLENBQUEsVUFBQUUsQ0FBQSxHQUFBVCxDQUFBLENBQUFvRCxRQUFBLE1BQUEzQyxDQUFBLFFBQUFFLENBQUEsR0FBQTBDLG1CQUFBLENBQUE1QyxDQUFBLEVBQUFULENBQUEsT0FBQVcsQ0FBQSxRQUFBQSxDQUFBLEtBQUFtQixDQUFBLG1CQUFBbkIsQ0FBQSxxQkFBQVgsQ0FBQSxDQUFBbUQsTUFBQSxFQUFBbkQsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBdUQsS0FBQSxHQUFBdkQsQ0FBQSxDQUFBd0IsR0FBQSxzQkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsUUFBQWpELENBQUEsS0FBQXdCLENBQUEsUUFBQXhCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQXdCLEdBQUEsRUFBQXhCLENBQUEsQ0FBQXdELGlCQUFBLENBQUF4RCxDQUFBLENBQUF3QixHQUFBLHVCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxJQUFBbkQsQ0FBQSxDQUFBeUQsTUFBQSxXQUFBekQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBdEIsQ0FBQSxHQUFBMEIsQ0FBQSxNQUFBSyxDQUFBLEdBQUFYLFFBQUEsQ0FBQTNCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLG9CQUFBaUMsQ0FBQSxDQUFBVixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQWtELElBQUEsR0FBQXJCLENBQUEsR0FBQUYsQ0FBQSxFQUFBTSxDQUFBLENBQUFULEdBQUEsS0FBQU0sQ0FBQSxxQkFBQTFCLEtBQUEsRUFBQTZCLENBQUEsQ0FBQVQsR0FBQSxFQUFBMEIsSUFBQSxFQUFBbEQsQ0FBQSxDQUFBa0QsSUFBQSxrQkFBQWpCLENBQUEsQ0FBQVYsSUFBQSxLQUFBckIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBbUQsTUFBQSxZQUFBbkQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBUyxDQUFBLENBQUFULEdBQUEsbUJBQUE2QixvQkFBQTFELENBQUEsRUFBQUUsQ0FBQSxRQUFBRyxDQUFBLEdBQUFILENBQUEsQ0FBQXNELE1BQUEsRUFBQWpELENBQUEsR0FBQVAsQ0FBQSxDQUFBYSxRQUFBLENBQUFSLENBQUEsT0FBQUUsQ0FBQSxLQUFBTixDQUFBLFNBQUFDLENBQUEsQ0FBQXVELFFBQUEscUJBQUFwRCxDQUFBLElBQUFMLENBQUEsQ0FBQWEsUUFBQSxlQUFBWCxDQUFBLENBQUFzRCxNQUFBLGFBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEVBQUF5RCxtQkFBQSxDQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsQ0FBQXNELE1BQUEsa0JBQUFuRCxDQUFBLEtBQUFILENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsdUNBQUExRCxDQUFBLGlCQUFBOEIsQ0FBQSxNQUFBekIsQ0FBQSxHQUFBaUIsUUFBQSxDQUFBcEIsQ0FBQSxFQUFBUCxDQUFBLENBQUFhLFFBQUEsRUFBQVgsQ0FBQSxDQUFBMkIsR0FBQSxtQkFBQW5CLENBQUEsQ0FBQWtCLElBQUEsU0FBQTFCLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQW5CLENBQUEsQ0FBQW1CLEdBQUEsRUFBQTNCLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsTUFBQXZCLENBQUEsR0FBQUYsQ0FBQSxDQUFBbUIsR0FBQSxTQUFBakIsQ0FBQSxHQUFBQSxDQUFBLENBQUEyQyxJQUFBLElBQUFyRCxDQUFBLENBQUFGLENBQUEsQ0FBQWdFLFVBQUEsSUFBQXBELENBQUEsQ0FBQUgsS0FBQSxFQUFBUCxDQUFBLENBQUErRCxJQUFBLEdBQUFqRSxDQUFBLENBQUFrRSxPQUFBLGVBQUFoRSxDQUFBLENBQUFzRCxNQUFBLEtBQUF0RCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEdBQUFDLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsSUFBQXZCLENBQUEsSUFBQVYsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSxzQ0FBQTdELENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsY0FBQWdDLGFBQUFsRSxDQUFBLFFBQUFELENBQUEsS0FBQW9FLE1BQUEsRUFBQW5FLENBQUEsWUFBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFxRSxRQUFBLEdBQUFwRSxDQUFBLFdBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0UsVUFBQSxHQUFBckUsQ0FBQSxLQUFBRCxDQUFBLENBQUF1RSxRQUFBLEdBQUF0RSxDQUFBLFdBQUF1RSxVQUFBLENBQUFDLElBQUEsQ0FBQXpFLENBQUEsY0FBQTBFLGNBQUF6RSxDQUFBLFFBQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBMEUsVUFBQSxRQUFBM0UsQ0FBQSxDQUFBNEIsSUFBQSxvQkFBQTVCLENBQUEsQ0FBQTZCLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTBFLFVBQUEsR0FBQTNFLENBQUEsYUFBQXlCLFFBQUF4QixDQUFBLFNBQUF1RSxVQUFBLE1BQUFKLE1BQUEsYUFBQW5FLENBQUEsQ0FBQTRDLE9BQUEsQ0FBQXNCLFlBQUEsY0FBQVMsS0FBQSxpQkFBQWxDLE9BQUExQyxDQUFBLFFBQUFBLENBQUEsV0FBQUEsQ0FBQSxRQUFBRSxDQUFBLEdBQUFGLENBQUEsQ0FBQVksQ0FBQSxPQUFBVixDQUFBLFNBQUFBLENBQUEsQ0FBQTRCLElBQUEsQ0FBQTlCLENBQUEsNEJBQUFBLENBQUEsQ0FBQWlFLElBQUEsU0FBQWpFLENBQUEsT0FBQTZFLEtBQUEsQ0FBQTdFLENBQUEsQ0FBQThFLE1BQUEsU0FBQXZFLENBQUEsT0FBQUcsQ0FBQSxZQUFBdUQsS0FBQSxhQUFBMUQsQ0FBQSxHQUFBUCxDQUFBLENBQUE4RSxNQUFBLE9BQUF6RSxDQUFBLENBQUF5QixJQUFBLENBQUE5QixDQUFBLEVBQUFPLENBQUEsVUFBQTBELElBQUEsQ0FBQXhELEtBQUEsR0FBQVQsQ0FBQSxDQUFBTyxDQUFBLEdBQUEwRCxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxTQUFBQSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFlBQUF2RCxDQUFBLENBQUF1RCxJQUFBLEdBQUF2RCxDQUFBLGdCQUFBcUQsU0FBQSxDQUFBZCxPQUFBLENBQUFqRCxDQUFBLGtDQUFBb0MsaUJBQUEsQ0FBQWhDLFNBQUEsR0FBQWlDLDBCQUFBLEVBQUE5QixDQUFBLENBQUFvQyxDQUFBLG1CQUFBbEMsS0FBQSxFQUFBNEIsMEJBQUEsRUFBQWpCLFlBQUEsU0FBQWIsQ0FBQSxDQUFBOEIsMEJBQUEsbUJBQUE1QixLQUFBLEVBQUEyQixpQkFBQSxFQUFBaEIsWUFBQSxTQUFBZ0IsaUJBQUEsQ0FBQTJDLFdBQUEsR0FBQTdELE1BQUEsQ0FBQW1CLDBCQUFBLEVBQUFyQixDQUFBLHdCQUFBaEIsQ0FBQSxDQUFBZ0YsbUJBQUEsYUFBQS9FLENBQUEsUUFBQUQsQ0FBQSx3QkFBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFnRixXQUFBLFdBQUFqRixDQUFBLEtBQUFBLENBQUEsS0FBQW9DLGlCQUFBLDZCQUFBcEMsQ0FBQSxDQUFBK0UsV0FBQSxJQUFBL0UsQ0FBQSxDQUFBa0YsSUFBQSxPQUFBbEYsQ0FBQSxDQUFBbUYsSUFBQSxhQUFBbEYsQ0FBQSxXQUFBRSxNQUFBLENBQUFpRixjQUFBLEdBQUFqRixNQUFBLENBQUFpRixjQUFBLENBQUFuRixDQUFBLEVBQUFvQywwQkFBQSxLQUFBcEMsQ0FBQSxDQUFBb0YsU0FBQSxHQUFBaEQsMEJBQUEsRUFBQW5CLE1BQUEsQ0FBQWpCLENBQUEsRUFBQWUsQ0FBQSx5QkFBQWYsQ0FBQSxDQUFBRyxTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQW1CLENBQUEsR0FBQTFDLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0YsS0FBQSxhQUFBckYsQ0FBQSxhQUFBa0QsT0FBQSxFQUFBbEQsQ0FBQSxPQUFBMkMscUJBQUEsQ0FBQUcsYUFBQSxDQUFBM0MsU0FBQSxHQUFBYyxNQUFBLENBQUE2QixhQUFBLENBQUEzQyxTQUFBLEVBQUFVLENBQUEsaUNBQUFkLENBQUEsQ0FBQStDLGFBQUEsR0FBQUEsYUFBQSxFQUFBL0MsQ0FBQSxDQUFBdUYsS0FBQSxhQUFBdEYsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGVBQUFBLENBQUEsS0FBQUEsQ0FBQSxHQUFBOEUsT0FBQSxPQUFBNUUsQ0FBQSxPQUFBbUMsYUFBQSxDQUFBekIsSUFBQSxDQUFBckIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxHQUFBRyxDQUFBLFVBQUFWLENBQUEsQ0FBQWdGLG1CQUFBLENBQUE5RSxDQUFBLElBQUFVLENBQUEsR0FBQUEsQ0FBQSxDQUFBcUQsSUFBQSxHQUFBYixJQUFBLFdBQUFuRCxDQUFBLFdBQUFBLENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQVEsS0FBQSxHQUFBRyxDQUFBLENBQUFxRCxJQUFBLFdBQUFyQixxQkFBQSxDQUFBRCxDQUFBLEdBQUF6QixNQUFBLENBQUF5QixDQUFBLEVBQUEzQixDQUFBLGdCQUFBRSxNQUFBLENBQUF5QixDQUFBLEVBQUEvQixDQUFBLGlDQUFBTSxNQUFBLENBQUF5QixDQUFBLDZEQUFBM0MsQ0FBQSxDQUFBeUYsSUFBQSxhQUFBeEYsQ0FBQSxRQUFBRCxDQUFBLEdBQUFHLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBQyxDQUFBLGdCQUFBRyxDQUFBLElBQUFMLENBQUEsRUFBQUUsQ0FBQSxDQUFBdUUsSUFBQSxDQUFBcEUsQ0FBQSxVQUFBSCxDQUFBLENBQUF3RixPQUFBLGFBQUF6QixLQUFBLFdBQUEvRCxDQUFBLENBQUE0RSxNQUFBLFNBQUE3RSxDQUFBLEdBQUFDLENBQUEsQ0FBQXlGLEdBQUEsUUFBQTFGLENBQUEsSUFBQUQsQ0FBQSxTQUFBaUUsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxXQUFBQSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxRQUFBakUsQ0FBQSxDQUFBMEMsTUFBQSxHQUFBQSxNQUFBLEVBQUFqQixPQUFBLENBQUFyQixTQUFBLEtBQUE2RSxXQUFBLEVBQUF4RCxPQUFBLEVBQUFtRCxLQUFBLFdBQUFBLE1BQUE1RSxDQUFBLGFBQUE0RixJQUFBLFdBQUEzQixJQUFBLFdBQUFOLElBQUEsUUFBQUMsS0FBQSxHQUFBM0QsQ0FBQSxPQUFBc0QsSUFBQSxZQUFBRSxRQUFBLGNBQUFELE1BQUEsZ0JBQUEzQixHQUFBLEdBQUE1QixDQUFBLE9BQUF1RSxVQUFBLENBQUEzQixPQUFBLENBQUE2QixhQUFBLElBQUExRSxDQUFBLFdBQUFFLENBQUEsa0JBQUFBLENBQUEsQ0FBQTJGLE1BQUEsT0FBQXhGLENBQUEsQ0FBQXlCLElBQUEsT0FBQTVCLENBQUEsTUFBQTJFLEtBQUEsRUFBQTNFLENBQUEsQ0FBQTRGLEtBQUEsY0FBQTVGLENBQUEsSUFBQUQsQ0FBQSxNQUFBOEYsSUFBQSxXQUFBQSxLQUFBLFNBQUF4QyxJQUFBLFdBQUF0RCxDQUFBLFFBQUF1RSxVQUFBLElBQUFHLFVBQUEsa0JBQUExRSxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLGNBQUFtRSxJQUFBLEtBQUFuQyxpQkFBQSxXQUFBQSxrQkFBQTdELENBQUEsYUFBQXVELElBQUEsUUFBQXZELENBQUEsTUFBQUUsQ0FBQSxrQkFBQStGLE9BQUE1RixDQUFBLEVBQUFFLENBQUEsV0FBQUssQ0FBQSxDQUFBZ0IsSUFBQSxZQUFBaEIsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBRSxDQUFBLENBQUErRCxJQUFBLEdBQUE1RCxDQUFBLEVBQUFFLENBQUEsS0FBQUwsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxLQUFBTSxDQUFBLGFBQUFBLENBQUEsUUFBQWlFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBdkUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFHLENBQUEsUUFBQThELFVBQUEsQ0FBQWpFLENBQUEsR0FBQUssQ0FBQSxHQUFBRixDQUFBLENBQUFpRSxVQUFBLGlCQUFBakUsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBNkIsTUFBQSxhQUFBdkYsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBd0IsSUFBQSxRQUFBOUUsQ0FBQSxHQUFBVCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLGVBQUFNLENBQUEsR0FBQVgsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxxQkFBQUksQ0FBQSxJQUFBRSxDQUFBLGFBQUE0RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLGdCQUFBdUIsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxjQUFBeEQsQ0FBQSxhQUFBOEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxxQkFBQXJELENBQUEsUUFBQXNDLEtBQUEscURBQUFzQyxJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLFlBQUFSLE1BQUEsV0FBQUEsT0FBQTdELENBQUEsRUFBQUQsQ0FBQSxhQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUFNLE1BQUEsTUFBQTVFLENBQUEsU0FBQUEsQ0FBQSxRQUFBSyxDQUFBLFFBQUFpRSxVQUFBLENBQUF0RSxDQUFBLE9BQUFLLENBQUEsQ0FBQTZELE1BQUEsU0FBQXdCLElBQUEsSUFBQXZGLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXZCLENBQUEsd0JBQUFxRixJQUFBLEdBQUFyRixDQUFBLENBQUErRCxVQUFBLFFBQUE1RCxDQUFBLEdBQUFILENBQUEsYUFBQUcsQ0FBQSxpQkFBQVQsQ0FBQSxtQkFBQUEsQ0FBQSxLQUFBUyxDQUFBLENBQUEwRCxNQUFBLElBQUFwRSxDQUFBLElBQUFBLENBQUEsSUFBQVUsQ0FBQSxDQUFBNEQsVUFBQSxLQUFBNUQsQ0FBQSxjQUFBRSxDQUFBLEdBQUFGLENBQUEsR0FBQUEsQ0FBQSxDQUFBaUUsVUFBQSxjQUFBL0QsQ0FBQSxDQUFBZ0IsSUFBQSxHQUFBM0IsQ0FBQSxFQUFBVyxDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFVLENBQUEsU0FBQThDLE1BQUEsZ0JBQUFTLElBQUEsR0FBQXZELENBQUEsQ0FBQTRELFVBQUEsRUFBQW5DLENBQUEsU0FBQStELFFBQUEsQ0FBQXRGLENBQUEsTUFBQXNGLFFBQUEsV0FBQUEsU0FBQWpHLENBQUEsRUFBQUQsQ0FBQSxvQkFBQUMsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxxQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsbUJBQUEzQixDQUFBLENBQUEyQixJQUFBLFFBQUFxQyxJQUFBLEdBQUFoRSxDQUFBLENBQUE0QixHQUFBLGdCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxTQUFBb0UsSUFBQSxRQUFBbkUsR0FBQSxHQUFBNUIsQ0FBQSxDQUFBNEIsR0FBQSxPQUFBMkIsTUFBQSxrQkFBQVMsSUFBQSx5QkFBQWhFLENBQUEsQ0FBQTJCLElBQUEsSUFBQTVCLENBQUEsVUFBQWlFLElBQUEsR0FBQWpFLENBQUEsR0FBQW1DLENBQUEsS0FBQWdFLE1BQUEsV0FBQUEsT0FBQWxHLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFvRSxVQUFBLEtBQUFyRSxDQUFBLGNBQUFpRyxRQUFBLENBQUFoRyxDQUFBLENBQUF5RSxVQUFBLEVBQUF6RSxDQUFBLENBQUFxRSxRQUFBLEdBQUFHLGFBQUEsQ0FBQXhFLENBQUEsR0FBQWlDLENBQUEseUJBQUFpRSxPQUFBbkcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQWtFLE1BQUEsS0FBQW5FLENBQUEsUUFBQUksQ0FBQSxHQUFBSCxDQUFBLENBQUF5RSxVQUFBLGtCQUFBdEUsQ0FBQSxDQUFBdUIsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUF3QixHQUFBLEVBQUE2QyxhQUFBLENBQUF4RSxDQUFBLFlBQUFLLENBQUEsWUFBQStDLEtBQUEsOEJBQUErQyxhQUFBLFdBQUFBLGNBQUFyRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxnQkFBQW9ELFFBQUEsS0FBQTVDLFFBQUEsRUFBQTZCLE1BQUEsQ0FBQTFDLENBQUEsR0FBQWdFLFVBQUEsRUFBQTlELENBQUEsRUFBQWdFLE9BQUEsRUFBQTdELENBQUEsb0JBQUFtRCxNQUFBLFVBQUEzQixHQUFBLEdBQUE1QixDQUFBLEdBQUFrQyxDQUFBLE9BQUFuQyxDQUFBO0FBQUEsU0FBQXNHLG1CQUFBakcsQ0FBQSxFQUFBSixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBSyxDQUFBLEVBQUFLLENBQUEsRUFBQUUsQ0FBQSxjQUFBSixDQUFBLEdBQUFMLENBQUEsQ0FBQU8sQ0FBQSxFQUFBRSxDQUFBLEdBQUFFLENBQUEsR0FBQU4sQ0FBQSxDQUFBRCxLQUFBLFdBQUFKLENBQUEsZ0JBQUFMLENBQUEsQ0FBQUssQ0FBQSxLQUFBSyxDQUFBLENBQUE2QyxJQUFBLEdBQUF0RCxDQUFBLENBQUFlLENBQUEsSUFBQXdFLE9BQUEsQ0FBQXRDLE9BQUEsQ0FBQWxDLENBQUEsRUFBQW9DLElBQUEsQ0FBQWxELENBQUEsRUFBQUssQ0FBQTtBQUFBLFNBQUFnRyxrQkFBQWxHLENBQUEsNkJBQUFKLENBQUEsU0FBQUQsQ0FBQSxHQUFBd0csU0FBQSxhQUFBaEIsT0FBQSxXQUFBdEYsQ0FBQSxFQUFBSyxDQUFBLFFBQUFLLENBQUEsR0FBQVAsQ0FBQSxDQUFBb0csS0FBQSxDQUFBeEcsQ0FBQSxFQUFBRCxDQUFBLFlBQUEwRyxNQUFBckcsQ0FBQSxJQUFBaUcsa0JBQUEsQ0FBQTFGLENBQUEsRUFBQVYsQ0FBQSxFQUFBSyxDQUFBLEVBQUFtRyxLQUFBLEVBQUFDLE1BQUEsVUFBQXRHLENBQUEsY0FBQXNHLE9BQUF0RyxDQUFBLElBQUFpRyxrQkFBQSxDQUFBMUYsQ0FBQSxFQUFBVixDQUFBLEVBQUFLLENBQUEsRUFBQW1HLEtBQUEsRUFBQUMsTUFBQSxXQUFBdEcsQ0FBQSxLQUFBcUcsS0FBQTtBQURBOztBQUVBLElBQUk4SyxFQUFFO0FBRUMsU0FBZUMsWUFBWUEsQ0FBQTtFQUFBLE9BQUFDLGFBQUEsQ0FBQWpMLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBNkJqQyxTQUFBa0wsY0FBQTtFQUFBQSxhQUFBLEdBQUFuTCxpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0E3Qk0sU0FBQTJCLFFBQUE7SUFBQSxPQUFBL0csbUJBQUEsR0FBQXVCLElBQUEsVUFBQTJGLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBdEIsSUFBQSxHQUFBc0IsUUFBQSxDQUFBakQsSUFBQTtRQUFBO1VBQUEsT0FBQWlELFFBQUEsQ0FBQXBELE1BQUEsV0FDRSxJQUFJMEIsT0FBTyxDQUFDLFVBQUN0QyxPQUFPLEVBQUUwRixNQUFNLEVBQUs7WUFDdEMsSUFBSTRJLEVBQUUsRUFBRTtjQUNOdE8sT0FBTyxDQUFDc08sRUFBRSxDQUFDO2NBQ1g7WUFDRjtZQUNBLElBQU1HLE9BQU8sR0FBR0MsU0FBUyxDQUFDQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1lBRXJERixPQUFPLENBQUNHLE9BQU8sR0FBRyxVQUFDQyxLQUFLLEVBQUs7Y0FDM0J6SyxPQUFPLENBQUNzRixLQUFLLENBQUMsaUJBQWlCLEVBQUVtRixLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO2NBQ3hEckosTUFBTSxDQUFDbUosS0FBSyxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUNoQyxDQUFDO1lBRUROLE9BQU8sQ0FBQ08sZUFBZSxHQUFHLFVBQUNILEtBQUssRUFBSztjQUNuQ1AsRUFBRSxHQUFHTyxLQUFLLENBQUNDLE1BQU0sQ0FBQy9KLE1BQU07Y0FDeEIsSUFBTWtLLFdBQVcsR0FBR1gsRUFBRSxDQUFDWSxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7Z0JBQUVDLE9BQU8sRUFBRTtjQUFLLENBQUMsQ0FBQztjQUN0RUYsV0FBVyxDQUFDRyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtnQkFBRUMsTUFBTSxFQUFFO2NBQU0sQ0FBQyxDQUFDO2NBQ3hESixXQUFXLENBQUNHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFO2dCQUFFQyxNQUFNLEVBQUU7Y0FBTSxDQUFDLENBQUM7Y0FDNURKLFdBQVcsQ0FBQ0csV0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRSxLQUFLO2dCQUFFQyxVQUFVLEVBQUU7Y0FBSyxDQUFDLENBQUM7Y0FDNUVMLFdBQVcsQ0FBQ0csV0FBVyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRTtjQUFNLENBQUMsQ0FBQztjQUNoRUosV0FBVyxDQUFDRyxXQUFXLENBQUMsZUFBZSxFQUFFLGVBQWUsRUFBRTtnQkFBRUMsTUFBTSxFQUFFO2NBQUssQ0FBQyxDQUFDO2NBQzNFakwsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7WUFDbEMsQ0FBQztZQUVEb0ssT0FBTyxDQUFDYyxTQUFTLEdBQUcsVUFBQ1YsS0FBSyxFQUFLO2NBQzdCUCxFQUFFLEdBQUdPLEtBQUssQ0FBQ0MsTUFBTSxDQUFDL0osTUFBTTtjQUN4Qi9FLE9BQU8sQ0FBQ3NPLEVBQUUsQ0FBQztZQUNiLENBQUM7VUFDSCxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQXRLLFFBQUEsQ0FBQW5CLElBQUE7TUFBQTtJQUFBLEdBQUFlLE9BQUE7RUFBQSxDQUNIO0VBQUEsT0FBQTRLLGFBQUEsQ0FBQWpMLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBRU0sU0FBZWtNLGFBQWFBLENBQUE7RUFBQSxPQUFBQyxjQUFBLENBQUFsTSxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQWdCbEMsU0FBQW1NLGVBQUE7RUFBQUEsY0FBQSxHQUFBcE0saUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBaEJNLFNBQUE0QyxTQUFBO0lBQUEsT0FBQWhJLG1CQUFBLEdBQUF1QixJQUFBLFVBQUE0RyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQXZDLElBQUEsR0FBQXVDLFNBQUEsQ0FBQWxFLElBQUE7UUFBQTtVQUFBa0UsU0FBQSxDQUFBbEUsSUFBQTtVQUFBLE9BQ0N3TixZQUFZLENBQUMsQ0FBQztRQUFBO1VBQUEsT0FBQXRKLFNBQUEsQ0FBQXJFLE1BQUEsV0FDYixJQUFJMEIsT0FBTyxDQUFDLFVBQUN0QyxPQUFPLEVBQUUwRixNQUFNLEVBQUs7WUFDdEMsSUFBTWdLLFdBQVcsR0FBR3BCLEVBQUUsQ0FBQ29CLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFdBQVcsQ0FBQztZQUM1RCxJQUFNVCxXQUFXLEdBQUdTLFdBQVcsQ0FBQ1QsV0FBVyxDQUFDLFNBQVMsQ0FBQztZQUN0RCxJQUFNUixPQUFPLEdBQUdRLFdBQVcsQ0FBQ1UsS0FBSyxDQUFDLENBQUM7WUFDbkN2TCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztZQUVoQ29LLE9BQU8sQ0FBQ2MsU0FBUyxHQUFHLFlBQU07Y0FDeEJ2UCxPQUFPLENBQUMsQ0FBQztZQUNYLENBQUM7WUFFRHlPLE9BQU8sQ0FBQ0csT0FBTyxHQUFHLFVBQUNDLEtBQUssRUFBSztjQUMzQm5KLE1BQU0sQ0FBQ21KLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDaEMsQ0FBQztVQUNILENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBOUosU0FBQSxDQUFBcEMsSUFBQTtNQUFBO0lBQUEsR0FBQWdDLFFBQUE7RUFBQSxDQUNIO0VBQUEsT0FBQTRLLGNBQUEsQ0FBQWxNLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBRU0sU0FBZXNNLGNBQWNBLENBQUFqTCxFQUFBO0VBQUEsT0FBQWtMLGVBQUEsQ0FBQXRNLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBb0NuQyxTQUFBdU0sZ0JBQUE7RUFBQUEsZUFBQSxHQUFBeE0saUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBcENNLFNBQUE2TixTQUE4QnpJLElBQUk7SUFBQSxPQUFBeEssbUJBQUEsR0FBQXVCLElBQUEsVUFBQTJSLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBdE4sSUFBQSxHQUFBc04sU0FBQSxDQUFBalAsSUFBQTtRQUFBO1VBQUFpUCxTQUFBLENBQUFqUCxJQUFBO1VBQUEsT0FDakN3TixZQUFZLENBQUMsQ0FBQztRQUFBO1VBQUEsT0FBQXlCLFNBQUEsQ0FBQXBQLE1BQUEsV0FDYixJQUFJMEIsT0FBTyxDQUFDLFVBQUN0QyxPQUFPLEVBQUUwRixNQUFNLEVBQUs7WUFDdEMsSUFBTWdLLFdBQVcsR0FBR3BCLEVBQUUsQ0FBQ29CLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFdBQVcsQ0FBQztZQUM1RCxJQUFNVCxXQUFXLEdBQUdTLFdBQVcsQ0FBQ1QsV0FBVyxDQUFDLFNBQVMsQ0FBQztZQUN0RCxJQUFNZ0IsS0FBSyxHQUFHaEIsV0FBVyxDQUFDZ0IsS0FBSyxDQUFDLGVBQWUsQ0FBQzs7WUFFaEQ7WUFDQSxJQUFNQyxZQUFZLEdBQUdELEtBQUssQ0FBQy9ILEdBQUcsQ0FBQ2IsSUFBSSxDQUFDOEksYUFBYSxDQUFDO1lBRWxERCxZQUFZLENBQUNYLFNBQVMsR0FBRyxVQUFDVixLQUFLLEVBQUs7Y0FDbEMsSUFBSUEsS0FBSyxDQUFDQyxNQUFNLENBQUMvSixNQUFNLEVBQUU7Z0JBQ3ZCO2dCQUNBWCxPQUFPLENBQUNDLEdBQUcsQ0FBQyw4REFBOEQsQ0FBQztnQkFDM0VyRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDYixDQUFDLE1BQU07Z0JBQ0w7Z0JBQ0EsSUFBTXlPLE9BQU8sR0FBR1EsV0FBVyxDQUFDbUIsR0FBRyxDQUFDL0ksSUFBSSxDQUFDO2dCQUVyQ29ILE9BQU8sQ0FBQ2MsU0FBUyxHQUFHLFlBQU07a0JBQ3hCbkwsT0FBTyxDQUFDQyxHQUFHLHFCQUFxQixDQUFDO2tCQUNqQ3JFLE9BQU8sQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBRUR5TyxPQUFPLENBQUNHLE9BQU8sR0FBRyxVQUFDQyxLQUFLLEVBQUs7a0JBQzNCekssT0FBTyxDQUFDc0YsS0FBSyxDQUFDLG9CQUFvQixFQUFFbUYsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQztrQkFDM0RySixNQUFNLENBQUNtSixLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO2dCQUNoQyxDQUFDO2NBQ0g7WUFDRixDQUFDO1lBRURtQixZQUFZLENBQUN0QixPQUFPLEdBQUcsVUFBQ0MsS0FBSyxFQUFLO2NBQ2hDekssT0FBTyxDQUFDc0YsS0FBSyxDQUFDLCtCQUErQixFQUFFbUYsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQztjQUN0RXJKLE1BQU0sQ0FBQ21KLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDaEMsQ0FBQztVQUNILENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBaUIsU0FBQSxDQUFBbk4sSUFBQTtNQUFBO0lBQUEsR0FBQWlOLFFBQUE7RUFBQSxDQUNIO0VBQUEsT0FBQUQsZUFBQSxDQUFBdE0sS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFFTSxTQUFlK00sa0JBQWtCQSxDQUFBO0VBQUEsT0FBQUMsbUJBQUEsQ0FBQS9NLEtBQUEsT0FBQUQsU0FBQTtBQUFBOztBQXFCeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBLFNBQUFnTixvQkFBQTtFQUFBQSxtQkFBQSxHQUFBak4saUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBckJPLFNBQUFzTyxTQUFBO0lBQUEsT0FBQTFULG1CQUFBLEdBQUF1QixJQUFBLFVBQUFvUyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQS9OLElBQUEsR0FBQStOLFNBQUEsQ0FBQTFQLElBQUE7UUFBQTtVQUFBMFAsU0FBQSxDQUFBMVAsSUFBQTtVQUFBLE9BQ0N3TixZQUFZLENBQUMsQ0FBQztRQUFBO1VBQUEsT0FBQWtDLFNBQUEsQ0FBQTdQLE1BQUEsV0FDYixJQUFJMEIsT0FBTyxDQUFDLFVBQUN0QyxPQUFPLEVBQUUwRixNQUFNLEVBQUs7WUFDdEMsSUFBTWdLLFdBQVcsR0FBR3BCLEVBQUUsQ0FBQ29CLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUMzRCxJQUFNVCxXQUFXLEdBQUdTLFdBQVcsQ0FBQ1QsV0FBVyxDQUFDLFNBQVMsQ0FBQztZQUN0RCxJQUFNUixPQUFPLEdBQUdRLFdBQVcsQ0FBQ3lCLE1BQU0sQ0FBQyxDQUFDO1lBRXBDakMsT0FBTyxDQUFDYyxTQUFTLEdBQUcsVUFBQ1YsS0FBSyxFQUFLO2NBQzdCN08sT0FBTyxDQUFDNk8sS0FBSyxDQUFDQyxNQUFNLENBQUMvSixNQUFNLENBQUM7Y0FDNUJYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO1lBQzFDLENBQUM7WUFFRG9LLE9BQU8sQ0FBQ0csT0FBTyxHQUFHLFVBQUNDLEtBQUssRUFBSztjQUMzQm5KLE1BQU0sQ0FBQ21KLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUM7Y0FDOUIzSyxPQUFPLENBQUNzRixLQUFLLENBQUMsbUNBQW1DLEVBQUVtRixLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQzVFLENBQUM7VUFDSCxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQTBCLFNBQUEsQ0FBQTVOLElBQUE7TUFBQTtJQUFBLEdBQUEwTixRQUFBO0VBQUEsQ0FDSDtFQUFBLE9BQUFELG1CQUFBLENBQUEvTSxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQVNNLFNBQWVxTixpQkFBaUJBLENBQUFyTCxHQUFBO0VBQUEsT0FBQXNMLGtCQUFBLENBQUFyTixLQUFBLE9BQUFELFNBQUE7QUFBQTs7QUE0QnZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQSxTQUFBc04sbUJBQUE7RUFBQUEsa0JBQUEsR0FBQXZOLGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQTVCTyxTQUFBNE8sU0FBaUNWLGFBQWE7SUFBQSxJQUFBVCxXQUFBLEVBQUFULFdBQUEsRUFBQWdCLEtBQUEsRUFBQXhCLE9BQUEsRUFBQTFKLE1BQUEsRUFBQStMLE1BQUE7SUFBQSxPQUFBalUsbUJBQUEsR0FBQXVCLElBQUEsVUFBQTJTLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBdE8sSUFBQSxHQUFBc08sU0FBQSxDQUFBalEsSUFBQTtRQUFBO1VBQUFpUSxTQUFBLENBQUFqUSxJQUFBO1VBQUEsT0FFN0N3TixZQUFZLENBQUMsQ0FBQztRQUFBO1VBQUF5QyxTQUFBLENBQUF0TyxJQUFBO1VBR2xCO1VBQ01nTixXQUFXLEdBQUdwQixFQUFFLENBQUNvQixXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxVQUFVLENBQUM7VUFDckRULFdBQVcsR0FBR1MsV0FBVyxDQUFDVCxXQUFXLENBQUMsU0FBUyxDQUFDO1VBQ2hEZ0IsS0FBSyxHQUFHaEIsV0FBVyxDQUFDZ0IsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUVoRDtVQUNNeEIsT0FBTyxHQUFHd0IsS0FBSyxDQUFDL0gsR0FBRyxDQUFDaUksYUFBYSxDQUFDLEVBRXhDO1VBQUFhLFNBQUEsQ0FBQWpRLElBQUE7VUFBQSxPQUNxQmtRLGdCQUFnQixDQUFDeEMsT0FBTyxDQUFDO1FBQUE7VUFBeEMxSixNQUFNLEdBQUFpTSxTQUFBLENBQUF2USxJQUFBO1VBRVo7VUFDTXFRLE1BQU0sR0FBRy9MLE1BQU0sS0FBS3VGLFNBQVMsSUFBSXZGLE1BQU0sS0FBSyxJQUFJLEVBRXREO1VBQUEsT0FBQWlNLFNBQUEsQ0FBQXBRLE1BQUEsV0FFT2tRLE1BQU07UUFBQTtVQUFBRSxTQUFBLENBQUF0TyxJQUFBO1VBQUFzTyxTQUFBLENBQUE3TCxFQUFBLEdBQUE2TCxTQUFBO1VBRWI1TSxPQUFPLENBQUNzRixLQUFLLG9EQUFBQyxNQUFBLENBQW9Ed0csYUFBYSxRQUFBYSxTQUFBLENBQUE3TCxFQUFVLENBQUM7VUFBQyxNQUFBNkwsU0FBQSxDQUFBN0wsRUFBQTtRQUFBO1FBQUE7VUFBQSxPQUFBNkwsU0FBQSxDQUFBbk8sSUFBQTtNQUFBO0lBQUEsR0FBQWdPLFFBQUE7RUFBQSxDQUc3RjtFQUFBLE9BQUFELGtCQUFBLENBQUFyTixLQUFBLE9BQUFELFNBQUE7QUFBQTtBQU9ELFNBQVMyTixnQkFBZ0JBLENBQUN4QyxPQUFPLEVBQUU7RUFDakMsT0FBTyxJQUFJbk0sT0FBTyxDQUFDLFVBQUN0QyxPQUFPLEVBQUUwRixNQUFNLEVBQUs7SUFDdEMrSSxPQUFPLENBQUNjLFNBQVMsR0FBRztNQUFBLE9BQU12UCxPQUFPLENBQUN5TyxPQUFPLENBQUMxSixNQUFNLENBQUM7SUFBQTtJQUNqRDBKLE9BQU8sQ0FBQ0csT0FBTyxHQUFHO01BQUEsT0FBTWxKLE1BQU0sQ0FBQytJLE9BQU8sQ0FBQy9FLEtBQUssQ0FBQztJQUFBO0VBQy9DLENBQUMsQ0FBQztBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNPLFNBQWV0RSxxQkFBcUJBLENBQUFrQixHQUFBLEVBQUFDLEdBQUE7RUFBQSxPQUFBMkssc0JBQUEsQ0FBQTNOLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBVTFDLFNBQUE0Tix1QkFBQTtFQUFBQSxzQkFBQSxHQUFBN04saUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBVk0sU0FBQWtQLFNBQXFDM0wsU0FBUyxFQUFFQyxPQUFPO0lBQUEsSUFBQWlLLFdBQUEsRUFBQVQsV0FBQSxFQUFBZ0IsS0FBQSxFQUFBbUIsS0FBQSxFQUFBM0MsT0FBQSxFQUFBMUosTUFBQTtJQUFBLE9BQUFsSSxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBaVQsVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUE1TyxJQUFBLEdBQUE0TyxTQUFBLENBQUF2USxJQUFBO1FBQUE7VUFBQXVRLFNBQUEsQ0FBQXZRLElBQUE7VUFBQSxPQUN0RHdOLFlBQVksQ0FBQyxDQUFDO1FBQUE7VUFDZG1CLFdBQVcsR0FBR3BCLEVBQUUsQ0FBQ29CLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQVUsQ0FBQztVQUNyRFQsV0FBVyxHQUFHUyxXQUFXLENBQUNULFdBQVcsQ0FBQyxTQUFTLENBQUM7VUFDaERnQixLQUFLLEdBQUdoQixXQUFXLENBQUNnQixLQUFLLENBQUMsZUFBZSxDQUFDO1VBQzFDbUIsS0FBSyxHQUFHRyxXQUFXLENBQUNDLEtBQUssQ0FBQ2hNLFNBQVMsRUFBRUMsT0FBTyxDQUFDO1VBQzdDZ0osT0FBTyxHQUFHd0IsS0FBSyxDQUFDUyxNQUFNLENBQUNVLEtBQUssQ0FBQztVQUFBRSxTQUFBLENBQUF2USxJQUFBO1VBQUEsT0FFZGtRLGdCQUFnQixDQUFDeEMsT0FBTyxDQUFDO1FBQUE7VUFBeEMxSixNQUFNLEdBQUF1TSxTQUFBLENBQUE3USxJQUFBO1VBQUEsT0FBQTZRLFNBQUEsQ0FBQTFRLE1BQUEsV0FDTG1FLE1BQU07UUFBQTtRQUFBO1VBQUEsT0FBQXVNLFNBQUEsQ0FBQXpPLElBQUE7TUFBQTtJQUFBLEdBQUFzTyxRQUFBO0VBQUEsQ0FDZDtFQUFBLE9BQUFELHNCQUFBLENBQUEzTixLQUFBLE9BQUFELFNBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUMxS0Q7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDTEEscUpBQUF6RyxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUyxLQUFBLEVBQUFQLENBQUEsRUFBQWlCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFwQixDQUFBLENBQUFELENBQUEsV0FBQWtCLE1BQUEsbUJBQUFqQixDQUFBLElBQUFpQixNQUFBLFlBQUFBLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQW9CLEtBQUFyQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFLLENBQUEsR0FBQVYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFNBQUEsWUFBQW1CLFNBQUEsR0FBQXZCLENBQUEsR0FBQXVCLFNBQUEsRUFBQVgsQ0FBQSxHQUFBVCxNQUFBLENBQUFxQixNQUFBLENBQUFkLENBQUEsQ0FBQU4sU0FBQSxHQUFBVSxDQUFBLE9BQUFXLE9BQUEsQ0FBQXBCLENBQUEsZ0JBQUFFLENBQUEsQ0FBQUssQ0FBQSxlQUFBSCxLQUFBLEVBQUFpQixnQkFBQSxDQUFBekIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFZLENBQUEsTUFBQUYsQ0FBQSxhQUFBZSxTQUFBMUIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsbUJBQUEwQixJQUFBLFlBQUFDLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTZCLElBQUEsQ0FBQTlCLENBQUEsRUFBQUUsQ0FBQSxjQUFBRCxDQUFBLGFBQUEyQixJQUFBLFdBQUFDLEdBQUEsRUFBQTVCLENBQUEsUUFBQUQsQ0FBQSxDQUFBc0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFTLENBQUEscUJBQUFDLENBQUEscUJBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFaLFVBQUEsY0FBQWEsa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsQ0FBQSxPQUFBcEIsTUFBQSxDQUFBb0IsQ0FBQSxFQUFBMUIsQ0FBQSxxQ0FBQTJCLENBQUEsR0FBQXBDLE1BQUEsQ0FBQXFDLGNBQUEsRUFBQUMsQ0FBQSxHQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUEsQ0FBQSxDQUFBRyxNQUFBLFFBQUFELENBQUEsSUFBQUEsQ0FBQSxLQUFBdkMsQ0FBQSxJQUFBRyxDQUFBLENBQUF5QixJQUFBLENBQUFXLENBQUEsRUFBQTdCLENBQUEsTUFBQTBCLENBQUEsR0FBQUcsQ0FBQSxPQUFBRSxDQUFBLEdBQUFOLDBCQUFBLENBQUFqQyxTQUFBLEdBQUFtQixTQUFBLENBQUFuQixTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWMsQ0FBQSxZQUFBTSxzQkFBQTNDLENBQUEsZ0NBQUE0QyxPQUFBLFdBQUE3QyxDQUFBLElBQUFrQixNQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsWUFBQUMsQ0FBQSxnQkFBQTZDLE9BQUEsQ0FBQTlDLENBQUEsRUFBQUMsQ0FBQSxzQkFBQThDLGNBQUE5QyxDQUFBLEVBQUFELENBQUEsYUFBQWdELE9BQUE5QyxDQUFBLEVBQUFLLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQWEsUUFBQSxDQUFBMUIsQ0FBQSxDQUFBQyxDQUFBLEdBQUFELENBQUEsRUFBQU0sQ0FBQSxtQkFBQU8sQ0FBQSxDQUFBYyxJQUFBLFFBQUFaLENBQUEsR0FBQUYsQ0FBQSxDQUFBZSxHQUFBLEVBQUFFLENBQUEsR0FBQWYsQ0FBQSxDQUFBUCxLQUFBLFNBQUFzQixDQUFBLGdCQUFBa0IsT0FBQSxDQUFBbEIsQ0FBQSxLQUFBMUIsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBQyxDQUFBLGVBQUEvQixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLENBQUFvQixPQUFBLEVBQUFDLElBQUEsV0FBQW5ELENBQUEsSUFBQStDLE1BQUEsU0FBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBWCxDQUFBLElBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxRQUFBWixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLEVBQUFxQixJQUFBLFdBQUFuRCxDQUFBLElBQUFlLENBQUEsQ0FBQVAsS0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsQ0FBQU0sQ0FBQSxnQkFBQWYsQ0FBQSxXQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFlLEdBQUEsU0FBQTNCLENBQUEsRUFBQUssQ0FBQSxvQkFBQUUsS0FBQSxXQUFBQSxNQUFBUixDQUFBLEVBQUFJLENBQUEsYUFBQWdELDJCQUFBLGVBQUFyRCxDQUFBLFdBQUFBLENBQUEsRUFBQUUsQ0FBQSxJQUFBOEMsTUFBQSxDQUFBL0MsQ0FBQSxFQUFBSSxDQUFBLEVBQUFMLENBQUEsRUFBQUUsQ0FBQSxnQkFBQUEsQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUEsQ0FBQWtELElBQUEsQ0FBQUMsMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUEzQixpQkFBQTFCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFFLENBQUEsR0FBQXdCLENBQUEsbUJBQUFyQixDQUFBLEVBQUFFLENBQUEsUUFBQUwsQ0FBQSxLQUFBMEIsQ0FBQSxRQUFBcUIsS0FBQSxzQ0FBQS9DLENBQUEsS0FBQTJCLENBQUEsb0JBQUF4QixDQUFBLFFBQUFFLENBQUEsV0FBQUgsS0FBQSxFQUFBUixDQUFBLEVBQUFzRCxJQUFBLGVBQUFsRCxDQUFBLENBQUFtRCxNQUFBLEdBQUE5QyxDQUFBLEVBQUFMLENBQUEsQ0FBQXdCLEdBQUEsR0FBQWpCLENBQUEsVUFBQUUsQ0FBQSxHQUFBVCxDQUFBLENBQUFvRCxRQUFBLE1BQUEzQyxDQUFBLFFBQUFFLENBQUEsR0FBQTBDLG1CQUFBLENBQUE1QyxDQUFBLEVBQUFULENBQUEsT0FBQVcsQ0FBQSxRQUFBQSxDQUFBLEtBQUFtQixDQUFBLG1CQUFBbkIsQ0FBQSxxQkFBQVgsQ0FBQSxDQUFBbUQsTUFBQSxFQUFBbkQsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBdUQsS0FBQSxHQUFBdkQsQ0FBQSxDQUFBd0IsR0FBQSxzQkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsUUFBQWpELENBQUEsS0FBQXdCLENBQUEsUUFBQXhCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQXdCLEdBQUEsRUFBQXhCLENBQUEsQ0FBQXdELGlCQUFBLENBQUF4RCxDQUFBLENBQUF3QixHQUFBLHVCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxJQUFBbkQsQ0FBQSxDQUFBeUQsTUFBQSxXQUFBekQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBdEIsQ0FBQSxHQUFBMEIsQ0FBQSxNQUFBSyxDQUFBLEdBQUFYLFFBQUEsQ0FBQTNCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLG9CQUFBaUMsQ0FBQSxDQUFBVixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQWtELElBQUEsR0FBQXJCLENBQUEsR0FBQUYsQ0FBQSxFQUFBTSxDQUFBLENBQUFULEdBQUEsS0FBQU0sQ0FBQSxxQkFBQTFCLEtBQUEsRUFBQTZCLENBQUEsQ0FBQVQsR0FBQSxFQUFBMEIsSUFBQSxFQUFBbEQsQ0FBQSxDQUFBa0QsSUFBQSxrQkFBQWpCLENBQUEsQ0FBQVYsSUFBQSxLQUFBckIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBbUQsTUFBQSxZQUFBbkQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBUyxDQUFBLENBQUFULEdBQUEsbUJBQUE2QixvQkFBQTFELENBQUEsRUFBQUUsQ0FBQSxRQUFBRyxDQUFBLEdBQUFILENBQUEsQ0FBQXNELE1BQUEsRUFBQWpELENBQUEsR0FBQVAsQ0FBQSxDQUFBYSxRQUFBLENBQUFSLENBQUEsT0FBQUUsQ0FBQSxLQUFBTixDQUFBLFNBQUFDLENBQUEsQ0FBQXVELFFBQUEscUJBQUFwRCxDQUFBLElBQUFMLENBQUEsQ0FBQWEsUUFBQSxlQUFBWCxDQUFBLENBQUFzRCxNQUFBLGFBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEVBQUF5RCxtQkFBQSxDQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsQ0FBQXNELE1BQUEsa0JBQUFuRCxDQUFBLEtBQUFILENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsdUNBQUExRCxDQUFBLGlCQUFBOEIsQ0FBQSxNQUFBekIsQ0FBQSxHQUFBaUIsUUFBQSxDQUFBcEIsQ0FBQSxFQUFBUCxDQUFBLENBQUFhLFFBQUEsRUFBQVgsQ0FBQSxDQUFBMkIsR0FBQSxtQkFBQW5CLENBQUEsQ0FBQWtCLElBQUEsU0FBQTFCLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQW5CLENBQUEsQ0FBQW1CLEdBQUEsRUFBQTNCLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsTUFBQXZCLENBQUEsR0FBQUYsQ0FBQSxDQUFBbUIsR0FBQSxTQUFBakIsQ0FBQSxHQUFBQSxDQUFBLENBQUEyQyxJQUFBLElBQUFyRCxDQUFBLENBQUFGLENBQUEsQ0FBQWdFLFVBQUEsSUFBQXBELENBQUEsQ0FBQUgsS0FBQSxFQUFBUCxDQUFBLENBQUErRCxJQUFBLEdBQUFqRSxDQUFBLENBQUFrRSxPQUFBLGVBQUFoRSxDQUFBLENBQUFzRCxNQUFBLEtBQUF0RCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEdBQUFDLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsSUFBQXZCLENBQUEsSUFBQVYsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSxzQ0FBQTdELENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsY0FBQWdDLGFBQUFsRSxDQUFBLFFBQUFELENBQUEsS0FBQW9FLE1BQUEsRUFBQW5FLENBQUEsWUFBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFxRSxRQUFBLEdBQUFwRSxDQUFBLFdBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0UsVUFBQSxHQUFBckUsQ0FBQSxLQUFBRCxDQUFBLENBQUF1RSxRQUFBLEdBQUF0RSxDQUFBLFdBQUF1RSxVQUFBLENBQUFDLElBQUEsQ0FBQXpFLENBQUEsY0FBQTBFLGNBQUF6RSxDQUFBLFFBQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBMEUsVUFBQSxRQUFBM0UsQ0FBQSxDQUFBNEIsSUFBQSxvQkFBQTVCLENBQUEsQ0FBQTZCLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTBFLFVBQUEsR0FBQTNFLENBQUEsYUFBQXlCLFFBQUF4QixDQUFBLFNBQUF1RSxVQUFBLE1BQUFKLE1BQUEsYUFBQW5FLENBQUEsQ0FBQTRDLE9BQUEsQ0FBQXNCLFlBQUEsY0FBQVMsS0FBQSxpQkFBQWxDLE9BQUExQyxDQUFBLFFBQUFBLENBQUEsV0FBQUEsQ0FBQSxRQUFBRSxDQUFBLEdBQUFGLENBQUEsQ0FBQVksQ0FBQSxPQUFBVixDQUFBLFNBQUFBLENBQUEsQ0FBQTRCLElBQUEsQ0FBQTlCLENBQUEsNEJBQUFBLENBQUEsQ0FBQWlFLElBQUEsU0FBQWpFLENBQUEsT0FBQTZFLEtBQUEsQ0FBQTdFLENBQUEsQ0FBQThFLE1BQUEsU0FBQXZFLENBQUEsT0FBQUcsQ0FBQSxZQUFBdUQsS0FBQSxhQUFBMUQsQ0FBQSxHQUFBUCxDQUFBLENBQUE4RSxNQUFBLE9BQUF6RSxDQUFBLENBQUF5QixJQUFBLENBQUE5QixDQUFBLEVBQUFPLENBQUEsVUFBQTBELElBQUEsQ0FBQXhELEtBQUEsR0FBQVQsQ0FBQSxDQUFBTyxDQUFBLEdBQUEwRCxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxTQUFBQSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFlBQUF2RCxDQUFBLENBQUF1RCxJQUFBLEdBQUF2RCxDQUFBLGdCQUFBcUQsU0FBQSxDQUFBZCxPQUFBLENBQUFqRCxDQUFBLGtDQUFBb0MsaUJBQUEsQ0FBQWhDLFNBQUEsR0FBQWlDLDBCQUFBLEVBQUE5QixDQUFBLENBQUFvQyxDQUFBLG1CQUFBbEMsS0FBQSxFQUFBNEIsMEJBQUEsRUFBQWpCLFlBQUEsU0FBQWIsQ0FBQSxDQUFBOEIsMEJBQUEsbUJBQUE1QixLQUFBLEVBQUEyQixpQkFBQSxFQUFBaEIsWUFBQSxTQUFBZ0IsaUJBQUEsQ0FBQTJDLFdBQUEsR0FBQTdELE1BQUEsQ0FBQW1CLDBCQUFBLEVBQUFyQixDQUFBLHdCQUFBaEIsQ0FBQSxDQUFBZ0YsbUJBQUEsYUFBQS9FLENBQUEsUUFBQUQsQ0FBQSx3QkFBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFnRixXQUFBLFdBQUFqRixDQUFBLEtBQUFBLENBQUEsS0FBQW9DLGlCQUFBLDZCQUFBcEMsQ0FBQSxDQUFBK0UsV0FBQSxJQUFBL0UsQ0FBQSxDQUFBa0YsSUFBQSxPQUFBbEYsQ0FBQSxDQUFBbUYsSUFBQSxhQUFBbEYsQ0FBQSxXQUFBRSxNQUFBLENBQUFpRixjQUFBLEdBQUFqRixNQUFBLENBQUFpRixjQUFBLENBQUFuRixDQUFBLEVBQUFvQywwQkFBQSxLQUFBcEMsQ0FBQSxDQUFBb0YsU0FBQSxHQUFBaEQsMEJBQUEsRUFBQW5CLE1BQUEsQ0FBQWpCLENBQUEsRUFBQWUsQ0FBQSx5QkFBQWYsQ0FBQSxDQUFBRyxTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQW1CLENBQUEsR0FBQTFDLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0YsS0FBQSxhQUFBckYsQ0FBQSxhQUFBa0QsT0FBQSxFQUFBbEQsQ0FBQSxPQUFBMkMscUJBQUEsQ0FBQUcsYUFBQSxDQUFBM0MsU0FBQSxHQUFBYyxNQUFBLENBQUE2QixhQUFBLENBQUEzQyxTQUFBLEVBQUFVLENBQUEsaUNBQUFkLENBQUEsQ0FBQStDLGFBQUEsR0FBQUEsYUFBQSxFQUFBL0MsQ0FBQSxDQUFBdUYsS0FBQSxhQUFBdEYsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGVBQUFBLENBQUEsS0FBQUEsQ0FBQSxHQUFBOEUsT0FBQSxPQUFBNUUsQ0FBQSxPQUFBbUMsYUFBQSxDQUFBekIsSUFBQSxDQUFBckIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxHQUFBRyxDQUFBLFVBQUFWLENBQUEsQ0FBQWdGLG1CQUFBLENBQUE5RSxDQUFBLElBQUFVLENBQUEsR0FBQUEsQ0FBQSxDQUFBcUQsSUFBQSxHQUFBYixJQUFBLFdBQUFuRCxDQUFBLFdBQUFBLENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQVEsS0FBQSxHQUFBRyxDQUFBLENBQUFxRCxJQUFBLFdBQUFyQixxQkFBQSxDQUFBRCxDQUFBLEdBQUF6QixNQUFBLENBQUF5QixDQUFBLEVBQUEzQixDQUFBLGdCQUFBRSxNQUFBLENBQUF5QixDQUFBLEVBQUEvQixDQUFBLGlDQUFBTSxNQUFBLENBQUF5QixDQUFBLDZEQUFBM0MsQ0FBQSxDQUFBeUYsSUFBQSxhQUFBeEYsQ0FBQSxRQUFBRCxDQUFBLEdBQUFHLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBQyxDQUFBLGdCQUFBRyxDQUFBLElBQUFMLENBQUEsRUFBQUUsQ0FBQSxDQUFBdUUsSUFBQSxDQUFBcEUsQ0FBQSxVQUFBSCxDQUFBLENBQUF3RixPQUFBLGFBQUF6QixLQUFBLFdBQUEvRCxDQUFBLENBQUE0RSxNQUFBLFNBQUE3RSxDQUFBLEdBQUFDLENBQUEsQ0FBQXlGLEdBQUEsUUFBQTFGLENBQUEsSUFBQUQsQ0FBQSxTQUFBaUUsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxXQUFBQSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxRQUFBakUsQ0FBQSxDQUFBMEMsTUFBQSxHQUFBQSxNQUFBLEVBQUFqQixPQUFBLENBQUFyQixTQUFBLEtBQUE2RSxXQUFBLEVBQUF4RCxPQUFBLEVBQUFtRCxLQUFBLFdBQUFBLE1BQUE1RSxDQUFBLGFBQUE0RixJQUFBLFdBQUEzQixJQUFBLFdBQUFOLElBQUEsUUFBQUMsS0FBQSxHQUFBM0QsQ0FBQSxPQUFBc0QsSUFBQSxZQUFBRSxRQUFBLGNBQUFELE1BQUEsZ0JBQUEzQixHQUFBLEdBQUE1QixDQUFBLE9BQUF1RSxVQUFBLENBQUEzQixPQUFBLENBQUE2QixhQUFBLElBQUExRSxDQUFBLFdBQUFFLENBQUEsa0JBQUFBLENBQUEsQ0FBQTJGLE1BQUEsT0FBQXhGLENBQUEsQ0FBQXlCLElBQUEsT0FBQTVCLENBQUEsTUFBQTJFLEtBQUEsRUFBQTNFLENBQUEsQ0FBQTRGLEtBQUEsY0FBQTVGLENBQUEsSUFBQUQsQ0FBQSxNQUFBOEYsSUFBQSxXQUFBQSxLQUFBLFNBQUF4QyxJQUFBLFdBQUF0RCxDQUFBLFFBQUF1RSxVQUFBLElBQUFHLFVBQUEsa0JBQUExRSxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLGNBQUFtRSxJQUFBLEtBQUFuQyxpQkFBQSxXQUFBQSxrQkFBQTdELENBQUEsYUFBQXVELElBQUEsUUFBQXZELENBQUEsTUFBQUUsQ0FBQSxrQkFBQStGLE9BQUE1RixDQUFBLEVBQUFFLENBQUEsV0FBQUssQ0FBQSxDQUFBZ0IsSUFBQSxZQUFBaEIsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBRSxDQUFBLENBQUErRCxJQUFBLEdBQUE1RCxDQUFBLEVBQUFFLENBQUEsS0FBQUwsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxLQUFBTSxDQUFBLGFBQUFBLENBQUEsUUFBQWlFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBdkUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFHLENBQUEsUUFBQThELFVBQUEsQ0FBQWpFLENBQUEsR0FBQUssQ0FBQSxHQUFBRixDQUFBLENBQUFpRSxVQUFBLGlCQUFBakUsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBNkIsTUFBQSxhQUFBdkYsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBd0IsSUFBQSxRQUFBOUUsQ0FBQSxHQUFBVCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLGVBQUFNLENBQUEsR0FBQVgsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxxQkFBQUksQ0FBQSxJQUFBRSxDQUFBLGFBQUE0RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLGdCQUFBdUIsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxjQUFBeEQsQ0FBQSxhQUFBOEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxxQkFBQXJELENBQUEsUUFBQXNDLEtBQUEscURBQUFzQyxJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLFlBQUFSLE1BQUEsV0FBQUEsT0FBQTdELENBQUEsRUFBQUQsQ0FBQSxhQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUFNLE1BQUEsTUFBQTVFLENBQUEsU0FBQUEsQ0FBQSxRQUFBSyxDQUFBLFFBQUFpRSxVQUFBLENBQUF0RSxDQUFBLE9BQUFLLENBQUEsQ0FBQTZELE1BQUEsU0FBQXdCLElBQUEsSUFBQXZGLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXZCLENBQUEsd0JBQUFxRixJQUFBLEdBQUFyRixDQUFBLENBQUErRCxVQUFBLFFBQUE1RCxDQUFBLEdBQUFILENBQUEsYUFBQUcsQ0FBQSxpQkFBQVQsQ0FBQSxtQkFBQUEsQ0FBQSxLQUFBUyxDQUFBLENBQUEwRCxNQUFBLElBQUFwRSxDQUFBLElBQUFBLENBQUEsSUFBQVUsQ0FBQSxDQUFBNEQsVUFBQSxLQUFBNUQsQ0FBQSxjQUFBRSxDQUFBLEdBQUFGLENBQUEsR0FBQUEsQ0FBQSxDQUFBaUUsVUFBQSxjQUFBL0QsQ0FBQSxDQUFBZ0IsSUFBQSxHQUFBM0IsQ0FBQSxFQUFBVyxDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFVLENBQUEsU0FBQThDLE1BQUEsZ0JBQUFTLElBQUEsR0FBQXZELENBQUEsQ0FBQTRELFVBQUEsRUFBQW5DLENBQUEsU0FBQStELFFBQUEsQ0FBQXRGLENBQUEsTUFBQXNGLFFBQUEsV0FBQUEsU0FBQWpHLENBQUEsRUFBQUQsQ0FBQSxvQkFBQUMsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxxQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsbUJBQUEzQixDQUFBLENBQUEyQixJQUFBLFFBQUFxQyxJQUFBLEdBQUFoRSxDQUFBLENBQUE0QixHQUFBLGdCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxTQUFBb0UsSUFBQSxRQUFBbkUsR0FBQSxHQUFBNUIsQ0FBQSxDQUFBNEIsR0FBQSxPQUFBMkIsTUFBQSxrQkFBQVMsSUFBQSx5QkFBQWhFLENBQUEsQ0FBQTJCLElBQUEsSUFBQTVCLENBQUEsVUFBQWlFLElBQUEsR0FBQWpFLENBQUEsR0FBQW1DLENBQUEsS0FBQWdFLE1BQUEsV0FBQUEsT0FBQWxHLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFvRSxVQUFBLEtBQUFyRSxDQUFBLGNBQUFpRyxRQUFBLENBQUFoRyxDQUFBLENBQUF5RSxVQUFBLEVBQUF6RSxDQUFBLENBQUFxRSxRQUFBLEdBQUFHLGFBQUEsQ0FBQXhFLENBQUEsR0FBQWlDLENBQUEseUJBQUFpRSxPQUFBbkcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQWtFLE1BQUEsS0FBQW5FLENBQUEsUUFBQUksQ0FBQSxHQUFBSCxDQUFBLENBQUF5RSxVQUFBLGtCQUFBdEUsQ0FBQSxDQUFBdUIsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUF3QixHQUFBLEVBQUE2QyxhQUFBLENBQUF4RSxDQUFBLFlBQUFLLENBQUEsWUFBQStDLEtBQUEsOEJBQUErQyxhQUFBLFdBQUFBLGNBQUFyRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxnQkFBQW9ELFFBQUEsS0FBQTVDLFFBQUEsRUFBQTZCLE1BQUEsQ0FBQTFDLENBQUEsR0FBQWdFLFVBQUEsRUFBQTlELENBQUEsRUFBQWdFLE9BQUEsRUFBQTdELENBQUEsb0JBQUFtRCxNQUFBLFVBQUEzQixHQUFBLEdBQUE1QixDQUFBLEdBQUFrQyxDQUFBLE9BQUFuQyxDQUFBO0FBQUEsU0FBQXNHLG1CQUFBakcsQ0FBQSxFQUFBSixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBSyxDQUFBLEVBQUFLLENBQUEsRUFBQUUsQ0FBQSxjQUFBSixDQUFBLEdBQUFMLENBQUEsQ0FBQU8sQ0FBQSxFQUFBRSxDQUFBLEdBQUFFLENBQUEsR0FBQU4sQ0FBQSxDQUFBRCxLQUFBLFdBQUFKLENBQUEsZ0JBQUFMLENBQUEsQ0FBQUssQ0FBQSxLQUFBSyxDQUFBLENBQUE2QyxJQUFBLEdBQUF0RCxDQUFBLENBQUFlLENBQUEsSUFBQXdFLE9BQUEsQ0FBQXRDLE9BQUEsQ0FBQWxDLENBQUEsRUFBQW9DLElBQUEsQ0FBQWxELENBQUEsRUFBQUssQ0FBQTtBQUFBLFNBQUFnRyxrQkFBQWxHLENBQUEsNkJBQUFKLENBQUEsU0FBQUQsQ0FBQSxHQUFBd0csU0FBQSxhQUFBaEIsT0FBQSxXQUFBdEYsQ0FBQSxFQUFBSyxDQUFBLFFBQUFLLENBQUEsR0FBQVAsQ0FBQSxDQUFBb0csS0FBQSxDQUFBeEcsQ0FBQSxFQUFBRCxDQUFBLFlBQUEwRyxNQUFBckcsQ0FBQSxJQUFBaUcsa0JBQUEsQ0FBQTFGLENBQUEsRUFBQVYsQ0FBQSxFQUFBSyxDQUFBLEVBQUFtRyxLQUFBLEVBQUFDLE1BQUEsVUFBQXRHLENBQUEsY0FBQXNHLE9BQUF0RyxDQUFBLElBQUFpRyxrQkFBQSxDQUFBMUYsQ0FBQSxFQUFBVixDQUFBLEVBQUFLLENBQUEsRUFBQW1HLEtBQUEsRUFBQUMsTUFBQSxXQUFBdEcsQ0FBQSxLQUFBcUcsS0FBQTtBQURnRDtBQUNPO0FBQ1U7QUFDTTtBQUNqRDtBQUN0QixJQUFJZ0MsU0FBUyxFQUFFQyxPQUFPOztBQUV0QjtBQUNBLElBQUltQixlQUFlLEdBQUcsRUFBRTtBQUV4QmlFLFFBQVEsQ0FBQ3ZHLGdCQUFnQixDQUFDLGtCQUFrQixlQUFBakIsaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBQUUsU0FBQTJCLFFBQUE7RUFBQSxPQUFBL0csbUJBQUEsR0FBQXVCLElBQUEsVUFBQTJGLFNBQUFDLFFBQUE7SUFBQSxrQkFBQUEsUUFBQSxDQUFBdEIsSUFBQSxHQUFBc0IsUUFBQSxDQUFBakQsSUFBQTtNQUFBO1FBQzFDMFEsbUJBQW1CLENBQUMsQ0FBQztRQUNyQkMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsQkMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNuQjtRQUFBM04sUUFBQSxDQUFBakQsSUFBQTtRQUFBLE9BQ002USx5QkFBeUIsQ0FBQyxDQUFDO01BQUE7UUFDakNDLDhCQUE4QixDQUFDLENBQUM7UUFDaENDLDZCQUE2QixDQUFDLENBQUM7UUFDL0JuSCwyREFBYyxDQUFDLENBQUM7UUFFaEJFLFFBQVEsQ0FBQ2tELGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDekosZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07VUFDeEV5TixXQUFXLENBQUMsQ0FBQztRQUNmLENBQUMsQ0FBQztRQUVGbEgsUUFBUSxDQUFDa0QsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUN6SixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtVQUN4RXVHLFFBQVEsQ0FBQ08sSUFBSSxDQUFDRyxTQUFTLENBQUN5RyxNQUFNLENBQUMsV0FBVyxDQUFDO1VBQzNDO1VBQ0EsSUFBSW5ILFFBQVEsQ0FBQ08sSUFBSSxDQUFDRyxTQUFTLENBQUMwRyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDL0MzRSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO1VBQ3pDLENBQUMsTUFBTTtZQUNIRCxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO1VBQzFDO1FBQ0osQ0FBQyxDQUFDOztRQUVGO1FBQ0FYLE1BQU0sQ0FBQ3RJLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07VUFDOUMsSUFBTTROLFVBQVUsR0FBRzVFLFlBQVksQ0FBQ0ssT0FBTyxDQUFDLE9BQU8sQ0FBQztVQUNoRCxJQUFJdUUsVUFBVSxLQUFLLE1BQU0sRUFBRTtZQUN2QnJILFFBQVEsQ0FBQ08sSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7VUFDNUM7UUFDSixDQUFDLENBQUM7TUFBQztNQUFBO1FBQUEsT0FBQXhILFFBQUEsQ0FBQW5CLElBQUE7SUFBQTtFQUFBLEdBQUFlLE9BQUE7QUFBQSxDQUNOLEdBQUM7QUFFRixTQUFTOE4sZ0JBQWdCQSxDQUFBLEVBQUc7RUFDMUIsSUFBTVMsYUFBYSxHQUFHdEgsUUFBUSxDQUFDcUQsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUN0RGlFLGFBQWEsQ0FBQ3BGLEVBQUUsR0FBRyxnQkFBZ0I7RUFDbkNvRixhQUFhLENBQUNDLFdBQVcsR0FBRyxTQUFTO0VBRXJDLElBQU1DLFNBQVMsR0FBR3hILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLHVCQUF1QixDQUFDO0VBQ2pFb0gsU0FBUyxDQUFDaEUsV0FBVyxDQUFDOEQsYUFBYSxDQUFDO0FBQ3RDOztBQUVBO0FBQ0EsU0FBU1YsbUJBQW1CQSxDQUFBLEVBQUc7RUFFN0IsSUFBTWEsVUFBVSxHQUFHLENBQ2Y7SUFBRUMsS0FBSyxFQUFFLGVBQWU7SUFBRW5CLEtBQUssRUFBRTtFQUFNLENBQUMsRUFDeEM7SUFBRW1CLEtBQUssRUFBRSxXQUFXO0lBQUVuQixLQUFLLEVBQUU7RUFBSyxDQUFDLEVBQ25DO0lBQUVtQixLQUFLLEVBQUUsWUFBWTtJQUFFbkIsS0FBSyxFQUFFO0VBQUssQ0FBQyxFQUNwQztJQUFFbUIsS0FBSyxFQUFFLGVBQWU7SUFBRW5CLEtBQUssRUFBRTtFQUFLLENBQUMsRUFDdkM7SUFBRW1CLEtBQUssRUFBRSxlQUFlO0lBQUVuQixLQUFLLEVBQUU7RUFBSyxDQUFDO0VBQ3ZDO0VBQ0E7SUFBRW1CLEtBQUssRUFBRSxTQUFTO0lBQUVuQixLQUFLLEVBQUU7RUFBTSxDQUFDLEVBQ2xDO0lBQUVtQixLQUFLLEVBQUUsVUFBVTtJQUFFbkIsS0FBSyxFQUFFO0VBQU0sQ0FBQyxFQUNuQztJQUFFbUIsS0FBSyxFQUFFLE9BQU87SUFBRW5CLEtBQUssRUFBRTtFQUFNLENBQUMsQ0FFbkM7RUFFRCxJQUFNaUIsU0FBUyxHQUFHeEgsUUFBUSxDQUFDSSxhQUFhLENBQUMsdUJBQXVCLENBQUM7RUFFakVxSCxVQUFVLENBQUMzUyxPQUFPLENBQUMsVUFBQTZTLElBQUksRUFBSTtJQUN2QixJQUFNQyxNQUFNLEdBQUc1SCxRQUFRLENBQUNxRCxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQy9DdUUsTUFBTSxDQUFDdEUsU0FBUyxHQUFHLG1CQUFtQjtJQUN0Q3NFLE1BQU0sQ0FBQ0wsV0FBVyxHQUFHSSxJQUFJLENBQUNELEtBQUs7SUFDL0JFLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDLFlBQVksRUFBRUYsSUFBSSxDQUFDcEIsS0FBSyxDQUFDOztJQUU3QztJQUNBLElBQUlvQixJQUFJLENBQUNwQixLQUFLLEtBQUssS0FBSyxFQUFFO01BQ3RCcUIsTUFBTSxDQUFDbEgsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQ3BDO0lBRUFpSCxNQUFNLENBQUNuTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUNuQ3FOLFlBQVksQ0FBQ2EsSUFBSSxDQUFDcEIsS0FBSyxDQUFDO01BQ3hCVyxXQUFXLENBQUMsQ0FBQzs7TUFFYjtNQUNBbEgsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDbkwsT0FBTyxDQUFDLFVBQUFnVCxHQUFHLEVBQUk7UUFDM0RBLEdBQUcsQ0FBQ3BILFNBQVMsQ0FBQ29CLE1BQU0sQ0FBQyxVQUFVLENBQUM7TUFDcEMsQ0FBQyxDQUFDOztNQUVGO01BQ0E4RixNQUFNLENBQUNsSCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDcEMsQ0FBQyxDQUFDO0lBRUY2RyxTQUFTLENBQUNoRSxXQUFXLENBQUNvRSxNQUFNLENBQUM7RUFDakMsQ0FBQyxDQUFDO0FBQ0o7QUFHQSxTQUFTZCxZQUFZQSxDQUFDUCxLQUFLLEVBQUU7RUFDM0IsSUFBTXdCLEtBQUssR0FBRyxJQUFJQyxJQUFJLENBQUMsQ0FBQztFQUV4QixRQUFRekIsS0FBSztJQUNULEtBQUssS0FBSztNQUNONUwsU0FBUyxHQUFHLElBQUlxTixJQUFJLENBQUNELEtBQUssQ0FBQztNQUMzQnBOLFNBQVMsQ0FBQ3NOLE9BQU8sQ0FBQ0YsS0FBSyxDQUFDRyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUN0Q3ROLE9BQU8sR0FBR21OLEtBQUs7TUFDZjtJQUNKLEtBQUssSUFBSTtNQUNMcE4sU0FBUyxHQUFHLElBQUlxTixJQUFJLENBQUNELEtBQUssQ0FBQztNQUMzQnBOLFNBQVMsQ0FBQ3NOLE9BQU8sQ0FBQ0YsS0FBSyxDQUFDRyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUN0Q3ROLE9BQU8sR0FBR21OLEtBQUs7TUFDZjtJQUNKLEtBQUssSUFBSTtNQUNMcE4sU0FBUyxHQUFHLElBQUlxTixJQUFJLENBQUNELEtBQUssQ0FBQztNQUMzQnBOLFNBQVMsQ0FBQ3dOLFFBQVEsQ0FBQ0osS0FBSyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUN4Q3hOLE9BQU8sR0FBR21OLEtBQUs7TUFDZjtJQUNKLEtBQUssSUFBSTtNQUNMcE4sU0FBUyxHQUFHLElBQUlxTixJQUFJLENBQUNELEtBQUssQ0FBQztNQUMzQnBOLFNBQVMsQ0FBQ3dOLFFBQVEsQ0FBQ0osS0FBSyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUN4Q3hOLE9BQU8sR0FBR21OLEtBQUs7TUFDZjtJQUNKLEtBQUssSUFBSTtNQUNMcE4sU0FBUyxHQUFHLElBQUlxTixJQUFJLENBQUNELEtBQUssQ0FBQztNQUMzQnBOLFNBQVMsQ0FBQ3dOLFFBQVEsQ0FBQ0osS0FBSyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUN4Q3hOLE9BQU8sR0FBR21OLEtBQUs7TUFDZjtJQUNKLEtBQUssS0FBSztNQUNOcE4sU0FBUyxHQUFHLElBQUlxTixJQUFJLENBQUNELEtBQUssQ0FBQ00sV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQy9Dek4sT0FBTyxHQUFHLElBQUlvTixJQUFJLENBQUNELEtBQUssQ0FBQ00sV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQzdDO0lBQ0osS0FBSyxLQUFLO01BQ04xTixTQUFTLEdBQUcsSUFBSXFOLElBQUksQ0FBQ0QsS0FBSyxDQUFDTSxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDL0N6TixPQUFPLEdBQUcsSUFBSW9OLElBQUksQ0FBQ0QsS0FBSyxDQUFDTSxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDN0M7SUFDSixLQUFLLEtBQUs7TUFDTjFOLFNBQVMsR0FBRyxJQUFJcU4sSUFBSSxDQUFDRCxLQUFLLENBQUNNLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUMvQ3pOLE9BQU8sR0FBRyxJQUFJb04sSUFBSSxDQUFDRCxLQUFLLENBQUNNLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUM3QztJQUNKO01BQ0kxTixTQUFTLEdBQUdvTixLQUFLO01BQ2pCbk4sT0FBTyxHQUFHbU4sS0FBSztFQUN2QjtFQUVBLElBQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJQyxJQUFJLEVBQUs7SUFDekIsSUFBTUMsSUFBSSxHQUFHRCxJQUFJLENBQUNGLFdBQVcsQ0FBQyxDQUFDO0lBQy9CLElBQU1JLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSUYsSUFBSSxDQUFDSCxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFclEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELElBQU0yUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUdILElBQUksQ0FBQ0wsT0FBTyxDQUFDLENBQUMsRUFBRW5RLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxVQUFBK0csTUFBQSxDQUFVMEosSUFBSSxPQUFBMUosTUFBQSxDQUFJMkosS0FBSyxPQUFBM0osTUFBQSxDQUFJNEosR0FBRztFQUNsQyxDQUFDO0VBRUQxSSxRQUFRLENBQUNrRCxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQ3FFLFdBQVcsR0FBR2UsVUFBVSxDQUFDM04sU0FBUyxDQUFDO0VBQ2pGcUYsUUFBUSxDQUFDa0QsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUNxRSxXQUFXLEdBQUdlLFVBQVUsQ0FBQzFOLE9BQU8sQ0FBQztBQUMvRTs7QUFHRTtBQUFBLFNBQ2FvTSw4QkFBOEJBLENBQUE7RUFBQSxPQUFBMkIsK0JBQUEsQ0FBQWpRLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBQUEsU0FBQWtRLGdDQUFBO0VBQUFBLCtCQUFBLEdBQUFuUSxpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FBN0MsU0FBQTZOLFNBQUE7SUFBQSxJQUFBN0IsU0FBQTtJQUFBLE9BQUFwUixtQkFBQSxHQUFBdUIsSUFBQSxVQUFBMlIsVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUF0TixJQUFBLEdBQUFzTixTQUFBLENBQUFqUCxJQUFBO1FBQUE7VUFDUWtOLFNBQVMsR0FBR0wsOERBQWlCLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsRUFFdkU7VUFDQSxPQUFPSyxTQUFTLENBQUN3RixTQUFTLElBQUl4RixTQUFTLENBQUN3RixTQUFTLENBQUMxRyxFQUFFLElBQUlrQixTQUFTLENBQUN3RixTQUFTLENBQUMxRyxFQUFFLENBQUMyRyxRQUFRLENBQUMseUJBQXlCLENBQUMsRUFBRTtZQUNoSHpGLFNBQVMsQ0FBQzBGLFdBQVcsQ0FBQzFGLFNBQVMsQ0FBQ3dGLFNBQVMsQ0FBQztVQUM5QztVQUVBRywwQkFBMEIsQ0FBQyxDQUFDLENBQUMxVCxJQUFJLENBQUMsVUFBQzJULE1BQU0sRUFBSztZQUMxQzVGLFNBQVMsQ0FBQ0ksV0FBVyxDQUFDd0YsTUFBTSxDQUFDO1VBQ2pDLENBQUMsQ0FBQztRQUFDO1FBQUE7VUFBQSxPQUFBN0QsU0FBQSxDQUFBbk4sSUFBQTtNQUFBO0lBQUEsR0FBQWlOLFFBQUE7RUFBQSxDQUNKO0VBQUEsT0FBQTBELCtCQUFBLENBQUFqUSxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUFBLFNBRWN3Tyw2QkFBNkJBLENBQUE7RUFBQSxPQUFBZ0MsOEJBQUEsQ0FBQXZRLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBVzVDO0FBQUEsU0FBQXdRLCtCQUFBO0VBQUFBLDhCQUFBLEdBQUF6USxpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FYQSxTQUFBc08sU0FBQTtJQUFBLElBQUF0QyxTQUFBO0lBQUEsT0FBQXBSLG1CQUFBLEdBQUF1QixJQUFBLFVBQUFvUyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQS9OLElBQUEsR0FBQStOLFNBQUEsQ0FBQTFQLElBQUE7UUFBQTtVQUNRa04sU0FBUyxHQUFHTCw4REFBaUIsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLEVBRS9EO1VBQ0EsT0FBT0ssU0FBUyxDQUFDd0YsU0FBUyxJQUFJeEYsU0FBUyxDQUFDd0YsU0FBUyxDQUFDMUcsRUFBRSxJQUFJa0IsU0FBUyxDQUFDd0YsU0FBUyxDQUFDMUcsRUFBRSxDQUFDMkcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2pHekYsU0FBUyxDQUFDMEYsV0FBVyxDQUFDMUYsU0FBUyxDQUFDd0YsU0FBUyxDQUFDO1VBQzlDO1VBQUNoRCxTQUFBLENBQUExUCxJQUFBO1VBQUEsT0FFS2dULHlCQUF5QixDQUFDOUYsU0FBUyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUF3QyxTQUFBLENBQUE1TixJQUFBO01BQUE7SUFBQSxHQUFBME4sUUFBQTtFQUFBLENBQzNDO0VBQUEsT0FBQXVELDhCQUFBLENBQUF2USxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUFBLFNBR2N5TyxXQUFXQSxDQUFBO0VBQUEsT0FBQWlDLFlBQUEsQ0FBQXpRLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBQUEsU0FBQTBRLGFBQUE7RUFBQUEsWUFBQSxHQUFBM1EsaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBQTFCLFNBQUE0TyxTQUFBO0lBQUEsT0FBQWhVLG1CQUFBLEdBQUF1QixJQUFBLFVBQUEyUyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQXRPLElBQUEsR0FBQXNPLFNBQUEsQ0FBQWpRLElBQUE7UUFBQTtVQUNFcUQsT0FBTyxDQUFDQyxHQUFHLENBQUN1QyxlQUFlLENBQUM7VUFDNUJpTCw4QkFBOEIsQ0FBQyxDQUFDO1VBQ2hDQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFkLFNBQUEsQ0FBQW5PLElBQUE7TUFBQTtJQUFBLEdBQUFnTyxRQUFBO0VBQUEsQ0FDakM7RUFBQSxPQUFBbUQsWUFBQSxDQUFBelEsS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFBQSxTQUVjc1EsMEJBQTBCQSxDQUFBO0VBQUEsT0FBQUssMkJBQUEsQ0FBQTFRLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBQUEsU0FBQTJRLDRCQUFBO0VBQUFBLDJCQUFBLEdBQUE1USxpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FBekMsU0FBQWtQLFNBQUE7SUFBQSxJQUFBaEssdUJBQUEsRUFBQWtMLFNBQUE7SUFBQSxPQUFBeFYsbUJBQUEsR0FBQXVCLElBQUEsVUFBQWlULFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBNU8sSUFBQSxHQUFBNE8sU0FBQSxDQUFBdlEsSUFBQTtRQUFBO1VBQUF1USxTQUFBLENBQUF2USxJQUFBO1VBQUEsT0FDd0NzRixvRUFBdUIsQ0FBQ2IsU0FBUyxFQUFFQyxPQUFPLEVBQUUsRUFBRSxFQUFFbUIsZUFBZSxDQUFDO1FBQUE7VUFBaEdPLHVCQUF1QixHQUFBbUssU0FBQSxDQUFBN1EsSUFBQTtVQUN2QjRSLFNBQVMsR0FBR3hILFFBQVEsQ0FBQ3FELGFBQWEsQ0FBQyxLQUFLLENBQUM7VUFDL0NtRSxTQUFTLENBQUNsRSxTQUFTLEdBQUcsbUJBQW1CO1VBQ3pDa0UsU0FBUyxDQUFDdEYsRUFBRSxHQUFHLHlCQUF5QjtVQUV4QzVGLHVCQUF1QixDQUFDeEgsT0FBTyxDQUFDLFVBQUEwSCxJQUFJLEVBQUk7WUFDdEM7WUFDQSxJQUFNNk0sR0FBRyxHQUFHckosUUFBUSxDQUFDcUQsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUN6Q2dHLEdBQUcsQ0FBQy9GLFNBQVMsR0FBRyxhQUFhOztZQUU3QjtZQUNBLElBQU1nRyxNQUFNLEdBQUd0SixRQUFRLENBQUNxRCxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQzVDaUcsTUFBTSxDQUFDaEcsU0FBUyxHQUFHLGdCQUFnQjtZQUVuQyxJQUFNbkcsUUFBUSxHQUFHNkMsUUFBUSxDQUFDcUQsYUFBYSxDQUFDLElBQUksQ0FBQztZQUM3QztZQUNBbEcsUUFBUSxDQUFDb0csU0FBUyw4Q0FBQXpFLE1BQUEsQ0FBNEN0QyxJQUFJLENBQUNXLFFBQVEsQ0FBRTtZQUU3RSxJQUFNb00sUUFBUSxHQUFHdkosUUFBUSxDQUFDcUQsYUFBYSxDQUFDLEdBQUcsQ0FBQztZQUM1Q2tHLFFBQVEsQ0FBQ2hHLFNBQVMscURBQUF6RSxNQUFBLENBQW1EdEMsSUFBSSxDQUFDYyxLQUFLLENBQUU7WUFFakZnTSxNQUFNLENBQUM5RixXQUFXLENBQUNyRyxRQUFRLENBQUM7WUFDNUJtTSxNQUFNLENBQUM5RixXQUFXLENBQUMrRixRQUFRLENBQUM7O1lBRTVCO1lBQ0EsSUFBTUMsZUFBZSxHQUFHeEosUUFBUSxDQUFDcUQsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNyRG1HLGVBQWUsQ0FBQ2xHLFNBQVMsR0FBRyxrQkFBa0I7WUFFOUMsSUFBTW1HLFVBQVUsR0FBR3pKLFFBQVEsQ0FBQ3FELGFBQWEsQ0FBQyxJQUFJLENBQUM7O1lBRS9DO1lBQ0EsSUFBTXFHLG1CQUFtQixHQUFHLEVBQUU7WUFDOUIsSUFBTUMsbUJBQW1CLEdBQUcsRUFBRTs7WUFFOUI7WUFDQSxJQUFNQyxlQUFlLEdBQUdwTixJQUFJLENBQUNZLE1BQU0sQ0FBQ3JGLEtBQUssQ0FBQyxDQUFDLEVBQUUyUixtQkFBbUIsQ0FBQztZQUNqRUUsZUFBZSxDQUFDOVUsT0FBTyxDQUFDLFVBQUErVSxTQUFTLEVBQUk7Y0FDbkMsSUFBTUMsUUFBUSxHQUFHOUosUUFBUSxDQUFDcUQsYUFBYSxDQUFDLElBQUksQ0FBQztjQUM3QyxJQUFNMEcsSUFBSSxHQUFHL0osUUFBUSxDQUFDcUQsYUFBYSxDQUFDLEdBQUcsQ0FBQztjQUN4QzBHLElBQUksQ0FBQ3BMLElBQUksR0FBR2tMLFNBQVMsQ0FBQ25OLEdBQUc7Y0FDekJxTixJQUFJLENBQUN4QyxXQUFXLEdBQUdzQyxTQUFTLENBQUNsTixLQUFLO2NBQ2xDb04sSUFBSSxDQUFDOUYsTUFBTSxHQUFHLFFBQVE7Y0FDdEI2RixRQUFRLENBQUN0RyxXQUFXLENBQUN1RyxJQUFJLENBQUM7Y0FDMUJOLFVBQVUsQ0FBQ2pHLFdBQVcsQ0FBQ3NHLFFBQVEsQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFFRk4sZUFBZSxDQUFDaEcsV0FBVyxDQUFDaUcsVUFBVSxDQUFDOztZQUV2QztZQUNBLElBQUlqTixJQUFJLENBQUNZLE1BQU0sQ0FBQ3JHLE1BQU0sR0FBRzJTLG1CQUFtQixFQUFFO2NBQzVDLElBQU1NLFVBQVUsR0FBR2hLLFFBQVEsQ0FBQ3FELGFBQWEsQ0FBQyxRQUFRLENBQUM7Y0FDbkQyRyxVQUFVLENBQUMxRyxTQUFTLEdBQUcsYUFBYTtjQUNwQzBHLFVBQVUsQ0FBQ3pDLFdBQVcsVUFBQXpJLE1BQUEsQ0FBVXRDLElBQUksQ0FBQ1ksTUFBTSxDQUFDckcsTUFBTSxHQUFHMlMsbUJBQW1CLGFBQVU7Y0FDbEZNLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDOU0sUUFBUSxHQUFHWCxJQUFJLENBQUNXLFFBQVEsQ0FBQyxDQUFDOztjQUU3QzZNLFVBQVUsQ0FBQ3ZRLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO2dCQUN6Q3lRLGNBQWMsQ0FBQzFOLElBQUksRUFBRWlOLFVBQVUsRUFBRU8sVUFBVSxFQUFFTixtQkFBbUIsRUFBRUMsbUJBQW1CLENBQUM7Y0FDeEYsQ0FBQyxDQUFDO2NBRUZILGVBQWUsQ0FBQ2hHLFdBQVcsQ0FBQ3dHLFVBQVUsQ0FBQztZQUN6Qzs7WUFFQTtZQUNBWCxHQUFHLENBQUM3RixXQUFXLENBQUM4RixNQUFNLENBQUM7WUFDdkJELEdBQUcsQ0FBQzdGLFdBQVcsQ0FBQ2dHLGVBQWUsQ0FBQztZQUNoQ2hDLFNBQVMsQ0FBQ2hFLFdBQVcsQ0FBQzZGLEdBQUcsQ0FBQztVQUM1QixDQUFDLENBQUM7VUFBQyxPQUFBNUMsU0FBQSxDQUFBMVEsTUFBQSxXQUVJeVIsU0FBUztRQUFBO1FBQUE7VUFBQSxPQUFBZixTQUFBLENBQUF6TyxJQUFBO01BQUE7SUFBQSxHQUFBc08sUUFBQTtFQUFBLENBQ2pCO0VBQUEsT0FBQThDLDJCQUFBLENBQUExUSxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUFBLFNBRWN5USx5QkFBeUJBLENBQUFwUCxFQUFBO0VBQUEsT0FBQXFRLDBCQUFBLENBQUF6UixLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUFBLFNBQUEwUiwyQkFBQTtFQUFBQSwwQkFBQSxHQUFBM1IsaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBQXhDLFNBQUFnVCxTQUF5Q2hILFNBQVM7SUFBQSxJQUFBOUcsdUJBQUEsRUFBQU4sWUFBQSxFQUFBcU8saUJBQUEsRUFBQUMsTUFBQSxFQUFBM1gsQ0FBQSxFQUFBNFgsRUFBQSxFQUFBQyxPQUFBLEVBQUFDLEtBQUEsRUFBQXZRLE1BQUEsRUFBQXdRLFdBQUE7SUFBQSxPQUFBMVksbUJBQUEsR0FBQXVCLElBQUEsVUFBQW9YLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBL1MsSUFBQSxHQUFBK1MsU0FBQSxDQUFBMVUsSUFBQTtRQUFBO1VBQUEwVSxTQUFBLENBQUExVSxJQUFBO1VBQUEsT0FDVnNGLG9FQUF1QixDQUFDYixTQUFTLEVBQUVDLE9BQU8sRUFBRSxFQUFFLEVBQUVtQixlQUFlLENBQUM7UUFBQTtVQUFoR08sdUJBQXVCLEdBQUFzTyxTQUFBLENBQUFoVixJQUFBO1VBQ3ZCb0csWUFBWSxHQUFHTSx1QkFBdUIsQ0FBQ0MsR0FBRyxDQUFDLFVBQUFDLElBQUk7WUFBQSxPQUFJQSxJQUFJLENBQUNZLE1BQU07VUFBQSxFQUFDLENBQUN5TixJQUFJLENBQUMsQ0FBQyxFQUU1RTtVQUNNUixpQkFBaUIsR0FBR3JPLFlBQVksQ0FBQ08sR0FBRyxDQUFDLFVBQUFDLElBQUk7WUFBQSxPQUFJQSxJQUFJLENBQUNHLEtBQUs7VUFBQSxFQUFDLENBQUNxQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBRXhFO1VBQ01zTSxNQUFNLEdBQUcsRUFBRTtVQUNqQixLQUFTM1gsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHMFgsaUJBQWlCLENBQUN0VCxNQUFNLEVBQUVwRSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3ZEMlgsTUFBTSxDQUFDNVQsSUFBSSxDQUFDMlQsaUJBQWlCLENBQUN0UyxLQUFLLENBQUNwRixDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztVQUNuRDs7VUFFQTtVQUFBNFgsRUFBQSxNQUFBQyxPQUFBLEdBQ29CRixNQUFNO1FBQUE7VUFBQSxNQUFBQyxFQUFBLEdBQUFDLE9BQUEsQ0FBQXpULE1BQUE7WUFBQTZULFNBQUEsQ0FBQTFVLElBQUE7WUFBQTtVQUFBO1VBQWZ1VSxLQUFLLEdBQUFELE9BQUEsQ0FBQUQsRUFBQTtVQUFBSyxTQUFBLENBQUExVSxJQUFBO1VBQUEsT0FDSzJELDREQUFTLENBQUMwRixxREFBVSxDQUFDa0wsS0FBSyxDQUFDLENBQUM7UUFBQTtVQUEzQ3ZRLE1BQU0sR0FBQTBRLFNBQUEsQ0FBQWhWLElBQUE7VUFFTjhVLFdBQVcsR0FBRzFLLFFBQVEsQ0FBQ3FELGFBQWEsQ0FBQyxHQUFHLENBQUM7VUFDN0NxSCxXQUFXLENBQUN4SSxFQUFFLEdBQUcsd0JBQXdCO1VBRXpDd0ksV0FBVyxDQUFDbkgsU0FBUyxHQUFHbkUseURBQWMsQ0FBQ2xGLE1BQU0sQ0FBQztVQUM5Q2tKLFNBQVMsQ0FBQ0ksV0FBVyxDQUFDa0gsV0FBVyxDQUFDO1FBQUM7VUFBQUgsRUFBQTtVQUFBSyxTQUFBLENBQUExVSxJQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUEsT0FBQTBVLFNBQUEsQ0FBQTVTLElBQUE7TUFBQTtJQUFBLEdBQUFvUyxRQUFBO0VBQUEsQ0FFdEM7RUFBQSxPQUFBRCwwQkFBQSxDQUFBelIsS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFFRCxTQUFTeVIsY0FBY0EsQ0FBQzFOLElBQUksRUFBRWlOLFVBQVUsRUFBRU8sVUFBVSxFQUFFYyxZQUFZLEVBQUVDLFNBQVMsRUFBRTtFQUM3RTtFQUNBLElBQU1DLFlBQVksR0FBR3ZCLFVBQVUsQ0FBQ3hKLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDbEosTUFBTTtFQUM3RCxJQUFNa1UsU0FBUyxHQUFHRCxZQUFZLEdBQUdELFNBQVM7RUFDMUMsSUFBTUcsV0FBVyxHQUFHMU8sSUFBSSxDQUFDWSxNQUFNLENBQUNyRixLQUFLLENBQUNpVCxZQUFZLEVBQUVDLFNBQVMsQ0FBQztFQUU5REMsV0FBVyxDQUFDcFcsT0FBTyxDQUFDLFVBQUErVSxTQUFTLEVBQUk7SUFDL0IsSUFBTUMsUUFBUSxHQUFHOUosUUFBUSxDQUFDcUQsYUFBYSxDQUFDLElBQUksQ0FBQztJQUM3QyxJQUFNMEcsSUFBSSxHQUFHL0osUUFBUSxDQUFDcUQsYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUN4QzBHLElBQUksQ0FBQ3BMLElBQUksR0FBR2tMLFNBQVMsQ0FBQ25OLEdBQUc7SUFDekJxTixJQUFJLENBQUN4QyxXQUFXLEdBQUdzQyxTQUFTLENBQUNsTixLQUFLO0lBQ2xDb04sSUFBSSxDQUFDOUYsTUFBTSxHQUFHLFFBQVE7SUFDdEI2RixRQUFRLENBQUN0RyxXQUFXLENBQUN1RyxJQUFJLENBQUM7SUFDMUJOLFVBQVUsQ0FBQ2pHLFdBQVcsQ0FBQ3NHLFFBQVEsQ0FBQztFQUNsQyxDQUFDLENBQUM7O0VBRUY7RUFDQSxJQUFNcUIsU0FBUyxHQUFHM08sSUFBSSxDQUFDWSxNQUFNLENBQUNyRyxNQUFNLEdBQUdrVSxTQUFTO0VBRWhELElBQUlFLFNBQVMsR0FBRyxDQUFDLEVBQUU7SUFDakJuQixVQUFVLENBQUN6QyxXQUFXLFVBQUF6SSxNQUFBLENBQVVxTSxTQUFTLGFBQVU7RUFDckQsQ0FBQyxNQUFNO0lBQ0w7SUFDQW5CLFVBQVUsQ0FBQ2xJLE1BQU0sQ0FBQyxDQUFDO0VBQ3JCO0FBQ0Y7O0FBRUE7QUFBQSxTQUNlaUYseUJBQXlCQSxDQUFBO0VBQUEsT0FBQXFFLDBCQUFBLENBQUExUyxLQUFBLE9BQUFELFNBQUE7QUFBQSxFQWV4QztBQUFBLFNBQUEyUywyQkFBQTtFQUFBQSwwQkFBQSxHQUFBNVMsaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBZkEsU0FBQWlVLFNBQUE7SUFBQSxJQUFBQyxjQUFBLEVBQUFDLGFBQUEsRUFBQUMsVUFBQTtJQUFBLE9BQUF4WixtQkFBQSxHQUFBdUIsSUFBQSxVQUFBa1ksVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUE3VCxJQUFBLEdBQUE2VCxTQUFBLENBQUF4VixJQUFBO1FBQUE7VUFDVW9WLGNBQWMsR0FBRyxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxRQUFRLENBQUM7VUFBQUksU0FBQSxDQUFBeFYsSUFBQTtVQUFBLE9BQ3BEeVYsZ0JBQWdCLENBQUMsQ0FBQztRQUFBO1VBQXhDSixhQUFhLEdBQUFHLFNBQUEsQ0FBQTlWLElBQUE7VUFFYjRWLFVBQVUsTUFBQTFNLE1BQUEsQ0FBT3dNLGNBQWMsRUFBQU0sa0JBQUEsQ0FBS0wsYUFBYTtVQUV2REMsVUFBVSxDQUFDMVcsT0FBTyxDQUFDLFVBQUErVyxNQUFNLEVBQUk7WUFDekJDLGtCQUFrQixDQUFDRCxNQUFNLEVBQUVQLGNBQWMsQ0FBQ3pDLFFBQVEsQ0FBQ2dELE1BQU0sQ0FBQyxDQUFDO1VBQy9ELENBQUMsQ0FBQzs7VUFFRjtVQUFBSCxTQUFBLENBQUF4VixJQUFBO1VBQUEsT0FDd0I2VixrQkFBa0IsQ0FBQyxDQUFDO1FBQUE7VUFBNUNoUSxlQUFlLEdBQUEyUCxTQUFBLENBQUE5VixJQUFBO1VBQ2ZvVyxrQkFBa0IsQ0FBQyxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFOLFNBQUEsQ0FBQTFULElBQUE7TUFBQTtJQUFBLEdBQUFxVCxRQUFBO0VBQUEsQ0FDeEI7RUFBQSxPQUFBRCwwQkFBQSxDQUFBMVMsS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFHRCxTQUFTa1QsZ0JBQWdCQSxDQUFBLEVBQUc7RUFDeEIsT0FBTyxJQUFJbFUsT0FBTyxDQUFDLFVBQUN0QyxPQUFPLEVBQUs7SUFDNUIyRixNQUFNLENBQUN3SCxPQUFPLENBQUNDLEtBQUssQ0FBQ2xGLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFLFVBQUNuRCxNQUFNLEVBQUs7TUFDcEQvRSxPQUFPLENBQUMrRSxNQUFNLENBQUNxUixhQUFhLElBQUksRUFBRSxDQUFDO0lBQ3ZDLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOOztBQUVBO0FBQ0EsU0FBU1Esa0JBQWtCQSxDQUFBLEVBQUc7RUFDMUIsT0FBTyxJQUFJdFUsT0FBTyxDQUFDLFVBQUN0QyxPQUFPLEVBQUs7SUFDNUIyRixNQUFNLENBQUN3SCxPQUFPLENBQUNDLEtBQUssQ0FBQ2xGLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsVUFBQ25ELE1BQU0sRUFBSztNQUN0RC9FLE9BQU8sQ0FBQytFLE1BQU0sQ0FBQzZCLGVBQWUsSUFBSSxFQUFFLENBQUM7SUFDekMsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ047O0FBRUE7QUFDQSxTQUFTa1EsbUJBQW1CQSxDQUFBLEVBQUc7RUFDM0JuUixNQUFNLENBQUN3SCxPQUFPLENBQUNDLEtBQUssQ0FBQ3RELEdBQUcsQ0FBQztJQUFFbEQsZUFBZSxFQUFmQTtFQUFnQixDQUFDLEVBQUUsWUFBTTtJQUNoRHhDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixFQUFFdUMsZUFBZSxDQUFDO0VBQzNELENBQUMsQ0FBQztBQUNOOztBQUVBO0FBQ0EsU0FBU21RLGlCQUFpQkEsQ0FBQ1gsYUFBYSxFQUFFO0VBQ3RDelEsTUFBTSxDQUFDd0gsT0FBTyxDQUFDQyxLQUFLLENBQUN0RCxHQUFHLENBQUM7SUFBRXNNLGFBQWEsRUFBYkE7RUFBYyxDQUFDLEVBQUUsWUFBTTtJQUM5Q2hTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVCQUF1QixFQUFFK1IsYUFBYSxDQUFDO0VBQ3ZELENBQUMsQ0FBQztBQUNOOztBQUVBO0FBQ0EsU0FBU08sa0JBQWtCQSxDQUFDcEUsS0FBSyxFQUFxQjtFQUFBLElBQW5CeUUsU0FBUyxHQUFBMVQsU0FBQSxDQUFBMUIsTUFBQSxRQUFBMEIsU0FBQSxRQUFBZ0gsU0FBQSxHQUFBaEgsU0FBQSxNQUFHLEtBQUs7RUFDaEQsSUFBTStPLFNBQVMsR0FBR3hILFFBQVEsQ0FBQ2tELGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztFQUU3RCxJQUFNMEUsTUFBTSxHQUFHNUgsUUFBUSxDQUFDcUQsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUMvQ3VFLE1BQU0sQ0FBQ3RFLFNBQVMsR0FBRyx3QkFBd0I7RUFDM0NzRSxNQUFNLENBQUNMLFdBQVcsR0FBR0csS0FBSztFQUMxQkUsTUFBTSxDQUFDcUMsT0FBTyxDQUFDdkMsS0FBSyxHQUFHQSxLQUFLO0VBQzVCRSxNQUFNLENBQUNxQyxPQUFPLFdBQVEsR0FBR2tDLFNBQVM7RUFFbEMsSUFBSSxDQUFDQSxTQUFTLEVBQUU7SUFDWnZFLE1BQU0sQ0FBQ2xILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUM5QixJQUFNeUwsU0FBUyxHQUFHcE0sUUFBUSxDQUFDcUQsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNsRCtJLFNBQVMsQ0FBQzlJLFNBQVMsR0FBRyxZQUFZO0lBQ2xDOEksU0FBUyxDQUFDN0UsV0FBVyxHQUFHLEdBQUc7SUFDM0I2RSxTQUFTLENBQUN6UCxLQUFLLEdBQUcsZUFBZTtJQUNqQ3lQLFNBQVMsQ0FBQzNTLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDeEgsQ0FBQyxFQUFLO01BQ3ZDQSxDQUFDLENBQUNvYSxlQUFlLENBQUMsQ0FBQztNQUNuQkMsWUFBWSxDQUFDNUUsS0FBSyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztJQUNGRSxNQUFNLENBQUNwRSxXQUFXLENBQUM0SSxTQUFTLENBQUM7RUFDakM7O0VBRUE7RUFDQSxJQUFJclEsZUFBZSxDQUFDOE0sUUFBUSxDQUFDbkIsS0FBSyxDQUFDLEVBQUU7SUFDakNFLE1BQU0sQ0FBQ2xILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUNsQzs7RUFFQTtFQUNBaUgsTUFBTSxDQUFDbk8sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDbkMsSUFBTTJMLEtBQUssR0FBR3JKLGVBQWUsQ0FBQ3dRLE9BQU8sQ0FBQzdFLEtBQUssQ0FBQztJQUM1QyxJQUFJdEMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO01BQ1pySixlQUFlLENBQUN5USxNQUFNLENBQUNwSCxLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQ2hDd0MsTUFBTSxDQUFDbEgsU0FBUyxDQUFDb0IsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDLE1BQU07TUFDSC9GLGVBQWUsQ0FBQ3JGLElBQUksQ0FBQ2dSLEtBQUssQ0FBQztNQUMzQkUsTUFBTSxDQUFDbEgsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ2xDO0lBQ0FzTCxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3JCL0UsV0FBVyxDQUFDLENBQUM7SUFDYjtJQUNBO0VBQ0osQ0FBQyxDQUFDO0VBRUZNLFNBQVMsQ0FBQ2hFLFdBQVcsQ0FBQ29FLE1BQU0sQ0FBQztBQUNqQzs7QUFFQTtBQUFBLFNBQ2UwRSxZQUFZQSxDQUFBN1IsR0FBQTtFQUFBLE9BQUFnUyxhQUFBLENBQUEvVCxLQUFBLE9BQUFELFNBQUE7QUFBQSxFQXVCM0I7QUFBQSxTQUFBZ1UsY0FBQTtFQUFBQSxhQUFBLEdBQUFqVSxpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0F2QkEsU0FBQXNWLFNBQTRCaEYsS0FBSztJQUFBLElBQUF0QyxLQUFBLEVBQUFtRyxhQUFBLEVBQUFvQixXQUFBLEVBQUEvRSxNQUFBO0lBQUEsT0FBQTVWLG1CQUFBLEdBQUF1QixJQUFBLFVBQUFxWixVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQWhWLElBQUEsR0FBQWdWLFNBQUEsQ0FBQTNXLElBQUE7UUFBQTtVQUM3QjtVQUNNa1AsS0FBSyxHQUFHckosZUFBZSxDQUFDd1EsT0FBTyxDQUFDN0UsS0FBSyxDQUFDO1VBQzVDLElBQUl0QyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDWnJKLGVBQWUsQ0FBQ3lRLE1BQU0sQ0FBQ3BILEtBQUssRUFBRSxDQUFDLENBQUM7WUFDaEM2RyxtQkFBbUIsQ0FBQyxDQUFDO1VBQ3pCOztVQUVBO1VBQUFZLFNBQUEsQ0FBQTNXLElBQUE7VUFBQSxPQUM0QnlWLGdCQUFnQixDQUFDLENBQUM7UUFBQTtVQUF4Q0osYUFBYSxHQUFBc0IsU0FBQSxDQUFBalgsSUFBQTtVQUNiK1csV0FBVyxHQUFHcEIsYUFBYSxDQUFDZ0IsT0FBTyxDQUFDN0UsS0FBSyxDQUFDO1VBQ2hELElBQUlpRixXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDbEJwQixhQUFhLENBQUNpQixNQUFNLENBQUNHLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDcENULGlCQUFpQixDQUFDWCxhQUFhLENBQUM7VUFDcEM7O1VBRUE7VUFDTTNELE1BQU0sR0FBRzVILFFBQVEsQ0FBQ0ksYUFBYSx5Q0FBQXRCLE1BQUEsQ0FBd0M0SSxLQUFLLFFBQUksQ0FBQztVQUN2RixJQUFJRSxNQUFNLEVBQUU7WUFDUkEsTUFBTSxDQUFDOUYsTUFBTSxDQUFDLENBQUM7VUFDbkI7UUFBQztRQUFBO1VBQUEsT0FBQStLLFNBQUEsQ0FBQTdVLElBQUE7TUFBQTtJQUFBLEdBQUEwVSxRQUFBO0VBQUEsQ0FDSjtFQUFBLE9BQUFELGFBQUEsQ0FBQS9ULEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBR0QsU0FBU3VULGtCQUFrQkEsQ0FBQSxFQUFHO0VBQzFCLElBQU1jLE9BQU8sR0FBRzlNLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMseUJBQXlCLENBQUM7RUFDcEU2TSxPQUFPLENBQUNoWSxPQUFPLENBQUMsVUFBQThTLE1BQU0sRUFBSTtJQUN0QixJQUFNRixLQUFLLEdBQUdFLE1BQU0sQ0FBQ3FDLE9BQU8sQ0FBQ3ZDLEtBQUs7SUFDbEMsSUFBSTNMLGVBQWUsQ0FBQzhNLFFBQVEsQ0FBQ25CLEtBQUssQ0FBQyxFQUFFO01BQ2pDRSxNQUFNLENBQUNsSCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQyxNQUFNO01BQ0hpSCxNQUFNLENBQUNsSCxTQUFTLENBQUNvQixNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3JDO0VBQ0osQ0FBQyxDQUFDO0FBQ047O0FBRUE7QUFDQTlCLFFBQVEsQ0FBQ2tELGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDekosZ0JBQWdCLENBQUMsUUFBUTtFQUFBLElBQUFzVCxLQUFBLEdBQUF2VSxpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FBRSxTQUFBNEMsU0FBTy9ILENBQUM7SUFBQSxJQUFBK2EsS0FBQSxFQUFBQyxTQUFBLEVBQUExQixhQUFBO0lBQUEsT0FBQXZaLG1CQUFBLEdBQUF1QixJQUFBLFVBQUE0RyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQXZDLElBQUEsR0FBQXVDLFNBQUEsQ0FBQWxFLElBQUE7UUFBQTtVQUMxRWpFLENBQUMsQ0FBQ3FPLGNBQWMsQ0FBQyxDQUFDO1VBQ1owTSxLQUFLLEdBQUdoTixRQUFRLENBQUNrRCxjQUFjLENBQUMsa0JBQWtCLENBQUM7VUFDbkQrSixTQUFTLEdBQUdELEtBQUssQ0FBQ3RhLEtBQUssQ0FBQ21OLElBQUksQ0FBQyxDQUFDO1VBQUEsTUFDaENvTixTQUFTLElBQUksQ0FBQ2xSLGVBQWUsQ0FBQzhNLFFBQVEsQ0FBQ29FLFNBQVMsQ0FBQztZQUFBN1MsU0FBQSxDQUFBbEUsSUFBQTtZQUFBO1VBQUE7VUFDakQ7VUFDQTRWLGtCQUFrQixDQUFDbUIsU0FBUyxFQUFFLEtBQUssQ0FBQzs7VUFFcEM7VUFBQTdTLFNBQUEsQ0FBQWxFLElBQUE7VUFBQSxPQUM0QnlWLGdCQUFnQixDQUFDLENBQUM7UUFBQTtVQUF4Q0osYUFBYSxHQUFBblIsU0FBQSxDQUFBeEUsSUFBQTtVQUNuQjJWLGFBQWEsQ0FBQzdVLElBQUksQ0FBQ3VXLFNBQVMsQ0FBQztVQUM3QmYsaUJBQWlCLENBQUNYLGFBQWEsQ0FBQztVQUVoQ3lCLEtBQUssQ0FBQ3RhLEtBQUssR0FBRyxFQUFFO1FBQUM7UUFBQTtVQUFBLE9BQUEwSCxTQUFBLENBQUFwQyxJQUFBO01BQUE7SUFBQSxHQUFBZ0MsUUFBQTtFQUFBLENBRXhCO0VBQUEsaUJBQUF5QixHQUFBO0lBQUEsT0FBQXNSLEtBQUEsQ0FBQXJVLEtBQUEsT0FBQUQsU0FBQTtFQUFBO0FBQUEsSUFBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvYWkvc3VtbWFyaXplci5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci8uL3NyYy91c2VyX2Rhc2hib2FyZC9oaXN0b3J5LmpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3VzZXJfZGFzaGJvYXJkL3V0aWxzLmpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3VzZXJfZGFzaGJvYXJkL3dpZGdldHMuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvdXRpbHMvZGIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvdXNlcl9kYXNoYm9hcmQvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3VzZXJfZGFzaGJvYXJkL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXRTdW1tYXJpemVyKCkge1xuICAgIGNvbnN0IGNhblN1bW1hcml6ZSA9IGF3YWl0IGFpLnN1bW1hcml6ZXIuY2FwYWJpbGl0aWVzKCk7XG4gICAgbGV0IHN1bW1hcml6ZXI7XG4gICAgaWYgKGNhblN1bW1hcml6ZSAmJiBjYW5TdW1tYXJpemUuYXZhaWxhYmxlICE9PSAnbm8nKSB7XG4gICAgICAgIGlmIChjYW5TdW1tYXJpemUuYXZhaWxhYmxlID09PSAncmVhZGlseScpIHtcbiAgICAgICAgICAgIC8vIFRoZSBzdW1tYXJpemVyIGNhbiBpbW1lZGlhdGVseSBiZSB1c2VkLlxuICAgICAgICAgICAgc3VtbWFyaXplciA9IGF3YWl0IGFpLnN1bW1hcml6ZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VtbWFyaXplciByZWFkeSBub3cnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoZSBzdW1tYXJpemVyIGNhbiBiZSB1c2VkIGFmdGVyIHRoZSBtb2RlbCBkb3dubG9hZC5cbiAgICAgICAgICAgIHN1bW1hcml6ZXIgPSBhd2FpdCBhaS5zdW1tYXJpemVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgc3VtbWFyaXplci5hZGRFdmVudExpc3RlbmVyKCdkb3dubG9hZHByb2dyZXNzJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLmxvYWRlZCwgZS50b3RhbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGF3YWl0IHN1bW1hcml6ZXIucmVhZHk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnRmVhdHVyZSBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmVhdHVyZSBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICAgIC8vIFRoZSBzdW1tYXJpemVyIGNhbid0IGJlIHVzZWQgYXQgYWxsLlxuICAgIH1cbiAgICByZXR1cm4gc3VtbWFyaXplcjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3VtbWFyaXplKHRleHQpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzdW1tYXJpemVyID0gYXdhaXQgZ2V0U3VtbWFyaXplcigpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdW1tYXJpemVyLnN1bW1hcml6ZSh0ZXh0KTtcbiAgICAgICAgYXdhaXQgc3VtbWFyaXplci5kZXN0cm95KCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGR1cmluZyBzdW1tYXJpemF0aW9uOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgc3VtbWFyaXplIH07IiwiaW1wb3J0IHsgZ2V0SGlzdG9yeUluVGltZVJhbmdlIH0gZnJvbSAnLi4vdXRpbHMvZGIuanMnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRIaXN0b3J5KHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5oaXN0b3J5LnNlYXJjaCh7dGV4dDogJycsIHN0YXJ0VGltZTogc3RhcnREYXRlLmdldFRpbWUoKSwgZW5kVGltZTogZW5kRGF0ZS5nZXRUaW1lKCksIG1heFJlc3VsdHM6IDQwIH0sIChyZXN1bHRzKSA9PiB7XG4gICAgICAgIGlmIChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cbi8qKlxuICogXG4gKiBAcGFyYW0geyp9IHN0YXJ0RGF0ZSBcbiAqIEBwYXJhbSB7Kn0gZW5kRGF0ZSBcbiAqIEBwYXJhbSB7Kn0gTiBcbiAqIEByZXR1cm5zIFxuICogXG4gKiBcbiAqICg1KSBbe+KApn0sIHvigKZ9LCB74oCmfSwge+KApn0sIHvigKZ9XVxuMFxuOiBcbntob3N0bmFtZTogJ3d3dy5jdXJzb3IuY29tJywgdGl0bGVzOiBBcnJheSg2KSwgY291bnQ6IDI0fVxuMVxuOiBcbntob3N0bmFtZTogJ3d3dy55b3V0dWJlLmNvbScsIHRpdGxlczogQXJyYXkoMTIpLCBjb3VudDogMjF9XG4yXG46IFxue2hvc3RuYW1lOiAnbWFpbC5nb29nbGUuY29tJywgdGl0bGVzOiBBcnJheSgxMiksIGNvdW50OiAxOH1cbjNcbjogXG57aG9zdG5hbWU6ICdkZXZlbG9wZXIuY2hyb21lLmNvbScsIHRpdGxlczogQXJyYXkoMiksIGNvdW50OiAxNn1cbjRcbjogXG57aG9zdG5hbWU6ICdnaXRodWIuY29tJywgdGl0bGVzOiBBcnJheSg3KSwgY291bnQ6IDEyfVxuXG5leGFtcGxlIHRpdGxlczpcblxuMFxuOiBcbnt0aXRsZTogJ2luIGN1cnN1ciBkdXJpbmcgaW5kZXhpbmcsIGlzIHRoZSByZXN1bHRzIHN0b3JlZCBsY29hbGx5IC0gR29vZ2xlIFNlYXJjaCcsIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9aW4rY3Vyc3VyK2R1cmluZytp4oCmU0FRa3hNalV6TUdvd2FqZW9BZ0N3QWdBJnNvdXJjZWlkPWNocm9tZSZpZT1VVEYtOCd9XG4xXG46IFxue3RpdGxlOiAnc2xhY2sgaW50ZWdyYXRpb24gdG8gbm90aW9uIC0gR29vZ2xlIFNlYXJjaCcsIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9c2xhY2sraW50ZWdyYXRpb24r4oCmVFNBUWcyTXpBeWFqQnFONmdDQUxBQ0FBJnNvdXJjZWlkPWNocm9tZSZpZT1VVEYtOCd9XG4yXG46IFxue3RpdGxlOiAnaSB3YW50IHRvIGNvbnZlcnQgYSBzbGFjayBjaGFubmVsIHRvIG5vdGlvbiBkb2N1bWVudCAtIEdvb2dsZSBTZWFyY2gnLCB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPWkrd2FudCt0bytjb252ZXJ0K+KApnVnWUdDQUVRQVJnVGtnY0VPUzR6TjZBSGdjY0Mmc2NsaWVudD1nd3Mtd2l6LXNlcnAnfVxuM1xuOiBcbnt0aXRsZTogJ2NvbnZlcnQgcGlsIGltYWdlIHRvIGRpY29tIGZpbGUgLSBHb29nbGUgU2VhcmNoJywgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1jb252ZXJ0K3BpbCtpbWFnZSvigKZBZElCQ0RnME56bHFNR28zcUFJQXNBSUEmc291cmNlaWQ9Y2hyb21lJmllPVVURi04J31cbjRcbjogXG57dGl0bGU6ICdzdXBlciByZXNvbHV0aW9uIG1vZGVscyAtIEdvb2dsZSBTZWFyY2gnLCB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPXN1cGVyK3Jlc29sdXRpb24rbeKApmUwZ0VJTmpJeU1Hb3dhamVvQWdDd0FnQSZzb3VyY2VpZD1jaHJvbWUmaWU9VVRGLTgnfVxuNVxuOiBcbnt0aXRsZTogJ3N1cGVyIHJlc29sdXRpb24gbW9kZWwgb25saW5lIGZyZWUgLSBHb29nbGUgU2VhcmNoJywgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1zdXBlcityZXNvbHV0aW9uK23igKZGbUFNQWlBWUJrQVlJa2djRU1pNHhNNkFIa2xrJnNjbGllbnQ9Z3dzLXdpei1zZXJwJ31cbiAqL1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SGlzdG9yeVdpdGhUb3BOU3RhdHMoc3RhcnREYXRlLCBlbmREYXRlLCBOLCBzZWxlY3RlZEZpbHRlcnMpIHtcbiAgICBjb25zdCBoaXN0b3J5SXRlbXMgPSBhd2FpdCBnZXRIaXN0b3J5SW5UaW1lUmFuZ2Uoc3RhcnREYXRlLmdldFRpbWUoKSwgZW5kRGF0ZS5nZXRUaW1lKCkpO1xuICAgIGNvbnN0IHBhcnNlZEhpc3RvcnlJdGVtcyA9IGhpc3RvcnlJdGVtcy5tYXAoaXRlbSA9PiBwYXJzZV91cmxfcGFydChpdGVtLnVybCwgaXRlbS50aXRsZSkpO1xuICAgIGNvbnN0IGhvc3RuYW1lTWFwID0gY291bnRfYnlfaG9zdG5hbWUocGFyc2VkSGlzdG9yeUl0ZW1zKTtcbiAgICBjb25zdCBob3N0bmFtZVRpdGxlTWFwID0gY3JlYXRlSG9zdE5hbWVUaXRsZU1hcChwYXJzZWRIaXN0b3J5SXRlbXMpO1xuICAgIGNvbnN0IHNvcnRlZEhvc3RuYW1lcyA9IEFycmF5LmZyb20oaG9zdG5hbWVNYXAuZW50cmllcygpKS5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSk7XG4gICAgY29uc3QgdG9wTkhvc3RuYW1lcyA9IHNvcnRlZEhvc3RuYW1lcy5zbGljZSgwLCBOKTtcbiAgICBjb25zdCB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcyA9IHRvcE5Ib3N0bmFtZXMubWFwKGl0ZW0gPT4gKHsgaG9zdG5hbWU6IGl0ZW1bMF0sIHRpdGxlczogaG9zdG5hbWVUaXRsZU1hcC5nZXQoaXRlbVswXSksIGNvdW50OiBpdGVtWzFdIH0pKTtcblxuICAgIHJldHVybiB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcztcbn1cblxuXG5mdW5jdGlvbiBwYXJzZV91cmxfcGFydCh1cmwsIHRpdGxlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTCh1cmwpO1xuXG4gICAgICAgIC8vIEV4dHJhY3QgcHJvdG9jb2wgd2l0aG91dCB0aGUgdHJhaWxpbmcgY29sb24gKGUuZy4sICdodHRwcycpXG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gcGFyc2VkVXJsLnByb3RvY29sLnJlcGxhY2UoJzonLCAnJyk7XG5cbiAgICAgICAgLy8gU3BsaXQgaG9zdG5hbWUgaW50byBwYXJ0cyB0byBpZGVudGlmeSBzdWJkb21haW4sIGRvbWFpbiwgYW5kIFRMRFxuICAgICAgICBjb25zdCBob3N0bmFtZVBhcnRzID0gcGFyc2VkVXJsLmhvc3RuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIGxldCBzdWJkb21haW4gPSAnJztcbiAgICAgICAgbGV0IGRvbWFpbiA9ICcnO1xuICAgICAgICBsZXQgdGxkID0gJyc7XG5cbiAgICAgICAgaWYgKGhvc3RuYW1lUGFydHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgc3ViZG9tYWluID0gaG9zdG5hbWVQYXJ0cy5zbGljZSgwLCBob3N0bmFtZVBhcnRzLmxlbmd0aCAtIDIpLmpvaW4oJy4nKTtcbiAgICAgICAgICAgIGRvbWFpbiA9IGhvc3RuYW1lUGFydHNbaG9zdG5hbWVQYXJ0cy5sZW5ndGggLSAyXTtcbiAgICAgICAgICAgIHRsZCA9IGhvc3RuYW1lUGFydHNbaG9zdG5hbWVQYXJ0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSBlbHNlIGlmIChob3N0bmFtZVBhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgZG9tYWluID0gaG9zdG5hbWVQYXJ0c1swXTtcbiAgICAgICAgICAgIHRsZCA9IGhvc3RuYW1lUGFydHNbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb21haW4gPSBwYXJzZWRVcmwuaG9zdG5hbWU7XG4gICAgICAgICAgICB0bGQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV4dHJhY3QgcGF0aCAoZW5kcG9pbnQpXG4gICAgICAgIGNvbnN0IHBhdGggPSBwYXJzZWRVcmwucGF0aG5hbWU7XG5cbiAgICAgICAgLy8gRXh0cmFjdCBxdWVyeSBwYXJhbWV0ZXJzIGFzIGtleS12YWx1ZSBwYWlyc1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICBwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBrZXkgYWxyZWFkeSBleGlzdHMsIGNvbnZlcnQgaXQgaW50byBhbiBhcnJheVxuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zW2tleV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVBhcmFtc1trZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc1trZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW2tleV0gPSBbcXVlcnlQYXJhbXNba2V5XSwgdmFsdWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBFeHRyYWN0IGZyYWdtZW50IHdpdGhvdXQgdGhlIGxlYWRpbmcgaGFzaCAoZS5nLiwgJ3NlY3Rpb24xJylcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBwYXJzZWRVcmwuaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuXG4gICAgICAgIC8vIEV4dHJhY3QgcG9ydCBpZiBzcGVjaWZpZWQsIGVsc2UgZGVmYXVsdCBiYXNlZCBvbiBwcm90b2NvbFxuICAgICAgICBsZXQgcG9ydCA9IHBhcnNlZFVybC5wb3J0O1xuICAgICAgICBpZiAoIXBvcnQpIHtcbiAgICAgICAgICAgIGlmIChwcm90b2NvbCA9PT0gJ2h0dHAnKSB7XG4gICAgICAgICAgICAgICAgcG9ydCA9ICc4MCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3RvY29sID09PSAnaHR0cHMnKSB7XG4gICAgICAgICAgICAgICAgcG9ydCA9ICc0NDMnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3J0ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvdG9jb2wsXG4gICAgICAgICAgICBzdWJkb21haW4sXG4gICAgICAgICAgICBkb21haW4sXG4gICAgICAgICAgICB0bGQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICAgICAgICBmcmFnbWVudCxcbiAgICAgICAgICAgIHBvcnQsXG4gICAgICAgICAgICAvLyBBZGRpdGlvbmFsIFVzZWZ1bCBDb21wb25lbnRzXG4gICAgICAgICAgICBob3N0OiBwYXJzZWRVcmwuaG9zdCwgLy8gaW5jbHVkZXMgaG9zdG5hbWUgYW5kIHBvcnRcbiAgICAgICAgICAgIGhvc3RuYW1lOiBwYXJzZWRVcmwuaG9zdG5hbWUsXG4gICAgICAgICAgICBocmVmOiBwYXJzZWRVcmwuaHJlZixcbiAgICAgICAgICAgIG9yaWdpbjogcGFyc2VkVXJsLm9yaWdpbixcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBVUkw6ICR7dXJsfWAsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb3VudF9ieV9ob3N0bmFtZShwYXJzZWRIaXN0b3J5SXRlbXMpIHtcbiAgICBjb25zdCBob3N0bmFtZU1hcCA9IG5ldyBNYXAoKTtcblxuICAgIHBhcnNlZEhpc3RvcnlJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBob3N0bmFtZSA9IGl0ZW0uaG9zdG5hbWU7XG4gICAgICAgIGlmIChob3N0bmFtZSkge1xuICAgICAgICAgICAgaWYgKGhvc3RuYW1lTWFwLmhhcyhob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICBob3N0bmFtZU1hcC5zZXQoaG9zdG5hbWUsIGhvc3RuYW1lTWFwLmdldChob3N0bmFtZSkgKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaG9zdG5hbWVNYXAuc2V0KGhvc3RuYW1lLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhvc3RuYW1lTWFwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3N0TmFtZVRpdGxlTWFwKHBhcnNlZEhpc3RvcnlJdGVtcykge1xuICAgIGNvbnN0IGhvc3RuYW1lTWFwID0gbmV3IE1hcCgpO1xuICAgIHBhcnNlZEhpc3RvcnlJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBob3N0bmFtZSA9IGl0ZW0uaG9zdG5hbWU7XG4gICAgICAgIHZhciB0aXRsZSA9IGl0ZW0udGl0bGU7XG4gICAgICAgIGNvbnN0IHVybCA9IGl0ZW0uaHJlZjtcblxuICAgICAgICAvLyBpZiB0aXRsZSBpcyBlbXB0eSwgdXNlIGhvc3RuYW1lIGFzIHRpdGxlXG4gICAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgICAgIHRpdGxlID0gaG9zdG5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYWludGFpbiBhIGxpc3Qgb2YgdGl0bGVzIGZvciBlYWNoIGhvc3RuYW1lXG4gICAgICAgIGlmIChob3N0bmFtZU1hcC5oYXMoaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAvLyBpZiB0aXRsZSBpcyBhbHJlYWR5IGluIHRoZSBsaXN0LCBkb24ndCBhZGQgaXQgYWdhaW5cbiAgICAgICAgICAgIGlmICghaG9zdG5hbWVNYXAuZ2V0KGhvc3RuYW1lKS5zb21lKHQgPT4gdC50aXRsZSA9PT0gdGl0bGUpKSB7XG4gICAgICAgICAgICAgICAgaG9zdG5hbWVNYXAuZ2V0KGhvc3RuYW1lKS5wdXNoKHt0aXRsZSwgdXJsfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBob3N0bmFtZU1hcC5zZXQoaG9zdG5hbWUsIFt7dGl0bGUsIHVybH1dKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhvc3RuYW1lTWFwO1xufVxuXG5cblxuLy8gZXhwb3J0IHsgZ2V0SGlzdG9yeSB9OyIsIi8vIHdyaXRlIGEgZnVuY3Rpb24gdG8gZXh0cmFjdCBkb21haW4gbmFtZSBmcm9tIGEgdXJsXG5mdW5jdGlvbiBleHRyYWN0RG9tYWluKHVybCkge1xuICAgIHJldHVybiBuZXcgVVJMKHVybCkuaG9zdG5hbWU7XG4gIH1cbiAgXG4gIFxuICBmdW5jdGlvbiBtYXJrZG93blRvSHRtbChtYXJrZG93blRleHQpIHtcbiAgICAvLyBDb252ZXJ0IGJvbGQgdGV4dDogKip0ZXh0KipcbiAgICBsZXQgaHRtbCA9IG1hcmtkb3duVGV4dC5yZXBsYWNlKC9cXCpcXCooLis/KVxcKlxcKi9nLCAnPHN0cm9uZz4kMTwvc3Ryb25nPicpO1xuICAgIFxuICAgIC8vIENvbnZlcnQgaXRhbGljIHRleHQ6ICp0ZXh0KlxuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcKiguKz8pXFwqL2csICc8ZW0+JDE8L2VtPicpO1xuICAgIFxuICAgIC8vIENvbnZlcnQgYnVsbGV0IHBvaW50czogKiBpdGVtXG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXlxcKiAoLispJC9nbSwgJzxsaT4kMTwvbGk+Jyk7XG4gICAgXG4gICAgLy8gV3JhcCBsaXN0IGl0ZW1zIGluIDx1bD4gdGFnc1xuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoLyg8bGk+Lio8XFwvbGk+KS9nLCAnPHVsPiQxPC91bD4nKTtcbiAgXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuXG4vKipcbiAqIENsZWFucyBhbmQgc2FuaXRpemVzIGlucHV0IHRleHQgZm9yIHNhZmUgcHJvY2Vzc2luZyB3aXRoIGxhbmd1YWdlIG1vZGVscy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRoZSBpbnB1dCB0ZXh0IHRvIGJlIHNhbml0aXplZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhMZW5ndGggLSBNYXhpbXVtIGFsbG93ZWQgbGVuZ3RoIGZvciB0aGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW5pdGl6ZWQgdGV4dC5cbiAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgc2FuaXRpemVkIHRleHQgZXhjZWVkcyB0aGUgbWF4aW11bSBsZW5ndGguXG4gKi9cbmZ1bmN0aW9uIGNsZWFuSW5wdXQodGV4dCwgbWF4TGVuZ3RoID0gNDAwMCkge1xuICAvLyAxLiBSZW1vdmUgQ29udHJvbCBDaGFyYWN0ZXJzXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1tcXHgwMC1cXHgxRlxceDdGXS9nLCAnJyk7XG5cbiAgLy8gMi4gTm9ybWFsaXplIFVuaWNvZGVcbiAgdGV4dCA9IHRleHQubm9ybWFsaXplKCdORkMnKTtcblxuICAvLyAzLiBSZW1vdmUgTWFsZm9ybWVkIFVuaWNvZGVcbiAgdHJ5IHtcbiAgICAgIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUodGV4dCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC/vv70vZywgJycpO1xuICB9XG5cbiAgLy8gNC4gRXNjYXBlIFNwZWNpYWwgU3ltYm9sc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9bXFxcXGB7fVxcW1xcXSgpPD47fCZdL2csICdcXFxcJCYnKTtcblxuICAvLyA1LiBMaW1pdCBSZXBldGl0aXZlIENoYXJhY3RlcnMgdG8gM1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oLilcXDF7Myx9L2csICckMSQxJDEnKTtcblxuICAvLyA2LiBXaGl0ZWxpc3QgQWxsb3dlZCBDaGFyYWN0ZXJzIChBbHBoYW51bWVyaWNzIGFuZCBjb21tb24gcHVuY3R1YXRpb24pXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1teYS16QS1aMC05IC4sIT8nLV0vZywgJycpO1xuXG4gIC8vIDcuIFRyaW0gRXhjZXNzaXZlIFdoaXRlc3BhY2VcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKTtcblxuICAvLyA4LiBWYWxpZGF0ZSBMZW5ndGhcbiAgaWYgKHRleHQubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElucHV0IGV4Y2VlZHMgbWF4aW11bSBhbGxvd2VkIGxlbmd0aCBvZiAke21heExlbmd0aH0gY2hhcmFjdGVycy5gKTtcbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5leHBvcnQgeyBleHRyYWN0RG9tYWluLCBtYXJrZG93blRvSHRtbCwgY2xlYW5JbnB1dCB9OyIsIi8qIEVuYWJsZSBSZXNpemluZyAqL1xuZnVuY3Rpb24gZW5hYmxlUmVzaXppbmcoKSB7XG4gICAgY29uc3QgcmVzaXphYmxlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzaXphYmxlJyk7XG4gIFxuICAgIHJlc2l6YWJsZUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCByZXNpemVIYW5kbGUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNpemUtaGFuZGxlJyk7XG4gICAgICBsZXQgaXNSZXNpemluZyA9IGZhbHNlO1xuICBcbiAgICAgIHJlc2l6ZUhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlzUmVzaXppbmcgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdzZS1yZXNpemUnO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Jlc2l6aW5nJyk7XG4gIFxuICAgICAgICBjb25zdCBzdGFydFdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3Qgc3RhcnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgY29uc3Qgc3RhcnRYID0gZS5jbGllbnRYO1xuICAgICAgICBjb25zdCBzdGFydFkgPSBlLmNsaWVudFk7XG4gIFxuICAgICAgICBjb25zdCBvbk1vdXNlTW92ZSA9IChlKSA9PiB7XG4gICAgICAgICAgaWYgKCFpc1Jlc2l6aW5nKSByZXR1cm47XG4gIFxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRXaWR0aCA9IHN0YXJ0V2lkdGggKyAoZS5jbGllbnRYIC0gc3RhcnRYKTtcbiAgICAgICAgICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gc3RhcnRIZWlnaHQgKyAoZS5jbGllbnRZIC0gc3RhcnRZKTtcbiAgXG4gICAgICAgICAgLy8gU2V0IG1pbmltdW0gZGltZW5zaW9uc1xuICAgICAgICAgIGNvbnN0IG1pbldpZHRoID0gMjAwO1xuICAgICAgICAgIGNvbnN0IG1pbkhlaWdodCA9IDEwMDtcbiAgXG4gICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke01hdGgubWF4KGN1cnJlbnRXaWR0aCwgbWluV2lkdGgpfXB4YDtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke01hdGgubWF4KGN1cnJlbnRIZWlnaHQsIG1pbkhlaWdodCl9cHhgO1xuICAgICAgICB9O1xuICBcbiAgICAgICAgY29uc3Qgb25Nb3VzZVVwID0gKCkgPT4ge1xuICAgICAgICAgIGlzUmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Jlc2l6aW5nJyk7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gIFxuICAgICAgICAgIC8vIFNhdmUgZGltZW5zaW9uc1xuICAgICAgICAgIHNhdmVXaWRnZXRTaXplKGVsZW1lbnQuaWQsIGVsZW1lbnQuc3R5bGUud2lkdGgsIGVsZW1lbnQuc3R5bGUuaGVpZ2h0KTtcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgIH0pO1xuICBcbiAgICAgIC8vIExvYWQgc2F2ZWQgZGltZW5zaW9uc1xuICAgICAgbG9hZFdpZGdldFNpemUoZWxlbWVudC5pZCwgZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIC8qIFNhdmUgV2lkZ2V0IFNpemUgKi9cbiAgZnVuY3Rpb24gc2F2ZVdpZGdldFNpemUod2lkZ2V0SWQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgaWYgKGNocm9tZSAmJiBjaHJvbWUuc3RvcmFnZSAmJiBjaHJvbWUuc3RvcmFnZS5sb2NhbCkge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW3dpZGdldElkXTogc2l6ZSB9LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTYXZlZCBzaXplIGZvciAke3dpZGdldElkfTpgLCBzaXplKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGb3IgdGVzdGluZyBvdXRzaWRlIG9mIENocm9tZSBleHRlbnNpb25cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHdpZGdldElkLCBKU09OLnN0cmluZ2lmeShzaXplKSk7XG4gICAgfVxuICB9XG4gIFxuICAvKiBMb2FkIFdpZGdldCBTaXplICovXG4gIGZ1bmN0aW9uIGxvYWRXaWRnZXRTaXplKHdpZGdldElkLCBlbGVtZW50KSB7XG4gICAgaWYgKGNocm9tZSAmJiBjaHJvbWUuc3RvcmFnZSAmJiBjaHJvbWUuc3RvcmFnZS5sb2NhbCkge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHdpZGdldElkLCAocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHRbd2lkZ2V0SWRdKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IHJlc3VsdFt3aWRnZXRJZF0ud2lkdGg7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSByZXN1bHRbd2lkZ2V0SWRdLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZvciB0ZXN0aW5nIG91dHNpZGUgb2YgQ2hyb21lIGV4dGVuc2lvblxuICAgICAgY29uc3Qgc2l6ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0od2lkZ2V0SWQpKTtcbiAgICAgIGlmIChzaXplKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBzaXplLndpZHRoO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gY3JlYXRlT3JHZXRXaWRnZXQodW5pcXVlSUQsIHdpZGdldFRpdGxlKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVuaXF1ZUlEKSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVuaXF1ZUlEKTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IHdpZGdldENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aWRnZXQtY29udGFpbmVyJyk7XG4gIFxuICAgIC8vIENyZWF0ZSBhIG5ldyB3aWRnZXQgZWxlbWVudFxuICAgIGNvbnN0IG5ld1dpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1dpZGdldC5jbGFzc05hbWUgPSAnd2lkZ2V0IHJlc2l6YWJsZSc7XG4gIFxuICAgIC8vIEdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciB0aGUgbmV3IHdpZGdldFxuICAgIG5ld1dpZGdldC5pZCA9IHVuaXF1ZUlEO1xuICBcbiAgICAvLyBTZXQgdGhlIGNvbnRlbnQgb2YgdGhlIG5ldyB3aWRnZXRcbiAgICBuZXdXaWRnZXQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0LWhlYWRlclwiPlxuICAgICAgICAgICAgPGgyPiR7d2lkZ2V0VGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXNpemUtaGFuZGxlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gIFxuICAgIC8vIEFwcGVuZCB0aGUgbmV3IHdpZGdldCB0byB0aGUgd2lkZ2V0IGNvbnRhaW5lclxuICAgIHdpZGdldENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdXaWRnZXQpO1xuICBcbiAgICByZXR1cm4gbmV3V2lkZ2V0O1xuICB9XG5cbmV4cG9ydCB7IGVuYWJsZVJlc2l6aW5nLCBzYXZlV2lkZ2V0U2l6ZSwgbG9hZFdpZGdldFNpemUsIGNyZWF0ZU9yR2V0V2lkZ2V0IH07XG4gICIsIi8vIGRiLmpzXG5cbmxldCBkYjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9wZW5EYXRhYmFzZSgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoZGIpIHtcbiAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oJ0hpc3RvcnlJbmRleGVyREInLCAxKTtcblxuICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRGF0YWJhc2UgZXJyb3I6JywgZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2ZW50KSA9PiB7XG4gICAgICBkYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICBjb25zdCBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdoaXN0b3J5JywgeyBrZXlQYXRoOiAnaWQnIH0pO1xuICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ3VybCcsICd1cmwnLCB7IHVuaXF1ZTogZmFsc2UgfSk7XG4gICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgndGl0bGUnLCAndGl0bGUnLCB7IHVuaXF1ZTogZmFsc2UgfSk7XG4gICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgndGFncycsICd0YWdzJywgeyB1bmlxdWU6IGZhbHNlLCBtdWx0aUVudHJ5OiB0cnVlIH0pO1xuICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ3N1bW1hcnknLCAnc3VtbWFyeScsIHsgdW5pcXVlOiBmYWxzZSB9KTtcbiAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KCdsYXN0VmlzaXRUaW1lJywgJ2xhc3RWaXNpdFRpbWUnLCB7IHVuaXF1ZTogdHJ1ZSB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgdXBncmFkZWRcIik7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICBkYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICByZXNvbHZlKGRiKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFyRGF0YWJhc2UoKSB7XG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oWydoaXN0b3J5J10sICdyZWFkd3JpdGUnKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gICAgY29uc3QgcmVxdWVzdCA9IG9iamVjdFN0b3JlLmNsZWFyKCk7XG4gICAgY29uc29sZS5sb2coXCJDbGVhcmluZyBkYXRhYmFzZVwiKTtcblxuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgIHJlamVjdChldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEhpc3RvcnlJdGVtKGl0ZW0pIHtcbiAgYXdhaXQgb3BlbkRhdGFiYXNlKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbJ2hpc3RvcnknXSwgJ3JlYWR3cml0ZScpO1xuICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ2hpc3RvcnknKTtcbiAgICBjb25zdCBpbmRleCA9IG9iamVjdFN0b3JlLmluZGV4KCdsYXN0VmlzaXRUaW1lJyk7XG5cbiAgICAvLyBDaGVjayBpZiBhbiBpdGVtIHdpdGggdGhlIHNhbWUgbGFzdFZpc2l0VGltZSBhbHJlYWR5IGV4aXN0c1xuICAgIGNvbnN0IGNoZWNrUmVxdWVzdCA9IGluZGV4LmdldChpdGVtLmxhc3RWaXNpdFRpbWUpO1xuXG4gICAgY2hlY2tSZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5yZXN1bHQpIHtcbiAgICAgICAgLy8gSXRlbSB3aXRoIHRoZSBzYW1lIGxhc3RWaXNpdFRpbWUgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIHdpdGggdGhlIHNhbWUgbGFzdFZpc2l0VGltZSBhbHJlYWR5IGV4aXN0cywgbm90IGFkZGluZy5cIik7XG4gICAgICAgIHJlc29sdmUoKTsgLy8gUmVzb2x2ZSB3aXRob3V0IGFkZGluZ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm8gaXRlbSB3aXRoIHRoZSBzYW1lIGxhc3RWaXNpdFRpbWUsIHByb2NlZWQgdG8gYWRkXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBvYmplY3RTdG9yZS5wdXQoaXRlbSk7XG5cbiAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYEhpc3RvcnkgaXRlbSBhZGRlZGApO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgaXRlbTonLCBldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICAgICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNoZWNrUmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBsYXN0VmlzaXRUaW1lOicsIGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgIH07XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsSGlzdG9yeUl0ZW1zKCkge1xuICBhd2FpdCBvcGVuRGF0YWJhc2UoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFsnaGlzdG9yeSddLCAncmVhZG9ubHknKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gICAgY29uc3QgcmVxdWVzdCA9IG9iamVjdFN0b3JlLmdldEFsbCgpO1xuXG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgIHJlc29sdmUoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkFsbCBoaXN0b3J5IGl0ZW1zIGZldGNoZWRcIik7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWxsIGhpc3RvcnkgaXRlbXM6JywgZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgfTtcbiAgfSk7XG59XG5cblxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhpc3RvcnkgaXRlbSB3aXRoIHRoZSBzcGVjaWZpZWQgbGFzdFZpc2l0VGltZSBleGlzdHMgaW4gdGhlIEluZGV4ZWREQi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsYXN0VmlzaXRUaW1lIC0gVGhlIGxhc3QgdmlzaXQgdGltZSBvZiB0aGUgaGlzdG9yeSBpdGVtLlxuICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IC0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgaXRlbSBleGlzdHMsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrSWZJdGVtRXhpc3RzKGxhc3RWaXNpdFRpbWUpIHtcbiAgLy8gRW5zdXJlIHRoZSBkYXRhYmFzZSBpcyBvcGVuXG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuXG4gIHRyeSB7XG4gICAgLy8gU3RhcnQgYSByZWFkb25seSB0cmFuc2FjdGlvblxuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oWydoaXN0b3J5J10sICdyZWFkb25seScpO1xuICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ2hpc3RvcnknKTtcbiAgICBjb25zdCBpbmRleCA9IG9iamVjdFN0b3JlLmluZGV4KCdsYXN0VmlzaXRUaW1lJyk7XG5cbiAgICAvLyBJbml0aWF0ZSB0aGUgZ2V0IHJlcXVlc3RcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXguZ2V0KGxhc3RWaXNpdFRpbWUpO1xuXG4gICAgLy8gQXdhaXQgdGhlIHJlc3VsdCBvZiB0aGUgZ2V0IHJlcXVlc3RcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpO1xuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBpdGVtIGV4aXN0c1xuICAgIGNvbnN0IGV4aXN0cyA9IHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdCAhPT0gbnVsbDtcblxuICAgIC8vIGNvbnNvbGUubG9nKGBJdGVtIGV4aXN0cyBmb3IgbGFzdFZpc2l0VGltZSAke2xhc3RWaXNpdFRpbWV9OiAke2V4aXN0c31gKTtcblxuICAgIHJldHVybiBleGlzdHM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgRXJyb3IgY2hlY2tpbmcgaWYgaXRlbSBleGlzdHMgZm9yIGxhc3RWaXNpdFRpbWUgJHtsYXN0VmlzaXRUaW1lfTpgLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7IC8vIFByb3BhZ2F0ZSB0aGUgZXJyb3IgdG8gdGhlIGNhbGxlclxuICB9XG59XG5cbi8qKlxuICogUHJvbWlzaWZpZXMgYW4gSW5kZXhlZERCIHJlcXVlc3QuXG4gKiBAcGFyYW0ge0lEQlJlcXVlc3R9IHJlcXVlc3QgLSBUaGUgSW5kZXhlZERCIHJlcXVlc3Qgb2JqZWN0LlxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZXF1ZXN0IHJlc3VsdC5cbiAqL1xuZnVuY3Rpb24gcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKHJlcXVlc3QucmVzdWx0KTtcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gIH0pO1xufVxuXG4vKipcbiAqIElucHV0IHN0YXJ0ZGF0ZSBhbmQgZW5kZGF0ZSwgZmV0Y2ggYWxsIGhpc3RvcnkgaXRlbXMgaW4gdGhhdCByYW5nZSwgc2VhcmNoIHdpdGhpbiBsYXN0VmlzaXRUaW1lIGluZGV4IG9mIHRoZSBkYiAgXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIaXN0b3J5SW5UaW1lUmFuZ2Uoc3RhcnREYXRlLCBlbmREYXRlKSB7XG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFsnaGlzdG9yeSddLCAncmVhZG9ubHknKTtcbiAgY29uc3Qgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgnaGlzdG9yeScpO1xuICBjb25zdCBpbmRleCA9IG9iamVjdFN0b3JlLmluZGV4KCdsYXN0VmlzaXRUaW1lJyk7XG4gIGNvbnN0IHJhbmdlID0gSURCS2V5UmFuZ2UuYm91bmQoc3RhcnREYXRlLCBlbmREYXRlKTtcbiAgY29uc3QgcmVxdWVzdCA9IGluZGV4LmdldEFsbChyYW5nZSk7ICBcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpO1xuICByZXR1cm4gcmVzdWx0O1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc3VtbWFyaXplIH0gZnJvbSAnLi4vYWkvc3VtbWFyaXplci5qcyc7XG5pbXBvcnQgeyBnZXRIaXN0b3J5V2l0aFRvcE5TdGF0cyB9IGZyb20gJy4vaGlzdG9yeS5qcyc7XG5pbXBvcnQgeyBlbmFibGVSZXNpemluZywgY3JlYXRlT3JHZXRXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMuanMnO1xuaW1wb3J0IHsgZXh0cmFjdERvbWFpbiwgbWFya2Rvd25Ub0h0bWwsIGNsZWFuSW5wdXQgfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmxldCBzdGFydERhdGUsIGVuZERhdGU7XG5cbi8vIEdsb2JhbCB2YXJpYWJsZSB0byBzdG9yZSBzZWxlY3RlZCBmaWx0ZXJzXG5sZXQgc2VsZWN0ZWRGaWx0ZXJzID0gW107XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gICAgYWRkRGF0ZVJhbmdlQnV0dG9ucygpO1xuICAgIGFkZFJlZnJlc2hCdXR0b24oKTtcbiAgICBzZXREYXRlUmFuZ2UoJzI0aCcpO1xuICAgIC8vIEluaXRpYWxpemUgY2F0ZWdvcnkgZmlsdGVyc1xuICAgIGF3YWl0IGluaXRpYWxpemVDYXRlZ29yeUZpbHRlcnMoKTtcbiAgICBhZGRPclVwZGF0ZVJlY2VudEhpc3RvcnlXaWRnZXQoKTtcbiAgICBhZGRPclVwZGF0ZUJhc2ljU3VtbWFyeVdpZGdldCgpO1xuICAgIGVuYWJsZVJlc2l6aW5nKCk7XG4gIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWZyZXNoLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbG9hZENvbnRlbnQoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrLW1vZGUtdG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyay1tb2RlJyk7XG4gICAgICAgIC8vIE9wdGlvbmFsOiBTYXZlIHVzZXIgcHJlZmVyZW5jZSB1c2luZyBsb2NhbFN0b3JhZ2VcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrLW1vZGUnKSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2RhcmsnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdsaWdodCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBcHBseSBzYXZlZCB0aGVtZSBvbiBsb2FkXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcbiAgICAgICAgaWYgKHNhdmVkVGhlbWUgPT09ICdkYXJrJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGFkZFJlZnJlc2hCdXR0b24oKSB7XG4gIGNvbnN0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVmcmVzaEJ1dHRvbi5pZCA9ICdyZWZyZXNoLWJ1dHRvbic7XG4gIHJlZnJlc2hCdXR0b24udGV4dENvbnRlbnQgPSAnUmVmcmVzaCc7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcmFuZ2UtY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZWZyZXNoQnV0dG9uKTtcbn1cbiAgXG4vKiBJbml0aWFsaXplIERhdGUgUmFuZ2UgSW5wdXRzICovXG5mdW5jdGlvbiBhZGREYXRlUmFuZ2VCdXR0b25zKCkge1xuICBcbiAgY29uc3QgYnV0dG9uRGF0YSA9IFtcbiAgICAgIHsgbGFiZWw6ICdMYXN0IDI0IEhvdXJzJywgcmFuZ2U6ICcyNGgnIH0sXG4gICAgICB7IGxhYmVsOiAnTGFzdCBXZWVrJywgcmFuZ2U6ICcxdycgfSxcbiAgICAgIHsgbGFiZWw6ICdMYXN0IE1vbnRoJywgcmFuZ2U6ICcxbScgfSxcbiAgICAgIHsgbGFiZWw6ICdMYXN0IDMgTW9udGhzJywgcmFuZ2U6ICczbScgfSxcbiAgICAgIHsgbGFiZWw6ICdMYXN0IDYgTW9udGhzJywgcmFuZ2U6ICc2bScgfSxcbiAgICAgIC8vIFRPRE86IGFkZCBtb250aCB3aXNlIG9wdGlvbnMgaW4gZHJvcCBkb3duXG4gICAgICB7IGxhYmVsOiAnSmFudWFyeScsIHJhbmdlOiAnamFuJyB9LFxuICAgICAgeyBsYWJlbDogJ0ZlYnJ1YXJ5JywgcmFuZ2U6ICdmZWInIH0sXG4gICAgICB7IGxhYmVsOiAnTWFyY2gnLCByYW5nZTogJ21hcicgfVxuXG4gIF07XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcmFuZ2UtY29udGFpbmVyJyk7XG5cbiAgYnV0dG9uRGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidXR0b24uY2xhc3NOYW1lID0gJ2RhdGUtcmFuZ2UtYnV0dG9uJztcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGRhdGEubGFiZWw7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXJhbmdlJywgZGF0YS5yYW5nZSk7XG5cbiAgICAgIC8vIEhpZ2hsaWdodCB0aGUgZGVmYXVsdCBzZWxlY3RlZCBidXR0b25cbiAgICAgIGlmIChkYXRhLnJhbmdlID09PSAnMjRoJykge1xuICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgc2V0RGF0ZVJhbmdlKGRhdGEucmFuZ2UpO1xuICAgICAgICAgIGxvYWRDb250ZW50KCk7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgJ3NlbGVjdGVkJyBjbGFzcyBmcm9tIGFsbCBidXR0b25zXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGUtcmFuZ2UtYnV0dG9uJykuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIEFkZCAnc2VsZWN0ZWQnIGNsYXNzIHRvIHRoZSBjbGlja2VkIGJ1dHRvblxuICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9KTtcbn1cblxuXG5mdW5jdGlvbiBzZXREYXRlUmFuZ2UocmFuZ2UpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gIHN3aXRjaCAocmFuZ2UpIHtcbiAgICAgIGNhc2UgJzI0aCc6XG4gICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkpO1xuICAgICAgICAgIHN0YXJ0RGF0ZS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSAtIDEpO1xuICAgICAgICAgIGVuZERhdGUgPSB0b2RheTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzF3JzpcbiAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheSk7XG4gICAgICAgICAgc3RhcnREYXRlLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpIC0gNyk7XG4gICAgICAgICAgZW5kRGF0ZSA9IHRvZGF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnMW0nOlxuICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICAgICAgICBzdGFydERhdGUuc2V0TW9udGgodG9kYXkuZ2V0TW9udGgoKSAtIDEpO1xuICAgICAgICAgIGVuZERhdGUgPSB0b2RheTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzNtJzpcbiAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheSk7XG4gICAgICAgICAgc3RhcnREYXRlLnNldE1vbnRoKHRvZGF5LmdldE1vbnRoKCkgLSAzKTtcbiAgICAgICAgICBlbmREYXRlID0gdG9kYXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc2bSc6XG4gICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkpO1xuICAgICAgICAgIHN0YXJ0RGF0ZS5zZXRNb250aCh0b2RheS5nZXRNb250aCgpIC0gNik7XG4gICAgICAgICAgZW5kRGF0ZSA9IHRvZGF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnamFuJzpcbiAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcbiAgICAgICAgICBlbmREYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgMSwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmZWInOlxuICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIDEsIDEpO1xuICAgICAgICAgIGVuZERhdGUgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCAyLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21hcic6XG4gICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgMiwgMSk7XG4gICAgICAgICAgZW5kRGF0ZSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIDMsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzdGFydERhdGUgPSB0b2RheTtcbiAgICAgICAgICBlbmREYXRlID0gdG9kYXk7XG4gIH1cblxuICBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcbiAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICBjb25zdCBtb250aCA9ICgnMCcgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKTtcbiAgICAgIGNvbnN0IGRheSA9ICgnMCcgKyBkYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpO1xuICAgICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gIH07XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktc3RhcnQtZGF0ZScpLnRleHRDb250ZW50ID0gZm9ybWF0RGF0ZShzdGFydERhdGUpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheS1lbmQtZGF0ZScpLnRleHRDb250ZW50ID0gZm9ybWF0RGF0ZShlbmREYXRlKTtcbn1cbiAgXG5cbiAgLyogQWRkIE92ZXJhbGwgU3VtbWFyeSBXaWRnZXQgKi9cbmFzeW5jIGZ1bmN0aW9uIGFkZE9yVXBkYXRlUmVjZW50SGlzdG9yeVdpZGdldCgpIHtcbiAgY29uc3QgbmV3V2lkZ2V0ID0gY3JlYXRlT3JHZXRXaWRnZXQoJ3JlY2VudC1oaXN0b3J5JywgJ1JlY2VudCBIaXN0b3J5Jyk7XG5cbiAgLy8gZGVsZXRlIGNoaWxkcmVuIGNvbnRhaW5pbmcgKmNvbnRlbnRzKlxuICB3aGlsZSAobmV3V2lkZ2V0Lmxhc3RDaGlsZCAmJiBuZXdXaWRnZXQubGFzdENoaWxkLmlkICYmIG5ld1dpZGdldC5sYXN0Q2hpbGQuaWQuaW5jbHVkZXMoJ3JlY2VudC1oaXN0b3J5LWNvbnRlbnRzJykpIHtcbiAgICAgIG5ld1dpZGdldC5yZW1vdmVDaGlsZChuZXdXaWRnZXQubGFzdENoaWxkKTtcbiAgfVxuXG4gIGNyZWF0ZVJlY2VudEhpc3RvcnlFbGVtZW50KCkudGhlbigod2lkZ2V0KSA9PiB7XG4gICAgICBuZXdXaWRnZXQuYXBwZW5kQ2hpbGQod2lkZ2V0KTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZE9yVXBkYXRlQmFzaWNTdW1tYXJ5V2lkZ2V0KCkge1xuICBjb25zdCBuZXdXaWRnZXQgPSBjcmVhdGVPckdldFdpZGdldCgnYmFzaWMtc3VtbWFyeScsICdTdW1tYXJ5Jyk7XG5cbiAgLy8gZGVsZXRlIGNoaWxkcmVuIGNvbnRhaW5pbmcgKmNvbnRlbnRzKlxuICB3aGlsZSAobmV3V2lkZ2V0Lmxhc3RDaGlsZCAmJiBuZXdXaWRnZXQubGFzdENoaWxkLmlkICYmIG5ld1dpZGdldC5sYXN0Q2hpbGQuaWQuaW5jbHVkZXMoJ2NvbnRlbnRzJykpIHtcbiAgICAgIG5ld1dpZGdldC5yZW1vdmVDaGlsZChuZXdXaWRnZXQubGFzdENoaWxkKTtcbiAgfVxuXG4gIGF3YWl0IGNyZWF0ZUJhc2ljU3VtbWFyeUVsZW1lbnQobmV3V2lkZ2V0KTtcbn1cblxuLyogTG9hZCBDb250ZW50IEJhc2VkIG9uIERhdGUgUmFuZ2UgKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRDb250ZW50KCkge1xuICBjb25zb2xlLmxvZyhzZWxlY3RlZEZpbHRlcnMpO1xuICBhZGRPclVwZGF0ZVJlY2VudEhpc3RvcnlXaWRnZXQoKTtcbiAgYWRkT3JVcGRhdGVCYXNpY1N1bW1hcnlXaWRnZXQoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVjZW50SGlzdG9yeUVsZW1lbnQoKSB7XG4gIGNvbnN0IHRvcE5Ib3N0bmFtZXNXaXRoVGl0bGVzID0gYXdhaXQgZ2V0SGlzdG9yeVdpdGhUb3BOU3RhdHMoc3RhcnREYXRlLCBlbmREYXRlLCAxMCwgc2VsZWN0ZWRGaWx0ZXJzKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnaGlzdG9yeS1jb250YWluZXInO1xuICBjb250YWluZXIuaWQgPSAncmVjZW50LWhpc3RvcnktY29udGVudHMnO1xuXG4gIHRvcE5Ib3N0bmFtZXNXaXRoVGl0bGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgLy8gQ3JlYXRlIHRoZSBtYWluIGJveCBmb3IgZWFjaCBob3N0bmFtZVxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJveC5jbGFzc05hbWUgPSAnaGlzdG9yeS1ib3gnO1xuXG4gICAgLy8gRmlyc3QgcGFydDogSG9zdG5hbWUgYW5kIGhpdCBjb3VudCB3aXRoIGFuIGljb25cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ2hpc3RvcnktaGVhZGVyJztcblxuICAgIGNvbnN0IGhvc3RuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAvLyBBZGQgYW4gaWNvbiBiZWZvcmUgdGhlIGhvc3RuYW1lXG4gICAgaG9zdG5hbWUuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLWdsb2JlLWFtZXJpY2FzXCI+PC9pPiAke2l0ZW0uaG9zdG5hbWV9YDtcblxuICAgIGNvbnN0IGhpdENvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhpdENvdW50LmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhcyBmYS1jaGFydC1saW5lXCI+PC9pPiBIaXQgQ291bnQ6ICR7aXRlbS5jb3VudH1gO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhvc3RuYW1lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGl0Q291bnQpO1xuXG4gICAgLy8gU2Vjb25kIHBhcnQ6IFRpdGxlcyB3aXRoIFVSTHNcbiAgICBjb25zdCB0aXRsZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZXNDb250YWluZXIuY2xhc3NOYW1lID0gJ3RpdGxlcy1jb250YWluZXInO1xuXG4gICAgY29uc3QgdGl0bGVzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICAvLyBJbml0aWFsIGRpc3BsYXkgY291bnRcbiAgICBjb25zdCBpbml0aWFsRGlzcGxheUNvdW50ID0gMTA7XG4gICAgY29uc3QgYWRkaXRpb25hbExvYWRDb3VudCA9IDIwO1xuXG4gICAgLy8gRGV0ZXJtaW5lIGhvdyBtYW55IHRpdGxlcyB0byBzaG93IGluaXRpYWxseVxuICAgIGNvbnN0IGRpc3BsYXllZFRpdGxlcyA9IGl0ZW0udGl0bGVzLnNsaWNlKDAsIGluaXRpYWxEaXNwbGF5Q291bnQpO1xuICAgIGRpc3BsYXllZFRpdGxlcy5mb3JFYWNoKHRpdGxlSXRlbSA9PiB7XG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgbGluay5ocmVmID0gdGl0bGVJdGVtLnVybDtcbiAgICAgIGxpbmsudGV4dENvbnRlbnQgPSB0aXRsZUl0ZW0udGl0bGU7XG4gICAgICBsaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICB0aXRsZXNMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9KTtcblxuICAgIHRpdGxlc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZXNMaXN0KTtcblxuICAgIC8vIElmIHRoZXJlIGFyZSBtb3JlIHRpdGxlcywgYWRkIGEgXCJtb3JlXCIgYnV0dG9uXG4gICAgaWYgKGl0ZW0udGl0bGVzLmxlbmd0aCA+IGluaXRpYWxEaXNwbGF5Q291bnQpIHtcbiAgICAgIGNvbnN0IG1vcmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIG1vcmVCdXR0b24uY2xhc3NOYW1lID0gJ21vcmUtYnV0dG9uJztcbiAgICAgIG1vcmVCdXR0b24udGV4dENvbnRlbnQgPSBgYW5kICR7aXRlbS50aXRsZXMubGVuZ3RoIC0gaW5pdGlhbERpc3BsYXlDb3VudH0gbW9yZS4uLmA7XG4gICAgICBtb3JlQnV0dG9uLmRhdGFzZXQuaG9zdG5hbWUgPSBpdGVtLmhvc3RuYW1lOyAvLyBGb3IgaWRlbnRpZnlpbmcgd2hpY2ggYm94IHRvIGV4cGFuZFxuXG4gICAgICBtb3JlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsb2FkTW9yZVRpdGxlcyhpdGVtLCB0aXRsZXNMaXN0LCBtb3JlQnV0dG9uLCBpbml0aWFsRGlzcGxheUNvdW50LCBhZGRpdGlvbmFsTG9hZENvdW50KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aXRsZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobW9yZUJ1dHRvbik7XG4gICAgfVxuXG4gICAgLy8gQXNzZW1ibGUgdGhlIGJveFxuICAgIGJveC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGJveC5hcHBlbmRDaGlsZCh0aXRsZXNDb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib3gpO1xuICB9KTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVCYXNpY1N1bW1hcnlFbGVtZW50KG5ld1dpZGdldCkge1xuICBjb25zdCB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcyA9IGF3YWl0IGdldEhpc3RvcnlXaXRoVG9wTlN0YXRzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgMTAsIHNlbGVjdGVkRmlsdGVycyk7XG4gIGNvbnN0IGhpc3RvcnlJdGVtcyA9IHRvcE5Ib3N0bmFtZXNXaXRoVGl0bGVzLm1hcChpdGVtID0+IGl0ZW0udGl0bGVzKS5mbGF0KCk7XG5cbiAgLy8gQXBwZW5kIGFsbCBoaXN0b3J5IGl0ZW1zIHRvIGEgc2luZ2xlIHN0cmluZ1xuICBjb25zdCBoaXN0b3J5SXRlbVRpdGxlcyA9IGhpc3RvcnlJdGVtcy5tYXAoaXRlbSA9PiBpdGVtLnRpdGxlKS5qb2luKCcsJyk7XG5cbiAgLy8gQ3JlYXRlIGNodW5rcyBvZiA0MDAwIGNoYXJhY3RlcnNcbiAgY29uc3QgY2h1bmtzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaGlzdG9yeUl0ZW1UaXRsZXMubGVuZ3RoOyBpICs9IDIwMDApIHtcbiAgICBjaHVua3MucHVzaChoaXN0b3J5SXRlbVRpdGxlcy5zbGljZShpLCBpICsgMjAwMCkpO1xuICB9XG5cbiAgLy8gU3VtbWFyaXplIGVhY2ggY2h1bmsgYW5kIGFwcGVuZCB0byB0aGUgcmVzdWx0XG4gIGZvciAoY29uc3QgY2h1bmsgb2YgY2h1bmtzKSB7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHN1bW1hcml6ZShjbGVhbklucHV0KGNodW5rKSk7XG5cbiAgICBsZXQgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dEVsZW1lbnQuaWQgPSAnYmFzaWMtc3VtbWFyeS1jb250ZW50cyc7XG5cbiAgICB0ZXh0RWxlbWVudC5pbm5lckhUTUwgPSBtYXJrZG93blRvSHRtbChyZXN1bHQpO1xuICAgIG5ld1dpZGdldC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZE1vcmVUaXRsZXMoaXRlbSwgdGl0bGVzTGlzdCwgbW9yZUJ1dHRvbiwgaW5pdGlhbENvdW50LCBsb2FkQ291bnQpIHtcbiAgLy8gRGV0ZXJtaW5lIHRoZSBjdXJyZW50IG51bWJlciBvZiB0aXRsZXMgZGlzcGxheWVkXG4gIGNvbnN0IGN1cnJlbnRDb3VudCA9IHRpdGxlc0xpc3QucXVlcnlTZWxlY3RvckFsbCgnbGknKS5sZW5ndGg7XG4gIGNvbnN0IG5leHRDb3VudCA9IGN1cnJlbnRDb3VudCArIGxvYWRDb3VudDtcbiAgY29uc3QgdGl0bGVzVG9BZGQgPSBpdGVtLnRpdGxlcy5zbGljZShjdXJyZW50Q291bnQsIG5leHRDb3VudCk7XG5cbiAgdGl0bGVzVG9BZGQuZm9yRWFjaCh0aXRsZUl0ZW0gPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsuaHJlZiA9IHRpdGxlSXRlbS51cmw7XG4gICAgbGluay50ZXh0Q29udGVudCA9IHRpdGxlSXRlbS50aXRsZTtcbiAgICBsaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIHRpdGxlc0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcblxuICAvLyBVcGRhdGUgdGhlIHJlbWFpbmluZyBjb3VudFxuICBjb25zdCByZW1haW5pbmcgPSBpdGVtLnRpdGxlcy5sZW5ndGggLSBuZXh0Q291bnQ7XG5cbiAgaWYgKHJlbWFpbmluZyA+IDApIHtcbiAgICBtb3JlQnV0dG9uLnRleHRDb250ZW50ID0gYGFuZCAke3JlbWFpbmluZ30gbW9yZS4uLmA7XG4gIH0gZWxzZSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBcIm1vcmVcIiBidXR0b24gaWYgbm8gbW9yZSB0aXRsZXMgYXJlIGxlZnRcbiAgICBtb3JlQnV0dG9uLnJlbW92ZSgpO1xuICB9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGluaXRpYWxpemUgY2F0ZWdvcnkgZmlsdGVyc1xuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZUNhdGVnb3J5RmlsdGVycygpIHtcbiAgICBjb25zdCBkZWZhdWx0RmlsdGVycyA9IFsnQ29kZScsICdQcm9kdWN0aXZpdHknLCAnQUknLCAnRW50ZXJ0YWlubWVudCcsICdTb2NpYWwnXTtcbiAgICBjb25zdCBjdXN0b21GaWx0ZXJzID0gYXdhaXQgZ2V0Q3VzdG9tRmlsdGVycygpO1xuXG4gICAgY29uc3QgYWxsRmlsdGVycyA9IFsuLi5kZWZhdWx0RmlsdGVycywgLi4uY3VzdG9tRmlsdGVyc107XG5cbiAgICBhbGxGaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgICAgY3JlYXRlVG9nZ2xlQnV0dG9uKGZpbHRlciwgZGVmYXVsdEZpbHRlcnMuaW5jbHVkZXMoZmlsdGVyKSk7XG4gICAgfSk7XG5cbiAgICAvLyBMb2FkIHNlbGVjdGVkIGZpbHRlcnMgZnJvbSBzdG9yYWdlXG4gICAgc2VsZWN0ZWRGaWx0ZXJzID0gYXdhaXQgZ2V0U2VsZWN0ZWRGaWx0ZXJzKCk7XG4gICAgdXBkYXRlRmlsdGVyU3RhdGVzKCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGdldCBjdXN0b20gZmlsdGVycyBmcm9tIENocm9tZSBzdG9yYWdlXG5mdW5jdGlvbiBnZXRDdXN0b21GaWx0ZXJzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydjdXN0b21GaWx0ZXJzJ10sIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LmN1c3RvbUZpbHRlcnMgfHwgW10pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZ2V0IHNlbGVjdGVkIGZpbHRlcnMgZnJvbSBDaHJvbWUgc3RvcmFnZVxuZnVuY3Rpb24gZ2V0U2VsZWN0ZWRGaWx0ZXJzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydzZWxlY3RlZEZpbHRlcnMnXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuc2VsZWN0ZWRGaWx0ZXJzIHx8IFtdKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHNhdmUgc2VsZWN0ZWQgZmlsdGVycyB0byBDaHJvbWUgc3RvcmFnZVxuZnVuY3Rpb24gc2F2ZVNlbGVjdGVkRmlsdGVycygpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzZWxlY3RlZEZpbHRlcnMgfSwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQgZmlsdGVycyBzYXZlZDonLCBzZWxlY3RlZEZpbHRlcnMpO1xuICAgIH0pO1xufVxuXG4vLyBGdW5jdGlvbiB0byBzYXZlIGN1c3RvbSBmaWx0ZXJzIHRvIENocm9tZSBzdG9yYWdlXG5mdW5jdGlvbiBzYXZlQ3VzdG9tRmlsdGVycyhjdXN0b21GaWx0ZXJzKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgY3VzdG9tRmlsdGVycyB9LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDdXN0b20gZmlsdGVycyBzYXZlZDonLCBjdXN0b21GaWx0ZXJzKTtcbiAgICB9KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGEgdG9nZ2xlIGJ1dHRvblxuZnVuY3Rpb24gY3JlYXRlVG9nZ2xlQnV0dG9uKGxhYmVsLCBpc0RlZmF1bHQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeS1maWx0ZXJzJyk7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gJ2NhdGVnb3J5LXRvZ2dsZS1idXR0b24nO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIGJ1dHRvbi5kYXRhc2V0LmxhYmVsID0gbGFiZWw7XG4gICAgYnV0dG9uLmRhdGFzZXQuZGVmYXVsdCA9IGlzRGVmYXVsdDtcblxuICAgIGlmICghaXNEZWZhdWx0KSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjdXN0b20nKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJlbW92ZUJ0bi5jbGFzc05hbWUgPSAncmVtb3ZlLWJ0bic7XG4gICAgICAgIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9ICfinJUnO1xuICAgICAgICByZW1vdmVCdG4udGl0bGUgPSAnUmVtb3ZlIGZpbHRlcic7XG4gICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmVtb3ZlRmlsdGVyKGxhYmVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xuICAgIH1cblxuICAgIC8vIFNldCBpbml0aWFsIHN0YXRlXG4gICAgaWYgKHNlbGVjdGVkRmlsdGVycy5pbmNsdWRlcyhsYWJlbCkpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciB0b2dnbGluZ1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZEZpbHRlcnMuaW5kZXhPZihsYWJlbCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBzZWxlY3RlZEZpbHRlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGVkRmlsdGVycy5wdXNoKGxhYmVsKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBzYXZlU2VsZWN0ZWRGaWx0ZXJzKCk7XG4gICAgICAgIGxvYWRDb250ZW50KCk7XG4gICAgICAgIC8vIENhbGwgYW55IGZ1bmN0aW9uIHRoYXQgZGVwZW5kcyBvbiBzZWxlY3RlZEZpbHRlcnNcbiAgICAgICAgLy8gZS5nLiwgbG9hZENvbnRlbnQoKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xufVxuXG4vLyBGdW5jdGlvbiB0byByZW1vdmUgYSBjdXN0b20gZmlsdGVyXG5hc3luYyBmdW5jdGlvbiByZW1vdmVGaWx0ZXIobGFiZWwpIHtcbiAgICAvLyBSZW1vdmUgZnJvbSBzZWxlY3RlZEZpbHRlcnMgaWYgcHJlc2VudFxuICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0ZWRGaWx0ZXJzLmluZGV4T2YobGFiZWwpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHNlbGVjdGVkRmlsdGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBzYXZlU2VsZWN0ZWRGaWx0ZXJzKCk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGZyb20gY3VzdG9tRmlsdGVycyBpbiBzdG9yYWdlXG4gICAgY29uc3QgY3VzdG9tRmlsdGVycyA9IGF3YWl0IGdldEN1c3RvbUZpbHRlcnMoKTtcbiAgICBjb25zdCBmaWx0ZXJJbmRleCA9IGN1c3RvbUZpbHRlcnMuaW5kZXhPZihsYWJlbCk7XG4gICAgaWYgKGZpbHRlckluZGV4ID4gLTEpIHtcbiAgICAgICAgY3VzdG9tRmlsdGVycy5zcGxpY2UoZmlsdGVySW5kZXgsIDEpO1xuICAgICAgICBzYXZlQ3VzdG9tRmlsdGVycyhjdXN0b21GaWx0ZXJzKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgdGhlIGJ1dHRvbiBmcm9tIHRoZSBET01cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2F0ZWdvcnktdG9nZ2xlLWJ1dHRvbltkYXRhLWxhYmVsPVwiJHtsYWJlbH1cIl1gKTtcbiAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgIGJ1dHRvbi5yZW1vdmUoKTtcbiAgICB9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSBmaWx0ZXIgYnV0dG9uIHN0YXRlcyBiYXNlZCBvbiBzZWxlY3RlZEZpbHRlcnNcbmZ1bmN0aW9uIHVwZGF0ZUZpbHRlclN0YXRlcygpIHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5LXRvZ2dsZS1idXR0b24nKTtcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBidXR0b24uZGF0YXNldC5sYWJlbDtcbiAgICAgICAgaWYgKHNlbGVjdGVkRmlsdGVycy5pbmNsdWRlcyhsYWJlbCkpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgYWRkaW5nIG5ldyBmaWx0ZXJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtZmlsdGVyLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctZmlsdGVyLWlucHV0Jyk7XG4gICAgY29uc3QgbmV3RmlsdGVyID0gaW5wdXQudmFsdWUudHJpbSgpO1xuICAgIGlmIChuZXdGaWx0ZXIgJiYgIXNlbGVjdGVkRmlsdGVycy5pbmNsdWRlcyhuZXdGaWx0ZXIpKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0b2dnbGUgYnV0dG9uXG4gICAgICAgIGNyZWF0ZVRvZ2dsZUJ1dHRvbihuZXdGaWx0ZXIsIGZhbHNlKTtcblxuICAgICAgICAvLyBTYXZlIHRvIGN1c3RvbSBmaWx0ZXJzXG4gICAgICAgIGNvbnN0IGN1c3RvbUZpbHRlcnMgPSBhd2FpdCBnZXRDdXN0b21GaWx0ZXJzKCk7XG4gICAgICAgIGN1c3RvbUZpbHRlcnMucHVzaChuZXdGaWx0ZXIpO1xuICAgICAgICBzYXZlQ3VzdG9tRmlsdGVycyhjdXN0b21GaWx0ZXJzKTtcblxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJnZXRTdW1tYXJpemVyIiwiX2dldFN1bW1hcml6ZXIiLCJfY2FsbGVlIiwiY2FuU3VtbWFyaXplIiwic3VtbWFyaXplciIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJhaSIsImNhcGFiaWxpdGllcyIsImF2YWlsYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwibG9hZGVkIiwidG90YWwiLCJyZWFkeSIsInN1bW1hcml6ZSIsIl94IiwiX3N1bW1hcml6ZSIsIl9jYWxsZWUyIiwidGV4dCIsInJlc3VsdCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImRlc3Ryb3kiLCJ0MCIsImdldEhpc3RvcnlJblRpbWVSYW5nZSIsImdldEhpc3RvcnkiLCJfeDIiLCJfZ2V0SGlzdG9yeSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJyZWplY3QiLCJjaHJvbWUiLCJoaXN0b3J5Iiwic2VhcmNoIiwic3RhcnRUaW1lIiwiZ2V0VGltZSIsImVuZFRpbWUiLCJtYXhSZXN1bHRzIiwicmVzdWx0cyIsInJ1bnRpbWUiLCJsYXN0RXJyb3IiLCJnZXRIaXN0b3J5V2l0aFRvcE5TdGF0cyIsIl94MyIsIl94NCIsIl94NSIsIl94NiIsIl9nZXRIaXN0b3J5V2l0aFRvcE5TdGF0cyIsIk4iLCJzZWxlY3RlZEZpbHRlcnMiLCJoaXN0b3J5SXRlbXMiLCJwYXJzZWRIaXN0b3J5SXRlbXMiLCJob3N0bmFtZU1hcCIsImhvc3RuYW1lVGl0bGVNYXAiLCJzb3J0ZWRIb3N0bmFtZXMiLCJ0b3BOSG9zdG5hbWVzIiwidG9wTkhvc3RuYW1lc1dpdGhUaXRsZXMiLCJtYXAiLCJpdGVtIiwicGFyc2VfdXJsX3BhcnQiLCJ1cmwiLCJ0aXRsZSIsImNvdW50X2J5X2hvc3RuYW1lIiwiY3JlYXRlSG9zdE5hbWVUaXRsZU1hcCIsIkFycmF5IiwiZnJvbSIsImVudHJpZXMiLCJzb3J0IiwiYiIsImhvc3RuYW1lIiwidGl0bGVzIiwiZ2V0IiwiY291bnQiLCJwYXJzZWRVcmwiLCJVUkwiLCJwcm90b2NvbCIsInJlcGxhY2UiLCJob3N0bmFtZVBhcnRzIiwic3BsaXQiLCJzdWJkb21haW4iLCJkb21haW4iLCJ0bGQiLCJqb2luIiwicGF0aCIsInBhdGhuYW1lIiwicXVlcnlQYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJrZXkiLCJpc0FycmF5IiwiZnJhZ21lbnQiLCJoYXNoIiwicG9ydCIsImhvc3QiLCJocmVmIiwib3JpZ2luIiwiZXJyb3IiLCJjb25jYXQiLCJNYXAiLCJoYXMiLCJzZXQiLCJzb21lIiwiZXh0cmFjdERvbWFpbiIsIm1hcmtkb3duVG9IdG1sIiwibWFya2Rvd25UZXh0IiwiaHRtbCIsImNsZWFuSW5wdXQiLCJtYXhMZW5ndGgiLCJ1bmRlZmluZWQiLCJub3JtYWxpemUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlc2NhcGUiLCJ0cmltIiwiZW5hYmxlUmVzaXppbmciLCJyZXNpemFibGVFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJyZXNpemVIYW5kbGUiLCJxdWVyeVNlbGVjdG9yIiwiaXNSZXNpemluZyIsInByZXZlbnREZWZhdWx0IiwiYm9keSIsInN0eWxlIiwiY3Vyc29yIiwiY2xhc3NMaXN0IiwiYWRkIiwic3RhcnRXaWR0aCIsIm9mZnNldFdpZHRoIiwic3RhcnRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzdGFydFgiLCJjbGllbnRYIiwic3RhcnRZIiwiY2xpZW50WSIsIm9uTW91c2VNb3ZlIiwiY3VycmVudFdpZHRoIiwiY3VycmVudEhlaWdodCIsIm1pbldpZHRoIiwibWluSGVpZ2h0Iiwid2lkdGgiLCJNYXRoIiwibWF4IiwiaGVpZ2h0Iiwib25Nb3VzZVVwIiwicmVtb3ZlIiwid2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNhdmVXaWRnZXRTaXplIiwiaWQiLCJsb2FkV2lkZ2V0U2l6ZSIsIndpZGdldElkIiwic2l6ZSIsInN0b3JhZ2UiLCJsb2NhbCIsIl9kZWZpbmVQcm9wZXJ0eSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJnZXRJdGVtIiwiY3JlYXRlT3JHZXRXaWRnZXQiLCJ1bmlxdWVJRCIsIndpZGdldFRpdGxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWRnZXRDb250YWluZXIiLCJuZXdXaWRnZXQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJkYiIsIm9wZW5EYXRhYmFzZSIsIl9vcGVuRGF0YWJhc2UiLCJyZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsIm9uZXJyb3IiLCJldmVudCIsInRhcmdldCIsImVycm9yQ29kZSIsIm9udXBncmFkZW5lZWRlZCIsIm9iamVjdFN0b3JlIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwiY3JlYXRlSW5kZXgiLCJ1bmlxdWUiLCJtdWx0aUVudHJ5Iiwib25zdWNjZXNzIiwiY2xlYXJEYXRhYmFzZSIsIl9jbGVhckRhdGFiYXNlIiwidHJhbnNhY3Rpb24iLCJjbGVhciIsImFkZEhpc3RvcnlJdGVtIiwiX2FkZEhpc3RvcnlJdGVtIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJpbmRleCIsImNoZWNrUmVxdWVzdCIsImxhc3RWaXNpdFRpbWUiLCJwdXQiLCJnZXRBbGxIaXN0b3J5SXRlbXMiLCJfZ2V0QWxsSGlzdG9yeUl0ZW1zIiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJnZXRBbGwiLCJjaGVja0lmSXRlbUV4aXN0cyIsIl9jaGVja0lmSXRlbUV4aXN0cyIsIl9jYWxsZWU1IiwiZXhpc3RzIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwicHJvbWlzaWZ5UmVxdWVzdCIsIl9nZXRIaXN0b3J5SW5UaW1lUmFuZ2UiLCJfY2FsbGVlNiIsInJhbmdlIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiSURCS2V5UmFuZ2UiLCJib3VuZCIsImFkZERhdGVSYW5nZUJ1dHRvbnMiLCJhZGRSZWZyZXNoQnV0dG9uIiwic2V0RGF0ZVJhbmdlIiwiaW5pdGlhbGl6ZUNhdGVnb3J5RmlsdGVycyIsImFkZE9yVXBkYXRlUmVjZW50SGlzdG9yeVdpZGdldCIsImFkZE9yVXBkYXRlQmFzaWNTdW1tYXJ5V2lkZ2V0IiwibG9hZENvbnRlbnQiLCJ0b2dnbGUiLCJjb250YWlucyIsInNhdmVkVGhlbWUiLCJyZWZyZXNoQnV0dG9uIiwidGV4dENvbnRlbnQiLCJjb250YWluZXIiLCJidXR0b25EYXRhIiwibGFiZWwiLCJkYXRhIiwiYnV0dG9uIiwic2V0QXR0cmlidXRlIiwiYnRuIiwidG9kYXkiLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJzZXRNb250aCIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJmb3JtYXREYXRlIiwiZGF0ZSIsInllYXIiLCJtb250aCIsImRheSIsIl9hZGRPclVwZGF0ZVJlY2VudEhpc3RvcnlXaWRnZXQiLCJsYXN0Q2hpbGQiLCJpbmNsdWRlcyIsInJlbW92ZUNoaWxkIiwiY3JlYXRlUmVjZW50SGlzdG9yeUVsZW1lbnQiLCJ3aWRnZXQiLCJfYWRkT3JVcGRhdGVCYXNpY1N1bW1hcnlXaWRnZXQiLCJjcmVhdGVCYXNpY1N1bW1hcnlFbGVtZW50IiwiX2xvYWRDb250ZW50IiwiX2NyZWF0ZVJlY2VudEhpc3RvcnlFbGVtZW50IiwiYm94IiwiaGVhZGVyIiwiaGl0Q291bnQiLCJ0aXRsZXNDb250YWluZXIiLCJ0aXRsZXNMaXN0IiwiaW5pdGlhbERpc3BsYXlDb3VudCIsImFkZGl0aW9uYWxMb2FkQ291bnQiLCJkaXNwbGF5ZWRUaXRsZXMiLCJ0aXRsZUl0ZW0iLCJsaXN0SXRlbSIsImxpbmsiLCJtb3JlQnV0dG9uIiwiZGF0YXNldCIsImxvYWRNb3JlVGl0bGVzIiwiX2NyZWF0ZUJhc2ljU3VtbWFyeUVsZW1lbnQiLCJfY2FsbGVlNyIsImhpc3RvcnlJdGVtVGl0bGVzIiwiY2h1bmtzIiwiX2kiLCJfY2h1bmtzIiwiY2h1bmsiLCJ0ZXh0RWxlbWVudCIsIl9jYWxsZWU3JCIsIl9jb250ZXh0NyIsImZsYXQiLCJpbml0aWFsQ291bnQiLCJsb2FkQ291bnQiLCJjdXJyZW50Q291bnQiLCJuZXh0Q291bnQiLCJ0aXRsZXNUb0FkZCIsInJlbWFpbmluZyIsIl9pbml0aWFsaXplQ2F0ZWdvcnlGaWx0ZXJzIiwiX2NhbGxlZTgiLCJkZWZhdWx0RmlsdGVycyIsImN1c3RvbUZpbHRlcnMiLCJhbGxGaWx0ZXJzIiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4IiwiZ2V0Q3VzdG9tRmlsdGVycyIsIl90b0NvbnN1bWFibGVBcnJheSIsImZpbHRlciIsImNyZWF0ZVRvZ2dsZUJ1dHRvbiIsImdldFNlbGVjdGVkRmlsdGVycyIsInVwZGF0ZUZpbHRlclN0YXRlcyIsInNhdmVTZWxlY3RlZEZpbHRlcnMiLCJzYXZlQ3VzdG9tRmlsdGVycyIsImlzRGVmYXVsdCIsInJlbW92ZUJ0biIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZUZpbHRlciIsImluZGV4T2YiLCJzcGxpY2UiLCJfcmVtb3ZlRmlsdGVyIiwiX2NhbGxlZTkiLCJmaWx0ZXJJbmRleCIsIl9jYWxsZWU5JCIsIl9jb250ZXh0OSIsImJ1dHRvbnMiLCJfcmVmMiIsImlucHV0IiwibmV3RmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==