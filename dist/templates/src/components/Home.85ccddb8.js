exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  padding: 2rem;\n  justify-content: center;\n  display: flex;\n'], ['\n  padding: 2rem;\n  justify-content: center;\n  display: flex;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRelay = __webpack_require__(26);

var _Environment = __webpack_require__(38);

var _Environment2 = _interopRequireDefault(_Environment);

var _userContext = __webpack_require__(41);

var _ListPage = __webpack_require__(42);

var _ListPage2 = _interopRequireDefault(_ListPage);

var _loading = __webpack_require__(39);

var _loading2 = _interopRequireDefault(_loading);

var _constants = __webpack_require__(40);

var _styledComponents = __webpack_require__(27);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeAllPostQuery = function HomeAllPostQuery() {
  return __webpack_require__(61);
};

var Home = function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));

    _this.queryRender = function (_ref) {
      var error = _ref.error,
          props = _ref.props;

      if (error) {
        return _react2.default.createElement(
          'div',
          null,
          error.message
        );
      }
      if (props) {
        var User = props.viewer.User;

        var userVal = User ? User : { id: null, name: null };
        return _react2.default.createElement(
          _userContext.UserProvider,
          { value: userVal },
          _react2.default.createElement(_ListPage2.default, { viewer: props.viewer })
        );
      }
      return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement('img', { src: _loading2.default, alt: 'Loading...' })
      );
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var userId = localStorage.getItem(_constants.GC_USER_ID);
      return _react2.default.createElement(_reactRelay.QueryRenderer, { environment: _Environment2.default, query: HomeAllPostQuery, variables: {
          id: userId,
          count: _constants.ITEMS_PER_PAGE
        }, render: this.queryRender });
    }
  }]);

  return Home;
}(_react.PureComponent);

exports.default = Home;

var Wrapper = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _relayRuntime = __webpack_require__(28);

var _relayDevtools = __webpack_require__(29);

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
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GC_USER_ID = exports.GC_USER_ID = 'graphcool-user-id';
var GC_AUTH_TOKEN = exports.GC_AUTH_TOKEN = 'graphcool-auth-token';
var ITEMS_PER_PAGE = exports.ITEMS_PER_PAGE = 5;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserConsumer = exports.UserProvider = undefined;

var _react = __webpack_require__(0);

var UserContext = (0, _react.createContext)({
    id: null,
    name: null
});
var UserProvider = exports.UserProvider = UserContext.Provider;
var UserConsumer = exports.UserConsumer = UserContext.Consumer;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  padding: 2rem;\n  text-transform: uppercase;\n'], ['\n  position: absolute;\n  top: 0;\n  padding: 2rem;\n  text-transform: uppercase;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  transition: opacity .15s ease-in;\n  &:hover,\n  &:focus {\n    opacity: .5;\n    transition: opacity .15s ease-in;\n  }\n'], ['\n  cursor: pointer;\n  transition: opacity .15s ease-in;\n  &:hover,\n  &:focus {\n    opacity: .5;\n    transition: opacity .15s ease-in;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 5.2rem;\n\n  div {\n    max-width: 100%;\n  }\n'], ['\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 5.2rem;\n\n  div {\n    max-width: 100%;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: ', ';\n  height: 5.2rem;\n'], ['\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: ', ';\n  height: 5.2rem;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  left: 0;\n  color: rgba( 0, 0, 0, .3 );\n  ', '\n'], ['\n  left: 0;\n  color: rgba( 0, 0, 0, .3 );\n  ', '\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  right: 0;\n  color: black;\n  ', '\n  ', '\n'], ['\n  right: 0;\n  color: black;\n  ', '\n  ', '\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  width: 100%;\n  max-width: 100%;\n  padding: 2rem;\n  justify-content: center;\n  display: flex;\n  background-color: transparent;\n  box-sizing: border-box;\n\n  img {\n    width: 5rem;\n    height: 5rem;\n    mix-blend-mode: multiply;\n  }\n'], ['\n  width: 100%;\n  max-width: 100%;\n  padding: 2rem;\n  justify-content: center;\n  display: flex;\n  background-color: transparent;\n  box-sizing: border-box;\n\n  img {\n    width: 5rem;\n    height: 5rem;\n    mix-blend-mode: multiply;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRelay = __webpack_require__(26);

var _reactRouterDom = __webpack_require__(5);

var _Post = __webpack_require__(43);

var _Post2 = _interopRequireDefault(_Post);

var _styledComponents = __webpack_require__(27);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _loading = __webpack_require__(39);

var _loading2 = _interopRequireDefault(_loading);

var _reactDeviceDetect = __webpack_require__(30);

var _reactInfiniteScroller = __webpack_require__(37);

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _userContext = __webpack_require__(41);

var _constants = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListPage = function (_PureComponent) {
  _inherits(ListPage, _PureComponent);

  function ListPage() {
    _classCallCheck(this, ListPage);

    var _this = _possibleConstructorReturn(this, (ListPage.__proto__ || Object.getPrototypeOf(ListPage)).apply(this, arguments));

    _this._loadMore = function () {
      var relay = _this.props.relay;

      if (!relay.hasMore()) return;
      relay.loadMore(_constants.ITEMS_PER_PAGE, function () {
        return null;
      });
    };
    return _this;
  }

  _createClass(ListPage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          viewer = _props.viewer,
          relay = _props.relay;

      var edges = viewer.allPosts && viewer.allPosts.edges;
      return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement(
          _userContext.UserConsumer,
          null,
          function (user) {
            return _react2.default.createElement(
              TopPart,
              { width: window.innerWidth },
              user.name && _react2.default.createElement(
                WelcomeUser,
                null,
                'Hello ',
                user.name,
                '!'
              ),
              _react2.default.createElement(
                StyledLink,
                { mobile: _reactDeviceDetect.isMobile ? 'true' : 'false', to: user.name ? '/create' : '/login' },
                '+ ',
                user.name ? 'New Post' : 'Sign In'
              )
            );
          }
        ),
        _react2.default.createElement(
          _reactInfiniteScroller2.default,
          { pageStart: 0, loadMore: this._loadMore, hasMore: relay.hasMore(), loader: _react2.default.createElement(
              PostsLoading,
              { key: 0 },
              _react2.default.createElement('img', { src: _loading2.default, alt: 'Loading...' })
            ) },
          edges && edges.map(function (_ref) {
            var node = _ref.node;
            return _react2.default.createElement(_Post2.default, { key: node.__id, post: node, viewerId: viewer.id });
          })
        )
      );
    }
  }]);

  return ListPage;
}(_react.PureComponent);

exports.default = (0, _reactRelay.createPaginationContainer)(ListPage, {
  viewer: function viewer() {
    return __webpack_require__(59);
  }
}, {
  direction: 'forward',
  query: function query() {
    return __webpack_require__(60);
  },
  getConnectionFromProps: function getConnectionFromProps(props) {
    return props.viewer && props.viewer.allPosts;
  },
  getVariables: function getVariables(props, _ref2) {
    var count = _ref2.count,
        cursor = _ref2.cursor;

    return {
      count: count,
      pCursor: cursor
    };
  }
});

