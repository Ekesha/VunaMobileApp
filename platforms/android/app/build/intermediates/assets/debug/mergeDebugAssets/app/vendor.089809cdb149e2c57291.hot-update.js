exports.id = "vendor";
exports.ids = null;
exports.modules = {

/***/ "./node_modules/@react-navigation/elements/lib/module/Background.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Background)
/* harmony export */ });
/* harmony import */ var _react_navigation_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/native/lib/module/theming/useTheme.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function Background(_ref) {
  let {
    style,
    ...rest
  } = _ref;
  const {
    colors
  } = (0,_react_navigation_native__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, rest, {
    style: [{
      flex: 1,
      backgroundColor: colors.background
    }, style]
  }));
}
//# sourceMappingURL=Background.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/elements/lib/module/Header/Header.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_native_safe_area_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-native-safe-area-context/lib/module/SafeAreaContext.js");
/* harmony import */ var _getDefaultHeaderHeight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/Header/getDefaultHeaderHeight.js");
/* harmony import */ var _HeaderBackground__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/Header/HeaderBackground.js");
/* harmony import */ var _HeaderShownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/Header/HeaderShownContext.js");
/* harmony import */ var _HeaderTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/Header/HeaderTitle.js");







const warnIfHeaderStylesDefined = styles => {
  Object.keys(styles).forEach(styleProp => {
    const value = styles[styleProp];
    if (styleProp === 'position' && value === 'absolute') {
      console.warn("position: 'absolute' is not supported on headerStyle. If you would like to render content under the header, use the 'headerTransparent' option.");
    } else if (value !== undefined) {
      console.warn(`${styleProp} was given a value of ${value}, this has no effect on headerStyle.`);
    }
  });
};
function Header(props) {
  const insets = (0,react_native_safe_area_context__WEBPACK_IMPORTED_MODULE_2__.useSafeAreaInsets)();
  const frame = (0,react_native_safe_area_context__WEBPACK_IMPORTED_MODULE_2__.useSafeAreaFrame)();
  const isParentHeaderShown = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_HeaderShownContext__WEBPACK_IMPORTED_MODULE_3__["default"]);

  // On models with Dynamic Island the status bar height is smaller than the safe area top inset.
  const hasDynamicIsland = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).OS === 'ios' && insets.top > 50;
  const statusBarHeight = hasDynamicIsland ? insets.top - 5 : insets.top;
  const {
    layout = frame,
    modal = false,
    title,
    headerTitle: customTitle,
    headerTitleAlign = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).select({
      ios: 'center',
      default: 'left'
    }),
    headerLeft,
    headerLeftLabelVisible,
    headerTransparent,
    headerTintColor,
    headerBackground,
    headerRight,
    headerTitleAllowFontScaling: titleAllowFontScaling,
    headerTitleStyle: titleStyle,
    headerLeftContainerStyle: leftContainerStyle,
    headerRightContainerStyle: rightContainerStyle,
    headerTitleContainerStyle: titleContainerStyle,
    headerBackgroundContainerStyle: backgroundContainerStyle,
    headerStyle: customHeaderStyle,
    headerShadowVisible,
    headerPressColor,
    headerPressOpacity,
    headerStatusBarHeight = isParentHeaderShown ? 0 : statusBarHeight
  } = props;
  const defaultHeight = (0,_getDefaultHeaderHeight__WEBPACK_IMPORTED_MODULE_4__["default"])(layout, modal, headerStatusBarHeight);
  const {
    height = defaultHeight,
    minHeight,
    maxHeight,
    backgroundColor,
    borderBottomColor,
    borderBottomEndRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderBottomStartRadius,
    borderBottomWidth,
    borderColor,
    borderEndColor,
    borderEndWidth,
    borderLeftColor,
    borderLeftWidth,
    borderRadius,
    borderRightColor,
    borderRightWidth,
    borderStartColor,
    borderStartWidth,
    borderStyle,
    borderTopColor,
    borderTopEndRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderTopStartRadius,
    borderTopWidth,
    borderWidth,
    // @ts-expect-error: web support for shadow
    boxShadow,
    elevation,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    opacity,
    transform,
    ...unsafeStyles
  } = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).flatten(customHeaderStyle || {});
  if (true) {
    warnIfHeaderStylesDefined(unsafeStyles);
  }
  const safeStyles = {
    backgroundColor,
    borderBottomColor,
    borderBottomEndRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderBottomStartRadius,
    borderBottomWidth,
    borderColor,
    borderEndColor,
    borderEndWidth,
    borderLeftColor,
    borderLeftWidth,
    borderRadius,
    borderRightColor,
    borderRightWidth,
    borderStartColor,
    borderStartWidth,
    borderStyle,
    borderTopColor,
    borderTopEndRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderTopStartRadius,
    borderTopWidth,
    borderWidth,
    // @ts-expect-error: boxShadow is only for Web
    boxShadow,
    elevation,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    opacity,
    transform
  };

  // Setting a property to undefined triggers default style
  // So we need to filter them out
  // Users can use `null` instead
  for (const styleProp in safeStyles) {
    // @ts-expect-error: typescript wrongly complains that styleProp cannot be used to index safeStyles
    if (safeStyles[styleProp] === undefined) {
      // @ts-expect-error
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete safeStyles[styleProp];
    }
  }
  const backgroundStyle = [safeStyles, headerShadowVisible === false && {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0
  }];
  const leftButton = headerLeft ? headerLeft({
    tintColor: headerTintColor,
    pressColor: headerPressColor,
    pressOpacity: headerPressOpacity,
    labelVisible: headerLeftLabelVisible
  }) : null;
  const rightButton = headerRight ? headerRight({
    tintColor: headerTintColor,
    pressColor: headerPressColor,
    pressOpacity: headerPressOpacity
  }) : null;
  const headerTitle = typeof customTitle !== 'function' ? props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_HeaderTitle__WEBPACK_IMPORTED_MODULE_5__["default"], props) : customTitle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).View, {
    pointerEvents: "box-none",
    style: [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).absoluteFill, {
      zIndex: 0
    }, backgroundContainerStyle]
  }, headerBackground ? headerBackground({
    style: backgroundStyle
  }) : headerTransparent ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_HeaderBackground__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: backgroundStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).View, {
    pointerEvents: "box-none",
    style: [{
      height,
      minHeight,
      maxHeight,
      opacity,
      transform
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    pointerEvents: "none",
    style: {
      height: headerStatusBarHeight
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    pointerEvents: "box-none",
    style: styles.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).View, {
    pointerEvents: "box-none",
    style: [styles.left, headerTitleAlign === 'center' && styles.expand, {
      marginStart: insets.left
    }, leftContainerStyle]
  }, leftButton), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).View, {
    pointerEvents: "box-none",
    style: [styles.title, {
      // Avoid the title from going offscreen or overlapping buttons
      maxWidth: headerTitleAlign === 'center' ? layout.width - ((leftButton ? headerLeftLabelVisible !== false ? 80 : 32 : 16) + Math.max(insets.left, insets.right)) * 2 : layout.width - ((leftButton ? 72 : 16) + (rightButton ? 72 : 16) + insets.left - insets.right)
    }, titleContainerStyle]
  }, headerTitle({
    children: title,
    allowFontScaling: titleAllowFontScaling,
    tintColor: headerTintColor,
    style: titleStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).View, {
    pointerEvents: "box-none",
    style: [styles.right, styles.expand, {
      marginEnd: insets.right
    }, rightContainerStyle]
  }, rightButton))));
}
const styles = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  title: {
    marginHorizontal: 16,
    justifyContent: 'center'
  },
  left: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  right: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  expand: {
    flexGrow: 1,
    flexBasis: 0
  }
});
//# sourceMappingURL=Header.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/elements/lib/module/Header/HeaderBackButton.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderBackButton)
/* harmony export */ });
/* harmony import */ var _react_navigation_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/native/lib/module/theming/useTheme.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _MaskedView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/MaskedViewNative.js");
/* harmony import */ var _PlatformPressable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/PlatformPressable.js");





function HeaderBackButton(_ref) {
  let {
    disabled,
    allowFontScaling,
    backImage,
    label,
    labelStyle,
    labelVisible = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).OS === 'ios',
    onLabelLayout,
    onPress,
    pressColor,
    pressOpacity,
    screenLayout,
    tintColor: customTintColor,
    titleLayout,
    truncatedLabel = 'Back',
    accessibilityLabel = label && label !== 'Back' ? `${label}, back` : 'Go back',
    testID,
    style
  } = _ref;
  const {
    colors
  } = (0,_react_navigation_native__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [initialLabelWidth, setInitialLabelWidth] = react__WEBPACK_IMPORTED_MODULE_0__.useState(undefined);
  const tintColor = customTintColor !== undefined ? customTintColor : Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).select({
    ios: colors.primary,
    default: colors.text
  });
  const handleLabelLayout = e => {
    onLabelLayout === null || onLabelLayout === void 0 ? void 0 : onLabelLayout(e);
    setInitialLabelWidth(e.nativeEvent.layout.x + e.nativeEvent.layout.width);
  };
  const shouldTruncateLabel = () => {
    return !label || initialLabelWidth && titleLayout && screenLayout && (screenLayout.width - titleLayout.width) / 2 < initialLabelWidth + 26;
  };
  const renderBackImage = () => {
    if (backImage) {
      return backImage({
        tintColor
      });
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        style: [styles.icon, Boolean(labelVisible) && styles.iconWithLabel, Boolean(tintColor) && {
          tintColor
        }],
        source: __webpack_require__("./node_modules/@react-navigation/elements/lib/module/assets/back-icon.png"),
        fadeDuration: 0
      });
    }
  };
  const renderLabel = () => {
    const leftLabelText = shouldTruncateLabel() ? truncatedLabel : label;
    if (!labelVisible || leftLabelText === undefined) {
      return null;
    }
    const labelElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      style: screenLayout ?
      // We make the button extend till the middle of the screen
      // Otherwise it appears to cut off when translating
      [styles.labelWrapper, {
        minWidth: screenLayout.width / 2 - 27
      }] : null
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Text, {
      accessible: false,
      onLayout:
      // This measurement is used to determine if we should truncate the label when it doesn't fit
      // Only measure it when label is not truncated because we want the measurement of full label
      leftLabelText === label ? handleLabelLayout : undefined,
      style: [styles.label, tintColor ? {
        color: tintColor
      } : null, labelStyle],
      numberOfLines: 1,
      allowFontScaling: !!allowFontScaling
    }, leftLabelText));
    if (backImage || Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).OS !== 'ios') {
      // When a custom backimage is specified, we can't mask the label
      // Otherwise there might be weird effect due to our mask not being the same as the image
      return labelElement;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MaskedView__WEBPACK_IMPORTED_MODULE_3__["default"], {
      maskElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        style: styles.iconMaskContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        source: __webpack_require__("./node_modules/@react-navigation/elements/lib/module/assets/back-icon-mask.png"),
        style: styles.iconMask
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        style: styles.iconMaskFillerRect
      }))
    }, labelElement);
  };
  const handlePress = () => onPress && requestAnimationFrame(onPress);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PlatformPressable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disabled: disabled,
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel: accessibilityLabel,
    testID: testID,
    onPress: disabled ? undefined : handlePress,
    pressColor: pressColor,
    pressOpacity: pressOpacity,
    android_ripple: androidRipple,
    style: [styles.container, disabled && styles.disabled, style],
    hitSlop: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).select({
      ios: undefined,
      default: {
        top: 16,
        right: 16,
        bottom: 16,
        left: 16
      }
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderBackImage(), renderLabel()));
}
const androidRipple = {
  borderless: true,
  foreground: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).OS === 'android' && Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Version >= 23,
  radius: 20
};
const styles = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    minWidth: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).hairlineWidth,
    // Avoid collapsing when title is long
    ...Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11
      }
    })
  },
  disabled: {
    opacity: 0.5
  },
  label: {
    fontSize: 17,
    // Title and back label are a bit different width due to title being bold
    // Adjusting the letterSpacing makes them coincide better
    letterSpacing: 0.35
  },
  labelWrapper: {
    // These styles will make sure that the label doesn't fill the available space
    // Otherwise it messes with the measurement of the label
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).select({
    ios: {
      height: 21,
      width: 13,
      marginLeft: 8,
      marginRight: 22,
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{
        scaleX: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getConstants().isRTL ? -1 : 1
      }]
    },
    default: {
      height: 24,
      width: 24,
      margin: 3,
      resizeMode: 'contain',
      transform: [{
        scaleX: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getConstants().isRTL ? -1 : 1
      }]
    }
  }),
  iconWithLabel: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).OS === 'ios' ? {
    marginRight: 6
  } : {},
  iconMaskContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  iconMaskFillerRect: {
    flex: 1,
    backgroundColor: '#000'
  },
  iconMask: {
    height: 21,
    width: 13,
    marginLeft: -14.5,
    marginVertical: 12,
    alignSelf: 'center',
    resizeMode: 'contain',
    transform: [{
      scaleX: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getConstants().isRTL ? -1 : 1
    }]
  }
});
//# sourceMappingURL=HeaderBackButton.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/elements/lib/module/Header/HeaderBackContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNamedContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/getNamedContext.js");

const HeaderBackContext = (0,_getNamedContext__WEBPACK_IMPORTED_MODULE_0__["default"])('HeaderBackContext', undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderBackContext);
//# sourceMappingURL=HeaderBackContext.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/elements/lib/module/Header/HeaderBackground.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderBackground)
/* harmony export */ });
/* harmony import */ var _react_navigation_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/native/lib/module/theming/useTheme.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function HeaderBackground(_ref) {
  let {
    style,
    ...rest
  } = _ref;
  const {
    colors
  } = (0,_react_navigation_native__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).View, _extends({
    style: [styles.container, {
      backgroundColor: colors.card,
      borderBottomColor: colors.border,
      shadowColor: colors.border
    }, style]
  }, rest));
}
const styles = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).create({
  container: {
    flex: 1,
    ...Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).select({
      android: {
        elevation: 4
      },
      ios: {
        shadowOpacity: 0.85,
        shadowRadius: 0,
        shadowOffset: {
          width: 0,
          height: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).hairlineWidth
        }
      },
      default: {
        borderBottomWidth: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).hairlineWidth
      }
    })
  }
});
//# sourceMappingURL=HeaderBackground.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/elements/lib/module/Header/HeaderHeightContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNamedContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/getNamedContext.js");

const HeaderHeightContext = (0,_getNamedContext__WEBPACK_IMPORTED_MODULE_0__["default"])('HeaderHeightContext', undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderHeightContext);
//# sourceMappingURL=HeaderHeightContext.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/elements/lib/module/Header/HeaderShownContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNamedContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/getNamedContext.js");

const HeaderShownContext = (0,_getNamedContext__WEBPACK_IMPORTED_MODULE_0__["default"])('HeaderShownContext', false);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderShownContext);
//# sourceMappingURL=HeaderShownContext.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/elements/lib/module/Header/HeaderTitle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderTitle)
/* harmony export */ });
/* harmony import */ var _react_navigation_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/native/lib/module/theming/useTheme.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function HeaderTitle(_ref) {
  let {
    tintColor,
    style,
    ...rest
  } = _ref;
  const {
    colors
  } = (0,_react_navigation_native__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Text, _extends({
    accessibilityRole: "header",
    "aria-level": "1",
    numberOfLines: 1
  }, rest, {
    style: [styles.title, {
      color: tintColor === undefined ? colors.text : tintColor
    }, style]
  }));
}
const styles = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).create({
  title: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).select({
    ios: {
      fontSize: 17,
      fontWeight: '600'
    },
    android: {
      fontSize: 20,
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal'
    },
    default: {
      fontSize: 18,
      fontWeight: '500'
    }
  })
});
//# sourceMappingURL=HeaderTitle.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/elements/lib/module/Header/getDefaultHeaderHeight.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDefaultHeaderHeight)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

