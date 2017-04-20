'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssConfig = require('../../../../client/jss-config');

var _jssConfig2 = _interopRequireDefault(_jssConfig);

var _footer = require('../styles/footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
  var classes = _ref.sheet.classes;
  return _react2.default.createElement(
    'footer',
    { className: classes.footer },
    _react2.default.createElement(
      'div',
      { className: classes.menu },
      _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(classes.container, classes.containerColumn) },
        _react2.default.createElement(
          'div',
          { className: classes.company },
          _react2.default.createElement(
            'h2',
            { className: classes.heading },
            'Company'
          ),
          _react2.default.createElement(
            'ul',
            { className: classes.navList },
            _react2.default.createElement(
              'li',
              { className: classes.navItem },
              'About the Site'
            ),
            _react2.default.createElement(
              'li',
              { className: classes.navItem },
              'Advertise with Us'
            ),
            _react2.default.createElement(
              'li',
              { className: classes.navItem },
              'Copyright Policy'
            ),
            _react2.default.createElement(
              'li',
              { className: classes.navItem },
              'Terms of Use and Sale'
            ),
            _react2.default.createElement(
              'li',
              { className: classes.navItem },
              'Privacy Policy'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: classes.contactUs },
          _react2.default.createElement(
            'h2',
            { className: classes.heading },
            'Contact us'
          ),
          _react2.default.createElement(
            'ul',
            { className: classes.socialList },
            _react2.default.createElement(
              'li',
              { className: classes.socialItem },
              _react2.default.createElement(
                'a',
                { href: '#google+', className: classes.socialLink },
                _react2.default.createElement(
                  'svg',
                  { width: '33', height: '25', viewBox: '0 0 36 28', fill: '#b2b2b2' },
                  _react2.default.createElement('path', { d: 'M22.453 14.266q0 3.25-1.359 5.789t-3.875 3.969-5.766 1.43q-2.328 0-4.453-0.906t-3.656-2.438-2.438-3.656-0.906-4.453 0.906-4.453 2.438-3.656 3.656-2.438 4.453-0.906q4.469 0 7.672 3l-3.109 2.984q-1.828-1.766-4.562-1.766-1.922 0-3.555 0.969t-2.586 2.633-0.953 3.633 0.953 3.633 2.586 2.633 3.555 0.969q1.297 0 2.383-0.359t1.789-0.898 1.227-1.227 0.766-1.297 0.336-1.156h-6.5v-3.938h10.813q0.187 0.984 0.187 1.906zM36 12.359v3.281h-3.266v3.266h-3.281v-3.266h-3.266v-3.281h3.266v-3.266h3.281v3.266h3.266z' })
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: classes.socialItem },
              _react2.default.createElement(
                'a',
                { href: '#twitter', className: classes.socialLink },
                _react2.default.createElement(
                  'svg',
                  { width: '25', height: '27', viewBox: '0 0 26 28', fill: '#b2b2b2' },
                  _react2.default.createElement('path', { d: 'M25.312 6.375q-1.047 1.531-2.531 2.609 0.016 0.219 0.016 0.656 0 2.031-0.594 4.055t-1.805 3.883-2.883 3.289-4.031 2.281-5.047 0.852q-4.234 0-7.75-2.266 0.547 0.063 1.219 0.063 3.516 0 6.266-2.156-1.641-0.031-2.938-1.008t-1.781-2.492q0.516 0.078 0.953 0.078 0.672 0 1.328-0.172-1.75-0.359-2.898-1.742t-1.148-3.211v-0.063q1.062 0.594 2.281 0.641-1.031-0.688-1.641-1.797t-0.609-2.406q0-1.375 0.688-2.547 1.891 2.328 4.602 3.727t5.805 1.555q-0.125-0.594-0.125-1.156 0-2.094 1.477-3.57t3.57-1.477q2.188 0 3.687 1.594 1.703-0.328 3.203-1.219-0.578 1.797-2.219 2.781 1.453-0.156 2.906-0.781z' })
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: classes.socialItem },
              _react2.default.createElement(
                'a',
                { href: '#facebook', className: classes.socialLink },
                _react2.default.createElement(
                  'svg',
                  { width: '13', height: '25', viewBox: '0 0 16 28', fill: '#b2b2b2' },
                  _react2.default.createElement('path', { d: 'M14.984 0.187v4.125h-2.453q-1.344 0-1.813 0.562t-0.469 1.687v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406q0-2.906 1.625-4.508t4.328-1.602q2.297 0 3.563 0.187z' })
                )
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: classes.policy },
      _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(classes.container, classes.containerCenter) },
        _react2.default.createElement(
          'div',
          { className: classes.copy },
          '\xA9 2016 Comparisonia Inc.'
        )
      )
    )
  );
};

exports.default = (0, _jssConfig2.default)(_footer2.default)(Footer);

//# sourceMappingURL=footer.js.map