var Decorated = (0, _styledComponents.css)(_templateObject);
var Dim = (0, _styledComponents.css)(_templateObject2);
var Wrapper = _styledComponents2.default.div(_templateObject3);
var TopPart = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.width > 700 ? 'transparent' : 'rgba(255, 255, 255, .5)';
});
var WelcomeUser = _styledComponents2.default.div(_templateObject5, Decorated);
var StyledLink = (0, _styledComponents2.default)(_reactRouterDom.Link)(_templateObject6, function (props) {
  return props.mobile === 'false' ? Dim : '';
}, Decorated);
var PostsLoading = _styledComponents2.default.div(_templateObject7);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  opacity: 1;\n  transition: opacity .15s ease-in;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    opacity: .5;\n    transition: opacity .15s ease-in;\n  }\n'], ['\n  opacity: 1;\n  transition: opacity .15s ease-in;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    opacity: .5;\n    transition: opacity .15s ease-in;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 365px;\n  padding: 1rem;\n  background-color: rgba(0, 0, 0, .05);\n  margin-bottom: 1.5rem;\n  box-sizing: border-box;\n'], ['\n  width: 365px;\n  padding: 1rem;\n  background-color: rgba(0, 0, 0, .05);\n  margin-bottom: 1.5rem;\n  box-sizing: border-box;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  background-size: cover;\n  background-image: ', ';\n  padding-bottom: 100%;\n  ', '\n'], ['\n  width: 100%;\n  background-size: cover;\n  background-image: ', ';\n  padding-bottom: 100%;\n  ', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding-top: 1rem;\n  position: relative;\n'], ['\n  padding-top: 1rem;\n  position: relative;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  float: right;\n  cursor: pointer;\n  color: #aaa;\n  text-align: center;\n  width: 1rem;\n'], ['\n  float: right;\n  cursor: pointer;\n  color: #aaa;\n  text-align: center;\n  width: 1rem;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: auto;\n  padding: .25rem;\n  background-color: white;\n  outline: 0;\n  display: ', ';\n  flex-flow: column;\n  align-items: flex-end;\n  justify-content: center;\n  margin-top: 1px;\n  margin-right: -15px;\n'], ['\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: auto;\n  padding: .25rem;\n  background-color: white;\n  outline: 0;\n  display: ', ';\n  flex-flow: column;\n  align-items: flex-end;\n  justify-content: center;\n  margin-top: 1px;\n  margin-right: -15px;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  color: ', ';\n  font-size: .875rem;\n  padding: .25rem .5rem;\n  vertical-align: middle;\n  ', '\n'], ['\n  color: ', ';\n  font-size: .875rem;\n  padding: .25rem .5rem;\n  vertical-align: middle;\n  ', '\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRelay = __webpack_require__(26);

var _reactDeviceDetect = __webpack_require__(30);

var _styledComponents = __webpack_require__(27);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _DeletePostMutation = __webpack_require__(44);

var _DeletePostMutation2 = _interopRequireDefault(_DeletePostMutation);

var _CreateComment = __webpack_require__(46);

var _CreateComment2 = _interopRequireDefault(_CreateComment);

var _reactFontawesome = __webpack_require__(31);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _faEllipsisV = __webpack_require__(33);

var _faEllipsisV2 = _interopRequireDefault(_faEllipsisV);

var _faPencilAlt = __webpack_require__(34);

var _faPencilAlt2 = _interopRequireDefault(_faPencilAlt);

var _userContext = __webpack_require__(41);

var _ListComments = __webpack_require__(51);

var _ListComments2 = _interopRequireDefault(_ListComments);

var _history = __webpack_require__(6);

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_PureComponent) {
  _inherits(Post, _PureComponent);

  function Post() {
    _classCallCheck(this, Post);

    var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).apply(this, arguments));

    _this.state = {
      menu: false,
      commentMode: false,
      editComment: null
    };
    _this.optionTooltip = (0, _react.createRef)();
    _this._openMenuPanel = function () {
      _this.setState({ menu: true }, function () {
        _this.optionTooltip.current.focus();
      });
    };
    _this._handleBlur = function (e) {
      var target = e instanceof FocusEvent ? e.target : e;
      var stateObj = { editComment: null };
      if (target.tagName && target.tagName === 'INPUT') stateObj['commentMode'] = false;else stateObj['menu'] = false;
      _this.setState(stateObj);
    };
    _this._editPost = function () {
      var post = _this.props.post;

      _this.setState({
        commentMode: true,
        menu: false
      }, function () {
        return _history2.default.push({
          pathname: '/create',
          state: { editPost: post }
        });
      });
    };
    _this._deletePost = function () {
      var _this$props = _this.props,
          post = _this$props.post,
          viewerId = _this$props.viewerId;

      if (window.confirm('Are you sure to delete: ' + post.description + '?')) {
        (0, _DeletePostMutation2.default)(post.id, viewerId);
      }
      _this.setState({ menu: false });
    };
    _this._addComment = function () {
      _this.setState({
        commentMode: true,
        menu: false
      });
    };
    _this._editComment = function (comment) {
      _this.setState({
        commentMode: true,
        editComment: comment
      });
    };
    return _this;
  }

  _createClass(Post, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          post = _props.post,
          viewerId = _props.viewerId;
      var _state = this.state,
          menu = _state.menu,
          commentMode = _state.commentMode,
          editComment = _state.editComment;
      var id = post.id,
          description = post.description,
          imageUrl = post.imageUrl,
          siteUrl = post.siteUrl,
          postedBy = post.postedBy;

      var posterId = postedBy && postedBy.id;
      return _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          'a',
          { href: siteUrl, target: '_blank', rel: 'noopener noreferrer' },
          _react2.default.createElement(ImgContainer, { url: imageUrl, mobile: _reactDeviceDetect.isMobile ? 'true' : 'false' })
        ),
        _react2.default.createElement(
          _userContext.UserConsumer,
          null,
          function (user) {
            return _react2.default.createElement(
              InfoContainer,
              null,
              description,
              user.id && _react2.default.createElement(
                VertOptionContainer,
                { onClick: _this2._openMenuPanel },
                _react2.default.createElement(_reactFontawesome2.default, { icon: _faEllipsisV2.default })
              ),
              _react2.default.createElement(
                Tooltip,
                { innerRef: _this2.optionTooltip, onBlur: _this2._handleBlur, menu: menu, tabIndex: -1 },
                _react2.default.createElement(
                  TooltipMenu,
                  { comment: true, onClick: _this2._addComment },
                  '+ Comment'
                ),
                posterId === user.id && _react2.default.createElement(
                  _react.Fragment,
                  null,
                  _react2.default.createElement(
                    TooltipMenu,
                    { edit: true, onClick: _this2._editPost },
                    _react2.default.createElement(_reactFontawesome2.default, { icon: _faPencilAlt2.default, size: 'xs' }),
                    '\xA0Edit'
                  ),
                  _react2.default.createElement(
                    TooltipMenu,
                    { onClick: _this2._deletePost },
                    'Delete'
                  )
                )
              ),
              _react2.default.createElement(_ListComments2.default, { post: post, handleEdit: _this2._editComment, userId: user.id }),
              _react2.default.createElement(_CreateComment2.default, { mode: commentMode, editComment: editComment, commentedPostId: id, viewerId: viewerId, user: user, handleBlur: _this2._handleBlur })
            );
          }
        )
      );
    }
  }]);

  return Post;
}(_react.PureComponent);

exports.default = (0, _reactRelay.createFragmentContainer)(Post, {
  post: function post() {
    return __webpack_require__(58);
  }
});

var Dim = (0, _styledComponents.css)(_templateObject);
var Container = _styledComponents2.default.div(_templateObject2);
var ImgContainer = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.url && 'url(' + props.url + ')';
}, function (props) {
  return props.mobile === 'false' ? Dim : '';
});
var InfoContainer = _styledComponents2.default.div(_templateObject4);
var VertOptionContainer = _styledComponents2.default.div(_templateObject5);
var Tooltip = _styledComponents2.default.div(_templateObject6, function (props) {
  return props.menu ? 'flex' : 'none';
});
var TooltipMenu = _styledComponents2.default.div(_templateObject7, function (props) {
  return props.comment || props.edit ? '#aaa' : 'red';
}, Dim);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRelay = __webpack_require__(26);

var _relayRuntime = __webpack_require__(28);

var _Environment = __webpack_require__(38);

