/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ai/tags.js":
/*!************************!*\
  !*** ./src/ai/tags.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTags: () => (/* binding */ getTags)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Initialize a single AI session
var aiSession = null;

/**
 * Delays execution for a specified number of milliseconds.
 * @param {number} ms - Milliseconds to delay.
 * @returns {Promise<void>}
 */
function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

/**
 * Initializes and retrieves a single AI session.
 * Reuses the session if it's already created.
 * Implements a retry mechanism with exponential backoff.
 * @returns {Promise<Object>} - The AI session object.
 * @throws {Error} - If unable to create AI session after retries.
 */
function getPromptAPISession() {
  return _getPromptAPISession.apply(this, arguments);
}
/**
 * Generates tags for a single URL and title.
 * @param {string} url - The website URL.
 * @param {string} title - The website title.
 * @returns {Promise<string[]>} - An array of tag strings.
 */
function _getPromptAPISession() {
  _getPromptAPISession = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var maxRetries, attempt, baseDelay, _yield$ai$languageMod, available, delayDuration;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!aiSession) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", aiSession);
        case 2:
          maxRetries = 1;
          attempt = 0;
          baseDelay = 500; // Initial delay in ms
        case 5:
          if (!(attempt < maxRetries)) {
            _context.next = 35;
            break;
          }
          _context.prev = 6;
          _context.next = 9;
          return ai.languageModel.capabilities();
        case 9:
          _yield$ai$languageMod = _context.sent;
          available = _yield$ai$languageMod.available;
          if (!(available !== "no")) {
            _context.next = 18;
            break;
          }
          _context.next = 14;
          return ai.languageModel.create({
            systemPrompt: "You are a friendly assistant and know the user. You are helping the user to analyze their browsing history and help them search it without exact keywords matching."
          });
        case 14:
          aiSession = _context.sent;
          return _context.abrupt("return", aiSession);
        case 18:
          throw new Error("AI model not available. Please check your setup and try again.");
        case 19:
          _context.next = 33;
          break;
        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](6);
          attempt++;
          console.info(_context.t0);
          console.info("Error creating AI session (Attempt ".concat(attempt, " of ").concat(maxRetries, "):"), _context.t0);
          if (!(attempt >= maxRetries)) {
            _context.next = 29;
            break;
          }
          console.error("Max retries reached. Unable to create AI session.");
          throw new Error("Failed to create AI session after multiple attempts. Please check your setup and try again.");
        case 29:
          // Exponential Backoff Delay
          delayDuration = baseDelay * Math.pow(2, attempt - 1);
          console.log("Retrying in ".concat(delayDuration / 1000, " s..."));
          _context.next = 33;
          return delay(delayDuration);
        case 33:
          _context.next = 5;
          break;
        case 35:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[6, 21]]);
  }));
  return _getPromptAPISession.apply(this, arguments);
}
function getTags(_x, _x2) {
  return _getTags.apply(this, arguments);
}

/**
 * Constructs the refined prompt for Gemini Nano.
 * @param {string} url - The website URL.
 * @param {string} title - The website title.
 * @returns {string} - The formatted prompt.
 */
function _getTags() {
  _getTags = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(title, url) {
    var refined_prompt, session, currentSession, tags;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          refined_prompt = createRefinedPrompt(sanitizeUrl(url), title);
          _context2.next = 3;
          return getPromptAPISession();
        case 3:
          session = _context2.sent;
          _context2.prev = 4;
          _context2.next = 7;
          return session.clone();
        case 7:
          currentSession = _context2.sent;
          _context2.next = 19;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](4);
          if (aiSession) {
            aiSession.destroy();
            aiSession = null; // Reset the global session
          }
          _context2.next = 15;
          return getPromptAPISession();
        case 15:
          _readOnlyError("session");
          _context2.next = 18;
          return session.clone();
        case 18:
          currentSession = _context2.sent;
        case 19:
          _context2.prev = 19;
          _context2.next = 22;
          return currentSession.prompt(refined_prompt);
        case 22:
          tags = _context2.sent;
          _context2.next = 29;
          break;
        case 25:
          _context2.prev = 25;
          _context2.t1 = _context2["catch"](19);
          console.log("Error generating tags:", _context2.t1);
          tags = "";
        case 29:
          _context2.next = 31;
          return currentSession.destroy();
        case 31:
          return _context2.abrupt("return", getTagsArray(tags));
        case 32:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[4, 10], [19, 25]]);
  }));
  return _getTags.apply(this, arguments);
}
function createRefinedPrompt(url, title) {
  return "\nYou are an AI assistant specialized in generating relevant tags for websites to enhance semantic search functionality.\n\nGiven the following website URL and title, perform the following tasks:\n\n1. **Generate 5-10 specific tags** that accurately represent the content and topics of the page based on the URL and title.\n2. **Add 2-3 generic tags** from the predefined list below that best categorize the website's content.\n3. Return only tags in a comma-separated string.\n\n**Predefined Generic Tags:** Work, Productivity, Entertainment, Social, Education, Technology, Health, News, Finance, Lifestyle\n\n**Website URL:** ".concat(url, "\n**Title:** ").concat(title, "\n\n**Tags:**");
}
function getTagsArray(tags) {
  if (!tags) {
    return []; // Return an empty array if tags is an empty string
  }
  return tags.split(',').map(function (tag) {
    return tag.trim().toLowerCase();
  });
}
function sanitizeUrl(url) {
  // Remove the protocol part (http:// or https://)
  var sanitizedUrl = url.replace(/^https?:\/\//, '');

  // Replace all characters that are not alphanumeric, '/', '.', '-', or '=' with '_'
  return sanitizedUrl.replace(/[^a-zA-Z0-9\/\.\-=_]/g, '_');
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
  !*** ./src/background/background.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/db.js */ "./src/utils/db.js");
/* harmony import */ var _ai_tags_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ai/tags.js */ "./src/ai/tags.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


function multiGenerateTagAndStore(_x) {
  return _multiGenerateTagAndStore.apply(this, arguments);
}
function _multiGenerateTagAndStore() {
  _multiGenerateTagAndStore = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(historyItems) {
    var batchsize, i, batch;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          batchsize = 4;
          i = 0;
        case 2:
          if (!(i < historyItems.length)) {
            _context3.next = 10;
            break;
          }
          console.log("Processing batch ".concat(Math.floor(i / batchsize) + 1));
          batch = historyItems.slice(i, i + batchsize);
          _context3.next = 7;
          return Promise.all(batch.map(generateTagAndStore));
        case 7:
          i += batchsize;
          _context3.next = 2;
          break;
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _multiGenerateTagAndStore.apply(this, arguments);
}
function generateTagAndStore(_x2) {
  return _generateTagAndStore.apply(this, arguments);
} // Function to index old data
function _generateTagAndStore() {
  _generateTagAndStore = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(historyItem) {
    var alreadyExists, tags;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0,_utils_db_js__WEBPACK_IMPORTED_MODULE_0__.checkIfItemExists)(historyItem.lastVisitTime);
        case 2:
          alreadyExists = _context4.sent;
          if (!alreadyExists) {
            _context4.next = 5;
            break;
          }
          return _context4.abrupt("return");
        case 5:
          _context4.prev = 5;
          _context4.next = 8;
          return (0,_ai_tags_js__WEBPACK_IMPORTED_MODULE_1__.getTags)(historyItem.title, historyItem.url);
        case 8:
          tags = _context4.sent;
          _context4.next = 14;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](5);
          return _context4.abrupt("return");
        case 14:
          historyItem.tags = tags;
          // TODO: generate summary
          historyItem.summary = "";
          _context4.next = 18;
          return (0,_utils_db_js__WEBPACK_IMPORTED_MODULE_0__.addHistoryItem)(historyItem);
        case 18:
          return _context4.abrupt("return");
        case 19:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[5, 11]]);
  }));
  return _generateTagAndStore.apply(this, arguments);
}
function indexOldData() {
  return _indexOldData.apply(this, arguments);
}
function _indexOldData() {
  _indexOldData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0,_utils_db_js__WEBPACK_IMPORTED_MODULE_0__.clearDatabase)();
        case 2:
          // Fetch all history items
          continueIndexing();
          return _context5.abrupt("return");
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _indexOldData.apply(this, arguments);
}
function continueIndexing() {
  console.log("indexing now");

  // Fetch all history items
  chrome.history.search({
    text: '',
    startTime: 0,
    // From the beginning
    maxResults: 0 // Unlimited
  }, /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(historyItems) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return multiGenerateTagAndStore(historyItems);
          case 2:
            console.log('Indexing of old data completed successfully.');
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x3) {
      return _ref.apply(this, arguments);
    };
  }());
}

