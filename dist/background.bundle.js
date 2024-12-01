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
function getTags(_x, _x2, _x3) {
  return _getTags.apply(this, arguments);
}

/**
 * Constructs the refined prompt for Gemini Nano.
 * @param {string} url - The website URL.
 * @param {string} title - The website title.
 * @returns {string} - The formatted prompt.
 */
function _getTags() {
  _getTags = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(title, url, signal) {
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
          _context2.next = 34;
          break;
        case 25:
          _context2.prev = 25;
          _context2.t1 = _context2["catch"](19);
          if (!signal.aborted) {
            _context2.next = 32;
            break;
          }
          console.log("getTags aborted during prompt.");
          _context2.next = 31;
          return currentSession.destroy();
        case 31:
          throw new DOMException("Operation aborted", "AbortError");
        case 32:
          console.log("Error generating tags:", _context2.t1);
          tags = "";
        case 34:
          _context2.next = 36;
          return currentSession.destroy();
        case 36:
          return _context2.abrupt("return", getTagsArray(tags));
        case 37:
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
/* harmony export */   fisherYatesShuffle: () => (/* binding */ fisherYatesShuffle),
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
function fisherYatesShuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)); // Random index
    // Swap elements
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }
  return array;
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

// export async function clearDatabase() {
//   await openDatabase();
//   return new Promise((resolve, reject) => {
//     const transaction = db.transaction(['history'], 'readwrite');
//     const objectStore = transaction.objectStore('history');
//     const request = objectStore.clear();
//     console.log("Clearing database");

//     request.onsuccess = () => {
//       resolve();
//     };