var _Environment2 = _interopRequireDefault(_Environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mutation = function mutation() {
    return __webpack_require__(45);
};
var DeletePostMutation = function DeletePostMutation(postId, viewerId) {
    var variables = {
        input: {
            id: postId,
            clientMutationId: ""
        }
    };
    (0, _reactRelay.commitMutation)(_Environment2.default, {
        mutation: mutation,
        variables: variables,
        onError: function onError(err) {
            return console.error(err);
        },
        updater: function updater(proxyStore) {
            var deletePostField = proxyStore.getRootField('deletePost');
            var deletedId = deletePostField && deletePostField.getValue('deletedId');
            var viewerProxy = proxyStore.get(viewerId);
            var connection = _relayRuntime.ConnectionHandler.getConnection(viewerProxy, 'ListPage_allPosts');
            if (connection) _relayRuntime.ConnectionHandler.deleteNode(connection, deletedId);
        }
    });
};
exports.default = DeletePostMutation;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 824f3324a9073fd5e2693bc796517517
 */
/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeletePostInput = {
  id: string,
  clientMutationId: string,
};
export type DeletePostMutationVariables = {|
  input: DeletePostInput
|};
export type DeletePostMutationResponse = {|
  +deletePost: ?{|
    +deletedId: ?string
  |}
|};
*/
/*
mutation DeletePostMutation(
  $input: DeletePostInput!
) {
  deletePost(input: $input) {
    deletedId
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
    var v0 = [{
        "kind": "LocalArgument",
        "name": "input",
        "type": "DeletePostInput!",
        "defaultValue": null
    }],
        v1 = [{
        "kind": "LinkedField",
        "alias": null,
        "name": "deletePost",
        "storageKey": null,
        "args": [{
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "DeletePostInput!"
        }],
        "concreteType": "DeletePostPayload",
        "plural": false,
        "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "deletedId",
            "args": null,
            "storageKey": null
        }]
    }];
    return {
        "kind": "Request",
        "operationKind": "mutation",
        "name": "DeletePostMutation",
        "id": null,
        "text": "mutation DeletePostMutation(\n  $input: DeletePostInput!\n) {\n  deletePost(input: $input) {\n    deletedId\n  }\n}\n",
        "metadata": {},
        "fragment": {
            "kind": "Fragment",
            "name": "DeletePostMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": v0,
            "selections": v1
        },
        "operation": {
            "kind": "Operation",
            "name": "DeletePostMutation",
            "argumentDefinitions": v0,
            "selections": v1
        }
    };
}();
// prettier-ignore
node /*: any*/.hash = '19df18787c76c5a44dee131a2acd30b9';
module.exports = node;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  padding: 1rem;\n  margin-top: 1rem;\n  box-sizing: border-box;\n'], ['\n  width: 100%;\n  padding: 1rem;\n  margin-top: 1rem;\n  box-sizing: border-box;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _CreateCommentMutation = __webpack_require__(47);

var _CreateCommentMutation2 = _interopRequireDefault(_CreateCommentMutation);

var _reactAnimateHeight = __webpack_require__(32);

var _reactAnimateHeight2 = _interopRequireDefault(_reactAnimateHeight);

var _styledComponents = __webpack_require__(27);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _UpdateCommentMutation = __webpack_require__(49);

var _UpdateCommentMutation2 = _interopRequireDefault(_UpdateCommentMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateComment = function (_PureComponent) {
    _inherits(CreateComment, _PureComponent);

    function CreateComment() {
        _classCallCheck(this, CreateComment);

        var _this = _possibleConstructorReturn(this, (CreateComment.__proto__ || Object.getPrototypeOf(CreateComment)).apply(this, arguments));

        _this.state = {
            editing: false,
            content: ''
        };
        _this.commentNode = (0, _react.createRef)();
        _this._onBlur = function (e) {
            _this.setState({
                editing: false,
                content: ''
            }, function () {
                return _this.props.handleBlur(e);
            });
        };
        _this._handleChange = function (e) {
            var target = e.target;
            var content = target && target.value;
            _this.setState({ content: content });
        };
        _this._handleSubmit = function (e) {
            e.preventDefault();
            var content = _this.state.content;
            var _this$props = _this.props,
                commentedPostId = _this$props.commentedPostId,
                editComment = _this$props.editComment,
                user = _this$props.user;
            var id = user.id,
                name = user.name;

            var target = e.target;
            var targetInput = target.querySelector('input');
            if (editComment) {
                (0, _UpdateCommentMutation2.default)(content, editComment, function () {
                    return _this._onBlur(targetInput);
                });
            } else if (id && name) {
                (0, _CreateCommentMutation2.default)(content, id, name, commentedPostId, function () {
                    return _this._onBlur(targetInput);
                });
            }
        };
        return _this;
    }

    _createClass(CreateComment, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.mode) this.commentNode.current.focus();
        }
    }, {
        key: 'render',
        value: function render() {
            var mode = this.props.mode;
            var _state = this.state,
                editing = _state.editing,
                content = _state.content;

            return _react2.default.createElement(
                _reactAnimateHeight2.default,
                { duration: 500, height: mode ? 'auto' : 0 },
                _react2.default.createElement(
                    'form',
                    { onSubmit: this._handleSubmit },
                    _react2.default.createElement(Input, { type: 'text', innerRef: this.commentNode, placeholder: (editing ? 'Edit' : 'Add') + ' Comment', onChange: this._handleChange, onBlur: this._onBlur, value: content })
                )
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps, prevState) {
            var editComment = nextProps.editComment;

            if (editComment && !prevState.editing) {
                var content = editComment.content;

                return {
                    content: content,
                    editing: true
                };
            }
            return null;
        }
    }]);

    return CreateComment;
}(_react.PureComponent);

exports.default = CreateComment;

var Input = _styledComponents2.default.input(_templateObject);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRelay = __webpack_require__(26);

var _relayRuntime = __webpack_require__(28);

var _Environment = __webpack_require__(38);

