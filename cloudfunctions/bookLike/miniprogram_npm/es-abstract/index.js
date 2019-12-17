module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { __MODS__[modId].m.exports.__proto__ = m.exports.__proto__; Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; var desp = Object.getOwnPropertyDescriptor(m.exports, k); if(desp && desp.configurable) Object.defineProperty(m.exports, k, { set: function(val) { __MODS__[modId].m.exports[k] = val; }, get: function() { return __MODS__[modId].m.exports[k]; } }); }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1576493738802, function(require, module, exports) {


var assign = require('./helpers/assign');

var ES5 = require('./es5');
var ES2015 = require('./es2015');
var ES2016 = require('./es2016');
var ES2017 = require('./es2017');
var ES2018 = require('./es2018');
var ES2019 = require('./es2019');

var ES = {
	ES5: ES5,
	ES6: ES2015,
	ES2015: ES2015,
	ES7: ES2016,
	ES2016: ES2016,
	ES2017: ES2017,
	ES2018: ES2018,
	ES2019: ES2019
};
assign(ES, ES5);
delete ES.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible
assign(ES, ES2015);

module.exports = ES;

}, function(modId) {var map = {"./helpers/assign":1576493738803,"./es5":1576493738805,"./es2015":1576493738858,"./es2016":1576493738976,"./es2017":1576493739090,"./es2018":1576493739203,"./es2019":1576493739323}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738803, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var has = require('has');

var $assign = GetIntrinsic('%Object%').assign;

module.exports = function assign(target, source) {
	if ($assign) {
		return $assign(target, source);
	}

	// eslint-disable-next-line no-restricted-syntax
	for (var key in source) {
		if (has(source, key)) {
			// eslint-disable-next-line no-param-reassign
			target[key] = source[key];
		}
	}
	return target;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738804, function(require, module, exports) {


/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = require('has-symbols')();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'$ %Array%': Array,
	'$ %ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'$ %ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'$ %ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'$ %ArrayPrototype%': Array.prototype,
	'$ %ArrayProto_entries%': Array.prototype.entries,
	'$ %ArrayProto_forEach%': Array.prototype.forEach,
	'$ %ArrayProto_keys%': Array.prototype.keys,
	'$ %ArrayProto_values%': Array.prototype.values,
	'$ %AsyncFromSyncIteratorPrototype%': undefined,
	'$ %AsyncFunction%': asyncFunction,
	'$ %AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'$ %AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'$ %AsyncGeneratorFunction%': asyncGenFunction,
	'$ %AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'$ %AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'$ %Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'$ %Boolean%': Boolean,
	'$ %BooleanPrototype%': Boolean.prototype,
	'$ %DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'$ %DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'$ %Date%': Date,
	'$ %DatePrototype%': Date.prototype,
	'$ %decodeURI%': decodeURI,
	'$ %decodeURIComponent%': decodeURIComponent,
	'$ %encodeURI%': encodeURI,
	'$ %encodeURIComponent%': encodeURIComponent,
	'$ %Error%': Error,
	'$ %ErrorPrototype%': Error.prototype,
	'$ %eval%': eval, // eslint-disable-line no-eval
	'$ %EvalError%': EvalError,
	'$ %EvalErrorPrototype%': EvalError.prototype,
	'$ %Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'$ %Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'$ %Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'$ %Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'$ %Function%': Function,
	'$ %FunctionPrototype%': Function.prototype,
	'$ %Generator%': generator ? getProto(generator()) : undefined,
	'$ %GeneratorFunction%': generatorFunction,
	'$ %GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'$ %Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'$ %Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'$ %Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'$ %Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'$ %Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'$ %Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'$ %isFinite%': isFinite,
	'$ %isNaN%': isNaN,
	'$ %IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'$ %JSON%': typeof JSON === 'object' ? JSON : undefined,
	'$ %JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'$ %Map%': typeof Map === 'undefined' ? undefined : Map,
	'$ %MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'$ %MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'$ %Math%': Math,
	'$ %Number%': Number,
	'$ %NumberPrototype%': Number.prototype,
	'$ %Object%': Object,
	'$ %ObjectPrototype%': Object.prototype,
	'$ %ObjProto_toString%': Object.prototype.toString,
	'$ %ObjProto_valueOf%': Object.prototype.valueOf,
	'$ %parseFloat%': parseFloat,
	'$ %parseInt%': parseInt,
	'$ %Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'$ %PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'$ %PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'$ %Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'$ %Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'$ %Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'$ %Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'$ %RangeError%': RangeError,
	'$ %RangeErrorPrototype%': RangeError.prototype,
	'$ %ReferenceError%': ReferenceError,
	'$ %ReferenceErrorPrototype%': ReferenceError.prototype,
	'$ %Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'$ %RegExp%': RegExp,
	'$ %RegExpPrototype%': RegExp.prototype,
	'$ %Set%': typeof Set === 'undefined' ? undefined : Set,
	'$ %SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'$ %SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'$ %SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'$ %SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'$ %String%': String,
	'$ %StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'$ %StringPrototype%': String.prototype,
	'$ %Symbol%': hasSymbols ? Symbol : undefined,
	'$ %SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'$ %SyntaxError%': SyntaxError,
	'$ %SyntaxErrorPrototype%': SyntaxError.prototype,
	'$ %ThrowTypeError%': ThrowTypeError,
	'$ %TypedArray%': TypedArray,
	'$ %TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'$ %TypeError%': $TypeError,
	'$ %TypeErrorPrototype%': $TypeError.prototype,
	'$ %Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'$ %Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'$ %Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'$ %Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'$ %Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'$ %Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'$ %Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'$ %Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'$ %URIError%': URIError,
	'$ %URIErrorPrototype%': URIError.prototype,
	'$ %WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'$ %WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'$ %WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'$ %WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = require('function-bind');
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var key = '$ ' + name;
	if (!(key in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[key] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[key];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	if (parts.length === 0) {
		return getBaseIntrinsic(name, allowMissing);
	}

	var value = getBaseIntrinsic('%' + parts[0] + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738805, function(require, module, exports) {


/* eslint global-require: 0 */

// https://es5.github.io/#x9
module.exports = {
	'Abstract Equality Comparison': require('./5/AbstractEqualityComparison'),
	'Abstract Relational Comparison': require('./5/AbstractRelationalComparison'),
	'Strict Equality Comparison': require('./5/StrictEqualityComparison'),
	CheckObjectCoercible: require('./5/CheckObjectCoercible'),
	DateFromTime: require('./5/DateFromTime'),
	Day: require('./5/Day'),
	DayFromYear: require('./5/DayFromYear'),
	DaysInYear: require('./5/DaysInYear'),
	DayWithinYear: require('./5/DayWithinYear'),
	FromPropertyDescriptor: require('./5/FromPropertyDescriptor'),
	HourFromTime: require('./5/HourFromTime'),
	InLeapYear: require('./5/InLeapYear'),
	IsAccessorDescriptor: require('./5/IsAccessorDescriptor'),
	IsCallable: require('./5/IsCallable'),
	IsDataDescriptor: require('./5/IsDataDescriptor'),
	IsGenericDescriptor: require('./5/IsGenericDescriptor'),
	IsPropertyDescriptor: require('./5/IsPropertyDescriptor'),
	MakeDate: require('./5/MakeDate'),
	MakeDay: require('./5/MakeDay'),
	MakeTime: require('./5/MakeTime'),
	MinFromTime: require('./5/MinFromTime'),
	modulo: require('./5/modulo'),
	MonthFromTime: require('./5/MonthFromTime'),
	msFromTime: require('./5/msFromTime'),
	SameValue: require('./5/SameValue'),
	SecFromTime: require('./5/SecFromTime'),
	TimeClip: require('./5/TimeClip'),
	TimeFromYear: require('./5/TimeFromYear'),
	TimeWithinDay: require('./5/TimeWithinDay'),
	ToBoolean: require('./5/ToBoolean'),
	ToInt32: require('./5/ToInt32'),
	ToInteger: require('./5/ToInteger'),
	ToNumber: require('./5/ToNumber'),
	ToObject: require('./5/ToObject'),
	ToPrimitive: require('./5/ToPrimitive'),
	ToPropertyDescriptor: require('./5/ToPropertyDescriptor'),
	ToString: require('./5/ToString'),
	ToUint16: require('./5/ToUint16'),
	ToUint32: require('./5/ToUint32'),
	Type: require('./5/Type'),
	WeekDay: require('./5/WeekDay'),
	YearFromTime: require('./5/YearFromTime')
};

}, function(modId) { var map = {"./5/AbstractEqualityComparison":1576493738806,"./5/AbstractRelationalComparison":1576493738810,"./5/StrictEqualityComparison":1576493738816,"./5/CheckObjectCoercible":1576493738817,"./5/DateFromTime":1576493738818,"./5/Day":1576493738820,"./5/DayFromYear":1576493738822,"./5/DaysInYear":1576493738825,"./5/DayWithinYear":1576493738819,"./5/FromPropertyDescriptor":1576493738828,"./5/HourFromTime":1576493738832,"./5/InLeapYear":1576493738824,"./5/IsAccessorDescriptor":1576493738831,"./5/IsCallable":1576493738833,"./5/IsDataDescriptor":1576493738829,"./5/IsGenericDescriptor":1576493738834,"./5/IsPropertyDescriptor":1576493738835,"./5/MakeDate":1576493738837,"./5/MakeDay":1576493738838,"./5/MakeTime":1576493738841,"./5/MinFromTime":1576493738842,"./5/modulo":1576493738843,"./5/MonthFromTime":1576493738827,"./5/msFromTime":1576493738844,"./5/SameValue":1576493738845,"./5/SecFromTime":1576493738846,"./5/TimeClip":1576493738847,"./5/TimeFromYear":1576493738848,"./5/TimeWithinDay":1576493738849,"./5/ToBoolean":1576493738850,"./5/ToInt32":1576493738851,"./5/ToInteger":1576493738839,"./5/ToNumber":1576493738807,"./5/ToObject":1576493738852,"./5/ToPrimitive":1576493738808,"./5/ToPropertyDescriptor":1576493738853,"./5/ToString":1576493738854,"./5/ToUint16":1576493738855,"./5/ToUint32":1576493738856,"./5/Type":1576493738809,"./5/WeekDay":1576493738857,"./5/YearFromTime":1576493738823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738806, function(require, module, exports) {


var ToNumber = require('./ToNumber');
var ToPrimitive = require('./ToPrimitive');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3

module.exports = function AbstractEqualityComparison(x, y) {
	var xType = Type(x);
	var yType = Type(y);
	if (xType === yType) {
		return x === y; // ES6+ specified this shortcut anyways.
	}
	if (x == null && y == null) {
		return true;
	}
	if (xType === 'Number' && yType === 'String') {
		return AbstractEqualityComparison(x, ToNumber(y));
	}
	if (xType === 'String' && yType === 'Number') {
		return AbstractEqualityComparison(ToNumber(x), y);
	}
	if (xType === 'Boolean') {
		return AbstractEqualityComparison(ToNumber(x), y);
	}
	if (yType === 'Boolean') {
		return AbstractEqualityComparison(x, ToNumber(y));
	}
	if ((xType === 'String' || xType === 'Number') && yType === 'Object') {
		return AbstractEqualityComparison(x, ToPrimitive(y));
	}
	if (xType === 'Object' && (yType === 'String' || yType === 'Number')) {
		return AbstractEqualityComparison(ToPrimitive(x), y);
	}
	return false;
};

}, function(modId) { var map = {"./ToNumber":1576493738807,"./ToPrimitive":1576493738808,"./Type":1576493738809}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738807, function(require, module, exports) {


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.3

module.exports = function ToNumber(value) {
	return +value; // eslint-disable-line no-implicit-coercion
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738808, function(require, module, exports) {


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.1

module.exports = require('es-to-primitive/es5');

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738809, function(require, module, exports) {


// https://www.ecma-international.org/ecma-262/5.1/#sec-8

module.exports = function Type(x) {
	if (x === null) {
		return 'Null';
	}
	if (typeof x === 'undefined') {
		return 'Undefined';
	}
	if (typeof x === 'function' || typeof x === 'object') {
		return 'Object';
	}
	if (typeof x === 'number') {
		return 'Number';
	}
	if (typeof x === 'boolean') {
		return 'Boolean';
	}
	if (typeof x === 'string') {
		return 'String';
	}
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738810, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Number = GetIntrinsic('%Number%');
var $TypeError = GetIntrinsic('%TypeError%');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var isPrefixOf = require('../helpers/isPrefixOf');

var ToNumber = require('./ToNumber');
var ToPrimitive = require('./ToPrimitive');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/5.1/#sec-11.8.5

// eslint-disable-next-line max-statements
module.exports = function AbstractRelationalComparison(x, y, LeftFirst) {
	if (Type(LeftFirst) !== 'Boolean') {
		throw new $TypeError('Assertion failed: LeftFirst argument must be a Boolean');
	}
	var px;
	var py;
	if (LeftFirst) {
		px = ToPrimitive(x, $Number);
		py = ToPrimitive(y, $Number);
	} else {
		py = ToPrimitive(y, $Number);
		px = ToPrimitive(x, $Number);
	}
	var bothStrings = Type(px) === 'String' && Type(py) === 'String';
	if (!bothStrings) {
		var nx = ToNumber(px);
		var ny = ToNumber(py);
		if ($isNaN(nx) || $isNaN(ny)) {
			return undefined;
		}
		if ($isFinite(nx) && $isFinite(ny) && nx === ny) {
			return false;
		}
		if (nx === 0 && ny === 0) {
			return false;
		}
		if (nx === Infinity) {
			return false;
		}
		if (ny === Infinity) {
			return true;
		}
		if (ny === -Infinity) {
			return false;
		}
		if (nx === -Infinity) {
			return true;
		}
		return nx < ny; // by now, these are both nonzero, finite, and not equal
	}
	if (isPrefixOf(py, px)) {
		return false;
	}
	if (isPrefixOf(px, py)) {
		return true;
	}
	return px < py; // both strings, neither a prefix of the other. shortcut for steps c-f
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812,"../helpers/isPrefixOf":1576493738813,"./ToNumber":1576493738807,"./ToPrimitive":1576493738808,"./Type":1576493738809}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738811, function(require, module, exports) {


module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738812, function(require, module, exports) {


var $isNaN = Number.isNaN || function (a) { return a !== a; };

module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738813, function(require, module, exports) {


var $strSlice = require('../helpers/callBound')('String.prototype.slice');

module.exports = function isPrefixOf(prefix, string) {
	if (prefix === string) {
		return true;
	}
	if (prefix.length > string.length) {
		return false;
	}
	return $strSlice(string, 0, prefix.length) === prefix;
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738814, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var callBind = require('./callBind');

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
		return callBind(intrinsic);
	}
	return intrinsic;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./callBind":1576493738815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738815, function(require, module, exports) {


var bind = require('function-bind');

var GetIntrinsic = require('../GetIntrinsic');

var $Function = GetIntrinsic('%Function%');
var $apply = $Function.apply;
var $call = $Function.call;

module.exports = function callBind() {
	return bind.apply($call, arguments);
};

module.exports.apply = function applyBind() {
	return bind.apply($apply, arguments);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738816, function(require, module, exports) {


var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6

module.exports = function StrictEqualityComparison(x, y) {
	var xType = Type(x);
	var yType = Type(y);
	if (xType !== yType) {
		return false;
	}
	if (xType === 'Undefined' || xType === 'Null') {
		return true;
	}
	return x === y; // shortcut for steps 4-7
};

}, function(modId) { var map = {"./Type":1576493738809}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738817, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.10

module.exports = function CheckObjectCoercible(value, optMessage) {
	if (value == null) {
		throw new $TypeError(optMessage || ('Cannot call method on ' + value));
	}
	return value;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738818, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $EvalError = GetIntrinsic('%EvalError%');

var DayWithinYear = require('./DayWithinYear');
var InLeapYear = require('./InLeapYear');
var MonthFromTime = require('./MonthFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.5

module.exports = function DateFromTime(t) {
	var m = MonthFromTime(t);
	var d = DayWithinYear(t);
	if (m === 0) {
		return d + 1;
	}
	if (m === 1) {
		return d - 30;
	}
	var leap = InLeapYear(t);
	if (m === 2) {
		return d - 58 - leap;
	}
	if (m === 3) {
		return d - 89 - leap;
	}
	if (m === 4) {
		return d - 119 - leap;
	}
	if (m === 5) {
		return d - 150 - leap;
	}
	if (m === 6) {
		return d - 180 - leap;
	}
	if (m === 7) {
		return d - 211 - leap;
	}
	if (m === 8) {
		return d - 242 - leap;
	}
	if (m === 9) {
		return d - 272 - leap;
	}
	if (m === 10) {
		return d - 303 - leap;
	}
	if (m === 11) {
		return d - 333 - leap;
	}
	throw new $EvalError('Assertion failed: MonthFromTime returned an impossible value: ' + m);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./DayWithinYear":1576493738819,"./InLeapYear":1576493738824,"./MonthFromTime":1576493738827}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738819, function(require, module, exports) {


var Day = require('./Day');
var DayFromYear = require('./DayFromYear');
var YearFromTime = require('./YearFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.4

module.exports = function DayWithinYear(t) {
	return Day(t) - DayFromYear(YearFromTime(t));
};

}, function(modId) { var map = {"./Day":1576493738820,"./DayFromYear":1576493738822,"./YearFromTime":1576493738823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738820, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var msPerDay = require('../helpers/timeConstants').msPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.2

module.exports = function Day(t) {
	return $floor(t / msPerDay);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738821, function(require, module, exports) {


var HoursPerDay = 24;
var MinutesPerHour = 60;
var SecondsPerMinute = 60;
var msPerSecond = 1e3;
var msPerMinute = msPerSecond * SecondsPerMinute;
var msPerHour = msPerMinute * MinutesPerHour;
var msPerDay = 86400000;

module.exports = {
	HoursPerDay: HoursPerDay,
	MinutesPerHour: MinutesPerHour,
	SecondsPerMinute: SecondsPerMinute,
	msPerSecond: msPerSecond,
	msPerMinute: msPerMinute,
	msPerHour: msPerHour,
	msPerDay: msPerDay
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738822, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function DayFromYear(y) {
	return (365 * (y - 1970)) + $floor((y - 1969) / 4) - $floor((y - 1901) / 100) + $floor((y - 1601) / 400);
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738823, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Date = GetIntrinsic('%Date%');

var callBound = require('../helpers/callBound');

var $getUTCFullYear = callBound('Date.prototype.getUTCFullYear');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function YearFromTime(t) {
	// largest y such that this.TimeFromYear(y) <= t
	return $getUTCFullYear(new $Date(t));
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738824, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $EvalError = GetIntrinsic('%EvalError%');

var DaysInYear = require('./DaysInYear');
var YearFromTime = require('./YearFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function InLeapYear(t) {
	var days = DaysInYear(YearFromTime(t));
	if (days === 365) {
		return 0;
	}
	if (days === 366) {
		return 1;
	}
	throw new $EvalError('Assertion failed: there are not 365 or 366 days in a year, got: ' + days);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./DaysInYear":1576493738825,"./YearFromTime":1576493738823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738825, function(require, module, exports) {


var mod = require('../helpers/mod');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function DaysInYear(y) {
	if (mod(y, 4) !== 0) {
		return 365;
	}
	if (mod(y, 100) !== 0) {
		return 366;
	}
	if (mod(y, 400) !== 0) {
		return 365;
	}
	return 366;
};

}, function(modId) { var map = {"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738826, function(require, module, exports) {


module.exports = function mod(number, modulo) {
	var remain = number % modulo;
	return Math.floor(remain >= 0 ? remain : remain + modulo);
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738827, function(require, module, exports) {


var DayWithinYear = require('./DayWithinYear');
var InLeapYear = require('./InLeapYear');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.4

module.exports = function MonthFromTime(t) {
	var day = DayWithinYear(t);
	if (0 <= day && day < 31) {
		return 0;
	}
	var leap = InLeapYear(t);
	if (31 <= day && day < (59 + leap)) {
		return 1;
	}
	if ((59 + leap) <= day && day < (90 + leap)) {
		return 2;
	}
	if ((90 + leap) <= day && day < (120 + leap)) {
		return 3;
	}
	if ((120 + leap) <= day && day < (151 + leap)) {
		return 4;
	}
	if ((151 + leap) <= day && day < (181 + leap)) {
		return 5;
	}
	if ((181 + leap) <= day && day < (212 + leap)) {
		return 6;
	}
	if ((212 + leap) <= day && day < (243 + leap)) {
		return 7;
	}
	if ((243 + leap) <= day && day < (273 + leap)) {
		return 8;
	}
	if ((273 + leap) <= day && day < (304 + leap)) {
		return 9;
	}
	if ((304 + leap) <= day && day < (334 + leap)) {
		return 10;
	}
	if ((334 + leap) <= day && day < (365 + leap)) {
		return 11;
	}
};

}, function(modId) { var map = {"./DayWithinYear":1576493738819,"./InLeapYear":1576493738824}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738828, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Type = require('./Type');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');

var assertRecord = require('../helpers/assertRecord');

// https://ecma-international.org/ecma-262/5.1/#sec-8.10.4

module.exports = function FromPropertyDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return Desc;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (IsDataDescriptor(Desc)) {
		return {
			value: Desc['[[Value]]'],
			writable: !!Desc['[[Writable]]'],
			enumerable: !!Desc['[[Enumerable]]'],
			configurable: !!Desc['[[Configurable]]']
		};
	} else if (IsAccessorDescriptor(Desc)) {
		return {
			get: Desc['[[Get]]'],
			set: Desc['[[Set]]'],
			enumerable: !!Desc['[[Enumerable]]'],
			configurable: !!Desc['[[Configurable]]']
		};
	} else {
		throw new $TypeError('FromPropertyDescriptor must be called with a fully populated Property Descriptor');
	}
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493738809,"./IsDataDescriptor":1576493738829,"./IsAccessorDescriptor":1576493738831,"../helpers/assertRecord":1576493738830}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738829, function(require, module, exports) {


var has = require('has');

var Type = require('./Type');

var assertRecord = require('../helpers/assertRecord');

// https://ecma-international.org/ecma-262/5.1/#sec-8.10.2

module.exports = function IsDataDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
		return false;
	}

	return true;
};

}, function(modId) { var map = {"./Type":1576493738809,"../helpers/assertRecord":1576493738830}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738830, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var has = require('has');

var predicates = {
	// https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
	'Property Descriptor': function isPropertyDescriptor(Type, Desc) {
		if (Type(Desc) !== 'Object') {
			return false;
		}
		var allowed = {
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Get]]': true,
			'[[Set]]': true,
			'[[Value]]': true,
			'[[Writable]]': true
		};

		for (var key in Desc) { // eslint-disable-line
			if (has(Desc, key) && !allowed[key]) {
				return false;
			}
		}

		var isData = has(Desc, '[[Value]]');
		var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
		if (isData && IsAccessor) {
			throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
		}
		return true;
	}
};

module.exports = function assertRecord(Type, recordType, argumentName, value) {
	var predicate = predicates[recordType];
	if (typeof predicate !== 'function') {
		throw new $SyntaxError('unknown record type: ' + recordType);
	}
	if (!predicate(Type, value)) {
		throw new $TypeError(argumentName + ' must be a ' + recordType);
	}
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738831, function(require, module, exports) {


var has = require('has');

var Type = require('./Type');

var assertRecord = require('../helpers/assertRecord');

// https://ecma-international.org/ecma-262/5.1/#sec-8.10.1

module.exports = function IsAccessorDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
		return false;
	}

	return true;
};

}, function(modId) { var map = {"./Type":1576493738809,"../helpers/assertRecord":1576493738830}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738832, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var mod = require('../helpers/mod');
var timeConstants = require('../helpers/timeConstants');
var msPerHour = timeConstants.msPerHour;
var HoursPerDay = timeConstants.HoursPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function HourFromTime(t) {
	return mod($floor(t / msPerHour), HoursPerDay);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738833, function(require, module, exports) {


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.11

module.exports = require('is-callable');

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738834, function(require, module, exports) {


var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var Type = require('./Type');

var assertRecord = require('../helpers/assertRecord');

// https://ecma-international.org/ecma-262/5.1/#sec-8.10.3

module.exports = function IsGenericDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!IsAccessorDescriptor(Desc) && !IsDataDescriptor(Desc)) {
		return true;
	}

	return false;
};

}, function(modId) { var map = {"./IsAccessorDescriptor":1576493738831,"./IsDataDescriptor":1576493738829,"./Type":1576493738809,"../helpers/assertRecord":1576493738830}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738835, function(require, module, exports) {


var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');

var Type = require('./Type');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');

// https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type

module.exports = function IsPropertyDescriptor(Desc) {
	return isPropertyDescriptor({
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor,
		Type: Type
	}, Desc);
};

}, function(modId) { var map = {"../helpers/isPropertyDescriptor":1576493738836,"./Type":1576493738809,"./IsDataDescriptor":1576493738829,"./IsAccessorDescriptor":1576493738831}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738836, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var has = require('has');
var $TypeError = GetIntrinsic('%TypeError%');

module.exports = function IsPropertyDescriptor(ES, Desc) {
	if (ES.Type(Desc) !== 'Object') {
		return false;
	}
	var allowed = {
		'[[Configurable]]': true,
		'[[Enumerable]]': true,
		'[[Get]]': true,
		'[[Set]]': true,
		'[[Value]]': true,
		'[[Writable]]': true
	};

    for (var key in Desc) { // eslint-disable-line
		if (has(Desc, key) && !allowed[key]) {
			return false;
		}
	}

	if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
		throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
	}
	return true;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738837, function(require, module, exports) {


var $isFinite = require('../helpers/isFinite');
var msPerDay = require('../helpers/timeConstants').msPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.13

module.exports = function MakeDate(day, time) {
	if (!$isFinite(day) || !$isFinite(time)) {
		return NaN;
	}
	return (day * msPerDay) + time;
};

}, function(modId) { var map = {"../helpers/isFinite":1576493738812,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738838, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');
var $DateUTC = GetIntrinsic('%Date.UTC%');

var mod = require('../helpers/mod');
var $isFinite = require('../helpers/isFinite');

var DateFromTime = require('./DateFromTime');
var Day = require('./Day');
var MonthFromTime = require('./MonthFromTime');
var ToInteger = require('./ToInteger');
var YearFromTime = require('./YearFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.12

module.exports = function MakeDay(year, month, date) {
	if (!$isFinite(year) || !$isFinite(month) || !$isFinite(date)) {
		return NaN;
	}
	var y = ToInteger(year);
	var m = ToInteger(month);
	var dt = ToInteger(date);
	var ym = y + $floor(m / 12);
	var mn = mod(m, 12);
	var t = $DateUTC(ym, mn, 1);
	if (YearFromTime(t) !== ym || MonthFromTime(t) !== mn || DateFromTime(t) !== 1) {
		return NaN;
	}
	return Day(t) + dt - 1;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/isFinite":1576493738812,"./DateFromTime":1576493738818,"./Day":1576493738820,"./MonthFromTime":1576493738827,"./ToInteger":1576493738839,"./YearFromTime":1576493738823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738839, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var ToNumber = require('./ToNumber');
var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var $sign = require('../helpers/sign');

var $floor = $Math.floor;
var $abs = $Math.abs;

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.4

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	if ($isNaN(number)) { return 0; }
	if (number === 0 || !$isFinite(number)) { return number; }
	return $sign(number) * $floor($abs(number));
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToNumber":1576493738807,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812,"../helpers/sign":1576493738840}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738840, function(require, module, exports) {


module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738841, function(require, module, exports) {


var $isFinite = require('../helpers/isFinite');
var timeConstants = require('../helpers/timeConstants');
var msPerSecond = timeConstants.msPerSecond;
var msPerMinute = timeConstants.msPerMinute;
var msPerHour = timeConstants.msPerHour;

var ToInteger = require('./ToInteger');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.11

module.exports = function MakeTime(hour, min, sec, ms) {
	if (!$isFinite(hour) || !$isFinite(min) || !$isFinite(sec) || !$isFinite(ms)) {
		return NaN;
	}
	var h = ToInteger(hour);
	var m = ToInteger(min);
	var s = ToInteger(sec);
	var milli = ToInteger(ms);
	var t = (h * msPerHour) + (m * msPerMinute) + (s * msPerSecond) + milli;
	return t;
};

}, function(modId) { var map = {"../helpers/isFinite":1576493738812,"../helpers/timeConstants":1576493738821,"./ToInteger":1576493738839}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738842, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var mod = require('../helpers/mod');
var timeConstants = require('../helpers/timeConstants');
var msPerMinute = timeConstants.msPerMinute;
var MinutesPerHour = timeConstants.MinutesPerHour;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function MinFromTime(t) {
	return mod($floor(t / msPerMinute), MinutesPerHour);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738843, function(require, module, exports) {


var mod = require('../helpers/mod');

// https://ecma-international.org/ecma-262/5.1/#sec-5.2

module.exports = function modulo(x, y) {
	return mod(x, y);
};

}, function(modId) { var map = {"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738844, function(require, module, exports) {


var mod = require('../helpers/mod');
var msPerSecond = require('../helpers/timeConstants').msPerSecond;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function msFromTime(t) {
	return mod(t, msPerSecond);
};

}, function(modId) { var map = {"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738845, function(require, module, exports) {


var $isNaN = require('../helpers/isNaN');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.12

module.exports = function SameValue(x, y) {
	if (x === y) { // 0 === -0, but they are not identical.
		if (x === 0) { return 1 / x === 1 / y; }
		return true;
	}
	return $isNaN(x) && $isNaN(y);
};

}, function(modId) { var map = {"../helpers/isNaN":1576493738811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738846, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var mod = require('../helpers/mod');
var timeConstants = require('../helpers/timeConstants');
var msPerSecond = timeConstants.msPerSecond;
var SecondsPerMinute = timeConstants.SecondsPerMinute;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function SecFromTime(t) {
	return mod($floor(t / msPerSecond), SecondsPerMinute);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738847, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Date = GetIntrinsic('%Date%');
var $Number = GetIntrinsic('%Number%');
var $abs = GetIntrinsic('%Math.abs%');

var $isFinite = require('../helpers/isFinite');

var ToNumber = require('./ToNumber');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.14

module.exports = function TimeClip(time) {
	if (!$isFinite(time) || $abs(time) > 8.64e15) {
		return NaN;
	}
	return $Number(new $Date(ToNumber(time)));
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isFinite":1576493738812,"./ToNumber":1576493738807}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738848, function(require, module, exports) {


var msPerDay = require('../helpers/timeConstants').msPerDay;

var DayFromYear = require('./DayFromYear');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function TimeFromYear(y) {
	return msPerDay * DayFromYear(y);
};

}, function(modId) { var map = {"../helpers/timeConstants":1576493738821,"./DayFromYear":1576493738822}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738849, function(require, module, exports) {


var mod = require('../helpers/mod');
var msPerDay = require('../helpers/timeConstants').msPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.2

module.exports = function TimeWithinDay(t) {
	return mod(t, msPerDay);
};


}, function(modId) { var map = {"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738850, function(require, module, exports) {


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.2

module.exports = function ToBoolean(value) { return !!value; };

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738851, function(require, module, exports) {


var ToNumber = require('./ToNumber');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.5

module.exports = function ToInt32(x) {
	return ToNumber(x) >> 0;
};

}, function(modId) { var map = {"./ToNumber":1576493738807}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738852, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Object = GetIntrinsic('%Object%');

var CheckObjectCoercible = require('./CheckObjectCoercible');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.9

module.exports = function ToObject(value) {
	CheckObjectCoercible(value);
	return $Object(value);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./CheckObjectCoercible":1576493738817}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738853, function(require, module, exports) {


var has = require('has');

var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Type = require('./Type');
var ToBoolean = require('./ToBoolean');
var IsCallable = require('./IsCallable');

// https://ecma-international.org/ecma-262/5.1/#sec-8.10.5

module.exports = function ToPropertyDescriptor(Obj) {
	if (Type(Obj) !== 'Object') {
		throw new $TypeError('ToPropertyDescriptor requires an object');
	}

	var desc = {};
	if (has(Obj, 'enumerable')) {
		desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
	}
	if (has(Obj, 'configurable')) {
		desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
	}
	if (has(Obj, 'value')) {
		desc['[[Value]]'] = Obj.value;
	}
	if (has(Obj, 'writable')) {
		desc['[[Writable]]'] = ToBoolean(Obj.writable);
	}
	if (has(Obj, 'get')) {
		var getter = Obj.get;
		if (typeof getter !== 'undefined' && !IsCallable(getter)) {
			throw new TypeError('getter must be a function');
		}
		desc['[[Get]]'] = getter;
	}
	if (has(Obj, 'set')) {
		var setter = Obj.set;
		if (typeof setter !== 'undefined' && !IsCallable(setter)) {
			throw new $TypeError('setter must be a function');
		}
		desc['[[Set]]'] = setter;
	}

	if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
		throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
	}
	return desc;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493738809,"./ToBoolean":1576493738850,"./IsCallable":1576493738833}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738854, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $String = GetIntrinsic('%String%');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.8

module.exports = function ToString(value) {
	return $String(value);
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738855, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var ToNumber = require('./ToNumber');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var $sign = require('../helpers/sign');
var $mod = require('../helpers/mod');

var $floor = $Math.floor;
var $abs = $Math.abs;

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.7

module.exports = function ToUint16(value) {
	var number = ToNumber(value);
	if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
	var posInt = $sign(number) * $floor($abs(number));
	return $mod(posInt, 0x10000);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToNumber":1576493738807,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812,"../helpers/sign":1576493738840,"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738856, function(require, module, exports) {


var ToNumber = require('./ToNumber');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.6

module.exports = function ToUint32(x) {
	return ToNumber(x) >>> 0;
};

}, function(modId) { var map = {"./ToNumber":1576493738807}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738857, function(require, module, exports) {


var mod = require('../helpers/mod');

var Day = require('./Day');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.6

module.exports = function WeekDay(t) {
	return mod(Day(t) + 4, 7);
};

}, function(modId) { var map = {"../helpers/mod":1576493738826,"./Day":1576493738820}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738858, function(require, module, exports) {


/* eslint global-require: 0 */
// https://www.ecma-international.org/ecma-262/6.0/#sec-abstract-operations
var ES6 = {
	'Abstract Equality Comparison': require('./2015/AbstractEqualityComparison'),
	'Abstract Relational Comparison': require('./2015/AbstractRelationalComparison'),
	'Strict Equality Comparison': require('./2015/StrictEqualityComparison'),
	AdvanceStringIndex: require('./2015/AdvanceStringIndex'),
	ArrayCreate: require('./2015/ArrayCreate'),
	ArraySetLength: require('./2015/ArraySetLength'),
	ArraySpeciesCreate: require('./2015/ArraySpeciesCreate'),
	Call: require('./2015/Call'),
	CanonicalNumericIndexString: require('./2015/CanonicalNumericIndexString'),
	CompletePropertyDescriptor: require('./2015/CompletePropertyDescriptor'),
	CreateDataProperty: require('./2015/CreateDataProperty'),
	CreateDataPropertyOrThrow: require('./2015/CreateDataPropertyOrThrow'),
	CreateHTML: require('./2015/CreateHTML'),
	CreateIterResultObject: require('./2015/CreateIterResultObject'),
	CreateListFromArrayLike: require('./2015/CreateListFromArrayLike'),
	CreateMethodProperty: require('./2015/CreateMethodProperty'),
	DateFromTime: require('./2015/DateFromTime'),
	Day: require('./2015/Day'),
	DayFromYear: require('./2015/DayFromYear'),
	DaysInYear: require('./2015/DaysInYear'),
	DayWithinYear: require('./2015/DayWithinYear'),
	DefinePropertyOrThrow: require('./2015/DefinePropertyOrThrow'),
	DeletePropertyOrThrow: require('./2015/DeletePropertyOrThrow'),
	EnumerableOwnNames: require('./2015/EnumerableOwnNames'),
	FromPropertyDescriptor: require('./2015/FromPropertyDescriptor'),
	Get: require('./2015/Get'),
	GetIterator: require('./2015/GetIterator'),
	GetMethod: require('./2015/GetMethod'),
	GetOwnPropertyKeys: require('./2015/GetOwnPropertyKeys'),
	GetPrototypeFromConstructor: require('./2015/GetPrototypeFromConstructor'),
	GetSubstitution: require('./2015/GetSubstitution'),
	GetV: require('./2015/GetV'),
	HasOwnProperty: require('./2015/HasOwnProperty'),
	HasProperty: require('./2015/HasProperty'),
	HourFromTime: require('./2015/HourFromTime'),
	InLeapYear: require('./2015/InLeapYear'),
	InstanceofOperator: require('./2015/InstanceofOperator'),
	Invoke: require('./2015/Invoke'),
	IsAccessorDescriptor: require('./2015/IsAccessorDescriptor'),
	IsArray: require('./2015/IsArray'),
	IsCallable: require('./2015/IsCallable'),
	IsConcatSpreadable: require('./2015/IsConcatSpreadable'),
	IsConstructor: require('./2015/IsConstructor'),
	IsDataDescriptor: require('./2015/IsDataDescriptor'),
	IsExtensible: require('./2015/IsExtensible'),
	IsGenericDescriptor: require('./2015/IsGenericDescriptor'),
	IsInteger: require('./2015/IsInteger'),
	IsPromise: require('./2015/IsPromise'),
	IsPropertyDescriptor: require('./2015/IsPropertyDescriptor'),
	IsPropertyKey: require('./2015/IsPropertyKey'),
	IsRegExp: require('./2015/IsRegExp'),
	IteratorClose: require('./2015/IteratorClose'),
	IteratorComplete: require('./2015/IteratorComplete'),
	IteratorNext: require('./2015/IteratorNext'),
	IteratorStep: require('./2015/IteratorStep'),
	IteratorValue: require('./2015/IteratorValue'),
	MakeDate: require('./2015/MakeDate'),
	MakeDay: require('./2015/MakeDay'),
	MakeTime: require('./2015/MakeTime'),
	MinFromTime: require('./2015/MinFromTime'),
	modulo: require('./2015/modulo'),
	MonthFromTime: require('./2015/MonthFromTime'),
	msFromTime: require('./2015/msFromTime'),
	ObjectCreate: require('./2015/ObjectCreate'),
	OrdinaryDefineOwnProperty: require('./2015/OrdinaryDefineOwnProperty'),
	OrdinaryGetOwnProperty: require('./2015/OrdinaryGetOwnProperty'),
	OrdinaryHasInstance: require('./2015/OrdinaryHasInstance'),
	OrdinaryHasProperty: require('./2015/OrdinaryHasProperty'),
	RegExpExec: require('./2015/RegExpExec'),
	RequireObjectCoercible: require('./2015/RequireObjectCoercible'),
	SameValue: require('./2015/SameValue'),
	SameValueZero: require('./2015/SameValueZero'),
	SecFromTime: require('./2015/SecFromTime'),
	Set: require('./2015/Set'),
	SetFunctionName: require('./2015/SetFunctionName'),
	SetIntegrityLevel: require('./2015/SetIntegrityLevel'),
	SpeciesConstructor: require('./2015/SpeciesConstructor'),
	SymbolDescriptiveString: require('./2015/SymbolDescriptiveString'),
	TestIntegrityLevel: require('./2015/TestIntegrityLevel'),
	thisBooleanValue: require('./2015/thisBooleanValue'),
	thisNumberValue: require('./2015/thisNumberValue'),
	thisStringValue: require('./2015/thisStringValue'),
	thisTimeValue: require('./2015/thisTimeValue'),
	TimeClip: require('./2015/TimeClip'),
	TimeFromYear: require('./2015/TimeFromYear'),
	TimeWithinDay: require('./2015/TimeWithinDay'),
	ToBoolean: require('./2015/ToBoolean'),
	ToDateString: require('./2015/ToDateString'),
	ToInt16: require('./2015/ToInt16'),
	ToInt32: require('./2015/ToInt32'),
	ToInt8: require('./2015/ToInt8'),
	ToInteger: require('./2015/ToInteger'),
	ToLength: require('./2015/ToLength'),
	ToNumber: require('./2015/ToNumber'),
	ToObject: require('./2015/ToObject'),
	ToPrimitive: require('./2015/ToPrimitive'),
	ToPropertyDescriptor: require('./2015/ToPropertyDescriptor'),
	ToPropertyKey: require('./2015/ToPropertyKey'),
	ToString: require('./2015/ToString'),
	ToUint16: require('./2015/ToUint16'),
	ToUint32: require('./2015/ToUint32'),
	ToUint8: require('./2015/ToUint8'),
	ToUint8Clamp: require('./2015/ToUint8Clamp'),
	Type: require('./2015/Type'),
	ValidateAndApplyPropertyDescriptor: require('./2015/ValidateAndApplyPropertyDescriptor'),
	WeekDay: require('./2015/WeekDay'),
	YearFromTime: require('./2015/YearFromTime')
};

module.exports = ES6;

}, function(modId) { var map = {"./2015/AbstractEqualityComparison":1576493738859,"./2015/AbstractRelationalComparison":1576493738865,"./2015/StrictEqualityComparison":1576493738866,"./2015/AdvanceStringIndex":1576493738867,"./2015/ArrayCreate":1576493738870,"./2015/ArraySetLength":1576493738871,"./2015/ArraySpeciesCreate":1576493738892,"./2015/Call":1576493738895,"./2015/CanonicalNumericIndexString":1576493738896,"./2015/CompletePropertyDescriptor":1576493738897,"./2015/CreateDataProperty":1576493738898,"./2015/CreateDataPropertyOrThrow":1576493738899,"./2015/CreateHTML":1576493738900,"./2015/CreateIterResultObject":1576493738902,"./2015/CreateListFromArrayLike":1576493738903,"./2015/CreateMethodProperty":1576493738906,"./2015/DateFromTime":1576493738907,"./2015/Day":1576493738909,"./2015/DayFromYear":1576493738910,"./2015/DaysInYear":1576493738913,"./2015/DayWithinYear":1576493738908,"./2015/DefinePropertyOrThrow":1576493738915,"./2015/DeletePropertyOrThrow":1576493738916,"./2015/EnumerableOwnNames":1576493738917,"./2015/FromPropertyDescriptor":1576493738885,"./2015/Get":1576493738893,"./2015/GetIterator":1576493738918,"./2015/GetMethod":1576493738920,"./2015/GetOwnPropertyKeys":1576493738923,"./2015/GetPrototypeFromConstructor":1576493738924,"./2015/GetSubstitution":1576493738925,"./2015/GetV":1576493738921,"./2015/HasOwnProperty":1576493738926,"./2015/HasProperty":1576493738927,"./2015/HourFromTime":1576493738928,"./2015/InLeapYear":1576493738912,"./2015/InstanceofOperator":1576493738929,"./2015/Invoke":1576493738931,"./2015/IsAccessorDescriptor":1576493738873,"./2015/IsArray":1576493738872,"./2015/IsCallable":1576493738880,"./2015/IsConcatSpreadable":1576493738932,"./2015/IsConstructor":1576493738894,"./2015/IsDataDescriptor":1576493738874,"./2015/IsExtensible":1576493738876,"./2015/IsGenericDescriptor":1576493738886,"./2015/IsInteger":1576493738868,"./2015/IsPromise":1576493738933,"./2015/IsPropertyDescriptor":1576493738934,"./2015/IsPropertyKey":1576493738877,"./2015/IsRegExp":1576493738889,"./2015/IteratorClose":1576493738935,"./2015/IteratorComplete":1576493738936,"./2015/IteratorNext":1576493738937,"./2015/IteratorStep":1576493738938,"./2015/IteratorValue":1576493738939,"./2015/MakeDate":1576493738940,"./2015/MakeDay":1576493738941,"./2015/MakeTime":1576493738942,"./2015/MinFromTime":1576493738943,"./2015/modulo":1576493738944,"./2015/MonthFromTime":1576493738914,"./2015/msFromTime":1576493738945,"./2015/ObjectCreate":1576493738946,"./2015/OrdinaryDefineOwnProperty":1576493738875,"./2015/OrdinaryGetOwnProperty":1576493738888,"./2015/OrdinaryHasInstance":1576493738930,"./2015/OrdinaryHasProperty":1576493738947,"./2015/RegExpExec":1576493738948,"./2015/RequireObjectCoercible":1576493738901,"./2015/SameValue":1576493738887,"./2015/SameValueZero":1576493738949,"./2015/SecFromTime":1576493738950,"./2015/Set":1576493738951,"./2015/SetFunctionName":1576493738952,"./2015/SetIntegrityLevel":1576493738955,"./2015/SpeciesConstructor":1576493738957,"./2015/SymbolDescriptiveString":1576493738958,"./2015/TestIntegrityLevel":1576493738959,"./2015/thisBooleanValue":1576493738960,"./2015/thisNumberValue":1576493738961,"./2015/thisStringValue":1576493738962,"./2015/thisTimeValue":1576493738963,"./2015/TimeClip":1576493738964,"./2015/TimeFromYear":1576493738965,"./2015/TimeWithinDay":1576493738966,"./2015/ToBoolean":1576493738879,"./2015/ToDateString":1576493738967,"./2015/ToInt16":1576493738968,"./2015/ToInt32":1576493738970,"./2015/ToInt8":1576493738971,"./2015/ToInteger":1576493738905,"./2015/ToLength":1576493738904,"./2015/ToNumber":1576493738860,"./2015/ToObject":1576493738922,"./2015/ToPrimitive":1576493738863,"./2015/ToPropertyDescriptor":1576493738878,"./2015/ToPropertyKey":1576493738973,"./2015/ToString":1576493738890,"./2015/ToUint16":1576493738969,"./2015/ToUint32":1576493738891,"./2015/ToUint8":1576493738972,"./2015/ToUint8Clamp":1576493738974,"./2015/Type":1576493738864,"./2015/ValidateAndApplyPropertyDescriptor":1576493738881,"./2015/WeekDay":1576493738975,"./2015/YearFromTime":1576493738911}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738859, function(require, module, exports) {


var ToNumber = require('./ToNumber');
var ToPrimitive = require('./ToPrimitive');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-abstract-equality-comparison

module.exports = function AbstractEqualityComparison(x, y) {
	var xType = Type(x);
	var yType = Type(y);
	if (xType === yType) {
		return x === y; // ES6+ specified this shortcut anyways.
	}
	if (x == null && y == null) {
		return true;
	}
	if (xType === 'Number' && yType === 'String') {
		return AbstractEqualityComparison(x, ToNumber(y));
	}
	if (xType === 'String' && yType === 'Number') {
		return AbstractEqualityComparison(ToNumber(x), y);
	}
	if (xType === 'Boolean') {
		return AbstractEqualityComparison(ToNumber(x), y);
	}
	if (yType === 'Boolean') {
		return AbstractEqualityComparison(x, ToNumber(y));
	}
	if ((xType === 'String' || xType === 'Number' || xType === 'Symbol') && yType === 'Object') {
		return AbstractEqualityComparison(x, ToPrimitive(y));
	}
	if (xType === 'Object' && (yType === 'String' || yType === 'Number' || yType === 'Symbol')) {
		return AbstractEqualityComparison(ToPrimitive(x), y);
	}
	return false;
};

}, function(modId) { var map = {"./ToNumber":1576493738860,"./ToPrimitive":1576493738863,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738860, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $Number = GetIntrinsic('%Number%');
var $RegExp = GetIntrinsic('%RegExp%');
var $parseInteger = GetIntrinsic('%parseInt%');

var callBound = require('../helpers/callBound');
var regexTester = require('../helpers/regexTester');
var isPrimitive = require('../helpers/isPrimitive');

var $strSlice = callBound('String.prototype.slice');
var isBinary = regexTester(/^0b[01]+$/i);
var isOctal = regexTester(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = regexTester(nonWSregex);

// whitespace from: https://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var $replace = callBound('String.prototype.replace');
var $trim = function (value) {
	return $replace(value, trimRegex, '');
};

var ToPrimitive = require('./ToPrimitive');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tonumber

module.exports = function ToNumber(argument) {
	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
	if (typeof value === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a number');
	}
	if (typeof value === 'string') {
		if (isBinary(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 2));
		} else if (isOctal(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 8));
		} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
			return NaN;
		} else {
			var trimmed = $trim(value);
			if (trimmed !== value) {
				return ToNumber(trimmed);
			}
		}
	}
	return $Number(value);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"../helpers/regexTester":1576493738861,"../helpers/isPrimitive":1576493738862,"./ToPrimitive":1576493738863}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738861, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $test = GetIntrinsic('RegExp.prototype.test');

var callBind = require('./callBind');

module.exports = function regexTester(regex) {
	return callBind($test, regex);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./callBind":1576493738815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738862, function(require, module, exports) {


module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738863, function(require, module, exports) {


var toPrimitive = require('es-to-primitive/es2015');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive

module.exports = function ToPrimitive(input) {
	if (arguments.length > 1) {
		return toPrimitive(input, arguments[1]);
	}
	return toPrimitive(input);
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738864, function(require, module, exports) {


var ES5Type = require('../5/Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tostring

module.exports = function Type(x) {
	if (typeof x === 'symbol') {
		return 'Symbol';
	}
	return ES5Type(x);
};

}, function(modId) { var map = {"../5/Type":1576493738809}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738865, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Number = GetIntrinsic('%Number%');
var $TypeError = GetIntrinsic('%TypeError%');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var isPrefixOf = require('../helpers/isPrefixOf');

var ToNumber = require('./ToNumber');
var ToPrimitive = require('./ToPrimitive');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/5.1/#sec-11.8.5

// eslint-disable-next-line max-statements
module.exports = function AbstractRelationalComparison(x, y, LeftFirst) {
	if (Type(LeftFirst) !== 'Boolean') {
		throw new $TypeError('Assertion failed: LeftFirst argument must be a Boolean');
	}
	var px;
	var py;
	if (LeftFirst) {
		px = ToPrimitive(x, $Number);
		py = ToPrimitive(y, $Number);
	} else {
		py = ToPrimitive(y, $Number);
		px = ToPrimitive(x, $Number);
	}
	var bothStrings = Type(px) === 'String' && Type(py) === 'String';
	if (!bothStrings) {
		var nx = ToNumber(px);
		var ny = ToNumber(py);
		if ($isNaN(nx) || $isNaN(ny)) {
			return undefined;
		}
		if ($isFinite(nx) && $isFinite(ny) && nx === ny) {
			return false;
		}
		if (nx === 0 && ny === 0) {
			return false;
		}
		if (nx === Infinity) {
			return false;
		}
		if (ny === Infinity) {
			return true;
		}
		if (ny === -Infinity) {
			return false;
		}
		if (nx === -Infinity) {
			return true;
		}
		return nx < ny; // by now, these are both nonzero, finite, and not equal
	}
	if (isPrefixOf(py, px)) {
		return false;
	}
	if (isPrefixOf(px, py)) {
		return true;
	}
	return px < py; // both strings, neither a prefix of the other. shortcut for steps c-f
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812,"../helpers/isPrefixOf":1576493738813,"./ToNumber":1576493738860,"./ToPrimitive":1576493738863,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738866, function(require, module, exports) {


var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6

module.exports = function StrictEqualityComparison(x, y) {
	var xType = Type(x);
	var yType = Type(y);
	if (xType !== yType) {
		return false;
	}
	if (xType === 'Undefined' || xType === 'Null') {
		return true;
	}
	return x === y; // shortcut for steps 4-7
};

}, function(modId) { var map = {"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738867, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var IsInteger = require('./IsInteger');
var Type = require('./Type');

var MAX_SAFE_INTEGER = require('../helpers/maxSafeInteger');

var $TypeError = GetIntrinsic('%TypeError%');

var $charCodeAt = require('../helpers/callBound')('String.prototype.charCodeAt');

// https://ecma-international.org/ecma-262/6.0/#sec-advancestringindex

module.exports = function AdvanceStringIndex(S, index, unicode) {
	if (Type(S) !== 'String') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	if (!IsInteger(index) || index < 0 || index > MAX_SAFE_INTEGER) {
		throw new $TypeError('Assertion failed: `length` must be an integer >= 0 and <= 2**53');
	}
	if (Type(unicode) !== 'Boolean') {
		throw new $TypeError('Assertion failed: `unicode` must be a Boolean');
	}
	if (!unicode) {
		return index + 1;
	}
	var length = S.length;
	if ((index + 1) >= length) {
		return index + 1;
	}

	var first = $charCodeAt(S, index);
	if (first < 0xD800 || first > 0xDBFF) {
		return index + 1;
	}

	var second = $charCodeAt(S, index + 1);
	if (second < 0xDC00 || second > 0xDFFF) {
		return index + 1;
	}

	return index + 2;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsInteger":1576493738868,"./Type":1576493738864,"../helpers/maxSafeInteger":1576493738869,"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738868, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var $floor = $Math.floor;
var $abs = $Math.abs;

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isinteger

module.exports = function IsInteger(argument) {
	if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
		return false;
	}
	var abs = $abs(argument);
	return $floor(abs) === abs;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738869, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');
var $Number = GetIntrinsic('%Number%');

module.exports = $Number.MAX_SAFE_INTEGER || $Math.pow(2, 53) - 1;

}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738870, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $ArrayPrototype = GetIntrinsic('%Array.prototype%');
var $RangeError = GetIntrinsic('%RangeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');
var $TypeError = GetIntrinsic('%TypeError%');

var IsInteger = require('./IsInteger');

var MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1;

var $setProto = GetIntrinsic('%Object.setPrototypeOf%') || (
	// eslint-disable-next-line no-proto, no-negated-condition
	[].__proto__ !== $ArrayPrototype
		? null
		: function (O, proto) {
			O.__proto__ = proto; // eslint-disable-line no-proto, no-param-reassign
			return O;
		}
);

// https://www.ecma-international.org/ecma-262/6.0/#sec-arraycreate

module.exports = function ArrayCreate(length) {
	if (!IsInteger(length) || length < 0) {
		throw new $TypeError('Assertion failed: `length` must be an integer Number >= 0');
	}
	if (length > MAX_ARRAY_LENGTH) {
		throw new $RangeError('length is greater than (2**32 - 1)');
	}
	var proto = arguments.length > 1 ? arguments[1] : $ArrayPrototype;
	var A = []; // steps 5 - 7, and 9
	if (proto !== $ArrayPrototype) { // step 8
		if (!$setProto) {
			throw new $SyntaxError('ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]');
		}
		$setProto(A, proto);
	}
	if (length !== 0) { // bypasses the need for step 2
		A.length = length;
	}
	/* step 10, the above as a shortcut for the below
    OrdinaryDefineOwnProperty(A, 'length', {
        '[[Configurable]]': false,
        '[[Enumerable]]': false,
        '[[Value]]': length,
        '[[Writable]]': true
    });
    */
	return A;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsInteger":1576493738868}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738871, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $RangeError = GetIntrinsic('%RangeError%');
var $TypeError = GetIntrinsic('%TypeError%');

var assign = require('object.assign');

var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');

var IsArray = require('./IsArray');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var OrdinaryDefineOwnProperty = require('./OrdinaryDefineOwnProperty');
var OrdinaryGetOwnProperty = require('./OrdinaryGetOwnProperty');
var ToNumber = require('./ToNumber');
var ToString = require('./ToString');
var ToUint32 = require('./ToUint32');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-arraysetlength

// eslint-disable-next-line max-statements, max-lines-per-function
module.exports = function ArraySetLength(A, Desc) {
	if (!IsArray(A)) {
		throw new $TypeError('Assertion failed: A must be an Array');
	}
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	if (!('[[Value]]' in Desc)) {
		return OrdinaryDefineOwnProperty(A, 'length', Desc);
	}
	var newLenDesc = assign({}, Desc);
	var newLen = ToUint32(Desc['[[Value]]']);
	var numberLen = ToNumber(Desc['[[Value]]']);
	if (newLen !== numberLen) {
		throw new $RangeError('Invalid array length');
	}
	newLenDesc['[[Value]]'] = newLen;
	var oldLenDesc = OrdinaryGetOwnProperty(A, 'length');
	if (!IsDataDescriptor(oldLenDesc)) {
		throw new $TypeError('Assertion failed: an array had a non-data descriptor on `length`');
	}
	var oldLen = oldLenDesc['[[Value]]'];
	if (newLen >= oldLen) {
		return OrdinaryDefineOwnProperty(A, 'length', newLenDesc);
	}
	if (!oldLenDesc['[[Writable]]']) {
		return false;
	}
	var newWritable;
	if (!('[[Writable]]' in newLenDesc) || newLenDesc['[[Writable]]']) {
		newWritable = true;
	} else {
		newWritable = false;
		newLenDesc['[[Writable]]'] = true;
	}
	var succeeded = OrdinaryDefineOwnProperty(A, 'length', newLenDesc);
	if (!succeeded) {
		return false;
	}
	while (newLen < oldLen) {
		oldLen -= 1;
		// eslint-disable-next-line no-param-reassign
		var deleteSucceeded = delete A[ToString(oldLen)];
		if (!deleteSucceeded) {
			newLenDesc['[[Value]]'] = oldLen + 1;
			if (!newWritable) {
				newLenDesc['[[Writable]]'] = false;
				OrdinaryDefineOwnProperty(A, 'length', newLenDesc);
				return false;
			}
		}
	}
	if (!newWritable) {
		return OrdinaryDefineOwnProperty(A, 'length', { '[[Writable]]': false });
	}
	return true;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPropertyDescriptor":1576493738836,"./IsArray":1576493738872,"./IsAccessorDescriptor":1576493738873,"./IsDataDescriptor":1576493738874,"./OrdinaryDefineOwnProperty":1576493738875,"./OrdinaryGetOwnProperty":1576493738888,"./ToNumber":1576493738860,"./ToString":1576493738890,"./ToUint32":1576493738891,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738872, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Array = GetIntrinsic('%Array%');

// eslint-disable-next-line global-require
var toStr = !$Array.isArray && require('../helpers/callBound')('Object.prototype.toString');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isarray

module.exports = $Array.isArray || function IsArray(argument) {
	return toStr(argument) === '[object Array]';
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738873, function(require, module, exports) {


var has = require('has');

var assertRecord = require('../helpers/assertRecord');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isaccessordescriptor

module.exports = function IsAccessorDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
		return false;
	}

	return true;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738874, function(require, module, exports) {


var has = require('has');

var assertRecord = require('../helpers/assertRecord');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isdatadescriptor

module.exports = function IsDataDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
		return false;
	}

	return true;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738875, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $TypeError = GetIntrinsic('%TypeError%');

var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');

var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsExtensible = require('./IsExtensible');
var IsPropertyKey = require('./IsPropertyKey');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');
var ValidateAndApplyPropertyDescriptor = require('./ValidateAndApplyPropertyDescriptor');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinarydefineownproperty

module.exports = function OrdinaryDefineOwnProperty(O, P, Desc) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	var desc = $gOPD(O, P);
	var current = desc && ToPropertyDescriptor(desc);
	var extensible = IsExtensible(O);
	return ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPropertyDescriptor":1576493738836,"./IsAccessorDescriptor":1576493738873,"./IsDataDescriptor":1576493738874,"./IsExtensible":1576493738876,"./IsPropertyKey":1576493738877,"./ToPropertyDescriptor":1576493738878,"./Type":1576493738864,"./ValidateAndApplyPropertyDescriptor":1576493738881}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738876, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Object = GetIntrinsic('%Object%');

var isPrimitive = require('../helpers/isPrimitive');

var $preventExtensions = $Object.preventExtensions;
var $isExtensible = $Object.isExtensible;

// https://www.ecma-international.org/ecma-262/6.0/#sec-isextensible-o

module.exports = $preventExtensions
	? function IsExtensible(obj) {
		return !isPrimitive(obj) && $isExtensible(obj);
	}
	: function IsExtensible(obj) { // eslint-disable-line no-unused-vars
		return true;
	};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPrimitive":1576493738862}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738877, function(require, module, exports) {


// https://www.ecma-international.org/ecma-262/6.0/#sec-ispropertykey

module.exports = function IsPropertyKey(argument) {
	return typeof argument === 'string' || typeof argument === 'symbol';
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738878, function(require, module, exports) {


var has = require('has');

var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Type = require('./Type');
var ToBoolean = require('./ToBoolean');
var IsCallable = require('./IsCallable');

// https://ecma-international.org/ecma-262/5.1/#sec-8.10.5

module.exports = function ToPropertyDescriptor(Obj) {
	if (Type(Obj) !== 'Object') {
		throw new $TypeError('ToPropertyDescriptor requires an object');
	}

	var desc = {};
	if (has(Obj, 'enumerable')) {
		desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
	}
	if (has(Obj, 'configurable')) {
		desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
	}
	if (has(Obj, 'value')) {
		desc['[[Value]]'] = Obj.value;
	}
	if (has(Obj, 'writable')) {
		desc['[[Writable]]'] = ToBoolean(Obj.writable);
	}
	if (has(Obj, 'get')) {
		var getter = Obj.get;
		if (typeof getter !== 'undefined' && !IsCallable(getter)) {
			throw new TypeError('getter must be a function');
		}
		desc['[[Get]]'] = getter;
	}
	if (has(Obj, 'set')) {
		var setter = Obj.set;
		if (typeof setter !== 'undefined' && !IsCallable(setter)) {
			throw new $TypeError('setter must be a function');
		}
		desc['[[Set]]'] = setter;
	}

	if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
		throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
	}
	return desc;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493738864,"./ToBoolean":1576493738879,"./IsCallable":1576493738880}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738879, function(require, module, exports) {


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.2

module.exports = function ToBoolean(value) { return !!value; };

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738880, function(require, module, exports) {


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.11

module.exports = require('is-callable');

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738881, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');
var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');
var isSamePropertyDescriptor = require('../helpers/isSamePropertyDescriptor');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsGenericDescriptor = require('./IsGenericDescriptor');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-validateandapplypropertydescriptor
// https://www.ecma-international.org/ecma-262/8.0/#sec-validateandapplypropertydescriptor

// eslint-disable-next-line max-lines-per-function, max-statements, max-params
module.exports = function ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current) {
	// this uses the ES2017+ logic, since it fixes a number of bugs in the ES2015 logic.
	var oType = Type(O);
	if (oType !== 'Undefined' && oType !== 'Object') {
		throw new $TypeError('Assertion failed: O must be undefined or an Object');
	}
	if (Type(extensible) !== 'Boolean') {
		throw new $TypeError('Assertion failed: extensible must be a Boolean');
	}
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	if (Type(current) !== 'Undefined' && !isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, current)) {
		throw new $TypeError('Assertion failed: current must be a Property Descriptor, or undefined');
	}
	if (oType !== 'Undefined' && !IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: if O is not undefined, P must be a Property Key');
	}
	if (Type(current) === 'Undefined') {
		if (!extensible) {
			return false;
		}
		if (IsGenericDescriptor(Desc) || IsDataDescriptor(Desc)) {
			if (oType !== 'Undefined') {
				DefineOwnProperty(
					IsDataDescriptor,
					SameValue,
					FromPropertyDescriptor,
					O,
					P,
					{
						'[[Configurable]]': Desc['[[Configurable]]'],
						'[[Enumerable]]': Desc['[[Enumerable]]'],
						'[[Value]]': Desc['[[Value]]'],
						'[[Writable]]': Desc['[[Writable]]']
					}
				);
			}
		} else {
			if (!IsAccessorDescriptor(Desc)) {
				throw new $TypeError('Assertion failed: Desc is not an accessor descriptor');
			}
			if (oType !== 'Undefined') {
				return DefineOwnProperty(
					IsDataDescriptor,
					SameValue,
					FromPropertyDescriptor,
					O,
					P,
					Desc
				);
			}
		}
		return true;
	}
	if (IsGenericDescriptor(Desc) && !('[[Configurable]]' in Desc) && !('[[Enumerable]]' in Desc)) {
		return true;
	}
	if (isSamePropertyDescriptor({ SameValue: SameValue }, Desc, current)) {
		return true; // removed by ES2017, but should still be correct
	}
	// "if every field in Desc is absent, return true" can't really match the assertion that it's a Property Descriptor
	if (!current['[[Configurable]]']) {
		if (Desc['[[Configurable]]']) {
			return false;
		}
		if ('[[Enumerable]]' in Desc && !Desc['[[Enumerable]]'] === !!current['[[Enumerable]]']) {
			return false;
		}
	}
	if (IsGenericDescriptor(Desc)) {
		// no further validation is required.
	} else if (IsDataDescriptor(current) !== IsDataDescriptor(Desc)) {
		if (!current['[[Configurable]]']) {
			return false;
		}
		if (IsDataDescriptor(current)) {
			if (oType !== 'Undefined') {
				DefineOwnProperty(
					IsDataDescriptor,
					SameValue,
					FromPropertyDescriptor,
					O,
					P,
					{
						'[[Configurable]]': current['[[Configurable]]'],
						'[[Enumerable]]': current['[[Enumerable]]'],
						'[[Get]]': undefined
					}
				);
			}
		} else if (oType !== 'Undefined') {
			DefineOwnProperty(
				IsDataDescriptor,
				SameValue,
				FromPropertyDescriptor,
				O,
				P,
				{
					'[[Configurable]]': current['[[Configurable]]'],
					'[[Enumerable]]': current['[[Enumerable]]'],
					'[[Value]]': undefined
				}
			);
		}
	} else if (IsDataDescriptor(current) && IsDataDescriptor(Desc)) {
		if (!current['[[Configurable]]'] && !current['[[Writable]]']) {
			if ('[[Writable]]' in Desc && Desc['[[Writable]]']) {
				return false;
			}
			if ('[[Value]]' in Desc && !SameValue(Desc['[[Value]]'], current['[[Value]]'])) {
				return false;
			}
			return true;
		}
	} else if (IsAccessorDescriptor(current) && IsAccessorDescriptor(Desc)) {
		if (!current['[[Configurable]]']) {
			if ('[[Set]]' in Desc && !SameValue(Desc['[[Set]]'], current['[[Set]]'])) {
				return false;
			}
			if ('[[Get]]' in Desc && !SameValue(Desc['[[Get]]'], current['[[Get]]'])) {
				return false;
			}
			return true;
		}
	} else {
		throw new $TypeError('Assertion failed: current and Desc are not both data, both accessors, or one accessor and one data.');
	}
	if (oType !== 'Undefined') {
		return DefineOwnProperty(
			IsDataDescriptor,
			SameValue,
			FromPropertyDescriptor,
			O,
			P,
			Desc
		);
	}
	return true;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/DefineOwnProperty":1576493738882,"../helpers/isPropertyDescriptor":1576493738836,"../helpers/isSamePropertyDescriptor":1576493738883,"./FromPropertyDescriptor":1576493738885,"./IsAccessorDescriptor":1576493738873,"./IsDataDescriptor":1576493738874,"./IsGenericDescriptor":1576493738886,"./IsPropertyKey":1576493738877,"./SameValue":1576493738887,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738882, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $defineProperty = GetIntrinsic('%Object.defineProperty%');

var callBound = require('../helpers/callBound');

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

// eslint-disable-next-line max-params
module.exports = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
	if (!$defineProperty) {
		if (!IsDataDescriptor(desc)) {
			// ES3 does not support getters/setters
			return false;
		}
		if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {
			return false;
		}

		// fallback for ES3
		if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {
			// a non-enumerable existing property
			return false;
		}

		// property does not exist at all, or exists but is enumerable
		var V = desc['[[Value]]'];
		// eslint-disable-next-line no-param-reassign
		O[P] = V; // will use [[Define]]
		return SameValue(O[P], V);
	}
	$defineProperty(O, P, FromPropertyDescriptor(desc));
	return true;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738883, function(require, module, exports) {


var every = require('./every');

module.exports = function isSamePropertyDescriptor(ES, D1, D2) {
	var fields = [
		'[[Configurable]]',
		'[[Enumerable]]',
		'[[Get]]',
		'[[Set]]',
		'[[Value]]',
		'[[Writable]]'
	];
	return every(fields, function (field) {
		if ((field in D1) !== (field in D2)) {
			return false;
		}
		return ES.SameValue(D1[field], D2[field]);
	});
};

}, function(modId) { var map = {"./every":1576493738884}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738884, function(require, module, exports) {


module.exports = function every(array, predicate) {
	for (var i = 0; i < array.length; i += 1) {
		if (!predicate(array[i], i, array)) {
			return false;
		}
	}
	return true;
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738885, function(require, module, exports) {


var assertRecord = require('../helpers/assertRecord');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-frompropertydescriptor

module.exports = function FromPropertyDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return Desc;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	var obj = {};
	if ('[[Value]]' in Desc) {
		obj.value = Desc['[[Value]]'];
	}
	if ('[[Writable]]' in Desc) {
		obj.writable = Desc['[[Writable]]'];
	}
	if ('[[Get]]' in Desc) {
		obj.get = Desc['[[Get]]'];
	}
	if ('[[Set]]' in Desc) {
		obj.set = Desc['[[Set]]'];
	}
	if ('[[Enumerable]]' in Desc) {
		obj.enumerable = Desc['[[Enumerable]]'];
	}
	if ('[[Configurable]]' in Desc) {
		obj.configurable = Desc['[[Configurable]]'];
	}
	return obj;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738886, function(require, module, exports) {


var assertRecord = require('../helpers/assertRecord');

var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isgenericdescriptor

module.exports = function IsGenericDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!IsAccessorDescriptor(Desc) && !IsDataDescriptor(Desc)) {
		return true;
	}

	return false;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./IsAccessorDescriptor":1576493738873,"./IsDataDescriptor":1576493738874,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738887, function(require, module, exports) {


var $isNaN = require('../helpers/isNaN');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.12

module.exports = function SameValue(x, y) {
	if (x === y) { // 0 === -0, but they are not identical.
		if (x === 0) { return 1 / x === 1 / y; }
		return true;
	}
	return $isNaN(x) && $isNaN(y);
};

}, function(modId) { var map = {"../helpers/isNaN":1576493738811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738888, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $TypeError = GetIntrinsic('%TypeError%');

var callBound = require('../helpers/callBound');

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

var has = require('has');

var IsArray = require('./IsArray');
var IsPropertyKey = require('./IsPropertyKey');
var IsRegExp = require('./IsRegExp');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinarygetownproperty

module.exports = function OrdinaryGetOwnProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!has(O, P)) {
		return void 0;
	}
	if (!$gOPD) {
		// ES3 fallback
		var arrayLength = IsArray(O) && P === 'length';
		var regexLastIndex = IsRegExp(O) && P === 'lastIndex';
		return {
			'[[Configurable]]': !(arrayLength || regexLastIndex),
			'[[Enumerable]]': $isEnumerable(O, P),
			'[[Value]]': O[P],
			'[[Writable]]': true
		};
	}
	return ToPropertyDescriptor($gOPD(O, P));
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./IsArray":1576493738872,"./IsPropertyKey":1576493738877,"./IsRegExp":1576493738889,"./ToPropertyDescriptor":1576493738878,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738889, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $match = GetIntrinsic('%Symbol.match%', true);

var hasRegExpMatcher = require('is-regex');

var ToBoolean = require('./ToBoolean');

// https://ecma-international.org/ecma-262/6.0/#sec-isregexp

module.exports = function IsRegExp(argument) {
	if (!argument || typeof argument !== 'object') {
		return false;
	}
	if ($match) {
		var isRegExp = argument[$match];
		if (typeof isRegExp !== 'undefined') {
			return ToBoolean(isRegExp);
		}
	}
	return hasRegExpMatcher(argument);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToBoolean":1576493738879}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738890, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $String = GetIntrinsic('%String%');
var $TypeError = GetIntrinsic('%TypeError%');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tostring

module.exports = function ToString(argument) {
	if (typeof argument === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a string');
	}
	return $String(argument);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738891, function(require, module, exports) {


var ToNumber = require('./ToNumber');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.6

module.exports = function ToUint32(x) {
	return ToNumber(x) >>> 0;
};

}, function(modId) { var map = {"./ToNumber":1576493738860}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738892, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Array = GetIntrinsic('%Array%');
var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var IsArray = require('./IsArray');
var IsConstructor = require('./IsConstructor');
var IsInteger = require('./IsInteger');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-arrayspeciescreate

module.exports = function ArraySpeciesCreate(originalArray, length) {
	if (!IsInteger(length) || length < 0) {
		throw new $TypeError('Assertion failed: length must be an integer >= 0');
	}
	var len = length === 0 ? 0 : length;
	var C;
	var isArray = IsArray(originalArray);
	if (isArray) {
		C = Get(originalArray, 'constructor');
		// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
		// if (IsConstructor(C)) {
		// 	if C is another realm's Array, C = undefined
		// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
		// }
		if ($species && Type(C) === 'Object') {
			C = Get(C, $species);
			if (C === null) {
				C = void 0;
			}
		}
	}
	if (typeof C === 'undefined') {
		return $Array(len);
	}
	if (!IsConstructor(C)) {
		throw new $TypeError('C must be a constructor');
	}
	return new C(len); // Construct(C, len);
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493738893,"./IsArray":1576493738872,"./IsConstructor":1576493738894,"./IsInteger":1576493738868,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738893, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = require('object-inspect');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

/**
 * 7.3.1 Get (O, P) - https://ecma-international.org/ecma-262/6.0/#sec-get-o-p
 * 1. Assert: Type(O) is Object.
 * 2. Assert: IsPropertyKey(P) is true.
 * 3. Return O.[[Get]](P, O).
 */

module.exports = function Get(O, P) {
	// 7.3.1.1
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	// 7.3.1.2
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true, got ' + inspect(P));
	}
	// 7.3.1.3
	return O[P];
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493738877,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738894, function(require, module, exports) {


// https://www.ecma-international.org/ecma-262/6.0/#sec-isconstructor

module.exports = function IsConstructor(argument) {
	return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738895, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = require('object-inspect');

var IsCallable = require('./IsCallable');

// https://www.ecma-international.org/ecma-262/6.0/#sec-call

module.exports = function Call(F, V) {
	var args = arguments.length > 2 ? arguments[2] : [];
	if (!IsCallable(F)) {
		throw new $TypeError(inspect(F) + ' is not a function');
	}
	return F.apply(V, args);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsCallable":1576493738880}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738896, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var SameValue = require('./SameValue');
var ToNumber = require('./ToNumber');
var ToString = require('./ToString');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring

module.exports = function CanonicalNumericIndexString(argument) {
	if (Type(argument) !== 'String') {
		throw new $TypeError('Assertion failed: `argument` must be a String');
	}
	if (argument === '-0') { return -0; }
	var n = ToNumber(argument);
	if (SameValue(ToString(n), argument)) { return n; }
	return void 0;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./SameValue":1576493738887,"./ToNumber":1576493738860,"./ToString":1576493738890,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738897, function(require, module, exports) {


var has = require('has');

var assertRecord = require('../helpers/assertRecord');

var IsDataDescriptor = require('./IsDataDescriptor');
var IsGenericDescriptor = require('./IsGenericDescriptor');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-completepropertydescriptor

module.exports = function CompletePropertyDescriptor(Desc) {
	/* eslint no-param-reassign: 0 */
	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (IsGenericDescriptor(Desc) || IsDataDescriptor(Desc)) {
		if (!has(Desc, '[[Value]]')) {
			Desc['[[Value]]'] = void 0;
		}
		if (!has(Desc, '[[Writable]]')) {
			Desc['[[Writable]]'] = false;
		}
	} else {
		if (!has(Desc, '[[Get]]')) {
			Desc['[[Get]]'] = void 0;
		}
		if (!has(Desc, '[[Set]]')) {
			Desc['[[Set]]'] = void 0;
		}
	}
	if (!has(Desc, '[[Enumerable]]')) {
		Desc['[[Enumerable]]'] = false;
	}
	if (!has(Desc, '[[Configurable]]')) {
		Desc['[[Configurable]]'] = false;
	}
	return Desc;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./IsDataDescriptor":1576493738874,"./IsGenericDescriptor":1576493738886,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738898, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsExtensible = require('./IsExtensible');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-createdataproperty

module.exports = function CreateDataProperty(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var oldDesc = $gOPD(O, P);
	var extensible = oldDesc || IsExtensible(O);
	var immutable = oldDesc && (!oldDesc.writable || !oldDesc.configurable);
	if (immutable || !extensible) {
		return false;
	}
	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		{
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Value]]': V,
			'[[Writable]]': true
		}
	);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/DefineOwnProperty":1576493738882,"./FromPropertyDescriptor":1576493738885,"./IsDataDescriptor":1576493738874,"./IsExtensible":1576493738876,"./IsPropertyKey":1576493738877,"./SameValue":1576493738887,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738899, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var CreateDataProperty = require('./CreateDataProperty');
var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// // https://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow

module.exports = function CreateDataPropertyOrThrow(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var success = CreateDataProperty(O, P, V);
	if (!success) {
		throw new $TypeError('unable to create data property');
	}
	return success;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./CreateDataProperty":1576493738898,"./IsPropertyKey":1576493738877,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738900, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var callBound = require('../helpers/callBound');

var $replace = callBound('String.prototype.replace');

var RequireObjectCoercible = require('./RequireObjectCoercible');
var ToString = require('./ToString');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-createhtml

module.exports = function CreateHTML(string, tag, attribute, value) {
	if (Type(tag) !== 'String' || Type(attribute) !== 'String') {
		throw new $TypeError('Assertion failed: `tag` and `attribute` must be strings');
	}
	var str = RequireObjectCoercible(string);
	var S = ToString(str);
	var p1 = '<' + tag;
	if (attribute !== '') {
		var V = ToString(value);
		var escapedV = $replace(V, /\x22/g, '&quot;');
		p1 += '\x20' + attribute + '\x3D\x22' + escapedV + '\x22';
	}
	return p1 + '>' + S + '</' + tag + '>';
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./RequireObjectCoercible":1576493738901,"./ToString":1576493738890,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738901, function(require, module, exports) {


module.exports = require('../5/CheckObjectCoercible');

}, function(modId) { var map = {"../5/CheckObjectCoercible":1576493738817}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738902, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-createiterresultobject

module.exports = function CreateIterResultObject(value, done) {
	if (Type(done) !== 'Boolean') {
		throw new $TypeError('Assertion failed: Type(done) is not Boolean');
	}
	return {
		value: value,
		done: done
	};
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738903, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var callBound = require('../helpers/callBound');

var $TypeError = GetIntrinsic('%TypeError%');
var $indexOf = callBound('Array.prototype.indexOf');
var $push = callBound('Array.prototype.push');

var Get = require('./Get');
var IsArray = require('./IsArray');
var ToLength = require('./ToLength');
var ToString = require('./ToString');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-createlistfromarraylike
module.exports = function CreateListFromArrayLike(obj) {
	var elementTypes = arguments.length > 1
		? arguments[1]
		: ['Undefined', 'Null', 'Boolean', 'String', 'Symbol', 'Number', 'Object'];

	if (Type(obj) !== 'Object') {
		throw new $TypeError('Assertion failed: `obj` must be an Object');
	}
	if (!IsArray(elementTypes)) {
		throw new $TypeError('Assertion failed: `elementTypes`, if provided, must be an array');
	}
	var len = ToLength(Get(obj, 'length'));
	var list = [];
	var index = 0;
	while (index < len) {
		var indexName = ToString(index);
		var next = Get(obj, indexName);
		var nextType = Type(next);
		if ($indexOf(elementTypes, nextType) < 0) {
			throw new $TypeError('item type ' + nextType + ' is not a valid elementType');
		}
		$push(list, next);
		index += 1;
	}
	return list;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Get":1576493738893,"./IsArray":1576493738872,"./ToLength":1576493738904,"./ToString":1576493738890,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738904, function(require, module, exports) {


var MAX_SAFE_INTEGER = require('../helpers/maxSafeInteger');

var ToInteger = require('./ToInteger');

module.exports = function ToLength(argument) {
	var len = ToInteger(argument);
	if (len <= 0) { return 0; } // includes converting -0 to +0
	if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
	return len;
};

}, function(modId) { var map = {"../helpers/maxSafeInteger":1576493738869,"./ToInteger":1576493738905}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738905, function(require, module, exports) {


var ES5ToInteger = require('../5/ToInteger');

var ToNumber = require('./ToNumber');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tointeger

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	return ES5ToInteger(number);
};

}, function(modId) { var map = {"../5/ToInteger":1576493738839,"./ToNumber":1576493738860}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738906, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-createmethodproperty

module.exports = function CreateMethodProperty(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	var newDesc = {
		'[[Configurable]]': true,
		'[[Enumerable]]': false,
		'[[Value]]': V,
		'[[Writable]]': true
	};
	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		newDesc
	);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/DefineOwnProperty":1576493738882,"./FromPropertyDescriptor":1576493738885,"./IsDataDescriptor":1576493738874,"./IsPropertyKey":1576493738877,"./SameValue":1576493738887,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738907, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $EvalError = GetIntrinsic('%EvalError%');

var DayWithinYear = require('./DayWithinYear');
var InLeapYear = require('./InLeapYear');
var MonthFromTime = require('./MonthFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.5

module.exports = function DateFromTime(t) {
	var m = MonthFromTime(t);
	var d = DayWithinYear(t);
	if (m === 0) {
		return d + 1;
	}
	if (m === 1) {
		return d - 30;
	}
	var leap = InLeapYear(t);
	if (m === 2) {
		return d - 58 - leap;
	}
	if (m === 3) {
		return d - 89 - leap;
	}
	if (m === 4) {
		return d - 119 - leap;
	}
	if (m === 5) {
		return d - 150 - leap;
	}
	if (m === 6) {
		return d - 180 - leap;
	}
	if (m === 7) {
		return d - 211 - leap;
	}
	if (m === 8) {
		return d - 242 - leap;
	}
	if (m === 9) {
		return d - 272 - leap;
	}
	if (m === 10) {
		return d - 303 - leap;
	}
	if (m === 11) {
		return d - 333 - leap;
	}
	throw new $EvalError('Assertion failed: MonthFromTime returned an impossible value: ' + m);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./DayWithinYear":1576493738908,"./InLeapYear":1576493738912,"./MonthFromTime":1576493738914}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738908, function(require, module, exports) {


var Day = require('./Day');
var DayFromYear = require('./DayFromYear');
var YearFromTime = require('./YearFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.4

module.exports = function DayWithinYear(t) {
	return Day(t) - DayFromYear(YearFromTime(t));
};

}, function(modId) { var map = {"./Day":1576493738909,"./DayFromYear":1576493738910,"./YearFromTime":1576493738911}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738909, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var msPerDay = require('../helpers/timeConstants').msPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.2

module.exports = function Day(t) {
	return $floor(t / msPerDay);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738910, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function DayFromYear(y) {
	return (365 * (y - 1970)) + $floor((y - 1969) / 4) - $floor((y - 1901) / 100) + $floor((y - 1601) / 400);
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738911, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Date = GetIntrinsic('%Date%');

var callBound = require('../helpers/callBound');

var $getUTCFullYear = callBound('Date.prototype.getUTCFullYear');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function YearFromTime(t) {
	// largest y such that this.TimeFromYear(y) <= t
	return $getUTCFullYear(new $Date(t));
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738912, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $EvalError = GetIntrinsic('%EvalError%');

var DaysInYear = require('./DaysInYear');
var YearFromTime = require('./YearFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function InLeapYear(t) {
	var days = DaysInYear(YearFromTime(t));
	if (days === 365) {
		return 0;
	}
	if (days === 366) {
		return 1;
	}
	throw new $EvalError('Assertion failed: there are not 365 or 366 days in a year, got: ' + days);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./DaysInYear":1576493738913,"./YearFromTime":1576493738911}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738913, function(require, module, exports) {


var mod = require('../helpers/mod');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function DaysInYear(y) {
	if (mod(y, 4) !== 0) {
		return 365;
	}
	if (mod(y, 100) !== 0) {
		return 366;
	}
	if (mod(y, 400) !== 0) {
		return 365;
	}
	return 366;
};

}, function(modId) { var map = {"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738914, function(require, module, exports) {


var DayWithinYear = require('./DayWithinYear');
var InLeapYear = require('./InLeapYear');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.4

module.exports = function MonthFromTime(t) {
	var day = DayWithinYear(t);
	if (0 <= day && day < 31) {
		return 0;
	}
	var leap = InLeapYear(t);
	if (31 <= day && day < (59 + leap)) {
		return 1;
	}
	if ((59 + leap) <= day && day < (90 + leap)) {
		return 2;
	}
	if ((90 + leap) <= day && day < (120 + leap)) {
		return 3;
	}
	if ((120 + leap) <= day && day < (151 + leap)) {
		return 4;
	}
	if ((151 + leap) <= day && day < (181 + leap)) {
		return 5;
	}
	if ((181 + leap) <= day && day < (212 + leap)) {
		return 6;
	}
	if ((212 + leap) <= day && day < (243 + leap)) {
		return 7;
	}
	if ((243 + leap) <= day && day < (273 + leap)) {
		return 8;
	}
	if ((273 + leap) <= day && day < (304 + leap)) {
		return 9;
	}
	if ((304 + leap) <= day && day < (334 + leap)) {
		return 10;
	}
	if ((334 + leap) <= day && day < (365 + leap)) {
		return 11;
	}
};

}, function(modId) { var map = {"./DayWithinYear":1576493738908,"./InLeapYear":1576493738912}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738915, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');
var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-definepropertyorthrow

module.exports = function DefinePropertyOrThrow(O, P, desc) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	var Desc = isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, desc) ? desc : ToPropertyDescriptor(desc);
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc is not a valid Property Descriptor');
	}

	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		Desc
	);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPropertyDescriptor":1576493738836,"../helpers/DefineOwnProperty":1576493738882,"./FromPropertyDescriptor":1576493738885,"./IsAccessorDescriptor":1576493738873,"./IsDataDescriptor":1576493738874,"./IsPropertyKey":1576493738877,"./SameValue":1576493738887,"./ToPropertyDescriptor":1576493738878,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738916, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-deletepropertyorthrow

module.exports = function DeletePropertyOrThrow(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	// eslint-disable-next-line no-param-reassign
	var success = delete O[P];
	if (!success) {
		throw new $TypeError('Attempt to delete property failed.');
	}
	return success;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493738877,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738917, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var keys = require('object-keys');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-enumerableownnames

module.exports = function EnumerableOwnNames(O) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	return keys(O);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738918, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var getIteratorMethod = require('../helpers/getIteratorMethod');
var AdvanceStringIndex = require('./AdvanceStringIndex');
var Call = require('./Call');
var GetMethod = require('./GetMethod');
var IsArray = require('./IsArray');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-getiterator

module.exports = function GetIterator(obj, method) {
	var actualMethod = method;
	if (arguments.length < 2) {
		actualMethod = getIteratorMethod(
			{
				AdvanceStringIndex: AdvanceStringIndex,
				GetMethod: GetMethod,
				IsArray: IsArray,
				Type: Type
			},
			obj
		);
	}
	var iterator = Call(actualMethod, obj);
	if (Type(iterator) !== 'Object') {
		throw new $TypeError('iterator must return an object');
	}

	return iterator;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/getIteratorMethod":1576493738919,"./AdvanceStringIndex":1576493738867,"./Call":1576493738895,"./GetMethod":1576493738920,"./IsArray":1576493738872,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738919, function(require, module, exports) {


var hasSymbols = require('has-symbols')();
var GetIntrinsic = require('../GetIntrinsic');
var callBound = require('./callBound');

var $iterator = GetIntrinsic('%Symbol.iterator%', true);
var $stringSlice = callBound('String.prototype.slice');

module.exports = function getIteratorMethod(ES, iterable) {
	var usingIterator;
	if (hasSymbols) {
		usingIterator = ES.GetMethod(iterable, $iterator);
	} else if (ES.IsArray(iterable)) {
		usingIterator = function () {
			var i = -1;
			var arr = this; // eslint-disable-line no-invalid-this
			return {
				next: function () {
					i += 1;
					return {
						done: i >= arr.length,
						value: arr[i]
					};
				}
			};
		};
	} else if (ES.Type(iterable) === 'String') {
		usingIterator = function () {
			var i = 0;
			return {
				next: function () {
					var nextIndex = ES.AdvanceStringIndex(iterable, i, true);
					var value = $stringSlice(iterable, i, nextIndex);
					i = nextIndex;
					return {
						done: nextIndex > iterable.length,
						value: value
					};
				}
			};
		};
	}
	return usingIterator;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738920, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var GetV = require('./GetV');
var IsCallable = require('./IsCallable');
var IsPropertyKey = require('./IsPropertyKey');

/**
 * 7.3.9 - https://ecma-international.org/ecma-262/6.0/#sec-getmethod
 * 1. Assert: IsPropertyKey(P) is true.
 * 2. Let func be GetV(O, P).
 * 3. ReturnIfAbrupt(func).
 * 4. If func is either undefined or null, return undefined.
 * 5. If IsCallable(func) is false, throw a TypeError exception.
 * 6. Return func.
 */

module.exports = function GetMethod(O, P) {
	// 7.3.9.1
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	// 7.3.9.2
	var func = GetV(O, P);

	// 7.3.9.4
	if (func == null) {
		return void 0;
	}

	// 7.3.9.5
	if (!IsCallable(func)) {
		throw new $TypeError(P + 'is not a function');
	}

	// 7.3.9.6
	return func;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./GetV":1576493738921,"./IsCallable":1576493738880,"./IsPropertyKey":1576493738877}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738921, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var ToObject = require('./ToObject');

/**
 * 7.3.2 GetV (V, P)
 * 1. Assert: IsPropertyKey(P) is true.
 * 2. Let O be ToObject(V).
 * 3. ReturnIfAbrupt(O).
 * 4. Return O.[[Get]](P, V).
 */

module.exports = function GetV(V, P) {
	// 7.3.2.1
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	// 7.3.2.2-3
	var O = ToObject(V);

	// 7.3.2.4
	return O[P];
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493738877,"./ToObject":1576493738922}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738922, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Object = GetIntrinsic('%Object%');

var RequireObjectCoercible = require('./RequireObjectCoercible');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toobject

module.exports = function ToObject(value) {
	RequireObjectCoercible(value);
	return $Object(value);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./RequireObjectCoercible":1576493738901}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738923, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var hasSymbols = require('has-symbols')();

var $TypeError = GetIntrinsic('%TypeError%');

var $gOPN = GetIntrinsic('%Object.getOwnPropertyNames%');
var $gOPS = hasSymbols && GetIntrinsic('%Object.getOwnPropertySymbols%');
var keys = require('object-keys');

var esType = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-getownpropertykeys

module.exports = function GetOwnPropertyKeys(O, Type) {
	if (esType(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (Type === 'Symbol') {
		return $gOPS ? $gOPS(O) : [];
	}
	if (Type === 'String') {
		if (!$gOPN) {
			return keys(O);
		}
		return $gOPN(O);
	}
	throw new $TypeError('Assertion failed: `Type` must be `"String"` or `"Symbol"`');
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738924, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Function = GetIntrinsic('%Function%');
var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var IsConstructor = require('./IsConstructor');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-getprototypefromconstructor

module.exports = function GetPrototypeFromConstructor(constructor, intrinsicDefaultProto) {
	var intrinsic = GetIntrinsic(intrinsicDefaultProto); // throws if not a valid intrinsic
	if (!IsConstructor(constructor)) {
		throw new $TypeError('Assertion failed: `constructor` must be a constructor');
	}
	var proto = Get(constructor, 'prototype');
	if (Type(proto) !== 'Object') {
		if (!(constructor instanceof $Function)) {
			// ignore other realms, for now
			throw new $TypeError('cross-realm constructors not currently supported');
		}
		proto = intrinsic;
	}
	return proto;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493738893,"./IsConstructor":1576493738894,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738925, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $parseInt = GetIntrinsic('%parseInt%');

var inspect = require('object-inspect');

var regexTester = require('../helpers/regexTester');
var callBound = require('../helpers/callBound');
var every = require('../helpers/every');

var isDigit = regexTester(/^[0-9]$/);

var strSlice = callBound('String.prototype.slice');

var IsArray = require('./IsArray');
var IsInteger = require('./IsInteger');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-getsubstitution

// eslint-disable-next-line max-statements, max-params, max-lines-per-function
module.exports = function GetSubstitution(matched, str, position, captures, replacement) {
	if (Type(matched) !== 'String') {
		throw new $TypeError('Assertion failed: `matched` must be a String');
	}
	var matchLength = matched.length;

	if (Type(str) !== 'String') {
		throw new $TypeError('Assertion failed: `str` must be a String');
	}
	var stringLength = str.length;

	if (!IsInteger(position) || position < 0 || position > stringLength) {
		throw new $TypeError('Assertion failed: `position` must be a nonnegative integer, and less than or equal to the length of `string`, got ' + inspect(position));
	}

	var ES = this;
	var isStringOrHole = function (capture, index, arr) { return ES.Type(capture) === 'String' || !(index in arr); };
	if (!IsArray(captures) || !every(captures, isStringOrHole)) {
		throw new $TypeError('Assertion failed: `captures` must be a List of Strings, got ' + inspect(captures));
	}

	if (Type(replacement) !== 'String') {
		throw new $TypeError('Assertion failed: `replacement` must be a String');
	}

	var tailPos = position + matchLength;
	var m = captures.length;

	var result = '';
	for (var i = 0; i < replacement.length; i += 1) {
		// if this is a $, and it's not the end of the replacement
		var current = replacement[i];
		var isLast = (i + 1) >= replacement.length;
		var nextIsLast = (i + 2) >= replacement.length;
		if (current === '$' && !isLast) {
			var next = replacement[i + 1];
			if (next === '$') {
				result += '$';
				i += 1;
			} else if (next === '&') {
				result += matched;
				i += 1;
			} else if (next === '`') {
				result += position === 0 ? '' : strSlice(str, 0, position - 1);
				i += 1;
			} else if (next === "'") {
				result += tailPos >= stringLength ? '' : strSlice(str, tailPos);
				i += 1;
			} else {
				var nextNext = nextIsLast ? null : replacement[i + 2];
				if (isDigit(next) && next !== '0' && (nextIsLast || !isDigit(nextNext))) {
					// $1 through $9, and not followed by a digit
					var n = $parseInt(next, 10);
					// if (n > m, impl-defined)
					result += (n <= m && Type(captures[n - 1]) === 'Undefined') ? '' : captures[n - 1];
					i += 1;
				} else if (isDigit(next) && (nextIsLast || isDigit(nextNext))) {
					// $00 through $99
					var nn = next + nextNext;
					var nnI = $parseInt(nn, 10) - 1;
					// if nn === '00' or nn > m, impl-defined
					result += (nn <= m && Type(captures[nnI]) === 'Undefined') ? '' : captures[nnI];
					i += 2;
				} else {
					result += '$';
				}
			}
		} else {
			// the final $, or else not a $
			result += replacement[i];
		}
	}
	return result;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/regexTester":1576493738861,"../helpers/callBound":1576493738814,"../helpers/every":1576493738884,"./IsArray":1576493738872,"./IsInteger":1576493738868,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738926, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var has = require('has');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-hasownproperty

module.exports = function HasOwnProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return has(O, P);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493738877,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738927, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-hasproperty

module.exports = function HasProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return P in O;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493738877,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738928, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var mod = require('../helpers/mod');
var timeConstants = require('../helpers/timeConstants');
var msPerHour = timeConstants.msPerHour;
var HoursPerDay = timeConstants.HoursPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function HourFromTime(t) {
	return mod($floor(t / msPerHour), HoursPerDay);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738929, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $hasInstance = GetIntrinsic('Symbol.hasInstance', true);

var Call = require('./Call');
var GetMethod = require('./GetMethod');
var IsCallable = require('./IsCallable');
var OrdinaryHasInstance = require('./OrdinaryHasInstance');
var ToBoolean = require('./ToBoolean');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-instanceofoperator

module.exports = function InstanceofOperator(O, C) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	var instOfHandler = $hasInstance ? GetMethod(C, $hasInstance) : void 0;
	if (typeof instOfHandler !== 'undefined') {
		return ToBoolean(Call(instOfHandler, C, [O]));
	}
	if (!IsCallable(C)) {
		throw new $TypeError('`C` is not Callable');
	}
	return OrdinaryHasInstance(C, O);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Call":1576493738895,"./GetMethod":1576493738920,"./IsCallable":1576493738880,"./OrdinaryHasInstance":1576493738930,"./ToBoolean":1576493738879,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738930, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var IsCallable = require('./IsCallable');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinaryhasinstance

module.exports = function OrdinaryHasInstance(C, O) {
	if (IsCallable(C) === false) {
		return false;
	}
	if (Type(O) !== 'Object') {
		return false;
	}
	var P = Get(C, 'prototype');
	if (Type(P) !== 'Object') {
		throw new $TypeError('OrdinaryHasInstance called on an object with an invalid prototype property.');
	}
	return O instanceof C;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493738893,"./IsCallable":1576493738880,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738931, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $arraySlice = require('../helpers/callBound')('Array.prototype.slice');

var Call = require('./Call');
var GetV = require('./GetV');
var IsPropertyKey = require('./IsPropertyKey');

// https://ecma-international.org/ecma-262/6.0/#sec-invoke

module.exports = function Invoke(O, P) {
	if (!IsPropertyKey(P)) {
		throw new $TypeError('P must be a Property Key');
	}
	var argumentsList = $arraySlice(arguments, 2);
	var func = GetV(O, P);
	return Call(func, O, argumentsList);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Call":1576493738895,"./GetV":1576493738921,"./IsPropertyKey":1576493738877}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738932, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $isConcatSpreadable = GetIntrinsic('%Symbol.isConcatSpreadable%', true);

var Get = require('./Get');
var IsArray = require('./IsArray');
var ToBoolean = require('./ToBoolean');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-isconcatspreadable

module.exports = function IsConcatSpreadable(O) {
	if (Type(O) !== 'Object') {
		return false;
	}
	if ($isConcatSpreadable) {
		var spreadable = Get(O, $isConcatSpreadable);
		if (typeof spreadable !== 'undefined') {
			return ToBoolean(spreadable);
		}
	}
	return IsArray(O);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493738893,"./IsArray":1576493738872,"./ToBoolean":1576493738879,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738933, function(require, module, exports) {


var callBound = require('../helpers/callBound');

var $PromiseThen = callBound('Promise.prototype.then', true);

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ispromise

module.exports = function IsPromise(x) {
	if (Type(x) !== 'Object') {
		return false;
	}
	if (!$PromiseThen) { // Promises are not supported
		return false;
	}
	try {
		$PromiseThen(x); // throws if not a promise
	} catch (e) {
		return false;
	}
	return true;
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738934, function(require, module, exports) {


var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');

var Type = require('./Type');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');

// https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type

module.exports = function IsPropertyDescriptor(Desc) {
	return isPropertyDescriptor({
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor,
		Type: Type
	}, Desc);
};

}, function(modId) { var map = {"../helpers/isPropertyDescriptor":1576493738836,"./Type":1576493738864,"./IsDataDescriptor":1576493738874,"./IsAccessorDescriptor":1576493738873}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738935, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Call = require('./Call');
var GetMethod = require('./GetMethod');
var IsCallable = require('./IsCallable');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorclose

module.exports = function IteratorClose(iterator, completion) {
	if (Type(iterator) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(iterator) is not Object');
	}
	if (!IsCallable(completion)) {
		throw new $TypeError('Assertion failed: completion is not a thunk for a Completion Record');
	}
	var completionThunk = completion;

	var iteratorReturn = GetMethod(iterator, 'return');

	if (typeof iteratorReturn === 'undefined') {
		return completionThunk();
	}

	var completionRecord;
	try {
		var innerResult = Call(iteratorReturn, iterator, []);
	} catch (e) {
		// if we hit here, then "e" is the innerResult completion that needs re-throwing

		// if the completion is of type "throw", this will throw.
		completionRecord = completionThunk();
		completionThunk = null; // ensure it's not called twice.

		// if not, then return the innerResult completion
		throw e;
	}
	completionRecord = completionThunk(); // if innerResult worked, then throw if the completion does
	completionThunk = null; // ensure it's not called twice.

	if (Type(innerResult) !== 'Object') {
		throw new $TypeError('iterator .return must return an object');
	}

	return completionRecord;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Call":1576493738895,"./GetMethod":1576493738920,"./IsCallable":1576493738880,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738936, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var ToBoolean = require('./ToBoolean');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorcomplete

module.exports = function IteratorComplete(iterResult) {
	if (Type(iterResult) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
	}
	return ToBoolean(Get(iterResult, 'done'));
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493738893,"./ToBoolean":1576493738879,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738937, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Invoke = require('./Invoke');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratornext

module.exports = function IteratorNext(iterator, value) {
	var result = Invoke(iterator, 'next', arguments.length < 2 ? [] : [value]);
	if (Type(result) !== 'Object') {
		throw new $TypeError('iterator next must return an object');
	}
	return result;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Invoke":1576493738931,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738938, function(require, module, exports) {


var IteratorComplete = require('./IteratorComplete');
var IteratorNext = require('./IteratorNext');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorstep

module.exports = function IteratorStep(iterator) {
	var result = IteratorNext(iterator);
	var done = IteratorComplete(result);
	return done === true ? false : result;
};


}, function(modId) { var map = {"./IteratorComplete":1576493738936,"./IteratorNext":1576493738937}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738939, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorvalue

module.exports = function IteratorValue(iterResult) {
	if (Type(iterResult) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
	}
	return Get(iterResult, 'value');
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493738893,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738940, function(require, module, exports) {


var $isFinite = require('../helpers/isFinite');
var msPerDay = require('../helpers/timeConstants').msPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.13

module.exports = function MakeDate(day, time) {
	if (!$isFinite(day) || !$isFinite(time)) {
		return NaN;
	}
	return (day * msPerDay) + time;
};

}, function(modId) { var map = {"../helpers/isFinite":1576493738812,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738941, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');
var $DateUTC = GetIntrinsic('%Date.UTC%');

var mod = require('../helpers/mod');
var $isFinite = require('../helpers/isFinite');

var DateFromTime = require('./DateFromTime');
var Day = require('./Day');
var MonthFromTime = require('./MonthFromTime');
var ToInteger = require('./ToInteger');
var YearFromTime = require('./YearFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.12

module.exports = function MakeDay(year, month, date) {
	if (!$isFinite(year) || !$isFinite(month) || !$isFinite(date)) {
		return NaN;
	}
	var y = ToInteger(year);
	var m = ToInteger(month);
	var dt = ToInteger(date);
	var ym = y + $floor(m / 12);
	var mn = mod(m, 12);
	var t = $DateUTC(ym, mn, 1);
	if (YearFromTime(t) !== ym || MonthFromTime(t) !== mn || DateFromTime(t) !== 1) {
		return NaN;
	}
	return Day(t) + dt - 1;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/isFinite":1576493738812,"./DateFromTime":1576493738907,"./Day":1576493738909,"./MonthFromTime":1576493738914,"./ToInteger":1576493738905,"./YearFromTime":1576493738911}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738942, function(require, module, exports) {


var $isFinite = require('../helpers/isFinite');
var timeConstants = require('../helpers/timeConstants');
var msPerSecond = timeConstants.msPerSecond;
var msPerMinute = timeConstants.msPerMinute;
var msPerHour = timeConstants.msPerHour;

var ToInteger = require('./ToInteger');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.11

module.exports = function MakeTime(hour, min, sec, ms) {
	if (!$isFinite(hour) || !$isFinite(min) || !$isFinite(sec) || !$isFinite(ms)) {
		return NaN;
	}
	var h = ToInteger(hour);
	var m = ToInteger(min);
	var s = ToInteger(sec);
	var milli = ToInteger(ms);
	var t = (h * msPerHour) + (m * msPerMinute) + (s * msPerSecond) + milli;
	return t;
};

}, function(modId) { var map = {"../helpers/isFinite":1576493738812,"../helpers/timeConstants":1576493738821,"./ToInteger":1576493738905}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738943, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var mod = require('../helpers/mod');
var timeConstants = require('../helpers/timeConstants');
var msPerMinute = timeConstants.msPerMinute;
var MinutesPerHour = timeConstants.MinutesPerHour;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function MinFromTime(t) {
	return mod($floor(t / msPerMinute), MinutesPerHour);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738944, function(require, module, exports) {


var mod = require('../helpers/mod');

// https://ecma-international.org/ecma-262/5.1/#sec-5.2

module.exports = function modulo(x, y) {
	return mod(x, y);
};

}, function(modId) { var map = {"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738945, function(require, module, exports) {


var mod = require('../helpers/mod');
var msPerSecond = require('../helpers/timeConstants').msPerSecond;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function msFromTime(t) {
	return mod(t, msPerSecond);
};

}, function(modId) { var map = {"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738946, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $ObjectCreate = GetIntrinsic('%Object.create%');
var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-objectcreate

module.exports = function ObjectCreate(proto, internalSlotsList) {
	if (proto !== null && Type(proto) !== 'Object') {
		throw new $TypeError('Assertion failed: `proto` must be null or an object');
	}
	var slots = arguments.length < 2 ? [] : internalSlotsList;
	if (slots.length > 0) {
		throw new $SyntaxError('es-abstract does not yet support internal slots');
	}

	if (proto === null && !$ObjectCreate) {
		throw new $SyntaxError('native Object.create support is required to create null objects');
	}

	return $ObjectCreate(proto);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738947, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinaryhasproperty

module.exports = function OrdinaryHasProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	return P in O;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493738877,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738948, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var regexExec = require('../helpers/callBound')('RegExp.prototype.exec');

var Call = require('./Call');
var Get = require('./Get');
var IsCallable = require('./IsCallable');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-regexpexec

module.exports = function RegExpExec(R, S) {
	if (Type(R) !== 'Object') {
		throw new $TypeError('Assertion failed: `R` must be an Object');
	}
	if (Type(S) !== 'String') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	var exec = Get(R, 'exec');
	if (IsCallable(exec)) {
		var result = Call(exec, R, [S]);
		if (result === null || Type(result) === 'Object') {
			return result;
		}
		throw new $TypeError('"exec" method must return `null` or an Object');
	}
	return regexExec(R, S);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Call":1576493738895,"./Get":1576493738893,"./IsCallable":1576493738880,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738949, function(require, module, exports) {


var $isNaN = require('../helpers/isNaN');

// https://www.ecma-international.org/ecma-262/6.0/#sec-samevaluezero

module.exports = function SameValueZero(x, y) {
	return (x === y) || ($isNaN(x) && $isNaN(y));
};

}, function(modId) { var map = {"../helpers/isNaN":1576493738811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738950, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var mod = require('../helpers/mod');
var timeConstants = require('../helpers/timeConstants');
var msPerSecond = timeConstants.msPerSecond;
var SecondsPerMinute = timeConstants.SecondsPerMinute;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function SecFromTime(t) {
	return mod($floor(t / msPerSecond), SecondsPerMinute);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738951, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-set-o-p-v-throw

module.exports = function Set(O, P, V, Throw) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	if (Type(Throw) !== 'Boolean') {
		throw new $TypeError('Assertion failed: `Throw` must be a Boolean');
	}
	if (Throw) {
		O[P] = V; // eslint-disable-line no-param-reassign
		return true;
	} else {
		try {
			O[P] = V; // eslint-disable-line no-param-reassign
		} catch (e) {
			return false;
		}
	}
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493738877,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738952, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var has = require('has');

var $TypeError = GetIntrinsic('%TypeError%');

var getSymbolDescription = require('../helpers/getSymbolDescription');

var DefinePropertyOrThrow = require('./DefinePropertyOrThrow');
var IsExtensible = require('./IsExtensible');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-setfunctionname

module.exports = function SetFunctionName(F, name) {
	if (typeof F !== 'function') {
		throw new $TypeError('Assertion failed: `F` must be a function');
	}
	if (!IsExtensible(F) || has(F, 'name')) {
		throw new $TypeError('Assertion failed: `F` must be extensible, and must not have a `name` own property');
	}
	var nameType = Type(name);
	if (nameType !== 'Symbol' && nameType !== 'String') {
		throw new $TypeError('Assertion failed: `name` must be a Symbol or a String');
	}
	if (nameType === 'Symbol') {
		var description = getSymbolDescription(name);
		// eslint-disable-next-line no-param-reassign
		name = typeof description === 'undefined' ? '' : '[' + description + ']';
	}
	if (arguments.length > 2) {
		var prefix = arguments[2];
		// eslint-disable-next-line no-param-reassign
		name = prefix + ' ' + name;
	}
	return DefinePropertyOrThrow(F, 'name', {
		'[[Value]]': name,
		'[[Writable]]': false,
		'[[Enumerable]]': false,
		'[[Configurable]]': true
	});
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/getSymbolDescription":1576493738953,"./DefinePropertyOrThrow":1576493738915,"./IsExtensible":1576493738876,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738953, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var callBound = require('./callBound');

var $SyntaxError = GetIntrinsic('%SyntaxError%');
var symToStr = callBound('Symbol.prototype.toString', true);

var getInferredName = require('./getInferredName');

module.exports = function getSymbolDescription(symbol) {
	if (!symToStr) {
		throw new $SyntaxError('Symbols are not supported in this environment');
	}
	var str = symToStr(symbol); // will throw if not a symbol

	if (getInferredName) {
		var name = getInferredName(symbol);
		if (name === '') { return; }
		// eslint-disable-next-line consistent-return
		return name.slice(1, -1); // name.slice('['.length, -']'.length);
	}

	var desc = str.slice(7, -1); // str.slice('Symbol('.length, -')'.length);
	if (desc) {
		// eslint-disable-next-line consistent-return
		return desc;
	}
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./callBound":1576493738814,"./getInferredName":1576493738954}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738954, function(require, module, exports) {


var getInferredName;
try {
	// eslint-disable-next-line no-new-func
	getInferredName = Function('s', 'return { [s]() {} }[s].name;');
} catch (e) {}

var inferred = function () {};
module.exports = getInferredName && inferred.name === 'inferred' ? getInferredName : null;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738955, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $SyntaxError = GetIntrinsic('%SyntaxError%');
var $TypeError = GetIntrinsic('%TypeError%');
var $preventExtensions = GetIntrinsic('%Object.preventExtensions%');
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $gOPN = GetIntrinsic('%Object.getOwnPropertyNames%');

var forEach = require('../helpers/forEach');

var DefinePropertyOrThrow = require('./DefinePropertyOrThrow');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-setintegritylevel

module.exports = function SetIntegrityLevel(O, level) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (level !== 'sealed' && level !== 'frozen') {
		throw new $TypeError('Assertion failed: `level` must be `"sealed"` or `"frozen"`');
	}
	if (!$preventExtensions) {
		throw new $SyntaxError('SetIntegrityLevel requires native `Object.preventExtensions` support');
	}
	var status = $preventExtensions(O);
	if (!status) {
		return false;
	}
	if (!$gOPN) {
		throw new $SyntaxError('SetIntegrityLevel requires native `Object.getOwnPropertyNames` support');
	}
	var theKeys = $gOPN(O);
	if (level === 'sealed') {
		forEach(theKeys, function (k) {
			DefinePropertyOrThrow(O, k, { configurable: false });
		});
	} else if (level === 'frozen') {
		forEach(theKeys, function (k) {
			var currentDesc = $gOPD(O, k);
			if (typeof currentDesc !== 'undefined') {
				var desc;
				if (IsAccessorDescriptor(ToPropertyDescriptor(currentDesc))) {
					desc = { configurable: false };
				} else {
					desc = { configurable: false, writable: false };
				}
				DefinePropertyOrThrow(O, k, desc);
			}
		});
	}
	return true;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/forEach":1576493738956,"./DefinePropertyOrThrow":1576493738915,"./IsAccessorDescriptor":1576493738873,"./ToPropertyDescriptor":1576493738878,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738956, function(require, module, exports) {


module.exports = function forEach(array, callback) {
	for (var i = 0; i < array.length; i += 1) {
		callback(array[i], i, array); // eslint-disable-line callback-return
	}
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738957, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var IsConstructor = require('./IsConstructor');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-speciesconstructor

module.exports = function SpeciesConstructor(O, defaultConstructor) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	var C = O.constructor;
	if (typeof C === 'undefined') {
		return defaultConstructor;
	}
	if (Type(C) !== 'Object') {
		throw new $TypeError('O.constructor is not an Object');
	}
	var S = $species ? C[$species] : void 0;
	if (S == null) {
		return defaultConstructor;
	}
	if (IsConstructor(S)) {
		return S;
	}
	throw new $TypeError('no constructor found');
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsConstructor":1576493738894,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738958, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var callBound = require('../helpers/callBound');

var $SymbolToString = callBound('Symbol.prototype.toString', true);

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-symboldescriptivestring

module.exports = function SymbolDescriptiveString(sym) {
	if (Type(sym) !== 'Symbol') {
		throw new $TypeError('Assertion failed: `sym` must be a Symbol');
	}
	return $SymbolToString(sym);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738959, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $gOPN = GetIntrinsic('%Object.getOwnPropertyNames%');
var $TypeError = GetIntrinsic('%TypeError%');

var every = require('../helpers/every');

var IsDataDescriptor = require('./IsDataDescriptor');
var IsExtensible = require('./IsExtensible');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-testintegritylevel

module.exports = function TestIntegrityLevel(O, level) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (level !== 'sealed' && level !== 'frozen') {
		throw new $TypeError('Assertion failed: `level` must be `"sealed"` or `"frozen"`');
	}
	var status = IsExtensible(O);
	if (status) {
		return false;
	}
	var theKeys = $gOPN(O);
	return theKeys.length === 0 || every(theKeys, function (k) {
		var currentDesc = $gOPD(O, k);
		if (typeof currentDesc !== 'undefined') {
			if (currentDesc.configurable) {
				return false;
			}
			if (level === 'frozen' && IsDataDescriptor(ToPropertyDescriptor(currentDesc)) && currentDesc.writable) {
				return false;
			}
		}
		return true;
	});
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/every":1576493738884,"./IsDataDescriptor":1576493738874,"./IsExtensible":1576493738876,"./ToPropertyDescriptor":1576493738878,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738960, function(require, module, exports) {


var $BooleanValueOf = require('../helpers/callBound')('Boolean.prototype.valueOf');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-boolean-prototype-object

module.exports = function thisBooleanValue(value) {
	if (Type(value) === 'Boolean') {
		return value;
	}

	return $BooleanValueOf(value);
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738961, function(require, module, exports) {


var callBound = require('../helpers/callBound');

var Type = require('./Type');

var $NumberValueOf = callBound('Number.prototype.valueOf');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-number-prototype-object

module.exports = function thisNumberValue(value) {
	if (Type(value) === 'Number') {
		return value;
	}

	return $NumberValueOf(value);
};


}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738962, function(require, module, exports) {


var $StringValueOf = require('../helpers/callBound')('String.prototype.valueOf');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-string-prototype-object

module.exports = function thisStringValue(value) {
	if (Type(value) === 'String') {
		return value;
	}

	return $StringValueOf(value);
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738963, function(require, module, exports) {


var $DateValueOf = require('../helpers/callBound')('Date.prototype.valueOf');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-date-prototype-object

module.exports = function thisTimeValue(value) {
	return $DateValueOf(value);
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738964, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Date = GetIntrinsic('%Date%');
var $Number = GetIntrinsic('%Number%');
var $abs = GetIntrinsic('%Math.abs%');

var $isFinite = require('../helpers/isFinite');

var ToNumber = require('./ToNumber');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.14

module.exports = function TimeClip(time) {
	if (!$isFinite(time) || $abs(time) > 8.64e15) {
		return NaN;
	}
	return $Number(new $Date(ToNumber(time)));
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isFinite":1576493738812,"./ToNumber":1576493738860}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738965, function(require, module, exports) {


var msPerDay = require('../helpers/timeConstants').msPerDay;

var DayFromYear = require('./DayFromYear');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function TimeFromYear(y) {
	return msPerDay * DayFromYear(y);
};

}, function(modId) { var map = {"../helpers/timeConstants":1576493738821,"./DayFromYear":1576493738910}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738966, function(require, module, exports) {


var mod = require('../helpers/mod');
var msPerDay = require('../helpers/timeConstants').msPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.2

module.exports = function TimeWithinDay(t) {
	return mod(t, msPerDay);
};


}, function(modId) { var map = {"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738967, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $Date = GetIntrinsic('%Date%');

var $isNaN = require('../helpers/isNaN');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-todatestring

module.exports = function ToDateString(tv) {
	if (Type(tv) !== 'Number') {
		throw new $TypeError('Assertion failed: `tv` must be a Number');
	}
	if ($isNaN(tv)) {
		return 'Invalid Date';
	}
	return $Date(tv);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"./Type":1576493738864}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738968, function(require, module, exports) {


var ToUint16 = require('./ToUint16');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toint16

module.exports = function ToInt16(argument) {
	var int16bit = ToUint16(argument);
	return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
};

}, function(modId) { var map = {"./ToUint16":1576493738969}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738969, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var ToNumber = require('./ToNumber');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var $sign = require('../helpers/sign');
var $mod = require('../helpers/mod');

var $floor = $Math.floor;
var $abs = $Math.abs;

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.7

module.exports = function ToUint16(value) {
	var number = ToNumber(value);
	if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
	var posInt = $sign(number) * $floor($abs(number));
	return $mod(posInt, 0x10000);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToNumber":1576493738860,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812,"../helpers/sign":1576493738840,"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738970, function(require, module, exports) {


var ToNumber = require('./ToNumber');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.5

module.exports = function ToInt32(x) {
	return ToNumber(x) >> 0;
};

}, function(modId) { var map = {"./ToNumber":1576493738860}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738971, function(require, module, exports) {


var ToUint8 = require('./ToUint8');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toint8

module.exports = function ToInt8(argument) {
	var int8bit = ToUint8(argument);
	return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
};

}, function(modId) { var map = {"./ToUint8":1576493738972}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738972, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var ToNumber = require('./ToNumber');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var $sign = require('../helpers/sign');
var $mod = require('../helpers/mod');

var $floor = $Math.floor;
var $abs = $Math.abs;

module.exports = function ToUint8(argument) {
	var number = ToNumber(argument);
	if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
	var posInt = $sign(number) * $floor($abs(number));
	return $mod(posInt, 0x100);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToNumber":1576493738860,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812,"../helpers/sign":1576493738840,"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738973, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $String = GetIntrinsic('%String%');

var ToPrimitive = require('./ToPrimitive');
var ToString = require('./ToString');

// https://www.ecma-international.org/ecma-262/6.0/#sec-topropertykey

module.exports = function ToPropertyKey(argument) {
	var key = ToPrimitive(argument, $String);
	return typeof key === 'symbol' ? key : ToString(key);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToPrimitive":1576493738863,"./ToString":1576493738890}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738974, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var ToNumber = require('./ToNumber');

var $isNaN = require('../helpers/isNaN');

var $floor = $Math.floor;

// https://www.ecma-international.org/ecma-262/6.0/#sec-touint8clamp

module.exports = function ToUint8Clamp(argument) {
	var number = ToNumber(argument);
	if ($isNaN(number) || number <= 0) { return 0; }
	if (number >= 0xFF) { return 0xFF; }
	var f = $floor(argument);
	if (f + 0.5 < number) { return f + 1; }
	if (number < f + 0.5) { return f; }
	if (f % 2 !== 0) { return f + 1; }
	return f;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToNumber":1576493738860,"../helpers/isNaN":1576493738811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738975, function(require, module, exports) {


var mod = require('../helpers/mod');

var Day = require('./Day');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.6

module.exports = function WeekDay(t) {
	return mod(Day(t) + 4, 7);
};

}, function(modId) { var map = {"../helpers/mod":1576493738826,"./Day":1576493738909}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738976, function(require, module, exports) {


/* eslint global-require: 0 */
// https://www.ecma-international.org/ecma-262/7.0/#sec-abstract-operations
var ES2016 = {
	'Abstract Equality Comparison': require('./2016/AbstractEqualityComparison'),
	'Abstract Relational Comparison': require('./2016/AbstractRelationalComparison'),
	'Strict Equality Comparison': require('./2016/StrictEqualityComparison'),
	AdvanceStringIndex: require('./2016/AdvanceStringIndex'),
	ArrayCreate: require('./2016/ArrayCreate'),
	ArraySetLength: require('./2016/ArraySetLength'),
	ArraySpeciesCreate: require('./2016/ArraySpeciesCreate'),
	Call: require('./2016/Call'),
	CanonicalNumericIndexString: require('./2016/CanonicalNumericIndexString'),
	CompletePropertyDescriptor: require('./2016/CompletePropertyDescriptor'),
	CreateDataProperty: require('./2016/CreateDataProperty'),
	CreateDataPropertyOrThrow: require('./2016/CreateDataPropertyOrThrow'),
	CreateHTML: require('./2016/CreateHTML'),
	CreateIterResultObject: require('./2016/CreateIterResultObject'),
	CreateListFromArrayLike: require('./2016/CreateListFromArrayLike'),
	CreateMethodProperty: require('./2016/CreateMethodProperty'),
	DateFromTime: require('./2016/DateFromTime'),
	Day: require('./2016/Day'),
	DayFromYear: require('./2016/DayFromYear'),
	DaysInYear: require('./2016/DaysInYear'),
	DayWithinYear: require('./2016/DayWithinYear'),
	DefinePropertyOrThrow: require('./2016/DefinePropertyOrThrow'),
	DeletePropertyOrThrow: require('./2016/DeletePropertyOrThrow'),
	EnumerableOwnNames: require('./2016/EnumerableOwnNames'),
	FromPropertyDescriptor: require('./2016/FromPropertyDescriptor'),
	Get: require('./2016/Get'),
	GetIterator: require('./2016/GetIterator'),
	GetMethod: require('./2016/GetMethod'),
	GetOwnPropertyKeys: require('./2016/GetOwnPropertyKeys'),
	GetPrototypeFromConstructor: require('./2016/GetPrototypeFromConstructor'),
	GetSubstitution: require('./2016/GetSubstitution'),
	GetV: require('./2016/GetV'),
	HasOwnProperty: require('./2016/HasOwnProperty'),
	HasProperty: require('./2016/HasProperty'),
	HourFromTime: require('./2016/HourFromTime'),
	InLeapYear: require('./2016/InLeapYear'),
	InstanceofOperator: require('./2016/InstanceofOperator'),
	Invoke: require('./2016/Invoke'),
	IsAccessorDescriptor: require('./2016/IsAccessorDescriptor'),
	IsArray: require('./2016/IsArray'),
	IsCallable: require('./2016/IsCallable'),
	IsConcatSpreadable: require('./2016/IsConcatSpreadable'),
	IsConstructor: require('./2016/IsConstructor'),
	IsDataDescriptor: require('./2016/IsDataDescriptor'),
	IsExtensible: require('./2016/IsExtensible'),
	IsGenericDescriptor: require('./2016/IsGenericDescriptor'),
	IsInteger: require('./2016/IsInteger'),
	IsPromise: require('./2016/IsPromise'),
	IsPropertyDescriptor: require('./2016/IsPropertyDescriptor'),
	IsPropertyKey: require('./2016/IsPropertyKey'),
	IsRegExp: require('./2016/IsRegExp'),
	IterableToArrayLike: require('./2016/IterableToArrayLike'),
	IteratorClose: require('./2016/IteratorClose'),
	IteratorComplete: require('./2016/IteratorComplete'),
	IteratorNext: require('./2016/IteratorNext'),
	IteratorStep: require('./2016/IteratorStep'),
	IteratorValue: require('./2016/IteratorValue'),
	MakeDate: require('./2016/MakeDate'),
	MakeDay: require('./2016/MakeDay'),
	MakeTime: require('./2016/MakeTime'),
	MinFromTime: require('./2016/MinFromTime'),
	modulo: require('./2016/modulo'),
	MonthFromTime: require('./2016/MonthFromTime'),
	msFromTime: require('./2016/msFromTime'),
	ObjectCreate: require('./2016/ObjectCreate'),
	OrdinaryDefineOwnProperty: require('./2016/OrdinaryDefineOwnProperty'),
	OrdinaryGetOwnProperty: require('./2016/OrdinaryGetOwnProperty'),
	OrdinaryGetPrototypeOf: require('./2016/OrdinaryGetPrototypeOf'),
	OrdinarySetPrototypeOf: require('./2016/OrdinarySetPrototypeOf'),
	OrdinaryHasInstance: require('./2016/OrdinaryHasInstance'),
	OrdinaryHasProperty: require('./2016/OrdinaryHasProperty'),
	RegExpExec: require('./2016/RegExpExec'),
	RequireObjectCoercible: require('./2016/RequireObjectCoercible'),
	SameValue: require('./2016/SameValue'),
	SameValueNonNumber: require('./2016/SameValueNonNumber'),
	SameValueZero: require('./2016/SameValueZero'),
	SecFromTime: require('./2016/SecFromTime'),
	Set: require('./2016/Set'),
	SetFunctionName: require('./2016/SetFunctionName'),
	SetIntegrityLevel: require('./2016/SetIntegrityLevel'),
	SpeciesConstructor: require('./2016/SpeciesConstructor'),
	SymbolDescriptiveString: require('./2016/SymbolDescriptiveString'),
	TestIntegrityLevel: require('./2016/TestIntegrityLevel'),
	thisBooleanValue: require('./2016/thisBooleanValue'),
	thisNumberValue: require('./2016/thisNumberValue'),
	thisStringValue: require('./2016/thisStringValue'),
	thisTimeValue: require('./2016/thisTimeValue'),
	TimeClip: require('./2016/TimeClip'),
	TimeFromYear: require('./2016/TimeFromYear'),
	TimeWithinDay: require('./2016/TimeWithinDay'),
	ToBoolean: require('./2016/ToBoolean'),
	ToDateString: require('./2016/ToDateString'),
	ToInt16: require('./2016/ToInt16'),
	ToInt32: require('./2016/ToInt32'),
	ToInt8: require('./2016/ToInt8'),
	ToInteger: require('./2016/ToInteger'),
	ToLength: require('./2016/ToLength'),
	ToNumber: require('./2016/ToNumber'),
	ToObject: require('./2016/ToObject'),
	ToPrimitive: require('./2016/ToPrimitive'),
	ToPropertyDescriptor: require('./2016/ToPropertyDescriptor'),
	ToPropertyKey: require('./2016/ToPropertyKey'),
	ToString: require('./2016/ToString'),
	ToUint16: require('./2016/ToUint16'),
	ToUint32: require('./2016/ToUint32'),
	ToUint8: require('./2016/ToUint8'),
	ToUint8Clamp: require('./2016/ToUint8Clamp'),
	Type: require('./2016/Type'),
	ValidateAndApplyPropertyDescriptor: require('./2016/ValidateAndApplyPropertyDescriptor'),
	WeekDay: require('./2016/WeekDay'),
	YearFromTime: require('./2016/YearFromTime')
};

module.exports = ES2016;

}, function(modId) { var map = {"./2016/AbstractEqualityComparison":1576493738977,"./2016/AbstractRelationalComparison":1576493738981,"./2016/StrictEqualityComparison":1576493738982,"./2016/AdvanceStringIndex":1576493738983,"./2016/ArrayCreate":1576493738985,"./2016/ArraySetLength":1576493738986,"./2016/ArraySpeciesCreate":1576493739004,"./2016/Call":1576493739007,"./2016/CanonicalNumericIndexString":1576493739008,"./2016/CompletePropertyDescriptor":1576493739009,"./2016/CreateDataProperty":1576493739010,"./2016/CreateDataPropertyOrThrow":1576493739011,"./2016/CreateHTML":1576493739012,"./2016/CreateIterResultObject":1576493739014,"./2016/CreateListFromArrayLike":1576493739015,"./2016/CreateMethodProperty":1576493739018,"./2016/DateFromTime":1576493739019,"./2016/Day":1576493739021,"./2016/DayFromYear":1576493739022,"./2016/DaysInYear":1576493739025,"./2016/DayWithinYear":1576493739020,"./2016/DefinePropertyOrThrow":1576493739027,"./2016/DeletePropertyOrThrow":1576493739028,"./2016/EnumerableOwnNames":1576493739029,"./2016/FromPropertyDescriptor":1576493738997,"./2016/Get":1576493739005,"./2016/GetIterator":1576493739030,"./2016/GetMethod":1576493739031,"./2016/GetOwnPropertyKeys":1576493739034,"./2016/GetPrototypeFromConstructor":1576493739035,"./2016/GetSubstitution":1576493739036,"./2016/GetV":1576493739032,"./2016/HasOwnProperty":1576493739037,"./2016/HasProperty":1576493739038,"./2016/HourFromTime":1576493739039,"./2016/InLeapYear":1576493739024,"./2016/InstanceofOperator":1576493739040,"./2016/Invoke":1576493739042,"./2016/IsAccessorDescriptor":1576493738988,"./2016/IsArray":1576493738987,"./2016/IsCallable":1576493738995,"./2016/IsConcatSpreadable":1576493739043,"./2016/IsConstructor":1576493739006,"./2016/IsDataDescriptor":1576493738989,"./2016/IsExtensible":1576493738991,"./2016/IsGenericDescriptor":1576493738998,"./2016/IsInteger":1576493738984,"./2016/IsPromise":1576493739044,"./2016/IsPropertyDescriptor":1576493739045,"./2016/IsPropertyKey":1576493738992,"./2016/IsRegExp":1576493739001,"./2016/IterableToArrayLike":1576493739046,"./2016/IteratorClose":1576493739051,"./2016/IteratorComplete":1576493739048,"./2016/IteratorNext":1576493739049,"./2016/IteratorStep":1576493739047,"./2016/IteratorValue":1576493739050,"./2016/MakeDate":1576493739052,"./2016/MakeDay":1576493739053,"./2016/MakeTime":1576493739054,"./2016/MinFromTime":1576493739055,"./2016/modulo":1576493739056,"./2016/MonthFromTime":1576493739026,"./2016/msFromTime":1576493739057,"./2016/ObjectCreate":1576493739058,"./2016/OrdinaryDefineOwnProperty":1576493738990,"./2016/OrdinaryGetOwnProperty":1576493739000,"./2016/OrdinaryGetPrototypeOf":1576493739059,"./2016/OrdinarySetPrototypeOf":1576493739061,"./2016/OrdinaryHasInstance":1576493739041,"./2016/OrdinaryHasProperty":1576493739063,"./2016/RegExpExec":1576493739064,"./2016/RequireObjectCoercible":1576493739013,"./2016/SameValue":1576493738999,"./2016/SameValueNonNumber":1576493739065,"./2016/SameValueZero":1576493739066,"./2016/SecFromTime":1576493739067,"./2016/Set":1576493739068,"./2016/SetFunctionName":1576493739069,"./2016/SetIntegrityLevel":1576493739070,"./2016/SpeciesConstructor":1576493739071,"./2016/SymbolDescriptiveString":1576493739072,"./2016/TestIntegrityLevel":1576493739073,"./2016/thisBooleanValue":1576493739074,"./2016/thisNumberValue":1576493739075,"./2016/thisStringValue":1576493739076,"./2016/thisTimeValue":1576493739077,"./2016/TimeClip":1576493739078,"./2016/TimeFromYear":1576493739079,"./2016/TimeWithinDay":1576493739080,"./2016/ToBoolean":1576493738994,"./2016/ToDateString":1576493739081,"./2016/ToInt16":1576493739082,"./2016/ToInt32":1576493739084,"./2016/ToInt8":1576493739085,"./2016/ToInteger":1576493739017,"./2016/ToLength":1576493739016,"./2016/ToNumber":1576493738978,"./2016/ToObject":1576493739033,"./2016/ToPrimitive":1576493738979,"./2016/ToPropertyDescriptor":1576493738993,"./2016/ToPropertyKey":1576493739087,"./2016/ToString":1576493739002,"./2016/ToUint16":1576493739083,"./2016/ToUint32":1576493739003,"./2016/ToUint8":1576493739086,"./2016/ToUint8Clamp":1576493739088,"./2016/Type":1576493738980,"./2016/ValidateAndApplyPropertyDescriptor":1576493738996,"./2016/WeekDay":1576493739089,"./2016/YearFromTime":1576493739023}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738977, function(require, module, exports) {


var ToNumber = require('./ToNumber');
var ToPrimitive = require('./ToPrimitive');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-abstract-equality-comparison

module.exports = function AbstractEqualityComparison(x, y) {
	var xType = Type(x);
	var yType = Type(y);
	if (xType === yType) {
		return x === y; // ES6+ specified this shortcut anyways.
	}
	if (x == null && y == null) {
		return true;
	}
	if (xType === 'Number' && yType === 'String') {
		return AbstractEqualityComparison(x, ToNumber(y));
	}
	if (xType === 'String' && yType === 'Number') {
		return AbstractEqualityComparison(ToNumber(x), y);
	}
	if (xType === 'Boolean') {
		return AbstractEqualityComparison(ToNumber(x), y);
	}
	if (yType === 'Boolean') {
		return AbstractEqualityComparison(x, ToNumber(y));
	}
	if ((xType === 'String' || xType === 'Number' || xType === 'Symbol') && yType === 'Object') {
		return AbstractEqualityComparison(x, ToPrimitive(y));
	}
	if (xType === 'Object' && (yType === 'String' || yType === 'Number' || yType === 'Symbol')) {
		return AbstractEqualityComparison(ToPrimitive(x), y);
	}
	return false;
};

}, function(modId) { var map = {"./ToNumber":1576493738978,"./ToPrimitive":1576493738979,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738978, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $Number = GetIntrinsic('%Number%');
var $RegExp = GetIntrinsic('%RegExp%');
var $parseInteger = GetIntrinsic('%parseInt%');

var callBound = require('../helpers/callBound');
var regexTester = require('../helpers/regexTester');
var isPrimitive = require('../helpers/isPrimitive');

var $strSlice = callBound('String.prototype.slice');
var isBinary = regexTester(/^0b[01]+$/i);
var isOctal = regexTester(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = regexTester(nonWSregex);

// whitespace from: https://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var $replace = callBound('String.prototype.replace');
var $trim = function (value) {
	return $replace(value, trimRegex, '');
};

var ToPrimitive = require('./ToPrimitive');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tonumber

module.exports = function ToNumber(argument) {
	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
	if (typeof value === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a number');
	}
	if (typeof value === 'string') {
		if (isBinary(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 2));
		} else if (isOctal(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 8));
		} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
			return NaN;
		} else {
			var trimmed = $trim(value);
			if (trimmed !== value) {
				return ToNumber(trimmed);
			}
		}
	}
	return $Number(value);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"../helpers/regexTester":1576493738861,"../helpers/isPrimitive":1576493738862,"./ToPrimitive":1576493738979}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738979, function(require, module, exports) {


var toPrimitive = require('es-to-primitive/es2015');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive

module.exports = function ToPrimitive(input) {
	if (arguments.length > 1) {
		return toPrimitive(input, arguments[1]);
	}
	return toPrimitive(input);
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738980, function(require, module, exports) {


var ES5Type = require('../5/Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tostring

module.exports = function Type(x) {
	if (typeof x === 'symbol') {
		return 'Symbol';
	}
	return ES5Type(x);
};

}, function(modId) { var map = {"../5/Type":1576493738809}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738981, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Number = GetIntrinsic('%Number%');
var $TypeError = GetIntrinsic('%TypeError%');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var isPrefixOf = require('../helpers/isPrefixOf');

var ToNumber = require('./ToNumber');
var ToPrimitive = require('./ToPrimitive');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/5.1/#sec-11.8.5

// eslint-disable-next-line max-statements
module.exports = function AbstractRelationalComparison(x, y, LeftFirst) {
	if (Type(LeftFirst) !== 'Boolean') {
		throw new $TypeError('Assertion failed: LeftFirst argument must be a Boolean');
	}
	var px;
	var py;
	if (LeftFirst) {
		px = ToPrimitive(x, $Number);
		py = ToPrimitive(y, $Number);
	} else {
		py = ToPrimitive(y, $Number);
		px = ToPrimitive(x, $Number);
	}
	var bothStrings = Type(px) === 'String' && Type(py) === 'String';
	if (!bothStrings) {
		var nx = ToNumber(px);
		var ny = ToNumber(py);
		if ($isNaN(nx) || $isNaN(ny)) {
			return undefined;
		}
		if ($isFinite(nx) && $isFinite(ny) && nx === ny) {
			return false;
		}
		if (nx === 0 && ny === 0) {
			return false;
		}
		if (nx === Infinity) {
			return false;
		}
		if (ny === Infinity) {
			return true;
		}
		if (ny === -Infinity) {
			return false;
		}
		if (nx === -Infinity) {
			return true;
		}
		return nx < ny; // by now, these are both nonzero, finite, and not equal
	}
	if (isPrefixOf(py, px)) {
		return false;
	}
	if (isPrefixOf(px, py)) {
		return true;
	}
	return px < py; // both strings, neither a prefix of the other. shortcut for steps c-f
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812,"../helpers/isPrefixOf":1576493738813,"./ToNumber":1576493738978,"./ToPrimitive":1576493738979,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738982, function(require, module, exports) {


var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6

module.exports = function StrictEqualityComparison(x, y) {
	var xType = Type(x);
	var yType = Type(y);
	if (xType !== yType) {
		return false;
	}
	if (xType === 'Undefined' || xType === 'Null') {
		return true;
	}
	return x === y; // shortcut for steps 4-7
};

}, function(modId) { var map = {"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738983, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var IsInteger = require('./IsInteger');
var Type = require('./Type');

var MAX_SAFE_INTEGER = require('../helpers/maxSafeInteger');

var $TypeError = GetIntrinsic('%TypeError%');

var $charCodeAt = require('../helpers/callBound')('String.prototype.charCodeAt');

// https://ecma-international.org/ecma-262/6.0/#sec-advancestringindex

module.exports = function AdvanceStringIndex(S, index, unicode) {
	if (Type(S) !== 'String') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	if (!IsInteger(index) || index < 0 || index > MAX_SAFE_INTEGER) {
		throw new $TypeError('Assertion failed: `length` must be an integer >= 0 and <= 2**53');
	}
	if (Type(unicode) !== 'Boolean') {
		throw new $TypeError('Assertion failed: `unicode` must be a Boolean');
	}
	if (!unicode) {
		return index + 1;
	}
	var length = S.length;
	if ((index + 1) >= length) {
		return index + 1;
	}

	var first = $charCodeAt(S, index);
	if (first < 0xD800 || first > 0xDBFF) {
		return index + 1;
	}

	var second = $charCodeAt(S, index + 1);
	if (second < 0xDC00 || second > 0xDFFF) {
		return index + 1;
	}

	return index + 2;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsInteger":1576493738984,"./Type":1576493738980,"../helpers/maxSafeInteger":1576493738869,"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738984, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var $floor = $Math.floor;
var $abs = $Math.abs;

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isinteger

module.exports = function IsInteger(argument) {
	if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
		return false;
	}
	var abs = $abs(argument);
	return $floor(abs) === abs;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738985, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $ArrayPrototype = GetIntrinsic('%Array.prototype%');
var $RangeError = GetIntrinsic('%RangeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');
var $TypeError = GetIntrinsic('%TypeError%');

var IsInteger = require('./IsInteger');

var MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1;

var $setProto = GetIntrinsic('%Object.setPrototypeOf%') || (
	// eslint-disable-next-line no-proto, no-negated-condition
	[].__proto__ !== $ArrayPrototype
		? null
		: function (O, proto) {
			O.__proto__ = proto; // eslint-disable-line no-proto, no-param-reassign
			return O;
		}
);

// https://www.ecma-international.org/ecma-262/6.0/#sec-arraycreate

module.exports = function ArrayCreate(length) {
	if (!IsInteger(length) || length < 0) {
		throw new $TypeError('Assertion failed: `length` must be an integer Number >= 0');
	}
	if (length > MAX_ARRAY_LENGTH) {
		throw new $RangeError('length is greater than (2**32 - 1)');
	}
	var proto = arguments.length > 1 ? arguments[1] : $ArrayPrototype;
	var A = []; // steps 5 - 7, and 9
	if (proto !== $ArrayPrototype) { // step 8
		if (!$setProto) {
			throw new $SyntaxError('ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]');
		}
		$setProto(A, proto);
	}
	if (length !== 0) { // bypasses the need for step 2
		A.length = length;
	}
	/* step 10, the above as a shortcut for the below
    OrdinaryDefineOwnProperty(A, 'length', {
        '[[Configurable]]': false,
        '[[Enumerable]]': false,
        '[[Value]]': length,
        '[[Writable]]': true
    });
    */
	return A;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsInteger":1576493738984}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738986, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $RangeError = GetIntrinsic('%RangeError%');
var $TypeError = GetIntrinsic('%TypeError%');

var assign = require('object.assign');

var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');

var IsArray = require('./IsArray');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var OrdinaryDefineOwnProperty = require('./OrdinaryDefineOwnProperty');
var OrdinaryGetOwnProperty = require('./OrdinaryGetOwnProperty');
var ToNumber = require('./ToNumber');
var ToString = require('./ToString');
var ToUint32 = require('./ToUint32');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-arraysetlength

// eslint-disable-next-line max-statements, max-lines-per-function
module.exports = function ArraySetLength(A, Desc) {
	if (!IsArray(A)) {
		throw new $TypeError('Assertion failed: A must be an Array');
	}
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	if (!('[[Value]]' in Desc)) {
		return OrdinaryDefineOwnProperty(A, 'length', Desc);
	}
	var newLenDesc = assign({}, Desc);
	var newLen = ToUint32(Desc['[[Value]]']);
	var numberLen = ToNumber(Desc['[[Value]]']);
	if (newLen !== numberLen) {
		throw new $RangeError('Invalid array length');
	}
	newLenDesc['[[Value]]'] = newLen;
	var oldLenDesc = OrdinaryGetOwnProperty(A, 'length');
	if (!IsDataDescriptor(oldLenDesc)) {
		throw new $TypeError('Assertion failed: an array had a non-data descriptor on `length`');
	}
	var oldLen = oldLenDesc['[[Value]]'];
	if (newLen >= oldLen) {
		return OrdinaryDefineOwnProperty(A, 'length', newLenDesc);
	}
	if (!oldLenDesc['[[Writable]]']) {
		return false;
	}
	var newWritable;
	if (!('[[Writable]]' in newLenDesc) || newLenDesc['[[Writable]]']) {
		newWritable = true;
	} else {
		newWritable = false;
		newLenDesc['[[Writable]]'] = true;
	}
	var succeeded = OrdinaryDefineOwnProperty(A, 'length', newLenDesc);
	if (!succeeded) {
		return false;
	}
	while (newLen < oldLen) {
		oldLen -= 1;
		// eslint-disable-next-line no-param-reassign
		var deleteSucceeded = delete A[ToString(oldLen)];
		if (!deleteSucceeded) {
			newLenDesc['[[Value]]'] = oldLen + 1;
			if (!newWritable) {
				newLenDesc['[[Writable]]'] = false;
				OrdinaryDefineOwnProperty(A, 'length', newLenDesc);
				return false;
			}
		}
	}
	if (!newWritable) {
		return OrdinaryDefineOwnProperty(A, 'length', { '[[Writable]]': false });
	}
	return true;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPropertyDescriptor":1576493738836,"./IsArray":1576493738987,"./IsAccessorDescriptor":1576493738988,"./IsDataDescriptor":1576493738989,"./OrdinaryDefineOwnProperty":1576493738990,"./OrdinaryGetOwnProperty":1576493739000,"./ToNumber":1576493738978,"./ToString":1576493739002,"./ToUint32":1576493739003,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738987, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Array = GetIntrinsic('%Array%');

// eslint-disable-next-line global-require
var toStr = !$Array.isArray && require('../helpers/callBound')('Object.prototype.toString');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isarray

module.exports = $Array.isArray || function IsArray(argument) {
	return toStr(argument) === '[object Array]';
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738988, function(require, module, exports) {


var has = require('has');

var assertRecord = require('../helpers/assertRecord');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isaccessordescriptor

module.exports = function IsAccessorDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
		return false;
	}

	return true;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738989, function(require, module, exports) {


var has = require('has');

var assertRecord = require('../helpers/assertRecord');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isdatadescriptor

module.exports = function IsDataDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
		return false;
	}

	return true;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738990, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $TypeError = GetIntrinsic('%TypeError%');

var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');

var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsExtensible = require('./IsExtensible');
var IsPropertyKey = require('./IsPropertyKey');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');
var ValidateAndApplyPropertyDescriptor = require('./ValidateAndApplyPropertyDescriptor');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinarydefineownproperty

module.exports = function OrdinaryDefineOwnProperty(O, P, Desc) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	var desc = $gOPD(O, P);
	var current = desc && ToPropertyDescriptor(desc);
	var extensible = IsExtensible(O);
	return ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPropertyDescriptor":1576493738836,"./IsAccessorDescriptor":1576493738988,"./IsDataDescriptor":1576493738989,"./IsExtensible":1576493738991,"./IsPropertyKey":1576493738992,"./ToPropertyDescriptor":1576493738993,"./Type":1576493738980,"./ValidateAndApplyPropertyDescriptor":1576493738996}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738991, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Object = GetIntrinsic('%Object%');

var isPrimitive = require('../helpers/isPrimitive');

var $preventExtensions = $Object.preventExtensions;
var $isExtensible = $Object.isExtensible;

// https://www.ecma-international.org/ecma-262/6.0/#sec-isextensible-o

module.exports = $preventExtensions
	? function IsExtensible(obj) {
		return !isPrimitive(obj) && $isExtensible(obj);
	}
	: function IsExtensible(obj) { // eslint-disable-line no-unused-vars
		return true;
	};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPrimitive":1576493738862}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738992, function(require, module, exports) {


// https://www.ecma-international.org/ecma-262/6.0/#sec-ispropertykey

module.exports = function IsPropertyKey(argument) {
	return typeof argument === 'string' || typeof argument === 'symbol';
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738993, function(require, module, exports) {


var has = require('has');

var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Type = require('./Type');
var ToBoolean = require('./ToBoolean');
var IsCallable = require('./IsCallable');

// https://ecma-international.org/ecma-262/5.1/#sec-8.10.5

module.exports = function ToPropertyDescriptor(Obj) {
	if (Type(Obj) !== 'Object') {
		throw new $TypeError('ToPropertyDescriptor requires an object');
	}

	var desc = {};
	if (has(Obj, 'enumerable')) {
		desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
	}
	if (has(Obj, 'configurable')) {
		desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
	}
	if (has(Obj, 'value')) {
		desc['[[Value]]'] = Obj.value;
	}
	if (has(Obj, 'writable')) {
		desc['[[Writable]]'] = ToBoolean(Obj.writable);
	}
	if (has(Obj, 'get')) {
		var getter = Obj.get;
		if (typeof getter !== 'undefined' && !IsCallable(getter)) {
			throw new TypeError('getter must be a function');
		}
		desc['[[Get]]'] = getter;
	}
	if (has(Obj, 'set')) {
		var setter = Obj.set;
		if (typeof setter !== 'undefined' && !IsCallable(setter)) {
			throw new $TypeError('setter must be a function');
		}
		desc['[[Set]]'] = setter;
	}

	if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
		throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
	}
	return desc;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493738980,"./ToBoolean":1576493738994,"./IsCallable":1576493738995}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738994, function(require, module, exports) {


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.2

module.exports = function ToBoolean(value) { return !!value; };

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738995, function(require, module, exports) {


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.11

module.exports = require('is-callable');

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738996, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');
var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');
var isSamePropertyDescriptor = require('../helpers/isSamePropertyDescriptor');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsGenericDescriptor = require('./IsGenericDescriptor');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-validateandapplypropertydescriptor
// https://www.ecma-international.org/ecma-262/8.0/#sec-validateandapplypropertydescriptor

// eslint-disable-next-line max-lines-per-function, max-statements, max-params
module.exports = function ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current) {
	// this uses the ES2017+ logic, since it fixes a number of bugs in the ES2015 logic.
	var oType = Type(O);
	if (oType !== 'Undefined' && oType !== 'Object') {
		throw new $TypeError('Assertion failed: O must be undefined or an Object');
	}
	if (Type(extensible) !== 'Boolean') {
		throw new $TypeError('Assertion failed: extensible must be a Boolean');
	}
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	if (Type(current) !== 'Undefined' && !isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, current)) {
		throw new $TypeError('Assertion failed: current must be a Property Descriptor, or undefined');
	}
	if (oType !== 'Undefined' && !IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: if O is not undefined, P must be a Property Key');
	}
	if (Type(current) === 'Undefined') {
		if (!extensible) {
			return false;
		}
		if (IsGenericDescriptor(Desc) || IsDataDescriptor(Desc)) {
			if (oType !== 'Undefined') {
				DefineOwnProperty(
					IsDataDescriptor,
					SameValue,
					FromPropertyDescriptor,
					O,
					P,
					{
						'[[Configurable]]': Desc['[[Configurable]]'],
						'[[Enumerable]]': Desc['[[Enumerable]]'],
						'[[Value]]': Desc['[[Value]]'],
						'[[Writable]]': Desc['[[Writable]]']
					}
				);
			}
		} else {
			if (!IsAccessorDescriptor(Desc)) {
				throw new $TypeError('Assertion failed: Desc is not an accessor descriptor');
			}
			if (oType !== 'Undefined') {
				return DefineOwnProperty(
					IsDataDescriptor,
					SameValue,
					FromPropertyDescriptor,
					O,
					P,
					Desc
				);
			}
		}
		return true;
	}
	if (IsGenericDescriptor(Desc) && !('[[Configurable]]' in Desc) && !('[[Enumerable]]' in Desc)) {
		return true;
	}
	if (isSamePropertyDescriptor({ SameValue: SameValue }, Desc, current)) {
		return true; // removed by ES2017, but should still be correct
	}
	// "if every field in Desc is absent, return true" can't really match the assertion that it's a Property Descriptor
	if (!current['[[Configurable]]']) {
		if (Desc['[[Configurable]]']) {
			return false;
		}
		if ('[[Enumerable]]' in Desc && !Desc['[[Enumerable]]'] === !!current['[[Enumerable]]']) {
			return false;
		}
	}
	if (IsGenericDescriptor(Desc)) {
		// no further validation is required.
	} else if (IsDataDescriptor(current) !== IsDataDescriptor(Desc)) {
		if (!current['[[Configurable]]']) {
			return false;
		}
		if (IsDataDescriptor(current)) {
			if (oType !== 'Undefined') {
				DefineOwnProperty(
					IsDataDescriptor,
					SameValue,
					FromPropertyDescriptor,
					O,
					P,
					{
						'[[Configurable]]': current['[[Configurable]]'],
						'[[Enumerable]]': current['[[Enumerable]]'],
						'[[Get]]': undefined
					}
				);
			}
		} else if (oType !== 'Undefined') {
			DefineOwnProperty(
				IsDataDescriptor,
				SameValue,
				FromPropertyDescriptor,
				O,
				P,
				{
					'[[Configurable]]': current['[[Configurable]]'],
					'[[Enumerable]]': current['[[Enumerable]]'],
					'[[Value]]': undefined
				}
			);
		}
	} else if (IsDataDescriptor(current) && IsDataDescriptor(Desc)) {
		if (!current['[[Configurable]]'] && !current['[[Writable]]']) {
			if ('[[Writable]]' in Desc && Desc['[[Writable]]']) {
				return false;
			}
			if ('[[Value]]' in Desc && !SameValue(Desc['[[Value]]'], current['[[Value]]'])) {
				return false;
			}
			return true;
		}
	} else if (IsAccessorDescriptor(current) && IsAccessorDescriptor(Desc)) {
		if (!current['[[Configurable]]']) {
			if ('[[Set]]' in Desc && !SameValue(Desc['[[Set]]'], current['[[Set]]'])) {
				return false;
			}
			if ('[[Get]]' in Desc && !SameValue(Desc['[[Get]]'], current['[[Get]]'])) {
				return false;
			}
			return true;
		}
	} else {
		throw new $TypeError('Assertion failed: current and Desc are not both data, both accessors, or one accessor and one data.');
	}
	if (oType !== 'Undefined') {
		return DefineOwnProperty(
			IsDataDescriptor,
			SameValue,
			FromPropertyDescriptor,
			O,
			P,
			Desc
		);
	}
	return true;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/DefineOwnProperty":1576493738882,"../helpers/isPropertyDescriptor":1576493738836,"../helpers/isSamePropertyDescriptor":1576493738883,"./FromPropertyDescriptor":1576493738997,"./IsAccessorDescriptor":1576493738988,"./IsDataDescriptor":1576493738989,"./IsGenericDescriptor":1576493738998,"./IsPropertyKey":1576493738992,"./SameValue":1576493738999,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738997, function(require, module, exports) {


var assertRecord = require('../helpers/assertRecord');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-frompropertydescriptor

module.exports = function FromPropertyDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return Desc;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	var obj = {};
	if ('[[Value]]' in Desc) {
		obj.value = Desc['[[Value]]'];
	}
	if ('[[Writable]]' in Desc) {
		obj.writable = Desc['[[Writable]]'];
	}
	if ('[[Get]]' in Desc) {
		obj.get = Desc['[[Get]]'];
	}
	if ('[[Set]]' in Desc) {
		obj.set = Desc['[[Set]]'];
	}
	if ('[[Enumerable]]' in Desc) {
		obj.enumerable = Desc['[[Enumerable]]'];
	}
	if ('[[Configurable]]' in Desc) {
		obj.configurable = Desc['[[Configurable]]'];
	}
	return obj;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738998, function(require, module, exports) {


var assertRecord = require('../helpers/assertRecord');

var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isgenericdescriptor

module.exports = function IsGenericDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!IsAccessorDescriptor(Desc) && !IsDataDescriptor(Desc)) {
		return true;
	}

	return false;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./IsAccessorDescriptor":1576493738988,"./IsDataDescriptor":1576493738989,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493738999, function(require, module, exports) {


var $isNaN = require('../helpers/isNaN');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.12

module.exports = function SameValue(x, y) {
	if (x === y) { // 0 === -0, but they are not identical.
		if (x === 0) { return 1 / x === 1 / y; }
		return true;
	}
	return $isNaN(x) && $isNaN(y);
};

}, function(modId) { var map = {"../helpers/isNaN":1576493738811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739000, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $TypeError = GetIntrinsic('%TypeError%');

var callBound = require('../helpers/callBound');

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

var has = require('has');

var IsArray = require('./IsArray');
var IsPropertyKey = require('./IsPropertyKey');
var IsRegExp = require('./IsRegExp');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinarygetownproperty

module.exports = function OrdinaryGetOwnProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!has(O, P)) {
		return void 0;
	}
	if (!$gOPD) {
		// ES3 fallback
		var arrayLength = IsArray(O) && P === 'length';
		var regexLastIndex = IsRegExp(O) && P === 'lastIndex';
		return {
			'[[Configurable]]': !(arrayLength || regexLastIndex),
			'[[Enumerable]]': $isEnumerable(O, P),
			'[[Value]]': O[P],
			'[[Writable]]': true
		};
	}
	return ToPropertyDescriptor($gOPD(O, P));
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./IsArray":1576493738987,"./IsPropertyKey":1576493738992,"./IsRegExp":1576493739001,"./ToPropertyDescriptor":1576493738993,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739001, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $match = GetIntrinsic('%Symbol.match%', true);

var hasRegExpMatcher = require('is-regex');

var ToBoolean = require('./ToBoolean');

// https://ecma-international.org/ecma-262/6.0/#sec-isregexp

module.exports = function IsRegExp(argument) {
	if (!argument || typeof argument !== 'object') {
		return false;
	}
	if ($match) {
		var isRegExp = argument[$match];
		if (typeof isRegExp !== 'undefined') {
			return ToBoolean(isRegExp);
		}
	}
	return hasRegExpMatcher(argument);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToBoolean":1576493738994}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739002, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $String = GetIntrinsic('%String%');
var $TypeError = GetIntrinsic('%TypeError%');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tostring

module.exports = function ToString(argument) {
	if (typeof argument === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a string');
	}
	return $String(argument);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739003, function(require, module, exports) {


var ToNumber = require('./ToNumber');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.6

module.exports = function ToUint32(x) {
	return ToNumber(x) >>> 0;
};

}, function(modId) { var map = {"./ToNumber":1576493738978}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739004, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Array = GetIntrinsic('%Array%');
var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var IsArray = require('./IsArray');
var IsConstructor = require('./IsConstructor');
var IsInteger = require('./IsInteger');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-arrayspeciescreate

module.exports = function ArraySpeciesCreate(originalArray, length) {
	if (!IsInteger(length) || length < 0) {
		throw new $TypeError('Assertion failed: length must be an integer >= 0');
	}
	var len = length === 0 ? 0 : length;
	var C;
	var isArray = IsArray(originalArray);
	if (isArray) {
		C = Get(originalArray, 'constructor');
		// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
		// if (IsConstructor(C)) {
		// 	if C is another realm's Array, C = undefined
		// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
		// }
		if ($species && Type(C) === 'Object') {
			C = Get(C, $species);
			if (C === null) {
				C = void 0;
			}
		}
	}
	if (typeof C === 'undefined') {
		return $Array(len);
	}
	if (!IsConstructor(C)) {
		throw new $TypeError('C must be a constructor');
	}
	return new C(len); // Construct(C, len);
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739005,"./IsArray":1576493738987,"./IsConstructor":1576493739006,"./IsInteger":1576493738984,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739005, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = require('object-inspect');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

/**
 * 7.3.1 Get (O, P) - https://ecma-international.org/ecma-262/6.0/#sec-get-o-p
 * 1. Assert: Type(O) is Object.
 * 2. Assert: IsPropertyKey(P) is true.
 * 3. Return O.[[Get]](P, O).
 */

module.exports = function Get(O, P) {
	// 7.3.1.1
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	// 7.3.1.2
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true, got ' + inspect(P));
	}
	// 7.3.1.3
	return O[P];
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493738992,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739006, function(require, module, exports) {


// https://www.ecma-international.org/ecma-262/6.0/#sec-isconstructor

module.exports = function IsConstructor(argument) {
	return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739007, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = require('object-inspect');

var IsCallable = require('./IsCallable');

// https://www.ecma-international.org/ecma-262/6.0/#sec-call

module.exports = function Call(F, V) {
	var args = arguments.length > 2 ? arguments[2] : [];
	if (!IsCallable(F)) {
		throw new $TypeError(inspect(F) + ' is not a function');
	}
	return F.apply(V, args);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsCallable":1576493738995}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739008, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var SameValue = require('./SameValue');
var ToNumber = require('./ToNumber');
var ToString = require('./ToString');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring

module.exports = function CanonicalNumericIndexString(argument) {
	if (Type(argument) !== 'String') {
		throw new $TypeError('Assertion failed: `argument` must be a String');
	}
	if (argument === '-0') { return -0; }
	var n = ToNumber(argument);
	if (SameValue(ToString(n), argument)) { return n; }
	return void 0;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./SameValue":1576493738999,"./ToNumber":1576493738978,"./ToString":1576493739002,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739009, function(require, module, exports) {


var has = require('has');

var assertRecord = require('../helpers/assertRecord');

var IsDataDescriptor = require('./IsDataDescriptor');
var IsGenericDescriptor = require('./IsGenericDescriptor');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-completepropertydescriptor

module.exports = function CompletePropertyDescriptor(Desc) {
	/* eslint no-param-reassign: 0 */
	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (IsGenericDescriptor(Desc) || IsDataDescriptor(Desc)) {
		if (!has(Desc, '[[Value]]')) {
			Desc['[[Value]]'] = void 0;
		}
		if (!has(Desc, '[[Writable]]')) {
			Desc['[[Writable]]'] = false;
		}
	} else {
		if (!has(Desc, '[[Get]]')) {
			Desc['[[Get]]'] = void 0;
		}
		if (!has(Desc, '[[Set]]')) {
			Desc['[[Set]]'] = void 0;
		}
	}
	if (!has(Desc, '[[Enumerable]]')) {
		Desc['[[Enumerable]]'] = false;
	}
	if (!has(Desc, '[[Configurable]]')) {
		Desc['[[Configurable]]'] = false;
	}
	return Desc;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./IsDataDescriptor":1576493738989,"./IsGenericDescriptor":1576493738998,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739010, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsExtensible = require('./IsExtensible');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-createdataproperty

module.exports = function CreateDataProperty(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var oldDesc = $gOPD(O, P);
	var extensible = oldDesc || IsExtensible(O);
	var immutable = oldDesc && (!oldDesc.writable || !oldDesc.configurable);
	if (immutable || !extensible) {
		return false;
	}
	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		{
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Value]]': V,
			'[[Writable]]': true
		}
	);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/DefineOwnProperty":1576493738882,"./FromPropertyDescriptor":1576493738997,"./IsDataDescriptor":1576493738989,"./IsExtensible":1576493738991,"./IsPropertyKey":1576493738992,"./SameValue":1576493738999,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739011, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var CreateDataProperty = require('./CreateDataProperty');
var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// // https://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow

module.exports = function CreateDataPropertyOrThrow(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var success = CreateDataProperty(O, P, V);
	if (!success) {
		throw new $TypeError('unable to create data property');
	}
	return success;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./CreateDataProperty":1576493739010,"./IsPropertyKey":1576493738992,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739012, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var callBound = require('../helpers/callBound');

var $replace = callBound('String.prototype.replace');

var RequireObjectCoercible = require('./RequireObjectCoercible');
var ToString = require('./ToString');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-createhtml

module.exports = function CreateHTML(string, tag, attribute, value) {
	if (Type(tag) !== 'String' || Type(attribute) !== 'String') {
		throw new $TypeError('Assertion failed: `tag` and `attribute` must be strings');
	}
	var str = RequireObjectCoercible(string);
	var S = ToString(str);
	var p1 = '<' + tag;
	if (attribute !== '') {
		var V = ToString(value);
		var escapedV = $replace(V, /\x22/g, '&quot;');
		p1 += '\x20' + attribute + '\x3D\x22' + escapedV + '\x22';
	}
	return p1 + '>' + S + '</' + tag + '>';
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./RequireObjectCoercible":1576493739013,"./ToString":1576493739002,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739013, function(require, module, exports) {


module.exports = require('../5/CheckObjectCoercible');

}, function(modId) { var map = {"../5/CheckObjectCoercible":1576493738817}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739014, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-createiterresultobject

module.exports = function CreateIterResultObject(value, done) {
	if (Type(done) !== 'Boolean') {
		throw new $TypeError('Assertion failed: Type(done) is not Boolean');
	}
	return {
		value: value,
		done: done
	};
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739015, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var callBound = require('../helpers/callBound');

var $TypeError = GetIntrinsic('%TypeError%');
var $indexOf = callBound('Array.prototype.indexOf');
var $push = callBound('Array.prototype.push');

var Get = require('./Get');
var IsArray = require('./IsArray');
var ToLength = require('./ToLength');
var ToString = require('./ToString');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-createlistfromarraylike
module.exports = function CreateListFromArrayLike(obj) {
	var elementTypes = arguments.length > 1
		? arguments[1]
		: ['Undefined', 'Null', 'Boolean', 'String', 'Symbol', 'Number', 'Object'];

	if (Type(obj) !== 'Object') {
		throw new $TypeError('Assertion failed: `obj` must be an Object');
	}
	if (!IsArray(elementTypes)) {
		throw new $TypeError('Assertion failed: `elementTypes`, if provided, must be an array');
	}
	var len = ToLength(Get(obj, 'length'));
	var list = [];
	var index = 0;
	while (index < len) {
		var indexName = ToString(index);
		var next = Get(obj, indexName);
		var nextType = Type(next);
		if ($indexOf(elementTypes, nextType) < 0) {
			throw new $TypeError('item type ' + nextType + ' is not a valid elementType');
		}
		$push(list, next);
		index += 1;
	}
	return list;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Get":1576493739005,"./IsArray":1576493738987,"./ToLength":1576493739016,"./ToString":1576493739002,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739016, function(require, module, exports) {


var MAX_SAFE_INTEGER = require('../helpers/maxSafeInteger');

var ToInteger = require('./ToInteger');

module.exports = function ToLength(argument) {
	var len = ToInteger(argument);
	if (len <= 0) { return 0; } // includes converting -0 to +0
	if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
	return len;
};

}, function(modId) { var map = {"../helpers/maxSafeInteger":1576493738869,"./ToInteger":1576493739017}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739017, function(require, module, exports) {


var ES5ToInteger = require('../5/ToInteger');

var ToNumber = require('./ToNumber');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tointeger

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	return ES5ToInteger(number);
};

}, function(modId) { var map = {"../5/ToInteger":1576493738839,"./ToNumber":1576493738978}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739018, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-createmethodproperty

module.exports = function CreateMethodProperty(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	var newDesc = {
		'[[Configurable]]': true,
		'[[Enumerable]]': false,
		'[[Value]]': V,
		'[[Writable]]': true
	};
	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		newDesc
	);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/DefineOwnProperty":1576493738882,"./FromPropertyDescriptor":1576493738997,"./IsDataDescriptor":1576493738989,"./IsPropertyKey":1576493738992,"./SameValue":1576493738999,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739019, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $EvalError = GetIntrinsic('%EvalError%');

var DayWithinYear = require('./DayWithinYear');
var InLeapYear = require('./InLeapYear');
var MonthFromTime = require('./MonthFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.5

module.exports = function DateFromTime(t) {
	var m = MonthFromTime(t);
	var d = DayWithinYear(t);
	if (m === 0) {
		return d + 1;
	}
	if (m === 1) {
		return d - 30;
	}
	var leap = InLeapYear(t);
	if (m === 2) {
		return d - 58 - leap;
	}
	if (m === 3) {
		return d - 89 - leap;
	}
	if (m === 4) {
		return d - 119 - leap;
	}
	if (m === 5) {
		return d - 150 - leap;
	}
	if (m === 6) {
		return d - 180 - leap;
	}
	if (m === 7) {
		return d - 211 - leap;
	}
	if (m === 8) {
		return d - 242 - leap;
	}
	if (m === 9) {
		return d - 272 - leap;
	}
	if (m === 10) {
		return d - 303 - leap;
	}
	if (m === 11) {
		return d - 333 - leap;
	}
	throw new $EvalError('Assertion failed: MonthFromTime returned an impossible value: ' + m);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./DayWithinYear":1576493739020,"./InLeapYear":1576493739024,"./MonthFromTime":1576493739026}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739020, function(require, module, exports) {


var Day = require('./Day');
var DayFromYear = require('./DayFromYear');
var YearFromTime = require('./YearFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.4

module.exports = function DayWithinYear(t) {
	return Day(t) - DayFromYear(YearFromTime(t));
};

}, function(modId) { var map = {"./Day":1576493739021,"./DayFromYear":1576493739022,"./YearFromTime":1576493739023}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739021, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var msPerDay = require('../helpers/timeConstants').msPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.2

module.exports = function Day(t) {
	return $floor(t / msPerDay);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739022, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function DayFromYear(y) {
	return (365 * (y - 1970)) + $floor((y - 1969) / 4) - $floor((y - 1901) / 100) + $floor((y - 1601) / 400);
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739023, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Date = GetIntrinsic('%Date%');

var callBound = require('../helpers/callBound');

var $getUTCFullYear = callBound('Date.prototype.getUTCFullYear');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function YearFromTime(t) {
	// largest y such that this.TimeFromYear(y) <= t
	return $getUTCFullYear(new $Date(t));
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739024, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $EvalError = GetIntrinsic('%EvalError%');

var DaysInYear = require('./DaysInYear');
var YearFromTime = require('./YearFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function InLeapYear(t) {
	var days = DaysInYear(YearFromTime(t));
	if (days === 365) {
		return 0;
	}
	if (days === 366) {
		return 1;
	}
	throw new $EvalError('Assertion failed: there are not 365 or 366 days in a year, got: ' + days);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./DaysInYear":1576493739025,"./YearFromTime":1576493739023}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739025, function(require, module, exports) {


var mod = require('../helpers/mod');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function DaysInYear(y) {
	if (mod(y, 4) !== 0) {
		return 365;
	}
	if (mod(y, 100) !== 0) {
		return 366;
	}
	if (mod(y, 400) !== 0) {
		return 365;
	}
	return 366;
};

}, function(modId) { var map = {"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739026, function(require, module, exports) {


var DayWithinYear = require('./DayWithinYear');
var InLeapYear = require('./InLeapYear');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.4

module.exports = function MonthFromTime(t) {
	var day = DayWithinYear(t);
	if (0 <= day && day < 31) {
		return 0;
	}
	var leap = InLeapYear(t);
	if (31 <= day && day < (59 + leap)) {
		return 1;
	}
	if ((59 + leap) <= day && day < (90 + leap)) {
		return 2;
	}
	if ((90 + leap) <= day && day < (120 + leap)) {
		return 3;
	}
	if ((120 + leap) <= day && day < (151 + leap)) {
		return 4;
	}
	if ((151 + leap) <= day && day < (181 + leap)) {
		return 5;
	}
	if ((181 + leap) <= day && day < (212 + leap)) {
		return 6;
	}
	if ((212 + leap) <= day && day < (243 + leap)) {
		return 7;
	}
	if ((243 + leap) <= day && day < (273 + leap)) {
		return 8;
	}
	if ((273 + leap) <= day && day < (304 + leap)) {
		return 9;
	}
	if ((304 + leap) <= day && day < (334 + leap)) {
		return 10;
	}
	if ((334 + leap) <= day && day < (365 + leap)) {
		return 11;
	}
};

}, function(modId) { var map = {"./DayWithinYear":1576493739020,"./InLeapYear":1576493739024}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739027, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');
var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-definepropertyorthrow

module.exports = function DefinePropertyOrThrow(O, P, desc) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	var Desc = isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, desc) ? desc : ToPropertyDescriptor(desc);
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc is not a valid Property Descriptor');
	}

	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		Desc
	);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPropertyDescriptor":1576493738836,"../helpers/DefineOwnProperty":1576493738882,"./FromPropertyDescriptor":1576493738997,"./IsAccessorDescriptor":1576493738988,"./IsDataDescriptor":1576493738989,"./IsPropertyKey":1576493738992,"./SameValue":1576493738999,"./ToPropertyDescriptor":1576493738993,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739028, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-deletepropertyorthrow

module.exports = function DeletePropertyOrThrow(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	// eslint-disable-next-line no-param-reassign
	var success = delete O[P];
	if (!success) {
		throw new $TypeError('Attempt to delete property failed.');
	}
	return success;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493738992,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739029, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var keys = require('object-keys');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-enumerableownnames

module.exports = function EnumerableOwnNames(O) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	return keys(O);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739030, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var getIteratorMethod = require('../helpers/getIteratorMethod');
var AdvanceStringIndex = require('./AdvanceStringIndex');
var Call = require('./Call');
var GetMethod = require('./GetMethod');
var IsArray = require('./IsArray');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-getiterator

module.exports = function GetIterator(obj, method) {
	var actualMethod = method;
	if (arguments.length < 2) {
		actualMethod = getIteratorMethod(
			{
				AdvanceStringIndex: AdvanceStringIndex,
				GetMethod: GetMethod,
				IsArray: IsArray,
				Type: Type
			},
			obj
		);
	}
	var iterator = Call(actualMethod, obj);
	if (Type(iterator) !== 'Object') {
		throw new $TypeError('iterator must return an object');
	}

	return iterator;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/getIteratorMethod":1576493738919,"./AdvanceStringIndex":1576493738983,"./Call":1576493739007,"./GetMethod":1576493739031,"./IsArray":1576493738987,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739031, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var GetV = require('./GetV');
var IsCallable = require('./IsCallable');
var IsPropertyKey = require('./IsPropertyKey');

/**
 * 7.3.9 - https://ecma-international.org/ecma-262/6.0/#sec-getmethod
 * 1. Assert: IsPropertyKey(P) is true.
 * 2. Let func be GetV(O, P).
 * 3. ReturnIfAbrupt(func).
 * 4. If func is either undefined or null, return undefined.
 * 5. If IsCallable(func) is false, throw a TypeError exception.
 * 6. Return func.
 */

module.exports = function GetMethod(O, P) {
	// 7.3.9.1
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	// 7.3.9.2
	var func = GetV(O, P);

	// 7.3.9.4
	if (func == null) {
		return void 0;
	}

	// 7.3.9.5
	if (!IsCallable(func)) {
		throw new $TypeError(P + 'is not a function');
	}

	// 7.3.9.6
	return func;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./GetV":1576493739032,"./IsCallable":1576493738995,"./IsPropertyKey":1576493738992}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739032, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var ToObject = require('./ToObject');

/**
 * 7.3.2 GetV (V, P)
 * 1. Assert: IsPropertyKey(P) is true.
 * 2. Let O be ToObject(V).
 * 3. ReturnIfAbrupt(O).
 * 4. Return O.[[Get]](P, V).
 */

module.exports = function GetV(V, P) {
	// 7.3.2.1
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	// 7.3.2.2-3
	var O = ToObject(V);

	// 7.3.2.4
	return O[P];
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493738992,"./ToObject":1576493739033}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739033, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Object = GetIntrinsic('%Object%');

var RequireObjectCoercible = require('./RequireObjectCoercible');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toobject

module.exports = function ToObject(value) {
	RequireObjectCoercible(value);
	return $Object(value);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./RequireObjectCoercible":1576493739013}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739034, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var hasSymbols = require('has-symbols')();

var $TypeError = GetIntrinsic('%TypeError%');

var $gOPN = GetIntrinsic('%Object.getOwnPropertyNames%');
var $gOPS = hasSymbols && GetIntrinsic('%Object.getOwnPropertySymbols%');
var keys = require('object-keys');

var esType = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-getownpropertykeys

module.exports = function GetOwnPropertyKeys(O, Type) {
	if (esType(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (Type === 'Symbol') {
		return $gOPS ? $gOPS(O) : [];
	}
	if (Type === 'String') {
		if (!$gOPN) {
			return keys(O);
		}
		return $gOPN(O);
	}
	throw new $TypeError('Assertion failed: `Type` must be `"String"` or `"Symbol"`');
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739035, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Function = GetIntrinsic('%Function%');
var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var IsConstructor = require('./IsConstructor');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-getprototypefromconstructor

module.exports = function GetPrototypeFromConstructor(constructor, intrinsicDefaultProto) {
	var intrinsic = GetIntrinsic(intrinsicDefaultProto); // throws if not a valid intrinsic
	if (!IsConstructor(constructor)) {
		throw new $TypeError('Assertion failed: `constructor` must be a constructor');
	}
	var proto = Get(constructor, 'prototype');
	if (Type(proto) !== 'Object') {
		if (!(constructor instanceof $Function)) {
			// ignore other realms, for now
			throw new $TypeError('cross-realm constructors not currently supported');
		}
		proto = intrinsic;
	}
	return proto;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739005,"./IsConstructor":1576493739006,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739036, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $parseInt = GetIntrinsic('%parseInt%');

var inspect = require('object-inspect');

var regexTester = require('../helpers/regexTester');
var callBound = require('../helpers/callBound');
var every = require('../helpers/every');

var isDigit = regexTester(/^[0-9]$/);

var strSlice = callBound('String.prototype.slice');

var IsArray = require('./IsArray');
var IsInteger = require('./IsInteger');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-getsubstitution

// eslint-disable-next-line max-statements, max-params, max-lines-per-function
module.exports = function GetSubstitution(matched, str, position, captures, replacement) {
	if (Type(matched) !== 'String') {
		throw new $TypeError('Assertion failed: `matched` must be a String');
	}
	var matchLength = matched.length;

	if (Type(str) !== 'String') {
		throw new $TypeError('Assertion failed: `str` must be a String');
	}
	var stringLength = str.length;

	if (!IsInteger(position) || position < 0 || position > stringLength) {
		throw new $TypeError('Assertion failed: `position` must be a nonnegative integer, and less than or equal to the length of `string`, got ' + inspect(position));
	}

	var ES = this;
	var isStringOrHole = function (capture, index, arr) { return ES.Type(capture) === 'String' || !(index in arr); };
	if (!IsArray(captures) || !every(captures, isStringOrHole)) {
		throw new $TypeError('Assertion failed: `captures` must be a List of Strings, got ' + inspect(captures));
	}

	if (Type(replacement) !== 'String') {
		throw new $TypeError('Assertion failed: `replacement` must be a String');
	}

	var tailPos = position + matchLength;
	var m = captures.length;

	var result = '';
	for (var i = 0; i < replacement.length; i += 1) {
		// if this is a $, and it's not the end of the replacement
		var current = replacement[i];
		var isLast = (i + 1) >= replacement.length;
		var nextIsLast = (i + 2) >= replacement.length;
		if (current === '$' && !isLast) {
			var next = replacement[i + 1];
			if (next === '$') {
				result += '$';
				i += 1;
			} else if (next === '&') {
				result += matched;
				i += 1;
			} else if (next === '`') {
				result += position === 0 ? '' : strSlice(str, 0, position - 1);
				i += 1;
			} else if (next === "'") {
				result += tailPos >= stringLength ? '' : strSlice(str, tailPos);
				i += 1;
			} else {
				var nextNext = nextIsLast ? null : replacement[i + 2];
				if (isDigit(next) && next !== '0' && (nextIsLast || !isDigit(nextNext))) {
					// $1 through $9, and not followed by a digit
					var n = $parseInt(next, 10);
					// if (n > m, impl-defined)
					result += (n <= m && Type(captures[n - 1]) === 'Undefined') ? '' : captures[n - 1];
					i += 1;
				} else if (isDigit(next) && (nextIsLast || isDigit(nextNext))) {
					// $00 through $99
					var nn = next + nextNext;
					var nnI = $parseInt(nn, 10) - 1;
					// if nn === '00' or nn > m, impl-defined
					result += (nn <= m && Type(captures[nnI]) === 'Undefined') ? '' : captures[nnI];
					i += 2;
				} else {
					result += '$';
				}
			}
		} else {
			// the final $, or else not a $
			result += replacement[i];
		}
	}
	return result;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/regexTester":1576493738861,"../helpers/callBound":1576493738814,"../helpers/every":1576493738884,"./IsArray":1576493738987,"./IsInteger":1576493738984,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739037, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var has = require('has');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-hasownproperty

module.exports = function HasOwnProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return has(O, P);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493738992,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739038, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-hasproperty

module.exports = function HasProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return P in O;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493738992,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739039, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var mod = require('../helpers/mod');
var timeConstants = require('../helpers/timeConstants');
var msPerHour = timeConstants.msPerHour;
var HoursPerDay = timeConstants.HoursPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function HourFromTime(t) {
	return mod($floor(t / msPerHour), HoursPerDay);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739040, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $hasInstance = GetIntrinsic('Symbol.hasInstance', true);

var Call = require('./Call');
var GetMethod = require('./GetMethod');
var IsCallable = require('./IsCallable');
var OrdinaryHasInstance = require('./OrdinaryHasInstance');
var ToBoolean = require('./ToBoolean');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-instanceofoperator

module.exports = function InstanceofOperator(O, C) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	var instOfHandler = $hasInstance ? GetMethod(C, $hasInstance) : void 0;
	if (typeof instOfHandler !== 'undefined') {
		return ToBoolean(Call(instOfHandler, C, [O]));
	}
	if (!IsCallable(C)) {
		throw new $TypeError('`C` is not Callable');
	}
	return OrdinaryHasInstance(C, O);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Call":1576493739007,"./GetMethod":1576493739031,"./IsCallable":1576493738995,"./OrdinaryHasInstance":1576493739041,"./ToBoolean":1576493738994,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739041, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var IsCallable = require('./IsCallable');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinaryhasinstance

module.exports = function OrdinaryHasInstance(C, O) {
	if (IsCallable(C) === false) {
		return false;
	}
	if (Type(O) !== 'Object') {
		return false;
	}
	var P = Get(C, 'prototype');
	if (Type(P) !== 'Object') {
		throw new $TypeError('OrdinaryHasInstance called on an object with an invalid prototype property.');
	}
	return O instanceof C;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739005,"./IsCallable":1576493738995,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739042, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $arraySlice = require('../helpers/callBound')('Array.prototype.slice');

var Call = require('./Call');
var GetV = require('./GetV');
var IsPropertyKey = require('./IsPropertyKey');

// https://ecma-international.org/ecma-262/6.0/#sec-invoke

module.exports = function Invoke(O, P) {
	if (!IsPropertyKey(P)) {
		throw new $TypeError('P must be a Property Key');
	}
	var argumentsList = $arraySlice(arguments, 2);
	var func = GetV(O, P);
	return Call(func, O, argumentsList);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Call":1576493739007,"./GetV":1576493739032,"./IsPropertyKey":1576493738992}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739043, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $isConcatSpreadable = GetIntrinsic('%Symbol.isConcatSpreadable%', true);

var Get = require('./Get');
var IsArray = require('./IsArray');
var ToBoolean = require('./ToBoolean');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-isconcatspreadable

module.exports = function IsConcatSpreadable(O) {
	if (Type(O) !== 'Object') {
		return false;
	}
	if ($isConcatSpreadable) {
		var spreadable = Get(O, $isConcatSpreadable);
		if (typeof spreadable !== 'undefined') {
			return ToBoolean(spreadable);
		}
	}
	return IsArray(O);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739005,"./IsArray":1576493738987,"./ToBoolean":1576493738994,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739044, function(require, module, exports) {


var callBound = require('../helpers/callBound');

var $PromiseThen = callBound('Promise.prototype.then', true);

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ispromise

module.exports = function IsPromise(x) {
	if (Type(x) !== 'Object') {
		return false;
	}
	if (!$PromiseThen) { // Promises are not supported
		return false;
	}
	try {
		$PromiseThen(x); // throws if not a promise
	} catch (e) {
		return false;
	}
	return true;
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739045, function(require, module, exports) {


var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');

var Type = require('./Type');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');

// https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type

module.exports = function IsPropertyDescriptor(Desc) {
	return isPropertyDescriptor({
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor,
		Type: Type
	}, Desc);
};

}, function(modId) { var map = {"../helpers/isPropertyDescriptor":1576493738836,"./Type":1576493738980,"./IsDataDescriptor":1576493738989,"./IsAccessorDescriptor":1576493738988}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739046, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $iterator = GetIntrinsic('%Symbol.iterator%', true);

var callBound = require('../helpers/callBound');

var $arrayPush = callBound('Array.prototype.push');
var $arraySlice = callBound('Array.prototype.slice');
var $arrayJoin = callBound('Array.prototype.join');

var AdvanceStringIndex = require('./AdvanceStringIndex');
var GetIterator = require('./GetIterator');
var GetMethod = require('./GetMethod');
var IsArray = require('./IsArray');
var IteratorStep = require('./IteratorStep');
var IteratorValue = require('./IteratorValue');
var ToObject = require('./ToObject');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/7.0/#sec-iterabletoarraylike

module.exports = function IterableToArrayLike(items) {
	var usingIterator;
	if ($iterator) {
		usingIterator = GetMethod(items, $iterator);
	} else if (IsArray(items)) {
		usingIterator = function () {
			var i = -1;
			var arr = this; // eslint-disable-line no-invalid-this
			return {
				next: function () {
					i += 1;
					return {
						done: i >= arr.length,
						value: arr[i]
					};
				}
			};
		};
	} else if (Type(items) === 'String') {
		usingIterator = function () {
			var i = 0;
			return {
				next: function () {
					var nextIndex = AdvanceStringIndex(items, i, true);
					var value = $arrayJoin($arraySlice(items, i, nextIndex), '');
					i = nextIndex;
					return {
						done: nextIndex > items.length,
						value: value
					};
				}
			};
		};
	}
	if (typeof usingIterator !== 'undefined') {
		var iterator = GetIterator(items, usingIterator);
		var values = [];
		var next = true;
		while (next) {
			next = IteratorStep(iterator);
			if (next) {
				var nextValue = IteratorValue(next);
				$arrayPush(values, nextValue);
			}
		}
		return values;
	}

	return ToObject(items);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./AdvanceStringIndex":1576493738983,"./GetIterator":1576493739030,"./GetMethod":1576493739031,"./IsArray":1576493738987,"./IteratorStep":1576493739047,"./IteratorValue":1576493739050,"./ToObject":1576493739033,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739047, function(require, module, exports) {


var IteratorComplete = require('./IteratorComplete');
var IteratorNext = require('./IteratorNext');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorstep

module.exports = function IteratorStep(iterator) {
	var result = IteratorNext(iterator);
	var done = IteratorComplete(result);
	return done === true ? false : result;
};


}, function(modId) { var map = {"./IteratorComplete":1576493739048,"./IteratorNext":1576493739049}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739048, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var ToBoolean = require('./ToBoolean');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorcomplete

module.exports = function IteratorComplete(iterResult) {
	if (Type(iterResult) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
	}
	return ToBoolean(Get(iterResult, 'done'));
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739005,"./ToBoolean":1576493738994,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739049, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Invoke = require('./Invoke');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratornext

module.exports = function IteratorNext(iterator, value) {
	var result = Invoke(iterator, 'next', arguments.length < 2 ? [] : [value]);
	if (Type(result) !== 'Object') {
		throw new $TypeError('iterator next must return an object');
	}
	return result;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Invoke":1576493739042,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739050, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorvalue

module.exports = function IteratorValue(iterResult) {
	if (Type(iterResult) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
	}
	return Get(iterResult, 'value');
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739005,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739051, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Call = require('./Call');
var GetMethod = require('./GetMethod');
var IsCallable = require('./IsCallable');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorclose

module.exports = function IteratorClose(iterator, completion) {
	if (Type(iterator) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(iterator) is not Object');
	}
	if (!IsCallable(completion)) {
		throw new $TypeError('Assertion failed: completion is not a thunk for a Completion Record');
	}
	var completionThunk = completion;

	var iteratorReturn = GetMethod(iterator, 'return');

	if (typeof iteratorReturn === 'undefined') {
		return completionThunk();
	}

	var completionRecord;
	try {
		var innerResult = Call(iteratorReturn, iterator, []);
	} catch (e) {
		// if we hit here, then "e" is the innerResult completion that needs re-throwing

		// if the completion is of type "throw", this will throw.
		completionRecord = completionThunk();
		completionThunk = null; // ensure it's not called twice.

		// if not, then return the innerResult completion
		throw e;
	}
	completionRecord = completionThunk(); // if innerResult worked, then throw if the completion does
	completionThunk = null; // ensure it's not called twice.

	if (Type(innerResult) !== 'Object') {
		throw new $TypeError('iterator .return must return an object');
	}

	return completionRecord;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Call":1576493739007,"./GetMethod":1576493739031,"./IsCallable":1576493738995,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739052, function(require, module, exports) {


var $isFinite = require('../helpers/isFinite');
var msPerDay = require('../helpers/timeConstants').msPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.13

module.exports = function MakeDate(day, time) {
	if (!$isFinite(day) || !$isFinite(time)) {
		return NaN;
	}
	return (day * msPerDay) + time;
};

}, function(modId) { var map = {"../helpers/isFinite":1576493738812,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739053, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');
var $DateUTC = GetIntrinsic('%Date.UTC%');

var mod = require('../helpers/mod');
var $isFinite = require('../helpers/isFinite');

var DateFromTime = require('./DateFromTime');
var Day = require('./Day');
var MonthFromTime = require('./MonthFromTime');
var ToInteger = require('./ToInteger');
var YearFromTime = require('./YearFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.12

module.exports = function MakeDay(year, month, date) {
	if (!$isFinite(year) || !$isFinite(month) || !$isFinite(date)) {
		return NaN;
	}
	var y = ToInteger(year);
	var m = ToInteger(month);
	var dt = ToInteger(date);
	var ym = y + $floor(m / 12);
	var mn = mod(m, 12);
	var t = $DateUTC(ym, mn, 1);
	if (YearFromTime(t) !== ym || MonthFromTime(t) !== mn || DateFromTime(t) !== 1) {
		return NaN;
	}
	return Day(t) + dt - 1;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/isFinite":1576493738812,"./DateFromTime":1576493739019,"./Day":1576493739021,"./MonthFromTime":1576493739026,"./ToInteger":1576493739017,"./YearFromTime":1576493739023}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739054, function(require, module, exports) {


var $isFinite = require('../helpers/isFinite');
var timeConstants = require('../helpers/timeConstants');
var msPerSecond = timeConstants.msPerSecond;
var msPerMinute = timeConstants.msPerMinute;
var msPerHour = timeConstants.msPerHour;

var ToInteger = require('./ToInteger');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.11

module.exports = function MakeTime(hour, min, sec, ms) {
	if (!$isFinite(hour) || !$isFinite(min) || !$isFinite(sec) || !$isFinite(ms)) {
		return NaN;
	}
	var h = ToInteger(hour);
	var m = ToInteger(min);
	var s = ToInteger(sec);
	var milli = ToInteger(ms);
	var t = (h * msPerHour) + (m * msPerMinute) + (s * msPerSecond) + milli;
	return t;
};

}, function(modId) { var map = {"../helpers/isFinite":1576493738812,"../helpers/timeConstants":1576493738821,"./ToInteger":1576493739017}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739055, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var mod = require('../helpers/mod');
var timeConstants = require('../helpers/timeConstants');
var msPerMinute = timeConstants.msPerMinute;
var MinutesPerHour = timeConstants.MinutesPerHour;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function MinFromTime(t) {
	return mod($floor(t / msPerMinute), MinutesPerHour);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739056, function(require, module, exports) {


var mod = require('../helpers/mod');

// https://ecma-international.org/ecma-262/5.1/#sec-5.2

module.exports = function modulo(x, y) {
	return mod(x, y);
};

}, function(modId) { var map = {"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739057, function(require, module, exports) {


var mod = require('../helpers/mod');
var msPerSecond = require('../helpers/timeConstants').msPerSecond;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function msFromTime(t) {
	return mod(t, msPerSecond);
};

}, function(modId) { var map = {"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739058, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $ObjectCreate = GetIntrinsic('%Object.create%');
var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-objectcreate

module.exports = function ObjectCreate(proto, internalSlotsList) {
	if (proto !== null && Type(proto) !== 'Object') {
		throw new $TypeError('Assertion failed: `proto` must be null or an object');
	}
	var slots = arguments.length < 2 ? [] : internalSlotsList;
	if (slots.length > 0) {
		throw new $SyntaxError('es-abstract does not yet support internal slots');
	}

	if (proto === null && !$ObjectCreate) {
		throw new $SyntaxError('native Object.create support is required to create null objects');
	}

	return $ObjectCreate(proto);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739059, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $getProto = require('../helpers/getProto');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/7.0/#sec-ordinarygetprototypeof

module.exports = function OrdinaryGetPrototypeOf(O) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!$getProto) {
		throw new $TypeError('This environment does not support fetching prototypes.');
	}
	return $getProto(O);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/getProto":1576493739060,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739060, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var originalGetProto = GetIntrinsic('%Object.getPrototypeOf%', true);
var $ArrayProto = GetIntrinsic('%Array.prototype%');

module.exports = originalGetProto || (
	// eslint-disable-next-line no-proto
	[].__proto__ === $ArrayProto
		? function (O) {
			return O.__proto__; // eslint-disable-line no-proto
		}
		: null
);

}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739061, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $setProto = require('../helpers/setProto');

var OrdinaryGetPrototypeOf = require('./OrdinaryGetPrototypeOf');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/7.0/#sec-ordinarysetprototypeof

module.exports = function OrdinarySetPrototypeOf(O, V) {
	if (Type(V) !== 'Object' && Type(V) !== 'Null') {
		throw new $TypeError('Assertion failed: V must be Object or Null');
	}
	/*
    var extensible = IsExtensible(O);
    var current = OrdinaryGetPrototypeOf(O);
    if (SameValue(V, current)) {
        return true;
    }
    if (!extensible) {
        return false;
    }
    */
	try {
		$setProto(O, V);
	} catch (e) {
		return false;
	}
	return OrdinaryGetPrototypeOf(O) === V;
	/*
    var p = V;
    var done = false;
    while (!done) {
        if (p === null) {
            done = true;
        } else if (SameValue(p, O)) {
            return false;
        } else {
            if (wat) {
                done = true;
            } else {
                p = p.[[Prototype]];
            }
        }
     }
     O.[[Prototype]] = V;
     return true;
     */
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/setProto":1576493739062,"./OrdinaryGetPrototypeOf":1576493739059,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739062, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var originalSetProto = GetIntrinsic('%Object.setPrototypeOf%', true);
var $ArrayProto = GetIntrinsic('%Array.prototype%');

module.exports = originalSetProto || (
	// eslint-disable-next-line no-proto, no-negated-condition
	[].__proto__ !== $ArrayProto
		? null
		: function (O, proto) {
			O.__proto__ = proto; // eslint-disable-line no-proto, no-param-reassign
			return O;
		}
);

}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739063, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinaryhasproperty

module.exports = function OrdinaryHasProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	return P in O;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493738992,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739064, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var regexExec = require('../helpers/callBound')('RegExp.prototype.exec');

var Call = require('./Call');
var Get = require('./Get');
var IsCallable = require('./IsCallable');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-regexpexec

module.exports = function RegExpExec(R, S) {
	if (Type(R) !== 'Object') {
		throw new $TypeError('Assertion failed: `R` must be an Object');
	}
	if (Type(S) !== 'String') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	var exec = Get(R, 'exec');
	if (IsCallable(exec)) {
		var result = Call(exec, R, [S]);
		if (result === null || Type(result) === 'Object') {
			return result;
		}
		throw new $TypeError('"exec" method must return `null` or an Object');
	}
	return regexExec(R, S);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Call":1576493739007,"./Get":1576493739005,"./IsCallable":1576493738995,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739065, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var SameValue = require('./SameValue');

// https://www.ecma-international.org/ecma-262/7.0/#sec-samevaluenonnumber

module.exports = function SameValueNonNumber(x, y) {
	if (typeof x === 'number' || typeof x !== typeof y) {
		throw new $TypeError('SameValueNonNumber requires two non-number values of the same type.');
	}
	return SameValue(x, y);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./SameValue":1576493738999}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739066, function(require, module, exports) {


var $isNaN = require('../helpers/isNaN');

// https://www.ecma-international.org/ecma-262/6.0/#sec-samevaluezero

module.exports = function SameValueZero(x, y) {
	return (x === y) || ($isNaN(x) && $isNaN(y));
};

}, function(modId) { var map = {"../helpers/isNaN":1576493738811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739067, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var mod = require('../helpers/mod');
var timeConstants = require('../helpers/timeConstants');
var msPerSecond = timeConstants.msPerSecond;
var SecondsPerMinute = timeConstants.SecondsPerMinute;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function SecFromTime(t) {
	return mod($floor(t / msPerSecond), SecondsPerMinute);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739068, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-set-o-p-v-throw

module.exports = function Set(O, P, V, Throw) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	if (Type(Throw) !== 'Boolean') {
		throw new $TypeError('Assertion failed: `Throw` must be a Boolean');
	}
	if (Throw) {
		O[P] = V; // eslint-disable-line no-param-reassign
		return true;
	} else {
		try {
			O[P] = V; // eslint-disable-line no-param-reassign
		} catch (e) {
			return false;
		}
	}
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493738992,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739069, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var has = require('has');

var $TypeError = GetIntrinsic('%TypeError%');

var getSymbolDescription = require('../helpers/getSymbolDescription');

var DefinePropertyOrThrow = require('./DefinePropertyOrThrow');
var IsExtensible = require('./IsExtensible');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-setfunctionname

module.exports = function SetFunctionName(F, name) {
	if (typeof F !== 'function') {
		throw new $TypeError('Assertion failed: `F` must be a function');
	}
	if (!IsExtensible(F) || has(F, 'name')) {
		throw new $TypeError('Assertion failed: `F` must be extensible, and must not have a `name` own property');
	}
	var nameType = Type(name);
	if (nameType !== 'Symbol' && nameType !== 'String') {
		throw new $TypeError('Assertion failed: `name` must be a Symbol or a String');
	}
	if (nameType === 'Symbol') {
		var description = getSymbolDescription(name);
		// eslint-disable-next-line no-param-reassign
		name = typeof description === 'undefined' ? '' : '[' + description + ']';
	}
	if (arguments.length > 2) {
		var prefix = arguments[2];
		// eslint-disable-next-line no-param-reassign
		name = prefix + ' ' + name;
	}
	return DefinePropertyOrThrow(F, 'name', {
		'[[Value]]': name,
		'[[Writable]]': false,
		'[[Enumerable]]': false,
		'[[Configurable]]': true
	});
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/getSymbolDescription":1576493738953,"./DefinePropertyOrThrow":1576493739027,"./IsExtensible":1576493738991,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739070, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $SyntaxError = GetIntrinsic('%SyntaxError%');
var $TypeError = GetIntrinsic('%TypeError%');
var $preventExtensions = GetIntrinsic('%Object.preventExtensions%');
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $gOPN = GetIntrinsic('%Object.getOwnPropertyNames%');

var forEach = require('../helpers/forEach');

var DefinePropertyOrThrow = require('./DefinePropertyOrThrow');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-setintegritylevel

module.exports = function SetIntegrityLevel(O, level) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (level !== 'sealed' && level !== 'frozen') {
		throw new $TypeError('Assertion failed: `level` must be `"sealed"` or `"frozen"`');
	}
	if (!$preventExtensions) {
		throw new $SyntaxError('SetIntegrityLevel requires native `Object.preventExtensions` support');
	}
	var status = $preventExtensions(O);
	if (!status) {
		return false;
	}
	if (!$gOPN) {
		throw new $SyntaxError('SetIntegrityLevel requires native `Object.getOwnPropertyNames` support');
	}
	var theKeys = $gOPN(O);
	if (level === 'sealed') {
		forEach(theKeys, function (k) {
			DefinePropertyOrThrow(O, k, { configurable: false });
		});
	} else if (level === 'frozen') {
		forEach(theKeys, function (k) {
			var currentDesc = $gOPD(O, k);
			if (typeof currentDesc !== 'undefined') {
				var desc;
				if (IsAccessorDescriptor(ToPropertyDescriptor(currentDesc))) {
					desc = { configurable: false };
				} else {
					desc = { configurable: false, writable: false };
				}
				DefinePropertyOrThrow(O, k, desc);
			}
		});
	}
	return true;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/forEach":1576493738956,"./DefinePropertyOrThrow":1576493739027,"./IsAccessorDescriptor":1576493738988,"./ToPropertyDescriptor":1576493738993,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739071, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var IsConstructor = require('./IsConstructor');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-speciesconstructor

module.exports = function SpeciesConstructor(O, defaultConstructor) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	var C = O.constructor;
	if (typeof C === 'undefined') {
		return defaultConstructor;
	}
	if (Type(C) !== 'Object') {
		throw new $TypeError('O.constructor is not an Object');
	}
	var S = $species ? C[$species] : void 0;
	if (S == null) {
		return defaultConstructor;
	}
	if (IsConstructor(S)) {
		return S;
	}
	throw new $TypeError('no constructor found');
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsConstructor":1576493739006,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739072, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var callBound = require('../helpers/callBound');

var $SymbolToString = callBound('Symbol.prototype.toString', true);

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-symboldescriptivestring

module.exports = function SymbolDescriptiveString(sym) {
	if (Type(sym) !== 'Symbol') {
		throw new $TypeError('Assertion failed: `sym` must be a Symbol');
	}
	return $SymbolToString(sym);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739073, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $gOPN = GetIntrinsic('%Object.getOwnPropertyNames%');
var $TypeError = GetIntrinsic('%TypeError%');

var every = require('../helpers/every');

var IsDataDescriptor = require('./IsDataDescriptor');
var IsExtensible = require('./IsExtensible');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-testintegritylevel

module.exports = function TestIntegrityLevel(O, level) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (level !== 'sealed' && level !== 'frozen') {
		throw new $TypeError('Assertion failed: `level` must be `"sealed"` or `"frozen"`');
	}
	var status = IsExtensible(O);
	if (status) {
		return false;
	}
	var theKeys = $gOPN(O);
	return theKeys.length === 0 || every(theKeys, function (k) {
		var currentDesc = $gOPD(O, k);
		if (typeof currentDesc !== 'undefined') {
			if (currentDesc.configurable) {
				return false;
			}
			if (level === 'frozen' && IsDataDescriptor(ToPropertyDescriptor(currentDesc)) && currentDesc.writable) {
				return false;
			}
		}
		return true;
	});
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/every":1576493738884,"./IsDataDescriptor":1576493738989,"./IsExtensible":1576493738991,"./ToPropertyDescriptor":1576493738993,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739074, function(require, module, exports) {


var $BooleanValueOf = require('../helpers/callBound')('Boolean.prototype.valueOf');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-boolean-prototype-object

module.exports = function thisBooleanValue(value) {
	if (Type(value) === 'Boolean') {
		return value;
	}

	return $BooleanValueOf(value);
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739075, function(require, module, exports) {


var callBound = require('../helpers/callBound');

var Type = require('./Type');

var $NumberValueOf = callBound('Number.prototype.valueOf');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-number-prototype-object

module.exports = function thisNumberValue(value) {
	if (Type(value) === 'Number') {
		return value;
	}

	return $NumberValueOf(value);
};


}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739076, function(require, module, exports) {


var $StringValueOf = require('../helpers/callBound')('String.prototype.valueOf');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-string-prototype-object

module.exports = function thisStringValue(value) {
	if (Type(value) === 'String') {
		return value;
	}

	return $StringValueOf(value);
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739077, function(require, module, exports) {


var $DateValueOf = require('../helpers/callBound')('Date.prototype.valueOf');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-date-prototype-object

module.exports = function thisTimeValue(value) {
	return $DateValueOf(value);
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739078, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Date = GetIntrinsic('%Date%');
var $Number = GetIntrinsic('%Number%');
var $abs = GetIntrinsic('%Math.abs%');

var $isFinite = require('../helpers/isFinite');

var ToNumber = require('./ToNumber');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.14

module.exports = function TimeClip(time) {
	if (!$isFinite(time) || $abs(time) > 8.64e15) {
		return NaN;
	}
	return $Number(new $Date(ToNumber(time)));
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isFinite":1576493738812,"./ToNumber":1576493738978}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739079, function(require, module, exports) {


var msPerDay = require('../helpers/timeConstants').msPerDay;

var DayFromYear = require('./DayFromYear');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function TimeFromYear(y) {
	return msPerDay * DayFromYear(y);
};

}, function(modId) { var map = {"../helpers/timeConstants":1576493738821,"./DayFromYear":1576493739022}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739080, function(require, module, exports) {


var mod = require('../helpers/mod');
var msPerDay = require('../helpers/timeConstants').msPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.2

module.exports = function TimeWithinDay(t) {
	return mod(t, msPerDay);
};


}, function(modId) { var map = {"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739081, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $Date = GetIntrinsic('%Date%');

var $isNaN = require('../helpers/isNaN');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-todatestring

module.exports = function ToDateString(tv) {
	if (Type(tv) !== 'Number') {
		throw new $TypeError('Assertion failed: `tv` must be a Number');
	}
	if ($isNaN(tv)) {
		return 'Invalid Date';
	}
	return $Date(tv);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"./Type":1576493738980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739082, function(require, module, exports) {


var ToUint16 = require('./ToUint16');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toint16

module.exports = function ToInt16(argument) {
	var int16bit = ToUint16(argument);
	return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
};

}, function(modId) { var map = {"./ToUint16":1576493739083}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739083, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var ToNumber = require('./ToNumber');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var $sign = require('../helpers/sign');
var $mod = require('../helpers/mod');

var $floor = $Math.floor;
var $abs = $Math.abs;

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.7

module.exports = function ToUint16(value) {
	var number = ToNumber(value);
	if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
	var posInt = $sign(number) * $floor($abs(number));
	return $mod(posInt, 0x10000);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToNumber":1576493738978,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812,"../helpers/sign":1576493738840,"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739084, function(require, module, exports) {


var ToNumber = require('./ToNumber');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.5

module.exports = function ToInt32(x) {
	return ToNumber(x) >> 0;
};

}, function(modId) { var map = {"./ToNumber":1576493738978}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739085, function(require, module, exports) {


var ToUint8 = require('./ToUint8');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toint8

module.exports = function ToInt8(argument) {
	var int8bit = ToUint8(argument);
	return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
};

}, function(modId) { var map = {"./ToUint8":1576493739086}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739086, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var ToNumber = require('./ToNumber');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var $sign = require('../helpers/sign');
var $mod = require('../helpers/mod');

var $floor = $Math.floor;
var $abs = $Math.abs;

module.exports = function ToUint8(argument) {
	var number = ToNumber(argument);
	if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
	var posInt = $sign(number) * $floor($abs(number));
	return $mod(posInt, 0x100);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToNumber":1576493738978,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812,"../helpers/sign":1576493738840,"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739087, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $String = GetIntrinsic('%String%');

var ToPrimitive = require('./ToPrimitive');
var ToString = require('./ToString');

// https://www.ecma-international.org/ecma-262/6.0/#sec-topropertykey

module.exports = function ToPropertyKey(argument) {
	var key = ToPrimitive(argument, $String);
	return typeof key === 'symbol' ? key : ToString(key);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToPrimitive":1576493738979,"./ToString":1576493739002}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739088, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var ToNumber = require('./ToNumber');

var $isNaN = require('../helpers/isNaN');

var $floor = $Math.floor;

// https://www.ecma-international.org/ecma-262/6.0/#sec-touint8clamp

module.exports = function ToUint8Clamp(argument) {
	var number = ToNumber(argument);
	if ($isNaN(number) || number <= 0) { return 0; }
	if (number >= 0xFF) { return 0xFF; }
	var f = $floor(argument);
	if (f + 0.5 < number) { return f + 1; }
	if (number < f + 0.5) { return f; }
	if (f % 2 !== 0) { return f + 1; }
	return f;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToNumber":1576493738978,"../helpers/isNaN":1576493738811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739089, function(require, module, exports) {


var mod = require('../helpers/mod');

var Day = require('./Day');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.6

module.exports = function WeekDay(t) {
	return mod(Day(t) + 4, 7);
};

}, function(modId) { var map = {"../helpers/mod":1576493738826,"./Day":1576493739021}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739090, function(require, module, exports) {


/* eslint global-require: 0 */
// https://www.ecma-international.org/ecma-262/8.0/#sec-abstract-operations
var ES2017 = {
	'Abstract Equality Comparison': require('./2017/AbstractEqualityComparison'),
	'Abstract Relational Comparison': require('./2017/AbstractRelationalComparison'),
	'Strict Equality Comparison': require('./2017/StrictEqualityComparison'),
	AdvanceStringIndex: require('./2017/AdvanceStringIndex'),
	ArrayCreate: require('./2017/ArrayCreate'),
	ArraySetLength: require('./2017/ArraySetLength'),
	ArraySpeciesCreate: require('./2017/ArraySpeciesCreate'),
	Call: require('./2017/Call'),
	CanonicalNumericIndexString: require('./2017/CanonicalNumericIndexString'),
	CompletePropertyDescriptor: require('./2017/CompletePropertyDescriptor'),
	CreateDataProperty: require('./2017/CreateDataProperty'),
	CreateDataPropertyOrThrow: require('./2017/CreateDataPropertyOrThrow'),
	CreateHTML: require('./2017/CreateHTML'),
	CreateIterResultObject: require('./2017/CreateIterResultObject'),
	CreateListFromArrayLike: require('./2017/CreateListFromArrayLike'),
	CreateMethodProperty: require('./2017/CreateMethodProperty'),
	DateFromTime: require('./2017/DateFromTime'),
	Day: require('./2017/Day'),
	DayFromYear: require('./2017/DayFromYear'),
	DaysInYear: require('./2017/DaysInYear'),
	DayWithinYear: require('./2017/DayWithinYear'),
	DefinePropertyOrThrow: require('./2017/DefinePropertyOrThrow'),
	DeletePropertyOrThrow: require('./2017/DeletePropertyOrThrow'),
	EnumerableOwnProperties: require('./2017/EnumerableOwnProperties'),
	FromPropertyDescriptor: require('./2017/FromPropertyDescriptor'),
	Get: require('./2017/Get'),
	GetIterator: require('./2017/GetIterator'),
	GetMethod: require('./2017/GetMethod'),
	GetOwnPropertyKeys: require('./2017/GetOwnPropertyKeys'),
	GetPrototypeFromConstructor: require('./2017/GetPrototypeFromConstructor'),
	GetSubstitution: require('./2017/GetSubstitution'),
	GetV: require('./2017/GetV'),
	HasOwnProperty: require('./2017/HasOwnProperty'),
	HasProperty: require('./2017/HasProperty'),
	HourFromTime: require('./2017/HourFromTime'),
	InLeapYear: require('./2017/InLeapYear'),
	InstanceofOperator: require('./2017/InstanceofOperator'),
	Invoke: require('./2017/Invoke'),
	IsAccessorDescriptor: require('./2017/IsAccessorDescriptor'),
	IsArray: require('./2017/IsArray'),
	IsCallable: require('./2017/IsCallable'),
	IsConcatSpreadable: require('./2017/IsConcatSpreadable'),
	IsConstructor: require('./2017/IsConstructor'),
	IsDataDescriptor: require('./2017/IsDataDescriptor'),
	IsExtensible: require('./2017/IsExtensible'),
	IsGenericDescriptor: require('./2017/IsGenericDescriptor'),
	IsInteger: require('./2017/IsInteger'),
	IsPromise: require('./2017/IsPromise'),
	IsPropertyDescriptor: require('./2017/IsPropertyDescriptor'),
	IsPropertyKey: require('./2017/IsPropertyKey'),
	IsRegExp: require('./2017/IsRegExp'),
	IterableToList: require('./2017/IterableToList'),
	IteratorClose: require('./2017/IteratorClose'),
	IteratorComplete: require('./2017/IteratorComplete'),
	IteratorNext: require('./2017/IteratorNext'),
	IteratorStep: require('./2017/IteratorStep'),
	IteratorValue: require('./2017/IteratorValue'),
	MakeDate: require('./2017/MakeDate'),
	MakeDay: require('./2017/MakeDay'),
	MakeTime: require('./2017/MakeTime'),
	MinFromTime: require('./2017/MinFromTime'),
	modulo: require('./2017/modulo'),
	MonthFromTime: require('./2017/MonthFromTime'),
	msFromTime: require('./2017/msFromTime'),
	ObjectCreate: require('./2017/ObjectCreate'),
	OrdinaryDefineOwnProperty: require('./2017/OrdinaryDefineOwnProperty'),
	OrdinaryGetOwnProperty: require('./2017/OrdinaryGetOwnProperty'),
	OrdinarySetPrototypeOf: require('./2017/OrdinarySetPrototypeOf'),
	OrdinaryGetPrototypeOf: require('./2017/OrdinaryGetPrototypeOf'),
	OrdinaryHasInstance: require('./2017/OrdinaryHasInstance'),
	OrdinaryHasProperty: require('./2017/OrdinaryHasProperty'),
	RegExpExec: require('./2017/RegExpExec'),
	RequireObjectCoercible: require('./2017/RequireObjectCoercible'),
	SameValue: require('./2017/SameValue'),
	SameValueNonNumber: require('./2017/SameValueNonNumber'),
	SameValueZero: require('./2017/SameValueZero'),
	SecFromTime: require('./2017/SecFromTime'),
	Set: require('./2017/Set'),
	SetFunctionName: require('./2017/SetFunctionName'),
	SetIntegrityLevel: require('./2017/SetIntegrityLevel'),
	SpeciesConstructor: require('./2017/SpeciesConstructor'),
	SymbolDescriptiveString: require('./2017/SymbolDescriptiveString'),
	TestIntegrityLevel: require('./2017/TestIntegrityLevel'),
	thisBooleanValue: require('./2017/thisBooleanValue'),
	thisNumberValue: require('./2017/thisNumberValue'),
	thisStringValue: require('./2017/thisStringValue'),
	thisTimeValue: require('./2017/thisTimeValue'),
	TimeClip: require('./2017/TimeClip'),
	TimeFromYear: require('./2017/TimeFromYear'),
	TimeWithinDay: require('./2017/TimeWithinDay'),
	ToBoolean: require('./2017/ToBoolean'),
	ToDateString: require('./2017/ToDateString'),
	ToIndex: require('./2017/ToIndex'),
	ToInt16: require('./2017/ToInt16'),
	ToInt32: require('./2017/ToInt32'),
	ToInt8: require('./2017/ToInt8'),
	ToInteger: require('./2017/ToInteger'),
	ToLength: require('./2017/ToLength'),
	ToNumber: require('./2017/ToNumber'),
	ToObject: require('./2017/ToObject'),
	ToPrimitive: require('./2017/ToPrimitive'),
	ToPropertyDescriptor: require('./2017/ToPropertyDescriptor'),
	ToPropertyKey: require('./2017/ToPropertyKey'),
	ToString: require('./2017/ToString'),
	ToUint16: require('./2017/ToUint16'),
	ToUint32: require('./2017/ToUint32'),
	ToUint8: require('./2017/ToUint8'),
	ToUint8Clamp: require('./2017/ToUint8Clamp'),
	Type: require('./2017/Type'),
	ValidateAndApplyPropertyDescriptor: require('./2017/ValidateAndApplyPropertyDescriptor'),
	WeekDay: require('./2017/WeekDay'),
	YearFromTime: require('./2017/YearFromTime')
};

module.exports = ES2017;

}, function(modId) { var map = {"./2017/AbstractEqualityComparison":1576493739091,"./2017/AbstractRelationalComparison":1576493739095,"./2017/StrictEqualityComparison":1576493739096,"./2017/AdvanceStringIndex":1576493739097,"./2017/ArrayCreate":1576493739099,"./2017/ArraySetLength":1576493739100,"./2017/ArraySpeciesCreate":1576493739118,"./2017/Call":1576493739121,"./2017/CanonicalNumericIndexString":1576493739122,"./2017/CompletePropertyDescriptor":1576493739123,"./2017/CreateDataProperty":1576493739124,"./2017/CreateDataPropertyOrThrow":1576493739125,"./2017/CreateHTML":1576493739126,"./2017/CreateIterResultObject":1576493739128,"./2017/CreateListFromArrayLike":1576493739129,"./2017/CreateMethodProperty":1576493739132,"./2017/DateFromTime":1576493739133,"./2017/Day":1576493739135,"./2017/DayFromYear":1576493739136,"./2017/DaysInYear":1576493739139,"./2017/DayWithinYear":1576493739134,"./2017/DefinePropertyOrThrow":1576493739141,"./2017/DeletePropertyOrThrow":1576493739142,"./2017/EnumerableOwnProperties":1576493739143,"./2017/FromPropertyDescriptor":1576493739111,"./2017/Get":1576493739119,"./2017/GetIterator":1576493739144,"./2017/GetMethod":1576493739145,"./2017/GetOwnPropertyKeys":1576493739148,"./2017/GetPrototypeFromConstructor":1576493739149,"./2017/GetSubstitution":1576493739150,"./2017/GetV":1576493739146,"./2017/HasOwnProperty":1576493739151,"./2017/HasProperty":1576493739152,"./2017/HourFromTime":1576493739153,"./2017/InLeapYear":1576493739138,"./2017/InstanceofOperator":1576493739154,"./2017/Invoke":1576493739156,"./2017/IsAccessorDescriptor":1576493739102,"./2017/IsArray":1576493739101,"./2017/IsCallable":1576493739109,"./2017/IsConcatSpreadable":1576493739157,"./2017/IsConstructor":1576493739120,"./2017/IsDataDescriptor":1576493739103,"./2017/IsExtensible":1576493739105,"./2017/IsGenericDescriptor":1576493739112,"./2017/IsInteger":1576493739098,"./2017/IsPromise":1576493739158,"./2017/IsPropertyDescriptor":1576493739159,"./2017/IsPropertyKey":1576493739106,"./2017/IsRegExp":1576493739115,"./2017/IterableToList":1576493739160,"./2017/IteratorClose":1576493739165,"./2017/IteratorComplete":1576493739162,"./2017/IteratorNext":1576493739163,"./2017/IteratorStep":1576493739161,"./2017/IteratorValue":1576493739164,"./2017/MakeDate":1576493739166,"./2017/MakeDay":1576493739167,"./2017/MakeTime":1576493739168,"./2017/MinFromTime":1576493739169,"./2017/modulo":1576493739170,"./2017/MonthFromTime":1576493739140,"./2017/msFromTime":1576493739171,"./2017/ObjectCreate":1576493739172,"./2017/OrdinaryDefineOwnProperty":1576493739104,"./2017/OrdinaryGetOwnProperty":1576493739114,"./2017/OrdinarySetPrototypeOf":1576493739173,"./2017/OrdinaryGetPrototypeOf":1576493739174,"./2017/OrdinaryHasInstance":1576493739155,"./2017/OrdinaryHasProperty":1576493739175,"./2017/RegExpExec":1576493739176,"./2017/RequireObjectCoercible":1576493739127,"./2017/SameValue":1576493739113,"./2017/SameValueNonNumber":1576493739177,"./2017/SameValueZero":1576493739178,"./2017/SecFromTime":1576493739179,"./2017/Set":1576493739180,"./2017/SetFunctionName":1576493739181,"./2017/SetIntegrityLevel":1576493739182,"./2017/SpeciesConstructor":1576493739183,"./2017/SymbolDescriptiveString":1576493739184,"./2017/TestIntegrityLevel":1576493739185,"./2017/thisBooleanValue":1576493739186,"./2017/thisNumberValue":1576493739187,"./2017/thisStringValue":1576493739188,"./2017/thisTimeValue":1576493739189,"./2017/TimeClip":1576493739190,"./2017/TimeFromYear":1576493739191,"./2017/TimeWithinDay":1576493739192,"./2017/ToBoolean":1576493739108,"./2017/ToDateString":1576493739193,"./2017/ToIndex":1576493739194,"./2017/ToInt16":1576493739195,"./2017/ToInt32":1576493739197,"./2017/ToInt8":1576493739198,"./2017/ToInteger":1576493739131,"./2017/ToLength":1576493739130,"./2017/ToNumber":1576493739092,"./2017/ToObject":1576493739147,"./2017/ToPrimitive":1576493739093,"./2017/ToPropertyDescriptor":1576493739107,"./2017/ToPropertyKey":1576493739200,"./2017/ToString":1576493739116,"./2017/ToUint16":1576493739196,"./2017/ToUint32":1576493739117,"./2017/ToUint8":1576493739199,"./2017/ToUint8Clamp":1576493739201,"./2017/Type":1576493739094,"./2017/ValidateAndApplyPropertyDescriptor":1576493739110,"./2017/WeekDay":1576493739202,"./2017/YearFromTime":1576493739137}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739091, function(require, module, exports) {


var ToNumber = require('./ToNumber');
var ToPrimitive = require('./ToPrimitive');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-abstract-equality-comparison

module.exports = function AbstractEqualityComparison(x, y) {
	var xType = Type(x);
	var yType = Type(y);
	if (xType === yType) {
		return x === y; // ES6+ specified this shortcut anyways.
	}
	if (x == null && y == null) {
		return true;
	}
	if (xType === 'Number' && yType === 'String') {
		return AbstractEqualityComparison(x, ToNumber(y));
	}
	if (xType === 'String' && yType === 'Number') {
		return AbstractEqualityComparison(ToNumber(x), y);
	}
	if (xType === 'Boolean') {
		return AbstractEqualityComparison(ToNumber(x), y);
	}
	if (yType === 'Boolean') {
		return AbstractEqualityComparison(x, ToNumber(y));
	}
	if ((xType === 'String' || xType === 'Number' || xType === 'Symbol') && yType === 'Object') {
		return AbstractEqualityComparison(x, ToPrimitive(y));
	}
	if (xType === 'Object' && (yType === 'String' || yType === 'Number' || yType === 'Symbol')) {
		return AbstractEqualityComparison(ToPrimitive(x), y);
	}
	return false;
};

}, function(modId) { var map = {"./ToNumber":1576493739092,"./ToPrimitive":1576493739093,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739092, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $Number = GetIntrinsic('%Number%');
var $RegExp = GetIntrinsic('%RegExp%');
var $parseInteger = GetIntrinsic('%parseInt%');

var callBound = require('../helpers/callBound');
var regexTester = require('../helpers/regexTester');
var isPrimitive = require('../helpers/isPrimitive');

var $strSlice = callBound('String.prototype.slice');
var isBinary = regexTester(/^0b[01]+$/i);
var isOctal = regexTester(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = regexTester(nonWSregex);

// whitespace from: https://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var $replace = callBound('String.prototype.replace');
var $trim = function (value) {
	return $replace(value, trimRegex, '');
};

var ToPrimitive = require('./ToPrimitive');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tonumber

module.exports = function ToNumber(argument) {
	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
	if (typeof value === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a number');
	}
	if (typeof value === 'string') {
		if (isBinary(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 2));
		} else if (isOctal(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 8));
		} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
			return NaN;
		} else {
			var trimmed = $trim(value);
			if (trimmed !== value) {
				return ToNumber(trimmed);
			}
		}
	}
	return $Number(value);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"../helpers/regexTester":1576493738861,"../helpers/isPrimitive":1576493738862,"./ToPrimitive":1576493739093}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739093, function(require, module, exports) {


var toPrimitive = require('es-to-primitive/es2015');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive

module.exports = function ToPrimitive(input) {
	if (arguments.length > 1) {
		return toPrimitive(input, arguments[1]);
	}
	return toPrimitive(input);
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739094, function(require, module, exports) {


var ES5Type = require('../5/Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tostring

module.exports = function Type(x) {
	if (typeof x === 'symbol') {
		return 'Symbol';
	}
	return ES5Type(x);
};

}, function(modId) { var map = {"../5/Type":1576493738809}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739095, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Number = GetIntrinsic('%Number%');
var $TypeError = GetIntrinsic('%TypeError%');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var isPrefixOf = require('../helpers/isPrefixOf');

var ToNumber = require('./ToNumber');
var ToPrimitive = require('./ToPrimitive');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/5.1/#sec-11.8.5

// eslint-disable-next-line max-statements
module.exports = function AbstractRelationalComparison(x, y, LeftFirst) {
	if (Type(LeftFirst) !== 'Boolean') {
		throw new $TypeError('Assertion failed: LeftFirst argument must be a Boolean');
	}
	var px;
	var py;
	if (LeftFirst) {
		px = ToPrimitive(x, $Number);
		py = ToPrimitive(y, $Number);
	} else {
		py = ToPrimitive(y, $Number);
		px = ToPrimitive(x, $Number);
	}
	var bothStrings = Type(px) === 'String' && Type(py) === 'String';
	if (!bothStrings) {
		var nx = ToNumber(px);
		var ny = ToNumber(py);
		if ($isNaN(nx) || $isNaN(ny)) {
			return undefined;
		}
		if ($isFinite(nx) && $isFinite(ny) && nx === ny) {
			return false;
		}
		if (nx === 0 && ny === 0) {
			return false;
		}
		if (nx === Infinity) {
			return false;
		}
		if (ny === Infinity) {
			return true;
		}
		if (ny === -Infinity) {
			return false;
		}
		if (nx === -Infinity) {
			return true;
		}
		return nx < ny; // by now, these are both nonzero, finite, and not equal
	}
	if (isPrefixOf(py, px)) {
		return false;
	}
	if (isPrefixOf(px, py)) {
		return true;
	}
	return px < py; // both strings, neither a prefix of the other. shortcut for steps c-f
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812,"../helpers/isPrefixOf":1576493738813,"./ToNumber":1576493739092,"./ToPrimitive":1576493739093,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739096, function(require, module, exports) {


var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6

module.exports = function StrictEqualityComparison(x, y) {
	var xType = Type(x);
	var yType = Type(y);
	if (xType !== yType) {
		return false;
	}
	if (xType === 'Undefined' || xType === 'Null') {
		return true;
	}
	return x === y; // shortcut for steps 4-7
};

}, function(modId) { var map = {"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739097, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var IsInteger = require('./IsInteger');
var Type = require('./Type');

var MAX_SAFE_INTEGER = require('../helpers/maxSafeInteger');

var $TypeError = GetIntrinsic('%TypeError%');

var $charCodeAt = require('../helpers/callBound')('String.prototype.charCodeAt');

// https://ecma-international.org/ecma-262/6.0/#sec-advancestringindex

module.exports = function AdvanceStringIndex(S, index, unicode) {
	if (Type(S) !== 'String') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	if (!IsInteger(index) || index < 0 || index > MAX_SAFE_INTEGER) {
		throw new $TypeError('Assertion failed: `length` must be an integer >= 0 and <= 2**53');
	}
	if (Type(unicode) !== 'Boolean') {
		throw new $TypeError('Assertion failed: `unicode` must be a Boolean');
	}
	if (!unicode) {
		return index + 1;
	}
	var length = S.length;
	if ((index + 1) >= length) {
		return index + 1;
	}

	var first = $charCodeAt(S, index);
	if (first < 0xD800 || first > 0xDBFF) {
		return index + 1;
	}

	var second = $charCodeAt(S, index + 1);
	if (second < 0xDC00 || second > 0xDFFF) {
		return index + 1;
	}

	return index + 2;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsInteger":1576493739098,"./Type":1576493739094,"../helpers/maxSafeInteger":1576493738869,"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739098, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var $floor = $Math.floor;
var $abs = $Math.abs;

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isinteger

module.exports = function IsInteger(argument) {
	if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
		return false;
	}
	var abs = $abs(argument);
	return $floor(abs) === abs;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739099, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $ArrayPrototype = GetIntrinsic('%Array.prototype%');
var $RangeError = GetIntrinsic('%RangeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');
var $TypeError = GetIntrinsic('%TypeError%');

var IsInteger = require('./IsInteger');

var MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1;

var $setProto = GetIntrinsic('%Object.setPrototypeOf%') || (
	// eslint-disable-next-line no-proto, no-negated-condition
	[].__proto__ !== $ArrayPrototype
		? null
		: function (O, proto) {
			O.__proto__ = proto; // eslint-disable-line no-proto, no-param-reassign
			return O;
		}
);

// https://www.ecma-international.org/ecma-262/6.0/#sec-arraycreate

module.exports = function ArrayCreate(length) {
	if (!IsInteger(length) || length < 0) {
		throw new $TypeError('Assertion failed: `length` must be an integer Number >= 0');
	}
	if (length > MAX_ARRAY_LENGTH) {
		throw new $RangeError('length is greater than (2**32 - 1)');
	}
	var proto = arguments.length > 1 ? arguments[1] : $ArrayPrototype;
	var A = []; // steps 5 - 7, and 9
	if (proto !== $ArrayPrototype) { // step 8
		if (!$setProto) {
			throw new $SyntaxError('ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]');
		}
		$setProto(A, proto);
	}
	if (length !== 0) { // bypasses the need for step 2
		A.length = length;
	}
	/* step 10, the above as a shortcut for the below
    OrdinaryDefineOwnProperty(A, 'length', {
        '[[Configurable]]': false,
        '[[Enumerable]]': false,
        '[[Value]]': length,
        '[[Writable]]': true
    });
    */
	return A;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsInteger":1576493739098}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739100, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $RangeError = GetIntrinsic('%RangeError%');
var $TypeError = GetIntrinsic('%TypeError%');

var assign = require('object.assign');

var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');

var IsArray = require('./IsArray');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var OrdinaryDefineOwnProperty = require('./OrdinaryDefineOwnProperty');
var OrdinaryGetOwnProperty = require('./OrdinaryGetOwnProperty');
var ToNumber = require('./ToNumber');
var ToString = require('./ToString');
var ToUint32 = require('./ToUint32');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-arraysetlength

// eslint-disable-next-line max-statements, max-lines-per-function
module.exports = function ArraySetLength(A, Desc) {
	if (!IsArray(A)) {
		throw new $TypeError('Assertion failed: A must be an Array');
	}
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	if (!('[[Value]]' in Desc)) {
		return OrdinaryDefineOwnProperty(A, 'length', Desc);
	}
	var newLenDesc = assign({}, Desc);
	var newLen = ToUint32(Desc['[[Value]]']);
	var numberLen = ToNumber(Desc['[[Value]]']);
	if (newLen !== numberLen) {
		throw new $RangeError('Invalid array length');
	}
	newLenDesc['[[Value]]'] = newLen;
	var oldLenDesc = OrdinaryGetOwnProperty(A, 'length');
	if (!IsDataDescriptor(oldLenDesc)) {
		throw new $TypeError('Assertion failed: an array had a non-data descriptor on `length`');
	}
	var oldLen = oldLenDesc['[[Value]]'];
	if (newLen >= oldLen) {
		return OrdinaryDefineOwnProperty(A, 'length', newLenDesc);
	}
	if (!oldLenDesc['[[Writable]]']) {
		return false;
	}
	var newWritable;
	if (!('[[Writable]]' in newLenDesc) || newLenDesc['[[Writable]]']) {
		newWritable = true;
	} else {
		newWritable = false;
		newLenDesc['[[Writable]]'] = true;
	}
	var succeeded = OrdinaryDefineOwnProperty(A, 'length', newLenDesc);
	if (!succeeded) {
		return false;
	}
	while (newLen < oldLen) {
		oldLen -= 1;
		// eslint-disable-next-line no-param-reassign
		var deleteSucceeded = delete A[ToString(oldLen)];
		if (!deleteSucceeded) {
			newLenDesc['[[Value]]'] = oldLen + 1;
			if (!newWritable) {
				newLenDesc['[[Writable]]'] = false;
				OrdinaryDefineOwnProperty(A, 'length', newLenDesc);
				return false;
			}
		}
	}
	if (!newWritable) {
		return OrdinaryDefineOwnProperty(A, 'length', { '[[Writable]]': false });
	}
	return true;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPropertyDescriptor":1576493738836,"./IsArray":1576493739101,"./IsAccessorDescriptor":1576493739102,"./IsDataDescriptor":1576493739103,"./OrdinaryDefineOwnProperty":1576493739104,"./OrdinaryGetOwnProperty":1576493739114,"./ToNumber":1576493739092,"./ToString":1576493739116,"./ToUint32":1576493739117,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739101, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Array = GetIntrinsic('%Array%');

// eslint-disable-next-line global-require
var toStr = !$Array.isArray && require('../helpers/callBound')('Object.prototype.toString');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isarray

module.exports = $Array.isArray || function IsArray(argument) {
	return toStr(argument) === '[object Array]';
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739102, function(require, module, exports) {


var has = require('has');

var assertRecord = require('../helpers/assertRecord');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isaccessordescriptor

module.exports = function IsAccessorDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
		return false;
	}

	return true;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739103, function(require, module, exports) {


var has = require('has');

var assertRecord = require('../helpers/assertRecord');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isdatadescriptor

module.exports = function IsDataDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
		return false;
	}

	return true;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739104, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $TypeError = GetIntrinsic('%TypeError%');

var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');

var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsExtensible = require('./IsExtensible');
var IsPropertyKey = require('./IsPropertyKey');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');
var ValidateAndApplyPropertyDescriptor = require('./ValidateAndApplyPropertyDescriptor');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinarydefineownproperty

module.exports = function OrdinaryDefineOwnProperty(O, P, Desc) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	var desc = $gOPD(O, P);
	var current = desc && ToPropertyDescriptor(desc);
	var extensible = IsExtensible(O);
	return ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPropertyDescriptor":1576493738836,"./IsAccessorDescriptor":1576493739102,"./IsDataDescriptor":1576493739103,"./IsExtensible":1576493739105,"./IsPropertyKey":1576493739106,"./ToPropertyDescriptor":1576493739107,"./Type":1576493739094,"./ValidateAndApplyPropertyDescriptor":1576493739110}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739105, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Object = GetIntrinsic('%Object%');

var isPrimitive = require('../helpers/isPrimitive');

var $preventExtensions = $Object.preventExtensions;
var $isExtensible = $Object.isExtensible;

// https://www.ecma-international.org/ecma-262/6.0/#sec-isextensible-o

module.exports = $preventExtensions
	? function IsExtensible(obj) {
		return !isPrimitive(obj) && $isExtensible(obj);
	}
	: function IsExtensible(obj) { // eslint-disable-line no-unused-vars
		return true;
	};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPrimitive":1576493738862}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739106, function(require, module, exports) {


// https://www.ecma-international.org/ecma-262/6.0/#sec-ispropertykey

module.exports = function IsPropertyKey(argument) {
	return typeof argument === 'string' || typeof argument === 'symbol';
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739107, function(require, module, exports) {


var has = require('has');

var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Type = require('./Type');
var ToBoolean = require('./ToBoolean');
var IsCallable = require('./IsCallable');

// https://ecma-international.org/ecma-262/5.1/#sec-8.10.5

module.exports = function ToPropertyDescriptor(Obj) {
	if (Type(Obj) !== 'Object') {
		throw new $TypeError('ToPropertyDescriptor requires an object');
	}

	var desc = {};
	if (has(Obj, 'enumerable')) {
		desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
	}
	if (has(Obj, 'configurable')) {
		desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
	}
	if (has(Obj, 'value')) {
		desc['[[Value]]'] = Obj.value;
	}
	if (has(Obj, 'writable')) {
		desc['[[Writable]]'] = ToBoolean(Obj.writable);
	}
	if (has(Obj, 'get')) {
		var getter = Obj.get;
		if (typeof getter !== 'undefined' && !IsCallable(getter)) {
			throw new TypeError('getter must be a function');
		}
		desc['[[Get]]'] = getter;
	}
	if (has(Obj, 'set')) {
		var setter = Obj.set;
		if (typeof setter !== 'undefined' && !IsCallable(setter)) {
			throw new $TypeError('setter must be a function');
		}
		desc['[[Set]]'] = setter;
	}

	if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
		throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
	}
	return desc;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493739094,"./ToBoolean":1576493739108,"./IsCallable":1576493739109}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739108, function(require, module, exports) {


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.2

module.exports = function ToBoolean(value) { return !!value; };

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739109, function(require, module, exports) {


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.11

module.exports = require('is-callable');

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739110, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');
var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');
var isSamePropertyDescriptor = require('../helpers/isSamePropertyDescriptor');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsGenericDescriptor = require('./IsGenericDescriptor');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-validateandapplypropertydescriptor
// https://www.ecma-international.org/ecma-262/8.0/#sec-validateandapplypropertydescriptor

// eslint-disable-next-line max-lines-per-function, max-statements, max-params
module.exports = function ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current) {
	// this uses the ES2017+ logic, since it fixes a number of bugs in the ES2015 logic.
	var oType = Type(O);
	if (oType !== 'Undefined' && oType !== 'Object') {
		throw new $TypeError('Assertion failed: O must be undefined or an Object');
	}
	if (Type(extensible) !== 'Boolean') {
		throw new $TypeError('Assertion failed: extensible must be a Boolean');
	}
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	if (Type(current) !== 'Undefined' && !isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, current)) {
		throw new $TypeError('Assertion failed: current must be a Property Descriptor, or undefined');
	}
	if (oType !== 'Undefined' && !IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: if O is not undefined, P must be a Property Key');
	}
	if (Type(current) === 'Undefined') {
		if (!extensible) {
			return false;
		}
		if (IsGenericDescriptor(Desc) || IsDataDescriptor(Desc)) {
			if (oType !== 'Undefined') {
				DefineOwnProperty(
					IsDataDescriptor,
					SameValue,
					FromPropertyDescriptor,
					O,
					P,
					{
						'[[Configurable]]': Desc['[[Configurable]]'],
						'[[Enumerable]]': Desc['[[Enumerable]]'],
						'[[Value]]': Desc['[[Value]]'],
						'[[Writable]]': Desc['[[Writable]]']
					}
				);
			}
		} else {
			if (!IsAccessorDescriptor(Desc)) {
				throw new $TypeError('Assertion failed: Desc is not an accessor descriptor');
			}
			if (oType !== 'Undefined') {
				return DefineOwnProperty(
					IsDataDescriptor,
					SameValue,
					FromPropertyDescriptor,
					O,
					P,
					Desc
				);
			}
		}
		return true;
	}
	if (IsGenericDescriptor(Desc) && !('[[Configurable]]' in Desc) && !('[[Enumerable]]' in Desc)) {
		return true;
	}
	if (isSamePropertyDescriptor({ SameValue: SameValue }, Desc, current)) {
		return true; // removed by ES2017, but should still be correct
	}
	// "if every field in Desc is absent, return true" can't really match the assertion that it's a Property Descriptor
	if (!current['[[Configurable]]']) {
		if (Desc['[[Configurable]]']) {
			return false;
		}
		if ('[[Enumerable]]' in Desc && !Desc['[[Enumerable]]'] === !!current['[[Enumerable]]']) {
			return false;
		}
	}
	if (IsGenericDescriptor(Desc)) {
		// no further validation is required.
	} else if (IsDataDescriptor(current) !== IsDataDescriptor(Desc)) {
		if (!current['[[Configurable]]']) {
			return false;
		}
		if (IsDataDescriptor(current)) {
			if (oType !== 'Undefined') {
				DefineOwnProperty(
					IsDataDescriptor,
					SameValue,
					FromPropertyDescriptor,
					O,
					P,
					{
						'[[Configurable]]': current['[[Configurable]]'],
						'[[Enumerable]]': current['[[Enumerable]]'],
						'[[Get]]': undefined
					}
				);
			}
		} else if (oType !== 'Undefined') {
			DefineOwnProperty(
				IsDataDescriptor,
				SameValue,
				FromPropertyDescriptor,
				O,
				P,
				{
					'[[Configurable]]': current['[[Configurable]]'],
					'[[Enumerable]]': current['[[Enumerable]]'],
					'[[Value]]': undefined
				}
			);
		}
	} else if (IsDataDescriptor(current) && IsDataDescriptor(Desc)) {
		if (!current['[[Configurable]]'] && !current['[[Writable]]']) {
			if ('[[Writable]]' in Desc && Desc['[[Writable]]']) {
				return false;
			}
			if ('[[Value]]' in Desc && !SameValue(Desc['[[Value]]'], current['[[Value]]'])) {
				return false;
			}
			return true;
		}
	} else if (IsAccessorDescriptor(current) && IsAccessorDescriptor(Desc)) {
		if (!current['[[Configurable]]']) {
			if ('[[Set]]' in Desc && !SameValue(Desc['[[Set]]'], current['[[Set]]'])) {
				return false;
			}
			if ('[[Get]]' in Desc && !SameValue(Desc['[[Get]]'], current['[[Get]]'])) {
				return false;
			}
			return true;
		}
	} else {
		throw new $TypeError('Assertion failed: current and Desc are not both data, both accessors, or one accessor and one data.');
	}
	if (oType !== 'Undefined') {
		return DefineOwnProperty(
			IsDataDescriptor,
			SameValue,
			FromPropertyDescriptor,
			O,
			P,
			Desc
		);
	}
	return true;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/DefineOwnProperty":1576493738882,"../helpers/isPropertyDescriptor":1576493738836,"../helpers/isSamePropertyDescriptor":1576493738883,"./FromPropertyDescriptor":1576493739111,"./IsAccessorDescriptor":1576493739102,"./IsDataDescriptor":1576493739103,"./IsGenericDescriptor":1576493739112,"./IsPropertyKey":1576493739106,"./SameValue":1576493739113,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739111, function(require, module, exports) {


var assertRecord = require('../helpers/assertRecord');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-frompropertydescriptor

module.exports = function FromPropertyDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return Desc;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	var obj = {};
	if ('[[Value]]' in Desc) {
		obj.value = Desc['[[Value]]'];
	}
	if ('[[Writable]]' in Desc) {
		obj.writable = Desc['[[Writable]]'];
	}
	if ('[[Get]]' in Desc) {
		obj.get = Desc['[[Get]]'];
	}
	if ('[[Set]]' in Desc) {
		obj.set = Desc['[[Set]]'];
	}
	if ('[[Enumerable]]' in Desc) {
		obj.enumerable = Desc['[[Enumerable]]'];
	}
	if ('[[Configurable]]' in Desc) {
		obj.configurable = Desc['[[Configurable]]'];
	}
	return obj;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739112, function(require, module, exports) {


var assertRecord = require('../helpers/assertRecord');

var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isgenericdescriptor

module.exports = function IsGenericDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!IsAccessorDescriptor(Desc) && !IsDataDescriptor(Desc)) {
		return true;
	}

	return false;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./IsAccessorDescriptor":1576493739102,"./IsDataDescriptor":1576493739103,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739113, function(require, module, exports) {


var $isNaN = require('../helpers/isNaN');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.12

module.exports = function SameValue(x, y) {
	if (x === y) { // 0 === -0, but they are not identical.
		if (x === 0) { return 1 / x === 1 / y; }
		return true;
	}
	return $isNaN(x) && $isNaN(y);
};

}, function(modId) { var map = {"../helpers/isNaN":1576493738811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739114, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $TypeError = GetIntrinsic('%TypeError%');

var callBound = require('../helpers/callBound');

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

var has = require('has');

var IsArray = require('./IsArray');
var IsPropertyKey = require('./IsPropertyKey');
var IsRegExp = require('./IsRegExp');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinarygetownproperty

module.exports = function OrdinaryGetOwnProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!has(O, P)) {
		return void 0;
	}
	if (!$gOPD) {
		// ES3 fallback
		var arrayLength = IsArray(O) && P === 'length';
		var regexLastIndex = IsRegExp(O) && P === 'lastIndex';
		return {
			'[[Configurable]]': !(arrayLength || regexLastIndex),
			'[[Enumerable]]': $isEnumerable(O, P),
			'[[Value]]': O[P],
			'[[Writable]]': true
		};
	}
	return ToPropertyDescriptor($gOPD(O, P));
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./IsArray":1576493739101,"./IsPropertyKey":1576493739106,"./IsRegExp":1576493739115,"./ToPropertyDescriptor":1576493739107,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739115, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $match = GetIntrinsic('%Symbol.match%', true);

var hasRegExpMatcher = require('is-regex');

var ToBoolean = require('./ToBoolean');

// https://ecma-international.org/ecma-262/6.0/#sec-isregexp

module.exports = function IsRegExp(argument) {
	if (!argument || typeof argument !== 'object') {
		return false;
	}
	if ($match) {
		var isRegExp = argument[$match];
		if (typeof isRegExp !== 'undefined') {
			return ToBoolean(isRegExp);
		}
	}
	return hasRegExpMatcher(argument);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToBoolean":1576493739108}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739116, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $String = GetIntrinsic('%String%');
var $TypeError = GetIntrinsic('%TypeError%');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tostring

module.exports = function ToString(argument) {
	if (typeof argument === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a string');
	}
	return $String(argument);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739117, function(require, module, exports) {


var ToNumber = require('./ToNumber');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.6

module.exports = function ToUint32(x) {
	return ToNumber(x) >>> 0;
};

}, function(modId) { var map = {"./ToNumber":1576493739092}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739118, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Array = GetIntrinsic('%Array%');
var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var IsArray = require('./IsArray');
var IsConstructor = require('./IsConstructor');
var IsInteger = require('./IsInteger');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-arrayspeciescreate

module.exports = function ArraySpeciesCreate(originalArray, length) {
	if (!IsInteger(length) || length < 0) {
		throw new $TypeError('Assertion failed: length must be an integer >= 0');
	}
	var len = length === 0 ? 0 : length;
	var C;
	var isArray = IsArray(originalArray);
	if (isArray) {
		C = Get(originalArray, 'constructor');
		// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
		// if (IsConstructor(C)) {
		// 	if C is another realm's Array, C = undefined
		// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
		// }
		if ($species && Type(C) === 'Object') {
			C = Get(C, $species);
			if (C === null) {
				C = void 0;
			}
		}
	}
	if (typeof C === 'undefined') {
		return $Array(len);
	}
	if (!IsConstructor(C)) {
		throw new $TypeError('C must be a constructor');
	}
	return new C(len); // Construct(C, len);
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739119,"./IsArray":1576493739101,"./IsConstructor":1576493739120,"./IsInteger":1576493739098,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739119, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = require('object-inspect');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

/**
 * 7.3.1 Get (O, P) - https://ecma-international.org/ecma-262/6.0/#sec-get-o-p
 * 1. Assert: Type(O) is Object.
 * 2. Assert: IsPropertyKey(P) is true.
 * 3. Return O.[[Get]](P, O).
 */

module.exports = function Get(O, P) {
	// 7.3.1.1
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	// 7.3.1.2
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true, got ' + inspect(P));
	}
	// 7.3.1.3
	return O[P];
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739106,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739120, function(require, module, exports) {


// https://www.ecma-international.org/ecma-262/6.0/#sec-isconstructor

module.exports = function IsConstructor(argument) {
	return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739121, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = require('object-inspect');

var IsCallable = require('./IsCallable');

// https://www.ecma-international.org/ecma-262/6.0/#sec-call

module.exports = function Call(F, V) {
	var args = arguments.length > 2 ? arguments[2] : [];
	if (!IsCallable(F)) {
		throw new $TypeError(inspect(F) + ' is not a function');
	}
	return F.apply(V, args);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsCallable":1576493739109}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739122, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var SameValue = require('./SameValue');
var ToNumber = require('./ToNumber');
var ToString = require('./ToString');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring

module.exports = function CanonicalNumericIndexString(argument) {
	if (Type(argument) !== 'String') {
		throw new $TypeError('Assertion failed: `argument` must be a String');
	}
	if (argument === '-0') { return -0; }
	var n = ToNumber(argument);
	if (SameValue(ToString(n), argument)) { return n; }
	return void 0;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./SameValue":1576493739113,"./ToNumber":1576493739092,"./ToString":1576493739116,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739123, function(require, module, exports) {


var has = require('has');

var assertRecord = require('../helpers/assertRecord');

var IsDataDescriptor = require('./IsDataDescriptor');
var IsGenericDescriptor = require('./IsGenericDescriptor');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-completepropertydescriptor

module.exports = function CompletePropertyDescriptor(Desc) {
	/* eslint no-param-reassign: 0 */
	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (IsGenericDescriptor(Desc) || IsDataDescriptor(Desc)) {
		if (!has(Desc, '[[Value]]')) {
			Desc['[[Value]]'] = void 0;
		}
		if (!has(Desc, '[[Writable]]')) {
			Desc['[[Writable]]'] = false;
		}
	} else {
		if (!has(Desc, '[[Get]]')) {
			Desc['[[Get]]'] = void 0;
		}
		if (!has(Desc, '[[Set]]')) {
			Desc['[[Set]]'] = void 0;
		}
	}
	if (!has(Desc, '[[Enumerable]]')) {
		Desc['[[Enumerable]]'] = false;
	}
	if (!has(Desc, '[[Configurable]]')) {
		Desc['[[Configurable]]'] = false;
	}
	return Desc;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./IsDataDescriptor":1576493739103,"./IsGenericDescriptor":1576493739112,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739124, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsExtensible = require('./IsExtensible');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-createdataproperty

module.exports = function CreateDataProperty(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var oldDesc = $gOPD(O, P);
	var extensible = oldDesc || IsExtensible(O);
	var immutable = oldDesc && (!oldDesc.writable || !oldDesc.configurable);
	if (immutable || !extensible) {
		return false;
	}
	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		{
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Value]]': V,
			'[[Writable]]': true
		}
	);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/DefineOwnProperty":1576493738882,"./FromPropertyDescriptor":1576493739111,"./IsDataDescriptor":1576493739103,"./IsExtensible":1576493739105,"./IsPropertyKey":1576493739106,"./SameValue":1576493739113,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739125, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var CreateDataProperty = require('./CreateDataProperty');
var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// // https://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow

module.exports = function CreateDataPropertyOrThrow(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var success = CreateDataProperty(O, P, V);
	if (!success) {
		throw new $TypeError('unable to create data property');
	}
	return success;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./CreateDataProperty":1576493739124,"./IsPropertyKey":1576493739106,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739126, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var callBound = require('../helpers/callBound');

var $replace = callBound('String.prototype.replace');

var RequireObjectCoercible = require('./RequireObjectCoercible');
var ToString = require('./ToString');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-createhtml

module.exports = function CreateHTML(string, tag, attribute, value) {
	if (Type(tag) !== 'String' || Type(attribute) !== 'String') {
		throw new $TypeError('Assertion failed: `tag` and `attribute` must be strings');
	}
	var str = RequireObjectCoercible(string);
	var S = ToString(str);
	var p1 = '<' + tag;
	if (attribute !== '') {
		var V = ToString(value);
		var escapedV = $replace(V, /\x22/g, '&quot;');
		p1 += '\x20' + attribute + '\x3D\x22' + escapedV + '\x22';
	}
	return p1 + '>' + S + '</' + tag + '>';
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./RequireObjectCoercible":1576493739127,"./ToString":1576493739116,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739127, function(require, module, exports) {


module.exports = require('../5/CheckObjectCoercible');

}, function(modId) { var map = {"../5/CheckObjectCoercible":1576493738817}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739128, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-createiterresultobject

module.exports = function CreateIterResultObject(value, done) {
	if (Type(done) !== 'Boolean') {
		throw new $TypeError('Assertion failed: Type(done) is not Boolean');
	}
	return {
		value: value,
		done: done
	};
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739129, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var callBound = require('../helpers/callBound');

var $TypeError = GetIntrinsic('%TypeError%');
var $indexOf = callBound('Array.prototype.indexOf');
var $push = callBound('Array.prototype.push');

var Get = require('./Get');
var IsArray = require('./IsArray');
var ToLength = require('./ToLength');
var ToString = require('./ToString');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-createlistfromarraylike
module.exports = function CreateListFromArrayLike(obj) {
	var elementTypes = arguments.length > 1
		? arguments[1]
		: ['Undefined', 'Null', 'Boolean', 'String', 'Symbol', 'Number', 'Object'];

	if (Type(obj) !== 'Object') {
		throw new $TypeError('Assertion failed: `obj` must be an Object');
	}
	if (!IsArray(elementTypes)) {
		throw new $TypeError('Assertion failed: `elementTypes`, if provided, must be an array');
	}
	var len = ToLength(Get(obj, 'length'));
	var list = [];
	var index = 0;
	while (index < len) {
		var indexName = ToString(index);
		var next = Get(obj, indexName);
		var nextType = Type(next);
		if ($indexOf(elementTypes, nextType) < 0) {
			throw new $TypeError('item type ' + nextType + ' is not a valid elementType');
		}
		$push(list, next);
		index += 1;
	}
	return list;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Get":1576493739119,"./IsArray":1576493739101,"./ToLength":1576493739130,"./ToString":1576493739116,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739130, function(require, module, exports) {


var MAX_SAFE_INTEGER = require('../helpers/maxSafeInteger');

var ToInteger = require('./ToInteger');

module.exports = function ToLength(argument) {
	var len = ToInteger(argument);
	if (len <= 0) { return 0; } // includes converting -0 to +0
	if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
	return len;
};

}, function(modId) { var map = {"../helpers/maxSafeInteger":1576493738869,"./ToInteger":1576493739131}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739131, function(require, module, exports) {


var ES5ToInteger = require('../5/ToInteger');

var ToNumber = require('./ToNumber');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tointeger

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	return ES5ToInteger(number);
};

}, function(modId) { var map = {"../5/ToInteger":1576493738839,"./ToNumber":1576493739092}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739132, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-createmethodproperty

module.exports = function CreateMethodProperty(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	var newDesc = {
		'[[Configurable]]': true,
		'[[Enumerable]]': false,
		'[[Value]]': V,
		'[[Writable]]': true
	};
	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		newDesc
	);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/DefineOwnProperty":1576493738882,"./FromPropertyDescriptor":1576493739111,"./IsDataDescriptor":1576493739103,"./IsPropertyKey":1576493739106,"./SameValue":1576493739113,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739133, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $EvalError = GetIntrinsic('%EvalError%');

var DayWithinYear = require('./DayWithinYear');
var InLeapYear = require('./InLeapYear');
var MonthFromTime = require('./MonthFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.5

module.exports = function DateFromTime(t) {
	var m = MonthFromTime(t);
	var d = DayWithinYear(t);
	if (m === 0) {
		return d + 1;
	}
	if (m === 1) {
		return d - 30;
	}
	var leap = InLeapYear(t);
	if (m === 2) {
		return d - 58 - leap;
	}
	if (m === 3) {
		return d - 89 - leap;
	}
	if (m === 4) {
		return d - 119 - leap;
	}
	if (m === 5) {
		return d - 150 - leap;
	}
	if (m === 6) {
		return d - 180 - leap;
	}
	if (m === 7) {
		return d - 211 - leap;
	}
	if (m === 8) {
		return d - 242 - leap;
	}
	if (m === 9) {
		return d - 272 - leap;
	}
	if (m === 10) {
		return d - 303 - leap;
	}
	if (m === 11) {
		return d - 333 - leap;
	}
	throw new $EvalError('Assertion failed: MonthFromTime returned an impossible value: ' + m);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./DayWithinYear":1576493739134,"./InLeapYear":1576493739138,"./MonthFromTime":1576493739140}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739134, function(require, module, exports) {


var Day = require('./Day');
var DayFromYear = require('./DayFromYear');
var YearFromTime = require('./YearFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.4

module.exports = function DayWithinYear(t) {
	return Day(t) - DayFromYear(YearFromTime(t));
};

}, function(modId) { var map = {"./Day":1576493739135,"./DayFromYear":1576493739136,"./YearFromTime":1576493739137}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739135, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var msPerDay = require('../helpers/timeConstants').msPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.2

module.exports = function Day(t) {
	return $floor(t / msPerDay);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739136, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function DayFromYear(y) {
	return (365 * (y - 1970)) + $floor((y - 1969) / 4) - $floor((y - 1901) / 100) + $floor((y - 1601) / 400);
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739137, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Date = GetIntrinsic('%Date%');

var callBound = require('../helpers/callBound');

var $getUTCFullYear = callBound('Date.prototype.getUTCFullYear');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function YearFromTime(t) {
	// largest y such that this.TimeFromYear(y) <= t
	return $getUTCFullYear(new $Date(t));
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739138, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $EvalError = GetIntrinsic('%EvalError%');

var DaysInYear = require('./DaysInYear');
var YearFromTime = require('./YearFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function InLeapYear(t) {
	var days = DaysInYear(YearFromTime(t));
	if (days === 365) {
		return 0;
	}
	if (days === 366) {
		return 1;
	}
	throw new $EvalError('Assertion failed: there are not 365 or 366 days in a year, got: ' + days);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./DaysInYear":1576493739139,"./YearFromTime":1576493739137}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739139, function(require, module, exports) {


var mod = require('../helpers/mod');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function DaysInYear(y) {
	if (mod(y, 4) !== 0) {
		return 365;
	}
	if (mod(y, 100) !== 0) {
		return 366;
	}
	if (mod(y, 400) !== 0) {
		return 365;
	}
	return 366;
};

}, function(modId) { var map = {"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739140, function(require, module, exports) {


var DayWithinYear = require('./DayWithinYear');
var InLeapYear = require('./InLeapYear');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.4

module.exports = function MonthFromTime(t) {
	var day = DayWithinYear(t);
	if (0 <= day && day < 31) {
		return 0;
	}
	var leap = InLeapYear(t);
	if (31 <= day && day < (59 + leap)) {
		return 1;
	}
	if ((59 + leap) <= day && day < (90 + leap)) {
		return 2;
	}
	if ((90 + leap) <= day && day < (120 + leap)) {
		return 3;
	}
	if ((120 + leap) <= day && day < (151 + leap)) {
		return 4;
	}
	if ((151 + leap) <= day && day < (181 + leap)) {
		return 5;
	}
	if ((181 + leap) <= day && day < (212 + leap)) {
		return 6;
	}
	if ((212 + leap) <= day && day < (243 + leap)) {
		return 7;
	}
	if ((243 + leap) <= day && day < (273 + leap)) {
		return 8;
	}
	if ((273 + leap) <= day && day < (304 + leap)) {
		return 9;
	}
	if ((304 + leap) <= day && day < (334 + leap)) {
		return 10;
	}
	if ((334 + leap) <= day && day < (365 + leap)) {
		return 11;
	}
};

}, function(modId) { var map = {"./DayWithinYear":1576493739134,"./InLeapYear":1576493739138}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739141, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');
var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-definepropertyorthrow

module.exports = function DefinePropertyOrThrow(O, P, desc) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	var Desc = isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, desc) ? desc : ToPropertyDescriptor(desc);
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc is not a valid Property Descriptor');
	}

	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		Desc
	);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPropertyDescriptor":1576493738836,"../helpers/DefineOwnProperty":1576493738882,"./FromPropertyDescriptor":1576493739111,"./IsAccessorDescriptor":1576493739102,"./IsDataDescriptor":1576493739103,"./IsPropertyKey":1576493739106,"./SameValue":1576493739113,"./ToPropertyDescriptor":1576493739107,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739142, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-deletepropertyorthrow

module.exports = function DeletePropertyOrThrow(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	// eslint-disable-next-line no-param-reassign
	var success = delete O[P];
	if (!success) {
		throw new $TypeError('Attempt to delete property failed.');
	}
	return success;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739106,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739143, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var objectKeys = require('object-keys');

var callBound = require('../helpers/callBound');

var callBind = require('../helpers/callBind');

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');
var $pushApply = callBind.apply(GetIntrinsic('%Array.prototype.push%'));

var forEach = require('../helpers/forEach');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/8.0/#sec-enumerableownproperties

module.exports = function EnumerableOwnProperties(O, kind) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	var keys = objectKeys(O);
	if (kind === 'key') {
		return keys;
	}
	if (kind === 'value' || kind === 'key+value') {
		var results = [];
		forEach(keys, function (key) {
			if ($isEnumerable(O, key)) {
				$pushApply(results, [
					kind === 'value' ? O[key] : [key, O[key]]
				]);
			}
		});
		return results;
	}
	throw new $TypeError('Assertion failed: "kind" is not "key", "value", or "key+value": ' + kind);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"../helpers/callBind":1576493738815,"../helpers/forEach":1576493738956,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739144, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var getIteratorMethod = require('../helpers/getIteratorMethod');
var AdvanceStringIndex = require('./AdvanceStringIndex');
var Call = require('./Call');
var GetMethod = require('./GetMethod');
var IsArray = require('./IsArray');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-getiterator

module.exports = function GetIterator(obj, method) {
	var actualMethod = method;
	if (arguments.length < 2) {
		actualMethod = getIteratorMethod(
			{
				AdvanceStringIndex: AdvanceStringIndex,
				GetMethod: GetMethod,
				IsArray: IsArray,
				Type: Type
			},
			obj
		);
	}
	var iterator = Call(actualMethod, obj);
	if (Type(iterator) !== 'Object') {
		throw new $TypeError('iterator must return an object');
	}

	return iterator;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/getIteratorMethod":1576493738919,"./AdvanceStringIndex":1576493739097,"./Call":1576493739121,"./GetMethod":1576493739145,"./IsArray":1576493739101,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739145, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var GetV = require('./GetV');
var IsCallable = require('./IsCallable');
var IsPropertyKey = require('./IsPropertyKey');

/**
 * 7.3.9 - https://ecma-international.org/ecma-262/6.0/#sec-getmethod
 * 1. Assert: IsPropertyKey(P) is true.
 * 2. Let func be GetV(O, P).
 * 3. ReturnIfAbrupt(func).
 * 4. If func is either undefined or null, return undefined.
 * 5. If IsCallable(func) is false, throw a TypeError exception.
 * 6. Return func.
 */

module.exports = function GetMethod(O, P) {
	// 7.3.9.1
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	// 7.3.9.2
	var func = GetV(O, P);

	// 7.3.9.4
	if (func == null) {
		return void 0;
	}

	// 7.3.9.5
	if (!IsCallable(func)) {
		throw new $TypeError(P + 'is not a function');
	}

	// 7.3.9.6
	return func;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./GetV":1576493739146,"./IsCallable":1576493739109,"./IsPropertyKey":1576493739106}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739146, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var ToObject = require('./ToObject');

/**
 * 7.3.2 GetV (V, P)
 * 1. Assert: IsPropertyKey(P) is true.
 * 2. Let O be ToObject(V).
 * 3. ReturnIfAbrupt(O).
 * 4. Return O.[[Get]](P, V).
 */

module.exports = function GetV(V, P) {
	// 7.3.2.1
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	// 7.3.2.2-3
	var O = ToObject(V);

	// 7.3.2.4
	return O[P];
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739106,"./ToObject":1576493739147}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739147, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Object = GetIntrinsic('%Object%');

var RequireObjectCoercible = require('./RequireObjectCoercible');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toobject

module.exports = function ToObject(value) {
	RequireObjectCoercible(value);
	return $Object(value);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./RequireObjectCoercible":1576493739127}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739148, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var hasSymbols = require('has-symbols')();

var $TypeError = GetIntrinsic('%TypeError%');

var $gOPN = GetIntrinsic('%Object.getOwnPropertyNames%');
var $gOPS = hasSymbols && GetIntrinsic('%Object.getOwnPropertySymbols%');
var keys = require('object-keys');

var esType = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-getownpropertykeys

module.exports = function GetOwnPropertyKeys(O, Type) {
	if (esType(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (Type === 'Symbol') {
		return $gOPS ? $gOPS(O) : [];
	}
	if (Type === 'String') {
		if (!$gOPN) {
			return keys(O);
		}
		return $gOPN(O);
	}
	throw new $TypeError('Assertion failed: `Type` must be `"String"` or `"Symbol"`');
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739149, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Function = GetIntrinsic('%Function%');
var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var IsConstructor = require('./IsConstructor');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-getprototypefromconstructor

module.exports = function GetPrototypeFromConstructor(constructor, intrinsicDefaultProto) {
	var intrinsic = GetIntrinsic(intrinsicDefaultProto); // throws if not a valid intrinsic
	if (!IsConstructor(constructor)) {
		throw new $TypeError('Assertion failed: `constructor` must be a constructor');
	}
	var proto = Get(constructor, 'prototype');
	if (Type(proto) !== 'Object') {
		if (!(constructor instanceof $Function)) {
			// ignore other realms, for now
			throw new $TypeError('cross-realm constructors not currently supported');
		}
		proto = intrinsic;
	}
	return proto;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739119,"./IsConstructor":1576493739120,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739150, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $parseInt = GetIntrinsic('%parseInt%');

var inspect = require('object-inspect');

var regexTester = require('../helpers/regexTester');
var callBound = require('../helpers/callBound');
var every = require('../helpers/every');

var isDigit = regexTester(/^[0-9]$/);

var strSlice = callBound('String.prototype.slice');

var IsArray = require('./IsArray');
var IsInteger = require('./IsInteger');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-getsubstitution

// eslint-disable-next-line max-statements, max-params, max-lines-per-function
module.exports = function GetSubstitution(matched, str, position, captures, replacement) {
	if (Type(matched) !== 'String') {
		throw new $TypeError('Assertion failed: `matched` must be a String');
	}
	var matchLength = matched.length;

	if (Type(str) !== 'String') {
		throw new $TypeError('Assertion failed: `str` must be a String');
	}
	var stringLength = str.length;

	if (!IsInteger(position) || position < 0 || position > stringLength) {
		throw new $TypeError('Assertion failed: `position` must be a nonnegative integer, and less than or equal to the length of `string`, got ' + inspect(position));
	}

	var ES = this;
	var isStringOrHole = function (capture, index, arr) { return ES.Type(capture) === 'String' || !(index in arr); };
	if (!IsArray(captures) || !every(captures, isStringOrHole)) {
		throw new $TypeError('Assertion failed: `captures` must be a List of Strings, got ' + inspect(captures));
	}

	if (Type(replacement) !== 'String') {
		throw new $TypeError('Assertion failed: `replacement` must be a String');
	}

	var tailPos = position + matchLength;
	var m = captures.length;

	var result = '';
	for (var i = 0; i < replacement.length; i += 1) {
		// if this is a $, and it's not the end of the replacement
		var current = replacement[i];
		var isLast = (i + 1) >= replacement.length;
		var nextIsLast = (i + 2) >= replacement.length;
		if (current === '$' && !isLast) {
			var next = replacement[i + 1];
			if (next === '$') {
				result += '$';
				i += 1;
			} else if (next === '&') {
				result += matched;
				i += 1;
			} else if (next === '`') {
				result += position === 0 ? '' : strSlice(str, 0, position - 1);
				i += 1;
			} else if (next === "'") {
				result += tailPos >= stringLength ? '' : strSlice(str, tailPos);
				i += 1;
			} else {
				var nextNext = nextIsLast ? null : replacement[i + 2];
				if (isDigit(next) && next !== '0' && (nextIsLast || !isDigit(nextNext))) {
					// $1 through $9, and not followed by a digit
					var n = $parseInt(next, 10);
					// if (n > m, impl-defined)
					result += (n <= m && Type(captures[n - 1]) === 'Undefined') ? '' : captures[n - 1];
					i += 1;
				} else if (isDigit(next) && (nextIsLast || isDigit(nextNext))) {
					// $00 through $99
					var nn = next + nextNext;
					var nnI = $parseInt(nn, 10) - 1;
					// if nn === '00' or nn > m, impl-defined
					result += (nn <= m && Type(captures[nnI]) === 'Undefined') ? '' : captures[nnI];
					i += 2;
				} else {
					result += '$';
				}
			}
		} else {
			// the final $, or else not a $
			result += replacement[i];
		}
	}
	return result;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/regexTester":1576493738861,"../helpers/callBound":1576493738814,"../helpers/every":1576493738884,"./IsArray":1576493739101,"./IsInteger":1576493739098,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739151, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var has = require('has');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-hasownproperty

module.exports = function HasOwnProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return has(O, P);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739106,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739152, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-hasproperty

module.exports = function HasProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return P in O;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739106,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739153, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var mod = require('../helpers/mod');
var timeConstants = require('../helpers/timeConstants');
var msPerHour = timeConstants.msPerHour;
var HoursPerDay = timeConstants.HoursPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function HourFromTime(t) {
	return mod($floor(t / msPerHour), HoursPerDay);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739154, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $hasInstance = GetIntrinsic('Symbol.hasInstance', true);

var Call = require('./Call');
var GetMethod = require('./GetMethod');
var IsCallable = require('./IsCallable');
var OrdinaryHasInstance = require('./OrdinaryHasInstance');
var ToBoolean = require('./ToBoolean');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-instanceofoperator

module.exports = function InstanceofOperator(O, C) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	var instOfHandler = $hasInstance ? GetMethod(C, $hasInstance) : void 0;
	if (typeof instOfHandler !== 'undefined') {
		return ToBoolean(Call(instOfHandler, C, [O]));
	}
	if (!IsCallable(C)) {
		throw new $TypeError('`C` is not Callable');
	}
	return OrdinaryHasInstance(C, O);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Call":1576493739121,"./GetMethod":1576493739145,"./IsCallable":1576493739109,"./OrdinaryHasInstance":1576493739155,"./ToBoolean":1576493739108,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739155, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var IsCallable = require('./IsCallable');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinaryhasinstance

module.exports = function OrdinaryHasInstance(C, O) {
	if (IsCallable(C) === false) {
		return false;
	}
	if (Type(O) !== 'Object') {
		return false;
	}
	var P = Get(C, 'prototype');
	if (Type(P) !== 'Object') {
		throw new $TypeError('OrdinaryHasInstance called on an object with an invalid prototype property.');
	}
	return O instanceof C;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739119,"./IsCallable":1576493739109,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739156, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $arraySlice = require('../helpers/callBound')('Array.prototype.slice');

var Call = require('./Call');
var GetV = require('./GetV');
var IsPropertyKey = require('./IsPropertyKey');

// https://ecma-international.org/ecma-262/6.0/#sec-invoke

module.exports = function Invoke(O, P) {
	if (!IsPropertyKey(P)) {
		throw new $TypeError('P must be a Property Key');
	}
	var argumentsList = $arraySlice(arguments, 2);
	var func = GetV(O, P);
	return Call(func, O, argumentsList);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Call":1576493739121,"./GetV":1576493739146,"./IsPropertyKey":1576493739106}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739157, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $isConcatSpreadable = GetIntrinsic('%Symbol.isConcatSpreadable%', true);

var Get = require('./Get');
var IsArray = require('./IsArray');
var ToBoolean = require('./ToBoolean');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-isconcatspreadable

module.exports = function IsConcatSpreadable(O) {
	if (Type(O) !== 'Object') {
		return false;
	}
	if ($isConcatSpreadable) {
		var spreadable = Get(O, $isConcatSpreadable);
		if (typeof spreadable !== 'undefined') {
			return ToBoolean(spreadable);
		}
	}
	return IsArray(O);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739119,"./IsArray":1576493739101,"./ToBoolean":1576493739108,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739158, function(require, module, exports) {


var callBound = require('../helpers/callBound');

var $PromiseThen = callBound('Promise.prototype.then', true);

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ispromise

module.exports = function IsPromise(x) {
	if (Type(x) !== 'Object') {
		return false;
	}
	if (!$PromiseThen) { // Promises are not supported
		return false;
	}
	try {
		$PromiseThen(x); // throws if not a promise
	} catch (e) {
		return false;
	}
	return true;
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739159, function(require, module, exports) {


var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');

var Type = require('./Type');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');

// https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type

module.exports = function IsPropertyDescriptor(Desc) {
	return isPropertyDescriptor({
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor,
		Type: Type
	}, Desc);
};

}, function(modId) { var map = {"../helpers/isPropertyDescriptor":1576493738836,"./Type":1576493739094,"./IsDataDescriptor":1576493739103,"./IsAccessorDescriptor":1576493739102}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739160, function(require, module, exports) {


var callBound = require('../helpers/callBound');
var $arrayPush = callBound('Array.prototype.push');

var GetIterator = require('./GetIterator');
var IteratorStep = require('./IteratorStep');
var IteratorValue = require('./IteratorValue');

// https://www.ecma-international.org/ecma-262/8.0/#sec-iterabletolist

module.exports = function IterableToList(items, method) {
	var iterator = GetIterator(items, method);
	var values = [];
	var next = true;
	while (next) {
		next = IteratorStep(iterator);
		if (next) {
			var nextValue = IteratorValue(next);
			$arrayPush(values, nextValue);
		}
	}
	return values;
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./GetIterator":1576493739144,"./IteratorStep":1576493739161,"./IteratorValue":1576493739164}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739161, function(require, module, exports) {


var IteratorComplete = require('./IteratorComplete');
var IteratorNext = require('./IteratorNext');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorstep

module.exports = function IteratorStep(iterator) {
	var result = IteratorNext(iterator);
	var done = IteratorComplete(result);
	return done === true ? false : result;
};


}, function(modId) { var map = {"./IteratorComplete":1576493739162,"./IteratorNext":1576493739163}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739162, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var ToBoolean = require('./ToBoolean');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorcomplete

module.exports = function IteratorComplete(iterResult) {
	if (Type(iterResult) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
	}
	return ToBoolean(Get(iterResult, 'done'));
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739119,"./ToBoolean":1576493739108,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739163, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Invoke = require('./Invoke');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratornext

module.exports = function IteratorNext(iterator, value) {
	var result = Invoke(iterator, 'next', arguments.length < 2 ? [] : [value]);
	if (Type(result) !== 'Object') {
		throw new $TypeError('iterator next must return an object');
	}
	return result;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Invoke":1576493739156,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739164, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorvalue

module.exports = function IteratorValue(iterResult) {
	if (Type(iterResult) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
	}
	return Get(iterResult, 'value');
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739119,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739165, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Call = require('./Call');
var GetMethod = require('./GetMethod');
var IsCallable = require('./IsCallable');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorclose

module.exports = function IteratorClose(iterator, completion) {
	if (Type(iterator) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(iterator) is not Object');
	}
	if (!IsCallable(completion)) {
		throw new $TypeError('Assertion failed: completion is not a thunk for a Completion Record');
	}
	var completionThunk = completion;

	var iteratorReturn = GetMethod(iterator, 'return');

	if (typeof iteratorReturn === 'undefined') {
		return completionThunk();
	}

	var completionRecord;
	try {
		var innerResult = Call(iteratorReturn, iterator, []);
	} catch (e) {
		// if we hit here, then "e" is the innerResult completion that needs re-throwing

		// if the completion is of type "throw", this will throw.
		completionRecord = completionThunk();
		completionThunk = null; // ensure it's not called twice.

		// if not, then return the innerResult completion
		throw e;
	}
	completionRecord = completionThunk(); // if innerResult worked, then throw if the completion does
	completionThunk = null; // ensure it's not called twice.

	if (Type(innerResult) !== 'Object') {
		throw new $TypeError('iterator .return must return an object');
	}

	return completionRecord;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Call":1576493739121,"./GetMethod":1576493739145,"./IsCallable":1576493739109,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739166, function(require, module, exports) {


var $isFinite = require('../helpers/isFinite');
var msPerDay = require('../helpers/timeConstants').msPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.13

module.exports = function MakeDate(day, time) {
	if (!$isFinite(day) || !$isFinite(time)) {
		return NaN;
	}
	return (day * msPerDay) + time;
};

}, function(modId) { var map = {"../helpers/isFinite":1576493738812,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739167, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');
var $DateUTC = GetIntrinsic('%Date.UTC%');

var mod = require('../helpers/mod');
var $isFinite = require('../helpers/isFinite');

var DateFromTime = require('./DateFromTime');
var Day = require('./Day');
var MonthFromTime = require('./MonthFromTime');
var ToInteger = require('./ToInteger');
var YearFromTime = require('./YearFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.12

module.exports = function MakeDay(year, month, date) {
	if (!$isFinite(year) || !$isFinite(month) || !$isFinite(date)) {
		return NaN;
	}
	var y = ToInteger(year);
	var m = ToInteger(month);
	var dt = ToInteger(date);
	var ym = y + $floor(m / 12);
	var mn = mod(m, 12);
	var t = $DateUTC(ym, mn, 1);
	if (YearFromTime(t) !== ym || MonthFromTime(t) !== mn || DateFromTime(t) !== 1) {
		return NaN;
	}
	return Day(t) + dt - 1;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/isFinite":1576493738812,"./DateFromTime":1576493739133,"./Day":1576493739135,"./MonthFromTime":1576493739140,"./ToInteger":1576493739131,"./YearFromTime":1576493739137}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739168, function(require, module, exports) {


var $isFinite = require('../helpers/isFinite');
var timeConstants = require('../helpers/timeConstants');
var msPerSecond = timeConstants.msPerSecond;
var msPerMinute = timeConstants.msPerMinute;
var msPerHour = timeConstants.msPerHour;

var ToInteger = require('./ToInteger');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.11

module.exports = function MakeTime(hour, min, sec, ms) {
	if (!$isFinite(hour) || !$isFinite(min) || !$isFinite(sec) || !$isFinite(ms)) {
		return NaN;
	}
	var h = ToInteger(hour);
	var m = ToInteger(min);
	var s = ToInteger(sec);
	var milli = ToInteger(ms);
	var t = (h * msPerHour) + (m * msPerMinute) + (s * msPerSecond) + milli;
	return t;
};

}, function(modId) { var map = {"../helpers/isFinite":1576493738812,"../helpers/timeConstants":1576493738821,"./ToInteger":1576493739131}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739169, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var mod = require('../helpers/mod');
var timeConstants = require('../helpers/timeConstants');
var msPerMinute = timeConstants.msPerMinute;
var MinutesPerHour = timeConstants.MinutesPerHour;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function MinFromTime(t) {
	return mod($floor(t / msPerMinute), MinutesPerHour);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739170, function(require, module, exports) {


var mod = require('../helpers/mod');

// https://ecma-international.org/ecma-262/5.1/#sec-5.2

module.exports = function modulo(x, y) {
	return mod(x, y);
};

}, function(modId) { var map = {"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739171, function(require, module, exports) {


var mod = require('../helpers/mod');
var msPerSecond = require('../helpers/timeConstants').msPerSecond;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function msFromTime(t) {
	return mod(t, msPerSecond);
};

}, function(modId) { var map = {"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739172, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $ObjectCreate = GetIntrinsic('%Object.create%');
var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-objectcreate

module.exports = function ObjectCreate(proto, internalSlotsList) {
	if (proto !== null && Type(proto) !== 'Object') {
		throw new $TypeError('Assertion failed: `proto` must be null or an object');
	}
	var slots = arguments.length < 2 ? [] : internalSlotsList;
	if (slots.length > 0) {
		throw new $SyntaxError('es-abstract does not yet support internal slots');
	}

	if (proto === null && !$ObjectCreate) {
		throw new $SyntaxError('native Object.create support is required to create null objects');
	}

	return $ObjectCreate(proto);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739173, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $setProto = require('../helpers/setProto');

var OrdinaryGetPrototypeOf = require('./OrdinaryGetPrototypeOf');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/7.0/#sec-ordinarysetprototypeof

module.exports = function OrdinarySetPrototypeOf(O, V) {
	if (Type(V) !== 'Object' && Type(V) !== 'Null') {
		throw new $TypeError('Assertion failed: V must be Object or Null');
	}
	/*
    var extensible = IsExtensible(O);
    var current = OrdinaryGetPrototypeOf(O);
    if (SameValue(V, current)) {
        return true;
    }
    if (!extensible) {
        return false;
    }
    */
	try {
		$setProto(O, V);
	} catch (e) {
		return false;
	}
	return OrdinaryGetPrototypeOf(O) === V;
	/*
    var p = V;
    var done = false;
    while (!done) {
        if (p === null) {
            done = true;
        } else if (SameValue(p, O)) {
            return false;
        } else {
            if (wat) {
                done = true;
            } else {
                p = p.[[Prototype]];
            }
        }
     }
     O.[[Prototype]] = V;
     return true;
     */
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/setProto":1576493739062,"./OrdinaryGetPrototypeOf":1576493739174,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739174, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $getProto = require('../helpers/getProto');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/7.0/#sec-ordinarygetprototypeof

module.exports = function OrdinaryGetPrototypeOf(O) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!$getProto) {
		throw new $TypeError('This environment does not support fetching prototypes.');
	}
	return $getProto(O);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/getProto":1576493739060,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739175, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinaryhasproperty

module.exports = function OrdinaryHasProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	return P in O;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739106,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739176, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var regexExec = require('../helpers/callBound')('RegExp.prototype.exec');

var Call = require('./Call');
var Get = require('./Get');
var IsCallable = require('./IsCallable');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-regexpexec

module.exports = function RegExpExec(R, S) {
	if (Type(R) !== 'Object') {
		throw new $TypeError('Assertion failed: `R` must be an Object');
	}
	if (Type(S) !== 'String') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	var exec = Get(R, 'exec');
	if (IsCallable(exec)) {
		var result = Call(exec, R, [S]);
		if (result === null || Type(result) === 'Object') {
			return result;
		}
		throw new $TypeError('"exec" method must return `null` or an Object');
	}
	return regexExec(R, S);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Call":1576493739121,"./Get":1576493739119,"./IsCallable":1576493739109,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739177, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var SameValue = require('./SameValue');

// https://www.ecma-international.org/ecma-262/7.0/#sec-samevaluenonnumber

module.exports = function SameValueNonNumber(x, y) {
	if (typeof x === 'number' || typeof x !== typeof y) {
		throw new $TypeError('SameValueNonNumber requires two non-number values of the same type.');
	}
	return SameValue(x, y);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./SameValue":1576493739113}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739178, function(require, module, exports) {


var $isNaN = require('../helpers/isNaN');

// https://www.ecma-international.org/ecma-262/6.0/#sec-samevaluezero

module.exports = function SameValueZero(x, y) {
	return (x === y) || ($isNaN(x) && $isNaN(y));
};

}, function(modId) { var map = {"../helpers/isNaN":1576493738811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739179, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var mod = require('../helpers/mod');
var timeConstants = require('../helpers/timeConstants');
var msPerSecond = timeConstants.msPerSecond;
var SecondsPerMinute = timeConstants.SecondsPerMinute;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function SecFromTime(t) {
	return mod($floor(t / msPerSecond), SecondsPerMinute);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739180, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-set-o-p-v-throw

module.exports = function Set(O, P, V, Throw) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	if (Type(Throw) !== 'Boolean') {
		throw new $TypeError('Assertion failed: `Throw` must be a Boolean');
	}
	if (Throw) {
		O[P] = V; // eslint-disable-line no-param-reassign
		return true;
	} else {
		try {
			O[P] = V; // eslint-disable-line no-param-reassign
		} catch (e) {
			return false;
		}
	}
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739106,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739181, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var has = require('has');

var $TypeError = GetIntrinsic('%TypeError%');

var getSymbolDescription = require('../helpers/getSymbolDescription');

var DefinePropertyOrThrow = require('./DefinePropertyOrThrow');
var IsExtensible = require('./IsExtensible');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-setfunctionname

module.exports = function SetFunctionName(F, name) {
	if (typeof F !== 'function') {
		throw new $TypeError('Assertion failed: `F` must be a function');
	}
	if (!IsExtensible(F) || has(F, 'name')) {
		throw new $TypeError('Assertion failed: `F` must be extensible, and must not have a `name` own property');
	}
	var nameType = Type(name);
	if (nameType !== 'Symbol' && nameType !== 'String') {
		throw new $TypeError('Assertion failed: `name` must be a Symbol or a String');
	}
	if (nameType === 'Symbol') {
		var description = getSymbolDescription(name);
		// eslint-disable-next-line no-param-reassign
		name = typeof description === 'undefined' ? '' : '[' + description + ']';
	}
	if (arguments.length > 2) {
		var prefix = arguments[2];
		// eslint-disable-next-line no-param-reassign
		name = prefix + ' ' + name;
	}
	return DefinePropertyOrThrow(F, 'name', {
		'[[Value]]': name,
		'[[Writable]]': false,
		'[[Enumerable]]': false,
		'[[Configurable]]': true
	});
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/getSymbolDescription":1576493738953,"./DefinePropertyOrThrow":1576493739141,"./IsExtensible":1576493739105,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739182, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $SyntaxError = GetIntrinsic('%SyntaxError%');
var $TypeError = GetIntrinsic('%TypeError%');
var $preventExtensions = GetIntrinsic('%Object.preventExtensions%');
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $gOPN = GetIntrinsic('%Object.getOwnPropertyNames%');

var forEach = require('../helpers/forEach');

var DefinePropertyOrThrow = require('./DefinePropertyOrThrow');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-setintegritylevel

module.exports = function SetIntegrityLevel(O, level) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (level !== 'sealed' && level !== 'frozen') {
		throw new $TypeError('Assertion failed: `level` must be `"sealed"` or `"frozen"`');
	}
	if (!$preventExtensions) {
		throw new $SyntaxError('SetIntegrityLevel requires native `Object.preventExtensions` support');
	}
	var status = $preventExtensions(O);
	if (!status) {
		return false;
	}
	if (!$gOPN) {
		throw new $SyntaxError('SetIntegrityLevel requires native `Object.getOwnPropertyNames` support');
	}
	var theKeys = $gOPN(O);
	if (level === 'sealed') {
		forEach(theKeys, function (k) {
			DefinePropertyOrThrow(O, k, { configurable: false });
		});
	} else if (level === 'frozen') {
		forEach(theKeys, function (k) {
			var currentDesc = $gOPD(O, k);
			if (typeof currentDesc !== 'undefined') {
				var desc;
				if (IsAccessorDescriptor(ToPropertyDescriptor(currentDesc))) {
					desc = { configurable: false };
				} else {
					desc = { configurable: false, writable: false };
				}
				DefinePropertyOrThrow(O, k, desc);
			}
		});
	}
	return true;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/forEach":1576493738956,"./DefinePropertyOrThrow":1576493739141,"./IsAccessorDescriptor":1576493739102,"./ToPropertyDescriptor":1576493739107,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739183, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var IsConstructor = require('./IsConstructor');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-speciesconstructor

module.exports = function SpeciesConstructor(O, defaultConstructor) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	var C = O.constructor;
	if (typeof C === 'undefined') {
		return defaultConstructor;
	}
	if (Type(C) !== 'Object') {
		throw new $TypeError('O.constructor is not an Object');
	}
	var S = $species ? C[$species] : void 0;
	if (S == null) {
		return defaultConstructor;
	}
	if (IsConstructor(S)) {
		return S;
	}
	throw new $TypeError('no constructor found');
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsConstructor":1576493739120,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739184, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var callBound = require('../helpers/callBound');

var $SymbolToString = callBound('Symbol.prototype.toString', true);

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-symboldescriptivestring

module.exports = function SymbolDescriptiveString(sym) {
	if (Type(sym) !== 'Symbol') {
		throw new $TypeError('Assertion failed: `sym` must be a Symbol');
	}
	return $SymbolToString(sym);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739185, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $gOPN = GetIntrinsic('%Object.getOwnPropertyNames%');
var $TypeError = GetIntrinsic('%TypeError%');

var every = require('../helpers/every');

var IsDataDescriptor = require('./IsDataDescriptor');
var IsExtensible = require('./IsExtensible');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-testintegritylevel

module.exports = function TestIntegrityLevel(O, level) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (level !== 'sealed' && level !== 'frozen') {
		throw new $TypeError('Assertion failed: `level` must be `"sealed"` or `"frozen"`');
	}
	var status = IsExtensible(O);
	if (status) {
		return false;
	}
	var theKeys = $gOPN(O);
	return theKeys.length === 0 || every(theKeys, function (k) {
		var currentDesc = $gOPD(O, k);
		if (typeof currentDesc !== 'undefined') {
			if (currentDesc.configurable) {
				return false;
			}
			if (level === 'frozen' && IsDataDescriptor(ToPropertyDescriptor(currentDesc)) && currentDesc.writable) {
				return false;
			}
		}
		return true;
	});
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/every":1576493738884,"./IsDataDescriptor":1576493739103,"./IsExtensible":1576493739105,"./ToPropertyDescriptor":1576493739107,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739186, function(require, module, exports) {


var $BooleanValueOf = require('../helpers/callBound')('Boolean.prototype.valueOf');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-boolean-prototype-object

module.exports = function thisBooleanValue(value) {
	if (Type(value) === 'Boolean') {
		return value;
	}

	return $BooleanValueOf(value);
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739187, function(require, module, exports) {


var callBound = require('../helpers/callBound');

var Type = require('./Type');

var $NumberValueOf = callBound('Number.prototype.valueOf');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-number-prototype-object

module.exports = function thisNumberValue(value) {
	if (Type(value) === 'Number') {
		return value;
	}

	return $NumberValueOf(value);
};


}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739188, function(require, module, exports) {


var $StringValueOf = require('../helpers/callBound')('String.prototype.valueOf');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-string-prototype-object

module.exports = function thisStringValue(value) {
	if (Type(value) === 'String') {
		return value;
	}

	return $StringValueOf(value);
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739189, function(require, module, exports) {


var $DateValueOf = require('../helpers/callBound')('Date.prototype.valueOf');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-date-prototype-object

module.exports = function thisTimeValue(value) {
	return $DateValueOf(value);
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739190, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Date = GetIntrinsic('%Date%');
var $Number = GetIntrinsic('%Number%');
var $abs = GetIntrinsic('%Math.abs%');

var $isFinite = require('../helpers/isFinite');

var ToNumber = require('./ToNumber');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.14

module.exports = function TimeClip(time) {
	if (!$isFinite(time) || $abs(time) > 8.64e15) {
		return NaN;
	}
	return $Number(new $Date(ToNumber(time)));
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isFinite":1576493738812,"./ToNumber":1576493739092}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739191, function(require, module, exports) {


var msPerDay = require('../helpers/timeConstants').msPerDay;

var DayFromYear = require('./DayFromYear');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function TimeFromYear(y) {
	return msPerDay * DayFromYear(y);
};

}, function(modId) { var map = {"../helpers/timeConstants":1576493738821,"./DayFromYear":1576493739136}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739192, function(require, module, exports) {


var mod = require('../helpers/mod');
var msPerDay = require('../helpers/timeConstants').msPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.2

module.exports = function TimeWithinDay(t) {
	return mod(t, msPerDay);
};


}, function(modId) { var map = {"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739193, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $Date = GetIntrinsic('%Date%');

var $isNaN = require('../helpers/isNaN');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-todatestring

module.exports = function ToDateString(tv) {
	if (Type(tv) !== 'Number') {
		throw new $TypeError('Assertion failed: `tv` must be a Number');
	}
	if ($isNaN(tv)) {
		return 'Invalid Date';
	}
	return $Date(tv);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"./Type":1576493739094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739194, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $RangeError = GetIntrinsic('%RangeError%');

var ToInteger = require('./ToInteger');
var ToLength = require('./ToLength');
var SameValueZero = require('./SameValueZero');

// https://www.ecma-international.org/ecma-262/8.0/#sec-toindex

module.exports = function ToIndex(value) {
	if (typeof value === 'undefined') {
		return 0;
	}
	var integerIndex = ToInteger(value);
	if (integerIndex < 0) {
		throw new $RangeError('index must be >= 0');
	}
	var index = ToLength(integerIndex);
	if (!SameValueZero(integerIndex, index)) {
		throw new $RangeError('index must be >= 0 and < 2 ** 53 - 1');
	}
	return index;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToInteger":1576493739131,"./ToLength":1576493739130,"./SameValueZero":1576493739178}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739195, function(require, module, exports) {


var ToUint16 = require('./ToUint16');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toint16

module.exports = function ToInt16(argument) {
	var int16bit = ToUint16(argument);
	return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
};

}, function(modId) { var map = {"./ToUint16":1576493739196}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739196, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var ToNumber = require('./ToNumber');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var $sign = require('../helpers/sign');
var $mod = require('../helpers/mod');

var $floor = $Math.floor;
var $abs = $Math.abs;

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.7

module.exports = function ToUint16(value) {
	var number = ToNumber(value);
	if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
	var posInt = $sign(number) * $floor($abs(number));
	return $mod(posInt, 0x10000);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToNumber":1576493739092,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812,"../helpers/sign":1576493738840,"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739197, function(require, module, exports) {


var ToNumber = require('./ToNumber');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.5

module.exports = function ToInt32(x) {
	return ToNumber(x) >> 0;
};

}, function(modId) { var map = {"./ToNumber":1576493739092}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739198, function(require, module, exports) {


var ToUint8 = require('./ToUint8');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toint8

module.exports = function ToInt8(argument) {
	var int8bit = ToUint8(argument);
	return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
};

}, function(modId) { var map = {"./ToUint8":1576493739199}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739199, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var ToNumber = require('./ToNumber');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var $sign = require('../helpers/sign');
var $mod = require('../helpers/mod');

var $floor = $Math.floor;
var $abs = $Math.abs;

module.exports = function ToUint8(argument) {
	var number = ToNumber(argument);
	if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
	var posInt = $sign(number) * $floor($abs(number));
	return $mod(posInt, 0x100);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToNumber":1576493739092,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812,"../helpers/sign":1576493738840,"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739200, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $String = GetIntrinsic('%String%');

var ToPrimitive = require('./ToPrimitive');
var ToString = require('./ToString');

// https://www.ecma-international.org/ecma-262/6.0/#sec-topropertykey

module.exports = function ToPropertyKey(argument) {
	var key = ToPrimitive(argument, $String);
	return typeof key === 'symbol' ? key : ToString(key);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToPrimitive":1576493739093,"./ToString":1576493739116}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739201, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var ToNumber = require('./ToNumber');

var $isNaN = require('../helpers/isNaN');

var $floor = $Math.floor;

// https://www.ecma-international.org/ecma-262/6.0/#sec-touint8clamp

module.exports = function ToUint8Clamp(argument) {
	var number = ToNumber(argument);
	if ($isNaN(number) || number <= 0) { return 0; }
	if (number >= 0xFF) { return 0xFF; }
	var f = $floor(argument);
	if (f + 0.5 < number) { return f + 1; }
	if (number < f + 0.5) { return f; }
	if (f % 2 !== 0) { return f + 1; }
	return f;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToNumber":1576493739092,"../helpers/isNaN":1576493738811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739202, function(require, module, exports) {


var mod = require('../helpers/mod');

var Day = require('./Day');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.6

module.exports = function WeekDay(t) {
	return mod(Day(t) + 4, 7);
};

}, function(modId) { var map = {"../helpers/mod":1576493738826,"./Day":1576493739135}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739203, function(require, module, exports) {


/* eslint global-require: 0 */
// https://www.ecma-international.org/ecma-262/9.0/#sec-abstract-operations
var ES2018 = {
	'Abstract Equality Comparison': require('./2018/AbstractEqualityComparison'),
	'Abstract Relational Comparison': require('./2018/AbstractRelationalComparison'),
	'Strict Equality Comparison': require('./2018/StrictEqualityComparison'),
	AdvanceStringIndex: require('./2018/AdvanceStringIndex'),
	ArrayCreate: require('./2018/ArrayCreate'),
	ArraySetLength: require('./2018/ArraySetLength'),
	ArraySpeciesCreate: require('./2018/ArraySpeciesCreate'),
	Call: require('./2018/Call'),
	CanonicalNumericIndexString: require('./2018/CanonicalNumericIndexString'),
	CompletePropertyDescriptor: require('./2018/CompletePropertyDescriptor'),
	CopyDataProperties: require('./2018/CopyDataProperties'),
	CreateDataProperty: require('./2018/CreateDataProperty'),
	CreateDataPropertyOrThrow: require('./2018/CreateDataPropertyOrThrow'),
	CreateHTML: require('./2018/CreateHTML'),
	CreateIterResultObject: require('./2018/CreateIterResultObject'),
	CreateListFromArrayLike: require('./2018/CreateListFromArrayLike'),
	CreateMethodProperty: require('./2018/CreateMethodProperty'),
	DateFromTime: require('./2018/DateFromTime'),
	DateString: require('./2018/DateString'),
	Day: require('./2018/Day'),
	DayFromYear: require('./2018/DayFromYear'),
	DaysInYear: require('./2018/DaysInYear'),
	DayWithinYear: require('./2018/DayWithinYear'),
	DefinePropertyOrThrow: require('./2018/DefinePropertyOrThrow'),
	DeletePropertyOrThrow: require('./2018/DeletePropertyOrThrow'),
	EnumerableOwnPropertyNames: require('./2018/EnumerableOwnPropertyNames'),
	FromPropertyDescriptor: require('./2018/FromPropertyDescriptor'),
	Get: require('./2018/Get'),
	GetIterator: require('./2018/GetIterator'),
	GetMethod: require('./2018/GetMethod'),
	GetOwnPropertyKeys: require('./2018/GetOwnPropertyKeys'),
	GetPrototypeFromConstructor: require('./2018/GetPrototypeFromConstructor'),
	GetSubstitution: require('./2018/GetSubstitution'),
	GetV: require('./2018/GetV'),
	HasOwnProperty: require('./2018/HasOwnProperty'),
	HasProperty: require('./2018/HasProperty'),
	HourFromTime: require('./2018/HourFromTime'),
	InLeapYear: require('./2018/InLeapYear'),
	InstanceofOperator: require('./2018/InstanceofOperator'),
	Invoke: require('./2018/Invoke'),
	IsAccessorDescriptor: require('./2018/IsAccessorDescriptor'),
	IsArray: require('./2018/IsArray'),
	IsCallable: require('./2018/IsCallable'),
	IsConcatSpreadable: require('./2018/IsConcatSpreadable'),
	IsConstructor: require('./2018/IsConstructor'),
	IsDataDescriptor: require('./2018/IsDataDescriptor'),
	IsExtensible: require('./2018/IsExtensible'),
	IsGenericDescriptor: require('./2018/IsGenericDescriptor'),
	IsInteger: require('./2018/IsInteger'),
	IsPromise: require('./2018/IsPromise'),
	IsPropertyKey: require('./2018/IsPropertyKey'),
	IsRegExp: require('./2018/IsRegExp'),
	IsStringPrefix: require('./2018/IsStringPrefix'),
	IterableToList: require('./2018/IterableToList'),
	IteratorClose: require('./2018/IteratorClose'),
	IteratorComplete: require('./2018/IteratorComplete'),
	IteratorNext: require('./2018/IteratorNext'),
	IteratorStep: require('./2018/IteratorStep'),
	IteratorValue: require('./2018/IteratorValue'),
	MakeDate: require('./2018/MakeDate'),
	MakeDay: require('./2018/MakeDay'),
	MakeTime: require('./2018/MakeTime'),
	MinFromTime: require('./2018/MinFromTime'),
	modulo: require('./2018/modulo'),
	MonthFromTime: require('./2018/MonthFromTime'),
	msFromTime: require('./2018/msFromTime'),
	NumberToString: require('./2018/NumberToString'),
	ObjectCreate: require('./2018/ObjectCreate'),
	OrdinaryDefineOwnProperty: require('./2018/OrdinaryDefineOwnProperty'),
	OrdinaryGetOwnProperty: require('./2018/OrdinaryGetOwnProperty'),
	OrdinaryGetPrototypeOf: require('./2018/OrdinaryGetPrototypeOf'),
	OrdinarySetPrototypeOf: require('./2018/OrdinarySetPrototypeOf'),
	OrdinaryHasInstance: require('./2018/OrdinaryHasInstance'),
	OrdinaryHasProperty: require('./2018/OrdinaryHasProperty'),
	PromiseResolve: require('./2018/PromiseResolve'),
	RegExpExec: require('./2018/RegExpExec'),
	RequireObjectCoercible: require('./2018/RequireObjectCoercible'),
	SameValue: require('./2018/SameValue'),
	SameValueNonNumber: require('./2018/SameValueNonNumber'),
	SameValueZero: require('./2018/SameValueZero'),
	SecFromTime: require('./2018/SecFromTime'),
	Set: require('./2018/Set'),
	SetFunctionName: require('./2018/SetFunctionName'),
	SetIntegrityLevel: require('./2018/SetIntegrityLevel'),
	SpeciesConstructor: require('./2018/SpeciesConstructor'),
	SymbolDescriptiveString: require('./2018/SymbolDescriptiveString'),
	TestIntegrityLevel: require('./2018/TestIntegrityLevel'),
	thisBooleanValue: require('./2018/thisBooleanValue'),
	thisNumberValue: require('./2018/thisNumberValue'),
	thisStringValue: require('./2018/thisStringValue'),
	thisSymbolValue: require('./2018/thisSymbolValue'),
	thisTimeValue: require('./2018/thisTimeValue'),
	TimeClip: require('./2018/TimeClip'),
	TimeFromYear: require('./2018/TimeFromYear'),
	TimeString: require('./2018/TimeString'),
	TimeWithinDay: require('./2018/TimeWithinDay'),
	ToBoolean: require('./2018/ToBoolean'),
	ToDateString: require('./2018/ToDateString'),
	ToIndex: require('./2018/ToIndex'),
	ToInt16: require('./2018/ToInt16'),
	ToInt32: require('./2018/ToInt32'),
	ToInt8: require('./2018/ToInt8'),
	ToInteger: require('./2018/ToInteger'),
	ToLength: require('./2018/ToLength'),
	ToNumber: require('./2018/ToNumber'),
	ToObject: require('./2018/ToObject'),
	ToPrimitive: require('./2018/ToPrimitive'),
	ToPropertyDescriptor: require('./2018/ToPropertyDescriptor'),
	ToPropertyKey: require('./2018/ToPropertyKey'),
	ToString: require('./2018/ToString'),
	ToUint16: require('./2018/ToUint16'),
	ToUint32: require('./2018/ToUint32'),
	ToUint8: require('./2018/ToUint8'),
	ToUint8Clamp: require('./2018/ToUint8Clamp'),
	Type: require('./2018/Type'),
	ValidateAndApplyPropertyDescriptor: require('./2018/ValidateAndApplyPropertyDescriptor'),
	WeekDay: require('./2018/WeekDay'),
	YearFromTime: require('./2018/YearFromTime')
};

module.exports = ES2018;

}, function(modId) { var map = {"./2018/AbstractEqualityComparison":1576493739204,"./2018/AbstractRelationalComparison":1576493739208,"./2018/StrictEqualityComparison":1576493739209,"./2018/AdvanceStringIndex":1576493739210,"./2018/ArrayCreate":1576493739212,"./2018/ArraySetLength":1576493739213,"./2018/ArraySpeciesCreate":1576493739231,"./2018/Call":1576493739234,"./2018/CanonicalNumericIndexString":1576493739235,"./2018/CompletePropertyDescriptor":1576493739236,"./2018/CopyDataProperties":1576493739237,"./2018/CreateDataProperty":1576493739238,"./2018/CreateDataPropertyOrThrow":1576493739239,"./2018/CreateHTML":1576493739240,"./2018/CreateIterResultObject":1576493739242,"./2018/CreateListFromArrayLike":1576493739243,"./2018/CreateMethodProperty":1576493739246,"./2018/DateFromTime":1576493739247,"./2018/DateString":1576493739255,"./2018/Day":1576493739249,"./2018/DayFromYear":1576493739250,"./2018/DaysInYear":1576493739253,"./2018/DayWithinYear":1576493739248,"./2018/DefinePropertyOrThrow":1576493739258,"./2018/DeletePropertyOrThrow":1576493739259,"./2018/EnumerableOwnPropertyNames":1576493739260,"./2018/FromPropertyDescriptor":1576493739224,"./2018/Get":1576493739232,"./2018/GetIterator":1576493739261,"./2018/GetMethod":1576493739262,"./2018/GetOwnPropertyKeys":1576493739265,"./2018/GetPrototypeFromConstructor":1576493739266,"./2018/GetSubstitution":1576493739267,"./2018/GetV":1576493739263,"./2018/HasOwnProperty":1576493739268,"./2018/HasProperty":1576493739269,"./2018/HourFromTime":1576493739270,"./2018/InLeapYear":1576493739252,"./2018/InstanceofOperator":1576493739271,"./2018/Invoke":1576493739273,"./2018/IsAccessorDescriptor":1576493739215,"./2018/IsArray":1576493739214,"./2018/IsCallable":1576493739222,"./2018/IsConcatSpreadable":1576493739274,"./2018/IsConstructor":1576493739233,"./2018/IsDataDescriptor":1576493739216,"./2018/IsExtensible":1576493739218,"./2018/IsGenericDescriptor":1576493739225,"./2018/IsInteger":1576493739211,"./2018/IsPromise":1576493739275,"./2018/IsPropertyKey":1576493739219,"./2018/IsRegExp":1576493739228,"./2018/IsStringPrefix":1576493739276,"./2018/IterableToList":1576493739277,"./2018/IteratorClose":1576493739282,"./2018/IteratorComplete":1576493739279,"./2018/IteratorNext":1576493739280,"./2018/IteratorStep":1576493739278,"./2018/IteratorValue":1576493739281,"./2018/MakeDate":1576493739283,"./2018/MakeDay":1576493739284,"./2018/MakeTime":1576493739285,"./2018/MinFromTime":1576493739286,"./2018/modulo":1576493739287,"./2018/MonthFromTime":1576493739254,"./2018/msFromTime":1576493739288,"./2018/NumberToString":1576493739289,"./2018/ObjectCreate":1576493739290,"./2018/OrdinaryDefineOwnProperty":1576493739217,"./2018/OrdinaryGetOwnProperty":1576493739227,"./2018/OrdinaryGetPrototypeOf":1576493739291,"./2018/OrdinarySetPrototypeOf":1576493739292,"./2018/OrdinaryHasInstance":1576493739272,"./2018/OrdinaryHasProperty":1576493739293,"./2018/PromiseResolve":1576493739294,"./2018/RegExpExec":1576493739295,"./2018/RequireObjectCoercible":1576493739241,"./2018/SameValue":1576493739226,"./2018/SameValueNonNumber":1576493739296,"./2018/SameValueZero":1576493739297,"./2018/SecFromTime":1576493739298,"./2018/Set":1576493739299,"./2018/SetFunctionName":1576493739300,"./2018/SetIntegrityLevel":1576493739301,"./2018/SpeciesConstructor":1576493739302,"./2018/SymbolDescriptiveString":1576493739303,"./2018/TestIntegrityLevel":1576493739304,"./2018/thisBooleanValue":1576493739305,"./2018/thisNumberValue":1576493739306,"./2018/thisStringValue":1576493739307,"./2018/thisSymbolValue":1576493739308,"./2018/thisTimeValue":1576493739309,"./2018/TimeClip":1576493739310,"./2018/TimeFromYear":1576493739311,"./2018/TimeString":1576493739312,"./2018/TimeWithinDay":1576493739313,"./2018/ToBoolean":1576493739221,"./2018/ToDateString":1576493739314,"./2018/ToIndex":1576493739315,"./2018/ToInt16":1576493739316,"./2018/ToInt32":1576493739318,"./2018/ToInt8":1576493739319,"./2018/ToInteger":1576493739245,"./2018/ToLength":1576493739244,"./2018/ToNumber":1576493739205,"./2018/ToObject":1576493739264,"./2018/ToPrimitive":1576493739206,"./2018/ToPropertyDescriptor":1576493739220,"./2018/ToPropertyKey":1576493739321,"./2018/ToString":1576493739229,"./2018/ToUint16":1576493739317,"./2018/ToUint32":1576493739230,"./2018/ToUint8":1576493739320,"./2018/ToUint8Clamp":1576493739322,"./2018/Type":1576493739207,"./2018/ValidateAndApplyPropertyDescriptor":1576493739223,"./2018/WeekDay":1576493739257,"./2018/YearFromTime":1576493739251}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739204, function(require, module, exports) {


var ToNumber = require('./ToNumber');
var ToPrimitive = require('./ToPrimitive');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-abstract-equality-comparison

module.exports = function AbstractEqualityComparison(x, y) {
	var xType = Type(x);
	var yType = Type(y);
	if (xType === yType) {
		return x === y; // ES6+ specified this shortcut anyways.
	}
	if (x == null && y == null) {
		return true;
	}
	if (xType === 'Number' && yType === 'String') {
		return AbstractEqualityComparison(x, ToNumber(y));
	}
	if (xType === 'String' && yType === 'Number') {
		return AbstractEqualityComparison(ToNumber(x), y);
	}
	if (xType === 'Boolean') {
		return AbstractEqualityComparison(ToNumber(x), y);
	}
	if (yType === 'Boolean') {
		return AbstractEqualityComparison(x, ToNumber(y));
	}
	if ((xType === 'String' || xType === 'Number' || xType === 'Symbol') && yType === 'Object') {
		return AbstractEqualityComparison(x, ToPrimitive(y));
	}
	if (xType === 'Object' && (yType === 'String' || yType === 'Number' || yType === 'Symbol')) {
		return AbstractEqualityComparison(ToPrimitive(x), y);
	}
	return false;
};

}, function(modId) { var map = {"./ToNumber":1576493739205,"./ToPrimitive":1576493739206,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739205, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $Number = GetIntrinsic('%Number%');
var $RegExp = GetIntrinsic('%RegExp%');
var $parseInteger = GetIntrinsic('%parseInt%');

var callBound = require('../helpers/callBound');
var regexTester = require('../helpers/regexTester');
var isPrimitive = require('../helpers/isPrimitive');

var $strSlice = callBound('String.prototype.slice');
var isBinary = regexTester(/^0b[01]+$/i);
var isOctal = regexTester(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = regexTester(nonWSregex);

// whitespace from: https://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var $replace = callBound('String.prototype.replace');
var $trim = function (value) {
	return $replace(value, trimRegex, '');
};

var ToPrimitive = require('./ToPrimitive');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tonumber

module.exports = function ToNumber(argument) {
	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
	if (typeof value === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a number');
	}
	if (typeof value === 'string') {
		if (isBinary(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 2));
		} else if (isOctal(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 8));
		} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
			return NaN;
		} else {
			var trimmed = $trim(value);
			if (trimmed !== value) {
				return ToNumber(trimmed);
			}
		}
	}
	return $Number(value);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"../helpers/regexTester":1576493738861,"../helpers/isPrimitive":1576493738862,"./ToPrimitive":1576493739206}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739206, function(require, module, exports) {


var toPrimitive = require('es-to-primitive/es2015');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive

module.exports = function ToPrimitive(input) {
	if (arguments.length > 1) {
		return toPrimitive(input, arguments[1]);
	}
	return toPrimitive(input);
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739207, function(require, module, exports) {


var ES5Type = require('../5/Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tostring

module.exports = function Type(x) {
	if (typeof x === 'symbol') {
		return 'Symbol';
	}
	return ES5Type(x);
};

}, function(modId) { var map = {"../5/Type":1576493738809}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739208, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Number = GetIntrinsic('%Number%');
var $TypeError = GetIntrinsic('%TypeError%');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var isPrefixOf = require('../helpers/isPrefixOf');

var ToNumber = require('./ToNumber');
var ToPrimitive = require('./ToPrimitive');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/5.1/#sec-11.8.5

// eslint-disable-next-line max-statements
module.exports = function AbstractRelationalComparison(x, y, LeftFirst) {
	if (Type(LeftFirst) !== 'Boolean') {
		throw new $TypeError('Assertion failed: LeftFirst argument must be a Boolean');
	}
	var px;
	var py;
	if (LeftFirst) {
		px = ToPrimitive(x, $Number);
		py = ToPrimitive(y, $Number);
	} else {
		py = ToPrimitive(y, $Number);
		px = ToPrimitive(x, $Number);
	}
	var bothStrings = Type(px) === 'String' && Type(py) === 'String';
	if (!bothStrings) {
		var nx = ToNumber(px);
		var ny = ToNumber(py);
		if ($isNaN(nx) || $isNaN(ny)) {
			return undefined;
		}
		if ($isFinite(nx) && $isFinite(ny) && nx === ny) {
			return false;
		}
		if (nx === 0 && ny === 0) {
			return false;
		}
		if (nx === Infinity) {
			return false;
		}
		if (ny === Infinity) {
			return true;
		}
		if (ny === -Infinity) {
			return false;
		}
		if (nx === -Infinity) {
			return true;
		}
		return nx < ny; // by now, these are both nonzero, finite, and not equal
	}
	if (isPrefixOf(py, px)) {
		return false;
	}
	if (isPrefixOf(px, py)) {
		return true;
	}
	return px < py; // both strings, neither a prefix of the other. shortcut for steps c-f
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812,"../helpers/isPrefixOf":1576493738813,"./ToNumber":1576493739205,"./ToPrimitive":1576493739206,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739209, function(require, module, exports) {


var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6

module.exports = function StrictEqualityComparison(x, y) {
	var xType = Type(x);
	var yType = Type(y);
	if (xType !== yType) {
		return false;
	}
	if (xType === 'Undefined' || xType === 'Null') {
		return true;
	}
	return x === y; // shortcut for steps 4-7
};

}, function(modId) { var map = {"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739210, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var IsInteger = require('./IsInteger');
var Type = require('./Type');

var MAX_SAFE_INTEGER = require('../helpers/maxSafeInteger');

var $TypeError = GetIntrinsic('%TypeError%');

var $charCodeAt = require('../helpers/callBound')('String.prototype.charCodeAt');

// https://ecma-international.org/ecma-262/6.0/#sec-advancestringindex

module.exports = function AdvanceStringIndex(S, index, unicode) {
	if (Type(S) !== 'String') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	if (!IsInteger(index) || index < 0 || index > MAX_SAFE_INTEGER) {
		throw new $TypeError('Assertion failed: `length` must be an integer >= 0 and <= 2**53');
	}
	if (Type(unicode) !== 'Boolean') {
		throw new $TypeError('Assertion failed: `unicode` must be a Boolean');
	}
	if (!unicode) {
		return index + 1;
	}
	var length = S.length;
	if ((index + 1) >= length) {
		return index + 1;
	}

	var first = $charCodeAt(S, index);
	if (first < 0xD800 || first > 0xDBFF) {
		return index + 1;
	}

	var second = $charCodeAt(S, index + 1);
	if (second < 0xDC00 || second > 0xDFFF) {
		return index + 1;
	}

	return index + 2;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsInteger":1576493739211,"./Type":1576493739207,"../helpers/maxSafeInteger":1576493738869,"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739211, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var $floor = $Math.floor;
var $abs = $Math.abs;

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isinteger

module.exports = function IsInteger(argument) {
	if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
		return false;
	}
	var abs = $abs(argument);
	return $floor(abs) === abs;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739212, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $ArrayPrototype = GetIntrinsic('%Array.prototype%');
var $RangeError = GetIntrinsic('%RangeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');
var $TypeError = GetIntrinsic('%TypeError%');

var IsInteger = require('./IsInteger');

var MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1;

var $setProto = GetIntrinsic('%Object.setPrototypeOf%') || (
	// eslint-disable-next-line no-proto, no-negated-condition
	[].__proto__ !== $ArrayPrototype
		? null
		: function (O, proto) {
			O.__proto__ = proto; // eslint-disable-line no-proto, no-param-reassign
			return O;
		}
);

// https://www.ecma-international.org/ecma-262/6.0/#sec-arraycreate

module.exports = function ArrayCreate(length) {
	if (!IsInteger(length) || length < 0) {
		throw new $TypeError('Assertion failed: `length` must be an integer Number >= 0');
	}
	if (length > MAX_ARRAY_LENGTH) {
		throw new $RangeError('length is greater than (2**32 - 1)');
	}
	var proto = arguments.length > 1 ? arguments[1] : $ArrayPrototype;
	var A = []; // steps 5 - 7, and 9
	if (proto !== $ArrayPrototype) { // step 8
		if (!$setProto) {
			throw new $SyntaxError('ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]');
		}
		$setProto(A, proto);
	}
	if (length !== 0) { // bypasses the need for step 2
		A.length = length;
	}
	/* step 10, the above as a shortcut for the below
    OrdinaryDefineOwnProperty(A, 'length', {
        '[[Configurable]]': false,
        '[[Enumerable]]': false,
        '[[Value]]': length,
        '[[Writable]]': true
    });
    */
	return A;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsInteger":1576493739211}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739213, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $RangeError = GetIntrinsic('%RangeError%');
var $TypeError = GetIntrinsic('%TypeError%');

var assign = require('object.assign');

var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');

var IsArray = require('./IsArray');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var OrdinaryDefineOwnProperty = require('./OrdinaryDefineOwnProperty');
var OrdinaryGetOwnProperty = require('./OrdinaryGetOwnProperty');
var ToNumber = require('./ToNumber');
var ToString = require('./ToString');
var ToUint32 = require('./ToUint32');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-arraysetlength

// eslint-disable-next-line max-statements, max-lines-per-function
module.exports = function ArraySetLength(A, Desc) {
	if (!IsArray(A)) {
		throw new $TypeError('Assertion failed: A must be an Array');
	}
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	if (!('[[Value]]' in Desc)) {
		return OrdinaryDefineOwnProperty(A, 'length', Desc);
	}
	var newLenDesc = assign({}, Desc);
	var newLen = ToUint32(Desc['[[Value]]']);
	var numberLen = ToNumber(Desc['[[Value]]']);
	if (newLen !== numberLen) {
		throw new $RangeError('Invalid array length');
	}
	newLenDesc['[[Value]]'] = newLen;
	var oldLenDesc = OrdinaryGetOwnProperty(A, 'length');
	if (!IsDataDescriptor(oldLenDesc)) {
		throw new $TypeError('Assertion failed: an array had a non-data descriptor on `length`');
	}
	var oldLen = oldLenDesc['[[Value]]'];
	if (newLen >= oldLen) {
		return OrdinaryDefineOwnProperty(A, 'length', newLenDesc);
	}
	if (!oldLenDesc['[[Writable]]']) {
		return false;
	}
	var newWritable;
	if (!('[[Writable]]' in newLenDesc) || newLenDesc['[[Writable]]']) {
		newWritable = true;
	} else {
		newWritable = false;
		newLenDesc['[[Writable]]'] = true;
	}
	var succeeded = OrdinaryDefineOwnProperty(A, 'length', newLenDesc);
	if (!succeeded) {
		return false;
	}
	while (newLen < oldLen) {
		oldLen -= 1;
		// eslint-disable-next-line no-param-reassign
		var deleteSucceeded = delete A[ToString(oldLen)];
		if (!deleteSucceeded) {
			newLenDesc['[[Value]]'] = oldLen + 1;
			if (!newWritable) {
				newLenDesc['[[Writable]]'] = false;
				OrdinaryDefineOwnProperty(A, 'length', newLenDesc);
				return false;
			}
		}
	}
	if (!newWritable) {
		return OrdinaryDefineOwnProperty(A, 'length', { '[[Writable]]': false });
	}
	return true;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPropertyDescriptor":1576493738836,"./IsArray":1576493739214,"./IsAccessorDescriptor":1576493739215,"./IsDataDescriptor":1576493739216,"./OrdinaryDefineOwnProperty":1576493739217,"./OrdinaryGetOwnProperty":1576493739227,"./ToNumber":1576493739205,"./ToString":1576493739229,"./ToUint32":1576493739230,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739214, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Array = GetIntrinsic('%Array%');

// eslint-disable-next-line global-require
var toStr = !$Array.isArray && require('../helpers/callBound')('Object.prototype.toString');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isarray

module.exports = $Array.isArray || function IsArray(argument) {
	return toStr(argument) === '[object Array]';
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739215, function(require, module, exports) {


var has = require('has');

var assertRecord = require('../helpers/assertRecord');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isaccessordescriptor

module.exports = function IsAccessorDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
		return false;
	}

	return true;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739216, function(require, module, exports) {


var has = require('has');

var assertRecord = require('../helpers/assertRecord');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isdatadescriptor

module.exports = function IsDataDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
		return false;
	}

	return true;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739217, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $TypeError = GetIntrinsic('%TypeError%');

var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');

var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsExtensible = require('./IsExtensible');
var IsPropertyKey = require('./IsPropertyKey');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');
var ValidateAndApplyPropertyDescriptor = require('./ValidateAndApplyPropertyDescriptor');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinarydefineownproperty

module.exports = function OrdinaryDefineOwnProperty(O, P, Desc) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	var desc = $gOPD(O, P);
	var current = desc && ToPropertyDescriptor(desc);
	var extensible = IsExtensible(O);
	return ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPropertyDescriptor":1576493738836,"./IsAccessorDescriptor":1576493739215,"./IsDataDescriptor":1576493739216,"./IsExtensible":1576493739218,"./IsPropertyKey":1576493739219,"./ToPropertyDescriptor":1576493739220,"./Type":1576493739207,"./ValidateAndApplyPropertyDescriptor":1576493739223}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739218, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Object = GetIntrinsic('%Object%');

var isPrimitive = require('../helpers/isPrimitive');

var $preventExtensions = $Object.preventExtensions;
var $isExtensible = $Object.isExtensible;

// https://www.ecma-international.org/ecma-262/6.0/#sec-isextensible-o

module.exports = $preventExtensions
	? function IsExtensible(obj) {
		return !isPrimitive(obj) && $isExtensible(obj);
	}
	: function IsExtensible(obj) { // eslint-disable-line no-unused-vars
		return true;
	};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPrimitive":1576493738862}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739219, function(require, module, exports) {


// https://www.ecma-international.org/ecma-262/6.0/#sec-ispropertykey

module.exports = function IsPropertyKey(argument) {
	return typeof argument === 'string' || typeof argument === 'symbol';
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739220, function(require, module, exports) {


var has = require('has');

var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Type = require('./Type');
var ToBoolean = require('./ToBoolean');
var IsCallable = require('./IsCallable');

// https://ecma-international.org/ecma-262/5.1/#sec-8.10.5

module.exports = function ToPropertyDescriptor(Obj) {
	if (Type(Obj) !== 'Object') {
		throw new $TypeError('ToPropertyDescriptor requires an object');
	}

	var desc = {};
	if (has(Obj, 'enumerable')) {
		desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
	}
	if (has(Obj, 'configurable')) {
		desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
	}
	if (has(Obj, 'value')) {
		desc['[[Value]]'] = Obj.value;
	}
	if (has(Obj, 'writable')) {
		desc['[[Writable]]'] = ToBoolean(Obj.writable);
	}
	if (has(Obj, 'get')) {
		var getter = Obj.get;
		if (typeof getter !== 'undefined' && !IsCallable(getter)) {
			throw new TypeError('getter must be a function');
		}
		desc['[[Get]]'] = getter;
	}
	if (has(Obj, 'set')) {
		var setter = Obj.set;
		if (typeof setter !== 'undefined' && !IsCallable(setter)) {
			throw new $TypeError('setter must be a function');
		}
		desc['[[Set]]'] = setter;
	}

	if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
		throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
	}
	return desc;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493739207,"./ToBoolean":1576493739221,"./IsCallable":1576493739222}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739221, function(require, module, exports) {


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.2

module.exports = function ToBoolean(value) { return !!value; };

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739222, function(require, module, exports) {


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.11

module.exports = require('is-callable');

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739223, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');
var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');
var isSamePropertyDescriptor = require('../helpers/isSamePropertyDescriptor');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsGenericDescriptor = require('./IsGenericDescriptor');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-validateandapplypropertydescriptor
// https://www.ecma-international.org/ecma-262/8.0/#sec-validateandapplypropertydescriptor

// eslint-disable-next-line max-lines-per-function, max-statements, max-params
module.exports = function ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current) {
	// this uses the ES2017+ logic, since it fixes a number of bugs in the ES2015 logic.
	var oType = Type(O);
	if (oType !== 'Undefined' && oType !== 'Object') {
		throw new $TypeError('Assertion failed: O must be undefined or an Object');
	}
	if (Type(extensible) !== 'Boolean') {
		throw new $TypeError('Assertion failed: extensible must be a Boolean');
	}
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	if (Type(current) !== 'Undefined' && !isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, current)) {
		throw new $TypeError('Assertion failed: current must be a Property Descriptor, or undefined');
	}
	if (oType !== 'Undefined' && !IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: if O is not undefined, P must be a Property Key');
	}
	if (Type(current) === 'Undefined') {
		if (!extensible) {
			return false;
		}
		if (IsGenericDescriptor(Desc) || IsDataDescriptor(Desc)) {
			if (oType !== 'Undefined') {
				DefineOwnProperty(
					IsDataDescriptor,
					SameValue,
					FromPropertyDescriptor,
					O,
					P,
					{
						'[[Configurable]]': Desc['[[Configurable]]'],
						'[[Enumerable]]': Desc['[[Enumerable]]'],
						'[[Value]]': Desc['[[Value]]'],
						'[[Writable]]': Desc['[[Writable]]']
					}
				);
			}
		} else {
			if (!IsAccessorDescriptor(Desc)) {
				throw new $TypeError('Assertion failed: Desc is not an accessor descriptor');
			}
			if (oType !== 'Undefined') {
				return DefineOwnProperty(
					IsDataDescriptor,
					SameValue,
					FromPropertyDescriptor,
					O,
					P,
					Desc
				);
			}
		}
		return true;
	}
	if (IsGenericDescriptor(Desc) && !('[[Configurable]]' in Desc) && !('[[Enumerable]]' in Desc)) {
		return true;
	}
	if (isSamePropertyDescriptor({ SameValue: SameValue }, Desc, current)) {
		return true; // removed by ES2017, but should still be correct
	}
	// "if every field in Desc is absent, return true" can't really match the assertion that it's a Property Descriptor
	if (!current['[[Configurable]]']) {
		if (Desc['[[Configurable]]']) {
			return false;
		}
		if ('[[Enumerable]]' in Desc && !Desc['[[Enumerable]]'] === !!current['[[Enumerable]]']) {
			return false;
		}
	}
	if (IsGenericDescriptor(Desc)) {
		// no further validation is required.
	} else if (IsDataDescriptor(current) !== IsDataDescriptor(Desc)) {
		if (!current['[[Configurable]]']) {
			return false;
		}
		if (IsDataDescriptor(current)) {
			if (oType !== 'Undefined') {
				DefineOwnProperty(
					IsDataDescriptor,
					SameValue,
					FromPropertyDescriptor,
					O,
					P,
					{
						'[[Configurable]]': current['[[Configurable]]'],
						'[[Enumerable]]': current['[[Enumerable]]'],
						'[[Get]]': undefined
					}
				);
			}
		} else if (oType !== 'Undefined') {
			DefineOwnProperty(
				IsDataDescriptor,
				SameValue,
				FromPropertyDescriptor,
				O,
				P,
				{
					'[[Configurable]]': current['[[Configurable]]'],
					'[[Enumerable]]': current['[[Enumerable]]'],
					'[[Value]]': undefined
				}
			);
		}
	} else if (IsDataDescriptor(current) && IsDataDescriptor(Desc)) {
		if (!current['[[Configurable]]'] && !current['[[Writable]]']) {
			if ('[[Writable]]' in Desc && Desc['[[Writable]]']) {
				return false;
			}
			if ('[[Value]]' in Desc && !SameValue(Desc['[[Value]]'], current['[[Value]]'])) {
				return false;
			}
			return true;
		}
	} else if (IsAccessorDescriptor(current) && IsAccessorDescriptor(Desc)) {
		if (!current['[[Configurable]]']) {
			if ('[[Set]]' in Desc && !SameValue(Desc['[[Set]]'], current['[[Set]]'])) {
				return false;
			}
			if ('[[Get]]' in Desc && !SameValue(Desc['[[Get]]'], current['[[Get]]'])) {
				return false;
			}
			return true;
		}
	} else {
		throw new $TypeError('Assertion failed: current and Desc are not both data, both accessors, or one accessor and one data.');
	}
	if (oType !== 'Undefined') {
		return DefineOwnProperty(
			IsDataDescriptor,
			SameValue,
			FromPropertyDescriptor,
			O,
			P,
			Desc
		);
	}
	return true;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/DefineOwnProperty":1576493738882,"../helpers/isPropertyDescriptor":1576493738836,"../helpers/isSamePropertyDescriptor":1576493738883,"./FromPropertyDescriptor":1576493739224,"./IsAccessorDescriptor":1576493739215,"./IsDataDescriptor":1576493739216,"./IsGenericDescriptor":1576493739225,"./IsPropertyKey":1576493739219,"./SameValue":1576493739226,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739224, function(require, module, exports) {


var assertRecord = require('../helpers/assertRecord');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-frompropertydescriptor

module.exports = function FromPropertyDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return Desc;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	var obj = {};
	if ('[[Value]]' in Desc) {
		obj.value = Desc['[[Value]]'];
	}
	if ('[[Writable]]' in Desc) {
		obj.writable = Desc['[[Writable]]'];
	}
	if ('[[Get]]' in Desc) {
		obj.get = Desc['[[Get]]'];
	}
	if ('[[Set]]' in Desc) {
		obj.set = Desc['[[Set]]'];
	}
	if ('[[Enumerable]]' in Desc) {
		obj.enumerable = Desc['[[Enumerable]]'];
	}
	if ('[[Configurable]]' in Desc) {
		obj.configurable = Desc['[[Configurable]]'];
	}
	return obj;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739225, function(require, module, exports) {


var assertRecord = require('../helpers/assertRecord');

var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isgenericdescriptor

module.exports = function IsGenericDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!IsAccessorDescriptor(Desc) && !IsDataDescriptor(Desc)) {
		return true;
	}

	return false;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./IsAccessorDescriptor":1576493739215,"./IsDataDescriptor":1576493739216,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739226, function(require, module, exports) {


var $isNaN = require('../helpers/isNaN');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.12

module.exports = function SameValue(x, y) {
	if (x === y) { // 0 === -0, but they are not identical.
		if (x === 0) { return 1 / x === 1 / y; }
		return true;
	}
	return $isNaN(x) && $isNaN(y);
};

}, function(modId) { var map = {"../helpers/isNaN":1576493738811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739227, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $TypeError = GetIntrinsic('%TypeError%');

var callBound = require('../helpers/callBound');

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

var has = require('has');

var IsArray = require('./IsArray');
var IsPropertyKey = require('./IsPropertyKey');
var IsRegExp = require('./IsRegExp');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinarygetownproperty

module.exports = function OrdinaryGetOwnProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!has(O, P)) {
		return void 0;
	}
	if (!$gOPD) {
		// ES3 fallback
		var arrayLength = IsArray(O) && P === 'length';
		var regexLastIndex = IsRegExp(O) && P === 'lastIndex';
		return {
			'[[Configurable]]': !(arrayLength || regexLastIndex),
			'[[Enumerable]]': $isEnumerable(O, P),
			'[[Value]]': O[P],
			'[[Writable]]': true
		};
	}
	return ToPropertyDescriptor($gOPD(O, P));
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./IsArray":1576493739214,"./IsPropertyKey":1576493739219,"./IsRegExp":1576493739228,"./ToPropertyDescriptor":1576493739220,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739228, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $match = GetIntrinsic('%Symbol.match%', true);

var hasRegExpMatcher = require('is-regex');

var ToBoolean = require('./ToBoolean');

// https://ecma-international.org/ecma-262/6.0/#sec-isregexp

module.exports = function IsRegExp(argument) {
	if (!argument || typeof argument !== 'object') {
		return false;
	}
	if ($match) {
		var isRegExp = argument[$match];
		if (typeof isRegExp !== 'undefined') {
			return ToBoolean(isRegExp);
		}
	}
	return hasRegExpMatcher(argument);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToBoolean":1576493739221}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739229, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $String = GetIntrinsic('%String%');
var $TypeError = GetIntrinsic('%TypeError%');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tostring

module.exports = function ToString(argument) {
	if (typeof argument === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a string');
	}
	return $String(argument);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739230, function(require, module, exports) {


var ToNumber = require('./ToNumber');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.6

module.exports = function ToUint32(x) {
	return ToNumber(x) >>> 0;
};

}, function(modId) { var map = {"./ToNumber":1576493739205}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739231, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Array = GetIntrinsic('%Array%');
var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var IsArray = require('./IsArray');
var IsConstructor = require('./IsConstructor');
var IsInteger = require('./IsInteger');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-arrayspeciescreate

module.exports = function ArraySpeciesCreate(originalArray, length) {
	if (!IsInteger(length) || length < 0) {
		throw new $TypeError('Assertion failed: length must be an integer >= 0');
	}
	var len = length === 0 ? 0 : length;
	var C;
	var isArray = IsArray(originalArray);
	if (isArray) {
		C = Get(originalArray, 'constructor');
		// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
		// if (IsConstructor(C)) {
		// 	if C is another realm's Array, C = undefined
		// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
		// }
		if ($species && Type(C) === 'Object') {
			C = Get(C, $species);
			if (C === null) {
				C = void 0;
			}
		}
	}
	if (typeof C === 'undefined') {
		return $Array(len);
	}
	if (!IsConstructor(C)) {
		throw new $TypeError('C must be a constructor');
	}
	return new C(len); // Construct(C, len);
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739232,"./IsArray":1576493739214,"./IsConstructor":1576493739233,"./IsInteger":1576493739211,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739232, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = require('object-inspect');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

/**
 * 7.3.1 Get (O, P) - https://ecma-international.org/ecma-262/6.0/#sec-get-o-p
 * 1. Assert: Type(O) is Object.
 * 2. Assert: IsPropertyKey(P) is true.
 * 3. Return O.[[Get]](P, O).
 */

module.exports = function Get(O, P) {
	// 7.3.1.1
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	// 7.3.1.2
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true, got ' + inspect(P));
	}
	// 7.3.1.3
	return O[P];
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739219,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739233, function(require, module, exports) {


// https://www.ecma-international.org/ecma-262/6.0/#sec-isconstructor

module.exports = function IsConstructor(argument) {
	return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739234, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = require('object-inspect');

var IsCallable = require('./IsCallable');

// https://www.ecma-international.org/ecma-262/6.0/#sec-call

module.exports = function Call(F, V) {
	var args = arguments.length > 2 ? arguments[2] : [];
	if (!IsCallable(F)) {
		throw new $TypeError(inspect(F) + ' is not a function');
	}
	return F.apply(V, args);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsCallable":1576493739222}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739235, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var SameValue = require('./SameValue');
var ToNumber = require('./ToNumber');
var ToString = require('./ToString');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring

module.exports = function CanonicalNumericIndexString(argument) {
	if (Type(argument) !== 'String') {
		throw new $TypeError('Assertion failed: `argument` must be a String');
	}
	if (argument === '-0') { return -0; }
	var n = ToNumber(argument);
	if (SameValue(ToString(n), argument)) { return n; }
	return void 0;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./SameValue":1576493739226,"./ToNumber":1576493739205,"./ToString":1576493739229,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739236, function(require, module, exports) {


var has = require('has');

var assertRecord = require('../helpers/assertRecord');

var IsDataDescriptor = require('./IsDataDescriptor');
var IsGenericDescriptor = require('./IsGenericDescriptor');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-completepropertydescriptor

module.exports = function CompletePropertyDescriptor(Desc) {
	/* eslint no-param-reassign: 0 */
	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (IsGenericDescriptor(Desc) || IsDataDescriptor(Desc)) {
		if (!has(Desc, '[[Value]]')) {
			Desc['[[Value]]'] = void 0;
		}
		if (!has(Desc, '[[Writable]]')) {
			Desc['[[Writable]]'] = false;
		}
	} else {
		if (!has(Desc, '[[Get]]')) {
			Desc['[[Get]]'] = void 0;
		}
		if (!has(Desc, '[[Set]]')) {
			Desc['[[Set]]'] = void 0;
		}
	}
	if (!has(Desc, '[[Enumerable]]')) {
		Desc['[[Enumerable]]'] = false;
	}
	if (!has(Desc, '[[Configurable]]')) {
		Desc['[[Configurable]]'] = false;
	}
	return Desc;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./IsDataDescriptor":1576493739216,"./IsGenericDescriptor":1576493739225,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739237, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var callBind = require('../helpers/callBind');
var callBound = require('../helpers/callBound');
var forEach = require('../helpers/forEach');

var $pushApply = callBind.apply(GetIntrinsic('%Array.prototype.push%'));
var $SymbolValueOf = callBound('Symbol.prototype.valueOf', true);
var $gOPS = $SymbolValueOf ? GetIntrinsic('%Object.getOwnPropertySymbols%') : null;

var keys = require('object-keys');

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

var IsArray = require('./IsArray');
var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

var OwnPropertyKeys = function OwnPropertyKeys(ES, source) {
	var ownKeys = keys(source);
	if ($gOPS) {
		$pushApply(ownKeys, $gOPS(source));
	}
	return ownKeys;
};

// https://www.ecma-international.org/ecma-262/9.0/#sec-copydataproperties

module.exports = function CopyDataProperties(target, source, excludedItems) {
	if (Type(target) !== 'Object') {
		throw new TypeError('Assertion failed: "target" must be an Object');
	}

	if (!IsArray(excludedItems)) {
		throw new TypeError('Assertion failed: "excludedItems" must be a List of Property Keys');
	}
	for (var i = 0; i < excludedItems.length; i += 1) {
		if (!IsPropertyKey(excludedItems[i])) {
			throw new TypeError('Assertion failed: "excludedItems" must be a List of Property Keys');
		}
	}

	if (typeof source === 'undefined' || source === null) {
		return target;
	}

	var ES = this;

	var fromObj = ES.ToObject(source);

	var sourceKeys = OwnPropertyKeys(ES, fromObj);
	forEach(sourceKeys, function (nextKey) {
		var excluded = false;

		forEach(excludedItems, function (e) {
			if (ES.SameValue(e, nextKey) === true) {
				excluded = true;
			}
		});

		var enumerable = $isEnumerable(fromObj, nextKey) || (
		// this is to handle string keys being non-enumerable in older engines
			typeof source === 'string'
            && nextKey >= 0
            && ES.IsInteger(ES.ToNumber(nextKey))
		);
		if (excluded === false && enumerable) {
			var propValue = ES.Get(fromObj, nextKey);
			ES.CreateDataProperty(target, nextKey, propValue);
		}
	});

	return target;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBind":1576493738815,"../helpers/callBound":1576493738814,"../helpers/forEach":1576493738956,"./IsArray":1576493739214,"./IsPropertyKey":1576493739219,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739238, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsExtensible = require('./IsExtensible');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-createdataproperty

module.exports = function CreateDataProperty(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var oldDesc = $gOPD(O, P);
	var extensible = oldDesc || IsExtensible(O);
	var immutable = oldDesc && (!oldDesc.writable || !oldDesc.configurable);
	if (immutable || !extensible) {
		return false;
	}
	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		{
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Value]]': V,
			'[[Writable]]': true
		}
	);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/DefineOwnProperty":1576493738882,"./FromPropertyDescriptor":1576493739224,"./IsDataDescriptor":1576493739216,"./IsExtensible":1576493739218,"./IsPropertyKey":1576493739219,"./SameValue":1576493739226,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739239, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var CreateDataProperty = require('./CreateDataProperty');
var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// // https://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow

module.exports = function CreateDataPropertyOrThrow(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var success = CreateDataProperty(O, P, V);
	if (!success) {
		throw new $TypeError('unable to create data property');
	}
	return success;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./CreateDataProperty":1576493739238,"./IsPropertyKey":1576493739219,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739240, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var callBound = require('../helpers/callBound');

var $replace = callBound('String.prototype.replace');

var RequireObjectCoercible = require('./RequireObjectCoercible');
var ToString = require('./ToString');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-createhtml

module.exports = function CreateHTML(string, tag, attribute, value) {
	if (Type(tag) !== 'String' || Type(attribute) !== 'String') {
		throw new $TypeError('Assertion failed: `tag` and `attribute` must be strings');
	}
	var str = RequireObjectCoercible(string);
	var S = ToString(str);
	var p1 = '<' + tag;
	if (attribute !== '') {
		var V = ToString(value);
		var escapedV = $replace(V, /\x22/g, '&quot;');
		p1 += '\x20' + attribute + '\x3D\x22' + escapedV + '\x22';
	}
	return p1 + '>' + S + '</' + tag + '>';
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./RequireObjectCoercible":1576493739241,"./ToString":1576493739229,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739241, function(require, module, exports) {


module.exports = require('../5/CheckObjectCoercible');

}, function(modId) { var map = {"../5/CheckObjectCoercible":1576493738817}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739242, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-createiterresultobject

module.exports = function CreateIterResultObject(value, done) {
	if (Type(done) !== 'Boolean') {
		throw new $TypeError('Assertion failed: Type(done) is not Boolean');
	}
	return {
		value: value,
		done: done
	};
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739243, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var callBound = require('../helpers/callBound');

var $TypeError = GetIntrinsic('%TypeError%');
var $indexOf = callBound('Array.prototype.indexOf');
var $push = callBound('Array.prototype.push');

var Get = require('./Get');
var IsArray = require('./IsArray');
var ToLength = require('./ToLength');
var ToString = require('./ToString');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-createlistfromarraylike
module.exports = function CreateListFromArrayLike(obj) {
	var elementTypes = arguments.length > 1
		? arguments[1]
		: ['Undefined', 'Null', 'Boolean', 'String', 'Symbol', 'Number', 'Object'];

	if (Type(obj) !== 'Object') {
		throw new $TypeError('Assertion failed: `obj` must be an Object');
	}
	if (!IsArray(elementTypes)) {
		throw new $TypeError('Assertion failed: `elementTypes`, if provided, must be an array');
	}
	var len = ToLength(Get(obj, 'length'));
	var list = [];
	var index = 0;
	while (index < len) {
		var indexName = ToString(index);
		var next = Get(obj, indexName);
		var nextType = Type(next);
		if ($indexOf(elementTypes, nextType) < 0) {
			throw new $TypeError('item type ' + nextType + ' is not a valid elementType');
		}
		$push(list, next);
		index += 1;
	}
	return list;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Get":1576493739232,"./IsArray":1576493739214,"./ToLength":1576493739244,"./ToString":1576493739229,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739244, function(require, module, exports) {


var MAX_SAFE_INTEGER = require('../helpers/maxSafeInteger');

var ToInteger = require('./ToInteger');

module.exports = function ToLength(argument) {
	var len = ToInteger(argument);
	if (len <= 0) { return 0; } // includes converting -0 to +0
	if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
	return len;
};

}, function(modId) { var map = {"../helpers/maxSafeInteger":1576493738869,"./ToInteger":1576493739245}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739245, function(require, module, exports) {


var ES5ToInteger = require('../5/ToInteger');

var ToNumber = require('./ToNumber');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tointeger

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	return ES5ToInteger(number);
};

}, function(modId) { var map = {"../5/ToInteger":1576493738839,"./ToNumber":1576493739205}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739246, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-createmethodproperty

module.exports = function CreateMethodProperty(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	var newDesc = {
		'[[Configurable]]': true,
		'[[Enumerable]]': false,
		'[[Value]]': V,
		'[[Writable]]': true
	};
	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		newDesc
	);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/DefineOwnProperty":1576493738882,"./FromPropertyDescriptor":1576493739224,"./IsDataDescriptor":1576493739216,"./IsPropertyKey":1576493739219,"./SameValue":1576493739226,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739247, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $EvalError = GetIntrinsic('%EvalError%');

var DayWithinYear = require('./DayWithinYear');
var InLeapYear = require('./InLeapYear');
var MonthFromTime = require('./MonthFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.5

module.exports = function DateFromTime(t) {
	var m = MonthFromTime(t);
	var d = DayWithinYear(t);
	if (m === 0) {
		return d + 1;
	}
	if (m === 1) {
		return d - 30;
	}
	var leap = InLeapYear(t);
	if (m === 2) {
		return d - 58 - leap;
	}
	if (m === 3) {
		return d - 89 - leap;
	}
	if (m === 4) {
		return d - 119 - leap;
	}
	if (m === 5) {
		return d - 150 - leap;
	}
	if (m === 6) {
		return d - 180 - leap;
	}
	if (m === 7) {
		return d - 211 - leap;
	}
	if (m === 8) {
		return d - 242 - leap;
	}
	if (m === 9) {
		return d - 272 - leap;
	}
	if (m === 10) {
		return d - 303 - leap;
	}
	if (m === 11) {
		return d - 333 - leap;
	}
	throw new $EvalError('Assertion failed: MonthFromTime returned an impossible value: ' + m);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./DayWithinYear":1576493739248,"./InLeapYear":1576493739252,"./MonthFromTime":1576493739254}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739248, function(require, module, exports) {


var Day = require('./Day');
var DayFromYear = require('./DayFromYear');
var YearFromTime = require('./YearFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.4

module.exports = function DayWithinYear(t) {
	return Day(t) - DayFromYear(YearFromTime(t));
};

}, function(modId) { var map = {"./Day":1576493739249,"./DayFromYear":1576493739250,"./YearFromTime":1576493739251}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739249, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var msPerDay = require('../helpers/timeConstants').msPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.2

module.exports = function Day(t) {
	return $floor(t / msPerDay);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739250, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function DayFromYear(y) {
	return (365 * (y - 1970)) + $floor((y - 1969) / 4) - $floor((y - 1901) / 100) + $floor((y - 1601) / 400);
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739251, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Date = GetIntrinsic('%Date%');

var callBound = require('../helpers/callBound');

var $getUTCFullYear = callBound('Date.prototype.getUTCFullYear');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function YearFromTime(t) {
	// largest y such that this.TimeFromYear(y) <= t
	return $getUTCFullYear(new $Date(t));
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739252, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $EvalError = GetIntrinsic('%EvalError%');

var DaysInYear = require('./DaysInYear');
var YearFromTime = require('./YearFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function InLeapYear(t) {
	var days = DaysInYear(YearFromTime(t));
	if (days === 365) {
		return 0;
	}
	if (days === 366) {
		return 1;
	}
	throw new $EvalError('Assertion failed: there are not 365 or 366 days in a year, got: ' + days);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./DaysInYear":1576493739253,"./YearFromTime":1576493739251}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739253, function(require, module, exports) {


var mod = require('../helpers/mod');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function DaysInYear(y) {
	if (mod(y, 4) !== 0) {
		return 365;
	}
	if (mod(y, 100) !== 0) {
		return 366;
	}
	if (mod(y, 400) !== 0) {
		return 365;
	}
	return 366;
};

}, function(modId) { var map = {"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739254, function(require, module, exports) {


var DayWithinYear = require('./DayWithinYear');
var InLeapYear = require('./InLeapYear');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.4

module.exports = function MonthFromTime(t) {
	var day = DayWithinYear(t);
	if (0 <= day && day < 31) {
		return 0;
	}
	var leap = InLeapYear(t);
	if (31 <= day && day < (59 + leap)) {
		return 1;
	}
	if ((59 + leap) <= day && day < (90 + leap)) {
		return 2;
	}
	if ((90 + leap) <= day && day < (120 + leap)) {
		return 3;
	}
	if ((120 + leap) <= day && day < (151 + leap)) {
		return 4;
	}
	if ((151 + leap) <= day && day < (181 + leap)) {
		return 5;
	}
	if ((181 + leap) <= day && day < (212 + leap)) {
		return 6;
	}
	if ((212 + leap) <= day && day < (243 + leap)) {
		return 7;
	}
	if ((243 + leap) <= day && day < (273 + leap)) {
		return 8;
	}
	if ((273 + leap) <= day && day < (304 + leap)) {
		return 9;
	}
	if ((304 + leap) <= day && day < (334 + leap)) {
		return 10;
	}
	if ((334 + leap) <= day && day < (365 + leap)) {
		return 11;
	}
};

}, function(modId) { var map = {"./DayWithinYear":1576493739248,"./InLeapYear":1576493739252}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739255, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var $isNaN = require('../helpers/isNaN');
var padTimeComponent = require('../helpers/padTimeComponent');

var Type = require('./Type');
var WeekDay = require('./WeekDay');
var MonthFromTime = require('./MonthFromTime');
var YearFromTime = require('./YearFromTime');
var DateFromTime = require('./DateFromTime');

// https://www.ecma-international.org/ecma-262/9.0/#sec-datestring

module.exports = function DateString(tv) {
	if (Type(tv) !== 'Number' || $isNaN(tv)) {
		throw new $TypeError('Assertion failed: `tv` must be a non-NaN Number');
	}
	var weekday = weekdays[WeekDay(tv)];
	var month = months[MonthFromTime(tv)];
	var day = padTimeComponent(DateFromTime(tv));
	var year = padTimeComponent(YearFromTime(tv), 4);
	return weekday + '\x20' + month + '\x20' + day + '\x20' + year;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"../helpers/padTimeComponent":1576493739256,"./Type":1576493739207,"./WeekDay":1576493739257,"./MonthFromTime":1576493739254,"./YearFromTime":1576493739251,"./DateFromTime":1576493739247}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739256, function(require, module, exports) {


var callBound = require('../helpers/callBound');

var $strSlice = callBound('String.prototype.slice');

module.exports = function padTimeComponent(c, count) {
	return $strSlice('00' + c, -(count || 2));
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739257, function(require, module, exports) {


var mod = require('../helpers/mod');

var Day = require('./Day');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.6

module.exports = function WeekDay(t) {
	return mod(Day(t) + 4, 7);
};

}, function(modId) { var map = {"../helpers/mod":1576493738826,"./Day":1576493739249}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739258, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');
var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-definepropertyorthrow

module.exports = function DefinePropertyOrThrow(O, P, desc) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	var Desc = isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, desc) ? desc : ToPropertyDescriptor(desc);
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc is not a valid Property Descriptor');
	}

	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		Desc
	);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPropertyDescriptor":1576493738836,"../helpers/DefineOwnProperty":1576493738882,"./FromPropertyDescriptor":1576493739224,"./IsAccessorDescriptor":1576493739215,"./IsDataDescriptor":1576493739216,"./IsPropertyKey":1576493739219,"./SameValue":1576493739226,"./ToPropertyDescriptor":1576493739220,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739259, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-deletepropertyorthrow

module.exports = function DeletePropertyOrThrow(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	// eslint-disable-next-line no-param-reassign
	var success = delete O[P];
	if (!success) {
		throw new $TypeError('Attempt to delete property failed.');
	}
	return success;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739219,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739260, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var objectKeys = require('object-keys');

var callBound = require('../helpers/callBound');

var callBind = require('../helpers/callBind');

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');
var $pushApply = callBind.apply(GetIntrinsic('%Array.prototype.push%'));

var forEach = require('../helpers/forEach');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/8.0/#sec-enumerableownproperties

module.exports = function EnumerableOwnProperties(O, kind) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	var keys = objectKeys(O);
	if (kind === 'key') {
		return keys;
	}
	if (kind === 'value' || kind === 'key+value') {
		var results = [];
		forEach(keys, function (key) {
			if ($isEnumerable(O, key)) {
				$pushApply(results, [
					kind === 'value' ? O[key] : [key, O[key]]
				]);
			}
		});
		return results;
	}
	throw new $TypeError('Assertion failed: "kind" is not "key", "value", or "key+value": ' + kind);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"../helpers/callBind":1576493738815,"../helpers/forEach":1576493738956,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739261, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var getIteratorMethod = require('../helpers/getIteratorMethod');
var AdvanceStringIndex = require('./AdvanceStringIndex');
var Call = require('./Call');
var GetMethod = require('./GetMethod');
var IsArray = require('./IsArray');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-getiterator

module.exports = function GetIterator(obj, method) {
	var actualMethod = method;
	if (arguments.length < 2) {
		actualMethod = getIteratorMethod(
			{
				AdvanceStringIndex: AdvanceStringIndex,
				GetMethod: GetMethod,
				IsArray: IsArray,
				Type: Type
			},
			obj
		);
	}
	var iterator = Call(actualMethod, obj);
	if (Type(iterator) !== 'Object') {
		throw new $TypeError('iterator must return an object');
	}

	return iterator;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/getIteratorMethod":1576493738919,"./AdvanceStringIndex":1576493739210,"./Call":1576493739234,"./GetMethod":1576493739262,"./IsArray":1576493739214,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739262, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var GetV = require('./GetV');
var IsCallable = require('./IsCallable');
var IsPropertyKey = require('./IsPropertyKey');

/**
 * 7.3.9 - https://ecma-international.org/ecma-262/6.0/#sec-getmethod
 * 1. Assert: IsPropertyKey(P) is true.
 * 2. Let func be GetV(O, P).
 * 3. ReturnIfAbrupt(func).
 * 4. If func is either undefined or null, return undefined.
 * 5. If IsCallable(func) is false, throw a TypeError exception.
 * 6. Return func.
 */

module.exports = function GetMethod(O, P) {
	// 7.3.9.1
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	// 7.3.9.2
	var func = GetV(O, P);

	// 7.3.9.4
	if (func == null) {
		return void 0;
	}

	// 7.3.9.5
	if (!IsCallable(func)) {
		throw new $TypeError(P + 'is not a function');
	}

	// 7.3.9.6
	return func;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./GetV":1576493739263,"./IsCallable":1576493739222,"./IsPropertyKey":1576493739219}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739263, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var ToObject = require('./ToObject');

/**
 * 7.3.2 GetV (V, P)
 * 1. Assert: IsPropertyKey(P) is true.
 * 2. Let O be ToObject(V).
 * 3. ReturnIfAbrupt(O).
 * 4. Return O.[[Get]](P, V).
 */

module.exports = function GetV(V, P) {
	// 7.3.2.1
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	// 7.3.2.2-3
	var O = ToObject(V);

	// 7.3.2.4
	return O[P];
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739219,"./ToObject":1576493739264}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739264, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Object = GetIntrinsic('%Object%');

var RequireObjectCoercible = require('./RequireObjectCoercible');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toobject

module.exports = function ToObject(value) {
	RequireObjectCoercible(value);
	return $Object(value);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./RequireObjectCoercible":1576493739241}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739265, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var hasSymbols = require('has-symbols')();

var $TypeError = GetIntrinsic('%TypeError%');

var $gOPN = GetIntrinsic('%Object.getOwnPropertyNames%');
var $gOPS = hasSymbols && GetIntrinsic('%Object.getOwnPropertySymbols%');
var keys = require('object-keys');

var esType = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-getownpropertykeys

module.exports = function GetOwnPropertyKeys(O, Type) {
	if (esType(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (Type === 'Symbol') {
		return $gOPS ? $gOPS(O) : [];
	}
	if (Type === 'String') {
		if (!$gOPN) {
			return keys(O);
		}
		return $gOPN(O);
	}
	throw new $TypeError('Assertion failed: `Type` must be `"String"` or `"Symbol"`');
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739266, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Function = GetIntrinsic('%Function%');
var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var IsConstructor = require('./IsConstructor');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-getprototypefromconstructor

module.exports = function GetPrototypeFromConstructor(constructor, intrinsicDefaultProto) {
	var intrinsic = GetIntrinsic(intrinsicDefaultProto); // throws if not a valid intrinsic
	if (!IsConstructor(constructor)) {
		throw new $TypeError('Assertion failed: `constructor` must be a constructor');
	}
	var proto = Get(constructor, 'prototype');
	if (Type(proto) !== 'Object') {
		if (!(constructor instanceof $Function)) {
			// ignore other realms, for now
			throw new $TypeError('cross-realm constructors not currently supported');
		}
		proto = intrinsic;
	}
	return proto;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739232,"./IsConstructor":1576493739233,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739267, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var callBound = require('../helpers/callBound');
var regexTester = require('../helpers/regexTester');
var every = require('../helpers/every');

var strSlice = callBound('String.prototype.slice');
var $indexOf = callBound('String.prototype.indexOf');
var $parseInt = parseInt;

var isDigit = regexTester(/^[0-9]$/);

var inspect = require('object-inspect');

var Get = require('./Get');
var IsArray = require('./IsArray');
var IsInteger = require('./IsInteger');
var ToObject = require('./ToObject');
var ToString = require('./ToString');
var Type = require('./Type');

// http://www.ecma-international.org/ecma-262/9.0/#sec-getsubstitution

// eslint-disable-next-line max-statements, max-params, max-lines-per-function
module.exports = function GetSubstitution(matched, str, position, captures, namedCaptures, replacement) {
	if (Type(matched) !== 'String') {
		throw new $TypeError('Assertion failed: `matched` must be a String');
	}
	var matchLength = matched.length;

	if (Type(str) !== 'String') {
		throw new $TypeError('Assertion failed: `str` must be a String');
	}
	var stringLength = str.length;

	if (!IsInteger(position) || position < 0 || position > stringLength) {
		throw new $TypeError('Assertion failed: `position` must be a nonnegative integer, and less than or equal to the length of `string`, got ' + inspect(position));
	}

	var ES = this;
	var isStringOrHole = function (capture, index, arr) { return ES.Type(capture) === 'String' || !(index in arr); };
	if (!IsArray(captures) || !every(captures, isStringOrHole)) {
		throw new $TypeError('Assertion failed: `captures` must be a List of Strings, got ' + inspect(captures));
	}

	if (Type(replacement) !== 'String') {
		throw new $TypeError('Assertion failed: `replacement` must be a String');
	}

	var tailPos = position + matchLength;
	var m = captures.length;
	if (Type(namedCaptures) !== 'Undefined') {
		namedCaptures = ToObject(namedCaptures); // eslint-disable-line no-param-reassign
	}

	var result = '';
	for (var i = 0; i < replacement.length; i += 1) {
		// if this is a $, and it's not the end of the replacement
		var current = replacement[i];
		var isLast = (i + 1) >= replacement.length;
		var nextIsLast = (i + 2) >= replacement.length;
		if (current === '$' && !isLast) {
			var next = replacement[i + 1];
			if (next === '$') {
				result += '$';
				i += 1;
			} else if (next === '&') {
				result += matched;
				i += 1;
			} else if (next === '`') {
				result += position === 0 ? '' : strSlice(str, 0, position - 1);
				i += 1;
			} else if (next === "'") {
				result += tailPos >= stringLength ? '' : strSlice(str, tailPos);
				i += 1;
			} else {
				var nextNext = nextIsLast ? null : replacement[i + 2];
				if (isDigit(next) && next !== '0' && (nextIsLast || !isDigit(nextNext))) {
					// $1 through $9, and not followed by a digit
					var n = $parseInt(next, 10);
					// if (n > m, impl-defined)
					result += (n <= m && Type(captures[n - 1]) === 'Undefined') ? '' : captures[n - 1];
					i += 1;
				} else if (isDigit(next) && (nextIsLast || isDigit(nextNext))) {
					// $00 through $99
					var nn = next + nextNext;
					var nnI = $parseInt(nn, 10) - 1;
					// if nn === '00' or nn > m, impl-defined
					result += (nn <= m && Type(captures[nnI]) === 'Undefined') ? '' : captures[nnI];
					i += 2;
				} else if (next === '<') {
					// eslint-disable-next-line max-depth
					if (Type(namedCaptures) === 'Undefined') {
						result += '$<';
						i += 2;
					} else {
						var endIndex = $indexOf(replacement, '>', i);
						// eslint-disable-next-line max-depth
						if (endIndex > -1) {
							var groupName = strSlice(replacement, i, endIndex);
							var capture = Get(namedCaptures, groupName);
							// eslint-disable-next-line max-depth
							if (Type(capture) !== 'Undefined') {
								result += ToString(capture);
							}
							i += '$<' + groupName + '>'.length;
						}
					}
				} else {
					result += '$';
				}
			}
		} else {
			// the final $, or else not a $
			result += replacement[i];
		}
	}
	return result;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"../helpers/regexTester":1576493738861,"../helpers/every":1576493738884,"./Get":1576493739232,"./IsArray":1576493739214,"./IsInteger":1576493739211,"./ToObject":1576493739264,"./ToString":1576493739229,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739268, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var has = require('has');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-hasownproperty

module.exports = function HasOwnProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return has(O, P);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739219,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739269, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-hasproperty

module.exports = function HasProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return P in O;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739219,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739270, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var mod = require('../helpers/mod');
var timeConstants = require('../helpers/timeConstants');
var msPerHour = timeConstants.msPerHour;
var HoursPerDay = timeConstants.HoursPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function HourFromTime(t) {
	return mod($floor(t / msPerHour), HoursPerDay);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739271, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $hasInstance = GetIntrinsic('Symbol.hasInstance', true);

var Call = require('./Call');
var GetMethod = require('./GetMethod');
var IsCallable = require('./IsCallable');
var OrdinaryHasInstance = require('./OrdinaryHasInstance');
var ToBoolean = require('./ToBoolean');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-instanceofoperator

module.exports = function InstanceofOperator(O, C) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	var instOfHandler = $hasInstance ? GetMethod(C, $hasInstance) : void 0;
	if (typeof instOfHandler !== 'undefined') {
		return ToBoolean(Call(instOfHandler, C, [O]));
	}
	if (!IsCallable(C)) {
		throw new $TypeError('`C` is not Callable');
	}
	return OrdinaryHasInstance(C, O);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Call":1576493739234,"./GetMethod":1576493739262,"./IsCallable":1576493739222,"./OrdinaryHasInstance":1576493739272,"./ToBoolean":1576493739221,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739272, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var IsCallable = require('./IsCallable');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinaryhasinstance

module.exports = function OrdinaryHasInstance(C, O) {
	if (IsCallable(C) === false) {
		return false;
	}
	if (Type(O) !== 'Object') {
		return false;
	}
	var P = Get(C, 'prototype');
	if (Type(P) !== 'Object') {
		throw new $TypeError('OrdinaryHasInstance called on an object with an invalid prototype property.');
	}
	return O instanceof C;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739232,"./IsCallable":1576493739222,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739273, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $arraySlice = require('../helpers/callBound')('Array.prototype.slice');

var Call = require('./Call');
var GetV = require('./GetV');
var IsPropertyKey = require('./IsPropertyKey');

// https://ecma-international.org/ecma-262/6.0/#sec-invoke

module.exports = function Invoke(O, P) {
	if (!IsPropertyKey(P)) {
		throw new $TypeError('P must be a Property Key');
	}
	var argumentsList = $arraySlice(arguments, 2);
	var func = GetV(O, P);
	return Call(func, O, argumentsList);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Call":1576493739234,"./GetV":1576493739263,"./IsPropertyKey":1576493739219}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739274, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $isConcatSpreadable = GetIntrinsic('%Symbol.isConcatSpreadable%', true);

var Get = require('./Get');
var IsArray = require('./IsArray');
var ToBoolean = require('./ToBoolean');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-isconcatspreadable

module.exports = function IsConcatSpreadable(O) {
	if (Type(O) !== 'Object') {
		return false;
	}
	if ($isConcatSpreadable) {
		var spreadable = Get(O, $isConcatSpreadable);
		if (typeof spreadable !== 'undefined') {
			return ToBoolean(spreadable);
		}
	}
	return IsArray(O);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739232,"./IsArray":1576493739214,"./ToBoolean":1576493739221,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739275, function(require, module, exports) {


var callBound = require('../helpers/callBound');

var $PromiseThen = callBound('Promise.prototype.then', true);

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ispromise

module.exports = function IsPromise(x) {
	if (Type(x) !== 'Object') {
		return false;
	}
	if (!$PromiseThen) { // Promises are not supported
		return false;
	}
	try {
		$PromiseThen(x); // throws if not a promise
	} catch (e) {
		return false;
	}
	return true;
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739276, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var isPrefixOf = require('../helpers/isPrefixOf');

// var callBound = require('../helpers/callBound');

// var $charAt = callBound('String.prototype.charAt');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/9.0/#sec-isstringprefix

module.exports = function IsStringPrefix(p, q) {
	if (Type(p) !== 'String') {
		throw new $TypeError('Assertion failed: "p" must be a String');
	}

	if (Type(q) !== 'String') {
		throw new $TypeError('Assertion failed: "q" must be a String');
	}

	return isPrefixOf(p, q);
	/*
	if (p === q || p === '') {
		return true;
	}

	var pLength = p.length;
	var qLength = q.length;
	if (pLength >= qLength) {
		return false;
	}

	// assert: pLength < qLength

	for (var i = 0; i < pLength; i += 1) {
		if ($charAt(p, i) !== $charAt(q, i)) {
			return false;
		}
	}
	return true;
	*/
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPrefixOf":1576493738813,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739277, function(require, module, exports) {


var callBound = require('../helpers/callBound');
var $arrayPush = callBound('Array.prototype.push');

var GetIterator = require('./GetIterator');
var IteratorStep = require('./IteratorStep');
var IteratorValue = require('./IteratorValue');

// https://www.ecma-international.org/ecma-262/8.0/#sec-iterabletolist

module.exports = function IterableToList(items, method) {
	var iterator = GetIterator(items, method);
	var values = [];
	var next = true;
	while (next) {
		next = IteratorStep(iterator);
		if (next) {
			var nextValue = IteratorValue(next);
			$arrayPush(values, nextValue);
		}
	}
	return values;
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./GetIterator":1576493739261,"./IteratorStep":1576493739278,"./IteratorValue":1576493739281}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739278, function(require, module, exports) {


var IteratorComplete = require('./IteratorComplete');
var IteratorNext = require('./IteratorNext');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorstep

module.exports = function IteratorStep(iterator) {
	var result = IteratorNext(iterator);
	var done = IteratorComplete(result);
	return done === true ? false : result;
};


}, function(modId) { var map = {"./IteratorComplete":1576493739279,"./IteratorNext":1576493739280}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739279, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var ToBoolean = require('./ToBoolean');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorcomplete

module.exports = function IteratorComplete(iterResult) {
	if (Type(iterResult) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
	}
	return ToBoolean(Get(iterResult, 'done'));
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739232,"./ToBoolean":1576493739221,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739280, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Invoke = require('./Invoke');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratornext

module.exports = function IteratorNext(iterator, value) {
	var result = Invoke(iterator, 'next', arguments.length < 2 ? [] : [value]);
	if (Type(result) !== 'Object') {
		throw new $TypeError('iterator next must return an object');
	}
	return result;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Invoke":1576493739273,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739281, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorvalue

module.exports = function IteratorValue(iterResult) {
	if (Type(iterResult) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
	}
	return Get(iterResult, 'value');
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739232,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739282, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Call = require('./Call');
var GetMethod = require('./GetMethod');
var IsCallable = require('./IsCallable');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorclose

module.exports = function IteratorClose(iterator, completion) {
	if (Type(iterator) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(iterator) is not Object');
	}
	if (!IsCallable(completion)) {
		throw new $TypeError('Assertion failed: completion is not a thunk for a Completion Record');
	}
	var completionThunk = completion;

	var iteratorReturn = GetMethod(iterator, 'return');

	if (typeof iteratorReturn === 'undefined') {
		return completionThunk();
	}

	var completionRecord;
	try {
		var innerResult = Call(iteratorReturn, iterator, []);
	} catch (e) {
		// if we hit here, then "e" is the innerResult completion that needs re-throwing

		// if the completion is of type "throw", this will throw.
		completionRecord = completionThunk();
		completionThunk = null; // ensure it's not called twice.

		// if not, then return the innerResult completion
		throw e;
	}
	completionRecord = completionThunk(); // if innerResult worked, then throw if the completion does
	completionThunk = null; // ensure it's not called twice.

	if (Type(innerResult) !== 'Object') {
		throw new $TypeError('iterator .return must return an object');
	}

	return completionRecord;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Call":1576493739234,"./GetMethod":1576493739262,"./IsCallable":1576493739222,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739283, function(require, module, exports) {


var $isFinite = require('../helpers/isFinite');
var msPerDay = require('../helpers/timeConstants').msPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.13

module.exports = function MakeDate(day, time) {
	if (!$isFinite(day) || !$isFinite(time)) {
		return NaN;
	}
	return (day * msPerDay) + time;
};

}, function(modId) { var map = {"../helpers/isFinite":1576493738812,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739284, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');
var $DateUTC = GetIntrinsic('%Date.UTC%');

var mod = require('../helpers/mod');
var $isFinite = require('../helpers/isFinite');

var DateFromTime = require('./DateFromTime');
var Day = require('./Day');
var MonthFromTime = require('./MonthFromTime');
var ToInteger = require('./ToInteger');
var YearFromTime = require('./YearFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.12

module.exports = function MakeDay(year, month, date) {
	if (!$isFinite(year) || !$isFinite(month) || !$isFinite(date)) {
		return NaN;
	}
	var y = ToInteger(year);
	var m = ToInteger(month);
	var dt = ToInteger(date);
	var ym = y + $floor(m / 12);
	var mn = mod(m, 12);
	var t = $DateUTC(ym, mn, 1);
	if (YearFromTime(t) !== ym || MonthFromTime(t) !== mn || DateFromTime(t) !== 1) {
		return NaN;
	}
	return Day(t) + dt - 1;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/isFinite":1576493738812,"./DateFromTime":1576493739247,"./Day":1576493739249,"./MonthFromTime":1576493739254,"./ToInteger":1576493739245,"./YearFromTime":1576493739251}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739285, function(require, module, exports) {


var $isFinite = require('../helpers/isFinite');
var timeConstants = require('../helpers/timeConstants');
var msPerSecond = timeConstants.msPerSecond;
var msPerMinute = timeConstants.msPerMinute;
var msPerHour = timeConstants.msPerHour;

var ToInteger = require('./ToInteger');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.11

module.exports = function MakeTime(hour, min, sec, ms) {
	if (!$isFinite(hour) || !$isFinite(min) || !$isFinite(sec) || !$isFinite(ms)) {
		return NaN;
	}
	var h = ToInteger(hour);
	var m = ToInteger(min);
	var s = ToInteger(sec);
	var milli = ToInteger(ms);
	var t = (h * msPerHour) + (m * msPerMinute) + (s * msPerSecond) + milli;
	return t;
};

}, function(modId) { var map = {"../helpers/isFinite":1576493738812,"../helpers/timeConstants":1576493738821,"./ToInteger":1576493739245}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739286, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var mod = require('../helpers/mod');
var timeConstants = require('../helpers/timeConstants');
var msPerMinute = timeConstants.msPerMinute;
var MinutesPerHour = timeConstants.MinutesPerHour;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function MinFromTime(t) {
	return mod($floor(t / msPerMinute), MinutesPerHour);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739287, function(require, module, exports) {


var mod = require('../helpers/mod');

// https://ecma-international.org/ecma-262/5.1/#sec-5.2

module.exports = function modulo(x, y) {
	return mod(x, y);
};

}, function(modId) { var map = {"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739288, function(require, module, exports) {


var mod = require('../helpers/mod');
var msPerSecond = require('../helpers/timeConstants').msPerSecond;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function msFromTime(t) {
	return mod(t, msPerSecond);
};

}, function(modId) { var map = {"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739289, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $String = GetIntrinsic('%String%');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/9.0/#sec-tostring-applied-to-the-number-type

module.exports = function NumberToString(m) {
	if (Type(m) !== 'Number') {
		throw new TypeError('Assertion failed: "m" must be a String');
	}

	return $String(m);
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739290, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $ObjectCreate = GetIntrinsic('%Object.create%');
var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-objectcreate

module.exports = function ObjectCreate(proto, internalSlotsList) {
	if (proto !== null && Type(proto) !== 'Object') {
		throw new $TypeError('Assertion failed: `proto` must be null or an object');
	}
	var slots = arguments.length < 2 ? [] : internalSlotsList;
	if (slots.length > 0) {
		throw new $SyntaxError('es-abstract does not yet support internal slots');
	}

	if (proto === null && !$ObjectCreate) {
		throw new $SyntaxError('native Object.create support is required to create null objects');
	}

	return $ObjectCreate(proto);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739291, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $getProto = require('../helpers/getProto');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/7.0/#sec-ordinarygetprototypeof

module.exports = function OrdinaryGetPrototypeOf(O) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!$getProto) {
		throw new $TypeError('This environment does not support fetching prototypes.');
	}
	return $getProto(O);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/getProto":1576493739060,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739292, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $setProto = require('../helpers/setProto');

var OrdinaryGetPrototypeOf = require('./OrdinaryGetPrototypeOf');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/7.0/#sec-ordinarysetprototypeof

module.exports = function OrdinarySetPrototypeOf(O, V) {
	if (Type(V) !== 'Object' && Type(V) !== 'Null') {
		throw new $TypeError('Assertion failed: V must be Object or Null');
	}
	/*
    var extensible = IsExtensible(O);
    var current = OrdinaryGetPrototypeOf(O);
    if (SameValue(V, current)) {
        return true;
    }
    if (!extensible) {
        return false;
    }
    */
	try {
		$setProto(O, V);
	} catch (e) {
		return false;
	}
	return OrdinaryGetPrototypeOf(O) === V;
	/*
    var p = V;
    var done = false;
    while (!done) {
        if (p === null) {
            done = true;
        } else if (SameValue(p, O)) {
            return false;
        } else {
            if (wat) {
                done = true;
            } else {
                p = p.[[Prototype]];
            }
        }
     }
     O.[[Prototype]] = V;
     return true;
     */
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/setProto":1576493739062,"./OrdinaryGetPrototypeOf":1576493739291,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739293, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinaryhasproperty

module.exports = function OrdinaryHasProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	return P in O;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739219,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739294, function(require, module, exports) {


var callBound = require('../helpers/callBound');

var $PromiseResolve = callBound('Promise.resolve', true);

// https://ecma-international.org/ecma-262/9.0/#sec-promise-resolve

module.exports = function PromiseResolve(C, x) {
	if (!$PromiseResolve) {
		throw new SyntaxError('This environment does not support Promises.');
	}
	return $PromiseResolve(C, x);
};


}, function(modId) { var map = {"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739295, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var regexExec = require('../helpers/callBound')('RegExp.prototype.exec');

var Call = require('./Call');
var Get = require('./Get');
var IsCallable = require('./IsCallable');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-regexpexec

module.exports = function RegExpExec(R, S) {
	if (Type(R) !== 'Object') {
		throw new $TypeError('Assertion failed: `R` must be an Object');
	}
	if (Type(S) !== 'String') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	var exec = Get(R, 'exec');
	if (IsCallable(exec)) {
		var result = Call(exec, R, [S]);
		if (result === null || Type(result) === 'Object') {
			return result;
		}
		throw new $TypeError('"exec" method must return `null` or an Object');
	}
	return regexExec(R, S);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Call":1576493739234,"./Get":1576493739232,"./IsCallable":1576493739222,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739296, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var SameValue = require('./SameValue');

// https://www.ecma-international.org/ecma-262/7.0/#sec-samevaluenonnumber

module.exports = function SameValueNonNumber(x, y) {
	if (typeof x === 'number' || typeof x !== typeof y) {
		throw new $TypeError('SameValueNonNumber requires two non-number values of the same type.');
	}
	return SameValue(x, y);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./SameValue":1576493739226}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739297, function(require, module, exports) {


var $isNaN = require('../helpers/isNaN');

// https://www.ecma-international.org/ecma-262/6.0/#sec-samevaluezero

module.exports = function SameValueZero(x, y) {
	return (x === y) || ($isNaN(x) && $isNaN(y));
};

}, function(modId) { var map = {"../helpers/isNaN":1576493738811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739298, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var mod = require('../helpers/mod');
var timeConstants = require('../helpers/timeConstants');
var msPerSecond = timeConstants.msPerSecond;
var SecondsPerMinute = timeConstants.SecondsPerMinute;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function SecFromTime(t) {
	return mod($floor(t / msPerSecond), SecondsPerMinute);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739299, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-set-o-p-v-throw

module.exports = function Set(O, P, V, Throw) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	if (Type(Throw) !== 'Boolean') {
		throw new $TypeError('Assertion failed: `Throw` must be a Boolean');
	}
	if (Throw) {
		O[P] = V; // eslint-disable-line no-param-reassign
		return true;
	} else {
		try {
			O[P] = V; // eslint-disable-line no-param-reassign
		} catch (e) {
			return false;
		}
	}
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739219,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739300, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var has = require('has');

var $TypeError = GetIntrinsic('%TypeError%');

var getSymbolDescription = require('../helpers/getSymbolDescription');

var DefinePropertyOrThrow = require('./DefinePropertyOrThrow');
var IsExtensible = require('./IsExtensible');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-setfunctionname

module.exports = function SetFunctionName(F, name) {
	if (typeof F !== 'function') {
		throw new $TypeError('Assertion failed: `F` must be a function');
	}
	if (!IsExtensible(F) || has(F, 'name')) {
		throw new $TypeError('Assertion failed: `F` must be extensible, and must not have a `name` own property');
	}
	var nameType = Type(name);
	if (nameType !== 'Symbol' && nameType !== 'String') {
		throw new $TypeError('Assertion failed: `name` must be a Symbol or a String');
	}
	if (nameType === 'Symbol') {
		var description = getSymbolDescription(name);
		// eslint-disable-next-line no-param-reassign
		name = typeof description === 'undefined' ? '' : '[' + description + ']';
	}
	if (arguments.length > 2) {
		var prefix = arguments[2];
		// eslint-disable-next-line no-param-reassign
		name = prefix + ' ' + name;
	}
	return DefinePropertyOrThrow(F, 'name', {
		'[[Value]]': name,
		'[[Writable]]': false,
		'[[Enumerable]]': false,
		'[[Configurable]]': true
	});
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/getSymbolDescription":1576493738953,"./DefinePropertyOrThrow":1576493739258,"./IsExtensible":1576493739218,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739301, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $SyntaxError = GetIntrinsic('%SyntaxError%');
var $TypeError = GetIntrinsic('%TypeError%');
var $preventExtensions = GetIntrinsic('%Object.preventExtensions%');
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $gOPN = GetIntrinsic('%Object.getOwnPropertyNames%');

var forEach = require('../helpers/forEach');

var DefinePropertyOrThrow = require('./DefinePropertyOrThrow');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-setintegritylevel

module.exports = function SetIntegrityLevel(O, level) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (level !== 'sealed' && level !== 'frozen') {
		throw new $TypeError('Assertion failed: `level` must be `"sealed"` or `"frozen"`');
	}
	if (!$preventExtensions) {
		throw new $SyntaxError('SetIntegrityLevel requires native `Object.preventExtensions` support');
	}
	var status = $preventExtensions(O);
	if (!status) {
		return false;
	}
	if (!$gOPN) {
		throw new $SyntaxError('SetIntegrityLevel requires native `Object.getOwnPropertyNames` support');
	}
	var theKeys = $gOPN(O);
	if (level === 'sealed') {
		forEach(theKeys, function (k) {
			DefinePropertyOrThrow(O, k, { configurable: false });
		});
	} else if (level === 'frozen') {
		forEach(theKeys, function (k) {
			var currentDesc = $gOPD(O, k);
			if (typeof currentDesc !== 'undefined') {
				var desc;
				if (IsAccessorDescriptor(ToPropertyDescriptor(currentDesc))) {
					desc = { configurable: false };
				} else {
					desc = { configurable: false, writable: false };
				}
				DefinePropertyOrThrow(O, k, desc);
			}
		});
	}
	return true;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/forEach":1576493738956,"./DefinePropertyOrThrow":1576493739258,"./IsAccessorDescriptor":1576493739215,"./ToPropertyDescriptor":1576493739220,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739302, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var IsConstructor = require('./IsConstructor');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-speciesconstructor

module.exports = function SpeciesConstructor(O, defaultConstructor) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	var C = O.constructor;
	if (typeof C === 'undefined') {
		return defaultConstructor;
	}
	if (Type(C) !== 'Object') {
		throw new $TypeError('O.constructor is not an Object');
	}
	var S = $species ? C[$species] : void 0;
	if (S == null) {
		return defaultConstructor;
	}
	if (IsConstructor(S)) {
		return S;
	}
	throw new $TypeError('no constructor found');
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsConstructor":1576493739233,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739303, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var callBound = require('../helpers/callBound');

var $SymbolToString = callBound('Symbol.prototype.toString', true);

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-symboldescriptivestring

module.exports = function SymbolDescriptiveString(sym) {
	if (Type(sym) !== 'Symbol') {
		throw new $TypeError('Assertion failed: `sym` must be a Symbol');
	}
	return $SymbolToString(sym);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739304, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $gOPN = GetIntrinsic('%Object.getOwnPropertyNames%');
var $TypeError = GetIntrinsic('%TypeError%');

var every = require('../helpers/every');

var IsDataDescriptor = require('./IsDataDescriptor');
var IsExtensible = require('./IsExtensible');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-testintegritylevel

module.exports = function TestIntegrityLevel(O, level) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (level !== 'sealed' && level !== 'frozen') {
		throw new $TypeError('Assertion failed: `level` must be `"sealed"` or `"frozen"`');
	}
	var status = IsExtensible(O);
	if (status) {
		return false;
	}
	var theKeys = $gOPN(O);
	return theKeys.length === 0 || every(theKeys, function (k) {
		var currentDesc = $gOPD(O, k);
		if (typeof currentDesc !== 'undefined') {
			if (currentDesc.configurable) {
				return false;
			}
			if (level === 'frozen' && IsDataDescriptor(ToPropertyDescriptor(currentDesc)) && currentDesc.writable) {
				return false;
			}
		}
		return true;
	});
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/every":1576493738884,"./IsDataDescriptor":1576493739216,"./IsExtensible":1576493739218,"./ToPropertyDescriptor":1576493739220,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739305, function(require, module, exports) {


var $BooleanValueOf = require('../helpers/callBound')('Boolean.prototype.valueOf');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-boolean-prototype-object

module.exports = function thisBooleanValue(value) {
	if (Type(value) === 'Boolean') {
		return value;
	}

	return $BooleanValueOf(value);
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739306, function(require, module, exports) {


var callBound = require('../helpers/callBound');

var Type = require('./Type');

var $NumberValueOf = callBound('Number.prototype.valueOf');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-number-prototype-object

module.exports = function thisNumberValue(value) {
	if (Type(value) === 'Number') {
		return value;
	}

	return $NumberValueOf(value);
};


}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739307, function(require, module, exports) {


var $StringValueOf = require('../helpers/callBound')('String.prototype.valueOf');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-string-prototype-object

module.exports = function thisStringValue(value) {
	if (Type(value) === 'String') {
		return value;
	}

	return $StringValueOf(value);
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739308, function(require, module, exports) {


var callBound = require('../helpers/callBound');

var $SymbolValueOf = callBound('Symbol.prototype.valueOf', true);

var Type = require('./Type');

// https://ecma-international.org/ecma-262/9.0/#sec-thissymbolvalue

module.exports = function thisSymbolValue(value) {
	if (!$SymbolValueOf) {
		throw new SyntaxError('Symbols are not supported; thisSymbolValue requires that `value` be a Symbol or a Symbol object');
	}
	if (Type(value) === 'Symbol') {
		return value;
	}
	return $SymbolValueOf(value);
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739309, function(require, module, exports) {


var $DateValueOf = require('../helpers/callBound')('Date.prototype.valueOf');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-date-prototype-object

module.exports = function thisTimeValue(value) {
	return $DateValueOf(value);
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739310, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Date = GetIntrinsic('%Date%');
var $Number = GetIntrinsic('%Number%');
var $abs = GetIntrinsic('%Math.abs%');

var $isFinite = require('../helpers/isFinite');

var ToNumber = require('./ToNumber');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.14

module.exports = function TimeClip(time) {
	if (!$isFinite(time) || $abs(time) > 8.64e15) {
		return NaN;
	}
	return $Number(new $Date(ToNumber(time)));
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isFinite":1576493738812,"./ToNumber":1576493739205}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739311, function(require, module, exports) {


var msPerDay = require('../helpers/timeConstants').msPerDay;

var DayFromYear = require('./DayFromYear');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function TimeFromYear(y) {
	return msPerDay * DayFromYear(y);
};

}, function(modId) { var map = {"../helpers/timeConstants":1576493738821,"./DayFromYear":1576493739250}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739312, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $isNaN = require('../helpers/isNaN');
var padTimeComponent = require('../helpers/padTimeComponent');

var HourFromTime = require('./HourFromTime');
var MinFromTime = require('./MinFromTime');
var SecFromTime = require('./SecFromTime');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/9.0/#sec-timestring

module.exports = function TimeString(tv) {
	if (Type(tv) !== 'Number' || $isNaN(tv)) {
		throw new $TypeError('Assertion failed: `tv` must be a non-NaN Number');
	}
	var hour = HourFromTime(tv);
	var minute = MinFromTime(tv);
	var second = SecFromTime(tv);
	return padTimeComponent(hour) + ':' + padTimeComponent(minute) + ':' + padTimeComponent(second) + '\x20GMT';
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"../helpers/padTimeComponent":1576493739256,"./HourFromTime":1576493739270,"./MinFromTime":1576493739286,"./SecFromTime":1576493739298,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739313, function(require, module, exports) {


var mod = require('../helpers/mod');
var msPerDay = require('../helpers/timeConstants').msPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.2

module.exports = function TimeWithinDay(t) {
	return mod(t, msPerDay);
};


}, function(modId) { var map = {"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739314, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $Date = GetIntrinsic('%Date%');

var $isNaN = require('../helpers/isNaN');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-todatestring

module.exports = function ToDateString(tv) {
	if (Type(tv) !== 'Number') {
		throw new $TypeError('Assertion failed: `tv` must be a Number');
	}
	if ($isNaN(tv)) {
		return 'Invalid Date';
	}
	return $Date(tv);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"./Type":1576493739207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739315, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $RangeError = GetIntrinsic('%RangeError%');

var ToInteger = require('./ToInteger');
var ToLength = require('./ToLength');
var SameValueZero = require('./SameValueZero');

// https://www.ecma-international.org/ecma-262/8.0/#sec-toindex

module.exports = function ToIndex(value) {
	if (typeof value === 'undefined') {
		return 0;
	}
	var integerIndex = ToInteger(value);
	if (integerIndex < 0) {
		throw new $RangeError('index must be >= 0');
	}
	var index = ToLength(integerIndex);
	if (!SameValueZero(integerIndex, index)) {
		throw new $RangeError('index must be >= 0 and < 2 ** 53 - 1');
	}
	return index;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToInteger":1576493739245,"./ToLength":1576493739244,"./SameValueZero":1576493739297}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739316, function(require, module, exports) {


var ToUint16 = require('./ToUint16');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toint16

module.exports = function ToInt16(argument) {
	var int16bit = ToUint16(argument);
	return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
};

}, function(modId) { var map = {"./ToUint16":1576493739317}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739317, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var ToNumber = require('./ToNumber');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var $sign = require('../helpers/sign');
var $mod = require('../helpers/mod');

var $floor = $Math.floor;
var $abs = $Math.abs;

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.7

module.exports = function ToUint16(value) {
	var number = ToNumber(value);
	if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
	var posInt = $sign(number) * $floor($abs(number));
	return $mod(posInt, 0x10000);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToNumber":1576493739205,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812,"../helpers/sign":1576493738840,"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739318, function(require, module, exports) {


var ToNumber = require('./ToNumber');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.5

module.exports = function ToInt32(x) {
	return ToNumber(x) >> 0;
};

}, function(modId) { var map = {"./ToNumber":1576493739205}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739319, function(require, module, exports) {


var ToUint8 = require('./ToUint8');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toint8

module.exports = function ToInt8(argument) {
	var int8bit = ToUint8(argument);
	return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
};

}, function(modId) { var map = {"./ToUint8":1576493739320}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739320, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var ToNumber = require('./ToNumber');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var $sign = require('../helpers/sign');
var $mod = require('../helpers/mod');

var $floor = $Math.floor;
var $abs = $Math.abs;

module.exports = function ToUint8(argument) {
	var number = ToNumber(argument);
	if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
	var posInt = $sign(number) * $floor($abs(number));
	return $mod(posInt, 0x100);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToNumber":1576493739205,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812,"../helpers/sign":1576493738840,"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739321, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $String = GetIntrinsic('%String%');

var ToPrimitive = require('./ToPrimitive');
var ToString = require('./ToString');

// https://www.ecma-international.org/ecma-262/6.0/#sec-topropertykey

module.exports = function ToPropertyKey(argument) {
	var key = ToPrimitive(argument, $String);
	return typeof key === 'symbol' ? key : ToString(key);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToPrimitive":1576493739206,"./ToString":1576493739229}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739322, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var ToNumber = require('./ToNumber');

var $isNaN = require('../helpers/isNaN');

var $floor = $Math.floor;

// https://www.ecma-international.org/ecma-262/6.0/#sec-touint8clamp

module.exports = function ToUint8Clamp(argument) {
	var number = ToNumber(argument);
	if ($isNaN(number) || number <= 0) { return 0; }
	if (number >= 0xFF) { return 0xFF; }
	var f = $floor(argument);
	if (f + 0.5 < number) { return f + 1; }
	if (number < f + 0.5) { return f; }
	if (f % 2 !== 0) { return f + 1; }
	return f;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToNumber":1576493739205,"../helpers/isNaN":1576493738811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739323, function(require, module, exports) {


/* eslint global-require: 0 */
// https://www.ecma-international.org/ecma-262/10.0/#sec-abstract-operations
var ES2019 = {
	'Abstract Equality Comparison': require('./2019/AbstractEqualityComparison'),
	'Abstract Relational Comparison': require('./2019/AbstractRelationalComparison'),
	'Strict Equality Comparison': require('./2019/StrictEqualityComparison'),
	AddEntriesFromIterable: require('./2019/AddEntriesFromIterable'),
	AdvanceStringIndex: require('./2019/AdvanceStringIndex'),
	ArrayCreate: require('./2019/ArrayCreate'),
	ArraySetLength: require('./2019/ArraySetLength'),
	ArraySpeciesCreate: require('./2019/ArraySpeciesCreate'),
	Call: require('./2019/Call'),
	CanonicalNumericIndexString: require('./2019/CanonicalNumericIndexString'),
	CompletePropertyDescriptor: require('./2019/CompletePropertyDescriptor'),
	CopyDataProperties: require('./2019/CopyDataProperties'),
	CreateDataProperty: require('./2019/CreateDataProperty'),
	CreateDataPropertyOrThrow: require('./2019/CreateDataPropertyOrThrow'),
	CreateHTML: require('./2019/CreateHTML'),
	CreateIterResultObject: require('./2019/CreateIterResultObject'),
	CreateListFromArrayLike: require('./2019/CreateListFromArrayLike'),
	CreateMethodProperty: require('./2019/CreateMethodProperty'),
	DateFromTime: require('./2019/DateFromTime'),
	DateString: require('./2019/DateString'),
	Day: require('./2019/Day'),
	DayFromYear: require('./2019/DayFromYear'),
	DaysInYear: require('./2019/DaysInYear'),
	DayWithinYear: require('./2019/DayWithinYear'),
	DefinePropertyOrThrow: require('./2019/DefinePropertyOrThrow'),
	DeletePropertyOrThrow: require('./2019/DeletePropertyOrThrow'),
	EnumerableOwnPropertyNames: require('./2019/EnumerableOwnPropertyNames'),
	FlattenIntoArray: require('./2019/FlattenIntoArray'),
	FromPropertyDescriptor: require('./2019/FromPropertyDescriptor'),
	Get: require('./2019/Get'),
	GetIterator: require('./2019/GetIterator'),
	GetMethod: require('./2019/GetMethod'),
	GetOwnPropertyKeys: require('./2019/GetOwnPropertyKeys'),
	GetPrototypeFromConstructor: require('./2019/GetPrototypeFromConstructor'),
	GetSubstitution: require('./2019/GetSubstitution'),
	GetV: require('./2019/GetV'),
	HasOwnProperty: require('./2019/HasOwnProperty'),
	HasProperty: require('./2019/HasProperty'),
	HourFromTime: require('./2019/HourFromTime'),
	InLeapYear: require('./2019/InLeapYear'),
	InstanceofOperator: require('./2019/InstanceofOperator'),
	Invoke: require('./2019/Invoke'),
	IsAccessorDescriptor: require('./2019/IsAccessorDescriptor'),
	IsArray: require('./2019/IsArray'),
	IsCallable: require('./2019/IsCallable'),
	IsConcatSpreadable: require('./2019/IsConcatSpreadable'),
	IsConstructor: require('./2019/IsConstructor'),
	IsDataDescriptor: require('./2019/IsDataDescriptor'),
	IsExtensible: require('./2019/IsExtensible'),
	IsGenericDescriptor: require('./2019/IsGenericDescriptor'),
	IsInteger: require('./2019/IsInteger'),
	IsPromise: require('./2019/IsPromise'),
	IsPropertyKey: require('./2019/IsPropertyKey'),
	IsRegExp: require('./2019/IsRegExp'),
	IsStringPrefix: require('./2019/IsStringPrefix'),
	IterableToList: require('./2019/IterableToList'),
	IteratorClose: require('./2019/IteratorClose'),
	IteratorComplete: require('./2019/IteratorComplete'),
	IteratorNext: require('./2019/IteratorNext'),
	IteratorStep: require('./2019/IteratorStep'),
	IteratorValue: require('./2019/IteratorValue'),
	MakeDate: require('./2019/MakeDate'),
	MakeDay: require('./2019/MakeDay'),
	MakeTime: require('./2019/MakeTime'),
	MinFromTime: require('./2019/MinFromTime'),
	modulo: require('./2019/modulo'),
	MonthFromTime: require('./2019/MonthFromTime'),
	msFromTime: require('./2019/msFromTime'),
	NumberToString: require('./2019/NumberToString'),
	ObjectCreate: require('./2019/ObjectCreate'),
	OrdinaryDefineOwnProperty: require('./2019/OrdinaryDefineOwnProperty'),
	OrdinaryGetOwnProperty: require('./2019/OrdinaryGetOwnProperty'),
	OrdinaryGetPrototypeOf: require('./2019/OrdinaryGetPrototypeOf'),
	OrdinarySetPrototypeOf: require('./2019/OrdinarySetPrototypeOf'),
	OrdinaryHasInstance: require('./2019/OrdinaryHasInstance'),
	OrdinaryHasProperty: require('./2019/OrdinaryHasProperty'),
	PromiseResolve: require('./2019/PromiseResolve'),
	RegExpExec: require('./2019/RegExpExec'),
	RequireObjectCoercible: require('./2019/RequireObjectCoercible'),
	SameValue: require('./2019/SameValue'),
	SameValueNonNumber: require('./2019/SameValueNonNumber'),
	SameValueZero: require('./2019/SameValueZero'),
	SecFromTime: require('./2019/SecFromTime'),
	Set: require('./2019/Set'),
	SetFunctionName: require('./2019/SetFunctionName'),
	SetIntegrityLevel: require('./2019/SetIntegrityLevel'),
	SpeciesConstructor: require('./2019/SpeciesConstructor'),
	SymbolDescriptiveString: require('./2019/SymbolDescriptiveString'),
	TestIntegrityLevel: require('./2019/TestIntegrityLevel'),
	thisBooleanValue: require('./2019/thisBooleanValue'),
	thisNumberValue: require('./2019/thisNumberValue'),
	thisStringValue: require('./2019/thisStringValue'),
	thisSymbolValue: require('./2019/thisSymbolValue'),
	thisTimeValue: require('./2019/thisTimeValue'),
	TimeClip: require('./2019/TimeClip'),
	TimeFromYear: require('./2019/TimeFromYear'),
	TimeString: require('./2019/TimeString'),
	TimeWithinDay: require('./2019/TimeWithinDay'),
	ToBoolean: require('./2019/ToBoolean'),
	ToDateString: require('./2019/ToDateString'),
	ToIndex: require('./2019/ToIndex'),
	ToInt16: require('./2019/ToInt16'),
	ToInt32: require('./2019/ToInt32'),
	ToInt8: require('./2019/ToInt8'),
	ToInteger: require('./2019/ToInteger'),
	ToLength: require('./2019/ToLength'),
	ToNumber: require('./2019/ToNumber'),
	ToObject: require('./2019/ToObject'),
	ToPrimitive: require('./2019/ToPrimitive'),
	ToPropertyDescriptor: require('./2019/ToPropertyDescriptor'),
	ToPropertyKey: require('./2019/ToPropertyKey'),
	ToString: require('./2019/ToString'),
	ToUint16: require('./2019/ToUint16'),
	ToUint32: require('./2019/ToUint32'),
	ToUint8: require('./2019/ToUint8'),
	ToUint8Clamp: require('./2019/ToUint8Clamp'),
	TrimString: require('./2019/TrimString'),
	Type: require('./2019/Type'),
	ValidateAndApplyPropertyDescriptor: require('./2019/ValidateAndApplyPropertyDescriptor'),
	WeekDay: require('./2019/WeekDay'),
	YearFromTime: require('./2019/YearFromTime')
};

module.exports = ES2019;

}, function(modId) { var map = {"./2019/AbstractEqualityComparison":1576493739324,"./2019/AbstractRelationalComparison":1576493739328,"./2019/StrictEqualityComparison":1576493739329,"./2019/AddEntriesFromIterable":1576493739330,"./2019/AdvanceStringIndex":1576493739336,"./2019/ArrayCreate":1576493739350,"./2019/ArraySetLength":1576493739351,"./2019/ArraySpeciesCreate":1576493739365,"./2019/Call":1576493739331,"./2019/CanonicalNumericIndexString":1576493739367,"./2019/CompletePropertyDescriptor":1576493739368,"./2019/CopyDataProperties":1576493739369,"./2019/CreateDataProperty":1576493739370,"./2019/CreateDataPropertyOrThrow":1576493739371,"./2019/CreateHTML":1576493739372,"./2019/CreateIterResultObject":1576493739373,"./2019/CreateListFromArrayLike":1576493739374,"./2019/CreateMethodProperty":1576493739377,"./2019/DateFromTime":1576493739378,"./2019/DateString":1576493739386,"./2019/Day":1576493739380,"./2019/DayFromYear":1576493739381,"./2019/DaysInYear":1576493739384,"./2019/DayWithinYear":1576493739379,"./2019/DefinePropertyOrThrow":1576493739388,"./2019/DeletePropertyOrThrow":1576493739389,"./2019/EnumerableOwnPropertyNames":1576493739390,"./2019/FlattenIntoArray":1576493739391,"./2019/FromPropertyDescriptor":1576493739358,"./2019/Get":1576493739333,"./2019/GetIterator":1576493739335,"./2019/GetMethod":1576493739338,"./2019/GetOwnPropertyKeys":1576493739393,"./2019/GetPrototypeFromConstructor":1576493739394,"./2019/GetSubstitution":1576493739395,"./2019/GetV":1576493739339,"./2019/HasOwnProperty":1576493739396,"./2019/HasProperty":1576493739392,"./2019/HourFromTime":1576493739397,"./2019/InLeapYear":1576493739383,"./2019/InstanceofOperator":1576493739398,"./2019/Invoke":1576493739348,"./2019/IsAccessorDescriptor":1576493739352,"./2019/IsArray":1576493739342,"./2019/IsCallable":1576493739332,"./2019/IsConcatSpreadable":1576493739400,"./2019/IsConstructor":1576493739366,"./2019/IsDataDescriptor":1576493739353,"./2019/IsExtensible":1576493739355,"./2019/IsGenericDescriptor":1576493739359,"./2019/IsInteger":1576493739337,"./2019/IsPromise":1576493739401,"./2019/IsPropertyKey":1576493739334,"./2019/IsRegExp":1576493739362,"./2019/IsStringPrefix":1576493739402,"./2019/IterableToList":1576493739403,"./2019/IteratorClose":1576493739343,"./2019/IteratorComplete":1576493739345,"./2019/IteratorNext":1576493739347,"./2019/IteratorStep":1576493739344,"./2019/IteratorValue":1576493739349,"./2019/MakeDate":1576493739404,"./2019/MakeDay":1576493739405,"./2019/MakeTime":1576493739406,"./2019/MinFromTime":1576493739407,"./2019/modulo":1576493739408,"./2019/MonthFromTime":1576493739385,"./2019/msFromTime":1576493739409,"./2019/NumberToString":1576493739410,"./2019/ObjectCreate":1576493739411,"./2019/OrdinaryDefineOwnProperty":1576493739354,"./2019/OrdinaryGetOwnProperty":1576493739361,"./2019/OrdinaryGetPrototypeOf":1576493739412,"./2019/OrdinarySetPrototypeOf":1576493739413,"./2019/OrdinaryHasInstance":1576493739399,"./2019/OrdinaryHasProperty":1576493739414,"./2019/PromiseResolve":1576493739415,"./2019/RegExpExec":1576493739416,"./2019/RequireObjectCoercible":1576493739341,"./2019/SameValue":1576493739360,"./2019/SameValueNonNumber":1576493739417,"./2019/SameValueZero":1576493739418,"./2019/SecFromTime":1576493739419,"./2019/Set":1576493739420,"./2019/SetFunctionName":1576493739421,"./2019/SetIntegrityLevel":1576493739422,"./2019/SpeciesConstructor":1576493739423,"./2019/SymbolDescriptiveString":1576493739424,"./2019/TestIntegrityLevel":1576493739425,"./2019/thisBooleanValue":1576493739426,"./2019/thisNumberValue":1576493739427,"./2019/thisStringValue":1576493739428,"./2019/thisSymbolValue":1576493739429,"./2019/thisTimeValue":1576493739430,"./2019/TimeClip":1576493739431,"./2019/TimeFromYear":1576493739432,"./2019/TimeString":1576493739433,"./2019/TimeWithinDay":1576493739434,"./2019/ToBoolean":1576493739346,"./2019/ToDateString":1576493739435,"./2019/ToIndex":1576493739436,"./2019/ToInt16":1576493739437,"./2019/ToInt32":1576493739439,"./2019/ToInt8":1576493739440,"./2019/ToInteger":1576493739376,"./2019/ToLength":1576493739375,"./2019/ToNumber":1576493739325,"./2019/ToObject":1576493739340,"./2019/ToPrimitive":1576493739326,"./2019/ToPropertyDescriptor":1576493739356,"./2019/ToPropertyKey":1576493739442,"./2019/ToString":1576493739363,"./2019/ToUint16":1576493739438,"./2019/ToUint32":1576493739364,"./2019/ToUint8":1576493739441,"./2019/ToUint8Clamp":1576493739443,"./2019/TrimString":1576493739444,"./2019/Type":1576493739327,"./2019/ValidateAndApplyPropertyDescriptor":1576493739357,"./2019/WeekDay":1576493739387,"./2019/YearFromTime":1576493739382}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739324, function(require, module, exports) {


var ToNumber = require('./ToNumber');
var ToPrimitive = require('./ToPrimitive');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-abstract-equality-comparison

module.exports = function AbstractEqualityComparison(x, y) {
	var xType = Type(x);
	var yType = Type(y);
	if (xType === yType) {
		return x === y; // ES6+ specified this shortcut anyways.
	}
	if (x == null && y == null) {
		return true;
	}
	if (xType === 'Number' && yType === 'String') {
		return AbstractEqualityComparison(x, ToNumber(y));
	}
	if (xType === 'String' && yType === 'Number') {
		return AbstractEqualityComparison(ToNumber(x), y);
	}
	if (xType === 'Boolean') {
		return AbstractEqualityComparison(ToNumber(x), y);
	}
	if (yType === 'Boolean') {
		return AbstractEqualityComparison(x, ToNumber(y));
	}
	if ((xType === 'String' || xType === 'Number' || xType === 'Symbol') && yType === 'Object') {
		return AbstractEqualityComparison(x, ToPrimitive(y));
	}
	if (xType === 'Object' && (yType === 'String' || yType === 'Number' || yType === 'Symbol')) {
		return AbstractEqualityComparison(ToPrimitive(x), y);
	}
	return false;
};

}, function(modId) { var map = {"./ToNumber":1576493739325,"./ToPrimitive":1576493739326,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739325, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $Number = GetIntrinsic('%Number%');
var $RegExp = GetIntrinsic('%RegExp%');
var $parseInteger = GetIntrinsic('%parseInt%');

var callBound = require('../helpers/callBound');
var regexTester = require('../helpers/regexTester');
var isPrimitive = require('../helpers/isPrimitive');

var $strSlice = callBound('String.prototype.slice');
var isBinary = regexTester(/^0b[01]+$/i);
var isOctal = regexTester(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = regexTester(nonWSregex);

// whitespace from: https://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var $replace = callBound('String.prototype.replace');
var $trim = function (value) {
	return $replace(value, trimRegex, '');
};

var ToPrimitive = require('./ToPrimitive');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tonumber

module.exports = function ToNumber(argument) {
	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
	if (typeof value === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a number');
	}
	if (typeof value === 'string') {
		if (isBinary(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 2));
		} else if (isOctal(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 8));
		} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
			return NaN;
		} else {
			var trimmed = $trim(value);
			if (trimmed !== value) {
				return ToNumber(trimmed);
			}
		}
	}
	return $Number(value);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"../helpers/regexTester":1576493738861,"../helpers/isPrimitive":1576493738862,"./ToPrimitive":1576493739326}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739326, function(require, module, exports) {


var toPrimitive = require('es-to-primitive/es2015');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive

module.exports = function ToPrimitive(input) {
	if (arguments.length > 1) {
		return toPrimitive(input, arguments[1]);
	}
	return toPrimitive(input);
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739327, function(require, module, exports) {


var ES5Type = require('../5/Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tostring

module.exports = function Type(x) {
	if (typeof x === 'symbol') {
		return 'Symbol';
	}
	return ES5Type(x);
};

}, function(modId) { var map = {"../5/Type":1576493738809}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739328, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Number = GetIntrinsic('%Number%');
var $TypeError = GetIntrinsic('%TypeError%');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var isPrefixOf = require('../helpers/isPrefixOf');

var ToNumber = require('./ToNumber');
var ToPrimitive = require('./ToPrimitive');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/5.1/#sec-11.8.5

// eslint-disable-next-line max-statements
module.exports = function AbstractRelationalComparison(x, y, LeftFirst) {
	if (Type(LeftFirst) !== 'Boolean') {
		throw new $TypeError('Assertion failed: LeftFirst argument must be a Boolean');
	}
	var px;
	var py;
	if (LeftFirst) {
		px = ToPrimitive(x, $Number);
		py = ToPrimitive(y, $Number);
	} else {
		py = ToPrimitive(y, $Number);
		px = ToPrimitive(x, $Number);
	}
	var bothStrings = Type(px) === 'String' && Type(py) === 'String';
	if (!bothStrings) {
		var nx = ToNumber(px);
		var ny = ToNumber(py);
		if ($isNaN(nx) || $isNaN(ny)) {
			return undefined;
		}
		if ($isFinite(nx) && $isFinite(ny) && nx === ny) {
			return false;
		}
		if (nx === 0 && ny === 0) {
			return false;
		}
		if (nx === Infinity) {
			return false;
		}
		if (ny === Infinity) {
			return true;
		}
		if (ny === -Infinity) {
			return false;
		}
		if (nx === -Infinity) {
			return true;
		}
		return nx < ny; // by now, these are both nonzero, finite, and not equal
	}
	if (isPrefixOf(py, px)) {
		return false;
	}
	if (isPrefixOf(px, py)) {
		return true;
	}
	return px < py; // both strings, neither a prefix of the other. shortcut for steps c-f
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812,"../helpers/isPrefixOf":1576493738813,"./ToNumber":1576493739325,"./ToPrimitive":1576493739326,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739329, function(require, module, exports) {


var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6

module.exports = function StrictEqualityComparison(x, y) {
	var xType = Type(x);
	var yType = Type(y);
	if (xType !== yType) {
		return false;
	}
	if (xType === 'Undefined' || xType === 'Null') {
		return true;
	}
	return x === y; // shortcut for steps 4-7
};

}, function(modId) { var map = {"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739330, function(require, module, exports) {


var inspect = require('object-inspect');

var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Call = require('./Call');
var Get = require('./Get');
var GetIterator = require('./GetIterator');
var IsCallable = require('./IsCallable');
var IteratorClose = require('./IteratorClose');
var IteratorStep = require('./IteratorStep');
var IteratorValue = require('./IteratorValue');
var Type = require('./Type');

// https://tc39.es/ecma262/#sec-add-entries-from-iterable

module.exports = function AddEntriesFromIterable(target, iterable, adder) {
	if (!IsCallable(adder)) {
		throw new $TypeError('Assertion failed: `adder` is not callable');
	}
	if (iterable == null) {
		throw new $TypeError('Assertion failed: `iterable` is present, and not nullish');
	}
	var iteratorRecord = GetIterator(iterable);
	while (true) { // eslint-disable-line no-constant-condition
		var next = IteratorStep(iteratorRecord);
		if (!next) {
			return target;
		}
		var nextItem = IteratorValue(next);
		if (Type(nextItem) !== 'Object') {
			var error = new $TypeError('iterator next must return an Object, got ' + inspect(nextItem));
			return IteratorClose(
				iteratorRecord,
				function () { throw error; } // eslint-disable-line no-loop-func
			);
		}
		try {
			var k = Get(nextItem, '0');
			var v = Get(nextItem, '1');
			Call(adder, target, [k, v]);
		} catch (e) {
			return IteratorClose(
				iteratorRecord,
				function () { throw e; }
			);
		}
	}
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Call":1576493739331,"./Get":1576493739333,"./GetIterator":1576493739335,"./IsCallable":1576493739332,"./IteratorClose":1576493739343,"./IteratorStep":1576493739344,"./IteratorValue":1576493739349,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739331, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = require('object-inspect');

var IsCallable = require('./IsCallable');

// https://www.ecma-international.org/ecma-262/6.0/#sec-call

module.exports = function Call(F, V) {
	var args = arguments.length > 2 ? arguments[2] : [];
	if (!IsCallable(F)) {
		throw new $TypeError(inspect(F) + ' is not a function');
	}
	return F.apply(V, args);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsCallable":1576493739332}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739332, function(require, module, exports) {


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.11

module.exports = require('is-callable');

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739333, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = require('object-inspect');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

/**
 * 7.3.1 Get (O, P) - https://ecma-international.org/ecma-262/6.0/#sec-get-o-p
 * 1. Assert: Type(O) is Object.
 * 2. Assert: IsPropertyKey(P) is true.
 * 3. Return O.[[Get]](P, O).
 */

module.exports = function Get(O, P) {
	// 7.3.1.1
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	// 7.3.1.2
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true, got ' + inspect(P));
	}
	// 7.3.1.3
	return O[P];
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739334,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739334, function(require, module, exports) {


// https://www.ecma-international.org/ecma-262/6.0/#sec-ispropertykey

module.exports = function IsPropertyKey(argument) {
	return typeof argument === 'string' || typeof argument === 'symbol';
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739335, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var getIteratorMethod = require('../helpers/getIteratorMethod');
var AdvanceStringIndex = require('./AdvanceStringIndex');
var Call = require('./Call');
var GetMethod = require('./GetMethod');
var IsArray = require('./IsArray');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-getiterator

module.exports = function GetIterator(obj, method) {
	var actualMethod = method;
	if (arguments.length < 2) {
		actualMethod = getIteratorMethod(
			{
				AdvanceStringIndex: AdvanceStringIndex,
				GetMethod: GetMethod,
				IsArray: IsArray,
				Type: Type
			},
			obj
		);
	}
	var iterator = Call(actualMethod, obj);
	if (Type(iterator) !== 'Object') {
		throw new $TypeError('iterator must return an object');
	}

	return iterator;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/getIteratorMethod":1576493738919,"./AdvanceStringIndex":1576493739336,"./Call":1576493739331,"./GetMethod":1576493739338,"./IsArray":1576493739342,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739336, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var IsInteger = require('./IsInteger');
var Type = require('./Type');

var MAX_SAFE_INTEGER = require('../helpers/maxSafeInteger');

var $TypeError = GetIntrinsic('%TypeError%');

var $charCodeAt = require('../helpers/callBound')('String.prototype.charCodeAt');

// https://ecma-international.org/ecma-262/6.0/#sec-advancestringindex

module.exports = function AdvanceStringIndex(S, index, unicode) {
	if (Type(S) !== 'String') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	if (!IsInteger(index) || index < 0 || index > MAX_SAFE_INTEGER) {
		throw new $TypeError('Assertion failed: `length` must be an integer >= 0 and <= 2**53');
	}
	if (Type(unicode) !== 'Boolean') {
		throw new $TypeError('Assertion failed: `unicode` must be a Boolean');
	}
	if (!unicode) {
		return index + 1;
	}
	var length = S.length;
	if ((index + 1) >= length) {
		return index + 1;
	}

	var first = $charCodeAt(S, index);
	if (first < 0xD800 || first > 0xDBFF) {
		return index + 1;
	}

	var second = $charCodeAt(S, index + 1);
	if (second < 0xDC00 || second > 0xDFFF) {
		return index + 1;
	}

	return index + 2;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsInteger":1576493739337,"./Type":1576493739327,"../helpers/maxSafeInteger":1576493738869,"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739337, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var $floor = $Math.floor;
var $abs = $Math.abs;

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isinteger

module.exports = function IsInteger(argument) {
	if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
		return false;
	}
	var abs = $abs(argument);
	return $floor(abs) === abs;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739338, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var GetV = require('./GetV');
var IsCallable = require('./IsCallable');
var IsPropertyKey = require('./IsPropertyKey');

/**
 * 7.3.9 - https://ecma-international.org/ecma-262/6.0/#sec-getmethod
 * 1. Assert: IsPropertyKey(P) is true.
 * 2. Let func be GetV(O, P).
 * 3. ReturnIfAbrupt(func).
 * 4. If func is either undefined or null, return undefined.
 * 5. If IsCallable(func) is false, throw a TypeError exception.
 * 6. Return func.
 */

module.exports = function GetMethod(O, P) {
	// 7.3.9.1
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	// 7.3.9.2
	var func = GetV(O, P);

	// 7.3.9.4
	if (func == null) {
		return void 0;
	}

	// 7.3.9.5
	if (!IsCallable(func)) {
		throw new $TypeError(P + 'is not a function');
	}

	// 7.3.9.6
	return func;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./GetV":1576493739339,"./IsCallable":1576493739332,"./IsPropertyKey":1576493739334}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739339, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var ToObject = require('./ToObject');

/**
 * 7.3.2 GetV (V, P)
 * 1. Assert: IsPropertyKey(P) is true.
 * 2. Let O be ToObject(V).
 * 3. ReturnIfAbrupt(O).
 * 4. Return O.[[Get]](P, V).
 */

module.exports = function GetV(V, P) {
	// 7.3.2.1
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	// 7.3.2.2-3
	var O = ToObject(V);

	// 7.3.2.4
	return O[P];
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739334,"./ToObject":1576493739340}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739340, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Object = GetIntrinsic('%Object%');

var RequireObjectCoercible = require('./RequireObjectCoercible');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toobject

module.exports = function ToObject(value) {
	RequireObjectCoercible(value);
	return $Object(value);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./RequireObjectCoercible":1576493739341}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739341, function(require, module, exports) {


module.exports = require('../5/CheckObjectCoercible');

}, function(modId) { var map = {"../5/CheckObjectCoercible":1576493738817}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739342, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Array = GetIntrinsic('%Array%');

// eslint-disable-next-line global-require
var toStr = !$Array.isArray && require('../helpers/callBound')('Object.prototype.toString');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isarray

module.exports = $Array.isArray || function IsArray(argument) {
	return toStr(argument) === '[object Array]';
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739343, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Call = require('./Call');
var GetMethod = require('./GetMethod');
var IsCallable = require('./IsCallable');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorclose

module.exports = function IteratorClose(iterator, completion) {
	if (Type(iterator) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(iterator) is not Object');
	}
	if (!IsCallable(completion)) {
		throw new $TypeError('Assertion failed: completion is not a thunk for a Completion Record');
	}
	var completionThunk = completion;

	var iteratorReturn = GetMethod(iterator, 'return');

	if (typeof iteratorReturn === 'undefined') {
		return completionThunk();
	}

	var completionRecord;
	try {
		var innerResult = Call(iteratorReturn, iterator, []);
	} catch (e) {
		// if we hit here, then "e" is the innerResult completion that needs re-throwing

		// if the completion is of type "throw", this will throw.
		completionRecord = completionThunk();
		completionThunk = null; // ensure it's not called twice.

		// if not, then return the innerResult completion
		throw e;
	}
	completionRecord = completionThunk(); // if innerResult worked, then throw if the completion does
	completionThunk = null; // ensure it's not called twice.

	if (Type(innerResult) !== 'Object') {
		throw new $TypeError('iterator .return must return an object');
	}

	return completionRecord;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Call":1576493739331,"./GetMethod":1576493739338,"./IsCallable":1576493739332,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739344, function(require, module, exports) {


var IteratorComplete = require('./IteratorComplete');
var IteratorNext = require('./IteratorNext');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorstep

module.exports = function IteratorStep(iterator) {
	var result = IteratorNext(iterator);
	var done = IteratorComplete(result);
	return done === true ? false : result;
};


}, function(modId) { var map = {"./IteratorComplete":1576493739345,"./IteratorNext":1576493739347}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739345, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var ToBoolean = require('./ToBoolean');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorcomplete

module.exports = function IteratorComplete(iterResult) {
	if (Type(iterResult) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
	}
	return ToBoolean(Get(iterResult, 'done'));
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739333,"./ToBoolean":1576493739346,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739346, function(require, module, exports) {


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.2

module.exports = function ToBoolean(value) { return !!value; };

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739347, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Invoke = require('./Invoke');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratornext

module.exports = function IteratorNext(iterator, value) {
	var result = Invoke(iterator, 'next', arguments.length < 2 ? [] : [value]);
	if (Type(result) !== 'Object') {
		throw new $TypeError('iterator next must return an object');
	}
	return result;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Invoke":1576493739348,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739348, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $arraySlice = require('../helpers/callBound')('Array.prototype.slice');

var Call = require('./Call');
var GetV = require('./GetV');
var IsPropertyKey = require('./IsPropertyKey');

// https://ecma-international.org/ecma-262/6.0/#sec-invoke

module.exports = function Invoke(O, P) {
	if (!IsPropertyKey(P)) {
		throw new $TypeError('P must be a Property Key');
	}
	var argumentsList = $arraySlice(arguments, 2);
	var func = GetV(O, P);
	return Call(func, O, argumentsList);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Call":1576493739331,"./GetV":1576493739339,"./IsPropertyKey":1576493739334}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739349, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-iteratorvalue

module.exports = function IteratorValue(iterResult) {
	if (Type(iterResult) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
	}
	return Get(iterResult, 'value');
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739333,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739350, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $ArrayPrototype = GetIntrinsic('%Array.prototype%');
var $RangeError = GetIntrinsic('%RangeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');
var $TypeError = GetIntrinsic('%TypeError%');

var IsInteger = require('./IsInteger');

var MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1;

var $setProto = GetIntrinsic('%Object.setPrototypeOf%') || (
	// eslint-disable-next-line no-proto, no-negated-condition
	[].__proto__ !== $ArrayPrototype
		? null
		: function (O, proto) {
			O.__proto__ = proto; // eslint-disable-line no-proto, no-param-reassign
			return O;
		}
);

// https://www.ecma-international.org/ecma-262/6.0/#sec-arraycreate

module.exports = function ArrayCreate(length) {
	if (!IsInteger(length) || length < 0) {
		throw new $TypeError('Assertion failed: `length` must be an integer Number >= 0');
	}
	if (length > MAX_ARRAY_LENGTH) {
		throw new $RangeError('length is greater than (2**32 - 1)');
	}
	var proto = arguments.length > 1 ? arguments[1] : $ArrayPrototype;
	var A = []; // steps 5 - 7, and 9
	if (proto !== $ArrayPrototype) { // step 8
		if (!$setProto) {
			throw new $SyntaxError('ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]');
		}
		$setProto(A, proto);
	}
	if (length !== 0) { // bypasses the need for step 2
		A.length = length;
	}
	/* step 10, the above as a shortcut for the below
    OrdinaryDefineOwnProperty(A, 'length', {
        '[[Configurable]]': false,
        '[[Enumerable]]': false,
        '[[Value]]': length,
        '[[Writable]]': true
    });
    */
	return A;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsInteger":1576493739337}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739351, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $RangeError = GetIntrinsic('%RangeError%');
var $TypeError = GetIntrinsic('%TypeError%');

var assign = require('object.assign');

var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');

var IsArray = require('./IsArray');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var OrdinaryDefineOwnProperty = require('./OrdinaryDefineOwnProperty');
var OrdinaryGetOwnProperty = require('./OrdinaryGetOwnProperty');
var ToNumber = require('./ToNumber');
var ToString = require('./ToString');
var ToUint32 = require('./ToUint32');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-arraysetlength

// eslint-disable-next-line max-statements, max-lines-per-function
module.exports = function ArraySetLength(A, Desc) {
	if (!IsArray(A)) {
		throw new $TypeError('Assertion failed: A must be an Array');
	}
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	if (!('[[Value]]' in Desc)) {
		return OrdinaryDefineOwnProperty(A, 'length', Desc);
	}
	var newLenDesc = assign({}, Desc);
	var newLen = ToUint32(Desc['[[Value]]']);
	var numberLen = ToNumber(Desc['[[Value]]']);
	if (newLen !== numberLen) {
		throw new $RangeError('Invalid array length');
	}
	newLenDesc['[[Value]]'] = newLen;
	var oldLenDesc = OrdinaryGetOwnProperty(A, 'length');
	if (!IsDataDescriptor(oldLenDesc)) {
		throw new $TypeError('Assertion failed: an array had a non-data descriptor on `length`');
	}
	var oldLen = oldLenDesc['[[Value]]'];
	if (newLen >= oldLen) {
		return OrdinaryDefineOwnProperty(A, 'length', newLenDesc);
	}
	if (!oldLenDesc['[[Writable]]']) {
		return false;
	}
	var newWritable;
	if (!('[[Writable]]' in newLenDesc) || newLenDesc['[[Writable]]']) {
		newWritable = true;
	} else {
		newWritable = false;
		newLenDesc['[[Writable]]'] = true;
	}
	var succeeded = OrdinaryDefineOwnProperty(A, 'length', newLenDesc);
	if (!succeeded) {
		return false;
	}
	while (newLen < oldLen) {
		oldLen -= 1;
		// eslint-disable-next-line no-param-reassign
		var deleteSucceeded = delete A[ToString(oldLen)];
		if (!deleteSucceeded) {
			newLenDesc['[[Value]]'] = oldLen + 1;
			if (!newWritable) {
				newLenDesc['[[Writable]]'] = false;
				OrdinaryDefineOwnProperty(A, 'length', newLenDesc);
				return false;
			}
		}
	}
	if (!newWritable) {
		return OrdinaryDefineOwnProperty(A, 'length', { '[[Writable]]': false });
	}
	return true;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPropertyDescriptor":1576493738836,"./IsArray":1576493739342,"./IsAccessorDescriptor":1576493739352,"./IsDataDescriptor":1576493739353,"./OrdinaryDefineOwnProperty":1576493739354,"./OrdinaryGetOwnProperty":1576493739361,"./ToNumber":1576493739325,"./ToString":1576493739363,"./ToUint32":1576493739364,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739352, function(require, module, exports) {


var has = require('has');

var assertRecord = require('../helpers/assertRecord');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isaccessordescriptor

module.exports = function IsAccessorDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
		return false;
	}

	return true;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739353, function(require, module, exports) {


var has = require('has');

var assertRecord = require('../helpers/assertRecord');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isdatadescriptor

module.exports = function IsDataDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
		return false;
	}

	return true;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739354, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $TypeError = GetIntrinsic('%TypeError%');

var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');

var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsExtensible = require('./IsExtensible');
var IsPropertyKey = require('./IsPropertyKey');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');
var ValidateAndApplyPropertyDescriptor = require('./ValidateAndApplyPropertyDescriptor');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinarydefineownproperty

module.exports = function OrdinaryDefineOwnProperty(O, P, Desc) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	var desc = $gOPD(O, P);
	var current = desc && ToPropertyDescriptor(desc);
	var extensible = IsExtensible(O);
	return ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPropertyDescriptor":1576493738836,"./IsAccessorDescriptor":1576493739352,"./IsDataDescriptor":1576493739353,"./IsExtensible":1576493739355,"./IsPropertyKey":1576493739334,"./ToPropertyDescriptor":1576493739356,"./Type":1576493739327,"./ValidateAndApplyPropertyDescriptor":1576493739357}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739355, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Object = GetIntrinsic('%Object%');

var isPrimitive = require('../helpers/isPrimitive');

var $preventExtensions = $Object.preventExtensions;
var $isExtensible = $Object.isExtensible;

// https://www.ecma-international.org/ecma-262/6.0/#sec-isextensible-o

module.exports = $preventExtensions
	? function IsExtensible(obj) {
		return !isPrimitive(obj) && $isExtensible(obj);
	}
	: function IsExtensible(obj) { // eslint-disable-line no-unused-vars
		return true;
	};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPrimitive":1576493738862}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739356, function(require, module, exports) {


var has = require('has');

var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Type = require('./Type');
var ToBoolean = require('./ToBoolean');
var IsCallable = require('./IsCallable');

// https://ecma-international.org/ecma-262/5.1/#sec-8.10.5

module.exports = function ToPropertyDescriptor(Obj) {
	if (Type(Obj) !== 'Object') {
		throw new $TypeError('ToPropertyDescriptor requires an object');
	}

	var desc = {};
	if (has(Obj, 'enumerable')) {
		desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
	}
	if (has(Obj, 'configurable')) {
		desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
	}
	if (has(Obj, 'value')) {
		desc['[[Value]]'] = Obj.value;
	}
	if (has(Obj, 'writable')) {
		desc['[[Writable]]'] = ToBoolean(Obj.writable);
	}
	if (has(Obj, 'get')) {
		var getter = Obj.get;
		if (typeof getter !== 'undefined' && !IsCallable(getter)) {
			throw new TypeError('getter must be a function');
		}
		desc['[[Get]]'] = getter;
	}
	if (has(Obj, 'set')) {
		var setter = Obj.set;
		if (typeof setter !== 'undefined' && !IsCallable(setter)) {
			throw new $TypeError('setter must be a function');
		}
		desc['[[Set]]'] = setter;
	}

	if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
		throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
	}
	return desc;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493739327,"./ToBoolean":1576493739346,"./IsCallable":1576493739332}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739357, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');
var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');
var isSamePropertyDescriptor = require('../helpers/isSamePropertyDescriptor');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsGenericDescriptor = require('./IsGenericDescriptor');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-validateandapplypropertydescriptor
// https://www.ecma-international.org/ecma-262/8.0/#sec-validateandapplypropertydescriptor

// eslint-disable-next-line max-lines-per-function, max-statements, max-params
module.exports = function ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current) {
	// this uses the ES2017+ logic, since it fixes a number of bugs in the ES2015 logic.
	var oType = Type(O);
	if (oType !== 'Undefined' && oType !== 'Object') {
		throw new $TypeError('Assertion failed: O must be undefined or an Object');
	}
	if (Type(extensible) !== 'Boolean') {
		throw new $TypeError('Assertion failed: extensible must be a Boolean');
	}
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	if (Type(current) !== 'Undefined' && !isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, current)) {
		throw new $TypeError('Assertion failed: current must be a Property Descriptor, or undefined');
	}
	if (oType !== 'Undefined' && !IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: if O is not undefined, P must be a Property Key');
	}
	if (Type(current) === 'Undefined') {
		if (!extensible) {
			return false;
		}
		if (IsGenericDescriptor(Desc) || IsDataDescriptor(Desc)) {
			if (oType !== 'Undefined') {
				DefineOwnProperty(
					IsDataDescriptor,
					SameValue,
					FromPropertyDescriptor,
					O,
					P,
					{
						'[[Configurable]]': Desc['[[Configurable]]'],
						'[[Enumerable]]': Desc['[[Enumerable]]'],
						'[[Value]]': Desc['[[Value]]'],
						'[[Writable]]': Desc['[[Writable]]']
					}
				);
			}
		} else {
			if (!IsAccessorDescriptor(Desc)) {
				throw new $TypeError('Assertion failed: Desc is not an accessor descriptor');
			}
			if (oType !== 'Undefined') {
				return DefineOwnProperty(
					IsDataDescriptor,
					SameValue,
					FromPropertyDescriptor,
					O,
					P,
					Desc
				);
			}
		}
		return true;
	}
	if (IsGenericDescriptor(Desc) && !('[[Configurable]]' in Desc) && !('[[Enumerable]]' in Desc)) {
		return true;
	}
	if (isSamePropertyDescriptor({ SameValue: SameValue }, Desc, current)) {
		return true; // removed by ES2017, but should still be correct
	}
	// "if every field in Desc is absent, return true" can't really match the assertion that it's a Property Descriptor
	if (!current['[[Configurable]]']) {
		if (Desc['[[Configurable]]']) {
			return false;
		}
		if ('[[Enumerable]]' in Desc && !Desc['[[Enumerable]]'] === !!current['[[Enumerable]]']) {
			return false;
		}
	}
	if (IsGenericDescriptor(Desc)) {
		// no further validation is required.
	} else if (IsDataDescriptor(current) !== IsDataDescriptor(Desc)) {
		if (!current['[[Configurable]]']) {
			return false;
		}
		if (IsDataDescriptor(current)) {
			if (oType !== 'Undefined') {
				DefineOwnProperty(
					IsDataDescriptor,
					SameValue,
					FromPropertyDescriptor,
					O,
					P,
					{
						'[[Configurable]]': current['[[Configurable]]'],
						'[[Enumerable]]': current['[[Enumerable]]'],
						'[[Get]]': undefined
					}
				);
			}
		} else if (oType !== 'Undefined') {
			DefineOwnProperty(
				IsDataDescriptor,
				SameValue,
				FromPropertyDescriptor,
				O,
				P,
				{
					'[[Configurable]]': current['[[Configurable]]'],
					'[[Enumerable]]': current['[[Enumerable]]'],
					'[[Value]]': undefined
				}
			);
		}
	} else if (IsDataDescriptor(current) && IsDataDescriptor(Desc)) {
		if (!current['[[Configurable]]'] && !current['[[Writable]]']) {
			if ('[[Writable]]' in Desc && Desc['[[Writable]]']) {
				return false;
			}
			if ('[[Value]]' in Desc && !SameValue(Desc['[[Value]]'], current['[[Value]]'])) {
				return false;
			}
			return true;
		}
	} else if (IsAccessorDescriptor(current) && IsAccessorDescriptor(Desc)) {
		if (!current['[[Configurable]]']) {
			if ('[[Set]]' in Desc && !SameValue(Desc['[[Set]]'], current['[[Set]]'])) {
				return false;
			}
			if ('[[Get]]' in Desc && !SameValue(Desc['[[Get]]'], current['[[Get]]'])) {
				return false;
			}
			return true;
		}
	} else {
		throw new $TypeError('Assertion failed: current and Desc are not both data, both accessors, or one accessor and one data.');
	}
	if (oType !== 'Undefined') {
		return DefineOwnProperty(
			IsDataDescriptor,
			SameValue,
			FromPropertyDescriptor,
			O,
			P,
			Desc
		);
	}
	return true;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/DefineOwnProperty":1576493738882,"../helpers/isPropertyDescriptor":1576493738836,"../helpers/isSamePropertyDescriptor":1576493738883,"./FromPropertyDescriptor":1576493739358,"./IsAccessorDescriptor":1576493739352,"./IsDataDescriptor":1576493739353,"./IsGenericDescriptor":1576493739359,"./IsPropertyKey":1576493739334,"./SameValue":1576493739360,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739358, function(require, module, exports) {


var assertRecord = require('../helpers/assertRecord');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-frompropertydescriptor

module.exports = function FromPropertyDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return Desc;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	var obj = {};
	if ('[[Value]]' in Desc) {
		obj.value = Desc['[[Value]]'];
	}
	if ('[[Writable]]' in Desc) {
		obj.writable = Desc['[[Writable]]'];
	}
	if ('[[Get]]' in Desc) {
		obj.get = Desc['[[Get]]'];
	}
	if ('[[Set]]' in Desc) {
		obj.set = Desc['[[Set]]'];
	}
	if ('[[Enumerable]]' in Desc) {
		obj.enumerable = Desc['[[Enumerable]]'];
	}
	if ('[[Configurable]]' in Desc) {
		obj.configurable = Desc['[[Configurable]]'];
	}
	return obj;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739359, function(require, module, exports) {


var assertRecord = require('../helpers/assertRecord');

var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isgenericdescriptor

module.exports = function IsGenericDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!IsAccessorDescriptor(Desc) && !IsDataDescriptor(Desc)) {
		return true;
	}

	return false;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./IsAccessorDescriptor":1576493739352,"./IsDataDescriptor":1576493739353,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739360, function(require, module, exports) {


var $isNaN = require('../helpers/isNaN');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.12

module.exports = function SameValue(x, y) {
	if (x === y) { // 0 === -0, but they are not identical.
		if (x === 0) { return 1 / x === 1 / y; }
		return true;
	}
	return $isNaN(x) && $isNaN(y);
};

}, function(modId) { var map = {"../helpers/isNaN":1576493738811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739361, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $TypeError = GetIntrinsic('%TypeError%');

var callBound = require('../helpers/callBound');

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

var has = require('has');

var IsArray = require('./IsArray');
var IsPropertyKey = require('./IsPropertyKey');
var IsRegExp = require('./IsRegExp');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinarygetownproperty

module.exports = function OrdinaryGetOwnProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!has(O, P)) {
		return void 0;
	}
	if (!$gOPD) {
		// ES3 fallback
		var arrayLength = IsArray(O) && P === 'length';
		var regexLastIndex = IsRegExp(O) && P === 'lastIndex';
		return {
			'[[Configurable]]': !(arrayLength || regexLastIndex),
			'[[Enumerable]]': $isEnumerable(O, P),
			'[[Value]]': O[P],
			'[[Writable]]': true
		};
	}
	return ToPropertyDescriptor($gOPD(O, P));
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./IsArray":1576493739342,"./IsPropertyKey":1576493739334,"./IsRegExp":1576493739362,"./ToPropertyDescriptor":1576493739356,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739362, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $match = GetIntrinsic('%Symbol.match%', true);

var hasRegExpMatcher = require('is-regex');

var ToBoolean = require('./ToBoolean');

// https://ecma-international.org/ecma-262/6.0/#sec-isregexp

module.exports = function IsRegExp(argument) {
	if (!argument || typeof argument !== 'object') {
		return false;
	}
	if ($match) {
		var isRegExp = argument[$match];
		if (typeof isRegExp !== 'undefined') {
			return ToBoolean(isRegExp);
		}
	}
	return hasRegExpMatcher(argument);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToBoolean":1576493739346}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739363, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $String = GetIntrinsic('%String%');
var $TypeError = GetIntrinsic('%TypeError%');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tostring

module.exports = function ToString(argument) {
	if (typeof argument === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a string');
	}
	return $String(argument);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739364, function(require, module, exports) {


var ToNumber = require('./ToNumber');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.6

module.exports = function ToUint32(x) {
	return ToNumber(x) >>> 0;
};

}, function(modId) { var map = {"./ToNumber":1576493739325}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739365, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Array = GetIntrinsic('%Array%');
var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var IsArray = require('./IsArray');
var IsConstructor = require('./IsConstructor');
var IsInteger = require('./IsInteger');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-arrayspeciescreate

module.exports = function ArraySpeciesCreate(originalArray, length) {
	if (!IsInteger(length) || length < 0) {
		throw new $TypeError('Assertion failed: length must be an integer >= 0');
	}
	var len = length === 0 ? 0 : length;
	var C;
	var isArray = IsArray(originalArray);
	if (isArray) {
		C = Get(originalArray, 'constructor');
		// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
		// if (IsConstructor(C)) {
		// 	if C is another realm's Array, C = undefined
		// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
		// }
		if ($species && Type(C) === 'Object') {
			C = Get(C, $species);
			if (C === null) {
				C = void 0;
			}
		}
	}
	if (typeof C === 'undefined') {
		return $Array(len);
	}
	if (!IsConstructor(C)) {
		throw new $TypeError('C must be a constructor');
	}
	return new C(len); // Construct(C, len);
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739333,"./IsArray":1576493739342,"./IsConstructor":1576493739366,"./IsInteger":1576493739337,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739366, function(require, module, exports) {


// https://www.ecma-international.org/ecma-262/6.0/#sec-isconstructor

module.exports = function IsConstructor(argument) {
	return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739367, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var SameValue = require('./SameValue');
var ToNumber = require('./ToNumber');
var ToString = require('./ToString');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring

module.exports = function CanonicalNumericIndexString(argument) {
	if (Type(argument) !== 'String') {
		throw new $TypeError('Assertion failed: `argument` must be a String');
	}
	if (argument === '-0') { return -0; }
	var n = ToNumber(argument);
	if (SameValue(ToString(n), argument)) { return n; }
	return void 0;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./SameValue":1576493739360,"./ToNumber":1576493739325,"./ToString":1576493739363,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739368, function(require, module, exports) {


var has = require('has');

var assertRecord = require('../helpers/assertRecord');

var IsDataDescriptor = require('./IsDataDescriptor');
var IsGenericDescriptor = require('./IsGenericDescriptor');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-completepropertydescriptor

module.exports = function CompletePropertyDescriptor(Desc) {
	/* eslint no-param-reassign: 0 */
	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (IsGenericDescriptor(Desc) || IsDataDescriptor(Desc)) {
		if (!has(Desc, '[[Value]]')) {
			Desc['[[Value]]'] = void 0;
		}
		if (!has(Desc, '[[Writable]]')) {
			Desc['[[Writable]]'] = false;
		}
	} else {
		if (!has(Desc, '[[Get]]')) {
			Desc['[[Get]]'] = void 0;
		}
		if (!has(Desc, '[[Set]]')) {
			Desc['[[Set]]'] = void 0;
		}
	}
	if (!has(Desc, '[[Enumerable]]')) {
		Desc['[[Enumerable]]'] = false;
	}
	if (!has(Desc, '[[Configurable]]')) {
		Desc['[[Configurable]]'] = false;
	}
	return Desc;
};

}, function(modId) { var map = {"../helpers/assertRecord":1576493738830,"./IsDataDescriptor":1576493739353,"./IsGenericDescriptor":1576493739359,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739369, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var callBind = require('../helpers/callBind');
var callBound = require('../helpers/callBound');
var forEach = require('../helpers/forEach');

var $pushApply = callBind.apply(GetIntrinsic('%Array.prototype.push%'));
var $SymbolValueOf = callBound('Symbol.prototype.valueOf', true);
var $gOPS = $SymbolValueOf ? GetIntrinsic('%Object.getOwnPropertySymbols%') : null;

var keys = require('object-keys');

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

var IsArray = require('./IsArray');
var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

var OwnPropertyKeys = function OwnPropertyKeys(ES, source) {
	var ownKeys = keys(source);
	if ($gOPS) {
		$pushApply(ownKeys, $gOPS(source));
	}
	return ownKeys;
};

// https://www.ecma-international.org/ecma-262/9.0/#sec-copydataproperties

module.exports = function CopyDataProperties(target, source, excludedItems) {
	if (Type(target) !== 'Object') {
		throw new TypeError('Assertion failed: "target" must be an Object');
	}

	if (!IsArray(excludedItems)) {
		throw new TypeError('Assertion failed: "excludedItems" must be a List of Property Keys');
	}
	for (var i = 0; i < excludedItems.length; i += 1) {
		if (!IsPropertyKey(excludedItems[i])) {
			throw new TypeError('Assertion failed: "excludedItems" must be a List of Property Keys');
		}
	}

	if (typeof source === 'undefined' || source === null) {
		return target;
	}

	var ES = this;

	var fromObj = ES.ToObject(source);

	var sourceKeys = OwnPropertyKeys(ES, fromObj);
	forEach(sourceKeys, function (nextKey) {
		var excluded = false;

		forEach(excludedItems, function (e) {
			if (ES.SameValue(e, nextKey) === true) {
				excluded = true;
			}
		});

		var enumerable = $isEnumerable(fromObj, nextKey) || (
		// this is to handle string keys being non-enumerable in older engines
			typeof source === 'string'
            && nextKey >= 0
            && ES.IsInteger(ES.ToNumber(nextKey))
		);
		if (excluded === false && enumerable) {
			var propValue = ES.Get(fromObj, nextKey);
			ES.CreateDataProperty(target, nextKey, propValue);
		}
	});

	return target;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBind":1576493738815,"../helpers/callBound":1576493738814,"../helpers/forEach":1576493738956,"./IsArray":1576493739342,"./IsPropertyKey":1576493739334,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739370, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsExtensible = require('./IsExtensible');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-createdataproperty

module.exports = function CreateDataProperty(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var oldDesc = $gOPD(O, P);
	var extensible = oldDesc || IsExtensible(O);
	var immutable = oldDesc && (!oldDesc.writable || !oldDesc.configurable);
	if (immutable || !extensible) {
		return false;
	}
	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		{
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Value]]': V,
			'[[Writable]]': true
		}
	);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/DefineOwnProperty":1576493738882,"./FromPropertyDescriptor":1576493739358,"./IsDataDescriptor":1576493739353,"./IsExtensible":1576493739355,"./IsPropertyKey":1576493739334,"./SameValue":1576493739360,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739371, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var CreateDataProperty = require('./CreateDataProperty');
var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// // https://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow

module.exports = function CreateDataPropertyOrThrow(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var success = CreateDataProperty(O, P, V);
	if (!success) {
		throw new $TypeError('unable to create data property');
	}
	return success;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./CreateDataProperty":1576493739370,"./IsPropertyKey":1576493739334,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739372, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var callBound = require('../helpers/callBound');

var $replace = callBound('String.prototype.replace');

var RequireObjectCoercible = require('./RequireObjectCoercible');
var ToString = require('./ToString');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-createhtml

module.exports = function CreateHTML(string, tag, attribute, value) {
	if (Type(tag) !== 'String' || Type(attribute) !== 'String') {
		throw new $TypeError('Assertion failed: `tag` and `attribute` must be strings');
	}
	var str = RequireObjectCoercible(string);
	var S = ToString(str);
	var p1 = '<' + tag;
	if (attribute !== '') {
		var V = ToString(value);
		var escapedV = $replace(V, /\x22/g, '&quot;');
		p1 += '\x20' + attribute + '\x3D\x22' + escapedV + '\x22';
	}
	return p1 + '>' + S + '</' + tag + '>';
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./RequireObjectCoercible":1576493739341,"./ToString":1576493739363,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739373, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-createiterresultobject

module.exports = function CreateIterResultObject(value, done) {
	if (Type(done) !== 'Boolean') {
		throw new $TypeError('Assertion failed: Type(done) is not Boolean');
	}
	return {
		value: value,
		done: done
	};
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739374, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var callBound = require('../helpers/callBound');

var $TypeError = GetIntrinsic('%TypeError%');
var $indexOf = callBound('Array.prototype.indexOf');
var $push = callBound('Array.prototype.push');

var Get = require('./Get');
var IsArray = require('./IsArray');
var ToLength = require('./ToLength');
var ToString = require('./ToString');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-createlistfromarraylike
module.exports = function CreateListFromArrayLike(obj) {
	var elementTypes = arguments.length > 1
		? arguments[1]
		: ['Undefined', 'Null', 'Boolean', 'String', 'Symbol', 'Number', 'Object'];

	if (Type(obj) !== 'Object') {
		throw new $TypeError('Assertion failed: `obj` must be an Object');
	}
	if (!IsArray(elementTypes)) {
		throw new $TypeError('Assertion failed: `elementTypes`, if provided, must be an array');
	}
	var len = ToLength(Get(obj, 'length'));
	var list = [];
	var index = 0;
	while (index < len) {
		var indexName = ToString(index);
		var next = Get(obj, indexName);
		var nextType = Type(next);
		if ($indexOf(elementTypes, nextType) < 0) {
			throw new $TypeError('item type ' + nextType + ' is not a valid elementType');
		}
		$push(list, next);
		index += 1;
	}
	return list;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Get":1576493739333,"./IsArray":1576493739342,"./ToLength":1576493739375,"./ToString":1576493739363,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739375, function(require, module, exports) {


var MAX_SAFE_INTEGER = require('../helpers/maxSafeInteger');

var ToInteger = require('./ToInteger');

module.exports = function ToLength(argument) {
	var len = ToInteger(argument);
	if (len <= 0) { return 0; } // includes converting -0 to +0
	if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
	return len;
};

}, function(modId) { var map = {"../helpers/maxSafeInteger":1576493738869,"./ToInteger":1576493739376}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739376, function(require, module, exports) {


var ES5ToInteger = require('../5/ToInteger');

var ToNumber = require('./ToNumber');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tointeger

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	return ES5ToInteger(number);
};

}, function(modId) { var map = {"../5/ToInteger":1576493738839,"./ToNumber":1576493739325}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739377, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-createmethodproperty

module.exports = function CreateMethodProperty(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	var newDesc = {
		'[[Configurable]]': true,
		'[[Enumerable]]': false,
		'[[Value]]': V,
		'[[Writable]]': true
	};
	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		newDesc
	);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/DefineOwnProperty":1576493738882,"./FromPropertyDescriptor":1576493739358,"./IsDataDescriptor":1576493739353,"./IsPropertyKey":1576493739334,"./SameValue":1576493739360,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739378, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $EvalError = GetIntrinsic('%EvalError%');

var DayWithinYear = require('./DayWithinYear');
var InLeapYear = require('./InLeapYear');
var MonthFromTime = require('./MonthFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.5

module.exports = function DateFromTime(t) {
	var m = MonthFromTime(t);
	var d = DayWithinYear(t);
	if (m === 0) {
		return d + 1;
	}
	if (m === 1) {
		return d - 30;
	}
	var leap = InLeapYear(t);
	if (m === 2) {
		return d - 58 - leap;
	}
	if (m === 3) {
		return d - 89 - leap;
	}
	if (m === 4) {
		return d - 119 - leap;
	}
	if (m === 5) {
		return d - 150 - leap;
	}
	if (m === 6) {
		return d - 180 - leap;
	}
	if (m === 7) {
		return d - 211 - leap;
	}
	if (m === 8) {
		return d - 242 - leap;
	}
	if (m === 9) {
		return d - 272 - leap;
	}
	if (m === 10) {
		return d - 303 - leap;
	}
	if (m === 11) {
		return d - 333 - leap;
	}
	throw new $EvalError('Assertion failed: MonthFromTime returned an impossible value: ' + m);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./DayWithinYear":1576493739379,"./InLeapYear":1576493739383,"./MonthFromTime":1576493739385}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739379, function(require, module, exports) {


var Day = require('./Day');
var DayFromYear = require('./DayFromYear');
var YearFromTime = require('./YearFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.4

module.exports = function DayWithinYear(t) {
	return Day(t) - DayFromYear(YearFromTime(t));
};

}, function(modId) { var map = {"./Day":1576493739380,"./DayFromYear":1576493739381,"./YearFromTime":1576493739382}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739380, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var msPerDay = require('../helpers/timeConstants').msPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.2

module.exports = function Day(t) {
	return $floor(t / msPerDay);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739381, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function DayFromYear(y) {
	return (365 * (y - 1970)) + $floor((y - 1969) / 4) - $floor((y - 1901) / 100) + $floor((y - 1601) / 400);
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739382, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Date = GetIntrinsic('%Date%');

var callBound = require('../helpers/callBound');

var $getUTCFullYear = callBound('Date.prototype.getUTCFullYear');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function YearFromTime(t) {
	// largest y such that this.TimeFromYear(y) <= t
	return $getUTCFullYear(new $Date(t));
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739383, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $EvalError = GetIntrinsic('%EvalError%');

var DaysInYear = require('./DaysInYear');
var YearFromTime = require('./YearFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function InLeapYear(t) {
	var days = DaysInYear(YearFromTime(t));
	if (days === 365) {
		return 0;
	}
	if (days === 366) {
		return 1;
	}
	throw new $EvalError('Assertion failed: there are not 365 or 366 days in a year, got: ' + days);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./DaysInYear":1576493739384,"./YearFromTime":1576493739382}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739384, function(require, module, exports) {


var mod = require('../helpers/mod');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function DaysInYear(y) {
	if (mod(y, 4) !== 0) {
		return 365;
	}
	if (mod(y, 100) !== 0) {
		return 366;
	}
	if (mod(y, 400) !== 0) {
		return 365;
	}
	return 366;
};

}, function(modId) { var map = {"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739385, function(require, module, exports) {


var DayWithinYear = require('./DayWithinYear');
var InLeapYear = require('./InLeapYear');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.4

module.exports = function MonthFromTime(t) {
	var day = DayWithinYear(t);
	if (0 <= day && day < 31) {
		return 0;
	}
	var leap = InLeapYear(t);
	if (31 <= day && day < (59 + leap)) {
		return 1;
	}
	if ((59 + leap) <= day && day < (90 + leap)) {
		return 2;
	}
	if ((90 + leap) <= day && day < (120 + leap)) {
		return 3;
	}
	if ((120 + leap) <= day && day < (151 + leap)) {
		return 4;
	}
	if ((151 + leap) <= day && day < (181 + leap)) {
		return 5;
	}
	if ((181 + leap) <= day && day < (212 + leap)) {
		return 6;
	}
	if ((212 + leap) <= day && day < (243 + leap)) {
		return 7;
	}
	if ((243 + leap) <= day && day < (273 + leap)) {
		return 8;
	}
	if ((273 + leap) <= day && day < (304 + leap)) {
		return 9;
	}
	if ((304 + leap) <= day && day < (334 + leap)) {
		return 10;
	}
	if ((334 + leap) <= day && day < (365 + leap)) {
		return 11;
	}
};

}, function(modId) { var map = {"./DayWithinYear":1576493739379,"./InLeapYear":1576493739383}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739386, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var $isNaN = require('../helpers/isNaN');
var padTimeComponent = require('../helpers/padTimeComponent');

var Type = require('./Type');
var WeekDay = require('./WeekDay');
var MonthFromTime = require('./MonthFromTime');
var YearFromTime = require('./YearFromTime');
var DateFromTime = require('./DateFromTime');

// https://www.ecma-international.org/ecma-262/9.0/#sec-datestring

module.exports = function DateString(tv) {
	if (Type(tv) !== 'Number' || $isNaN(tv)) {
		throw new $TypeError('Assertion failed: `tv` must be a non-NaN Number');
	}
	var weekday = weekdays[WeekDay(tv)];
	var month = months[MonthFromTime(tv)];
	var day = padTimeComponent(DateFromTime(tv));
	var year = padTimeComponent(YearFromTime(tv), 4);
	return weekday + '\x20' + month + '\x20' + day + '\x20' + year;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"../helpers/padTimeComponent":1576493739256,"./Type":1576493739327,"./WeekDay":1576493739387,"./MonthFromTime":1576493739385,"./YearFromTime":1576493739382,"./DateFromTime":1576493739378}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739387, function(require, module, exports) {


var mod = require('../helpers/mod');

var Day = require('./Day');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.6

module.exports = function WeekDay(t) {
	return mod(Day(t) + 4, 7);
};

}, function(modId) { var map = {"../helpers/mod":1576493738826,"./Day":1576493739380}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739388, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');
var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-definepropertyorthrow

module.exports = function DefinePropertyOrThrow(O, P, desc) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	var Desc = isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, desc) ? desc : ToPropertyDescriptor(desc);
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc is not a valid Property Descriptor');
	}

	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		Desc
	);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPropertyDescriptor":1576493738836,"../helpers/DefineOwnProperty":1576493738882,"./FromPropertyDescriptor":1576493739358,"./IsAccessorDescriptor":1576493739352,"./IsDataDescriptor":1576493739353,"./IsPropertyKey":1576493739334,"./SameValue":1576493739360,"./ToPropertyDescriptor":1576493739356,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739389, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-deletepropertyorthrow

module.exports = function DeletePropertyOrThrow(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	// eslint-disable-next-line no-param-reassign
	var success = delete O[P];
	if (!success) {
		throw new $TypeError('Attempt to delete property failed.');
	}
	return success;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739334,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739390, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var objectKeys = require('object-keys');

var callBound = require('../helpers/callBound');

var callBind = require('../helpers/callBind');

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');
var $pushApply = callBind.apply(GetIntrinsic('%Array.prototype.push%'));

var forEach = require('../helpers/forEach');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/8.0/#sec-enumerableownproperties

module.exports = function EnumerableOwnProperties(O, kind) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	var keys = objectKeys(O);
	if (kind === 'key') {
		return keys;
	}
	if (kind === 'value' || kind === 'key+value') {
		var results = [];
		forEach(keys, function (key) {
			if ($isEnumerable(O, key)) {
				$pushApply(results, [
					kind === 'value' ? O[key] : [key, O[key]]
				]);
			}
		});
		return results;
	}
	throw new $TypeError('Assertion failed: "kind" is not "key", "value", or "key+value": ' + kind);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"../helpers/callBind":1576493738815,"../helpers/forEach":1576493738956,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739391, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var MAX_SAFE_INTEGER = require('../helpers/maxSafeInteger');

var Call = require('./Call');
var CreateDataPropertyOrThrow = require('./CreateDataPropertyOrThrow');
var Get = require('./Get');
var HasProperty = require('./HasProperty');
var IsArray = require('./IsArray');
var ToLength = require('./ToLength');
var ToString = require('./ToString');

// https://ecma-international.org/ecma-262/10.0/#sec-flattenintoarray

// eslint-disable-next-line max-params, max-statements
module.exports = function FlattenIntoArray(target, source, sourceLen, start, depth) {
	var mapperFunction;
	if (arguments.length > 5) {
		mapperFunction = arguments[5];
	}

	var targetIndex = start;
	var sourceIndex = 0;
	while (sourceIndex < sourceLen) {
		var P = ToString(sourceIndex);
		var exists = HasProperty(source, P);
		if (exists === true) {
			var element = Get(source, P);
			if (typeof mapperFunction !== 'undefined') {
				if (arguments.length <= 6) {
					throw new $TypeError('Assertion failed: thisArg is required when mapperFunction is provided');
				}
				element = Call(mapperFunction, arguments[6], [element, sourceIndex, source]);
			}
			var shouldFlatten = false;
			if (depth > 0) {
				shouldFlatten = IsArray(element);
			}
			if (shouldFlatten) {
				var elementLen = ToLength(Get(element, 'length'));
				targetIndex = FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1);
			} else {
				if (targetIndex >= MAX_SAFE_INTEGER) {
					throw new $TypeError('index too large');
				}
				CreateDataPropertyOrThrow(target, ToString(targetIndex), element);
				targetIndex += 1;
			}
		}
		sourceIndex += 1;
	}

	return targetIndex;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/maxSafeInteger":1576493738869,"./Call":1576493739331,"./CreateDataPropertyOrThrow":1576493739371,"./Get":1576493739333,"./HasProperty":1576493739392,"./IsArray":1576493739342,"./ToLength":1576493739375,"./ToString":1576493739363}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739392, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-hasproperty

module.exports = function HasProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return P in O;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739334,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739393, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var hasSymbols = require('has-symbols')();

var $TypeError = GetIntrinsic('%TypeError%');

var $gOPN = GetIntrinsic('%Object.getOwnPropertyNames%');
var $gOPS = hasSymbols && GetIntrinsic('%Object.getOwnPropertySymbols%');
var keys = require('object-keys');

var esType = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-getownpropertykeys

module.exports = function GetOwnPropertyKeys(O, Type) {
	if (esType(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (Type === 'Symbol') {
		return $gOPS ? $gOPS(O) : [];
	}
	if (Type === 'String') {
		if (!$gOPN) {
			return keys(O);
		}
		return $gOPN(O);
	}
	throw new $TypeError('Assertion failed: `Type` must be `"String"` or `"Symbol"`');
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739394, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Function = GetIntrinsic('%Function%');
var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var IsConstructor = require('./IsConstructor');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-getprototypefromconstructor

module.exports = function GetPrototypeFromConstructor(constructor, intrinsicDefaultProto) {
	var intrinsic = GetIntrinsic(intrinsicDefaultProto); // throws if not a valid intrinsic
	if (!IsConstructor(constructor)) {
		throw new $TypeError('Assertion failed: `constructor` must be a constructor');
	}
	var proto = Get(constructor, 'prototype');
	if (Type(proto) !== 'Object') {
		if (!(constructor instanceof $Function)) {
			// ignore other realms, for now
			throw new $TypeError('cross-realm constructors not currently supported');
		}
		proto = intrinsic;
	}
	return proto;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739333,"./IsConstructor":1576493739366,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739395, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var callBound = require('../helpers/callBound');
var regexTester = require('../helpers/regexTester');
var every = require('../helpers/every');

var strSlice = callBound('String.prototype.slice');
var $indexOf = callBound('String.prototype.indexOf');
var $parseInt = parseInt;

var isDigit = regexTester(/^[0-9]$/);

var inspect = require('object-inspect');

var Get = require('./Get');
var IsArray = require('./IsArray');
var IsInteger = require('./IsInteger');
var ToObject = require('./ToObject');
var ToString = require('./ToString');
var Type = require('./Type');

// http://www.ecma-international.org/ecma-262/9.0/#sec-getsubstitution

// eslint-disable-next-line max-statements, max-params, max-lines-per-function
module.exports = function GetSubstitution(matched, str, position, captures, namedCaptures, replacement) {
	if (Type(matched) !== 'String') {
		throw new $TypeError('Assertion failed: `matched` must be a String');
	}
	var matchLength = matched.length;

	if (Type(str) !== 'String') {
		throw new $TypeError('Assertion failed: `str` must be a String');
	}
	var stringLength = str.length;

	if (!IsInteger(position) || position < 0 || position > stringLength) {
		throw new $TypeError('Assertion failed: `position` must be a nonnegative integer, and less than or equal to the length of `string`, got ' + inspect(position));
	}

	var ES = this;
	var isStringOrHole = function (capture, index, arr) { return ES.Type(capture) === 'String' || !(index in arr); };
	if (!IsArray(captures) || !every(captures, isStringOrHole)) {
		throw new $TypeError('Assertion failed: `captures` must be a List of Strings, got ' + inspect(captures));
	}

	if (Type(replacement) !== 'String') {
		throw new $TypeError('Assertion failed: `replacement` must be a String');
	}

	var tailPos = position + matchLength;
	var m = captures.length;
	if (Type(namedCaptures) !== 'Undefined') {
		namedCaptures = ToObject(namedCaptures); // eslint-disable-line no-param-reassign
	}

	var result = '';
	for (var i = 0; i < replacement.length; i += 1) {
		// if this is a $, and it's not the end of the replacement
		var current = replacement[i];
		var isLast = (i + 1) >= replacement.length;
		var nextIsLast = (i + 2) >= replacement.length;
		if (current === '$' && !isLast) {
			var next = replacement[i + 1];
			if (next === '$') {
				result += '$';
				i += 1;
			} else if (next === '&') {
				result += matched;
				i += 1;
			} else if (next === '`') {
				result += position === 0 ? '' : strSlice(str, 0, position - 1);
				i += 1;
			} else if (next === "'") {
				result += tailPos >= stringLength ? '' : strSlice(str, tailPos);
				i += 1;
			} else {
				var nextNext = nextIsLast ? null : replacement[i + 2];
				if (isDigit(next) && next !== '0' && (nextIsLast || !isDigit(nextNext))) {
					// $1 through $9, and not followed by a digit
					var n = $parseInt(next, 10);
					// if (n > m, impl-defined)
					result += (n <= m && Type(captures[n - 1]) === 'Undefined') ? '' : captures[n - 1];
					i += 1;
				} else if (isDigit(next) && (nextIsLast || isDigit(nextNext))) {
					// $00 through $99
					var nn = next + nextNext;
					var nnI = $parseInt(nn, 10) - 1;
					// if nn === '00' or nn > m, impl-defined
					result += (nn <= m && Type(captures[nnI]) === 'Undefined') ? '' : captures[nnI];
					i += 2;
				} else if (next === '<') {
					// eslint-disable-next-line max-depth
					if (Type(namedCaptures) === 'Undefined') {
						result += '$<';
						i += 2;
					} else {
						var endIndex = $indexOf(replacement, '>', i);
						// eslint-disable-next-line max-depth
						if (endIndex > -1) {
							var groupName = strSlice(replacement, i, endIndex);
							var capture = Get(namedCaptures, groupName);
							// eslint-disable-next-line max-depth
							if (Type(capture) !== 'Undefined') {
								result += ToString(capture);
							}
							i += '$<' + groupName + '>'.length;
						}
					}
				} else {
					result += '$';
				}
			}
		} else {
			// the final $, or else not a $
			result += replacement[i];
		}
	}
	return result;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"../helpers/regexTester":1576493738861,"../helpers/every":1576493738884,"./Get":1576493739333,"./IsArray":1576493739342,"./IsInteger":1576493739337,"./ToObject":1576493739340,"./ToString":1576493739363,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739396, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var has = require('has');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-hasownproperty

module.exports = function HasOwnProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return has(O, P);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739334,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739397, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var mod = require('../helpers/mod');
var timeConstants = require('../helpers/timeConstants');
var msPerHour = timeConstants.msPerHour;
var HoursPerDay = timeConstants.HoursPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function HourFromTime(t) {
	return mod($floor(t / msPerHour), HoursPerDay);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739398, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $hasInstance = GetIntrinsic('Symbol.hasInstance', true);

var Call = require('./Call');
var GetMethod = require('./GetMethod');
var IsCallable = require('./IsCallable');
var OrdinaryHasInstance = require('./OrdinaryHasInstance');
var ToBoolean = require('./ToBoolean');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-instanceofoperator

module.exports = function InstanceofOperator(O, C) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	var instOfHandler = $hasInstance ? GetMethod(C, $hasInstance) : void 0;
	if (typeof instOfHandler !== 'undefined') {
		return ToBoolean(Call(instOfHandler, C, [O]));
	}
	if (!IsCallable(C)) {
		throw new $TypeError('`C` is not Callable');
	}
	return OrdinaryHasInstance(C, O);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Call":1576493739331,"./GetMethod":1576493739338,"./IsCallable":1576493739332,"./OrdinaryHasInstance":1576493739399,"./ToBoolean":1576493739346,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739399, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Get = require('./Get');
var IsCallable = require('./IsCallable');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinaryhasinstance

module.exports = function OrdinaryHasInstance(C, O) {
	if (IsCallable(C) === false) {
		return false;
	}
	if (Type(O) !== 'Object') {
		return false;
	}
	var P = Get(C, 'prototype');
	if (Type(P) !== 'Object') {
		throw new $TypeError('OrdinaryHasInstance called on an object with an invalid prototype property.');
	}
	return O instanceof C;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739333,"./IsCallable":1576493739332,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739400, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $isConcatSpreadable = GetIntrinsic('%Symbol.isConcatSpreadable%', true);

var Get = require('./Get');
var IsArray = require('./IsArray');
var ToBoolean = require('./ToBoolean');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-isconcatspreadable

module.exports = function IsConcatSpreadable(O) {
	if (Type(O) !== 'Object') {
		return false;
	}
	if ($isConcatSpreadable) {
		var spreadable = Get(O, $isConcatSpreadable);
		if (typeof spreadable !== 'undefined') {
			return ToBoolean(spreadable);
		}
	}
	return IsArray(O);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Get":1576493739333,"./IsArray":1576493739342,"./ToBoolean":1576493739346,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739401, function(require, module, exports) {


var callBound = require('../helpers/callBound');

var $PromiseThen = callBound('Promise.prototype.then', true);

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ispromise

module.exports = function IsPromise(x) {
	if (Type(x) !== 'Object') {
		return false;
	}
	if (!$PromiseThen) { // Promises are not supported
		return false;
	}
	try {
		$PromiseThen(x); // throws if not a promise
	} catch (e) {
		return false;
	}
	return true;
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739402, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var isPrefixOf = require('../helpers/isPrefixOf');

// var callBound = require('../helpers/callBound');

// var $charAt = callBound('String.prototype.charAt');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/9.0/#sec-isstringprefix

module.exports = function IsStringPrefix(p, q) {
	if (Type(p) !== 'String') {
		throw new $TypeError('Assertion failed: "p" must be a String');
	}

	if (Type(q) !== 'String') {
		throw new $TypeError('Assertion failed: "q" must be a String');
	}

	return isPrefixOf(p, q);
	/*
	if (p === q || p === '') {
		return true;
	}

	var pLength = p.length;
	var qLength = q.length;
	if (pLength >= qLength) {
		return false;
	}

	// assert: pLength < qLength

	for (var i = 0; i < pLength; i += 1) {
		if ($charAt(p, i) !== $charAt(q, i)) {
			return false;
		}
	}
	return true;
	*/
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isPrefixOf":1576493738813,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739403, function(require, module, exports) {


var callBound = require('../helpers/callBound');
var $arrayPush = callBound('Array.prototype.push');

var GetIterator = require('./GetIterator');
var IteratorStep = require('./IteratorStep');
var IteratorValue = require('./IteratorValue');

// https://www.ecma-international.org/ecma-262/8.0/#sec-iterabletolist

module.exports = function IterableToList(items, method) {
	var iterator = GetIterator(items, method);
	var values = [];
	var next = true;
	while (next) {
		next = IteratorStep(iterator);
		if (next) {
			var nextValue = IteratorValue(next);
			$arrayPush(values, nextValue);
		}
	}
	return values;
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./GetIterator":1576493739335,"./IteratorStep":1576493739344,"./IteratorValue":1576493739349}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739404, function(require, module, exports) {


var $isFinite = require('../helpers/isFinite');
var msPerDay = require('../helpers/timeConstants').msPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.13

module.exports = function MakeDate(day, time) {
	if (!$isFinite(day) || !$isFinite(time)) {
		return NaN;
	}
	return (day * msPerDay) + time;
};

}, function(modId) { var map = {"../helpers/isFinite":1576493738812,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739405, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');
var $DateUTC = GetIntrinsic('%Date.UTC%');

var mod = require('../helpers/mod');
var $isFinite = require('../helpers/isFinite');

var DateFromTime = require('./DateFromTime');
var Day = require('./Day');
var MonthFromTime = require('./MonthFromTime');
var ToInteger = require('./ToInteger');
var YearFromTime = require('./YearFromTime');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.12

module.exports = function MakeDay(year, month, date) {
	if (!$isFinite(year) || !$isFinite(month) || !$isFinite(date)) {
		return NaN;
	}
	var y = ToInteger(year);
	var m = ToInteger(month);
	var dt = ToInteger(date);
	var ym = y + $floor(m / 12);
	var mn = mod(m, 12);
	var t = $DateUTC(ym, mn, 1);
	if (YearFromTime(t) !== ym || MonthFromTime(t) !== mn || DateFromTime(t) !== 1) {
		return NaN;
	}
	return Day(t) + dt - 1;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/isFinite":1576493738812,"./DateFromTime":1576493739378,"./Day":1576493739380,"./MonthFromTime":1576493739385,"./ToInteger":1576493739376,"./YearFromTime":1576493739382}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739406, function(require, module, exports) {


var $isFinite = require('../helpers/isFinite');
var timeConstants = require('../helpers/timeConstants');
var msPerSecond = timeConstants.msPerSecond;
var msPerMinute = timeConstants.msPerMinute;
var msPerHour = timeConstants.msPerHour;

var ToInteger = require('./ToInteger');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.11

module.exports = function MakeTime(hour, min, sec, ms) {
	if (!$isFinite(hour) || !$isFinite(min) || !$isFinite(sec) || !$isFinite(ms)) {
		return NaN;
	}
	var h = ToInteger(hour);
	var m = ToInteger(min);
	var s = ToInteger(sec);
	var milli = ToInteger(ms);
	var t = (h * msPerHour) + (m * msPerMinute) + (s * msPerSecond) + milli;
	return t;
};

}, function(modId) { var map = {"../helpers/isFinite":1576493738812,"../helpers/timeConstants":1576493738821,"./ToInteger":1576493739376}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739407, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var mod = require('../helpers/mod');
var timeConstants = require('../helpers/timeConstants');
var msPerMinute = timeConstants.msPerMinute;
var MinutesPerHour = timeConstants.MinutesPerHour;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function MinFromTime(t) {
	return mod($floor(t / msPerMinute), MinutesPerHour);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739408, function(require, module, exports) {


var mod = require('../helpers/mod');

// https://ecma-international.org/ecma-262/5.1/#sec-5.2

module.exports = function modulo(x, y) {
	return mod(x, y);
};

}, function(modId) { var map = {"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739409, function(require, module, exports) {


var mod = require('../helpers/mod');
var msPerSecond = require('../helpers/timeConstants').msPerSecond;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function msFromTime(t) {
	return mod(t, msPerSecond);
};

}, function(modId) { var map = {"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739410, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $String = GetIntrinsic('%String%');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/9.0/#sec-tostring-applied-to-the-number-type

module.exports = function NumberToString(m) {
	if (Type(m) !== 'Number') {
		throw new TypeError('Assertion failed: "m" must be a String');
	}

	return $String(m);
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739411, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $ObjectCreate = GetIntrinsic('%Object.create%');
var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-objectcreate

module.exports = function ObjectCreate(proto, internalSlotsList) {
	if (proto !== null && Type(proto) !== 'Object') {
		throw new $TypeError('Assertion failed: `proto` must be null or an object');
	}
	var slots = arguments.length < 2 ? [] : internalSlotsList;
	if (slots.length > 0) {
		throw new $SyntaxError('es-abstract does not yet support internal slots');
	}

	if (proto === null && !$ObjectCreate) {
		throw new $SyntaxError('native Object.create support is required to create null objects');
	}

	return $ObjectCreate(proto);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739412, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $getProto = require('../helpers/getProto');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/7.0/#sec-ordinarygetprototypeof

module.exports = function OrdinaryGetPrototypeOf(O) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!$getProto) {
		throw new $TypeError('This environment does not support fetching prototypes.');
	}
	return $getProto(O);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/getProto":1576493739060,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739413, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $setProto = require('../helpers/setProto');

var OrdinaryGetPrototypeOf = require('./OrdinaryGetPrototypeOf');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/7.0/#sec-ordinarysetprototypeof

module.exports = function OrdinarySetPrototypeOf(O, V) {
	if (Type(V) !== 'Object' && Type(V) !== 'Null') {
		throw new $TypeError('Assertion failed: V must be Object or Null');
	}
	/*
    var extensible = IsExtensible(O);
    var current = OrdinaryGetPrototypeOf(O);
    if (SameValue(V, current)) {
        return true;
    }
    if (!extensible) {
        return false;
    }
    */
	try {
		$setProto(O, V);
	} catch (e) {
		return false;
	}
	return OrdinaryGetPrototypeOf(O) === V;
	/*
    var p = V;
    var done = false;
    while (!done) {
        if (p === null) {
            done = true;
        } else if (SameValue(p, O)) {
            return false;
        } else {
            if (wat) {
                done = true;
            } else {
                p = p.[[Prototype]];
            }
        }
     }
     O.[[Prototype]] = V;
     return true;
     */
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/setProto":1576493739062,"./OrdinaryGetPrototypeOf":1576493739412,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739414, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinaryhasproperty

module.exports = function OrdinaryHasProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	return P in O;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739334,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739415, function(require, module, exports) {


var callBound = require('../helpers/callBound');

var $PromiseResolve = callBound('Promise.resolve', true);

// https://ecma-international.org/ecma-262/9.0/#sec-promise-resolve

module.exports = function PromiseResolve(C, x) {
	if (!$PromiseResolve) {
		throw new SyntaxError('This environment does not support Promises.');
	}
	return $PromiseResolve(C, x);
};


}, function(modId) { var map = {"../helpers/callBound":1576493738814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739416, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var regexExec = require('../helpers/callBound')('RegExp.prototype.exec');

var Call = require('./Call');
var Get = require('./Get');
var IsCallable = require('./IsCallable');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-regexpexec

module.exports = function RegExpExec(R, S) {
	if (Type(R) !== 'Object') {
		throw new $TypeError('Assertion failed: `R` must be an Object');
	}
	if (Type(S) !== 'String') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	var exec = Get(R, 'exec');
	if (IsCallable(exec)) {
		var result = Call(exec, R, [S]);
		if (result === null || Type(result) === 'Object') {
			return result;
		}
		throw new $TypeError('"exec" method must return `null` or an Object');
	}
	return regexExec(R, S);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Call":1576493739331,"./Get":1576493739333,"./IsCallable":1576493739332,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739417, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var SameValue = require('./SameValue');

// https://www.ecma-international.org/ecma-262/7.0/#sec-samevaluenonnumber

module.exports = function SameValueNonNumber(x, y) {
	if (typeof x === 'number' || typeof x !== typeof y) {
		throw new $TypeError('SameValueNonNumber requires two non-number values of the same type.');
	}
	return SameValue(x, y);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./SameValue":1576493739360}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739418, function(require, module, exports) {


var $isNaN = require('../helpers/isNaN');

// https://www.ecma-international.org/ecma-262/6.0/#sec-samevaluezero

module.exports = function SameValueZero(x, y) {
	return (x === y) || ($isNaN(x) && $isNaN(y));
};

}, function(modId) { var map = {"../helpers/isNaN":1576493738811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739419, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $floor = GetIntrinsic('%Math.floor%');

var mod = require('../helpers/mod');
var timeConstants = require('../helpers/timeConstants');
var msPerSecond = timeConstants.msPerSecond;
var SecondsPerMinute = timeConstants.SecondsPerMinute;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.10

module.exports = function SecFromTime(t) {
	return mod($floor(t / msPerSecond), SecondsPerMinute);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739420, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-set-o-p-v-throw

module.exports = function Set(O, P, V, Throw) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	if (Type(Throw) !== 'Boolean') {
		throw new $TypeError('Assertion failed: `Throw` must be a Boolean');
	}
	if (Throw) {
		O[P] = V; // eslint-disable-line no-param-reassign
		return true;
	} else {
		try {
			O[P] = V; // eslint-disable-line no-param-reassign
		} catch (e) {
			return false;
		}
	}
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsPropertyKey":1576493739334,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739421, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var has = require('has');

var $TypeError = GetIntrinsic('%TypeError%');

var getSymbolDescription = require('../helpers/getSymbolDescription');

var DefinePropertyOrThrow = require('./DefinePropertyOrThrow');
var IsExtensible = require('./IsExtensible');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-setfunctionname

module.exports = function SetFunctionName(F, name) {
	if (typeof F !== 'function') {
		throw new $TypeError('Assertion failed: `F` must be a function');
	}
	if (!IsExtensible(F) || has(F, 'name')) {
		throw new $TypeError('Assertion failed: `F` must be extensible, and must not have a `name` own property');
	}
	var nameType = Type(name);
	if (nameType !== 'Symbol' && nameType !== 'String') {
		throw new $TypeError('Assertion failed: `name` must be a Symbol or a String');
	}
	if (nameType === 'Symbol') {
		var description = getSymbolDescription(name);
		// eslint-disable-next-line no-param-reassign
		name = typeof description === 'undefined' ? '' : '[' + description + ']';
	}
	if (arguments.length > 2) {
		var prefix = arguments[2];
		// eslint-disable-next-line no-param-reassign
		name = prefix + ' ' + name;
	}
	return DefinePropertyOrThrow(F, 'name', {
		'[[Value]]': name,
		'[[Writable]]': false,
		'[[Enumerable]]': false,
		'[[Configurable]]': true
	});
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/getSymbolDescription":1576493738953,"./DefinePropertyOrThrow":1576493739388,"./IsExtensible":1576493739355,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739422, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $SyntaxError = GetIntrinsic('%SyntaxError%');
var $TypeError = GetIntrinsic('%TypeError%');
var $preventExtensions = GetIntrinsic('%Object.preventExtensions%');
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $gOPN = GetIntrinsic('%Object.getOwnPropertyNames%');

var forEach = require('../helpers/forEach');

var DefinePropertyOrThrow = require('./DefinePropertyOrThrow');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-setintegritylevel

module.exports = function SetIntegrityLevel(O, level) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (level !== 'sealed' && level !== 'frozen') {
		throw new $TypeError('Assertion failed: `level` must be `"sealed"` or `"frozen"`');
	}
	if (!$preventExtensions) {
		throw new $SyntaxError('SetIntegrityLevel requires native `Object.preventExtensions` support');
	}
	var status = $preventExtensions(O);
	if (!status) {
		return false;
	}
	if (!$gOPN) {
		throw new $SyntaxError('SetIntegrityLevel requires native `Object.getOwnPropertyNames` support');
	}
	var theKeys = $gOPN(O);
	if (level === 'sealed') {
		forEach(theKeys, function (k) {
			DefinePropertyOrThrow(O, k, { configurable: false });
		});
	} else if (level === 'frozen') {
		forEach(theKeys, function (k) {
			var currentDesc = $gOPD(O, k);
			if (typeof currentDesc !== 'undefined') {
				var desc;
				if (IsAccessorDescriptor(ToPropertyDescriptor(currentDesc))) {
					desc = { configurable: false };
				} else {
					desc = { configurable: false, writable: false };
				}
				DefinePropertyOrThrow(O, k, desc);
			}
		});
	}
	return true;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/forEach":1576493738956,"./DefinePropertyOrThrow":1576493739388,"./IsAccessorDescriptor":1576493739352,"./ToPropertyDescriptor":1576493739356,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739423, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var IsConstructor = require('./IsConstructor');
var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-speciesconstructor

module.exports = function SpeciesConstructor(O, defaultConstructor) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	var C = O.constructor;
	if (typeof C === 'undefined') {
		return defaultConstructor;
	}
	if (Type(C) !== 'Object') {
		throw new $TypeError('O.constructor is not an Object');
	}
	var S = $species ? C[$species] : void 0;
	if (S == null) {
		return defaultConstructor;
	}
	if (IsConstructor(S)) {
		return S;
	}
	throw new $TypeError('no constructor found');
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./IsConstructor":1576493739366,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739424, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var callBound = require('../helpers/callBound');

var $SymbolToString = callBound('Symbol.prototype.toString', true);

var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-symboldescriptivestring

module.exports = function SymbolDescriptiveString(sym) {
	if (Type(sym) !== 'Symbol') {
		throw new $TypeError('Assertion failed: `sym` must be a Symbol');
	}
	return $SymbolToString(sym);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/callBound":1576493738814,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739425, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
var $gOPN = GetIntrinsic('%Object.getOwnPropertyNames%');
var $TypeError = GetIntrinsic('%TypeError%');

var every = require('../helpers/every');

var IsDataDescriptor = require('./IsDataDescriptor');
var IsExtensible = require('./IsExtensible');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/6.0/#sec-testintegritylevel

module.exports = function TestIntegrityLevel(O, level) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (level !== 'sealed' && level !== 'frozen') {
		throw new $TypeError('Assertion failed: `level` must be `"sealed"` or `"frozen"`');
	}
	var status = IsExtensible(O);
	if (status) {
		return false;
	}
	var theKeys = $gOPN(O);
	return theKeys.length === 0 || every(theKeys, function (k) {
		var currentDesc = $gOPD(O, k);
		if (typeof currentDesc !== 'undefined') {
			if (currentDesc.configurable) {
				return false;
			}
			if (level === 'frozen' && IsDataDescriptor(ToPropertyDescriptor(currentDesc)) && currentDesc.writable) {
				return false;
			}
		}
		return true;
	});
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/every":1576493738884,"./IsDataDescriptor":1576493739353,"./IsExtensible":1576493739355,"./ToPropertyDescriptor":1576493739356,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739426, function(require, module, exports) {


var $BooleanValueOf = require('../helpers/callBound')('Boolean.prototype.valueOf');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-boolean-prototype-object

module.exports = function thisBooleanValue(value) {
	if (Type(value) === 'Boolean') {
		return value;
	}

	return $BooleanValueOf(value);
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739427, function(require, module, exports) {


var callBound = require('../helpers/callBound');

var Type = require('./Type');

var $NumberValueOf = callBound('Number.prototype.valueOf');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-number-prototype-object

module.exports = function thisNumberValue(value) {
	if (Type(value) === 'Number') {
		return value;
	}

	return $NumberValueOf(value);
};


}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739428, function(require, module, exports) {


var $StringValueOf = require('../helpers/callBound')('String.prototype.valueOf');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-string-prototype-object

module.exports = function thisStringValue(value) {
	if (Type(value) === 'String') {
		return value;
	}

	return $StringValueOf(value);
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739429, function(require, module, exports) {


var callBound = require('../helpers/callBound');

var $SymbolValueOf = callBound('Symbol.prototype.valueOf', true);

var Type = require('./Type');

// https://ecma-international.org/ecma-262/9.0/#sec-thissymbolvalue

module.exports = function thisSymbolValue(value) {
	if (!$SymbolValueOf) {
		throw new SyntaxError('Symbols are not supported; thisSymbolValue requires that `value` be a Symbol or a Symbol object');
	}
	if (Type(value) === 'Symbol') {
		return value;
	}
	return $SymbolValueOf(value);
};

}, function(modId) { var map = {"../helpers/callBound":1576493738814,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739430, function(require, module, exports) {


module.exports = require('../2018/thisTimeValue');

}, function(modId) { var map = {"../2018/thisTimeValue":1576493739309}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739431, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Date = GetIntrinsic('%Date%');
var $Number = GetIntrinsic('%Number%');
var $abs = GetIntrinsic('%Math.abs%');

var $isFinite = require('../helpers/isFinite');

var ToNumber = require('./ToNumber');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.14

module.exports = function TimeClip(time) {
	if (!$isFinite(time) || $abs(time) > 8.64e15) {
		return NaN;
	}
	return $Number(new $Date(ToNumber(time)));
};


}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isFinite":1576493738812,"./ToNumber":1576493739325}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739432, function(require, module, exports) {


var msPerDay = require('../helpers/timeConstants').msPerDay;

var DayFromYear = require('./DayFromYear');

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.3

module.exports = function TimeFromYear(y) {
	return msPerDay * DayFromYear(y);
};

}, function(modId) { var map = {"../helpers/timeConstants":1576493738821,"./DayFromYear":1576493739381}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739433, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $isNaN = require('../helpers/isNaN');
var padTimeComponent = require('../helpers/padTimeComponent');

var HourFromTime = require('./HourFromTime');
var MinFromTime = require('./MinFromTime');
var SecFromTime = require('./SecFromTime');
var Type = require('./Type');

// https://www.ecma-international.org/ecma-262/9.0/#sec-timestring

module.exports = function TimeString(tv) {
	if (Type(tv) !== 'Number' || $isNaN(tv)) {
		throw new $TypeError('Assertion failed: `tv` must be a non-NaN Number');
	}
	var hour = HourFromTime(tv);
	var minute = MinFromTime(tv);
	var second = SecFromTime(tv);
	return padTimeComponent(hour) + ':' + padTimeComponent(minute) + ':' + padTimeComponent(second) + '\x20GMT';
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"../helpers/padTimeComponent":1576493739256,"./HourFromTime":1576493739397,"./MinFromTime":1576493739407,"./SecFromTime":1576493739419,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739434, function(require, module, exports) {


var mod = require('../helpers/mod');
var msPerDay = require('../helpers/timeConstants').msPerDay;

// https://ecma-international.org/ecma-262/5.1/#sec-15.9.1.2

module.exports = function TimeWithinDay(t) {
	return mod(t, msPerDay);
};


}, function(modId) { var map = {"../helpers/mod":1576493738826,"../helpers/timeConstants":1576493738821}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739435, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $Date = GetIntrinsic('%Date%');

var $isNaN = require('../helpers/isNaN');

var Type = require('./Type');

// https://ecma-international.org/ecma-262/6.0/#sec-todatestring

module.exports = function ToDateString(tv) {
	if (Type(tv) !== 'Number') {
		throw new $TypeError('Assertion failed: `tv` must be a Number');
	}
	if ($isNaN(tv)) {
		return 'Invalid Date';
	}
	return $Date(tv);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"../helpers/isNaN":1576493738811,"./Type":1576493739327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739436, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $RangeError = GetIntrinsic('%RangeError%');

var ToInteger = require('./ToInteger');
var ToLength = require('./ToLength');
var SameValueZero = require('./SameValueZero');

// https://www.ecma-international.org/ecma-262/8.0/#sec-toindex

module.exports = function ToIndex(value) {
	if (typeof value === 'undefined') {
		return 0;
	}
	var integerIndex = ToInteger(value);
	if (integerIndex < 0) {
		throw new $RangeError('index must be >= 0');
	}
	var index = ToLength(integerIndex);
	if (!SameValueZero(integerIndex, index)) {
		throw new $RangeError('index must be >= 0 and < 2 ** 53 - 1');
	}
	return index;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToInteger":1576493739376,"./ToLength":1576493739375,"./SameValueZero":1576493739418}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739437, function(require, module, exports) {


var ToUint16 = require('./ToUint16');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toint16

module.exports = function ToInt16(argument) {
	var int16bit = ToUint16(argument);
	return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
};

}, function(modId) { var map = {"./ToUint16":1576493739438}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739438, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var ToNumber = require('./ToNumber');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var $sign = require('../helpers/sign');
var $mod = require('../helpers/mod');

var $floor = $Math.floor;
var $abs = $Math.abs;

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.7

module.exports = function ToUint16(value) {
	var number = ToNumber(value);
	if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
	var posInt = $sign(number) * $floor($abs(number));
	return $mod(posInt, 0x10000);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToNumber":1576493739325,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812,"../helpers/sign":1576493738840,"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739439, function(require, module, exports) {


var ToNumber = require('./ToNumber');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.5

module.exports = function ToInt32(x) {
	return ToNumber(x) >> 0;
};

}, function(modId) { var map = {"./ToNumber":1576493739325}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739440, function(require, module, exports) {


var ToUint8 = require('./ToUint8');

// https://www.ecma-international.org/ecma-262/6.0/#sec-toint8

module.exports = function ToInt8(argument) {
	var int8bit = ToUint8(argument);
	return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
};

}, function(modId) { var map = {"./ToUint8":1576493739441}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739441, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var ToNumber = require('./ToNumber');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var $sign = require('../helpers/sign');
var $mod = require('../helpers/mod');

var $floor = $Math.floor;
var $abs = $Math.abs;

module.exports = function ToUint8(argument) {
	var number = ToNumber(argument);
	if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
	var posInt = $sign(number) * $floor($abs(number));
	return $mod(posInt, 0x100);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToNumber":1576493739325,"../helpers/isNaN":1576493738811,"../helpers/isFinite":1576493738812,"../helpers/sign":1576493738840,"../helpers/mod":1576493738826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739442, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $String = GetIntrinsic('%String%');

var ToPrimitive = require('./ToPrimitive');
var ToString = require('./ToString');

// https://www.ecma-international.org/ecma-262/6.0/#sec-topropertykey

module.exports = function ToPropertyKey(argument) {
	var key = ToPrimitive(argument, $String);
	return typeof key === 'symbol' ? key : ToString(key);
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToPrimitive":1576493739326,"./ToString":1576493739363}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739443, function(require, module, exports) {


var GetIntrinsic = require('../GetIntrinsic');

var $Math = GetIntrinsic('%Math%');

var ToNumber = require('./ToNumber');

var $isNaN = require('../helpers/isNaN');

var $floor = $Math.floor;

// https://www.ecma-international.org/ecma-262/6.0/#sec-touint8clamp

module.exports = function ToUint8Clamp(argument) {
	var number = ToNumber(argument);
	if ($isNaN(number) || number <= 0) { return 0; }
	if (number >= 0xFF) { return 0xFF; }
	var f = $floor(argument);
	if (f + 0.5 < number) { return f + 1; }
	if (number < f + 0.5) { return f; }
	if (f % 2 !== 0) { return f + 1; }
	return f;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./ToNumber":1576493739325,"../helpers/isNaN":1576493738811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1576493739444, function(require, module, exports) {


var trimStart = require('string.prototype.trimleft');
var trimEnd = require('string.prototype.trimright');

var GetIntrinsic = require('../GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var RequireObjectCoercible = require('./RequireObjectCoercible');
var ToString = require('./ToString');

// https://ecma-international.org/ecma-262/10.0/#sec-trimstring

module.exports = function TrimString(string, where) {
	var str = RequireObjectCoercible(string);
	var S = ToString(str);
	var T;
	if (where === 'start') {
		T = trimStart(S);
	} else if (where === 'end') {
		T = trimEnd(S);
	} else if (where === 'start+end') {
		T = trimStart(trimEnd(S));
	} else {
		throw new $TypeError('Assertion failed: invalid `where` value; must be "start", "end", or "start+end"');
	}
	return T;
};

}, function(modId) { var map = {"../GetIntrinsic":1576493738804,"./RequireObjectCoercible":1576493739341,"./ToString":1576493739363}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1576493738802);
})()
//# sourceMappingURL=index.js.map