//     request.onerror = (event) => {
//       reject(event.target.errorCode);
//     };
//   });
// }
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
function addHistoryItem(_x) {
  return _addHistoryItem.apply(this, arguments);
}
function _addHistoryItem() {
  _addHistoryItem = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(item) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return openDatabase();
        case 2:
          return _context2.abrupt("return", new Promise(function (resolve, reject) {
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
          return _context2.stop();
      }
    }, _callee2);
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
  _getAllHistoryItems = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return openDatabase();
        case 2:
          return _context3.abrupt("return", new Promise(function (resolve, reject) {
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
          return _context3.stop();
      }
    }, _callee3);
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
  _checkIfItemExists = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(lastVisitTime) {
    var transaction, objectStore, index, request, result, exists;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return openDatabase();
        case 2:
          _context4.prev = 2;
          // Start a readonly transaction
          transaction = db.transaction(['history'], 'readonly');
          objectStore = transaction.objectStore('history');
          index = objectStore.index('lastVisitTime'); // Initiate the get request
          request = index.get(lastVisitTime); // Await the result of the get request
          _context4.next = 9;
          return promisifyRequest(request);
        case 9:
          result = _context4.sent;
          // Determine if the item exists
          exists = result !== undefined && result !== null; // console.log(`Item exists for lastVisitTime ${lastVisitTime}: ${exists}`);
          return _context4.abrupt("return", exists);
        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](2);
          console.error("Error checking if item exists for lastVisitTime ".concat(lastVisitTime, ":"), _context4.t0);
          throw _context4.t0;
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 14]]);
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
  _getHistoryInTimeRange = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(startDate, endDate) {
    var transaction, objectStore, index, range, request, result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return openDatabase();
        case 2:
          transaction = db.transaction(['history'], 'readonly');
          objectStore = transaction.objectStore('history');
          index = objectStore.index('lastVisitTime');
          range = IDBKeyRange.bound(startDate, endDate);
          request = index.getAll(range);
          _context5.next = 9;
          return promisifyRequest(request);
        case 9:
          result = _context5.sent;
          return _context5.abrupt("return", result);
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
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


var indexingAbortController = null;
function multiGenerateTagAndStore(_x, _x2) {
  return _multiGenerateTagAndStore.apply(this, arguments);
}
function _multiGenerateTagAndStore() {
  _multiGenerateTagAndStore = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(historyItems, signal) {
    var batchsize, i, batch;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          batchsize = 4;
          i = 0;
        case 2:
          if (!(i < historyItems.length)) {
            _context3.next = 13;
            break;
          }
          if (!signal.aborted) {
            _context3.next = 6;
            break;
          }
          console.log("Tag generation aborted.");
          throw new DOMException("Operation aborted", "AbortError");
        case 6:
          console.log("Processing batch ".concat(Math.floor(i / batchsize) + 1));
          batch = historyItems.slice(i, i + batchsize);
          _context3.next = 10;
          return Promise.all(batch.map(function (item) {
            return generateTagAndStore(item, signal);
          }));
        case 10:
          i += batchsize;
          _context3.next = 2;
          break;
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _multiGenerateTagAndStore.apply(this, arguments);
}
function generateTagAndStore(_x3, _x4) {
  return _generateTagAndStore.apply(this, arguments);
} // // Function to index old data
// async function indexOldData() {
//   // TODO: remove later: Clear existing data if needed
//   await clearDatabase();
//   // Fetch all history items
//   continueIndexing();
//   return;
// }
function _generateTagAndStore() {
  _generateTagAndStore = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(historyItem, signal) {
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
          return (0,_ai_tags_js__WEBPACK_IMPORTED_MODULE_1__.getTags)(historyItem.title, historyItem.url, signal);
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
function continueIndexing() {
  console.log("indexing now");

  // Initialize the AbortController
  indexingAbortController = new AbortController();
  var _indexingAbortControl = indexingAbortController,
    signal = _indexingAbortControl.signal;

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
            return multiGenerateTagAndStore(historyItems, signal);
          case 2:
            console.log('Indexing of old data completed successfully.');
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x5) {
      return _ref.apply(this, arguments);
    };
  }());
}
function pauseIndexing() {
  if (indexingAbortController) {
    indexingAbortController.abort();
    indexingAbortController = null;
    console.log("indexing paused");
  } else {
    console.log("No indexing process to pause.");
  }
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
  return function (_x6) {
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
  _updateIndexPercentage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var _yield$Promise$all, _yield$Promise$all2, totalCount, indexedCount, percentage;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Promise.all([getTotalHistoryCount(), (0,_utils_db_js__WEBPACK_IMPORTED_MODULE_0__.getAllHistoryItems)().then(function (items) {
            return items.length;
          })]);
        case 3:
          _yield$Promise$all = _context5.sent;
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
          _context5.next = 14;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          console.error('Error updating index percentage:', _context5.t0);
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return _updateIndexPercentage.apply(this, arguments);
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // if (request.action === 'indexOldData') {
  //   indexOldData().then(() => {
  //     sendResponse({ status: 'Indexing completed' });
  //   }).catch(error => {
  //     sendResponse({ status: 'Error', message: error.message });
  //   });
  //   return true; // Indicates that the response is asynchronous
  // } else 
  if (request.action === 'displaySummary') {
    chrome.tabs.create({
      url: chrome.runtime.getURL("user_dashboard.html")
    });
  } else if (request.action === 'pauseIndexing') {
    sendResponse({
      status: 'Pausing Indexing'
    });
    pauseIndexing();
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
continueIndexing();
updateIndexPercentage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBQyxNQUFBLENBQUFLLGNBQUEsQ0FBQVAsQ0FBQSxFQUFBRCxDQUFBLElBQUFTLEtBQUEsRUFBQVAsQ0FBQSxFQUFBaUIsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXBCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBa0IsTUFBQSxtQkFBQWpCLENBQUEsSUFBQWlCLE1BQUEsWUFBQUEsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBb0IsS0FBQXJCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUssQ0FBQSxHQUFBVixDQUFBLElBQUFBLENBQUEsQ0FBQUksU0FBQSxZQUFBbUIsU0FBQSxHQUFBdkIsQ0FBQSxHQUFBdUIsU0FBQSxFQUFBWCxDQUFBLEdBQUFULE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWQsQ0FBQSxDQUFBTixTQUFBLEdBQUFVLENBQUEsT0FBQVcsT0FBQSxDQUFBcEIsQ0FBQSxnQkFBQUUsQ0FBQSxDQUFBSyxDQUFBLGVBQUFILEtBQUEsRUFBQWlCLGdCQUFBLENBQUF6QixDQUFBLEVBQUFDLENBQUEsRUFBQVksQ0FBQSxNQUFBRixDQUFBLGFBQUFlLFNBQUExQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxtQkFBQTBCLElBQUEsWUFBQUMsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBNkIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBRSxDQUFBLGNBQUFELENBQUEsYUFBQTJCLElBQUEsV0FBQUMsR0FBQSxFQUFBNUIsQ0FBQSxRQUFBRCxDQUFBLENBQUFzQixJQUFBLEdBQUFBLElBQUEsTUFBQVMsQ0FBQSxxQkFBQUMsQ0FBQSxxQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQVosVUFBQSxjQUFBYSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxDQUFBLE9BQUFwQixNQUFBLENBQUFvQixDQUFBLEVBQUExQixDQUFBLHFDQUFBMkIsQ0FBQSxHQUFBcEMsTUFBQSxDQUFBcUMsY0FBQSxFQUFBQyxDQUFBLEdBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBQSxDQUFBLENBQUFHLE1BQUEsUUFBQUQsQ0FBQSxJQUFBQSxDQUFBLEtBQUF2QyxDQUFBLElBQUFHLENBQUEsQ0FBQXlCLElBQUEsQ0FBQVcsQ0FBQSxFQUFBN0IsQ0FBQSxNQUFBMEIsQ0FBQSxHQUFBRyxDQUFBLE9BQUFFLENBQUEsR0FBQU4sMEJBQUEsQ0FBQWpDLFNBQUEsR0FBQW1CLFNBQUEsQ0FBQW5CLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBYyxDQUFBLFlBQUFNLHNCQUFBM0MsQ0FBQSxnQ0FBQTRDLE9BQUEsV0FBQTdDLENBQUEsSUFBQWtCLE1BQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGdCQUFBNkMsT0FBQSxDQUFBOUMsQ0FBQSxFQUFBQyxDQUFBLHNCQUFBOEMsY0FBQTlDLENBQUEsRUFBQUQsQ0FBQSxhQUFBZ0QsT0FBQTlDLENBQUEsRUFBQUssQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxHQUFBYSxRQUFBLENBQUExQixDQUFBLENBQUFDLENBQUEsR0FBQUQsQ0FBQSxFQUFBTSxDQUFBLG1CQUFBTyxDQUFBLENBQUFjLElBQUEsUUFBQVosQ0FBQSxHQUFBRixDQUFBLENBQUFlLEdBQUEsRUFBQUUsQ0FBQSxHQUFBZixDQUFBLENBQUFQLEtBQUEsU0FBQXNCLENBQUEsZ0JBQUFrQixPQUFBLENBQUFsQixDQUFBLEtBQUExQixDQUFBLENBQUF5QixJQUFBLENBQUFDLENBQUEsZUFBQS9CLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsQ0FBQW9CLE9BQUEsRUFBQUMsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBK0MsTUFBQSxTQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsZ0JBQUFYLENBQUEsSUFBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFFBQUFaLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsRUFBQXFCLElBQUEsV0FBQW5ELENBQUEsSUFBQWUsQ0FBQSxDQUFBUCxLQUFBLEdBQUFSLENBQUEsRUFBQVMsQ0FBQSxDQUFBTSxDQUFBLGdCQUFBZixDQUFBLFdBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLENBQUFFLENBQUEsQ0FBQWUsR0FBQSxTQUFBM0IsQ0FBQSxFQUFBSyxDQUFBLG9CQUFBRSxLQUFBLFdBQUFBLE1BQUFSLENBQUEsRUFBQUksQ0FBQSxhQUFBZ0QsMkJBQUEsZUFBQXJELENBQUEsV0FBQUEsQ0FBQSxFQUFBRSxDQUFBLElBQUE4QyxNQUFBLENBQUEvQyxDQUFBLEVBQUFJLENBQUEsRUFBQUwsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBQSxDQUFBLEdBQUFBLENBQUEsR0FBQUEsQ0FBQSxDQUFBa0QsSUFBQSxDQUFBQywwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQTNCLGlCQUFBMUIsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUUsQ0FBQSxHQUFBd0IsQ0FBQSxtQkFBQXJCLENBQUEsRUFBQUUsQ0FBQSxRQUFBTCxDQUFBLEtBQUEwQixDQUFBLFFBQUFxQixLQUFBLHNDQUFBL0MsQ0FBQSxLQUFBMkIsQ0FBQSxvQkFBQXhCLENBQUEsUUFBQUUsQ0FBQSxXQUFBSCxLQUFBLEVBQUFSLENBQUEsRUFBQXNELElBQUEsZUFBQWxELENBQUEsQ0FBQW1ELE1BQUEsR0FBQTlDLENBQUEsRUFBQUwsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBakIsQ0FBQSxVQUFBRSxDQUFBLEdBQUFULENBQUEsQ0FBQW9ELFFBQUEsTUFBQTNDLENBQUEsUUFBQUUsQ0FBQSxHQUFBMEMsbUJBQUEsQ0FBQTVDLENBQUEsRUFBQVQsQ0FBQSxPQUFBVyxDQUFBLFFBQUFBLENBQUEsS0FBQW1CLENBQUEsbUJBQUFuQixDQUFBLHFCQUFBWCxDQUFBLENBQUFtRCxNQUFBLEVBQUFuRCxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUF1RCxLQUFBLEdBQUF2RCxDQUFBLENBQUF3QixHQUFBLHNCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxRQUFBakQsQ0FBQSxLQUFBd0IsQ0FBQSxRQUFBeEIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBeEIsQ0FBQSxDQUFBd0QsaUJBQUEsQ0FBQXhELENBQUEsQ0FBQXdCLEdBQUEsdUJBQUF4QixDQUFBLENBQUFtRCxNQUFBLElBQUFuRCxDQUFBLENBQUF5RCxNQUFBLFdBQUF6RCxDQUFBLENBQUF3QixHQUFBLEdBQUF0QixDQUFBLEdBQUEwQixDQUFBLE1BQUFLLENBQUEsR0FBQVgsUUFBQSxDQUFBM0IsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsb0JBQUFpQyxDQUFBLENBQUFWLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBa0QsSUFBQSxHQUFBckIsQ0FBQSxHQUFBRixDQUFBLEVBQUFNLENBQUEsQ0FBQVQsR0FBQSxLQUFBTSxDQUFBLHFCQUFBMUIsS0FBQSxFQUFBNkIsQ0FBQSxDQUFBVCxHQUFBLEVBQUEwQixJQUFBLEVBQUFsRCxDQUFBLENBQUFrRCxJQUFBLGtCQUFBakIsQ0FBQSxDQUFBVixJQUFBLEtBQUFyQixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUFtRCxNQUFBLFlBQUFuRCxDQUFBLENBQUF3QixHQUFBLEdBQUFTLENBQUEsQ0FBQVQsR0FBQSxtQkFBQTZCLG9CQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLFFBQUFHLENBQUEsR0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxFQUFBakQsQ0FBQSxHQUFBUCxDQUFBLENBQUFhLFFBQUEsQ0FBQVIsQ0FBQSxPQUFBRSxDQUFBLEtBQUFOLENBQUEsU0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxxQkFBQXBELENBQUEsSUFBQUwsQ0FBQSxDQUFBYSxRQUFBLGVBQUFYLENBQUEsQ0FBQXNELE1BQUEsYUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsRUFBQXlELG1CQUFBLENBQUExRCxDQUFBLEVBQUFFLENBQUEsZUFBQUEsQ0FBQSxDQUFBc0QsTUFBQSxrQkFBQW5ELENBQUEsS0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSx1Q0FBQTFELENBQUEsaUJBQUE4QixDQUFBLE1BQUF6QixDQUFBLEdBQUFpQixRQUFBLENBQUFwQixDQUFBLEVBQUFQLENBQUEsQ0FBQWEsUUFBQSxFQUFBWCxDQUFBLENBQUEyQixHQUFBLG1CQUFBbkIsQ0FBQSxDQUFBa0IsSUFBQSxTQUFBMUIsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBbkIsQ0FBQSxDQUFBbUIsR0FBQSxFQUFBM0IsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxNQUFBdkIsQ0FBQSxHQUFBRixDQUFBLENBQUFtQixHQUFBLFNBQUFqQixDQUFBLEdBQUFBLENBQUEsQ0FBQTJDLElBQUEsSUFBQXJELENBQUEsQ0FBQUYsQ0FBQSxDQUFBZ0UsVUFBQSxJQUFBcEQsQ0FBQSxDQUFBSCxLQUFBLEVBQUFQLENBQUEsQ0FBQStELElBQUEsR0FBQWpFLENBQUEsQ0FBQWtFLE9BQUEsZUFBQWhFLENBQUEsQ0FBQXNELE1BQUEsS0FBQXRELENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsR0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxJQUFBdkIsQ0FBQSxJQUFBVixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHNDQUFBN0QsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxjQUFBZ0MsYUFBQWxFLENBQUEsUUFBQUQsQ0FBQSxLQUFBb0UsTUFBQSxFQUFBbkUsQ0FBQSxZQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXFFLFFBQUEsR0FBQXBFLENBQUEsV0FBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRSxVQUFBLEdBQUFyRSxDQUFBLEtBQUFELENBQUEsQ0FBQXVFLFFBQUEsR0FBQXRFLENBQUEsV0FBQXVFLFVBQUEsQ0FBQUMsSUFBQSxDQUFBekUsQ0FBQSxjQUFBMEUsY0FBQXpFLENBQUEsUUFBQUQsQ0FBQSxHQUFBQyxDQUFBLENBQUEwRSxVQUFBLFFBQUEzRSxDQUFBLENBQUE0QixJQUFBLG9CQUFBNUIsQ0FBQSxDQUFBNkIsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBMEUsVUFBQSxHQUFBM0UsQ0FBQSxhQUFBeUIsUUFBQXhCLENBQUEsU0FBQXVFLFVBQUEsTUFBQUosTUFBQSxhQUFBbkUsQ0FBQSxDQUFBNEMsT0FBQSxDQUFBc0IsWUFBQSxjQUFBUyxLQUFBLGlCQUFBbEMsT0FBQTFDLENBQUEsUUFBQUEsQ0FBQSxXQUFBQSxDQUFBLFFBQUFFLENBQUEsR0FBQUYsQ0FBQSxDQUFBWSxDQUFBLE9BQUFWLENBQUEsU0FBQUEsQ0FBQSxDQUFBNEIsSUFBQSxDQUFBOUIsQ0FBQSw0QkFBQUEsQ0FBQSxDQUFBaUUsSUFBQSxTQUFBakUsQ0FBQSxPQUFBNkUsS0FBQSxDQUFBN0UsQ0FBQSxDQUFBOEUsTUFBQSxTQUFBdkUsQ0FBQSxPQUFBRyxDQUFBLFlBQUF1RCxLQUFBLGFBQUExRCxDQUFBLEdBQUFQLENBQUEsQ0FBQThFLE1BQUEsT0FBQXpFLENBQUEsQ0FBQXlCLElBQUEsQ0FBQTlCLENBQUEsRUFBQU8sQ0FBQSxVQUFBMEQsSUFBQSxDQUFBeEQsS0FBQSxHQUFBVCxDQUFBLENBQUFPLENBQUEsR0FBQTBELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFNBQUFBLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsWUFBQXZELENBQUEsQ0FBQXVELElBQUEsR0FBQXZELENBQUEsZ0JBQUFxRCxTQUFBLENBQUFkLE9BQUEsQ0FBQWpELENBQUEsa0NBQUFvQyxpQkFBQSxDQUFBaEMsU0FBQSxHQUFBaUMsMEJBQUEsRUFBQTlCLENBQUEsQ0FBQW9DLENBQUEsbUJBQUFsQyxLQUFBLEVBQUE0QiwwQkFBQSxFQUFBakIsWUFBQSxTQUFBYixDQUFBLENBQUE4QiwwQkFBQSxtQkFBQTVCLEtBQUEsRUFBQTJCLGlCQUFBLEVBQUFoQixZQUFBLFNBQUFnQixpQkFBQSxDQUFBMkMsV0FBQSxHQUFBN0QsTUFBQSxDQUFBbUIsMEJBQUEsRUFBQXJCLENBQUEsd0JBQUFoQixDQUFBLENBQUFnRixtQkFBQSxhQUFBL0UsQ0FBQSxRQUFBRCxDQUFBLHdCQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQWdGLFdBQUEsV0FBQWpGLENBQUEsS0FBQUEsQ0FBQSxLQUFBb0MsaUJBQUEsNkJBQUFwQyxDQUFBLENBQUErRSxXQUFBLElBQUEvRSxDQUFBLENBQUFrRixJQUFBLE9BQUFsRixDQUFBLENBQUFtRixJQUFBLGFBQUFsRixDQUFBLFdBQUFFLE1BQUEsQ0FBQWlGLGNBQUEsR0FBQWpGLE1BQUEsQ0FBQWlGLGNBQUEsQ0FBQW5GLENBQUEsRUFBQW9DLDBCQUFBLEtBQUFwQyxDQUFBLENBQUFvRixTQUFBLEdBQUFoRCwwQkFBQSxFQUFBbkIsTUFBQSxDQUFBakIsQ0FBQSxFQUFBZSxDQUFBLHlCQUFBZixDQUFBLENBQUFHLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBbUIsQ0FBQSxHQUFBMUMsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRixLQUFBLGFBQUFyRixDQUFBLGFBQUFrRCxPQUFBLEVBQUFsRCxDQUFBLE9BQUEyQyxxQkFBQSxDQUFBRyxhQUFBLENBQUEzQyxTQUFBLEdBQUFjLE1BQUEsQ0FBQTZCLGFBQUEsQ0FBQTNDLFNBQUEsRUFBQVUsQ0FBQSxpQ0FBQWQsQ0FBQSxDQUFBK0MsYUFBQSxHQUFBQSxhQUFBLEVBQUEvQyxDQUFBLENBQUF1RixLQUFBLGFBQUF0RixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZUFBQUEsQ0FBQSxLQUFBQSxDQUFBLEdBQUE4RSxPQUFBLE9BQUE1RSxDQUFBLE9BQUFtQyxhQUFBLENBQUF6QixJQUFBLENBQUFyQixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEdBQUFHLENBQUEsVUFBQVYsQ0FBQSxDQUFBZ0YsbUJBQUEsQ0FBQTlFLENBQUEsSUFBQVUsQ0FBQSxHQUFBQSxDQUFBLENBQUFxRCxJQUFBLEdBQUFiLElBQUEsV0FBQW5ELENBQUEsV0FBQUEsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBUSxLQUFBLEdBQUFHLENBQUEsQ0FBQXFELElBQUEsV0FBQXJCLHFCQUFBLENBQUFELENBQUEsR0FBQXpCLE1BQUEsQ0FBQXlCLENBQUEsRUFBQTNCLENBQUEsZ0JBQUFFLE1BQUEsQ0FBQXlCLENBQUEsRUFBQS9CLENBQUEsaUNBQUFNLE1BQUEsQ0FBQXlCLENBQUEsNkRBQUEzQyxDQUFBLENBQUF5RixJQUFBLGFBQUF4RixDQUFBLFFBQUFELENBQUEsR0FBQUcsTUFBQSxDQUFBRixDQUFBLEdBQUFDLENBQUEsZ0JBQUFHLENBQUEsSUFBQUwsQ0FBQSxFQUFBRSxDQUFBLENBQUF1RSxJQUFBLENBQUFwRSxDQUFBLFVBQUFILENBQUEsQ0FBQXdGLE9BQUEsYUFBQXpCLEtBQUEsV0FBQS9ELENBQUEsQ0FBQTRFLE1BQUEsU0FBQTdFLENBQUEsR0FBQUMsQ0FBQSxDQUFBeUYsR0FBQSxRQUFBMUYsQ0FBQSxJQUFBRCxDQUFBLFNBQUFpRSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFdBQUFBLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFFBQUFqRSxDQUFBLENBQUEwQyxNQUFBLEdBQUFBLE1BQUEsRUFBQWpCLE9BQUEsQ0FBQXJCLFNBQUEsS0FBQTZFLFdBQUEsRUFBQXhELE9BQUEsRUFBQW1ELEtBQUEsV0FBQUEsTUFBQTVFLENBQUEsYUFBQTRGLElBQUEsV0FBQTNCLElBQUEsV0FBQU4sSUFBQSxRQUFBQyxLQUFBLEdBQUEzRCxDQUFBLE9BQUFzRCxJQUFBLFlBQUFFLFFBQUEsY0FBQUQsTUFBQSxnQkFBQTNCLEdBQUEsR0FBQTVCLENBQUEsT0FBQXVFLFVBQUEsQ0FBQTNCLE9BQUEsQ0FBQTZCLGFBQUEsSUFBQTFFLENBQUEsV0FBQUUsQ0FBQSxrQkFBQUEsQ0FBQSxDQUFBMkYsTUFBQSxPQUFBeEYsQ0FBQSxDQUFBeUIsSUFBQSxPQUFBNUIsQ0FBQSxNQUFBMkUsS0FBQSxFQUFBM0UsQ0FBQSxDQUFBNEYsS0FBQSxjQUFBNUYsQ0FBQSxJQUFBRCxDQUFBLE1BQUE4RixJQUFBLFdBQUFBLEtBQUEsU0FBQXhDLElBQUEsV0FBQXRELENBQUEsUUFBQXVFLFVBQUEsSUFBQUcsVUFBQSxrQkFBQTFFLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEsY0FBQW1FLElBQUEsS0FBQW5DLGlCQUFBLFdBQUFBLGtCQUFBN0QsQ0FBQSxhQUFBdUQsSUFBQSxRQUFBdkQsQ0FBQSxNQUFBRSxDQUFBLGtCQUFBK0YsT0FBQTVGLENBQUEsRUFBQUUsQ0FBQSxXQUFBSyxDQUFBLENBQUFnQixJQUFBLFlBQUFoQixDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFFLENBQUEsQ0FBQStELElBQUEsR0FBQTVELENBQUEsRUFBQUUsQ0FBQSxLQUFBTCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEtBQUFNLENBQUEsYUFBQUEsQ0FBQSxRQUFBaUUsVUFBQSxDQUFBTSxNQUFBLE1BQUF2RSxDQUFBLFNBQUFBLENBQUEsUUFBQUcsQ0FBQSxRQUFBOEQsVUFBQSxDQUFBakUsQ0FBQSxHQUFBSyxDQUFBLEdBQUFGLENBQUEsQ0FBQWlFLFVBQUEsaUJBQUFqRSxDQUFBLENBQUEwRCxNQUFBLFNBQUE2QixNQUFBLGFBQUF2RixDQUFBLENBQUEwRCxNQUFBLFNBQUF3QixJQUFBLFFBQUE5RSxDQUFBLEdBQUFULENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEsZUFBQU0sQ0FBQSxHQUFBWCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLHFCQUFBSSxDQUFBLElBQUFFLENBQUEsYUFBQTRFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEsZ0JBQUF1QixJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLGNBQUF4RCxDQUFBLGFBQUE4RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLHFCQUFBckQsQ0FBQSxRQUFBc0MsS0FBQSxxREFBQXNDLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsWUFBQVIsTUFBQSxXQUFBQSxPQUFBN0QsQ0FBQSxFQUFBRCxDQUFBLGFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBNUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFLLENBQUEsUUFBQWlFLFVBQUEsQ0FBQXRFLENBQUEsT0FBQUssQ0FBQSxDQUFBNkQsTUFBQSxTQUFBd0IsSUFBQSxJQUFBdkYsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBdkIsQ0FBQSx3QkFBQXFGLElBQUEsR0FBQXJGLENBQUEsQ0FBQStELFVBQUEsUUFBQTVELENBQUEsR0FBQUgsQ0FBQSxhQUFBRyxDQUFBLGlCQUFBVCxDQUFBLG1CQUFBQSxDQUFBLEtBQUFTLENBQUEsQ0FBQTBELE1BQUEsSUFBQXBFLENBQUEsSUFBQUEsQ0FBQSxJQUFBVSxDQUFBLENBQUE0RCxVQUFBLEtBQUE1RCxDQUFBLGNBQUFFLENBQUEsR0FBQUYsQ0FBQSxHQUFBQSxDQUFBLENBQUFpRSxVQUFBLGNBQUEvRCxDQUFBLENBQUFnQixJQUFBLEdBQUEzQixDQUFBLEVBQUFXLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQVUsQ0FBQSxTQUFBOEMsTUFBQSxnQkFBQVMsSUFBQSxHQUFBdkQsQ0FBQSxDQUFBNEQsVUFBQSxFQUFBbkMsQ0FBQSxTQUFBK0QsUUFBQSxDQUFBdEYsQ0FBQSxNQUFBc0YsUUFBQSxXQUFBQSxTQUFBakcsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBQyxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLHFCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxtQkFBQTNCLENBQUEsQ0FBQTJCLElBQUEsUUFBQXFDLElBQUEsR0FBQWhFLENBQUEsQ0FBQTRCLEdBQUEsZ0JBQUE1QixDQUFBLENBQUEyQixJQUFBLFNBQUFvRSxJQUFBLFFBQUFuRSxHQUFBLEdBQUE1QixDQUFBLENBQUE0QixHQUFBLE9BQUEyQixNQUFBLGtCQUFBUyxJQUFBLHlCQUFBaEUsQ0FBQSxDQUFBMkIsSUFBQSxJQUFBNUIsQ0FBQSxVQUFBaUUsSUFBQSxHQUFBakUsQ0FBQSxHQUFBbUMsQ0FBQSxLQUFBZ0UsTUFBQSxXQUFBQSxPQUFBbEcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQW9FLFVBQUEsS0FBQXJFLENBQUEsY0FBQWlHLFFBQUEsQ0FBQWhHLENBQUEsQ0FBQXlFLFVBQUEsRUFBQXpFLENBQUEsQ0FBQXFFLFFBQUEsR0FBQUcsYUFBQSxDQUFBeEUsQ0FBQSxHQUFBaUMsQ0FBQSx5QkFBQWlFLE9BQUFuRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBa0UsTUFBQSxLQUFBbkUsQ0FBQSxRQUFBSSxDQUFBLEdBQUFILENBQUEsQ0FBQXlFLFVBQUEsa0JBQUF0RSxDQUFBLENBQUF1QixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQXdCLEdBQUEsRUFBQTZDLGFBQUEsQ0FBQXhFLENBQUEsWUFBQUssQ0FBQSxZQUFBK0MsS0FBQSw4QkFBQStDLGFBQUEsV0FBQUEsY0FBQXJHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGdCQUFBb0QsUUFBQSxLQUFBNUMsUUFBQSxFQUFBNkIsTUFBQSxDQUFBMUMsQ0FBQSxHQUFBZ0UsVUFBQSxFQUFBOUQsQ0FBQSxFQUFBZ0UsT0FBQSxFQUFBN0QsQ0FBQSxvQkFBQW1ELE1BQUEsVUFBQTNCLEdBQUEsR0FBQTVCLENBQUEsR0FBQWtDLENBQUEsT0FBQW5DLENBQUE7QUFBQSxTQUFBc0csbUJBQUFqRyxDQUFBLEVBQUFKLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFLLENBQUEsRUFBQUssQ0FBQSxFQUFBRSxDQUFBLGNBQUFKLENBQUEsR0FBQUwsQ0FBQSxDQUFBTyxDQUFBLEVBQUFFLENBQUEsR0FBQUUsQ0FBQSxHQUFBTixDQUFBLENBQUFELEtBQUEsV0FBQUosQ0FBQSxnQkFBQUwsQ0FBQSxDQUFBSyxDQUFBLEtBQUFLLENBQUEsQ0FBQTZDLElBQUEsR0FBQXRELENBQUEsQ0FBQWUsQ0FBQSxJQUFBd0UsT0FBQSxDQUFBdEMsT0FBQSxDQUFBbEMsQ0FBQSxFQUFBb0MsSUFBQSxDQUFBbEQsQ0FBQSxFQUFBSyxDQUFBO0FBQUEsU0FBQWdHLGtCQUFBbEcsQ0FBQSw2QkFBQUosQ0FBQSxTQUFBRCxDQUFBLEdBQUF3RyxTQUFBLGFBQUFoQixPQUFBLFdBQUF0RixDQUFBLEVBQUFLLENBQUEsUUFBQUssQ0FBQSxHQUFBUCxDQUFBLENBQUFvRyxLQUFBLENBQUF4RyxDQUFBLEVBQUFELENBQUEsWUFBQTBHLE1BQUFyRyxDQUFBLElBQUFpRyxrQkFBQSxDQUFBMUYsQ0FBQSxFQUFBVixDQUFBLEVBQUFLLENBQUEsRUFBQW1HLEtBQUEsRUFBQUMsTUFBQSxVQUFBdEcsQ0FBQSxjQUFBc0csT0FBQXRHLENBQUEsSUFBQWlHLGtCQUFBLENBQUExRixDQUFBLEVBQUFWLENBQUEsRUFBQUssQ0FBQSxFQUFBbUcsS0FBQSxFQUFBQyxNQUFBLFdBQUF0RyxDQUFBLEtBQUFxRyxLQUFBO0FBRHdEO0FBQ3hELElBQUlHLFNBQVMsR0FBRyxJQUFJOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0MsS0FBS0EsQ0FBQ0MsRUFBRSxFQUFFO0VBQ2YsT0FBTyxJQUFJdkIsT0FBTyxDQUFDLFVBQUF0QyxPQUFPO0lBQUEsT0FBSThELFVBQVUsQ0FBQzlELE9BQU8sRUFBRTZELEVBQUUsQ0FBQztFQUFBLEVBQUM7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQSxTQU9lRSxtQkFBbUJBLENBQUE7RUFBQSxPQUFBQyxvQkFBQSxDQUFBVCxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQXlDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEEsU0FBQVUscUJBQUE7RUFBQUEsb0JBQUEsR0FBQVgsaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBekNBLFNBQUFnQyxRQUFBO0lBQUEsSUFBQUMsVUFBQSxFQUFBQyxPQUFBLEVBQUFDLFNBQUEsRUFBQUMscUJBQUEsRUFBQUMsU0FBQSxFQUFBQyxhQUFBO0lBQUEsT0FBQTFILG1CQUFBLEdBQUF1QixJQUFBLFVBQUFvRyxTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQS9CLElBQUEsR0FBQStCLFFBQUEsQ0FBQTFELElBQUE7UUFBQTtVQUFBLEtBQ1E0QyxTQUFTO1lBQUFjLFFBQUEsQ0FBQTFELElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQTBELFFBQUEsQ0FBQTdELE1BQUEsV0FDRitDLFNBQVM7UUFBQTtVQUdkTyxVQUFVLEdBQUcsQ0FBQztVQUNoQkMsT0FBTyxHQUFHLENBQUM7VUFDVEMsU0FBUyxHQUFHLEdBQUcsRUFBRTtRQUFBO1VBQUEsTUFFaEJELE9BQU8sR0FBR0QsVUFBVTtZQUFBTyxRQUFBLENBQUExRCxJQUFBO1lBQUE7VUFBQTtVQUFBMEQsUUFBQSxDQUFBL0IsSUFBQTtVQUFBK0IsUUFBQSxDQUFBMUQsSUFBQTtVQUFBLE9BR1MyRCxFQUFFLENBQUNDLGFBQWEsQ0FBQ0MsWUFBWSxDQUFDLENBQUM7UUFBQTtVQUFBUCxxQkFBQSxHQUFBSSxRQUFBLENBQUFoRSxJQUFBO1VBQW5ENkQsU0FBUyxHQUFBRCxxQkFBQSxDQUFUQyxTQUFTO1VBQUEsTUFFYkEsU0FBUyxLQUFLLElBQUk7WUFBQUcsUUFBQSxDQUFBMUQsSUFBQTtZQUFBO1VBQUE7VUFBQTBELFFBQUEsQ0FBQTFELElBQUE7VUFBQSxPQUNBMkQsRUFBRSxDQUFDQyxhQUFhLENBQUNyRyxNQUFNLENBQUM7WUFDdEN1RyxZQUFZLEVBQUU7VUFDbEIsQ0FBQyxDQUFDO1FBQUE7VUFGRmxCLFNBQVMsR0FBQWMsUUFBQSxDQUFBaEUsSUFBQTtVQUFBLE9BQUFnRSxRQUFBLENBQUE3RCxNQUFBLFdBR0YrQyxTQUFTO1FBQUE7VUFBQSxNQUVWLElBQUl2RCxLQUFLLENBQUMsZ0VBQWdFLENBQUM7UUFBQTtVQUFBcUUsUUFBQSxDQUFBMUQsSUFBQTtVQUFBO1FBQUE7VUFBQTBELFFBQUEsQ0FBQS9CLElBQUE7VUFBQStCLFFBQUEsQ0FBQUssRUFBQSxHQUFBTCxRQUFBO1VBSXJGTixPQUFPLEVBQUU7VUFDVFksT0FBTyxDQUFDQyxJQUFJLENBQUFQLFFBQUEsQ0FBQUssRUFBTSxDQUFDO1VBQ25CQyxPQUFPLENBQUNDLElBQUksdUNBQUFDLE1BQUEsQ0FBdUNkLE9BQU8sVUFBQWMsTUFBQSxDQUFPZixVQUFVLFNBQUFPLFFBQUEsQ0FBQUssRUFBVyxDQUFDO1VBQUMsTUFFcEZYLE9BQU8sSUFBSUQsVUFBVTtZQUFBTyxRQUFBLENBQUExRCxJQUFBO1lBQUE7VUFBQTtVQUNyQmdFLE9BQU8sQ0FBQ0csS0FBSyxDQUFDLG1EQUFtRCxDQUFDO1VBQUMsTUFDN0QsSUFBSTlFLEtBQUssQ0FBQyw2RkFBNkYsQ0FBQztRQUFBO1VBR2xIO1VBQ01tRSxhQUFhLEdBQUdILFNBQVMsR0FBR2UsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxFQUFFakIsT0FBTyxHQUFHLENBQUMsQ0FBQztVQUMxRFksT0FBTyxDQUFDTSxHQUFHLGdCQUFBSixNQUFBLENBQWdCVixhQUFhLEdBQUMsSUFBSSxVQUFPLENBQUM7VUFBQ0UsUUFBQSxDQUFBMUQsSUFBQTtVQUFBLE9BQ2hENkMsS0FBSyxDQUFDVyxhQUFhLENBQUM7UUFBQTtVQUFBRSxRQUFBLENBQUExRCxJQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUEsT0FBQTBELFFBQUEsQ0FBQTVCLElBQUE7TUFBQTtJQUFBLEdBQUFvQixPQUFBO0VBQUEsQ0FHckM7RUFBQSxPQUFBRCxvQkFBQSxDQUFBVCxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQVFNLFNBQWVnQyxPQUFPQSxDQUFBQyxFQUFBLEVBQUFDLEdBQUEsRUFBQUMsR0FBQTtFQUFBLE9BQUFDLFFBQUEsQ0FBQW5DLEtBQUEsT0FBQUQsU0FBQTtBQUFBOztBQWlDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEEsU0FBQW9DLFNBQUE7RUFBQUEsUUFBQSxHQUFBckMsaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBakNPLFNBQUEwRCxTQUF1QkMsS0FBSyxFQUFFQyxHQUFHLEVBQUVDLE1BQU07SUFBQSxJQUFBQyxjQUFBLEVBQUFDLE9BQUEsRUFBQUMsY0FBQSxFQUFBQyxJQUFBO0lBQUEsT0FBQXJKLG1CQUFBLEdBQUF1QixJQUFBLFVBQUErSCxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQTFELElBQUEsR0FBQTBELFNBQUEsQ0FBQXJGLElBQUE7UUFBQTtVQUN0Q2dGLGNBQWMsR0FBR00sbUJBQW1CLENBQUNDLFdBQVcsQ0FBQ1QsR0FBRyxDQUFDLEVBQUVuQyxvRUFBVSxDQUFDa0MsS0FBSyxDQUFDLENBQUM7VUFBQVEsU0FBQSxDQUFBckYsSUFBQTtVQUFBLE9BQ3pEZ0QsbUJBQW1CLENBQUMsQ0FBQztRQUFBO1VBQXJDaUMsT0FBTyxHQUFBSSxTQUFBLENBQUEzRixJQUFBO1VBQUEyRixTQUFBLENBQUExRCxJQUFBO1VBQUEwRCxTQUFBLENBQUFyRixJQUFBO1VBQUEsT0FHY2lGLE9BQU8sQ0FBQ08sS0FBSyxDQUFDLENBQUM7UUFBQTtVQUF0Q04sY0FBYyxHQUFBRyxTQUFBLENBQUEzRixJQUFBO1VBQUEyRixTQUFBLENBQUFyRixJQUFBO1VBQUE7UUFBQTtVQUFBcUYsU0FBQSxDQUFBMUQsSUFBQTtVQUFBMEQsU0FBQSxDQUFBdEIsRUFBQSxHQUFBc0IsU0FBQTtVQUVkLElBQUl6QyxTQUFTLEVBQUU7WUFDWEEsU0FBUyxDQUFDNkMsT0FBTyxDQUFDLENBQUM7WUFDbkI3QyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM7VUFDdEI7VUFBQ3lDLFNBQUEsQ0FBQXJGLElBQUE7VUFBQSxPQUNlZ0QsbUJBQW1CLENBQUMsQ0FBQztRQUFBO1VBQUEwQyxjQUFBO1VBQUFMLFNBQUEsQ0FBQXJGLElBQUE7VUFBQSxPQUNkaUYsT0FBTyxDQUFDTyxLQUFLLENBQUMsQ0FBQztRQUFBO1VBQXRDTixjQUFjLEdBQUFHLFNBQUEsQ0FBQTNGLElBQUE7UUFBQTtVQUFBMkYsU0FBQSxDQUFBMUQsSUFBQTtVQUFBMEQsU0FBQSxDQUFBckYsSUFBQTtVQUFBLE9BS0RrRixjQUFjLENBQUNTLE1BQU0sQ0FBQ1gsY0FBYyxDQUFDO1FBQUE7VUFBbERHLElBQUksR0FBQUUsU0FBQSxDQUFBM0YsSUFBQTtVQUFBMkYsU0FBQSxDQUFBckYsSUFBQTtVQUFBO1FBQUE7VUFBQXFGLFNBQUEsQ0FBQTFELElBQUE7VUFBQTBELFNBQUEsQ0FBQU8sRUFBQSxHQUFBUCxTQUFBO1VBQUEsS0FFQU4sTUFBTSxDQUFDYyxPQUFPO1lBQUFSLFNBQUEsQ0FBQXJGLElBQUE7WUFBQTtVQUFBO1VBQ2RnRSxPQUFPLENBQUNNLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQztVQUFDZSxTQUFBLENBQUFyRixJQUFBO1VBQUEsT0FDeENrRixjQUFjLENBQUNPLE9BQU8sQ0FBQyxDQUFDO1FBQUE7VUFBQSxNQUN4QixJQUFJSyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDO1FBQUE7VUFFN0Q5QixPQUFPLENBQUNNLEdBQUcsQ0FBQyx3QkFBd0IsRUFBQWUsU0FBQSxDQUFBTyxFQUFPLENBQUM7VUFDNUNULElBQUksR0FBRyxFQUFFO1FBQUM7VUFBQUUsU0FBQSxDQUFBckYsSUFBQTtVQUFBLE9BRVJrRixjQUFjLENBQUNPLE9BQU8sQ0FBQyxDQUFDO1FBQUE7VUFBQSxPQUFBSixTQUFBLENBQUF4RixNQUFBLFdBRXZCa0csWUFBWSxDQUFDWixJQUFJLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQUUsU0FBQSxDQUFBdkQsSUFBQTtNQUFBO0lBQUEsR0FBQThDLFFBQUE7RUFBQSxDQUM1QjtFQUFBLE9BQUFELFFBQUEsQ0FBQW5DLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBU0QsU0FBUytDLG1CQUFtQkEsQ0FBQ1IsR0FBRyxFQUFFRCxLQUFLLEVBQUU7RUFDckMsOG5CQUFBWCxNQUFBLENBV2VZLEdBQUcsbUJBQUFaLE1BQUEsQ0FDVFcsS0FBSztBQUdsQjtBQUVBLFNBQVNrQixZQUFZQSxDQUFDWixJQUFJLEVBQUU7RUFDeEIsSUFBSSxDQUFDQSxJQUFJLEVBQUU7SUFDUCxPQUFPLEVBQUUsQ0FBQyxDQUFDO0VBQ2Y7RUFDQSxPQUFPQSxJQUFJLENBQUNhLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFVBQUFDLEdBQUc7SUFBQSxPQUFJQSxHQUFHLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0VBQUEsRUFBQztBQUMvRDtBQUVBLFNBQVNiLFdBQVdBLENBQUNULEdBQUcsRUFBRTtFQUN0QjtFQUNBLElBQU11QixZQUFZLEdBQUd2QixHQUFHLENBQUN3QixPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQzs7RUFFcEQ7RUFDQSxPQUFPRCxZQUFZLENBQUNDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUM7QUFDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeElBO0FBQ0EsU0FBU0MsYUFBYUEsQ0FBQ3pCLEdBQUcsRUFBRTtFQUN4QixPQUFPLElBQUkwQixHQUFHLENBQUMxQixHQUFHLENBQUMsQ0FBQzJCLFFBQVE7QUFDOUI7QUFHQSxTQUFTQyxjQUFjQSxDQUFDQyxZQUFZLEVBQUU7RUFDcEM7RUFDQSxJQUFJQyxJQUFJLEdBQUdELFlBQVksQ0FBQ0wsT0FBTyxDQUFDLGdCQUFnQixFQUFFLHFCQUFxQixDQUFDOztFQUV4RTtFQUNBTSxJQUFJLEdBQUdBLElBQUksQ0FBQ04sT0FBTyxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7O0VBRWhEO0VBQ0FNLElBQUksR0FBR0EsSUFBSSxDQUFDTixPQUFPLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQzs7RUFFakQ7RUFDQU0sSUFBSSxHQUFHQSxJQUFJLENBQUNOLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLENBQUM7RUFFckQsT0FBT00sSUFBSTtBQUNiOztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTakUsVUFBVUEsQ0FBQ2tFLElBQUksRUFBb0I7RUFBQSxJQUFsQkMsU0FBUyxHQUFBdkUsU0FBQSxDQUFBMUIsTUFBQSxRQUFBMEIsU0FBQSxRQUFBd0UsU0FBQSxHQUFBeEUsU0FBQSxNQUFHLElBQUk7RUFDeEM7RUFDQXNFLElBQUksR0FBR0EsSUFBSSxDQUFDUCxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDOztFQUUzQztFQUNBTyxJQUFJLEdBQUdBLElBQUksQ0FBQ0csU0FBUyxDQUFDLEtBQUssQ0FBQzs7RUFFNUI7RUFDQSxJQUFJO0lBQ0FDLGtCQUFrQixDQUFDQyxNQUFNLENBQUNMLElBQUksQ0FBQyxDQUFDO0VBQ3BDLENBQUMsQ0FBQyxPQUFPOUssQ0FBQyxFQUFFO0lBQ1I4SyxJQUFJLEdBQUdBLElBQUksQ0FBQ1AsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7RUFDakM7O0VBRUE7RUFDQU8sSUFBSSxHQUFHQSxJQUFJLENBQUNQLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUM7O0VBRWxEO0VBQ0FPLElBQUksR0FBR0EsSUFBSSxDQUFDUCxPQUFPLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQzs7RUFFM0M7RUFDQU8sSUFBSSxHQUFHQSxJQUFJLENBQUNQLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLENBQUM7O0VBRS9DO0VBQ0FPLElBQUksR0FBR0EsSUFBSSxDQUFDUCxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDSCxJQUFJLENBQUMsQ0FBQzs7RUFFdkM7RUFDQSxJQUFJVSxJQUFJLENBQUNoRyxNQUFNLEdBQUdpRyxTQUFTLEVBQUU7SUFDekIsTUFBTSxJQUFJekgsS0FBSyw0Q0FBQTZFLE1BQUEsQ0FBNEM0QyxTQUFTLGlCQUFjLENBQUM7RUFDdkY7RUFFQSxPQUFPRCxJQUFJO0FBQ2I7QUFFQSxTQUFTTSxrQkFBa0JBLENBQUNDLEtBQUssRUFBRTtFQUNqQyxLQUFLLElBQUkzSyxDQUFDLEdBQUcySyxLQUFLLENBQUN2RyxNQUFNLEdBQUcsQ0FBQyxFQUFFcEUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7SUFDekMsSUFBTTRLLENBQUMsR0FBR2pELElBQUksQ0FBQ2tELEtBQUssQ0FBQ2xELElBQUksQ0FBQ21ELE1BQU0sQ0FBQyxDQUFDLElBQUk5SyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ0E7SUFBQSxJQUFBK0ssSUFBQSxHQUF4QixDQUFDSixLQUFLLENBQUNDLENBQUMsQ0FBQyxFQUFFRCxLQUFLLENBQUMzSyxDQUFDLENBQUMsQ0FBQztJQUExQzJLLEtBQUssQ0FBQzNLLENBQUMsQ0FBQyxHQUFBK0ssSUFBQTtJQUFFSixLQUFLLENBQUNDLENBQUMsQ0FBQyxHQUFBRyxJQUFBO0VBQ3JCO0VBQ0EsT0FBT0osS0FBSztBQUNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0N0RUEscUpBQUF0TCxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUyxLQUFBLEVBQUFQLENBQUEsRUFBQWlCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFwQixDQUFBLENBQUFELENBQUEsV0FBQWtCLE1BQUEsbUJBQUFqQixDQUFBLElBQUFpQixNQUFBLFlBQUFBLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQW9CLEtBQUFyQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFLLENBQUEsR0FBQVYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFNBQUEsWUFBQW1CLFNBQUEsR0FBQXZCLENBQUEsR0FBQXVCLFNBQUEsRUFBQVgsQ0FBQSxHQUFBVCxNQUFBLENBQUFxQixNQUFBLENBQUFkLENBQUEsQ0FBQU4sU0FBQSxHQUFBVSxDQUFBLE9BQUFXLE9BQUEsQ0FBQXBCLENBQUEsZ0JBQUFFLENBQUEsQ0FBQUssQ0FBQSxlQUFBSCxLQUFBLEVBQUFpQixnQkFBQSxDQUFBekIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFZLENBQUEsTUFBQUYsQ0FBQSxhQUFBZSxTQUFBMUIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsbUJBQUEwQixJQUFBLFlBQUFDLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTZCLElBQUEsQ0FBQTlCLENBQUEsRUFBQUUsQ0FBQSxjQUFBRCxDQUFBLGFBQUEyQixJQUFBLFdBQUFDLEdBQUEsRUFBQTVCLENBQUEsUUFBQUQsQ0FBQSxDQUFBc0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFTLENBQUEscUJBQUFDLENBQUEscUJBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFaLFVBQUEsY0FBQWEsa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsQ0FBQSxPQUFBcEIsTUFBQSxDQUFBb0IsQ0FBQSxFQUFBMUIsQ0FBQSxxQ0FBQTJCLENBQUEsR0FBQXBDLE1BQUEsQ0FBQXFDLGNBQUEsRUFBQUMsQ0FBQSxHQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUEsQ0FBQSxDQUFBRyxNQUFBLFFBQUFELENBQUEsSUFBQUEsQ0FBQSxLQUFBdkMsQ0FBQSxJQUFBRyxDQUFBLENBQUF5QixJQUFBLENBQUFXLENBQUEsRUFBQTdCLENBQUEsTUFBQTBCLENBQUEsR0FBQUcsQ0FBQSxPQUFBRSxDQUFBLEdBQUFOLDBCQUFBLENBQUFqQyxTQUFBLEdBQUFtQixTQUFBLENBQUFuQixTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWMsQ0FBQSxZQUFBTSxzQkFBQTNDLENBQUEsZ0NBQUE0QyxPQUFBLFdBQUE3QyxDQUFBLElBQUFrQixNQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsWUFBQUMsQ0FBQSxnQkFBQTZDLE9BQUEsQ0FBQTlDLENBQUEsRUFBQUMsQ0FBQSxzQkFBQThDLGNBQUE5QyxDQUFBLEVBQUFELENBQUEsYUFBQWdELE9BQUE5QyxDQUFBLEVBQUFLLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQWEsUUFBQSxDQUFBMUIsQ0FBQSxDQUFBQyxDQUFBLEdBQUFELENBQUEsRUFBQU0sQ0FBQSxtQkFBQU8sQ0FBQSxDQUFBYyxJQUFBLFFBQUFaLENBQUEsR0FBQUYsQ0FBQSxDQUFBZSxHQUFBLEVBQUFFLENBQUEsR0FBQWYsQ0FBQSxDQUFBUCxLQUFBLFNBQUFzQixDQUFBLGdCQUFBa0IsT0FBQSxDQUFBbEIsQ0FBQSxLQUFBMUIsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBQyxDQUFBLGVBQUEvQixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLENBQUFvQixPQUFBLEVBQUFDLElBQUEsV0FBQW5ELENBQUEsSUFBQStDLE1BQUEsU0FBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBWCxDQUFBLElBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxRQUFBWixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLEVBQUFxQixJQUFBLFdBQUFuRCxDQUFBLElBQUFlLENBQUEsQ0FBQVAsS0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsQ0FBQU0sQ0FBQSxnQkFBQWYsQ0FBQSxXQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFlLEdBQUEsU0FBQTNCLENBQUEsRUFBQUssQ0FBQSxvQkFBQUUsS0FBQSxXQUFBQSxNQUFBUixDQUFBLEVBQUFJLENBQUEsYUFBQWdELDJCQUFBLGVBQUFyRCxDQUFBLFdBQUFBLENBQUEsRUFBQUUsQ0FBQSxJQUFBOEMsTUFBQSxDQUFBL0MsQ0FBQSxFQUFBSSxDQUFBLEVBQUFMLENBQUEsRUFBQUUsQ0FBQSxnQkFBQUEsQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUEsQ0FBQWtELElBQUEsQ0FBQUMsMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUEzQixpQkFBQTFCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFFLENBQUEsR0FBQXdCLENBQUEsbUJBQUFyQixDQUFBLEVBQUFFLENBQUEsUUFBQUwsQ0FBQSxLQUFBMEIsQ0FBQSxRQUFBcUIsS0FBQSxzQ0FBQS9DLENBQUEsS0FBQTJCLENBQUEsb0JBQUF4QixDQUFBLFFBQUFFLENBQUEsV0FBQUgsS0FBQSxFQUFBUixDQUFBLEVBQUFzRCxJQUFBLGVBQUFsRCxDQUFBLENBQUFtRCxNQUFBLEdBQUE5QyxDQUFBLEVBQUFMLENBQUEsQ0FBQXdCLEdBQUEsR0FBQWpCLENBQUEsVUFBQUUsQ0FBQSxHQUFBVCxDQUFBLENBQUFvRCxRQUFBLE1BQUEzQyxDQUFBLFFBQUFFLENBQUEsR0FBQTBDLG1CQUFBLENBQUE1QyxDQUFBLEVBQUFULENBQUEsT0FBQVcsQ0FBQSxRQUFBQSxDQUFBLEtBQUFtQixDQUFBLG1CQUFBbkIsQ0FBQSxxQkFBQVgsQ0FBQSxDQUFBbUQsTUFBQSxFQUFBbkQsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBdUQsS0FBQSxHQUFBdkQsQ0FBQSxDQUFBd0IsR0FBQSxzQkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsUUFBQWpELENBQUEsS0FBQXdCLENBQUEsUUFBQXhCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQXdCLEdBQUEsRUFBQXhCLENBQUEsQ0FBQXdELGlCQUFBLENBQUF4RCxDQUFBLENBQUF3QixHQUFBLHVCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxJQUFBbkQsQ0FBQSxDQUFBeUQsTUFBQSxXQUFBekQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBdEIsQ0FBQSxHQUFBMEIsQ0FBQSxNQUFBSyxDQUFBLEdBQUFYLFFBQUEsQ0FBQTNCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLG9CQUFBaUMsQ0FBQSxDQUFBVixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQWtELElBQUEsR0FBQXJCLENBQUEsR0FBQUYsQ0FBQSxFQUFBTSxDQUFBLENBQUFULEdBQUEsS0FBQU0sQ0FBQSxxQkFBQTFCLEtBQUEsRUFBQTZCLENBQUEsQ0FBQVQsR0FBQSxFQUFBMEIsSUFBQSxFQUFBbEQsQ0FBQSxDQUFBa0QsSUFBQSxrQkFBQWpCLENBQUEsQ0FBQVYsSUFBQSxLQUFBckIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBbUQsTUFBQSxZQUFBbkQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBUyxDQUFBLENBQUFULEdBQUEsbUJBQUE2QixvQkFBQTFELENBQUEsRUFBQUUsQ0FBQSxRQUFBRyxDQUFBLEdBQUFILENBQUEsQ0FBQXNELE1BQUEsRUFBQWpELENBQUEsR0FBQVAsQ0FBQSxDQUFBYSxRQUFBLENBQUFSLENBQUEsT0FBQUUsQ0FBQSxLQUFBTixDQUFBLFNBQUFDLENBQUEsQ0FBQXVELFFBQUEscUJBQUFwRCxDQUFBLElBQUFMLENBQUEsQ0FBQWEsUUFBQSxlQUFBWCxDQUFBLENBQUFzRCxNQUFBLGFBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEVBQUF5RCxtQkFBQSxDQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsQ0FBQXNELE1BQUEsa0JBQUFuRCxDQUFBLEtBQUFILENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsdUNBQUExRCxDQUFBLGlCQUFBOEIsQ0FBQSxNQUFBekIsQ0FBQSxHQUFBaUIsUUFBQSxDQUFBcEIsQ0FBQSxFQUFBUCxDQUFBLENBQUFhLFFBQUEsRUFBQVgsQ0FBQSxDQUFBMkIsR0FBQSxtQkFBQW5CLENBQUEsQ0FBQWtCLElBQUEsU0FBQTFCLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQW5CLENBQUEsQ0FBQW1CLEdBQUEsRUFBQTNCLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsTUFBQXZCLENBQUEsR0FBQUYsQ0FBQSxDQUFBbUIsR0FBQSxTQUFBakIsQ0FBQSxHQUFBQSxDQUFBLENBQUEyQyxJQUFBLElBQUFyRCxDQUFBLENBQUFGLENBQUEsQ0FBQWdFLFVBQUEsSUFBQXBELENBQUEsQ0FBQUgsS0FBQSxFQUFBUCxDQUFBLENBQUErRCxJQUFBLEdBQUFqRSxDQUFBLENBQUFrRSxPQUFBLGVBQUFoRSxDQUFBLENBQUFzRCxNQUFBLEtBQUF0RCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEdBQUFDLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsSUFBQXZCLENBQUEsSUFBQVYsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSxzQ0FBQTdELENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsY0FBQWdDLGFBQUFsRSxDQUFBLFFBQUFELENBQUEsS0FBQW9FLE1BQUEsRUFBQW5FLENBQUEsWUFBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFxRSxRQUFBLEdBQUFwRSxDQUFBLFdBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0UsVUFBQSxHQUFBckUsQ0FBQSxLQUFBRCxDQUFBLENBQUF1RSxRQUFBLEdBQUF0RSxDQUFBLFdBQUF1RSxVQUFBLENBQUFDLElBQUEsQ0FBQXpFLENBQUEsY0FBQTBFLGNBQUF6RSxDQUFBLFFBQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBMEUsVUFBQSxRQUFBM0UsQ0FBQSxDQUFBNEIsSUFBQSxvQkFBQTVCLENBQUEsQ0FBQTZCLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTBFLFVBQUEsR0FBQTNFLENBQUEsYUFBQXlCLFFBQUF4QixDQUFBLFNBQUF1RSxVQUFBLE1BQUFKLE1BQUEsYUFBQW5FLENBQUEsQ0FBQTRDLE9BQUEsQ0FBQXNCLFlBQUEsY0FBQVMsS0FBQSxpQkFBQWxDLE9BQUExQyxDQUFBLFFBQUFBLENBQUEsV0FBQUEsQ0FBQSxRQUFBRSxDQUFBLEdBQUFGLENBQUEsQ0FBQVksQ0FBQSxPQUFBVixDQUFBLFNBQUFBLENBQUEsQ0FBQTRCLElBQUEsQ0FBQTlCLENBQUEsNEJBQUFBLENBQUEsQ0FBQWlFLElBQUEsU0FBQWpFLENBQUEsT0FBQTZFLEtBQUEsQ0FBQTdFLENBQUEsQ0FBQThFLE1BQUEsU0FBQXZFLENBQUEsT0FBQUcsQ0FBQSxZQUFBdUQsS0FBQSxhQUFBMUQsQ0FBQSxHQUFBUCxDQUFBLENBQUE4RSxNQUFBLE9BQUF6RSxDQUFBLENBQUF5QixJQUFBLENBQUE5QixDQUFBLEVBQUFPLENBQUEsVUFBQTBELElBQUEsQ0FBQXhELEtBQUEsR0FBQVQsQ0FBQSxDQUFBTyxDQUFBLEdBQUEwRCxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxTQUFBQSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFlBQUF2RCxDQUFBLENBQUF1RCxJQUFBLEdBQUF2RCxDQUFBLGdCQUFBcUQsU0FBQSxDQUFBZCxPQUFBLENBQUFqRCxDQUFBLGtDQUFBb0MsaUJBQUEsQ0FBQWhDLFNBQUEsR0FBQWlDLDBCQUFBLEVBQUE5QixDQUFBLENBQUFvQyxDQUFBLG1CQUFBbEMsS0FBQSxFQUFBNEIsMEJBQUEsRUFBQWpCLFlBQUEsU0FBQWIsQ0FBQSxDQUFBOEIsMEJBQUEsbUJBQUE1QixLQUFBLEVBQUEyQixpQkFBQSxFQUFBaEIsWUFBQSxTQUFBZ0IsaUJBQUEsQ0FBQTJDLFdBQUEsR0FBQTdELE1BQUEsQ0FBQW1CLDBCQUFBLEVBQUFyQixDQUFBLHdCQUFBaEIsQ0FBQSxDQUFBZ0YsbUJBQUEsYUFBQS9FLENBQUEsUUFBQUQsQ0FBQSx3QkFBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFnRixXQUFBLFdBQUFqRixDQUFBLEtBQUFBLENBQUEsS0FBQW9DLGlCQUFBLDZCQUFBcEMsQ0FBQSxDQUFBK0UsV0FBQSxJQUFBL0UsQ0FBQSxDQUFBa0YsSUFBQSxPQUFBbEYsQ0FBQSxDQUFBbUYsSUFBQSxhQUFBbEYsQ0FBQSxXQUFBRSxNQUFBLENBQUFpRixjQUFBLEdBQUFqRixNQUFBLENBQUFpRixjQUFBLENBQUFuRixDQUFBLEVBQUFvQywwQkFBQSxLQUFBcEMsQ0FBQSxDQUFBb0YsU0FBQSxHQUFBaEQsMEJBQUEsRUFBQW5CLE1BQUEsQ0FBQWpCLENBQUEsRUFBQWUsQ0FBQSx5QkFBQWYsQ0FBQSxDQUFBRyxTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQW1CLENBQUEsR0FBQTFDLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0YsS0FBQSxhQUFBckYsQ0FBQSxhQUFBa0QsT0FBQSxFQUFBbEQsQ0FBQSxPQUFBMkMscUJBQUEsQ0FBQUcsYUFBQSxDQUFBM0MsU0FBQSxHQUFBYyxNQUFBLENBQUE2QixhQUFBLENBQUEzQyxTQUFBLEVBQUFVLENBQUEsaUNBQUFkLENBQUEsQ0FBQStDLGFBQUEsR0FBQUEsYUFBQSxFQUFBL0MsQ0FBQSxDQUFBdUYsS0FBQSxhQUFBdEYsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGVBQUFBLENBQUEsS0FBQUEsQ0FBQSxHQUFBOEUsT0FBQSxPQUFBNUUsQ0FBQSxPQUFBbUMsYUFBQSxDQUFBekIsSUFBQSxDQUFBckIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxHQUFBRyxDQUFBLFVBQUFWLENBQUEsQ0FBQWdGLG1CQUFBLENBQUE5RSxDQUFBLElBQUFVLENBQUEsR0FBQUEsQ0FBQSxDQUFBcUQsSUFBQSxHQUFBYixJQUFBLFdBQUFuRCxDQUFBLFdBQUFBLENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQVEsS0FBQSxHQUFBRyxDQUFBLENBQUFxRCxJQUFBLFdBQUFyQixxQkFBQSxDQUFBRCxDQUFBLEdBQUF6QixNQUFBLENBQUF5QixDQUFBLEVBQUEzQixDQUFBLGdCQUFBRSxNQUFBLENBQUF5QixDQUFBLEVBQUEvQixDQUFBLGlDQUFBTSxNQUFBLENBQUF5QixDQUFBLDZEQUFBM0MsQ0FBQSxDQUFBeUYsSUFBQSxhQUFBeEYsQ0FBQSxRQUFBRCxDQUFBLEdBQUFHLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBQyxDQUFBLGdCQUFBRyxDQUFBLElBQUFMLENBQUEsRUFBQUUsQ0FBQSxDQUFBdUUsSUFBQSxDQUFBcEUsQ0FBQSxVQUFBSCxDQUFBLENBQUF3RixPQUFBLGFBQUF6QixLQUFBLFdBQUEvRCxDQUFBLENBQUE0RSxNQUFBLFNBQUE3RSxDQUFBLEdBQUFDLENBQUEsQ0FBQXlGLEdBQUEsUUFBQTFGLENBQUEsSUFBQUQsQ0FBQSxTQUFBaUUsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxXQUFBQSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxRQUFBakUsQ0FBQSxDQUFBMEMsTUFBQSxHQUFBQSxNQUFBLEVBQUFqQixPQUFBLENBQUFyQixTQUFBLEtBQUE2RSxXQUFBLEVBQUF4RCxPQUFBLEVBQUFtRCxLQUFBLFdBQUFBLE1BQUE1RSxDQUFBLGFBQUE0RixJQUFBLFdBQUEzQixJQUFBLFdBQUFOLElBQUEsUUFBQUMsS0FBQSxHQUFBM0QsQ0FBQSxPQUFBc0QsSUFBQSxZQUFBRSxRQUFBLGNBQUFELE1BQUEsZ0JBQUEzQixHQUFBLEdBQUE1QixDQUFBLE9BQUF1RSxVQUFBLENBQUEzQixPQUFBLENBQUE2QixhQUFBLElBQUExRSxDQUFBLFdBQUFFLENBQUEsa0JBQUFBLENBQUEsQ0FBQTJGLE1BQUEsT0FBQXhGLENBQUEsQ0FBQXlCLElBQUEsT0FBQTVCLENBQUEsTUFBQTJFLEtBQUEsRUFBQTNFLENBQUEsQ0FBQTRGLEtBQUEsY0FBQTVGLENBQUEsSUFBQUQsQ0FBQSxNQUFBOEYsSUFBQSxXQUFBQSxLQUFBLFNBQUF4QyxJQUFBLFdBQUF0RCxDQUFBLFFBQUF1RSxVQUFBLElBQUFHLFVBQUEsa0JBQUExRSxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLGNBQUFtRSxJQUFBLEtBQUFuQyxpQkFBQSxXQUFBQSxrQkFBQTdELENBQUEsYUFBQXVELElBQUEsUUFBQXZELENBQUEsTUFBQUUsQ0FBQSxrQkFBQStGLE9BQUE1RixDQUFBLEVBQUFFLENBQUEsV0FBQUssQ0FBQSxDQUFBZ0IsSUFBQSxZQUFBaEIsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBRSxDQUFBLENBQUErRCxJQUFBLEdBQUE1RCxDQUFBLEVBQUFFLENBQUEsS0FBQUwsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxLQUFBTSxDQUFBLGFBQUFBLENBQUEsUUFBQWlFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBdkUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFHLENBQUEsUUFBQThELFVBQUEsQ0FBQWpFLENBQUEsR0FBQUssQ0FBQSxHQUFBRixDQUFBLENBQUFpRSxVQUFBLGlCQUFBakUsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBNkIsTUFBQSxhQUFBdkYsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBd0IsSUFBQSxRQUFBOUUsQ0FBQSxHQUFBVCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLGVBQUFNLENBQUEsR0FBQVgsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxxQkFBQUksQ0FBQSxJQUFBRSxDQUFBLGFBQUE0RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLGdCQUFBdUIsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxjQUFBeEQsQ0FBQSxhQUFBOEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxxQkFBQXJELENBQUEsUUFBQXNDLEtBQUEscURBQUFzQyxJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLFlBQUFSLE1BQUEsV0FBQUEsT0FBQTdELENBQUEsRUFBQUQsQ0FBQSxhQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUFNLE1BQUEsTUFBQTVFLENBQUEsU0FBQUEsQ0FBQSxRQUFBSyxDQUFBLFFBQUFpRSxVQUFBLENBQUF0RSxDQUFBLE9BQUFLLENBQUEsQ0FBQTZELE1BQUEsU0FBQXdCLElBQUEsSUFBQXZGLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXZCLENBQUEsd0JBQUFxRixJQUFBLEdBQUFyRixDQUFBLENBQUErRCxVQUFBLFFBQUE1RCxDQUFBLEdBQUFILENBQUEsYUFBQUcsQ0FBQSxpQkFBQVQsQ0FBQSxtQkFBQUEsQ0FBQSxLQUFBUyxDQUFBLENBQUEwRCxNQUFBLElBQUFwRSxDQUFBLElBQUFBLENBQUEsSUFBQVUsQ0FBQSxDQUFBNEQsVUFBQSxLQUFBNUQsQ0FBQSxjQUFBRSxDQUFBLEdBQUFGLENBQUEsR0FBQUEsQ0FBQSxDQUFBaUUsVUFBQSxjQUFBL0QsQ0FBQSxDQUFBZ0IsSUFBQSxHQUFBM0IsQ0FBQSxFQUFBVyxDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFVLENBQUEsU0FBQThDLE1BQUEsZ0JBQUFTLElBQUEsR0FBQXZELENBQUEsQ0FBQTRELFVBQUEsRUFBQW5DLENBQUEsU0FBQStELFFBQUEsQ0FBQXRGLENBQUEsTUFBQXNGLFFBQUEsV0FBQUEsU0FBQWpHLENBQUEsRUFBQUQsQ0FBQSxvQkFBQUMsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxxQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsbUJBQUEzQixDQUFBLENBQUEyQixJQUFBLFFBQUFxQyxJQUFBLEdBQUFoRSxDQUFBLENBQUE0QixHQUFBLGdCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxTQUFBb0UsSUFBQSxRQUFBbkUsR0FBQSxHQUFBNUIsQ0FBQSxDQUFBNEIsR0FBQSxPQUFBMkIsTUFBQSxrQkFBQVMsSUFBQSx5QkFBQWhFLENBQUEsQ0FBQTJCLElBQUEsSUFBQTVCLENBQUEsVUFBQWlFLElBQUEsR0FBQWpFLENBQUEsR0FBQW1DLENBQUEsS0FBQWdFLE1BQUEsV0FBQUEsT0FBQWxHLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFvRSxVQUFBLEtBQUFyRSxDQUFBLGNBQUFpRyxRQUFBLENBQUFoRyxDQUFBLENBQUF5RSxVQUFBLEVBQUF6RSxDQUFBLENBQUFxRSxRQUFBLEdBQUFHLGFBQUEsQ0FBQXhFLENBQUEsR0FBQWlDLENBQUEseUJBQUFpRSxPQUFBbkcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQWtFLE1BQUEsS0FBQW5FLENBQUEsUUFBQUksQ0FBQSxHQUFBSCxDQUFBLENBQUF5RSxVQUFBLGtCQUFBdEUsQ0FBQSxDQUFBdUIsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUF3QixHQUFBLEVBQUE2QyxhQUFBLENBQUF4RSxDQUFBLFlBQUFLLENBQUEsWUFBQStDLEtBQUEsOEJBQUErQyxhQUFBLFdBQUFBLGNBQUFyRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxnQkFBQW9ELFFBQUEsS0FBQTVDLFFBQUEsRUFBQTZCLE1BQUEsQ0FBQTFDLENBQUEsR0FBQWdFLFVBQUEsRUFBQTlELENBQUEsRUFBQWdFLE9BQUEsRUFBQTdELENBQUEsb0JBQUFtRCxNQUFBLFVBQUEzQixHQUFBLEdBQUE1QixDQUFBLEdBQUFrQyxDQUFBLE9BQUFuQyxDQUFBO0FBQUEsU0FBQXNHLG1CQUFBakcsQ0FBQSxFQUFBSixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBSyxDQUFBLEVBQUFLLENBQUEsRUFBQUUsQ0FBQSxjQUFBSixDQUFBLEdBQUFMLENBQUEsQ0FBQU8sQ0FBQSxFQUFBRSxDQUFBLEdBQUFFLENBQUEsR0FBQU4sQ0FBQSxDQUFBRCxLQUFBLFdBQUFKLENBQUEsZ0JBQUFMLENBQUEsQ0FBQUssQ0FBQSxLQUFBSyxDQUFBLENBQUE2QyxJQUFBLEdBQUF0RCxDQUFBLENBQUFlLENBQUEsSUFBQXdFLE9BQUEsQ0FBQXRDLE9BQUEsQ0FBQWxDLENBQUEsRUFBQW9DLElBQUEsQ0FBQWxELENBQUEsRUFBQUssQ0FBQTtBQUFBLFNBQUFnRyxrQkFBQWxHLENBQUEsNkJBQUFKLENBQUEsU0FBQUQsQ0FBQSxHQUFBd0csU0FBQSxhQUFBaEIsT0FBQSxXQUFBdEYsQ0FBQSxFQUFBSyxDQUFBLFFBQUFLLENBQUEsR0FBQVAsQ0FBQSxDQUFBb0csS0FBQSxDQUFBeEcsQ0FBQSxFQUFBRCxDQUFBLFlBQUEwRyxNQUFBckcsQ0FBQSxJQUFBaUcsa0JBQUEsQ0FBQTFGLENBQUEsRUFBQVYsQ0FBQSxFQUFBSyxDQUFBLEVBQUFtRyxLQUFBLEVBQUFDLE1BQUEsVUFBQXRHLENBQUEsY0FBQXNHLE9BQUF0RyxDQUFBLElBQUFpRyxrQkFBQSxDQUFBMUYsQ0FBQSxFQUFBVixDQUFBLEVBQUFLLENBQUEsRUFBQW1HLEtBQUEsRUFBQUMsTUFBQSxXQUFBdEcsQ0FBQSxLQUFBcUcsS0FBQTtBQURBOztBQUVBLElBQUlnRixFQUFFO0FBRUMsU0FBZUMsWUFBWUEsQ0FBQTtFQUFBLE9BQUFDLGFBQUEsQ0FBQW5GLEtBQUEsT0FBQUQsU0FBQTtBQUFBOztBQStCbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSxTQUFBb0YsY0FBQTtFQUFBQSxhQUFBLEdBQUFyRixpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0EvQ08sU0FBQWdDLFFBQUE7SUFBQSxPQUFBcEgsbUJBQUEsR0FBQXVCLElBQUEsVUFBQW9HLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBL0IsSUFBQSxHQUFBK0IsUUFBQSxDQUFBMUQsSUFBQTtRQUFBO1VBQUEsT0FBQTBELFFBQUEsQ0FBQTdELE1BQUEsV0FDRSxJQUFJMEIsT0FBTyxDQUFDLFVBQUN0QyxPQUFPLEVBQUUySSxNQUFNLEVBQUs7WUFDdEMsSUFBSUgsRUFBRSxFQUFFO2NBQ054SSxPQUFPLENBQUN3SSxFQUFFLENBQUM7Y0FDWDtZQUNGO1lBQ0EsSUFBTUksT0FBTyxHQUFHQyxTQUFTLENBQUNDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7WUFFckRGLE9BQU8sQ0FBQ0csT0FBTyxHQUFHLFVBQUNDLEtBQUssRUFBSztjQUMzQmpFLE9BQU8sQ0FBQ0csS0FBSyxDQUFDLGlCQUFpQixFQUFFOEQsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQztjQUN4RFAsTUFBTSxDQUFDSyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ2hDLENBQUM7WUFFRE4sT0FBTyxDQUFDTyxlQUFlLEdBQUcsVUFBQ0gsS0FBSyxFQUFLO2NBQ25DUixFQUFFLEdBQUdRLEtBQUssQ0FBQ0MsTUFBTSxDQUFDRyxNQUFNO2NBQ3hCLElBQU1DLFdBQVcsR0FBR2IsRUFBRSxDQUFDYyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7Z0JBQUVDLE9BQU8sRUFBRTtjQUFLLENBQUMsQ0FBQztjQUN0RUYsV0FBVyxDQUFDRyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtnQkFBRUMsTUFBTSxFQUFFO2NBQU0sQ0FBQyxDQUFDO2NBQ3hESixXQUFXLENBQUNHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFO2dCQUFFQyxNQUFNLEVBQUU7Y0FBTSxDQUFDLENBQUM7Y0FDNURKLFdBQVcsQ0FBQ0csV0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRSxLQUFLO2dCQUFFQyxVQUFVLEVBQUU7Y0FBSyxDQUFDLENBQUM7Y0FDNUVMLFdBQVcsQ0FBQ0csV0FBVyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRTtjQUFNLENBQUMsQ0FBQztjQUNoRUosV0FBVyxDQUFDRyxXQUFXLENBQUMsZUFBZSxFQUFFLGVBQWUsRUFBRTtnQkFBRUMsTUFBTSxFQUFFO2NBQUssQ0FBQyxDQUFDO2NBQzNFMUUsT0FBTyxDQUFDTSxHQUFHLENBQUMsbUJBQW1CLENBQUM7WUFDbEMsQ0FBQztZQUVEdUQsT0FBTyxDQUFDZSxTQUFTLEdBQUcsVUFBQ1gsS0FBSyxFQUFLO2NBQzdCUixFQUFFLEdBQUdRLEtBQUssQ0FBQ0MsTUFBTSxDQUFDRyxNQUFNO2NBQ3hCcEosT0FBTyxDQUFDd0ksRUFBRSxDQUFDO1lBQ2IsQ0FBQztVQUNILENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBL0QsUUFBQSxDQUFBNUIsSUFBQTtNQUFBO0lBQUEsR0FBQW9CLE9BQUE7RUFBQSxDQUNIO0VBQUEsT0FBQXlFLGFBQUEsQ0FBQW5GLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBb0JNLFNBQWVzRyxjQUFjQSxDQUFBckUsRUFBQTtFQUFBLE9BQUFzRSxlQUFBLENBQUF0RyxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQW9DbkMsU0FBQXVHLGdCQUFBO0VBQUFBLGVBQUEsR0FBQXhHLGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQXBDTSxTQUFBMEQsU0FBOEJtRSxJQUFJO0lBQUEsT0FBQWpOLG1CQUFBLEdBQUF1QixJQUFBLFVBQUErSCxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQTFELElBQUEsR0FBQTBELFNBQUEsQ0FBQXJGLElBQUE7UUFBQTtVQUFBcUYsU0FBQSxDQUFBckYsSUFBQTtVQUFBLE9BQ2pDMEgsWUFBWSxDQUFDLENBQUM7UUFBQTtVQUFBLE9BQUFyQyxTQUFBLENBQUF4RixNQUFBLFdBQ2IsSUFBSTBCLE9BQU8sQ0FBQyxVQUFDdEMsT0FBTyxFQUFFMkksTUFBTSxFQUFLO1lBQ3RDLElBQU1vQixXQUFXLEdBQUd2QixFQUFFLENBQUN1QixXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxXQUFXLENBQUM7WUFDNUQsSUFBTVYsV0FBVyxHQUFHVSxXQUFXLENBQUNWLFdBQVcsQ0FBQyxTQUFTLENBQUM7WUFDdEQsSUFBTVcsS0FBSyxHQUFHWCxXQUFXLENBQUNXLEtBQUssQ0FBQyxlQUFlLENBQUM7O1lBRWhEO1lBQ0EsSUFBTUMsWUFBWSxHQUFHRCxLQUFLLENBQUNFLEdBQUcsQ0FBQ0osSUFBSSxDQUFDSyxhQUFhLENBQUM7WUFFbERGLFlBQVksQ0FBQ04sU0FBUyxHQUFHLFVBQUNYLEtBQUssRUFBSztjQUNsQyxJQUFJQSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0csTUFBTSxFQUFFO2dCQUN2QjtnQkFDQXJFLE9BQU8sQ0FBQ00sR0FBRyxDQUFDLDhEQUE4RCxDQUFDO2dCQUMzRXJGLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUNiLENBQUMsTUFBTTtnQkFDTDtnQkFDQSxJQUFNNEksT0FBTyxHQUFHUyxXQUFXLENBQUNlLEdBQUcsQ0FBQ04sSUFBSSxDQUFDO2dCQUVyQ2xCLE9BQU8sQ0FBQ2UsU0FBUyxHQUFHLFlBQU07a0JBQ3hCNUUsT0FBTyxDQUFDTSxHQUFHLHFCQUFxQixDQUFDO2tCQUNqQ3JGLE9BQU8sQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBRUQ0SSxPQUFPLENBQUNHLE9BQU8sR0FBRyxVQUFDQyxLQUFLLEVBQUs7a0JBQzNCakUsT0FBTyxDQUFDRyxLQUFLLENBQUMsb0JBQW9CLEVBQUU4RCxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO2tCQUMzRFAsTUFBTSxDQUFDSyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO2dCQUNoQyxDQUFDO2NBQ0g7WUFDRixDQUFDO1lBRURlLFlBQVksQ0FBQ2xCLE9BQU8sR0FBRyxVQUFDQyxLQUFLLEVBQUs7Y0FDaENqRSxPQUFPLENBQUNHLEtBQUssQ0FBQywrQkFBK0IsRUFBRThELEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUM7Y0FDdEVQLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUNoQyxDQUFDO1VBQ0gsQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUE5QyxTQUFBLENBQUF2RCxJQUFBO01BQUE7SUFBQSxHQUFBOEMsUUFBQTtFQUFBLENBQ0g7RUFBQSxPQUFBa0UsZUFBQSxDQUFBdEcsS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFFTSxTQUFlK0csa0JBQWtCQSxDQUFBO0VBQUEsT0FBQUMsbUJBQUEsQ0FBQS9HLEtBQUEsT0FBQUQsU0FBQTtBQUFBOztBQW1CeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBLFNBQUFnSCxvQkFBQTtFQUFBQSxtQkFBQSxHQUFBakgsaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBbkJPLFNBQUFzSSxTQUFBO0lBQUEsT0FBQTFOLG1CQUFBLEdBQUF1QixJQUFBLFVBQUFvTSxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQS9ILElBQUEsR0FBQStILFNBQUEsQ0FBQTFKLElBQUE7UUFBQTtVQUFBMEosU0FBQSxDQUFBMUosSUFBQTtVQUFBLE9BQ0MwSCxZQUFZLENBQUMsQ0FBQztRQUFBO1VBQUEsT0FBQWdDLFNBQUEsQ0FBQTdKLE1BQUEsV0FDYixJQUFJMEIsT0FBTyxDQUFDLFVBQUN0QyxPQUFPLEVBQUUySSxNQUFNLEVBQUs7WUFDdEMsSUFBTW9CLFdBQVcsR0FBR3ZCLEVBQUUsQ0FBQ3VCLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUMzRCxJQUFNVixXQUFXLEdBQUdVLFdBQVcsQ0FBQ1YsV0FBVyxDQUFDLFNBQVMsQ0FBQztZQUN0RCxJQUFNVCxPQUFPLEdBQUdTLFdBQVcsQ0FBQ3FCLE1BQU0sQ0FBQyxDQUFDO1lBRXBDOUIsT0FBTyxDQUFDZSxTQUFTLEdBQUcsVUFBQ1gsS0FBSyxFQUFLO2NBQzdCaEosT0FBTyxDQUFDZ0osS0FBSyxDQUFDQyxNQUFNLENBQUNHLE1BQU0sQ0FBQztjQUM1QnJFLE9BQU8sQ0FBQ00sR0FBRyxDQUFDLDJCQUEyQixDQUFDO1lBQzFDLENBQUM7WUFFRHVELE9BQU8sQ0FBQ0csT0FBTyxHQUFHLFVBQUNDLEtBQUssRUFBSztjQUMzQkwsTUFBTSxDQUFDSyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO2NBQzlCbkUsT0FBTyxDQUFDRyxLQUFLLENBQUMsbUNBQW1DLEVBQUU4RCxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQzVFLENBQUM7VUFDSCxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQXVCLFNBQUEsQ0FBQTVILElBQUE7TUFBQTtJQUFBLEdBQUEwSCxRQUFBO0VBQUEsQ0FDSDtFQUFBLE9BQUFELG1CQUFBLENBQUEvRyxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQU9NLFNBQWVxSCxpQkFBaUJBLENBQUFuRixHQUFBO0VBQUEsT0FBQW9GLGtCQUFBLENBQUFySCxLQUFBLE9BQUFELFNBQUE7QUFBQTs7QUE0QnZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQSxTQUFBc0gsbUJBQUE7RUFBQUEsa0JBQUEsR0FBQXZILGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQTVCTyxTQUFBNEksU0FBaUNWLGFBQWE7SUFBQSxJQUFBSixXQUFBLEVBQUFWLFdBQUEsRUFBQVcsS0FBQSxFQUFBcEIsT0FBQSxFQUFBUSxNQUFBLEVBQUEwQixNQUFBO0lBQUEsT0FBQWpPLG1CQUFBLEdBQUF1QixJQUFBLFVBQUEyTSxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQXRJLElBQUEsR0FBQXNJLFNBQUEsQ0FBQWpLLElBQUE7UUFBQTtVQUFBaUssU0FBQSxDQUFBakssSUFBQTtVQUFBLE9BRTdDMEgsWUFBWSxDQUFDLENBQUM7UUFBQTtVQUFBdUMsU0FBQSxDQUFBdEksSUFBQTtVQUdsQjtVQUNNcUgsV0FBVyxHQUFHdkIsRUFBRSxDQUFDdUIsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxDQUFDO1VBQ3JEVixXQUFXLEdBQUdVLFdBQVcsQ0FBQ1YsV0FBVyxDQUFDLFNBQVMsQ0FBQztVQUNoRFcsS0FBSyxHQUFHWCxXQUFXLENBQUNXLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFFaEQ7VUFDTXBCLE9BQU8sR0FBR29CLEtBQUssQ0FBQ0UsR0FBRyxDQUFDQyxhQUFhLENBQUMsRUFFeEM7VUFBQWEsU0FBQSxDQUFBakssSUFBQTtVQUFBLE9BQ3FCa0ssZ0JBQWdCLENBQUNyQyxPQUFPLENBQUM7UUFBQTtVQUF4Q1EsTUFBTSxHQUFBNEIsU0FBQSxDQUFBdkssSUFBQTtVQUVaO1VBQ01xSyxNQUFNLEdBQUcxQixNQUFNLEtBQUt0QixTQUFTLElBQUlzQixNQUFNLEtBQUssSUFBSSxFQUV0RDtVQUFBLE9BQUE0QixTQUFBLENBQUFwSyxNQUFBLFdBRU9rSyxNQUFNO1FBQUE7VUFBQUUsU0FBQSxDQUFBdEksSUFBQTtVQUFBc0ksU0FBQSxDQUFBbEcsRUFBQSxHQUFBa0csU0FBQTtVQUViakcsT0FBTyxDQUFDRyxLQUFLLG9EQUFBRCxNQUFBLENBQW9Ea0YsYUFBYSxRQUFBYSxTQUFBLENBQUFsRyxFQUFVLENBQUM7VUFBQyxNQUFBa0csU0FBQSxDQUFBbEcsRUFBQTtRQUFBO1FBQUE7VUFBQSxPQUFBa0csU0FBQSxDQUFBbkksSUFBQTtNQUFBO0lBQUEsR0FBQWdJLFFBQUE7RUFBQSxDQUc3RjtFQUFBLE9BQUFELGtCQUFBLENBQUFySCxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQU9ELFNBQVMySCxnQkFBZ0JBLENBQUNyQyxPQUFPLEVBQUU7RUFDakMsT0FBTyxJQUFJdEcsT0FBTyxDQUFDLFVBQUN0QyxPQUFPLEVBQUUySSxNQUFNLEVBQUs7SUFDdENDLE9BQU8sQ0FBQ2UsU0FBUyxHQUFHO01BQUEsT0FBTTNKLE9BQU8sQ0FBQzRJLE9BQU8sQ0FBQ1EsTUFBTSxDQUFDO0lBQUE7SUFDakRSLE9BQU8sQ0FBQ0csT0FBTyxHQUFHO01BQUEsT0FBTUosTUFBTSxDQUFDQyxPQUFPLENBQUMxRCxLQUFLLENBQUM7SUFBQTtFQUMvQyxDQUFDLENBQUM7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDTyxTQUFlZ0cscUJBQXFCQSxDQUFBekYsR0FBQSxFQUFBMEYsR0FBQTtFQUFBLE9BQUFDLHNCQUFBLENBQUE3SCxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQVUxQyxTQUFBOEgsdUJBQUE7RUFBQUEsc0JBQUEsR0FBQS9ILGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQVZNLFNBQUFvSixTQUFxQ0MsU0FBUyxFQUFFQyxPQUFPO0lBQUEsSUFBQXhCLFdBQUEsRUFBQVYsV0FBQSxFQUFBVyxLQUFBLEVBQUF3QixLQUFBLEVBQUE1QyxPQUFBLEVBQUFRLE1BQUE7SUFBQSxPQUFBdk0sbUJBQUEsR0FBQXVCLElBQUEsVUFBQXFOLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBaEosSUFBQSxHQUFBZ0osU0FBQSxDQUFBM0ssSUFBQTtRQUFBO1VBQUEySyxTQUFBLENBQUEzSyxJQUFBO1VBQUEsT0FDdEQwSCxZQUFZLENBQUMsQ0FBQztRQUFBO1VBQ2RzQixXQUFXLEdBQUd2QixFQUFFLENBQUN1QixXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxVQUFVLENBQUM7VUFDckRWLFdBQVcsR0FBR1UsV0FBVyxDQUFDVixXQUFXLENBQUMsU0FBUyxDQUFDO1VBQ2hEVyxLQUFLLEdBQUdYLFdBQVcsQ0FBQ1csS0FBSyxDQUFDLGVBQWUsQ0FBQztVQUMxQ3dCLEtBQUssR0FBR0csV0FBVyxDQUFDQyxLQUFLLENBQUNOLFNBQVMsRUFBRUMsT0FBTyxDQUFDO1VBQzdDM0MsT0FBTyxHQUFHb0IsS0FBSyxDQUFDVSxNQUFNLENBQUNjLEtBQUssQ0FBQztVQUFBRSxTQUFBLENBQUEzSyxJQUFBO1VBQUEsT0FFZGtLLGdCQUFnQixDQUFDckMsT0FBTyxDQUFDO1FBQUE7VUFBeENRLE1BQU0sR0FBQXNDLFNBQUEsQ0FBQWpMLElBQUE7VUFBQSxPQUFBaUwsU0FBQSxDQUFBOUssTUFBQSxXQUNMd0ksTUFBTTtRQUFBO1FBQUE7VUFBQSxPQUFBc0MsU0FBQSxDQUFBN0ksSUFBQTtNQUFBO0lBQUEsR0FBQXdJLFFBQUE7RUFBQSxDQUNkO0VBQUEsT0FBQUQsc0JBQUEsQ0FBQTdILEtBQUEsT0FBQUQsU0FBQTtBQUFBOzs7Ozs7VUN4S0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQ0xBLHFKQUFBekcsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVMsS0FBQSxFQUFBUCxDQUFBLEVBQUFpQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBcEIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFrQixNQUFBLG1CQUFBakIsQ0FBQSxJQUFBaUIsTUFBQSxZQUFBQSxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFvQixLQUFBckIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBSyxDQUFBLEdBQUFWLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxTQUFBLFlBQUFtQixTQUFBLEdBQUF2QixDQUFBLEdBQUF1QixTQUFBLEVBQUFYLENBQUEsR0FBQVQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBZCxDQUFBLENBQUFOLFNBQUEsR0FBQVUsQ0FBQSxPQUFBVyxPQUFBLENBQUFwQixDQUFBLGdCQUFBRSxDQUFBLENBQUFLLENBQUEsZUFBQUgsS0FBQSxFQUFBaUIsZ0JBQUEsQ0FBQXpCLENBQUEsRUFBQUMsQ0FBQSxFQUFBWSxDQUFBLE1BQUFGLENBQUEsYUFBQWUsU0FBQTFCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLG1CQUFBMEIsSUFBQSxZQUFBQyxHQUFBLEVBQUE1QixDQUFBLENBQUE2QixJQUFBLENBQUE5QixDQUFBLEVBQUFFLENBQUEsY0FBQUQsQ0FBQSxhQUFBMkIsSUFBQSxXQUFBQyxHQUFBLEVBQUE1QixDQUFBLFFBQUFELENBQUEsQ0FBQXNCLElBQUEsR0FBQUEsSUFBQSxNQUFBUyxDQUFBLHFCQUFBQyxDQUFBLHFCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBWixVQUFBLGNBQUFhLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLENBQUEsT0FBQXBCLE1BQUEsQ0FBQW9CLENBQUEsRUFBQTFCLENBQUEscUNBQUEyQixDQUFBLEdBQUFwQyxNQUFBLENBQUFxQyxjQUFBLEVBQUFDLENBQUEsR0FBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFBLENBQUEsQ0FBQUcsTUFBQSxRQUFBRCxDQUFBLElBQUFBLENBQUEsS0FBQXZDLENBQUEsSUFBQUcsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBVyxDQUFBLEVBQUE3QixDQUFBLE1BQUEwQixDQUFBLEdBQUFHLENBQUEsT0FBQUUsQ0FBQSxHQUFBTiwwQkFBQSxDQUFBakMsU0FBQSxHQUFBbUIsU0FBQSxDQUFBbkIsU0FBQSxHQUFBRCxNQUFBLENBQUFxQixNQUFBLENBQUFjLENBQUEsWUFBQU0sc0JBQUEzQyxDQUFBLGdDQUFBNEMsT0FBQSxXQUFBN0MsQ0FBQSxJQUFBa0IsTUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLFlBQUFDLENBQUEsZ0JBQUE2QyxPQUFBLENBQUE5QyxDQUFBLEVBQUFDLENBQUEsc0JBQUE4QyxjQUFBOUMsQ0FBQSxFQUFBRCxDQUFBLGFBQUFnRCxPQUFBOUMsQ0FBQSxFQUFBSyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEdBQUFhLFFBQUEsQ0FBQTFCLENBQUEsQ0FBQUMsQ0FBQSxHQUFBRCxDQUFBLEVBQUFNLENBQUEsbUJBQUFPLENBQUEsQ0FBQWMsSUFBQSxRQUFBWixDQUFBLEdBQUFGLENBQUEsQ0FBQWUsR0FBQSxFQUFBRSxDQUFBLEdBQUFmLENBQUEsQ0FBQVAsS0FBQSxTQUFBc0IsQ0FBQSxnQkFBQWtCLE9BQUEsQ0FBQWxCLENBQUEsS0FBQTFCLENBQUEsQ0FBQXlCLElBQUEsQ0FBQUMsQ0FBQSxlQUFBL0IsQ0FBQSxDQUFBa0QsT0FBQSxDQUFBbkIsQ0FBQSxDQUFBb0IsT0FBQSxFQUFBQyxJQUFBLFdBQUFuRCxDQUFBLElBQUErQyxNQUFBLFNBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxnQkFBQVgsQ0FBQSxJQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsUUFBQVosQ0FBQSxDQUFBa0QsT0FBQSxDQUFBbkIsQ0FBQSxFQUFBcUIsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBZSxDQUFBLENBQUFQLEtBQUEsR0FBQVIsQ0FBQSxFQUFBUyxDQUFBLENBQUFNLENBQUEsZ0JBQUFmLENBQUEsV0FBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsQ0FBQUUsQ0FBQSxDQUFBZSxHQUFBLFNBQUEzQixDQUFBLEVBQUFLLENBQUEsb0JBQUFFLEtBQUEsV0FBQUEsTUFBQVIsQ0FBQSxFQUFBSSxDQUFBLGFBQUFnRCwyQkFBQSxlQUFBckQsQ0FBQSxXQUFBQSxDQUFBLEVBQUFFLENBQUEsSUFBQThDLE1BQUEsQ0FBQS9DLENBQUEsRUFBQUksQ0FBQSxFQUFBTCxDQUFBLEVBQUFFLENBQUEsZ0JBQUFBLENBQUEsR0FBQUEsQ0FBQSxHQUFBQSxDQUFBLENBQUFrRCxJQUFBLENBQUFDLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBM0IsaUJBQUExQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBRSxDQUFBLEdBQUF3QixDQUFBLG1CQUFBckIsQ0FBQSxFQUFBRSxDQUFBLFFBQUFMLENBQUEsS0FBQTBCLENBQUEsUUFBQXFCLEtBQUEsc0NBQUEvQyxDQUFBLEtBQUEyQixDQUFBLG9CQUFBeEIsQ0FBQSxRQUFBRSxDQUFBLFdBQUFILEtBQUEsRUFBQVIsQ0FBQSxFQUFBc0QsSUFBQSxlQUFBbEQsQ0FBQSxDQUFBbUQsTUFBQSxHQUFBOUMsQ0FBQSxFQUFBTCxDQUFBLENBQUF3QixHQUFBLEdBQUFqQixDQUFBLFVBQUFFLENBQUEsR0FBQVQsQ0FBQSxDQUFBb0QsUUFBQSxNQUFBM0MsQ0FBQSxRQUFBRSxDQUFBLEdBQUEwQyxtQkFBQSxDQUFBNUMsQ0FBQSxFQUFBVCxDQUFBLE9BQUFXLENBQUEsUUFBQUEsQ0FBQSxLQUFBbUIsQ0FBQSxtQkFBQW5CLENBQUEscUJBQUFYLENBQUEsQ0FBQW1ELE1BQUEsRUFBQW5ELENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQXVELEtBQUEsR0FBQXZELENBQUEsQ0FBQXdCLEdBQUEsc0JBQUF4QixDQUFBLENBQUFtRCxNQUFBLFFBQUFqRCxDQUFBLEtBQUF3QixDQUFBLFFBQUF4QixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUF3QixHQUFBLEVBQUF4QixDQUFBLENBQUF3RCxpQkFBQSxDQUFBeEQsQ0FBQSxDQUFBd0IsR0FBQSx1QkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsSUFBQW5ELENBQUEsQ0FBQXlELE1BQUEsV0FBQXpELENBQUEsQ0FBQXdCLEdBQUEsR0FBQXRCLENBQUEsR0FBQTBCLENBQUEsTUFBQUssQ0FBQSxHQUFBWCxRQUFBLENBQUEzQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxvQkFBQWlDLENBQUEsQ0FBQVYsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUFrRCxJQUFBLEdBQUFyQixDQUFBLEdBQUFGLENBQUEsRUFBQU0sQ0FBQSxDQUFBVCxHQUFBLEtBQUFNLENBQUEscUJBQUExQixLQUFBLEVBQUE2QixDQUFBLENBQUFULEdBQUEsRUFBQTBCLElBQUEsRUFBQWxELENBQUEsQ0FBQWtELElBQUEsa0JBQUFqQixDQUFBLENBQUFWLElBQUEsS0FBQXJCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQW1ELE1BQUEsWUFBQW5ELENBQUEsQ0FBQXdCLEdBQUEsR0FBQVMsQ0FBQSxDQUFBVCxHQUFBLG1CQUFBNkIsb0JBQUExRCxDQUFBLEVBQUFFLENBQUEsUUFBQUcsQ0FBQSxHQUFBSCxDQUFBLENBQUFzRCxNQUFBLEVBQUFqRCxDQUFBLEdBQUFQLENBQUEsQ0FBQWEsUUFBQSxDQUFBUixDQUFBLE9BQUFFLENBQUEsS0FBQU4sQ0FBQSxTQUFBQyxDQUFBLENBQUF1RCxRQUFBLHFCQUFBcEQsQ0FBQSxJQUFBTCxDQUFBLENBQUFhLFFBQUEsZUFBQVgsQ0FBQSxDQUFBc0QsTUFBQSxhQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxFQUFBeUQsbUJBQUEsQ0FBQTFELENBQUEsRUFBQUUsQ0FBQSxlQUFBQSxDQUFBLENBQUFzRCxNQUFBLGtCQUFBbkQsQ0FBQSxLQUFBSCxDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHVDQUFBMUQsQ0FBQSxpQkFBQThCLENBQUEsTUFBQXpCLENBQUEsR0FBQWlCLFFBQUEsQ0FBQXBCLENBQUEsRUFBQVAsQ0FBQSxDQUFBYSxRQUFBLEVBQUFYLENBQUEsQ0FBQTJCLEdBQUEsbUJBQUFuQixDQUFBLENBQUFrQixJQUFBLFNBQUExQixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUFuQixDQUFBLENBQUFtQixHQUFBLEVBQUEzQixDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLE1BQUF2QixDQUFBLEdBQUFGLENBQUEsQ0FBQW1CLEdBQUEsU0FBQWpCLENBQUEsR0FBQUEsQ0FBQSxDQUFBMkMsSUFBQSxJQUFBckQsQ0FBQSxDQUFBRixDQUFBLENBQUFnRSxVQUFBLElBQUFwRCxDQUFBLENBQUFILEtBQUEsRUFBQVAsQ0FBQSxDQUFBK0QsSUFBQSxHQUFBakUsQ0FBQSxDQUFBa0UsT0FBQSxlQUFBaEUsQ0FBQSxDQUFBc0QsTUFBQSxLQUFBdEQsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxHQUFBQyxDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLElBQUF2QixDQUFBLElBQUFWLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsc0NBQUE3RCxDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLGNBQUFnQyxhQUFBbEUsQ0FBQSxRQUFBRCxDQUFBLEtBQUFvRSxNQUFBLEVBQUFuRSxDQUFBLFlBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBcUUsUUFBQSxHQUFBcEUsQ0FBQSxXQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXNFLFVBQUEsR0FBQXJFLENBQUEsS0FBQUQsQ0FBQSxDQUFBdUUsUUFBQSxHQUFBdEUsQ0FBQSxXQUFBdUUsVUFBQSxDQUFBQyxJQUFBLENBQUF6RSxDQUFBLGNBQUEwRSxjQUFBekUsQ0FBQSxRQUFBRCxDQUFBLEdBQUFDLENBQUEsQ0FBQTBFLFVBQUEsUUFBQTNFLENBQUEsQ0FBQTRCLElBQUEsb0JBQUE1QixDQUFBLENBQUE2QixHQUFBLEVBQUE1QixDQUFBLENBQUEwRSxVQUFBLEdBQUEzRSxDQUFBLGFBQUF5QixRQUFBeEIsQ0FBQSxTQUFBdUUsVUFBQSxNQUFBSixNQUFBLGFBQUFuRSxDQUFBLENBQUE0QyxPQUFBLENBQUFzQixZQUFBLGNBQUFTLEtBQUEsaUJBQUFsQyxPQUFBMUMsQ0FBQSxRQUFBQSxDQUFBLFdBQUFBLENBQUEsUUFBQUUsQ0FBQSxHQUFBRixDQUFBLENBQUFZLENBQUEsT0FBQVYsQ0FBQSxTQUFBQSxDQUFBLENBQUE0QixJQUFBLENBQUE5QixDQUFBLDRCQUFBQSxDQUFBLENBQUFpRSxJQUFBLFNBQUFqRSxDQUFBLE9BQUE2RSxLQUFBLENBQUE3RSxDQUFBLENBQUE4RSxNQUFBLFNBQUF2RSxDQUFBLE9BQUFHLENBQUEsWUFBQXVELEtBQUEsYUFBQTFELENBQUEsR0FBQVAsQ0FBQSxDQUFBOEUsTUFBQSxPQUFBekUsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBTyxDQUFBLFVBQUEwRCxJQUFBLENBQUF4RCxLQUFBLEdBQUFULENBQUEsQ0FBQU8sQ0FBQSxHQUFBMEQsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsU0FBQUEsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxZQUFBdkQsQ0FBQSxDQUFBdUQsSUFBQSxHQUFBdkQsQ0FBQSxnQkFBQXFELFNBQUEsQ0FBQWQsT0FBQSxDQUFBakQsQ0FBQSxrQ0FBQW9DLGlCQUFBLENBQUFoQyxTQUFBLEdBQUFpQywwQkFBQSxFQUFBOUIsQ0FBQSxDQUFBb0MsQ0FBQSxtQkFBQWxDLEtBQUEsRUFBQTRCLDBCQUFBLEVBQUFqQixZQUFBLFNBQUFiLENBQUEsQ0FBQThCLDBCQUFBLG1CQUFBNUIsS0FBQSxFQUFBMkIsaUJBQUEsRUFBQWhCLFlBQUEsU0FBQWdCLGlCQUFBLENBQUEyQyxXQUFBLEdBQUE3RCxNQUFBLENBQUFtQiwwQkFBQSxFQUFBckIsQ0FBQSx3QkFBQWhCLENBQUEsQ0FBQWdGLG1CQUFBLGFBQUEvRSxDQUFBLFFBQUFELENBQUEsd0JBQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBZ0YsV0FBQSxXQUFBakYsQ0FBQSxLQUFBQSxDQUFBLEtBQUFvQyxpQkFBQSw2QkFBQXBDLENBQUEsQ0FBQStFLFdBQUEsSUFBQS9FLENBQUEsQ0FBQWtGLElBQUEsT0FBQWxGLENBQUEsQ0FBQW1GLElBQUEsYUFBQWxGLENBQUEsV0FBQUUsTUFBQSxDQUFBaUYsY0FBQSxHQUFBakYsTUFBQSxDQUFBaUYsY0FBQSxDQUFBbkYsQ0FBQSxFQUFBb0MsMEJBQUEsS0FBQXBDLENBQUEsQ0FBQW9GLFNBQUEsR0FBQWhELDBCQUFBLEVBQUFuQixNQUFBLENBQUFqQixDQUFBLEVBQUFlLENBQUEseUJBQUFmLENBQUEsQ0FBQUcsU0FBQSxHQUFBRCxNQUFBLENBQUFxQixNQUFBLENBQUFtQixDQUFBLEdBQUExQyxDQUFBLEtBQUFELENBQUEsQ0FBQXNGLEtBQUEsYUFBQXJGLENBQUEsYUFBQWtELE9BQUEsRUFBQWxELENBQUEsT0FBQTJDLHFCQUFBLENBQUFHLGFBQUEsQ0FBQTNDLFNBQUEsR0FBQWMsTUFBQSxDQUFBNkIsYUFBQSxDQUFBM0MsU0FBQSxFQUFBVSxDQUFBLGlDQUFBZCxDQUFBLENBQUErQyxhQUFBLEdBQUFBLGFBQUEsRUFBQS9DLENBQUEsQ0FBQXVGLEtBQUEsYUFBQXRGLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxlQUFBQSxDQUFBLEtBQUFBLENBQUEsR0FBQThFLE9BQUEsT0FBQTVFLENBQUEsT0FBQW1DLGFBQUEsQ0FBQXpCLElBQUEsQ0FBQXJCLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsR0FBQUcsQ0FBQSxVQUFBVixDQUFBLENBQUFnRixtQkFBQSxDQUFBOUUsQ0FBQSxJQUFBVSxDQUFBLEdBQUFBLENBQUEsQ0FBQXFELElBQUEsR0FBQWIsSUFBQSxXQUFBbkQsQ0FBQSxXQUFBQSxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUFRLEtBQUEsR0FBQUcsQ0FBQSxDQUFBcUQsSUFBQSxXQUFBckIscUJBQUEsQ0FBQUQsQ0FBQSxHQUFBekIsTUFBQSxDQUFBeUIsQ0FBQSxFQUFBM0IsQ0FBQSxnQkFBQUUsTUFBQSxDQUFBeUIsQ0FBQSxFQUFBL0IsQ0FBQSxpQ0FBQU0sTUFBQSxDQUFBeUIsQ0FBQSw2REFBQTNDLENBQUEsQ0FBQXlGLElBQUEsYUFBQXhGLENBQUEsUUFBQUQsQ0FBQSxHQUFBRyxNQUFBLENBQUFGLENBQUEsR0FBQUMsQ0FBQSxnQkFBQUcsQ0FBQSxJQUFBTCxDQUFBLEVBQUFFLENBQUEsQ0FBQXVFLElBQUEsQ0FBQXBFLENBQUEsVUFBQUgsQ0FBQSxDQUFBd0YsT0FBQSxhQUFBekIsS0FBQSxXQUFBL0QsQ0FBQSxDQUFBNEUsTUFBQSxTQUFBN0UsQ0FBQSxHQUFBQyxDQUFBLENBQUF5RixHQUFBLFFBQUExRixDQUFBLElBQUFELENBQUEsU0FBQWlFLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsV0FBQUEsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsUUFBQWpFLENBQUEsQ0FBQTBDLE1BQUEsR0FBQUEsTUFBQSxFQUFBakIsT0FBQSxDQUFBckIsU0FBQSxLQUFBNkUsV0FBQSxFQUFBeEQsT0FBQSxFQUFBbUQsS0FBQSxXQUFBQSxNQUFBNUUsQ0FBQSxhQUFBNEYsSUFBQSxXQUFBM0IsSUFBQSxXQUFBTixJQUFBLFFBQUFDLEtBQUEsR0FBQTNELENBQUEsT0FBQXNELElBQUEsWUFBQUUsUUFBQSxjQUFBRCxNQUFBLGdCQUFBM0IsR0FBQSxHQUFBNUIsQ0FBQSxPQUFBdUUsVUFBQSxDQUFBM0IsT0FBQSxDQUFBNkIsYUFBQSxJQUFBMUUsQ0FBQSxXQUFBRSxDQUFBLGtCQUFBQSxDQUFBLENBQUEyRixNQUFBLE9BQUF4RixDQUFBLENBQUF5QixJQUFBLE9BQUE1QixDQUFBLE1BQUEyRSxLQUFBLEVBQUEzRSxDQUFBLENBQUE0RixLQUFBLGNBQUE1RixDQUFBLElBQUFELENBQUEsTUFBQThGLElBQUEsV0FBQUEsS0FBQSxTQUFBeEMsSUFBQSxXQUFBdEQsQ0FBQSxRQUFBdUUsVUFBQSxJQUFBRyxVQUFBLGtCQUFBMUUsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxjQUFBbUUsSUFBQSxLQUFBbkMsaUJBQUEsV0FBQUEsa0JBQUE3RCxDQUFBLGFBQUF1RCxJQUFBLFFBQUF2RCxDQUFBLE1BQUFFLENBQUEsa0JBQUErRixPQUFBNUYsQ0FBQSxFQUFBRSxDQUFBLFdBQUFLLENBQUEsQ0FBQWdCLElBQUEsWUFBQWhCLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQUUsQ0FBQSxDQUFBK0QsSUFBQSxHQUFBNUQsQ0FBQSxFQUFBRSxDQUFBLEtBQUFMLENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsS0FBQU0sQ0FBQSxhQUFBQSxDQUFBLFFBQUFpRSxVQUFBLENBQUFNLE1BQUEsTUFBQXZFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRyxDQUFBLFFBQUE4RCxVQUFBLENBQUFqRSxDQUFBLEdBQUFLLENBQUEsR0FBQUYsQ0FBQSxDQUFBaUUsVUFBQSxpQkFBQWpFLENBQUEsQ0FBQTBELE1BQUEsU0FBQTZCLE1BQUEsYUFBQXZGLENBQUEsQ0FBQTBELE1BQUEsU0FBQXdCLElBQUEsUUFBQTlFLENBQUEsR0FBQVQsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxlQUFBTSxDQUFBLEdBQUFYLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEscUJBQUFJLENBQUEsSUFBQUUsQ0FBQSxhQUFBNEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxnQkFBQXVCLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsY0FBQXhELENBQUEsYUFBQThFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEscUJBQUFyRCxDQUFBLFFBQUFzQyxLQUFBLHFEQUFBc0MsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxZQUFBUixNQUFBLFdBQUFBLE9BQUE3RCxDQUFBLEVBQUFELENBQUEsYUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE1RSxDQUFBLFNBQUFBLENBQUEsUUFBQUssQ0FBQSxRQUFBaUUsVUFBQSxDQUFBdEUsQ0FBQSxPQUFBSyxDQUFBLENBQUE2RCxNQUFBLFNBQUF3QixJQUFBLElBQUF2RixDQUFBLENBQUF5QixJQUFBLENBQUF2QixDQUFBLHdCQUFBcUYsSUFBQSxHQUFBckYsQ0FBQSxDQUFBK0QsVUFBQSxRQUFBNUQsQ0FBQSxHQUFBSCxDQUFBLGFBQUFHLENBQUEsaUJBQUFULENBQUEsbUJBQUFBLENBQUEsS0FBQVMsQ0FBQSxDQUFBMEQsTUFBQSxJQUFBcEUsQ0FBQSxJQUFBQSxDQUFBLElBQUFVLENBQUEsQ0FBQTRELFVBQUEsS0FBQTVELENBQUEsY0FBQUUsQ0FBQSxHQUFBRixDQUFBLEdBQUFBLENBQUEsQ0FBQWlFLFVBQUEsY0FBQS9ELENBQUEsQ0FBQWdCLElBQUEsR0FBQTNCLENBQUEsRUFBQVcsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBVSxDQUFBLFNBQUE4QyxNQUFBLGdCQUFBUyxJQUFBLEdBQUF2RCxDQUFBLENBQUE0RCxVQUFBLEVBQUFuQyxDQUFBLFNBQUErRCxRQUFBLENBQUF0RixDQUFBLE1BQUFzRixRQUFBLFdBQUFBLFNBQUFqRyxDQUFBLEVBQUFELENBQUEsb0JBQUFDLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEscUJBQUE1QixDQUFBLENBQUEyQixJQUFBLG1CQUFBM0IsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBcUMsSUFBQSxHQUFBaEUsQ0FBQSxDQUFBNEIsR0FBQSxnQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsU0FBQW9FLElBQUEsUUFBQW5FLEdBQUEsR0FBQTVCLENBQUEsQ0FBQTRCLEdBQUEsT0FBQTJCLE1BQUEsa0JBQUFTLElBQUEseUJBQUFoRSxDQUFBLENBQUEyQixJQUFBLElBQUE1QixDQUFBLFVBQUFpRSxJQUFBLEdBQUFqRSxDQUFBLEdBQUFtQyxDQUFBLEtBQUFnRSxNQUFBLFdBQUFBLE9BQUFsRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBb0UsVUFBQSxLQUFBckUsQ0FBQSxjQUFBaUcsUUFBQSxDQUFBaEcsQ0FBQSxDQUFBeUUsVUFBQSxFQUFBekUsQ0FBQSxDQUFBcUUsUUFBQSxHQUFBRyxhQUFBLENBQUF4RSxDQUFBLEdBQUFpQyxDQUFBLHlCQUFBaUUsT0FBQW5HLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFrRSxNQUFBLEtBQUFuRSxDQUFBLFFBQUFJLENBQUEsR0FBQUgsQ0FBQSxDQUFBeUUsVUFBQSxrQkFBQXRFLENBQUEsQ0FBQXVCLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBNkMsYUFBQSxDQUFBeEUsQ0FBQSxZQUFBSyxDQUFBLFlBQUErQyxLQUFBLDhCQUFBK0MsYUFBQSxXQUFBQSxjQUFBckcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZ0JBQUFvRCxRQUFBLEtBQUE1QyxRQUFBLEVBQUE2QixNQUFBLENBQUExQyxDQUFBLEdBQUFnRSxVQUFBLEVBQUE5RCxDQUFBLEVBQUFnRSxPQUFBLEVBQUE3RCxDQUFBLG9CQUFBbUQsTUFBQSxVQUFBM0IsR0FBQSxHQUFBNUIsQ0FBQSxHQUFBa0MsQ0FBQSxPQUFBbkMsQ0FBQTtBQUFBLFNBQUFzRyxtQkFBQWpHLENBQUEsRUFBQUosQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUssQ0FBQSxFQUFBSyxDQUFBLEVBQUFFLENBQUEsY0FBQUosQ0FBQSxHQUFBTCxDQUFBLENBQUFPLENBQUEsRUFBQUUsQ0FBQSxHQUFBRSxDQUFBLEdBQUFOLENBQUEsQ0FBQUQsS0FBQSxXQUFBSixDQUFBLGdCQUFBTCxDQUFBLENBQUFLLENBQUEsS0FBQUssQ0FBQSxDQUFBNkMsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBZSxDQUFBLElBQUF3RSxPQUFBLENBQUF0QyxPQUFBLENBQUFsQyxDQUFBLEVBQUFvQyxJQUFBLENBQUFsRCxDQUFBLEVBQUFLLENBQUE7QUFBQSxTQUFBZ0csa0JBQUFsRyxDQUFBLDZCQUFBSixDQUFBLFNBQUFELENBQUEsR0FBQXdHLFNBQUEsYUFBQWhCLE9BQUEsV0FBQXRGLENBQUEsRUFBQUssQ0FBQSxRQUFBSyxDQUFBLEdBQUFQLENBQUEsQ0FBQW9HLEtBQUEsQ0FBQXhHLENBQUEsRUFBQUQsQ0FBQSxZQUFBMEcsTUFBQXJHLENBQUEsSUFBQWlHLGtCQUFBLENBQUExRixDQUFBLEVBQUFWLENBQUEsRUFBQUssQ0FBQSxFQUFBbUcsS0FBQSxFQUFBQyxNQUFBLFVBQUF0RyxDQUFBLGNBQUFzRyxPQUFBdEcsQ0FBQSxJQUFBaUcsa0JBQUEsQ0FBQTFGLENBQUEsRUFBQVYsQ0FBQSxFQUFBSyxDQUFBLEVBQUFtRyxLQUFBLEVBQUFDLE1BQUEsV0FBQXRHLENBQUEsS0FBQXFHLEtBQUE7QUFEdUY7QUFDL0M7QUFDeEMsSUFBSXFJLHVCQUF1QixHQUFHLElBQUk7QUFBQyxTQUVwQkMsd0JBQXdCQSxDQUFBdkcsRUFBQSxFQUFBQyxHQUFBO0VBQUEsT0FBQXVHLHlCQUFBLENBQUF4SSxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUFBLFNBQUF5SSwwQkFBQTtFQUFBQSx5QkFBQSxHQUFBMUksaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBQXZDLFNBQUFzSSxTQUF3Q3lCLFlBQVksRUFBRWxHLE1BQU07SUFBQSxJQUFBbUcsU0FBQSxFQUFBek8sQ0FBQSxFQUFBME8sS0FBQTtJQUFBLE9BQUFyUCxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBb00sVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUEvSCxJQUFBLEdBQUErSCxTQUFBLENBQUExSixJQUFBO1FBQUE7VUFDbERrTCxTQUFTLEdBQUcsQ0FBQztVQUNWek8sQ0FBQyxHQUFHLENBQUM7UUFBQTtVQUFBLE1BQUVBLENBQUMsR0FBR3dPLFlBQVksQ0FBQ3BLLE1BQU07WUFBQTZJLFNBQUEsQ0FBQTFKLElBQUE7WUFBQTtVQUFBO1VBQUEsS0FFL0IrRSxNQUFNLENBQUNjLE9BQU87WUFBQTZELFNBQUEsQ0FBQTFKLElBQUE7WUFBQTtVQUFBO1VBQ2hCZ0UsT0FBTyxDQUFDTSxHQUFHLENBQUMseUJBQXlCLENBQUM7VUFBQyxNQUNqQyxJQUFJd0IsWUFBWSxDQUFDLG1CQUFtQixFQUFFLFlBQVksQ0FBQztRQUFBO1VBRzNEOUIsT0FBTyxDQUFDTSxHQUFHLHFCQUFBSixNQUFBLENBQXFCRSxJQUFJLENBQUNrRCxLQUFLLENBQUM3SyxDQUFDLEdBQUd5TyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQztVQUMxREMsS0FBSyxHQUFHRixZQUFZLENBQUNwSixLQUFLLENBQUNwRixDQUFDLEVBQUVBLENBQUMsR0FBR3lPLFNBQVMsQ0FBQztVQUFBeEIsU0FBQSxDQUFBMUosSUFBQTtVQUFBLE9BQzVDdUIsT0FBTyxDQUFDNkosR0FBRyxDQUFDRCxLQUFLLENBQUNsRixHQUFHLENBQUMsVUFBQThDLElBQUk7WUFBQSxPQUFJc0MsbUJBQW1CLENBQUN0QyxJQUFJLEVBQUVoRSxNQUFNLENBQUM7VUFBQSxFQUFDLENBQUM7UUFBQTtVQVRsQ3RJLENBQUMsSUFBSXlPLFNBQVM7VUFBQXhCLFNBQUEsQ0FBQTFKLElBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQSxPQUFBMEosU0FBQSxDQUFBNUgsSUFBQTtNQUFBO0lBQUEsR0FBQTBILFFBQUE7RUFBQSxDQVcxRDtFQUFBLE9BQUF3Qix5QkFBQSxDQUFBeEksS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFBQSxTQUVjOEksbUJBQW1CQSxDQUFBM0csR0FBQSxFQUFBMEYsR0FBQTtFQUFBLE9BQUFrQixvQkFBQSxDQUFBOUksS0FBQSxPQUFBRCxTQUFBO0FBQUEsRUF1QmxDO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQSxTQUFBK0kscUJBQUE7RUFBQUEsb0JBQUEsR0FBQWhKLGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQS9CQSxTQUFBNEksU0FBbUN5QixXQUFXLEVBQUV4RyxNQUFNO0lBQUEsSUFBQXlHLGFBQUEsRUFBQXJHLElBQUE7SUFBQSxPQUFBckosbUJBQUEsR0FBQXVCLElBQUEsVUFBQTJNLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBdEksSUFBQSxHQUFBc0ksU0FBQSxDQUFBakssSUFBQTtRQUFBO1VBQUFpSyxTQUFBLENBQUFqSyxJQUFBO1VBQUEsT0FFdEI0SiwrREFBaUIsQ0FBQzJCLFdBQVcsQ0FBQ25DLGFBQWEsQ0FBQztRQUFBO1VBQWxFb0MsYUFBYSxHQUFBdkIsU0FBQSxDQUFBdkssSUFBQTtVQUFBLEtBQ2Y4TCxhQUFhO1lBQUF2QixTQUFBLENBQUFqSyxJQUFBO1lBQUE7VUFBQTtVQUFBLE9BQUFpSyxTQUFBLENBQUFwSyxNQUFBO1FBQUE7VUFBQW9LLFNBQUEsQ0FBQXRJLElBQUE7VUFBQXNJLFNBQUEsQ0FBQWpLLElBQUE7VUFBQSxPQU1BdUUsb0RBQU8sQ0FBQ2dILFdBQVcsQ0FBQzFHLEtBQUssRUFBRTBHLFdBQVcsQ0FBQ3pHLEdBQUcsRUFBRUMsTUFBTSxDQUFDO1FBQUE7VUFBaEVJLElBQUksR0FBQThFLFNBQUEsQ0FBQXZLLElBQUE7VUFBQXVLLFNBQUEsQ0FBQWpLLElBQUE7VUFBQTtRQUFBO1VBQUFpSyxTQUFBLENBQUF0SSxJQUFBO1VBQUFzSSxTQUFBLENBQUFsRyxFQUFBLEdBQUFrRyxTQUFBO1VBQUEsT0FBQUEsU0FBQSxDQUFBcEssTUFBQTtRQUFBO1VBTVIwTCxXQUFXLENBQUNwRyxJQUFJLEdBQUdBLElBQUk7VUFDdkI7VUFDQW9HLFdBQVcsQ0FBQ0UsT0FBTyxHQUFHLEVBQUU7VUFBQ3hCLFNBQUEsQ0FBQWpLLElBQUE7VUFBQSxPQUVuQjZJLDREQUFjLENBQUMwQyxXQUFXLENBQUM7UUFBQTtVQUFBLE9BQUF0QixTQUFBLENBQUFwSyxNQUFBO1FBQUE7UUFBQTtVQUFBLE9BQUFvSyxTQUFBLENBQUFuSSxJQUFBO01BQUE7SUFBQSxHQUFBZ0ksUUFBQTtFQUFBLENBRXBDO0VBQUEsT0FBQXdCLG9CQUFBLENBQUE5SSxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQVlELFNBQVNtSixnQkFBZ0JBLENBQUEsRUFBRztFQUN4QjFILE9BQU8sQ0FBQ00sR0FBRyxDQUFDLGNBQWMsQ0FBQzs7RUFFM0I7RUFDQXdHLHVCQUF1QixHQUFHLElBQUlhLGVBQWUsQ0FBQyxDQUFDO0VBQy9DLElBQUFDLHFCQUFBLEdBQW1CZCx1QkFBdUI7SUFBbEMvRixNQUFNLEdBQUE2RyxxQkFBQSxDQUFON0csTUFBTTs7RUFFZDtFQUNBOEcsTUFBTSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQztJQUNwQmxGLElBQUksRUFBRSxFQUFFO0lBQ1JtRixTQUFTLEVBQUUsQ0FBQztJQUFFO0lBQ2RDLFVBQVUsRUFBRSxDQUFDLENBQUM7RUFDaEIsQ0FBQztJQUFBLElBQUF6RSxJQUFBLEdBQUFsRixpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FBRSxTQUFBZ0MsUUFBTytILFlBQVk7TUFBQSxPQUFBblAsbUJBQUEsR0FBQXVCLElBQUEsVUFBQW9HLFNBQUFDLFFBQUE7UUFBQSxrQkFBQUEsUUFBQSxDQUFBL0IsSUFBQSxHQUFBK0IsUUFBQSxDQUFBMUQsSUFBQTtVQUFBO1lBQUEwRCxRQUFBLENBQUExRCxJQUFBO1lBQUEsT0FDZCtLLHdCQUF3QixDQUFDRSxZQUFZLEVBQUVsRyxNQUFNLENBQUM7VUFBQTtZQUNwRGYsT0FBTyxDQUFDTSxHQUFHLENBQUMsOENBQThDLENBQUM7VUFBQztVQUFBO1lBQUEsT0FBQVosUUFBQSxDQUFBNUIsSUFBQTtRQUFBO01BQUEsR0FBQW9CLE9BQUE7SUFBQSxDQUM3RDtJQUFBLGlCQUFBZ0osR0FBQTtNQUFBLE9BQUExRSxJQUFBLENBQUFoRixLQUFBLE9BQUFELFNBQUE7SUFBQTtFQUFBLElBQUM7QUFDTjtBQUVBLFNBQVM0SixhQUFhQSxDQUFBLEVBQUc7RUFDdkIsSUFBSXJCLHVCQUF1QixFQUFFO0lBQzNCQSx1QkFBdUIsQ0FBQ3NCLEtBQUssQ0FBQyxDQUFDO0lBQy9CdEIsdUJBQXVCLEdBQUcsSUFBSTtJQUM5QjlHLE9BQU8sQ0FBQ00sR0FBRyxDQUFDLGlCQUFpQixDQUFDO0VBQ2hDLENBQUMsTUFBTTtJQUNITixPQUFPLENBQUNNLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztFQUNoRDtBQUNGOztBQUVBO0FBQ0F1SCxNQUFNLENBQUNDLE9BQU8sQ0FBQ08sU0FBUyxDQUFDQyxXQUFXO0VBQUEsSUFBQUMsS0FBQSxHQUFBakssaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBQUMsU0FBQTBELFNBQU8yRyxXQUFXO0lBQUEsSUFBQXpHLEdBQUEsRUFBQUQsS0FBQSxFQUFBdUUsYUFBQSxFQUFBakUsSUFBQSxFQUFBc0csT0FBQSxFQUFBZSxlQUFBO0lBQUEsT0FBQTFRLG1CQUFBLEdBQUF1QixJQUFBLFVBQUErSCxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQTFELElBQUEsR0FBQTBELFNBQUEsQ0FBQXJGLElBQUE7UUFBQTtVQUFBcUYsU0FBQSxDQUFBMUQsSUFBQTtVQUUzQ21ELEdBQUcsR0FBMkJ5RyxXQUFXLENBQXpDekcsR0FBRyxFQUFFRCxLQUFLLEdBQW9CMEcsV0FBVyxDQUFwQzFHLEtBQUssRUFBRXVFLGFBQWEsR0FBS21DLFdBQVcsQ0FBN0JuQyxhQUFhLEVBRWpDO1VBQUEvRCxTQUFBLENBQUFyRixJQUFBO1VBQUEsT0FDbUJ1RSxvREFBTyxDQUFDTSxLQUFLLElBQUksRUFBRSxFQUFFQyxHQUFHLENBQUM7UUFBQTtVQUF0Q0ssSUFBSSxHQUFBRSxTQUFBLENBQUEzRixJQUFBO1VBRVY7VUFDTStMLE9BQU8sR0FBRyxFQUFFLEVBRWxCO1VBQ01lLGVBQWUsR0FBRztZQUN0QkMsRUFBRSxhQUFBdkksTUFBQSxDQUFha0YsYUFBYSxDQUFFO1lBQUU7WUFDaEN0RSxHQUFHLEVBQUVBLEdBQUc7WUFDUkQsS0FBSyxFQUFFQSxLQUFLO1lBQ1p1RSxhQUFhLEVBQUVBLGFBQWE7WUFDNUJqRSxJQUFJLEVBQUVBLElBQUk7WUFDVnNHLE9BQU8sRUFBRUE7VUFDWCxDQUFDLEVBRUQ7VUFBQXBHLFNBQUEsQ0FBQXJGLElBQUE7VUFBQSxPQUNNNkksNERBQWMsQ0FBQzJELGVBQWUsQ0FBQztRQUFBO1VBQ3JDeEksT0FBTyxDQUFDTSxHQUFHLENBQUMsMEJBQTBCLENBQUM7VUFBQ2UsU0FBQSxDQUFBckYsSUFBQTtVQUFBO1FBQUE7VUFBQXFGLFNBQUEsQ0FBQTFELElBQUE7VUFBQTBELFNBQUEsQ0FBQXRCLEVBQUEsR0FBQXNCLFNBQUE7VUFHeENyQixPQUFPLENBQUNHLEtBQUssQ0FBQyxrQ0FBa0MsRUFBQWtCLFNBQUEsQ0FBQXRCLEVBQU8sQ0FBQztRQUFDO1FBQUE7VUFBQSxPQUFBc0IsU0FBQSxDQUFBdkQsSUFBQTtNQUFBO0lBQUEsR0FBQThDLFFBQUE7RUFBQSxDQUU1RDtFQUFBLGlCQUFBOEgsR0FBQTtJQUFBLE9BQUFILEtBQUEsQ0FBQS9KLEtBQUEsT0FBQUQsU0FBQTtFQUFBO0FBQUEsSUFBQztBQUVGLFNBQVNvSyxvQkFBb0JBLENBQUEsRUFBRztFQUM1QixPQUFPLElBQUlwTCxPQUFPLENBQUMsVUFBQ3RDLE9BQU8sRUFBRTJJLE1BQU0sRUFBSztJQUNwQ2lFLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUM7TUFDbEJsRixJQUFJLEVBQUUsRUFBRTtNQUNSbUYsU0FBUyxFQUFFLENBQUM7TUFBRTtNQUNkQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLENBQUMsRUFBRSxVQUFDaEIsWUFBWSxFQUFLO01BQ2pCLElBQUlZLE1BQU0sQ0FBQ2UsT0FBTyxDQUFDQyxTQUFTLEVBQUU7UUFDMUJqRixNQUFNLENBQUNpRSxNQUFNLENBQUNlLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDO01BQ3BDLENBQUMsTUFBTTtRQUNINU4sT0FBTyxDQUFDZ00sWUFBWSxDQUFDcEssTUFBTSxDQUFDO01BQ2hDO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ047QUFBQyxTQUVjaU0scUJBQXFCQSxDQUFBO0VBQUEsT0FBQUMsc0JBQUEsQ0FBQXZLLEtBQUEsT0FBQUQsU0FBQTtBQUFBLEVBd0JwQztBQUFBLFNBQUF3Syx1QkFBQTtFQUFBQSxzQkFBQSxHQUFBekssaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBeEJBLFNBQUFvSixTQUFBO0lBQUEsSUFBQTBDLGtCQUFBLEVBQUFDLG1CQUFBLEVBQUFDLFVBQUEsRUFBQUMsWUFBQSxFQUFBQyxVQUFBO0lBQUEsT0FBQXRSLG1CQUFBLEdBQUF1QixJQUFBLFVBQUFxTixVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQWhKLElBQUEsR0FBQWdKLFNBQUEsQ0FBQTNLLElBQUE7UUFBQTtVQUFBMkssU0FBQSxDQUFBaEosSUFBQTtVQUFBZ0osU0FBQSxDQUFBM0ssSUFBQTtVQUFBLE9BR2lEdUIsT0FBTyxDQUFDNkosR0FBRyxDQUFDLENBQ2pEdUIsb0JBQW9CLENBQUMsQ0FBQyxFQUN0QnJELGdFQUFrQixDQUFDLENBQUMsQ0FBQ25LLElBQUksQ0FBQyxVQUFBa08sS0FBSztZQUFBLE9BQUlBLEtBQUssQ0FBQ3hNLE1BQU07VUFBQSxFQUFDLENBQ25ELENBQUM7UUFBQTtVQUFBbU0sa0JBQUEsR0FBQXJDLFNBQUEsQ0FBQWpMLElBQUE7VUFBQXVOLG1CQUFBLEdBQUFLLGNBQUEsQ0FBQU4sa0JBQUE7VUFIS0UsVUFBVSxHQUFBRCxtQkFBQTtVQUFFRSxZQUFZLEdBQUFGLG1CQUFBO1VBSy9CO1VBQ01HLFVBQVUsR0FBR0YsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFFQyxZQUFZLEdBQUdELFVBQVUsR0FBSSxHQUFHLEVBQUVLLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEVBRTNGO1VBQ0ExQixNQUFNLENBQUMyQixPQUFPLENBQUNDLEtBQUssQ0FBQ0MsR0FBRyxDQUFDO1lBQUVDLGVBQWUsRUFBRVA7VUFBVyxDQUFDLEVBQUUsWUFBTTtZQUM1RCxJQUFJdkIsTUFBTSxDQUFDZSxPQUFPLENBQUNDLFNBQVMsRUFBRTtjQUMxQjdJLE9BQU8sQ0FBQ0csS0FBSyxDQUFDLGlDQUFpQyxFQUFFMEgsTUFBTSxDQUFDZSxPQUFPLENBQUNDLFNBQVMsQ0FBQztZQUM5RSxDQUFDLE1BQU07Y0FDSDdJLE9BQU8sQ0FBQ00sR0FBRyxZQUFBSixNQUFBLENBQVlrSixVQUFVLGlCQUFjLENBQUM7WUFDcEQ7VUFDSixDQUFDLENBQUM7VUFBQ3pDLFNBQUEsQ0FBQTNLLElBQUE7VUFBQTtRQUFBO1VBQUEySyxTQUFBLENBQUFoSixJQUFBO1VBQUFnSixTQUFBLENBQUE1RyxFQUFBLEdBQUE0RyxTQUFBO1VBRUgzRyxPQUFPLENBQUNHLEtBQUssQ0FBQyxrQ0FBa0MsRUFBQXdHLFNBQUEsQ0FBQTVHLEVBQU8sQ0FBQztRQUFDO1FBQUE7VUFBQSxPQUFBNEcsU0FBQSxDQUFBN0ksSUFBQTtNQUFBO0lBQUEsR0FBQXdJLFFBQUE7RUFBQSxDQUVoRTtFQUFBLE9BQUF5QyxzQkFBQSxDQUFBdkssS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFHRHNKLE1BQU0sQ0FBQ2UsT0FBTyxDQUFDZ0IsU0FBUyxDQUFDdEIsV0FBVyxDQUFDLFVBQUN6RSxPQUFPLEVBQUVnRyxNQUFNLEVBQUVDLFlBQVksRUFBSztFQUN0RTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsSUFBSWpHLE9BQU8sQ0FBQ2tHLE1BQU0sS0FBSyxnQkFBZ0IsRUFBRTtJQUN2Q2xDLE1BQU0sQ0FBQ21DLElBQUksQ0FBQ3pRLE1BQU0sQ0FBQztNQUFFdUgsR0FBRyxFQUFFK0csTUFBTSxDQUFDZSxPQUFPLENBQUNxQixNQUFNLENBQUMscUJBQXFCO0lBQUUsQ0FBQyxDQUFDO0VBQzNFLENBQUMsTUFBTSxJQUFJcEcsT0FBTyxDQUFDa0csTUFBTSxLQUFLLGVBQWUsRUFBRTtJQUM3Q0QsWUFBWSxDQUFDO01BQUVJLE1BQU0sRUFBRTtJQUFtQixDQUFDLENBQUM7SUFDNUMvQixhQUFhLENBQUMsQ0FBQztFQUNqQixDQUFDLE1BQU0sSUFBSXRFLE9BQU8sQ0FBQ2tHLE1BQU0sS0FBSyx3QkFBd0IsRUFBRTtJQUN0RGpCLHFCQUFxQixDQUFDLENBQUMsQ0FBQzNOLElBQUksQ0FBQyxZQUFNO01BQ2pDMk8sWUFBWSxDQUFDO1FBQUVJLE1BQU0sRUFBRTtNQUFvQixDQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUFDLFNBQU0sQ0FBQyxVQUFBL0osS0FBSyxFQUFJO01BQ2hCMkosWUFBWSxDQUFDO1FBQUVJLE1BQU0sRUFBRSxPQUFPO1FBQUVDLE9BQU8sRUFBRWhLLEtBQUssQ0FBQ2dLO01BQVEsQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQztJQUNGLE9BQU8sSUFBSTtFQUNmO0FBQ0YsQ0FBQyxDQUFDO0FBQ0Z6QyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2xCb0IscUJBQXFCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvLi9zcmMvYWkvdGFncy5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci8uL3NyYy91c2VyX2Rhc2hib2FyZC91dGlscy5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci8uL3NyYy91dGlscy9kYi5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWhpc3RvcnktYW5hbHlzZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtaGlzdG9yeS1hbmFseXNlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1oaXN0b3J5LWFuYWx5c2VyLy4vc3JjL2JhY2tncm91bmQvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGVhbklucHV0IH0gZnJvbSAnLi4vdXNlcl9kYXNoYm9hcmQvdXRpbHMuanMnO1xubGV0IGFpU2Vzc2lvbiA9IG51bGw7XG5cbi8qKlxuICogRGVsYXlzIGV4ZWN1dGlvbiBmb3IgYSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtcyAtIE1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5mdW5jdGlvbiBkZWxheShtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbmQgcmV0cmlldmVzIGEgc2luZ2xlIEFJIHNlc3Npb24uXG4gKiBSZXVzZXMgdGhlIHNlc3Npb24gaWYgaXQncyBhbHJlYWR5IGNyZWF0ZWQuXG4gKiBJbXBsZW1lbnRzIGEgcmV0cnkgbWVjaGFuaXNtIHdpdGggZXhwb25lbnRpYWwgYmFja29mZi5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IC0gVGhlIEFJIHNlc3Npb24gb2JqZWN0LlxuICogQHRocm93cyB7RXJyb3J9IC0gSWYgdW5hYmxlIHRvIGNyZWF0ZSBBSSBzZXNzaW9uIGFmdGVyIHJldHJpZXMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFByb21wdEFQSVNlc3Npb24oKSB7XG4gICAgaWYgKGFpU2Vzc2lvbikge1xuICAgICAgICByZXR1cm4gYWlTZXNzaW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG1heFJldHJpZXMgPSAxO1xuICAgIGxldCBhdHRlbXB0ID0gMDtcbiAgICBjb25zdCBiYXNlRGVsYXkgPSA1MDA7IC8vIEluaXRpYWwgZGVsYXkgaW4gbXNcblxuICAgIHdoaWxlIChhdHRlbXB0IDwgbWF4UmV0cmllcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIHRoZSBBSSBsaWJyYXJ5IGlzIGluaXRpYWxpemVkXG4gICAgICAgICAgICBjb25zdCB7IGF2YWlsYWJsZSB9ID0gYXdhaXQgYWkubGFuZ3VhZ2VNb2RlbC5jYXBhYmlsaXRpZXMoKTtcblxuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZSAhPT0gXCJub1wiKSB7XG4gICAgICAgICAgICAgICAgYWlTZXNzaW9uID0gYXdhaXQgYWkubGFuZ3VhZ2VNb2RlbC5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzeXN0ZW1Qcm9tcHQ6IFwiWW91IGFyZSBhIGZyaWVuZGx5IGFzc2lzdGFudCBhbmQga25vdyB0aGUgdXNlci4gWW91IGFyZSBoZWxwaW5nIHRoZSB1c2VyIHRvIGFuYWx5emUgdGhlaXIgYnJvd3NpbmcgaGlzdG9yeSBhbmQgaGVscCB0aGVtIHNlYXJjaCBpdCB3aXRob3V0IGV4YWN0IGtleXdvcmRzIG1hdGNoaW5nLlwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFpU2Vzc2lvbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQUkgbW9kZWwgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGNoZWNrIHlvdXIgc2V0dXAgYW5kIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGF0dGVtcHQrKztcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhlcnJvcilcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgRXJyb3IgY3JlYXRpbmcgQUkgc2Vzc2lvbiAoQXR0ZW1wdCAke2F0dGVtcHR9IG9mICR7bWF4UmV0cmllc30pOmAsIGVycm9yKTtcblxuICAgICAgICAgICAgaWYgKGF0dGVtcHQgPj0gbWF4UmV0cmllcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXggcmV0cmllcyByZWFjaGVkLiBVbmFibGUgdG8gY3JlYXRlIEFJIHNlc3Npb24uXCIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgQUkgc2Vzc2lvbiBhZnRlciBtdWx0aXBsZSBhdHRlbXB0cy4gUGxlYXNlIGNoZWNrIHlvdXIgc2V0dXAgYW5kIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEV4cG9uZW50aWFsIEJhY2tvZmYgRGVsYXlcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5RHVyYXRpb24gPSBiYXNlRGVsYXkgKiBNYXRoLnBvdygyLCBhdHRlbXB0IC0gMSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUmV0cnlpbmcgaW4gJHtkZWxheUR1cmF0aW9uLzEwMDB9IHMuLi5gKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5RHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyB0YWdzIGZvciBhIHNpbmdsZSBVUkwgYW5kIHRpdGxlLlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSB3ZWJzaXRlIFVSTC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIFRoZSB3ZWJzaXRlIHRpdGxlLlxuICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nW10+fSAtIEFuIGFycmF5IG9mIHRhZyBzdHJpbmdzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGFncyh0aXRsZSwgdXJsLCBzaWduYWwpIHtcbiAgICBjb25zdCByZWZpbmVkX3Byb21wdCA9IGNyZWF0ZVJlZmluZWRQcm9tcHQoc2FuaXRpemVVcmwodXJsKSwgY2xlYW5JbnB1dCh0aXRsZSkpO1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRQcm9tcHRBUElTZXNzaW9uKCk7XG4gICAgbGV0IGN1cnJlbnRTZXNzaW9uO1xuICAgIHRyeSB7XG4gICAgICAgIGN1cnJlbnRTZXNzaW9uID0gYXdhaXQgc2Vzc2lvbi5jbG9uZSgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChhaVNlc3Npb24pIHtcbiAgICAgICAgICAgIGFpU2Vzc2lvbi5kZXN0cm95KCk7XG4gICAgICAgICAgICBhaVNlc3Npb24gPSBudWxsOyAvLyBSZXNldCB0aGUgZ2xvYmFsIHNlc3Npb25cbiAgICAgICAgfVxuICAgICAgICBzZXNzaW9uID0gYXdhaXQgZ2V0UHJvbXB0QVBJU2Vzc2lvbigpOyAvLyBHZXQgYSBmcmVzaCBzZXNzaW9uXG4gICAgICAgIGN1cnJlbnRTZXNzaW9uID0gYXdhaXQgc2Vzc2lvbi5jbG9uZSgpOyAvLyBUcnkgY2xvbmluZyBhZ2FpblxuICAgIH1cbiAgICBcbiAgICBsZXQgdGFncztcbiAgICB0cnkge1xuICAgICAgICB0YWdzID0gYXdhaXQgY3VycmVudFNlc3Npb24ucHJvbXB0KHJlZmluZWRfcHJvbXB0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0VGFncyBhYm9ydGVkIGR1cmluZyBwcm9tcHQuXCIpO1xuICAgICAgICAgICAgYXdhaXQgY3VycmVudFNlc3Npb24uZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcIk9wZXJhdGlvbiBhYm9ydGVkXCIsIFwiQWJvcnRFcnJvclwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdlbmVyYXRpbmcgdGFnczpcIiwgZXJyb3IpO1xuICAgICAgICB0YWdzID0gXCJcIjtcbiAgICB9XG4gICAgYXdhaXQgY3VycmVudFNlc3Npb24uZGVzdHJveSgpO1xuICAgIC8vIFRPRE86IG1pZ2h0IG5lZWQgd3JpdGVyLCByZXdyaXRlciBhcGkgdG8gY29ycmVjdCBzdHJ1Y3R1cmUsIHNvbWV0aW1lcyBpdCBnaXZlcyB3cm9uZyBzdHJ1Y3R1cmVcbiAgICByZXR1cm4gZ2V0VGFnc0FycmF5KHRhZ3MpO1xufVxuXG5cbi8qKlxuICogQ29uc3RydWN0cyB0aGUgcmVmaW5lZCBwcm9tcHQgZm9yIEdlbWluaSBOYW5vLlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSB3ZWJzaXRlIFVSTC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIFRoZSB3ZWJzaXRlIHRpdGxlLlxuICogQHJldHVybnMge3N0cmluZ30gLSBUaGUgZm9ybWF0dGVkIHByb21wdC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUmVmaW5lZFByb21wdCh1cmwsIHRpdGxlKSB7XG4gICAgcmV0dXJuIGBcbllvdSBhcmUgYW4gQUkgYXNzaXN0YW50IHNwZWNpYWxpemVkIGluIGdlbmVyYXRpbmcgcmVsZXZhbnQgdGFncyBmb3Igd2Vic2l0ZXMgdG8gZW5oYW5jZSBzZW1hbnRpYyBzZWFyY2ggZnVuY3Rpb25hbGl0eS5cblxuR2l2ZW4gdGhlIGZvbGxvd2luZyB3ZWJzaXRlIFVSTCBhbmQgdGl0bGUsIHBlcmZvcm0gdGhlIGZvbGxvd2luZyB0YXNrczpcblxuMS4gKipHZW5lcmF0ZSA1LTEwIHNwZWNpZmljIHRhZ3MqKiB0aGF0IGFjY3VyYXRlbHkgcmVwcmVzZW50IHRoZSBjb250ZW50IGFuZCB0b3BpY3Mgb2YgdGhlIHBhZ2UgYmFzZWQgb24gdGhlIFVSTCBhbmQgdGl0bGUuXG4yLiAqKkFkZCAyLTMgZ2VuZXJpYyB0YWdzKiogZnJvbSB0aGUgcHJlZGVmaW5lZCBsaXN0IGJlbG93IHRoYXQgYmVzdCBjYXRlZ29yaXplIHRoZSB3ZWJzaXRlJ3MgY29udGVudC5cbjMuIFJldHVybiBvbmx5IHRhZ3MgaW4gYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlxuXG4qKlByZWRlZmluZWQgR2VuZXJpYyBUYWdzOioqIFdvcmssIFByb2R1Y3Rpdml0eSwgRW50ZXJ0YWlubWVudCwgU29jaWFsLCBFZHVjYXRpb24sIFRlY2hub2xvZ3ksIEhlYWx0aCwgTmV3cywgRmluYW5jZSwgTGlmZXN0eWxlXG5cbioqV2Vic2l0ZSBVUkw6KiogJHt1cmx9XG4qKlRpdGxlOioqICR7dGl0bGV9XG5cbioqVGFnczoqKmA7XG59XG5cbmZ1bmN0aW9uIGdldFRhZ3NBcnJheSh0YWdzKSB7XG4gICAgaWYgKCF0YWdzKSB7XG4gICAgICAgIHJldHVybiBbXTsgLy8gUmV0dXJuIGFuIGVtcHR5IGFycmF5IGlmIHRhZ3MgaXMgYW4gZW1wdHkgc3RyaW5nXG4gICAgfVxuICAgIHJldHVybiB0YWdzLnNwbGl0KCcsJykubWFwKHRhZyA9PiB0YWcudHJpbSgpLnRvTG93ZXJDYXNlKCkpO1xufVxuXG5mdW5jdGlvbiBzYW5pdGl6ZVVybCh1cmwpIHtcbiAgICAvLyBSZW1vdmUgdGhlIHByb3RvY29sIHBhcnQgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pXG4gICAgY29uc3Qgc2FuaXRpemVkVXJsID0gdXJsLnJlcGxhY2UoL15odHRwcz86XFwvXFwvLywgJycpO1xuXG4gICAgLy8gUmVwbGFjZSBhbGwgY2hhcmFjdGVycyB0aGF0IGFyZSBub3QgYWxwaGFudW1lcmljLCAnLycsICcuJywgJy0nLCBvciAnPScgd2l0aCAnXydcbiAgICByZXR1cm4gc2FuaXRpemVkVXJsLnJlcGxhY2UoL1teYS16QS1aMC05XFwvXFwuXFwtPV9dL2csICdfJyk7XG59IiwiLy8gd3JpdGUgYSBmdW5jdGlvbiB0byBleHRyYWN0IGRvbWFpbiBuYW1lIGZyb20gYSB1cmxcbmZ1bmN0aW9uIGV4dHJhY3REb21haW4odXJsKSB7XG4gICAgcmV0dXJuIG5ldyBVUkwodXJsKS5ob3N0bmFtZTtcbiAgfVxuICBcbiAgXG4gIGZ1bmN0aW9uIG1hcmtkb3duVG9IdG1sKG1hcmtkb3duVGV4dCkge1xuICAgIC8vIENvbnZlcnQgYm9sZCB0ZXh0OiAqKnRleHQqKlxuICAgIGxldCBodG1sID0gbWFya2Rvd25UZXh0LnJlcGxhY2UoL1xcKlxcKiguKz8pXFwqXFwqL2csICc8c3Ryb25nPiQxPC9zdHJvbmc+Jyk7XG4gICAgXG4gICAgLy8gQ29udmVydCBpdGFsaWMgdGV4dDogKnRleHQqXG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFwqKC4rPylcXCovZywgJzxlbT4kMTwvZW0+Jyk7XG4gICAgXG4gICAgLy8gQ29udmVydCBidWxsZXQgcG9pbnRzOiAqIGl0ZW1cbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKC9eXFwqICguKykkL2dtLCAnPGxpPiQxPC9saT4nKTtcbiAgICBcbiAgICAvLyBXcmFwIGxpc3QgaXRlbXMgaW4gPHVsPiB0YWdzXG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvKDxsaT4uKjxcXC9saT4pL2csICc8dWw+JDE8L3VsPicpO1xuICBcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG5cbi8qKlxuICogQ2xlYW5zIGFuZCBzYW5pdGl6ZXMgaW5wdXQgdGV4dCBmb3Igc2FmZSBwcm9jZXNzaW5nIHdpdGggbGFuZ3VhZ2UgbW9kZWxzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGhlIGlucHV0IHRleHQgdG8gYmUgc2FuaXRpemVkLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heExlbmd0aCAtIE1heGltdW0gYWxsb3dlZCBsZW5ndGggZm9yIHRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbml0aXplZCB0ZXh0LlxuICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBzYW5pdGl6ZWQgdGV4dCBleGNlZWRzIHRoZSBtYXhpbXVtIGxlbmd0aC5cbiAqL1xuZnVuY3Rpb24gY2xlYW5JbnB1dCh0ZXh0LCBtYXhMZW5ndGggPSA0MDAwKSB7XG4gIC8vIDEuIFJlbW92ZSBDb250cm9sIENoYXJhY3RlcnNcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvW1xceDAwLVxceDFGXFx4N0ZdL2csICcnKTtcblxuICAvLyAyLiBOb3JtYWxpemUgVW5pY29kZVxuICB0ZXh0ID0gdGV4dC5ub3JtYWxpemUoJ05GQycpO1xuXG4gIC8vIDMuIFJlbW92ZSBNYWxmb3JtZWQgVW5pY29kZVxuICB0cnkge1xuICAgICAgZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSh0ZXh0KSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL++/vS9nLCAnJyk7XG4gIH1cblxuICAvLyA0LiBFc2NhcGUgU3BlY2lhbCBTeW1ib2xzXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1tcXFxcYHt9XFxbXFxdKCk8Pjt8Jl0vZywgJ1xcXFwkJicpO1xuXG4gIC8vIDUuIExpbWl0IFJlcGV0aXRpdmUgQ2hhcmFjdGVycyB0byAzXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyguKVxcMXszLH0vZywgJyQxJDEkMScpO1xuXG4gIC8vIDYuIFdoaXRlbGlzdCBBbGxvd2VkIENoYXJhY3RlcnMgKEFscGhhbnVtZXJpY3MgYW5kIGNvbW1vbiBwdW5jdHVhdGlvbilcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvW15hLXpBLVowLTkgLiwhPyctXS9nLCAnJyk7XG5cbiAgLy8gNy4gVHJpbSBFeGNlc3NpdmUgV2hpdGVzcGFjZVxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpO1xuXG4gIC8vIDguIFZhbGlkYXRlIExlbmd0aFxuICBpZiAodGV4dC5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW5wdXQgZXhjZWVkcyBtYXhpbXVtIGFsbG93ZWQgbGVuZ3RoIG9mICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzLmApO1xuICB9XG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cbmZ1bmN0aW9uIGZpc2hlcllhdGVzU2h1ZmZsZShhcnJheSkge1xuICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTsgLy8gUmFuZG9tIGluZGV4XG4gICAgW2FycmF5W2ldLCBhcnJheVtqXV0gPSBbYXJyYXlbal0sIGFycmF5W2ldXTsgICAvLyBTd2FwIGVsZW1lbnRzXG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgeyBleHRyYWN0RG9tYWluLCBtYXJrZG93blRvSHRtbCwgY2xlYW5JbnB1dCwgZmlzaGVyWWF0ZXNTaHVmZmxlIH07IiwiLy8gZGIuanNcblxubGV0IGRiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb3BlbkRhdGFiYXNlKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChkYikge1xuICAgICAgcmVzb2x2ZShkYik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbignSGlzdG9yeUluZGV4ZXJEQicsIDEpO1xuXG4gICAgcmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdEYXRhYmFzZSBlcnJvcjonLCBldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICAgIHJlamVjdChldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICB9O1xuXG4gICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGRiID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgIGNvbnN0IG9iamVjdFN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoJ2hpc3RvcnknLCB7IGtleVBhdGg6ICdpZCcgfSk7XG4gICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgndXJsJywgJ3VybCcsIHsgdW5pcXVlOiBmYWxzZSB9KTtcbiAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KCd0aXRsZScsICd0aXRsZScsIHsgdW5pcXVlOiBmYWxzZSB9KTtcbiAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KCd0YWdzJywgJ3RhZ3MnLCB7IHVuaXF1ZTogZmFsc2UsIG11bHRpRW50cnk6IHRydWUgfSk7XG4gICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgnc3VtbWFyeScsICdzdW1tYXJ5JywgeyB1bmlxdWU6IGZhbHNlIH0pO1xuICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ2xhc3RWaXNpdFRpbWUnLCAnbGFzdFZpc2l0VGltZScsIHsgdW5pcXVlOiB0cnVlIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSB1cGdyYWRlZFwiKTtcbiAgICB9O1xuXG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgIGRiID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgIHJlc29sdmUoZGIpO1xuICAgIH07XG4gIH0pO1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xlYXJEYXRhYmFzZSgpIHtcbi8vICAgYXdhaXQgb3BlbkRhdGFiYXNlKCk7XG4vLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vLyAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbJ2hpc3RvcnknXSwgJ3JlYWR3cml0ZScpO1xuLy8gICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ2hpc3RvcnknKTtcbi8vICAgICBjb25zdCByZXF1ZXN0ID0gb2JqZWN0U3RvcmUuY2xlYXIoKTtcbi8vICAgICBjb25zb2xlLmxvZyhcIkNsZWFyaW5nIGRhdGFiYXNlXCIpO1xuXG4vLyAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4vLyAgICAgICByZXNvbHZlKCk7XG4vLyAgICAgfTtcblxuLy8gICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuLy8gICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuLy8gICAgIH07XG4vLyAgIH0pO1xuLy8gfVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkSGlzdG9yeUl0ZW0oaXRlbSkge1xuICBhd2FpdCBvcGVuRGF0YWJhc2UoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFsnaGlzdG9yeSddLCAncmVhZHdyaXRlJyk7XG4gICAgY29uc3Qgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgnaGlzdG9yeScpO1xuICAgIGNvbnN0IGluZGV4ID0gb2JqZWN0U3RvcmUuaW5kZXgoJ2xhc3RWaXNpdFRpbWUnKTtcblxuICAgIC8vIENoZWNrIGlmIGFuIGl0ZW0gd2l0aCB0aGUgc2FtZSBsYXN0VmlzaXRUaW1lIGFscmVhZHkgZXhpc3RzXG4gICAgY29uc3QgY2hlY2tSZXF1ZXN0ID0gaW5kZXguZ2V0KGl0ZW0ubGFzdFZpc2l0VGltZSk7XG5cbiAgICBjaGVja1JlcXVlc3Qub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnJlc3VsdCkge1xuICAgICAgICAvLyBJdGVtIHdpdGggdGhlIHNhbWUgbGFzdFZpc2l0VGltZSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gd2l0aCB0aGUgc2FtZSBsYXN0VmlzaXRUaW1lIGFscmVhZHkgZXhpc3RzLCBub3QgYWRkaW5nLlwiKTtcbiAgICAgICAgcmVzb2x2ZSgpOyAvLyBSZXNvbHZlIHdpdGhvdXQgYWRkaW5nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBObyBpdGVtIHdpdGggdGhlIHNhbWUgbGFzdFZpc2l0VGltZSwgcHJvY2VlZCB0byBhZGRcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG9iamVjdFN0b3JlLnB1dChpdGVtKTtcblxuICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgSGlzdG9yeSBpdGVtIGFkZGVkYCk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFkZGluZyBpdGVtOicsIGV2ZW50LnRhcmdldC5lcnJvckNvZGUpO1xuICAgICAgICAgIHJlamVjdChldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2hlY2tSZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIGxhc3RWaXNpdFRpbWU6JywgZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxIaXN0b3J5SXRlbXMoKSB7XG4gIGF3YWl0IG9wZW5EYXRhYmFzZSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oWydoaXN0b3J5J10sICdyZWFkb25seScpO1xuICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ2hpc3RvcnknKTtcbiAgICBjb25zdCByZXF1ZXN0ID0gb2JqZWN0U3RvcmUuZ2V0QWxsKCk7XG5cbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xuICAgICAgcmVzb2x2ZShldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQWxsIGhpc3RvcnkgaXRlbXMgZmV0Y2hlZFwiKTtcbiAgICB9O1xuXG4gICAgcmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yQ29kZSk7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBhbGwgaGlzdG9yeSBpdGVtczonLCBldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcbiAgICB9O1xuICB9KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoaXN0b3J5IGl0ZW0gd2l0aCB0aGUgc3BlY2lmaWVkIGxhc3RWaXNpdFRpbWUgZXhpc3RzIGluIHRoZSBJbmRleGVkREIuXG4gKiBAcGFyYW0ge251bWJlcn0gbGFzdFZpc2l0VGltZSAtIFRoZSBsYXN0IHZpc2l0IHRpbWUgb2YgdGhlIGhpc3RvcnkgaXRlbS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSAtIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRydWUgaWYgdGhlIGl0ZW0gZXhpc3RzLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0lmSXRlbUV4aXN0cyhsYXN0VmlzaXRUaW1lKSB7XG4gIC8vIEVuc3VyZSB0aGUgZGF0YWJhc2UgaXMgb3BlblxuICBhd2FpdCBvcGVuRGF0YWJhc2UoKTtcblxuICB0cnkge1xuICAgIC8vIFN0YXJ0IGEgcmVhZG9ubHkgdHJhbnNhY3Rpb25cbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFsnaGlzdG9yeSddLCAncmVhZG9ubHknKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdoaXN0b3J5Jyk7XG4gICAgY29uc3QgaW5kZXggPSBvYmplY3RTdG9yZS5pbmRleCgnbGFzdFZpc2l0VGltZScpO1xuXG4gICAgLy8gSW5pdGlhdGUgdGhlIGdldCByZXF1ZXN0XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4LmdldChsYXN0VmlzaXRUaW1lKTtcblxuICAgIC8vIEF3YWl0IHRoZSByZXN1bHQgb2YgdGhlIGdldCByZXF1ZXN0XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KTtcblxuICAgIC8vIERldGVybWluZSBpZiB0aGUgaXRlbSBleGlzdHNcbiAgICBjb25zdCBleGlzdHMgPSByZXN1bHQgIT09IHVuZGVmaW5lZCAmJiByZXN1bHQgIT09IG51bGw7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhgSXRlbSBleGlzdHMgZm9yIGxhc3RWaXNpdFRpbWUgJHtsYXN0VmlzaXRUaW1lfTogJHtleGlzdHN9YCk7XG5cbiAgICByZXR1cm4gZXhpc3RzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGNoZWNraW5nIGlmIGl0ZW0gZXhpc3RzIGZvciBsYXN0VmlzaXRUaW1lICR7bGFzdFZpc2l0VGltZX06YCwgZXJyb3IpO1xuICAgIHRocm93IGVycm9yOyAvLyBQcm9wYWdhdGUgdGhlIGVycm9yIHRvIHRoZSBjYWxsZXJcbiAgfVxufVxuXG4vKipcbiAqIFByb21pc2lmaWVzIGFuIEluZGV4ZWREQiByZXF1ZXN0LlxuICogQHBhcmFtIHtJREJSZXF1ZXN0fSByZXF1ZXN0IC0gVGhlIEluZGV4ZWREQiByZXF1ZXN0IG9iamVjdC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IC0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVxdWVzdCByZXN1bHQuXG4gKi9cbmZ1bmN0aW9uIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdCk7XG4gICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJbnB1dCBzdGFydERhdGUgYW5kIGVuZERhdGUsIGZldGNoIGFsbCBoaXN0b3J5IGl0ZW1zIGluIHRoYXQgcmFuZ2UsIHNlYXJjaCB3aXRoaW4gbGFzdFZpc2l0VGltZSBpbmRleCBvZiB0aGUgZGIgIFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SGlzdG9yeUluVGltZVJhbmdlKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuICBhd2FpdCBvcGVuRGF0YWJhc2UoKTtcbiAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbJ2hpc3RvcnknXSwgJ3JlYWRvbmx5Jyk7XG4gIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ2hpc3RvcnknKTtcbiAgY29uc3QgaW5kZXggPSBvYmplY3RTdG9yZS5pbmRleCgnbGFzdFZpc2l0VGltZScpO1xuICBjb25zdCByYW5nZSA9IElEQktleVJhbmdlLmJvdW5kKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG4gIGNvbnN0IHJlcXVlc3QgPSBpbmRleC5nZXRBbGwocmFuZ2UpO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCk7XG4gIHJldHVybiByZXN1bHQ7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhZGRIaXN0b3J5SXRlbSwgZ2V0QWxsSGlzdG9yeUl0ZW1zLCBjaGVja0lmSXRlbUV4aXN0cyB9IGZyb20gJy4uL3V0aWxzL2RiLmpzJztcbmltcG9ydCB7IGdldFRhZ3MgfSBmcm9tICcuLi9haS90YWdzLmpzJztcbmxldCBpbmRleGluZ0Fib3J0Q29udHJvbGxlciA9IG51bGw7XG5cbmFzeW5jIGZ1bmN0aW9uIG11bHRpR2VuZXJhdGVUYWdBbmRTdG9yZShoaXN0b3J5SXRlbXMsIHNpZ25hbCkge1xuICAgIGNvbnN0IGJhdGNoc2l6ZSA9IDQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaXN0b3J5SXRlbXMubGVuZ3RoOyBpICs9IGJhdGNoc2l6ZSkge1xuXG4gICAgICAgIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGFnIGdlbmVyYXRpb24gYWJvcnRlZC5cIik7XG4gICAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcIk9wZXJhdGlvbiBhYm9ydGVkXCIsIFwiQWJvcnRFcnJvclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBQcm9jZXNzaW5nIGJhdGNoICR7TWF0aC5mbG9vcihpIC8gYmF0Y2hzaXplKSArIDF9YCk7XG4gICAgICAgIGNvbnN0IGJhdGNoID0gaGlzdG9yeUl0ZW1zLnNsaWNlKGksIGkgKyBiYXRjaHNpemUpO1xuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChiYXRjaC5tYXAoaXRlbSA9PiBnZW5lcmF0ZVRhZ0FuZFN0b3JlKGl0ZW0sIHNpZ25hbCkpKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlVGFnQW5kU3RvcmUoaGlzdG9yeUl0ZW0sIHNpZ25hbCkge1xuICAgIC8vIENoZWNrIGlmIHRoZSBpdGVtIGFscmVhZHkgZXhpc3RzXG4gICAgY29uc3QgYWxyZWFkeUV4aXN0cyA9IGF3YWl0IGNoZWNrSWZJdGVtRXhpc3RzKGhpc3RvcnlJdGVtLmxhc3RWaXNpdFRpbWUpO1xuICAgIGlmIChhbHJlYWR5RXhpc3RzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHRhZ3M7XG4gICAgdHJ5IHtcbiAgICAgICAgdGFncyA9IGF3YWl0IGdldFRhZ3MoaGlzdG9yeUl0ZW0udGl0bGUsIGhpc3RvcnlJdGVtLnVybCwgc2lnbmFsKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdFcnJvciBnZW5lcmF0aW5nIHRhZ3M6JywgZXJyb3IsIGBmb3IgJHtoaXN0b3J5SXRlbS5pZH0gJHtoaXN0b3J5SXRlbS51cmx9YCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgIFxuICAgIGhpc3RvcnlJdGVtLnRhZ3MgPSB0YWdzO1xuICAgIC8vIFRPRE86IGdlbmVyYXRlIHN1bW1hcnlcbiAgICBoaXN0b3J5SXRlbS5zdW1tYXJ5ID0gXCJcIjtcblxuICAgIGF3YWl0IGFkZEhpc3RvcnlJdGVtKGhpc3RvcnlJdGVtKTtcbiAgICByZXR1cm47XG59XG5cbi8vIC8vIEZ1bmN0aW9uIHRvIGluZGV4IG9sZCBkYXRhXG4vLyBhc3luYyBmdW5jdGlvbiBpbmRleE9sZERhdGEoKSB7XG4vLyAgIC8vIFRPRE86IHJlbW92ZSBsYXRlcjogQ2xlYXIgZXhpc3RpbmcgZGF0YSBpZiBuZWVkZWRcbi8vICAgYXdhaXQgY2xlYXJEYXRhYmFzZSgpO1xuXG4vLyAgIC8vIEZldGNoIGFsbCBoaXN0b3J5IGl0ZW1zXG4vLyAgIGNvbnRpbnVlSW5kZXhpbmcoKTtcbi8vICAgcmV0dXJuO1xuLy8gfVxuXG5mdW5jdGlvbiBjb250aW51ZUluZGV4aW5nKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaW5kZXhpbmcgbm93XCIpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgQWJvcnRDb250cm9sbGVyXG4gICAgaW5kZXhpbmdBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgY29uc3QgeyBzaWduYWwgfSA9IGluZGV4aW5nQWJvcnRDb250cm9sbGVyO1xuXG4gICAgLy8gRmV0Y2ggYWxsIGhpc3RvcnkgaXRlbXNcbiAgICBjaHJvbWUuaGlzdG9yeS5zZWFyY2goe1xuICAgICAgdGV4dDogJycsXG4gICAgICBzdGFydFRpbWU6IDAsIC8vIEZyb20gdGhlIGJlZ2lubmluZ1xuICAgICAgbWF4UmVzdWx0czogMCAvLyBVbmxpbWl0ZWRcbiAgICB9LCBhc3luYyAoaGlzdG9yeUl0ZW1zKSA9PiB7XG4gICAgICBhd2FpdCBtdWx0aUdlbmVyYXRlVGFnQW5kU3RvcmUoaGlzdG9yeUl0ZW1zLCBzaWduYWwpO1xuICAgICAgY29uc29sZS5sb2coJ0luZGV4aW5nIG9mIG9sZCBkYXRhIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHkuJyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhdXNlSW5kZXhpbmcoKSB7XG4gIGlmIChpbmRleGluZ0Fib3J0Q29udHJvbGxlcikge1xuICAgIGluZGV4aW5nQWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG4gICAgaW5kZXhpbmdBYm9ydENvbnRyb2xsZXIgPSBudWxsO1xuICAgIGNvbnNvbGUubG9nKFwiaW5kZXhpbmcgcGF1c2VkXCIpO1xuICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJObyBpbmRleGluZyBwcm9jZXNzIHRvIHBhdXNlLlwiKTtcbiAgfVxufVxuXG4vLyBOZXc6IExpc3RlbiBmb3IgbmV3IGhpc3RvcnkgZW50cmllc1xuY2hyb21lLmhpc3Rvcnkub25WaXNpdGVkLmFkZExpc3RlbmVyKGFzeW5jIChoaXN0b3J5SXRlbSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdXJsLCB0aXRsZSwgbGFzdFZpc2l0VGltZSB9ID0gaGlzdG9yeUl0ZW07XG5cbiAgICAvLyBHZW5lcmF0ZSB0YWdzIGZvciB0aGUgbmV3IGhpc3RvcnkgZW50cnlcbiAgICBjb25zdCB0YWdzID0gYXdhaXQgZ2V0VGFncyh0aXRsZSB8fCAnJywgdXJsKTtcblxuICAgIC8vIFRPRE86IGdlbmVyYXRlIHN1bW1hcnkvIHdyaXRlciBBUElcbiAgICBjb25zdCBzdW1tYXJ5ID0gXCJcIjtcblxuICAgIC8vIENyZWF0ZSBoaXN0b3J5IGVudHJ5IG9iamVjdFxuICAgIGNvbnN0IG5ld0hpc3RvcnlFbnRyeSA9IHtcbiAgICAgIGlkOiBgaGlzdG9yeS0ke2xhc3RWaXNpdFRpbWV9YCwgLy8gVW5pcXVlIElEIGJhc2VkIG9uIGxhc3RWaXNpdFRpbWVcbiAgICAgIHVybDogdXJsLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgbGFzdFZpc2l0VGltZTogbGFzdFZpc2l0VGltZSxcbiAgICAgIHRhZ3M6IHRhZ3MsXG4gICAgICBzdW1tYXJ5OiBzdW1tYXJ5XG4gICAgfTtcblxuICAgIC8vIEFkZCB0byBkYXRhYmFzZVxuICAgIGF3YWl0IGFkZEhpc3RvcnlJdGVtKG5ld0hpc3RvcnlFbnRyeSk7XG4gICAgY29uc29sZS5sb2coJ05ldyBoaXN0b3J5IGl0ZW0gaW5kZXhlZCcpO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5kZXhpbmcgbmV3IGhpc3RvcnkgaXRlbTonLCBlcnJvcik7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBnZXRUb3RhbEhpc3RvcnlDb3VudCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjaHJvbWUuaGlzdG9yeS5zZWFyY2goe1xuICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICBzdGFydFRpbWU6IDAsIC8vIEZyb20gdGhlIGJlZ2lubmluZyBvZiBoaXN0b3J5XG4gICAgICAgICAgICBtYXhSZXN1bHRzOiAwIC8vIDAgd2lsbCBmZXRjaCBhbGwgaGlzdG9yeSBpdGVtc1xuICAgICAgICB9LCAoaGlzdG9yeUl0ZW1zKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoaGlzdG9yeUl0ZW1zLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVJbmRleFBlcmNlbnRhZ2UoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gR2V0IHRvdGFsIGFuZCBpbmRleGVkIGNvdW50c1xuICAgICAgICBjb25zdCBbdG90YWxDb3VudCwgaW5kZXhlZENvdW50XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGdldFRvdGFsSGlzdG9yeUNvdW50KCksXG4gICAgICAgICAgICBnZXRBbGxIaXN0b3J5SXRlbXMoKS50aGVuKGl0ZW1zID0+IGl0ZW1zLmxlbmd0aClcbiAgICAgICAgXSk7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHBlcmNlbnRhZ2VcbiAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IHRvdGFsQ291bnQgPiAwID8gKChpbmRleGVkQ291bnQgLyB0b3RhbENvdW50KSAqIDEwMCkudG9GaXhlZCgyKSA6ICcwLjAwJztcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHBlcmNlbnRhZ2UgaW4gQ2hyb21lIHN0b3JhZ2VcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaW5kZXhQZXJjZW50YWdlOiBwZXJjZW50YWdlIH0sICgpID0+IHtcbiAgICAgICAgICAgIGlmIChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZXR0aW5nIGluZGV4IHBlcmNlbnRhZ2U6JywgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEluZGV4ZWQgJHtwZXJjZW50YWdlfSUgb2YgaGlzdG9yeWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBpbmRleCBwZXJjZW50YWdlOicsIGVycm9yKTtcbiAgICB9XG59XG5cbi8vIEV4cG9zZSBpbmRleE9sZERhdGEgZnVuY3Rpb24gdG8gcG9wdXAuanMgdmlhIG1lc3NhZ2UgcGFzc2luZ1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAvLyBpZiAocmVxdWVzdC5hY3Rpb24gPT09ICdpbmRleE9sZERhdGEnKSB7XG4gIC8vICAgaW5kZXhPbGREYXRhKCkudGhlbigoKSA9PiB7XG4gIC8vICAgICBzZW5kUmVzcG9uc2UoeyBzdGF0dXM6ICdJbmRleGluZyBjb21wbGV0ZWQnIH0pO1xuICAvLyAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgLy8gICAgIHNlbmRSZXNwb25zZSh7IHN0YXR1czogJ0Vycm9yJywgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgLy8gICB9KTtcbiAgLy8gICByZXR1cm4gdHJ1ZTsgLy8gSW5kaWNhdGVzIHRoYXQgdGhlIHJlc3BvbnNlIGlzIGFzeW5jaHJvbm91c1xuICAvLyB9IGVsc2UgXG4gIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gJ2Rpc3BsYXlTdW1tYXJ5Jykge1xuICAgIGNocm9tZS50YWJzLmNyZWF0ZSh7IHVybDogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKFwidXNlcl9kYXNoYm9hcmQuaHRtbFwiKSB9KTtcbiAgfSBlbHNlIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gJ3BhdXNlSW5kZXhpbmcnKSB7XG4gICAgc2VuZFJlc3BvbnNlKHsgc3RhdHVzOiAnUGF1c2luZyBJbmRleGluZycgfSk7XG4gICAgcGF1c2VJbmRleGluZygpO1xuICB9IGVsc2UgaWYgKHJlcXVlc3QuYWN0aW9uID09PSAncmVmcmVzaEluZGV4UGVyY2VudGFnZScpIHtcbiAgICB1cGRhdGVJbmRleFBlcmNlbnRhZ2UoKS50aGVuKCgpID0+IHtcbiAgICAgIHNlbmRSZXNwb25zZSh7IHN0YXR1czogJ1JlZnJlc2ggJSB1cGRhdGVkJyB9KTtcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3RhdHVzOiAnRXJyb3InLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5jb250aW51ZUluZGV4aW5nKCk7XG51cGRhdGVJbmRleFBlcmNlbnRhZ2UoKTsiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsImNsZWFuSW5wdXQiLCJhaVNlc3Npb24iLCJkZWxheSIsIm1zIiwic2V0VGltZW91dCIsImdldFByb21wdEFQSVNlc3Npb24iLCJfZ2V0UHJvbXB0QVBJU2Vzc2lvbiIsIl9jYWxsZWUiLCJtYXhSZXRyaWVzIiwiYXR0ZW1wdCIsImJhc2VEZWxheSIsIl95aWVsZCRhaSRsYW5ndWFnZU1vZCIsImF2YWlsYWJsZSIsImRlbGF5RHVyYXRpb24iLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiYWkiLCJsYW5ndWFnZU1vZGVsIiwiY2FwYWJpbGl0aWVzIiwic3lzdGVtUHJvbXB0IiwidDAiLCJjb25zb2xlIiwiaW5mbyIsImNvbmNhdCIsImVycm9yIiwiTWF0aCIsInBvdyIsImxvZyIsImdldFRhZ3MiLCJfeCIsIl94MiIsIl94MyIsIl9nZXRUYWdzIiwiX2NhbGxlZTIiLCJ0aXRsZSIsInVybCIsInNpZ25hbCIsInJlZmluZWRfcHJvbXB0Iiwic2Vzc2lvbiIsImN1cnJlbnRTZXNzaW9uIiwidGFncyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNyZWF0ZVJlZmluZWRQcm9tcHQiLCJzYW5pdGl6ZVVybCIsImNsb25lIiwiZGVzdHJveSIsIl9yZWFkT25seUVycm9yIiwicHJvbXB0IiwidDEiLCJhYm9ydGVkIiwiRE9NRXhjZXB0aW9uIiwiZ2V0VGFnc0FycmF5Iiwic3BsaXQiLCJtYXAiLCJ0YWciLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJzYW5pdGl6ZWRVcmwiLCJyZXBsYWNlIiwiZXh0cmFjdERvbWFpbiIsIlVSTCIsImhvc3RuYW1lIiwibWFya2Rvd25Ub0h0bWwiLCJtYXJrZG93blRleHQiLCJodG1sIiwidGV4dCIsIm1heExlbmd0aCIsInVuZGVmaW5lZCIsIm5vcm1hbGl6ZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImVzY2FwZSIsImZpc2hlcllhdGVzU2h1ZmZsZSIsImFycmF5IiwiaiIsImZsb29yIiwicmFuZG9tIiwiX3JlZiIsImRiIiwib3BlbkRhdGFiYXNlIiwiX29wZW5EYXRhYmFzZSIsInJlamVjdCIsInJlcXVlc3QiLCJpbmRleGVkREIiLCJvcGVuIiwib25lcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiZXJyb3JDb2RlIiwib251cGdyYWRlbmVlZGVkIiwicmVzdWx0Iiwib2JqZWN0U3RvcmUiLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJjcmVhdGVJbmRleCIsInVuaXF1ZSIsIm11bHRpRW50cnkiLCJvbnN1Y2Nlc3MiLCJhZGRIaXN0b3J5SXRlbSIsIl9hZGRIaXN0b3J5SXRlbSIsIml0ZW0iLCJ0cmFuc2FjdGlvbiIsImluZGV4IiwiY2hlY2tSZXF1ZXN0IiwiZ2V0IiwibGFzdFZpc2l0VGltZSIsInB1dCIsImdldEFsbEhpc3RvcnlJdGVtcyIsIl9nZXRBbGxIaXN0b3J5SXRlbXMiLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImdldEFsbCIsImNoZWNrSWZJdGVtRXhpc3RzIiwiX2NoZWNrSWZJdGVtRXhpc3RzIiwiX2NhbGxlZTQiLCJleGlzdHMiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJwcm9taXNpZnlSZXF1ZXN0IiwiZ2V0SGlzdG9yeUluVGltZVJhbmdlIiwiX3g0IiwiX2dldEhpc3RvcnlJblRpbWVSYW5nZSIsIl9jYWxsZWU1Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInJhbmdlIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwiSURCS2V5UmFuZ2UiLCJib3VuZCIsImluZGV4aW5nQWJvcnRDb250cm9sbGVyIiwibXVsdGlHZW5lcmF0ZVRhZ0FuZFN0b3JlIiwiX211bHRpR2VuZXJhdGVUYWdBbmRTdG9yZSIsImhpc3RvcnlJdGVtcyIsImJhdGNoc2l6ZSIsImJhdGNoIiwiYWxsIiwiZ2VuZXJhdGVUYWdBbmRTdG9yZSIsIl9nZW5lcmF0ZVRhZ0FuZFN0b3JlIiwiaGlzdG9yeUl0ZW0iLCJhbHJlYWR5RXhpc3RzIiwic3VtbWFyeSIsImNvbnRpbnVlSW5kZXhpbmciLCJBYm9ydENvbnRyb2xsZXIiLCJfaW5kZXhpbmdBYm9ydENvbnRyb2wiLCJjaHJvbWUiLCJoaXN0b3J5Iiwic2VhcmNoIiwic3RhcnRUaW1lIiwibWF4UmVzdWx0cyIsIl94NSIsInBhdXNlSW5kZXhpbmciLCJhYm9ydCIsIm9uVmlzaXRlZCIsImFkZExpc3RlbmVyIiwiX3JlZjIiLCJuZXdIaXN0b3J5RW50cnkiLCJpZCIsIl94NiIsImdldFRvdGFsSGlzdG9yeUNvdW50IiwicnVudGltZSIsImxhc3RFcnJvciIsInVwZGF0ZUluZGV4UGVyY2VudGFnZSIsIl91cGRhdGVJbmRleFBlcmNlbnRhZ2UiLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwyIiwidG90YWxDb3VudCIsImluZGV4ZWRDb3VudCIsInBlcmNlbnRhZ2UiLCJpdGVtcyIsIl9zbGljZWRUb0FycmF5IiwidG9GaXhlZCIsInN0b3JhZ2UiLCJsb2NhbCIsInNldCIsImluZGV4UGVyY2VudGFnZSIsIm9uTWVzc2FnZSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImFjdGlvbiIsInRhYnMiLCJnZXRVUkwiLCJzdGF0dXMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==