var _Environment2 = _interopRequireDefault(_Environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mutation = function mutation() {
    return __webpack_require__(48);
};
var sharedUpdater = function sharedUpdater(store, postId, newComment) {
    var postProxy = store.get(postId);
    var connection = _relayRuntime.ConnectionHandler.getConnection(postProxy, 'ListComments_comments');
    var newEdge = _relayRuntime.ConnectionHandler.createEdge(store, connection, newComment, 'CommentEdge');
    if (connection) _relayRuntime.ConnectionHandler.insertEdgeAfter(connection, newEdge);
};
var tempID = 0;
var CreateCommentMutation = function CreateCommentMutation(content, commentedById, commentedByName, commentedPostId, callback) {
    var variables = {
        input: {
            content: content,
            commentedById: commentedById,
            commentedPostId: commentedPostId,
            clientMutationId: ""
        }
    };
    (0, _reactRelay.commitMutation)(_Environment2.default, {
        mutation: mutation,
        variables: variables,
        onCompleted: function onCompleted() {
            callback();
        },
        onError: function onError(err) {
            return console.error(err);
        },
        optimisticUpdater: function optimisticUpdater(proxyStore) {
            // 1 - create the `newPost` as a mock that can be added to the store
            tempID += 1;
            var id = 'client:newComment:' + tempID;
            var newComment = proxyStore.create(id, 'Comment');
            var commentedUser = proxyStore.create('client:commentedBy' + tempID, 'User');
            var commentedPost = proxyStore.create('client:commentedPost' + tempID, 'Post');
            newComment.setValue(id, 'id');
            newComment.setValue(content, 'content');
            commentedUser.setValue(commentedById, 'id');
            commentedUser.setValue(commentedByName, 'name');
            commentedPost.setValue(commentedPostId, 'id');
            newComment.setLinkedRecord(commentedUser, 'commentedBy');
            newComment.setLinkedRecord(commentedPost, 'commentedPost');
            sharedUpdater(proxyStore, commentedPostId, newComment);
        },
        updater: function updater(proxyStore) {
            var createCommentField = proxyStore.getRootField('createComment');
            var newComment = createCommentField && createCommentField.getLinkedRecord('comment');
            if (newComment) sharedUpdater(proxyStore, commentedPostId, newComment);
        }
    });
};
exports.default = CreateCommentMutation;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 42334fc7a78fc6ee526ef8cbddb98c2c
 */
/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateCommentInput = {
  content: string,
  commentedById?: ?string,
  commentedBy?: ?CommentcommentedByUser,
  commentedPostId?: ?string,
  commentedPost?: ?CommentcommentedPostPost,
  clientMutationId: string,
};
export type CommentcommentedByUser = {
  email: string,
  name: string,
  password: string,
  commentsIds?: ?$ReadOnlyArray<string>,
  comments?: ?$ReadOnlyArray<UsercommentsComment>,
  postsIds?: ?$ReadOnlyArray<string>,
  posts?: ?$ReadOnlyArray<UserpostsPost>,
};
export type UsercommentsComment = {
  content: string,
  commentedPostId?: ?string,
  commentedPost?: ?CommentcommentedPostPost,
};
export type CommentcommentedPostPost = {
  description: string,
  imageUrl: string,
  siteUrl: string,
  postedById?: ?string,
  postedBy?: ?PostpostedByUser,
  commentsIds?: ?$ReadOnlyArray<string>,
  comments?: ?$ReadOnlyArray<PostcommentsComment>,
};
export type PostpostedByUser = {
  email: string,
  name: string,
  password: string,
  commentsIds?: ?$ReadOnlyArray<string>,
  comments?: ?$ReadOnlyArray<UsercommentsComment>,
  postsIds?: ?$ReadOnlyArray<string>,
  posts?: ?$ReadOnlyArray<UserpostsPost>,
};
export type UserpostsPost = {
  description: string,
  imageUrl: string,
  siteUrl: string,
  commentsIds?: ?$ReadOnlyArray<string>,
  comments?: ?$ReadOnlyArray<PostcommentsComment>,
};
export type PostcommentsComment = {
  content: string,
  commentedById?: ?string,
  commentedBy?: ?CommentcommentedByUser,
};
export type CreateCommentMutationVariables = {|
  input: CreateCommentInput
|};
export type CreateCommentMutationResponse = {|
  +createComment: ?{|
    +comment: ?{|
      +id: string,
      +content: string,
      +commentedBy: ?{|
        +name: string
      |},
    |}
  |}
|};
*/
/*
mutation CreateCommentMutation(
  $input: CreateCommentInput!
) {
  createComment(input: $input) {
    comment {
      id
      content
      commentedBy {
        name
        id
      }
    }
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
    var v0 = [{
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateCommentInput!",
        "defaultValue": null
    }],
        v1 = [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateCommentInput!"
    }],
        v2 = {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    },
        v3 = {
        "kind": "ScalarField",
        "alias": null,
        "name": "content",
        "args": null,
        "storageKey": null
    },
        v4 = {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
    };
    return {
        "kind": "Request",
        "operationKind": "mutation",
        "name": "CreateCommentMutation",
        "id": null,
        "text": "mutation CreateCommentMutation(\n  $input: CreateCommentInput!\n) {\n  createComment(input: $input) {\n    comment {\n      id\n      content\n      commentedBy {\n        name\n        id\n      }\n    }\n  }\n}\n",
        "metadata": {},
        "fragment": {
            "kind": "Fragment",
            "name": "CreateCommentMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": v0,
            "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "createComment",
                "storageKey": null,
                "args": v1,
                "concreteType": "CreateCommentPayload",
                "plural": false,
                "selections": [{
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "comment",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Comment",
                    "plural": false,
                    "selections": [v2, v3, {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "commentedBy",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [v4]
                    }]
                }]
            }]
        },
        "operation": {
            "kind": "Operation",
            "name": "CreateCommentMutation",
            "argumentDefinitions": v0,
            "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "createComment",
                "storageKey": null,
                "args": v1,
                "concreteType": "CreateCommentPayload",
                "plural": false,
                "selections": [{
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "comment",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Comment",
                    "plural": false,
                    "selections": [v2, v3, {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "commentedBy",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [v4, v2]
                    }]
                }]
            }]
        }
    };
}();
// prettier-ignore
node /*: any*/.hash = '7eab78305f9b5ab686c8fdcbc5bb3caa';
module.exports = node;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRelay = __webpack_require__(26);

var _Environment = __webpack_require__(38);

var _Environment2 = _interopRequireDefault(_Environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mutation = function mutation() {
    return __webpack_require__(50);
};
function getOptimisticResponse(comment) {
    var id = comment.id,
        content = comment.content,
        commentedBy = comment.commentedBy;

    return {
        updateComment: {
            comment: {
                id: id,
                content: content,
                commentedBy: commentedBy
            }
        }
    };
}
var UpdateCommentMutation = function UpdateCommentMutation(content, comment, callback) {
    var id = comment.id,
        commentedBy = comment.commentedBy;

    var variables = {
        input: {
            id: id,
            content: content,
            commentedById: commentedBy.id,
            clientMutationId: ""
        }
    };
    (0, _reactRelay.commitMutation)(_Environment2.default, {
        mutation: mutation,
        variables: variables,
        onCompleted: function onCompleted(res) {
            console.log(res, _Environment2.default);
            callback();
        },
        onError: function onError(err) {
            return console.error(err);
        },
        optimisticResponse: getOptimisticResponse(comment)
    });
};
exports.default = UpdateCommentMutation;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 9fdd84af5a937cf080ec8a09492a5af7
 */
/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateCommentInput = {
  content?: ?string,
  id: string,
  commentedById?: ?string,
  commentedBy?: ?CommentcommentedByUser,
  commentedPostId?: ?string,
  commentedPost?: ?CommentcommentedPostPost,
  clientMutationId: string,
};
export type CommentcommentedByUser = {
  email: string,
  name: string,
  password: string,
  commentsIds?: ?$ReadOnlyArray<string>,
  comments?: ?$ReadOnlyArray<UsercommentsComment>,
  postsIds?: ?$ReadOnlyArray<string>,
  posts?: ?$ReadOnlyArray<UserpostsPost>,
};
export type UsercommentsComment = {
  content: string,
  commentedPostId?: ?string,
  commentedPost?: ?CommentcommentedPostPost,
};
export type CommentcommentedPostPost = {
  description: string,
  imageUrl: string,
  siteUrl: string,
  postedById?: ?string,
  postedBy?: ?PostpostedByUser,
  commentsIds?: ?$ReadOnlyArray<string>,
  comments?: ?$ReadOnlyArray<PostcommentsComment>,
};
export type PostpostedByUser = {
  email: string,
  name: string,
  password: string,
  commentsIds?: ?$ReadOnlyArray<string>,
  comments?: ?$ReadOnlyArray<UsercommentsComment>,
  postsIds?: ?$ReadOnlyArray<string>,
  posts?: ?$ReadOnlyArray<UserpostsPost>,
};
export type UserpostsPost = {
  description: string,
  imageUrl: string,
  siteUrl: string,
  commentsIds?: ?$ReadOnlyArray<string>,
  comments?: ?$ReadOnlyArray<PostcommentsComment>,
};
export type PostcommentsComment = {
  content: string,
  commentedById?: ?string,
  commentedBy?: ?CommentcommentedByUser,
};
export type UpdateCommentMutationVariables = {|
  input: UpdateCommentInput
|};
export type UpdateCommentMutationResponse = {|
  +updateComment: ?{|
    +comment: ?{|
      +id: string,
      +content: string,
      +commentedBy: ?{|
        +name: string
      |},
    |}
  |}
|};
*/
/*
mutation UpdateCommentMutation(
  $input: UpdateCommentInput!
) {
  updateComment(input: $input) {
    comment {
      id
      content
      commentedBy {
        name
        id
      }
    }
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
    var v0 = [{
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdateCommentInput!",
        "defaultValue": null
    }],
        v1 = [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdateCommentInput!"
    }],
        v2 = {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    },
        v3 = {
        "kind": "ScalarField",
        "alias": null,
        "name": "content",
        "args": null,
        "storageKey": null
    },
        v4 = {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
    };
    return {
        "kind": "Request",
        "operationKind": "mutation",
        "name": "UpdateCommentMutation",
        "id": null,
        "text": "mutation UpdateCommentMutation(\n  $input: UpdateCommentInput!\n) {\n  updateComment(input: $input) {\n    comment {\n      id\n      content\n      commentedBy {\n        name\n        id\n      }\n    }\n  }\n}\n",
        "metadata": {},
        "fragment": {
            "kind": "Fragment",
            "name": "UpdateCommentMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": v0,
            "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "updateComment",
                "storageKey": null,
                "args": v1,
                "concreteType": "UpdateCommentPayload",
                "plural": false,
                "selections": [{
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "comment",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Comment",
                    "plural": false,
                    "selections": [v2, v3, {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "commentedBy",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [v4]
                    }]
                }]
            }]
        },
        "operation": {
            "kind": "Operation",
            "name": "UpdateCommentMutation",
            "argumentDefinitions": v0,
            "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "updateComment",
                "storageKey": null,
                "args": v1,
                "concreteType": "UpdateCommentPayload",
                "plural": false,
                "selections": [{
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "comment",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Comment",
                    "plural": false,
                    "selections": [v2, v3, {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "commentedBy",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [v4, v2]
                    }]
                }]
            }]
        }
    };
}();
// prettier-ignore
node /*: any*/.hash = 'f9d4a8436d6e61486afc8ff949d75be7';
module.exports = node;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n\n  p {\n    color: #aaa;\n    font-weight: bold;\n    font-size: .875rem;\n    margin-bottom: 0;\n  }\n'], ['\n  width: 100%;\n\n  p {\n    color: #aaa;\n    font-weight: bold;\n    font-size: .875rem;\n    margin-bottom: 0;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  padding: 2rem;\n  justify-content: center;\n  display: flex;\n  background-color: transparent;\n  box-sizing: border-box;\n\n  img {\n    width: 5rem;\n    height: 5rem;\n    mix-blend-mode: multiply;\n  }\n'], ['\n  width: 100%;\n  padding: 2rem;\n  justify-content: center;\n  display: flex;\n  background-color: transparent;\n  box-sizing: border-box;\n\n  img {\n    width: 5rem;\n    height: 5rem;\n    mix-blend-mode: multiply;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n\n  div {\n    color: #aaa;\n    padding: 0 2rem;\n    cursor: pointer;\n\n    span {\n      font-size: .75rem;\n      vertical-align: middle;\n    }\n\n    &:active {\n      color: #444;\n    }\n  }\n'], ['\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n\n  div {\n    color: #aaa;\n    padding: 0 2rem;\n    cursor: pointer;\n\n    span {\n      font-size: .75rem;\n      vertical-align: middle;\n    }\n\n    &:active {\n      color: #444;\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRelay = __webpack_require__(26);

var _styledComponents = __webpack_require__(27);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactAnimateHeight = __webpack_require__(32);

var _reactAnimateHeight2 = _interopRequireDefault(_reactAnimateHeight);

var _reactFontawesome = __webpack_require__(31);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _faCaretUp = __webpack_require__(35);

var _faCaretUp2 = _interopRequireDefault(_faCaretUp);

var _faCaretDown = __webpack_require__(36);

var _faCaretDown2 = _interopRequireDefault(_faCaretDown);

var _loading = __webpack_require__(39);

var _loading2 = _interopRequireDefault(_loading);

var _constants = __webpack_require__(40);

var _Comment = __webpack_require__(52);

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListComments = function (_PureComponent) {
  _inherits(ListComments, _PureComponent);

  function ListComments() {
    _classCallCheck(this, ListComments);

    var _this = _possibleConstructorReturn(this, (ListComments.__proto__ || Object.getPrototypeOf(ListComments)).apply(this, arguments));

    _this.state = {
      commentLoading: false,
      endCursor: '',
      closable: false,
      contHeight: 'auto'
    };
    _this.listContainer = (0, _react.createRef)();
    _this._loadMore = function () {
      var relay = _this.props.relay;

      if (!relay.hasMore()) return;
      relay.loadMore(_constants.ITEMS_PER_PAGE, function (e) {
        return _this.setState({ closable: true });
      });
    };
    _this._closeMoreComments = function () {
      var relay = _this.props.relay;

      relay.refetchConnection(_constants.ITEMS_PER_PAGE, function (e) {
        return _this.setState({ closable: false });
      }, { after: null });
    };
    return _this;
  }

  _createClass(ListComments, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var post = this.props.post;

      var comments = post && post.comments;
      if (comments && comments.edges.length > 0) {
        var contHeight = this.listContainer.current.clientHeight;
        this.setState({ contHeight: contHeight });
      }
    }
  }, {
    key: 'getSnapshotBeforeUpdate',
    value: function getSnapshotBeforeUpdate(prevProps, prevState) {
      var prevCommentsEdgesLen = prevProps.post && prevProps.post.comments && prevProps.post.comments.edges && prevProps.post.comments.edges.length;
      var thisCommentsEdgesLen = this.props.post && this.props.post.comments && this.props.post.comments.edges && this.props.post.comments.edges.length > 0 && this.props.post.comments.edges.length;
      if (prevCommentsEdgesLen !== thisCommentsEdgesLen) {
        var container = this.listContainer.current;
        return container;
      }
      return null;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState, container) {
      if (container) {
        var contHeight = container.clientHeight;
        this.setState({ contHeight: contHeight });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          post = _props.post,
          handleEdit = _props.handleEdit,
          userId = _props.userId;
      var comments = post.comments,
          id = post.id;
      var edges = comments.edges,
          pageInfo = comments.pageInfo;

      var pageMore = pageInfo && pageInfo.hasNextPage;
      var _state = this.state,
          commentLoading = _state.commentLoading,
          closable = _state.closable,
          contHeight = _state.contHeight;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        edges.length > 0 && _react2.default.createElement(
          CommentsContainer,
          null,
          _react2.default.createElement(
            'p',
            null,
            'Comments'
          ),
          commentLoading && _react2.default.createElement(
            CommentsLoading,
            null,
            _react2.default.createElement('img', { src: _loading2.default, alt: 'Loading...' })
          ),
          _react2.default.createElement(
            _reactAnimateHeight2.default,
            { duration: 350, height: contHeight, easing: 'ease-in-out', style: { paddingTop: '1.25rem' } },
            _react2.default.createElement(
              'div',
              { ref: this.listContainer },
              !commentLoading && edges.map(function (_ref) {
                var node = _ref.node;
                return _react2.default.createElement(_Comment2.default, { key: node.__id, comment: node, postId: id, userId: userId, handleEdit: handleEdit });
              })
            )
          ),
          _react2.default.createElement(
            CommentMoreContainer,
            null,
            pageMore && _react2.default.createElement(
              'div',
              { onClick: this._loadMore },
              _react2.default.createElement(
                'span',
                null,
                'More '
              ),
              _react2.default.createElement(_reactFontawesome2.default, { icon: _faCaretDown2.default })
            ),
            closable && _react2.default.createElement(
              'div',
              { onClick: this._closeMoreComments },
              _react2.default.createElement(
                'span',
                null,
                'Close '
              ),
              _react2.default.createElement(_reactFontawesome2.default, { icon: _faCaretUp2.default })
            )
          )
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.post && nextProps.post.comments) {
        var endCursor = nextProps.post.comments.pageInfo.endCursor;

        return {
          endCursor: endCursor,
          commentLoading: false
        };
      }
      return null;
    }
  }]);

  return ListComments;
}(_react.PureComponent);

exports.default = (0, _reactRelay.createPaginationContainer)(ListComments, {
  post: function post() {
    return __webpack_require__(56);
  }
}, {
  direction: 'forward',
  query: function query() {
    return __webpack_require__(57);
  },
  getConnectionFromProps: function getConnectionFromProps(props) {
    return props.post && props.post.comments;
  },
  getVariables: function getVariables(props, _ref2) {
    var count = _ref2.count,
        cursor = _ref2.cursor;

    return {
      count: count,
      cCursor: cursor,
      id: props.post.id
    };
  }
});

var CommentsContainer = _styledComponents2.default.div(_templateObject);
var CommentsLoading = _styledComponents2.default.div(_templateObject2);
var CommentMoreContainer = _styledComponents2.default.div(_templateObject3);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  opacity: 1;\n  transition: opacity .15s ease-in;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    opacity: .5;\n    transition: opacity .15s ease-in;\n  }\n'], ['\n  opacity: 1;\n  transition: opacity .15s ease-in;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    opacity: .5;\n    transition: opacity .15s ease-in;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: .75rem;\n  padding: .25rem .5rem;\n'], ['\n  font-size: .75rem;\n  padding: .25rem .5rem;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  color: #aaa;\n'], ['\n  color: #aaa;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  color: #999;\n  font-weight: bold;\n  margin-right: .5rem;\n'], ['\n  color: #999;\n  font-weight: bold;\n  margin-right: .5rem;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  float: right;\n  cursor: pointer;\n  color: #aaa;\n  width: 1rem;\n  text-align: center;\n  display: ', ';\n'], ['\n  float: right;\n  cursor: pointer;\n  color: #aaa;\n  width: 1rem;\n  text-align: center;\n  display: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  position: absolute;\n  bottom: .5rem;\n  right: .75rem;\n  height: auto;\n  padding: .075rem;\n  background-color: white;\n  outline: 0;\n  display: ', ';\n  flex-flow: column;\n  align-items: flex-end;\n  justify-content: center;\n  margin-bottom: -7px;\n  margin-right: -10px;\n'], ['\n  position: absolute;\n  bottom: .5rem;\n  right: .75rem;\n  height: auto;\n  padding: .075rem;\n  background-color: white;\n  outline: 0;\n  display: ', ';\n  flex-flow: column;\n  align-items: flex-end;\n  justify-content: center;\n  margin-bottom: -7px;\n  margin-right: -10px;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  color: ', ';\n  font-size: .5rem;\n  padding: .25rem .5rem;\n  vertical-align: middle;\n  ', '\n'], ['\n  color: ', ';\n  font-size: .5rem;\n  padding: .25rem .5rem;\n  vertical-align: middle;\n  ', '\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRelay = __webpack_require__(26);