function getDefaultHeaderHeight(layout, modalPresentation, statusBarHeight) {
  let headerHeight;
  const isLandscape = layout.width > layout.height;
  if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).OS === 'ios') {
    if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).isPad || Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).isTV) {
      if (modalPresentation) {
        headerHeight = 56;
      } else {
        headerHeight = 50;
      }
    } else {
      if (isLandscape) {
        headerHeight = 32;
      } else {
        if (modalPresentation) {
          headerHeight = 56;
        } else {
          headerHeight = 44;
        }
      }
    }
  } else if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).OS === 'android') {
    headerHeight = 56;
  } else {
    headerHeight = 64;
  }
  return headerHeight + statusBarHeight;
}
//# sourceMappingURL=getDefaultHeaderHeight.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/elements/lib/module/Header/getHeaderTitle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHeaderTitle)
/* harmony export */ });
function getHeaderTitle(options, fallback) {
  return typeof options.headerTitle === 'string' ? options.headerTitle : options.title !== undefined ? options.title : fallback;
}
//# sourceMappingURL=getHeaderTitle.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/elements/lib/module/MaskedViewNative.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * The native MaskedView that we explicitly re-export for supported platforms: Android, iOS.
 */


let RNCMaskedView;
try {
  // Add try/catch to support usage even if it's not installed, since it's optional.
  // Newer versions of Metro will handle it properly.
  RNCMaskedView = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@react-native-masked-view/masked-view'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
} catch (e) {
  // Ignore
}
const isMaskedViewAvailable = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getViewManagerConfig('RNCMaskedView') != null;
function MaskedView(_ref) {
  let {
    children,
    ...rest
  } = _ref;
  if (isMaskedViewAvailable && RNCMaskedView) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RNCMaskedView, rest, children);
  }
  return children;
}
//# sourceMappingURL=MaskedViewNative.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/elements/lib/module/PlatformPressable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlatformPressable)
/* harmony export */ });
/* harmony import */ var _react_navigation_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/native/lib/module/theming/useTheme.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const AnimatedPressable = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createAnimatedComponent(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const ANDROID_VERSION_LOLLIPOP = 21;
const ANDROID_SUPPORTS_RIPPLE = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).OS === 'android' && Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Version >= ANDROID_VERSION_LOLLIPOP;

/**
 * PlatformPressable provides an abstraction on top of Pressable to handle platform differences.
 */
function PlatformPressable(_ref) {
  let {
    onPressIn,
    onPressOut,
    android_ripple,
    pressColor,
    pressOpacity = 0.3,
    style,
    ...rest
  } = _ref;
  const {
    dark
  } = (0,_react_navigation_native__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [opacity] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Value(1));
  const animateTo = (toValue, duration) => {
    if (ANDROID_SUPPORTS_RIPPLE) {
      return;
    }
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).timing(opacity, {
      toValue,
      duration,
      easing: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).inOut(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).quad),
      useNativeDriver: true
    }).start();
  };
  const handlePressIn = e => {
    animateTo(pressOpacity, 0);
    onPressIn === null || onPressIn === void 0 ? void 0 : onPressIn(e);
  };
  const handlePressOut = e => {
    animateTo(1, 200);
    onPressOut === null || onPressOut === void 0 ? void 0 : onPressOut(e);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AnimatedPressable, _extends({
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
    android_ripple: ANDROID_SUPPORTS_RIPPLE ? {
      color: pressColor !== undefined ? pressColor : dark ? 'rgba(255, 255, 255, .32)' : 'rgba(0, 0, 0, .32)',
      ...android_ripple
    } : undefined,
    style: [{
      opacity: !ANDROID_SUPPORTS_RIPPLE ? opacity : 1
    }, style]
  }, rest));
}
//# sourceMappingURL=PlatformPressable.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/elements/lib/module/SafeAreaProviderCompat.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SafeAreaProviderCompat)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_native_safe_area_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-native-safe-area-context/lib/module/InitialWindow.js");
/* harmony import */ var react_native_safe_area_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-native-safe-area-context/lib/module/SafeAreaContext.js");



const {
  width = 0,
  height = 0
} = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).get('window');

// To support SSR on web, we need to have empty insets for initial values
// Otherwise there can be mismatch between SSR and client output
// We also need to specify empty values to support tests environments
const initialMetrics = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).OS === 'web' || react_native_safe_area_context__WEBPACK_IMPORTED_MODULE_2__.initialWindowMetrics == null ? {
  frame: {
    x: 0,
    y: 0,
    width,
    height
  },
  insets: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
} : react_native_safe_area_context__WEBPACK_IMPORTED_MODULE_2__.initialWindowMetrics;
function SafeAreaProviderCompat(_ref) {
  let {
    children,
    style
  } = _ref;
  const insets = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_native_safe_area_context__WEBPACK_IMPORTED_MODULE_3__.SafeAreaInsetsContext);
  if (insets) {
    // If we already have insets, don't wrap the stack in another safe area provider
    // This avoids an issue with updates at the cost of potentially incorrect values
    // https://github.com/react-navigation/react-navigation/issues/174
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      style: [styles.container, style]
    }, children);
  }
  if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).OS === 'web') {
    children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SafeAreaFrameProvider, {
      initialMetrics: initialMetrics
    }, children);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native_safe_area_context__WEBPACK_IMPORTED_MODULE_3__.SafeAreaProvider, {
    initialMetrics: initialMetrics,
    style: style
  }, children);
}

// FIXME: On the Web, the safe area frame value doesn't update on resize
// So we workaround this by measuring the frame on resize
const SafeAreaFrameProvider = _ref2 => {
  let {
    initialMetrics,
    children
  } = _ref2;
  const element = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const [frame, setFrame] = react__WEBPACK_IMPORTED_MODULE_0__.useState(initialMetrics.frame);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (element.current == null) {
      return;
    }
    const rect = element.current.getBoundingClientRect();
    setFrame({
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height
    });
    let timeout;
    const observer = new ResizeObserver(entries => {
      const entry = entries[0];
      if (entry) {
        const {
          x,
          y,
          width,
          height
        } = entry.contentRect;

        // Debounce the frame updates to avoid too many updates in a short time
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setFrame({
            x,
            y,
            width,
            height
          });
        }, 100);
      }
    });
    observer.observe(element.current);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native_safe_area_context__WEBPACK_IMPORTED_MODULE_3__.SafeAreaFrameContext.Provider, {
    value: frame
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: element,
    style: {
      ...Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).absoluteFillObject,
      pointerEvents: 'none',
      visibility: 'hidden'
    }
  }), children);
};
SafeAreaProviderCompat.initialMetrics = initialMetrics;
const styles = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).create({
  container: {
    flex: 1
  }
});
//# sourceMappingURL=SafeAreaProviderCompat.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/elements/lib/module/Screen.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Screen)
/* harmony export */ });
/* harmony import */ var _react_navigation_native__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_native_safe_area_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-native-safe-area-context/lib/module/SafeAreaContext.js");
/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/Background.js");
/* harmony import */ var _Header_getDefaultHeaderHeight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/Header/getDefaultHeaderHeight.js");
/* harmony import */ var _Header_HeaderHeightContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/Header/HeaderHeightContext.js");
/* harmony import */ var _Header_HeaderShownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/Header/HeaderShownContext.js");








function Screen(props) {
  const dimensions = (0,react_native_safe_area_context__WEBPACK_IMPORTED_MODULE_2__.useSafeAreaFrame)();
  const insets = (0,react_native_safe_area_context__WEBPACK_IMPORTED_MODULE_2__.useSafeAreaInsets)();
  const isParentHeaderShown = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Header_HeaderShownContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const parentHeaderHeight = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Header_HeaderHeightContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const {
    focused,
    modal = false,
    header,
    headerShown = true,
    headerTransparent,
    headerStatusBarHeight = isParentHeaderShown ? 0 : insets.top,
    navigation,
    route,
    children,
    style
  } = props;
  const [headerHeight, setHeaderHeight] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => (0,_Header_getDefaultHeaderHeight__WEBPACK_IMPORTED_MODULE_5__["default"])(dimensions, modal, headerStatusBarHeight));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Background__WEBPACK_IMPORTED_MODULE_6__["default"], {
    accessibilityElementsHidden: !focused,
    importantForAccessibility: focused ? 'auto' : 'no-hide-descendants',
    style: [styles.container, style]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    style: styles.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header_HeaderShownContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: isParentHeaderShown || headerShown !== false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header_HeaderHeightContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: headerShown ? headerHeight : parentHeaderHeight ?? 0
  }, children))), headerShown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_navigation_native__WEBPACK_IMPORTED_MODULE_7__.NavigationContext.Provider, {
    value: navigation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_navigation_native__WEBPACK_IMPORTED_MODULE_7__.NavigationRouteContext.Provider, {
    value: route
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    onLayout: e => {
      const {
        height
      } = e.nativeEvent.layout;
      setHeaderHeight(height);
    },
    style: headerTransparent ? styles.absolute : null
  }, header))) : null);
}
const styles = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse'
  },
  // This is necessary to avoid applying 'column-reverse' to screen content
  content: {
    flex: 1
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  }
});
//# sourceMappingURL=Screen.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/elements/lib/module/getNamedContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNamedContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const contexts = '__react_navigation__elements_contexts';
// We use a global variable to keep our contexts so that we can reuse same contexts across packages
global[contexts] = global[contexts] ?? new Map();
function getNamedContext(name, initialValue) {
  let context = global[contexts].get(name);
  if (context) {
    return context;
  }
  context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(initialValue);
  context.displayName = name;
  global[contexts].set(name, context);
  return context;
}
//# sourceMappingURL=getNamedContext.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/native-stack/lib/module/navigators/createNativeStackNavigator.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _react_navigation_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_NativeStackView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/native-stack/lib/module/views/NativeStackView.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function NativeStackNavigator(_ref) {
  let {
    id,
    initialRouteName,
    children,
    screenListeners,
    screenOptions,
    ...rest
  } = _ref;
  const {
    state,
    descriptors,
    navigation,
    NavigationContent
  } = (0,_react_navigation_native__WEBPACK_IMPORTED_MODULE_1__.useNavigationBuilder)(_react_navigation_native__WEBPACK_IMPORTED_MODULE_1__.StackRouter, {
    id,
    initialRouteName,
    children,
    screenListeners,
    screenOptions
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    var _navigation$addListen;
    return (// @ts-expect-error: there may not be a tab navigator in parent
      navigation === null || navigation === void 0 ? void 0 : (_navigation$addListen = navigation.addListener) === null || _navigation$addListen === void 0 ? void 0 : _navigation$addListen.call(navigation, 'tabPress', e => {
        const isFocused = navigation.isFocused();

        // Run the operation in the next frame so we're sure all listeners have been run
        // This is necessary to know if preventDefault() has been called
        requestAnimationFrame(() => {
          if (state.index > 0 && isFocused && !e.defaultPrevented) {
            // When user taps on already focused tab and we're inside the tab,
            // reset the stack to replicate native behaviour
            navigation.dispatch({
              ..._react_navigation_native__WEBPACK_IMPORTED_MODULE_1__.StackActions.popToTop(),
              target: state.key
            });
          }
        });
      })
    );
  }, [navigation, state.index, state.key]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_views_NativeStackView__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, rest, {
    state: state,
    navigation: navigation,
    descriptors: descriptors
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_react_navigation_native__WEBPACK_IMPORTED_MODULE_1__.createNavigatorFactory)(NativeStackNavigator));
//# sourceMappingURL=createNativeStackNavigator.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/native-stack/lib/module/views/NativeStackView.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NativeStackView)
/* harmony export */ });
/* harmony import */ var _react_navigation_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/Header/HeaderBackContext.js");
/* harmony import */ var _react_navigation_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/SafeAreaProviderCompat.js");
/* harmony import */ var _react_navigation_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/Header/getHeaderTitle.js");
/* harmony import */ var _react_navigation_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/Screen.js");
/* harmony import */ var _react_navigation_elements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/Header/Header.js");
/* harmony import */ var _react_navigation_elements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/Header/HeaderBackButton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const TRANSPARENT_PRESENTATIONS = ['transparentModal', 'containedTransparentModal'];
function NativeStackView(_ref) {
  let {
    state,
    descriptors
  } = _ref;
  const parentHeaderBack = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_react_navigation_elements__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_navigation_elements__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    style: styles.container
  }, state.routes.map((route, i) => {
    var _state$routes, _state$routes2;
    const isFocused = state.index === i;
    const previousKey = (_state$routes = state.routes[i - 1]) === null || _state$routes === void 0 ? void 0 : _state$routes.key;
    const nextKey = (_state$routes2 = state.routes[i + 1]) === null || _state$routes2 === void 0 ? void 0 : _state$routes2.key;
    const previousDescriptor = previousKey ? descriptors[previousKey] : undefined;
    const nextDescriptor = nextKey ? descriptors[nextKey] : undefined;
    const {
      options,
      navigation,
      render
    } = descriptors[route.key];
    const headerBack = previousDescriptor ? {
      title: (0,_react_navigation_elements__WEBPACK_IMPORTED_MODULE_4__["default"])(previousDescriptor.options, previousDescriptor.route.name)
    } : parentHeaderBack;
    const canGoBack = headerBack !== undefined;
    const {
      header,
      headerShown,
      headerTintColor,
      headerBackImageSource,
      headerLeft,
      headerRight,
      headerTitle,
      headerTitleAlign,
      headerTitleStyle,
      headerStyle,
      headerShadowVisible,
      headerTransparent,
      headerBackground,
      headerBackTitle,
      presentation,
      contentStyle
    } = options;
    const nextPresentation = nextDescriptor === null || nextDescriptor === void 0 ? void 0 : nextDescriptor.options.presentation;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_navigation_elements__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: route.key,
      focused: isFocused,
      route: route,
      navigation: navigation,
      headerShown: headerShown,
      headerTransparent: headerTransparent,
      header: header !== undefined ? header({
        back: headerBack,
        options,
        route,
        navigation
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_navigation_elements__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: (0,_react_navigation_elements__WEBPACK_IMPORTED_MODULE_4__["default"])(options, route.name),
        headerTintColor: headerTintColor,
        headerLeft: typeof headerLeft === 'function' ? _ref2 => {
          let {
            tintColor
          } = _ref2;
          return headerLeft({
            tintColor,
            canGoBack,
            label: headerBackTitle
          });
        } : headerLeft === undefined && canGoBack ? _ref3 => {
          let {
            tintColor
          } = _ref3;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_navigation_elements__WEBPACK_IMPORTED_MODULE_7__["default"], {
            tintColor: tintColor,
            backImage: headerBackImageSource !== undefined ? () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              source: headerBackImageSource,
              style: [styles.backImage, {
                tintColor
              }]
            }) : undefined,
            onPress: navigation.goBack,
            canGoBack: canGoBack
          });
        } : headerLeft,
        headerRight: typeof headerRight === 'function' ? _ref4 => {
          let {
            tintColor
          } = _ref4;
          return headerRight({
            tintColor,
            canGoBack
          });
        } : headerRight,
        headerTitle: typeof headerTitle === 'function' ? _ref5 => {
          let {
            children,
            tintColor
          } = _ref5;
          return headerTitle({
            children,
            tintColor
          });
        } : headerTitle,
        headerTitleAlign: headerTitleAlign,
        headerTitleStyle: headerTitleStyle,
        headerTransparent: headerTransparent,
        headerShadowVisible: headerShadowVisible,
        headerBackground: headerBackground,
        headerStyle: headerStyle
      }),
      style: [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).absoluteFill, {
        display: isFocused || nextPresentation != null && TRANSPARENT_PRESENTATIONS.includes(nextPresentation) ? 'flex' : 'none'
      }, presentation != null && TRANSPARENT_PRESENTATIONS.includes(presentation) ? {
        backgroundColor: 'transparent'
      } : null]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_navigation_elements__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
      value: headerBack
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      style: [styles.contentContainer, contentStyle]
    }, render())));
  })));
}
const styles = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1
  },
  backImage: {
    height: 24,
    width: 24,
    margin: 3,
    resizeMode: 'contain'
  }
});
//# sourceMappingURL=NativeStackView.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/native/lib/module/theming/useTheme.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/native/lib/module/theming/ThemeContext.js");


function useTheme() {
  const theme = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_ThemeContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return theme;
}
//# sourceMappingURL=useTheme.js.map

/***/ }),

