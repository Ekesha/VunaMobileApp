exports.id = "vendor";
exports.ids = null;
exports.modules = {

/***/ "./node_modules/@react-navigation/core/lib/module/BaseNavigationContainer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_navigation_routers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/@react-navigation/routers/lib/module/CommonActions.js");
/* harmony import */ var _EnsureSingleNavigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/EnsureSingleNavigator.js");
/* harmony import */ var _UnhandledActionContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/UnhandledActionContext.js");
/* harmony import */ var _NavigationBuilderContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationBuilderContext.js");
/* harmony import */ var _NavigationStateContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationStateContext.js");
/* harmony import */ var _NavigationRouteContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationRouteContext.js");
/* harmony import */ var _NavigationContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationContext.js");
/* harmony import */ var _useScheduleUpdate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useScheduleUpdate.js");
/* harmony import */ var _useChildListeners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useChildListeners.js");
/* harmony import */ var _useKeyedChildListeners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useKeyedChildListeners.js");
/* harmony import */ var _useOptionsGetters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useOptionsGetters.js");
/* harmony import */ var _useEventEmitter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useEventEmitter.js");
/* harmony import */ var _useSyncState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useSyncState.js");
/* harmony import */ var _checkSerializable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/checkSerializable.js");















const NOT_INITIALIZED_ERROR = "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/5.x/navigating-without-navigation-prop#handling-initialization for more details.";
const serializableWarnings = [];

try {
  /**
   * Migration instructions for removal of devtools from core
   */
  Object.defineProperty(global, 'REACT_NAVIGATION_REDUX_DEVTOOLS_EXTENSION_INTEGRATION_ENABLED', {
    set(_) {
      console.warn("Redux devtools extension integration can be enabled with the '@react-navigation/devtools' package. For more details, see https://reactnavigation.org/docs/5.x/devtools");
    }

  });
} catch (e) {// Ignore
}
/**
 * Remove `key` and `routeNames` from the state objects recursively to get partial state.
 *
 * @param state Initial state object.
 */


const getPartialState = state => {
  if (state === undefined) {
    return;
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  const {
    key,
    routeNames,
    ...partialState
  } = state;
  return { ...partialState,
    stale: true,
    routes: state.routes.map(route => {
      if (route.state === undefined) {
        return route;
      }

      return { ...route,
        state: getPartialState(route.state)
      };
    })
  };
};
/**
 * Container component which holds the navigation state.
 * This should be rendered at the root wrapping the whole app.
 *
 * @param props.initialState Initial state object for the navigation tree.
 * @param props.onStateChange Callback which is called with the latest navigation state when it changes.
 * @param props.children Child elements to render the content.
 * @param props.ref Ref object which refers to the navigation object containing helper methods.
 */


const BaseNavigationContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function BaseNavigationContainer({
  initialState,
  onStateChange,
  onUnhandledAction,
  independent,
  children
}, ref) {
  const parent = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_NavigationStateContext__WEBPACK_IMPORTED_MODULE_4__["default"]);

  if (!parent.isDefault && !independent) {
    throw new Error("Looks like you have nested a 'NavigationContainer' inside another. Normally you need only one container at the root of the app, so this was probably an error. If this was intentional, pass 'independent={true}' explicitely. Note that this will make the child navigators disconnected from the parent and you won't be able to navigate between them.");
  }

  const [state, getState, setState, scheduleUpdate, flushUpdates] = (0,_useSyncState__WEBPACK_IMPORTED_MODULE_12__["default"])(() => getPartialState(initialState == null ? undefined : initialState));
  const isFirstMountRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
  const navigatorKeyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const getKey = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => navigatorKeyRef.current, []);
  const setKey = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(key => {
    navigatorKeyRef.current = key;
  }, []);
  const {
    listeners,
    addListener
  } = (0,_useChildListeners__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    keyedListeners,
    addKeyedListener
  } = (0,_useKeyedChildListeners__WEBPACK_IMPORTED_MODULE_9__["default"])();

  const dispatch = action => {
    if (listeners.focus[0] == null) {
      throw new Error(NOT_INITIALIZED_ERROR);
    }

    listeners.focus[0](navigation => navigation.dispatch(action));
  };

  const canGoBack = () => {
    if (listeners.focus[0] == null) {
      return false;
    }

    const {
      result,
      handled
    } = listeners.focus[0](navigation => navigation.canGoBack());

    if (handled) {
      return result;
    } else {
      return false;
    }
  };

  const resetRoot = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(state => {
    var _state$key, _keyedListeners$getSt, _keyedListeners$getSt2;

    const target = (_state$key = state === null || state === void 0 ? void 0 : state.key) !== null && _state$key !== void 0 ? _state$key : (_keyedListeners$getSt = (_keyedListeners$getSt2 = keyedListeners.getState).root) === null || _keyedListeners$getSt === void 0 ? void 0 : _keyedListeners$getSt.call(_keyedListeners$getSt2).key;

    if (target == null) {
      throw new Error(NOT_INITIALIZED_ERROR);
    }

    listeners.focus[0](navigation => navigation.dispatch({ ..._react_navigation_routers__WEBPACK_IMPORTED_MODULE_14__.reset(state),
      target
    }));
  }, [keyedListeners.getState, listeners.focus]);
  const getRootState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    var _keyedListeners$getSt3, _keyedListeners$getSt4;

    return (_keyedListeners$getSt3 = (_keyedListeners$getSt4 = keyedListeners.getState).root) === null || _keyedListeners$getSt3 === void 0 ? void 0 : _keyedListeners$getSt3.call(_keyedListeners$getSt4);
  }, [keyedListeners.getState]);
  const getCurrentRoute = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    let state = getRootState();

    if (state === undefined) {
      return undefined;
    }

    while (state.routes[state.index].state !== undefined) {
      state = state.routes[state.index].state;
    }

    return state.routes[state.index];
  }, [getRootState]);
  const emitter = (0,_useEventEmitter__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const {
    addOptionsGetter,
    getCurrentOptions
  } = (0,_useOptionsGetters__WEBPACK_IMPORTED_MODULE_10__["default"])({});
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, () => ({ ...Object.keys(_react_navigation_routers__WEBPACK_IMPORTED_MODULE_14__).reduce((acc, name) => {
      acc[name] = (...args) => dispatch(_react_navigation_routers__WEBPACK_IMPORTED_MODULE_14__[name]( // @ts-expect-error: we can't know the type statically
      ...args));

      return acc;
    }, {}),
    ...emitter.create('root'),
    resetRoot,
    dispatch,
    canGoBack,
    getRootState,
    getState: () => state,
    getParent: () => undefined,
    dangerouslyGetState: () => state,
    dangerouslyGetParent: () => undefined,
    getCurrentRoute,
    getCurrentOptions
  }));
  const onDispatchAction = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((action, noop) => {
    emitter.emit({
      type: '__unsafe_action__',
      data: {
        action,
        noop
      }
    });
  }, [emitter]);
  const lastEmittedOptionsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const onOptionsChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(options => {
    if (lastEmittedOptionsRef.current === options) {
      return;
    }

    lastEmittedOptionsRef.current = options;
    emitter.emit({
      type: 'options',
      data: {
        options
      }
    });
  }, [emitter]);
  const builderContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    addListener,
    addKeyedListener,
    onDispatchAction,
    onOptionsChange
  }), [addListener, addKeyedListener, onDispatchAction, onOptionsChange]);
  const scheduleContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    scheduleUpdate,
    flushUpdates
  }), [scheduleUpdate, flushUpdates]);
  const isInitialRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
  const getIsInitial = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => isInitialRef.current, []);
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    state,
    getState,
    setState,
    getKey,
    setKey,
    getIsInitial,
    addOptionsGetter
  }), [state, getState, setState, getKey, setKey, getIsInitial, addOptionsGetter]);
  const onStateChangeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(onStateChange);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    isInitialRef.current = false;
    onStateChangeRef.current = onStateChange;
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (true) {
      if (state !== undefined) {
        const result = (0,_checkSerializable__WEBPACK_IMPORTED_MODULE_13__["default"])(state);

        if (!result.serializable) {
          const {
            location,
            reason
          } = result;
          let path = '';
          let pointer = state;
          let params = false;

          for (let i = 0; i < location.length; i++) {
            const curr = location[i];
            const prev = location[i - 1];
            pointer = pointer[curr];

            if (!params && curr === 'state') {
              continue;
            } else if (!params && curr === 'routes') {
              if (path) {
                path += ' > ';
              }
            } else if (!params && typeof curr === 'number' && prev === 'routes') {
              var _pointer;

              path += (_pointer = pointer) === null || _pointer === void 0 ? void 0 : _pointer.name;
            } else if (!params) {
              path += " > ".concat(curr);
              params = true;
            } else {
              if (typeof curr === 'number' || /^[0-9]+$/.test(curr)) {
                path += "[".concat(curr, "]");
              } else if (/^[a-z$_]+$/i.test(curr)) {
                path += ".".concat(curr);
              } else {
                path += "[".concat(JSON.stringify(curr), "]");
              }
            }
          }

          const message = "Non-serializable values were found in the navigation state. Check:\n\n".concat(path, " (").concat(reason, ")\n\nThis can break usage such as persisting and restoring state. This might happen if you passed non-serializable values such as function, class instances etc. in params. If you need to use components with callbacks in your options, you can use 'navigation.setOptions' instead. See https://reactnavigation.org/docs/5.x/troubleshooting#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state for more details.");

          if (!serializableWarnings.includes(message)) {
            serializableWarnings.push(message);
            console.warn(message);
          }
        }
      }
    }

    emitter.emit({
      type: 'state',
      data: {
        state
      }
    });

    if (!isFirstMountRef.current && onStateChangeRef.current) {
      onStateChangeRef.current(getRootState());
    }

    isFirstMountRef.current = false;
  }, [getRootState, emitter, state]);
  const defaultOnUnhandledAction = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(action => {
    if (false) {}

    const payload = action.payload;
    let message = "The action '".concat(action.type, "'").concat(payload ? " with payload ".concat(JSON.stringify(action.payload)) : '', " was not handled by any navigator.");

    switch (action.type) {
      case 'NAVIGATE':
      case 'PUSH':
      case 'REPLACE':
      case 'JUMP_TO':
        if (payload !== null && payload !== void 0 && payload.name) {
          message += "\n\nDo you have a screen named '".concat(payload.name, "'?\n\nIf you're trying to navigate to a screen in a nested navigator, see https://reactnavigation.org/docs/5.x/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator.");
        } else {
          message += "\n\nYou need to pass the name of the screen to navigate to.\n\nSee https://reactnavigation.org/docs/5.x/navigation-actions for usage.";
        }

        break;

      case 'GO_BACK':
      case 'POP':
      case 'POP_TO_TOP':
        message += "\n\nIs there any screen to go back to?";
        break;

      case 'OPEN_DRAWER':
      case 'CLOSE_DRAWER':
      case 'TOGGLE_DRAWER':
        message += "\n\nIs your screen inside a Drawer navigator?";
        break;
    }

    message += "\n\nThis is a development-only warning and won't be shown in production.";
    console.error(message);
  }, []);
  let element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_useScheduleUpdate__WEBPACK_IMPORTED_MODULE_7__.ScheduleUpdateContext.Provider, {
    value: scheduleContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationBuilderContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: builderContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationStateContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_UnhandledActionContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: onUnhandledAction !== null && onUnhandledAction !== void 0 ? onUnhandledAction : defaultOnUnhandledAction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EnsureSingleNavigator__WEBPACK_IMPORTED_MODULE_1__["default"], null, children)))));

  if (independent) {
    // We need to clear any existing contexts for nested independent container to work correctly
    element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationRouteContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
      value: undefined
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: undefined
    }, element));
  }

  return element;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseNavigationContainer);
//# sourceMappingURL=BaseNavigationContainer.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/CurrentRenderContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Context which holds the values for the current navigation tree.
 * Intended for use in SSR. This is not safe to use on the client.
 */

const CurrentRenderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentRenderContext);
//# sourceMappingURL=CurrentRenderContext.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/EnsureSingleNavigator.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SingleNavigatorContext: () => (/* binding */ SingleNavigatorContext),
/* harmony export */   "default": () => (/* binding */ EnsureSingleNavigator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MULTIPLE_NAVIGATOR_ERROR = "Another navigator is already registered for this container. You likely have multiple navigators under a single \"NavigationContainer\" or \"Screen\". Make sure each navigator is under a separate \"Screen\" container. See https://reactnavigation.org/docs/5.x/nesting-navigators for a guide on nesting.";
const SingleNavigatorContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
/**
 * Component which ensures that there's only one navigator nested under it.
 */

function EnsureSingleNavigator({
  children
}) {
  const navigatorKeyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const value = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    register(key) {
      const currentKey = navigatorKeyRef.current;

      if (currentKey !== undefined && key !== currentKey) {
        throw new Error(MULTIPLE_NAVIGATOR_ERROR);
      }

      navigatorKeyRef.current = key;
    },

    unregister(key) {
      const currentKey = navigatorKeyRef.current;

      if (key !== currentKey) {
        return;
      }

      navigatorKeyRef.current = undefined;
    }

  }), []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SingleNavigatorContext.Provider, {
    value: value
  }, children);
}
//# sourceMappingURL=EnsureSingleNavigator.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/NavigationBuilderContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Context which holds the required helpers needed to build nested navigators.
 */
const NavigationBuilderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  onDispatchAction: () => undefined,
  onOptionsChange: () => undefined
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationBuilderContext);
//# sourceMappingURL=NavigationBuilderContext.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/NavigationContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Context which holds the navigation prop for a screen.
 */
const NavigationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationContext);
//# sourceMappingURL=NavigationContext.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/NavigationHelpersContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Context which holds the navigation helpers of the parent navigator.
 * Navigators should use this context in their view component.
 */
const NavigationHelpersContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationHelpersContext);
//# sourceMappingURL=NavigationHelpersContext.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/NavigationRouteContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Context which holds the route prop for a screen.
 */
const NavigationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationContext);
//# sourceMappingURL=NavigationRouteContext.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/NavigationStateContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MISSING_CONTEXT_ERROR = "Couldn't find a navigation context. Have you wrapped your app with 'NavigationContainer'? See https://reactnavigation.org/docs/5.x/getting-started for setup instructions.";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  isDefault: true,

  get getKey() {
    throw new Error(MISSING_CONTEXT_ERROR);
  },

  get setKey() {
    throw new Error(MISSING_CONTEXT_ERROR);
  },

  get getState() {
    throw new Error(MISSING_CONTEXT_ERROR);
  },

  get setState() {
    throw new Error(MISSING_CONTEXT_ERROR);
  },

  get getIsInitial() {
    throw new Error(MISSING_CONTEXT_ERROR);
  }

}));
//# sourceMappingURL=NavigationStateContext.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/SceneView.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SceneView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationStateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationStateContext.js");
/* harmony import */ var _StaticContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/StaticContainer.js");
/* harmony import */ var _EnsureSingleNavigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/EnsureSingleNavigator.js");
/* harmony import */ var _useOptionsGetters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useOptionsGetters.js");






/**
 * Component which takes care of rendering the screen for a route.
 * It provides all required contexts and applies optimizations when applicable.
 */
function SceneView({
  screen,
  route,
  navigation,
  routeState,
  getState,
  setState,
  options,
  clearOptions
}) {
  const navigatorKeyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const getKey = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => navigatorKeyRef.current, []);
  const {
    addOptionsGetter
  } = (0,_useOptionsGetters__WEBPACK_IMPORTED_MODULE_4__["default"])({
    key: route.key,
    options,
    navigation
  });
  const setKey = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(key => {
    navigatorKeyRef.current = key;
  }, []);
  const getCurrentState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    const state = getState();
    const currentRoute = state.routes.find(r => r.key === route.key);
    return currentRoute ? currentRoute.state : undefined;
  }, [getState, route.key]);
  const setCurrentState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(child => {
    const state = getState();
    setState({ ...state,
      routes: state.routes.map(r => r.key === route.key ? { ...r,
        state: child
      } : r)
    });
  }, [getState, route.key, setState]);
  const isInitialRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    isInitialRef.current = false;
  }); // Clear options set by this screen when it is unmounted

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    return clearOptions; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getIsInitial = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => isInitialRef.current, []);
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    state: routeState,
    getState: getCurrentState,
    setState: setCurrentState,
    getKey,
    setKey,
    getIsInitial,
    addOptionsGetter
  }), [routeState, getCurrentState, setCurrentState, getKey, setKey, getIsInitial, addOptionsGetter]);
  const ScreenComponent = screen.getComponent ? screen.getComponent() : screen.component;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationStateContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EnsureSingleNavigator__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StaticContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: screen.name,
    render: ScreenComponent || screen.children,
    navigation: navigation,
    route: route
  }, ScreenComponent !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ScreenComponent, {
    navigation: navigation,
    route: route
  }) : screen.children !== undefined ? screen.children({
    navigation,
    route
  }) : null)));
}
//# sourceMappingURL=SceneView.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/Screen.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Screen)
/* harmony export */ });
/**
 * Empty component used for specifying route configuration.
 */
function Screen(_) {
  /* istanbul ignore next */
  return null;
}
//# sourceMappingURL=Screen.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/StaticContainer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Component which prevents updates for children if no props changed
 */

function StaticContainer(props) {
  return props.children;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(StaticContainer, (prevProps, nextProps) => {
  const prevPropKeys = Object.keys(prevProps);
  const nextPropKeys = Object.keys(nextProps);

  if (prevPropKeys.length !== nextPropKeys.length) {
    return false;
  }

  for (const key of prevPropKeys) {
    if (key === 'children') {
      continue;
    }

    if (prevProps[key] !== nextProps[key]) {
      return false;
    }
  }

  return true;
}));
//# sourceMappingURL=StaticContainer.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/UnhandledActionContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UnhandledActionContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnhandledActionContext);
//# sourceMappingURL=UnhandledActionContext.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/checkLegacyPathConfig.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkLegacyPathConfig)
/* harmony export */ });
function checkLegacyPathConfig(config) {
  let legacy = false;

  if (config) {
    // Assume legacy configuration if config has any other keys except `screens` and `initialRouteName`
    legacy = Object.keys(config).some(key => key !== 'screens' && key !== 'initialRouteName');

    if (legacy && (config.hasOwnProperty('screens') || config.hasOwnProperty('initialRouteName'))) {
      throw new Error('Found invalid keys in the configuration object. See https://reactnavigation.org/docs/5.x/configuring-links/ for more details on the shape of the configuration object.');
    }
  }

  if (legacy) {
    // @ts-expect-error: we have incorrect type for config since we don't type legacy config
    return [legacy, {
      screens: config
    }];
  }

  return [legacy, config];
}
//# sourceMappingURL=checkLegacyPathConfig.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/checkSerializable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkSerializable)
/* harmony export */ });
const checkSerializableWithoutCircularReference = (o, seen, location) => {
  if (o === undefined || o === null || typeof o === 'boolean' || typeof o === 'number' || typeof o === 'string') {
    return {
      serializable: true
    };
  }

  if (Object.prototype.toString.call(o) !== '[object Object]' && !Array.isArray(o)) {
    return {
      serializable: false,
      location,
      reason: typeof o === 'function' ? 'Function' : String(o)
    };
  }

  if (seen.has(o)) {
    return {
      serializable: false,
      reason: 'Circular reference',
      location
    };
  }

  seen.add(o);

  if (Array.isArray(o)) {
    for (let i = 0; i < o.length; i++) {
      const childResult = checkSerializableWithoutCircularReference(o[i], new Set(seen), [...location, i]);

      if (!childResult.serializable) {
        return childResult;
      }
    }
  } else {
    for (const key in o) {
      const childResult = checkSerializableWithoutCircularReference(o[key], new Set(seen), [...location, key]);

      if (!childResult.serializable) {
        return childResult;
      }
    }
  }

  return {
    serializable: true
  };
};

function checkSerializable(o) {
  return checkSerializableWithoutCircularReference(o, new Set(), []);
}
//# sourceMappingURL=checkSerializable.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/createNavigatorFactory.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNavigatorFactory)
/* harmony export */ });
/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/Screen.js");


/**
 * Higher order component to create a `Navigator` and `Screen` pair.
 * Custom navigators should wrap the navigator component in `createNavigator` before exporting.
 *
 * @param Navigator The navigtor component to wrap.
 * @returns Factory method to create a `Navigator` and `Screen` pair.
 */
function createNavigatorFactory(Navigator) {
  return function () {
    if (arguments[0] !== undefined) {
      throw new Error("Creating a navigator doesn't take an argument. Maybe you are trying to use React Navigation 4 API with React Navigation 5? See https://reactnavigation.org/docs/5.x/upgrading-from-4.x for migration guide.");
    }

    return {
      Navigator,
      Screen: _Screen__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
  };
}
//# sourceMappingURL=createNavigatorFactory.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/getActionFromState.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getActionFromState)
/* harmony export */ });
function getActionFromState(state, options) {
  var _state$index, _normalizedConfig$scr;

  // Create a normalized configs object which will be easier to use
  const normalizedConfig = options ? createNormalizedConfigItem(options) : {};
  const routes = state.index != null ? state.routes.slice(0, state.index + 1) : state.routes;

  if (routes.length === 0) {
    return undefined;
  }

  if (!(routes.length === 1 && routes[0].key === undefined || routes.length === 2 && routes[0].key === undefined && routes[0].name === (normalizedConfig === null || normalizedConfig === void 0 ? void 0 : normalizedConfig.initialRouteName) && routes[1].key === undefined)) {
    return {
      type: 'RESET',
      payload: state
    };
  }

  const route = state.routes[(_state$index = state.index) !== null && _state$index !== void 0 ? _state$index : state.routes.length - 1];
  let current = route === null || route === void 0 ? void 0 : route.state;
  let config = normalizedConfig === null || normalizedConfig === void 0 ? void 0 : (_normalizedConfig$scr = normalizedConfig.screens) === null || _normalizedConfig$scr === void 0 ? void 0 : _normalizedConfig$scr[route === null || route === void 0 ? void 0 : route.name];
  let params = { ...route.params
  };
  let payload = route ? {
    name: route.name,
    params
  } : undefined;

  while (current) {
    var _config, _config2, _config2$screens;

    if (current.routes.length === 0) {
      return undefined;
    }

    const routes = current.index != null ? current.routes.slice(0, current.index + 1) : current.routes;
    const route = routes[routes.length - 1]; // Explicitly set to override existing value when merging params

    Object.assign(params, {
      initial: undefined,
      screen: undefined,
      params: undefined,
      state: undefined
    });

    if (routes.length === 1 && routes[0].key === undefined) {
      params.initial = true;
      params.screen = route.name;
    } else if (routes.length === 2 && routes[0].key === undefined && routes[0].name === ((_config = config) === null || _config === void 0 ? void 0 : _config.initialRouteName) && routes[1].key === undefined) {
      params.initial = false;
      params.screen = route.name;
    } else {
      params.state = current;
      break;
    }

    if (route.state) {
      params.params = { ...route.params
      };
      params = params.params;
    } else {
      params.params = route.params;
    }

    current = route.state;
    config = (_config2 = config) === null || _config2 === void 0 ? void 0 : (_config2$screens = _config2.screens) === null || _config2$screens === void 0 ? void 0 : _config2$screens[route.name];
  }

  if (!payload) {
    return;
  } // Try to construct payload for a `NAVIGATE` action from the state
  // This lets us preserve the navigation state and not lose it


  return {
    type: 'NAVIGATE',
    payload
  };
}

const createNormalizedConfigItem = config => typeof config === 'object' && config != null ? {
  initialRouteName: config.initialRouteName,
  screens: config.screens != null ? createNormalizedConfigs(config.screens) : undefined
} : {};

const createNormalizedConfigs = options => Object.entries(options).reduce((acc, [k, v]) => {
  acc[k] = createNormalizedConfigItem(v);
  return acc;
}, {});
//# sourceMappingURL=getActionFromState.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/getFocusedRouteNameFromRoute.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFocusedRouteNameFromRoute)
/* harmony export */ });
/* harmony import */ var _useRouteCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useRouteCache.js");

function getFocusedRouteNameFromRoute(route) {
  var _state$index;

  _useRouteCache__WEBPACK_IMPORTED_MODULE_0__.SUPPRESS_STATE_ACCESS_WARNING.value = true;
  const state = route.state;
  _useRouteCache__WEBPACK_IMPORTED_MODULE_0__.SUPPRESS_STATE_ACCESS_WARNING.value = false;
  const params = route.params;
  const routeName = state ? // Get the currently active route name in the nested navigator
  state.routes[// If we have a partial state without index, for tab/drawer, first screen will be focused one, and last for stack
  // The type property will only exist for rehydrated state and not for state from deep link
  (_state$index = state.index) !== null && _state$index !== void 0 ? _state$index : typeof state.type === 'string' && state.type !== 'stack' ? 0 : state.routes.length - 1].name : // If state doesn't exist, we need to default to `screen` param if available
  typeof (params === null || params === void 0 ? void 0 : params.screen) === 'string' ? params.screen : undefined;
  return routeName;
}
//# sourceMappingURL=getFocusedRouteNameFromRoute.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/getPathFromState.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPathFromState)
/* harmony export */ });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/query-string/index.js");
/* harmony import */ var _checkLegacyPathConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/checkLegacyPathConfig.js");



const getActiveRoute = state => {
  const route = typeof state.index === 'number' ? state.routes[state.index] : state.routes[state.routes.length - 1];

  if (route.state) {
    return getActiveRoute(route.state);
  }

  return route;
};
/**
 * Utility to serialize a navigation state object to a path string.
 *
 * @example
 * ```js
 * getPathFromState(
 *   {
 *     routes: [
 *       {
 *         name: 'Chat',
 *         params: { author: 'Jane', id: 42 },
 *       },
 *     ],
 *   },
 *   {
 *     screens: {
 *       Chat: {
 *         path: 'chat/:author/:id',
 *         stringify: { author: author => author.toLowerCase() }
 *       }
 *     }
 *   }
 * )
 * ```
 *
 * @param state Navigation state to serialize.
 * @param options Extra options to fine-tune how to serialize the path.
 * @returns Path representing the state, e.g. /foo/bar?count=42.
 */


function getPathFromState(state, options) {
  if (state == null) {
    throw Error("Got 'undefined' for the navigation state. You must pass a valid state object.");
  }

  const [legacy, compatOptions] = (0,_checkLegacyPathConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(options); // Create a normalized configs object which will be easier to use

  const configs = compatOptions ? createNormalizedConfigs(legacy, compatOptions.screens) : {};
  let path = '/';
  let current = state;
  const allParams = {};

  while (current) {
    let index = typeof current.index === 'number' ? current.index : 0;
    let route = current.routes[index];
    let pattern;
    let focusedParams;
    let focusedRoute = getActiveRoute(state);
    let currentOptions = configs; // Keep all the route names that appeared during going deeper in config in case the pattern is resolved to undefined

    let nestedRouteNames = [];
    let hasNext = true;

    while (route.name in currentOptions && hasNext) {
      pattern = currentOptions[route.name].pattern;
      nestedRouteNames.push(route.name);

      if (route.params) {
        var _currentOptions$route;

        const stringify = (_currentOptions$route = currentOptions[route.name]) === null || _currentOptions$route === void 0 ? void 0 : _currentOptions$route.stringify;
        const currentParams = fromEntries(Object.entries(route.params).map(([key, value]) => [key, stringify !== null && stringify !== void 0 && stringify[key] ? stringify[key](value) : String(value)]));

        if (pattern) {
          Object.assign(allParams, currentParams);
        }

        if (focusedRoute === route) {
          var _pattern;

          // If this is the focused route, keep the params for later use
          // We save it here since it's been stringified already
          focusedParams = { ...currentParams
          };
          (_pattern = pattern) === null || _pattern === void 0 ? void 0 : _pattern.split('/').filter(p => p.startsWith(':')) // eslint-disable-next-line no-loop-func
          .forEach(p => {
            const name = getParamName(p); // Remove the params present in the pattern since we'll only use the rest for query string

            if (focusedParams) {
              // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
              delete focusedParams[name];
            }
          });
        }
      } // If there is no `screens` property or no nested state, we return pattern


      if (!currentOptions[route.name].screens || route.state === undefined) {
        hasNext = false;
      } else {
        index = typeof route.state.index === 'number' ? route.state.index : route.state.routes.length - 1;
        const nextRoute = route.state.routes[index];
        const nestedConfig = currentOptions[route.name].screens; // if there is config for next route name, we go deeper

        if (nestedConfig && nextRoute.name in nestedConfig) {
          route = nextRoute;
          currentOptions = nestedConfig;
        } else {
          // If not, there is no sense in going deeper in config
          hasNext = false;
        }
      }
    }

    if (pattern === undefined) {
      pattern = nestedRouteNames.join('/');
    }

    if (currentOptions[route.name] !== undefined) {
      path += pattern.split('/').map(p => {
        const name = getParamName(p); // We don't know what to show for wildcard patterns
        // Showing the route name seems ok, though whatever we show here will be incorrect
        // Since the page doesn't actually exist

        if (p === '*') {
          if (legacy) {
            throw new Error("Please update your config to the new format to use wildcard pattern ('*'). https://reactnavigation.org/docs/5.x/configuring-links/#updating-config");
          }

          return route.name;
        } // If the path has a pattern for a param, put the param in the path


        if (p.startsWith(':')) {
          const value = allParams[name];

          if (value === undefined && p.endsWith('?')) {
            // Optional params without value assigned in route.params should be ignored
            return '';
          }

          return encodeURIComponent(value);
        }

        return encodeURIComponent(p);
      }).join('/');
    } else {
      path += encodeURIComponent(route.name);
    }

    if (!focusedParams) {
      focusedParams = focusedRoute.params;
    }

    if (route.state) {
      path += '/';
    } else if (focusedParams) {
      for (let param in focusedParams) {
        if (focusedParams[param] === 'undefined') {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete focusedParams[param];
        }
      }

      const query = query_string__WEBPACK_IMPORTED_MODULE_0__.stringify(focusedParams);

      if (query) {
        path += "?".concat(query);
      }
    }

    current = route.state;
  } // Remove multiple as well as trailing slashes


  path = path.replace(/\/+/g, '/');
  path = path.length > 1 ? path.replace(/\/$/, '') : path;
  return path;
} // Object.fromEntries is not available in older iOS versions

const fromEntries = entries => entries.reduce((acc, [k, v]) => {
  if (acc.hasOwnProperty(k)) {
    throw new Error("A value for key '".concat(k, "' already exists in the object."));
  }

  acc[k] = v;
  return acc;
}, {});

const getParamName = pattern => pattern.replace(/^:/, '').replace(/\?$/, '');

const joinPaths = (...paths) => [].concat(...paths.map(p => p.split('/'))).filter(Boolean).join('/');

const createConfigItem = (legacy, config, parentPattern) => {
  var _pattern2;

  if (typeof config === 'string') {
    // If a string is specified as the value of the key(e.g. Foo: '/path'), use it as the pattern
    const pattern = parentPattern ? joinPaths(parentPattern, config) : config;
    return {
      pattern
    };
  } // If an object is specified as the value (e.g. Foo: { ... }),
  // It can have `path` property and `screens` prop which has nested configs


  let pattern;

  if (legacy) {
    pattern = config.exact !== true && parentPattern && config.path ? joinPaths(parentPattern, config.path) : config.path;
  } else {
    if (config.exact && config.path === undefined) {
      throw new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
    }

    pattern = config.exact !== true ? joinPaths(parentPattern || '', config.path || '') : config.path || '';
  }

  const screens = config.screens ? createNormalizedConfigs(legacy, config.screens, pattern) : undefined;
  return {
    // Normalize pattern to remove any leading, trailing slashes, duplicate slashes etc.
    pattern: (_pattern2 = pattern) === null || _pattern2 === void 0 ? void 0 : _pattern2.split('/').filter(Boolean).join('/'),
    stringify: config.stringify,
    screens
  };
};

const createNormalizedConfigs = (legacy, options, pattern) => fromEntries(Object.entries(options).map(([name, c]) => {
  const result = createConfigItem(legacy, c, pattern);
  return [name, result];
}));
//# sourceMappingURL=getPathFromState.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/getStateFromPath.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getStateFromPath)
/* harmony export */ });
/* harmony import */ var escape_string_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/escape-string-regexp/index.js");
/* harmony import */ var escape_string_regexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(escape_string_regexp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/query-string/index.js");
/* harmony import */ var _checkLegacyPathConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/checkLegacyPathConfig.js");




/**
 * Utility to parse a path string to initial state object accepted by the container.
 * This is useful for deep linking when we need to handle the incoming URL.
 *
 * @example
 * ```js
 * getStateFromPath(
 *   '/chat/jane/42',
 *   {
 *     screens: {
 *       Chat: {
 *         path: 'chat/:author/:id',
 *         parse: { id: Number }
 *       }
 *     }
 *   }
 * )
 * ```
 * @param path Path string to parse and convert, e.g. /foo/bar?count=42.
 * @param options Extra options to fine-tune how to parse the path.
 */
function getStateFromPath(path, options) {
  const [legacy, compatOptions] = (0,_checkLegacyPathConfig__WEBPACK_IMPORTED_MODULE_2__["default"])(options);
  let initialRoutes = [];

  if (compatOptions !== null && compatOptions !== void 0 && compatOptions.initialRouteName) {
    initialRoutes.push({
      initialRouteName: compatOptions.initialRouteName,
      parentScreens: []
    });
  }

  const screens = compatOptions === null || compatOptions === void 0 ? void 0 : compatOptions.screens;
  let remaining = path.replace(/\/+/g, '/') // Replace multiple slash (//) with single ones
  .replace(/^\//, '') // Remove extra leading slash
  .replace(/\?.*$/, ''); // Remove query params which we will handle later
  // Make sure there is a trailing slash

  remaining = remaining.endsWith('/') ? remaining : "".concat(remaining, "/");

  if (screens === undefined) {
    // When no config is specified, use the path segments as route names
    const routes = remaining.split('/').filter(Boolean).map((segment, i, self) => {
      const name = decodeURIComponent(segment);

      if (i === self.length - 1) {
        return {
          name,
          params: parseQueryParams(path)
        };
      }

      return {
        name
      };
    });

    if (routes.length) {
      return createNestedStateObject(routes, initialRoutes);
    }

    return undefined;
  } // Create a normalized configs array which will be easier to use


  const configs = [].concat(...Object.keys(screens).map(key => createNormalizedConfigs(legacy, key, screens, [], initialRoutes, []))).sort((a, b) => {
    // Sort config so that:
    // - the most exhaustive ones are always at the beginning
    // - patterns with wildcard are always at the end
    // If 2 patterns are same, move the one with less route names up
    // This is an error state, so it's only useful for consistent error messages
    if (a.pattern === b.pattern) {
      return b.routeNames.join('>').localeCompare(a.routeNames.join('>'));
    } // If one of the patterns starts with the other, it's more exhaustive
    // So move it up


    if (a.pattern.startsWith(b.pattern)) {
      return -1;
    }

    if (b.pattern.startsWith(a.pattern)) {
      return 1;
    }

    const aParts = a.pattern.split('/');
    const bParts = b.pattern.split('/');
    const aWildcardIndex = aParts.indexOf('*');
    const bWildcardIndex = bParts.indexOf('*'); // If only one of the patterns has a wildcard, move it down in the list

    if (aWildcardIndex === -1 && bWildcardIndex !== -1) {
      return -1;
    }

    if (aWildcardIndex !== -1 && bWildcardIndex === -1) {
      return 1;
    }

    if (aWildcardIndex === bWildcardIndex) {
      // If `b` has more `/`, it's more exhaustive
      // So we move it up in the list
      return bParts.length - aParts.length;
    } // If the wildcard appears later in the pattern (has higher index), it's more specific
    // So we move it up in the list


    return bWildcardIndex - aWildcardIndex;
  }); // Check for duplicate patterns in the config

  configs.reduce((acc, config) => {
    if (acc[config.pattern]) {
      const a = acc[config.pattern].routeNames;
      const b = config.routeNames; // It's not a problem if the path string omitted from a inner most screen
      // For example, it's ok if a path resolves to `A > B > C` or `A > B`

      const intersects = a.length > b.length ? b.every((it, i) => a[i] === it) : a.every((it, i) => b[i] === it);

      if (!intersects) {
        throw new Error("Found conflicting screens with the same pattern. The pattern '".concat(config.pattern, "' resolves to both '").concat(a.join(' > '), "' and '").concat(b.join(' > '), "'. Patterns must be unique and cannot resolve to more than one screen."));
      }
    }

    return Object.assign(acc, {
      [config.pattern]: config
    });
  }, {});

  if (remaining === '/') {
    // We need to add special handling of empty path so navigation to empty path also works
    // When handling empty path, we should only look at the root level config
    const match = configs.find(config => config.path === '' && config.routeNames.every( // Make sure that none of the parent configs have a non-empty path defined
    name => {
      var _configs$find;

      return !((_configs$find = configs.find(c => c.screen === name)) !== null && _configs$find !== void 0 && _configs$find.path);
    }));

    if (match) {
      return createNestedStateObject(match.routeNames.map((name, i, self) => {
        if (i === self.length - 1) {
          return {
            name,
            params: parseQueryParams(path, match.parse)
          };
        }

        return {
          name
        };
      }), initialRoutes);
    }

    return undefined;
  }

  let result;
  let current;

  if (legacy === false) {
    // If we're not in legacy mode,, we match the whole path against the regex instead of segments
    // This makes sure matches such as wildcard will catch any unmatched routes, even if nested
    const {
      routes,
      remainingPath
    } = matchAgainstConfigs(remaining, configs.map(c => ({ ...c,
      // Add `$` to the regex to make sure it matches till end of the path and not just beginning
      regex: c.regex ? new RegExp(c.regex.source + '$') : undefined
    })));

    if (routes !== undefined) {
      // This will always be empty if full path matched
      current = createNestedStateObject(routes, initialRoutes);
      remaining = remainingPath;
      result = current;
    }
  } else {
    // In legacy mode, we divide the path into segments and match piece by piece
    // This preserves the legacy behaviour, but we should remove it in next major
    while (remaining) {
      let {
        routes,
        remainingPath
      } = matchAgainstConfigs(remaining, configs);
      remaining = remainingPath; // If we hadn't matched any segments earlier, use the path as route name

      if (routes === undefined) {
        const segments = remaining.split('/');
        routes = [{
          name: decodeURIComponent(segments[0])
        }];
        segments.shift();
        remaining = segments.join('/');
      }

      const state = createNestedStateObject(routes, initialRoutes);

      if (current) {
        var _current2;

        // The state should be nested inside the deepest route we parsed before
        while ((_current = current) !== null && _current !== void 0 && _current.routes[current.index || 0].state) {
          var _current;

          current = current.routes[current.index || 0].state;
        }

        current.routes[((_current2 = current) === null || _current2 === void 0 ? void 0 : _current2.index) || 0].state = state;
      } else {
        result = state;
      }

      current = state;
    }
  }

  if (current == null || result == null) {
    return undefined;
  }

  const route = findFocusedRoute(current);
  const params = parseQueryParams(path, findParseConfigForRoute(route.name, configs));

  if (params) {
    // @ts-expect-error: params should be treated as read-only, but we're creating the state here so it doesn't matter
    route.params = { ...route.params,
      ...params
    };
  }

  return result;
}

const joinPaths = (...paths) => [].concat(...paths.map(p => p.split('/'))).filter(Boolean).join('/');

const matchAgainstConfigs = (remaining, configs) => {
  let routes;
  let remainingPath = remaining; // Go through all configs, and see if the next path segment matches our regex

  for (const config of configs) {
    if (!config.regex) {
      continue;
    }

    const match = remainingPath.match(config.regex); // If our regex matches, we need to extract params from the path

    if (match) {
      var _config$pattern;

      const matchedParams = (_config$pattern = config.pattern) === null || _config$pattern === void 0 ? void 0 : _config$pattern.split('/').filter(p => p.startsWith(':')).reduce((acc, p, i) => Object.assign(acc, {
        // The param segments appear every second item starting from 2 in the regex match result
        [p]: match[(i + 1) * 2].replace(/\//, '')
      }), {});
      routes = config.routeNames.map(name => {
        var _config$path;

        const config = configs.find(c => c.screen === name);
        const params = config === null || config === void 0 ? void 0 : (_config$path = config.path) === null || _config$path === void 0 ? void 0 : _config$path.split('/').filter(p => p.startsWith(':')).reduce((acc, p) => {
          const value = matchedParams[p];

          if (value) {
            var _config$parse;

            const key = p.replace(/^:/, '').replace(/\?$/, '');
            acc[key] = (_config$parse = config.parse) !== null && _config$parse !== void 0 && _config$parse[key] ? config.parse[key](value) : value;
          }

          return acc;
        }, {});

        if (params && Object.keys(params).length) {
          return {
            name,
            params
          };
        }

        return {
          name
        };
      });
      remainingPath = remainingPath.replace(match[1], '');
      break;
    }
  }

  return {
    routes,
    remainingPath
  };
};

const createNormalizedConfigs = (legacy, screen, routeConfig, routeNames = [], initials, parentScreens, parentPattern) => {
  const configs = [];
  routeNames.push(screen);
  parentScreens.push(screen);
  const config = routeConfig[screen];

  if (typeof config === 'string') {
    // If a string is specified as the value of the key(e.g. Foo: '/path'), use it as the pattern
    const pattern = parentPattern ? joinPaths(parentPattern, config) : config;
    configs.push(createConfigItem(legacy, screen, routeNames, pattern, config));
  } else if (typeof config === 'object') {
    let pattern; // if an object is specified as the value (e.g. Foo: { ... }),
    // it can have `path` property and
    // it could have `screens` prop which has nested configs

    if (typeof config.path === 'string') {
      if (legacy) {
        pattern = config.exact !== true && parentPattern ? joinPaths(parentPattern, config.path) : config.path;
      } else {
        if (config.exact && config.path === undefined) {
          throw new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
        }

        pattern = config.exact !== true ? joinPaths(parentPattern || '', config.path || '') : config.path || '';
      }

      configs.push(createConfigItem(legacy, screen, routeNames, pattern, config.path, config.parse));
    }

    if (config.screens) {
      // property `initialRouteName` without `screens` has no purpose
      if (config.initialRouteName) {
        initials.push({
          initialRouteName: config.initialRouteName,
          parentScreens
        });
      }

      Object.keys(config.screens).forEach(nestedConfig => {
        var _pattern;

        const result = createNormalizedConfigs(legacy, nestedConfig, config.screens, routeNames, initials, [...parentScreens], (_pattern = pattern) !== null && _pattern !== void 0 ? _pattern : parentPattern);
        configs.push(...result);
      });
    }
  }

  routeNames.pop();
  return configs;
};

const createConfigItem = (legacy, screen, routeNames, pattern, path, parse) => {
  // Normalize pattern to remove any leading, trailing slashes, duplicate slashes etc.
  pattern = pattern.split('/').filter(Boolean).join('/');
  const regex = pattern ? new RegExp("^(".concat(pattern.split('/').map(it => {
    if (legacy && it === '*') {
      throw new Error("Please update your config to the new format to use wildcard pattern ('*'). https://reactnavigation.org/docs/5.x/configuring-links/#updating-config");
    }

    if (it.startsWith(':')) {
      return "(([^/]+\\/)".concat(it.endsWith('?') ? '?' : '', ")");
    }

    return "".concat(it === '*' ? '.*' : escape_string_regexp__WEBPACK_IMPORTED_MODULE_0___default()(it), "\\/");
  }).join(''), ")")) : undefined;
  return {
    screen,
    regex,
    pattern,
    path,
    // The routeNames array is mutated, so copy it to keep the current state
    routeNames: [...routeNames],
    parse
  };
};

const findParseConfigForRoute = (routeName, flatConfig) => {
  for (const config of flatConfig) {
    if (routeName === config.routeNames[config.routeNames.length - 1]) {
      return config.parse;
    }
  }

  return undefined;
}; // Try to find an initial route connected with the one passed


const findInitialRoute = (routeName, parentScreens, initialRoutes) => {
  for (const config of initialRoutes) {
    if (parentScreens.length === config.parentScreens.length) {
      let sameParents = true;

      for (let i = 0; i < parentScreens.length; i++) {
        if (parentScreens[i].localeCompare(config.parentScreens[i]) !== 0) {
          sameParents = false;
          break;
        }
      }

      if (sameParents) {
        return routeName !== config.initialRouteName ? config.initialRouteName : undefined;
      }
    }
  }

  return undefined;
}; // returns state object with values depending on whether
// it is the end of state and if there is initialRoute for this level


const createStateObject = (initialRoute, route, isEmpty) => {
  if (isEmpty) {
    if (initialRoute) {
      return {
        index: 1,
        routes: [{
          name: initialRoute
        }, route]
      };
    } else {
      return {
        routes: [route]
      };
    }
  } else {
    if (initialRoute) {
      return {
        index: 1,
        routes: [{
          name: initialRoute
        }, { ...route,
          state: {
            routes: []
          }
        }]
      };
    } else {
      return {
        routes: [{ ...route,
          state: {
            routes: []
          }
        }]
      };
    }
  }
};

const createNestedStateObject = (routes, initialRoutes) => {
  let state;
  let route = routes.shift();
  const parentScreens = [];
  let initialRoute = findInitialRoute(route.name, parentScreens, initialRoutes);
  parentScreens.push(route.name);
  state = createStateObject(initialRoute, route, routes.length === 0);

  if (routes.length > 0) {
    let nestedState = state;

    while (route = routes.shift()) {
      initialRoute = findInitialRoute(route.name, parentScreens, initialRoutes);
      const nestedStateIndex = nestedState.index || nestedState.routes.length - 1;
      nestedState.routes[nestedStateIndex].state = createStateObject(initialRoute, route, routes.length === 0);

      if (routes.length > 0) {
        nestedState = nestedState.routes[nestedStateIndex].state;
      }

      parentScreens.push(route.name);
    }
  }

  return state;
};

const findFocusedRoute = state => {
  var _current4;

  let current = state;

  while ((_current3 = current) !== null && _current3 !== void 0 && _current3.routes[current.index || 0].state) {
    var _current3;

    // The query params apply to the deepest route
    current = current.routes[current.index || 0].state;
  }

  const route = current.routes[((_current4 = current) === null || _current4 === void 0 ? void 0 : _current4.index) || 0];
  return route;
};

const parseQueryParams = (path, parseConfig) => {
  const query = path.split('?')[1];
  const params = query_string__WEBPACK_IMPORTED_MODULE_1__.parse(query);

  if (parseConfig) {
    Object.keys(params).forEach(name => {
      if (parseConfig[name] && typeof params[name] === 'string') {
        params[name] = parseConfig[name](params[name]);
      }
    });
  }

  return Object.keys(params).length ? params : undefined;
};
//# sourceMappingURL=getStateFromPath.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseNavigationContainer: () => (/* reexport safe */ _BaseNavigationContainer__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   CurrentRenderContext: () => (/* reexport safe */ _CurrentRenderContext__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   NavigationContext: () => (/* reexport safe */ _NavigationContext__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   NavigationHelpersContext: () => (/* reexport safe */ _NavigationHelpersContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   NavigationRouteContext: () => (/* reexport safe */ _NavigationRouteContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   PrivateValueStore: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_17__.PrivateValueStore),
/* harmony export */   createNavigatorFactory: () => (/* reexport safe */ _createNavigatorFactory__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   getActionFromState: () => (/* reexport safe */ _getActionFromState__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   getFocusedRouteNameFromRoute: () => (/* reexport safe */ _getFocusedRouteNameFromRoute__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   getPathFromState: () => (/* reexport safe */ _getPathFromState__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   getStateFromPath: () => (/* reexport safe */ _getStateFromPath__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   useFocusEffect: () => (/* reexport safe */ _useFocusEffect__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   useIsFocused: () => (/* reexport safe */ _useIsFocused__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   useNavigation: () => (/* reexport safe */ _useNavigation__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   useNavigationBuilder: () => (/* reexport safe */ _useNavigationBuilder__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   useNavigationState: () => (/* reexport safe */ _useNavigationState__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   useRoute: () => (/* reexport safe */ _useRoute__WEBPACK_IMPORTED_MODULE_9__["default"])
/* harmony export */ });
/* harmony import */ var _react_navigation_routers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@react-navigation/routers/lib/module/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _react_navigation_routers__WEBPACK_IMPORTED_MODULE_0__) if(["default","BaseNavigationContainer","createNavigatorFactory","NavigationHelpersContext","NavigationContext","NavigationRouteContext","CurrentRenderContext","useNavigationBuilder","useNavigation","useRoute","useFocusEffect","useIsFocused","useNavigationState","getStateFromPath","getPathFromState","getActionFromState","getFocusedRouteNameFromRoute"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _react_navigation_routers__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _BaseNavigationContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/BaseNavigationContainer.js");
/* harmony import */ var _createNavigatorFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/createNavigatorFactory.js");
/* harmony import */ var _NavigationHelpersContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationHelpersContext.js");
/* harmony import */ var _NavigationContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationContext.js");
/* harmony import */ var _NavigationRouteContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationRouteContext.js");
/* harmony import */ var _CurrentRenderContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/CurrentRenderContext.js");
/* harmony import */ var _useNavigationBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useNavigationBuilder.js");
/* harmony import */ var _useNavigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useNavigation.js");
/* harmony import */ var _useRoute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useRoute.js");
/* harmony import */ var _useFocusEffect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useFocusEffect.js");
/* harmony import */ var _useIsFocused__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useIsFocused.js");
/* harmony import */ var _useNavigationState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useNavigationState.js");
/* harmony import */ var _getStateFromPath__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/getStateFromPath.js");
/* harmony import */ var _getPathFromState__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/getPathFromState.js");
/* harmony import */ var _getActionFromState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/getActionFromState.js");
/* harmony import */ var _getFocusedRouteNameFromRoute__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/getFocusedRouteNameFromRoute.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/types.js");


















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/isArrayEqual.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isArrayEqual)
/* harmony export */ });
/**
 * Compare two arrays with primitive values as the content.
 * We need to make sure that both values and order match.
 */
function isArrayEqual(a, b) {
  return a.length === b.length && a.every((it, index) => it === b[index]);
}
//# sourceMappingURL=isArrayEqual.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/types.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrivateValueStore: () => (/* binding */ PrivateValueStore)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PrivateValueStore {
  constructor() {
    _defineProperty(this, '', void 0);
  }

}
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useChildListeners.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useChildListeners)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Hook which lets child navigators add action listeners.
 */
function useChildListeners() {
  const {
    current: listeners
  } = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
    action: [],
    focus: []
  });
  const addListener = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((type, listener) => {
    // @ts-expect-error: listener should be correct type according to `type`
    listeners[type].push(listener);
    return () => {
      // @ts-expect-error: listener should be correct type according to `type`
      const index = listeners[type].indexOf(listener);
      listeners[type].splice(index, 1);
    };
  }, [listeners]);
  return {
    listeners,
    addListener
  };
}
//# sourceMappingURL=useChildListeners.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useComponent.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function useComponent(Component, props) {
  const propsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(props); // Normally refs shouldn't be mutated in render
  // But we return a component which will be rendered
  // So it's just for immediate consumption

  propsRef.current = props;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    propsRef.current = null;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useRef(rest => {
    const props = propsRef.current;

    if (props === null) {
      throw new Error('The returned component must be rendered in the same render phase as the hook.');
    } // @ts-expect-error: the props should be fine here


    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _extends({}, props, rest));
  }).current;
}
//# sourceMappingURL=useComponent.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useCurrentRender.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useCurrentRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CurrentRenderContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/CurrentRenderContext.js");



/**
 * Write the current options, so that server renderer can get current values
 * Mutating values like this is not safe in async mode, but it doesn't apply to SSR
 */
function useCurrentRender({
  state,
  navigation,
  descriptors
}) {
  const current = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_CurrentRenderContext__WEBPACK_IMPORTED_MODULE_1__["default"]);

  if (current && navigation.isFocused()) {
    current.options = descriptors[state.routes[state.index].key].options;
  }
}
//# sourceMappingURL=useCurrentRender.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useDescriptors.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useDescriptors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SceneView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/SceneView.js");
/* harmony import */ var _NavigationBuilderContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationBuilderContext.js");
/* harmony import */ var _useNavigationCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useNavigationCache.js");
/* harmony import */ var _useRouteCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useRouteCache.js");
/* harmony import */ var _NavigationContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationContext.js");
/* harmony import */ var _NavigationRouteContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationRouteContext.js");








/**
 * Hook to create descriptor objects for the child routes.
 *
 * A descriptor object provides 3 things:
 * - Helper method to render a screen
 * - Options specified by the screen for the navigator
 * - Navigation object intended for the route
 */
function useDescriptors({
  state,
  screens,
  navigation,
  screenOptions,
  defaultScreenOptions,
  onAction,
  getState,
  setState,
  addListener,
  addKeyedListener,
  onRouteFocus,
  router,
  emitter
}) {
  const [options, setOptions] = react__WEBPACK_IMPORTED_MODULE_0__.useState({});
  const {
    onDispatchAction,
    onOptionsChange
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_NavigationBuilderContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    navigation,
    onAction,
    addListener,
    addKeyedListener,
    onRouteFocus,
    onDispatchAction,
    onOptionsChange
  }), [navigation, onAction, addListener, addKeyedListener, onRouteFocus, onDispatchAction, onOptionsChange]);
  const navigations = (0,_useNavigationCache__WEBPACK_IMPORTED_MODULE_3__["default"])({
    state,
    getState,
    navigation,
    setOptions,
    router,
    emitter
  });
  const routes = (0,_useRouteCache__WEBPACK_IMPORTED_MODULE_4__["default"])(state.routes);
  return routes.reduce((acc, route, i) => {
    const screen = screens[route.name];
    const navigation = navigations[route.key];
    const routeOptions = { // The default `screenOptions` passed to the navigator
      ...(typeof screenOptions === 'object' || screenOptions == null ? screenOptions : // @ts-expect-error: this is a function, but typescript doesn't think so
      screenOptions({
        route,
        navigation
      })),
      // The `options` prop passed to `Screen` elements
      ...(typeof screen.options === 'object' || screen.options == null ? screen.options : // @ts-expect-error: this is a function, but typescript doesn't think so
      screen.options({
        route,
        navigation
      })),
      // The options set via `navigation.setOptions`
      ...options[route.key]
    };
    const mergedOptions = { ...(typeof defaultScreenOptions === 'function' ? // @ts-expect-error: ts gives incorrect error here
      defaultScreenOptions({
        route,
        navigation,
        options: routeOptions
      }) : defaultScreenOptions),
      ...routeOptions
    };

    const clearOptions = () => setOptions(o => {
      if (route.key in o) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {
          [route.key]: _,
          ...rest
        } = o;
        return rest;
      }

      return o;
    });

    acc[route.key] = {
      navigation,

      render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationBuilderContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
          key: route.key,
          value: context
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
          value: navigation
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationRouteContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
          value: route
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SceneView__WEBPACK_IMPORTED_MODULE_1__["default"], {
          navigation: navigation,
          route: route,
          screen: screen,
          routeState: state.routes[i].state,
          getState: getState,
          setState: setState,
          options: mergedOptions,
          clearOptions: clearOptions
        }))));
      },

      options: mergedOptions
    };
    return acc;
  }, {});
}
//# sourceMappingURL=useDescriptors.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useEventEmitter.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEventEmitter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Hook to manage the event system used by the navigator to notify screens of various events.
 */
function useEventEmitter(listen) {
  const listenRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(listen);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    listenRef.current = listen;
  });
  const listeners = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  const create = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(target => {
    const removeListener = (type, callback) => {
      const callbacks = listeners.current[type] ? listeners.current[type][target] : undefined;

      if (!callbacks) {
        return;
      }

      const index = callbacks.indexOf(callback);
      callbacks.splice(index, 1);
    };

    const addListener = (type, callback) => {
      listeners.current[type] = listeners.current[type] || {};
      listeners.current[type][target] = listeners.current[type][target] || [];
      listeners.current[type][target].push(callback);
      return () => removeListener(type, callback);
    };

    return {
      addListener,
      removeListener
    };
  }, []);
  const emit = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(({
    type,
    data,
    target,
    canPreventDefault
  }) => {
    var _items$target, _listenRef$current;

    const items = listeners.current[type] || {}; // Copy the current list of callbacks in case they are mutated during execution

    const callbacks = target !== undefined ? (_items$target = items[target]) === null || _items$target === void 0 ? void 0 : _items$target.slice() : [].concat(...Object.keys(items).map(t => items[t])).filter((cb, i, self) => self.lastIndexOf(cb) === i);
    const event = {
      get type() {
        return type;
      }

    };

    if (target !== undefined) {
      Object.defineProperty(event, 'target', {
        enumerable: true,

        get() {
          return target;
        }

      });
    }

    if (data !== undefined) {
      Object.defineProperty(event, 'data', {
        enumerable: true,

        get() {
          return data;
        }

      });
    }

    if (canPreventDefault) {
      let defaultPrevented = false;
      Object.defineProperties(event, {
        defaultPrevented: {
          enumerable: true,

          get() {
            return defaultPrevented;
          }

        },
        preventDefault: {
          enumerable: true,

          value() {
            defaultPrevented = true;
          }

        }
      });
    }

    (_listenRef$current = listenRef.current) === null || _listenRef$current === void 0 ? void 0 : _listenRef$current.call(listenRef, event);
    callbacks === null || callbacks === void 0 ? void 0 : callbacks.forEach(cb => cb(event));
    return event;
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    create,
    emit
  }), [create, emit]);
}
//# sourceMappingURL=useEventEmitter.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useFocusEffect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useFocusEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useNavigation.js");



/**
 * Hook to run an effect in a focused screen, similar to `React.useEffect`.
 * This can be used to perform side-effects such as fetching data or subscribing to events.
 * The passed callback should be wrapped in `React.useCallback` to avoid running the effect too often.
 *
 * @param callback Memoized callback containing the effect, should optionally return a cleanup function.
 */
function useFocusEffect(effect) {
  const navigation = (0,_useNavigation__WEBPACK_IMPORTED_MODULE_1__["default"])();

  if (arguments[1] !== undefined) {
    const message = "You passed a second argument to 'useFocusEffect', but it only accepts one argument. " + "If you want to pass a dependency array, you can use 'React.useCallback':\n\n" + 'useFocusEffect(\n' + '  React.useCallback(() => {\n' + '    // Your code here\n' + '  }, [depA, depB])\n' + ');\n\n' + 'See usage guide: https://reactnavigation.org/docs/5.x/use-focus-effect';
    console.error(message);
  }

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let isFocused = false;
    let cleanup;

    const callback = () => {
      const destroy = effect();

      if (destroy === undefined || typeof destroy === 'function') {
        return destroy;
      }

      if (true) {
        let message = 'An effect function must not return anything besides a function, which is used for clean-up.';

        if (destroy === null) {
          message += " You returned 'null'. If your effect does not require clean-up, return 'undefined' (or nothing).";
        } else if (typeof destroy.then === 'function') {
          message += "\n\nIt looks like you wrote 'useFocusEffect(async () => ...)' or returned a Promise. " + 'Instead, write the async function inside your effect ' + 'and call it immediately:\n\n' + 'useFocusEffect(\n' + '  React.useCallback() => {\n' + '    async function fetchData() {\n' + '      // You can await here\n' + '      const response = await MyAPI.getData(someId);\n' + '      // ...\n' + '    }\n\n' + '    fetchData();\n' + '  }, [someId])\n' + ');\n\n' + 'See usage guide: https://reactnavigation.org/docs/5.x/use-focus-effect';
        } else {
          message += " You returned '".concat(JSON.stringify(destroy), "'.");
        }

        console.error(message);
      }
    }; // We need to run the effect on intial render/dep changes if the screen is focused


    if (navigation.isFocused()) {
      cleanup = callback();
      isFocused = true;
    }

    const unsubscribeFocus = navigation.addListener('focus', () => {
      // If callback was already called for focus, avoid calling it again
      // The focus event may also fire on intial render, so we guard against runing the effect twice
      if (isFocused) {
        return;
      }

      if (cleanup !== undefined) {
        cleanup();
      }

      cleanup = callback();
      isFocused = true;
    });
    const unsubscribeBlur = navigation.addListener('blur', () => {
      if (cleanup !== undefined) {
        cleanup();
      }

      cleanup = undefined;
      isFocused = false;
    });
    return () => {
      if (cleanup !== undefined) {
        cleanup();
      }

      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [effect, navigation]);
}
//# sourceMappingURL=useFocusEffect.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useFocusEvents.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useFocusEvents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationContext.js");



/**
 * Hook to take care of emitting `focus` and `blur` events.
 */
function useFocusEvents({
  state,
  emitter
}) {
  const navigation = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_NavigationContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const lastFocusedKeyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const currentFocusedKey = state.routes[state.index].key; // When the parent screen changes its focus state, we also need to change child's focus
  // Coz the child screen can't be focused if the parent screen is out of focus

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => navigation === null || navigation === void 0 ? void 0 : navigation.addListener('focus', () => {
    lastFocusedKeyRef.current = currentFocusedKey;
    emitter.emit({
      type: 'focus',
      target: currentFocusedKey
    });
  }), [currentFocusedKey, emitter, navigation]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => navigation === null || navigation === void 0 ? void 0 : navigation.addListener('blur', () => {
    lastFocusedKeyRef.current = undefined;
    emitter.emit({
      type: 'blur',
      target: currentFocusedKey
    });
  }), [currentFocusedKey, emitter, navigation]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const lastFocusedKey = lastFocusedKeyRef.current;
    lastFocusedKeyRef.current = currentFocusedKey; // We wouldn't have `lastFocusedKey` on initial mount
    // Fire focus event for the current route on mount if there's no parent navigator

    if (lastFocusedKey === undefined && !navigation) {
      emitter.emit({
        type: 'focus',
        target: currentFocusedKey
      });
    } // We should only emit events when the focused key changed and navigator is focused
    // When navigator is not focused, screens inside shouldn't receive focused status either


    if (lastFocusedKey === currentFocusedKey || !(navigation ? navigation.isFocused() : true)) {
      return;
    }

    if (lastFocusedKey === undefined) {
      // Only fire events after initial mount
      return;
    }

    emitter.emit({
      type: 'blur',
      target: lastFocusedKey
    });
    emitter.emit({
      type: 'focus',
      target: currentFocusedKey
    });
  }, [currentFocusedKey, emitter, navigation]);
}
//# sourceMappingURL=useFocusEvents.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useFocusedListenersChildrenAdapter.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useFocusedListenersChildrenAdapter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationBuilderContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationBuilderContext.js");



/**
 * Hook for passing focus callback to children
 */
function useFocusedListenersChildrenAdapter({
  navigation,
  focusedListeners
}) {
  const {
    addListener
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_NavigationBuilderContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const listener = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(callback => {
    if (navigation.isFocused()) {
      for (const listener of focusedListeners) {
        const {
          handled,
          result
        } = listener(callback);

        if (handled) {
          return {
            handled,
            result
          };
        }
      }

      return {
        handled: true,
        result: callback(navigation)
      };
    } else {
      return {
        handled: false,
        result: null
      };
    }
  }, [focusedListeners, navigation]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => addListener === null || addListener === void 0 ? void 0 : addListener('focus', listener), [addListener, listener]);
}
//# sourceMappingURL=useFocusedListenersChildrenAdapter.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useIsFocused.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useIsFocused)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useNavigation.js");



/**
 * Hook to get the current focus state of the screen. Returns a `true` if screen is focused, otherwise `false`.
 * This can be used if a component needs to render something based on the focus state.
 */

function useIsFocused() {
  const navigation = (0,_useNavigation__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(navigation.isFocused);
  const valueToReturn = navigation.isFocused();

  if (isFocused !== valueToReturn) {
    // If the value has changed since the last render, we need to update it.
    // This could happen if we missed an update from the event listeners during re-render.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    // This is the same logic as in https://github.com/facebook/react/tree/master/packages/use-subscription
    setIsFocused(valueToReturn);
  }

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => setIsFocused(true));
    const unsubscribeBlur = navigation.addListener('blur', () => setIsFocused(false));
    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [navigation]);
  react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue(valueToReturn);
  return valueToReturn;
}
//# sourceMappingURL=useIsFocused.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useKeyedChildListeners.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useKeyedChildListeners)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Hook which lets child navigators add getters to be called for obtaining rehydrated state.
 */
function useKeyedChildListeners() {
  const {
    current: keyedListeners
  } = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
    getState: {},
    beforeRemove: {}
  });
  const addKeyedListener = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((type, key, listener) => {
    // @ts-expect-error: listener should be correct type according to `type`
    keyedListeners[type][key] = listener;
    return () => {
      // @ts-expect-error: listener should be correct type according to `type`
      keyedListeners[type][key] = undefined;
    };
  }, [keyedListeners]);
  return {
    keyedListeners,
    addKeyedListener
  };
}
//# sourceMappingURL=useKeyedChildListeners.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useNavigation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNavigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationContext.js");



/**
 * Hook to access the navigation prop of the parent screen anywhere.
 *
 * @returns Navigation prop of the parent screen.
 */
function useNavigation() {
  const navigation = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_NavigationContext__WEBPACK_IMPORTED_MODULE_1__["default"]);

  if (navigation === undefined) {
    throw new Error("Couldn't find a navigation object. Is your component inside a screen in a navigator?");
  }

  return navigation;
}
//# sourceMappingURL=useNavigation.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useNavigationBuilder.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNavigationBuilder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-is/index.js");
/* harmony import */ var _react_navigation_routers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./node_modules/@react-navigation/routers/lib/module/CommonActions.js");
/* harmony import */ var _NavigationStateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationStateContext.js");
/* harmony import */ var _NavigationRouteContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationRouteContext.js");
/* harmony import */ var _NavigationHelpersContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationHelpersContext.js");
/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/Screen.js");
/* harmony import */ var _useComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useComponent.js");
/* harmony import */ var _useEventEmitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useEventEmitter.js");
/* harmony import */ var _useRegisterNavigator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useRegisterNavigator.js");
/* harmony import */ var _useDescriptors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useDescriptors.js");
/* harmony import */ var _useNavigationHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useNavigationHelpers.js");
/* harmony import */ var _useOnAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useOnAction.js");
/* harmony import */ var _useFocusEvents__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useFocusEvents.js");
/* harmony import */ var _useOnRouteFocus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useOnRouteFocus.js");
/* harmony import */ var _useChildListeners__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useChildListeners.js");
/* harmony import */ var _useFocusedListenersChildrenAdapter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useFocusedListenersChildrenAdapter.js");
/* harmony import */ var _useKeyedChildListeners__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useKeyedChildListeners.js");
/* harmony import */ var _useOnGetState__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useOnGetState.js");
/* harmony import */ var _useScheduleUpdate__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useScheduleUpdate.js");
/* harmony import */ var _useCurrentRender__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useCurrentRender.js");
/* harmony import */ var _isArrayEqual__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/isArrayEqual.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/types.js");






















 // This is to make TypeScript compiler happy
// eslint-disable-next-line babel/no-unused-expressions

_types__WEBPACK_IMPORTED_MODULE_21__.PrivateValueStore;

/**
 * Extract route config object from React children elements.
 *
 * @param children React Elements to extract the config from.
 */
const getRouteConfigsFromChildren = children => {
  const configs = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).reduce((acc, child) => {
    var _child$type, _child$props;

    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)) {
      if (child.type === _Screen__WEBPACK_IMPORTED_MODULE_5__["default"]) {
        // We can only extract the config from `Screen` elements
        // If something else was rendered, it's probably a bug
        acc.push(child.props);
        return acc;
      }

      if (child.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
        // When we encounter a fragment, we need to dive into its children to extract the configs
        // This is handy to conditionally define a group of screens
        acc.push(...getRouteConfigsFromChildren(child.props.children));
        return acc;
      }
    }

    throw new Error("A navigator can only contain 'Screen' components as its direct children (found ".concat( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) ? "'".concat(typeof child.type === 'string' ? child.type : (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.name, "'").concat((_child$props = child.props) !== null && _child$props !== void 0 && _child$props.name ? " for the screen '".concat(child.props.name, "'") : '') : typeof child === 'object' ? JSON.stringify(child) : "'".concat(String(child), "'"), "). To render this component in the navigator, pass it in the 'component' prop to 'Screen'."));
  }, []);

  if (true) {
    configs.forEach(config => {
      const {
        name,
        children,
        component,
        getComponent
      } = config;

      if (typeof name !== 'string' || !name) {
        throw new Error("Got an invalid name (".concat(JSON.stringify(name), ") for the screen. It must be a non-empty string."));
      }

      if (children != null || component !== undefined || getComponent !== undefined) {
        if (children != null && component !== undefined) {
          throw new Error("Got both 'component' and 'children' props for the screen '".concat(name, "'. You must pass only one of them."));
        }

        if (children != null && getComponent !== undefined) {
          throw new Error("Got both 'getComponent' and 'children' props for the screen '".concat(name, "'. You must pass only one of them."));
        }

        if (component !== undefined && getComponent !== undefined) {
          throw new Error("Got both 'component' and 'getComponent' props for the screen '".concat(name, "'. You must pass only one of them."));
        }

        if (children != null && typeof children !== 'function') {
          throw new Error("Got an invalid value for 'children' prop for the screen '".concat(name, "'. It must be a function returning a React Element."));
        }

        if (component !== undefined && !(0,react_is__WEBPACK_IMPORTED_MODULE_1__.isValidElementType)(component)) {
          throw new Error("Got an invalid value for 'component' prop for the screen '".concat(name, "'. It must be a valid React Component."));
        }

        if (getComponent !== undefined && typeof getComponent !== 'function') {
          throw new Error("Got an invalid value for 'getComponent' prop for the screen '".concat(name, "'. It must be a function returning a React Component."));
        }

        if (typeof component === 'function' && component.name === 'component') {
          // Inline anonymous functions passed in the `component` prop will have the name of the prop
          // It's relatively safe to assume that it's not a component since it should also have PascalCase name
          // We won't catch all scenarios here, but this should catch a good chunk of incorrect use.
          console.warn("Looks like you're passing an inline function for 'component' prop for the screen '".concat(name, "' (e.g. component={() => <SomeComponent />}). Passing an inline function will cause the component state to be lost on re-render and cause perf issues since it's re-created every render. You can pass the function as children to 'Screen' instead to achieve the desired behaviour."));
        }
      } else {
        throw new Error("Couldn't find a 'component', 'getComponent' or 'children' prop for the screen '".concat(name, "'. This can happen if you passed 'undefined'. You likely forgot to export your component from the file it's defined in, or mixed up default import and named import when importing."));
      }
    });
  }

  return configs;
};
/**
 * Hook for building navigators.
 *
 * @param createRouter Factory method which returns router object.
 * @param options Options object containing `children` and additional options for the router.
 * @returns An object containing `state`, `navigation`, `descriptors` objects.
 */


function useNavigationBuilder(createRouter, options) {
  const navigatorKey = (0,_useRegisterNavigator__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_NavigationRouteContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const {
    children,
    ...rest
  } = options;
  const {
    current: router
  } = react__WEBPACK_IMPORTED_MODULE_0__.useRef(createRouter({ ...rest,
    ...(route !== null && route !== void 0 && route.params && route.params.state == null && route.params.initial !== false && typeof route.params.screen === 'string' ? {
      initialRouteName: route.params.screen
    } : null)
  }));
  const routeConfigs = getRouteConfigsFromChildren(children);
  const screens = routeConfigs.reduce((acc, config) => {
    if (config.name in acc) {
      throw new Error("A navigator cannot contain multiple 'Screen' components with the same name (found duplicate screen named '".concat(config.name, "')"));
    }

    acc[config.name] = config;
    return acc;
  }, {});
  const routeNames = routeConfigs.map(config => config.name);
  const routeParamList = routeNames.reduce((acc, curr) => {
    var _route$params, _route$params2, _route$params3;

    const {
      initialParams
    } = screens[curr];
    const initialParamsFromParams = (route === null || route === void 0 ? void 0 : (_route$params = route.params) === null || _route$params === void 0 ? void 0 : _route$params.state) == null && (route === null || route === void 0 ? void 0 : (_route$params2 = route.params) === null || _route$params2 === void 0 ? void 0 : _route$params2.initial) !== false && (route === null || route === void 0 ? void 0 : (_route$params3 = route.params) === null || _route$params3 === void 0 ? void 0 : _route$params3.screen) === curr ? route.params.params : undefined;
    acc[curr] = initialParams !== undefined || initialParamsFromParams !== undefined ? { ...initialParams,
      ...initialParamsFromParams
    } : undefined;
    return acc;
  }, {});
  const routeGetIdList = routeNames.reduce((acc, curr) => Object.assign(acc, {
    [curr]: screens[curr].getId
  }), {});

  if (!routeNames.length) {
    throw new Error("Couldn't find any screens for the navigator. Have you defined any screens as its children?");
  }

  const isStateValid = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(state => state.type === undefined || state.type === router.type, [router.type]);
  const isStateInitialized = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(state => state !== undefined && state.stale === false && isStateValid(state), [isStateValid]);
  const {
    state: currentState,
    getState: getCurrentState,
    setState,
    setKey,
    getKey,
    getIsInitial
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_NavigationStateContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const [initializedState, isFirstStateInitialization] = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    var _route$params4;

    // If the current state isn't initialized on first render, we initialize it
    // We also need to re-initialize it if the state passed from parent was changed (maybe due to reset)
    // Otherwise assume that the state was provided as initial state
    // So we need to rehydrate it to make it usable
    if ((currentState === undefined || !isStateValid(currentState)) && (route === null || route === void 0 ? void 0 : (_route$params4 = route.params) === null || _route$params4 === void 0 ? void 0 : _route$params4.state) == null) {
      return [router.getInitialState({
        routeNames,
        routeParamList,
        routeGetIdList
      }), true];
    } else {
      var _route$params$state, _route$params5;

      return [router.getRehydratedState((_route$params$state = route === null || route === void 0 ? void 0 : (_route$params5 = route.params) === null || _route$params5 === void 0 ? void 0 : _route$params5.state) !== null && _route$params$state !== void 0 ? _route$params$state : currentState, {
        routeNames,
        routeParamList,
        routeGetIdList
      }), false];
    } // We explicitly don't include routeNames/routeParamList in the dep list
    // below. We want to avoid forcing a new state to be calculated in cases
    // where routeConfigs change without affecting routeNames/routeParamList.
    // Instead, we handle changes to these in the nextState code below. Note
    // that some changes to routeConfigs are explicitly ignored, such as changes
    // to initialParams
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [currentState, router, isStateValid]);
  let state = // If the state isn't initialized, or stale, use the state we initialized instead
  // The state won't update until there's a change needed in the state we have initalized locally
  // So it'll be `undefined` or stale until the first navigation event happens
  isStateInitialized(currentState) ? currentState : initializedState;
  let nextState = state;

  if (!(0,_isArrayEqual__WEBPACK_IMPORTED_MODULE_20__["default"])(state.routeNames, routeNames)) {
    // When the list of route names change, the router should handle it to remove invalid routes
    nextState = router.getStateForRouteNamesChange(state, {
      routeNames,
      routeParamList,
      routeGetIdList
    });
  }

  const previousNestedParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(route === null || route === void 0 ? void 0 : route.params);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    previousNestedParamsRef.current = route === null || route === void 0 ? void 0 : route.params;
  }, [route === null || route === void 0 ? void 0 : route.params]);

  if (route !== null && route !== void 0 && route.params) {
    const previousParams = previousNestedParamsRef.current;
    let action;

    if (typeof route.params.state === 'object' && route.params.state != null && route.params.state !== (previousParams === null || previousParams === void 0 ? void 0 : previousParams.state)) {
      // If the route was updated with new state, we should reset to it
      action = _react_navigation_routers__WEBPACK_IMPORTED_MODULE_22__.reset(route.params.state);
    } else if (typeof route.params.screen === 'string' && (route.params.initial === false && isFirstStateInitialization || route.params !== previousParams)) {
      // FIXME: Since params are merged, `route.params.params` might contain params from an older route
      // If the route was updated with new screen name and/or params, we should navigate there
      action = _react_navigation_routers__WEBPACK_IMPORTED_MODULE_22__.navigate(route.params.screen, route.params.params);
    } // The update should be limited to current navigator only, so we call the router manually


    const updatedState = action ? router.getStateForAction(nextState, action, {
      routeNames,
      routeParamList,
      routeGetIdList
    }) : null;
    nextState = updatedState !== null ? router.getRehydratedState(updatedState, {
      routeNames,
      routeParamList,
      routeGetIdList
    }) : nextState;
  }

  const shouldUpdate = state !== nextState;
  (0,_useScheduleUpdate__WEBPACK_IMPORTED_MODULE_18__["default"])(() => {
    if (shouldUpdate) {
      // If the state needs to be updated, we'll schedule an update
      setState(nextState);
    }
  }); // The up-to-date state will come in next render, but we don't need to wait for it
  // We can't use the outdated state since the screens have changed, which will cause error due to mismatched config
  // So we override the state object we return to use the latest state as soon as possible

  state = nextState;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    setKey(navigatorKey);

    if (!getIsInitial()) {
      // If it's not initial render, we need to update the state
      // This will make sure that our container gets notifier of state changes due to new mounts
      // This is necessary for proper screen tracking, URL updates etc.
      setState(nextState);
    }

    return () => {
      // We need to clean up state for this navigator on unmount
      // We do it in a timeout because we need to detect if another navigator mounted in the meantime
      // For example, if another navigator has started rendering, we should skip cleanup
      // Otherwise, our cleanup step will cleanup state for the other navigator and re-initialize it
      setTimeout(() => {
        if (getCurrentState() !== undefined && getKey() === navigatorKey) {
          setState(undefined);
        }
      }, 0);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // We initialize this ref here to avoid a new getState getting initialized
  // whenever initializedState changes. We want getState to have access to the
  // latest initializedState, but don't need it to change when that happens

  const initializedStateRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  initializedStateRef.current = initializedState;
  const getState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    const currentState = getCurrentState();
    return isStateInitialized(currentState) ? currentState : initializedStateRef.current;
  }, [getCurrentState, isStateInitialized]);
  const emitter = (0,_useEventEmitter__WEBPACK_IMPORTED_MODULE_7__["default"])(e => {
    let routeNames = [];
    let route;

    if (e.target) {
      var _route;

      route = state.routes.find(route => route.key === e.target);

      if ((_route = route) !== null && _route !== void 0 && _route.name) {
        routeNames.push(route.name);
      }
    } else {
      route = state.routes[state.index];
      routeNames.push(...Object.keys(screens).filter(name => {
        var _route2;

        return ((_route2 = route) === null || _route2 === void 0 ? void 0 : _route2.name) === name;
      }));
    }

    if (route == null) {
      return;
    }

    const navigation = descriptors[route.key].navigation;
    const listeners = [].concat(...routeNames.map(name => {
      const {
        listeners
      } = screens[name];
      const map = typeof listeners === 'function' ? listeners({
        route: route,
        navigation
      }) : listeners;
      return map ? Object.keys(map).filter(type => type === e.type).map(type => map === null || map === void 0 ? void 0 : map[type]) : undefined;
    })).filter((cb, i, self) => cb && self.lastIndexOf(cb) === i);
    listeners.forEach(listener => listener === null || listener === void 0 ? void 0 : listener(e));
  });
  (0,_useFocusEvents__WEBPACK_IMPORTED_MODULE_12__["default"])({
    state,
    emitter
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    emitter.emit({
      type: 'state',
      data: {
        state
      }
    });
  }, [emitter, state]);
  const {
    listeners: childListeners,
    addListener
  } = (0,_useChildListeners__WEBPACK_IMPORTED_MODULE_14__["default"])();
  const {
    keyedListeners,
    addKeyedListener
  } = (0,_useKeyedChildListeners__WEBPACK_IMPORTED_MODULE_16__["default"])();
  const onAction = (0,_useOnAction__WEBPACK_IMPORTED_MODULE_11__["default"])({
    router,
    getState,
    setState,
    key: route === null || route === void 0 ? void 0 : route.key,
    actionListeners: childListeners.action,
    beforeRemoveListeners: keyedListeners.beforeRemove,
    routerConfigOptions: {
      routeNames,
      routeParamList,
      routeGetIdList
    },
    emitter
  });
  const onRouteFocus = (0,_useOnRouteFocus__WEBPACK_IMPORTED_MODULE_13__["default"])({
    router,
    key: route === null || route === void 0 ? void 0 : route.key,
    getState,
    setState
  });
  const navigation = (0,_useNavigationHelpers__WEBPACK_IMPORTED_MODULE_10__["default"])({
    onAction,
    getState,
    emitter,
    router
  });
  (0,_useFocusedListenersChildrenAdapter__WEBPACK_IMPORTED_MODULE_15__["default"])({
    navigation,
    focusedListeners: childListeners.focus
  });
  (0,_useOnGetState__WEBPACK_IMPORTED_MODULE_17__["default"])({
    getState,
    getStateListeners: keyedListeners.getState
  });
  const descriptors = (0,_useDescriptors__WEBPACK_IMPORTED_MODULE_9__["default"])({
    state,
    screens,
    navigation,
    screenOptions: options.screenOptions,
    defaultScreenOptions: options.defaultScreenOptions,
    onAction,
    getState,
    setState,
    onRouteFocus,
    addListener,
    addKeyedListener,
    router,
    emitter
  });
  (0,_useCurrentRender__WEBPACK_IMPORTED_MODULE_19__["default"])({
    state,
    navigation,
    descriptors
  });
  const NavigationContent = (0,_useComponent__WEBPACK_IMPORTED_MODULE_6__["default"])(_NavigationHelpersContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: navigation
  });
  return {
    state,
    navigation,
    descriptors,
    NavigationContent
  };
}
//# sourceMappingURL=useNavigationBuilder.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useNavigationCache.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNavigationCache)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_navigation_routers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/routers/lib/module/CommonActions.js");



/**
 * Hook to cache navigation objects for each screen in the navigator.
 * It's important to cache them to make sure navigation objects don't change between renders.
 * This lets us apply optimizations like `React.memo` to minimize re-rendering screens.
 */
function useNavigationCache({
  state,
  getState,
  navigation,
  setOptions,
  router,
  emitter
}) {
  // Cache object which holds navigation objects for each screen
  // We use `React.useMemo` instead of `React.useRef` coz we want to invalidate it when deps change
  // In reality, these deps will rarely change, if ever
  const cache = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    current: {}
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [getState, navigation, setOptions, router, emitter]);
  const actions = { ...router.actionCreators,
    ..._react_navigation_routers__WEBPACK_IMPORTED_MODULE_1__
  };
  cache.current = state.routes.reduce((acc, route) => {
    const previous = cache.current[route.key];

    if (previous) {
      // If a cached navigation object already exists, reuse it
      acc[route.key] = previous;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {
        emit,
        ...rest
      } = navigation;

      const dispatch = action => {
        const payload = typeof action === 'function' ? action(getState()) : action;
        navigation.dispatch(typeof payload === 'object' && payload != null ? {
          source: route.key,
          ...payload
        } : payload);
      };

      const helpers = Object.keys(actions).reduce((acc, name) => {
        // @ts-expect-error: name is a valid key, but TypeScript is dumb
        acc[name] = (...args) => dispatch(actions[name](...args));

        return acc;
      }, {});
      acc[route.key] = { ...rest,
        ...helpers,
        ...emitter.create(route.key),
        dispatch,
        setOptions: options => setOptions(o => ({ ...o,
          [route.key]: { ...o[route.key],
            ...options
          }
        })),
        isFocused: () => {
          const state = getState();

          if (state.routes[state.index].key !== route.key) {
            return false;
          } // If the current screen is focused, we also need to check if parent navigator is focused
          // This makes sure that we return the focus state in the whole tree, not just this navigator


          return navigation ? navigation.isFocused() : true;
        }
      };
    }

    return acc;
  }, {});
  return cache.current;
}
//# sourceMappingURL=useNavigationCache.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useNavigationHelpers.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNavigationHelpers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_navigation_routers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@react-navigation/routers/lib/module/CommonActions.js");
/* harmony import */ var _NavigationContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationContext.js");
/* harmony import */ var _UnhandledActionContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/UnhandledActionContext.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/types.js");




 // This is to make TypeScript compiler happy
// eslint-disable-next-line babel/no-unused-expressions

_types__WEBPACK_IMPORTED_MODULE_3__.PrivateValueStore;

/**
 * Navigation object with helper methods to be used by a navigator.
 * This object includes methods for common actions as well as methods the parent screen's navigation object.
 */
function useNavigationHelpers({
  onAction,
  getState,
  emitter,
  router
}) {
  const onUnhandledAction = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_UnhandledActionContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const parentNavigationHelpers = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_NavigationContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const dispatch = op => {
      const action = typeof op === 'function' ? op(getState()) : op;
      const handled = onAction(action);

      if (!handled) {
        onUnhandledAction === null || onUnhandledAction === void 0 ? void 0 : onUnhandledAction(action);
      }
    };

    const actions = { ...router.actionCreators,
      ..._react_navigation_routers__WEBPACK_IMPORTED_MODULE_4__
    };
    const helpers = Object.keys(actions).reduce((acc, name) => {
      // @ts-expect-error: name is a valid key, but TypeScript is dumb
      acc[name] = (...args) => dispatch(actions[name](...args));

      return acc;
    }, {});
    return { ...parentNavigationHelpers,
      ...helpers,
      dispatch,
      emit: emitter.emit,
      isFocused: parentNavigationHelpers ? parentNavigationHelpers.isFocused : () => true,
      canGoBack: () => {
        const state = getState();
        return router.getStateForAction(state, _react_navigation_routers__WEBPACK_IMPORTED_MODULE_4__.goBack(), {
          routeNames: state.routeNames,
          routeParamList: {},
          routeGetIdList: {}
        }) !== null || (parentNavigationHelpers === null || parentNavigationHelpers === void 0 ? void 0 : parentNavigationHelpers.canGoBack()) || false;
      },
      getParent: () => parentNavigationHelpers,
      getState,
      dangerouslyGetParent: () => parentNavigationHelpers,
      dangerouslyGetState: getState
    };
  }, [emitter.emit, getState, onAction, onUnhandledAction, parentNavigationHelpers, router]);
}
//# sourceMappingURL=useNavigationHelpers.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useNavigationState.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNavigationState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useNavigation.js");



/**
 * Hook to get a value from the current navigation state using a selector.
 *
 * @param selector Selector function to get a value from the state.
 */
function useNavigationState(selector) {
  const navigation = (0,_useNavigation__WEBPACK_IMPORTED_MODULE_1__["default"])(); // We don't care about the state value, we run the selector again at the end
  // The state is only to make sure that there's a re-render when we have a new value

  const [, setResult] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => selector(navigation.getState())); // We store the selector in a ref to avoid re-subscribing listeners every render

  const selectorRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(selector);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    selectorRef.current = selector;
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const unsubscribe = navigation.addListener('state', e => {
      setResult(selectorRef.current(e.data.state));
    });
    return unsubscribe;
  }, [navigation]);
  return selector(navigation.getState());
}
//# sourceMappingURL=useNavigationState.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useOnAction.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useOnAction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationBuilderContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationBuilderContext.js");
/* harmony import */ var _useOnPreventRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/useOnPreventRemove.js");




/**
 * Hook to handle actions for a navigator, including state updates and bubbling.
 *
 * Bubbling an action is achieved in 2 ways:
 * 1. To bubble action to parent, we expose the action handler in context and then access the parent context
 * 2. To bubble action to child, child adds event listeners subscribing to actions from parent
 *
 * When the action handler handles as action, it returns `true`, otherwise `false`.
 */
function useOnAction({
  router,
  getState,
  setState,
  key,
  actionListeners,
  beforeRemoveListeners,
  routerConfigOptions,
  emitter
}) {
  const {
    onAction: onActionParent,
    onRouteFocus: onRouteFocusParent,
    addListener: addListenerParent,
    onDispatchAction
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_NavigationBuilderContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const routerConfigOptionsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(routerConfigOptions);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    routerConfigOptionsRef.current = routerConfigOptions;
  });
  const onAction = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((action, visitedNavigators = new Set()) => {
    const state = getState(); // Since actions can bubble both up and down, they could come to the same navigator again
    // We keep track of navigators which have already tried to handle the action and return if it's already visited

    if (visitedNavigators.has(state.key)) {
      return false;
    }

    visitedNavigators.add(state.key);

    if (typeof action.target !== 'string' || action.target === state.key) {
      let result = router.getStateForAction(state, action, routerConfigOptionsRef.current); // If a target is specified and set to current navigator, the action shouldn't bubble
      // So instead of `null`, we use the state object for such cases to signal that action was handled

      result = result === null && action.target === state.key ? state : result;

      if (result !== null) {
        onDispatchAction(action, state === result);

        if (state !== result) {
          const isPrevented = (0,_useOnPreventRemove__WEBPACK_IMPORTED_MODULE_2__.shouldPreventRemove)(emitter, beforeRemoveListeners, state.routes, result.routes, action);

          if (isPrevented) {
            return true;
          }

          setState(result);
        }

        if (onRouteFocusParent !== undefined) {
          // Some actions such as `NAVIGATE` also want to bring the navigated route to focus in the whole tree
          // This means we need to focus all of the parent navigators of this navigator as well
          const shouldFocus = router.shouldActionChangeFocus(action);

          if (shouldFocus && key !== undefined) {
            onRouteFocusParent(key);
          }
        }

        return true;
      }
    }

    if (onActionParent !== undefined) {
      // Bubble action to the parent if the current navigator didn't handle it
      if (onActionParent(action, visitedNavigators)) {
        return true;
      }
    } // If the action wasn't handled by current navigator or a parent navigator, let children handle it


    for (let i = actionListeners.length - 1; i >= 0; i--) {
      const listener = actionListeners[i];

      if (listener(action, visitedNavigators)) {
        return true;
      }
    }

    return false;
  }, [actionListeners, beforeRemoveListeners, emitter, getState, key, onActionParent, onDispatchAction, onRouteFocusParent, router, setState]);
  (0,_useOnPreventRemove__WEBPACK_IMPORTED_MODULE_2__["default"])({
    getState,
    emitter,
    beforeRemoveListeners
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => addListenerParent === null || addListenerParent === void 0 ? void 0 : addListenerParent('action', onAction), [addListenerParent, onAction]);
  return onAction;
}
//# sourceMappingURL=useOnAction.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useOnGetState.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useOnGetState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationBuilderContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationBuilderContext.js");
/* harmony import */ var _NavigationRouteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationRouteContext.js");
/* harmony import */ var _isArrayEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/isArrayEqual.js");




function useOnGetState({
  getState,
  getStateListeners
}) {
  const {
    addKeyedListener
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_NavigationBuilderContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_NavigationRouteContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const key = route ? route.key : 'root';
  const getRehydratedState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    const state = getState(); // Avoid returning new route objects if we don't need to

    const routes = state.routes.map(route => {
      var _getStateListeners$ro;

      const childState = (_getStateListeners$ro = getStateListeners[route.key]) === null || _getStateListeners$ro === void 0 ? void 0 : _getStateListeners$ro.call(getStateListeners);

      if (route.state === childState) {
        return route;
      }

      return { ...route,
        state: childState
      };
    });

    if ((0,_isArrayEqual__WEBPACK_IMPORTED_MODULE_3__["default"])(state.routes, routes)) {
      return state;
    }

    return { ...state,
      routes
    };
  }, [getState, getStateListeners]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    return addKeyedListener === null || addKeyedListener === void 0 ? void 0 : addKeyedListener('getState', key, getRehydratedState);
  }, [addKeyedListener, getRehydratedState, key]);
}
//# sourceMappingURL=useOnGetState.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useOnPreventRemove.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useOnPreventRemove),
/* harmony export */   shouldPreventRemove: () => (/* binding */ shouldPreventRemove)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationBuilderContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationBuilderContext.js");
/* harmony import */ var _NavigationRouteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationRouteContext.js");



const VISITED_ROUTE_KEYS = Symbol('VISITED_ROUTE_KEYS');
const shouldPreventRemove = (emitter, beforeRemoveListeners, currentRoutes, nextRoutes, action) => {
  var _action$VISITED_ROUTE;

  const nextRouteKeys = nextRoutes.map(route => route.key); // Call these in reverse order so last screens handle the event first

  const removedRoutes = currentRoutes.filter(route => !nextRouteKeys.includes(route.key)).reverse();
  const visitedRouteKeys = // @ts-expect-error: add this property to mark that we've already emitted this action
  (_action$VISITED_ROUTE = action[VISITED_ROUTE_KEYS]) !== null && _action$VISITED_ROUTE !== void 0 ? _action$VISITED_ROUTE : new Set();
  const beforeRemoveAction = { ...action,
    [VISITED_ROUTE_KEYS]: visitedRouteKeys
  };

  for (const route of removedRoutes) {
    var _beforeRemoveListener;

    if (visitedRouteKeys.has(route.key)) {
      // Skip if we've already emitted this action for this screen
      continue;
    } // First, we need to check if any child screens want to prevent it


    const isPrevented = (_beforeRemoveListener = beforeRemoveListeners[route.key]) === null || _beforeRemoveListener === void 0 ? void 0 : _beforeRemoveListener.call(beforeRemoveListeners, beforeRemoveAction);

    if (isPrevented) {
      return true;
    }

    visitedRouteKeys.add(route.key);
    const event = emitter.emit({
      type: 'beforeRemove',
      target: route.key,
      data: {
        action: beforeRemoveAction
      },
      canPreventDefault: true
    });

    if (event.defaultPrevented) {
      return true;
    }
  }

  return false;
};
function useOnPreventRemove({
  getState,
  emitter,
  beforeRemoveListeners
}) {
  const {
    addKeyedListener
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_NavigationBuilderContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_NavigationRouteContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const routeKey = route === null || route === void 0 ? void 0 : route.key;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (routeKey) {
      return addKeyedListener === null || addKeyedListener === void 0 ? void 0 : addKeyedListener('beforeRemove', routeKey, action => {
        const state = getState();
        return shouldPreventRemove(emitter, beforeRemoveListeners, state.routes, [], action);
      });
    }
  }, [addKeyedListener, beforeRemoveListeners, emitter, getState, routeKey]);
}
//# sourceMappingURL=useOnPreventRemove.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useOnRouteFocus.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useOnRouteFocus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationBuilderContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationBuilderContext.js");



/**
 * Hook to handle focus actions for a route.
 * Focus action needs to be treated specially, coz when a nested route is focused,
 * the parent navigators also needs to be focused.
 */
function useOnRouteFocus({
  router,
  getState,
  key: sourceRouteKey,
  setState
}) {
  const {
    onRouteFocus: onRouteFocusParent
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_NavigationBuilderContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(key => {
    const state = getState();
    const result = router.getStateForRouteFocus(state, key);

    if (result !== state) {
      setState(result);
    }

    if (onRouteFocusParent !== undefined && sourceRouteKey !== undefined) {
      onRouteFocusParent(sourceRouteKey);
    }
  }, [getState, onRouteFocusParent, router, setState, sourceRouteKey]);
}
//# sourceMappingURL=useOnRouteFocus.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useOptionsGetters.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useOptionsGetters)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationStateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationStateContext.js");
/* harmony import */ var _NavigationBuilderContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationBuilderContext.js");



function useOptionsGetters({
  key,
  options,
  navigation
}) {
  const optionsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(options);
  const optionsGettersFromChildRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  const {
    onOptionsChange
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_NavigationBuilderContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const {
    addOptionsGetter: parentAddOptionsGetter
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_NavigationStateContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const optionsChangeListener = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    var _navigation$isFocused;

    const isFocused = (_navigation$isFocused = navigation === null || navigation === void 0 ? void 0 : navigation.isFocused()) !== null && _navigation$isFocused !== void 0 ? _navigation$isFocused : true;
    const hasChildren = Object.keys(optionsGettersFromChildRef.current).length;

    if (isFocused && !hasChildren) {
      var _optionsRef$current;

      onOptionsChange((_optionsRef$current = optionsRef.current) !== null && _optionsRef$current !== void 0 ? _optionsRef$current : {});
    }
  }, [navigation, onOptionsChange]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    optionsRef.current = options;
    optionsChangeListener();
    return navigation === null || navigation === void 0 ? void 0 : navigation.addListener('focus', optionsChangeListener);
  }, [navigation, options, optionsChangeListener]);
  const getOptionsFromListener = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    for (let key in optionsGettersFromChildRef.current) {
      if (optionsGettersFromChildRef.current.hasOwnProperty(key)) {
        var _optionsGettersFromCh, _optionsGettersFromCh2;

        const result = (_optionsGettersFromCh = (_optionsGettersFromCh2 = optionsGettersFromChildRef.current)[key]) === null || _optionsGettersFromCh === void 0 ? void 0 : _optionsGettersFromCh.call(_optionsGettersFromCh2); // null means unfocused route

        if (result !== null) {
          return result;
        }
      }
    }

    return null;
  }, []);
  const getCurrentOptions = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    var _navigation$isFocused2;

    const isFocused = (_navigation$isFocused2 = navigation === null || navigation === void 0 ? void 0 : navigation.isFocused()) !== null && _navigation$isFocused2 !== void 0 ? _navigation$isFocused2 : true;

    if (!isFocused) {
      return null;
    }

    const optionsFromListener = getOptionsFromListener();

    if (optionsFromListener !== null) {
      return optionsFromListener;
    }

    return optionsRef.current;
  }, [navigation, getOptionsFromListener]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    return parentAddOptionsGetter === null || parentAddOptionsGetter === void 0 ? void 0 : parentAddOptionsGetter(key, getCurrentOptions);
  }, [getCurrentOptions, parentAddOptionsGetter, key]);
  const addOptionsGetter = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((key, getter) => {
    optionsGettersFromChildRef.current[key] = getter;
    optionsChangeListener();
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete optionsGettersFromChildRef.current[key];
      optionsChangeListener();
    };
  }, [optionsChangeListener]);
  return {
    addOptionsGetter,
    getCurrentOptions
  };
}
//# sourceMappingURL=useOptionsGetters.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useRegisterNavigator.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useRegisterNavigator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid_non_secure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/nanoid/non-secure/index.js");
/* harmony import */ var _EnsureSingleNavigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/EnsureSingleNavigator.js");



/**
 * Register a navigator in the parent context (either a navigation container or a screen).
 * This is used to prevent multiple navigators under a single container or screen.
 */

function useRegisterNavigator() {
  const [key] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => (0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_1__.nanoid)());
  const container = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_EnsureSingleNavigator__WEBPACK_IMPORTED_MODULE_2__.SingleNavigatorContext);

  if (container === undefined) {
    throw new Error("Couldn't register the navigator. Have you wrapped your app with 'NavigationContainer'?");
  }

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const {
      register,
      unregister
    } = container;
    register(key);
    return () => unregister(key);
  }, [container, key]);
  return key;
}
//# sourceMappingURL=useRegisterNavigator.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useRoute.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useRoute)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationRouteContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/NavigationRouteContext.js");



/**
 * Hook to access the route prop of the parent screen anywhere.
 *
 * @returns Route prop of the parent screen.
 */
function useRoute() {
  const route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_NavigationRouteContext__WEBPACK_IMPORTED_MODULE_1__["default"]);

  if (route === undefined) {
    throw new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
  }

  return route;
}
//# sourceMappingURL=useRoute.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useRouteCache.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SUPPRESS_STATE_ACCESS_WARNING: () => (/* binding */ SUPPRESS_STATE_ACCESS_WARNING),
/* harmony export */   "default": () => (/* binding */ useRouteCache)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Utilites such as `getFocusedRouteNameFromRoute` need to access state.
 * So we need a way to suppress the warning for those use cases.
 * This is fine since they are internal utilities and this is not public API.
 */
const SUPPRESS_STATE_ACCESS_WARNING = {
  value: false
};
/**
 * Hook to cache route props for each screen in the navigator.
 * This lets add warnings and modifications to the route object but keep references between renders.
 */

function useRouteCache(routes) {
  // Cache object which holds route objects for each screen
  const cache = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    current: new Map()
  }), []);

  if (false) {}

  cache.current = routes.reduce((acc, route) => {
    const previous = cache.current.get(route);

    if (previous) {
      // If a cached route object already exists, reuse it
      acc.set(route, previous);
    } else {
      const proxy = { ...route
      };
      Object.defineProperty(proxy, 'state', {
        get() {
          if (!SUPPRESS_STATE_ACCESS_WARNING.value) {
            console.warn("Accessing the 'state' property of the 'route' object is not supported. If you want to get the focused route name, use the 'getFocusedRouteNameFromRoute' helper instead: https://reactnavigation.org/docs/5.x/screen-options-resolution/#setting-parent-screen-options-based-on-child-navigators-state");
          }

          return route.state;
        }

      });
      acc.set(route, proxy);
    }

    return acc;
  }, new Map());
  return Array.from(cache.current.values());
}
//# sourceMappingURL=useRouteCache.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useScheduleUpdate.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleUpdateContext: () => (/* binding */ ScheduleUpdateContext),
/* harmony export */   "default": () => (/* binding */ useScheduleUpdate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MISSING_CONTEXT_ERROR = "Couldn't find a schedule context.";
const ScheduleUpdateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  scheduleUpdate() {
    throw new Error(MISSING_CONTEXT_ERROR);
  },

  flushUpdates() {
    throw new Error(MISSING_CONTEXT_ERROR);
  }

});
/**
 * When screen config changes, we want to update the navigator in the same update phase.
 * However, navigation state is in the root component and React won't let us update it from a child.
 * This is a workaround for that, the scheduled update is stored in the ref without actually calling setState.
 * It lets all subsequent updates access the latest state so it stays correct.
 * Then we call setState during after the component updates.
 */

function useScheduleUpdate(callback) {
  const {
    scheduleUpdate,
    flushUpdates
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ScheduleUpdateContext);
  scheduleUpdate(callback);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(flushUpdates);
}
//# sourceMappingURL=useScheduleUpdate.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/core/lib/module/useSyncState.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useSyncState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UNINTIALIZED_STATE = {};
/**
 * This is definitely not compatible with concurrent mode, but we don't have a solution for sync state yet.
 */

function useSyncState(initialState) {
  const stateRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(UNINTIALIZED_STATE);
  const isSchedulingRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const isMountedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  if (stateRef.current === UNINTIALIZED_STATE) {
    stateRef.current = // @ts-expect-error: initialState is a function, but TypeScript doesn't think so
    typeof initialState === 'function' ? initialState() : initialState;
  }

  const [trackingState, setTrackingState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(stateRef.current);
  const getState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => stateRef.current, []);
  const setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(state => {
    if (state === stateRef.current || !isMountedRef.current) {
      return;
    }

    stateRef.current = state;

    if (!isSchedulingRef.current) {
      setTrackingState(state);
    }
  }, []);
  const scheduleUpdate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(callback => {
    isSchedulingRef.current = true;

    try {
      callback();
    } finally {
      isSchedulingRef.current = false;
    }
  }, []);
  const flushUpdates = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    if (!isMountedRef.current) {
      return;
    } // Make sure that the tracking state is up-to-date.
    // We call it unconditionally, but React should skip the update if state is unchanged.


    setTrackingState(stateRef.current);
  }, []); // If we're rendering and the tracking state is out of date, update it immediately
  // This will make sure that our updates are applied as early as possible.

  if (trackingState !== stateRef.current) {
    setTrackingState(stateRef.current);
  }

  const state = stateRef.current;
  react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue(state);
  return [state, getState, setState, scheduleUpdate, flushUpdates];
}
//# sourceMappingURL=useSyncState.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/native/lib/module/LinkingContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LinkingContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  options: undefined
});
LinkingContext.displayName = 'LinkingContext';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkingContext);
//# sourceMappingURL=LinkingContext.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/native/lib/module/NavigationContainer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _react_navigation_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LinkingContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@react-navigation/native/lib/module/LinkingContext.js");
/* harmony import */ var _theming_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/native/lib/module/theming/DefaultTheme.js");
/* harmony import */ var _theming_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@react-navigation/native/lib/module/theming/ThemeProvider.js");
/* harmony import */ var _useBackButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@react-navigation/native/lib/module/useBackButton.js");
/* harmony import */ var _useDocumentTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@react-navigation/native/lib/module/useDocumentTitle.js");
/* harmony import */ var _useLinking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@react-navigation/native/lib/module/useLinking.js");
/* harmony import */ var _useThenable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@react-navigation/native/lib/module/useThenable.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









global.REACT_NAVIGATION_DEVTOOLS = new WeakMap();
/**
 * Container component which holds the navigation state designed for React Native apps.
 * This should be rendered at the root wrapping the whole app.
 *
 * @param props.initialState Initial state object for the navigation tree. When deep link handling is enabled, this will override deep links when specified. Make sure that you don't specify an `initialState` when there's a deep link (`Linking.getInitialURL()`).
 * @param props.onReady Callback which is called after the navigation tree mounts.
 * @param props.onStateChange Callback which is called with the latest navigation state when it changes.
 * @param props.theme Theme object for the navigators.
 * @param props.linking Options for deep linking. Deep link handling is enabled when this prop is provided, unless `linking.enabled` is `false`.
 * @param props.fallback Fallback component to render until we have finished getting initial state when linking is enabled. Defaults to `null`.
 * @param props.documentTitle Options to configure the document title on Web. Updating document title is handled by default unless `documentTitle.enabled` is `false`.
 * @param props.children Child elements to render the content.
 * @param props.ref Ref object which refers to the navigation object containing helper methods.
 */
function NavigationContainerInner(_ref, ref) {
  let {
    theme = _theming_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__["default"],
    linking,
    fallback = null,
    documentTitle,
    onReady,
    ...rest
  } = _ref;
  const isLinkingEnabled = linking ? linking.enabled !== false : false;
  if (linking !== null && linking !== void 0 && linking.config) {
    (0,_react_navigation_core__WEBPACK_IMPORTED_MODULE_0__.validatePathConfig)(linking.config);
  }
  const refContainer = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  (0,_useBackButton__WEBPACK_IMPORTED_MODULE_3__["default"])(refContainer);
  (0,_useDocumentTitle__WEBPACK_IMPORTED_MODULE_4__["default"])(refContainer, documentTitle);
  const {
    getInitialState
  } = (0,_useLinking__WEBPACK_IMPORTED_MODULE_5__["default"])(refContainer, {
    independent: rest.independent,
    enabled: isLinkingEnabled,
    prefixes: [],
    ...linking
  });

  // Add additional linking related info to the ref
  // This will be used by the devtools
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (refContainer.current) {
      REACT_NAVIGATION_DEVTOOLS.set(refContainer.current, {
        get linking() {
          return {
            ...linking,
            enabled: isLinkingEnabled,
            prefixes: (linking === null || linking === void 0 ? void 0 : linking.prefixes) ?? [],
            getStateFromPath: (linking === null || linking === void 0 ? void 0 : linking.getStateFromPath) ?? _react_navigation_core__WEBPACK_IMPORTED_MODULE_0__.getStateFromPath,
            getPathFromState: (linking === null || linking === void 0 ? void 0 : linking.getPathFromState) ?? _react_navigation_core__WEBPACK_IMPORTED_MODULE_0__.getPathFromState,
            getActionFromState: (linking === null || linking === void 0 ? void 0 : linking.getActionFromState) ?? _react_navigation_core__WEBPACK_IMPORTED_MODULE_0__.getActionFromState
          };
        }
      });
    }
  });
  const [isResolved, initialState] = (0,_useThenable__WEBPACK_IMPORTED_MODULE_6__["default"])(getInitialState);
  react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle(ref, () => refContainer.current);
  const linkingContext = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({
    options: linking
  }), [linking]);
  const isReady = rest.initialState != null || !isLinkingEnabled || isResolved;
  const onReadyRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(onReady);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    onReadyRef.current = onReady;
  });
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (isReady) {
      var _onReadyRef$current;
      (_onReadyRef$current = onReadyRef.current) === null || _onReadyRef$current === void 0 ? void 0 : _onReadyRef$current.call(onReadyRef);
    }
  }, [isReady]);
  if (!isReady) {
    // This is temporary until we have Suspense for data-fetching
    // Then the fallback will be handled by a parent `Suspense` component
    return fallback;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_LinkingContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: linkingContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_theming_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_navigation_core__WEBPACK_IMPORTED_MODULE_0__.BaseNavigationContainer, _extends({}, rest, {
    initialState: rest.initialState == null ? initialState : rest.initialState,
    ref: refContainer
  }))));
}
const NavigationContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(NavigationContainerInner);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationContainer);
//# sourceMappingURL=NavigationContainer.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/native/lib/module/ServerContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ServerContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServerContext);
//# sourceMappingURL=ServerContext.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/native/lib/module/createMemoryHistory.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMemoryHistory)
/* harmony export */ });
/* harmony import */ var nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nanoid/non-secure/index.js");

function createMemoryHistory() {
  let index = 0;
  let items = [];

  // Pending callbacks for `history.go(n)`
  // We might modify the callback stored if it was interrupted, so we have a ref to identify it
  const pending = [];
  const interrupt = () => {
    // If another history operation was performed we need to interrupt existing ones
    // This makes sure that calls such as `history.replace` after `history.go` don't happen
    // Since otherwise it won't be correct if something else has changed
    pending.forEach(it => {
      const cb = it.cb;
      it.cb = () => cb(true);
    });
  };
  const history = {
    get index() {
      var _window$history$state;
      // We store an id in the state instead of an index
      // Index could get out of sync with in-memory values if page reloads
      const id = (_window$history$state = window.history.state) === null || _window$history$state === void 0 ? void 0 : _window$history$state.id;
      if (id) {
        const index = items.findIndex(item => item.id === id);
        return index > -1 ? index : 0;
      }
      return 0;
    },
    get(index) {
      return items[index];
    },
    backIndex(_ref) {
      let {
        path
      } = _ref;
      // We need to find the index from the element before current to get closest path to go back to
      for (let i = index - 1; i >= 0; i--) {
        const item = items[i];
        if (item.path === path) {
          return i;
        }
      }
      return -1;
    },
    push(_ref2) {
      let {
        path,
        state
      } = _ref2;
      interrupt();
      const id = (0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)();

      // When a new entry is pushed, all the existing entries after index will be inaccessible
      // So we remove any existing entries after the current index to clean them up
      items = items.slice(0, index + 1);
      items.push({
        path,
        state,
        id
      });
      index = items.length - 1;

      // We pass empty string for title because it's ignored in all browsers except safari
      // We don't store state object in history.state because:
      // - browsers have limits on how big it can be, and we don't control the size
      // - while not recommended, there could be non-serializable data in state
      window.history.pushState({
        id
      }, '', path);
    },
    replace(_ref3) {
      var _window$history$state2;
      let {
        path,
        state
      } = _ref3;
      interrupt();
      const id = ((_window$history$state2 = window.history.state) === null || _window$history$state2 === void 0 ? void 0 : _window$history$state2.id) ?? (0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)();

      // Need to keep the hash part of the path if there was no previous history entry
      // or the previous history entry had the same path
      let pathWithHash = path;
      if (!items.length || items.findIndex(item => item.id === id) < 0) {
        // There are two scenarios for creating an array with only one history record:
        // - When loaded id not found in the items array, this function by default will replace
        //   the first item. We need to keep only the new updated object, otherwise it will break
        //   the page when navigating forward in history.
        // - This is the first time any state modifications are done
        //   So we need to push the entry as there's nothing to replace
        pathWithHash = pathWithHash + location.hash;
        items = [{
          path: pathWithHash,
          state,
          id
        }];
        index = 0;
      } else {
        if (items[index].path === path) {
          pathWithHash = pathWithHash + location.hash;
        }
        items[index] = {
          path,
          state,
          id
        };
      }
      window.history.replaceState({
        id
      }, '', pathWithHash);
    },
    // `history.go(n)` is asynchronous, there are couple of things to keep in mind:
    // - it won't do anything if we can't go `n` steps, the `popstate` event won't fire.
    // - each `history.go(n)` call will trigger a separate `popstate` event with correct location.
    // - the `popstate` event fires before the next frame after calling `history.go(n)`.
    // This method differs from `history.go(n)` in the sense that it'll go back as many steps it can.
    go(n) {
      interrupt();

      // To guard against unexpected navigation out of the app we will assume that browser history is only as deep as the length of our memory
      // history. If we don't have an item to navigate to then update our index and navigate as far as we can without taking the user out of the app.
      const nextIndex = index + n;
      const lastItemIndex = items.length - 1;
      if (n < 0 && !items[nextIndex]) {
        // Attempted to navigate beyond the first index. Negating the current index will align the browser history with the first item.
        n = -index;
        index = 0;
      } else if (n > 0 && nextIndex > lastItemIndex) {
        // Attempted to navigate past the last index. Calculate how many indices away from the last index and go there.
        n = lastItemIndex - index;
        index = lastItemIndex;
      } else {
        index = nextIndex;
      }
      if (n === 0) {
        return;
      }

      // When we call `history.go`, `popstate` will fire when there's history to go back to
      // So we need to somehow handle following cases:
      // - There's history to go back, `history.go` is called, and `popstate` fires
      // - `history.go` is called multiple times, we need to resolve on respective `popstate`
      // - No history to go back, but `history.go` was called, browser has no API to detect it
      return new Promise((resolve, reject) => {
        const done = interrupted => {
          clearTimeout(timer);
          if (interrupted) {
            reject(new Error('History was changed during navigation.'));
            return;
          }

          // There seems to be a bug in Chrome regarding updating the title
          // If we set a title just before calling `history.go`, the title gets lost
          // However the value of `document.title` is still what we set it to
          // It's just not displayed in the tab bar
          // To update the tab bar, we need to reset the title to something else first (e.g. '')
          // And set the title to what it was before so it gets applied
          // It won't work without setting it to empty string coz otherwise title isn't changing
          // Which means that the browser won't do anything after setting the title
          const {
            title
          } = window.document;
          window.document.title = '';
          window.document.title = title;
          resolve();
        };
        pending.push({
          ref: done,
          cb: done
        });

        // If navigation didn't happen within 100ms, assume that it won't happen
        // This may not be accurate, but hopefully it won't take so much time
        // In Chrome, navigation seems to happen instantly in next microtask
        // But on Firefox, it seems to take much longer, around 50ms from our testing
        // We're using a hacky timeout since there doesn't seem to be way to know for sure
        const timer = setTimeout(() => {
          const index = pending.findIndex(it => it.ref === done);
          if (index > -1) {
            pending[index].cb();
            pending.splice(index, 1);
          }
        }, 100);
        const onPopState = () => {
          var _window$history$state3;
          const id = (_window$history$state3 = window.history.state) === null || _window$history$state3 === void 0 ? void 0 : _window$history$state3.id;
          const currentIndex = items.findIndex(item => item.id === id);

          // Fix createMemoryHistory.index variable's value
          // as it may go out of sync when navigating in the browser.
          index = Math.max(currentIndex, 0);
          const last = pending.pop();
          window.removeEventListener('popstate', onPopState);
          last === null || last === void 0 ? void 0 : last.cb();
        };
        window.addEventListener('popstate', onPopState);
        window.history.go(n);
      });
    },
    // The `popstate` event is triggered when history changes, except `pushState` and `replaceState`
    // If we call `history.go(n)` ourselves, we don't want it to trigger the listener
    // Here we normalize it so that only external changes (e.g. user pressing back/forward) trigger the listener
    listen(listener) {
      const onPopState = () => {
        if (pending.length) {
          // This was triggered by `history.go(n)`, we shouldn't call the listener
          return;
        }
        listener();
      };
      window.addEventListener('popstate', onPopState);
      return () => window.removeEventListener('popstate', onPopState);
    }
  };
  return history;
}
//# sourceMappingURL=createMemoryHistory.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/native/lib/module/theming/DefaultTheme.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DefaultTheme = {
  dark: false,
  colors: {
    primary: 'rgb(0, 122, 255)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultTheme);
//# sourceMappingURL=DefaultTheme.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/native/lib/module/theming/ThemeContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DefaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/native/lib/module/theming/DefaultTheme.js");


const ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(_DefaultTheme__WEBPACK_IMPORTED_MODULE_1__["default"]);
ThemeContext.displayName = 'ThemeContext';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeContext);
//# sourceMappingURL=ThemeContext.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/native/lib/module/theming/ThemeProvider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/native/lib/module/theming/ThemeContext.js");


function ThemeProvider(_ref) {
  let {
    value,
    children
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ThemeContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: value
  }, children);
}
//# sourceMappingURL=ThemeProvider.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/native/lib/module/useBackButton.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useBackButton)
/* harmony export */ });
function useBackButton(_) {
  // No-op
  // BackHandler is not available on web
}
//# sourceMappingURL=useBackButton.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/native/lib/module/useDocumentTitle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useDocumentTitle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Set the document title for the active screen
 */
function useDocumentTitle(ref) {
  let {
    enabled = true,
    formatter = (options, route) => (options === null || options === void 0 ? void 0 : options.title) ?? (route === null || route === void 0 ? void 0 : route.name)
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!enabled) {
      return;
    }
    const navigation = ref.current;
    if (navigation) {
      const title = formatter(navigation.getCurrentOptions(), navigation.getCurrentRoute());
      document.title = title;
    }
    return navigation === null || navigation === void 0 ? void 0 : navigation.addListener('options', e => {
      const title = formatter(e.data.options, navigation === null || navigation === void 0 ? void 0 : navigation.getCurrentRoute());
      document.title = title;
    });
  });
}
//# sourceMappingURL=useDocumentTitle.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/native/lib/module/useLinking.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useLinking),
/* harmony export */   series: () => (/* binding */ series)
/* harmony export */ });
/* harmony import */ var _react_navigation_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createMemoryHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@react-navigation/native/lib/module/createMemoryHistory.js");
/* harmony import */ var _ServerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@react-navigation/native/lib/module/ServerContext.js");





/**
 * Find the matching navigation state that changed between 2 navigation states
 * e.g.: a -> b -> c -> d and a -> b -> c -> e -> f, if history in b changed, b is the matching state
 */
const findMatchingState = (a, b) => {
  if (a === undefined || b === undefined || a.key !== b.key) {
    return [undefined, undefined];
  }

  // Tab and drawer will have `history` property, but stack will have history in `routes`
  const aHistoryLength = a.history ? a.history.length : a.routes.length;
  const bHistoryLength = b.history ? b.history.length : b.routes.length;
  const aRoute = a.routes[a.index];
  const bRoute = b.routes[b.index];
  const aChildState = aRoute.state;
  const bChildState = bRoute.state;

  // Stop here if this is the state object that changed:
  // - history length is different
  // - focused routes are different
  // - one of them doesn't have child state
  // - child state keys are different
  if (aHistoryLength !== bHistoryLength || aRoute.key !== bRoute.key || aChildState === undefined || bChildState === undefined || aChildState.key !== bChildState.key) {
    return [a, b];
  }
  return findMatchingState(aChildState, bChildState);
};

/**
 * Run async function in series as it's called.
 */
const series = cb => {
  let queue = Promise.resolve();
  const callback = () => {
    queue = queue.then(cb);
  };
  return callback;
};
let linkingHandlers = [];
function useLinking(ref, _ref) {
  let {
    independent,
    enabled = true,
    config,
    getStateFromPath = _react_navigation_core__WEBPACK_IMPORTED_MODULE_0__.getStateFromPath,
    getPathFromState = _react_navigation_core__WEBPACK_IMPORTED_MODULE_0__.getPathFromState,
    getActionFromState = _react_navigation_core__WEBPACK_IMPORTED_MODULE_0__.getActionFromState
  } = _ref;
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    if (false) {}
    if (independent) {
      return undefined;
    }
    if (enabled !== false && linkingHandlers.length) {
      console.error(['Looks like you have configured linking in multiple places. This is likely an error since deep links should only be handled in one place to avoid conflicts. Make sure that:', "- You don't have multiple NavigationContainers in the app each with 'linking' enabled", '- Only a single instance of the root component is rendered'].join('\n').trim());
    }
    const handler = Symbol();
    if (enabled !== false) {
      linkingHandlers.push(handler);
    }
    return () => {
      const index = linkingHandlers.indexOf(handler);
      if (index > -1) {
        linkingHandlers.splice(index, 1);
      }
    };
  }, [enabled, independent]);
  const [history] = react__WEBPACK_IMPORTED_MODULE_2__.useState(_createMemoryHistory__WEBPACK_IMPORTED_MODULE_3__["default"]);

  // We store these options in ref to avoid re-creating getInitialState and re-subscribing listeners
  // This lets user avoid wrapping the items in `React.useCallback` or `React.useMemo`
  // Not re-creating `getInitialState` is important coz it makes it easier for the user to use in an effect
  const enabledRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(enabled);
  const configRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(config);
  const getStateFromPathRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(getStateFromPath);
  const getPathFromStateRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(getPathFromState);
  const getActionFromStateRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(getActionFromState);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    enabledRef.current = enabled;
    configRef.current = config;
    getStateFromPathRef.current = getStateFromPath;
    getPathFromStateRef.current = getPathFromState;
    getActionFromStateRef.current = getActionFromState;
  });
  const server = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_ServerContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const getInitialState = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(() => {
    let value;
    if (enabledRef.current) {
      const location = (server === null || server === void 0 ? void 0 : server.location) ?? (typeof window !== 'undefined' ? window.location : undefined);
      const path = location ? location.pathname + location.search : undefined;
      if (path) {
        value = getStateFromPathRef.current(path, configRef.current);
      }
    }
    const thenable = {
      then(onfulfilled) {
        return Promise.resolve(onfulfilled ? onfulfilled(value) : value);
      },
      catch() {
        return thenable;
      }
    };
    return thenable;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const previousIndexRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(undefined);
  const previousStateRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(undefined);
  const pendingPopStatePathRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(undefined);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    previousIndexRef.current = history.index;
    return history.listen(() => {
      const navigation = ref.current;
      if (!navigation || !enabled) {
        return;
      }
      const {
        location
      } = window;
      const path = location.pathname + location.search;
      const index = history.index;
      const previousIndex = previousIndexRef.current ?? 0;
      previousIndexRef.current = index;
      pendingPopStatePathRef.current = path;

      // When browser back/forward is clicked, we first need to check if state object for this index exists
      // If it does we'll reset to that state object
      // Otherwise, we'll handle it like a regular deep link
      const record = history.get(index);
      if ((record === null || record === void 0 ? void 0 : record.path) === path && record !== null && record !== void 0 && record.state) {
        navigation.resetRoot(record.state);
        return;
      }
      const state = getStateFromPathRef.current(path, configRef.current);

      // We should only dispatch an action when going forward
      // Otherwise the action will likely add items to history, which would mess things up
      if (state) {
        // Make sure that the routes in the state exist in the root navigator
        // Otherwise there's an error in the linking configuration
        const rootState = navigation.getRootState();
        if (state.routes.some(r => !(rootState !== null && rootState !== void 0 && rootState.routeNames.includes(r.name)))) {
          console.warn("The navigation state parsed from the URL contains routes not present in the root navigator. This usually means that the linking configuration doesn't match the navigation structure. See https://reactnavigation.org/docs/configuring-links for more details on how to specify a linking configuration.");
          return;
        }
        if (index > previousIndex) {
          const action = getActionFromStateRef.current(state, configRef.current);
          if (action !== undefined) {
            try {
              navigation.dispatch(action);
            } catch (e) {
              // Ignore any errors from deep linking.
              // This could happen in case of malformed links, navigation object not being initialized etc.
              console.warn(`An error occurred when trying to handle the link '${path}': ${typeof e === 'object' && e != null && 'message' in e ? e.message : e}`);
            }
          } else {
            navigation.resetRoot(state);
          }
        } else {
          navigation.resetRoot(state);
        }
      } else {
        // if current path didn't return any state, we should revert to initial state
        navigation.resetRoot(state);
      }
    });
  }, [enabled, history, ref]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    var _ref$current;
    if (!enabled) {
      return;
    }
    const getPathForRoute = (route, state) => {
      // If the `route` object contains a `path`, use that path as long as `route.name` and `params` still match
      // This makes sure that we preserve the original URL for wildcard routes
      if (route !== null && route !== void 0 && route.path) {
        const stateForPath = getStateFromPathRef.current(route.path, configRef.current);
        if (stateForPath) {
          const focusedRoute = (0,_react_navigation_core__WEBPACK_IMPORTED_MODULE_0__.findFocusedRoute)(stateForPath);
          if (focusedRoute && focusedRoute.name === route.name && fast_deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(focusedRoute.params, route.params)) {
            return route.path;
          }
        }
      }
      return getPathFromStateRef.current(state, configRef.current);
    };
    if (ref.current) {
      // We need to record the current metadata on the first render if they aren't set
      // This will allow the initial state to be in the history entry
      const state = ref.current.getRootState();
      if (state) {
        const route = (0,_react_navigation_core__WEBPACK_IMPORTED_MODULE_0__.findFocusedRoute)(state);
        const path = getPathForRoute(route, state);
        if (previousStateRef.current === undefined) {
          previousStateRef.current = state;
        }
        history.replace({
          path,
          state
        });
      }
    }
    const onStateChange = async () => {
      const navigation = ref.current;
      if (!navigation || !enabled) {
        return;
      }
      const previousState = previousStateRef.current;
      const state = navigation.getRootState();

      // root state may not available, for example when root navigators switch inside the container
      if (!state) {
        return;
      }
      const pendingPath = pendingPopStatePathRef.current;
      const route = (0,_react_navigation_core__WEBPACK_IMPORTED_MODULE_0__.findFocusedRoute)(state);
      const path = getPathForRoute(route, state);
      previousStateRef.current = state;
      pendingPopStatePathRef.current = undefined;

      // To detect the kind of state change, we need to:
      // - Find the common focused navigation state in previous and current state
      // - If only the route keys changed, compare history/routes.length to check if we go back/forward/replace
      // - If no common focused navigation state found, it's a replace
      const [previousFocusedState, focusedState] = findMatchingState(previousState, state);
      if (previousFocusedState && focusedState &&
      // We should only handle push/pop if path changed from what was in last `popstate`
      // Otherwise it's likely a change triggered by `popstate`
      path !== pendingPath) {
        const historyDelta = (focusedState.history ? focusedState.history.length : focusedState.routes.length) - (previousFocusedState.history ? previousFocusedState.history.length : previousFocusedState.routes.length);
        if (historyDelta > 0) {
          // If history length is increased, we should pushState
          // Note that path might not actually change here, for example, drawer open should pushState
          history.push({
            path,
            state
          });
        } else if (historyDelta < 0) {
          // If history length is decreased, i.e. entries were removed, we want to go back

          const nextIndex = history.backIndex({
            path
          });
          const currentIndex = history.index;
          try {
            if (nextIndex !== -1 && nextIndex < currentIndex &&
            // We should only go back if the entry exists and it's less than current index
            history.get(nextIndex - currentIndex)) {
              // An existing entry for this path exists and it's less than current index, go back to that
              await history.go(nextIndex - currentIndex);
            } else {
              // We couldn't find an existing entry to go back to, so we'll go back by the delta
              // This won't be correct if multiple routes were pushed in one go before
              // Usually this shouldn't happen and this is a fallback for that
              await history.go(historyDelta);
            }

            // Store the updated state as well as fix the path if incorrect
            history.replace({
              path,
              state
            });
          } catch (e) {
            // The navigation was interrupted
          }
        } else {
          // If history length is unchanged, we want to replaceState
          history.replace({
            path,
            state
          });
        }
      } else {
        // If no common navigation state was found, assume it's a replace
        // This would happen if the user did a reset/conditionally changed navigators
        history.replace({
          path,
          state
        });
      }
    };

    // We debounce onStateChange coz we don't want multiple state changes to be handled at one time
    // This could happen since `history.go(n)` is asynchronous
    // If `pushState` or `replaceState` were called before `history.go(n)` completes, it'll mess stuff up
    return (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.addListener('state', series(onStateChange));
  }, [enabled, history, ref]);
  return {
    getInitialState
  };
}
//# sourceMappingURL=useLinking.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/native/lib/module/useThenable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useThenable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useThenable(create) {
  const [promise] = react__WEBPACK_IMPORTED_MODULE_0__.useState(create);
  let initialState = [false, undefined];

  // Check if our thenable is synchronous
  promise.then(result => {
    initialState = [true, result];
  });
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(initialState);
  const [resolved] = state;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let cancelled = false;
    const resolve = async () => {
      let result;
      try {
        result = await promise;
      } finally {
        if (!cancelled) {
          setState([true, result]);
        }
      }
    };
    if (!resolved) {
      resolve();
    }
    return () => {
      cancelled = true;
    };
  }, [promise, resolved]);
  return state;
}
//# sourceMappingURL=useThenable.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/routers/lib/module/BaseRouter.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nanoid/non-secure/index.js");


/**
 * Base router object that can be used when writing custom routers.
 * This provides few helper methods to handle common actions such as `RESET`.
 */
const BaseRouter = {
  getStateForAction(state, action) {
    switch (action.type) {
      case 'SET_PARAMS':
        {
          const index = action.source ? state.routes.findIndex(r => r.key === action.source) : state.index;

          if (index === -1) {
            return null;
          }

          return { ...state,
            routes: state.routes.map((r, i) => i === index ? { ...r,
              params: { ...r.params,
                ...action.payload.params
              }
            } : r)
          };
        }

      case 'RESET':
        {
          const nextState = action.payload;

          if (nextState.routes.length === 0 || nextState.routes.some(route => !state.routeNames.includes(route.name))) {
            return null;
          }

          if (nextState.stale === false) {
            if (state.routeNames.length !== nextState.routeNames.length || nextState.routeNames.some(name => !state.routeNames.includes(name))) {
              return null;
            }

            return { ...nextState,
              routes: nextState.routes.map(route => route.key ? route : { ...route,
                key: "".concat(route.name, "-").concat((0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)())
              })
            };
          }

          return nextState;
        }

      default:
        return null;
    }
  },

  shouldActionChangeFocus(action) {
    return action.type === 'NAVIGATE';
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseRouter);
//# sourceMappingURL=BaseRouter.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/routers/lib/module/CommonActions.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   goBack: () => (/* binding */ goBack),
/* harmony export */   navigate: () => (/* binding */ navigate),
/* harmony export */   reset: () => (/* binding */ reset),
/* harmony export */   setParams: () => (/* binding */ setParams)
/* harmony export */ });
function goBack() {
  return {
    type: 'GO_BACK'
  };
}
// eslint-disable-next-line no-redeclare
function navigate(...args) {
  if (typeof args[0] === 'string') {
    return {
      type: 'NAVIGATE',
      payload: {
        name: args[0],
        params: args[1]
      }
    };
  } else {
    const payload = args[0] || {};

    if (!payload.hasOwnProperty('key') && !payload.hasOwnProperty('name')) {
      throw new Error('You need to specify name or key when calling navigate with an object as the argument. See https://reactnavigation.org/docs/5.x/navigation-actions#navigate for usage.');
    }

    return {
      type: 'NAVIGATE',
      payload
    };
  }
}
function reset(state) {
  return {
    type: 'RESET',
    payload: state
  };
}
function setParams(params) {
  return {
    type: 'SET_PARAMS',
    payload: {
      params
    }
  };
}
//# sourceMappingURL=CommonActions.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/routers/lib/module/DrawerRouter.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DrawerActions: () => (/* binding */ DrawerActions),
/* harmony export */   "default": () => (/* binding */ DrawerRouter)
/* harmony export */ });
/* harmony import */ var nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nanoid/non-secure/index.js");
/* harmony import */ var _TabRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/routers/lib/module/TabRouter.js");


const DrawerActions = { ..._TabRouter__WEBPACK_IMPORTED_MODULE_1__.TabActions,

  openDrawer() {
    return {
      type: 'OPEN_DRAWER'
    };
  },

  closeDrawer() {
    return {
      type: 'CLOSE_DRAWER'
    };
  },

  toggleDrawer() {
    return {
      type: 'TOGGLE_DRAWER'
    };
  }

};

const isDrawerOpen = state => {
  var _state$history;

  return Boolean((_state$history = state.history) === null || _state$history === void 0 ? void 0 : _state$history.some(it => it.type === 'drawer'));
};

const openDrawer = state => {
  if (isDrawerOpen(state)) {
    return state;
  }

  return { ...state,
    history: [...state.history, {
      type: 'drawer'
    }]
  };
};

const closeDrawer = state => {
  if (!isDrawerOpen(state)) {
    return state;
  }

  return { ...state,
    history: state.history.filter(it => it.type !== 'drawer')
  };
};

function DrawerRouter({
  openByDefault,
  ...rest
}) {
  const router = (0,_TabRouter__WEBPACK_IMPORTED_MODULE_1__["default"])(rest);
  return { ...router,
    type: 'drawer',

    getInitialState({
      routeNames,
      routeParamList,
      routeGetIdList
    }) {
      let state = router.getInitialState({
        routeNames,
        routeParamList,
        routeGetIdList
      });

      if (openByDefault) {
        state = openDrawer(state);
      }

      return { ...state,
        stale: false,
        type: 'drawer',
        key: "drawer-".concat((0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)())
      };
    },

    getRehydratedState(partialState, {
      routeNames,
      routeParamList,
      routeGetIdList
    }) {
      if (partialState.stale === false) {
        return partialState;
      }

      let state = router.getRehydratedState(partialState, {
        routeNames,
        routeParamList,
        routeGetIdList
      });

      if (partialState.history ? isDrawerOpen(partialState) : openByDefault) {
        state = openDrawer(state);
      }

      return { ...state,
        type: 'drawer',
        key: "drawer-".concat((0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)())
      };
    },

    getStateForRouteFocus(state, key) {
      const result = router.getStateForRouteFocus(state, key);

      if (openByDefault) {
        return openDrawer(result);
      }

      return closeDrawer(result);
    },

    getStateForAction(state, action, options) {
      switch (action.type) {
        case 'OPEN_DRAWER':
          return openDrawer(state);

        case 'CLOSE_DRAWER':
          return closeDrawer(state);

        case 'TOGGLE_DRAWER':
          if (isDrawerOpen(state)) {
            return closeDrawer(state);
          }

          return openDrawer(state);

        case 'GO_BACK':
          if (openByDefault) {
            if (!isDrawerOpen(state)) {
              return openDrawer(state);
            }
          } else {
            if (isDrawerOpen(state)) {
              return closeDrawer(state);
            }
          }

          return router.getStateForAction(state, action, options);

        default:
          return router.getStateForAction(state, action, options);
      }
    },

    actionCreators: DrawerActions
  };
}
//# sourceMappingURL=DrawerRouter.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/routers/lib/module/StackRouter.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StackActions: () => (/* binding */ StackActions),
/* harmony export */   "default": () => (/* binding */ StackRouter)
/* harmony export */ });
/* harmony import */ var nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nanoid/non-secure/index.js");
/* harmony import */ var _BaseRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/routers/lib/module/BaseRouter.js");


const StackActions = {
  replace(name, params) {
    return {
      type: 'REPLACE',
      payload: {
        name,
        params
      }
    };
  },

  push(name, params) {
    return {
      type: 'PUSH',
      payload: {
        name,
        params
      }
    };
  },

  pop(count = 1) {
    return {
      type: 'POP',
      payload: {
        count
      }
    };
  },

  popToTop() {
    return {
      type: 'POP_TO_TOP'
    };
  }

};
function StackRouter(options) {
  const router = { ..._BaseRouter__WEBPACK_IMPORTED_MODULE_1__["default"],
    type: 'stack',

    getInitialState({
      routeNames,
      routeParamList
    }) {
      const initialRouteName = options.initialRouteName !== undefined && routeNames.includes(options.initialRouteName) ? options.initialRouteName : routeNames[0];
      return {
        stale: false,
        type: 'stack',
        key: "stack-".concat((0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)()),
        index: 0,
        routeNames,
        routes: [{
          key: "".concat(initialRouteName, "-").concat((0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)()),
          name: initialRouteName,
          params: routeParamList[initialRouteName]
        }]
      };
    },

    getRehydratedState(partialState, {
      routeNames,
      routeParamList
    }) {
      let state = partialState;

      if (state.stale === false) {
        return state;
      }

      const routes = state.routes.filter(route => routeNames.includes(route.name)).map(route => ({ ...route,
        key: route.key || "".concat(route.name, "-").concat((0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)()),
        params: routeParamList[route.name] !== undefined ? { ...routeParamList[route.name],
          ...route.params
        } : route.params
      }));

      if (routes.length === 0) {
        const initialRouteName = options.initialRouteName !== undefined ? options.initialRouteName : routeNames[0];
        routes.push({
          key: "".concat(initialRouteName, "-").concat((0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)()),
          name: initialRouteName,
          params: routeParamList[initialRouteName]
        });
      }

      return {
        stale: false,
        type: 'stack',
        key: "stack-".concat((0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)()),
        index: routes.length - 1,
        routeNames,
        routes
      };
    },

    getStateForRouteNamesChange(state, {
      routeNames,
      routeParamList
    }) {
      const routes = state.routes.filter(route => routeNames.includes(route.name));

      if (routes.length === 0) {
        const initialRouteName = options.initialRouteName !== undefined && routeNames.includes(options.initialRouteName) ? options.initialRouteName : routeNames[0];
        routes.push({
          key: "".concat(initialRouteName, "-").concat((0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)()),
          name: initialRouteName,
          params: routeParamList[initialRouteName]
        });
      }

      return { ...state,
        routeNames,
        routes,
        index: Math.min(state.index, routes.length - 1)
      };
    },

    getStateForRouteFocus(state, key) {
      const index = state.routes.findIndex(r => r.key === key);

      if (index === -1 || index === state.index) {
        return state;
      }

      return { ...state,
        index,
        routes: state.routes.slice(0, index + 1)
      };
    },

    getStateForAction(state, action, options) {
      const {
        routeParamList
      } = options;

      switch (action.type) {
        case 'REPLACE':
          {
            const index = action.target === state.key && action.source ? state.routes.findIndex(r => r.key === action.source) : state.index;

            if (index === -1) {
              return null;
            }

            const {
              name,
              key,
              params
            } = action.payload;

            if (!state.routeNames.includes(name)) {
              return null;
            }

            return { ...state,
              routes: state.routes.map((route, i) => i === index ? {
                key: key !== undefined ? key : "".concat(name, "-").concat((0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)()),
                name,
                params: routeParamList[name] !== undefined ? { ...routeParamList[name],
                  ...params
                } : params
              } : route)
            };
          }

        case 'PUSH':
          if (state.routeNames.includes(action.payload.name)) {
            const getId = options.routeGetIdList[action.payload.name];
            const id = getId === null || getId === void 0 ? void 0 : getId({
              params: action.payload.params
            });
            const route = action.payload.name && action.payload.key ? state.routes.find(route => route.name === action.payload.name && route.key === action.payload.key) : id ? state.routes.find(route => route.name === action.payload.name && id === (getId === null || getId === void 0 ? void 0 : getId({
              params: route.params
            }))) : undefined;
            let routes;

            if (route) {
              routes = state.routes.filter(r => r.key !== route.key);
              routes.push({ ...route,
                params: action.payload.params !== undefined ? { ...route.params,
                  ...action.payload.params
                } : route.params
              });
            } else {
              var _action$payload$key;

              routes = [...state.routes, {
                key: (_action$payload$key = action.payload.key) !== null && _action$payload$key !== void 0 ? _action$payload$key : "".concat(action.payload.name, "-").concat((0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)()),
                name: action.payload.name,
                params: routeParamList[action.payload.name] !== undefined ? { ...routeParamList[action.payload.name],
                  ...action.payload.params
                } : action.payload.params
              }];
            }

            return { ...state,
              index: routes.length - 1,
              routes
            };
          }

          return null;

        case 'POP':
          {
            const index = action.target === state.key && action.source ? state.routes.findIndex(r => r.key === action.source) : state.index;

            if (index > 0) {
              const count = Math.max(index - action.payload.count + 1, 1);
              const routes = state.routes.slice(0, count).concat(state.routes.slice(index + 1));
              return { ...state,
                index: routes.length - 1,
                routes
              };
            }

            return null;
          }

        case 'POP_TO_TOP':
          return router.getStateForAction(state, {
            type: 'POP',
            payload: {
              count: state.routes.length - 1
            }
          }, options);

        case 'NAVIGATE':
          if (action.payload.name !== undefined && !state.routeNames.includes(action.payload.name)) {
            return null;
          }

          if (action.payload.key || action.payload.name) {
            // If the route already exists, navigate to that
            let index = -1;
            const getId = // `getId` and `key` can't be used together
            action.payload.key === undefined && action.payload.name !== undefined ? options.routeGetIdList[action.payload.name] : undefined;
            const id = getId === null || getId === void 0 ? void 0 : getId({
              params: action.payload.params
            });

            if (id) {
              index = state.routes.findIndex(route => route.name === action.payload.name && id === (getId === null || getId === void 0 ? void 0 : getId({
                params: route.params
              })));
            } else if (state.routes[state.index].name === action.payload.name && action.payload.key === undefined || state.routes[state.index].key === action.payload.key) {
              index = state.index;
            } else {
              for (let i = state.routes.length - 1; i >= 0; i--) {
                if (state.routes[i].name === action.payload.name && action.payload.key === undefined || state.routes[i].key === action.payload.key) {
                  index = i;
                  break;
                }
              }
            }

            if (index === -1 && action.payload.key && action.payload.name === undefined) {
              return null;
            }

            if (index === -1 && action.payload.name !== undefined) {
              var _action$payload$key2;

              const routes = [...state.routes, {
                key: (_action$payload$key2 = action.payload.key) !== null && _action$payload$key2 !== void 0 ? _action$payload$key2 : "".concat(action.payload.name, "-").concat((0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)()),
                name: action.payload.name,
                params: routeParamList[action.payload.name] !== undefined ? { ...routeParamList[action.payload.name],
                  ...action.payload.params
                } : action.payload.params
              }];
              return { ...state,
                routes,
                index: routes.length - 1
              };
            }

            const route = state.routes[index];
            let params;

            if (action.payload.merge === false) {
              params = routeParamList[route.name] !== undefined ? { ...routeParamList[route.name],
                ...action.payload.params
              } : action.payload.params;
            } else {
              params = action.payload.params ? { ...route.params,
                ...action.payload.params
              } : route.params;
            }

            return { ...state,
              index,
              routes: [...state.routes.slice(0, index), params !== route.params ? { ...route,
                params
              } : state.routes[index]]
            };
          }

          return null;

        case 'GO_BACK':
          if (state.index > 0) {
            return router.getStateForAction(state, {
              type: 'POP',
              payload: {
                count: 1
              },
              target: action.target,
              source: action.source
            }, options);
          }

          return null;

        default:
          return _BaseRouter__WEBPACK_IMPORTED_MODULE_1__["default"].getStateForAction(state, action);
      }
    },

    actionCreators: StackActions
  };
  return router;
}
//# sourceMappingURL=StackRouter.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/routers/lib/module/TabRouter.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabActions: () => (/* binding */ TabActions),
/* harmony export */   "default": () => (/* binding */ TabRouter)
/* harmony export */ });
/* harmony import */ var nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nanoid/non-secure/index.js");
/* harmony import */ var _BaseRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/routers/lib/module/BaseRouter.js");


const TYPE_ROUTE = 'route';
const TabActions = {
  jumpTo(name, params) {
    return {
      type: 'JUMP_TO',
      payload: {
        name,
        params
      }
    };
  }

};

const getRouteHistory = (routes, index, backBehavior, initialRouteName) => {
  const history = [{
    type: TYPE_ROUTE,
    key: routes[index].key
  }];
  let initialRouteIndex;

  switch (backBehavior) {
    case 'order':
      for (let i = index; i > 0; i--) {
        history.unshift({
          type: TYPE_ROUTE,
          key: routes[i - 1].key
        });
      }

      break;

    case 'firstRoute':
      if (index !== 0) {
        history.unshift({
          type: TYPE_ROUTE,
          key: routes[0].key
        });
      }

      break;

    case 'initialRoute':
      initialRouteIndex = routes.findIndex(route => route.name === initialRouteName);
      initialRouteIndex = initialRouteIndex === -1 ? 0 : initialRouteIndex;

      if (index !== initialRouteIndex) {
        history.unshift({
          type: TYPE_ROUTE,
          key: routes[initialRouteIndex].key
        });
      }

      break;

    case 'history':
      // The history will fill up on navigation
      break;
  }

  return history;
};

const changeIndex = (state, index, backBehavior, initialRouteName) => {
  let history;

  if (backBehavior === 'history') {
    const currentKey = state.routes[index].key;
    history = state.history.filter(it => it.type === 'route' ? it.key !== currentKey : false).concat({
      type: TYPE_ROUTE,
      key: currentKey
    });
  } else {
    history = getRouteHistory(state.routes, index, backBehavior, initialRouteName);
  }

  return { ...state,
    index,
    history
  };
};

function TabRouter({
  initialRouteName,
  backBehavior = 'history'
}) {
  const router = { ..._BaseRouter__WEBPACK_IMPORTED_MODULE_1__["default"],
    type: 'tab',

    getInitialState({
      routeNames,
      routeParamList
    }) {
      const index = initialRouteName !== undefined && routeNames.includes(initialRouteName) ? routeNames.indexOf(initialRouteName) : 0;
      const routes = routeNames.map(name => ({
        name,
        key: "".concat(name, "-").concat((0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)()),
        params: routeParamList[name]
      }));
      const history = getRouteHistory(routes, index, backBehavior, initialRouteName);
      return {
        stale: false,
        type: 'tab',
        key: "tab-".concat((0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)()),
        index,
        routeNames,
        history,
        routes
      };
    },

    getRehydratedState(partialState, {
      routeNames,
      routeParamList
    }) {
      var _state$routes, _state$index, _state$history$filter, _state$history;

      let state = partialState;

      if (state.stale === false) {
        return state;
      }

      const routes = routeNames.map(name => {
        const route = state.routes.find(r => r.name === name);
        return { ...route,
          name,
          key: route && route.name === name && route.key ? route.key : "".concat(name, "-").concat((0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)()),
          params: routeParamList[name] !== undefined ? { ...routeParamList[name],
            ...(route ? route.params : undefined)
          } : route ? route.params : undefined
        };
      });
      const index = Math.min(Math.max(routeNames.indexOf((_state$routes = state.routes[(_state$index = state === null || state === void 0 ? void 0 : state.index) !== null && _state$index !== void 0 ? _state$index : 0]) === null || _state$routes === void 0 ? void 0 : _state$routes.name), 0), routes.length - 1);
      const history = (_state$history$filter = (_state$history = state.history) === null || _state$history === void 0 ? void 0 : _state$history.filter(it => routes.find(r => r.key === it.key))) !== null && _state$history$filter !== void 0 ? _state$history$filter : [];
      return changeIndex({
        stale: false,
        type: 'tab',
        key: "tab-".concat((0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)()),
        index,
        routeNames,
        history,
        routes
      }, index, backBehavior, initialRouteName);
    },

    getStateForRouteNamesChange(state, {
      routeNames,
      routeParamList
    }) {
      const routes = routeNames.map(name => state.routes.find(r => r.name === name) || {
        name,
        key: "".concat(name, "-").concat((0,nanoid_non_secure__WEBPACK_IMPORTED_MODULE_0__.nanoid)()),
        params: routeParamList[name]
      });
      const index = Math.max(0, routeNames.indexOf(state.routes[state.index].name));
      let history = state.history.filter( // Type will always be 'route' for tabs, but could be different in a router extending this (e.g. drawer)
      it => it.type !== 'route' || routes.find(r => r.key === it.key));

      if (!history.length) {
        history = getRouteHistory(routes, index, backBehavior, initialRouteName);
      }

      return { ...state,
        history,
        routeNames,
        routes,
        index
      };
    },

    getStateForRouteFocus(state, key) {
      const index = state.routes.findIndex(r => r.key === key);

      if (index === -1 || index === state.index) {
        return state;
      }

      return changeIndex(state, index, backBehavior, initialRouteName);
    },

    getStateForAction(state, action, {
      routeParamList
    }) {
      switch (action.type) {
        case 'JUMP_TO':
        case 'NAVIGATE':
          {
            let index = -1;

            if (action.type === 'NAVIGATE' && action.payload.key) {
              index = state.routes.findIndex(route => route.key === action.payload.key);
            } else {
              index = state.routes.findIndex(route => route.name === action.payload.name);
            }

            if (index === -1) {
              return null;
            }

            return changeIndex({ ...state,
              routes: action.payload.params !== undefined ? state.routes.map((route, i) => {
                if (i !== index) {
                  return route;
                }

                let params;

                if (action.type === 'NAVIGATE' && action.payload.merge === false) {
                  params = routeParamList[route.name] !== undefined ? { ...routeParamList[route.name],
                    ...action.payload.params
                  } : action.payload.params;
                } else {
                  params = action.payload.params ? { ...route.params,
                    ...action.payload.params
                  } : route.params;
                }

                return params !== route.params ? { ...route,
                  params
                } : route;
              }) : state.routes
            }, index, backBehavior, initialRouteName);
          }

        case 'GO_BACK':
          {
            if (state.history.length === 1) {
              return null;
            }

            const previousKey = state.history[state.history.length - 2].key;
            const index = state.routes.findIndex(route => route.key === previousKey);

            if (index === -1) {
              return null;
            }

            return { ...state,
              history: state.history.slice(0, -1),
              index
            };
          }

        default:
          return _BaseRouter__WEBPACK_IMPORTED_MODULE_1__["default"].getStateForAction(state, action);
      }
    },

    shouldActionChangeFocus(action) {
      return action.type === 'NAVIGATE';
    },

    actionCreators: TabActions
  };
  return router;
}
//# sourceMappingURL=TabRouter.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/routers/lib/module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseRouter: () => (/* reexport safe */ _BaseRouter__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   CommonActions: () => (/* reexport module object */ _CommonActions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   DrawerActions: () => (/* reexport safe */ _DrawerRouter__WEBPACK_IMPORTED_MODULE_4__.DrawerActions),
/* harmony export */   DrawerRouter: () => (/* reexport safe */ _DrawerRouter__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   StackActions: () => (/* reexport safe */ _StackRouter__WEBPACK_IMPORTED_MODULE_2__.StackActions),
/* harmony export */   StackRouter: () => (/* reexport safe */ _StackRouter__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   TabActions: () => (/* reexport safe */ _TabRouter__WEBPACK_IMPORTED_MODULE_3__.TabActions),
/* harmony export */   TabRouter: () => (/* reexport safe */ _TabRouter__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _CommonActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@react-navigation/routers/lib/module/CommonActions.js");
/* harmony import */ var _BaseRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/routers/lib/module/BaseRouter.js");
/* harmony import */ var _StackRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-navigation/routers/lib/module/StackRouter.js");
/* harmony import */ var _TabRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@react-navigation/routers/lib/module/TabRouter.js");
/* harmony import */ var _DrawerRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@react-navigation/routers/lib/module/DrawerRouter.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@react-navigation/routers/lib/module/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_5__) if(["default","CommonActions","BaseRouter","StackRouter","StackActions","TabRouter","TabActions","DrawerRouter","DrawerActions"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _types__WEBPACK_IMPORTED_MODULE_5__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@react-navigation/routers/lib/module/types.js":
/***/ (() => {


//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
/***/ ((module) => {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp('(' + token + ')|([^%]+?)', 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return [decodeURIComponent(components.join(''))];
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher) || [];

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher) || [];
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/escape-string-regexp/index.js":
/***/ ((module) => {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};


/***/ }),

/***/ "./node_modules/fast-deep-equal/index.js":
/***/ ((module) => {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/filter-obj/index.js":
/***/ ((module) => {

"use strict";

module.exports = function (obj, predicate) {
	var ret = {};
	var keys = Object.keys(obj);
	var isArr = Array.isArray(predicate);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = obj[key];

		if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
			ret[key] = val;
		}
	}

	return ret;
};


/***/ }),

/***/ "./node_modules/query-string/index.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

const strictUriEncode = __webpack_require__("./node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__("./node_modules/decode-uri-component/index.js");
const splitOnFirst = __webpack_require__("./node_modules/split-on-first/index.js");
const filterObject = __webpack_require__("./node_modules/filter-obj/index.js");

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(query, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof query !== 'string') {
		return ret;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return ret;
	}

	for (const param of query.split('&')) {
		if (param === '') {
			continue;
		}

		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (url, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url_, hash] = splitOnFirst(url, '#');

	return Object.assign(
		{
			url: url_.split('?')[0] || '',
			query: parse(extract(url), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (object, options) => {
	options = Object.assign({
		encode: true,
		strict: true
	}, options);

	const url = removeHash(object.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(object.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, object.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(object.url);
	if (object.fragmentIdentifier) {
		hash = `#${encode(object.fragmentIdentifier, options)}`;
	}

	return `${url}${queryString}${hash}`;
};

exports.pick = (input, filter, options) => {
	options = Object.assign({
		parseFragmentIdentifier: true
	}, options);

	const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
	return exports.stringifyUrl({
		url,
		query: filterObject(query, filter),
		fragmentIdentifier
	}, options);
};

exports.exclude = (input, filter, options) => {
	const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

	return exports.pick(input, exclusionFilter, options);
};


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
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
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
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
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__("./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/split-on-first/index.js":
/***/ ((module) => {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/***/ ((module) => {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ "./node_modules/nanoid/non-secure/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customAlphabet: () => (/* binding */ customAlphabet),
/* harmony export */   nanoid: () => (/* binding */ nanoid)
/* harmony export */ });
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
let customAlphabet = (alphabet, defaultSize = 21) => {
  return (size = defaultSize) => {
    let id = ''
    let i = size
    while (i--) {
      id += alphabet[(Math.random() * alphabet.length) | 0]
    }
    return id
  }
}
let nanoid = (size = 21) => {
  let id = ''
  let i = size
  while (i--) {
    id += urlAlphabet[(Math.random() * 64) | 0]
  }
  return id
}



/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLmI0YmYwNGNlYTNhYzhkZjY5NTRlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUMyQjtBQUNFO0FBQ0U7QUFDSTtBQUNKO0FBQ0E7QUFDVjtBQUNRO0FBQ1I7QUFDVTtBQUNWO0FBQ0o7QUFDTjtBQUNVO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0gsRUFBRSxXQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSw2Q0FBNkMsNkNBQWdCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUJBQWlCLDZDQUFnQixDQUFDLCtEQUFzQjs7QUFFeEQ7QUFDQSxnT0FBZ08sS0FBSztBQUNyTzs7QUFFQSxvRUFBb0UsMERBQVk7QUFDaEYsMEJBQTBCLHlDQUFZO0FBQ3RDLDBCQUEwQix5Q0FBWTtBQUN0QyxpQkFBaUIsOENBQWlCO0FBQ2xDLGlCQUFpQiw4Q0FBaUI7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFQUFFLDhEQUFpQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLEVBQUUsbUVBQXNCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDhDQUFpQjtBQUNyQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkRBQTJELEdBQUcsNkRBQW1CO0FBQ2pGO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCx1QkFBdUIsOENBQWlCO0FBQ3hDOztBQUVBO0FBQ0EsR0FBRztBQUNILDBCQUEwQiw4Q0FBaUI7QUFDM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxrQkFBa0IsNkRBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFQUFFLCtEQUFpQixHQUFHO0FBQzFCLEVBQUUsc0RBQXlCLGVBQWUsZUFBZSx1REFBYTtBQUN0RSx3Q0FBd0MsdURBQWE7QUFDckQ7O0FBRUE7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDJCQUEyQiw4Q0FBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxnQ0FBZ0MseUNBQVk7QUFDNUMsMEJBQTBCLDhDQUFpQjtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCx5QkFBeUIsMENBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsMEJBQTBCLDBDQUFhO0FBQ3ZDO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsdUJBQXVCLHlDQUFZO0FBQ25DLHVCQUF1Qiw4Q0FBaUI7QUFDeEMsa0JBQWtCLDBDQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDJCQUEyQix5Q0FBWTtBQUN2QyxFQUFFLDRDQUFlO0FBQ2pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSw0Q0FBZTtBQUNqQixRQUFRLElBQXFDO0FBQzdDO0FBQ0EsdUJBQXVCLCtEQUFpQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixxQkFBcUI7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsbUNBQW1DLDhDQUFpQjtBQUNwRCxRQUFRLEtBQXFDLEVBQUUsRUFFMUM7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsNkJBQTZCLGdEQUFtQixDQUFDLHFFQUFxQjtBQUN0RTtBQUNBLEdBQUcsZUFBZSxnREFBbUIsQ0FBQyxpRUFBd0I7QUFDOUQ7QUFDQSxHQUFHLGVBQWUsZ0RBQW1CLENBQUMsK0RBQXNCO0FBQzVEO0FBQ0EsR0FBRyxlQUFlLGdEQUFtQixDQUFDLCtEQUFzQjtBQUM1RDtBQUNBLEdBQUcsZUFBZSxnREFBbUIsQ0FBQyw4REFBcUI7O0FBRTNEO0FBQ0E7QUFDQSwyQkFBMkIsZ0RBQW1CLENBQUMsK0RBQXNCO0FBQ3JFO0FBQ0EsS0FBSyxlQUFlLGdEQUFtQixDQUFDLDBEQUFpQjtBQUN6RDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7QUFDRCxpRUFBZSx1QkFBdUIsRUFBQztBQUN2Qzs7Ozs7Ozs7Ozs7Ozs7QUNsVytCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxnREFBbUI7QUFDN0QsaUVBQWUsb0JBQW9CLEVBQUM7QUFDcEM7Ozs7Ozs7Ozs7Ozs7OztBQ1IrQjtBQUMvQjtBQUNPLDRDQUE0QyxnREFBbUI7QUFDdEU7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQSxDQUFDO0FBQ0QsMEJBQTBCLHlDQUFZO0FBQ3RDLGdCQUFnQiwwQ0FBYTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxHQUFHO0FBQ0gsc0JBQXNCLGdEQUFtQjtBQUN6QztBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JDK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxnREFBbUI7QUFDakU7QUFDQTtBQUNBLENBQUM7QUFDRCxpRUFBZSx3QkFBd0IsRUFBQztBQUN4Qzs7Ozs7Ozs7Ozs7Ozs7QUNWK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxnREFBbUI7QUFDMUQsaUVBQWUsaUJBQWlCLEVBQUM7QUFDakM7Ozs7Ozs7Ozs7Ozs7O0FDUCtCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxnREFBbUI7QUFDakUsaUVBQWUsd0JBQXdCLEVBQUM7QUFDeEM7Ozs7Ozs7Ozs7Ozs7O0FDUitCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZ0RBQW1CO0FBQzFELGlFQUFlLGlCQUFpQixFQUFDO0FBQ2pDOzs7Ozs7Ozs7Ozs7OztBQ1ArQjtBQUMvQjtBQUNBLDhFQUE0QixnREFBbUI7QUFDL0M7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBLENBQUMsQ0FBQyxFQUFDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCK0I7QUFDK0I7QUFDZDtBQUNZO0FBQ1I7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDBCQUEwQix5Q0FBWTtBQUN0QyxpQkFBaUIsOENBQWlCO0FBQ2xDO0FBQ0E7QUFDQSxJQUFJLEVBQUUsOERBQWlCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxpQkFBaUIsOENBQWlCO0FBQ2xDO0FBQ0EsR0FBRztBQUNILDBCQUEwQiw4Q0FBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDBCQUEwQiw4Q0FBaUI7QUFDM0M7QUFDQSxlQUFlO0FBQ2YsNERBQTREO0FBQzVEO0FBQ0EsUUFBUTtBQUNSLEtBQUs7QUFDTCxHQUFHO0FBQ0gsdUJBQXVCLHlDQUFZO0FBQ25DLEVBQUUsNENBQWU7QUFDakI7QUFDQSxHQUFHLEdBQUc7O0FBRU4sRUFBRSw0Q0FBZTtBQUNqQix5QkFBeUI7QUFDekIsR0FBRztBQUNILHVCQUF1Qiw4Q0FBaUI7QUFDeEMsa0JBQWtCLDBDQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0JBQXNCLGdEQUFtQixDQUFDLCtEQUFzQjtBQUNoRTtBQUNBLEdBQUcsZUFBZSxnREFBbUIsQ0FBQyw4REFBcUIscUJBQXFCLGdEQUFtQixDQUFDLHdEQUFlO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRywrQ0FBK0MsZ0RBQW1CO0FBQ3JFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNQK0I7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4RUFBNEIsdUNBQVU7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLENBQUMsRUFBQztBQUNIOzs7Ozs7Ozs7Ozs7OztBQzdCK0I7QUFDL0IsNENBQTRDLGdEQUFtQjtBQUMvRCxpRUFBZSxzQkFBc0IsRUFBQztBQUN0Qzs7Ozs7Ozs7Ozs7O0FDSGU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkQ4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JCZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxDQUFDLElBQUk7QUFDTDs7Ozs7Ozs7Ozs7OztBQ3pGZ0U7QUFDakQ7QUFDZjs7QUFFQSxFQUFFLHlFQUE2QjtBQUMvQjtBQUNBLEVBQUUseUVBQTZCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNmNEM7QUFDZ0I7O0FBRTVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3QkFBd0I7QUFDN0MsVUFBVTtBQUNWO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0Msa0VBQXFCLFdBQVc7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLGlFQUFpRTs7QUFFakU7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7OztBQUdWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLG1EQUFxQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLElBQUk7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUF1RCxLQUFLO0FBQ2hFOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7O0FDMU8wQztBQUNFO0FBQ2dCOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Ysa0NBQWtDLGtFQUFxQjtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047OztBQUdBO0FBQ0EsR0FBRyxHQUFHOztBQUVOO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUcsSUFBSTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHFEQUFxRDtBQUMzRDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7O0FBRXJEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxLQUFLO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLElBQUk7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osaUJBQWlCLHVEQUF1RCxLQUFLO0FBQzdFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLDJEQUFNO0FBQy9DLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsMEJBQTBCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE1BQU07QUFDTjtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQiwrQ0FBaUI7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcGYwQztBQUNxQztBQUNGO0FBQ0k7QUFDZDtBQUNVO0FBQ0o7QUFDQTtBQUNkO0FBQ1Y7QUFDWTtBQUNKO0FBQ1k7QUFDSjtBQUNBO0FBQ0k7QUFDb0I7QUFDakU7QUFDeEI7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQSw0Q0FBNEMsa0JBQWtCLGtDQUFrQyxvRUFBb0UsS0FBSyxPQUFPLG9CQUFvQjs7QUFFN0w7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBLElBQUksRUFBRSx5Q0FBWTtBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNILHNCQUFzQiw4Q0FBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFCQSxzQkFBc0IsZ0RBQWdELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCxpQ0FBaUMsa0JBQWtCOztBQUVyUDtBQUNoQjtBQUNmLG1CQUFtQix5Q0FBWSxTQUFTO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDRDQUFlO0FBQ2pCO0FBQ0EsR0FBRztBQUNILFNBQVMseUNBQVk7QUFDckI7O0FBRUE7QUFDQTtBQUNBLE1BQU07OztBQUdOLHdCQUF3QixnREFBbUIsdUJBQXVCO0FBQ2xFLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QitCO0FBQzJCOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGtCQUFrQiw2Q0FBZ0IsQ0FBQyw2REFBb0I7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEIrQjtBQUNLO0FBQzhCO0FBQ1o7QUFDVjtBQUNRO0FBQ1U7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGdDQUFnQywyQ0FBYyxHQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLElBQUksRUFBRSw2Q0FBZ0IsQ0FBQyxpRUFBd0I7QUFDL0Msa0JBQWtCLDBDQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHNCQUFzQiwrREFBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGlCQUFpQiwwREFBYTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixnREFBbUIsQ0FBQyxpRUFBd0I7QUFDeEU7QUFDQTtBQUNBLFNBQVMsZUFBZSxnREFBbUIsQ0FBQywwREFBaUI7QUFDN0Q7QUFDQSxTQUFTLGVBQWUsZ0RBQW1CLENBQUMsK0RBQXNCO0FBQ2xFO0FBQ0EsU0FBUyxlQUFlLGdEQUFtQixDQUFDLGtEQUFTO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFIK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNlO0FBQ2Ysb0JBQW9CLHlDQUFZO0FBQ2hDLEVBQUUsNENBQWU7QUFDakI7QUFDQSxHQUFHO0FBQ0gsb0JBQW9CLHlDQUFZLEdBQUc7QUFDbkMsaUJBQWlCLDhDQUFpQjtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGVBQWUsOENBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMsMENBQWE7QUFDdEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxRytCO0FBQ2E7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZixxQkFBcUIsMERBQWE7O0FBRWxDO0FBQ0EsZ1BBQWdQLHNDQUFzQyx3QkFBd0I7QUFDOVM7QUFDQTs7QUFFQSxFQUFFLDRDQUFlO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxJQUFxQztBQUMvQzs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDJQQUEyUCx1Q0FBdUMsNEZBQTRGLCtCQUErQix5QkFBeUIsVUFBVSxvQkFBb0I7QUFDcGQsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRitCO0FBQ3FCOztBQUVwRDtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQSxDQUFDO0FBQ0QscUJBQXFCLDZDQUFnQixDQUFDLDBEQUFpQjtBQUN2RCw0QkFBNEIseUNBQVk7QUFDeEMsMkRBQTJEO0FBQzNEOztBQUVBLEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUUsNENBQWU7QUFDakI7QUFDQSxtREFBbUQ7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUQrQjtBQUNtQzs7QUFFbEU7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxJQUFJLEVBQUUsNkNBQWdCLENBQUMsaUVBQXdCO0FBQy9DLG1CQUFtQiw4Q0FBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLDRDQUFlO0FBQ2pCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFDK0I7QUFDRTtBQUNXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YscUJBQXFCLDBEQUFhO0FBQ2xDLG9DQUFvQywrQ0FBUTtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsZ0RBQW1CO0FBQ3JCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqQytCOztBQUUvQjtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQSxJQUFJLEVBQUUseUNBQVk7QUFDbEIsZ0JBQWdCO0FBQ2hCO0FBQ0EsR0FBRztBQUNILDJCQUEyQiw4Q0FBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekIrQjtBQUNxQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2YscUJBQXFCLDZDQUFnQixDQUFDLDBEQUFpQjs7QUFFdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakIrQjtBQUNlO0FBQ1k7QUFDSTtBQUNBO0FBQ0k7QUFDcEM7QUFDWTtBQUNNO0FBQ1U7QUFDWjtBQUNZO0FBQ2xCO0FBQ007QUFDRTtBQUNJO0FBQ2tDO0FBQ3hCO0FBQ2xCO0FBQ1E7QUFDRjtBQUNSO0FBQ0UsQ0FBQztBQUM3Qzs7QUFFQSxzREFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwyQ0FBYztBQUNoQzs7QUFFQSxzQkFBc0IsaURBQW9CO0FBQzFDLHlCQUF5QiwrQ0FBTTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QiwyQ0FBYztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkhBQTJILGlEQUFvQjtBQUMvSSxHQUFHOztBQUVILE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLDREQUFrQjtBQUMxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZJQUE2SSx3QkFBd0I7QUFDcks7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdlO0FBQ2YsdUJBQXVCLGlFQUFvQjtBQUMzQyxnQkFBZ0IsNkNBQWdCLENBQUMsK0RBQXNCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSSxFQUFFLHlDQUFZLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0EsTUFBTTtBQUNOLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLHlGQUF5RjtBQUN6RjtBQUNBLE1BQU07QUFDTjtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQSxHQUFHLEtBQUs7O0FBRVI7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qiw4Q0FBaUI7QUFDeEMsNkJBQTZCLDhDQUFpQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksRUFBRSw2Q0FBZ0IsQ0FBQywrREFBc0I7QUFDN0MseURBQXlELDBDQUFhO0FBQ3RFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLDBEQUFZO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsa0NBQWtDLHlDQUFZO0FBQzlDLEVBQUUsNENBQWU7QUFDakI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSw2REFBbUI7QUFDbEMsTUFBTTtBQUNOO0FBQ0E7QUFDQSxlQUFlLGdFQUFzQjtBQUNyQyxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLEVBQUUsK0RBQWlCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHO0FBQ047QUFDQTs7QUFFQTtBQUNBLEVBQUUsNENBQWU7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxPQUFPO0FBQ1AsR0FBRyxPQUFPO0FBQ1Y7QUFDQTs7QUFFQSw4QkFBOEIseUNBQVk7QUFDMUM7QUFDQSxtQkFBbUIsOENBQWlCO0FBQ3BDO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0JBQWtCLDREQUFlO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0gsRUFBRSw0REFBYztBQUNoQjtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFQUFFLCtEQUFpQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLEVBQUUsb0VBQXNCO0FBQzVCLG1CQUFtQix5REFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSCx1QkFBdUIsNkRBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gscUJBQXFCLGtFQUFvQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLGdGQUFrQztBQUNwQztBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsMkRBQWE7QUFDZjtBQUNBO0FBQ0EsR0FBRztBQUNILHNCQUFzQiwyREFBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLDhEQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsNEJBQTRCLHlEQUFZLENBQUMsaUVBQXdCO0FBQ2pFO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFaK0I7QUFDMkI7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMENBQWE7QUFDN0I7QUFDQSxHQUFHO0FBQ0g7QUFDQSxvQkFBb0I7QUFDcEIsT0FBTyxzREFBYTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8sSUFBSTtBQUNYLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEYrQjtBQUMyQjtBQUNOO0FBQ1U7QUFDbEIsQ0FBQztBQUM3Qzs7QUFFQSxxREFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCw0QkFBNEIsNkNBQWdCLENBQUMsK0RBQXNCO0FBQ25FLGtDQUFrQyw2Q0FBZ0IsQ0FBQywwREFBaUI7QUFDcEUsU0FBUywwQ0FBYTtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCLFNBQVMsc0RBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLElBQUk7QUFDVCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDZEQUFvQjtBQUNuRTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1RCtCO0FBQ2E7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLHFCQUFxQiwwREFBYSxJQUFJO0FBQ3RDOztBQUVBLHdCQUF3QiwyQ0FBYyx5Q0FBeUM7O0FBRS9FLHNCQUFzQix5Q0FBWTtBQUNsQyxFQUFFLDRDQUFlO0FBQ2pCO0FBQ0EsR0FBRztBQUNILEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQitCO0FBQ21DO0FBQ2E7O0FBRS9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFQUFFLDZDQUFnQixDQUFDLGlFQUF3QjtBQUMvQyxpQ0FBaUMseUNBQVk7QUFDN0MsRUFBRSw0Q0FBZTtBQUNqQjtBQUNBLEdBQUc7QUFDSCxtQkFBbUIsOENBQWlCO0FBQ3BDLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0RkFBNEY7QUFDNUY7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qix3RUFBbUI7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR04sNkNBQTZDLFFBQVE7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsRUFBRSwrREFBa0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHK0I7QUFDbUM7QUFDSjtBQUNwQjtBQUMzQjtBQUNmO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksRUFBRSw2Q0FBZ0IsQ0FBQyxpRUFBd0I7QUFDL0MsZ0JBQWdCLDZDQUFnQixDQUFDLCtEQUFzQjtBQUN2RDtBQUNBLDZCQUE2Qiw4Q0FBaUI7QUFDOUMsOEJBQThCOztBQUU5QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLEtBQUs7O0FBRUwsUUFBUSx5REFBWTtBQUNwQjtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsNENBQWU7QUFDakI7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQytCO0FBQ21DO0FBQ0o7QUFDOUQ7QUFDTztBQUNQOztBQUVBLDREQUE0RDs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksRUFBRSw2Q0FBZ0IsQ0FBQyxpRUFBd0I7QUFDL0MsZ0JBQWdCLDZDQUFnQixDQUFDLCtEQUFzQjtBQUN2RDtBQUNBLEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkUrQjtBQUNtQzs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksRUFBRSw2Q0FBZ0IsQ0FBQyxpRUFBd0I7QUFDL0MsU0FBUyw4Q0FBaUI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QitCO0FBQytCO0FBQ0k7QUFDbkQ7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QscUJBQXFCLHlDQUFZO0FBQ2pDLHFDQUFxQyx5Q0FBWSxHQUFHO0FBQ3BEO0FBQ0E7QUFDQSxJQUFJLEVBQUUsNkNBQWdCLENBQUMsaUVBQXdCO0FBQy9DO0FBQ0E7QUFDQSxJQUFJLEVBQUUsNkNBQWdCLENBQUMsK0RBQXNCO0FBQzdDLGdDQUFnQyw4Q0FBaUI7QUFDakQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNJQUFzSTtBQUN0STtBQUNBLEdBQUc7QUFDSCxFQUFFLDRDQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxpQ0FBaUMsOENBQWlCO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQSxnT0FBZ087O0FBRWhPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsNEJBQTRCLDhDQUFpQjtBQUM3Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNILEVBQUUsNENBQWU7QUFDakI7QUFDQSxHQUFHO0FBQ0gsMkJBQTJCLDhDQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRitCO0FBQ1k7QUFDc0I7QUFDakU7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixnQkFBZ0IsMkNBQWMsT0FBTyx5REFBTTtBQUMzQyxvQkFBb0IsNkNBQWdCLENBQUMsMEVBQXNCOztBQUUzRDtBQUNBO0FBQ0E7O0FBRUEsRUFBRSw0Q0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFCK0I7QUFDK0I7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLGdCQUFnQiw2Q0FBZ0IsQ0FBQywrREFBc0I7O0FBRXZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pCK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0EsZ0JBQWdCLDBDQUFhO0FBQzdCO0FBQ0EsR0FBRzs7QUFFSCxNQUFNLEtBQXFDLEVBQUUsRUFHMUM7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEQrQjtBQUMvQjtBQUNPLDJDQUEyQyxnREFBbUI7QUFDckU7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLElBQUksRUFBRSw2Q0FBZ0I7QUFDdEI7QUFDQSxFQUFFLDRDQUFlO0FBQ2pCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUIrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLG1CQUFtQix5Q0FBWTtBQUMvQiwwQkFBMEIseUNBQVk7QUFDdEMsdUJBQXVCLHlDQUFZO0FBQ25DLEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QywyQ0FBYztBQUMxRCxtQkFBbUIsOENBQWlCO0FBQ3BDLG1CQUFtQiw4Q0FBaUI7QUFDcEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx5QkFBeUIsOENBQWlCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSCx1QkFBdUIsOENBQWlCO0FBQ3hDO0FBQ0E7QUFDQSxNQUFNO0FBQ047OztBQUdBO0FBQ0EsR0FBRyxPQUFPO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxnREFBbUI7QUFDckI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9EK0I7QUFDL0Isb0NBQW9DLGdEQUFtQjtBQUN2RDtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLGNBQWMsRUFBQztBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLHNCQUFzQixzRUFBc0UsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELGlDQUFpQyxrQkFBa0I7QUFDN0o7QUFDOUc7QUFDZTtBQUNJO0FBQ0U7QUFDUjtBQUNNO0FBQ1o7QUFDRTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJLDBFQUFrQjtBQUN0QjtBQUNBLHVCQUF1Qix5Q0FBWTtBQUNuQyxFQUFFLDBEQUFhO0FBQ2YsRUFBRSw2REFBZ0I7QUFDbEI7QUFDQTtBQUNBLElBQUksRUFBRSx1REFBVTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4R0FBOEcsb0VBQWdCO0FBQzlILDhHQUE4RyxvRUFBZ0I7QUFDOUgsa0hBQWtILHNFQUFrQjtBQUNwSTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNILHFDQUFxQyx3REFBVztBQUNoRCxFQUFFLHNEQUF5QjtBQUMzQix5QkFBeUIsMENBQWE7QUFDdEM7QUFDQSxHQUFHO0FBQ0g7QUFDQSxxQkFBcUIseUNBQVk7QUFDakMsRUFBRSw0Q0FBZTtBQUNqQjtBQUNBLEdBQUc7QUFDSCxFQUFFLDRDQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQW1CLENBQUMsdURBQWM7QUFDeEQ7QUFDQSxHQUFHLGVBQWUsZ0RBQW1CLENBQUMsOERBQWE7QUFDbkQ7QUFDQSxHQUFHLGVBQWUsZ0RBQW1CLENBQUMsMkVBQXVCLGFBQWE7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHlDQUF5Qyw2Q0FBZ0I7QUFDekQsaUVBQWUsbUJBQW1CLEVBQUM7QUFDbkM7Ozs7Ozs7Ozs7Ozs7O0FDcEcrQjtBQUMvQixtQ0FBbUMsZ0RBQW1CO0FBQ3RELGlFQUFlLGFBQWEsRUFBQztBQUM3Qjs7Ozs7Ozs7Ozs7OztBQ0gyQztBQUM1QjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsOEJBQThCLFFBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsaUJBQWlCLHlEQUFNOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSx5SkFBeUoseURBQU07O0FBRS9KO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0Es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RUFBRSwyRkFBeUQ7QUFDM0Q7Ozs7Ozs7OztBQ05hOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDckJhO0FBQ2IsNkVBQTZFLDJDQUEyQzs7Ozs7Ozs7Ozs7Ozs7QUNEeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNpQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUvbGliL21vZHVsZS9CYXNlTmF2aWdhdGlvbkNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9jb3JlL2xpYi9tb2R1bGUvQ3VycmVudFJlbmRlckNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vY29yZS9saWIvbW9kdWxlL0Vuc3VyZVNpbmdsZU5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9jb3JlL2xpYi9tb2R1bGUvTmF2aWdhdGlvbkJ1aWxkZXJDb250ZXh0LmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUvbGliL21vZHVsZS9OYXZpZ2F0aW9uQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9jb3JlL2xpYi9tb2R1bGUvTmF2aWdhdGlvbkhlbHBlcnNDb250ZXh0LmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUvbGliL21vZHVsZS9OYXZpZ2F0aW9uUm91dGVDb250ZXh0LmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUvbGliL21vZHVsZS9OYXZpZ2F0aW9uU3RhdGVDb250ZXh0LmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUvbGliL21vZHVsZS9TY2VuZVZpZXcuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vY29yZS9saWIvbW9kdWxlL1NjcmVlbi5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9jb3JlL2xpYi9tb2R1bGUvU3RhdGljQ29udGFpbmVyLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUvbGliL21vZHVsZS9VbmhhbmRsZWRBY3Rpb25Db250ZXh0LmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUvbGliL21vZHVsZS9jaGVja0xlZ2FjeVBhdGhDb25maWcuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vY29yZS9saWIvbW9kdWxlL2NoZWNrU2VyaWFsaXphYmxlLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUvbGliL21vZHVsZS9jcmVhdGVOYXZpZ2F0b3JGYWN0b3J5LmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUvbGliL21vZHVsZS9nZXRBY3Rpb25Gcm9tU3RhdGUuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vY29yZS9saWIvbW9kdWxlL2dldEZvY3VzZWRSb3V0ZU5hbWVGcm9tUm91dGUuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vY29yZS9saWIvbW9kdWxlL2dldFBhdGhGcm9tU3RhdGUuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vY29yZS9saWIvbW9kdWxlL2dldFN0YXRlRnJvbVBhdGguanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vY29yZS9saWIvbW9kdWxlL2luZGV4LmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUvbGliL21vZHVsZS9pc0FycmF5RXF1YWwuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vY29yZS9saWIvbW9kdWxlL3R5cGVzLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUvbGliL21vZHVsZS91c2VDaGlsZExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9jb3JlL2xpYi9tb2R1bGUvdXNlQ29tcG9uZW50LmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUvbGliL21vZHVsZS91c2VDdXJyZW50UmVuZGVyLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUvbGliL21vZHVsZS91c2VEZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9jb3JlL2xpYi9tb2R1bGUvdXNlRXZlbnRFbWl0dGVyLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUvbGliL21vZHVsZS91c2VGb2N1c0VmZmVjdC5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9jb3JlL2xpYi9tb2R1bGUvdXNlRm9jdXNFdmVudHMuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vY29yZS9saWIvbW9kdWxlL3VzZUZvY3VzZWRMaXN0ZW5lcnNDaGlsZHJlbkFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vY29yZS9saWIvbW9kdWxlL3VzZUlzRm9jdXNlZC5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9jb3JlL2xpYi9tb2R1bGUvdXNlS2V5ZWRDaGlsZExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9jb3JlL2xpYi9tb2R1bGUvdXNlTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9jb3JlL2xpYi9tb2R1bGUvdXNlTmF2aWdhdGlvbkJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vY29yZS9saWIvbW9kdWxlL3VzZU5hdmlnYXRpb25DYWNoZS5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9jb3JlL2xpYi9tb2R1bGUvdXNlTmF2aWdhdGlvbkhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vY29yZS9saWIvbW9kdWxlL3VzZU5hdmlnYXRpb25TdGF0ZS5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9jb3JlL2xpYi9tb2R1bGUvdXNlT25BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vY29yZS9saWIvbW9kdWxlL3VzZU9uR2V0U3RhdGUuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vY29yZS9saWIvbW9kdWxlL3VzZU9uUHJldmVudFJlbW92ZS5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9jb3JlL2xpYi9tb2R1bGUvdXNlT25Sb3V0ZUZvY3VzLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUvbGliL21vZHVsZS91c2VPcHRpb25zR2V0dGVycy5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9jb3JlL2xpYi9tb2R1bGUvdXNlUmVnaXN0ZXJOYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vY29yZS9saWIvbW9kdWxlL3VzZVJvdXRlLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUvbGliL21vZHVsZS91c2VSb3V0ZUNhY2hlLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUvbGliL21vZHVsZS91c2VTY2hlZHVsZVVwZGF0ZS5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9jb3JlL2xpYi9tb2R1bGUvdXNlU3luY1N0YXRlLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL25hdGl2ZS9saWIvbW9kdWxlL0xpbmtpbmdDb250ZXh0LmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL25hdGl2ZS9saWIvbW9kdWxlL05hdmlnYXRpb25Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vbmF0aXZlL2xpYi9tb2R1bGUvU2VydmVyQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9uYXRpdmUvbGliL21vZHVsZS9jcmVhdGVNZW1vcnlIaXN0b3J5LmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL25hdGl2ZS9saWIvbW9kdWxlL3RoZW1pbmcvRGVmYXVsdFRoZW1lLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL25hdGl2ZS9saWIvbW9kdWxlL3RoZW1pbmcvVGhlbWVDb250ZXh0LmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL25hdGl2ZS9saWIvbW9kdWxlL3RoZW1pbmcvVGhlbWVQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9uYXRpdmUvbGliL21vZHVsZS91c2VCYWNrQnV0dG9uLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL25hdGl2ZS9saWIvbW9kdWxlL3VzZURvY3VtZW50VGl0bGUuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlYWN0LW5hdmlnYXRpb24vbmF0aXZlL2xpYi9tb2R1bGUvdXNlTGlua2luZy5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9uYXRpdmUvbGliL21vZHVsZS91c2VUaGVuYWJsZS5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9yb3V0ZXJzL2xpYi9tb2R1bGUvQmFzZVJvdXRlci5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9yb3V0ZXJzL2xpYi9tb2R1bGUvQ29tbW9uQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9yb3V0ZXJzL2xpYi9tb2R1bGUvRHJhd2VyUm91dGVyLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL3JvdXRlcnMvbGliL21vZHVsZS9TdGFja1JvdXRlci5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9yb3V0ZXJzL2xpYi9tb2R1bGUvVGFiUm91dGVyLmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1uYXZpZ2F0aW9uL3JvdXRlcnMvbGliL21vZHVsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbmF2aWdhdGlvbi9yb3V0ZXJzL2xpYi9tb2R1bGUvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvZGVjb2RlLXVyaS1jb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvZXNjYXBlLXN0cmluZy1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvZmFzdC1kZWVwLWVxdWFsL2luZGV4LmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL2ZpbHRlci1vYmovaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9ub2RlX21vZHVsZXMvcXVlcnktc3RyaW5nL2luZGV4LmpzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9zcGxpdC1vbi1maXJzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9zdHJpY3QtdXJpLWVuY29kZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9uYW5vaWQvbm9uLXNlY3VyZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb21tb25BY3Rpb25zIH0gZnJvbSAnQHJlYWN0LW5hdmlnYXRpb24vcm91dGVycyc7XG5pbXBvcnQgRW5zdXJlU2luZ2xlTmF2aWdhdG9yIGZyb20gJy4vRW5zdXJlU2luZ2xlTmF2aWdhdG9yJztcbmltcG9ydCBVbmhhbmRsZWRBY3Rpb25Db250ZXh0IGZyb20gJy4vVW5oYW5kbGVkQWN0aW9uQ29udGV4dCc7XG5pbXBvcnQgTmF2aWdhdGlvbkJ1aWxkZXJDb250ZXh0IGZyb20gJy4vTmF2aWdhdGlvbkJ1aWxkZXJDb250ZXh0JztcbmltcG9ydCBOYXZpZ2F0aW9uU3RhdGVDb250ZXh0IGZyb20gJy4vTmF2aWdhdGlvblN0YXRlQ29udGV4dCc7XG5pbXBvcnQgTmF2aWdhdGlvblJvdXRlQ29udGV4dCBmcm9tICcuL05hdmlnYXRpb25Sb3V0ZUNvbnRleHQnO1xuaW1wb3J0IE5hdmlnYXRpb25Db250ZXh0IGZyb20gJy4vTmF2aWdhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHsgU2NoZWR1bGVVcGRhdGVDb250ZXh0IH0gZnJvbSAnLi91c2VTY2hlZHVsZVVwZGF0ZSc7XG5pbXBvcnQgdXNlQ2hpbGRMaXN0ZW5lcnMgZnJvbSAnLi91c2VDaGlsZExpc3RlbmVycyc7XG5pbXBvcnQgdXNlS2V5ZWRDaGlsZExpc3RlbmVycyBmcm9tICcuL3VzZUtleWVkQ2hpbGRMaXN0ZW5lcnMnO1xuaW1wb3J0IHVzZU9wdGlvbnNHZXR0ZXJzIGZyb20gJy4vdXNlT3B0aW9uc0dldHRlcnMnO1xuaW1wb3J0IHVzZUV2ZW50RW1pdHRlciBmcm9tICcuL3VzZUV2ZW50RW1pdHRlcic7XG5pbXBvcnQgdXNlU3luY1N0YXRlIGZyb20gJy4vdXNlU3luY1N0YXRlJztcbmltcG9ydCBjaGVja1NlcmlhbGl6YWJsZSBmcm9tICcuL2NoZWNrU2VyaWFsaXphYmxlJztcbmNvbnN0IE5PVF9JTklUSUFMSVpFRF9FUlJPUiA9IFwiVGhlICduYXZpZ2F0aW9uJyBvYmplY3QgaGFzbid0IGJlZW4gaW5pdGlhbGl6ZWQgeWV0LiBUaGlzIG1pZ2h0IGhhcHBlbiBpZiB5b3UgZG9uJ3QgaGF2ZSBhIG5hdmlnYXRvciBtb3VudGVkLCBvciBpZiB0aGUgbmF2aWdhdG9yIGhhc24ndCBmaW5pc2hlZCBtb3VudGluZy4gU2VlIGh0dHBzOi8vcmVhY3RuYXZpZ2F0aW9uLm9yZy9kb2NzLzUueC9uYXZpZ2F0aW5nLXdpdGhvdXQtbmF2aWdhdGlvbi1wcm9wI2hhbmRsaW5nLWluaXRpYWxpemF0aW9uIGZvciBtb3JlIGRldGFpbHMuXCI7XG5jb25zdCBzZXJpYWxpemFibGVXYXJuaW5ncyA9IFtdO1xuXG50cnkge1xuICAvKipcbiAgICogTWlncmF0aW9uIGluc3RydWN0aW9ucyBmb3IgcmVtb3ZhbCBvZiBkZXZ0b29scyBmcm9tIGNvcmVcbiAgICovXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbG9iYWwsICdSRUFDVF9OQVZJR0FUSU9OX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9JTlRFR1JBVElPTl9FTkFCTEVEJywge1xuICAgIHNldChfKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJSZWR1eCBkZXZ0b29scyBleHRlbnNpb24gaW50ZWdyYXRpb24gY2FuIGJlIGVuYWJsZWQgd2l0aCB0aGUgJ0ByZWFjdC1uYXZpZ2F0aW9uL2RldnRvb2xzJyBwYWNrYWdlLiBGb3IgbW9yZSBkZXRhaWxzLCBzZWUgaHR0cHM6Ly9yZWFjdG5hdmlnYXRpb24ub3JnL2RvY3MvNS54L2RldnRvb2xzXCIpO1xuICAgIH1cblxuICB9KTtcbn0gY2F0Y2ggKGUpIHsvLyBJZ25vcmVcbn1cbi8qKlxuICogUmVtb3ZlIGBrZXlgIGFuZCBgcm91dGVOYW1lc2AgZnJvbSB0aGUgc3RhdGUgb2JqZWN0cyByZWN1cnNpdmVseSB0byBnZXQgcGFydGlhbCBzdGF0ZS5cbiAqXG4gKiBAcGFyYW0gc3RhdGUgSW5pdGlhbCBzdGF0ZSBvYmplY3QuXG4gKi9cblxuXG5jb25zdCBnZXRQYXJ0aWFsU3RhdGUgPSBzdGF0ZSA9PiB7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblxuXG4gIGNvbnN0IHtcbiAgICBrZXksXG4gICAgcm91dGVOYW1lcyxcbiAgICAuLi5wYXJ0aWFsU3RhdGVcbiAgfSA9IHN0YXRlO1xuICByZXR1cm4geyAuLi5wYXJ0aWFsU3RhdGUsXG4gICAgc3RhbGU6IHRydWUsXG4gICAgcm91dGVzOiBzdGF0ZS5yb3V0ZXMubWFwKHJvdXRlID0+IHtcbiAgICAgIGlmIChyb3V0ZS5zdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucm91dGUsXG4gICAgICAgIHN0YXRlOiBnZXRQYXJ0aWFsU3RhdGUocm91dGUuc3RhdGUpXG4gICAgICB9O1xuICAgIH0pXG4gIH07XG59O1xuLyoqXG4gKiBDb250YWluZXIgY29tcG9uZW50IHdoaWNoIGhvbGRzIHRoZSBuYXZpZ2F0aW9uIHN0YXRlLlxuICogVGhpcyBzaG91bGQgYmUgcmVuZGVyZWQgYXQgdGhlIHJvb3Qgd3JhcHBpbmcgdGhlIHdob2xlIGFwcC5cbiAqXG4gKiBAcGFyYW0gcHJvcHMuaW5pdGlhbFN0YXRlIEluaXRpYWwgc3RhdGUgb2JqZWN0IGZvciB0aGUgbmF2aWdhdGlvbiB0cmVlLlxuICogQHBhcmFtIHByb3BzLm9uU3RhdGVDaGFuZ2UgQ2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIHdpdGggdGhlIGxhdGVzdCBuYXZpZ2F0aW9uIHN0YXRlIHdoZW4gaXQgY2hhbmdlcy5cbiAqIEBwYXJhbSBwcm9wcy5jaGlsZHJlbiBDaGlsZCBlbGVtZW50cyB0byByZW5kZXIgdGhlIGNvbnRlbnQuXG4gKiBAcGFyYW0gcHJvcHMucmVmIFJlZiBvYmplY3Qgd2hpY2ggcmVmZXJzIHRvIHRoZSBuYXZpZ2F0aW9uIG9iamVjdCBjb250YWluaW5nIGhlbHBlciBtZXRob2RzLlxuICovXG5cblxuY29uc3QgQmFzZU5hdmlnYXRpb25Db250YWluZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBCYXNlTmF2aWdhdGlvbkNvbnRhaW5lcih7XG4gIGluaXRpYWxTdGF0ZSxcbiAgb25TdGF0ZUNoYW5nZSxcbiAgb25VbmhhbmRsZWRBY3Rpb24sXG4gIGluZGVwZW5kZW50LFxuICBjaGlsZHJlblxufSwgcmVmKSB7XG4gIGNvbnN0IHBhcmVudCA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvblN0YXRlQ29udGV4dCk7XG5cbiAgaWYgKCFwYXJlbnQuaXNEZWZhdWx0ICYmICFpbmRlcGVuZGVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkxvb2tzIGxpa2UgeW91IGhhdmUgbmVzdGVkIGEgJ05hdmlnYXRpb25Db250YWluZXInIGluc2lkZSBhbm90aGVyLiBOb3JtYWxseSB5b3UgbmVlZCBvbmx5IG9uZSBjb250YWluZXIgYXQgdGhlIHJvb3Qgb2YgdGhlIGFwcCwgc28gdGhpcyB3YXMgcHJvYmFibHkgYW4gZXJyb3IuIElmIHRoaXMgd2FzIGludGVudGlvbmFsLCBwYXNzICdpbmRlcGVuZGVudD17dHJ1ZX0nIGV4cGxpY2l0ZWx5LiBOb3RlIHRoYXQgdGhpcyB3aWxsIG1ha2UgdGhlIGNoaWxkIG5hdmlnYXRvcnMgZGlzY29ubmVjdGVkIGZyb20gdGhlIHBhcmVudCBhbmQgeW91IHdvbid0IGJlIGFibGUgdG8gbmF2aWdhdGUgYmV0d2VlbiB0aGVtLlwiKTtcbiAgfVxuXG4gIGNvbnN0IFtzdGF0ZSwgZ2V0U3RhdGUsIHNldFN0YXRlLCBzY2hlZHVsZVVwZGF0ZSwgZmx1c2hVcGRhdGVzXSA9IHVzZVN5bmNTdGF0ZSgoKSA9PiBnZXRQYXJ0aWFsU3RhdGUoaW5pdGlhbFN0YXRlID09IG51bGwgPyB1bmRlZmluZWQgOiBpbml0aWFsU3RhdGUpKTtcbiAgY29uc3QgaXNGaXJzdE1vdW50UmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xuICBjb25zdCBuYXZpZ2F0b3JLZXlSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgY29uc3QgZ2V0S2V5ID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4gbmF2aWdhdG9yS2V5UmVmLmN1cnJlbnQsIFtdKTtcbiAgY29uc3Qgc2V0S2V5ID0gUmVhY3QudXNlQ2FsbGJhY2soa2V5ID0+IHtcbiAgICBuYXZpZ2F0b3JLZXlSZWYuY3VycmVudCA9IGtleTtcbiAgfSwgW10pO1xuICBjb25zdCB7XG4gICAgbGlzdGVuZXJzLFxuICAgIGFkZExpc3RlbmVyXG4gIH0gPSB1c2VDaGlsZExpc3RlbmVycygpO1xuICBjb25zdCB7XG4gICAga2V5ZWRMaXN0ZW5lcnMsXG4gICAgYWRkS2V5ZWRMaXN0ZW5lclxuICB9ID0gdXNlS2V5ZWRDaGlsZExpc3RlbmVycygpO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gYWN0aW9uID0+IHtcbiAgICBpZiAobGlzdGVuZXJzLmZvY3VzWzBdID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihOT1RfSU5JVElBTElaRURfRVJST1IpO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mb2N1c1swXShuYXZpZ2F0aW9uID0+IG5hdmlnYXRpb24uZGlzcGF0Y2goYWN0aW9uKSk7XG4gIH07XG5cbiAgY29uc3QgY2FuR29CYWNrID0gKCkgPT4ge1xuICAgIGlmIChsaXN0ZW5lcnMuZm9jdXNbMF0gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIHJlc3VsdCxcbiAgICAgIGhhbmRsZWRcbiAgICB9ID0gbGlzdGVuZXJzLmZvY3VzWzBdKG5hdmlnYXRpb24gPT4gbmF2aWdhdGlvbi5jYW5Hb0JhY2soKSk7XG5cbiAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXNldFJvb3QgPSBSZWFjdC51c2VDYWxsYmFjayhzdGF0ZSA9PiB7XG4gICAgdmFyIF9zdGF0ZSRrZXksIF9rZXllZExpc3RlbmVycyRnZXRTdCwgX2tleWVkTGlzdGVuZXJzJGdldFN0MjtcblxuICAgIGNvbnN0IHRhcmdldCA9IChfc3RhdGUka2V5ID0gc3RhdGUgPT09IG51bGwgfHwgc3RhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0YXRlLmtleSkgIT09IG51bGwgJiYgX3N0YXRlJGtleSAhPT0gdm9pZCAwID8gX3N0YXRlJGtleSA6IChfa2V5ZWRMaXN0ZW5lcnMkZ2V0U3QgPSAoX2tleWVkTGlzdGVuZXJzJGdldFN0MiA9IGtleWVkTGlzdGVuZXJzLmdldFN0YXRlKS5yb290KSA9PT0gbnVsbCB8fCBfa2V5ZWRMaXN0ZW5lcnMkZ2V0U3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9rZXllZExpc3RlbmVycyRnZXRTdC5jYWxsKF9rZXllZExpc3RlbmVycyRnZXRTdDIpLmtleTtcblxuICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKE5PVF9JTklUSUFMSVpFRF9FUlJPUik7XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZvY3VzWzBdKG5hdmlnYXRpb24gPT4gbmF2aWdhdGlvbi5kaXNwYXRjaCh7IC4uLkNvbW1vbkFjdGlvbnMucmVzZXQoc3RhdGUpLFxuICAgICAgdGFyZ2V0XG4gICAgfSkpO1xuICB9LCBba2V5ZWRMaXN0ZW5lcnMuZ2V0U3RhdGUsIGxpc3RlbmVycy5mb2N1c10pO1xuICBjb25zdCBnZXRSb290U3RhdGUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgdmFyIF9rZXllZExpc3RlbmVycyRnZXRTdDMsIF9rZXllZExpc3RlbmVycyRnZXRTdDQ7XG5cbiAgICByZXR1cm4gKF9rZXllZExpc3RlbmVycyRnZXRTdDMgPSAoX2tleWVkTGlzdGVuZXJzJGdldFN0NCA9IGtleWVkTGlzdGVuZXJzLmdldFN0YXRlKS5yb290KSA9PT0gbnVsbCB8fCBfa2V5ZWRMaXN0ZW5lcnMkZ2V0U3QzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfa2V5ZWRMaXN0ZW5lcnMkZ2V0U3QzLmNhbGwoX2tleWVkTGlzdGVuZXJzJGdldFN0NCk7XG4gIH0sIFtrZXllZExpc3RlbmVycy5nZXRTdGF0ZV0pO1xuICBjb25zdCBnZXRDdXJyZW50Um91dGUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbGV0IHN0YXRlID0gZ2V0Um9vdFN0YXRlKCk7XG5cbiAgICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB3aGlsZSAoc3RhdGUucm91dGVzW3N0YXRlLmluZGV4XS5zdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzdGF0ZSA9IHN0YXRlLnJvdXRlc1tzdGF0ZS5pbmRleF0uc3RhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlLnJvdXRlc1tzdGF0ZS5pbmRleF07XG4gIH0sIFtnZXRSb290U3RhdGVdKTtcbiAgY29uc3QgZW1pdHRlciA9IHVzZUV2ZW50RW1pdHRlcigpO1xuICBjb25zdCB7XG4gICAgYWRkT3B0aW9uc0dldHRlcixcbiAgICBnZXRDdXJyZW50T3B0aW9uc1xuICB9ID0gdXNlT3B0aW9uc0dldHRlcnMoe30pO1xuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHsgLi4uT2JqZWN0LmtleXMoQ29tbW9uQWN0aW9ucykucmVkdWNlKChhY2MsIG5hbWUpID0+IHtcbiAgICAgIGFjY1tuYW1lXSA9ICguLi5hcmdzKSA9PiBkaXNwYXRjaChDb21tb25BY3Rpb25zW25hbWVdKCAvLyBAdHMtZXhwZWN0LWVycm9yOiB3ZSBjYW4ndCBrbm93IHRoZSB0eXBlIHN0YXRpY2FsbHlcbiAgICAgIC4uLmFyZ3MpKTtcblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSksXG4gICAgLi4uZW1pdHRlci5jcmVhdGUoJ3Jvb3QnKSxcbiAgICByZXNldFJvb3QsXG4gICAgZGlzcGF0Y2gsXG4gICAgY2FuR29CYWNrLFxuICAgIGdldFJvb3RTdGF0ZSxcbiAgICBnZXRTdGF0ZTogKCkgPT4gc3RhdGUsXG4gICAgZ2V0UGFyZW50OiAoKSA9PiB1bmRlZmluZWQsXG4gICAgZGFuZ2Vyb3VzbHlHZXRTdGF0ZTogKCkgPT4gc3RhdGUsXG4gICAgZGFuZ2Vyb3VzbHlHZXRQYXJlbnQ6ICgpID0+IHVuZGVmaW5lZCxcbiAgICBnZXRDdXJyZW50Um91dGUsXG4gICAgZ2V0Q3VycmVudE9wdGlvbnNcbiAgfSkpO1xuICBjb25zdCBvbkRpc3BhdGNoQWN0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soKGFjdGlvbiwgbm9vcCkgPT4ge1xuICAgIGVtaXR0ZXIuZW1pdCh7XG4gICAgICB0eXBlOiAnX191bnNhZmVfYWN0aW9uX18nLFxuICAgICAgZGF0YToge1xuICAgICAgICBhY3Rpb24sXG4gICAgICAgIG5vb3BcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW2VtaXR0ZXJdKTtcbiAgY29uc3QgbGFzdEVtaXR0ZWRPcHRpb25zUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIGNvbnN0IG9uT3B0aW9uc0NoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKG9wdGlvbnMgPT4ge1xuICAgIGlmIChsYXN0RW1pdHRlZE9wdGlvbnNSZWYuY3VycmVudCA9PT0gb3B0aW9ucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxhc3RFbWl0dGVkT3B0aW9uc1JlZi5jdXJyZW50ID0gb3B0aW9ucztcbiAgICBlbWl0dGVyLmVtaXQoe1xuICAgICAgdHlwZTogJ29wdGlvbnMnLFxuICAgICAgZGF0YToge1xuICAgICAgICBvcHRpb25zXG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtlbWl0dGVyXSk7XG4gIGNvbnN0IGJ1aWxkZXJDb250ZXh0ID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIGFkZExpc3RlbmVyLFxuICAgIGFkZEtleWVkTGlzdGVuZXIsXG4gICAgb25EaXNwYXRjaEFjdGlvbixcbiAgICBvbk9wdGlvbnNDaGFuZ2VcbiAgfSksIFthZGRMaXN0ZW5lciwgYWRkS2V5ZWRMaXN0ZW5lciwgb25EaXNwYXRjaEFjdGlvbiwgb25PcHRpb25zQ2hhbmdlXSk7XG4gIGNvbnN0IHNjaGVkdWxlQ29udGV4dCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICBzY2hlZHVsZVVwZGF0ZSxcbiAgICBmbHVzaFVwZGF0ZXNcbiAgfSksIFtzY2hlZHVsZVVwZGF0ZSwgZmx1c2hVcGRhdGVzXSk7XG4gIGNvbnN0IGlzSW5pdGlhbFJlZiA9IFJlYWN0LnVzZVJlZih0cnVlKTtcbiAgY29uc3QgZ2V0SXNJbml0aWFsID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4gaXNJbml0aWFsUmVmLmN1cnJlbnQsIFtdKTtcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICBzdGF0ZSxcbiAgICBnZXRTdGF0ZSxcbiAgICBzZXRTdGF0ZSxcbiAgICBnZXRLZXksXG4gICAgc2V0S2V5LFxuICAgIGdldElzSW5pdGlhbCxcbiAgICBhZGRPcHRpb25zR2V0dGVyXG4gIH0pLCBbc3RhdGUsIGdldFN0YXRlLCBzZXRTdGF0ZSwgZ2V0S2V5LCBzZXRLZXksIGdldElzSW5pdGlhbCwgYWRkT3B0aW9uc0dldHRlcl0pO1xuICBjb25zdCBvblN0YXRlQ2hhbmdlUmVmID0gUmVhY3QudXNlUmVmKG9uU3RhdGVDaGFuZ2UpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzSW5pdGlhbFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgb25TdGF0ZUNoYW5nZVJlZi5jdXJyZW50ID0gb25TdGF0ZUNoYW5nZTtcbiAgfSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChzdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNoZWNrU2VyaWFsaXphYmxlKHN0YXRlKTtcblxuICAgICAgICBpZiAoIXJlc3VsdC5zZXJpYWxpemFibGUpIHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICAgIHJlYXNvblxuICAgICAgICAgIH0gPSByZXN1bHQ7XG4gICAgICAgICAgbGV0IHBhdGggPSAnJztcbiAgICAgICAgICBsZXQgcG9pbnRlciA9IHN0YXRlO1xuICAgICAgICAgIGxldCBwYXJhbXMgPSBmYWxzZTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnIgPSBsb2NhdGlvbltpXTtcbiAgICAgICAgICAgIGNvbnN0IHByZXYgPSBsb2NhdGlvbltpIC0gMV07XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlcltjdXJyXTtcblxuICAgICAgICAgICAgaWYgKCFwYXJhbXMgJiYgY3VyciA9PT0gJ3N0YXRlJykge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXBhcmFtcyAmJiBjdXJyID09PSAncm91dGVzJykge1xuICAgICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gJyA+ICc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXBhcmFtcyAmJiB0eXBlb2YgY3VyciA9PT0gJ251bWJlcicgJiYgcHJldiA9PT0gJ3JvdXRlcycpIHtcbiAgICAgICAgICAgICAgdmFyIF9wb2ludGVyO1xuXG4gICAgICAgICAgICAgIHBhdGggKz0gKF9wb2ludGVyID0gcG9pbnRlcikgPT09IG51bGwgfHwgX3BvaW50ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9wb2ludGVyLm5hbWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFwYXJhbXMpIHtcbiAgICAgICAgICAgICAgcGF0aCArPSBcIiA+IFwiLmNvbmNhdChjdXJyKTtcbiAgICAgICAgICAgICAgcGFyYW1zID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VyciA9PT0gJ251bWJlcicgfHwgL15bMC05XSskLy50ZXN0KGN1cnIpKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBcIltcIi5jb25jYXQoY3VyciwgXCJdXCIpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKC9eW2EteiRfXSskL2kudGVzdChjdXJyKSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gXCIuXCIuY29uY2F0KGN1cnIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gXCJbXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGN1cnIpLCBcIl1cIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJOb24tc2VyaWFsaXphYmxlIHZhbHVlcyB3ZXJlIGZvdW5kIGluIHRoZSBuYXZpZ2F0aW9uIHN0YXRlLiBDaGVjazpcXG5cXG5cIi5jb25jYXQocGF0aCwgXCIgKFwiKS5jb25jYXQocmVhc29uLCBcIilcXG5cXG5UaGlzIGNhbiBicmVhayB1c2FnZSBzdWNoIGFzIHBlcnNpc3RpbmcgYW5kIHJlc3RvcmluZyBzdGF0ZS4gVGhpcyBtaWdodCBoYXBwZW4gaWYgeW91IHBhc3NlZCBub24tc2VyaWFsaXphYmxlIHZhbHVlcyBzdWNoIGFzIGZ1bmN0aW9uLCBjbGFzcyBpbnN0YW5jZXMgZXRjLiBpbiBwYXJhbXMuIElmIHlvdSBuZWVkIHRvIHVzZSBjb21wb25lbnRzIHdpdGggY2FsbGJhY2tzIGluIHlvdXIgb3B0aW9ucywgeW91IGNhbiB1c2UgJ25hdmlnYXRpb24uc2V0T3B0aW9ucycgaW5zdGVhZC4gU2VlIGh0dHBzOi8vcmVhY3RuYXZpZ2F0aW9uLm9yZy9kb2NzLzUueC90cm91Ymxlc2hvb3RpbmcjaS1nZXQtdGhlLXdhcm5pbmctbm9uLXNlcmlhbGl6YWJsZS12YWx1ZXMtd2VyZS1mb3VuZC1pbi10aGUtbmF2aWdhdGlvbi1zdGF0ZSBmb3IgbW9yZSBkZXRhaWxzLlwiKTtcblxuICAgICAgICAgIGlmICghc2VyaWFsaXphYmxlV2FybmluZ3MuaW5jbHVkZXMobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZVdhcm5pbmdzLnB1c2gobWVzc2FnZSk7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZW1pdHRlci5lbWl0KHtcbiAgICAgIHR5cGU6ICdzdGF0ZScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHN0YXRlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIWlzRmlyc3RNb3VudFJlZi5jdXJyZW50ICYmIG9uU3RhdGVDaGFuZ2VSZWYuY3VycmVudCkge1xuICAgICAgb25TdGF0ZUNoYW5nZVJlZi5jdXJyZW50KGdldFJvb3RTdGF0ZSgpKTtcbiAgICB9XG5cbiAgICBpc0ZpcnN0TW91bnRSZWYuY3VycmVudCA9IGZhbHNlO1xuICB9LCBbZ2V0Um9vdFN0YXRlLCBlbWl0dGVyLCBzdGF0ZV0pO1xuICBjb25zdCBkZWZhdWx0T25VbmhhbmRsZWRBY3Rpb24gPSBSZWFjdC51c2VDYWxsYmFjayhhY3Rpb24gPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGF5bG9hZCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIGxldCBtZXNzYWdlID0gXCJUaGUgYWN0aW9uICdcIi5jb25jYXQoYWN0aW9uLnR5cGUsIFwiJ1wiKS5jb25jYXQocGF5bG9hZCA/IFwiIHdpdGggcGF5bG9hZCBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoYWN0aW9uLnBheWxvYWQpKSA6ICcnLCBcIiB3YXMgbm90IGhhbmRsZWQgYnkgYW55IG5hdmlnYXRvci5cIik7XG5cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdOQVZJR0FURSc6XG4gICAgICBjYXNlICdQVVNIJzpcbiAgICAgIGNhc2UgJ1JFUExBQ0UnOlxuICAgICAgY2FzZSAnSlVNUF9UTyc6XG4gICAgICAgIGlmIChwYXlsb2FkICE9PSBudWxsICYmIHBheWxvYWQgIT09IHZvaWQgMCAmJiBwYXlsb2FkLm5hbWUpIHtcbiAgICAgICAgICBtZXNzYWdlICs9IFwiXFxuXFxuRG8geW91IGhhdmUgYSBzY3JlZW4gbmFtZWQgJ1wiLmNvbmNhdChwYXlsb2FkLm5hbWUsIFwiJz9cXG5cXG5JZiB5b3UncmUgdHJ5aW5nIHRvIG5hdmlnYXRlIHRvIGEgc2NyZWVuIGluIGEgbmVzdGVkIG5hdmlnYXRvciwgc2VlIGh0dHBzOi8vcmVhY3RuYXZpZ2F0aW9uLm9yZy9kb2NzLzUueC9uZXN0aW5nLW5hdmlnYXRvcnMjbmF2aWdhdGluZy10by1hLXNjcmVlbi1pbi1hLW5lc3RlZC1uYXZpZ2F0b3IuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc3NhZ2UgKz0gXCJcXG5cXG5Zb3UgbmVlZCB0byBwYXNzIHRoZSBuYW1lIG9mIHRoZSBzY3JlZW4gdG8gbmF2aWdhdGUgdG8uXFxuXFxuU2VlIGh0dHBzOi8vcmVhY3RuYXZpZ2F0aW9uLm9yZy9kb2NzLzUueC9uYXZpZ2F0aW9uLWFjdGlvbnMgZm9yIHVzYWdlLlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0dPX0JBQ0snOlxuICAgICAgY2FzZSAnUE9QJzpcbiAgICAgIGNhc2UgJ1BPUF9UT19UT1AnOlxuICAgICAgICBtZXNzYWdlICs9IFwiXFxuXFxuSXMgdGhlcmUgYW55IHNjcmVlbiB0byBnbyBiYWNrIHRvP1wiO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnT1BFTl9EUkFXRVInOlxuICAgICAgY2FzZSAnQ0xPU0VfRFJBV0VSJzpcbiAgICAgIGNhc2UgJ1RPR0dMRV9EUkFXRVInOlxuICAgICAgICBtZXNzYWdlICs9IFwiXFxuXFxuSXMgeW91ciBzY3JlZW4gaW5zaWRlIGEgRHJhd2VyIG5hdmlnYXRvcj9cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbWVzc2FnZSArPSBcIlxcblxcblRoaXMgaXMgYSBkZXZlbG9wbWVudC1vbmx5IHdhcm5pbmcgYW5kIHdvbid0IGJlIHNob3duIGluIHByb2R1Y3Rpb24uXCI7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfSwgW10pO1xuICBsZXQgZWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNjaGVkdWxlVXBkYXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBzY2hlZHVsZUNvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2aWdhdGlvbkJ1aWxkZXJDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGJ1aWxkZXJDb250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5hdmlnYXRpb25TdGF0ZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChVbmhhbmRsZWRBY3Rpb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IG9uVW5oYW5kbGVkQWN0aW9uICE9PSBudWxsICYmIG9uVW5oYW5kbGVkQWN0aW9uICE9PSB2b2lkIDAgPyBvblVuaGFuZGxlZEFjdGlvbiA6IGRlZmF1bHRPblVuaGFuZGxlZEFjdGlvblxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFbnN1cmVTaW5nbGVOYXZpZ2F0b3IsIG51bGwsIGNoaWxkcmVuKSkpKSk7XG5cbiAgaWYgKGluZGVwZW5kZW50KSB7XG4gICAgLy8gV2UgbmVlZCB0byBjbGVhciBhbnkgZXhpc3RpbmcgY29udGV4dHMgZm9yIG5lc3RlZCBpbmRlcGVuZGVudCBjb250YWluZXIgdG8gd29yayBjb3JyZWN0bHlcbiAgICBlbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2aWdhdGlvblJvdXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5hdmlnYXRpb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgfSwgZWxlbWVudCkpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59KTtcbmV4cG9ydCBkZWZhdWx0IEJhc2VOYXZpZ2F0aW9uQ29udGFpbmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmFzZU5hdmlnYXRpb25Db250YWluZXIuanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBDb250ZXh0IHdoaWNoIGhvbGRzIHRoZSB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IG5hdmlnYXRpb24gdHJlZS5cbiAqIEludGVuZGVkIGZvciB1c2UgaW4gU1NSLiBUaGlzIGlzIG5vdCBzYWZlIHRvIHVzZSBvbiB0aGUgY2xpZW50LlxuICovXG5cbmNvbnN0IEN1cnJlbnRSZW5kZXJDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnRSZW5kZXJDb250ZXh0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q3VycmVudFJlbmRlckNvbnRleHQuanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgTVVMVElQTEVfTkFWSUdBVE9SX0VSUk9SID0gXCJBbm90aGVyIG5hdmlnYXRvciBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQgZm9yIHRoaXMgY29udGFpbmVyLiBZb3UgbGlrZWx5IGhhdmUgbXVsdGlwbGUgbmF2aWdhdG9ycyB1bmRlciBhIHNpbmdsZSBcXFwiTmF2aWdhdGlvbkNvbnRhaW5lclxcXCIgb3IgXFxcIlNjcmVlblxcXCIuIE1ha2Ugc3VyZSBlYWNoIG5hdmlnYXRvciBpcyB1bmRlciBhIHNlcGFyYXRlIFxcXCJTY3JlZW5cXFwiIGNvbnRhaW5lci4gU2VlIGh0dHBzOi8vcmVhY3RuYXZpZ2F0aW9uLm9yZy9kb2NzLzUueC9uZXN0aW5nLW5hdmlnYXRvcnMgZm9yIGEgZ3VpZGUgb24gbmVzdGluZy5cIjtcbmV4cG9ydCBjb25zdCBTaW5nbGVOYXZpZ2F0b3JDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcbi8qKlxuICogQ29tcG9uZW50IHdoaWNoIGVuc3VyZXMgdGhhdCB0aGVyZSdzIG9ubHkgb25lIG5hdmlnYXRvciBuZXN0ZWQgdW5kZXIgaXQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRW5zdXJlU2luZ2xlTmF2aWdhdG9yKHtcbiAgY2hpbGRyZW5cbn0pIHtcbiAgY29uc3QgbmF2aWdhdG9yS2V5UmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIGNvbnN0IHZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIHJlZ2lzdGVyKGtleSkge1xuICAgICAgY29uc3QgY3VycmVudEtleSA9IG5hdmlnYXRvcktleVJlZi5jdXJyZW50O1xuXG4gICAgICBpZiAoY3VycmVudEtleSAhPT0gdW5kZWZpbmVkICYmIGtleSAhPT0gY3VycmVudEtleSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTVVMVElQTEVfTkFWSUdBVE9SX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgbmF2aWdhdG9yS2V5UmVmLmN1cnJlbnQgPSBrZXk7XG4gICAgfSxcblxuICAgIHVucmVnaXN0ZXIoa2V5KSB7XG4gICAgICBjb25zdCBjdXJyZW50S2V5ID0gbmF2aWdhdG9yS2V5UmVmLmN1cnJlbnQ7XG5cbiAgICAgIGlmIChrZXkgIT09IGN1cnJlbnRLZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBuYXZpZ2F0b3JLZXlSZWYuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgfSksIFtdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNpbmdsZU5hdmlnYXRvckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSwgY2hpbGRyZW4pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RW5zdXJlU2luZ2xlTmF2aWdhdG9yLmpzLm1hcCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBDb250ZXh0IHdoaWNoIGhvbGRzIHRoZSByZXF1aXJlZCBoZWxwZXJzIG5lZWRlZCB0byBidWlsZCBuZXN0ZWQgbmF2aWdhdG9ycy5cbiAqL1xuY29uc3QgTmF2aWdhdGlvbkJ1aWxkZXJDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBvbkRpc3BhdGNoQWN0aW9uOiAoKSA9PiB1bmRlZmluZWQsXG4gIG9uT3B0aW9uc0NoYW5nZTogKCkgPT4gdW5kZWZpbmVkXG59KTtcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25CdWlsZGVyQ29udGV4dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5hdmlnYXRpb25CdWlsZGVyQ29udGV4dC5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogQ29udGV4dCB3aGljaCBob2xkcyB0aGUgbmF2aWdhdGlvbiBwcm9wIGZvciBhIHNjcmVlbi5cbiAqL1xuY29uc3QgTmF2aWdhdGlvbkNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkNvbnRleHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1OYXZpZ2F0aW9uQ29udGV4dC5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogQ29udGV4dCB3aGljaCBob2xkcyB0aGUgbmF2aWdhdGlvbiBoZWxwZXJzIG9mIHRoZSBwYXJlbnQgbmF2aWdhdG9yLlxuICogTmF2aWdhdG9ycyBzaG91bGQgdXNlIHRoaXMgY29udGV4dCBpbiB0aGVpciB2aWV3IGNvbXBvbmVudC5cbiAqL1xuY29uc3QgTmF2aWdhdGlvbkhlbHBlcnNDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25IZWxwZXJzQ29udGV4dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5hdmlnYXRpb25IZWxwZXJzQ29udGV4dC5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogQ29udGV4dCB3aGljaCBob2xkcyB0aGUgcm91dGUgcHJvcCBmb3IgYSBzY3JlZW4uXG4gKi9cbmNvbnN0IE5hdmlnYXRpb25Db250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25Db250ZXh0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TmF2aWdhdGlvblJvdXRlQ29udGV4dC5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBNSVNTSU5HX0NPTlRFWFRfRVJST1IgPSBcIkNvdWxkbid0IGZpbmQgYSBuYXZpZ2F0aW9uIGNvbnRleHQuIEhhdmUgeW91IHdyYXBwZWQgeW91ciBhcHAgd2l0aCAnTmF2aWdhdGlvbkNvbnRhaW5lcic/IFNlZSBodHRwczovL3JlYWN0bmF2aWdhdGlvbi5vcmcvZG9jcy81LngvZ2V0dGluZy1zdGFydGVkIGZvciBzZXR1cCBpbnN0cnVjdGlvbnMuXCI7XG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIGlzRGVmYXVsdDogdHJ1ZSxcblxuICBnZXQgZ2V0S2V5KCkge1xuICAgIHRocm93IG5ldyBFcnJvcihNSVNTSU5HX0NPTlRFWFRfRVJST1IpO1xuICB9LFxuXG4gIGdldCBzZXRLZXkoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKE1JU1NJTkdfQ09OVEVYVF9FUlJPUik7XG4gIH0sXG5cbiAgZ2V0IGdldFN0YXRlKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihNSVNTSU5HX0NPTlRFWFRfRVJST1IpO1xuICB9LFxuXG4gIGdldCBzZXRTdGF0ZSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTUlTU0lOR19DT05URVhUX0VSUk9SKTtcbiAgfSxcblxuICBnZXQgZ2V0SXNJbml0aWFsKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihNSVNTSU5HX0NPTlRFWFRfRVJST1IpO1xuICB9XG5cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TmF2aWdhdGlvblN0YXRlQ29udGV4dC5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2aWdhdGlvblN0YXRlQ29udGV4dCBmcm9tICcuL05hdmlnYXRpb25TdGF0ZUNvbnRleHQnO1xuaW1wb3J0IFN0YXRpY0NvbnRhaW5lciBmcm9tICcuL1N0YXRpY0NvbnRhaW5lcic7XG5pbXBvcnQgRW5zdXJlU2luZ2xlTmF2aWdhdG9yIGZyb20gJy4vRW5zdXJlU2luZ2xlTmF2aWdhdG9yJztcbmltcG9ydCB1c2VPcHRpb25zR2V0dGVycyBmcm9tICcuL3VzZU9wdGlvbnNHZXR0ZXJzJztcblxuLyoqXG4gKiBDb21wb25lbnQgd2hpY2ggdGFrZXMgY2FyZSBvZiByZW5kZXJpbmcgdGhlIHNjcmVlbiBmb3IgYSByb3V0ZS5cbiAqIEl0IHByb3ZpZGVzIGFsbCByZXF1aXJlZCBjb250ZXh0cyBhbmQgYXBwbGllcyBvcHRpbWl6YXRpb25zIHdoZW4gYXBwbGljYWJsZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NlbmVWaWV3KHtcbiAgc2NyZWVuLFxuICByb3V0ZSxcbiAgbmF2aWdhdGlvbixcbiAgcm91dGVTdGF0ZSxcbiAgZ2V0U3RhdGUsXG4gIHNldFN0YXRlLFxuICBvcHRpb25zLFxuICBjbGVhck9wdGlvbnNcbn0pIHtcbiAgY29uc3QgbmF2aWdhdG9yS2V5UmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIGNvbnN0IGdldEtleSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IG5hdmlnYXRvcktleVJlZi5jdXJyZW50LCBbXSk7XG4gIGNvbnN0IHtcbiAgICBhZGRPcHRpb25zR2V0dGVyXG4gIH0gPSB1c2VPcHRpb25zR2V0dGVycyh7XG4gICAga2V5OiByb3V0ZS5rZXksXG4gICAgb3B0aW9ucyxcbiAgICBuYXZpZ2F0aW9uXG4gIH0pO1xuICBjb25zdCBzZXRLZXkgPSBSZWFjdC51c2VDYWxsYmFjayhrZXkgPT4ge1xuICAgIG5hdmlnYXRvcktleVJlZi5jdXJyZW50ID0ga2V5O1xuICB9LCBbXSk7XG4gIGNvbnN0IGdldEN1cnJlbnRTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgY29uc3QgY3VycmVudFJvdXRlID0gc3RhdGUucm91dGVzLmZpbmQociA9PiByLmtleSA9PT0gcm91dGUua2V5KTtcbiAgICByZXR1cm4gY3VycmVudFJvdXRlID8gY3VycmVudFJvdXRlLnN0YXRlIDogdW5kZWZpbmVkO1xuICB9LCBbZ2V0U3RhdGUsIHJvdXRlLmtleV0pO1xuICBjb25zdCBzZXRDdXJyZW50U3RhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhjaGlsZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsXG4gICAgICByb3V0ZXM6IHN0YXRlLnJvdXRlcy5tYXAociA9PiByLmtleSA9PT0gcm91dGUua2V5ID8geyAuLi5yLFxuICAgICAgICBzdGF0ZTogY2hpbGRcbiAgICAgIH0gOiByKVxuICAgIH0pO1xuICB9LCBbZ2V0U3RhdGUsIHJvdXRlLmtleSwgc2V0U3RhdGVdKTtcbiAgY29uc3QgaXNJbml0aWFsUmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzSW5pdGlhbFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gIH0pOyAvLyBDbGVhciBvcHRpb25zIHNldCBieSB0aGlzIHNjcmVlbiB3aGVuIGl0IGlzIHVubW91bnRlZFxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuIGNsZWFyT3B0aW9uczsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbXSk7XG4gIGNvbnN0IGdldElzSW5pdGlhbCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IGlzSW5pdGlhbFJlZi5jdXJyZW50LCBbXSk7XG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgc3RhdGU6IHJvdXRlU3RhdGUsXG4gICAgZ2V0U3RhdGU6IGdldEN1cnJlbnRTdGF0ZSxcbiAgICBzZXRTdGF0ZTogc2V0Q3VycmVudFN0YXRlLFxuICAgIGdldEtleSxcbiAgICBzZXRLZXksXG4gICAgZ2V0SXNJbml0aWFsLFxuICAgIGFkZE9wdGlvbnNHZXR0ZXJcbiAgfSksIFtyb3V0ZVN0YXRlLCBnZXRDdXJyZW50U3RhdGUsIHNldEN1cnJlbnRTdGF0ZSwgZ2V0S2V5LCBzZXRLZXksIGdldElzSW5pdGlhbCwgYWRkT3B0aW9uc0dldHRlcl0pO1xuICBjb25zdCBTY3JlZW5Db21wb25lbnQgPSBzY3JlZW4uZ2V0Q29tcG9uZW50ID8gc2NyZWVuLmdldENvbXBvbmVudCgpIDogc2NyZWVuLmNvbXBvbmVudDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5hdmlnYXRpb25TdGF0ZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFbnN1cmVTaW5nbGVOYXZpZ2F0b3IsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN0YXRpY0NvbnRhaW5lciwge1xuICAgIG5hbWU6IHNjcmVlbi5uYW1lLFxuICAgIHJlbmRlcjogU2NyZWVuQ29tcG9uZW50IHx8IHNjcmVlbi5jaGlsZHJlbixcbiAgICBuYXZpZ2F0aW9uOiBuYXZpZ2F0aW9uLFxuICAgIHJvdXRlOiByb3V0ZVxuICB9LCBTY3JlZW5Db21wb25lbnQgIT09IHVuZGVmaW5lZCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNjcmVlbkNvbXBvbmVudCwge1xuICAgIG5hdmlnYXRpb246IG5hdmlnYXRpb24sXG4gICAgcm91dGU6IHJvdXRlXG4gIH0pIDogc2NyZWVuLmNoaWxkcmVuICE9PSB1bmRlZmluZWQgPyBzY3JlZW4uY2hpbGRyZW4oe1xuICAgIG5hdmlnYXRpb24sXG4gICAgcm91dGVcbiAgfSkgOiBudWxsKSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2NlbmVWaWV3LmpzLm1hcCIsIi8qKlxuICogRW1wdHkgY29tcG9uZW50IHVzZWQgZm9yIHNwZWNpZnlpbmcgcm91dGUgY29uZmlndXJhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NyZWVuKF8pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuIG51bGw7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TY3JlZW4uanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBDb21wb25lbnQgd2hpY2ggcHJldmVudHMgdXBkYXRlcyBmb3IgY2hpbGRyZW4gaWYgbm8gcHJvcHMgY2hhbmdlZFxuICovXG5cbmZ1bmN0aW9uIFN0YXRpY0NvbnRhaW5lcihwcm9wcykge1xuICByZXR1cm4gcHJvcHMuY2hpbGRyZW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9SZWFjdC5tZW1vKFN0YXRpY0NvbnRhaW5lciwgKHByZXZQcm9wcywgbmV4dFByb3BzKSA9PiB7XG4gIGNvbnN0IHByZXZQcm9wS2V5cyA9IE9iamVjdC5rZXlzKHByZXZQcm9wcyk7XG4gIGNvbnN0IG5leHRQcm9wS2V5cyA9IE9iamVjdC5rZXlzKG5leHRQcm9wcyk7XG5cbiAgaWYgKHByZXZQcm9wS2V5cy5sZW5ndGggIT09IG5leHRQcm9wS2V5cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKGNvbnN0IGtleSBvZiBwcmV2UHJvcEtleXMpIHtcbiAgICBpZiAoa2V5ID09PSAnY2hpbGRyZW4nKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAocHJldlByb3BzW2tleV0gIT09IG5leHRQcm9wc1trZXldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN0YXRpY0NvbnRhaW5lci5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBVbmhhbmRsZWRBY3Rpb25Db250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcbmV4cG9ydCBkZWZhdWx0IFVuaGFuZGxlZEFjdGlvbkNvbnRleHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1VbmhhbmRsZWRBY3Rpb25Db250ZXh0LmpzLm1hcCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrTGVnYWN5UGF0aENvbmZpZyhjb25maWcpIHtcbiAgbGV0IGxlZ2FjeSA9IGZhbHNlO1xuXG4gIGlmIChjb25maWcpIHtcbiAgICAvLyBBc3N1bWUgbGVnYWN5IGNvbmZpZ3VyYXRpb24gaWYgY29uZmlnIGhhcyBhbnkgb3RoZXIga2V5cyBleGNlcHQgYHNjcmVlbnNgIGFuZCBgaW5pdGlhbFJvdXRlTmFtZWBcbiAgICBsZWdhY3kgPSBPYmplY3Qua2V5cyhjb25maWcpLnNvbWUoa2V5ID0+IGtleSAhPT0gJ3NjcmVlbnMnICYmIGtleSAhPT0gJ2luaXRpYWxSb3V0ZU5hbWUnKTtcblxuICAgIGlmIChsZWdhY3kgJiYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnc2NyZWVucycpIHx8IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnaW5pdGlhbFJvdXRlTmFtZScpKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCBpbnZhbGlkIGtleXMgaW4gdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0LiBTZWUgaHR0cHM6Ly9yZWFjdG5hdmlnYXRpb24ub3JnL2RvY3MvNS54L2NvbmZpZ3VyaW5nLWxpbmtzLyBmb3IgbW9yZSBkZXRhaWxzIG9uIHRoZSBzaGFwZSBvZiB0aGUgY29uZmlndXJhdGlvbiBvYmplY3QuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxlZ2FjeSkge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHdlIGhhdmUgaW5jb3JyZWN0IHR5cGUgZm9yIGNvbmZpZyBzaW5jZSB3ZSBkb24ndCB0eXBlIGxlZ2FjeSBjb25maWdcbiAgICByZXR1cm4gW2xlZ2FjeSwge1xuICAgICAgc2NyZWVuczogY29uZmlnXG4gICAgfV07XG4gIH1cblxuICByZXR1cm4gW2xlZ2FjeSwgY29uZmlnXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNoZWNrTGVnYWN5UGF0aENvbmZpZy5qcy5tYXAiLCJjb25zdCBjaGVja1NlcmlhbGl6YWJsZVdpdGhvdXRDaXJjdWxhclJlZmVyZW5jZSA9IChvLCBzZWVuLCBsb2NhdGlvbikgPT4ge1xuICBpZiAobyA9PT0gdW5kZWZpbmVkIHx8IG8gPT09IG51bGwgfHwgdHlwZW9mIG8gPT09ICdib29sZWFuJyB8fCB0eXBlb2YgbyA9PT0gJ251bWJlcicgfHwgdHlwZW9mIG8gPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlcmlhbGl6YWJsZTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pICE9PSAnW29iamVjdCBPYmplY3RdJyAmJiAhQXJyYXkuaXNBcnJheShvKSkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXJpYWxpemFibGU6IGZhbHNlLFxuICAgICAgbG9jYXRpb24sXG4gICAgICByZWFzb246IHR5cGVvZiBvID09PSAnZnVuY3Rpb24nID8gJ0Z1bmN0aW9uJyA6IFN0cmluZyhvKVxuICAgIH07XG4gIH1cblxuICBpZiAoc2Vlbi5oYXMobykpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VyaWFsaXphYmxlOiBmYWxzZSxcbiAgICAgIHJlYXNvbjogJ0NpcmN1bGFyIHJlZmVyZW5jZScsXG4gICAgICBsb2NhdGlvblxuICAgIH07XG4gIH1cblxuICBzZWVuLmFkZChvKTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShvKSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgby5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hpbGRSZXN1bHQgPSBjaGVja1NlcmlhbGl6YWJsZVdpdGhvdXRDaXJjdWxhclJlZmVyZW5jZShvW2ldLCBuZXcgU2V0KHNlZW4pLCBbLi4ubG9jYXRpb24sIGldKTtcblxuICAgICAgaWYgKCFjaGlsZFJlc3VsdC5zZXJpYWxpemFibGUpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkUmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICBjb25zdCBjaGlsZFJlc3VsdCA9IGNoZWNrU2VyaWFsaXphYmxlV2l0aG91dENpcmN1bGFyUmVmZXJlbmNlKG9ba2V5XSwgbmV3IFNldChzZWVuKSwgWy4uLmxvY2F0aW9uLCBrZXldKTtcblxuICAgICAgaWYgKCFjaGlsZFJlc3VsdC5zZXJpYWxpemFibGUpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkUmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2VyaWFsaXphYmxlOiB0cnVlXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja1NlcmlhbGl6YWJsZShvKSB7XG4gIHJldHVybiBjaGVja1NlcmlhbGl6YWJsZVdpdGhvdXRDaXJjdWxhclJlZmVyZW5jZShvLCBuZXcgU2V0KCksIFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNoZWNrU2VyaWFsaXphYmxlLmpzLm1hcCIsImltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4nO1xuXG4vKipcbiAqIEhpZ2hlciBvcmRlciBjb21wb25lbnQgdG8gY3JlYXRlIGEgYE5hdmlnYXRvcmAgYW5kIGBTY3JlZW5gIHBhaXIuXG4gKiBDdXN0b20gbmF2aWdhdG9ycyBzaG91bGQgd3JhcCB0aGUgbmF2aWdhdG9yIGNvbXBvbmVudCBpbiBgY3JlYXRlTmF2aWdhdG9yYCBiZWZvcmUgZXhwb3J0aW5nLlxuICpcbiAqIEBwYXJhbSBOYXZpZ2F0b3IgVGhlIG5hdmlndG9yIGNvbXBvbmVudCB0byB3cmFwLlxuICogQHJldHVybnMgRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgYE5hdmlnYXRvcmAgYW5kIGBTY3JlZW5gIHBhaXIuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU5hdmlnYXRvckZhY3RvcnkoTmF2aWdhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDcmVhdGluZyBhIG5hdmlnYXRvciBkb2Vzbid0IHRha2UgYW4gYXJndW1lbnQuIE1heWJlIHlvdSBhcmUgdHJ5aW5nIHRvIHVzZSBSZWFjdCBOYXZpZ2F0aW9uIDQgQVBJIHdpdGggUmVhY3QgTmF2aWdhdGlvbiA1PyBTZWUgaHR0cHM6Ly9yZWFjdG5hdmlnYXRpb24ub3JnL2RvY3MvNS54L3VwZ3JhZGluZy1mcm9tLTQueCBmb3IgbWlncmF0aW9uIGd1aWRlLlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgTmF2aWdhdG9yLFxuICAgICAgU2NyZWVuXG4gICAgfTtcbiAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZU5hdmlnYXRvckZhY3RvcnkuanMubWFwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWN0aW9uRnJvbVN0YXRlKHN0YXRlLCBvcHRpb25zKSB7XG4gIHZhciBfc3RhdGUkaW5kZXgsIF9ub3JtYWxpemVkQ29uZmlnJHNjcjtcblxuICAvLyBDcmVhdGUgYSBub3JtYWxpemVkIGNvbmZpZ3Mgb2JqZWN0IHdoaWNoIHdpbGwgYmUgZWFzaWVyIHRvIHVzZVxuICBjb25zdCBub3JtYWxpemVkQ29uZmlnID0gb3B0aW9ucyA/IGNyZWF0ZU5vcm1hbGl6ZWRDb25maWdJdGVtKG9wdGlvbnMpIDoge307XG4gIGNvbnN0IHJvdXRlcyA9IHN0YXRlLmluZGV4ICE9IG51bGwgPyBzdGF0ZS5yb3V0ZXMuc2xpY2UoMCwgc3RhdGUuaW5kZXggKyAxKSA6IHN0YXRlLnJvdXRlcztcblxuICBpZiAocm91dGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoIShyb3V0ZXMubGVuZ3RoID09PSAxICYmIHJvdXRlc1swXS5rZXkgPT09IHVuZGVmaW5lZCB8fCByb3V0ZXMubGVuZ3RoID09PSAyICYmIHJvdXRlc1swXS5rZXkgPT09IHVuZGVmaW5lZCAmJiByb3V0ZXNbMF0ubmFtZSA9PT0gKG5vcm1hbGl6ZWRDb25maWcgPT09IG51bGwgfHwgbm9ybWFsaXplZENvbmZpZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9ybWFsaXplZENvbmZpZy5pbml0aWFsUm91dGVOYW1lKSAmJiByb3V0ZXNbMV0ua2V5ID09PSB1bmRlZmluZWQpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdSRVNFVCcsXG4gICAgICBwYXlsb2FkOiBzdGF0ZVxuICAgIH07XG4gIH1cblxuICBjb25zdCByb3V0ZSA9IHN0YXRlLnJvdXRlc1soX3N0YXRlJGluZGV4ID0gc3RhdGUuaW5kZXgpICE9PSBudWxsICYmIF9zdGF0ZSRpbmRleCAhPT0gdm9pZCAwID8gX3N0YXRlJGluZGV4IDogc3RhdGUucm91dGVzLmxlbmd0aCAtIDFdO1xuICBsZXQgY3VycmVudCA9IHJvdXRlID09PSBudWxsIHx8IHJvdXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByb3V0ZS5zdGF0ZTtcbiAgbGV0IGNvbmZpZyA9IG5vcm1hbGl6ZWRDb25maWcgPT09IG51bGwgfHwgbm9ybWFsaXplZENvbmZpZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9ub3JtYWxpemVkQ29uZmlnJHNjciA9IG5vcm1hbGl6ZWRDb25maWcuc2NyZWVucykgPT09IG51bGwgfHwgX25vcm1hbGl6ZWRDb25maWckc2NyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm9ybWFsaXplZENvbmZpZyRzY3Jbcm91dGUgPT09IG51bGwgfHwgcm91dGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJvdXRlLm5hbWVdO1xuICBsZXQgcGFyYW1zID0geyAuLi5yb3V0ZS5wYXJhbXNcbiAgfTtcbiAgbGV0IHBheWxvYWQgPSByb3V0ZSA/IHtcbiAgICBuYW1lOiByb3V0ZS5uYW1lLFxuICAgIHBhcmFtc1xuICB9IDogdW5kZWZpbmVkO1xuXG4gIHdoaWxlIChjdXJyZW50KSB7XG4gICAgdmFyIF9jb25maWcsIF9jb25maWcyLCBfY29uZmlnMiRzY3JlZW5zO1xuXG4gICAgaWYgKGN1cnJlbnQucm91dGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZXMgPSBjdXJyZW50LmluZGV4ICE9IG51bGwgPyBjdXJyZW50LnJvdXRlcy5zbGljZSgwLCBjdXJyZW50LmluZGV4ICsgMSkgOiBjdXJyZW50LnJvdXRlcztcbiAgICBjb25zdCByb3V0ZSA9IHJvdXRlc1tyb3V0ZXMubGVuZ3RoIC0gMV07IC8vIEV4cGxpY2l0bHkgc2V0IHRvIG92ZXJyaWRlIGV4aXN0aW5nIHZhbHVlIHdoZW4gbWVyZ2luZyBwYXJhbXNcblxuICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICBpbml0aWFsOiB1bmRlZmluZWQsXG4gICAgICBzY3JlZW46IHVuZGVmaW5lZCxcbiAgICAgIHBhcmFtczogdW5kZWZpbmVkLFxuICAgICAgc3RhdGU6IHVuZGVmaW5lZFxuICAgIH0pO1xuXG4gICAgaWYgKHJvdXRlcy5sZW5ndGggPT09IDEgJiYgcm91dGVzWzBdLmtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMuaW5pdGlhbCA9IHRydWU7XG4gICAgICBwYXJhbXMuc2NyZWVuID0gcm91dGUubmFtZTtcbiAgICB9IGVsc2UgaWYgKHJvdXRlcy5sZW5ndGggPT09IDIgJiYgcm91dGVzWzBdLmtleSA9PT0gdW5kZWZpbmVkICYmIHJvdXRlc1swXS5uYW1lID09PSAoKF9jb25maWcgPSBjb25maWcpID09PSBudWxsIHx8IF9jb25maWcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jb25maWcuaW5pdGlhbFJvdXRlTmFtZSkgJiYgcm91dGVzWzFdLmtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMuaW5pdGlhbCA9IGZhbHNlO1xuICAgICAgcGFyYW1zLnNjcmVlbiA9IHJvdXRlLm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtcy5zdGF0ZSA9IGN1cnJlbnQ7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAocm91dGUuc3RhdGUpIHtcbiAgICAgIHBhcmFtcy5wYXJhbXMgPSB7IC4uLnJvdXRlLnBhcmFtc1xuICAgICAgfTtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5wYXJhbXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtcy5wYXJhbXMgPSByb3V0ZS5wYXJhbXM7XG4gICAgfVxuXG4gICAgY3VycmVudCA9IHJvdXRlLnN0YXRlO1xuICAgIGNvbmZpZyA9IChfY29uZmlnMiA9IGNvbmZpZykgPT09IG51bGwgfHwgX2NvbmZpZzIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfY29uZmlnMiRzY3JlZW5zID0gX2NvbmZpZzIuc2NyZWVucykgPT09IG51bGwgfHwgX2NvbmZpZzIkc2NyZWVucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NvbmZpZzIkc2NyZWVuc1tyb3V0ZS5uYW1lXTtcbiAgfVxuXG4gIGlmICghcGF5bG9hZCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBUcnkgdG8gY29uc3RydWN0IHBheWxvYWQgZm9yIGEgYE5BVklHQVRFYCBhY3Rpb24gZnJvbSB0aGUgc3RhdGVcbiAgLy8gVGhpcyBsZXRzIHVzIHByZXNlcnZlIHRoZSBuYXZpZ2F0aW9uIHN0YXRlIGFuZCBub3QgbG9zZSBpdFxuXG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTkFWSUdBVEUnLFxuICAgIHBheWxvYWRcbiAgfTtcbn1cblxuY29uc3QgY3JlYXRlTm9ybWFsaXplZENvbmZpZ0l0ZW0gPSBjb25maWcgPT4gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnICE9IG51bGwgPyB7XG4gIGluaXRpYWxSb3V0ZU5hbWU6IGNvbmZpZy5pbml0aWFsUm91dGVOYW1lLFxuICBzY3JlZW5zOiBjb25maWcuc2NyZWVucyAhPSBudWxsID8gY3JlYXRlTm9ybWFsaXplZENvbmZpZ3MoY29uZmlnLnNjcmVlbnMpIDogdW5kZWZpbmVkXG59IDoge307XG5cbmNvbnN0IGNyZWF0ZU5vcm1hbGl6ZWRDb25maWdzID0gb3B0aW9ucyA9PiBPYmplY3QuZW50cmllcyhvcHRpb25zKS5yZWR1Y2UoKGFjYywgW2ssIHZdKSA9PiB7XG4gIGFjY1trXSA9IGNyZWF0ZU5vcm1hbGl6ZWRDb25maWdJdGVtKHYpO1xuICByZXR1cm4gYWNjO1xufSwge30pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0QWN0aW9uRnJvbVN0YXRlLmpzLm1hcCIsImltcG9ydCB7IFNVUFBSRVNTX1NUQVRFX0FDQ0VTU19XQVJOSU5HIH0gZnJvbSAnLi91c2VSb3V0ZUNhY2hlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZvY3VzZWRSb3V0ZU5hbWVGcm9tUm91dGUocm91dGUpIHtcbiAgdmFyIF9zdGF0ZSRpbmRleDtcblxuICBTVVBQUkVTU19TVEFURV9BQ0NFU1NfV0FSTklORy52YWx1ZSA9IHRydWU7XG4gIGNvbnN0IHN0YXRlID0gcm91dGUuc3RhdGU7XG4gIFNVUFBSRVNTX1NUQVRFX0FDQ0VTU19XQVJOSU5HLnZhbHVlID0gZmFsc2U7XG4gIGNvbnN0IHBhcmFtcyA9IHJvdXRlLnBhcmFtcztcbiAgY29uc3Qgcm91dGVOYW1lID0gc3RhdGUgPyAvLyBHZXQgdGhlIGN1cnJlbnRseSBhY3RpdmUgcm91dGUgbmFtZSBpbiB0aGUgbmVzdGVkIG5hdmlnYXRvclxuICBzdGF0ZS5yb3V0ZXNbLy8gSWYgd2UgaGF2ZSBhIHBhcnRpYWwgc3RhdGUgd2l0aG91dCBpbmRleCwgZm9yIHRhYi9kcmF3ZXIsIGZpcnN0IHNjcmVlbiB3aWxsIGJlIGZvY3VzZWQgb25lLCBhbmQgbGFzdCBmb3Igc3RhY2tcbiAgLy8gVGhlIHR5cGUgcHJvcGVydHkgd2lsbCBvbmx5IGV4aXN0IGZvciByZWh5ZHJhdGVkIHN0YXRlIGFuZCBub3QgZm9yIHN0YXRlIGZyb20gZGVlcCBsaW5rXG4gIChfc3RhdGUkaW5kZXggPSBzdGF0ZS5pbmRleCkgIT09IG51bGwgJiYgX3N0YXRlJGluZGV4ICE9PSB2b2lkIDAgPyBfc3RhdGUkaW5kZXggOiB0eXBlb2Ygc3RhdGUudHlwZSA9PT0gJ3N0cmluZycgJiYgc3RhdGUudHlwZSAhPT0gJ3N0YWNrJyA/IDAgOiBzdGF0ZS5yb3V0ZXMubGVuZ3RoIC0gMV0ubmFtZSA6IC8vIElmIHN0YXRlIGRvZXNuJ3QgZXhpc3QsIHdlIG5lZWQgdG8gZGVmYXVsdCB0byBgc2NyZWVuYCBwYXJhbSBpZiBhdmFpbGFibGVcbiAgdHlwZW9mIChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuc2NyZWVuKSA9PT0gJ3N0cmluZycgPyBwYXJhbXMuc2NyZWVuIDogdW5kZWZpbmVkO1xuICByZXR1cm4gcm91dGVOYW1lO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0Rm9jdXNlZFJvdXRlTmFtZUZyb21Sb3V0ZS5qcy5tYXAiLCJpbXBvcnQgKiBhcyBxdWVyeVN0cmluZyBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IGNoZWNrTGVnYWN5UGF0aENvbmZpZyBmcm9tICcuL2NoZWNrTGVnYWN5UGF0aENvbmZpZyc7XG5cbmNvbnN0IGdldEFjdGl2ZVJvdXRlID0gc3RhdGUgPT4ge1xuICBjb25zdCByb3V0ZSA9IHR5cGVvZiBzdGF0ZS5pbmRleCA9PT0gJ251bWJlcicgPyBzdGF0ZS5yb3V0ZXNbc3RhdGUuaW5kZXhdIDogc3RhdGUucm91dGVzW3N0YXRlLnJvdXRlcy5sZW5ndGggLSAxXTtcblxuICBpZiAocm91dGUuc3RhdGUpIHtcbiAgICByZXR1cm4gZ2V0QWN0aXZlUm91dGUocm91dGUuc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHJvdXRlO1xufTtcbi8qKlxuICogVXRpbGl0eSB0byBzZXJpYWxpemUgYSBuYXZpZ2F0aW9uIHN0YXRlIG9iamVjdCB0byBhIHBhdGggc3RyaW5nLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogZ2V0UGF0aEZyb21TdGF0ZShcbiAqICAge1xuICogICAgIHJvdXRlczogW1xuICogICAgICAge1xuICogICAgICAgICBuYW1lOiAnQ2hhdCcsXG4gKiAgICAgICAgIHBhcmFtczogeyBhdXRob3I6ICdKYW5lJywgaWQ6IDQyIH0sXG4gKiAgICAgICB9LFxuICogICAgIF0sXG4gKiAgIH0sXG4gKiAgIHtcbiAqICAgICBzY3JlZW5zOiB7XG4gKiAgICAgICBDaGF0OiB7XG4gKiAgICAgICAgIHBhdGg6ICdjaGF0LzphdXRob3IvOmlkJyxcbiAqICAgICAgICAgc3RyaW5naWZ5OiB7IGF1dGhvcjogYXV0aG9yID0+IGF1dGhvci50b0xvd2VyQ2FzZSgpIH1cbiAqICAgICAgIH1cbiAqICAgICB9XG4gKiAgIH1cbiAqIClcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBzdGF0ZSBOYXZpZ2F0aW9uIHN0YXRlIHRvIHNlcmlhbGl6ZS5cbiAqIEBwYXJhbSBvcHRpb25zIEV4dHJhIG9wdGlvbnMgdG8gZmluZS10dW5lIGhvdyB0byBzZXJpYWxpemUgdGhlIHBhdGguXG4gKiBAcmV0dXJucyBQYXRoIHJlcHJlc2VudGluZyB0aGUgc3RhdGUsIGUuZy4gL2Zvby9iYXI/Y291bnQ9NDIuXG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXRoRnJvbVN0YXRlKHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChzdGF0ZSA9PSBudWxsKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJHb3QgJ3VuZGVmaW5lZCcgZm9yIHRoZSBuYXZpZ2F0aW9uIHN0YXRlLiBZb3UgbXVzdCBwYXNzIGEgdmFsaWQgc3RhdGUgb2JqZWN0LlwiKTtcbiAgfVxuXG4gIGNvbnN0IFtsZWdhY3ksIGNvbXBhdE9wdGlvbnNdID0gY2hlY2tMZWdhY3lQYXRoQ29uZmlnKG9wdGlvbnMpOyAvLyBDcmVhdGUgYSBub3JtYWxpemVkIGNvbmZpZ3Mgb2JqZWN0IHdoaWNoIHdpbGwgYmUgZWFzaWVyIHRvIHVzZVxuXG4gIGNvbnN0IGNvbmZpZ3MgPSBjb21wYXRPcHRpb25zID8gY3JlYXRlTm9ybWFsaXplZENvbmZpZ3MobGVnYWN5LCBjb21wYXRPcHRpb25zLnNjcmVlbnMpIDoge307XG4gIGxldCBwYXRoID0gJy8nO1xuICBsZXQgY3VycmVudCA9IHN0YXRlO1xuICBjb25zdCBhbGxQYXJhbXMgPSB7fTtcblxuICB3aGlsZSAoY3VycmVudCkge1xuICAgIGxldCBpbmRleCA9IHR5cGVvZiBjdXJyZW50LmluZGV4ID09PSAnbnVtYmVyJyA/IGN1cnJlbnQuaW5kZXggOiAwO1xuICAgIGxldCByb3V0ZSA9IGN1cnJlbnQucm91dGVzW2luZGV4XTtcbiAgICBsZXQgcGF0dGVybjtcbiAgICBsZXQgZm9jdXNlZFBhcmFtcztcbiAgICBsZXQgZm9jdXNlZFJvdXRlID0gZ2V0QWN0aXZlUm91dGUoc3RhdGUpO1xuICAgIGxldCBjdXJyZW50T3B0aW9ucyA9IGNvbmZpZ3M7IC8vIEtlZXAgYWxsIHRoZSByb3V0ZSBuYW1lcyB0aGF0IGFwcGVhcmVkIGR1cmluZyBnb2luZyBkZWVwZXIgaW4gY29uZmlnIGluIGNhc2UgdGhlIHBhdHRlcm4gaXMgcmVzb2x2ZWQgdG8gdW5kZWZpbmVkXG5cbiAgICBsZXQgbmVzdGVkUm91dGVOYW1lcyA9IFtdO1xuICAgIGxldCBoYXNOZXh0ID0gdHJ1ZTtcblxuICAgIHdoaWxlIChyb3V0ZS5uYW1lIGluIGN1cnJlbnRPcHRpb25zICYmIGhhc05leHQpIHtcbiAgICAgIHBhdHRlcm4gPSBjdXJyZW50T3B0aW9uc1tyb3V0ZS5uYW1lXS5wYXR0ZXJuO1xuICAgICAgbmVzdGVkUm91dGVOYW1lcy5wdXNoKHJvdXRlLm5hbWUpO1xuXG4gICAgICBpZiAocm91dGUucGFyYW1zKSB7XG4gICAgICAgIHZhciBfY3VycmVudE9wdGlvbnMkcm91dGU7XG5cbiAgICAgICAgY29uc3Qgc3RyaW5naWZ5ID0gKF9jdXJyZW50T3B0aW9ucyRyb3V0ZSA9IGN1cnJlbnRPcHRpb25zW3JvdXRlLm5hbWVdKSA9PT0gbnVsbCB8fCBfY3VycmVudE9wdGlvbnMkcm91dGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jdXJyZW50T3B0aW9ucyRyb3V0ZS5zdHJpbmdpZnk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXJhbXMgPSBmcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhyb3V0ZS5wYXJhbXMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCBzdHJpbmdpZnkgIT09IG51bGwgJiYgc3RyaW5naWZ5ICE9PSB2b2lkIDAgJiYgc3RyaW5naWZ5W2tleV0gPyBzdHJpbmdpZnlba2V5XSh2YWx1ZSkgOiBTdHJpbmcodmFsdWUpXSkpO1xuXG4gICAgICAgIGlmIChwYXR0ZXJuKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihhbGxQYXJhbXMsIGN1cnJlbnRQYXJhbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvY3VzZWRSb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICB2YXIgX3BhdHRlcm47XG5cbiAgICAgICAgICAvLyBJZiB0aGlzIGlzIHRoZSBmb2N1c2VkIHJvdXRlLCBrZWVwIHRoZSBwYXJhbXMgZm9yIGxhdGVyIHVzZVxuICAgICAgICAgIC8vIFdlIHNhdmUgaXQgaGVyZSBzaW5jZSBpdCdzIGJlZW4gc3RyaW5naWZpZWQgYWxyZWFkeVxuICAgICAgICAgIGZvY3VzZWRQYXJhbXMgPSB7IC4uLmN1cnJlbnRQYXJhbXNcbiAgICAgICAgICB9O1xuICAgICAgICAgIChfcGF0dGVybiA9IHBhdHRlcm4pID09PSBudWxsIHx8IF9wYXR0ZXJuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcGF0dGVybi5zcGxpdCgnLycpLmZpbHRlcihwID0+IHAuc3RhcnRzV2l0aCgnOicpKSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgICAgICAgLmZvckVhY2gocCA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZ2V0UGFyYW1OYW1lKHApOyAvLyBSZW1vdmUgdGhlIHBhcmFtcyBwcmVzZW50IGluIHRoZSBwYXR0ZXJuIHNpbmNlIHdlJ2xsIG9ubHkgdXNlIHRoZSByZXN0IGZvciBxdWVyeSBzdHJpbmdcblxuICAgICAgICAgICAgaWYgKGZvY3VzZWRQYXJhbXMpIHtcbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1keW5hbWljLWRlbGV0ZVxuICAgICAgICAgICAgICBkZWxldGUgZm9jdXNlZFBhcmFtc1tuYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBJZiB0aGVyZSBpcyBubyBgc2NyZWVuc2AgcHJvcGVydHkgb3Igbm8gbmVzdGVkIHN0YXRlLCB3ZSByZXR1cm4gcGF0dGVyblxuXG5cbiAgICAgIGlmICghY3VycmVudE9wdGlvbnNbcm91dGUubmFtZV0uc2NyZWVucyB8fCByb3V0ZS5zdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGhhc05leHQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gdHlwZW9mIHJvdXRlLnN0YXRlLmluZGV4ID09PSAnbnVtYmVyJyA/IHJvdXRlLnN0YXRlLmluZGV4IDogcm91dGUuc3RhdGUucm91dGVzLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IG5leHRSb3V0ZSA9IHJvdXRlLnN0YXRlLnJvdXRlc1tpbmRleF07XG4gICAgICAgIGNvbnN0IG5lc3RlZENvbmZpZyA9IGN1cnJlbnRPcHRpb25zW3JvdXRlLm5hbWVdLnNjcmVlbnM7IC8vIGlmIHRoZXJlIGlzIGNvbmZpZyBmb3IgbmV4dCByb3V0ZSBuYW1lLCB3ZSBnbyBkZWVwZXJcblxuICAgICAgICBpZiAobmVzdGVkQ29uZmlnICYmIG5leHRSb3V0ZS5uYW1lIGluIG5lc3RlZENvbmZpZykge1xuICAgICAgICAgIHJvdXRlID0gbmV4dFJvdXRlO1xuICAgICAgICAgIGN1cnJlbnRPcHRpb25zID0gbmVzdGVkQ29uZmlnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIElmIG5vdCwgdGhlcmUgaXMgbm8gc2Vuc2UgaW4gZ29pbmcgZGVlcGVyIGluIGNvbmZpZ1xuICAgICAgICAgIGhhc05leHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXR0ZXJuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXN0ZWRSb3V0ZU5hbWVzLmpvaW4oJy8nKTtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudE9wdGlvbnNbcm91dGUubmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGF0aCArPSBwYXR0ZXJuLnNwbGl0KCcvJykubWFwKHAgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gZ2V0UGFyYW1OYW1lKHApOyAvLyBXZSBkb24ndCBrbm93IHdoYXQgdG8gc2hvdyBmb3Igd2lsZGNhcmQgcGF0dGVybnNcbiAgICAgICAgLy8gU2hvd2luZyB0aGUgcm91dGUgbmFtZSBzZWVtcyBvaywgdGhvdWdoIHdoYXRldmVyIHdlIHNob3cgaGVyZSB3aWxsIGJlIGluY29ycmVjdFxuICAgICAgICAvLyBTaW5jZSB0aGUgcGFnZSBkb2Vzbid0IGFjdHVhbGx5IGV4aXN0XG5cbiAgICAgICAgaWYgKHAgPT09ICcqJykge1xuICAgICAgICAgIGlmIChsZWdhY3kpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1cGRhdGUgeW91ciBjb25maWcgdG8gdGhlIG5ldyBmb3JtYXQgdG8gdXNlIHdpbGRjYXJkIHBhdHRlcm4gKCcqJykuIGh0dHBzOi8vcmVhY3RuYXZpZ2F0aW9uLm9yZy9kb2NzLzUueC9jb25maWd1cmluZy1saW5rcy8jdXBkYXRpbmctY29uZmlnXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByb3V0ZS5uYW1lO1xuICAgICAgICB9IC8vIElmIHRoZSBwYXRoIGhhcyBhIHBhdHRlcm4gZm9yIGEgcGFyYW0sIHB1dCB0aGUgcGFyYW0gaW4gdGhlIHBhdGhcblxuXG4gICAgICAgIGlmIChwLnN0YXJ0c1dpdGgoJzonKSkge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gYWxsUGFyYW1zW25hbWVdO1xuXG4gICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgcC5lbmRzV2l0aCgnPycpKSB7XG4gICAgICAgICAgICAvLyBPcHRpb25hbCBwYXJhbXMgd2l0aG91dCB2YWx1ZSBhc3NpZ25lZCBpbiByb3V0ZS5wYXJhbXMgc2hvdWxkIGJlIGlnbm9yZWRcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQocCk7XG4gICAgICB9KS5qb2luKCcvJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGggKz0gZW5jb2RlVVJJQ29tcG9uZW50KHJvdXRlLm5hbWUpO1xuICAgIH1cblxuICAgIGlmICghZm9jdXNlZFBhcmFtcykge1xuICAgICAgZm9jdXNlZFBhcmFtcyA9IGZvY3VzZWRSb3V0ZS5wYXJhbXM7XG4gICAgfVxuXG4gICAgaWYgKHJvdXRlLnN0YXRlKSB7XG4gICAgICBwYXRoICs9ICcvJztcbiAgICB9IGVsc2UgaWYgKGZvY3VzZWRQYXJhbXMpIHtcbiAgICAgIGZvciAobGV0IHBhcmFtIGluIGZvY3VzZWRQYXJhbXMpIHtcbiAgICAgICAgaWYgKGZvY3VzZWRQYXJhbXNbcGFyYW1dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZHluYW1pYy1kZWxldGVcbiAgICAgICAgICBkZWxldGUgZm9jdXNlZFBhcmFtc1twYXJhbV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgcXVlcnkgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkoZm9jdXNlZFBhcmFtcyk7XG5cbiAgICAgIGlmIChxdWVyeSkge1xuICAgICAgICBwYXRoICs9IFwiP1wiLmNvbmNhdChxdWVyeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY3VycmVudCA9IHJvdXRlLnN0YXRlO1xuICB9IC8vIFJlbW92ZSBtdWx0aXBsZSBhcyB3ZWxsIGFzIHRyYWlsaW5nIHNsYXNoZXNcblxuXG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLysvZywgJy8nKTtcbiAgcGF0aCA9IHBhdGgubGVuZ3RoID4gMSA/IHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSA6IHBhdGg7XG4gIHJldHVybiBwYXRoO1xufSAvLyBPYmplY3QuZnJvbUVudHJpZXMgaXMgbm90IGF2YWlsYWJsZSBpbiBvbGRlciBpT1MgdmVyc2lvbnNcblxuY29uc3QgZnJvbUVudHJpZXMgPSBlbnRyaWVzID0+IGVudHJpZXMucmVkdWNlKChhY2MsIFtrLCB2XSkgPT4ge1xuICBpZiAoYWNjLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSB2YWx1ZSBmb3Iga2V5ICdcIi5jb25jYXQoaywgXCInIGFscmVhZHkgZXhpc3RzIGluIHRoZSBvYmplY3QuXCIpKTtcbiAgfVxuXG4gIGFjY1trXSA9IHY7XG4gIHJldHVybiBhY2M7XG59LCB7fSk7XG5cbmNvbnN0IGdldFBhcmFtTmFtZSA9IHBhdHRlcm4gPT4gcGF0dGVybi5yZXBsYWNlKC9eOi8sICcnKS5yZXBsYWNlKC9cXD8kLywgJycpO1xuXG5jb25zdCBqb2luUGF0aHMgPSAoLi4ucGF0aHMpID0+IFtdLmNvbmNhdCguLi5wYXRocy5tYXAocCA9PiBwLnNwbGl0KCcvJykpKS5maWx0ZXIoQm9vbGVhbikuam9pbignLycpO1xuXG5jb25zdCBjcmVhdGVDb25maWdJdGVtID0gKGxlZ2FjeSwgY29uZmlnLCBwYXJlbnRQYXR0ZXJuKSA9PiB7XG4gIHZhciBfcGF0dGVybjI7XG5cbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gSWYgYSBzdHJpbmcgaXMgc3BlY2lmaWVkIGFzIHRoZSB2YWx1ZSBvZiB0aGUga2V5KGUuZy4gRm9vOiAnL3BhdGgnKSwgdXNlIGl0IGFzIHRoZSBwYXR0ZXJuXG4gICAgY29uc3QgcGF0dGVybiA9IHBhcmVudFBhdHRlcm4gPyBqb2luUGF0aHMocGFyZW50UGF0dGVybiwgY29uZmlnKSA6IGNvbmZpZztcbiAgICByZXR1cm4ge1xuICAgICAgcGF0dGVyblxuICAgIH07XG4gIH0gLy8gSWYgYW4gb2JqZWN0IGlzIHNwZWNpZmllZCBhcyB0aGUgdmFsdWUgKGUuZy4gRm9vOiB7IC4uLiB9KSxcbiAgLy8gSXQgY2FuIGhhdmUgYHBhdGhgIHByb3BlcnR5IGFuZCBgc2NyZWVuc2AgcHJvcCB3aGljaCBoYXMgbmVzdGVkIGNvbmZpZ3NcblxuXG4gIGxldCBwYXR0ZXJuO1xuXG4gIGlmIChsZWdhY3kpIHtcbiAgICBwYXR0ZXJuID0gY29uZmlnLmV4YWN0ICE9PSB0cnVlICYmIHBhcmVudFBhdHRlcm4gJiYgY29uZmlnLnBhdGggPyBqb2luUGF0aHMocGFyZW50UGF0dGVybiwgY29uZmlnLnBhdGgpIDogY29uZmlnLnBhdGg7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGNvbmZpZy5leGFjdCAmJiBjb25maWcucGF0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBICdwYXRoJyBuZWVkcyB0byBiZSBzcGVjaWZpZWQgd2hlbiBzcGVjaWZ5aW5nICdleGFjdDogdHJ1ZScuIElmIHlvdSBkb24ndCB3YW50IHRoaXMgc2NyZWVuIGluIHRoZSBVUkwsIHNwZWNpZnkgaXQgYXMgZW1wdHkgc3RyaW5nLCBlLmcuIGBwYXRoOiAnJ2AuXCIpO1xuICAgIH1cblxuICAgIHBhdHRlcm4gPSBjb25maWcuZXhhY3QgIT09IHRydWUgPyBqb2luUGF0aHMocGFyZW50UGF0dGVybiB8fCAnJywgY29uZmlnLnBhdGggfHwgJycpIDogY29uZmlnLnBhdGggfHwgJyc7XG4gIH1cblxuICBjb25zdCBzY3JlZW5zID0gY29uZmlnLnNjcmVlbnMgPyBjcmVhdGVOb3JtYWxpemVkQ29uZmlncyhsZWdhY3ksIGNvbmZpZy5zY3JlZW5zLCBwYXR0ZXJuKSA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIHtcbiAgICAvLyBOb3JtYWxpemUgcGF0dGVybiB0byByZW1vdmUgYW55IGxlYWRpbmcsIHRyYWlsaW5nIHNsYXNoZXMsIGR1cGxpY2F0ZSBzbGFzaGVzIGV0Yy5cbiAgICBwYXR0ZXJuOiAoX3BhdHRlcm4yID0gcGF0dGVybikgPT09IG51bGwgfHwgX3BhdHRlcm4yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcGF0dGVybjIuc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbikuam9pbignLycpLFxuICAgIHN0cmluZ2lmeTogY29uZmlnLnN0cmluZ2lmeSxcbiAgICBzY3JlZW5zXG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVOb3JtYWxpemVkQ29uZmlncyA9IChsZWdhY3ksIG9wdGlvbnMsIHBhdHRlcm4pID0+IGZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpLm1hcCgoW25hbWUsIGNdKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGNyZWF0ZUNvbmZpZ0l0ZW0obGVnYWN5LCBjLCBwYXR0ZXJuKTtcbiAgcmV0dXJuIFtuYW1lLCByZXN1bHRdO1xufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0UGF0aEZyb21TdGF0ZS5qcy5tYXAiLCJpbXBvcnQgZXNjYXBlIGZyb20gJ2VzY2FwZS1zdHJpbmctcmVnZXhwJztcbmltcG9ydCAqIGFzIHF1ZXJ5U3RyaW5nIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgY2hlY2tMZWdhY3lQYXRoQ29uZmlnIGZyb20gJy4vY2hlY2tMZWdhY3lQYXRoQ29uZmlnJztcblxuLyoqXG4gKiBVdGlsaXR5IHRvIHBhcnNlIGEgcGF0aCBzdHJpbmcgdG8gaW5pdGlhbCBzdGF0ZSBvYmplY3QgYWNjZXB0ZWQgYnkgdGhlIGNvbnRhaW5lci5cbiAqIFRoaXMgaXMgdXNlZnVsIGZvciBkZWVwIGxpbmtpbmcgd2hlbiB3ZSBuZWVkIHRvIGhhbmRsZSB0aGUgaW5jb21pbmcgVVJMLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogZ2V0U3RhdGVGcm9tUGF0aChcbiAqICAgJy9jaGF0L2phbmUvNDInLFxuICogICB7XG4gKiAgICAgc2NyZWVuczoge1xuICogICAgICAgQ2hhdDoge1xuICogICAgICAgICBwYXRoOiAnY2hhdC86YXV0aG9yLzppZCcsXG4gKiAgICAgICAgIHBhcnNlOiB7IGlkOiBOdW1iZXIgfVxuICogICAgICAgfVxuICogICAgIH1cbiAqICAgfVxuICogKVxuICogYGBgXG4gKiBAcGFyYW0gcGF0aCBQYXRoIHN0cmluZyB0byBwYXJzZSBhbmQgY29udmVydCwgZS5nLiAvZm9vL2Jhcj9jb3VudD00Mi5cbiAqIEBwYXJhbSBvcHRpb25zIEV4dHJhIG9wdGlvbnMgdG8gZmluZS10dW5lIGhvdyB0byBwYXJzZSB0aGUgcGF0aC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3RhdGVGcm9tUGF0aChwYXRoLCBvcHRpb25zKSB7XG4gIGNvbnN0IFtsZWdhY3ksIGNvbXBhdE9wdGlvbnNdID0gY2hlY2tMZWdhY3lQYXRoQ29uZmlnKG9wdGlvbnMpO1xuICBsZXQgaW5pdGlhbFJvdXRlcyA9IFtdO1xuXG4gIGlmIChjb21wYXRPcHRpb25zICE9PSBudWxsICYmIGNvbXBhdE9wdGlvbnMgIT09IHZvaWQgMCAmJiBjb21wYXRPcHRpb25zLmluaXRpYWxSb3V0ZU5hbWUpIHtcbiAgICBpbml0aWFsUm91dGVzLnB1c2goe1xuICAgICAgaW5pdGlhbFJvdXRlTmFtZTogY29tcGF0T3B0aW9ucy5pbml0aWFsUm91dGVOYW1lLFxuICAgICAgcGFyZW50U2NyZWVuczogW11cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHNjcmVlbnMgPSBjb21wYXRPcHRpb25zID09PSBudWxsIHx8IGNvbXBhdE9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbXBhdE9wdGlvbnMuc2NyZWVucztcbiAgbGV0IHJlbWFpbmluZyA9IHBhdGgucmVwbGFjZSgvXFwvKy9nLCAnLycpIC8vIFJlcGxhY2UgbXVsdGlwbGUgc2xhc2ggKC8vKSB3aXRoIHNpbmdsZSBvbmVzXG4gIC5yZXBsYWNlKC9eXFwvLywgJycpIC8vIFJlbW92ZSBleHRyYSBsZWFkaW5nIHNsYXNoXG4gIC5yZXBsYWNlKC9cXD8uKiQvLCAnJyk7IC8vIFJlbW92ZSBxdWVyeSBwYXJhbXMgd2hpY2ggd2Ugd2lsbCBoYW5kbGUgbGF0ZXJcbiAgLy8gTWFrZSBzdXJlIHRoZXJlIGlzIGEgdHJhaWxpbmcgc2xhc2hcblxuICByZW1haW5pbmcgPSByZW1haW5pbmcuZW5kc1dpdGgoJy8nKSA/IHJlbWFpbmluZyA6IFwiXCIuY29uY2F0KHJlbWFpbmluZywgXCIvXCIpO1xuXG4gIGlmIChzY3JlZW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBXaGVuIG5vIGNvbmZpZyBpcyBzcGVjaWZpZWQsIHVzZSB0aGUgcGF0aCBzZWdtZW50cyBhcyByb3V0ZSBuYW1lc1xuICAgIGNvbnN0IHJvdXRlcyA9IHJlbWFpbmluZy5zcGxpdCgnLycpLmZpbHRlcihCb29sZWFuKS5tYXAoKHNlZ21lbnQsIGksIHNlbGYpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoc2VnbWVudCk7XG5cbiAgICAgIGlmIChpID09PSBzZWxmLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIHBhcmFtczogcGFyc2VRdWVyeVBhcmFtcyhwYXRoKVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgaWYgKHJvdXRlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVOZXN0ZWRTdGF0ZU9iamVjdChyb3V0ZXMsIGluaXRpYWxSb3V0ZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gLy8gQ3JlYXRlIGEgbm9ybWFsaXplZCBjb25maWdzIGFycmF5IHdoaWNoIHdpbGwgYmUgZWFzaWVyIHRvIHVzZVxuXG5cbiAgY29uc3QgY29uZmlncyA9IFtdLmNvbmNhdCguLi5PYmplY3Qua2V5cyhzY3JlZW5zKS5tYXAoa2V5ID0+IGNyZWF0ZU5vcm1hbGl6ZWRDb25maWdzKGxlZ2FjeSwga2V5LCBzY3JlZW5zLCBbXSwgaW5pdGlhbFJvdXRlcywgW10pKSkuc29ydCgoYSwgYikgPT4ge1xuICAgIC8vIFNvcnQgY29uZmlnIHNvIHRoYXQ6XG4gICAgLy8gLSB0aGUgbW9zdCBleGhhdXN0aXZlIG9uZXMgYXJlIGFsd2F5cyBhdCB0aGUgYmVnaW5uaW5nXG4gICAgLy8gLSBwYXR0ZXJucyB3aXRoIHdpbGRjYXJkIGFyZSBhbHdheXMgYXQgdGhlIGVuZFxuICAgIC8vIElmIDIgcGF0dGVybnMgYXJlIHNhbWUsIG1vdmUgdGhlIG9uZSB3aXRoIGxlc3Mgcm91dGUgbmFtZXMgdXBcbiAgICAvLyBUaGlzIGlzIGFuIGVycm9yIHN0YXRlLCBzbyBpdCdzIG9ubHkgdXNlZnVsIGZvciBjb25zaXN0ZW50IGVycm9yIG1lc3NhZ2VzXG4gICAgaWYgKGEucGF0dGVybiA9PT0gYi5wYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gYi5yb3V0ZU5hbWVzLmpvaW4oJz4nKS5sb2NhbGVDb21wYXJlKGEucm91dGVOYW1lcy5qb2luKCc+JykpO1xuICAgIH0gLy8gSWYgb25lIG9mIHRoZSBwYXR0ZXJucyBzdGFydHMgd2l0aCB0aGUgb3RoZXIsIGl0J3MgbW9yZSBleGhhdXN0aXZlXG4gICAgLy8gU28gbW92ZSBpdCB1cFxuXG5cbiAgICBpZiAoYS5wYXR0ZXJuLnN0YXJ0c1dpdGgoYi5wYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGlmIChiLnBhdHRlcm4uc3RhcnRzV2l0aChhLnBhdHRlcm4pKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBjb25zdCBhUGFydHMgPSBhLnBhdHRlcm4uc3BsaXQoJy8nKTtcbiAgICBjb25zdCBiUGFydHMgPSBiLnBhdHRlcm4uc3BsaXQoJy8nKTtcbiAgICBjb25zdCBhV2lsZGNhcmRJbmRleCA9IGFQYXJ0cy5pbmRleE9mKCcqJyk7XG4gICAgY29uc3QgYldpbGRjYXJkSW5kZXggPSBiUGFydHMuaW5kZXhPZignKicpOyAvLyBJZiBvbmx5IG9uZSBvZiB0aGUgcGF0dGVybnMgaGFzIGEgd2lsZGNhcmQsIG1vdmUgaXQgZG93biBpbiB0aGUgbGlzdFxuXG4gICAgaWYgKGFXaWxkY2FyZEluZGV4ID09PSAtMSAmJiBiV2lsZGNhcmRJbmRleCAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBpZiAoYVdpbGRjYXJkSW5kZXggIT09IC0xICYmIGJXaWxkY2FyZEluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgaWYgKGFXaWxkY2FyZEluZGV4ID09PSBiV2lsZGNhcmRJbmRleCkge1xuICAgICAgLy8gSWYgYGJgIGhhcyBtb3JlIGAvYCwgaXQncyBtb3JlIGV4aGF1c3RpdmVcbiAgICAgIC8vIFNvIHdlIG1vdmUgaXQgdXAgaW4gdGhlIGxpc3RcbiAgICAgIHJldHVybiBiUGFydHMubGVuZ3RoIC0gYVBhcnRzLmxlbmd0aDtcbiAgICB9IC8vIElmIHRoZSB3aWxkY2FyZCBhcHBlYXJzIGxhdGVyIGluIHRoZSBwYXR0ZXJuIChoYXMgaGlnaGVyIGluZGV4KSwgaXQncyBtb3JlIHNwZWNpZmljXG4gICAgLy8gU28gd2UgbW92ZSBpdCB1cCBpbiB0aGUgbGlzdFxuXG5cbiAgICByZXR1cm4gYldpbGRjYXJkSW5kZXggLSBhV2lsZGNhcmRJbmRleDtcbiAgfSk7IC8vIENoZWNrIGZvciBkdXBsaWNhdGUgcGF0dGVybnMgaW4gdGhlIGNvbmZpZ1xuXG4gIGNvbmZpZ3MucmVkdWNlKChhY2MsIGNvbmZpZykgPT4ge1xuICAgIGlmIChhY2NbY29uZmlnLnBhdHRlcm5dKSB7XG4gICAgICBjb25zdCBhID0gYWNjW2NvbmZpZy5wYXR0ZXJuXS5yb3V0ZU5hbWVzO1xuICAgICAgY29uc3QgYiA9IGNvbmZpZy5yb3V0ZU5hbWVzOyAvLyBJdCdzIG5vdCBhIHByb2JsZW0gaWYgdGhlIHBhdGggc3RyaW5nIG9taXR0ZWQgZnJvbSBhIGlubmVyIG1vc3Qgc2NyZWVuXG4gICAgICAvLyBGb3IgZXhhbXBsZSwgaXQncyBvayBpZiBhIHBhdGggcmVzb2x2ZXMgdG8gYEEgPiBCID4gQ2Agb3IgYEEgPiBCYFxuXG4gICAgICBjb25zdCBpbnRlcnNlY3RzID0gYS5sZW5ndGggPiBiLmxlbmd0aCA/IGIuZXZlcnkoKGl0LCBpKSA9PiBhW2ldID09PSBpdCkgOiBhLmV2ZXJ5KChpdCwgaSkgPT4gYltpXSA9PT0gaXQpO1xuXG4gICAgICBpZiAoIWludGVyc2VjdHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRm91bmQgY29uZmxpY3Rpbmcgc2NyZWVucyB3aXRoIHRoZSBzYW1lIHBhdHRlcm4uIFRoZSBwYXR0ZXJuICdcIi5jb25jYXQoY29uZmlnLnBhdHRlcm4sIFwiJyByZXNvbHZlcyB0byBib3RoICdcIikuY29uY2F0KGEuam9pbignID4gJyksIFwiJyBhbmQgJ1wiKS5jb25jYXQoYi5qb2luKCcgPiAnKSwgXCInLiBQYXR0ZXJucyBtdXN0IGJlIHVuaXF1ZSBhbmQgY2Fubm90IHJlc29sdmUgdG8gbW9yZSB0aGFuIG9uZSBzY3JlZW4uXCIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhY2MsIHtcbiAgICAgIFtjb25maWcucGF0dGVybl06IGNvbmZpZ1xuICAgIH0pO1xuICB9LCB7fSk7XG5cbiAgaWYgKHJlbWFpbmluZyA9PT0gJy8nKSB7XG4gICAgLy8gV2UgbmVlZCB0byBhZGQgc3BlY2lhbCBoYW5kbGluZyBvZiBlbXB0eSBwYXRoIHNvIG5hdmlnYXRpb24gdG8gZW1wdHkgcGF0aCBhbHNvIHdvcmtzXG4gICAgLy8gV2hlbiBoYW5kbGluZyBlbXB0eSBwYXRoLCB3ZSBzaG91bGQgb25seSBsb29rIGF0IHRoZSByb290IGxldmVsIGNvbmZpZ1xuICAgIGNvbnN0IG1hdGNoID0gY29uZmlncy5maW5kKGNvbmZpZyA9PiBjb25maWcucGF0aCA9PT0gJycgJiYgY29uZmlnLnJvdXRlTmFtZXMuZXZlcnkoIC8vIE1ha2Ugc3VyZSB0aGF0IG5vbmUgb2YgdGhlIHBhcmVudCBjb25maWdzIGhhdmUgYSBub24tZW1wdHkgcGF0aCBkZWZpbmVkXG4gICAgbmFtZSA9PiB7XG4gICAgICB2YXIgX2NvbmZpZ3MkZmluZDtcblxuICAgICAgcmV0dXJuICEoKF9jb25maWdzJGZpbmQgPSBjb25maWdzLmZpbmQoYyA9PiBjLnNjcmVlbiA9PT0gbmFtZSkpICE9PSBudWxsICYmIF9jb25maWdzJGZpbmQgIT09IHZvaWQgMCAmJiBfY29uZmlncyRmaW5kLnBhdGgpO1xuICAgIH0pKTtcblxuICAgIGlmIChtYXRjaCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZU5lc3RlZFN0YXRlT2JqZWN0KG1hdGNoLnJvdXRlTmFtZXMubWFwKChuYW1lLCBpLCBzZWxmKSA9PiB7XG4gICAgICAgIGlmIChpID09PSBzZWxmLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHBhcmFtczogcGFyc2VRdWVyeVBhcmFtcyhwYXRoLCBtYXRjaC5wYXJzZSlcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lXG4gICAgICAgIH07XG4gICAgICB9KSwgaW5pdGlhbFJvdXRlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGxldCByZXN1bHQ7XG4gIGxldCBjdXJyZW50O1xuXG4gIGlmIChsZWdhY3kgPT09IGZhbHNlKSB7XG4gICAgLy8gSWYgd2UncmUgbm90IGluIGxlZ2FjeSBtb2RlLCwgd2UgbWF0Y2ggdGhlIHdob2xlIHBhdGggYWdhaW5zdCB0aGUgcmVnZXggaW5zdGVhZCBvZiBzZWdtZW50c1xuICAgIC8vIFRoaXMgbWFrZXMgc3VyZSBtYXRjaGVzIHN1Y2ggYXMgd2lsZGNhcmQgd2lsbCBjYXRjaCBhbnkgdW5tYXRjaGVkIHJvdXRlcywgZXZlbiBpZiBuZXN0ZWRcbiAgICBjb25zdCB7XG4gICAgICByb3V0ZXMsXG4gICAgICByZW1haW5pbmdQYXRoXG4gICAgfSA9IG1hdGNoQWdhaW5zdENvbmZpZ3MocmVtYWluaW5nLCBjb25maWdzLm1hcChjID0+ICh7IC4uLmMsXG4gICAgICAvLyBBZGQgYCRgIHRvIHRoZSByZWdleCB0byBtYWtlIHN1cmUgaXQgbWF0Y2hlcyB0aWxsIGVuZCBvZiB0aGUgcGF0aCBhbmQgbm90IGp1c3QgYmVnaW5uaW5nXG4gICAgICByZWdleDogYy5yZWdleCA/IG5ldyBSZWdFeHAoYy5yZWdleC5zb3VyY2UgKyAnJCcpIDogdW5kZWZpbmVkXG4gICAgfSkpKTtcblxuICAgIGlmIChyb3V0ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gVGhpcyB3aWxsIGFsd2F5cyBiZSBlbXB0eSBpZiBmdWxsIHBhdGggbWF0Y2hlZFxuICAgICAgY3VycmVudCA9IGNyZWF0ZU5lc3RlZFN0YXRlT2JqZWN0KHJvdXRlcywgaW5pdGlhbFJvdXRlcyk7XG4gICAgICByZW1haW5pbmcgPSByZW1haW5pbmdQYXRoO1xuICAgICAgcmVzdWx0ID0gY3VycmVudDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSW4gbGVnYWN5IG1vZGUsIHdlIGRpdmlkZSB0aGUgcGF0aCBpbnRvIHNlZ21lbnRzIGFuZCBtYXRjaCBwaWVjZSBieSBwaWVjZVxuICAgIC8vIFRoaXMgcHJlc2VydmVzIHRoZSBsZWdhY3kgYmVoYXZpb3VyLCBidXQgd2Ugc2hvdWxkIHJlbW92ZSBpdCBpbiBuZXh0IG1ham9yXG4gICAgd2hpbGUgKHJlbWFpbmluZykge1xuICAgICAgbGV0IHtcbiAgICAgICAgcm91dGVzLFxuICAgICAgICByZW1haW5pbmdQYXRoXG4gICAgICB9ID0gbWF0Y2hBZ2FpbnN0Q29uZmlncyhyZW1haW5pbmcsIGNvbmZpZ3MpO1xuICAgICAgcmVtYWluaW5nID0gcmVtYWluaW5nUGF0aDsgLy8gSWYgd2UgaGFkbid0IG1hdGNoZWQgYW55IHNlZ21lbnRzIGVhcmxpZXIsIHVzZSB0aGUgcGF0aCBhcyByb3V0ZSBuYW1lXG5cbiAgICAgIGlmIChyb3V0ZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBzZWdtZW50cyA9IHJlbWFpbmluZy5zcGxpdCgnLycpO1xuICAgICAgICByb3V0ZXMgPSBbe1xuICAgICAgICAgIG5hbWU6IGRlY29kZVVSSUNvbXBvbmVudChzZWdtZW50c1swXSlcbiAgICAgICAgfV07XG4gICAgICAgIHNlZ21lbnRzLnNoaWZ0KCk7XG4gICAgICAgIHJlbWFpbmluZyA9IHNlZ21lbnRzLmpvaW4oJy8nKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhdGUgPSBjcmVhdGVOZXN0ZWRTdGF0ZU9iamVjdChyb3V0ZXMsIGluaXRpYWxSb3V0ZXMpO1xuXG4gICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICB2YXIgX2N1cnJlbnQyO1xuXG4gICAgICAgIC8vIFRoZSBzdGF0ZSBzaG91bGQgYmUgbmVzdGVkIGluc2lkZSB0aGUgZGVlcGVzdCByb3V0ZSB3ZSBwYXJzZWQgYmVmb3JlXG4gICAgICAgIHdoaWxlICgoX2N1cnJlbnQgPSBjdXJyZW50KSAhPT0gbnVsbCAmJiBfY3VycmVudCAhPT0gdm9pZCAwICYmIF9jdXJyZW50LnJvdXRlc1tjdXJyZW50LmluZGV4IHx8IDBdLnN0YXRlKSB7XG4gICAgICAgICAgdmFyIF9jdXJyZW50O1xuXG4gICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucm91dGVzW2N1cnJlbnQuaW5kZXggfHwgMF0uc3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50LnJvdXRlc1soKF9jdXJyZW50MiA9IGN1cnJlbnQpID09PSBudWxsIHx8IF9jdXJyZW50MiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2N1cnJlbnQyLmluZGV4KSB8fCAwXS5zdGF0ZSA9IHN0YXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnQgPSBzdGF0ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoY3VycmVudCA9PSBudWxsIHx8IHJlc3VsdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0IHJvdXRlID0gZmluZEZvY3VzZWRSb3V0ZShjdXJyZW50KTtcbiAgY29uc3QgcGFyYW1zID0gcGFyc2VRdWVyeVBhcmFtcyhwYXRoLCBmaW5kUGFyc2VDb25maWdGb3JSb3V0ZShyb3V0ZS5uYW1lLCBjb25maWdzKSk7XG5cbiAgaWYgKHBhcmFtcykge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHBhcmFtcyBzaG91bGQgYmUgdHJlYXRlZCBhcyByZWFkLW9ubHksIGJ1dCB3ZSdyZSBjcmVhdGluZyB0aGUgc3RhdGUgaGVyZSBzbyBpdCBkb2Vzbid0IG1hdHRlclxuICAgIHJvdXRlLnBhcmFtcyA9IHsgLi4ucm91dGUucGFyYW1zLFxuICAgICAgLi4ucGFyYW1zXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmNvbnN0IGpvaW5QYXRocyA9ICguLi5wYXRocykgPT4gW10uY29uY2F0KC4uLnBhdGhzLm1hcChwID0+IHAuc3BsaXQoJy8nKSkpLmZpbHRlcihCb29sZWFuKS5qb2luKCcvJyk7XG5cbmNvbnN0IG1hdGNoQWdhaW5zdENvbmZpZ3MgPSAocmVtYWluaW5nLCBjb25maWdzKSA9PiB7XG4gIGxldCByb3V0ZXM7XG4gIGxldCByZW1haW5pbmdQYXRoID0gcmVtYWluaW5nOyAvLyBHbyB0aHJvdWdoIGFsbCBjb25maWdzLCBhbmQgc2VlIGlmIHRoZSBuZXh0IHBhdGggc2VnbWVudCBtYXRjaGVzIG91ciByZWdleFxuXG4gIGZvciAoY29uc3QgY29uZmlnIG9mIGNvbmZpZ3MpIHtcbiAgICBpZiAoIWNvbmZpZy5yZWdleCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29uc3QgbWF0Y2ggPSByZW1haW5pbmdQYXRoLm1hdGNoKGNvbmZpZy5yZWdleCk7IC8vIElmIG91ciByZWdleCBtYXRjaGVzLCB3ZSBuZWVkIHRvIGV4dHJhY3QgcGFyYW1zIGZyb20gdGhlIHBhdGhcblxuICAgIGlmIChtYXRjaCkge1xuICAgICAgdmFyIF9jb25maWckcGF0dGVybjtcblxuICAgICAgY29uc3QgbWF0Y2hlZFBhcmFtcyA9IChfY29uZmlnJHBhdHRlcm4gPSBjb25maWcucGF0dGVybikgPT09IG51bGwgfHwgX2NvbmZpZyRwYXR0ZXJuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY29uZmlnJHBhdHRlcm4uc3BsaXQoJy8nKS5maWx0ZXIocCA9PiBwLnN0YXJ0c1dpdGgoJzonKSkucmVkdWNlKChhY2MsIHAsIGkpID0+IE9iamVjdC5hc3NpZ24oYWNjLCB7XG4gICAgICAgIC8vIFRoZSBwYXJhbSBzZWdtZW50cyBhcHBlYXIgZXZlcnkgc2Vjb25kIGl0ZW0gc3RhcnRpbmcgZnJvbSAyIGluIHRoZSByZWdleCBtYXRjaCByZXN1bHRcbiAgICAgICAgW3BdOiBtYXRjaFsoaSArIDEpICogMl0ucmVwbGFjZSgvXFwvLywgJycpXG4gICAgICB9KSwge30pO1xuICAgICAgcm91dGVzID0gY29uZmlnLnJvdXRlTmFtZXMubWFwKG5hbWUgPT4ge1xuICAgICAgICB2YXIgX2NvbmZpZyRwYXRoO1xuXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IGNvbmZpZ3MuZmluZChjID0+IGMuc2NyZWVuID09PSBuYW1lKTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gY29uZmlnID09PSBudWxsIHx8IGNvbmZpZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9jb25maWckcGF0aCA9IGNvbmZpZy5wYXRoKSA9PT0gbnVsbCB8fCBfY29uZmlnJHBhdGggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jb25maWckcGF0aC5zcGxpdCgnLycpLmZpbHRlcihwID0+IHAuc3RhcnRzV2l0aCgnOicpKS5yZWR1Y2UoKGFjYywgcCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWF0Y2hlZFBhcmFtc1twXTtcblxuICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIF9jb25maWckcGFyc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHAucmVwbGFjZSgvXjovLCAnJykucmVwbGFjZSgvXFw/JC8sICcnKTtcbiAgICAgICAgICAgIGFjY1trZXldID0gKF9jb25maWckcGFyc2UgPSBjb25maWcucGFyc2UpICE9PSBudWxsICYmIF9jb25maWckcGFyc2UgIT09IHZvaWQgMCAmJiBfY29uZmlnJHBhcnNlW2tleV0gPyBjb25maWcucGFyc2Vba2V5XSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgaWYgKHBhcmFtcyAmJiBPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFyYW1zXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICByZW1haW5pbmdQYXRoID0gcmVtYWluaW5nUGF0aC5yZXBsYWNlKG1hdGNoWzFdLCAnJyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJvdXRlcyxcbiAgICByZW1haW5pbmdQYXRoXG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVOb3JtYWxpemVkQ29uZmlncyA9IChsZWdhY3ksIHNjcmVlbiwgcm91dGVDb25maWcsIHJvdXRlTmFtZXMgPSBbXSwgaW5pdGlhbHMsIHBhcmVudFNjcmVlbnMsIHBhcmVudFBhdHRlcm4pID0+IHtcbiAgY29uc3QgY29uZmlncyA9IFtdO1xuICByb3V0ZU5hbWVzLnB1c2goc2NyZWVuKTtcbiAgcGFyZW50U2NyZWVucy5wdXNoKHNjcmVlbik7XG4gIGNvbnN0IGNvbmZpZyA9IHJvdXRlQ29uZmlnW3NjcmVlbl07XG5cbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gSWYgYSBzdHJpbmcgaXMgc3BlY2lmaWVkIGFzIHRoZSB2YWx1ZSBvZiB0aGUga2V5KGUuZy4gRm9vOiAnL3BhdGgnKSwgdXNlIGl0IGFzIHRoZSBwYXR0ZXJuXG4gICAgY29uc3QgcGF0dGVybiA9IHBhcmVudFBhdHRlcm4gPyBqb2luUGF0aHMocGFyZW50UGF0dGVybiwgY29uZmlnKSA6IGNvbmZpZztcbiAgICBjb25maWdzLnB1c2goY3JlYXRlQ29uZmlnSXRlbShsZWdhY3ksIHNjcmVlbiwgcm91dGVOYW1lcywgcGF0dGVybiwgY29uZmlnKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICBsZXQgcGF0dGVybjsgLy8gaWYgYW4gb2JqZWN0IGlzIHNwZWNpZmllZCBhcyB0aGUgdmFsdWUgKGUuZy4gRm9vOiB7IC4uLiB9KSxcbiAgICAvLyBpdCBjYW4gaGF2ZSBgcGF0aGAgcHJvcGVydHkgYW5kXG4gICAgLy8gaXQgY291bGQgaGF2ZSBgc2NyZWVuc2AgcHJvcCB3aGljaCBoYXMgbmVzdGVkIGNvbmZpZ3NcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAobGVnYWN5KSB7XG4gICAgICAgIHBhdHRlcm4gPSBjb25maWcuZXhhY3QgIT09IHRydWUgJiYgcGFyZW50UGF0dGVybiA/IGpvaW5QYXRocyhwYXJlbnRQYXR0ZXJuLCBjb25maWcucGF0aCkgOiBjb25maWcucGF0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb25maWcuZXhhY3QgJiYgY29uZmlnLnBhdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgJ3BhdGgnIG5lZWRzIHRvIGJlIHNwZWNpZmllZCB3aGVuIHNwZWNpZnlpbmcgJ2V4YWN0OiB0cnVlJy4gSWYgeW91IGRvbid0IHdhbnQgdGhpcyBzY3JlZW4gaW4gdGhlIFVSTCwgc3BlY2lmeSBpdCBhcyBlbXB0eSBzdHJpbmcsIGUuZy4gYHBhdGg6ICcnYC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBwYXR0ZXJuID0gY29uZmlnLmV4YWN0ICE9PSB0cnVlID8gam9pblBhdGhzKHBhcmVudFBhdHRlcm4gfHwgJycsIGNvbmZpZy5wYXRoIHx8ICcnKSA6IGNvbmZpZy5wYXRoIHx8ICcnO1xuICAgICAgfVxuXG4gICAgICBjb25maWdzLnB1c2goY3JlYXRlQ29uZmlnSXRlbShsZWdhY3ksIHNjcmVlbiwgcm91dGVOYW1lcywgcGF0dGVybiwgY29uZmlnLnBhdGgsIGNvbmZpZy5wYXJzZSkpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NyZWVucykge1xuICAgICAgLy8gcHJvcGVydHkgYGluaXRpYWxSb3V0ZU5hbWVgIHdpdGhvdXQgYHNjcmVlbnNgIGhhcyBubyBwdXJwb3NlXG4gICAgICBpZiAoY29uZmlnLmluaXRpYWxSb3V0ZU5hbWUpIHtcbiAgICAgICAgaW5pdGlhbHMucHVzaCh7XG4gICAgICAgICAgaW5pdGlhbFJvdXRlTmFtZTogY29uZmlnLmluaXRpYWxSb3V0ZU5hbWUsXG4gICAgICAgICAgcGFyZW50U2NyZWVuc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMoY29uZmlnLnNjcmVlbnMpLmZvckVhY2gobmVzdGVkQ29uZmlnID0+IHtcbiAgICAgICAgdmFyIF9wYXR0ZXJuO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNyZWF0ZU5vcm1hbGl6ZWRDb25maWdzKGxlZ2FjeSwgbmVzdGVkQ29uZmlnLCBjb25maWcuc2NyZWVucywgcm91dGVOYW1lcywgaW5pdGlhbHMsIFsuLi5wYXJlbnRTY3JlZW5zXSwgKF9wYXR0ZXJuID0gcGF0dGVybikgIT09IG51bGwgJiYgX3BhdHRlcm4gIT09IHZvaWQgMCA/IF9wYXR0ZXJuIDogcGFyZW50UGF0dGVybik7XG4gICAgICAgIGNvbmZpZ3MucHVzaCguLi5yZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcm91dGVOYW1lcy5wb3AoKTtcbiAgcmV0dXJuIGNvbmZpZ3M7XG59O1xuXG5jb25zdCBjcmVhdGVDb25maWdJdGVtID0gKGxlZ2FjeSwgc2NyZWVuLCByb3V0ZU5hbWVzLCBwYXR0ZXJuLCBwYXRoLCBwYXJzZSkgPT4ge1xuICAvLyBOb3JtYWxpemUgcGF0dGVybiB0byByZW1vdmUgYW55IGxlYWRpbmcsIHRyYWlsaW5nIHNsYXNoZXMsIGR1cGxpY2F0ZSBzbGFzaGVzIGV0Yy5cbiAgcGF0dGVybiA9IHBhdHRlcm4uc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbikuam9pbignLycpO1xuICBjb25zdCByZWdleCA9IHBhdHRlcm4gPyBuZXcgUmVnRXhwKFwiXihcIi5jb25jYXQocGF0dGVybi5zcGxpdCgnLycpLm1hcChpdCA9PiB7XG4gICAgaWYgKGxlZ2FjeSAmJiBpdCA9PT0gJyonKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXBkYXRlIHlvdXIgY29uZmlnIHRvIHRoZSBuZXcgZm9ybWF0IHRvIHVzZSB3aWxkY2FyZCBwYXR0ZXJuICgnKicpLiBodHRwczovL3JlYWN0bmF2aWdhdGlvbi5vcmcvZG9jcy81LngvY29uZmlndXJpbmctbGlua3MvI3VwZGF0aW5nLWNvbmZpZ1wiKTtcbiAgICB9XG5cbiAgICBpZiAoaXQuc3RhcnRzV2l0aCgnOicpKSB7XG4gICAgICByZXR1cm4gXCIoKFteL10rXFxcXC8pXCIuY29uY2F0KGl0LmVuZHNXaXRoKCc/JykgPyAnPycgOiAnJywgXCIpXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBcIlwiLmNvbmNhdChpdCA9PT0gJyonID8gJy4qJyA6IGVzY2FwZShpdCksIFwiXFxcXC9cIik7XG4gIH0pLmpvaW4oJycpLCBcIilcIikpIDogdW5kZWZpbmVkO1xuICByZXR1cm4ge1xuICAgIHNjcmVlbixcbiAgICByZWdleCxcbiAgICBwYXR0ZXJuLFxuICAgIHBhdGgsXG4gICAgLy8gVGhlIHJvdXRlTmFtZXMgYXJyYXkgaXMgbXV0YXRlZCwgc28gY29weSBpdCB0byBrZWVwIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgcm91dGVOYW1lczogWy4uLnJvdXRlTmFtZXNdLFxuICAgIHBhcnNlXG4gIH07XG59O1xuXG5jb25zdCBmaW5kUGFyc2VDb25maWdGb3JSb3V0ZSA9IChyb3V0ZU5hbWUsIGZsYXRDb25maWcpID0+IHtcbiAgZm9yIChjb25zdCBjb25maWcgb2YgZmxhdENvbmZpZykge1xuICAgIGlmIChyb3V0ZU5hbWUgPT09IGNvbmZpZy5yb3V0ZU5hbWVzW2NvbmZpZy5yb3V0ZU5hbWVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICByZXR1cm4gY29uZmlnLnBhcnNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59OyAvLyBUcnkgdG8gZmluZCBhbiBpbml0aWFsIHJvdXRlIGNvbm5lY3RlZCB3aXRoIHRoZSBvbmUgcGFzc2VkXG5cblxuY29uc3QgZmluZEluaXRpYWxSb3V0ZSA9IChyb3V0ZU5hbWUsIHBhcmVudFNjcmVlbnMsIGluaXRpYWxSb3V0ZXMpID0+IHtcbiAgZm9yIChjb25zdCBjb25maWcgb2YgaW5pdGlhbFJvdXRlcykge1xuICAgIGlmIChwYXJlbnRTY3JlZW5zLmxlbmd0aCA9PT0gY29uZmlnLnBhcmVudFNjcmVlbnMubGVuZ3RoKSB7XG4gICAgICBsZXQgc2FtZVBhcmVudHMgPSB0cnVlO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmVudFNjcmVlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHBhcmVudFNjcmVlbnNbaV0ubG9jYWxlQ29tcGFyZShjb25maWcucGFyZW50U2NyZWVuc1tpXSkgIT09IDApIHtcbiAgICAgICAgICBzYW1lUGFyZW50cyA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzYW1lUGFyZW50cykge1xuICAgICAgICByZXR1cm4gcm91dGVOYW1lICE9PSBjb25maWcuaW5pdGlhbFJvdXRlTmFtZSA/IGNvbmZpZy5pbml0aWFsUm91dGVOYW1lIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59OyAvLyByZXR1cm5zIHN0YXRlIG9iamVjdCB3aXRoIHZhbHVlcyBkZXBlbmRpbmcgb24gd2hldGhlclxuLy8gaXQgaXMgdGhlIGVuZCBvZiBzdGF0ZSBhbmQgaWYgdGhlcmUgaXMgaW5pdGlhbFJvdXRlIGZvciB0aGlzIGxldmVsXG5cblxuY29uc3QgY3JlYXRlU3RhdGVPYmplY3QgPSAoaW5pdGlhbFJvdXRlLCByb3V0ZSwgaXNFbXB0eSkgPT4ge1xuICBpZiAoaXNFbXB0eSkge1xuICAgIGlmIChpbml0aWFsUm91dGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4OiAxLFxuICAgICAgICByb3V0ZXM6IFt7XG4gICAgICAgICAgbmFtZTogaW5pdGlhbFJvdXRlXG4gICAgICAgIH0sIHJvdXRlXVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm91dGVzOiBbcm91dGVdXG4gICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaW5pdGlhbFJvdXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbmRleDogMSxcbiAgICAgICAgcm91dGVzOiBbe1xuICAgICAgICAgIG5hbWU6IGluaXRpYWxSb3V0ZVxuICAgICAgICB9LCB7IC4uLnJvdXRlLFxuICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICByb3V0ZXM6IFtdXG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm91dGVzOiBbeyAuLi5yb3V0ZSxcbiAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgcm91dGVzOiBbXVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH07XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjcmVhdGVOZXN0ZWRTdGF0ZU9iamVjdCA9IChyb3V0ZXMsIGluaXRpYWxSb3V0ZXMpID0+IHtcbiAgbGV0IHN0YXRlO1xuICBsZXQgcm91dGUgPSByb3V0ZXMuc2hpZnQoKTtcbiAgY29uc3QgcGFyZW50U2NyZWVucyA9IFtdO1xuICBsZXQgaW5pdGlhbFJvdXRlID0gZmluZEluaXRpYWxSb3V0ZShyb3V0ZS5uYW1lLCBwYXJlbnRTY3JlZW5zLCBpbml0aWFsUm91dGVzKTtcbiAgcGFyZW50U2NyZWVucy5wdXNoKHJvdXRlLm5hbWUpO1xuICBzdGF0ZSA9IGNyZWF0ZVN0YXRlT2JqZWN0KGluaXRpYWxSb3V0ZSwgcm91dGUsIHJvdXRlcy5sZW5ndGggPT09IDApO1xuXG4gIGlmIChyb3V0ZXMubGVuZ3RoID4gMCkge1xuICAgIGxldCBuZXN0ZWRTdGF0ZSA9IHN0YXRlO1xuXG4gICAgd2hpbGUgKHJvdXRlID0gcm91dGVzLnNoaWZ0KCkpIHtcbiAgICAgIGluaXRpYWxSb3V0ZSA9IGZpbmRJbml0aWFsUm91dGUocm91dGUubmFtZSwgcGFyZW50U2NyZWVucywgaW5pdGlhbFJvdXRlcyk7XG4gICAgICBjb25zdCBuZXN0ZWRTdGF0ZUluZGV4ID0gbmVzdGVkU3RhdGUuaW5kZXggfHwgbmVzdGVkU3RhdGUucm91dGVzLmxlbmd0aCAtIDE7XG4gICAgICBuZXN0ZWRTdGF0ZS5yb3V0ZXNbbmVzdGVkU3RhdGVJbmRleF0uc3RhdGUgPSBjcmVhdGVTdGF0ZU9iamVjdChpbml0aWFsUm91dGUsIHJvdXRlLCByb3V0ZXMubGVuZ3RoID09PSAwKTtcblxuICAgICAgaWYgKHJvdXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG5lc3RlZFN0YXRlID0gbmVzdGVkU3RhdGUucm91dGVzW25lc3RlZFN0YXRlSW5kZXhdLnN0YXRlO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnRTY3JlZW5zLnB1c2gocm91dGUubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuY29uc3QgZmluZEZvY3VzZWRSb3V0ZSA9IHN0YXRlID0+IHtcbiAgdmFyIF9jdXJyZW50NDtcblxuICBsZXQgY3VycmVudCA9IHN0YXRlO1xuXG4gIHdoaWxlICgoX2N1cnJlbnQzID0gY3VycmVudCkgIT09IG51bGwgJiYgX2N1cnJlbnQzICE9PSB2b2lkIDAgJiYgX2N1cnJlbnQzLnJvdXRlc1tjdXJyZW50LmluZGV4IHx8IDBdLnN0YXRlKSB7XG4gICAgdmFyIF9jdXJyZW50MztcblxuICAgIC8vIFRoZSBxdWVyeSBwYXJhbXMgYXBwbHkgdG8gdGhlIGRlZXBlc3Qgcm91dGVcbiAgICBjdXJyZW50ID0gY3VycmVudC5yb3V0ZXNbY3VycmVudC5pbmRleCB8fCAwXS5zdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IHJvdXRlID0gY3VycmVudC5yb3V0ZXNbKChfY3VycmVudDQgPSBjdXJyZW50KSA9PT0gbnVsbCB8fCBfY3VycmVudDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jdXJyZW50NC5pbmRleCkgfHwgMF07XG4gIHJldHVybiByb3V0ZTtcbn07XG5cbmNvbnN0IHBhcnNlUXVlcnlQYXJhbXMgPSAocGF0aCwgcGFyc2VDb25maWcpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBwYXRoLnNwbGl0KCc/JylbMV07XG4gIGNvbnN0IHBhcmFtcyA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHF1ZXJ5KTtcblxuICBpZiAocGFyc2VDb25maWcpIHtcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBpZiAocGFyc2VDb25maWdbbmFtZV0gJiYgdHlwZW9mIHBhcmFtc1tuYW1lXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGFyYW1zW25hbWVdID0gcGFyc2VDb25maWdbbmFtZV0ocGFyYW1zW25hbWVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCA/IHBhcmFtcyA6IHVuZGVmaW5lZDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZXRTdGF0ZUZyb21QYXRoLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJ0ByZWFjdC1uYXZpZ2F0aW9uL3JvdXRlcnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYXNlTmF2aWdhdGlvbkNvbnRhaW5lciB9IGZyb20gJy4vQmFzZU5hdmlnYXRpb25Db250YWluZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVOYXZpZ2F0b3JGYWN0b3J5IH0gZnJvbSAnLi9jcmVhdGVOYXZpZ2F0b3JGYWN0b3J5JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmF2aWdhdGlvbkhlbHBlcnNDb250ZXh0IH0gZnJvbSAnLi9OYXZpZ2F0aW9uSGVscGVyc0NvbnRleHQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOYXZpZ2F0aW9uQ29udGV4dCB9IGZyb20gJy4vTmF2aWdhdGlvbkNvbnRleHQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOYXZpZ2F0aW9uUm91dGVDb250ZXh0IH0gZnJvbSAnLi9OYXZpZ2F0aW9uUm91dGVDb250ZXh0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VycmVudFJlbmRlckNvbnRleHQgfSBmcm9tICcuL0N1cnJlbnRSZW5kZXJDb250ZXh0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlTmF2aWdhdGlvbkJ1aWxkZXIgfSBmcm9tICcuL3VzZU5hdmlnYXRpb25CdWlsZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlTmF2aWdhdGlvbiB9IGZyb20gJy4vdXNlTmF2aWdhdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVJvdXRlIH0gZnJvbSAnLi91c2VSb3V0ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUZvY3VzRWZmZWN0IH0gZnJvbSAnLi91c2VGb2N1c0VmZmVjdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUlzRm9jdXNlZCB9IGZyb20gJy4vdXNlSXNGb2N1c2VkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlTmF2aWdhdGlvblN0YXRlIH0gZnJvbSAnLi91c2VOYXZpZ2F0aW9uU3RhdGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRTdGF0ZUZyb21QYXRoIH0gZnJvbSAnLi9nZXRTdGF0ZUZyb21QYXRoJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0UGF0aEZyb21TdGF0ZSB9IGZyb20gJy4vZ2V0UGF0aEZyb21TdGF0ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldEFjdGlvbkZyb21TdGF0ZSB9IGZyb20gJy4vZ2V0QWN0aW9uRnJvbVN0YXRlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0Rm9jdXNlZFJvdXRlTmFtZUZyb21Sb3V0ZSB9IGZyb20gJy4vZ2V0Rm9jdXNlZFJvdXRlTmFtZUZyb21Sb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQ29tcGFyZSB0d28gYXJyYXlzIHdpdGggcHJpbWl0aXZlIHZhbHVlcyBhcyB0aGUgY29udGVudC5cbiAqIFdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYm90aCB2YWx1ZXMgYW5kIG9yZGVyIG1hdGNoLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0FycmF5RXF1YWwoYSwgYikge1xuICByZXR1cm4gYS5sZW5ndGggPT09IGIubGVuZ3RoICYmIGEuZXZlcnkoKGl0LCBpbmRleCkgPT4gaXQgPT09IGJbaW5kZXhdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzQXJyYXlFcXVhbC5qcy5tYXAiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5leHBvcnQgY2xhc3MgUHJpdmF0ZVZhbHVlU3RvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgJycsIHZvaWQgMCk7XG4gIH1cblxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHlwZXMuanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIEhvb2sgd2hpY2ggbGV0cyBjaGlsZCBuYXZpZ2F0b3JzIGFkZCBhY3Rpb24gbGlzdGVuZXJzLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDaGlsZExpc3RlbmVycygpIHtcbiAgY29uc3Qge1xuICAgIGN1cnJlbnQ6IGxpc3RlbmVyc1xuICB9ID0gUmVhY3QudXNlUmVmKHtcbiAgICBhY3Rpb246IFtdLFxuICAgIGZvY3VzOiBbXVxuICB9KTtcbiAgY29uc3QgYWRkTGlzdGVuZXIgPSBSZWFjdC51c2VDYWxsYmFjaygodHlwZSwgbGlzdGVuZXIpID0+IHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBsaXN0ZW5lciBzaG91bGQgYmUgY29ycmVjdCB0eXBlIGFjY29yZGluZyB0byBgdHlwZWBcbiAgICBsaXN0ZW5lcnNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGxpc3RlbmVyIHNob3VsZCBiZSBjb3JyZWN0IHR5cGUgYWNjb3JkaW5nIHRvIGB0eXBlYFxuICAgICAgY29uc3QgaW5kZXggPSBsaXN0ZW5lcnNbdHlwZV0uaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBsaXN0ZW5lcnNbdHlwZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICB9LCBbbGlzdGVuZXJzXSk7XG4gIHJldHVybiB7XG4gICAgbGlzdGVuZXJzLFxuICAgIGFkZExpc3RlbmVyXG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VDaGlsZExpc3RlbmVycy5qcy5tYXAiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDb21wb25lbnQoQ29tcG9uZW50LCBwcm9wcykge1xuICBjb25zdCBwcm9wc1JlZiA9IFJlYWN0LnVzZVJlZihwcm9wcyk7IC8vIE5vcm1hbGx5IHJlZnMgc2hvdWxkbid0IGJlIG11dGF0ZWQgaW4gcmVuZGVyXG4gIC8vIEJ1dCB3ZSByZXR1cm4gYSBjb21wb25lbnQgd2hpY2ggd2lsbCBiZSByZW5kZXJlZFxuICAvLyBTbyBpdCdzIGp1c3QgZm9yIGltbWVkaWF0ZSBjb25zdW1wdGlvblxuXG4gIHByb3BzUmVmLmN1cnJlbnQgPSBwcm9wcztcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9wc1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgfSk7XG4gIHJldHVybiBSZWFjdC51c2VSZWYocmVzdCA9PiB7XG4gICAgY29uc3QgcHJvcHMgPSBwcm9wc1JlZi5jdXJyZW50O1xuXG4gICAgaWYgKHByb3BzID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSByZXR1cm5lZCBjb21wb25lbnQgbXVzdCBiZSByZW5kZXJlZCBpbiB0aGUgc2FtZSByZW5kZXIgcGhhc2UgYXMgdGhlIGhvb2suJyk7XG4gICAgfSAvLyBAdHMtZXhwZWN0LWVycm9yOiB0aGUgcHJvcHMgc2hvdWxkIGJlIGZpbmUgaGVyZVxuXG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHJlc3QpKTtcbiAgfSkuY3VycmVudDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZUNvbXBvbmVudC5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ3VycmVudFJlbmRlckNvbnRleHQgZnJvbSAnLi9DdXJyZW50UmVuZGVyQ29udGV4dCc7XG5cbi8qKlxuICogV3JpdGUgdGhlIGN1cnJlbnQgb3B0aW9ucywgc28gdGhhdCBzZXJ2ZXIgcmVuZGVyZXIgY2FuIGdldCBjdXJyZW50IHZhbHVlc1xuICogTXV0YXRpbmcgdmFsdWVzIGxpa2UgdGhpcyBpcyBub3Qgc2FmZSBpbiBhc3luYyBtb2RlLCBidXQgaXQgZG9lc24ndCBhcHBseSB0byBTU1JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ3VycmVudFJlbmRlcih7XG4gIHN0YXRlLFxuICBuYXZpZ2F0aW9uLFxuICBkZXNjcmlwdG9yc1xufSkge1xuICBjb25zdCBjdXJyZW50ID0gUmVhY3QudXNlQ29udGV4dChDdXJyZW50UmVuZGVyQ29udGV4dCk7XG5cbiAgaWYgKGN1cnJlbnQgJiYgbmF2aWdhdGlvbi5pc0ZvY3VzZWQoKSkge1xuICAgIGN1cnJlbnQub3B0aW9ucyA9IGRlc2NyaXB0b3JzW3N0YXRlLnJvdXRlc1tzdGF0ZS5pbmRleF0ua2V5XS5vcHRpb25zO1xuICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VDdXJyZW50UmVuZGVyLmpzLm1hcCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTY2VuZVZpZXcgZnJvbSAnLi9TY2VuZVZpZXcnO1xuaW1wb3J0IE5hdmlnYXRpb25CdWlsZGVyQ29udGV4dCBmcm9tICcuL05hdmlnYXRpb25CdWlsZGVyQ29udGV4dCc7XG5pbXBvcnQgdXNlTmF2aWdhdGlvbkNhY2hlIGZyb20gJy4vdXNlTmF2aWdhdGlvbkNhY2hlJztcbmltcG9ydCB1c2VSb3V0ZUNhY2hlIGZyb20gJy4vdXNlUm91dGVDYWNoZSc7XG5pbXBvcnQgTmF2aWdhdGlvbkNvbnRleHQgZnJvbSAnLi9OYXZpZ2F0aW9uQ29udGV4dCc7XG5pbXBvcnQgTmF2aWdhdGlvblJvdXRlQ29udGV4dCBmcm9tICcuL05hdmlnYXRpb25Sb3V0ZUNvbnRleHQnO1xuXG4vKipcbiAqIEhvb2sgdG8gY3JlYXRlIGRlc2NyaXB0b3Igb2JqZWN0cyBmb3IgdGhlIGNoaWxkIHJvdXRlcy5cbiAqXG4gKiBBIGRlc2NyaXB0b3Igb2JqZWN0IHByb3ZpZGVzIDMgdGhpbmdzOlxuICogLSBIZWxwZXIgbWV0aG9kIHRvIHJlbmRlciBhIHNjcmVlblxuICogLSBPcHRpb25zIHNwZWNpZmllZCBieSB0aGUgc2NyZWVuIGZvciB0aGUgbmF2aWdhdG9yXG4gKiAtIE5hdmlnYXRpb24gb2JqZWN0IGludGVuZGVkIGZvciB0aGUgcm91dGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGVzY3JpcHRvcnMoe1xuICBzdGF0ZSxcbiAgc2NyZWVucyxcbiAgbmF2aWdhdGlvbixcbiAgc2NyZWVuT3B0aW9ucyxcbiAgZGVmYXVsdFNjcmVlbk9wdGlvbnMsXG4gIG9uQWN0aW9uLFxuICBnZXRTdGF0ZSxcbiAgc2V0U3RhdGUsXG4gIGFkZExpc3RlbmVyLFxuICBhZGRLZXllZExpc3RlbmVyLFxuICBvblJvdXRlRm9jdXMsXG4gIHJvdXRlcixcbiAgZW1pdHRlclxufSkge1xuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IHtcbiAgICBvbkRpc3BhdGNoQWN0aW9uLFxuICAgIG9uT3B0aW9uc0NoYW5nZVxuICB9ID0gUmVhY3QudXNlQ29udGV4dChOYXZpZ2F0aW9uQnVpbGRlckNvbnRleHQpO1xuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIG5hdmlnYXRpb24sXG4gICAgb25BY3Rpb24sXG4gICAgYWRkTGlzdGVuZXIsXG4gICAgYWRkS2V5ZWRMaXN0ZW5lcixcbiAgICBvblJvdXRlRm9jdXMsXG4gICAgb25EaXNwYXRjaEFjdGlvbixcbiAgICBvbk9wdGlvbnNDaGFuZ2VcbiAgfSksIFtuYXZpZ2F0aW9uLCBvbkFjdGlvbiwgYWRkTGlzdGVuZXIsIGFkZEtleWVkTGlzdGVuZXIsIG9uUm91dGVGb2N1cywgb25EaXNwYXRjaEFjdGlvbiwgb25PcHRpb25zQ2hhbmdlXSk7XG4gIGNvbnN0IG5hdmlnYXRpb25zID0gdXNlTmF2aWdhdGlvbkNhY2hlKHtcbiAgICBzdGF0ZSxcbiAgICBnZXRTdGF0ZSxcbiAgICBuYXZpZ2F0aW9uLFxuICAgIHNldE9wdGlvbnMsXG4gICAgcm91dGVyLFxuICAgIGVtaXR0ZXJcbiAgfSk7XG4gIGNvbnN0IHJvdXRlcyA9IHVzZVJvdXRlQ2FjaGUoc3RhdGUucm91dGVzKTtcbiAgcmV0dXJuIHJvdXRlcy5yZWR1Y2UoKGFjYywgcm91dGUsIGkpID0+IHtcbiAgICBjb25zdCBzY3JlZW4gPSBzY3JlZW5zW3JvdXRlLm5hbWVdO1xuICAgIGNvbnN0IG5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uc1tyb3V0ZS5rZXldO1xuICAgIGNvbnN0IHJvdXRlT3B0aW9ucyA9IHsgLy8gVGhlIGRlZmF1bHQgYHNjcmVlbk9wdGlvbnNgIHBhc3NlZCB0byB0aGUgbmF2aWdhdG9yXG4gICAgICAuLi4odHlwZW9mIHNjcmVlbk9wdGlvbnMgPT09ICdvYmplY3QnIHx8IHNjcmVlbk9wdGlvbnMgPT0gbnVsbCA/IHNjcmVlbk9wdGlvbnMgOiAvLyBAdHMtZXhwZWN0LWVycm9yOiB0aGlzIGlzIGEgZnVuY3Rpb24sIGJ1dCB0eXBlc2NyaXB0IGRvZXNuJ3QgdGhpbmsgc29cbiAgICAgIHNjcmVlbk9wdGlvbnMoe1xuICAgICAgICByb3V0ZSxcbiAgICAgICAgbmF2aWdhdGlvblxuICAgICAgfSkpLFxuICAgICAgLy8gVGhlIGBvcHRpb25zYCBwcm9wIHBhc3NlZCB0byBgU2NyZWVuYCBlbGVtZW50c1xuICAgICAgLi4uKHR5cGVvZiBzY3JlZW4ub3B0aW9ucyA9PT0gJ29iamVjdCcgfHwgc2NyZWVuLm9wdGlvbnMgPT0gbnVsbCA/IHNjcmVlbi5vcHRpb25zIDogLy8gQHRzLWV4cGVjdC1lcnJvcjogdGhpcyBpcyBhIGZ1bmN0aW9uLCBidXQgdHlwZXNjcmlwdCBkb2Vzbid0IHRoaW5rIHNvXG4gICAgICBzY3JlZW4ub3B0aW9ucyh7XG4gICAgICAgIHJvdXRlLFxuICAgICAgICBuYXZpZ2F0aW9uXG4gICAgICB9KSksXG4gICAgICAvLyBUaGUgb3B0aW9ucyBzZXQgdmlhIGBuYXZpZ2F0aW9uLnNldE9wdGlvbnNgXG4gICAgICAuLi5vcHRpb25zW3JvdXRlLmtleV1cbiAgICB9O1xuICAgIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSB7IC4uLih0eXBlb2YgZGVmYXVsdFNjcmVlbk9wdGlvbnMgPT09ICdmdW5jdGlvbicgPyAvLyBAdHMtZXhwZWN0LWVycm9yOiB0cyBnaXZlcyBpbmNvcnJlY3QgZXJyb3IgaGVyZVxuICAgICAgZGVmYXVsdFNjcmVlbk9wdGlvbnMoe1xuICAgICAgICByb3V0ZSxcbiAgICAgICAgbmF2aWdhdGlvbixcbiAgICAgICAgb3B0aW9uczogcm91dGVPcHRpb25zXG4gICAgICB9KSA6IGRlZmF1bHRTY3JlZW5PcHRpb25zKSxcbiAgICAgIC4uLnJvdXRlT3B0aW9uc1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhck9wdGlvbnMgPSAoKSA9PiBzZXRPcHRpb25zKG8gPT4ge1xuICAgICAgaWYgKHJvdXRlLmtleSBpbiBvKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIFtyb3V0ZS5rZXldOiBfLFxuICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgfSA9IG87XG4gICAgICAgIHJldHVybiByZXN0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbztcbiAgICB9KTtcblxuICAgIGFjY1tyb3V0ZS5rZXldID0ge1xuICAgICAgbmF2aWdhdGlvbixcblxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2aWdhdGlvbkJ1aWxkZXJDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgICAga2V5OiByb3V0ZS5rZXksXG4gICAgICAgICAgdmFsdWU6IGNvbnRleHRcbiAgICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2aWdhdGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgICB2YWx1ZTogbmF2aWdhdGlvblxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChOYXZpZ2F0aW9uUm91dGVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgICAgdmFsdWU6IHJvdXRlXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNjZW5lVmlldywge1xuICAgICAgICAgIG5hdmlnYXRpb246IG5hdmlnYXRpb24sXG4gICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICAgIHNjcmVlbjogc2NyZWVuLFxuICAgICAgICAgIHJvdXRlU3RhdGU6IHN0YXRlLnJvdXRlc1tpXS5zdGF0ZSxcbiAgICAgICAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgICAgICAgc2V0U3RhdGU6IHNldFN0YXRlLFxuICAgICAgICAgIG9wdGlvbnM6IG1lcmdlZE9wdGlvbnMsXG4gICAgICAgICAgY2xlYXJPcHRpb25zOiBjbGVhck9wdGlvbnNcbiAgICAgICAgfSkpKSk7XG4gICAgICB9LFxuXG4gICAgICBvcHRpb25zOiBtZXJnZWRPcHRpb25zXG4gICAgfTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VEZXNjcmlwdG9ycy5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogSG9vayB0byBtYW5hZ2UgdGhlIGV2ZW50IHN5c3RlbSB1c2VkIGJ5IHRoZSBuYXZpZ2F0b3IgdG8gbm90aWZ5IHNjcmVlbnMgb2YgdmFyaW91cyBldmVudHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUV2ZW50RW1pdHRlcihsaXN0ZW4pIHtcbiAgY29uc3QgbGlzdGVuUmVmID0gUmVhY3QudXNlUmVmKGxpc3Rlbik7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGlzdGVuUmVmLmN1cnJlbnQgPSBsaXN0ZW47XG4gIH0pO1xuICBjb25zdCBsaXN0ZW5lcnMgPSBSZWFjdC51c2VSZWYoe30pO1xuICBjb25zdCBjcmVhdGUgPSBSZWFjdC51c2VDYWxsYmFjayh0YXJnZXQgPT4ge1xuICAgIGNvbnN0IHJlbW92ZUxpc3RlbmVyID0gKHR5cGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFja3MgPSBsaXN0ZW5lcnMuY3VycmVudFt0eXBlXSA/IGxpc3RlbmVycy5jdXJyZW50W3R5cGVdW3RhcmdldF0gOiB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICghY2FsbGJhY2tzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkTGlzdGVuZXIgPSAodHlwZSwgY2FsbGJhY2spID0+IHtcbiAgICAgIGxpc3RlbmVycy5jdXJyZW50W3R5cGVdID0gbGlzdGVuZXJzLmN1cnJlbnRbdHlwZV0gfHwge307XG4gICAgICBsaXN0ZW5lcnMuY3VycmVudFt0eXBlXVt0YXJnZXRdID0gbGlzdGVuZXJzLmN1cnJlbnRbdHlwZV1bdGFyZ2V0XSB8fCBbXTtcbiAgICAgIGxpc3RlbmVycy5jdXJyZW50W3R5cGVdW3RhcmdldF0ucHVzaChjYWxsYmFjayk7XG4gICAgICByZXR1cm4gKCkgPT4gcmVtb3ZlTGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWRkTGlzdGVuZXIsXG4gICAgICByZW1vdmVMaXN0ZW5lclxuICAgIH07XG4gIH0sIFtdKTtcbiAgY29uc3QgZW1pdCA9IFJlYWN0LnVzZUNhbGxiYWNrKCh7XG4gICAgdHlwZSxcbiAgICBkYXRhLFxuICAgIHRhcmdldCxcbiAgICBjYW5QcmV2ZW50RGVmYXVsdFxuICB9KSA9PiB7XG4gICAgdmFyIF9pdGVtcyR0YXJnZXQsIF9saXN0ZW5SZWYkY3VycmVudDtcblxuICAgIGNvbnN0IGl0ZW1zID0gbGlzdGVuZXJzLmN1cnJlbnRbdHlwZV0gfHwge307IC8vIENvcHkgdGhlIGN1cnJlbnQgbGlzdCBvZiBjYWxsYmFja3MgaW4gY2FzZSB0aGV5IGFyZSBtdXRhdGVkIGR1cmluZyBleGVjdXRpb25cblxuICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRhcmdldCAhPT0gdW5kZWZpbmVkID8gKF9pdGVtcyR0YXJnZXQgPSBpdGVtc1t0YXJnZXRdKSA9PT0gbnVsbCB8fCBfaXRlbXMkdGFyZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaXRlbXMkdGFyZ2V0LnNsaWNlKCkgOiBbXS5jb25jYXQoLi4uT2JqZWN0LmtleXMoaXRlbXMpLm1hcCh0ID0+IGl0ZW1zW3RdKSkuZmlsdGVyKChjYiwgaSwgc2VsZikgPT4gc2VsZi5sYXN0SW5kZXhPZihjYikgPT09IGkpO1xuICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuXG4gICAgfTtcblxuICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCAndGFyZ2V0Jywge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ2RhdGEnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjYW5QcmV2ZW50RGVmYXVsdCkge1xuICAgICAgbGV0IGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGV2ZW50LCB7XG4gICAgICAgIGRlZmF1bHRQcmV2ZW50ZWQ6IHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcmV2ZW50ZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgICAgIHByZXZlbnREZWZhdWx0OiB7XG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICAgIHZhbHVlKCkge1xuICAgICAgICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIChfbGlzdGVuUmVmJGN1cnJlbnQgPSBsaXN0ZW5SZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2xpc3RlblJlZiRjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbGlzdGVuUmVmJGN1cnJlbnQuY2FsbChsaXN0ZW5SZWYsIGV2ZW50KTtcbiAgICBjYWxsYmFja3MgPT09IG51bGwgfHwgY2FsbGJhY2tzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYWxsYmFja3MuZm9yRWFjaChjYiA9PiBjYihldmVudCkpO1xuICAgIHJldHVybiBldmVudDtcbiAgfSwgW10pO1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIGNyZWF0ZSxcbiAgICBlbWl0XG4gIH0pLCBbY3JlYXRlLCBlbWl0XSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VFdmVudEVtaXR0ZXIuanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZU5hdmlnYXRpb24gZnJvbSAnLi91c2VOYXZpZ2F0aW9uJztcblxuLyoqXG4gKiBIb29rIHRvIHJ1biBhbiBlZmZlY3QgaW4gYSBmb2N1c2VkIHNjcmVlbiwgc2ltaWxhciB0byBgUmVhY3QudXNlRWZmZWN0YC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gcGVyZm9ybSBzaWRlLWVmZmVjdHMgc3VjaCBhcyBmZXRjaGluZyBkYXRhIG9yIHN1YnNjcmliaW5nIHRvIGV2ZW50cy5cbiAqIFRoZSBwYXNzZWQgY2FsbGJhY2sgc2hvdWxkIGJlIHdyYXBwZWQgaW4gYFJlYWN0LnVzZUNhbGxiYWNrYCB0byBhdm9pZCBydW5uaW5nIHRoZSBlZmZlY3QgdG9vIG9mdGVuLlxuICpcbiAqIEBwYXJhbSBjYWxsYmFjayBNZW1vaXplZCBjYWxsYmFjayBjb250YWluaW5nIHRoZSBlZmZlY3QsIHNob3VsZCBvcHRpb25hbGx5IHJldHVybiBhIGNsZWFudXAgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvY3VzRWZmZWN0KGVmZmVjdCkge1xuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGlvbigpO1xuXG4gIGlmIChhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBcIllvdSBwYXNzZWQgYSBzZWNvbmQgYXJndW1lbnQgdG8gJ3VzZUZvY3VzRWZmZWN0JywgYnV0IGl0IG9ubHkgYWNjZXB0cyBvbmUgYXJndW1lbnQuIFwiICsgXCJJZiB5b3Ugd2FudCB0byBwYXNzIGEgZGVwZW5kZW5jeSBhcnJheSwgeW91IGNhbiB1c2UgJ1JlYWN0LnVzZUNhbGxiYWNrJzpcXG5cXG5cIiArICd1c2VGb2N1c0VmZmVjdChcXG4nICsgJyAgUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xcbicgKyAnICAgIC8vIFlvdXIgY29kZSBoZXJlXFxuJyArICcgIH0sIFtkZXBBLCBkZXBCXSlcXG4nICsgJyk7XFxuXFxuJyArICdTZWUgdXNhZ2UgZ3VpZGU6IGh0dHBzOi8vcmVhY3RuYXZpZ2F0aW9uLm9yZy9kb2NzLzUueC91c2UtZm9jdXMtZWZmZWN0JztcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgbGV0IGNsZWFudXA7XG5cbiAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGRlc3Ryb3kgPSBlZmZlY3QoKTtcblxuICAgICAgaWYgKGRlc3Ryb3kgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZGVzdHJveTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAnQW4gZWZmZWN0IGZ1bmN0aW9uIG11c3Qgbm90IHJldHVybiBhbnl0aGluZyBiZXNpZGVzIGEgZnVuY3Rpb24sIHdoaWNoIGlzIHVzZWQgZm9yIGNsZWFuLXVwLic7XG5cbiAgICAgICAgaWYgKGRlc3Ryb3kgPT09IG51bGwpIHtcbiAgICAgICAgICBtZXNzYWdlICs9IFwiIFlvdSByZXR1cm5lZCAnbnVsbCcuIElmIHlvdXIgZWZmZWN0IGRvZXMgbm90IHJlcXVpcmUgY2xlYW4tdXAsIHJldHVybiAndW5kZWZpbmVkJyAob3Igbm90aGluZykuXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlc3Ryb3kudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG1lc3NhZ2UgKz0gXCJcXG5cXG5JdCBsb29rcyBsaWtlIHlvdSB3cm90ZSAndXNlRm9jdXNFZmZlY3QoYXN5bmMgKCkgPT4gLi4uKScgb3IgcmV0dXJuZWQgYSBQcm9taXNlLiBcIiArICdJbnN0ZWFkLCB3cml0ZSB0aGUgYXN5bmMgZnVuY3Rpb24gaW5zaWRlIHlvdXIgZWZmZWN0ICcgKyAnYW5kIGNhbGwgaXQgaW1tZWRpYXRlbHk6XFxuXFxuJyArICd1c2VGb2N1c0VmZmVjdChcXG4nICsgJyAgUmVhY3QudXNlQ2FsbGJhY2soKSA9PiB7XFxuJyArICcgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xcbicgKyAnICAgICAgLy8gWW91IGNhbiBhd2FpdCBoZXJlXFxuJyArICcgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IE15QVBJLmdldERhdGEoc29tZUlkKTtcXG4nICsgJyAgICAgIC8vIC4uLlxcbicgKyAnICAgIH1cXG5cXG4nICsgJyAgICBmZXRjaERhdGEoKTtcXG4nICsgJyAgfSwgW3NvbWVJZF0pXFxuJyArICcpO1xcblxcbicgKyAnU2VlIHVzYWdlIGd1aWRlOiBodHRwczovL3JlYWN0bmF2aWdhdGlvbi5vcmcvZG9jcy81LngvdXNlLWZvY3VzLWVmZmVjdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVzc2FnZSArPSBcIiBZb3UgcmV0dXJuZWQgJ1wiLmNvbmNhdChKU09OLnN0cmluZ2lmeShkZXN0cm95KSwgXCInLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgfTsgLy8gV2UgbmVlZCB0byBydW4gdGhlIGVmZmVjdCBvbiBpbnRpYWwgcmVuZGVyL2RlcCBjaGFuZ2VzIGlmIHRoZSBzY3JlZW4gaXMgZm9jdXNlZFxuXG5cbiAgICBpZiAobmF2aWdhdGlvbi5pc0ZvY3VzZWQoKSkge1xuICAgICAgY2xlYW51cCA9IGNhbGxiYWNrKCk7XG4gICAgICBpc0ZvY3VzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHVuc3Vic2NyaWJlRm9jdXMgPSBuYXZpZ2F0aW9uLmFkZExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICAgIC8vIElmIGNhbGxiYWNrIHdhcyBhbHJlYWR5IGNhbGxlZCBmb3IgZm9jdXMsIGF2b2lkIGNhbGxpbmcgaXQgYWdhaW5cbiAgICAgIC8vIFRoZSBmb2N1cyBldmVudCBtYXkgYWxzbyBmaXJlIG9uIGludGlhbCByZW5kZXIsIHNvIHdlIGd1YXJkIGFnYWluc3QgcnVuaW5nIHRoZSBlZmZlY3QgdHdpY2VcbiAgICAgIGlmIChpc0ZvY3VzZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xlYW51cCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNsZWFudXAoKTtcbiAgICAgIH1cblxuICAgICAgY2xlYW51cCA9IGNhbGxiYWNrKCk7XG4gICAgICBpc0ZvY3VzZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlQmx1ciA9IG5hdmlnYXRpb24uYWRkTGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICBpZiAoY2xlYW51cCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNsZWFudXAoKTtcbiAgICAgIH1cblxuICAgICAgY2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICAgIGlzRm9jdXNlZCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoY2xlYW51cCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNsZWFudXAoKTtcbiAgICAgIH1cblxuICAgICAgdW5zdWJzY3JpYmVGb2N1cygpO1xuICAgICAgdW5zdWJzY3JpYmVCbHVyKCk7XG4gICAgfTtcbiAgfSwgW2VmZmVjdCwgbmF2aWdhdGlvbl0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlRm9jdXNFZmZlY3QuanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb25Db250ZXh0IGZyb20gJy4vTmF2aWdhdGlvbkNvbnRleHQnO1xuXG4vKipcbiAqIEhvb2sgdG8gdGFrZSBjYXJlIG9mIGVtaXR0aW5nIGBmb2N1c2AgYW5kIGBibHVyYCBldmVudHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvY3VzRXZlbnRzKHtcbiAgc3RhdGUsXG4gIGVtaXR0ZXJcbn0pIHtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBjb25zdCBsYXN0Rm9jdXNlZEtleVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBjb25zdCBjdXJyZW50Rm9jdXNlZEtleSA9IHN0YXRlLnJvdXRlc1tzdGF0ZS5pbmRleF0ua2V5OyAvLyBXaGVuIHRoZSBwYXJlbnQgc2NyZWVuIGNoYW5nZXMgaXRzIGZvY3VzIHN0YXRlLCB3ZSBhbHNvIG5lZWQgdG8gY2hhbmdlIGNoaWxkJ3MgZm9jdXNcbiAgLy8gQ296IHRoZSBjaGlsZCBzY3JlZW4gY2FuJ3QgYmUgZm9jdXNlZCBpZiB0aGUgcGFyZW50IHNjcmVlbiBpcyBvdXQgb2YgZm9jdXNcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gbmF2aWdhdGlvbiA9PT0gbnVsbCB8fCBuYXZpZ2F0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYXZpZ2F0aW9uLmFkZExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICBsYXN0Rm9jdXNlZEtleVJlZi5jdXJyZW50ID0gY3VycmVudEZvY3VzZWRLZXk7XG4gICAgZW1pdHRlci5lbWl0KHtcbiAgICAgIHR5cGU6ICdmb2N1cycsXG4gICAgICB0YXJnZXQ6IGN1cnJlbnRGb2N1c2VkS2V5XG4gICAgfSk7XG4gIH0pLCBbY3VycmVudEZvY3VzZWRLZXksIGVtaXR0ZXIsIG5hdmlnYXRpb25dKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IG5hdmlnYXRpb24gPT09IG51bGwgfHwgbmF2aWdhdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmF2aWdhdGlvbi5hZGRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBsYXN0Rm9jdXNlZEtleVJlZi5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgIGVtaXR0ZXIuZW1pdCh7XG4gICAgICB0eXBlOiAnYmx1cicsXG4gICAgICB0YXJnZXQ6IGN1cnJlbnRGb2N1c2VkS2V5XG4gICAgfSk7XG4gIH0pLCBbY3VycmVudEZvY3VzZWRLZXksIGVtaXR0ZXIsIG5hdmlnYXRpb25dKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsYXN0Rm9jdXNlZEtleSA9IGxhc3RGb2N1c2VkS2V5UmVmLmN1cnJlbnQ7XG4gICAgbGFzdEZvY3VzZWRLZXlSZWYuY3VycmVudCA9IGN1cnJlbnRGb2N1c2VkS2V5OyAvLyBXZSB3b3VsZG4ndCBoYXZlIGBsYXN0Rm9jdXNlZEtleWAgb24gaW5pdGlhbCBtb3VudFxuICAgIC8vIEZpcmUgZm9jdXMgZXZlbnQgZm9yIHRoZSBjdXJyZW50IHJvdXRlIG9uIG1vdW50IGlmIHRoZXJlJ3Mgbm8gcGFyZW50IG5hdmlnYXRvclxuXG4gICAgaWYgKGxhc3RGb2N1c2VkS2V5ID09PSB1bmRlZmluZWQgJiYgIW5hdmlnYXRpb24pIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCh7XG4gICAgICAgIHR5cGU6ICdmb2N1cycsXG4gICAgICAgIHRhcmdldDogY3VycmVudEZvY3VzZWRLZXlcbiAgICAgIH0pO1xuICAgIH0gLy8gV2Ugc2hvdWxkIG9ubHkgZW1pdCBldmVudHMgd2hlbiB0aGUgZm9jdXNlZCBrZXkgY2hhbmdlZCBhbmQgbmF2aWdhdG9yIGlzIGZvY3VzZWRcbiAgICAvLyBXaGVuIG5hdmlnYXRvciBpcyBub3QgZm9jdXNlZCwgc2NyZWVucyBpbnNpZGUgc2hvdWxkbid0IHJlY2VpdmUgZm9jdXNlZCBzdGF0dXMgZWl0aGVyXG5cblxuICAgIGlmIChsYXN0Rm9jdXNlZEtleSA9PT0gY3VycmVudEZvY3VzZWRLZXkgfHwgIShuYXZpZ2F0aW9uID8gbmF2aWdhdGlvbi5pc0ZvY3VzZWQoKSA6IHRydWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGxhc3RGb2N1c2VkS2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIE9ubHkgZmlyZSBldmVudHMgYWZ0ZXIgaW5pdGlhbCBtb3VudFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVtaXR0ZXIuZW1pdCh7XG4gICAgICB0eXBlOiAnYmx1cicsXG4gICAgICB0YXJnZXQ6IGxhc3RGb2N1c2VkS2V5XG4gICAgfSk7XG4gICAgZW1pdHRlci5lbWl0KHtcbiAgICAgIHR5cGU6ICdmb2N1cycsXG4gICAgICB0YXJnZXQ6IGN1cnJlbnRGb2N1c2VkS2V5XG4gICAgfSk7XG4gIH0sIFtjdXJyZW50Rm9jdXNlZEtleSwgZW1pdHRlciwgbmF2aWdhdGlvbl0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlRm9jdXNFdmVudHMuanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb25CdWlsZGVyQ29udGV4dCBmcm9tICcuL05hdmlnYXRpb25CdWlsZGVyQ29udGV4dCc7XG5cbi8qKlxuICogSG9vayBmb3IgcGFzc2luZyBmb2N1cyBjYWxsYmFjayB0byBjaGlsZHJlblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb2N1c2VkTGlzdGVuZXJzQ2hpbGRyZW5BZGFwdGVyKHtcbiAgbmF2aWdhdGlvbixcbiAgZm9jdXNlZExpc3RlbmVyc1xufSkge1xuICBjb25zdCB7XG4gICAgYWRkTGlzdGVuZXJcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvbkJ1aWxkZXJDb250ZXh0KTtcbiAgY29uc3QgbGlzdGVuZXIgPSBSZWFjdC51c2VDYWxsYmFjayhjYWxsYmFjayA9PiB7XG4gICAgaWYgKG5hdmlnYXRpb24uaXNGb2N1c2VkKCkpIHtcbiAgICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgZm9jdXNlZExpc3RlbmVycykge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgaGFuZGxlZCxcbiAgICAgICAgICByZXN1bHRcbiAgICAgICAgfSA9IGxpc3RlbmVyKGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoYW5kbGVkLFxuICAgICAgICAgICAgcmVzdWx0XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYW5kbGVkOiB0cnVlLFxuICAgICAgICByZXN1bHQ6IGNhbGxiYWNrKG5hdmlnYXRpb24pXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYW5kbGVkOiBmYWxzZSxcbiAgICAgICAgcmVzdWx0OiBudWxsXG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2ZvY3VzZWRMaXN0ZW5lcnMsIG5hdmlnYXRpb25dKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IGFkZExpc3RlbmVyID09PSBudWxsIHx8IGFkZExpc3RlbmVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhZGRMaXN0ZW5lcignZm9jdXMnLCBsaXN0ZW5lciksIFthZGRMaXN0ZW5lciwgbGlzdGVuZXJdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZUZvY3VzZWRMaXN0ZW5lcnNDaGlsZHJlbkFkYXB0ZXIuanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlTmF2aWdhdGlvbiBmcm9tICcuL3VzZU5hdmlnYXRpb24nO1xuLyoqXG4gKiBIb29rIHRvIGdldCB0aGUgY3VycmVudCBmb2N1cyBzdGF0ZSBvZiB0aGUgc2NyZWVuLiBSZXR1cm5zIGEgYHRydWVgIGlmIHNjcmVlbiBpcyBmb2N1c2VkLCBvdGhlcndpc2UgYGZhbHNlYC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgaWYgYSBjb21wb25lbnQgbmVlZHMgdG8gcmVuZGVyIHNvbWV0aGluZyBiYXNlZCBvbiB0aGUgZm9jdXMgc3RhdGUuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlSXNGb2N1c2VkKCkge1xuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGlvbigpO1xuICBjb25zdCBbaXNGb2N1c2VkLCBzZXRJc0ZvY3VzZWRdID0gdXNlU3RhdGUobmF2aWdhdGlvbi5pc0ZvY3VzZWQpO1xuICBjb25zdCB2YWx1ZVRvUmV0dXJuID0gbmF2aWdhdGlvbi5pc0ZvY3VzZWQoKTtcblxuICBpZiAoaXNGb2N1c2VkICE9PSB2YWx1ZVRvUmV0dXJuKSB7XG4gICAgLy8gSWYgdGhlIHZhbHVlIGhhcyBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0IHJlbmRlciwgd2UgbmVlZCB0byB1cGRhdGUgaXQuXG4gICAgLy8gVGhpcyBjb3VsZCBoYXBwZW4gaWYgd2UgbWlzc2VkIGFuIHVwZGF0ZSBmcm9tIHRoZSBldmVudCBsaXN0ZW5lcnMgZHVyaW5nIHJlLXJlbmRlci5cbiAgICAvLyBSZWFjdCB3aWxsIHByb2Nlc3MgdGhpcyB1cGRhdGUgaW1tZWRpYXRlbHksIHNvIHRoZSBvbGQgc3Vic2NyaXB0aW9uIHZhbHVlIHdvbid0IGJlIGNvbW1pdHRlZC5cbiAgICAvLyBJdCBpcyBzdGlsbCBuaWNlIHRvIGF2b2lkIHJldHVybmluZyBhIG1pc21hdGNoZWQgdmFsdWUgdGhvdWdoLCBzbyBsZXQncyBvdmVycmlkZSB0aGUgcmV0dXJuIHZhbHVlLlxuICAgIC8vIFRoaXMgaXMgdGhlIHNhbWUgbG9naWMgYXMgaW4gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3RyZWUvbWFzdGVyL3BhY2thZ2VzL3VzZS1zdWJzY3JpcHRpb25cbiAgICBzZXRJc0ZvY3VzZWQodmFsdWVUb1JldHVybik7XG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlRm9jdXMgPSBuYXZpZ2F0aW9uLmFkZExpc3RlbmVyKCdmb2N1cycsICgpID0+IHNldElzRm9jdXNlZCh0cnVlKSk7XG4gICAgY29uc3QgdW5zdWJzY3JpYmVCbHVyID0gbmF2aWdhdGlvbi5hZGRMaXN0ZW5lcignYmx1cicsICgpID0+IHNldElzRm9jdXNlZChmYWxzZSkpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB1bnN1YnNjcmliZUZvY3VzKCk7XG4gICAgICB1bnN1YnNjcmliZUJsdXIoKTtcbiAgICB9O1xuICB9LCBbbmF2aWdhdGlvbl0pO1xuICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKHZhbHVlVG9SZXR1cm4pO1xuICByZXR1cm4gdmFsdWVUb1JldHVybjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZUlzRm9jdXNlZC5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogSG9vayB3aGljaCBsZXRzIGNoaWxkIG5hdmlnYXRvcnMgYWRkIGdldHRlcnMgdG8gYmUgY2FsbGVkIGZvciBvYnRhaW5pbmcgcmVoeWRyYXRlZCBzdGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlS2V5ZWRDaGlsZExpc3RlbmVycygpIHtcbiAgY29uc3Qge1xuICAgIGN1cnJlbnQ6IGtleWVkTGlzdGVuZXJzXG4gIH0gPSBSZWFjdC51c2VSZWYoe1xuICAgIGdldFN0YXRlOiB7fSxcbiAgICBiZWZvcmVSZW1vdmU6IHt9XG4gIH0pO1xuICBjb25zdCBhZGRLZXllZExpc3RlbmVyID0gUmVhY3QudXNlQ2FsbGJhY2soKHR5cGUsIGtleSwgbGlzdGVuZXIpID0+IHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBsaXN0ZW5lciBzaG91bGQgYmUgY29ycmVjdCB0eXBlIGFjY29yZGluZyB0byBgdHlwZWBcbiAgICBrZXllZExpc3RlbmVyc1t0eXBlXVtrZXldID0gbGlzdGVuZXI7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGxpc3RlbmVyIHNob3VsZCBiZSBjb3JyZWN0IHR5cGUgYWNjb3JkaW5nIHRvIGB0eXBlYFxuICAgICAga2V5ZWRMaXN0ZW5lcnNbdHlwZV1ba2V5XSA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICB9LCBba2V5ZWRMaXN0ZW5lcnNdKTtcbiAgcmV0dXJuIHtcbiAgICBrZXllZExpc3RlbmVycyxcbiAgICBhZGRLZXllZExpc3RlbmVyXG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VLZXllZENoaWxkTGlzdGVuZXJzLmpzLm1hcCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uQ29udGV4dCBmcm9tICcuL05hdmlnYXRpb25Db250ZXh0JztcblxuLyoqXG4gKiBIb29rIHRvIGFjY2VzcyB0aGUgbmF2aWdhdGlvbiBwcm9wIG9mIHRoZSBwYXJlbnQgc2NyZWVuIGFueXdoZXJlLlxuICpcbiAqIEByZXR1cm5zIE5hdmlnYXRpb24gcHJvcCBvZiB0aGUgcGFyZW50IHNjcmVlbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuXG4gIGlmIChuYXZpZ2F0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgbmF2aWdhdGlvbiBvYmplY3QuIElzIHlvdXIgY29tcG9uZW50IGluc2lkZSBhIHNjcmVlbiBpbiBhIG5hdmlnYXRvcj9cIik7XG4gIH1cblxuICByZXR1cm4gbmF2aWdhdGlvbjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZU5hdmlnYXRpb24uanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gZnJvbSAncmVhY3QtaXMnO1xuaW1wb3J0IHsgQ29tbW9uQWN0aW9ucyB9IGZyb20gJ0ByZWFjdC1uYXZpZ2F0aW9uL3JvdXRlcnMnO1xuaW1wb3J0IE5hdmlnYXRpb25TdGF0ZUNvbnRleHQgZnJvbSAnLi9OYXZpZ2F0aW9uU3RhdGVDb250ZXh0JztcbmltcG9ydCBOYXZpZ2F0aW9uUm91dGVDb250ZXh0IGZyb20gJy4vTmF2aWdhdGlvblJvdXRlQ29udGV4dCc7XG5pbXBvcnQgTmF2aWdhdGlvbkhlbHBlcnNDb250ZXh0IGZyb20gJy4vTmF2aWdhdGlvbkhlbHBlcnNDb250ZXh0JztcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4nO1xuaW1wb3J0IHVzZUNvbXBvbmVudCBmcm9tICcuL3VzZUNvbXBvbmVudCc7XG5pbXBvcnQgdXNlRXZlbnRFbWl0dGVyIGZyb20gJy4vdXNlRXZlbnRFbWl0dGVyJztcbmltcG9ydCB1c2VSZWdpc3Rlck5hdmlnYXRvciBmcm9tICcuL3VzZVJlZ2lzdGVyTmF2aWdhdG9yJztcbmltcG9ydCB1c2VEZXNjcmlwdG9ycyBmcm9tICcuL3VzZURlc2NyaXB0b3JzJztcbmltcG9ydCB1c2VOYXZpZ2F0aW9uSGVscGVycyBmcm9tICcuL3VzZU5hdmlnYXRpb25IZWxwZXJzJztcbmltcG9ydCB1c2VPbkFjdGlvbiBmcm9tICcuL3VzZU9uQWN0aW9uJztcbmltcG9ydCB1c2VGb2N1c0V2ZW50cyBmcm9tICcuL3VzZUZvY3VzRXZlbnRzJztcbmltcG9ydCB1c2VPblJvdXRlRm9jdXMgZnJvbSAnLi91c2VPblJvdXRlRm9jdXMnO1xuaW1wb3J0IHVzZUNoaWxkTGlzdGVuZXJzIGZyb20gJy4vdXNlQ2hpbGRMaXN0ZW5lcnMnO1xuaW1wb3J0IHVzZUZvY3VzZWRMaXN0ZW5lcnNDaGlsZHJlbkFkYXB0ZXIgZnJvbSAnLi91c2VGb2N1c2VkTGlzdGVuZXJzQ2hpbGRyZW5BZGFwdGVyJztcbmltcG9ydCB1c2VLZXllZENoaWxkTGlzdGVuZXJzIGZyb20gJy4vdXNlS2V5ZWRDaGlsZExpc3RlbmVycyc7XG5pbXBvcnQgdXNlT25HZXRTdGF0ZSBmcm9tICcuL3VzZU9uR2V0U3RhdGUnO1xuaW1wb3J0IHVzZVNjaGVkdWxlVXBkYXRlIGZyb20gJy4vdXNlU2NoZWR1bGVVcGRhdGUnO1xuaW1wb3J0IHVzZUN1cnJlbnRSZW5kZXIgZnJvbSAnLi91c2VDdXJyZW50UmVuZGVyJztcbmltcG9ydCBpc0FycmF5RXF1YWwgZnJvbSAnLi9pc0FycmF5RXF1YWwnO1xuaW1wb3J0IHsgUHJpdmF0ZVZhbHVlU3RvcmUgfSBmcm9tICcuL3R5cGVzJzsgLy8gVGhpcyBpcyB0byBtYWtlIFR5cGVTY3JpcHQgY29tcGlsZXIgaGFwcHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBiYWJlbC9uby11bnVzZWQtZXhwcmVzc2lvbnNcblxuUHJpdmF0ZVZhbHVlU3RvcmU7XG5cbi8qKlxuICogRXh0cmFjdCByb3V0ZSBjb25maWcgb2JqZWN0IGZyb20gUmVhY3QgY2hpbGRyZW4gZWxlbWVudHMuXG4gKlxuICogQHBhcmFtIGNoaWxkcmVuIFJlYWN0IEVsZW1lbnRzIHRvIGV4dHJhY3QgdGhlIGNvbmZpZyBmcm9tLlxuICovXG5jb25zdCBnZXRSb3V0ZUNvbmZpZ3NGcm9tQ2hpbGRyZW4gPSBjaGlsZHJlbiA9PiB7XG4gIGNvbnN0IGNvbmZpZ3MgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKS5yZWR1Y2UoKGFjYywgY2hpbGQpID0+IHtcbiAgICB2YXIgX2NoaWxkJHR5cGUsIF9jaGlsZCRwcm9wcztcblxuICAgIGlmICggLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFNjcmVlbikge1xuICAgICAgICAvLyBXZSBjYW4gb25seSBleHRyYWN0IHRoZSBjb25maWcgZnJvbSBgU2NyZWVuYCBlbGVtZW50c1xuICAgICAgICAvLyBJZiBzb21ldGhpbmcgZWxzZSB3YXMgcmVuZGVyZWQsIGl0J3MgcHJvYmFibHkgYSBidWdcbiAgICAgICAgYWNjLnB1c2goY2hpbGQucHJvcHMpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQudHlwZSA9PT0gUmVhY3QuRnJhZ21lbnQpIHtcbiAgICAgICAgLy8gV2hlbiB3ZSBlbmNvdW50ZXIgYSBmcmFnbWVudCwgd2UgbmVlZCB0byBkaXZlIGludG8gaXRzIGNoaWxkcmVuIHRvIGV4dHJhY3QgdGhlIGNvbmZpZ3NcbiAgICAgICAgLy8gVGhpcyBpcyBoYW5keSB0byBjb25kaXRpb25hbGx5IGRlZmluZSBhIGdyb3VwIG9mIHNjcmVlbnNcbiAgICAgICAgYWNjLnB1c2goLi4uZ2V0Um91dGVDb25maWdzRnJvbUNoaWxkcmVuKGNoaWxkLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBuYXZpZ2F0b3IgY2FuIG9ubHkgY29udGFpbiAnU2NyZWVuJyBjb21wb25lbnRzIGFzIGl0cyBkaXJlY3QgY2hpbGRyZW4gKGZvdW5kIFwiLmNvbmNhdCggLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSA/IFwiJ1wiLmNvbmNhdCh0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycgPyBjaGlsZC50eXBlIDogKF9jaGlsZCR0eXBlID0gY2hpbGQudHlwZSkgPT09IG51bGwgfHwgX2NoaWxkJHR5cGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jaGlsZCR0eXBlLm5hbWUsIFwiJ1wiKS5jb25jYXQoKF9jaGlsZCRwcm9wcyA9IGNoaWxkLnByb3BzKSAhPT0gbnVsbCAmJiBfY2hpbGQkcHJvcHMgIT09IHZvaWQgMCAmJiBfY2hpbGQkcHJvcHMubmFtZSA/IFwiIGZvciB0aGUgc2NyZWVuICdcIi5jb25jYXQoY2hpbGQucHJvcHMubmFtZSwgXCInXCIpIDogJycpIDogdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGNoaWxkKSA6IFwiJ1wiLmNvbmNhdChTdHJpbmcoY2hpbGQpLCBcIidcIiksIFwiKS4gVG8gcmVuZGVyIHRoaXMgY29tcG9uZW50IGluIHRoZSBuYXZpZ2F0b3IsIHBhc3MgaXQgaW4gdGhlICdjb21wb25lbnQnIHByb3AgdG8gJ1NjcmVlbicuXCIpKTtcbiAgfSwgW10pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uZmlncy5mb3JFYWNoKGNvbmZpZyA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBjb21wb25lbnQsXG4gICAgICAgIGdldENvbXBvbmVudFxuICAgICAgfSA9IGNvbmZpZztcblxuICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyB8fCAhbmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHb3QgYW4gaW52YWxpZCBuYW1lIChcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkobmFtZSksIFwiKSBmb3IgdGhlIHNjcmVlbi4gSXQgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcuXCIpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkcmVuICE9IG51bGwgfHwgY29tcG9uZW50ICE9PSB1bmRlZmluZWQgfHwgZ2V0Q29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuICE9IG51bGwgJiYgY29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHb3QgYm90aCAnY29tcG9uZW50JyBhbmQgJ2NoaWxkcmVuJyBwcm9wcyBmb3IgdGhlIHNjcmVlbiAnXCIuY29uY2F0KG5hbWUsIFwiJy4gWW91IG11c3QgcGFzcyBvbmx5IG9uZSBvZiB0aGVtLlwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGRyZW4gIT0gbnVsbCAmJiBnZXRDb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdvdCBib3RoICdnZXRDb21wb25lbnQnIGFuZCAnY2hpbGRyZW4nIHByb3BzIGZvciB0aGUgc2NyZWVuICdcIi5jb25jYXQobmFtZSwgXCInLiBZb3UgbXVzdCBwYXNzIG9ubHkgb25lIG9mIHRoZW0uXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wb25lbnQgIT09IHVuZGVmaW5lZCAmJiBnZXRDb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdvdCBib3RoICdjb21wb25lbnQnIGFuZCAnZ2V0Q29tcG9uZW50JyBwcm9wcyBmb3IgdGhlIHNjcmVlbiAnXCIuY29uY2F0KG5hbWUsIFwiJy4gWW91IG11c3QgcGFzcyBvbmx5IG9uZSBvZiB0aGVtLlwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGRyZW4gIT0gbnVsbCAmJiB0eXBlb2YgY2hpbGRyZW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHb3QgYW4gaW52YWxpZCB2YWx1ZSBmb3IgJ2NoaWxkcmVuJyBwcm9wIGZvciB0aGUgc2NyZWVuICdcIi5jb25jYXQobmFtZSwgXCInLiBJdCBtdXN0IGJlIGEgZnVuY3Rpb24gcmV0dXJuaW5nIGEgUmVhY3QgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudCAhPT0gdW5kZWZpbmVkICYmICFpc1ZhbGlkRWxlbWVudFR5cGUoY29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdvdCBhbiBpbnZhbGlkIHZhbHVlIGZvciAnY29tcG9uZW50JyBwcm9wIGZvciB0aGUgc2NyZWVuICdcIi5jb25jYXQobmFtZSwgXCInLiBJdCBtdXN0IGJlIGEgdmFsaWQgUmVhY3QgQ29tcG9uZW50LlwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2V0Q29tcG9uZW50ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGdldENvbXBvbmVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdvdCBhbiBpbnZhbGlkIHZhbHVlIGZvciAnZ2V0Q29tcG9uZW50JyBwcm9wIGZvciB0aGUgc2NyZWVuICdcIi5jb25jYXQobmFtZSwgXCInLiBJdCBtdXN0IGJlIGEgZnVuY3Rpb24gcmV0dXJuaW5nIGEgUmVhY3QgQ29tcG9uZW50LlwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJyAmJiBjb21wb25lbnQubmFtZSA9PT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICAvLyBJbmxpbmUgYW5vbnltb3VzIGZ1bmN0aW9ucyBwYXNzZWQgaW4gdGhlIGBjb21wb25lbnRgIHByb3Agd2lsbCBoYXZlIHRoZSBuYW1lIG9mIHRoZSBwcm9wXG4gICAgICAgICAgLy8gSXQncyByZWxhdGl2ZWx5IHNhZmUgdG8gYXNzdW1lIHRoYXQgaXQncyBub3QgYSBjb21wb25lbnQgc2luY2UgaXQgc2hvdWxkIGFsc28gaGF2ZSBQYXNjYWxDYXNlIG5hbWVcbiAgICAgICAgICAvLyBXZSB3b24ndCBjYXRjaCBhbGwgc2NlbmFyaW9zIGhlcmUsIGJ1dCB0aGlzIHNob3VsZCBjYXRjaCBhIGdvb2QgY2h1bmsgb2YgaW5jb3JyZWN0IHVzZS5cbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJMb29rcyBsaWtlIHlvdSdyZSBwYXNzaW5nIGFuIGlubGluZSBmdW5jdGlvbiBmb3IgJ2NvbXBvbmVudCcgcHJvcCBmb3IgdGhlIHNjcmVlbiAnXCIuY29uY2F0KG5hbWUsIFwiJyAoZS5nLiBjb21wb25lbnQ9eygpID0+IDxTb21lQ29tcG9uZW50IC8+fSkuIFBhc3NpbmcgYW4gaW5saW5lIGZ1bmN0aW9uIHdpbGwgY2F1c2UgdGhlIGNvbXBvbmVudCBzdGF0ZSB0byBiZSBsb3N0IG9uIHJlLXJlbmRlciBhbmQgY2F1c2UgcGVyZiBpc3N1ZXMgc2luY2UgaXQncyByZS1jcmVhdGVkIGV2ZXJ5IHJlbmRlci4gWW91IGNhbiBwYXNzIHRoZSBmdW5jdGlvbiBhcyBjaGlsZHJlbiB0byAnU2NyZWVuJyBpbnN0ZWFkIHRvIGFjaGlldmUgdGhlIGRlc2lyZWQgYmVoYXZpb3VyLlwiKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSAnY29tcG9uZW50JywgJ2dldENvbXBvbmVudCcgb3IgJ2NoaWxkcmVuJyBwcm9wIGZvciB0aGUgc2NyZWVuICdcIi5jb25jYXQobmFtZSwgXCInLiBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCAndW5kZWZpbmVkJy4gWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgaXQncyBkZWZpbmVkIGluLCBvciBtaXhlZCB1cCBkZWZhdWx0IGltcG9ydCBhbmQgbmFtZWQgaW1wb3J0IHdoZW4gaW1wb3J0aW5nLlwiKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY29uZmlncztcbn07XG4vKipcbiAqIEhvb2sgZm9yIGJ1aWxkaW5nIG5hdmlnYXRvcnMuXG4gKlxuICogQHBhcmFtIGNyZWF0ZVJvdXRlciBGYWN0b3J5IG1ldGhvZCB3aGljaCByZXR1cm5zIHJvdXRlciBvYmplY3QuXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIG9iamVjdCBjb250YWluaW5nIGBjaGlsZHJlbmAgYW5kIGFkZGl0aW9uYWwgb3B0aW9ucyBmb3IgdGhlIHJvdXRlci5cbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIGBzdGF0ZWAsIGBuYXZpZ2F0aW9uYCwgYGRlc2NyaXB0b3JzYCBvYmplY3RzLlxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTmF2aWdhdGlvbkJ1aWxkZXIoY3JlYXRlUm91dGVyLCBvcHRpb25zKSB7XG4gIGNvbnN0IG5hdmlnYXRvcktleSA9IHVzZVJlZ2lzdGVyTmF2aWdhdG9yKCk7XG4gIGNvbnN0IHJvdXRlID0gUmVhY3QudXNlQ29udGV4dChOYXZpZ2F0aW9uUm91dGVDb250ZXh0KTtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIC4uLnJlc3RcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHtcbiAgICBjdXJyZW50OiByb3V0ZXJcbiAgfSA9IFJlYWN0LnVzZVJlZihjcmVhdGVSb3V0ZXIoeyAuLi5yZXN0LFxuICAgIC4uLihyb3V0ZSAhPT0gbnVsbCAmJiByb3V0ZSAhPT0gdm9pZCAwICYmIHJvdXRlLnBhcmFtcyAmJiByb3V0ZS5wYXJhbXMuc3RhdGUgPT0gbnVsbCAmJiByb3V0ZS5wYXJhbXMuaW5pdGlhbCAhPT0gZmFsc2UgJiYgdHlwZW9mIHJvdXRlLnBhcmFtcy5zY3JlZW4gPT09ICdzdHJpbmcnID8ge1xuICAgICAgaW5pdGlhbFJvdXRlTmFtZTogcm91dGUucGFyYW1zLnNjcmVlblxuICAgIH0gOiBudWxsKVxuICB9KSk7XG4gIGNvbnN0IHJvdXRlQ29uZmlncyA9IGdldFJvdXRlQ29uZmlnc0Zyb21DaGlsZHJlbihjaGlsZHJlbik7XG4gIGNvbnN0IHNjcmVlbnMgPSByb3V0ZUNvbmZpZ3MucmVkdWNlKChhY2MsIGNvbmZpZykgPT4ge1xuICAgIGlmIChjb25maWcubmFtZSBpbiBhY2MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgbmF2aWdhdG9yIGNhbm5vdCBjb250YWluIG11bHRpcGxlICdTY3JlZW4nIGNvbXBvbmVudHMgd2l0aCB0aGUgc2FtZSBuYW1lIChmb3VuZCBkdXBsaWNhdGUgc2NyZWVuIG5hbWVkICdcIi5jb25jYXQoY29uZmlnLm5hbWUsIFwiJylcIikpO1xuICAgIH1cblxuICAgIGFjY1tjb25maWcubmFtZV0gPSBjb25maWc7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICBjb25zdCByb3V0ZU5hbWVzID0gcm91dGVDb25maWdzLm1hcChjb25maWcgPT4gY29uZmlnLm5hbWUpO1xuICBjb25zdCByb3V0ZVBhcmFtTGlzdCA9IHJvdXRlTmFtZXMucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcbiAgICB2YXIgX3JvdXRlJHBhcmFtcywgX3JvdXRlJHBhcmFtczIsIF9yb3V0ZSRwYXJhbXMzO1xuXG4gICAgY29uc3Qge1xuICAgICAgaW5pdGlhbFBhcmFtc1xuICAgIH0gPSBzY3JlZW5zW2N1cnJdO1xuICAgIGNvbnN0IGluaXRpYWxQYXJhbXNGcm9tUGFyYW1zID0gKHJvdXRlID09PSBudWxsIHx8IHJvdXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX3JvdXRlJHBhcmFtcyA9IHJvdXRlLnBhcmFtcykgPT09IG51bGwgfHwgX3JvdXRlJHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3JvdXRlJHBhcmFtcy5zdGF0ZSkgPT0gbnVsbCAmJiAocm91dGUgPT09IG51bGwgfHwgcm91dGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfcm91dGUkcGFyYW1zMiA9IHJvdXRlLnBhcmFtcykgPT09IG51bGwgfHwgX3JvdXRlJHBhcmFtczIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9yb3V0ZSRwYXJhbXMyLmluaXRpYWwpICE9PSBmYWxzZSAmJiAocm91dGUgPT09IG51bGwgfHwgcm91dGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfcm91dGUkcGFyYW1zMyA9IHJvdXRlLnBhcmFtcykgPT09IG51bGwgfHwgX3JvdXRlJHBhcmFtczMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9yb3V0ZSRwYXJhbXMzLnNjcmVlbikgPT09IGN1cnIgPyByb3V0ZS5wYXJhbXMucGFyYW1zIDogdW5kZWZpbmVkO1xuICAgIGFjY1tjdXJyXSA9IGluaXRpYWxQYXJhbXMgIT09IHVuZGVmaW5lZCB8fCBpbml0aWFsUGFyYW1zRnJvbVBhcmFtcyAhPT0gdW5kZWZpbmVkID8geyAuLi5pbml0aWFsUGFyYW1zLFxuICAgICAgLi4uaW5pdGlhbFBhcmFtc0Zyb21QYXJhbXNcbiAgICB9IDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgY29uc3Qgcm91dGVHZXRJZExpc3QgPSByb3V0ZU5hbWVzLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBPYmplY3QuYXNzaWduKGFjYywge1xuICAgIFtjdXJyXTogc2NyZWVuc1tjdXJyXS5nZXRJZFxuICB9KSwge30pO1xuXG4gIGlmICghcm91dGVOYW1lcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGFueSBzY3JlZW5zIGZvciB0aGUgbmF2aWdhdG9yLiBIYXZlIHlvdSBkZWZpbmVkIGFueSBzY3JlZW5zIGFzIGl0cyBjaGlsZHJlbj9cIik7XG4gIH1cblxuICBjb25zdCBpc1N0YXRlVmFsaWQgPSBSZWFjdC51c2VDYWxsYmFjayhzdGF0ZSA9PiBzdGF0ZS50eXBlID09PSB1bmRlZmluZWQgfHwgc3RhdGUudHlwZSA9PT0gcm91dGVyLnR5cGUsIFtyb3V0ZXIudHlwZV0pO1xuICBjb25zdCBpc1N0YXRlSW5pdGlhbGl6ZWQgPSBSZWFjdC51c2VDYWxsYmFjayhzdGF0ZSA9PiBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlLnN0YWxlID09PSBmYWxzZSAmJiBpc1N0YXRlVmFsaWQoc3RhdGUpLCBbaXNTdGF0ZVZhbGlkXSk7XG4gIGNvbnN0IHtcbiAgICBzdGF0ZTogY3VycmVudFN0YXRlLFxuICAgIGdldFN0YXRlOiBnZXRDdXJyZW50U3RhdGUsXG4gICAgc2V0U3RhdGUsXG4gICAgc2V0S2V5LFxuICAgIGdldEtleSxcbiAgICBnZXRJc0luaXRpYWxcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvblN0YXRlQ29udGV4dCk7XG4gIGNvbnN0IFtpbml0aWFsaXplZFN0YXRlLCBpc0ZpcnN0U3RhdGVJbml0aWFsaXphdGlvbl0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICB2YXIgX3JvdXRlJHBhcmFtczQ7XG5cbiAgICAvLyBJZiB0aGUgY3VycmVudCBzdGF0ZSBpc24ndCBpbml0aWFsaXplZCBvbiBmaXJzdCByZW5kZXIsIHdlIGluaXRpYWxpemUgaXRcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gcmUtaW5pdGlhbGl6ZSBpdCBpZiB0aGUgc3RhdGUgcGFzc2VkIGZyb20gcGFyZW50IHdhcyBjaGFuZ2VkIChtYXliZSBkdWUgdG8gcmVzZXQpXG4gICAgLy8gT3RoZXJ3aXNlIGFzc3VtZSB0aGF0IHRoZSBzdGF0ZSB3YXMgcHJvdmlkZWQgYXMgaW5pdGlhbCBzdGF0ZVxuICAgIC8vIFNvIHdlIG5lZWQgdG8gcmVoeWRyYXRlIGl0IHRvIG1ha2UgaXQgdXNhYmxlXG4gICAgaWYgKChjdXJyZW50U3RhdGUgPT09IHVuZGVmaW5lZCB8fCAhaXNTdGF0ZVZhbGlkKGN1cnJlbnRTdGF0ZSkpICYmIChyb3V0ZSA9PT0gbnVsbCB8fCByb3V0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9yb3V0ZSRwYXJhbXM0ID0gcm91dGUucGFyYW1zKSA9PT0gbnVsbCB8fCBfcm91dGUkcGFyYW1zNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3JvdXRlJHBhcmFtczQuc3RhdGUpID09IG51bGwpIHtcbiAgICAgIHJldHVybiBbcm91dGVyLmdldEluaXRpYWxTdGF0ZSh7XG4gICAgICAgIHJvdXRlTmFtZXMsXG4gICAgICAgIHJvdXRlUGFyYW1MaXN0LFxuICAgICAgICByb3V0ZUdldElkTGlzdFxuICAgICAgfSksIHRydWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX3JvdXRlJHBhcmFtcyRzdGF0ZSwgX3JvdXRlJHBhcmFtczU7XG5cbiAgICAgIHJldHVybiBbcm91dGVyLmdldFJlaHlkcmF0ZWRTdGF0ZSgoX3JvdXRlJHBhcmFtcyRzdGF0ZSA9IHJvdXRlID09PSBudWxsIHx8IHJvdXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX3JvdXRlJHBhcmFtczUgPSByb3V0ZS5wYXJhbXMpID09PSBudWxsIHx8IF9yb3V0ZSRwYXJhbXM1ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcm91dGUkcGFyYW1zNS5zdGF0ZSkgIT09IG51bGwgJiYgX3JvdXRlJHBhcmFtcyRzdGF0ZSAhPT0gdm9pZCAwID8gX3JvdXRlJHBhcmFtcyRzdGF0ZSA6IGN1cnJlbnRTdGF0ZSwge1xuICAgICAgICByb3V0ZU5hbWVzLFxuICAgICAgICByb3V0ZVBhcmFtTGlzdCxcbiAgICAgICAgcm91dGVHZXRJZExpc3RcbiAgICAgIH0pLCBmYWxzZV07XG4gICAgfSAvLyBXZSBleHBsaWNpdGx5IGRvbid0IGluY2x1ZGUgcm91dGVOYW1lcy9yb3V0ZVBhcmFtTGlzdCBpbiB0aGUgZGVwIGxpc3RcbiAgICAvLyBiZWxvdy4gV2Ugd2FudCB0byBhdm9pZCBmb3JjaW5nIGEgbmV3IHN0YXRlIHRvIGJlIGNhbGN1bGF0ZWQgaW4gY2FzZXNcbiAgICAvLyB3aGVyZSByb3V0ZUNvbmZpZ3MgY2hhbmdlIHdpdGhvdXQgYWZmZWN0aW5nIHJvdXRlTmFtZXMvcm91dGVQYXJhbUxpc3QuXG4gICAgLy8gSW5zdGVhZCwgd2UgaGFuZGxlIGNoYW5nZXMgdG8gdGhlc2UgaW4gdGhlIG5leHRTdGF0ZSBjb2RlIGJlbG93LiBOb3RlXG4gICAgLy8gdGhhdCBzb21lIGNoYW5nZXMgdG8gcm91dGVDb25maWdzIGFyZSBleHBsaWNpdGx5IGlnbm9yZWQsIHN1Y2ggYXMgY2hhbmdlc1xuICAgIC8vIHRvIGluaXRpYWxQYXJhbXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgfSwgW2N1cnJlbnRTdGF0ZSwgcm91dGVyLCBpc1N0YXRlVmFsaWRdKTtcbiAgbGV0IHN0YXRlID0gLy8gSWYgdGhlIHN0YXRlIGlzbid0IGluaXRpYWxpemVkLCBvciBzdGFsZSwgdXNlIHRoZSBzdGF0ZSB3ZSBpbml0aWFsaXplZCBpbnN0ZWFkXG4gIC8vIFRoZSBzdGF0ZSB3b24ndCB1cGRhdGUgdW50aWwgdGhlcmUncyBhIGNoYW5nZSBuZWVkZWQgaW4gdGhlIHN0YXRlIHdlIGhhdmUgaW5pdGFsaXplZCBsb2NhbGx5XG4gIC8vIFNvIGl0J2xsIGJlIGB1bmRlZmluZWRgIG9yIHN0YWxlIHVudGlsIHRoZSBmaXJzdCBuYXZpZ2F0aW9uIGV2ZW50IGhhcHBlbnNcbiAgaXNTdGF0ZUluaXRpYWxpemVkKGN1cnJlbnRTdGF0ZSkgPyBjdXJyZW50U3RhdGUgOiBpbml0aWFsaXplZFN0YXRlO1xuICBsZXQgbmV4dFN0YXRlID0gc3RhdGU7XG5cbiAgaWYgKCFpc0FycmF5RXF1YWwoc3RhdGUucm91dGVOYW1lcywgcm91dGVOYW1lcykpIHtcbiAgICAvLyBXaGVuIHRoZSBsaXN0IG9mIHJvdXRlIG5hbWVzIGNoYW5nZSwgdGhlIHJvdXRlciBzaG91bGQgaGFuZGxlIGl0IHRvIHJlbW92ZSBpbnZhbGlkIHJvdXRlc1xuICAgIG5leHRTdGF0ZSA9IHJvdXRlci5nZXRTdGF0ZUZvclJvdXRlTmFtZXNDaGFuZ2Uoc3RhdGUsIHtcbiAgICAgIHJvdXRlTmFtZXMsXG4gICAgICByb3V0ZVBhcmFtTGlzdCxcbiAgICAgIHJvdXRlR2V0SWRMaXN0XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBwcmV2aW91c05lc3RlZFBhcmFtc1JlZiA9IFJlYWN0LnVzZVJlZihyb3V0ZSA9PT0gbnVsbCB8fCByb3V0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcm91dGUucGFyYW1zKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcmV2aW91c05lc3RlZFBhcmFtc1JlZi5jdXJyZW50ID0gcm91dGUgPT09IG51bGwgfHwgcm91dGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJvdXRlLnBhcmFtcztcbiAgfSwgW3JvdXRlID09PSBudWxsIHx8IHJvdXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByb3V0ZS5wYXJhbXNdKTtcblxuICBpZiAocm91dGUgIT09IG51bGwgJiYgcm91dGUgIT09IHZvaWQgMCAmJiByb3V0ZS5wYXJhbXMpIHtcbiAgICBjb25zdCBwcmV2aW91c1BhcmFtcyA9IHByZXZpb3VzTmVzdGVkUGFyYW1zUmVmLmN1cnJlbnQ7XG4gICAgbGV0IGFjdGlvbjtcblxuICAgIGlmICh0eXBlb2Ygcm91dGUucGFyYW1zLnN0YXRlID09PSAnb2JqZWN0JyAmJiByb3V0ZS5wYXJhbXMuc3RhdGUgIT0gbnVsbCAmJiByb3V0ZS5wYXJhbXMuc3RhdGUgIT09IChwcmV2aW91c1BhcmFtcyA9PT0gbnVsbCB8fCBwcmV2aW91c1BhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJldmlvdXNQYXJhbXMuc3RhdGUpKSB7XG4gICAgICAvLyBJZiB0aGUgcm91dGUgd2FzIHVwZGF0ZWQgd2l0aCBuZXcgc3RhdGUsIHdlIHNob3VsZCByZXNldCB0byBpdFxuICAgICAgYWN0aW9uID0gQ29tbW9uQWN0aW9ucy5yZXNldChyb3V0ZS5wYXJhbXMuc3RhdGUpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJvdXRlLnBhcmFtcy5zY3JlZW4gPT09ICdzdHJpbmcnICYmIChyb3V0ZS5wYXJhbXMuaW5pdGlhbCA9PT0gZmFsc2UgJiYgaXNGaXJzdFN0YXRlSW5pdGlhbGl6YXRpb24gfHwgcm91dGUucGFyYW1zICE9PSBwcmV2aW91c1BhcmFtcykpIHtcbiAgICAgIC8vIEZJWE1FOiBTaW5jZSBwYXJhbXMgYXJlIG1lcmdlZCwgYHJvdXRlLnBhcmFtcy5wYXJhbXNgIG1pZ2h0IGNvbnRhaW4gcGFyYW1zIGZyb20gYW4gb2xkZXIgcm91dGVcbiAgICAgIC8vIElmIHRoZSByb3V0ZSB3YXMgdXBkYXRlZCB3aXRoIG5ldyBzY3JlZW4gbmFtZSBhbmQvb3IgcGFyYW1zLCB3ZSBzaG91bGQgbmF2aWdhdGUgdGhlcmVcbiAgICAgIGFjdGlvbiA9IENvbW1vbkFjdGlvbnMubmF2aWdhdGUocm91dGUucGFyYW1zLnNjcmVlbiwgcm91dGUucGFyYW1zLnBhcmFtcyk7XG4gICAgfSAvLyBUaGUgdXBkYXRlIHNob3VsZCBiZSBsaW1pdGVkIHRvIGN1cnJlbnQgbmF2aWdhdG9yIG9ubHksIHNvIHdlIGNhbGwgdGhlIHJvdXRlciBtYW51YWxseVxuXG5cbiAgICBjb25zdCB1cGRhdGVkU3RhdGUgPSBhY3Rpb24gPyByb3V0ZXIuZ2V0U3RhdGVGb3JBY3Rpb24obmV4dFN0YXRlLCBhY3Rpb24sIHtcbiAgICAgIHJvdXRlTmFtZXMsXG4gICAgICByb3V0ZVBhcmFtTGlzdCxcbiAgICAgIHJvdXRlR2V0SWRMaXN0XG4gICAgfSkgOiBudWxsO1xuICAgIG5leHRTdGF0ZSA9IHVwZGF0ZWRTdGF0ZSAhPT0gbnVsbCA/IHJvdXRlci5nZXRSZWh5ZHJhdGVkU3RhdGUodXBkYXRlZFN0YXRlLCB7XG4gICAgICByb3V0ZU5hbWVzLFxuICAgICAgcm91dGVQYXJhbUxpc3QsXG4gICAgICByb3V0ZUdldElkTGlzdFxuICAgIH0pIDogbmV4dFN0YXRlO1xuICB9XG5cbiAgY29uc3Qgc2hvdWxkVXBkYXRlID0gc3RhdGUgIT09IG5leHRTdGF0ZTtcbiAgdXNlU2NoZWR1bGVVcGRhdGUoKCkgPT4ge1xuICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgIC8vIElmIHRoZSBzdGF0ZSBuZWVkcyB0byBiZSB1cGRhdGVkLCB3ZSdsbCBzY2hlZHVsZSBhbiB1cGRhdGVcbiAgICAgIHNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgfVxuICB9KTsgLy8gVGhlIHVwLXRvLWRhdGUgc3RhdGUgd2lsbCBjb21lIGluIG5leHQgcmVuZGVyLCBidXQgd2UgZG9uJ3QgbmVlZCB0byB3YWl0IGZvciBpdFxuICAvLyBXZSBjYW4ndCB1c2UgdGhlIG91dGRhdGVkIHN0YXRlIHNpbmNlIHRoZSBzY3JlZW5zIGhhdmUgY2hhbmdlZCwgd2hpY2ggd2lsbCBjYXVzZSBlcnJvciBkdWUgdG8gbWlzbWF0Y2hlZCBjb25maWdcbiAgLy8gU28gd2Ugb3ZlcnJpZGUgdGhlIHN0YXRlIG9iamVjdCB3ZSByZXR1cm4gdG8gdXNlIHRoZSBsYXRlc3Qgc3RhdGUgYXMgc29vbiBhcyBwb3NzaWJsZVxuXG4gIHN0YXRlID0gbmV4dFN0YXRlO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEtleShuYXZpZ2F0b3JLZXkpO1xuXG4gICAgaWYgKCFnZXRJc0luaXRpYWwoKSkge1xuICAgICAgLy8gSWYgaXQncyBub3QgaW5pdGlhbCByZW5kZXIsIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBzdGF0ZVxuICAgICAgLy8gVGhpcyB3aWxsIG1ha2Ugc3VyZSB0aGF0IG91ciBjb250YWluZXIgZ2V0cyBub3RpZmllciBvZiBzdGF0ZSBjaGFuZ2VzIGR1ZSB0byBuZXcgbW91bnRzXG4gICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgcHJvcGVyIHNjcmVlbiB0cmFja2luZywgVVJMIHVwZGF0ZXMgZXRjLlxuICAgICAgc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgLy8gV2UgbmVlZCB0byBjbGVhbiB1cCBzdGF0ZSBmb3IgdGhpcyBuYXZpZ2F0b3Igb24gdW5tb3VudFxuICAgICAgLy8gV2UgZG8gaXQgaW4gYSB0aW1lb3V0IGJlY2F1c2Ugd2UgbmVlZCB0byBkZXRlY3QgaWYgYW5vdGhlciBuYXZpZ2F0b3IgbW91bnRlZCBpbiB0aGUgbWVhbnRpbWVcbiAgICAgIC8vIEZvciBleGFtcGxlLCBpZiBhbm90aGVyIG5hdmlnYXRvciBoYXMgc3RhcnRlZCByZW5kZXJpbmcsIHdlIHNob3VsZCBza2lwIGNsZWFudXBcbiAgICAgIC8vIE90aGVyd2lzZSwgb3VyIGNsZWFudXAgc3RlcCB3aWxsIGNsZWFudXAgc3RhdGUgZm9yIHRoZSBvdGhlciBuYXZpZ2F0b3IgYW5kIHJlLWluaXRpYWxpemUgaXRcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoZ2V0Q3VycmVudFN0YXRlKCkgIT09IHVuZGVmaW5lZCAmJiBnZXRLZXkoKSA9PT0gbmF2aWdhdG9yS2V5KSB7XG4gICAgICAgICAgc2V0U3RhdGUodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgfSwgMCk7XG4gICAgfTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbXSk7IC8vIFdlIGluaXRpYWxpemUgdGhpcyByZWYgaGVyZSB0byBhdm9pZCBhIG5ldyBnZXRTdGF0ZSBnZXR0aW5nIGluaXRpYWxpemVkXG4gIC8vIHdoZW5ldmVyIGluaXRpYWxpemVkU3RhdGUgY2hhbmdlcy4gV2Ugd2FudCBnZXRTdGF0ZSB0byBoYXZlIGFjY2VzcyB0byB0aGVcbiAgLy8gbGF0ZXN0IGluaXRpYWxpemVkU3RhdGUsIGJ1dCBkb24ndCBuZWVkIGl0IHRvIGNoYW5nZSB3aGVuIHRoYXQgaGFwcGVuc1xuXG4gIGNvbnN0IGluaXRpYWxpemVkU3RhdGVSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgaW5pdGlhbGl6ZWRTdGF0ZVJlZi5jdXJyZW50ID0gaW5pdGlhbGl6ZWRTdGF0ZTtcbiAgY29uc3QgZ2V0U3RhdGUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFN0YXRlID0gZ2V0Q3VycmVudFN0YXRlKCk7XG4gICAgcmV0dXJuIGlzU3RhdGVJbml0aWFsaXplZChjdXJyZW50U3RhdGUpID8gY3VycmVudFN0YXRlIDogaW5pdGlhbGl6ZWRTdGF0ZVJlZi5jdXJyZW50O1xuICB9LCBbZ2V0Q3VycmVudFN0YXRlLCBpc1N0YXRlSW5pdGlhbGl6ZWRdKTtcbiAgY29uc3QgZW1pdHRlciA9IHVzZUV2ZW50RW1pdHRlcihlID0+IHtcbiAgICBsZXQgcm91dGVOYW1lcyA9IFtdO1xuICAgIGxldCByb3V0ZTtcblxuICAgIGlmIChlLnRhcmdldCkge1xuICAgICAgdmFyIF9yb3V0ZTtcblxuICAgICAgcm91dGUgPSBzdGF0ZS5yb3V0ZXMuZmluZChyb3V0ZSA9PiByb3V0ZS5rZXkgPT09IGUudGFyZ2V0KTtcblxuICAgICAgaWYgKChfcm91dGUgPSByb3V0ZSkgIT09IG51bGwgJiYgX3JvdXRlICE9PSB2b2lkIDAgJiYgX3JvdXRlLm5hbWUpIHtcbiAgICAgICAgcm91dGVOYW1lcy5wdXNoKHJvdXRlLm5hbWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZSA9IHN0YXRlLnJvdXRlc1tzdGF0ZS5pbmRleF07XG4gICAgICByb3V0ZU5hbWVzLnB1c2goLi4uT2JqZWN0LmtleXMoc2NyZWVucykuZmlsdGVyKG5hbWUgPT4ge1xuICAgICAgICB2YXIgX3JvdXRlMjtcblxuICAgICAgICByZXR1cm4gKChfcm91dGUyID0gcm91dGUpID09PSBudWxsIHx8IF9yb3V0ZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9yb3V0ZTIubmFtZSkgPT09IG5hbWU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuYXZpZ2F0aW9uID0gZGVzY3JpcHRvcnNbcm91dGUua2V5XS5uYXZpZ2F0aW9uO1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IFtdLmNvbmNhdCguLi5yb3V0ZU5hbWVzLm1hcChuYW1lID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbGlzdGVuZXJzXG4gICAgICB9ID0gc2NyZWVuc1tuYW1lXTtcbiAgICAgIGNvbnN0IG1hcCA9IHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicgPyBsaXN0ZW5lcnMoe1xuICAgICAgICByb3V0ZTogcm91dGUsXG4gICAgICAgIG5hdmlnYXRpb25cbiAgICAgIH0pIDogbGlzdGVuZXJzO1xuICAgICAgcmV0dXJuIG1hcCA/IE9iamVjdC5rZXlzKG1hcCkuZmlsdGVyKHR5cGUgPT4gdHlwZSA9PT0gZS50eXBlKS5tYXAodHlwZSA9PiBtYXAgPT09IG51bGwgfHwgbWFwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtYXBbdHlwZV0pIDogdW5kZWZpbmVkO1xuICAgIH0pKS5maWx0ZXIoKGNiLCBpLCBzZWxmKSA9PiBjYiAmJiBzZWxmLmxhc3RJbmRleE9mKGNiKSA9PT0gaSk7XG4gICAgbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4gbGlzdGVuZXIgPT09IG51bGwgfHwgbGlzdGVuZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxpc3RlbmVyKGUpKTtcbiAgfSk7XG4gIHVzZUZvY3VzRXZlbnRzKHtcbiAgICBzdGF0ZSxcbiAgICBlbWl0dGVyXG4gIH0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGVtaXR0ZXIuZW1pdCh7XG4gICAgICB0eXBlOiAnc3RhdGUnLFxuICAgICAgZGF0YToge1xuICAgICAgICBzdGF0ZVxuICAgICAgfVxuICAgIH0pO1xuICB9LCBbZW1pdHRlciwgc3RhdGVdKTtcbiAgY29uc3Qge1xuICAgIGxpc3RlbmVyczogY2hpbGRMaXN0ZW5lcnMsXG4gICAgYWRkTGlzdGVuZXJcbiAgfSA9IHVzZUNoaWxkTGlzdGVuZXJzKCk7XG4gIGNvbnN0IHtcbiAgICBrZXllZExpc3RlbmVycyxcbiAgICBhZGRLZXllZExpc3RlbmVyXG4gIH0gPSB1c2VLZXllZENoaWxkTGlzdGVuZXJzKCk7XG4gIGNvbnN0IG9uQWN0aW9uID0gdXNlT25BY3Rpb24oe1xuICAgIHJvdXRlcixcbiAgICBnZXRTdGF0ZSxcbiAgICBzZXRTdGF0ZSxcbiAgICBrZXk6IHJvdXRlID09PSBudWxsIHx8IHJvdXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByb3V0ZS5rZXksXG4gICAgYWN0aW9uTGlzdGVuZXJzOiBjaGlsZExpc3RlbmVycy5hY3Rpb24sXG4gICAgYmVmb3JlUmVtb3ZlTGlzdGVuZXJzOiBrZXllZExpc3RlbmVycy5iZWZvcmVSZW1vdmUsXG4gICAgcm91dGVyQ29uZmlnT3B0aW9uczoge1xuICAgICAgcm91dGVOYW1lcyxcbiAgICAgIHJvdXRlUGFyYW1MaXN0LFxuICAgICAgcm91dGVHZXRJZExpc3RcbiAgICB9LFxuICAgIGVtaXR0ZXJcbiAgfSk7XG4gIGNvbnN0IG9uUm91dGVGb2N1cyA9IHVzZU9uUm91dGVGb2N1cyh7XG4gICAgcm91dGVyLFxuICAgIGtleTogcm91dGUgPT09IG51bGwgfHwgcm91dGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJvdXRlLmtleSxcbiAgICBnZXRTdGF0ZSxcbiAgICBzZXRTdGF0ZVxuICB9KTtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IHVzZU5hdmlnYXRpb25IZWxwZXJzKHtcbiAgICBvbkFjdGlvbixcbiAgICBnZXRTdGF0ZSxcbiAgICBlbWl0dGVyLFxuICAgIHJvdXRlclxuICB9KTtcbiAgdXNlRm9jdXNlZExpc3RlbmVyc0NoaWxkcmVuQWRhcHRlcih7XG4gICAgbmF2aWdhdGlvbixcbiAgICBmb2N1c2VkTGlzdGVuZXJzOiBjaGlsZExpc3RlbmVycy5mb2N1c1xuICB9KTtcbiAgdXNlT25HZXRTdGF0ZSh7XG4gICAgZ2V0U3RhdGUsXG4gICAgZ2V0U3RhdGVMaXN0ZW5lcnM6IGtleWVkTGlzdGVuZXJzLmdldFN0YXRlXG4gIH0pO1xuICBjb25zdCBkZXNjcmlwdG9ycyA9IHVzZURlc2NyaXB0b3JzKHtcbiAgICBzdGF0ZSxcbiAgICBzY3JlZW5zLFxuICAgIG5hdmlnYXRpb24sXG4gICAgc2NyZWVuT3B0aW9uczogb3B0aW9ucy5zY3JlZW5PcHRpb25zLFxuICAgIGRlZmF1bHRTY3JlZW5PcHRpb25zOiBvcHRpb25zLmRlZmF1bHRTY3JlZW5PcHRpb25zLFxuICAgIG9uQWN0aW9uLFxuICAgIGdldFN0YXRlLFxuICAgIHNldFN0YXRlLFxuICAgIG9uUm91dGVGb2N1cyxcbiAgICBhZGRMaXN0ZW5lcixcbiAgICBhZGRLZXllZExpc3RlbmVyLFxuICAgIHJvdXRlcixcbiAgICBlbWl0dGVyXG4gIH0pO1xuICB1c2VDdXJyZW50UmVuZGVyKHtcbiAgICBzdGF0ZSxcbiAgICBuYXZpZ2F0aW9uLFxuICAgIGRlc2NyaXB0b3JzXG4gIH0pO1xuICBjb25zdCBOYXZpZ2F0aW9uQ29udGVudCA9IHVzZUNvbXBvbmVudChOYXZpZ2F0aW9uSGVscGVyc0NvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogbmF2aWdhdGlvblxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBzdGF0ZSxcbiAgICBuYXZpZ2F0aW9uLFxuICAgIGRlc2NyaXB0b3JzLFxuICAgIE5hdmlnYXRpb25Db250ZW50XG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VOYXZpZ2F0aW9uQnVpbGRlci5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb21tb25BY3Rpb25zIH0gZnJvbSAnQHJlYWN0LW5hdmlnYXRpb24vcm91dGVycyc7XG5cbi8qKlxuICogSG9vayB0byBjYWNoZSBuYXZpZ2F0aW9uIG9iamVjdHMgZm9yIGVhY2ggc2NyZWVuIGluIHRoZSBuYXZpZ2F0b3IuXG4gKiBJdCdzIGltcG9ydGFudCB0byBjYWNoZSB0aGVtIHRvIG1ha2Ugc3VyZSBuYXZpZ2F0aW9uIG9iamVjdHMgZG9uJ3QgY2hhbmdlIGJldHdlZW4gcmVuZGVycy5cbiAqIFRoaXMgbGV0cyB1cyBhcHBseSBvcHRpbWl6YXRpb25zIGxpa2UgYFJlYWN0Lm1lbW9gIHRvIG1pbmltaXplIHJlLXJlbmRlcmluZyBzY3JlZW5zLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VOYXZpZ2F0aW9uQ2FjaGUoe1xuICBzdGF0ZSxcbiAgZ2V0U3RhdGUsXG4gIG5hdmlnYXRpb24sXG4gIHNldE9wdGlvbnMsXG4gIHJvdXRlcixcbiAgZW1pdHRlclxufSkge1xuICAvLyBDYWNoZSBvYmplY3Qgd2hpY2ggaG9sZHMgbmF2aWdhdGlvbiBvYmplY3RzIGZvciBlYWNoIHNjcmVlblxuICAvLyBXZSB1c2UgYFJlYWN0LnVzZU1lbW9gIGluc3RlYWQgb2YgYFJlYWN0LnVzZVJlZmAgY296IHdlIHdhbnQgdG8gaW52YWxpZGF0ZSBpdCB3aGVuIGRlcHMgY2hhbmdlXG4gIC8vIEluIHJlYWxpdHksIHRoZXNlIGRlcHMgd2lsbCByYXJlbHkgY2hhbmdlLCBpZiBldmVyXG4gIGNvbnN0IGNhY2hlID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIGN1cnJlbnQ6IHt9XG4gIH0pLCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIFtnZXRTdGF0ZSwgbmF2aWdhdGlvbiwgc2V0T3B0aW9ucywgcm91dGVyLCBlbWl0dGVyXSk7XG4gIGNvbnN0IGFjdGlvbnMgPSB7IC4uLnJvdXRlci5hY3Rpb25DcmVhdG9ycyxcbiAgICAuLi5Db21tb25BY3Rpb25zXG4gIH07XG4gIGNhY2hlLmN1cnJlbnQgPSBzdGF0ZS5yb3V0ZXMucmVkdWNlKChhY2MsIHJvdXRlKSA9PiB7XG4gICAgY29uc3QgcHJldmlvdXMgPSBjYWNoZS5jdXJyZW50W3JvdXRlLmtleV07XG5cbiAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgIC8vIElmIGEgY2FjaGVkIG5hdmlnYXRpb24gb2JqZWN0IGFscmVhZHkgZXhpc3RzLCByZXVzZSBpdFxuICAgICAgYWNjW3JvdXRlLmtleV0gPSBwcmV2aW91cztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgY29uc3Qge1xuICAgICAgICBlbWl0LFxuICAgICAgICAuLi5yZXN0XG4gICAgICB9ID0gbmF2aWdhdGlvbjtcblxuICAgICAgY29uc3QgZGlzcGF0Y2ggPSBhY3Rpb24gPT4ge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0gdHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGFjdGlvbihnZXRTdGF0ZSgpKSA6IGFjdGlvbjtcbiAgICAgICAgbmF2aWdhdGlvbi5kaXNwYXRjaCh0eXBlb2YgcGF5bG9hZCA9PT0gJ29iamVjdCcgJiYgcGF5bG9hZCAhPSBudWxsID8ge1xuICAgICAgICAgIHNvdXJjZTogcm91dGUua2V5LFxuICAgICAgICAgIC4uLnBheWxvYWRcbiAgICAgICAgfSA6IHBheWxvYWQpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaGVscGVycyA9IE9iamVjdC5rZXlzKGFjdGlvbnMpLnJlZHVjZSgoYWNjLCBuYW1lKSA9PiB7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IG5hbWUgaXMgYSB2YWxpZCBrZXksIGJ1dCBUeXBlU2NyaXB0IGlzIGR1bWJcbiAgICAgICAgYWNjW25hbWVdID0gKC4uLmFyZ3MpID0+IGRpc3BhdGNoKGFjdGlvbnNbbmFtZV0oLi4uYXJncykpO1xuXG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgICBhY2Nbcm91dGUua2V5XSA9IHsgLi4ucmVzdCxcbiAgICAgICAgLi4uaGVscGVycyxcbiAgICAgICAgLi4uZW1pdHRlci5jcmVhdGUocm91dGUua2V5KSxcbiAgICAgICAgZGlzcGF0Y2gsXG4gICAgICAgIHNldE9wdGlvbnM6IG9wdGlvbnMgPT4gc2V0T3B0aW9ucyhvID0+ICh7IC4uLm8sXG4gICAgICAgICAgW3JvdXRlLmtleV06IHsgLi4ub1tyb3V0ZS5rZXldLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpLFxuICAgICAgICBpc0ZvY3VzZWQ6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG5cbiAgICAgICAgICBpZiAoc3RhdGUucm91dGVzW3N0YXRlLmluZGV4XS5rZXkgIT09IHJvdXRlLmtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gLy8gSWYgdGhlIGN1cnJlbnQgc2NyZWVuIGlzIGZvY3VzZWQsIHdlIGFsc28gbmVlZCB0byBjaGVjayBpZiBwYXJlbnQgbmF2aWdhdG9yIGlzIGZvY3VzZWRcbiAgICAgICAgICAvLyBUaGlzIG1ha2VzIHN1cmUgdGhhdCB3ZSByZXR1cm4gdGhlIGZvY3VzIHN0YXRlIGluIHRoZSB3aG9sZSB0cmVlLCBub3QganVzdCB0aGlzIG5hdmlnYXRvclxuXG5cbiAgICAgICAgICByZXR1cm4gbmF2aWdhdGlvbiA/IG5hdmlnYXRpb24uaXNGb2N1c2VkKCkgOiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIGNhY2hlLmN1cnJlbnQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VOYXZpZ2F0aW9uQ2FjaGUuanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29tbW9uQWN0aW9ucyB9IGZyb20gJ0ByZWFjdC1uYXZpZ2F0aW9uL3JvdXRlcnMnO1xuaW1wb3J0IE5hdmlnYXRpb25Db250ZXh0IGZyb20gJy4vTmF2aWdhdGlvbkNvbnRleHQnO1xuaW1wb3J0IFVuaGFuZGxlZEFjdGlvbkNvbnRleHQgZnJvbSAnLi9VbmhhbmRsZWRBY3Rpb25Db250ZXh0JztcbmltcG9ydCB7IFByaXZhdGVWYWx1ZVN0b3JlIH0gZnJvbSAnLi90eXBlcyc7IC8vIFRoaXMgaXMgdG8gbWFrZSBUeXBlU2NyaXB0IGNvbXBpbGVyIGhhcHB5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYmFiZWwvbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cblByaXZhdGVWYWx1ZVN0b3JlO1xuXG4vKipcbiAqIE5hdmlnYXRpb24gb2JqZWN0IHdpdGggaGVscGVyIG1ldGhvZHMgdG8gYmUgdXNlZCBieSBhIG5hdmlnYXRvci5cbiAqIFRoaXMgb2JqZWN0IGluY2x1ZGVzIG1ldGhvZHMgZm9yIGNvbW1vbiBhY3Rpb25zIGFzIHdlbGwgYXMgbWV0aG9kcyB0aGUgcGFyZW50IHNjcmVlbidzIG5hdmlnYXRpb24gb2JqZWN0LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VOYXZpZ2F0aW9uSGVscGVycyh7XG4gIG9uQWN0aW9uLFxuICBnZXRTdGF0ZSxcbiAgZW1pdHRlcixcbiAgcm91dGVyXG59KSB7XG4gIGNvbnN0IG9uVW5oYW5kbGVkQWN0aW9uID0gUmVhY3QudXNlQ29udGV4dChVbmhhbmRsZWRBY3Rpb25Db250ZXh0KTtcbiAgY29uc3QgcGFyZW50TmF2aWdhdGlvbkhlbHBlcnMgPSBSZWFjdC51c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KTtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gb3AgPT4ge1xuICAgICAgY29uc3QgYWN0aW9uID0gdHlwZW9mIG9wID09PSAnZnVuY3Rpb24nID8gb3AoZ2V0U3RhdGUoKSkgOiBvcDtcbiAgICAgIGNvbnN0IGhhbmRsZWQgPSBvbkFjdGlvbihhY3Rpb24pO1xuXG4gICAgICBpZiAoIWhhbmRsZWQpIHtcbiAgICAgICAgb25VbmhhbmRsZWRBY3Rpb24gPT09IG51bGwgfHwgb25VbmhhbmRsZWRBY3Rpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uVW5oYW5kbGVkQWN0aW9uKGFjdGlvbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGlvbnMgPSB7IC4uLnJvdXRlci5hY3Rpb25DcmVhdG9ycyxcbiAgICAgIC4uLkNvbW1vbkFjdGlvbnNcbiAgICB9O1xuICAgIGNvbnN0IGhlbHBlcnMgPSBPYmplY3Qua2V5cyhhY3Rpb25zKS5yZWR1Y2UoKGFjYywgbmFtZSkgPT4ge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogbmFtZSBpcyBhIHZhbGlkIGtleSwgYnV0IFR5cGVTY3JpcHQgaXMgZHVtYlxuICAgICAgYWNjW25hbWVdID0gKC4uLmFyZ3MpID0+IGRpc3BhdGNoKGFjdGlvbnNbbmFtZV0oLi4uYXJncykpO1xuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgICByZXR1cm4geyAuLi5wYXJlbnROYXZpZ2F0aW9uSGVscGVycyxcbiAgICAgIC4uLmhlbHBlcnMsXG4gICAgICBkaXNwYXRjaCxcbiAgICAgIGVtaXQ6IGVtaXR0ZXIuZW1pdCxcbiAgICAgIGlzRm9jdXNlZDogcGFyZW50TmF2aWdhdGlvbkhlbHBlcnMgPyBwYXJlbnROYXZpZ2F0aW9uSGVscGVycy5pc0ZvY3VzZWQgOiAoKSA9PiB0cnVlLFxuICAgICAgY2FuR29CYWNrOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlci5nZXRTdGF0ZUZvckFjdGlvbihzdGF0ZSwgQ29tbW9uQWN0aW9ucy5nb0JhY2soKSwge1xuICAgICAgICAgIHJvdXRlTmFtZXM6IHN0YXRlLnJvdXRlTmFtZXMsXG4gICAgICAgICAgcm91dGVQYXJhbUxpc3Q6IHt9LFxuICAgICAgICAgIHJvdXRlR2V0SWRMaXN0OiB7fVxuICAgICAgICB9KSAhPT0gbnVsbCB8fCAocGFyZW50TmF2aWdhdGlvbkhlbHBlcnMgPT09IG51bGwgfHwgcGFyZW50TmF2aWdhdGlvbkhlbHBlcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudE5hdmlnYXRpb25IZWxwZXJzLmNhbkdvQmFjaygpKSB8fCBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBnZXRQYXJlbnQ6ICgpID0+IHBhcmVudE5hdmlnYXRpb25IZWxwZXJzLFxuICAgICAgZ2V0U3RhdGUsXG4gICAgICBkYW5nZXJvdXNseUdldFBhcmVudDogKCkgPT4gcGFyZW50TmF2aWdhdGlvbkhlbHBlcnMsXG4gICAgICBkYW5nZXJvdXNseUdldFN0YXRlOiBnZXRTdGF0ZVxuICAgIH07XG4gIH0sIFtlbWl0dGVyLmVtaXQsIGdldFN0YXRlLCBvbkFjdGlvbiwgb25VbmhhbmRsZWRBY3Rpb24sIHBhcmVudE5hdmlnYXRpb25IZWxwZXJzLCByb3V0ZXJdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZU5hdmlnYXRpb25IZWxwZXJzLmpzLm1hcCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VOYXZpZ2F0aW9uIGZyb20gJy4vdXNlTmF2aWdhdGlvbic7XG5cbi8qKlxuICogSG9vayB0byBnZXQgYSB2YWx1ZSBmcm9tIHRoZSBjdXJyZW50IG5hdmlnYXRpb24gc3RhdGUgdXNpbmcgYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgU2VsZWN0b3IgZnVuY3Rpb24gdG8gZ2V0IGEgdmFsdWUgZnJvbSB0aGUgc3RhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU5hdmlnYXRpb25TdGF0ZShzZWxlY3Rvcikge1xuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGlvbigpOyAvLyBXZSBkb24ndCBjYXJlIGFib3V0IHRoZSBzdGF0ZSB2YWx1ZSwgd2UgcnVuIHRoZSBzZWxlY3RvciBhZ2FpbiBhdCB0aGUgZW5kXG4gIC8vIFRoZSBzdGF0ZSBpcyBvbmx5IHRvIG1ha2Ugc3VyZSB0aGF0IHRoZXJlJ3MgYSByZS1yZW5kZXIgd2hlbiB3ZSBoYXZlIGEgbmV3IHZhbHVlXG5cbiAgY29uc3QgWywgc2V0UmVzdWx0XSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IHNlbGVjdG9yKG5hdmlnYXRpb24uZ2V0U3RhdGUoKSkpOyAvLyBXZSBzdG9yZSB0aGUgc2VsZWN0b3IgaW4gYSByZWYgdG8gYXZvaWQgcmUtc3Vic2NyaWJpbmcgbGlzdGVuZXJzIGV2ZXJ5IHJlbmRlclxuXG4gIGNvbnN0IHNlbGVjdG9yUmVmID0gUmVhY3QudXNlUmVmKHNlbGVjdG9yKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZWxlY3RvclJlZi5jdXJyZW50ID0gc2VsZWN0b3I7XG4gIH0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gbmF2aWdhdGlvbi5hZGRMaXN0ZW5lcignc3RhdGUnLCBlID0+IHtcbiAgICAgIHNldFJlc3VsdChzZWxlY3RvclJlZi5jdXJyZW50KGUuZGF0YS5zdGF0ZSkpO1xuICAgIH0pO1xuICAgIHJldHVybiB1bnN1YnNjcmliZTtcbiAgfSwgW25hdmlnYXRpb25dKTtcbiAgcmV0dXJuIHNlbGVjdG9yKG5hdmlnYXRpb24uZ2V0U3RhdGUoKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VOYXZpZ2F0aW9uU3RhdGUuanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb25CdWlsZGVyQ29udGV4dCBmcm9tICcuL05hdmlnYXRpb25CdWlsZGVyQ29udGV4dCc7XG5pbXBvcnQgdXNlT25QcmV2ZW50UmVtb3ZlLCB7IHNob3VsZFByZXZlbnRSZW1vdmUgfSBmcm9tICcuL3VzZU9uUHJldmVudFJlbW92ZSc7XG5cbi8qKlxuICogSG9vayB0byBoYW5kbGUgYWN0aW9ucyBmb3IgYSBuYXZpZ2F0b3IsIGluY2x1ZGluZyBzdGF0ZSB1cGRhdGVzIGFuZCBidWJibGluZy5cbiAqXG4gKiBCdWJibGluZyBhbiBhY3Rpb24gaXMgYWNoaWV2ZWQgaW4gMiB3YXlzOlxuICogMS4gVG8gYnViYmxlIGFjdGlvbiB0byBwYXJlbnQsIHdlIGV4cG9zZSB0aGUgYWN0aW9uIGhhbmRsZXIgaW4gY29udGV4dCBhbmQgdGhlbiBhY2Nlc3MgdGhlIHBhcmVudCBjb250ZXh0XG4gKiAyLiBUbyBidWJibGUgYWN0aW9uIHRvIGNoaWxkLCBjaGlsZCBhZGRzIGV2ZW50IGxpc3RlbmVycyBzdWJzY3JpYmluZyB0byBhY3Rpb25zIGZyb20gcGFyZW50XG4gKlxuICogV2hlbiB0aGUgYWN0aW9uIGhhbmRsZXIgaGFuZGxlcyBhcyBhY3Rpb24sIGl0IHJldHVybnMgYHRydWVgLCBvdGhlcndpc2UgYGZhbHNlYC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlT25BY3Rpb24oe1xuICByb3V0ZXIsXG4gIGdldFN0YXRlLFxuICBzZXRTdGF0ZSxcbiAga2V5LFxuICBhY3Rpb25MaXN0ZW5lcnMsXG4gIGJlZm9yZVJlbW92ZUxpc3RlbmVycyxcbiAgcm91dGVyQ29uZmlnT3B0aW9ucyxcbiAgZW1pdHRlclxufSkge1xuICBjb25zdCB7XG4gICAgb25BY3Rpb246IG9uQWN0aW9uUGFyZW50LFxuICAgIG9uUm91dGVGb2N1czogb25Sb3V0ZUZvY3VzUGFyZW50LFxuICAgIGFkZExpc3RlbmVyOiBhZGRMaXN0ZW5lclBhcmVudCxcbiAgICBvbkRpc3BhdGNoQWN0aW9uXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KE5hdmlnYXRpb25CdWlsZGVyQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlckNvbmZpZ09wdGlvbnNSZWYgPSBSZWFjdC51c2VSZWYocm91dGVyQ29uZmlnT3B0aW9ucyk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcm91dGVyQ29uZmlnT3B0aW9uc1JlZi5jdXJyZW50ID0gcm91dGVyQ29uZmlnT3B0aW9ucztcbiAgfSk7XG4gIGNvbnN0IG9uQWN0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soKGFjdGlvbiwgdmlzaXRlZE5hdmlnYXRvcnMgPSBuZXcgU2V0KCkpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7IC8vIFNpbmNlIGFjdGlvbnMgY2FuIGJ1YmJsZSBib3RoIHVwIGFuZCBkb3duLCB0aGV5IGNvdWxkIGNvbWUgdG8gdGhlIHNhbWUgbmF2aWdhdG9yIGFnYWluXG4gICAgLy8gV2Uga2VlcCB0cmFjayBvZiBuYXZpZ2F0b3JzIHdoaWNoIGhhdmUgYWxyZWFkeSB0cmllZCB0byBoYW5kbGUgdGhlIGFjdGlvbiBhbmQgcmV0dXJuIGlmIGl0J3MgYWxyZWFkeSB2aXNpdGVkXG5cbiAgICBpZiAodmlzaXRlZE5hdmlnYXRvcnMuaGFzKHN0YXRlLmtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2aXNpdGVkTmF2aWdhdG9ycy5hZGQoc3RhdGUua2V5KTtcblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnRhcmdldCAhPT0gJ3N0cmluZycgfHwgYWN0aW9uLnRhcmdldCA9PT0gc3RhdGUua2V5KSB7XG4gICAgICBsZXQgcmVzdWx0ID0gcm91dGVyLmdldFN0YXRlRm9yQWN0aW9uKHN0YXRlLCBhY3Rpb24sIHJvdXRlckNvbmZpZ09wdGlvbnNSZWYuY3VycmVudCk7IC8vIElmIGEgdGFyZ2V0IGlzIHNwZWNpZmllZCBhbmQgc2V0IHRvIGN1cnJlbnQgbmF2aWdhdG9yLCB0aGUgYWN0aW9uIHNob3VsZG4ndCBidWJibGVcbiAgICAgIC8vIFNvIGluc3RlYWQgb2YgYG51bGxgLCB3ZSB1c2UgdGhlIHN0YXRlIG9iamVjdCBmb3Igc3VjaCBjYXNlcyB0byBzaWduYWwgdGhhdCBhY3Rpb24gd2FzIGhhbmRsZWRcblxuICAgICAgcmVzdWx0ID0gcmVzdWx0ID09PSBudWxsICYmIGFjdGlvbi50YXJnZXQgPT09IHN0YXRlLmtleSA/IHN0YXRlIDogcmVzdWx0O1xuXG4gICAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgIG9uRGlzcGF0Y2hBY3Rpb24oYWN0aW9uLCBzdGF0ZSA9PT0gcmVzdWx0KTtcblxuICAgICAgICBpZiAoc3RhdGUgIT09IHJlc3VsdCkge1xuICAgICAgICAgIGNvbnN0IGlzUHJldmVudGVkID0gc2hvdWxkUHJldmVudFJlbW92ZShlbWl0dGVyLCBiZWZvcmVSZW1vdmVMaXN0ZW5lcnMsIHN0YXRlLnJvdXRlcywgcmVzdWx0LnJvdXRlcywgYWN0aW9uKTtcblxuICAgICAgICAgIGlmIChpc1ByZXZlbnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2V0U3RhdGUocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvblJvdXRlRm9jdXNQYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFNvbWUgYWN0aW9ucyBzdWNoIGFzIGBOQVZJR0FURWAgYWxzbyB3YW50IHRvIGJyaW5nIHRoZSBuYXZpZ2F0ZWQgcm91dGUgdG8gZm9jdXMgaW4gdGhlIHdob2xlIHRyZWVcbiAgICAgICAgICAvLyBUaGlzIG1lYW5zIHdlIG5lZWQgdG8gZm9jdXMgYWxsIG9mIHRoZSBwYXJlbnQgbmF2aWdhdG9ycyBvZiB0aGlzIG5hdmlnYXRvciBhcyB3ZWxsXG4gICAgICAgICAgY29uc3Qgc2hvdWxkRm9jdXMgPSByb3V0ZXIuc2hvdWxkQWN0aW9uQ2hhbmdlRm9jdXMoYWN0aW9uKTtcblxuICAgICAgICAgIGlmIChzaG91bGRGb2N1cyAmJiBrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb25Sb3V0ZUZvY3VzUGFyZW50KGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9uQWN0aW9uUGFyZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEJ1YmJsZSBhY3Rpb24gdG8gdGhlIHBhcmVudCBpZiB0aGUgY3VycmVudCBuYXZpZ2F0b3IgZGlkbid0IGhhbmRsZSBpdFxuICAgICAgaWYgKG9uQWN0aW9uUGFyZW50KGFjdGlvbiwgdmlzaXRlZE5hdmlnYXRvcnMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gLy8gSWYgdGhlIGFjdGlvbiB3YXNuJ3QgaGFuZGxlZCBieSBjdXJyZW50IG5hdmlnYXRvciBvciBhIHBhcmVudCBuYXZpZ2F0b3IsIGxldCBjaGlsZHJlbiBoYW5kbGUgaXRcblxuXG4gICAgZm9yIChsZXQgaSA9IGFjdGlvbkxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSBhY3Rpb25MaXN0ZW5lcnNbaV07XG5cbiAgICAgIGlmIChsaXN0ZW5lcihhY3Rpb24sIHZpc2l0ZWROYXZpZ2F0b3JzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sIFthY3Rpb25MaXN0ZW5lcnMsIGJlZm9yZVJlbW92ZUxpc3RlbmVycywgZW1pdHRlciwgZ2V0U3RhdGUsIGtleSwgb25BY3Rpb25QYXJlbnQsIG9uRGlzcGF0Y2hBY3Rpb24sIG9uUm91dGVGb2N1c1BhcmVudCwgcm91dGVyLCBzZXRTdGF0ZV0pO1xuICB1c2VPblByZXZlbnRSZW1vdmUoe1xuICAgIGdldFN0YXRlLFxuICAgIGVtaXR0ZXIsXG4gICAgYmVmb3JlUmVtb3ZlTGlzdGVuZXJzXG4gIH0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gYWRkTGlzdGVuZXJQYXJlbnQgPT09IG51bGwgfHwgYWRkTGlzdGVuZXJQYXJlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFkZExpc3RlbmVyUGFyZW50KCdhY3Rpb24nLCBvbkFjdGlvbiksIFthZGRMaXN0ZW5lclBhcmVudCwgb25BY3Rpb25dKTtcbiAgcmV0dXJuIG9uQWN0aW9uO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlT25BY3Rpb24uanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb25CdWlsZGVyQ29udGV4dCBmcm9tICcuL05hdmlnYXRpb25CdWlsZGVyQ29udGV4dCc7XG5pbXBvcnQgTmF2aWdhdGlvblJvdXRlQ29udGV4dCBmcm9tICcuL05hdmlnYXRpb25Sb3V0ZUNvbnRleHQnO1xuaW1wb3J0IGlzQXJyYXlFcXVhbCBmcm9tICcuL2lzQXJyYXlFcXVhbCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VPbkdldFN0YXRlKHtcbiAgZ2V0U3RhdGUsXG4gIGdldFN0YXRlTGlzdGVuZXJzXG59KSB7XG4gIGNvbnN0IHtcbiAgICBhZGRLZXllZExpc3RlbmVyXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KE5hdmlnYXRpb25CdWlsZGVyQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlID0gUmVhY3QudXNlQ29udGV4dChOYXZpZ2F0aW9uUm91dGVDb250ZXh0KTtcbiAgY29uc3Qga2V5ID0gcm91dGUgPyByb3V0ZS5rZXkgOiAncm9vdCc7XG4gIGNvbnN0IGdldFJlaHlkcmF0ZWRTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7IC8vIEF2b2lkIHJldHVybmluZyBuZXcgcm91dGUgb2JqZWN0cyBpZiB3ZSBkb24ndCBuZWVkIHRvXG5cbiAgICBjb25zdCByb3V0ZXMgPSBzdGF0ZS5yb3V0ZXMubWFwKHJvdXRlID0+IHtcbiAgICAgIHZhciBfZ2V0U3RhdGVMaXN0ZW5lcnMkcm87XG5cbiAgICAgIGNvbnN0IGNoaWxkU3RhdGUgPSAoX2dldFN0YXRlTGlzdGVuZXJzJHJvID0gZ2V0U3RhdGVMaXN0ZW5lcnNbcm91dGUua2V5XSkgPT09IG51bGwgfHwgX2dldFN0YXRlTGlzdGVuZXJzJHJvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZ2V0U3RhdGVMaXN0ZW5lcnMkcm8uY2FsbChnZXRTdGF0ZUxpc3RlbmVycyk7XG5cbiAgICAgIGlmIChyb3V0ZS5zdGF0ZSA9PT0gY2hpbGRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnJvdXRlLFxuICAgICAgICBzdGF0ZTogY2hpbGRTdGF0ZVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGlmIChpc0FycmF5RXF1YWwoc3RhdGUucm91dGVzLCByb3V0ZXMpKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgICByb3V0ZXNcbiAgICB9O1xuICB9LCBbZ2V0U3RhdGUsIGdldFN0YXRlTGlzdGVuZXJzXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuIGFkZEtleWVkTGlzdGVuZXIgPT09IG51bGwgfHwgYWRkS2V5ZWRMaXN0ZW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRkS2V5ZWRMaXN0ZW5lcignZ2V0U3RhdGUnLCBrZXksIGdldFJlaHlkcmF0ZWRTdGF0ZSk7XG4gIH0sIFthZGRLZXllZExpc3RlbmVyLCBnZXRSZWh5ZHJhdGVkU3RhdGUsIGtleV0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlT25HZXRTdGF0ZS5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2aWdhdGlvbkJ1aWxkZXJDb250ZXh0IGZyb20gJy4vTmF2aWdhdGlvbkJ1aWxkZXJDb250ZXh0JztcbmltcG9ydCBOYXZpZ2F0aW9uUm91dGVDb250ZXh0IGZyb20gJy4vTmF2aWdhdGlvblJvdXRlQ29udGV4dCc7XG5jb25zdCBWSVNJVEVEX1JPVVRFX0tFWVMgPSBTeW1ib2woJ1ZJU0lURURfUk9VVEVfS0VZUycpO1xuZXhwb3J0IGNvbnN0IHNob3VsZFByZXZlbnRSZW1vdmUgPSAoZW1pdHRlciwgYmVmb3JlUmVtb3ZlTGlzdGVuZXJzLCBjdXJyZW50Um91dGVzLCBuZXh0Um91dGVzLCBhY3Rpb24pID0+IHtcbiAgdmFyIF9hY3Rpb24kVklTSVRFRF9ST1VURTtcblxuICBjb25zdCBuZXh0Um91dGVLZXlzID0gbmV4dFJvdXRlcy5tYXAocm91dGUgPT4gcm91dGUua2V5KTsgLy8gQ2FsbCB0aGVzZSBpbiByZXZlcnNlIG9yZGVyIHNvIGxhc3Qgc2NyZWVucyBoYW5kbGUgdGhlIGV2ZW50IGZpcnN0XG5cbiAgY29uc3QgcmVtb3ZlZFJvdXRlcyA9IGN1cnJlbnRSb3V0ZXMuZmlsdGVyKHJvdXRlID0+ICFuZXh0Um91dGVLZXlzLmluY2x1ZGVzKHJvdXRlLmtleSkpLnJldmVyc2UoKTtcbiAgY29uc3QgdmlzaXRlZFJvdXRlS2V5cyA9IC8vIEB0cy1leHBlY3QtZXJyb3I6IGFkZCB0aGlzIHByb3BlcnR5IHRvIG1hcmsgdGhhdCB3ZSd2ZSBhbHJlYWR5IGVtaXR0ZWQgdGhpcyBhY3Rpb25cbiAgKF9hY3Rpb24kVklTSVRFRF9ST1VURSA9IGFjdGlvbltWSVNJVEVEX1JPVVRFX0tFWVNdKSAhPT0gbnVsbCAmJiBfYWN0aW9uJFZJU0lURURfUk9VVEUgIT09IHZvaWQgMCA/IF9hY3Rpb24kVklTSVRFRF9ST1VURSA6IG5ldyBTZXQoKTtcbiAgY29uc3QgYmVmb3JlUmVtb3ZlQWN0aW9uID0geyAuLi5hY3Rpb24sXG4gICAgW1ZJU0lURURfUk9VVEVfS0VZU106IHZpc2l0ZWRSb3V0ZUtleXNcbiAgfTtcblxuICBmb3IgKGNvbnN0IHJvdXRlIG9mIHJlbW92ZWRSb3V0ZXMpIHtcbiAgICB2YXIgX2JlZm9yZVJlbW92ZUxpc3RlbmVyO1xuXG4gICAgaWYgKHZpc2l0ZWRSb3V0ZUtleXMuaGFzKHJvdXRlLmtleSkpIHtcbiAgICAgIC8vIFNraXAgaWYgd2UndmUgYWxyZWFkeSBlbWl0dGVkIHRoaXMgYWN0aW9uIGZvciB0aGlzIHNjcmVlblxuICAgICAgY29udGludWU7XG4gICAgfSAvLyBGaXJzdCwgd2UgbmVlZCB0byBjaGVjayBpZiBhbnkgY2hpbGQgc2NyZWVucyB3YW50IHRvIHByZXZlbnQgaXRcblxuXG4gICAgY29uc3QgaXNQcmV2ZW50ZWQgPSAoX2JlZm9yZVJlbW92ZUxpc3RlbmVyID0gYmVmb3JlUmVtb3ZlTGlzdGVuZXJzW3JvdXRlLmtleV0pID09PSBudWxsIHx8IF9iZWZvcmVSZW1vdmVMaXN0ZW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2JlZm9yZVJlbW92ZUxpc3RlbmVyLmNhbGwoYmVmb3JlUmVtb3ZlTGlzdGVuZXJzLCBiZWZvcmVSZW1vdmVBY3Rpb24pO1xuXG4gICAgaWYgKGlzUHJldmVudGVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2aXNpdGVkUm91dGVLZXlzLmFkZChyb3V0ZS5rZXkpO1xuICAgIGNvbnN0IGV2ZW50ID0gZW1pdHRlci5lbWl0KHtcbiAgICAgIHR5cGU6ICdiZWZvcmVSZW1vdmUnLFxuICAgICAgdGFyZ2V0OiByb3V0ZS5rZXksXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGFjdGlvbjogYmVmb3JlUmVtb3ZlQWN0aW9uXG4gICAgICB9LFxuICAgICAgY2FuUHJldmVudERlZmF1bHQ6IHRydWVcbiAgICB9KTtcblxuICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlT25QcmV2ZW50UmVtb3ZlKHtcbiAgZ2V0U3RhdGUsXG4gIGVtaXR0ZXIsXG4gIGJlZm9yZVJlbW92ZUxpc3RlbmVyc1xufSkge1xuICBjb25zdCB7XG4gICAgYWRkS2V5ZWRMaXN0ZW5lclxuICB9ID0gUmVhY3QudXNlQ29udGV4dChOYXZpZ2F0aW9uQnVpbGRlckNvbnRleHQpO1xuICBjb25zdCByb3V0ZSA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvblJvdXRlQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlS2V5ID0gcm91dGUgPT09IG51bGwgfHwgcm91dGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJvdXRlLmtleTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocm91dGVLZXkpIHtcbiAgICAgIHJldHVybiBhZGRLZXllZExpc3RlbmVyID09PSBudWxsIHx8IGFkZEtleWVkTGlzdGVuZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFkZEtleWVkTGlzdGVuZXIoJ2JlZm9yZVJlbW92ZScsIHJvdXRlS2V5LCBhY3Rpb24gPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICAgIHJldHVybiBzaG91bGRQcmV2ZW50UmVtb3ZlKGVtaXR0ZXIsIGJlZm9yZVJlbW92ZUxpc3RlbmVycywgc3RhdGUucm91dGVzLCBbXSwgYWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2FkZEtleWVkTGlzdGVuZXIsIGJlZm9yZVJlbW92ZUxpc3RlbmVycywgZW1pdHRlciwgZ2V0U3RhdGUsIHJvdXRlS2V5XSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VPblByZXZlbnRSZW1vdmUuanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb25CdWlsZGVyQ29udGV4dCBmcm9tICcuL05hdmlnYXRpb25CdWlsZGVyQ29udGV4dCc7XG5cbi8qKlxuICogSG9vayB0byBoYW5kbGUgZm9jdXMgYWN0aW9ucyBmb3IgYSByb3V0ZS5cbiAqIEZvY3VzIGFjdGlvbiBuZWVkcyB0byBiZSB0cmVhdGVkIHNwZWNpYWxseSwgY296IHdoZW4gYSBuZXN0ZWQgcm91dGUgaXMgZm9jdXNlZCxcbiAqIHRoZSBwYXJlbnQgbmF2aWdhdG9ycyBhbHNvIG5lZWRzIHRvIGJlIGZvY3VzZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU9uUm91dGVGb2N1cyh7XG4gIHJvdXRlcixcbiAgZ2V0U3RhdGUsXG4gIGtleTogc291cmNlUm91dGVLZXksXG4gIHNldFN0YXRlXG59KSB7XG4gIGNvbnN0IHtcbiAgICBvblJvdXRlRm9jdXM6IG9uUm91dGVGb2N1c1BhcmVudFxuICB9ID0gUmVhY3QudXNlQ29udGV4dChOYXZpZ2F0aW9uQnVpbGRlckNvbnRleHQpO1xuICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soa2V5ID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgY29uc3QgcmVzdWx0ID0gcm91dGVyLmdldFN0YXRlRm9yUm91dGVGb2N1cyhzdGF0ZSwga2V5KTtcblxuICAgIGlmIChyZXN1bHQgIT09IHN0YXRlKSB7XG4gICAgICBzZXRTdGF0ZShyZXN1bHQpO1xuICAgIH1cblxuICAgIGlmIChvblJvdXRlRm9jdXNQYXJlbnQgIT09IHVuZGVmaW5lZCAmJiBzb3VyY2VSb3V0ZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvblJvdXRlRm9jdXNQYXJlbnQoc291cmNlUm91dGVLZXkpO1xuICAgIH1cbiAgfSwgW2dldFN0YXRlLCBvblJvdXRlRm9jdXNQYXJlbnQsIHJvdXRlciwgc2V0U3RhdGUsIHNvdXJjZVJvdXRlS2V5XSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VPblJvdXRlRm9jdXMuanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb25TdGF0ZUNvbnRleHQgZnJvbSAnLi9OYXZpZ2F0aW9uU3RhdGVDb250ZXh0JztcbmltcG9ydCBOYXZpZ2F0aW9uQnVpbGRlckNvbnRleHQgZnJvbSAnLi9OYXZpZ2F0aW9uQnVpbGRlckNvbnRleHQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlT3B0aW9uc0dldHRlcnMoe1xuICBrZXksXG4gIG9wdGlvbnMsXG4gIG5hdmlnYXRpb25cbn0pIHtcbiAgY29uc3Qgb3B0aW9uc1JlZiA9IFJlYWN0LnVzZVJlZihvcHRpb25zKTtcbiAgY29uc3Qgb3B0aW9uc0dldHRlcnNGcm9tQ2hpbGRSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuICBjb25zdCB7XG4gICAgb25PcHRpb25zQ2hhbmdlXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KE5hdmlnYXRpb25CdWlsZGVyQ29udGV4dCk7XG4gIGNvbnN0IHtcbiAgICBhZGRPcHRpb25zR2V0dGVyOiBwYXJlbnRBZGRPcHRpb25zR2V0dGVyXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KE5hdmlnYXRpb25TdGF0ZUNvbnRleHQpO1xuICBjb25zdCBvcHRpb25zQ2hhbmdlTGlzdGVuZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgdmFyIF9uYXZpZ2F0aW9uJGlzRm9jdXNlZDtcblxuICAgIGNvbnN0IGlzRm9jdXNlZCA9IChfbmF2aWdhdGlvbiRpc0ZvY3VzZWQgPSBuYXZpZ2F0aW9uID09PSBudWxsIHx8IG5hdmlnYXRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hdmlnYXRpb24uaXNGb2N1c2VkKCkpICE9PSBudWxsICYmIF9uYXZpZ2F0aW9uJGlzRm9jdXNlZCAhPT0gdm9pZCAwID8gX25hdmlnYXRpb24kaXNGb2N1c2VkIDogdHJ1ZTtcbiAgICBjb25zdCBoYXNDaGlsZHJlbiA9IE9iamVjdC5rZXlzKG9wdGlvbnNHZXR0ZXJzRnJvbUNoaWxkUmVmLmN1cnJlbnQpLmxlbmd0aDtcblxuICAgIGlmIChpc0ZvY3VzZWQgJiYgIWhhc0NoaWxkcmVuKSB7XG4gICAgICB2YXIgX29wdGlvbnNSZWYkY3VycmVudDtcblxuICAgICAgb25PcHRpb25zQ2hhbmdlKChfb3B0aW9uc1JlZiRjdXJyZW50ID0gb3B0aW9uc1JlZi5jdXJyZW50KSAhPT0gbnVsbCAmJiBfb3B0aW9uc1JlZiRjdXJyZW50ICE9PSB2b2lkIDAgPyBfb3B0aW9uc1JlZiRjdXJyZW50IDoge30pO1xuICAgIH1cbiAgfSwgW25hdmlnYXRpb24sIG9uT3B0aW9uc0NoYW5nZV0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIG9wdGlvbnNSZWYuY3VycmVudCA9IG9wdGlvbnM7XG4gICAgb3B0aW9uc0NoYW5nZUxpc3RlbmVyKCk7XG4gICAgcmV0dXJuIG5hdmlnYXRpb24gPT09IG51bGwgfHwgbmF2aWdhdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmF2aWdhdGlvbi5hZGRMaXN0ZW5lcignZm9jdXMnLCBvcHRpb25zQ2hhbmdlTGlzdGVuZXIpO1xuICB9LCBbbmF2aWdhdGlvbiwgb3B0aW9ucywgb3B0aW9uc0NoYW5nZUxpc3RlbmVyXSk7XG4gIGNvbnN0IGdldE9wdGlvbnNGcm9tTGlzdGVuZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZm9yIChsZXQga2V5IGluIG9wdGlvbnNHZXR0ZXJzRnJvbUNoaWxkUmVmLmN1cnJlbnQpIHtcbiAgICAgIGlmIChvcHRpb25zR2V0dGVyc0Zyb21DaGlsZFJlZi5jdXJyZW50Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFyIF9vcHRpb25zR2V0dGVyc0Zyb21DaCwgX29wdGlvbnNHZXR0ZXJzRnJvbUNoMjtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSAoX29wdGlvbnNHZXR0ZXJzRnJvbUNoID0gKF9vcHRpb25zR2V0dGVyc0Zyb21DaDIgPSBvcHRpb25zR2V0dGVyc0Zyb21DaGlsZFJlZi5jdXJyZW50KVtrZXldKSA9PT0gbnVsbCB8fCBfb3B0aW9uc0dldHRlcnNGcm9tQ2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zR2V0dGVyc0Zyb21DaC5jYWxsKF9vcHRpb25zR2V0dGVyc0Zyb21DaDIpOyAvLyBudWxsIG1lYW5zIHVuZm9jdXNlZCByb3V0ZVxuXG4gICAgICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sIFtdKTtcbiAgY29uc3QgZ2V0Q3VycmVudE9wdGlvbnMgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgdmFyIF9uYXZpZ2F0aW9uJGlzRm9jdXNlZDI7XG5cbiAgICBjb25zdCBpc0ZvY3VzZWQgPSAoX25hdmlnYXRpb24kaXNGb2N1c2VkMiA9IG5hdmlnYXRpb24gPT09IG51bGwgfHwgbmF2aWdhdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmF2aWdhdGlvbi5pc0ZvY3VzZWQoKSkgIT09IG51bGwgJiYgX25hdmlnYXRpb24kaXNGb2N1c2VkMiAhPT0gdm9pZCAwID8gX25hdmlnYXRpb24kaXNGb2N1c2VkMiA6IHRydWU7XG5cbiAgICBpZiAoIWlzRm9jdXNlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uc0Zyb21MaXN0ZW5lciA9IGdldE9wdGlvbnNGcm9tTGlzdGVuZXIoKTtcblxuICAgIGlmIChvcHRpb25zRnJvbUxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gb3B0aW9uc0Zyb21MaXN0ZW5lcjtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9uc1JlZi5jdXJyZW50O1xuICB9LCBbbmF2aWdhdGlvbiwgZ2V0T3B0aW9uc0Zyb21MaXN0ZW5lcl0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiBwYXJlbnRBZGRPcHRpb25zR2V0dGVyID09PSBudWxsIHx8IHBhcmVudEFkZE9wdGlvbnNHZXR0ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudEFkZE9wdGlvbnNHZXR0ZXIoa2V5LCBnZXRDdXJyZW50T3B0aW9ucyk7XG4gIH0sIFtnZXRDdXJyZW50T3B0aW9ucywgcGFyZW50QWRkT3B0aW9uc0dldHRlciwga2V5XSk7XG4gIGNvbnN0IGFkZE9wdGlvbnNHZXR0ZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoa2V5LCBnZXR0ZXIpID0+IHtcbiAgICBvcHRpb25zR2V0dGVyc0Zyb21DaGlsZFJlZi5jdXJyZW50W2tleV0gPSBnZXR0ZXI7XG4gICAgb3B0aW9uc0NoYW5nZUxpc3RlbmVyKCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZHluYW1pYy1kZWxldGVcbiAgICAgIGRlbGV0ZSBvcHRpb25zR2V0dGVyc0Zyb21DaGlsZFJlZi5jdXJyZW50W2tleV07XG4gICAgICBvcHRpb25zQ2hhbmdlTGlzdGVuZXIoKTtcbiAgICB9O1xuICB9LCBbb3B0aW9uc0NoYW5nZUxpc3RlbmVyXSk7XG4gIHJldHVybiB7XG4gICAgYWRkT3B0aW9uc0dldHRlcixcbiAgICBnZXRDdXJyZW50T3B0aW9uc1xuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlT3B0aW9uc0dldHRlcnMuanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkL25vbi1zZWN1cmUnO1xuaW1wb3J0IHsgU2luZ2xlTmF2aWdhdG9yQ29udGV4dCB9IGZyb20gJy4vRW5zdXJlU2luZ2xlTmF2aWdhdG9yJztcbi8qKlxuICogUmVnaXN0ZXIgYSBuYXZpZ2F0b3IgaW4gdGhlIHBhcmVudCBjb250ZXh0IChlaXRoZXIgYSBuYXZpZ2F0aW9uIGNvbnRhaW5lciBvciBhIHNjcmVlbikuXG4gKiBUaGlzIGlzIHVzZWQgdG8gcHJldmVudCBtdWx0aXBsZSBuYXZpZ2F0b3JzIHVuZGVyIGEgc2luZ2xlIGNvbnRhaW5lciBvciBzY3JlZW4uXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUmVnaXN0ZXJOYXZpZ2F0b3IoKSB7XG4gIGNvbnN0IFtrZXldID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gbmFub2lkKCkpO1xuICBjb25zdCBjb250YWluZXIgPSBSZWFjdC51c2VDb250ZXh0KFNpbmdsZU5hdmlnYXRvckNvbnRleHQpO1xuXG4gIGlmIChjb250YWluZXIgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IHJlZ2lzdGVyIHRoZSBuYXZpZ2F0b3IuIEhhdmUgeW91IHdyYXBwZWQgeW91ciBhcHAgd2l0aCAnTmF2aWdhdGlvbkNvbnRhaW5lcic/XCIpO1xuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICByZWdpc3RlcixcbiAgICAgIHVucmVnaXN0ZXJcbiAgICB9ID0gY29udGFpbmVyO1xuICAgIHJlZ2lzdGVyKGtleSk7XG4gICAgcmV0dXJuICgpID0+IHVucmVnaXN0ZXIoa2V5KTtcbiAgfSwgW2NvbnRhaW5lciwga2V5XSk7XG4gIHJldHVybiBrZXk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VSZWdpc3Rlck5hdmlnYXRvci5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2aWdhdGlvblJvdXRlQ29udGV4dCBmcm9tICcuL05hdmlnYXRpb25Sb3V0ZUNvbnRleHQnO1xuXG4vKipcbiAqIEhvb2sgdG8gYWNjZXNzIHRoZSByb3V0ZSBwcm9wIG9mIHRoZSBwYXJlbnQgc2NyZWVuIGFueXdoZXJlLlxuICpcbiAqIEByZXR1cm5zIFJvdXRlIHByb3Agb2YgdGhlIHBhcmVudCBzY3JlZW4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVJvdXRlKCkge1xuICBjb25zdCByb3V0ZSA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvblJvdXRlQ29udGV4dCk7XG5cbiAgaWYgKHJvdXRlID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgcm91dGUgb2JqZWN0LiBJcyB5b3VyIGNvbXBvbmVudCBpbnNpZGUgYSBzY3JlZW4gaW4gYSBuYXZpZ2F0b3I/XCIpO1xuICB9XG5cbiAgcmV0dXJuIHJvdXRlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlUm91dGUuanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIFV0aWxpdGVzIHN1Y2ggYXMgYGdldEZvY3VzZWRSb3V0ZU5hbWVGcm9tUm91dGVgIG5lZWQgdG8gYWNjZXNzIHN0YXRlLlxuICogU28gd2UgbmVlZCBhIHdheSB0byBzdXBwcmVzcyB0aGUgd2FybmluZyBmb3IgdGhvc2UgdXNlIGNhc2VzLlxuICogVGhpcyBpcyBmaW5lIHNpbmNlIHRoZXkgYXJlIGludGVybmFsIHV0aWxpdGllcyBhbmQgdGhpcyBpcyBub3QgcHVibGljIEFQSS5cbiAqL1xuZXhwb3J0IGNvbnN0IFNVUFBSRVNTX1NUQVRFX0FDQ0VTU19XQVJOSU5HID0ge1xuICB2YWx1ZTogZmFsc2Vcbn07XG4vKipcbiAqIEhvb2sgdG8gY2FjaGUgcm91dGUgcHJvcHMgZm9yIGVhY2ggc2NyZWVuIGluIHRoZSBuYXZpZ2F0b3IuXG4gKiBUaGlzIGxldHMgYWRkIHdhcm5pbmdzIGFuZCBtb2RpZmljYXRpb25zIHRvIHRoZSByb3V0ZSBvYmplY3QgYnV0IGtlZXAgcmVmZXJlbmNlcyBiZXR3ZWVuIHJlbmRlcnMuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUm91dGVDYWNoZShyb3V0ZXMpIHtcbiAgLy8gQ2FjaGUgb2JqZWN0IHdoaWNoIGhvbGRzIHJvdXRlIG9iamVjdHMgZm9yIGVhY2ggc2NyZWVuXG4gIGNvbnN0IGNhY2hlID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIGN1cnJlbnQ6IG5ldyBNYXAoKVxuICB9KSwgW10pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gV2UgZG9uJ3Qgd2FudCB0aGUgb3ZlcmhlYWQgb2YgY3JlYXRpbmcgZXh0cmEgbWFwcyBldmVyeSByZW5kZXIgaW4gcHJvZFxuICAgIHJldHVybiByb3V0ZXM7XG4gIH1cblxuICBjYWNoZS5jdXJyZW50ID0gcm91dGVzLnJlZHVjZSgoYWNjLCByb3V0ZSkgPT4ge1xuICAgIGNvbnN0IHByZXZpb3VzID0gY2FjaGUuY3VycmVudC5nZXQocm91dGUpO1xuXG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAvLyBJZiBhIGNhY2hlZCByb3V0ZSBvYmplY3QgYWxyZWFkeSBleGlzdHMsIHJldXNlIGl0XG4gICAgICBhY2Muc2V0KHJvdXRlLCBwcmV2aW91cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb3h5ID0geyAuLi5yb3V0ZVxuICAgICAgfTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm94eSwgJ3N0YXRlJywge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgaWYgKCFTVVBQUkVTU19TVEFURV9BQ0NFU1NfV0FSTklORy52YWx1ZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQWNjZXNzaW5nIHRoZSAnc3RhdGUnIHByb3BlcnR5IG9mIHRoZSAncm91dGUnIG9iamVjdCBpcyBub3Qgc3VwcG9ydGVkLiBJZiB5b3Ugd2FudCB0byBnZXQgdGhlIGZvY3VzZWQgcm91dGUgbmFtZSwgdXNlIHRoZSAnZ2V0Rm9jdXNlZFJvdXRlTmFtZUZyb21Sb3V0ZScgaGVscGVyIGluc3RlYWQ6IGh0dHBzOi8vcmVhY3RuYXZpZ2F0aW9uLm9yZy9kb2NzLzUueC9zY3JlZW4tb3B0aW9ucy1yZXNvbHV0aW9uLyNzZXR0aW5nLXBhcmVudC1zY3JlZW4tb3B0aW9ucy1iYXNlZC1vbi1jaGlsZC1uYXZpZ2F0b3JzLXN0YXRlXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByb3V0ZS5zdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICAgIGFjYy5zZXQocm91dGUsIHByb3h5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBuZXcgTWFwKCkpO1xuICByZXR1cm4gQXJyYXkuZnJvbShjYWNoZS5jdXJyZW50LnZhbHVlcygpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZVJvdXRlQ2FjaGUuanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgTUlTU0lOR19DT05URVhUX0VSUk9SID0gXCJDb3VsZG4ndCBmaW5kIGEgc2NoZWR1bGUgY29udGV4dC5cIjtcbmV4cG9ydCBjb25zdCBTY2hlZHVsZVVwZGF0ZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIHNjaGVkdWxlVXBkYXRlKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihNSVNTSU5HX0NPTlRFWFRfRVJST1IpO1xuICB9LFxuXG4gIGZsdXNoVXBkYXRlcygpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTUlTU0lOR19DT05URVhUX0VSUk9SKTtcbiAgfVxuXG59KTtcbi8qKlxuICogV2hlbiBzY3JlZW4gY29uZmlnIGNoYW5nZXMsIHdlIHdhbnQgdG8gdXBkYXRlIHRoZSBuYXZpZ2F0b3IgaW4gdGhlIHNhbWUgdXBkYXRlIHBoYXNlLlxuICogSG93ZXZlciwgbmF2aWdhdGlvbiBzdGF0ZSBpcyBpbiB0aGUgcm9vdCBjb21wb25lbnQgYW5kIFJlYWN0IHdvbid0IGxldCB1cyB1cGRhdGUgaXQgZnJvbSBhIGNoaWxkLlxuICogVGhpcyBpcyBhIHdvcmthcm91bmQgZm9yIHRoYXQsIHRoZSBzY2hlZHVsZWQgdXBkYXRlIGlzIHN0b3JlZCBpbiB0aGUgcmVmIHdpdGhvdXQgYWN0dWFsbHkgY2FsbGluZyBzZXRTdGF0ZS5cbiAqIEl0IGxldHMgYWxsIHN1YnNlcXVlbnQgdXBkYXRlcyBhY2Nlc3MgdGhlIGxhdGVzdCBzdGF0ZSBzbyBpdCBzdGF5cyBjb3JyZWN0LlxuICogVGhlbiB3ZSBjYWxsIHNldFN0YXRlIGR1cmluZyBhZnRlciB0aGUgY29tcG9uZW50IHVwZGF0ZXMuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU2NoZWR1bGVVcGRhdGUoY2FsbGJhY2spIHtcbiAgY29uc3Qge1xuICAgIHNjaGVkdWxlVXBkYXRlLFxuICAgIGZsdXNoVXBkYXRlc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChTY2hlZHVsZVVwZGF0ZUNvbnRleHQpO1xuICBzY2hlZHVsZVVwZGF0ZShjYWxsYmFjayk7XG4gIFJlYWN0LnVzZUVmZmVjdChmbHVzaFVwZGF0ZXMpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlU2NoZWR1bGVVcGRhdGUuanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgVU5JTlRJQUxJWkVEX1NUQVRFID0ge307XG4vKipcbiAqIFRoaXMgaXMgZGVmaW5pdGVseSBub3QgY29tcGF0aWJsZSB3aXRoIGNvbmN1cnJlbnQgbW9kZSwgYnV0IHdlIGRvbid0IGhhdmUgYSBzb2x1dGlvbiBmb3Igc3luYyBzdGF0ZSB5ZXQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3luY1N0YXRlKGluaXRpYWxTdGF0ZSkge1xuICBjb25zdCBzdGF0ZVJlZiA9IFJlYWN0LnVzZVJlZihVTklOVElBTElaRURfU1RBVEUpO1xuICBjb25zdCBpc1NjaGVkdWxpbmdSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICBjb25zdCBpc01vdW50ZWRSZWYgPSBSZWFjdC51c2VSZWYodHJ1ZSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaXNNb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpc01vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBpZiAoc3RhdGVSZWYuY3VycmVudCA9PT0gVU5JTlRJQUxJWkVEX1NUQVRFKSB7XG4gICAgc3RhdGVSZWYuY3VycmVudCA9IC8vIEB0cy1leHBlY3QtZXJyb3I6IGluaXRpYWxTdGF0ZSBpcyBhIGZ1bmN0aW9uLCBidXQgVHlwZVNjcmlwdCBkb2Vzbid0IHRoaW5rIHNvXG4gICAgdHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IGluaXRpYWxTdGF0ZSgpIDogaW5pdGlhbFN0YXRlO1xuICB9XG5cbiAgY29uc3QgW3RyYWNraW5nU3RhdGUsIHNldFRyYWNraW5nU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoc3RhdGVSZWYuY3VycmVudCk7XG4gIGNvbnN0IGdldFN0YXRlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4gc3RhdGVSZWYuY3VycmVudCwgW10pO1xuICBjb25zdCBzZXRTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKHN0YXRlID0+IHtcbiAgICBpZiAoc3RhdGUgPT09IHN0YXRlUmVmLmN1cnJlbnQgfHwgIWlzTW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RhdGVSZWYuY3VycmVudCA9IHN0YXRlO1xuXG4gICAgaWYgKCFpc1NjaGVkdWxpbmdSZWYuY3VycmVudCkge1xuICAgICAgc2V0VHJhY2tpbmdTdGF0ZShzdGF0ZSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIGNvbnN0IHNjaGVkdWxlVXBkYXRlID0gUmVhY3QudXNlQ2FsbGJhY2soY2FsbGJhY2sgPT4ge1xuICAgIGlzU2NoZWR1bGluZ1JlZi5jdXJyZW50ID0gdHJ1ZTtcblxuICAgIHRyeSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc1NjaGVkdWxpbmdSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgIH1cbiAgfSwgW10pO1xuICBjb25zdCBmbHVzaFVwZGF0ZXMgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFpc01vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHRyYWNraW5nIHN0YXRlIGlzIHVwLXRvLWRhdGUuXG4gICAgLy8gV2UgY2FsbCBpdCB1bmNvbmRpdGlvbmFsbHksIGJ1dCBSZWFjdCBzaG91bGQgc2tpcCB0aGUgdXBkYXRlIGlmIHN0YXRlIGlzIHVuY2hhbmdlZC5cblxuXG4gICAgc2V0VHJhY2tpbmdTdGF0ZShzdGF0ZVJlZi5jdXJyZW50KTtcbiAgfSwgW10pOyAvLyBJZiB3ZSdyZSByZW5kZXJpbmcgYW5kIHRoZSB0cmFja2luZyBzdGF0ZSBpcyBvdXQgb2YgZGF0ZSwgdXBkYXRlIGl0IGltbWVkaWF0ZWx5XG4gIC8vIFRoaXMgd2lsbCBtYWtlIHN1cmUgdGhhdCBvdXIgdXBkYXRlcyBhcmUgYXBwbGllZCBhcyBlYXJseSBhcyBwb3NzaWJsZS5cblxuICBpZiAodHJhY2tpbmdTdGF0ZSAhPT0gc3RhdGVSZWYuY3VycmVudCkge1xuICAgIHNldFRyYWNraW5nU3RhdGUoc3RhdGVSZWYuY3VycmVudCk7XG4gIH1cblxuICBjb25zdCBzdGF0ZSA9IHN0YXRlUmVmLmN1cnJlbnQ7XG4gIFJlYWN0LnVzZURlYnVnVmFsdWUoc3RhdGUpO1xuICByZXR1cm4gW3N0YXRlLCBnZXRTdGF0ZSwgc2V0U3RhdGUsIHNjaGVkdWxlVXBkYXRlLCBmbHVzaFVwZGF0ZXNdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlU3luY1N0YXRlLmpzLm1hcCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IExpbmtpbmdDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBvcHRpb25zOiB1bmRlZmluZWRcbn0pO1xuTGlua2luZ0NvbnRleHQuZGlzcGxheU5hbWUgPSAnTGlua2luZ0NvbnRleHQnO1xuZXhwb3J0IGRlZmF1bHQgTGlua2luZ0NvbnRleHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1MaW5raW5nQ29udGV4dC5qcy5tYXAiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmltcG9ydCB7IEJhc2VOYXZpZ2F0aW9uQ29udGFpbmVyLCBnZXRBY3Rpb25Gcm9tU3RhdGUsIGdldFBhdGhGcm9tU3RhdGUsIGdldFN0YXRlRnJvbVBhdGgsIHZhbGlkYXRlUGF0aENvbmZpZyB9IGZyb20gJ0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmtpbmdDb250ZXh0IGZyb20gJy4vTGlua2luZ0NvbnRleHQnO1xuaW1wb3J0IERlZmF1bHRUaGVtZSBmcm9tICcuL3RoZW1pbmcvRGVmYXVsdFRoZW1lJztcbmltcG9ydCBUaGVtZVByb3ZpZGVyIGZyb20gJy4vdGhlbWluZy9UaGVtZVByb3ZpZGVyJztcbmltcG9ydCB1c2VCYWNrQnV0dG9uIGZyb20gJy4vdXNlQmFja0J1dHRvbic7XG5pbXBvcnQgdXNlRG9jdW1lbnRUaXRsZSBmcm9tICcuL3VzZURvY3VtZW50VGl0bGUnO1xuaW1wb3J0IHVzZUxpbmtpbmcgZnJvbSAnLi91c2VMaW5raW5nJztcbmltcG9ydCB1c2VUaGVuYWJsZSBmcm9tICcuL3VzZVRoZW5hYmxlJztcbmdsb2JhbC5SRUFDVF9OQVZJR0FUSU9OX0RFVlRPT0xTID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogQ29udGFpbmVyIGNvbXBvbmVudCB3aGljaCBob2xkcyB0aGUgbmF2aWdhdGlvbiBzdGF0ZSBkZXNpZ25lZCBmb3IgUmVhY3QgTmF0aXZlIGFwcHMuXG4gKiBUaGlzIHNob3VsZCBiZSByZW5kZXJlZCBhdCB0aGUgcm9vdCB3cmFwcGluZyB0aGUgd2hvbGUgYXBwLlxuICpcbiAqIEBwYXJhbSBwcm9wcy5pbml0aWFsU3RhdGUgSW5pdGlhbCBzdGF0ZSBvYmplY3QgZm9yIHRoZSBuYXZpZ2F0aW9uIHRyZWUuIFdoZW4gZGVlcCBsaW5rIGhhbmRsaW5nIGlzIGVuYWJsZWQsIHRoaXMgd2lsbCBvdmVycmlkZSBkZWVwIGxpbmtzIHdoZW4gc3BlY2lmaWVkLiBNYWtlIHN1cmUgdGhhdCB5b3UgZG9uJ3Qgc3BlY2lmeSBhbiBgaW5pdGlhbFN0YXRlYCB3aGVuIHRoZXJlJ3MgYSBkZWVwIGxpbmsgKGBMaW5raW5nLmdldEluaXRpYWxVUkwoKWApLlxuICogQHBhcmFtIHByb3BzLm9uUmVhZHkgQ2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIHRoZSBuYXZpZ2F0aW9uIHRyZWUgbW91bnRzLlxuICogQHBhcmFtIHByb3BzLm9uU3RhdGVDaGFuZ2UgQ2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIHdpdGggdGhlIGxhdGVzdCBuYXZpZ2F0aW9uIHN0YXRlIHdoZW4gaXQgY2hhbmdlcy5cbiAqIEBwYXJhbSBwcm9wcy50aGVtZSBUaGVtZSBvYmplY3QgZm9yIHRoZSBuYXZpZ2F0b3JzLlxuICogQHBhcmFtIHByb3BzLmxpbmtpbmcgT3B0aW9ucyBmb3IgZGVlcCBsaW5raW5nLiBEZWVwIGxpbmsgaGFuZGxpbmcgaXMgZW5hYmxlZCB3aGVuIHRoaXMgcHJvcCBpcyBwcm92aWRlZCwgdW5sZXNzIGBsaW5raW5nLmVuYWJsZWRgIGlzIGBmYWxzZWAuXG4gKiBAcGFyYW0gcHJvcHMuZmFsbGJhY2sgRmFsbGJhY2sgY29tcG9uZW50IHRvIHJlbmRlciB1bnRpbCB3ZSBoYXZlIGZpbmlzaGVkIGdldHRpbmcgaW5pdGlhbCBzdGF0ZSB3aGVuIGxpbmtpbmcgaXMgZW5hYmxlZC4gRGVmYXVsdHMgdG8gYG51bGxgLlxuICogQHBhcmFtIHByb3BzLmRvY3VtZW50VGl0bGUgT3B0aW9ucyB0byBjb25maWd1cmUgdGhlIGRvY3VtZW50IHRpdGxlIG9uIFdlYi4gVXBkYXRpbmcgZG9jdW1lbnQgdGl0bGUgaXMgaGFuZGxlZCBieSBkZWZhdWx0IHVubGVzcyBgZG9jdW1lbnRUaXRsZS5lbmFibGVkYCBpcyBgZmFsc2VgLlxuICogQHBhcmFtIHByb3BzLmNoaWxkcmVuIENoaWxkIGVsZW1lbnRzIHRvIHJlbmRlciB0aGUgY29udGVudC5cbiAqIEBwYXJhbSBwcm9wcy5yZWYgUmVmIG9iamVjdCB3aGljaCByZWZlcnMgdG8gdGhlIG5hdmlnYXRpb24gb2JqZWN0IGNvbnRhaW5pbmcgaGVscGVyIG1ldGhvZHMuXG4gKi9cbmZ1bmN0aW9uIE5hdmlnYXRpb25Db250YWluZXJJbm5lcihfcmVmLCByZWYpIHtcbiAgbGV0IHtcbiAgICB0aGVtZSA9IERlZmF1bHRUaGVtZSxcbiAgICBsaW5raW5nLFxuICAgIGZhbGxiYWNrID0gbnVsbCxcbiAgICBkb2N1bWVudFRpdGxlLFxuICAgIG9uUmVhZHksXG4gICAgLi4ucmVzdFxuICB9ID0gX3JlZjtcbiAgY29uc3QgaXNMaW5raW5nRW5hYmxlZCA9IGxpbmtpbmcgPyBsaW5raW5nLmVuYWJsZWQgIT09IGZhbHNlIDogZmFsc2U7XG4gIGlmIChsaW5raW5nICE9PSBudWxsICYmIGxpbmtpbmcgIT09IHZvaWQgMCAmJiBsaW5raW5nLmNvbmZpZykge1xuICAgIHZhbGlkYXRlUGF0aENvbmZpZyhsaW5raW5nLmNvbmZpZyk7XG4gIH1cbiAgY29uc3QgcmVmQ29udGFpbmVyID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB1c2VCYWNrQnV0dG9uKHJlZkNvbnRhaW5lcik7XG4gIHVzZURvY3VtZW50VGl0bGUocmVmQ29udGFpbmVyLCBkb2N1bWVudFRpdGxlKTtcbiAgY29uc3Qge1xuICAgIGdldEluaXRpYWxTdGF0ZVxuICB9ID0gdXNlTGlua2luZyhyZWZDb250YWluZXIsIHtcbiAgICBpbmRlcGVuZGVudDogcmVzdC5pbmRlcGVuZGVudCxcbiAgICBlbmFibGVkOiBpc0xpbmtpbmdFbmFibGVkLFxuICAgIHByZWZpeGVzOiBbXSxcbiAgICAuLi5saW5raW5nXG4gIH0pO1xuXG4gIC8vIEFkZCBhZGRpdGlvbmFsIGxpbmtpbmcgcmVsYXRlZCBpbmZvIHRvIHRoZSByZWZcbiAgLy8gVGhpcyB3aWxsIGJlIHVzZWQgYnkgdGhlIGRldnRvb2xzXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlZkNvbnRhaW5lci5jdXJyZW50KSB7XG4gICAgICBSRUFDVF9OQVZJR0FUSU9OX0RFVlRPT0xTLnNldChyZWZDb250YWluZXIuY3VycmVudCwge1xuICAgICAgICBnZXQgbGlua2luZygpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ubGlua2luZyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IGlzTGlua2luZ0VuYWJsZWQsXG4gICAgICAgICAgICBwcmVmaXhlczogKGxpbmtpbmcgPT09IG51bGwgfHwgbGlua2luZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGlua2luZy5wcmVmaXhlcykgPz8gW10sXG4gICAgICAgICAgICBnZXRTdGF0ZUZyb21QYXRoOiAobGlua2luZyA9PT0gbnVsbCB8fCBsaW5raW5nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsaW5raW5nLmdldFN0YXRlRnJvbVBhdGgpID8/IGdldFN0YXRlRnJvbVBhdGgsXG4gICAgICAgICAgICBnZXRQYXRoRnJvbVN0YXRlOiAobGlua2luZyA9PT0gbnVsbCB8fCBsaW5raW5nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsaW5raW5nLmdldFBhdGhGcm9tU3RhdGUpID8/IGdldFBhdGhGcm9tU3RhdGUsXG4gICAgICAgICAgICBnZXRBY3Rpb25Gcm9tU3RhdGU6IChsaW5raW5nID09PSBudWxsIHx8IGxpbmtpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxpbmtpbmcuZ2V0QWN0aW9uRnJvbVN0YXRlKSA/PyBnZXRBY3Rpb25Gcm9tU3RhdGVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBbaXNSZXNvbHZlZCwgaW5pdGlhbFN0YXRlXSA9IHVzZVRoZW5hYmxlKGdldEluaXRpYWxTdGF0ZSk7XG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiByZWZDb250YWluZXIuY3VycmVudCk7XG4gIGNvbnN0IGxpbmtpbmdDb250ZXh0ID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIG9wdGlvbnM6IGxpbmtpbmdcbiAgfSksIFtsaW5raW5nXSk7XG4gIGNvbnN0IGlzUmVhZHkgPSByZXN0LmluaXRpYWxTdGF0ZSAhPSBudWxsIHx8ICFpc0xpbmtpbmdFbmFibGVkIHx8IGlzUmVzb2x2ZWQ7XG4gIGNvbnN0IG9uUmVhZHlSZWYgPSBSZWFjdC51c2VSZWYob25SZWFkeSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb25SZWFkeVJlZi5jdXJyZW50ID0gb25SZWFkeTtcbiAgfSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzUmVhZHkpIHtcbiAgICAgIHZhciBfb25SZWFkeVJlZiRjdXJyZW50O1xuICAgICAgKF9vblJlYWR5UmVmJGN1cnJlbnQgPSBvblJlYWR5UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9vblJlYWR5UmVmJGN1cnJlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vblJlYWR5UmVmJGN1cnJlbnQuY2FsbChvblJlYWR5UmVmKTtcbiAgICB9XG4gIH0sIFtpc1JlYWR5XSk7XG4gIGlmICghaXNSZWFkeSkge1xuICAgIC8vIFRoaXMgaXMgdGVtcG9yYXJ5IHVudGlsIHdlIGhhdmUgU3VzcGVuc2UgZm9yIGRhdGEtZmV0Y2hpbmdcbiAgICAvLyBUaGVuIHRoZSBmYWxsYmFjayB3aWxsIGJlIGhhbmRsZWQgYnkgYSBwYXJlbnQgYFN1c3BlbnNlYCBjb21wb25lbnRcbiAgICByZXR1cm4gZmFsbGJhY2s7XG4gIH1cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExpbmtpbmdDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGxpbmtpbmdDb250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRoZW1lUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdGhlbWVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQmFzZU5hdmlnYXRpb25Db250YWluZXIsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgaW5pdGlhbFN0YXRlOiByZXN0LmluaXRpYWxTdGF0ZSA9PSBudWxsID8gaW5pdGlhbFN0YXRlIDogcmVzdC5pbml0aWFsU3RhdGUsXG4gICAgcmVmOiByZWZDb250YWluZXJcbiAgfSkpKSk7XG59XG5jb25zdCBOYXZpZ2F0aW9uQ29udGFpbmVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoTmF2aWdhdGlvbkNvbnRhaW5lcklubmVyKTtcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25Db250YWluZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1OYXZpZ2F0aW9uQ29udGFpbmVyLmpzLm1hcCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IFNlcnZlckNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xuZXhwb3J0IGRlZmF1bHQgU2VydmVyQ29udGV4dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNlcnZlckNvbnRleHQuanMubWFwIiwiaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkL25vbi1zZWN1cmUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVtb3J5SGlzdG9yeSgpIHtcbiAgbGV0IGluZGV4ID0gMDtcbiAgbGV0IGl0ZW1zID0gW107XG5cbiAgLy8gUGVuZGluZyBjYWxsYmFja3MgZm9yIGBoaXN0b3J5LmdvKG4pYFxuICAvLyBXZSBtaWdodCBtb2RpZnkgdGhlIGNhbGxiYWNrIHN0b3JlZCBpZiBpdCB3YXMgaW50ZXJydXB0ZWQsIHNvIHdlIGhhdmUgYSByZWYgdG8gaWRlbnRpZnkgaXRcbiAgY29uc3QgcGVuZGluZyA9IFtdO1xuICBjb25zdCBpbnRlcnJ1cHQgPSAoKSA9PiB7XG4gICAgLy8gSWYgYW5vdGhlciBoaXN0b3J5IG9wZXJhdGlvbiB3YXMgcGVyZm9ybWVkIHdlIG5lZWQgdG8gaW50ZXJydXB0IGV4aXN0aW5nIG9uZXNcbiAgICAvLyBUaGlzIG1ha2VzIHN1cmUgdGhhdCBjYWxscyBzdWNoIGFzIGBoaXN0b3J5LnJlcGxhY2VgIGFmdGVyIGBoaXN0b3J5LmdvYCBkb24ndCBoYXBwZW5cbiAgICAvLyBTaW5jZSBvdGhlcndpc2UgaXQgd29uJ3QgYmUgY29ycmVjdCBpZiBzb21ldGhpbmcgZWxzZSBoYXMgY2hhbmdlZFxuICAgIHBlbmRpbmcuZm9yRWFjaChpdCA9PiB7XG4gICAgICBjb25zdCBjYiA9IGl0LmNiO1xuICAgICAgaXQuY2IgPSAoKSA9PiBjYih0cnVlKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgaGlzdG9yeSA9IHtcbiAgICBnZXQgaW5kZXgoKSB7XG4gICAgICB2YXIgX3dpbmRvdyRoaXN0b3J5JHN0YXRlO1xuICAgICAgLy8gV2Ugc3RvcmUgYW4gaWQgaW4gdGhlIHN0YXRlIGluc3RlYWQgb2YgYW4gaW5kZXhcbiAgICAgIC8vIEluZGV4IGNvdWxkIGdldCBvdXQgb2Ygc3luYyB3aXRoIGluLW1lbW9yeSB2YWx1ZXMgaWYgcGFnZSByZWxvYWRzXG4gICAgICBjb25zdCBpZCA9IChfd2luZG93JGhpc3Rvcnkkc3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5zdGF0ZSkgPT09IG51bGwgfHwgX3dpbmRvdyRoaXN0b3J5JHN0YXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfd2luZG93JGhpc3Rvcnkkc3RhdGUuaWQ7XG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBpZCk7XG4gICAgICAgIHJldHVybiBpbmRleCA+IC0xID8gaW5kZXggOiAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSxcbiAgICBnZXQoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpdGVtc1tpbmRleF07XG4gICAgfSxcbiAgICBiYWNrSW5kZXgoX3JlZikge1xuICAgICAgbGV0IHtcbiAgICAgICAgcGF0aFxuICAgICAgfSA9IF9yZWY7XG4gICAgICAvLyBXZSBuZWVkIHRvIGZpbmQgdGhlIGluZGV4IGZyb20gdGhlIGVsZW1lbnQgYmVmb3JlIGN1cnJlbnQgdG8gZ2V0IGNsb3Nlc3QgcGF0aCB0byBnbyBiYWNrIHRvXG4gICAgICBmb3IgKGxldCBpID0gaW5kZXggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgIGlmIChpdGVtLnBhdGggPT09IHBhdGgpIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH0sXG4gICAgcHVzaChfcmVmMikge1xuICAgICAgbGV0IHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgc3RhdGVcbiAgICAgIH0gPSBfcmVmMjtcbiAgICAgIGludGVycnVwdCgpO1xuICAgICAgY29uc3QgaWQgPSBuYW5vaWQoKTtcblxuICAgICAgLy8gV2hlbiBhIG5ldyBlbnRyeSBpcyBwdXNoZWQsIGFsbCB0aGUgZXhpc3RpbmcgZW50cmllcyBhZnRlciBpbmRleCB3aWxsIGJlIGluYWNjZXNzaWJsZVxuICAgICAgLy8gU28gd2UgcmVtb3ZlIGFueSBleGlzdGluZyBlbnRyaWVzIGFmdGVyIHRoZSBjdXJyZW50IGluZGV4IHRvIGNsZWFuIHRoZW0gdXBcbiAgICAgIGl0ZW1zID0gaXRlbXMuc2xpY2UoMCwgaW5kZXggKyAxKTtcbiAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICBwYXRoLFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgaWRcbiAgICAgIH0pO1xuICAgICAgaW5kZXggPSBpdGVtcy5sZW5ndGggLSAxO1xuXG4gICAgICAvLyBXZSBwYXNzIGVtcHR5IHN0cmluZyBmb3IgdGl0bGUgYmVjYXVzZSBpdCdzIGlnbm9yZWQgaW4gYWxsIGJyb3dzZXJzIGV4Y2VwdCBzYWZhcmlcbiAgICAgIC8vIFdlIGRvbid0IHN0b3JlIHN0YXRlIG9iamVjdCBpbiBoaXN0b3J5LnN0YXRlIGJlY2F1c2U6XG4gICAgICAvLyAtIGJyb3dzZXJzIGhhdmUgbGltaXRzIG9uIGhvdyBiaWcgaXQgY2FuIGJlLCBhbmQgd2UgZG9uJ3QgY29udHJvbCB0aGUgc2l6ZVxuICAgICAgLy8gLSB3aGlsZSBub3QgcmVjb21tZW5kZWQsIHRoZXJlIGNvdWxkIGJlIG5vbi1zZXJpYWxpemFibGUgZGF0YSBpbiBzdGF0ZVxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtcbiAgICAgICAgaWRcbiAgICAgIH0sICcnLCBwYXRoKTtcbiAgICB9LFxuICAgIHJlcGxhY2UoX3JlZjMpIHtcbiAgICAgIHZhciBfd2luZG93JGhpc3Rvcnkkc3RhdGUyO1xuICAgICAgbGV0IHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgc3RhdGVcbiAgICAgIH0gPSBfcmVmMztcbiAgICAgIGludGVycnVwdCgpO1xuICAgICAgY29uc3QgaWQgPSAoKF93aW5kb3ckaGlzdG9yeSRzdGF0ZTIgPSB3aW5kb3cuaGlzdG9yeS5zdGF0ZSkgPT09IG51bGwgfHwgX3dpbmRvdyRoaXN0b3J5JHN0YXRlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3dpbmRvdyRoaXN0b3J5JHN0YXRlMi5pZCkgPz8gbmFub2lkKCk7XG5cbiAgICAgIC8vIE5lZWQgdG8ga2VlcCB0aGUgaGFzaCBwYXJ0IG9mIHRoZSBwYXRoIGlmIHRoZXJlIHdhcyBubyBwcmV2aW91cyBoaXN0b3J5IGVudHJ5XG4gICAgICAvLyBvciB0aGUgcHJldmlvdXMgaGlzdG9yeSBlbnRyeSBoYWQgdGhlIHNhbWUgcGF0aFxuICAgICAgbGV0IHBhdGhXaXRoSGFzaCA9IHBhdGg7XG4gICAgICBpZiAoIWl0ZW1zLmxlbmd0aCB8fCBpdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBpZCkgPCAwKSB7XG4gICAgICAgIC8vIFRoZXJlIGFyZSB0d28gc2NlbmFyaW9zIGZvciBjcmVhdGluZyBhbiBhcnJheSB3aXRoIG9ubHkgb25lIGhpc3RvcnkgcmVjb3JkOlxuICAgICAgICAvLyAtIFdoZW4gbG9hZGVkIGlkIG5vdCBmb3VuZCBpbiB0aGUgaXRlbXMgYXJyYXksIHRoaXMgZnVuY3Rpb24gYnkgZGVmYXVsdCB3aWxsIHJlcGxhY2VcbiAgICAgICAgLy8gICB0aGUgZmlyc3QgaXRlbS4gV2UgbmVlZCB0byBrZWVwIG9ubHkgdGhlIG5ldyB1cGRhdGVkIG9iamVjdCwgb3RoZXJ3aXNlIGl0IHdpbGwgYnJlYWtcbiAgICAgICAgLy8gICB0aGUgcGFnZSB3aGVuIG5hdmlnYXRpbmcgZm9yd2FyZCBpbiBoaXN0b3J5LlxuICAgICAgICAvLyAtIFRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgYW55IHN0YXRlIG1vZGlmaWNhdGlvbnMgYXJlIGRvbmVcbiAgICAgICAgLy8gICBTbyB3ZSBuZWVkIHRvIHB1c2ggdGhlIGVudHJ5IGFzIHRoZXJlJ3Mgbm90aGluZyB0byByZXBsYWNlXG4gICAgICAgIHBhdGhXaXRoSGFzaCA9IHBhdGhXaXRoSGFzaCArIGxvY2F0aW9uLmhhc2g7XG4gICAgICAgIGl0ZW1zID0gW3tcbiAgICAgICAgICBwYXRoOiBwYXRoV2l0aEhhc2gsXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgaWRcbiAgICAgICAgfV07XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpdGVtc1tpbmRleF0ucGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgIHBhdGhXaXRoSGFzaCA9IHBhdGhXaXRoSGFzaCArIGxvY2F0aW9uLmhhc2g7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbXNbaW5kZXhdID0ge1xuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgaWRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7XG4gICAgICAgIGlkXG4gICAgICB9LCAnJywgcGF0aFdpdGhIYXNoKTtcbiAgICB9LFxuICAgIC8vIGBoaXN0b3J5LmdvKG4pYCBpcyBhc3luY2hyb25vdXMsIHRoZXJlIGFyZSBjb3VwbGUgb2YgdGhpbmdzIHRvIGtlZXAgaW4gbWluZDpcbiAgICAvLyAtIGl0IHdvbid0IGRvIGFueXRoaW5nIGlmIHdlIGNhbid0IGdvIGBuYCBzdGVwcywgdGhlIGBwb3BzdGF0ZWAgZXZlbnQgd29uJ3QgZmlyZS5cbiAgICAvLyAtIGVhY2ggYGhpc3RvcnkuZ28obilgIGNhbGwgd2lsbCB0cmlnZ2VyIGEgc2VwYXJhdGUgYHBvcHN0YXRlYCBldmVudCB3aXRoIGNvcnJlY3QgbG9jYXRpb24uXG4gICAgLy8gLSB0aGUgYHBvcHN0YXRlYCBldmVudCBmaXJlcyBiZWZvcmUgdGhlIG5leHQgZnJhbWUgYWZ0ZXIgY2FsbGluZyBgaGlzdG9yeS5nbyhuKWAuXG4gICAgLy8gVGhpcyBtZXRob2QgZGlmZmVycyBmcm9tIGBoaXN0b3J5LmdvKG4pYCBpbiB0aGUgc2Vuc2UgdGhhdCBpdCdsbCBnbyBiYWNrIGFzIG1hbnkgc3RlcHMgaXQgY2FuLlxuICAgIGdvKG4pIHtcbiAgICAgIGludGVycnVwdCgpO1xuXG4gICAgICAvLyBUbyBndWFyZCBhZ2FpbnN0IHVuZXhwZWN0ZWQgbmF2aWdhdGlvbiBvdXQgb2YgdGhlIGFwcCB3ZSB3aWxsIGFzc3VtZSB0aGF0IGJyb3dzZXIgaGlzdG9yeSBpcyBvbmx5IGFzIGRlZXAgYXMgdGhlIGxlbmd0aCBvZiBvdXIgbWVtb3J5XG4gICAgICAvLyBoaXN0b3J5LiBJZiB3ZSBkb24ndCBoYXZlIGFuIGl0ZW0gdG8gbmF2aWdhdGUgdG8gdGhlbiB1cGRhdGUgb3VyIGluZGV4IGFuZCBuYXZpZ2F0ZSBhcyBmYXIgYXMgd2UgY2FuIHdpdGhvdXQgdGFraW5nIHRoZSB1c2VyIG91dCBvZiB0aGUgYXBwLlxuICAgICAgY29uc3QgbmV4dEluZGV4ID0gaW5kZXggKyBuO1xuICAgICAgY29uc3QgbGFzdEl0ZW1JbmRleCA9IGl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICBpZiAobiA8IDAgJiYgIWl0ZW1zW25leHRJbmRleF0pIHtcbiAgICAgICAgLy8gQXR0ZW1wdGVkIHRvIG5hdmlnYXRlIGJleW9uZCB0aGUgZmlyc3QgaW5kZXguIE5lZ2F0aW5nIHRoZSBjdXJyZW50IGluZGV4IHdpbGwgYWxpZ24gdGhlIGJyb3dzZXIgaGlzdG9yeSB3aXRoIHRoZSBmaXJzdCBpdGVtLlxuICAgICAgICBuID0gLWluZGV4O1xuICAgICAgICBpbmRleCA9IDA7XG4gICAgICB9IGVsc2UgaWYgKG4gPiAwICYmIG5leHRJbmRleCA+IGxhc3RJdGVtSW5kZXgpIHtcbiAgICAgICAgLy8gQXR0ZW1wdGVkIHRvIG5hdmlnYXRlIHBhc3QgdGhlIGxhc3QgaW5kZXguIENhbGN1bGF0ZSBob3cgbWFueSBpbmRpY2VzIGF3YXkgZnJvbSB0aGUgbGFzdCBpbmRleCBhbmQgZ28gdGhlcmUuXG4gICAgICAgIG4gPSBsYXN0SXRlbUluZGV4IC0gaW5kZXg7XG4gICAgICAgIGluZGV4ID0gbGFzdEl0ZW1JbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbmV4dEluZGV4O1xuICAgICAgfVxuICAgICAgaWYgKG4gPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBXaGVuIHdlIGNhbGwgYGhpc3RvcnkuZ29gLCBgcG9wc3RhdGVgIHdpbGwgZmlyZSB3aGVuIHRoZXJlJ3MgaGlzdG9yeSB0byBnbyBiYWNrIHRvXG4gICAgICAvLyBTbyB3ZSBuZWVkIHRvIHNvbWVob3cgaGFuZGxlIGZvbGxvd2luZyBjYXNlczpcbiAgICAgIC8vIC0gVGhlcmUncyBoaXN0b3J5IHRvIGdvIGJhY2ssIGBoaXN0b3J5LmdvYCBpcyBjYWxsZWQsIGFuZCBgcG9wc3RhdGVgIGZpcmVzXG4gICAgICAvLyAtIGBoaXN0b3J5LmdvYCBpcyBjYWxsZWQgbXVsdGlwbGUgdGltZXMsIHdlIG5lZWQgdG8gcmVzb2x2ZSBvbiByZXNwZWN0aXZlIGBwb3BzdGF0ZWBcbiAgICAgIC8vIC0gTm8gaGlzdG9yeSB0byBnbyBiYWNrLCBidXQgYGhpc3RvcnkuZ29gIHdhcyBjYWxsZWQsIGJyb3dzZXIgaGFzIG5vIEFQSSB0byBkZXRlY3QgaXRcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGRvbmUgPSBpbnRlcnJ1cHRlZCA9PiB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICBpZiAoaW50ZXJydXB0ZWQpIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0hpc3Rvcnkgd2FzIGNoYW5nZWQgZHVyaW5nIG5hdmlnYXRpb24uJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFRoZXJlIHNlZW1zIHRvIGJlIGEgYnVnIGluIENocm9tZSByZWdhcmRpbmcgdXBkYXRpbmcgdGhlIHRpdGxlXG4gICAgICAgICAgLy8gSWYgd2Ugc2V0IGEgdGl0bGUganVzdCBiZWZvcmUgY2FsbGluZyBgaGlzdG9yeS5nb2AsIHRoZSB0aXRsZSBnZXRzIGxvc3RcbiAgICAgICAgICAvLyBIb3dldmVyIHRoZSB2YWx1ZSBvZiBgZG9jdW1lbnQudGl0bGVgIGlzIHN0aWxsIHdoYXQgd2Ugc2V0IGl0IHRvXG4gICAgICAgICAgLy8gSXQncyBqdXN0IG5vdCBkaXNwbGF5ZWQgaW4gdGhlIHRhYiBiYXJcbiAgICAgICAgICAvLyBUbyB1cGRhdGUgdGhlIHRhYiBiYXIsIHdlIG5lZWQgdG8gcmVzZXQgdGhlIHRpdGxlIHRvIHNvbWV0aGluZyBlbHNlIGZpcnN0IChlLmcuICcnKVxuICAgICAgICAgIC8vIEFuZCBzZXQgdGhlIHRpdGxlIHRvIHdoYXQgaXQgd2FzIGJlZm9yZSBzbyBpdCBnZXRzIGFwcGxpZWRcbiAgICAgICAgICAvLyBJdCB3b24ndCB3b3JrIHdpdGhvdXQgc2V0dGluZyBpdCB0byBlbXB0eSBzdHJpbmcgY296IG90aGVyd2lzZSB0aXRsZSBpc24ndCBjaGFuZ2luZ1xuICAgICAgICAgIC8vIFdoaWNoIG1lYW5zIHRoYXQgdGhlIGJyb3dzZXIgd29uJ3QgZG8gYW55dGhpbmcgYWZ0ZXIgc2V0dGluZyB0aGUgdGl0bGVcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgIH0gPSB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgICAgICAgd2luZG93LmRvY3VtZW50LnRpdGxlID0gJyc7XG4gICAgICAgICAgd2luZG93LmRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9O1xuICAgICAgICBwZW5kaW5nLnB1c2goe1xuICAgICAgICAgIHJlZjogZG9uZSxcbiAgICAgICAgICBjYjogZG9uZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBJZiBuYXZpZ2F0aW9uIGRpZG4ndCBoYXBwZW4gd2l0aGluIDEwMG1zLCBhc3N1bWUgdGhhdCBpdCB3b24ndCBoYXBwZW5cbiAgICAgICAgLy8gVGhpcyBtYXkgbm90IGJlIGFjY3VyYXRlLCBidXQgaG9wZWZ1bGx5IGl0IHdvbid0IHRha2Ugc28gbXVjaCB0aW1lXG4gICAgICAgIC8vIEluIENocm9tZSwgbmF2aWdhdGlvbiBzZWVtcyB0byBoYXBwZW4gaW5zdGFudGx5IGluIG5leHQgbWljcm90YXNrXG4gICAgICAgIC8vIEJ1dCBvbiBGaXJlZm94LCBpdCBzZWVtcyB0byB0YWtlIG11Y2ggbG9uZ2VyLCBhcm91bmQgNTBtcyBmcm9tIG91ciB0ZXN0aW5nXG4gICAgICAgIC8vIFdlJ3JlIHVzaW5nIGEgaGFja3kgdGltZW91dCBzaW5jZSB0aGVyZSBkb2Vzbid0IHNlZW0gdG8gYmUgd2F5IHRvIGtub3cgZm9yIHN1cmVcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHBlbmRpbmcuZmluZEluZGV4KGl0ID0+IGl0LnJlZiA9PT0gZG9uZSk7XG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHBlbmRpbmdbaW5kZXhdLmNiKCk7XG4gICAgICAgICAgICBwZW5kaW5nLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgICAgICBjb25zdCBvblBvcFN0YXRlID0gKCkgPT4ge1xuICAgICAgICAgIHZhciBfd2luZG93JGhpc3Rvcnkkc3RhdGUzO1xuICAgICAgICAgIGNvbnN0IGlkID0gKF93aW5kb3ckaGlzdG9yeSRzdGF0ZTMgPSB3aW5kb3cuaGlzdG9yeS5zdGF0ZSkgPT09IG51bGwgfHwgX3dpbmRvdyRoaXN0b3J5JHN0YXRlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3dpbmRvdyRoaXN0b3J5JHN0YXRlMy5pZDtcbiAgICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBpdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBpZCk7XG5cbiAgICAgICAgICAvLyBGaXggY3JlYXRlTWVtb3J5SGlzdG9yeS5pbmRleCB2YXJpYWJsZSdzIHZhbHVlXG4gICAgICAgICAgLy8gYXMgaXQgbWF5IGdvIG91dCBvZiBzeW5jIHdoZW4gbmF2aWdhdGluZyBpbiB0aGUgYnJvd3Nlci5cbiAgICAgICAgICBpbmRleCA9IE1hdGgubWF4KGN1cnJlbnRJbmRleCwgMCk7XG4gICAgICAgICAgY29uc3QgbGFzdCA9IHBlbmRpbmcucG9wKCk7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgb25Qb3BTdGF0ZSk7XG4gICAgICAgICAgbGFzdCA9PT0gbnVsbCB8fCBsYXN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXN0LmNiKCk7XG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIG9uUG9wU3RhdGUpO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5nbyhuKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8gVGhlIGBwb3BzdGF0ZWAgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gaGlzdG9yeSBjaGFuZ2VzLCBleGNlcHQgYHB1c2hTdGF0ZWAgYW5kIGByZXBsYWNlU3RhdGVgXG4gICAgLy8gSWYgd2UgY2FsbCBgaGlzdG9yeS5nbyhuKWAgb3Vyc2VsdmVzLCB3ZSBkb24ndCB3YW50IGl0IHRvIHRyaWdnZXIgdGhlIGxpc3RlbmVyXG4gICAgLy8gSGVyZSB3ZSBub3JtYWxpemUgaXQgc28gdGhhdCBvbmx5IGV4dGVybmFsIGNoYW5nZXMgKGUuZy4gdXNlciBwcmVzc2luZyBiYWNrL2ZvcndhcmQpIHRyaWdnZXIgdGhlIGxpc3RlbmVyXG4gICAgbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgICBjb25zdCBvblBvcFN0YXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAocGVuZGluZy5sZW5ndGgpIHtcbiAgICAgICAgICAvLyBUaGlzIHdhcyB0cmlnZ2VyZWQgYnkgYGhpc3RvcnkuZ28obilgLCB3ZSBzaG91bGRuJ3QgY2FsbCB0aGUgbGlzdGVuZXJcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGlzdGVuZXIoKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBvblBvcFN0YXRlKTtcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBvblBvcFN0YXRlKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBoaXN0b3J5O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlTWVtb3J5SGlzdG9yeS5qcy5tYXAiLCJjb25zdCBEZWZhdWx0VGhlbWUgPSB7XG4gIGRhcms6IGZhbHNlLFxuICBjb2xvcnM6IHtcbiAgICBwcmltYXJ5OiAncmdiKDAsIDEyMiwgMjU1KScsXG4gICAgYmFja2dyb3VuZDogJ3JnYigyNDIsIDI0MiwgMjQyKScsXG4gICAgY2FyZDogJ3JnYigyNTUsIDI1NSwgMjU1KScsXG4gICAgdGV4dDogJ3JnYigyOCwgMjgsIDMwKScsXG4gICAgYm9yZGVyOiAncmdiKDIxNiwgMjE2LCAyMTYpJyxcbiAgICBub3RpZmljYXRpb246ICdyZ2IoMjU1LCA1OSwgNDgpJ1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdFRoZW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGVmYXVsdFRoZW1lLmpzLm1hcCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEZWZhdWx0VGhlbWUgZnJvbSAnLi9EZWZhdWx0VGhlbWUnO1xuY29uc3QgVGhlbWVDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoRGVmYXVsdFRoZW1lKTtcblRoZW1lQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdUaGVtZUNvbnRleHQnO1xuZXhwb3J0IGRlZmF1bHQgVGhlbWVDb250ZXh0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGhlbWVDb250ZXh0LmpzLm1hcCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaGVtZUNvbnRleHQgZnJvbSAnLi9UaGVtZUNvbnRleHQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhlbWVQcm92aWRlcihfcmVmKSB7XG4gIGxldCB7XG4gICAgdmFsdWUsXG4gICAgY2hpbGRyZW5cbiAgfSA9IF9yZWY7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUaGVtZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSwgY2hpbGRyZW4pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGhlbWVQcm92aWRlci5qcy5tYXAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VCYWNrQnV0dG9uKF8pIHtcbiAgLy8gTm8tb3BcbiAgLy8gQmFja0hhbmRsZXIgaXMgbm90IGF2YWlsYWJsZSBvbiB3ZWJcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZUJhY2tCdXR0b24uanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBTZXQgdGhlIGRvY3VtZW50IHRpdGxlIGZvciB0aGUgYWN0aXZlIHNjcmVlblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VEb2N1bWVudFRpdGxlKHJlZikge1xuICBsZXQge1xuICAgIGVuYWJsZWQgPSB0cnVlLFxuICAgIGZvcm1hdHRlciA9IChvcHRpb25zLCByb3V0ZSkgPT4gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy50aXRsZSkgPz8gKHJvdXRlID09PSBudWxsIHx8IHJvdXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByb3V0ZS5uYW1lKVxuICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWVuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IHJlZi5jdXJyZW50O1xuICAgIGlmIChuYXZpZ2F0aW9uKSB7XG4gICAgICBjb25zdCB0aXRsZSA9IGZvcm1hdHRlcihuYXZpZ2F0aW9uLmdldEN1cnJlbnRPcHRpb25zKCksIG5hdmlnYXRpb24uZ2V0Q3VycmVudFJvdXRlKCkpO1xuICAgICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcbiAgICB9XG4gICAgcmV0dXJuIG5hdmlnYXRpb24gPT09IG51bGwgfHwgbmF2aWdhdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmF2aWdhdGlvbi5hZGRMaXN0ZW5lcignb3B0aW9ucycsIGUgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSBmb3JtYXR0ZXIoZS5kYXRhLm9wdGlvbnMsIG5hdmlnYXRpb24gPT09IG51bGwgfHwgbmF2aWdhdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmF2aWdhdGlvbi5nZXRDdXJyZW50Um91dGUoKSk7XG4gICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICAgIH0pO1xuICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZURvY3VtZW50VGl0bGUuanMubWFwIiwiaW1wb3J0IHsgZmluZEZvY3VzZWRSb3V0ZSwgZ2V0QWN0aW9uRnJvbVN0YXRlIGFzIGdldEFjdGlvbkZyb21TdGF0ZURlZmF1bHQsIGdldFBhdGhGcm9tU3RhdGUgYXMgZ2V0UGF0aEZyb21TdGF0ZURlZmF1bHQsIGdldFN0YXRlRnJvbVBhdGggYXMgZ2V0U3RhdGVGcm9tUGF0aERlZmF1bHQgfSBmcm9tICdAcmVhY3QtbmF2aWdhdGlvbi9jb3JlJztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlTWVtb3J5SGlzdG9yeSBmcm9tICcuL2NyZWF0ZU1lbW9yeUhpc3RvcnknO1xuaW1wb3J0IFNlcnZlckNvbnRleHQgZnJvbSAnLi9TZXJ2ZXJDb250ZXh0Jztcbi8qKlxuICogRmluZCB0aGUgbWF0Y2hpbmcgbmF2aWdhdGlvbiBzdGF0ZSB0aGF0IGNoYW5nZWQgYmV0d2VlbiAyIG5hdmlnYXRpb24gc3RhdGVzXG4gKiBlLmcuOiBhIC0+IGIgLT4gYyAtPiBkIGFuZCBhIC0+IGIgLT4gYyAtPiBlIC0+IGYsIGlmIGhpc3RvcnkgaW4gYiBjaGFuZ2VkLCBiIGlzIHRoZSBtYXRjaGluZyBzdGF0ZVxuICovXG5jb25zdCBmaW5kTWF0Y2hpbmdTdGF0ZSA9IChhLCBiKSA9PiB7XG4gIGlmIChhID09PSB1bmRlZmluZWQgfHwgYiA9PT0gdW5kZWZpbmVkIHx8IGEua2V5ICE9PSBiLmtleSkge1xuICAgIHJldHVybiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdO1xuICB9XG5cbiAgLy8gVGFiIGFuZCBkcmF3ZXIgd2lsbCBoYXZlIGBoaXN0b3J5YCBwcm9wZXJ0eSwgYnV0IHN0YWNrIHdpbGwgaGF2ZSBoaXN0b3J5IGluIGByb3V0ZXNgXG4gIGNvbnN0IGFIaXN0b3J5TGVuZ3RoID0gYS5oaXN0b3J5ID8gYS5oaXN0b3J5Lmxlbmd0aCA6IGEucm91dGVzLmxlbmd0aDtcbiAgY29uc3QgYkhpc3RvcnlMZW5ndGggPSBiLmhpc3RvcnkgPyBiLmhpc3RvcnkubGVuZ3RoIDogYi5yb3V0ZXMubGVuZ3RoO1xuICBjb25zdCBhUm91dGUgPSBhLnJvdXRlc1thLmluZGV4XTtcbiAgY29uc3QgYlJvdXRlID0gYi5yb3V0ZXNbYi5pbmRleF07XG4gIGNvbnN0IGFDaGlsZFN0YXRlID0gYVJvdXRlLnN0YXRlO1xuICBjb25zdCBiQ2hpbGRTdGF0ZSA9IGJSb3V0ZS5zdGF0ZTtcblxuICAvLyBTdG9wIGhlcmUgaWYgdGhpcyBpcyB0aGUgc3RhdGUgb2JqZWN0IHRoYXQgY2hhbmdlZDpcbiAgLy8gLSBoaXN0b3J5IGxlbmd0aCBpcyBkaWZmZXJlbnRcbiAgLy8gLSBmb2N1c2VkIHJvdXRlcyBhcmUgZGlmZmVyZW50XG4gIC8vIC0gb25lIG9mIHRoZW0gZG9lc24ndCBoYXZlIGNoaWxkIHN0YXRlXG4gIC8vIC0gY2hpbGQgc3RhdGUga2V5cyBhcmUgZGlmZmVyZW50XG4gIGlmIChhSGlzdG9yeUxlbmd0aCAhPT0gYkhpc3RvcnlMZW5ndGggfHwgYVJvdXRlLmtleSAhPT0gYlJvdXRlLmtleSB8fCBhQ2hpbGRTdGF0ZSA9PT0gdW5kZWZpbmVkIHx8IGJDaGlsZFN0YXRlID09PSB1bmRlZmluZWQgfHwgYUNoaWxkU3RhdGUua2V5ICE9PSBiQ2hpbGRTdGF0ZS5rZXkpIHtcbiAgICByZXR1cm4gW2EsIGJdO1xuICB9XG4gIHJldHVybiBmaW5kTWF0Y2hpbmdTdGF0ZShhQ2hpbGRTdGF0ZSwgYkNoaWxkU3RhdGUpO1xufTtcblxuLyoqXG4gKiBSdW4gYXN5bmMgZnVuY3Rpb24gaW4gc2VyaWVzIGFzIGl0J3MgY2FsbGVkLlxuICovXG5leHBvcnQgY29uc3Qgc2VyaWVzID0gY2IgPT4ge1xuICBsZXQgcXVldWUgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgcXVldWUgPSBxdWV1ZS50aGVuKGNiKTtcbiAgfTtcbiAgcmV0dXJuIGNhbGxiYWNrO1xufTtcbmxldCBsaW5raW5nSGFuZGxlcnMgPSBbXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUxpbmtpbmcocmVmLCBfcmVmKSB7XG4gIGxldCB7XG4gICAgaW5kZXBlbmRlbnQsXG4gICAgZW5hYmxlZCA9IHRydWUsXG4gICAgY29uZmlnLFxuICAgIGdldFN0YXRlRnJvbVBhdGggPSBnZXRTdGF0ZUZyb21QYXRoRGVmYXVsdCxcbiAgICBnZXRQYXRoRnJvbVN0YXRlID0gZ2V0UGF0aEZyb21TdGF0ZURlZmF1bHQsXG4gICAgZ2V0QWN0aW9uRnJvbVN0YXRlID0gZ2V0QWN0aW9uRnJvbVN0YXRlRGVmYXVsdFxuICB9ID0gX3JlZjtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKGluZGVwZW5kZW50KSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoZW5hYmxlZCAhPT0gZmFsc2UgJiYgbGlua2luZ0hhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgY29uc29sZS5lcnJvcihbJ0xvb2tzIGxpa2UgeW91IGhhdmUgY29uZmlndXJlZCBsaW5raW5nIGluIG11bHRpcGxlIHBsYWNlcy4gVGhpcyBpcyBsaWtlbHkgYW4gZXJyb3Igc2luY2UgZGVlcCBsaW5rcyBzaG91bGQgb25seSBiZSBoYW5kbGVkIGluIG9uZSBwbGFjZSB0byBhdm9pZCBjb25mbGljdHMuIE1ha2Ugc3VyZSB0aGF0OicsIFwiLSBZb3UgZG9uJ3QgaGF2ZSBtdWx0aXBsZSBOYXZpZ2F0aW9uQ29udGFpbmVycyBpbiB0aGUgYXBwIGVhY2ggd2l0aCAnbGlua2luZycgZW5hYmxlZFwiLCAnLSBPbmx5IGEgc2luZ2xlIGluc3RhbmNlIG9mIHRoZSByb290IGNvbXBvbmVudCBpcyByZW5kZXJlZCddLmpvaW4oJ1xcbicpLnRyaW0oKSk7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZXIgPSBTeW1ib2woKTtcbiAgICBpZiAoZW5hYmxlZCAhPT0gZmFsc2UpIHtcbiAgICAgIGxpbmtpbmdIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBsaW5raW5nSGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGxpbmtpbmdIYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtlbmFibGVkLCBpbmRlcGVuZGVudF0pO1xuICBjb25zdCBbaGlzdG9yeV0gPSBSZWFjdC51c2VTdGF0ZShjcmVhdGVNZW1vcnlIaXN0b3J5KTtcblxuICAvLyBXZSBzdG9yZSB0aGVzZSBvcHRpb25zIGluIHJlZiB0byBhdm9pZCByZS1jcmVhdGluZyBnZXRJbml0aWFsU3RhdGUgYW5kIHJlLXN1YnNjcmliaW5nIGxpc3RlbmVyc1xuICAvLyBUaGlzIGxldHMgdXNlciBhdm9pZCB3cmFwcGluZyB0aGUgaXRlbXMgaW4gYFJlYWN0LnVzZUNhbGxiYWNrYCBvciBgUmVhY3QudXNlTWVtb2BcbiAgLy8gTm90IHJlLWNyZWF0aW5nIGBnZXRJbml0aWFsU3RhdGVgIGlzIGltcG9ydGFudCBjb3ogaXQgbWFrZXMgaXQgZWFzaWVyIGZvciB0aGUgdXNlciB0byB1c2UgaW4gYW4gZWZmZWN0XG4gIGNvbnN0IGVuYWJsZWRSZWYgPSBSZWFjdC51c2VSZWYoZW5hYmxlZCk7XG4gIGNvbnN0IGNvbmZpZ1JlZiA9IFJlYWN0LnVzZVJlZihjb25maWcpO1xuICBjb25zdCBnZXRTdGF0ZUZyb21QYXRoUmVmID0gUmVhY3QudXNlUmVmKGdldFN0YXRlRnJvbVBhdGgpO1xuICBjb25zdCBnZXRQYXRoRnJvbVN0YXRlUmVmID0gUmVhY3QudXNlUmVmKGdldFBhdGhGcm9tU3RhdGUpO1xuICBjb25zdCBnZXRBY3Rpb25Gcm9tU3RhdGVSZWYgPSBSZWFjdC51c2VSZWYoZ2V0QWN0aW9uRnJvbVN0YXRlKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBlbmFibGVkUmVmLmN1cnJlbnQgPSBlbmFibGVkO1xuICAgIGNvbmZpZ1JlZi5jdXJyZW50ID0gY29uZmlnO1xuICAgIGdldFN0YXRlRnJvbVBhdGhSZWYuY3VycmVudCA9IGdldFN0YXRlRnJvbVBhdGg7XG4gICAgZ2V0UGF0aEZyb21TdGF0ZVJlZi5jdXJyZW50ID0gZ2V0UGF0aEZyb21TdGF0ZTtcbiAgICBnZXRBY3Rpb25Gcm9tU3RhdGVSZWYuY3VycmVudCA9IGdldEFjdGlvbkZyb21TdGF0ZTtcbiAgfSk7XG4gIGNvbnN0IHNlcnZlciA9IFJlYWN0LnVzZUNvbnRleHQoU2VydmVyQ29udGV4dCk7XG4gIGNvbnN0IGdldEluaXRpYWxTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGVuYWJsZWRSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgbG9jYXRpb24gPSAoc2VydmVyID09PSBudWxsIHx8IHNlcnZlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VydmVyLmxvY2F0aW9uKSA/PyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubG9jYXRpb24gOiB1bmRlZmluZWQpO1xuICAgICAgY29uc3QgcGF0aCA9IGxvY2F0aW9uID8gbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2ggOiB1bmRlZmluZWQ7XG4gICAgICBpZiAocGF0aCkge1xuICAgICAgICB2YWx1ZSA9IGdldFN0YXRlRnJvbVBhdGhSZWYuY3VycmVudChwYXRoLCBjb25maWdSZWYuY3VycmVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRoZW5hYmxlID0ge1xuICAgICAgdGhlbihvbmZ1bGZpbGxlZCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG9uZnVsZmlsbGVkID8gb25mdWxmaWxsZWQodmFsdWUpIDogdmFsdWUpO1xuICAgICAgfSxcbiAgICAgIGNhdGNoKCkge1xuICAgICAgICByZXR1cm4gdGhlbmFibGU7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gdGhlbmFibGU7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbXSk7XG4gIGNvbnN0IHByZXZpb3VzSW5kZXhSZWYgPSBSZWFjdC51c2VSZWYodW5kZWZpbmVkKTtcbiAgY29uc3QgcHJldmlvdXNTdGF0ZVJlZiA9IFJlYWN0LnVzZVJlZih1bmRlZmluZWQpO1xuICBjb25zdCBwZW5kaW5nUG9wU3RhdGVQYXRoUmVmID0gUmVhY3QudXNlUmVmKHVuZGVmaW5lZCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJldmlvdXNJbmRleFJlZi5jdXJyZW50ID0gaGlzdG9yeS5pbmRleDtcbiAgICByZXR1cm4gaGlzdG9yeS5saXN0ZW4oKCkgPT4ge1xuICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IHJlZi5jdXJyZW50O1xuICAgICAgaWYgKCFuYXZpZ2F0aW9uIHx8ICFlbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbG9jYXRpb25cbiAgICAgIH0gPSB3aW5kb3c7XG4gICAgICBjb25zdCBwYXRoID0gbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2g7XG4gICAgICBjb25zdCBpbmRleCA9IGhpc3RvcnkuaW5kZXg7XG4gICAgICBjb25zdCBwcmV2aW91c0luZGV4ID0gcHJldmlvdXNJbmRleFJlZi5jdXJyZW50ID8/IDA7XG4gICAgICBwcmV2aW91c0luZGV4UmVmLmN1cnJlbnQgPSBpbmRleDtcbiAgICAgIHBlbmRpbmdQb3BTdGF0ZVBhdGhSZWYuY3VycmVudCA9IHBhdGg7XG5cbiAgICAgIC8vIFdoZW4gYnJvd3NlciBiYWNrL2ZvcndhcmQgaXMgY2xpY2tlZCwgd2UgZmlyc3QgbmVlZCB0byBjaGVjayBpZiBzdGF0ZSBvYmplY3QgZm9yIHRoaXMgaW5kZXggZXhpc3RzXG4gICAgICAvLyBJZiBpdCBkb2VzIHdlJ2xsIHJlc2V0IHRvIHRoYXQgc3RhdGUgb2JqZWN0XG4gICAgICAvLyBPdGhlcndpc2UsIHdlJ2xsIGhhbmRsZSBpdCBsaWtlIGEgcmVndWxhciBkZWVwIGxpbmtcbiAgICAgIGNvbnN0IHJlY29yZCA9IGhpc3RvcnkuZ2V0KGluZGV4KTtcbiAgICAgIGlmICgocmVjb3JkID09PSBudWxsIHx8IHJlY29yZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVjb3JkLnBhdGgpID09PSBwYXRoICYmIHJlY29yZCAhPT0gbnVsbCAmJiByZWNvcmQgIT09IHZvaWQgMCAmJiByZWNvcmQuc3RhdGUpIHtcbiAgICAgICAgbmF2aWdhdGlvbi5yZXNldFJvb3QocmVjb3JkLnN0YXRlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZUZyb21QYXRoUmVmLmN1cnJlbnQocGF0aCwgY29uZmlnUmVmLmN1cnJlbnQpO1xuXG4gICAgICAvLyBXZSBzaG91bGQgb25seSBkaXNwYXRjaCBhbiBhY3Rpb24gd2hlbiBnb2luZyBmb3J3YXJkXG4gICAgICAvLyBPdGhlcndpc2UgdGhlIGFjdGlvbiB3aWxsIGxpa2VseSBhZGQgaXRlbXMgdG8gaGlzdG9yeSwgd2hpY2ggd291bGQgbWVzcyB0aGluZ3MgdXBcbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcm91dGVzIGluIHRoZSBzdGF0ZSBleGlzdCBpbiB0aGUgcm9vdCBuYXZpZ2F0b3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlIHRoZXJlJ3MgYW4gZXJyb3IgaW4gdGhlIGxpbmtpbmcgY29uZmlndXJhdGlvblxuICAgICAgICBjb25zdCByb290U3RhdGUgPSBuYXZpZ2F0aW9uLmdldFJvb3RTdGF0ZSgpO1xuICAgICAgICBpZiAoc3RhdGUucm91dGVzLnNvbWUociA9PiAhKHJvb3RTdGF0ZSAhPT0gbnVsbCAmJiByb290U3RhdGUgIT09IHZvaWQgMCAmJiByb290U3RhdGUucm91dGVOYW1lcy5pbmNsdWRlcyhyLm5hbWUpKSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJUaGUgbmF2aWdhdGlvbiBzdGF0ZSBwYXJzZWQgZnJvbSB0aGUgVVJMIGNvbnRhaW5zIHJvdXRlcyBub3QgcHJlc2VudCBpbiB0aGUgcm9vdCBuYXZpZ2F0b3IuIFRoaXMgdXN1YWxseSBtZWFucyB0aGF0IHRoZSBsaW5raW5nIGNvbmZpZ3VyYXRpb24gZG9lc24ndCBtYXRjaCB0aGUgbmF2aWdhdGlvbiBzdHJ1Y3R1cmUuIFNlZSBodHRwczovL3JlYWN0bmF2aWdhdGlvbi5vcmcvZG9jcy9jb25maWd1cmluZy1saW5rcyBmb3IgbW9yZSBkZXRhaWxzIG9uIGhvdyB0byBzcGVjaWZ5IGEgbGlua2luZyBjb25maWd1cmF0aW9uLlwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID4gcHJldmlvdXNJbmRleCkge1xuICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGdldEFjdGlvbkZyb21TdGF0ZVJlZi5jdXJyZW50KHN0YXRlLCBjb25maWdSZWYuY3VycmVudCk7XG4gICAgICAgICAgaWYgKGFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBuYXZpZ2F0aW9uLmRpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIC8vIElnbm9yZSBhbnkgZXJyb3JzIGZyb20gZGVlcCBsaW5raW5nLlxuICAgICAgICAgICAgICAvLyBUaGlzIGNvdWxkIGhhcHBlbiBpbiBjYXNlIG9mIG1hbGZvcm1lZCBsaW5rcywgbmF2aWdhdGlvbiBvYmplY3Qgbm90IGJlaW5nIGluaXRpYWxpemVkIGV0Yy5cbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBBbiBlcnJvciBvY2N1cnJlZCB3aGVuIHRyeWluZyB0byBoYW5kbGUgdGhlIGxpbmsgJyR7cGF0aH0nOiAke3R5cGVvZiBlID09PSAnb2JqZWN0JyAmJiBlICE9IG51bGwgJiYgJ21lc3NhZ2UnIGluIGUgPyBlLm1lc3NhZ2UgOiBlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLnJlc2V0Um9vdChzdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hdmlnYXRpb24ucmVzZXRSb290KHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgY3VycmVudCBwYXRoIGRpZG4ndCByZXR1cm4gYW55IHN0YXRlLCB3ZSBzaG91bGQgcmV2ZXJ0IHRvIGluaXRpYWwgc3RhdGVcbiAgICAgICAgbmF2aWdhdGlvbi5yZXNldFJvb3Qoc3RhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbZW5hYmxlZCwgaGlzdG9yeSwgcmVmXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIF9yZWYkY3VycmVudDtcbiAgICBpZiAoIWVuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZ2V0UGF0aEZvclJvdXRlID0gKHJvdXRlLCBzdGF0ZSkgPT4ge1xuICAgICAgLy8gSWYgdGhlIGByb3V0ZWAgb2JqZWN0IGNvbnRhaW5zIGEgYHBhdGhgLCB1c2UgdGhhdCBwYXRoIGFzIGxvbmcgYXMgYHJvdXRlLm5hbWVgIGFuZCBgcGFyYW1zYCBzdGlsbCBtYXRjaFxuICAgICAgLy8gVGhpcyBtYWtlcyBzdXJlIHRoYXQgd2UgcHJlc2VydmUgdGhlIG9yaWdpbmFsIFVSTCBmb3Igd2lsZGNhcmQgcm91dGVzXG4gICAgICBpZiAocm91dGUgIT09IG51bGwgJiYgcm91dGUgIT09IHZvaWQgMCAmJiByb3V0ZS5wYXRoKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlRm9yUGF0aCA9IGdldFN0YXRlRnJvbVBhdGhSZWYuY3VycmVudChyb3V0ZS5wYXRoLCBjb25maWdSZWYuY3VycmVudCk7XG4gICAgICAgIGlmIChzdGF0ZUZvclBhdGgpIHtcbiAgICAgICAgICBjb25zdCBmb2N1c2VkUm91dGUgPSBmaW5kRm9jdXNlZFJvdXRlKHN0YXRlRm9yUGF0aCk7XG4gICAgICAgICAgaWYgKGZvY3VzZWRSb3V0ZSAmJiBmb2N1c2VkUm91dGUubmFtZSA9PT0gcm91dGUubmFtZSAmJiBpc0VxdWFsKGZvY3VzZWRSb3V0ZS5wYXJhbXMsIHJvdXRlLnBhcmFtcykpIHtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZS5wYXRoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldFBhdGhGcm9tU3RhdGVSZWYuY3VycmVudChzdGF0ZSwgY29uZmlnUmVmLmN1cnJlbnQpO1xuICAgIH07XG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIHJlY29yZCB0aGUgY3VycmVudCBtZXRhZGF0YSBvbiB0aGUgZmlyc3QgcmVuZGVyIGlmIHRoZXkgYXJlbid0IHNldFxuICAgICAgLy8gVGhpcyB3aWxsIGFsbG93IHRoZSBpbml0aWFsIHN0YXRlIHRvIGJlIGluIHRoZSBoaXN0b3J5IGVudHJ5XG4gICAgICBjb25zdCBzdGF0ZSA9IHJlZi5jdXJyZW50LmdldFJvb3RTdGF0ZSgpO1xuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlID0gZmluZEZvY3VzZWRSb3V0ZShzdGF0ZSk7XG4gICAgICAgIGNvbnN0IHBhdGggPSBnZXRQYXRoRm9yUm91dGUocm91dGUsIHN0YXRlKTtcbiAgICAgICAgaWYgKHByZXZpb3VzU3RhdGVSZWYuY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJldmlvdXNTdGF0ZVJlZi5jdXJyZW50ID0gc3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlKHtcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHN0YXRlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBvblN0YXRlQ2hhbmdlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IHJlZi5jdXJyZW50O1xuICAgICAgaWYgKCFuYXZpZ2F0aW9uIHx8ICFlbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByZXZpb3VzU3RhdGUgPSBwcmV2aW91c1N0YXRlUmVmLmN1cnJlbnQ7XG4gICAgICBjb25zdCBzdGF0ZSA9IG5hdmlnYXRpb24uZ2V0Um9vdFN0YXRlKCk7XG5cbiAgICAgIC8vIHJvb3Qgc3RhdGUgbWF5IG5vdCBhdmFpbGFibGUsIGZvciBleGFtcGxlIHdoZW4gcm9vdCBuYXZpZ2F0b3JzIHN3aXRjaCBpbnNpZGUgdGhlIGNvbnRhaW5lclxuICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwZW5kaW5nUGF0aCA9IHBlbmRpbmdQb3BTdGF0ZVBhdGhSZWYuY3VycmVudDtcbiAgICAgIGNvbnN0IHJvdXRlID0gZmluZEZvY3VzZWRSb3V0ZShzdGF0ZSk7XG4gICAgICBjb25zdCBwYXRoID0gZ2V0UGF0aEZvclJvdXRlKHJvdXRlLCBzdGF0ZSk7XG4gICAgICBwcmV2aW91c1N0YXRlUmVmLmN1cnJlbnQgPSBzdGF0ZTtcbiAgICAgIHBlbmRpbmdQb3BTdGF0ZVBhdGhSZWYuY3VycmVudCA9IHVuZGVmaW5lZDtcblxuICAgICAgLy8gVG8gZGV0ZWN0IHRoZSBraW5kIG9mIHN0YXRlIGNoYW5nZSwgd2UgbmVlZCB0bzpcbiAgICAgIC8vIC0gRmluZCB0aGUgY29tbW9uIGZvY3VzZWQgbmF2aWdhdGlvbiBzdGF0ZSBpbiBwcmV2aW91cyBhbmQgY3VycmVudCBzdGF0ZVxuICAgICAgLy8gLSBJZiBvbmx5IHRoZSByb3V0ZSBrZXlzIGNoYW5nZWQsIGNvbXBhcmUgaGlzdG9yeS9yb3V0ZXMubGVuZ3RoIHRvIGNoZWNrIGlmIHdlIGdvIGJhY2svZm9yd2FyZC9yZXBsYWNlXG4gICAgICAvLyAtIElmIG5vIGNvbW1vbiBmb2N1c2VkIG5hdmlnYXRpb24gc3RhdGUgZm91bmQsIGl0J3MgYSByZXBsYWNlXG4gICAgICBjb25zdCBbcHJldmlvdXNGb2N1c2VkU3RhdGUsIGZvY3VzZWRTdGF0ZV0gPSBmaW5kTWF0Y2hpbmdTdGF0ZShwcmV2aW91c1N0YXRlLCBzdGF0ZSk7XG4gICAgICBpZiAocHJldmlvdXNGb2N1c2VkU3RhdGUgJiYgZm9jdXNlZFN0YXRlICYmXG4gICAgICAvLyBXZSBzaG91bGQgb25seSBoYW5kbGUgcHVzaC9wb3AgaWYgcGF0aCBjaGFuZ2VkIGZyb20gd2hhdCB3YXMgaW4gbGFzdCBgcG9wc3RhdGVgXG4gICAgICAvLyBPdGhlcndpc2UgaXQncyBsaWtlbHkgYSBjaGFuZ2UgdHJpZ2dlcmVkIGJ5IGBwb3BzdGF0ZWBcbiAgICAgIHBhdGggIT09IHBlbmRpbmdQYXRoKSB7XG4gICAgICAgIGNvbnN0IGhpc3RvcnlEZWx0YSA9IChmb2N1c2VkU3RhdGUuaGlzdG9yeSA/IGZvY3VzZWRTdGF0ZS5oaXN0b3J5Lmxlbmd0aCA6IGZvY3VzZWRTdGF0ZS5yb3V0ZXMubGVuZ3RoKSAtIChwcmV2aW91c0ZvY3VzZWRTdGF0ZS5oaXN0b3J5ID8gcHJldmlvdXNGb2N1c2VkU3RhdGUuaGlzdG9yeS5sZW5ndGggOiBwcmV2aW91c0ZvY3VzZWRTdGF0ZS5yb3V0ZXMubGVuZ3RoKTtcbiAgICAgICAgaWYgKGhpc3RvcnlEZWx0YSA+IDApIHtcbiAgICAgICAgICAvLyBJZiBoaXN0b3J5IGxlbmd0aCBpcyBpbmNyZWFzZWQsIHdlIHNob3VsZCBwdXNoU3RhdGVcbiAgICAgICAgICAvLyBOb3RlIHRoYXQgcGF0aCBtaWdodCBub3QgYWN0dWFsbHkgY2hhbmdlIGhlcmUsIGZvciBleGFtcGxlLCBkcmF3ZXIgb3BlbiBzaG91bGQgcHVzaFN0YXRlXG4gICAgICAgICAgaGlzdG9yeS5wdXNoKHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBzdGF0ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGhpc3RvcnlEZWx0YSA8IDApIHtcbiAgICAgICAgICAvLyBJZiBoaXN0b3J5IGxlbmd0aCBpcyBkZWNyZWFzZWQsIGkuZS4gZW50cmllcyB3ZXJlIHJlbW92ZWQsIHdlIHdhbnQgdG8gZ28gYmFja1xuXG4gICAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gaGlzdG9yeS5iYWNrSW5kZXgoe1xuICAgICAgICAgICAgcGF0aFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGhpc3RvcnkuaW5kZXg7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChuZXh0SW5kZXggIT09IC0xICYmIG5leHRJbmRleCA8IGN1cnJlbnRJbmRleCAmJlxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgZ28gYmFjayBpZiB0aGUgZW50cnkgZXhpc3RzIGFuZCBpdCdzIGxlc3MgdGhhbiBjdXJyZW50IGluZGV4XG4gICAgICAgICAgICBoaXN0b3J5LmdldChuZXh0SW5kZXggLSBjdXJyZW50SW5kZXgpKSB7XG4gICAgICAgICAgICAgIC8vIEFuIGV4aXN0aW5nIGVudHJ5IGZvciB0aGlzIHBhdGggZXhpc3RzIGFuZCBpdCdzIGxlc3MgdGhhbiBjdXJyZW50IGluZGV4LCBnbyBiYWNrIHRvIHRoYXRcbiAgICAgICAgICAgICAgYXdhaXQgaGlzdG9yeS5nbyhuZXh0SW5kZXggLSBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gV2UgY291bGRuJ3QgZmluZCBhbiBleGlzdGluZyBlbnRyeSB0byBnbyBiYWNrIHRvLCBzbyB3ZSdsbCBnbyBiYWNrIGJ5IHRoZSBkZWx0YVxuICAgICAgICAgICAgICAvLyBUaGlzIHdvbid0IGJlIGNvcnJlY3QgaWYgbXVsdGlwbGUgcm91dGVzIHdlcmUgcHVzaGVkIGluIG9uZSBnbyBiZWZvcmVcbiAgICAgICAgICAgICAgLy8gVXN1YWxseSB0aGlzIHNob3VsZG4ndCBoYXBwZW4gYW5kIHRoaXMgaXMgYSBmYWxsYmFjayBmb3IgdGhhdFxuICAgICAgICAgICAgICBhd2FpdCBoaXN0b3J5LmdvKGhpc3RvcnlEZWx0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSB1cGRhdGVkIHN0YXRlIGFzIHdlbGwgYXMgZml4IHRoZSBwYXRoIGlmIGluY29ycmVjdFxuICAgICAgICAgICAgaGlzdG9yeS5yZXBsYWNlKHtcbiAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgc3RhdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFRoZSBuYXZpZ2F0aW9uIHdhcyBpbnRlcnJ1cHRlZFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBJZiBoaXN0b3J5IGxlbmd0aCBpcyB1bmNoYW5nZWQsIHdlIHdhbnQgdG8gcmVwbGFjZVN0YXRlXG4gICAgICAgICAgaGlzdG9yeS5yZXBsYWNlKHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBzdGF0ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiBubyBjb21tb24gbmF2aWdhdGlvbiBzdGF0ZSB3YXMgZm91bmQsIGFzc3VtZSBpdCdzIGEgcmVwbGFjZVxuICAgICAgICAvLyBUaGlzIHdvdWxkIGhhcHBlbiBpZiB0aGUgdXNlciBkaWQgYSByZXNldC9jb25kaXRpb25hbGx5IGNoYW5nZWQgbmF2aWdhdG9yc1xuICAgICAgICBoaXN0b3J5LnJlcGxhY2Uoe1xuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgc3RhdGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFdlIGRlYm91bmNlIG9uU3RhdGVDaGFuZ2UgY296IHdlIGRvbid0IHdhbnQgbXVsdGlwbGUgc3RhdGUgY2hhbmdlcyB0byBiZSBoYW5kbGVkIGF0IG9uZSB0aW1lXG4gICAgLy8gVGhpcyBjb3VsZCBoYXBwZW4gc2luY2UgYGhpc3RvcnkuZ28obilgIGlzIGFzeW5jaHJvbm91c1xuICAgIC8vIElmIGBwdXNoU3RhdGVgIG9yIGByZXBsYWNlU3RhdGVgIHdlcmUgY2FsbGVkIGJlZm9yZSBgaGlzdG9yeS5nbyhuKWAgY29tcGxldGVzLCBpdCdsbCBtZXNzIHN0dWZmIHVwXG4gICAgcmV0dXJuIChfcmVmJGN1cnJlbnQgPSByZWYuY3VycmVudCkgPT09IG51bGwgfHwgX3JlZiRjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcmVmJGN1cnJlbnQuYWRkTGlzdGVuZXIoJ3N0YXRlJywgc2VyaWVzKG9uU3RhdGVDaGFuZ2UpKTtcbiAgfSwgW2VuYWJsZWQsIGhpc3RvcnksIHJlZl0pO1xuICByZXR1cm4ge1xuICAgIGdldEluaXRpYWxTdGF0ZVxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlTGlua2luZy5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VUaGVuYWJsZShjcmVhdGUpIHtcbiAgY29uc3QgW3Byb21pc2VdID0gUmVhY3QudXNlU3RhdGUoY3JlYXRlKTtcbiAgbGV0IGluaXRpYWxTdGF0ZSA9IFtmYWxzZSwgdW5kZWZpbmVkXTtcblxuICAvLyBDaGVjayBpZiBvdXIgdGhlbmFibGUgaXMgc3luY2hyb25vdXNcbiAgcHJvbWlzZS50aGVuKHJlc3VsdCA9PiB7XG4gICAgaW5pdGlhbFN0YXRlID0gW3RydWUsIHJlc3VsdF07XG4gIH0pO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IFtyZXNvbHZlZF0gPSBzdGF0ZTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgY29uc3QgcmVzb2x2ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGxldCByZXN1bHQ7XG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBhd2FpdCBwcm9taXNlO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICBzZXRTdGF0ZShbdHJ1ZSwgcmVzdWx0XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgfTtcbiAgfSwgW3Byb21pc2UsIHJlc29sdmVkXSk7XG4gIHJldHVybiBzdGF0ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZVRoZW5hYmxlLmpzLm1hcCIsImltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZC9ub24tc2VjdXJlJztcblxuLyoqXG4gKiBCYXNlIHJvdXRlciBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB3aGVuIHdyaXRpbmcgY3VzdG9tIHJvdXRlcnMuXG4gKiBUaGlzIHByb3ZpZGVzIGZldyBoZWxwZXIgbWV0aG9kcyB0byBoYW5kbGUgY29tbW9uIGFjdGlvbnMgc3VjaCBhcyBgUkVTRVRgLlxuICovXG5jb25zdCBCYXNlUm91dGVyID0ge1xuICBnZXRTdGF0ZUZvckFjdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnU0VUX1BBUkFNUyc6XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IGFjdGlvbi5zb3VyY2UgPyBzdGF0ZS5yb3V0ZXMuZmluZEluZGV4KHIgPT4gci5rZXkgPT09IGFjdGlvbi5zb3VyY2UpIDogc3RhdGUuaW5kZXg7XG5cbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHJvdXRlczogc3RhdGUucm91dGVzLm1hcCgociwgaSkgPT4gaSA9PT0gaW5kZXggPyB7IC4uLnIsXG4gICAgICAgICAgICAgIHBhcmFtczogeyAuLi5yLnBhcmFtcyxcbiAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5wYXJhbXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSA6IHIpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdSRVNFVCc6XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgICAgIGlmIChuZXh0U3RhdGUucm91dGVzLmxlbmd0aCA9PT0gMCB8fCBuZXh0U3RhdGUucm91dGVzLnNvbWUocm91dGUgPT4gIXN0YXRlLnJvdXRlTmFtZXMuaW5jbHVkZXMocm91dGUubmFtZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobmV4dFN0YXRlLnN0YWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnJvdXRlTmFtZXMubGVuZ3RoICE9PSBuZXh0U3RhdGUucm91dGVOYW1lcy5sZW5ndGggfHwgbmV4dFN0YXRlLnJvdXRlTmFtZXMuc29tZShuYW1lID0+ICFzdGF0ZS5yb3V0ZU5hbWVzLmluY2x1ZGVzKG5hbWUpKSkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHsgLi4ubmV4dFN0YXRlLFxuICAgICAgICAgICAgICByb3V0ZXM6IG5leHRTdGF0ZS5yb3V0ZXMubWFwKHJvdXRlID0+IHJvdXRlLmtleSA/IHJvdXRlIDogeyAuLi5yb3V0ZSxcbiAgICAgICAgICAgICAgICBrZXk6IFwiXCIuY29uY2F0KHJvdXRlLm5hbWUsIFwiLVwiKS5jb25jYXQobmFub2lkKCkpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LFxuXG4gIHNob3VsZEFjdGlvbkNoYW5nZUZvY3VzKGFjdGlvbikge1xuICAgIHJldHVybiBhY3Rpb24udHlwZSA9PT0gJ05BVklHQVRFJztcbiAgfVxuXG59O1xuZXhwb3J0IGRlZmF1bHQgQmFzZVJvdXRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhc2VSb3V0ZXIuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnR09fQkFDSydcbiAgfTtcbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZSguLi5hcmdzKSB7XG4gIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ05BVklHQVRFJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgbmFtZTogYXJnc1swXSxcbiAgICAgICAgcGFyYW1zOiBhcmdzWzFdXG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXlsb2FkID0gYXJnc1swXSB8fCB7fTtcblxuICAgIGlmICghcGF5bG9hZC5oYXNPd25Qcm9wZXJ0eSgna2V5JykgJiYgIXBheWxvYWQuaGFzT3duUHJvcGVydHkoJ25hbWUnKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBzcGVjaWZ5IG5hbWUgb3Iga2V5IHdoZW4gY2FsbGluZyBuYXZpZ2F0ZSB3aXRoIGFuIG9iamVjdCBhcyB0aGUgYXJndW1lbnQuIFNlZSBodHRwczovL3JlYWN0bmF2aWdhdGlvbi5vcmcvZG9jcy81LngvbmF2aWdhdGlvbi1hY3Rpb25zI25hdmlnYXRlIGZvciB1c2FnZS4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ05BVklHQVRFJyxcbiAgICAgIHBheWxvYWRcbiAgICB9O1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzZXQoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnUkVTRVQnLFxuICAgIHBheWxvYWQ6IHN0YXRlXG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0UGFyYW1zKHBhcmFtcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdTRVRfUEFSQU1TJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBwYXJhbXNcbiAgICB9XG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db21tb25BY3Rpb25zLmpzLm1hcCIsImltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZC9ub24tc2VjdXJlJztcbmltcG9ydCBUYWJSb3V0ZXIsIHsgVGFiQWN0aW9ucyB9IGZyb20gJy4vVGFiUm91dGVyJztcbmV4cG9ydCBjb25zdCBEcmF3ZXJBY3Rpb25zID0geyAuLi5UYWJBY3Rpb25zLFxuXG4gIG9wZW5EcmF3ZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdPUEVOX0RSQVdFUidcbiAgICB9O1xuICB9LFxuXG4gIGNsb3NlRHJhd2VyKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnQ0xPU0VfRFJBV0VSJ1xuICAgIH07XG4gIH0sXG5cbiAgdG9nZ2xlRHJhd2VyKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnVE9HR0xFX0RSQVdFUidcbiAgICB9O1xuICB9XG5cbn07XG5cbmNvbnN0IGlzRHJhd2VyT3BlbiA9IHN0YXRlID0+IHtcbiAgdmFyIF9zdGF0ZSRoaXN0b3J5O1xuXG4gIHJldHVybiBCb29sZWFuKChfc3RhdGUkaGlzdG9yeSA9IHN0YXRlLmhpc3RvcnkpID09PSBudWxsIHx8IF9zdGF0ZSRoaXN0b3J5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfc3RhdGUkaGlzdG9yeS5zb21lKGl0ID0+IGl0LnR5cGUgPT09ICdkcmF3ZXInKSk7XG59O1xuXG5jb25zdCBvcGVuRHJhd2VyID0gc3RhdGUgPT4ge1xuICBpZiAoaXNEcmF3ZXJPcGVuKHN0YXRlKSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHJldHVybiB7IC4uLnN0YXRlLFxuICAgIGhpc3Rvcnk6IFsuLi5zdGF0ZS5oaXN0b3J5LCB7XG4gICAgICB0eXBlOiAnZHJhd2VyJ1xuICAgIH1dXG4gIH07XG59O1xuXG5jb25zdCBjbG9zZURyYXdlciA9IHN0YXRlID0+IHtcbiAgaWYgKCFpc0RyYXdlck9wZW4oc3RhdGUpKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgaGlzdG9yeTogc3RhdGUuaGlzdG9yeS5maWx0ZXIoaXQgPT4gaXQudHlwZSAhPT0gJ2RyYXdlcicpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcmF3ZXJSb3V0ZXIoe1xuICBvcGVuQnlEZWZhdWx0LFxuICAuLi5yZXN0XG59KSB7XG4gIGNvbnN0IHJvdXRlciA9IFRhYlJvdXRlcihyZXN0KTtcbiAgcmV0dXJuIHsgLi4ucm91dGVyLFxuICAgIHR5cGU6ICdkcmF3ZXInLFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlKHtcbiAgICAgIHJvdXRlTmFtZXMsXG4gICAgICByb3V0ZVBhcmFtTGlzdCxcbiAgICAgIHJvdXRlR2V0SWRMaXN0XG4gICAgfSkge1xuICAgICAgbGV0IHN0YXRlID0gcm91dGVyLmdldEluaXRpYWxTdGF0ZSh7XG4gICAgICAgIHJvdXRlTmFtZXMsXG4gICAgICAgIHJvdXRlUGFyYW1MaXN0LFxuICAgICAgICByb3V0ZUdldElkTGlzdFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChvcGVuQnlEZWZhdWx0KSB7XG4gICAgICAgIHN0YXRlID0gb3BlbkRyYXdlcihzdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLFxuICAgICAgICBzdGFsZTogZmFsc2UsXG4gICAgICAgIHR5cGU6ICdkcmF3ZXInLFxuICAgICAgICBrZXk6IFwiZHJhd2VyLVwiLmNvbmNhdChuYW5vaWQoKSlcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGdldFJlaHlkcmF0ZWRTdGF0ZShwYXJ0aWFsU3RhdGUsIHtcbiAgICAgIHJvdXRlTmFtZXMsXG4gICAgICByb3V0ZVBhcmFtTGlzdCxcbiAgICAgIHJvdXRlR2V0SWRMaXN0XG4gICAgfSkge1xuICAgICAgaWYgKHBhcnRpYWxTdGF0ZS5zdGFsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHBhcnRpYWxTdGF0ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHN0YXRlID0gcm91dGVyLmdldFJlaHlkcmF0ZWRTdGF0ZShwYXJ0aWFsU3RhdGUsIHtcbiAgICAgICAgcm91dGVOYW1lcyxcbiAgICAgICAgcm91dGVQYXJhbUxpc3QsXG4gICAgICAgIHJvdXRlR2V0SWRMaXN0XG4gICAgICB9KTtcblxuICAgICAgaWYgKHBhcnRpYWxTdGF0ZS5oaXN0b3J5ID8gaXNEcmF3ZXJPcGVuKHBhcnRpYWxTdGF0ZSkgOiBvcGVuQnlEZWZhdWx0KSB7XG4gICAgICAgIHN0YXRlID0gb3BlbkRyYXdlcihzdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLFxuICAgICAgICB0eXBlOiAnZHJhd2VyJyxcbiAgICAgICAga2V5OiBcImRyYXdlci1cIi5jb25jYXQobmFub2lkKCkpXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBnZXRTdGF0ZUZvclJvdXRlRm9jdXMoc3RhdGUsIGtleSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcm91dGVyLmdldFN0YXRlRm9yUm91dGVGb2N1cyhzdGF0ZSwga2V5KTtcblxuICAgICAgaWYgKG9wZW5CeURlZmF1bHQpIHtcbiAgICAgICAgcmV0dXJuIG9wZW5EcmF3ZXIocmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsb3NlRHJhd2VyKHJlc3VsdCk7XG4gICAgfSxcblxuICAgIGdldFN0YXRlRm9yQWN0aW9uKHN0YXRlLCBhY3Rpb24sIG9wdGlvbnMpIHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnT1BFTl9EUkFXRVInOlxuICAgICAgICAgIHJldHVybiBvcGVuRHJhd2VyKHN0YXRlKTtcblxuICAgICAgICBjYXNlICdDTE9TRV9EUkFXRVInOlxuICAgICAgICAgIHJldHVybiBjbG9zZURyYXdlcihzdGF0ZSk7XG5cbiAgICAgICAgY2FzZSAnVE9HR0xFX0RSQVdFUic6XG4gICAgICAgICAgaWYgKGlzRHJhd2VyT3BlbihzdGF0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjbG9zZURyYXdlcihzdGF0ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG9wZW5EcmF3ZXIoc3RhdGUpO1xuXG4gICAgICAgIGNhc2UgJ0dPX0JBQ0snOlxuICAgICAgICAgIGlmIChvcGVuQnlEZWZhdWx0KSB7XG4gICAgICAgICAgICBpZiAoIWlzRHJhd2VyT3BlbihzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9wZW5EcmF3ZXIoc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNEcmF3ZXJPcGVuKHN0YXRlKSkge1xuICAgICAgICAgICAgICByZXR1cm4gY2xvc2VEcmF3ZXIoc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByb3V0ZXIuZ2V0U3RhdGVGb3JBY3Rpb24oc3RhdGUsIGFjdGlvbiwgb3B0aW9ucyk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcm91dGVyLmdldFN0YXRlRm9yQWN0aW9uKHN0YXRlLCBhY3Rpb24sIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBhY3Rpb25DcmVhdG9yczogRHJhd2VyQWN0aW9uc1xuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RHJhd2VyUm91dGVyLmpzLm1hcCIsImltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZC9ub24tc2VjdXJlJztcbmltcG9ydCBCYXNlUm91dGVyIGZyb20gJy4vQmFzZVJvdXRlcic7XG5leHBvcnQgY29uc3QgU3RhY2tBY3Rpb25zID0ge1xuICByZXBsYWNlKG5hbWUsIHBhcmFtcykge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnUkVQTEFDRScsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHBhcmFtc1xuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgcHVzaChuYW1lLCBwYXJhbXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ1BVU0gnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBuYW1lLFxuICAgICAgICBwYXJhbXNcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIHBvcChjb3VudCA9IDEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ1BPUCcsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGNvdW50XG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICBwb3BUb1RvcCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ1BPUF9UT19UT1AnXG4gICAgfTtcbiAgfVxuXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhY2tSb3V0ZXIob3B0aW9ucykge1xuICBjb25zdCByb3V0ZXIgPSB7IC4uLkJhc2VSb3V0ZXIsXG4gICAgdHlwZTogJ3N0YWNrJyxcblxuICAgIGdldEluaXRpYWxTdGF0ZSh7XG4gICAgICByb3V0ZU5hbWVzLFxuICAgICAgcm91dGVQYXJhbUxpc3RcbiAgICB9KSB7XG4gICAgICBjb25zdCBpbml0aWFsUm91dGVOYW1lID0gb3B0aW9ucy5pbml0aWFsUm91dGVOYW1lICE9PSB1bmRlZmluZWQgJiYgcm91dGVOYW1lcy5pbmNsdWRlcyhvcHRpb25zLmluaXRpYWxSb3V0ZU5hbWUpID8gb3B0aW9ucy5pbml0aWFsUm91dGVOYW1lIDogcm91dGVOYW1lc1swXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YWxlOiBmYWxzZSxcbiAgICAgICAgdHlwZTogJ3N0YWNrJyxcbiAgICAgICAga2V5OiBcInN0YWNrLVwiLmNvbmNhdChuYW5vaWQoKSksXG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICByb3V0ZU5hbWVzLFxuICAgICAgICByb3V0ZXM6IFt7XG4gICAgICAgICAga2V5OiBcIlwiLmNvbmNhdChpbml0aWFsUm91dGVOYW1lLCBcIi1cIikuY29uY2F0KG5hbm9pZCgpKSxcbiAgICAgICAgICBuYW1lOiBpbml0aWFsUm91dGVOYW1lLFxuICAgICAgICAgIHBhcmFtczogcm91dGVQYXJhbUxpc3RbaW5pdGlhbFJvdXRlTmFtZV1cbiAgICAgICAgfV1cbiAgICAgIH07XG4gICAgfSxcblxuICAgIGdldFJlaHlkcmF0ZWRTdGF0ZShwYXJ0aWFsU3RhdGUsIHtcbiAgICAgIHJvdXRlTmFtZXMsXG4gICAgICByb3V0ZVBhcmFtTGlzdFxuICAgIH0pIHtcbiAgICAgIGxldCBzdGF0ZSA9IHBhcnRpYWxTdGF0ZTtcblxuICAgICAgaWYgKHN0YXRlLnN0YWxlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlcyA9IHN0YXRlLnJvdXRlcy5maWx0ZXIocm91dGUgPT4gcm91dGVOYW1lcy5pbmNsdWRlcyhyb3V0ZS5uYW1lKSkubWFwKHJvdXRlID0+ICh7IC4uLnJvdXRlLFxuICAgICAgICBrZXk6IHJvdXRlLmtleSB8fCBcIlwiLmNvbmNhdChyb3V0ZS5uYW1lLCBcIi1cIikuY29uY2F0KG5hbm9pZCgpKSxcbiAgICAgICAgcGFyYW1zOiByb3V0ZVBhcmFtTGlzdFtyb3V0ZS5uYW1lXSAhPT0gdW5kZWZpbmVkID8geyAuLi5yb3V0ZVBhcmFtTGlzdFtyb3V0ZS5uYW1lXSxcbiAgICAgICAgICAuLi5yb3V0ZS5wYXJhbXNcbiAgICAgICAgfSA6IHJvdXRlLnBhcmFtc1xuICAgICAgfSkpO1xuXG4gICAgICBpZiAocm91dGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBpbml0aWFsUm91dGVOYW1lID0gb3B0aW9ucy5pbml0aWFsUm91dGVOYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmluaXRpYWxSb3V0ZU5hbWUgOiByb3V0ZU5hbWVzWzBdO1xuICAgICAgICByb3V0ZXMucHVzaCh7XG4gICAgICAgICAga2V5OiBcIlwiLmNvbmNhdChpbml0aWFsUm91dGVOYW1lLCBcIi1cIikuY29uY2F0KG5hbm9pZCgpKSxcbiAgICAgICAgICBuYW1lOiBpbml0aWFsUm91dGVOYW1lLFxuICAgICAgICAgIHBhcmFtczogcm91dGVQYXJhbUxpc3RbaW5pdGlhbFJvdXRlTmFtZV1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YWxlOiBmYWxzZSxcbiAgICAgICAgdHlwZTogJ3N0YWNrJyxcbiAgICAgICAga2V5OiBcInN0YWNrLVwiLmNvbmNhdChuYW5vaWQoKSksXG4gICAgICAgIGluZGV4OiByb3V0ZXMubGVuZ3RoIC0gMSxcbiAgICAgICAgcm91dGVOYW1lcyxcbiAgICAgICAgcm91dGVzXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBnZXRTdGF0ZUZvclJvdXRlTmFtZXNDaGFuZ2Uoc3RhdGUsIHtcbiAgICAgIHJvdXRlTmFtZXMsXG4gICAgICByb3V0ZVBhcmFtTGlzdFxuICAgIH0pIHtcbiAgICAgIGNvbnN0IHJvdXRlcyA9IHN0YXRlLnJvdXRlcy5maWx0ZXIocm91dGUgPT4gcm91dGVOYW1lcy5pbmNsdWRlcyhyb3V0ZS5uYW1lKSk7XG5cbiAgICAgIGlmIChyb3V0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxSb3V0ZU5hbWUgPSBvcHRpb25zLmluaXRpYWxSb3V0ZU5hbWUgIT09IHVuZGVmaW5lZCAmJiByb3V0ZU5hbWVzLmluY2x1ZGVzKG9wdGlvbnMuaW5pdGlhbFJvdXRlTmFtZSkgPyBvcHRpb25zLmluaXRpYWxSb3V0ZU5hbWUgOiByb3V0ZU5hbWVzWzBdO1xuICAgICAgICByb3V0ZXMucHVzaCh7XG4gICAgICAgICAga2V5OiBcIlwiLmNvbmNhdChpbml0aWFsUm91dGVOYW1lLCBcIi1cIikuY29uY2F0KG5hbm9pZCgpKSxcbiAgICAgICAgICBuYW1lOiBpbml0aWFsUm91dGVOYW1lLFxuICAgICAgICAgIHBhcmFtczogcm91dGVQYXJhbUxpc3RbaW5pdGlhbFJvdXRlTmFtZV1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLFxuICAgICAgICByb3V0ZU5hbWVzLFxuICAgICAgICByb3V0ZXMsXG4gICAgICAgIGluZGV4OiBNYXRoLm1pbihzdGF0ZS5pbmRleCwgcm91dGVzLmxlbmd0aCAtIDEpXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBnZXRTdGF0ZUZvclJvdXRlRm9jdXMoc3RhdGUsIGtleSkge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5yb3V0ZXMuZmluZEluZGV4KHIgPT4gci5rZXkgPT09IGtleSk7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gLTEgfHwgaW5kZXggPT09IHN0YXRlLmluZGV4KSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgICAgIGluZGV4LFxuICAgICAgICByb3V0ZXM6IHN0YXRlLnJvdXRlcy5zbGljZSgwLCBpbmRleCArIDEpXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBnZXRTdGF0ZUZvckFjdGlvbihzdGF0ZSwgYWN0aW9uLCBvcHRpb25zKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHJvdXRlUGFyYW1MaXN0XG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdSRVBMQUNFJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGFjdGlvbi50YXJnZXQgPT09IHN0YXRlLmtleSAmJiBhY3Rpb24uc291cmNlID8gc3RhdGUucm91dGVzLmZpbmRJbmRleChyID0+IHIua2V5ID09PSBhY3Rpb24uc291cmNlKSA6IHN0YXRlLmluZGV4O1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgcGFyYW1zXG4gICAgICAgICAgICB9ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgICAgICAgIGlmICghc3RhdGUucm91dGVOYW1lcy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgICAgICAgICAgIHJvdXRlczogc3RhdGUucm91dGVzLm1hcCgocm91dGUsIGkpID0+IGkgPT09IGluZGV4ID8ge1xuICAgICAgICAgICAgICAgIGtleToga2V5ICE9PSB1bmRlZmluZWQgPyBrZXkgOiBcIlwiLmNvbmNhdChuYW1lLCBcIi1cIikuY29uY2F0KG5hbm9pZCgpKSxcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHBhcmFtczogcm91dGVQYXJhbUxpc3RbbmFtZV0gIT09IHVuZGVmaW5lZCA/IHsgLi4ucm91dGVQYXJhbUxpc3RbbmFtZV0sXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXNcbiAgICAgICAgICAgICAgICB9IDogcGFyYW1zXG4gICAgICAgICAgICAgIH0gOiByb3V0ZSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ1BVU0gnOlxuICAgICAgICAgIGlmIChzdGF0ZS5yb3V0ZU5hbWVzLmluY2x1ZGVzKGFjdGlvbi5wYXlsb2FkLm5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBnZXRJZCA9IG9wdGlvbnMucm91dGVHZXRJZExpc3RbYWN0aW9uLnBheWxvYWQubmFtZV07XG4gICAgICAgICAgICBjb25zdCBpZCA9IGdldElkID09PSBudWxsIHx8IGdldElkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBnZXRJZCh7XG4gICAgICAgICAgICAgIHBhcmFtczogYWN0aW9uLnBheWxvYWQucGFyYW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gYWN0aW9uLnBheWxvYWQubmFtZSAmJiBhY3Rpb24ucGF5bG9hZC5rZXkgPyBzdGF0ZS5yb3V0ZXMuZmluZChyb3V0ZSA9PiByb3V0ZS5uYW1lID09PSBhY3Rpb24ucGF5bG9hZC5uYW1lICYmIHJvdXRlLmtleSA9PT0gYWN0aW9uLnBheWxvYWQua2V5KSA6IGlkID8gc3RhdGUucm91dGVzLmZpbmQocm91dGUgPT4gcm91dGUubmFtZSA9PT0gYWN0aW9uLnBheWxvYWQubmFtZSAmJiBpZCA9PT0gKGdldElkID09PSBudWxsIHx8IGdldElkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBnZXRJZCh7XG4gICAgICAgICAgICAgIHBhcmFtczogcm91dGUucGFyYW1zXG4gICAgICAgICAgICB9KSkpIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgbGV0IHJvdXRlcztcblxuICAgICAgICAgICAgaWYgKHJvdXRlKSB7XG4gICAgICAgICAgICAgIHJvdXRlcyA9IHN0YXRlLnJvdXRlcy5maWx0ZXIociA9PiByLmtleSAhPT0gcm91dGUua2V5KTtcbiAgICAgICAgICAgICAgcm91dGVzLnB1c2goeyAuLi5yb3V0ZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IGFjdGlvbi5wYXlsb2FkLnBhcmFtcyAhPT0gdW5kZWZpbmVkID8geyAuLi5yb3V0ZS5wYXJhbXMsXG4gICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5wYXJhbXNcbiAgICAgICAgICAgICAgICB9IDogcm91dGUucGFyYW1zXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIF9hY3Rpb24kcGF5bG9hZCRrZXk7XG5cbiAgICAgICAgICAgICAgcm91dGVzID0gWy4uLnN0YXRlLnJvdXRlcywge1xuICAgICAgICAgICAgICAgIGtleTogKF9hY3Rpb24kcGF5bG9hZCRrZXkgPSBhY3Rpb24ucGF5bG9hZC5rZXkpICE9PSBudWxsICYmIF9hY3Rpb24kcGF5bG9hZCRrZXkgIT09IHZvaWQgMCA/IF9hY3Rpb24kcGF5bG9hZCRrZXkgOiBcIlwiLmNvbmNhdChhY3Rpb24ucGF5bG9hZC5uYW1lLCBcIi1cIikuY29uY2F0KG5hbm9pZCgpKSxcbiAgICAgICAgICAgICAgICBuYW1lOiBhY3Rpb24ucGF5bG9hZC5uYW1lLFxuICAgICAgICAgICAgICAgIHBhcmFtczogcm91dGVQYXJhbUxpc3RbYWN0aW9uLnBheWxvYWQubmFtZV0gIT09IHVuZGVmaW5lZCA/IHsgLi4ucm91dGVQYXJhbUxpc3RbYWN0aW9uLnBheWxvYWQubmFtZV0sXG4gICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5wYXJhbXNcbiAgICAgICAgICAgICAgICB9IDogYWN0aW9uLnBheWxvYWQucGFyYW1zXG4gICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgaW5kZXg6IHJvdXRlcy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICByb3V0ZXNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgY2FzZSAnUE9QJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGFjdGlvbi50YXJnZXQgPT09IHN0YXRlLmtleSAmJiBhY3Rpb24uc291cmNlID8gc3RhdGUucm91dGVzLmZpbmRJbmRleChyID0+IHIua2V5ID09PSBhY3Rpb24uc291cmNlKSA6IHN0YXRlLmluZGV4O1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5tYXgoaW5kZXggLSBhY3Rpb24ucGF5bG9hZC5jb3VudCArIDEsIDEpO1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZXMgPSBzdGF0ZS5yb3V0ZXMuc2xpY2UoMCwgY291bnQpLmNvbmNhdChzdGF0ZS5yb3V0ZXMuc2xpY2UoaW5kZXggKyAxKSk7XG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGluZGV4OiByb3V0ZXMubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICByb3V0ZXNcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ1BPUF9UT19UT1AnOlxuICAgICAgICAgIHJldHVybiByb3V0ZXIuZ2V0U3RhdGVGb3JBY3Rpb24oc3RhdGUsIHtcbiAgICAgICAgICAgIHR5cGU6ICdQT1AnLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICBjb3VudDogc3RhdGUucm91dGVzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgICBjYXNlICdOQVZJR0FURSc6XG4gICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLm5hbWUgIT09IHVuZGVmaW5lZCAmJiAhc3RhdGUucm91dGVOYW1lcy5pbmNsdWRlcyhhY3Rpb24ucGF5bG9hZC5uYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLmtleSB8fCBhY3Rpb24ucGF5bG9hZC5uYW1lKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgcm91dGUgYWxyZWFkeSBleGlzdHMsIG5hdmlnYXRlIHRvIHRoYXRcbiAgICAgICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICAgICAgY29uc3QgZ2V0SWQgPSAvLyBgZ2V0SWRgIGFuZCBga2V5YCBjYW4ndCBiZSB1c2VkIHRvZ2V0aGVyXG4gICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5rZXkgPT09IHVuZGVmaW5lZCAmJiBhY3Rpb24ucGF5bG9hZC5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnJvdXRlR2V0SWRMaXN0W2FjdGlvbi5wYXlsb2FkLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBnZXRJZCA9PT0gbnVsbCB8fCBnZXRJZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ2V0SWQoe1xuICAgICAgICAgICAgICBwYXJhbXM6IGFjdGlvbi5wYXlsb2FkLnBhcmFtc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgICBpbmRleCA9IHN0YXRlLnJvdXRlcy5maW5kSW5kZXgocm91dGUgPT4gcm91dGUubmFtZSA9PT0gYWN0aW9uLnBheWxvYWQubmFtZSAmJiBpZCA9PT0gKGdldElkID09PSBudWxsIHx8IGdldElkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBnZXRJZCh7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiByb3V0ZS5wYXJhbXNcbiAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUucm91dGVzW3N0YXRlLmluZGV4XS5uYW1lID09PSBhY3Rpb24ucGF5bG9hZC5uYW1lICYmIGFjdGlvbi5wYXlsb2FkLmtleSA9PT0gdW5kZWZpbmVkIHx8IHN0YXRlLnJvdXRlc1tzdGF0ZS5pbmRleF0ua2V5ID09PSBhY3Rpb24ucGF5bG9hZC5rZXkpIHtcbiAgICAgICAgICAgICAgaW5kZXggPSBzdGF0ZS5pbmRleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGF0ZS5yb3V0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUucm91dGVzW2ldLm5hbWUgPT09IGFjdGlvbi5wYXlsb2FkLm5hbWUgJiYgYWN0aW9uLnBheWxvYWQua2V5ID09PSB1bmRlZmluZWQgfHwgc3RhdGUucm91dGVzW2ldLmtleSA9PT0gYWN0aW9uLnBheWxvYWQua2V5KSB7XG4gICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSAmJiBhY3Rpb24ucGF5bG9hZC5rZXkgJiYgYWN0aW9uLnBheWxvYWQubmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xICYmIGFjdGlvbi5wYXlsb2FkLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB2YXIgX2FjdGlvbiRwYXlsb2FkJGtleTI7XG5cbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVzID0gWy4uLnN0YXRlLnJvdXRlcywge1xuICAgICAgICAgICAgICAgIGtleTogKF9hY3Rpb24kcGF5bG9hZCRrZXkyID0gYWN0aW9uLnBheWxvYWQua2V5KSAhPT0gbnVsbCAmJiBfYWN0aW9uJHBheWxvYWQka2V5MiAhPT0gdm9pZCAwID8gX2FjdGlvbiRwYXlsb2FkJGtleTIgOiBcIlwiLmNvbmNhdChhY3Rpb24ucGF5bG9hZC5uYW1lLCBcIi1cIikuY29uY2F0KG5hbm9pZCgpKSxcbiAgICAgICAgICAgICAgICBuYW1lOiBhY3Rpb24ucGF5bG9hZC5uYW1lLFxuICAgICAgICAgICAgICAgIHBhcmFtczogcm91dGVQYXJhbUxpc3RbYWN0aW9uLnBheWxvYWQubmFtZV0gIT09IHVuZGVmaW5lZCA/IHsgLi4ucm91dGVQYXJhbUxpc3RbYWN0aW9uLnBheWxvYWQubmFtZV0sXG4gICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5wYXJhbXNcbiAgICAgICAgICAgICAgICB9IDogYWN0aW9uLnBheWxvYWQucGFyYW1zXG4gICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICByb3V0ZXMsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHJvdXRlcy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gc3RhdGUucm91dGVzW2luZGV4XTtcbiAgICAgICAgICAgIGxldCBwYXJhbXM7XG5cbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5tZXJnZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgcGFyYW1zID0gcm91dGVQYXJhbUxpc3Rbcm91dGUubmFtZV0gIT09IHVuZGVmaW5lZCA/IHsgLi4ucm91dGVQYXJhbUxpc3Rbcm91dGUubmFtZV0sXG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQucGFyYW1zXG4gICAgICAgICAgICAgIH0gOiBhY3Rpb24ucGF5bG9hZC5wYXJhbXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJhbXMgPSBhY3Rpb24ucGF5bG9hZC5wYXJhbXMgPyB7IC4uLnJvdXRlLnBhcmFtcyxcbiAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5wYXJhbXNcbiAgICAgICAgICAgICAgfSA6IHJvdXRlLnBhcmFtcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICByb3V0ZXM6IFsuLi5zdGF0ZS5yb3V0ZXMuc2xpY2UoMCwgaW5kZXgpLCBwYXJhbXMgIT09IHJvdXRlLnBhcmFtcyA/IHsgLi4ucm91dGUsXG4gICAgICAgICAgICAgICAgcGFyYW1zXG4gICAgICAgICAgICAgIH0gOiBzdGF0ZS5yb3V0ZXNbaW5kZXhdXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICBjYXNlICdHT19CQUNLJzpcbiAgICAgICAgICBpZiAoc3RhdGUuaW5kZXggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLmdldFN0YXRlRm9yQWN0aW9uKHN0YXRlLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdQT1AnLFxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgY291bnQ6IDFcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGFyZ2V0OiBhY3Rpb24udGFyZ2V0LFxuICAgICAgICAgICAgICBzb3VyY2U6IGFjdGlvbi5zb3VyY2VcbiAgICAgICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIEJhc2VSb3V0ZXIuZ2V0U3RhdGVGb3JBY3Rpb24oc3RhdGUsIGFjdGlvbik7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFjdGlvbkNyZWF0b3JzOiBTdGFja0FjdGlvbnNcbiAgfTtcbiAgcmV0dXJuIHJvdXRlcjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN0YWNrUm91dGVyLmpzLm1hcCIsImltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZC9ub24tc2VjdXJlJztcbmltcG9ydCBCYXNlUm91dGVyIGZyb20gJy4vQmFzZVJvdXRlcic7XG5jb25zdCBUWVBFX1JPVVRFID0gJ3JvdXRlJztcbmV4cG9ydCBjb25zdCBUYWJBY3Rpb25zID0ge1xuICBqdW1wVG8obmFtZSwgcGFyYW1zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdKVU1QX1RPJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgcGFyYW1zXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG59O1xuXG5jb25zdCBnZXRSb3V0ZUhpc3RvcnkgPSAocm91dGVzLCBpbmRleCwgYmFja0JlaGF2aW9yLCBpbml0aWFsUm91dGVOYW1lKSA9PiB7XG4gIGNvbnN0IGhpc3RvcnkgPSBbe1xuICAgIHR5cGU6IFRZUEVfUk9VVEUsXG4gICAga2V5OiByb3V0ZXNbaW5kZXhdLmtleVxuICB9XTtcbiAgbGV0IGluaXRpYWxSb3V0ZUluZGV4O1xuXG4gIHN3aXRjaCAoYmFja0JlaGF2aW9yKSB7XG4gICAgY2FzZSAnb3JkZXInOlxuICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGhpc3RvcnkudW5zaGlmdCh7XG4gICAgICAgICAgdHlwZTogVFlQRV9ST1VURSxcbiAgICAgICAgICBrZXk6IHJvdXRlc1tpIC0gMV0ua2V5XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2ZpcnN0Um91dGUnOlxuICAgICAgaWYgKGluZGV4ICE9PSAwKSB7XG4gICAgICAgIGhpc3RvcnkudW5zaGlmdCh7XG4gICAgICAgICAgdHlwZTogVFlQRV9ST1VURSxcbiAgICAgICAgICBrZXk6IHJvdXRlc1swXS5rZXlcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaW5pdGlhbFJvdXRlJzpcbiAgICAgIGluaXRpYWxSb3V0ZUluZGV4ID0gcm91dGVzLmZpbmRJbmRleChyb3V0ZSA9PiByb3V0ZS5uYW1lID09PSBpbml0aWFsUm91dGVOYW1lKTtcbiAgICAgIGluaXRpYWxSb3V0ZUluZGV4ID0gaW5pdGlhbFJvdXRlSW5kZXggPT09IC0xID8gMCA6IGluaXRpYWxSb3V0ZUluZGV4O1xuXG4gICAgICBpZiAoaW5kZXggIT09IGluaXRpYWxSb3V0ZUluZGV4KSB7XG4gICAgICAgIGhpc3RvcnkudW5zaGlmdCh7XG4gICAgICAgICAgdHlwZTogVFlQRV9ST1VURSxcbiAgICAgICAgICBrZXk6IHJvdXRlc1tpbml0aWFsUm91dGVJbmRleF0ua2V5XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2hpc3RvcnknOlxuICAgICAgLy8gVGhlIGhpc3Rvcnkgd2lsbCBmaWxsIHVwIG9uIG5hdmlnYXRpb25cbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGhpc3Rvcnk7XG59O1xuXG5jb25zdCBjaGFuZ2VJbmRleCA9IChzdGF0ZSwgaW5kZXgsIGJhY2tCZWhhdmlvciwgaW5pdGlhbFJvdXRlTmFtZSkgPT4ge1xuICBsZXQgaGlzdG9yeTtcblxuICBpZiAoYmFja0JlaGF2aW9yID09PSAnaGlzdG9yeScpIHtcbiAgICBjb25zdCBjdXJyZW50S2V5ID0gc3RhdGUucm91dGVzW2luZGV4XS5rZXk7XG4gICAgaGlzdG9yeSA9IHN0YXRlLmhpc3RvcnkuZmlsdGVyKGl0ID0+IGl0LnR5cGUgPT09ICdyb3V0ZScgPyBpdC5rZXkgIT09IGN1cnJlbnRLZXkgOiBmYWxzZSkuY29uY2F0KHtcbiAgICAgIHR5cGU6IFRZUEVfUk9VVEUsXG4gICAgICBrZXk6IGN1cnJlbnRLZXlcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBoaXN0b3J5ID0gZ2V0Um91dGVIaXN0b3J5KHN0YXRlLnJvdXRlcywgaW5kZXgsIGJhY2tCZWhhdmlvciwgaW5pdGlhbFJvdXRlTmFtZSk7XG4gIH1cblxuICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICBpbmRleCxcbiAgICBoaXN0b3J5XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJSb3V0ZXIoe1xuICBpbml0aWFsUm91dGVOYW1lLFxuICBiYWNrQmVoYXZpb3IgPSAnaGlzdG9yeSdcbn0pIHtcbiAgY29uc3Qgcm91dGVyID0geyAuLi5CYXNlUm91dGVyLFxuICAgIHR5cGU6ICd0YWInLFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlKHtcbiAgICAgIHJvdXRlTmFtZXMsXG4gICAgICByb3V0ZVBhcmFtTGlzdFxuICAgIH0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaW5pdGlhbFJvdXRlTmFtZSAhPT0gdW5kZWZpbmVkICYmIHJvdXRlTmFtZXMuaW5jbHVkZXMoaW5pdGlhbFJvdXRlTmFtZSkgPyByb3V0ZU5hbWVzLmluZGV4T2YoaW5pdGlhbFJvdXRlTmFtZSkgOiAwO1xuICAgICAgY29uc3Qgcm91dGVzID0gcm91dGVOYW1lcy5tYXAobmFtZSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBrZXk6IFwiXCIuY29uY2F0KG5hbWUsIFwiLVwiKS5jb25jYXQobmFub2lkKCkpLFxuICAgICAgICBwYXJhbXM6IHJvdXRlUGFyYW1MaXN0W25hbWVdXG4gICAgICB9KSk7XG4gICAgICBjb25zdCBoaXN0b3J5ID0gZ2V0Um91dGVIaXN0b3J5KHJvdXRlcywgaW5kZXgsIGJhY2tCZWhhdmlvciwgaW5pdGlhbFJvdXRlTmFtZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGFsZTogZmFsc2UsXG4gICAgICAgIHR5cGU6ICd0YWInLFxuICAgICAgICBrZXk6IFwidGFiLVwiLmNvbmNhdChuYW5vaWQoKSksXG4gICAgICAgIGluZGV4LFxuICAgICAgICByb3V0ZU5hbWVzLFxuICAgICAgICBoaXN0b3J5LFxuICAgICAgICByb3V0ZXNcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGdldFJlaHlkcmF0ZWRTdGF0ZShwYXJ0aWFsU3RhdGUsIHtcbiAgICAgIHJvdXRlTmFtZXMsXG4gICAgICByb3V0ZVBhcmFtTGlzdFxuICAgIH0pIHtcbiAgICAgIHZhciBfc3RhdGUkcm91dGVzLCBfc3RhdGUkaW5kZXgsIF9zdGF0ZSRoaXN0b3J5JGZpbHRlciwgX3N0YXRlJGhpc3Rvcnk7XG5cbiAgICAgIGxldCBzdGF0ZSA9IHBhcnRpYWxTdGF0ZTtcblxuICAgICAgaWYgKHN0YXRlLnN0YWxlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlcyA9IHJvdXRlTmFtZXMubWFwKG5hbWUgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZSA9IHN0YXRlLnJvdXRlcy5maW5kKHIgPT4gci5uYW1lID09PSBuYW1lKTtcbiAgICAgICAgcmV0dXJuIHsgLi4ucm91dGUsXG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICBrZXk6IHJvdXRlICYmIHJvdXRlLm5hbWUgPT09IG5hbWUgJiYgcm91dGUua2V5ID8gcm91dGUua2V5IDogXCJcIi5jb25jYXQobmFtZSwgXCItXCIpLmNvbmNhdChuYW5vaWQoKSksXG4gICAgICAgICAgcGFyYW1zOiByb3V0ZVBhcmFtTGlzdFtuYW1lXSAhPT0gdW5kZWZpbmVkID8geyAuLi5yb3V0ZVBhcmFtTGlzdFtuYW1lXSxcbiAgICAgICAgICAgIC4uLihyb3V0ZSA/IHJvdXRlLnBhcmFtcyA6IHVuZGVmaW5lZClcbiAgICAgICAgICB9IDogcm91dGUgPyByb3V0ZS5wYXJhbXMgOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgaW5kZXggPSBNYXRoLm1pbihNYXRoLm1heChyb3V0ZU5hbWVzLmluZGV4T2YoKF9zdGF0ZSRyb3V0ZXMgPSBzdGF0ZS5yb3V0ZXNbKF9zdGF0ZSRpbmRleCA9IHN0YXRlID09PSBudWxsIHx8IHN0YXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGF0ZS5pbmRleCkgIT09IG51bGwgJiYgX3N0YXRlJGluZGV4ICE9PSB2b2lkIDAgPyBfc3RhdGUkaW5kZXggOiAwXSkgPT09IG51bGwgfHwgX3N0YXRlJHJvdXRlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3N0YXRlJHJvdXRlcy5uYW1lKSwgMCksIHJvdXRlcy5sZW5ndGggLSAxKTtcbiAgICAgIGNvbnN0IGhpc3RvcnkgPSAoX3N0YXRlJGhpc3RvcnkkZmlsdGVyID0gKF9zdGF0ZSRoaXN0b3J5ID0gc3RhdGUuaGlzdG9yeSkgPT09IG51bGwgfHwgX3N0YXRlJGhpc3RvcnkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zdGF0ZSRoaXN0b3J5LmZpbHRlcihpdCA9PiByb3V0ZXMuZmluZChyID0+IHIua2V5ID09PSBpdC5rZXkpKSkgIT09IG51bGwgJiYgX3N0YXRlJGhpc3RvcnkkZmlsdGVyICE9PSB2b2lkIDAgPyBfc3RhdGUkaGlzdG9yeSRmaWx0ZXIgOiBbXTtcbiAgICAgIHJldHVybiBjaGFuZ2VJbmRleCh7XG4gICAgICAgIHN0YWxlOiBmYWxzZSxcbiAgICAgICAgdHlwZTogJ3RhYicsXG4gICAgICAgIGtleTogXCJ0YWItXCIuY29uY2F0KG5hbm9pZCgpKSxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHJvdXRlTmFtZXMsXG4gICAgICAgIGhpc3RvcnksXG4gICAgICAgIHJvdXRlc1xuICAgICAgfSwgaW5kZXgsIGJhY2tCZWhhdmlvciwgaW5pdGlhbFJvdXRlTmFtZSk7XG4gICAgfSxcblxuICAgIGdldFN0YXRlRm9yUm91dGVOYW1lc0NoYW5nZShzdGF0ZSwge1xuICAgICAgcm91dGVOYW1lcyxcbiAgICAgIHJvdXRlUGFyYW1MaXN0XG4gICAgfSkge1xuICAgICAgY29uc3Qgcm91dGVzID0gcm91dGVOYW1lcy5tYXAobmFtZSA9PiBzdGF0ZS5yb3V0ZXMuZmluZChyID0+IHIubmFtZSA9PT0gbmFtZSkgfHwge1xuICAgICAgICBuYW1lLFxuICAgICAgICBrZXk6IFwiXCIuY29uY2F0KG5hbWUsIFwiLVwiKS5jb25jYXQobmFub2lkKCkpLFxuICAgICAgICBwYXJhbXM6IHJvdXRlUGFyYW1MaXN0W25hbWVdXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5tYXgoMCwgcm91dGVOYW1lcy5pbmRleE9mKHN0YXRlLnJvdXRlc1tzdGF0ZS5pbmRleF0ubmFtZSkpO1xuICAgICAgbGV0IGhpc3RvcnkgPSBzdGF0ZS5oaXN0b3J5LmZpbHRlciggLy8gVHlwZSB3aWxsIGFsd2F5cyBiZSAncm91dGUnIGZvciB0YWJzLCBidXQgY291bGQgYmUgZGlmZmVyZW50IGluIGEgcm91dGVyIGV4dGVuZGluZyB0aGlzIChlLmcuIGRyYXdlcilcbiAgICAgIGl0ID0+IGl0LnR5cGUgIT09ICdyb3V0ZScgfHwgcm91dGVzLmZpbmQociA9PiByLmtleSA9PT0gaXQua2V5KSk7XG5cbiAgICAgIGlmICghaGlzdG9yeS5sZW5ndGgpIHtcbiAgICAgICAgaGlzdG9yeSA9IGdldFJvdXRlSGlzdG9yeShyb3V0ZXMsIGluZGV4LCBiYWNrQmVoYXZpb3IsIGluaXRpYWxSb3V0ZU5hbWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgICAgaGlzdG9yeSxcbiAgICAgICAgcm91dGVOYW1lcyxcbiAgICAgICAgcm91dGVzLFxuICAgICAgICBpbmRleFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgZ2V0U3RhdGVGb3JSb3V0ZUZvY3VzKHN0YXRlLCBrZXkpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUucm91dGVzLmZpbmRJbmRleChyID0+IHIua2V5ID09PSBrZXkpO1xuXG4gICAgICBpZiAoaW5kZXggPT09IC0xIHx8IGluZGV4ID09PSBzdGF0ZS5pbmRleCkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjaGFuZ2VJbmRleChzdGF0ZSwgaW5kZXgsIGJhY2tCZWhhdmlvciwgaW5pdGlhbFJvdXRlTmFtZSk7XG4gICAgfSxcblxuICAgIGdldFN0YXRlRm9yQWN0aW9uKHN0YXRlLCBhY3Rpb24sIHtcbiAgICAgIHJvdXRlUGFyYW1MaXN0XG4gICAgfSkge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdKVU1QX1RPJzpcbiAgICAgICAgY2FzZSAnTkFWSUdBVEUnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IC0xO1xuXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdOQVZJR0FURScgJiYgYWN0aW9uLnBheWxvYWQua2V5KSB7XG4gICAgICAgICAgICAgIGluZGV4ID0gc3RhdGUucm91dGVzLmZpbmRJbmRleChyb3V0ZSA9PiByb3V0ZS5rZXkgPT09IGFjdGlvbi5wYXlsb2FkLmtleSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpbmRleCA9IHN0YXRlLnJvdXRlcy5maW5kSW5kZXgocm91dGUgPT4gcm91dGUubmFtZSA9PT0gYWN0aW9uLnBheWxvYWQubmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VJbmRleCh7IC4uLnN0YXRlLFxuICAgICAgICAgICAgICByb3V0ZXM6IGFjdGlvbi5wYXlsb2FkLnBhcmFtcyAhPT0gdW5kZWZpbmVkID8gc3RhdGUucm91dGVzLm1hcCgocm91dGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbi50eXBlID09PSAnTkFWSUdBVEUnICYmIGFjdGlvbi5wYXlsb2FkLm1lcmdlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgcGFyYW1zID0gcm91dGVQYXJhbUxpc3Rbcm91dGUubmFtZV0gIT09IHVuZGVmaW5lZCA/IHsgLi4ucm91dGVQYXJhbUxpc3Rbcm91dGUubmFtZV0sXG4gICAgICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLnBhcmFtc1xuICAgICAgICAgICAgICAgICAgfSA6IGFjdGlvbi5wYXlsb2FkLnBhcmFtcztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcGFyYW1zID0gYWN0aW9uLnBheWxvYWQucGFyYW1zID8geyAuLi5yb3V0ZS5wYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLnBhcmFtc1xuICAgICAgICAgICAgICAgICAgfSA6IHJvdXRlLnBhcmFtcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1zICE9PSByb3V0ZS5wYXJhbXMgPyB7IC4uLnJvdXRlLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zXG4gICAgICAgICAgICAgICAgfSA6IHJvdXRlO1xuICAgICAgICAgICAgICB9KSA6IHN0YXRlLnJvdXRlc1xuICAgICAgICAgICAgfSwgaW5kZXgsIGJhY2tCZWhhdmlvciwgaW5pdGlhbFJvdXRlTmFtZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ0dPX0JBQ0snOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5oaXN0b3J5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNLZXkgPSBzdGF0ZS5oaXN0b3J5W3N0YXRlLmhpc3RvcnkubGVuZ3RoIC0gMl0ua2V5O1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5yb3V0ZXMuZmluZEluZGV4KHJvdXRlID0+IHJvdXRlLmtleSA9PT0gcHJldmlvdXNLZXkpO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgaGlzdG9yeTogc3RhdGUuaGlzdG9yeS5zbGljZSgwLCAtMSksXG4gICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBCYXNlUm91dGVyLmdldFN0YXRlRm9yQWN0aW9uKHN0YXRlLCBhY3Rpb24pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBzaG91bGRBY3Rpb25DaGFuZ2VGb2N1cyhhY3Rpb24pIHtcbiAgICAgIHJldHVybiBhY3Rpb24udHlwZSA9PT0gJ05BVklHQVRFJztcbiAgICB9LFxuXG4gICAgYWN0aW9uQ3JlYXRvcnM6IFRhYkFjdGlvbnNcbiAgfTtcbiAgcmV0dXJuIHJvdXRlcjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRhYlJvdXRlci5qcy5tYXAiLCJpbXBvcnQgKiBhcyBDb21tb25BY3Rpb25zIGZyb20gJy4vQ29tbW9uQWN0aW9ucyc7XG5leHBvcnQgeyBDb21tb25BY3Rpb25zIH07XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhc2VSb3V0ZXIgfSBmcm9tICcuL0Jhc2VSb3V0ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdGFja1JvdXRlciwgU3RhY2tBY3Rpb25zIH0gZnJvbSAnLi9TdGFja1JvdXRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRhYlJvdXRlciwgVGFiQWN0aW9ucyB9IGZyb20gJy4vVGFiUm91dGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJhd2VyUm91dGVyLCBEcmF3ZXJBY3Rpb25zIH0gZnJvbSAnLi9EcmF3ZXJSb3V0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR5cGVzLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcbnZhciB0b2tlbiA9ICclW2EtZjAtOV17Mn0nO1xudmFyIHNpbmdsZU1hdGNoZXIgPSBuZXcgUmVnRXhwKCcoJyArIHRva2VuICsgJyl8KFteJV0rPyknLCAnZ2knKTtcbnZhciBtdWx0aU1hdGNoZXIgPSBuZXcgUmVnRXhwKCcoJyArIHRva2VuICsgJykrJywgJ2dpJyk7XG5cbmZ1bmN0aW9uIGRlY29kZUNvbXBvbmVudHMoY29tcG9uZW50cywgc3BsaXQpIHtcblx0dHJ5IHtcblx0XHQvLyBUcnkgdG8gZGVjb2RlIHRoZSBlbnRpcmUgc3RyaW5nIGZpcnN0XG5cdFx0cmV0dXJuIFtkZWNvZGVVUklDb21wb25lbnQoY29tcG9uZW50cy5qb2luKCcnKSldO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBEbyBub3RoaW5nXG5cdH1cblxuXHRpZiAoY29tcG9uZW50cy5sZW5ndGggPT09IDEpIHtcblx0XHRyZXR1cm4gY29tcG9uZW50cztcblx0fVxuXG5cdHNwbGl0ID0gc3BsaXQgfHwgMTtcblxuXHQvLyBTcGxpdCB0aGUgYXJyYXkgaW4gMiBwYXJ0c1xuXHR2YXIgbGVmdCA9IGNvbXBvbmVudHMuc2xpY2UoMCwgc3BsaXQpO1xuXHR2YXIgcmlnaHQgPSBjb21wb25lbnRzLnNsaWNlKHNwbGl0KTtcblxuXHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5jYWxsKFtdLCBkZWNvZGVDb21wb25lbnRzKGxlZnQpLCBkZWNvZGVDb21wb25lbnRzKHJpZ2h0KSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaW5wdXQpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHR2YXIgdG9rZW5zID0gaW5wdXQubWF0Y2goc2luZ2xlTWF0Y2hlcikgfHwgW107XG5cblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aW5wdXQgPSBkZWNvZGVDb21wb25lbnRzKHRva2VucywgaSkuam9pbignJyk7XG5cblx0XHRcdHRva2VucyA9IGlucHV0Lm1hdGNoKHNpbmdsZU1hdGNoZXIpIHx8IFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnB1dDtcblx0fVxufVxuXG5mdW5jdGlvbiBjdXN0b21EZWNvZGVVUklDb21wb25lbnQoaW5wdXQpIHtcblx0Ly8gS2VlcCB0cmFjayBvZiBhbGwgdGhlIHJlcGxhY2VtZW50cyBhbmQgcHJlZmlsbCB0aGUgbWFwIHdpdGggdGhlIGBCT01gXG5cdHZhciByZXBsYWNlTWFwID0ge1xuXHRcdCclRkUlRkYnOiAnXFx1RkZGRFxcdUZGRkQnLFxuXHRcdCclRkYlRkUnOiAnXFx1RkZGRFxcdUZGRkQnXG5cdH07XG5cblx0dmFyIG1hdGNoID0gbXVsdGlNYXRjaGVyLmV4ZWMoaW5wdXQpO1xuXHR3aGlsZSAobWF0Y2gpIHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gRGVjb2RlIGFzIGJpZyBjaHVua3MgYXMgcG9zc2libGVcblx0XHRcdHJlcGxhY2VNYXBbbWF0Y2hbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzBdKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHZhciByZXN1bHQgPSBkZWNvZGUobWF0Y2hbMF0pO1xuXG5cdFx0XHRpZiAocmVzdWx0ICE9PSBtYXRjaFswXSkge1xuXHRcdFx0XHRyZXBsYWNlTWFwW21hdGNoWzBdXSA9IHJlc3VsdDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRtYXRjaCA9IG11bHRpTWF0Y2hlci5leGVjKGlucHV0KTtcblx0fVxuXG5cdC8vIEFkZCBgJUMyYCBhdCB0aGUgZW5kIG9mIHRoZSBtYXAgdG8gbWFrZSBzdXJlIGl0IGRvZXMgbm90IHJlcGxhY2UgdGhlIGNvbWJpbmF0b3IgYmVmb3JlIGV2ZXJ5dGhpbmcgZWxzZVxuXHRyZXBsYWNlTWFwWyclQzInXSA9ICdcXHVGRkZEJztcblxuXHR2YXIgZW50cmllcyA9IE9iamVjdC5rZXlzKHJlcGxhY2VNYXApO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuXHRcdC8vIFJlcGxhY2UgYWxsIGRlY29kZWQgY29tcG9uZW50c1xuXHRcdHZhciBrZXkgPSBlbnRyaWVzW2ldO1xuXHRcdGlucHV0ID0gaW5wdXQucmVwbGFjZShuZXcgUmVnRXhwKGtleSwgJ2cnKSwgcmVwbGFjZU1hcFtrZXldKTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZW5jb2RlZFVSSSkge1xuXHRpZiAodHlwZW9mIGVuY29kZWRVUkkgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYGVuY29kZWRVUklgIHRvIGJlIG9mIHR5cGUgYHN0cmluZ2AsIGdvdCBgJyArIHR5cGVvZiBlbmNvZGVkVVJJICsgJ2AnKTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0ZW5jb2RlZFVSSSA9IGVuY29kZWRVUkkucmVwbGFjZSgvXFwrL2csICcgJyk7XG5cblx0XHQvLyBUcnkgdGhlIGJ1aWx0IGluIGRlY29kZXIgZmlyc3Rcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRVUkkpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBGYWxsYmFjayB0byBhIG1vcmUgYWR2YW5jZWQgZGVjb2RlclxuXHRcdHJldHVybiBjdXN0b21EZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZFVSSSk7XG5cdH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBtYXRjaE9wZXJhdG9yc1JlID0gL1t8XFxcXHt9KClbXFxdXiQrKj8uXS9nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIpIHtcblx0aWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKTtcblx0fVxuXG5cdHJldHVybiBzdHIucmVwbGFjZShtYXRjaE9wZXJhdG9yc1JlLCAnXFxcXCQmJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBkbyBub3QgZWRpdCAuanMgZmlsZXMgZGlyZWN0bHkgLSBlZGl0IHNyYy9pbmRleC5qc3RcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhLmNvbnN0cnVjdG9yICE9PSBiLmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgbGVuZ3RoLCBpLCBrZXlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgICAgaWYgKCFlcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cblxuICAgIGlmIChhLmNvbnN0cnVjdG9yID09PSBSZWdFeHApIHJldHVybiBhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiYgYS5mbGFncyA9PT0gYi5mbGFncztcbiAgICBpZiAoYS52YWx1ZU9mICE9PSBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YpIHJldHVybiBhLnZhbHVlT2YoKSA9PT0gYi52YWx1ZU9mKCk7XG4gICAgaWYgKGEudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcblxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIWVxdWFsKGFba2V5XSwgYltrZXldKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdHJ1ZSBpZiBib3RoIE5hTiwgZmFsc2Ugb3RoZXJ3aXNlXG4gIHJldHVybiBhIT09YSAmJiBiIT09Yjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmosIHByZWRpY2F0ZSkge1xuXHR2YXIgcmV0ID0ge307XG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblx0dmFyIGlzQXJyID0gQXJyYXkuaXNBcnJheShwcmVkaWNhdGUpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBrZXkgPSBrZXlzW2ldO1xuXHRcdHZhciB2YWwgPSBvYmpba2V5XTtcblxuXHRcdGlmIChpc0FyciA/IHByZWRpY2F0ZS5pbmRleE9mKGtleSkgIT09IC0xIDogcHJlZGljYXRlKGtleSwgdmFsLCBvYmopKSB7XG5cdFx0XHRyZXRba2V5XSA9IHZhbDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHN0cmljdFVyaUVuY29kZSA9IHJlcXVpcmUoJ3N0cmljdC11cmktZW5jb2RlJyk7XG5jb25zdCBkZWNvZGVDb21wb25lbnQgPSByZXF1aXJlKCdkZWNvZGUtdXJpLWNvbXBvbmVudCcpO1xuY29uc3Qgc3BsaXRPbkZpcnN0ID0gcmVxdWlyZSgnc3BsaXQtb24tZmlyc3QnKTtcbmNvbnN0IGZpbHRlck9iamVjdCA9IHJlcXVpcmUoJ2ZpbHRlci1vYmonKTtcblxuY29uc3QgaXNOdWxsT3JVbmRlZmluZWQgPSB2YWx1ZSA9PiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBlbmNvZGVyRm9yQXJyYXlGb3JtYXQob3B0aW9ucykge1xuXHRzd2l0Y2ggKG9wdGlvbnMuYXJyYXlGb3JtYXQpIHtcblx0XHRjYXNlICdpbmRleCc6XG5cdFx0XHRyZXR1cm4ga2V5ID0+IChyZXN1bHQsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGluZGV4ID0gcmVzdWx0Lmxlbmd0aDtcblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBOdWxsICYmIHZhbHVlID09PSBudWxsKSB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBFbXB0eVN0cmluZyAmJiB2YWx1ZSA9PT0gJycpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgW2VuY29kZShrZXksIG9wdGlvbnMpLCAnWycsIGluZGV4LCAnXSddLmpvaW4oJycpXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBbXG5cdFx0XHRcdFx0Li4ucmVzdWx0LFxuXHRcdFx0XHRcdFtlbmNvZGUoa2V5LCBvcHRpb25zKSwgJ1snLCBlbmNvZGUoaW5kZXgsIG9wdGlvbnMpLCAnXT0nLCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKCcnKVxuXHRcdFx0XHRdO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2JyYWNrZXQnOlxuXHRcdFx0cmV0dXJuIGtleSA9PiAocmVzdWx0LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBOdWxsICYmIHZhbHVlID09PSBudWxsKSB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBFbXB0eVN0cmluZyAmJiB2YWx1ZSA9PT0gJycpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgW2VuY29kZShrZXksIG9wdGlvbnMpLCAnW10nXS5qb2luKCcnKV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgW2VuY29kZShrZXksIG9wdGlvbnMpLCAnW109JywgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbignJyldO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2NvbW1hJzpcblx0XHRjYXNlICdzZXBhcmF0b3InOlxuXHRcdFx0cmV0dXJuIGtleSA9PiAocmVzdWx0LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJlc3VsdC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gW1tlbmNvZGUoa2V5LCBvcHRpb25zKSwgJz0nLCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKCcnKV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gW1tyZXN1bHQsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4ob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcildO1xuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4ga2V5ID0+IChyZXN1bHQsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcE51bGwgJiYgdmFsdWUgPT09IG51bGwpIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcEVtcHR5U3RyaW5nICYmIHZhbHVlID09PSAnJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBlbmNvZGUoa2V5LCBvcHRpb25zKV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgW2VuY29kZShrZXksIG9wdGlvbnMpLCAnPScsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4oJycpXTtcblx0XHRcdH07XG5cdH1cbn1cblxuZnVuY3Rpb24gcGFyc2VyRm9yQXJyYXlGb3JtYXQob3B0aW9ucykge1xuXHRsZXQgcmVzdWx0O1xuXG5cdHN3aXRjaCAob3B0aW9ucy5hcnJheUZvcm1hdCkge1xuXHRcdGNhc2UgJ2luZGV4Jzpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpID0+IHtcblx0XHRcdFx0cmVzdWx0ID0gL1xcWyhcXGQqKVxcXSQvLmV4ZWMoa2V5KTtcblxuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxkKlxcXSQvLCAnJyk7XG5cblx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB7fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV1bcmVzdWx0WzFdXSA9IHZhbHVlO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2JyYWNrZXQnOlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikgPT4ge1xuXHRcdFx0XHRyZXN1bHQgPSAvKFxcW1xcXSkkLy5leGVjKGtleSk7XG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXF0kLywgJycpO1xuXG5cdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW3ZhbHVlXTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW10uY29uY2F0KGFjY3VtdWxhdG9yW2tleV0sIHZhbHVlKTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdjb21tYSc6XG5cdFx0Y2FzZSAnc2VwYXJhdG9yJzpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpID0+IHtcblx0XHRcdFx0Y29uc3QgaXNBcnJheSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5jbHVkZXMob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcik7XG5cdFx0XHRcdGNvbnN0IGlzRW5jb2RlZEFycmF5ID0gKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgIWlzQXJyYXkgJiYgZGVjb2RlKHZhbHVlLCBvcHRpb25zKS5pbmNsdWRlcyhvcHRpb25zLmFycmF5Rm9ybWF0U2VwYXJhdG9yKSk7XG5cdFx0XHRcdHZhbHVlID0gaXNFbmNvZGVkQXJyYXkgPyBkZWNvZGUodmFsdWUsIG9wdGlvbnMpIDogdmFsdWU7XG5cdFx0XHRcdGNvbnN0IG5ld1ZhbHVlID0gaXNBcnJheSB8fCBpc0VuY29kZWRBcnJheSA/IHZhbHVlLnNwbGl0KG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpLm1hcChpdGVtID0+IGRlY29kZShpdGVtLCBvcHRpb25zKSkgOiB2YWx1ZSA9PT0gbnVsbCA/IHZhbHVlIDogZGVjb2RlKHZhbHVlLCBvcHRpb25zKTtcblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IG5ld1ZhbHVlO1xuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSA9PiB7XG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFtdLmNvbmNhdChhY2N1bXVsYXRvcltrZXldLCB2YWx1ZSk7XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQXJyYXlGb3JtYXRTZXBhcmF0b3IodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgdmFsdWUubGVuZ3RoICE9PSAxKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignYXJyYXlGb3JtYXRTZXBhcmF0b3IgbXVzdCBiZSBzaW5nbGUgY2hhcmFjdGVyIHN0cmluZycpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWx1ZSwgb3B0aW9ucykge1xuXHRpZiAob3B0aW9ucy5lbmNvZGUpIHtcblx0XHRyZXR1cm4gb3B0aW9ucy5zdHJpY3QgPyBzdHJpY3RVcmlFbmNvZGUodmFsdWUpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlKHZhbHVlLCBvcHRpb25zKSB7XG5cdGlmIChvcHRpb25zLmRlY29kZSkge1xuXHRcdHJldHVybiBkZWNvZGVDb21wb25lbnQodmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBrZXlzU29ydGVyKGlucHV0KSB7XG5cdGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dC5zb3J0KCk7XG5cdH1cblxuXHRpZiAodHlwZW9mIGlucHV0ID09PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiBrZXlzU29ydGVyKE9iamVjdC5rZXlzKGlucHV0KSlcblx0XHRcdC5zb3J0KChhLCBiKSA9PiBOdW1iZXIoYSkgLSBOdW1iZXIoYikpXG5cdFx0XHQubWFwKGtleSA9PiBpbnB1dFtrZXldKTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGFzaChpbnB1dCkge1xuXHRjb25zdCBoYXNoU3RhcnQgPSBpbnB1dC5pbmRleE9mKCcjJyk7XG5cdGlmIChoYXNoU3RhcnQgIT09IC0xKSB7XG5cdFx0aW5wdXQgPSBpbnB1dC5zbGljZSgwLCBoYXNoU3RhcnQpO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBnZXRIYXNoKHVybCkge1xuXHRsZXQgaGFzaCA9ICcnO1xuXHRjb25zdCBoYXNoU3RhcnQgPSB1cmwuaW5kZXhPZignIycpO1xuXHRpZiAoaGFzaFN0YXJ0ICE9PSAtMSkge1xuXHRcdGhhc2ggPSB1cmwuc2xpY2UoaGFzaFN0YXJ0KTtcblx0fVxuXG5cdHJldHVybiBoYXNoO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0KGlucHV0KSB7XG5cdGlucHV0ID0gcmVtb3ZlSGFzaChpbnB1dCk7XG5cdGNvbnN0IHF1ZXJ5U3RhcnQgPSBpbnB1dC5pbmRleE9mKCc/Jyk7XG5cdGlmIChxdWVyeVN0YXJ0ID09PSAtMSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiBpbnB1dC5zbGljZShxdWVyeVN0YXJ0ICsgMSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVmFsdWUodmFsdWUsIG9wdGlvbnMpIHtcblx0aWYgKG9wdGlvbnMucGFyc2VOdW1iZXJzICYmICFOdW1iZXIuaXNOYU4oTnVtYmVyKHZhbHVlKSkgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpICE9PSAnJykpIHtcblx0XHR2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5wYXJzZUJvb2xlYW5zICYmIHZhbHVlICE9PSBudWxsICYmICh2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScgfHwgdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ2ZhbHNlJykpIHtcblx0XHR2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJztcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcGFyc2UocXVlcnksIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdGRlY29kZTogdHJ1ZSxcblx0XHRzb3J0OiB0cnVlLFxuXHRcdGFycmF5Rm9ybWF0OiAnbm9uZScsXG5cdFx0YXJyYXlGb3JtYXRTZXBhcmF0b3I6ICcsJyxcblx0XHRwYXJzZU51bWJlcnM6IGZhbHNlLFxuXHRcdHBhcnNlQm9vbGVhbnM6IGZhbHNlXG5cdH0sIG9wdGlvbnMpO1xuXG5cdHZhbGlkYXRlQXJyYXlGb3JtYXRTZXBhcmF0b3Iob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcik7XG5cblx0Y29uc3QgZm9ybWF0dGVyID0gcGFyc2VyRm9yQXJyYXlGb3JtYXQob3B0aW9ucyk7XG5cblx0Ly8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIG5vIHByb3RvdHlwZVxuXHRjb25zdCByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdGlmICh0eXBlb2YgcXVlcnkgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdHF1ZXJ5ID0gcXVlcnkudHJpbSgpLnJlcGxhY2UoL15bPyMmXS8sICcnKTtcblxuXHRpZiAoIXF1ZXJ5KSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdGZvciAoY29uc3QgcGFyYW0gb2YgcXVlcnkuc3BsaXQoJyYnKSkge1xuXHRcdGlmIChwYXJhbSA9PT0gJycpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBba2V5LCB2YWx1ZV0gPSBzcGxpdE9uRmlyc3Qob3B0aW9ucy5kZWNvZGUgPyBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKSA6IHBhcmFtLCAnPScpO1xuXG5cdFx0Ly8gTWlzc2luZyBgPWAgc2hvdWxkIGJlIGBudWxsYDpcblx0XHQvLyBodHRwOi8vdzMub3JnL1RSLzIwMTIvV0QtdXJsLTIwMTIwNTI0LyNjb2xsZWN0LXVybC1wYXJhbWV0ZXJzXG5cdFx0dmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IFsnY29tbWEnLCAnc2VwYXJhdG9yJ10uaW5jbHVkZXMob3B0aW9ucy5hcnJheUZvcm1hdCkgPyB2YWx1ZSA6IGRlY29kZSh2YWx1ZSwgb3B0aW9ucyk7XG5cdFx0Zm9ybWF0dGVyKGRlY29kZShrZXksIG9wdGlvbnMpLCB2YWx1ZSwgcmV0KTtcblx0fVxuXG5cdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHJldCkpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHJldFtrZXldO1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XG5cdFx0XHRcdHZhbHVlW2tdID0gcGFyc2VWYWx1ZSh2YWx1ZVtrXSwgb3B0aW9ucyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldFtrZXldID0gcGFyc2VWYWx1ZSh2YWx1ZSwgb3B0aW9ucyk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc29ydCA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0cmV0dXJuIChvcHRpb25zLnNvcnQgPT09IHRydWUgPyBPYmplY3Qua2V5cyhyZXQpLnNvcnQoKSA6IE9iamVjdC5rZXlzKHJldCkuc29ydChvcHRpb25zLnNvcnQpKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG5cdFx0Y29uc3QgdmFsdWUgPSByZXRba2V5XTtcblx0XHRpZiAoQm9vbGVhbih2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdC8vIFNvcnQgb2JqZWN0IGtleXMsIG5vdCB2YWx1ZXNcblx0XHRcdHJlc3VsdFtrZXldID0ga2V5c1NvcnRlcih2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdFtrZXldID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG59XG5cbmV4cG9ydHMuZXh0cmFjdCA9IGV4dHJhY3Q7XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5cbmV4cG9ydHMuc3RyaW5naWZ5ID0gKG9iamVjdCwgb3B0aW9ucykgPT4ge1xuXHRpZiAoIW9iamVjdCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRlbmNvZGU6IHRydWUsXG5cdFx0c3RyaWN0OiB0cnVlLFxuXHRcdGFycmF5Rm9ybWF0OiAnbm9uZScsXG5cdFx0YXJyYXlGb3JtYXRTZXBhcmF0b3I6ICcsJ1xuXHR9LCBvcHRpb25zKTtcblxuXHR2YWxpZGF0ZUFycmF5Rm9ybWF0U2VwYXJhdG9yKG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpO1xuXG5cdGNvbnN0IHNob3VsZEZpbHRlciA9IGtleSA9PiAoXG5cdFx0KG9wdGlvbnMuc2tpcE51bGwgJiYgaXNOdWxsT3JVbmRlZmluZWQob2JqZWN0W2tleV0pKSB8fFxuXHRcdChvcHRpb25zLnNraXBFbXB0eVN0cmluZyAmJiBvYmplY3Rba2V5XSA9PT0gJycpXG5cdCk7XG5cblx0Y29uc3QgZm9ybWF0dGVyID0gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpO1xuXG5cdGNvbnN0IG9iamVjdENvcHkgPSB7fTtcblxuXHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmplY3QpKSB7XG5cdFx0aWYgKCFzaG91bGRGaWx0ZXIoa2V5KSkge1xuXHRcdFx0b2JqZWN0Q29weVtrZXldID0gb2JqZWN0W2tleV07XG5cdFx0fVxuXHR9XG5cblx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdENvcHkpO1xuXG5cdGlmIChvcHRpb25zLnNvcnQgIT09IGZhbHNlKSB7XG5cdFx0a2V5cy5zb3J0KG9wdGlvbnMuc29ydCk7XG5cdH1cblxuXHRyZXR1cm4ga2V5cy5tYXAoa2V5ID0+IHtcblx0XHRjb25zdCB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG5cdFx0aWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0XHQucmVkdWNlKGZvcm1hdHRlcihrZXkpLCBbXSlcblx0XHRcdFx0LmpvaW4oJyYnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0aW9ucykgKyAnPScgKyBlbmNvZGUodmFsdWUsIG9wdGlvbnMpO1xuXHR9KS5maWx0ZXIoeCA9PiB4Lmxlbmd0aCA+IDApLmpvaW4oJyYnKTtcbn07XG5cbmV4cG9ydHMucGFyc2VVcmwgPSAodXJsLCBvcHRpb25zKSA9PiB7XG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRkZWNvZGU6IHRydWVcblx0fSwgb3B0aW9ucyk7XG5cblx0Y29uc3QgW3VybF8sIGhhc2hdID0gc3BsaXRPbkZpcnN0KHVybCwgJyMnKTtcblxuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbihcblx0XHR7XG5cdFx0XHR1cmw6IHVybF8uc3BsaXQoJz8nKVswXSB8fCAnJyxcblx0XHRcdHF1ZXJ5OiBwYXJzZShleHRyYWN0KHVybCksIG9wdGlvbnMpXG5cdFx0fSxcblx0XHRvcHRpb25zICYmIG9wdGlvbnMucGFyc2VGcmFnbWVudElkZW50aWZpZXIgJiYgaGFzaCA/IHtmcmFnbWVudElkZW50aWZpZXI6IGRlY29kZShoYXNoLCBvcHRpb25zKX0gOiB7fVxuXHQpO1xufTtcblxuZXhwb3J0cy5zdHJpbmdpZnlVcmwgPSAob2JqZWN0LCBvcHRpb25zKSA9PiB7XG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRlbmNvZGU6IHRydWUsXG5cdFx0c3RyaWN0OiB0cnVlXG5cdH0sIG9wdGlvbnMpO1xuXG5cdGNvbnN0IHVybCA9IHJlbW92ZUhhc2gob2JqZWN0LnVybCkuc3BsaXQoJz8nKVswXSB8fCAnJztcblx0Y29uc3QgcXVlcnlGcm9tVXJsID0gZXhwb3J0cy5leHRyYWN0KG9iamVjdC51cmwpO1xuXHRjb25zdCBwYXJzZWRRdWVyeUZyb21VcmwgPSBleHBvcnRzLnBhcnNlKHF1ZXJ5RnJvbVVybCwge3NvcnQ6IGZhbHNlfSk7XG5cblx0Y29uc3QgcXVlcnkgPSBPYmplY3QuYXNzaWduKHBhcnNlZFF1ZXJ5RnJvbVVybCwgb2JqZWN0LnF1ZXJ5KTtcblx0bGV0IHF1ZXJ5U3RyaW5nID0gZXhwb3J0cy5zdHJpbmdpZnkocXVlcnksIG9wdGlvbnMpO1xuXHRpZiAocXVlcnlTdHJpbmcpIHtcblx0XHRxdWVyeVN0cmluZyA9IGA/JHtxdWVyeVN0cmluZ31gO1xuXHR9XG5cblx0bGV0IGhhc2ggPSBnZXRIYXNoKG9iamVjdC51cmwpO1xuXHRpZiAob2JqZWN0LmZyYWdtZW50SWRlbnRpZmllcikge1xuXHRcdGhhc2ggPSBgIyR7ZW5jb2RlKG9iamVjdC5mcmFnbWVudElkZW50aWZpZXIsIG9wdGlvbnMpfWA7XG5cdH1cblxuXHRyZXR1cm4gYCR7dXJsfSR7cXVlcnlTdHJpbmd9JHtoYXNofWA7XG59O1xuXG5leHBvcnRzLnBpY2sgPSAoaW5wdXQsIGZpbHRlciwgb3B0aW9ucykgPT4ge1xuXHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0cGFyc2VGcmFnbWVudElkZW50aWZpZXI6IHRydWVcblx0fSwgb3B0aW9ucyk7XG5cblx0Y29uc3Qge3VybCwgcXVlcnksIGZyYWdtZW50SWRlbnRpZmllcn0gPSBleHBvcnRzLnBhcnNlVXJsKGlucHV0LCBvcHRpb25zKTtcblx0cmV0dXJuIGV4cG9ydHMuc3RyaW5naWZ5VXJsKHtcblx0XHR1cmwsXG5cdFx0cXVlcnk6IGZpbHRlck9iamVjdChxdWVyeSwgZmlsdGVyKSxcblx0XHRmcmFnbWVudElkZW50aWZpZXJcblx0fSwgb3B0aW9ucyk7XG59O1xuXG5leHBvcnRzLmV4Y2x1ZGUgPSAoaW5wdXQsIGZpbHRlciwgb3B0aW9ucykgPT4ge1xuXHRjb25zdCBleGNsdXNpb25GaWx0ZXIgPSBBcnJheS5pc0FycmF5KGZpbHRlcikgPyBrZXkgPT4gIWZpbHRlci5pbmNsdWRlcyhrZXkpIDogKGtleSwgdmFsdWUpID0+ICFmaWx0ZXIoa2V5LCB2YWx1ZSk7XG5cblx0cmV0dXJuIGV4cG9ydHMucGljayhpbnB1dCwgZXhjbHVzaW9uRmlsdGVyLCBvcHRpb25zKTtcbn07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChzdHJpbmcsIHNlcGFyYXRvcikgPT4ge1xuXHRpZiAoISh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygc2VwYXJhdG9yID09PSAnc3RyaW5nJykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgYXJndW1lbnRzIHRvIGJlIG9mIHR5cGUgYHN0cmluZ2AnKTtcblx0fVxuXG5cdGlmIChzZXBhcmF0b3IgPT09ICcnKSB7XG5cdFx0cmV0dXJuIFtzdHJpbmddO1xuXHR9XG5cblx0Y29uc3Qgc2VwYXJhdG9ySW5kZXggPSBzdHJpbmcuaW5kZXhPZihzZXBhcmF0b3IpO1xuXG5cdGlmIChzZXBhcmF0b3JJbmRleCA9PT0gLTEpIHtcblx0XHRyZXR1cm4gW3N0cmluZ107XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdHN0cmluZy5zbGljZSgwLCBzZXBhcmF0b3JJbmRleCksXG5cdFx0c3RyaW5nLnNsaWNlKHNlcGFyYXRvckluZGV4ICsgc2VwYXJhdG9yLmxlbmd0aClcblx0XTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHN0ciA9PiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKSpdL2csIHggPT4gYCUke3guY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKX1gKTtcbiIsImxldCB1cmxBbHBoYWJldCA9XG4gICd1c2VhbmRvbS0yNlQxOTgzNDBQWDc1cHhKQUNLVkVSWU1JTkRCVVNIV09MRl9HUVpiZmdoamtscXZ3eXpyaWN0J1xubGV0IGN1c3RvbUFscGhhYmV0ID0gKGFscGhhYmV0LCBkZWZhdWx0U2l6ZSA9IDIxKSA9PiB7XG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICBsZXQgaSA9IHNpemVcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZCArPSBhbHBoYWJldFsoTWF0aC5yYW5kb20oKSAqIGFscGhhYmV0Lmxlbmd0aCkgfCAwXVxuICAgIH1cbiAgICByZXR1cm4gaWRcbiAgfVxufVxubGV0IG5hbm9pZCA9IChzaXplID0gMjEpID0+IHtcbiAgbGV0IGlkID0gJydcbiAgbGV0IGkgPSBzaXplXG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZCArPSB1cmxBbHBoYWJldFsoTWF0aC5yYW5kb20oKSAqIDY0KSB8IDBdXG4gIH1cbiAgcmV0dXJuIGlkXG59XG5leHBvcnQgeyBuYW5vaWQsIGN1c3RvbUFscGhhYmV0IH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==