var _reactDeviceDetect = __webpack_require__(30);

var _reactFontawesome = __webpack_require__(31);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _faEllipsisV = __webpack_require__(33);

var _faEllipsisV2 = _interopRequireDefault(_faEllipsisV);

var _faPencilAlt = __webpack_require__(34);

var _faPencilAlt2 = _interopRequireDefault(_faPencilAlt);

var _styledComponents = __webpack_require__(27);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _DeleteCommentMutation = __webpack_require__(53);

var _DeleteCommentMutation2 = _interopRequireDefault(_DeleteCommentMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = function (_PureComponent) {
  _inherits(Comment, _PureComponent);

  function Comment() {
    _classCallCheck(this, Comment);

    var _this = _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).apply(this, arguments));

    _this.state = {
      menu: false,
      hover: false,
      commentMode: false
    };
    _this.optionTooltip = (0, _react.createRef)();
    _this._openMenuPanel = function () {
      _this.setState({ menu: true }, function () {
        _this.optionTooltip.current.focus();
      });
    };
    _this._handleMouseEnter = function (e) {
      var userId = _this.props.userId;
      var type = e.type;

      if (userId && (type === 'mouseenter' && !_reactDeviceDetect.isMobile || type === 'click' && _reactDeviceDetect.isMobile)) _this.setState({ hover: true });
    };
    _this._handleMouseLeave = function () {
      _this.setState({ hover: false });
    };
    _this._handleBlur = function (e) {
      var stateObj = _this.state;
      var target = e.target;
      var tagName = target && target.tagName;
      if (tagName === 'INPUT') stateObj['commentMode'] = false;else stateObj['menu'] = false;
      _this.setState(stateObj);
    };
    _this._handleEdit = function () {
      var _this$props = _this.props,
          comment = _this$props.comment,
          handleEdit = _this$props.handleEdit;

      _this.setState({ menu: false }, function () {
        return handleEdit(comment);
      });
    };
    _this._handleDelete = function () {
      var _this$props2 = _this.props,
          comment = _this$props2.comment,
          postId = _this$props2.postId;

      if (window.confirm('Are you sure to delete: ' + comment.content + '?')) {
        (0, _DeleteCommentMutation2.default)(comment.id, postId);
      }
      _this.setState({ menu: false });
    };
    return _this;
  }

  _createClass(Comment, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          comment = _props.comment,
          userId = _props.userId;
      var _state = this.state,
          menu = _state.menu,
          hover = _state.hover;

      var content = comment && comment.content;
      var commentedBy = comment && comment.commentedBy;
      var commentedId = commentedBy && commentedBy.id;
      var commentedName = commentedBy && commentedBy.name;
      var commentAuth = commentedId === userId;
      return _react2.default.createElement(
        Container,
        { onClick: this._handleMouseEnter, onMouseEnter: this._handleMouseEnter, onMouseLeave: this._handleMouseLeave },
        _react2.default.createElement(
          Writer,
          null,
          commentedName,
          ':'
        ),
        _react2.default.createElement(
          Content,
          null,
          content
        ),
        _react2.default.createElement(
          VertOptionContainer,
          { hover: hover, onClick: this._openMenuPanel },
          _react2.default.createElement(_reactFontawesome2.default, { size: 'sm', icon: _faEllipsisV2.default })
        ),
        _react2.default.createElement(
          Tooltip,
          { innerRef: this.optionTooltip, onBlur: this._handleBlur, menu: menu, tabIndex: -1 },
          commentAuth && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              TooltipMenu,
              { edit: true, onClick: this._handleEdit },
              _react2.default.createElement(_reactFontawesome2.default, { icon: _faPencilAlt2.default, size: 'xs' }),
              '\xA0Edit'
            ),
            _react2.default.createElement(
              TooltipMenu,
              { onClick: this._handleDelete },
              'Delete'
            )
          )
        )
      );
    }
  }]);

  return Comment;
}(_react.PureComponent);