// New: Listen for new history entries
chrome.history.onVisited.addListener(/*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(historyItem) {
    var url, title, lastVisitTime, tags, summary, newHistoryEntry;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          url = historyItem.url, title = historyItem.title, lastVisitTime = historyItem.lastVisitTime; // Generate tags for the new history entry
          _context2.next = 4;
          return (0,_ai_tags_js__WEBPACK_IMPORTED_MODULE_1__.getTags)(title || '', url);
        case 4:
          tags = _context2.sent;
          // TODO: generate summary
          summary = ""; // Create history entry object
          newHistoryEntry = {
            id: "history-".concat(lastVisitTime),
            // Unique ID based on lastVisitTime
            url: url,
            title: title,
            lastVisitTime: lastVisitTime,
            tags: tags,
            summary: summary
          }; // Add to database
          _context2.next = 9;
          return (0,_utils_db_js__WEBPACK_IMPORTED_MODULE_0__.addHistoryItem)(newHistoryEntry);
        case 9:
          console.log('New history item indexed');
          _context2.next = 15;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          console.error('Error indexing new history item:', _context2.t0);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return function (_x4) {
    return _ref2.apply(this, arguments);
  };
}());
function getTotalHistoryCount() {
  return new Promise(function (resolve, reject) {
    chrome.history.search({
      text: '',
      startTime: 0,
      // From the beginning of history
      maxResults: 0 // 0 will fetch all history items
    }, function (historyItems) {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(historyItems.length);
      }
    });
  });
}
function updateIndexPercentage() {
  return _updateIndexPercentage.apply(this, arguments);
} // Expose indexOldData function to popup.js via message passing
function _updateIndexPercentage() {
  _updateIndexPercentage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var _yield$Promise$all, _yield$Promise$all2, totalCount, indexedCount, percentage;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Promise.all([getTotalHistoryCount(), (0,_utils_db_js__WEBPACK_IMPORTED_MODULE_0__.getAllHistoryItems)().then(function (items) {
            return items.length;
          })]);
        case 3:
          _yield$Promise$all = _context6.sent;
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
          totalCount = _yield$Promise$all2[0];
          indexedCount = _yield$Promise$all2[1];
          // Calculate percentage
          percentage = totalCount > 0 ? (indexedCount / totalCount * 100).toFixed(2) : '0.00'; // Update the percentage in Chrome storage
          chrome.storage.local.set({
            indexPercentage: percentage
          }, function () {
            if (chrome.runtime.lastError) {
              console.error('Error setting index percentage:', chrome.runtime.lastError);
            } else {
              console.log("Indexed ".concat(percentage, "% of history"));
            }
          });
          _context6.next = 14;
          break;
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](0);
          console.error('Error updating index percentage:', _context6.t0);
        case 14:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 11]]);
  }));
  return _updateIndexPercentage.apply(this, arguments);
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'indexOldData') {
    indexOldData().then(function () {
      sendResponse({
        status: 'Indexing completed'
      });
    })["catch"](function (error) {
      sendResponse({
        status: 'Error',
        message: error.message
      });
    });
    return true; // Indicates that the response is asynchronous
  } else if (request.action === 'displaySummary') {
    chrome.tabs.create({
      url: chrome.runtime.getURL("user_dashboard.html")
    });
  } else if (request.action === 'continueIndexing') {
    sendResponse({
      status: 'Indexing continued'
    });
    continueIndexing();
  } else if (request.action === 'refreshIndexPercentage') {
    updateIndexPercentage().then(function () {
      sendResponse({
        status: 'Refresh % updated'
      });
    })["catch"](function (error) {
      sendResponse({
        status: 'Error',
        message: error.message
      });
    });
    return true;
  }
});
updateIndexPercentage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7SUFDM0QsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxJQUFJLENBQUMsQ0FBQztFQUNmLENBQUMsTUFBTSxJQUFJbkcsT0FBTyxDQUFDaUcsTUFBTSxLQUFLLGdCQUFnQixFQUFFO0lBQzlDckMsTUFBTSxDQUFDd0MsSUFBSSxDQUFDblAsTUFBTSxDQUFDO01BQUVxSCxHQUFHLEVBQUVzRixNQUFNLENBQUNlLE9BQU8sQ0FBQzBCLE1BQU0sQ0FBQyxxQkFBcUI7SUFBRSxDQUFDLENBQUM7RUFDM0UsQ0FBQyxNQUFNLElBQUlyRyxPQUFPLENBQUNpRyxNQUFNLEtBQUssa0JBQWtCLEVBQUU7SUFDaERELFlBQVksQ0FBQztNQUFFRSxNQUFNLEVBQUU7SUFBcUIsQ0FBQyxDQUFDO0lBQzlDdkMsZ0JBQWdCLENBQUMsQ0FBQztFQUNwQixDQUFDLE1BQU0sSUFBSTNELE9BQU8sQ0FBQ2lHLE1BQU0sS0FBSyx3QkFBd0IsRUFBRTtJQUN0RHBCLHFCQUFxQixDQUFDLENBQUMsQ0FBQ2hNLElBQUksQ0FBQyxZQUFNO01BQ2pDbU4sWUFBWSxDQUFDO1FBQUVFLE1BQU0sRUFBRTtNQUFvQixDQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUFDLFNBQU0sQ0FBQyxVQUFBdEksS0FBSyxFQUFJO01BQ2hCb0ksWUFBWSxDQUFDO1FBQUVFLE1BQU0sRUFBRSxPQUFPO1FBQUVDLE9BQU8sRUFBRXZJLEtBQUssQ0FBQ3VJO01BQVEsQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQztJQUNGLE9BQU8sSUFBSTtFQUNmO0FBQ0YsQ0FBQyxDQUFDO0FBQ0Z0QixxQkFBcUIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci8uL3NyYy9haS90YWdzLmpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL3V0aWxzL2RiLmpzIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEluaXRpYWxpemUgYSBzaW5nbGUgQUkgc2Vzc2lvblxubGV0IGFpU2Vzc2lvbiA9IG51bGw7XG5cbi8qKlxuICogRGVsYXlzIGV4ZWN1dGlvbiBmb3IgYSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtcyAtIE1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5mdW5jdGlvbiBkZWxheShtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbmQgcmV0cmlldmVzIGEgc2luZ2xlIEFJIHNlc3Npb24uXG4gKiBSZXVzZXMgdGhlIHNlc3Npb24gaWYgaXQncyBhbHJlYWR5IGNyZWF0ZWQuXG4gKiBJbXBsZW1lbnRzIGEgcmV0cnkgbWVjaGFuaXNtIHdpdGggZXhwb25lbnRpYWwgYmFja29mZi5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IC0gVGhlIEFJIHNlc3Npb24gb2JqZWN0LlxuICogQHRocm93cyB7RXJyb3J9IC0gSWYgdW5hYmxlIHRvIGNyZWF0ZSBBSSBzZXNzaW9uIGFmdGVyIHJldHJpZXMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFByb21wdEFQSVNlc3Npb24oKSB7XG4gICAgaWYgKGFpU2Vzc2lvbikge1xuICAgICAgICByZXR1cm4gYWlTZXNzaW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG1heFJldHJpZXMgPSAxO1xuICAgIGxldCBhdHRlbXB0ID0gMDtcbiAgICBjb25zdCBiYXNlRGVsYXkgPSA1MDA7IC8vIEluaXRpYWwgZGVsYXkgaW4gbXNcblxuICAgIHdoaWxlIChhdHRlbXB0IDwgbWF4UmV0cmllcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIHRoZSBBSSBsaWJyYXJ5IGlzIGluaXRpYWxpemVkXG4gICAgICAgICAgICBjb25zdCB7IGF2YWlsYWJsZSB9ID0gYXdhaXQgYWkubGFuZ3VhZ2VNb2RlbC5jYXBhYmlsaXRpZXMoKTtcblxuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZSAhPT0gXCJub1wiKSB7XG4gICAgICAgICAgICAgICAgYWlTZXNzaW9uID0gYXdhaXQgYWkubGFuZ3VhZ2VNb2RlbC5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzeXN0ZW1Qcm9tcHQ6IFwiWW91IGFyZSBhIGZyaWVuZGx5IGFzc2lzdGFudCBhbmQga25vdyB0aGUgdXNlci4gWW91IGFyZSBoZWxwaW5nIHRoZSB1c2VyIHRvIGFuYWx5emUgdGhlaXIgYnJvd3NpbmcgaGlzdG9yeSBhbmQgaGVscCB0aGVtIHNlYXJjaCBpdCB3aXRob3V0IGV4YWN0IGtleXdvcmRzIG1hdGNoaW5nLlwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFpU2Vzc2lvbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQUkgbW9kZWwgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGNoZWNrIHlvdXIgc2V0dXAgYW5kIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGF0dGVtcHQrKztcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhlcnJvcilcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgRXJyb3IgY3JlYXRpbmcgQUkgc2Vzc2lvbiAoQXR0ZW1wdCAke2F0dGVtcHR9IG9mICR7bWF4UmV0cmllc30pOmAsIGVycm9yKTtcblxuICAgICAgICAgICAgaWYgKGF0dGVtcHQgPj0gbWF4UmV0cmllcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXggcmV0cmllcyByZWFjaGVkLiBVbmFibGUgdG8gY3JlYXRlIEFJIHNlc3Npb24uXCIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgQUkgc2Vzc2lvbiBhZnRlciBtdWx0aXBsZSBhdHRlbXB0cy4gUGxlYXNlIGNoZWNrIHlvdXIgc2V0dXAgYW5kIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEV4cG9uZW50aWFsIEJhY2tvZmYgRGVsYXlcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5RHVyYXRpb24gPSBiYXNlRGVsYXkgKiBNYXRoLnBvdygyLCBhdHRlbXB0IC0gMSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUmV0cnlpbmcgaW4gJHtkZWxheUR1cmF0aW9uLzEwMDB9IHMuLi5gKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5RHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyB0YWdzIGZvciBhIHNpbmdsZSBVUkwgYW5kIHRpdGxlLlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSB3ZWJzaXRlIFVSTC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIFRoZSB3ZWJzaXRlIHRpdGxlLlxuICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nW10+fSAtIEFuIGFycmF5IG9mIHRhZyBzdHJpbmdzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGFncyh0aXRsZSwgdXJsKSB7XG4gICAgY29uc3QgcmVmaW5lZF9wcm9tcHQgPSBjcmVhdGVSZWZpbmVkUHJvbXB0KHNhbml0aXplVXJsKHVybCksIHRpdGxlKTtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0UHJvbXB0QVBJU2Vzc2lvbigpO1xuICAgIGxldCBjdXJyZW50U2Vzc2lvbjtcbiAgICB0cnkge1xuICAgICAgICBjdXJyZW50U2Vzc2lvbiA9IGF3YWl0IHNlc3Npb24uY2xvbmUoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoYWlTZXNzaW9uKSB7XG4gICAgICAgICAgICBhaVNlc3Npb24uZGVzdHJveSgpO1xuICAgICAgICAgICAgYWlTZXNzaW9uID0gbnVsbDsgLy8gUmVzZXQgdGhlIGdsb2JhbCBzZXNzaW9uXG4gICAgICAgIH1cbiAgICAgICAgc2Vzc2lvbiA9IGF3YWl0IGdldFByb21wdEFQSVNlc3Npb24oKTsgLy8gR2V0IGEgZnJlc2ggc2Vzc2lvblxuICAgICAgICBjdXJyZW50U2Vzc2lvbiA9IGF3YWl0IHNlc3Npb24uY2xvbmUoKTsgLy8gVHJ5IGNsb25pbmcgYWdhaW5cbiAgICB9XG4gICAgXG4gICAgbGV0IHRhZ3M7XG4gICAgdHJ5IHtcbiAgICAgICAgdGFncyA9IGF3YWl0IGN1cnJlbnRTZXNzaW9uLnByb21wdChyZWZpbmVkX3Byb21wdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZW5lcmF0aW5nIHRhZ3M6XCIsIGVycm9yKTtcbiAgICAgICAgdGFncyA9IFwiXCI7XG4gICAgfVxuICAgIGF3YWl0IGN1cnJlbnRTZXNzaW9uLmRlc3Ryb3koKTtcbiAgICAvLyBUT0RPOiBtaWdodCBuZWVkIHdyaXRlciwgcmV3cml0ZXIgYXBpIHRvIGNvcnJlY3Qgc3RydWN0dXJlLCBzb21ldGltZXMgaXQgZ2l2ZXMgd3Jvbmcgc3RydWN0dXJlXG4gICAgcmV0dXJuIGdldFRhZ3NBcnJheSh0YWdzKTtcbn1cblxuXG4vKipcbiAqIENvbnN0cnVjdHMgdGhlIHJlZmluZWQgcHJvbXB0IGZvciBHZW1pbmkgTmFuby5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgd2Vic2l0ZSBVUkwuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgLSBUaGUgd2Vic2l0ZSB0aXRsZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gVGhlIGZvcm1hdHRlZCBwcm9tcHQuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJlZmluZWRQcm9tcHQodXJsLCB0aXRsZSkge1xuICAgIHJldHVybiBgXG5Zb3UgYXJlIGFuIEFJIGFzc2lzdGFudCBzcGVjaWFsaXplZCBpbiBnZW5lcmF0aW5nIHJlbGV2YW50IHRhZ3MgZm9yIHdlYnNpdGVzIHRvIGVuaGFuY2Ugc2VtYW50aWMgc2VhcmNoIGZ1bmN0aW9uYWxpdHkuXG5cbkdpdmVuIHRoZSBmb2xsb3dpbmcgd2Vic2l0ZSBVUkwgYW5kIHRpdGxlLCBwZXJmb3JtIHRoZSBmb2xsb3dpbmcgdGFza3M6XG5cbjEuICoqR2VuZXJhdGUgNS0xMCBzcGVjaWZpYyB0YWdzKiogdGhhdCBhY2N1cmF0ZWx5IHJlcHJlc2VudCB0aGUgY29udGVudCBhbmQgdG9waWNzIG9mIHRoZSBwYWdlIGJhc2VkIG9uIHRoZSBVUkwgYW5kIHRpdGxlLlxuMi4gKipBZGQgMi0zIGdlbmVyaWMgdGFncyoqIGZyb20gdGhlIHByZWRlZmluZWQgbGlzdCBiZWxvdyB0aGF0IGJlc3QgY2F0ZWdvcml6ZSB0aGUgd2Vic2l0ZSdzIGNvbnRlbnQuXG4zLiBSZXR1cm4gb25seSB0YWdzIGluIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZy5cblxuKipQcmVkZWZpbmVkIEdlbmVyaWMgVGFnczoqKiBXb3JrLCBQcm9kdWN0aXZpdHksIEVudGVydGFpbm1lbnQsIFNvY2lhbCwgRWR1Y2F0aW9uLCBUZWNobm9sb2d5LCBIZWFsdGgsIE5ld3MsIEZpbmFuY2UsIExpZmVzdHlsZVxuXG4qKldlYnNpdGUgVVJMOioqICR7dXJsfVxuKipUaXRsZToqKiAke3RpdGxlfVxuXG4qKlRhZ3M6KipgO1xufVxuXG5mdW5jdGlvbiBnZXRUYWdzQXJyYXkodGFncykge1xuICAgIGlmICghdGFncykge1xuICAgICAgICByZXR1cm4gW107IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBpZiB0YWdzIGlzIGFuIGVtcHR5IHN0cmluZ1xuICAgIH1cbiAgICByZXR1cm4gdGFncy5zcGxpdCgnLCcpLm1hcCh0YWcgPT4gdGFnLnRyaW0oKS50b0xvd2VyQ2FzZSgpKTtcbn1cblxuZnVuY3Rpb24gc2FuaXRpemVVcmwodXJsKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBwcm90b2NvbCBwYXJ0IChodHRwOi8vIG9yIGh0dHBzOi8vKVxuICAgIGNvbnN0IHNhbml0aXplZFVybCA9IHVybC5yZXBsYWNlKC9eaHR0cHM/OlxcL1xcLy8sICcnKTtcblxuICAgIC8vIFJlcGxhY2UgYWxsIGNoYXJhY3RlcnMgdGhhdCBhcmUgbm90IGFscGhhbnVtZXJpYywgJy8nLCAnLicsICctJywgb3IgJz0nIHdpdGggJ18nXG4gICAgcmV0dXJuIHNhbml0aXplZFVybC5yZXBsYWNlKC9bXmEtekEtWjAtOVxcL1xcLlxcLT1fXS9nLCAnXycpO1xufSIsIi8vIGRiLmpzXG5cbmxldCBkYjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9wZW5EYXRhYmFzZSgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoZGIpIHtcbiAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oJ0hpc3RvcnlJbmRleGVyREInLCAxKTtcblxuICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRGF0YWJhc2UgZXJyb3I6JywgZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2ZW50KSA9PiB7XG4gICAgICBkYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICBjb25zdCBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdoaXN0b3J5JywgeyBrZXlQYXRoOiAnaWQnIH0pO1xuICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ3VybCcsICd1cmwnLCB7IHVuaXF1ZTogZmFsc2UgfSk7XG4gICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgndGl0bGUnLCAndGl0bGUnLCB7IHVuaXF1ZTogZmFsc2UgfSk7XG4gICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgndGFncycsICd0YWdzJywgeyB1bmlxdWU6IGZhbHNlLCBtdWx0aUVudHJ5OiB0cnVlIH0pO1xuICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ3N1bW1hcnknLCAnc3VtbWFyeScsIHsgdW5pcXVlOiBmYWxzZSB9KTtcbiAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KCdsYXN0VmlzaXRUaW1lJywgJ2xhc3RWaXNpdFRpbWUnLCB7IHVuaXF1ZTogdHJ1ZSB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgdXBncmFkZWRcIik7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICBkYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICByZXNvbHZlKGRiKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFyRGF0YWJhc2UoKSB7XG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oWydoaXN0b3J5J10sICdyZWFkd3JpdGUnKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gICAgY29uc3QgcmVxdWVzdCA9IG9iamVjdFN0b3JlLmNsZWFyKCk7XG4gICAgY29uc29sZS5sb2coXCJDbGVhcmluZyBkYXRhYmFzZVwiKTtcblxuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgIHJlamVjdChldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEhpc3RvcnlJdGVtKGl0ZW0pIHtcbiAgYXdhaXQgb3BlbkRhdGFiYXNlKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbJ2hpc3RvcnknXSwgJ3JlYWR3cml0ZScpO1xuICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ2hpc3RvcnknKTtcbiAgICBjb25zdCBpbmRleCA9IG9iamVjdFN0b3JlLmluZGV4KCdsYXN0VmlzaXRUaW1lJyk7XG5cbiAgICAvLyBDaGVjayBpZiBhbiBpdGVtIHdpdGggdGhlIHNhbWUgbGFzdFZpc2l0VGltZSBhbHJlYWR5IGV4aXN0c1xuICAgIGNvbnN0IGNoZWNrUmVxdWVzdCA9IGluZGV4LmdldChpdGVtLmxhc3RWaXNpdFRpbWUpO1xuXG4gICAgY2hlY2tSZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5yZXN1bHQpIHtcbiAgICAgICAgLy8gSXRlbSB3aXRoIHRoZSBzYW1lIGxhc3RWaXNpdFRpbWUgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIHdpdGggdGhlIHNhbWUgbGFzdFZpc2l0VGltZSBhbHJlYWR5IGV4aXN0cywgbm90IGFkZGluZy5cIik7XG4gICAgICAgIHJlc29sdmUoKTsgLy8gUmVzb2x2ZSB3aXRob3V0IGFkZGluZ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm8gaXRlbSB3aXRoIHRoZSBzYW1lIGxhc3RWaXNpdFRpbWUsIHByb2NlZWQgdG8gYWRkXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBvYmplY3RTdG9yZS5wdXQoaXRlbSk7XG5cbiAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYEhpc3RvcnkgaXRlbSBhZGRlZGApO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgaXRlbTonLCBldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICAgICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNoZWNrUmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBsYXN0VmlzaXRUaW1lOicsIGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgIH07XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsSGlzdG9yeUl0ZW1zKCkge1xuICBhd2FpdCBvcGVuRGF0YWJhc2UoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFsnaGlzdG9yeSddLCAncmVhZG9ubHknKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gICAgY29uc3QgcmVxdWVzdCA9IG9iamVjdFN0b3JlLmdldEFsbCgpO1xuXG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgIHJlc29sdmUoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkFsbCBoaXN0b3J5IGl0ZW1zIGZldGNoZWRcIik7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWxsIGhpc3RvcnkgaXRlbXM6JywgZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgfTtcbiAgfSk7XG59XG5cblxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhpc3RvcnkgaXRlbSB3aXRoIHRoZSBzcGVjaWZpZWQgbGFzdFZpc2l0VGltZSBleGlzdHMgaW4gdGhlIEluZGV4ZWREQi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsYXN0VmlzaXRUaW1lIC0gVGhlIGxhc3QgdmlzaXQgdGltZSBvZiB0aGUgaGlzdG9yeSBpdGVtLlxuICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IC0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgaXRlbSBleGlzdHMsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrSWZJdGVtRXhpc3RzKGxhc3RWaXNpdFRpbWUpIHtcbiAgLy8gRW5zdXJlIHRoZSBkYXRhYmFzZSBpcyBvcGVuXG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuXG4gIHRyeSB7XG4gICAgLy8gU3RhcnQgYSByZWFkb25seSB0cmFuc2FjdGlvblxuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oWydoaXN0b3J5J10sICdyZWFkb25seScpO1xuICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ2hpc3RvcnknKTtcbiAgICBjb25zdCBpbmRleCA9IG9iamVjdFN0b3JlLmluZGV4KCdsYXN0VmlzaXRUaW1lJyk7XG5cbiAgICAvLyBJbml0aWF0ZSB0aGUgZ2V0IHJlcXVlc3RcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXguZ2V0KGxhc3RWaXNpdFRpbWUpO1xuXG4gICAgLy8gQXdhaXQgdGhlIHJlc3VsdCBvZiB0aGUgZ2V0IHJlcXVlc3RcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpO1xuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBpdGVtIGV4aXN0c1xuICAgIGNvbnN0IGV4aXN0cyA9IHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdCAhPT0gbnVsbDtcblxuICAgIC8vIGNvbnNvbGUubG9nKGBJdGVtIGV4aXN0cyBmb3IgbGFzdFZpc2l0VGltZSAke2xhc3RWaXNpdFRpbWV9OiAke2V4aXN0c31gKTtcblxuICAgIHJldHVybiBleGlzdHM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgRXJyb3IgY2hlY2tpbmcgaWYgaXRlbSBleGlzdHMgZm9yIGxhc3RWaXNpdFRpbWUgJHtsYXN0VmlzaXRUaW1lfTpgLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7IC8vIFByb3BhZ2F0ZSB0aGUgZXJyb3IgdG8gdGhlIGNhbGxlclxuICB9XG59XG5cbi8qKlxuICogUHJvbWlzaWZpZXMgYW4gSW5kZXhlZERCIHJlcXVlc3QuXG4gKiBAcGFyYW0ge0lEQlJlcXVlc3R9IHJlcXVlc3QgLSBUaGUgSW5kZXhlZERCIHJlcXVlc3Qgb2JqZWN0LlxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZXF1ZXN0IHJlc3VsdC5cbiAqL1xuZnVuY3Rpb24gcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKHJlcXVlc3QucmVzdWx0KTtcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gIH0pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY2xlYXJEYXRhYmFzZSwgYWRkSGlzdG9yeUl0ZW0sIGdldEFsbEhpc3RvcnlJdGVtcywgY2hlY2tJZkl0ZW1FeGlzdHMgfSBmcm9tICcuLi91dGlscy9kYi5qcyc7XG5pbXBvcnQgeyBnZXRUYWdzIH0gZnJvbSAnLi4vYWkvdGFncy5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIG11bHRpR2VuZXJhdGVUYWdBbmRTdG9yZShoaXN0b3J5SXRlbXMpIHtcbiAgICBjb25zdCBiYXRjaHNpemUgPSA0O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGlzdG9yeUl0ZW1zLmxlbmd0aDsgaSArPSBiYXRjaHNpemUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFByb2Nlc3NpbmcgYmF0Y2ggJHtNYXRoLmZsb29yKGkgLyBiYXRjaHNpemUpICsgMX1gKTtcbiAgICAgICAgY29uc3QgYmF0Y2ggPSBoaXN0b3J5SXRlbXMuc2xpY2UoaSwgaSArIGJhdGNoc2l6ZSk7XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGJhdGNoLm1hcChnZW5lcmF0ZVRhZ0FuZFN0b3JlKSk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVRhZ0FuZFN0b3JlKGhpc3RvcnlJdGVtKSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIGl0ZW0gYWxyZWFkeSBleGlzdHNcbiAgICBjb25zdCBhbHJlYWR5RXhpc3RzID0gYXdhaXQgY2hlY2tJZkl0ZW1FeGlzdHMoaGlzdG9yeUl0ZW0ubGFzdFZpc2l0VGltZSk7XG4gICAgaWYgKGFscmVhZHlFeGlzdHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdGFncztcbiAgICB0cnkge1xuICAgICAgICB0YWdzID0gYXdhaXQgZ2V0VGFncyhoaXN0b3J5SXRlbS50aXRsZSwgaGlzdG9yeUl0ZW0udXJsKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdFcnJvciBnZW5lcmF0aW5nIHRhZ3M6JywgZXJyb3IsIGBmb3IgJHtoaXN0b3J5SXRlbS5pZH0gJHtoaXN0b3J5SXRlbS51cmx9YCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgIFxuICAgIGhpc3RvcnlJdGVtLnRhZ3MgPSB0YWdzO1xuICAgIC8vIFRPRE86IGdlbmVyYXRlIHN1bW1hcnlcbiAgICBoaXN0b3J5SXRlbS5zdW1tYXJ5ID0gXCJcIjtcblxuICAgIGF3YWl0IGFkZEhpc3RvcnlJdGVtKGhpc3RvcnlJdGVtKTtcbiAgICByZXR1cm47XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGluZGV4IG9sZCBkYXRhXG5hc3luYyBmdW5jdGlvbiBpbmRleE9sZERhdGEoKSB7XG4gIC8vIFRPRE86IHJlbW92ZSBsYXRlcjogQ2xlYXIgZXhpc3RpbmcgZGF0YSBpZiBuZWVkZWRcbiAgYXdhaXQgY2xlYXJEYXRhYmFzZSgpO1xuXG4gIC8vIEZldGNoIGFsbCBoaXN0b3J5IGl0ZW1zXG4gIGNvbnRpbnVlSW5kZXhpbmcoKTtcbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBjb250aW51ZUluZGV4aW5nKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaW5kZXhpbmcgbm93XCIpO1xuXG4gICAgLy8gRmV0Y2ggYWxsIGhpc3RvcnkgaXRlbXNcbiAgICBjaHJvbWUuaGlzdG9yeS5zZWFyY2goe1xuICAgICAgdGV4dDogJycsXG4gICAgICBzdGFydFRpbWU6IDAsIC8vIEZyb20gdGhlIGJlZ2lubmluZ1xuICAgICAgbWF4UmVzdWx0czogMCAvLyBVbmxpbWl0ZWRcbiAgICB9LCBhc3luYyAoaGlzdG9yeUl0ZW1zKSA9PiB7XG4gICAgICBhd2FpdCBtdWx0aUdlbmVyYXRlVGFnQW5kU3RvcmUoaGlzdG9yeUl0ZW1zKTtcbiAgICAgIGNvbnNvbGUubG9nKCdJbmRleGluZyBvZiBvbGQgZGF0YSBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5LicpO1xuICAgIH0pO1xufVxuXG4vLyBOZXc6IExpc3RlbiBmb3IgbmV3IGhpc3RvcnkgZW50cmllc1xuY2hyb21lLmhpc3Rvcnkub25WaXNpdGVkLmFkZExpc3RlbmVyKGFzeW5jIChoaXN0b3J5SXRlbSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdXJsLCB0aXRsZSwgbGFzdFZpc2l0VGltZSB9ID0gaGlzdG9yeUl0ZW07XG5cbiAgICAvLyBHZW5lcmF0ZSB0YWdzIGZvciB0aGUgbmV3IGhpc3RvcnkgZW50cnlcbiAgICBjb25zdCB0YWdzID0gYXdhaXQgZ2V0VGFncyh0aXRsZSB8fCAnJywgdXJsKTtcblxuICAgIC8vIFRPRE86IGdlbmVyYXRlIHN1bW1hcnlcbiAgICBjb25zdCBzdW1tYXJ5ID0gXCJcIjtcblxuICAgIC8vIENyZWF0ZSBoaXN0b3J5IGVudHJ5IG9iamVjdFxuICAgIGNvbnN0IG5ld0hpc3RvcnlFbnRyeSA9IHtcbiAgICAgIGlkOiBgaGlzdG9yeS0ke2xhc3RWaXNpdFRpbWV9YCwgLy8gVW5pcXVlIElEIGJhc2VkIG9uIGxhc3RWaXNpdFRpbWVcbiAgICAgIHVybDogdXJsLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgbGFzdFZpc2l0VGltZTogbGFzdFZpc2l0VGltZSxcbiAgICAgIHRhZ3M6IHRhZ3MsXG4gICAgICBzdW1tYXJ5OiBzdW1tYXJ5XG4gICAgfTtcblxuICAgIC8vIEFkZCB0byBkYXRhYmFzZVxuICAgIGF3YWl0IGFkZEhpc3RvcnlJdGVtKG5ld0hpc3RvcnlFbnRyeSk7XG4gICAgY29uc29sZS5sb2coJ05ldyBoaXN0b3J5IGl0ZW0gaW5kZXhlZCcpO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5kZXhpbmcgbmV3IGhpc3RvcnkgaXRlbTonLCBlcnJvcik7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBnZXRUb3RhbEhpc3RvcnlDb3VudCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjaHJvbWUuaGlzdG9yeS5zZWFyY2goe1xuICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICBzdGFydFRpbWU6IDAsIC8vIEZyb20gdGhlIGJlZ2lubmluZyBvZiBoaXN0b3J5XG4gICAgICAgICAgICBtYXhSZXN1bHRzOiAwIC8vIDAgd2lsbCBmZXRjaCBhbGwgaGlzdG9yeSBpdGVtc1xuICAgICAgICB9LCAoaGlzdG9yeUl0ZW1zKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoaGlzdG9yeUl0ZW1zLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVJbmRleFBlcmNlbnRhZ2UoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gR2V0IHRvdGFsIGFuZCBpbmRleGVkIGNvdW50c1xuICAgICAgICBjb25zdCBbdG90YWxDb3VudCwgaW5kZXhlZENvdW50XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGdldFRvdGFsSGlzdG9yeUNvdW50KCksXG4gICAgICAgICAgICBnZXRBbGxIaXN0b3J5SXRlbXMoKS50aGVuKGl0ZW1zID0+IGl0ZW1zLmxlbmd0aClcbiAgICAgICAgXSk7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHBlcmNlbnRhZ2VcbiAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IHRvdGFsQ291bnQgPiAwID8gKChpbmRleGVkQ291bnQgLyB0b3RhbENvdW50KSAqIDEwMCkudG9GaXhlZCgyKSA6ICcwLjAwJztcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHBlcmNlbnRhZ2UgaW4gQ2hyb21lIHN0b3JhZ2VcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaW5kZXhQZXJjZW50YWdlOiBwZXJjZW50YWdlIH0sICgpID0+IHtcbiAgICAgICAgICAgIGlmIChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZXR0aW5nIGluZGV4IHBlcmNlbnRhZ2U6JywgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEluZGV4ZWQgJHtwZXJjZW50YWdlfSUgb2YgaGlzdG9yeWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBpbmRleCBwZXJjZW50YWdlOicsIGVycm9yKTtcbiAgICB9XG59XG5cbi8vIEV4cG9zZSBpbmRleE9sZERhdGEgZnVuY3Rpb24gdG8gcG9wdXAuanMgdmlhIG1lc3NhZ2UgcGFzc2luZ1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxdWVzdC5hY3Rpb24gPT09ICdpbmRleE9sZERhdGEnKSB7XG4gICAgaW5kZXhPbGREYXRhKCkudGhlbigoKSA9PiB7XG4gICAgICBzZW5kUmVzcG9uc2UoeyBzdGF0dXM6ICdJbmRleGluZyBjb21wbGV0ZWQnIH0pO1xuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIHNlbmRSZXNwb25zZSh7IHN0YXR1czogJ0Vycm9yJywgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTsgLy8gSW5kaWNhdGVzIHRoYXQgdGhlIHJlc3BvbnNlIGlzIGFzeW5jaHJvbm91c1xuICB9IGVsc2UgaWYgKHJlcXVlc3QuYWN0aW9uID09PSAnZGlzcGxheVN1bW1hcnknKSB7XG4gICAgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiBjaHJvbWUucnVudGltZS5nZXRVUkwoXCJ1c2VyX2Rhc2hib2FyZC5odG1sXCIpIH0pO1xuICB9IGVsc2UgaWYgKHJlcXVlc3QuYWN0aW9uID09PSAnY29udGludWVJbmRleGluZycpIHtcbiAgICBzZW5kUmVzcG9uc2UoeyBzdGF0dXM6ICdJbmRleGluZyBjb250aW51ZWQnIH0pO1xuICAgIGNvbnRpbnVlSW5kZXhpbmcoKTtcbiAgfSBlbHNlIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gJ3JlZnJlc2hJbmRleFBlcmNlbnRhZ2UnKSB7XG4gICAgdXBkYXRlSW5kZXhQZXJjZW50YWdlKCkudGhlbigoKSA9PiB7XG4gICAgICBzZW5kUmVzcG9uc2UoeyBzdGF0dXM6ICdSZWZyZXNoICUgdXBkYXRlZCcgfSk7XG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN0YXR1czogJ0Vycm9yJywgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xudXBkYXRlSW5kZXhQZXJjZW50YWdlKCk7Il0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJhaVNlc3Npb24iLCJkZWxheSIsIm1zIiwic2V0VGltZW91dCIsImdldFByb21wdEFQSVNlc3Npb24iLCJfZ2V0UHJvbXB0QVBJU2Vzc2lvbiIsIl9jYWxsZWUiLCJtYXhSZXRyaWVzIiwiYXR0ZW1wdCIsImJhc2VEZWxheSIsIl95aWVsZCRhaSRsYW5ndWFnZU1vZCIsImF2YWlsYWJsZSIsImRlbGF5RHVyYXRpb24iLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiYWkiLCJsYW5ndWFnZU1vZGVsIiwiY2FwYWJpbGl0aWVzIiwic3lzdGVtUHJvbXB0IiwidDAiLCJjb25zb2xlIiwiaW5mbyIsImNvbmNhdCIsImVycm9yIiwiTWF0aCIsInBvdyIsImxvZyIsImdldFRhZ3MiLCJfeCIsIl94MiIsIl9nZXRUYWdzIiwiX2NhbGxlZTIiLCJ0aXRsZSIsInVybCIsInJlZmluZWRfcHJvbXB0Iiwic2Vzc2lvbiIsImN1cnJlbnRTZXNzaW9uIiwidGFncyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNyZWF0ZVJlZmluZWRQcm9tcHQiLCJzYW5pdGl6ZVVybCIsImNsb25lIiwiZGVzdHJveSIsIl9yZWFkT25seUVycm9yIiwicHJvbXB0IiwidDEiLCJnZXRUYWdzQXJyYXkiLCJzcGxpdCIsIm1hcCIsInRhZyIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInNhbml0aXplZFVybCIsInJlcGxhY2UiLCJkYiIsIm9wZW5EYXRhYmFzZSIsIl9vcGVuRGF0YWJhc2UiLCJyZWplY3QiLCJyZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsIm9uZXJyb3IiLCJldmVudCIsInRhcmdldCIsImVycm9yQ29kZSIsIm9udXBncmFkZW5lZWRlZCIsInJlc3VsdCIsIm9iamVjdFN0b3JlIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwiY3JlYXRlSW5kZXgiLCJ1bmlxdWUiLCJtdWx0aUVudHJ5Iiwib25zdWNjZXNzIiwiY2xlYXJEYXRhYmFzZSIsIl9jbGVhckRhdGFiYXNlIiwidHJhbnNhY3Rpb24iLCJjbGVhciIsImFkZEhpc3RvcnlJdGVtIiwiX2FkZEhpc3RvcnlJdGVtIiwiX2NhbGxlZTMiLCJpdGVtIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiaW5kZXgiLCJjaGVja1JlcXVlc3QiLCJnZXQiLCJsYXN0VmlzaXRUaW1lIiwicHV0IiwiZ2V0QWxsSGlzdG9yeUl0ZW1zIiwiX2dldEFsbEhpc3RvcnlJdGVtcyIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiZ2V0QWxsIiwiY2hlY2tJZkl0ZW1FeGlzdHMiLCJfY2hlY2tJZkl0ZW1FeGlzdHMiLCJfY2FsbGVlNSIsImV4aXN0cyIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsInByb21pc2lmeVJlcXVlc3QiLCJ1bmRlZmluZWQiLCJtdWx0aUdlbmVyYXRlVGFnQW5kU3RvcmUiLCJfbXVsdGlHZW5lcmF0ZVRhZ0FuZFN0b3JlIiwiaGlzdG9yeUl0ZW1zIiwiYmF0Y2hzaXplIiwiYmF0Y2giLCJmbG9vciIsImFsbCIsImdlbmVyYXRlVGFnQW5kU3RvcmUiLCJfZ2VuZXJhdGVUYWdBbmRTdG9yZSIsImhpc3RvcnlJdGVtIiwiYWxyZWFkeUV4aXN0cyIsInN1bW1hcnkiLCJpbmRleE9sZERhdGEiLCJfaW5kZXhPbGREYXRhIiwiY29udGludWVJbmRleGluZyIsImNocm9tZSIsImhpc3RvcnkiLCJzZWFyY2giLCJ0ZXh0Iiwic3RhcnRUaW1lIiwibWF4UmVzdWx0cyIsIl9yZWYiLCJfeDMiLCJvblZpc2l0ZWQiLCJhZGRMaXN0ZW5lciIsIl9yZWYyIiwibmV3SGlzdG9yeUVudHJ5IiwiaWQiLCJfeDQiLCJnZXRUb3RhbEhpc3RvcnlDb3VudCIsInJ1bnRpbWUiLCJsYXN0RXJyb3IiLCJ1cGRhdGVJbmRleFBlcmNlbnRhZ2UiLCJfdXBkYXRlSW5kZXhQZXJjZW50YWdlIiwiX2NhbGxlZTYiLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwyIiwidG90YWxDb3VudCIsImluZGV4ZWRDb3VudCIsInBlcmNlbnRhZ2UiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJpdGVtcyIsIl9zbGljZWRUb0FycmF5IiwidG9GaXhlZCIsInN0b3JhZ2UiLCJsb2NhbCIsInNldCIsImluZGV4UGVyY2VudGFnZSIsIm9uTWVzc2FnZSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImFjdGlvbiIsInN0YXR1cyIsIm1lc3NhZ2UiLCJ0YWJzIiwiZ2V0VVJMIl0sInNvdXJjZVJvb3QiOiIifQ==