/***/ "./node_modules/react-native-safe-area-context/lib/module/InitialWindow.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialWindowMetrics: () => (/* binding */ initialWindowMetrics),
/* harmony export */   initialWindowSafeAreaInsets: () => (/* binding */ initialWindowSafeAreaInsets)
/* harmony export */ });
const initialWindowMetrics = null;

/**
 * @deprecated
 */
const initialWindowSafeAreaInsets = null;
//# sourceMappingURL=InitialWindow.js.map

/***/ }),

/***/ "./node_modules/react-native-safe-area-context/lib/module/SafeAreaContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeAreaConsumer: () => (/* binding */ SafeAreaConsumer),
/* harmony export */   SafeAreaContext: () => (/* binding */ SafeAreaContext),
/* harmony export */   SafeAreaFrameContext: () => (/* binding */ SafeAreaFrameContext),
/* harmony export */   SafeAreaInsetsContext: () => (/* binding */ SafeAreaInsetsContext),
/* harmony export */   SafeAreaProvider: () => (/* binding */ SafeAreaProvider),
/* harmony export */   useSafeArea: () => (/* binding */ useSafeArea),
/* harmony export */   useSafeAreaFrame: () => (/* binding */ useSafeAreaFrame),
/* harmony export */   useSafeAreaInsets: () => (/* binding */ useSafeAreaInsets),
/* harmony export */   withSafeAreaInsets: () => (/* binding */ withSafeAreaInsets)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _NativeSafeAreaProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-native-safe-area-context/lib/module/specs/NativeSafeAreaProvider.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }



const isDev = "development" !== 'production';
const SafeAreaInsetsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (isDev) {
  SafeAreaInsetsContext.displayName = 'SafeAreaInsetsContext';
}
const SafeAreaFrameContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (isDev) {
  SafeAreaFrameContext.displayName = 'SafeAreaFrameContext';
}
function SafeAreaProvider({
  children,
  initialMetrics,
  initialSafeAreaInsets,
  style,
  ...others
}) {
  const parentInsets = useParentSafeAreaInsets();
  const parentFrame = useParentSafeAreaFrame();
  const [insets, setInsets] = react__WEBPACK_IMPORTED_MODULE_0__.useState(initialMetrics?.insets ?? initialSafeAreaInsets ?? parentInsets ?? null);
  const [frame, setFrame] = react__WEBPACK_IMPORTED_MODULE_0__.useState(initialMetrics?.frame ?? parentFrame ?? {
    // Backwards compat so we render anyway if we don't have frame.
    x: 0,
    y: 0,
    width: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).get('window').width,
    height: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).get('window').height
  });
  const onInsetsChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(event => {
    const {
      nativeEvent: {
        frame: nextFrame,
        insets: nextInsets
      }
    } = event;
    setFrame(curFrame => {
      if (
      // Backwards compat with old native code that won't send frame.
      nextFrame && (nextFrame.height !== curFrame.height || nextFrame.width !== curFrame.width || nextFrame.x !== curFrame.x || nextFrame.y !== curFrame.y)) {
        return nextFrame;
      } else {
        return curFrame;
      }
    });
    setInsets(curInsets => {
      if (!curInsets || nextInsets.bottom !== curInsets.bottom || nextInsets.left !== curInsets.left || nextInsets.right !== curInsets.right || nextInsets.top !== curInsets.top) {
        return nextInsets;
      } else {
        return curInsets;
      }
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NativeSafeAreaProvider__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    style: [styles.fill, style],
    onInsetsChange: onInsetsChange
  }, others), insets != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SafeAreaFrameContext.Provider, {
    value: frame
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SafeAreaInsetsContext.Provider, {
    value: insets
  }, children)) : null);
}
const styles = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).create({
  fill: {
    flex: 1
  }
});
function useParentSafeAreaInsets() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(SafeAreaInsetsContext);
}
function useParentSafeAreaFrame() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(SafeAreaFrameContext);
}
const NO_INSETS_ERROR = 'No safe area value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.';
function useSafeAreaInsets() {
  const insets = react__WEBPACK_IMPORTED_MODULE_0__.useContext(SafeAreaInsetsContext);
  if (insets == null) {
    throw new Error(NO_INSETS_ERROR);
  }
  return insets;
}
function useSafeAreaFrame() {
  const frame = react__WEBPACK_IMPORTED_MODULE_0__.useContext(SafeAreaFrameContext);
  if (frame == null) {
    throw new Error(NO_INSETS_ERROR);
  }
  return frame;
}
function withSafeAreaInsets(WrappedComponent) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
    const insets = useSafeAreaInsets();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedComponent, _extends({}, props, {
      insets: insets,
      ref: ref
    }));
  });
}

/**
 * @deprecated
 */
function useSafeArea() {
  return useSafeAreaInsets();
}

/**
 * @deprecated
 */
const SafeAreaConsumer = SafeAreaInsetsContext.Consumer;

/**
 * @deprecated
 */
const SafeAreaContext = SafeAreaInsetsContext;
//# sourceMappingURL=SafeAreaContext.js.map

/***/ }),