exports.default = (0, _reactRelay.createFragmentContainer)(Comment, {
  comment: function comment() {
    return __webpack_require__(55);
  }
});

var Dim = (0, _styledComponents.css)(_templateObject);
var Container = _styledComponents2.default.div(_templateObject2);
var Content = _styledComponents2.default.span(_templateObject3);
var Writer = Content.extend(_templateObject4);
var VertOptionContainer = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.hover ? 'block' : 'none';
});
var Tooltip = _styledComponents2.default.div(_templateObject6, function (props) {
  return props.menu ? 'flex' : 'none';
});
var TooltipMenu = _styledComponents2.default.div(_templateObject7, function (props) {
  return props.comment || props.edit ? '#aaa' : 'red';
}, Dim);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRelay = __webpack_require__(26);

var _relayRuntime = __webpack_require__(28);

var _Environment = __webpack_require__(38);

var _Environment2 = _interopRequireDefault(_Environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mutation = function mutation() {
    return __webpack_require__(54);
};
var DeleteCommentMutation = function DeleteCommentMutation(commentId, postId) {
    var variables = {
        input: {
            id: commentId,
            clientMutationId: ""
        }
    };
    (0, _reactRelay.commitMutation)(_Environment2.default, {
        mutation: mutation,
        variables: variables,
        onError: function onError(err) {
            return console.error(err);
        },
        updater: function updater(proxyStore) {
            var deletePostField = proxyStore.getRootField('deleteComment');
            var deletedId = deletePostField && deletePostField.getValue('deletedId');
            var postProxy = proxyStore.get(postId);
            var connection = _relayRuntime.ConnectionHandler.getConnection(postProxy, 'ListComments_comments');
            if (connection) _relayRuntime.ConnectionHandler.deleteNode(connection, deletedId);
        }
    });
};
exports.default = DeleteCommentMutation;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash c006181bd898267a9074159964e0aa04
 */
/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteCommentInput = {
  id: string,
  clientMutationId: string,
};
export type DeleteCommentMutationVariables = {|
  input: DeleteCommentInput
|};
export type DeleteCommentMutationResponse = {|
  +deleteComment: ?{|
    +deletedId: ?string
  |}
|};
*/
/*
mutation DeleteCommentMutation(
  $input: DeleteCommentInput!
) {
  deleteComment(input: $input) {
    deletedId
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
    var v0 = [{
        "kind": "LocalArgument",
        "name": "input",
        "type": "DeleteCommentInput!",
        "defaultValue": null
    }],
        v1 = [{
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteComment",
        "storageKey": null,
        "args": [{
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "DeleteCommentInput!"
        }],
        "concreteType": "DeleteCommentPayload",
        "plural": false,
        "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "deletedId",
            "args": null,
            "storageKey": null
        }]
    }];
    return {
        "kind": "Request",
        "operationKind": "mutation",
        "name": "DeleteCommentMutation",
        "id": null,
        "text": "mutation DeleteCommentMutation(\n  $input: DeleteCommentInput!\n) {\n  deleteComment(input: $input) {\n    deletedId\n  }\n}\n",
        "metadata": {},
        "fragment": {
            "kind": "Fragment",
            "name": "DeleteCommentMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": v0,
            "selections": v1
        },
        "operation": {
            "kind": "Operation",
            "name": "DeleteCommentMutation",
            "argumentDefinitions": v0,
            "selections": v1
        }
    };
}();
// prettier-ignore
node /*: any*/.hash = 'c445f0a568fbe1dc8729526979f6cc40';
module.exports = node;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable */

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Comment_comment$ref: FragmentReference;
export type Comment_comment = {|
  +id: string,
  +content: string,
  +commentedBy: ?{|
    +id: string,
    +name: string,
  |},
  +commentedPost: ?{|
    +id: string
  |},
  +$refType: Comment_comment$ref,
|};
*/

var node /*: ConcreteFragment*/ = function () {
    var v0 = {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    };
    return {
        "kind": "Fragment",
        "name": "Comment_comment",
        "type": "Comment",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [v0, {
            "kind": "ScalarField",
            "alias": null,
            "name": "content",
            "args": null,
            "storageKey": null
        }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "commentedBy",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [v0, {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
            }]
        }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "commentedPost",
            "storageKey": null,
            "args": null,
            "concreteType": "Post",
            "plural": false,
            "selections": [v0]
        }]
    };
}();
// prettier-ignore
node /*: any*/.hash = '8bc781a29aec9412dbc4d0d66f24403d';
module.exports = node;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable */

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Comment_comment$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ListComments_post$ref: FragmentReference;
export type ListComments_post = {|
  +id: string,
  +comments: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +$fragmentRefs: Comment_comment$ref
      |}
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
      +endCursor: ?string,
    |},
    +count: number,
  |},
  +$refType: ListComments_post$ref,
|};
*/

var node /*: ConcreteFragment*/ = {
    "kind": "Fragment",
    "name": "ListComments_post",
    "type": "Post",
    "metadata": {
        "connection": [{
            "count": "count",
            "cursor": "cCursor",
            "direction": "forward",
            "path": ["comments"]
        }]
    },
    "argumentDefinitions": [{
        "kind": "RootArgument",
        "name": "count",
        "type": "Int"
    }, {
        "kind": "RootArgument",
        "name": "cCursor",
        "type": "String"
    }],
    "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    }, {
        "kind": "LinkedField",
        "alias": "comments",
        "name": "__ListComments_comments_connection",
        "storageKey": null,
        "args": null,
        "concreteType": "CommentConnection",
        "plural": false,
        "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "CommentEdge",
            "plural": true,
            "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Comment",
                "plural": false,
                "selections": [{
                    "kind": "FragmentSpread",
                    "name": "Comment_comment",
                    "args": null
                }, {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                }]
            }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
            }]
        }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
            }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
            }]
        }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "count",
            "args": null,
            "storageKey": null
        }]
    }]
};
// prettier-ignore
node /*: any*/.hash = 'bc9c84583205e9e1f74ba2c8cdb979cc';
module.exports = node;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash c25db4b3ffd0a07b3ed6cd3ab9bff7c9
 */
/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ListComments_post$ref = any;
export type ListCommentsPaginationQueryVariables = {|
  count: number,
  cCursor?: ?string,
  id?: ?string,
|};
export type ListCommentsPaginationQueryResponse = {|
  +viewer: {|
    +Post: ?{|
      +$fragmentRefs: ListComments_post$ref
    |}
  |}
|};
*/
/*
query ListCommentsPaginationQuery(
  $count: Int!
  $cCursor: String
  $id: ID
) {
  viewer {
    Post(id: $id) {
      ...ListComments_post
      id
    }
    id
  }
}

fragment ListComments_post on Post {
  id
  comments(first: $count, after: $cCursor) {
    edges {
      node {
        ...Comment_comment
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
    count
  }
}

fragment Comment_comment on Comment {
  id
  content
  commentedBy {
    id
    name
  }
  commentedPost {
    id
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
    var v0 = [{
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
    }, {
        "kind": "LocalArgument",
        "name": "cCursor",
        "type": "String",
        "defaultValue": null
    }, {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID",
        "defaultValue": null
    }],
        v1 = [{
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
        "type": "ID"
    }],
        v2 = {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    };
    return {
        "kind": "Request",
        "operationKind": "query",
        "name": "ListCommentsPaginationQuery",
        "id": null,
        "text": "query ListCommentsPaginationQuery(\n  $count: Int!\n  $cCursor: String\n  $id: ID\n) {\n  viewer {\n    Post(id: $id) {\n      ...ListComments_post\n      id\n    }\n    id\n  }\n}\n\nfragment ListComments_post on Post {\n  id\n  comments(first: $count, after: $cCursor) {\n    edges {\n      node {\n        ...Comment_comment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    count\n  }\n}\n\nfragment Comment_comment on Comment {\n  id\n  content\n  commentedBy {\n    id\n    name\n  }\n  commentedPost {\n    id\n  }\n}\n",
        "metadata": {},
        "fragment": {
            "kind": "Fragment",
            "name": "ListCommentsPaginationQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": v0,
            "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "viewer",
                "storageKey": null,
                "args": null,
                "concreteType": "Viewer",
                "plural": false,
                "selections": [{
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "Post",
                    "storageKey": null,
                    "args": v1,
                    "concreteType": "Post",
                    "plural": false,
                    "selections": [{
                        "kind": "FragmentSpread",
                        "name": "ListComments_post",
                        "args": null
                    }]
                }]
            }]
        },
        "operation": {
            "kind": "Operation",
            "name": "ListCommentsPaginationQuery",
            "argumentDefinitions": v0,
            "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "viewer",
                "storageKey": null,
                "args": null,
                "concreteType": "Viewer",
                "plural": false,
                "selections": [{
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "Post",
                    "storageKey": null,
                    "args": v1,
                    "concreteType": "Post",
                    "plural": false,
                    "selections": [v2, {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "comments",
                        "storageKey": null,
                        "args": [{
                            "kind": "Variable",
                            "name": "after",
                            "variableName": "cCursor",
                            "type": "String"
                        }, {
                            "kind": "Variable",
                            "name": "first",
                            "variableName": "count",
                            "type": "Int"
                        }],
                        "concreteType": "CommentConnection",
                        "plural": false,
                        "selections": [{
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "CommentEdge",
                            "plural": true,
                            "selections": [{
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Comment",
                                "plural": false,
                                "selections": [v2, {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "content",
                                    "args": null,
                                    "storageKey": null
                                }, {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "commentedBy",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "User",
                                    "plural": false,
                                    "selections": [v2, {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "name",
                                        "args": null,
                                        "storageKey": null
                                    }]
                                }, {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "commentedPost",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "Post",
                                    "plural": false,
                                    "selections": [v2]
                                }, {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "__typename",
                                    "args": null,
                                    "storageKey": null
                                }]
                            }, {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "cursor",
                                "args": null,
                                "storageKey": null
                            }]
                        }, {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "pageInfo",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "PageInfo",
                            "plural": false,
                            "selections": [{
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "hasNextPage",
                                "args": null,
                                "storageKey": null
                            }, {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "endCursor",
                                "args": null,
                                "storageKey": null
                            }]
                        }, {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "count",
                            "args": null,
                            "storageKey": null
                        }]
                    }, {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "comments",
                        "args": [{
                            "kind": "Variable",
                            "name": "after",
                            "variableName": "cCursor",
                            "type": "String"
                        }, {
                            "kind": "Variable",
                            "name": "first",
                            "variableName": "count",
                            "type": "Int"
                        }],
                        "handle": "connection",
                        "key": "ListComments_comments",
                        "filters": []
                    }]
                }, v2]
            }]
        }
    };
}();
// prettier-ignore
node /*: any*/.hash = 'b0938554bfc5325b4b477def4746b3bd';
module.exports = node;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable */

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ListComments_post$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Post_post$ref: FragmentReference;
export type Post_post = {|
  +id: string,
  +description: string,
  +imageUrl: string,
  +siteUrl: string,
  +postedBy: ?{|
    +id: string,
    +name: string,
  |},
  +$fragmentRefs: ListComments_post$ref,
  +$refType: Post_post$ref,
|};
*/

