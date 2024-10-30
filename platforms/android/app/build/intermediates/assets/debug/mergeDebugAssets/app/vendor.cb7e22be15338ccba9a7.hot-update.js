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
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-native/index.js");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function Background(_ref) {
  let {
    style,
    ...rest
  } = _ref;
  const {
    colors
  } = (0,_react_navigation_native__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.View, _extends({}, rest, {
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
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-native/index.js");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
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
  const hasDynamicIsland = react_native__WEBPACK_IMPORTED_MODULE_1__.Platform.OS === 'ios' && insets.top > 50;
  const statusBarHeight = hasDynamicIsland ? insets.top - 5 : insets.top;
  const {
    layout = frame,
    modal = false,
    title,
    headerTitle: customTitle,
    headerTitleAlign = react_native__WEBPACK_IMPORTED_MODULE_1__.Platform.select({
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
  } = react_native__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.flatten(customHeaderStyle || {});
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.Animated.View, {
    pointerEvents: "box-none",
    style: [react_native__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.absoluteFill, {
      zIndex: 0
    }, backgroundContainerStyle]
  }, headerBackground ? headerBackground({
    style: backgroundStyle
  }) : headerTransparent ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_HeaderBackground__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: backgroundStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.Animated.View, {
    pointerEvents: "box-none",
    style: [{
      height,
      minHeight,
      maxHeight,
      opacity,
      transform
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.View, {
    pointerEvents: "none",
    style: {
      height: headerStatusBarHeight
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.View, {
    pointerEvents: "box-none",
    style: styles.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.Animated.View, {
    pointerEvents: "box-none",
    style: [styles.left, headerTitleAlign === 'center' && styles.expand, {
      marginStart: insets.left
    }, leftContainerStyle]
  }, leftButton), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.Animated.View, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.Animated.View, {
    pointerEvents: "box-none",
    style: [styles.right, styles.expand, {
      marginEnd: insets.right
    }, rightContainerStyle]
  }, rightButton))));
}
const styles = react_native__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
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
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-native/index.js");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MaskedView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/MaskedViewNative.js");
/* harmony import */ var _PlatformPressable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@react-navigation/elements/lib/module/PlatformPressable.js");





function HeaderBackButton(_ref) {
  let {
    disabled,
    allowFontScaling,
    backImage,
    label,
    labelStyle,
    labelVisible = react_native__WEBPACK_IMPORTED_MODULE_1__.Platform.OS === 'ios',
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
  const tintColor = customTintColor !== undefined ? customTintColor : react_native__WEBPACK_IMPORTED_MODULE_1__.Platform.select({
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.Image, {
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
    const labelElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.View, {
      style: screenLayout ?
      // We make the button extend till the middle of the screen
      // Otherwise it appears to cut off when translating
      [styles.labelWrapper, {
        minWidth: screenLayout.width / 2 - 27
      }] : null
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.Animated.Text, {
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
    if (backImage || react_native__WEBPACK_IMPORTED_MODULE_1__.Platform.OS !== 'ios') {
      // When a custom backimage is specified, we can't mask the label
      // Otherwise there might be weird effect due to our mask not being the same as the image
      return labelElement;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MaskedView__WEBPACK_IMPORTED_MODULE_3__["default"], {
      maskElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.View, {
        style: styles.iconMaskContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.Image, {
        source: __webpack_require__("./node_modules/@react-navigation/elements/lib/module/assets/back-icon-mask.png"),
        style: styles.iconMask
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.View, {
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
    hitSlop: react_native__WEBPACK_IMPORTED_MODULE_1__.Platform.select({
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
  foreground: react_native__WEBPACK_IMPORTED_MODULE_1__.Platform.OS === 'android' && react_native__WEBPACK_IMPORTED_MODULE_1__.Platform.Version >= 23,
  radius: 20
};
const styles = react_native__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    minWidth: react_native__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.hairlineWidth,
    // Avoid collapsing when title is long
    ...react_native__WEBPACK_IMPORTED_MODULE_1__.Platform.select({
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
  icon: react_native__WEBPACK_IMPORTED_MODULE_1__.Platform.select({
    ios: {
      height: 21,
      width: 13,
      marginLeft: 8,
      marginRight: 22,
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{
        scaleX: react_native__WEBPACK_IMPORTED_MODULE_1__.I18nManager.getConstants().isRTL ? -1 : 1
      }]
    },
    default: {
      height: 24,
      width: 24,
      margin: 3,
      resizeMode: 'contain',
      transform: [{
        scaleX: react_native__WEBPACK_IMPORTED_MODULE_1__.I18nManager.getConstants().isRTL ? -1 : 1
      }]
    }
  }),
  iconWithLabel: react_native__WEBPACK_IMPORTED_MODULE_1__.Platform.OS === 'ios' ? {
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
      scaleX: react_native__WEBPACK_IMPORTED_MODULE_1__.I18nManager.getConstants().isRTL ? -1 : 1
    }]
  }
});
//# sourceMappingURL=HeaderBackButton.js.map

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
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-native/index.js");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function HeaderBackground(_ref) {
  let {
    style,
    ...rest
  } = _ref;
  const {
    colors
  } = (0,_react_navigation_native__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.Animated.View, _extends({
    style: [styles.container, {
      backgroundColor: colors.card,
      borderBottomColor: colors.border,
      shadowColor: colors.border
    }, style]
  }, rest));
}
const styles = react_native__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  container: {
    flex: 1,
    ...react_native__WEBPACK_IMPORTED_MODULE_1__.Platform.select({
      android: {
        elevation: 4
      },
      ios: {
        shadowOpacity: 0.85,
        shadowRadius: 0,
        shadowOffset: {
          width: 0,
          height: react_native__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.hairlineWidth
        }
      },
      default: {
        borderBottomWidth: react_native__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.hairlineWidth
      }
    })
  }
});
//# sourceMappingURL=HeaderBackground.js.map

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
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-native/index.js");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.Animated.Text, _extends({
    accessibilityRole: "header",
    "aria-level": "1",
    numberOfLines: 1
  }, rest, {
    style: [styles.title, {
      color: tintColor === undefined ? colors.text : tintColor
    }, style]
  }));
}
const styles = react_native__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  title: react_native__WEBPACK_IMPORTED_MODULE_1__.Platform.select({
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
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-native/index.js");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_0__);

function getDefaultHeaderHeight(layout, modalPresentation, statusBarHeight) {
  let headerHeight;
  const isLandscape = layout.width > layout.height;
  if (react_native__WEBPACK_IMPORTED_MODULE_0__.Platform.OS === 'ios') {
    if (react_native__WEBPACK_IMPORTED_MODULE_0__.Platform.isPad || react_native__WEBPACK_IMPORTED_MODULE_0__.Platform.isTV) {
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
  } else if (react_native__WEBPACK_IMPORTED_MODULE_0__.Platform.OS === 'android') {
    headerHeight = 56;
  } else {
    headerHeight = 64;
  }
  return headerHeight + statusBarHeight;
}
//# sourceMappingURL=getDefaultHeaderHeight.js.map

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
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-native/index.js");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
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
const isMaskedViewAvailable = react_native__WEBPACK_IMPORTED_MODULE_1__.UIManager.getViewManagerConfig('RNCMaskedView') != null;
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
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-native/index.js");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const AnimatedPressable = react_native__WEBPACK_IMPORTED_MODULE_1__.Animated.createAnimatedComponent(react_native__WEBPACK_IMPORTED_MODULE_1__.Pressable);
const ANDROID_VERSION_LOLLIPOP = 21;
const ANDROID_SUPPORTS_RIPPLE = react_native__WEBPACK_IMPORTED_MODULE_1__.Platform.OS === 'android' && react_native__WEBPACK_IMPORTED_MODULE_1__.Platform.Version >= ANDROID_VERSION_LOLLIPOP;

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
  const [opacity] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => new react_native__WEBPACK_IMPORTED_MODULE_1__.Animated.Value(1));
  const animateTo = (toValue, duration) => {
    if (ANDROID_SUPPORTS_RIPPLE) {
      return;
    }
    react_native__WEBPACK_IMPORTED_MODULE_1__.Animated.timing(opacity, {
      toValue,
      duration,
      easing: react_native__WEBPACK_IMPORTED_MODULE_1__.Easing.inOut(react_native__WEBPACK_IMPORTED_MODULE_1__.Easing.quad),
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
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-native/index.js");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_safe_area_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-native-safe-area-context/lib/module/InitialWindow.js");
/* harmony import */ var react_native_safe_area_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-native-safe-area-context/lib/module/SafeAreaContext.js");



const {
  width = 0,
  height = 0
} = react_native__WEBPACK_IMPORTED_MODULE_1__.Dimensions.get('window');

// To support SSR on web, we need to have empty insets for initial values
// Otherwise there can be mismatch between SSR and client output
// We also need to specify empty values to support tests environments
const initialMetrics = react_native__WEBPACK_IMPORTED_MODULE_1__.Platform.OS === 'web' || react_native_safe_area_context__WEBPACK_IMPORTED_MODULE_2__.initialWindowMetrics == null ? {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.View, {
      style: [styles.container, style]
    }, children);
  }
  if (react_native__WEBPACK_IMPORTED_MODULE_1__.Platform.OS === 'web') {
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
      ...react_native__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.absoluteFillObject,
      pointerEvents: 'none',
      visibility: 'hidden'
    }
  }), children);
};
SafeAreaProviderCompat.initialMetrics = initialMetrics;
const styles = react_native__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
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
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-native/index.js");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: styles.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header_HeaderShownContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: isParentHeaderShown || headerShown !== false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header_HeaderHeightContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: headerShown ? headerHeight : parentHeaderHeight ?? 0
  }, children))), headerShown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_navigation_native__WEBPACK_IMPORTED_MODULE_7__.NavigationContext.Provider, {
    value: navigation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_navigation_native__WEBPACK_IMPORTED_MODULE_7__.NavigationRouteContext.Provider, {
    value: route
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.View, {
    onLayout: e => {
      const {
        height
      } = e.nativeEvent.layout;
      setHeaderHeight(height);
    },
    style: headerTransparent ? styles.absolute : null
  }, header))) : null);
}
const styles = react_native__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
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
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-native/index.js");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);



const TRANSPARENT_PRESENTATIONS = ['transparentModal', 'containedTransparentModal'];
function NativeStackView(_ref) {
  let {
    state,
    descriptors
  } = _ref;
  const parentHeaderBack = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_react_navigation_elements__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_navigation_elements__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.View, {
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
            backImage: headerBackImageSource !== undefined ? () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.Image, {
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
      style: [react_native__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.absoluteFill, {
        display: isFocused || nextPresentation != null && TRANSPARENT_PRESENTATIONS.includes(nextPresentation) ? 'flex' : 'none'
      }, presentation != null && TRANSPARENT_PRESENTATIONS.includes(presentation) ? {
        backgroundColor: 'transparent'
      } : null]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_navigation_elements__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
      value: headerBack
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.View, {
      style: [styles.contentContainer, contentStyle]
    }, render())));
  })));
}
const styles = react_native__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
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
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-native/index.js");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
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
    width: react_native__WEBPACK_IMPORTED_MODULE_1__.Dimensions.get('window').width,
    height: react_native__WEBPACK_IMPORTED_MODULE_1__.Dimensions.get('window').height
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
const styles = react_native__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
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