/***/ "./node_modules/react-native-safe-area-context/lib/module/specs/NativeSafeAreaProvider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native/Libraries/Utilities/codegenNativeComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-native/Libraries/Utilities/codegenNativeComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('RNCSafeAreaProvider'));
//# sourceMappingURL=NativeSafeAreaProvider.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/elements/lib/module/assets/back-icon-mask.png":
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./node_modules/@react-navigation/elements/lib/module/assets/back-icon.png":
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLjA4OTgwOWNkYjE0OWUyYzU3MjkxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNCQUFzQixzRUFBc0UsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELGlDQUFpQyxrQkFBa0I7QUFDdFA7QUFDckI7QUFDSztBQUNyQjtBQUNmO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSSxFQUFFLG9FQUFRO0FBQ2Qsc0JBQXNCLGdEQUFtQixDQUFDLDJJQUFJLGFBQWE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CK0I7QUFDcUM7QUFDaUI7QUFDdkI7QUFDWjtBQUNJO0FBQ2Q7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixzQkFBc0IsV0FBVyx1QkFBdUIsTUFBTTtBQUM5RDtBQUNBLEdBQUc7QUFDSDtBQUNlO0FBQ2YsaUJBQWlCLGlGQUFpQjtBQUNsQyxnQkFBZ0IsZ0ZBQWdCO0FBQ2hDLDhCQUE4Qiw2Q0FBZ0IsQ0FBQywyREFBa0I7O0FBRWpFO0FBQ0EsMkJBQTJCLDJJQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwySUFBUTtBQUMvQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osd0JBQXdCLG1FQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQSxHQUFHLHlDQUF5QyxnREFBbUI7QUFDL0Q7QUFDQSxHQUFHLGVBQWUsZ0RBQW1CO0FBQ3JDO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZUFBZSwySUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDZDQUFnQjtBQUN6QjtBQUNBO0FBQ0EsU0FBUyw2Q0FBZ0I7QUFDekI7QUFDQTtBQUNPO0FBQ1AsaUJBQWlCLDZDQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxnQkFBZ0IsNkNBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHNCQUFzQiw2Q0FBZ0I7QUFDdEM7QUFDQSx3QkFBd0IsZ0RBQW1CLDhCQUE4QjtBQUN6RTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ087QUFDUDs7Ozs7Ozs7Ozs7OztBQ25INkY7QUFDN0YsaUVBQWUsc0xBQXNCLHVCQUF1QixFQUFDO0FBQzdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vZWxlbWVudHMvbGliL21vZHVsZS9CYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2VsZW1lbnRzL2xpYi9tb2R1bGUvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9lbGVtZW50cy9saWIvbW9kdWxlL0hlYWRlci9IZWFkZXJCYWNrQnV0dG9uLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2VsZW1lbnRzL2xpYi9tb2R1bGUvSGVhZGVyL0hlYWRlckJhY2tDb250ZXh0LmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2VsZW1lbnRzL2xpYi9tb2R1bGUvSGVhZGVyL0hlYWRlckJhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vZWxlbWVudHMvbGliL21vZHVsZS9IZWFkZXIvSGVhZGVySGVpZ2h0Q29udGV4dC5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9lbGVtZW50cy9saWIvbW9kdWxlL0hlYWRlci9IZWFkZXJTaG93bkNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vZWxlbWVudHMvbGliL21vZHVsZS9IZWFkZXIvSGVhZGVyVGl0bGUuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vZWxlbWVudHMvbGliL21vZHVsZS9IZWFkZXIvZ2V0RGVmYXVsdEhlYWRlckhlaWdodC5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9lbGVtZW50cy9saWIvbW9kdWxlL0hlYWRlci9nZXRIZWFkZXJUaXRsZS5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9lbGVtZW50cy9saWIvbW9kdWxlL01hc2tlZFZpZXdOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vZWxlbWVudHMvbGliL21vZHVsZS9QbGF0Zm9ybVByZXNzYWJsZS5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9lbGVtZW50cy9saWIvbW9kdWxlL1NhZmVBcmVhUHJvdmlkZXJDb21wYXQuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vZWxlbWVudHMvbGliL21vZHVsZS9TY3JlZW4uanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vZWxlbWVudHMvbGliL21vZHVsZS9nZXROYW1lZENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vbmF0aXZlLXN0YWNrL2xpYi9tb2R1bGUvbmF2aWdhdG9ycy9jcmVhdGVOYXRpdmVTdGFja05hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9uYXRpdmUtc3RhY2svbGliL21vZHVsZS92aWV3cy9OYXRpdmVTdGFja1ZpZXcuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vbmF0aXZlL2xpYi9tb2R1bGUvdGhlbWluZy91c2VUaGVtZS5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1uYXRpdmUtc2FmZS1hcmVhLWNvbnRleHQvbGliL21vZHVsZS9Jbml0aWFsV2luZG93LmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LW5hdGl2ZS1zYWZlLWFyZWEtY29udGV4dC9saWIvbW9kdWxlL1NhZmVBcmVhQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1uYXRpdmUtc2FmZS1hcmVhLWNvbnRleHQvbGliL21vZHVsZS9zcGVjcy9OYXRpdmVTYWZlQXJlYVByb3ZpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAcmVhY3QtbmF2aWdhdGlvbi9uYXRpdmUnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWNrZ3JvdW5kKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBzdHlsZSxcbiAgICAuLi5yZXN0XG4gIH0gPSBfcmVmO1xuICBjb25zdCB7XG4gICAgY29sb3JzXG4gIH0gPSB1c2VUaGVtZSgpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVmlldywgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBzdHlsZTogW3tcbiAgICAgIGZsZXg6IDEsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5iYWNrZ3JvdW5kXG4gICAgfSwgc3R5bGVdXG4gIH0pKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhY2tncm91bmQuanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZWQsIFBsYXRmb3JtLCBTdHlsZVNoZWV0LCBWaWV3IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IHVzZVNhZmVBcmVhRnJhbWUsIHVzZVNhZmVBcmVhSW5zZXRzIH0gZnJvbSAncmVhY3QtbmF0aXZlLXNhZmUtYXJlYS1jb250ZXh0JztcbmltcG9ydCBnZXREZWZhdWx0SGVhZGVySGVpZ2h0IGZyb20gJy4vZ2V0RGVmYXVsdEhlYWRlckhlaWdodCc7XG5pbXBvcnQgSGVhZGVyQmFja2dyb3VuZCBmcm9tICcuL0hlYWRlckJhY2tncm91bmQnO1xuaW1wb3J0IEhlYWRlclNob3duQ29udGV4dCBmcm9tICcuL0hlYWRlclNob3duQ29udGV4dCc7XG5pbXBvcnQgSGVhZGVyVGl0bGUgZnJvbSAnLi9IZWFkZXJUaXRsZSc7XG5jb25zdCB3YXJuSWZIZWFkZXJTdHlsZXNEZWZpbmVkID0gc3R5bGVzID0+IHtcbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKHN0eWxlUHJvcCA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBzdHlsZXNbc3R5bGVQcm9wXTtcbiAgICBpZiAoc3R5bGVQcm9wID09PSAncG9zaXRpb24nICYmIHZhbHVlID09PSAnYWJzb2x1dGUnKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJwb3NpdGlvbjogJ2Fic29sdXRlJyBpcyBub3Qgc3VwcG9ydGVkIG9uIGhlYWRlclN0eWxlLiBJZiB5b3Ugd291bGQgbGlrZSB0byByZW5kZXIgY29udGVudCB1bmRlciB0aGUgaGVhZGVyLCB1c2UgdGhlICdoZWFkZXJUcmFuc3BhcmVudCcgb3B0aW9uLlwiKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUud2FybihgJHtzdHlsZVByb3B9IHdhcyBnaXZlbiBhIHZhbHVlIG9mICR7dmFsdWV9LCB0aGlzIGhhcyBubyBlZmZlY3Qgb24gaGVhZGVyU3R5bGUuYCk7XG4gICAgfVxuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcbiAgY29uc3QgaW5zZXRzID0gdXNlU2FmZUFyZWFJbnNldHMoKTtcbiAgY29uc3QgZnJhbWUgPSB1c2VTYWZlQXJlYUZyYW1lKCk7XG4gIGNvbnN0IGlzUGFyZW50SGVhZGVyU2hvd24gPSBSZWFjdC51c2VDb250ZXh0KEhlYWRlclNob3duQ29udGV4dCk7XG5cbiAgLy8gT24gbW9kZWxzIHdpdGggRHluYW1pYyBJc2xhbmQgdGhlIHN0YXR1cyBiYXIgaGVpZ2h0IGlzIHNtYWxsZXIgdGhhbiB0aGUgc2FmZSBhcmVhIHRvcCBpbnNldC5cbiAgY29uc3QgaGFzRHluYW1pY0lzbGFuZCA9IFBsYXRmb3JtLk9TID09PSAnaW9zJyAmJiBpbnNldHMudG9wID4gNTA7XG4gIGNvbnN0IHN0YXR1c0JhckhlaWdodCA9IGhhc0R5bmFtaWNJc2xhbmQgPyBpbnNldHMudG9wIC0gNSA6IGluc2V0cy50b3A7XG4gIGNvbnN0IHtcbiAgICBsYXlvdXQgPSBmcmFtZSxcbiAgICBtb2RhbCA9IGZhbHNlLFxuICAgIHRpdGxlLFxuICAgIGhlYWRlclRpdGxlOiBjdXN0b21UaXRsZSxcbiAgICBoZWFkZXJUaXRsZUFsaWduID0gUGxhdGZvcm0uc2VsZWN0KHtcbiAgICAgIGlvczogJ2NlbnRlcicsXG4gICAgICBkZWZhdWx0OiAnbGVmdCdcbiAgICB9KSxcbiAgICBoZWFkZXJMZWZ0LFxuICAgIGhlYWRlckxlZnRMYWJlbFZpc2libGUsXG4gICAgaGVhZGVyVHJhbnNwYXJlbnQsXG4gICAgaGVhZGVyVGludENvbG9yLFxuICAgIGhlYWRlckJhY2tncm91bmQsXG4gICAgaGVhZGVyUmlnaHQsXG4gICAgaGVhZGVyVGl0bGVBbGxvd0ZvbnRTY2FsaW5nOiB0aXRsZUFsbG93Rm9udFNjYWxpbmcsXG4gICAgaGVhZGVyVGl0bGVTdHlsZTogdGl0bGVTdHlsZSxcbiAgICBoZWFkZXJMZWZ0Q29udGFpbmVyU3R5bGU6IGxlZnRDb250YWluZXJTdHlsZSxcbiAgICBoZWFkZXJSaWdodENvbnRhaW5lclN0eWxlOiByaWdodENvbnRhaW5lclN0eWxlLFxuICAgIGhlYWRlclRpdGxlQ29udGFpbmVyU3R5bGU6IHRpdGxlQ29udGFpbmVyU3R5bGUsXG4gICAgaGVhZGVyQmFja2dyb3VuZENvbnRhaW5lclN0eWxlOiBiYWNrZ3JvdW5kQ29udGFpbmVyU3R5bGUsXG4gICAgaGVhZGVyU3R5bGU6IGN1c3RvbUhlYWRlclN0eWxlLFxuICAgIGhlYWRlclNoYWRvd1Zpc2libGUsXG4gICAgaGVhZGVyUHJlc3NDb2xvcixcbiAgICBoZWFkZXJQcmVzc09wYWNpdHksXG4gICAgaGVhZGVyU3RhdHVzQmFySGVpZ2h0ID0gaXNQYXJlbnRIZWFkZXJTaG93biA/IDAgOiBzdGF0dXNCYXJIZWlnaHRcbiAgfSA9IHByb3BzO1xuICBjb25zdCBkZWZhdWx0SGVpZ2h0ID0gZ2V0RGVmYXVsdEhlYWRlckhlaWdodChsYXlvdXQsIG1vZGFsLCBoZWFkZXJTdGF0dXNCYXJIZWlnaHQpO1xuICBjb25zdCB7XG4gICAgaGVpZ2h0ID0gZGVmYXVsdEhlaWdodCxcbiAgICBtaW5IZWlnaHQsXG4gICAgbWF4SGVpZ2h0LFxuICAgIGJhY2tncm91bmRDb2xvcixcbiAgICBib3JkZXJCb3R0b21Db2xvcixcbiAgICBib3JkZXJCb3R0b21FbmRSYWRpdXMsXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1cyxcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1cyxcbiAgICBib3JkZXJCb3R0b21TdGFydFJhZGl1cyxcbiAgICBib3JkZXJCb3R0b21XaWR0aCxcbiAgICBib3JkZXJDb2xvcixcbiAgICBib3JkZXJFbmRDb2xvcixcbiAgICBib3JkZXJFbmRXaWR0aCxcbiAgICBib3JkZXJMZWZ0Q29sb3IsXG4gICAgYm9yZGVyTGVmdFdpZHRoLFxuICAgIGJvcmRlclJhZGl1cyxcbiAgICBib3JkZXJSaWdodENvbG9yLFxuICAgIGJvcmRlclJpZ2h0V2lkdGgsXG4gICAgYm9yZGVyU3RhcnRDb2xvcixcbiAgICBib3JkZXJTdGFydFdpZHRoLFxuICAgIGJvcmRlclN0eWxlLFxuICAgIGJvcmRlclRvcENvbG9yLFxuICAgIGJvcmRlclRvcEVuZFJhZGl1cyxcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzLFxuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzLFxuICAgIGJvcmRlclRvcFN0YXJ0UmFkaXVzLFxuICAgIGJvcmRlclRvcFdpZHRoLFxuICAgIGJvcmRlcldpZHRoLFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHdlYiBzdXBwb3J0IGZvciBzaGFkb3dcbiAgICBib3hTaGFkb3csXG4gICAgZWxldmF0aW9uLFxuICAgIHNoYWRvd0NvbG9yLFxuICAgIHNoYWRvd09mZnNldCxcbiAgICBzaGFkb3dPcGFjaXR5LFxuICAgIHNoYWRvd1JhZGl1cyxcbiAgICBvcGFjaXR5LFxuICAgIHRyYW5zZm9ybSxcbiAgICAuLi51bnNhZmVTdHlsZXNcbiAgfSA9IFN0eWxlU2hlZXQuZmxhdHRlbihjdXN0b21IZWFkZXJTdHlsZSB8fCB7fSk7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybklmSGVhZGVyU3R5bGVzRGVmaW5lZCh1bnNhZmVTdHlsZXMpO1xuICB9XG4gIGNvbnN0IHNhZmVTdHlsZXMgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yLFxuICAgIGJvcmRlckJvdHRvbUNvbG9yLFxuICAgIGJvcmRlckJvdHRvbUVuZFJhZGl1cyxcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzLFxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzLFxuICAgIGJvcmRlckJvdHRvbVN0YXJ0UmFkaXVzLFxuICAgIGJvcmRlckJvdHRvbVdpZHRoLFxuICAgIGJvcmRlckNvbG9yLFxuICAgIGJvcmRlckVuZENvbG9yLFxuICAgIGJvcmRlckVuZFdpZHRoLFxuICAgIGJvcmRlckxlZnRDb2xvcixcbiAgICBib3JkZXJMZWZ0V2lkdGgsXG4gICAgYm9yZGVyUmFkaXVzLFxuICAgIGJvcmRlclJpZ2h0Q29sb3IsXG4gICAgYm9yZGVyUmlnaHRXaWR0aCxcbiAgICBib3JkZXJTdGFydENvbG9yLFxuICAgIGJvcmRlclN0YXJ0V2lkdGgsXG4gICAgYm9yZGVyU3R5bGUsXG4gICAgYm9yZGVyVG9wQ29sb3IsXG4gICAgYm9yZGVyVG9wRW5kUmFkaXVzLFxuICAgIGJvcmRlclRvcExlZnRSYWRpdXMsXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXMsXG4gICAgYm9yZGVyVG9wU3RhcnRSYWRpdXMsXG4gICAgYm9yZGVyVG9wV2lkdGgsXG4gICAgYm9yZGVyV2lkdGgsXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogYm94U2hhZG93IGlzIG9ubHkgZm9yIFdlYlxuICAgIGJveFNoYWRvdyxcbiAgICBlbGV2YXRpb24sXG4gICAgc2hhZG93Q29sb3IsXG4gICAgc2hhZG93T2Zmc2V0LFxuICAgIHNoYWRvd09wYWNpdHksXG4gICAgc2hhZG93UmFkaXVzLFxuICAgIG9wYWNpdHksXG4gICAgdHJhbnNmb3JtXG4gIH07XG5cbiAgLy8gU2V0dGluZyBhIHByb3BlcnR5IHRvIHVuZGVmaW5lZCB0cmlnZ2VycyBkZWZhdWx0IHN0eWxlXG4gIC8vIFNvIHdlIG5lZWQgdG8gZmlsdGVyIHRoZW0gb3V0XG4gIC8vIFVzZXJzIGNhbiB1c2UgYG51bGxgIGluc3RlYWRcbiAgZm9yIChjb25zdCBzdHlsZVByb3AgaW4gc2FmZVN0eWxlcykge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHR5cGVzY3JpcHQgd3JvbmdseSBjb21wbGFpbnMgdGhhdCBzdHlsZVByb3AgY2Fubm90IGJlIHVzZWQgdG8gaW5kZXggc2FmZVN0eWxlc1xuICAgIGlmIChzYWZlU3R5bGVzW3N0eWxlUHJvcF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1keW5hbWljLWRlbGV0ZVxuICAgICAgZGVsZXRlIHNhZmVTdHlsZXNbc3R5bGVQcm9wXTtcbiAgICB9XG4gIH1cbiAgY29uc3QgYmFja2dyb3VuZFN0eWxlID0gW3NhZmVTdHlsZXMsIGhlYWRlclNoYWRvd1Zpc2libGUgPT09IGZhbHNlICYmIHtcbiAgICBlbGV2YXRpb246IDAsXG4gICAgc2hhZG93T3BhY2l0eTogMCxcbiAgICBib3JkZXJCb3R0b21XaWR0aDogMFxuICB9XTtcbiAgY29uc3QgbGVmdEJ1dHRvbiA9IGhlYWRlckxlZnQgPyBoZWFkZXJMZWZ0KHtcbiAgICB0aW50Q29sb3I6IGhlYWRlclRpbnRDb2xvcixcbiAgICBwcmVzc0NvbG9yOiBoZWFkZXJQcmVzc0NvbG9yLFxuICAgIHByZXNzT3BhY2l0eTogaGVhZGVyUHJlc3NPcGFjaXR5LFxuICAgIGxhYmVsVmlzaWJsZTogaGVhZGVyTGVmdExhYmVsVmlzaWJsZVxuICB9KSA6IG51bGw7XG4gIGNvbnN0IHJpZ2h0QnV0dG9uID0gaGVhZGVyUmlnaHQgPyBoZWFkZXJSaWdodCh7XG4gICAgdGludENvbG9yOiBoZWFkZXJUaW50Q29sb3IsXG4gICAgcHJlc3NDb2xvcjogaGVhZGVyUHJlc3NDb2xvcixcbiAgICBwcmVzc09wYWNpdHk6IGhlYWRlclByZXNzT3BhY2l0eVxuICB9KSA6IG51bGw7XG4gIGNvbnN0IGhlYWRlclRpdGxlID0gdHlwZW9mIGN1c3RvbVRpdGxlICE9PSAnZnVuY3Rpb24nID8gcHJvcHMgPT4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyVGl0bGUsIHByb3BzKSA6IGN1c3RvbVRpdGxlO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFuaW1hdGVkLlZpZXcsIHtcbiAgICBwb2ludGVyRXZlbnRzOiBcImJveC1ub25lXCIsXG4gICAgc3R5bGU6IFtTdHlsZVNoZWV0LmFic29sdXRlRmlsbCwge1xuICAgICAgekluZGV4OiAwXG4gICAgfSwgYmFja2dyb3VuZENvbnRhaW5lclN0eWxlXVxuICB9LCBoZWFkZXJCYWNrZ3JvdW5kID8gaGVhZGVyQmFja2dyb3VuZCh7XG4gICAgc3R5bGU6IGJhY2tncm91bmRTdHlsZVxuICB9KSA6IGhlYWRlclRyYW5zcGFyZW50ID8gbnVsbCA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlckJhY2tncm91bmQsIHtcbiAgICBzdHlsZTogYmFja2dyb3VuZFN0eWxlXG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQW5pbWF0ZWQuVmlldywge1xuICAgIHBvaW50ZXJFdmVudHM6IFwiYm94LW5vbmVcIixcbiAgICBzdHlsZTogW3tcbiAgICAgIGhlaWdodCxcbiAgICAgIG1pbkhlaWdodCxcbiAgICAgIG1heEhlaWdodCxcbiAgICAgIG9wYWNpdHksXG4gICAgICB0cmFuc2Zvcm1cbiAgICB9XVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChWaWV3LCB7XG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG4gICAgc3R5bGU6IHtcbiAgICAgIGhlaWdodDogaGVhZGVyU3RhdHVzQmFySGVpZ2h0XG4gICAgfVxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVmlldywge1xuICAgIHBvaW50ZXJFdmVudHM6IFwiYm94LW5vbmVcIixcbiAgICBzdHlsZTogc3R5bGVzLmNvbnRlbnRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQW5pbWF0ZWQuVmlldywge1xuICAgIHBvaW50ZXJFdmVudHM6IFwiYm94LW5vbmVcIixcbiAgICBzdHlsZTogW3N0eWxlcy5sZWZ0LCBoZWFkZXJUaXRsZUFsaWduID09PSAnY2VudGVyJyAmJiBzdHlsZXMuZXhwYW5kLCB7XG4gICAgICBtYXJnaW5TdGFydDogaW5zZXRzLmxlZnRcbiAgICB9LCBsZWZ0Q29udGFpbmVyU3R5bGVdXG4gIH0sIGxlZnRCdXR0b24pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBbmltYXRlZC5WaWV3LCB7XG4gICAgcG9pbnRlckV2ZW50czogXCJib3gtbm9uZVwiLFxuICAgIHN0eWxlOiBbc3R5bGVzLnRpdGxlLCB7XG4gICAgICAvLyBBdm9pZCB0aGUgdGl0bGUgZnJvbSBnb2luZyBvZmZzY3JlZW4gb3Igb3ZlcmxhcHBpbmcgYnV0dG9uc1xuICAgICAgbWF4V2lkdGg6IGhlYWRlclRpdGxlQWxpZ24gPT09ICdjZW50ZXInID8gbGF5b3V0LndpZHRoIC0gKChsZWZ0QnV0dG9uID8gaGVhZGVyTGVmdExhYmVsVmlzaWJsZSAhPT0gZmFsc2UgPyA4MCA6IDMyIDogMTYpICsgTWF0aC5tYXgoaW5zZXRzLmxlZnQsIGluc2V0cy5yaWdodCkpICogMiA6IGxheW91dC53aWR0aCAtICgobGVmdEJ1dHRvbiA/IDcyIDogMTYpICsgKHJpZ2h0QnV0dG9uID8gNzIgOiAxNikgKyBpbnNldHMubGVmdCAtIGluc2V0cy5yaWdodClcbiAgICB9LCB0aXRsZUNvbnRhaW5lclN0eWxlXVxuICB9LCBoZWFkZXJUaXRsZSh7XG4gICAgY2hpbGRyZW46IHRpdGxlLFxuICAgIGFsbG93Rm9udFNjYWxpbmc6IHRpdGxlQWxsb3dGb250U2NhbGluZyxcbiAgICB0aW50Q29sb3I6IGhlYWRlclRpbnRDb2xvcixcbiAgICBzdHlsZTogdGl0bGVTdHlsZVxuICB9KSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFuaW1hdGVkLlZpZXcsIHtcbiAgICBwb2ludGVyRXZlbnRzOiBcImJveC1ub25lXCIsXG4gICAgc3R5bGU6IFtzdHlsZXMucmlnaHQsIHN0eWxlcy5leHBhbmQsIHtcbiAgICAgIG1hcmdpbkVuZDogaW5zZXRzLnJpZ2h0XG4gICAgfSwgcmlnaHRDb250YWluZXJTdHlsZV1cbiAgfSwgcmlnaHRCdXR0b24pKSkpO1xufVxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBjb250ZW50OiB7XG4gICAgZmxleDogMSxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnc3RyZXRjaCdcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBtYXJnaW5Ib3Jpem9udGFsOiAxNixcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgfSxcbiAgbGVmdDoge1xuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCdcbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJ1xuICB9LFxuICBleHBhbmQ6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgICBmbGV4QmFzaXM6IDBcbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1IZWFkZXIuanMubWFwIiwiaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAcmVhY3QtbmF2aWdhdGlvbi9uYXRpdmUnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZWQsIEkxOG5NYW5hZ2VyLCBJbWFnZSwgUGxhdGZvcm0sIFN0eWxlU2hlZXQsIFZpZXcgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IE1hc2tlZFZpZXcgZnJvbSAnLi4vTWFza2VkVmlldyc7XG5pbXBvcnQgUGxhdGZvcm1QcmVzc2FibGUgZnJvbSAnLi4vUGxhdGZvcm1QcmVzc2FibGUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyQmFja0J1dHRvbihfcmVmKSB7XG4gIGxldCB7XG4gICAgZGlzYWJsZWQsXG4gICAgYWxsb3dGb250U2NhbGluZyxcbiAgICBiYWNrSW1hZ2UsXG4gICAgbGFiZWwsXG4gICAgbGFiZWxTdHlsZSxcbiAgICBsYWJlbFZpc2libGUgPSBQbGF0Zm9ybS5PUyA9PT0gJ2lvcycsXG4gICAgb25MYWJlbExheW91dCxcbiAgICBvblByZXNzLFxuICAgIHByZXNzQ29sb3IsXG4gICAgcHJlc3NPcGFjaXR5LFxuICAgIHNjcmVlbkxheW91dCxcbiAgICB0aW50Q29sb3I6IGN1c3RvbVRpbnRDb2xvcixcbiAgICB0aXRsZUxheW91dCxcbiAgICB0cnVuY2F0ZWRMYWJlbCA9ICdCYWNrJyxcbiAgICBhY2Nlc3NpYmlsaXR5TGFiZWwgPSBsYWJlbCAmJiBsYWJlbCAhPT0gJ0JhY2snID8gYCR7bGFiZWx9LCBiYWNrYCA6ICdHbyBiYWNrJyxcbiAgICB0ZXN0SUQsXG4gICAgc3R5bGVcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHtcbiAgICBjb2xvcnNcbiAgfSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFtpbml0aWFsTGFiZWxXaWR0aCwgc2V0SW5pdGlhbExhYmVsV2lkdGhdID0gUmVhY3QudXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgdGludENvbG9yID0gY3VzdG9tVGludENvbG9yICE9PSB1bmRlZmluZWQgPyBjdXN0b21UaW50Q29sb3IgOiBQbGF0Zm9ybS5zZWxlY3Qoe1xuICAgIGlvczogY29sb3JzLnByaW1hcnksXG4gICAgZGVmYXVsdDogY29sb3JzLnRleHRcbiAgfSk7XG4gIGNvbnN0IGhhbmRsZUxhYmVsTGF5b3V0ID0gZSA9PiB7XG4gICAgb25MYWJlbExheW91dCA9PT0gbnVsbCB8fCBvbkxhYmVsTGF5b3V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkxhYmVsTGF5b3V0KGUpO1xuICAgIHNldEluaXRpYWxMYWJlbFdpZHRoKGUubmF0aXZlRXZlbnQubGF5b3V0LnggKyBlLm5hdGl2ZUV2ZW50LmxheW91dC53aWR0aCk7XG4gIH07XG4gIGNvbnN0IHNob3VsZFRydW5jYXRlTGFiZWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuICFsYWJlbCB8fCBpbml0aWFsTGFiZWxXaWR0aCAmJiB0aXRsZUxheW91dCAmJiBzY3JlZW5MYXlvdXQgJiYgKHNjcmVlbkxheW91dC53aWR0aCAtIHRpdGxlTGF5b3V0LndpZHRoKSAvIDIgPCBpbml0aWFsTGFiZWxXaWR0aCArIDI2O1xuICB9O1xuICBjb25zdCByZW5kZXJCYWNrSW1hZ2UgPSAoKSA9PiB7XG4gICAgaWYgKGJhY2tJbWFnZSkge1xuICAgICAgcmV0dXJuIGJhY2tJbWFnZSh7XG4gICAgICAgIHRpbnRDb2xvclxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZSwge1xuICAgICAgICBzdHlsZTogW3N0eWxlcy5pY29uLCBCb29sZWFuKGxhYmVsVmlzaWJsZSkgJiYgc3R5bGVzLmljb25XaXRoTGFiZWwsIEJvb2xlYW4odGludENvbG9yKSAmJiB7XG4gICAgICAgICAgdGludENvbG9yXG4gICAgICAgIH1dLFxuICAgICAgICBzb3VyY2U6IHJlcXVpcmUoJy4uL2Fzc2V0cy9iYWNrLWljb24ucG5nJyksXG4gICAgICAgIGZhZGVEdXJhdGlvbjogMFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW5kZXJMYWJlbCA9ICgpID0+IHtcbiAgICBjb25zdCBsZWZ0TGFiZWxUZXh0ID0gc2hvdWxkVHJ1bmNhdGVMYWJlbCgpID8gdHJ1bmNhdGVkTGFiZWwgOiBsYWJlbDtcbiAgICBpZiAoIWxhYmVsVmlzaWJsZSB8fCBsZWZ0TGFiZWxUZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChWaWV3LCB7XG4gICAgICBzdHlsZTogc2NyZWVuTGF5b3V0ID9cbiAgICAgIC8vIFdlIG1ha2UgdGhlIGJ1dHRvbiBleHRlbmQgdGlsbCB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW5cbiAgICAgIC8vIE90aGVyd2lzZSBpdCBhcHBlYXJzIHRvIGN1dCBvZmYgd2hlbiB0cmFuc2xhdGluZ1xuICAgICAgW3N0eWxlcy5sYWJlbFdyYXBwZXIsIHtcbiAgICAgICAgbWluV2lkdGg6IHNjcmVlbkxheW91dC53aWR0aCAvIDIgLSAyN1xuICAgICAgfV0gOiBudWxsXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQW5pbWF0ZWQuVGV4dCwge1xuICAgICAgYWNjZXNzaWJsZTogZmFsc2UsXG4gICAgICBvbkxheW91dDpcbiAgICAgIC8vIFRoaXMgbWVhc3VyZW1lbnQgaXMgdXNlZCB0byBkZXRlcm1pbmUgaWYgd2Ugc2hvdWxkIHRydW5jYXRlIHRoZSBsYWJlbCB3aGVuIGl0IGRvZXNuJ3QgZml0XG4gICAgICAvLyBPbmx5IG1lYXN1cmUgaXQgd2hlbiBsYWJlbCBpcyBub3QgdHJ1bmNhdGVkIGJlY2F1c2Ugd2Ugd2FudCB0aGUgbWVhc3VyZW1lbnQgb2YgZnVsbCBsYWJlbFxuICAgICAgbGVmdExhYmVsVGV4dCA9PT0gbGFiZWwgPyBoYW5kbGVMYWJlbExheW91dCA6IHVuZGVmaW5lZCxcbiAgICAgIHN0eWxlOiBbc3R5bGVzLmxhYmVsLCB0aW50Q29sb3IgPyB7XG4gICAgICAgIGNvbG9yOiB0aW50Q29sb3JcbiAgICAgIH0gOiBudWxsLCBsYWJlbFN0eWxlXSxcbiAgICAgIG51bWJlck9mTGluZXM6IDEsXG4gICAgICBhbGxvd0ZvbnRTY2FsaW5nOiAhIWFsbG93Rm9udFNjYWxpbmdcbiAgICB9LCBsZWZ0TGFiZWxUZXh0KSk7XG4gICAgaWYgKGJhY2tJbWFnZSB8fCBQbGF0Zm9ybS5PUyAhPT0gJ2lvcycpIHtcbiAgICAgIC8vIFdoZW4gYSBjdXN0b20gYmFja2ltYWdlIGlzIHNwZWNpZmllZCwgd2UgY2FuJ3QgbWFzayB0aGUgbGFiZWxcbiAgICAgIC8vIE90aGVyd2lzZSB0aGVyZSBtaWdodCBiZSB3ZWlyZCBlZmZlY3QgZHVlIHRvIG91ciBtYXNrIG5vdCBiZWluZyB0aGUgc2FtZSBhcyB0aGUgaW1hZ2VcbiAgICAgIHJldHVybiBsYWJlbEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNYXNrZWRWaWV3LCB7XG4gICAgICBtYXNrRWxlbWVudDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVmlldywge1xuICAgICAgICBzdHlsZTogc3R5bGVzLmljb25NYXNrQ29udGFpbmVyXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZSwge1xuICAgICAgICBzb3VyY2U6IHJlcXVpcmUoJy4uL2Fzc2V0cy9iYWNrLWljb24tbWFzay5wbmcnKSxcbiAgICAgICAgc3R5bGU6IHN0eWxlcy5pY29uTWFza1xuICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFZpZXcsIHtcbiAgICAgICAgc3R5bGU6IHN0eWxlcy5pY29uTWFza0ZpbGxlclJlY3RcbiAgICAgIH0pKVxuICAgIH0sIGxhYmVsRWxlbWVudCk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVByZXNzID0gKCkgPT4gb25QcmVzcyAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUob25QcmVzcyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQbGF0Zm9ybVByZXNzYWJsZSwge1xuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICBhY2Nlc3NpYmxlOiB0cnVlLFxuICAgIGFjY2Vzc2liaWxpdHlSb2xlOiBcImJ1dHRvblwiLFxuICAgIGFjY2Vzc2liaWxpdHlMYWJlbDogYWNjZXNzaWJpbGl0eUxhYmVsLFxuICAgIHRlc3RJRDogdGVzdElELFxuICAgIG9uUHJlc3M6IGRpc2FibGVkID8gdW5kZWZpbmVkIDogaGFuZGxlUHJlc3MsXG4gICAgcHJlc3NDb2xvcjogcHJlc3NDb2xvcixcbiAgICBwcmVzc09wYWNpdHk6IHByZXNzT3BhY2l0eSxcbiAgICBhbmRyb2lkX3JpcHBsZTogYW5kcm9pZFJpcHBsZSxcbiAgICBzdHlsZTogW3N0eWxlcy5jb250YWluZXIsIGRpc2FibGVkICYmIHN0eWxlcy5kaXNhYmxlZCwgc3R5bGVdLFxuICAgIGhpdFNsb3A6IFBsYXRmb3JtLnNlbGVjdCh7XG4gICAgICBpb3M6IHVuZGVmaW5lZCxcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdG9wOiAxNixcbiAgICAgICAgcmlnaHQ6IDE2LFxuICAgICAgICBib3R0b206IDE2LFxuICAgICAgICBsZWZ0OiAxNlxuICAgICAgfVxuICAgIH0pXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCByZW5kZXJCYWNrSW1hZ2UoKSwgcmVuZGVyTGFiZWwoKSkpO1xufVxuY29uc3QgYW5kcm9pZFJpcHBsZSA9IHtcbiAgYm9yZGVybGVzczogdHJ1ZSxcbiAgZm9yZWdyb3VuZDogUGxhdGZvcm0uT1MgPT09ICdhbmRyb2lkJyAmJiBQbGF0Zm9ybS5WZXJzaW9uID49IDIzLFxuICByYWRpdXM6IDIwXG59O1xuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBjb250YWluZXI6IHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBtaW5XaWR0aDogU3R5bGVTaGVldC5oYWlybGluZVdpZHRoLFxuICAgIC8vIEF2b2lkIGNvbGxhcHNpbmcgd2hlbiB0aXRsZSBpcyBsb25nXG4gICAgLi4uUGxhdGZvcm0uc2VsZWN0KHtcbiAgICAgIGlvczogbnVsbCxcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgbWFyZ2luVmVydGljYWw6IDMsXG4gICAgICAgIG1hcmdpbkhvcml6b250YWw6IDExXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBvcGFjaXR5OiAwLjVcbiAgfSxcbiAgbGFiZWw6IHtcbiAgICBmb250U2l6ZTogMTcsXG4gICAgLy8gVGl0bGUgYW5kIGJhY2sgbGFiZWwgYXJlIGEgYml0IGRpZmZlcmVudCB3aWR0aCBkdWUgdG8gdGl0bGUgYmVpbmcgYm9sZFxuICAgIC8vIEFkanVzdGluZyB0aGUgbGV0dGVyU3BhY2luZyBtYWtlcyB0aGVtIGNvaW5jaWRlIGJldHRlclxuICAgIGxldHRlclNwYWNpbmc6IDAuMzVcbiAgfSxcbiAgbGFiZWxXcmFwcGVyOiB7XG4gICAgLy8gVGhlc2Ugc3R5bGVzIHdpbGwgbWFrZSBzdXJlIHRoYXQgdGhlIGxhYmVsIGRvZXNuJ3QgZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlXG4gICAgLy8gT3RoZXJ3aXNlIGl0IG1lc3NlcyB3aXRoIHRoZSBtZWFzdXJlbWVudCBvZiB0aGUgbGFiZWxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCdcbiAgfSxcbiAgaWNvbjogUGxhdGZvcm0uc2VsZWN0KHtcbiAgICBpb3M6IHtcbiAgICAgIGhlaWdodDogMjEsXG4gICAgICB3aWR0aDogMTMsXG4gICAgICBtYXJnaW5MZWZ0OiA4LFxuICAgICAgbWFyZ2luUmlnaHQ6IDIyLFxuICAgICAgbWFyZ2luVmVydGljYWw6IDEyLFxuICAgICAgcmVzaXplTW9kZTogJ2NvbnRhaW4nLFxuICAgICAgdHJhbnNmb3JtOiBbe1xuICAgICAgICBzY2FsZVg6IEkxOG5NYW5hZ2VyLmdldENvbnN0YW50cygpLmlzUlRMID8gLTEgOiAxXG4gICAgICB9XVxuICAgIH0sXG4gICAgZGVmYXVsdDoge1xuICAgICAgaGVpZ2h0OiAyNCxcbiAgICAgIHdpZHRoOiAyNCxcbiAgICAgIG1hcmdpbjogMyxcbiAgICAgIHJlc2l6ZU1vZGU6ICdjb250YWluJyxcbiAgICAgIHRyYW5zZm9ybTogW3tcbiAgICAgICAgc2NhbGVYOiBJMThuTWFuYWdlci5nZXRDb25zdGFudHMoKS5pc1JUTCA/IC0xIDogMVxuICAgICAgfV1cbiAgICB9XG4gIH0pLFxuICBpY29uV2l0aExhYmVsOiBQbGF0Zm9ybS5PUyA9PT0gJ2lvcycgPyB7XG4gICAgbWFyZ2luUmlnaHQ6IDZcbiAgfSA6IHt9LFxuICBpY29uTWFza0NvbnRhaW5lcjoge1xuICAgIGZsZXg6IDEsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gIH0sXG4gIGljb25NYXNrRmlsbGVyUmVjdDoge1xuICAgIGZsZXg6IDEsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMCdcbiAgfSxcbiAgaWNvbk1hc2s6IHtcbiAgICBoZWlnaHQ6IDIxLFxuICAgIHdpZHRoOiAxMyxcbiAgICBtYXJnaW5MZWZ0OiAtMTQuNSxcbiAgICBtYXJnaW5WZXJ0aWNhbDogMTIsXG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICByZXNpemVNb2RlOiAnY29udGFpbicsXG4gICAgdHJhbnNmb3JtOiBbe1xuICAgICAgc2NhbGVYOiBJMThuTWFuYWdlci5nZXRDb25zdGFudHMoKS5pc1JUTCA/IC0xIDogMVxuICAgIH1dXG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SGVhZGVyQmFja0J1dHRvbi5qcy5tYXAiLCJpbXBvcnQgZ2V0TmFtZWRDb250ZXh0IGZyb20gJy4uL2dldE5hbWVkQ29udGV4dCc7XG5jb25zdCBIZWFkZXJCYWNrQ29udGV4dCA9IGdldE5hbWVkQ29udGV4dCgnSGVhZGVyQmFja0NvbnRleHQnLCB1bmRlZmluZWQpO1xuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQmFja0NvbnRleHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1IZWFkZXJCYWNrQ29udGV4dC5qcy5tYXAiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQHJlYWN0LW5hdmlnYXRpb24vbmF0aXZlJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVkLCBQbGF0Zm9ybSwgU3R5bGVTaGVldCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJCYWNrZ3JvdW5kKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBzdHlsZSxcbiAgICAuLi5yZXN0XG4gIH0gPSBfcmVmO1xuICBjb25zdCB7XG4gICAgY29sb3JzXG4gIH0gPSB1c2VUaGVtZSgpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQW5pbWF0ZWQuVmlldywgX2V4dGVuZHMoe1xuICAgIHN0eWxlOiBbc3R5bGVzLmNvbnRhaW5lciwge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY2FyZCxcbiAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvcnMuYm9yZGVyLFxuICAgICAgc2hhZG93Q29sb3I6IGNvbG9ycy5ib3JkZXJcbiAgICB9LCBzdHlsZV1cbiAgfSwgcmVzdCkpO1xufVxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBjb250YWluZXI6IHtcbiAgICBmbGV4OiAxLFxuICAgIC4uLlBsYXRmb3JtLnNlbGVjdCh7XG4gICAgICBhbmRyb2lkOiB7XG4gICAgICAgIGVsZXZhdGlvbjogNFxuICAgICAgfSxcbiAgICAgIGlvczoge1xuICAgICAgICBzaGFkb3dPcGFjaXR5OiAwLjg1LFxuICAgICAgICBzaGFkb3dSYWRpdXM6IDAsXG4gICAgICAgIHNoYWRvd09mZnNldDoge1xuICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgIGhlaWdodDogU3R5bGVTaGVldC5oYWlybGluZVdpZHRoXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiBTdHlsZVNoZWV0LmhhaXJsaW5lV2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUhlYWRlckJhY2tncm91bmQuanMubWFwIiwiaW1wb3J0IGdldE5hbWVkQ29udGV4dCBmcm9tICcuLi9nZXROYW1lZENvbnRleHQnO1xuY29uc3QgSGVhZGVySGVpZ2h0Q29udGV4dCA9IGdldE5hbWVkQ29udGV4dCgnSGVhZGVySGVpZ2h0Q29udGV4dCcsIHVuZGVmaW5lZCk7XG5leHBvcnQgZGVmYXVsdCBIZWFkZXJIZWlnaHRDb250ZXh0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SGVhZGVySGVpZ2h0Q29udGV4dC5qcy5tYXAiLCJpbXBvcnQgZ2V0TmFtZWRDb250ZXh0IGZyb20gJy4uL2dldE5hbWVkQ29udGV4dCc7XG5jb25zdCBIZWFkZXJTaG93bkNvbnRleHQgPSBnZXROYW1lZENvbnRleHQoJ0hlYWRlclNob3duQ29udGV4dCcsIGZhbHNlKTtcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclNob3duQ29udGV4dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUhlYWRlclNob3duQ29udGV4dC5qcy5tYXAiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQHJlYWN0LW5hdmlnYXRpb24vbmF0aXZlJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVkLCBQbGF0Zm9ybSwgU3R5bGVTaGVldCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJUaXRsZShfcmVmKSB7XG4gIGxldCB7XG4gICAgdGludENvbG9yLFxuICAgIHN0eWxlLFxuICAgIC4uLnJlc3RcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHtcbiAgICBjb2xvcnNcbiAgfSA9IHVzZVRoZW1lKCk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBbmltYXRlZC5UZXh0LCBfZXh0ZW5kcyh7XG4gICAgYWNjZXNzaWJpbGl0eVJvbGU6IFwiaGVhZGVyXCIsXG4gICAgXCJhcmlhLWxldmVsXCI6IFwiMVwiLFxuICAgIG51bWJlck9mTGluZXM6IDFcbiAgfSwgcmVzdCwge1xuICAgIHN0eWxlOiBbc3R5bGVzLnRpdGxlLCB7XG4gICAgICBjb2xvcjogdGludENvbG9yID09PSB1bmRlZmluZWQgPyBjb2xvcnMudGV4dCA6IHRpbnRDb2xvclxuICAgIH0sIHN0eWxlXVxuICB9KSk7XG59XG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIHRpdGxlOiBQbGF0Zm9ybS5zZWxlY3Qoe1xuICAgIGlvczoge1xuICAgICAgZm9udFNpemU6IDE3LFxuICAgICAgZm9udFdlaWdodDogJzYwMCdcbiAgICB9LFxuICAgIGFuZHJvaWQ6IHtcbiAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmLW1lZGl1bScsXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJ1xuICAgIH0sXG4gICAgZGVmYXVsdDoge1xuICAgICAgZm9udFNpemU6IDE4LFxuICAgICAgZm9udFdlaWdodDogJzUwMCdcbiAgICB9XG4gIH0pXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUhlYWRlclRpdGxlLmpzLm1hcCIsImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRIZWFkZXJIZWlnaHQobGF5b3V0LCBtb2RhbFByZXNlbnRhdGlvbiwgc3RhdHVzQmFySGVpZ2h0KSB7XG4gIGxldCBoZWFkZXJIZWlnaHQ7XG4gIGNvbnN0IGlzTGFuZHNjYXBlID0gbGF5b3V0LndpZHRoID4gbGF5b3V0LmhlaWdodDtcbiAgaWYgKFBsYXRmb3JtLk9TID09PSAnaW9zJykge1xuICAgIGlmIChQbGF0Zm9ybS5pc1BhZCB8fCBQbGF0Zm9ybS5pc1RWKSB7XG4gICAgICBpZiAobW9kYWxQcmVzZW50YXRpb24pIHtcbiAgICAgICAgaGVhZGVySGVpZ2h0ID0gNTY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXJIZWlnaHQgPSA1MDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzTGFuZHNjYXBlKSB7XG4gICAgICAgIGhlYWRlckhlaWdodCA9IDMyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG1vZGFsUHJlc2VudGF0aW9uKSB7XG4gICAgICAgICAgaGVhZGVySGVpZ2h0ID0gNTY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGVhZGVySGVpZ2h0ID0gNDQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoUGxhdGZvcm0uT1MgPT09ICdhbmRyb2lkJykge1xuICAgIGhlYWRlckhlaWdodCA9IDU2O1xuICB9IGVsc2Uge1xuICAgIGhlYWRlckhlaWdodCA9IDY0O1xuICB9XG4gIHJldHVybiBoZWFkZXJIZWlnaHQgKyBzdGF0dXNCYXJIZWlnaHQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZXREZWZhdWx0SGVhZGVySGVpZ2h0LmpzLm1hcCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEhlYWRlclRpdGxlKG9wdGlvbnMsIGZhbGxiYWNrKSB7XG4gIHJldHVybiB0eXBlb2Ygb3B0aW9ucy5oZWFkZXJUaXRsZSA9PT0gJ3N0cmluZycgPyBvcHRpb25zLmhlYWRlclRpdGxlIDogb3B0aW9ucy50aXRsZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy50aXRsZSA6IGZhbGxiYWNrO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0SGVhZGVyVGl0bGUuanMubWFwIiwiLyoqXG4gKiBUaGUgbmF0aXZlIE1hc2tlZFZpZXcgdGhhdCB3ZSBleHBsaWNpdGx5IHJlLWV4cG9ydCBmb3Igc3VwcG9ydGVkIHBsYXRmb3JtczogQW5kcm9pZCwgaU9TLlxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xubGV0IFJOQ01hc2tlZFZpZXc7XG50cnkge1xuICAvLyBBZGQgdHJ5L2NhdGNoIHRvIHN1cHBvcnQgdXNhZ2UgZXZlbiBpZiBpdCdzIG5vdCBpbnN0YWxsZWQsIHNpbmNlIGl0J3Mgb3B0aW9uYWwuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIE1ldHJvIHdpbGwgaGFuZGxlIGl0IHByb3Blcmx5LlxuICBSTkNNYXNrZWRWaWV3ID0gcmVxdWlyZSgnQHJlYWN0LW5hdGl2ZS1tYXNrZWQtdmlldy9tYXNrZWQtdmlldycpLmRlZmF1bHQ7XG59IGNhdGNoIChlKSB7XG4gIC8vIElnbm9yZVxufVxuY29uc3QgaXNNYXNrZWRWaWV3QXZhaWxhYmxlID0gVUlNYW5hZ2VyLmdldFZpZXdNYW5hZ2VyQ29uZmlnKCdSTkNNYXNrZWRWaWV3JykgIT0gbnVsbDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hc2tlZFZpZXcoX3JlZikge1xuICBsZXQge1xuICAgIGNoaWxkcmVuLFxuICAgIC4uLnJlc3RcbiAgfSA9IF9yZWY7XG4gIGlmIChpc01hc2tlZFZpZXdBdmFpbGFibGUgJiYgUk5DTWFza2VkVmlldykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSTkNNYXNrZWRWaWV3LCByZXN0LCBjaGlsZHJlbik7XG4gIH1cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TWFza2VkVmlld05hdGl2ZS5qcy5tYXAiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQHJlYWN0LW5hdmlnYXRpb24vbmF0aXZlJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVkLCBFYXNpbmcsIFBsYXRmb3JtLCBQcmVzc2FibGUgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuY29uc3QgQW5pbWF0ZWRQcmVzc2FibGUgPSBBbmltYXRlZC5jcmVhdGVBbmltYXRlZENvbXBvbmVudChQcmVzc2FibGUpO1xuY29uc3QgQU5EUk9JRF9WRVJTSU9OX0xPTExJUE9QID0gMjE7XG5jb25zdCBBTkRST0lEX1NVUFBPUlRTX1JJUFBMRSA9IFBsYXRmb3JtLk9TID09PSAnYW5kcm9pZCcgJiYgUGxhdGZvcm0uVmVyc2lvbiA+PSBBTkRST0lEX1ZFUlNJT05fTE9MTElQT1A7XG5cbi8qKlxuICogUGxhdGZvcm1QcmVzc2FibGUgcHJvdmlkZXMgYW4gYWJzdHJhY3Rpb24gb24gdG9wIG9mIFByZXNzYWJsZSB0byBoYW5kbGUgcGxhdGZvcm0gZGlmZmVyZW5jZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXRmb3JtUHJlc3NhYmxlKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBvblByZXNzSW4sXG4gICAgb25QcmVzc091dCxcbiAgICBhbmRyb2lkX3JpcHBsZSxcbiAgICBwcmVzc0NvbG9yLFxuICAgIHByZXNzT3BhY2l0eSA9IDAuMyxcbiAgICBzdHlsZSxcbiAgICAuLi5yZXN0XG4gIH0gPSBfcmVmO1xuICBjb25zdCB7XG4gICAgZGFya1xuICB9ID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgW29wYWNpdHldID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gbmV3IEFuaW1hdGVkLlZhbHVlKDEpKTtcbiAgY29uc3QgYW5pbWF0ZVRvID0gKHRvVmFsdWUsIGR1cmF0aW9uKSA9PiB7XG4gICAgaWYgKEFORFJPSURfU1VQUE9SVFNfUklQUExFKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIEFuaW1hdGVkLnRpbWluZyhvcGFjaXR5LCB7XG4gICAgICB0b1ZhbHVlLFxuICAgICAgZHVyYXRpb24sXG4gICAgICBlYXNpbmc6IEVhc2luZy5pbk91dChFYXNpbmcucXVhZCksXG4gICAgICB1c2VOYXRpdmVEcml2ZXI6IHRydWVcbiAgICB9KS5zdGFydCgpO1xuICB9O1xuICBjb25zdCBoYW5kbGVQcmVzc0luID0gZSA9PiB7XG4gICAgYW5pbWF0ZVRvKHByZXNzT3BhY2l0eSwgMCk7XG4gICAgb25QcmVzc0luID09PSBudWxsIHx8IG9uUHJlc3NJbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25QcmVzc0luKGUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVQcmVzc091dCA9IGUgPT4ge1xuICAgIGFuaW1hdGVUbygxLCAyMDApO1xuICAgIG9uUHJlc3NPdXQgPT09IG51bGwgfHwgb25QcmVzc091dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25QcmVzc091dChlKTtcbiAgfTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFuaW1hdGVkUHJlc3NhYmxlLCBfZXh0ZW5kcyh7XG4gICAgb25QcmVzc0luOiBoYW5kbGVQcmVzc0luLFxuICAgIG9uUHJlc3NPdXQ6IGhhbmRsZVByZXNzT3V0LFxuICAgIGFuZHJvaWRfcmlwcGxlOiBBTkRST0lEX1NVUFBPUlRTX1JJUFBMRSA/IHtcbiAgICAgIGNvbG9yOiBwcmVzc0NvbG9yICE9PSB1bmRlZmluZWQgPyBwcmVzc0NvbG9yIDogZGFyayA/ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIC4zMiknIDogJ3JnYmEoMCwgMCwgMCwgLjMyKScsXG4gICAgICAuLi5hbmRyb2lkX3JpcHBsZVxuICAgIH0gOiB1bmRlZmluZWQsXG4gICAgc3R5bGU6IFt7XG4gICAgICBvcGFjaXR5OiAhQU5EUk9JRF9TVVBQT1JUU19SSVBQTEUgPyBvcGFjaXR5IDogMVxuICAgIH0sIHN0eWxlXVxuICB9LCByZXN0KSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1QbGF0Zm9ybVByZXNzYWJsZS5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEaW1lbnNpb25zLCBQbGF0Zm9ybSwgU3R5bGVTaGVldCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBpbml0aWFsV2luZG93TWV0cmljcywgU2FmZUFyZWFGcmFtZUNvbnRleHQsIFNhZmVBcmVhSW5zZXRzQ29udGV4dCwgU2FmZUFyZWFQcm92aWRlciB9IGZyb20gJ3JlYWN0LW5hdGl2ZS1zYWZlLWFyZWEtY29udGV4dCc7XG5jb25zdCB7XG4gIHdpZHRoID0gMCxcbiAgaGVpZ2h0ID0gMFxufSA9IERpbWVuc2lvbnMuZ2V0KCd3aW5kb3cnKTtcblxuLy8gVG8gc3VwcG9ydCBTU1Igb24gd2ViLCB3ZSBuZWVkIHRvIGhhdmUgZW1wdHkgaW5zZXRzIGZvciBpbml0aWFsIHZhbHVlc1xuLy8gT3RoZXJ3aXNlIHRoZXJlIGNhbiBiZSBtaXNtYXRjaCBiZXR3ZWVuIFNTUiBhbmQgY2xpZW50IG91dHB1dFxuLy8gV2UgYWxzbyBuZWVkIHRvIHNwZWNpZnkgZW1wdHkgdmFsdWVzIHRvIHN1cHBvcnQgdGVzdHMgZW52aXJvbm1lbnRzXG5jb25zdCBpbml0aWFsTWV0cmljcyA9IFBsYXRmb3JtLk9TID09PSAnd2ViJyB8fCBpbml0aWFsV2luZG93TWV0cmljcyA9PSBudWxsID8ge1xuICBmcmFtZToge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHRcbiAgfSxcbiAgaW5zZXRzOiB7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwXG4gIH1cbn0gOiBpbml0aWFsV2luZG93TWV0cmljcztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhZmVBcmVhUHJvdmlkZXJDb21wYXQoX3JlZikge1xuICBsZXQge1xuICAgIGNoaWxkcmVuLFxuICAgIHN0eWxlXG4gIH0gPSBfcmVmO1xuICBjb25zdCBpbnNldHMgPSBSZWFjdC51c2VDb250ZXh0KFNhZmVBcmVhSW5zZXRzQ29udGV4dCk7XG4gIGlmIChpbnNldHMpIHtcbiAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgaW5zZXRzLCBkb24ndCB3cmFwIHRoZSBzdGFjayBpbiBhbm90aGVyIHNhZmUgYXJlYSBwcm92aWRlclxuICAgIC8vIFRoaXMgYXZvaWRzIGFuIGlzc3VlIHdpdGggdXBkYXRlcyBhdCB0aGUgY29zdCBvZiBwb3RlbnRpYWxseSBpbmNvcnJlY3QgdmFsdWVzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LW5hdmlnYXRpb24vcmVhY3QtbmF2aWdhdGlvbi9pc3N1ZXMvMTc0XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFZpZXcsIHtcbiAgICAgIHN0eWxlOiBbc3R5bGVzLmNvbnRhaW5lciwgc3R5bGVdXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9XG4gIGlmIChQbGF0Zm9ybS5PUyA9PT0gJ3dlYicpIHtcbiAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNhZmVBcmVhRnJhbWVQcm92aWRlciwge1xuICAgICAgaW5pdGlhbE1ldHJpY3M6IGluaXRpYWxNZXRyaWNzXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTYWZlQXJlYVByb3ZpZGVyLCB7XG4gICAgaW5pdGlhbE1ldHJpY3M6IGluaXRpYWxNZXRyaWNzLFxuICAgIHN0eWxlOiBzdHlsZVxuICB9LCBjaGlsZHJlbik7XG59XG5cbi8vIEZJWE1FOiBPbiB0aGUgV2ViLCB0aGUgc2FmZSBhcmVhIGZyYW1lIHZhbHVlIGRvZXNuJ3QgdXBkYXRlIG9uIHJlc2l6ZVxuLy8gU28gd2Ugd29ya2Fyb3VuZCB0aGlzIGJ5IG1lYXN1cmluZyB0aGUgZnJhbWUgb24gcmVzaXplXG5jb25zdCBTYWZlQXJlYUZyYW1lUHJvdmlkZXIgPSBfcmVmMiA9PiB7XG4gIGxldCB7XG4gICAgaW5pdGlhbE1ldHJpY3MsXG4gICAgY2hpbGRyZW5cbiAgfSA9IF9yZWYyO1xuICBjb25zdCBlbGVtZW50ID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCBbZnJhbWUsIHNldEZyYW1lXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxNZXRyaWNzLmZyYW1lKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZWxlbWVudC5jdXJyZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBzZXRGcmFtZSh7XG4gICAgICB4OiByZWN0LngsXG4gICAgICB5OiByZWN0LnksXG4gICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgICB9KTtcbiAgICBsZXQgdGltZW91dDtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5ID0gZW50cmllc1swXTtcbiAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgeCxcbiAgICAgICAgICB5LFxuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIGhlaWdodFxuICAgICAgICB9ID0gZW50cnkuY29udGVudFJlY3Q7XG5cbiAgICAgICAgLy8gRGVib3VuY2UgdGhlIGZyYW1lIHVwZGF0ZXMgdG8gYXZvaWQgdG9vIG1hbnkgdXBkYXRlcyBpbiBhIHNob3J0IHRpbWVcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0RnJhbWUoe1xuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudC5jdXJyZW50KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNhZmVBcmVhRnJhbWVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGZyYW1lXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICByZWY6IGVsZW1lbnQsXG4gICAgc3R5bGU6IHtcbiAgICAgIC4uLlN0eWxlU2hlZXQuYWJzb2x1dGVGaWxsT2JqZWN0LFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcbiAgICB9XG4gIH0pLCBjaGlsZHJlbik7XG59O1xuU2FmZUFyZWFQcm92aWRlckNvbXBhdC5pbml0aWFsTWV0cmljcyA9IGluaXRpYWxNZXRyaWNzO1xuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBjb250YWluZXI6IHtcbiAgICBmbGV4OiAxXG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2FmZUFyZWFQcm92aWRlckNvbXBhdC5qcy5tYXAiLCJpbXBvcnQgeyBOYXZpZ2F0aW9uQ29udGV4dCwgTmF2aWdhdGlvblJvdXRlQ29udGV4dCB9IGZyb20gJ0ByZWFjdC1uYXZpZ2F0aW9uL25hdGl2ZSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBWaWV3IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IHVzZVNhZmVBcmVhRnJhbWUsIHVzZVNhZmVBcmVhSW5zZXRzIH0gZnJvbSAncmVhY3QtbmF0aXZlLXNhZmUtYXJlYS1jb250ZXh0JztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vQmFja2dyb3VuZCc7XG5pbXBvcnQgZ2V0RGVmYXVsdEhlYWRlckhlaWdodCBmcm9tICcuL0hlYWRlci9nZXREZWZhdWx0SGVhZGVySGVpZ2h0JztcbmltcG9ydCBIZWFkZXJIZWlnaHRDb250ZXh0IGZyb20gJy4vSGVhZGVyL0hlYWRlckhlaWdodENvbnRleHQnO1xuaW1wb3J0IEhlYWRlclNob3duQ29udGV4dCBmcm9tICcuL0hlYWRlci9IZWFkZXJTaG93bkNvbnRleHQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NyZWVuKHByb3BzKSB7XG4gIGNvbnN0IGRpbWVuc2lvbnMgPSB1c2VTYWZlQXJlYUZyYW1lKCk7XG4gIGNvbnN0IGluc2V0cyA9IHVzZVNhZmVBcmVhSW5zZXRzKCk7XG4gIGNvbnN0IGlzUGFyZW50SGVhZGVyU2hvd24gPSBSZWFjdC51c2VDb250ZXh0KEhlYWRlclNob3duQ29udGV4dCk7XG4gIGNvbnN0IHBhcmVudEhlYWRlckhlaWdodCA9IFJlYWN0LnVzZUNvbnRleHQoSGVhZGVySGVpZ2h0Q29udGV4dCk7XG4gIGNvbnN0IHtcbiAgICBmb2N1c2VkLFxuICAgIG1vZGFsID0gZmFsc2UsXG4gICAgaGVhZGVyLFxuICAgIGhlYWRlclNob3duID0gdHJ1ZSxcbiAgICBoZWFkZXJUcmFuc3BhcmVudCxcbiAgICBoZWFkZXJTdGF0dXNCYXJIZWlnaHQgPSBpc1BhcmVudEhlYWRlclNob3duID8gMCA6IGluc2V0cy50b3AsXG4gICAgbmF2aWdhdGlvbixcbiAgICByb3V0ZSxcbiAgICBjaGlsZHJlbixcbiAgICBzdHlsZVxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IFtoZWFkZXJIZWlnaHQsIHNldEhlYWRlckhlaWdodF0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBnZXREZWZhdWx0SGVhZGVySGVpZ2h0KGRpbWVuc2lvbnMsIG1vZGFsLCBoZWFkZXJTdGF0dXNCYXJIZWlnaHQpKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJhY2tncm91bmQsIHtcbiAgICBhY2Nlc3NpYmlsaXR5RWxlbWVudHNIaWRkZW46ICFmb2N1c2VkLFxuICAgIGltcG9ydGFudEZvckFjY2Vzc2liaWxpdHk6IGZvY3VzZWQgPyAnYXV0bycgOiAnbm8taGlkZS1kZXNjZW5kYW50cycsXG4gICAgc3R5bGU6IFtzdHlsZXMuY29udGFpbmVyLCBzdHlsZV1cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVmlldywge1xuICAgIHN0eWxlOiBzdHlsZXMuY29udGVudFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJTaG93bkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogaXNQYXJlbnRIZWFkZXJTaG93biB8fCBoZWFkZXJTaG93biAhPT0gZmFsc2VcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVySGVpZ2h0Q29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBoZWFkZXJTaG93biA/IGhlYWRlckhlaWdodCA6IHBhcmVudEhlYWRlckhlaWdodCA/PyAwXG4gIH0sIGNoaWxkcmVuKSkpLCBoZWFkZXJTaG93biA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5hdmlnYXRpb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IG5hdmlnYXRpb25cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2aWdhdGlvblJvdXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiByb3V0ZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChWaWV3LCB7XG4gICAgb25MYXlvdXQ6IGUgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBoZWlnaHRcbiAgICAgIH0gPSBlLm5hdGl2ZUV2ZW50LmxheW91dDtcbiAgICAgIHNldEhlYWRlckhlaWdodChoZWlnaHQpO1xuICAgIH0sXG4gICAgc3R5bGU6IGhlYWRlclRyYW5zcGFyZW50ID8gc3R5bGVzLmFic29sdXRlIDogbnVsbFxuICB9LCBoZWFkZXIpKSkgOiBudWxsKTtcbn1cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZmxleDogMSxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uLXJldmVyc2UnXG4gIH0sXG4gIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIGFwcGx5aW5nICdjb2x1bW4tcmV2ZXJzZScgdG8gc2NyZWVuIGNvbnRlbnRcbiAgY29udGVudDoge1xuICAgIGZsZXg6IDFcbiAgfSxcbiAgYWJzb2x1dGU6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMFxuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNjcmVlbi5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBjb250ZXh0cyA9ICdfX3JlYWN0X25hdmlnYXRpb25fX2VsZW1lbnRzX2NvbnRleHRzJztcbi8vIFdlIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSB0byBrZWVwIG91ciBjb250ZXh0cyBzbyB0aGF0IHdlIGNhbiByZXVzZSBzYW1lIGNvbnRleHRzIGFjcm9zcyBwYWNrYWdlc1xuZ2xvYmFsW2NvbnRleHRzXSA9IGdsb2JhbFtjb250ZXh0c10gPz8gbmV3IE1hcCgpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TmFtZWRDb250ZXh0KG5hbWUsIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgY29udGV4dCA9IGdsb2JhbFtjb250ZXh0c10uZ2V0KG5hbWUpO1xuICBpZiAoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG4gIGNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChpbml0aWFsVmFsdWUpO1xuICBjb250ZXh0LmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgZ2xvYmFsW2NvbnRleHRzXS5zZXQobmFtZSwgY29udGV4dCk7XG4gIHJldHVybiBjb250ZXh0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0TmFtZWRDb250ZXh0LmpzLm1hcCIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuaW1wb3J0IHsgY3JlYXRlTmF2aWdhdG9yRmFjdG9yeSwgU3RhY2tBY3Rpb25zLCBTdGFja1JvdXRlciwgdXNlTmF2aWdhdGlvbkJ1aWxkZXIgfSBmcm9tICdAcmVhY3QtbmF2aWdhdGlvbi9uYXRpdmUnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdGl2ZVN0YWNrVmlldyBmcm9tICcuLi92aWV3cy9OYXRpdmVTdGFja1ZpZXcnO1xuZnVuY3Rpb24gTmF0aXZlU3RhY2tOYXZpZ2F0b3IoX3JlZikge1xuICBsZXQge1xuICAgIGlkLFxuICAgIGluaXRpYWxSb3V0ZU5hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgc2NyZWVuTGlzdGVuZXJzLFxuICAgIHNjcmVlbk9wdGlvbnMsXG4gICAgLi4ucmVzdFxuICB9ID0gX3JlZjtcbiAgY29uc3Qge1xuICAgIHN0YXRlLFxuICAgIGRlc2NyaXB0b3JzLFxuICAgIG5hdmlnYXRpb24sXG4gICAgTmF2aWdhdGlvbkNvbnRlbnRcbiAgfSA9IHVzZU5hdmlnYXRpb25CdWlsZGVyKFN0YWNrUm91dGVyLCB7XG4gICAgaWQsXG4gICAgaW5pdGlhbFJvdXRlTmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBzY3JlZW5MaXN0ZW5lcnMsXG4gICAgc2NyZWVuT3B0aW9uc1xuICB9KTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgX25hdmlnYXRpb24kYWRkTGlzdGVuO1xuICAgIHJldHVybiAoLy8gQHRzLWV4cGVjdC1lcnJvcjogdGhlcmUgbWF5IG5vdCBiZSBhIHRhYiBuYXZpZ2F0b3IgaW4gcGFyZW50XG4gICAgICBuYXZpZ2F0aW9uID09PSBudWxsIHx8IG5hdmlnYXRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfbmF2aWdhdGlvbiRhZGRMaXN0ZW4gPSBuYXZpZ2F0aW9uLmFkZExpc3RlbmVyKSA9PT0gbnVsbCB8fCBfbmF2aWdhdGlvbiRhZGRMaXN0ZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9uYXZpZ2F0aW9uJGFkZExpc3Rlbi5jYWxsKG5hdmlnYXRpb24sICd0YWJQcmVzcycsIGUgPT4ge1xuICAgICAgICBjb25zdCBpc0ZvY3VzZWQgPSBuYXZpZ2F0aW9uLmlzRm9jdXNlZCgpO1xuXG4gICAgICAgIC8vIFJ1biB0aGUgb3BlcmF0aW9uIGluIHRoZSBuZXh0IGZyYW1lIHNvIHdlJ3JlIHN1cmUgYWxsIGxpc3RlbmVycyBoYXZlIGJlZW4gcnVuXG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGtub3cgaWYgcHJldmVudERlZmF1bHQoKSBoYXMgYmVlbiBjYWxsZWRcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBpZiAoc3RhdGUuaW5kZXggPiAwICYmIGlzRm9jdXNlZCAmJiAhZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAvLyBXaGVuIHVzZXIgdGFwcyBvbiBhbHJlYWR5IGZvY3VzZWQgdGFiIGFuZCB3ZSdyZSBpbnNpZGUgdGhlIHRhYixcbiAgICAgICAgICAgIC8vIHJlc2V0IHRoZSBzdGFjayB0byByZXBsaWNhdGUgbmF0aXZlIGJlaGF2aW91clxuICAgICAgICAgICAgbmF2aWdhdGlvbi5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgIC4uLlN0YWNrQWN0aW9ucy5wb3BUb1RvcCgpLFxuICAgICAgICAgICAgICB0YXJnZXQ6IHN0YXRlLmtleVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW25hdmlnYXRpb24sIHN0YXRlLmluZGV4LCBzdGF0ZS5rZXldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5hdmlnYXRpb25Db250ZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChOYXRpdmVTdGFja1ZpZXcsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIG5hdmlnYXRpb246IG5hdmlnYXRpb24sXG4gICAgZGVzY3JpcHRvcnM6IGRlc2NyaXB0b3JzXG4gIH0pKSk7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXZpZ2F0b3JGYWN0b3J5KE5hdGl2ZVN0YWNrTmF2aWdhdG9yKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZU5hdGl2ZVN0YWNrTmF2aWdhdG9yLmpzLm1hcCIsImltcG9ydCB7IGdldEhlYWRlclRpdGxlLCBIZWFkZXIsIEhlYWRlckJhY2tCdXR0b24sIEhlYWRlckJhY2tDb250ZXh0LCBTYWZlQXJlYVByb3ZpZGVyQ29tcGF0LCBTY3JlZW4gfSBmcm9tICdAcmVhY3QtbmF2aWdhdGlvbi9lbGVtZW50cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbWFnZSwgU3R5bGVTaGVldCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5jb25zdCBUUkFOU1BBUkVOVF9QUkVTRU5UQVRJT05TID0gWyd0cmFuc3BhcmVudE1vZGFsJywgJ2NvbnRhaW5lZFRyYW5zcGFyZW50TW9kYWwnXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdGl2ZVN0YWNrVmlldyhfcmVmKSB7XG4gIGxldCB7XG4gICAgc3RhdGUsXG4gICAgZGVzY3JpcHRvcnNcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHBhcmVudEhlYWRlckJhY2sgPSBSZWFjdC51c2VDb250ZXh0KEhlYWRlckJhY2tDb250ZXh0KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNhZmVBcmVhUHJvdmlkZXJDb21wYXQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFZpZXcsIHtcbiAgICBzdHlsZTogc3R5bGVzLmNvbnRhaW5lclxuICB9LCBzdGF0ZS5yb3V0ZXMubWFwKChyb3V0ZSwgaSkgPT4ge1xuICAgIHZhciBfc3RhdGUkcm91dGVzLCBfc3RhdGUkcm91dGVzMjtcbiAgICBjb25zdCBpc0ZvY3VzZWQgPSBzdGF0ZS5pbmRleCA9PT0gaTtcbiAgICBjb25zdCBwcmV2aW91c0tleSA9IChfc3RhdGUkcm91dGVzID0gc3RhdGUucm91dGVzW2kgLSAxXSkgPT09IG51bGwgfHwgX3N0YXRlJHJvdXRlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3N0YXRlJHJvdXRlcy5rZXk7XG4gICAgY29uc3QgbmV4dEtleSA9IChfc3RhdGUkcm91dGVzMiA9IHN0YXRlLnJvdXRlc1tpICsgMV0pID09PSBudWxsIHx8IF9zdGF0ZSRyb3V0ZXMyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfc3RhdGUkcm91dGVzMi5rZXk7XG4gICAgY29uc3QgcHJldmlvdXNEZXNjcmlwdG9yID0gcHJldmlvdXNLZXkgPyBkZXNjcmlwdG9yc1twcmV2aW91c0tleV0gOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgbmV4dERlc2NyaXB0b3IgPSBuZXh0S2V5ID8gZGVzY3JpcHRvcnNbbmV4dEtleV0gOiB1bmRlZmluZWQ7XG4gICAgY29uc3Qge1xuICAgICAgb3B0aW9ucyxcbiAgICAgIG5hdmlnYXRpb24sXG4gICAgICByZW5kZXJcbiAgICB9ID0gZGVzY3JpcHRvcnNbcm91dGUua2V5XTtcbiAgICBjb25zdCBoZWFkZXJCYWNrID0gcHJldmlvdXNEZXNjcmlwdG9yID8ge1xuICAgICAgdGl0bGU6IGdldEhlYWRlclRpdGxlKHByZXZpb3VzRGVzY3JpcHRvci5vcHRpb25zLCBwcmV2aW91c0Rlc2NyaXB0b3Iucm91dGUubmFtZSlcbiAgICB9IDogcGFyZW50SGVhZGVyQmFjaztcbiAgICBjb25zdCBjYW5Hb0JhY2sgPSBoZWFkZXJCYWNrICE9PSB1bmRlZmluZWQ7XG4gICAgY29uc3Qge1xuICAgICAgaGVhZGVyLFxuICAgICAgaGVhZGVyU2hvd24sXG4gICAgICBoZWFkZXJUaW50Q29sb3IsXG4gICAgICBoZWFkZXJCYWNrSW1hZ2VTb3VyY2UsXG4gICAgICBoZWFkZXJMZWZ0LFxuICAgICAgaGVhZGVyUmlnaHQsXG4gICAgICBoZWFkZXJUaXRsZSxcbiAgICAgIGhlYWRlclRpdGxlQWxpZ24sXG4gICAgICBoZWFkZXJUaXRsZVN0eWxlLFxuICAgICAgaGVhZGVyU3R5bGUsXG4gICAgICBoZWFkZXJTaGFkb3dWaXNpYmxlLFxuICAgICAgaGVhZGVyVHJhbnNwYXJlbnQsXG4gICAgICBoZWFkZXJCYWNrZ3JvdW5kLFxuICAgICAgaGVhZGVyQmFja1RpdGxlLFxuICAgICAgcHJlc2VudGF0aW9uLFxuICAgICAgY29udGVudFN0eWxlXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgbmV4dFByZXNlbnRhdGlvbiA9IG5leHREZXNjcmlwdG9yID09PSBudWxsIHx8IG5leHREZXNjcmlwdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuZXh0RGVzY3JpcHRvci5vcHRpb25zLnByZXNlbnRhdGlvbjtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2NyZWVuLCB7XG4gICAgICBrZXk6IHJvdXRlLmtleSxcbiAgICAgIGZvY3VzZWQ6IGlzRm9jdXNlZCxcbiAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgIG5hdmlnYXRpb246IG5hdmlnYXRpb24sXG4gICAgICBoZWFkZXJTaG93bjogaGVhZGVyU2hvd24sXG4gICAgICBoZWFkZXJUcmFuc3BhcmVudDogaGVhZGVyVHJhbnNwYXJlbnQsXG4gICAgICBoZWFkZXI6IGhlYWRlciAhPT0gdW5kZWZpbmVkID8gaGVhZGVyKHtcbiAgICAgICAgYmFjazogaGVhZGVyQmFjayxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgcm91dGUsXG4gICAgICAgIG5hdmlnYXRpb25cbiAgICAgIH0pIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCB7XG4gICAgICAgIHRpdGxlOiBnZXRIZWFkZXJUaXRsZShvcHRpb25zLCByb3V0ZS5uYW1lKSxcbiAgICAgICAgaGVhZGVyVGludENvbG9yOiBoZWFkZXJUaW50Q29sb3IsXG4gICAgICAgIGhlYWRlckxlZnQ6IHR5cGVvZiBoZWFkZXJMZWZ0ID09PSAnZnVuY3Rpb24nID8gX3JlZjIgPT4ge1xuICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICB0aW50Q29sb3JcbiAgICAgICAgICB9ID0gX3JlZjI7XG4gICAgICAgICAgcmV0dXJuIGhlYWRlckxlZnQoe1xuICAgICAgICAgICAgdGludENvbG9yLFxuICAgICAgICAgICAgY2FuR29CYWNrLFxuICAgICAgICAgICAgbGFiZWw6IGhlYWRlckJhY2tUaXRsZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IDogaGVhZGVyTGVmdCA9PT0gdW5kZWZpbmVkICYmIGNhbkdvQmFjayA/IF9yZWYzID0+IHtcbiAgICAgICAgICBsZXQge1xuICAgICAgICAgICAgdGludENvbG9yXG4gICAgICAgICAgfSA9IF9yZWYzO1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJCYWNrQnV0dG9uLCB7XG4gICAgICAgICAgICB0aW50Q29sb3I6IHRpbnRDb2xvcixcbiAgICAgICAgICAgIGJhY2tJbWFnZTogaGVhZGVyQmFja0ltYWdlU291cmNlICE9PSB1bmRlZmluZWQgPyAoKSA9PiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZSwge1xuICAgICAgICAgICAgICBzb3VyY2U6IGhlYWRlckJhY2tJbWFnZVNvdXJjZSxcbiAgICAgICAgICAgICAgc3R5bGU6IFtzdHlsZXMuYmFja0ltYWdlLCB7XG4gICAgICAgICAgICAgICAgdGludENvbG9yXG4gICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG9uUHJlc3M6IG5hdmlnYXRpb24uZ29CYWNrLFxuICAgICAgICAgICAgY2FuR29CYWNrOiBjYW5Hb0JhY2tcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSA6IGhlYWRlckxlZnQsXG4gICAgICAgIGhlYWRlclJpZ2h0OiB0eXBlb2YgaGVhZGVyUmlnaHQgPT09ICdmdW5jdGlvbicgPyBfcmVmNCA9PiB7XG4gICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHRpbnRDb2xvclxuICAgICAgICAgIH0gPSBfcmVmNDtcbiAgICAgICAgICByZXR1cm4gaGVhZGVyUmlnaHQoe1xuICAgICAgICAgICAgdGludENvbG9yLFxuICAgICAgICAgICAgY2FuR29CYWNrXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gOiBoZWFkZXJSaWdodCxcbiAgICAgICAgaGVhZGVyVGl0bGU6IHR5cGVvZiBoZWFkZXJUaXRsZSA9PT0gJ2Z1bmN0aW9uJyA/IF9yZWY1ID0+IHtcbiAgICAgICAgICBsZXQge1xuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICB0aW50Q29sb3JcbiAgICAgICAgICB9ID0gX3JlZjU7XG4gICAgICAgICAgcmV0dXJuIGhlYWRlclRpdGxlKHtcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgdGludENvbG9yXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gOiBoZWFkZXJUaXRsZSxcbiAgICAgICAgaGVhZGVyVGl0bGVBbGlnbjogaGVhZGVyVGl0bGVBbGlnbixcbiAgICAgICAgaGVhZGVyVGl0bGVTdHlsZTogaGVhZGVyVGl0bGVTdHlsZSxcbiAgICAgICAgaGVhZGVyVHJhbnNwYXJlbnQ6IGhlYWRlclRyYW5zcGFyZW50LFxuICAgICAgICBoZWFkZXJTaGFkb3dWaXNpYmxlOiBoZWFkZXJTaGFkb3dWaXNpYmxlLFxuICAgICAgICBoZWFkZXJCYWNrZ3JvdW5kOiBoZWFkZXJCYWNrZ3JvdW5kLFxuICAgICAgICBoZWFkZXJTdHlsZTogaGVhZGVyU3R5bGVcbiAgICAgIH0pLFxuICAgICAgc3R5bGU6IFtTdHlsZVNoZWV0LmFic29sdXRlRmlsbCwge1xuICAgICAgICBkaXNwbGF5OiBpc0ZvY3VzZWQgfHwgbmV4dFByZXNlbnRhdGlvbiAhPSBudWxsICYmIFRSQU5TUEFSRU5UX1BSRVNFTlRBVElPTlMuaW5jbHVkZXMobmV4dFByZXNlbnRhdGlvbikgPyAnZmxleCcgOiAnbm9uZSdcbiAgICAgIH0sIHByZXNlbnRhdGlvbiAhPSBudWxsICYmIFRSQU5TUEFSRU5UX1BSRVNFTlRBVElPTlMuaW5jbHVkZXMocHJlc2VudGF0aW9uKSA/IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICB9IDogbnVsbF1cbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJCYWNrQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IGhlYWRlckJhY2tcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChWaWV3LCB7XG4gICAgICBzdHlsZTogW3N0eWxlcy5jb250ZW50Q29udGFpbmVyLCBjb250ZW50U3R5bGVdXG4gICAgfSwgcmVuZGVyKCkpKSk7XG4gIH0pKSk7XG59XG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGZsZXg6IDFcbiAgfSxcbiAgY29udGVudENvbnRhaW5lcjoge1xuICAgIGZsZXg6IDFcbiAgfSxcbiAgYmFja0ltYWdlOiB7XG4gICAgaGVpZ2h0OiAyNCxcbiAgICB3aWR0aDogMjQsXG4gICAgbWFyZ2luOiAzLFxuICAgIHJlc2l6ZU1vZGU6ICdjb250YWluJ1xuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5hdGl2ZVN0YWNrVmlldy5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4vVGhlbWVDb250ZXh0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICBjb25zdCB0aGVtZSA9IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiAgcmV0dXJuIHRoZW1lO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlVGhlbWUuanMubWFwIiwiZXhwb3J0IGNvbnN0IGluaXRpYWxXaW5kb3dNZXRyaWNzID0gbnVsbDtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgaW5pdGlhbFdpbmRvd1NhZmVBcmVhSW5zZXRzID0gbnVsbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUluaXRpYWxXaW5kb3cuanMubWFwIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IHJldHVybiBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uIChuKSB7IGZvciAodmFyIGUgPSAxOyBlIDwgYXJndW1lbnRzLmxlbmd0aDsgZSsrKSB7IHZhciB0ID0gYXJndW1lbnRzW2VdOyBmb3IgKHZhciByIGluIHQpICh7fSkuaGFzT3duUHJvcGVydHkuY2FsbCh0LCByKSAmJiAobltyXSA9IHRbcl0pOyB9IHJldHVybiBuOyB9LCBfZXh0ZW5kcy5hcHBseShudWxsLCBhcmd1bWVudHMpOyB9XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEaW1lbnNpb25zLCBTdHlsZVNoZWV0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IE5hdGl2ZVNhZmVBcmVhUHJvdmlkZXIgfSBmcm9tICcuL05hdGl2ZVNhZmVBcmVhUHJvdmlkZXInO1xuY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuZXhwb3J0IGNvbnN0IFNhZmVBcmVhSW5zZXRzQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuaWYgKGlzRGV2KSB7XG4gIFNhZmVBcmVhSW5zZXRzQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdTYWZlQXJlYUluc2V0c0NvbnRleHQnO1xufVxuZXhwb3J0IGNvbnN0IFNhZmVBcmVhRnJhbWVDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5pZiAoaXNEZXYpIHtcbiAgU2FmZUFyZWFGcmFtZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnU2FmZUFyZWFGcmFtZUNvbnRleHQnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIFNhZmVBcmVhUHJvdmlkZXIoe1xuICBjaGlsZHJlbixcbiAgaW5pdGlhbE1ldHJpY3MsXG4gIGluaXRpYWxTYWZlQXJlYUluc2V0cyxcbiAgc3R5bGUsXG4gIC4uLm90aGVyc1xufSkge1xuICBjb25zdCBwYXJlbnRJbnNldHMgPSB1c2VQYXJlbnRTYWZlQXJlYUluc2V0cygpO1xuICBjb25zdCBwYXJlbnRGcmFtZSA9IHVzZVBhcmVudFNhZmVBcmVhRnJhbWUoKTtcbiAgY29uc3QgW2luc2V0cywgc2V0SW5zZXRzXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxNZXRyaWNzPy5pbnNldHMgPz8gaW5pdGlhbFNhZmVBcmVhSW5zZXRzID8/IHBhcmVudEluc2V0cyA/PyBudWxsKTtcbiAgY29uc3QgW2ZyYW1lLCBzZXRGcmFtZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsTWV0cmljcz8uZnJhbWUgPz8gcGFyZW50RnJhbWUgPz8ge1xuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgc28gd2UgcmVuZGVyIGFueXdheSBpZiB3ZSBkb24ndCBoYXZlIGZyYW1lLlxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB3aWR0aDogRGltZW5zaW9ucy5nZXQoJ3dpbmRvdycpLndpZHRoLFxuICAgIGhlaWdodDogRGltZW5zaW9ucy5nZXQoJ3dpbmRvdycpLmhlaWdodFxuICB9KTtcbiAgY29uc3Qgb25JbnNldHNDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhldmVudCA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgbmF0aXZlRXZlbnQ6IHtcbiAgICAgICAgZnJhbWU6IG5leHRGcmFtZSxcbiAgICAgICAgaW5zZXRzOiBuZXh0SW5zZXRzXG4gICAgICB9XG4gICAgfSA9IGV2ZW50O1xuICAgIHNldEZyYW1lKGN1ckZyYW1lID0+IHtcbiAgICAgIGlmIChcbiAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgd2l0aCBvbGQgbmF0aXZlIGNvZGUgdGhhdCB3b24ndCBzZW5kIGZyYW1lLlxuICAgICAgbmV4dEZyYW1lICYmIChuZXh0RnJhbWUuaGVpZ2h0ICE9PSBjdXJGcmFtZS5oZWlnaHQgfHwgbmV4dEZyYW1lLndpZHRoICE9PSBjdXJGcmFtZS53aWR0aCB8fCBuZXh0RnJhbWUueCAhPT0gY3VyRnJhbWUueCB8fCBuZXh0RnJhbWUueSAhPT0gY3VyRnJhbWUueSkpIHtcbiAgICAgICAgcmV0dXJuIG5leHRGcmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjdXJGcmFtZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRJbnNldHMoY3VySW5zZXRzID0+IHtcbiAgICAgIGlmICghY3VySW5zZXRzIHx8IG5leHRJbnNldHMuYm90dG9tICE9PSBjdXJJbnNldHMuYm90dG9tIHx8IG5leHRJbnNldHMubGVmdCAhPT0gY3VySW5zZXRzLmxlZnQgfHwgbmV4dEluc2V0cy5yaWdodCAhPT0gY3VySW5zZXRzLnJpZ2h0IHx8IG5leHRJbnNldHMudG9wICE9PSBjdXJJbnNldHMudG9wKSB7XG4gICAgICAgIHJldHVybiBuZXh0SW5zZXRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGN1ckluc2V0cztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTmF0aXZlU2FmZUFyZWFQcm92aWRlciwgX2V4dGVuZHMoe1xuICAgIHN0eWxlOiBbc3R5bGVzLmZpbGwsIHN0eWxlXSxcbiAgICBvbkluc2V0c0NoYW5nZTogb25JbnNldHNDaGFuZ2VcbiAgfSwgb3RoZXJzKSwgaW5zZXRzICE9IG51bGwgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTYWZlQXJlYUZyYW1lQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBmcmFtZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTYWZlQXJlYUluc2V0c0NvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogaW5zZXRzXG4gIH0sIGNoaWxkcmVuKSkgOiBudWxsKTtcbn1cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgZmlsbDoge1xuICAgIGZsZXg6IDFcbiAgfVxufSk7XG5mdW5jdGlvbiB1c2VQYXJlbnRTYWZlQXJlYUluc2V0cygpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoU2FmZUFyZWFJbnNldHNDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIHVzZVBhcmVudFNhZmVBcmVhRnJhbWUoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFNhZmVBcmVhRnJhbWVDb250ZXh0KTtcbn1cbmNvbnN0IE5PX0lOU0VUU19FUlJPUiA9ICdObyBzYWZlIGFyZWEgdmFsdWUgYXZhaWxhYmxlLiBNYWtlIHN1cmUgeW91IGFyZSByZW5kZXJpbmcgYDxTYWZlQXJlYVByb3ZpZGVyPmAgYXQgdGhlIHRvcCBvZiB5b3VyIGFwcC4nO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVNhZmVBcmVhSW5zZXRzKCkge1xuICBjb25zdCBpbnNldHMgPSBSZWFjdC51c2VDb250ZXh0KFNhZmVBcmVhSW5zZXRzQ29udGV4dCk7XG4gIGlmIChpbnNldHMgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihOT19JTlNFVFNfRVJST1IpO1xuICB9XG4gIHJldHVybiBpbnNldHM7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlU2FmZUFyZWFGcmFtZSgpIHtcbiAgY29uc3QgZnJhbWUgPSBSZWFjdC51c2VDb250ZXh0KFNhZmVBcmVhRnJhbWVDb250ZXh0KTtcbiAgaWYgKGZyYW1lID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9fSU5TRVRTX0VSUk9SKTtcbiAgfVxuICByZXR1cm4gZnJhbWU7XG59XG5leHBvcnQgZnVuY3Rpb24gd2l0aFNhZmVBcmVhSW5zZXRzKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgaW5zZXRzID0gdXNlU2FmZUFyZWFJbnNldHMoKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBpbnNldHM6IGluc2V0cyxcbiAgICAgIHJlZjogcmVmXG4gICAgfSkpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU2FmZUFyZWEoKSB7XG4gIHJldHVybiB1c2VTYWZlQXJlYUluc2V0cygpO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBTYWZlQXJlYUNvbnN1bWVyID0gU2FmZUFyZWFJbnNldHNDb250ZXh0LkNvbnN1bWVyO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBTYWZlQXJlYUNvbnRleHQgPSBTYWZlQXJlYUluc2V0c0NvbnRleHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TYWZlQXJlYUNvbnRleHQuanMubWFwIiwiaW1wb3J0IGNvZGVnZW5OYXRpdmVDb21wb25lbnQgZnJvbSAncmVhY3QtbmF0aXZlL0xpYnJhcmllcy9VdGlsaXRpZXMvY29kZWdlbk5hdGl2ZUNvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjb2RlZ2VuTmF0aXZlQ29tcG9uZW50KCdSTkNTYWZlQXJlYVByb3ZpZGVyJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1OYXRpdmVTYWZlQXJlYVByb3ZpZGVyLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==