var node /*: ConcreteFragment*/ = function () {
    var v0 = {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    };
    return {
        "kind": "Fragment",
        "name": "Post_post",
        "type": "Post",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [v0, {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
        }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "imageUrl",
            "args": null,
            "storageKey": null
        }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "siteUrl",
            "args": null,
            "storageKey": null
        }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "postedBy",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [v0, {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
            }]
        }, {
            "kind": "FragmentSpread",
            "name": "ListComments_post",
            "args": null
        }]
    };
}();
// prettier-ignore
node /*: any*/.hash = '51aec05c9c1cc80e60f5ceea3dfd0035';
module.exports = node;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable */

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Post_post$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ListPage_viewer$ref: FragmentReference;
export type ListPage_viewer = {|
  +id: string,
  +allPosts: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +$fragmentRefs: Post_post$ref
      |}
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
      +endCursor: ?string,
    |},
  |},
  +$refType: ListPage_viewer$ref,
|};
*/

var node /*: ConcreteFragment*/ = {
    "kind": "Fragment",
    "name": "ListPage_viewer",
    "type": "Viewer",
    "metadata": {
        "connection": [{
            "count": "count",
            "cursor": "pCursor",
            "direction": "forward",
            "path": ["allPosts"]
        }]
    },
    "argumentDefinitions": [{
        "kind": "RootArgument",
        "name": "count",
        "type": "Int"
    }, {
        "kind": "RootArgument",
        "name": "pCursor",
        "type": "String"
    }],
    "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    }, {
        "kind": "LinkedField",
        "alias": "allPosts",
        "name": "__ListPage_allPosts_connection",
        "storageKey": null,
        "args": null,
        "concreteType": "PostConnection",
        "plural": false,
        "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "PostEdge",
            "plural": true,
            "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Post",
                "plural": false,
                "selections": [{
                    "kind": "FragmentSpread",
                    "name": "Post_post",
                    "args": null
                }, {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                }]
            }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
            }]
        }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
            }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
            }]
        }]
    }]
};
// prettier-ignore
node /*: any*/.hash = 'd1915e86c17f8e3791867dbb9129c080';
module.exports = node;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 3f5135c1f51d59bd21ec5b927295df9c
 */
/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ListPage_viewer$ref = any;
export type ListPagePaginationQueryVariables = {|
  count: number,
  pCursor?: ?string,
  cCursor?: ?string,
|};
export type ListPagePaginationQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: ListPage_viewer$ref
  |}
|};
*/
/*
query ListPagePaginationQuery(
  $count: Int!
  $pCursor: String
  $cCursor: String
) {
  viewer {
    ...ListPage_viewer
    id
  }
}

fragment ListPage_viewer on Viewer {
  id
  allPosts(first: $count, after: $pCursor, orderBy: createdAt_DESC) {
    edges {
      node {
        ...Post_post
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment Post_post on Post {
  id
  description
  imageUrl
  siteUrl
  postedBy {
    id
    name
  }
  ...ListComments_post
}

fragment ListComments_post on Post {
  id
  comments(first: $count, after: $cCursor) {
    edges {
      node {
        ...Comment_comment
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
    count
  }
}

fragment Comment_comment on Comment {
  id
  content
  commentedBy {
    id
    name
  }
  commentedPost {
    id
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
    var v0 = [{
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
    }, {
        "kind": "LocalArgument",
        "name": "pCursor",
        "type": "String",
        "defaultValue": null
    }, {
        "kind": "LocalArgument",
        "name": "cCursor",
        "type": "String",
        "defaultValue": null
    }],
        v1 = {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    },
        v2 = {
        "kind": "Variable",
        "name": "first",
        "variableName": "count",
        "type": "Int"
    },
        v3 = [v1, {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
    }],
        v4 = {
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
    },
        v5 = {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
    },
        v6 = {
        "kind": "LinkedField",
        "alias": null,
        "name": "pageInfo",
        "storageKey": null,
        "args": null,
        "concreteType": "PageInfo",
        "plural": false,
        "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "hasNextPage",
            "args": null,
            "storageKey": null
        }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "endCursor",
            "args": null,
            "storageKey": null
        }]
    };
    return {
        "kind": "Request",
        "operationKind": "query",
        "name": "ListPagePaginationQuery",
        "id": null,
        "text": "query ListPagePaginationQuery(\n  $count: Int!\n  $pCursor: String\n  $cCursor: String\n) {\n  viewer {\n    ...ListPage_viewer\n    id\n  }\n}\n\nfragment ListPage_viewer on Viewer {\n  id\n  allPosts(first: $count, after: $pCursor, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...Post_post\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment Post_post on Post {\n  id\n  description\n  imageUrl\n  siteUrl\n  postedBy {\n    id\n    name\n  }\n  ...ListComments_post\n}\n\nfragment ListComments_post on Post {\n  id\n  comments(first: $count, after: $cCursor) {\n    edges {\n      node {\n        ...Comment_comment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    count\n  }\n}\n\nfragment Comment_comment on Comment {\n  id\n  content\n  commentedBy {\n    id\n    name\n  }\n  commentedPost {\n    id\n  }\n}\n",
        "metadata": {},
        "fragment": {
            "kind": "Fragment",
            "name": "ListPagePaginationQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": v0,
            "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "viewer",
                "storageKey": null,
                "args": null,
                "concreteType": "Viewer",
                "plural": false,
                "selections": [{
                    "kind": "FragmentSpread",
                    "name": "ListPage_viewer",
                    "args": null
                }]
            }]
        },
        "operation": {
            "kind": "Operation",
            "name": "ListPagePaginationQuery",
            "argumentDefinitions": v0,
            "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "viewer",
                "storageKey": null,
                "args": null,
                "concreteType": "Viewer",
                "plural": false,
                "selections": [v1, {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "allPosts",
                    "storageKey": null,
                    "args": [{
                        "kind": "Variable",
                        "name": "after",
                        "variableName": "pCursor",
                        "type": "String"
                    }, v2, {
                        "kind": "Literal",
                        "name": "orderBy",
                        "value": "createdAt_DESC",
                        "type": "PostOrderBy"
                    }],
                    "concreteType": "PostConnection",
                    "plural": false,
                    "selections": [{
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "PostEdge",
                        "plural": true,
                        "selections": [{
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Post",
                            "plural": false,
                            "selections": [v1, {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "description",
                                "args": null,
                                "storageKey": null
                            }, {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "imageUrl",
                                "args": null,
                                "storageKey": null
                            }, {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "siteUrl",
                                "args": null,
                                "storageKey": null
                            }, {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "postedBy",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "User",
                                "plural": false,
                                "selections": v3
                            }, {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "comments",
                                "storageKey": null,
                                "args": [{
                                    "kind": "Variable",
                                    "name": "after",
                                    "variableName": "cCursor",
                                    "type": "String"
                                }, v2],
                                "concreteType": "CommentConnection",
                                "plural": false,
                                "selections": [{
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "edges",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "CommentEdge",
                                    "plural": true,
                                    "selections": [{
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "node",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "Comment",
                                        "plural": false,
                                        "selections": [v1, {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "content",
                                            "args": null,
                                            "storageKey": null
                                        }, {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "commentedBy",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "User",
                                            "plural": false,
                                            "selections": v3
                                        }, {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "commentedPost",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "Post",
                                            "plural": false,
                                            "selections": [v1]
                                        }, v4]
                                    }, v5]
                                }, v6, {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "count",
                                    "args": null,
                                    "storageKey": null
                                }]
                            }, {
                                "kind": "LinkedHandle",
                                "alias": null,
                                "name": "comments",
                                "args": [{
                                    "kind": "Variable",
                                    "name": "after",
                                    "variableName": "cCursor",
                                    "type": "String"
                                }, v2],
                                "handle": "connection",
                                "key": "ListComments_comments",
                                "filters": []
                            }, v4]
                        }, v5]
                    }, v6]
                }, {
                    "kind": "LinkedHandle",
                    "alias": null,
                    "name": "allPosts",
                    "args": [{
                        "kind": "Variable",
                        "name": "after",
                        "variableName": "pCursor",
                        "type": "String"
                    }, v2, {
                        "kind": "Literal",
                        "name": "orderBy",
                        "value": "createdAt_DESC",
                        "type": "PostOrderBy"
                    }],
                    "handle": "connection",
                    "key": "ListPage_allPosts",
                    "filters": []
                }]
            }]
        }
    };
}();
// prettier-ignore
node /*: any*/.hash = '5d26fb4d9b772d8d1dbc7251c1fabdc5';
module.exports = node;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash d9a208dc5c3f34a979109786617b6c77
 */
