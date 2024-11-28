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
            _context9.next = 21;
            break;
          }
          chunk = _chunks[_i];
          _context9.next = 12;
          return (0,_ai_summarizer_js__WEBPACK_IMPORTED_MODULE_0__.summarize)((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.cleanInput)(chunk));
        case 12:
          result = _context9.sent;
          textElement = document.createElement('p'); // Use a class instead of an ID to allow multiple elements
          textElement.classList.add('basic-summary-contents');
          textElement.innerHTML = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.markdownToHtml)(result);
          newWidget.appendChild(textElement);
          (0,_widgets_js__WEBPACK_IMPORTED_MODULE_2__.adjustWidgetSize)(newWidget, ['.widget-header', '.basic-summary-contents'], 60);
        case 18:
          _i++;
          _context9.next = 8;
          break;
        case 21:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxrQ0FBa0M7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBOztBQUVBLDJCQUEyQiwrQkFBK0I7QUFDMUQsY0FBYywwQkFBMEI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxTQUFTO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QSxJQUFBdWUsS0FBQSxFQUFBRyxnQkFBQSxFQUFBaEMsb0JBQUE7SUFBQSxPQUFBM2MsbUJBQUEsR0FBQXVCLElBQUEsVUFBQWtULFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBN08sSUFBQSxHQUFBNk8sU0FBQSxDQUFBeFEsSUFBQTtRQUFBO1VBQ2xGakUsQ0FBQyxDQUFDNk8sY0FBYyxDQUFDLENBQUM7VUFDWjBQLEtBQUssR0FBR2hRLFFBQVEsQ0FBQ2tELGNBQWMsQ0FBQywwQkFBMEIsQ0FBQztVQUMzRGlOLGdCQUFnQixHQUFHSCxLQUFLLENBQUM5ZCxLQUFLLENBQUMyTixJQUFJLENBQUMsQ0FBQztVQUFBLE1BQ3ZDc1EsZ0JBQWdCLElBQUksQ0FBQ3JVLGNBQWMsQ0FBQ21NLFFBQVEsQ0FBQ2tJLGdCQUFnQixDQUFDO1lBQUFqSyxTQUFBLENBQUF4USxJQUFBO1lBQUE7VUFBQTtVQUM5RDtVQUNBb1ksa0JBQWtCLENBQUNxQyxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLENBQUM7O1VBRTlEO1VBQUFqSyxTQUFBLENBQUF4USxJQUFBO1VBQUEsT0FDbUM0WSx1QkFBdUIsQ0FBQyxDQUFDO1FBQUE7VUFBdERILG9CQUFvQixHQUFBakksU0FBQSxDQUFBOVEsSUFBQTtVQUMxQitZLG9CQUFvQixDQUFDalksSUFBSSxDQUFDaWEsZ0JBQWdCLENBQUM7VUFDM0N2Qix3QkFBd0IsQ0FBQ1Qsb0JBQW9CLENBQUM7VUFFOUM2QixLQUFLLENBQUM5ZCxLQUFLLEdBQUcsRUFBRTtRQUFDO1FBQUE7VUFBQSxPQUFBZ1UsU0FBQSxDQUFBMU8sSUFBQTtNQUFBO0lBQUEsR0FBQXdPLFFBQUE7RUFBQSxDQUV4QjtFQUFBLGlCQUFBdkssR0FBQTtJQUFBLE9BQUF5VSxLQUFBLENBQUFoWSxLQUFBLE9BQUFELFNBQUE7RUFBQTtBQUFBLElBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL2FpL3N1bW1hcml6ZXIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvdXNlcl9kYXNoYm9hcmQvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci8uL3NyYy91c2VyX2Rhc2hib2FyZC91dGlscy5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci8uL3NyYy91c2VyX2Rhc2hib2FyZC93aWRnZXRzLmpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3V0aWxzL2RiLmpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3V0aWxzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci8uL3NyYy91c2VyX2Rhc2hib2FyZC9zdHlsZXMuY3NzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vbm9kZV9tb2R1bGVzL2Z1c2UuanMvZGlzdC9mdXNlLm1qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3VzZXJfZGFzaGJvYXJkL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXRTdW1tYXJpemVyKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHNoYXJlZENvbnRleHQ6ICdUaGlzIGlzIGEgbGlzdCBvZiB0aXRsZXMgdmlzaXRlZCBieSB0aGUgdXNlcicsXG4gICAgICAgIHR5cGU6ICdrZXktcG9pbnRzJyxcbiAgICAgICAgZm9ybWF0OiAnbWFya2Rvd24nLFxuICAgICAgICBsZW5ndGg6ICdtZWRpdW0nLFxuICAgICAgfTtcbiAgICAgIFxuICAgICAgY29uc3QgYXZhaWxhYmxlID0gKGF3YWl0IHNlbGYuYWkuc3VtbWFyaXplci5jYXBhYmlsaXRpZXMoKSkuYXZhaWxhYmxlO1xuICAgICAgbGV0IHN1bW1hcml6ZXI7XG4gICAgICBpZiAoYXZhaWxhYmxlID09PSAnbm8nKSB7XG4gICAgICAgIC8vIFRoZSBTdW1tYXJpemVyIEFQSSBpc24ndCB1c2FibGUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3VtbWFyaXplciBBUEkgaXMgbm90IGF2YWlsYWJsZScpO1xuICAgICAgfVxuICAgICAgaWYgKGF2YWlsYWJsZSA9PT0gJ3JlYWRpbHknKSB7XG4gICAgICAgIC8vIFRoZSBTdW1tYXJpemVyIEFQSSBjYW4gYmUgdXNlZCBpbW1lZGlhdGVseSAuXG4gICAgICAgIHN1bW1hcml6ZXIgPSBhd2FpdCBzZWxmLmFpLnN1bW1hcml6ZXIuY3JlYXRlKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gc3VtbWFyaXplcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRoZSBTdW1tYXJpemVyIEFQSSBjYW4gYmUgdXNlZCBhZnRlciB0aGUgbW9kZWwgaXMgZG93bmxvYWRlZC5cbiAgICAgICAgc3VtbWFyaXplciA9IGF3YWl0IHNlbGYuYWkuc3VtbWFyaXplci5jcmVhdGUob3B0aW9ucyk7XG4gICAgICAgIHN1bW1hcml6ZXIuYWRkRXZlbnRMaXN0ZW5lcignZG93bmxvYWRwcm9ncmVzcycsIChlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZS5sb2FkZWQsIGUudG90YWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgc3VtbWFyaXplci5yZWFkeTtcbiAgICAgICAgcmV0dXJuIHN1bW1hcml6ZXI7XG4gICAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN1bW1hcml6ZSh0ZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3VtbWFyaXplciA9IGF3YWl0IGdldFN1bW1hcml6ZXIoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VtbWFyaXplci5zdW1tYXJpemUodGV4dCwge1xuICAgICAgICAgICAgY29udGV4dDogJ0dpdmUgaW50ZXJlc3RpbmcgaW5zaWdodHMgYWJvdXQgdXNlciBiZWhhdmlvdXJzIGZyb20gdGhlIHRpdGxlcy4gR2l2ZSBpbXBvcnRhbnQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHVzZXJcXCdzIGludGVyZXN0cyBhbmQgaGFiaXRzLicsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBzdW1tYXJpemVyLmRlc3Ryb3koKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZHVyaW5nIHN1bW1hcml6YXRpb246JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuXG5leHBvcnQgeyBzdW1tYXJpemUgfTsiLCJpbXBvcnQgeyBnZXRIaXN0b3J5SW5UaW1lUmFuZ2UgfSBmcm9tICcuLi91dGlscy9kYi5qcyc7XG5pbXBvcnQgeyBnZXRGaWx0ZXJlZEhpc3RvcnlJdGVtcyB9IGZyb20gJy4uL3V0aWxzL3NlYXJjaC5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEhpc3Rvcnkoc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLmhpc3Rvcnkuc2VhcmNoKHt0ZXh0OiAnJywgc3RhcnRUaW1lOiBzdGFydERhdGUuZ2V0VGltZSgpLCBlbmRUaW1lOiBlbmREYXRlLmdldFRpbWUoKSwgbWF4UmVzdWx0czogNDAgfSwgKHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIHJlamVjdChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gc3RhcnREYXRlIFxuICogQHBhcmFtIHsqfSBlbmREYXRlIFxuICogQHBhcmFtIHsqfSBOIFxuICogQHJldHVybnMgXG4gKiBcbiAqIFxuICogKDUpIFt74oCmfSwge+KApn0sIHvigKZ9LCB74oCmfSwge+KApn1dXG4wXG46IFxue2hvc3RuYW1lOiAnd3d3LmN1cnNvci5jb20nLCB0aXRsZXM6IEFycmF5KDYpLCBjb3VudDogMjR9XG4xXG46IFxue2hvc3RuYW1lOiAnd3d3LnlvdXR1YmUuY29tJywgdGl0bGVzOiBBcnJheSgxMiksIGNvdW50OiAyMX1cbjJcbjogXG57aG9zdG5hbWU6ICdtYWlsLmdvb2dsZS5jb20nLCB0aXRsZXM6IEFycmF5KDEyKSwgY291bnQ6IDE4fVxuM1xuOiBcbntob3N0bmFtZTogJ2RldmVsb3Blci5jaHJvbWUuY29tJywgdGl0bGVzOiBBcnJheSgyKSwgY291bnQ6IDE2fVxuNFxuOiBcbntob3N0bmFtZTogJ2dpdGh1Yi5jb20nLCB0aXRsZXM6IEFycmF5KDcpLCBjb3VudDogMTJ9XG5cbmV4YW1wbGUgdGl0bGVzOlxuXG4wXG46IFxue3RpdGxlOiAnaW4gY3Vyc3VyIGR1cmluZyBpbmRleGluZywgaXMgdGhlIHJlc3VsdHMgc3RvcmVkIGxjb2FsbHkgLSBHb29nbGUgU2VhcmNoJywgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1pbitjdXJzdXIrZHVyaW5nK2nigKZTQVFreE1qVXpNR293YWplb0FnQ3dBZ0Emc291cmNlaWQ9Y2hyb21lJmllPVVURi04J31cbjFcbjogXG57dGl0bGU6ICdzbGFjayBpbnRlZ3JhdGlvbiB0byBub3Rpb24gLSBHb29nbGUgU2VhcmNoJywgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1zbGFjaytpbnRlZ3JhdGlvbivigKZUU0FRZzJNekF5YWpCcU42Z0NBTEFDQUEmc291cmNlaWQ9Y2hyb21lJmllPVVURi04J31cbjJcbjogXG57dGl0bGU6ICdpIHdhbnQgdG8gY29udmVydCBhIHNsYWNrIGNoYW5uZWwgdG8gbm90aW9uIGRvY3VtZW50IC0gR29vZ2xlIFNlYXJjaCcsIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9aSt3YW50K3RvK2NvbnZlcnQr4oCmdWdZR0NBRVFBUmdUa2djRU9TNHpONkFIZ2NjQyZzY2xpZW50PWd3cy13aXotc2VycCd9XG4zXG46IFxue3RpdGxlOiAnY29udmVydCBwaWwgaW1hZ2UgdG8gZGljb20gZmlsZSAtIEdvb2dsZSBTZWFyY2gnLCB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPWNvbnZlcnQrcGlsK2ltYWdlK+KApkFkSUJDRGcwTnpscU1HbzNxQUlBc0FJQSZzb3VyY2VpZD1jaHJvbWUmaWU9VVRGLTgnfVxuNFxuOiBcbnt0aXRsZTogJ3N1cGVyIHJlc29sdXRpb24gbW9kZWxzIC0gR29vZ2xlIFNlYXJjaCcsIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9c3VwZXIrcmVzb2x1dGlvbitt4oCmZTBnRUlOakl5TUdvd2FqZW9BZ0N3QWdBJnNvdXJjZWlkPWNocm9tZSZpZT1VVEYtOCd9XG41XG46IFxue3RpdGxlOiAnc3VwZXIgcmVzb2x1dGlvbiBtb2RlbCBvbmxpbmUgZnJlZSAtIEdvb2dsZSBTZWFyY2gnLCB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPXN1cGVyK3Jlc29sdXRpb24rbeKApkZtQU1BaUFZQmtBWUlrZ2NFTWk0eE02QUhrbGsmc2NsaWVudD1nd3Mtd2l6LXNlcnAnfVxuICovXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIaXN0b3J5V2l0aFRvcE5TdGF0cyhzdGFydERhdGUsIGVuZERhdGUsIE4sIHNlbGVjdGVkRmlsdGVycywgZXhjbHVkZUZpbHRlcnMpIHtcbiAgICBjb25zdCBoaXN0b3J5SXRlbXMgPSBhd2FpdCBnZXRIaXN0b3J5SW5UaW1lUmFuZ2Uoc3RhcnREYXRlLmdldFRpbWUoKSwgZW5kRGF0ZS5nZXRUaW1lKCkpO1xuICAgIGNvbnN0IGZpbHRlcmVkSGlzdG9yeUl0ZW1zID0gZ2V0RmlsdGVyZWRIaXN0b3J5SXRlbXMoaGlzdG9yeUl0ZW1zLCBzZWxlY3RlZEZpbHRlcnMsIGV4Y2x1ZGVGaWx0ZXJzKTtcbiAgICBjb25zdCBwYXJzZWRIaXN0b3J5SXRlbXMgPSBmaWx0ZXJlZEhpc3RvcnlJdGVtcy5tYXAoaXRlbSA9PiBwYXJzZV91cmxfcGFydChpdGVtLnVybCwgaXRlbS50aXRsZSkpO1xuICAgIGNvbnN0IGhvc3RuYW1lTWFwID0gY291bnRfYnlfaG9zdG5hbWUocGFyc2VkSGlzdG9yeUl0ZW1zKTtcbiAgICBjb25zdCBob3N0bmFtZVRpdGxlTWFwID0gY3JlYXRlSG9zdE5hbWVUaXRsZU1hcChwYXJzZWRIaXN0b3J5SXRlbXMpO1xuICAgIGNvbnN0IHNvcnRlZEhvc3RuYW1lcyA9IEFycmF5LmZyb20oaG9zdG5hbWVNYXAuZW50cmllcygpKS5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSk7XG4gICAgY29uc3QgdG9wTkhvc3RuYW1lcyA9IHNvcnRlZEhvc3RuYW1lcy5zbGljZSgwLCBOKTtcbiAgICBjb25zdCB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcyA9IHRvcE5Ib3N0bmFtZXMubWFwKGl0ZW0gPT4gKHsgaG9zdG5hbWU6IGl0ZW1bMF0sIHRpdGxlczogaG9zdG5hbWVUaXRsZU1hcC5nZXQoaXRlbVswXSksIGNvdW50OiBpdGVtWzFdIH0pKTtcblxuICAgIHJldHVybiB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcztcbn1cblxuXG5mdW5jdGlvbiBwYXJzZV91cmxfcGFydCh1cmwsIHRpdGxlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTCh1cmwpO1xuXG4gICAgICAgIC8vIEV4dHJhY3QgcHJvdG9jb2wgd2l0aG91dCB0aGUgdHJhaWxpbmcgY29sb24gKGUuZy4sICdodHRwcycpXG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gcGFyc2VkVXJsLnByb3RvY29sLnJlcGxhY2UoJzonLCAnJyk7XG5cbiAgICAgICAgLy8gU3BsaXQgaG9zdG5hbWUgaW50byBwYXJ0cyB0byBpZGVudGlmeSBzdWJkb21haW4sIGRvbWFpbiwgYW5kIFRMRFxuICAgICAgICBjb25zdCBob3N0bmFtZVBhcnRzID0gcGFyc2VkVXJsLmhvc3RuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIGxldCBzdWJkb21haW4gPSAnJztcbiAgICAgICAgbGV0IGRvbWFpbiA9ICcnO1xuICAgICAgICBsZXQgdGxkID0gJyc7XG5cbiAgICAgICAgaWYgKGhvc3RuYW1lUGFydHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgc3ViZG9tYWluID0gaG9zdG5hbWVQYXJ0cy5zbGljZSgwLCBob3N0bmFtZVBhcnRzLmxlbmd0aCAtIDIpLmpvaW4oJy4nKTtcbiAgICAgICAgICAgIGRvbWFpbiA9IGhvc3RuYW1lUGFydHNbaG9zdG5hbWVQYXJ0cy5sZW5ndGggLSAyXTtcbiAgICAgICAgICAgIHRsZCA9IGhvc3RuYW1lUGFydHNbaG9zdG5hbWVQYXJ0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSBlbHNlIGlmIChob3N0bmFtZVBhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgZG9tYWluID0gaG9zdG5hbWVQYXJ0c1swXTtcbiAgICAgICAgICAgIHRsZCA9IGhvc3RuYW1lUGFydHNbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb21haW4gPSBwYXJzZWRVcmwuaG9zdG5hbWU7XG4gICAgICAgICAgICB0bGQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV4dHJhY3QgcGF0aCAoZW5kcG9pbnQpXG4gICAgICAgIGNvbnN0IHBhdGggPSBwYXJzZWRVcmwucGF0aG5hbWU7XG5cbiAgICAgICAgLy8gRXh0cmFjdCBxdWVyeSBwYXJhbWV0ZXJzIGFzIGtleS12YWx1ZSBwYWlyc1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICBwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBrZXkgYWxyZWFkeSBleGlzdHMsIGNvbnZlcnQgaXQgaW50byBhbiBhcnJheVxuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zW2tleV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVBhcmFtc1trZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc1trZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW2tleV0gPSBbcXVlcnlQYXJhbXNba2V5XSwgdmFsdWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBFeHRyYWN0IGZyYWdtZW50IHdpdGhvdXQgdGhlIGxlYWRpbmcgaGFzaCAoZS5nLiwgJ3NlY3Rpb24xJylcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBwYXJzZWRVcmwuaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuXG4gICAgICAgIC8vIEV4dHJhY3QgcG9ydCBpZiBzcGVjaWZpZWQsIGVsc2UgZGVmYXVsdCBiYXNlZCBvbiBwcm90b2NvbFxuICAgICAgICBsZXQgcG9ydCA9IHBhcnNlZFVybC5wb3J0O1xuICAgICAgICBpZiAoIXBvcnQpIHtcbiAgICAgICAgICAgIGlmIChwcm90b2NvbCA9PT0gJ2h0dHAnKSB7XG4gICAgICAgICAgICAgICAgcG9ydCA9ICc4MCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3RvY29sID09PSAnaHR0cHMnKSB7XG4gICAgICAgICAgICAgICAgcG9ydCA9ICc0NDMnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3J0ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvdG9jb2wsXG4gICAgICAgICAgICBzdWJkb21haW4sXG4gICAgICAgICAgICBkb21haW4sXG4gICAgICAgICAgICB0bGQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICAgICAgICBmcmFnbWVudCxcbiAgICAgICAgICAgIHBvcnQsXG4gICAgICAgICAgICAvLyBBZGRpdGlvbmFsIFVzZWZ1bCBDb21wb25lbnRzXG4gICAgICAgICAgICBob3N0OiBwYXJzZWRVcmwuaG9zdCwgLy8gaW5jbHVkZXMgaG9zdG5hbWUgYW5kIHBvcnRcbiAgICAgICAgICAgIGhvc3RuYW1lOiBwYXJzZWRVcmwuaG9zdG5hbWUsXG4gICAgICAgICAgICBocmVmOiBwYXJzZWRVcmwuaHJlZixcbiAgICAgICAgICAgIG9yaWdpbjogcGFyc2VkVXJsLm9yaWdpbixcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBVUkw6ICR7dXJsfWAsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb3VudF9ieV9ob3N0bmFtZShwYXJzZWRIaXN0b3J5SXRlbXMpIHtcbiAgICBjb25zdCBob3N0bmFtZU1hcCA9IG5ldyBNYXAoKTtcblxuICAgIHBhcnNlZEhpc3RvcnlJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBob3N0bmFtZSA9IGl0ZW0uaG9zdG5hbWU7XG4gICAgICAgIGlmIChob3N0bmFtZSkge1xuICAgICAgICAgICAgaWYgKGhvc3RuYW1lTWFwLmhhcyhob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICBob3N0bmFtZU1hcC5zZXQoaG9zdG5hbWUsIGhvc3RuYW1lTWFwLmdldChob3N0bmFtZSkgKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaG9zdG5hbWVNYXAuc2V0KGhvc3RuYW1lLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhvc3RuYW1lTWFwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3N0TmFtZVRpdGxlTWFwKHBhcnNlZEhpc3RvcnlJdGVtcykge1xuICAgIGNvbnN0IGhvc3RuYW1lTWFwID0gbmV3IE1hcCgpO1xuICAgIHBhcnNlZEhpc3RvcnlJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBob3N0bmFtZSA9IGl0ZW0uaG9zdG5hbWU7XG4gICAgICAgIHZhciB0aXRsZSA9IGl0ZW0udGl0bGU7XG4gICAgICAgIGNvbnN0IHVybCA9IGl0ZW0uaHJlZjtcblxuICAgICAgICAvLyBpZiB0aXRsZSBpcyBlbXB0eSwgdXNlIGhvc3RuYW1lIGFzIHRpdGxlXG4gICAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgICAgIHRpdGxlID0gaG9zdG5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYWludGFpbiBhIGxpc3Qgb2YgdGl0bGVzIGZvciBlYWNoIGhvc3RuYW1lXG4gICAgICAgIGlmIChob3N0bmFtZU1hcC5oYXMoaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAvLyBpZiB0aXRsZSBpcyBhbHJlYWR5IGluIHRoZSBsaXN0LCBkb24ndCBhZGQgaXQgYWdhaW5cbiAgICAgICAgICAgIGlmICghaG9zdG5hbWVNYXAuZ2V0KGhvc3RuYW1lKS5zb21lKHQgPT4gdC50aXRsZSA9PT0gdGl0bGUpKSB7XG4gICAgICAgICAgICAgICAgaG9zdG5hbWVNYXAuZ2V0KGhvc3RuYW1lKS5wdXNoKHt0aXRsZSwgdXJsfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBob3N0bmFtZU1hcC5zZXQoaG9zdG5hbWUsIFt7dGl0bGUsIHVybH1dKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhvc3RuYW1lTWFwO1xufVxuXG5cblxuLy8gZXhwb3J0IHsgZ2V0SGlzdG9yeSB9OyIsIi8vIHdyaXRlIGEgZnVuY3Rpb24gdG8gZXh0cmFjdCBkb21haW4gbmFtZSBmcm9tIGEgdXJsXG5mdW5jdGlvbiBleHRyYWN0RG9tYWluKHVybCkge1xuICAgIHJldHVybiBuZXcgVVJMKHVybCkuaG9zdG5hbWU7XG4gIH1cbiAgXG4gIFxuICBmdW5jdGlvbiBtYXJrZG93blRvSHRtbChtYXJrZG93blRleHQpIHtcbiAgICAvLyBDb252ZXJ0IGJvbGQgdGV4dDogKip0ZXh0KipcbiAgICBsZXQgaHRtbCA9IG1hcmtkb3duVGV4dC5yZXBsYWNlKC9cXCpcXCooLis/KVxcKlxcKi9nLCAnPHN0cm9uZz4kMTwvc3Ryb25nPicpO1xuICAgIFxuICAgIC8vIENvbnZlcnQgaXRhbGljIHRleHQ6ICp0ZXh0KlxuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcKiguKz8pXFwqL2csICc8ZW0+JDE8L2VtPicpO1xuICAgIFxuICAgIC8vIENvbnZlcnQgYnVsbGV0IHBvaW50czogKiBpdGVtXG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXlxcKiAoLispJC9nbSwgJzxsaT4kMTwvbGk+Jyk7XG4gICAgXG4gICAgLy8gV3JhcCBsaXN0IGl0ZW1zIGluIDx1bD4gdGFnc1xuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoLyg8bGk+Lio8XFwvbGk+KS9nLCAnPHVsPiQxPC91bD4nKTtcbiAgXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuXG4vKipcbiAqIENsZWFucyBhbmQgc2FuaXRpemVzIGlucHV0IHRleHQgZm9yIHNhZmUgcHJvY2Vzc2luZyB3aXRoIGxhbmd1YWdlIG1vZGVscy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRoZSBpbnB1dCB0ZXh0IHRvIGJlIHNhbml0aXplZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhMZW5ndGggLSBNYXhpbXVtIGFsbG93ZWQgbGVuZ3RoIGZvciB0aGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW5pdGl6ZWQgdGV4dC5cbiAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgc2FuaXRpemVkIHRleHQgZXhjZWVkcyB0aGUgbWF4aW11bSBsZW5ndGguXG4gKi9cbmZ1bmN0aW9uIGNsZWFuSW5wdXQodGV4dCwgbWF4TGVuZ3RoID0gNDAwMCkge1xuICAvLyAxLiBSZW1vdmUgQ29udHJvbCBDaGFyYWN0ZXJzXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1tcXHgwMC1cXHgxRlxceDdGXS9nLCAnJyk7XG5cbiAgLy8gMi4gTm9ybWFsaXplIFVuaWNvZGVcbiAgdGV4dCA9IHRleHQubm9ybWFsaXplKCdORkMnKTtcblxuICAvLyAzLiBSZW1vdmUgTWFsZm9ybWVkIFVuaWNvZGVcbiAgdHJ5IHtcbiAgICAgIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUodGV4dCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC/vv70vZywgJycpO1xuICB9XG5cbiAgLy8gNC4gRXNjYXBlIFNwZWNpYWwgU3ltYm9sc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9bXFxcXGB7fVxcW1xcXSgpPD47fCZdL2csICdcXFxcJCYnKTtcblxuICAvLyA1LiBMaW1pdCBSZXBldGl0aXZlIENoYXJhY3RlcnMgdG8gM1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oLilcXDF7Myx9L2csICckMSQxJDEnKTtcblxuICAvLyA2LiBXaGl0ZWxpc3QgQWxsb3dlZCBDaGFyYWN0ZXJzIChBbHBoYW51bWVyaWNzIGFuZCBjb21tb24gcHVuY3R1YXRpb24pXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1teYS16QS1aMC05IC4sIT8nLV0vZywgJycpO1xuXG4gIC8vIDcuIFRyaW0gRXhjZXNzaXZlIFdoaXRlc3BhY2VcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKTtcblxuICAvLyA4LiBWYWxpZGF0ZSBMZW5ndGhcbiAgaWYgKHRleHQubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElucHV0IGV4Y2VlZHMgbWF4aW11bSBhbGxvd2VkIGxlbmd0aCBvZiAke21heExlbmd0aH0gY2hhcmFjdGVycy5gKTtcbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5leHBvcnQgeyBleHRyYWN0RG9tYWluLCBtYXJrZG93blRvSHRtbCwgY2xlYW5JbnB1dCB9OyIsIi8qIEVuYWJsZSBSZXNpemluZyAqL1xuZnVuY3Rpb24gZW5hYmxlUmVzaXppbmcoKSB7XG4gICAgY29uc3QgcmVzaXphYmxlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzaXphYmxlJyk7XG4gIFxuICAgIHJlc2l6YWJsZUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCByZXNpemVIYW5kbGUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNpemUtaGFuZGxlJyk7XG4gICAgICBsZXQgaXNSZXNpemluZyA9IGZhbHNlO1xuICBcbiAgICAgIHJlc2l6ZUhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlzUmVzaXppbmcgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdzZS1yZXNpemUnO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Jlc2l6aW5nJyk7XG4gIFxuICAgICAgICBjb25zdCBzdGFydFdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3Qgc3RhcnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgY29uc3Qgc3RhcnRYID0gZS5jbGllbnRYO1xuICAgICAgICBjb25zdCBzdGFydFkgPSBlLmNsaWVudFk7XG4gIFxuICAgICAgICBjb25zdCBvbk1vdXNlTW92ZSA9IChlKSA9PiB7XG4gICAgICAgICAgaWYgKCFpc1Jlc2l6aW5nKSByZXR1cm47XG4gIFxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRXaWR0aCA9IHN0YXJ0V2lkdGggKyAoZS5jbGllbnRYIC0gc3RhcnRYKTtcbiAgICAgICAgICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gc3RhcnRIZWlnaHQgKyAoZS5jbGllbnRZIC0gc3RhcnRZKTtcbiAgXG4gICAgICAgICAgLy8gU2V0IG1pbmltdW0gZGltZW5zaW9uc1xuICAgICAgICAgIGNvbnN0IG1pbldpZHRoID0gMjAwO1xuICAgICAgICAgIGNvbnN0IG1pbkhlaWdodCA9IDEwMDtcbiAgXG4gICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke01hdGgubWF4KGN1cnJlbnRXaWR0aCwgbWluV2lkdGgpfXB4YDtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke01hdGgubWF4KGN1cnJlbnRIZWlnaHQsIG1pbkhlaWdodCl9cHhgO1xuICAgICAgICB9O1xuICBcbiAgICAgICAgY29uc3Qgb25Nb3VzZVVwID0gKCkgPT4ge1xuICAgICAgICAgIGlzUmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Jlc2l6aW5nJyk7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gIFxuICAgICAgICAgIC8vIFNhdmUgZGltZW5zaW9uc1xuICAgICAgICAgIHNhdmVXaWRnZXRTaXplKGVsZW1lbnQuaWQsIGVsZW1lbnQuc3R5bGUud2lkdGgsIGVsZW1lbnQuc3R5bGUuaGVpZ2h0KTtcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgIH0pO1xuICBcbiAgICAgIC8vIExvYWQgc2F2ZWQgZGltZW5zaW9uc1xuICAgICAgbG9hZFdpZGdldFNpemUoZWxlbWVudC5pZCwgZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIC8qIFNhdmUgV2lkZ2V0IFNpemUgKi9cbiAgZnVuY3Rpb24gc2F2ZVdpZGdldFNpemUod2lkZ2V0SWQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgaWYgKGNocm9tZSAmJiBjaHJvbWUuc3RvcmFnZSAmJiBjaHJvbWUuc3RvcmFnZS5sb2NhbCkge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW3dpZGdldElkXTogc2l6ZSB9LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTYXZlZCBzaXplIGZvciAke3dpZGdldElkfTpgLCBzaXplKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGb3IgdGVzdGluZyBvdXRzaWRlIG9mIENocm9tZSBleHRlbnNpb25cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHdpZGdldElkLCBKU09OLnN0cmluZ2lmeShzaXplKSk7XG4gICAgfVxuICB9XG4gIFxuICAvKiBMb2FkIFdpZGdldCBTaXplICovXG4gIGZ1bmN0aW9uIGxvYWRXaWRnZXRTaXplKHdpZGdldElkLCBlbGVtZW50KSB7XG4gICAgaWYgKGNocm9tZSAmJiBjaHJvbWUuc3RvcmFnZSAmJiBjaHJvbWUuc3RvcmFnZS5sb2NhbCkge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHdpZGdldElkLCAocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHRbd2lkZ2V0SWRdKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IHJlc3VsdFt3aWRnZXRJZF0ud2lkdGg7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSByZXN1bHRbd2lkZ2V0SWRdLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZvciB0ZXN0aW5nIG91dHNpZGUgb2YgQ2hyb21lIGV4dGVuc2lvblxuICAgICAgY29uc3Qgc2l6ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0od2lkZ2V0SWQpKTtcbiAgICAgIGlmIChzaXplKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBzaXplLndpZHRoO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gY3JlYXRlT3JHZXRXaWRnZXQodW5pcXVlSUQsIHdpZGdldFRpdGxlKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVuaXF1ZUlEKSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVuaXF1ZUlEKTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IHdpZGdldENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aWRnZXQtY29udGFpbmVyJyk7XG4gIFxuICAgIC8vIENyZWF0ZSBhIG5ldyB3aWRnZXQgZWxlbWVudFxuICAgIGNvbnN0IG5ld1dpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1dpZGdldC5jbGFzc05hbWUgPSAnd2lkZ2V0IHJlc2l6YWJsZSc7XG4gIFxuICAgIC8vIEdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciB0aGUgbmV3IHdpZGdldFxuICAgIG5ld1dpZGdldC5pZCA9IHVuaXF1ZUlEO1xuICBcbiAgICAvLyBTZXQgdGhlIGNvbnRlbnQgb2YgdGhlIG5ldyB3aWRnZXRcbiAgICBuZXdXaWRnZXQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0LWhlYWRlclwiPlxuICAgICAgICAgICAgPGgyPiR7d2lkZ2V0VGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXNpemUtaGFuZGxlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gIFxuICAgIC8vIEFwcGVuZCB0aGUgbmV3IHdpZGdldCB0byB0aGUgd2lkZ2V0IGNvbnRhaW5lclxuICAgIHdpZGdldENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdXaWRnZXQpO1xuICBcbiAgICByZXR1cm4gbmV3V2lkZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRqdXN0V2lkZ2V0U2l6ZSh3aWRnZXQsIHNlbGVjdG9ycywgb2Zmc2V0KSB7XG4gICAgbGV0IGhlaWdodCA9IDA7XG4gICAgXG4gICAgc2VsZWN0b3JzLmZvckVhY2goc2VsZWN0b3IgPT4ge1xuICAgICAgICAvLyBVc2UgcXVlcnlTZWxlY3RvckFsbCB0byBoYW5kbGUgbXVsdGlwbGUgZWxlbWVudHMgZm9yIGVhY2ggc2VsZWN0b3JcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB3aWRnZXQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaGVpZ2h0ICs9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIk5ldyBoZWlnaHQ6IFwiLCBoZWlnaHQpO1xuICAgIHdpZGdldC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHQgKyBvZmZzZXR9cHhgO1xuICB9XG5cblxuZXhwb3J0IHsgZW5hYmxlUmVzaXppbmcsIHNhdmVXaWRnZXRTaXplLCBsb2FkV2lkZ2V0U2l6ZSwgY3JlYXRlT3JHZXRXaWRnZXQsIGFkanVzdFdpZGdldFNpemUgfTtcbiAgIiwiLy8gZGIuanNcblxubGV0IGRiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb3BlbkRhdGFiYXNlKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChkYikge1xuICAgICAgcmVzb2x2ZShkYik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbignSGlzdG9yeUluZGV4ZXJEQicsIDEpO1xuXG4gICAgcmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdEYXRhYmFzZSBlcnJvcjonLCBldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICAgIHJlamVjdChldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICB9O1xuXG4gICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGRiID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgIGNvbnN0IG9iamVjdFN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoJ2hpc3RvcnknLCB7IGtleVBhdGg6ICdpZCcgfSk7XG4gICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgndXJsJywgJ3VybCcsIHsgdW5pcXVlOiBmYWxzZSB9KTtcbiAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KCd0aXRsZScsICd0aXRsZScsIHsgdW5pcXVlOiBmYWxzZSB9KTtcbiAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KCd0YWdzJywgJ3RhZ3MnLCB7IHVuaXF1ZTogZmFsc2UsIG11bHRpRW50cnk6IHRydWUgfSk7XG4gICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgnc3VtbWFyeScsICdzdW1tYXJ5JywgeyB1bmlxdWU6IGZhbHNlIH0pO1xuICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ2xhc3RWaXNpdFRpbWUnLCAnbGFzdFZpc2l0VGltZScsIHsgdW5pcXVlOiB0cnVlIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSB1cGdyYWRlZFwiKTtcbiAgICB9O1xuXG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgIGRiID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgIHJlc29sdmUoZGIpO1xuICAgIH07XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xlYXJEYXRhYmFzZSgpIHtcbiAgYXdhaXQgb3BlbkRhdGFiYXNlKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbJ2hpc3RvcnknXSwgJ3JlYWR3cml0ZScpO1xuICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ2hpc3RvcnknKTtcbiAgICBjb25zdCByZXF1ZXN0ID0gb2JqZWN0U3RvcmUuY2xlYXIoKTtcbiAgICBjb25zb2xlLmxvZyhcIkNsZWFyaW5nIGRhdGFiYXNlXCIpO1xuXG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgIH07XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkSGlzdG9yeUl0ZW0oaXRlbSkge1xuICBhd2FpdCBvcGVuRGF0YWJhc2UoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFsnaGlzdG9yeSddLCAncmVhZHdyaXRlJyk7XG4gICAgY29uc3Qgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgnaGlzdG9yeScpO1xuICAgIGNvbnN0IGluZGV4ID0gb2JqZWN0U3RvcmUuaW5kZXgoJ2xhc3RWaXNpdFRpbWUnKTtcblxuICAgIC8vIENoZWNrIGlmIGFuIGl0ZW0gd2l0aCB0aGUgc2FtZSBsYXN0VmlzaXRUaW1lIGFscmVhZHkgZXhpc3RzXG4gICAgY29uc3QgY2hlY2tSZXF1ZXN0ID0gaW5kZXguZ2V0KGl0ZW0ubGFzdFZpc2l0VGltZSk7XG5cbiAgICBjaGVja1JlcXVlc3Qub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnJlc3VsdCkge1xuICAgICAgICAvLyBJdGVtIHdpdGggdGhlIHNhbWUgbGFzdFZpc2l0VGltZSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gd2l0aCB0aGUgc2FtZSBsYXN0VmlzaXRUaW1lIGFscmVhZHkgZXhpc3RzLCBub3QgYWRkaW5nLlwiKTtcbiAgICAgICAgcmVzb2x2ZSgpOyAvLyBSZXNvbHZlIHdpdGhvdXQgYWRkaW5nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBObyBpdGVtIHdpdGggdGhlIHNhbWUgbGFzdFZpc2l0VGltZSwgcHJvY2VlZCB0byBhZGRcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG9iamVjdFN0b3JlLnB1dChpdGVtKTtcblxuICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgSGlzdG9yeSBpdGVtIGFkZGVkYCk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFkZGluZyBpdGVtOicsIGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgICAgICAgIHJlamVjdChldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2hlY2tSZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIGxhc3RWaXNpdFRpbWU6JywgZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxIaXN0b3J5SXRlbXMoKSB7XG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oWydoaXN0b3J5J10sICdyZWFkb25seScpO1xuICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ2hpc3RvcnknKTtcbiAgICBjb25zdCByZXF1ZXN0ID0gb2JqZWN0U3RvcmUuZ2V0QWxsKCk7XG5cbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xuICAgICAgcmVzb2x2ZShldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQWxsIGhpc3RvcnkgaXRlbXMgZmV0Y2hlZFwiKTtcbiAgICB9O1xuXG4gICAgcmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBhbGwgaGlzdG9yeSBpdGVtczonLCBldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICB9O1xuICB9KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoaXN0b3J5IGl0ZW0gd2l0aCB0aGUgc3BlY2lmaWVkIGxhc3RWaXNpdFRpbWUgZXhpc3RzIGluIHRoZSBJbmRleGVkREIuXG4gKiBAcGFyYW0ge251bWJlcn0gbGFzdFZpc2l0VGltZSAtIFRoZSBsYXN0IHZpc2l0IHRpbWUgb2YgdGhlIGhpc3RvcnkgaXRlbS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSAtIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRydWUgaWYgdGhlIGl0ZW0gZXhpc3RzLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0lmSXRlbUV4aXN0cyhsYXN0VmlzaXRUaW1lKSB7XG4gIC8vIEVuc3VyZSB0aGUgZGF0YWJhc2UgaXMgb3BlblxuICBhd2FpdCBvcGVuRGF0YWJhc2UoKTtcblxuICB0cnkge1xuICAgIC8vIFN0YXJ0IGEgcmVhZG9ubHkgdHJhbnNhY3Rpb25cbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFsnaGlzdG9yeSddLCAncmVhZG9ubHknKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gICAgY29uc3QgaW5kZXggPSBvYmplY3RTdG9yZS5pbmRleCgnbGFzdFZpc2l0VGltZScpO1xuXG4gICAgLy8gSW5pdGlhdGUgdGhlIGdldCByZXF1ZXN0XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4LmdldChsYXN0VmlzaXRUaW1lKTtcblxuICAgIC8vIEF3YWl0IHRoZSByZXN1bHQgb2YgdGhlIGdldCByZXF1ZXN0XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KTtcblxuICAgIC8vIERldGVybWluZSBpZiB0aGUgaXRlbSBleGlzdHNcbiAgICBjb25zdCBleGlzdHMgPSByZXN1bHQgIT09IHVuZGVmaW5lZCAmJiByZXN1bHQgIT09IG51bGw7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhgSXRlbSBleGlzdHMgZm9yIGxhc3RWaXNpdFRpbWUgJHtsYXN0VmlzaXRUaW1lfTogJHtleGlzdHN9YCk7XG5cbiAgICByZXR1cm4gZXhpc3RzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGNoZWNraW5nIGlmIGl0ZW0gZXhpc3RzIGZvciBsYXN0VmlzaXRUaW1lICR7bGFzdFZpc2l0VGltZX06YCwgZXJyb3IpO1xuICAgIHRocm93IGVycm9yOyAvLyBQcm9wYWdhdGUgdGhlIGVycm9yIHRvIHRoZSBjYWxsZXJcbiAgfVxufVxuXG4vKipcbiAqIFByb21pc2lmaWVzIGFuIEluZGV4ZWREQiByZXF1ZXN0LlxuICogQHBhcmFtIHtJREJSZXF1ZXN0fSByZXF1ZXN0IC0gVGhlIEluZGV4ZWREQiByZXF1ZXN0IG9iamVjdC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IC0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVxdWVzdCByZXN1bHQuXG4gKi9cbmZ1bmN0aW9uIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdCk7XG4gICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJbnB1dCBzdGFydERhdGUgYW5kIGVuZERhdGUsIGZldGNoIGFsbCBoaXN0b3J5IGl0ZW1zIGluIHRoYXQgcmFuZ2UsIHNlYXJjaCB3aXRoaW4gbGFzdFZpc2l0VGltZSBpbmRleCBvZiB0aGUgZGIgIFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SGlzdG9yeUluVGltZVJhbmdlKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuICBhd2FpdCBvcGVuRGF0YWJhc2UoKTtcbiAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbJ2hpc3RvcnknXSwgJ3JlYWRvbmx5Jyk7XG4gIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ2hpc3RvcnknKTtcbiAgY29uc3QgaW5kZXggPSBvYmplY3RTdG9yZS5pbmRleCgnbGFzdFZpc2l0VGltZScpO1xuICBjb25zdCByYW5nZSA9IElEQktleVJhbmdlLmJvdW5kKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG4gIGNvbnN0IHJlcXVlc3QgPSBpbmRleC5nZXRBbGwocmFuZ2UpOyAgXG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgRnVzZSBmcm9tICdmdXNlLmpzJztcbmltcG9ydCB7IGdldEFsbEhpc3RvcnlJdGVtcyB9IGZyb20gJy4uL3V0aWxzL2RiLmpzJztcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VhcmNoUmVzdWx0cyhyYXdfcXVlcnkpIHtcbiAgICBjb25zdCBxdWVyeSA9IHJhd19xdWVyeS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBoaXN0b3J5SXRlbXMgPSBhd2FpdCBnZXRBbGxIaXN0b3J5SXRlbXMoKTtcbiAgICBjb25zdCBmdXNlID0gbmV3IEZ1c2UoaGlzdG9yeUl0ZW1zLCB7XG4gICAgICAgIGtleXM6IFtcbiAgICAgICAgICAgICd0aXRsZScsXG4gICAgICAgICAgICAnc3VtbWFyeScsXG4gICAgICAgICAgICB7IG5hbWU6ICd0YWdzJywgd2VpZ2h0OiAwLjUgfVxuICAgICAgICBdLFxuICAgICAgICB0aHJlc2hvbGQ6IDAuMlxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IGZ1c2Uuc2VhcmNoKHF1ZXJ5KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbHRlcmVkSGlzdG9yeUl0ZW1zKGhpc3RvcnlJdGVtcywgc2VsZWN0ZWRGaWx0ZXJzLCBleGNsdWRlRmlsdGVycykge1xuICAgIC8vIFN0YXJ0IHdpdGggYWxsIGhpc3RvcnkgaXRlbXNcbiAgICBsZXQgZmlsdGVyZWRJdGVtcyA9IGhpc3RvcnlJdGVtcztcblxuICAgIC8vIEFwcGx5IGluY2x1c2lvbiBmaWx0ZXJzIGlmIGFueVxuICAgIGlmIChzZWxlY3RlZEZpbHRlcnMgJiYgc2VsZWN0ZWRGaWx0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbG93ZXJDYXNlU2VsZWN0ZWRGaWx0ZXJzID0gc2VsZWN0ZWRGaWx0ZXJzLm1hcChmaWx0ZXIgPT4gZmlsdGVyLnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgICAgIGZpbHRlcmVkSXRlbXMgPSBmaWx0ZXJlZEl0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS50aXRsZSA/IGl0ZW0udGl0bGUudG9Mb3dlckNhc2UoKSA6ICcnO1xuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGl0ZW0uc3VtbWFyeSA/IGl0ZW0uc3VtbWFyeS50b0xvd2VyQ2FzZSgpIDogJyc7XG4gICAgICAgICAgICBjb25zdCB0YWdzID0gaXRlbS50YWdzID8gaXRlbS50YWdzLm1hcCh0YWcgPT4gdGFnLnRvTG93ZXJDYXNlKCkpIDogW107XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBpdGVtLnVybCA/IGl0ZW0udXJsLnRvTG93ZXJDYXNlKCkgOiAnJztcblxuICAgICAgICAgICAgcmV0dXJuIGxvd2VyQ2FzZVNlbGVjdGVkRmlsdGVycy5zb21lKGZpbHRlciA9PiBcbiAgICAgICAgICAgICAgICB0aXRsZS5pbmNsdWRlcyhmaWx0ZXIpIHx8XG4gICAgICAgICAgICAgICAgc3VtbWFyeS5pbmNsdWRlcyhmaWx0ZXIpIHx8XG4gICAgICAgICAgICAgICAgdGFncy5pbmNsdWRlcyhmaWx0ZXIpIHx8XG4gICAgICAgICAgICAgICAgdXJsLmluY2x1ZGVzKGZpbHRlcilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGV4Y2x1c2lvbiBmaWx0ZXJzIGlmIGFueVxuICAgIGlmIChleGNsdWRlRmlsdGVycyAmJiBleGNsdWRlRmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyQ2FzZUV4Y2x1ZGVGaWx0ZXJzID0gZXhjbHVkZUZpbHRlcnMubWFwKGZpbHRlciA9PiBmaWx0ZXIudG9Mb3dlckNhc2UoKSk7XG5cbiAgICAgICAgZmlsdGVyZWRJdGVtcyA9IGZpbHRlcmVkSXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnRpdGxlID8gaXRlbS50aXRsZS50b0xvd2VyQ2FzZSgpIDogJyc7XG4gICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gaXRlbS5zdW1tYXJ5ID8gaXRlbS5zdW1tYXJ5LnRvTG93ZXJDYXNlKCkgOiAnJztcbiAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSBpdGVtLnRhZ3MgPyBpdGVtLnRhZ3MubWFwKHRhZyA9PiB0YWcudG9Mb3dlckNhc2UoKSkgOiBbXTtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGl0ZW0udXJsID8gaXRlbS51cmwudG9Mb3dlckNhc2UoKSA6ICcnO1xuXG4gICAgICAgICAgICByZXR1cm4gIWxvd2VyQ2FzZUV4Y2x1ZGVGaWx0ZXJzLnNvbWUoZmlsdGVyID0+IFxuICAgICAgICAgICAgICAgIHRpdGxlLmluY2x1ZGVzKGZpbHRlcikgfHxcbiAgICAgICAgICAgICAgICBzdW1tYXJ5LmluY2x1ZGVzKGZpbHRlcikgfHxcbiAgICAgICAgICAgICAgICB0YWdzLmluY2x1ZGVzKGZpbHRlcikgfHxcbiAgICAgICAgICAgICAgICB1cmwuaW5jbHVkZXMoZmlsdGVyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlcmVkSXRlbXM7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKipcbiAqIEZ1c2UuanMgdjcuMC4wIC0gTGlnaHR3ZWlnaHQgZnV6enktc2VhcmNoIChodHRwOi8vZnVzZWpzLmlvKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAyMyBLaXJvIFJpc2sgKGh0dHA6Ly9raXJvLm1lKVxuICogQWxsIFJpZ2h0cyBSZXNlcnZlZC4gQXBhY2hlIFNvZnR3YXJlIExpY2Vuc2UgMi4wXG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKi9cblxuZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gIUFycmF5LmlzQXJyYXlcbiAgICA/IGdldFRhZyh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgICA6IEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbi8vIEFkYXB0ZWQgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2xvZGFzaC9sb2Rhc2gvYmxvYi9tYXN0ZXIvLmludGVybmFsL2Jhc2VUb1N0cmluZy5qc1xuY29uc3QgSU5GSU5JVFkgPSAxIC8gMDtcbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbiAgbGV0IHJlc3VsdCA9IHZhbHVlICsgJyc7XG4gIHJldHVybiByZXN1bHQgPT0gJzAnICYmIDEgLyB2YWx1ZSA9PSAtSU5GSU5JVFkgPyAnLTAnIDogcmVzdWx0XG59XG5cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpXG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbi8vIEFkYXB0ZWQgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2xvZGFzaC9sb2Rhc2gvYmxvYi9tYXN0ZXIvaXNCb29sZWFuLmpzXG5mdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSA9PT0gdHJ1ZSB8fFxuICAgIHZhbHVlID09PSBmYWxzZSB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGdldFRhZyh2YWx1ZSkgPT0gJ1tvYmplY3QgQm9vbGVhbl0nKVxuICApXG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbi8vIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLlxuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgdmFsdWUgIT09IG51bGxcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzQmxhbmsodmFsdWUpIHtcbiAgcmV0dXJuICF2YWx1ZS50cmltKCkubGVuZ3RoXG59XG5cbi8vIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbi8vIEFkYXB0ZWQgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2xvZGFzaC9sb2Rhc2gvYmxvYi9tYXN0ZXIvLmludGVybmFsL2dldFRhZy5qc1xuZnVuY3Rpb24gZ2V0VGFnKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsXG4gICAgPyB2YWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgICA/ICdbb2JqZWN0IFVuZGVmaW5lZF0nXG4gICAgICA6ICdbb2JqZWN0IE51bGxdJ1xuICAgIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKVxufVxuXG5jb25zdCBFWFRFTkRFRF9TRUFSQ0hfVU5BVkFJTEFCTEUgPSAnRXh0ZW5kZWQgc2VhcmNoIGlzIG5vdCBhdmFpbGFibGUnO1xuXG5jb25zdCBJTkNPUlJFQ1RfSU5ERVhfVFlQRSA9IFwiSW5jb3JyZWN0ICdpbmRleCcgdHlwZVwiO1xuXG5jb25zdCBMT0dJQ0FMX1NFQVJDSF9JTlZBTElEX1FVRVJZX0ZPUl9LRVkgPSAoa2V5KSA9PlxuICBgSW52YWxpZCB2YWx1ZSBmb3Iga2V5ICR7a2V5fWA7XG5cbmNvbnN0IFBBVFRFUk5fTEVOR1RIX1RPT19MQVJHRSA9IChtYXgpID0+XG4gIGBQYXR0ZXJuIGxlbmd0aCBleGNlZWRzIG1heCBvZiAke21heH0uYDtcblxuY29uc3QgTUlTU0lOR19LRVlfUFJPUEVSVFkgPSAobmFtZSkgPT4gYE1pc3NpbmcgJHtuYW1lfSBwcm9wZXJ0eSBpbiBrZXlgO1xuXG5jb25zdCBJTlZBTElEX0tFWV9XRUlHSFRfVkFMVUUgPSAoa2V5KSA9PlxuICBgUHJvcGVydHkgJ3dlaWdodCcgaW4ga2V5ICcke2tleX0nIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyYDtcblxuY29uc3QgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuY2xhc3MgS2V5U3RvcmUge1xuICBjb25zdHJ1Y3RvcihrZXlzKSB7XG4gICAgdGhpcy5fa2V5cyA9IFtdO1xuICAgIHRoaXMuX2tleU1hcCA9IHt9O1xuXG4gICAgbGV0IHRvdGFsV2VpZ2h0ID0gMDtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBsZXQgb2JqID0gY3JlYXRlS2V5KGtleSk7XG5cbiAgICAgIHRoaXMuX2tleXMucHVzaChvYmopO1xuICAgICAgdGhpcy5fa2V5TWFwW29iai5pZF0gPSBvYmo7XG5cbiAgICAgIHRvdGFsV2VpZ2h0ICs9IG9iai53ZWlnaHQ7XG4gICAgfSk7XG5cbiAgICAvLyBOb3JtYWxpemUgd2VpZ2h0cyBzbyB0aGF0IHRoZWlyIHN1bSBpcyBlcXVhbCB0byAxXG4gICAgdGhpcy5fa2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGtleS53ZWlnaHQgLz0gdG90YWxXZWlnaHQ7XG4gICAgfSk7XG4gIH1cbiAgZ2V0KGtleUlkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleU1hcFtrZXlJZF1cbiAgfVxuICBrZXlzKCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlzXG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLl9rZXlzKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleShrZXkpIHtcbiAgbGV0IHBhdGggPSBudWxsO1xuICBsZXQgaWQgPSBudWxsO1xuICBsZXQgc3JjID0gbnVsbDtcbiAgbGV0IHdlaWdodCA9IDE7XG4gIGxldCBnZXRGbiA9IG51bGw7XG5cbiAgaWYgKGlzU3RyaW5nKGtleSkgfHwgaXNBcnJheShrZXkpKSB7XG4gICAgc3JjID0ga2V5O1xuICAgIHBhdGggPSBjcmVhdGVLZXlQYXRoKGtleSk7XG4gICAgaWQgPSBjcmVhdGVLZXlJZChrZXkpO1xuICB9IGVsc2Uge1xuICAgIGlmICghaGFzT3duLmNhbGwoa2V5LCAnbmFtZScpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoTUlTU0lOR19LRVlfUFJPUEVSVFkoJ25hbWUnKSlcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lID0ga2V5Lm5hbWU7XG4gICAgc3JjID0gbmFtZTtcblxuICAgIGlmIChoYXNPd24uY2FsbChrZXksICd3ZWlnaHQnKSkge1xuICAgICAgd2VpZ2h0ID0ga2V5LndlaWdodDtcblxuICAgICAgaWYgKHdlaWdodCA8PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX0tFWV9XRUlHSFRfVkFMVUUobmFtZSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcGF0aCA9IGNyZWF0ZUtleVBhdGgobmFtZSk7XG4gICAgaWQgPSBjcmVhdGVLZXlJZChuYW1lKTtcbiAgICBnZXRGbiA9IGtleS5nZXRGbjtcbiAgfVxuXG4gIHJldHVybiB7IHBhdGgsIGlkLCB3ZWlnaHQsIHNyYywgZ2V0Rm4gfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXlQYXRoKGtleSkge1xuICByZXR1cm4gaXNBcnJheShrZXkpID8ga2V5IDoga2V5LnNwbGl0KCcuJylcbn1cblxuZnVuY3Rpb24gY3JlYXRlS2V5SWQoa2V5KSB7XG4gIHJldHVybiBpc0FycmF5KGtleSkgPyBrZXkuam9pbignLicpIDoga2V5XG59XG5cbmZ1bmN0aW9uIGdldChvYmosIHBhdGgpIHtcbiAgbGV0IGxpc3QgPSBbXTtcbiAgbGV0IGFyciA9IGZhbHNlO1xuXG4gIGNvbnN0IGRlZXBHZXQgPSAob2JqLCBwYXRoLCBpbmRleCkgPT4ge1xuICAgIGlmICghaXNEZWZpbmVkKG9iaikpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoIXBhdGhbaW5kZXhdKSB7XG4gICAgICAvLyBJZiB0aGVyZSdzIG5vIHBhdGggbGVmdCwgd2UndmUgYXJyaXZlZCBhdCB0aGUgb2JqZWN0IHdlIGNhcmUgYWJvdXQuXG4gICAgICBsaXN0LnB1c2gob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGtleSA9IHBhdGhbaW5kZXhdO1xuXG4gICAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBsYXN0IHZhbHVlIGluIHRoZSBwYXRoLCBhbmQgaWYgaXQncyBhIHN0cmluZy9udW1iZXIvYm9vbCxcbiAgICAgIC8vIGFkZCBpdCB0byB0aGUgbGlzdFxuICAgICAgaWYgKFxuICAgICAgICBpbmRleCA9PT0gcGF0aC5sZW5ndGggLSAxICYmXG4gICAgICAgIChpc1N0cmluZyh2YWx1ZSkgfHwgaXNOdW1iZXIodmFsdWUpIHx8IGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgICApIHtcbiAgICAgICAgbGlzdC5wdXNoKHRvU3RyaW5nKHZhbHVlKSk7XG4gICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGFyciA9IHRydWU7XG4gICAgICAgIC8vIFNlYXJjaCBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5LlxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICBkZWVwR2V0KHZhbHVlW2ldLCBwYXRoLCBpbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhdGgubGVuZ3RoKSB7XG4gICAgICAgIC8vIEFuIG9iamVjdC4gUmVjdXJzZSBmdXJ0aGVyLlxuICAgICAgICBkZWVwR2V0KHZhbHVlLCBwYXRoLCBpbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eSAoc2luY2UgcGF0aCB1c2VkIHRvIGJlIGEgc3RyaW5nKVxuICBkZWVwR2V0KG9iaiwgaXNTdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoLCAwKTtcblxuICByZXR1cm4gYXJyID8gbGlzdCA6IGxpc3RbMF1cbn1cblxuY29uc3QgTWF0Y2hPcHRpb25zID0ge1xuICAvLyBXaGV0aGVyIHRoZSBtYXRjaGVzIHNob3VsZCBiZSBpbmNsdWRlZCBpbiB0aGUgcmVzdWx0IHNldC4gV2hlbiBgdHJ1ZWAsIGVhY2ggcmVjb3JkIGluIHRoZSByZXN1bHRcbiAgLy8gc2V0IHdpbGwgaW5jbHVkZSB0aGUgaW5kaWNlcyBvZiB0aGUgbWF0Y2hlZCBjaGFyYWN0ZXJzLlxuICAvLyBUaGVzZSBjYW4gY29uc2VxdWVudGx5IGJlIHVzZWQgZm9yIGhpZ2hsaWdodGluZyBwdXJwb3Nlcy5cbiAgaW5jbHVkZU1hdGNoZXM6IGZhbHNlLFxuICAvLyBXaGVuIGB0cnVlYCwgdGhlIG1hdGNoaW5nIGZ1bmN0aW9uIHdpbGwgY29udGludWUgdG8gdGhlIGVuZCBvZiBhIHNlYXJjaCBwYXR0ZXJuIGV2ZW4gaWZcbiAgLy8gYSBwZXJmZWN0IG1hdGNoIGhhcyBhbHJlYWR5IGJlZW4gbG9jYXRlZCBpbiB0aGUgc3RyaW5nLlxuICBmaW5kQWxsTWF0Y2hlczogZmFsc2UsXG4gIC8vIE1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBtdXN0IGJlIG1hdGNoZWQgYmVmb3JlIGEgcmVzdWx0IGlzIGNvbnNpZGVyZWQgYSBtYXRjaFxuICBtaW5NYXRjaENoYXJMZW5ndGg6IDFcbn07XG5cbmNvbnN0IEJhc2ljT3B0aW9ucyA9IHtcbiAgLy8gV2hlbiBgdHJ1ZWAsIHRoZSBhbGdvcml0aG0gY29udGludWVzIHNlYXJjaGluZyB0byB0aGUgZW5kIG9mIHRoZSBpbnB1dCBldmVuIGlmIGEgcGVyZmVjdFxuICAvLyBtYXRjaCBpcyBmb3VuZCBiZWZvcmUgdGhlIGVuZCBvZiB0aGUgc2FtZSBpbnB1dC5cbiAgaXNDYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgLy8gV2hlbiB0cnVlLCB0aGUgbWF0Y2hpbmcgZnVuY3Rpb24gd2lsbCBjb250aW51ZSB0byB0aGUgZW5kIG9mIGEgc2VhcmNoIHBhdHRlcm4gZXZlbiBpZlxuICBpbmNsdWRlU2NvcmU6IGZhbHNlLFxuICAvLyBMaXN0IG9mIHByb3BlcnRpZXMgdGhhdCB3aWxsIGJlIHNlYXJjaGVkLiBUaGlzIGFsc28gc3VwcG9ydHMgbmVzdGVkIHByb3BlcnRpZXMuXG4gIGtleXM6IFtdLFxuICAvLyBXaGV0aGVyIHRvIHNvcnQgdGhlIHJlc3VsdCBsaXN0LCBieSBzY29yZVxuICBzaG91bGRTb3J0OiB0cnVlLFxuICAvLyBEZWZhdWx0IHNvcnQgZnVuY3Rpb246IHNvcnQgYnkgYXNjZW5kaW5nIHNjb3JlLCBhc2NlbmRpbmcgaW5kZXhcbiAgc29ydEZuOiAoYSwgYikgPT5cbiAgICBhLnNjb3JlID09PSBiLnNjb3JlID8gKGEuaWR4IDwgYi5pZHggPyAtMSA6IDEpIDogYS5zY29yZSA8IGIuc2NvcmUgPyAtMSA6IDFcbn07XG5cbmNvbnN0IEZ1enp5T3B0aW9ucyA9IHtcbiAgLy8gQXBwcm94aW1hdGVseSB3aGVyZSBpbiB0aGUgdGV4dCBpcyB0aGUgcGF0dGVybiBleHBlY3RlZCB0byBiZSBmb3VuZD9cbiAgbG9jYXRpb246IDAsXG4gIC8vIEF0IHdoYXQgcG9pbnQgZG9lcyB0aGUgbWF0Y2ggYWxnb3JpdGhtIGdpdmUgdXAuIEEgdGhyZXNob2xkIG9mICcwLjAnIHJlcXVpcmVzIGEgcGVyZmVjdCBtYXRjaFxuICAvLyAob2YgYm90aCBsZXR0ZXJzIGFuZCBsb2NhdGlvbiksIGEgdGhyZXNob2xkIG9mICcxLjAnIHdvdWxkIG1hdGNoIGFueXRoaW5nLlxuICB0aHJlc2hvbGQ6IDAuNixcbiAgLy8gRGV0ZXJtaW5lcyBob3cgY2xvc2UgdGhlIG1hdGNoIG11c3QgYmUgdG8gdGhlIGZ1enp5IGxvY2F0aW9uIChzcGVjaWZpZWQgYWJvdmUpLlxuICAvLyBBbiBleGFjdCBsZXR0ZXIgbWF0Y2ggd2hpY2ggaXMgJ2Rpc3RhbmNlJyBjaGFyYWN0ZXJzIGF3YXkgZnJvbSB0aGUgZnV6enkgbG9jYXRpb25cbiAgLy8gd291bGQgc2NvcmUgYXMgYSBjb21wbGV0ZSBtaXNtYXRjaC4gQSBkaXN0YW5jZSBvZiAnMCcgcmVxdWlyZXMgdGhlIG1hdGNoIGJlIGF0XG4gIC8vIHRoZSBleGFjdCBsb2NhdGlvbiBzcGVjaWZpZWQsIGEgdGhyZXNob2xkIG9mICcxMDAwJyB3b3VsZCByZXF1aXJlIGEgcGVyZmVjdCBtYXRjaFxuICAvLyB0byBiZSB3aXRoaW4gODAwIGNoYXJhY3RlcnMgb2YgdGhlIGZ1enp5IGxvY2F0aW9uIHRvIGJlIGZvdW5kIHVzaW5nIGEgMC44IHRocmVzaG9sZC5cbiAgZGlzdGFuY2U6IDEwMFxufTtcblxuY29uc3QgQWR2YW5jZWRPcHRpb25zID0ge1xuICAvLyBXaGVuIGB0cnVlYCwgaXQgZW5hYmxlcyB0aGUgdXNlIG9mIHVuaXgtbGlrZSBzZWFyY2ggY29tbWFuZHNcbiAgdXNlRXh0ZW5kZWRTZWFyY2g6IGZhbHNlLFxuICAvLyBUaGUgZ2V0IGZ1bmN0aW9uIHRvIHVzZSB3aGVuIGZldGNoaW5nIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIC8vIFRoZSBkZWZhdWx0IHdpbGwgc2VhcmNoIG5lc3RlZCBwYXRocyAqaWUgZm9vLmJhci5iYXoqXG4gIGdldEZuOiBnZXQsXG4gIC8vIFdoZW4gYHRydWVgLCBzZWFyY2ggd2lsbCBpZ25vcmUgYGxvY2F0aW9uYCBhbmQgYGRpc3RhbmNlYCwgc28gaXQgd29uJ3QgbWF0dGVyXG4gIC8vIHdoZXJlIGluIHRoZSBzdHJpbmcgdGhlIHBhdHRlcm4gYXBwZWFycy5cbiAgLy8gTW9yZSBpbmZvOiBodHRwczovL2Z1c2Vqcy5pby9jb25jZXB0cy9zY29yaW5nLXRoZW9yeS5odG1sI2Z1enppbmVzcy1zY29yZVxuICBpZ25vcmVMb2NhdGlvbjogZmFsc2UsXG4gIC8vIFdoZW4gYHRydWVgLCB0aGUgY2FsY3VsYXRpb24gZm9yIHRoZSByZWxldmFuY2Ugc2NvcmUgKHVzZWQgZm9yIHNvcnRpbmcpIHdpbGxcbiAgLy8gaWdub3JlIHRoZSBmaWVsZC1sZW5ndGggbm9ybS5cbiAgLy8gTW9yZSBpbmZvOiBodHRwczovL2Z1c2Vqcy5pby9jb25jZXB0cy9zY29yaW5nLXRoZW9yeS5odG1sI2ZpZWxkLWxlbmd0aC1ub3JtXG4gIGlnbm9yZUZpZWxkTm9ybTogZmFsc2UsXG4gIC8vIFRoZSB3ZWlnaHQgdG8gZGV0ZXJtaW5lIGhvdyBtdWNoIGZpZWxkIGxlbmd0aCBub3JtIGVmZmVjdHMgc2NvcmluZy5cbiAgZmllbGROb3JtV2VpZ2h0OiAxXG59O1xuXG52YXIgQ29uZmlnID0ge1xuICAuLi5CYXNpY09wdGlvbnMsXG4gIC4uLk1hdGNoT3B0aW9ucyxcbiAgLi4uRnV6enlPcHRpb25zLFxuICAuLi5BZHZhbmNlZE9wdGlvbnNcbn07XG5cbmNvbnN0IFNQQUNFID0gL1teIF0rL2c7XG5cbi8vIEZpZWxkLWxlbmd0aCBub3JtOiB0aGUgc2hvcnRlciB0aGUgZmllbGQsIHRoZSBoaWdoZXIgdGhlIHdlaWdodC5cbi8vIFNldCB0byAzIGRlY2ltYWxzIHRvIHJlZHVjZSBpbmRleCBzaXplLlxuZnVuY3Rpb24gbm9ybSh3ZWlnaHQgPSAxLCBtYW50aXNzYSA9IDMpIHtcbiAgY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IG0gPSBNYXRoLnBvdygxMCwgbWFudGlzc2EpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0KHZhbHVlKSB7XG4gICAgICBjb25zdCBudW1Ub2tlbnMgPSB2YWx1ZS5tYXRjaChTUEFDRSkubGVuZ3RoO1xuXG4gICAgICBpZiAoY2FjaGUuaGFzKG51bVRva2VucykpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlLmdldChudW1Ub2tlbnMpXG4gICAgICB9XG5cbiAgICAgIC8vIERlZmF1bHQgZnVuY3Rpb24gaXMgMS9zcXJ0KHgpLCB3ZWlnaHQgbWFrZXMgdGhhdCB2YXJpYWJsZVxuICAgICAgY29uc3Qgbm9ybSA9IDEgLyBNYXRoLnBvdyhudW1Ub2tlbnMsIDAuNSAqIHdlaWdodCk7XG5cbiAgICAgIC8vIEluIHBsYWNlIG9mIGB0b0ZpeGVkKG1hbnRpc3NhKWAsIGZvciBmYXN0ZXIgY29tcHV0YXRpb25cbiAgICAgIGNvbnN0IG4gPSBwYXJzZUZsb2F0KE1hdGgucm91bmQobm9ybSAqIG0pIC8gbSk7XG5cbiAgICAgIGNhY2hlLnNldChudW1Ub2tlbnMsIG4pO1xuXG4gICAgICByZXR1cm4gblxuICAgIH0sXG4gICAgY2xlYXIoKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBGdXNlSW5kZXgge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZ2V0Rm4gPSBDb25maWcuZ2V0Rm4sXG4gICAgZmllbGROb3JtV2VpZ2h0ID0gQ29uZmlnLmZpZWxkTm9ybVdlaWdodFxuICB9ID0ge30pIHtcbiAgICB0aGlzLm5vcm0gPSBub3JtKGZpZWxkTm9ybVdlaWdodCwgMyk7XG4gICAgdGhpcy5nZXRGbiA9IGdldEZuO1xuICAgIHRoaXMuaXNDcmVhdGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldEluZGV4UmVjb3JkcygpO1xuICB9XG4gIHNldFNvdXJjZXMoZG9jcyA9IFtdKSB7XG4gICAgdGhpcy5kb2NzID0gZG9jcztcbiAgfVxuICBzZXRJbmRleFJlY29yZHMocmVjb3JkcyA9IFtdKSB7XG4gICAgdGhpcy5yZWNvcmRzID0gcmVjb3JkcztcbiAgfVxuICBzZXRLZXlzKGtleXMgPSBbXSkge1xuICAgIHRoaXMua2V5cyA9IGtleXM7XG4gICAgdGhpcy5fa2V5c01hcCA9IHt9O1xuICAgIGtleXMuZm9yRWFjaCgoa2V5LCBpZHgpID0+IHtcbiAgICAgIHRoaXMuX2tleXNNYXBba2V5LmlkXSA9IGlkeDtcbiAgICB9KTtcbiAgfVxuICBjcmVhdGUoKSB7XG4gICAgaWYgKHRoaXMuaXNDcmVhdGVkIHx8ICF0aGlzLmRvY3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlzQ3JlYXRlZCA9IHRydWU7XG5cbiAgICAvLyBMaXN0IGlzIEFycmF5PFN0cmluZz5cbiAgICBpZiAoaXNTdHJpbmcodGhpcy5kb2NzWzBdKSkge1xuICAgICAgdGhpcy5kb2NzLmZvckVhY2goKGRvYywgZG9jSW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5fYWRkU3RyaW5nKGRvYywgZG9jSW5kZXgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpc3QgaXMgQXJyYXk8T2JqZWN0PlxuICAgICAgdGhpcy5kb2NzLmZvckVhY2goKGRvYywgZG9jSW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5fYWRkT2JqZWN0KGRvYywgZG9jSW5kZXgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5ub3JtLmNsZWFyKCk7XG4gIH1cbiAgLy8gQWRkcyBhIGRvYyB0byB0aGUgZW5kIG9mIHRoZSBpbmRleFxuICBhZGQoZG9jKSB7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5zaXplKCk7XG5cbiAgICBpZiAoaXNTdHJpbmcoZG9jKSkge1xuICAgICAgdGhpcy5fYWRkU3RyaW5nKGRvYywgaWR4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWRkT2JqZWN0KGRvYywgaWR4KTtcbiAgICB9XG4gIH1cbiAgLy8gUmVtb3ZlcyB0aGUgZG9jIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXggb2YgdGhlIGluZGV4XG4gIHJlbW92ZUF0KGlkeCkge1xuICAgIHRoaXMucmVjb3Jkcy5zcGxpY2UoaWR4LCAxKTtcblxuICAgIC8vIENoYW5nZSByZWYgaW5kZXggb2YgZXZlcnkgc3Vic3F1ZW50IGRvY1xuICAgIGZvciAobGV0IGkgPSBpZHgsIGxlbiA9IHRoaXMuc2l6ZSgpOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIHRoaXMucmVjb3Jkc1tpXS5pIC09IDE7XG4gICAgfVxuICB9XG4gIGdldFZhbHVlRm9ySXRlbUF0S2V5SWQoaXRlbSwga2V5SWQpIHtcbiAgICByZXR1cm4gaXRlbVt0aGlzLl9rZXlzTWFwW2tleUlkXV1cbiAgfVxuICBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLnJlY29yZHMubGVuZ3RoXG4gIH1cbiAgX2FkZFN0cmluZyhkb2MsIGRvY0luZGV4KSB7XG4gICAgaWYgKCFpc0RlZmluZWQoZG9jKSB8fCBpc0JsYW5rKGRvYykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCByZWNvcmQgPSB7XG4gICAgICB2OiBkb2MsXG4gICAgICBpOiBkb2NJbmRleCxcbiAgICAgIG46IHRoaXMubm9ybS5nZXQoZG9jKVxuICAgIH07XG5cbiAgICB0aGlzLnJlY29yZHMucHVzaChyZWNvcmQpO1xuICB9XG4gIF9hZGRPYmplY3QoZG9jLCBkb2NJbmRleCkge1xuICAgIGxldCByZWNvcmQgPSB7IGk6IGRvY0luZGV4LCAkOiB7fSB9O1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGtleSAoaS5lLCBwYXRoKSwgYW5kIGZldGNoIHRoZSB2YWx1ZSBhdCB0aGF0IGtleVxuICAgIHRoaXMua2V5cy5mb3JFYWNoKChrZXksIGtleUluZGV4KSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBrZXkuZ2V0Rm4gPyBrZXkuZ2V0Rm4oZG9jKSA6IHRoaXMuZ2V0Rm4oZG9jLCBrZXkucGF0aCk7XG5cbiAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGxldCBzdWJSZWNvcmRzID0gW107XG4gICAgICAgIGNvbnN0IHN0YWNrID0gW3sgbmVzdGVkQXJySW5kZXg6IC0xLCB2YWx1ZSB9XTtcblxuICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgeyBuZXN0ZWRBcnJJbmRleCwgdmFsdWUgfSA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgIWlzQmxhbmsodmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgc3ViUmVjb3JkID0ge1xuICAgICAgICAgICAgICB2OiB2YWx1ZSxcbiAgICAgICAgICAgICAgaTogbmVzdGVkQXJySW5kZXgsXG4gICAgICAgICAgICAgIG46IHRoaXMubm9ybS5nZXQodmFsdWUpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzdWJSZWNvcmRzLnB1c2goc3ViUmVjb3JkKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtLCBrKSA9PiB7XG4gICAgICAgICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgICAgICAgIG5lc3RlZEFyckluZGV4OiBrLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIDtcbiAgICAgICAgfVxuICAgICAgICByZWNvcmQuJFtrZXlJbmRleF0gPSBzdWJSZWNvcmRzO1xuICAgICAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgIWlzQmxhbmsodmFsdWUpKSB7XG4gICAgICAgIGxldCBzdWJSZWNvcmQgPSB7XG4gICAgICAgICAgdjogdmFsdWUsXG4gICAgICAgICAgbjogdGhpcy5ub3JtLmdldCh2YWx1ZSlcbiAgICAgICAgfTtcblxuICAgICAgICByZWNvcmQuJFtrZXlJbmRleF0gPSBzdWJSZWNvcmQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlY29yZHMucHVzaChyZWNvcmQpO1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5czogdGhpcy5rZXlzLFxuICAgICAgcmVjb3JkczogdGhpcy5yZWNvcmRzXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4KFxuICBrZXlzLFxuICBkb2NzLFxuICB7IGdldEZuID0gQ29uZmlnLmdldEZuLCBmaWVsZE5vcm1XZWlnaHQgPSBDb25maWcuZmllbGROb3JtV2VpZ2h0IH0gPSB7fVxuKSB7XG4gIGNvbnN0IG15SW5kZXggPSBuZXcgRnVzZUluZGV4KHsgZ2V0Rm4sIGZpZWxkTm9ybVdlaWdodCB9KTtcbiAgbXlJbmRleC5zZXRLZXlzKGtleXMubWFwKGNyZWF0ZUtleSkpO1xuICBteUluZGV4LnNldFNvdXJjZXMoZG9jcyk7XG4gIG15SW5kZXguY3JlYXRlKCk7XG4gIHJldHVybiBteUluZGV4XG59XG5cbmZ1bmN0aW9uIHBhcnNlSW5kZXgoXG4gIGRhdGEsXG4gIHsgZ2V0Rm4gPSBDb25maWcuZ2V0Rm4sIGZpZWxkTm9ybVdlaWdodCA9IENvbmZpZy5maWVsZE5vcm1XZWlnaHQgfSA9IHt9XG4pIHtcbiAgY29uc3QgeyBrZXlzLCByZWNvcmRzIH0gPSBkYXRhO1xuICBjb25zdCBteUluZGV4ID0gbmV3IEZ1c2VJbmRleCh7IGdldEZuLCBmaWVsZE5vcm1XZWlnaHQgfSk7XG4gIG15SW5kZXguc2V0S2V5cyhrZXlzKTtcbiAgbXlJbmRleC5zZXRJbmRleFJlY29yZHMocmVjb3Jkcyk7XG4gIHJldHVybiBteUluZGV4XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTY29yZSQxKFxuICBwYXR0ZXJuLFxuICB7XG4gICAgZXJyb3JzID0gMCxcbiAgICBjdXJyZW50TG9jYXRpb24gPSAwLFxuICAgIGV4cGVjdGVkTG9jYXRpb24gPSAwLFxuICAgIGRpc3RhbmNlID0gQ29uZmlnLmRpc3RhbmNlLFxuICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uXG4gIH0gPSB7fVxuKSB7XG4gIGNvbnN0IGFjY3VyYWN5ID0gZXJyb3JzIC8gcGF0dGVybi5sZW5ndGg7XG5cbiAgaWYgKGlnbm9yZUxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIGFjY3VyYWN5XG4gIH1cblxuICBjb25zdCBwcm94aW1pdHkgPSBNYXRoLmFicyhleHBlY3RlZExvY2F0aW9uIC0gY3VycmVudExvY2F0aW9uKTtcblxuICBpZiAoIWRpc3RhbmNlKSB7XG4gICAgLy8gRG9kZ2UgZGl2aWRlIGJ5IHplcm8gZXJyb3IuXG4gICAgcmV0dXJuIHByb3hpbWl0eSA/IDEuMCA6IGFjY3VyYWN5XG4gIH1cblxuICByZXR1cm4gYWNjdXJhY3kgKyBwcm94aW1pdHkgLyBkaXN0YW5jZVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0TWFza1RvSW5kaWNlcyhcbiAgbWF0Y2htYXNrID0gW10sXG4gIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGhcbikge1xuICBsZXQgaW5kaWNlcyA9IFtdO1xuICBsZXQgc3RhcnQgPSAtMTtcbiAgbGV0IGVuZCA9IC0xO1xuICBsZXQgaSA9IDA7XG5cbiAgZm9yIChsZXQgbGVuID0gbWF0Y2htYXNrLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbGV0IG1hdGNoID0gbWF0Y2htYXNrW2ldO1xuICAgIGlmIChtYXRjaCAmJiBzdGFydCA9PT0gLTEpIHtcbiAgICAgIHN0YXJ0ID0gaTtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaCAmJiBzdGFydCAhPT0gLTEpIHtcbiAgICAgIGVuZCA9IGkgLSAxO1xuICAgICAgaWYgKGVuZCAtIHN0YXJ0ICsgMSA+PSBtaW5NYXRjaENoYXJMZW5ndGgpIHtcbiAgICAgICAgaW5kaWNlcy5wdXNoKFtzdGFydCwgZW5kXSk7XG4gICAgICB9XG4gICAgICBzdGFydCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIC8vIChpLTEgLSBzdGFydCkgKyAxID0+IGkgLSBzdGFydFxuICBpZiAobWF0Y2htYXNrW2kgLSAxXSAmJiBpIC0gc3RhcnQgPj0gbWluTWF0Y2hDaGFyTGVuZ3RoKSB7XG4gICAgaW5kaWNlcy5wdXNoKFtzdGFydCwgaSAtIDFdKTtcbiAgfVxuXG4gIHJldHVybiBpbmRpY2VzXG59XG5cbi8vIE1hY2hpbmUgd29yZCBzaXplXG5jb25zdCBNQVhfQklUUyA9IDMyO1xuXG5mdW5jdGlvbiBzZWFyY2goXG4gIHRleHQsXG4gIHBhdHRlcm4sXG4gIHBhdHRlcm5BbHBoYWJldCxcbiAge1xuICAgIGxvY2F0aW9uID0gQ29uZmlnLmxvY2F0aW9uLFxuICAgIGRpc3RhbmNlID0gQ29uZmlnLmRpc3RhbmNlLFxuICAgIHRocmVzaG9sZCA9IENvbmZpZy50aHJlc2hvbGQsXG4gICAgZmluZEFsbE1hdGNoZXMgPSBDb25maWcuZmluZEFsbE1hdGNoZXMsXG4gICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvblxuICB9ID0ge31cbikge1xuICBpZiAocGF0dGVybi5sZW5ndGggPiBNQVhfQklUUykge1xuICAgIHRocm93IG5ldyBFcnJvcihQQVRURVJOX0xFTkdUSF9UT09fTEFSR0UoTUFYX0JJVFMpKVxuICB9XG5cbiAgY29uc3QgcGF0dGVybkxlbiA9IHBhdHRlcm4ubGVuZ3RoO1xuICAvLyBTZXQgc3RhcnRpbmcgbG9jYXRpb24gYXQgYmVnaW5uaW5nIHRleHQgYW5kIGluaXRpYWxpemUgdGhlIGFscGhhYmV0LlxuICBjb25zdCB0ZXh0TGVuID0gdGV4dC5sZW5ndGg7XG4gIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVuIGxvY2F0aW9uID4gdGV4dC5sZW5ndGhcbiAgY29uc3QgZXhwZWN0ZWRMb2NhdGlvbiA9IE1hdGgubWF4KDAsIE1hdGgubWluKGxvY2F0aW9uLCB0ZXh0TGVuKSk7XG4gIC8vIEhpZ2hlc3Qgc2NvcmUgYmV5b25kIHdoaWNoIHdlIGdpdmUgdXAuXG4gIGxldCBjdXJyZW50VGhyZXNob2xkID0gdGhyZXNob2xkO1xuICAvLyBJcyB0aGVyZSBhIG5lYXJieSBleGFjdCBtYXRjaD8gKHNwZWVkdXApXG4gIGxldCBiZXN0TG9jYXRpb24gPSBleHBlY3RlZExvY2F0aW9uO1xuXG4gIC8vIFBlcmZvcm1hbmNlOiBvbmx5IGNvbXB1dGVyIG1hdGNoZXMgd2hlbiB0aGUgbWluTWF0Y2hDaGFyTGVuZ3RoID4gMVxuICAvLyBPUiBpZiBgaW5jbHVkZU1hdGNoZXNgIGlzIHRydWUuXG4gIGNvbnN0IGNvbXB1dGVNYXRjaGVzID0gbWluTWF0Y2hDaGFyTGVuZ3RoID4gMSB8fCBpbmNsdWRlTWF0Y2hlcztcbiAgLy8gQSBtYXNrIG9mIHRoZSBtYXRjaGVzLCB1c2VkIGZvciBidWlsZGluZyB0aGUgaW5kaWNlc1xuICBjb25zdCBtYXRjaE1hc2sgPSBjb21wdXRlTWF0Y2hlcyA/IEFycmF5KHRleHRMZW4pIDogW107XG5cbiAgbGV0IGluZGV4O1xuXG4gIC8vIEdldCBhbGwgZXhhY3QgbWF0Y2hlcywgaGVyZSBmb3Igc3BlZWQgdXBcbiAgd2hpbGUgKChpbmRleCA9IHRleHQuaW5kZXhPZihwYXR0ZXJuLCBiZXN0TG9jYXRpb24pKSA+IC0xKSB7XG4gICAgbGV0IHNjb3JlID0gY29tcHV0ZVNjb3JlJDEocGF0dGVybiwge1xuICAgICAgY3VycmVudExvY2F0aW9uOiBpbmRleCxcbiAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfSk7XG5cbiAgICBjdXJyZW50VGhyZXNob2xkID0gTWF0aC5taW4oc2NvcmUsIGN1cnJlbnRUaHJlc2hvbGQpO1xuICAgIGJlc3RMb2NhdGlvbiA9IGluZGV4ICsgcGF0dGVybkxlbjtcblxuICAgIGlmIChjb21wdXRlTWF0Y2hlcykge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBwYXR0ZXJuTGVuKSB7XG4gICAgICAgIG1hdGNoTWFza1tpbmRleCArIGldID0gMTtcbiAgICAgICAgaSArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJlc2V0IHRoZSBiZXN0IGxvY2F0aW9uXG4gIGJlc3RMb2NhdGlvbiA9IC0xO1xuXG4gIGxldCBsYXN0Qml0QXJyID0gW107XG4gIGxldCBmaW5hbFNjb3JlID0gMTtcbiAgbGV0IGJpbk1heCA9IHBhdHRlcm5MZW4gKyB0ZXh0TGVuO1xuXG4gIGNvbnN0IG1hc2sgPSAxIDw8IChwYXR0ZXJuTGVuIC0gMSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXR0ZXJuTGVuOyBpICs9IDEpIHtcbiAgICAvLyBTY2FuIGZvciB0aGUgYmVzdCBtYXRjaDsgZWFjaCBpdGVyYXRpb24gYWxsb3dzIGZvciBvbmUgbW9yZSBlcnJvci5cbiAgICAvLyBSdW4gYSBiaW5hcnkgc2VhcmNoIHRvIGRldGVybWluZSBob3cgZmFyIGZyb20gdGhlIG1hdGNoIGxvY2F0aW9uIHdlIGNhbiBzdHJheVxuICAgIC8vIGF0IHRoaXMgZXJyb3IgbGV2ZWwuXG4gICAgbGV0IGJpbk1pbiA9IDA7XG4gICAgbGV0IGJpbk1pZCA9IGJpbk1heDtcblxuICAgIHdoaWxlIChiaW5NaW4gPCBiaW5NaWQpIHtcbiAgICAgIGNvbnN0IHNjb3JlID0gY29tcHV0ZVNjb3JlJDEocGF0dGVybiwge1xuICAgICAgICBlcnJvcnM6IGksXG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbiArIGJpbk1pZCxcbiAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgICB9KTtcblxuICAgICAgaWYgKHNjb3JlIDw9IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgICAgYmluTWluID0gYmluTWlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmluTWF4ID0gYmluTWlkO1xuICAgICAgfVxuXG4gICAgICBiaW5NaWQgPSBNYXRoLmZsb29yKChiaW5NYXggLSBiaW5NaW4pIC8gMiArIGJpbk1pbik7XG4gICAgfVxuXG4gICAgLy8gVXNlIHRoZSByZXN1bHQgZnJvbSB0aGlzIGl0ZXJhdGlvbiBhcyB0aGUgbWF4aW11bSBmb3IgdGhlIG5leHQuXG4gICAgYmluTWF4ID0gYmluTWlkO1xuXG4gICAgbGV0IHN0YXJ0ID0gTWF0aC5tYXgoMSwgZXhwZWN0ZWRMb2NhdGlvbiAtIGJpbk1pZCArIDEpO1xuICAgIGxldCBmaW5pc2ggPSBmaW5kQWxsTWF0Y2hlc1xuICAgICAgPyB0ZXh0TGVuXG4gICAgICA6IE1hdGgubWluKGV4cGVjdGVkTG9jYXRpb24gKyBiaW5NaWQsIHRleHRMZW4pICsgcGF0dGVybkxlbjtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIGJpdCBhcnJheVxuICAgIGxldCBiaXRBcnIgPSBBcnJheShmaW5pc2ggKyAyKTtcblxuICAgIGJpdEFycltmaW5pc2ggKyAxXSA9ICgxIDw8IGkpIC0gMTtcblxuICAgIGZvciAobGV0IGogPSBmaW5pc2g7IGogPj0gc3RhcnQ7IGogLT0gMSkge1xuICAgICAgbGV0IGN1cnJlbnRMb2NhdGlvbiA9IGogLSAxO1xuICAgICAgbGV0IGNoYXJNYXRjaCA9IHBhdHRlcm5BbHBoYWJldFt0ZXh0LmNoYXJBdChjdXJyZW50TG9jYXRpb24pXTtcblxuICAgICAgaWYgKGNvbXB1dGVNYXRjaGVzKSB7XG4gICAgICAgIC8vIFNwZWVkIHVwOiBxdWljayBib29sIHRvIGludCBjb252ZXJzaW9uIChpLmUsIGBjaGFyTWF0Y2ggPyAxIDogMGApXG4gICAgICAgIG1hdGNoTWFza1tjdXJyZW50TG9jYXRpb25dID0gKyEhY2hhck1hdGNoO1xuICAgICAgfVxuXG4gICAgICAvLyBGaXJzdCBwYXNzOiBleGFjdCBtYXRjaFxuICAgICAgYml0QXJyW2pdID0gKChiaXRBcnJbaiArIDFdIDw8IDEpIHwgMSkgJiBjaGFyTWF0Y2g7XG5cbiAgICAgIC8vIFN1YnNlcXVlbnQgcGFzc2VzOiBmdXp6eSBtYXRjaFxuICAgICAgaWYgKGkpIHtcbiAgICAgICAgYml0QXJyW2pdIHw9XG4gICAgICAgICAgKChsYXN0Qml0QXJyW2ogKyAxXSB8IGxhc3RCaXRBcnJbal0pIDw8IDEpIHwgMSB8IGxhc3RCaXRBcnJbaiArIDFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoYml0QXJyW2pdICYgbWFzaykge1xuICAgICAgICBmaW5hbFNjb3JlID0gY29tcHV0ZVNjb3JlJDEocGF0dGVybiwge1xuICAgICAgICAgIGVycm9yczogaSxcbiAgICAgICAgICBjdXJyZW50TG9jYXRpb24sXG4gICAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgICBpZ25vcmVMb2NhdGlvblxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUaGlzIG1hdGNoIHdpbGwgYWxtb3N0IGNlcnRhaW5seSBiZSBiZXR0ZXIgdGhhbiBhbnkgZXhpc3RpbmcgbWF0Y2guXG4gICAgICAgIC8vIEJ1dCBjaGVjayBhbnl3YXkuXG4gICAgICAgIGlmIChmaW5hbFNjb3JlIDw9IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgICAgICAvLyBJbmRlZWQgaXQgaXNcbiAgICAgICAgICBjdXJyZW50VGhyZXNob2xkID0gZmluYWxTY29yZTtcbiAgICAgICAgICBiZXN0TG9jYXRpb24gPSBjdXJyZW50TG9jYXRpb247XG5cbiAgICAgICAgICAvLyBBbHJlYWR5IHBhc3NlZCBgbG9jYCwgZG93bmhpbGwgZnJvbSBoZXJlIG9uIGluLlxuICAgICAgICAgIGlmIChiZXN0TG9jYXRpb24gPD0gZXhwZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBXaGVuIHBhc3NpbmcgYGJlc3RMb2NhdGlvbmAsIGRvbid0IGV4Y2VlZCBvdXIgY3VycmVudCBkaXN0YW5jZSBmcm9tIGBleHBlY3RlZExvY2F0aW9uYC5cbiAgICAgICAgICBzdGFydCA9IE1hdGgubWF4KDEsIDIgKiBleHBlY3RlZExvY2F0aW9uIC0gYmVzdExvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vIGhvcGUgZm9yIGEgKGJldHRlcikgbWF0Y2ggYXQgZ3JlYXRlciBlcnJvciBsZXZlbHMuXG4gICAgY29uc3Qgc2NvcmUgPSBjb21wdXRlU2NvcmUkMShwYXR0ZXJuLCB7XG4gICAgICBlcnJvcnM6IGkgKyAxLFxuICAgICAgY3VycmVudExvY2F0aW9uOiBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgaWdub3JlTG9jYXRpb25cbiAgICB9KTtcblxuICAgIGlmIChzY29yZSA+IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgbGFzdEJpdEFyciA9IGJpdEFycjtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBpc01hdGNoOiBiZXN0TG9jYXRpb24gPj0gMCxcbiAgICAvLyBDb3VudCBleGFjdCBtYXRjaGVzICh0aG9zZSB3aXRoIGEgc2NvcmUgb2YgMCkgdG8gYmUgXCJhbG1vc3RcIiBleGFjdFxuICAgIHNjb3JlOiBNYXRoLm1heCgwLjAwMSwgZmluYWxTY29yZSlcbiAgfTtcblxuICBpZiAoY29tcHV0ZU1hdGNoZXMpIHtcbiAgICBjb25zdCBpbmRpY2VzID0gY29udmVydE1hc2tUb0luZGljZXMobWF0Y2hNYXNrLCBtaW5NYXRjaENoYXJMZW5ndGgpO1xuICAgIGlmICghaW5kaWNlcy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdC5pc01hdGNoID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgcmVzdWx0LmluZGljZXMgPSBpbmRpY2VzO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGF0dGVybkFscGhhYmV0KHBhdHRlcm4pIHtcbiAgbGV0IG1hc2sgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gcGF0dGVybi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGNvbnN0IGNoYXIgPSBwYXR0ZXJuLmNoYXJBdChpKTtcbiAgICBtYXNrW2NoYXJdID0gKG1hc2tbY2hhcl0gfHwgMCkgfCAoMSA8PCAobGVuIC0gaSAtIDEpKTtcbiAgfVxuXG4gIHJldHVybiBtYXNrXG59XG5cbmNsYXNzIEJpdGFwU2VhcmNoIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcGF0dGVybixcbiAgICB7XG4gICAgICBsb2NhdGlvbiA9IENvbmZpZy5sb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCA9IENvbmZpZy50aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICAgICAgZmluZEFsbE1hdGNoZXMgPSBDb25maWcuZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaXNDYXNlU2Vuc2l0aXZlID0gQ29uZmlnLmlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uXG4gICAgfSA9IHt9XG4gICkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaWdub3JlTG9jYXRpb25cbiAgICB9O1xuXG4gICAgdGhpcy5wYXR0ZXJuID0gaXNDYXNlU2Vuc2l0aXZlID8gcGF0dGVybiA6IHBhdHRlcm4udG9Mb3dlckNhc2UoKTtcblxuICAgIHRoaXMuY2h1bmtzID0gW107XG5cbiAgICBpZiAoIXRoaXMucGF0dGVybi5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFkZENodW5rID0gKHBhdHRlcm4sIHN0YXJ0SW5kZXgpID0+IHtcbiAgICAgIHRoaXMuY2h1bmtzLnB1c2goe1xuICAgICAgICBwYXR0ZXJuLFxuICAgICAgICBhbHBoYWJldDogY3JlYXRlUGF0dGVybkFscGhhYmV0KHBhdHRlcm4pLFxuICAgICAgICBzdGFydEluZGV4XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbGVuID0gdGhpcy5wYXR0ZXJuLmxlbmd0aDtcblxuICAgIGlmIChsZW4gPiBNQVhfQklUUykge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgY29uc3QgcmVtYWluZGVyID0gbGVuICUgTUFYX0JJVFM7XG4gICAgICBjb25zdCBlbmQgPSBsZW4gLSByZW1haW5kZXI7XG5cbiAgICAgIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgICAgIGFkZENodW5rKHRoaXMucGF0dGVybi5zdWJzdHIoaSwgTUFYX0JJVFMpLCBpKTtcbiAgICAgICAgaSArPSBNQVhfQklUUztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbWFpbmRlcikge1xuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gbGVuIC0gTUFYX0JJVFM7XG4gICAgICAgIGFkZENodW5rKHRoaXMucGF0dGVybi5zdWJzdHIoc3RhcnRJbmRleCksIHN0YXJ0SW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDaHVuayh0aGlzLnBhdHRlcm4sIDApO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaEluKHRleHQpIHtcbiAgICBjb25zdCB7IGlzQ2FzZVNlbnNpdGl2ZSwgaW5jbHVkZU1hdGNoZXMgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGlmICghaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgICB0ZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8vIEV4YWN0IG1hdGNoXG4gICAgaWYgKHRoaXMucGF0dGVybiA9PT0gdGV4dCkge1xuICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgaXNNYXRjaDogdHJ1ZSxcbiAgICAgICAgc2NvcmU6IDBcbiAgICAgIH07XG5cbiAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICByZXN1bHQuaW5kaWNlcyA9IFtbMCwgdGV4dC5sZW5ndGggLSAxXV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIHVzZSBCaXRhcCBhbGdvcml0aG1cbiAgICBjb25zdCB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBsZXQgYWxsSW5kaWNlcyA9IFtdO1xuICAgIGxldCB0b3RhbFNjb3JlID0gMDtcbiAgICBsZXQgaGFzTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgdGhpcy5jaHVua3MuZm9yRWFjaCgoeyBwYXR0ZXJuLCBhbHBoYWJldCwgc3RhcnRJbmRleCB9KSA9PiB7XG4gICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlLCBpbmRpY2VzIH0gPSBzZWFyY2godGV4dCwgcGF0dGVybiwgYWxwaGFiZXQsIHtcbiAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uICsgc3RhcnRJbmRleCxcbiAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgIHRocmVzaG9sZCxcbiAgICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgICB9KTtcblxuICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgaGFzTWF0Y2hlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRvdGFsU2NvcmUgKz0gc2NvcmU7XG5cbiAgICAgIGlmIChpc01hdGNoICYmIGluZGljZXMpIHtcbiAgICAgICAgYWxsSW5kaWNlcyA9IFsuLi5hbGxJbmRpY2VzLCAuLi5pbmRpY2VzXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICBpc01hdGNoOiBoYXNNYXRjaGVzLFxuICAgICAgc2NvcmU6IGhhc01hdGNoZXMgPyB0b3RhbFNjb3JlIC8gdGhpcy5jaHVua3MubGVuZ3RoIDogMVxuICAgIH07XG5cbiAgICBpZiAoaGFzTWF0Y2hlcyAmJiBpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgcmVzdWx0LmluZGljZXMgPSBhbGxJbmRpY2VzO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5jbGFzcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgdGhpcy5wYXR0ZXJuID0gcGF0dGVybjtcbiAgfVxuICBzdGF0aWMgaXNNdWx0aU1hdGNoKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gZ2V0TWF0Y2gocGF0dGVybiwgdGhpcy5tdWx0aVJlZ2V4KVxuICB9XG4gIHN0YXRpYyBpc1NpbmdsZU1hdGNoKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gZ2V0TWF0Y2gocGF0dGVybiwgdGhpcy5zaW5nbGVSZWdleClcbiAgfVxuICBzZWFyY2goLyp0ZXh0Ki8pIHt9XG59XG5cbmZ1bmN0aW9uIGdldE1hdGNoKHBhdHRlcm4sIGV4cCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0dGVybi5tYXRjaChleHApO1xuICByZXR1cm4gbWF0Y2hlcyA/IG1hdGNoZXNbMV0gOiBudWxsXG59XG5cbi8vIFRva2VuOiAnZmlsZVxuXG5jbGFzcyBFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2V4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL149XCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9ePSguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaXNNYXRjaCA9IHRleHQgPT09IHRoaXMucGF0dGVybjtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0aGlzLnBhdHRlcm4ubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuLy8gVG9rZW46ICFmaXJlXG5cbmNsYXNzIEludmVyc2VFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2ludmVyc2UtZXhhY3QnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiFcIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14hKC4qKSQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRleHQuaW5kZXhPZih0aGlzLnBhdHRlcm4pO1xuICAgIGNvbnN0IGlzTWF0Y2ggPSBpbmRleCA9PT0gLTE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbMCwgdGV4dC5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb2tlbjogXmZpbGVcblxuY2xhc3MgUHJlZml4RXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdwcmVmaXgtZXhhY3QnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXlxcXlwiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXlxcXiguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaXNNYXRjaCA9IHRleHQuc3RhcnRzV2l0aCh0aGlzLnBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogWzAsIHRoaXMucGF0dGVybi5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb2tlbjogIV5maXJlXG5cbmNsYXNzIEludmVyc2VQcmVmaXhFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2ludmVyc2UtcHJlZml4LWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL14hXFxeXCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eIVxcXiguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaXNNYXRjaCA9ICF0ZXh0LnN0YXJ0c1dpdGgodGhpcy5wYXR0ZXJuKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbi8vIFRva2VuOiAuZmlsZSRcblxuY2xhc3MgU3VmZml4RXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdzdWZmaXgtZXhhY3QnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXlwiKC4qKVwiXFwkJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiguKilcXCQkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaXNNYXRjaCA9IHRleHQuZW5kc1dpdGgodGhpcy5wYXR0ZXJuKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFt0ZXh0Lmxlbmd0aCAtIHRoaXMucGF0dGVybi5sZW5ndGgsIHRleHQubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuLy8gVG9rZW46ICEuZmlsZSRcblxuY2xhc3MgSW52ZXJzZVN1ZmZpeEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaW52ZXJzZS1zdWZmaXgtZXhhY3QnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiFcIiguKilcIlxcJCQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14hKC4qKVxcJCQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpc01hdGNoID0gIXRleHQuZW5kc1dpdGgodGhpcy5wYXR0ZXJuKTtcbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbMCwgdGV4dC5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBGdXp6eU1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcGF0dGVybixcbiAgICB7XG4gICAgICBsb2NhdGlvbiA9IENvbmZpZy5sb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCA9IENvbmZpZy50aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICAgICAgZmluZEFsbE1hdGNoZXMgPSBDb25maWcuZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaXNDYXNlU2Vuc2l0aXZlID0gQ29uZmlnLmlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uXG4gICAgfSA9IHt9XG4gICkge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICAgIHRoaXMuX2JpdGFwU2VhcmNoID0gbmV3IEJpdGFwU2VhcmNoKHBhdHRlcm4sIHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaWdub3JlTG9jYXRpb25cbiAgICB9KTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdmdXp6eSdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eXCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eKC4qKSQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5fYml0YXBTZWFyY2guc2VhcmNoSW4odGV4dClcbiAgfVxufVxuXG4vLyBUb2tlbjogJ2ZpbGVcblxuY2xhc3MgSW5jbHVkZU1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2luY2x1ZGUnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXidcIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14nKC4qKSQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBsZXQgbG9jYXRpb24gPSAwO1xuICAgIGxldCBpbmRleDtcblxuICAgIGNvbnN0IGluZGljZXMgPSBbXTtcbiAgICBjb25zdCBwYXR0ZXJuTGVuID0gdGhpcy5wYXR0ZXJuLmxlbmd0aDtcblxuICAgIC8vIEdldCBhbGwgZXhhY3QgbWF0Y2hlc1xuICAgIHdoaWxlICgoaW5kZXggPSB0ZXh0LmluZGV4T2YodGhpcy5wYXR0ZXJuLCBsb2NhdGlvbikpID4gLTEpIHtcbiAgICAgIGxvY2F0aW9uID0gaW5kZXggKyBwYXR0ZXJuTGVuO1xuICAgICAgaW5kaWNlcy5wdXNoKFtpbmRleCwgbG9jYXRpb24gLSAxXSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNNYXRjaCA9ICEhaW5kaWNlcy5sZW5ndGg7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzXG4gICAgfVxuICB9XG59XG5cbi8vIOKdl09yZGVyIGlzIGltcG9ydGFudC4gRE8gTk9UIENIQU5HRS5cbmNvbnN0IHNlYXJjaGVycyA9IFtcbiAgRXhhY3RNYXRjaCxcbiAgSW5jbHVkZU1hdGNoLFxuICBQcmVmaXhFeGFjdE1hdGNoLFxuICBJbnZlcnNlUHJlZml4RXhhY3RNYXRjaCxcbiAgSW52ZXJzZVN1ZmZpeEV4YWN0TWF0Y2gsXG4gIFN1ZmZpeEV4YWN0TWF0Y2gsXG4gIEludmVyc2VFeGFjdE1hdGNoLFxuICBGdXp6eU1hdGNoXG5dO1xuXG5jb25zdCBzZWFyY2hlcnNMZW4gPSBzZWFyY2hlcnMubGVuZ3RoO1xuXG4vLyBSZWdleCB0byBzcGxpdCBieSBzcGFjZXMsIGJ1dCBrZWVwIGFueXRoaW5nIGluIHF1b3RlcyB0b2dldGhlclxuY29uc3QgU1BBQ0VfUkUgPSAvICsoPz0oPzpbXlxcXCJdKlxcXCJbXlxcXCJdKlxcXCIpKlteXFxcIl0qJCkvO1xuY29uc3QgT1JfVE9LRU4gPSAnfCc7XG5cbi8vIFJldHVybiBhIDJEIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBxdWVyeSwgZm9yIHNpbXBsZXIgcGFyc2luZy5cbi8vIEV4YW1wbGU6XG4vLyBcIl5jb3JlIGdvJCB8IHJiJCB8IHB5JCB4eSRcIiA9PiBbW1wiXmNvcmVcIiwgXCJnbyRcIl0sIFtcInJiJFwiXSwgW1wicHkkXCIsIFwieHkkXCJdXVxuZnVuY3Rpb24gcGFyc2VRdWVyeShwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIHBhdHRlcm4uc3BsaXQoT1JfVE9LRU4pLm1hcCgoaXRlbSkgPT4ge1xuICAgIGxldCBxdWVyeSA9IGl0ZW1cbiAgICAgIC50cmltKClcbiAgICAgIC5zcGxpdChTUEFDRV9SRSlcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gJiYgISFpdGVtLnRyaW0oKSk7XG5cbiAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBxdWVyeS5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgcXVlcnlJdGVtID0gcXVlcnlbaV07XG5cbiAgICAgIC8vIDEuIEhhbmRsZSBtdWx0aXBsZSBxdWVyeSBtYXRjaCAoaS5lLCBvbmNlIHRoYXQgYXJlIHF1b3RlZCwgbGlrZSBgXCJoZWxsbyB3b3JsZFwiYClcbiAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgbGV0IGlkeCA9IC0xO1xuICAgICAgd2hpbGUgKCFmb3VuZCAmJiArK2lkeCA8IHNlYXJjaGVyc0xlbikge1xuICAgICAgICBjb25zdCBzZWFyY2hlciA9IHNlYXJjaGVyc1tpZHhdO1xuICAgICAgICBsZXQgdG9rZW4gPSBzZWFyY2hlci5pc011bHRpTWF0Y2gocXVlcnlJdGVtKTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG5ldyBzZWFyY2hlcih0b2tlbiwgb3B0aW9ucykpO1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMi4gSGFuZGxlIHNpbmdsZSBxdWVyeSBtYXRjaGVzIChpLmUsIG9uY2UgdGhhdCBhcmUgKm5vdCogcXVvdGVkKVxuICAgICAgaWR4ID0gLTE7XG4gICAgICB3aGlsZSAoKytpZHggPCBzZWFyY2hlcnNMZW4pIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoZXIgPSBzZWFyY2hlcnNbaWR4XTtcbiAgICAgICAgbGV0IHRva2VuID0gc2VhcmNoZXIuaXNTaW5nbGVNYXRjaChxdWVyeUl0ZW0pO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobmV3IHNlYXJjaGVyKHRva2VuLCBvcHRpb25zKSk7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzXG4gIH0pXG59XG5cbi8vIFRoZXNlIGV4dGVuZGVkIG1hdGNoZXJzIGNhbiByZXR1cm4gYW4gYXJyYXkgb2YgbWF0Y2hlcywgYXMgb3Bwb3NlZFxuLy8gdG8gYSBzaW5nbCBtYXRjaFxuY29uc3QgTXVsdGlNYXRjaFNldCA9IG5ldyBTZXQoW0Z1enp5TWF0Y2gudHlwZSwgSW5jbHVkZU1hdGNoLnR5cGVdKTtcblxuLyoqXG4gKiBDb21tYW5kLWxpa2Ugc2VhcmNoaW5nXG4gKiA9PT09PT09PT09PT09PT09PT09PT09XG4gKlxuICogR2l2ZW4gbXVsdGlwbGUgc2VhcmNoIHRlcm1zIGRlbGltaXRlZCBieSBzcGFjZXMuZS5nLiBgXmpzY3JpcHQgLnB5dGhvbiQgcnVieSAhamF2YWAsXG4gKiBzZWFyY2ggaW4gYSBnaXZlbiB0ZXh0LlxuICpcbiAqIFNlYXJjaCBzeW50YXg6XG4gKlxuICogfCBUb2tlbiAgICAgICB8IE1hdGNoIHR5cGUgICAgICAgICAgICAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAtLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCBganNjcmlwdGAgICB8IGZ1enp5LW1hdGNoICAgICAgICAgICAgICAgIHwgSXRlbXMgdGhhdCBmdXp6eSBtYXRjaCBganNjcmlwdGAgICAgICAgfFxuICogfCBgPXNjaGVtZWAgICB8IGV4YWN0LW1hdGNoICAgICAgICAgICAgICAgIHwgSXRlbXMgdGhhdCBhcmUgYHNjaGVtZWAgICAgICAgICAgICAgICAgfFxuICogfCBgJ3B5dGhvbmAgICB8IGluY2x1ZGUtbWF0Y2ggICAgICAgICAgICAgIHwgSXRlbXMgdGhhdCBpbmNsdWRlIGBweXRob25gICAgICAgICAgICAgfFxuICogfCBgIXJ1YnlgICAgICB8IGludmVyc2UtZXhhY3QtbWF0Y2ggICAgICAgIHwgSXRlbXMgdGhhdCBkbyBub3QgaW5jbHVkZSBgcnVieWAgICAgICAgfFxuICogfCBgXmphdmFgICAgICB8IHByZWZpeC1leGFjdC1tYXRjaCAgICAgICAgIHwgSXRlbXMgdGhhdCBzdGFydCB3aXRoIGBqYXZhYCAgICAgICAgICAgfFxuICogfCBgIV5lYXJsYW5nYCB8IGludmVyc2UtcHJlZml4LWV4YWN0LW1hdGNoIHwgSXRlbXMgdGhhdCBkbyBub3Qgc3RhcnQgd2l0aCBgZWFybGFuZ2AgfFxuICogfCBgLmpzJGAgICAgICB8IHN1ZmZpeC1leGFjdC1tYXRjaCAgICAgICAgIHwgSXRlbXMgdGhhdCBlbmQgd2l0aCBgLmpzYCAgICAgICAgICAgICAgfFxuICogfCBgIS5nbyRgICAgICB8IGludmVyc2Utc3VmZml4LWV4YWN0LW1hdGNoIHwgSXRlbXMgdGhhdCBkbyBub3QgZW5kIHdpdGggYC5nb2AgICAgICAgfFxuICpcbiAqIEEgc2luZ2xlIHBpcGUgY2hhcmFjdGVyIGFjdHMgYXMgYW4gT1Igb3BlcmF0b3IuIEZvciBleGFtcGxlLCB0aGUgZm9sbG93aW5nXG4gKiBxdWVyeSBtYXRjaGVzIGVudHJpZXMgdGhhdCBzdGFydCB3aXRoIGBjb3JlYCBhbmQgZW5kIHdpdGggZWl0aGVyYGdvYCwgYHJiYCxcbiAqIG9yYHB5YC5cbiAqXG4gKiBgYGBcbiAqIF5jb3JlIGdvJCB8IHJiJCB8IHB5JFxuICogYGBgXG4gKi9cbmNsYXNzIEV4dGVuZGVkU2VhcmNoIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcGF0dGVybixcbiAgICB7XG4gICAgICBpc0Nhc2VTZW5zaXRpdmUgPSBDb25maWcuaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMgPSBDb25maWcuaW5jbHVkZU1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaWdub3JlTG9jYXRpb24gPSBDb25maWcuaWdub3JlTG9jYXRpb24sXG4gICAgICBmaW5kQWxsTWF0Y2hlcyA9IENvbmZpZy5maW5kQWxsTWF0Y2hlcyxcbiAgICAgIGxvY2F0aW9uID0gQ29uZmlnLmxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkID0gQ29uZmlnLnRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlID0gQ29uZmlnLmRpc3RhbmNlXG4gICAgfSA9IHt9XG4gICkge1xuICAgIHRoaXMucXVlcnkgPSBudWxsO1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBpZ25vcmVMb2NhdGlvbixcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2VcbiAgICB9O1xuXG4gICAgdGhpcy5wYXR0ZXJuID0gaXNDYXNlU2Vuc2l0aXZlID8gcGF0dGVybiA6IHBhdHRlcm4udG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnF1ZXJ5ID0gcGFyc2VRdWVyeSh0aGlzLnBhdHRlcm4sIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgY29uZGl0aW9uKF8sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy51c2VFeHRlbmRlZFNlYXJjaFxuICB9XG5cbiAgc2VhcmNoSW4odGV4dCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5xdWVyeTtcblxuICAgIGlmICghcXVlcnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzTWF0Y2g6IGZhbHNlLFxuICAgICAgICBzY29yZTogMVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgaW5jbHVkZU1hdGNoZXMsIGlzQ2FzZVNlbnNpdGl2ZSB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgdGV4dCA9IGlzQ2FzZVNlbnNpdGl2ZSA/IHRleHQgOiB0ZXh0LnRvTG93ZXJDYXNlKCk7XG5cbiAgICBsZXQgbnVtTWF0Y2hlcyA9IDA7XG4gICAgbGV0IGFsbEluZGljZXMgPSBbXTtcbiAgICBsZXQgdG90YWxTY29yZSA9IDA7XG5cbiAgICAvLyBPUnNcbiAgICBmb3IgKGxldCBpID0gMCwgcUxlbiA9IHF1ZXJ5Lmxlbmd0aDsgaSA8IHFMZW47IGkgKz0gMSkge1xuICAgICAgY29uc3Qgc2VhcmNoZXJzID0gcXVlcnlbaV07XG5cbiAgICAgIC8vIFJlc2V0IGluZGljZXNcbiAgICAgIGFsbEluZGljZXMubGVuZ3RoID0gMDtcbiAgICAgIG51bU1hdGNoZXMgPSAwO1xuXG4gICAgICAvLyBBTkRzXG4gICAgICBmb3IgKGxldCBqID0gMCwgcExlbiA9IHNlYXJjaGVycy5sZW5ndGg7IGogPCBwTGVuOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoZXIgPSBzZWFyY2hlcnNbal07XG4gICAgICAgIGNvbnN0IHsgaXNNYXRjaCwgaW5kaWNlcywgc2NvcmUgfSA9IHNlYXJjaGVyLnNlYXJjaCh0ZXh0KTtcblxuICAgICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICAgIG51bU1hdGNoZXMgKz0gMTtcbiAgICAgICAgICB0b3RhbFNjb3JlICs9IHNjb3JlO1xuICAgICAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHNlYXJjaGVyLmNvbnN0cnVjdG9yLnR5cGU7XG4gICAgICAgICAgICBpZiAoTXVsdGlNYXRjaFNldC5oYXModHlwZSkpIHtcbiAgICAgICAgICAgICAgYWxsSW5kaWNlcyA9IFsuLi5hbGxJbmRpY2VzLCAuLi5pbmRpY2VzXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFsbEluZGljZXMucHVzaChpbmRpY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG90YWxTY29yZSA9IDA7XG4gICAgICAgICAgbnVtTWF0Y2hlcyA9IDA7XG4gICAgICAgICAgYWxsSW5kaWNlcy5sZW5ndGggPSAwO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT1IgY29uZGl0aW9uLCBzbyBpZiBUUlVFLCByZXR1cm5cbiAgICAgIGlmIChudW1NYXRjaGVzKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgICAgaXNNYXRjaDogdHJ1ZSxcbiAgICAgICAgICBzY29yZTogdG90YWxTY29yZSAvIG51bU1hdGNoZXNcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgICByZXN1bHQuaW5kaWNlcyA9IGFsbEluZGljZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm90aGluZyB3YXMgbWF0Y2hlZFxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoOiBmYWxzZSxcbiAgICAgIHNjb3JlOiAxXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHJlZ2lzdGVyZWRTZWFyY2hlcnMgPSBbXTtcblxuZnVuY3Rpb24gcmVnaXN0ZXIoLi4uYXJncykge1xuICByZWdpc3RlcmVkU2VhcmNoZXJzLnB1c2goLi4uYXJncyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlYXJjaGVyKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlZ2lzdGVyZWRTZWFyY2hlcnMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBsZXQgc2VhcmNoZXJDbGFzcyA9IHJlZ2lzdGVyZWRTZWFyY2hlcnNbaV07XG4gICAgaWYgKHNlYXJjaGVyQ2xhc3MuY29uZGl0aW9uKHBhdHRlcm4sIG9wdGlvbnMpKSB7XG4gICAgICByZXR1cm4gbmV3IHNlYXJjaGVyQ2xhc3MocGF0dGVybiwgb3B0aW9ucylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IEJpdGFwU2VhcmNoKHBhdHRlcm4sIG9wdGlvbnMpXG59XG5cbmNvbnN0IExvZ2ljYWxPcGVyYXRvciA9IHtcbiAgQU5EOiAnJGFuZCcsXG4gIE9SOiAnJG9yJ1xufTtcblxuY29uc3QgS2V5VHlwZSA9IHtcbiAgUEFUSDogJyRwYXRoJyxcbiAgUEFUVEVSTjogJyR2YWwnXG59O1xuXG5jb25zdCBpc0V4cHJlc3Npb24gPSAocXVlcnkpID0+XG4gICEhKHF1ZXJ5W0xvZ2ljYWxPcGVyYXRvci5BTkRdIHx8IHF1ZXJ5W0xvZ2ljYWxPcGVyYXRvci5PUl0pO1xuXG5jb25zdCBpc1BhdGggPSAocXVlcnkpID0+ICEhcXVlcnlbS2V5VHlwZS5QQVRIXTtcblxuY29uc3QgaXNMZWFmID0gKHF1ZXJ5KSA9PlxuICAhaXNBcnJheShxdWVyeSkgJiYgaXNPYmplY3QocXVlcnkpICYmICFpc0V4cHJlc3Npb24ocXVlcnkpO1xuXG5jb25zdCBjb252ZXJ0VG9FeHBsaWNpdCA9IChxdWVyeSkgPT4gKHtcbiAgW0xvZ2ljYWxPcGVyYXRvci5BTkRdOiBPYmplY3Qua2V5cyhxdWVyeSkubWFwKChrZXkpID0+ICh7XG4gICAgW2tleV06IHF1ZXJ5W2tleV1cbiAgfSkpXG59KTtcblxuLy8gV2hlbiBgYXV0b2AgaXMgYHRydWVgLCB0aGUgcGFyc2UgZnVuY3Rpb24gd2lsbCBpbmZlciBhbmQgaW5pdGlhbGl6ZSBhbmQgYWRkXG4vLyB0aGUgYXBwcm9wcmlhdGUgYFNlYXJjaGVyYCBpbnN0YW5jZVxuZnVuY3Rpb24gcGFyc2UocXVlcnksIG9wdGlvbnMsIHsgYXV0byA9IHRydWUgfSA9IHt9KSB7XG4gIGNvbnN0IG5leHQgPSAocXVlcnkpID0+IHtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHF1ZXJ5KTtcblxuICAgIGNvbnN0IGlzUXVlcnlQYXRoID0gaXNQYXRoKHF1ZXJ5KTtcblxuICAgIGlmICghaXNRdWVyeVBhdGggJiYga2V5cy5sZW5ndGggPiAxICYmICFpc0V4cHJlc3Npb24ocXVlcnkpKSB7XG4gICAgICByZXR1cm4gbmV4dChjb252ZXJ0VG9FeHBsaWNpdChxdWVyeSkpXG4gICAgfVxuXG4gICAgaWYgKGlzTGVhZihxdWVyeSkpIHtcbiAgICAgIGNvbnN0IGtleSA9IGlzUXVlcnlQYXRoID8gcXVlcnlbS2V5VHlwZS5QQVRIXSA6IGtleXNbMF07XG5cbiAgICAgIGNvbnN0IHBhdHRlcm4gPSBpc1F1ZXJ5UGF0aCA/IHF1ZXJ5W0tleVR5cGUuUEFUVEVSTl0gOiBxdWVyeVtrZXldO1xuXG4gICAgICBpZiAoIWlzU3RyaW5nKHBhdHRlcm4pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihMT0dJQ0FMX1NFQVJDSF9JTlZBTElEX1FVRVJZX0ZPUl9LRVkoa2V5KSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBrZXlJZDogY3JlYXRlS2V5SWQoa2V5KSxcbiAgICAgICAgcGF0dGVyblxuICAgICAgfTtcblxuICAgICAgaWYgKGF1dG8pIHtcbiAgICAgICAgb2JqLnNlYXJjaGVyID0gY3JlYXRlU2VhcmNoZXIocGF0dGVybiwgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmpcbiAgICB9XG5cbiAgICBsZXQgbm9kZSA9IHtcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIG9wZXJhdG9yOiBrZXlzWzBdXG4gICAgfTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5W2tleV07XG5cbiAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgbm9kZS5jaGlsZHJlbi5wdXNoKG5leHQoaXRlbSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBub2RlXG4gIH07XG5cbiAgaWYgKCFpc0V4cHJlc3Npb24ocXVlcnkpKSB7XG4gICAgcXVlcnkgPSBjb252ZXJ0VG9FeHBsaWNpdChxdWVyeSk7XG4gIH1cblxuICByZXR1cm4gbmV4dChxdWVyeSlcbn1cblxuLy8gUHJhY3RpY2FsIHNjb3JpbmcgZnVuY3Rpb25cbmZ1bmN0aW9uIGNvbXB1dGVTY29yZShcbiAgcmVzdWx0cyxcbiAgeyBpZ25vcmVGaWVsZE5vcm0gPSBDb25maWcuaWdub3JlRmllbGROb3JtIH1cbikge1xuICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCkgPT4ge1xuICAgIGxldCB0b3RhbFNjb3JlID0gMTtcblxuICAgIHJlc3VsdC5tYXRjaGVzLmZvckVhY2goKHsga2V5LCBub3JtLCBzY29yZSB9KSA9PiB7XG4gICAgICBjb25zdCB3ZWlnaHQgPSBrZXkgPyBrZXkud2VpZ2h0IDogbnVsbDtcblxuICAgICAgdG90YWxTY29yZSAqPSBNYXRoLnBvdyhcbiAgICAgICAgc2NvcmUgPT09IDAgJiYgd2VpZ2h0ID8gTnVtYmVyLkVQU0lMT04gOiBzY29yZSxcbiAgICAgICAgKHdlaWdodCB8fCAxKSAqIChpZ25vcmVGaWVsZE5vcm0gPyAxIDogbm9ybSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXN1bHQuc2NvcmUgPSB0b3RhbFNjb3JlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtTWF0Y2hlcyhyZXN1bHQsIGRhdGEpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHJlc3VsdC5tYXRjaGVzO1xuICBkYXRhLm1hdGNoZXMgPSBbXTtcblxuICBpZiAoIWlzRGVmaW5lZChtYXRjaGVzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbWF0Y2hlcy5mb3JFYWNoKChtYXRjaCkgPT4ge1xuICAgIGlmICghaXNEZWZpbmVkKG1hdGNoLmluZGljZXMpIHx8ICFtYXRjaC5pbmRpY2VzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBpbmRpY2VzLCB2YWx1ZSB9ID0gbWF0Y2g7XG5cbiAgICBsZXQgb2JqID0ge1xuICAgICAgaW5kaWNlcyxcbiAgICAgIHZhbHVlXG4gICAgfTtcblxuICAgIGlmIChtYXRjaC5rZXkpIHtcbiAgICAgIG9iai5rZXkgPSBtYXRjaC5rZXkuc3JjO1xuICAgIH1cblxuICAgIGlmIChtYXRjaC5pZHggPiAtMSkge1xuICAgICAgb2JqLnJlZkluZGV4ID0gbWF0Y2guaWR4O1xuICAgIH1cblxuICAgIGRhdGEubWF0Y2hlcy5wdXNoKG9iaik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1TY29yZShyZXN1bHQsIGRhdGEpIHtcbiAgZGF0YS5zY29yZSA9IHJlc3VsdC5zY29yZTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0KFxuICByZXN1bHRzLFxuICBkb2NzLFxuICB7XG4gICAgaW5jbHVkZU1hdGNoZXMgPSBDb25maWcuaW5jbHVkZU1hdGNoZXMsXG4gICAgaW5jbHVkZVNjb3JlID0gQ29uZmlnLmluY2x1ZGVTY29yZVxuICB9ID0ge31cbikge1xuICBjb25zdCB0cmFuc2Zvcm1lcnMgPSBbXTtcblxuICBpZiAoaW5jbHVkZU1hdGNoZXMpIHRyYW5zZm9ybWVycy5wdXNoKHRyYW5zZm9ybU1hdGNoZXMpO1xuICBpZiAoaW5jbHVkZVNjb3JlKSB0cmFuc2Zvcm1lcnMucHVzaCh0cmFuc2Zvcm1TY29yZSk7XG5cbiAgcmV0dXJuIHJlc3VsdHMubWFwKChyZXN1bHQpID0+IHtcbiAgICBjb25zdCB7IGlkeCB9ID0gcmVzdWx0O1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGl0ZW06IGRvY3NbaWR4XSxcbiAgICAgIHJlZkluZGV4OiBpZHhcbiAgICB9O1xuXG4gICAgaWYgKHRyYW5zZm9ybWVycy5sZW5ndGgpIHtcbiAgICAgIHRyYW5zZm9ybWVycy5mb3JFYWNoKCh0cmFuc2Zvcm1lcikgPT4ge1xuICAgICAgICB0cmFuc2Zvcm1lcihyZXN1bHQsIGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFcbiAgfSlcbn1cblxuY2xhc3MgRnVzZSB7XG4gIGNvbnN0cnVjdG9yKGRvY3MsIG9wdGlvbnMgPSB7fSwgaW5kZXgpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7IC4uLkNvbmZpZywgLi4ub3B0aW9ucyB9O1xuXG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRpb25zLnVzZUV4dGVuZGVkU2VhcmNoICYmXG4gICAgICAhdHJ1ZVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKEVYVEVOREVEX1NFQVJDSF9VTkFWQUlMQUJMRSlcbiAgICB9XG5cbiAgICB0aGlzLl9rZXlTdG9yZSA9IG5ldyBLZXlTdG9yZSh0aGlzLm9wdGlvbnMua2V5cyk7XG5cbiAgICB0aGlzLnNldENvbGxlY3Rpb24oZG9jcywgaW5kZXgpO1xuICB9XG5cbiAgc2V0Q29sbGVjdGlvbihkb2NzLCBpbmRleCkge1xuICAgIHRoaXMuX2RvY3MgPSBkb2NzO1xuXG4gICAgaWYgKGluZGV4ICYmICEoaW5kZXggaW5zdGFuY2VvZiBGdXNlSW5kZXgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoSU5DT1JSRUNUX0lOREVYX1RZUEUpXG4gICAgfVxuXG4gICAgdGhpcy5fbXlJbmRleCA9XG4gICAgICBpbmRleCB8fFxuICAgICAgY3JlYXRlSW5kZXgodGhpcy5vcHRpb25zLmtleXMsIHRoaXMuX2RvY3MsIHtcbiAgICAgICAgZ2V0Rm46IHRoaXMub3B0aW9ucy5nZXRGbixcbiAgICAgICAgZmllbGROb3JtV2VpZ2h0OiB0aGlzLm9wdGlvbnMuZmllbGROb3JtV2VpZ2h0XG4gICAgICB9KTtcbiAgfVxuXG4gIGFkZChkb2MpIHtcbiAgICBpZiAoIWlzRGVmaW5lZChkb2MpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9kb2NzLnB1c2goZG9jKTtcbiAgICB0aGlzLl9teUluZGV4LmFkZChkb2MpO1xuICB9XG5cbiAgcmVtb3ZlKHByZWRpY2F0ZSA9ICgvKiBkb2MsIGlkeCAqLykgPT4gZmFsc2UpIHtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5fZG9jcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgZG9jID0gdGhpcy5fZG9jc1tpXTtcbiAgICAgIGlmIChwcmVkaWNhdGUoZG9jLCBpKSkge1xuICAgICAgICB0aGlzLnJlbW92ZUF0KGkpO1xuICAgICAgICBpIC09IDE7XG4gICAgICAgIGxlbiAtPSAxO1xuXG4gICAgICAgIHJlc3VsdHMucHVzaChkb2MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cblxuICByZW1vdmVBdChpZHgpIHtcbiAgICB0aGlzLl9kb2NzLnNwbGljZShpZHgsIDEpO1xuICAgIHRoaXMuX215SW5kZXgucmVtb3ZlQXQoaWR4KTtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9teUluZGV4XG4gIH1cblxuICBzZWFyY2gocXVlcnksIHsgbGltaXQgPSAtMSB9ID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGluY2x1ZGVTY29yZSxcbiAgICAgIHNob3VsZFNvcnQsXG4gICAgICBzb3J0Rm4sXG4gICAgICBpZ25vcmVGaWVsZE5vcm1cbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgbGV0IHJlc3VsdHMgPSBpc1N0cmluZyhxdWVyeSlcbiAgICAgID8gaXNTdHJpbmcodGhpcy5fZG9jc1swXSlcbiAgICAgICAgPyB0aGlzLl9zZWFyY2hTdHJpbmdMaXN0KHF1ZXJ5KVxuICAgICAgICA6IHRoaXMuX3NlYXJjaE9iamVjdExpc3QocXVlcnkpXG4gICAgICA6IHRoaXMuX3NlYXJjaExvZ2ljYWwocXVlcnkpO1xuXG4gICAgY29tcHV0ZVNjb3JlKHJlc3VsdHMsIHsgaWdub3JlRmllbGROb3JtIH0pO1xuXG4gICAgaWYgKHNob3VsZFNvcnQpIHtcbiAgICAgIHJlc3VsdHMuc29ydChzb3J0Rm4pO1xuICAgIH1cblxuICAgIGlmIChpc051bWJlcihsaW1pdCkgJiYgbGltaXQgPiAtMSkge1xuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuc2xpY2UoMCwgbGltaXQpO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXQocmVzdWx0cywgdGhpcy5fZG9jcywge1xuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBpbmNsdWRlU2NvcmVcbiAgICB9KVxuICB9XG5cbiAgX3NlYXJjaFN0cmluZ0xpc3QocXVlcnkpIHtcbiAgICBjb25zdCBzZWFyY2hlciA9IGNyZWF0ZVNlYXJjaGVyKHF1ZXJ5LCB0aGlzLm9wdGlvbnMpO1xuICAgIGNvbnN0IHsgcmVjb3JkcyB9ID0gdGhpcy5fbXlJbmRleDtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkgc3RyaW5nIGluIHRoZSBpbmRleFxuICAgIHJlY29yZHMuZm9yRWFjaCgoeyB2OiB0ZXh0LCBpOiBpZHgsIG46IG5vcm0gfSkgPT4ge1xuICAgICAgaWYgKCFpc0RlZmluZWQodGV4dCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgaXNNYXRjaCwgc2NvcmUsIGluZGljZXMgfSA9IHNlYXJjaGVyLnNlYXJjaEluKHRleHQpO1xuXG4gICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIGl0ZW06IHRleHQsXG4gICAgICAgICAgaWR4LFxuICAgICAgICAgIG1hdGNoZXM6IFt7IHNjb3JlLCB2YWx1ZTogdGV4dCwgbm9ybSwgaW5kaWNlcyB9XVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cblxuICBfc2VhcmNoTG9naWNhbChxdWVyeSkge1xuXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHBhcnNlKHF1ZXJ5LCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgY29uc3QgZXZhbHVhdGUgPSAobm9kZSwgaXRlbSwgaWR4KSA9PiB7XG4gICAgICBpZiAoIW5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgY29uc3QgeyBrZXlJZCwgc2VhcmNoZXIgfSA9IG5vZGU7XG5cbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMuX2ZpbmRNYXRjaGVzKHtcbiAgICAgICAgICBrZXk6IHRoaXMuX2tleVN0b3JlLmdldChrZXlJZCksXG4gICAgICAgICAgdmFsdWU6IHRoaXMuX215SW5kZXguZ2V0VmFsdWVGb3JJdGVtQXRLZXlJZChpdGVtLCBrZXlJZCksXG4gICAgICAgICAgc2VhcmNoZXJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZHgsXG4gICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgIG1hdGNoZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBjaGlsZCA9IG5vZGUuY2hpbGRyZW5baV07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGV2YWx1YXRlKGNoaWxkLCBpdGVtLCBpZHgpO1xuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgIHJlcy5wdXNoKC4uLnJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5vcGVyYXRvciA9PT0gTG9naWNhbE9wZXJhdG9yLkFORCkge1xuICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzXG4gICAgfTtcblxuICAgIGNvbnN0IHJlY29yZHMgPSB0aGlzLl9teUluZGV4LnJlY29yZHM7XG4gICAgY29uc3QgcmVzdWx0TWFwID0ge307XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgcmVjb3Jkcy5mb3JFYWNoKCh7ICQ6IGl0ZW0sIGk6IGlkeCB9KSA9PiB7XG4gICAgICBpZiAoaXNEZWZpbmVkKGl0ZW0pKSB7XG4gICAgICAgIGxldCBleHBSZXN1bHRzID0gZXZhbHVhdGUoZXhwcmVzc2lvbiwgaXRlbSwgaWR4KTtcblxuICAgICAgICBpZiAoZXhwUmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgICAvLyBEZWR1cGUgd2hlbiBhZGRpbmdcbiAgICAgICAgICBpZiAoIXJlc3VsdE1hcFtpZHhdKSB7XG4gICAgICAgICAgICByZXN1bHRNYXBbaWR4XSA9IHsgaWR4LCBpdGVtLCBtYXRjaGVzOiBbXSB9O1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdE1hcFtpZHhdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXhwUmVzdWx0cy5mb3JFYWNoKCh7IG1hdGNoZXMgfSkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0TWFwW2lkeF0ubWF0Y2hlcy5wdXNoKC4uLm1hdGNoZXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgX3NlYXJjaE9iamVjdExpc3QocXVlcnkpIHtcbiAgICBjb25zdCBzZWFyY2hlciA9IGNyZWF0ZVNlYXJjaGVyKHF1ZXJ5LCB0aGlzLm9wdGlvbnMpO1xuICAgIGNvbnN0IHsga2V5cywgcmVjb3JkcyB9ID0gdGhpcy5fbXlJbmRleDtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG5cbiAgICAvLyBMaXN0IGlzIEFycmF5PE9iamVjdD5cbiAgICByZWNvcmRzLmZvckVhY2goKHsgJDogaXRlbSwgaTogaWR4IH0pID0+IHtcbiAgICAgIGlmICghaXNEZWZpbmVkKGl0ZW0pKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgbWF0Y2hlcyA9IFtdO1xuXG4gICAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkga2V5IChpLmUsIHBhdGgpLCBhbmQgZmV0Y2ggdGhlIHZhbHVlIGF0IHRoYXQga2V5XG4gICAgICBrZXlzLmZvckVhY2goKGtleSwga2V5SW5kZXgpID0+IHtcbiAgICAgICAgbWF0Y2hlcy5wdXNoKFxuICAgICAgICAgIC4uLnRoaXMuX2ZpbmRNYXRjaGVzKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIHZhbHVlOiBpdGVtW2tleUluZGV4XSxcbiAgICAgICAgICAgIHNlYXJjaGVyXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICBpZHgsXG4gICAgICAgICAgaXRlbSxcbiAgICAgICAgICBtYXRjaGVzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuICBfZmluZE1hdGNoZXMoeyBrZXksIHZhbHVlLCBzZWFyY2hlciB9KSB7XG4gICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBsZXQgbWF0Y2hlcyA9IFtdO1xuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKCh7IHY6IHRleHQsIGk6IGlkeCwgbjogbm9ybSB9KSA9PiB7XG4gICAgICAgIGlmICghaXNEZWZpbmVkKHRleHQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlLCBpbmRpY2VzIH0gPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcblxuICAgICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICAgIG1hdGNoZXMucHVzaCh7XG4gICAgICAgICAgICBzY29yZSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIHZhbHVlOiB0ZXh0LFxuICAgICAgICAgICAgaWR4LFxuICAgICAgICAgICAgbm9ybSxcbiAgICAgICAgICAgIGluZGljZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgdjogdGV4dCwgbjogbm9ybSB9ID0gdmFsdWU7XG5cbiAgICAgIGNvbnN0IHsgaXNNYXRjaCwgc2NvcmUsIGluZGljZXMgfSA9IHNlYXJjaGVyLnNlYXJjaEluKHRleHQpO1xuXG4gICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICBtYXRjaGVzLnB1c2goeyBzY29yZSwga2V5LCB2YWx1ZTogdGV4dCwgbm9ybSwgaW5kaWNlcyB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc1xuICB9XG59XG5cbkZ1c2UudmVyc2lvbiA9ICc3LjAuMCc7XG5GdXNlLmNyZWF0ZUluZGV4ID0gY3JlYXRlSW5kZXg7XG5GdXNlLnBhcnNlSW5kZXggPSBwYXJzZUluZGV4O1xuRnVzZS5jb25maWcgPSBDb25maWc7XG5cbntcbiAgRnVzZS5wYXJzZVF1ZXJ5ID0gcGFyc2U7XG59XG5cbntcbiAgcmVnaXN0ZXIoRXh0ZW5kZWRTZWFyY2gpO1xufVxuXG5leHBvcnQgeyBGdXNlIGFzIGRlZmF1bHQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc3VtbWFyaXplIH0gZnJvbSAnLi4vYWkvc3VtbWFyaXplci5qcyc7XG5pbXBvcnQgeyBnZXRIaXN0b3J5V2l0aFRvcE5TdGF0cyB9IGZyb20gJy4vaGlzdG9yeS5qcyc7XG5pbXBvcnQgeyBlbmFibGVSZXNpemluZywgY3JlYXRlT3JHZXRXaWRnZXQsIGFkanVzdFdpZGdldFNpemUgfSBmcm9tICcuL3dpZGdldHMuanMnO1xuaW1wb3J0IHsgZXh0cmFjdERvbWFpbiwgbWFya2Rvd25Ub0h0bWwsIGNsZWFuSW5wdXQgfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmxldCBzdGFydERhdGUsIGVuZERhdGUsIHRvcE5Ib3N0bmFtZXNXaXRoVGl0bGVzO1xuXG4vLyBHbG9iYWwgdmFyaWFibGVzIHRvIHN0b3JlIHNlbGVjdGVkIGZpbHRlcnNcbmxldCBzZWxlY3RlZEZpbHRlcnMgPSBbXTtcbmxldCBleGNsdWRlRmlsdGVycyA9IFtdO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICAgIGFkZERhdGVSYW5nZUJ1dHRvbnMoKTtcbiAgICBhZGRSZWZyZXNoQnV0dG9uKCk7XG4gICAgc2V0RGF0ZVJhbmdlKCcyNGgnKTtcbiAgICAvLyBJbml0aWFsaXplIGNhdGVnb3J5IGFuZCBleGNsdWRlIGZpbHRlcnNcbiAgICBhd2FpdCBpbml0aWFsaXplRmlsdGVycygpO1xuICAgIGFkZE9yVXBkYXRlUmVjZW50SGlzdG9yeVdpZGdldCgpO1xuICAgIGFkZE9yVXBkYXRlQmFzaWNTdW1tYXJ5V2lkZ2V0KCk7XG4gICAgZW5hYmxlUmVzaXppbmcoKTtcbiAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZnJlc2gtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsb2FkQ29udGVudCgpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmstbW9kZS10b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrLW1vZGUnKTtcbiAgICAgICAgLy8gT3B0aW9uYWw6IFNhdmUgdXNlciBwcmVmZXJlbmNlIHVzaW5nIGxvY2FsU3RvcmFnZVxuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstbW9kZScpKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFwcGx5IHNhdmVkIHRoZW1lIG9uIGxvYWRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2F2ZWRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xuICAgICAgICBpZiAoc2F2ZWRUaGVtZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gYWRkUmVmcmVzaEJ1dHRvbigpIHtcbiAgY29uc3QgcmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZWZyZXNoQnV0dG9uLmlkID0gJ3JlZnJlc2gtYnV0dG9uJztcbiAgcmVmcmVzaEJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZWZyZXNoJztcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1yYW5nZS1jb250YWluZXInKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlZnJlc2hCdXR0b24pO1xufVxuXG4vKiBJbml0aWFsaXplIERhdGUgUmFuZ2UgSW5wdXRzICovXG5mdW5jdGlvbiBhZGREYXRlUmFuZ2VCdXR0b25zKCkge1xuICBcbiAgY29uc3QgYnV0dG9uRGF0YSA9IFtcbiAgICAgIHsgbGFiZWw6ICdMYXN0IDI0IEhvdXJzJywgcmFuZ2U6ICcyNGgnIH0sXG4gICAgICB7IGxhYmVsOiAnTGFzdCBXZWVrJywgcmFuZ2U6ICcxdycgfSxcbiAgICAgIHsgbGFiZWw6ICdMYXN0IE1vbnRoJywgcmFuZ2U6ICcxbScgfSxcbiAgICAgIHsgbGFiZWw6ICdMYXN0IDMgTW9udGhzJywgcmFuZ2U6ICczbScgfSxcbiAgICAgIHsgbGFiZWw6ICdMYXN0IDYgTW9udGhzJywgcmFuZ2U6ICc2bScgfSxcbiAgICAgIC8vIFRPRE86IGFkZCBtb250aCB3aXNlIG9wdGlvbnMgaW4gZHJvcCBkb3duXG4gICAgICB7IGxhYmVsOiAnSmFudWFyeScsIHJhbmdlOiAnamFuJyB9LFxuICAgICAgeyBsYWJlbDogJ0ZlYnJ1YXJ5JywgcmFuZ2U6ICdmZWInIH0sXG4gICAgICB7IGxhYmVsOiAnTWFyY2gnLCByYW5nZTogJ21hcicgfVxuXG4gIF07XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcmFuZ2UtY29udGFpbmVyJyk7XG5cbiAgYnV0dG9uRGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidXR0b24uY2xhc3NOYW1lID0gJ2RhdGUtcmFuZ2UtYnV0dG9uJztcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGRhdGEubGFiZWw7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXJhbmdlJywgZGF0YS5yYW5nZSk7XG5cbiAgICAgIC8vIEhpZ2hsaWdodCB0aGUgZGVmYXVsdCBzZWxlY3RlZCBidXR0b25cbiAgICAgIGlmIChkYXRhLnJhbmdlID09PSAnMjRoJykge1xuICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgc2V0RGF0ZVJhbmdlKGRhdGEucmFuZ2UpO1xuICAgICAgICAgIGxvYWRDb250ZW50KCk7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgJ3NlbGVjdGVkJyBjbGFzcyBmcm9tIGFsbCBidXR0b25zXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGUtcmFuZ2UtYnV0dG9uJykuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIEFkZCAnc2VsZWN0ZWQnIGNsYXNzIHRvIHRoZSBjbGlja2VkIGJ1dHRvblxuICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0RGF0ZVJhbmdlKHJhbmdlKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICBzd2l0Y2ggKHJhbmdlKSB7XG4gICAgICBjYXNlICcyNGgnOlxuICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICAgICAgICBzdGFydERhdGUuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgLSAxKTtcbiAgICAgICAgICBlbmREYXRlID0gdG9kYXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcxdyc6XG4gICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkpO1xuICAgICAgICAgIHN0YXJ0RGF0ZS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSAtIDcpO1xuICAgICAgICAgIGVuZERhdGUgPSB0b2RheTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzFtJzpcbiAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheSk7XG4gICAgICAgICAgc3RhcnREYXRlLnNldE1vbnRoKHRvZGF5LmdldE1vbnRoKCkgLSAxKTtcbiAgICAgICAgICBlbmREYXRlID0gdG9kYXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICczbSc6XG4gICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkpO1xuICAgICAgICAgIHN0YXJ0RGF0ZS5zZXRNb250aCh0b2RheS5nZXRNb250aCgpIC0gMyk7XG4gICAgICAgICAgZW5kRGF0ZSA9IHRvZGF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnNm0nOlxuICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICAgICAgICBzdGFydERhdGUuc2V0TW9udGgodG9kYXkuZ2V0TW9udGgoKSAtIDYpO1xuICAgICAgICAgIGVuZERhdGUgPSB0b2RheTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2phbic6XG4gICAgICBjYXNlICdmZWInOlxuICAgICAgY2FzZSAnbWFyJzpcbiAgICAgICAgICBjb25zdCBtb250aE1hcCA9IHsgamFuOiAwLCBmZWI6IDEsIG1hcjogMiB9O1xuICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIG1vbnRoTWFwW3JhbmdlXSwgMSk7XG4gICAgICAgICAgZW5kRGF0ZSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIG1vbnRoTWFwW3JhbmdlXSArIDEsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheSk7XG4gICAgICAgICAgZW5kRGF0ZSA9IHRvZGF5O1xuICB9XG5cbiAgLy8gVXBkYXRlIGRpc3BsYXkgZGF0ZXNcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktc3RhcnQtZGF0ZScpLnRleHRDb250ZW50ID0gc3RhcnREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheS1lbmQtZGF0ZScpLnRleHRDb250ZW50ID0gZW5kRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbn1cblxuLyogQWRkIE92ZXJhbGwgU3VtbWFyeSBXaWRnZXQgKi9cbmFzeW5jIGZ1bmN0aW9uIGFkZE9yVXBkYXRlUmVjZW50SGlzdG9yeVdpZGdldCgpIHtcbiAgY29uc3QgbmV3V2lkZ2V0ID0gY3JlYXRlT3JHZXRXaWRnZXQoJ3JlY2VudC1oaXN0b3J5JywgJ1JlY2VudCBIaXN0b3J5Jyk7XG5cbiAgLy8gZGVsZXRlIGNoaWxkcmVuIGNvbnRhaW5pbmcgKnJlY2VudC1oaXN0b3J5LWNvbnRlbnRzKlxuICB3aGlsZSAobmV3V2lkZ2V0Lmxhc3RDaGlsZCAmJiBuZXdXaWRnZXQubGFzdENoaWxkLmlkICYmIG5ld1dpZGdldC5sYXN0Q2hpbGQuaWQuaW5jbHVkZXMoJ3JlY2VudC1oaXN0b3J5LWNvbnRlbnRzJykpIHtcbiAgICAgIG5ld1dpZGdldC5yZW1vdmVDaGlsZChuZXdXaWRnZXQubGFzdENoaWxkKTtcbiAgfVxuXG4gIGNyZWF0ZVJlY2VudEhpc3RvcnlFbGVtZW50KCkudGhlbigod2lkZ2V0KSA9PiB7XG4gICAgICBuZXdXaWRnZXQuYXBwZW5kQ2hpbGQod2lkZ2V0KTtcbiAgICAgIC8vIGFkanVzdCBzaXplIG9mIG5ld1dpZGdldFxuICAgICAgY29uc29sZS5sb2coJ2FkanVzdGluZyBzaXplIG9mIG5ld1dpZGdldCcpO1xuICAgICAgYWRqdXN0V2lkZ2V0U2l6ZShuZXdXaWRnZXQsIFsnLndpZGdldC1oZWFkZXInLCAnLmhpc3RvcnktY29udGFpbmVyJ10sIDUwKTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZE9yVXBkYXRlQmFzaWNTdW1tYXJ5V2lkZ2V0KCkge1xuICBjb25zdCBuZXdXaWRnZXQgPSBjcmVhdGVPckdldFdpZGdldCgnYmFzaWMtc3VtbWFyeScsICdTdW1tYXJ5Jyk7XG5cbiAgLy8gZGVsZXRlIGNoaWxkcmVuIGNvbnRhaW5pbmcgKmNvbnRlbnRzKlxuICB3aGlsZSAobmV3V2lkZ2V0Lmxhc3RDaGlsZCAmJiBuZXdXaWRnZXQubGFzdENoaWxkLmNsYXNzTmFtZSAmJiBuZXdXaWRnZXQubGFzdENoaWxkLmNsYXNzTmFtZS5pbmNsdWRlcygnY29udGVudHMnKSkge1xuICAgICAgbmV3V2lkZ2V0LnJlbW92ZUNoaWxkKG5ld1dpZGdldC5sYXN0Q2hpbGQpO1xuICB9XG5cbiAgYXdhaXQgY3JlYXRlQmFzaWNTdW1tYXJ5RWxlbWVudChuZXdXaWRnZXQpO1xufVxuXG4vKiBMb2FkIENvbnRlbnQgQmFzZWQgb24gRGF0ZSBSYW5nZSAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZENvbnRlbnQoKSB7XG4gIGNvbnNvbGUubG9nKCdTZWxlY3RlZCBGaWx0ZXJzOicsIHNlbGVjdGVkRmlsdGVycyk7XG4gIGNvbnNvbGUubG9nKCdFeGNsdWRlIEZpbHRlcnM6JywgZXhjbHVkZUZpbHRlcnMpO1xuICBhd2FpdCBhZGRPclVwZGF0ZVJlY2VudEhpc3RvcnlXaWRnZXQoKTtcbiAgYXdhaXQgYWRkT3JVcGRhdGVCYXNpY1N1bW1hcnlXaWRnZXQoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVjZW50SGlzdG9yeUVsZW1lbnQoKSB7XG4gIHRvcE5Ib3N0bmFtZXNXaXRoVGl0bGVzID0gYXdhaXQgZ2V0SGlzdG9yeVdpdGhUb3BOU3RhdHMoc3RhcnREYXRlLCBlbmREYXRlLCAxMCwgc2VsZWN0ZWRGaWx0ZXJzLCBleGNsdWRlRmlsdGVycyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2hpc3RvcnktY29udGFpbmVyJztcbiAgY29udGFpbmVyLmlkID0gJ3JlY2VudC1oaXN0b3J5LWNvbnRlbnRzJztcblxuICB0b3BOSG9zdG5hbWVzV2l0aFRpdGxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIC8vIENyZWF0ZSB0aGUgbWFpbiBib3ggZm9yIGVhY2ggaG9zdG5hbWVcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3guY2xhc3NOYW1lID0gJ2hpc3RvcnktYm94JztcblxuICAgIC8vIEZpcnN0IHBhcnQ6IEhvc3RuYW1lIGFuZCBoaXQgY291bnQgd2l0aCBhbiBpY29uXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoaXN0b3J5LWhlYWRlcic7XG5cbiAgICBjb25zdCBob3N0bmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgLy8gQWRkIGFuIGljb24gYmVmb3JlIHRoZSBob3N0bmFtZVxuICAgIGhvc3RuYW1lLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhcyBmYS1nbG9iZS1hbWVyaWNhc1wiPjwvaT4gJHtpdGVtLmhvc3RuYW1lfWA7XG5cbiAgICBjb25zdCBoaXRDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBoaXRDb3VudC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtY2hhcnQtbGluZVwiPjwvaT4gSGl0IENvdW50OiAke2l0ZW0uY291bnR9YDtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChob3N0bmFtZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhpdENvdW50KTtcblxuICAgIC8vIFNlY29uZCBwYXJ0OiBUaXRsZXMgd2l0aCBVUkxzXG4gICAgY29uc3QgdGl0bGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0aXRsZXMtY29udGFpbmVyJztcblxuICAgIGNvbnN0IHRpdGxlc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgLy8gSW5pdGlhbCBkaXNwbGF5IGNvdW50XG4gICAgY29uc3QgaW5pdGlhbERpc3BsYXlDb3VudCA9IDEwO1xuICAgIGNvbnN0IGFkZGl0aW9uYWxMb2FkQ291bnQgPSAyMDtcblxuICAgIC8vIERldGVybWluZSBob3cgbWFueSB0aXRsZXMgdG8gc2hvdyBpbml0aWFsbHlcbiAgICBjb25zdCBkaXNwbGF5ZWRUaXRsZXMgPSBpdGVtLnRpdGxlcy5zbGljZSgwLCBpbml0aWFsRGlzcGxheUNvdW50KTtcbiAgICBkaXNwbGF5ZWRUaXRsZXMuZm9yRWFjaCh0aXRsZUl0ZW0gPT4ge1xuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGxpbmsuaHJlZiA9IHRpdGxlSXRlbS51cmw7XG4gICAgICBsaW5rLnRleHRDb250ZW50ID0gdGl0bGVJdGVtLnRpdGxlO1xuICAgICAgbGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgdGl0bGVzTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfSk7XG5cbiAgICB0aXRsZXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVzTGlzdCk7XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgbW9yZSB0aXRsZXMsIGFkZCBhIFwibW9yZVwiIGJ1dHRvblxuICAgIGlmIChpdGVtLnRpdGxlcy5sZW5ndGggPiBpbml0aWFsRGlzcGxheUNvdW50KSB7XG4gICAgICBjb25zdCBtb3JlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBtb3JlQnV0dG9uLmNsYXNzTmFtZSA9ICdtb3JlLWJ1dHRvbic7XG4gICAgICBtb3JlQnV0dG9uLnRleHRDb250ZW50ID0gYGFuZCAke2l0ZW0udGl0bGVzLmxlbmd0aCAtIGluaXRpYWxEaXNwbGF5Q291bnR9IG1vcmUuLi5gO1xuICAgICAgbW9yZUJ1dHRvbi5kYXRhc2V0Lmhvc3RuYW1lID0gaXRlbS5ob3N0bmFtZTsgLy8gRm9yIGlkZW50aWZ5aW5nIHdoaWNoIGJveCB0byBleHBhbmRcblxuICAgICAgbW9yZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbG9hZE1vcmVUaXRsZXMoaXRlbSwgdGl0bGVzTGlzdCwgbW9yZUJ1dHRvbiwgaW5pdGlhbERpc3BsYXlDb3VudCwgYWRkaXRpb25hbExvYWRDb3VudCk7XG4gICAgICB9KTtcblxuICAgICAgdGl0bGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vcmVCdXR0b24pO1xuICAgIH1cblxuICAgIC8vIEFzc2VtYmxlIHRoZSBib3hcbiAgICBib3guYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBib3guYXBwZW5kQ2hpbGQodGl0bGVzQ29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm94KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmFzaWNTdW1tYXJ5RWxlbWVudChuZXdXaWRnZXQpIHtcbiAgY29uc3QgdG9wTkhvc3RuYW1lc1dpdGhUaXRsZXMgPSBhd2FpdCBnZXRIaXN0b3J5V2l0aFRvcE5TdGF0cyhzdGFydERhdGUsIGVuZERhdGUsIDEwLCBzZWxlY3RlZEZpbHRlcnMsIGV4Y2x1ZGVGaWx0ZXJzKTtcbiAgY29uc3QgaGlzdG9yeUl0ZW1zID0gdG9wTkhvc3RuYW1lc1dpdGhUaXRsZXMubWFwKGl0ZW0gPT4gaXRlbS50aXRsZXMpLmZsYXQoKTtcblxuICAvLyBBcHBlbmQgYWxsIGhpc3RvcnkgaXRlbXMgdG8gYSBzaW5nbGUgc3RyaW5nXG4gIGNvbnN0IGhpc3RvcnlJdGVtVGl0bGVzID0gaGlzdG9yeUl0ZW1zLm1hcChpdGVtID0+IGl0ZW0udGl0bGUpLmpvaW4oJywgJyk7XG5cbiAgLy8gQ3JlYXRlIGNodW5rcyBvZiA0MDAwIGNoYXJhY3RlcnNcbiAgY29uc3QgY2h1bmtzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaGlzdG9yeUl0ZW1UaXRsZXMubGVuZ3RoOyBpICs9IDIwMDApIHtcbiAgICBjaHVua3MucHVzaChoaXN0b3J5SXRlbVRpdGxlcy5zbGljZShpLCBpICsgMjAwMCkpO1xuICB9XG5cbiAgLy8gU3VtbWFyaXplIGVhY2ggY2h1bmsgYW5kIGFwcGVuZCB0byB0aGUgcmVzdWx0XG4gIGZvciAoY29uc3QgY2h1bmsgb2YgY2h1bmtzKSB7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHN1bW1hcml6ZShjbGVhbklucHV0KGNodW5rKSk7XG5cbiAgICBsZXQgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gVXNlIGEgY2xhc3MgaW5zdGVhZCBvZiBhbiBJRCB0byBhbGxvdyBtdWx0aXBsZSBlbGVtZW50c1xuICAgIHRleHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jhc2ljLXN1bW1hcnktY29udGVudHMnKTtcblxuICAgIHRleHRFbGVtZW50LmlubmVySFRNTCA9IG1hcmtkb3duVG9IdG1sKHJlc3VsdCk7XG4gICAgbmV3V2lkZ2V0LmFwcGVuZENoaWxkKHRleHRFbGVtZW50KTtcbiAgICBhZGp1c3RXaWRnZXRTaXplKG5ld1dpZGdldCwgWycud2lkZ2V0LWhlYWRlcicsICcuYmFzaWMtc3VtbWFyeS1jb250ZW50cyddLCA2MCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZE1vcmVUaXRsZXMoaXRlbSwgdGl0bGVzTGlzdCwgbW9yZUJ1dHRvbiwgaW5pdGlhbENvdW50LCBsb2FkQ291bnQpIHtcbiAgLy8gRGV0ZXJtaW5lIHRoZSBjdXJyZW50IG51bWJlciBvZiB0aXRsZXMgZGlzcGxheWVkXG4gIGNvbnN0IGN1cnJlbnRDb3VudCA9IHRpdGxlc0xpc3QucXVlcnlTZWxlY3RvckFsbCgnbGknKS5sZW5ndGg7XG4gIGNvbnN0IG5leHRDb3VudCA9IGN1cnJlbnRDb3VudCArIGxvYWRDb3VudDtcbiAgY29uc3QgdGl0bGVzVG9BZGQgPSBpdGVtLnRpdGxlcy5zbGljZShjdXJyZW50Q291bnQsIG5leHRDb3VudCk7XG5cbiAgdGl0bGVzVG9BZGQuZm9yRWFjaCh0aXRsZUl0ZW0gPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsuaHJlZiA9IHRpdGxlSXRlbS51cmw7XG4gICAgbGluay50ZXh0Q29udGVudCA9IHRpdGxlSXRlbS50aXRsZTtcbiAgICBsaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIHRpdGxlc0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcblxuICAvLyBVcGRhdGUgdGhlIHJlbWFpbmluZyBjb3VudFxuICBjb25zdCByZW1haW5pbmcgPSBpdGVtLnRpdGxlcy5sZW5ndGggLSBuZXh0Q291bnQ7XG5cbiAgaWYgKHJlbWFpbmluZyA+IDApIHtcbiAgICBtb3JlQnV0dG9uLnRleHRDb250ZW50ID0gYGFuZCAke3JlbWFpbmluZ30gbW9yZS4uLmA7XG4gIH0gZWxzZSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBcIm1vcmVcIiBidXR0b24gaWYgbm8gbW9yZSB0aXRsZXMgYXJlIGxlZnRcbiAgICBtb3JlQnV0dG9uLnJlbW92ZSgpO1xuICB9XG59XG5cbi8qIEluaXRpYWxpemUgRmlsdGVycyAoVGFnIEZpbHRlcnMgYW5kIEV4Y2x1ZGUgVGFncykgKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVGaWx0ZXJzKCkge1xuICAgIGF3YWl0IGluaXRpYWxpemVDYXRlZ29yeUZpbHRlcnMoKTtcbiAgICBhd2FpdCBpbml0aWFsaXplRXhjbHVkZUZpbHRlcnMoKTtcbn1cblxuLyogSW5pdGlhbGl6ZSBUYWcgRmlsdGVycyAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZUNhdGVnb3J5RmlsdGVycygpIHtcbiAgICBjb25zdCBkZWZhdWx0RmlsdGVycyA9IFsnQ29kZScsICdQcm9kdWN0aXZpdHknLCAnQUknLCAnRW50ZXJ0YWlubWVudCcsICdTb2NpYWwnXTtcbiAgICBjb25zdCBjdXN0b21GaWx0ZXJzID0gYXdhaXQgZ2V0Q3VzdG9tRmlsdGVycygpO1xuXG4gICAgY29uc3QgYWxsRmlsdGVycyA9IFsuLi5kZWZhdWx0RmlsdGVycywgLi4uY3VzdG9tRmlsdGVyc107XG5cbiAgICBhbGxGaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgICAgY3JlYXRlVG9nZ2xlQnV0dG9uKGZpbHRlciwgZmFsc2UsICdjYXRlZ29yeS1maWx0ZXJzJyk7XG4gICAgfSk7XG5cbiAgICAvLyBMb2FkIHNlbGVjdGVkIGZpbHRlcnMgZnJvbSBzdG9yYWdlXG4gICAgc2VsZWN0ZWRGaWx0ZXJzID0gYXdhaXQgZ2V0U2VsZWN0ZWRGaWx0ZXJzKCk7XG4gICAgdXBkYXRlRmlsdGVyU3RhdGVzKCdjYXRlZ29yeS1maWx0ZXJzJyk7XG59XG5cbi8qIEluaXRpYWxpemUgRXhjbHVkZSBGaWx0ZXJzICovXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplRXhjbHVkZUZpbHRlcnMoKSB7XG4gICAgY29uc3QgY3VzdG9tRXhjbHVkZUZpbHRlcnMgPSBhd2FpdCBnZXRDdXN0b21FeGNsdWRlRmlsdGVycygpO1xuXG4gICAgY3VzdG9tRXhjbHVkZUZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgICBjcmVhdGVUb2dnbGVCdXR0b24oZmlsdGVyLCBmYWxzZSwgJ2V4Y2x1ZGUtZmlsdGVycycpO1xuICAgIH0pO1xuXG4gICAgLy8gTG9hZCBzZWxlY3RlZCBleGNsdWRlIGZpbHRlcnMgZnJvbSBzdG9yYWdlXG4gICAgZXhjbHVkZUZpbHRlcnMgPSBhd2FpdCBnZXRTZWxlY3RlZEV4Y2x1ZGVGaWx0ZXJzKCk7XG4gICAgdXBkYXRlRmlsdGVyU3RhdGVzKCdleGNsdWRlLWZpbHRlcnMnKTtcbn1cblxuLyogRnVuY3Rpb25zIGZvciBDYXRlZ29yeSBGaWx0ZXJzICovXG5cbi8qIEZ1bmN0aW9uIHRvIGdldCBjdXN0b20gZmlsdGVycyBmcm9tIENocm9tZSBzdG9yYWdlICovXG5mdW5jdGlvbiBnZXRDdXN0b21GaWx0ZXJzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydjdXN0b21GaWx0ZXJzJ10sIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LmN1c3RvbUZpbHRlcnMgfHwgW10pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuLyogRnVuY3Rpb24gdG8gZ2V0IHNlbGVjdGVkIGZpbHRlcnMgZnJvbSBDaHJvbWUgc3RvcmFnZSAqL1xuZnVuY3Rpb24gZ2V0U2VsZWN0ZWRGaWx0ZXJzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydzZWxlY3RlZEZpbHRlcnMnXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuc2VsZWN0ZWRGaWx0ZXJzIHx8IFtdKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8qIEZ1bmN0aW9uIHRvIHNhdmUgc2VsZWN0ZWQgZmlsdGVycyB0byBDaHJvbWUgc3RvcmFnZSAqL1xuZnVuY3Rpb24gc2F2ZVNlbGVjdGVkRmlsdGVycygpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzZWxlY3RlZEZpbHRlcnMgfSwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQgZmlsdGVycyBzYXZlZDonLCBzZWxlY3RlZEZpbHRlcnMpO1xuICAgIH0pO1xufVxuXG4vKiBGdW5jdGlvbiB0byBzYXZlIGN1c3RvbSBmaWx0ZXJzIHRvIENocm9tZSBzdG9yYWdlICovXG5mdW5jdGlvbiBzYXZlQ3VzdG9tRmlsdGVycyhjdXN0b21GaWx0ZXJzKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgY3VzdG9tRmlsdGVycyB9LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDdXN0b20gZmlsdGVycyBzYXZlZDonLCBjdXN0b21GaWx0ZXJzKTtcbiAgICB9KTtcbn1cblxuLyogRnVuY3Rpb25zIGZvciBFeGNsdWRlIEZpbHRlcnMgKi9cblxuLyogRnVuY3Rpb24gdG8gZ2V0IGN1c3RvbSBleGNsdWRlIGZpbHRlcnMgZnJvbSBDaHJvbWUgc3RvcmFnZSAqL1xuZnVuY3Rpb24gZ2V0Q3VzdG9tRXhjbHVkZUZpbHRlcnMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2N1c3RvbUV4Y2x1ZGVGaWx0ZXJzJ10sIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LmN1c3RvbUV4Y2x1ZGVGaWx0ZXJzIHx8IFtdKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8qIEZ1bmN0aW9uIHRvIGdldCBzZWxlY3RlZCBleGNsdWRlIGZpbHRlcnMgZnJvbSBDaHJvbWUgc3RvcmFnZSAqL1xuZnVuY3Rpb24gZ2V0U2VsZWN0ZWRFeGNsdWRlRmlsdGVycygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnc2VsZWN0ZWRFeGNsdWRlRmlsdGVycyddLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5zZWxlY3RlZEV4Y2x1ZGVGaWx0ZXJzIHx8IFtdKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8qIEZ1bmN0aW9uIHRvIHNhdmUgc2VsZWN0ZWQgZXhjbHVkZSBmaWx0ZXJzIHRvIENocm9tZSBzdG9yYWdlICovXG5mdW5jdGlvbiBzYXZlU2VsZWN0ZWRFeGNsdWRlRmlsdGVycygpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzZWxlY3RlZEV4Y2x1ZGVGaWx0ZXJzOiBleGNsdWRlRmlsdGVycyB9LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3RlZCBleGNsdWRlIGZpbHRlcnMgc2F2ZWQ6JywgZXhjbHVkZUZpbHRlcnMpO1xuICAgIH0pO1xufVxuXG4vKiBGdW5jdGlvbiB0byBzYXZlIGN1c3RvbSBleGNsdWRlIGZpbHRlcnMgdG8gQ2hyb21lIHN0b3JhZ2UgKi9cbmZ1bmN0aW9uIHNhdmVDdXN0b21FeGNsdWRlRmlsdGVycyhjdXN0b21FeGNsdWRlRmlsdGVycykge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzIH0sICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0N1c3RvbSBleGNsdWRlIGZpbHRlcnMgc2F2ZWQ6JywgY3VzdG9tRXhjbHVkZUZpbHRlcnMpO1xuICAgIH0pO1xufVxuXG4vKiBGdW5jdGlvbiB0byBjcmVhdGUgYSB0b2dnbGUgYnV0dG9uICovXG5mdW5jdGlvbiBjcmVhdGVUb2dnbGVCdXR0b24obGFiZWwsIGlzRGVmYXVsdCA9IGZhbHNlLCBmaWx0ZXJUeXBlID0gJ2NhdGVnb3J5LWZpbHRlcnMnKSB7XG4gICAgY29uc3QgY29udGFpbmVySWQgPSBmaWx0ZXJUeXBlID09PSAnZXhjbHVkZS1maWx0ZXJzJyA/ICdleGNsdWRlLWZpbHRlcnMnIDogJ2NhdGVnb3J5LWZpbHRlcnMnO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnY2F0ZWdvcnktdG9nZ2xlLWJ1dHRvbic7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgYnV0dG9uLmRhdGFzZXQubGFiZWwgPSBsYWJlbDtcbiAgICBidXR0b24uZGF0YXNldC5kZWZhdWx0ID0gaXNEZWZhdWx0O1xuXG4gICAgLy8gQWRkICdjdXN0b20nIGNsYXNzIGlmIGl0J3Mgbm90IGEgZGVmYXVsdCBmaWx0ZXJcbiAgICBpZiAoIWlzRGVmYXVsdCkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnY3VzdG9tJyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSByZW1vdmUgKFgpIGJ1dHRvblxuICAgICAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcmVtb3ZlQnRuLmNsYXNzTmFtZSA9ICdyZW1vdmUtYnRuJztcbiAgICAgICAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gJ+KclSc7XG4gICAgICAgIHJlbW92ZUJ0bi50aXRsZSA9ICdSZW1vdmUgZmlsdGVyJztcblxuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgcmVtb3ZpbmcgdGhlIGZpbHRlclxuICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGF3YWl0IHJlbW92ZUZpbHRlcihsYWJlbCwgZmlsdGVyVHlwZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xuICAgIH1cblxuICAgIC8vIFNldCBpbml0aWFsIHN0YXRlIGJhc2VkIG9uIHNlbGVjdGVkIGZpbHRlcnNcbiAgICBpZiAoZmlsdGVyVHlwZSA9PT0gJ2V4Y2x1ZGUtZmlsdGVycycpIHtcbiAgICAgICAgaWYgKGV4Y2x1ZGVGaWx0ZXJzLmluY2x1ZGVzKGxhYmVsKSkge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkRmlsdGVycy5pbmNsdWRlcyhsYWJlbCkpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciB0b2dnbGluZyBhY3RpdmUgc3RhdGVcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChmaWx0ZXJUeXBlID09PSAnZXhjbHVkZS1maWx0ZXJzJykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBleGNsdWRlRmlsdGVycy5pbmRleE9mKGxhYmVsKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgZXhjbHVkZUZpbHRlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVGaWx0ZXJzLnB1c2gobGFiZWwpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNhdmVTZWxlY3RlZEV4Y2x1ZGVGaWx0ZXJzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHNlbGVjdGVkRmlsdGVycy5pbmRleE9mKGxhYmVsKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWx0ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEZpbHRlcnMucHVzaChsYWJlbCk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2F2ZVNlbGVjdGVkRmlsdGVycygpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRDb250ZW50KCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbn1cblxuLyogRnVuY3Rpb24gdG8gcmVtb3ZlIGEgY3VzdG9tIGZpbHRlciAqL1xuYXN5bmMgZnVuY3Rpb24gcmVtb3ZlRmlsdGVyKGxhYmVsLCBmaWx0ZXJUeXBlKSB7XG4gICAgaWYgKGZpbHRlclR5cGUgPT09ICdleGNsdWRlLWZpbHRlcnMnKSB7XG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIGV4Y2x1ZGVGaWx0ZXJzIGlmIHByZXNlbnRcbiAgICAgICAgY29uc3QgaW5kZXggPSBleGNsdWRlRmlsdGVycy5pbmRleE9mKGxhYmVsKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGV4Y2x1ZGVGaWx0ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBzYXZlU2VsZWN0ZWRFeGNsdWRlRmlsdGVycygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gY3VzdG9tRXhjbHVkZUZpbHRlcnMgaW4gc3RvcmFnZVxuICAgICAgICBjb25zdCBjdXN0b21FeGNsdWRlRmlsdGVycyA9IGF3YWl0IGdldEN1c3RvbUV4Y2x1ZGVGaWx0ZXJzKCk7XG4gICAgICAgIGNvbnN0IGZpbHRlckluZGV4ID0gY3VzdG9tRXhjbHVkZUZpbHRlcnMuaW5kZXhPZihsYWJlbCk7XG4gICAgICAgIGlmIChmaWx0ZXJJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBjdXN0b21FeGNsdWRlRmlsdGVycy5zcGxpY2UoZmlsdGVySW5kZXgsIDEpO1xuICAgICAgICAgICAgc2F2ZUN1c3RvbUV4Y2x1ZGVGaWx0ZXJzKGN1c3RvbUV4Y2x1ZGVGaWx0ZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgYnV0dG9uIGZyb20gdGhlIERPTVxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2F0ZWdvcnktdG9nZ2xlLWJ1dHRvbltkYXRhLWxhYmVsPVwiJHtsYWJlbH1cIl1gKTtcbiAgICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRXhpc3RpbmcgY2F0ZWdvcnkgZmlsdGVycyByZW1vdmFsXG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIHNlbGVjdGVkRmlsdGVycyBpZiBwcmVzZW50XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0ZWRGaWx0ZXJzLmluZGV4T2YobGFiZWwpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgc2VsZWN0ZWRGaWx0ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBzYXZlU2VsZWN0ZWRGaWx0ZXJzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgZnJvbSBjdXN0b21GaWx0ZXJzIGluIHN0b3JhZ2VcbiAgICAgICAgY29uc3QgY3VzdG9tRmlsdGVycyA9IGF3YWl0IGdldEN1c3RvbUZpbHRlcnMoKTtcbiAgICAgICAgY29uc3QgZmlsdGVySW5kZXggPSBjdXN0b21GaWx0ZXJzLmluZGV4T2YobGFiZWwpO1xuICAgICAgICBpZiAoZmlsdGVySW5kZXggPiAtMSkge1xuICAgICAgICAgICAgY3VzdG9tRmlsdGVycy5zcGxpY2UoZmlsdGVySW5kZXgsIDEpO1xuICAgICAgICAgICAgc2F2ZUN1c3RvbUZpbHRlcnMoY3VzdG9tRmlsdGVycyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGJ1dHRvbiBmcm9tIHRoZSBET01cbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhdGVnb3J5LXRvZ2dsZS1idXR0b25bZGF0YS1sYWJlbD1cIiR7bGFiZWx9XCJdYCk7XG4gICAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyogRnVuY3Rpb24gdG8gdXBkYXRlIGZpbHRlciBidXR0b24gc3RhdGVzIGJhc2VkIG9uIHNlbGVjdGVkRmlsdGVycyAqL1xuZnVuY3Rpb24gdXBkYXRlRmlsdGVyU3RhdGVzKGZpbHRlclR5cGUgPSAnY2F0ZWdvcnktZmlsdGVycycpIHtcbiAgICBsZXQgYnV0dG9ucztcbiAgICBpZiAoZmlsdGVyVHlwZSA9PT0gJ2V4Y2x1ZGUtZmlsdGVycycpIHtcbiAgICAgICAgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNleGNsdWRlLWZpbHRlcnMgLmNhdGVnb3J5LXRvZ2dsZS1idXR0b24nKTtcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGJ1dHRvbi5kYXRhc2V0LmxhYmVsO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVGaWx0ZXJzLmluY2x1ZGVzKGxhYmVsKSkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NhdGVnb3J5LWZpbHRlcnMgLmNhdGVnb3J5LXRvZ2dsZS1idXR0b24nKTtcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGJ1dHRvbi5kYXRhc2V0LmxhYmVsO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkRmlsdGVycy5pbmNsdWRlcyhsYWJlbCkpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKiBFdmVudCBsaXN0ZW5lciBmb3IgYWRkaW5nIG5ldyBjYXRlZ29yeSBmaWx0ZXIgKi9cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtZmlsdGVyLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctZmlsdGVyLWlucHV0Jyk7XG4gICAgY29uc3QgbmV3RmlsdGVyID0gaW5wdXQudmFsdWUudHJpbSgpO1xuICAgIGlmIChuZXdGaWx0ZXIgJiYgIXNlbGVjdGVkRmlsdGVycy5pbmNsdWRlcyhuZXdGaWx0ZXIpKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0b2dnbGUgYnV0dG9uXG4gICAgICAgIGNyZWF0ZVRvZ2dsZUJ1dHRvbihuZXdGaWx0ZXIsIGZhbHNlLCAnY2F0ZWdvcnktZmlsdGVycycpO1xuXG4gICAgICAgIC8vIFNhdmUgdG8gY3VzdG9tIGZpbHRlcnNcbiAgICAgICAgY29uc3QgY3VzdG9tRmlsdGVycyA9IGF3YWl0IGdldEN1c3RvbUZpbHRlcnMoKTtcbiAgICAgICAgY3VzdG9tRmlsdGVycy5wdXNoKG5ld0ZpbHRlcik7XG4gICAgICAgIHNhdmVDdXN0b21GaWx0ZXJzKGN1c3RvbUZpbHRlcnMpO1xuXG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxufSk7XG5cbi8qIEV2ZW50IGxpc3RlbmVyIGZvciBhZGRpbmcgbmV3IGV4Y2x1ZGUgZmlsdGVyICovXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWV4Y2x1ZGUtZmlsdGVyLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctZXhjbHVkZS1maWx0ZXItaW5wdXQnKTtcbiAgICBjb25zdCBuZXdFeGNsdWRlRmlsdGVyID0gaW5wdXQudmFsdWUudHJpbSgpO1xuICAgIGlmIChuZXdFeGNsdWRlRmlsdGVyICYmICFleGNsdWRlRmlsdGVycy5pbmNsdWRlcyhuZXdFeGNsdWRlRmlsdGVyKSkge1xuICAgICAgICAvLyBDcmVhdGUgdG9nZ2xlIGJ1dHRvblxuICAgICAgICBjcmVhdGVUb2dnbGVCdXR0b24obmV3RXhjbHVkZUZpbHRlciwgZmFsc2UsICdleGNsdWRlLWZpbHRlcnMnKTtcblxuICAgICAgICAvLyBTYXZlIHRvIGN1c3RvbSBleGNsdWRlIGZpbHRlcnNcbiAgICAgICAgY29uc3QgY3VzdG9tRXhjbHVkZUZpbHRlcnMgPSBhd2FpdCBnZXRDdXN0b21FeGNsdWRlRmlsdGVycygpO1xuICAgICAgICBjdXN0b21FeGNsdWRlRmlsdGVycy5wdXNoKG5ld0V4Y2x1ZGVGaWx0ZXIpO1xuICAgICAgICBzYXZlQ3VzdG9tRXhjbHVkZUZpbHRlcnMoY3VzdG9tRXhjbHVkZUZpbHRlcnMpO1xuXG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsImdldFN1bW1hcml6ZXIiLCJfZ2V0U3VtbWFyaXplciIsIl9jYWxsZWUiLCJvcHRpb25zIiwiYXZhaWxhYmxlIiwic3VtbWFyaXplciIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJzaGFyZWRDb250ZXh0IiwiZm9ybWF0Iiwic2VsZiIsImFpIiwiY2FwYWJpbGl0aWVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJsb2FkZWQiLCJ0b3RhbCIsInJlYWR5Iiwic3VtbWFyaXplIiwiX3giLCJfc3VtbWFyaXplIiwiX2NhbGxlZTIiLCJ0ZXh0IiwicmVzdWx0IiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiY29udGV4dCIsImRlc3Ryb3kiLCJ0MCIsImdldEhpc3RvcnlJblRpbWVSYW5nZSIsImdldEZpbHRlcmVkSGlzdG9yeUl0ZW1zIiwiZ2V0SGlzdG9yeSIsIl94MiIsIl9nZXRIaXN0b3J5Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInJlamVjdCIsImNocm9tZSIsImhpc3RvcnkiLCJzZWFyY2giLCJzdGFydFRpbWUiLCJnZXRUaW1lIiwiZW5kVGltZSIsIm1heFJlc3VsdHMiLCJyZXN1bHRzIiwicnVudGltZSIsImxhc3RFcnJvciIsImdldEhpc3RvcnlXaXRoVG9wTlN0YXRzIiwiX3gzIiwiX3g0IiwiX3g1IiwiX3g2IiwiX3g3IiwiX2dldEhpc3RvcnlXaXRoVG9wTlN0YXRzIiwiTiIsInNlbGVjdGVkRmlsdGVycyIsImV4Y2x1ZGVGaWx0ZXJzIiwiaGlzdG9yeUl0ZW1zIiwiZmlsdGVyZWRIaXN0b3J5SXRlbXMiLCJwYXJzZWRIaXN0b3J5SXRlbXMiLCJob3N0bmFtZU1hcCIsImhvc3RuYW1lVGl0bGVNYXAiLCJzb3J0ZWRIb3N0bmFtZXMiLCJ0b3BOSG9zdG5hbWVzIiwidG9wTkhvc3RuYW1lc1dpdGhUaXRsZXMiLCJtYXAiLCJpdGVtIiwicGFyc2VfdXJsX3BhcnQiLCJ1cmwiLCJ0aXRsZSIsImNvdW50X2J5X2hvc3RuYW1lIiwiY3JlYXRlSG9zdE5hbWVUaXRsZU1hcCIsIkFycmF5IiwiZnJvbSIsImVudHJpZXMiLCJzb3J0IiwiYiIsImhvc3RuYW1lIiwidGl0bGVzIiwiZ2V0IiwiY291bnQiLCJwYXJzZWRVcmwiLCJVUkwiLCJwcm90b2NvbCIsInJlcGxhY2UiLCJob3N0bmFtZVBhcnRzIiwic3BsaXQiLCJzdWJkb21haW4iLCJkb21haW4iLCJ0bGQiLCJqb2luIiwicGF0aCIsInBhdGhuYW1lIiwicXVlcnlQYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJrZXkiLCJpc0FycmF5IiwiZnJhZ21lbnQiLCJoYXNoIiwicG9ydCIsImhvc3QiLCJocmVmIiwib3JpZ2luIiwiZXJyb3IiLCJjb25jYXQiLCJNYXAiLCJoYXMiLCJzZXQiLCJzb21lIiwiZXh0cmFjdERvbWFpbiIsIm1hcmtkb3duVG9IdG1sIiwibWFya2Rvd25UZXh0IiwiaHRtbCIsImNsZWFuSW5wdXQiLCJtYXhMZW5ndGgiLCJ1bmRlZmluZWQiLCJub3JtYWxpemUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlc2NhcGUiLCJ0cmltIiwiZW5hYmxlUmVzaXppbmciLCJyZXNpemFibGVFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJyZXNpemVIYW5kbGUiLCJxdWVyeVNlbGVjdG9yIiwiaXNSZXNpemluZyIsInByZXZlbnREZWZhdWx0IiwiYm9keSIsInN0eWxlIiwiY3Vyc29yIiwiY2xhc3NMaXN0IiwiYWRkIiwic3RhcnRXaWR0aCIsIm9mZnNldFdpZHRoIiwic3RhcnRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzdGFydFgiLCJjbGllbnRYIiwic3RhcnRZIiwiY2xpZW50WSIsIm9uTW91c2VNb3ZlIiwiY3VycmVudFdpZHRoIiwiY3VycmVudEhlaWdodCIsIm1pbldpZHRoIiwibWluSGVpZ2h0Iiwid2lkdGgiLCJNYXRoIiwibWF4IiwiaGVpZ2h0Iiwib25Nb3VzZVVwIiwicmVtb3ZlIiwid2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNhdmVXaWRnZXRTaXplIiwiaWQiLCJsb2FkV2lkZ2V0U2l6ZSIsIndpZGdldElkIiwic2l6ZSIsInN0b3JhZ2UiLCJsb2NhbCIsIl9kZWZpbmVQcm9wZXJ0eSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJnZXRJdGVtIiwiY3JlYXRlT3JHZXRXaWRnZXQiLCJ1bmlxdWVJRCIsIndpZGdldFRpdGxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWRnZXRDb250YWluZXIiLCJuZXdXaWRnZXQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJhZGp1c3RXaWRnZXRTaXplIiwid2lkZ2V0Iiwic2VsZWN0b3JzIiwib2Zmc2V0Iiwic2VsZWN0b3IiLCJlbGVtZW50cyIsImRiIiwib3BlbkRhdGFiYXNlIiwiX29wZW5EYXRhYmFzZSIsInJlcXVlc3QiLCJpbmRleGVkREIiLCJvcGVuIiwib25lcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiZXJyb3JDb2RlIiwib251cGdyYWRlbmVlZGVkIiwib2JqZWN0U3RvcmUiLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJjcmVhdGVJbmRleCIsInVuaXF1ZSIsIm11bHRpRW50cnkiLCJvbnN1Y2Nlc3MiLCJjbGVhckRhdGFiYXNlIiwiX2NsZWFyRGF0YWJhc2UiLCJ0cmFuc2FjdGlvbiIsImNsZWFyIiwiYWRkSGlzdG9yeUl0ZW0iLCJfYWRkSGlzdG9yeUl0ZW0iLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImluZGV4IiwiY2hlY2tSZXF1ZXN0IiwibGFzdFZpc2l0VGltZSIsInB1dCIsImdldEFsbEhpc3RvcnlJdGVtcyIsIl9nZXRBbGxIaXN0b3J5SXRlbXMiLCJfY2FsbGVlNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImdldEFsbCIsImNoZWNrSWZJdGVtRXhpc3RzIiwiX2NoZWNrSWZJdGVtRXhpc3RzIiwiX2NhbGxlZTUiLCJleGlzdHMiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJwcm9taXNpZnlSZXF1ZXN0IiwiX2dldEhpc3RvcnlJblRpbWVSYW5nZSIsIl9jYWxsZWU2IiwicmFuZ2UiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJJREJLZXlSYW5nZSIsImJvdW5kIiwiRnVzZSIsImdldFNlYXJjaFJlc3VsdHMiLCJfZ2V0U2VhcmNoUmVzdWx0cyIsInJhd19xdWVyeSIsInF1ZXJ5IiwiZnVzZSIsInRvTG93ZXJDYXNlIiwid2VpZ2h0IiwidGhyZXNob2xkIiwiZmlsdGVyZWRJdGVtcyIsImxvd2VyQ2FzZVNlbGVjdGVkRmlsdGVycyIsImZpbHRlciIsInN1bW1hcnkiLCJ0YWdzIiwidGFnIiwiaW5jbHVkZXMiLCJsb3dlckNhc2VFeGNsdWRlRmlsdGVycyIsImFkZERhdGVSYW5nZUJ1dHRvbnMiLCJhZGRSZWZyZXNoQnV0dG9uIiwic2V0RGF0ZVJhbmdlIiwiaW5pdGlhbGl6ZUZpbHRlcnMiLCJhZGRPclVwZGF0ZVJlY2VudEhpc3RvcnlXaWRnZXQiLCJhZGRPclVwZGF0ZUJhc2ljU3VtbWFyeVdpZGdldCIsImxvYWRDb250ZW50IiwidG9nZ2xlIiwiY29udGFpbnMiLCJzYXZlZFRoZW1lIiwicmVmcmVzaEJ1dHRvbiIsInRleHRDb250ZW50IiwiY29udGFpbmVyIiwiYnV0dG9uRGF0YSIsImxhYmVsIiwiZGF0YSIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsImJ0biIsInRvZGF5IiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwic2V0TW9udGgiLCJnZXRNb250aCIsIm1vbnRoTWFwIiwiamFuIiwiZmViIiwibWFyIiwiZ2V0RnVsbFllYXIiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJfYWRkT3JVcGRhdGVSZWNlbnRIaXN0b3J5V2lkZ2V0IiwibGFzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVSZWNlbnRIaXN0b3J5RWxlbWVudCIsIl9hZGRPclVwZGF0ZUJhc2ljU3VtbWFyeVdpZGdldCIsImNyZWF0ZUJhc2ljU3VtbWFyeUVsZW1lbnQiLCJfbG9hZENvbnRlbnQiLCJfY2FsbGVlNyIsIl9jYWxsZWU3JCIsIl9jb250ZXh0NyIsIl9jcmVhdGVSZWNlbnRIaXN0b3J5RWxlbWVudCIsIl9jYWxsZWU4IiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4IiwiYm94IiwiaGVhZGVyIiwiaGl0Q291bnQiLCJ0aXRsZXNDb250YWluZXIiLCJ0aXRsZXNMaXN0IiwiaW5pdGlhbERpc3BsYXlDb3VudCIsImFkZGl0aW9uYWxMb2FkQ291bnQiLCJkaXNwbGF5ZWRUaXRsZXMiLCJ0aXRsZUl0ZW0iLCJsaXN0SXRlbSIsImxpbmsiLCJtb3JlQnV0dG9uIiwiZGF0YXNldCIsImxvYWRNb3JlVGl0bGVzIiwiX2NyZWF0ZUJhc2ljU3VtbWFyeUVsZW1lbnQiLCJfY2FsbGVlOSIsImhpc3RvcnlJdGVtVGl0bGVzIiwiY2h1bmtzIiwiX2kiLCJfY2h1bmtzIiwiY2h1bmsiLCJ0ZXh0RWxlbWVudCIsIl9jYWxsZWU5JCIsIl9jb250ZXh0OSIsImZsYXQiLCJpbml0aWFsQ291bnQiLCJsb2FkQ291bnQiLCJjdXJyZW50Q291bnQiLCJuZXh0Q291bnQiLCJ0aXRsZXNUb0FkZCIsInJlbWFpbmluZyIsIl9pbml0aWFsaXplRmlsdGVycyIsIl9jYWxsZWUxMCIsIl9jYWxsZWUxMCQiLCJfY29udGV4dDEwIiwiaW5pdGlhbGl6ZUNhdGVnb3J5RmlsdGVycyIsImluaXRpYWxpemVFeGNsdWRlRmlsdGVycyIsIl9pbml0aWFsaXplQ2F0ZWdvcnlGaWx0ZXJzIiwiX2NhbGxlZTExIiwiZGVmYXVsdEZpbHRlcnMiLCJjdXN0b21GaWx0ZXJzIiwiYWxsRmlsdGVycyIsIl9jYWxsZWUxMSQiLCJfY29udGV4dDExIiwiZ2V0Q3VzdG9tRmlsdGVycyIsIl90b0NvbnN1bWFibGVBcnJheSIsImNyZWF0ZVRvZ2dsZUJ1dHRvbiIsImdldFNlbGVjdGVkRmlsdGVycyIsInVwZGF0ZUZpbHRlclN0YXRlcyIsIl9pbml0aWFsaXplRXhjbHVkZUZpbHRlcnMiLCJfY2FsbGVlMTIiLCJjdXN0b21FeGNsdWRlRmlsdGVycyIsIl9jYWxsZWUxMiQiLCJfY29udGV4dDEyIiwiZ2V0Q3VzdG9tRXhjbHVkZUZpbHRlcnMiLCJnZXRTZWxlY3RlZEV4Y2x1ZGVGaWx0ZXJzIiwic2F2ZVNlbGVjdGVkRmlsdGVycyIsInNhdmVDdXN0b21GaWx0ZXJzIiwic2VsZWN0ZWRFeGNsdWRlRmlsdGVycyIsInNhdmVTZWxlY3RlZEV4Y2x1ZGVGaWx0ZXJzIiwic2F2ZUN1c3RvbUV4Y2x1ZGVGaWx0ZXJzIiwiaXNEZWZhdWx0IiwiZmlsdGVyVHlwZSIsImNvbnRhaW5lcklkIiwicmVtb3ZlQnRuIiwiX3JlZjIiLCJzdG9wUHJvcGFnYXRpb24iLCJyZW1vdmVGaWx0ZXIiLCJpbmRleE9mIiwic3BsaWNlIiwiX3JlbW92ZUZpbHRlciIsIl9jYWxsZWUxMyIsImZpbHRlckluZGV4IiwiX2luZGV4MiIsIl9maWx0ZXJJbmRleCIsIl9idXR0b24iLCJfY2FsbGVlMTMkIiwiX2NvbnRleHQxMyIsImJ1dHRvbnMiLCJfcmVmMyIsImlucHV0IiwibmV3RmlsdGVyIiwiX3JlZjQiLCJuZXdFeGNsdWRlRmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==