/***/ "./node_modules/react-native/index.js":
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (15:7)\nFile was processed with these loaders:\n * ./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\n| \n| // APIs\n> import typeof ActionSheetIOS from './Libraries/ActionSheetIOS/ActionSheetIOS';\n| import typeof Alert from './Libraries/Alert/Alert';\n| import typeof Animated from './Libraries/Animated/Animated';");

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLmNiN2UyMmJlMTUzMzhjY2JhOWE3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQkFBc0Isc0VBQXNFLGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCxpQ0FBaUMsa0JBQWtCO0FBQ3RQO0FBQ3JCO0FBQ0s7QUFDckI7QUFDZjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUksRUFBRSxvRUFBUTtBQUNkLHNCQUFzQixnREFBbUIsQ0FBQyw4Q0FBSSxhQUFhO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkIrQjtBQUNxQztBQUNpQjtBQUN2QjtBQUNaO0FBQ0k7QUFDZDtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHNCQUFzQixXQUFXLHVCQUF1QixNQUFNO0FBQzlEO0FBQ0EsR0FBRztBQUNIO0FBQ2U7QUFDZixpQkFBaUIsaUZBQWlCO0FBQ2xDLGdCQUFnQixnRkFBZ0I7QUFDaEMsOEJBQThCLDZDQUFnQixDQUFDLDJEQUFrQjs7QUFFakU7QUFDQSwyQkFBMkIsa0RBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFRO0FBQy9CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSix3QkFBd0IsbUVBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q3JDO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZUFBZSxvREFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDZDQUFnQjtBQUN6QjtBQUNBO0FBQ0EsU0FBUyw2Q0FBZ0I7QUFDekI7QUFDQTtBQUNPO0FBQ1AsaUJBQWlCLDZDQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxnQkFBZ0IsNkNBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHNCQUFzQiw2Q0FBZ0I7QUFDdEM7QUFDQSx3QkFBd0IsZ0RBQW1CLDhCQUE4QjtBQUN6RTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ087QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2VsZW1lbnRzL2xpYi9tb2R1bGUvQmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9lbGVtZW50cy9saWIvbW9kdWxlL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vZWxlbWVudHMvbGliL21vZHVsZS9IZWFkZXIvSGVhZGVyQmFja0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9lbGVtZW50cy9saWIvbW9kdWxlL0hlYWRlci9IZWFkZXJCYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2VsZW1lbnRzL2xpYi9tb2R1bGUvSGVhZGVyL0hlYWRlclRpdGxlLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2VsZW1lbnRzL2xpYi9tb2R1bGUvSGVhZGVyL2dldERlZmF1bHRIZWFkZXJIZWlnaHQuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vZWxlbWVudHMvbGliL21vZHVsZS9NYXNrZWRWaWV3TmF0aXZlLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2VsZW1lbnRzL2xpYi9tb2R1bGUvUGxhdGZvcm1QcmVzc2FibGUuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vZWxlbWVudHMvbGliL21vZHVsZS9TYWZlQXJlYVByb3ZpZGVyQ29tcGF0LmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2VsZW1lbnRzL2xpYi9tb2R1bGUvU2NyZWVuLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL25hdGl2ZS1zdGFjay9saWIvbW9kdWxlL3ZpZXdzL05hdGl2ZVN0YWNrVmlldy5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1uYXRpdmUtc2FmZS1hcmVhLWNvbnRleHQvbGliL21vZHVsZS9TYWZlQXJlYUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0ByZWFjdC1uYXZpZ2F0aW9uL25hdGl2ZSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhY2tncm91bmQoX3JlZikge1xuICBsZXQge1xuICAgIHN0eWxlLFxuICAgIC4uLnJlc3RcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHtcbiAgICBjb2xvcnNcbiAgfSA9IHVzZVRoZW1lKCk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChWaWV3LCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIHN0eWxlOiBbe1xuICAgICAgZmxleDogMSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmJhY2tncm91bmRcbiAgICB9LCBzdHlsZV1cbiAgfSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmFja2dyb3VuZC5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlZCwgUGxhdGZvcm0sIFN0eWxlU2hlZXQsIFZpZXcgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgdXNlU2FmZUFyZWFGcmFtZSwgdXNlU2FmZUFyZWFJbnNldHMgfSBmcm9tICdyZWFjdC1uYXRpdmUtc2FmZS1hcmVhLWNvbnRleHQnO1xuaW1wb3J0IGdldERlZmF1bHRIZWFkZXJIZWlnaHQgZnJvbSAnLi9nZXREZWZhdWx0SGVhZGVySGVpZ2h0JztcbmltcG9ydCBIZWFkZXJCYWNrZ3JvdW5kIGZyb20gJy4vSGVhZGVyQmFja2dyb3VuZCc7XG5pbXBvcnQgSGVhZGVyU2hvd25Db250ZXh0IGZyb20gJy4vSGVhZGVyU2hvd25Db250ZXh0JztcbmltcG9ydCBIZWFkZXJUaXRsZSBmcm9tICcuL0hlYWRlclRpdGxlJztcbmNvbnN0IHdhcm5JZkhlYWRlclN0eWxlc0RlZmluZWQgPSBzdHlsZXMgPT4ge1xuICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goc3R5bGVQcm9wID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1tzdHlsZVByb3BdO1xuICAgIGlmIChzdHlsZVByb3AgPT09ICdwb3NpdGlvbicgJiYgdmFsdWUgPT09ICdhYnNvbHV0ZScpIHtcbiAgICAgIGNvbnNvbGUud2FybihcInBvc2l0aW9uOiAnYWJzb2x1dGUnIGlzIG5vdCBzdXBwb3J0ZWQgb24gaGVhZGVyU3R5bGUuIElmIHlvdSB3b3VsZCBsaWtlIHRvIHJlbmRlciBjb250ZW50IHVuZGVyIHRoZSBoZWFkZXIsIHVzZSB0aGUgJ2hlYWRlclRyYW5zcGFyZW50JyBvcHRpb24uXCIpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS53YXJuKGAke3N0eWxlUHJvcH0gd2FzIGdpdmVuIGEgdmFsdWUgb2YgJHt2YWx1ZX0sIHRoaXMgaGFzIG5vIGVmZmVjdCBvbiBoZWFkZXJTdHlsZS5gKTtcbiAgICB9XG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xuICBjb25zdCBpbnNldHMgPSB1c2VTYWZlQXJlYUluc2V0cygpO1xuICBjb25zdCBmcmFtZSA9IHVzZVNhZmVBcmVhRnJhbWUoKTtcbiAgY29uc3QgaXNQYXJlbnRIZWFkZXJTaG93biA9IFJlYWN0LnVzZUNvbnRleHQoSGVhZGVyU2hvd25Db250ZXh0KTtcblxuICAvLyBPbiBtb2RlbHMgd2l0aCBEeW5hbWljIElzbGFuZCB0aGUgc3RhdHVzIGJhciBoZWlnaHQgaXMgc21hbGxlciB0aGFuIHRoZSBzYWZlIGFyZWEgdG9wIGluc2V0LlxuICBjb25zdCBoYXNEeW5hbWljSXNsYW5kID0gUGxhdGZvcm0uT1MgPT09ICdpb3MnICYmIGluc2V0cy50b3AgPiA1MDtcbiAgY29uc3Qgc3RhdHVzQmFySGVpZ2h0ID0gaGFzRHluYW1pY0lzbGFuZCA/IGluc2V0cy50b3AgLSA1IDogaW5zZXRzLnRvcDtcbiAgY29uc3Qge1xuICAgIGxheW91dCA9IGZyYW1lLFxuICAgIG1vZGFsID0gZmFsc2UsXG4gICAgdGl0bGUsXG4gICAgaGVhZGVyVGl0bGU6IGN1c3RvbVRpdGxlLFxuICAgIGhlYWRlclRpdGxlQWxpZ24gPSBQbGF0Zm9ybS5zZWxlY3Qoe1xuICAgICAgaW9zOiAnY2VudGVyJyxcbiAgICAgIGRlZmF1bHQ6ICdsZWZ0J1xuICAgIH0pLFxuICAgIGhlYWRlckxlZnQsXG4gICAgaGVhZGVyTGVmdExhYmVsVmlzaWJsZSxcbiAgICBoZWFkZXJUcmFuc3BhcmVudCxcbiAgICBoZWFkZXJUaW50Q29sb3IsXG4gICAgaGVhZGVyQmFja2dyb3VuZCxcbiAgICBoZWFkZXJSaWdodCxcbiAgICBoZWFkZXJUaXRsZUFsbG93Rm9udFNjYWxpbmc6IHRpdGxlQWxsb3dGb250U2NhbGluZyxcbiAgICBoZWFkZXJUaXRsZVN0eWxlOiB0aXRsZVN0eWxlLFxuICAgIGhlYWRlckxlZnRDb250YWluZXJTdHlsZTogbGVmdENvbnRhaW5lclN0eWxlLFxuICAgIGhlYWRlclJpZ2h0Q29udGFpbmVyU3R5bGU6IHJpZ2h0Q29udGFpbmVyU3R5bGUsXG4gICAgaGVhZGVyVGl0bGVDb250YWluZXJTdHlsZTogdGl0bGVDb250YWluZXJTdHlsZSxcbiAgICBoZWFkZXJCYWNrZ3JvdW5kQ29udGFpbmVyU3R5bGU6IGJhY2tncm91bmRDb250YWluZXJTdHlsZSxcbiAgICBoZWFkZXJTdHlsZTogY3VzdG9tSGVhZGVyU3R5bGUsXG4gICAgaGVhZGVyU2hhZG93VmlzaWJsZSxcbiAgICBoZWFkZXJQcmVzc0NvbG9yLFxuICAgIGhlYWRlclByZXNzT3BhY2l0eSxcbiAgICBoZWFkZXJTdGF0dXNCYXJIZWlnaHQgPSBpc1BhcmVudEhlYWRlclNob3duID8gMCA6IHN0YXR1c0JhckhlaWdodFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGRlZmF1bHRIZWlnaHQgPSBnZXREZWZhdWx0SGVhZGVySGVpZ2h0KGxheW91dCwgbW9kYWwsIGhlYWRlclN0YXR1c0JhckhlaWdodCk7XG4gIGNvbnN0IHtcbiAgICBoZWlnaHQgPSBkZWZhdWx0SGVpZ2h0LFxuICAgIG1pbkhlaWdodCxcbiAgICBtYXhIZWlnaHQsXG4gICAgYmFja2dyb3VuZENvbG9yLFxuICAgIGJvcmRlckJvdHRvbUNvbG9yLFxuICAgIGJvcmRlckJvdHRvbUVuZFJhZGl1cyxcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzLFxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzLFxuICAgIGJvcmRlckJvdHRvbVN0YXJ0UmFkaXVzLFxuICAgIGJvcmRlckJvdHRvbVdpZHRoLFxuICAgIGJvcmRlckNvbG9yLFxuICAgIGJvcmRlckVuZENvbG9yLFxuICAgIGJvcmRlckVuZFdpZHRoLFxuICAgIGJvcmRlckxlZnRDb2xvcixcbiAgICBib3JkZXJMZWZ0V2lkdGgsXG4gICAgYm9yZGVyUmFkaXVzLFxuICAgIGJvcmRlclJpZ2h0Q29sb3IsXG4gICAgYm9yZGVyUmlnaHRXaWR0aCxcbiAgICBib3JkZXJTdGFydENvbG9yLFxuICAgIGJvcmRlclN0YXJ0V2lkdGgsXG4gICAgYm9yZGVyU3R5bGUsXG4gICAgYm9yZGVyVG9wQ29sb3IsXG4gICAgYm9yZGVyVG9wRW5kUmFkaXVzLFxuICAgIGJvcmRlclRvcExlZnRSYWRpdXMsXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXMsXG4gICAgYm9yZGVyVG9wU3RhcnRSYWRpdXMsXG4gICAgYm9yZGVyVG9wV2lkdGgsXG4gICAgYm9yZGVyV2lkdGgsXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogd2ViIHN1cHBvcnQgZm9yIHNoYWRvd1xuICAgIGJveFNoYWRvdyxcbiAgICBlbGV2YXRpb24sXG4gICAgc2hhZG93Q29sb3IsXG4gICAgc2hhZG93T2Zmc2V0LFxuICAgIHNoYWRvd09wYWNpdHksXG4gICAgc2hhZG93UmFkaXVzLFxuICAgIG9wYWNpdHksXG4gICAgdHJhbnNmb3JtLFxuICAgIC4uLnVuc2FmZVN0eWxlc1xuICB9ID0gU3R5bGVTaGVldC5mbGF0dGVuKGN1c3RvbUhlYWRlclN0eWxlIHx8IHt9KTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuSWZIZWFkZXJTdHlsZXNEZWZpbmVkKHVuc2FmZVN0eWxlcyk7XG4gIH1cbiAgY29uc3Qgc2FmZVN0eWxlcyA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgYm9yZGVyQm90dG9tQ29sb3IsXG4gICAgYm9yZGVyQm90dG9tRW5kUmFkaXVzLFxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXMsXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMsXG4gICAgYm9yZGVyQm90dG9tU3RhcnRSYWRpdXMsXG4gICAgYm9yZGVyQm90dG9tV2lkdGgsXG4gICAgYm9yZGVyQ29sb3IsXG4gICAgYm9yZGVyRW5kQ29sb3IsXG4gICAgYm9yZGVyRW5kV2lkdGgsXG4gICAgYm9yZGVyTGVmdENvbG9yLFxuICAgIGJvcmRlckxlZnRXaWR0aCxcbiAgICBib3JkZXJSYWRpdXMsXG4gICAgYm9yZGVyUmlnaHRDb2xvcixcbiAgICBib3JkZXJSaWdodFdpZHRoLFxuICAgIGJvcmRlclN0YXJ0Q29sb3IsXG4gICAgYm9yZGVyU3RhcnRXaWR0aCxcbiAgICBib3JkZXJTdHlsZSxcbiAgICBib3JkZXJUb3BDb2xvcixcbiAgICBib3JkZXJUb3BFbmRSYWRpdXMsXG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1cyxcbiAgICBib3JkZXJUb3BSaWdodFJhZGl1cyxcbiAgICBib3JkZXJUb3BTdGFydFJhZGl1cyxcbiAgICBib3JkZXJUb3BXaWR0aCxcbiAgICBib3JkZXJXaWR0aCxcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBib3hTaGFkb3cgaXMgb25seSBmb3IgV2ViXG4gICAgYm94U2hhZG93LFxuICAgIGVsZXZhdGlvbixcbiAgICBzaGFkb3dDb2xvcixcbiAgICBzaGFkb3dPZmZzZXQsXG4gICAgc2hhZG93T3BhY2l0eSxcbiAgICBzaGFkb3dSYWRpdXMsXG4gICAgb3BhY2l0eSxcbiAgICB0cmFuc2Zvcm1cbiAgfTtcblxuICAvLyBTZXR0aW5nIGEgcHJvcGVydHkgdG8gdW5kZWZpbmVkIHRyaWdnZXJzIGRlZmF1bHQgc3R5bGVcbiAgLy8gU28gd2UgbmVlZCB0byBmaWx0ZXIgdGhlbSBvdXRcbiAgLy8gVXNlcnMgY2FuIHVzZSBgbnVsbGAgaW5zdGVhZFxuICBmb3IgKGNvbnN0IHN0eWxlUHJvcCBpbiBzYWZlU3R5bGVzKSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogdHlwZXNjcmlwdCB3cm9uZ2x5IGNvbXBsYWlucyB0aGF0IHN0eWxlUHJvcCBjYW5ub3QgYmUgdXNlZCB0byBpbmRleCBzYWZlU3R5bGVzXG4gICAgaWYgKHNhZmVTdHlsZXNbc3R5bGVQcm9wXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWR5bmFtaWMtZGVsZXRlXG4gICAgICBkZWxldGUgc2FmZVN0eWxlc1tzdHlsZVByb3BdO1xuICAgIH1cbiAgfVxuICBjb25zdCBiYWNrZ3JvdW5kU3R5bGUgPSBbc2FmZVN0eWxlcywgaGVhZGVyU2hhZG93VmlzaWJsZSA9PT0gZmFsc2UgJiYge1xuICAgIGVsZXZhdGlvbjogMCxcbiAgICBzaGFkb3dPcGFjaXR5OiAwLFxuICAgIGJvcmRlckJvdHRvbVdpZHRoOiAwXG4gIH1dO1xuICBjb25zdCBsZWZ0QnV0dG9uID0gaGVhZGVyTGVmdCA/IGhlYWRlckxlZnQoe1xuICAgIHRpbnRDb2xvcjogaGVhZGVyVGludENvbG9yLFxuICAgIHByZXNzQ29sb3I6IGhlYWRlclByZXNzQ29sb3IsXG4gICAgcHJlc3NPcGFjaXR5OiBoZWFkZXJQcmVzc09wYWNpdHksXG4gICAgbGFiZWxWaXNpYmxlOiBoZWFkZXJMZWZ0TGFiZWxWaXNpYmxlXG4gIH0pIDogbnVsbDtcbiAgY29uc3QgcmlnaHRCdXR0b24gPSBoZWFkZXJSaWdodCA/IGhlYWRlclJpZ2h0KHtcbiAgICB0aW50Q29sb3I6IGhlYWRlclRpbnRDb2xvcixcbiAgICBwcmVzc0NvbG9yOiBoZWFkZXJQcmVzc0NvbG9yLFxuICAgIHByZXNzT3BhY2l0eTogaGVhZGVyUHJlc3NPcGFjaXR5XG4gIH0pIDogbnVsbDtcbiAgY29uc3QgaGVhZGVyVGl0bGUgPSB0eXBlb2YgY3VzdG9tVGl0bGUgIT09ICdmdW5jdGlvbicgPyBwcm9wcyA9PiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJUaXRsZSwgcHJvcHMpIDogY3VzdG9tVGl0bGU7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQW5pbWF0ZWQuVmlldywge1xuICAgIHBvaW50ZXJFdmVudHM6IFwiYm94LW5vbmVcIixcbiAgICBzdHlsZTogW1N0eWxlU2hlZXQuYWJzb2x1dGVGaWxsLCB7XG4gICAgICB6SW5kZXg6IDBcbiAgICB9LCBiYWNrZ3JvdW5kQ29udGFpbmVyU3R5bGVdXG4gIH0sIGhlYWRlckJhY2tncm91bmQgPyBoZWFkZXJCYWNrZ3JvdW5kKHtcbiAgICBzdHlsZTogYmFja2dyb3VuZFN0eWxlXG4gIH0pIDogaGVhZGVyVHJhbnNwYXJlbnQgPyBudWxsIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyQmFja2dyb3VuZCwge1xuICAgIHN0eWxlOiBiYWNrZ3JvdW5kU3R5bGVcbiAgfSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBbmltYXRlZC5WaWV3LCB7XG4gICAgcG9pbnRlckV2ZW50czogXCJib3gtbm9uZVwiLFxuICAgIHN0eWxlOiBbe1xuICAgICAgaGVpZ2h0LFxuICAgICAgbWluSGVpZ2h0LFxuICAgICAgbWF4SGVpZ2h0LFxuICAgICAgb3BhY2l0eSxcbiAgICAgIHRyYW5zZm9ybVxuICAgIH1dXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFZpZXcsIHtcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICBzdHlsZToge1xuICAgICAgaGVpZ2h0OiBoZWFkZXJTdGF0dXNCYXJIZWlnaHRcbiAgICB9XG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChWaWV3LCB7XG4gICAgcG9pbnRlckV2ZW50czogXCJib3gtbm9uZVwiLFxuICAgIHN0eWxlOiBzdHlsZXMuY29udGVudFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBbmltYXRlZC5WaWV3LCB7XG4gICAgcG9pbnRlckV2ZW50czogXCJib3gtbm9uZVwiLFxuICAgIHN0eWxlOiBbc3R5bGVzLmxlZnQsIGhlYWRlclRpdGxlQWxpZ24gPT09ICdjZW50ZXInICYmIHN0eWxlcy5leHBhbmQsIHtcbiAgICAgIG1hcmdpblN0YXJ0OiBpbnNldHMubGVmdFxuICAgIH0sIGxlZnRDb250YWluZXJTdHlsZV1cbiAgfSwgbGVmdEJ1dHRvbiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFuaW1hdGVkLlZpZXcsIHtcbiAgICBwb2ludGVyRXZlbnRzOiBcImJveC1ub25lXCIsXG4gICAgc3R5bGU6IFtzdHlsZXMudGl0bGUsIHtcbiAgICAgIC8vIEF2b2lkIHRoZSB0aXRsZSBmcm9tIGdvaW5nIG9mZnNjcmVlbiBvciBvdmVybGFwcGluZyBidXR0b25zXG4gICAgICBtYXhXaWR0aDogaGVhZGVyVGl0bGVBbGlnbiA9PT0gJ2NlbnRlcicgPyBsYXlvdXQud2lkdGggLSAoKGxlZnRCdXR0b24gPyBoZWFkZXJMZWZ0TGFiZWxWaXNpYmxlICE9PSBmYWxzZSA/IDgwIDogMzIgOiAxNikgKyBNYXRoLm1heChpbnNldHMubGVmdCwgaW5zZXRzLnJpZ2h0KSkgKiAyIDogbGF5b3V0LndpZHRoIC0gKChsZWZ0QnV0dG9uID8gNzIgOiAxNikgKyAocmlnaHRCdXR0b24gPyA3MiA6IDE2KSArIGluc2V0cy5sZWZ0IC0gaW5zZXRzLnJpZ2h0KVxuICAgIH0sIHRpdGxlQ29udGFpbmVyU3R5bGVdXG4gIH0sIGhlYWRlclRpdGxlKHtcbiAgICBjaGlsZHJlbjogdGl0bGUsXG4gICAgYWxsb3dGb250U2NhbGluZzogdGl0bGVBbGxvd0ZvbnRTY2FsaW5nLFxuICAgIHRpbnRDb2xvcjogaGVhZGVyVGludENvbG9yLFxuICAgIHN0eWxlOiB0aXRsZVN0eWxlXG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQW5pbWF0ZWQuVmlldywge1xuICAgIHBvaW50ZXJFdmVudHM6IFwiYm94LW5vbmVcIixcbiAgICBzdHlsZTogW3N0eWxlcy5yaWdodCwgc3R5bGVzLmV4cGFuZCwge1xuICAgICAgbWFyZ2luRW5kOiBpbnNldHMucmlnaHRcbiAgICB9LCByaWdodENvbnRhaW5lclN0eWxlXVxuICB9LCByaWdodEJ1dHRvbikpKSk7XG59XG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4OiAxLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdzdHJldGNoJ1xuICB9LFxuICB0aXRsZToge1xuICAgIG1hcmdpbkhvcml6b250YWw6IDE2LFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICB9LFxuICBsZWZ0OiB7XG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0J1xuICB9LFxuICByaWdodDoge1xuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnXG4gIH0sXG4gIGV4cGFuZDoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIGZsZXhCYXNpczogMFxuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUhlYWRlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0ByZWFjdC1uYXZpZ2F0aW9uL25hdGl2ZSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlZCwgSTE4bk1hbmFnZXIsIEltYWdlLCBQbGF0Zm9ybSwgU3R5bGVTaGVldCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgTWFza2VkVmlldyBmcm9tICcuLi9NYXNrZWRWaWV3JztcbmltcG9ydCBQbGF0Zm9ybVByZXNzYWJsZSBmcm9tICcuLi9QbGF0Zm9ybVByZXNzYWJsZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJCYWNrQnV0dG9uKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBkaXNhYmxlZCxcbiAgICBhbGxvd0ZvbnRTY2FsaW5nLFxuICAgIGJhY2tJbWFnZSxcbiAgICBsYWJlbCxcbiAgICBsYWJlbFN0eWxlLFxuICAgIGxhYmVsVmlzaWJsZSA9IFBsYXRmb3JtLk9TID09PSAnaW9zJyxcbiAgICBvbkxhYmVsTGF5b3V0LFxuICAgIG9uUHJlc3MsXG4gICAgcHJlc3NDb2xvcixcbiAgICBwcmVzc09wYWNpdHksXG4gICAgc2NyZWVuTGF5b3V0LFxuICAgIHRpbnRDb2xvcjogY3VzdG9tVGludENvbG9yLFxuICAgIHRpdGxlTGF5b3V0LFxuICAgIHRydW5jYXRlZExhYmVsID0gJ0JhY2snLFxuICAgIGFjY2Vzc2liaWxpdHlMYWJlbCA9IGxhYmVsICYmIGxhYmVsICE9PSAnQmFjaycgPyBgJHtsYWJlbH0sIGJhY2tgIDogJ0dvIGJhY2snLFxuICAgIHRlc3RJRCxcbiAgICBzdHlsZVxuICB9ID0gX3JlZjtcbiAgY29uc3Qge1xuICAgIGNvbG9yc1xuICB9ID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgW2luaXRpYWxMYWJlbFdpZHRoLCBzZXRJbml0aWFsTGFiZWxXaWR0aF0gPSBSZWFjdC51c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCB0aW50Q29sb3IgPSBjdXN0b21UaW50Q29sb3IgIT09IHVuZGVmaW5lZCA/IGN1c3RvbVRpbnRDb2xvciA6IFBsYXRmb3JtLnNlbGVjdCh7XG4gICAgaW9zOiBjb2xvcnMucHJpbWFyeSxcbiAgICBkZWZhdWx0OiBjb2xvcnMudGV4dFxuICB9KTtcbiAgY29uc3QgaGFuZGxlTGFiZWxMYXlvdXQgPSBlID0+IHtcbiAgICBvbkxhYmVsTGF5b3V0ID09PSBudWxsIHx8IG9uTGFiZWxMYXlvdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uTGFiZWxMYXlvdXQoZSk7XG4gICAgc2V0SW5pdGlhbExhYmVsV2lkdGgoZS5uYXRpdmVFdmVudC5sYXlvdXQueCArIGUubmF0aXZlRXZlbnQubGF5b3V0LndpZHRoKTtcbiAgfTtcbiAgY29uc3Qgc2hvdWxkVHJ1bmNhdGVMYWJlbCA9ICgpID0+IHtcbiAgICByZXR1cm4gIWxhYmVsIHx8IGluaXRpYWxMYWJlbFdpZHRoICYmIHRpdGxlTGF5b3V0ICYmIHNjcmVlbkxheW91dCAmJiAoc2NyZWVuTGF5b3V0LndpZHRoIC0gdGl0bGVMYXlvdXQud2lkdGgpIC8gMiA8IGluaXRpYWxMYWJlbFdpZHRoICsgMjY7XG4gIH07XG4gIGNvbnN0IHJlbmRlckJhY2tJbWFnZSA9ICgpID0+IHtcbiAgICBpZiAoYmFja0ltYWdlKSB7XG4gICAgICByZXR1cm4gYmFja0ltYWdlKHtcbiAgICAgICAgdGludENvbG9yXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEltYWdlLCB7XG4gICAgICAgIHN0eWxlOiBbc3R5bGVzLmljb24sIEJvb2xlYW4obGFiZWxWaXNpYmxlKSAmJiBzdHlsZXMuaWNvbldpdGhMYWJlbCwgQm9vbGVhbih0aW50Q29sb3IpICYmIHtcbiAgICAgICAgICB0aW50Q29sb3JcbiAgICAgICAgfV0sXG4gICAgICAgIHNvdXJjZTogcmVxdWlyZSgnLi4vYXNzZXRzL2JhY2staWNvbi5wbmcnKSxcbiAgICAgICAgZmFkZUR1cmF0aW9uOiAwXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbmRlckxhYmVsID0gKCkgPT4ge1xuICAgIGNvbnN0IGxlZnRMYWJlbFRleHQgPSBzaG91bGRUcnVuY2F0ZUxhYmVsKCkgPyB0cnVuY2F0ZWRMYWJlbCA6IGxhYmVsO1xuICAgIGlmICghbGFiZWxWaXNpYmxlIHx8IGxlZnRMYWJlbFRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFZpZXcsIHtcbiAgICAgIHN0eWxlOiBzY3JlZW5MYXlvdXQgP1xuICAgICAgLy8gV2UgbWFrZSB0aGUgYnV0dG9uIGV4dGVuZCB0aWxsIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlblxuICAgICAgLy8gT3RoZXJ3aXNlIGl0IGFwcGVhcnMgdG8gY3V0IG9mZiB3aGVuIHRyYW5zbGF0aW5nXG4gICAgICBbc3R5bGVzLmxhYmVsV3JhcHBlciwge1xuICAgICAgICBtaW5XaWR0aDogc2NyZWVuTGF5b3V0LndpZHRoIC8gMiAtIDI3XG4gICAgICB9XSA6IG51bGxcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBbmltYXRlZC5UZXh0LCB7XG4gICAgICBhY2Nlc3NpYmxlOiBmYWxzZSxcbiAgICAgIG9uTGF5b3V0OlxuICAgICAgLy8gVGhpcyBtZWFzdXJlbWVudCBpcyB1c2VkIHRvIGRldGVybWluZSBpZiB3ZSBzaG91bGQgdHJ1bmNhdGUgdGhlIGxhYmVsIHdoZW4gaXQgZG9lc24ndCBmaXRcbiAgICAgIC8vIE9ubHkgbWVhc3VyZSBpdCB3aGVuIGxhYmVsIGlzIG5vdCB0cnVuY2F0ZWQgYmVjYXVzZSB3ZSB3YW50IHRoZSBtZWFzdXJlbWVudCBvZiBmdWxsIGxhYmVsXG4gICAgICBsZWZ0TGFiZWxUZXh0ID09PSBsYWJlbCA/IGhhbmRsZUxhYmVsTGF5b3V0IDogdW5kZWZpbmVkLFxuICAgICAgc3R5bGU6IFtzdHlsZXMubGFiZWwsIHRpbnRDb2xvciA/IHtcbiAgICAgICAgY29sb3I6IHRpbnRDb2xvclxuICAgICAgfSA6IG51bGwsIGxhYmVsU3R5bGVdLFxuICAgICAgbnVtYmVyT2ZMaW5lczogMSxcbiAgICAgIGFsbG93Rm9udFNjYWxpbmc6ICEhYWxsb3dGb250U2NhbGluZ1xuICAgIH0sIGxlZnRMYWJlbFRleHQpKTtcbiAgICBpZiAoYmFja0ltYWdlIHx8IFBsYXRmb3JtLk9TICE9PSAnaW9zJykge1xuICAgICAgLy8gV2hlbiBhIGN1c3RvbSBiYWNraW1hZ2UgaXMgc3BlY2lmaWVkLCB3ZSBjYW4ndCBtYXNrIHRoZSBsYWJlbFxuICAgICAgLy8gT3RoZXJ3aXNlIHRoZXJlIG1pZ2h0IGJlIHdlaXJkIGVmZmVjdCBkdWUgdG8gb3VyIG1hc2sgbm90IGJlaW5nIHRoZSBzYW1lIGFzIHRoZSBpbWFnZVxuICAgICAgcmV0dXJuIGxhYmVsRWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1hc2tlZFZpZXcsIHtcbiAgICAgIG1hc2tFbGVtZW50OiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChWaWV3LCB7XG4gICAgICAgIHN0eWxlOiBzdHlsZXMuaWNvbk1hc2tDb250YWluZXJcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEltYWdlLCB7XG4gICAgICAgIHNvdXJjZTogcmVxdWlyZSgnLi4vYXNzZXRzL2JhY2staWNvbi1tYXNrLnBuZycpLFxuICAgICAgICBzdHlsZTogc3R5bGVzLmljb25NYXNrXG4gICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVmlldywge1xuICAgICAgICBzdHlsZTogc3R5bGVzLmljb25NYXNrRmlsbGVyUmVjdFxuICAgICAgfSkpXG4gICAgfSwgbGFiZWxFbGVtZW50KTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlUHJlc3MgPSAoKSA9PiBvblByZXNzICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShvblByZXNzKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBsYXRmb3JtUHJlc3NhYmxlLCB7XG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIGFjY2Vzc2libGU6IHRydWUsXG4gICAgYWNjZXNzaWJpbGl0eVJvbGU6IFwiYnV0dG9uXCIsXG4gICAgYWNjZXNzaWJpbGl0eUxhYmVsOiBhY2Nlc3NpYmlsaXR5TGFiZWwsXG4gICAgdGVzdElEOiB0ZXN0SUQsXG4gICAgb25QcmVzczogZGlzYWJsZWQgPyB1bmRlZmluZWQgOiBoYW5kbGVQcmVzcyxcbiAgICBwcmVzc0NvbG9yOiBwcmVzc0NvbG9yLFxuICAgIHByZXNzT3BhY2l0eTogcHJlc3NPcGFjaXR5LFxuICAgIGFuZHJvaWRfcmlwcGxlOiBhbmRyb2lkUmlwcGxlLFxuICAgIHN0eWxlOiBbc3R5bGVzLmNvbnRhaW5lciwgZGlzYWJsZWQgJiYgc3R5bGVzLmRpc2FibGVkLCBzdHlsZV0sXG4gICAgaGl0U2xvcDogUGxhdGZvcm0uc2VsZWN0KHtcbiAgICAgIGlvczogdW5kZWZpbmVkLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0b3A6IDE2LFxuICAgICAgICByaWdodDogMTYsXG4gICAgICAgIGJvdHRvbTogMTYsXG4gICAgICAgIGxlZnQ6IDE2XG4gICAgICB9XG4gICAgfSlcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHJlbmRlckJhY2tJbWFnZSgpLCByZW5kZXJMYWJlbCgpKSk7XG59XG5jb25zdCBhbmRyb2lkUmlwcGxlID0ge1xuICBib3JkZXJsZXNzOiB0cnVlLFxuICBmb3JlZ3JvdW5kOiBQbGF0Zm9ybS5PUyA9PT0gJ2FuZHJvaWQnICYmIFBsYXRmb3JtLlZlcnNpb24gPj0gMjMsXG4gIHJhZGl1czogMjBcbn07XG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIG1pbldpZHRoOiBTdHlsZVNoZWV0LmhhaXJsaW5lV2lkdGgsXG4gICAgLy8gQXZvaWQgY29sbGFwc2luZyB3aGVuIHRpdGxlIGlzIGxvbmdcbiAgICAuLi5QbGF0Zm9ybS5zZWxlY3Qoe1xuICAgICAgaW9zOiBudWxsLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBtYXJnaW5WZXJ0aWNhbDogMyxcbiAgICAgICAgbWFyZ2luSG9yaXpvbnRhbDogMTFcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIG9wYWNpdHk6IDAuNVxuICB9LFxuICBsYWJlbDoge1xuICAgIGZvbnRTaXplOiAxNyxcbiAgICAvLyBUaXRsZSBhbmQgYmFjayBsYWJlbCBhcmUgYSBiaXQgZGlmZmVyZW50IHdpZHRoIGR1ZSB0byB0aXRsZSBiZWluZyBib2xkXG4gICAgLy8gQWRqdXN0aW5nIHRoZSBsZXR0ZXJTcGFjaW5nIG1ha2VzIHRoZW0gY29pbmNpZGUgYmV0dGVyXG4gICAgbGV0dGVyU3BhY2luZzogMC4zNVxuICB9LFxuICBsYWJlbFdyYXBwZXI6IHtcbiAgICAvLyBUaGVzZSBzdHlsZXMgd2lsbCBtYWtlIHN1cmUgdGhhdCB0aGUgbGFiZWwgZG9lc24ndCBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2VcbiAgICAvLyBPdGhlcndpc2UgaXQgbWVzc2VzIHdpdGggdGhlIG1lYXN1cmVtZW50IG9mIHRoZSBsYWJlbFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0J1xuICB9LFxuICBpY29uOiBQbGF0Zm9ybS5zZWxlY3Qoe1xuICAgIGlvczoge1xuICAgICAgaGVpZ2h0OiAyMSxcbiAgICAgIHdpZHRoOiAxMyxcbiAgICAgIG1hcmdpbkxlZnQ6IDgsXG4gICAgICBtYXJnaW5SaWdodDogMjIsXG4gICAgICBtYXJnaW5WZXJ0aWNhbDogMTIsXG4gICAgICByZXNpemVNb2RlOiAnY29udGFpbicsXG4gICAgICB0cmFuc2Zvcm06IFt7XG4gICAgICAgIHNjYWxlWDogSTE4bk1hbmFnZXIuZ2V0Q29uc3RhbnRzKCkuaXNSVEwgPyAtMSA6IDFcbiAgICAgIH1dXG4gICAgfSxcbiAgICBkZWZhdWx0OiB7XG4gICAgICBoZWlnaHQ6IDI0LFxuICAgICAgd2lkdGg6IDI0LFxuICAgICAgbWFyZ2luOiAzLFxuICAgICAgcmVzaXplTW9kZTogJ2NvbnRhaW4nLFxuICAgICAgdHJhbnNmb3JtOiBbe1xuICAgICAgICBzY2FsZVg6IEkxOG5NYW5hZ2VyLmdldENvbnN0YW50cygpLmlzUlRMID8gLTEgOiAxXG4gICAgICB9XVxuICAgIH1cbiAgfSksXG4gIGljb25XaXRoTGFiZWw6IFBsYXRmb3JtLk9TID09PSAnaW9zJyA/IHtcbiAgICBtYXJnaW5SaWdodDogNlxuICB9IDoge30sXG4gIGljb25NYXNrQ29udGFpbmVyOiB7XG4gICAgZmxleDogMSxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgfSxcbiAgaWNvbk1hc2tGaWxsZXJSZWN0OiB7XG4gICAgZmxleDogMSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwJ1xuICB9LFxuICBpY29uTWFzazoge1xuICAgIGhlaWdodDogMjEsXG4gICAgd2lkdGg6IDEzLFxuICAgIG1hcmdpbkxlZnQ6IC0xNC41LFxuICAgIG1hcmdpblZlcnRpY2FsOiAxMixcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgIHJlc2l6ZU1vZGU6ICdjb250YWluJyxcbiAgICB0cmFuc2Zvcm06IFt7XG4gICAgICBzY2FsZVg6IEkxOG5NYW5hZ2VyLmdldENvbnN0YW50cygpLmlzUlRMID8gLTEgOiAxXG4gICAgfV1cbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1IZWFkZXJCYWNrQnV0dG9uLmpzLm1hcCIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAcmVhY3QtbmF2aWdhdGlvbi9uYXRpdmUnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZWQsIFBsYXRmb3JtLCBTdHlsZVNoZWV0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlckJhY2tncm91bmQoX3JlZikge1xuICBsZXQge1xuICAgIHN0eWxlLFxuICAgIC4uLnJlc3RcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHtcbiAgICBjb2xvcnNcbiAgfSA9IHVzZVRoZW1lKCk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBbmltYXRlZC5WaWV3LCBfZXh0ZW5kcyh7XG4gICAgc3R5bGU6IFtzdHlsZXMuY29udGFpbmVyLCB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jYXJkLFxuICAgICAgYm9yZGVyQm90dG9tQ29sb3I6IGNvbG9ycy5ib3JkZXIsXG4gICAgICBzaGFkb3dDb2xvcjogY29sb3JzLmJvcmRlclxuICAgIH0sIHN0eWxlXVxuICB9LCByZXN0KSk7XG59XG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGZsZXg6IDEsXG4gICAgLi4uUGxhdGZvcm0uc2VsZWN0KHtcbiAgICAgIGFuZHJvaWQ6IHtcbiAgICAgICAgZWxldmF0aW9uOiA0XG4gICAgICB9LFxuICAgICAgaW9zOiB7XG4gICAgICAgIHNoYWRvd09wYWNpdHk6IDAuODUsXG4gICAgICAgIHNoYWRvd1JhZGl1czogMCxcbiAgICAgICAgc2hhZG93T2Zmc2V0OiB7XG4gICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgaGVpZ2h0OiBTdHlsZVNoZWV0LmhhaXJsaW5lV2lkdGhcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6IFN0eWxlU2hlZXQuaGFpcmxpbmVXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SGVhZGVyQmFja2dyb3VuZC5qcy5tYXAiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQHJlYWN0LW5hdmlnYXRpb24vbmF0aXZlJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVkLCBQbGF0Zm9ybSwgU3R5bGVTaGVldCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJUaXRsZShfcmVmKSB7XG4gIGxldCB7XG4gICAgdGludENvbG9yLFxuICAgIHN0eWxlLFxuICAgIC4uLnJlc3RcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHtcbiAgICBjb2xvcnNcbiAgfSA9IHVzZVRoZW1lKCk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBbmltYXRlZC5UZXh0LCBfZXh0ZW5kcyh7XG4gICAgYWNjZXNzaWJpbGl0eVJvbGU6IFwiaGVhZGVyXCIsXG4gICAgXCJhcmlhLWxldmVsXCI6IFwiMVwiLFxuICAgIG51bWJlck9mTGluZXM6IDFcbiAgfSwgcmVzdCwge1xuICAgIHN0eWxlOiBbc3R5bGVzLnRpdGxlLCB7XG4gICAgICBjb2xvcjogdGludENvbG9yID09PSB1bmRlZmluZWQgPyBjb2xvcnMudGV4dCA6IHRpbnRDb2xvclxuICAgIH0sIHN0eWxlXVxuICB9KSk7XG59XG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIHRpdGxlOiBQbGF0Zm9ybS5zZWxlY3Qoe1xuICAgIGlvczoge1xuICAgICAgZm9udFNpemU6IDE3LFxuICAgICAgZm9udFdlaWdodDogJzYwMCdcbiAgICB9LFxuICAgIGFuZHJvaWQ6IHtcbiAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmLW1lZGl1bScsXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJ1xuICAgIH0sXG4gICAgZGVmYXVsdDoge1xuICAgICAgZm9udFNpemU6IDE4LFxuICAgICAgZm9udFdlaWdodDogJzUwMCdcbiAgICB9XG4gIH0pXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUhlYWRlclRpdGxlLmpzLm1hcCIsImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRIZWFkZXJIZWlnaHQobGF5b3V0LCBtb2RhbFByZXNlbnRhdGlvbiwgc3RhdHVzQmFySGVpZ2h0KSB7XG4gIGxldCBoZWFkZXJIZWlnaHQ7XG4gIGNvbnN0IGlzTGFuZHNjYXBlID0gbGF5b3V0LndpZHRoID4gbGF5b3V0LmhlaWdodDtcbiAgaWYgKFBsYXRmb3JtLk9TID09PSAnaW9zJykge1xuICAgIGlmIChQbGF0Zm9ybS5pc1BhZCB8fCBQbGF0Zm9ybS5pc1RWKSB7XG4gICAgICBpZiAobW9kYWxQcmVzZW50YXRpb24pIHtcbiAgICAgICAgaGVhZGVySGVpZ2h0ID0gNTY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXJIZWlnaHQgPSA1MDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzTGFuZHNjYXBlKSB7XG4gICAgICAgIGhlYWRlckhlaWdodCA9IDMyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG1vZGFsUHJlc2VudGF0aW9uKSB7XG4gICAgICAgICAgaGVhZGVySGVpZ2h0ID0gNTY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGVhZGVySGVpZ2h0ID0gNDQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoUGxhdGZvcm0uT1MgPT09ICdhbmRyb2lkJykge1xuICAgIGhlYWRlckhlaWdodCA9IDU2O1xuICB9IGVsc2Uge1xuICAgIGhlYWRlckhlaWdodCA9IDY0O1xuICB9XG4gIHJldHVybiBoZWFkZXJIZWlnaHQgKyBzdGF0dXNCYXJIZWlnaHQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZXREZWZhdWx0SGVhZGVySGVpZ2h0LmpzLm1hcCIsIi8qKlxuICogVGhlIG5hdGl2ZSBNYXNrZWRWaWV3IHRoYXQgd2UgZXhwbGljaXRseSByZS1leHBvcnQgZm9yIHN1cHBvcnRlZCBwbGF0Zm9ybXM6IEFuZHJvaWQsIGlPUy5cbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmxldCBSTkNNYXNrZWRWaWV3O1xudHJ5IHtcbiAgLy8gQWRkIHRyeS9jYXRjaCB0byBzdXBwb3J0IHVzYWdlIGV2ZW4gaWYgaXQncyBub3QgaW5zdGFsbGVkLCBzaW5jZSBpdCdzIG9wdGlvbmFsLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBNZXRybyB3aWxsIGhhbmRsZSBpdCBwcm9wZXJseS5cbiAgUk5DTWFza2VkVmlldyA9IHJlcXVpcmUoJ0ByZWFjdC1uYXRpdmUtbWFza2VkLXZpZXcvbWFza2VkLXZpZXcnKS5kZWZhdWx0O1xufSBjYXRjaCAoZSkge1xuICAvLyBJZ25vcmVcbn1cbmNvbnN0IGlzTWFza2VkVmlld0F2YWlsYWJsZSA9IFVJTWFuYWdlci5nZXRWaWV3TWFuYWdlckNvbmZpZygnUk5DTWFza2VkVmlldycpICE9IG51bGw7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXNrZWRWaWV3KF9yZWYpIHtcbiAgbGV0IHtcbiAgICBjaGlsZHJlbixcbiAgICAuLi5yZXN0XG4gIH0gPSBfcmVmO1xuICBpZiAoaXNNYXNrZWRWaWV3QXZhaWxhYmxlICYmIFJOQ01hc2tlZFZpZXcpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUk5DTWFza2VkVmlldywgcmVzdCwgY2hpbGRyZW4pO1xuICB9XG4gIHJldHVybiBjaGlsZHJlbjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1hc2tlZFZpZXdOYXRpdmUuanMubWFwIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0ByZWFjdC1uYXZpZ2F0aW9uL25hdGl2ZSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlZCwgRWFzaW5nLCBQbGF0Zm9ybSwgUHJlc3NhYmxlIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmNvbnN0IEFuaW1hdGVkUHJlc3NhYmxlID0gQW5pbWF0ZWQuY3JlYXRlQW5pbWF0ZWRDb21wb25lbnQoUHJlc3NhYmxlKTtcbmNvbnN0IEFORFJPSURfVkVSU0lPTl9MT0xMSVBPUCA9IDIxO1xuY29uc3QgQU5EUk9JRF9TVVBQT1JUU19SSVBQTEUgPSBQbGF0Zm9ybS5PUyA9PT0gJ2FuZHJvaWQnICYmIFBsYXRmb3JtLlZlcnNpb24gPj0gQU5EUk9JRF9WRVJTSU9OX0xPTExJUE9QO1xuXG4vKipcbiAqIFBsYXRmb3JtUHJlc3NhYmxlIHByb3ZpZGVzIGFuIGFic3RyYWN0aW9uIG9uIHRvcCBvZiBQcmVzc2FibGUgdG8gaGFuZGxlIHBsYXRmb3JtIGRpZmZlcmVuY2VzLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF0Zm9ybVByZXNzYWJsZShfcmVmKSB7XG4gIGxldCB7XG4gICAgb25QcmVzc0luLFxuICAgIG9uUHJlc3NPdXQsXG4gICAgYW5kcm9pZF9yaXBwbGUsXG4gICAgcHJlc3NDb2xvcixcbiAgICBwcmVzc09wYWNpdHkgPSAwLjMsXG4gICAgc3R5bGUsXG4gICAgLi4ucmVzdFxuICB9ID0gX3JlZjtcbiAgY29uc3Qge1xuICAgIGRhcmtcbiAgfSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFtvcGFjaXR5XSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IG5ldyBBbmltYXRlZC5WYWx1ZSgxKSk7XG4gIGNvbnN0IGFuaW1hdGVUbyA9ICh0b1ZhbHVlLCBkdXJhdGlvbikgPT4ge1xuICAgIGlmIChBTkRST0lEX1NVUFBPUlRTX1JJUFBMRSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBBbmltYXRlZC50aW1pbmcob3BhY2l0eSwge1xuICAgICAgdG9WYWx1ZSxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgZWFzaW5nOiBFYXNpbmcuaW5PdXQoRWFzaW5nLnF1YWQpLFxuICAgICAgdXNlTmF0aXZlRHJpdmVyOiB0cnVlXG4gICAgfSkuc3RhcnQoKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlUHJlc3NJbiA9IGUgPT4ge1xuICAgIGFuaW1hdGVUbyhwcmVzc09wYWNpdHksIDApO1xuICAgIG9uUHJlc3NJbiA9PT0gbnVsbCB8fCBvblByZXNzSW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uUHJlc3NJbihlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlUHJlc3NPdXQgPSBlID0+IHtcbiAgICBhbmltYXRlVG8oMSwgMjAwKTtcbiAgICBvblByZXNzT3V0ID09PSBudWxsIHx8IG9uUHJlc3NPdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uUHJlc3NPdXQoZSk7XG4gIH07XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBbmltYXRlZFByZXNzYWJsZSwgX2V4dGVuZHMoe1xuICAgIG9uUHJlc3NJbjogaGFuZGxlUHJlc3NJbixcbiAgICBvblByZXNzT3V0OiBoYW5kbGVQcmVzc091dCxcbiAgICBhbmRyb2lkX3JpcHBsZTogQU5EUk9JRF9TVVBQT1JUU19SSVBQTEUgPyB7XG4gICAgICBjb2xvcjogcHJlc3NDb2xvciAhPT0gdW5kZWZpbmVkID8gcHJlc3NDb2xvciA6IGRhcmsgPyAncmdiYSgyNTUsIDI1NSwgMjU1LCAuMzIpJyA6ICdyZ2JhKDAsIDAsIDAsIC4zMiknLFxuICAgICAgLi4uYW5kcm9pZF9yaXBwbGVcbiAgICB9IDogdW5kZWZpbmVkLFxuICAgIHN0eWxlOiBbe1xuICAgICAgb3BhY2l0eTogIUFORFJPSURfU1VQUE9SVFNfUklQUExFID8gb3BhY2l0eSA6IDFcbiAgICB9LCBzdHlsZV1cbiAgfSwgcmVzdCkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UGxhdGZvcm1QcmVzc2FibGUuanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGltZW5zaW9ucywgUGxhdGZvcm0sIFN0eWxlU2hlZXQsIFZpZXcgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgaW5pdGlhbFdpbmRvd01ldHJpY3MsIFNhZmVBcmVhRnJhbWVDb250ZXh0LCBTYWZlQXJlYUluc2V0c0NvbnRleHQsIFNhZmVBcmVhUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1uYXRpdmUtc2FmZS1hcmVhLWNvbnRleHQnO1xuY29uc3Qge1xuICB3aWR0aCA9IDAsXG4gIGhlaWdodCA9IDBcbn0gPSBEaW1lbnNpb25zLmdldCgnd2luZG93Jyk7XG5cbi8vIFRvIHN1cHBvcnQgU1NSIG9uIHdlYiwgd2UgbmVlZCB0byBoYXZlIGVtcHR5IGluc2V0cyBmb3IgaW5pdGlhbCB2YWx1ZXNcbi8vIE90aGVyd2lzZSB0aGVyZSBjYW4gYmUgbWlzbWF0Y2ggYmV0d2VlbiBTU1IgYW5kIGNsaWVudCBvdXRwdXRcbi8vIFdlIGFsc28gbmVlZCB0byBzcGVjaWZ5IGVtcHR5IHZhbHVlcyB0byBzdXBwb3J0IHRlc3RzIGVudmlyb25tZW50c1xuY29uc3QgaW5pdGlhbE1ldHJpY3MgPSBQbGF0Zm9ybS5PUyA9PT0gJ3dlYicgfHwgaW5pdGlhbFdpbmRvd01ldHJpY3MgPT0gbnVsbCA/IHtcbiAgZnJhbWU6IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0XG4gIH0sXG4gIGluc2V0czoge1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMFxuICB9XG59IDogaW5pdGlhbFdpbmRvd01ldHJpY3M7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTYWZlQXJlYVByb3ZpZGVyQ29tcGF0KF9yZWYpIHtcbiAgbGV0IHtcbiAgICBjaGlsZHJlbixcbiAgICBzdHlsZVxuICB9ID0gX3JlZjtcbiAgY29uc3QgaW5zZXRzID0gUmVhY3QudXNlQ29udGV4dChTYWZlQXJlYUluc2V0c0NvbnRleHQpO1xuICBpZiAoaW5zZXRzKSB7XG4gICAgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIGluc2V0cywgZG9uJ3Qgd3JhcCB0aGUgc3RhY2sgaW4gYW5vdGhlciBzYWZlIGFyZWEgcHJvdmlkZXJcbiAgICAvLyBUaGlzIGF2b2lkcyBhbiBpc3N1ZSB3aXRoIHVwZGF0ZXMgYXQgdGhlIGNvc3Qgb2YgcG90ZW50aWFsbHkgaW5jb3JyZWN0IHZhbHVlc1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1uYXZpZ2F0aW9uL3JlYWN0LW5hdmlnYXRpb24vaXNzdWVzLzE3NFxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChWaWV3LCB7XG4gICAgICBzdHlsZTogW3N0eWxlcy5jb250YWluZXIsIHN0eWxlXVxuICAgIH0sIGNoaWxkcmVuKTtcbiAgfVxuICBpZiAoUGxhdGZvcm0uT1MgPT09ICd3ZWInKSB7XG4gICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTYWZlQXJlYUZyYW1lUHJvdmlkZXIsIHtcbiAgICAgIGluaXRpYWxNZXRyaWNzOiBpbml0aWFsTWV0cmljc1xuICAgIH0sIGNoaWxkcmVuKTtcbiAgfVxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2FmZUFyZWFQcm92aWRlciwge1xuICAgIGluaXRpYWxNZXRyaWNzOiBpbml0aWFsTWV0cmljcyxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgY2hpbGRyZW4pO1xufVxuXG4vLyBGSVhNRTogT24gdGhlIFdlYiwgdGhlIHNhZmUgYXJlYSBmcmFtZSB2YWx1ZSBkb2Vzbid0IHVwZGF0ZSBvbiByZXNpemVcbi8vIFNvIHdlIHdvcmthcm91bmQgdGhpcyBieSBtZWFzdXJpbmcgdGhlIGZyYW1lIG9uIHJlc2l6ZVxuY29uc3QgU2FmZUFyZWFGcmFtZVByb3ZpZGVyID0gX3JlZjIgPT4ge1xuICBsZXQge1xuICAgIGluaXRpYWxNZXRyaWNzLFxuICAgIGNoaWxkcmVuXG4gIH0gPSBfcmVmMjtcbiAgY29uc3QgZWxlbWVudCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgY29uc3QgW2ZyYW1lLCBzZXRGcmFtZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsTWV0cmljcy5mcmFtZSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY3VycmVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgc2V0RnJhbWUoe1xuICAgICAgeDogcmVjdC54LFxuICAgICAgeTogcmVjdC55LFxuICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gICAgfSk7XG4gICAgbGV0IHRpbWVvdXQ7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICBjb25zdCBlbnRyeSA9IGVudHJpZXNbMF07XG4gICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHgsXG4gICAgICAgICAgeSxcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IGVudHJ5LmNvbnRlbnRSZWN0O1xuXG4gICAgICAgIC8vIERlYm91bmNlIHRoZSBmcmFtZSB1cGRhdGVzIHRvIGF2b2lkIHRvbyBtYW55IHVwZGF0ZXMgaW4gYSBzaG9ydCB0aW1lXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldEZyYW1lKHtcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQuY3VycmVudCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTYWZlQXJlYUZyYW1lQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBmcmFtZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgcmVmOiBlbGVtZW50LFxuICAgIHN0eWxlOiB7XG4gICAgICAuLi5TdHlsZVNoZWV0LmFic29sdXRlRmlsbE9iamVjdCxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gICAgfVxuICB9KSwgY2hpbGRyZW4pO1xufTtcblNhZmVBcmVhUHJvdmlkZXJDb21wYXQuaW5pdGlhbE1ldHJpY3MgPSBpbml0aWFsTWV0cmljcztcbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZmxleDogMVxuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNhZmVBcmVhUHJvdmlkZXJDb21wYXQuanMubWFwIiwiaW1wb3J0IHsgTmF2aWdhdGlvbkNvbnRleHQsIE5hdmlnYXRpb25Sb3V0ZUNvbnRleHQgfSBmcm9tICdAcmVhY3QtbmF2aWdhdGlvbi9uYXRpdmUnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyB1c2VTYWZlQXJlYUZyYW1lLCB1c2VTYWZlQXJlYUluc2V0cyB9IGZyb20gJ3JlYWN0LW5hdGl2ZS1zYWZlLWFyZWEtY29udGV4dCc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL0JhY2tncm91bmQnO1xuaW1wb3J0IGdldERlZmF1bHRIZWFkZXJIZWlnaHQgZnJvbSAnLi9IZWFkZXIvZ2V0RGVmYXVsdEhlYWRlckhlaWdodCc7XG5pbXBvcnQgSGVhZGVySGVpZ2h0Q29udGV4dCBmcm9tICcuL0hlYWRlci9IZWFkZXJIZWlnaHRDb250ZXh0JztcbmltcG9ydCBIZWFkZXJTaG93bkNvbnRleHQgZnJvbSAnLi9IZWFkZXIvSGVhZGVyU2hvd25Db250ZXh0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcmVlbihwcm9wcykge1xuICBjb25zdCBkaW1lbnNpb25zID0gdXNlU2FmZUFyZWFGcmFtZSgpO1xuICBjb25zdCBpbnNldHMgPSB1c2VTYWZlQXJlYUluc2V0cygpO1xuICBjb25zdCBpc1BhcmVudEhlYWRlclNob3duID0gUmVhY3QudXNlQ29udGV4dChIZWFkZXJTaG93bkNvbnRleHQpO1xuICBjb25zdCBwYXJlbnRIZWFkZXJIZWlnaHQgPSBSZWFjdC51c2VDb250ZXh0KEhlYWRlckhlaWdodENvbnRleHQpO1xuICBjb25zdCB7XG4gICAgZm9jdXNlZCxcbiAgICBtb2RhbCA9IGZhbHNlLFxuICAgIGhlYWRlcixcbiAgICBoZWFkZXJTaG93biA9IHRydWUsXG4gICAgaGVhZGVyVHJhbnNwYXJlbnQsXG4gICAgaGVhZGVyU3RhdHVzQmFySGVpZ2h0ID0gaXNQYXJlbnRIZWFkZXJTaG93biA/IDAgOiBpbnNldHMudG9wLFxuICAgIG5hdmlnYXRpb24sXG4gICAgcm91dGUsXG4gICAgY2hpbGRyZW4sXG4gICAgc3R5bGVcbiAgfSA9IHByb3BzO1xuICBjb25zdCBbaGVhZGVySGVpZ2h0LCBzZXRIZWFkZXJIZWlnaHRdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gZ2V0RGVmYXVsdEhlYWRlckhlaWdodChkaW1lbnNpb25zLCBtb2RhbCwgaGVhZGVyU3RhdHVzQmFySGVpZ2h0KSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCYWNrZ3JvdW5kLCB7XG4gICAgYWNjZXNzaWJpbGl0eUVsZW1lbnRzSGlkZGVuOiAhZm9jdXNlZCxcbiAgICBpbXBvcnRhbnRGb3JBY2Nlc3NpYmlsaXR5OiBmb2N1c2VkID8gJ2F1dG8nIDogJ25vLWhpZGUtZGVzY2VuZGFudHMnLFxuICAgIHN0eWxlOiBbc3R5bGVzLmNvbnRhaW5lciwgc3R5bGVdXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFZpZXcsIHtcbiAgICBzdHlsZTogc3R5bGVzLmNvbnRlbnRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyU2hvd25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGlzUGFyZW50SGVhZGVyU2hvd24gfHwgaGVhZGVyU2hvd24gIT09IGZhbHNlXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlckhlaWdodENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogaGVhZGVyU2hvd24gPyBoZWFkZXJIZWlnaHQgOiBwYXJlbnRIZWFkZXJIZWlnaHQgPz8gMFxuICB9LCBjaGlsZHJlbikpKSwgaGVhZGVyU2hvd24gPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChOYXZpZ2F0aW9uQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBuYXZpZ2F0aW9uXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5hdmlnYXRpb25Sb3V0ZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogcm91dGVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVmlldywge1xuICAgIG9uTGF5b3V0OiBlID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaGVpZ2h0XG4gICAgICB9ID0gZS5uYXRpdmVFdmVudC5sYXlvdXQ7XG4gICAgICBzZXRIZWFkZXJIZWlnaHQoaGVpZ2h0KTtcbiAgICB9LFxuICAgIHN0eWxlOiBoZWFkZXJUcmFuc3BhcmVudCA/IHN0eWxlcy5hYnNvbHV0ZSA6IG51bGxcbiAgfSwgaGVhZGVyKSkpIDogbnVsbCk7XG59XG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGZsZXg6IDEsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJ1xuICB9LFxuICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBhcHBseWluZyAnY29sdW1uLXJldmVyc2UnIHRvIHNjcmVlbiBjb250ZW50XG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4OiAxXG4gIH0sXG4gIGFic29sdXRlOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDBcbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TY3JlZW4uanMubWFwIiwiaW1wb3J0IHsgZ2V0SGVhZGVyVGl0bGUsIEhlYWRlciwgSGVhZGVyQmFja0J1dHRvbiwgSGVhZGVyQmFja0NvbnRleHQsIFNhZmVBcmVhUHJvdmlkZXJDb21wYXQsIFNjcmVlbiB9IGZyb20gJ0ByZWFjdC1uYXZpZ2F0aW9uL2VsZW1lbnRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEltYWdlLCBTdHlsZVNoZWV0LCBWaWV3IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmNvbnN0IFRSQU5TUEFSRU5UX1BSRVNFTlRBVElPTlMgPSBbJ3RyYW5zcGFyZW50TW9kYWwnLCAnY29udGFpbmVkVHJhbnNwYXJlbnRNb2RhbCddO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF0aXZlU3RhY2tWaWV3KF9yZWYpIHtcbiAgbGV0IHtcbiAgICBzdGF0ZSxcbiAgICBkZXNjcmlwdG9yc1xuICB9ID0gX3JlZjtcbiAgY29uc3QgcGFyZW50SGVhZGVyQmFjayA9IFJlYWN0LnVzZUNvbnRleHQoSGVhZGVyQmFja0NvbnRleHQpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2FmZUFyZWFQcm92aWRlckNvbXBhdCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVmlldywge1xuICAgIHN0eWxlOiBzdHlsZXMuY29udGFpbmVyXG4gIH0sIHN0YXRlLnJvdXRlcy5tYXAoKHJvdXRlLCBpKSA9PiB7XG4gICAgdmFyIF9zdGF0ZSRyb3V0ZXMsIF9zdGF0ZSRyb3V0ZXMyO1xuICAgIGNvbnN0IGlzRm9jdXNlZCA9IHN0YXRlLmluZGV4ID09PSBpO1xuICAgIGNvbnN0IHByZXZpb3VzS2V5ID0gKF9zdGF0ZSRyb3V0ZXMgPSBzdGF0ZS5yb3V0ZXNbaSAtIDFdKSA9PT0gbnVsbCB8fCBfc3RhdGUkcm91dGVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfc3RhdGUkcm91dGVzLmtleTtcbiAgICBjb25zdCBuZXh0S2V5ID0gKF9zdGF0ZSRyb3V0ZXMyID0gc3RhdGUucm91dGVzW2kgKyAxXSkgPT09IG51bGwgfHwgX3N0YXRlJHJvdXRlczIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zdGF0ZSRyb3V0ZXMyLmtleTtcbiAgICBjb25zdCBwcmV2aW91c0Rlc2NyaXB0b3IgPSBwcmV2aW91c0tleSA/IGRlc2NyaXB0b3JzW3ByZXZpb3VzS2V5XSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBuZXh0RGVzY3JpcHRvciA9IG5leHRLZXkgPyBkZXNjcmlwdG9yc1tuZXh0S2V5XSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCB7XG4gICAgICBvcHRpb25zLFxuICAgICAgbmF2aWdhdGlvbixcbiAgICAgIHJlbmRlclxuICAgIH0gPSBkZXNjcmlwdG9yc1tyb3V0ZS5rZXldO1xuICAgIGNvbnN0IGhlYWRlckJhY2sgPSBwcmV2aW91c0Rlc2NyaXB0b3IgPyB7XG4gICAgICB0aXRsZTogZ2V0SGVhZGVyVGl0bGUocHJldmlvdXNEZXNjcmlwdG9yLm9wdGlvbnMsIHByZXZpb3VzRGVzY3JpcHRvci5yb3V0ZS5uYW1lKVxuICAgIH0gOiBwYXJlbnRIZWFkZXJCYWNrO1xuICAgIGNvbnN0IGNhbkdvQmFjayA9IGhlYWRlckJhY2sgIT09IHVuZGVmaW5lZDtcbiAgICBjb25zdCB7XG4gICAgICBoZWFkZXIsXG4gICAgICBoZWFkZXJTaG93bixcbiAgICAgIGhlYWRlclRpbnRDb2xvcixcbiAgICAgIGhlYWRlckJhY2tJbWFnZVNvdXJjZSxcbiAgICAgIGhlYWRlckxlZnQsXG4gICAgICBoZWFkZXJSaWdodCxcbiAgICAgIGhlYWRlclRpdGxlLFxuICAgICAgaGVhZGVyVGl0bGVBbGlnbixcbiAgICAgIGhlYWRlclRpdGxlU3R5bGUsXG4gICAgICBoZWFkZXJTdHlsZSxcbiAgICAgIGhlYWRlclNoYWRvd1Zpc2libGUsXG4gICAgICBoZWFkZXJUcmFuc3BhcmVudCxcbiAgICAgIGhlYWRlckJhY2tncm91bmQsXG4gICAgICBoZWFkZXJCYWNrVGl0bGUsXG4gICAgICBwcmVzZW50YXRpb24sXG4gICAgICBjb250ZW50U3R5bGVcbiAgICB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBuZXh0UHJlc2VudGF0aW9uID0gbmV4dERlc2NyaXB0b3IgPT09IG51bGwgfHwgbmV4dERlc2NyaXB0b3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5leHREZXNjcmlwdG9yLm9wdGlvbnMucHJlc2VudGF0aW9uO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTY3JlZW4sIHtcbiAgICAgIGtleTogcm91dGUua2V5LFxuICAgICAgZm9jdXNlZDogaXNGb2N1c2VkLFxuICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgbmF2aWdhdGlvbjogbmF2aWdhdGlvbixcbiAgICAgIGhlYWRlclNob3duOiBoZWFkZXJTaG93bixcbiAgICAgIGhlYWRlclRyYW5zcGFyZW50OiBoZWFkZXJUcmFuc3BhcmVudCxcbiAgICAgIGhlYWRlcjogaGVhZGVyICE9PSB1bmRlZmluZWQgPyBoZWFkZXIoe1xuICAgICAgICBiYWNrOiBoZWFkZXJCYWNrLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgbmF2aWdhdGlvblxuICAgICAgfSkgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIsIHtcbiAgICAgICAgdGl0bGU6IGdldEhlYWRlclRpdGxlKG9wdGlvbnMsIHJvdXRlLm5hbWUpLFxuICAgICAgICBoZWFkZXJUaW50Q29sb3I6IGhlYWRlclRpbnRDb2xvcixcbiAgICAgICAgaGVhZGVyTGVmdDogdHlwZW9mIGhlYWRlckxlZnQgPT09ICdmdW5jdGlvbicgPyBfcmVmMiA9PiB7XG4gICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHRpbnRDb2xvclxuICAgICAgICAgIH0gPSBfcmVmMjtcbiAgICAgICAgICByZXR1cm4gaGVhZGVyTGVmdCh7XG4gICAgICAgICAgICB0aW50Q29sb3IsXG4gICAgICAgICAgICBjYW5Hb0JhY2ssXG4gICAgICAgICAgICBsYWJlbDogaGVhZGVyQmFja1RpdGxlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gOiBoZWFkZXJMZWZ0ID09PSB1bmRlZmluZWQgJiYgY2FuR29CYWNrID8gX3JlZjMgPT4ge1xuICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICB0aW50Q29sb3JcbiAgICAgICAgICB9ID0gX3JlZjM7XG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlckJhY2tCdXR0b24sIHtcbiAgICAgICAgICAgIHRpbnRDb2xvcjogdGludENvbG9yLFxuICAgICAgICAgICAgYmFja0ltYWdlOiBoZWFkZXJCYWNrSW1hZ2VTb3VyY2UgIT09IHVuZGVmaW5lZCA/ICgpID0+IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEltYWdlLCB7XG4gICAgICAgICAgICAgIHNvdXJjZTogaGVhZGVyQmFja0ltYWdlU291cmNlLFxuICAgICAgICAgICAgICBzdHlsZTogW3N0eWxlcy5iYWNrSW1hZ2UsIHtcbiAgICAgICAgICAgICAgICB0aW50Q29sb3JcbiAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgb25QcmVzczogbmF2aWdhdGlvbi5nb0JhY2ssXG4gICAgICAgICAgICBjYW5Hb0JhY2s6IGNhbkdvQmFja1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IDogaGVhZGVyTGVmdCxcbiAgICAgICAgaGVhZGVyUmlnaHQ6IHR5cGVvZiBoZWFkZXJSaWdodCA9PT0gJ2Z1bmN0aW9uJyA/IF9yZWY0ID0+IHtcbiAgICAgICAgICBsZXQge1xuICAgICAgICAgICAgdGludENvbG9yXG4gICAgICAgICAgfSA9IF9yZWY0O1xuICAgICAgICAgIHJldHVybiBoZWFkZXJSaWdodCh7XG4gICAgICAgICAgICB0aW50Q29sb3IsXG4gICAgICAgICAgICBjYW5Hb0JhY2tcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSA6IGhlYWRlclJpZ2h0LFxuICAgICAgICBoZWFkZXJUaXRsZTogdHlwZW9mIGhlYWRlclRpdGxlID09PSAnZnVuY3Rpb24nID8gX3JlZjUgPT4ge1xuICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIHRpbnRDb2xvclxuICAgICAgICAgIH0gPSBfcmVmNTtcbiAgICAgICAgICByZXR1cm4gaGVhZGVyVGl0bGUoe1xuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICB0aW50Q29sb3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSA6IGhlYWRlclRpdGxlLFxuICAgICAgICBoZWFkZXJUaXRsZUFsaWduOiBoZWFkZXJUaXRsZUFsaWduLFxuICAgICAgICBoZWFkZXJUaXRsZVN0eWxlOiBoZWFkZXJUaXRsZVN0eWxlLFxuICAgICAgICBoZWFkZXJUcmFuc3BhcmVudDogaGVhZGVyVHJhbnNwYXJlbnQsXG4gICAgICAgIGhlYWRlclNoYWRvd1Zpc2libGU6IGhlYWRlclNoYWRvd1Zpc2libGUsXG4gICAgICAgIGhlYWRlckJhY2tncm91bmQ6IGhlYWRlckJhY2tncm91bmQsXG4gICAgICAgIGhlYWRlclN0eWxlOiBoZWFkZXJTdHlsZVxuICAgICAgfSksXG4gICAgICBzdHlsZTogW1N0eWxlU2hlZXQuYWJzb2x1dGVGaWxsLCB7XG4gICAgICAgIGRpc3BsYXk6IGlzRm9jdXNlZCB8fCBuZXh0UHJlc2VudGF0aW9uICE9IG51bGwgJiYgVFJBTlNQQVJFTlRfUFJFU0VOVEFUSU9OUy5pbmNsdWRlcyhuZXh0UHJlc2VudGF0aW9uKSA/ICdmbGV4JyA6ICdub25lJ1xuICAgICAgfSwgcHJlc2VudGF0aW9uICE9IG51bGwgJiYgVFJBTlNQQVJFTlRfUFJFU0VOVEFUSU9OUy5pbmNsdWRlcyhwcmVzZW50YXRpb24pID8ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgIH0gOiBudWxsXVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlckJhY2tDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogaGVhZGVyQmFja1xuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFZpZXcsIHtcbiAgICAgIHN0eWxlOiBbc3R5bGVzLmNvbnRlbnRDb250YWluZXIsIGNvbnRlbnRTdHlsZV1cbiAgICB9LCByZW5kZXIoKSkpKTtcbiAgfSkpKTtcbn1cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZmxleDogMVxuICB9LFxuICBjb250ZW50Q29udGFpbmVyOiB7XG4gICAgZmxleDogMVxuICB9LFxuICBiYWNrSW1hZ2U6IHtcbiAgICBoZWlnaHQ6IDI0LFxuICAgIHdpZHRoOiAyNCxcbiAgICBtYXJnaW46IDMsXG4gICAgcmVzaXplTW9kZTogJ2NvbnRhaW4nXG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TmF0aXZlU3RhY2tWaWV3LmpzLm1hcCIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyByZXR1cm4gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAobikgeyBmb3IgKHZhciBlID0gMTsgZSA8IGFyZ3VtZW50cy5sZW5ndGg7IGUrKykgeyB2YXIgdCA9IGFyZ3VtZW50c1tlXTsgZm9yICh2YXIgciBpbiB0KSAoe30pLmhhc093blByb3BlcnR5LmNhbGwodCwgcikgJiYgKG5bcl0gPSB0W3JdKTsgfSByZXR1cm4gbjsgfSwgX2V4dGVuZHMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfVxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGltZW5zaW9ucywgU3R5bGVTaGVldCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBOYXRpdmVTYWZlQXJlYVByb3ZpZGVyIH0gZnJvbSAnLi9OYXRpdmVTYWZlQXJlYVByb3ZpZGVyJztcbmNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcbmV4cG9ydCBjb25zdCBTYWZlQXJlYUluc2V0c0NvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbmlmIChpc0Rldikge1xuICBTYWZlQXJlYUluc2V0c0NvbnRleHQuZGlzcGxheU5hbWUgPSAnU2FmZUFyZWFJbnNldHNDb250ZXh0Jztcbn1cbmV4cG9ydCBjb25zdCBTYWZlQXJlYUZyYW1lQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuaWYgKGlzRGV2KSB7XG4gIFNhZmVBcmVhRnJhbWVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ1NhZmVBcmVhRnJhbWVDb250ZXh0Jztcbn1cbmV4cG9ydCBmdW5jdGlvbiBTYWZlQXJlYVByb3ZpZGVyKHtcbiAgY2hpbGRyZW4sXG4gIGluaXRpYWxNZXRyaWNzLFxuICBpbml0aWFsU2FmZUFyZWFJbnNldHMsXG4gIHN0eWxlLFxuICAuLi5vdGhlcnNcbn0pIHtcbiAgY29uc3QgcGFyZW50SW5zZXRzID0gdXNlUGFyZW50U2FmZUFyZWFJbnNldHMoKTtcbiAgY29uc3QgcGFyZW50RnJhbWUgPSB1c2VQYXJlbnRTYWZlQXJlYUZyYW1lKCk7XG4gIGNvbnN0IFtpbnNldHMsIHNldEluc2V0c10gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsTWV0cmljcz8uaW5zZXRzID8/IGluaXRpYWxTYWZlQXJlYUluc2V0cyA/PyBwYXJlbnRJbnNldHMgPz8gbnVsbCk7XG4gIGNvbnN0IFtmcmFtZSwgc2V0RnJhbWVdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbE1ldHJpY3M/LmZyYW1lID8/IHBhcmVudEZyYW1lID8/IHtcbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IHNvIHdlIHJlbmRlciBhbnl3YXkgaWYgd2UgZG9uJ3QgaGF2ZSBmcmFtZS5cbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgd2lkdGg6IERpbWVuc2lvbnMuZ2V0KCd3aW5kb3cnKS53aWR0aCxcbiAgICBoZWlnaHQ6IERpbWVuc2lvbnMuZ2V0KCd3aW5kb3cnKS5oZWlnaHRcbiAgfSk7XG4gIGNvbnN0IG9uSW5zZXRzQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hdGl2ZUV2ZW50OiB7XG4gICAgICAgIGZyYW1lOiBuZXh0RnJhbWUsXG4gICAgICAgIGluc2V0czogbmV4dEluc2V0c1xuICAgICAgfVxuICAgIH0gPSBldmVudDtcbiAgICBzZXRGcmFtZShjdXJGcmFtZSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IHdpdGggb2xkIG5hdGl2ZSBjb2RlIHRoYXQgd29uJ3Qgc2VuZCBmcmFtZS5cbiAgICAgIG5leHRGcmFtZSAmJiAobmV4dEZyYW1lLmhlaWdodCAhPT0gY3VyRnJhbWUuaGVpZ2h0IHx8IG5leHRGcmFtZS53aWR0aCAhPT0gY3VyRnJhbWUud2lkdGggfHwgbmV4dEZyYW1lLnggIT09IGN1ckZyYW1lLnggfHwgbmV4dEZyYW1lLnkgIT09IGN1ckZyYW1lLnkpKSB7XG4gICAgICAgIHJldHVybiBuZXh0RnJhbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY3VyRnJhbWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0SW5zZXRzKGN1ckluc2V0cyA9PiB7XG4gICAgICBpZiAoIWN1ckluc2V0cyB8fCBuZXh0SW5zZXRzLmJvdHRvbSAhPT0gY3VySW5zZXRzLmJvdHRvbSB8fCBuZXh0SW5zZXRzLmxlZnQgIT09IGN1ckluc2V0cy5sZWZ0IHx8IG5leHRJbnNldHMucmlnaHQgIT09IGN1ckluc2V0cy5yaWdodCB8fCBuZXh0SW5zZXRzLnRvcCAhPT0gY3VySW5zZXRzLnRvcCkge1xuICAgICAgICByZXR1cm4gbmV4dEluc2V0cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjdXJJbnNldHM7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5hdGl2ZVNhZmVBcmVhUHJvdmlkZXIsIF9leHRlbmRzKHtcbiAgICBzdHlsZTogW3N0eWxlcy5maWxsLCBzdHlsZV0sXG4gICAgb25JbnNldHNDaGFuZ2U6IG9uSW5zZXRzQ2hhbmdlXG4gIH0sIG90aGVycyksIGluc2V0cyAhPSBudWxsID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2FmZUFyZWFGcmFtZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogZnJhbWVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2FmZUFyZWFJbnNldHNDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGluc2V0c1xuICB9LCBjaGlsZHJlbikpIDogbnVsbCk7XG59XG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGZpbGw6IHtcbiAgICBmbGV4OiAxXG4gIH1cbn0pO1xuZnVuY3Rpb24gdXNlUGFyZW50U2FmZUFyZWFJbnNldHMoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFNhZmVBcmVhSW5zZXRzQ29udGV4dCk7XG59XG5mdW5jdGlvbiB1c2VQYXJlbnRTYWZlQXJlYUZyYW1lKCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChTYWZlQXJlYUZyYW1lQ29udGV4dCk7XG59XG5jb25zdCBOT19JTlNFVFNfRVJST1IgPSAnTm8gc2FmZSBhcmVhIHZhbHVlIGF2YWlsYWJsZS4gTWFrZSBzdXJlIHlvdSBhcmUgcmVuZGVyaW5nIGA8U2FmZUFyZWFQcm92aWRlcj5gIGF0IHRoZSB0b3Agb2YgeW91ciBhcHAuJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VTYWZlQXJlYUluc2V0cygpIHtcbiAgY29uc3QgaW5zZXRzID0gUmVhY3QudXNlQ29udGV4dChTYWZlQXJlYUluc2V0c0NvbnRleHQpO1xuICBpZiAoaW5zZXRzID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9fSU5TRVRTX0VSUk9SKTtcbiAgfVxuICByZXR1cm4gaW5zZXRzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNhZmVBcmVhRnJhbWUoKSB7XG4gIGNvbnN0IGZyYW1lID0gUmVhY3QudXNlQ29udGV4dChTYWZlQXJlYUZyYW1lQ29udGV4dCk7XG4gIGlmIChmcmFtZSA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PX0lOU0VUU19FUlJPUik7XG4gIH1cbiAgcmV0dXJuIGZyYW1lO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhTYWZlQXJlYUluc2V0cyhXcmFwcGVkQ29tcG9uZW50KSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IGluc2V0cyA9IHVzZVNhZmVBcmVhSW5zZXRzKCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgaW5zZXRzOiBpbnNldHMsXG4gICAgICByZWY6IHJlZlxuICAgIH0pKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVNhZmVBcmVhKCkge1xuICByZXR1cm4gdXNlU2FmZUFyZWFJbnNldHMoKTtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgU2FmZUFyZWFDb25zdW1lciA9IFNhZmVBcmVhSW5zZXRzQ29udGV4dC5Db25zdW1lcjtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgU2FmZUFyZWFDb250ZXh0ID0gU2FmZUFyZWFJbnNldHNDb250ZXh0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2FmZUFyZWFDb250ZXh0LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==