/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ListPage_viewer$ref = any;
export type HomeAllPostQueryVariables = {|
  count: number,
  id?: ?string,
  pCursor?: ?string,
  cCursor?: ?string,
|};
export type HomeAllPostQueryResponse = {|
  +viewer: {|
    +User: ?{|
      +id: string,
      +name: string,
    |},
    +$fragmentRefs: ListPage_viewer$ref,
  |}
|};
*/
/*
query HomeAllPostQuery(
  $count: Int!
  $id: ID
  $pCursor: String
  $cCursor: String
) {
  viewer {
    User(id: $id) {
      id
      name
    }
    ...ListPage_viewer
    id
  }
}

fragment ListPage_viewer on Viewer {
  id
  allPosts(first: $count, after: $pCursor, orderBy: createdAt_DESC) {
    edges {
      node {
        ...Post_post
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment Post_post on Post {
  id
  description
  imageUrl
  siteUrl
  postedBy {
    id
    name
  }
  ...ListComments_post
}

fragment ListComments_post on Post {
  id
  comments(first: $count, after: $cCursor) {
    edges {
      node {
        ...Comment_comment
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
    count
  }
}

fragment Comment_comment on Comment {
  id
  content
  commentedBy {
    id
    name
  }
  commentedPost {
    id
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
    var v0 = [{
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
    }, {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID",
        "defaultValue": null
    }, {
        "kind": "LocalArgument",
        "name": "pCursor",
        "type": "String",
        "defaultValue": null
    }, {
        "kind": "LocalArgument",
        "name": "cCursor",
        "type": "String",
        "defaultValue": null
    }],
        v1 = {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    },
        v2 = [v1, {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
    }],
        v3 = {
        "kind": "LinkedField",
        "alias": null,
        "name": "User",
        "storageKey": null,
        "args": [{
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID"
        }],
        "concreteType": "User",
        "plural": false,
        "selections": v2
    },
        v4 = {
        "kind": "Variable",
        "name": "first",
        "variableName": "count",
        "type": "Int"
    },
        v5 = {
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
    },
        v6 = {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
    },
        v7 = {
        "kind": "LinkedField",
        "alias": null,
        "name": "pageInfo",
        "storageKey": null,
        "args": null,
        "concreteType": "PageInfo",
        "plural": false,
        "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "hasNextPage",
            "args": null,
            "storageKey": null
        }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "endCursor",
            "args": null,
            "storageKey": null
        }]
    };
    return {
        "kind": "Request",
        "operationKind": "query",
        "name": "HomeAllPostQuery",
        "id": null,
        "text": "query HomeAllPostQuery(\n  $count: Int!\n  $id: ID\n  $pCursor: String\n  $cCursor: String\n) {\n  viewer {\n    User(id: $id) {\n      id\n      name\n    }\n    ...ListPage_viewer\n    id\n  }\n}\n\nfragment ListPage_viewer on Viewer {\n  id\n  allPosts(first: $count, after: $pCursor, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...Post_post\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment Post_post on Post {\n  id\n  description\n  imageUrl\n  siteUrl\n  postedBy {\n    id\n    name\n  }\n  ...ListComments_post\n}\n\nfragment ListComments_post on Post {\n  id\n  comments(first: $count, after: $cCursor) {\n    edges {\n      node {\n        ...Comment_comment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    count\n  }\n}\n\nfragment Comment_comment on Comment {\n  id\n  content\n  commentedBy {\n    id\n    name\n  }\n  commentedPost {\n    id\n  }\n}\n",
        "metadata": {},
        "fragment": {
            "kind": "Fragment",
            "name": "HomeAllPostQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": v0,
            "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "viewer",
                "storageKey": null,
                "args": null,
                "concreteType": "Viewer",
                "plural": false,
                "selections": [v3, {
                    "kind": "FragmentSpread",
                    "name": "ListPage_viewer",
                    "args": null
                }]
            }]
        },
        "operation": {
            "kind": "Operation",
            "name": "HomeAllPostQuery",
            "argumentDefinitions": v0,
            "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "viewer",
                "storageKey": null,
                "args": null,
                "concreteType": "Viewer",
                "plural": false,
                "selections": [v3, v1, {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "allPosts",
                    "storageKey": null,
                    "args": [{
                        "kind": "Variable",
                        "name": "after",
                        "variableName": "pCursor",
                        "type": "String"
                    }, v4, {
                        "kind": "Literal",
                        "name": "orderBy",
                        "value": "createdAt_DESC",
                        "type": "PostOrderBy"
                    }],
                    "concreteType": "PostConnection",
                    "plural": false,
                    "selections": [{
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "PostEdge",
                        "plural": true,
                        "selections": [{
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Post",
                            "plural": false,
                            "selections": [v1, {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "description",
                                "args": null,
                                "storageKey": null
                            }, {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "imageUrl",
                                "args": null,
                                "storageKey": null
                            }, {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "siteUrl",
                                "args": null,
                                "storageKey": null
                            }, {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "postedBy",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "User",
                                "plural": false,
                                "selections": v2
                            }, {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "comments",
                                "storageKey": null,
                                "args": [{
                                    "kind": "Variable",
                                    "name": "after",
                                    "variableName": "cCursor",
                                    "type": "String"
                                }, v4],
                                "concreteType": "CommentConnection",
                                "plural": false,
                                "selections": [{
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "edges",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "CommentEdge",
                                    "plural": true,
                                    "selections": [{
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "node",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "Comment",
                                        "plural": false,
                                        "selections": [v1, {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "content",
                                            "args": null,
                                            "storageKey": null
                                        }, {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "commentedBy",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "User",
                                            "plural": false,
                                            "selections": v2
                                        }, {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "commentedPost",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "Post",
                                            "plural": false,
                                            "selections": [v1]
                                        }, v5]
                                    }, v6]
                                }, v7, {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "count",
                                    "args": null,
                                    "storageKey": null
                                }]
                            }, {
                                "kind": "LinkedHandle",
                                "alias": null,
                                "name": "comments",
                                "args": [{
                                    "kind": "Variable",
                                    "name": "after",
                                    "variableName": "cCursor",
                                    "type": "String"
                                }, v4],
                                "handle": "connection",
                                "key": "ListComments_comments",
                                "filters": []
                            }, v5]
                        }, v6]
                    }, v7]
                }, {
                    "kind": "LinkedHandle",
                    "alias": null,
                    "name": "allPosts",
                    "args": [{
                        "kind": "Variable",
                        "name": "after",
                        "variableName": "pCursor",
                        "type": "String"
                    }, v4, {
                        "kind": "Literal",
                        "name": "orderBy",
                        "value": "createdAt_DESC",
                        "type": "PostOrderBy"
                    }],
                    "handle": "connection",
                    "key": "ListPage_allPosts",
                    "filters": []
                }]
            }]
        }
    };
}();
// prettier-ignore
node /*: any*/.hash = 'd880a4427451ead755437a117e2e3896';
module.exports = node;

/***/ })
];;
//# sourceMappingURL=Home.85ccddb8.js.map