webpackJsonp([2],Array(86).concat([
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  opacity: 1;\n  transition: opacity .15s ease-in;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    opacity: .5;\n    transition: opacity .15s ease-in;\n  }\n'], ['\n  opacity: 1;\n  transition: opacity .15s ease-in;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    opacity: .5;\n    transition: opacity .15s ease-in;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 2rem;\n  justify-content: center;\n  display: flex;\n'], ['\n  padding: 2rem;\n  justify-content: center;\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  max-width: 400px;\n'], ['\n  max-width: 400px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 100%;\n  padding: .25rem;\n'], ['\n  width: 100%;\n  padding: .25rem;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  width: 100%;\n  padding: 1rem;\n  margin-top: .5rem;\n  margin-bottom: .5rem;\n  box-sizing: border-box;\n'], ['\n  width: 100%;\n  padding: 1rem;\n  margin-top: .5rem;\n  margin-bottom: .5rem;\n  box-sizing: border-box;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  text-align: center;\n  color: red;\n  text-decoration: none;\n  &:hover,\n  &:focus {\n    text-decoration: underline;\n  }\n  ', '\n'], ['\n  text-align: center;\n  color: red;\n  text-decoration: none;\n  &:hover,\n  &:focus {\n    text-decoration: underline;\n  }\n  ', '\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  width: 100%;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n'], ['\n  width: 100%;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  width: 50%;\n  outline: 0;\n  padding: 1rem;\n  text-transform: uppercase;\n  background-color: ', ';\n  border: none;\n  ', '\n'], ['\n  width: 50%;\n  outline: 0;\n  padding: 1rem;\n  text-transform: uppercase;\n  background-color: ', ';\n  border: none;\n  ', '\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

var _constants = __webpack_require__(304);

var _AuthenticateUserMutation = __webpack_require__(442);

var _AuthenticateUserMutation2 = _interopRequireDefault(_AuthenticateUserMutation);

var _SignupUserMutation = __webpack_require__(444);

var _SignupUserMutation2 = _interopRequireDefault(_SignupUserMutation);

var _loading = __webpack_require__(303);

var _loading2 = _interopRequireDefault(_loading);

var _styledComponents = __webpack_require__(279);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _history = __webpack_require__(83);

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_PureComponent) {
    _inherits(Login, _PureComponent);

    function Login() {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));

        _this.state = {
            login: true,
            email: '',
            password: '',
            name: '',
            loading: false
        };
        _this._onChange = function (e) {
            var target = e.target;
            var label = target && target.dataset.label;
            var value = target && target.value;
            if (label) _this.setState(_defineProperty({}, label, value));
        };
        _this._onToggleLogin = function () {
            var login = _this.state.login;

            _this.setState({ login: !login });
        };
        _this._confirm = function () {
            var _this$state = _this.state,
                login = _this$state.login,
                name = _this$state.name,
                email = _this$state.email,
                password = _this$state.password;

            if (email.trim() !== '' && password.trim() !== '') {
                _this.setState({ loading: true }, function () {
                    if (login) {
                        (0, _AuthenticateUserMutation2.default)(email, password, _this._saveUserData, _this._failedAuth);
                    } else {
                        if (name.trim() !== '') {
                            (0, _SignupUserMutation2.default)(email, password, _this._saveUserData, _this._failedAuth, name);
                        } else {
                            alert('name is required');
                            _this._failedAuth();
                        }
                    }
                });
            } else {
                if (email.trim() === '') alert('email is required');else if (password.trim() === '') alert('password is required');
            }
        };
        _this._saveUserData = function (id, token) {
            if (id && token) {
                localStorage.setItem(_constants.GC_USER_ID, id);
                localStorage.setItem(_constants.GC_AUTH_TOKEN, token);
                _history2.default.push('/');
            }
        };
        _this._failedAuth = function () {
            _this.setState({ loading: false });
        };
        return _this;
    }

    _createClass(Login, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                login = _state.login,
                name = _state.name,
                email = _state.email,
                password = _state.password,
                loading = _state.loading;

            return _react2.default.createElement(
                Wrapper,
                null,
                loading ? _react2.default.createElement('img', { src: _loading2.default, alt: 'Loading...' }) : _react2.default.createElement(
                    InnerWrapper,
                    null,
                    _react2.default.createElement(
                        Title,
                        null,
                        login ? 'Sign In' : 'Sign Up'
                    ),
                    !login && _react2.default.createElement(Input, { value: name, 'data-label': 'name', onChange: this._onChange, type: 'text', placeholder: 'your name' }),
                    _react2.default.createElement(Input, { value: email, 'data-label': 'email', onChange: this._onChange, type: 'email', placeholder: 'email' }),
                    _react2.default.createElement(Input, { value: password, 'data-label': 'password', onChange: this._onChange, type: 'password', placeholder: 'safe password' }),
                    _react2.default.createElement(
                        ButtonConatiner,
                        null,
                        _react2.default.createElement(
                            Button,
                            { pos: 'left', onClick: this._confirm },
                            login ? 'Sign In' : 'Sign Up'
                        ),
                        _react2.default.createElement(
                            Button,
                            { pos: 'right', onClick: this._onToggleLogin },
                            login ? 'Sign Up' : 'Sign In'
                        )
                    ),
                    _react2.default.createElement(
                        LinkContainer,
                        null,
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/' },
                            'Cancel'
                        )
                    )
                )
            );
        }
    }]);

    return Login;
}(_react.PureComponent);

exports.default = (0, _reactRouterDom.withRouter)(Login);

var Dim = (0, _styledComponents.css)(_templateObject);
var Wrapper = _styledComponents2.default.div(_templateObject2);
var InnerWrapper = _styledComponents2.default.div(_templateObject3);
var Title = _styledComponents2.default.h2(_templateObject4);
var Input = _styledComponents2.default.input(_templateObject5);
var LinkContainer = _styledComponents2.default.div(_templateObject6, Dim);
var ButtonConatiner = _styledComponents2.default.div(_templateObject7);
var Button = _styledComponents2.default.button(_templateObject8, function (props) {
    return props.pos === 'right' ? 'rgba( 0, 0, 0, .2 )' : 'rgba( 0, 0, 0, .1 )';
}, Dim);

/***/ }),
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _extends3 = _interopRequireDefault(__webpack_require__(209));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__(206),
    ID_KEY = _require.ID_KEY,
    REF_KEY = _require.REF_KEY,
    REFS_KEY = _require.REFS_KEY,
    TYPENAME_KEY = _require.TYPENAME_KEY,
    UNPUBLISH_FIELD_SENTINEL = _require.UNPUBLISH_FIELD_SENTINEL;

/**
 * @public
 *
 * Low-level record manipulation methods.
 *
 * A note about perf: we use long-hand property access rather than computed
 * properties in this file for speed ie.
 *
 *    const object = {};
 *    object[KEY] = value;
 *    record[storageKey] = object;
 *
 * instead of:
 *
 *    record[storageKey] = {
 *      [KEY]: value,
 *    };
 *
 * The latter gets transformed by Babel into something like:
 *
 *    function _defineProperty(obj, key, value) {
 *      if (key in obj) {
 *        Object.defineProperty(obj, key, {
 *          value: value,
 *          enumerable: true,
 *          configurable: true,
 *          writable: true,
 *        });
 *      } else {
 *        obj[key] = value;
 *      }
 *      return obj;
 *    }
 *
 *    record[storageKey] = _defineProperty({}, KEY, value);
 *
 * A quick benchmark shows that computed property access is an order of
 * magnitude slower (times in seconds for 100,000 iterations):
 *
 *               best     avg     sd
 *    computed 0.02175 0.02292 0.00113
 *      manual 0.00110 0.00123 0.00008
 */

/**
 * @public
 *
 * Clone a record.
 */
function clone(record) {
  return (0, _extends3['default'])({}, record);
}

/**
 * @public
 *
 * Copies all fields from `source` to `sink`, excluding `__id` and `__typename`.
 *
 * NOTE: This function does not treat `id` specially. To preserve the id,
 * manually reset it after calling this function. Also note that values are
 * copied by reference and not value; callers should ensure that values are
 * copied on write.
 */
function copyFields(source, sink) {
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      if (key !== ID_KEY && key !== TYPENAME_KEY) {
        sink[key] = source[key];
      }
    }
  }
}

/**
 * @public
 *
 * Create a new record.
 */
function create(dataID, typeName) {
  // See perf note above for why we aren't using computed property access.
  var record = {};
  record[ID_KEY] = dataID;
  record[TYPENAME_KEY] = typeName;
  return record;
}

/**
 * @public
 *
 * Get the record's `id` if available or the client-generated identifier.
 */
function getDataID(record) {
  return record[ID_KEY];
}

/**
 * @public
 *
 * Get the concrete type of the record.
 */
function getType(record) {
  return record[TYPENAME_KEY];
}

/**
 * @public
 *
 * Get a scalar (non-link) field value.
 */
function getValue(record, storageKey) {
  var value = record[storageKey];
  if (value && typeof value === 'object') {
    __webpack_require__(9)(!value.hasOwnProperty(REF_KEY) && !value.hasOwnProperty(REFS_KEY), 'RelayModernRecord.getValue(): Expected a scalar (non-link) value for `%s.%s` ' + 'but found %s.', record[ID_KEY], storageKey, value.hasOwnProperty(REF_KEY) ? 'a linked record' : 'plural linked records');
  }
  return value;
}

/**
 * @public
 *
 * Get the value of a field as a reference to another record. Throws if the
 * field has a different type.
 */
function getLinkedRecordID(record, storageKey) {
  var link = record[storageKey];
  if (link == null) {
    return link;
  }
  __webpack_require__(9)(typeof link === 'object' && link && typeof link[REF_KEY] === 'string', 'RelayModernRecord.getLinkedRecordID(): Expected `%s.%s` to be a linked ID, ' + 'was `%s`.', record[ID_KEY], storageKey, link);
  return link[REF_KEY];
}

/**
 * @public
 *
 * Get the value of a field as a list of references to other records. Throws if
 * the field has a different type.
 */
function getLinkedRecordIDs(record, storageKey) {
  var links = record[storageKey];
  if (links == null) {
    return links;
  }
  __webpack_require__(9)(typeof links === 'object' && Array.isArray(links[REFS_KEY]), 'RelayModernRecord.getLinkedRecordIDs(): Expected `%s.%s` to contain an array ' + 'of linked IDs, got `%s`.', record[ID_KEY], storageKey, JSON.stringify(links));
  // assume items of the array are ids
  return links[REFS_KEY];
}

/**
 * @public
 *
 * Compares the fields of a previous and new record, returning either the
 * previous record if all fields are equal or a new record (with merged fields)
 * if any fields have changed.
 */
function update(prevRecord, nextRecord) {
  var updated = void 0;
  var keys = Object.keys(nextRecord);
  for (var ii = 0; ii < keys.length; ii++) {
    var key = keys[ii];
    if (updated || !__webpack_require__(218)(prevRecord[key], nextRecord[key])) {
      updated = updated || (0, _extends3['default'])({}, prevRecord);
      if (nextRecord[key] !== UNPUBLISH_FIELD_SENTINEL) {
        updated[key] = nextRecord[key];
      } else {
        delete updated[key];
      }
    }
  }
  return updated || prevRecord;
}

/**
 * @public
 *
 * Returns a new record with the contents of the given records. Fields in the
 * second record will overwrite identical fields in the first record.
 */
function merge(record1, record2) {
  return Object.assign({}, record1, record2);
}

/**
 * @public
 *
 * Prevent modifications to the record. Attempts to call `set*` functions on a
 * frozen record will fatal at runtime.
 */
function freeze(record) {
  __webpack_require__(233)(record);
}

/**
 * @public
 *
 * Set the value of a storageKey to a scalar.
 */
function setValue(record, storageKey, value) {
  record[storageKey] = value;
}

/**
 * @public
 *
 * Set the value of a field to a reference to another record.
 */
function setLinkedRecordID(record, storageKey, linkedID) {
  // See perf note above for why we aren't using computed property access.
  var link = {};
  link[REF_KEY] = linkedID;
  record[storageKey] = link;
}

/**
 * @public
 *
 * Set the value of a field to a list of references other records.
 */
function setLinkedRecordIDs(record, storageKey, linkedIDs) {
  // See perf note above for why we aren't using computed property access.
  var links = {};
  links[REFS_KEY] = linkedIDs;
  record[storageKey] = links;
}

module.exports = {
  clone: clone,
  copyFields: copyFields,
  create: create,
  freeze: freeze,
  getDataID: getDataID,
  getLinkedRecordID: getLinkedRecordID,
  getLinkedRecordIDs: getLinkedRecordIDs,
  getType: getType,
  getValue: getValue,
  merge: merge,
  setValue: setValue,
  setLinkedRecordID: setLinkedRecordID,
  setLinkedRecordIDs: setLinkedRecordIDs,
  update: update
};

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Represents a common GraphQL request with `text` (or persisted `id`) can be
 * used to execute it, an `operation` containing information to normalize the
 * results, and a `fragment` derived from that operation to read the response
 * data (masking data from child fragments).
 */

/**
 * An experimental wrapper around many operations to request in a batched
 * network request. The composed indivual GraphQL requests should be submitted
 * as a single networked request, e.g. in the case of deferred nodes or
 * for streaming connections that are represented as distinct compiled concrete
 * operations but are still conceptually tied to one source operation.
 *
 * Individual requests within the batch may contain data describing their
 * dependencies on other requests or themselves.
 */
var RelayConcreteNode = {
  BATCH_REQUEST: 'BatchRequest',
  CONDITION: 'Condition',
  DEFERRABLE_FRAGMENT_SPREAD: 'DeferrableFragmentSpread',
  DEFERRABLE_OPERATION: 'DeferrableOperation',
  FRAGMENT: 'Fragment',
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  LINKED_FIELD: 'LinkedField',
  LINKED_HANDLE: 'LinkedHandle',
  LITERAL: 'Literal',
  LOCAL_ARGUMENT: 'LocalArgument',
  OPERATION: 'Operation',
  ROOT_ARGUMENT: 'RootArgument',
  REQUEST: 'Request',
  SCALAR_FIELD: 'ScalarField',
  SCALAR_HANDLE: 'ScalarHandle',
  VARIABLE: 'Variable'
};
/**
 * Represents a single operation used to processing and normalize runtime
 * request results.
 */

/**
 * Argument in the provided operation to be derived via the results of
 * other requests in the batch.
 */


module.exports = RelayConcreteNode;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var VARIABLE = __webpack_require__(205).VARIABLE;

/**
 * Returns the values of field/fragment arguments as an object keyed by argument
 * names. Guaranteed to return a result with stable ordered nested values.
 */


function getArgumentValues(args, variables) {
  var values = {};
  args.forEach(function (arg) {
    if (arg.kind === VARIABLE) {
      // Variables are provided at runtime and are not guaranteed to be stable.
      values[arg.name] = getStableVariableValue(arg.variableName, variables);
    } else {
      // The Relay compiler generates stable ConcreteArgument values.
      values[arg.name] = arg.value;
    }
  });
  return values;
}

/**
 * Given a handle field and variable values, returns a key that can be used to
 * uniquely identify the combination of the handle name and argument values.
 *
 * Note: the word "storage" here refers to the fact this key is primarily used
 * when writing the results of a key in a normalized graph or "store". This
 * name was used in previous implementations of Relay internals and is also
 * used here for consistency.
 */
function getHandleStorageKey(handleField, variables) {
  var handle = handleField.handle,
      key = handleField.key,
      name = handleField.name,
      args = handleField.args,
      filters = handleField.filters;

  var handleName = __webpack_require__(267)(handle, key, name);
  if (!args || !filters || args.length === 0 || filters.length === 0) {
    return handleName;
  }
  var filterArgs = args.filter(function (arg) {
    return filters.indexOf(arg.name) > -1;
  });
  return formatStorageKey(handleName, getArgumentValues(filterArgs, variables));
}

/**
 * Given a field and variable values, returns a key that can be used to
 * uniquely identify the combination of the field name and argument values.
 *
 * Note: the word "storage" here refers to the fact this key is primarily used
 * when writing the results of a key in a normalized graph or "store". This
 * name was used in previous implementations of Relay internals and is also
 * used here for consistency.
 */
function getStorageKey(field, variables) {
  if (field.storageKey) {
    // TODO T23663664: Handle nodes do not yet define a static storageKey.
    return field.storageKey;
  }
  var args = field.args,
      name = field.name;

  return args && args.length !== 0 ? formatStorageKey(name, getArgumentValues(args, variables)) : name;
}

/**
 * Given a `name` (eg. "foo") and an object representing argument values
 * (eg. `{orberBy: "name", first: 10}`) returns a unique storage key
 * (ie. `foo{"first":10,"orderBy":"name"}`).
 *
 * This differs from getStorageKey which requires a ConcreteNode where arguments
 * are assumed to already be sorted into a stable order.
 */
function getStableStorageKey(name, args) {
  return formatStorageKey(name, __webpack_require__(245)(args));
}

/**
 * Given a name and argument values, format a storage key.
 *
 * Arguments and the values within them are expected to be ordered in a stable
 * alphabetical ordering.
 */
function formatStorageKey(name, argValues) {
  if (!argValues) {
    return name;
  }
  var values = [];
  for (var _argName in argValues) {
    if (argValues.hasOwnProperty(_argName)) {
      var value = argValues[_argName];
      if (value != null) {
        values.push(_argName + ':' + JSON.stringify(value));
      }
    }
  }
  return values.length === 0 ? name : name + ('(' + values.join(',') + ')');
}

/**
 * Given Variables and a variable name, return a variable value with
 * all values in a stable order.
 */
function getStableVariableValue(name, variables) {
  __webpack_require__(9)(variables.hasOwnProperty(name), 'getVariableValue(): Undefined variable `%s`.', name);
  return __webpack_require__(245)(variables[name]);
}

/**
 * Constants shared by all implementations of RecordSource/MutableRecordSource/etc.
 */
var RelayStoreUtils = {
  FRAGMENTS_KEY: '__fragments',
  ID_KEY: '__id',
  REF_KEY: '__ref',
  REFS_KEY: '__refs',
  ROOT_ID: 'client:root',
  ROOT_TYPE: '__Root',
  TYPENAME_KEY: '__typename',
  UNPUBLISH_RECORD_SENTINEL: Object.freeze({ __UNPUBLISH_RECORD_SENTINEL: true }),
  UNPUBLISH_FIELD_SENTINEL: Object.freeze({ __UNPUBLISH_FIELD_SENTINEL: true }),

  getArgumentValues: getArgumentValues,
  getHandleStorageKey: getHandleStorageKey,
  getStorageKey: getStorageKey,
  getStableStorageKey: getStableStorageKey
};

module.exports = RelayStoreUtils;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Relay v1.6.0
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = __webpack_require__(342);

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(307);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 210 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(258)('wks');
var uid = __webpack_require__(241);
var Symbol = __webpack_require__(213).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__(235),
    getFragment = _require.getFragment,
    getRequest = _require.getRequest;

var _require2 = __webpack_require__(291),
    createOperationSelector = _require2.createOperationSelector;

var _require3 = __webpack_require__(294),
    areEqualSelectors = _require3.areEqualSelectors,
    getDataIDsFromObject = _require3.getDataIDsFromObject,
    getSelector = _require3.getSelector,
    getSelectorList = _require3.getSelectorList,
    getSelectorsFromObject = _require3.getSelectorsFromObject,
    getVariablesFromObject = _require3.getVariablesFromObject;

function createFragmentSpecResolver(context, containerName, fragments, props, callback) {
  if (process.env.NODE_ENV !== 'production') {
    var fragmentNames = Object.keys(fragments);
    fragmentNames.forEach(function (fragmentName) {
      var propValue = props[fragmentName];
      __webpack_require__(20)(propValue !== undefined, 'createFragmentSpecResolver: Expected prop `%s` to be supplied to `%s`, but ' + 'got `undefined`. Pass an explicit `null` if this is intentional.', fragmentName, containerName);
    });
  }

  return new (__webpack_require__(351))(context, fragments, props, callback);
}

module.exports = {
  areEqualSelectors: areEqualSelectors,
  createFragmentSpecResolver: createFragmentSpecResolver,
  createOperationSelector: createOperationSelector,
  getDataIDsFromObject: getDataIDsFromObject,
  getFragment: getFragment,
  getRequest: getRequest,
  getSelector: getSelector,
  getSelectorList: getSelectorList,
  getSelectorsFromObject: getSelectorsFromObject,
  getVariablesFromObject: getVariablesFromObject
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 213 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(223);
var IE8_DOM_DEFINE = __webpack_require__(280);
var toPrimitive = __webpack_require__(253);
var dP = Object.defineProperty;

exports.f = __webpack_require__(220) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var CONNECTION = 'connection';

// Per-instance incrementing index used to generate unique edge IDs
var NEXT_EDGE_INDEX = '__connection_next_edge_index';

/**
 * @public
 *
 * A default runtime handler for connection fields that appends newly fetched
 * edges onto the end of a connection, regardless of the arguments used to fetch
 * those edges.
 */
function update(store, payload) {
  var record = store.get(payload.dataID);
  if (!record) {
    return;
  }

  var _RelayConnectionInter = __webpack_require__(216).get(),
      EDGES = _RelayConnectionInter.EDGES,
      END_CURSOR = _RelayConnectionInter.END_CURSOR,
      HAS_NEXT_PAGE = _RelayConnectionInter.HAS_NEXT_PAGE,
      HAS_PREV_PAGE = _RelayConnectionInter.HAS_PREV_PAGE,
      PAGE_INFO = _RelayConnectionInter.PAGE_INFO,
      PAGE_INFO_TYPE = _RelayConnectionInter.PAGE_INFO_TYPE,
      START_CURSOR = _RelayConnectionInter.START_CURSOR;

  var serverConnection = record.getLinkedRecord(payload.fieldKey);
  var serverPageInfo = serverConnection && serverConnection.getLinkedRecord(PAGE_INFO);
  if (!serverConnection) {
    record.setValue(null, payload.handleKey);
    return;
  }
  var clientConnection = record.getLinkedRecord(payload.handleKey);
  var clientPageInfo = clientConnection && clientConnection.getLinkedRecord(PAGE_INFO);
  if (!clientConnection) {
    // Initial fetch with data: copy fields from the server record
    var connection = store.create(__webpack_require__(217)(record.getDataID(), payload.handleKey), serverConnection.getType());
    connection.setValue(0, NEXT_EDGE_INDEX);
    connection.copyFieldsFrom(serverConnection);
    var serverEdges = serverConnection.getLinkedRecords(EDGES);
    if (serverEdges) {
      serverEdges = serverEdges.map(function (edge) {
        return buildConnectionEdge(store, connection, edge);
      });
      connection.setLinkedRecords(serverEdges, EDGES);
    }
    record.setLinkedRecord(connection, payload.handleKey);

    clientPageInfo = store.create(__webpack_require__(217)(connection.getDataID(), PAGE_INFO), PAGE_INFO_TYPE);
    clientPageInfo.setValue(false, HAS_NEXT_PAGE);
    clientPageInfo.setValue(false, HAS_PREV_PAGE);
    clientPageInfo.setValue(null, END_CURSOR);
    clientPageInfo.setValue(null, START_CURSOR);
    if (serverPageInfo) {
      clientPageInfo.copyFieldsFrom(serverPageInfo);
    }
    connection.setLinkedRecord(clientPageInfo, PAGE_INFO);
  } else {
    var _connection = clientConnection;
    // Subsequent fetches:
    // - updated fields on the connection
    // - merge prev/next edges, de-duplicating by node id
    // - synthesize page info fields
    var _serverEdges = serverConnection.getLinkedRecords(EDGES);
    if (_serverEdges) {
      _serverEdges = _serverEdges.map(function (edge) {
        return buildConnectionEdge(store, _connection, edge);
      });
    }
    var prevEdges = _connection.getLinkedRecords(EDGES);
    var prevPageInfo = _connection.getLinkedRecord(PAGE_INFO);
    _connection.copyFieldsFrom(serverConnection);
    // Reset EDGES and PAGE_INFO fields
    if (prevEdges) {
      _connection.setLinkedRecords(prevEdges, EDGES);
    }
    if (prevPageInfo) {
      _connection.setLinkedRecord(prevPageInfo, PAGE_INFO);
    }

    var nextEdges = [];
    var args = payload.args;
    if (prevEdges && _serverEdges) {
      if (args.after != null) {
        // Forward pagination from the end of the connection: append edges
        if (clientPageInfo && args.after === clientPageInfo.getValue(END_CURSOR)) {
          var nodeIDs = new Set();
          mergeEdges(prevEdges, nextEdges, nodeIDs);
          mergeEdges(_serverEdges, nextEdges, nodeIDs);
        } else {
          __webpack_require__(20)(false, 'RelayConnectionHandler: Unexpected after cursor `%s`, edges must ' + 'be fetched from the end of the list (`%s`).', args.after, clientPageInfo && clientPageInfo.getValue(END_CURSOR));
          return;
        }
      } else if (args.before != null) {
        // Backward pagination from the start of the connection: prepend edges
        if (clientPageInfo && args.before === clientPageInfo.getValue(START_CURSOR)) {
          var _nodeIDs = new Set();
          mergeEdges(_serverEdges, nextEdges, _nodeIDs);
          mergeEdges(prevEdges, nextEdges, _nodeIDs);
        } else {
          __webpack_require__(20)(false, 'RelayConnectionHandler: Unexpected before cursor `%s`, edges must ' + 'be fetched from the beginning of the list (`%s`).', args.before, clientPageInfo && clientPageInfo.getValue(START_CURSOR));
          return;
        }
      } else {
        // The connection was refetched from the beginning/end: replace edges
        nextEdges = _serverEdges;
      }
    } else if (_serverEdges) {
      nextEdges = _serverEdges;
    } else {
      nextEdges = prevEdges;
    }
    // Update edges only if they were updated, the null check is
    // for Flow (prevEdges could be null).
    if (nextEdges != null && nextEdges !== prevEdges) {
      _connection.setLinkedRecords(nextEdges, EDGES);
    }
    // Page info should be updated even if no new edge were returned.
    if (clientPageInfo && serverPageInfo) {
      if (args.before != null || args.after == null && args.last) {
        clientPageInfo.setValue(!!serverPageInfo.getValue(HAS_PREV_PAGE), HAS_PREV_PAGE);
        var startCursor = serverPageInfo.getValue(START_CURSOR);
        if (typeof startCursor === 'string') {
          clientPageInfo.setValue(startCursor, START_CURSOR);
        }
      } else if (args.after != null || args.before == null && args.first) {
        clientPageInfo.setValue(!!serverPageInfo.getValue(HAS_NEXT_PAGE), HAS_NEXT_PAGE);
        var endCursor = serverPageInfo.getValue(END_CURSOR);
        if (typeof endCursor === 'string') {
          clientPageInfo.setValue(endCursor, END_CURSOR);
        }
      }
    }
  }
}

/**
 * @public
 *
 * Given a record and the name of the schema field for which a connection was
 * fetched, returns the linked connection record.
 *
 * Example:
 *
 * Given that data has already been fetched on some user `<id>` on the `friends`
 * field:
 *
 * ```
 * fragment FriendsFragment on User {
 *   friends(first: 10) @connection(key: "FriendsFragment_friends") {
 *    edges {
 *      node {
 *        id
 *        }
 *      }
 *   }
 * }
 * ```
 *
 * The `friends` connection record can be accessed with:
 *
 * ```
 * store => {
 *   const user = store.get('<id>');
 *   const friends = RelayConnectionHandler.getConnection(user, 'FriendsFragment_friends');
 *   // Access fields on the connection:
 *   const edges = friends.getLinkedRecords('edges');
 * }
 * ```
 *
 * TODO: t15733312
 * Currently we haven't run into this case yet, but we need to add a `getConnections`
 * that returns an array of the connections under the same `key` regardless of the variables.
 */
function getConnection(record, key, filters) {
  var handleKey = __webpack_require__(267)(CONNECTION, key, null);
  return record.getLinkedRecord(handleKey, filters);
}

/**
 * @public
 *
 * Inserts an edge after the given cursor, or at the end of the list if no
 * cursor is provided.
 *
 * Example:
 *
 * Given that data has already been fetched on some user `<id>` on the `friends`
 * field:
 *
 * ```
 * fragment FriendsFragment on User {
 *   friends(first: 10) @connection(key: "FriendsFragment_friends") {
 *    edges {
 *      node {
 *        id
 *        }
 *      }
 *   }
 * }
 * ```
 *
 * An edge can be appended with:
 *
 * ```
 * store => {
 *   const user = store.get('<id>');
 *   const friends = RelayConnectionHandler.getConnection(user, 'FriendsFragment_friends');
 *   const edge = store.create('<edge-id>', 'FriendsEdge');
 *   RelayConnectionHandler.insertEdgeAfter(friends, edge);
 * }
 * ```
 */
function insertEdgeAfter(record, newEdge, cursor) {
  var _RelayConnectionInter2 = __webpack_require__(216).get(),
      CURSOR = _RelayConnectionInter2.CURSOR,
      EDGES = _RelayConnectionInter2.EDGES;

  var edges = record.getLinkedRecords(EDGES);
  if (!edges) {
    record.setLinkedRecords([newEdge], EDGES);
    return;
  }
  var nextEdges = void 0;
  if (cursor == null) {
    nextEdges = edges.concat(newEdge);
  } else {
    nextEdges = [];
    var foundCursor = false;
    for (var ii = 0; ii < edges.length; ii++) {
      var edge = edges[ii];
      nextEdges.push(edge);
      if (edge == null) {
        continue;
      }
      var edgeCursor = edge.getValue(CURSOR);
      if (cursor === edgeCursor) {
        nextEdges.push(newEdge);
        foundCursor = true;
      }
    }
    if (!foundCursor) {
      nextEdges.push(newEdge);
    }
  }
  record.setLinkedRecords(nextEdges, EDGES);
}

/**
 * @public
 *
 * Creates an edge for a connection record, given a node and edge type.
 */
function createEdge(store, record, node, edgeType) {
  var _RelayConnectionInter3 = __webpack_require__(216).get(),
      NODE = _RelayConnectionInter3.NODE;

  // An index-based client ID could easily conflict (unless it was
  // auto-incrementing, but there is nowhere to the store the id)
  // Instead, construct a client ID based on the connection ID and node ID,
  // which will only conflict if the same node is added to the same connection
  // twice. This is acceptable since the `insertEdge*` functions ignore
  // duplicates.


  var edgeID = __webpack_require__(217)(record.getDataID(), node.getDataID());
  var edge = store.get(edgeID);
  if (!edge) {
    edge = store.create(edgeID, edgeType);
  }
  edge.setLinkedRecord(node, NODE);
  return edge;
}

/**
 * @public
 *
 * Inserts an edge before the given cursor, or at the beginning of the list if
 * no cursor is provided.
 *
 * Example:
 *
 * Given that data has already been fetched on some user `<id>` on the `friends`
 * field:
 *
 * ```
 * fragment FriendsFragment on User {
 *   friends(first: 10) @connection(key: "FriendsFragment_friends") {
 *    edges {
 *      node {
 *        id
 *        }
 *      }
 *   }
 * }
 * ```
 *
 * An edge can be prepended with:
 *
 * ```
 * store => {
 *   const user = store.get('<id>');
 *   const friends = RelayConnectionHandler.getConnection(user, 'FriendsFragment_friends');
 *   const edge = store.create('<edge-id>', 'FriendsEdge');
 *   RelayConnectionHandler.insertEdgeBefore(friends, edge);
 * }
 * ```
 */
function insertEdgeBefore(record, newEdge, cursor) {
  var _RelayConnectionInter4 = __webpack_require__(216).get(),
      CURSOR = _RelayConnectionInter4.CURSOR,
      EDGES = _RelayConnectionInter4.EDGES;

  var edges = record.getLinkedRecords(EDGES);
  if (!edges) {
    record.setLinkedRecords([newEdge], EDGES);
    return;
  }
  var nextEdges = void 0;
  if (cursor == null) {
    nextEdges = [newEdge].concat(edges);
  } else {
    nextEdges = [];
    var foundCursor = false;
    for (var ii = 0; ii < edges.length; ii++) {
      var edge = edges[ii];
      if (edge != null) {
        var edgeCursor = edge.getValue(CURSOR);
        if (cursor === edgeCursor) {
          nextEdges.push(newEdge);
          foundCursor = true;
        }
      }
      nextEdges.push(edge);
    }
    if (!foundCursor) {
      nextEdges.unshift(newEdge);
    }
  }
  record.setLinkedRecords(nextEdges, EDGES);
}

/**
 * @public
 *
 * Remove any edges whose `node.id` matches the given id.
 */
function deleteNode(record, nodeID) {
  var _RelayConnectionInter5 = __webpack_require__(216).get(),
      EDGES = _RelayConnectionInter5.EDGES,
      NODE = _RelayConnectionInter5.NODE;

  var edges = record.getLinkedRecords(EDGES);
  if (!edges) {
    return;
  }
  var nextEdges = void 0;
  for (var ii = 0; ii < edges.length; ii++) {
    var edge = edges[ii];
    var node = edge && edge.getLinkedRecord(NODE);
    if (node != null && node.getDataID() === nodeID) {
      if (nextEdges === undefined) {
        nextEdges = edges.slice(0, ii);
      }
    } else if (nextEdges !== undefined) {
      nextEdges.push(edge);
    }
  }
  if (nextEdges !== undefined) {
    record.setLinkedRecords(nextEdges, EDGES);
  }
}

/**
 * @internal
 *
 * Creates a copy of an edge with a unique ID based on per-connection-instance
 * incrementing edge index. This is necessary to avoid collisions between edges,
 * which can occur because (edge) client IDs are assigned deterministically
 * based on the path from the nearest node with an id.
 *
 * Example: if the first N edges of the same connection are refetched, the edges
 * from the second fetch will be assigned the same IDs as the first fetch, even
 * though the nodes they point to may be different (or the same and in different
 * order).
 */
function buildConnectionEdge(store, connection, edge) {
  if (edge == null) {
    return edge;
  }

  var _RelayConnectionInter6 = __webpack_require__(216).get(),
      EDGES = _RelayConnectionInter6.EDGES;

  var edgeIndex = connection.getValue(NEXT_EDGE_INDEX);
  __webpack_require__(9)(typeof edgeIndex === 'number', 'RelayConnectionHandler: Expected %s to be a number, got `%s`.', NEXT_EDGE_INDEX, edgeIndex);
  var edgeID = __webpack_require__(217)(connection.getDataID(), EDGES, edgeIndex);
  var connectionEdge = store.create(edgeID, edge.getType());
  connectionEdge.copyFieldsFrom(edge);
  connection.setValue(edgeIndex + 1, NEXT_EDGE_INDEX);
  return connectionEdge;
}

/**
 * @internal
 *
 * Adds the source edges to the target edges, skipping edges with
 * duplicate node ids.
 */
function mergeEdges(sourceEdges, targetEdges, nodeIDs) {
  var _RelayConnectionInter7 = __webpack_require__(216).get(),
      NODE = _RelayConnectionInter7.NODE;

  for (var ii = 0; ii < sourceEdges.length; ii++) {
    var edge = sourceEdges[ii];
    if (!edge) {
      continue;
    }
    var node = edge.getLinkedRecord(NODE);
    var nodeID = node && node.getValue('id');
    if (nodeID) {
      if (nodeIDs.has(nodeID)) {
        continue;
      }
      nodeIDs.add(nodeID);
    }
    targetEdges.push(edge);
  }
}

module.exports = {
  buildConnectionEdge: buildConnectionEdge,
  createEdge: createEdge,
  deleteNode: deleteNode,
  getConnection: getConnection,
  insertEdgeAfter: insertEdgeAfter,
  insertEdgeBefore: insertEdgeBefore,
  update: update
};

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _defineProperty3 = _interopRequireDefault(__webpack_require__(246));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CONNECTION_CALLS = {
  after: true,
  before: true,
  find: true,
  first: true,
  last: true,
  surrounds: true
};

var REQUIRED_RANGE_CALLS = {
  find: true,
  first: true,
  last: true
};

var config = {
  CLIENT_MUTATION_ID: 'clientMutationId',
  CURSOR: 'cursor',
  /**
   * Whether `edges` fields are expected to have `source` fields.
   */
  EDGES_HAVE_SOURCE_FIELD: false,
  EDGES: 'edges',
  END_CURSOR: 'endCursor',
  HAS_NEXT_PAGE: 'hasNextPage',
  HAS_PREV_PAGE: 'hasPreviousPage',
  NODE: 'node',
  PAGE_INFO_TYPE: 'PageInfo',
  PAGE_INFO: 'pageInfo',
  START_CURSOR: 'startCursor'
};

/**
 * @internal
 *
 * Defines logic relevant to the informal "Connection" GraphQL interface.
 */
var RelayConnectionInterface = {
  inject: function inject(newConfig) {
    config = newConfig;
  },
  get: function get() {
    return config;
  },


  /**
   * Checks whether a call exists strictly to encode which parts of a connection
   * to fetch. Fields that only differ by connection call values should have the
   * same identity.
   */
  isConnectionCall: function isConnectionCall(call) {
    return CONNECTION_CALLS.hasOwnProperty(call.name);
  },


  /**
   * Checks whether a set of calls on a connection supply enough information to
   * fetch the range fields (i.e. `edges` and `page_info`).
   */
  hasRangeCalls: function hasRangeCalls(calls) {
    return calls.some(function (call) {
      return REQUIRED_RANGE_CALLS.hasOwnProperty(call.name);
    });
  },


  /**
   * Gets a default record representing a connection's `PAGE_INFO`.
   */
  getDefaultPageInfo: function getDefaultPageInfo() {
    var _ref;

    return _ref = {}, (0, _defineProperty3['default'])(_ref, config.END_CURSOR, null), (0, _defineProperty3['default'])(_ref, config.HAS_NEXT_PAGE, false), (0, _defineProperty3['default'])(_ref, config.HAS_PREV_PAGE, false), (0, _defineProperty3['default'])(_ref, config.START_CURSOR, null), _ref;
  }
};

module.exports = RelayConnectionInterface;

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var PREFIX = 'client:';

function generateRelayClientID(id, storageKey, index) {
  var key = id + ':' + storageKey;
  if (index != null) {
    key += ':' + index;
  }
  if (key.indexOf(PREFIX) !== 0) {
    key = PREFIX + key;
  }
  return key;
}

module.exports = generateRelayClientID;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var aStackPool = [];
var bStackPool = [];

/**
 * Checks if two values are equal. Values may be primitives, arrays, or objects.
 * Returns true if both arguments have the same keys and values.
 *
 * @see http://underscorejs.org
 * @copyright 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
 * @license MIT
 */
function areEqual(a, b) {
  var aStack = aStackPool.length ? aStackPool.pop() : [];
  var bStack = bStackPool.length ? bStackPool.pop() : [];
  var result = eq(a, b, aStack, bStack);
  aStack.length = 0;
  bStack.length = 0;
  aStackPool.push(aStack);
  bStackPool.push(bStack);
  return result;
}

function eq(a, b, aStack, bStack) {
  if (a === b) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    return a !== 0 || 1 / a == 1 / b;
  }
  if (a == null || b == null) {
    // a or b can be `null` or `undefined`
    return false;
  }
  if (typeof a != 'object' || typeof b != 'object') {
    return false;
  }
  var objToStr = Object.prototype.toString;
  var className = objToStr.call(a);
  if (className != objToStr.call(b)) {
    return false;
  }
  switch (className) {
    case '[object String]':
      return a == String(b);
    case '[object Number]':
      return isNaN(a) || isNaN(b) ? false : a == Number(b);
    case '[object Date]':
    case '[object Boolean]':
      return +a == +b;
    case '[object RegExp]':
      return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
  }
  // Assume equality for cyclic structures.
  var length = aStack.length;
  while (length--) {
    if (aStack[length] == a) {
      return bStack[length] == b;
    }
  }
  aStack.push(a);
  bStack.push(b);
  var size = 0;
  // Recursively compare objects and arrays.
  if (className === '[object Array]') {
    size = a.length;
    if (size !== b.length) {
      return false;
    }
    // Deep compare the contents, ignoring non-numeric properties.
    while (size--) {
      if (!eq(a[size], b[size], aStack, bStack)) {
        return false;
      }
    }
  } else {
    if (a.constructor !== b.constructor) {
      return false;
    }
    if (a.hasOwnProperty('valueOf') && b.hasOwnProperty('valueOf')) {
      return a.valueOf() == b.valueOf();
    }
    var keys = Object.keys(a);
    if (keys.length != Object.keys(b).length) {
      return false;
    }
    for (var i = 0; i < keys.length; i++) {
      if (!eq(a[keys[i]], b[keys[i]], aStack, bStack)) {
        return false;
      }
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}

module.exports = areEqual;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(213);
var core = __webpack_require__(210);
var ctx = __webpack_require__(252);
var hide = __webpack_require__(222);
var has = __webpack_require__(221);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(230)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 221 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(214);
var createDesc = __webpack_require__(231);
module.exports = __webpack_require__(220) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(224);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(283);
var defined = __webpack_require__(255);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var EXISTENT = __webpack_require__(227).EXISTENT,
    NONEXISTENT = __webpack_require__(227).NONEXISTENT,
    UNKNOWN = __webpack_require__(227).UNKNOWN;

/**
 * An implementation of the `MutableRecordSource` interface (defined in
 * `RelayStoreTypes`) that holds all records in memory.
 */


var RelayInMemoryRecordSource = function () {
  function RelayInMemoryRecordSource(records) {
    (0, _classCallCheck3['default'])(this, RelayInMemoryRecordSource);

    this._records = records || {};
  }

  RelayInMemoryRecordSource.prototype.clear = function clear() {
    this._records = {};
  };

  RelayInMemoryRecordSource.prototype['delete'] = function _delete(dataID) {
    this._records[dataID] = null;
  };

  RelayInMemoryRecordSource.prototype.get = function get(dataID) {
    return this._records[dataID];
  };

  RelayInMemoryRecordSource.prototype.getRecordIDs = function getRecordIDs() {
    return Object.keys(this._records);
  };

  RelayInMemoryRecordSource.prototype.getStatus = function getStatus(dataID) {
    if (!this._records.hasOwnProperty(dataID)) {
      return UNKNOWN;
    }
    return this._records[dataID] == null ? NONEXISTENT : EXISTENT;
  };

  RelayInMemoryRecordSource.prototype.has = function has(dataID) {
    return this._records.hasOwnProperty(dataID);
  };

  RelayInMemoryRecordSource.prototype.load = function load(dataID, callback) {
    callback(null, this.get(dataID));
  };

  RelayInMemoryRecordSource.prototype.remove = function remove(dataID) {
    delete this._records[dataID];
  };

  RelayInMemoryRecordSource.prototype.set = function set(dataID, record) {
    this._records[dataID] = record;
  };

  RelayInMemoryRecordSource.prototype.size = function size() {
    return Object.keys(this._records).length;
  };

  RelayInMemoryRecordSource.prototype.toJSON = function toJSON() {
    return this._records;
  };

  return RelayInMemoryRecordSource;
}();

module.exports = RelayInMemoryRecordSource;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var RelayRecordState = {
  /**
   * Record exists (either fetched from the server or produced by a local,
   * optimistic update).
   */
  EXISTENT: 'EXISTENT',

  /**
   * Record is known not to exist (either as the result of a mutation, or
   * because the server returned `null` when queried for the record).
   */
  NONEXISTENT: 'NONEXISTENT',

  /**
   * Record State is unknown because it has not yet been fetched from the
   * server.
   */
  UNKNOWN: 'UNKNOWN'
};

module.exports = RelayRecordState;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/**
 * Simple function for formatting strings.
 *
 * Replaces placeholders with values passed as extra arguments
 *
 * @param {string} format the base string
 * @param ...args the values to insert
 * @return {string} the replaced string
 */
function sprintf(format) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var index = 0;
  return format.replace(/%s/g, function (match) {
    return args[index++];
  });
}

module.exports = sprintf;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__(299);

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._40 = 0;
  this._65 = 0;
  this._55 = null;
  this._72 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._37 = null;
Promise._87 = null;
Promise._61 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
function handle(self, deferred) {
  while (self._65 === 3) {
    self = self._55;
  }
  if (Promise._37) {
    Promise._37(self);
  }
  if (self._65 === 0) {
    if (self._40 === 0) {
      self._40 = 1;
      self._72 = deferred;
      return;
    }
    if (self._40 === 1) {
      self._40 = 2;
      self._72 = [self._72, deferred];
      return;
    }
    self._72.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._65 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._65 === 1) {
        resolve(deferred.promise, self._55);
      } else {
        reject(deferred.promise, self._55);
      }
      return;
    }
    var ret = tryCallOne(cb, self._55);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._65 = 3;
      self._55 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._65 = 1;
  self._55 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._65 = 2;
  self._55 = newValue;
  if (Promise._87) {
    Promise._87(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._40 === 1) {
    handle(self, self._72);
    self._72 = null;
  }
  if (self._40 === 2) {
    for (var i = 0; i < self._72.length; i++) {
      handle(self, self._72[i]);
    }
    self._72 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}


/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 231 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Recursively "deep" freezes the supplied object.
 *
 * For convenience, and for consistency with the behavior of `Object.freeze`,
 * returns the now-frozen original object.
 */

function deepFreeze(object) {
  Object.freeze(object);
  Object.getOwnPropertyNames(object).forEach(function (name) {
    var property = object[name];
    if (property && typeof property === 'object' && !Object.isFrozen(property)) {
      deepFreeze(property);
    }
  });
  return object;
}

module.exports = deepFreeze;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__(206),
    ROOT_ID = _require.ROOT_ID,
    ROOT_TYPE = _require.ROOT_TYPE;

function normalizeRelayPayload(selector, payload, errors) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { handleStrippedNulls: false };

  var source = new (__webpack_require__(226))();
  source.set(ROOT_ID, __webpack_require__(204).create(ROOT_ID, ROOT_TYPE));

  var _RelayResponseNormali = __webpack_require__(349).normalize(source, selector, payload, options),
      fieldPayloads = _RelayResponseNormali.fieldPayloads,
      deferrableSelections = _RelayResponseNormali.deferrableSelections;

  return {
    errors: errors,
    fieldPayloads: fieldPayloads,
    deferrableSelections: deferrableSelections,
    source: source
  };
}

module.exports = normalizeRelayPayload;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Runtime function to correspond to the `graphql` tagged template function.
 * All calls to this function should be transformed by the plugin.
 */


// The type of a graphql`...` tagged template expression.
function graphql(strings) {
  __webpack_require__(9)(false, 'graphql: Unexpected invocation at runtime. Either the Babel transform ' + 'was not set up, or it failed to identify this call site. Make sure it ' + 'is being used verbatim as `graphql`.');
}

function getNode(taggedNode) {
  var fn = typeof taggedNode === 'function' ? taggedNode : taggedNode.modern;
  // Support for classic raw nodes (used in test mock)
  if (typeof fn !== 'function') {
    return taggedNode;
  }
  return fn();
}

function getFragment(taggedNode) {
  var fragment = getNode(taggedNode);
  __webpack_require__(9)(typeof fragment === 'object' && fragment !== null && fragment.kind === __webpack_require__(205).FRAGMENT, 'RelayModernGraphQLTag: Expected a fragment, got `%s`.', JSON.stringify(fragment));
  return fragment;
}

function getRequest(taggedNode) {
  var request = getNode(taggedNode);
  __webpack_require__(9)(typeof request === 'object' && request !== null && (request.kind === __webpack_require__(205).REQUEST || request.kind === __webpack_require__(205).BATCH_REQUEST), 'RelayModernGraphQLTag: Expected an request, got `%s`.', JSON.stringify(request));
  return request;
}

module.exports = {
  getFragment: getFragment,
  getRequest: getRequest,
  graphql: graphql
};

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var MutationTypes = Object.freeze({
  RANGE_ADD: 'RANGE_ADD',
  RANGE_DELETE: 'RANGE_DELETE',
  NODE_DELETE: 'NODE_DELETE',
  FIELDS_CHANGE: 'FIELDS_CHANGE',
  REQUIRED_CHILDREN: 'REQUIRED_CHILDREN'
});


var RangeOperations = Object.freeze({
  APPEND: 'append',
  IGNORE: 'ignore',
  PREPEND: 'prepend',
  REFETCH: 'refetch', // legacy only
  REMOVE: 'remove' // legacy only
});

// Unused in Relay Modern


// Unused in Relay Modern


function convert(configs, request, optimisticUpdater, updater) {
  var configOptimisticUpdates = optimisticUpdater ? [optimisticUpdater] : [];
  var configUpdates = updater ? [updater] : [];
  configs.forEach(function (config) {
    switch (config.type) {
      case 'NODE_DELETE':
        var nodeDeleteResult = nodeDelete(config, request);
        if (nodeDeleteResult) {
          configOptimisticUpdates.push(nodeDeleteResult);
          configUpdates.push(nodeDeleteResult);
        }
        break;
      case 'RANGE_ADD':
        var rangeAddResult = rangeAdd(config, request);
        if (rangeAddResult) {
          configOptimisticUpdates.push(rangeAddResult);
          configUpdates.push(rangeAddResult);
        }
        break;
      case 'RANGE_DELETE':
        var rangeDeleteResult = rangeDelete(config, request);
        if (rangeDeleteResult) {
          configOptimisticUpdates.push(rangeDeleteResult);
          configUpdates.push(rangeDeleteResult);
        }
        break;
    }
  });
  return {
    optimisticUpdater: function optimisticUpdater(store, data) {
      configOptimisticUpdates.forEach(function (eachOptimisticUpdater) {
        eachOptimisticUpdater(store, data);
      });
    },
    updater: function updater(store, data) {
      configUpdates.forEach(function (eachUpdater) {
        eachUpdater(store, data);
      });
    }
  };
}

function nodeDelete(config, request) {
  var deletedIDFieldName = config.deletedIDFieldName;

  var rootField = getRootField(request);
  if (!rootField) {
    return null;
  }
  return function (store, data) {
    var payload = store.getRootField(rootField);
    if (!payload) {
      return;
    }
    var deleteID = payload.getValue(deletedIDFieldName);
    var deleteIDs = Array.isArray(deleteID) ? deleteID : [deleteID];
    deleteIDs.forEach(function (id) {
      if (id && typeof id === 'string') {
        store['delete'](id);
      }
    });
  };
}

function rangeAdd(config, request) {
  var parentID = config.parentID,
      connectionInfo = config.connectionInfo,
      edgeName = config.edgeName;

  if (!parentID) {
    __webpack_require__(20)(false, 'RelayDeclarativeMutationConfig: For mutation config RANGE_ADD ' + 'to work you must include a parentID');
    return null;
  }
  var rootField = getRootField(request);
  if (!connectionInfo || !rootField) {
    return null;
  }
  return function (store, data) {
    var parent = store.get(parentID);
    if (!parent) {
      return;
    }
    var payload = store.getRootField(rootField);
    if (!payload) {
      return;
    }
    var serverEdge = payload.getLinkedRecord(edgeName);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = connectionInfo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var info = _step.value;

        if (!serverEdge) {
          continue;
        }
        var connection = __webpack_require__(215).getConnection(parent, info.key, info.filters);
        if (!connection) {
          continue;
        }
        var clientEdge = __webpack_require__(215).buildConnectionEdge(store, connection, serverEdge);
        if (!clientEdge) {
          continue;
        }
        switch (info.rangeBehavior) {
          case 'append':
            __webpack_require__(215).insertEdgeAfter(connection, clientEdge);
            break;
          case 'ignore':
            // Do nothing
            break;
          case 'prepend':
            __webpack_require__(215).insertEdgeBefore(connection, clientEdge);
            break;
          default:
            __webpack_require__(20)(false, 'RelayDeclarativeMutationConfig: RANGE_ADD range behavior `%s` ' + 'will not work as expected in RelayModern, supported range ' + "behaviors are 'append', 'prepend', and 'ignore'.", info.rangeBehavior);
            break;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };
}

function rangeDelete(config, request) {
  var parentID = config.parentID,
      connectionKeys = config.connectionKeys,
      pathToConnection = config.pathToConnection,
      deletedIDFieldName = config.deletedIDFieldName;

  if (!parentID) {
    __webpack_require__(20)(false, 'RelayDeclarativeMutationConfig: For mutation config RANGE_DELETE ' + 'to work you must include a parentID');
    return null;
  }
  var rootField = getRootField(request);
  if (!rootField) {
    return null;
  }
  return function (store, data) {
    if (!data) {
      return;
    }
    var deleteIDs = [];
    var deletedIDField = data[rootField];
    if (deletedIDField && Array.isArray(deletedIDFieldName)) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = deletedIDFieldName[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var eachField = _step2.value;

          if (deletedIDField && typeof deletedIDField === 'object') {
            deletedIDField = deletedIDField[eachField];
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (Array.isArray(deletedIDField)) {
        deletedIDField.forEach(function (idObject) {
          if (idObject && idObject.id && typeof idObject === 'object' && typeof idObject.id === 'string') {
            deleteIDs.push(idObject.id);
          }
        });
      } else if (deletedIDField && deletedIDField.id && typeof deletedIDField.id === 'string') {
        deleteIDs.push(deletedIDField.id);
      }
    } else if (deletedIDField && typeof deletedIDFieldName === 'string' && typeof deletedIDField === 'object') {
      deletedIDField = deletedIDField[deletedIDFieldName];
      if (typeof deletedIDField === 'string') {
        deleteIDs.push(deletedIDField);
      } else if (Array.isArray(deletedIDField)) {
        deletedIDField.forEach(function (id) {
          if (typeof id === 'string') {
            deleteIDs.push(id);
          }
        });
      }
    }
    deleteNode(parentID, connectionKeys, pathToConnection, store, deleteIDs);
  };
}

function deleteNode(parentID, connectionKeys, pathToConnection, store, deleteIDs) {
  __webpack_require__(20)(connectionKeys, 'RelayDeclarativeMutationConfig: RANGE_DELETE must provide a ' + 'connectionKeys');
  var parent = store.get(parentID);
  if (!parent) {
    return;
  }
  if (pathToConnection.length < 2) {
    __webpack_require__(20)(false, 'RelayDeclarativeMutationConfig: RANGE_DELETE ' + 'pathToConnection must include at least parent and connection');
    return;
  }
  var recordProxy = parent;
  for (var i = 1; i < pathToConnection.length - 1; i++) {
    if (recordProxy) {
      recordProxy = recordProxy.getLinkedRecord(pathToConnection[i]);
    }
  }
  // Should never enter loop except edge cases
  if (!connectionKeys || !recordProxy) {
    __webpack_require__(20)(false, 'RelayDeclarativeMutationConfig: RANGE_DELETE ' + 'pathToConnection is incorrect. Unable to find connection with ' + 'parentID: %s and path: %s', parentID, pathToConnection.toString());
    return;
  }
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    var _loop = function _loop() {
      var key = _step3.value;

      var connection = __webpack_require__(215).getConnection(recordProxy, key.key, key.filters);
      if (connection) {
        deleteIDs.forEach(function (deleteID) {
          __webpack_require__(215).deleteNode(connection, deleteID);
        });
      }
    };

    for (var _iterator3 = connectionKeys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3['return']) {
        _iterator3['return']();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}

function getRootField(request) {
  if (request.fragment.selections && request.fragment.selections.length > 0 && request.fragment.selections[0].kind === 'LinkedField') {
    return request.fragment.selections[0].name;
  }
  return null;
}

module.exports = {
  MutationTypes: MutationTypes,
  RangeOperations: RangeOperations,

  convert: convert
};

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__(249),
    isRelayContext = _require.isRelayContext;

var RelayPropTypes = {
  Container: function Container(props, propName, componentName) {
    var component = props[propName];
    if (component == null) {
      return new Error(__webpack_require__(228)('Required prop `%s` was not specified in `%s`.', propName, componentName));
    } else if (!__webpack_require__(388)(component)) {
      return new Error(__webpack_require__(228)('Invalid prop `%s` supplied to `%s`, expected a RelayContainer.', propName, componentName));
    }
    return null;
  },
  Environment: function Environment(props, propName, componentName) {
    var context = props[propName];
    if (!__webpack_require__(302)(context) || !__webpack_require__(301)(context)) {
      return new Error(__webpack_require__(228)('Invalid prop/context `%s` supplied to `%s`, expected `%s` to be ' + 'an object conforming to the `RelayEnvironment` interface.', propName, componentName, context));
    }
    return null;
  },


  QueryConfig: __webpack_require__(2).shape({
    name: __webpack_require__(2).string.isRequired,
    params: __webpack_require__(2).object.isRequired,
    queries: __webpack_require__(2).object.isRequired
  }),

  ClassicRelay: function ClassicRelay(props, propName, componentName) {
    var relay = props[propName];
    if (!isRelayContext(relay) || !__webpack_require__(302)(relay.environment)) {
      return new Error(__webpack_require__(228)('Invalid prop/context `%s` supplied to `%s`, expected `%s` to be ' + 'an object with a classic `environment` implementation and `variables`.', propName, componentName, relay));
    }
    return null;
  },
  Relay: function Relay(props, propName, componentName) {
    var relay = props[propName];
    if (!isRelayContext(relay)) {
      return new Error(__webpack_require__(228)('Invalid prop/context `%s` supplied to `%s`, expected `%s` to be ' + 'an object with an `environment` and `variables`.', propName, componentName, relay));
    }
    return null;
  }
};

module.exports = RelayPropTypes;

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Relay v1.6.0
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = __webpack_require__(305);

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(282);
var enumBugKeys = __webpack_require__(259);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 241 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 242 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(285);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(335);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(339);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(285);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Creates a copy of the provided value, ensuring any nested objects have their
 * keys sorted such that equivalent values would have identical JSON.stringify
 * results.
 */

function stableCopy(value) {
  if (!value || typeof value !== 'object') {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(stableCopy);
  }
  var keys = Object.keys(value).sort();
  var stable = {};
  for (var i = 0; i < keys.length; i++) {
    stable[keys[i]] = stableCopy(value[keys[i]]);
  }
  return stable;
}

module.exports = stableCopy;

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(345);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _extends3 = _interopRequireDefault(__webpack_require__(209));

var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__(227),
    EXISTENT = _require.EXISTENT;

var _require2 = __webpack_require__(206),
    UNPUBLISH_FIELD_SENTINEL = _require2.UNPUBLISH_FIELD_SENTINEL,
    UNPUBLISH_RECORD_SENTINEL = _require2.UNPUBLISH_RECORD_SENTINEL;

/**
 * @internal
 *
 * Wrapper API that is an amalgam of the `RelayModernRecord` API and
 * `MutableRecordSource` interface, implementing copy-on-write semantics for
 * records in a record source. If a `backup` is supplied, the mutator will
 * ensure that the backup contains sufficient information to revert all
 * modifications by publishing the backup.
 *
 * Modifications are applied to fresh copies of records with optional backups
 * created:
 * - Records in `base` are never modified.
 * - Modifications cause a fresh version of a record to be created in `sink`.
 *   These sink records contain only modified fields.
 * - If a `backup` is supplied, any modifications to a record will cause the
 *   sink version of the record to be added to the backup.
 * - Creation of a record causes a sentinel object to be added to the backup
 *   so that the new record can be removed from the store by publishing the
 *   backup.
 */
var RelayRecordSourceMutator = function () {
  function RelayRecordSourceMutator(base, sink, backup) {
    (0, _classCallCheck3['default'])(this, RelayRecordSourceMutator);

    this._backup = backup;
    this._base = base;
    this._sink = sink;
    this.__sources = [sink, base];
  }

  RelayRecordSourceMutator.prototype._createBackupRecord = function _createBackupRecord(dataID) {
    var backup = this._backup;
    if (backup && !backup.has(dataID)) {
      var baseRecord = this._base.get(dataID);
      if (baseRecord != null) {
        backup.set(dataID, baseRecord);
      } else if (baseRecord === null) {
        backup['delete'](dataID);
      }
    }
  };

  RelayRecordSourceMutator.prototype._setSentinelFieldsInBackupRecord = function _setSentinelFieldsInBackupRecord(dataID, record) {
    var backup = this._backup;
    if (backup) {
      var backupRecord = backup.get(dataID);
      if (backupRecord && backupRecord !== UNPUBLISH_RECORD_SENTINEL) {
        var copy = null;
        for (var key in record) {
          if (record.hasOwnProperty(key)) {
            if (!(key in backupRecord)) {
              copy = copy || (0, _extends3['default'])({}, backupRecord);
              copy[key] = UNPUBLISH_FIELD_SENTINEL;
            }
          }
        }
        backup.set(dataID, copy || backupRecord);
      }
    }
  };

  RelayRecordSourceMutator.prototype._setSentinelFieldInBackupRecord = function _setSentinelFieldInBackupRecord(dataID, storageKey) {
    var backup = this._backup;
    if (backup) {
      var backupRecord = backup.get(dataID);
      if (backupRecord && backupRecord !== UNPUBLISH_RECORD_SENTINEL && !(storageKey in backupRecord)) {
        var copy = (0, _extends3['default'])({}, backupRecord);
        __webpack_require__(204).setValue(copy, storageKey, UNPUBLISH_FIELD_SENTINEL);
        backup.set(dataID, copy);
      }
    }
  };

  RelayRecordSourceMutator.prototype._getSinkRecord = function _getSinkRecord(dataID) {
    var sinkRecord = this._sink.get(dataID);
    if (!sinkRecord) {
      var baseRecord = this._base.get(dataID);
      __webpack_require__(9)(baseRecord, 'RelayRecordSourceMutator: Cannot modify non-existent record `%s`.', dataID);
      sinkRecord = __webpack_require__(204).create(dataID, __webpack_require__(204).getType(baseRecord));
      this._sink.set(dataID, sinkRecord);
    }
    return sinkRecord;
  };

  RelayRecordSourceMutator.prototype.copyFields = function copyFields(sourceID, sinkID) {
    var sinkSource = this._sink.get(sourceID);
    var baseSource = this._base.get(sourceID);
    __webpack_require__(9)(sinkSource || baseSource, 'RelayRecordSourceMutator#copyFields(): Cannot copy fields from ' + 'non-existent record `%s`.', sourceID);
    this._createBackupRecord(sinkID);
    var sink = this._getSinkRecord(sinkID);
    if (baseSource) {
      __webpack_require__(204).copyFields(baseSource, sink);
    }
    if (sinkSource) {
      __webpack_require__(204).copyFields(sinkSource, sink);
    }
    this._setSentinelFieldsInBackupRecord(sinkID, sink);
  };

  RelayRecordSourceMutator.prototype.copyFieldsFromRecord = function copyFieldsFromRecord(record, sinkID) {
    this.copyFields(__webpack_require__(204).getDataID(record), sinkID);
    var sink = this._getSinkRecord(sinkID);
    __webpack_require__(204).copyFields(record, sink);
    this._setSentinelFieldsInBackupRecord(sinkID, sink);
  };

  RelayRecordSourceMutator.prototype.create = function create(dataID, typeName) {
    __webpack_require__(9)(this._base.getStatus(dataID) !== EXISTENT && this._sink.getStatus(dataID) !== EXISTENT, 'RelayRecordSourceMutator#create(): Cannot create a record with id ' + '`%s`, this record already exists.', dataID);
    if (this._backup) {
      this._backup.set(dataID, UNPUBLISH_RECORD_SENTINEL);
    }
    var record = __webpack_require__(204).create(dataID, typeName);
    this._sink.set(dataID, record);
  };

  RelayRecordSourceMutator.prototype['delete'] = function _delete(dataID) {
    this._createBackupRecord(dataID);
    this._sink['delete'](dataID);
  };

  RelayRecordSourceMutator.prototype.getStatus = function getStatus(dataID) {
    return this._sink.has(dataID) ? this._sink.getStatus(dataID) : this._base.getStatus(dataID);
  };

  RelayRecordSourceMutator.prototype.getType = function getType(dataID) {
    for (var ii = 0; ii < this.__sources.length; ii++) {
      var record = this.__sources[ii].get(dataID);
      if (record) {
        return __webpack_require__(204).getType(record);
      } else if (record === null) {
        return null;
      }
    }
  };

  RelayRecordSourceMutator.prototype.getValue = function getValue(dataID, storageKey) {
    for (var ii = 0; ii < this.__sources.length; ii++) {
      var record = this.__sources[ii].get(dataID);
      if (record) {
        var value = __webpack_require__(204).getValue(record, storageKey);
        if (value !== undefined) {
          return value;
        }
      } else if (record === null) {
        return null;
      }
    }
  };

  RelayRecordSourceMutator.prototype.setValue = function setValue(dataID, storageKey, value) {
    this._createBackupRecord(dataID);
    var sinkRecord = this._getSinkRecord(dataID);
    __webpack_require__(204).setValue(sinkRecord, storageKey, value);
    this._setSentinelFieldInBackupRecord(dataID, storageKey);
  };

  RelayRecordSourceMutator.prototype.getLinkedRecordID = function getLinkedRecordID(dataID, storageKey) {
    for (var ii = 0; ii < this.__sources.length; ii++) {
      var record = this.__sources[ii].get(dataID);
      if (record) {
        var linkedID = __webpack_require__(204).getLinkedRecordID(record, storageKey);
        if (linkedID !== undefined) {
          return linkedID;
        }
      } else if (record === null) {
        return null;
      }
    }
  };

  RelayRecordSourceMutator.prototype.setLinkedRecordID = function setLinkedRecordID(dataID, storageKey, linkedID) {
    this._createBackupRecord(dataID);
    var sinkRecord = this._getSinkRecord(dataID);
    __webpack_require__(204).setLinkedRecordID(sinkRecord, storageKey, linkedID);
    this._setSentinelFieldInBackupRecord(dataID, storageKey);
  };

  RelayRecordSourceMutator.prototype.getLinkedRecordIDs = function getLinkedRecordIDs(dataID, storageKey) {
    for (var ii = 0; ii < this.__sources.length; ii++) {
      var record = this.__sources[ii].get(dataID);
      if (record) {
        var linkedIDs = __webpack_require__(204).getLinkedRecordIDs(record, storageKey);
        if (linkedIDs !== undefined) {
          return linkedIDs;
        }
      } else if (record === null) {
        return null;
      }
    }
  };

  RelayRecordSourceMutator.prototype.setLinkedRecordIDs = function setLinkedRecordIDs(dataID, storageKey, linkedIDs) {
    this._createBackupRecord(dataID);
    var sinkRecord = this._getSinkRecord(dataID);
    __webpack_require__(204).setLinkedRecordIDs(sinkRecord, storageKey, linkedIDs);
    this._setSentinelFieldInBackupRecord(dataID, storageKey);
  };

  return RelayRecordSourceMutator;
}();

module.exports = RelayRecordSourceMutator;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * A Subscription object is returned from .subscribe(), which can be
 * unsubscribed or checked to see if the resulting subscription has closed.
 */


/**
 * An Observer is an object of optional callback functions provided to
 * .subscribe(). Each callback function is invoked when that event occurs.
 */


/**
 * A Sink is an object of methods provided by Observable during construction.
 * The methods are to be called to trigger each event. It also contains a closed
 * field to see if the resulting subscription has closed.
 */


/**
 * A Source is the required argument when constructing a new Observable. Similar
 * to a Promise constructor, this is a function which is invoked with a Sink,
 * and may return either a cleanup function or a Subscription instance (for use
 * when composing Observables).
 */


/**
 * A Subscribable is an interface describing any object which can be subscribed.
 *
 * Note: A sink may be passed directly to .subscribe() as its observer,
 * allowing for easily composing Subscribables.
 */


// Note: This should accept Subscribable<T> instead of RelayObservable<T>,
// however Flow cannot yet distinguish it from T.
var hostReportError = swallowError;

/**
 * Limited implementation of ESObservable, providing the limited set of behavior
 * Relay networking requires.
 *
 * Observables retain the benefit of callbacks which can be called
 * synchronously, avoiding any UI jitter, while providing a compositional API,
 * which simplifies logic and prevents mishandling of errors compared to
 * the direct use of callback functions.
 *
 * ESObservable: https://github.com/tc39/proposal-observable
 */

var RelayObservable = function () {
  RelayObservable.create = function create(source) {
    return new RelayObservable(source);
  };

  // Use RelayObservable.create()


  function RelayObservable(source) {
    (0, _classCallCheck3['default'])(this, RelayObservable);

    if (process.env.NODE_ENV !== 'production') {
      // Early runtime errors for ill-formed sources.
      if (!source || typeof source !== 'function') {
        throw new Error('Source must be a Function: ' + String(source));
      }
    }
    this._source = source;
  }

  /**
   * When an emitted error event is not handled by an Observer, it is reported
   * to the host environment (what the ESObservable spec refers to as
   * "HostReportErrors()").
   *
   * The default implementation in development rethrows thrown errors, and
   * logs emitted error events to the console, while in production does nothing
   * (swallowing unhandled errors).
   *
   * Called during application initialization, this method allows
   * application-specific handling of unhandled errors. Allowing, for example,
   * integration with error logging or developer tools.
   *
   * A second parameter `isUncaughtThrownError` is true when the unhandled error
   * was thrown within an Observer handler, and false when the unhandled error
   * was an unhandled emitted event.
   *
   *  - Uncaught thrown errors typically represent avoidable errors thrown from
   *    application code, which should be handled with a try/catch block, and
   *    usually have useful stack traces.
   *
   *  - Unhandled emitted event errors typically represent unavoidable events in
   *    application flow such as network failure, and may not have useful
   *    stack traces.
   */


  RelayObservable.onUnhandledError = function onUnhandledError(callback) {
    hostReportError = callback;
  };

  /**
   * Accepts various kinds of data sources, and always returns a RelayObservable
   * useful for accepting the result of a user-provided FetchFunction.
   */


  RelayObservable.from = function from(obj) {
    return isObservable(obj) ? fromObservable(obj) : __webpack_require__(365)(obj) ? fromPromise(obj) : fromValue(obj);
  };

  /**
   * Creates a RelayObservable, given a function which expects a legacy
   * Relay Observer as the last argument and which returns a Disposable.
   *
   * To support migration to Observable, the function may ignore the
   * legacy Relay observer and directly return an Observable instead.
   */


  RelayObservable.fromLegacy = function fromLegacy(callback) {
    return RelayObservable.create(function (sink) {
      var result = callback({
        onNext: sink.next,
        onError: sink.error,
        onCompleted: sink.complete
      });
      return isObservable(result) ? result.subscribe(sink) : function () {
        return result.dispose();
      };
    });
  };

  /**
   * Similar to promise.catch(), observable.catch() handles error events, and
   * provides an alternative observable to use in it's place.
   *
   * If the catch handler throws a new error, it will appear as an error event
   * on the resulting Observable.
   */


  RelayObservable.prototype['catch'] = function _catch(fn) {
    var _this = this;

    return RelayObservable.create(function (sink) {
      var subscription = void 0;
      _this.subscribe({
        start: function start(sub) {
          subscription = sub;
        },
        next: sink.next,
        complete: sink.complete,
        error: function (_error2) {
          function error(_x) {
            return _error2.apply(this, arguments);
          }

          error.toString = function () {
            return _error2.toString();
          };

          return error;
        }(function (error) {
          try {
            fn(error).subscribe({
              start: function start(sub) {
                subscription = sub;
              },
              next: sink.next,
              complete: sink.complete,
              error: sink.error
            });
          } catch (error2) {
            sink.error(error2, true /* isUncaughtThrownError */);
          }
        })
      });
      return function () {
        return subscription.unsubscribe();
      };
    });
  };

  /**
   * Returns a new Observable which returns the same values as this one, but
   * modified so that the provided Observer is called to perform a side-effects
   * for all events emitted by the source.
   *
   * Any errors that are thrown in the side-effect Observer are unhandled, and
   * do not affect the source Observable or its Observer.
   *
   * This is useful for when debugging your Observables or performing other
   * side-effects such as logging or performance monitoring.
   */


  RelayObservable.prototype['do'] = function _do(observer) {
    var _this2 = this;

    return RelayObservable.create(function (sink) {
      var both = function both(action) {
        return function () {
          try {
            observer[action] && observer[action].apply(observer, arguments);
          } catch (error) {
            hostReportError(error, true /* isUncaughtThrownError */);
          }
          sink[action] && sink[action].apply(sink, arguments);
        };
      };
      return _this2.subscribe({
        start: both('start'),
        next: both('next'),
        error: both('error'),
        complete: both('complete'),
        unsubscribe: both('unsubscribe')
      });
    });
  };

  /**
   * Returns a new Observable which returns the same values as this one, but
   * modified so that the finally callback is performed after completion,
   * whether normal or due to error or unsubscription.
   *
   * This is useful for cleanup such as resource finalization.
   */


  RelayObservable.prototype['finally'] = function _finally(fn) {
    var _this3 = this;

    return RelayObservable.create(function (sink) {
      var subscription = _this3.subscribe(sink);
      return function () {
        subscription.unsubscribe();
        fn();
      };
    });
  };

  /**
   * Returns a new Observable which is identical to this one, unless this
   * Observable completes before yielding any values, in which case the new
   * Observable will yield the values from the alternate Observable.
   *
   * If this Observable does yield values, the alternate is never subscribed to.
   *
   * This is useful for scenarios where values may come from multiple sources
   * which should be tried in order, i.e. from a cache before a network.
   */


  RelayObservable.prototype.ifEmpty = function ifEmpty(alternate) {
    var _this4 = this;

    return RelayObservable.create(function (sink) {
      var hasValue = false;
      var current = _this4.subscribe({
        next: function next(value) {
          hasValue = true;
          sink.next(value);
        },

        error: sink.error,
        complete: function complete() {
          if (hasValue) {
            sink.complete();
          } else {
            current = alternate.subscribe(sink);
          }
        }
      });
      return function () {
        current.unsubscribe();
      };
    });
  };

  /**
   * Observable's primary API: returns an unsubscribable Subscription to the
   * source of this Observable.
   *
   * Note: A sink may be passed directly to .subscribe() as its observer,
   * allowing for easily composing Observables.
   */


  RelayObservable.prototype.subscribe = function subscribe(observer) {
    if (process.env.NODE_ENV !== 'production') {
      // Early runtime errors for ill-formed observers.
      if (!observer || typeof observer !== 'object') {
        throw new Error('Observer must be an Object with callbacks: ' + String(observer));
      }
    }
    return _subscribe(this._source, observer);
  };

  /**
   * Supports subscription of a legacy Relay Observer, returning a Disposable.
   */


  RelayObservable.prototype.subscribeLegacy = function subscribeLegacy(legacyObserver) {
    var subscription = this.subscribe({
      next: legacyObserver.onNext,
      error: legacyObserver.onError,
      complete: legacyObserver.onCompleted
    });
    return {
      dispose: subscription.unsubscribe
    };
  };

  /**
   * Returns a new Observerable where each value has been transformed by
   * the mapping function.
   */


  RelayObservable.prototype.map = function map(fn) {
    return this.mergeMap(function (value) {
      return fromValue(fn(value));
    });
  };

  /**
   * Returns a new Observable where each value is replaced with a new Observable
   * by the mapping function, the results of which returned as a single
   * merged Observable.
   */


  RelayObservable.prototype.mergeMap = function mergeMap(fn) {
    var _this5 = this;

    return RelayObservable.create(function (sink) {
      var subscriptions = [];

      function start(subscription) {
        this._sub = subscription;
        subscriptions.push(subscription);
      }

      function complete() {
        subscriptions.splice(subscriptions.indexOf(this._sub), 1);
        if (subscriptions.length === 0) {
          sink.complete();
        }
      }

      _this5.subscribe({
        start: start,
        next: function next(value) {
          try {
            if (!sink.closed) {
              RelayObservable.from(fn(value)).subscribe({
                start: start,
                next: sink.next,
                error: sink.error,
                complete: complete
              });
            }
          } catch (error) {
            sink.error(error, true /* isUncaughtThrownError */);
          }
        },

        error: sink.error,
        complete: complete
      });

      return function () {
        subscriptions.forEach(function (sub) {
          return sub.unsubscribe();
        });
        subscriptions.length = 0;
      };
    });
  };

  /**
   * Returns a new Observable which first mirrors this Observable, then when it
   * completes, waits for `pollInterval` milliseconds before re-subscribing to
   * this Observable again, looping in this manner until unsubscribed.
   *
   * The returned Observable never completes.
   */


  RelayObservable.prototype.poll = function poll(pollInterval) {
    var _this6 = this;

    if (process.env.NODE_ENV !== 'production') {
      if (typeof pollInterval !== 'number' || pollInterval <= 0) {
        throw new Error('RelayObservable: Expected pollInterval to be positive, got: ' + pollInterval);
      }
    }
    return RelayObservable.create(function (sink) {
      var subscription = void 0;
      var timeout = void 0;
      var poll = function poll() {
        subscription = _this6.subscribe({
          next: sink.next,
          error: sink.error,
          complete: function complete() {
            timeout = setTimeout(poll, pollInterval);
          }
        });
      };
      poll();
      return function () {
        clearTimeout(timeout);
        subscription.unsubscribe();
      };
    });
  };

  /**
   * Returns a Promise which resolves when this Observable yields a first value
   * or when it completes with no value.
   */


  RelayObservable.prototype.toPromise = function toPromise() {
    var _this7 = this;

    return new Promise(function (resolve, reject) {
      var subscription = void 0;
      _this7.subscribe({
        start: function start(sub) {
          subscription = sub;
        },
        next: function next(val) {
          resolve(val);
          subscription.unsubscribe();
        },

        error: reject,
        complete: resolve
      });
    });
  };

  return RelayObservable;
}();

// Use declarations to teach Flow how to check isObservable.


function isObservable(obj) {
  return typeof obj === 'object' && obj !== null && typeof obj.subscribe === 'function';
}

function fromObservable(obj) {
  return obj instanceof RelayObservable ? obj : RelayObservable.create(function (sink) {
    return obj.subscribe(sink);
  });
}

function fromPromise(promise) {
  return RelayObservable.create(function (sink) {
    // Since sink methods do not throw, the resulting Promise can be ignored.
    promise.then(function (value) {
      sink.next(value);
      sink.complete();
    }, sink.error);
  });
}

function fromValue(value) {
  return RelayObservable.create(function (sink) {
    sink.next(value);
    sink.complete();
  });
}

function _subscribe(source, observer) {
  var closed = false;
  var cleanup = void 0;

  // Ideally we would simply describe a `get closed()` method on the Sink and
  // Subscription objects below, however not all flow environments we expect
  // Relay to be used within will support property getters, and many minifier
  // tools still do not support ES5 syntax. Instead, we can use defineProperty.
  var withClosed = function withClosed(obj) {
    return Object.defineProperty(obj, 'closed', { get: function get() {
        return closed;
      } });
  };

  function doCleanup() {
    if (cleanup) {
      if (cleanup.unsubscribe) {
        cleanup.unsubscribe();
      } else {
        try {
          cleanup();
        } catch (error) {
          hostReportError(error, true /* isUncaughtThrownError */);
        }
      }
      cleanup = undefined;
    }
  }

  // Create a Subscription.
  var subscription = withClosed({
    unsubscribe: function unsubscribe() {
      if (!closed) {
        closed = true;

        // Tell Observer that unsubscribe was called.
        try {
          observer.unsubscribe && observer.unsubscribe(subscription);
        } catch (error) {
          hostReportError(error, true /* isUncaughtThrownError */);
        } finally {
          doCleanup();
        }
      }
    }
  });

  // Tell Observer that observation is about to begin.
  try {
    observer.start && observer.start(subscription);
  } catch (error) {
    hostReportError(error, true /* isUncaughtThrownError */);
  }

  // If closed already, don't bother creating a Sink.
  if (closed) {
    return subscription;
  }

  // Create a Sink respecting subscription state and cleanup.
  var sink = withClosed({
    next: function next(value) {
      if (!closed && observer.next) {
        try {
          observer.next(value);
        } catch (error) {
          hostReportError(error, true /* isUncaughtThrownError */);
        }
      }
    },
    error: function (_error3) {
      function error(_x2, _x3) {
        return _error3.apply(this, arguments);
      }

      error.toString = function () {
        return _error3.toString();
      };

      return error;
    }(function (error, isUncaughtThrownError) {
      if (closed || !observer.error) {
        closed = true;
        hostReportError(error, isUncaughtThrownError || false);
        doCleanup();
      } else {
        closed = true;
        try {
          observer.error(error);
        } catch (error2) {
          hostReportError(error2, true /* isUncaughtThrownError */);
        } finally {
          doCleanup();
        }
      }
    }),
    complete: function complete() {
      if (!closed) {
        closed = true;
        try {
          observer.complete && observer.complete();
        } catch (error) {
          hostReportError(error, true /* isUncaughtThrownError */);
        } finally {
          doCleanup();
        }
      }
    }
  });

  // If anything goes wrong during observing the source, handle the error.
  try {
    cleanup = source(sink);
  } catch (error) {
    sink.error(error, true /* isUncaughtThrownError */);
  }

  if (process.env.NODE_ENV !== 'production') {
    // Early runtime errors for ill-formed returned cleanup.
    if (cleanup !== undefined && typeof cleanup !== 'function' && (!cleanup || typeof cleanup.unsubscribe !== 'function')) {
      throw new Error('Returned cleanup function which cannot be called: ' + String(cleanup));
    }
  }

  // If closed before the source function existed, cleanup now.
  if (closed) {
    doCleanup();
  }

  return subscription;
}

function swallowError(_error, _isUncaughtThrownError) {
  // do nothing.
}

if (process.env.NODE_ENV !== 'production') {
  // Default implementation of HostReportErrors() in development builds.
  // Can be replaced by the host application environment.
  RelayObservable.onUnhandledError(function (error, isUncaughtThrownError) {
    if (typeof fail === 'function') {
      // In test environments (Jest), fail() immediately fails the current test.
      fail(String(error));
    } else if (isUncaughtThrownError) {
      // Rethrow uncaught thrown errors on the next frame to avoid breaking
      // current logic.
      setTimeout(function () {
        throw error;
      });
    } else if (typeof console !== 'undefined') {
      // Otherwise, log the unhandled error for visibility.
      // eslint-ignore-next-line no-console
      console.error('RelayObservable: Unhandled Error', error);
    }
  });
}

module.exports = RelayObservable;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Asserts that the input is a matches the `RelayContext` type defined in
 * `RelayEnvironmentTypes` and returns it as that type.
 */
function assertRelayContext(relay) {
  __webpack_require__(9)(isRelayContext(relay), 'RelayContext: Expected `context.relay` to be an object conforming to ' + 'the `RelayContext` interface, got `%s`.', relay);
  return relay;
}

/**
 * Determine if the input is a plain object that matches the `RelayContext`
 * type defined in `RelayEnvironmentTypes`.
 */
function isRelayContext(context) {
  return typeof context === 'object' && context !== null && !Array.isArray(context) && __webpack_require__(301)(context.environment) && __webpack_require__(387)(context.variables);
}

module.exports = {
  assertRelayContext: assertRelayContext,
  isRelayContext: isRelayContext
};

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * @internal
 *
 * Helper for checking if this is a React Component
 * created with React.Component or React.createClass().
 */

function isReactComponent(component) {
  return !!(component && typeof component.prototype === 'object' && component.prototype && component.prototype.isReactComponent);
}

function getReactComponent(Component) {
  if (isReactComponent(Component)) {
    return Component;
  } else {
    return null;
  }
}

function getComponentName(Component) {
  var name = void 0;
  var ComponentClass = getReactComponent(Component);
  if (ComponentClass) {
    name = ComponentClass.displayName || ComponentClass.name;
  } else if (typeof Component === 'function') {
    // This is a stateless functional component.
    name = Component.displayName || Component.name || 'StatelessComponent';
  } else {
    name = 'ReactElement';
  }
  return String(name);
}

function getContainerName(Component) {
  return 'Relay(' + getComponentName(Component) + ')';
}

module.exports = {
  getComponentName: getComponentName,
  getContainerName: getContainerName,
  getReactComponent: getReactComponent
};

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _relayRuntime = __webpack_require__(208);

var _relayDevtools = __webpack_require__(394);

(0, _relayDevtools.installRelayDevTools)();
exports.default = new _relayRuntime.Environment({
    network: _relayRuntime.Network.create(function (operation, variables) {
        return fetch('https://api.graph.cool/relay/v1/cjhh4m5wb64bh0187823nbudy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                variables: variables,
                query: operation.text
            })
        }).then(function (res) {
            return res.json();
        }).catch(function (err) {
            return console.error(err);
        });
    }),
    store: new _relayRuntime.Store(new _relayRuntime.RecordSource())
});

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(310);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(224);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 254 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 255 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 256 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(258)('keys');
var uid = __webpack_require__(241);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(210);
var global = __webpack_require__(213);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(240) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 259 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 260 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(255);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(223);
var dPs = __webpack_require__(318);
var enumBugKeys = __webpack_require__(259);
var IE_PROTO = __webpack_require__(257)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(281)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(319).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(214).f;
var has = __webpack_require__(221);
var TAG = __webpack_require__(211)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(211);


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(213);
var core = __webpack_require__(210);
var LIBRARY = __webpack_require__(240);
var wksExt = __webpack_require__(264);
var defineProperty = __webpack_require__(214).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _extends3 = _interopRequireDefault(__webpack_require__(209));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Determines the variables that are in scope for a fragment given the variables
 * in scope at the root query as well as any arguments applied at the fragment
 * spread via `@arguments`.
 *
 * Note that this is analagous to determining function arguments given a function call.
 */
function getFragmentVariables(fragment, rootVariables, argumentVariables) {
  var variables = void 0;
  fragment.argumentDefinitions.forEach(function (definition) {
    if (argumentVariables.hasOwnProperty(definition.name)) {
      return;
    }
    variables = variables || (0, _extends3['default'])({}, argumentVariables);
    switch (definition.kind) {
      case 'LocalArgument':
        variables[definition.name] = definition.defaultValue;
        break;
      case 'RootArgument':
        if (!rootVariables.hasOwnProperty(definition.name)) {
          /*
           * A temporary fix to mute false alarm in cases where the root argument is stripped
           * off by the compiler due to a conditional directive, we do not need this argument
           * when tryiny to read the data from the store.
           */
          break;
        }
        variables[definition.name] = rootVariables[definition.name];
        break;
      default:
        __webpack_require__(9)(false, 'RelayConcreteVariables: Unexpected node kind `%s` in fragment `%s`.', definition.kind, fragment.name);
    }
  });
  return variables || argumentVariables;
}

/**
 * Determines the variables that are in scope for a given operation given values
 * for some/all of its arguments. Extraneous input variables are filtered from
 * the output, and missing variables are set to default values (if given in the
 * operation's definition).
 */
function getOperationVariables(operation, variables) {
  var operationVariables = {};
  operation.argumentDefinitions.forEach(function (def) {
    var value = def.defaultValue;
    if (variables[def.name] != null) {
      value = variables[def.name];
    }
    operationVariables[def.name] = value;
    if (process.env.NODE_ENV !== 'production') {
      __webpack_require__(20)(value != null || def.type[def.type.length - 1] !== '!', 'RelayConcreteVariables: Expected a value for non-nullable variable ' + '`$%s: %s` on operation `%s`, got `%s`. Make sure you supply a ' + 'value for all non-nullable arguments.', def.name, def.type, operation.name, JSON.stringify(value));
    }
  });
  return operationVariables;
}

module.exports = {
  getFragmentVariables: getFragmentVariables,
  getOperationVariables: getOperationVariables
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__(292),
    DEFAULT_HANDLE_KEY = _require.DEFAULT_HANDLE_KEY;

/**
 * @internal
 *
 * Helper to create a unique name for a handle field based on the handle name, handle key and
 * source field.
 */


function getRelayHandleKey(handleName, key, fieldName) {
  if (key && key !== DEFAULT_HANDLE_KEY) {
    return '__' + key + '_' + handleName;
  }

  __webpack_require__(9)(fieldName != null, 'getRelayHandleKey: Expected either `fieldName` or `key` in `handle` to be provided');
  return '__' + fieldName + '_' + handleName;
}

module.exports = getRelayHandleKey;

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__(227),
    EXISTENT = _require.EXISTENT,
    NONEXISTENT = _require.NONEXISTENT;

var _require2 = __webpack_require__(206),
    ROOT_ID = _require2.ROOT_ID,
    ROOT_TYPE = _require2.ROOT_TYPE;

/**
 * @internal
 *
 * A helper for manipulating a `RecordSource` via an imperative/OO-style API.
 */
var RelayRecordSourceProxy = function () {
  function RelayRecordSourceProxy(mutator, handlerProvider) {
    (0, _classCallCheck3['default'])(this, RelayRecordSourceProxy);

    this.__mutator = mutator;
    this._handlerProvider = handlerProvider || null;
    this._proxies = {};
  }

  RelayRecordSourceProxy.prototype.publishSource = function publishSource(source, fieldPayloads) {
    var _this = this;

    var dataIDs = source.getRecordIDs();
    dataIDs.forEach(function (dataID) {
      var status = source.getStatus(dataID);
      if (status === EXISTENT) {
        var sourceRecord = source.get(dataID);
        if (sourceRecord) {
          if (_this.__mutator.getStatus(dataID) !== EXISTENT) {
            _this.create(dataID, __webpack_require__(204).getType(sourceRecord));
          }
          _this.__mutator.copyFieldsFromRecord(sourceRecord, dataID);
          delete _this._proxies[dataID];
        }
      } else if (status === NONEXISTENT) {
        _this['delete'](dataID);
      }
    });

    if (fieldPayloads && fieldPayloads.length) {
      fieldPayloads.forEach(function (fieldPayload) {
        var handler = _this._handlerProvider && _this._handlerProvider(fieldPayload.handle);
        __webpack_require__(9)(handler, 'RelayModernEnvironment: Expected a handler to be provided for handle `%s`.', fieldPayload.handle);
        handler.update(_this, fieldPayload);
      });
    }
  };

  RelayRecordSourceProxy.prototype.commitPayload = function commitPayload(operation, response) {
    if (!response) {
      return new (__webpack_require__(269))(this, operation.fragment);
    }

    var _normalizeRelayPayloa = __webpack_require__(234)(operation.root, response),
        source = _normalizeRelayPayloa.source,
        fieldPayloads = _normalizeRelayPayloa.fieldPayloads;

    this.publishSource(source, fieldPayloads);
    return new (__webpack_require__(269))(this, operation.fragment);
  };

  RelayRecordSourceProxy.prototype.create = function create(dataID, typeName) {
    this.__mutator.create(dataID, typeName);
    delete this._proxies[dataID];
    var record = this.get(dataID);
    // For flow
    __webpack_require__(9)(record, 'RelayRecordSourceProxy#create(): Expected the created record to exist.');
    return record;
  };

  RelayRecordSourceProxy.prototype['delete'] = function _delete(dataID) {
    __webpack_require__(9)(dataID !== ROOT_ID, 'RelayRecordSourceProxy#delete(): Cannot delete the root record.');
    delete this._proxies[dataID];
    this.__mutator['delete'](dataID);
  };

  RelayRecordSourceProxy.prototype.get = function get(dataID) {
    if (!this._proxies.hasOwnProperty(dataID)) {
      var status = this.__mutator.getStatus(dataID);
      if (status === EXISTENT) {
        this._proxies[dataID] = new (__webpack_require__(350))(this, this.__mutator, dataID);
      } else {
        this._proxies[dataID] = status === NONEXISTENT ? null : undefined;
      }
    }
    return this._proxies[dataID];
  };

  RelayRecordSourceProxy.prototype.getRoot = function getRoot() {
    var root = this.get(ROOT_ID);
    if (!root) {
      root = this.create(ROOT_ID, ROOT_TYPE);
    }
    __webpack_require__(9)(root && root.getType() === ROOT_TYPE, 'RelayRecordSourceProxy#getRoot(): Expected the source to contain a ' + 'root record.');
    return root;
  };

  return RelayRecordSourceProxy;
}();

module.exports = RelayRecordSourceProxy;

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__(206),
    getStorageKey = _require.getStorageKey;

/**
 * @internal
 *
 * A subclass of RecordSourceProxy that provides convenience methods for
 * accessing the root fields of a given query/mutation. These fields accept
 * complex arguments and it can be tedious to re-construct the correct sets of
 * arguments to pass to e.g. `getRoot().getLinkedRecord()`.
 */
var RelayRecordSourceSelectorProxy = function () {
  function RelayRecordSourceSelectorProxy(recordSource, readSelector) {
    (0, _classCallCheck3['default'])(this, RelayRecordSourceSelectorProxy);

    this.__recordSource = recordSource;
    this._readSelector = readSelector;
  }

  RelayRecordSourceSelectorProxy.prototype.create = function create(dataID, typeName) {
    return this.__recordSource.create(dataID, typeName);
  };

  RelayRecordSourceSelectorProxy.prototype['delete'] = function _delete(dataID) {
    this.__recordSource['delete'](dataID);
  };

  RelayRecordSourceSelectorProxy.prototype.get = function get(dataID) {
    return this.__recordSource.get(dataID);
  };

  RelayRecordSourceSelectorProxy.prototype.getRoot = function getRoot() {
    return this.__recordSource.getRoot();
  };

  RelayRecordSourceSelectorProxy.prototype._getRootField = function _getRootField(selector, fieldName, plural) {
    var field = selector.node.selections.find(function (selection) {
      return selection.kind === 'LinkedField' && selection.name === fieldName;
    });
    __webpack_require__(9)(field && field.kind === 'LinkedField', 'RelayRecordSourceSelectorProxy#getRootField(): Cannot find root ' + 'field `%s`, no such field is defined on GraphQL document `%s`.', fieldName, selector.node.name);
    __webpack_require__(9)(field.plural === plural, 'RelayRecordSourceSelectorProxy#getRootField(): Expected root field ' + '`%s` to be %s.', fieldName, plural ? 'plural' : 'singular');
    return field;
  };

  RelayRecordSourceSelectorProxy.prototype.getRootField = function getRootField(fieldName) {
    var field = this._getRootField(this._readSelector, fieldName, false);
    var storageKey = getStorageKey(field, this._readSelector.variables);
    return this.getRoot().getLinkedRecord(storageKey);
  };

  RelayRecordSourceSelectorProxy.prototype.getPluralRootField = function getPluralRootField(fieldName) {
    var field = this._getRootField(this._readSelector, fieldName, true);
    var storageKey = getStorageKey(field, this._readSelector.variables);
    return this.getRoot().getLinkedRecords(storageKey);
  };

  return RelayRecordSourceSelectorProxy;
}();

module.exports = RelayRecordSourceSelectorProxy;

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



function deferrableFragmentKey(dataID, fragmentName, variables) {
  var variablesString = Object.keys(variables).reduce(function (acc, key) {
    return '' + acc + (acc ? ',' : '') + key + ':' + variables[key];
  }, '');
  return 'path:' + dataID + ',key:' + fragmentName + ',request:' + variablesString;
}

module.exports = deferrableFragmentKey;

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var aggregateHandlersByName = {
  '*': []
};
var profileHandlersByName = {
  '*': []
};

var NOT_INVOKED = {};
var defaultProfiler = { stop: __webpack_require__(10) };
var shouldInstrument = function shouldInstrument(name) {
  if (process.env.NODE_ENV !== 'production') {
    return true;
  }
  return name.charAt(0) !== '@';
};

/**
 * @public
 *
 * Instruments methods to allow profiling various parts of Relay. Profiling code
 * in Relay consists of three steps:
 *
 *  - Instrument the function to be profiled.
 *  - Attach handlers to the instrumented function.
 *  - Run the code which triggers the handlers.
 *
 * Handlers attached to instrumented methods are called with an instrumentation
 * name and a callback that must be synchronously executed:
 *
 *   instrumentedMethod.attachHandler(function(name, callback) {
 *     const start = performance.now();
 *     callback();
 *     console.log('Duration', performance.now() - start);
 *   });
 *
 * Handlers for profiles are callbacks that return a stop method:
 *
 *   RelayProfiler.attachProfileHandler('profileName', (name, state) => {
 *     const start = performance.now();
 *     return function stop(name, state) {
 *       console.log(`Duration (${name})`, performance.now() - start);
 *     }
 *   });
 *
 * In order to reduce the impact on performance in production, instrumented
 * methods and profilers with names that begin with `@` will only be measured
 * if `__DEV__` is true. This should be used for very hot functions.
 */
var RelayProfiler = {
  /**
   * Instruments methods on a class or object. This re-assigns the method in
   * order to preserve function names in stack traces (which are detected by
   * modern debuggers via heuristics). Example usage:
   *
   *   const RelayStore = { primeCache: function() {...} };
   *   RelayProfiler.instrumentMethods(RelayStore, {
   *     primeCache: 'RelayStore.primeCache'
   *   });
   *
   *   RelayStore.primeCache.attachHandler(...);
   *
   * As a result, the methods will be replaced by wrappers that provide the
   * `attachHandler` and `detachHandler` methods.
   */
  instrumentMethods: function instrumentMethods(object, names) {
    for (var _key in names) {
      if (names.hasOwnProperty(_key)) {
        if (typeof object[_key] === 'function') {
          object[_key] = RelayProfiler.instrument(names[_key], object[_key]);
        }
      }
    }
  },


  /**
   * Wraps the supplied function with one that provides the `attachHandler` and
   * `detachHandler` methods. Example usage:
   *
   *   const printRelayQuery =
   *     RelayProfiler.instrument('printRelayQuery', printRelayQuery);
   *
   *   printRelayQuery.attachHandler(...);
   *
   * NOTE: The instrumentation assumes that no handlers are attached or detached
   * in the course of executing another handler.
   */
  instrument: function instrument(name, originalFunction) {
    if (!shouldInstrument(name)) {
      originalFunction.attachHandler = __webpack_require__(10);
      originalFunction.detachHandler = __webpack_require__(10);
      return originalFunction;
    }
    if (!aggregateHandlersByName.hasOwnProperty(name)) {
      aggregateHandlersByName[name] = [];
    }
    var catchallHandlers = aggregateHandlersByName['*'];
    var aggregateHandlers = aggregateHandlersByName[name];
    var handlers = [];
    var contexts = [];
    var invokeHandlers = function invokeHandlers() {
      var context = contexts[contexts.length - 1];
      if (context[0]) {
        context[0]--;
        catchallHandlers[context[0]](name, invokeHandlers);
      } else if (context[1]) {
        context[1]--;
        aggregateHandlers[context[1]](name, invokeHandlers);
      } else if (context[2]) {
        context[2]--;
        handlers[context[2]](name, invokeHandlers);
      } else {
        context[5] = originalFunction.apply(context[3], context[4]);
      }
    };
    var instrumentedCallback = function instrumentedCallback() {
      var returnValue = void 0;
      if (aggregateHandlers.length === 0 && handlers.length === 0 && catchallHandlers.length === 0) {
        returnValue = originalFunction.apply(this, arguments);
      } else {
        contexts.push([catchallHandlers.length, aggregateHandlers.length, handlers.length, this, arguments, NOT_INVOKED]);
        invokeHandlers();
        var context = contexts.pop();
        returnValue = context[5];
        if (returnValue === NOT_INVOKED) {
          throw new Error('RelayProfiler: Handler did not invoke original function.');
        }
      }
      return returnValue;
    };
    instrumentedCallback.attachHandler = function (handler) {
      handlers.push(handler);
    };
    instrumentedCallback.detachHandler = function (handler) {
      __webpack_require__(272)(handlers, handler);
    };
    instrumentedCallback.displayName = '(instrumented ' + name + ')';
    return instrumentedCallback;
  },


  /**
   * Attaches a handler to all methods instrumented with the supplied name.
   *
   *   function createRenderer() {
   *     return RelayProfiler.instrument('render', function() {...});
   *   }
   *   const renderA = createRenderer();
   *   const renderB = createRenderer();
   *
   *   // Only profiles `renderA`.
   *   renderA.attachHandler(...);
   *
   *   // Profiles both `renderA` and `renderB`.
   *   RelayProfiler.attachAggregateHandler('render', ...);
   *
   */
  attachAggregateHandler: function attachAggregateHandler(name, handler) {
    if (shouldInstrument(name)) {
      if (!aggregateHandlersByName.hasOwnProperty(name)) {
        aggregateHandlersByName[name] = [];
      }
      aggregateHandlersByName[name].push(handler);
    }
  },


  /**
   * Detaches a handler attached via `attachAggregateHandler`.
   */
  detachAggregateHandler: function detachAggregateHandler(name, handler) {
    if (shouldInstrument(name)) {
      if (aggregateHandlersByName.hasOwnProperty(name)) {
        __webpack_require__(272)(aggregateHandlersByName[name], handler);
      }
    }
  },


  /**
   * Instruments profiling for arbitrarily asynchronous code by a name.
   *
   *   const timerProfiler = RelayProfiler.profile('timeout');
   *   setTimeout(function() {
   *     timerProfiler.stop();
   *   }, 1000);
   *
   *   RelayProfiler.attachProfileHandler('timeout', ...);
   *
   * Arbitrary state can also be passed into `profile` as a second argument. The
   * attached profile handlers will receive this as the second argument.
   */
  profile: function profile(name, state) {
    var hasCatchAllHandlers = profileHandlersByName['*'].length > 0;
    var hasNamedHandlers = profileHandlersByName.hasOwnProperty(name);
    if (hasNamedHandlers || hasCatchAllHandlers) {
      var profileHandlers = hasNamedHandlers && hasCatchAllHandlers ? profileHandlersByName[name].concat(profileHandlersByName['*']) : hasNamedHandlers ? profileHandlersByName[name] : profileHandlersByName['*'];
      var stopHandlers = void 0;
      for (var ii = profileHandlers.length - 1; ii >= 0; ii--) {
        var profileHandler = profileHandlers[ii];
        var stopHandler = profileHandler(name, state);
        stopHandlers = stopHandlers || [];
        stopHandlers.unshift(stopHandler);
      }
      return {
        stop: function stop() {
          if (stopHandlers) {
            stopHandlers.forEach(function (stopHandler) {
              return stopHandler();
            });
          }
        }
      };
    }
    return defaultProfiler;
  },


  /**
   * Attaches a handler to profiles with the supplied name. You can also
   * attach to the special name '*' which is a catch all.
   */
  attachProfileHandler: function attachProfileHandler(name, handler) {
    if (shouldInstrument(name)) {
      if (!profileHandlersByName.hasOwnProperty(name)) {
        profileHandlersByName[name] = [];
      }
      profileHandlersByName[name].push(handler);
    }
  },


  /**
   * Detaches a handler attached via `attachProfileHandler`.
   */
  detachProfileHandler: function detachProfileHandler(name, handler) {
    if (shouldInstrument(name)) {
      if (profileHandlersByName.hasOwnProperty(name)) {
        __webpack_require__(272)(profileHandlersByName[name], handler);
      }
    }
  }
};

module.exports = RelayProfiler;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/**
 * Removes an element from an array.
 */
function removeFromArray(array, element) {
  var index = array.indexOf(element);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

module.exports = removeFromArray;

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _defineProperty3 = _interopRequireDefault(__webpack_require__(246));

var _extends4 = _interopRequireDefault(__webpack_require__(209));

var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CONDITION = __webpack_require__(205).CONDITION,
    DEFERRABLE_FRAGMENT_SPREAD = __webpack_require__(205).DEFERRABLE_FRAGMENT_SPREAD,
    FRAGMENT_SPREAD = __webpack_require__(205).FRAGMENT_SPREAD,
    INLINE_FRAGMENT = __webpack_require__(205).INLINE_FRAGMENT,
    LINKED_FIELD = __webpack_require__(205).LINKED_FIELD,
    SCALAR_FIELD = __webpack_require__(205).SCALAR_FIELD;

var FRAGMENTS_KEY = __webpack_require__(206).FRAGMENTS_KEY,
    ID_KEY = __webpack_require__(206).ID_KEY,
    getArgumentValues = __webpack_require__(206).getArgumentValues,
    getStorageKey = __webpack_require__(206).getStorageKey;

function read(recordSource, selector) {
  var dataID = selector.dataID,
      node = selector.node,
      variables = selector.variables;

  var reader = new RelayReader(recordSource, variables);
  return reader.read(node, dataID);
}

/**
 * @private
 */

var RelayReader = function () {
  function RelayReader(recordSource, variables) {
    (0, _classCallCheck3['default'])(this, RelayReader);

    this._recordSource = recordSource;
    this._seenRecords = {};
    this._variables = variables;
  }

  RelayReader.prototype.read = function read(node, dataID) {
    var data = this._traverse(node, dataID, null);
    return {
      data: data,
      dataID: dataID,
      node: node,
      seenRecords: this._seenRecords,
      variables: this._variables
    };
  };

  RelayReader.prototype._traverse = function _traverse(node, dataID, prevData) {
    var record = this._recordSource.get(dataID);
    this._seenRecords[dataID] = record;
    if (record == null) {
      return record;
    }
    var data = prevData || {};
    this._traverseSelections(node.selections, record, data);
    return data;
  };

  RelayReader.prototype._getVariableValue = function _getVariableValue(name) {
    __webpack_require__(9)(this._variables.hasOwnProperty(name), 'RelayReader(): Undefined variable `%s`.', name);
    return this._variables[name];
  };

  RelayReader.prototype._traverseSelections = function _traverseSelections(selections, record, data) {
    var _this = this;

    selections.forEach(function (selection) {
      if (selection.kind === SCALAR_FIELD) {
        _this._readScalar(selection, record, data);
      } else if (selection.kind === LINKED_FIELD) {
        if (selection.plural) {
          _this._readPluralLink(selection, record, data);
        } else {
          _this._readLink(selection, record, data);
        }
      } else if (selection.kind === CONDITION) {
        var conditionValue = _this._getVariableValue(selection.condition);
        if (conditionValue === selection.passingValue) {
          _this._traverseSelections(selection.selections, record, data);
        }
      } else if (selection.kind === INLINE_FRAGMENT) {
        var typeName = __webpack_require__(204).getType(record);
        if (typeName != null && typeName === selection.type) {
          _this._traverseSelections(selection.selections, record, data);
        }
      } else if (selection.kind === FRAGMENT_SPREAD) {
        _this._createFragmentPointer(selection, record, data, _this._variables);
      } else if (selection.kind === DEFERRABLE_FRAGMENT_SPREAD) {
        _this._createDeferrableFragmentPointer(selection, record, data);
      } else {
        __webpack_require__(9)(false, 'RelayReader(): Unexpected ast kind `%s`.', selection.kind);
      }
    });
  };

  RelayReader.prototype._readScalar = function _readScalar(field, record, data) {
    var applicationName = field.alias || field.name;
    var storageKey = getStorageKey(field, this._variables);
    var value = __webpack_require__(204).getValue(record, storageKey);
    data[applicationName] = value;
  };

  RelayReader.prototype._readLink = function _readLink(field, record, data) {
    var applicationName = field.alias || field.name;
    var storageKey = getStorageKey(field, this._variables);
    var linkedID = __webpack_require__(204).getLinkedRecordID(record, storageKey);

    if (linkedID == null) {
      data[applicationName] = linkedID;
      return;
    }

    var prevData = data[applicationName];
    __webpack_require__(9)(prevData == null || typeof prevData === 'object', 'RelayReader(): Expected data for field `%s` on record `%s` ' + 'to be an object, got `%s`.', applicationName, __webpack_require__(204).getDataID(record), prevData);
    data[applicationName] = this._traverse(field, linkedID, prevData);
  };

  RelayReader.prototype._readPluralLink = function _readPluralLink(field, record, data) {
    var _this2 = this;

    var applicationName = field.alias || field.name;
    var storageKey = getStorageKey(field, this._variables);
    var linkedIDs = __webpack_require__(204).getLinkedRecordIDs(record, storageKey);

    if (linkedIDs == null) {
      data[applicationName] = linkedIDs;
      return;
    }

    var prevData = data[applicationName];
    __webpack_require__(9)(prevData == null || Array.isArray(prevData), 'RelayReader(): Expected data for field `%s` on record `%s` ' + 'to be an array, got `%s`.', applicationName, __webpack_require__(204).getDataID(record), prevData);
    var linkedArray = prevData || [];
    linkedIDs.forEach(function (linkedID, nextIndex) {
      if (linkedID == null) {
        linkedArray[nextIndex] = linkedID;
        return;
      }
      var prevItem = linkedArray[nextIndex];
      __webpack_require__(9)(prevItem == null || typeof prevItem === 'object', 'RelayReader(): Expected data for field `%s` on record `%s` ' + 'to be an object, got `%s`.', applicationName, __webpack_require__(204).getDataID(record), prevItem);
      var linkedItem = _this2._traverse(field, linkedID, prevItem);
      linkedArray[nextIndex] = linkedItem;
    });
    data[applicationName] = linkedArray;
  };

  RelayReader.prototype._createFragmentPointer = function _createFragmentPointer(fragmentSpread, record, data, variables) {
    var fragmentPointers = data[FRAGMENTS_KEY];
    if (!fragmentPointers) {
      fragmentPointers = data[FRAGMENTS_KEY] = {};
    }
    __webpack_require__(9)(typeof fragmentPointers === 'object' && fragmentPointers, 'RelayReader: Expected fragment spread data to be an object, got `%s`.', fragmentPointers);
    data[ID_KEY] = data[ID_KEY] || __webpack_require__(204).getDataID(record);
    fragmentPointers[fragmentSpread.name] = fragmentSpread.args ? getArgumentValues(fragmentSpread.args, variables) : {};
  };

  RelayReader.prototype._createDeferrableFragmentPointer = function _createDeferrableFragmentPointer(deferrableFragment, record, data) {
    var rootFieldValue = __webpack_require__(204).getValue(record, deferrableFragment.storageKey);
    var variables = (0, _extends4['default'])({}, this._variables, (0, _defineProperty3['default'])({}, deferrableFragment.rootFieldVariable, rootFieldValue));
    this._createFragmentPointer(deferrableFragment, record, data, variables);
  };

  return RelayReader;
}();

module.exports = { read: read };

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Determine if a given value is an object that implements the `Environment`
 * interface defined in `RelayStoreTypes`.
 *
 * Use a sigil for detection to avoid a realm-specific instanceof check, and to
 * aid in module tree-shaking to avoid requiring all of RelayRuntime just to
 * detect its environment.
 */

function isRelayModernEnvironment(environment) {
  return Boolean(environment && environment['@@RelayModernEnvironment']);
}

module.exports = isRelayModernEnvironment;

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ReactRelayQueryFetcher = function () {
  function ReactRelayQueryFetcher() {
    (0, _classCallCheck3['default'])(this, ReactRelayQueryFetcher);
    this._selectionReferences = [];
    this._callOnDataChangeWhenSet = false;
  } // results of the root fragment;
  // fetch error


  ReactRelayQueryFetcher.prototype.lookupInStore = function lookupInStore(environment, operation) {
    if (environment.check(operation.root)) {
      this._retainCachedOperation(environment, operation);
      return environment.lookup(operation.fragment);
    }
    return null;
  };

  ReactRelayQueryFetcher.prototype.execute = function execute(_ref) {
    var _this = this;

    var environment = _ref.environment,
        operation = _ref.operation,
        cacheConfig = _ref.cacheConfig,
        _ref$preservePrevious = _ref.preservePreviousReferences,
        preservePreviousReferences = _ref$preservePrevious === undefined ? false : _ref$preservePrevious;
    var createOperationSelector = environment.unstable_internal.createOperationSelector;

    var nextReferences = [];

    return environment.execute({ operation: operation, cacheConfig: cacheConfig }).map(function (payload) {
      var operationForPayload = createOperationSelector(operation.node, payload.variables, payload.operation);
      nextReferences.push(environment.retain(operationForPayload.root));
      return payload;
    })['do']({
      error: function error() {
        // We may have partially fulfilled the request, so let the next request
        // or the unmount dispose of the references.
        _this._selectionReferences = _this._selectionReferences.concat(nextReferences);
      },
      complete: function complete() {
        if (!preservePreviousReferences) {
          _this._disposeSelectionReferences();
        }
        _this._selectionReferences = _this._selectionReferences.concat(nextReferences);
      },
      unsubscribe: function unsubscribe() {
        // Let the next request or the unmount code dispose of the references.
        // We may have partially fulfilled the request.
        _this._selectionReferences = _this._selectionReferences.concat(nextReferences);
      }
    });
  };

  ReactRelayQueryFetcher.prototype.setOnDataChange = function setOnDataChange(onDataChange) {
    __webpack_require__(9)(this._fetchOptions, 'ReactRelayQueryFetcher: `setOnDataChange` should have been called after having called `fetch`');

    // Mutate the most recent fetchOptions in place,
    // So that in-progress requests can access the updated callback.
    this._fetchOptions.onDataChange = onDataChange;

    if (this._callOnDataChangeWhenSet && typeof onDataChange === 'function') {
      this._callOnDataChangeWhenSet = false;
      if (this._error != null) {
        onDataChange({ error: this._error });
      } else if (this._snapshot != null) {
        onDataChange({ snapshot: this._snapshot });
      }
    }
  };

  /**
   * `fetch` fetches the data for the given operation.
   * If a result is immediately available synchronously, it will be synchronously
   * returned by this function.
   *
   * Otherwise, the fetched result will be communicated via the `onDataChange` callback.
   * `onDataChange` will be called with the first result (**if it wasn't returned synchronously**),
   * and then subsequently whenever the data changes.
   */


  ReactRelayQueryFetcher.prototype.fetch = function fetch(fetchOptions) {
    var _this2 = this;

    var cacheConfig = fetchOptions.cacheConfig,
        environment = fetchOptions.environment,
        operation = fetchOptions.operation;

    var fetchHasReturned = false;
    var error = void 0;

    this._disposeRequest();
    this._fetchOptions = fetchOptions;

    var request = this.execute({
      environment: environment,
      operation: operation,
      cacheConfig: cacheConfig
    })['finally'](function () {
      _this2._pendingRequest = null;
    }).subscribe({
      next: function next() {
        var onDataChange = _this2._fetchOptions ? _this2._fetchOptions.onDataChange : null;

        // If we received a response when we didn't have a change callback,
        // Make a note that to notify the callback when it's later added.
        _this2._callOnDataChangeWhenSet = typeof onDataChange !== 'function';
        _this2._error = null;

        // Only notify of the first result if `next` is being called **asynchronously**
        // (i.e. after `fetch` has returned).
        _this2._onQueryDataAvailable({ notifyFirstResult: fetchHasReturned });
      },
      error: function (_error) {
        function error(_x) {
          return _error.apply(this, arguments);
        }

        error.toString = function () {
          return _error.toString();
        };

        return error;
      }(function (err) {
        var onDataChange = _this2._fetchOptions ? _this2._fetchOptions.onDataChange : null;

        // If we received a response when we didn't have a change callback,
        // Make a note that to notify the callback when it's later added.
        _this2._callOnDataChangeWhenSet = typeof onDataChange !== 'function';
        _this2._error = err;
        _this2._snapshot = null;

        // Only notify of error if `error` is being called **asynchronously**
        // (i.e. after `fetch` has returned).
        if (fetchHasReturned) {
          if (typeof onDataChange === 'function') {
            onDataChange({ error: err });
          }
        } else {
          error = err;
        }
      })
    });

    this._pendingRequest = {
      dispose: function dispose() {
        request.unsubscribe();
      }
    };

    fetchHasReturned = true;

    if (error) {
      throw error;
    }

    return this._snapshot;
  };

  ReactRelayQueryFetcher.prototype.retry = function retry() {
    __webpack_require__(9)(this._fetchOptions, 'ReactRelayQueryFetcher: `retry` should be called after having called `fetch`');
    return this.fetch(this._fetchOptions);
  };

  ReactRelayQueryFetcher.prototype.dispose = function dispose() {
    this._disposeRequest();
    this._disposeSelectionReferences();
  };

  ReactRelayQueryFetcher.prototype._disposeRequest = function _disposeRequest() {
    this._error = null;
    this._snapshot = null;

    // order is important, dispose of pendingFetch before selectionReferences
    if (this._pendingRequest) {
      this._pendingRequest.dispose();
    }
    if (this._rootSubscription) {
      this._rootSubscription.dispose();
      this._rootSubscription = null;
    }
  };

  ReactRelayQueryFetcher.prototype._retainCachedOperation = function _retainCachedOperation(environment, operation) {
    this._disposeCacheSelectionReference();
    this._cacheSelectionReference = environment.retain(operation.root);
  };

  ReactRelayQueryFetcher.prototype._disposeCacheSelectionReference = function _disposeCacheSelectionReference() {
    this._cacheSelectionReference && this._cacheSelectionReference.dispose();
    this._cacheSelectionReference = null;
  };

  ReactRelayQueryFetcher.prototype._disposeSelectionReferences = function _disposeSelectionReferences() {
    this._disposeCacheSelectionReference();
    this._selectionReferences.forEach(function (r) {
      return r.dispose();
    });
    this._selectionReferences = [];
  };

  ReactRelayQueryFetcher.prototype._onQueryDataAvailable = function _onQueryDataAvailable(_ref2) {
    var _this3 = this;

    var notifyFirstResult = _ref2.notifyFirstResult;

    __webpack_require__(9)(this._fetchOptions, 'ReactRelayQueryFetcher: `_onQueryDataAvailable` should have been called after having called `fetch`');
    var _fetchOptions = this._fetchOptions,
        environment = _fetchOptions.environment,
        onDataChange = _fetchOptions.onDataChange,
        operation = _fetchOptions.operation;

    // `_onQueryDataAvailable` can be called synchronously the first time and can be called
    // multiple times by network layers that support data subscriptions.
    // Wait until the first payload to call `onDataChange` and subscribe for data updates.

    if (this._snapshot) {
      return;
    }

    this._snapshot = environment.lookup(operation.fragment);

    // Subscribe to changes in the data of the root fragment
    this._rootSubscription = environment.subscribe(this._snapshot, function (snapshot) {
      // Read from this._fetchOptions in case onDataChange() was lazily added.
      if (_this3._fetchOptions != null) {
        var maybeNewOnDataChange = _this3._fetchOptions.onDataChange;
        if (typeof maybeNewOnDataChange === 'function') {
          maybeNewOnDataChange({ snapshot: snapshot });
        }
      }
    });

    if (this._snapshot && notifyFirstResult && typeof onDataChange === 'function') {
      onDataChange({ snapshot: this._snapshot });
    }
  };

  return ReactRelayQueryFetcher;
}();

module.exports = ReactRelayQueryFetcher;

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__(208),
    RelayProfiler = _require.RelayProfiler;

function profileContainer(Container, containerName) {
  /* $FlowFixMe(>=0.53.0) This comment suppresses an error
   * when upgrading Flow's support for React. Common errors found when
   * upgrading Flow's React support are documented at
   * https://fburl.com/eq7bs81w */
  RelayProfiler.instrumentMethods(Container.prototype, {
    constructor: containerName + '.prototype.constructor',
    UNSAFE_componentWillReceiveProps: containerName + '.prototype.UNSAFE_componentWillReceiveProps',
    componentWillUnmount: containerName + '.prototype.componentWillUnmount',
    shouldComponentUpdate: containerName + '.prototype.shouldComponentUpdate'
  });

  // Copy static getDerivedStateFromProps() to the instrumented constructor.
  // This is necessary to support the react-lifecycle-compat poyfill.
  // This can be removed once react-relay requires React 16.3+.
  if (
  /* $FlowFixMe(>=0.68.0) This comment suppresses an error found when Flow
   * v0.68 was deployed. To see the error delete this comment and run Flow. */
  Container.prototype !== null && typeof Container.prototype === 'object' &&
  /* $FlowFixMe(>=0.68.0) This comment suppresses an error found when Flow
   * v0.68 was deployed. To see the error delete this comment and run Flow. */
  typeof Container.getDerivedStateFromProps === 'function') {
    Container.prototype.constructor.getDerivedStateFromProps = Container.getDerivedStateFromProps;
  }
}

module.exports = { profileContainer: profileContainer };

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2018-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Instead of ref="component", use this module to mimic a string ref.
 * This horrible hack lets us avoid string ref warnings in React strict mode
 * until we have time to clean up the various uses of .refs.component.
 *
 * Track usage at https://fburl.com/relay_containers_string_refs_dashboard
 *
 * @TODO (T28161354) Remove this hack once string refs have been removed.
 */
function makeLegacyStringishComponentRef(parentComponent, componentName) {
  var hasWarned = false;
  if (process.env.NODE_ENV !== 'production') {
    return function ref(childComponent) {
      if (!Object.isExtensible(parentComponent.refs)) {
        // Probably emptyObject. >.>
        parentComponent.refs = {};
      }

      // RelayFBContainerProxy uses this getter to avoid triggering the warning.
      // This proxy component logs a separate warning to track its usage.
      parentComponent.refs.__INTERNAL__component = childComponent;

      // $FlowFixMe https://github.com/facebook/flow/issues/285
      Object.defineProperty(parentComponent.refs, 'component', {
        configurable: true,
        get: function get() {
          if (!hasWarned) {
            hasWarned = true;
            __webpack_require__(20)(false, 'RelayContainer: Do not use `container.refs.component` for ' + 'RelayCompat or RelayModern containers. Instead pass ' + '`containerRef={ref}` to `%s`.', componentName);
          }
          return childComponent;
        }
      });
    };
  } else {
    return 'component';
  }
}

module.exports = makeLegacyStringishComponentRef;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__(250),
    getComponentName = _require.getComponentName,
    getContainerName = _require.getContainerName;

var containerContextTypes = {
  relay: __webpack_require__(237).Relay
};

/**
 * Creates a component class whose instances adapt to the
 * `context.relay.environment` in which they are rendered and which have the
 * necessary static methods (`getFragment()` etc) to be composed within classic
 * `Relay.Containers`.
 */
function buildReactRelayContainer(ComponentClass, fragmentSpec, createContainerWithFragments) {
  // Sanity-check user-defined fragment input
  var containerName = getContainerName(ComponentClass);
  __webpack_require__(390)(getComponentName(ComponentClass), fragmentSpec);

  // Memoize a container for the last environment instance encountered
  var environment = void 0;
  var Container = void 0;
  function ContainerConstructor(props, context) {
    if (Container == null || context.relay.environment !== environment) {
      environment = context.relay.environment;
      if (process.env.NODE_ENV !== 'production') {
        var _require2 = __webpack_require__(208),
            isRelayModernEnvironment = _require2.isRelayModernEnvironment;

        if (!isRelayModernEnvironment(environment)) {
          throw new Error('RelayModernContainer: Can only use Relay Modern component ' + (containerName + ' in a Relay Modern environment!\n') + 'When using Relay Modern and Relay Classic in the same ' + 'application, ensure components use Relay Compat to work in ' + 'both environments.\n' + 'See: http://facebook.github.io/relay/docs/relay-compat.html');
        }
      }
      var getFragmentFromTag = environment.unstable_internal.getFragment;

      var _fragments = __webpack_require__(300)(fragmentSpec, getFragmentFromTag);
      Container = createContainerWithFragments(ComponentClass, _fragments);

      // Attach static lifecycle to wrapper component so React can see it.
      ContainerConstructor.getDerivedStateFromProps = Container.getDerivedStateFromProps;
    }
    /* $FlowFixMe(>=0.53.0) This comment suppresses an
     * error when upgrading Flow's support for React. Common errors found when
     * upgrading Flow's React support are documented at
     * https://fburl.com/eq7bs81w */
    return new Container(props, context);
  }
  ContainerConstructor.contextTypes = containerContextTypes;
  ContainerConstructor.displayName = containerName;

  if (process.env.NODE_ENV !== 'production') {
    ContainerConstructor.__ComponentClass = ComponentClass;
    // Classic container static methods.
    ContainerConstructor.getFragment = function getFragmentOnModernContainer() {
      throw new Error('RelayModernContainer: ' + containerName + '.getFragment() was called on ' + 'a Relay Modern component by a Relay Classic or Relay Compat ' + 'component.\n' + 'When using Relay Modern and Relay Classic in the same ' + 'application, ensure components use Relay Compat to work in ' + 'both environments.\n' + 'See: http://facebook.github.io/relay/docs/relay-compat.html');
    };
  }

  return ContainerConstructor;
}

module.exports = buildReactRelayContainer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consolidateStreamedStyles", function() { return consolidateStreamedStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return wrapWithTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS", function() { return __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_plain_object__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_plain_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stylis__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stylis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_stylis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stylis_rule_sheet__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stylis_rule_sheet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_stylis_rule_sheet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_is__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_is__);








/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate$2(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

var hyphenate_1 = hyphenate$2;

var hyphenate = hyphenate_1;

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var hyphenateStyleName_1 = hyphenateStyleName;

// 
var objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).filter(function (key) {
    var chunk = obj[key];
    return chunk !== undefined && chunk !== null && chunk !== false && chunk !== '';
  }).map(function (key) {
    if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(obj[key])) return objToCss(obj[key], key);
    return hyphenateStyleName_1(key) + ': ' + obj[key] + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

var flatten = function flatten(chunks, executionContext) {
  return chunks.reduce(function (ruleSet, chunk) {
    /* Remove falsey values */
    if (chunk === undefined || chunk === null || chunk === false || chunk === '') {
      return ruleSet;
    }
    /* Flatten ruleSet */
    if (Array.isArray(chunk)) {
      return [].concat(ruleSet, flatten(chunk, executionContext));
    }

    /* Handle other components */
    if (chunk.hasOwnProperty('styledComponentId')) {
      // $FlowFixMe not sure how to make this pass
      return [].concat(ruleSet, ['.' + chunk.styledComponentId]);
    }

    /* Either execute or defer the function */
    if (typeof chunk === 'function') {
      return executionContext ? ruleSet.concat.apply(ruleSet, flatten([chunk(executionContext)], executionContext)) : ruleSet.concat(chunk);
    }

    /* Handle objects */
    return ruleSet.concat(
    // $FlowFixMe have to add %checks somehow to isPlainObject
    __WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(chunk) ? objToCss(chunk) : chunk.toString());
  }, []);
};

// 
// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new __WEBPACK_IMPORTED_MODULE_1_stylis___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new __WEBPACK_IMPORTED_MODULE_1_stylis___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];
// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = __WEBPACK_IMPORTED_MODULE_2_stylis_rule_sheet___default()(function (rule) {
  parsingRules.push(rule);
});

stylis.use([parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var stringifyRules = function stringifyRules(rules, selector, prefix) {
  var flatCSS = rules.join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  return stylis(prefix || !selector ? '' : selector, cssStr);
};

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

// 

function isStyledComponent(target) /* : %checks */{
  return (
    // $FlowFixMe TODO: flow for styledComponentId
    typeof target === 'function' && typeof target.styledComponentId === 'string'
  );
}

// 

/* This function is DEPRECATED and will be removed on the next major version release.
 * It was needed to rehydrate all style blocks prepended to chunks before React
 * tries to rehydrate its HTML stream. Since the master StyleSheet will now detect
 * the use of streamed style tags and will perform the rehydration earlier when needed
 * this function will not be needed anymore */
function consolidateStreamedStyles() {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn('styled-components automatically does streaming SSR rehydration now.\n' + 'Calling consolidateStreamedStyles manually is no longer necessary and a noop now.\n' + '- Please remove the consolidateStreamedStyles call from your client.');
  }
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
var generateAlphabeticName = function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
};

// 

var interleave = (function (strings, interpolations) {
  return interpolations.reduce(function (array, interp, i) {
    return array.concat(interp, strings[i + 1]);
  }, [strings[0]]);
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var css = (function (styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (!Array.isArray(styles) && (typeof styles === 'undefined' ? 'undefined' : _typeof(styles)) === 'object') {
    return flatten(interleave([], [styles].concat(interpolations)));
  }
  return flatten(interleave(styles, interpolations));
});

var stream = {}

// 


var SC_ATTR = typeof process !== 'undefined' && process.env.SC_ATTR || 'data-styled-components';
var SC_STREAM_ATTR = 'data-styled-streamed';
var CONTEXT_KEY = '__styled-components-stylesheet__';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = typeof false === 'boolean' && false || process.env.NODE_ENV !== 'production';

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return  true ? __webpack_require__.nc : null;
});

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb();
    }
  };
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 
/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = document.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = document.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new Error();
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 
/* eslint-disable flowtype/object-type-delimiter */
/* eslint-disable react/prop-types */

/* this error is used for makeStyleTag */
var parentNodeUnmountedErr = process.env.NODE_ENV !== 'production' ? '\nTrying to insert a new style tag, but the given Node is unmounted!\n- Are you using a custom target that isn\'t mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n'.trim() : '';

/* this error is used for tags */
var throwCloneTagErr = function throwCloneTagErr() {
  throw new Error(process.env.NODE_ENV !== 'production' ? '\nThe clone method cannot be used on the client!\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n'.trim() : '');
};

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var el = document.createElement('style');
  el.setAttribute(SC_ATTR, '');

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(document.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new Error(parentNodeUnmountedErr);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whther getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker);
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    styleTag: el,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    css: css,
    toHTML: wrapAsHtmlTag(css, names),
    toElement: wrapAsElement(css, names),
    clone: throwCloneTagErr
  };
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;
  var makeTextNode = function makeTextNode(id) {
    return document.createTextNode(makeTextMarker(id));
  };

  /* indicates whther getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }
    return str;
  };

  return {
    styleTag: el,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    css: css,
    toHTML: wrapAsHtmlTag(css, names),
    toElement: wrapAsElement(css, names),
    clone: throwCloneTagErr
  };
};

var makeServerTagInternal = function makeServerTagInternal(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTagInternal(namesClone, markersClone);
  };

  var tag = {
    styleTag: null,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    css: css,
    toHTML: wrapAsHtmlTag(css, names),
    toElement: wrapAsElement(css, names),
    clone: clone
  };

  return tag;
};

var makeServerTag = function makeServerTag() {
  return makeServerTagInternal();
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);
    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

/* wraps a given tag so that rehydration is performed once when necessary */
var makeRehydrationTag = function makeRehydrationTag(tag, els, extracted, names, immediateRehydration) {
  /* rehydration function that adds all rules to the new tag */
  var rehydrate = once(function () {
    /* add all extracted components to the new tag */
    for (var i = 0; i < extracted.length; i += 1) {
      var _extracted$i = extracted[i],
          componentId = _extracted$i.componentId,
          cssFromDOM = _extracted$i.cssFromDOM;

      var cssRules = splitByRules(cssFromDOM);
      tag.insertRules(componentId, cssRules);
    }

    /* remove old HTMLStyleElements, since they have been rehydrated */
    for (var _i = 0; _i < els.length; _i += 1) {
      var el = els[_i];
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  });

  if (immediateRehydration) rehydrate();

  return _extends({}, tag, {
    /* add rehydration hook to insertion methods */
    insertMarker: function insertMarker(id) {
      rehydrate();
      return tag.insertMarker(id);
    },
    insertRules: function insertRules(id, cssRules, name) {
      rehydrate();
      return tag.insertRules(id, cssRules, name);
    }
  });
};

// 

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {
  /* a map from ids to tags */
  /* deferred rules for a given id */
  /* this is used for not reinjecting rules via hasNameForId() */
  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */
  /* a list of tags belonging to this StyleSheet */
  /* a tag for import rules */
  /* current capacity until a new tag must be created */
  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.sealed = false;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate() {
    if (!IS_BROWSER || this.forceServer) {
      return this;
    }

    var els = [];
    var names = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + ']');
    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (nodesSize === 0) {
      return this;
    }

    for (var i = 0; i < nodesSize; i += 1) {
      // $FlowFixMe: We can trust that all elements in this query are style elements
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      isStreamed = !!el.getAttribute(SC_STREAM_ATTR) || isStreamed;

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(/\s+/);
      var elNamesSize = elNames.length;
      for (var j = 0; j < elNamesSize; j += 1) {
        var name = elNames[j];
        /* add rehydrated name to sheet to avoid readding styles */
        this.rehydratedNames[name] = true;
        names.push(name);
      }

      /* extract all components and their CSS */
      extracted = extracted.concat(extractComps(el.textContent));
      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (extractedSize === 0) {
      return this;
    }

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);
    var rehydrationTag = makeRehydrationTag(tag, els, extracted, names, isStreamed);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(rehydrationTag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = rehydrationTag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by injectGlobal, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);
    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;
    this.sealed = true;
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !this.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;
    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      this.sealed = false;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for injectGlobal to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    /* add deferred rules for component */
    var injectRules = cssRules;
    var deferredRules = this.deferred[id];
    if (deferredRules !== undefined) {
      injectRules = deferredRules.concat(injectRules);
      delete this.deferred[id];
    }

    var tag = this.getTagForId(id);
    tag.insertRules(id, injectRules, name);
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);
    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;
    /* delete possible deferred rules */
    delete this.deferred[id];
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return Object(__WEBPACK_IMPORTED_MODULE_3_react__["cloneElement"])(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

var _StyleSheetManager$ch;

// 
/* this error is used for makeStyleTag */
var targetPropErr = process.env.NODE_ENV !== 'production' ? '\nThe StyleSheetManager expects a valid target or sheet prop!\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n'.trim() : '';

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager() {
    classCallCheck(this, StyleSheetManager);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  StyleSheetManager.prototype.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[CONTEXT_KEY] = this.sheetInstance, _ref;
  };

  StyleSheetManager.prototype.componentWillMount = function componentWillMount() {
    if (this.props.sheet) {
      this.sheetInstance = this.props.sheet;
    } else if (this.props.target) {
      this.sheetInstance = new StyleSheet(this.props.target);
    } else {
      throw new Error(targetPropErr);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    /* eslint-disable react/prop-types */
    // Flow v0.43.1 will report an error accessing the `children` property,
    // but v0.47.0 will not. It is necessary to use a type cast instead of
    // a "fixme" comment to satisfy both Flow versions.
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.only(this.props.children);
  };

  return StyleSheetManager;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

StyleSheetManager.childContextTypes = (_StyleSheetManager$ch = {}, _StyleSheetManager$ch[CONTEXT_KEY] = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(StyleSheet), __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(ServerStyleSheet)]).isRequired, _StyleSheetManager$ch);

process.env.NODE_ENV !== "production" ? StyleSheetManager.propTypes = {
  sheet: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(StyleSheet), __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(ServerStyleSheet)]),
  target: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.shape({
    appendChild: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func.isRequired
  })
} : void 0;

// 
/* eslint-disable no-underscore-dangle */
/* this error is used for makeStyleTag */
var sheetClosedErr = process.env.NODE_ENV !== 'production' ? '\nCan\'t collect styles once you\'ve consumed a ServerStyleSheet\'s styles!\nServerStyleSheet is a one off instance for each server-side render cycle.\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n'.trim() : '';

var streamBrowserErr = process.env.NODE_ENV !== 'production' ? 'Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.' : '';

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.closed = false;
  }

  ServerStyleSheet.prototype.complete = function complete() {
    if (!this.closed) {
      /* Remove closed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.closed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.closed) {
      throw new Error(sheetClosedErr);
    }

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.complete();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.complete();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new Error(streamBrowserErr);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        /* prepend style html to chunk */
        this.push(html + chunk);
        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.complete();
    });
    readableStream.on('error', function (err) {
      _this.complete();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme, defaultProps) {
  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types */
  var isDefaultTheme = defaultProps && props.theme === defaultProps.theme;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function getComponentName(target) {
  return target.displayName || target.name || 'Component';
}

// 

function isTag(target) /* : %checks */{
  return typeof target === 'string';
}

// 
function generateDisplayName(target) {
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

// 
/* eslint-disable max-len */
/**
 * Trying to avoid the unknown-prop errors on styled components by filtering by
 * React's attribute whitelist.
 *
 * To regenerate this regex:
 *
 * 1. `npm i -g regexgen` (https://github.com/devongovett/regexgen)
 * 2. Run `regexgen` with the list of space-separated words below as input
 * 3. Surround the emitted regex with this: `/^(GENERATED_REGEX)$/` -- this will ensure a full string match
 *    and no false positives from partials
 * */
/*
children dangerouslySetInnerHTML key ref autoFocus defaultValue valueLink defaultChecked checkedLink innerHTML suppressContentEditableWarning onFocusIn onFocusOut className onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown onKeyPress onKeyUp onFocus onBlur onChange onInput onInvalid onSubmit onReset onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onAnimationStart onAnimationEnd onAnimationIteration onTransitionEnd onCopyCapture onCutCapture onPasteCapture onCompositionEndCapture onCompositionStartCapture onCompositionUpdateCapture onKeyDownCapture onKeyPressCapture onKeyUpCapture onFocusCapture onBlurCapture onChangeCapture onInputCapture onSubmitCapture onResetCapture onClickCapture onContextMenuCapture onDoubleClickCapture onDragCapture onDragEndCapture onDragEnterCapture onDragExitCapture onDragLeaveCapture onDragOverCapture onDragStartCapture onDropCapture onMouseDownCapture onMouseEnterCapture onMouseLeaveCapture onMouseMoveCapture onMouseOutCapture onMouseOverCapture onMouseUpCapture onSelectCapture onTouchCancelCapture onTouchEndCapture onTouchMoveCapture onTouchStartCapture onScrollCapture onWheelCapture onAbortCapture onCanPlayCapture onCanPlayThroughCapture onDurationChangeCapture onEmptiedCapture onEncryptedCapture onEndedCapture onErrorCapture onLoadedDataCapture onLoadedMetadataCapture onLoadStartCapture onPauseCapture onPlayCapture onPlayingCapture onProgressCapture onRateChangeCapture onSeekedCapture onSeekingCapture onStalledCapture onSuspendCapture onTimeUpdateCapture onVolumeChangeCapture onWaitingCapture onLoadCapture onAnimationStartCapture onAnimationEndCapture onAnimationIterationCapture onTransitionEndCapture accept acceptCharset accessKey action allowFullScreen allowTransparency alt as async autoComplete autoPlay capture cellPadding cellSpacing charSet challenge checked cite classID className cols colSpan content contentEditable contextMenu controlsList controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name nonce noValidate open optimum pattern placeholder playsInline poster preload profile radioGroup readOnly referrerPolicy rel required reversed role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable accentHeight accumulate additive alignmentBaseline allowReorder alphabetic amplitude arabicForm ascent attributeName attributeType autoReverse azimuth baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight clip clipPath clipRule clipPathUnits colorInterpolation colorInterpolationFilters colorProfile colorRendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground end exponent externalResourcesRequired fill fillOpacity fillRule filter filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor limitingConeAngle local markerEnd markerMid markerStart markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode numOctaves offset opacity operator order orient orientation origin overflow overlinePosition overlineThickness paintOrder panose1 pathLength patternContentUnits patternTransform patternUnits pointerEvents points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shapeRendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stopColor stopOpacity strikethroughPosition strikethroughThickness string stroke strokeDasharray strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor textDecoration textRendering textLength to transform u1 u2 underlinePosition underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic vHanging vIdeographic vMathematical values vectorEffect version vertAdvY vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing writingMode x xHeight x1 x2 xChannelSelector xlinkActuate xlinkArcrole xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlBase xmlns xmlnsXlink xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan onPointerDown onPointerMove onPointerUp onPointerCancel onGotPointerCapture onLostPointerCapture onPointerEnter onPointerLeave onPointerOver onPointerOut
*/
/* eslint-enable max-len */

var ATTRIBUTE_REGEX = /^((?:s(?:uppressContentEditableWarn|croll|pac)|(?:shape|image|text)Render|(?:letter|word)Spac|vHang|hang)ing|(?:on(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:Animation|Touch|Load|Drag)Start|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|Lo(?:stPointer|ad)|TimeUpdate|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|GotPointer|MouseDown|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|KeyPress|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|P(?:rogress|laying)|DragEnd|Key(?:Down|Up)|(?:MouseU|Dro)p|(?:Wait|Seek)ing|Scroll|Focus|Paste|Abort|Drag|Play|Blur)Captur|alignmentBaselin|(?:limitingConeAng|xlink(?:(?:Arcr|R)o|Tit)|s(?:urfaceSca|ty|ca)|unselectab|baseProfi|fontSty|(?:focus|dragg)ab|multip|profi|tit)l|d(?:ominantBaselin|efaultValu)|onPointerLeav|a(?:uto(?:Capitaliz|Revers|Sav)|dditiv)|(?:(?:formNoValid|xlinkActu|noValid|accumul|rot)a|autoComple|decelera)t|(?:(?:attribute|item)T|datat)yp|onPointerMov|(?:attribute|glyph)Nam|playsInlin|(?:writing|input|edge)Mod|(?:formE|e)ncTyp|(?:amplitu|mo)d|(?:xlinkTy|itemSco|keyTy|slo)p|(?:xmlSpa|non)c|fillRul|(?:dateTi|na)m|r(?:esourc|ol)|xmlBas|wmod)e|(?:glyphOrientationHorizont|loc)al|(?:externalResourcesRequir|select|revers|mut)ed|c(?:o(?:lorInterpolationFilter|ord)s|o(?:lor(?:Interpolation)?|nt(?:rols|ent))|(?:ontentS(?:cript|tyle)Typ|o(?:ntentEditab|lorProfi)l|l(?:assNam|ipRul)|a(?:lcMod|ptur)|it)e|olorRendering|l(?:ipPathUnits|assID)|(?:ontrolsLis|apHeigh)t|h(?:eckedLink|a(?:llenge|rSet)|ildren|ecked)|ell(?:Spac|Padd)ing|o(?:ntextMenu|ls)|(?:rossOrigi|olSpa)n|lip(?:Path)?|ursor|[xy])|glyphOrientationVertical|d(?:angerouslySetInnerHTML|efaultChecked|ownload|isabled|isplay|[xy])|(?:s(?:trikethroughThickn|eaml)es|(?:und|ov)erlineThicknes|r(?:equiredExtension|adiu)|(?:requiredFeatur|tableValu|stitchTil|numOctav|filterR)e|key(?:(?:Splin|Tim)e|Param)|autoFocu|header|bia)s|(?:(?:st(?:rikethroughPosi|dDevia)|(?:und|ov)erlinePosi|(?:textDecor|elev)a|orienta)tio|(?:strokeLinejo|orig)i|on(?:PointerDow|FocusI)|formActio|zoomAndPa|directio|(?:vers|act)io|rowSpa|begi|ico)n|o(?:n(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)|rient)|p(?:reserveA(?:spectRatio|lpha)|ointsAt[X-Z]|anose1)|(?:patternContent|ma(?:sk(?:Content)?|rker)|primitive|gradient|pattern|filter)Units|(?:(?:allowTranspar|baseFrequ)enc|re(?:ferrerPolic|adOnl)|(?:(?:st(?:roke|op)O|floodO|fillO|o)pac|integr|secur)it|visibilit|fontFamil|accessKe|propert|summar)y|(?:gradientT|patternT|t)ransform|(?:[xy]ChannelSelect|lightingCol|textAnch|floodCol|stopCol|operat|htmlF)or|(?:strokeMiterlimi|(?:specularConsta|repeatCou|fontVaria)n|(?:(?:specularE|e)xpon|renderingInt|asc)en|d(?:iffuseConsta|esce)n|(?:fontSizeAdju|lengthAdju|manife)s|baselineShif|onPointerOu|vectorEffec|(?:(?:mar(?:ker|gin)|x)H|accentH|fontW)eigh|markerStar|a(?:utoCorrec|bou)|onFocusOu|intercep|restar|forma|inlis|heigh|lis)t|(?:(?:st(?:rokeDasho|artO)|o)ffs|acceptChars|formTarg|viewTarg|srcS)et|k(?:ernel(?:UnitLength|Matrix)|[1-4])|(?:(?:enableBackgrou|markerE)n|s(?:p(?:readMetho|ee)|ee)|formMetho|(?:markerM|onInval)i|preloa|metho|kin)d|strokeDasharray|(?:onPointerCanc|lab)el|(?:allowFullScre|hidd)en|systemLanguage|(?:(?:o(?:nPointer(?:Ent|Ov)|rd)|allowReord|placehold|frameBord|paintOrd|post)e|repeatDu|d(?:efe|u))r|v(?:Mathematical|ert(?:Origin[XY]|AdvY)|alues|ocab)|(?:pointerEve|keyPoi)nts|(?:strokeLineca|onPointerU|itemPro|useMa|wra|loo)p|h(?:oriz(?:Origin|Adv)X|ttpEquiv)|(?:vI|i)deographic|unicodeRange|mathematical|vAlphabetic|u(?:nicodeBidi|[12])|(?:fontStretc|hig)h|(?:(?:mar(?:ker|gin)W|strokeW)id|azimu)th|(?:xmlnsXl|valueL)ink|mediaGroup|spellCheck|(?:text|m(?:in|ax))Length|(?:unitsPerE|optimu|fro)m|r(?:adioGroup|e(?:sults|f[XY]|l)|ows|[xy])|a(?:rabicForm|l(?:phabetic|t)|sync)|pathLength|innerHTML|xlinkShow|(?:xlinkHr|glyphR)ef|(?:tabInde|(?:sand|b)bo|viewBo)x|(?:(?:href|xml|src)La|kerni)ng|autoPlay|o(?:verflow|pen)|f(?:o(?:ntSize|rm)|il(?:ter|l))|r(?:e(?:quired|sult|f))?|divisor|p(?:attern|oints)|unicode|d(?:efault|ata|ir)?|i(?:temRef|n2|s)|t(?:arget[XY]|o)|srcDoc|s(?:coped|te(?:m[hv]|p)|pan)|(?:width|size)s|prefix|typeof|itemID|s(?:t(?:roke|art)|hape|cope|rc)|t(?:arget|ype)|(?:stri|la)ng|a(?:ccept|s)|m(?:edia|a(?:sk|x)|in)|x(?:mlns)?|width|value|size|href|k(?:ey)?|end|low|by|i[dn]|y[12]|g[12]|x[12]|f[xy]|[yz])$/;

/* From DOMProperty */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(x|data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

var validAttr = (function (name) {
  return ATTRIBUTE_REGEX.test(name) || isCustomAttribute(name.toLowerCase());
});

// 

function hasInInheritanceChain(child, parent) {
  var target = child;

  while (target) {
    target = Object.getPrototypeOf(target);

    if (target && target === parent) {
      return true;
    }
  }

  return false;
}

// 
/**
 * Creates a broadcast that can be listened to, i.e. simple event emitter
 *
 * @see https://github.com/ReactTraining/react-broadcast
 */

var createBroadcast = function createBroadcast(initialState) {
  var listeners = {};
  var id = 0;
  var state = initialState;

  function publish(nextState) {
    state = nextState;

    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in listeners) {
      var listener = listeners[key];
      if (listener === undefined) {
        // eslint-disable-next-line no-continue
        continue;
      }

      listener(state);
    }
  }

  function subscribe(listener) {
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    listener(state);
    return currentId;
  }

  function unsubscribe(unsubID) {
    listeners[unsubID] = undefined;
  }

  return { publish: publish, subscribe: subscribe, unsubscribe: unsubscribe };
};

var _ThemeProvider$childC;
var _ThemeProvider$contex;

// 
// NOTE: DO NOT CHANGE, changing this is a semver major change!
var CHANNEL = '__styled-components__';
var CHANNEL_NEXT = CHANNEL + 'next__';

var CONTEXT_CHANNEL_SHAPE = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.shape({
  getTheme: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
  subscribe: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
  unsubscribe: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func
});

var warnChannelDeprecated = void 0;
if (process.env.NODE_ENV !== 'production') {
  warnChannelDeprecated = once(function () {
    // eslint-disable-next-line no-console
    console.error('Warning: Usage of `context.' + CHANNEL + '` as a function is deprecated. It will be replaced with the object on `.context.' + CHANNEL_NEXT + '` in a future version.');
  });
}

var isFunction = function isFunction(test) {
  return typeof test === 'function';
};

/**
 * Provide a theme to an entire react component tree via context and event listeners (have to do
 * both context and event emitter as pure components block context updates)
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.unsubscribeToOuterId = -1;

    _this.getTheme = _this.getTheme.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
    // with the outer theme
    var outerContext = this.context[CHANNEL_NEXT];
    if (outerContext !== undefined) {
      this.unsubscribeToOuterId = outerContext.subscribe(function (theme) {
        _this2.outerTheme = theme;

        if (_this2.broadcast !== undefined) {
          _this2.publish(_this2.props.theme);
        }
      });
    }

    this.broadcast = createBroadcast(this.getTheme());
  };

  ThemeProvider.prototype.getChildContext = function getChildContext() {
    var _this3 = this,
        _babelHelpers$extends;

    return _extends({}, this.context, (_babelHelpers$extends = {}, _babelHelpers$extends[CHANNEL_NEXT] = {
      getTheme: this.getTheme,
      subscribe: this.broadcast.subscribe,
      unsubscribe: this.broadcast.unsubscribe
    }, _babelHelpers$extends[CHANNEL] = function (subscriber) {
      if (process.env.NODE_ENV !== 'production') {
        warnChannelDeprecated();
      }

      // Patch the old `subscribe` provide via `CHANNEL` for older clients.
      var unsubscribeId = _this3.broadcast.subscribe(subscriber);
      return function () {
        return _this3.broadcast.unsubscribe(unsubscribeId);
      };
    }, _babelHelpers$extends));
  };

  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) {
      this.publish(nextProps.theme);
    }
  };

  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribeToOuterId !== -1) {
      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeToOuterId);
    }
  };

  // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation


  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
    var theme = passedTheme || this.props.theme;
    if (isFunction(theme)) {
      var mergedTheme = theme(this.outerTheme);
      if (process.env.NODE_ENV !== 'production' && (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object')) {
        throw new Error(process.env.NODE_ENV !== 'production' ? '[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!' : '');
      }
      return mergedTheme;
    }
    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new Error(process.env.NODE_ENV !== 'production' ? '[ThemeProvider] Please make your theme prop an object' : '');
    }
    return _extends({}, this.outerTheme, theme);
  };

  ThemeProvider.prototype.publish = function publish(theme) {
    this.broadcast.publish(this.getTheme(theme));
  };

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) {
      return null;
    }
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.only(this.props.children);
  };

  return ThemeProvider;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

ThemeProvider.childContextTypes = (_ThemeProvider$childC = {}, _ThemeProvider$childC[CHANNEL] = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func, _ThemeProvider$childC[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$childC);
ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$contex);

// 

// HACK for generating all static styles without needing to allocate
// an empty execution context every single time...
var STATIC_EXECUTION_CONTEXT = {};

var _StyledComponent = (function (ComponentStyle, constructWithOptions) {
  var identifiers = {};

  /* We depend on components having unique IDs */
  var generateId = function generateId(_displayName, parentComponentId) {
    var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

    var componentId = void 0;

    /**
     * only fall back to hashing the component injection order if
     * a proper displayName isn't provided by the babel plugin
     */
    if (!_displayName) {
      var nr = (identifiers[displayName] || 0) + 1;
      identifiers[displayName] = nr;

      componentId = displayName + '-' + ComponentStyle.generateName(displayName + nr);
    } else {
      componentId = displayName + '-' + ComponentStyle.generateName(displayName);
    }

    return parentComponentId !== undefined ? parentComponentId + '-' + componentId : componentId;
  };

  // $FlowFixMe

  var BaseStyledComponent = function (_Component) {
    inherits(BaseStyledComponent, _Component);

    function BaseStyledComponent() {
      var _temp, _this, _ret;

      classCallCheck(this, BaseStyledComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.attrs = {}, _this.state = {
        theme: null,
        generatedClassName: ''
      }, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
    }

    BaseStyledComponent.prototype.unsubscribeFromContext = function unsubscribeFromContext() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props) {
      var attrs = this.constructor.attrs;

      var context = _extends({}, props, { theme: theme });
      if (attrs === undefined) {
        return context;
      }

      this.attrs = Object.keys(attrs).reduce(function (acc, key) {
        var attr = attrs[key];
        // eslint-disable-next-line no-param-reassign
        acc[key] = typeof attr === 'function' && !hasInInheritanceChain(attr, __WEBPACK_IMPORTED_MODULE_3_react__["Component"]) ? attr(context) : attr;
        return acc;
      }, {});

      return _extends({}, context, this.attrs);
    };

    BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
      var _constructor = this.constructor,
          attrs = _constructor.attrs,
          componentStyle = _constructor.componentStyle,
          warnTooManyClasses = _constructor.warnTooManyClasses;

      var styleSheet = this.context[CONTEXT_KEY] || StyleSheet.master;

      // staticaly styled-components don't need to build an execution context object,
      // and shouldn't be increasing the number of class names
      if (componentStyle.isStatic && attrs === undefined) {
        return componentStyle.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, styleSheet);
      } else {
        var executionContext = this.buildExecutionContext(theme, props);
        var className = componentStyle.generateAndInjectStyles(executionContext, styleSheet);

        if (process.env.NODE_ENV !== 'production' && warnTooManyClasses !== undefined) {
          warnTooManyClasses(className);
        }

        return className;
      }
    };

    BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var componentStyle = this.constructor.componentStyle;

      var styledContext = this.context[CHANNEL_NEXT];

      // If this is a staticaly-styled component, we don't need to the theme
      // to generate or build styles.
      if (componentStyle.isStatic) {
        var generatedClassName = this.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, this.props);
        this.setState({ generatedClassName: generatedClassName });
        // If there is a theme in the context, subscribe to the event emitter. This
        // is necessary due to pure components blocking context updates, this circumvents
        // that by updating when an event is emitted
      } else if (styledContext !== undefined) {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          // This will be called once immediately
          var theme = determineTheme(_this2.props, nextTheme, _this2.constructor.defaultProps);
          var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);

          _this2.setState({ theme: theme, generatedClassName: generatedClassName });
        });
      } else {
        // eslint-disable-next-line react/prop-types
        var theme = this.props.theme || {};
        var _generatedClassName = this.generateAndInjectStyles(theme, this.props);
        this.setState({ theme: theme, generatedClassName: _generatedClassName });
      }
    };

    BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      // If this is a statically-styled component, we don't need to listen to
      // props changes to update styles
      var componentStyle = this.constructor.componentStyle;

      if (componentStyle.isStatic) {
        return;
      }

      this.setState(function (prevState) {
        var theme = determineTheme(nextProps, prevState.theme, _this3.constructor.defaultProps);
        var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);

        return { theme: theme, generatedClassName: generatedClassName };
      });
    };

    BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this.unsubscribeFromContext();
    };

    BaseStyledComponent.prototype.render = function render() {
      var _this4 = this;

      // eslint-disable-next-line react/prop-types
      var innerRef = this.props.innerRef;
      var generatedClassName = this.state.generatedClassName;
      var _constructor2 = this.constructor,
          styledComponentId = _constructor2.styledComponentId,
          target = _constructor2.target;


      var isTargetTag = isTag(target);

      var className = [
      // eslint-disable-next-line react/prop-types
      this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');

      var baseProps = _extends({}, this.attrs, {
        className: className
      });

      if (isStyledComponent(target)) {
        baseProps.innerRef = innerRef;
      } else {
        baseProps.ref = innerRef;
      }

      var propsForElement = Object.keys(this.props).reduce(function (acc, propName) {
        // Don't pass through non HTML tags through to HTML elements
        // always omit innerRef
        if (propName !== 'innerRef' && propName !== 'className' && (!isTargetTag || validAttr(propName))) {
          // eslint-disable-next-line no-param-reassign
          acc[propName] = _this4.props[propName];
        }

        return acc;
      }, baseProps);

      return Object(__WEBPACK_IMPORTED_MODULE_3_react__["createElement"])(target, propsForElement);
    };

    return BaseStyledComponent;
  }(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

  var createStyledComponent = function createStyledComponent(target, options, rules) {
    var _StyledComponent$cont;

    var _options$isClass = options.isClass,
        isClass = _options$isClass === undefined ? !isTag(target) : _options$isClass,
        _options$displayName = options.displayName,
        displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
        _options$componentId = options.componentId,
        componentId = _options$componentId === undefined ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
        _options$ParentCompon = options.ParentComponent,
        ParentComponent = _options$ParentCompon === undefined ? BaseStyledComponent : _options$ParentCompon,
        extendingRules = options.rules,
        attrs = options.attrs;


    var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : componentId;

    var componentStyle = new ComponentStyle(extendingRules === undefined ? rules : extendingRules.concat(rules), attrs, styledComponentId);

    var StyledComponent = function (_ParentComponent) {
      inherits(StyledComponent, _ParentComponent);

      function StyledComponent() {
        classCallCheck(this, StyledComponent);
        return possibleConstructorReturn(this, _ParentComponent.apply(this, arguments));
      }

      StyledComponent.withComponent = function withComponent(tag) {
        var previousComponentId = options.componentId,
            optionsToCopy = objectWithoutProperties(options, ['componentId']);


        var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

        var newOptions = _extends({}, optionsToCopy, {
          componentId: newComponentId,
          ParentComponent: StyledComponent
        });

        return createStyledComponent(tag, newOptions, rules);
      };

      createClass(StyledComponent, null, [{
        key: 'extend',
        get: function get$$1() {
          var rulesFromOptions = options.rules,
              parentComponentId = options.componentId,
              optionsToCopy = objectWithoutProperties(options, ['rules', 'componentId']);


          var newRules = rulesFromOptions === undefined ? rules : rulesFromOptions.concat(rules);

          var newOptions = _extends({}, optionsToCopy, {
            rules: newRules,
            parentComponentId: parentComponentId,
            ParentComponent: StyledComponent
          });

          return constructWithOptions(createStyledComponent, target, newOptions);
        }
      }]);
      return StyledComponent;
    }(ParentComponent);

    StyledComponent.contextTypes = (_StyledComponent$cont = {}, _StyledComponent$cont[CHANNEL] = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func, _StyledComponent$cont[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _StyledComponent$cont[CONTEXT_KEY] = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(StyleSheet), __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(ServerStyleSheet)]), _StyledComponent$cont);


    if (process.env.NODE_ENV !== 'production') {
      StyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
    }

    if (isClass) __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default()(StyledComponent, target);

    // we do this after hoisting to ensure we're overwriting existing
    // rules when wrapping another styled component class
    StyledComponent.displayName = displayName;
    StyledComponent.styledComponentId = styledComponentId;
    StyledComponent.attrs = attrs;
    StyledComponent.componentStyle = componentStyle;
    StyledComponent.target = target;

    return StyledComponent;
  };

  return createStyledComponent;
});

// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(str) {
  var l = str.length | 0,
      h = l | 0,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;

    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);

    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;

    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;

  return h >>> 0;
}

// 
var areStylesCacheable = IS_BROWSER;

var isStaticRules = function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule)) {
      return false;
    } else if (typeof rule === 'function' && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs !== undefined) {
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in attrs) {
      var value = attrs[key];
      if (typeof value === 'function') {
        return false;
      }
    }
  }

  return true;
};

var isHMREnabled = typeof module !== 'undefined' && module.hot && process.env.NODE_ENV !== 'production';

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */
var _ComponentStyle = (function (nameGenerator, flatten, stringifyRules) {
  /* combines hashStr (murmurhash) and nameGenerator for convenience */
  var generateRuleHash = function generateRuleHash(str) {
    return nameGenerator(murmurhash(str));
  };

  var ComponentStyle = function () {
    function ComponentStyle(rules, attrs, componentId) {
      classCallCheck(this, ComponentStyle);

      this.rules = rules;
      this.isStatic = !isHMREnabled && isStaticRules(rules, attrs);
      this.componentId = componentId;

      if (!StyleSheet.master.hasId(componentId)) {
        var placeholder = process.env.NODE_ENV !== 'production' ? ['.' + componentId + ' {}'] : [];

        StyleSheet.master.deferredInject(componentId, placeholder);
      }
    }

    /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */


    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
      var isStatic = this.isStatic,
          componentId = this.componentId,
          lastClassName = this.lastClassName;

      if (areStylesCacheable && isStatic && lastClassName !== undefined && styleSheet.hasNameForId(componentId, lastClassName)) {
        return lastClassName;
      }

      var flatCSS = flatten(this.rules, executionContext);
      var name = generateRuleHash(this.componentId + flatCSS.join(''));

      if (!styleSheet.hasNameForId(componentId, name)) {
        var css = stringifyRules(flatCSS, '.' + name);
        styleSheet.inject(this.componentId, css, name);
      }

      this.lastClassName = name;
      return name;
    };

    ComponentStyle.generateName = function generateName(str) {
      return generateRuleHash(str);
    };

    return ComponentStyle;
  }();

  return ComponentStyle;
});

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 
var _styled = (function (styledComponent, constructWithOptions) {
  var styled = function styled(tag) {
    return constructWithOptions(styledComponent, tag);
  };

  // Shorthands for all valid HTML Elements
  domElements.forEach(function (domElement) {
    styled[domElement] = styled(domElement);
  });

  return styled;
});

// 
var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

var _keyframes = (function (nameGenerator, stringifyRules, css) {
  return function () {
    var styleSheet = StyleSheet.master;
    var rules = css.apply(undefined, arguments);
    var name = nameGenerator(murmurhash(replaceWhitespace(JSON.stringify(rules))));
    var id = 'sc-keyframes-' + name;

    if (!styleSheet.hasNameForId(id, name)) {
      styleSheet.inject(id, stringifyRules(rules, name, '@keyframes'), name);
    }

    return name;
  };
});

// 
var _injectGlobal = (function (stringifyRules, css) {
  var injectGlobal = function injectGlobal() {
    var styleSheet = StyleSheet.master;
    var rules = css.apply(undefined, arguments);
    var hash = murmurhash(JSON.stringify(rules));
    var id = 'sc-global-' + hash;

    if (!styleSheet.hasId(id)) {
      styleSheet.inject(id, stringifyRules(rules));
    }
  };

  return injectGlobal;
});

// 
var _constructWithOptions = (function (css) {
  var constructWithOptions = function constructWithOptions(componentConstructor, tag) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!Object(__WEBPACK_IMPORTED_MODULE_6_react_is__["isValidElementType"])(tag)) {
      throw new Error(process.env.NODE_ENV !== 'production' ? 'Cannot create styled-component for component: ' + String(tag) : '');
    }

    /* This is callable directly as a template function */
    // $FlowFixMe: Not typed to avoid destructuring arguments
    var templateFunction = function templateFunction() {
      return componentConstructor(tag, options, css.apply(undefined, arguments));
    };

    /* If config methods are called, wrap up a new template function and merge options */
    templateFunction.withConfig = function (config) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
    };
    templateFunction.attrs = function (attrs) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, {
        attrs: _extends({}, options.attrs || {}, attrs)
      }));
    };

    return templateFunction;
  };

  return constructWithOptions;
});

// 
var wrapWithTheme = function wrapWithTheme(Component$$1) {
  var _WithTheme$contextTyp;

  var componentName = Component$$1.displayName || Component$$1.name || 'Component';
  var isStatelessFunctionalComponent = typeof Component$$1 === 'function' &&
  // $FlowFixMe TODO: flow for prototype
  !(Component$$1.prototype && 'isReactComponent' in Component$$1.prototype);

  // NOTE: We can't pass a ref to a stateless functional component
  var shouldSetInnerRef = isStyledComponent(Component$$1) || isStatelessFunctionalComponent;

  var WithTheme = function (_React$Component) {
    inherits(WithTheme, _React$Component);

    function WithTheme() {
      var _temp, _this, _ret;

      classCallCheck(this, WithTheme);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
    }

    // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping


    WithTheme.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var defaultProps = this.constructor.defaultProps;

      var styledContext = this.context[CHANNEL_NEXT];
      var themeProp = determineTheme(this.props, undefined, defaultProps);
      if (styledContext === undefined && themeProp === undefined && process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps');
      } else if (styledContext === undefined && themeProp !== undefined) {
        this.setState({ theme: themeProp });
      } else {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          var theme = determineTheme(_this2.props, nextTheme, defaultProps);
          _this2.setState({ theme: theme });
        });
      }
    };

    WithTheme.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var defaultProps = this.constructor.defaultProps;

      this.setState(function (oldState) {
        var theme = determineTheme(nextProps, oldState.theme, defaultProps);

        return { theme: theme };
      });
    };

    WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    WithTheme.prototype.render = function render() {
      var props = _extends({
        theme: this.state.theme
      }, this.props);

      if (!shouldSetInnerRef) {
        props.ref = props.innerRef;
        delete props.innerRef;
      }

      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component$$1, props);
    };

    return WithTheme;
  }(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

  WithTheme.displayName = 'WithTheme(' + componentName + ')';
  WithTheme.styledComponentId = 'withTheme';
  WithTheme.contextTypes = (_WithTheme$contextTyp = {}, _WithTheme$contextTyp[CHANNEL] = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func, _WithTheme$contextTyp[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _WithTheme$contextTyp);


  return __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default()(WithTheme, Component$$1);
};

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Import singletons */
/* Import singleton constructors */
/* Import components */
/* Import Higher Order Components */
/* Warning if you've imported this file on React Native */
if (process.env.NODE_ENV !== 'production' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

/* Instantiate singletons */
var ComponentStyle = _ComponentStyle(generateAlphabeticName, flatten, stringifyRules);
var constructWithOptions = _constructWithOptions(css);
var StyledComponent = _StyledComponent(ComponentStyle, constructWithOptions);

/* Instantiate exported singletons */
var keyframes = _keyframes(generateAlphabeticName, stringifyRules, css);
var injectGlobal = _injectGlobal(stringifyRules, css);
var styled = _styled(StyledComponent, constructWithOptions);


/* harmony default export */ __webpack_exports__["default"] = (styled);
//# sourceMappingURL=styled-components.browser.es.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1), __webpack_require__(395)(module)))

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(220) && !__webpack_require__(230)(function () {
  return Object.defineProperty(__webpack_require__(281)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(224);
var document = __webpack_require__(213).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(221);
var toIObject = __webpack_require__(225);
var arrayIndexOf = __webpack_require__(312)(false);
var IE_PROTO = __webpack_require__(257)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(254);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(256);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(314);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(325);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(316)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(287)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(240);
var $export = __webpack_require__(219);
var redefine = __webpack_require__(288);
var hide = __webpack_require__(222);
var Iterators = __webpack_require__(232);
var $iterCreate = __webpack_require__(317);
var setToStringTag = __webpack_require__(263);
var getPrototypeOf = __webpack_require__(320);
var ITERATOR = __webpack_require__(211)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(222);


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(282);
var hiddenKeys = __webpack_require__(259).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(242);
var createDesc = __webpack_require__(231);
var toIObject = __webpack_require__(225);
var toPrimitive = __webpack_require__(253);
var has = __webpack_require__(221);
var IE8_DOM_DEFINE = __webpack_require__(280);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(220) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__(266),
    getOperationVariables = _require.getOperationVariables;

var _require2 = __webpack_require__(206),
    ROOT_ID = _require2.ROOT_ID;

/**
 * Creates an instance of the `OperationSelector` type defined in
 * `RelayStoreTypes` given an operation and some variables. The input variables
 * are filtered to exclude variables that do not match defined arguments on the
 * operation, and default values are populated for null values.
 */
function createOperationSelector(request, variables, operationFromBatch) {
  var operation = operationFromBatch || (request.kind === __webpack_require__(205).BATCH_REQUEST ? request.requests[0].operation : request.operation);

  var operationVariables = getOperationVariables(operation, variables);
  var dataID = ROOT_ID;
  return {
    fragment: {
      dataID: dataID,
      node: request.fragment,
      variables: operationVariables
    },
    node: request,
    root: {
      dataID: dataID,
      node: operation,
      variables: operationVariables
    },
    variables: operationVariables
  };
}

module.exports = {
  createOperationSelector: createOperationSelector
};

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



module.exports = {
  DEFAULT_HANDLE_KEY: ''
};

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__(206),
    ROOT_ID = _require.ROOT_ID;

var VIEWER_ID = __webpack_require__(217)(ROOT_ID, 'viewer');
var VIEWER_TYPE = 'Viewer';

/**
 * A runtime handler for the `viewer` field. The actual viewer record will
 * *never* be accessed at runtime because all fragments that reference it will
 * delegate to the handle field. So in order to prevent GC from having to check
 * both the original server field *and* the handle field (which would be almost
 * duplicate work), the handler copies server fields and then deletes the server
 * record.
 *
 * NOTE: This means other handles may not be added on viewer, since they may
 * execute after this handle when the server record is already deleted.
 */
function update(store, payload) {
  var record = store.get(payload.dataID);
  if (!record) {
    return;
  }
  var serverViewer = record.getLinkedRecord(payload.fieldKey);
  if (!serverViewer) {
    // If `serverViewer` is null, `viewer` key for `client:root` should already
    // be null, so no need to `setValue` again.
    return;
  }
  // Server data already has viewer data at `client:root:viewer`, so link the
  // handle field to the server viewer record.
  if (serverViewer.getDataID() === VIEWER_ID) {
    record.setValue(null, payload.fieldKey);
    record.setLinkedRecord(serverViewer, payload.handleKey);
    return;
  }
  // Other ways to access viewer such as mutations may have a different id for
  // viewer: synthesize a record at the canonical viewer id, copy its fields
  // from the server record, and delete the server record link to speed up GC.
  var clientViewer = store.get(VIEWER_ID) || store.create(VIEWER_ID, VIEWER_TYPE);
  clientViewer.copyFieldsFrom(serverViewer);
  record.setValue(null, payload.fieldKey);
  record.setLinkedRecord(clientViewer, payload.handleKey);

  // Make sure the root object points to the viewer object as well
  var root = store.getRoot();
  root.setLinkedRecord(clientViewer, payload.handleKey);
}

module.exports = {
  VIEWER_ID: VIEWER_ID,
  update: update
};

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__(266),
    getFragmentVariables = _require.getFragmentVariables;

var _require2 = __webpack_require__(206),
    FRAGMENTS_KEY = _require2.FRAGMENTS_KEY,
    ID_KEY = _require2.ID_KEY;

/**
 * @public
 *
 * Given the result `item` from a parent that fetched `fragment`, creates a
 * selector that can be used to read the results of that fragment for that item.
 *
 * Example:
 *
 * Given two fragments as follows:
 *
 * ```
 * fragment Parent on User {
 *   id
 *   ...Child
 * }
 * fragment Child on User {
 *   name
 * }
 * ```
 *
 * And given some object `parent` that is the results of `Parent` for id "4",
 * the results of `Child` can be accessed by first getting a selector and then
 * using that selector to `lookup()` the results against the environment:
 *
 * ```
 * const childSelector = getSelector(queryVariables, Child, parent);
 * const childData = environment.lookup(childSelector).data;
 * ```
 */
function getSelector(operationVariables, fragment, item) {
  __webpack_require__(9)(typeof item === 'object' && item !== null && !Array.isArray(item), 'RelayModernSelector: Expected value for fragment `%s` to be an object, got ' + '`%s`.', fragment.name, JSON.stringify(item));
  var dataID = item[ID_KEY];
  var fragments = item[FRAGMENTS_KEY];
  if (typeof dataID === 'string' && typeof fragments === 'object' && fragments !== null && typeof fragments[fragment.name] === 'object' && fragments[fragment.name] !== null) {
    var argumentVariables = fragments[fragment.name];
    var fragmentVariables = getFragmentVariables(fragment, operationVariables, argumentVariables);
    return {
      dataID: dataID,
      node: fragment,
      variables: fragmentVariables
    };
  }
  __webpack_require__(20)(false, 'RelayModernSelector: Expected object to contain data for fragment `%s`, got ' + '`%s`. Make sure that the parent operation/fragment included fragment ' + '`...%s` without `@relay(mask: false)`.', fragment.name, JSON.stringify(item), fragment.name);
  return null;
}

/**
 * @public
 *
 * Given the result `items` from a parent that fetched `fragment`, creates a
 * selector that can be used to read the results of that fragment on those
 * items. This is similar to `getSelector` but for "plural" fragments that
 * expect an array of results and therefore return an array of selectors.
 */
function getSelectorList(operationVariables, fragment, items) {
  var selectors = null;
  items.forEach(function (item) {
    var selector = item != null ? getSelector(operationVariables, fragment, item) : null;
    if (selector != null) {
      selectors = selectors || [];
      selectors.push(selector);
    }
  });
  return selectors;
}

/**
 * @public
 *
 * Given a mapping of keys -> results and a mapping of keys -> fragments,
 * extracts the selectors for those fragments from the results.
 *
 * The canonical use-case for this function is ReactRelayFragmentContainer, which
 * uses this function to convert (props, fragments) into selectors so that it
 * can read the results to pass to the inner component.
 */
function getSelectorsFromObject(operationVariables, fragments, object) {
  var selectors = {};
  for (var _key in fragments) {
    if (fragments.hasOwnProperty(_key)) {
      var fragment = fragments[_key];
      var item = object[_key];
      if (item == null) {
        selectors[_key] = item;
      } else if (fragment.metadata && fragment.metadata.plural === true) {
        __webpack_require__(9)(Array.isArray(item), 'RelayModernSelector: Expected value for key `%s` to be an array, got `%s`. ' + 'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.', _key, JSON.stringify(item), fragment.name);
        selectors[_key] = getSelectorList(operationVariables, fragment, item);
      } else {
        __webpack_require__(9)(!Array.isArray(item), 'RelayModernFragmentSpecResolver: Expected value for key `%s` to be an object, got `%s`. ' + 'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.', _key, JSON.stringify(item), fragment.name);
        selectors[_key] = getSelector(operationVariables, fragment, item);
      }
    }
  }
  return selectors;
}

/**
 * @public
 *
 * Given a mapping of keys -> results and a mapping of keys -> fragments,
 * extracts a mapping of keys -> id(s) of the results.
 *
 * Similar to `getSelectorsFromObject()`, this function can be useful in
 * determining the "identity" of the props passed to a component.
 */
function getDataIDsFromObject(fragments, object) {
  var ids = {};
  for (var _key2 in fragments) {
    if (fragments.hasOwnProperty(_key2)) {
      var fragment = fragments[_key2];
      var item = object[_key2];
      if (item == null) {
        ids[_key2] = item;
      } else if (fragment.metadata && fragment.metadata.plural === true) {
        __webpack_require__(9)(Array.isArray(item), 'RelayModernSelector: Expected value for key `%s` to be an array, got `%s`. ' + 'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.', _key2, JSON.stringify(item), fragment.name);
        ids[_key2] = getDataIDs(fragment, item);
      } else {
        __webpack_require__(9)(!Array.isArray(item), 'RelayModernFragmentSpecResolver: Expected value for key `%s` to be an object, got `%s`. ' + 'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.', _key2, JSON.stringify(item), fragment.name);
        ids[_key2] = getDataID(fragment, item);
      }
    }
  }
  return ids;
}

/**
 * @internal
 */
function getDataIDs(fragment, items) {
  var ids = void 0;
  items.forEach(function (item) {
    var id = item != null ? getDataID(fragment, item) : null;
    if (id != null) {
      ids = ids || [];
      ids.push(id);
    }
  });
  return ids || null;
}

/**
 * @internal
 */
function getDataID(fragment, item) {
  __webpack_require__(9)(typeof item === 'object' && item !== null && !Array.isArray(item), 'RelayModernSelector: Expected value for fragment `%s` to be an object, got ' + '`%s`.', fragment.name, JSON.stringify(item));
  var dataID = item[ID_KEY];
  if (typeof dataID === 'string') {
    return dataID;
  }
  __webpack_require__(20)(false, 'RelayModernSelector: Expected object to contain data for fragment `%s`, got ' + '`%s`. Make sure that the parent operation/fragment included fragment ' + '`...%s` without `@relay(mask: false)`.', fragment.name, JSON.stringify(item), fragment.name);
  return null;
}

/**
 * @public
 *
 * Given a mapping of keys -> results and a mapping of keys -> fragments,
 * extracts the merged variables that would be in scope for those
 * fragments/results.
 *
 * This can be useful in determing what varaibles were used to fetch the data
 * for a Relay container, for example.
 */
function getVariablesFromObject(operationVariables, fragments, object) {
  var variables = {};
  for (var _key3 in fragments) {
    if (fragments.hasOwnProperty(_key3)) {
      var _ret = function () {
        var fragment = fragments[_key3];
        var item = object[_key3];
        if (item == null) {
          return 'continue';
        } else if (fragment.metadata && fragment.metadata.plural === true) {
          __webpack_require__(9)(Array.isArray(item), 'RelayModernSelector: Expected value for key `%s` to be an array, got `%s`. ' + 'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.', _key3, JSON.stringify(item), fragment.name);
          item.forEach(function (value) {
            if (value != null) {
              var itemVariables = getVariables(operationVariables, fragment, value);
              if (itemVariables) {
                Object.assign(variables, itemVariables);
              }
            }
          });
        } else {
          __webpack_require__(9)(!Array.isArray(item), 'RelayModernFragmentSpecResolver: Expected value for key `%s` to be an object, got `%s`. ' + 'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.', _key3, JSON.stringify(item), fragment.name);
          var itemVariables = getVariables(operationVariables, fragment, item);
          if (itemVariables) {
            Object.assign(variables, itemVariables);
          }
        }
      }();

      if (_ret === 'continue') continue;
    }
  }
  return variables;
}

/**
 * @internal
 */
function getVariables(operationVariables, fragment, item) {
  var selector = getSelector(operationVariables, fragment, item);
  return selector ? selector.variables : null;
}

/**
 * @public
 *
 * Determine if two selectors are equal (represent the same selection). Note
 * that this function returns `false` when the two queries/fragments are
 * different objects, even if they select the same fields.
 */
function areEqualSelectors(thisSelector, thatSelector) {
  return thisSelector.dataID === thatSelector.dataID && thisSelector.node === thatSelector.node && __webpack_require__(218)(thisSelector.variables, thatSelector.variables);
}

module.exports = {
  areEqualSelectors: areEqualSelectors,
  getDataIDsFromObject: getDataIDsFromObject,
  getSelector: getSelector,
  getSelectorList: getSelectorList,
  getSelectorsFromObject: getSelectorsFromObject,
  getVariablesFromObject: getVariablesFromObject
};

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * A fast test to determine if two values are equal scalars:
 * - compares scalars such as booleans, strings, numbers by value
 * - compares functions by identity
 * - returns false for complex values, since these cannot be cheaply tested for
 *   equality (use `areEquals` instead)
 */

function isScalarAndEqual(valueA, valueB) {
  return valueA === valueB && (valueA === null || typeof valueA !== 'object');
}

module.exports = isScalarAndEqual;

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__(206),
    ROOT_ID = _require.ROOT_ID;

function normalizePayload(payload) {
  var operation = payload.operation,
      variables = payload.variables,
      response = payload.response;
  var data = response.data,
      errors = response.errors;

  if (data != null) {
    return __webpack_require__(234)({
      dataID: ROOT_ID,
      node: operation,
      variables: variables
    }, data, errors, { handleStrippedNulls: true });
  }
  var error = __webpack_require__(352).create('RelayNetwork', 'No data returned for operation `%s`, got error(s):\n%s\n\nSee the error ' + '`source` property for more information.', operation.name, errors ? errors.map(function (_ref) {
    var message = _ref.message;
    return message;
  }).join('\n') : '(No errors)');
  error.source = { errors: errors, operation: operation, variables: variables };
  throw error;
}

module.exports = normalizePayload;

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _extends3 = _interopRequireDefault(__webpack_require__(209));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__(206),
    getHandleStorageKey = _require.getHandleStorageKey;

var LINKED_FIELD = __webpack_require__(205).LINKED_FIELD;

/**
 * @private
 *
 * Creates a clone of the supplied `handleField` by finding the original linked
 * field (on which the handle was declared) among the sibling `selections`, and
 * copying its selections into the clone.
 */


function cloneRelayHandleSourceField(handleField, selections, variables) {
  var sourceField = selections.find(function (source) {
    return source.kind === LINKED_FIELD && source.name === handleField.name && source.alias === handleField.alias && __webpack_require__(218)(source.args, handleField.args);
  });
  __webpack_require__(9)(sourceField && sourceField.kind === LINKED_FIELD, 'cloneRelayHandleSourceField: Expected a corresponding source field for ' + 'handle `%s`.', handleField.handle);
  var handleKey = getHandleStorageKey(handleField, variables);
  var clonedField = (0, _extends3['default'])({}, sourceField, {
    args: null,
    name: handleKey,
    storageKey: handleKey
  });
  return clonedField;
}

module.exports = cloneRelayHandleSourceField;

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Recycles subtrees from `prevData` by replacing equal subtrees in `nextData`.
 */

function recycleNodesInto(prevData, nextData) {
  if (prevData === nextData || typeof prevData !== 'object' || !prevData || typeof nextData !== 'object' || !nextData) {
    return nextData;
  }
  var canRecycle = false;

  // Assign local variables to preserve Flow type refinement.
  var prevArray = Array.isArray(prevData) ? prevData : null;
  var nextArray = Array.isArray(nextData) ? nextData : null;
  if (prevArray && nextArray) {
    canRecycle = nextArray.reduce(function (wasEqual, nextItem, ii) {
      var prevValue = prevArray[ii];
      var nextValue = recycleNodesInto(prevValue, nextItem);
      if (nextValue !== nextArray[ii]) {
        nextArray[ii] = nextValue;
      }
      return wasEqual && nextArray[ii] === prevArray[ii];
    }, true) && prevArray.length === nextArray.length;
  } else if (!prevArray && !nextArray) {
    // Assign local variables to preserve Flow type refinement.
    var prevObject = prevData;
    var nextObject = nextData;
    var prevKeys = Object.keys(prevObject);
    var nextKeys = Object.keys(nextObject);
    canRecycle = nextKeys.reduce(function (wasEqual, key) {
      var prevValue = prevObject[key];
      var nextValue = recycleNodesInto(prevValue, nextObject[key]);
      if (nextValue !== nextObject[key]) {
        nextObject[key] = nextValue;
      }
      return wasEqual && nextObject[key] === prevObject[key];
    }, true) && prevKeys.length === nextKeys.length;
  }
  return canRecycle ? prevData : nextData;
}

module.exports = recycleNodesInto;

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Executes the provided `callback` once for each enumerable own property in the
 * object and constructs a new object from the results. The `callback` is
 * invoked with three arguments:
 *
 *  - the property value
 *  - the property name
 *  - the object being traversed
 *
 * Properties that are added after the call to `mapObject` will not be visited
 * by `callback`. If the values of existing properties are changed, the value
 * passed to `callback` will be the value at the time `mapObject` visits them.
 * Properties that are deleted before being visited are not visited.
 *
 * @grep function objectMap()
 * @grep function objMap()
 *
 * @param {?object} object
 * @param {function} callback
 * @param {*} context
 * @return {?object}
 */
function mapObject(object, callback, context) {
  if (!object) {
    return null;
  }
  var result = {};
  for (var name in object) {
    if (hasOwnProperty.call(object, name)) {
      result[name] = callback.call(context, object[name], name, object);
    }
  }
  return result;
}

module.exports = mapObject;

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Determine if a given value is an object that implements the `Environment`
 * interface defined in `RelayEnvironmentTypes`.
 */

function isRelayEnvironment(environment) {
  return typeof environment === 'object' && environment !== null &&
  // TODO: add applyMutation/sendMutation once ready in both cores
  typeof environment.check === 'function' && typeof environment.lookup === 'function' && typeof environment.retain === 'function' && typeof environment.sendQuery === 'function' && typeof environment.execute === 'function' && typeof environment.subscribe === 'function';
}

module.exports = isRelayEnvironment;

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Determine if a given value is an object that implements the `RelayEnvironment`
 * interface.
 */

function isClassicRelayEnvironment(environment) {
  return typeof environment === 'object' && environment !== null && typeof environment.applyMutation === 'function' && typeof environment.sendMutation === 'function' && typeof environment.forceFetch === 'function' && typeof environment.getFragmentResolver === 'function' && typeof environment.getStoreData === 'function' && typeof environment.primeCache === 'function';
}

module.exports = isClassicRelayEnvironment;

/***/ }),
/* 303 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhAAEAAaUfAP////f39+/v7+bm5t7e3tbW1s7OzsXFxb29vbW1ta2traWlpZycnJSUlIyMjISEhHt7e3Nzc2tra2NjY1paWlJSUkpKSkJCQjo6OjExMSkpKSEhIRkZGRAQEAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hFDcmVhdGVkIHdpdGggR0lNUAAh+QQFBwAgACwAAAAAAAEAAQAG/kCAcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE6v2+/4vH7P7/v/gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/v8AAwocSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gnQQYMCBASC0BDihQcMDkySsFFjBgsKDAyysIZs5EcFMJ/skBSRLoZJAgyYGjIQcUWEoAiVCdRY8ogADhwQGQBQxoNSDgyNOZUYsUkEC2KtatBmwa+Ur0CASyZB+AHIDWANAibMMOSUB2AlkFIAPUNeBy71C9AAREgCshQte5dZsSyVtkQV+yiD1mRVsYAOUhAxhLgHBTQF21Qj4LcXBZAuqTBOo+9nx4iAHRDjT+7ExEcF3DUIe89Uv2rpECDhwsaKh0a8kjsdHe/cxXAvHlRgQ4uIDhggTsCqNvLWCcyGCTAu4O6KqYcQTeARZYyJABQ3fSC8WjLTBbCF2tBPBWxAAMEMfTEAEgQAEG9NF3H0MBbDZYgEQs1Z8SBTwgF2gS/jDYoIMWvJaQABIOZpyAS4wkhAANXPBhgxhQYABEzQ2W1oVQBKBABR5+iIEFC6C40Eg2pmUFBS/Sd4EDOEIUgH5aCenEAC7CKIFkGJHoHBYMOFjBgRz9l4UAF1jAgJQXBdDkFAmU19ObRqgpwJx01jknFwvkqeeeeSbAlUE1FqmViFds4MGhiCZ6qAYPrMlPoIIaucUFH1Rq6aUfeNBBBuAFBKmghFpBKaaYasopQVpGOigXo5JqqaYXZPaPAASUaGOoVWzAwa689srBBhbICuewxFZBqxYEuLlRhFFi4Rt/HD2JFpZV6EchRv/JZoVpJlqU6mAFoLmEreM5mpC0/kVeSwW6t5pbULbgFrYeFOkhCOW0zBUJLYJaKYvEf519W5e/Bd1rlxH6EewfvgPaSC1CUKrL737+/USSELYKyG5aDx9E66BC2vqYtSuehgSzBUg84p1IcLsVliQLAaWjAdSs0XlDxAyAb2j1BK8B1OoMQMQv8bxVEUIDgHNIMyPN8BAuAxiS0ZISkTQAGYMEpYBXU92xRiV+ffXQFH+01FYojs3zUoEttS/CTxdB4lLiWlSzlGMLcXexRMCrMN/ZbfY24EzQSoC7hCeu+OKMN+7445BHLvnklFdu+eWYZ6755px37vnnoIcu+uikl2766ainrvrqrLfu+uuwxy77POy012777bjnrvvuvPfu++/ABy/88MQXb/zxyCev/PLMN+/889BHL/301Fdv/fXYZ6/99tx37/334AsUBAAh+QQFBwA/ACxiAGIAPAA8AAAG/sCfcEgsGo+/QACAbDqfUONgKohar9FBYUsIYL/g4cBALlTD6KRAoEQSyOSzUTAdeNNHwo8gL77hfUMCBgkJCHp4RAGIe3d+cAaBQwoMDAsFiYqMPwN5kJIDCZWWmJlIZkZ/cUUBBgujC5uZAqVCsnufRQOUowmOpntEqESqkYoHo5a3mb/BxLlDBLyVCM3AnUTYttA/AgjJCtrAQ821uIBDBa+jBmkBa5KC5nbb6JyivfFVZfHpBctJigwrVqXVOlJGFil4AOFBLCRa0vFpRouYkCUAALTZlQyBFAQOIkiQEKGBuWwn/zkRhwTfQ0EHGkAYObLkSUGnxHnpYmXA/oIDdwYtmEmz5gKW5JBGC4imoLQHIouSNGlN0ymAVryFlDrygcesAJVaCeCAqwQI4cBUFMYkTQGpERjgCSCu35eaDgxU/bJoCzAJXu2GEfzl67jDaPYiVoSgsePHCA4YQLTTbxOsYSxo3sxZMwUICbr1PJyhtOnTGTBgsOBgAGExpFGjVs26E+al41Tr3r27QgM7EZ/cxiLggvHjyC9YqAAB6OLn0FcqTjwFWIS0pt4RwNQWz4IOGSIgeP2ETi2xWDZ88NABg4MC05t4uRn/yYMP+NdzqMBguCJnR3T3hQEceOBBfgZqMEEC6BFRxU0/FNAgFAEkYEEHByIIXgTOxCExnxtneFFfEWcIwEAGGOa3XgcWMCDWWuVB6KEemxAQwQYGaljBARClxNRFVyySjk4HUFBghh1cYJguMjpozjIF+ZFQAhdgyJ4FSxrBRTxCplNVP0oJ4EAGHITXJCcrzYNEiAJdRoleTT3ZhBwwNvJclzit2cQwiNXJk57yWIRYOeXpIsyEaqnpRCB4AniNMFBI0gefpmyCqCS/UJqJNv7pUwt5VwhAY1YQCYGoWqBq6iCo0cEXHR7bSTjiq0fccSoWQQAAIfkEBQcAPwAsYgBiADwAPAAABv7An3BILBqPwwByyWw6i4IfgfADPK/YrHbLFVKT3fAw6iwojwGBWmxUFrBmNKFQIJDZ2bcwbhwUDAYFd3hXej98RAJ/gIKEQ19MhoiPgIxnjn1GkpdCipUGBFaYT5tFBJ+To5FDkwOfBgOiqk2lrJ8EnKqGQpe1Aa6fg1oCAwNMrkUAyrWelbhIc3W5vEKBu4WsZ6eVjUcIC+AIxm0/r1exyunpzYDo6UoHCgzzDAnjRUoGeQKycpZFBuTRm2ePUKwrig7uSbBg4LwFB4RhCwPg0jeHD8Wp6zfrSDyMDBYkCIVHYpaGGBWk6gKpywCHEE12mbYlQUaFhFqGeTmSI/4emlxWdhyKRE2xo0iLjZK5ZA6gY5gERJhKtepUCAwOACU6RILXr2C/QkjAlOuPsGi9ji1b5N7PtGgfIOBEp65dOqMIQNjLt+/eBwpImh081CfhcxAQsM3iRx8hBhgoNDCw9YkSnWwGXMiA4cKEBZgRhmYjIYNpzhYiFGR87VEYBBYwnDaNocKDiE5+/ZkVIAACCRdkn+4suXWi0QUGVGYiYOyQBRQwCKd9QbVMt0SeDcHeBMGGDhNaOog9HYMFCMaB8utyAMOHDx40MAigzgCE2NQjpC+S/AiwSnd88YwBGHjwXgcVtIbABMGZh55lRyiSHSvZ/BCAAxy85wEHD5yYxAAFFnzGXSJABbANI3fUQoAFBsKHAQJIDIBAT+qwoY4vDGR4YAQjznJNLT8MQEGLHmSgwHJcYOfOMhUOkcAG730A3mij5AKkhQ90oOEG843yHyASXXnIBURaYNxMLYUmZgAN6BhfApjQZZKYUrDoQZFwOsIJTkTQ+cMCGnTAwQV58lYGTQM4ENwDVBK2VTqHQRMpRZMyptwoQQAAIfkEBQcAPwAsYgBiADwAPAAABv7An3BILBqNgaNyyWw6hwTh4EmtVg0Gq3bL7T4FzsLX24z+CtOjuAkmu50BQvZNr1vTdrP9jT/3639aa0J6ez+FXgVthkKDXoF7iE+Fjo+LRQKVWgMARwEDoJdKc0cAkIcEBZpQSUYDqQYFBK1Pp1yKRgKwWAazS6s/tES+TKaErgW8vMRHqUqXBKJMcYufycpYaMJEANZOnVrgutjZ0eBLAAIDmqRdcdfKsgLb07qa9FUA8Lza51WfhWxRERBvQAB/4bz9QMhFjjyGXNIREPgvGj4yB+tkZMTxTkclB0KKHHkgVhppH4cMYMCypUuWCxIASznkpU2YBi7S/HHT5v6CnI12ElnZs2VMMenUgVrKNJQdASSjxjIntKrOqmwkeWlwACsXCRAY0FnXzk0BCWglPFDgTkhZNwEcpEUbwcEWe81QUhmwAMJculzNGoRIJd2BBhH+gl3w5G0/KHqPTEEgxFQCB4nn1qXs6UfZh0WyMHvG4MIFCHjiKHjwNwIDrW6HDS4y00iFDBkwVGBLJEABBn7pvg4zm8kgC6ZNiyEQAQNuDBKMGG4AIUJY2D+WCiBchJMQDB4+fNiwJkEF5xkuNCg14EACBAYiA5j/bwh48eSlPLjwnELXUvNx58Qffdw33hoAHEABehc8UNVoBuYnhAAN8JdbBQl0RAouRHxE6MhZ6GEAASOZDGOEh0UoYIFzGFjA2EeroDgMBCFG95F3RchIhHksVvAfI6PZF96BrjywIgb+MaLKEjoScQAEFFAAwVsYCWDlEhd4oKUGq/iGAAIHULRFgEtUoKUHGGDnVREQbMABBxOIueYPCUgwwQQMXDXnhNfIWUUQACH5BAUHAD8ALGIAYgA8ADwAAAb+wJ9wSCwaj4LkcclsOp2DX6HwrFqvwoIBy+0eqd7wcRBlbp2BH7ks9p6d02nbKABLBcc30z7/FtNFemOCfUQET4RFfIVGBo6Oh4FNBHp4jEOUjwZsQolCAp6XWUSLngGRomaqg6lNi5Y/nouARwG0TJG3RJoGBICJA6FEeAQEnEWoPwQCuspNZKiLe48/sIrX1j+62UTNRgNaRdxCmbwFx0MDAE91RmmUXOFGh7QF3ksAnALJ4k78huO4gGNyb16ic23k7RKyzko+hYz+9ZHWpmAbiWLYWGzVpeEljxxDivwjYECxkyhPohNzKqXLAcyyCGsFgJdNRwgxjox101z+lJU7efZ8hDBoraFElzWE5hIlUC8tm6q0ZbSqkI1YsGYFp5OLgk2FAux7pNVJAgYLEhQIaGUfsjkDGMhFiyAjRbZVFsydq+CANiu/OCbQu1dugpmf4DUJQHExHsYKCstN+6RxkQMaHlwp4MDvpwOEC3/F1YjOBA8fNiyoIkFCAyL5EISemwCoNG4KOHzY3QHC425CWreOkGDe4L21xRC4gPqDhwzFhWSYbmHLgAfCJWh2Z0DBgu8IgL77685Bh90feluyMD1DdQAAEGSPsBqJAQS9yjbK0NzDBc8/sEfdGQI4kN0DiIURQATn7cZBA7QI6N4bBkSQHQMhIbBBfxSe8CFhdUMEsEB2EBwAUiECUNCfBgvc8qEeA0CQ3WupLNBgehIc8yJ8PCYwnwKiDGBBfxnUVcSLRVyXnQNdcWHAhrz5ZsSOPMJ3AIkJWmFABh140AGIU7YHZjcNDPeAZV0QEEEGGljQ4hFIGsEZBA4s0GRWBzTAAFhwtleBJ4ccsIxVQ2BgKAWEYmHBBRZAkKgVB1j4QHSPonEAAoNeEgQAIfkEBQcAPwAsYgBjADwAOwAABv7An3BILBqPxAByyWw6iYRh4Umt/gJKqmCJzVqpg+1xKjSIi4CvWkjwEsk/89Kwbrp/g/FQbowO83VGaVB6ZWeBX4BlilJ7h4hVAXA/BY9wfH9FjJBDj1dvjkWTnEt+naCGpGoCk22NqUKeiF1IAJuKl7Kxdk4Em0OSSLlqprVEdL94x4qAYYGjQwDFbJ9LyUPF16K1A9BHukgB04EB3UYGBYzaSJ50fU0AAuNJqkfrSaz1Tulq5d6ImwoQAAdP3r81AA4GkldPzL0v5VTZ0kdRyKCKGDNySligo0ePbJz9mPdOI5OHJptEIZiy15UBBD7K9EgS4cybQpQA6MKzJ/6Wejt9Cr3YsmUAAwdUsYRYwAEGDKQkDSQ1YIEFDh4+IOBEwAC6AXesBEhAYUPWDx82LGUiwKtbfhANQNBwFq2HDhACJXT7duoTcQ0udEBrt4MGCQnCUvHHt6+TqhWwEv7gYQOFBYDcqdnZrbFXuEcCMMhQl3IHDA4KZDFQQQJKPAsMZIkX07NAxT8qdDh7N0OEA4cgYMhwgcG6AQkYMFBQJIA827quepiuYUKCTQkuZNh+4QGbLAK2VFWuPCkRzgX4VkLyQLuGCgzGDZAwPAMGCuYhSNj/+woC8gwscAR6HfnVRwIIqnYEA9px18AQ+vFn3njkbTWgc+E9Q0F9GLxIAEeEEvT3AwAGACggbpw4tR0GFggI4X4hmveDAAoAmEBGB1jAIQTFgCjiiAWYWI0+EXBYgYUvSphEcuQxR5ECDRLngBE+ysjGAgAiSYoA9K04gZVCVNncAQA6qQoBFTzFIgNHiKlJjcotoNAXBExgwQUWROCNm+cZgOVy+gjAAAQRPKAlEXwSIcABCB7KSTcC6fIAjBCAaZEAA2SKYkYOwPjAnEUZocADEEDAZqhWEIAAgpig+ld4m6oRBAAh+QQFBwA/ACxiAGMAOwA7AAAG/sCfcEgsGo2CIeHIbDqfzUFhmIRar8NAdGgYYL/g4nLofVbDRoDX4BwLy8XAkg1HE9VQ968uxAvZdkd1BWdKRHw/AlN/iIGKT3qIeoSBaY1EkUWPjJVHAYtCej+ZWaKdR35kmIdDqadOck2kP5+rr0ebP4ChrD+unaZGg1WkuVcEhVREoJrMBFrJvEPMYcZ0Rb9N2Y5MyES1V9tC1D+UgeJNWkXkVgFSRgYFl7fho+zB4fhoAqbRX/6+0LizVUkfGgB7pqirtJBeIocQI0qc+GSAAggVLmDYyLGjBYf6CoAyMGGDh5MoU5684JCdEQIGKHDw8KGmzZsfWNJzSYRN/syZOIPqvMWTyx4GFDBo2MC0qdOhFJm4IyCyqtWqUbNqhVJ0KxM1CSJUAPgFoZCG+xBg3MjgFBxvdgw0SIohQ4YL89q9IrBAgka7GTBARWPqGhSwESzUBYyhwgME5/jxREtEwIEHFRbbxWAhgoI+z8o2xAcXm4EIfzdfoNCWCgMHXakU0DMQ3tcEmTc3dhBHrQQJUOQYiFfIbGxfCehyhgBZTIPfvxt4EVBmgBbhww0Ek/wEwIEIFCpIUIAoQFjoEIYcYMCeARs1BbJ3kVXxgP2vBR5Aj7BAfXv3Z8GUXQGU3SLAAhFA9wAR67W3iyLyDWCWQwAYoN9vESTA4H+7jaghnzkODcAAdBLwtqGD38SXnUEC+fZbekU0yN4uvgzwIVmEOUBiayfOGIeAw7FYFgIJvniEjADeAeFwIHYCgAJF8nckh0ZgN1xeZSUAQQQRmGgEkjTKxiSWWFTY3gFMgInKAAS0iWNZ/Bgk4wJhZhHAnV5xsQB7/eV5TAILLKChn1YsSSChh9FSYCBBAAAh+QQFBwA/ACxiAGIAPAA8AAAG/sCfcEgsGo2A32AgCByf0KgU6hwKptis9jocaL9gIzdMPgYIBQLUO1Q/0e7ykWsojIlsYVweLggNBFV4RHt8W35ReT+FP4KGT2eEjkqERQCKj0+IPwaYioxFgZmhRJtCn1F2o0UCm52DbVCvq6ljqLRCZwezU6KUsWR3RgUSGhsWC8I/SU+3k75HBaZGCBcdHh4cEweTkVJezETKR5hDCBgdH+oeGhEGk5vQUQaNWOVCBxbX6h8eHRkNUMmTokpIkgL0tAxgYIGDB379OlhIUEXAuERFEhYpcG9IgAMQMuzjl23bJFoXWSUoNrIfu2mZ1JxMtKCCQ4gP+EyqM2Dm/pQABRxYe7jhUUc5Ag5EELngETMCKcMMSBBh1BWffKLi2srVCgIhFsKKHRsWKxkDaNOq/ZGm5wAHFTDInUt3Li1QGfU8sCA3g9+/gDPQOsqKwN6+gQMPzmIxAQQKFchKvmtPyBWEajOjNdu1s+cnl1ZxDiMAwQMJqzhmAtogggTUj+j4GQ2FwAIIr3PD/ALAFCCtSKaezp3bAe1m0b4kdUA8dwQGB4CH4SkFKAPXzSM4SGAl65M69chdby7hgQIiHxcQRo832sWgzSEw0LjMNgMG3L/9KXevY1DsETQQHSsI3HdfAldVEc5G0nVEAAMPQLDdEb0tYOAC7yihlhvCmrQ3xG6WoQHIEwIkYCB+XWwIhXRlBGDAiU2lmFZ7A60ygAInHoCHit+t1+IBJ56344ykfLgVAPbdt4COQ6JVSCtD8GKViQbm1+SItdxloZIwDcCjLD5+UcCWDHxlhJdEWnLLKGPepwAoaDpphhv0xYRAAgnUKaOcc3RBSwBLHBUnliSyiBJmUn6mxRnSFKToFwEIEOijZCy4ShAAIfkEBQcAPwAsYgBiADwAPAAABv7An3BILBqPAcFxyWw6n78BdEqtBgjVrHZZGGKXgPC2WXhYKAupUfkMqMdMBYbTwSiObCvcqNB4PB0UX0R5TAJdQgQBe0V9Hh8fHAyLhE+DP5eMPwYWjx8eFohDhVBvmj8BDRueHQ6UQqRFr6dLBBQdkB8ZCJVgprRGAQt+kB4Tb7GjopizwAMSuJAbC5TJiUQF1qUEBNYIGJ4eFV/Wh0MGv0QAzUUDDBQVEQl4Dxy5HA2L1plLbk8GES5gwHABggEjBSqEu4Doy6Bf6aoAFJghA4YKDS4FYLAKEoaDUDIBEMCPSQEIFCsOREOEwIQOG3iNcbNsSMQfAhIExFBR5f4FCQiUBFAAQVs/ITRrOSnQgEJKlRYedGFHxZoBLFSNHHhQYWDPlSCBGShws0kCCBZ49pQA7BSBBRMoXii7pVvWKQEMNL3AgNbBAXezCNhKt0rhtogTKw5GQIGDBxAiS54MoeSYAQUya95cJOcDCaBDiw4dOMthWAKIjl4NejEZnKpZj3ZtEtUBBg8i6N7NW7dR0waCCx9+sKaQA8iTKz/wu4qA59CjQ0dFuzqS09aPABiAII1bYCMPLGDAYB6j0lTWFVBAvj12JpazXEnQvj41OM2fbO9ev72CsNkVMZIB4/XHgAIHUBcAAHCUhQWDeIhn4AIIDLJdNlNcqMkA9JPZl0BNARQQnCJNjGScF0cZwWF9//2y3XCIiCEEg9vNdAR3CyyAIHWdiSgcOXg9cRMlJyJFAIyjaPdeFHu8OBwyKWYX4nCX5Eebk8GR1UuASPg4YmdcanekcBhuGaYyTzZj5WKHkImHFuhV5aOWa2RBIi0kZXbTmnrGWdVzWZnzxJqIzRLfmUwsGSCD3CBKhZ9ZBAEAIfkEBQcAPwAsYgBiADwAOwAABv7An3BILBqNAYJhOTg6n9DoU9CgUCQJqXbLJVA4nI2ES44Czk9DxsPGlN/GwSGRMASOh83n49FMBQJwUAcSFBUQBnh6fH5GAAMFBYJQCBUYGBcQTUV5e31SBYGTRZUYGRgWWZyLn1Gho0UFE6anEgSrno1EApJCBrewRQsWtBcMuIxGwEKvwUURtBgUvUKdybFDv85GCZYZpw6iP9atQndEzdtEDxffqAcA1ay6j0QGm29n+k8U0RGb5HQZKXDuCBonAuYoQECgIJEG7b5dUCAvl5MC+IgAEDCg4xMCDCBEiOAAgYB4RSREm3DrAKYL7YTwyrZsCIAAkIg4HEKgQf4ECUAhMDBwkogCYqcsINiSzlxOmuKI9PwJFOgDBQSJQMDEIOqRJD+07arpi4DXIQgcUK1KMsGAcwj+cZkpZCMBatmaHlkAoSrbBgdOnpVy5+bTWBmj+PQblAFZMoftPZaSdq3VnbB+Dd6i4IFfvJkxOgs5Rh1oZw22DTCrbkji1rBjmxGg5IDt27htb4ZDm4Dv38A7ngxQIMECBsiTK0f+WvYQSXcOHF9O/ZhzKE2kV6d+HfuP4gumb2fQ3Hki1vaWqF9vp3XH9/Df7+7e/eY2lK1xZg22umgwuwWINQpKGAWAXz4cBajefFpkVGA++rFnQAEHloHZD2ZVCAVOSrJI+MuFZCSCmH9PAOhhKPFoKMWBp3331hMRSijaELSBeARtu3w0RYfrPSiVEAOoqNNkaezIHnrYqBYWVDfetUSLP+zUC3GRRFLiRUtguBlHA2xWTzabEPecEyLe2ESXk9DFzDliMkOfjmAO0eZ3b95IjYBRUgMlfTU1Neee12V0TxF/1qlTkjrpKQWRzgxKqKKumLdfomO6wqAgSFLq5hFPZfqmQ4AaGqmoIZ5H6huejhIEACH5BAUHAD8ALGIAYgA8ADwAAAb+wJ9wSCwajQABgTAIHJ/QqDSqeDwaiKl2y/1BLJZKpEsuEymYdMXMFioLhQHUkslgLM/BAYEoONtFBQwODgxPCHR2eEYCDRYYFxEHgEUGDxESEQ4CRoh1d0cIFx2kGoaUQwYQEqwRCACwsZ6KRgMRHR4fHhwKqEMEDqysD3JEs6BEAQoZuboZxb4CCpjCC7Gwx4u/Ex0fuh2nvkPBwhAExonIQgEMG80eFpziQwirwgx/P9lEBhbvHAnmFWEgLJMBeum0CXjAwZuuCfkE/jhgb5i8fUIQYHin4SAbAnAICABwZAE1VgmwJRQyQEI3bx0gRBwSgJOAmUMGJFjAMwH+AZw/HhSEIGdfgAUa3j2DAqfAuSM6GUhlsABBkyIJTkpYl+xHy5e7FjACSaRAngRTpyowMDLWgAastLTTVSHANSFmA0ExoCCtWj8khTjIq+XBhizroNWSstMvVZ9/gEYxkO+pEZFaDDT2u+CAPDNvntzc4uRAX86APpe9agbBgrSKzVgWJ6BA44CUKqumxFccWclsgJcJIFyi8SPEBQxYzrz58uJknEsXMNorSAPYs2vHDt34zQEFtovHflxLAPDjxZeXcg59eu2B10OpOWCJ/fv2BdbHj395dfkArhffPEoI1F0ZsQU4BU4HKvjDbEJA6CAjPxA2D3hP/IQKa22ZFGgcZjkNKEUAhDkh4YJHGABiILsdAUAxs50X3mVM6dUgGxZWONkUENrExH4saeHhFMsx0WKGbmy3zolG3MiGAEq6odeERECpHZVM5WNldlNS6dEQW5JHxADbMUmJhT1GudeHUoT5JZZRuNkkAdsduZ6cjFiYICBNxXEEnlQyZ6dqb9YygJ13wtmGATkq2iQ0ezpaBHXEzRMEACH5BAEHAD8ALGIAYgA8ADwAAAb+wJ9wSCwajwGB8shsOp/Pg0KBIECv2OyvAYE8FtqwmAiRmB/j9HDAFgCYEbMEwhQUDIbBW10kJP4HA3BydEYBCRAREQxWfEQFCwwMCwh7RXFmhUUGEhcXFhQJjo+RkguNl4RGAg4XGK8WCKNECpKSCQFGmHNFAAgUGBkZGBSzRAi2kga6qkQDEMHCF2DGQ7W2CgKpmUUJFdEYEtVEB6WSB5Y/u5o/BRHgseNECckLgkPrQwEMFuDs4wEMmGNQCV+zHwYmgKugJokSN0zo2VpQwCC3H6wuCMtwoUE6IQGnKEBVRACBAigJQDQyUEEudc0QfBNGzFCBBhc2aLjw4KP+EDt48BQYEODjgWQMKi75EaARNJoXFBQZsIDCBg9YOWDwifFOUKFEi1xLcI+JII3hiAhIIEFDBw8fPnjocIFrU69fDai0VK7skwESLBwAaQBChrdx43rI0MDJALxfCxAommZw0wYWOMBN7IFDhWxQTuYF+1JMgKpXE8ely8DvE5OQhXLFAgExZw0OCpTO8jivNjUCNnDeMAHB7jABeusdhUCuZ3vGTh5Pg6EjyVm/Rx3QLa+7ljcOH4p/ODvN+PNMjVR0Ul7MdfUEwr73zmc+fTGu7xuxT2TZzwH8DdGePI0MqJ93Bh4IhR7G5OfIPdmNolJ3BSSYxV7mHeEgH0OfTceeE+t1t6EhI47i4RATGhPhFST1pl56R9jRxHSTaVGiGg7690ONWOyWRIAvoshEiFMJ4ZeOTLyEpBNANuFXiEQSORUBQAZg5RhPrtFHeVd6lyVI162ooJGPqDXmgmXqc92NaSxZ5BBSygjniWpIacSXzrhZDZt4NsFdg3rmCaeGJe2J5qCGNDmLhwPoaOd/93V5pjxyTjoGSpZmWE0QADs="

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GC_USER_ID = exports.GC_USER_ID = 'graphcool-user-id';
var GC_AUTH_TOKEN = exports.GC_AUTH_TOKEN = 'graphcool-auth-token';
var ITEMS_PER_PAGE = exports.ITEMS_PER_PAGE = 5;

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * The public interface to React Relay.
 */
module.exports = {
  QueryRenderer: __webpack_require__(306),

  MutationTypes: __webpack_require__(208).MutationTypes,
  RangeOperations: __webpack_require__(208).RangeOperations,

  commitLocalUpdate: __webpack_require__(208).commitLocalUpdate,
  commitMutation: __webpack_require__(208).commitMutation,
  createFragmentContainer: __webpack_require__(389).createContainer,
  createPaginationContainer: __webpack_require__(391).createContainer,
  createRefetchContainer: __webpack_require__(393).createContainer,
  fetchQuery: __webpack_require__(208).fetchQuery,
  graphql: __webpack_require__(208).graphql,
  requestSubscription: __webpack_require__(208).requestSubscription
};

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _extends3 = _interopRequireDefault(__webpack_require__(209));

var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(243));

var _inherits3 = _interopRequireDefault(__webpack_require__(244));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__(208),
    deepFreeze = _require.deepFreeze;

var NETWORK_ONLY = 'NETWORK_ONLY';
var STORE_THEN_NETWORK = 'STORE_THEN_NETWORK';
var DataFromEnum = {
  NETWORK_ONLY: NETWORK_ONLY,
  STORE_THEN_NETWORK: STORE_THEN_NETWORK
};

/**
 * @public
 *
 * Orchestrates fetching and rendering data for a single view or view hierarchy:
 * - Fetches the query/variables using the given network implementation.
 * - Normalizes the response(s) to that query, publishing them to the given
 *   store.
 * - Renders the pending/fail/success states with the provided render function.
 * - Subscribes for updates to the root data and re-renders with any changes.
 */
var ReactRelayQueryRenderer = function (_React$Component) {
  (0, _inherits3['default'])(ReactRelayQueryRenderer, _React$Component);

  // TODO T25783053 Update this component to use the new React context API,
  // Once we have confirmed that it's okay to raise min React version to 16.3.
  function ReactRelayQueryRenderer(props, context) {
    (0, _classCallCheck3['default'])(this, ReactRelayQueryRenderer);

    // Callbacks are attached to the current instance and shared with static
    // lifecyles by bundling with state. This is okay to do because the
    // callbacks don't change in reaction to props. However we should not
    // "leak" them before mounting (since we would be unable to clean up). For
    // that reason, we define them as null initially and fill them in after
    // mounting to avoid leaking memory.
    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this._relayContext = {
      // $FlowFixMe TODO t16225453 QueryRenderer works with old+new environment.
      environment: _this.props.environment,
      variables: _this.props.variables
    };
    var retryCallbacks = {
      handleDataChange: null,
      handleRetryAfterError: null
    };

    var queryFetcher = new (__webpack_require__(275))();

    _this.state = (0, _extends3['default'])({
      prevPropsEnvironment: props.environment,
      prevPropsVariables: props.variables,
      prevQuery: props.query,
      queryFetcher: queryFetcher,
      retryCallbacks: retryCallbacks
    }, fetchQueryAndComputeStateFromProps(props, queryFetcher, retryCallbacks));
    return _this;
  }

  ReactRelayQueryRenderer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.prevQuery !== nextProps.query || prevState.prevPropsEnvironment !== nextProps.environment || !__webpack_require__(218)(prevState.prevPropsVariables, nextProps.variables)) {
      return (0, _extends3['default'])({
        prevQuery: nextProps.query,
        prevPropsEnvironment: nextProps.environment,
        prevPropsVariables: nextProps.variables
      }, fetchQueryAndComputeStateFromProps(nextProps, prevState.queryFetcher, prevState.retryCallbacks));
    }

    return null;
  };

  ReactRelayQueryRenderer.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var _state = this.state,
        retryCallbacks = _state.retryCallbacks,
        queryFetcher = _state.queryFetcher;


    retryCallbacks.handleDataChange = function (params) {
      var error = params.error == null ? null : params.error;
      var snapshot = params.snapshot == null ? null : params.snapshot;

      _this2.setState(function (prevState) {
        // Don't update state if nothing has changed.
        if (snapshot === prevState.snapshot && error === prevState.error) {
          return null;
        }
        return {
          renderProps: getRenderProps(error, snapshot, queryFetcher, retryCallbacks),
          snapshot: snapshot
        };
      });
    };

    retryCallbacks.handleRetryAfterError = function (error) {
      return _this2.setState({ renderProps: getLoadingRenderProps() });
    };

    // Re-initialize the ReactRelayQueryFetcher with callbacks.
    // If data has changed since constructions, this will re-render.
    if (this.props.query) {
      queryFetcher.setOnDataChange(retryCallbacks.handleDataChange);
    }
  };

  ReactRelayQueryRenderer.prototype.componentWillUnmount = function componentWillUnmount() {
    this.state.queryFetcher.dispose();
  };

  ReactRelayQueryRenderer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return nextProps.render !== this.props.render || nextState.renderProps !== this.state.renderProps;
  };

  ReactRelayQueryRenderer.prototype.getChildContext = function getChildContext() {
    return {
      relay: this._relayContext
    };
  };

  ReactRelayQueryRenderer.prototype.render = function render() {
    var _state2 = this.state,
        relayContextEnvironment = _state2.relayContextEnvironment,
        relayContextVariables = _state2.relayContextVariables,
        renderProps = _state2.renderProps;

    // HACK Mutate the context.relay object before updating children,
    // To account for any changes made by static gDSFP.
    // Updating this value in gDSFP would be less safe, since props changes
    // could be interrupted and we might re-render based on a setState call.
    // Child containers rely on context.relay being mutated (also for gDSFP).
    // $FlowFixMe TODO t16225453 QueryRenderer works with old+new environment.

    this._relayContext.environment = relayContextEnvironment;
    this._relayContext.variables = relayContextVariables;

    // Note that the root fragment results in `renderProps.props` is already
    // frozen by the store; this call is to freeze the renderProps object and
    // error property if set.
    if (process.env.NODE_ENV !== 'production') {
      deepFreeze(renderProps);
    }
    return this.props.render(renderProps);
  };

  return ReactRelayQueryRenderer;
}(__webpack_require__(0).Component);

ReactRelayQueryRenderer.childContextTypes = {
  relay: __webpack_require__(237).Relay
};


function getLoadingRenderProps() {
  return {
    error: null,
    props: null, // `props: null` indicates that the data is being fetched (i.e. loading)
    retry: null
  };
}

function getEmptyRenderProps() {
  return {
    error: null,
    props: {}, // `props: {}` indicates no data available
    retry: null
  };
}

function getRenderProps(error, snapshot, queryFetcher, retryCallbacks) {
  return {
    error: error ? error : null,
    props: snapshot ? snapshot.data : null,
    retry: function retry() {
      var syncSnapshot = queryFetcher.retry();
      if (syncSnapshot && typeof retryCallbacks.handleDataChange === 'function') {
        retryCallbacks.handleDataChange({ snapshot: syncSnapshot });
      } else if (error && typeof retryCallbacks.handleRetryAfterError === 'function') {
        // If retrying after an error and no synchronous result available,
        // reset the render props
        retryCallbacks.handleRetryAfterError(error);
      }
    }
  };
}

function fetchQueryAndComputeStateFromProps(props, queryFetcher, retryCallbacks) {
  var environment = props.environment,
      query = props.query,
      variables = props.variables;

  if (query) {
    // $FlowFixMe TODO t16225453 QueryRenderer works with old+new environment.
    var genericEnvironment = environment;

    var _genericEnvironment$u = genericEnvironment.unstable_internal,
        createOperationSelector = _genericEnvironment$u.createOperationSelector,
        getRequest = _genericEnvironment$u.getRequest;

    var request = getRequest(query);
    var operation = createOperationSelector(request, variables);

    try {
      var storeSnapshot = props.dataFrom === STORE_THEN_NETWORK ? queryFetcher.lookupInStore(genericEnvironment, operation) : null;
      var querySnapshot = queryFetcher.fetch({
        cacheConfig: props.cacheConfig,
        dataFrom: props.dataFrom,
        environment: genericEnvironment,
        onDataChange: retryCallbacks.handleDataChange,
        operation: operation
      });
      // Use network data first, since it may be fresher
      var _snapshot = querySnapshot || storeSnapshot;
      if (!_snapshot) {
        return {
          error: null,
          relayContextEnvironment: environment,
          relayContextVariables: operation.variables,
          renderProps: getLoadingRenderProps(),
          snapshot: null
        };
      }

      return {
        error: null,
        relayContextEnvironment: environment,
        relayContextVariables: operation.variables,
        renderProps: getRenderProps(null, _snapshot, queryFetcher, retryCallbacks),
        snapshot: _snapshot
      };
    } catch (error) {
      return {
        error: error,
        relayContextEnvironment: environment,
        relayContextVariables: operation.variables,
        renderProps: getRenderProps(error, null, queryFetcher, retryCallbacks),
        snapshot: null
      };
    }
  } else {
    queryFetcher.dispose();

    return {
      error: null,
      relayContextEnvironment: environment,
      relayContextVariables: variables,
      renderProps: getEmptyRenderProps()
    };
  }
}

module.exports = ReactRelayQueryRenderer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(308), __esModule: true };

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(309);
module.exports = __webpack_require__(210).Object.assign;


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(219);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(311) });


/***/ }),
/* 310 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(239);
var gOPS = __webpack_require__(260);
var pIE = __webpack_require__(242);
var toObject = __webpack_require__(261);
var IObject = __webpack_require__(283);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(230)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(225);
var toLength = __webpack_require__(284);
var toAbsoluteIndex = __webpack_require__(313);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(256);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(315), __esModule: true };

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(286);
__webpack_require__(321);
module.exports = __webpack_require__(264).f('iterator');


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(256);
var defined = __webpack_require__(255);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(262);
var descriptor = __webpack_require__(231);
var setToStringTag = __webpack_require__(263);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(222)(IteratorPrototype, __webpack_require__(211)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(214);
var anObject = __webpack_require__(223);
var getKeys = __webpack_require__(239);

module.exports = __webpack_require__(220) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(213).document;
module.exports = document && document.documentElement;


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(221);
var toObject = __webpack_require__(261);
var IE_PROTO = __webpack_require__(257)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(322);
var global = __webpack_require__(213);
var hide = __webpack_require__(222);
var Iterators = __webpack_require__(232);
var TO_STRING_TAG = __webpack_require__(211)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(323);
var step = __webpack_require__(324);
var Iterators = __webpack_require__(232);
var toIObject = __webpack_require__(225);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(287)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 323 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 324 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(326), __esModule: true };

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(327);
__webpack_require__(332);
__webpack_require__(333);
__webpack_require__(334);
module.exports = __webpack_require__(210).Symbol;


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(213);
var has = __webpack_require__(221);
var DESCRIPTORS = __webpack_require__(220);
var $export = __webpack_require__(219);
var redefine = __webpack_require__(288);
var META = __webpack_require__(328).KEY;
var $fails = __webpack_require__(230);
var shared = __webpack_require__(258);
var setToStringTag = __webpack_require__(263);
var uid = __webpack_require__(241);
var wks = __webpack_require__(211);
var wksExt = __webpack_require__(264);
var wksDefine = __webpack_require__(265);
var enumKeys = __webpack_require__(329);
var isArray = __webpack_require__(330);
var anObject = __webpack_require__(223);
var isObject = __webpack_require__(224);
var toIObject = __webpack_require__(225);
var toPrimitive = __webpack_require__(253);
var createDesc = __webpack_require__(231);
var _create = __webpack_require__(262);
var gOPNExt = __webpack_require__(331);
var $GOPD = __webpack_require__(290);
var $DP = __webpack_require__(214);
var $keys = __webpack_require__(239);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(289).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(242).f = $propertyIsEnumerable;
  __webpack_require__(260).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(240)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(222)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(241)('meta');
var isObject = __webpack_require__(224);
var has = __webpack_require__(221);
var setDesc = __webpack_require__(214).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(230)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(239);
var gOPS = __webpack_require__(260);
var pIE = __webpack_require__(242);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(254);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(225);
var gOPN = __webpack_require__(289).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 332 */
/***/ (function(module, exports) {



/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(265)('asyncIterator');


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(265)('observable');


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(336), __esModule: true };

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(337);
module.exports = __webpack_require__(210).Object.setPrototypeOf;


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(219);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(338).set });


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(224);
var anObject = __webpack_require__(223);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(252)(Function.call, __webpack_require__(290).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(340), __esModule: true };

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(341);
var $Object = __webpack_require__(210).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(219);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(262) });


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



// As early as possible, check for the existence of the JavaScript globals which
// Relay Runtime relies upon, and produce a clear message if they do not exist.
if (process.env.NODE_ENV !== 'production') {
  if (typeof Map !== 'function' || typeof Set !== 'function' || typeof Promise !== 'function' || typeof Object.assign !== 'function') {
    throw new Error('relay-runtime requires Map, Set, Promise, and Object.assign to exist. ' + 'Use a polyfill to provide these for older browsers.');
  }
}

/**
 * The public interface to Relay Runtime.
 */
module.exports = {
  // Core API
  Environment: __webpack_require__(343),
  Network: __webpack_require__(363),
  Observable: __webpack_require__(248),
  QueryResponseCache: __webpack_require__(366),
  RecordSource: __webpack_require__(226),
  Store: __webpack_require__(367),

  areEqualSelectors: __webpack_require__(212).areEqualSelectors,
  createFragmentSpecResolver: __webpack_require__(212).createFragmentSpecResolver,
  createOperationSelector: __webpack_require__(212).createOperationSelector,
  getDataIDsFromObject: __webpack_require__(212).getDataIDsFromObject,
  getFragment: __webpack_require__(235).getFragment,
  getRequest: __webpack_require__(235).getRequest,
  // TODO (T23201154) remove in a future Relay release.
  getOperation: function getOperation() {
    if (process.env.NODE_ENV !== 'production') {
      __webpack_require__(20)(false, 'getOperation() deprecated. Use getRequest().');
    }
    return __webpack_require__(235).getRequest.apply(null, arguments);
  },
  getSelector: __webpack_require__(212).getSelector,
  getSelectorList: __webpack_require__(212).getSelectorList,
  getSelectorsFromObject: __webpack_require__(212).getSelectorsFromObject,
  getStorageKey: __webpack_require__(206).getStorageKey,
  getVariablesFromObject: __webpack_require__(212).getVariablesFromObject,
  graphql: __webpack_require__(235).graphql,

  // Declarative mutation API
  MutationTypes: __webpack_require__(236).MutationTypes,
  RangeOperations: __webpack_require__(236).RangeOperations,

  // Extensions
  ConnectionHandler: __webpack_require__(215),
  ViewerHandler: __webpack_require__(293),

  // Helpers (can be implemented via the above API)
  applyOptimisticMutation: __webpack_require__(381),
  commitLocalUpdate: __webpack_require__(382),
  commitMutation: __webpack_require__(383),
  fetchQuery: __webpack_require__(384),
  isRelayModernEnvironment: __webpack_require__(274),
  requestSubscription: __webpack_require__(385),

  // Configuration interface for legacy or special uses
  ConnectionInterface: __webpack_require__(216),

  // Utilities
  RelayProfiler: __webpack_require__(271),

  // INTERNAL-ONLY: These exports might be removed at any point.
  RelayConcreteNode: __webpack_require__(205),
  DEFAULT_HANDLE_KEY: __webpack_require__(292).DEFAULT_HANDLE_KEY,
  ROOT_ID: __webpack_require__(206).ROOT_ID,

  deepFreeze: __webpack_require__(233),
  getRelayHandleKey: __webpack_require__(267),
  isScalarAndEqual: __webpack_require__(295),
  recycleNodesInto: __webpack_require__(298),
  simpleClone: __webpack_require__(386),
  stableCopy: __webpack_require__(245)
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__(266),
    getOperationVariables = _require.getOperationVariables;

var _require2 = __webpack_require__(291),
    createOperationSelector = _require2.createOperationSelector;

var RelayModernEnvironment = function () {
  function RelayModernEnvironment(config) {
    var _this = this;

    (0, _classCallCheck3['default'])(this, RelayModernEnvironment);
    this._deferrableSelections = new Set();

    this.configName = config.configName;
    var handlerProvider = config.handlerProvider ? config.handlerProvider : __webpack_require__(344);
    this._network = config.network;
    this._publishQueue = new (__webpack_require__(348))(config.store, handlerProvider);
    this._store = config.store;
    this.unstable_internal = __webpack_require__(212);

    this.__setNet = function (newNet) {
      return _this._network = newNet;
    };

    // Register this Relay Environment with Relay DevTools if it exists.
    // Note: this must always be the last step in the constructor.
    var _global = typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : undefined;
    var devToolsHook = _global && _global.__RELAY_DEVTOOLS_HOOK__;
    if (devToolsHook) {
      devToolsHook.registerEnvironment(this);
    }
  }

  RelayModernEnvironment.prototype.getStore = function getStore() {
    return this._store;
  };

  RelayModernEnvironment.prototype.getNetwork = function getNetwork() {
    return this._network;
  };

  RelayModernEnvironment.prototype.applyUpdate = function applyUpdate(optimisticUpdate) {
    var _this2 = this;

    var dispose = function dispose() {
      _this2._publishQueue.revertUpdate(optimisticUpdate);
      _this2._publishQueue.run();
    };
    this._publishQueue.applyUpdate(optimisticUpdate);
    this._publishQueue.run();
    return { dispose: dispose };
  };

  RelayModernEnvironment.prototype.revertUpdate = function revertUpdate(update) {
    this._publishQueue.revertUpdate(update);
    this._publishQueue.run();
  };

  RelayModernEnvironment.prototype.replaceUpdate = function replaceUpdate(update, newUpdate) {
    this._publishQueue.revertUpdate(update);
    this._publishQueue.applyUpdate(newUpdate);
    this._publishQueue.run();
  };

  RelayModernEnvironment.prototype.applyMutation = function applyMutation(_ref) {
    var operation = _ref.operation,
        optimisticResponse = _ref.optimisticResponse,
        optimisticUpdater = _ref.optimisticUpdater;

    return this.applyUpdate({
      operation: operation,
      selectorStoreUpdater: optimisticUpdater,
      response: optimisticResponse || null
    });
  };

  RelayModernEnvironment.prototype.check = function check(readSelector) {
    return this._store.check(readSelector);
  };

  RelayModernEnvironment.prototype.commitPayload = function commitPayload(operationSelector, payload) {
    // Do not handle stripped nulls when commiting a payload
    var relayPayload = __webpack_require__(234)(operationSelector.root, payload);
    this._publishQueue.commitPayload(operationSelector, relayPayload);
    this._publishQueue.run();
  };

  RelayModernEnvironment.prototype.commitUpdate = function commitUpdate(updater) {
    this._publishQueue.commitUpdate(updater);
    this._publishQueue.run();
  };

  RelayModernEnvironment.prototype.lookup = function lookup(readSelector) {
    return this._store.lookup(readSelector);
  };

  RelayModernEnvironment.prototype.subscribe = function subscribe(snapshot, callback) {
    return this._store.subscribe(snapshot, callback);
  };

  RelayModernEnvironment.prototype.retain = function retain(selector) {
    return this._store.retain(selector);
  };

  RelayModernEnvironment.prototype.isSelectorLoading = function isSelectorLoading(selector) {
    var key = __webpack_require__(270)(selector.dataID, selector.node.name, selector.variables);
    return this._deferrableSelections.has(key);
  };
  /**
   * Returns an Observable of ExecutePayload resulting from executing the
   * provided Query or Subscription operation, each result of which is then
   * normalized and committed to the publish queue.
   *
   * Note: Observables are lazy, so calling this method will do nothing until
   * the result is subscribed to: environment.execute({...}).subscribe({...}).
   */


  RelayModernEnvironment.prototype.execute = function execute(_ref2) {
    var _this3 = this;

    var operation = _ref2.operation,
        cacheConfig = _ref2.cacheConfig,
        updater = _ref2.updater;

    var optimisticResponse = void 0;
    return this._network.execute(operation.node, operation.variables, cacheConfig || {})['do']({
      next: function next(executePayload) {
        var responsePayload = __webpack_require__(296)(executePayload);
        var source = responsePayload.source,
            fieldPayloads = responsePayload.fieldPayloads,
            deferrableSelections = responsePayload.deferrableSelections;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (deferrableSelections || new Set())[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var selectionKey = _step.value;

            _this3._deferrableSelections.add(selectionKey);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (executePayload.isOptimistic) {
          __webpack_require__(9)(optimisticResponse == null, 'environment.execute: only support one optimistic respnose per ' + 'execute.');
          optimisticResponse = {
            source: source,
            fieldPayloads: fieldPayloads
          };
          _this3._publishQueue.applyUpdate(optimisticResponse);
          _this3._publishQueue.run();
        } else {
          if (optimisticResponse) {
            _this3._publishQueue.revertUpdate(optimisticResponse);
            optimisticResponse = undefined;
          }
          var writeSelector = createOperationSelector(operation.node, executePayload.variables, executePayload.operation);
          if (executePayload.operation.kind === 'DeferrableOperation') {
            var fragmentKey = __webpack_require__(270)(executePayload.variables[executePayload.operation.rootFieldVariable], executePayload.operation.fragmentName, getOperationVariables(executePayload.operation, executePayload.variables));
            _this3._deferrableSelections['delete'](fragmentKey);
          }
          _this3._publishQueue.commitPayload(writeSelector, responsePayload, updater);
          _this3._publishQueue.run();
        }
      }
    })['finally'](function () {
      if (optimisticResponse) {
        _this3._publishQueue.revertUpdate(optimisticResponse);
        optimisticResponse = undefined;
        _this3._publishQueue.run();
      }
    });
  };

  /**
   * Returns an Observable of ExecutePayload resulting from executing the
   * provided Mutation operation, the result of which is then normalized and
   * committed to the publish queue along with an optional optimistic response
   * or updater.
   *
   * Note: Observables are lazy, so calling this method will do nothing until
   * the result is subscribed to:
   * environment.executeMutation({...}).subscribe({...}).
   */


  RelayModernEnvironment.prototype.executeMutation = function executeMutation(_ref3) {
    var _this4 = this;

    var operation = _ref3.operation,
        optimisticResponse = _ref3.optimisticResponse,
        optimisticUpdater = _ref3.optimisticUpdater,
        updater = _ref3.updater,
        uploadables = _ref3.uploadables;

    var optimisticUpdate = void 0;
    if (optimisticResponse || optimisticUpdater) {
      optimisticUpdate = {
        operation: operation,
        selectorStoreUpdater: optimisticUpdater,
        response: optimisticResponse || null
      };
    }

    return this._network.execute(operation.node, operation.variables, { force: true }, uploadables)['do']({
      start: function start() {
        if (optimisticUpdate) {
          _this4._publishQueue.applyUpdate(optimisticUpdate);
          _this4._publishQueue.run();
        }
      },
      next: function next(payload) {
        if (optimisticUpdate) {
          _this4._publishQueue.revertUpdate(optimisticUpdate);
          optimisticUpdate = undefined;
        }
        _this4._publishQueue.commitPayload(operation, __webpack_require__(296)(payload), updater);
        _this4._publishQueue.run();
      },
      error: function (_error) {
        function error(_x) {
          return _error.apply(this, arguments);
        }

        error.toString = function () {
          return _error.toString();
        };

        return error;
      }(function (error) {
        if (optimisticUpdate) {
          _this4._publishQueue.revertUpdate(optimisticUpdate);
          optimisticUpdate = undefined;
          _this4._publishQueue.run();
        }
      }),
      unsubscribe: function unsubscribe() {
        if (optimisticUpdate) {
          _this4._publishQueue.revertUpdate(optimisticUpdate);
          optimisticUpdate = undefined;
          _this4._publishQueue.run();
        }
      }
    });
  };

  /**
   * @deprecated Use Environment.execute().subscribe()
   */


  RelayModernEnvironment.prototype.sendQuery = function sendQuery(_ref4) {
    var cacheConfig = _ref4.cacheConfig,
        onCompleted = _ref4.onCompleted,
        onError = _ref4.onError,
        onNext = _ref4.onNext,
        operation = _ref4.operation;

    __webpack_require__(20)(false, 'environment.sendQuery() is deprecated. Update to the latest ' + 'version of react-relay, and use environment.execute().');
    return this.execute({ operation: operation, cacheConfig: cacheConfig }).subscribeLegacy({
      onNext: onNext,
      onError: onError,
      onCompleted: onCompleted
    });
  };

  /**
   * @deprecated Use Environment.execute().subscribe()
   */


  RelayModernEnvironment.prototype.streamQuery = function streamQuery(_ref5) {
    var cacheConfig = _ref5.cacheConfig,
        onCompleted = _ref5.onCompleted,
        onError = _ref5.onError,
        onNext = _ref5.onNext,
        operation = _ref5.operation;

    __webpack_require__(20)(false, 'environment.streamQuery() is deprecated. Update to the latest ' + 'version of react-relay, and use environment.execute().');
    return this.execute({ operation: operation, cacheConfig: cacheConfig }).subscribeLegacy({
      onNext: onNext,
      onError: onError,
      onCompleted: onCompleted
    });
  };

  /**
   * @deprecated Use Environment.executeMutation().subscribe()
   */


  RelayModernEnvironment.prototype.sendMutation = function sendMutation(_ref6) {
    var onCompleted = _ref6.onCompleted,
        onError = _ref6.onError,
        operation = _ref6.operation,
        optimisticResponse = _ref6.optimisticResponse,
        optimisticUpdater = _ref6.optimisticUpdater,
        updater = _ref6.updater,
        uploadables = _ref6.uploadables;

    __webpack_require__(20)(false, 'environment.sendMutation() is deprecated. Update to the latest ' + 'version of react-relay, and use environment.executeMutation().');
    return this.executeMutation({
      operation: operation,
      optimisticResponse: optimisticResponse,
      optimisticUpdater: optimisticUpdater,
      updater: updater,
      uploadables: uploadables
    }).subscribeLegacy({
      // NOTE: sendMutation has a non-standard use of onCompleted() by passing
      // it a value. When switching to use executeMutation(), the next()
      // Observer should be used to preserve behavior.
      onNext: function onNext(payload) {
        onCompleted && onCompleted(payload.response.errors);
      },
      onError: onError,
      onCompleted: onCompleted
    });
  };

  /**
   * @deprecated Use Environment.execute().subscribe()
   */


  RelayModernEnvironment.prototype.sendSubscription = function sendSubscription(_ref7) {
    var onCompleted = _ref7.onCompleted,
        onNext = _ref7.onNext,
        onError = _ref7.onError,
        operation = _ref7.operation,
        updater = _ref7.updater;

    __webpack_require__(20)(false, 'environment.sendSubscription() is deprecated. Update to the latest ' + 'version of react-relay, and use environment.execute().');
    return this.execute({
      operation: operation,
      updater: updater,
      cacheConfig: { force: true }
    }).subscribeLegacy({ onNext: onNext, onError: onError, onCompleted: onCompleted });
  };

  return RelayModernEnvironment;
}();

// Add a sigil for detection by `isRelayModernEnvironment()` to avoid a
// realm-specific instanceof check, and to aid in module tree-shaking to
// avoid requiring all of RelayRuntime just to detect its environment.


RelayModernEnvironment.prototype['@@RelayModernEnvironment'] = true;

module.exports = RelayModernEnvironment;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



function RelayDefaultHandlerProvider(handle) {
  switch (handle) {
    case 'connection':
      return __webpack_require__(215);
    case 'viewer':
      return __webpack_require__(293);
  }
  __webpack_require__(9)(false, 'RelayDefaultHandlerProvider: No handler provided for `%s`.', handle);
}

module.exports = RelayDefaultHandlerProvider;

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(346), __esModule: true };

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(347);
var $Object = __webpack_require__(210).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(219);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(220), 'Object', { defineProperty: __webpack_require__(214).f });


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Coordinates the concurrent modification of a `Store` due to optimistic and
 * non-revertable client updates and server payloads:
 * - Applies optimistic updates.
 * - Reverts optimistic updates, rebasing any subsequent updates.
 * - Commits client updates (typically for client schema extensions).
 * - Commits server updates:
 *   - Normalizes query/mutation/subscription responses.
 *   - Executes handlers for "handle" fields.
 *   - Reverts and reapplies pending optimistic updates.
 */
var RelayPublishQueue = function () {
  // Optimistic updaters to add with the next `run()`.

  // Payloads to apply or Sources to publish to the store with the next `run()`.


  // A "negative" of all applied updaters. It can be published to the store to
  // undo them in order to re-apply some of them for a rebase.
  function RelayPublishQueue(store, handlerProvider) {
    (0, _classCallCheck3['default'])(this, RelayPublishQueue);

    this._backup = new (__webpack_require__(226))();
    this._handlerProvider = handlerProvider || null;
    this._pendingBackupRebase = false;
    this._pendingUpdaters = new Set();
    this._pendingData = new Set();
    this._pendingOptimisticUpdates = new Set();
    this._store = store;
    this._appliedOptimisticUpdates = new Set();
  }

  /**
   * Schedule applying an optimistic updates on the next `run()`.
   */

  // Optimistic updaters that are already added and might be rerun in order to
  // rebase them.

  // Updaters to apply with the next `run()`. These mutate the store and should
  // typically only mutate client schema extensions.

  // True if the next `run()` should apply the backup and rerun all optimistic
  // updates performing a rebase.


  RelayPublishQueue.prototype.applyUpdate = function applyUpdate(updater) {
    __webpack_require__(9)(!this._appliedOptimisticUpdates.has(updater) && !this._pendingOptimisticUpdates.has(updater), 'RelayPublishQueue: Cannot apply the same update function more than ' + 'once concurrently.');
    this._pendingOptimisticUpdates.add(updater);
  };

  /**
   * Schedule reverting an optimistic updates on the next `run()`.
   */


  RelayPublishQueue.prototype.revertUpdate = function revertUpdate(updater) {
    if (this._pendingOptimisticUpdates.has(updater)) {
      // Reverted before it was applied
      this._pendingOptimisticUpdates['delete'](updater);
    } else if (this._appliedOptimisticUpdates.has(updater)) {
      this._pendingBackupRebase = true;
      this._appliedOptimisticUpdates['delete'](updater);
    }
  };

  /**
   * Schedule a revert of all optimistic updates on the next `run()`.
   */


  RelayPublishQueue.prototype.revertAll = function revertAll() {
    this._pendingBackupRebase = true;
    this._pendingOptimisticUpdates.clear();
    this._appliedOptimisticUpdates.clear();
  };

  /**
   * Schedule applying a payload to the store on the next `run()`.
   */


  RelayPublishQueue.prototype.commitPayload = function commitPayload(operation, _ref, updater) {
    var fieldPayloads = _ref.fieldPayloads,
        source = _ref.source;

    this._pendingBackupRebase = true;
    this._pendingData.add({
      kind: 'payload',
      payload: { fieldPayloads: fieldPayloads, operation: operation, source: source, updater: updater }
    });
  };

  /**
   * Schedule an updater to mutate the store on the next `run()` typically to
   * update client schema fields.
   */


  RelayPublishQueue.prototype.commitUpdate = function commitUpdate(updater) {
    this._pendingBackupRebase = true;
    this._pendingUpdaters.add(updater);
  };

  /**
   * Schedule a publish to the store from the provided source on the next
   * `run()`. As an example, to update the store with substituted fields that
   * are missing in the store.
   */


  RelayPublishQueue.prototype.commitSource = function commitSource(source) {
    this._pendingBackupRebase = true;
    this._pendingData.add({ kind: 'source', source: source });
  };

  /**
   * Execute all queued up operations from the other public methods.
   */


  RelayPublishQueue.prototype.run = function run() {
    if (this._pendingBackupRebase && this._backup.size()) {
      this._store.publish(this._backup);
      this._backup = new (__webpack_require__(226))();
    }
    this._commitData();
    this._commitUpdaters();
    this._applyUpdates();
    this._pendingBackupRebase = false;
    this._store.notify();
  };

  RelayPublishQueue.prototype._getSourceFromPayload = function _getSourceFromPayload(payload) {
    var _this = this;

    var fieldPayloads = payload.fieldPayloads,
        operation = payload.operation,
        source = payload.source,
        updater = payload.updater;

    var mutator = new (__webpack_require__(247))(this._store.getSource(), source);
    var store = new (__webpack_require__(268))(mutator);
    var selectorStore = new (__webpack_require__(269))(store, operation.fragment);
    if (fieldPayloads && fieldPayloads.length) {
      fieldPayloads.forEach(function (fieldPayload) {
        var handler = _this._handlerProvider && _this._handlerProvider(fieldPayload.handle);
        __webpack_require__(9)(handler, 'RelayModernEnvironment: Expected a handler to be provided for ' + 'handle `%s`.', fieldPayload.handle);
        handler.update(store, fieldPayload);
      });
    }
    if (updater) {
      var selectorData = lookupSelector(source, operation.fragment);
      updater(selectorStore, selectorData);
    }
    return source;
  };

  RelayPublishQueue.prototype._commitData = function _commitData() {
    var _this2 = this;

    if (!this._pendingData.size) {
      return;
    }
    this._pendingData.forEach(function (data) {
      var source = void 0;
      if (data.kind === 'payload') {
        source = _this2._getSourceFromPayload(data.payload);
      } else {
        source = data.source;
      }
      _this2._store.publish(source);
    });
    this._pendingData.clear();
  };

  RelayPublishQueue.prototype._commitUpdaters = function _commitUpdaters() {
    var _this3 = this;

    if (!this._pendingUpdaters.size) {
      return;
    }
    var sink = new (__webpack_require__(226))();
    this._pendingUpdaters.forEach(function (updater) {
      var mutator = new (__webpack_require__(247))(_this3._store.getSource(), sink);
      var store = new (__webpack_require__(268))(mutator);
      updater(store);
    });
    this._store.publish(sink);
    this._pendingUpdaters.clear();
  };

  RelayPublishQueue.prototype._applyUpdates = function _applyUpdates() {
    var _this4 = this;

    if (this._pendingOptimisticUpdates.size || this._pendingBackupRebase && this._appliedOptimisticUpdates.size) {
      var sink = new (__webpack_require__(226))();
      var mutator = new (__webpack_require__(247))(this._store.getSource(), sink, this._backup);
      var store = new (__webpack_require__(268))(mutator, this._handlerProvider);

      // rerun all updaters in case we are running a rebase
      if (this._pendingBackupRebase && this._appliedOptimisticUpdates.size) {
        this._appliedOptimisticUpdates.forEach(function (optimisticUpdate) {
          if (optimisticUpdate.operation) {
            var selectorStoreUpdater = optimisticUpdate.selectorStoreUpdater,
                _operation = optimisticUpdate.operation,
                response = optimisticUpdate.response;

            var selectorStore = store.commitPayload(_operation, response);
            // TODO: Fix commitPayload so we don't have to run normalize twice
            var selectorData = void 0,
                _source = void 0;
            if (response) {
              var _normalizeRelayPayloa = __webpack_require__(234)(_operation.root, response);

              _source = _normalizeRelayPayloa.source;

              selectorData = lookupSelector(_source, _operation.fragment);
            }
            selectorStoreUpdater && selectorStoreUpdater(selectorStore, selectorData);
          } else if (optimisticUpdate.storeUpdater) {
            var storeUpdater = optimisticUpdate.storeUpdater;

            storeUpdater(store);
          } else {
            var _source2 = optimisticUpdate.source,
                _fieldPayloads = optimisticUpdate.fieldPayloads;

            store.publishSource(_source2, _fieldPayloads);
          }
        });
      }

      // apply any new updaters
      if (this._pendingOptimisticUpdates.size) {
        this._pendingOptimisticUpdates.forEach(function (optimisticUpdate) {
          if (optimisticUpdate.operation) {
            var selectorStoreUpdater = optimisticUpdate.selectorStoreUpdater,
                _operation2 = optimisticUpdate.operation,
                response = optimisticUpdate.response;

            var selectorStore = store.commitPayload(_operation2, response);
            // TODO: Fix commitPayload so we don't have to run normalize twice
            var selectorData = void 0,
                _source3 = void 0;
            if (response) {
              var _normalizeRelayPayloa2 = __webpack_require__(234)(_operation2.root, response);

              _source3 = _normalizeRelayPayloa2.source;

              selectorData = lookupSelector(_source3, _operation2.fragment);
            }
            selectorStoreUpdater && selectorStoreUpdater(selectorStore, selectorData);
          } else if (optimisticUpdate.storeUpdater) {
            var storeUpdater = optimisticUpdate.storeUpdater;

            storeUpdater(store);
          } else {
            var _source4 = optimisticUpdate.source,
                _fieldPayloads2 = optimisticUpdate.fieldPayloads;

            store.publishSource(_source4, _fieldPayloads2);
          }
          _this4._appliedOptimisticUpdates.add(optimisticUpdate);
        });
        this._pendingOptimisticUpdates.clear();
      }

      this._store.publish(sink);
    }
  };

  return RelayPublishQueue;
}();

function lookupSelector(source, selector) {
  var selectorData = __webpack_require__(273).read(source, selector).data;
  if (process.env.NODE_ENV !== 'production') {
    var deepFreeze = __webpack_require__(233);
    if (selectorData) {
      deepFreeze(selectorData);
    }
  }
  return selectorData;
}

module.exports = RelayPublishQueue;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _defineProperty3 = _interopRequireDefault(__webpack_require__(246));

var _extends4 = _interopRequireDefault(__webpack_require__(209));

var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__(206),
    getArgumentValues = _require.getArgumentValues,
    getHandleStorageKey = _require.getHandleStorageKey,
    getStorageKey = _require.getStorageKey,
    TYPENAME_KEY = _require.TYPENAME_KEY;

var CONDITION = __webpack_require__(205).CONDITION,
    INLINE_FRAGMENT = __webpack_require__(205).INLINE_FRAGMENT,
    LINKED_FIELD = __webpack_require__(205).LINKED_FIELD,
    LINKED_HANDLE = __webpack_require__(205).LINKED_HANDLE,
    SCALAR_FIELD = __webpack_require__(205).SCALAR_FIELD,
    SCALAR_HANDLE = __webpack_require__(205).SCALAR_HANDLE,
    DEFERRABLE_FRAGMENT_SPREAD = __webpack_require__(205).DEFERRABLE_FRAGMENT_SPREAD;

/**
 * Normalizes the results of a query and standard GraphQL response, writing the
 * normalized records/fields into the given MutableRecordSource.
 *
 * If handleStrippedNulls is true, will replace fields on the Selector that
 * are not present in the response with null. Otherwise will leave fields unset.
 */
function normalize(recordSource, selector, response) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { handleStrippedNulls: false };
  var dataID = selector.dataID,
      node = selector.node,
      variables = selector.variables;

  var normalizer = new RelayResponseNormalizer(recordSource, variables, options);
  return normalizer.normalizeResponse(node, dataID, response);
}

/**
 * @private
 *
 * Helper for handling payloads.
 */

var RelayResponseNormalizer = function () {
  function RelayResponseNormalizer(recordSource, variables, options) {
    (0, _classCallCheck3['default'])(this, RelayResponseNormalizer);
    this._handleFieldPayloads = [];
    this._deferrableSelections = new Set();

    this._recordSource = recordSource;
    this._variables = variables;
    this._handleStrippedNulls = options.handleStrippedNulls;
  }

  RelayResponseNormalizer.prototype.normalizeResponse = function normalizeResponse(node, dataID, data) {
    var record = this._recordSource.get(dataID);
    __webpack_require__(9)(record, 'RelayResponseNormalizer(): Expected root record `%s` to exist.', dataID);
    this._traverseSelections(node, record, data);
    return {
      fieldPayloads: this._handleFieldPayloads,
      deferrableSelections: this._deferrableSelections
    };
  };

  RelayResponseNormalizer.prototype._getVariableValue = function _getVariableValue(name) {
    __webpack_require__(9)(this._variables.hasOwnProperty(name), 'RelayResponseNormalizer(): Undefined variable `%s`.', name);
    return this._variables[name];
  };

  RelayResponseNormalizer.prototype._getRecordType = function _getRecordType(data) {
    var typeName = data[TYPENAME_KEY];
    __webpack_require__(9)(typeName != null, 'RelayResponseNormalizer(): Expected a typename for record `%s`.', JSON.stringify(data, null, 2));
    return typeName;
  };

  RelayResponseNormalizer.prototype._traverseSelections = function _traverseSelections(node, record, data) {
    var _this = this;

    node.selections.forEach(function (selection) {
      if (selection.kind === SCALAR_FIELD || selection.kind === LINKED_FIELD) {
        _this._normalizeField(node, selection, record, data);
      } else if (selection.kind === CONDITION) {
        var conditionValue = _this._getVariableValue(selection.condition);
        if (conditionValue === selection.passingValue) {
          _this._traverseSelections(selection, record, data);
        }
      } else if (selection.kind === INLINE_FRAGMENT) {
        var typeName = __webpack_require__(204).getType(record);
        if (typeName === selection.type) {
          _this._traverseSelections(selection, record, data);
        }
      } else if (selection.kind === LINKED_HANDLE || selection.kind === SCALAR_HANDLE) {
        var args = selection.args ? getArgumentValues(selection.args, _this._variables) : {};
        var fieldKey = getStorageKey(selection, _this._variables);
        var handleKey = getHandleStorageKey(selection, _this._variables);
        _this._handleFieldPayloads.push({
          args: args,
          dataID: __webpack_require__(204).getDataID(record),
          fieldKey: fieldKey,
          handle: selection.handle,
          handleKey: handleKey
        });
      } else if (selection.kind === DEFERRABLE_FRAGMENT_SPREAD) {
        var dataID = __webpack_require__(204).getDataID(record);
        var value = __webpack_require__(204).getValue(record, selection.storageKey);
        __webpack_require__(9)(typeof value === 'string', 'expected ID at %s', selection.storageKey);
        var variables = selection.args ? getArgumentValues(selection.args, (0, _extends4['default'])({}, _this._variables, (0, _defineProperty3['default'])({}, selection.rootFieldVariable, value))) : {};
        var key = __webpack_require__(270)(dataID, selection.name, variables);
        _this._deferrableSelections.add(key);
      } else {
        __webpack_require__(9)(false, 'RelayResponseNormalizer(): Unexpected ast kind `%s`.', selection.kind);
      }
    });
  };

  RelayResponseNormalizer.prototype._normalizeField = function _normalizeField(parent, selection, record, data) {
    __webpack_require__(9)(typeof data === 'object' && data, 'writeField(): Expected data for field `%s` to be an object.', selection.name);
    var responseKey = selection.alias || selection.name;
    var storageKey = getStorageKey(selection, this._variables);
    var fieldValue = data[responseKey];
    if (fieldValue == null) {
      if (fieldValue === undefined && !this._handleStrippedNulls) {
        // If we're not stripping nulls, undefined fields are unset
        return;
      }
      if (process.env.NODE_ENV !== 'production') {
        __webpack_require__(20)(parent.kind === LINKED_FIELD && parent.concreteType == null ? true : Object.prototype.hasOwnProperty.call(data, responseKey), 'RelayResponseNormalizer(): Payload did not contain a value ' + 'for field `%s: %s`. Check that you are parsing with the same ' + 'query that was used to fetch the payload.', responseKey, storageKey);
      }
      __webpack_require__(204).setValue(record, storageKey, null);
      return;
    }

    if (selection.kind === SCALAR_FIELD) {
      __webpack_require__(204).setValue(record, storageKey, fieldValue);
    } else if (selection.plural) {
      this._normalizePluralLink(selection, record, storageKey, fieldValue);
    } else {
      this._normalizeLink(selection, record, storageKey, fieldValue);
    }
  };

  RelayResponseNormalizer.prototype._normalizeLink = function _normalizeLink(field, record, storageKey, fieldValue) {
    __webpack_require__(9)(typeof fieldValue === 'object' && fieldValue, 'RelayResponseNormalizer: Expected data for field `%s` to be an object.', storageKey);
    var nextID = fieldValue.id ||
    // Reuse previously generated client IDs
    __webpack_require__(204).getLinkedRecordID(record, storageKey) || __webpack_require__(217)(__webpack_require__(204).getDataID(record), storageKey);
    __webpack_require__(9)(typeof nextID === 'string', 'RelayResponseNormalizer: Expected id on field `%s` to be a string.', storageKey);
    __webpack_require__(204).setLinkedRecordID(record, storageKey, nextID);
    var nextRecord = this._recordSource.get(nextID);
    if (!nextRecord) {
      var typeName = field.concreteType || this._getRecordType(fieldValue);
      nextRecord = __webpack_require__(204).create(nextID, typeName);
      this._recordSource.set(nextID, nextRecord);
    } else if (process.env.NODE_ENV !== 'production') {
      this._validateRecordType(nextRecord, field, fieldValue);
    }
    this._traverseSelections(field, nextRecord, fieldValue);
  };

  RelayResponseNormalizer.prototype._normalizePluralLink = function _normalizePluralLink(field, record, storageKey, fieldValue) {
    var _this2 = this;

    __webpack_require__(9)(Array.isArray(fieldValue), 'RelayResponseNormalizer: Expected data for field `%s` to be an array ' + 'of objects.', storageKey);
    var prevIDs = __webpack_require__(204).getLinkedRecordIDs(record, storageKey);
    var nextIDs = [];
    fieldValue.forEach(function (item, nextIndex) {
      // validate response data
      if (item == null) {
        nextIDs.push(item);
        return;
      }
      __webpack_require__(9)(typeof item === 'object', 'RelayResponseNormalizer: Expected elements for field `%s` to be ' + 'objects.', storageKey);

      var nextID = item.id || prevIDs && prevIDs[nextIndex] || // Reuse previously generated client IDs
      __webpack_require__(217)(__webpack_require__(204).getDataID(record), storageKey, nextIndex);
      __webpack_require__(9)(typeof nextID === 'string', 'RelayResponseNormalizer: Expected id of elements of field `%s` to ' + 'be strings.', storageKey);

      nextIDs.push(nextID);
      var nextRecord = _this2._recordSource.get(nextID);
      if (!nextRecord) {
        var typeName = field.concreteType || _this2._getRecordType(item);
        nextRecord = __webpack_require__(204).create(nextID, typeName);
        _this2._recordSource.set(nextID, nextRecord);
      } else if (process.env.NODE_ENV !== 'production') {
        _this2._validateRecordType(nextRecord, field, item);
      }
      _this2._traverseSelections(field, nextRecord, item);
    });
    __webpack_require__(204).setLinkedRecordIDs(record, storageKey, nextIDs);
  };

  /**
   * Warns if the type of the record does not match the type of the field/payload.
   */


  RelayResponseNormalizer.prototype._validateRecordType = function _validateRecordType(record, field, payload) {
    var typeName = field.concreteType || this._getRecordType(payload);
    __webpack_require__(20)(__webpack_require__(204).getType(record) === typeName, 'RelayResponseNormalizer: Invalid record `%s`. Expected %s to be ' + 'be consistent, but the record was assigned conflicting types `%s` ' + 'and `%s`. The GraphQL server likely violated the globally unique ' + 'id requirement by returning the same id for different objects.', __webpack_require__(204).getDataID(record), TYPENAME_KEY, __webpack_require__(204).getType(record), typeName);
  };

  return RelayResponseNormalizer;
}();

// eslint-disable-next-line no-func-assign


normalize = __webpack_require__(271).instrument('RelayResponseNormalizer.normalize', normalize);

module.exports = { normalize: normalize };
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__(206),
    getStableStorageKey = _require.getStableStorageKey;

/**
 * @internal
 *
 * A helper class for manipulating a given record from a record source via an
 * imperative/OO-style API.
 */
var RelayRecordProxy = function () {
  function RelayRecordProxy(source, mutator, dataID) {
    (0, _classCallCheck3['default'])(this, RelayRecordProxy);

    this._dataID = dataID;
    this._mutator = mutator;
    this._source = source;
  }

  RelayRecordProxy.prototype.copyFieldsFrom = function copyFieldsFrom(source) {
    this._mutator.copyFields(source.getDataID(), this._dataID);
  };

  RelayRecordProxy.prototype.getDataID = function getDataID() {
    return this._dataID;
  };

  RelayRecordProxy.prototype.getType = function getType() {
    var type = this._mutator.getType(this._dataID);
    __webpack_require__(9)(type != null, 'RelayRecordProxy: Cannot get the type of deleted record `%s`.', this._dataID);
    return type;
  };

  RelayRecordProxy.prototype.getValue = function getValue(name, args) {
    var storageKey = getStableStorageKey(name, args);
    return this._mutator.getValue(this._dataID, storageKey);
  };

  RelayRecordProxy.prototype.setValue = function setValue(value, name, args) {
    __webpack_require__(9)(isValidLeafValue(value), 'RelayRecordProxy#setValue(): Expected a scalar or array of scalars, ' + 'got `%s`.', JSON.stringify(value));
    var storageKey = getStableStorageKey(name, args);
    this._mutator.setValue(this._dataID, storageKey, value);
    return this;
  };

  RelayRecordProxy.prototype.getLinkedRecord = function getLinkedRecord(name, args) {
    var storageKey = getStableStorageKey(name, args);
    var linkedID = this._mutator.getLinkedRecordID(this._dataID, storageKey);
    return linkedID != null ? this._source.get(linkedID) : linkedID;
  };

  RelayRecordProxy.prototype.setLinkedRecord = function setLinkedRecord(record, name, args) {
    __webpack_require__(9)(record instanceof RelayRecordProxy, 'RelayRecordProxy#setLinkedRecord(): Expected a record, got `%s`.', record);
    var storageKey = getStableStorageKey(name, args);
    var linkedID = record.getDataID();
    this._mutator.setLinkedRecordID(this._dataID, storageKey, linkedID);
    return this;
  };

  RelayRecordProxy.prototype.getOrCreateLinkedRecord = function getOrCreateLinkedRecord(name, typeName, args) {
    var linkedRecord = this.getLinkedRecord(name, args);
    if (!linkedRecord) {
      var storageKey = getStableStorageKey(name, args);
      var clientID = __webpack_require__(217)(this.getDataID(), storageKey);
      linkedRecord = this._source.create(clientID, typeName);
      this.setLinkedRecord(linkedRecord, name, args);
    }
    return linkedRecord;
  };

  RelayRecordProxy.prototype.getLinkedRecords = function getLinkedRecords(name, args) {
    var _this = this;

    var storageKey = getStableStorageKey(name, args);
    var linkedIDs = this._mutator.getLinkedRecordIDs(this._dataID, storageKey);
    if (linkedIDs == null) {
      return linkedIDs;
    }
    return linkedIDs.map(function (linkedID) {
      return linkedID != null ? _this._source.get(linkedID) : linkedID;
    });
  };

  RelayRecordProxy.prototype.setLinkedRecords = function setLinkedRecords(records, name, args) {
    __webpack_require__(9)(Array.isArray(records), 'RelayRecordProxy#setLinkedRecords(): Expected records to be an array, got `%s`.', records);
    var storageKey = getStableStorageKey(name, args);
    var linkedIDs = records.map(function (record) {
      return record && record.getDataID();
    });
    this._mutator.setLinkedRecordIDs(this._dataID, storageKey, linkedIDs);
    return this;
  };

  return RelayRecordProxy;
}();

function isValidLeafValue(value) {
  return value == null || typeof value !== 'object' || Array.isArray(value) && value.every(isValidLeafValue);
}

module.exports = RelayRecordProxy;

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _extends3 = _interopRequireDefault(__webpack_require__(209));

var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__(294),
    areEqualSelectors = _require.areEqualSelectors,
    getSelectorsFromObject = _require.getSelectorsFromObject;

/**
 * A utility for resolving and subscribing to the results of a fragment spec
 * (key -> fragment mapping) given some "props" that determine the root ID
 * and variables to use when reading each fragment. When props are changed via
 * `setProps()`, the resolver will update its results and subscriptions
 * accordingly. Internally, the resolver:
 * - Converts the fragment map & props map into a map of `Selector`s.
 * - Removes any resolvers for any props that became null.
 * - Creates resolvers for any props that became non-null.
 * - Updates resolvers with the latest props.
 *
 * This utility is implemented as an imperative, stateful API for performance
 * reasons: reusing previous resolvers, callback functions, and subscriptions
 * all helps to reduce object allocation and thereby decrease GC time.
 *
 * The `resolve()` function is also lazy and memoized: changes in the store mark
 * the resolver as stale and notify the caller, and the actual results are
 * recomputed the first time `resolve()` is called.
 */
var RelayModernFragmentSpecResolver = function () {
  function RelayModernFragmentSpecResolver(context, fragments, props, callback) {
    var _this = this;

    (0, _classCallCheck3['default'])(this, RelayModernFragmentSpecResolver);

    this._onChange = function () {
      _this._stale = true;

      if (typeof _this._callback === 'function') {
        _this._callback();
      }
    };

    this._callback = callback;
    this._context = context;
    this._data = {};
    this._fragments = fragments;
    this._props = props;
    this._resolvers = {};
    this._stale = false;

    this.setProps(props);
  }

  RelayModernFragmentSpecResolver.prototype.dispose = function dispose() {
    for (var _key in this._resolvers) {
      if (this._resolvers.hasOwnProperty(_key)) {
        disposeCallback(this._resolvers[_key]);
      }
    }
  };

  RelayModernFragmentSpecResolver.prototype.resolve = function resolve() {
    if (this._stale) {
      // Avoid mapping the object multiple times, which could occur if data for
      // multiple keys changes in the same event loop.
      var prevData = this._data;
      var nextData = void 0;
      for (var _key2 in this._resolvers) {
        if (this._resolvers.hasOwnProperty(_key2)) {
          var resolver = this._resolvers[_key2];
          var prevItem = prevData[_key2];
          if (resolver) {
            var nextItem = resolver.resolve();
            if (nextData || nextItem !== prevItem) {
              nextData = nextData || (0, _extends3['default'])({}, prevData);
              nextData[_key2] = nextItem;
            }
          } else {
            var prop = this._props[_key2];
            var _nextItem = prop !== undefined ? prop : null;
            if (nextData || !__webpack_require__(295)(_nextItem, prevItem)) {
              nextData = nextData || (0, _extends3['default'])({}, prevData);
              nextData[_key2] = _nextItem;
            }
          }
        }
      }
      this._data = nextData || prevData;
      this._stale = false;
    }
    return this._data;
  };

  RelayModernFragmentSpecResolver.prototype.isLoading = function isLoading() {
    for (var _key3 in this._resolvers) {
      if (this._resolvers.hasOwnProperty(_key3) && this._resolvers[_key3] && this._resolvers[_key3].isLoading()) {
        return true;
      }
    }
    return false;
  };

  RelayModernFragmentSpecResolver.prototype.setCallback = function setCallback(callback) {
    this._callback = callback;
  };

  RelayModernFragmentSpecResolver.prototype.setProps = function setProps(props) {
    var selectors = getSelectorsFromObject(this._context.variables, this._fragments, props);
    for (var _key4 in selectors) {
      if (selectors.hasOwnProperty(_key4)) {
        var selector = selectors[_key4];
        var resolver = this._resolvers[_key4];
        if (selector == null) {
          if (resolver != null) {
            resolver.dispose();
          }
          resolver = null;
        } else if (Array.isArray(selector)) {
          if (resolver == null) {
            resolver = new SelectorListResolver(this._context.environment, selector, this._onChange);
          } else {
            __webpack_require__(9)(resolver instanceof SelectorListResolver, 'RelayModernFragmentSpecResolver: Expected prop `%s` to always be an array.', _key4);
            resolver.setSelectors(selector);
          }
        } else {
          if (resolver == null) {
            resolver = new SelectorResolver(this._context.environment, selector, this._onChange);
          } else {
            __webpack_require__(9)(resolver instanceof SelectorResolver, 'RelayModernFragmentSpecResolver: Expected prop `%s` to always be an object.', _key4);
            resolver.setSelector(selector);
          }
        }
        this._resolvers[_key4] = resolver;
      }
    }
    this._props = props;
    this._stale = true;
  };

  RelayModernFragmentSpecResolver.prototype.setVariables = function setVariables(variables) {
    for (var _key5 in this._resolvers) {
      if (this._resolvers.hasOwnProperty(_key5)) {
        var resolver = this._resolvers[_key5];
        if (resolver) {
          resolver.setVariables(variables);
        }
      }
    }
    this._stale = true;
  };

  return RelayModernFragmentSpecResolver;
}();

/**
 * A resolver for a single Selector.
 */


var SelectorResolver = function () {
  function SelectorResolver(environment, selector, callback) {
    (0, _classCallCheck3['default'])(this, SelectorResolver);

    _initialiseProps.call(this);

    var snapshot = environment.lookup(selector);
    this._callback = callback;
    this._data = snapshot.data;
    this._environment = environment;
    this._selector = selector;
    this._subscription = environment.subscribe(snapshot, this._onChange);
  }

  SelectorResolver.prototype.dispose = function dispose() {
    if (this._subscription) {
      this._subscription.dispose();
      this._subscription = null;
    }
  };

  SelectorResolver.prototype.resolve = function resolve() {
    return this._data;
  };

  SelectorResolver.prototype.setSelector = function setSelector(selector) {
    if (this._subscription != null && areEqualSelectors(selector, this._selector)) {
      return;
    }
    this.dispose();
    var snapshot = this._environment.lookup(selector);
    this._data = snapshot.data;
    this._selector = selector;
    this._subscription = this._environment.subscribe(snapshot, this._onChange);
  };

  SelectorResolver.prototype.setVariables = function setVariables(variables) {
    var selector = (0, _extends3['default'])({}, this._selector, {
      variables: variables
    });
    this.setSelector(selector);
  };

  SelectorResolver.prototype.isLoading = function isLoading() {
    return this._environment.isSelectorLoading(this._selector);
  };

  return SelectorResolver;
}();

/**
 * A resolver for an array of Selectors.
 */


var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this._onChange = function (snapshot) {
    _this3._data = snapshot.data;
    _this3._callback();
  };
};

var SelectorListResolver = function () {
  function SelectorListResolver(environment, selectors, callback) {
    var _this2 = this;

    (0, _classCallCheck3['default'])(this, SelectorListResolver);

    this._onChange = function (data) {
      _this2._stale = true;
      _this2._callback();
    };

    this._callback = callback;
    this._data = [];
    this._environment = environment;
    this._resolvers = [];
    this._stale = true;

    this.setSelectors(selectors);
  }

  SelectorListResolver.prototype.dispose = function dispose() {
    this._resolvers.forEach(disposeCallback);
  };

  SelectorListResolver.prototype.resolve = function resolve() {
    if (this._stale) {
      // Avoid mapping the array multiple times, which could occur if data for
      // multiple indices changes in the same event loop.
      var prevData = this._data;
      var nextData = void 0;
      for (var ii = 0; ii < this._resolvers.length; ii++) {
        var prevItem = prevData[ii];
        var nextItem = this._resolvers[ii].resolve();
        if (nextData || nextItem !== prevItem) {
          nextData = nextData || prevData.slice(0, ii);
          nextData.push(nextItem);
        }
      }
      if (!nextData && this._resolvers.length !== prevData.length) {
        nextData = prevData.slice(0, this._resolvers.length);
      }
      this._data = nextData || prevData;
      this._stale = false;
    }
    return this._data;
  };

  SelectorListResolver.prototype.setSelectors = function setSelectors(selectors) {
    while (this._resolvers.length > selectors.length) {
      var resolver = this._resolvers.pop();
      resolver.dispose();
    }
    for (var ii = 0; ii < selectors.length; ii++) {
      if (ii < this._resolvers.length) {
        this._resolvers[ii].setSelector(selectors[ii]);
      } else {
        this._resolvers[ii] = new SelectorResolver(this._environment, selectors[ii], this._onChange);
      }
    }
    this._stale = true;
  };

  SelectorListResolver.prototype.setVariables = function setVariables(variables) {
    this._resolvers.forEach(function (resolver) {
      return resolver.setVariables(variables);
    });
    this._stale = true;
  };

  SelectorListResolver.prototype.isLoading = function isLoading() {
    return this._resolvers.some(function (resolver) {
      return resolver.isLoading();
    });
  };

  return SelectorListResolver;
}();

function disposeCallback(disposable) {
  disposable && disposable.dispose();
}

module.exports = RelayModernFragmentSpecResolver;

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(353));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * @internal
 *
 * Factory methods for constructing errors in Relay.
 */
var RelayError = {
  create: function create(name, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return createError('mustfix', name, format, args);
  },
  createWarning: function createWarning(name, format) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    return createError('warn', name, format, args);
  }
};

/**
 * @private
 */
function createError(type, name, format, args) {
  var error = new Error(__webpack_require__(228).apply(undefined, [format].concat((0, _toConsumableArray3['default'])(args))));
  error.name = name;
  error.type = type;
  error.framesToPop = 2;
  return error;
}

module.exports = RelayError;

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(354);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(355), __esModule: true };

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(286);
__webpack_require__(356);
module.exports = __webpack_require__(210).Array.from;


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(252);
var $export = __webpack_require__(219);
var toObject = __webpack_require__(261);
var call = __webpack_require__(357);
var isArrayIter = __webpack_require__(358);
var toLength = __webpack_require__(284);
var createProperty = __webpack_require__(359);
var getIterFn = __webpack_require__(360);

$export($export.S + $export.F * !__webpack_require__(362)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(223);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(232);
var ITERATOR = __webpack_require__(211)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(214);
var createDesc = __webpack_require__(231);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(361);
var ITERATOR = __webpack_require__(211)('iterator');
var Iterators = __webpack_require__(232);
module.exports = __webpack_require__(210).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(254);
var TAG = __webpack_require__(211)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(211)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__(364),
    convertFetch = _require.convertFetch,
    convertSubscribe = _require.convertSubscribe;

/**
 * Creates an implementation of the `Network` interface defined in
 * `RelayNetworkTypes` given `fetch` and `subscribe` functions.
 */
function create(fetchFn, subscribeFn) {
  // Convert to functions that returns RelayObservable.
  var observeFetch = convertFetch(fetchFn);
  var observeSubscribe = subscribeFn ? convertSubscribe(subscribeFn) : undefined;

  function execute(request, variables, cacheConfig, uploadables) {
    if (request.operationKind === 'subscription') {
      __webpack_require__(9)(observeSubscribe, 'RelayNetwork: This network layer does not support Subscriptions. ' + 'To use Subscriptions, provide a custom network layer.');

      __webpack_require__(9)(!uploadables, 'RelayNetwork: Cannot provide uploadables while subscribing.');
      return observeSubscribe(request, variables, cacheConfig);
    }

    var pollInterval = cacheConfig.poll;
    if (pollInterval != null) {
      __webpack_require__(9)(!uploadables, 'RelayNetwork: Cannot provide uploadables while polling.');
      return observeFetch(request, variables, { force: true }).poll(pollInterval);
    }

    return observeFetch(request, variables, cacheConfig, uploadables);
  }

  return { execute: execute };
}

module.exports = { create: create };

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Converts a FetchFunction into an ExecuteFunction for use by RelayNetwork.
 */
function convertFetch(fn) {
  return function fetch(request, variables, cacheConfig, uploadables) {
    var result = fn(request, variables, cacheConfig, uploadables);
    // Note: We allow FetchFunction to directly return Error to indicate
    // a failure to fetch. To avoid handling this special case throughout the
    // Relay codebase, it is explicitly handled here.
    if (result instanceof Error) {
      return __webpack_require__(248).create(function (sink) {
        return sink.error(result);
      });
    }
    return __webpack_require__(248).from(result).map(function (value) {
      return convertToExecutePayload(request, variables, value);
    });
  };
}

/**
 * Converts a SubscribeFunction into an ExecuteFunction for use by RelayNetwork.
 */
function convertSubscribe(fn) {
  return function subscribe(operation, variables, cacheConfig) {
    return __webpack_require__(248).fromLegacy(function (observer) {
      return fn(operation, variables, cacheConfig, observer);
    }).map(function (value) {
      return convertToExecutePayload(operation, variables, value);
    });
  };
}

/**
 * Given a value which might be a plain GraphQLResponse, coerce to always return
 * an ExecutePayload. A GraphQLResponse may be returned directly from older or
 * simpler Relay Network implementations.
 */
function convertToExecutePayload(request, variables, value) {
  if (!value.data && !value.errors && value.response) {
    if (!value.operation) {
      __webpack_require__(20)(false, 'ConvertToExecuteFunction: execute payload contains response but ' + 'is missing operation.');
      return createExecutePayload(request, variables, value.response);
    }
    return value;
  }
  return createExecutePayload(request, variables, value);
}

function createExecutePayload(request, variables, response) {
  if (request.kind === __webpack_require__(205).BATCH_REQUEST) {
    throw new Error('ConvertToExecuteFunction: Batch request must return ExecutePayload.');
  }
  return { operation: request.operation, variables: variables, response: response };
}

module.exports = {
  convertFetch: convertFetch,
  convertSubscribe: convertSubscribe
};

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



function isPromise(p) {
  return !!p && typeof p.then === 'function';
}

module.exports = isPromise;

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * A cache for storing query responses, featuring:
 * - `get` with TTL
 * - cache size limiting, with least-recently *updated* entries purged first
 */
var RelayQueryResponseCache = function () {
  function RelayQueryResponseCache(_ref) {
    var size = _ref.size,
        ttl = _ref.ttl;
    (0, _classCallCheck3['default'])(this, RelayQueryResponseCache);

    __webpack_require__(9)(size > 0, 'RelayQueryResponseCache: Expected the max cache size to be > 0, got ' + '`%s`.', size);
    __webpack_require__(9)(ttl > 0, 'RelayQueryResponseCache: Expected the max ttl to be > 0, got `%s`.', ttl);
    this._responses = new Map();
    this._size = size;
    this._ttl = ttl;
  }

  RelayQueryResponseCache.prototype.clear = function clear() {
    this._responses.clear();
  };

  RelayQueryResponseCache.prototype.get = function get(queryID, variables) {
    var _this = this;

    var cacheKey = getCacheKey(queryID, variables);
    this._responses.forEach(function (response, key) {
      if (!isCurrent(response.fetchTime, _this._ttl)) {
        _this._responses['delete'](key);
      }
    });
    var response = this._responses.get(cacheKey);
    return response != null ? response.payload : null;
  };

  RelayQueryResponseCache.prototype.set = function set(queryID, variables, payload) {
    var fetchTime = Date.now();
    var cacheKey = getCacheKey(queryID, variables);
    this._responses['delete'](cacheKey); // deletion resets key ordering
    this._responses.set(cacheKey, {
      fetchTime: fetchTime,
      payload: payload
    });
    // Purge least-recently updated key when max size reached
    if (this._responses.size > this._size) {
      var firstKey = this._responses.keys().next();
      if (!firstKey.done) {
        this._responses['delete'](firstKey.value);
      }
    }
  };

  return RelayQueryResponseCache;
}();

function getCacheKey(queryID, variables) {
  return JSON.stringify(__webpack_require__(245)({ queryID: queryID, variables: variables }));
}

/**
 * Determine whether a response fetched at `fetchTime` is still valid given
 * some `ttl`.
 */
function isCurrent(fetchTime, ttl) {
  return fetchTime + ttl >= Date.now();
}

module.exports = RelayQueryResponseCache;

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _extends3 = _interopRequireDefault(__webpack_require__(209));

var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__(206),
    UNPUBLISH_RECORD_SENTINEL = _require.UNPUBLISH_RECORD_SENTINEL;

/**
 * @public
 *
 * An implementation of the `Store` interface defined in `RelayStoreTypes`.
 *
 * Note that a Store takes ownership of all records provided to it: other
 * objects may continue to hold a reference to such records but may not mutate
 * them. The static Relay core is architected to avoid mutating records that may have been
 * passed to a store: operations that mutate records will either create fresh
 * records or clone existing records and modify the clones. Record immutability
 * is also enforced in development mode by freezing all records passed to a store.
 */
var RelayMarkSweepStore = function () {
  function RelayMarkSweepStore(source) {
    (0, _classCallCheck3['default'])(this, RelayMarkSweepStore);

    // Prevent mutation of a record from outside the store.
    if (process.env.NODE_ENV !== 'production') {
      var storeIDs = source.getRecordIDs();
      for (var ii = 0; ii < storeIDs.length; ii++) {
        var record = source.get(storeIDs[ii]);
        if (record) {
          __webpack_require__(204).freeze(record);
        }
      }
    }
    this._gcEnabled = true;
    this._hasScheduledGC = false;
    this._index = 0;
    this._recordSource = source;
    this._roots = new Map();
    this._subscriptions = new Set();
    this._updatedRecordIDs = {};
  }

  RelayMarkSweepStore.prototype.getSource = function getSource() {
    return this._recordSource;
  };

  RelayMarkSweepStore.prototype.check = function check(selector) {
    return __webpack_require__(368).check(this._recordSource, this._recordSource, selector, []);
  };

  RelayMarkSweepStore.prototype.retain = function retain(selector) {
    var _this = this;

    var index = this._index++;
    var dispose = function dispose() {
      _this._roots['delete'](index);
      _this._scheduleGC();
    };
    this._roots.set(index, selector);
    return { dispose: dispose };
  };

  RelayMarkSweepStore.prototype.lookup = function lookup(selector) {
    var snapshot = __webpack_require__(273).read(this._recordSource, selector);
    if (process.env.NODE_ENV !== 'production') {
      __webpack_require__(233)(snapshot);
    }
    return snapshot;
  };

  RelayMarkSweepStore.prototype.notify = function notify() {
    var _this2 = this;

    this._subscriptions.forEach(function (subscription) {
      _this2._updateSubscription(subscription);
    });
    this._updatedRecordIDs = {};
  };

  RelayMarkSweepStore.prototype.publish = function publish(source) {
    updateTargetFromSource(this._recordSource, source, this._updatedRecordIDs);
  };

  RelayMarkSweepStore.prototype.subscribe = function subscribe(snapshot, callback) {
    var _this3 = this;

    var subscription = { callback: callback, snapshot: snapshot };
    var dispose = function dispose() {
      _this3._subscriptions['delete'](subscription);
    };
    this._subscriptions.add(subscription);
    return { dispose: dispose };
  };

  // Internal API


  RelayMarkSweepStore.prototype.__getUpdatedRecordIDs = function __getUpdatedRecordIDs() {
    return this._updatedRecordIDs;
  };

  RelayMarkSweepStore.prototype._updateSubscription = function _updateSubscription(subscription) {
    var callback = subscription.callback,
        snapshot = subscription.snapshot;

    if (!__webpack_require__(369)(snapshot, this._updatedRecordIDs)) {
      return;
    }

    var _RelayReader$read = __webpack_require__(273).read(this._recordSource, snapshot),
        data = _RelayReader$read.data,
        seenRecords = _RelayReader$read.seenRecords;

    var nextData = __webpack_require__(298)(snapshot.data, data);
    var nextSnapshot = (0, _extends3['default'])({}, snapshot, {
      data: nextData,
      seenRecords: seenRecords
    });
    if (process.env.NODE_ENV !== 'production') {
      __webpack_require__(233)(nextSnapshot);
    }
    subscription.snapshot = nextSnapshot;
    if (nextSnapshot.data !== snapshot.data) {
      callback(nextSnapshot);
    }
  };

  RelayMarkSweepStore.prototype._scheduleGC = function _scheduleGC() {
    var _this4 = this;

    if (!this._gcEnabled || this._hasScheduledGC) {
      return;
    }
    this._hasScheduledGC = true;
    __webpack_require__(370)(function () {
      _this4._gc();
      _this4._hasScheduledGC = false;
    });
  };

  RelayMarkSweepStore.prototype._gc = function _gc() {
    var _this5 = this;

    var references = new Set();
    // Mark all records that are traversable from a root
    this._roots.forEach(function (selector) {
      __webpack_require__(380).mark(_this5._recordSource, selector, references);
    });
    // Short-circuit if *nothing* is referenced
    if (!references.size) {
      this._recordSource.clear();
      return;
    }
    // Evict any unreferenced nodes
    var storeIDs = this._recordSource.getRecordIDs();
    for (var ii = 0; ii < storeIDs.length; ii++) {
      var dataID = storeIDs[ii];
      if (!references.has(dataID)) {
        this._recordSource.remove(dataID);
      }
    }
  };

  // Internal hooks to enable/disable garbage collection for experimentation


  RelayMarkSweepStore.prototype.__enableGC = function __enableGC() {
    this._gcEnabled = true;
  };

  RelayMarkSweepStore.prototype.__disableGC = function __disableGC() {
    this._gcEnabled = false;
  };

  return RelayMarkSweepStore;
}();

/**
 * Updates the target with information from source, also updating a mapping of
 * which records in the target were changed as a result.
 */


function updateTargetFromSource(target, source, updatedRecordIDs) {
  var dataIDs = source.getRecordIDs();
  for (var ii = 0; ii < dataIDs.length; ii++) {
    var dataID = dataIDs[ii];
    var sourceRecord = source.get(dataID);
    var targetRecord = target.get(dataID);
    // Prevent mutation of a record from outside the store.
    if (process.env.NODE_ENV !== 'production') {
      if (sourceRecord) {
        __webpack_require__(204).freeze(sourceRecord);
      }
    }
    if (sourceRecord === UNPUBLISH_RECORD_SENTINEL) {
      // Unpublish a record
      target.remove(dataID);
      updatedRecordIDs[dataID] = true;
    } else if (sourceRecord && targetRecord) {
      var nextRecord = __webpack_require__(204).update(targetRecord, sourceRecord);
      if (nextRecord !== targetRecord) {
        // Prevent mutation of a record from outside the store.
        if (process.env.NODE_ENV !== 'production') {
          __webpack_require__(204).freeze(nextRecord);
        }
        updatedRecordIDs[dataID] = true;
        target.set(dataID, nextRecord);
      }
    } else if (sourceRecord === null) {
      target['delete'](dataID);
      if (targetRecord !== null) {
        updatedRecordIDs[dataID] = true;
      }
    } else if (sourceRecord) {
      target.set(dataID, sourceRecord);
      updatedRecordIDs[dataID] = true;
    } // don't add explicit undefined
  }
}

__webpack_require__(271).instrumentMethods(RelayMarkSweepStore.prototype, {
  lookup: 'RelayMarkSweepStore.prototype.lookup',
  notify: 'RelayMarkSweepStore.prototype.notify',
  publish: 'RelayMarkSweepStore.prototype.publish',
  retain: 'RelayMarkSweepStore.prototype.retain',
  subscribe: 'RelayMarkSweepStore.prototype.subscribe'
});

module.exports = RelayMarkSweepStore;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__(227),
    EXISTENT = _require.EXISTENT,
    UNKNOWN = _require.UNKNOWN;

var CONDITION = __webpack_require__(205).CONDITION,
    INLINE_FRAGMENT = __webpack_require__(205).INLINE_FRAGMENT,
    LINKED_FIELD = __webpack_require__(205).LINKED_FIELD,
    LINKED_HANDLE = __webpack_require__(205).LINKED_HANDLE,
    SCALAR_FIELD = __webpack_require__(205).SCALAR_FIELD;

var getStorageKey = __webpack_require__(206).getStorageKey,
    getArgumentValues = __webpack_require__(206).getArgumentValues;

/**
 * Synchronously check whether the records required to fulfill the
 * given `selector` are present in `source`.
 *
 * If a field is missing, it uses the provided handlers to attempt to substitute
 * data. The `target` will store all records that are modified because of a
 * successful substitution.
 *
 * If all records are present, returns `true`, otherwise `false`.
 */


function check(source, target, selector, handlers) {
  var dataID = selector.dataID,
      node = selector.node,
      variables = selector.variables;

  var loader = new RelayDataLoader(source, target, variables, handlers);
  return loader.check(node, dataID);
}

/**
 * @private
 */

var RelayDataLoader = function () {
  function RelayDataLoader(source, target, variables, handlers) {
    (0, _classCallCheck3['default'])(this, RelayDataLoader);

    this._source = source;
    this._variables = variables;
    this._recordWasMissing = false;
    this._handlers = handlers;
    this._mutator = new (__webpack_require__(247))(source, target);
  }

  RelayDataLoader.prototype.check = function check(node, dataID) {
    this._traverse(node, dataID);
    return !this._recordWasMissing;
  };

  RelayDataLoader.prototype._getVariableValue = function _getVariableValue(name) {
    __webpack_require__(9)(this._variables.hasOwnProperty(name), 'RelayAsyncLoader(): Undefined variable `%s`.', name);
    return this._variables[name];
  };

  RelayDataLoader.prototype._handleMissing = function _handleMissing() {
    this._recordWasMissing = true;
  };

  RelayDataLoader.prototype._getDataForHandlers = function _getDataForHandlers(field, dataID) {
    return {
      args: field.args ? getArgumentValues(field.args, this._variables) : {},
      // Getting a snapshot of the record state is potentially expensive since
      // we will need to merge the sink and source records. Since we do not create
      // any new records in this process, it is probably reasonable to provide
      // handlers with a copy of the source record.
      // The only thing that the provided record will not contain is fields
      // added by previous handlers.
      record: this._source.get(dataID)
    };
  };

  RelayDataLoader.prototype._handleMissingScalarField = function _handleMissingScalarField(field, dataID) {
    var _getDataForHandlers2 = this._getDataForHandlers(field, dataID),
        args = _getDataForHandlers2.args,
        record = _getDataForHandlers2.record;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this._handlers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var handler = _step.value;

        if (handler.kind === 'scalar') {
          var newValue = handler.handle(field, record, args);
          if (newValue !== undefined) {
            return newValue;
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this._handleMissing();
  };

  RelayDataLoader.prototype._handleMissingLinkField = function _handleMissingLinkField(field, dataID) {
    var _getDataForHandlers3 = this._getDataForHandlers(field, dataID),
        args = _getDataForHandlers3.args,
        record = _getDataForHandlers3.record;

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = this._handlers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var handler = _step2.value;

        if (handler.kind === 'linked') {
          var newValue = handler.handle(field, record, args);
          if (newValue != null && this._mutator.getStatus(newValue) === EXISTENT) {
            return newValue;
          }
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
          _iterator2['return']();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    this._handleMissing();
  };

  RelayDataLoader.prototype._handleMissingPluralLinkField = function _handleMissingPluralLinkField(field, dataID) {
    var _this = this;

    var _getDataForHandlers4 = this._getDataForHandlers(field, dataID),
        args = _getDataForHandlers4.args,
        record = _getDataForHandlers4.record;

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = this._handlers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var handler = _step3.value;

        if (handler.kind === 'pluralLinked') {
          var newValue = handler.handle(field, record, args);
          if (newValue != null) {
            return newValue.filter(function (linkedID) {
              return linkedID != null && _this._mutator.getStatus(linkedID) === EXISTENT;
            });
          }
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3['return']) {
          _iterator3['return']();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    this._handleMissing();
  };

  RelayDataLoader.prototype._traverse = function _traverse(node, dataID) {
    var status = this._mutator.getStatus(dataID);
    if (status === UNKNOWN) {
      this._handleMissing();
    }
    if (status === EXISTENT) {
      this._traverseSelections(node.selections, dataID);
    }
  };

  RelayDataLoader.prototype._traverseSelections = function _traverseSelections(selections, dataID) {
    var _this2 = this;

    selections.every(function (selection) {
      switch (selection.kind) {
        case SCALAR_FIELD:
          _this2._prepareScalar(selection, dataID);
          break;
        case LINKED_FIELD:
          if (selection.plural) {
            _this2._preparePluralLink(selection, dataID);
          } else {
            _this2._prepareLink(selection, dataID);
          }
          break;
        case CONDITION:
          var conditionValue = _this2._getVariableValue(selection.condition);
          if (conditionValue === selection.passingValue) {
            _this2._traverseSelections(selection.selections, dataID);
          }
          break;
        case INLINE_FRAGMENT:
          var typeName = _this2._mutator.getType(dataID);
          if (typeName != null && typeName === selection.type) {
            _this2._traverseSelections(selection.selections, dataID);
          }
          break;
        case LINKED_HANDLE:
          // Handles have no selections themselves; traverse the original field
          // where the handle was set-up instead.
          var handleField = __webpack_require__(297)(selection, selections, _this2._variables);
          if (handleField.plural) {
            _this2._preparePluralLink(handleField, dataID);
          } else {
            _this2._prepareLink(handleField, dataID);
          }
          break;
        default:
          __webpack_require__(9)(selection.kind === SCALAR_FIELD, 'RelayAsyncLoader(): Unexpected ast kind `%s`.', selection.kind);
      }
      return !_this2._done;
    });
  };

  RelayDataLoader.prototype._prepareScalar = function _prepareScalar(field, dataID) {
    var storageKey = getStorageKey(field, this._variables);
    var fieldValue = this._mutator.getValue(dataID, storageKey);
    if (fieldValue === undefined) {
      fieldValue = this._handleMissingScalarField(field, dataID);
      if (fieldValue !== undefined) {
        this._mutator.setValue(dataID, storageKey, fieldValue);
      }
    }
  };

  RelayDataLoader.prototype._prepareLink = function _prepareLink(field, dataID) {
    var storageKey = getStorageKey(field, this._variables);
    var linkedID = this._mutator.getLinkedRecordID(dataID, storageKey);

    if (linkedID === undefined) {
      linkedID = this._handleMissingLinkField(field, dataID);
      if (linkedID != null) {
        this._mutator.setLinkedRecordID(dataID, storageKey, linkedID);
      }
    }
    if (linkedID != null) {
      this._traverse(field, linkedID);
    }
  };

  RelayDataLoader.prototype._preparePluralLink = function _preparePluralLink(field, dataID) {
    var _this3 = this;

    var storageKey = getStorageKey(field, this._variables);
    var linkedIDs = this._mutator.getLinkedRecordIDs(dataID, storageKey);

    if (linkedIDs === undefined) {
      linkedIDs = this._handleMissingPluralLinkField(field, dataID);
      if (linkedIDs != null) {
        this._mutator.setLinkedRecordIDs(dataID, storageKey, linkedIDs);
      }
    }
    if (linkedIDs) {
      linkedIDs.forEach(function (linkedID) {
        if (linkedID != null) {
          _this3._traverse(field, linkedID);
        }
      });
    }
  };

  return RelayDataLoader;
}();

module.exports = {
  check: check
};

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



function hasOverlappingIDs(snapshot, updatedRecordIDs) {
  var keys = Object.keys(snapshot.seenRecords);
  for (var ii = 0; ii < keys.length; ii++) {
    if (updatedRecordIDs.hasOwnProperty(keys[ii])) {
      return true;
    }
  }
  return false;
}

module.exports = hasOverlappingIDs;

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(371);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var resolvedPromise = Promise.resolve();

/**
 * An alternative to setImmediate based on Promise.
 */
function resolveImmediate(callback) {
  resolvedPromise.then(callback)["catch"](throwNext);
}

function throwNext(error) {
  setTimeout(function () {
    throw error;
  }, 0);
}

module.exports = resolveImmediate;

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

module.exports = __webpack_require__(372);

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(373)


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(229);
__webpack_require__(374);
__webpack_require__(375);
__webpack_require__(376);
__webpack_require__(377);
__webpack_require__(379);


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(229);

module.exports = Promise;
Promise.prototype.done = function (onFulfilled, onRejected) {
  var self = arguments.length ? this.then.apply(this, arguments) : this;
  self.then(null, function (err) {
    setTimeout(function () {
      throw err;
    }, 0);
  });
};


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(229);

module.exports = Promise;
Promise.prototype['finally'] = function (f) {
  return this.then(function (value) {
    return Promise.resolve(f()).then(function () {
      return value;
    });
  }, function (err) {
    return Promise.resolve(f()).then(function () {
      throw err;
    });
  });
};


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__(229);

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._61);
  p._65 = 1;
  p._55 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._65 === 3) {
            val = val._55;
          }
          if (val._65 === 1) return res(i, val._55);
          if (val._65 === 2) reject(val._55);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This file contains then/promise specific extensions that are only useful
// for node.js interop

var Promise = __webpack_require__(229);
var asap = __webpack_require__(378);

module.exports = Promise;

/* Static Functions */

Promise.denodeify = function (fn, argumentCount) {
  if (
    typeof argumentCount === 'number' && argumentCount !== Infinity
  ) {
    return denodeifyWithCount(fn, argumentCount);
  } else {
    return denodeifyWithoutCount(fn);
  }
};

var callbackFn = (
  'function (err, res) {' +
  'if (err) { rj(err); } else { rs(res); }' +
  '}'
);
function denodeifyWithCount(fn, argumentCount) {
  var args = [];
  for (var i = 0; i < argumentCount; i++) {
    args.push('a' + i);
  }
  var body = [
    'return function (' + args.join(',') + ') {',
    'var self = this;',
    'return new Promise(function (rs, rj) {',
    'var res = fn.call(',
    ['self'].concat(args).concat([callbackFn]).join(','),
    ');',
    'if (res &&',
    '(typeof res === "object" || typeof res === "function") &&',
    'typeof res.then === "function"',
    ') {rs(res);}',
    '});',
    '};'
  ].join('');
  return Function(['Promise', 'fn'], body)(Promise, fn);
}
function denodeifyWithoutCount(fn) {
  var fnLength = Math.max(fn.length - 1, 3);
  var args = [];
  for (var i = 0; i < fnLength; i++) {
    args.push('a' + i);
  }
  var body = [
    'return function (' + args.join(',') + ') {',
    'var self = this;',
    'var args;',
    'var argLength = arguments.length;',
    'if (arguments.length > ' + fnLength + ') {',
    'args = new Array(arguments.length + 1);',
    'for (var i = 0; i < arguments.length; i++) {',
    'args[i] = arguments[i];',
    '}',
    '}',
    'return new Promise(function (rs, rj) {',
    'var cb = ' + callbackFn + ';',
    'var res;',
    'switch (argLength) {',
    args.concat(['extra']).map(function (_, index) {
      return (
        'case ' + (index) + ':' +
        'res = fn.call(' + ['self'].concat(args.slice(0, index)).concat('cb').join(',') + ');' +
        'break;'
      );
    }).join(''),
    'default:',
    'args[argLength] = cb;',
    'res = fn.apply(self, args);',
    '}',
    
    'if (res &&',
    '(typeof res === "object" || typeof res === "function") &&',
    'typeof res.then === "function"',
    ') {rs(res);}',
    '});',
    '};'
  ].join('');

  return Function(
    ['Promise', 'fn'],
    body
  )(Promise, fn);
}

Promise.nodeify = function (fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    var callback =
      typeof args[args.length - 1] === 'function' ? args.pop() : null;
    var ctx = this;
    try {
      return fn.apply(this, arguments).nodeify(callback, ctx);
    } catch (ex) {
      if (callback === null || typeof callback == 'undefined') {
        return new Promise(function (resolve, reject) {
          reject(ex);
        });
      } else {
        asap(function () {
          callback.call(ctx, ex);
        })
      }
    }
  }
};

Promise.prototype.nodeify = function (callback, ctx) {
  if (typeof callback != 'function') return this;

  this.then(function (value) {
    asap(function () {
      callback.call(ctx, null, value);
    });
  }, function (err) {
    asap(function () {
      callback.call(ctx, err);
    });
  });
};


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// rawAsap provides everything we need except exception management.
var rawAsap = __webpack_require__(299);
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(229);

module.exports = Promise;
Promise.enableSynchronous = function () {
  Promise.prototype.isPending = function() {
    return this.getState() == 0;
  };

  Promise.prototype.isFulfilled = function() {
    return this.getState() == 1;
  };

  Promise.prototype.isRejected = function() {
    return this.getState() == 2;
  };

  Promise.prototype.getValue = function () {
    if (this._65 === 3) {
      return this._55.getValue();
    }

    if (!this.isFulfilled()) {
      throw new Error('Cannot get a value of an unfulfilled promise.');
    }

    return this._55;
  };

  Promise.prototype.getReason = function () {
    if (this._65 === 3) {
      return this._55.getReason();
    }

    if (!this.isRejected()) {
      throw new Error('Cannot get a rejection reason of a non-rejected promise.');
    }

    return this._55;
  };

  Promise.prototype.getState = function () {
    if (this._65 === 3) {
      return this._55.getState();
    }
    if (this._65 === -1 || this._65 === -2) {
      return 0;
    }

    return this._65;
  };
};

Promise.disableSynchronous = function() {
  Promise.prototype.isPending = undefined;
  Promise.prototype.isFulfilled = undefined;
  Promise.prototype.isRejected = undefined;
  Promise.prototype.getValue = undefined;
  Promise.prototype.getReason = undefined;
  Promise.prototype.getState = undefined;
};


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CONDITION = __webpack_require__(205).CONDITION,
    DEFERRABLE_FRAGMENT_SPREAD = __webpack_require__(205).DEFERRABLE_FRAGMENT_SPREAD,
    FRAGMENT_SPREAD = __webpack_require__(205).FRAGMENT_SPREAD,
    INLINE_FRAGMENT = __webpack_require__(205).INLINE_FRAGMENT,
    LINKED_FIELD = __webpack_require__(205).LINKED_FIELD,
    LINKED_HANDLE = __webpack_require__(205).LINKED_HANDLE,
    SCALAR_FIELD = __webpack_require__(205).SCALAR_FIELD,
    SCALAR_HANDLE = __webpack_require__(205).SCALAR_HANDLE;

var getStorageKey = __webpack_require__(206).getStorageKey;

function mark(recordSource, selector, references) {
  var dataID = selector.dataID,
      node = selector.node,
      variables = selector.variables;

  var marker = new RelayReferenceMarker(recordSource, variables, references);
  marker.mark(node, dataID);
}

/**
 * @private
 */

var RelayReferenceMarker = function () {
  function RelayReferenceMarker(recordSource, variables, references) {
    (0, _classCallCheck3['default'])(this, RelayReferenceMarker);

    this._references = references;
    this._recordSource = recordSource;
    this._variables = variables;
  }

  RelayReferenceMarker.prototype.mark = function mark(node, dataID) {
    this._traverse(node, dataID);
  };

  RelayReferenceMarker.prototype._traverse = function _traverse(node, dataID) {
    this._references.add(dataID);
    var record = this._recordSource.get(dataID);
    if (record == null) {
      return;
    }
    this._traverseSelections(node.selections, record);
  };

  RelayReferenceMarker.prototype._getVariableValue = function _getVariableValue(name) {
    __webpack_require__(9)(this._variables.hasOwnProperty(name), 'RelayReferenceMarker(): Undefined variable `%s`.', name);
    return this._variables[name];
  };

  RelayReferenceMarker.prototype._traverseSelections = function _traverseSelections(selections, record) {
    var _this = this;

    selections.forEach(function (selection) {
      /* eslint-disable no-fallthrough */
      switch (selection.kind) {
        case LINKED_FIELD:
          if (selection.plural) {
            _this._traversePluralLink(selection, record);
          } else {
            _this._traverseLink(selection, record);
          }
          break;
        case CONDITION:
          var conditionValue = _this._getVariableValue(selection.condition);
          if (conditionValue === selection.passingValue) {
            _this._traverseSelections(selection.selections, record);
          }
          break;
        case INLINE_FRAGMENT:
          var typeName = __webpack_require__(204).getType(record);
          if (typeName != null && typeName === selection.type) {
            _this._traverseSelections(selection.selections, record);
          }
          break;
        case FRAGMENT_SPREAD:
          __webpack_require__(9)(false, 'RelayReferenceMarker(): Unexpected fragment spread `...%s`, ' + 'expected all fragments to be inlined.', selection.name);
        case LINKED_HANDLE:
          // The selections for a "handle" field are the same as those of the
          // original linked field where the handle was applied. Reference marking
          // therefore requires traversing the original field selections against
          // the synthesized client field.
          //
          // TODO: Instead of finding the source field in `selections`, change
          // the concrete structure to allow shared subtrees, and have the linked
          // handle directly refer to the same selections as the LinkedField that
          // it was split from.
          var handleField = __webpack_require__(297)(selection, selections, _this._variables);
          if (handleField.plural) {
            _this._traversePluralLink(handleField, record);
          } else {
            _this._traverseLink(handleField, record);
          }
          break;
        case SCALAR_FIELD:
        case SCALAR_HANDLE:
        case DEFERRABLE_FRAGMENT_SPREAD:
          break;
        default:
          selection;
          __webpack_require__(9)(false, 'RelayReferenceMarker: Unknown AST node `%s`.', selection);
      }
    });
  };

  RelayReferenceMarker.prototype._traverseLink = function _traverseLink(field, record) {
    var storageKey = getStorageKey(field, this._variables);
    var linkedID = __webpack_require__(204).getLinkedRecordID(record, storageKey);

    if (linkedID == null) {
      return;
    }
    this._traverse(field, linkedID);
  };

  RelayReferenceMarker.prototype._traversePluralLink = function _traversePluralLink(field, record) {
    var _this2 = this;

    var storageKey = getStorageKey(field, this._variables);
    var linkedIDs = __webpack_require__(204).getLinkedRecordIDs(record, storageKey);

    if (linkedIDs == null) {
      return;
    }
    linkedIDs.forEach(function (linkedID) {
      if (linkedID != null) {
        _this2._traverse(field, linkedID);
      }
    });
  };

  return RelayReferenceMarker;
}();

module.exports = { mark: mark };

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Higher-level helper function to execute a mutation against a specific
 * environment.
 */
function applyRelayModernOptimisticMutation(environment, config) {
  __webpack_require__(9)(__webpack_require__(274)(environment), 'commitRelayModernMutation: expect `environment` to be an instance of ' + '`RelayModernEnvironment`.');
  var _environment$unstable = environment.unstable_internal,
      createOperationSelector = _environment$unstable.createOperationSelector,
      getRequest = _environment$unstable.getRequest;

  var mutation = getRequest(config.mutation);
  if (mutation.operationKind !== 'mutation') {
    throw new Error('commitRelayModernMutation: Expected mutation operation');
  }
  var optimisticUpdater = config.optimisticUpdater;
  var configs = config.configs,
      optimisticResponse = config.optimisticResponse,
      variables = config.variables;

  var operation = createOperationSelector(mutation, variables);
  if (configs) {
    var _RelayDeclarativeMuta = __webpack_require__(236).convert(configs, mutation, optimisticUpdater);

    optimisticUpdater = _RelayDeclarativeMuta.optimisticUpdater;
  }

  return environment.applyUpdate({
    operation: operation,
    selectorStoreUpdater: optimisticUpdater,
    response: optimisticResponse
  });
}

module.exports = applyRelayModernOptimisticMutation;

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



function commitLocalUpdate(environment, updater) {
  environment.commitUpdate(updater);
}

module.exports = commitLocalUpdate;

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Higher-level helper function to execute a mutation against a specific
 * environment.
 */
function commitRelayModernMutation(environment, config) {
  __webpack_require__(9)(__webpack_require__(274)(environment), 'commitRelayModernMutation: expect `environment` to be an instance of ' + '`RelayModernEnvironment`.');
  var _environment$unstable = environment.unstable_internal,
      createOperationSelector = _environment$unstable.createOperationSelector,
      getRequest = _environment$unstable.getRequest;

  var mutation = getRequest(config.mutation);
  if (mutation.operationKind !== 'mutation') {
    throw new Error('commitRelayModernMutation: Expected mutation operation');
  }
  var optimisticResponse = config.optimisticResponse,
      optimisticUpdater = config.optimisticUpdater,
      updater = config.updater;
  var configs = config.configs,
      onError = config.onError,
      variables = config.variables,
      uploadables = config.uploadables;

  var operation = createOperationSelector(mutation, variables);
  // TODO: remove this check after we fix flow.
  if (typeof optimisticResponse === 'function') {
    optimisticResponse = optimisticResponse();
    __webpack_require__(20)(false, 'commitRelayModernMutation: Expected `optimisticResponse` to be an object, ' + 'received a function.');
  }
  if (optimisticResponse && mutation.fragment.selections && mutation.fragment.selections.length === 1 && mutation.fragment.selections[0].kind === 'LinkedField') {
    var mutationRoot = mutation.fragment.selections[0].name;
    __webpack_require__(20)(optimisticResponse[mutationRoot], 'commitRelayModernMutation: Expected `optimisticResponse` to be wrapped ' + 'in mutation name `%s`', mutationRoot);
  }
  if (configs) {
    var _RelayDeclarativeMuta = __webpack_require__(236).convert(configs, mutation, optimisticUpdater, updater);

    optimisticUpdater = _RelayDeclarativeMuta.optimisticUpdater;
    updater = _RelayDeclarativeMuta.updater;
  }
  return environment.executeMutation({
    operation: operation,
    optimisticResponse: optimisticResponse,
    optimisticUpdater: optimisticUpdater,
    updater: updater,
    uploadables: uploadables
  }).subscribeLegacy({
    onNext: function onNext(payload) {
      // NOTE: commitRelayModernMutation has a non-standard use of
      // onCompleted() by calling it on every next value. It may be called
      // multiple times if a network request produces multiple responses.
      var onCompleted = config.onCompleted;

      if (onCompleted) {
        var snapshot = environment.lookup(operation.fragment);
        onCompleted(snapshot.data, payload.response.errors);
      }
    },
    onError: onError
  });
}

module.exports = commitRelayModernMutation;

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * A helper function to fetch the results of a query. Note that results for
 * fragment spreads are masked: fields must be explicitly listed in the query in
 * order to be accessible in the result object.
 *
 * NOTE: This module is primarily intended for integrating with classic APIs.
 * Most product code should use a Renderer or Container.
 *
 * TODO(t16875667): The return type should be `Promise<?SelectorData>`, but
 * that's not really helpful as `SelectorData` is essentially just `mixed`. We
 * can probably leverage generated flow types here to return the real expected
 * shape.
 */
function fetchRelayModernQuery(environment, taggedNode, variables, cacheConfig) {
  __webpack_require__(9)(environment.unstable_internal, 'fetchRelayModernQuery: Expected a valid Relay environment, got `%s`.', environment);
  var _environment$unstable = environment.unstable_internal,
      createOperationSelector = _environment$unstable.createOperationSelector,
      getRequest = _environment$unstable.getRequest;

  var query = getRequest(taggedNode);
  if (query.kind === __webpack_require__(205).BATCH_REQUEST) {
    throw new Error('fetchRelayModernQuery: Batch request not supported in this API.');
  }
  if (query.operationKind !== 'query') {
    throw new Error('fetchRelayModernQuery: Expected query operation');
  }
  var operation = createOperationSelector(query, variables);

  return environment.execute({ operation: operation, cacheConfig: cacheConfig }).map(function () {
    return environment.lookup(operation.fragment).data;
  }).toPromise();
}

module.exports = fetchRelayModernQuery;

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



function requestRelaySubscription(environment, config) {
  var _environment$unstable = environment.unstable_internal,
      createOperationSelector = _environment$unstable.createOperationSelector,
      getRequest = _environment$unstable.getRequest;

  var subscription = getRequest(config.subscription);
  if (subscription.operationKind !== 'subscription') {
    throw new Error('requestRelaySubscription: Must use Subscription operation');
  }
  var configs = config.configs,
      onCompleted = config.onCompleted,
      onError = config.onError,
      onNext = config.onNext,
      variables = config.variables;

  var operation = createOperationSelector(subscription, variables);

  __webpack_require__(20)(!(config.updater && configs), 'requestRelaySubscription: Expected only one of `updater` and `configs` to be provided');

  var _ref = configs ? __webpack_require__(236).convert(configs, subscription, null /* optimisticUpdater */
  , config.updater) : config,
      updater = _ref.updater;

  return environment.execute({
    operation: operation,
    updater: updater,
    cacheConfig: { force: true }
  }).map(function () {
    return environment.lookup(operation.fragment).data;
  }).subscribeLegacy({
    onNext: onNext,
    onError: onError,
    onCompleted: onCompleted
  });
}

module.exports = requestRelaySubscription;

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * A helper to create a deep clone of a value, plain Object, or array of such.
 *
 * Does not support RegExp, Date, other classes, or self-referential values.
 */
function simpleClone(value) {
  if (Array.isArray(value)) {
    return value.map(simpleClone);
  } else if (value && typeof value === 'object') {
    return __webpack_require__(300)(value, simpleClone);
  } else {
    return value;
  }
}

module.exports = simpleClone;

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Determine if the object is a plain object that matches the `Variables` type.
 */

function isRelayVariables(variables) {
  return typeof variables === 'object' && variables !== null && !Array.isArray(variables);
}

module.exports = isRelayVariables;

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



function isRelayContainer(component) {
  return !!(component && component.getFragmentNames && component.getFragment && component.hasFragment && component.hasVariable);
}

module.exports = isRelayContainer;

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _extends3 = _interopRequireDefault(__webpack_require__(209));

var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(243));

var _inherits3 = _interopRequireDefault(__webpack_require__(244));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__(250),
    getComponentName = _require.getComponentName,
    getReactComponent = _require.getReactComponent;

var _require2 = __webpack_require__(249),
    assertRelayContext = _require2.assertRelayContext;

var _require3 = __webpack_require__(276),
    profileContainer = _require3.profileContainer;

var _require4 = __webpack_require__(208),
    RelayProfiler = _require4.RelayProfiler,
    isScalarAndEqual = _require4.isScalarAndEqual;

/**
 * Composes a React component class, returning a new class that intercepts
 * props, resolving them with the provided fragments and subscribing for
 * updates.
 */
function createContainerWithFragments(Component, fragments) {
  var ComponentClass = getReactComponent(Component);
  var componentName = getComponentName(Component);
  var containerName = 'Relay(' + componentName + ')';

  var Container = function (_React$Component) {
    (0, _inherits3['default'])(Container, _React$Component);

    function Container(props, context) {
      (0, _classCallCheck3['default'])(this, Container);

      var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

      _this._handleFragmentDataUpdate = function () {
        var profiler = RelayProfiler.profile('ReactRelayFragmentContainer.handleFragmentDataUpdate');
        var resolverFromThisUpdate = _this.state.resolver;
        _this.setState(function (updatedState) {
          // If this event belongs to the current data source, update.
          // Otherwise we should ignore it.
          if (resolverFromThisUpdate === updatedState.resolver) {
            return {
              data: updatedState.resolver.resolve(),
              relayProp: {
                isLoading: updatedState.resolver.isLoading(),
                environment: updatedState.relayProp.environment
              }
            };
          }

          return null;
        }, profiler.stop);
      };

      _this._legacyStringishRef = __webpack_require__(277)(_this, componentName);

      var relay = assertRelayContext(context.relay);
      var createFragmentSpecResolver = relay.environment.unstable_internal.createFragmentSpecResolver;
      // Do not provide a subscription/callback here.
      // It is possible for this render to be interrupted or aborted,
      // In which case the subscription would cause a leak.
      // We will add the subscription in componentDidMount().

      var resolver = createFragmentSpecResolver(relay, containerName, fragments, props);
      _this.state = {
        data: resolver.resolve(),
        relay: relay,
        relayEnvironment: context.relay.environment,
        prevProps: _this.props,
        relayVariables: context.relay.variables,
        relayProp: {
          isLoading: resolver.isLoading(),
          environment: relay.environment
        },
        resolver: resolver
      };
      return _this;
    }

    /**
     * When new props are received, read data for the new props and subscribe
     * for updates. Props may be the same in which case previous data and
     * subscriptions can be reused.
     */


    Container.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      // Any props change could impact the query, so we mirror props in state.
      // This is an unusual pattern, but necessary for this container usecase.
      var prevProps = prevState.prevProps,
          relay = prevState.relay;
      var _relay$environment$un = relay.environment.unstable_internal,
          createFragmentSpecResolver = _relay$environment$un.createFragmentSpecResolver,
          getDataIDsFromObject = _relay$environment$un.getDataIDsFromObject;

      var prevIDs = getDataIDsFromObject(fragments, prevProps);
      var nextIDs = getDataIDsFromObject(fragments, nextProps);

      var resolver = prevState.resolver;

      // If the environment has changed or props point to new records then
      // previously fetched data and any pending fetches no longer apply:
      // - Existing references are on the old environment.
      // - Existing references are based on old variables.
      // - Pending fetches are for the previous records.
      if (prevState.relayEnvironment !== relay.environment || prevState.relayVariables !== relay.variables || !__webpack_require__(218)(prevIDs, nextIDs)) {
        // Do not provide a subscription/callback here.
        // It is possible for this render to be interrupted or aborted,
        // In which case the subscription would cause a leak.
        // We will add the subscription in componentDidUpdate().
        resolver = createFragmentSpecResolver(relay, containerName, fragments, nextProps);

        return {
          data: resolver.resolve(),
          relayEnvironment: relay.environment,
          prevProps: nextProps,
          relayVariables: relay.variables,
          relayProp: {
            isLoading: resolver.isLoading(),
            environment: relay.environment
          },
          resolver: resolver
        };
      } else {
        resolver.setProps(nextProps);

        var _data = resolver.resolve();
        if (_data !== prevState.data) {
          return {
            data: _data,
            relayEnvironment: relay.environment,
            prevProps: nextProps,
            relayVariables: relay.variables,
            relayProp: {
              isLoading: resolver.isLoading(),
              environment: relay.environment
            }
          };
        }
      }

      return null;
    };

    Container.prototype.componentDidMount = function componentDidMount() {
      this._subscribeToNewResolver();
    };

    Container.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      if (this.state.resolver !== prevState.resolver) {
        prevState.resolver.dispose();

        this._subscribeToNewResolver();
      }
    };

    Container.prototype.componentWillUnmount = function componentWillUnmount() {
      this.state.resolver.dispose();
    };

    Container.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
      // Short-circuit if any Relay-related data has changed
      if (nextState.data !== this.state.data) {
        return true;
      }
      // Otherwise, for convenience short-circuit if all non-Relay props
      // are scalar and equal
      var keys = Object.keys(nextProps);
      for (var ii = 0; ii < keys.length; ii++) {
        var _key = keys[ii];
        if (_key === 'relay') {
          if (nextState.relayEnvironment !== this.state.relayEnvironment || nextState.relayVariables !== this.state.relayVariables) {
            return true;
          }
        } else {
          if (!fragments.hasOwnProperty(_key) && !isScalarAndEqual(nextProps[_key], this.props[_key])) {
            return true;
          }
        }
      }
      return false;
    };

    /**
     * Render new data for the existing props/context.
     */


    Container.prototype._subscribeToNewResolver = function _subscribeToNewResolver() {
      var _state = this.state,
          data = _state.data,
          resolver = _state.resolver;

      // Event listeners are only safe to add during the commit phase,
      // So they won't leak if render is interrupted or errors.

      resolver.setCallback(this._handleFragmentDataUpdate);

      // External values could change between render and commit.
      // Check for this case, even though it requires an extra store read.
      var maybeNewData = resolver.resolve();
      if (data !== maybeNewData) {
        this.setState({ data: maybeNewData });
      }
    };

    Container.prototype.render = function render() {
      if (ComponentClass) {
        return __webpack_require__(0).createElement(ComponentClass, (0, _extends3['default'])({}, this.props, this.state.data, {
          // @TODO (T28161354) Remove the string ref fallback
          ref: this.props.componentRef || this._legacyStringishRef,
          relay: this.state.relayProp
        }));
      } else {
        // Stateless functional, doesn't support `ref`
        return __webpack_require__(0).createElement(Component, (0, _extends3['default'])({}, this.props, this.state.data, {
          relay: this.state.relayProp
        }));
      }
    };

    // @TODO (T28161354) Remove this once string ref usage is gone.


    return Container;
  }(__webpack_require__(0).Component);

  Container.displayName = containerName;
  Container.contextTypes = {
    relay: __webpack_require__(237).Relay
  };

  profileContainer(Container, 'ReactRelayFragmentContainer');

  return Container;
}

/**
 * Wrap the basic `createContainer()` function with logic to adapt to the
 * `context.relay.environment` in which it is rendered. Specifically, the
 * extraction of the environment-specific version of fragments in the
 * `fragmentSpec` is memoized once per environment, rather than once per
 * instance of the container constructed/rendered.
 */
function createContainer(Component, fragmentSpec) {
  return __webpack_require__(278)(Component, fragmentSpec, createContainerWithFragments);
}

module.exports = { createContainer: createContainer, createContainerWithFragments: createContainerWithFragments };

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Fail fast if the user supplies invalid fragments as input.
 */
function assertFragmentMap(componentName, fragments) {
  __webpack_require__(9)(fragments && typeof fragments === 'object', 'Could not create Relay Container for `%s`. ' + 'Expected a set of GraphQL fragments, got `%s` instead.', componentName, fragments);

  for (var key in fragments) {
    if (fragments.hasOwnProperty(key)) {
      var fragment = fragments[key];
      __webpack_require__(9)(fragment && (typeof fragment === 'object' || typeof fragment === 'function'), 'Could not create Relay Container for `%s`. ' + 'The value of fragment `%s` was expected to be a fragment, got `%s` instead.', componentName, key, fragment);
    }
  }
}

module.exports = assertFragmentMap;

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(243));

var _inherits3 = _interopRequireDefault(__webpack_require__(244));

var _defineProperty3 = _interopRequireDefault(__webpack_require__(246));

var _extends4 = _interopRequireDefault(__webpack_require__(209));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__(250),
    getComponentName = _require.getComponentName,
    getReactComponent = _require.getReactComponent;

var _require2 = __webpack_require__(249),
    assertRelayContext = _require2.assertRelayContext;

var _require3 = __webpack_require__(276),
    profileContainer = _require3.profileContainer;

var _require4 = __webpack_require__(208),
    ConnectionInterface = _require4.ConnectionInterface,
    RelayProfiler = _require4.RelayProfiler,
    Observable = _require4.Observable,
    isScalarAndEqual = _require4.isScalarAndEqual;

var containerContextTypes = {
  relay: __webpack_require__(237).Relay
};

var FORWARD = 'forward';

/**
 * Extends the functionality of RelayFragmentContainer by providing a mechanism
 * to load more data from a connection.
 *
 * # Configuring a PaginationContainer
 *
 * PaginationContainer accepts the standard FragmentContainer arguments and an
 * additional `connectionConfig` argument:
 *
 * - `Component`: the component to be wrapped/rendered.
 * - `fragments`: an object whose values are `graphql` fragments. The object
 *   keys determine the prop names by which fragment data is available.
 * - `connectionConfig`: an object that determines how to load more connection
 *   data. Details below.
 *
 * # Loading More Data
 *
 * Use `props.relay.hasMore()` to determine if there are more items to load.
 *
 * ```
 * hasMore(): boolean
 * ```
 *
 * Use `props.relay.isLoading()` to determine if a previous call to `loadMore()`
 * is still pending. This is convenient for avoiding duplicate load calls.
 *
 * ```
 * isLoading(): boolean
 * ```
 *
 * Use `props.relay.loadMore()` to load more items. This will return null if
 * there are no more items to fetch, otherwise it will fetch more items and
 * return a Disposable that can be used to cancel the fetch.
 *
 * `pageSize` should be the number of *additional* items to fetch (not the
 * total).
 *
 * ```
 * loadMore(pageSize: number, callback: ?(error: ?Error) => void): ?Disposable
 * ```
 *
 * A complete example:
 *
 * ```
 * class Foo extends React.Component {
 *   ...
 *   _onEndReached() {
 *     if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
 *       return;
 *     }
 *     this.props.relay.loadMore(10);
 *   }
 *   ...
 * }
 * ```
 *
 * # Connection Config
 *
 * Here's an example, followed by details of each config property:
 *
 * ```
 * ReactRelayPaginationContainer.createContainer(
 *   Component,
 *   {
 *     user: graphql`fragment FriendsFragment on User {
 *       friends(after: $afterCursor first: $count) @connection {
 *         edges { ... }
 *         pageInfo {
 *           startCursor
 *           endCursor
 *           hasNextPage
 *           hasPreviousPage
 *         }
 *       }
 *     }`,
 *   },
 *   {
 *     direction: 'forward',
 *     getConnectionFromProps(props) {
 *       return props.user && props.user.friends;
 *     },
 *     getFragmentVariables(vars, totalCount) {
 *       // The component presumably wants *all* edges, not just those after
 *       // the cursor, so notice that we don't set $afterCursor here.
 *       return {
 *         ...vars,
 *         count: totalCount,
 *       };
 *     },
 *     getVariables(props, {count, cursor}, fragmentVariables) {
 *       return {
 *         id: props.user.id,
 *         afterCursor: cursor,
 *         count,
 *       },
 *     },
 *     query: graphql`
 *       query FriendsQuery($id: ID!, $afterCursor: ID, $count: Int!) {
 *         node(id: $id) {
 *           ...FriendsFragment
 *         }
 *       }
 *     `,
 *   }
 * );
 * ```
 *
 * ## Config Properties
 *
 * - `direction`: Either "forward" to indicate forward pagination using
 *   after/first, or "backward" to indicate backward pagination using
 *   before/last.
 * - `getConnectionFromProps(props)`: PaginationContainer doesn't magically know
 *   which connection data you mean to fetch more of (a container might fetch
 *   multiple connections, but can only paginate one of them). This function is
 *   given the fragment props only (not full props), and should return the
 *   connection data. See the above example that returns the friends data via
 *   `props.user.friends`.
 * - `getFragmentVariables(previousVars, totalCount)`: Given the previous variables
 *   and the new total number of items, get the variables to use when reading
 *   your fragments. Typically this means setting whatever your local "count"
 *   variable is to the value of `totalCount`. See the example.
 * - `getVariables(props, {count, cursor})`: Get the variables to use when
 *   fetching the pagination `query`. You may determine the root object id from
 *   props (see the example that uses `props.user.id`) and may also set whatever
 *   variables you use for the after/first/before/last calls based on the count
 *   and cursor.
 * - `query`: A query to use when fetching more connection data. This should
 *   typically reference one of the container's fragment (as in the example)
 *   to ensure that all the necessary fields for sub-components are fetched.
 */

function createGetConnectionFromProps(metadata) {
  var path = metadata.path;
  __webpack_require__(9)(path, 'ReactRelayPaginationContainer: Unable to synthesize a ' + 'getConnectionFromProps function.');
  return function (props) {
    var data = props[metadata.fragmentName];
    for (var i = 0; i < path.length; i++) {
      if (!data || typeof data !== 'object') {
        return null;
      }
      data = data[path[i]];
    }
    return data;
  };
}

function createGetFragmentVariables(metadata) {
  var countVariable = metadata.count;
  __webpack_require__(9)(countVariable, 'ReactRelayPaginationContainer: Unable to synthesize a ' + 'getFragmentVariables function.');
  return function (prevVars, totalCount) {
    return (0, _extends4['default'])({}, prevVars, (0, _defineProperty3['default'])({}, countVariable, totalCount));
  };
}

function findConnectionMetadata(fragments) {
  var foundConnectionMetadata = null;
  var isRelayModern = false;
  for (var _fragmentName in fragments) {
    var fragment = fragments[_fragmentName];
    var connectionMetadata = fragment.metadata && fragment.metadata.connection;
    // HACK: metadata is always set to `undefined` in classic. In modern, even
    // if empty, it is set to null (never undefined). We use that knowlege to
    // check if we're dealing with classic or modern
    if (fragment.metadata !== undefined) {
      isRelayModern = true;
    }
    if (connectionMetadata) {
      __webpack_require__(9)(connectionMetadata.length === 1, 'ReactRelayPaginationContainer: Only a single @connection is ' + 'supported, `%s` has %s.', _fragmentName, connectionMetadata.length);
      __webpack_require__(9)(!foundConnectionMetadata, 'ReactRelayPaginationContainer: Only a single fragment with ' + '@connection is supported.');
      foundConnectionMetadata = (0, _extends4['default'])({}, connectionMetadata[0], {
        fragmentName: _fragmentName
      });
    }
  }
  __webpack_require__(9)(!isRelayModern || foundConnectionMetadata !== null, 'ReactRelayPaginationContainer: A @connection directive must be present.');
  return foundConnectionMetadata || {};
}

function toObserver(observerOrCallback) {
  return typeof observerOrCallback === 'function' ? {
    error: observerOrCallback,
    complete: observerOrCallback,
    unsubscribe: function unsubscribe(subscription) {
      typeof observerOrCallback === 'function' && observerOrCallback();
    }
  } : observerOrCallback || {};
}

function createContainerWithFragments(Component, fragments, connectionConfig) {
  var ComponentClass = getReactComponent(Component);
  var componentName = getComponentName(Component);
  var containerName = 'Relay(' + componentName + ')';

  var metadata = findConnectionMetadata(fragments);

  var getConnectionFromProps = connectionConfig.getConnectionFromProps || createGetConnectionFromProps(metadata);

  var direction = connectionConfig.direction || metadata.direction;
  __webpack_require__(9)(direction, 'ReactRelayPaginationContainer: Unable to infer direction of the ' + 'connection, possibly because both first and last are provided.');

  var getFragmentVariables = connectionConfig.getFragmentVariables || createGetFragmentVariables(metadata);

  var Container = function (_React$Component) {
    (0, _inherits3['default'])(Container, _React$Component);

    function Container(props, context) {
      (0, _classCallCheck3['default'])(this, Container);

      var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

      _this._handleFragmentDataUpdate = function () {
        var profiler = RelayProfiler.profile('ReactRelayPaginationContainer.handleFragmentDataUpdate');
        _this.setState({ data: _this._resolver.resolve() }, profiler.stop);
      };

      _this._hasMore = function () {
        var connectionData = _this._getConnectionData();
        return !!(connectionData && connectionData.hasMore && connectionData.cursor);
      };

      _this._isLoading = function () {
        return !!_this._refetchSubscription;
      };

      _this._refetchConnection = function (totalCount, observerOrCallback, refetchVariables) {
        var paginatingVariables = {
          count: totalCount,
          cursor: null,
          totalCount: totalCount
        };
        var fetch = _this._fetchPage(paginatingVariables, toObserver(observerOrCallback), { force: true }, refetchVariables);

        return { dispose: fetch.unsubscribe };
      };

      _this._loadMore = function (pageSize, observerOrCallback, options) {
        var observer = toObserver(observerOrCallback);
        var connectionData = _this._getConnectionData();
        if (!connectionData) {
          Observable.create(function (sink) {
            return sink.complete();
          }).subscribe(observer);
          return null;
        }
        var totalCount = connectionData.edgeCount + pageSize;
        if (options && options.force) {
          return _this._refetchConnection(totalCount, observerOrCallback);
        }

        var _ConnectionInterface$ = ConnectionInterface.get(),
            END_CURSOR = _ConnectionInterface$.END_CURSOR,
            START_CURSOR = _ConnectionInterface$.START_CURSOR;

        var cursor = connectionData.cursor;
        __webpack_require__(20)(cursor, 'ReactRelayPaginationContainer: Cannot `loadMore` without valid `%s` (got `%s`)', direction === FORWARD ? END_CURSOR : START_CURSOR, cursor);
        var paginatingVariables = {
          count: pageSize,
          cursor: cursor,
          totalCount: totalCount
        };
        var fetch = _this._fetchPage(paginatingVariables, observer, options);
        return { dispose: fetch.unsubscribe };
      };

      _this._legacyStringishRef = __webpack_require__(277)(_this, componentName);

      var relay = assertRelayContext(context.relay);
      var createFragmentSpecResolver = relay.environment.unstable_internal.createFragmentSpecResolver;

      _this._isARequestInFlight = false;
      _this._localVariables = null;
      _this._refetchSubscription = null;
      _this._resolver = createFragmentSpecResolver(relay, containerName, fragments, props, _this._handleFragmentDataUpdate);
      _this._relayContext = {
        environment: relay.environment,
        variables: relay.variables
      };
      _this.state = {
        data: _this._resolver.resolve(),
        relayEnvironment: relay.environment,
        relayProp: _this._buildRelayProp(relay),
        relayVariables: relay.variables
      };
      return _this;
    }

    /**
     * When new props are received, read data for the new props and subscribe
     * for updates. Props may be the same in which case previous data and
     * subscriptions can be reused.
     */


    Container.prototype.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
      var context = __webpack_require__(392)(nextContext);
      var relay = assertRelayContext(context.relay);
      var _relay$environment$un = relay.environment.unstable_internal,
          createFragmentSpecResolver = _relay$environment$un.createFragmentSpecResolver,
          getDataIDsFromObject = _relay$environment$un.getDataIDsFromObject;

      var prevIDs = getDataIDsFromObject(fragments, this.props);
      var nextIDs = getDataIDsFromObject(fragments, nextProps);

      // If the environment has changed or props point to new records then
      // previously fetched data and any pending fetches no longer apply:
      // - Existing references are on the old environment.
      // - Existing references are based on old variables.
      // - Pending fetches are for the previous records.
      if (this.state.relayEnvironment !== relay.environment || this.state.relayVariables !== relay.variables || !__webpack_require__(218)(prevIDs, nextIDs)) {
        this._release();
        this._localVariables = null;
        // Child containers rely on context.relay being mutated (for gDSFP).
        this._relayContext.environment = relay.environment;
        this._relayContext.variables = relay.variables;
        this._resolver = createFragmentSpecResolver(relay, containerName, fragments, nextProps, this._handleFragmentDataUpdate);
        this.setState({
          relayEnvironment: relay.environment,
          relayProp: this._buildRelayProp(relay),
          relayVariables: relay.variables
        });
      } else if (!this._localVariables) {
        this._resolver.setProps(nextProps);
      }
      var data = this._resolver.resolve();
      if (data !== this.state.data) {
        this.setState({ data: data });
      }
    };

    Container.prototype.componentWillUnmount = function componentWillUnmount() {
      this._release();
    };

    Container.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
      // Short-circuit if any Relay-related data has changed
      if (nextState.data !== this.state.data || nextState.relayProp !== this.state.relayProp) {
        return true;
      }
      // Otherwise, for convenience short-circuit if all non-Relay props
      // are scalar and equal
      var keys = Object.keys(nextProps);
      for (var ii = 0; ii < keys.length; ii++) {
        var _key = keys[ii];
        if (_key === 'relay') {
          if (nextState.relayEnvironment !== this.state.relayEnvironment || nextState.relayVariables !== this.state.relayVariables) {
            return true;
          }
        } else {
          if (!fragments.hasOwnProperty(_key) && !isScalarAndEqual(nextProps[_key], this.props[_key])) {
            return true;
          }
        }
      }
      return false;
    };

    Container.prototype._buildRelayProp = function _buildRelayProp(relay) {
      return {
        hasMore: this._hasMore,
        isLoading: this._isLoading,
        loadMore: this._loadMore,
        refetchConnection: this._refetchConnection,
        environment: relay.environment
      };
    };

    /**
     * Render new data for the existing props/context.
     */


    Container.prototype._getConnectionData = function _getConnectionData() {
      // Extract connection data and verify there are more edges to fetch
      var props = (0, _extends4['default'])({}, this.props, this.state.data);
      var connectionData = getConnectionFromProps(props);
      if (connectionData == null) {
        return null;
      }

      var _ConnectionInterface$2 = ConnectionInterface.get(),
          EDGES = _ConnectionInterface$2.EDGES,
          PAGE_INFO = _ConnectionInterface$2.PAGE_INFO,
          HAS_NEXT_PAGE = _ConnectionInterface$2.HAS_NEXT_PAGE,
          HAS_PREV_PAGE = _ConnectionInterface$2.HAS_PREV_PAGE,
          END_CURSOR = _ConnectionInterface$2.END_CURSOR,
          START_CURSOR = _ConnectionInterface$2.START_CURSOR;

      __webpack_require__(9)(typeof connectionData === 'object', 'ReactRelayPaginationContainer: Expected `getConnectionFromProps()` in `%s`' + 'to return `null` or a plain object with %s and %s properties, got `%s`.', componentName, EDGES, PAGE_INFO, connectionData);
      var edges = connectionData[EDGES];
      var pageInfo = connectionData[PAGE_INFO];
      if (edges == null || pageInfo == null) {
        return null;
      }
      __webpack_require__(9)(Array.isArray(edges), 'ReactRelayPaginationContainer: Expected `getConnectionFromProps()` in `%s`' + 'to return an object with %s: Array, got `%s`.', componentName, EDGES, edges);
      __webpack_require__(9)(typeof pageInfo === 'object', 'ReactRelayPaginationContainer: Expected `getConnectionFromProps()` in `%s`' + 'to return an object with %s: Object, got `%s`.', componentName, PAGE_INFO, pageInfo);
      var hasMore = direction === FORWARD ? pageInfo[HAS_NEXT_PAGE] : pageInfo[HAS_PREV_PAGE];
      var cursor = direction === FORWARD ? pageInfo[END_CURSOR] : pageInfo[START_CURSOR];
      if (typeof hasMore !== 'boolean' || edges.length !== 0 && typeof cursor === 'undefined') {
        __webpack_require__(20)(false, 'ReactRelayPaginationContainer: Cannot paginate without %s fields in `%s`. ' + 'Be sure to fetch %s (got `%s`) and %s (got `%s`).', PAGE_INFO, componentName, direction === FORWARD ? HAS_NEXT_PAGE : HAS_PREV_PAGE, hasMore, direction === FORWARD ? END_CURSOR : START_CURSOR, cursor);
        return null;
      }
      return {
        cursor: cursor,
        edgeCount: edges.length,
        hasMore: hasMore
      };
    };

    Container.prototype._getQueryFetcher = function _getQueryFetcher() {
      if (!this._queryFetcher) {
        this._queryFetcher = new (__webpack_require__(275))();
      }
      return this._queryFetcher;
    };

    Container.prototype._fetchPage = function _fetchPage(paginatingVariables, observer, options, refetchVariables) {
      var _this2 = this;

      var _assertRelayContext = assertRelayContext(this.context.relay),
          environment = _assertRelayContext.environment;

      var _environment$unstable = environment.unstable_internal,
          createOperationSelector = _environment$unstable.createOperationSelector,
          getRequest = _environment$unstable.getRequest,
          getVariablesFromObject = _environment$unstable.getVariablesFromObject;

      var props = (0, _extends4['default'])({}, this.props, this.state.data);
      var fragmentVariables = getVariablesFromObject(this._relayContext.variables, fragments, this.props);
      fragmentVariables = (0, _extends4['default'])({}, fragmentVariables, refetchVariables);
      var fetchVariables = connectionConfig.getVariables(props, {
        count: paginatingVariables.count,
        cursor: paginatingVariables.cursor
      },
      // Pass the variables used to fetch the fragments initially
      fragmentVariables);
      __webpack_require__(9)(typeof fetchVariables === 'object' && fetchVariables !== null, 'ReactRelayPaginationContainer: Expected `getVariables()` to ' + 'return an object, got `%s` in `%s`.', fetchVariables, componentName);
      fetchVariables = (0, _extends4['default'])({}, fetchVariables, refetchVariables);
      this._localVariables = fetchVariables;

      var cacheConfig = options ? { force: !!options.force } : undefined;
      if (cacheConfig && options && options.rerunParamExperimental) {
        cacheConfig.rerunParamExperimental = options.rerunParamExperimental;
      }
      var request = getRequest(connectionConfig.query);
      var operation = createOperationSelector(request, fetchVariables);

      var refetchSubscription = null;

      if (this._refetchSubscription) {
        this._refetchSubscription.unsubscribe();
      }

      var onNext = function onNext(payload, complete) {
        // Child containers rely on context.relay being mutated (for gDSFP).
        _this2._relayContext.environment = _this2.context.relay.environment;
        _this2._relayContext.variables = (0, _extends4['default'])({}, _this2.context.relay.variables, fragmentVariables);
        var prevData = _this2._resolver.resolve();
        _this2._resolver.setVariables(getFragmentVariables(fragmentVariables, paginatingVariables.totalCount));
        var nextData = _this2._resolver.resolve();

        // Workaround slightly different handling for connection in different
        // core implementations:
        // - Classic core requires the count to be explicitly incremented
        // - Modern core automatically appends new items, updating the count
        //   isn't required to see new data.
        //
        // `setState` is only required if changing the variables would change the
        // resolved data.
        // TODO #14894725: remove PaginationContainer equal check
        if (!__webpack_require__(218)(prevData, nextData)) {
          _this2.setState({ data: nextData }, complete);
        } else {
          complete();
        }
      };

      var cleanup = function cleanup() {
        if (_this2._refetchSubscription === refetchSubscription) {
          _this2._refetchSubscription = null;
          _this2._isARequestInFlight = false;
        }
      };

      this._isARequestInFlight = true;
      refetchSubscription = this._getQueryFetcher().execute({
        environment: environment,
        operation: operation,
        cacheConfig: cacheConfig,
        preservePreviousReferences: true
      }).mergeMap(function (payload) {
        return Observable.create(function (sink) {
          onNext(payload, function () {
            sink.next(); // pass void to public observer's `next`
            sink.complete();
          });
        });
      })
      // use do instead of finally so that observer's `complete` fires after cleanup
      ['do']({
        error: cleanup,
        complete: cleanup,
        unsubscribe: cleanup
      }).subscribe(observer || {});

      this._refetchSubscription = this._isARequestInFlight ? refetchSubscription : null;

      return refetchSubscription;
    };

    Container.prototype._release = function _release() {
      this._resolver.dispose();
      if (this._refetchSubscription) {
        this._refetchSubscription.unsubscribe();
        this._refetchSubscription = null;
        this._isARequestInFlight = false;
      }
      if (this._queryFetcher) {
        this._queryFetcher.dispose();
      }
    };

    Container.prototype.getChildContext = function getChildContext() {
      return { relay: this._relayContext };
    };

    Container.prototype.render = function render() {
      if (ComponentClass) {
        return __webpack_require__(0).createElement(ComponentClass, (0, _extends4['default'])({}, this.props, this.state.data, {
          // @TODO (T28161354) Remove the string ref fallback
          ref: this.props.componentRef || this._legacyStringishRef,
          relay: this.state.relayProp
        }));
      } else {
        // Stateless functional, doesn't support `ref`
        return __webpack_require__(0).createElement(Component, (0, _extends4['default'])({}, this.props, this.state.data, {
          relay: this.state.relayProp
        }));
      }
    };

    // @TODO (T28161354) Remove this once string ref usage is gone.


    return Container;
  }(__webpack_require__(0).Component);

  Container.displayName = containerName;
  Container.contextTypes = containerContextTypes;

  profileContainer(Container, 'ReactRelayPaginationContainer');

  return Container;
}

/**
 * Wrap the basic `createContainer()` function with logic to adapt to the
 * `context.relay.environment` in which it is rendered. Specifically, the
 * extraction of the environment-specific version of fragments in the
 * `fragmentSpec` is memoized once per environment, rather than once per
 * instance of the container constructed/rendered.
 */
function createContainer(Component, fragmentSpec, connectionConfig) {
  var Container = __webpack_require__(278)(Component, fragmentSpec, function (ComponentClass, fragments) {
    return createContainerWithFragments(ComponentClass, fragments, connectionConfig);
  });
  /* $FlowFixMe(>=0.53.0) This comment suppresses an error
   * when upgrading Flow's support for React. Common errors found when
   * upgrading Flow's React support are documented at
   * https://fburl.com/eq7bs81w */
  Container.childContextTypes = containerContextTypes;
  return Container;
}

module.exports = { createContainer: createContainer, createContainerWithFragments: createContainerWithFragments };

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var nullthrows = function nullthrows(x) {
  if (x != null) {
    return x;
  }
  throw new Error("Got unexpected null or undefined");
};

module.exports = nullthrows;

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _extends3 = _interopRequireDefault(__webpack_require__(209));

var _classCallCheck3 = _interopRequireDefault(__webpack_require__(207));

var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(243));

var _inherits3 = _interopRequireDefault(__webpack_require__(244));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__(250),
    getComponentName = _require.getComponentName,
    getReactComponent = _require.getReactComponent;

var _require2 = __webpack_require__(249),
    assertRelayContext = _require2.assertRelayContext;

var _require3 = __webpack_require__(276),
    profileContainer = _require3.profileContainer;

var _require4 = __webpack_require__(208),
    Observable = _require4.Observable,
    RelayProfiler = _require4.RelayProfiler,
    isScalarAndEqual = _require4.isScalarAndEqual;

var containerContextTypes = {
  relay: __webpack_require__(237).Relay
};

/**
 * Composes a React component class, returning a new class that intercepts
 * props, resolving them with the provided fragments and subscribing for
 * updates.
 */
function createContainerWithFragments(Component, fragments, taggedNode) {
  var ComponentClass = getReactComponent(Component);
  var componentName = getComponentName(Component);
  var containerName = 'Relay(' + componentName + ')';

  var Container = function (_React$Component) {
    (0, _inherits3['default'])(Container, _React$Component);

    function Container(props, context) {
      (0, _classCallCheck3['default'])(this, Container);

      var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

      _this._handleFragmentDataUpdate = function () {
        var profiler = RelayProfiler.profile('ReactRelayRefetchContainer.handleFragmentDataUpdate');
        var resolverFromThisUpdate = _this.state.resolver;
        _this.setState(function (updatedState) {
          // If this event belongs to the current data source, update.
          // Otherwise we should ignore it.
          if (resolverFromThisUpdate === updatedState.resolver) {
            return {
              data: updatedState.resolver.resolve()
            };
          }

          return null;
        }, profiler.stop);
      };

      _this._refetch = function (refetchVariables, renderVariables, observerOrCallback, options) {
        var _assertRelayContext = assertRelayContext(_this.context.relay),
            environment = _assertRelayContext.environment,
            rootVariables = _assertRelayContext.variables;

        var fetchVariables = typeof refetchVariables === 'function' ? refetchVariables(_this._getFragmentVariables()) : refetchVariables;
        fetchVariables = (0, _extends3['default'])({}, rootVariables, fetchVariables);
        var fragmentVariables = renderVariables ? (0, _extends3['default'])({}, rootVariables, renderVariables) : fetchVariables;
        var cacheConfig = options ? { force: !!options.force } : undefined;

        var observer = typeof observerOrCallback === 'function' ? {
          // callback is not exectued on complete or unsubscribe
          // for backward compatibility
          next: observerOrCallback,
          error: observerOrCallback
        } : observerOrCallback || {};

        var _this$context$relay$e = _this.context.relay.environment.unstable_internal,
            createOperationSelector = _this$context$relay$e.createOperationSelector,
            getRequest = _this$context$relay$e.getRequest;

        var query = getRequest(taggedNode);
        var operation = createOperationSelector(query, fetchVariables);

        // TODO: T26288752 find a better way
        /* eslint-disable lint/react-state-props-mutation */
        _this.state.localVariables = fetchVariables;
        /* eslint-enable lint/react-state-props-mutation */

        // Cancel any previously running refetch.
        _this._refetchSubscription && _this._refetchSubscription.unsubscribe();

        // Declare refetchSubscription before assigning it in .start(), since
        // synchronous completion may call callbacks .subscribe() returns.
        var refetchSubscription = void 0;
        _this._getQueryFetcher().execute({
          environment: environment,
          operation: operation,
          cacheConfig: cacheConfig,
          // TODO (T26430099): Cleanup old references
          preservePreviousReferences: true
        }).mergeMap(function (response) {
          // Child containers rely on context.relay being mutated (for gDSFP).
          // TODO: T26288752 find a better way
          /* eslint-disable lint/react-state-props-mutation */
          _this.state.relayContext.environment = _this.context.relay.environment;
          _this.state.relayContext.variables = fragmentVariables;
          /* eslint-enable lint/react-state-props-mutation */
          _this.state.resolver.setVariables(fragmentVariables);
          return Observable.create(function (sink) {
            return _this.setState({ data: _this.state.resolver.resolve() }, function () {
              sink.next();
              sink.complete();
            });
          });
        })['finally'](function () {
          // Finalizing a refetch should only clear this._refetchSubscription
          // if the finizing subscription is the most recent call.
          if (_this._refetchSubscription === refetchSubscription) {
            _this._refetchSubscription = null;
          }
        }).subscribe((0, _extends3['default'])({}, observer, {
          start: function start(subscription) {
            _this._refetchSubscription = refetchSubscription = subscription;
            observer.start && observer.start(subscription);
          }
        }));

        return {
          dispose: function dispose() {
            refetchSubscription && refetchSubscription.unsubscribe();
          }
        };
      };

      _this._legacyStringishRef = __webpack_require__(277)(_this, componentName);

      var relay = assertRelayContext(context.relay);
      var createFragmentSpecResolver = relay.environment.unstable_internal.createFragmentSpecResolver;

      _this._refetchSubscription = null;
      // Do not provide a subscription/callback here.
      // It is possible for this render to be interrupted or aborted,
      // In which case the subscription would cause a leak.
      // We will add the subscription in componentDidMount().
      var resolver = createFragmentSpecResolver(relay, containerName, fragments, props);
      _this.state = {
        data: resolver.resolve(),
        localVariables: null,
        relay: relay,
        relayContext: {
          environment: relay.environment,
          variables: relay.variables
        },
        relayEnvironment: relay.environment,
        relayProp: {
          environment: relay.environment,
          refetch: _this._refetch
        },
        prevProps: _this.props,
        relayVariables: relay.variables,
        resolver: resolver
      };
      return _this;
    }

    Container.prototype.componentDidMount = function componentDidMount() {
      this._subscribeToNewResolver();
    };

    Container.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      // If the environment has changed or props point to new records then
      // previously fetched data and any pending fetches no longer apply:
      // - Existing references are on the old environment.
      // - Existing references are based on old variables.
      // - Pending fetches are for the previous records.
      if (this.state.resolver !== prevState.resolver) {
        prevState.resolver.dispose();
        this._queryFetcher && this._queryFetcher.dispose();
        this._refetchSubscription && this._refetchSubscription.unsubscribe();

        this._subscribeToNewResolver();
      }
    };

    /**
     * When new props are received, read data for the new props and add it to
     * state. Props may be the same in which case previous data can be reused.
     */


    Container.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      // Any props change could impact the query, so we mirror props in state.
      // This is an unusual pattern, but necessary for this container usecase.
      var prevProps = prevState.prevProps;

      var relay = assertRelayContext(prevState.relay);

      var _relay$environment$un = relay.environment.unstable_internal,
          createFragmentSpecResolver = _relay$environment$un.createFragmentSpecResolver,
          getDataIDsFromObject = _relay$environment$un.getDataIDsFromObject;

      var prevIDs = getDataIDsFromObject(fragments, prevProps);
      var nextIDs = getDataIDsFromObject(fragments, nextProps);

      var resolver = prevState.resolver;

      // If the environment has changed or props point to new records then
      // previously fetched data and any pending fetches no longer apply:
      // - Existing references are on the old environment.
      // - Existing references are based on old variables.
      // - Pending fetches are for the previous records.
      if (prevState.relayEnvironment !== relay.environment || prevState.relayVariables !== relay.variables || !__webpack_require__(218)(prevIDs, nextIDs)) {
        // Child containers rely on context.relay being mutated (for gDSFP).
        var mutatedRelayContext = prevState.relayContext;
        mutatedRelayContext.environment = relay.environment;
        mutatedRelayContext.variables = relay.variables;

        // Do not provide a subscription/callback here.
        // It is possible for this render to be interrupted or aborted,
        // In which case the subscription would cause a leak.
        // We will add the subscription in componentDidUpdate().
        resolver = createFragmentSpecResolver(relay, containerName, fragments, nextProps);
        return {
          data: resolver.resolve(),
          localVariables: null,
          prevProps: nextProps,
          relayContext: mutatedRelayContext,
          relayEnvironment: relay.environment,
          relayProp: {
            environment: relay.environment,
            // refetch should never really change
            refetch: prevState.relayProp.refetch
          },
          relayVariables: relay.variables,
          resolver: resolver
        };
      } else if (!prevState.localVariables) {
        resolver.setProps(nextProps);
      }
      var data = resolver.resolve();
      if (data !== prevState.data) {
        return {
          data: data,
          prevProps: nextProps
        };
      }
      return null;
    };

    Container.prototype.componentWillUnmount = function componentWillUnmount() {
      this.state.resolver.dispose();
      this._queryFetcher && this._queryFetcher.dispose();
      this._refetchSubscription && this._refetchSubscription.unsubscribe();
    };

    Container.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
      // Short-circuit if any Relay-related data has changed
      if (nextState.data !== this.state.data || nextState.relayProp !== this.state.relayProp) {
        return true;
      }
      // Otherwise, for convenience short-circuit if all non-Relay props
      // are scalar and equal
      var keys = Object.keys(nextProps);
      for (var ii = 0; ii < keys.length; ii++) {
        var _key = keys[ii];
        if (_key === 'relay') {
          if (nextState.relayEnvironment !== this.state.relayEnvironment || nextState.relayVariables !== this.state.relayVariables) {
            return true;
          }
        } else {
          if (!fragments.hasOwnProperty(_key) && !isScalarAndEqual(nextProps[_key], this.props[_key])) {
            return true;
          }
        }
      }
      return false;
    };

    Container.prototype._subscribeToNewResolver = function _subscribeToNewResolver() {
      var _state = this.state,
          data = _state.data,
          resolver = _state.resolver;

      // Event listeners are only safe to add during the commit phase,
      // So they won't leak if render is interrupted or errors.

      resolver.setCallback(this._handleFragmentDataUpdate);

      // External values could change between render and commit.
      // Check for this case, even though it requires an extra store read.
      var maybeNewData = resolver.resolve();
      if (data !== maybeNewData) {
        this.setState({ data: maybeNewData });
      }
    };

    /**
     * Render new data for the existing props/context.
     */


    Container.prototype._getFragmentVariables = function _getFragmentVariables() {
      var getVariablesFromObject = this.context.relay.environment.unstable_internal.getVariablesFromObject;

      return getVariablesFromObject(this.context.relay.variables, fragments, this.props);
    };

    Container.prototype._getQueryFetcher = function _getQueryFetcher() {
      if (!this._queryFetcher) {
        this._queryFetcher = new (__webpack_require__(275))();
      }
      return this._queryFetcher;
    };

    Container.prototype.getChildContext = function getChildContext() {
      return { relay: this.state.relayContext };
    };

    Container.prototype.render = function render() {
      if (ComponentClass) {
        return __webpack_require__(0).createElement(ComponentClass, (0, _extends3['default'])({}, this.props, this.state.data, {
          // @TODO (T28161354) Remove the string ref fallback
          ref: this.props.componentRef || this._legacyStringishRef,
          relay: this.state.relayProp
        }));
      } else {
        // Stateless functional, doesn't support `ref`
        return __webpack_require__(0).createElement(Component, (0, _extends3['default'])({}, this.props, this.state.data, {
          relay: this.state.relayProp
        }));
      }
    };

    // @TODO (T28161354) Remove this once string ref usage is gone.


    return Container;
  }(__webpack_require__(0).Component);

  Container.displayName = containerName;
  Container.contextTypes = containerContextTypes;

  profileContainer(Container, 'ReactRelayRefetchContainer');

  return Container;
}

/**
 * Wrap the basic `createContainer()` function with logic to adapt to the
 * `context.relay.environment` in which it is rendered. Specifically, the
 * extraction of the environment-specific version of fragments in the
 * `fragmentSpec` is memoized once per environment, rather than once per
 * instance of the container constructed/rendered.
 */
function createContainer(Component, fragmentSpec, taggedNode) {
  var Container = __webpack_require__(278)(Component, fragmentSpec, function (ComponentClass, fragments) {
    return createContainerWithFragments(ComponentClass, fragments, taggedNode);
  });
  /* $FlowFixMe(>=0.53.0) This comment suppresses an error
   * when upgrading Flow's support for React. Common errors found when
   * upgrading Flow's React support are documented at
   * https://fburl.com/eq7bs81w */
  Container.childContextTypes = containerContextTypes;
  return Container;
}

module.exports = { createContainer: createContainer, createContainerWithFragments: createContainerWithFragments };

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 789);
/******/ })
/************************************************************************/
/******/ ({

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



// A transport for sending and listening for messages over the bridge.

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Ensure every call can be associated with call resolution using a nonce.
var nonceCounter = 0;

// Polyfill requestIdleCallback


// https://developer.mozilla.org/en-US/docs/Web/API/IdleDeadline


// The types of messages which are sent over the bridge.
var lastRunTime = 50;
var performanceNow = (typeof performance === 'undefined' ? 'undefined' : _typeof(performance)) === 'object' ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
var cancelIdle = typeof cancelIdleCallback === 'function' ? cancelIdleCallback : clearTimeout;
var requestIdle = typeof requestIdleCallback === 'function' ? requestIdleCallback : function (cb) {
  // Custom polyfill that runs the queue with a backoff.
  // If you change it, make sure it behaves reasonably well in Firefox.
  // Magic numbers determined by tweaking in Firefox.
  // There is no special meaning to them.
  return setTimeout(function () {
    var startTime = performanceNow();
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        // Upper limit of 50ms
        return startTime + 50 - performanceNow();
      }
    });
    lastRunTime = performanceNow() - startTime;
  }, Math.min(500, 3 * lastRunTime));
};

/**
 * Bridge:
 *
 * Responsible for serializing and sending messages between the Agent
 * (browser-side) and Frontend (console-side).
 *
 * It must be constructed with a BridgeTransport which can send serializable
 * data to the Bridge on the other side.
 */

var Bridge = function () {
  function Bridge(transport) {
    var _this = this;

    _classCallCheck(this, Bridge);

    this._transport = transport;
    this._incomingBuffer = [];
    this._outgoingBuffer = [];
    this._listeners = {};
    this._callers = {};
    this._defers = {};
    this._flushHandle = null;
    this._paused = false;
    transport.listen(function (message) {
      return _this._receiveMessage(message);
    });
  }

  _createClass(Bridge, [{
    key: 'on',
    value: function on(name, fn) {
      if (!this._listeners[name]) {
        this._listeners[name] = [fn];
      } else {
        this._listeners[name].push(fn);
      }
    }
  }, {
    key: 'off',
    value: function off(name, fn) {
      if (this._listeners[name]) {
        var i = this._listeners[name].indexOf(fn);
        if (i !== -1) {
          this._listeners[name].splice(i, 1);
        }
      }
    }
  }, {
    key: 'once',
    value: function once(name, fn) {
      var _this2 = this;

      var listenOnce = function listenOnce(data) {
        fn(data);
        _this2.off(name, listenOnce);
      };
      this.on(name, listenOnce);
    }
  }, {
    key: 'emit',
    value: function emit(name, data) {
      this._sendMessage({ type: 'event', name: name, data: data });
    }
  }, {
    key: 'onCall',
    value: function onCall(name, handler) {
      if (this._callers[name]) {
        throw new Error('Only one call handler per call name allowed.');
      }
      this._callers[name] = handler;
    }
  }, {
    key: 'call',
    value: function call(name) {
      var _this3 = this;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return new Promise(function (resolve, reject) {
        var nonce = ++nonceCounter;
        _this3._defers[nonce] = { resolve: resolve, reject: reject };
        _this3._sendMessage({ type: 'call', nonce: nonce, name: name, args: args });
      });
    }
  }, {
    key: 'pause',
    value: function pause() {
      this._sendMessage({ type: 'pause' });
    }
  }, {
    key: 'resume',
    value: function resume() {
      this._sendMessage({ type: 'resume' });
    }
  }, {
    key: '_receiveMessage',
    value: function _receiveMessage(message) {
      this._incomingBuffer.push(message);
      this._scheduleFlush();
    }
  }, {
    key: '_sendMessage',
    value: function _sendMessage(message) {
      this._outgoingBuffer.push(message);
      this._scheduleFlush();
    }
  }, {
    key: '_scheduleFlush',
    value: function _scheduleFlush() {
      var _this4 = this;

      if (!this._flushHandle && this._hasBufferedMessages()) {
        var timeout = this._paused ? 5000 : 500;
        this._flushHandle = requestIdle(function (deadline) {
          return _this4._flushWhileIdle(deadline);
        }, { timeout: timeout });
      }
    }
  }, {
    key: '_cancelFlush',
    value: function _cancelFlush() {
      if (this._flushHandle) {
        cancelIdle(this._flushHandle);
        this._flushHandle = null;
      }
    }
  }, {
    key: '_flushWhileIdle',
    value: function _flushWhileIdle(deadline) {
      this._flushHandle = null;

      var halfPast = deadline.timeRemaining() / 2;
      while (this._incomingBuffer.length > 0 && (deadline.didTimeout || deadline.timeRemaining() > halfPast)) {
        this._handleIncomingMessage(this._incomingBuffer.shift());
      }

      // Magic numbers were determined by tweaking in a heavy UI and seeing
      // what performs reasonably well both when DevTools are hidden and visible.
      // The goal is that we try to catch up but avoid blocking the UI.
      // When paused, it's okay to lag more, but not forever because otherwise
      // when user activates DevTools tab, it will freeze syncing.
      var chunkCount = this._paused ? 20 : 10;
      var chunkSize = Math.round(this._outgoingBuffer.length / chunkCount);
      var minChunkSize = this._paused ? 50 : 100;

      while (this._outgoingBuffer.length > 0 && (deadline.didTimeout || deadline.timeRemaining() > 0)) {
        var take = Math.min(this._outgoingBuffer.length, Math.max(minChunkSize, chunkSize));
        this._flushOutgoingMessages(this._outgoingBuffer.splice(0, take));
      }

      if (this._hasBufferedMessages()) {
        this._scheduleFlush();
      }
    }
  }, {
    key: '_hasBufferedMessages',
    value: function _hasBufferedMessages() {
      return this._incomingBuffer.length > 0 || this._outgoingBuffer.length > 0;
    }
  }, {
    key: '_handleIncomingMessage',
    value: function _handleIncomingMessage(message) {
      var _this5 = this;

      if (message.type === 'event') {
        var listeners = this._listeners[message.name];
        if (listeners) {
          listeners.forEach(function (listener) {
            return listener(message.data);
          });
        }
        return;
      }

      if (message.type === 'call') {
        new Promise(function (resolve) {
          var fn = _this5._callers[message.name];
          if (!fn) {
            throw new Error('unknown call: "' + message.name + '"');
          }
          resolve(fn.apply(undefined, _toConsumableArray(message.args)));
        }).then(function (value) {
          return _this5._sendMessage({ type: 'resolve', nonce: message.nonce, value: value });
        }, function (error) {
          return _this5._sendMessage({
            type: 'reject',
            nonce: message.nonce,
            error: error.message + '\n' + error.stack
          });
        });
        return;
      }

      if (message.type === 'resolve') {
        var deferred = this._defers[message.nonce];
        delete this._defers[message.nonce];
        deferred.resolve(message.value);
        return;
      }

      if (message.type === 'reject') {
        var _deferred = this._defers[message.nonce];
        delete this._defers[message.nonce];
        _deferred.reject(new Error(message.error));
        return;
      }

      if (message.type === 'pause') {
        this._paused = true;
        this._cancelFlush();
        return;
      }

      if (message.type === 'resume') {
        this._paused = false;
        this._scheduleFlush();
        return;
      }

      if (message.type === 'batch') {
        message.messages.forEach(function (batchedMessage) {
          _this5._handleIncomingMessage(batchedMessage);
        });
      }
    }
  }, {
    key: '_flushOutgoingMessages',
    value: function _flushOutgoingMessages(messages) {
      if (messages.length === 1) {
        this._transport.send(messages[0]);
      } else {
        this._transport.send({ type: 'batch', messages: messages });
      }
    }
  }]);

  return Bridge;
}();

exports.default = Bridge;

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installRelayDevTools = installRelayDevTools;

var _GlobalHook = __webpack_require__(286);

var _connectBackend = __webpack_require__(287);

var _connectBackend2 = _interopRequireDefault(_connectBackend);

var _Bridge = __webpack_require__(128);

var _Bridge2 = _interopRequireDefault(_Bridge);

var _wsClientTransport = __webpack_require__(325);

var _wsClientTransport2 = _interopRequireDefault(_wsClientTransport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Install the Relay DevTools backend in your application code so it can be
 * inspected with Relay DevTools standalone app.
 *
 * Ensure this function is called *before* creating a Relay Environment.
 *
 * By default, this will look for the Relay DevTools app at localhost:8734,
 * however both the port and host can be configured.
 */
function installRelayDevTools(port, host, prompt) {
  if (prompt !== null) {
    // eslint-disable-next-line no-console
    console.log(prompt || 'Installing Relay DevTools backend. Inspect Relay Environments in ' + 'this app by running `relay-devtools`. Remember to remove this ' + 'in production!');
  }
  if ((0, _GlobalHook.installGlobalHook)(global)) {
    (0, _wsClientTransport2.default)(host, port).then(function (transport) {
      var hook = (0, _GlobalHook.getGlobalHook)(global);
      if (hook) {
        var bridge = new _Bridge2.default(transport);
        (0, _connectBackend2.default)(hook, bridge);
      }
    });
  }
}

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _deepCopy = __webpack_require__(288);

var _deepCopy2 = _interopRequireDefault(_deepCopy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Agent:
 *
 * Responsible for listening to events on and exposing an inspection API for
 * a Relay Environment.
 */
var EnvironmentAgent = function () {
  function EnvironmentAgent(environment, id, emit) {
    _classCallCheck(this, EnvironmentAgent);

    this._environment = environment;
    this._id = id;
    this._emit = emit;
    this._snapshot = getInitialSnapshot(environment.getStore());

    // Monkey patch methods within Environment to follow various events.
    this._monkeyPatchExecute();
    this._monkeyPatchExecuteMutation();
    this._monkeyPatchNetwork();
    this._monkeyPatchStoreNotify();
  }

  _createClass(EnvironmentAgent, [{
    key: 'getEnvironment',
    value: function getEnvironment() {
      return this._environment;
    }
  }, {
    key: 'getId',
    value: function getId() {
      return this._id;
    }
  }, {
    key: 'getMatchingRecords',
    value: function getMatchingRecords(matchStr, matchType) {
      function isMatching(id, record) {
        if (matchType === 'idtype') {
          return id.includes(matchStr) || Boolean(record.__typename) && record.__typename.includes(matchStr);
        }
        if (matchType === 'id') {
          return id.includes(matchStr);
        }
        if (matchType === 'type') {
          return Boolean(record.__typename) && record.__typename.includes(matchStr);
        }
        throw new Error('Unknown match type: ' + matchType);
      }

      var source = this._environment.getStore().getSource();
      var recordMap = {};
      source.getRecordIDs().forEach(function (id) {
        var record = source.get(id);
        if (isMatching(id, record)) {
          recordMap[id] = record.__typename;
        }
      });
      return recordMap;
    }
  }, {
    key: 'getRecord',
    value: function getRecord(id) {
      return (0, _deepCopy2.default)(this._environment.getStore().getSource().get(id));
    }
  }, {
    key: '_monkeyPatchExecute',
    value: function _monkeyPatchExecute() {
      var _this = this;

      monkeyPatch(this._environment, 'execute', function (execute) {
        return _this._monkeyPatchExecuteUnsubscribe(execute);
      });
    }
  }, {
    key: '_monkeyPatchExecuteMutation',
    value: function _monkeyPatchExecuteMutation() {
      var _this2 = this;

      monkeyPatch(this._environment, 'executeMutation', function (executeMutation) {
        return _this2._monkeyPatchExecuteUnsubscribe(executeMutation);
      });
    }

    // When monkey-patching the network, "unsubscribe" events occur *after*
    // the corresponding publish, rather than *before* as "next" and "error"
    // events. To account for this, we monkey-patch environment's execute() and
    // executeMutation() methods for their "unsubscribe" events, which do in fact
    // occur *before* the corresponding publish.

  }, {
    key: '_monkeyPatchExecuteUnsubscribe',
    value: function _monkeyPatchExecuteUnsubscribe(execute) {
      var agent = this;
      return function () {
        var observable = execute.apply(this, arguments);
        // Get the network event corresponding to the "Request" start.
        var lastNetworkEvent = agent._lastNetworkEvent;
        return observable.do({
          unsubscribe: function unsubscribe() {
            return (
              // Produce a mirrored "Unsubscribe" network event.
              agent._networkEvent(_extends({}, lastNetworkEvent, {
                eventName: 'Unsubscribe'
              }))
            );
          }
        });
      };
    }
  }, {
    key: '_monkeyPatchNetwork',
    value: function _monkeyPatchNetwork() {
      var agent = this;
      monkeyPatch(this._environment.getNetwork(), 'execute', function (execute) {
        return function (operation, variables) {
          var seriesId = nextSeriesId();
          agent._networkEvent({
            eventName: 'Request',
            seriesId: seriesId,
            operation: operation,
            variables: variables
          });
          var observable = execute.apply(this, arguments);
          return observable.do({
            next: function next(payload) {
              return agent._networkEvent({
                eventName: 'Response',
                seriesId: seriesId,
                operation: operation,
                variables: variables,
                response: payload.response
              });
            },
            error: function error(_error) {
              return agent._networkEvent({
                eventName: 'Request Error',
                seriesId: seriesId,
                operation: operation,
                variables: variables,
                response: { isError: true, message: _error.message }
              });
            }
          });
        };
      });
    }
  }, {
    key: '_monkeyPatchStoreNotify',
    value: function _monkeyPatchStoreNotify() {
      var agent = this;
      monkeyPatch(this._environment.getStore(), 'notify', function (notify) {
        return function () {
          agent._runPublishEvent();
          notify.apply(this, arguments);
        };
      });
    }
  }, {
    key: '_networkEvent',
    value: function _networkEvent(partialEvent) {
      var _this3 = this;

      if (this._flushLastNetworkEventTimer) {
        this._flushLastNetworkEvent();
      }
      this._lastNetworkEvent = partialEvent;
      this._flushLastNetworkEventTimer = setTimeout(function () {
        return _this3._flushLastNetworkEvent();
      });
    }
  }, {
    key: '_flushLastNetworkEvent',
    value: function _flushLastNetworkEvent() {
      var data = this._lastNetworkEvent;
      this._clearLastNetworkEvent();
      this._emit('update', data);
    }
  }, {
    key: '_clearLastNetworkEvent',
    value: function _clearLastNetworkEvent() {
      clearTimeout(this._flushLastNetworkEventTimer);
      this._lastNetworkEvent = null;
      this._flushLastNetworkEventTimer = null;
    }
  }, {
    key: '_runPublishEvent',
    value: function _runPublishEvent() {
      var store = this._environment.getStore();
      var lastNetworkEvent = this._lastNetworkEvent;
      var networkEventName = lastNetworkEvent && lastNetworkEvent.eventName;
      var eventName = networkEventName === 'Request' ? 'Optimistic Update' : networkEventName === 'Unsubscribe' ? 'Revert Optimistic Update' : networkEventName ? networkEventName : 'Local Update';
      var seriesId = lastNetworkEvent ? lastNetworkEvent.seriesId : nextSeriesId();
      var snapshotChanges = getSnapshotChanges(store, this._snapshot, store.__getUpdatedRecordIDs());
      var data = _extends({}, lastNetworkEvent, snapshotChanges, {
        eventName: eventName,
        seriesId: seriesId
      });
      this._clearLastNetworkEvent();
      this._emit('update', data);
    }
  }]);

  return EnvironmentAgent;
}();

// Create an in-memory copy of the store which can be used to derive diffs
// on each publish event.


exports.default = EnvironmentAgent;
function getInitialSnapshot(store) {
  var snapshot = {};
  var source = store.getSource();
  var ids = source.getRecordIDs();
  ids.forEach(function (id) {
    snapshot[id] = (0, _deepCopy2.default)(source.get(id));
  });
  return snapshot;
}

// From a publish event, update the store snapshot with the latest data
// while returning a before/after of any updated records to visualize.
function getSnapshotChanges(store, snapshot, updatedRecordIds) {
  var snapshotBefore = {};
  var snapshotAfter = {};
  var source = store.getSource();
  var ids = Object.keys(updatedRecordIds);
  for (var ii = 0; ii < ids.length; ii++) {
    var _id = ids[ii];
    var beforeRecord = snapshot[_id];
    if (beforeRecord !== undefined) {
      snapshotBefore[_id] = beforeRecord;
    }
    // Always include records in "after", even if they're null.
    snapshotAfter[_id] = snapshot[_id] = (0, _deepCopy2.default)(source.get(_id));
  }
  return { snapshotBefore: snapshotBefore, snapshotAfter: snapshotAfter };
}

function monkeyPatch(source, method, patch) {
  source[method] = patch(source[method]);
}

var seriesIdCounter = 0;
var seriesIdPrefix = Math.random().toString(16).slice(-5);
function nextSeriesId() {
  return seriesIdPrefix + seriesIdCounter++;
}

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installGlobalHook = installGlobalHook;
exports.getGlobalHook = getGlobalHook;


/**
 * Hook:
 *
 * Responsible for installing itself as a global variable which Relay
 * Environment instances will look for to register themselves, and which
 * connectBackend will use to find environments.
 */
function installGlobalHook(window) {
  if (!window || window.__RELAY_DEVTOOLS_HOOK__) {
    return false;
  }
  var environments = [];
  var listeners = [];

  var hook = {
    registerEnvironment: function registerEnvironment(environment) {
      environments.push(environment);
      listeners.forEach(function (listener) {
        return listener(environment);
      });
    },
    getEnvironments: function getEnvironments() {
      return environments;
    },
    onEnvironment: function onEnvironment(listener) {
      listeners.push(listener);
    }
  };

  Object.defineProperty(window, '__RELAY_DEVTOOLS_HOOK__', {
    value: hook
  });

  return true;
}

function getGlobalHook(window) {
  return window && window.__RELAY_DEVTOOLS_HOOK__;
}

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = connectBackend;

var _EnvironmentAgent = __webpack_require__(285);

var _EnvironmentAgent2 = _interopRequireDefault(_EnvironmentAgent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * connectBackend:
 *
 * Given a Hook and a Bridge, create Agents for every Relay Environment found,
 * and attach Bridge callbacks to Agent methods.
 */
function connectBackend(hook, bridge) {
  var agents = [];

  function connectAgent(environment) {
    try {
      var emit = function emit(name, data) {
        bridge.emit(name, _extends({}, data, { environment: id }));
      };

      var id = agents.length;

      var agent = new _EnvironmentAgent2.default(environment, id, emit);
      agents.push(agent);
      bridge.emit('register');
    } catch (error) {
      /* eslint-disable no-console */
      console.error('Relay DevTools: Failed to connect agent');
      console.error(error);
      /* eslint-enable no-console */
    }
  }

  hook.getEnvironments().forEach(connectAgent);
  hook.onEnvironment(connectAgent);

  bridge.onCall('relayDebugger:getEnvironments', function () {
    return Object.keys(agents);
  });

  bridge.onCall('relayDebugger:getRecord', function (env, id) {
    return agents[env].getRecord(id);
  });

  bridge.onCall('relayDebugger:getMatchingRecords', function (env, search, type) {
    return agents[env].getMatchingRecords(search, type);
  });

  bridge.onCall('hasDetectedRelay', function () {
    return agents.length !== 0;
  });
}

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @format
 */



/**
 * A helper to create a deep clone of a plain value, Object, or Array.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = deepCopy;
function deepCopy(value) {
  if (Array.isArray(value)) {
    return value.map(deepCopy);
  }
  if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    var copy = {};
    for (var prop in value) {
      if (hasOwnProperty.call(value, prop)) {
        copy[prop] = deepCopy(value[prop]);
      }
    }
    return copy;
  }
  return value;
}

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wsClientTransport;


/**
 * Creates a WebSocket based BridgeTransport for use on the client, which can
 * be used to connect a Relay environment in a Browser that does not have a
 * debugging console, or in a React Native simulator.
 *
 * The resulting Promise will resolve when a WebSocket connection is
 * successfully connected.
 */
function wsClientTransport() {
  var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'localhost';
  var port = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8734;

  return new Promise(function (resolve, reject) {
    var connection = void 0;
    var reconnect = void 0;
    var messageListeners = [];

    connect();

    function connect() {
      try {
        connection = new WebSocket('ws://' + host + ':' + port);
        connection.onopen = handleOpen;
        connection.onclose = attemptReconnect;
        connection.onerror = attemptReconnect;
        connection.onmessage = handleMessage;
      } catch (error) {
        reject(error);
      }
    }

    function handleOpen() {
      var transport = {
        listen: function listen(fn) {
          messageListeners.push(fn);
        },
        send: function send(message) {
          sendMessage(message);
        }
      };
      resolve(transport);
    }

    function attemptReconnect() {
      connection = null;
      if (!reconnect) {
        reconnect = setTimeout(function () {
          reconnect = null;
          connect();
        }, 2000);
      }
    }

    function handleMessage(evt) {
      var data = void 0;
      try {
        data = JSON.parse(evt.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Relay DevTools: Failed to parse message: ' + evt.data);
      }
      if (data) {
        var message = data.relayDevTools;
        if (message) {
          messageListeners.forEach(function (fn) {
            return fn(message);
          });
        }
      }
    }

    function sendMessage(message) {
      if (connection && connection.readyState === WebSocket.OPEN) {
        connection.send(JSON.stringify({ relayDevTools: message }));
      }
    }
  });
}

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(283);


/***/ })

/******/ });
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 395 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(397);

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *          __        ___
 *    _____/ /___  __/ (_)____
 *   / ___/ __/ / / / / / ___/
 *  (__  ) /_/ /_/ / / (__  )
 * /____/\__/\__, /_/_/____/
 *          /____/
 *
 * light - weight css preprocessor @licence MIT
 */
(function (factory) {/* eslint-disable */
	 true ? (module['exports'] = factory(null)) :
		typeof define === 'function' && define['amd'] ? define(factory(null)) :
			(window['stylis'] = factory(null))
}(/** @param {*=} options */function factory (options) {/* eslint-disable */

	'use strict'

	/**
	 * Notes
	 *
	 * The ['<method name>'] pattern is used to support closure compiler
	 * the jsdoc signatures are also used to the same effect
	 *
	 * ----
	 *
	 * int + int + int === n4 [faster]
	 *
	 * vs
	 *
	 * int === n1 && int === n2 && int === n3
	 *
	 * ----
	 *
	 * switch (int) { case ints...} [faster]
	 *
	 * vs
	 *
	 * if (int == 1 && int === 2 ...)
	 *
	 * ----
	 *
	 * The (first*n1 + second*n2 + third*n3) format used in the property parser
	 * is a simple way to hash the sequence of characters
	 * taking into account the index they occur in
	 * since any number of 3 character sequences could produce duplicates.
	 *
	 * On the other hand sequences that are directly tied to the index of the character
	 * resolve a far more accurate measure, it's also faster
	 * to evaluate one condition in a switch statement
	 * than three in an if statement regardless of the added math.
	 *
	 * This allows the vendor prefixer to be both small and fast.
	 */

	var nullptn = /^\0+/g /* matches leading null characters */
	var formatptn = /[\0\r\f]/g /* matches new line, null and formfeed characters */
	var colonptn = /: */g /* splits animation rules */
	var cursorptn = /zoo|gra/ /* assert cursor varient */
	var transformptn = /([,: ])(transform)/g /* vendor prefix transform, older webkit */
	var animationptn = /,+\s*(?![^(]*[)])/g /* splits multiple shorthand notation animations */
	var propertiesptn = / +\s*(?![^(]*[)])/g /* animation properties */
	var elementptn = / *[\0] */g /* selector elements */
	var selectorptn = /,\r+?/g /* splits selectors */
	var andptn = /([\t\r\n ])*\f?&/g /* match & */
	var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g /* matches :global(.*) */
	var invalidptn = /\W+/g /* removes invalid characters from keyframes */
	var keyframeptn = /@(k\w+)\s*(\S*)\s*/ /* matches @keyframes $1 */
	var plcholdrptn = /::(place)/g /* match ::placeholder varient */
	var readonlyptn = /:(read-only)/g /* match :read-only varient */
	var beforeptn = /\s+(?=[{\];=:>])/g /* matches \s before ] ; = : */
	var afterptn = /([[}=:>])\s+/g /* matches \s after characters [ } = : */
	var tailptn = /(\{[^{]+?);(?=\})/g /* matches tail semi-colons ;} */
	var whiteptn = /\s{2,}/g /* matches repeating whitespace */
	var pseudoptn = /([^\(])(:+) */g /* pseudo element */
	var writingptn = /[svh]\w+-[tblr]{2}/ /* match writing mode property values */
	var gradientptn = /([\w-]+t\()/g /* match *gradient property */
	var supportsptn = /\(\s*(.*)\s*\)/g /* match supports (groups) */
	var propertyptn = /([\s\S]*?);/g /* match properties leading semicolon */
	var selfptn = /-self|flex-/g /* match flex- and -self in align-self: flex-*; */
	var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/ /* extrats :readonly or :placholder from selector */
	var trimptn = /[ \t]+$/ /* match tail whitspace */
	var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/ /* match max/min/fit-content, fill-available

	/* vendors */
	var webkit = '-webkit-'
	var moz = '-moz-'
	var ms = '-ms-'

	/* character codes */
	var SEMICOLON = 59 /* ; */
	var CLOSEBRACES = 125 /* } */
	var OPENBRACES = 123 /* { */
	var OPENPARENTHESES = 40 /* ( */
	var CLOSEPARENTHESES = 41 /* ) */
	var OPENBRACKET = 91 /* [ */
	var CLOSEBRACKET = 93 /* ] */
	var NEWLINE = 10 /* \n */
	var CARRIAGE = 13 /* \r */
	var TAB = 9 /* \t */
	var AT = 64 /* @ */
	var SPACE = 32 /*   */
	var AND = 38 /* & */
	var DASH = 45 /* - */
	var UNDERSCORE = 95 /* _ */
	var STAR = 42 /* * */
	var COMMA = 44 /* , */
	var COLON = 58 /* : */
	var SINGLEQUOTE = 39 /* ' */
	var DOUBLEQUOTE = 34 /* " */
	var FOWARDSLASH = 47 /* / */
	var GREATERTHAN = 62 /* > */
	var PLUS = 43 /* + */
	var TILDE = 126 /* ~ */
	var NULL = 0 /* \0 */
	var FORMFEED = 12 /* \f */
	var VERTICALTAB = 11 /* \v */

	/* special identifiers */
	var KEYFRAME = 107 /* k */
	var MEDIA = 109 /* m */
	var SUPPORTS = 115 /* s */
	var PLACEHOLDER = 112 /* p */
	var READONLY = 111 /* o */
	var IMPORT = 169 /* <at>i */
	var CHARSET = 163 /* <at>c */
	var DOCUMENT = 100 /* <at>d */
	var PAGE = 112 /* <at>p */

	var column = 1 /* current column */
	var line = 1 /* current line numebr */
	var pattern = 0 /* :pattern */

	var cascade = 1 /* #id h1 h2 vs h1#id h2#id  */
	var prefix = 1 /* vendor prefix */
	var escape = 1 /* escape :global() pattern */
	var compress = 0 /* compress output */
	var semicolon = 0 /* no/semicolon option */
	var preserve = 0 /* preserve empty selectors */

	/* empty reference */
	var array = []

	/* plugins */
	var plugins = []
	var plugged = 0
	var should = null

	/* plugin context */
	var POSTS = -2
	var PREPS = -1
	var UNKWN = 0
	var PROPS = 1
	var BLCKS = 2
	var ATRUL = 3

	/* plugin newline context */
	var unkwn = 0

	/* keyframe animation */
	var keyed = 1
	var key = ''

	/* selector namespace */
	var nscopealt = ''
	var nscope = ''

	/**
	 * Compile
	 *
	 * @param {Array<string>} parent
	 * @param {Array<string>} current
	 * @param {string} body
	 * @param {number} id
	 * @param {number} depth
	 * @return {string}
	 */
	function compile (parent, current, body, id, depth) {
		var bracket = 0 /* brackets [] */
		var comment = 0 /* comments /* // or /* */
		var parentheses = 0 /* functions () */
		var quote = 0 /* quotes '', "" */

		var first = 0 /* first character code */
		var second = 0 /* second character code */
		var code = 0 /* current character code */
		var tail = 0 /* previous character code */
		var trail = 0 /* character before previous code */
		var peak = 0 /* previous non-whitespace code */

		var counter = 0 /* count sequence termination */
		var context = 0 /* track current context */
		var atrule = 0 /* track @at-rule context */
		var pseudo = 0 /* track pseudo token index */
		var caret = 0 /* current character index */
		var format = 0 /* control character formating context */
		var insert = 0 /* auto semicolon insertion */
		var invert = 0 /* inverted selector pattern */
		var length = 0 /* generic length address */
		var eof = body.length /* end of file(length) */
		var eol = eof - 1 /* end of file(characters) */

		var char = '' /* current character */
		var chars = '' /* current buffer of characters */
		var child = '' /* next buffer of characters */
		var out = '' /* compiled body */
		var children = '' /* compiled children */
		var flat = '' /* compiled leafs */
		var selector /* generic selector address */
		var result /* generic address */

		// ...build body
		while (caret < eof) {
			code = body.charCodeAt(caret)

			// eof varient
			if (caret === eol) {
				// last character + noop context, add synthetic padding for noop context to terminate
				if (comment + quote + parentheses + bracket !== 0) {
					if (comment !== 0) {
						code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH
					}

					quote = parentheses = bracket = 0
					eof++
					eol++
				}
			}

			if (comment + quote + parentheses + bracket === 0) {
				// eof varient
				if (caret === eol) {
					if (format > 0) {
						chars = chars.replace(formatptn, '')
					}

					if (chars.trim().length > 0) {
						switch (code) {
							case SPACE:
							case TAB:
							case SEMICOLON:
							case CARRIAGE:
							case NEWLINE: {
								break
							}
							default: {
								chars += body.charAt(caret)
							}
						}

						code = SEMICOLON
					}
				}

				// auto semicolon insertion
				if (insert === 1) {
					switch (code) {
						// false flags
						case OPENBRACES:
						case CLOSEBRACES:
						case SEMICOLON:
						case DOUBLEQUOTE:
						case SINGLEQUOTE:
						case OPENPARENTHESES:
						case CLOSEPARENTHESES:
						case COMMA: {
							insert = 0
						}
						// ignore
						case TAB:
						case CARRIAGE:
						case NEWLINE:
						case SPACE: {
							break
						}
						// valid
						default: {
							insert = 0
							length = caret
							first = code
							caret--
							code = SEMICOLON

							while (length < eof) {
								switch (body.charCodeAt(length++)) {
									case NEWLINE:
									case CARRIAGE:
									case SEMICOLON: {
										++caret
										code = first
										length = eof
										break
									}
									case COLON: {
										if (format > 0) {
											++caret
											code = first
										}
									}
									case OPENBRACES: {
										length = eof
									}
								}
							}
						}
					}
				}

				// token varient
				switch (code) {
					case OPENBRACES: {
						chars = chars.trim()
						first = chars.charCodeAt(0)
						counter = 1
						length = ++caret

						while (caret < eof) {
							code = body.charCodeAt(caret)

							switch (code) {
								case OPENBRACES: {
									counter++
									break
								}
								case CLOSEBRACES: {
									counter--
									break
								}
							}

							if (counter === 0) {
								break
							}

							caret++
						}

						child = body.substring(length, caret)

						if (first === NULL) {
							first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0)
						}

						switch (first) {
							// @at-rule
							case AT: {
								if (format > 0) {
									chars = chars.replace(formatptn, '')
								}

								second = chars.charCodeAt(1)

								switch (second) {
									case DOCUMENT:
									case MEDIA:
									case SUPPORTS:
									case DASH: {
										selector = current
										break
									}
									default: {
										selector = array
									}
								}

								child = compile(current, selector, child, second, depth+1)
								length = child.length

								// preserve empty @at-rule
								if (preserve > 0 && length === 0) {
									length = chars.length
								}

								// execute plugins, @at-rule context
								if (plugged > 0) {
									selector = select(array, chars, invert)
									result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id)
									chars = selector.join('')

									if (result !== void 0) {
										if ((length = (child = result.trim()).length) === 0) {
											second = 0
											child = ''
										}
									}
								}

								if (length > 0) {
									switch (second) {
										case SUPPORTS: {
											chars = chars.replace(supportsptn, supports)
										}
										case DOCUMENT:
										case MEDIA:
										case DASH: {
											child = chars + '{' + child + '}'
											break
										}
										case KEYFRAME: {
											chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''))
											child = chars + '{' + child + '}'

											if (prefix === 1 || (prefix === 2 && vendor('@'+child, 3))) {
												child = '@' + webkit + child + '@' + child
											} else {
												child = '@' + child
											}
											break
										}
										default: {
											child = chars + child

											if (id === PAGE) {
												child = (out += child, '')
											}
										}
									}
								} else {
									child = ''
								}

								break
							}
							// selector
							default: {
								child = compile(current, select(current, chars, invert), child, id, depth+1)
							}
						}

						children += child

						// reset
						context = 0
						insert = 0
						pseudo = 0
						format = 0
						invert = 0
						atrule = 0
						chars = ''
						child = ''
						code = body.charCodeAt(++caret)
						break
					}
					case CLOSEBRACES:
					case SEMICOLON: {
						chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim()

						if ((length = chars.length) > 1) {
							// monkey-patch missing colon
							if (pseudo === 0) {
								first = chars.charCodeAt(0)

								// first character is a letter or dash, buffer has a space character
								if ((first === DASH || first > 96 && first < 123)) {
									length = (chars = chars.replace(' ', ':')).length
								}
							}

							// execute plugins, property context
							if (plugged > 0) {
								if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
									if ((length = (chars = result.trim()).length) === 0) {
										chars = '\0\0'
									}
								}
							}

							first = chars.charCodeAt(0)
							second = chars.charCodeAt(1)

							switch (first + second) {
								case NULL: {
									break
								}
								case IMPORT:
								case CHARSET: {
									flat += chars + body.charAt(caret)
									break
								}
								default: {
									if (chars.charCodeAt(length-1) === COLON)
										break

									out += property(chars, first, second, chars.charCodeAt(2))
								}
							}
						}

						// reset
						context = 0
						insert = 0
						pseudo = 0
						format = 0
						invert = 0
						chars = ''
						code = body.charCodeAt(++caret)
						break
					}
				}
			}

			// parse characters
			switch (code) {
				case CARRIAGE:
				case NEWLINE: {
					// auto insert semicolon
					if (comment + quote + parentheses + bracket + semicolon === 0) {
						// valid non-whitespace characters that
						// may precede a newline
						switch (peak) {
							case CLOSEPARENTHESES:
							case SINGLEQUOTE:
							case DOUBLEQUOTE:
							case AT:
							case TILDE:
							case GREATERTHAN:
							case STAR:
							case PLUS:
							case FOWARDSLASH:
							case DASH:
							case COLON:
							case COMMA:
							case SEMICOLON:
							case OPENBRACES:
							case CLOSEBRACES: {
								break
							}
							default: {
								// current buffer has a colon
								if (pseudo > 0) {
									insert = 1
								}
							}
						}
					}

					// terminate line comment
					if (comment === FOWARDSLASH) {
						comment = 0
					} else if (cascade + context === 0) {
						format = 1
						chars += '\0'
					}

					// execute plugins, newline context
					if (plugged * unkwn > 0) {
						proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth, id)
					}

					// next line, reset column position
					column = 1
					line++
					break
				}
				case SEMICOLON:
				case CLOSEBRACES: {
					if (comment + quote + parentheses + bracket === 0) {
						column++
						break
					}
				}
				default: {
					// increment column position
					column++

					// current character
					char = body.charAt(caret)

					// remove comments, escape functions, strings, attributes and prepare selectors
					switch (code) {
						case TAB:
						case SPACE: {
							if (quote + bracket + comment === 0) {
								switch (tail) {
									case COMMA:
									case COLON:
									case TAB:
									case SPACE: {
										char = ''
										break
									}
									default: {
										if (code !== SPACE) {
											char = ' '
										}
									}
								}
							}
							break
						}
						// escape breaking control characters
						case NULL: {
							char = '\\0'
							break
						}
						case FORMFEED: {
							char = '\\f'
							break
						}
						case VERTICALTAB: {
							char = '\\v'
							break
						}
						// &
						case AND: {
							// inverted selector pattern i.e html &
							if (quote + comment + bracket === 0 && cascade > 0) {
								invert = 1
								format = 1
								char = '\f' + char
							}
							break
						}
						// ::p<l>aceholder, l
						// :read-on<l>y, l
						case 108: {
							if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
								switch (caret - pseudo) {
									// ::placeholder
									case 2: {
										if (tail === PLACEHOLDER && body.charCodeAt(caret-3) === COLON) {
											pattern = tail
										}
									}
									// :read-only
									case 8: {
										if (trail === READONLY) {
											pattern = trail
										}
									}
								}
							}
							break
						}
						// :<pattern>
						case COLON: {
							if (quote + comment + bracket === 0) {
								pseudo = caret
							}
							break
						}
						// selectors
						case COMMA: {
							if (comment + parentheses + quote + bracket === 0) {
								format = 1
								char += '\r'
							}
							break
						}
						// quotes
						case DOUBLEQUOTE: {
							if (comment === 0) {
								quote = quote === code ? 0 : (quote === 0 ? code : quote)
							}
							break
						}
						case SINGLEQUOTE: {
							if (comment === 0) {
								quote = quote === code ? 0 : (quote === 0 ? code : quote)
							}
							break
						}
						// attributes
						case OPENBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket++
							}
							break
						}
						case CLOSEBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket--
							}
							break
						}
						// functions
						case CLOSEPARENTHESES: {
							if (quote + comment + bracket === 0) {
								parentheses--
							}
							break
						}
						case OPENPARENTHESES: {
							if (quote + comment + bracket === 0) {
								if (context === 0) {
									switch (tail*2 + trail*3) {
										// :matches
										case 533: {
											break
										}
										// :global, :not, :nth-child etc...
										default: {
											counter = 0
											context = 1
										}
									}
								}

								parentheses++
							}
							break
						}
						case AT: {
							if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
								atrule = 1
							}
							break
						}
						// block/line comments
						case STAR:
						case FOWARDSLASH: {
							if (quote + bracket + parentheses > 0) {
								break
							}

							switch (comment) {
								// initialize line/block comment context
								case 0: {
									switch (code*2 + body.charCodeAt(caret+1)*3) {
										// //
										case 235: {
											comment = FOWARDSLASH
											break
										}
										// /*
										case 220: {
											length = caret
											comment = STAR
											break
										}
									}
									break
								}
								// end block comment context
								case STAR: {
									if (code === FOWARDSLASH && tail === STAR) {
										// /*<!> ... */, !
										if (body.charCodeAt(length+2) === 33) {
											out += body.substring(length, caret+1)
										}
										char = ''
										comment = 0
									}
								}
							}
						}
					}

					// ignore comment blocks
					if (comment === 0) {
						// aggressive isolation mode, divide each individual selector
						// including selectors in :not function but excluding selectors in :global function
						if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
							switch (code) {
								case COMMA:
								case TILDE:
								case GREATERTHAN:
								case PLUS:
								case CLOSEPARENTHESES:
								case OPENPARENTHESES: {
									if (context === 0) {
										// outside of an isolated context i.e nth-child(<...>)
										switch (tail) {
											case TAB:
											case SPACE:
											case NEWLINE:
											case CARRIAGE: {
												char = char + '\0'
												break
											}
											default: {
												char = '\0' + char + (code === COMMA ? '' : '\0')
											}
										}
										format = 1
									} else {
										// within an isolated context, sleep untill it's terminated
										switch (code) {
											case OPENPARENTHESES: {
												context = ++counter
												break
											}
											case CLOSEPARENTHESES: {
												if ((context = --counter) === 0) {
													format = 1
													char += '\0'
												}
												break
											}
										}
									}
									break
								}
								case TAB:
								case SPACE: {
									switch (tail) {
										case NULL:
										case OPENBRACES:
										case CLOSEBRACES:
										case SEMICOLON:
										case COMMA:
										case FORMFEED:
										case TAB:
										case SPACE:
										case NEWLINE:
										case CARRIAGE: {
											break
										}
										default: {
											// ignore in isolated contexts
											if (context === 0) {
												format = 1
												char += '\0'
											}
										}
									}
								}
							}
						}

						// concat buffer of characters
						chars += char

						// previous non-whitespace character code
						if (code !== SPACE && code !== TAB) {
							peak = code
						}
					}
				}
			}

			// tail character codes
			trail = tail
			tail = code

			// visit every character
			caret++
		}

		length = out.length

		// preserve empty selector
 		if (preserve > 0) {
 			if (length === 0 && children.length === 0 && (current[0].length === 0) === false) {
 				if (id !== MEDIA || (current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0])) {
					length = current.join(',').length + 2
 				}
 			}
		}

		if (length > 0) {
			// cascade isolation mode?
			selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current

			// execute plugins, block context
			if (plugged > 0) {
				result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id)

				if (result !== void 0 && (out = result).length === 0) {
					return flat + out + children
				}
			}

			out = selector.join(',') + '{' + out + '}'

			if (prefix*pattern !== 0) {
				if (prefix === 2 && !vendor(out, 2))
					pattern = 0

				switch (pattern) {
					// ::read-only
					case READONLY: {
						out = out.replace(readonlyptn, ':'+moz+'$1')+out
						break
					}
					// ::placeholder
					case PLACEHOLDER: {
						out = (
							out.replace(plcholdrptn, '::' + webkit + 'input-$1') +
							out.replace(plcholdrptn, '::' + moz + '$1') +
							out.replace(plcholdrptn, ':' + ms + 'input-$1') + out
						)
						break
					}
				}

				pattern = 0
			}
		}

		return flat + out + children
	}

	/**
	 * Select
	 *
	 * @param {Array<string>} parent
	 * @param {string} current
	 * @param {number} invert
	 * @return {Array<string>}
	 */
	function select (parent, current, invert) {
		var selectors = current.trim().split(selectorptn)
		var out = selectors

		var length = selectors.length
		var l = parent.length

		switch (l) {
			// 0-1 parent selectors
			case 0:
			case 1: {
				for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
					out[i] = scope(selector, out[i], invert, l).trim()
				}
				break
			}
			// >2 parent selectors, nested
			default: {
				for (var i = 0, j = 0, out = []; i < length; ++i) {
					for (var k = 0; k < l; ++k) {
						out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim()
					}
				}
			}
		}

		return out
	}

	/**
	 * Scope
	 *
	 * @param {string} parent
	 * @param {string} current
	 * @param {number} invert
	 * @param {number} level
	 * @return {string}
	 */
	function scope (parent, current, invert, level) {
		var selector = current
		var code = selector.charCodeAt(0)

		// trim leading whitespace
		if (code < 33) {
			code = (selector = selector.trim()).charCodeAt(0)
		}

		switch (code) {
			// &
			case AND: {
				switch (cascade + level) {
					case 0:
					case 1: {
						if (parent.trim().length === 0) {
							break
						}
					}
					default: {
						return selector.replace(andptn, '$1'+parent.trim())
					}
				}
				break
			}
			// :
			case COLON: {
				switch (selector.charCodeAt(1)) {
					// g in :global
					case 103: {
						if (escape > 0 && cascade > 0) {
							return selector.replace(escapeptn, '$1').replace(andptn, '$1'+nscope)
						}
						break
					}
					default: {
						// :hover
						return parent.trim() + selector.replace(andptn, '$1'+parent.trim())
					}
				}
			}
			default: {
				// html &
				if (invert*cascade > 0 && selector.indexOf('\f') > 0) {
					return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1')+parent.trim())
				}
			}
		}

		return parent + selector
	}

	/**
	 * Property
	 *
	 * @param {string} input
	 * @param {number} first
	 * @param {number} second
	 * @param {number} third
	 * @return {string}
	 */
	function property (input, first, second, third) {
		var index = 0
		var out = input + ';'
		var hash = (first*2) + (second*3) + (third*4)
		var cache

		// animation: a, n, i characters
		if (hash === 944) {
			return animation(out)
		} else if (prefix === 0 || (prefix === 2 && !vendor(out, 1))) {
			return out
		}

		// vendor prefix
		switch (hash) {
			// text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
			case 1015: {
				// text-shadow/text-align/text-transform, a
				return out.charCodeAt(10) === 97 ? webkit + out + out : out
			}
			// filter/fill f, i, l
			case 951: {
				// filter, t
				return out.charCodeAt(3) === 116 ? webkit + out + out : out
			}
			// color/column, c, o, l
			case 963: {
				// column, n
				return out.charCodeAt(5) === 110 ? webkit + out + out : out
			}
			// box-decoration-break, b, o, x
			case 1009: {
				if (out.charCodeAt(4) !== 100) {
					break
				}
			}
			// mask, m, a, s
			// clip-path, c, l, i
			case 969:
			case 942: {
				return webkit + out + out
			}
			// appearance: a, p, p
			case 978: {
				return webkit + out + moz + out + out
			}
			// hyphens: h, y, p
			// user-select: u, s, e
			case 1019:
			case 983: {
				return webkit + out + moz + out + ms + out + out
			}
			// background/backface-visibility, b, a, c
			case 883: {
				// backface-visibility, -
				return out.charCodeAt(8) === DASH ? webkit + out + out : out
			}
			// flex: f, l, e
			case 932: {
				if (out.charCodeAt(4) === DASH) {
					switch (out.charCodeAt(5)) {
						// flex-grow, g
						case 103: {
							return webkit + 'box-' + out.replace('-grow', '') + webkit + out + ms + out.replace('grow', 'positive') + out
						}
						// flex-shrink, s
						case 115: {
							return webkit + out + ms + out.replace('shrink', 'negative') + out
						}
						// flex-basis, b
						case 98: {
							return webkit + out + ms + out.replace('basis', 'preferred-size') + out
						}
					}
				}

				return webkit + out + ms + out + out
			}
			// order: o, r, d
			case 964: {
				return webkit + out + ms + 'flex' + '-' + out + out
			}
			// justify-items/justify-content, j, u, s
			case 1023: {
				// justify-content, c
				if (out.charCodeAt(8) !== 99) {
					break
				}

				cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify')
				return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out
			}
			// cursor, c, u, r
			case 1005: {
				return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out
			}
			// writing-mode, w, r, i
			case 1000: {
				cache = out.substring(13).trim()
				index = cache.indexOf('-') + 1

				switch (cache.charCodeAt(0)+cache.charCodeAt(index)) {
					// vertical-lr
					case 226: {
						cache = out.replace(writingptn, 'tb')
						break
					}
					// vertical-rl
					case 232: {
						cache = out.replace(writingptn, 'tb-rl')
						break
					}
					// horizontal-tb
					case 220: {
						cache = out.replace(writingptn, 'lr')
						break
					}
					default: {
						return out
					}
				}

				return webkit + out + ms + cache + out
			}
			// position: sticky
			case 1017: {
				if (out.indexOf('sticky', 9) === -1) {
					return out
				}
			}
			// display(flex/inline-flex/inline-box): d, i, s
			case 975: {
				index = (out = input).length - 10
				cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim()

				switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7)|0)) {
					// inline-
					case 203: {
						// inline-box
						if (cache.charCodeAt(8) < 111) {
							break
						}
					}
					// inline-box/sticky
					case 115: {
						out = out.replace(cache, webkit+cache)+';'+out
						break
					}
					// inline-flex
					// flex
					case 207:
					case 102: {
						out = (
							out.replace(cache, webkit+(hash > 102 ? 'inline-' : '')+'box')+';'+
							out.replace(cache, webkit+cache)+';'+
							out.replace(cache, ms+cache+'box')+';'+
							out
						)
					}
				}

				return out + ';'
			}
			// align-items, align-center, align-self: a, l, i, -
			case 938: {
				if (out.charCodeAt(5) === DASH) {
					switch (out.charCodeAt(6)) {
						// align-items, i
						case 105: {
							cache = out.replace('-items', '')
							return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out
						}
						// align-self, s
						case 115: {
							return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out
						}
						// align-content
						default: {
							return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '').replace(selfptn, '') + out
						}
					}
				}
				break
			}
			// min/max
			case 973:
			case 989: {
				// min-/max- height/width/block-size/inline-size
				if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
					break
				}
			}
			// height/width: min-content / width: max-content
			case 931:
			case 953: {
				if (dimensionptn.test(input) === true) {
					// stretch
					if ((cache = input.substring(input.indexOf(':') + 1)).charCodeAt(0) === 115)
						return property(input.replace('stretch', 'fill-available'), first, second, third).replace(':fill-available', ':stretch')
					else
						return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace('fill-', '')) + out
				}
				break
			}
			// transform, transition: t, r, a
			case 962: {
				out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out

				// transitions
				if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
					return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out
				}

				break
			}
		}

		return out
	}

	/**
	 * Vendor
	 *
	 * @param {string} content
	 * @param {number} context
	 * @return {boolean}
	 */
	function vendor (content, context) {
		var index = content.indexOf(context === 1 ? ':' : '{')
		var key = content.substring(0, context !== 3 ? index : 10)
		var value = content.substring(index + 1, content.length - 1)

		return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context)
	}

	/**
	 * Supports
	 *
	 * @param {string} match
	 * @param {string} group
	 * @return {string}
	 */
	function supports (match, group) {
		var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2))

		return out !== group+';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '('+group+')'
	}

	/**
	 * Animation
	 *
	 * @param {string} input
	 * @return {string}
	 */
	function animation (input) {
		var length = input.length
		var index = input.indexOf(':', 9) + 1
		var declare = input.substring(0, index).trim()
		var out = input.substring(index, length-1).trim()

		switch (input.charCodeAt(9)*keyed) {
			case 0: {
				break
			}
			// animation-*, -
			case DASH: {
				// animation-name, n
				if (input.charCodeAt(10) !== 110) {
					break
				}
			}
			// animation/animation-name
			default: {
				// split in case of multiple animations
				var list = out.split((out = '', animationptn))

				for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
					var value = list[i]
					var items = value.split(propertiesptn)

					while (value = items[index]) {
						var peak = value.charCodeAt(0)

						if (keyed === 1 && (
							// letters
							(peak > AT && peak < 90) || (peak > 96 && peak < 123) || peak === UNDERSCORE ||
							// dash but not in sequence i.e --
							(peak === DASH && value.charCodeAt(1) !== DASH)
						)) {
							// not a number/function
							switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
								case 1: {
									switch (value) {
										// not a valid reserved keyword
										case 'infinite': case 'alternate': case 'backwards': case 'running':
										case 'normal': case 'forwards': case 'both': case 'none': case 'linear':
										case 'ease': case 'ease-in': case 'ease-out': case 'ease-in-out':
										case 'paused': case 'reverse': case 'alternate-reverse': case 'inherit':
										case 'initial': case 'unset': case 'step-start': case 'step-end': {
											break
										}
										default: {
											value += key
										}
									}
								}
							}
						}

						items[index++] = value
					}

					out += (i === 0 ? '' : ',') + items.join(' ')
				}
			}
		}

		out = declare + out + ';'

		if (prefix === 1 || (prefix === 2 && vendor(out, 1)))
			return webkit + out + out

		return out
	}

	/**
	 * Isolate
	 *
	 * @param {Array<string>} current
	 */
	function isolate (current) {
		for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
			// split individual elements in a selector i.e h1 h2 === [h1, h2]
			var elements = current[i].split(elementptn)
			var out = ''

			for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
				// empty element
				if ((size = (element = elements[j]).length) === 0 && l > 1) {
					continue
				}

				tail = out.charCodeAt(out.length-1)
				code = element.charCodeAt(0)
				padding = ''

				if (j !== 0) {
					// determine if we need padding
					switch (tail) {
						case STAR:
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case OPENPARENTHESES:  {
							break
						}
						default: {
							padding = ' '
						}
					}
				}

				switch (code) {
					case AND: {
						element = padding + nscopealt
					}
					case TILDE:
					case GREATERTHAN:
					case PLUS:
					case SPACE:
					case CLOSEPARENTHESES:
					case OPENPARENTHESES: {
						break
					}
					case OPENBRACKET: {
						element = padding + element + nscopealt
						break
					}
					case COLON: {
						switch (element.charCodeAt(1)*2 + element.charCodeAt(2)*3) {
							// :global
							case 530: {
								if (escape > 0) {
									element = padding + element.substring(8, size - 1)
									break
								}
							}
							// :hover, :nth-child(), ...
							default: {
								if (j < 1 || elements[j-1].length < 1) {
									element = padding + nscopealt + element
								}
							}
						}
						break
					}
					case COMMA: {
						padding = ''
					}
					default: {
						if (size > 1 && element.indexOf(':') > 0) {
							element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2')
						} else {
							element = padding + element + nscopealt
						}
					}
				}

				out += element
			}

			selector[i] = out.replace(formatptn, '').trim()
		}

		return selector
	}

	/**
	 * Proxy
	 *
	 * @param {number} context
	 * @param {string} content
	 * @param {Array<string>} selectors
	 * @param {Array<string>} parents
	 * @param {number} line
	 * @param {number} column
	 * @param {number} length
	 * @param {number} id
	 * @param {number} depth
	 * @param {number} at
	 * @return {(string|void|*)}
	 */
	function proxy (context, content, selectors, parents, line, column, length, id, depth, at) {
		for (var i = 0, out = content, next; i < plugged; ++i) {
			switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth, at)) {
				case void 0:
				case false:
				case true:
				case null: {
					break
				}
				default: {
					out = next
				}
			}
		}

		switch (out) {
			case void 0:
			case false:
			case true:
			case null:
			case content: {
				break
			}
			default: {
				return out
			}
		}
	}

	/**
	 * Minify
	 *
	 * @param {(string|*)} output
	 * @return {string}
	 */
	function minify (output) {
		return output
			.replace(formatptn, '')
			.replace(beforeptn, '')
			.replace(afterptn, '$1')
			.replace(tailptn, '$1')
			.replace(whiteptn, ' ')
	}

	/**
	 * Use
	 *
	 * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
	 */
	function use (plugin) {
		switch (plugin) {
			case void 0:
			case null: {
				plugged = plugins.length = 0
				break
			}
			default: {
				switch (plugin.constructor) {
					case Array: {
						for (var i = 0, length = plugin.length; i < length; ++i) {
							use(plugin[i])
						}
						break
					}
					case Function: {
						plugins[plugged++] = plugin
						break
					}
					case Boolean: {
						unkwn = !!plugin|0
					}
				}
			}
 		}

 		return use
	}

	/**
	 * Set
	 *
	 * @param {*} options
	 */
	function set (options) {
		for (var name in options) {
			var value = options[name]
			switch (name) {
				case 'keyframe': keyed = value|0; break
				case 'global': escape = value|0; break
				case 'cascade': cascade = value|0; break
				case 'compress': compress = value|0; break
				case 'semicolon': semicolon = value|0; break
				case 'preserve': preserve = value|0; break
				case 'prefix':
					should = null

					if (!value) {
						prefix = 0
					} else if (typeof value !== 'function') {
						prefix = 1
					} else {
						prefix = 2
						should = value
					}
			}
		}

		return set
	}

	/**
	 * Stylis
	 *
	 * @param {string} selector
	 * @param {string} input
	 * @return {*}
	 */
	function stylis (selector, input) {
		if (this !== void 0 && this.constructor === stylis) {
			return factory(selector)
		}

		// setup
		var ns = selector
		var code = ns.charCodeAt(0)

		// trim leading whitespace
		if (code < 33) {
			code = (ns = ns.trim()).charCodeAt(0)
		}

		// keyframe/animation namespace
		if (keyed > 0) {
			key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-')
		}

		// reset, used to assert if a plugin is moneky-patching the return value
		code = 1

		// cascade/isolate
		if (cascade === 1) {
			nscope = ns
		} else {
			nscopealt = ns
		}

		var selectors = [nscope]
		var result

		// execute plugins, pre-process context
		if (plugged > 0) {
			result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0)

			if (result !== void 0 && typeof result === 'string') {
				input = result
			}
		}

		// build
		var output = compile(array, selectors, input, 0, 0)

		// execute plugins, post-process context
		if (plugged > 0) {
			result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0)

			// bypass minification
			if (result !== void 0 && typeof(output = result) !== 'string') {
				code = 0
			}
		}

		// reset
		key = ''
		nscope = ''
		nscopealt = ''
		pattern = 0
		line = 1
		column = 1

		return compress*code === 0 ? output : minify(output)
	}

	stylis['use'] = use
	stylis['set'] = set

	if (options !== void 0) {
		set(options)
	}

	return stylis
}));


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		typeof define === 'function' && define['amd'] ? define(factory()) :
			(window['stylisRuleSheet'] = factory())
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(401);
} else {
  module.exports = __webpack_require__(402);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.4.0
 * react-is.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.forward_ref"):60112,n=b?Symbol.for("react.timeout"):60113;
function q(a){if("object"===typeof a&&null!==a){var p=a.$$typeof;switch(p){case c:switch(a=a.type,a){case l:case e:case g:case f:return a;default:switch(a=a&&a.$$typeof,a){case k:case m:case h:return a;default:return p}}case d:return p}}}exports.typeOf=q;exports.AsyncMode=l;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=m;exports.Fragment=e;exports.Profiler=g;exports.Portal=d;exports.StrictMode=f;
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===l||a===g||a===f||a===n||"object"===typeof a&&null!==a&&(a.$$typeof===h||a.$$typeof===k||a.$$typeof===m)};exports.isAsyncMode=function(a){return q(a)===l};exports.isContextConsumer=function(a){return q(a)===k};exports.isContextProvider=function(a){return q(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return q(a)===m};
exports.isFragment=function(a){return q(a)===e};exports.isProfiler=function(a){return q(a)===g};exports.isPortal=function(a){return q(a)===d};exports.isStrictMode=function(a){return q(a)===f};


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.4.0
 * react-is.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_TIMEOUT_TYPE = hasSymbol ? Symbol.for('react.timeout') : 0xead1;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_ASYNC_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_TIMEOUT_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var Portal = REACT_PORTAL_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;

function isAsyncMode(object) {
  return typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Profiler = Profiler;
exports.Portal = Portal;
exports.StrictMode = StrictMode;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isProfiler = isProfiler;
exports.isPortal = isPortal;
exports.isStrictMode = isStrictMode;
  })();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRelay = __webpack_require__(238);

var _Environment = __webpack_require__(251);

var _Environment2 = _interopRequireDefault(_Environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mutation = function mutation() {
    return __webpack_require__(443);
};
var AuthenticateUserMutation = function AuthenticateUserMutation(email, password, successCb, failCb) {
    var variables = {
        email: email,
        password: password,
        clientMutationId: ''
    };
    (0, _reactRelay.commitMutation)(_Environment2.default, {
        mutation: mutation,
        variables: variables,
        onCompleted: function onCompleted(res) {
            var auth = res.authenticateUser;
            if (auth) {
                var id = auth.id,
                    token = auth.token;

                successCb(id, token);
            } else {
                alert("email and password doesn't match.");
                failCb();
            }
        },
        onError: function onError(err) {
            console.error(err);
        }
    });
};
exports.default = AuthenticateUserMutation;

/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 0ee404ec8473861b4501e764ddf3a562
 */
/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AuthenticateUserMutationVariables = {|
  email: string,
  password: string,
|};
export type AuthenticateUserMutationResponse = {|
  +authenticateUser: ?{|
    +id: string,
    +token: string,
  |}
|};
*/
/*
mutation AuthenticateUserMutation(
  $email: String!
  $password: String!
) {
  authenticateUser(email: $email, password: $password) {
    id
    token
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
    var v0 = [{
        "kind": "LocalArgument",
        "name": "email",
        "type": "String!",
        "defaultValue": null
    }, {
        "kind": "LocalArgument",
        "name": "password",
        "type": "String!",
        "defaultValue": null
    }],
        v1 = [{
        "kind": "LinkedField",
        "alias": null,
        "name": "authenticateUser",
        "storageKey": null,
        "args": [{
            "kind": "Variable",
            "name": "email",
            "variableName": "email",
            "type": "String!"
        }, {
            "kind": "Variable",
            "name": "password",
            "variableName": "password",
            "type": "String!"
        }],
        "concreteType": "AuthenticateUserPayload",
        "plural": false,
        "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
        }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "token",
            "args": null,
            "storageKey": null
        }]
    }];
    return {
        "kind": "Request",
        "operationKind": "mutation",
        "name": "AuthenticateUserMutation",
        "id": null,
        "text": "mutation AuthenticateUserMutation(\n  $email: String!\n  $password: String!\n) {\n  authenticateUser(email: $email, password: $password) {\n    id\n    token\n  }\n}\n",
        "metadata": {},
        "fragment": {
            "kind": "Fragment",
            "name": "AuthenticateUserMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": v0,
            "selections": v1
        },
        "operation": {
            "kind": "Operation",
            "name": "AuthenticateUserMutation",
            "argumentDefinitions": v0,
            "selections": v1
        }
    };
}();
// prettier-ignore
node /*: any*/.hash = 'ed84b2d0611603bb09bbc310cc065908';
module.exports = node;

/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRelay = __webpack_require__(238);

var _Environment = __webpack_require__(251);

var _Environment2 = _interopRequireDefault(_Environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mutation = function mutation() {
    return __webpack_require__(445);
};
var SignupUserMutation = function SignupUserMutation(email, password, successCb, failCb, name) {
    var variables = {
        email: email,
        password: password,
        clientMutationId: '',
        name: name
    };
    (0, _reactRelay.commitMutation)(_Environment2.default, {
        mutation: mutation,
        variables: variables,
        onCompleted: function onCompleted(res) {
            var signup = res.signupUser;
            if (signup) {
                var id = signup.id,
                    token = signup.token;

                successCb(id, token);
            } else {
                alert('email is malformed.');
                failCb();
            }
        },
        onError: function onError(err) {
            return console.error(err);
        }
    });
};
exports.default = SignupUserMutation;

/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 25a0b0f3fdfb38ee36e9ee283c0d0b8b
 */
/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignupUserMutationVariables = {|
  name: string,
  email: string,
  password: string,
|};
export type SignupUserMutationResponse = {|
  +signupUser: ?{|
    +id: string,
    +token: string,
  |}
|};
*/
/*
mutation SignupUserMutation(
  $name: String!
  $email: String!
  $password: String!
) {
  signupUser(name: $name, email: $email, password: $password) {
    id
    token
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
    var v0 = [{
        "kind": "LocalArgument",
        "name": "name",
        "type": "String!",
        "defaultValue": null
    }, {
        "kind": "LocalArgument",
        "name": "email",
        "type": "String!",
        "defaultValue": null
    }, {
        "kind": "LocalArgument",
        "name": "password",
        "type": "String!",
        "defaultValue": null
    }],
        v1 = [{
        "kind": "LinkedField",
        "alias": null,
        "name": "signupUser",
        "storageKey": null,
        "args": [{
            "kind": "Variable",
            "name": "email",
            "variableName": "email",
            "type": "String!"
        }, {
            "kind": "Variable",
            "name": "name",
            "variableName": "name",
            "type": "String!"
        }, {
            "kind": "Variable",
            "name": "password",
            "variableName": "password",
            "type": "String!"
        }],
        "concreteType": "SignupUserPayload",
        "plural": false,
        "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
        }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "token",
            "args": null,
            "storageKey": null
        }]
    }];
    return {
        "kind": "Request",
        "operationKind": "mutation",
        "name": "SignupUserMutation",
        "id": null,
        "text": "mutation SignupUserMutation(\n  $name: String!\n  $email: String!\n  $password: String!\n) {\n  signupUser(name: $name, email: $email, password: $password) {\n    id\n    token\n  }\n}\n",
        "metadata": {},
        "fragment": {
            "kind": "Fragment",
            "name": "SignupUserMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": v0,
            "selections": v1
        },
        "operation": {
            "kind": "Operation",
            "name": "SignupUserMutation",
            "argumentDefinitions": v0,
            "selections": v1
        }
    };
}();
// prettier-ignore
node /*: any*/.hash = '52459796041239bb08ff9a4980ac1f0d';
module.exports = node;

/***/ })
]));
//# sourceMappingURL=Login.d0820dc7.js.map