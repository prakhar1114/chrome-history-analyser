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
/* harmony import */ var _user_dashboard_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user_dashboard/utils.js */ "./src/user_dashboard/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

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
          refined_prompt = createRefinedPrompt(sanitizeUrl(url), (0,_user_dashboard_utils_js__WEBPACK_IMPORTED_MODULE_0__.cleanInput)(title));
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
          // TODO: generate summary/ writer API
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxPQUFPLENBQUNzRyxNQUFNLEtBQUssd0JBQXdCLEVBQUU7SUFDdERqQixxQkFBcUIsQ0FBQyxDQUFDLENBQUNyTixJQUFJLENBQUMsWUFBTTtNQUNqQ3FPLFlBQVksQ0FBQztRQUFFRSxNQUFNLEVBQUU7TUFBb0IsQ0FBQyxDQUFDO0lBQzdDLENBQUMsQ0FBQyxTQUFNLENBQUMsVUFBQXZKLEtBQUssRUFBSTtNQUNoQnFKLFlBQVksQ0FBQztRQUFFRSxNQUFNLEVBQUUsT0FBTztRQUFFQyxPQUFPLEVBQUV4SixLQUFLLENBQUN3SjtNQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDLENBQUM7SUFDRixPQUFPLElBQUk7RUFDZjtBQUNGLENBQUMsQ0FBQztBQUNGbkIscUJBQXFCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvYWkvdGFncy5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci8uL3NyYy91c2VyX2Rhc2hib2FyZC91dGlscy5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci8uL3NyYy91dGlscy9kYi5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL2JhY2tncm91bmQvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGVhbklucHV0IH0gZnJvbSAnLi4vdXNlcl9kYXNoYm9hcmQvdXRpbHMuanMnO1xubGV0IGFpU2Vzc2lvbiA9IG51bGw7XG5cbi8qKlxuICogRGVsYXlzIGV4ZWN1dGlvbiBmb3IgYSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtcyAtIE1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5mdW5jdGlvbiBkZWxheShtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbmQgcmV0cmlldmVzIGEgc2luZ2xlIEFJIHNlc3Npb24uXG4gKiBSZXVzZXMgdGhlIHNlc3Npb24gaWYgaXQncyBhbHJlYWR5IGNyZWF0ZWQuXG4gKiBJbXBsZW1lbnRzIGEgcmV0cnkgbWVjaGFuaXNtIHdpdGggZXhwb25lbnRpYWwgYmFja29mZi5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IC0gVGhlIEFJIHNlc3Npb24gb2JqZWN0LlxuICogQHRocm93cyB7RXJyb3J9IC0gSWYgdW5hYmxlIHRvIGNyZWF0ZSBBSSBzZXNzaW9uIGFmdGVyIHJldHJpZXMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFByb21wdEFQSVNlc3Npb24oKSB7XG4gICAgaWYgKGFpU2Vzc2lvbikge1xuICAgICAgICByZXR1cm4gYWlTZXNzaW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG1heFJldHJpZXMgPSAxO1xuICAgIGxldCBhdHRlbXB0ID0gMDtcbiAgICBjb25zdCBiYXNlRGVsYXkgPSA1MDA7IC8vIEluaXRpYWwgZGVsYXkgaW4gbXNcblxuICAgIHdoaWxlIChhdHRlbXB0IDwgbWF4UmV0cmllcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIHRoZSBBSSBsaWJyYXJ5IGlzIGluaXRpYWxpemVkXG4gICAgICAgICAgICBjb25zdCB7IGF2YWlsYWJsZSB9ID0gYXdhaXQgYWkubGFuZ3VhZ2VNb2RlbC5jYXBhYmlsaXRpZXMoKTtcblxuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZSAhPT0gXCJub1wiKSB7XG4gICAgICAgICAgICAgICAgYWlTZXNzaW9uID0gYXdhaXQgYWkubGFuZ3VhZ2VNb2RlbC5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzeXN0ZW1Qcm9tcHQ6IFwiWW91IGFyZSBhIGZyaWVuZGx5IGFzc2lzdGFudCBhbmQga25vdyB0aGUgdXNlci4gWW91IGFyZSBoZWxwaW5nIHRoZSB1c2VyIHRvIGFuYWx5emUgdGhlaXIgYnJvd3NpbmcgaGlzdG9yeSBhbmQgaGVscCB0aGVtIHNlYXJjaCBpdCB3aXRob3V0IGV4YWN0IGtleXdvcmRzIG1hdGNoaW5nLlwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFpU2Vzc2lvbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQUkgbW9kZWwgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGNoZWNrIHlvdXIgc2V0dXAgYW5kIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGF0dGVtcHQrKztcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhlcnJvcilcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgRXJyb3IgY3JlYXRpbmcgQUkgc2Vzc2lvbiAoQXR0ZW1wdCAke2F0dGVtcHR9IG9mICR7bWF4UmV0cmllc30pOmAsIGVycm9yKTtcblxuICAgICAgICAgICAgaWYgKGF0dGVtcHQgPj0gbWF4UmV0cmllcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXggcmV0cmllcyByZWFjaGVkLiBVbmFibGUgdG8gY3JlYXRlIEFJIHNlc3Npb24uXCIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgQUkgc2Vzc2lvbiBhZnRlciBtdWx0aXBsZSBhdHRlbXB0cy4gUGxlYXNlIGNoZWNrIHlvdXIgc2V0dXAgYW5kIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEV4cG9uZW50aWFsIEJhY2tvZmYgRGVsYXlcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5RHVyYXRpb24gPSBiYXNlRGVsYXkgKiBNYXRoLnBvdygyLCBhdHRlbXB0IC0gMSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUmV0cnlpbmcgaW4gJHtkZWxheUR1cmF0aW9uLzEwMDB9IHMuLi5gKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5RHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyB0YWdzIGZvciBhIHNpbmdsZSBVUkwgYW5kIHRpdGxlLlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSB3ZWJzaXRlIFVSTC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIFRoZSB3ZWJzaXRlIHRpdGxlLlxuICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nW10+fSAtIEFuIGFycmF5IG9mIHRhZyBzdHJpbmdzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGFncyh0aXRsZSwgdXJsKSB7XG4gICAgY29uc3QgcmVmaW5lZF9wcm9tcHQgPSBjcmVhdGVSZWZpbmVkUHJvbXB0KHNhbml0aXplVXJsKHVybCksIGNsZWFuSW5wdXQodGl0bGUpKTtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0UHJvbXB0QVBJU2Vzc2lvbigpO1xuICAgIGxldCBjdXJyZW50U2Vzc2lvbjtcbiAgICB0cnkge1xuICAgICAgICBjdXJyZW50U2Vzc2lvbiA9IGF3YWl0IHNlc3Npb24uY2xvbmUoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoYWlTZXNzaW9uKSB7XG4gICAgICAgICAgICBhaVNlc3Npb24uZGVzdHJveSgpO1xuICAgICAgICAgICAgYWlTZXNzaW9uID0gbnVsbDsgLy8gUmVzZXQgdGhlIGdsb2JhbCBzZXNzaW9uXG4gICAgICAgIH1cbiAgICAgICAgc2Vzc2lvbiA9IGF3YWl0IGdldFByb21wdEFQSVNlc3Npb24oKTsgLy8gR2V0IGEgZnJlc2ggc2Vzc2lvblxuICAgICAgICBjdXJyZW50U2Vzc2lvbiA9IGF3YWl0IHNlc3Npb24uY2xvbmUoKTsgLy8gVHJ5IGNsb25pbmcgYWdhaW5cbiAgICB9XG4gICAgXG4gICAgbGV0IHRhZ3M7XG4gICAgdHJ5IHtcbiAgICAgICAgdGFncyA9IGF3YWl0IGN1cnJlbnRTZXNzaW9uLnByb21wdChyZWZpbmVkX3Byb21wdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZW5lcmF0aW5nIHRhZ3M6XCIsIGVycm9yKTtcbiAgICAgICAgdGFncyA9IFwiXCI7XG4gICAgfVxuICAgIGF3YWl0IGN1cnJlbnRTZXNzaW9uLmRlc3Ryb3koKTtcbiAgICAvLyBUT0RPOiBtaWdodCBuZWVkIHdyaXRlciwgcmV3cml0ZXIgYXBpIHRvIGNvcnJlY3Qgc3RydWN0dXJlLCBzb21ldGltZXMgaXQgZ2l2ZXMgd3Jvbmcgc3RydWN0dXJlXG4gICAgcmV0dXJuIGdldFRhZ3NBcnJheSh0YWdzKTtcbn1cblxuXG4vKipcbiAqIENvbnN0cnVjdHMgdGhlIHJlZmluZWQgcHJvbXB0IGZvciBHZW1pbmkgTmFuby5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgd2Vic2l0ZSBVUkwuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgLSBUaGUgd2Vic2l0ZSB0aXRsZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gVGhlIGZvcm1hdHRlZCBwcm9tcHQuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJlZmluZWRQcm9tcHQodXJsLCB0aXRsZSkge1xuICAgIHJldHVybiBgXG5Zb3UgYXJlIGFuIEFJIGFzc2lzdGFudCBzcGVjaWFsaXplZCBpbiBnZW5lcmF0aW5nIHJlbGV2YW50IHRhZ3MgZm9yIHdlYnNpdGVzIHRvIGVuaGFuY2Ugc2VtYW50aWMgc2VhcmNoIGZ1bmN0aW9uYWxpdHkuXG5cbkdpdmVuIHRoZSBmb2xsb3dpbmcgd2Vic2l0ZSBVUkwgYW5kIHRpdGxlLCBwZXJmb3JtIHRoZSBmb2xsb3dpbmcgdGFza3M6XG5cbjEuICoqR2VuZXJhdGUgNS0xMCBzcGVjaWZpYyB0YWdzKiogdGhhdCBhY2N1cmF0ZWx5IHJlcHJlc2VudCB0aGUgY29udGVudCBhbmQgdG9waWNzIG9mIHRoZSBwYWdlIGJhc2VkIG9uIHRoZSBVUkwgYW5kIHRpdGxlLlxuMi4gKipBZGQgMi0zIGdlbmVyaWMgdGFncyoqIGZyb20gdGhlIHByZWRlZmluZWQgbGlzdCBiZWxvdyB0aGF0IGJlc3QgY2F0ZWdvcml6ZSB0aGUgd2Vic2l0ZSdzIGNvbnRlbnQuXG4zLiBSZXR1cm4gb25seSB0YWdzIGluIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZy5cblxuKipQcmVkZWZpbmVkIEdlbmVyaWMgVGFnczoqKiBXb3JrLCBQcm9kdWN0aXZpdHksIEVudGVydGFpbm1lbnQsIFNvY2lhbCwgRWR1Y2F0aW9uLCBUZWNobm9sb2d5LCBIZWFsdGgsIE5ld3MsIEZpbmFuY2UsIExpZmVzdHlsZVxuXG4qKldlYnNpdGUgVVJMOioqICR7dXJsfVxuKipUaXRsZToqKiAke3RpdGxlfVxuXG4qKlRhZ3M6KipgO1xufVxuXG5mdW5jdGlvbiBnZXRUYWdzQXJyYXkodGFncykge1xuICAgIGlmICghdGFncykge1xuICAgICAgICByZXR1cm4gW107IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBpZiB0YWdzIGlzIGFuIGVtcHR5IHN0cmluZ1xuICAgIH1cbiAgICByZXR1cm4gdGFncy5zcGxpdCgnLCcpLm1hcCh0YWcgPT4gdGFnLnRyaW0oKS50b0xvd2VyQ2FzZSgpKTtcbn1cblxuZnVuY3Rpb24gc2FuaXRpemVVcmwodXJsKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBwcm90b2NvbCBwYXJ0IChodHRwOi8vIG9yIGh0dHBzOi8vKVxuICAgIGNvbnN0IHNhbml0aXplZFVybCA9IHVybC5yZXBsYWNlKC9eaHR0cHM/OlxcL1xcLy8sICcnKTtcblxuICAgIC8vIFJlcGxhY2UgYWxsIGNoYXJhY3RlcnMgdGhhdCBhcmUgbm90IGFscGhhbnVtZXJpYywgJy8nLCAnLicsICctJywgb3IgJz0nIHdpdGggJ18nXG4gICAgcmV0dXJuIHNhbml0aXplZFVybC5yZXBsYWNlKC9bXmEtekEtWjAtOVxcL1xcLlxcLT1fXS9nLCAnXycpO1xufSIsIi8vIHdyaXRlIGEgZnVuY3Rpb24gdG8gZXh0cmFjdCBkb21haW4gbmFtZSBmcm9tIGEgdXJsXG5mdW5jdGlvbiBleHRyYWN0RG9tYWluKHVybCkge1xuICAgIHJldHVybiBuZXcgVVJMKHVybCkuaG9zdG5hbWU7XG4gIH1cbiAgXG4gIFxuICBmdW5jdGlvbiBtYXJrZG93blRvSHRtbChtYXJrZG93blRleHQpIHtcbiAgICAvLyBDb252ZXJ0IGJvbGQgdGV4dDogKip0ZXh0KipcbiAgICBsZXQgaHRtbCA9IG1hcmtkb3duVGV4dC5yZXBsYWNlKC9cXCpcXCooLis/KVxcKlxcKi9nLCAnPHN0cm9uZz4kMTwvc3Ryb25nPicpO1xuICAgIFxuICAgIC8vIENvbnZlcnQgaXRhbGljIHRleHQ6ICp0ZXh0KlxuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcKiguKz8pXFwqL2csICc8ZW0+JDE8L2VtPicpO1xuICAgIFxuICAgIC8vIENvbnZlcnQgYnVsbGV0IHBvaW50czogKiBpdGVtXG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXlxcKiAoLispJC9nbSwgJzxsaT4kMTwvbGk+Jyk7XG4gICAgXG4gICAgLy8gV3JhcCBsaXN0IGl0ZW1zIGluIDx1bD4gdGFnc1xuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoLyg8bGk+Lio8XFwvbGk+KS9nLCAnPHVsPiQxPC91bD4nKTtcbiAgXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuXG4vKipcbiAqIENsZWFucyBhbmQgc2FuaXRpemVzIGlucHV0IHRleHQgZm9yIHNhZmUgcHJvY2Vzc2luZyB3aXRoIGxhbmd1YWdlIG1vZGVscy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRoZSBpbnB1dCB0ZXh0IHRvIGJlIHNhbml0aXplZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhMZW5ndGggLSBNYXhpbXVtIGFsbG93ZWQgbGVuZ3RoIGZvciB0aGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW5pdGl6ZWQgdGV4dC5cbiAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgc2FuaXRpemVkIHRleHQgZXhjZWVkcyB0aGUgbWF4aW11bSBsZW5ndGguXG4gKi9cbmZ1bmN0aW9uIGNsZWFuSW5wdXQodGV4dCwgbWF4TGVuZ3RoID0gNDAwMCkge1xuICAvLyAxLiBSZW1vdmUgQ29udHJvbCBDaGFyYWN0ZXJzXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1tcXHgwMC1cXHgxRlxceDdGXS9nLCAnJyk7XG5cbiAgLy8gMi4gTm9ybWFsaXplIFVuaWNvZGVcbiAgdGV4dCA9IHRleHQubm9ybWFsaXplKCdORkMnKTtcblxuICAvLyAzLiBSZW1vdmUgTWFsZm9ybWVkIFVuaWNvZGVcbiAgdHJ5IHtcbiAgICAgIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUodGV4dCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC/vv70vZywgJycpO1xuICB9XG5cbiAgLy8gNC4gRXNjYXBlIFNwZWNpYWwgU3ltYm9sc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9bXFxcXGB7fVxcW1xcXSgpPD47fCZdL2csICdcXFxcJCYnKTtcblxuICAvLyA1LiBMaW1pdCBSZXBldGl0aXZlIENoYXJhY3RlcnMgdG8gM1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oLilcXDF7Myx9L2csICckMSQxJDEnKTtcblxuICAvLyA2LiBXaGl0ZWxpc3QgQWxsb3dlZCBDaGFyYWN0ZXJzIChBbHBoYW51bWVyaWNzIGFuZCBjb21tb24gcHVuY3R1YXRpb24pXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1teYS16QS1aMC05IC4sIT8nLV0vZywgJycpO1xuXG4gIC8vIDcuIFRyaW0gRXhjZXNzaXZlIFdoaXRlc3BhY2VcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKTtcblxuICAvLyA4LiBWYWxpZGF0ZSBMZW5ndGhcbiAgaWYgKHRleHQubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElucHV0IGV4Y2VlZHMgbWF4aW11bSBhbGxvd2VkIGxlbmd0aCBvZiAke21heExlbmd0aH0gY2hhcmFjdGVycy5gKTtcbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5leHBvcnQgeyBleHRyYWN0RG9tYWluLCBtYXJrZG93blRvSHRtbCwgY2xlYW5JbnB1dCB9OyIsIi8vIGRiLmpzXG5cbmxldCBkYjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9wZW5EYXRhYmFzZSgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoZGIpIHtcbiAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oJ0hpc3RvcnlJbmRleGVyREInLCAxKTtcblxuICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRGF0YWJhc2UgZXJyb3I6JywgZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2ZW50KSA9PiB7XG4gICAgICBkYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICBjb25zdCBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdoaXN0b3J5JywgeyBrZXlQYXRoOiAnaWQnIH0pO1xuICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ3VybCcsICd1cmwnLCB7IHVuaXF1ZTogZmFsc2UgfSk7XG4gICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgndGl0bGUnLCAndGl0bGUnLCB7IHVuaXF1ZTogZmFsc2UgfSk7XG4gICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgndGFncycsICd0YWdzJywgeyB1bmlxdWU6IGZhbHNlLCBtdWx0aUVudHJ5OiB0cnVlIH0pO1xuICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ3N1bW1hcnknLCAnc3VtbWFyeScsIHsgdW5pcXVlOiBmYWxzZSB9KTtcbiAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KCdsYXN0VmlzaXRUaW1lJywgJ2xhc3RWaXNpdFRpbWUnLCB7IHVuaXF1ZTogdHJ1ZSB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgdXBncmFkZWRcIik7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICBkYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICByZXNvbHZlKGRiKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFyRGF0YWJhc2UoKSB7XG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oWydoaXN0b3J5J10sICdyZWFkd3JpdGUnKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gICAgY29uc3QgcmVxdWVzdCA9IG9iamVjdFN0b3JlLmNsZWFyKCk7XG4gICAgY29uc29sZS5sb2coXCJDbGVhcmluZyBkYXRhYmFzZVwiKTtcblxuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgIHJlamVjdChldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEhpc3RvcnlJdGVtKGl0ZW0pIHtcbiAgYXdhaXQgb3BlbkRhdGFiYXNlKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbJ2hpc3RvcnknXSwgJ3JlYWR3cml0ZScpO1xuICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ2hpc3RvcnknKTtcbiAgICBjb25zdCBpbmRleCA9IG9iamVjdFN0b3JlLmluZGV4KCdsYXN0VmlzaXRUaW1lJyk7XG5cbiAgICAvLyBDaGVjayBpZiBhbiBpdGVtIHdpdGggdGhlIHNhbWUgbGFzdFZpc2l0VGltZSBhbHJlYWR5IGV4aXN0c1xuICAgIGNvbnN0IGNoZWNrUmVxdWVzdCA9IGluZGV4LmdldChpdGVtLmxhc3RWaXNpdFRpbWUpO1xuXG4gICAgY2hlY2tSZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5yZXN1bHQpIHtcbiAgICAgICAgLy8gSXRlbSB3aXRoIHRoZSBzYW1lIGxhc3RWaXNpdFRpbWUgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIHdpdGggdGhlIHNhbWUgbGFzdFZpc2l0VGltZSBhbHJlYWR5IGV4aXN0cywgbm90IGFkZGluZy5cIik7XG4gICAgICAgIHJlc29sdmUoKTsgLy8gUmVzb2x2ZSB3aXRob3V0IGFkZGluZ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm8gaXRlbSB3aXRoIHRoZSBzYW1lIGxhc3RWaXNpdFRpbWUsIHByb2NlZWQgdG8gYWRkXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBvYmplY3RTdG9yZS5wdXQoaXRlbSk7XG5cbiAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYEhpc3RvcnkgaXRlbSBhZGRlZGApO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgaXRlbTonLCBldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICAgICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNoZWNrUmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBsYXN0VmlzaXRUaW1lOicsIGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgIH07XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsSGlzdG9yeUl0ZW1zKCkge1xuICBhd2FpdCBvcGVuRGF0YWJhc2UoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFsnaGlzdG9yeSddLCAncmVhZG9ubHknKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gICAgY29uc3QgcmVxdWVzdCA9IG9iamVjdFN0b3JlLmdldEFsbCgpO1xuXG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgIHJlc29sdmUoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkFsbCBoaXN0b3J5IGl0ZW1zIGZldGNoZWRcIik7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWxsIGhpc3RvcnkgaXRlbXM6JywgZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgfTtcbiAgfSk7XG59XG5cblxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhpc3RvcnkgaXRlbSB3aXRoIHRoZSBzcGVjaWZpZWQgbGFzdFZpc2l0VGltZSBleGlzdHMgaW4gdGhlIEluZGV4ZWREQi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsYXN0VmlzaXRUaW1lIC0gVGhlIGxhc3QgdmlzaXQgdGltZSBvZiB0aGUgaGlzdG9yeSBpdGVtLlxuICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IC0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgaXRlbSBleGlzdHMsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrSWZJdGVtRXhpc3RzKGxhc3RWaXNpdFRpbWUpIHtcbiAgLy8gRW5zdXJlIHRoZSBkYXRhYmFzZSBpcyBvcGVuXG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuXG4gIHRyeSB7XG4gICAgLy8gU3RhcnQgYSByZWFkb25seSB0cmFuc2FjdGlvblxuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oWydoaXN0b3J5J10sICdyZWFkb25seScpO1xuICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ2hpc3RvcnknKTtcbiAgICBjb25zdCBpbmRleCA9IG9iamVjdFN0b3JlLmluZGV4KCdsYXN0VmlzaXRUaW1lJyk7XG5cbiAgICAvLyBJbml0aWF0ZSB0aGUgZ2V0IHJlcXVlc3RcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXguZ2V0KGxhc3RWaXNpdFRpbWUpO1xuXG4gICAgLy8gQXdhaXQgdGhlIHJlc3VsdCBvZiB0aGUgZ2V0IHJlcXVlc3RcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpO1xuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBpdGVtIGV4aXN0c1xuICAgIGNvbnN0IGV4aXN0cyA9IHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdCAhPT0gbnVsbDtcblxuICAgIC8vIGNvbnNvbGUubG9nKGBJdGVtIGV4aXN0cyBmb3IgbGFzdFZpc2l0VGltZSAke2xhc3RWaXNpdFRpbWV9OiAke2V4aXN0c31gKTtcblxuICAgIHJldHVybiBleGlzdHM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgRXJyb3IgY2hlY2tpbmcgaWYgaXRlbSBleGlzdHMgZm9yIGxhc3RWaXNpdFRpbWUgJHtsYXN0VmlzaXRUaW1lfTpgLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7IC8vIFByb3BhZ2F0ZSB0aGUgZXJyb3IgdG8gdGhlIGNhbGxlclxuICB9XG59XG5cbi8qKlxuICogUHJvbWlzaWZpZXMgYW4gSW5kZXhlZERCIHJlcXVlc3QuXG4gKiBAcGFyYW0ge0lEQlJlcXVlc3R9IHJlcXVlc3QgLSBUaGUgSW5kZXhlZERCIHJlcXVlc3Qgb2JqZWN0LlxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZXF1ZXN0IHJlc3VsdC5cbiAqL1xuZnVuY3Rpb24gcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKHJlcXVlc3QucmVzdWx0KTtcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gIH0pO1xufVxuXG4vKipcbiAqIElucHV0IHN0YXJ0ZGF0ZSBhbmQgZW5kZGF0ZSwgZmV0Y2ggYWxsIGhpc3RvcnkgaXRlbXMgaW4gdGhhdCByYW5nZSwgc2VhcmNoIHdpdGhpbiBsYXN0VmlzaXRUaW1lIGluZGV4IG9mIHRoZSBkYiAgXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIaXN0b3J5SW5UaW1lUmFuZ2Uoc3RhcnREYXRlLCBlbmREYXRlKSB7XG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFsnaGlzdG9yeSddLCAncmVhZG9ubHknKTtcbiAgY29uc3Qgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgnaGlzdG9yeScpO1xuICBjb25zdCBpbmRleCA9IG9iamVjdFN0b3JlLmluZGV4KCdsYXN0VmlzaXRUaW1lJyk7XG4gIGNvbnN0IHJhbmdlID0gSURCS2V5UmFuZ2UuYm91bmQoc3RhcnREYXRlLCBlbmREYXRlKTtcbiAgY29uc3QgcmVxdWVzdCA9IGluZGV4LmdldEFsbChyYW5nZSk7ICBcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpO1xuICByZXR1cm4gcmVzdWx0O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY2xlYXJEYXRhYmFzZSwgYWRkSGlzdG9yeUl0ZW0sIGdldEFsbEhpc3RvcnlJdGVtcywgY2hlY2tJZkl0ZW1FeGlzdHMgfSBmcm9tICcuLi91dGlscy9kYi5qcyc7XG5pbXBvcnQgeyBnZXRUYWdzIH0gZnJvbSAnLi4vYWkvdGFncy5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIG11bHRpR2VuZXJhdGVUYWdBbmRTdG9yZShoaXN0b3J5SXRlbXMpIHtcbiAgICBjb25zdCBiYXRjaHNpemUgPSA0O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGlzdG9yeUl0ZW1zLmxlbmd0aDsgaSArPSBiYXRjaHNpemUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFByb2Nlc3NpbmcgYmF0Y2ggJHtNYXRoLmZsb29yKGkgLyBiYXRjaHNpemUpICsgMX1gKTtcbiAgICAgICAgY29uc3QgYmF0Y2ggPSBoaXN0b3J5SXRlbXMuc2xpY2UoaSwgaSArIGJhdGNoc2l6ZSk7XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGJhdGNoLm1hcChnZW5lcmF0ZVRhZ0FuZFN0b3JlKSk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVRhZ0FuZFN0b3JlKGhpc3RvcnlJdGVtKSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIGl0ZW0gYWxyZWFkeSBleGlzdHNcbiAgICBjb25zdCBhbHJlYWR5RXhpc3RzID0gYXdhaXQgY2hlY2tJZkl0ZW1FeGlzdHMoaGlzdG9yeUl0ZW0ubGFzdFZpc2l0VGltZSk7XG4gICAgaWYgKGFscmVhZHlFeGlzdHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdGFncztcbiAgICB0cnkge1xuICAgICAgICB0YWdzID0gYXdhaXQgZ2V0VGFncyhoaXN0b3J5SXRlbS50aXRsZSwgaGlzdG9yeUl0ZW0udXJsKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdFcnJvciBnZW5lcmF0aW5nIHRhZ3M6JywgZXJyb3IsIGBmb3IgJHtoaXN0b3J5SXRlbS5pZH0gJHtoaXN0b3J5SXRlbS51cmx9YCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgIFxuICAgIGhpc3RvcnlJdGVtLnRhZ3MgPSB0YWdzO1xuICAgIC8vIFRPRE86IGdlbmVyYXRlIHN1bW1hcnlcbiAgICBoaXN0b3J5SXRlbS5zdW1tYXJ5ID0gXCJcIjtcblxuICAgIGF3YWl0IGFkZEhpc3RvcnlJdGVtKGhpc3RvcnlJdGVtKTtcbiAgICByZXR1cm47XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGluZGV4IG9sZCBkYXRhXG5hc3luYyBmdW5jdGlvbiBpbmRleE9sZERhdGEoKSB7XG4gIC8vIFRPRE86IHJlbW92ZSBsYXRlcjogQ2xlYXIgZXhpc3RpbmcgZGF0YSBpZiBuZWVkZWRcbiAgYXdhaXQgY2xlYXJEYXRhYmFzZSgpO1xuXG4gIC8vIEZldGNoIGFsbCBoaXN0b3J5IGl0ZW1zXG4gIGNvbnRpbnVlSW5kZXhpbmcoKTtcbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBjb250aW51ZUluZGV4aW5nKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaW5kZXhpbmcgbm93XCIpO1xuXG4gICAgLy8gRmV0Y2ggYWxsIGhpc3RvcnkgaXRlbXNcbiAgICBjaHJvbWUuaGlzdG9yeS5zZWFyY2goe1xuICAgICAgdGV4dDogJycsXG4gICAgICBzdGFydFRpbWU6IDAsIC8vIEZyb20gdGhlIGJlZ2lubmluZ1xuICAgICAgbWF4UmVzdWx0czogMCAvLyBVbmxpbWl0ZWRcbiAgICB9LCBhc3luYyAoaGlzdG9yeUl0ZW1zKSA9PiB7XG4gICAgICBhd2FpdCBtdWx0aUdlbmVyYXRlVGFnQW5kU3RvcmUoaGlzdG9yeUl0ZW1zKTtcbiAgICAgIGNvbnNvbGUubG9nKCdJbmRleGluZyBvZiBvbGQgZGF0YSBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5LicpO1xuICAgIH0pO1xufVxuXG4vLyBOZXc6IExpc3RlbiBmb3IgbmV3IGhpc3RvcnkgZW50cmllc1xuY2hyb21lLmhpc3Rvcnkub25WaXNpdGVkLmFkZExpc3RlbmVyKGFzeW5jIChoaXN0b3J5SXRlbSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdXJsLCB0aXRsZSwgbGFzdFZpc2l0VGltZSB9ID0gaGlzdG9yeUl0ZW07XG5cbiAgICAvLyBHZW5lcmF0ZSB0YWdzIGZvciB0aGUgbmV3IGhpc3RvcnkgZW50cnlcbiAgICBjb25zdCB0YWdzID0gYXdhaXQgZ2V0VGFncyh0aXRsZSB8fCAnJywgdXJsKTtcblxuICAgIC8vIFRPRE86IGdlbmVyYXRlIHN1bW1hcnkvIHdyaXRlciBBUElcbiAgICBjb25zdCBzdW1tYXJ5ID0gXCJcIjtcblxuICAgIC8vIENyZWF0ZSBoaXN0b3J5IGVudHJ5IG9iamVjdFxuICAgIGNvbnN0IG5ld0hpc3RvcnlFbnRyeSA9IHtcbiAgICAgIGlkOiBgaGlzdG9yeS0ke2xhc3RWaXNpdFRpbWV9YCwgLy8gVW5pcXVlIElEIGJhc2VkIG9uIGxhc3RWaXNpdFRpbWVcbiAgICAgIHVybDogdXJsLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgbGFzdFZpc2l0VGltZTogbGFzdFZpc2l0VGltZSxcbiAgICAgIHRhZ3M6IHRhZ3MsXG4gICAgICBzdW1tYXJ5OiBzdW1tYXJ5XG4gICAgfTtcblxuICAgIC8vIEFkZCB0byBkYXRhYmFzZVxuICAgIGF3YWl0IGFkZEhpc3RvcnlJdGVtKG5ld0hpc3RvcnlFbnRyeSk7XG4gICAgY29uc29sZS5sb2coJ05ldyBoaXN0b3J5IGl0ZW0gaW5kZXhlZCcpO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5kZXhpbmcgbmV3IGhpc3RvcnkgaXRlbTonLCBlcnJvcik7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBnZXRUb3RhbEhpc3RvcnlDb3VudCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjaHJvbWUuaGlzdG9yeS5zZWFyY2goe1xuICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICBzdGFydFRpbWU6IDAsIC8vIEZyb20gdGhlIGJlZ2lubmluZyBvZiBoaXN0b3J5XG4gICAgICAgICAgICBtYXhSZXN1bHRzOiAwIC8vIDAgd2lsbCBmZXRjaCBhbGwgaGlzdG9yeSBpdGVtc1xuICAgICAgICB9LCAoaGlzdG9yeUl0ZW1zKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoaGlzdG9yeUl0ZW1zLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVJbmRleFBlcmNlbnRhZ2UoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gR2V0IHRvdGFsIGFuZCBpbmRleGVkIGNvdW50c1xuICAgICAgICBjb25zdCBbdG90YWxDb3VudCwgaW5kZXhlZENvdW50XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGdldFRvdGFsSGlzdG9yeUNvdW50KCksXG4gICAgICAgICAgICBnZXRBbGxIaXN0b3J5SXRlbXMoKS50aGVuKGl0ZW1zID0+IGl0ZW1zLmxlbmd0aClcbiAgICAgICAgXSk7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHBlcmNlbnRhZ2VcbiAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IHRvdGFsQ291bnQgPiAwID8gKChpbmRleGVkQ291bnQgLyB0b3RhbENvdW50KSAqIDEwMCkudG9GaXhlZCgyKSA6ICcwLjAwJztcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHBlcmNlbnRhZ2UgaW4gQ2hyb21lIHN0b3JhZ2VcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaW5kZXhQZXJjZW50YWdlOiBwZXJjZW50YWdlIH0sICgpID0+IHtcbiAgICAgICAgICAgIGlmIChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZXR0aW5nIGluZGV4IHBlcmNlbnRhZ2U6JywgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEluZGV4ZWQgJHtwZXJjZW50YWdlfSUgb2YgaGlzdG9yeWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBpbmRleCBwZXJjZW50YWdlOicsIGVycm9yKTtcbiAgICB9XG59XG5cbi8vIEV4cG9zZSBpbmRleE9sZERhdGEgZnVuY3Rpb24gdG8gcG9wdXAuanMgdmlhIG1lc3NhZ2UgcGFzc2luZ1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxdWVzdC5hY3Rpb24gPT09ICdpbmRleE9sZERhdGEnKSB7XG4gICAgaW5kZXhPbGREYXRhKCkudGhlbigoKSA9PiB7XG4gICAgICBzZW5kUmVzcG9uc2UoeyBzdGF0dXM6ICdJbmRleGluZyBjb21wbGV0ZWQnIH0pO1xuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIHNlbmRSZXNwb25zZSh7IHN0YXR1czogJ0Vycm9yJywgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTsgLy8gSW5kaWNhdGVzIHRoYXQgdGhlIHJlc3BvbnNlIGlzIGFzeW5jaHJvbm91c1xuICB9IGVsc2UgaWYgKHJlcXVlc3QuYWN0aW9uID09PSAnZGlzcGxheVN1bW1hcnknKSB7XG4gICAgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiBjaHJvbWUucnVudGltZS5nZXRVUkwoXCJ1c2VyX2Rhc2hib2FyZC5odG1sXCIpIH0pO1xuICB9IGVsc2UgaWYgKHJlcXVlc3QuYWN0aW9uID09PSAnY29udGludWVJbmRleGluZycpIHtcbiAgICBzZW5kUmVzcG9uc2UoeyBzdGF0dXM6ICdJbmRleGluZyBjb250aW51ZWQnIH0pO1xuICAgIGNvbnRpbnVlSW5kZXhpbmcoKTtcbiAgfSBlbHNlIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gJ3JlZnJlc2hJbmRleFBlcmNlbnRhZ2UnKSB7XG4gICAgdXBkYXRlSW5kZXhQZXJjZW50YWdlKCkudGhlbigoKSA9PiB7XG4gICAgICBzZW5kUmVzcG9uc2UoeyBzdGF0dXM6ICdSZWZyZXNoICUgdXBkYXRlZCcgfSk7XG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN0YXR1czogJ0Vycm9yJywgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xudXBkYXRlSW5kZXhQZXJjZW50YWdlKCk7Il0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJjbGVhbklucHV0IiwiYWlTZXNzaW9uIiwiZGVsYXkiLCJtcyIsInNldFRpbWVvdXQiLCJnZXRQcm9tcHRBUElTZXNzaW9uIiwiX2dldFByb21wdEFQSVNlc3Npb24iLCJfY2FsbGVlIiwibWF4UmV0cmllcyIsImF0dGVtcHQiLCJiYXNlRGVsYXkiLCJfeWllbGQkYWkkbGFuZ3VhZ2VNb2QiLCJhdmFpbGFibGUiLCJkZWxheUR1cmF0aW9uIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImFpIiwibGFuZ3VhZ2VNb2RlbCIsImNhcGFiaWxpdGllcyIsInN5c3RlbVByb21wdCIsInQwIiwiY29uc29sZSIsImluZm8iLCJjb25jYXQiLCJlcnJvciIsIk1hdGgiLCJwb3ciLCJsb2ciLCJnZXRUYWdzIiwiX3giLCJfeDIiLCJfZ2V0VGFncyIsIl9jYWxsZWUyIiwidGl0bGUiLCJ1cmwiLCJyZWZpbmVkX3Byb21wdCIsInNlc3Npb24iLCJjdXJyZW50U2Vzc2lvbiIsInRhZ3MiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJjcmVhdGVSZWZpbmVkUHJvbXB0Iiwic2FuaXRpemVVcmwiLCJjbG9uZSIsImRlc3Ryb3kiLCJfcmVhZE9ubHlFcnJvciIsInByb21wdCIsInQxIiwiZ2V0VGFnc0FycmF5Iiwic3BsaXQiLCJtYXAiLCJ0YWciLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJzYW5pdGl6ZWRVcmwiLCJyZXBsYWNlIiwiZXh0cmFjdERvbWFpbiIsIlVSTCIsImhvc3RuYW1lIiwibWFya2Rvd25Ub0h0bWwiLCJtYXJrZG93blRleHQiLCJodG1sIiwidGV4dCIsIm1heExlbmd0aCIsInVuZGVmaW5lZCIsIm5vcm1hbGl6ZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImVzY2FwZSIsImRiIiwib3BlbkRhdGFiYXNlIiwiX29wZW5EYXRhYmFzZSIsInJlamVjdCIsInJlcXVlc3QiLCJpbmRleGVkREIiLCJvcGVuIiwib25lcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiZXJyb3JDb2RlIiwib251cGdyYWRlbmVlZGVkIiwicmVzdWx0Iiwib2JqZWN0U3RvcmUiLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJjcmVhdGVJbmRleCIsInVuaXF1ZSIsIm11bHRpRW50cnkiLCJvbnN1Y2Nlc3MiLCJjbGVhckRhdGFiYXNlIiwiX2NsZWFyRGF0YWJhc2UiLCJ0cmFuc2FjdGlvbiIsImNsZWFyIiwiYWRkSGlzdG9yeUl0ZW0iLCJfYWRkSGlzdG9yeUl0ZW0iLCJfY2FsbGVlMyIsIml0ZW0iLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJpbmRleCIsImNoZWNrUmVxdWVzdCIsImdldCIsImxhc3RWaXNpdFRpbWUiLCJwdXQiLCJnZXRBbGxIaXN0b3J5SXRlbXMiLCJfZ2V0QWxsSGlzdG9yeUl0ZW1zIiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJnZXRBbGwiLCJjaGVja0lmSXRlbUV4aXN0cyIsIl9jaGVja0lmSXRlbUV4aXN0cyIsIl9jYWxsZWU1IiwiZXhpc3RzIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwicHJvbWlzaWZ5UmVxdWVzdCIsImdldEhpc3RvcnlJblRpbWVSYW5nZSIsIl94MyIsIl94NCIsIl9nZXRIaXN0b3J5SW5UaW1lUmFuZ2UiLCJfY2FsbGVlNiIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJyYW5nZSIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsIklEQktleVJhbmdlIiwiYm91bmQiLCJtdWx0aUdlbmVyYXRlVGFnQW5kU3RvcmUiLCJfbXVsdGlHZW5lcmF0ZVRhZ0FuZFN0b3JlIiwiaGlzdG9yeUl0ZW1zIiwiYmF0Y2hzaXplIiwiYmF0Y2giLCJmbG9vciIsImFsbCIsImdlbmVyYXRlVGFnQW5kU3RvcmUiLCJfZ2VuZXJhdGVUYWdBbmRTdG9yZSIsImhpc3RvcnlJdGVtIiwiYWxyZWFkeUV4aXN0cyIsInN1bW1hcnkiLCJpbmRleE9sZERhdGEiLCJfaW5kZXhPbGREYXRhIiwiY29udGludWVJbmRleGluZyIsImNocm9tZSIsImhpc3RvcnkiLCJzZWFyY2giLCJzdGFydFRpbWUiLCJtYXhSZXN1bHRzIiwiX3JlZiIsIm9uVmlzaXRlZCIsImFkZExpc3RlbmVyIiwiX3JlZjIiLCJuZXdIaXN0b3J5RW50cnkiLCJpZCIsImdldFRvdGFsSGlzdG9yeUNvdW50IiwicnVudGltZSIsImxhc3RFcnJvciIsInVwZGF0ZUluZGV4UGVyY2VudGFnZSIsIl91cGRhdGVJbmRleFBlcmNlbnRhZ2UiLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwyIiwidG90YWxDb3VudCIsImluZGV4ZWRDb3VudCIsInBlcmNlbnRhZ2UiLCJpdGVtcyIsIl9zbGljZWRUb0FycmF5IiwidG9GaXhlZCIsInN0b3JhZ2UiLCJsb2NhbCIsInNldCIsImluZGV4UGVyY2VudGFnZSIsIm9uTWVzc2FnZSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImFjdGlvbiIsInN0YXR1cyIsIm1lc3NhZ2UiLCJ0YWJzIiwiZ2V0VVJMIl0sInNvdXJjZVJvb3QiOiIifQ==