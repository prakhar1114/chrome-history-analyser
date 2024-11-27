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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcl9kYXNoYm9hcmQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVMsS0FBQSxFQUFBUCxDQUFBLEVBQUFpQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBcEIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFrQixNQUFBLG1CQUFBakIsQ0FBQSxJQUFBaUIsTUFBQSxZQUFBQSxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFvQixLQUFBckIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBSyxDQUFBLEdBQUFWLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxTQUFBLFlBQUFtQixTQUFBLEdBQUF2QixDQUFBLEdBQUF1QixTQUFBLEVBQUFYLENBQUEsR0FBQVQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBZCxDQUFBLENBQUFOLFNBQUEsR0FBQVUsQ0FBQSxPQUFBVyxPQUFBLENBQUFwQixDQUFBLGdCQUFBRSxDQUFBLENBQUFLLENBQUEsZUFBQUgsS0FBQSxFQUFBaUIsZ0JBQUEsQ0FBQXpCLENBQUEsRUFBQUMsQ0FBQSxFQUFBWSxDQUFBLE1BQUFGLENBQUEsYUFBQWUsU0FBQTFCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLG1CQUFBMEIsSUFBQSxZQUFBQyxHQUFBLEVBQUE1QixDQUFBLENBQUE2QixJQUFBLENBQUE5QixDQUFBLEVBQUFFLENBQUEsY0FBQUQsQ0FBQSxhQUFBMkIsSUFBQSxXQUFBQyxHQUFBLEVBQUE1QixDQUFBLFFBQUFELENBQUEsQ0FBQXNCLElBQUEsR0FBQUEsSUFBQSxNQUFBUyxDQUFBLHFCQUFBQyxDQUFBLHFCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBWixVQUFBLGNBQUFhLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLENBQUEsT0FBQXBCLE1BQUEsQ0FBQW9CLENBQUEsRUFBQTFCLENBQUEscUNBQUEyQixDQUFBLEdBQUFwQyxNQUFBLENBQUFxQyxjQUFBLEVBQUFDLENBQUEsR0FBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFBLENBQUEsQ0FBQUcsTUFBQSxRQUFBRCxDQUFBLElBQUFBLENBQUEsS0FBQXZDLENBQUEsSUFBQUcsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBVyxDQUFBLEVBQUE3QixDQUFBLE1BQUEwQixDQUFBLEdBQUFHLENBQUEsT0FBQUUsQ0FBQSxHQUFBTiwwQkFBQSxDQUFBakMsU0FBQSxHQUFBbUIsU0FBQSxDQUFBbkIsU0FBQSxHQUFBRCxNQUFBLENBQUFxQixNQUFBLENBQUFjLENBQUEsWUFBQU0sc0JBQUEzQyxDQUFBLGdDQUFBNEMsT0FBQSxXQUFBN0MsQ0FBQSxJQUFBa0IsTUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLFlBQUFDLENBQUEsZ0JBQUE2QyxPQUFBLENBQUE5QyxDQUFBLEVBQUFDLENBQUEsc0JBQUE4QyxjQUFBOUMsQ0FBQSxFQUFBRCxDQUFBLGFBQUFnRCxPQUFBOUMsQ0FBQSxFQUFBSyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEdBQUFhLFFBQUEsQ0FBQTFCLENBQUEsQ0FBQUMsQ0FBQSxHQUFBRCxDQUFBLEVBQUFNLENBQUEsbUJBQUFPLENBQUEsQ0FBQWMsSUFBQSxRQUFBWixDQUFBLEdBQUFGLENBQUEsQ0FBQWUsR0FBQSxFQUFBRSxDQUFBLEdBQUFmLENBQUEsQ0FBQVAsS0FBQSxTQUFBc0IsQ0FBQSxnQkFBQWtCLE9BQUEsQ0FBQWxCLENBQUEsS0FBQTFCLENBQUEsQ0FBQXlCLElBQUEsQ0FBQUMsQ0FBQSxlQUFBL0IsQ0FBQSxDQUFBa0QsT0FBQSxDQUFBbkIsQ0FBQSxDQUFBb0IsT0FBQSxFQUFBQyxJQUFBLFdBQUFuRCxDQUFBLElBQUErQyxNQUFBLFNBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxnQkFBQVgsQ0FBQSxJQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsUUFBQVosQ0FBQSxDQUFBa0QsT0FBQSxDQUFBbkIsQ0FBQSxFQUFBcUIsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBZSxDQUFBLENBQUFQLEtBQUEsR0FBQVIsQ0FBQSxFQUFBUyxDQUFBLENBQUFNLENBQUEsZ0JBQUFmLENBQUEsV0FBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsQ0FBQUUsQ0FBQSxDQUFBZSxHQUFBLFNBQUEzQixDQUFBLEVBQUFLLENBQUEsb0JBQUFFLEtBQUEsV0FBQUEsTUFBQVIsQ0FBQSxFQUFBSSxDQUFBLGFBQUFnRCwyQkFBQSxlQUFBckQsQ0FBQSxXQUFBQSxDQUFBLEVBQUFFLENBQUEsSUFBQThDLE1BQUEsQ0FBQS9DLENBQUEsRUFBQUksQ0FBQSxFQUFBTCxDQUFBLEVBQUFFLENBQUEsZ0JBQUFBLENBQUEsR0FBQUEsQ0FBQSxHQUFBQSxDQUFBLENBQUFrRCxJQUFBLENBQUFDLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBM0IsaUJBQUExQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBRSxDQUFBLEdBQUF3QixDQUFBLG1CQUFBckIsQ0FBQSxFQUFBRSxDQUFBLFFBQUFMLENBQUEsS0FBQTBCLENBQUEsUUFBQXFCLEtBQUEsc0NBQUEvQyxDQUFBLEtBQUEyQixDQUFBLG9CQUFBeEIsQ0FBQSxRQUFBRSxDQUFBLFdBQUFILEtBQUEsRUFBQVIsQ0FBQSxFQUFBc0QsSUFBQSxlQUFBbEQsQ0FBQSxDQUFBbUQsTUFBQSxHQUFBOUMsQ0FBQSxFQUFBTCxDQUFBLENBQUF3QixHQUFBLEdBQUFqQixDQUFBLFVBQUFFLENBQUEsR0FBQVQsQ0FBQSxDQUFBb0QsUUFBQSxNQUFBM0MsQ0FBQSxRQUFBRSxDQUFBLEdBQUEwQyxtQkFBQSxDQUFBNUMsQ0FBQSxFQUFBVCxDQUFBLE9BQUFXLENBQUEsUUFBQUEsQ0FBQSxLQUFBbUIsQ0FBQSxtQkFBQW5CLENBQUEscUJBQUFYLENBQUEsQ0FBQW1ELE1BQUEsRUFBQW5ELENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQXVELEtBQUEsR0FBQXZELENBQUEsQ0FBQXdCLEdBQUEsc0JBQUF4QixDQUFBLENBQUFtRCxNQUFBLFFBQUFqRCxDQUFBLEtBQUF3QixDQUFBLFFBQUF4QixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUF3QixHQUFBLEVBQUF4QixDQUFBLENBQUF3RCxpQkFBQSxDQUFBeEQsQ0FBQSxDQUFBd0IsR0FBQSx1QkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsSUFBQW5ELENBQUEsQ0FBQXlELE1BQUEsV0FBQXpELENBQUEsQ0FBQXdCLEdBQUEsR0FBQXRCLENBQUEsR0FBQTBCLENBQUEsTUFBQUssQ0FBQSxHQUFBWCxRQUFBLENBQUEzQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxvQkFBQWlDLENBQUEsQ0FBQVYsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUFrRCxJQUFBLEdBQUFyQixDQUFBLEdBQUFGLENBQUEsRUFBQU0sQ0FBQSxDQUFBVCxHQUFBLEtBQUFNLENBQUEscUJBQUExQixLQUFBLEVBQUE2QixDQUFBLENBQUFULEdBQUEsRUFBQTBCLElBQUEsRUFBQWxELENBQUEsQ0FBQWtELElBQUEsa0JBQUFqQixDQUFBLENBQUFWLElBQUEsS0FBQXJCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQW1ELE1BQUEsWUFBQW5ELENBQUEsQ0FBQXdCLEdBQUEsR0FBQVMsQ0FBQSxDQUFBVCxHQUFBLG1CQUFBNkIsb0JBQUExRCxDQUFBLEVBQUFFLENBQUEsUUFBQUcsQ0FBQSxHQUFBSCxDQUFBLENBQUFzRCxNQUFBLEVBQUFqRCxDQUFBLEdBQUFQLENBQUEsQ0FBQWEsUUFBQSxDQUFBUixDQUFBLE9BQUFFLENBQUEsS0FBQU4sQ0FBQSxTQUFBQyxDQUFBLENBQUF1RCxRQUFBLHFCQUFBcEQsQ0FBQSxJQUFBTCxDQUFBLENBQUFhLFFBQUEsZUFBQVgsQ0FBQSxDQUFBc0QsTUFBQSxhQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxFQUFBeUQsbUJBQUEsQ0FBQTFELENBQUEsRUFBQUUsQ0FBQSxlQUFBQSxDQUFBLENBQUFzRCxNQUFBLGtCQUFBbkQsQ0FBQSxLQUFBSCxDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHVDQUFBMUQsQ0FBQSxpQkFBQThCLENBQUEsTUFBQXpCLENBQUEsR0FBQWlCLFFBQUEsQ0FBQXBCLENBQUEsRUFBQVAsQ0FBQSxDQUFBYSxRQUFBLEVBQUFYLENBQUEsQ0FBQTJCLEdBQUEsbUJBQUFuQixDQUFBLENBQUFrQixJQUFBLFNBQUExQixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUFuQixDQUFBLENBQUFtQixHQUFBLEVBQUEzQixDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLE1BQUF2QixDQUFBLEdBQUFGLENBQUEsQ0FBQW1CLEdBQUEsU0FBQWpCLENBQUEsR0FBQUEsQ0FBQSxDQUFBMkMsSUFBQSxJQUFBckQsQ0FBQSxDQUFBRixDQUFBLENBQUFnRSxVQUFBLElBQUFwRCxDQUFBLENBQUFILEtBQUEsRUFBQVAsQ0FBQSxDQUFBK0QsSUFBQSxHQUFBakUsQ0FBQSxDQUFBa0UsT0FBQSxlQUFBaEUsQ0FBQSxDQUFBc0QsTUFBQSxLQUFBdEQsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxHQUFBQyxDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLElBQUF2QixDQUFBLElBQUFWLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsc0NBQUE3RCxDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLGNBQUFnQyxhQUFBbEUsQ0FBQSxRQUFBRCxDQUFBLEtBQUFvRSxNQUFBLEVBQUFuRSxDQUFBLFlBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBcUUsUUFBQSxHQUFBcEUsQ0FBQSxXQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXNFLFVBQUEsR0FBQXJFLENBQUEsS0FBQUQsQ0FBQSxDQUFBdUUsUUFBQSxHQUFBdEUsQ0FBQSxXQUFBdUUsVUFBQSxDQUFBQyxJQUFBLENBQUF6RSxDQUFBLGNBQUEwRSxjQUFBekUsQ0FBQSxRQUFBRCxDQUFBLEdBQUFDLENBQUEsQ0FBQTBFLFVBQUEsUUFBQTNFLENBQUEsQ0FBQTRCLElBQUEsb0JBQUE1QixDQUFBLENBQUE2QixHQUFBLEVBQUE1QixDQUFBLENBQUEwRSxVQUFBLEdBQUEzRSxDQUFBLGFBQUF5QixRQUFBeEIsQ0FBQSxTQUFBdUUsVUFBQSxNQUFBSixNQUFBLGFBQUFuRSxDQUFBLENBQUE0QyxPQUFBLENBQUFzQixZQUFBLGNBQUFTLEtBQUEsaUJBQUFsQyxPQUFBMUMsQ0FBQSxRQUFBQSxDQUFBLFdBQUFBLENBQUEsUUFBQUUsQ0FBQSxHQUFBRixDQUFBLENBQUFZLENBQUEsT0FBQVYsQ0FBQSxTQUFBQSxDQUFBLENBQUE0QixJQUFBLENBQUE5QixDQUFBLDRCQUFBQSxDQUFBLENBQUFpRSxJQUFBLFNBQUFqRSxDQUFBLE9BQUE2RSxLQUFBLENBQUE3RSxDQUFBLENBQUE4RSxNQUFBLFNBQUF2RSxDQUFBLE9BQUFHLENBQUEsWUFBQXVELEtBQUEsYUFBQTFELENBQUEsR0FBQVAsQ0FBQSxDQUFBOEUsTUFBQSxPQUFBekUsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBTyxDQUFBLFVBQUEwRCxJQUFBLENBQUF4RCxLQUFBLEdBQUFULENBQUEsQ0FBQU8sQ0FBQSxHQUFBMEQsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsU0FBQUEsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxZQUFBdkQsQ0FBQSxDQUFBdUQsSUFBQSxHQUFBdkQsQ0FBQSxnQkFBQXFELFNBQUEsQ0FBQWQsT0FBQSxDQUFBakQsQ0FBQSxrQ0FBQW9DLGlCQUFBLENBQUFoQyxTQUFBLEdBQUFpQywwQkFBQSxFQUFBOUIsQ0FBQSxDQUFBb0MsQ0FBQSxtQkFBQWxDLEtBQUEsRUFBQTRCLDBCQUFBLEVBQUFqQixZQUFBLFNBQUFiLENBQUEsQ0FBQThCLDBCQUFBLG1CQUFBNUIsS0FBQSxFQUFBMkIsaUJBQUEsRUFBQWhCLFlBQUEsU0FBQWdCLGlCQUFBLENBQUEyQyxXQUFBLEdBQUE3RCxNQUFBLENBQUFtQiwwQkFBQSxFQUFBckIsQ0FBQSx3QkFBQWhCLENBQUEsQ0FBQWdGLG1CQUFBLGFBQUEvRSxDQUFBLFFBQUFELENBQUEsd0JBQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBZ0YsV0FBQSxXQUFBakYsQ0FBQSxLQUFBQSxDQUFBLEtBQUFvQyxpQkFBQSw2QkFBQXBDLENBQUEsQ0FBQStFLFdBQUEsSUFBQS9FLENBQUEsQ0FBQWtGLElBQUEsT0FBQWxGLENBQUEsQ0FBQW1GLElBQUEsYUFBQWxGLENBQUEsV0FBQUUsTUFBQSxDQUFBaUYsY0FBQSxHQUFBakYsTUFBQSxDQUFBaUYsY0FBQSxDQUFBbkYsQ0FBQSxFQUFBb0MsMEJBQUEsS0FBQXBDLENBQUEsQ0FBQW9GLFNBQUEsR0FBQWhELDBCQUFBLEVBQUFuQixNQUFBLENBQUFqQixDQUFBLEVBQUFlLENBQUEseUJBQUFmLENBQUEsQ0FBQUcsU0FBQSxHQUFBRCxNQUFBLENBQUFxQixNQUFBLENBQUFtQixDQUFBLEdBQUExQyxDQUFBLEtBQUFELENBQUEsQ0FBQXNGLEtBQUEsYUFBQXJGLENBQUEsYUFBQWtELE9BQUEsRUFBQWxELENBQUEsT0FBQTJDLHFCQUFBLENBQUFHLGFBQUEsQ0FBQTNDLFNBQUEsR0FBQWMsTUFBQSxDQUFBNkIsYUFBQSxDQUFBM0MsU0FBQSxFQUFBVSxDQUFBLGlDQUFBZCxDQUFBLENBQUErQyxhQUFBLEdBQUFBLGFBQUEsRUFBQS9DLENBQUEsQ0FBQXVGLEtBQUEsYUFBQXRGLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxlQUFBQSxDQUFBLEtBQUFBLENBQUEsR0FBQThFLE9BQUEsT0FBQTVFLENBQUEsT0FBQW1DLGFBQUEsQ0FBQXpCLElBQUEsQ0FBQXJCLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsR0FBQUcsQ0FBQSxVQUFBVixDQUFBLENBQUFnRixtQkFBQSxDQUFBOUUsQ0FBQSxJQUFBVSxDQUFBLEdBQUFBLENBQUEsQ0FBQXFELElBQUEsR0FBQWIsSUFBQSxXQUFBbkQsQ0FBQSxXQUFBQSxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUFRLEtBQUEsR0FBQUcsQ0FBQSxDQUFBcUQsSUFBQSxXQUFBckIscUJBQUEsQ0FBQUQsQ0FBQSxHQUFBekIsTUFBQSxDQUFBeUIsQ0FBQSxFQUFBM0IsQ0FBQSxnQkFBQUUsTUFBQSxDQUFBeUIsQ0FBQSxFQUFBL0IsQ0FBQSxpQ0FBQU0sTUFBQSxDQUFBeUIsQ0FBQSw2REFBQTNDLENBQUEsQ0FBQXlGLElBQUEsYUFBQXhGLENBQUEsUUFBQUQsQ0FBQSxHQUFBRyxNQUFBLENBQUFGLENBQUEsR0FBQUMsQ0FBQSxnQkFBQUcsQ0FBQSxJQUFBTCxDQUFBLEVBQUFFLENBQUEsQ0FBQXVFLElBQUEsQ0FBQXBFLENBQUEsVUFBQUgsQ0FBQSxDQUFBd0YsT0FBQSxhQUFBekIsS0FBQSxXQUFBL0QsQ0FBQSxDQUFBNEUsTUFBQSxTQUFBN0UsQ0FBQSxHQUFBQyxDQUFBLENBQUF5RixHQUFBLFFBQUExRixDQUFBLElBQUFELENBQUEsU0FBQWlFLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsV0FBQUEsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsUUFBQWpFLENBQUEsQ0FBQTBDLE1BQUEsR0FBQUEsTUFBQSxFQUFBakIsT0FBQSxDQUFBckIsU0FBQSxLQUFBNkUsV0FBQSxFQUFBeEQsT0FBQSxFQUFBbUQsS0FBQSxXQUFBQSxNQUFBNUUsQ0FBQSxhQUFBNEYsSUFBQSxXQUFBM0IsSUFBQSxXQUFBTixJQUFBLFFBQUFDLEtBQUEsR0FBQTNELENBQUEsT0FBQXNELElBQUEsWUFBQUUsUUFBQSxjQUFBRCxNQUFBLGdCQUFBM0IsR0FBQSxHQUFBNUIsQ0FBQSxPQUFBdUUsVUFBQSxDQUFBM0IsT0FBQSxDQUFBNkIsYUFBQSxJQUFBMUUsQ0FBQSxXQUFBRSxDQUFBLGtCQUFBQSxDQUFBLENBQUEyRixNQUFBLE9BQUF4RixDQUFBLENBQUF5QixJQUFBLE9BQUE1QixDQUFBLE1BQUEyRSxLQUFBLEVBQUEzRSxDQUFBLENBQUE0RixLQUFBLGNBQUE1RixDQUFBLElBQUFELENBQUEsTUFBQThGLElBQUEsV0FBQUEsS0FBQSxTQUFBeEMsSUFBQSxXQUFBdEQsQ0FBQSxRQUFBdUUsVUFBQSxJQUFBRyxVQUFBLGtCQUFBMUUsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxjQUFBbUUsSUFBQSxLQUFBbkMsaUJBQUEsV0FBQUEsa0JBQUE3RCxDQUFBLGFBQUF1RCxJQUFBLFFBQUF2RCxDQUFBLE1BQUFFLENBQUEsa0JBQUErRixPQUFBNUYsQ0FBQSxFQUFBRSxDQUFBLFdBQUFLLENBQUEsQ0FBQWdCLElBQUEsWUFBQWhCLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQUUsQ0FBQSxDQUFBK0QsSUFBQSxHQUFBNUQsQ0FBQSxFQUFBRSxDQUFBLEtBQUFMLENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsS0FBQU0sQ0FBQSxhQUFBQSxDQUFBLFFBQUFpRSxVQUFBLENBQUFNLE1BQUEsTUFBQXZFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRyxDQUFBLFFBQUE4RCxVQUFBLENBQUFqRSxDQUFBLEdBQUFLLENBQUEsR0FBQUYsQ0FBQSxDQUFBaUUsVUFBQSxpQkFBQWpFLENBQUEsQ0FBQTBELE1BQUEsU0FBQTZCLE1BQUEsYUFBQXZGLENBQUEsQ0FBQTBELE1BQUEsU0FBQXdCLElBQUEsUUFBQTlFLENBQUEsR0FBQVQsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxlQUFBTSxDQUFBLEdBQUFYLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEscUJBQUFJLENBQUEsSUFBQUUsQ0FBQSxhQUFBNEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxnQkFBQXVCLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsY0FBQXhELENBQUEsYUFBQThFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEscUJBQUFyRCxDQUFBLFFBQUFzQyxLQUFBLHFEQUFBc0MsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxZQUFBUixNQUFBLFdBQUFBLE9BQUE3RCxDQUFBLEVBQUFELENBQUEsYUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE1RSxDQUFBLFNBQUFBLENBQUEsUUFBQUssQ0FBQSxRQUFBaUUsVUFBQSxDQUFBdEUsQ0FBQSxPQUFBSyxDQUFBLENBQUE2RCxNQUFBLFNBQUF3QixJQUFBLElBQUF2RixDQUFBLENBQUF5QixJQUFBLENBQUF2QixDQUFBLHdCQUFBcUYsSUFBQSxHQUFBckYsQ0FBQSxDQUFBK0QsVUFBQSxRQUFBNUQsQ0FBQSxHQUFBSCxDQUFBLGFBQUFHLENBQUEsaUJBQUFULENBQUEsbUJBQUFBLENBQUEsS0FBQVMsQ0FBQSxDQUFBMEQsTUFBQSxJQUFBcEUsQ0FBQSxJQUFBQSxDQUFBLElBQUFVLENBQUEsQ0FBQTRELFVBQUEsS0FBQTVELENBQUEsY0FBQUUsQ0FBQSxHQUFBRixDQUFBLEdBQUFBLENBQUEsQ0FBQWlFLFVBQUEsY0FBQS9ELENBQUEsQ0FBQWdCLElBQUEsR0FBQTNCLENBQUEsRUFBQVcsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBVSxDQUFBLFNBQUE4QyxNQUFBLGdCQUFBUyxJQUFBLEdBQUF2RCxDQUFBLENBQUE0RCxVQUFBLEVBQUFuQyxDQUFBLFNBQUErRCxRQUFBLENBQUF0RixDQUFBLE1BQUFzRixRQUFBLFdBQUFBLFNBQUFqRyxDQUFBLEVBQUFELENBQUEsb0JBQUFDLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEscUJBQUE1QixDQUFBLENBQUEyQixJQUFBLG1CQUFBM0IsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBcUMsSUFBQSxHQUFBaEUsQ0FBQSxDQUFBNEIsR0FBQSxnQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsU0FBQW9FLElBQUEsUUFBQW5FLEdBQUEsR0FBQTVCLENBQUEsQ0FBQTRCLEdBQUEsT0FBQTJCLE1BQUEsa0JBQUFTLElBQUEseUJBQUFoRSxDQUFBLENBQUEyQixJQUFBLElBQUE1QixDQUFBLFVBQUFpRSxJQUFBLEdBQUFqRSxDQUFBLEdBQUFtQyxDQUFBLEtBQUFnRSxNQUFBLFdBQUFBLE9BQUFsRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBb0UsVUFBQSxLQUFBckUsQ0FBQSxjQUFBaUcsUUFBQSxDQUFBaEcsQ0FBQSxDQUFBeUUsVUFBQSxFQUFBekUsQ0FBQSxDQUFBcUUsUUFBQSxHQUFBRyxhQUFBLENBQUF4RSxDQUFBLEdBQUFpQyxDQUFBLHlCQUFBaUUsT0FBQW5HLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFrRSxNQUFBLEtBQUFuRSxDQUFBLFFBQUFJLENBQUEsR0FBQUgsQ0FBQSxDQUFBeUUsVUFBQSxrQkFBQXRFLENBQUEsQ0FBQXVCLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBNkMsYUFBQSxDQUFBeEUsQ0FBQSxZQUFBSyxDQUFBLFlBQUErQyxLQUFBLDhCQUFBK0MsYUFBQSxXQUFBQSxjQUFBckcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZ0JBQUFvRCxRQUFBLEtBQUE1QyxRQUFBLEVBQUE2QixNQUFBLENBQUExQyxDQUFBLEdBQUFnRSxVQUFBLEVBQUE5RCxDQUFBLEVBQUFnRSxPQUFBLEVBQUE3RCxDQUFBLG9CQUFBbUQsTUFBQSxVQUFBM0IsR0FBQSxHQUFBNUIsQ0FBQSxHQUFBa0MsQ0FBQSxPQUFBbkMsQ0FBQTtBQUFBLFNBQUFzRyxtQkFBQWpHLENBQUEsRUFBQUosQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUssQ0FBQSxFQUFBSyxDQUFBLEVBQUFFLENBQUEsY0FBQUosQ0FBQSxHQUFBTCxDQUFBLENBQUFPLENBQUEsRUFBQUUsQ0FBQSxHQUFBRSxDQUFBLEdBQUFOLENBQUEsQ0FBQUQsS0FBQSxXQUFBSixDQUFBLGdCQUFBTCxDQUFBLENBQUFLLENBQUEsS0FBQUssQ0FBQSxDQUFBNkMsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBZSxDQUFBLElBQUF3RSxPQUFBLENBQUF0QyxPQUFBLENBQUFsQyxDQUFBLEVBQUFvQyxJQUFBLENBQUFsRCxDQUFBLEVBQUFLLENBQUE7QUFBQSxTQUFBZ0csa0JBQUFsRyxDQUFBLDZCQUFBSixDQUFBLFNBQUFELENBQUEsR0FBQXdHLFNBQUEsYUFBQWhCLE9BQUEsV0FBQXRGLENBQUEsRUFBQUssQ0FBQSxRQUFBSyxDQUFBLEdBQUFQLENBQUEsQ0FBQW9HLEtBQUEsQ0FBQXhHLENBQUEsRUFBQUQsQ0FBQSxZQUFBMEcsTUFBQXJHLENBQUEsSUFBQWlHLGtCQUFBLENBQUExRixDQUFBLEVBQUFWLENBQUEsRUFBQUssQ0FBQSxFQUFBbUcsS0FBQSxFQUFBQyxNQUFBLFVBQUF0RyxDQUFBLGNBQUFzRyxPQUFBdEcsQ0FBQSxJQUFBaUcsa0JBQUEsQ0FBQTFGLENBQUEsRUFBQVYsQ0FBQSxFQUFBSyxDQUFBLEVBQUFtRyxLQUFBLEVBQUFDLE1BQUEsV0FBQXRHLENBQUEsS0FBQXFHLEtBQUE7QUFBQSxTQURlRSxhQUFhQSxDQUFBO0VBQUEsT0FBQUMsY0FBQSxDQUFBSixLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUFBLFNBQUFLLGVBQUE7RUFBQUEsY0FBQSxHQUFBTixpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FBNUIsU0FBQTJCLFFBQUE7SUFBQSxJQUFBQyxPQUFBLEVBQUFDLFNBQUEsRUFBQUMsVUFBQTtJQUFBLE9BQUFsSCxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBNEYsU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUF2QixJQUFBLEdBQUF1QixRQUFBLENBQUFsRCxJQUFBO1FBQUE7VUFDVThDLE9BQU8sR0FBRztZQUNaSyxhQUFhLEVBQUUsOENBQThDO1lBQzdEeEYsSUFBSSxFQUFFLFlBQVk7WUFDbEJ5RixNQUFNLEVBQUUsVUFBVTtZQUNsQnZDLE1BQU0sRUFBRTtVQUNWLENBQUM7VUFBQXFDLFFBQUEsQ0FBQWxELElBQUE7VUFBQSxPQUV3QnFELElBQUksQ0FBQ0MsRUFBRSxDQUFDTixVQUFVLENBQUNPLFlBQVksQ0FBQyxDQUFDO1FBQUE7VUFBcERSLFNBQVMsR0FBQUcsUUFBQSxDQUFBeEQsSUFBQSxDQUE2Q3FELFNBQVM7VUFBQSxNQUVqRUEsU0FBUyxLQUFLLElBQUk7WUFBQUcsUUFBQSxDQUFBbEQsSUFBQTtZQUFBO1VBQUE7VUFBQSxNQUVkLElBQUlYLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQztRQUFBO1VBQUEsTUFFaEQwRCxTQUFTLEtBQUssU0FBUztZQUFBRyxRQUFBLENBQUFsRCxJQUFBO1lBQUE7VUFBQTtVQUFBa0QsUUFBQSxDQUFBbEQsSUFBQTtVQUFBLE9BRU5xRCxJQUFJLENBQUNDLEVBQUUsQ0FBQ04sVUFBVSxDQUFDekYsTUFBTSxDQUFDdUYsT0FBTyxDQUFDO1FBQUE7VUFBckRFLFVBQVUsR0FBQUUsUUFBQSxDQUFBeEQsSUFBQTtVQUFBLE9BQUF3RCxRQUFBLENBQUFyRCxNQUFBLFdBQ0htRCxVQUFVO1FBQUE7VUFBQUUsUUFBQSxDQUFBbEQsSUFBQTtVQUFBLE9BR0VxRCxJQUFJLENBQUNDLEVBQUUsQ0FBQ04sVUFBVSxDQUFDekYsTUFBTSxDQUFDdUYsT0FBTyxDQUFDO1FBQUE7VUFBckRFLFVBQVUsR0FBQUUsUUFBQSxDQUFBeEQsSUFBQTtVQUNWc0QsVUFBVSxDQUFDUSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxVQUFDekgsQ0FBQyxFQUFLO1lBQ3JEMEgsT0FBTyxDQUFDQyxHQUFHLENBQUMzSCxDQUFDLENBQUM0SCxNQUFNLEVBQUU1SCxDQUFDLENBQUM2SCxLQUFLLENBQUM7VUFDaEMsQ0FBQyxDQUFDO1VBQUNWLFFBQUEsQ0FBQWxELElBQUE7VUFBQSxPQUNHZ0QsVUFBVSxDQUFDYSxLQUFLO1FBQUE7VUFBQSxPQUFBWCxRQUFBLENBQUFyRCxNQUFBLFdBQ2ZtRCxVQUFVO1FBQUE7UUFBQTtVQUFBLE9BQUFFLFFBQUEsQ0FBQXBCLElBQUE7TUFBQTtJQUFBLEdBQUFlLE9BQUE7RUFBQSxDQUV4QjtFQUFBLE9BQUFELGNBQUEsQ0FBQUosS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFBQSxTQUVjdUIsU0FBU0EsQ0FBQUMsRUFBQTtFQUFBLE9BQUFDLFVBQUEsQ0FBQXhCLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBQUEsU0FBQXlCLFdBQUE7RUFBQUEsVUFBQSxHQUFBMUIsaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBQXhCLFNBQUErQyxTQUF5QkMsSUFBSTtJQUFBLElBQUFsQixVQUFBLEVBQUFtQixNQUFBO0lBQUEsT0FBQXJJLG1CQUFBLEdBQUF1QixJQUFBLFVBQUErRyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQTFDLElBQUEsR0FBQTBDLFNBQUEsQ0FBQXJFLElBQUE7UUFBQTtVQUFBcUUsU0FBQSxDQUFBMUMsSUFBQTtVQUFBMEMsU0FBQSxDQUFBckUsSUFBQTtVQUFBLE9BRUkyQyxhQUFhLENBQUMsQ0FBQztRQUFBO1VBQWxDSyxVQUFVLEdBQUFxQixTQUFBLENBQUEzRSxJQUFBO1VBQUEyRSxTQUFBLENBQUFyRSxJQUFBO1VBQUEsT0FDS2dELFVBQVUsQ0FBQ2MsU0FBUyxDQUFDSSxJQUFJLEVBQUU7WUFDNUNJLE9BQU8sRUFBRTtVQUNiLENBQUMsQ0FBQztRQUFBO1VBRklILE1BQU0sR0FBQUUsU0FBQSxDQUFBM0UsSUFBQTtVQUFBMkUsU0FBQSxDQUFBckUsSUFBQTtVQUFBLE9BR05nRCxVQUFVLENBQUN1QixPQUFPLENBQUMsQ0FBQztRQUFBO1VBQUEsT0FBQUYsU0FBQSxDQUFBeEUsTUFBQSxXQUNuQnNFLE1BQU07UUFBQTtVQUFBRSxTQUFBLENBQUExQyxJQUFBO1VBQUEwQyxTQUFBLENBQUFHLEVBQUEsR0FBQUgsU0FBQTtVQUViWixPQUFPLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBQVcsU0FBQSxDQUFBRyxFQUFPLENBQUM7VUFBQyxPQUFBSCxTQUFBLENBQUF4RSxNQUFBLFdBQzNDLEVBQUU7UUFBQTtRQUFBO1VBQUEsT0FBQXdFLFNBQUEsQ0FBQXZDLElBQUE7TUFBQTtJQUFBLEdBQUFtQyxRQUFBO0VBQUEsQ0FFaEI7RUFBQSxPQUFBRCxVQUFBLENBQUF4QixLQUFBLE9BQUFELFNBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQ3hDRCxxSkFBQXpHLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBQyxNQUFBLENBQUFLLGNBQUEsQ0FBQVAsQ0FBQSxFQUFBRCxDQUFBLElBQUFTLEtBQUEsRUFBQVAsQ0FBQSxFQUFBaUIsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXBCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBa0IsTUFBQSxtQkFBQWpCLENBQUEsSUFBQWlCLE1BQUEsWUFBQUEsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBb0IsS0FBQXJCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUssQ0FBQSxHQUFBVixDQUFBLElBQUFBLENBQUEsQ0FBQUksU0FBQSxZQUFBbUIsU0FBQSxHQUFBdkIsQ0FBQSxHQUFBdUIsU0FBQSxFQUFBWCxDQUFBLEdBQUFULE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWQsQ0FBQSxDQUFBTixTQUFBLEdBQUFVLENBQUEsT0FBQVcsT0FBQSxDQUFBcEIsQ0FBQSxnQkFBQUUsQ0FBQSxDQUFBSyxDQUFBLGVBQUFILEtBQUEsRUFBQWlCLGdCQUFBLENBQUF6QixDQUFBLEVBQUFDLENBQUEsRUFBQVksQ0FBQSxNQUFBRixDQUFBLGFBQUFlLFNBQUExQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxtQkFBQTBCLElBQUEsWUFBQUMsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBNkIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBRSxDQUFBLGNBQUFELENBQUEsYUFBQTJCLElBQUEsV0FBQUMsR0FBQSxFQUFBNUIsQ0FBQSxRQUFBRCxDQUFBLENBQUFzQixJQUFBLEdBQUFBLElBQUEsTUFBQVMsQ0FBQSxxQkFBQUMsQ0FBQSxxQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQVosVUFBQSxjQUFBYSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxDQUFBLE9BQUFwQixNQUFBLENBQUFvQixDQUFBLEVBQUExQixDQUFBLHFDQUFBMkIsQ0FBQSxHQUFBcEMsTUFBQSxDQUFBcUMsY0FBQSxFQUFBQyxDQUFBLEdBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBQSxDQUFBLENBQUFHLE1BQUEsUUFBQUQsQ0FBQSxJQUFBQSxDQUFBLEtBQUF2QyxDQUFBLElBQUFHLENBQUEsQ0FBQXlCLElBQUEsQ0FBQVcsQ0FBQSxFQUFBN0IsQ0FBQSxNQUFBMEIsQ0FBQSxHQUFBRyxDQUFBLE9BQUFFLENBQUEsR0FBQU4sMEJBQUEsQ0FBQWpDLFNBQUEsR0FBQW1CLFNBQUEsQ0FBQW5CLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBYyxDQUFBLFlBQUFNLHNCQUFBM0MsQ0FBQSxnQ0FBQTRDLE9BQUEsV0FBQTdDLENBQUEsSUFBQWtCLE1BQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGdCQUFBNkMsT0FBQSxDQUFBOUMsQ0FBQSxFQUFBQyxDQUFBLHNCQUFBOEMsY0FBQTlDLENBQUEsRUFBQUQsQ0FBQSxhQUFBZ0QsT0FBQTlDLENBQUEsRUFBQUssQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxHQUFBYSxRQUFBLENBQUExQixDQUFBLENBQUFDLENBQUEsR0FBQUQsQ0FBQSxFQUFBTSxDQUFBLG1CQUFBTyxDQUFBLENBQUFjLElBQUEsUUFBQVosQ0FBQSxHQUFBRixDQUFBLENBQUFlLEdBQUEsRUFBQUUsQ0FBQSxHQUFBZixDQUFBLENBQUFQLEtBQUEsU0FBQXNCLENBQUEsZ0JBQUFrQixPQUFBLENBQUFsQixDQUFBLEtBQUExQixDQUFBLENBQUF5QixJQUFBLENBQUFDLENBQUEsZUFBQS9CLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsQ0FBQW9CLE9BQUEsRUFBQUMsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBK0MsTUFBQSxTQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsZ0JBQUFYLENBQUEsSUFBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFFBQUFaLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsRUFBQXFCLElBQUEsV0FBQW5ELENBQUEsSUFBQWUsQ0FBQSxDQUFBUCxLQUFBLEdBQUFSLENBQUEsRUFBQVMsQ0FBQSxDQUFBTSxDQUFBLGdCQUFBZixDQUFBLFdBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLENBQUFFLENBQUEsQ0FBQWUsR0FBQSxTQUFBM0IsQ0FBQSxFQUFBSyxDQUFBLG9CQUFBRSxLQUFBLFdBQUFBLE1BQUFSLENBQUEsRUFBQUksQ0FBQSxhQUFBZ0QsMkJBQUEsZUFBQXJELENBQUEsV0FBQUEsQ0FBQSxFQUFBRSxDQUFBLElBQUE4QyxNQUFBLENBQUEvQyxDQUFBLEVBQUFJLENBQUEsRUFBQUwsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBQSxDQUFBLEdBQUFBLENBQUEsR0FBQUEsQ0FBQSxDQUFBa0QsSUFBQSxDQUFBQywwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQTNCLGlCQUFBMUIsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUUsQ0FBQSxHQUFBd0IsQ0FBQSxtQkFBQXJCLENBQUEsRUFBQUUsQ0FBQSxRQUFBTCxDQUFBLEtBQUEwQixDQUFBLFFBQUFxQixLQUFBLHNDQUFBL0MsQ0FBQSxLQUFBMkIsQ0FBQSxvQkFBQXhCLENBQUEsUUFBQUUsQ0FBQSxXQUFBSCxLQUFBLEVBQUFSLENBQUEsRUFBQXNELElBQUEsZUFBQWxELENBQUEsQ0FBQW1ELE1BQUEsR0FBQTlDLENBQUEsRUFBQUwsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBakIsQ0FBQSxVQUFBRSxDQUFBLEdBQUFULENBQUEsQ0FBQW9ELFFBQUEsTUFBQTNDLENBQUEsUUFBQUUsQ0FBQSxHQUFBMEMsbUJBQUEsQ0FBQTVDLENBQUEsRUFBQVQsQ0FBQSxPQUFBVyxDQUFBLFFBQUFBLENBQUEsS0FBQW1CLENBQUEsbUJBQUFuQixDQUFBLHFCQUFBWCxDQUFBLENBQUFtRCxNQUFBLEVBQUFuRCxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUF1RCxLQUFBLEdBQUF2RCxDQUFBLENBQUF3QixHQUFBLHNCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxRQUFBakQsQ0FBQSxLQUFBd0IsQ0FBQSxRQUFBeEIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBeEIsQ0FBQSxDQUFBd0QsaUJBQUEsQ0FBQXhELENBQUEsQ0FBQXdCLEdBQUEsdUJBQUF4QixDQUFBLENBQUFtRCxNQUFBLElBQUFuRCxDQUFBLENBQUF5RCxNQUFBLFdBQUF6RCxDQUFBLENBQUF3QixHQUFBLEdBQUF0QixDQUFBLEdBQUEwQixDQUFBLE1BQUFLLENBQUEsR0FBQVgsUUFBQSxDQUFBM0IsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsb0JBQUFpQyxDQUFBLENBQUFWLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBa0QsSUFBQSxHQUFBckIsQ0FBQSxHQUFBRixDQUFBLEVBQUFNLENBQUEsQ0FBQVQsR0FBQSxLQUFBTSxDQUFBLHFCQUFBMUIsS0FBQSxFQUFBNkIsQ0FBQSxDQUFBVCxHQUFBLEVBQUEwQixJQUFBLEVBQUFsRCxDQUFBLENBQUFrRCxJQUFBLGtCQUFBakIsQ0FBQSxDQUFBVixJQUFBLEtBQUFyQixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUFtRCxNQUFBLFlBQUFuRCxDQUFBLENBQUF3QixHQUFBLEdBQUFTLENBQUEsQ0FBQVQsR0FBQSxtQkFBQTZCLG9CQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLFFBQUFHLENBQUEsR0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxFQUFBakQsQ0FBQSxHQUFBUCxDQUFBLENBQUFhLFFBQUEsQ0FBQVIsQ0FBQSxPQUFBRSxDQUFBLEtBQUFOLENBQUEsU0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxxQkFBQXBELENBQUEsSUFBQUwsQ0FBQSxDQUFBYSxRQUFBLGVBQUFYLENBQUEsQ0FBQXNELE1BQUEsYUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsRUFBQXlELG1CQUFBLENBQUExRCxDQUFBLEVBQUFFLENBQUEsZUFBQUEsQ0FBQSxDQUFBc0QsTUFBQSxrQkFBQW5ELENBQUEsS0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSx1Q0FBQTFELENBQUEsaUJBQUE4QixDQUFBLE1BQUF6QixDQUFBLEdBQUFpQixRQUFBLENBQUFwQixDQUFBLEVBQUFQLENBQUEsQ0FBQWEsUUFBQSxFQUFBWCxDQUFBLENBQUEyQixHQUFBLG1CQUFBbkIsQ0FBQSxDQUFBa0IsSUFBQSxTQUFBMUIsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBbkIsQ0FBQSxDQUFBbUIsR0FBQSxFQUFBM0IsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxNQUFBdkIsQ0FBQSxHQUFBRixDQUFBLENBQUFtQixHQUFBLFNBQUFqQixDQUFBLEdBQUFBLENBQUEsQ0FBQTJDLElBQUEsSUFBQXJELENBQUEsQ0FBQUYsQ0FBQSxDQUFBZ0UsVUFBQSxJQUFBcEQsQ0FBQSxDQUFBSCxLQUFBLEVBQUFQLENBQUEsQ0FBQStELElBQUEsR0FBQWpFLENBQUEsQ0FBQWtFLE9BQUEsZUFBQWhFLENBQUEsQ0FBQXNELE1BQUEsS0FBQXRELENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsR0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxJQUFBdkIsQ0FBQSxJQUFBVixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHNDQUFBN0QsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxjQUFBZ0MsYUFBQWxFLENBQUEsUUFBQUQsQ0FBQSxLQUFBb0UsTUFBQSxFQUFBbkUsQ0FBQSxZQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXFFLFFBQUEsR0FBQXBFLENBQUEsV0FBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRSxVQUFBLEdBQUFyRSxDQUFBLEtBQUFELENBQUEsQ0FBQXVFLFFBQUEsR0FBQXRFLENBQUEsV0FBQXVFLFVBQUEsQ0FBQUMsSUFBQSxDQUFBekUsQ0FBQSxjQUFBMEUsY0FBQXpFLENBQUEsUUFBQUQsQ0FBQSxHQUFBQyxDQUFBLENBQUEwRSxVQUFBLFFBQUEzRSxDQUFBLENBQUE0QixJQUFBLG9CQUFBNUIsQ0FBQSxDQUFBNkIsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBMEUsVUFBQSxHQUFBM0UsQ0FBQSxhQUFBeUIsUUFBQXhCLENBQUEsU0FBQXVFLFVBQUEsTUFBQUosTUFBQSxhQUFBbkUsQ0FBQSxDQUFBNEMsT0FBQSxDQUFBc0IsWUFBQSxjQUFBUyxLQUFBLGlCQUFBbEMsT0FBQTFDLENBQUEsUUFBQUEsQ0FBQSxXQUFBQSxDQUFBLFFBQUFFLENBQUEsR0FBQUYsQ0FBQSxDQUFBWSxDQUFBLE9BQUFWLENBQUEsU0FBQUEsQ0FBQSxDQUFBNEIsSUFBQSxDQUFBOUIsQ0FBQSw0QkFBQUEsQ0FBQSxDQUFBaUUsSUFBQSxTQUFBakUsQ0FBQSxPQUFBNkUsS0FBQSxDQUFBN0UsQ0FBQSxDQUFBOEUsTUFBQSxTQUFBdkUsQ0FBQSxPQUFBRyxDQUFBLFlBQUF1RCxLQUFBLGFBQUExRCxDQUFBLEdBQUFQLENBQUEsQ0FBQThFLE1BQUEsT0FBQXpFLENBQUEsQ0FBQXlCLElBQUEsQ0FBQTlCLENBQUEsRUFBQU8sQ0FBQSxVQUFBMEQsSUFBQSxDQUFBeEQsS0FBQSxHQUFBVCxDQUFBLENBQUFPLENBQUEsR0FBQTBELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFNBQUFBLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsWUFBQXZELENBQUEsQ0FBQXVELElBQUEsR0FBQXZELENBQUEsZ0JBQUFxRCxTQUFBLENBQUFkLE9BQUEsQ0FBQWpELENBQUEsa0NBQUFvQyxpQkFBQSxDQUFBaEMsU0FBQSxHQUFBaUMsMEJBQUEsRUFBQTlCLENBQUEsQ0FBQW9DLENBQUEsbUJBQUFsQyxLQUFBLEVBQUE0QiwwQkFBQSxFQUFBakIsWUFBQSxTQUFBYixDQUFBLENBQUE4QiwwQkFBQSxtQkFBQTVCLEtBQUEsRUFBQTJCLGlCQUFBLEVBQUFoQixZQUFBLFNBQUFnQixpQkFBQSxDQUFBMkMsV0FBQSxHQUFBN0QsTUFBQSxDQUFBbUIsMEJBQUEsRUFBQXJCLENBQUEsd0JBQUFoQixDQUFBLENBQUFnRixtQkFBQSxhQUFBL0UsQ0FBQSxRQUFBRCxDQUFBLHdCQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQWdGLFdBQUEsV0FBQWpGLENBQUEsS0FBQUEsQ0FBQSxLQUFBb0MsaUJBQUEsNkJBQUFwQyxDQUFBLENBQUErRSxXQUFBLElBQUEvRSxDQUFBLENBQUFrRixJQUFBLE9BQUFsRixDQUFBLENBQUFtRixJQUFBLGFBQUFsRixDQUFBLFdBQUFFLE1BQUEsQ0FBQWlGLGNBQUEsR0FBQWpGLE1BQUEsQ0FBQWlGLGNBQUEsQ0FBQW5GLENBQUEsRUFBQW9DLDBCQUFBLEtBQUFwQyxDQUFBLENBQUFvRixTQUFBLEdBQUFoRCwwQkFBQSxFQUFBbkIsTUFBQSxDQUFBakIsQ0FBQSxFQUFBZSxDQUFBLHlCQUFBZixDQUFBLENBQUFHLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBbUIsQ0FBQSxHQUFBMUMsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRixLQUFBLGFBQUFyRixDQUFBLGFBQUFrRCxPQUFBLEVBQUFsRCxDQUFBLE9BQUEyQyxxQkFBQSxDQUFBRyxhQUFBLENBQUEzQyxTQUFBLEdBQUFjLE1BQUEsQ0FBQTZCLGFBQUEsQ0FBQTNDLFNBQUEsRUFBQVUsQ0FBQSxpQ0FBQWQsQ0FBQSxDQUFBK0MsYUFBQSxHQUFBQSxhQUFBLEVBQUEvQyxDQUFBLENBQUF1RixLQUFBLGFBQUF0RixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZUFBQUEsQ0FBQSxLQUFBQSxDQUFBLEdBQUE4RSxPQUFBLE9BQUE1RSxDQUFBLE9BQUFtQyxhQUFBLENBQUF6QixJQUFBLENBQUFyQixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEdBQUFHLENBQUEsVUFBQVYsQ0FBQSxDQUFBZ0YsbUJBQUEsQ0FBQTlFLENBQUEsSUFBQVUsQ0FBQSxHQUFBQSxDQUFBLENBQUFxRCxJQUFBLEdBQUFiLElBQUEsV0FBQW5ELENBQUEsV0FBQUEsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBUSxLQUFBLEdBQUFHLENBQUEsQ0FBQXFELElBQUEsV0FBQXJCLHFCQUFBLENBQUFELENBQUEsR0FBQXpCLE1BQUEsQ0FBQXlCLENBQUEsRUFBQTNCLENBQUEsZ0JBQUFFLE1BQUEsQ0FBQXlCLENBQUEsRUFBQS9CLENBQUEsaUNBQUFNLE1BQUEsQ0FBQXlCLENBQUEsNkRBQUEzQyxDQUFBLENBQUF5RixJQUFBLGFBQUF4RixDQUFBLFFBQUFELENBQUEsR0FBQUcsTUFBQSxDQUFBRixDQUFBLEdBQUFDLENBQUEsZ0JBQUFHLENBQUEsSUFBQUwsQ0FBQSxFQUFBRSxDQUFBLENBQUF1RSxJQUFBLENBQUFwRSxDQUFBLFVBQUFILENBQUEsQ0FBQXdGLE9BQUEsYUFBQXpCLEtBQUEsV0FBQS9ELENBQUEsQ0FBQTRFLE1BQUEsU0FBQTdFLENBQUEsR0FBQUMsQ0FBQSxDQUFBeUYsR0FBQSxRQUFBMUYsQ0FBQSxJQUFBRCxDQUFBLFNBQUFpRSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFdBQUFBLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFFBQUFqRSxDQUFBLENBQUEwQyxNQUFBLEdBQUFBLE1BQUEsRUFBQWpCLE9BQUEsQ0FBQXJCLFNBQUEsS0FBQTZFLFdBQUEsRUFBQXhELE9BQUEsRUFBQW1ELEtBQUEsV0FBQUEsTUFBQTVFLENBQUEsYUFBQTRGLElBQUEsV0FBQTNCLElBQUEsV0FBQU4sSUFBQSxRQUFBQyxLQUFBLEdBQUEzRCxDQUFBLE9BQUFzRCxJQUFBLFlBQUFFLFFBQUEsY0FBQUQsTUFBQSxnQkFBQTNCLEdBQUEsR0FBQTVCLENBQUEsT0FBQXVFLFVBQUEsQ0FBQTNCLE9BQUEsQ0FBQTZCLGFBQUEsSUFBQTFFLENBQUEsV0FBQUUsQ0FBQSxrQkFBQUEsQ0FBQSxDQUFBMkYsTUFBQSxPQUFBeEYsQ0FBQSxDQUFBeUIsSUFBQSxPQUFBNUIsQ0FBQSxNQUFBMkUsS0FBQSxFQUFBM0UsQ0FBQSxDQUFBNEYsS0FBQSxjQUFBNUYsQ0FBQSxJQUFBRCxDQUFBLE1BQUE4RixJQUFBLFdBQUFBLEtBQUEsU0FBQXhDLElBQUEsV0FBQXRELENBQUEsUUFBQXVFLFVBQUEsSUFBQUcsVUFBQSxrQkFBQTFFLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEsY0FBQW1FLElBQUEsS0FBQW5DLGlCQUFBLFdBQUFBLGtCQUFBN0QsQ0FBQSxhQUFBdUQsSUFBQSxRQUFBdkQsQ0FBQSxNQUFBRSxDQUFBLGtCQUFBK0YsT0FBQTVGLENBQUEsRUFBQUUsQ0FBQSxXQUFBSyxDQUFBLENBQUFnQixJQUFBLFlBQUFoQixDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFFLENBQUEsQ0FBQStELElBQUEsR0FBQTVELENBQUEsRUFBQUUsQ0FBQSxLQUFBTCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEtBQUFNLENBQUEsYUFBQUEsQ0FBQSxRQUFBaUUsVUFBQSxDQUFBTSxNQUFBLE1BQUF2RSxDQUFBLFNBQUFBLENBQUEsUUFBQUcsQ0FBQSxRQUFBOEQsVUFBQSxDQUFBakUsQ0FBQSxHQUFBSyxDQUFBLEdBQUFGLENBQUEsQ0FBQWlFLFVBQUEsaUJBQUFqRSxDQUFBLENBQUEwRCxNQUFBLFNBQUE2QixNQUFBLGFBQUF2RixDQUFBLENBQUEwRCxNQUFBLFNBQUF3QixJQUFBLFFBQUE5RSxDQUFBLEdBQUFULENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEsZUFBQU0sQ0FBQSxHQUFBWCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLHFCQUFBSSxDQUFBLElBQUFFLENBQUEsYUFBQTRFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEsZ0JBQUF1QixJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLGNBQUF4RCxDQUFBLGFBQUE4RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLHFCQUFBckQsQ0FBQSxRQUFBc0MsS0FBQSxxREFBQXNDLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsWUFBQVIsTUFBQSxXQUFBQSxPQUFBN0QsQ0FBQSxFQUFBRCxDQUFBLGFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBNUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFLLENBQUEsUUFBQWlFLFVBQUEsQ0FBQXRFLENBQUEsT0FBQUssQ0FBQSxDQUFBNkQsTUFBQSxTQUFBd0IsSUFBQSxJQUFBdkYsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBdkIsQ0FBQSx3QkFBQXFGLElBQUEsR0FBQXJGLENBQUEsQ0FBQStELFVBQUEsUUFBQTVELENBQUEsR0FBQUgsQ0FBQSxhQUFBRyxDQUFBLGlCQUFBVCxDQUFBLG1CQUFBQSxDQUFBLEtBQUFTLENBQUEsQ0FBQTBELE1BQUEsSUFBQXBFLENBQUEsSUFBQUEsQ0FBQSxJQUFBVSxDQUFBLENBQUE0RCxVQUFBLEtBQUE1RCxDQUFBLGNBQUFFLENBQUEsR0FBQUYsQ0FBQSxHQUFBQSxDQUFBLENBQUFpRSxVQUFBLGNBQUEvRCxDQUFBLENBQUFnQixJQUFBLEdBQUEzQixDQUFBLEVBQUFXLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQVUsQ0FBQSxTQUFBOEMsTUFBQSxnQkFBQVMsSUFBQSxHQUFBdkQsQ0FBQSxDQUFBNEQsVUFBQSxFQUFBbkMsQ0FBQSxTQUFBK0QsUUFBQSxDQUFBdEYsQ0FBQSxNQUFBc0YsUUFBQSxXQUFBQSxTQUFBakcsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBQyxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLHFCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxtQkFBQTNCLENBQUEsQ0FBQTJCLElBQUEsUUFBQXFDLElBQUEsR0FBQWhFLENBQUEsQ0FBQTRCLEdBQUEsZ0JBQUE1QixDQUFBLENBQUEyQixJQUFBLFNBQUFvRSxJQUFBLFFBQUFuRSxHQUFBLEdBQUE1QixDQUFBLENBQUE0QixHQUFBLE9BQUEyQixNQUFBLGtCQUFBUyxJQUFBLHlCQUFBaEUsQ0FBQSxDQUFBMkIsSUFBQSxJQUFBNUIsQ0FBQSxVQUFBaUUsSUFBQSxHQUFBakUsQ0FBQSxHQUFBbUMsQ0FBQSxLQUFBZ0UsTUFBQSxXQUFBQSxPQUFBbEcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQW9FLFVBQUEsS0FBQXJFLENBQUEsY0FBQWlHLFFBQUEsQ0FBQWhHLENBQUEsQ0FBQXlFLFVBQUEsRUFBQXpFLENBQUEsQ0FBQXFFLFFBQUEsR0FBQUcsYUFBQSxDQUFBeEUsQ0FBQSxHQUFBaUMsQ0FBQSx5QkFBQWlFLE9BQUFuRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBa0UsTUFBQSxLQUFBbkUsQ0FBQSxRQUFBSSxDQUFBLEdBQUFILENBQUEsQ0FBQXlFLFVBQUEsa0JBQUF0RSxDQUFBLENBQUF1QixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQXdCLEdBQUEsRUFBQTZDLGFBQUEsQ0FBQXhFLENBQUEsWUFBQUssQ0FBQSxZQUFBK0MsS0FBQSw4QkFBQStDLGFBQUEsV0FBQUEsY0FBQXJHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGdCQUFBb0QsUUFBQSxLQUFBNUMsUUFBQSxFQUFBNkIsTUFBQSxDQUFBMUMsQ0FBQSxHQUFBZ0UsVUFBQSxFQUFBOUQsQ0FBQSxFQUFBZ0UsT0FBQSxFQUFBN0QsQ0FBQSxvQkFBQW1ELE1BQUEsVUFBQTNCLEdBQUEsR0FBQTVCLENBQUEsR0FBQWtDLENBQUEsT0FBQW5DLENBQUE7QUFBQSxTQUFBc0csbUJBQUFqRyxDQUFBLEVBQUFKLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFLLENBQUEsRUFBQUssQ0FBQSxFQUFBRSxDQUFBLGNBQUFKLENBQUEsR0FBQUwsQ0FBQSxDQUFBTyxDQUFBLEVBQUFFLENBQUEsR0FBQUUsQ0FBQSxHQUFBTixDQUFBLENBQUFELEtBQUEsV0FBQUosQ0FBQSxnQkFBQUwsQ0FBQSxDQUFBSyxDQUFBLEtBQUFLLENBQUEsQ0FBQTZDLElBQUEsR0FBQXRELENBQUEsQ0FBQWUsQ0FBQSxJQUFBd0UsT0FBQSxDQUFBdEMsT0FBQSxDQUFBbEMsQ0FBQSxFQUFBb0MsSUFBQSxDQUFBbEQsQ0FBQSxFQUFBSyxDQUFBO0FBQUEsU0FBQWdHLGtCQUFBbEcsQ0FBQSw2QkFBQUosQ0FBQSxTQUFBRCxDQUFBLEdBQUF3RyxTQUFBLGFBQUFoQixPQUFBLFdBQUF0RixDQUFBLEVBQUFLLENBQUEsUUFBQUssQ0FBQSxHQUFBUCxDQUFBLENBQUFvRyxLQUFBLENBQUF4RyxDQUFBLEVBQUFELENBQUEsWUFBQTBHLE1BQUFyRyxDQUFBLElBQUFpRyxrQkFBQSxDQUFBMUYsQ0FBQSxFQUFBVixDQUFBLEVBQUFLLENBQUEsRUFBQW1HLEtBQUEsRUFBQUMsTUFBQSxVQUFBdEcsQ0FBQSxjQUFBc0csT0FBQXRHLENBQUEsSUFBQWlHLGtCQUFBLENBQUExRixDQUFBLEVBQUFWLENBQUEsRUFBQUssQ0FBQSxFQUFBbUcsS0FBQSxFQUFBQyxNQUFBLFdBQUF0RyxDQUFBLEtBQUFxRyxLQUFBO0FBRHVEO0FBQ007QUFBQSxTQUU5Q2tDLFVBQVVBLENBQUFaLEVBQUEsRUFBQWEsR0FBQTtFQUFBLE9BQUFDLFdBQUEsQ0FBQXJDLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBZXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0NBLFNBQUFzQyxZQUFBO0VBQUFBLFdBQUEsR0FBQXZDLGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQWZBLFNBQUEyQixRQUEwQmlDLFNBQVMsRUFBRUMsT0FBTztJQUFBLE9BQUFqSixtQkFBQSxHQUFBdUIsSUFBQSxVQUFBNEYsU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUF2QixJQUFBLEdBQUF1QixRQUFBLENBQUFsRCxJQUFBO1FBQUE7VUFBQSxPQUFBa0QsUUFBQSxDQUFBckQsTUFBQSxXQUVqQyxJQUFJMEIsT0FBTyxDQUFDLFVBQUN0QyxPQUFPLEVBQUUrRixNQUFNLEVBQUs7WUFDdENDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUM7Y0FBQ2pCLElBQUksRUFBRSxFQUFFO2NBQUVrQixTQUFTLEVBQUVOLFNBQVMsQ0FBQ08sT0FBTyxDQUFDLENBQUM7Y0FBRUMsT0FBTyxFQUFFUCxPQUFPLENBQUNNLE9BQU8sQ0FBQyxDQUFDO2NBQUVFLFVBQVUsRUFBRTtZQUFHLENBQUMsRUFBRSxVQUFDQyxPQUFPLEVBQUs7Y0FDMUgsSUFBSVAsTUFBTSxDQUFDUSxPQUFPLENBQUNDLFNBQVMsRUFBRTtnQkFDNUJWLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDUSxPQUFPLENBQUNDLFNBQVMsQ0FBQztjQUNsQyxDQUFDLE1BQU07Z0JBQ0xqQyxPQUFPLENBQUNDLEdBQUcsQ0FBQzhCLE9BQU8sQ0FBQztnQkFDcEJ2RyxPQUFPLENBQUN1RyxPQUFPLENBQUM7Y0FDbEI7WUFDRixDQUFDLENBQUM7VUFDSixDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQXRDLFFBQUEsQ0FBQXBCLElBQUE7TUFBQTtJQUFBLEdBQUFlLE9BQUE7RUFBQSxDQUNIO0VBQUEsT0FBQWdDLFdBQUEsQ0FBQXJDLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBa0RJLFNBQWVvRCx1QkFBdUJBLENBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsR0FBQTtFQUFBLE9BQUFDLHdCQUFBLENBQUF6RCxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQVc1QyxTQUFBMEQseUJBQUE7RUFBQUEsd0JBQUEsR0FBQTNELGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQVhNLFNBQUErQyxTQUF1Q2EsU0FBUyxFQUFFQyxPQUFPLEVBQUVtQixDQUFDLEVBQUVDLGVBQWUsRUFBRUMsY0FBYztJQUFBLElBQUFDLFlBQUEsRUFBQUMsb0JBQUEsRUFBQUMsa0JBQUEsRUFBQUMsV0FBQSxFQUFBQyxnQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGFBQUEsRUFBQUMsdUJBQUE7SUFBQSxPQUFBOUssbUJBQUEsR0FBQXVCLElBQUEsVUFBQStHLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBMUMsSUFBQSxHQUFBMEMsU0FBQSxDQUFBckUsSUFBQTtRQUFBO1VBQUFxRSxTQUFBLENBQUFyRSxJQUFBO1VBQUEsT0FDckV5RSxtRUFBcUIsQ0FBQ0ssU0FBUyxDQUFDTyxPQUFPLENBQUMsQ0FBQyxFQUFFTixPQUFPLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFBQTtVQUFsRmdCLFlBQVksR0FBQWhDLFNBQUEsQ0FBQTNFLElBQUE7VUFDWjRHLG9CQUFvQixHQUFHNUIseUVBQXVCLENBQUMyQixZQUFZLEVBQUVGLGVBQWUsRUFBRUMsY0FBYyxDQUFDO1VBQzdGRyxrQkFBa0IsR0FBR0Qsb0JBQW9CLENBQUNPLEdBQUcsQ0FBQyxVQUFBQyxJQUFJO1lBQUEsT0FBSUMsY0FBYyxDQUFDRCxJQUFJLENBQUNFLEdBQUcsRUFBRUYsSUFBSSxDQUFDRyxLQUFLLENBQUM7VUFBQSxFQUFDO1VBQzNGVCxXQUFXLEdBQUdVLGlCQUFpQixDQUFDWCxrQkFBa0IsQ0FBQztVQUNuREUsZ0JBQWdCLEdBQUdVLHNCQUFzQixDQUFDWixrQkFBa0IsQ0FBQztVQUM3REcsZUFBZSxHQUFHVSxLQUFLLENBQUNDLElBQUksQ0FBQ2IsV0FBVyxDQUFDYyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFDNUssQ0FBQyxFQUFFNkssQ0FBQztZQUFBLE9BQUtBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzdLLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFBQSxFQUFDO1VBQy9FZ0ssYUFBYSxHQUFHRCxlQUFlLENBQUM3RSxLQUFLLENBQUMsQ0FBQyxFQUFFcUUsQ0FBQyxDQUFDO1VBQzNDVSx1QkFBdUIsR0FBR0QsYUFBYSxDQUFDRSxHQUFHLENBQUMsVUFBQUMsSUFBSTtZQUFBLE9BQUs7Y0FBRVcsUUFBUSxFQUFFWCxJQUFJLENBQUMsQ0FBQyxDQUFDO2NBQUVZLE1BQU0sRUFBRWpCLGdCQUFnQixDQUFDa0IsR0FBRyxDQUFDYixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FBRWMsS0FBSyxFQUFFZCxJQUFJLENBQUMsQ0FBQztZQUFFLENBQUM7VUFBQSxDQUFDLENBQUM7VUFBQSxPQUFBekMsU0FBQSxDQUFBeEUsTUFBQSxXQUVsSStHLHVCQUF1QjtRQUFBO1FBQUE7VUFBQSxPQUFBdkMsU0FBQSxDQUFBdkMsSUFBQTtNQUFBO0lBQUEsR0FBQW1DLFFBQUE7RUFBQSxDQUNqQztFQUFBLE9BQUFnQyx3QkFBQSxDQUFBekQsS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFHRCxTQUFTd0UsY0FBY0EsQ0FBQ0MsR0FBRyxFQUFFQyxLQUFLLEVBQUU7RUFDaEMsSUFBSTtJQUNBLElBQU1ZLFNBQVMsR0FBRyxJQUFJQyxHQUFHLENBQUNkLEdBQUcsQ0FBQzs7SUFFOUI7SUFDQSxJQUFNZSxRQUFRLEdBQUdGLFNBQVMsQ0FBQ0UsUUFBUSxDQUFDQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQzs7SUFFcEQ7SUFDQSxJQUFNQyxhQUFhLEdBQUdKLFNBQVMsQ0FBQ0osUUFBUSxDQUFDUyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ25ELElBQUlDLFNBQVMsR0FBRyxFQUFFO0lBQ2xCLElBQUlDLE1BQU0sR0FBRyxFQUFFO0lBQ2YsSUFBSUMsR0FBRyxHQUFHLEVBQUU7SUFFWixJQUFJSixhQUFhLENBQUNwSCxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQzFCc0gsU0FBUyxHQUFHRixhQUFhLENBQUNwRyxLQUFLLENBQUMsQ0FBQyxFQUFFb0csYUFBYSxDQUFDcEgsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDeUgsSUFBSSxDQUFDLEdBQUcsQ0FBQztNQUN0RUYsTUFBTSxHQUFHSCxhQUFhLENBQUNBLGFBQWEsQ0FBQ3BILE1BQU0sR0FBRyxDQUFDLENBQUM7TUFDaER3SCxHQUFHLEdBQUdKLGFBQWEsQ0FBQ0EsYUFBYSxDQUFDcEgsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNqRCxDQUFDLE1BQU0sSUFBSW9ILGFBQWEsQ0FBQ3BILE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDbkN1SCxNQUFNLEdBQUdILGFBQWEsQ0FBQyxDQUFDLENBQUM7TUFDekJJLEdBQUcsR0FBR0osYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDLE1BQU07TUFDSEcsTUFBTSxHQUFHUCxTQUFTLENBQUNKLFFBQVE7TUFDM0JZLEdBQUcsR0FBRyxFQUFFO0lBQ1o7O0lBRUE7SUFDQSxJQUFNRSxJQUFJLEdBQUdWLFNBQVMsQ0FBQ1csUUFBUTs7SUFFL0I7SUFDQSxJQUFNQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCWixTQUFTLENBQUNhLFlBQVksQ0FBQzlKLE9BQU8sQ0FBQyxVQUFDcEMsS0FBSyxFQUFFbU0sR0FBRyxFQUFLO01BQzNDO01BQ0EsSUFBSUYsV0FBVyxDQUFDRSxHQUFHLENBQUMsRUFBRTtRQUNsQixJQUFJdkIsS0FBSyxDQUFDd0IsT0FBTyxDQUFDSCxXQUFXLENBQUNFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7VUFDakNGLFdBQVcsQ0FBQ0UsR0FBRyxDQUFDLENBQUNuSSxJQUFJLENBQUNoRSxLQUFLLENBQUM7UUFDaEMsQ0FBQyxNQUFNO1VBQ0hpTSxXQUFXLENBQUNFLEdBQUcsQ0FBQyxHQUFHLENBQUNGLFdBQVcsQ0FBQ0UsR0FBRyxDQUFDLEVBQUVuTSxLQUFLLENBQUM7UUFDaEQ7TUFDSixDQUFDLE1BQU07UUFDSGlNLFdBQVcsQ0FBQ0UsR0FBRyxDQUFDLEdBQUduTSxLQUFLO01BQzVCO0lBQ0osQ0FBQyxDQUFDOztJQUVGO0lBQ0EsSUFBTXFNLFFBQVEsR0FBR2hCLFNBQVMsQ0FBQ2lCLElBQUksQ0FBQ2QsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7O0lBRWhEO0lBQ0EsSUFBSWUsSUFBSSxHQUFHbEIsU0FBUyxDQUFDa0IsSUFBSTtJQUN6QixJQUFJLENBQUNBLElBQUksRUFBRTtNQUNQLElBQUloQixRQUFRLEtBQUssTUFBTSxFQUFFO1FBQ3JCZ0IsSUFBSSxHQUFHLElBQUk7TUFDZixDQUFDLE1BQU0sSUFBSWhCLFFBQVEsS0FBSyxPQUFPLEVBQUU7UUFDN0JnQixJQUFJLEdBQUcsS0FBSztNQUNoQixDQUFDLE1BQU07UUFDSEEsSUFBSSxHQUFHLEVBQUU7TUFDYjtJQUNKO0lBRUEsT0FBTztNQUNIaEIsUUFBUSxFQUFSQSxRQUFRO01BQ1JJLFNBQVMsRUFBVEEsU0FBUztNQUNUQyxNQUFNLEVBQU5BLE1BQU07TUFDTkMsR0FBRyxFQUFIQSxHQUFHO01BQ0hFLElBQUksRUFBSkEsSUFBSTtNQUNKRSxXQUFXLEVBQVhBLFdBQVc7TUFDWEksUUFBUSxFQUFSQSxRQUFRO01BQ1JFLElBQUksRUFBSkEsSUFBSTtNQUNKO01BQ0FDLElBQUksRUFBRW5CLFNBQVMsQ0FBQ21CLElBQUk7TUFBRTtNQUN0QnZCLFFBQVEsRUFBRUksU0FBUyxDQUFDSixRQUFRO01BQzVCd0IsSUFBSSxFQUFFcEIsU0FBUyxDQUFDb0IsSUFBSTtNQUNwQkMsTUFBTSxFQUFFckIsU0FBUyxDQUFDcUIsTUFBTTtNQUN4QmpDLEtBQUssRUFBTEE7SUFDSixDQUFDO0VBQ0wsQ0FBQyxDQUFDLE9BQU9rQyxLQUFLLEVBQUU7SUFDWjFGLE9BQU8sQ0FBQzBGLEtBQUssaUJBQUFDLE1BQUEsQ0FBaUJwQyxHQUFHLEdBQUltQyxLQUFLLENBQUM7SUFDM0MsT0FBTyxJQUFJO0VBQ2Y7QUFDSjtBQUVBLFNBQVNqQyxpQkFBaUJBLENBQUNYLGtCQUFrQixFQUFFO0VBQzNDLElBQU1DLFdBQVcsR0FBRyxJQUFJNkMsR0FBRyxDQUFDLENBQUM7RUFFN0I5QyxrQkFBa0IsQ0FBQzNILE9BQU8sQ0FBQyxVQUFBa0ksSUFBSSxFQUFJO0lBQy9CLElBQU1XLFFBQVEsR0FBR1gsSUFBSSxDQUFDVyxRQUFRO0lBQzlCLElBQUlBLFFBQVEsRUFBRTtNQUNWLElBQUlqQixXQUFXLENBQUM4QyxHQUFHLENBQUM3QixRQUFRLENBQUMsRUFBRTtRQUMzQmpCLFdBQVcsQ0FBQytDLEdBQUcsQ0FBQzlCLFFBQVEsRUFBRWpCLFdBQVcsQ0FBQ21CLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQzVELENBQUMsTUFBTTtRQUNIakIsV0FBVyxDQUFDK0MsR0FBRyxDQUFDOUIsUUFBUSxFQUFFLENBQUMsQ0FBQztNQUNoQztJQUNKO0VBQ0osQ0FBQyxDQUFDO0VBRUYsT0FBT2pCLFdBQVc7QUFDdEI7QUFFQSxTQUFTVyxzQkFBc0JBLENBQUNaLGtCQUFrQixFQUFFO0VBQ2hELElBQU1DLFdBQVcsR0FBRyxJQUFJNkMsR0FBRyxDQUFDLENBQUM7RUFDN0I5QyxrQkFBa0IsQ0FBQzNILE9BQU8sQ0FBQyxVQUFBa0ksSUFBSSxFQUFJO0lBQy9CLElBQU1XLFFBQVEsR0FBR1gsSUFBSSxDQUFDVyxRQUFRO0lBQzlCLElBQUlSLEtBQUssR0FBR0gsSUFBSSxDQUFDRyxLQUFLO0lBQ3RCLElBQU1ELEdBQUcsR0FBR0YsSUFBSSxDQUFDbUMsSUFBSTs7SUFFckI7SUFDQSxJQUFJLENBQUNoQyxLQUFLLEVBQUU7TUFDUkEsS0FBSyxHQUFHUSxRQUFRO0lBQ3BCOztJQUVBO0lBQ0EsSUFBSWpCLFdBQVcsQ0FBQzhDLEdBQUcsQ0FBQzdCLFFBQVEsQ0FBQyxFQUFFO01BQzNCO01BQ0EsSUFBSSxDQUFDakIsV0FBVyxDQUFDbUIsR0FBRyxDQUFDRixRQUFRLENBQUMsQ0FBQytCLElBQUksQ0FBQyxVQUFBeE4sQ0FBQztRQUFBLE9BQUlBLENBQUMsQ0FBQ2lMLEtBQUssS0FBS0EsS0FBSztNQUFBLEVBQUMsRUFBRTtRQUN6RFQsV0FBVyxDQUFDbUIsR0FBRyxDQUFDRixRQUFRLENBQUMsQ0FBQ2pILElBQUksQ0FBQztVQUFDeUcsS0FBSyxFQUFMQSxLQUFLO1VBQUVELEdBQUcsRUFBSEE7UUFBRyxDQUFDLENBQUM7TUFDaEQ7SUFDSixDQUFDLE1BQU07TUFDSFIsV0FBVyxDQUFDK0MsR0FBRyxDQUFDOUIsUUFBUSxFQUFFLENBQUM7UUFBQ1IsS0FBSyxFQUFMQSxLQUFLO1FBQUVELEdBQUcsRUFBSEE7TUFBRyxDQUFDLENBQUMsQ0FBQztJQUM3QztFQUNKLENBQUMsQ0FBQztFQUVGLE9BQU9SLFdBQVc7QUFDdEI7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TUE7QUFDQSxTQUFTaUQsYUFBYUEsQ0FBQ3pDLEdBQUcsRUFBRTtFQUN4QixPQUFPLElBQUljLEdBQUcsQ0FBQ2QsR0FBRyxDQUFDLENBQUNTLFFBQVE7QUFDOUI7QUFHQSxTQUFTaUMsY0FBY0EsQ0FBQ0MsWUFBWSxFQUFFO0VBQ3BDO0VBQ0EsSUFBSUMsSUFBSSxHQUFHRCxZQUFZLENBQUMzQixPQUFPLENBQUMsZ0JBQWdCLEVBQUUscUJBQXFCLENBQUM7O0VBRXhFO0VBQ0E0QixJQUFJLEdBQUdBLElBQUksQ0FBQzVCLE9BQU8sQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDOztFQUVoRDtFQUNBNEIsSUFBSSxHQUFHQSxJQUFJLENBQUM1QixPQUFPLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQzs7RUFFakQ7RUFDQTRCLElBQUksR0FBR0EsSUFBSSxDQUFDNUIsT0FBTyxDQUFDLGlCQUFpQixFQUFFLGFBQWEsQ0FBQztFQUVyRCxPQUFPNEIsSUFBSTtBQUNiOztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyxVQUFVQSxDQUFDM0YsSUFBSSxFQUFvQjtFQUFBLElBQWxCNEYsU0FBUyxHQUFBdkgsU0FBQSxDQUFBMUIsTUFBQSxRQUFBMEIsU0FBQSxRQUFBd0gsU0FBQSxHQUFBeEgsU0FBQSxNQUFHLElBQUk7RUFDeEM7RUFDQTJCLElBQUksR0FBR0EsSUFBSSxDQUFDOEQsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQzs7RUFFM0M7RUFDQTlELElBQUksR0FBR0EsSUFBSSxDQUFDOEYsU0FBUyxDQUFDLEtBQUssQ0FBQzs7RUFFNUI7RUFDQSxJQUFJO0lBQ0FDLGtCQUFrQixDQUFDQyxNQUFNLENBQUNoRyxJQUFJLENBQUMsQ0FBQztFQUNwQyxDQUFDLENBQUMsT0FBT25JLENBQUMsRUFBRTtJQUNSbUksSUFBSSxHQUFHQSxJQUFJLENBQUM4RCxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztFQUNqQzs7RUFFQTtFQUNBOUQsSUFBSSxHQUFHQSxJQUFJLENBQUM4RCxPQUFPLENBQUMscUJBQXFCLEVBQUUsTUFBTSxDQUFDOztFQUVsRDtFQUNBOUQsSUFBSSxHQUFHQSxJQUFJLENBQUM4RCxPQUFPLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQzs7RUFFM0M7RUFDQTlELElBQUksR0FBR0EsSUFBSSxDQUFDOEQsT0FBTyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQzs7RUFFL0M7RUFDQTlELElBQUksR0FBR0EsSUFBSSxDQUFDOEQsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQ21DLElBQUksQ0FBQyxDQUFDOztFQUV2QztFQUNBLElBQUlqRyxJQUFJLENBQUNyRCxNQUFNLEdBQUdpSixTQUFTLEVBQUU7SUFDekIsTUFBTSxJQUFJekssS0FBSyw0Q0FBQStKLE1BQUEsQ0FBNENVLFNBQVMsaUJBQWMsQ0FBQztFQUN2RjtFQUVBLE9BQU81RixJQUFJO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0EsU0FBU2tHLGNBQWNBLENBQUEsRUFBRztFQUN0QixJQUFNQyxpQkFBaUIsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7RUFFakVGLGlCQUFpQixDQUFDekwsT0FBTyxDQUFDLFVBQUE0TCxPQUFPLEVBQUk7SUFDbkMsSUFBTUMsWUFBWSxHQUFHRCxPQUFPLENBQUNFLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztJQUM1RCxJQUFJQyxVQUFVLEdBQUcsS0FBSztJQUV0QkYsWUFBWSxDQUFDakgsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQUN6SCxDQUFDLEVBQUs7TUFDaERBLENBQUMsQ0FBQzZPLGNBQWMsQ0FBQyxDQUFDO01BQ2xCRCxVQUFVLEdBQUcsSUFBSTtNQUNqQkwsUUFBUSxDQUFDTyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLFdBQVc7TUFDeENQLE9BQU8sQ0FBQ1EsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BRWpDLElBQU1DLFVBQVUsR0FBR1YsT0FBTyxDQUFDVyxXQUFXO01BQ3RDLElBQU1DLFdBQVcsR0FBR1osT0FBTyxDQUFDYSxZQUFZO01BQ3hDLElBQU1DLE1BQU0sR0FBR3ZQLENBQUMsQ0FBQ3dQLE9BQU87TUFDeEIsSUFBTUMsTUFBTSxHQUFHelAsQ0FBQyxDQUFDMFAsT0FBTztNQUV4QixJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSTNQLENBQUMsRUFBSztRQUN6QixJQUFJLENBQUM0TyxVQUFVLEVBQUU7UUFFakIsSUFBTWdCLFlBQVksR0FBR1QsVUFBVSxJQUFJblAsQ0FBQyxDQUFDd1AsT0FBTyxHQUFHRCxNQUFNLENBQUM7UUFDdEQsSUFBTU0sYUFBYSxHQUFHUixXQUFXLElBQUlyUCxDQUFDLENBQUMwUCxPQUFPLEdBQUdELE1BQU0sQ0FBQzs7UUFFeEQ7UUFDQSxJQUFNSyxRQUFRLEdBQUcsR0FBRztRQUNwQixJQUFNQyxTQUFTLEdBQUcsR0FBRztRQUVyQnRCLE9BQU8sQ0FBQ00sS0FBSyxDQUFDaUIsS0FBSyxNQUFBM0MsTUFBQSxDQUFNNEMsSUFBSSxDQUFDQyxHQUFHLENBQUNOLFlBQVksRUFBRUUsUUFBUSxDQUFDLE9BQUk7UUFDN0RyQixPQUFPLENBQUNNLEtBQUssQ0FBQ29CLE1BQU0sTUFBQTlDLE1BQUEsQ0FBTTRDLElBQUksQ0FBQ0MsR0FBRyxDQUFDTCxhQUFhLEVBQUVFLFNBQVMsQ0FBQyxPQUFJO01BQ2xFLENBQUM7TUFFRCxJQUFNSyxVQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO1FBQ3RCeEIsVUFBVSxHQUFHLEtBQUs7UUFDbEJMLFFBQVEsQ0FBQ08sSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sR0FBRyxTQUFTO1FBQ3RDUCxPQUFPLENBQUNRLFNBQVMsQ0FBQ29CLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDcENDLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUMsV0FBVyxFQUFFWixXQUFXLENBQUM7UUFDcERXLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUMsU0FBUyxFQUFFSCxVQUFTLENBQUM7O1FBRWhEO1FBQ0FJLGNBQWMsQ0FBQy9CLE9BQU8sQ0FBQ2dDLEVBQUUsRUFBRWhDLE9BQU8sQ0FBQ00sS0FBSyxDQUFDaUIsS0FBSyxFQUFFdkIsT0FBTyxDQUFDTSxLQUFLLENBQUNvQixNQUFNLENBQUM7TUFDdkUsQ0FBQztNQUVERyxNQUFNLENBQUM3SSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUVrSSxXQUFXLENBQUM7TUFDakRXLE1BQU0sQ0FBQzdJLGdCQUFnQixDQUFDLFNBQVMsRUFBRTJJLFVBQVMsQ0FBQztJQUMvQyxDQUFDLENBQUM7O0lBRUY7SUFDQU0sY0FBYyxDQUFDakMsT0FBTyxDQUFDZ0MsRUFBRSxFQUFFaEMsT0FBTyxDQUFDO0VBQ3JDLENBQUMsQ0FBQztBQUNKOztBQUVBO0FBQ0EsU0FBUytCLGNBQWNBLENBQUNHLFFBQVEsRUFBRVgsS0FBSyxFQUFFRyxNQUFNLEVBQUU7RUFDL0MsSUFBTVMsSUFBSSxHQUFHO0lBQUVaLEtBQUssRUFBTEEsS0FBSztJQUFFRyxNQUFNLEVBQU5BO0VBQU8sQ0FBQztFQUM5QixJQUFJakgsTUFBTSxJQUFJQSxNQUFNLENBQUMySCxPQUFPLElBQUkzSCxNQUFNLENBQUMySCxPQUFPLENBQUNDLEtBQUssRUFBRTtJQUNwRDVILE1BQU0sQ0FBQzJILE9BQU8sQ0FBQ0MsS0FBSyxDQUFDdEQsR0FBRyxDQUFBdUQsZUFBQSxLQUFJSixRQUFRLEVBQUdDLElBQUksR0FBSSxZQUFNO01BQ25EbEosT0FBTyxDQUFDQyxHQUFHLG1CQUFBMEYsTUFBQSxDQUFtQnNELFFBQVEsUUFBS0MsSUFBSSxDQUFDO0lBQ2xELENBQUMsQ0FBQztFQUNKLENBQUMsTUFBTTtJQUNMO0lBQ0FJLFlBQVksQ0FBQ0MsT0FBTyxDQUFDTixRQUFRLEVBQUVPLElBQUksQ0FBQ0MsU0FBUyxDQUFDUCxJQUFJLENBQUMsQ0FBQztFQUN0RDtBQUNGOztBQUVBO0FBQ0EsU0FBU0YsY0FBY0EsQ0FBQ0MsUUFBUSxFQUFFbEMsT0FBTyxFQUFFO0VBQ3pDLElBQUl2RixNQUFNLElBQUlBLE1BQU0sQ0FBQzJILE9BQU8sSUFBSTNILE1BQU0sQ0FBQzJILE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO0lBQ3BENUgsTUFBTSxDQUFDMkgsT0FBTyxDQUFDQyxLQUFLLENBQUNsRixHQUFHLENBQUMrRSxRQUFRLEVBQUUsVUFBQ3ZJLE1BQU0sRUFBSztNQUM3QyxJQUFJQSxNQUFNLENBQUN1SSxRQUFRLENBQUMsRUFBRTtRQUNwQmxDLE9BQU8sQ0FBQ00sS0FBSyxDQUFDaUIsS0FBSyxHQUFHNUgsTUFBTSxDQUFDdUksUUFBUSxDQUFDLENBQUNYLEtBQUs7UUFDNUN2QixPQUFPLENBQUNNLEtBQUssQ0FBQ29CLE1BQU0sR0FBRy9ILE1BQU0sQ0FBQ3VJLFFBQVEsQ0FBQyxDQUFDUixNQUFNO01BQ2hEO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxNQUFNO0lBQ0w7SUFDQSxJQUFNUyxJQUFJLEdBQUdNLElBQUksQ0FBQ0UsS0FBSyxDQUFDSixZQUFZLENBQUNLLE9BQU8sQ0FBQ1YsUUFBUSxDQUFDLENBQUM7SUFDdkQsSUFBSUMsSUFBSSxFQUFFO01BQ1JuQyxPQUFPLENBQUNNLEtBQUssQ0FBQ2lCLEtBQUssR0FBR1ksSUFBSSxDQUFDWixLQUFLO01BQ2hDdkIsT0FBTyxDQUFDTSxLQUFLLENBQUNvQixNQUFNLEdBQUdTLElBQUksQ0FBQ1QsTUFBTTtJQUNwQztFQUNGO0FBQ0Y7QUFHQSxTQUFTbUIsaUJBQWlCQSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsRUFBRTtFQUNoRCxJQUFJakQsUUFBUSxDQUFDa0QsY0FBYyxDQUFDRixRQUFRLENBQUMsRUFBRTtJQUNyQyxPQUFPaEQsUUFBUSxDQUFDa0QsY0FBYyxDQUFDRixRQUFRLENBQUM7RUFDMUM7RUFFQSxJQUFNRyxlQUFlLEdBQUduRCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQzs7RUFFbkU7RUFDQSxJQUFNZ0QsU0FBUyxHQUFHcEQsUUFBUSxDQUFDcUQsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMvQ0QsU0FBUyxDQUFDRSxTQUFTLEdBQUcsa0JBQWtCOztFQUV4QztFQUNBRixTQUFTLENBQUNsQixFQUFFLEdBQUdjLFFBQVE7O0VBRXZCO0VBQ0FJLFNBQVMsQ0FBQ0csU0FBUywrREFBQXpFLE1BQUEsQ0FFTG1FLFdBQVcsaUZBR3hCOztFQUVEO0VBQ0FFLGVBQWUsQ0FBQ0ssV0FBVyxDQUFDSixTQUFTLENBQUM7RUFFdEMsT0FBT0EsU0FBUztBQUNsQjtBQUVBLFNBQVNLLGdCQUFnQkEsQ0FBQ0MsTUFBTSxFQUFFO0VBQ2hDLElBQU1DLE9BQU8sR0FBR0QsTUFBTSxDQUFDdEQsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0VBQzFELElBQU13RCxNQUFNLEdBQUdGLE1BQU0sQ0FBQ3RELGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUNyRCxJQUFNeUQsWUFBWSxHQUFHRCxNQUFNLENBQUM3QyxZQUFZO0VBQ3hDLElBQU0rQyxhQUFhLEdBQUdILE9BQU8sQ0FBQzVDLFlBQVk7RUFDMUMyQyxNQUFNLENBQUNsRCxLQUFLLENBQUNvQixNQUFNLE1BQUE5QyxNQUFBLENBQU0rRSxZQUFZLEdBQUdDLGFBQWEsR0FBRyxFQUFFLE9BQUk7QUFDaEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0N2SEYscUpBQUF0UyxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUyxLQUFBLEVBQUFQLENBQUEsRUFBQWlCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFwQixDQUFBLENBQUFELENBQUEsV0FBQWtCLE1BQUEsbUJBQUFqQixDQUFBLElBQUFpQixNQUFBLFlBQUFBLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQW9CLEtBQUFyQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFLLENBQUEsR0FBQVYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFNBQUEsWUFBQW1CLFNBQUEsR0FBQXZCLENBQUEsR0FBQXVCLFNBQUEsRUFBQVgsQ0FBQSxHQUFBVCxNQUFBLENBQUFxQixNQUFBLENBQUFkLENBQUEsQ0FBQU4sU0FBQSxHQUFBVSxDQUFBLE9BQUFXLE9BQUEsQ0FBQXBCLENBQUEsZ0JBQUFFLENBQUEsQ0FBQUssQ0FBQSxlQUFBSCxLQUFBLEVBQUFpQixnQkFBQSxDQUFBekIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFZLENBQUEsTUFBQUYsQ0FBQSxhQUFBZSxTQUFBMUIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsbUJBQUEwQixJQUFBLFlBQUFDLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTZCLElBQUEsQ0FBQTlCLENBQUEsRUFBQUUsQ0FBQSxjQUFBRCxDQUFBLGFBQUEyQixJQUFBLFdBQUFDLEdBQUEsRUFBQTVCLENBQUEsUUFBQUQsQ0FBQSxDQUFBc0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFTLENBQUEscUJBQUFDLENBQUEscUJBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFaLFVBQUEsY0FBQWEsa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsQ0FBQSxPQUFBcEIsTUFBQSxDQUFBb0IsQ0FBQSxFQUFBMUIsQ0FBQSxxQ0FBQTJCLENBQUEsR0FBQXBDLE1BQUEsQ0FBQXFDLGNBQUEsRUFBQUMsQ0FBQSxHQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUEsQ0FBQSxDQUFBRyxNQUFBLFFBQUFELENBQUEsSUFBQUEsQ0FBQSxLQUFBdkMsQ0FBQSxJQUFBRyxDQUFBLENBQUF5QixJQUFBLENBQUFXLENBQUEsRUFBQTdCLENBQUEsTUFBQTBCLENBQUEsR0FBQUcsQ0FBQSxPQUFBRSxDQUFBLEdBQUFOLDBCQUFBLENBQUFqQyxTQUFBLEdBQUFtQixTQUFBLENBQUFuQixTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWMsQ0FBQSxZQUFBTSxzQkFBQTNDLENBQUEsZ0NBQUE0QyxPQUFBLFdBQUE3QyxDQUFBLElBQUFrQixNQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsWUFBQUMsQ0FBQSxnQkFBQTZDLE9BQUEsQ0FBQTlDLENBQUEsRUFBQUMsQ0FBQSxzQkFBQThDLGNBQUE5QyxDQUFBLEVBQUFELENBQUEsYUFBQWdELE9BQUE5QyxDQUFBLEVBQUFLLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQWEsUUFBQSxDQUFBMUIsQ0FBQSxDQUFBQyxDQUFBLEdBQUFELENBQUEsRUFBQU0sQ0FBQSxtQkFBQU8sQ0FBQSxDQUFBYyxJQUFBLFFBQUFaLENBQUEsR0FBQUYsQ0FBQSxDQUFBZSxHQUFBLEVBQUFFLENBQUEsR0FBQWYsQ0FBQSxDQUFBUCxLQUFBLFNBQUFzQixDQUFBLGdCQUFBa0IsT0FBQSxDQUFBbEIsQ0FBQSxLQUFBMUIsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBQyxDQUFBLGVBQUEvQixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLENBQUFvQixPQUFBLEVBQUFDLElBQUEsV0FBQW5ELENBQUEsSUFBQStDLE1BQUEsU0FBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBWCxDQUFBLElBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxRQUFBWixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLEVBQUFxQixJQUFBLFdBQUFuRCxDQUFBLElBQUFlLENBQUEsQ0FBQVAsS0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsQ0FBQU0sQ0FBQSxnQkFBQWYsQ0FBQSxXQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFlLEdBQUEsU0FBQTNCLENBQUEsRUFBQUssQ0FBQSxvQkFBQUUsS0FBQSxXQUFBQSxNQUFBUixDQUFBLEVBQUFJLENBQUEsYUFBQWdELDJCQUFBLGVBQUFyRCxDQUFBLFdBQUFBLENBQUEsRUFBQUUsQ0FBQSxJQUFBOEMsTUFBQSxDQUFBL0MsQ0FBQSxFQUFBSSxDQUFBLEVBQUFMLENBQUEsRUFBQUUsQ0FBQSxnQkFBQUEsQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUEsQ0FBQWtELElBQUEsQ0FBQUMsMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUEzQixpQkFBQTFCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFFLENBQUEsR0FBQXdCLENBQUEsbUJBQUFyQixDQUFBLEVBQUFFLENBQUEsUUFBQUwsQ0FBQSxLQUFBMEIsQ0FBQSxRQUFBcUIsS0FBQSxzQ0FBQS9DLENBQUEsS0FBQTJCLENBQUEsb0JBQUF4QixDQUFBLFFBQUFFLENBQUEsV0FBQUgsS0FBQSxFQUFBUixDQUFBLEVBQUFzRCxJQUFBLGVBQUFsRCxDQUFBLENBQUFtRCxNQUFBLEdBQUE5QyxDQUFBLEVBQUFMLENBQUEsQ0FBQXdCLEdBQUEsR0FBQWpCLENBQUEsVUFBQUUsQ0FBQSxHQUFBVCxDQUFBLENBQUFvRCxRQUFBLE1BQUEzQyxDQUFBLFFBQUFFLENBQUEsR0FBQTBDLG1CQUFBLENBQUE1QyxDQUFBLEVBQUFULENBQUEsT0FBQVcsQ0FBQSxRQUFBQSxDQUFBLEtBQUFtQixDQUFBLG1CQUFBbkIsQ0FBQSxxQkFBQVgsQ0FBQSxDQUFBbUQsTUFBQSxFQUFBbkQsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBdUQsS0FBQSxHQUFBdkQsQ0FBQSxDQUFBd0IsR0FBQSxzQkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsUUFBQWpELENBQUEsS0FBQXdCLENBQUEsUUFBQXhCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQXdCLEdBQUEsRUFBQXhCLENBQUEsQ0FBQXdELGlCQUFBLENBQUF4RCxDQUFBLENBQUF3QixHQUFBLHVCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxJQUFBbkQsQ0FBQSxDQUFBeUQsTUFBQSxXQUFBekQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBdEIsQ0FBQSxHQUFBMEIsQ0FBQSxNQUFBSyxDQUFBLEdBQUFYLFFBQUEsQ0FBQTNCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLG9CQUFBaUMsQ0FBQSxDQUFBVixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQWtELElBQUEsR0FBQXJCLENBQUEsR0FBQUYsQ0FBQSxFQUFBTSxDQUFBLENBQUFULEdBQUEsS0FBQU0sQ0FBQSxxQkFBQTFCLEtBQUEsRUFBQTZCLENBQUEsQ0FBQVQsR0FBQSxFQUFBMEIsSUFBQSxFQUFBbEQsQ0FBQSxDQUFBa0QsSUFBQSxrQkFBQWpCLENBQUEsQ0FBQVYsSUFBQSxLQUFBckIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBbUQsTUFBQSxZQUFBbkQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBUyxDQUFBLENBQUFULEdBQUEsbUJBQUE2QixvQkFBQTFELENBQUEsRUFBQUUsQ0FBQSxRQUFBRyxDQUFBLEdBQUFILENBQUEsQ0FBQXNELE1BQUEsRUFBQWpELENBQUEsR0FBQVAsQ0FBQSxDQUFBYSxRQUFBLENBQUFSLENBQUEsT0FBQUUsQ0FBQSxLQUFBTixDQUFBLFNBQUFDLENBQUEsQ0FBQXVELFFBQUEscUJBQUFwRCxDQUFBLElBQUFMLENBQUEsQ0FBQWEsUUFBQSxlQUFBWCxDQUFBLENBQUFzRCxNQUFBLGFBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEVBQUF5RCxtQkFBQSxDQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsQ0FBQXNELE1BQUEsa0JBQUFuRCxDQUFBLEtBQUFILENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsdUNBQUExRCxDQUFBLGlCQUFBOEIsQ0FBQSxNQUFBekIsQ0FBQSxHQUFBaUIsUUFBQSxDQUFBcEIsQ0FBQSxFQUFBUCxDQUFBLENBQUFhLFFBQUEsRUFBQVgsQ0FBQSxDQUFBMkIsR0FBQSxtQkFBQW5CLENBQUEsQ0FBQWtCLElBQUEsU0FBQTFCLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQW5CLENBQUEsQ0FBQW1CLEdBQUEsRUFBQTNCLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsTUFBQXZCLENBQUEsR0FBQUYsQ0FBQSxDQUFBbUIsR0FBQSxTQUFBakIsQ0FBQSxHQUFBQSxDQUFBLENBQUEyQyxJQUFBLElBQUFyRCxDQUFBLENBQUFGLENBQUEsQ0FBQWdFLFVBQUEsSUFBQXBELENBQUEsQ0FBQUgsS0FBQSxFQUFBUCxDQUFBLENBQUErRCxJQUFBLEdBQUFqRSxDQUFBLENBQUFrRSxPQUFBLGVBQUFoRSxDQUFBLENBQUFzRCxNQUFBLEtBQUF0RCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEdBQUFDLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsSUFBQXZCLENBQUEsSUFBQVYsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSxzQ0FBQTdELENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsY0FBQWdDLGFBQUFsRSxDQUFBLFFBQUFELENBQUEsS0FBQW9FLE1BQUEsRUFBQW5FLENBQUEsWUFBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFxRSxRQUFBLEdBQUFwRSxDQUFBLFdBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0UsVUFBQSxHQUFBckUsQ0FBQSxLQUFBRCxDQUFBLENBQUF1RSxRQUFBLEdBQUF0RSxDQUFBLFdBQUF1RSxVQUFBLENBQUFDLElBQUEsQ0FBQXpFLENBQUEsY0FBQTBFLGNBQUF6RSxDQUFBLFFBQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBMEUsVUFBQSxRQUFBM0UsQ0FBQSxDQUFBNEIsSUFBQSxvQkFBQTVCLENBQUEsQ0FBQTZCLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTBFLFVBQUEsR0FBQTNFLENBQUEsYUFBQXlCLFFBQUF4QixDQUFBLFNBQUF1RSxVQUFBLE1BQUFKLE1BQUEsYUFBQW5FLENBQUEsQ0FBQTRDLE9BQUEsQ0FBQXNCLFlBQUEsY0FBQVMsS0FBQSxpQkFBQWxDLE9BQUExQyxDQUFBLFFBQUFBLENBQUEsV0FBQUEsQ0FBQSxRQUFBRSxDQUFBLEdBQUFGLENBQUEsQ0FBQVksQ0FBQSxPQUFBVixDQUFBLFNBQUFBLENBQUEsQ0FBQTRCLElBQUEsQ0FBQTlCLENBQUEsNEJBQUFBLENBQUEsQ0FBQWlFLElBQUEsU0FBQWpFLENBQUEsT0FBQTZFLEtBQUEsQ0FBQTdFLENBQUEsQ0FBQThFLE1BQUEsU0FBQXZFLENBQUEsT0FBQUcsQ0FBQSxZQUFBdUQsS0FBQSxhQUFBMUQsQ0FBQSxHQUFBUCxDQUFBLENBQUE4RSxNQUFBLE9BQUF6RSxDQUFBLENBQUF5QixJQUFBLENBQUE5QixDQUFBLEVBQUFPLENBQUEsVUFBQTBELElBQUEsQ0FBQXhELEtBQUEsR0FBQVQsQ0FBQSxDQUFBTyxDQUFBLEdBQUEwRCxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxTQUFBQSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFlBQUF2RCxDQUFBLENBQUF1RCxJQUFBLEdBQUF2RCxDQUFBLGdCQUFBcUQsU0FBQSxDQUFBZCxPQUFBLENBQUFqRCxDQUFBLGtDQUFBb0MsaUJBQUEsQ0FBQWhDLFNBQUEsR0FBQWlDLDBCQUFBLEVBQUE5QixDQUFBLENBQUFvQyxDQUFBLG1CQUFBbEMsS0FBQSxFQUFBNEIsMEJBQUEsRUFBQWpCLFlBQUEsU0FBQWIsQ0FBQSxDQUFBOEIsMEJBQUEsbUJBQUE1QixLQUFBLEVBQUEyQixpQkFBQSxFQUFBaEIsWUFBQSxTQUFBZ0IsaUJBQUEsQ0FBQTJDLFdBQUEsR0FBQTdELE1BQUEsQ0FBQW1CLDBCQUFBLEVBQUFyQixDQUFBLHdCQUFBaEIsQ0FBQSxDQUFBZ0YsbUJBQUEsYUFBQS9FLENBQUEsUUFBQUQsQ0FBQSx3QkFBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFnRixXQUFBLFdBQUFqRixDQUFBLEtBQUFBLENBQUEsS0FBQW9DLGlCQUFBLDZCQUFBcEMsQ0FBQSxDQUFBK0UsV0FBQSxJQUFBL0UsQ0FBQSxDQUFBa0YsSUFBQSxPQUFBbEYsQ0FBQSxDQUFBbUYsSUFBQSxhQUFBbEYsQ0FBQSxXQUFBRSxNQUFBLENBQUFpRixjQUFBLEdBQUFqRixNQUFBLENBQUFpRixjQUFBLENBQUFuRixDQUFBLEVBQUFvQywwQkFBQSxLQUFBcEMsQ0FBQSxDQUFBb0YsU0FBQSxHQUFBaEQsMEJBQUEsRUFBQW5CLE1BQUEsQ0FBQWpCLENBQUEsRUFBQWUsQ0FBQSx5QkFBQWYsQ0FBQSxDQUFBRyxTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQW1CLENBQUEsR0FBQTFDLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0YsS0FBQSxhQUFBckYsQ0FBQSxhQUFBa0QsT0FBQSxFQUFBbEQsQ0FBQSxPQUFBMkMscUJBQUEsQ0FBQUcsYUFBQSxDQUFBM0MsU0FBQSxHQUFBYyxNQUFBLENBQUE2QixhQUFBLENBQUEzQyxTQUFBLEVBQUFVLENBQUEsaUNBQUFkLENBQUEsQ0FBQStDLGFBQUEsR0FBQUEsYUFBQSxFQUFBL0MsQ0FBQSxDQUFBdUYsS0FBQSxhQUFBdEYsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGVBQUFBLENBQUEsS0FBQUEsQ0FBQSxHQUFBOEUsT0FBQSxPQUFBNUUsQ0FBQSxPQUFBbUMsYUFBQSxDQUFBekIsSUFBQSxDQUFBckIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxHQUFBRyxDQUFBLFVBQUFWLENBQUEsQ0FBQWdGLG1CQUFBLENBQUE5RSxDQUFBLElBQUFVLENBQUEsR0FBQUEsQ0FBQSxDQUFBcUQsSUFBQSxHQUFBYixJQUFBLFdBQUFuRCxDQUFBLFdBQUFBLENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQVEsS0FBQSxHQUFBRyxDQUFBLENBQUFxRCxJQUFBLFdBQUFyQixxQkFBQSxDQUFBRCxDQUFBLEdBQUF6QixNQUFBLENBQUF5QixDQUFBLEVBQUEzQixDQUFBLGdCQUFBRSxNQUFBLENBQUF5QixDQUFBLEVBQUEvQixDQUFBLGlDQUFBTSxNQUFBLENBQUF5QixDQUFBLDZEQUFBM0MsQ0FBQSxDQUFBeUYsSUFBQSxhQUFBeEYsQ0FBQSxRQUFBRCxDQUFBLEdBQUFHLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBQyxDQUFBLGdCQUFBRyxDQUFBLElBQUFMLENBQUEsRUFBQUUsQ0FBQSxDQUFBdUUsSUFBQSxDQUFBcEUsQ0FBQSxVQUFBSCxDQUFBLENBQUF3RixPQUFBLGFBQUF6QixLQUFBLFdBQUEvRCxDQUFBLENBQUE0RSxNQUFBLFNBQUE3RSxDQUFBLEdBQUFDLENBQUEsQ0FBQXlGLEdBQUEsUUFBQTFGLENBQUEsSUFBQUQsQ0FBQSxTQUFBaUUsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxXQUFBQSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxRQUFBakUsQ0FBQSxDQUFBMEMsTUFBQSxHQUFBQSxNQUFBLEVBQUFqQixPQUFBLENBQUFyQixTQUFBLEtBQUE2RSxXQUFBLEVBQUF4RCxPQUFBLEVBQUFtRCxLQUFBLFdBQUFBLE1BQUE1RSxDQUFBLGFBQUE0RixJQUFBLFdBQUEzQixJQUFBLFdBQUFOLElBQUEsUUFBQUMsS0FBQSxHQUFBM0QsQ0FBQSxPQUFBc0QsSUFBQSxZQUFBRSxRQUFBLGNBQUFELE1BQUEsZ0JBQUEzQixHQUFBLEdBQUE1QixDQUFBLE9BQUF1RSxVQUFBLENBQUEzQixPQUFBLENBQUE2QixhQUFBLElBQUExRSxDQUFBLFdBQUFFLENBQUEsa0JBQUFBLENBQUEsQ0FBQTJGLE1BQUEsT0FBQXhGLENBQUEsQ0FBQXlCLElBQUEsT0FBQTVCLENBQUEsTUFBQTJFLEtBQUEsRUFBQTNFLENBQUEsQ0FBQTRGLEtBQUEsY0FBQTVGLENBQUEsSUFBQUQsQ0FBQSxNQUFBOEYsSUFBQSxXQUFBQSxLQUFBLFNBQUF4QyxJQUFBLFdBQUF0RCxDQUFBLFFBQUF1RSxVQUFBLElBQUFHLFVBQUEsa0JBQUExRSxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLGNBQUFtRSxJQUFBLEtBQUFuQyxpQkFBQSxXQUFBQSxrQkFBQTdELENBQUEsYUFBQXVELElBQUEsUUFBQXZELENBQUEsTUFBQUUsQ0FBQSxrQkFBQStGLE9BQUE1RixDQUFBLEVBQUFFLENBQUEsV0FBQUssQ0FBQSxDQUFBZ0IsSUFBQSxZQUFBaEIsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBRSxDQUFBLENBQUErRCxJQUFBLEdBQUE1RCxDQUFBLEVBQUFFLENBQUEsS0FBQUwsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxLQUFBTSxDQUFBLGFBQUFBLENBQUEsUUFBQWlFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBdkUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFHLENBQUEsUUFBQThELFVBQUEsQ0FBQWpFLENBQUEsR0FBQUssQ0FBQSxHQUFBRixDQUFBLENBQUFpRSxVQUFBLGlCQUFBakUsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBNkIsTUFBQSxhQUFBdkYsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBd0IsSUFBQSxRQUFBOUUsQ0FBQSxHQUFBVCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLGVBQUFNLENBQUEsR0FBQVgsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxxQkFBQUksQ0FBQSxJQUFBRSxDQUFBLGFBQUE0RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLGdCQUFBdUIsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxjQUFBeEQsQ0FBQSxhQUFBOEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxxQkFBQXJELENBQUEsUUFBQXNDLEtBQUEscURBQUFzQyxJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLFlBQUFSLE1BQUEsV0FBQUEsT0FBQTdELENBQUEsRUFBQUQsQ0FBQSxhQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUFNLE1BQUEsTUFBQTVFLENBQUEsU0FBQUEsQ0FBQSxRQUFBSyxDQUFBLFFBQUFpRSxVQUFBLENBQUF0RSxDQUFBLE9BQUFLLENBQUEsQ0FBQTZELE1BQUEsU0FBQXdCLElBQUEsSUFBQXZGLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXZCLENBQUEsd0JBQUFxRixJQUFBLEdBQUFyRixDQUFBLENBQUErRCxVQUFBLFFBQUE1RCxDQUFBLEdBQUFILENBQUEsYUFBQUcsQ0FBQSxpQkFBQVQsQ0FBQSxtQkFBQUEsQ0FBQSxLQUFBUyxDQUFBLENBQUEwRCxNQUFBLElBQUFwRSxDQUFBLElBQUFBLENBQUEsSUFBQVUsQ0FBQSxDQUFBNEQsVUFBQSxLQUFBNUQsQ0FBQSxjQUFBRSxDQUFBLEdBQUFGLENBQUEsR0FBQUEsQ0FBQSxDQUFBaUUsVUFBQSxjQUFBL0QsQ0FBQSxDQUFBZ0IsSUFBQSxHQUFBM0IsQ0FBQSxFQUFBVyxDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFVLENBQUEsU0FBQThDLE1BQUEsZ0JBQUFTLElBQUEsR0FBQXZELENBQUEsQ0FBQTRELFVBQUEsRUFBQW5DLENBQUEsU0FBQStELFFBQUEsQ0FBQXRGLENBQUEsTUFBQXNGLFFBQUEsV0FBQUEsU0FBQWpHLENBQUEsRUFBQUQsQ0FBQSxvQkFBQUMsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxxQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsbUJBQUEzQixDQUFBLENBQUEyQixJQUFBLFFBQUFxQyxJQUFBLEdBQUFoRSxDQUFBLENBQUE0QixHQUFBLGdCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxTQUFBb0UsSUFBQSxRQUFBbkUsR0FBQSxHQUFBNUIsQ0FBQSxDQUFBNEIsR0FBQSxPQUFBMkIsTUFBQSxrQkFBQVMsSUFBQSx5QkFBQWhFLENBQUEsQ0FBQTJCLElBQUEsSUFBQTVCLENBQUEsVUFBQWlFLElBQUEsR0FBQWpFLENBQUEsR0FBQW1DLENBQUEsS0FBQWdFLE1BQUEsV0FBQUEsT0FBQWxHLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFvRSxVQUFBLEtBQUFyRSxDQUFBLGNBQUFpRyxRQUFBLENBQUFoRyxDQUFBLENBQUF5RSxVQUFBLEVBQUF6RSxDQUFBLENBQUFxRSxRQUFBLEdBQUFHLGFBQUEsQ0FBQXhFLENBQUEsR0FBQWlDLENBQUEseUJBQUFpRSxPQUFBbkcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQWtFLE1BQUEsS0FBQW5FLENBQUEsUUFBQUksQ0FBQSxHQUFBSCxDQUFBLENBQUF5RSxVQUFBLGtCQUFBdEUsQ0FBQSxDQUFBdUIsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUF3QixHQUFBLEVBQUE2QyxhQUFBLENBQUF4RSxDQUFBLFlBQUFLLENBQUEsWUFBQStDLEtBQUEsOEJBQUErQyxhQUFBLFdBQUFBLGNBQUFyRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxnQkFBQW9ELFFBQUEsS0FBQTVDLFFBQUEsRUFBQTZCLE1BQUEsQ0FBQTFDLENBQUEsR0FBQWdFLFVBQUEsRUFBQTlELENBQUEsRUFBQWdFLE9BQUEsRUFBQTdELENBQUEsb0JBQUFtRCxNQUFBLFVBQUEzQixHQUFBLEdBQUE1QixDQUFBLEdBQUFrQyxDQUFBLE9BQUFuQyxDQUFBO0FBQUEsU0FBQXNHLG1CQUFBakcsQ0FBQSxFQUFBSixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBSyxDQUFBLEVBQUFLLENBQUEsRUFBQUUsQ0FBQSxjQUFBSixDQUFBLEdBQUFMLENBQUEsQ0FBQU8sQ0FBQSxFQUFBRSxDQUFBLEdBQUFFLENBQUEsR0FBQU4sQ0FBQSxDQUFBRCxLQUFBLFdBQUFKLENBQUEsZ0JBQUFMLENBQUEsQ0FBQUssQ0FBQSxLQUFBSyxDQUFBLENBQUE2QyxJQUFBLEdBQUF0RCxDQUFBLENBQUFlLENBQUEsSUFBQXdFLE9BQUEsQ0FBQXRDLE9BQUEsQ0FBQWxDLENBQUEsRUFBQW9DLElBQUEsQ0FBQWxELENBQUEsRUFBQUssQ0FBQTtBQUFBLFNBQUFnRyxrQkFBQWxHLENBQUEsNkJBQUFKLENBQUEsU0FBQUQsQ0FBQSxHQUFBd0csU0FBQSxhQUFBaEIsT0FBQSxXQUFBdEYsQ0FBQSxFQUFBSyxDQUFBLFFBQUFLLENBQUEsR0FBQVAsQ0FBQSxDQUFBb0csS0FBQSxDQUFBeEcsQ0FBQSxFQUFBRCxDQUFBLFlBQUEwRyxNQUFBckcsQ0FBQSxJQUFBaUcsa0JBQUEsQ0FBQTFGLENBQUEsRUFBQVYsQ0FBQSxFQUFBSyxDQUFBLEVBQUFtRyxLQUFBLEVBQUFDLE1BQUEsVUFBQXRHLENBQUEsY0FBQXNHLE9BQUF0RyxDQUFBLElBQUFpRyxrQkFBQSxDQUFBMUYsQ0FBQSxFQUFBVixDQUFBLEVBQUFLLENBQUEsRUFBQW1HLEtBQUEsRUFBQUMsTUFBQSxXQUFBdEcsQ0FBQSxLQUFBcUcsS0FBQTtBQURBOztBQUVBLElBQUk0TCxFQUFFO0FBRUMsU0FBZUMsWUFBWUEsQ0FBQTtFQUFBLE9BQUFDLGFBQUEsQ0FBQS9MLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBNkJqQyxTQUFBZ00sY0FBQTtFQUFBQSxhQUFBLEdBQUFqTSxpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0E3Qk0sU0FBQTJCLFFBQUE7SUFBQSxPQUFBL0csbUJBQUEsR0FBQXVCLElBQUEsVUFBQTRGLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBdkIsSUFBQSxHQUFBdUIsUUFBQSxDQUFBbEQsSUFBQTtRQUFBO1VBQUEsT0FBQWtELFFBQUEsQ0FBQXJELE1BQUEsV0FDRSxJQUFJMEIsT0FBTyxDQUFDLFVBQUN0QyxPQUFPLEVBQUUrRixNQUFNLEVBQUs7WUFDdEMsSUFBSXFKLEVBQUUsRUFBRTtjQUNOcFAsT0FBTyxDQUFDb1AsRUFBRSxDQUFDO2NBQ1g7WUFDRjtZQUNBLElBQU1HLE9BQU8sR0FBR0MsU0FBUyxDQUFDQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1lBRXJERixPQUFPLENBQUNHLE9BQU8sR0FBRyxVQUFDQyxLQUFLLEVBQUs7Y0FDM0JuTCxPQUFPLENBQUMwRixLQUFLLENBQUMsaUJBQWlCLEVBQUV5RixLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO2NBQ3hEOUosTUFBTSxDQUFDNEosS0FBSyxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUNoQyxDQUFDO1lBRUROLE9BQU8sQ0FBQ08sZUFBZSxHQUFHLFVBQUNILEtBQUssRUFBSztjQUNuQ1AsRUFBRSxHQUFHTyxLQUFLLENBQUNDLE1BQU0sQ0FBQzFLLE1BQU07Y0FDeEIsSUFBTTZLLFdBQVcsR0FBR1gsRUFBRSxDQUFDWSxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7Z0JBQUVDLE9BQU8sRUFBRTtjQUFLLENBQUMsQ0FBQztjQUN0RUYsV0FBVyxDQUFDRyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtnQkFBRUMsTUFBTSxFQUFFO2NBQU0sQ0FBQyxDQUFDO2NBQ3hESixXQUFXLENBQUNHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFO2dCQUFFQyxNQUFNLEVBQUU7Y0FBTSxDQUFDLENBQUM7Y0FDNURKLFdBQVcsQ0FBQ0csV0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRSxLQUFLO2dCQUFFQyxVQUFVLEVBQUU7Y0FBSyxDQUFDLENBQUM7Y0FDNUVMLFdBQVcsQ0FBQ0csV0FBVyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRTtjQUFNLENBQUMsQ0FBQztjQUNoRUosV0FBVyxDQUFDRyxXQUFXLENBQUMsZUFBZSxFQUFFLGVBQWUsRUFBRTtnQkFBRUMsTUFBTSxFQUFFO2NBQUssQ0FBQyxDQUFDO2NBQzNFM0wsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7WUFDbEMsQ0FBQztZQUVEOEssT0FBTyxDQUFDYyxTQUFTLEdBQUcsVUFBQ1YsS0FBSyxFQUFLO2NBQzdCUCxFQUFFLEdBQUdPLEtBQUssQ0FBQ0MsTUFBTSxDQUFDMUssTUFBTTtjQUN4QmxGLE9BQU8sQ0FBQ29QLEVBQUUsQ0FBQztZQUNiLENBQUM7VUFDSCxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQW5MLFFBQUEsQ0FBQXBCLElBQUE7TUFBQTtJQUFBLEdBQUFlLE9BQUE7RUFBQSxDQUNIO0VBQUEsT0FBQTBMLGFBQUEsQ0FBQS9MLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBRU0sU0FBZWdOLGFBQWFBLENBQUE7RUFBQSxPQUFBQyxjQUFBLENBQUFoTixLQUFBLE9BQUFELFNBQUE7QUFBQTtBQWdCbEMsU0FBQWlOLGVBQUE7RUFBQUEsY0FBQSxHQUFBbE4saUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBaEJNLFNBQUErQyxTQUFBO0lBQUEsT0FBQW5JLG1CQUFBLEdBQUF1QixJQUFBLFVBQUErRyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQTFDLElBQUEsR0FBQTBDLFNBQUEsQ0FBQXJFLElBQUE7UUFBQTtVQUFBcUUsU0FBQSxDQUFBckUsSUFBQTtVQUFBLE9BQ0NzTyxZQUFZLENBQUMsQ0FBQztRQUFBO1VBQUEsT0FBQWpLLFNBQUEsQ0FBQXhFLE1BQUEsV0FDYixJQUFJMEIsT0FBTyxDQUFDLFVBQUN0QyxPQUFPLEVBQUUrRixNQUFNLEVBQUs7WUFDdEMsSUFBTXlLLFdBQVcsR0FBR3BCLEVBQUUsQ0FBQ29CLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFdBQVcsQ0FBQztZQUM1RCxJQUFNVCxXQUFXLEdBQUdTLFdBQVcsQ0FBQ1QsV0FBVyxDQUFDLFNBQVMsQ0FBQztZQUN0RCxJQUFNUixPQUFPLEdBQUdRLFdBQVcsQ0FBQ1UsS0FBSyxDQUFDLENBQUM7WUFDbkNqTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztZQUVoQzhLLE9BQU8sQ0FBQ2MsU0FBUyxHQUFHLFlBQU07Y0FDeEJyUSxPQUFPLENBQUMsQ0FBQztZQUNYLENBQUM7WUFFRHVQLE9BQU8sQ0FBQ0csT0FBTyxHQUFHLFVBQUNDLEtBQUssRUFBSztjQUMzQjVKLE1BQU0sQ0FBQzRKLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDaEMsQ0FBQztVQUNILENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBekssU0FBQSxDQUFBdkMsSUFBQTtNQUFBO0lBQUEsR0FBQW1DLFFBQUE7RUFBQSxDQUNIO0VBQUEsT0FBQXVMLGNBQUEsQ0FBQWhOLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBRU0sU0FBZW9OLGNBQWNBLENBQUE1TCxFQUFBO0VBQUEsT0FBQTZMLGVBQUEsQ0FBQXBOLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBb0NuQyxTQUFBcU4sZ0JBQUE7RUFBQUEsZUFBQSxHQUFBdE4saUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBcENNLFNBQUEyTyxTQUE4Qi9JLElBQUk7SUFBQSxPQUFBaEwsbUJBQUEsR0FBQXVCLElBQUEsVUFBQXlTLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBcE8sSUFBQSxHQUFBb08sU0FBQSxDQUFBL1AsSUFBQTtRQUFBO1VBQUErUCxTQUFBLENBQUEvUCxJQUFBO1VBQUEsT0FDakNzTyxZQUFZLENBQUMsQ0FBQztRQUFBO1VBQUEsT0FBQXlCLFNBQUEsQ0FBQWxRLE1BQUEsV0FDYixJQUFJMEIsT0FBTyxDQUFDLFVBQUN0QyxPQUFPLEVBQUUrRixNQUFNLEVBQUs7WUFDdEMsSUFBTXlLLFdBQVcsR0FBR3BCLEVBQUUsQ0FBQ29CLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFdBQVcsQ0FBQztZQUM1RCxJQUFNVCxXQUFXLEdBQUdTLFdBQVcsQ0FBQ1QsV0FBVyxDQUFDLFNBQVMsQ0FBQztZQUN0RCxJQUFNZ0IsS0FBSyxHQUFHaEIsV0FBVyxDQUFDZ0IsS0FBSyxDQUFDLGVBQWUsQ0FBQzs7WUFFaEQ7WUFDQSxJQUFNQyxZQUFZLEdBQUdELEtBQUssQ0FBQ3JJLEdBQUcsQ0FBQ2IsSUFBSSxDQUFDb0osYUFBYSxDQUFDO1lBRWxERCxZQUFZLENBQUNYLFNBQVMsR0FBRyxVQUFDVixLQUFLLEVBQUs7Y0FDbEMsSUFBSUEsS0FBSyxDQUFDQyxNQUFNLENBQUMxSyxNQUFNLEVBQUU7Z0JBQ3ZCO2dCQUNBVixPQUFPLENBQUNDLEdBQUcsQ0FBQyw4REFBOEQsQ0FBQztnQkFDM0V6RSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDYixDQUFDLE1BQU07Z0JBQ0w7Z0JBQ0EsSUFBTXVQLE9BQU8sR0FBR1EsV0FBVyxDQUFDbUIsR0FBRyxDQUFDckosSUFBSSxDQUFDO2dCQUVyQzBILE9BQU8sQ0FBQ2MsU0FBUyxHQUFHLFlBQU07a0JBQ3hCN0wsT0FBTyxDQUFDQyxHQUFHLHFCQUFxQixDQUFDO2tCQUNqQ3pFLE9BQU8sQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBRUR1UCxPQUFPLENBQUNHLE9BQU8sR0FBRyxVQUFDQyxLQUFLLEVBQUs7a0JBQzNCbkwsT0FBTyxDQUFDMEYsS0FBSyxDQUFDLG9CQUFvQixFQUFFeUYsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQztrQkFDM0Q5SixNQUFNLENBQUM0SixLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO2dCQUNoQyxDQUFDO2NBQ0g7WUFDRixDQUFDO1lBRURtQixZQUFZLENBQUN0QixPQUFPLEdBQUcsVUFBQ0MsS0FBSyxFQUFLO2NBQ2hDbkwsT0FBTyxDQUFDMEYsS0FBSyxDQUFDLCtCQUErQixFQUFFeUYsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQztjQUN0RTlKLE1BQU0sQ0FBQzRKLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDaEMsQ0FBQztVQUNILENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBaUIsU0FBQSxDQUFBak8sSUFBQTtNQUFBO0lBQUEsR0FBQStOLFFBQUE7RUFBQSxDQUNIO0VBQUEsT0FBQUQsZUFBQSxDQUFBcE4sS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFFTSxTQUFlNk4sa0JBQWtCQSxDQUFBO0VBQUEsT0FBQUMsbUJBQUEsQ0FBQTdOLEtBQUEsT0FBQUQsU0FBQTtBQUFBOztBQW1CeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBLFNBQUE4TixvQkFBQTtFQUFBQSxtQkFBQSxHQUFBL04saUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBbkJPLFNBQUFvUCxTQUFBO0lBQUEsT0FBQXhVLG1CQUFBLEdBQUF1QixJQUFBLFVBQUFrVCxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQTdPLElBQUEsR0FBQTZPLFNBQUEsQ0FBQXhRLElBQUE7UUFBQTtVQUFBd1EsU0FBQSxDQUFBeFEsSUFBQTtVQUFBLE9BQ0NzTyxZQUFZLENBQUMsQ0FBQztRQUFBO1VBQUEsT0FBQWtDLFNBQUEsQ0FBQTNRLE1BQUEsV0FDYixJQUFJMEIsT0FBTyxDQUFDLFVBQUN0QyxPQUFPLEVBQUUrRixNQUFNLEVBQUs7WUFDdEMsSUFBTXlLLFdBQVcsR0FBR3BCLEVBQUUsQ0FBQ29CLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUMzRCxJQUFNVCxXQUFXLEdBQUdTLFdBQVcsQ0FBQ1QsV0FBVyxDQUFDLFNBQVMsQ0FBQztZQUN0RCxJQUFNUixPQUFPLEdBQUdRLFdBQVcsQ0FBQ3lCLE1BQU0sQ0FBQyxDQUFDO1lBRXBDakMsT0FBTyxDQUFDYyxTQUFTLEdBQUcsVUFBQ1YsS0FBSyxFQUFLO2NBQzdCM1AsT0FBTyxDQUFDMlAsS0FBSyxDQUFDQyxNQUFNLENBQUMxSyxNQUFNLENBQUM7Y0FDNUJWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO1lBQzFDLENBQUM7WUFFRDhLLE9BQU8sQ0FBQ0csT0FBTyxHQUFHLFVBQUNDLEtBQUssRUFBSztjQUMzQjVKLE1BQU0sQ0FBQzRKLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUM7Y0FDOUJyTCxPQUFPLENBQUMwRixLQUFLLENBQUMsbUNBQW1DLEVBQUV5RixLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQzVFLENBQUM7VUFDSCxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQTBCLFNBQUEsQ0FBQTFPLElBQUE7TUFBQTtJQUFBLEdBQUF3TyxRQUFBO0VBQUEsQ0FDSDtFQUFBLE9BQUFELG1CQUFBLENBQUE3TixLQUFBLE9BQUFELFNBQUE7QUFBQTtBQU9NLFNBQWVtTyxpQkFBaUJBLENBQUE5TCxHQUFBO0VBQUEsT0FBQStMLGtCQUFBLENBQUFuTyxLQUFBLE9BQUFELFNBQUE7QUFBQTs7QUE0QnZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQSxTQUFBb08sbUJBQUE7RUFBQUEsa0JBQUEsR0FBQXJPLGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQTVCTyxTQUFBMFAsU0FBaUNWLGFBQWE7SUFBQSxJQUFBVCxXQUFBLEVBQUFULFdBQUEsRUFBQWdCLEtBQUEsRUFBQXhCLE9BQUEsRUFBQXJLLE1BQUEsRUFBQTBNLE1BQUE7SUFBQSxPQUFBL1UsbUJBQUEsR0FBQXVCLElBQUEsVUFBQXlULFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBcFAsSUFBQSxHQUFBb1AsU0FBQSxDQUFBL1EsSUFBQTtRQUFBO1VBQUErUSxTQUFBLENBQUEvUSxJQUFBO1VBQUEsT0FFN0NzTyxZQUFZLENBQUMsQ0FBQztRQUFBO1VBQUF5QyxTQUFBLENBQUFwUCxJQUFBO1VBR2xCO1VBQ004TixXQUFXLEdBQUdwQixFQUFFLENBQUNvQixXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxVQUFVLENBQUM7VUFDckRULFdBQVcsR0FBR1MsV0FBVyxDQUFDVCxXQUFXLENBQUMsU0FBUyxDQUFDO1VBQ2hEZ0IsS0FBSyxHQUFHaEIsV0FBVyxDQUFDZ0IsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUVoRDtVQUNNeEIsT0FBTyxHQUFHd0IsS0FBSyxDQUFDckksR0FBRyxDQUFDdUksYUFBYSxDQUFDLEVBRXhDO1VBQUFhLFNBQUEsQ0FBQS9RLElBQUE7VUFBQSxPQUNxQmdSLGdCQUFnQixDQUFDeEMsT0FBTyxDQUFDO1FBQUE7VUFBeENySyxNQUFNLEdBQUE0TSxTQUFBLENBQUFyUixJQUFBO1VBRVo7VUFDTW1SLE1BQU0sR0FBRzFNLE1BQU0sS0FBSzRGLFNBQVMsSUFBSTVGLE1BQU0sS0FBSyxJQUFJLEVBRXREO1VBQUEsT0FBQTRNLFNBQUEsQ0FBQWxSLE1BQUEsV0FFT2dSLE1BQU07UUFBQTtVQUFBRSxTQUFBLENBQUFwUCxJQUFBO1VBQUFvUCxTQUFBLENBQUF2TSxFQUFBLEdBQUF1TSxTQUFBO1VBRWJ0TixPQUFPLENBQUMwRixLQUFLLG9EQUFBQyxNQUFBLENBQW9EOEcsYUFBYSxRQUFBYSxTQUFBLENBQUF2TSxFQUFVLENBQUM7VUFBQyxNQUFBdU0sU0FBQSxDQUFBdk0sRUFBQTtRQUFBO1FBQUE7VUFBQSxPQUFBdU0sU0FBQSxDQUFBalAsSUFBQTtNQUFBO0lBQUEsR0FBQThPLFFBQUE7RUFBQSxDQUc3RjtFQUFBLE9BQUFELGtCQUFBLENBQUFuTyxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQU9ELFNBQVN5TyxnQkFBZ0JBLENBQUN4QyxPQUFPLEVBQUU7RUFDakMsT0FBTyxJQUFJak4sT0FBTyxDQUFDLFVBQUN0QyxPQUFPLEVBQUUrRixNQUFNLEVBQUs7SUFDdEN3SixPQUFPLENBQUNjLFNBQVMsR0FBRztNQUFBLE9BQU1yUSxPQUFPLENBQUN1UCxPQUFPLENBQUNySyxNQUFNLENBQUM7SUFBQTtJQUNqRHFLLE9BQU8sQ0FBQ0csT0FBTyxHQUFHO01BQUEsT0FBTTNKLE1BQU0sQ0FBQ3dKLE9BQU8sQ0FBQ3JGLEtBQUssQ0FBQztJQUFBO0VBQy9DLENBQUMsQ0FBQztBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNPLFNBQWUxRSxxQkFBcUJBLENBQUFtQixHQUFBLEVBQUFDLEdBQUE7RUFBQSxPQUFBb0wsc0JBQUEsQ0FBQXpPLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBVTFDLFNBQUEwTyx1QkFBQTtFQUFBQSxzQkFBQSxHQUFBM08saUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBVk0sU0FBQWdRLFNBQXFDcE0sU0FBUyxFQUFFQyxPQUFPO0lBQUEsSUFBQTBLLFdBQUEsRUFBQVQsV0FBQSxFQUFBZ0IsS0FBQSxFQUFBbUIsS0FBQSxFQUFBM0MsT0FBQSxFQUFBckssTUFBQTtJQUFBLE9BQUFySSxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBK1QsVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUExUCxJQUFBLEdBQUEwUCxTQUFBLENBQUFyUixJQUFBO1FBQUE7VUFBQXFSLFNBQUEsQ0FBQXJSLElBQUE7VUFBQSxPQUN0RHNPLFlBQVksQ0FBQyxDQUFDO1FBQUE7VUFDZG1CLFdBQVcsR0FBR3BCLEVBQUUsQ0FBQ29CLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQVUsQ0FBQztVQUNyRFQsV0FBVyxHQUFHUyxXQUFXLENBQUNULFdBQVcsQ0FBQyxTQUFTLENBQUM7VUFDaERnQixLQUFLLEdBQUdoQixXQUFXLENBQUNnQixLQUFLLENBQUMsZUFBZSxDQUFDO1VBQzFDbUIsS0FBSyxHQUFHRyxXQUFXLENBQUNDLEtBQUssQ0FBQ3pNLFNBQVMsRUFBRUMsT0FBTyxDQUFDO1VBQzdDeUosT0FBTyxHQUFHd0IsS0FBSyxDQUFDUyxNQUFNLENBQUNVLEtBQUssQ0FBQztVQUFBRSxTQUFBLENBQUFyUixJQUFBO1VBQUEsT0FFZGdSLGdCQUFnQixDQUFDeEMsT0FBTyxDQUFDO1FBQUE7VUFBeENySyxNQUFNLEdBQUFrTixTQUFBLENBQUEzUixJQUFBO1VBQUEsT0FBQTJSLFNBQUEsQ0FBQXhSLE1BQUEsV0FDTHNFLE1BQU07UUFBQTtRQUFBO1VBQUEsT0FBQWtOLFNBQUEsQ0FBQXZQLElBQUE7TUFBQTtJQUFBLEdBQUFvUCxRQUFBO0VBQUEsQ0FDZDtFQUFBLE9BQUFELHNCQUFBLENBQUF6TyxLQUFBLE9BQUFELFNBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQ3ZLRCxxSkFBQXpHLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBQyxNQUFBLENBQUFLLGNBQUEsQ0FBQVAsQ0FBQSxFQUFBRCxDQUFBLElBQUFTLEtBQUEsRUFBQVAsQ0FBQSxFQUFBaUIsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXBCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBa0IsTUFBQSxtQkFBQWpCLENBQUEsSUFBQWlCLE1BQUEsWUFBQUEsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBb0IsS0FBQXJCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUssQ0FBQSxHQUFBVixDQUFBLElBQUFBLENBQUEsQ0FBQUksU0FBQSxZQUFBbUIsU0FBQSxHQUFBdkIsQ0FBQSxHQUFBdUIsU0FBQSxFQUFBWCxDQUFBLEdBQUFULE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWQsQ0FBQSxDQUFBTixTQUFBLEdBQUFVLENBQUEsT0FBQVcsT0FBQSxDQUFBcEIsQ0FBQSxnQkFBQUUsQ0FBQSxDQUFBSyxDQUFBLGVBQUFILEtBQUEsRUFBQWlCLGdCQUFBLENBQUF6QixDQUFBLEVBQUFDLENBQUEsRUFBQVksQ0FBQSxNQUFBRixDQUFBLGFBQUFlLFNBQUExQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxtQkFBQTBCLElBQUEsWUFBQUMsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBNkIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBRSxDQUFBLGNBQUFELENBQUEsYUFBQTJCLElBQUEsV0FBQUMsR0FBQSxFQUFBNUIsQ0FBQSxRQUFBRCxDQUFBLENBQUFzQixJQUFBLEdBQUFBLElBQUEsTUFBQVMsQ0FBQSxxQkFBQUMsQ0FBQSxxQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQVosVUFBQSxjQUFBYSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxDQUFBLE9BQUFwQixNQUFBLENBQUFvQixDQUFBLEVBQUExQixDQUFBLHFDQUFBMkIsQ0FBQSxHQUFBcEMsTUFBQSxDQUFBcUMsY0FBQSxFQUFBQyxDQUFBLEdBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBQSxDQUFBLENBQUFHLE1BQUEsUUFBQUQsQ0FBQSxJQUFBQSxDQUFBLEtBQUF2QyxDQUFBLElBQUFHLENBQUEsQ0FBQXlCLElBQUEsQ0FBQVcsQ0FBQSxFQUFBN0IsQ0FBQSxNQUFBMEIsQ0FBQSxHQUFBRyxDQUFBLE9BQUFFLENBQUEsR0FBQU4sMEJBQUEsQ0FBQWpDLFNBQUEsR0FBQW1CLFNBQUEsQ0FBQW5CLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBYyxDQUFBLFlBQUFNLHNCQUFBM0MsQ0FBQSxnQ0FBQTRDLE9BQUEsV0FBQTdDLENBQUEsSUFBQWtCLE1BQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGdCQUFBNkMsT0FBQSxDQUFBOUMsQ0FBQSxFQUFBQyxDQUFBLHNCQUFBOEMsY0FBQTlDLENBQUEsRUFBQUQsQ0FBQSxhQUFBZ0QsT0FBQTlDLENBQUEsRUFBQUssQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxHQUFBYSxRQUFBLENBQUExQixDQUFBLENBQUFDLENBQUEsR0FBQUQsQ0FBQSxFQUFBTSxDQUFBLG1CQUFBTyxDQUFBLENBQUFjLElBQUEsUUFBQVosQ0FBQSxHQUFBRixDQUFBLENBQUFlLEdBQUEsRUFBQUUsQ0FBQSxHQUFBZixDQUFBLENBQUFQLEtBQUEsU0FBQXNCLENBQUEsZ0JBQUFrQixPQUFBLENBQUFsQixDQUFBLEtBQUExQixDQUFBLENBQUF5QixJQUFBLENBQUFDLENBQUEsZUFBQS9CLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsQ0FBQW9CLE9BQUEsRUFBQUMsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBK0MsTUFBQSxTQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsZ0JBQUFYLENBQUEsSUFBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFFBQUFaLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsRUFBQXFCLElBQUEsV0FBQW5ELENBQUEsSUFBQWUsQ0FBQSxDQUFBUCxLQUFBLEdBQUFSLENBQUEsRUFBQVMsQ0FBQSxDQUFBTSxDQUFBLGdCQUFBZixDQUFBLFdBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLENBQUFFLENBQUEsQ0FBQWUsR0FBQSxTQUFBM0IsQ0FBQSxFQUFBSyxDQUFBLG9CQUFBRSxLQUFBLFdBQUFBLE1BQUFSLENBQUEsRUFBQUksQ0FBQSxhQUFBZ0QsMkJBQUEsZUFBQXJELENBQUEsV0FBQUEsQ0FBQSxFQUFBRSxDQUFBLElBQUE4QyxNQUFBLENBQUEvQyxDQUFBLEVBQUFJLENBQUEsRUFBQUwsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBQSxDQUFBLEdBQUFBLENBQUEsR0FBQUEsQ0FBQSxDQUFBa0QsSUFBQSxDQUFBQywwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQTNCLGlCQUFBMUIsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUUsQ0FBQSxHQUFBd0IsQ0FBQSxtQkFBQXJCLENBQUEsRUFBQUUsQ0FBQSxRQUFBTCxDQUFBLEtBQUEwQixDQUFBLFFBQUFxQixLQUFBLHNDQUFBL0MsQ0FBQSxLQUFBMkIsQ0FBQSxvQkFBQXhCLENBQUEsUUFBQUUsQ0FBQSxXQUFBSCxLQUFBLEVBQUFSLENBQUEsRUFBQXNELElBQUEsZUFBQWxELENBQUEsQ0FBQW1ELE1BQUEsR0FBQTlDLENBQUEsRUFBQUwsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBakIsQ0FBQSxVQUFBRSxDQUFBLEdBQUFULENBQUEsQ0FBQW9ELFFBQUEsTUFBQTNDLENBQUEsUUFBQUUsQ0FBQSxHQUFBMEMsbUJBQUEsQ0FBQTVDLENBQUEsRUFBQVQsQ0FBQSxPQUFBVyxDQUFBLFFBQUFBLENBQUEsS0FBQW1CLENBQUEsbUJBQUFuQixDQUFBLHFCQUFBWCxDQUFBLENBQUFtRCxNQUFBLEVBQUFuRCxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUF1RCxLQUFBLEdBQUF2RCxDQUFBLENBQUF3QixHQUFBLHNCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxRQUFBakQsQ0FBQSxLQUFBd0IsQ0FBQSxRQUFBeEIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBeEIsQ0FBQSxDQUFBd0QsaUJBQUEsQ0FBQXhELENBQUEsQ0FBQXdCLEdBQUEsdUJBQUF4QixDQUFBLENBQUFtRCxNQUFBLElBQUFuRCxDQUFBLENBQUF5RCxNQUFBLFdBQUF6RCxDQUFBLENBQUF3QixHQUFBLEdBQUF0QixDQUFBLEdBQUEwQixDQUFBLE1BQUFLLENBQUEsR0FBQVgsUUFBQSxDQUFBM0IsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsb0JBQUFpQyxDQUFBLENBQUFWLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBa0QsSUFBQSxHQUFBckIsQ0FBQSxHQUFBRixDQUFBLEVBQUFNLENBQUEsQ0FBQVQsR0FBQSxLQUFBTSxDQUFBLHFCQUFBMUIsS0FBQSxFQUFBNkIsQ0FBQSxDQUFBVCxHQUFBLEVBQUEwQixJQUFBLEVBQUFsRCxDQUFBLENBQUFrRCxJQUFBLGtCQUFBakIsQ0FBQSxDQUFBVixJQUFBLEtBQUFyQixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUFtRCxNQUFBLFlBQUFuRCxDQUFBLENBQUF3QixHQUFBLEdBQUFTLENBQUEsQ0FBQVQsR0FBQSxtQkFBQTZCLG9CQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLFFBQUFHLENBQUEsR0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxFQUFBakQsQ0FBQSxHQUFBUCxDQUFBLENBQUFhLFFBQUEsQ0FBQVIsQ0FBQSxPQUFBRSxDQUFBLEtBQUFOLENBQUEsU0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxxQkFBQXBELENBQUEsSUFBQUwsQ0FBQSxDQUFBYSxRQUFBLGVBQUFYLENBQUEsQ0FBQXNELE1BQUEsYUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsRUFBQXlELG1CQUFBLENBQUExRCxDQUFBLEVBQUFFLENBQUEsZUFBQUEsQ0FBQSxDQUFBc0QsTUFBQSxrQkFBQW5ELENBQUEsS0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSx1Q0FBQTFELENBQUEsaUJBQUE4QixDQUFBLE1BQUF6QixDQUFBLEdBQUFpQixRQUFBLENBQUFwQixDQUFBLEVBQUFQLENBQUEsQ0FBQWEsUUFBQSxFQUFBWCxDQUFBLENBQUEyQixHQUFBLG1CQUFBbkIsQ0FBQSxDQUFBa0IsSUFBQSxTQUFBMUIsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBbkIsQ0FBQSxDQUFBbUIsR0FBQSxFQUFBM0IsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxNQUFBdkIsQ0FBQSxHQUFBRixDQUFBLENBQUFtQixHQUFBLFNBQUFqQixDQUFBLEdBQUFBLENBQUEsQ0FBQTJDLElBQUEsSUFBQXJELENBQUEsQ0FBQUYsQ0FBQSxDQUFBZ0UsVUFBQSxJQUFBcEQsQ0FBQSxDQUFBSCxLQUFBLEVBQUFQLENBQUEsQ0FBQStELElBQUEsR0FBQWpFLENBQUEsQ0FBQWtFLE9BQUEsZUFBQWhFLENBQUEsQ0FBQXNELE1BQUEsS0FBQXRELENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsR0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxJQUFBdkIsQ0FBQSxJQUFBVixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHNDQUFBN0QsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxjQUFBZ0MsYUFBQWxFLENBQUEsUUFBQUQsQ0FBQSxLQUFBb0UsTUFBQSxFQUFBbkUsQ0FBQSxZQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXFFLFFBQUEsR0FBQXBFLENBQUEsV0FBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRSxVQUFBLEdBQUFyRSxDQUFBLEtBQUFELENBQUEsQ0FBQXVFLFFBQUEsR0FBQXRFLENBQUEsV0FBQXVFLFVBQUEsQ0FBQUMsSUFBQSxDQUFBekUsQ0FBQSxjQUFBMEUsY0FBQXpFLENBQUEsUUFBQUQsQ0FBQSxHQUFBQyxDQUFBLENBQUEwRSxVQUFBLFFBQUEzRSxDQUFBLENBQUE0QixJQUFBLG9CQUFBNUIsQ0FBQSxDQUFBNkIsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBMEUsVUFBQSxHQUFBM0UsQ0FBQSxhQUFBeUIsUUFBQXhCLENBQUEsU0FBQXVFLFVBQUEsTUFBQUosTUFBQSxhQUFBbkUsQ0FBQSxDQUFBNEMsT0FBQSxDQUFBc0IsWUFBQSxjQUFBUyxLQUFBLGlCQUFBbEMsT0FBQTFDLENBQUEsUUFBQUEsQ0FBQSxXQUFBQSxDQUFBLFFBQUFFLENBQUEsR0FBQUYsQ0FBQSxDQUFBWSxDQUFBLE9BQUFWLENBQUEsU0FBQUEsQ0FBQSxDQUFBNEIsSUFBQSxDQUFBOUIsQ0FBQSw0QkFBQUEsQ0FBQSxDQUFBaUUsSUFBQSxTQUFBakUsQ0FBQSxPQUFBNkUsS0FBQSxDQUFBN0UsQ0FBQSxDQUFBOEUsTUFBQSxTQUFBdkUsQ0FBQSxPQUFBRyxDQUFBLFlBQUF1RCxLQUFBLGFBQUExRCxDQUFBLEdBQUFQLENBQUEsQ0FBQThFLE1BQUEsT0FBQXpFLENBQUEsQ0FBQXlCLElBQUEsQ0FBQTlCLENBQUEsRUFBQU8sQ0FBQSxVQUFBMEQsSUFBQSxDQUFBeEQsS0FBQSxHQUFBVCxDQUFBLENBQUFPLENBQUEsR0FBQTBELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFNBQUFBLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsWUFBQXZELENBQUEsQ0FBQXVELElBQUEsR0FBQXZELENBQUEsZ0JBQUFxRCxTQUFBLENBQUFkLE9BQUEsQ0FBQWpELENBQUEsa0NBQUFvQyxpQkFBQSxDQUFBaEMsU0FBQSxHQUFBaUMsMEJBQUEsRUFBQTlCLENBQUEsQ0FBQW9DLENBQUEsbUJBQUFsQyxLQUFBLEVBQUE0QiwwQkFBQSxFQUFBakIsWUFBQSxTQUFBYixDQUFBLENBQUE4QiwwQkFBQSxtQkFBQTVCLEtBQUEsRUFBQTJCLGlCQUFBLEVBQUFoQixZQUFBLFNBQUFnQixpQkFBQSxDQUFBMkMsV0FBQSxHQUFBN0QsTUFBQSxDQUFBbUIsMEJBQUEsRUFBQXJCLENBQUEsd0JBQUFoQixDQUFBLENBQUFnRixtQkFBQSxhQUFBL0UsQ0FBQSxRQUFBRCxDQUFBLHdCQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQWdGLFdBQUEsV0FBQWpGLENBQUEsS0FBQUEsQ0FBQSxLQUFBb0MsaUJBQUEsNkJBQUFwQyxDQUFBLENBQUErRSxXQUFBLElBQUEvRSxDQUFBLENBQUFrRixJQUFBLE9BQUFsRixDQUFBLENBQUFtRixJQUFBLGFBQUFsRixDQUFBLFdBQUFFLE1BQUEsQ0FBQWlGLGNBQUEsR0FBQWpGLE1BQUEsQ0FBQWlGLGNBQUEsQ0FBQW5GLENBQUEsRUFBQW9DLDBCQUFBLEtBQUFwQyxDQUFBLENBQUFvRixTQUFBLEdBQUFoRCwwQkFBQSxFQUFBbkIsTUFBQSxDQUFBakIsQ0FBQSxFQUFBZSxDQUFBLHlCQUFBZixDQUFBLENBQUFHLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBbUIsQ0FBQSxHQUFBMUMsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRixLQUFBLGFBQUFyRixDQUFBLGFBQUFrRCxPQUFBLEVBQUFsRCxDQUFBLE9BQUEyQyxxQkFBQSxDQUFBRyxhQUFBLENBQUEzQyxTQUFBLEdBQUFjLE1BQUEsQ0FBQTZCLGFBQUEsQ0FBQTNDLFNBQUEsRUFBQVUsQ0FBQSxpQ0FBQWQsQ0FBQSxDQUFBK0MsYUFBQSxHQUFBQSxhQUFBLEVBQUEvQyxDQUFBLENBQUF1RixLQUFBLGFBQUF0RixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZUFBQUEsQ0FBQSxLQUFBQSxDQUFBLEdBQUE4RSxPQUFBLE9BQUE1RSxDQUFBLE9BQUFtQyxhQUFBLENBQUF6QixJQUFBLENBQUFyQixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEdBQUFHLENBQUEsVUFBQVYsQ0FBQSxDQUFBZ0YsbUJBQUEsQ0FBQTlFLENBQUEsSUFBQVUsQ0FBQSxHQUFBQSxDQUFBLENBQUFxRCxJQUFBLEdBQUFiLElBQUEsV0FBQW5ELENBQUEsV0FBQUEsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBUSxLQUFBLEdBQUFHLENBQUEsQ0FBQXFELElBQUEsV0FBQXJCLHFCQUFBLENBQUFELENBQUEsR0FBQXpCLE1BQUEsQ0FBQXlCLENBQUEsRUFBQTNCLENBQUEsZ0JBQUFFLE1BQUEsQ0FBQXlCLENBQUEsRUFBQS9CLENBQUEsaUNBQUFNLE1BQUEsQ0FBQXlCLENBQUEsNkRBQUEzQyxDQUFBLENBQUF5RixJQUFBLGFBQUF4RixDQUFBLFFBQUFELENBQUEsR0FBQUcsTUFBQSxDQUFBRixDQUFBLEdBQUFDLENBQUEsZ0JBQUFHLENBQUEsSUFBQUwsQ0FBQSxFQUFBRSxDQUFBLENBQUF1RSxJQUFBLENBQUFwRSxDQUFBLFVBQUFILENBQUEsQ0FBQXdGLE9BQUEsYUFBQXpCLEtBQUEsV0FBQS9ELENBQUEsQ0FBQTRFLE1BQUEsU0FBQTdFLENBQUEsR0FBQUMsQ0FBQSxDQUFBeUYsR0FBQSxRQUFBMUYsQ0FBQSxJQUFBRCxDQUFBLFNBQUFpRSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFdBQUFBLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFFBQUFqRSxDQUFBLENBQUEwQyxNQUFBLEdBQUFBLE1BQUEsRUFBQWpCLE9BQUEsQ0FBQXJCLFNBQUEsS0FBQTZFLFdBQUEsRUFBQXhELE9BQUEsRUFBQW1ELEtBQUEsV0FBQUEsTUFBQTVFLENBQUEsYUFBQTRGLElBQUEsV0FBQTNCLElBQUEsV0FBQU4sSUFBQSxRQUFBQyxLQUFBLEdBQUEzRCxDQUFBLE9BQUFzRCxJQUFBLFlBQUFFLFFBQUEsY0FBQUQsTUFBQSxnQkFBQTNCLEdBQUEsR0FBQTVCLENBQUEsT0FBQXVFLFVBQUEsQ0FBQTNCLE9BQUEsQ0FBQTZCLGFBQUEsSUFBQTFFLENBQUEsV0FBQUUsQ0FBQSxrQkFBQUEsQ0FBQSxDQUFBMkYsTUFBQSxPQUFBeEYsQ0FBQSxDQUFBeUIsSUFBQSxPQUFBNUIsQ0FBQSxNQUFBMkUsS0FBQSxFQUFBM0UsQ0FBQSxDQUFBNEYsS0FBQSxjQUFBNUYsQ0FBQSxJQUFBRCxDQUFBLE1BQUE4RixJQUFBLFdBQUFBLEtBQUEsU0FBQXhDLElBQUEsV0FBQXRELENBQUEsUUFBQXVFLFVBQUEsSUFBQUcsVUFBQSxrQkFBQTFFLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEsY0FBQW1FLElBQUEsS0FBQW5DLGlCQUFBLFdBQUFBLGtCQUFBN0QsQ0FBQSxhQUFBdUQsSUFBQSxRQUFBdkQsQ0FBQSxNQUFBRSxDQUFBLGtCQUFBK0YsT0FBQTVGLENBQUEsRUFBQUUsQ0FBQSxXQUFBSyxDQUFBLENBQUFnQixJQUFBLFlBQUFoQixDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFFLENBQUEsQ0FBQStELElBQUEsR0FBQTVELENBQUEsRUFBQUUsQ0FBQSxLQUFBTCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEtBQUFNLENBQUEsYUFBQUEsQ0FBQSxRQUFBaUUsVUFBQSxDQUFBTSxNQUFBLE1BQUF2RSxDQUFBLFNBQUFBLENBQUEsUUFBQUcsQ0FBQSxRQUFBOEQsVUFBQSxDQUFBakUsQ0FBQSxHQUFBSyxDQUFBLEdBQUFGLENBQUEsQ0FBQWlFLFVBQUEsaUJBQUFqRSxDQUFBLENBQUEwRCxNQUFBLFNBQUE2QixNQUFBLGFBQUF2RixDQUFBLENBQUEwRCxNQUFBLFNBQUF3QixJQUFBLFFBQUE5RSxDQUFBLEdBQUFULENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEsZUFBQU0sQ0FBQSxHQUFBWCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLHFCQUFBSSxDQUFBLElBQUFFLENBQUEsYUFBQTRFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEsZ0JBQUF1QixJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLGNBQUF4RCxDQUFBLGFBQUE4RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLHFCQUFBckQsQ0FBQSxRQUFBc0MsS0FBQSxxREFBQXNDLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsWUFBQVIsTUFBQSxXQUFBQSxPQUFBN0QsQ0FBQSxFQUFBRCxDQUFBLGFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBNUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFLLENBQUEsUUFBQWlFLFVBQUEsQ0FBQXRFLENBQUEsT0FBQUssQ0FBQSxDQUFBNkQsTUFBQSxTQUFBd0IsSUFBQSxJQUFBdkYsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBdkIsQ0FBQSx3QkFBQXFGLElBQUEsR0FBQXJGLENBQUEsQ0FBQStELFVBQUEsUUFBQTVELENBQUEsR0FBQUgsQ0FBQSxhQUFBRyxDQUFBLGlCQUFBVCxDQUFBLG1CQUFBQSxDQUFBLEtBQUFTLENBQUEsQ0FBQTBELE1BQUEsSUFBQXBFLENBQUEsSUFBQUEsQ0FBQSxJQUFBVSxDQUFBLENBQUE0RCxVQUFBLEtBQUE1RCxDQUFBLGNBQUFFLENBQUEsR0FBQUYsQ0FBQSxHQUFBQSxDQUFBLENBQUFpRSxVQUFBLGNBQUEvRCxDQUFBLENBQUFnQixJQUFBLEdBQUEzQixDQUFBLEVBQUFXLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQVUsQ0FBQSxTQUFBOEMsTUFBQSxnQkFBQVMsSUFBQSxHQUFBdkQsQ0FBQSxDQUFBNEQsVUFBQSxFQUFBbkMsQ0FBQSxTQUFBK0QsUUFBQSxDQUFBdEYsQ0FBQSxNQUFBc0YsUUFBQSxXQUFBQSxTQUFBakcsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBQyxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLHFCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxtQkFBQTNCLENBQUEsQ0FBQTJCLElBQUEsUUFBQXFDLElBQUEsR0FBQWhFLENBQUEsQ0FBQTRCLEdBQUEsZ0JBQUE1QixDQUFBLENBQUEyQixJQUFBLFNBQUFvRSxJQUFBLFFBQUFuRSxHQUFBLEdBQUE1QixDQUFBLENBQUE0QixHQUFBLE9BQUEyQixNQUFBLGtCQUFBUyxJQUFBLHlCQUFBaEUsQ0FBQSxDQUFBMkIsSUFBQSxJQUFBNUIsQ0FBQSxVQUFBaUUsSUFBQSxHQUFBakUsQ0FBQSxHQUFBbUMsQ0FBQSxLQUFBZ0UsTUFBQSxXQUFBQSxPQUFBbEcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQW9FLFVBQUEsS0FBQXJFLENBQUEsY0FBQWlHLFFBQUEsQ0FBQWhHLENBQUEsQ0FBQXlFLFVBQUEsRUFBQXpFLENBQUEsQ0FBQXFFLFFBQUEsR0FBQUcsYUFBQSxDQUFBeEUsQ0FBQSxHQUFBaUMsQ0FBQSx5QkFBQWlFLE9BQUFuRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBa0UsTUFBQSxLQUFBbkUsQ0FBQSxRQUFBSSxDQUFBLEdBQUFILENBQUEsQ0FBQXlFLFVBQUEsa0JBQUF0RSxDQUFBLENBQUF1QixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQXdCLEdBQUEsRUFBQTZDLGFBQUEsQ0FBQXhFLENBQUEsWUFBQUssQ0FBQSxZQUFBK0MsS0FBQSw4QkFBQStDLGFBQUEsV0FBQUEsY0FBQXJHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGdCQUFBb0QsUUFBQSxLQUFBNUMsUUFBQSxFQUFBNkIsTUFBQSxDQUFBMUMsQ0FBQSxHQUFBZ0UsVUFBQSxFQUFBOUQsQ0FBQSxFQUFBZ0UsT0FBQSxFQUFBN0QsQ0FBQSxvQkFBQW1ELE1BQUEsVUFBQTNCLEdBQUEsR0FBQTVCLENBQUEsR0FBQWtDLENBQUEsT0FBQW5DLENBQUE7QUFBQSxTQUFBc0csbUJBQUFqRyxDQUFBLEVBQUFKLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFLLENBQUEsRUFBQUssQ0FBQSxFQUFBRSxDQUFBLGNBQUFKLENBQUEsR0FBQUwsQ0FBQSxDQUFBTyxDQUFBLEVBQUFFLENBQUEsR0FBQUUsQ0FBQSxHQUFBTixDQUFBLENBQUFELEtBQUEsV0FBQUosQ0FBQSxnQkFBQUwsQ0FBQSxDQUFBSyxDQUFBLEtBQUFLLENBQUEsQ0FBQTZDLElBQUEsR0FBQXRELENBQUEsQ0FBQWUsQ0FBQSxJQUFBd0UsT0FBQSxDQUFBdEMsT0FBQSxDQUFBbEMsQ0FBQSxFQUFBb0MsSUFBQSxDQUFBbEQsQ0FBQSxFQUFBSyxDQUFBO0FBQUEsU0FBQWdHLGtCQUFBbEcsQ0FBQSw2QkFBQUosQ0FBQSxTQUFBRCxDQUFBLEdBQUF3RyxTQUFBLGFBQUFoQixPQUFBLFdBQUF0RixDQUFBLEVBQUFLLENBQUEsUUFBQUssQ0FBQSxHQUFBUCxDQUFBLENBQUFvRyxLQUFBLENBQUF4RyxDQUFBLEVBQUFELENBQUEsWUFBQTBHLE1BQUFyRyxDQUFBLElBQUFpRyxrQkFBQSxDQUFBMUYsQ0FBQSxFQUFBVixDQUFBLEVBQUFLLENBQUEsRUFBQW1HLEtBQUEsRUFBQUMsTUFBQSxVQUFBdEcsQ0FBQSxjQUFBc0csT0FBQXRHLENBQUEsSUFBQWlHLGtCQUFBLENBQUExRixDQUFBLEVBQUFWLENBQUEsRUFBQUssQ0FBQSxFQUFBbUcsS0FBQSxFQUFBQyxNQUFBLFdBQUF0RyxDQUFBLEtBQUFxRyxLQUFBO0FBRDJCO0FBQ3lCO0FBRzdDLFNBQWVnUCxnQkFBZ0JBLENBQUExTixFQUFBO0VBQUEsT0FBQTJOLGlCQUFBLENBQUFsUCxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQWNyQyxTQUFBbVAsa0JBQUE7RUFBQUEsaUJBQUEsR0FBQXBQLGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQWRNLFNBQUEyQixRQUFnQzhPLFNBQVM7SUFBQSxJQUFBQyxLQUFBLEVBQUF2TCxZQUFBLEVBQUF3TCxJQUFBLEVBQUFyTSxPQUFBO0lBQUEsT0FBQTFKLG1CQUFBLEdBQUF1QixJQUFBLFVBQUE0RixTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQXZCLElBQUEsR0FBQXVCLFFBQUEsQ0FBQWxELElBQUE7UUFBQTtVQUN0QzRSLEtBQUssR0FBR0QsU0FBUyxDQUFDeEgsSUFBSSxDQUFDLENBQUMsQ0FBQzJILFdBQVcsQ0FBQyxDQUFDO1VBQUE1TyxRQUFBLENBQUFsRCxJQUFBO1VBQUEsT0FDakJvUSxnRUFBa0IsQ0FBQyxDQUFDO1FBQUE7VUFBekMvSixZQUFZLEdBQUFuRCxRQUFBLENBQUF4RCxJQUFBO1VBQ1ptUyxJQUFJLEdBQUcsSUFBSUwsK0NBQUksQ0FBQ25MLFlBQVksRUFBRTtZQUNoQzdFLElBQUksRUFBRSxDQUNGLE9BQU8sRUFDUCxTQUFTLEVBQ1Q7Y0FBRVAsSUFBSSxFQUFFLE1BQU07Y0FBRThRLE1BQU0sRUFBRTtZQUFJLENBQUMsQ0FDaEM7WUFDREMsU0FBUyxFQUFFO1VBQ2YsQ0FBQyxDQUFDO1VBRUl4TSxPQUFPLEdBQUdxTSxJQUFJLENBQUMxTSxNQUFNLENBQUN5TSxLQUFLLENBQUM7VUFBQSxPQUFBMU8sUUFBQSxDQUFBckQsTUFBQSxXQUMzQjJGLE9BQU87UUFBQTtRQUFBO1VBQUEsT0FBQXRDLFFBQUEsQ0FBQXBCLElBQUE7TUFBQTtJQUFBLEdBQUFlLE9BQUE7RUFBQSxDQUNqQjtFQUFBLE9BQUE2TyxpQkFBQSxDQUFBbFAsS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFFTSxTQUFTbUMsdUJBQXVCQSxDQUFDMkIsWUFBWSxFQUFFRixlQUFlLEVBQUVDLGNBQWMsRUFBRTtFQUNuRjtFQUNBLElBQUk2TCxhQUFhLEdBQUc1TCxZQUFZOztFQUVoQztFQUNBLElBQUlGLGVBQWUsSUFBSUEsZUFBZSxDQUFDdEYsTUFBTSxHQUFHLENBQUMsRUFBRTtJQUMvQyxJQUFNcVIsd0JBQXdCLEdBQUcvTCxlQUFlLENBQUNVLEdBQUcsQ0FBQyxVQUFBc0wsTUFBTTtNQUFBLE9BQUlBLE1BQU0sQ0FBQ0wsV0FBVyxDQUFDLENBQUM7SUFBQSxFQUFDO0lBRXBGRyxhQUFhLEdBQUdBLGFBQWEsQ0FBQ0UsTUFBTSxDQUFDLFVBQUFyTCxJQUFJLEVBQUk7TUFDekMsSUFBTUcsS0FBSyxHQUFHSCxJQUFJLENBQUNHLEtBQUssR0FBR0gsSUFBSSxDQUFDRyxLQUFLLENBQUM2SyxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUU7TUFDeEQsSUFBTU0sT0FBTyxHQUFHdEwsSUFBSSxDQUFDc0wsT0FBTyxHQUFHdEwsSUFBSSxDQUFDc0wsT0FBTyxDQUFDTixXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUU7TUFDOUQsSUFBTU8sSUFBSSxHQUFHdkwsSUFBSSxDQUFDdUwsSUFBSSxHQUFHdkwsSUFBSSxDQUFDdUwsSUFBSSxDQUFDeEwsR0FBRyxDQUFDLFVBQUF5TCxHQUFHO1FBQUEsT0FBSUEsR0FBRyxDQUFDUixXQUFXLENBQUMsQ0FBQztNQUFBLEVBQUMsR0FBRyxFQUFFO01BQ3JFLElBQU05SyxHQUFHLEdBQUdGLElBQUksQ0FBQ0UsR0FBRyxHQUFHRixJQUFJLENBQUNFLEdBQUcsQ0FBQzhLLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtNQUVsRCxPQUFPSSx3QkFBd0IsQ0FBQzFJLElBQUksQ0FBQyxVQUFBMkksTUFBTTtRQUFBLE9BQ3ZDbEwsS0FBSyxDQUFDc0wsUUFBUSxDQUFDSixNQUFNLENBQUMsSUFDdEJDLE9BQU8sQ0FBQ0csUUFBUSxDQUFDSixNQUFNLENBQUMsSUFDeEJFLElBQUksQ0FBQ0UsUUFBUSxDQUFDSixNQUFNLENBQUMsSUFDckJuTCxHQUFHLENBQUN1TCxRQUFRLENBQUNKLE1BQU0sQ0FBQztNQUFBLENBQ3hCLENBQUM7SUFDTCxDQUFDLENBQUM7RUFDTjs7RUFFQTtFQUNBLElBQUkvTCxjQUFjLElBQUlBLGNBQWMsQ0FBQ3ZGLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDN0MsSUFBTTJSLHVCQUF1QixHQUFHcE0sY0FBYyxDQUFDUyxHQUFHLENBQUMsVUFBQXNMLE1BQU07TUFBQSxPQUFJQSxNQUFNLENBQUNMLFdBQVcsQ0FBQyxDQUFDO0lBQUEsRUFBQztJQUVsRkcsYUFBYSxHQUFHQSxhQUFhLENBQUNFLE1BQU0sQ0FBQyxVQUFBckwsSUFBSSxFQUFJO01BQ3pDLElBQU1HLEtBQUssR0FBR0gsSUFBSSxDQUFDRyxLQUFLLEdBQUdILElBQUksQ0FBQ0csS0FBSyxDQUFDNkssV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFO01BQ3hELElBQU1NLE9BQU8sR0FBR3RMLElBQUksQ0FBQ3NMLE9BQU8sR0FBR3RMLElBQUksQ0FBQ3NMLE9BQU8sQ0FBQ04sV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFO01BQzlELElBQU1PLElBQUksR0FBR3ZMLElBQUksQ0FBQ3VMLElBQUksR0FBR3ZMLElBQUksQ0FBQ3VMLElBQUksQ0FBQ3hMLEdBQUcsQ0FBQyxVQUFBeUwsR0FBRztRQUFBLE9BQUlBLEdBQUcsQ0FBQ1IsV0FBVyxDQUFDLENBQUM7TUFBQSxFQUFDLEdBQUcsRUFBRTtNQUNyRSxJQUFNOUssR0FBRyxHQUFHRixJQUFJLENBQUNFLEdBQUcsR0FBR0YsSUFBSSxDQUFDRSxHQUFHLENBQUM4SyxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUU7TUFFbEQsT0FBTyxDQUFDVSx1QkFBdUIsQ0FBQ2hKLElBQUksQ0FBQyxVQUFBMkksTUFBTTtRQUFBLE9BQ3ZDbEwsS0FBSyxDQUFDc0wsUUFBUSxDQUFDSixNQUFNLENBQUMsSUFDdEJDLE9BQU8sQ0FBQ0csUUFBUSxDQUFDSixNQUFNLENBQUMsSUFDeEJFLElBQUksQ0FBQ0UsUUFBUSxDQUFDSixNQUFNLENBQUMsSUFDckJuTCxHQUFHLENBQUN1TCxRQUFRLENBQUNKLE1BQU0sQ0FBQztNQUFBLENBQ3hCLENBQUM7SUFDTCxDQUFDLENBQUM7RUFDTjtFQUVBLE9BQU9GLGFBQWE7QUFDeEI7Ozs7Ozs7Ozs7O0FDL0RBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSwyQkFBMkIsSUFBSTs7QUFFL0I7QUFDQSxtQ0FBbUMsSUFBSTs7QUFFdkMsa0RBQWtELE1BQU07O0FBRXhEO0FBQ0EsK0JBQStCLElBQUk7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsNENBQTRDLFNBQVM7QUFDckQ7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QiwyQkFBMkI7O0FBRXBEO0FBQ0Esa0JBQWtCLHdCQUF3Qjs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2IsWUFBWTtBQUNaO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWlFO0FBQ3JFO0FBQ0Esa0NBQWtDLHdCQUF3QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlFQUFpRTtBQUNyRTtBQUNBLFVBQVUsZ0JBQWdCO0FBQzFCLGtDQUFrQyx3QkFBd0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHlCQUF5QixZQUFZO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksa0NBQWtDOztBQUU5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsK0JBQStCO0FBQzFELGNBQWMsMEJBQTBCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFF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Q0FBQywwQkFBMEIsQ0FBQztVQUMzRGdOLGdCQUFnQixHQUFHSCxLQUFLLENBQUM3ZCxLQUFLLENBQUMyTixJQUFJLENBQUMsQ0FBQztVQUFBLE1BQ3ZDcVEsZ0JBQWdCLElBQUksQ0FBQ3BVLGNBQWMsQ0FBQ21NLFFBQVEsQ0FBQ2lJLGdCQUFnQixDQUFDO1lBQUFoSyxTQUFBLENBQUF4USxJQUFBO1lBQUE7VUFBQTtVQUM5RDtVQUNBbVksa0JBQWtCLENBQUNxQyxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLENBQUM7O1VBRTlEO1VBQUFoSyxTQUFBLENBQUF4USxJQUFBO1VBQUEsT0FDbUMyWSx1QkFBdUIsQ0FBQyxDQUFDO1FBQUE7VUFBdERILG9CQUFvQixHQUFBaEksU0FBQSxDQUFBOVEsSUFBQTtVQUMxQjhZLG9CQUFvQixDQUFDaFksSUFBSSxDQUFDZ2EsZ0JBQWdCLENBQUM7VUFDM0N2Qix3QkFBd0IsQ0FBQ1Qsb0JBQW9CLENBQUM7VUFFOUM2QixLQUFLLENBQUM3ZCxLQUFLLEdBQUcsRUFBRTtRQUFDO1FBQUE7VUFBQSxPQUFBZ1UsU0FBQSxDQUFBMU8sSUFBQTtNQUFBO0lBQUEsR0FBQXdPLFFBQUE7RUFBQSxDQUV4QjtFQUFBLGlCQUFBdkssR0FBQTtJQUFBLE9BQUF3VSxLQUFBLENBQUEvWCxLQUFBLE9BQUFELFNBQUE7RUFBQTtBQUFBLElBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL2FpL3N1bW1hcml6ZXIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvdXNlcl9kYXNoYm9hcmQvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci8uL3NyYy91c2VyX2Rhc2hib2FyZC91dGlscy5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci8uL3NyYy91c2VyX2Rhc2hib2FyZC93aWRnZXRzLmpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3V0aWxzL2RiLmpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3V0aWxzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci8uL3NyYy91c2VyX2Rhc2hib2FyZC9zdHlsZXMuY3NzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vbm9kZV9tb2R1bGVzL2Z1c2UuanMvZGlzdC9mdXNlLm1qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3VzZXJfZGFzaGJvYXJkL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXRTdW1tYXJpemVyKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHNoYXJlZENvbnRleHQ6ICdUaGlzIGlzIGEgbGlzdCBvZiB0aXRsZXMgdmlzaXRlZCBieSB0aGUgdXNlcicsXG4gICAgICAgIHR5cGU6ICdrZXktcG9pbnRzJyxcbiAgICAgICAgZm9ybWF0OiAnbWFya2Rvd24nLFxuICAgICAgICBsZW5ndGg6ICdtZWRpdW0nLFxuICAgICAgfTtcbiAgICAgIFxuICAgICAgY29uc3QgYXZhaWxhYmxlID0gKGF3YWl0IHNlbGYuYWkuc3VtbWFyaXplci5jYXBhYmlsaXRpZXMoKSkuYXZhaWxhYmxlO1xuICAgICAgbGV0IHN1bW1hcml6ZXI7XG4gICAgICBpZiAoYXZhaWxhYmxlID09PSAnbm8nKSB7XG4gICAgICAgIC8vIFRoZSBTdW1tYXJpemVyIEFQSSBpc24ndCB1c2FibGUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3VtbWFyaXplciBBUEkgaXMgbm90IGF2YWlsYWJsZScpO1xuICAgICAgfVxuICAgICAgaWYgKGF2YWlsYWJsZSA9PT0gJ3JlYWRpbHknKSB7XG4gICAgICAgIC8vIFRoZSBTdW1tYXJpemVyIEFQSSBjYW4gYmUgdXNlZCBpbW1lZGlhdGVseSAuXG4gICAgICAgIHN1bW1hcml6ZXIgPSBhd2FpdCBzZWxmLmFpLnN1bW1hcml6ZXIuY3JlYXRlKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gc3VtbWFyaXplcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRoZSBTdW1tYXJpemVyIEFQSSBjYW4gYmUgdXNlZCBhZnRlciB0aGUgbW9kZWwgaXMgZG93bmxvYWRlZC5cbiAgICAgICAgc3VtbWFyaXplciA9IGF3YWl0IHNlbGYuYWkuc3VtbWFyaXplci5jcmVhdGUob3B0aW9ucyk7XG4gICAgICAgIHN1bW1hcml6ZXIuYWRkRXZlbnRMaXN0ZW5lcignZG93bmxvYWRwcm9ncmVzcycsIChlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZS5sb2FkZWQsIGUudG90YWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgc3VtbWFyaXplci5yZWFkeTtcbiAgICAgICAgcmV0dXJuIHN1bW1hcml6ZXI7XG4gICAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN1bW1hcml6ZSh0ZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3VtbWFyaXplciA9IGF3YWl0IGdldFN1bW1hcml6ZXIoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VtbWFyaXplci5zdW1tYXJpemUodGV4dCwge1xuICAgICAgICAgICAgY29udGV4dDogJ0dpdmUgaW50ZXJlc3RpbmcgaW5zaWdodHMgYWJvdXQgdXNlciBiZWhhdmlvdXJzIGZyb20gdGhlIHRpdGxlcy4gR2l2ZSBpbXBvcnRhbnQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHVzZXJcXCdzIGludGVyZXN0cyBhbmQgaGFiaXRzLicsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBzdW1tYXJpemVyLmRlc3Ryb3koKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZHVyaW5nIHN1bW1hcml6YXRpb246JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuXG5leHBvcnQgeyBzdW1tYXJpemUgfTsiLCJpbXBvcnQgeyBnZXRIaXN0b3J5SW5UaW1lUmFuZ2UgfSBmcm9tICcuLi91dGlscy9kYi5qcyc7XG5pbXBvcnQgeyBnZXRGaWx0ZXJlZEhpc3RvcnlJdGVtcyB9IGZyb20gJy4uL3V0aWxzL3NlYXJjaC5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEhpc3Rvcnkoc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLmhpc3Rvcnkuc2VhcmNoKHt0ZXh0OiAnJywgc3RhcnRUaW1lOiBzdGFydERhdGUuZ2V0VGltZSgpLCBlbmRUaW1lOiBlbmREYXRlLmdldFRpbWUoKSwgbWF4UmVzdWx0czogNDAgfSwgKHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIHJlamVjdChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gc3RhcnREYXRlIFxuICogQHBhcmFtIHsqfSBlbmREYXRlIFxuICogQHBhcmFtIHsqfSBOIFxuICogQHJldHVybnMgXG4gKiBcbiAqIFxuICogKDUpIFt74oCmfSwge+KApn0sIHvigKZ9LCB74oCmfSwge+KApn1dXG4wXG46IFxue2hvc3RuYW1lOiAnd3d3LmN1cnNvci5jb20nLCB0aXRsZXM6IEFycmF5KDYpLCBjb3VudDogMjR9XG4xXG46IFxue2hvc3RuYW1lOiAnd3d3LnlvdXR1YmUuY29tJywgdGl0bGVzOiBBcnJheSgxMiksIGNvdW50OiAyMX1cbjJcbjogXG57aG9zdG5hbWU6ICdtYWlsLmdvb2dsZS5jb20nLCB0aXRsZXM6IEFycmF5KDEyKSwgY291bnQ6IDE4fVxuM1xuOiBcbntob3N0bmFtZTogJ2RldmVsb3Blci5jaHJvbWUuY29tJywgdGl0bGVzOiBBcnJheSgyKSwgY291bnQ6IDE2fVxuNFxuOiBcbntob3N0bmFtZTogJ2dpdGh1Yi5jb20nLCB0aXRsZXM6IEFycmF5KDcpLCBjb3VudDogMTJ9XG5cbmV4YW1wbGUgdGl0bGVzOlxuXG4wXG46IFxue3RpdGxlOiAnaW4gY3Vyc3VyIGR1cmluZyBpbmRleGluZywgaXMgdGhlIHJlc3VsdHMgc3RvcmVkIGxjb2FsbHkgLSBHb29nbGUgU2VhcmNoJywgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1pbitjdXJzdXIrZHVyaW5nK2nigKZTQVFreE1qVXpNR293YWplb0FnQ3dBZ0Emc291cmNlaWQ9Y2hyb21lJmllPVVURi04J31cbjFcbjogXG57dGl0bGU6ICdzbGFjayBpbnRlZ3JhdGlvbiB0byBub3Rpb24gLSBHb29nbGUgU2VhcmNoJywgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1zbGFjaytpbnRlZ3JhdGlvbivigKZUU0FRZzJNekF5YWpCcU42Z0NBTEFDQUEmc291cmNlaWQ9Y2hyb21lJmllPVVURi04J31cbjJcbjogXG57dGl0bGU6ICdpIHdhbnQgdG8gY29udmVydCBhIHNsYWNrIGNoYW5uZWwgdG8gbm90aW9uIGRvY3VtZW50IC0gR29vZ2xlIFNlYXJjaCcsIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9aSt3YW50K3RvK2NvbnZlcnQr4oCmdWdZR0NBRVFBUmdUa2djRU9TNHpONkFIZ2NjQyZzY2xpZW50PWd3cy13aXotc2VycCd9XG4zXG46IFxue3RpdGxlOiAnY29udmVydCBwaWwgaW1hZ2UgdG8gZGljb20gZmlsZSAtIEdvb2dsZSBTZWFyY2gnLCB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPWNvbnZlcnQrcGlsK2ltYWdlK+KApkFkSUJDRGcwTnpscU1HbzNxQUlBc0FJQSZzb3VyY2VpZD1jaHJvbWUmaWU9VVRGLTgnfVxuNFxuOiBcbnt0aXRsZTogJ3N1cGVyIHJlc29sdXRpb24gbW9kZWxzIC0gR29vZ2xlIFNlYXJjaCcsIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9c3VwZXIrcmVzb2x1dGlvbitt4oCmZTBnRUlOakl5TUdvd2FqZW9BZ0N3QWdBJnNvdXJjZWlkPWNocm9tZSZpZT1VVEYtOCd9XG41XG46IFxue3RpdGxlOiAnc3VwZXIgcmVzb2x1dGlvbiBtb2RlbCBvbmxpbmUgZnJlZSAtIEdvb2dsZSBTZWFyY2gnLCB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPXN1cGVyK3Jlc29sdXRpb24rbeKApkZtQU1BaUFZQmtBWUlrZ2NFTWk0eE02QUhrbGsmc2NsaWVudD1nd3Mtd2l6LXNlcnAnfVxuICovXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIaXN0b3J5V2l0aFRvcE5TdGF0cyhzdGFydERhdGUsIGVuZERhdGUsIE4sIHNlbGVjdGVkRmlsdGVycywgZXhjbHVkZUZpbHRlcnMpIHtcbiAgICBjb25zdCBoaXN0b3J5SXRlbXMgPSBhd2FpdCBnZXRIaXN0b3J5SW5UaW1lUmFuZ2Uoc3RhcnREYXRlLmdldFRpbWUoKSwgZW5kRGF0ZS5nZXRUaW1lKCkpO1xuICAgIGNvbnN0IGZpbHRlcmVkSGlzdG9yeUl0ZW1zID0gZ2V0RmlsdGVyZWRIaXN0b3J5SXRlbXMoaGlzdG9yeUl0ZW1zLCBzZWxlY3RlZEZpbHRlcnMsIGV4Y2x1ZGVGaWx0ZXJzKTtcbiAgICBjb25zdCBwYXJzZWRIaXN0b3J5SXRlbXMgPSBmaWx0ZXJlZEhpc3RvcnlJdGVtcy5tYXAoaXRlbSA9PiBwYXJzZV91cmxfcGFydChpdGVtLnVybCwgaXRlbS50aXRsZSkpO1xuICAgIGNvbnN0IGhvc3RuYW1lTWFwID0gY291bnRfYnlfaG9zdG5hbWUocGFyc2VkSGlzdG9yeUl0ZW1zKTtcbiAgICBjb25zdCBob3N0bmFtZVRpdGxlTWFwID0gY3JlYXRlSG9zdE5hbWVUaXRsZU1hcChwYXJzZWRIaXN0b3J5SXRlbXMpO1xuICAgIGNvbnN0IHNvcnRlZEhvc3RuYW1lcyA9IEFycmF5LmZyb20oaG9zdG5hbWVNYXAuZW50cmllcygpKS5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSk7XG4gICAgY29uc3QgdG9wTkhvc3RuYW1lcyA9IHNvcnRlZEhvc3RuYW1lcy5zbGljZSgwLCBOKTtcbiAgICBjb25zdCB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcyA9IHRvcE5Ib3N0bmFtZXMubWFwKGl0ZW0gPT4gKHsgaG9zdG5hbWU6IGl0ZW1bMF0sIHRpdGxlczogaG9zdG5hbWVUaXRsZU1hcC5nZXQoaXRlbVswXSksIGNvdW50OiBpdGVtWzFdIH0pKTtcblxuICAgIHJldHVybiB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcztcbn1cblxuXG5mdW5jdGlvbiBwYXJzZV91cmxfcGFydCh1cmwsIHRpdGxlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTCh1cmwpO1xuXG4gICAgICAgIC8vIEV4dHJhY3QgcHJvdG9jb2wgd2l0aG91dCB0aGUgdHJhaWxpbmcgY29sb24gKGUuZy4sICdodHRwcycpXG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gcGFyc2VkVXJsLnByb3RvY29sLnJlcGxhY2UoJzonLCAnJyk7XG5cbiAgICAgICAgLy8gU3BsaXQgaG9zdG5hbWUgaW50byBwYXJ0cyB0byBpZGVudGlmeSBzdWJkb21haW4sIGRvbWFpbiwgYW5kIFRMRFxuICAgICAgICBjb25zdCBob3N0bmFtZVBhcnRzID0gcGFyc2VkVXJsLmhvc3RuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIGxldCBzdWJkb21haW4gPSAnJztcbiAgICAgICAgbGV0IGRvbWFpbiA9ICcnO1xuICAgICAgICBsZXQgdGxkID0gJyc7XG5cbiAgICAgICAgaWYgKGhvc3RuYW1lUGFydHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgc3ViZG9tYWluID0gaG9zdG5hbWVQYXJ0cy5zbGljZSgwLCBob3N0bmFtZVBhcnRzLmxlbmd0aCAtIDIpLmpvaW4oJy4nKTtcbiAgICAgICAgICAgIGRvbWFpbiA9IGhvc3RuYW1lUGFydHNbaG9zdG5hbWVQYXJ0cy5sZW5ndGggLSAyXTtcbiAgICAgICAgICAgIHRsZCA9IGhvc3RuYW1lUGFydHNbaG9zdG5hbWVQYXJ0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSBlbHNlIGlmIChob3N0bmFtZVBhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgZG9tYWluID0gaG9zdG5hbWVQYXJ0c1swXTtcbiAgICAgICAgICAgIHRsZCA9IGhvc3RuYW1lUGFydHNbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb21haW4gPSBwYXJzZWRVcmwuaG9zdG5hbWU7XG4gICAgICAgICAgICB0bGQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV4dHJhY3QgcGF0aCAoZW5kcG9pbnQpXG4gICAgICAgIGNvbnN0IHBhdGggPSBwYXJzZWRVcmwucGF0aG5hbWU7XG5cbiAgICAgICAgLy8gRXh0cmFjdCBxdWVyeSBwYXJhbWV0ZXJzIGFzIGtleS12YWx1ZSBwYWlyc1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICBwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBrZXkgYWxyZWFkeSBleGlzdHMsIGNvbnZlcnQgaXQgaW50byBhbiBhcnJheVxuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zW2tleV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVBhcmFtc1trZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc1trZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW2tleV0gPSBbcXVlcnlQYXJhbXNba2V5XSwgdmFsdWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBFeHRyYWN0IGZyYWdtZW50IHdpdGhvdXQgdGhlIGxlYWRpbmcgaGFzaCAoZS5nLiwgJ3NlY3Rpb24xJylcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBwYXJzZWRVcmwuaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuXG4gICAgICAgIC8vIEV4dHJhY3QgcG9ydCBpZiBzcGVjaWZpZWQsIGVsc2UgZGVmYXVsdCBiYXNlZCBvbiBwcm90b2NvbFxuICAgICAgICBsZXQgcG9ydCA9IHBhcnNlZFVybC5wb3J0O1xuICAgICAgICBpZiAoIXBvcnQpIHtcbiAgICAgICAgICAgIGlmIChwcm90b2NvbCA9PT0gJ2h0dHAnKSB7XG4gICAgICAgICAgICAgICAgcG9ydCA9ICc4MCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3RvY29sID09PSAnaHR0cHMnKSB7XG4gICAgICAgICAgICAgICAgcG9ydCA9ICc0NDMnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3J0ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvdG9jb2wsXG4gICAgICAgICAgICBzdWJkb21haW4sXG4gICAgICAgICAgICBkb21haW4sXG4gICAgICAgICAgICB0bGQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICAgICAgICBmcmFnbWVudCxcbiAgICAgICAgICAgIHBvcnQsXG4gICAgICAgICAgICAvLyBBZGRpdGlvbmFsIFVzZWZ1bCBDb21wb25lbnRzXG4gICAgICAgICAgICBob3N0OiBwYXJzZWRVcmwuaG9zdCwgLy8gaW5jbHVkZXMgaG9zdG5hbWUgYW5kIHBvcnRcbiAgICAgICAgICAgIGhvc3RuYW1lOiBwYXJzZWRVcmwuaG9zdG5hbWUsXG4gICAgICAgICAgICBocmVmOiBwYXJzZWRVcmwuaHJlZixcbiAgICAgICAgICAgIG9yaWdpbjogcGFyc2VkVXJsLm9yaWdpbixcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBVUkw6ICR7dXJsfWAsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb3VudF9ieV9ob3N0bmFtZShwYXJzZWRIaXN0b3J5SXRlbXMpIHtcbiAgICBjb25zdCBob3N0bmFtZU1hcCA9IG5ldyBNYXAoKTtcblxuICAgIHBhcnNlZEhpc3RvcnlJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBob3N0bmFtZSA9IGl0ZW0uaG9zdG5hbWU7XG4gICAgICAgIGlmIChob3N0bmFtZSkge1xuICAgICAgICAgICAgaWYgKGhvc3RuYW1lTWFwLmhhcyhob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICBob3N0bmFtZU1hcC5zZXQoaG9zdG5hbWUsIGhvc3RuYW1lTWFwLmdldChob3N0bmFtZSkgKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaG9zdG5hbWVNYXAuc2V0KGhvc3RuYW1lLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhvc3RuYW1lTWFwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3N0TmFtZVRpdGxlTWFwKHBhcnNlZEhpc3RvcnlJdGVtcykge1xuICAgIGNvbnN0IGhvc3RuYW1lTWFwID0gbmV3IE1hcCgpO1xuICAgIHBhcnNlZEhpc3RvcnlJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBob3N0bmFtZSA9IGl0ZW0uaG9zdG5hbWU7XG4gICAgICAgIHZhciB0aXRsZSA9IGl0ZW0udGl0bGU7XG4gICAgICAgIGNvbnN0IHVybCA9IGl0ZW0uaHJlZjtcblxuICAgICAgICAvLyBpZiB0aXRsZSBpcyBlbXB0eSwgdXNlIGhvc3RuYW1lIGFzIHRpdGxlXG4gICAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgICAgIHRpdGxlID0gaG9zdG5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYWludGFpbiBhIGxpc3Qgb2YgdGl0bGVzIGZvciBlYWNoIGhvc3RuYW1lXG4gICAgICAgIGlmIChob3N0bmFtZU1hcC5oYXMoaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAvLyBpZiB0aXRsZSBpcyBhbHJlYWR5IGluIHRoZSBsaXN0LCBkb24ndCBhZGQgaXQgYWdhaW5cbiAgICAgICAgICAgIGlmICghaG9zdG5hbWVNYXAuZ2V0KGhvc3RuYW1lKS5zb21lKHQgPT4gdC50aXRsZSA9PT0gdGl0bGUpKSB7XG4gICAgICAgICAgICAgICAgaG9zdG5hbWVNYXAuZ2V0KGhvc3RuYW1lKS5wdXNoKHt0aXRsZSwgdXJsfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBob3N0bmFtZU1hcC5zZXQoaG9zdG5hbWUsIFt7dGl0bGUsIHVybH1dKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhvc3RuYW1lTWFwO1xufVxuXG5cblxuLy8gZXhwb3J0IHsgZ2V0SGlzdG9yeSB9OyIsIi8vIHdyaXRlIGEgZnVuY3Rpb24gdG8gZXh0cmFjdCBkb21haW4gbmFtZSBmcm9tIGEgdXJsXG5mdW5jdGlvbiBleHRyYWN0RG9tYWluKHVybCkge1xuICAgIHJldHVybiBuZXcgVVJMKHVybCkuaG9zdG5hbWU7XG4gIH1cbiAgXG4gIFxuICBmdW5jdGlvbiBtYXJrZG93blRvSHRtbChtYXJrZG93blRleHQpIHtcbiAgICAvLyBDb252ZXJ0IGJvbGQgdGV4dDogKip0ZXh0KipcbiAgICBsZXQgaHRtbCA9IG1hcmtkb3duVGV4dC5yZXBsYWNlKC9cXCpcXCooLis/KVxcKlxcKi9nLCAnPHN0cm9uZz4kMTwvc3Ryb25nPicpO1xuICAgIFxuICAgIC8vIENvbnZlcnQgaXRhbGljIHRleHQ6ICp0ZXh0KlxuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcKiguKz8pXFwqL2csICc8ZW0+JDE8L2VtPicpO1xuICAgIFxuICAgIC8vIENvbnZlcnQgYnVsbGV0IHBvaW50czogKiBpdGVtXG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXlxcKiAoLispJC9nbSwgJzxsaT4kMTwvbGk+Jyk7XG4gICAgXG4gICAgLy8gV3JhcCBsaXN0IGl0ZW1zIGluIDx1bD4gdGFnc1xuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoLyg8bGk+Lio8XFwvbGk+KS9nLCAnPHVsPiQxPC91bD4nKTtcbiAgXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuXG4vKipcbiAqIENsZWFucyBhbmQgc2FuaXRpemVzIGlucHV0IHRleHQgZm9yIHNhZmUgcHJvY2Vzc2luZyB3aXRoIGxhbmd1YWdlIG1vZGVscy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRoZSBpbnB1dCB0ZXh0IHRvIGJlIHNhbml0aXplZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhMZW5ndGggLSBNYXhpbXVtIGFsbG93ZWQgbGVuZ3RoIGZvciB0aGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW5pdGl6ZWQgdGV4dC5cbiAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgc2FuaXRpemVkIHRleHQgZXhjZWVkcyB0aGUgbWF4aW11bSBsZW5ndGguXG4gKi9cbmZ1bmN0aW9uIGNsZWFuSW5wdXQodGV4dCwgbWF4TGVuZ3RoID0gNDAwMCkge1xuICAvLyAxLiBSZW1vdmUgQ29udHJvbCBDaGFyYWN0ZXJzXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1tcXHgwMC1cXHgxRlxceDdGXS9nLCAnJyk7XG5cbiAgLy8gMi4gTm9ybWFsaXplIFVuaWNvZGVcbiAgdGV4dCA9IHRleHQubm9ybWFsaXplKCdORkMnKTtcblxuICAvLyAzLiBSZW1vdmUgTWFsZm9ybWVkIFVuaWNvZGVcbiAgdHJ5IHtcbiAgICAgIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUodGV4dCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC/vv70vZywgJycpO1xuICB9XG5cbiAgLy8gNC4gRXNjYXBlIFNwZWNpYWwgU3ltYm9sc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9bXFxcXGB7fVxcW1xcXSgpPD47fCZdL2csICdcXFxcJCYnKTtcblxuICAvLyA1LiBMaW1pdCBSZXBldGl0aXZlIENoYXJhY3RlcnMgdG8gM1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oLilcXDF7Myx9L2csICckMSQxJDEnKTtcblxuICAvLyA2LiBXaGl0ZWxpc3QgQWxsb3dlZCBDaGFyYWN0ZXJzIChBbHBoYW51bWVyaWNzIGFuZCBjb21tb24gcHVuY3R1YXRpb24pXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1teYS16QS1aMC05IC4sIT8nLV0vZywgJycpO1xuXG4gIC8vIDcuIFRyaW0gRXhjZXNzaXZlIFdoaXRlc3BhY2VcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKTtcblxuICAvLyA4LiBWYWxpZGF0ZSBMZW5ndGhcbiAgaWYgKHRleHQubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElucHV0IGV4Y2VlZHMgbWF4aW11bSBhbGxvd2VkIGxlbmd0aCBvZiAke21heExlbmd0aH0gY2hhcmFjdGVycy5gKTtcbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5leHBvcnQgeyBleHRyYWN0RG9tYWluLCBtYXJrZG93blRvSHRtbCwgY2xlYW5JbnB1dCB9OyIsIi8qIEVuYWJsZSBSZXNpemluZyAqL1xuZnVuY3Rpb24gZW5hYmxlUmVzaXppbmcoKSB7XG4gICAgY29uc3QgcmVzaXphYmxlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzaXphYmxlJyk7XG4gIFxuICAgIHJlc2l6YWJsZUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCByZXNpemVIYW5kbGUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNpemUtaGFuZGxlJyk7XG4gICAgICBsZXQgaXNSZXNpemluZyA9IGZhbHNlO1xuICBcbiAgICAgIHJlc2l6ZUhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlzUmVzaXppbmcgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdzZS1yZXNpemUnO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Jlc2l6aW5nJyk7XG4gIFxuICAgICAgICBjb25zdCBzdGFydFdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3Qgc3RhcnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgY29uc3Qgc3RhcnRYID0gZS5jbGllbnRYO1xuICAgICAgICBjb25zdCBzdGFydFkgPSBlLmNsaWVudFk7XG4gIFxuICAgICAgICBjb25zdCBvbk1vdXNlTW92ZSA9IChlKSA9PiB7XG4gICAgICAgICAgaWYgKCFpc1Jlc2l6aW5nKSByZXR1cm47XG4gIFxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRXaWR0aCA9IHN0YXJ0V2lkdGggKyAoZS5jbGllbnRYIC0gc3RhcnRYKTtcbiAgICAgICAgICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gc3RhcnRIZWlnaHQgKyAoZS5jbGllbnRZIC0gc3RhcnRZKTtcbiAgXG4gICAgICAgICAgLy8gU2V0IG1pbmltdW0gZGltZW5zaW9uc1xuICAgICAgICAgIGNvbnN0IG1pbldpZHRoID0gMjAwO1xuICAgICAgICAgIGNvbnN0IG1pbkhlaWdodCA9IDEwMDtcbiAgXG4gICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke01hdGgubWF4KGN1cnJlbnRXaWR0aCwgbWluV2lkdGgpfXB4YDtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke01hdGgubWF4KGN1cnJlbnRIZWlnaHQsIG1pbkhlaWdodCl9cHhgO1xuICAgICAgICB9O1xuICBcbiAgICAgICAgY29uc3Qgb25Nb3VzZVVwID0gKCkgPT4ge1xuICAgICAgICAgIGlzUmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Jlc2l6aW5nJyk7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gIFxuICAgICAgICAgIC8vIFNhdmUgZGltZW5zaW9uc1xuICAgICAgICAgIHNhdmVXaWRnZXRTaXplKGVsZW1lbnQuaWQsIGVsZW1lbnQuc3R5bGUud2lkdGgsIGVsZW1lbnQuc3R5bGUuaGVpZ2h0KTtcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgIH0pO1xuICBcbiAgICAgIC8vIExvYWQgc2F2ZWQgZGltZW5zaW9uc1xuICAgICAgbG9hZFdpZGdldFNpemUoZWxlbWVudC5pZCwgZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIC8qIFNhdmUgV2lkZ2V0IFNpemUgKi9cbiAgZnVuY3Rpb24gc2F2ZVdpZGdldFNpemUod2lkZ2V0SWQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgaWYgKGNocm9tZSAmJiBjaHJvbWUuc3RvcmFnZSAmJiBjaHJvbWUuc3RvcmFnZS5sb2NhbCkge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW3dpZGdldElkXTogc2l6ZSB9LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTYXZlZCBzaXplIGZvciAke3dpZGdldElkfTpgLCBzaXplKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGb3IgdGVzdGluZyBvdXRzaWRlIG9mIENocm9tZSBleHRlbnNpb25cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHdpZGdldElkLCBKU09OLnN0cmluZ2lmeShzaXplKSk7XG4gICAgfVxuICB9XG4gIFxuICAvKiBMb2FkIFdpZGdldCBTaXplICovXG4gIGZ1bmN0aW9uIGxvYWRXaWRnZXRTaXplKHdpZGdldElkLCBlbGVtZW50KSB7XG4gICAgaWYgKGNocm9tZSAmJiBjaHJvbWUuc3RvcmFnZSAmJiBjaHJvbWUuc3RvcmFnZS5sb2NhbCkge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHdpZGdldElkLCAocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHRbd2lkZ2V0SWRdKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IHJlc3VsdFt3aWRnZXRJZF0ud2lkdGg7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSByZXN1bHRbd2lkZ2V0SWRdLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZvciB0ZXN0aW5nIG91dHNpZGUgb2YgQ2hyb21lIGV4dGVuc2lvblxuICAgICAgY29uc3Qgc2l6ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0od2lkZ2V0SWQpKTtcbiAgICAgIGlmIChzaXplKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBzaXplLndpZHRoO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gY3JlYXRlT3JHZXRXaWRnZXQodW5pcXVlSUQsIHdpZGdldFRpdGxlKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVuaXF1ZUlEKSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVuaXF1ZUlEKTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IHdpZGdldENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aWRnZXQtY29udGFpbmVyJyk7XG4gIFxuICAgIC8vIENyZWF0ZSBhIG5ldyB3aWRnZXQgZWxlbWVudFxuICAgIGNvbnN0IG5ld1dpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1dpZGdldC5jbGFzc05hbWUgPSAnd2lkZ2V0IHJlc2l6YWJsZSc7XG4gIFxuICAgIC8vIEdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciB0aGUgbmV3IHdpZGdldFxuICAgIG5ld1dpZGdldC5pZCA9IHVuaXF1ZUlEO1xuICBcbiAgICAvLyBTZXQgdGhlIGNvbnRlbnQgb2YgdGhlIG5ldyB3aWRnZXRcbiAgICBuZXdXaWRnZXQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0LWhlYWRlclwiPlxuICAgICAgICAgICAgPGgyPiR7d2lkZ2V0VGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXNpemUtaGFuZGxlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gIFxuICAgIC8vIEFwcGVuZCB0aGUgbmV3IHdpZGdldCB0byB0aGUgd2lkZ2V0IGNvbnRhaW5lclxuICAgIHdpZGdldENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdXaWRnZXQpO1xuICBcbiAgICByZXR1cm4gbmV3V2lkZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRqdXN0V2lkZ2V0U2l6ZSh3aWRnZXQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gd2lkZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5oaXN0b3J5LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhlYWRlciA9IHdpZGdldC5xdWVyeVNlbGVjdG9yKCcud2lkZ2V0LWhlYWRlcicpO1xuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IGhlYWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgY29udGVudEhlaWdodCA9IGNvbnRlbnQub2Zmc2V0SGVpZ2h0O1xuICAgIHdpZGdldC5zdHlsZS5oZWlnaHQgPSBgJHtoZWFkZXJIZWlnaHQgKyBjb250ZW50SGVpZ2h0ICsgNTB9cHhgO1xuICB9XG5cbmV4cG9ydCB7IGVuYWJsZVJlc2l6aW5nLCBzYXZlV2lkZ2V0U2l6ZSwgbG9hZFdpZGdldFNpemUsIGNyZWF0ZU9yR2V0V2lkZ2V0LCBhZGp1c3RXaWRnZXRTaXplIH07XG4gICIsIi8vIGRiLmpzXG5cbmxldCBkYjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9wZW5EYXRhYmFzZSgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoZGIpIHtcbiAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oJ0hpc3RvcnlJbmRleGVyREInLCAxKTtcblxuICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRGF0YWJhc2UgZXJyb3I6JywgZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2ZW50KSA9PiB7XG4gICAgICBkYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICBjb25zdCBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdoaXN0b3J5JywgeyBrZXlQYXRoOiAnaWQnIH0pO1xuICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ3VybCcsICd1cmwnLCB7IHVuaXF1ZTogZmFsc2UgfSk7XG4gICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgndGl0bGUnLCAndGl0bGUnLCB7IHVuaXF1ZTogZmFsc2UgfSk7XG4gICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgndGFncycsICd0YWdzJywgeyB1bmlxdWU6IGZhbHNlLCBtdWx0aUVudHJ5OiB0cnVlIH0pO1xuICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ3N1bW1hcnknLCAnc3VtbWFyeScsIHsgdW5pcXVlOiBmYWxzZSB9KTtcbiAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KCdsYXN0VmlzaXRUaW1lJywgJ2xhc3RWaXNpdFRpbWUnLCB7IHVuaXF1ZTogdHJ1ZSB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgdXBncmFkZWRcIik7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICBkYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICByZXNvbHZlKGRiKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFyRGF0YWJhc2UoKSB7XG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oWydoaXN0b3J5J10sICdyZWFkd3JpdGUnKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gICAgY29uc3QgcmVxdWVzdCA9IG9iamVjdFN0b3JlLmNsZWFyKCk7XG4gICAgY29uc29sZS5sb2coXCJDbGVhcmluZyBkYXRhYmFzZVwiKTtcblxuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgIHJlamVjdChldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEhpc3RvcnlJdGVtKGl0ZW0pIHtcbiAgYXdhaXQgb3BlbkRhdGFiYXNlKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbJ2hpc3RvcnknXSwgJ3JlYWR3cml0ZScpO1xuICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ2hpc3RvcnknKTtcbiAgICBjb25zdCBpbmRleCA9IG9iamVjdFN0b3JlLmluZGV4KCdsYXN0VmlzaXRUaW1lJyk7XG5cbiAgICAvLyBDaGVjayBpZiBhbiBpdGVtIHdpdGggdGhlIHNhbWUgbGFzdFZpc2l0VGltZSBhbHJlYWR5IGV4aXN0c1xuICAgIGNvbnN0IGNoZWNrUmVxdWVzdCA9IGluZGV4LmdldChpdGVtLmxhc3RWaXNpdFRpbWUpO1xuXG4gICAgY2hlY2tSZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5yZXN1bHQpIHtcbiAgICAgICAgLy8gSXRlbSB3aXRoIHRoZSBzYW1lIGxhc3RWaXNpdFRpbWUgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIHdpdGggdGhlIHNhbWUgbGFzdFZpc2l0VGltZSBhbHJlYWR5IGV4aXN0cywgbm90IGFkZGluZy5cIik7XG4gICAgICAgIHJlc29sdmUoKTsgLy8gUmVzb2x2ZSB3aXRob3V0IGFkZGluZ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm8gaXRlbSB3aXRoIHRoZSBzYW1lIGxhc3RWaXNpdFRpbWUsIHByb2NlZWQgdG8gYWRkXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBvYmplY3RTdG9yZS5wdXQoaXRlbSk7XG5cbiAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYEhpc3RvcnkgaXRlbSBhZGRlZGApO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgaXRlbTonLCBldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICAgICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNoZWNrUmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBsYXN0VmlzaXRUaW1lOicsIGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgIH07XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsSGlzdG9yeUl0ZW1zKCkge1xuICBhd2FpdCBvcGVuRGF0YWJhc2UoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFsnaGlzdG9yeSddLCAncmVhZG9ubHknKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gICAgY29uc3QgcmVxdWVzdCA9IG9iamVjdFN0b3JlLmdldEFsbCgpO1xuXG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgIHJlc29sdmUoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkFsbCBoaXN0b3J5IGl0ZW1zIGZldGNoZWRcIik7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWxsIGhpc3RvcnkgaXRlbXM6JywgZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGlzdG9yeSBpdGVtIHdpdGggdGhlIHNwZWNpZmllZCBsYXN0VmlzaXRUaW1lIGV4aXN0cyBpbiB0aGUgSW5kZXhlZERCLlxuICogQHBhcmFtIHtudW1iZXJ9IGxhc3RWaXNpdFRpbWUgLSBUaGUgbGFzdCB2aXNpdCB0aW1lIG9mIHRoZSBoaXN0b3J5IGl0ZW0uXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0cnVlIGlmIHRoZSBpdGVtIGV4aXN0cywgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tJZkl0ZW1FeGlzdHMobGFzdFZpc2l0VGltZSkge1xuICAvLyBFbnN1cmUgdGhlIGRhdGFiYXNlIGlzIG9wZW5cbiAgYXdhaXQgb3BlbkRhdGFiYXNlKCk7XG5cbiAgdHJ5IHtcbiAgICAvLyBTdGFydCBhIHJlYWRvbmx5IHRyYW5zYWN0aW9uXG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbJ2hpc3RvcnknXSwgJ3JlYWRvbmx5Jyk7XG4gICAgY29uc3Qgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgnaGlzdG9yeScpO1xuICAgIGNvbnN0IGluZGV4ID0gb2JqZWN0U3RvcmUuaW5kZXgoJ2xhc3RWaXNpdFRpbWUnKTtcblxuICAgIC8vIEluaXRpYXRlIHRoZSBnZXQgcmVxdWVzdFxuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleC5nZXQobGFzdFZpc2l0VGltZSk7XG5cbiAgICAvLyBBd2FpdCB0aGUgcmVzdWx0IG9mIHRoZSBnZXQgcmVxdWVzdFxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCk7XG5cbiAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIGl0ZW0gZXhpc3RzXG4gICAgY29uc3QgZXhpc3RzID0gcmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgcmVzdWx0ICE9PSBudWxsO1xuXG4gICAgLy8gY29uc29sZS5sb2coYEl0ZW0gZXhpc3RzIGZvciBsYXN0VmlzaXRUaW1lICR7bGFzdFZpc2l0VGltZX06ICR7ZXhpc3RzfWApO1xuXG4gICAgcmV0dXJuIGV4aXN0cztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBFcnJvciBjaGVja2luZyBpZiBpdGVtIGV4aXN0cyBmb3IgbGFzdFZpc2l0VGltZSAke2xhc3RWaXNpdFRpbWV9OmAsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjsgLy8gUHJvcGFnYXRlIHRoZSBlcnJvciB0byB0aGUgY2FsbGVyXG4gIH1cbn1cblxuLyoqXG4gKiBQcm9taXNpZmllcyBhbiBJbmRleGVkREIgcmVxdWVzdC5cbiAqIEBwYXJhbSB7SURCUmVxdWVzdH0gcmVxdWVzdCAtIFRoZSBJbmRleGVkREIgcmVxdWVzdCBvYmplY3QuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSAtIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlcXVlc3QgcmVzdWx0LlxuICovXG5mdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxdWVzdC5yZXN1bHQpO1xuICAgIHJlcXVlc3Qub25lcnJvciA9ICgpID0+IHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgfSk7XG59XG5cbi8qKlxuICogSW5wdXQgc3RhcnREYXRlIGFuZCBlbmREYXRlLCBmZXRjaCBhbGwgaGlzdG9yeSBpdGVtcyBpbiB0aGF0IHJhbmdlLCBzZWFyY2ggd2l0aGluIGxhc3RWaXNpdFRpbWUgaW5kZXggb2YgdGhlIGRiICBcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhpc3RvcnlJblRpbWVSYW5nZShzdGFydERhdGUsIGVuZERhdGUpIHtcbiAgYXdhaXQgb3BlbkRhdGFiYXNlKCk7XG4gIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oWydoaXN0b3J5J10sICdyZWFkb25seScpO1xuICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gIGNvbnN0IGluZGV4ID0gb2JqZWN0U3RvcmUuaW5kZXgoJ2xhc3RWaXNpdFRpbWUnKTtcbiAgY29uc3QgcmFuZ2UgPSBJREJLZXlSYW5nZS5ib3VuZChzdGFydERhdGUsIGVuZERhdGUpO1xuICBjb25zdCByZXF1ZXN0ID0gaW5kZXguZ2V0QWxsKHJhbmdlKTsgIFxuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCk7XG4gIHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IEZ1c2UgZnJvbSAnZnVzZS5qcyc7XG5pbXBvcnQgeyBnZXRBbGxIaXN0b3J5SXRlbXMgfSBmcm9tICcuLi91dGlscy9kYi5qcyc7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlYXJjaFJlc3VsdHMocmF3X3F1ZXJ5KSB7XG4gICAgY29uc3QgcXVlcnkgPSByYXdfcXVlcnkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgaGlzdG9yeUl0ZW1zID0gYXdhaXQgZ2V0QWxsSGlzdG9yeUl0ZW1zKCk7XG4gICAgY29uc3QgZnVzZSA9IG5ldyBGdXNlKGhpc3RvcnlJdGVtcywge1xuICAgICAgICBrZXlzOiBbXG4gICAgICAgICAgICAndGl0bGUnLFxuICAgICAgICAgICAgJ3N1bW1hcnknLFxuICAgICAgICAgICAgeyBuYW1lOiAndGFncycsIHdlaWdodDogMC41IH1cbiAgICAgICAgXSxcbiAgICAgICAgdGhyZXNob2xkOiAwLjJcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdHMgPSBmdXNlLnNlYXJjaChxdWVyeSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWx0ZXJlZEhpc3RvcnlJdGVtcyhoaXN0b3J5SXRlbXMsIHNlbGVjdGVkRmlsdGVycywgZXhjbHVkZUZpbHRlcnMpIHtcbiAgICAvLyBTdGFydCB3aXRoIGFsbCBoaXN0b3J5IGl0ZW1zXG4gICAgbGV0IGZpbHRlcmVkSXRlbXMgPSBoaXN0b3J5SXRlbXM7XG5cbiAgICAvLyBBcHBseSBpbmNsdXNpb24gZmlsdGVycyBpZiBhbnlcbiAgICBpZiAoc2VsZWN0ZWRGaWx0ZXJzICYmIHNlbGVjdGVkRmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyQ2FzZVNlbGVjdGVkRmlsdGVycyA9IHNlbGVjdGVkRmlsdGVycy5tYXAoZmlsdGVyID0+IGZpbHRlci50b0xvd2VyQ2FzZSgpKTtcblxuICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gZmlsdGVyZWRJdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGl0ZW0udGl0bGUgPyBpdGVtLnRpdGxlLnRvTG93ZXJDYXNlKCkgOiAnJztcbiAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSBpdGVtLnN1bW1hcnkgPyBpdGVtLnN1bW1hcnkudG9Mb3dlckNhc2UoKSA6ICcnO1xuICAgICAgICAgICAgY29uc3QgdGFncyA9IGl0ZW0udGFncyA/IGl0ZW0udGFncy5tYXAodGFnID0+IHRhZy50b0xvd2VyQ2FzZSgpKSA6IFtdO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gaXRlbS51cmwgPyBpdGVtLnVybC50b0xvd2VyQ2FzZSgpIDogJyc7XG5cbiAgICAgICAgICAgIHJldHVybiBsb3dlckNhc2VTZWxlY3RlZEZpbHRlcnMuc29tZShmaWx0ZXIgPT4gXG4gICAgICAgICAgICAgICAgdGl0bGUuaW5jbHVkZXMoZmlsdGVyKSB8fFxuICAgICAgICAgICAgICAgIHN1bW1hcnkuaW5jbHVkZXMoZmlsdGVyKSB8fFxuICAgICAgICAgICAgICAgIHRhZ3MuaW5jbHVkZXMoZmlsdGVyKSB8fFxuICAgICAgICAgICAgICAgIHVybC5pbmNsdWRlcyhmaWx0ZXIpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBleGNsdXNpb24gZmlsdGVycyBpZiBhbnlcbiAgICBpZiAoZXhjbHVkZUZpbHRlcnMgJiYgZXhjbHVkZUZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBsb3dlckNhc2VFeGNsdWRlRmlsdGVycyA9IGV4Y2x1ZGVGaWx0ZXJzLm1hcChmaWx0ZXIgPT4gZmlsdGVyLnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgICAgIGZpbHRlcmVkSXRlbXMgPSBmaWx0ZXJlZEl0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS50aXRsZSA/IGl0ZW0udGl0bGUudG9Mb3dlckNhc2UoKSA6ICcnO1xuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGl0ZW0uc3VtbWFyeSA/IGl0ZW0uc3VtbWFyeS50b0xvd2VyQ2FzZSgpIDogJyc7XG4gICAgICAgICAgICBjb25zdCB0YWdzID0gaXRlbS50YWdzID8gaXRlbS50YWdzLm1hcCh0YWcgPT4gdGFnLnRvTG93ZXJDYXNlKCkpIDogW107XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBpdGVtLnVybCA/IGl0ZW0udXJsLnRvTG93ZXJDYXNlKCkgOiAnJztcblxuICAgICAgICAgICAgcmV0dXJuICFsb3dlckNhc2VFeGNsdWRlRmlsdGVycy5zb21lKGZpbHRlciA9PiBcbiAgICAgICAgICAgICAgICB0aXRsZS5pbmNsdWRlcyhmaWx0ZXIpIHx8XG4gICAgICAgICAgICAgICAgc3VtbWFyeS5pbmNsdWRlcyhmaWx0ZXIpIHx8XG4gICAgICAgICAgICAgICAgdGFncy5pbmNsdWRlcyhmaWx0ZXIpIHx8XG4gICAgICAgICAgICAgICAgdXJsLmluY2x1ZGVzKGZpbHRlcilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmaWx0ZXJlZEl0ZW1zO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyoqXG4gKiBGdXNlLmpzIHY3LjAuMCAtIExpZ2h0d2VpZ2h0IGZ1enp5LXNlYXJjaCAoaHR0cDovL2Z1c2Vqcy5pbylcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjMgS2lybyBSaXNrIChodHRwOi8va2lyby5tZSlcbiAqIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIEFwYWNoZSBTb2Z0d2FyZSBMaWNlbnNlIDIuMFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICovXG5cbmZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5XG4gICAgPyBnZXRUYWcodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nXG4gICAgOiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG4vLyBBZGFwdGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvbWFzdGVyLy5pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanNcbmNvbnN0IElORklOSVRZID0gMSAvIDA7XG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG4gIGxldCByZXN1bHQgPSB2YWx1ZSArICcnO1xuICByZXR1cm4gcmVzdWx0ID09ICcwJyAmJiAxIC8gdmFsdWUgPT0gLUlORklOSVRZID8gJy0wJyA6IHJlc3VsdFxufVxuXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKVxufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG4vLyBBZGFwdGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvbWFzdGVyL2lzQm9vbGVhbi5qc1xuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgPT09IHRydWUgfHxcbiAgICB2YWx1ZSA9PT0gZmFsc2UgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09ICdbb2JqZWN0IEJvb2xlYW5dJylcbiAgKVxufVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG4vLyBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS5cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIHZhbHVlICE9PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbFxufVxuXG5mdW5jdGlvbiBpc0JsYW5rKHZhbHVlKSB7XG4gIHJldHVybiAhdmFsdWUudHJpbSgpLmxlbmd0aFxufVxuXG4vLyBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4vLyBBZGFwdGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvbWFzdGVyLy5pbnRlcm5hbC9nZXRUYWcuanNcbmZ1bmN0aW9uIGdldFRhZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbFxuICAgID8gdmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICAgPyAnW29iamVjdCBVbmRlZmluZWRdJ1xuICAgICAgOiAnW29iamVjdCBOdWxsXSdcbiAgICA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSlcbn1cblxuY29uc3QgRVhURU5ERURfU0VBUkNIX1VOQVZBSUxBQkxFID0gJ0V4dGVuZGVkIHNlYXJjaCBpcyBub3QgYXZhaWxhYmxlJztcblxuY29uc3QgSU5DT1JSRUNUX0lOREVYX1RZUEUgPSBcIkluY29ycmVjdCAnaW5kZXgnIHR5cGVcIjtcblxuY29uc3QgTE9HSUNBTF9TRUFSQ0hfSU5WQUxJRF9RVUVSWV9GT1JfS0VZID0gKGtleSkgPT5cbiAgYEludmFsaWQgdmFsdWUgZm9yIGtleSAke2tleX1gO1xuXG5jb25zdCBQQVRURVJOX0xFTkdUSF9UT09fTEFSR0UgPSAobWF4KSA9PlxuICBgUGF0dGVybiBsZW5ndGggZXhjZWVkcyBtYXggb2YgJHttYXh9LmA7XG5cbmNvbnN0IE1JU1NJTkdfS0VZX1BST1BFUlRZID0gKG5hbWUpID0+IGBNaXNzaW5nICR7bmFtZX0gcHJvcGVydHkgaW4ga2V5YDtcblxuY29uc3QgSU5WQUxJRF9LRVlfV0VJR0hUX1ZBTFVFID0gKGtleSkgPT5cbiAgYFByb3BlcnR5ICd3ZWlnaHQnIGluIGtleSAnJHtrZXl9JyBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlcmA7XG5cbmNvbnN0IGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmNsYXNzIEtleVN0b3JlIHtcbiAgY29uc3RydWN0b3Ioa2V5cykge1xuICAgIHRoaXMuX2tleXMgPSBbXTtcbiAgICB0aGlzLl9rZXlNYXAgPSB7fTtcblxuICAgIGxldCB0b3RhbFdlaWdodCA9IDA7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgbGV0IG9iaiA9IGNyZWF0ZUtleShrZXkpO1xuXG4gICAgICB0aGlzLl9rZXlzLnB1c2gob2JqKTtcbiAgICAgIHRoaXMuX2tleU1hcFtvYmouaWRdID0gb2JqO1xuXG4gICAgICB0b3RhbFdlaWdodCArPSBvYmoud2VpZ2h0O1xuICAgIH0pO1xuXG4gICAgLy8gTm9ybWFsaXplIHdlaWdodHMgc28gdGhhdCB0aGVpciBzdW0gaXMgZXF1YWwgdG8gMVxuICAgIHRoaXMuX2tleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBrZXkud2VpZ2h0IC89IHRvdGFsV2VpZ2h0O1xuICAgIH0pO1xuICB9XG4gIGdldChrZXlJZCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlNYXBba2V5SWRdXG4gIH1cbiAga2V5cygpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5c1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fa2V5cylcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXkoa2V5KSB7XG4gIGxldCBwYXRoID0gbnVsbDtcbiAgbGV0IGlkID0gbnVsbDtcbiAgbGV0IHNyYyA9IG51bGw7XG4gIGxldCB3ZWlnaHQgPSAxO1xuICBsZXQgZ2V0Rm4gPSBudWxsO1xuXG4gIGlmIChpc1N0cmluZyhrZXkpIHx8IGlzQXJyYXkoa2V5KSkge1xuICAgIHNyYyA9IGtleTtcbiAgICBwYXRoID0gY3JlYXRlS2V5UGF0aChrZXkpO1xuICAgIGlkID0gY3JlYXRlS2V5SWQoa2V5KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWhhc093bi5jYWxsKGtleSwgJ25hbWUnKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKE1JU1NJTkdfS0VZX1BST1BFUlRZKCduYW1lJykpXG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IGtleS5uYW1lO1xuICAgIHNyYyA9IG5hbWU7XG5cbiAgICBpZiAoaGFzT3duLmNhbGwoa2V5LCAnd2VpZ2h0JykpIHtcbiAgICAgIHdlaWdodCA9IGtleS53ZWlnaHQ7XG5cbiAgICAgIGlmICh3ZWlnaHQgPD0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9LRVlfV0VJR0hUX1ZBTFVFKG5hbWUpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHBhdGggPSBjcmVhdGVLZXlQYXRoKG5hbWUpO1xuICAgIGlkID0gY3JlYXRlS2V5SWQobmFtZSk7XG4gICAgZ2V0Rm4gPSBrZXkuZ2V0Rm47XG4gIH1cblxuICByZXR1cm4geyBwYXRoLCBpZCwgd2VpZ2h0LCBzcmMsIGdldEZuIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlS2V5UGF0aChrZXkpIHtcbiAgcmV0dXJuIGlzQXJyYXkoa2V5KSA/IGtleSA6IGtleS5zcGxpdCgnLicpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleUlkKGtleSkge1xuICByZXR1cm4gaXNBcnJheShrZXkpID8ga2V5LmpvaW4oJy4nKSA6IGtleVxufVxuXG5mdW5jdGlvbiBnZXQob2JqLCBwYXRoKSB7XG4gIGxldCBsaXN0ID0gW107XG4gIGxldCBhcnIgPSBmYWxzZTtcblxuICBjb25zdCBkZWVwR2V0ID0gKG9iaiwgcGF0aCwgaW5kZXgpID0+IHtcbiAgICBpZiAoIWlzRGVmaW5lZChvYmopKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKCFwYXRoW2luZGV4XSkge1xuICAgICAgLy8gSWYgdGhlcmUncyBubyBwYXRoIGxlZnQsIHdlJ3ZlIGFycml2ZWQgYXQgdGhlIG9iamVjdCB3ZSBjYXJlIGFib3V0LlxuICAgICAgbGlzdC5wdXNoKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBrZXkgPSBwYXRoW2luZGV4XTtcblxuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgbGFzdCB2YWx1ZSBpbiB0aGUgcGF0aCwgYW5kIGlmIGl0J3MgYSBzdHJpbmcvbnVtYmVyL2Jvb2wsXG4gICAgICAvLyBhZGQgaXQgdG8gdGhlIGxpc3RcbiAgICAgIGlmIChcbiAgICAgICAgaW5kZXggPT09IHBhdGgubGVuZ3RoIC0gMSAmJlxuICAgICAgICAoaXNTdHJpbmcodmFsdWUpIHx8IGlzTnVtYmVyKHZhbHVlKSB8fCBpc0Jvb2xlYW4odmFsdWUpKVxuICAgICAgKSB7XG4gICAgICAgIGxpc3QucHVzaCh0b1N0cmluZyh2YWx1ZSkpO1xuICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBhcnIgPSB0cnVlO1xuICAgICAgICAvLyBTZWFyY2ggZWFjaCBpdGVtIGluIHRoZSBhcnJheS5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgZGVlcEdldCh2YWx1ZVtpXSwgcGF0aCwgaW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmxlbmd0aCkge1xuICAgICAgICAvLyBBbiBvYmplY3QuIFJlY3Vyc2UgZnVydGhlci5cbiAgICAgICAgZGVlcEdldCh2YWx1ZSwgcGF0aCwgaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gQmFja3dhcmRzIGNvbXBhdGliaWxpdHkgKHNpbmNlIHBhdGggdXNlZCB0byBiZSBhIHN0cmluZylcbiAgZGVlcEdldChvYmosIGlzU3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aCwgMCk7XG5cbiAgcmV0dXJuIGFyciA/IGxpc3QgOiBsaXN0WzBdXG59XG5cbmNvbnN0IE1hdGNoT3B0aW9ucyA9IHtcbiAgLy8gV2hldGhlciB0aGUgbWF0Y2hlcyBzaG91bGQgYmUgaW5jbHVkZWQgaW4gdGhlIHJlc3VsdCBzZXQuIFdoZW4gYHRydWVgLCBlYWNoIHJlY29yZCBpbiB0aGUgcmVzdWx0XG4gIC8vIHNldCB3aWxsIGluY2x1ZGUgdGhlIGluZGljZXMgb2YgdGhlIG1hdGNoZWQgY2hhcmFjdGVycy5cbiAgLy8gVGhlc2UgY2FuIGNvbnNlcXVlbnRseSBiZSB1c2VkIGZvciBoaWdobGlnaHRpbmcgcHVycG9zZXMuXG4gIGluY2x1ZGVNYXRjaGVzOiBmYWxzZSxcbiAgLy8gV2hlbiBgdHJ1ZWAsIHRoZSBtYXRjaGluZyBmdW5jdGlvbiB3aWxsIGNvbnRpbnVlIHRvIHRoZSBlbmQgb2YgYSBzZWFyY2ggcGF0dGVybiBldmVuIGlmXG4gIC8vIGEgcGVyZmVjdCBtYXRjaCBoYXMgYWxyZWFkeSBiZWVuIGxvY2F0ZWQgaW4gdGhlIHN0cmluZy5cbiAgZmluZEFsbE1hdGNoZXM6IGZhbHNlLFxuICAvLyBNaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgbXVzdCBiZSBtYXRjaGVkIGJlZm9yZSBhIHJlc3VsdCBpcyBjb25zaWRlcmVkIGEgbWF0Y2hcbiAgbWluTWF0Y2hDaGFyTGVuZ3RoOiAxXG59O1xuXG5jb25zdCBCYXNpY09wdGlvbnMgPSB7XG4gIC8vIFdoZW4gYHRydWVgLCB0aGUgYWxnb3JpdGhtIGNvbnRpbnVlcyBzZWFyY2hpbmcgdG8gdGhlIGVuZCBvZiB0aGUgaW5wdXQgZXZlbiBpZiBhIHBlcmZlY3RcbiAgLy8gbWF0Y2ggaXMgZm91bmQgYmVmb3JlIHRoZSBlbmQgb2YgdGhlIHNhbWUgaW5wdXQuXG4gIGlzQ2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gIC8vIFdoZW4gdHJ1ZSwgdGhlIG1hdGNoaW5nIGZ1bmN0aW9uIHdpbGwgY29udGludWUgdG8gdGhlIGVuZCBvZiBhIHNlYXJjaCBwYXR0ZXJuIGV2ZW4gaWZcbiAgaW5jbHVkZVNjb3JlOiBmYWxzZSxcbiAgLy8gTGlzdCBvZiBwcm9wZXJ0aWVzIHRoYXQgd2lsbCBiZSBzZWFyY2hlZC4gVGhpcyBhbHNvIHN1cHBvcnRzIG5lc3RlZCBwcm9wZXJ0aWVzLlxuICBrZXlzOiBbXSxcbiAgLy8gV2hldGhlciB0byBzb3J0IHRoZSByZXN1bHQgbGlzdCwgYnkgc2NvcmVcbiAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgLy8gRGVmYXVsdCBzb3J0IGZ1bmN0aW9uOiBzb3J0IGJ5IGFzY2VuZGluZyBzY29yZSwgYXNjZW5kaW5nIGluZGV4XG4gIHNvcnRGbjogKGEsIGIpID0+XG4gICAgYS5zY29yZSA9PT0gYi5zY29yZSA/IChhLmlkeCA8IGIuaWR4ID8gLTEgOiAxKSA6IGEuc2NvcmUgPCBiLnNjb3JlID8gLTEgOiAxXG59O1xuXG5jb25zdCBGdXp6eU9wdGlvbnMgPSB7XG4gIC8vIEFwcHJveGltYXRlbHkgd2hlcmUgaW4gdGhlIHRleHQgaXMgdGhlIHBhdHRlcm4gZXhwZWN0ZWQgdG8gYmUgZm91bmQ/XG4gIGxvY2F0aW9uOiAwLFxuICAvLyBBdCB3aGF0IHBvaW50IGRvZXMgdGhlIG1hdGNoIGFsZ29yaXRobSBnaXZlIHVwLiBBIHRocmVzaG9sZCBvZiAnMC4wJyByZXF1aXJlcyBhIHBlcmZlY3QgbWF0Y2hcbiAgLy8gKG9mIGJvdGggbGV0dGVycyBhbmQgbG9jYXRpb24pLCBhIHRocmVzaG9sZCBvZiAnMS4wJyB3b3VsZCBtYXRjaCBhbnl0aGluZy5cbiAgdGhyZXNob2xkOiAwLjYsXG4gIC8vIERldGVybWluZXMgaG93IGNsb3NlIHRoZSBtYXRjaCBtdXN0IGJlIHRvIHRoZSBmdXp6eSBsb2NhdGlvbiAoc3BlY2lmaWVkIGFib3ZlKS5cbiAgLy8gQW4gZXhhY3QgbGV0dGVyIG1hdGNoIHdoaWNoIGlzICdkaXN0YW5jZScgY2hhcmFjdGVycyBhd2F5IGZyb20gdGhlIGZ1enp5IGxvY2F0aW9uXG4gIC8vIHdvdWxkIHNjb3JlIGFzIGEgY29tcGxldGUgbWlzbWF0Y2guIEEgZGlzdGFuY2Ugb2YgJzAnIHJlcXVpcmVzIHRoZSBtYXRjaCBiZSBhdFxuICAvLyB0aGUgZXhhY3QgbG9jYXRpb24gc3BlY2lmaWVkLCBhIHRocmVzaG9sZCBvZiAnMTAwMCcgd291bGQgcmVxdWlyZSBhIHBlcmZlY3QgbWF0Y2hcbiAgLy8gdG8gYmUgd2l0aGluIDgwMCBjaGFyYWN0ZXJzIG9mIHRoZSBmdXp6eSBsb2NhdGlvbiB0byBiZSBmb3VuZCB1c2luZyBhIDAuOCB0aHJlc2hvbGQuXG4gIGRpc3RhbmNlOiAxMDBcbn07XG5cbmNvbnN0IEFkdmFuY2VkT3B0aW9ucyA9IHtcbiAgLy8gV2hlbiBgdHJ1ZWAsIGl0IGVuYWJsZXMgdGhlIHVzZSBvZiB1bml4LWxpa2Ugc2VhcmNoIGNvbW1hbmRzXG4gIHVzZUV4dGVuZGVkU2VhcmNoOiBmYWxzZSxcbiAgLy8gVGhlIGdldCBmdW5jdGlvbiB0byB1c2Ugd2hlbiBmZXRjaGluZyBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICAvLyBUaGUgZGVmYXVsdCB3aWxsIHNlYXJjaCBuZXN0ZWQgcGF0aHMgKmllIGZvby5iYXIuYmF6KlxuICBnZXRGbjogZ2V0LFxuICAvLyBXaGVuIGB0cnVlYCwgc2VhcmNoIHdpbGwgaWdub3JlIGBsb2NhdGlvbmAgYW5kIGBkaXN0YW5jZWAsIHNvIGl0IHdvbid0IG1hdHRlclxuICAvLyB3aGVyZSBpbiB0aGUgc3RyaW5nIHRoZSBwYXR0ZXJuIGFwcGVhcnMuXG4gIC8vIE1vcmUgaW5mbzogaHR0cHM6Ly9mdXNlanMuaW8vY29uY2VwdHMvc2NvcmluZy10aGVvcnkuaHRtbCNmdXp6aW5lc3Mtc2NvcmVcbiAgaWdub3JlTG9jYXRpb246IGZhbHNlLFxuICAvLyBXaGVuIGB0cnVlYCwgdGhlIGNhbGN1bGF0aW9uIGZvciB0aGUgcmVsZXZhbmNlIHNjb3JlICh1c2VkIGZvciBzb3J0aW5nKSB3aWxsXG4gIC8vIGlnbm9yZSB0aGUgZmllbGQtbGVuZ3RoIG5vcm0uXG4gIC8vIE1vcmUgaW5mbzogaHR0cHM6Ly9mdXNlanMuaW8vY29uY2VwdHMvc2NvcmluZy10aGVvcnkuaHRtbCNmaWVsZC1sZW5ndGgtbm9ybVxuICBpZ25vcmVGaWVsZE5vcm06IGZhbHNlLFxuICAvLyBUaGUgd2VpZ2h0IHRvIGRldGVybWluZSBob3cgbXVjaCBmaWVsZCBsZW5ndGggbm9ybSBlZmZlY3RzIHNjb3JpbmcuXG4gIGZpZWxkTm9ybVdlaWdodDogMVxufTtcblxudmFyIENvbmZpZyA9IHtcbiAgLi4uQmFzaWNPcHRpb25zLFxuICAuLi5NYXRjaE9wdGlvbnMsXG4gIC4uLkZ1enp5T3B0aW9ucyxcbiAgLi4uQWR2YW5jZWRPcHRpb25zXG59O1xuXG5jb25zdCBTUEFDRSA9IC9bXiBdKy9nO1xuXG4vLyBGaWVsZC1sZW5ndGggbm9ybTogdGhlIHNob3J0ZXIgdGhlIGZpZWxkLCB0aGUgaGlnaGVyIHRoZSB3ZWlnaHQuXG4vLyBTZXQgdG8gMyBkZWNpbWFscyB0byByZWR1Y2UgaW5kZXggc2l6ZS5cbmZ1bmN0aW9uIG5vcm0od2VpZ2h0ID0gMSwgbWFudGlzc2EgPSAzKSB7XG4gIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuICBjb25zdCBtID0gTWF0aC5wb3coMTAsIG1hbnRpc3NhKTtcblxuICByZXR1cm4ge1xuICAgIGdldCh2YWx1ZSkge1xuICAgICAgY29uc3QgbnVtVG9rZW5zID0gdmFsdWUubWF0Y2goU1BBQ0UpLmxlbmd0aDtcblxuICAgICAgaWYgKGNhY2hlLmhhcyhudW1Ub2tlbnMpKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5nZXQobnVtVG9rZW5zKVxuICAgICAgfVxuXG4gICAgICAvLyBEZWZhdWx0IGZ1bmN0aW9uIGlzIDEvc3FydCh4KSwgd2VpZ2h0IG1ha2VzIHRoYXQgdmFyaWFibGVcbiAgICAgIGNvbnN0IG5vcm0gPSAxIC8gTWF0aC5wb3cobnVtVG9rZW5zLCAwLjUgKiB3ZWlnaHQpO1xuXG4gICAgICAvLyBJbiBwbGFjZSBvZiBgdG9GaXhlZChtYW50aXNzYSlgLCBmb3IgZmFzdGVyIGNvbXB1dGF0aW9uXG4gICAgICBjb25zdCBuID0gcGFyc2VGbG9hdChNYXRoLnJvdW5kKG5vcm0gKiBtKSAvIG0pO1xuXG4gICAgICBjYWNoZS5zZXQobnVtVG9rZW5zLCBuKTtcblxuICAgICAgcmV0dXJuIG5cbiAgICB9LFxuICAgIGNsZWFyKCkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgRnVzZUluZGV4IHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGdldEZuID0gQ29uZmlnLmdldEZuLFxuICAgIGZpZWxkTm9ybVdlaWdodCA9IENvbmZpZy5maWVsZE5vcm1XZWlnaHRcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5ub3JtID0gbm9ybShmaWVsZE5vcm1XZWlnaHQsIDMpO1xuICAgIHRoaXMuZ2V0Rm4gPSBnZXRGbjtcbiAgICB0aGlzLmlzQ3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRJbmRleFJlY29yZHMoKTtcbiAgfVxuICBzZXRTb3VyY2VzKGRvY3MgPSBbXSkge1xuICAgIHRoaXMuZG9jcyA9IGRvY3M7XG4gIH1cbiAgc2V0SW5kZXhSZWNvcmRzKHJlY29yZHMgPSBbXSkge1xuICAgIHRoaXMucmVjb3JkcyA9IHJlY29yZHM7XG4gIH1cbiAgc2V0S2V5cyhrZXlzID0gW10pIHtcbiAgICB0aGlzLmtleXMgPSBrZXlzO1xuICAgIHRoaXMuX2tleXNNYXAgPSB7fTtcbiAgICBrZXlzLmZvckVhY2goKGtleSwgaWR4KSA9PiB7XG4gICAgICB0aGlzLl9rZXlzTWFwW2tleS5pZF0gPSBpZHg7XG4gICAgfSk7XG4gIH1cbiAgY3JlYXRlKCkge1xuICAgIGlmICh0aGlzLmlzQ3JlYXRlZCB8fCAhdGhpcy5kb2NzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pc0NyZWF0ZWQgPSB0cnVlO1xuXG4gICAgLy8gTGlzdCBpcyBBcnJheTxTdHJpbmc+XG4gICAgaWYgKGlzU3RyaW5nKHRoaXMuZG9jc1swXSkpIHtcbiAgICAgIHRoaXMuZG9jcy5mb3JFYWNoKChkb2MsIGRvY0luZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuX2FkZFN0cmluZyhkb2MsIGRvY0luZGV4KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMaXN0IGlzIEFycmF5PE9iamVjdD5cbiAgICAgIHRoaXMuZG9jcy5mb3JFYWNoKChkb2MsIGRvY0luZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuX2FkZE9iamVjdChkb2MsIGRvY0luZGV4KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMubm9ybS5jbGVhcigpO1xuICB9XG4gIC8vIEFkZHMgYSBkb2MgdG8gdGhlIGVuZCBvZiB0aGUgaW5kZXhcbiAgYWRkKGRvYykge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuc2l6ZSgpO1xuXG4gICAgaWYgKGlzU3RyaW5nKGRvYykpIHtcbiAgICAgIHRoaXMuX2FkZFN0cmluZyhkb2MsIGlkeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZE9iamVjdChkb2MsIGlkeCk7XG4gICAgfVxuICB9XG4gIC8vIFJlbW92ZXMgdGhlIGRvYyBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IG9mIHRoZSBpbmRleFxuICByZW1vdmVBdChpZHgpIHtcbiAgICB0aGlzLnJlY29yZHMuc3BsaWNlKGlkeCwgMSk7XG5cbiAgICAvLyBDaGFuZ2UgcmVmIGluZGV4IG9mIGV2ZXJ5IHN1YnNxdWVudCBkb2NcbiAgICBmb3IgKGxldCBpID0gaWR4LCBsZW4gPSB0aGlzLnNpemUoKTsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICB0aGlzLnJlY29yZHNbaV0uaSAtPSAxO1xuICAgIH1cbiAgfVxuICBnZXRWYWx1ZUZvckl0ZW1BdEtleUlkKGl0ZW0sIGtleUlkKSB7XG4gICAgcmV0dXJuIGl0ZW1bdGhpcy5fa2V5c01hcFtrZXlJZF1dXG4gIH1cbiAgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWNvcmRzLmxlbmd0aFxuICB9XG4gIF9hZGRTdHJpbmcoZG9jLCBkb2NJbmRleCkge1xuICAgIGlmICghaXNEZWZpbmVkKGRvYykgfHwgaXNCbGFuayhkb2MpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgcmVjb3JkID0ge1xuICAgICAgdjogZG9jLFxuICAgICAgaTogZG9jSW5kZXgsXG4gICAgICBuOiB0aGlzLm5vcm0uZ2V0KGRvYylcbiAgICB9O1xuXG4gICAgdGhpcy5yZWNvcmRzLnB1c2gocmVjb3JkKTtcbiAgfVxuICBfYWRkT2JqZWN0KGRvYywgZG9jSW5kZXgpIHtcbiAgICBsZXQgcmVjb3JkID0geyBpOiBkb2NJbmRleCwgJDoge30gfTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBrZXkgKGkuZSwgcGF0aCksIGFuZCBmZXRjaCB0aGUgdmFsdWUgYXQgdGhhdCBrZXlcbiAgICB0aGlzLmtleXMuZm9yRWFjaCgoa2V5LCBrZXlJbmRleCkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0ga2V5LmdldEZuID8ga2V5LmdldEZuKGRvYykgOiB0aGlzLmdldEZuKGRvYywga2V5LnBhdGgpO1xuXG4gICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBsZXQgc3ViUmVjb3JkcyA9IFtdO1xuICAgICAgICBjb25zdCBzdGFjayA9IFt7IG5lc3RlZEFyckluZGV4OiAtMSwgdmFsdWUgfV07XG5cbiAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IHsgbmVzdGVkQXJySW5kZXgsIHZhbHVlIH0gPSBzdGFjay5wb3AoKTtcblxuICAgICAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmICFpc0JsYW5rKHZhbHVlKSkge1xuICAgICAgICAgICAgbGV0IHN1YlJlY29yZCA9IHtcbiAgICAgICAgICAgICAgdjogdmFsdWUsXG4gICAgICAgICAgICAgIGk6IG5lc3RlZEFyckluZGV4LFxuICAgICAgICAgICAgICBuOiB0aGlzLm5vcm0uZ2V0KHZhbHVlKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc3ViUmVjb3Jkcy5wdXNoKHN1YlJlY29yZCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaykgPT4ge1xuICAgICAgICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICAgICAgICBuZXN0ZWRBcnJJbmRleDogayxcbiAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSA7XG4gICAgICAgIH1cbiAgICAgICAgcmVjb3JkLiRba2V5SW5kZXhdID0gc3ViUmVjb3JkcztcbiAgICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpICYmICFpc0JsYW5rKHZhbHVlKSkge1xuICAgICAgICBsZXQgc3ViUmVjb3JkID0ge1xuICAgICAgICAgIHY6IHZhbHVlLFxuICAgICAgICAgIG46IHRoaXMubm9ybS5nZXQodmFsdWUpXG4gICAgICAgIH07XG5cbiAgICAgICAgcmVjb3JkLiRba2V5SW5kZXhdID0gc3ViUmVjb3JkO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5yZWNvcmRzLnB1c2gocmVjb3JkKTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleXM6IHRoaXMua2V5cyxcbiAgICAgIHJlY29yZHM6IHRoaXMucmVjb3Jkc1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmRleChcbiAga2V5cyxcbiAgZG9jcyxcbiAgeyBnZXRGbiA9IENvbmZpZy5nZXRGbiwgZmllbGROb3JtV2VpZ2h0ID0gQ29uZmlnLmZpZWxkTm9ybVdlaWdodCB9ID0ge31cbikge1xuICBjb25zdCBteUluZGV4ID0gbmV3IEZ1c2VJbmRleCh7IGdldEZuLCBmaWVsZE5vcm1XZWlnaHQgfSk7XG4gIG15SW5kZXguc2V0S2V5cyhrZXlzLm1hcChjcmVhdGVLZXkpKTtcbiAgbXlJbmRleC5zZXRTb3VyY2VzKGRvY3MpO1xuICBteUluZGV4LmNyZWF0ZSgpO1xuICByZXR1cm4gbXlJbmRleFxufVxuXG5mdW5jdGlvbiBwYXJzZUluZGV4KFxuICBkYXRhLFxuICB7IGdldEZuID0gQ29uZmlnLmdldEZuLCBmaWVsZE5vcm1XZWlnaHQgPSBDb25maWcuZmllbGROb3JtV2VpZ2h0IH0gPSB7fVxuKSB7XG4gIGNvbnN0IHsga2V5cywgcmVjb3JkcyB9ID0gZGF0YTtcbiAgY29uc3QgbXlJbmRleCA9IG5ldyBGdXNlSW5kZXgoeyBnZXRGbiwgZmllbGROb3JtV2VpZ2h0IH0pO1xuICBteUluZGV4LnNldEtleXMoa2V5cyk7XG4gIG15SW5kZXguc2V0SW5kZXhSZWNvcmRzKHJlY29yZHMpO1xuICByZXR1cm4gbXlJbmRleFxufVxuXG5mdW5jdGlvbiBjb21wdXRlU2NvcmUkMShcbiAgcGF0dGVybixcbiAge1xuICAgIGVycm9ycyA9IDAsXG4gICAgY3VycmVudExvY2F0aW9uID0gMCxcbiAgICBleHBlY3RlZExvY2F0aW9uID0gMCxcbiAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZSxcbiAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvblxuICB9ID0ge31cbikge1xuICBjb25zdCBhY2N1cmFjeSA9IGVycm9ycyAvIHBhdHRlcm4ubGVuZ3RoO1xuXG4gIGlmIChpZ25vcmVMb2NhdGlvbikge1xuICAgIHJldHVybiBhY2N1cmFjeVxuICB9XG5cbiAgY29uc3QgcHJveGltaXR5ID0gTWF0aC5hYnMoZXhwZWN0ZWRMb2NhdGlvbiAtIGN1cnJlbnRMb2NhdGlvbik7XG5cbiAgaWYgKCFkaXN0YW5jZSkge1xuICAgIC8vIERvZGdlIGRpdmlkZSBieSB6ZXJvIGVycm9yLlxuICAgIHJldHVybiBwcm94aW1pdHkgPyAxLjAgOiBhY2N1cmFjeVxuICB9XG5cbiAgcmV0dXJuIGFjY3VyYWN5ICsgcHJveGltaXR5IC8gZGlzdGFuY2Vcbn1cblxuZnVuY3Rpb24gY29udmVydE1hc2tUb0luZGljZXMoXG4gIG1hdGNobWFzayA9IFtdLFxuICBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoXG4pIHtcbiAgbGV0IGluZGljZXMgPSBbXTtcbiAgbGV0IHN0YXJ0ID0gLTE7XG4gIGxldCBlbmQgPSAtMTtcbiAgbGV0IGkgPSAwO1xuXG4gIGZvciAobGV0IGxlbiA9IG1hdGNobWFzay5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGxldCBtYXRjaCA9IG1hdGNobWFza1tpXTtcbiAgICBpZiAobWF0Y2ggJiYgc3RhcnQgPT09IC0xKSB7XG4gICAgICBzdGFydCA9IGk7XG4gICAgfSBlbHNlIGlmICghbWF0Y2ggJiYgc3RhcnQgIT09IC0xKSB7XG4gICAgICBlbmQgPSBpIC0gMTtcbiAgICAgIGlmIChlbmQgLSBzdGFydCArIDEgPj0gbWluTWF0Y2hDaGFyTGVuZ3RoKSB7XG4gICAgICAgIGluZGljZXMucHVzaChbc3RhcnQsIGVuZF0pO1xuICAgICAgfVxuICAgICAgc3RhcnQgPSAtMTtcbiAgICB9XG4gIH1cblxuICAvLyAoaS0xIC0gc3RhcnQpICsgMSA9PiBpIC0gc3RhcnRcbiAgaWYgKG1hdGNobWFza1tpIC0gMV0gJiYgaSAtIHN0YXJ0ID49IG1pbk1hdGNoQ2hhckxlbmd0aCkge1xuICAgIGluZGljZXMucHVzaChbc3RhcnQsIGkgLSAxXSk7XG4gIH1cblxuICByZXR1cm4gaW5kaWNlc1xufVxuXG4vLyBNYWNoaW5lIHdvcmQgc2l6ZVxuY29uc3QgTUFYX0JJVFMgPSAzMjtcblxuZnVuY3Rpb24gc2VhcmNoKFxuICB0ZXh0LFxuICBwYXR0ZXJuLFxuICBwYXR0ZXJuQWxwaGFiZXQsXG4gIHtcbiAgICBsb2NhdGlvbiA9IENvbmZpZy5sb2NhdGlvbixcbiAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZSxcbiAgICB0aHJlc2hvbGQgPSBDb25maWcudGhyZXNob2xkLFxuICAgIGZpbmRBbGxNYXRjaGVzID0gQ29uZmlnLmZpbmRBbGxNYXRjaGVzLFxuICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgaW5jbHVkZU1hdGNoZXMgPSBDb25maWcuaW5jbHVkZU1hdGNoZXMsXG4gICAgaWdub3JlTG9jYXRpb24gPSBDb25maWcuaWdub3JlTG9jYXRpb25cbiAgfSA9IHt9XG4pIHtcbiAgaWYgKHBhdHRlcm4ubGVuZ3RoID4gTUFYX0JJVFMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoUEFUVEVSTl9MRU5HVEhfVE9PX0xBUkdFKE1BWF9CSVRTKSlcbiAgfVxuXG4gIGNvbnN0IHBhdHRlcm5MZW4gPSBwYXR0ZXJuLmxlbmd0aDtcbiAgLy8gU2V0IHN0YXJ0aW5nIGxvY2F0aW9uIGF0IGJlZ2lubmluZyB0ZXh0IGFuZCBpbml0aWFsaXplIHRoZSBhbHBoYWJldC5cbiAgY29uc3QgdGV4dExlbiA9IHRleHQubGVuZ3RoO1xuICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlbiBsb2NhdGlvbiA+IHRleHQubGVuZ3RoXG4gIGNvbnN0IGV4cGVjdGVkTG9jYXRpb24gPSBNYXRoLm1heCgwLCBNYXRoLm1pbihsb2NhdGlvbiwgdGV4dExlbikpO1xuICAvLyBIaWdoZXN0IHNjb3JlIGJleW9uZCB3aGljaCB3ZSBnaXZlIHVwLlxuICBsZXQgY3VycmVudFRocmVzaG9sZCA9IHRocmVzaG9sZDtcbiAgLy8gSXMgdGhlcmUgYSBuZWFyYnkgZXhhY3QgbWF0Y2g/IChzcGVlZHVwKVxuICBsZXQgYmVzdExvY2F0aW9uID0gZXhwZWN0ZWRMb2NhdGlvbjtcblxuICAvLyBQZXJmb3JtYW5jZTogb25seSBjb21wdXRlciBtYXRjaGVzIHdoZW4gdGhlIG1pbk1hdGNoQ2hhckxlbmd0aCA+IDFcbiAgLy8gT1IgaWYgYGluY2x1ZGVNYXRjaGVzYCBpcyB0cnVlLlxuICBjb25zdCBjb21wdXRlTWF0Y2hlcyA9IG1pbk1hdGNoQ2hhckxlbmd0aCA+IDEgfHwgaW5jbHVkZU1hdGNoZXM7XG4gIC8vIEEgbWFzayBvZiB0aGUgbWF0Y2hlcywgdXNlZCBmb3IgYnVpbGRpbmcgdGhlIGluZGljZXNcbiAgY29uc3QgbWF0Y2hNYXNrID0gY29tcHV0ZU1hdGNoZXMgPyBBcnJheSh0ZXh0TGVuKSA6IFtdO1xuXG4gIGxldCBpbmRleDtcblxuICAvLyBHZXQgYWxsIGV4YWN0IG1hdGNoZXMsIGhlcmUgZm9yIHNwZWVkIHVwXG4gIHdoaWxlICgoaW5kZXggPSB0ZXh0LmluZGV4T2YocGF0dGVybiwgYmVzdExvY2F0aW9uKSkgPiAtMSkge1xuICAgIGxldCBzY29yZSA9IGNvbXB1dGVTY29yZSQxKHBhdHRlcm4sIHtcbiAgICAgIGN1cnJlbnRMb2NhdGlvbjogaW5kZXgsXG4gICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH0pO1xuXG4gICAgY3VycmVudFRocmVzaG9sZCA9IE1hdGgubWluKHNjb3JlLCBjdXJyZW50VGhyZXNob2xkKTtcbiAgICBiZXN0TG9jYXRpb24gPSBpbmRleCArIHBhdHRlcm5MZW47XG5cbiAgICBpZiAoY29tcHV0ZU1hdGNoZXMpIHtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgcGF0dGVybkxlbikge1xuICAgICAgICBtYXRjaE1hc2tbaW5kZXggKyBpXSA9IDE7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZXNldCB0aGUgYmVzdCBsb2NhdGlvblxuICBiZXN0TG9jYXRpb24gPSAtMTtcblxuICBsZXQgbGFzdEJpdEFyciA9IFtdO1xuICBsZXQgZmluYWxTY29yZSA9IDE7XG4gIGxldCBiaW5NYXggPSBwYXR0ZXJuTGVuICsgdGV4dExlbjtcblxuICBjb25zdCBtYXNrID0gMSA8PCAocGF0dGVybkxlbiAtIDEpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0dGVybkxlbjsgaSArPSAxKSB7XG4gICAgLy8gU2NhbiBmb3IgdGhlIGJlc3QgbWF0Y2g7IGVhY2ggaXRlcmF0aW9uIGFsbG93cyBmb3Igb25lIG1vcmUgZXJyb3IuXG4gICAgLy8gUnVuIGEgYmluYXJ5IHNlYXJjaCB0byBkZXRlcm1pbmUgaG93IGZhciBmcm9tIHRoZSBtYXRjaCBsb2NhdGlvbiB3ZSBjYW4gc3RyYXlcbiAgICAvLyBhdCB0aGlzIGVycm9yIGxldmVsLlxuICAgIGxldCBiaW5NaW4gPSAwO1xuICAgIGxldCBiaW5NaWQgPSBiaW5NYXg7XG5cbiAgICB3aGlsZSAoYmluTWluIDwgYmluTWlkKSB7XG4gICAgICBjb25zdCBzY29yZSA9IGNvbXB1dGVTY29yZSQxKHBhdHRlcm4sIHtcbiAgICAgICAgZXJyb3JzOiBpLFxuICAgICAgICBjdXJyZW50TG9jYXRpb246IGV4cGVjdGVkTG9jYXRpb24gKyBiaW5NaWQsXG4gICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGRpc3RhbmNlLFxuICAgICAgICBpZ25vcmVMb2NhdGlvblxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzY29yZSA8PSBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICAgIGJpbk1pbiA9IGJpbk1pZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJpbk1heCA9IGJpbk1pZDtcbiAgICAgIH1cblxuICAgICAgYmluTWlkID0gTWF0aC5mbG9vcigoYmluTWF4IC0gYmluTWluKSAvIDIgKyBiaW5NaW4pO1xuICAgIH1cblxuICAgIC8vIFVzZSB0aGUgcmVzdWx0IGZyb20gdGhpcyBpdGVyYXRpb24gYXMgdGhlIG1heGltdW0gZm9yIHRoZSBuZXh0LlxuICAgIGJpbk1heCA9IGJpbk1pZDtcblxuICAgIGxldCBzdGFydCA9IE1hdGgubWF4KDEsIGV4cGVjdGVkTG9jYXRpb24gLSBiaW5NaWQgKyAxKTtcbiAgICBsZXQgZmluaXNoID0gZmluZEFsbE1hdGNoZXNcbiAgICAgID8gdGV4dExlblxuICAgICAgOiBNYXRoLm1pbihleHBlY3RlZExvY2F0aW9uICsgYmluTWlkLCB0ZXh0TGVuKSArIHBhdHRlcm5MZW47XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBiaXQgYXJyYXlcbiAgICBsZXQgYml0QXJyID0gQXJyYXkoZmluaXNoICsgMik7XG5cbiAgICBiaXRBcnJbZmluaXNoICsgMV0gPSAoMSA8PCBpKSAtIDE7XG5cbiAgICBmb3IgKGxldCBqID0gZmluaXNoOyBqID49IHN0YXJ0OyBqIC09IDEpIHtcbiAgICAgIGxldCBjdXJyZW50TG9jYXRpb24gPSBqIC0gMTtcbiAgICAgIGxldCBjaGFyTWF0Y2ggPSBwYXR0ZXJuQWxwaGFiZXRbdGV4dC5jaGFyQXQoY3VycmVudExvY2F0aW9uKV07XG5cbiAgICAgIGlmIChjb21wdXRlTWF0Y2hlcykge1xuICAgICAgICAvLyBTcGVlZCB1cDogcXVpY2sgYm9vbCB0byBpbnQgY29udmVyc2lvbiAoaS5lLCBgY2hhck1hdGNoID8gMSA6IDBgKVxuICAgICAgICBtYXRjaE1hc2tbY3VycmVudExvY2F0aW9uXSA9ICshIWNoYXJNYXRjaDtcbiAgICAgIH1cblxuICAgICAgLy8gRmlyc3QgcGFzczogZXhhY3QgbWF0Y2hcbiAgICAgIGJpdEFycltqXSA9ICgoYml0QXJyW2ogKyAxXSA8PCAxKSB8IDEpICYgY2hhck1hdGNoO1xuXG4gICAgICAvLyBTdWJzZXF1ZW50IHBhc3NlczogZnV6enkgbWF0Y2hcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIGJpdEFycltqXSB8PVxuICAgICAgICAgICgobGFzdEJpdEFycltqICsgMV0gfCBsYXN0Qml0QXJyW2pdKSA8PCAxKSB8IDEgfCBsYXN0Qml0QXJyW2ogKyAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJpdEFycltqXSAmIG1hc2spIHtcbiAgICAgICAgZmluYWxTY29yZSA9IGNvbXB1dGVTY29yZSQxKHBhdHRlcm4sIHtcbiAgICAgICAgICBlcnJvcnM6IGksXG4gICAgICAgICAgY3VycmVudExvY2F0aW9uLFxuICAgICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgICAgaWdub3JlTG9jYXRpb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVGhpcyBtYXRjaCB3aWxsIGFsbW9zdCBjZXJ0YWlubHkgYmUgYmV0dGVyIHRoYW4gYW55IGV4aXN0aW5nIG1hdGNoLlxuICAgICAgICAvLyBCdXQgY2hlY2sgYW55d2F5LlxuICAgICAgICBpZiAoZmluYWxTY29yZSA8PSBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICAgICAgLy8gSW5kZWVkIGl0IGlzXG4gICAgICAgICAgY3VycmVudFRocmVzaG9sZCA9IGZpbmFsU2NvcmU7XG4gICAgICAgICAgYmVzdExvY2F0aW9uID0gY3VycmVudExvY2F0aW9uO1xuXG4gICAgICAgICAgLy8gQWxyZWFkeSBwYXNzZWQgYGxvY2AsIGRvd25oaWxsIGZyb20gaGVyZSBvbiBpbi5cbiAgICAgICAgICBpZiAoYmVzdExvY2F0aW9uIDw9IGV4cGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2hlbiBwYXNzaW5nIGBiZXN0TG9jYXRpb25gLCBkb24ndCBleGNlZWQgb3VyIGN1cnJlbnQgZGlzdGFuY2UgZnJvbSBgZXhwZWN0ZWRMb2NhdGlvbmAuXG4gICAgICAgICAgc3RhcnQgPSBNYXRoLm1heCgxLCAyICogZXhwZWN0ZWRMb2NhdGlvbiAtIGJlc3RMb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBObyBob3BlIGZvciBhIChiZXR0ZXIpIG1hdGNoIGF0IGdyZWF0ZXIgZXJyb3IgbGV2ZWxzLlxuICAgIGNvbnN0IHNjb3JlID0gY29tcHV0ZVNjb3JlJDEocGF0dGVybiwge1xuICAgICAgZXJyb3JzOiBpICsgMSxcbiAgICAgIGN1cnJlbnRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfSk7XG5cbiAgICBpZiAoc2NvcmUgPiBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGxhc3RCaXRBcnIgPSBiaXRBcnI7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSB7XG4gICAgaXNNYXRjaDogYmVzdExvY2F0aW9uID49IDAsXG4gICAgLy8gQ291bnQgZXhhY3QgbWF0Y2hlcyAodGhvc2Ugd2l0aCBhIHNjb3JlIG9mIDApIHRvIGJlIFwiYWxtb3N0XCIgZXhhY3RcbiAgICBzY29yZTogTWF0aC5tYXgoMC4wMDEsIGZpbmFsU2NvcmUpXG4gIH07XG5cbiAgaWYgKGNvbXB1dGVNYXRjaGVzKSB7XG4gICAgY29uc3QgaW5kaWNlcyA9IGNvbnZlcnRNYXNrVG9JbmRpY2VzKG1hdGNoTWFzaywgbWluTWF0Y2hDaGFyTGVuZ3RoKTtcbiAgICBpZiAoIWluZGljZXMubGVuZ3RoKSB7XG4gICAgICByZXN1bHQuaXNNYXRjaCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgIHJlc3VsdC5pbmRpY2VzID0gaW5kaWNlcztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhdHRlcm5BbHBoYWJldChwYXR0ZXJuKSB7XG4gIGxldCBtYXNrID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHBhdHRlcm4ubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBjb25zdCBjaGFyID0gcGF0dGVybi5jaGFyQXQoaSk7XG4gICAgbWFza1tjaGFyXSA9IChtYXNrW2NoYXJdIHx8IDApIHwgKDEgPDwgKGxlbiAtIGkgLSAxKSk7XG4gIH1cblxuICByZXR1cm4gbWFza1xufVxuXG5jbGFzcyBCaXRhcFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdHRlcm4sXG4gICAge1xuICAgICAgbG9jYXRpb24gPSBDb25maWcubG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQgPSBDb25maWcudGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2UsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGZpbmRBbGxNYXRjaGVzID0gQ29uZmlnLmZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvblxuICAgIH0gPSB7fVxuICApIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfTtcblxuICAgIHRoaXMucGF0dGVybiA9IGlzQ2FzZVNlbnNpdGl2ZSA/IHBhdHRlcm4gOiBwYXR0ZXJuLnRvTG93ZXJDYXNlKCk7XG5cbiAgICB0aGlzLmNodW5rcyA9IFtdO1xuXG4gICAgaWYgKCF0aGlzLnBhdHRlcm4ubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhZGRDaHVuayA9IChwYXR0ZXJuLCBzdGFydEluZGV4KSA9PiB7XG4gICAgICB0aGlzLmNodW5rcy5wdXNoKHtcbiAgICAgICAgcGF0dGVybixcbiAgICAgICAgYWxwaGFiZXQ6IGNyZWF0ZVBhdHRlcm5BbHBoYWJldChwYXR0ZXJuKSxcbiAgICAgICAgc3RhcnRJbmRleFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxlbiA9IHRoaXMucGF0dGVybi5sZW5ndGg7XG5cbiAgICBpZiAobGVuID4gTUFYX0JJVFMpIHtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGNvbnN0IHJlbWFpbmRlciA9IGxlbiAlIE1BWF9CSVRTO1xuICAgICAgY29uc3QgZW5kID0gbGVuIC0gcmVtYWluZGVyO1xuXG4gICAgICB3aGlsZSAoaSA8IGVuZCkge1xuICAgICAgICBhZGRDaHVuayh0aGlzLnBhdHRlcm4uc3Vic3RyKGksIE1BWF9CSVRTKSwgaSk7XG4gICAgICAgIGkgKz0gTUFYX0JJVFM7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZW1haW5kZXIpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGxlbiAtIE1BWF9CSVRTO1xuICAgICAgICBhZGRDaHVuayh0aGlzLnBhdHRlcm4uc3Vic3RyKHN0YXJ0SW5kZXgpLCBzdGFydEluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2h1bmsodGhpcy5wYXR0ZXJuLCAwKTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hJbih0ZXh0KSB7XG4gICAgY29uc3QgeyBpc0Nhc2VTZW5zaXRpdmUsIGluY2x1ZGVNYXRjaGVzIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBpZiAoIWlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgdGV4dCA9IHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvLyBFeGFjdCBtYXRjaFxuICAgIGlmICh0aGlzLnBhdHRlcm4gPT09IHRleHQpIHtcbiAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgIGlzTWF0Y2g6IHRydWUsXG4gICAgICAgIHNjb3JlOiAwXG4gICAgICB9O1xuXG4gICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgcmVzdWx0LmluZGljZXMgPSBbWzAsIHRleHQubGVuZ3RoIC0gMV1dO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCB1c2UgQml0YXAgYWxnb3JpdGhtXG4gICAgY29uc3Qge1xuICAgICAgbG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaWdub3JlTG9jYXRpb25cbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgbGV0IGFsbEluZGljZXMgPSBbXTtcbiAgICBsZXQgdG90YWxTY29yZSA9IDA7XG4gICAgbGV0IGhhc01hdGNoZXMgPSBmYWxzZTtcblxuICAgIHRoaXMuY2h1bmtzLmZvckVhY2goKHsgcGF0dGVybiwgYWxwaGFiZXQsIHN0YXJ0SW5kZXggfSkgPT4ge1xuICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSwgaW5kaWNlcyB9ID0gc2VhcmNoKHRleHQsIHBhdHRlcm4sIGFscGhhYmV0LCB7XG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbiArIHN0YXJ0SW5kZXgsXG4gICAgICAgIGRpc3RhbmNlLFxuICAgICAgICB0aHJlc2hvbGQsXG4gICAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgICBpZ25vcmVMb2NhdGlvblxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgIGhhc01hdGNoZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0b3RhbFNjb3JlICs9IHNjb3JlO1xuXG4gICAgICBpZiAoaXNNYXRjaCAmJiBpbmRpY2VzKSB7XG4gICAgICAgIGFsbEluZGljZXMgPSBbLi4uYWxsSW5kaWNlcywgLi4uaW5kaWNlc107XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgaXNNYXRjaDogaGFzTWF0Y2hlcyxcbiAgICAgIHNjb3JlOiBoYXNNYXRjaGVzID8gdG90YWxTY29yZSAvIHRoaXMuY2h1bmtzLmxlbmd0aCA6IDFcbiAgICB9O1xuXG4gICAgaWYgKGhhc01hdGNoZXMgJiYgaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgIHJlc3VsdC5pbmRpY2VzID0gYWxsSW5kaWNlcztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuY2xhc3MgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHRoaXMucGF0dGVybiA9IHBhdHRlcm47XG4gIH1cbiAgc3RhdGljIGlzTXVsdGlNYXRjaChwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGdldE1hdGNoKHBhdHRlcm4sIHRoaXMubXVsdGlSZWdleClcbiAgfVxuICBzdGF0aWMgaXNTaW5nbGVNYXRjaChwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGdldE1hdGNoKHBhdHRlcm4sIHRoaXMuc2luZ2xlUmVnZXgpXG4gIH1cbiAgc2VhcmNoKC8qdGV4dCovKSB7fVxufVxuXG5mdW5jdGlvbiBnZXRNYXRjaChwYXR0ZXJuLCBleHApIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHBhdHRlcm4ubWF0Y2goZXhwKTtcbiAgcmV0dXJuIG1hdGNoZXMgPyBtYXRjaGVzWzFdIDogbnVsbFxufVxuXG4vLyBUb2tlbjogJ2ZpbGVcblxuY2xhc3MgRXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdleGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9ePVwiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXj0oLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0ID09PSB0aGlzLnBhdHRlcm47XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbMCwgdGhpcy5wYXR0ZXJuLmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbi8vIFRva2VuOiAhZmlyZVxuXG5jbGFzcyBJbnZlcnNlRXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdpbnZlcnNlLWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL14hXCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eISguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0ZXh0LmluZGV4T2YodGhpcy5wYXR0ZXJuKTtcbiAgICBjb25zdCBpc01hdGNoID0gaW5kZXggPT09IC0xO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogWzAsIHRleHQubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuLy8gVG9rZW46IF5maWxlXG5cbmNsYXNzIFByZWZpeEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAncHJlZml4LWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL15cXF5cIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL15cXF4oLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0LnN0YXJ0c1dpdGgodGhpcy5wYXR0ZXJuKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0aGlzLnBhdHRlcm4ubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuLy8gVG9rZW46ICFeZmlyZVxuXG5jbGFzcyBJbnZlcnNlUHJlZml4RXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdpbnZlcnNlLXByZWZpeC1leGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eIVxcXlwiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiFcXF4oLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSAhdGV4dC5zdGFydHNXaXRoKHRoaXMucGF0dGVybik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbMCwgdGV4dC5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb2tlbjogLmZpbGUkXG5cbmNsYXNzIFN1ZmZpeEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnc3VmZml4LWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL15cIiguKilcIlxcJCQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14oLiopXFwkJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0LmVuZHNXaXRoKHRoaXMucGF0dGVybik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbdGV4dC5sZW5ndGggLSB0aGlzLnBhdHRlcm4ubGVuZ3RoLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbi8vIFRva2VuOiAhLmZpbGUkXG5cbmNsYXNzIEludmVyc2VTdWZmaXhFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2ludmVyc2Utc3VmZml4LWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL14hXCIoLiopXCJcXCQkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eISguKilcXCQkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaXNNYXRjaCA9ICF0ZXh0LmVuZHNXaXRoKHRoaXMucGF0dGVybik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogWzAsIHRleHQubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgRnV6enlNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdHRlcm4sXG4gICAge1xuICAgICAgbG9jYXRpb24gPSBDb25maWcubG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQgPSBDb25maWcudGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2UsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGZpbmRBbGxNYXRjaGVzID0gQ29uZmlnLmZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvblxuICAgIH0gPSB7fVxuICApIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgICB0aGlzLl9iaXRhcFNlYXJjaCA9IG5ldyBCaXRhcFNlYXJjaChwYXR0ZXJuLCB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfSk7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZnV6enknXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXlwiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2JpdGFwU2VhcmNoLnNlYXJjaEluKHRleHQpXG4gIH1cbn1cblxuLy8gVG9rZW46ICdmaWxlXG5cbmNsYXNzIEluY2x1ZGVNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdpbmNsdWRlJ1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL14nXCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eJyguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgbGV0IGxvY2F0aW9uID0gMDtcbiAgICBsZXQgaW5kZXg7XG5cbiAgICBjb25zdCBpbmRpY2VzID0gW107XG4gICAgY29uc3QgcGF0dGVybkxlbiA9IHRoaXMucGF0dGVybi5sZW5ndGg7XG5cbiAgICAvLyBHZXQgYWxsIGV4YWN0IG1hdGNoZXNcbiAgICB3aGlsZSAoKGluZGV4ID0gdGV4dC5pbmRleE9mKHRoaXMucGF0dGVybiwgbG9jYXRpb24pKSA+IC0xKSB7XG4gICAgICBsb2NhdGlvbiA9IGluZGV4ICsgcGF0dGVybkxlbjtcbiAgICAgIGluZGljZXMucHVzaChbaW5kZXgsIGxvY2F0aW9uIC0gMV0pO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTWF0Y2ggPSAhIWluZGljZXMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlc1xuICAgIH1cbiAgfVxufVxuXG4vLyDinZdPcmRlciBpcyBpbXBvcnRhbnQuIERPIE5PVCBDSEFOR0UuXG5jb25zdCBzZWFyY2hlcnMgPSBbXG4gIEV4YWN0TWF0Y2gsXG4gIEluY2x1ZGVNYXRjaCxcbiAgUHJlZml4RXhhY3RNYXRjaCxcbiAgSW52ZXJzZVByZWZpeEV4YWN0TWF0Y2gsXG4gIEludmVyc2VTdWZmaXhFeGFjdE1hdGNoLFxuICBTdWZmaXhFeGFjdE1hdGNoLFxuICBJbnZlcnNlRXhhY3RNYXRjaCxcbiAgRnV6enlNYXRjaFxuXTtcblxuY29uc3Qgc2VhcmNoZXJzTGVuID0gc2VhcmNoZXJzLmxlbmd0aDtcblxuLy8gUmVnZXggdG8gc3BsaXQgYnkgc3BhY2VzLCBidXQga2VlcCBhbnl0aGluZyBpbiBxdW90ZXMgdG9nZXRoZXJcbmNvbnN0IFNQQUNFX1JFID0gLyArKD89KD86W15cXFwiXSpcXFwiW15cXFwiXSpcXFwiKSpbXlxcXCJdKiQpLztcbmNvbnN0IE9SX1RPS0VOID0gJ3wnO1xuXG4vLyBSZXR1cm4gYSAyRCBhcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcXVlcnksIGZvciBzaW1wbGVyIHBhcnNpbmcuXG4vLyBFeGFtcGxlOlxuLy8gXCJeY29yZSBnbyQgfCByYiQgfCBweSQgeHkkXCIgPT4gW1tcIl5jb3JlXCIsIFwiZ28kXCJdLCBbXCJyYiRcIl0sIFtcInB5JFwiLCBcInh5JFwiXV1cbmZ1bmN0aW9uIHBhcnNlUXVlcnkocGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBwYXR0ZXJuLnNwbGl0KE9SX1RPS0VOKS5tYXAoKGl0ZW0pID0+IHtcbiAgICBsZXQgcXVlcnkgPSBpdGVtXG4gICAgICAudHJpbSgpXG4gICAgICAuc3BsaXQoU1BBQ0VfUkUpXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtICYmICEhaXRlbS50cmltKCkpO1xuXG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcXVlcnkubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5SXRlbSA9IHF1ZXJ5W2ldO1xuXG4gICAgICAvLyAxLiBIYW5kbGUgbXVsdGlwbGUgcXVlcnkgbWF0Y2ggKGkuZSwgb25jZSB0aGF0IGFyZSBxdW90ZWQsIGxpa2UgYFwiaGVsbG8gd29ybGRcImApXG4gICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgIHdoaWxlICghZm91bmQgJiYgKytpZHggPCBzZWFyY2hlcnNMZW4pIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoZXIgPSBzZWFyY2hlcnNbaWR4XTtcbiAgICAgICAgbGV0IHRva2VuID0gc2VhcmNoZXIuaXNNdWx0aU1hdGNoKHF1ZXJ5SXRlbSk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChuZXcgc2VhcmNoZXIodG9rZW4sIG9wdGlvbnMpKTtcbiAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIuIEhhbmRsZSBzaW5nbGUgcXVlcnkgbWF0Y2hlcyAoaS5lLCBvbmNlIHRoYXQgYXJlICpub3QqIHF1b3RlZClcbiAgICAgIGlkeCA9IC0xO1xuICAgICAgd2hpbGUgKCsraWR4IDwgc2VhcmNoZXJzTGVuKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaGVyID0gc2VhcmNoZXJzW2lkeF07XG4gICAgICAgIGxldCB0b2tlbiA9IHNlYXJjaGVyLmlzU2luZ2xlTWF0Y2gocXVlcnlJdGVtKTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG5ldyBzZWFyY2hlcih0b2tlbiwgb3B0aW9ucykpO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9KVxufVxuXG4vLyBUaGVzZSBleHRlbmRlZCBtYXRjaGVycyBjYW4gcmV0dXJuIGFuIGFycmF5IG9mIG1hdGNoZXMsIGFzIG9wcG9zZWRcbi8vIHRvIGEgc2luZ2wgbWF0Y2hcbmNvbnN0IE11bHRpTWF0Y2hTZXQgPSBuZXcgU2V0KFtGdXp6eU1hdGNoLnR5cGUsIEluY2x1ZGVNYXRjaC50eXBlXSk7XG5cbi8qKlxuICogQ29tbWFuZC1saWtlIHNlYXJjaGluZ1xuICogPT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIEdpdmVuIG11bHRpcGxlIHNlYXJjaCB0ZXJtcyBkZWxpbWl0ZWQgYnkgc3BhY2VzLmUuZy4gYF5qc2NyaXB0IC5weXRob24kIHJ1YnkgIWphdmFgLFxuICogc2VhcmNoIGluIGEgZ2l2ZW4gdGV4dC5cbiAqXG4gKiBTZWFyY2ggc3ludGF4OlxuICpcbiAqIHwgVG9rZW4gICAgICAgfCBNYXRjaCB0eXBlICAgICAgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgYGpzY3JpcHRgICAgfCBmdXp6eS1tYXRjaCAgICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgZnV6enkgbWF0Y2ggYGpzY3JpcHRgICAgICAgIHxcbiAqIHwgYD1zY2hlbWVgICAgfCBleGFjdC1tYXRjaCAgICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgYXJlIGBzY2hlbWVgICAgICAgICAgICAgICAgIHxcbiAqIHwgYCdweXRob25gICAgfCBpbmNsdWRlLW1hdGNoICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgaW5jbHVkZSBgcHl0aG9uYCAgICAgICAgICAgIHxcbiAqIHwgYCFydWJ5YCAgICAgfCBpbnZlcnNlLWV4YWN0LW1hdGNoICAgICAgICB8IEl0ZW1zIHRoYXQgZG8gbm90IGluY2x1ZGUgYHJ1YnlgICAgICAgIHxcbiAqIHwgYF5qYXZhYCAgICAgfCBwcmVmaXgtZXhhY3QtbWF0Y2ggICAgICAgICB8IEl0ZW1zIHRoYXQgc3RhcnQgd2l0aCBgamF2YWAgICAgICAgICAgIHxcbiAqIHwgYCFeZWFybGFuZ2AgfCBpbnZlcnNlLXByZWZpeC1leGFjdC1tYXRjaCB8IEl0ZW1zIHRoYXQgZG8gbm90IHN0YXJ0IHdpdGggYGVhcmxhbmdgIHxcbiAqIHwgYC5qcyRgICAgICAgfCBzdWZmaXgtZXhhY3QtbWF0Y2ggICAgICAgICB8IEl0ZW1zIHRoYXQgZW5kIHdpdGggYC5qc2AgICAgICAgICAgICAgIHxcbiAqIHwgYCEuZ28kYCAgICAgfCBpbnZlcnNlLXN1ZmZpeC1leGFjdC1tYXRjaCB8IEl0ZW1zIHRoYXQgZG8gbm90IGVuZCB3aXRoIGAuZ29gICAgICAgIHxcbiAqXG4gKiBBIHNpbmdsZSBwaXBlIGNoYXJhY3RlciBhY3RzIGFzIGFuIE9SIG9wZXJhdG9yLiBGb3IgZXhhbXBsZSwgdGhlIGZvbGxvd2luZ1xuICogcXVlcnkgbWF0Y2hlcyBlbnRyaWVzIHRoYXQgc3RhcnQgd2l0aCBgY29yZWAgYW5kIGVuZCB3aXRoIGVpdGhlcmBnb2AsIGByYmAsXG4gKiBvcmBweWAuXG4gKlxuICogYGBgXG4gKiBeY29yZSBnbyQgfCByYiQgfCBweSRcbiAqIGBgYFxuICovXG5jbGFzcyBFeHRlbmRlZFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdHRlcm4sXG4gICAge1xuICAgICAgaXNDYXNlU2Vuc2l0aXZlID0gQ29uZmlnLmlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uLFxuICAgICAgZmluZEFsbE1hdGNoZXMgPSBDb25maWcuZmluZEFsbE1hdGNoZXMsXG4gICAgICBsb2NhdGlvbiA9IENvbmZpZy5sb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCA9IENvbmZpZy50aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZVxuICAgIH0gPSB7fVxuICApIHtcbiAgICB0aGlzLnF1ZXJ5ID0gbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBpc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgaWdub3JlTG9jYXRpb24sXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlXG4gICAgfTtcblxuICAgIHRoaXMucGF0dGVybiA9IGlzQ2FzZVNlbnNpdGl2ZSA/IHBhdHRlcm4gOiBwYXR0ZXJuLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5xdWVyeSA9IHBhcnNlUXVlcnkodGhpcy5wYXR0ZXJuLCB0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGNvbmRpdGlvbihfLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMudXNlRXh0ZW5kZWRTZWFyY2hcbiAgfVxuXG4gIHNlYXJjaEluKHRleHQpIHtcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMucXVlcnk7XG5cbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc01hdGNoOiBmYWxzZSxcbiAgICAgICAgc2NvcmU6IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IGluY2x1ZGVNYXRjaGVzLCBpc0Nhc2VTZW5zaXRpdmUgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIHRleHQgPSBpc0Nhc2VTZW5zaXRpdmUgPyB0ZXh0IDogdGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgbGV0IG51bU1hdGNoZXMgPSAwO1xuICAgIGxldCBhbGxJbmRpY2VzID0gW107XG4gICAgbGV0IHRvdGFsU2NvcmUgPSAwO1xuXG4gICAgLy8gT1JzXG4gICAgZm9yIChsZXQgaSA9IDAsIHFMZW4gPSBxdWVyeS5sZW5ndGg7IGkgPCBxTGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNlYXJjaGVycyA9IHF1ZXJ5W2ldO1xuXG4gICAgICAvLyBSZXNldCBpbmRpY2VzXG4gICAgICBhbGxJbmRpY2VzLmxlbmd0aCA9IDA7XG4gICAgICBudW1NYXRjaGVzID0gMDtcblxuICAgICAgLy8gQU5Ec1xuICAgICAgZm9yIChsZXQgaiA9IDAsIHBMZW4gPSBzZWFyY2hlcnMubGVuZ3RoOyBqIDwgcExlbjsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaGVyID0gc2VhcmNoZXJzW2pdO1xuICAgICAgICBjb25zdCB7IGlzTWF0Y2gsIGluZGljZXMsIHNjb3JlIH0gPSBzZWFyY2hlci5zZWFyY2godGV4dCk7XG5cbiAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICBudW1NYXRjaGVzICs9IDE7XG4gICAgICAgICAgdG90YWxTY29yZSArPSBzY29yZTtcbiAgICAgICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBzZWFyY2hlci5jb25zdHJ1Y3Rvci50eXBlO1xuICAgICAgICAgICAgaWYgKE11bHRpTWF0Y2hTZXQuaGFzKHR5cGUpKSB7XG4gICAgICAgICAgICAgIGFsbEluZGljZXMgPSBbLi4uYWxsSW5kaWNlcywgLi4uaW5kaWNlc107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhbGxJbmRpY2VzLnB1c2goaW5kaWNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvdGFsU2NvcmUgPSAwO1xuICAgICAgICAgIG51bU1hdGNoZXMgPSAwO1xuICAgICAgICAgIGFsbEluZGljZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE9SIGNvbmRpdGlvbiwgc28gaWYgVFJVRSwgcmV0dXJuXG4gICAgICBpZiAobnVtTWF0Y2hlcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICAgIGlzTWF0Y2g6IHRydWUsXG4gICAgICAgICAgc2NvcmU6IHRvdGFsU2NvcmUgLyBudW1NYXRjaGVzXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgcmVzdWx0LmluZGljZXMgPSBhbGxJbmRpY2VzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdGhpbmcgd2FzIG1hdGNoZWRcbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaDogZmFsc2UsXG4gICAgICBzY29yZTogMVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCByZWdpc3RlcmVkU2VhcmNoZXJzID0gW107XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyKC4uLmFyZ3MpIHtcbiAgcmVnaXN0ZXJlZFNlYXJjaGVycy5wdXNoKC4uLmFyZ3MpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hlcihwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZWdpc3RlcmVkU2VhcmNoZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbGV0IHNlYXJjaGVyQ2xhc3MgPSByZWdpc3RlcmVkU2VhcmNoZXJzW2ldO1xuICAgIGlmIChzZWFyY2hlckNsYXNzLmNvbmRpdGlvbihwYXR0ZXJuLCBvcHRpb25zKSkge1xuICAgICAgcmV0dXJuIG5ldyBzZWFyY2hlckNsYXNzKHBhdHRlcm4sIG9wdGlvbnMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBCaXRhcFNlYXJjaChwYXR0ZXJuLCBvcHRpb25zKVxufVxuXG5jb25zdCBMb2dpY2FsT3BlcmF0b3IgPSB7XG4gIEFORDogJyRhbmQnLFxuICBPUjogJyRvcidcbn07XG5cbmNvbnN0IEtleVR5cGUgPSB7XG4gIFBBVEg6ICckcGF0aCcsXG4gIFBBVFRFUk46ICckdmFsJ1xufTtcblxuY29uc3QgaXNFeHByZXNzaW9uID0gKHF1ZXJ5KSA9PlxuICAhIShxdWVyeVtMb2dpY2FsT3BlcmF0b3IuQU5EXSB8fCBxdWVyeVtMb2dpY2FsT3BlcmF0b3IuT1JdKTtcblxuY29uc3QgaXNQYXRoID0gKHF1ZXJ5KSA9PiAhIXF1ZXJ5W0tleVR5cGUuUEFUSF07XG5cbmNvbnN0IGlzTGVhZiA9IChxdWVyeSkgPT5cbiAgIWlzQXJyYXkocXVlcnkpICYmIGlzT2JqZWN0KHF1ZXJ5KSAmJiAhaXNFeHByZXNzaW9uKHF1ZXJ5KTtcblxuY29uc3QgY29udmVydFRvRXhwbGljaXQgPSAocXVlcnkpID0+ICh7XG4gIFtMb2dpY2FsT3BlcmF0b3IuQU5EXTogT2JqZWN0LmtleXMocXVlcnkpLm1hcCgoa2V5KSA9PiAoe1xuICAgIFtrZXldOiBxdWVyeVtrZXldXG4gIH0pKVxufSk7XG5cbi8vIFdoZW4gYGF1dG9gIGlzIGB0cnVlYCwgdGhlIHBhcnNlIGZ1bmN0aW9uIHdpbGwgaW5mZXIgYW5kIGluaXRpYWxpemUgYW5kIGFkZFxuLy8gdGhlIGFwcHJvcHJpYXRlIGBTZWFyY2hlcmAgaW5zdGFuY2VcbmZ1bmN0aW9uIHBhcnNlKHF1ZXJ5LCBvcHRpb25zLCB7IGF1dG8gPSB0cnVlIH0gPSB7fSkge1xuICBjb25zdCBuZXh0ID0gKHF1ZXJ5KSA9PiB7XG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhxdWVyeSk7XG5cbiAgICBjb25zdCBpc1F1ZXJ5UGF0aCA9IGlzUGF0aChxdWVyeSk7XG5cbiAgICBpZiAoIWlzUXVlcnlQYXRoICYmIGtleXMubGVuZ3RoID4gMSAmJiAhaXNFeHByZXNzaW9uKHF1ZXJ5KSkge1xuICAgICAgcmV0dXJuIG5leHQoY29udmVydFRvRXhwbGljaXQocXVlcnkpKVxuICAgIH1cblxuICAgIGlmIChpc0xlYWYocXVlcnkpKSB7XG4gICAgICBjb25zdCBrZXkgPSBpc1F1ZXJ5UGF0aCA/IHF1ZXJ5W0tleVR5cGUuUEFUSF0gOiBrZXlzWzBdO1xuXG4gICAgICBjb25zdCBwYXR0ZXJuID0gaXNRdWVyeVBhdGggPyBxdWVyeVtLZXlUeXBlLlBBVFRFUk5dIDogcXVlcnlba2V5XTtcblxuICAgICAgaWYgKCFpc1N0cmluZyhwYXR0ZXJuKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTE9HSUNBTF9TRUFSQ0hfSU5WQUxJRF9RVUVSWV9GT1JfS0VZKGtleSkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAga2V5SWQ6IGNyZWF0ZUtleUlkKGtleSksXG4gICAgICAgIHBhdHRlcm5cbiAgICAgIH07XG5cbiAgICAgIGlmIChhdXRvKSB7XG4gICAgICAgIG9iai5zZWFyY2hlciA9IGNyZWF0ZVNlYXJjaGVyKHBhdHRlcm4sIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqXG4gICAgfVxuXG4gICAgbGV0IG5vZGUgPSB7XG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgICBvcGVyYXRvcjoga2V5c1swXVxuICAgIH07XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeVtrZXldO1xuXG4gICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIG5vZGUuY2hpbGRyZW4ucHVzaChuZXh0KGl0ZW0pKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZVxuICB9O1xuXG4gIGlmICghaXNFeHByZXNzaW9uKHF1ZXJ5KSkge1xuICAgIHF1ZXJ5ID0gY29udmVydFRvRXhwbGljaXQocXVlcnkpO1xuICB9XG5cbiAgcmV0dXJuIG5leHQocXVlcnkpXG59XG5cbi8vIFByYWN0aWNhbCBzY29yaW5nIGZ1bmN0aW9uXG5mdW5jdGlvbiBjb21wdXRlU2NvcmUoXG4gIHJlc3VsdHMsXG4gIHsgaWdub3JlRmllbGROb3JtID0gQ29uZmlnLmlnbm9yZUZpZWxkTm9ybSB9XG4pIHtcbiAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQpID0+IHtcbiAgICBsZXQgdG90YWxTY29yZSA9IDE7XG5cbiAgICByZXN1bHQubWF0Y2hlcy5mb3JFYWNoKCh7IGtleSwgbm9ybSwgc2NvcmUgfSkgPT4ge1xuICAgICAgY29uc3Qgd2VpZ2h0ID0ga2V5ID8ga2V5LndlaWdodCA6IG51bGw7XG5cbiAgICAgIHRvdGFsU2NvcmUgKj0gTWF0aC5wb3coXG4gICAgICAgIHNjb3JlID09PSAwICYmIHdlaWdodCA/IE51bWJlci5FUFNJTE9OIDogc2NvcmUsXG4gICAgICAgICh3ZWlnaHQgfHwgMSkgKiAoaWdub3JlRmllbGROb3JtID8gMSA6IG5vcm0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmVzdWx0LnNjb3JlID0gdG90YWxTY29yZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdGNoZXMocmVzdWx0LCBkYXRhKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSByZXN1bHQubWF0Y2hlcztcbiAgZGF0YS5tYXRjaGVzID0gW107XG5cbiAgaWYgKCFpc0RlZmluZWQobWF0Y2hlcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG1hdGNoZXMuZm9yRWFjaCgobWF0Y2gpID0+IHtcbiAgICBpZiAoIWlzRGVmaW5lZChtYXRjaC5pbmRpY2VzKSB8fCAhbWF0Y2guaW5kaWNlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgaW5kaWNlcywgdmFsdWUgfSA9IG1hdGNoO1xuXG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIGluZGljZXMsXG4gICAgICB2YWx1ZVxuICAgIH07XG5cbiAgICBpZiAobWF0Y2gua2V5KSB7XG4gICAgICBvYmoua2V5ID0gbWF0Y2gua2V5LnNyYztcbiAgICB9XG5cbiAgICBpZiAobWF0Y2guaWR4ID4gLTEpIHtcbiAgICAgIG9iai5yZWZJbmRleCA9IG1hdGNoLmlkeDtcbiAgICB9XG5cbiAgICBkYXRhLm1hdGNoZXMucHVzaChvYmopO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU2NvcmUocmVzdWx0LCBkYXRhKSB7XG4gIGRhdGEuc2NvcmUgPSByZXN1bHQuc2NvcmU7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChcbiAgcmVzdWx0cyxcbiAgZG9jcyxcbiAge1xuICAgIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICAgIGluY2x1ZGVTY29yZSA9IENvbmZpZy5pbmNsdWRlU2NvcmVcbiAgfSA9IHt9XG4pIHtcbiAgY29uc3QgdHJhbnNmb3JtZXJzID0gW107XG5cbiAgaWYgKGluY2x1ZGVNYXRjaGVzKSB0cmFuc2Zvcm1lcnMucHVzaCh0cmFuc2Zvcm1NYXRjaGVzKTtcbiAgaWYgKGluY2x1ZGVTY29yZSkgdHJhbnNmb3JtZXJzLnB1c2godHJhbnNmb3JtU2NvcmUpO1xuXG4gIHJldHVybiByZXN1bHRzLm1hcCgocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgeyBpZHggfSA9IHJlc3VsdDtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBpdGVtOiBkb2NzW2lkeF0sXG4gICAgICByZWZJbmRleDogaWR4XG4gICAgfTtcblxuICAgIGlmICh0cmFuc2Zvcm1lcnMubGVuZ3RoKSB7XG4gICAgICB0cmFuc2Zvcm1lcnMuZm9yRWFjaCgodHJhbnNmb3JtZXIpID0+IHtcbiAgICAgICAgdHJhbnNmb3JtZXIocmVzdWx0LCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG4gIH0pXG59XG5cbmNsYXNzIEZ1c2Uge1xuICBjb25zdHJ1Y3Rvcihkb2NzLCBvcHRpb25zID0ge30sIGluZGV4KSB7XG4gICAgdGhpcy5vcHRpb25zID0geyAuLi5Db25maWcsIC4uLm9wdGlvbnMgfTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9ucy51c2VFeHRlbmRlZFNlYXJjaCAmJlxuICAgICAgIXRydWVcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihFWFRFTkRFRF9TRUFSQ0hfVU5BVkFJTEFCTEUpXG4gICAgfVxuXG4gICAgdGhpcy5fa2V5U3RvcmUgPSBuZXcgS2V5U3RvcmUodGhpcy5vcHRpb25zLmtleXMpO1xuXG4gICAgdGhpcy5zZXRDb2xsZWN0aW9uKGRvY3MsIGluZGV4KTtcbiAgfVxuXG4gIHNldENvbGxlY3Rpb24oZG9jcywgaW5kZXgpIHtcbiAgICB0aGlzLl9kb2NzID0gZG9jcztcblxuICAgIGlmIChpbmRleCAmJiAhKGluZGV4IGluc3RhbmNlb2YgRnVzZUluZGV4KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKElOQ09SUkVDVF9JTkRFWF9UWVBFKVxuICAgIH1cblxuICAgIHRoaXMuX215SW5kZXggPVxuICAgICAgaW5kZXggfHxcbiAgICAgIGNyZWF0ZUluZGV4KHRoaXMub3B0aW9ucy5rZXlzLCB0aGlzLl9kb2NzLCB7XG4gICAgICAgIGdldEZuOiB0aGlzLm9wdGlvbnMuZ2V0Rm4sXG4gICAgICAgIGZpZWxkTm9ybVdlaWdodDogdGhpcy5vcHRpb25zLmZpZWxkTm9ybVdlaWdodFxuICAgICAgfSk7XG4gIH1cblxuICBhZGQoZG9jKSB7XG4gICAgaWYgKCFpc0RlZmluZWQoZG9jKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZG9jcy5wdXNoKGRvYyk7XG4gICAgdGhpcy5fbXlJbmRleC5hZGQoZG9jKTtcbiAgfVxuXG4gIHJlbW92ZShwcmVkaWNhdGUgPSAoLyogZG9jLCBpZHggKi8pID0+IGZhbHNlKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuX2RvY3MubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGRvYyA9IHRoaXMuX2RvY3NbaV07XG4gICAgICBpZiAocHJlZGljYXRlKGRvYywgaSkpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBdChpKTtcbiAgICAgICAgaSAtPSAxO1xuICAgICAgICBsZW4gLT0gMTtcblxuICAgICAgICByZXN1bHRzLnB1c2goZG9jKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgcmVtb3ZlQXQoaWR4KSB7XG4gICAgdGhpcy5fZG9jcy5zcGxpY2UoaWR4LCAxKTtcbiAgICB0aGlzLl9teUluZGV4LnJlbW92ZUF0KGlkeCk7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbXlJbmRleFxuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5LCB7IGxpbWl0ID0gLTEgfSA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBpbmNsdWRlU2NvcmUsXG4gICAgICBzaG91bGRTb3J0LFxuICAgICAgc29ydEZuLFxuICAgICAgaWdub3JlRmllbGROb3JtXG4gICAgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGxldCByZXN1bHRzID0gaXNTdHJpbmcocXVlcnkpXG4gICAgICA/IGlzU3RyaW5nKHRoaXMuX2RvY3NbMF0pXG4gICAgICAgID8gdGhpcy5fc2VhcmNoU3RyaW5nTGlzdChxdWVyeSlcbiAgICAgICAgOiB0aGlzLl9zZWFyY2hPYmplY3RMaXN0KHF1ZXJ5KVxuICAgICAgOiB0aGlzLl9zZWFyY2hMb2dpY2FsKHF1ZXJ5KTtcblxuICAgIGNvbXB1dGVTY29yZShyZXN1bHRzLCB7IGlnbm9yZUZpZWxkTm9ybSB9KTtcblxuICAgIGlmIChzaG91bGRTb3J0KSB7XG4gICAgICByZXN1bHRzLnNvcnQoc29ydEZuKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOdW1iZXIobGltaXQpICYmIGxpbWl0ID4gLTEpIHtcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKDAsIGxpbWl0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0KHJlc3VsdHMsIHRoaXMuX2RvY3MsIHtcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgaW5jbHVkZVNjb3JlXG4gICAgfSlcbiAgfVxuXG4gIF9zZWFyY2hTdHJpbmdMaXN0KHF1ZXJ5KSB7XG4gICAgY29uc3Qgc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihxdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICBjb25zdCB7IHJlY29yZHMgfSA9IHRoaXMuX215SW5kZXg7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IHN0cmluZyBpbiB0aGUgaW5kZXhcbiAgICByZWNvcmRzLmZvckVhY2goKHsgdjogdGV4dCwgaTogaWR4LCBuOiBub3JtIH0pID0+IHtcbiAgICAgIGlmICghaXNEZWZpbmVkKHRleHQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlLCBpbmRpY2VzIH0gPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcblxuICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICBpdGVtOiB0ZXh0LFxuICAgICAgICAgIGlkeCxcbiAgICAgICAgICBtYXRjaGVzOiBbeyBzY29yZSwgdmFsdWU6IHRleHQsIG5vcm0sIGluZGljZXMgfV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgX3NlYXJjaExvZ2ljYWwocXVlcnkpIHtcblxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBwYXJzZShxdWVyeSwgdGhpcy5vcHRpb25zKTtcblxuICAgIGNvbnN0IGV2YWx1YXRlID0gKG5vZGUsIGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgaWYgKCFub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IHsga2V5SWQsIHNlYXJjaGVyIH0gPSBub2RlO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLl9maW5kTWF0Y2hlcyh7XG4gICAgICAgICAga2V5OiB0aGlzLl9rZXlTdG9yZS5nZXQoa2V5SWQpLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLl9teUluZGV4LmdldFZhbHVlRm9ySXRlbUF0S2V5SWQoaXRlbSwga2V5SWQpLFxuICAgICAgICAgIHNlYXJjaGVyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWR4LFxuICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICBtYXRjaGVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBldmFsdWF0ZShjaGlsZCwgaXRlbSwgaWR4KTtcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICByZXMucHVzaCguLi5yZXN1bHQpO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUub3BlcmF0b3IgPT09IExvZ2ljYWxPcGVyYXRvci5BTkQpIHtcbiAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc1xuICAgIH07XG5cbiAgICBjb25zdCByZWNvcmRzID0gdGhpcy5fbXlJbmRleC5yZWNvcmRzO1xuICAgIGNvbnN0IHJlc3VsdE1hcCA9IHt9O1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgIHJlY29yZHMuZm9yRWFjaCgoeyAkOiBpdGVtLCBpOiBpZHggfSkgPT4ge1xuICAgICAgaWYgKGlzRGVmaW5lZChpdGVtKSkge1xuICAgICAgICBsZXQgZXhwUmVzdWx0cyA9IGV2YWx1YXRlKGV4cHJlc3Npb24sIGl0ZW0sIGlkeCk7XG5cbiAgICAgICAgaWYgKGV4cFJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gRGVkdXBlIHdoZW4gYWRkaW5nXG4gICAgICAgICAgaWYgKCFyZXN1bHRNYXBbaWR4XSkge1xuICAgICAgICAgICAgcmVzdWx0TWFwW2lkeF0gPSB7IGlkeCwgaXRlbSwgbWF0Y2hlczogW10gfTtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHRNYXBbaWR4XSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGV4cFJlc3VsdHMuZm9yRWFjaCgoeyBtYXRjaGVzIH0pID0+IHtcbiAgICAgICAgICAgIHJlc3VsdE1hcFtpZHhdLm1hdGNoZXMucHVzaCguLi5tYXRjaGVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIF9zZWFyY2hPYmplY3RMaXN0KHF1ZXJ5KSB7XG4gICAgY29uc3Qgc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihxdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICBjb25zdCB7IGtleXMsIHJlY29yZHMgfSA9IHRoaXMuX215SW5kZXg7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgLy8gTGlzdCBpcyBBcnJheTxPYmplY3Q+XG4gICAgcmVjb3Jkcy5mb3JFYWNoKCh7ICQ6IGl0ZW0sIGk6IGlkeCB9KSA9PiB7XG4gICAgICBpZiAoIWlzRGVmaW5lZChpdGVtKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGtleSAoaS5lLCBwYXRoKSwgYW5kIGZldGNoIHRoZSB2YWx1ZSBhdCB0aGF0IGtleVxuICAgICAga2V5cy5mb3JFYWNoKChrZXksIGtleUluZGV4KSA9PiB7XG4gICAgICAgIG1hdGNoZXMucHVzaChcbiAgICAgICAgICAuLi50aGlzLl9maW5kTWF0Y2hlcyh7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB2YWx1ZTogaXRlbVtrZXlJbmRleF0sXG4gICAgICAgICAgICBzZWFyY2hlclxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgaWR4LFxuICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgbWF0Y2hlc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cbiAgX2ZpbmRNYXRjaGVzKHsga2V5LCB2YWx1ZSwgc2VhcmNoZXIgfSkge1xuICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoeyB2OiB0ZXh0LCBpOiBpZHgsIG46IG5vcm0gfSkgPT4ge1xuICAgICAgICBpZiAoIWlzRGVmaW5lZCh0ZXh0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSwgaW5kaWNlcyB9ID0gc2VhcmNoZXIuc2VhcmNoSW4odGV4dCk7XG5cbiAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICBtYXRjaGVzLnB1c2goe1xuICAgICAgICAgICAgc2NvcmUsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdGV4dCxcbiAgICAgICAgICAgIGlkeCxcbiAgICAgICAgICAgIG5vcm0sXG4gICAgICAgICAgICBpbmRpY2VzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IHY6IHRleHQsIG46IG5vcm0gfSA9IHZhbHVlO1xuXG4gICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlLCBpbmRpY2VzIH0gPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcblxuICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgbWF0Y2hlcy5wdXNoKHsgc2NvcmUsIGtleSwgdmFsdWU6IHRleHQsIG5vcm0sIGluZGljZXMgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNcbiAgfVxufVxuXG5GdXNlLnZlcnNpb24gPSAnNy4wLjAnO1xuRnVzZS5jcmVhdGVJbmRleCA9IGNyZWF0ZUluZGV4O1xuRnVzZS5wYXJzZUluZGV4ID0gcGFyc2VJbmRleDtcbkZ1c2UuY29uZmlnID0gQ29uZmlnO1xuXG57XG4gIEZ1c2UucGFyc2VRdWVyeSA9IHBhcnNlO1xufVxuXG57XG4gIHJlZ2lzdGVyKEV4dGVuZGVkU2VhcmNoKTtcbn1cblxuZXhwb3J0IHsgRnVzZSBhcyBkZWZhdWx0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHN1bW1hcml6ZSB9IGZyb20gJy4uL2FpL3N1bW1hcml6ZXIuanMnO1xuaW1wb3J0IHsgZ2V0SGlzdG9yeVdpdGhUb3BOU3RhdHMgfSBmcm9tICcuL2hpc3RvcnkuanMnO1xuaW1wb3J0IHsgZW5hYmxlUmVzaXppbmcsIGNyZWF0ZU9yR2V0V2lkZ2V0LCBhZGp1c3RXaWRnZXRTaXplIH0gZnJvbSAnLi93aWRnZXRzLmpzJztcbmltcG9ydCB7IGV4dHJhY3REb21haW4sIG1hcmtkb3duVG9IdG1sLCBjbGVhbklucHV0IH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5sZXQgc3RhcnREYXRlLCBlbmREYXRlLCB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcztcblxuLy8gR2xvYmFsIHZhcmlhYmxlcyB0byBzdG9yZSBzZWxlY3RlZCBmaWx0ZXJzXG5sZXQgc2VsZWN0ZWRGaWx0ZXJzID0gW107XG5sZXQgZXhjbHVkZUZpbHRlcnMgPSBbXTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcbiAgICBhZGREYXRlUmFuZ2VCdXR0b25zKCk7XG4gICAgYWRkUmVmcmVzaEJ1dHRvbigpO1xuICAgIHNldERhdGVSYW5nZSgnMjRoJyk7XG4gICAgLy8gSW5pdGlhbGl6ZSBjYXRlZ29yeSBhbmQgZXhjbHVkZSBmaWx0ZXJzXG4gICAgYXdhaXQgaW5pdGlhbGl6ZUZpbHRlcnMoKTtcbiAgICBhZGRPclVwZGF0ZVJlY2VudEhpc3RvcnlXaWRnZXQoKTtcbiAgICBhZGRPclVwZGF0ZUJhc2ljU3VtbWFyeVdpZGdldCgpO1xuICAgIGVuYWJsZVJlc2l6aW5nKCk7XG4gIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWZyZXNoLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbG9hZENvbnRlbnQoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrLW1vZGUtdG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyay1tb2RlJyk7XG4gICAgICAgIC8vIE9wdGlvbmFsOiBTYXZlIHVzZXIgcHJlZmVyZW5jZSB1c2luZyBsb2NhbFN0b3JhZ2VcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrLW1vZGUnKSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2RhcmsnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdsaWdodCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBcHBseSBzYXZlZCB0aGVtZSBvbiBsb2FkXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcbiAgICAgICAgaWYgKHNhdmVkVGhlbWUgPT09ICdkYXJrJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGFkZFJlZnJlc2hCdXR0b24oKSB7XG4gIGNvbnN0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVmcmVzaEJ1dHRvbi5pZCA9ICdyZWZyZXNoLWJ1dHRvbic7XG4gIHJlZnJlc2hCdXR0b24udGV4dENvbnRlbnQgPSAnUmVmcmVzaCc7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcmFuZ2UtY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZWZyZXNoQnV0dG9uKTtcbn1cblxuLyogSW5pdGlhbGl6ZSBEYXRlIFJhbmdlIElucHV0cyAqL1xuZnVuY3Rpb24gYWRkRGF0ZVJhbmdlQnV0dG9ucygpIHtcbiAgXG4gIGNvbnN0IGJ1dHRvbkRhdGEgPSBbXG4gICAgICB7IGxhYmVsOiAnTGFzdCAyNCBIb3VycycsIHJhbmdlOiAnMjRoJyB9LFxuICAgICAgeyBsYWJlbDogJ0xhc3QgV2VlaycsIHJhbmdlOiAnMXcnIH0sXG4gICAgICB7IGxhYmVsOiAnTGFzdCBNb250aCcsIHJhbmdlOiAnMW0nIH0sXG4gICAgICB7IGxhYmVsOiAnTGFzdCAzIE1vbnRocycsIHJhbmdlOiAnM20nIH0sXG4gICAgICB7IGxhYmVsOiAnTGFzdCA2IE1vbnRocycsIHJhbmdlOiAnNm0nIH0sXG4gICAgICAvLyBUT0RPOiBhZGQgbW9udGggd2lzZSBvcHRpb25zIGluIGRyb3AgZG93blxuICAgICAgeyBsYWJlbDogJ0phbnVhcnknLCByYW5nZTogJ2phbicgfSxcbiAgICAgIHsgbGFiZWw6ICdGZWJydWFyeScsIHJhbmdlOiAnZmViJyB9LFxuICAgICAgeyBsYWJlbDogJ01hcmNoJywgcmFuZ2U6ICdtYXInIH1cblxuICBdO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXJhbmdlLWNvbnRhaW5lcicpO1xuXG4gIGJ1dHRvbkRhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdkYXRlLXJhbmdlLWJ1dHRvbic7XG4gICAgICBidXR0b24udGV4dENvbnRlbnQgPSBkYXRhLmxhYmVsO1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1yYW5nZScsIGRhdGEucmFuZ2UpO1xuXG4gICAgICAvLyBIaWdobGlnaHQgdGhlIGRlZmF1bHQgc2VsZWN0ZWQgYnV0dG9uXG4gICAgICBpZiAoZGF0YS5yYW5nZSA9PT0gJzI0aCcpIHtcbiAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHNldERhdGVSYW5nZShkYXRhLnJhbmdlKTtcbiAgICAgICAgICBsb2FkQ29udGVudCgpO1xuXG4gICAgICAgICAgLy8gUmVtb3ZlICdzZWxlY3RlZCcgY2xhc3MgZnJvbSBhbGwgYnV0dG9uc1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlLXJhbmdlLWJ1dHRvbicpLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBBZGQgJ3NlbGVjdGVkJyBjbGFzcyB0byB0aGUgY2xpY2tlZCBidXR0b25cbiAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldERhdGVSYW5nZShyYW5nZSkge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbiAgc3dpdGNoIChyYW5nZSkge1xuICAgICAgY2FzZSAnMjRoJzpcbiAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheSk7XG4gICAgICAgICAgc3RhcnREYXRlLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpIC0gMSk7XG4gICAgICAgICAgZW5kRGF0ZSA9IHRvZGF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnMXcnOlxuICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICAgICAgICBzdGFydERhdGUuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgLSA3KTtcbiAgICAgICAgICBlbmREYXRlID0gdG9kYXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcxbSc6XG4gICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkpO1xuICAgICAgICAgIHN0YXJ0RGF0ZS5zZXRNb250aCh0b2RheS5nZXRNb250aCgpIC0gMSk7XG4gICAgICAgICAgZW5kRGF0ZSA9IHRvZGF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnM20nOlxuICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICAgICAgICBzdGFydERhdGUuc2V0TW9udGgodG9kYXkuZ2V0TW9udGgoKSAtIDMpO1xuICAgICAgICAgIGVuZERhdGUgPSB0b2RheTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzZtJzpcbiAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheSk7XG4gICAgICAgICAgc3RhcnREYXRlLnNldE1vbnRoKHRvZGF5LmdldE1vbnRoKCkgLSA2KTtcbiAgICAgICAgICBlbmREYXRlID0gdG9kYXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdqYW4nOlxuICAgICAgY2FzZSAnZmViJzpcbiAgICAgIGNhc2UgJ21hcic6XG4gICAgICAgICAgY29uc3QgbW9udGhNYXAgPSB7IGphbjogMCwgZmViOiAxLCBtYXI6IDIgfTtcbiAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCBtb250aE1hcFtyYW5nZV0sIDEpO1xuICAgICAgICAgIGVuZERhdGUgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCBtb250aE1hcFtyYW5nZV0gKyAxLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkpO1xuICAgICAgICAgIGVuZERhdGUgPSB0b2RheTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSBkaXNwbGF5IGRhdGVzXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5LXN0YXJ0LWRhdGUnKS50ZXh0Q29udGVudCA9IHN0YXJ0RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktZW5kLWRhdGUnKS50ZXh0Q29udGVudCA9IGVuZERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG59XG5cbi8qIEFkZCBPdmVyYWxsIFN1bW1hcnkgV2lkZ2V0ICovXG5hc3luYyBmdW5jdGlvbiBhZGRPclVwZGF0ZVJlY2VudEhpc3RvcnlXaWRnZXQoKSB7XG4gIGNvbnN0IG5ld1dpZGdldCA9IGNyZWF0ZU9yR2V0V2lkZ2V0KCdyZWNlbnQtaGlzdG9yeScsICdSZWNlbnQgSGlzdG9yeScpO1xuXG4gIC8vIGRlbGV0ZSBjaGlsZHJlbiBjb250YWluaW5nICpyZWNlbnQtaGlzdG9yeS1jb250ZW50cypcbiAgd2hpbGUgKG5ld1dpZGdldC5sYXN0Q2hpbGQgJiYgbmV3V2lkZ2V0Lmxhc3RDaGlsZC5pZCAmJiBuZXdXaWRnZXQubGFzdENoaWxkLmlkLmluY2x1ZGVzKCdyZWNlbnQtaGlzdG9yeS1jb250ZW50cycpKSB7XG4gICAgICBuZXdXaWRnZXQucmVtb3ZlQ2hpbGQobmV3V2lkZ2V0Lmxhc3RDaGlsZCk7XG4gIH1cblxuICBjcmVhdGVSZWNlbnRIaXN0b3J5RWxlbWVudCgpLnRoZW4oKHdpZGdldCkgPT4ge1xuICAgICAgbmV3V2lkZ2V0LmFwcGVuZENoaWxkKHdpZGdldCk7XG4gICAgICAvLyBhZGp1c3Qgc2l6ZSBvZiBuZXdXaWRnZXRcbiAgICAgIGNvbnNvbGUubG9nKCdhZGp1c3Rpbmcgc2l6ZSBvZiBuZXdXaWRnZXQnKTtcbiAgICAgIGFkanVzdFdpZGdldFNpemUobmV3V2lkZ2V0KTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZE9yVXBkYXRlQmFzaWNTdW1tYXJ5V2lkZ2V0KCkge1xuICBjb25zdCBuZXdXaWRnZXQgPSBjcmVhdGVPckdldFdpZGdldCgnYmFzaWMtc3VtbWFyeScsICdTdW1tYXJ5Jyk7XG5cbiAgLy8gZGVsZXRlIGNoaWxkcmVuIGNvbnRhaW5pbmcgKmNvbnRlbnRzKlxuICB3aGlsZSAobmV3V2lkZ2V0Lmxhc3RDaGlsZCAmJiBuZXdXaWRnZXQubGFzdENoaWxkLmlkICYmIG5ld1dpZGdldC5sYXN0Q2hpbGQuaWQuaW5jbHVkZXMoJ2NvbnRlbnRzJykpIHtcbiAgICAgIG5ld1dpZGdldC5yZW1vdmVDaGlsZChuZXdXaWRnZXQubGFzdENoaWxkKTtcbiAgfVxuXG4gIGF3YWl0IGNyZWF0ZUJhc2ljU3VtbWFyeUVsZW1lbnQobmV3V2lkZ2V0KTtcbn1cblxuLyogTG9hZCBDb250ZW50IEJhc2VkIG9uIERhdGUgUmFuZ2UgKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRDb250ZW50KCkge1xuICBjb25zb2xlLmxvZygnU2VsZWN0ZWQgRmlsdGVyczonLCBzZWxlY3RlZEZpbHRlcnMpO1xuICBjb25zb2xlLmxvZygnRXhjbHVkZSBGaWx0ZXJzOicsIGV4Y2x1ZGVGaWx0ZXJzKTtcbiAgYXdhaXQgYWRkT3JVcGRhdGVSZWNlbnRIaXN0b3J5V2lkZ2V0KCk7XG4gIGF3YWl0IGFkZE9yVXBkYXRlQmFzaWNTdW1tYXJ5V2lkZ2V0KCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlY2VudEhpc3RvcnlFbGVtZW50KCkge1xuICB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcyA9IGF3YWl0IGdldEhpc3RvcnlXaXRoVG9wTlN0YXRzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgMTAsIHNlbGVjdGVkRmlsdGVycywgZXhjbHVkZUZpbHRlcnMpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdoaXN0b3J5LWNvbnRhaW5lcic7XG4gIGNvbnRhaW5lci5pZCA9ICdyZWNlbnQtaGlzdG9yeS1jb250ZW50cyc7XG5cbiAgdG9wTkhvc3RuYW1lc1dpdGhUaXRsZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAvLyBDcmVhdGUgdGhlIG1haW4gYm94IGZvciBlYWNoIGhvc3RuYW1lXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm94LmNsYXNzTmFtZSA9ICdoaXN0b3J5LWJveCc7XG5cbiAgICAvLyBGaXJzdCBwYXJ0OiBIb3N0bmFtZSBhbmQgaGl0IGNvdW50IHdpdGggYW4gaWNvblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSAnaGlzdG9yeS1oZWFkZXInO1xuXG4gICAgY29uc3QgaG9zdG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIC8vIEFkZCBhbiBpY29uIGJlZm9yZSB0aGUgaG9zdG5hbWVcbiAgICBob3N0bmFtZS5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtZ2xvYmUtYW1lcmljYXNcIj48L2k+ICR7aXRlbS5ob3N0bmFtZX1gO1xuXG4gICAgY29uc3QgaGl0Q291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaGl0Q291bnQuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLWNoYXJ0LWxpbmVcIj48L2k+IEhpdCBDb3VudDogJHtpdGVtLmNvdW50fWA7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaG9zdG5hbWUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoaXRDb3VudCk7XG5cbiAgICAvLyBTZWNvbmQgcGFydDogVGl0bGVzIHdpdGggVVJMc1xuICAgIGNvbnN0IHRpdGxlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlc0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGl0bGVzLWNvbnRhaW5lcic7XG5cbiAgICBjb25zdCB0aXRsZXNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIC8vIEluaXRpYWwgZGlzcGxheSBjb3VudFxuICAgIGNvbnN0IGluaXRpYWxEaXNwbGF5Q291bnQgPSAxMDtcbiAgICBjb25zdCBhZGRpdGlvbmFsTG9hZENvdW50ID0gMjA7XG5cbiAgICAvLyBEZXRlcm1pbmUgaG93IG1hbnkgdGl0bGVzIHRvIHNob3cgaW5pdGlhbGx5XG4gICAgY29uc3QgZGlzcGxheWVkVGl0bGVzID0gaXRlbS50aXRsZXMuc2xpY2UoMCwgaW5pdGlhbERpc3BsYXlDb3VudCk7XG4gICAgZGlzcGxheWVkVGl0bGVzLmZvckVhY2godGl0bGVJdGVtID0+IHtcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBsaW5rLmhyZWYgPSB0aXRsZUl0ZW0udXJsO1xuICAgICAgbGluay50ZXh0Q29udGVudCA9IHRpdGxlSXRlbS50aXRsZTtcbiAgICAgIGxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgIHRpdGxlc0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgdGl0bGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlc0xpc3QpO1xuXG4gICAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgdGl0bGVzLCBhZGQgYSBcIm1vcmVcIiBidXR0b25cbiAgICBpZiAoaXRlbS50aXRsZXMubGVuZ3RoID4gaW5pdGlhbERpc3BsYXlDb3VudCkge1xuICAgICAgY29uc3QgbW9yZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgbW9yZUJ1dHRvbi5jbGFzc05hbWUgPSAnbW9yZS1idXR0b24nO1xuICAgICAgbW9yZUJ1dHRvbi50ZXh0Q29udGVudCA9IGBhbmQgJHtpdGVtLnRpdGxlcy5sZW5ndGggLSBpbml0aWFsRGlzcGxheUNvdW50fSBtb3JlLi4uYDtcbiAgICAgIG1vcmVCdXR0b24uZGF0YXNldC5ob3N0bmFtZSA9IGl0ZW0uaG9zdG5hbWU7IC8vIEZvciBpZGVudGlmeWluZyB3aGljaCBib3ggdG8gZXhwYW5kXG5cbiAgICAgIG1vcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvYWRNb3JlVGl0bGVzKGl0ZW0sIHRpdGxlc0xpc3QsIG1vcmVCdXR0b24sIGluaXRpYWxEaXNwbGF5Q291bnQsIGFkZGl0aW9uYWxMb2FkQ291bnQpO1xuICAgICAgfSk7XG5cbiAgICAgIHRpdGxlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb3JlQnV0dG9uKTtcbiAgICB9XG5cbiAgICAvLyBBc3NlbWJsZSB0aGUgYm94XG4gICAgYm94LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgYm94LmFwcGVuZENoaWxkKHRpdGxlc0NvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJveCk7XG4gIH0pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJhc2ljU3VtbWFyeUVsZW1lbnQobmV3V2lkZ2V0KSB7XG4gIGNvbnN0IHRvcE5Ib3N0bmFtZXNXaXRoVGl0bGVzID0gYXdhaXQgZ2V0SGlzdG9yeVdpdGhUb3BOU3RhdHMoc3RhcnREYXRlLCBlbmREYXRlLCAxMCwgc2VsZWN0ZWRGaWx0ZXJzLCBleGNsdWRlRmlsdGVycyk7XG4gIGNvbnN0IGhpc3RvcnlJdGVtcyA9IHRvcE5Ib3N0bmFtZXNXaXRoVGl0bGVzLm1hcChpdGVtID0+IGl0ZW0udGl0bGVzKS5mbGF0KCk7XG5cbiAgLy8gQXBwZW5kIGFsbCBoaXN0b3J5IGl0ZW1zIHRvIGEgc2luZ2xlIHN0cmluZ1xuICBjb25zdCBoaXN0b3J5SXRlbVRpdGxlcyA9IGhpc3RvcnlJdGVtcy5tYXAoaXRlbSA9PiBpdGVtLnRpdGxlKS5qb2luKCcsICcpO1xuXG4gIC8vIENyZWF0ZSBjaHVua3Mgb2YgNDAwMCBjaGFyYWN0ZXJzXG4gIGNvbnN0IGNodW5rcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGhpc3RvcnlJdGVtVGl0bGVzLmxlbmd0aDsgaSArPSAyMDAwKSB7XG4gICAgY2h1bmtzLnB1c2goaGlzdG9yeUl0ZW1UaXRsZXMuc2xpY2UoaSwgaSArIDIwMDApKTtcbiAgfVxuXG4gIC8vIFN1bW1hcml6ZSBlYWNoIGNodW5rIGFuZCBhcHBlbmQgdG8gdGhlIHJlc3VsdFxuICBmb3IgKGNvbnN0IGNodW5rIG9mIGNodW5rcykge1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBzdW1tYXJpemUoY2xlYW5JbnB1dChjaHVuaykpO1xuXG4gICAgbGV0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHRFbGVtZW50LmlkID0gJ2Jhc2ljLXN1bW1hcnktY29udGVudHMnO1xuXG4gICAgdGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gbWFya2Rvd25Ub0h0bWwocmVzdWx0KTtcbiAgICBuZXdXaWRnZXQuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRNb3JlVGl0bGVzKGl0ZW0sIHRpdGxlc0xpc3QsIG1vcmVCdXR0b24sIGluaXRpYWxDb3VudCwgbG9hZENvdW50KSB7XG4gIC8vIERldGVybWluZSB0aGUgY3VycmVudCBudW1iZXIgb2YgdGl0bGVzIGRpc3BsYXllZFxuICBjb25zdCBjdXJyZW50Q291bnQgPSB0aXRsZXNMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykubGVuZ3RoO1xuICBjb25zdCBuZXh0Q291bnQgPSBjdXJyZW50Q291bnQgKyBsb2FkQ291bnQ7XG4gIGNvbnN0IHRpdGxlc1RvQWRkID0gaXRlbS50aXRsZXMuc2xpY2UoY3VycmVudENvdW50LCBuZXh0Q291bnQpO1xuXG4gIHRpdGxlc1RvQWRkLmZvckVhY2godGl0bGVJdGVtID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rLmhyZWYgPSB0aXRsZUl0ZW0udXJsO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSB0aXRsZUl0ZW0udGl0bGU7XG4gICAgbGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB0aXRsZXNMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfSk7XG5cbiAgLy8gVXBkYXRlIHRoZSByZW1haW5pbmcgY291bnRcbiAgY29uc3QgcmVtYWluaW5nID0gaXRlbS50aXRsZXMubGVuZ3RoIC0gbmV4dENvdW50O1xuXG4gIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgbW9yZUJ1dHRvbi50ZXh0Q29udGVudCA9IGBhbmQgJHtyZW1haW5pbmd9IG1vcmUuLi5gO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlbW92ZSB0aGUgXCJtb3JlXCIgYnV0dG9uIGlmIG5vIG1vcmUgdGl0bGVzIGFyZSBsZWZ0XG4gICAgbW9yZUJ1dHRvbi5yZW1vdmUoKTtcbiAgfVxufVxuXG4vKiBJbml0aWFsaXplIEZpbHRlcnMgKFRhZyBGaWx0ZXJzIGFuZCBFeGNsdWRlIFRhZ3MpICovXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplRmlsdGVycygpIHtcbiAgICBhd2FpdCBpbml0aWFsaXplQ2F0ZWdvcnlGaWx0ZXJzKCk7XG4gICAgYXdhaXQgaW5pdGlhbGl6ZUV4Y2x1ZGVGaWx0ZXJzKCk7XG59XG5cbi8qIEluaXRpYWxpemUgVGFnIEZpbHRlcnMgKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVDYXRlZ29yeUZpbHRlcnMoKSB7XG4gICAgY29uc3QgZGVmYXVsdEZpbHRlcnMgPSBbJ0NvZGUnLCAnUHJvZHVjdGl2aXR5JywgJ0FJJywgJ0VudGVydGFpbm1lbnQnLCAnU29jaWFsJ107XG4gICAgY29uc3QgY3VzdG9tRmlsdGVycyA9IGF3YWl0IGdldEN1c3RvbUZpbHRlcnMoKTtcblxuICAgIGNvbnN0IGFsbEZpbHRlcnMgPSBbLi4uZGVmYXVsdEZpbHRlcnMsIC4uLmN1c3RvbUZpbHRlcnNdO1xuXG4gICAgYWxsRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgIGNyZWF0ZVRvZ2dsZUJ1dHRvbihmaWx0ZXIsIGZhbHNlLCAnY2F0ZWdvcnktZmlsdGVycycpO1xuICAgIH0pO1xuXG4gICAgLy8gTG9hZCBzZWxlY3RlZCBmaWx0ZXJzIGZyb20gc3RvcmFnZVxuICAgIHNlbGVjdGVkRmlsdGVycyA9IGF3YWl0IGdldFNlbGVjdGVkRmlsdGVycygpO1xuICAgIHVwZGF0ZUZpbHRlclN0YXRlcygnY2F0ZWdvcnktZmlsdGVycycpO1xufVxuXG4vKiBJbml0aWFsaXplIEV4Y2x1ZGUgRmlsdGVycyAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZUV4Y2x1ZGVGaWx0ZXJzKCkge1xuICAgIGNvbnN0IGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzID0gYXdhaXQgZ2V0Q3VzdG9tRXhjbHVkZUZpbHRlcnMoKTtcblxuICAgIGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgICAgY3JlYXRlVG9nZ2xlQnV0dG9uKGZpbHRlciwgZmFsc2UsICdleGNsdWRlLWZpbHRlcnMnKTtcbiAgICB9KTtcblxuICAgIC8vIExvYWQgc2VsZWN0ZWQgZXhjbHVkZSBmaWx0ZXJzIGZyb20gc3RvcmFnZVxuICAgIGV4Y2x1ZGVGaWx0ZXJzID0gYXdhaXQgZ2V0U2VsZWN0ZWRFeGNsdWRlRmlsdGVycygpO1xuICAgIHVwZGF0ZUZpbHRlclN0YXRlcygnZXhjbHVkZS1maWx0ZXJzJyk7XG59XG5cbi8qIEZ1bmN0aW9ucyBmb3IgQ2F0ZWdvcnkgRmlsdGVycyAqL1xuXG4vKiBGdW5jdGlvbiB0byBnZXQgY3VzdG9tIGZpbHRlcnMgZnJvbSBDaHJvbWUgc3RvcmFnZSAqL1xuZnVuY3Rpb24gZ2V0Q3VzdG9tRmlsdGVycygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnY3VzdG9tRmlsdGVycyddLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5jdXN0b21GaWx0ZXJzIHx8IFtdKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8qIEZ1bmN0aW9uIHRvIGdldCBzZWxlY3RlZCBmaWx0ZXJzIGZyb20gQ2hyb21lIHN0b3JhZ2UgKi9cbmZ1bmN0aW9uIGdldFNlbGVjdGVkRmlsdGVycygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnc2VsZWN0ZWRGaWx0ZXJzJ10sIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LnNlbGVjdGVkRmlsdGVycyB8fCBbXSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vKiBGdW5jdGlvbiB0byBzYXZlIHNlbGVjdGVkIGZpbHRlcnMgdG8gQ2hyb21lIHN0b3JhZ2UgKi9cbmZ1bmN0aW9uIHNhdmVTZWxlY3RlZEZpbHRlcnMoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2VsZWN0ZWRGaWx0ZXJzIH0sICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIGZpbHRlcnMgc2F2ZWQ6Jywgc2VsZWN0ZWRGaWx0ZXJzKTtcbiAgICB9KTtcbn1cblxuLyogRnVuY3Rpb24gdG8gc2F2ZSBjdXN0b20gZmlsdGVycyB0byBDaHJvbWUgc3RvcmFnZSAqL1xuZnVuY3Rpb24gc2F2ZUN1c3RvbUZpbHRlcnMoY3VzdG9tRmlsdGVycykge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGN1c3RvbUZpbHRlcnMgfSwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ3VzdG9tIGZpbHRlcnMgc2F2ZWQ6JywgY3VzdG9tRmlsdGVycyk7XG4gICAgfSk7XG59XG5cbi8qIEZ1bmN0aW9ucyBmb3IgRXhjbHVkZSBGaWx0ZXJzICovXG5cbi8qIEZ1bmN0aW9uIHRvIGdldCBjdXN0b20gZXhjbHVkZSBmaWx0ZXJzIGZyb20gQ2hyb21lIHN0b3JhZ2UgKi9cbmZ1bmN0aW9uIGdldEN1c3RvbUV4Y2x1ZGVGaWx0ZXJzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydjdXN0b21FeGNsdWRlRmlsdGVycyddLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5jdXN0b21FeGNsdWRlRmlsdGVycyB8fCBbXSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vKiBGdW5jdGlvbiB0byBnZXQgc2VsZWN0ZWQgZXhjbHVkZSBmaWx0ZXJzIGZyb20gQ2hyb21lIHN0b3JhZ2UgKi9cbmZ1bmN0aW9uIGdldFNlbGVjdGVkRXhjbHVkZUZpbHRlcnMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ3NlbGVjdGVkRXhjbHVkZUZpbHRlcnMnXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuc2VsZWN0ZWRFeGNsdWRlRmlsdGVycyB8fCBbXSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vKiBGdW5jdGlvbiB0byBzYXZlIHNlbGVjdGVkIGV4Y2x1ZGUgZmlsdGVycyB0byBDaHJvbWUgc3RvcmFnZSAqL1xuZnVuY3Rpb24gc2F2ZVNlbGVjdGVkRXhjbHVkZUZpbHRlcnMoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2VsZWN0ZWRFeGNsdWRlRmlsdGVyczogZXhjbHVkZUZpbHRlcnMgfSwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQgZXhjbHVkZSBmaWx0ZXJzIHNhdmVkOicsIGV4Y2x1ZGVGaWx0ZXJzKTtcbiAgICB9KTtcbn1cblxuLyogRnVuY3Rpb24gdG8gc2F2ZSBjdXN0b20gZXhjbHVkZSBmaWx0ZXJzIHRvIENocm9tZSBzdG9yYWdlICovXG5mdW5jdGlvbiBzYXZlQ3VzdG9tRXhjbHVkZUZpbHRlcnMoY3VzdG9tRXhjbHVkZUZpbHRlcnMpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBjdXN0b21FeGNsdWRlRmlsdGVycyB9LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDdXN0b20gZXhjbHVkZSBmaWx0ZXJzIHNhdmVkOicsIGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzKTtcbiAgICB9KTtcbn1cblxuLyogRnVuY3Rpb24gdG8gY3JlYXRlIGEgdG9nZ2xlIGJ1dHRvbiAqL1xuZnVuY3Rpb24gY3JlYXRlVG9nZ2xlQnV0dG9uKGxhYmVsLCBpc0RlZmF1bHQgPSBmYWxzZSwgZmlsdGVyVHlwZSA9ICdjYXRlZ29yeS1maWx0ZXJzJykge1xuICAgIGNvbnN0IGNvbnRhaW5lcklkID0gZmlsdGVyVHlwZSA9PT0gJ2V4Y2x1ZGUtZmlsdGVycycgPyAnZXhjbHVkZS1maWx0ZXJzJyA6ICdjYXRlZ29yeS1maWx0ZXJzJztcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCk7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gJ2NhdGVnb3J5LXRvZ2dsZS1idXR0b24nO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIGJ1dHRvbi5kYXRhc2V0LmxhYmVsID0gbGFiZWw7XG4gICAgYnV0dG9uLmRhdGFzZXQuZGVmYXVsdCA9IGlzRGVmYXVsdDtcblxuICAgIC8vIEFkZCAnY3VzdG9tJyBjbGFzcyBpZiBpdCdzIG5vdCBhIGRlZmF1bHQgZmlsdGVyXG4gICAgaWYgKCFpc0RlZmF1bHQpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbScpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgcmVtb3ZlIChYKSBidXR0b25cbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJlbW92ZUJ0bi5jbGFzc05hbWUgPSAncmVtb3ZlLWJ0bic7XG4gICAgICAgIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9ICfinJUnO1xuICAgICAgICByZW1vdmVCdG4udGl0bGUgPSAnUmVtb3ZlIGZpbHRlcic7XG5cbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHJlbW92aW5nIHRoZSBmaWx0ZXJcbiAgICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBhd2FpdCByZW1vdmVGaWx0ZXIobGFiZWwsIGZpbHRlclR5cGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgaW5pdGlhbCBzdGF0ZSBiYXNlZCBvbiBzZWxlY3RlZCBmaWx0ZXJzXG4gICAgaWYgKGZpbHRlclR5cGUgPT09ICdleGNsdWRlLWZpbHRlcnMnKSB7XG4gICAgICAgIGlmIChleGNsdWRlRmlsdGVycy5pbmNsdWRlcyhsYWJlbCkpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzZWxlY3RlZEZpbHRlcnMuaW5jbHVkZXMobGFiZWwpKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgdG9nZ2xpbmcgYWN0aXZlIHN0YXRlXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoZmlsdGVyVHlwZSA9PT0gJ2V4Y2x1ZGUtZmlsdGVycycpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZXhjbHVkZUZpbHRlcnMuaW5kZXhPZihsYWJlbCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVGaWx0ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlRmlsdGVycy5wdXNoKGxhYmVsKTtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzYXZlU2VsZWN0ZWRFeGNsdWRlRmlsdGVycygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZEZpbHRlcnMuaW5kZXhPZihsYWJlbCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsdGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWx0ZXJzLnB1c2gobGFiZWwpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNhdmVTZWxlY3RlZEZpbHRlcnMoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkQ29udGVudCgpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG59XG5cbi8qIEZ1bmN0aW9uIHRvIHJlbW92ZSBhIGN1c3RvbSBmaWx0ZXIgKi9cbmFzeW5jIGZ1bmN0aW9uIHJlbW92ZUZpbHRlcihsYWJlbCwgZmlsdGVyVHlwZSkge1xuICAgIGlmIChmaWx0ZXJUeXBlID09PSAnZXhjbHVkZS1maWx0ZXJzJykge1xuICAgICAgICAvLyBSZW1vdmUgZnJvbSBleGNsdWRlRmlsdGVycyBpZiBwcmVzZW50XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZXhjbHVkZUZpbHRlcnMuaW5kZXhPZihsYWJlbCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBleGNsdWRlRmlsdGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgc2F2ZVNlbGVjdGVkRXhjbHVkZUZpbHRlcnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzIGluIHN0b3JhZ2VcbiAgICAgICAgY29uc3QgY3VzdG9tRXhjbHVkZUZpbHRlcnMgPSBhd2FpdCBnZXRDdXN0b21FeGNsdWRlRmlsdGVycygpO1xuICAgICAgICBjb25zdCBmaWx0ZXJJbmRleCA9IGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzLmluZGV4T2YobGFiZWwpO1xuICAgICAgICBpZiAoZmlsdGVySW5kZXggPiAtMSkge1xuICAgICAgICAgICAgY3VzdG9tRXhjbHVkZUZpbHRlcnMuc3BsaWNlKGZpbHRlckluZGV4LCAxKTtcbiAgICAgICAgICAgIHNhdmVDdXN0b21FeGNsdWRlRmlsdGVycyhjdXN0b21FeGNsdWRlRmlsdGVycyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGJ1dHRvbiBmcm9tIHRoZSBET01cbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhdGVnb3J5LXRvZ2dsZS1idXR0b25bZGF0YS1sYWJlbD1cIiR7bGFiZWx9XCJdYCk7XG4gICAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEV4aXN0aW5nIGNhdGVnb3J5IGZpbHRlcnMgcmVtb3ZhbFxuICAgICAgICAvLyBSZW1vdmUgZnJvbSBzZWxlY3RlZEZpbHRlcnMgaWYgcHJlc2VudFxuICAgICAgICBjb25zdCBpbmRleCA9IHNlbGVjdGVkRmlsdGVycy5pbmRleE9mKGxhYmVsKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkRmlsdGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgc2F2ZVNlbGVjdGVkRmlsdGVycygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gY3VzdG9tRmlsdGVycyBpbiBzdG9yYWdlXG4gICAgICAgIGNvbnN0IGN1c3RvbUZpbHRlcnMgPSBhd2FpdCBnZXRDdXN0b21GaWx0ZXJzKCk7XG4gICAgICAgIGNvbnN0IGZpbHRlckluZGV4ID0gY3VzdG9tRmlsdGVycy5pbmRleE9mKGxhYmVsKTtcbiAgICAgICAgaWYgKGZpbHRlckluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGN1c3RvbUZpbHRlcnMuc3BsaWNlKGZpbHRlckluZGV4LCAxKTtcbiAgICAgICAgICAgIHNhdmVDdXN0b21GaWx0ZXJzKGN1c3RvbUZpbHRlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBidXR0b24gZnJvbSB0aGUgRE9NXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXRlZ29yeS10b2dnbGUtYnV0dG9uW2RhdGEtbGFiZWw9XCIke2xhYmVsfVwiXWApO1xuICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qIEZ1bmN0aW9uIHRvIHVwZGF0ZSBmaWx0ZXIgYnV0dG9uIHN0YXRlcyBiYXNlZCBvbiBzZWxlY3RlZEZpbHRlcnMgKi9cbmZ1bmN0aW9uIHVwZGF0ZUZpbHRlclN0YXRlcyhmaWx0ZXJUeXBlID0gJ2NhdGVnb3J5LWZpbHRlcnMnKSB7XG4gICAgbGV0IGJ1dHRvbnM7XG4gICAgaWYgKGZpbHRlclR5cGUgPT09ICdleGNsdWRlLWZpbHRlcnMnKSB7XG4gICAgICAgIGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZXhjbHVkZS1maWx0ZXJzIC5jYXRlZ29yeS10b2dnbGUtYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBidXR0b24uZGF0YXNldC5sYWJlbDtcbiAgICAgICAgICAgIGlmIChleGNsdWRlRmlsdGVycy5pbmNsdWRlcyhsYWJlbCkpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYXRlZ29yeS1maWx0ZXJzIC5jYXRlZ29yeS10b2dnbGUtYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBidXR0b24uZGF0YXNldC5sYWJlbDtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEZpbHRlcnMuaW5jbHVkZXMobGFiZWwpKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyogRXZlbnQgbGlzdGVuZXIgZm9yIGFkZGluZyBuZXcgY2F0ZWdvcnkgZmlsdGVyICovXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWZpbHRlci1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWZpbHRlci1pbnB1dCcpO1xuICAgIGNvbnN0IG5ld0ZpbHRlciA9IGlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICBpZiAobmV3RmlsdGVyICYmICFzZWxlY3RlZEZpbHRlcnMuaW5jbHVkZXMobmV3RmlsdGVyKSkge1xuICAgICAgICAvLyBDcmVhdGUgdG9nZ2xlIGJ1dHRvblxuICAgICAgICBjcmVhdGVUb2dnbGVCdXR0b24obmV3RmlsdGVyLCBmYWxzZSwgJ2NhdGVnb3J5LWZpbHRlcnMnKTtcblxuICAgICAgICAvLyBTYXZlIHRvIGN1c3RvbSBmaWx0ZXJzXG4gICAgICAgIGNvbnN0IGN1c3RvbUZpbHRlcnMgPSBhd2FpdCBnZXRDdXN0b21GaWx0ZXJzKCk7XG4gICAgICAgIGN1c3RvbUZpbHRlcnMucHVzaChuZXdGaWx0ZXIpO1xuICAgICAgICBzYXZlQ3VzdG9tRmlsdGVycyhjdXN0b21GaWx0ZXJzKTtcblxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbn0pO1xuXG4vKiBFdmVudCBsaXN0ZW5lciBmb3IgYWRkaW5nIG5ldyBleGNsdWRlIGZpbHRlciAqL1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1leGNsdWRlLWZpbHRlci1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWV4Y2x1ZGUtZmlsdGVyLWlucHV0Jyk7XG4gICAgY29uc3QgbmV3RXhjbHVkZUZpbHRlciA9IGlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICBpZiAobmV3RXhjbHVkZUZpbHRlciAmJiAhZXhjbHVkZUZpbHRlcnMuaW5jbHVkZXMobmV3RXhjbHVkZUZpbHRlcikpIHtcbiAgICAgICAgLy8gQ3JlYXRlIHRvZ2dsZSBidXR0b25cbiAgICAgICAgY3JlYXRlVG9nZ2xlQnV0dG9uKG5ld0V4Y2x1ZGVGaWx0ZXIsIGZhbHNlLCAnZXhjbHVkZS1maWx0ZXJzJyk7XG5cbiAgICAgICAgLy8gU2F2ZSB0byBjdXN0b20gZXhjbHVkZSBmaWx0ZXJzXG4gICAgICAgIGNvbnN0IGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzID0gYXdhaXQgZ2V0Q3VzdG9tRXhjbHVkZUZpbHRlcnMoKTtcbiAgICAgICAgY3VzdG9tRXhjbHVkZUZpbHRlcnMucHVzaChuZXdFeGNsdWRlRmlsdGVyKTtcbiAgICAgICAgc2F2ZUN1c3RvbUV4Y2x1ZGVGaWx0ZXJzKGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzKTtcblxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJnZXRTdW1tYXJpemVyIiwiX2dldFN1bW1hcml6ZXIiLCJfY2FsbGVlIiwib3B0aW9ucyIsImF2YWlsYWJsZSIsInN1bW1hcml6ZXIiLCJfY2FsbGVlJCIsIl9jb250ZXh0Iiwic2hhcmVkQ29udGV4dCIsImZvcm1hdCIsInNlbGYiLCJhaSIsImNhcGFiaWxpdGllcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwibG9hZGVkIiwidG90YWwiLCJyZWFkeSIsInN1bW1hcml6ZSIsIl94IiwiX3N1bW1hcml6ZSIsIl9jYWxsZWUyIiwidGV4dCIsInJlc3VsdCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNvbnRleHQiLCJkZXN0cm95IiwidDAiLCJnZXRIaXN0b3J5SW5UaW1lUmFuZ2UiLCJnZXRGaWx0ZXJlZEhpc3RvcnlJdGVtcyIsImdldEhpc3RvcnkiLCJfeDIiLCJfZ2V0SGlzdG9yeSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJyZWplY3QiLCJjaHJvbWUiLCJoaXN0b3J5Iiwic2VhcmNoIiwic3RhcnRUaW1lIiwiZ2V0VGltZSIsImVuZFRpbWUiLCJtYXhSZXN1bHRzIiwicmVzdWx0cyIsInJ1bnRpbWUiLCJsYXN0RXJyb3IiLCJnZXRIaXN0b3J5V2l0aFRvcE5TdGF0cyIsIl94MyIsIl94NCIsIl94NSIsIl94NiIsIl94NyIsIl9nZXRIaXN0b3J5V2l0aFRvcE5TdGF0cyIsIk4iLCJzZWxlY3RlZEZpbHRlcnMiLCJleGNsdWRlRmlsdGVycyIsImhpc3RvcnlJdGVtcyIsImZpbHRlcmVkSGlzdG9yeUl0ZW1zIiwicGFyc2VkSGlzdG9yeUl0ZW1zIiwiaG9zdG5hbWVNYXAiLCJob3N0bmFtZVRpdGxlTWFwIiwic29ydGVkSG9zdG5hbWVzIiwidG9wTkhvc3RuYW1lcyIsInRvcE5Ib3N0bmFtZXNXaXRoVGl0bGVzIiwibWFwIiwiaXRlbSIsInBhcnNlX3VybF9wYXJ0IiwidXJsIiwidGl0bGUiLCJjb3VudF9ieV9ob3N0bmFtZSIsImNyZWF0ZUhvc3ROYW1lVGl0bGVNYXAiLCJBcnJheSIsImZyb20iLCJlbnRyaWVzIiwic29ydCIsImIiLCJob3N0bmFtZSIsInRpdGxlcyIsImdldCIsImNvdW50IiwicGFyc2VkVXJsIiwiVVJMIiwicHJvdG9jb2wiLCJyZXBsYWNlIiwiaG9zdG5hbWVQYXJ0cyIsInNwbGl0Iiwic3ViZG9tYWluIiwiZG9tYWluIiwidGxkIiwiam9pbiIsInBhdGgiLCJwYXRobmFtZSIsInF1ZXJ5UGFyYW1zIiwic2VhcmNoUGFyYW1zIiwia2V5IiwiaXNBcnJheSIsImZyYWdtZW50IiwiaGFzaCIsInBvcnQiLCJob3N0IiwiaHJlZiIsIm9yaWdpbiIsImVycm9yIiwiY29uY2F0IiwiTWFwIiwiaGFzIiwic2V0Iiwic29tZSIsImV4dHJhY3REb21haW4iLCJtYXJrZG93blRvSHRtbCIsIm1hcmtkb3duVGV4dCIsImh0bWwiLCJjbGVhbklucHV0IiwibWF4TGVuZ3RoIiwidW5kZWZpbmVkIiwibm9ybWFsaXplIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZXNjYXBlIiwidHJpbSIsImVuYWJsZVJlc2l6aW5nIiwicmVzaXphYmxlRWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwicmVzaXplSGFuZGxlIiwicXVlcnlTZWxlY3RvciIsImlzUmVzaXppbmciLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJzdHlsZSIsImN1cnNvciIsImNsYXNzTGlzdCIsImFkZCIsInN0YXJ0V2lkdGgiLCJvZmZzZXRXaWR0aCIsInN0YXJ0SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic3RhcnRYIiwiY2xpZW50WCIsInN0YXJ0WSIsImNsaWVudFkiLCJvbk1vdXNlTW92ZSIsImN1cnJlbnRXaWR0aCIsImN1cnJlbnRIZWlnaHQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIndpZHRoIiwiTWF0aCIsIm1heCIsImhlaWdodCIsIm9uTW91c2VVcCIsInJlbW92ZSIsIndpbmRvdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzYXZlV2lkZ2V0U2l6ZSIsImlkIiwibG9hZFdpZGdldFNpemUiLCJ3aWRnZXRJZCIsInNpemUiLCJzdG9yYWdlIiwibG9jYWwiLCJfZGVmaW5lUHJvcGVydHkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiZ2V0SXRlbSIsImNyZWF0ZU9yR2V0V2lkZ2V0IiwidW5pcXVlSUQiLCJ3aWRnZXRUaXRsZSIsImdldEVsZW1lbnRCeUlkIiwid2lkZ2V0Q29udGFpbmVyIiwibmV3V2lkZ2V0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiYWRqdXN0V2lkZ2V0U2l6ZSIsIndpZGdldCIsImNvbnRlbnQiLCJoZWFkZXIiLCJoZWFkZXJIZWlnaHQiLCJjb250ZW50SGVpZ2h0IiwiZGIiLCJvcGVuRGF0YWJhc2UiLCJfb3BlbkRhdGFiYXNlIiwicmVxdWVzdCIsImluZGV4ZWREQiIsIm9wZW4iLCJvbmVycm9yIiwiZXZlbnQiLCJ0YXJnZXQiLCJlcnJvckNvZGUiLCJvbnVwZ3JhZGVuZWVkZWQiLCJvYmplY3RTdG9yZSIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsImNyZWF0ZUluZGV4IiwidW5pcXVlIiwibXVsdGlFbnRyeSIsIm9uc3VjY2VzcyIsImNsZWFyRGF0YWJhc2UiLCJfY2xlYXJEYXRhYmFzZSIsInRyYW5zYWN0aW9uIiwiY2xlYXIiLCJhZGRIaXN0b3J5SXRlbSIsIl9hZGRIaXN0b3J5SXRlbSIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiaW5kZXgiLCJjaGVja1JlcXVlc3QiLCJsYXN0VmlzaXRUaW1lIiwicHV0IiwiZ2V0QWxsSGlzdG9yeUl0ZW1zIiwiX2dldEFsbEhpc3RvcnlJdGVtcyIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiZ2V0QWxsIiwiY2hlY2tJZkl0ZW1FeGlzdHMiLCJfY2hlY2tJZkl0ZW1FeGlzdHMiLCJfY2FsbGVlNSIsImV4aXN0cyIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsInByb21pc2lmeVJlcXVlc3QiLCJfZ2V0SGlzdG9yeUluVGltZVJhbmdlIiwiX2NhbGxlZTYiLCJyYW5nZSIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsIklEQktleVJhbmdlIiwiYm91bmQiLCJGdXNlIiwiZ2V0U2VhcmNoUmVzdWx0cyIsIl9nZXRTZWFyY2hSZXN1bHRzIiwicmF3X3F1ZXJ5IiwicXVlcnkiLCJmdXNlIiwidG9Mb3dlckNhc2UiLCJ3ZWlnaHQiLCJ0aHJlc2hvbGQiLCJmaWx0ZXJlZEl0ZW1zIiwibG93ZXJDYXNlU2VsZWN0ZWRGaWx0ZXJzIiwiZmlsdGVyIiwic3VtbWFyeSIsInRhZ3MiLCJ0YWciLCJpbmNsdWRlcyIsImxvd2VyQ2FzZUV4Y2x1ZGVGaWx0ZXJzIiwiYWRkRGF0ZVJhbmdlQnV0dG9ucyIsImFkZFJlZnJlc2hCdXR0b24iLCJzZXREYXRlUmFuZ2UiLCJpbml0aWFsaXplRmlsdGVycyIsImFkZE9yVXBkYXRlUmVjZW50SGlzdG9yeVdpZGdldCIsImFkZE9yVXBkYXRlQmFzaWNTdW1tYXJ5V2lkZ2V0IiwibG9hZENvbnRlbnQiLCJ0b2dnbGUiLCJjb250YWlucyIsInNhdmVkVGhlbWUiLCJyZWZyZXNoQnV0dG9uIiwidGV4dENvbnRlbnQiLCJjb250YWluZXIiLCJidXR0b25EYXRhIiwibGFiZWwiLCJkYXRhIiwiYnV0dG9uIiwic2V0QXR0cmlidXRlIiwiYnRuIiwidG9kYXkiLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJzZXRNb250aCIsImdldE1vbnRoIiwibW9udGhNYXAiLCJqYW4iLCJmZWIiLCJtYXIiLCJnZXRGdWxsWWVhciIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIl9hZGRPclVwZGF0ZVJlY2VudEhpc3RvcnlXaWRnZXQiLCJsYXN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZVJlY2VudEhpc3RvcnlFbGVtZW50IiwiX2FkZE9yVXBkYXRlQmFzaWNTdW1tYXJ5V2lkZ2V0IiwiY3JlYXRlQmFzaWNTdW1tYXJ5RWxlbWVudCIsIl9sb2FkQ29udGVudCIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiX2NyZWF0ZVJlY2VudEhpc3RvcnlFbGVtZW50IiwiX2NhbGxlZTgiLCJfY2FsbGVlOCQiLCJfY29udGV4dDgiLCJib3giLCJoaXRDb3VudCIsInRpdGxlc0NvbnRhaW5lciIsInRpdGxlc0xpc3QiLCJpbml0aWFsRGlzcGxheUNvdW50IiwiYWRkaXRpb25hbExvYWRDb3VudCIsImRpc3BsYXllZFRpdGxlcyIsInRpdGxlSXRlbSIsImxpc3RJdGVtIiwibGluayIsIm1vcmVCdXR0b24iLCJkYXRhc2V0IiwibG9hZE1vcmVUaXRsZXMiLCJfY3JlYXRlQmFzaWNTdW1tYXJ5RWxlbWVudCIsIl9jYWxsZWU5IiwiaGlzdG9yeUl0ZW1UaXRsZXMiLCJjaHVua3MiLCJfaSIsIl9jaHVua3MiLCJjaHVuayIsInRleHRFbGVtZW50IiwiX2NhbGxlZTkkIiwiX2NvbnRleHQ5IiwiZmxhdCIsImluaXRpYWxDb3VudCIsImxvYWRDb3VudCIsImN1cnJlbnRDb3VudCIsIm5leHRDb3VudCIsInRpdGxlc1RvQWRkIiwicmVtYWluaW5nIiwiX2luaXRpYWxpemVGaWx0ZXJzIiwiX2NhbGxlZTEwIiwiX2NhbGxlZTEwJCIsIl9jb250ZXh0MTAiLCJpbml0aWFsaXplQ2F0ZWdvcnlGaWx0ZXJzIiwiaW5pdGlhbGl6ZUV4Y2x1ZGVGaWx0ZXJzIiwiX2luaXRpYWxpemVDYXRlZ29yeUZpbHRlcnMiLCJfY2FsbGVlMTEiLCJkZWZhdWx0RmlsdGVycyIsImN1c3RvbUZpbHRlcnMiLCJhbGxGaWx0ZXJzIiwiX2NhbGxlZTExJCIsIl9jb250ZXh0MTEiLCJnZXRDdXN0b21GaWx0ZXJzIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiY3JlYXRlVG9nZ2xlQnV0dG9uIiwiZ2V0U2VsZWN0ZWRGaWx0ZXJzIiwidXBkYXRlRmlsdGVyU3RhdGVzIiwiX2luaXRpYWxpemVFeGNsdWRlRmlsdGVycyIsIl9jYWxsZWUxMiIsImN1c3RvbUV4Y2x1ZGVGaWx0ZXJzIiwiX2NhbGxlZTEyJCIsIl9jb250ZXh0MTIiLCJnZXRDdXN0b21FeGNsdWRlRmlsdGVycyIsImdldFNlbGVjdGVkRXhjbHVkZUZpbHRlcnMiLCJzYXZlU2VsZWN0ZWRGaWx0ZXJzIiwic2F2ZUN1c3RvbUZpbHRlcnMiLCJzZWxlY3RlZEV4Y2x1ZGVGaWx0ZXJzIiwic2F2ZVNlbGVjdGVkRXhjbHVkZUZpbHRlcnMiLCJzYXZlQ3VzdG9tRXhjbHVkZUZpbHRlcnMiLCJpc0RlZmF1bHQiLCJmaWx0ZXJUeXBlIiwiY29udGFpbmVySWQiLCJyZW1vdmVCdG4iLCJfcmVmMiIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZUZpbHRlciIsImluZGV4T2YiLCJzcGxpY2UiLCJfcmVtb3ZlRmlsdGVyIiwiX2NhbGxlZTEzIiwiZmlsdGVySW5kZXgiLCJfaW5kZXgyIiwiX2ZpbHRlckluZGV4IiwiX2J1dHRvbiIsIl9jYWxsZWUxMyQiLCJfY29udGV4dDEzIiwiYnV0dG9ucyIsIl9yZWYzIiwiaW5wdXQiLCJuZXdGaWx0ZXIiLCJfcmVmNCIsIm5ld0V4Y2x1ZGVGaWx0ZXIiXSwic291cmNlUm9vdCI6IiJ9