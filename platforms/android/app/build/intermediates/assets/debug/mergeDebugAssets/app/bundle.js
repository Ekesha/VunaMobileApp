"use strict";
(() => {
var exports = {};
exports.id = "bundle";
exports.ids = ["bundle"];
exports.modules = {

/***/ "./src/app.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");
/* harmony import */ var _components_MainStack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/MainStack.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");

// Added by app-css-loader




// In NativeScript, the app.ts file is the entry point to your application. You
// can use this file to perform app-level initialization, but the primary
// purpose of the file is to pass control to the app's first module.
// Controls react-nativescript log verbosity.
// - true: all logs;
// - false: only error logs.
Object.defineProperty(global, '__DEV__', {
  value: false
});
react_nativescript__WEBPACK_IMPORTED_MODULE_2__.start(react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_MainStack__WEBPACK_IMPORTED_MODULE_3__.MainStack, {}, null));
// Do not place any code after the application has been started as it will not
// be executed on iOS.

if (true) {
    let hash = __webpack_require__.h();
    let hmrBootEmittedSymbol = Symbol.for('HMRBootEmitted');
    let originalLiveSyncSymbol = Symbol.for('OriginalLiveSync');
    let hmrRuntimeLastLiveSyncSymbol = Symbol.for('HMRRuntimeLastLiveSync');
    const logVerbose = (title, ...info) => {
        if (false) {}
    };
    const setStatus = (hash, status, message, ...info) => {
        // format is important - CLI expects this exact format
        console.log(`[HMR][${hash}] ${status} | ${message}`);
        if (info === null || info === void 0 ? void 0 : info.length) {
            logVerbose('Additional Info', info);
        }
        // return true if operation was successful
        return status === 'success';
    };
    const applyOptions = {
        ignoreUnaccepted: false,
        ignoreDeclined: false,
        ignoreErrored: false,
        onDeclined(info) {
            setStatus(hash, 'failure', 'A module has been declined.', info);
        },
        onUnaccepted(info) {
            setStatus(hash, 'failure', 'A module has not been accepted.', info);
        },
        onAccepted(info) {
            // console.log('accepted', info)
            logVerbose('Module Accepted', info);
        },
        onDisposed(info) {
            // console.log('disposed', info)
            logVerbose('Module Disposed', info);
        },
        onErrored(info) {
            setStatus(hash, 'failure', 'A module has errored.', info);
        },
    };
    const checkAndApply = async () => {
        hash = __webpack_require__.h();
        const modules = await module.hot.check().catch((error) => {
            return setStatus(hash, 'failure', 'Failed to check.', error.message || error.stack);
        });
        if (!modules) {
            logVerbose('No modules to apply.');
            return false;
        }
        const appliedModules = await module.hot
            .apply(applyOptions)
            .catch((error) => {
            return setStatus(hash, 'failure', 'Failed to apply.', error.message || error.stack);
        });
        if (!appliedModules) {
            logVerbose('No modules applied.');
            return false;
        }
        return setStatus(hash, 'success', 'Successfully applied update.');
    };
    const requireExists = (path) => {
        try {
            global['require'](path);
            return true;
        }
        catch (err) {
            return false;
        }
    };
    const hasUpdate = () => {
        return [
            `~/bundle.${__webpack_require__.h()}.hot-update.json`,
            `~/runtime.${__webpack_require__.h()}.hot-update.json`,
        ].some((path) => requireExists(path));
    };
    if (global.__onLiveSync !== global[hmrRuntimeLastLiveSyncSymbol]) {
        // we store the original liveSync here in case this code runs again
        // which happens when you module.hot.accept() the main file
        global[originalLiveSyncSymbol] = global.__onLiveSync;
    }
    global[hmrRuntimeLastLiveSyncSymbol] = async function () {
        logVerbose('LiveSync');
        if (!hasUpdate()) {
            return false;
        }
        if (!(await checkAndApply())) {
            return false;
        }
        await global[originalLiveSyncSymbol]();
    };
    global.__onLiveSync = global[hmrRuntimeLastLiveSyncSymbol];
    if (!global[hmrBootEmittedSymbol]) {
        global[hmrBootEmittedSymbol] = true;
        setStatus(hash, 'boot', 'HMR Enabled - waiting for changes...');
    }
}


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/app.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* CSS2JSON */

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":["*","::before","::after"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":["::backdrop"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":[".container"],"declarations":[{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".mb-4"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".mb-8"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"32"}]},{"type":"rule","selectors":[".transform"],"declarations":[{"type":"declaration","property":"transform","value":"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}]},{"type":"rule","selectors":[".rounded"],"declarations":[{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":[".border"],"declarations":[{"type":"declaration","property":"border-width","value":"1px"}]},{"type":"rule","selectors":[".text-center"],"declarations":[{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".text-2xl"],"declarations":[{"type":"declaration","property":"font-size","value":"24"},{"type":"declaration","property":"line-height","value":"32"}]},{"type":"rule","selectors":[".text-3xl"],"declarations":[{"type":"declaration","property":"font-size","value":"30"},{"type":"declaration","property":"line-height","value":"36"}]},{"type":"rule","selectors":[".font-bold"],"declarations":[{"type":"declaration","property":"font-weight","value":"700"}]},{"type":"rule","selectors":[".italic"],"declarations":[{"type":"declaration","property":"font-style","value":"italic"}]},{"type":"rule","selectors":[".text-white"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(255 255 255 / var(--tw-text-opacity))"}]},{"type":"rule","selectors":[".shadow"],"declarations":[{"type":"declaration","property":"box-shadow","value":"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}]},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"background-color","value":"#4A90E2"},{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".ns-dark"],"declarations":[{"type":"declaration","property":"background-color","value":"#212121"},{"type":"declaration","property":"color","value":"#FFFFFF"}]}],"parsingErrors":[]}}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS2JSON_LOADER_EXPORT___);
const { addTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
addTaggedAdditionalCSS(___CSS2JSON_LOADER_EXPORT___, "/home/biop/Documents/workspace/VunaReactApp/src/app.css")
if(true) {
	module.hot.accept()
	module.hot.dispose(() => {
		const { removeTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
		removeTaggedAdditionalCSS("/home/biop/Documents/workspace/VunaReactApp/src/app.css")
	})
}

/***/ }),

/***/ "./src/config.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_CONFIG: () => (/* binding */ API_CONFIG),
/* harmony export */   APP_AUTH: () => (/* binding */ APP_AUTH),
/* harmony export */   DATE_FORMAT: () => (/* binding */ DATE_FORMAT),
/* harmony export */   LEGAL_FORM_ID: () => (/* binding */ LEGAL_FORM_ID),
/* harmony export */   LOCALE: () => (/* binding */ LOCALE),
/* harmony export */   PRODUCT_ID: () => (/* binding */ PRODUCT_ID),
/* harmony export */   ROLES: () => (/* binding */ ROLES),
/* harmony export */   TENANT_ID: () => (/* binding */ TENANT_ID)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");

const API_CONFIG = {
  BASE_URL: 'https://api.vuna.io',
  AUTHENTICATION_ENDPOINT: '/fineract-provider/api/v1/authentication',
  CLIENTS_ENDPOINT: '/fineract-provider/api/v1/clients',
  SAVINGS_ACCOUNTS_ENDPOINT: '/fineract-provider/api/v1/savingsaccounts',
  SELF_CLIENTS_ENDPOINT: '/fineract-provider/api/v1/self/clients',
  USERS_ENDPOINT: '/fineract-provider/api/v1/users',
  SAVINGS_PRODUCTS_ENDPOINT: '/fineract-provider/api/v1/savingsproducts'
};
const APP_AUTH = {
  USERNAME: 'mifos',
  PASSWORD: 'password'
};
const TENANT_ID = 'default';
const DATE_FORMAT = 'dd MMMM yyyy';
const LOCALE = 'en';
const PRODUCT_ID = 1; // For savings account creation
const ROLES = [1, 2]; // Default roles for new users
const LEGAL_FORM_ID = 1;

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/ContributionScreen.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContributionScreen: () => (/* binding */ ContributionScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();


function ContributionScreen({
  navigation,
  route
}) {
  _s();
  const {
    provider,
    productType,
    minAmount,
    maxAmount
  } = route.params;
  const [amount, setAmount] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
  const [isPercentage, setIsPercentage] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const [frequency, setFrequency] = react__WEBPACK_IMPORTED_MODULE_0__.useState("monthly");
  const [startDate, setStartDate] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
  const [validationMessage, setValidationMessage] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
  const validateAmount = value => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setValidationMessage("Please enter a valid number");
      return false;
    }
    if (numValue < minAmount) {
      setValidationMessage(`Minimum contribution is KES ${minAmount}`);
      return false;
    }
    if (numValue > maxAmount) {
      setValidationMessage(`Maximum contribution is KES ${maxAmount}`);
      return false;
    }
    setValidationMessage("");
    return true;
  };
  const handleConfirm = () => {
    if (validateAmount(amount)) {
      // Here you would typically make an API call to save the contribution
      navigation.navigate("ContributionSuccess", {
        amount,
        frequency,
        startDate,
        provider,
        productType
      });
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    rows: "auto, *, auto"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    row: 0,
    columns: "auto, *",
    style: styles.header
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    col: 0,
    text: "\u2190",
    onTap: () => navigation.goBack(),
    style: styles.backButton
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    col: 1,
    text: "Set Up Contribution",
    style: styles.headerText
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("scrollView", {
    row: 1
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    style: styles.container
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.card,
    rows: "auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.providerName,
    text: provider
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    style: styles.productType,
    text: productType
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.card,
    rows: "auto, auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.sectionTitle,
    text: "Contribution Amount"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    row: 1,
    columns: "*, auto",
    style: styles.inputContainer
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    col: 0,
    style: styles.input,
    keyboardType: "number",
    hint: "Enter amount",
    text: amount,
    onTextChange: args => {
      const newAmount = args.object.text;
      setAmount(newAmount);
      validateAmount(newAmount);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    col: 1,
    style: [styles.typeToggle, isPercentage && styles.activeToggle],
    text: isPercentage ? "%" : "KES",
    onTap: () => setIsPercentage(!isPercentage)
  })), validationMessage ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 2,
    style: styles.validationMessage,
    text: validationMessage
  }) : null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.card,
    rows: "auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.sectionTitle,
    text: "Frequency"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    row: 1,
    columns: "*, *",
    style: styles.frequencyContainer
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    col: 0,
    style: [styles.frequencyButton, frequency === "monthly" && styles.activeFrequency],
    text: "Monthly",
    onTap: () => setFrequency("monthly")
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    col: 1,
    style: [styles.frequencyButton, frequency === "quarterly" && styles.activeFrequency],
    text: "Quarterly",
    onTap: () => setFrequency("quarterly")
  }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.card,
    rows: "auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.sectionTitle,
    text: "Start Date"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    row: 1,
    style: styles.input,
    hint: "DD/MM/YYYY",
    text: startDate,
    onTextChange: args => setStartDate(args.object.text)
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.card,
    rows: "auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.sectionTitle,
    text: "Summary"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    row: 1
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Amount: ${isPercentage ? amount + '%' : 'KES ' + amount}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Frequency: ${frequency}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Start Date: ${startDate || 'Not set'}`
  }))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    row: 2,
    style: styles.confirmButton,
    text: "Confirm",
    onTap: handleConfirm
  }));
}
_s(ContributionScreen, "7oE6vHdUaP8D0lU3e6GjsXYwo34=");
_c = ContributionScreen;
const styles = react_nativescript__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0"
  },
  backButton: {
    fontSize: 24,
    color: "#4A90E2",
    backgroundColor: "transparent",
    width: 40
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#212121"
  },
  container: {
    padding: 16,
    backgroundColor: "#F5F5F5"
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3
  },
  providerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#212121"
  },
  productType: {
    fontSize: 14,
    color: "#757575"
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 10
  },
  inputContainer: {
    marginBottom: 8
  },
  input: {
    fontSize: 16,
    color: "#212121",
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 5
  },
  typeToggle: {
    width: 50,
    fontSize: 14,
    backgroundColor: "#E0E0E0",
    color: "#757575",
    borderRadius: 5,
    marginLeft: 8
  },
  activeToggle: {
    backgroundColor: "#4A90E2",
    color: "#FFFFFF"
  },
  frequencyContainer: {
    marginBottom: 8
  },
  frequencyButton: {
    fontSize: 14,
    backgroundColor: "#E0E0E0",
    color: "#757575",
    borderRadius: 5,
    margin: 4
  },
  activeFrequency: {
    backgroundColor: "#4A90E2",
    color: "#FFFFFF"
  },
  validationMessage: {
    fontSize: 12,
    color: "#EF5350",
    marginTop: 4
  },
  summaryText: {
    fontSize: 14,
    color: "#212121",
    marginBottom: 4
  },
  confirmButton: {
    backgroundColor: "#FF7043",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    padding: 16,
    margin: 16,
    borderRadius: 5
  }
});
var _c;
__webpack_require__.$Refresh$.register(_c, "ContributionScreen");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/ContributionSuccessScreen.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContributionSuccessScreen: () => (/* binding */ ContributionSuccessScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");



function ContributionSuccessScreen({
  navigation,
  route
}) {
  const {
    amount,
    frequency,
    startDate,
    provider,
    productType
  } = route.params;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    style: styles.container
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.successIcon,
    text: "\u2713"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.title,
    text: "Contribution Set Up Successfully!"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.message,
    text: "Your investment contribution has been configured."
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    style: styles.summaryCard
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryTitle,
    text: "Contribution Details"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Provider: ${provider}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Product: ${productType}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Amount: KES ${amount}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Frequency: ${frequency}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Start Date: ${startDate}`
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    style: styles.button,
    text: "Return to Dashboard",
    onTap: () => navigation.navigate("Dashboard")
  }));
}
_c = ContributionSuccessScreen;
const styles = react_nativescript__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#F5F5F5",
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  successIcon: {
    fontSize: 72,
    color: "#66BB6A",
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 10,
    textAlignment: "center"
  },
  message: {
    fontSize: 16,
    color: "#757575",
    marginBottom: 30,
    textAlignment: "center"
  },
  summaryCard: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    elevation: 3
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 15
  },
  summaryText: {
    fontSize: 16,
    color: "#212121",
    marginBottom: 8
  },
  button: {
    fontSize: 16,
    color: "#FFFFFF",
    backgroundColor: "#FF7043",
    borderRadius: 5,
    padding: 15,
    width: "100%"
  }
});
var _c;
__webpack_require__.$Refresh$.register(_c, "ContributionSuccessScreen");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/DashboardScreen.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardScreen: () => (/* binding */ DashboardScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/config.ts");
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/NavigationBar.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();





function DashboardScreen({
  navigation,
  route
}) {
  _s();
  const {
    userData,
    username,
    password,
    appAuthToken
  } = route.params;
  const [savingsAccount, setSavingsAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [transactions, setTransactions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  // Add this function to get the display name
  const getDisplayName = () => {
    if (userData.firstName) {
      return userData.firstName.split(' ')[0];
    } else if (userData.displayName) {
      return userData.displayName.split(' ')[0];
    } else if (userData.name) {
      return userData.name.split(' ')[0];
    } else if (userData.username) {
      return userData.username;
    } else {
      return 'User';
    }
  };
  const formatBalance = balance => {
    if (balance === undefined || isNaN(balance)) {
      return "KSh 0.00";
    }
    const parts = balance.toFixed(2).split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `KSh ${parts.join(".")}`;
  };
  const formatDate = date => {
    return date.toISOString().split('T')[0];
  };
  const fetchSavingsAccount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    try {
      console.log("Fetching savings account information...");
      const authHeader = `Basic ${btoa(`${username}:${password}`)}`;
      console.log("User Authentication Token:", authHeader);
      const url = `${_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.BASE_URL}${_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.SELF_CLIENTS_ENDPOINT}/${userData.id}/accounts`;
      console.log("Savings account API URL:", url);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': authHeader,
          'fineract-platform-tenantid': _config__WEBPACK_IMPORTED_MODULE_2__.TENANT_ID,
          'accept': 'application/json'
        }
      });
      const data = await response.json();
      console.log("Savings account response:", JSON.stringify(data, null, 2));
      if (data.savingsAccounts && data.savingsAccounts.length > 0) {
        console.log("Savings account found:", data.savingsAccounts[0]);
        setSavingsAccount(data.savingsAccounts[0]);
        fetchTransactions(data.savingsAccounts[0].id);
      } else {
        console.log("No savings account found for this client.");
      }
    } catch (error) {
      console.error("Error fetching savings account:", error);
    }
  }, [userData.id, username, password]);
  const fetchTransactions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async accountId => {
    if (!appAuthToken) {
      console.error("App authentication token is not available.");
      return;
    }
    try {
      const today = new Date();
      const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
      const fromDate = formatDate(oneMonthAgo);
      const toDate = formatDate(today);
      const userAuthHeader = `Basic ${btoa(`${username}:${password}`)}`;
      console.log("User Authentication Token for transactions:", userAuthHeader);
      console.log("App Authentication Token for transactions:", appAuthToken);
      const url = `${_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.BASE_URL}${_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.SAVINGS_ACCOUNTS_ENDPOINT}/${accountId}/transactions/search?fromDate=${fromDate}&toDate=${toDate}&fromSubmittedDate=${fromDate}&toSubmittedDate=${toDate}&fromAmount=1&toAmount=50000000&types=1,2,3,4,20,21&orderBy=createdDate%2CtransactionDate%2Cid&sortOrder=DESC&dateFormat=yyyy-MM-dd`;
      console.log("Fetching transactions from URL:", url);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${appAuthToken}`,
          'fineract-platform-tenantid': _config__WEBPACK_IMPORTED_MODULE_2__.TENANT_ID,
          'accept': 'application/json'
        }
      });
      const responseText = await response.text();
      console.log("Full transaction response:", responseText);
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
        return;
      }
      console.log("Parsed transaction data:", JSON.stringify(data, null, 2));
      if (data && data.content && Array.isArray(data.content)) {
        setTransactions(data.content.map(t => ({
          id: t.id,
          date: `${t.date[0]}-${t.date[1].toString().padStart(2, '0')}-${t.date[2].toString().padStart(2, '0')}`,
          amount: t.amount,
          type: t.transactionType.value,
          description: t.paymentDetailData?.paymentType?.name || t.transactionType.value,
          runningBalance: t.runningBalance
        })));
      } else {
        console.error("Unexpected data structure:", data);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  }, [username, password, appAuthToken]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchSavingsAccount();
  }, [fetchSavingsAccount]);
  const handleLogout = () => {
    console.log("Logging out...");
    navigation.navigate("Login");
  };
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    rows: "*, auto"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("scrollView", {
    row: 0
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    style: styles.container
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    text: `Welcome, ${getDisplayName()}!`,
    style: styles.headerText
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.savingsCard,
    rows: "auto, auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.sectionTitle,
    text: "Total Portfolio"
  }), savingsAccount ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    style: styles.accountNumber,
    text: `Account: ${savingsAccount.accountNo}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 2,
    style: styles.accountBalance,
    text: `Balance: ${formatBalance(savingsAccount.accountBalance)}`
  })) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    style: styles.noAccountLabel,
    text: "No savings account found"
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.transactionsCard,
    rows: "auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    col: 0,
    text: "Recent Transactions",
    style: styles.transactionsSectionTitle
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    row: 1,
    col: 0
  }, transactions.length > 0 ? transactions.slice(0, 5).map((transaction, index) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    key: transaction.id,
    style: styles.transactionItem,
    rows: "auto, auto",
    columns: "*, auto"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    col: 0,
    text: transaction.description,
    style: styles.transactionDescription
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    col: 1,
    text: formatBalance(transaction.amount),
    style: [styles.transactionAmount, {
      color: transaction.type === 'Withdrawal' ? styles.negativeAmount.color : styles.positiveAmount.color
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    col: 0,
    text: transaction.date,
    style: styles.transactionDate
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    col: 1,
    text: transaction.type,
    style: styles.transactionType
  }))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    text: "No transactions available",
    style: styles.noTransactionsLabel
  }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.quickActionsCard,
    rows: "auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.quickActionsSectionTitle,
    text: "Quick Actions"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    row: 1,
    columns: "*, *, *",
    style: styles.quickActionsContainer
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    col: 0,
    style: [styles.actionButton, styles.investButton],
    text: "Invest",
    onTap: () => navigation.navigate("Investments", {
      userData
    })
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    col: 1,
    style: [styles.actionButton, styles.withdrawButton],
    text: "Withdraw",
    onTap: () => navigation.navigate("Withdraw")
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    col: 2,
    style: [styles.actionButton, styles.loanButton],
    text: "Loans",
    onTap: () => navigation.navigate("Loans", {
      userData
    })
  }))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationBar__WEBPACK_IMPORTED_MODULE_3__.NavigationBar, {
    row: 1,
    activeRoute: "Dashboard",
    navigation: navigation,
    userData: {
      ...userData,
      username,
      password
    }
  }));
}
_s(DashboardScreen, "f29hswl5XJ5/gOHKtuN52wcjeHs=");
_c = DashboardScreen;
const styles = react_nativescript__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F5F5F5",
    paddingBottom: 80
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 20
  },
  savingsCard: {
    backgroundColor: "#4A90E2",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 5
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 15
  },
  accountNumber: {
    fontSize: 16,
    color: "#E0E0E0",
    marginBottom: 5
  },
  accountBalance: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  noAccountLabel: {
    fontSize: 16,
    color: "#E0E0E0",
    textAlignment: "center"
  },
  transactionsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 3
  },
  transactionsSectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 15
  },
  transactionItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 10
  },
  transactionDescription: {
    fontSize: 16,
    color: "#333333"
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold"
  },
  positiveAmount: {
    color: "#4CD964"
  },
  negativeAmount: {
    color: "#FF3B30"
  },
  transactionDate: {
    fontSize: 14,
    color: "#777777"
  },
  transactionType: {
    fontSize: 14,
    color: "#777777"
  },
  noTransactionsLabel: {
    fontSize: 16,
    color: "#777777",
    textAlignment: "center",
    marginTop: 15
  },
  quickActionsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 3
  },
  quickActionsSectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 15
  },
  quickActionsContainer: {
    marginTop: 15
  },
  actionButton: {
    fontSize: 16,
    color: "#FFFFFF",
    borderRadius: 25,
    // Increased border radius for more rounded corners
    padding: 12,
    margin: 4,
    textAlignment: "center",
    elevation: 3
  },
  investButton: {
    backgroundColor: "#4CAF50" // Green color for Invest
  },
  withdrawButton: {
    backgroundColor: "#2196F3" // Blue color for Withdraw
  },
  loanButton: {
    backgroundColor: "#FFC107" // Amber color for Loans
  }
});
var _c;
__webpack_require__.$Refresh$.register(_c, "DashboardScreen");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/InvestmentsScreen.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvestmentsScreen: () => (/* binding */ InvestmentsScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/config.ts");
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/NavigationBar.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();





function InvestmentsScreen({
  navigation,
  route
}) {
  _s();
  const {
    userData
  } = route.params;
  const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchSavingsProducts();
  }, []);
  const fetchSavingsProducts = async () => {
    try {
      console.log("Fetching savings products...");
      const authHeader = `Basic ${btoa(`${_config__WEBPACK_IMPORTED_MODULE_2__.APP_AUTH.USERNAME}:${_config__WEBPACK_IMPORTED_MODULE_2__.APP_AUTH.PASSWORD}`)}`;
      console.log("App Authentication Token:", authHeader);
      const url = `${_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.BASE_URL}${_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.SAVINGS_PRODUCTS_ENDPOINT}`;
      console.log("Savings products API URL:", url);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': authHeader,
          'fineract-platform-tenantid': _config__WEBPACK_IMPORTED_MODULE_2__.TENANT_ID,
          'accept': 'application/json'
        }
      });
      const data = await response.json();
      console.log("Savings products response:", JSON.stringify(data, null, 2));
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching savings products:", error);
      setError("Failed to load savings products. Please try again.");
      setLoading(false);
    }
  };
  const handleProductSelect = product => {
    console.log("Selected product:", product);
    navigation.navigate("ProductDetails", {
      product,
      userData
    });
  };
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    rows: "*, auto"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    row: 0,
    rows: "auto, *",
    style: styles.mainContainer
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    text: "Investment Options",
    style: styles.headerText
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("scrollView", {
    row: 1
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    style: styles.container
  }, loading ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    text: "Loading products...",
    style: styles.loadingText
  }) : error ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    text: error,
    style: styles.errorText
  }) : products.map(product => react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    key: product.id,
    style: styles.productCard,
    rows: "auto, auto, auto, auto",
    columns: "*",
    onTap: () => handleProductSelect(product),
    className: "product-card"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    text: product.name,
    style: styles.productName
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    text: product.description,
    style: styles.productDescription,
    textWrap: true
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    row: 2,
    rows: "auto, auto",
    columns: "*, *",
    style: styles.detailsContainer
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    col: 0,
    text: "Interest Rate:",
    style: styles.detailLabel
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    col: 1,
    text: `${product.nominalAnnualInterestRate}%`,
    style: styles.detailValue
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    col: 0,
    text: "Currency:",
    style: styles.detailLabel
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    col: 1,
    text: `${product.currency.displaySymbol} ${product.currency.code}`,
    style: styles.detailValue
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 3,
    text: "Tap to view details",
    style: styles.tapHint
  })))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationBar__WEBPACK_IMPORTED_MODULE_3__.NavigationBar, {
    row: 1,
    activeRoute: "Investments",
    navigation: navigation,
    userData: userData
  }));
}
_s(InvestmentsScreen, "3+N/VFIgZOBgubN9oS5aTzm2qqY=");
_c = InvestmentsScreen;
const styles = react_nativescript__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F0F4F8" // Light blue-gray background
  },
  container: {
    padding: 16
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlignment: "center",
    marginVertical: 20,
    color: "#2C3E50" // Dark blue-gray color for header
  },
  loadingText: {
    fontSize: 18,
    textAlignment: "center",
    color: "#34495E" // Dark gray color for loading text
  },
  errorText: {
    fontSize: 18,
    color: "#E74C3C",
    // Red color for error text
    textAlignment: "center"
  },
  productCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderColor: "#BDC3C7",
    // Light gray border
    borderWidth: 1
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2980B9" // Blue color for product name
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 15,
    color: "#34495E" // Dark gray color for description
  },
  detailsContainer: {
    marginBottom: 10,
    backgroundColor: "#ECF0F1",
    // Very light gray background for details
    padding: 10,
    borderRadius: 8
  },
  detailLabel: {
    fontSize: 14,
    color: "#7F8C8D",
    // Medium gray color for labels
    textAlignment: "left",
    marginBottom: 5 // Add some bottom margin
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2C3E50",
    // Dark blue-gray color for values
    textAlignment: "right",
    marginBottom: 5 // Add some bottom margin
  },
  tapHint: {
    fontSize: 14,
    color: "#7F8C8D",
    // Medium gray color for hint
    textAlignment: "center",
    fontStyle: "italic",
    marginTop: 10 // Add some top margin
  }
});
var _c;
__webpack_require__.$Refresh$.register(_c, "InvestmentsScreen");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/LoginScreen.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginScreen: () => (/* binding */ LoginScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/config.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();




function LoginScreen({
  navigation
}) {
  _s();
  const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [loginStatus, setLoginStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [appAuthStatus, setAppAuthStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Checking app authorization...");
  const [appAuthToken, setAppAuthToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    checkAppAuthorization();
  }, []);
  const checkAppAuthorization = async () => {
    try {
      const response = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.BASE_URL}${_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.AUTHENTICATION_ENDPOINT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`${_config__WEBPACK_IMPORTED_MODULE_2__.APP_AUTH.USERNAME}:${_config__WEBPACK_IMPORTED_MODULE_2__.APP_AUTH.PASSWORD}`)}`,
          'fineract-platform-tenantid': _config__WEBPACK_IMPORTED_MODULE_2__.TENANT_ID
        },
        body: JSON.stringify({
          username: _config__WEBPACK_IMPORTED_MODULE_2__.APP_AUTH.USERNAME,
          password: _config__WEBPACK_IMPORTED_MODULE_2__.APP_AUTH.PASSWORD
        })
      });
      const data = await response.json();
      if (data.authenticated) {
        setAppAuthStatus("App authorized successfully");
        console.log("App authorized. Token:", data.base64EncodedAuthenticationKey);
        setAppAuthToken(data.base64EncodedAuthenticationKey);
        global.base64EncodedAuthenticationKey = data.base64EncodedAuthenticationKey; // Set global token
      } else {
        setAppAuthStatus("App authorization failed. Please try again.");
      }
    } catch (error) {
      console.error("App authorization error:", error);
      setAppAuthStatus("Network error. Please check your connection and try again.");
    }
  };
  const handleLogin = async credentials => {
    try {
      const response = await loginAPI(credentials);
      global.token = response.token;
      global.userData = response.userData;
      navigation.navigate('Profile', {
        userData: response.userData
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("scrollView", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("flexboxLayout", {
    style: styles.container
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    style: styles.content
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-3xl mb-8 font-bold text-center text-white",
    text: "Login"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    text: appAuthStatus,
    style: styles.appAuthStatus
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    style: styles.input,
    hint: "Username",
    text: username,
    onTextChange: args => setUsername(args.object.text)
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    style: styles.input,
    hint: "Password",
    text: password,
    secure: true,
    onTextChange: args => setPassword(args.object.text)
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    style: styles.button,
    text: isLoading ? "Logging in..." : "Login",
    onTap: handleLogin,
    isEnabled: !isLoading
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    style: styles.signupButton,
    text: "Sign Up",
    onTap: () => navigation.navigate("Signup"),
    isEnabled: !isLoading
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: [styles.statusLabel, {
      color: loginStatus.includes("successful") ? "#50E3C2" : "#FF7043"
    }],
    text: loginStatus
  }))));
}
_s(LoginScreen, "vvAymzOugdhUknwNQLuE6aaDSQM=");
_c = LoginScreen;
const styles = react_nativescript__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#4A90E2"
  },
  content: {
    width: "80%",
    alignSelf: "center"
  },
  input: {
    fontSize: 18,
    color: "#212121",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginBottom: 15,
    padding: 10
  },
  button: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "#29B6F6",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15
  },
  signupButton: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "#50E3C2",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15
  },
  statusLabel: {
    fontSize: 16,
    textAlignment: "center"
  },
  appAuthStatus: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlignment: "center",
    marginBottom: 20
  }
});
var _c;
__webpack_require__.$Refresh$.register(_c, "LoginScreen");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/MainStack.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainStack: () => (/* binding */ MainStack)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_navigation_native__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@react-navigation/native/lib/module/NavigationContainer.js");
/* harmony import */ var _react_navigation_native_stack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@react-navigation/native-stack/lib/module/navigators/createNativeStackNavigator.js");
/* harmony import */ var _LoginScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/LoginScreen.tsx");
/* harmony import */ var _ProfileScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/ProfileScreen.tsx");
/* harmony import */ var _SignupScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/SignupScreen.tsx");
/* harmony import */ var _SignupSuccessScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/SignupSuccessScreen.tsx");
/* harmony import */ var _DashboardScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/DashboardScreen.tsx");
/* harmony import */ var _InvestmentsScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/InvestmentsScreen.tsx");
/* harmony import */ var _ContributionScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/ContributionScreen.tsx");
/* harmony import */ var _ContributionSuccessScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/ContributionSuccessScreen.tsx");
/* harmony import */ var _WithdrawScreen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/WithdrawScreen.tsx");
/* harmony import */ var _WithdrawSuccessScreen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/WithdrawSuccessScreen.tsx");
/* harmony import */ var _PortfolioScreen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/PortfolioScreen.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");















const Stack = (0,_react_navigation_native_stack__WEBPACK_IMPORTED_MODULE_12__["default"])();
const MainStack = () => {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_navigation_native__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(Stack.Navigator, {
    initialRouteName: "Login"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(Stack.Screen, {
    name: "Login",
    component: _LoginScreen__WEBPACK_IMPORTED_MODULE_1__.LoginScreen
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Stack.Screen, {
    name: "Profile",
    component: _ProfileScreen__WEBPACK_IMPORTED_MODULE_2__.ProfileScreen
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Stack.Screen, {
    name: "Signup",
    component: _SignupScreen__WEBPACK_IMPORTED_MODULE_3__.SignupScreen
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Stack.Screen, {
    name: "SignupSuccess",
    component: _SignupSuccessScreen__WEBPACK_IMPORTED_MODULE_4__.SignupSuccessScreen
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Stack.Screen, {
    name: "Dashboard",
    component: _DashboardScreen__WEBPACK_IMPORTED_MODULE_5__.DashboardScreen,
    initialParams: {
      userData: null
    }
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Stack.Screen, {
    name: "Portfolio",
    component: _PortfolioScreen__WEBPACK_IMPORTED_MODULE_11__.PortfolioScreen,
    initialParams: {
      userData: null
    }
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Stack.Screen, {
    name: "Investments",
    component: _InvestmentsScreen__WEBPACK_IMPORTED_MODULE_6__.InvestmentsScreen,
    initialParams: {
      userData: null
    }
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Stack.Screen, {
    name: "Contribution",
    component: _ContributionScreen__WEBPACK_IMPORTED_MODULE_7__.ContributionScreen
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Stack.Screen, {
    name: "ContributionSuccess",
    component: _ContributionSuccessScreen__WEBPACK_IMPORTED_MODULE_8__.ContributionSuccessScreen
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Stack.Screen, {
    name: "Withdraw",
    component: _WithdrawScreen__WEBPACK_IMPORTED_MODULE_9__.WithdrawScreen
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Stack.Screen, {
    name: "WithdrawSuccess",
    component: _WithdrawSuccessScreen__WEBPACK_IMPORTED_MODULE_10__.WithdrawSuccessScreen
  })));
};
_c = MainStack;
var _c;
__webpack_require__.$Refresh$.register(_c, "MainStack");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/NavigationBar.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationBar: () => (/* binding */ NavigationBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");



const menuItems = [{
  name: 'Home',
  route: 'Dashboard'
}, {
  name: 'My Portfolio',
  route: 'Portfolio'
}, {
  name: 'Invest',
  route: 'Investments'
}, {
  name: 'My Profile',
  route: 'Profile'
}];
function NavigationBar({
  activeRoute,
  navigation,
  row,
  userData
}) {
  const handleNavigation = route => {
    if (route !== activeRoute) {
      console.log("Navigating to:", route);
      console.log("userData being passed:", JSON.stringify(userData, null, 2));
      if (route === 'Profile' || route === 'Portfolio') {
        navigation.navigate(route, {
          userData,
          username: userData?.username,
          // Make sure these properties exist in userData
          password: userData?.password // Make sure these properties exist in userData
        });
      } else {
        navigation.navigate(route);
      }
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("flexboxLayout", {
    row: row,
    style: styles.menuBar
  }, menuItems.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: item.name
  }, index > 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.separator
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    style: [styles.menuItem, activeRoute === item.route && styles.activeMenuItem],
    onTap: () => handleNavigation(item.route)
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    text: item.name,
    style: [styles.menuLabel, activeRoute === item.route && styles.activeMenuLabel]
  })))));
}
_c = NavigationBar;
const styles = react_nativescript__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  menuBar: {
    backgroundColor: "#FFFFFF",
    height: 60,
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0"
  },
  menuItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  activeMenuItem: {
    borderTopWidth: 2,
    borderTopColor: "#007AFF"
  },
  menuLabel: {
    fontSize: 12,
    color: "#757575",
    textAlignment: "center"
  },
  activeMenuLabel: {
    color: "#007AFF",
    fontWeight: "bold"
  },
  separator: {
    width: 1,
    height: "60%",
    backgroundColor: "#E0E0E0"
  }
});
var _c;
__webpack_require__.$Refresh$.register(_c, "NavigationBar");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/PortfolioScreen.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortfolioScreen: () => (/* binding */ PortfolioScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/NavigationBar.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/config.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();





function PortfolioScreen({
  navigation,
  route
}) {
  _s();
  console.log("PortfolioScreen rendered. Route params:", JSON.stringify(route.params, null, 2));
  const {
    userData,
    username,
    password
  } = route.params || {};
  const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log("PortfolioScreen useEffect triggered");
    if (userData && userData.id && username && password) {
      console.log("userData is valid, fetching accounts");
      fetchAccounts();
    } else {
      console.error("Invalid userData or missing credentials:", {
        userData,
        username,
        password
      });
      setError("User data or credentials are missing or invalid. Please log in again.");
      setLoading(false);
    }
  }, [userData, username, password]);
  const fetchAccounts = async () => {
    try {
      console.log("Fetching accounts...");
      console.log("User ID:", userData.id);
      console.log("Username:", username);
      console.log("Password:", password ? "********" : "Not provided");
      const authHeader = `Basic ${btoa(`${username}:${password}`)}`;
      console.log("Auth header:", authHeader);
      const url = `${_config__WEBPACK_IMPORTED_MODULE_3__.API_CONFIG.BASE_URL}${_config__WEBPACK_IMPORTED_MODULE_3__.API_CONFIG.SELF_CLIENTS_ENDPOINT}/${userData.id}/accounts`;
      console.log("Fetching from URL:", url);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': authHeader,
          'fineract-platform-tenantid': _config__WEBPACK_IMPORTED_MODULE_3__.TENANT_ID,
          'accept': 'application/json'
        }
      });
      console.log("Response status:", response.status);
      console.log("Response headers:", JSON.stringify(response.headers, null, 2));
      const data = await response.json();
      console.log("Response data:", JSON.stringify(data, null, 2));
      if (data.savingsAccounts && Array.isArray(data.savingsAccounts)) {
        console.log("Savings accounts found:", data.savingsAccounts.length);
        setAccounts(data.savingsAccounts);
      } else {
        console.error("Unexpected data structure:", data);
        throw new Error("Unexpected data structure");
      }
      setLoading(false);
    } catch (err) {
      console.error("Error fetching accounts:", err);
      setError(`Failed to load portfolio data. Error: ${err.message}`);
      setLoading(false);
    }
  };
  const formatCurrency = (amount, symbol) => {
    return `${symbol} ${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };
  const calculateTotalInvestment = () => {
    return accounts.reduce((total, account) => total + account.accountBalance, 0);
  };
  if (loading) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
      rows: "*, auto"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("activityIndicator", {
      busy: true,
      row: 0
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationBar__WEBPACK_IMPORTED_MODULE_2__.NavigationBar, {
      row: 1,
      activeRoute: "Portfolio",
      navigation: navigation,
      userData: userData
    }));
  }
  if (error) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
      rows: "*, auto"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      text: error,
      row: 0,
      style: styles.errorText
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationBar__WEBPACK_IMPORTED_MODULE_2__.NavigationBar, {
      row: 1,
      activeRoute: "Portfolio",
      navigation: navigation,
      userData: userData
    }));
  }
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    rows: "*, auto"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("scrollView", {
    row: 0
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    style: styles.container
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    text: "My Portfolio",
    style: styles.headerText
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.card,
    rows: "auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    text: "Total Investment",
    style: styles.sectionTitle
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    text: formatCurrency(calculateTotalInvestment(), accounts[0]?.currency.displaySymbol || 'KSh'),
    style: styles.totalInvestment
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    text: "Investment Breakdown",
    style: styles.breakdownTitle
  }), accounts.map((account, index) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    key: index,
    style: styles.card,
    rows: "auto, auto, auto, auto",
    columns: "*, auto"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    col: 0,
    text: account.productName,
    style: styles.productName
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    col: 1,
    text: account.accountNo,
    style: styles.accountNumber
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    colSpan: 2,
    text: formatCurrency(account.accountBalance, account.currency.displaySymbol),
    style: styles.accountBalance
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 2,
    colSpan: 2,
    text: `Status: ${account.status.value}`,
    style: styles.accountStatus
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 3,
    colSpan: 2,
    text: `Last Transaction: ${account.lastActiveTransactionDate.join('-')}`,
    style: styles.lastTransaction
  }))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationBar__WEBPACK_IMPORTED_MODULE_2__.NavigationBar, {
    row: 1,
    activeRoute: "Portfolio",
    navigation: navigation,
    userData: userData
  }));
}
_s(PortfolioScreen, "v7BeaDmwrBy1BZ0ni/ZS6Wl6sY0=");
_c = PortfolioScreen;
const styles = react_nativescript__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F5F5F5"
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212121",
    textAlignment: "center",
    marginBottom: 16
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 8
  },
  totalInvestment: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50"
  },
  breakdownTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#212121",
    marginTop: 16,
    marginBottom: 8
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#212121"
  },
  accountNumber: {
    fontSize: 14,
    color: "#757575",
    textAlignment: "right"
  },
  accountBalance: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4CAF50",
    marginTop: 8
  },
  accountStatus: {
    fontSize: 14,
    color: "#757575",
    marginTop: 4
  },
  lastTransaction: {
    fontSize: 14,
    color: "#757575",
    marginTop: 4
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlignment: "center"
  }
});
var _c;
__webpack_require__.$Refresh$.register(_c, "PortfolioScreen");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/ProfileScreen.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileScreen: () => (/* binding */ ProfileScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/NavigationBar.tsx");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/context/UserContext.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();





function ProfileScreen({
  navigation,
  route
}) {
  _s();
  const {
    userData,
    setUserData
  } = (0,_context_UserContext__WEBPACK_IMPORTED_MODULE_3__.useUser)();
  const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [editedUserData, setEditedUserData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    displayName: '',
    emailAddress: '',
    mobileNo: ''
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchUserData = async () => {
      const currentUserData = route.params?.userData || global.userData || {};
      console.log("Current user data:", currentUserData);
      if (Object.keys(currentUserData).length === 0) {
        console.log("User data is empty, attempting to fetch from API");
        // Here you would typically make an API call to fetch the user data
        // For now, we'll just use some dummy data
        const dummyData = {
          displayName: 'John Doe',
          emailAddress: 'john@example.com',
          mobileNo: '1234567890',
          accountNo: 'ACC123456'
        };
        setUserData(dummyData);
        setEditedUserData({
          displayName: dummyData.displayName,
          emailAddress: dummyData.emailAddress,
          mobileNo: dummyData.mobileNo
        });
      } else {
        setUserData(currentUserData);
        setEditedUserData({
          displayName: currentUserData.displayName || '',
          emailAddress: currentUserData.emailAddress || '',
          mobileNo: currentUserData.mobileNo || ''
        });
      }
    };
    fetchUserData();
  }, [route.params?.userData, setUserData]);
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    console.log("Saving user data:", editedUserData);
    if (userData) {
      setUserData({
        ...userData,
        ...editedUserData
      });
    }
    setIsEditing(false);
    if (global.userData) {
      global.userData = {
        ...global.userData,
        ...editedUserData
      };
    }
    // Here you would typically make an API call to update the user data
  };
  const handleCancel = () => {
    setIsEditing(false);
    if (userData) {
      setEditedUserData({
        displayName: userData.displayName || '',
        emailAddress: userData.emailAddress || '',
        mobileNo: userData.mobileNo || ''
      });
    }
  };
  const handleLogout = () => {
    console.log("Logging out");
    global.token = null;
    global.userData = null;
    setUserData(null);
    navigation.reset({
      index: 0,
      routes: [{
        name: 'Login'
      }]
    });
  };
  if (!userData) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
      style: styles.container
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      text: "Loading user data...",
      style: styles.headerText
    }));
  }
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    rows: "*, auto"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("scrollView", {
    row: 0
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    style: styles.container
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    text: "Profile",
    style: styles.headerText
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.card,
    rows: "auto, auto, auto, auto, auto",
    columns: "auto, *"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    col: 0,
    style: styles.label,
    text: "Name:"
  }), isEditing ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    row: 0,
    col: 1,
    style: styles.input,
    text: {
      value: editedUserData.displayName
    },
    onTextChange: args => setEditedUserData({
      ...editedUserData,
      displayName: args.object.text
    })
  }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    col: 1,
    style: styles.value,
    text: userData.displayName
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    col: 0,
    style: styles.label,
    text: "Email:"
  }), isEditing ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    row: 1,
    col: 1,
    style: styles.input,
    text: {
      value: editedUserData.emailAddress
    },
    onTextChange: args => setEditedUserData({
      ...editedUserData,
      emailAddress: args.object.text
    })
  }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    col: 1,
    style: styles.value,
    text: userData.emailAddress
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 2,
    col: 0,
    style: styles.label,
    text: "Mobile:"
  }), isEditing ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    row: 2,
    col: 1,
    style: styles.input,
    text: {
      value: editedUserData.mobileNo
    },
    onTextChange: args => setEditedUserData({
      ...editedUserData,
      mobileNo: args.object.text
    })
  }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 2,
    col: 1,
    style: styles.value,
    text: userData.mobileNo
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 3,
    col: 0,
    style: styles.label,
    text: "Account No:"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 3,
    col: 1,
    style: styles.value,
    text: userData.accountNo
  })), isEditing ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    orientation: "horizontal",
    style: styles.buttonContainer
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    style: styles.saveButton,
    text: "Save",
    onTap: handleSave
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    style: styles.cancelButton,
    text: "Cancel",
    onTap: handleCancel
  })) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    style: styles.editButton,
    text: "Edit Profile",
    onTap: handleEdit
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    style: styles.logoutButton,
    text: "Logout",
    onTap: handleLogout
  }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationBar__WEBPACK_IMPORTED_MODULE_2__.NavigationBar, {
    row: 1,
    activeRoute: "Profile",
    navigation: navigation,
    userData: userData
  }));
}
_s(ProfileScreen, "t/c5u8HB9MAp3R/+HAaz8GSHBl4=", false, function () {
  return [_context_UserContext__WEBPACK_IMPORTED_MODULE_3__.useUser];
});
_c = ProfileScreen;
const styles = react_nativescript__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F5F5F5",
    paddingBottom: 80
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212121",
    textAlignment: "center",
    marginBottom: 20
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3
  },
  label: {
    fontSize: 16,
    color: "#757575",
    marginRight: 10,
    marginBottom: 10
  },
  value: {
    fontSize: 16,
    color: "#212121",
    fontWeight: "bold",
    marginBottom: 10
  },
  logoutButton: {
    backgroundColor: "#FF7043",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 5,
    padding: 10,
    marginTop: 20
  },
  navBar: {
    backgroundColor: "#FFFFFF",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#E6F3FF"
  },
  navItem: {
    backgroundColor: "transparent",
    color: "#4A90E2",
    fontSize: 10,
    height: "100%",
    padding: 0,
    textAlignment: "center"
  },
  activeNavItem: {
    color: "#FFFFFF",
    fontWeight: "bold",
    backgroundColor: "#FF7043",
    // Changed to orange
    borderRadius: 5,
    margin: 5
  },
  input: {
    fontSize: 16,
    color: "#212121",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
    padding: 5
  },
  editButton: {
    backgroundColor: "#4A90E2",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 5,
    padding: 10,
    marginTop: 20
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 5,
    padding: 10,
    marginRight: 10
  },
  cancelButton: {
    backgroundColor: "#F44336",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 5,
    padding: 10
  },
  buttonContainer: {
    justifyContent: "center",
    marginTop: 20
  }
});
var _c;
__webpack_require__.$Refresh$.register(_c, "ProfileScreen");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/SignupScreen.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupScreen: () => (/* binding */ SignupScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/config.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();




function SignupScreen({
  navigation
}) {
  _s();
  const [firstname, setFirstname] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [lastname, setLastname] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [mobileNo, setMobileNo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [repeatPassword, setRepeatPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [employerId, setEmployerId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""); // New state for employer ID
  const [signupStatus, setSignupStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const formatDate = date => {
    const day = String(date.getDate()).padStart(2, '0');
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };
  const handleSignup = async () => {
    console.log("Starting signup process...");
    if (password !== repeatPassword) {
      console.log("Signup failed: Passwords do not match");
      setSignupStatus("Passwords do not match");
      return;
    }
    if (!employerId) {
      console.log("Signup failed: Employer ID is required");
      setSignupStatus("Employer ID is required");
      return;
    }
    if (!global.base64EncodedAuthenticationKey) {
      console.log("App authentication token is not available. Please ensure the app is properly authenticated.");
      setSignupStatus("App authentication failed. Please try again.");
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    setSignupStatus("Creating account...");
    console.log("Initiating account creation...");
    try {
      const today = new Date();
      const formattedDate = formatDate(today);
      console.log(`Formatted date for API calls: ${formattedDate}`);
      // First API call to create a client
      const clientRequestBody = {
        firstname,
        lastname,
        emailAddress: email,
        mobileNo,
        dateFormat: "dd MMMM yyyy",
        locale: "en",
        active: true,
        activationDate: formattedDate,
        officeId: parseInt(employerId, 10),
        legalFormId: 1
      };
      console.log("Client creation request body:", JSON.stringify(clientRequestBody, null, 2));
      console.log("Sending client creation request...");
      console.log("Using App Authentication Token:", global.base64EncodedAuthenticationKey);
      const clientResponse = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.BASE_URL}/fineract-provider/api/v1/clients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${global.base64EncodedAuthenticationKey}`,
          'fineract-platform-tenantid': 'default'
        },
        body: JSON.stringify(clientRequestBody)
      });
      const clientData = await clientResponse.json();
      console.log("Client creation response:", JSON.stringify(clientData, null, 2));
      if (clientData.clientId) {
        console.log(`Client created successfully. Client ID: ${clientData.clientId}`);
        // Second API call to create a user
        const userRequestBody = {
          username,
          firstname,
          lastname,
          email,
          officeId: parseInt(employerId, 10),
          passwordNeverExpires: true,
          password,
          repeatPassword,
          isSelfServiceUser: true,
          clients: [clientData.clientId],
          roles: [1, 2],
          sendPasswordToEmail: false,
          staffId: 1
        };
        console.log("User creation request body:", JSON.stringify(userRequestBody, null, 2));
        console.log("Sending user creation request...");
        const userResponse = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.BASE_URL}/fineract-provider/api/v1/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${global.base64EncodedAuthenticationKey}`,
            'fineract-platform-tenantid': 'default'
          },
          body: JSON.stringify(userRequestBody)
        });
        const userData = await userResponse.json();
        console.log("User creation response:", JSON.stringify(userData, null, 2));
        if (userData.resourceId) {
          console.log(`User created successfully. User ID: ${userData.resourceId}`);
          // Third API call to create a savings account
          const savingsAccountRequestBody = {
            clientId: clientData.clientId,
            dateFormat: "dd MMMM yyyy",
            externalId: `${clientData.clientId}-${Date.now()}`,
            locale: "en",
            productId: 1,
            submittedOnDate: formatDate(new Date())
          };
          console.log("Savings account creation request body:", JSON.stringify(savingsAccountRequestBody, null, 2));
          console.log("Sending savings account creation request...");
          const savingsAccountResponse = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.BASE_URL}/fineract-provider/api/v1/savingsaccounts`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Basic ${global.base64EncodedAuthenticationKey}`,
              'fineract-platform-tenantid': 'default'
            },
            body: JSON.stringify(savingsAccountRequestBody)
          });
          const savingsAccountData = await savingsAccountResponse.json();
          console.log("Savings account creation response:", JSON.stringify(savingsAccountData, null, 2));
          if (savingsAccountData.savingsId) {
            console.log(`Savings account created successfully. Savings Account ID: ${savingsAccountData.savingsId}`);
            // Approve the savings account
            const approveRequestBody = {
              locale: "en",
              dateFormat: "dd MMMM yyyy",
              approvedOnDate: formattedDate
            };
            console.log("Approving savings account...");
            const approveResponse = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.BASE_URL}/fineract-provider/api/v1/savingsaccounts/${savingsAccountData.savingsId}?command=approve`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${global.base64EncodedAuthenticationKey}`,
                'fineract-platform-tenantid': 'default'
              },
              body: JSON.stringify(approveRequestBody)
            });
            const approveData = await approveResponse.json();
            console.log("Savings account approval response:", JSON.stringify(approveData, null, 2));
            if (approveData.changes && approveData.changes.status.approved) {
              console.log("Savings account approved successfully.");
              // Activate the savings account
              const activateRequestBody = {
                locale: "en",
                dateFormat: "dd MMMM yyyy",
                activatedOnDate: formattedDate
              };
              console.log("Activating savings account...");
              const activateResponse = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.BASE_URL}/fineract-provider/api/v1/savingsaccounts/${savingsAccountData.savingsId}?command=activate`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Basic ${global.base64EncodedAuthenticationKey}`,
                  'fineract-platform-tenantid': 'default'
                },
                body: JSON.stringify(activateRequestBody)
              });
              const activateData = await activateResponse.json();
              console.log("Savings account activation response:", JSON.stringify(activateData, null, 2));
              if (activateData.changes && activateData.changes.status.active) {
                console.log("Savings account activated successfully.");
                setSignupStatus("Signup successful");
                console.log("Navigating to SignupSuccess screen...");
                navigation.navigate("SignupSuccess", {
                  clientId: clientData.clientId,
                  username,
                  password,
                  savingsAccountId: savingsAccountData.savingsId,
                  accountActive: true
                });
              } else {
                console.log("Savings account activation failed.");
                setSignupStatus("Savings account activation failed.");
              }
            } else {
              console.log("Savings account approval failed.");
              setSignupStatus("Savings account approval failed.");
            }
          } else {
            console.log("Savings account creation failed:", savingsAccountData.errors ? savingsAccountData.errors[0].defaultUserMessage : "Unknown error");
            setSignupStatus("Savings account creation failed: " + (savingsAccountData.errors ? savingsAccountData.errors[0].defaultUserMessage : "Unknown error"));
          }
        } else {
          console.log("User creation failed:", userData.errors ? userData.errors[0].defaultUserMessage : "Unknown error");
          setSignupStatus("User creation failed: " + (userData.errors ? userData.errors[0].defaultUserMessage : "Unknown error"));
        }
      } else {
        console.log("Client creation failed:", clientData.errors ? clientData.errors[0].defaultUserMessage : "Unknown error");
        setSignupStatus("Client creation failed: " + (clientData.errors ? clientData.errors[0].defaultUserMessage : "Unknown error"));
        setIsLoading(false);
        return;
      }
    } catch (error) {
      console.error("Signup process error:", error);
      setSignupStatus("Signup failed: " + (error instanceof Error ? error.message : String(error)));
    } finally {
      setIsLoading(false);
      console.log("Signup process completed.");
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("scrollView", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("flexboxLayout", {
    style: styles.container
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    style: styles.content
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-3xl mb-8 font-bold text-center text-white",
    text: "Sign Up"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    style: styles.input,
    hint: "First Name",
    text: firstname,
    onTextChange: args => setFirstname(args.object.text)
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    style: styles.input,
    hint: "Last Name",
    text: lastname,
    onTextChange: args => setLastname(args.object.text)
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    style: styles.input,
    hint: "Email",
    text: email,
    keyboardType: "email",
    onTextChange: args => setEmail(args.object.text)
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    style: styles.input,
    hint: "Mobile Number",
    text: mobileNo,
    keyboardType: "phone",
    onTextChange: args => setMobileNo(args.object.text)
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    style: styles.input,
    hint: "Employer ID",
    text: employerId,
    keyboardType: "number",
    onTextChange: args => setEmployerId(args.object.text)
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    style: styles.input,
    hint: "Username",
    text: username,
    onTextChange: args => setUsername(args.object.text)
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    style: styles.input,
    hint: "Password",
    text: password,
    secure: true,
    onTextChange: args => setPassword(args.object.text)
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    style: styles.input,
    hint: "Repeat Password",
    text: repeatPassword,
    secure: true,
    onTextChange: args => setRepeatPassword(args.object.text)
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    style: styles.button,
    text: isLoading ? "Creating Account..." : "Sign Up",
    onTap: handleSignup,
    isEnabled: !isLoading
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    style: styles.backButton,
    text: "Back to Login",
    onTap: () => navigation.navigate("Login"),
    isEnabled: !isLoading
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: [styles.statusLabel, {
      color: signupStatus.includes("successful") ? "#50E3C2" : "#FF7043"
    }],
    text: signupStatus
  }))));
}
_s(SignupScreen, "Ztbm8BSjuAJ3cNTy3/QlMtvRkqI=");
_c = SignupScreen;
const styles = react_nativescript__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#4A90E2"
  },
  content: {
    width: "80%",
    alignSelf: "center"
  },
  input: {
    fontSize: 18,
    color: "#212121",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginBottom: 15,
    padding: 10
  },
  button: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "#29B6F6",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15
  },
  backButton: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "#50E3C2",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15
  },
  statusLabel: {
    fontSize: 16,
    textAlignment: "center"
  }
});
var _c;
__webpack_require__.$Refresh$.register(_c, "SignupScreen");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/SignupSuccessScreen.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupSuccessScreen: () => (/* binding */ SignupSuccessScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");



function SignupSuccessScreen({
  navigation,
  route
}) {
  const {
    clientId,
    username,
    password,
    savingsAccountId,
    accountActive
  } = route.params;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    style: styles.container
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-3xl mb-8 font-bold text-center text-white",
    text: "Signup Successful"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.infoLabel,
    text: `Client ID: ${clientId}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.infoLabel,
    text: `Username: ${username}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.infoLabel,
    text: `Password: ${password}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.infoLabel,
    text: `Savings Account ID: ${savingsAccountId}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.infoLabel,
    text: `Account Active: ${accountActive ? "Yes" : "No"}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    style: styles.button,
    text: "Go to Login",
    onTap: () => navigation.navigate("Login")
  }));
}
_c = SignupSuccessScreen;
const styles = react_nativescript__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4A90E2"
  },
  infoLabel: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 15
  },
  button: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "#29B6F6",
    borderRadius: 5,
    padding: 10,
    marginTop: 20
  }
});
var _c;
__webpack_require__.$Refresh$.register(_c, "SignupSuccessScreen");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/WithdrawScreen.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WithdrawScreen: () => (/* binding */ WithdrawScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();


function WithdrawScreen({
  navigation
}) {
  _s();
  const [amount, setAmount] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
  const [destinationType, setDestinationType] = react__WEBPACK_IMPORTED_MODULE_0__.useState("mobile");
  const [accountNumber, setAccountNumber] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
  const [bankName, setBankName] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
  const [accountName, setAccountName] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
  const [branchCode, setBranchCode] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
  const [validationMessage, setValidationMessage] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
  const validateAmount = value => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setValidationMessage("Please enter a valid amount");
      return false;
    }
    if (numValue < 100) {
      setValidationMessage("Minimum withdrawal amount is KES 100");
      return false;
    }
    if (numValue > 300000) {
      setValidationMessage("Maximum withdrawal amount is KES 300,000");
      return false;
    }
    setValidationMessage("");
    return true;
  };
  const validateBankDetails = () => {
    if (destinationType === "bank") {
      if (!bankName) {
        setValidationMessage("Please enter bank name");
        return false;
      }
      if (!accountName) {
        setValidationMessage("Please enter account name");
        return false;
      }
      if (!accountNumber || accountNumber.length < 10) {
        setValidationMessage("Please enter a valid account number");
        return false;
      }
      if (!branchCode) {
        setValidationMessage("Please enter branch code");
        return false;
      }
    } else {
      if (!accountNumber || accountNumber.length !== 10) {
        setValidationMessage("Please enter a valid mobile number");
        return false;
      }
    }
    return true;
  };
  const handleConfirm = () => {
    if (!validateAmount(amount)) return;
    if (!validateBankDetails()) return;
    navigation.navigate("WithdrawSuccess", {
      amount: `KES ${amount}`,
      destination: destinationType === "mobile" ? "Mobile Money" : "Bank Account",
      accountNumber: destinationType === "mobile" ? accountNumber : `${bankName} - ${accountNumber}`,
      reference: `WD${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      estimatedTime: destinationType === "mobile" ? "Instant" : "1-2 Business Days",
      ...(destinationType === "bank" && {
        bankName,
        accountName,
        branchCode
      })
    });
  };
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    rows: "auto, *, auto"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    row: 0,
    columns: "auto, *",
    style: styles.header
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    col: 0,
    text: "\u2190",
    onTap: () => navigation.goBack(),
    style: styles.backButton
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    col: 1,
    text: "Withdraw Funds",
    style: styles.headerText
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("scrollView", {
    row: 1
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    style: styles.container
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.card,
    rows: "auto, auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.sectionTitle,
    text: "Amount to Withdraw"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    row: 1,
    style: styles.input,
    keyboardType: "number",
    hint: "Enter amount",
    text: amount,
    onTextChange: args => {
      const newAmount = args.object.text;
      setAmount(newAmount);
      validateAmount(newAmount);
    }
  }), validationMessage ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 2,
    style: styles.validationMessage,
    text: validationMessage
  }) : null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.card,
    rows: "auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.sectionTitle,
    text: "Withdraw To"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    row: 1,
    columns: "*, *",
    style: styles.destinationContainer
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    col: 0,
    style: [styles.destinationButton, destinationType === "mobile" && styles.activeDestination],
    text: "Mobile Money",
    onTap: () => setDestinationType("mobile")
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    col: 1,
    style: [styles.destinationButton, destinationType === "bank" && styles.activeDestination],
    text: "Bank Account",
    onTap: () => setDestinationType("bank")
  }))), destinationType === "mobile" ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.card,
    rows: "auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.sectionTitle,
    text: "Mobile Number"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    row: 1,
    style: styles.input,
    hint: "Enter mobile number",
    keyboardType: "phone",
    text: accountNumber,
    onTextChange: args => setAccountNumber(args.object.text)
  })) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.card,
    rows: "auto, auto, auto, auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.sectionTitle,
    text: "Bank Details"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    row: 1,
    style: styles.input,
    hint: "Bank Name",
    text: bankName,
    onTextChange: args => setBankName(args.object.text)
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    row: 2,
    style: styles.input,
    hint: "Account Name",
    text: accountName,
    onTextChange: args => setAccountName(args.object.text)
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    row: 3,
    style: styles.input,
    hint: "Account Number",
    keyboardType: "number",
    text: accountNumber,
    onTextChange: args => setAccountNumber(args.object.text)
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    row: 4,
    style: styles.input,
    hint: "Branch Code",
    text: branchCode,
    onTextChange: args => setBranchCode(args.object.text)
  })), validationMessage ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.validationMessage,
    text: validationMessage
  }) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.card,
    rows: "auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.sectionTitle,
    text: "Summary"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    row: 1
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Amount: KES ${amount || '0'}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Destination: ${destinationType === "mobile" ? "Mobile Money" : "Bank Account"}`
  }), destinationType === "mobile" ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Mobile Number: ${accountNumber || 'Not set'}`
  }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Bank: ${bankName || 'Not set'}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Account Name: ${accountName || 'Not set'}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Account Number: ${accountNumber || 'Not set'}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Branch Code: ${branchCode || 'Not set'}`
  })))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    row: 2,
    style: styles.confirmButton,
    text: "Confirm Withdrawal",
    onTap: handleConfirm
  }));
}
_s(WithdrawScreen, "PJPYZdUij8L8b8JLx1hOEiGkulY=");
_c = WithdrawScreen;
const styles = react_nativescript__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0"
  },
  backButton: {
    fontSize: 24,
    color: "#4A90E2",
    backgroundColor: "transparent",
    width: 40
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#212121"
  },
  container: {
    padding: 16,
    backgroundColor: "#F5F5F5"
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 10
  },
  input: {
    fontSize: 16,
    color: "#212121",
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10 // Added margin for bank details inputs
  },
  destinationContainer: {
    marginBottom: 8
  },
  destinationButton: {
    fontSize: 14,
    backgroundColor: "#E0E0E0",
    color: "#757575",
    borderRadius: 5,
    margin: 4,
    padding: 10
  },
  activeDestination: {
    backgroundColor: "#4A90E2",
    color: "#FFFFFF"
  },
  validationMessage: {
    fontSize: 12,
    color: "#EF5350",
    marginTop: 4
  },
  summaryText: {
    fontSize: 14,
    color: "#212121",
    marginBottom: 4
  },
  confirmButton: {
    backgroundColor: "#FF7043",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    padding: 16,
    margin: 16,
    borderRadius: 5
  }
});
var _c;
__webpack_require__.$Refresh$.register(_c, "WithdrawScreen");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/WithdrawSuccessScreen.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WithdrawSuccessScreen: () => (/* binding */ WithdrawSuccessScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");



function WithdrawSuccessScreen({
  navigation,
  route
}) {
  const {
    amount,
    destination,
    accountNumber,
    reference,
    estimatedTime
  } = route.params;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    style: styles.container
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.successIcon,
    text: "\u2713"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.title,
    text: "Withdrawal Initiated!"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.message,
    text: "Your withdrawal request has been processed."
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    style: styles.summaryCard
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryTitle,
    text: "Withdrawal Details"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Amount: ${amount}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Destination: ${destination}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Account: ${accountNumber}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Reference: ${reference}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.summaryText,
    text: `Estimated Time: ${estimatedTime}`
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    style: styles.button,
    text: "Return to Dashboard",
    onTap: () => navigation.navigate("Dashboard")
  }));
}
_c = WithdrawSuccessScreen;
const styles = react_nativescript__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#F5F5F5",
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  successIcon: {
    fontSize: 72,
    color: "#66BB6A",
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 10,
    textAlignment: "center"
  },
  message: {
    fontSize: 16,
    color: "#757575",
    marginBottom: 30,
    textAlignment: "center"
  },
  summaryCard: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    elevation: 3
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 15
  },
  summaryText: {
    fontSize: 16,
    color: "#212121",
    marginBottom: 8
  },
  button: {
    fontSize: 16,
    color: "#FFFFFF",
    backgroundColor: "#FF7043",
    borderRadius: 5,
    padding: 15,
    width: "100%"
  }
});
var _c;
__webpack_require__.$Refresh$.register(_c, "WithdrawSuccessScreen");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/context/UserContext.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserProvider: () => (/* binding */ UserProvider),
/* harmony export */   useUser: () => (/* binding */ useUser)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature(),
  _s2 = __webpack_require__.$Refresh$.signature();

const UserContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
const UserProvider = ({
  children
}) => {
  _s();
  const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UserContext.Provider, {
    value: {
      userData,
      setUserData
    }
  }, children);
};
_s(UserProvider, "hXjgW5Dna7AfY8GclqpRKYNaYWw=");
_c = UserProvider;
const useUser = () => {
  _s2();
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
_s2(useUser, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__webpack_require__.$Refresh$.register(_c, "UserProvider");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "~/package.json":
/***/ ((module) => {

module.exports = require("~/package.json");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor"], () => (__webpack_exec__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js"), __webpack_exec__("./node_modules/@nativescript/core/globals/index.js"), __webpack_exec__("./node_modules/@nativescript/core/bundle-entry-points.js"), __webpack_exec__("./src/app.ts"), __webpack_exec__("./node_modules/@nativescript/core/ui/frame/index.android.js"), __webpack_exec__("./node_modules/@nativescript/core/ui/frame/activity.android.js")));
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUtBLEtBQUssTUFBTSxHQUFPO0FBQ3lCO0FBQ0w7QUFFbEQ7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0FHLE1BQU0sQ0FBQ0MsYUFBa0M7RUFBRUMsS0FBSyxFQUFFO0FBQUssQ0FBRSxDQUFDO0FBRTFESixjQUFpRTtBQUVqRTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7O0FBRUEsc0NBQXNDLGtDQUFrQyxVQUFVLHNFQUFzRSxvRUFBb0UsRUFBRSxvRUFBb0UsRUFBRSwrREFBK0QsRUFBRSwrREFBK0QsRUFBRSwwREFBMEQsRUFBRSwwREFBMEQsRUFBRSwwREFBMEQsRUFBRSwyREFBMkQsRUFBRSwyREFBMkQsRUFBRSx3REFBd0QsRUFBRSx3REFBd0QsRUFBRSw2REFBNkQsRUFBRSxrRkFBa0YsRUFBRSx5RUFBeUUsRUFBRSx3RUFBd0UsRUFBRSx1RUFBdUUsRUFBRSx1REFBdUQsRUFBRSw2REFBNkQsRUFBRSwyREFBMkQsRUFBRSw0REFBNEQsRUFBRSw2REFBNkQsRUFBRSx5REFBeUQsRUFBRSwyREFBMkQsRUFBRSx3REFBd0QsRUFBRSw4REFBOEQsRUFBRSxnRUFBZ0UsRUFBRSxzRUFBc0UsRUFBRSxvRUFBb0UsRUFBRSxxRUFBcUUsRUFBRSxzRUFBc0UsRUFBRSxrRUFBa0UsRUFBRSxtRUFBbUUsRUFBRSxvRUFBb0UsRUFBRSxpRUFBaUUsRUFBRSwrREFBK0QsRUFBRSxpRUFBaUUsRUFBRSxnRUFBZ0UsRUFBRSxnRUFBZ0UsRUFBRSxFQUFFLDBEQUEwRCxvRUFBb0UsRUFBRSxvRUFBb0UsRUFBRSwrREFBK0QsRUFBRSwrREFBK0QsRUFBRSwwREFBMEQsRUFBRSwwREFBMEQsRUFBRSwwREFBMEQsRUFBRSwyREFBMkQsRUFBRSwyREFBMkQsRUFBRSx3REFBd0QsRUFBRSx3REFBd0QsRUFBRSw2REFBNkQsRUFBRSxrRkFBa0YsRUFBRSx5RUFBeUUsRUFBRSx3RUFBd0UsRUFBRSx1RUFBdUUsRUFBRSx1REFBdUQsRUFBRSw2REFBNkQsRUFBRSwyREFBMkQsRUFBRSw0REFBNEQsRUFBRSw2REFBNkQsRUFBRSx5REFBeUQsRUFBRSwyREFBMkQsRUFBRSx3REFBd0QsRUFBRSw4REFBOEQsRUFBRSxnRUFBZ0UsRUFBRSxzRUFBc0UsRUFBRSxvRUFBb0UsRUFBRSxxRUFBcUUsRUFBRSxzRUFBc0UsRUFBRSxrRUFBa0UsRUFBRSxtRUFBbUUsRUFBRSxvRUFBb0UsRUFBRSxpRUFBaUUsRUFBRSwrREFBK0QsRUFBRSxpRUFBaUUsRUFBRSxnRUFBZ0UsRUFBRSxnRUFBZ0UsRUFBRSxFQUFFLDBEQUEwRCx1REFBdUQsRUFBRSxFQUFFLHFEQUFxRCw2REFBNkQsRUFBRSxFQUFFLHFEQUFxRCw2REFBNkQsRUFBRSxFQUFFLDBEQUEwRCwyT0FBMk8sRUFBRSxFQUFFLHdEQUF3RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLDREQUE0RCw4REFBOEQsRUFBRSxFQUFFLHlEQUF5RCx5REFBeUQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCx5REFBeUQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLDBEQUEwRCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw4REFBOEQsRUFBRSxFQUFFLDJEQUEyRCxnRUFBZ0UsRUFBRSw0RkFBNEYsRUFBRSxFQUFFLHVEQUF1RCxtSkFBbUosRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsRUFBRSx3REFBd0QsRUFBRSxFQUFFLHdEQUF3RCxxRUFBcUUsRUFBRSwwREFBMEQsRUFBRTtBQUNyOE8saUVBQWUsNEJBQTRCO0FBQzNDLFFBQVEseUJBQXlCLEVBQUUsbUJBQU8sQ0FBQyw2REFBMkM7QUFDdEY7QUFDQSxHQUFHLElBQVU7QUFDYixDQUFDLGlCQUFpQjtBQUNsQixDQUFDLFVBQVU7QUFDWCxVQUFVLDRCQUE0QixFQUFFLG1CQUFPLENBQUMsNkRBQTJDO0FBQzNGO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaTyxNQUFNSyxVQUFVLEdBQUc7RUFDeEJDLFFBQVEsRUFBRSxxQkFBcUI7RUFDL0JDLHVCQUF1QixFQUFFLDBDQUEwQztFQUNuRUMsZ0JBQWdCLEVBQUUsbUNBQW1DO0VBQ3JEQyx5QkFBeUIsRUFBRSwyQ0FBMkM7RUFDdEVDLHFCQUFxQixFQUFFLHdDQUF3QztFQUMvREMsY0FBYyxFQUFFLGlDQUFpQztFQUNqREMseUJBQXlCLEVBQUU7Q0FDNUI7QUFFTSxNQUFNQyxRQUFRLEdBQUc7RUFDdEJDLFFBQVEsRUFBRSxPQUFPO0VBQ2pCQyxRQUFRLEVBQUU7Q0FDWDtBQUVNLE1BQU1DLFNBQVMsR0FBRyxTQUFTO0FBRTNCLE1BQU1DLFdBQVcsR0FBRyxjQUFjO0FBQ2xDLE1BQU1DLE1BQU0sR0FBRyxJQUFJO0FBRW5CLE1BQU1DLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUV0QixNQUFNQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUV0QixNQUFNQyxhQUFhLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQztBQUNpQjtBQWlCMUMsU0FBVUUsa0JBQWtCQSxDQUFDO0VBQUVDLFVBQVU7RUFBRUM7QUFBSyxDQUEyQjtFQUFBQyxFQUFBO0VBQy9FLE1BQU07SUFBRUMsUUFBUTtJQUFFQyxXQUFXO0lBQUVDLFNBQVM7SUFBRUM7RUFBUyxDQUFFLEdBQUdMLEtBQUssQ0FBQ00sTUFBTTtFQUNwRSxNQUFNLENBQUNDLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdsQywyQ0FBYyxDQUFDLEVBQUUsQ0FBQztFQUM5QyxNQUFNLENBQUNvQyxZQUFZLEVBQUVDLGVBQWUsQ0FBQyxHQUFHckMsMkNBQWMsQ0FBQyxLQUFLLENBQUM7RUFDN0QsTUFBTSxDQUFDc0MsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR3ZDLDJDQUFjLENBQUMsU0FBUyxDQUFDO0VBQzNELE1BQU0sQ0FBQ3dDLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUd6QywyQ0FBYyxDQUFDLEVBQUUsQ0FBQztFQUNwRCxNQUFNLENBQUMwQyxpQkFBaUIsRUFBRUMsb0JBQW9CLENBQUMsR0FBRzNDLDJDQUFjLENBQUMsRUFBRSxDQUFDO0VBRXBFLE1BQU00QyxjQUFjLEdBQUl2QyxLQUFhLElBQUk7SUFDdkMsTUFBTXdDLFFBQVEsR0FBR0MsVUFBVSxDQUFDekMsS0FBSyxDQUFDO0lBQ2xDLElBQUkwQyxLQUFLLENBQUNGLFFBQVEsQ0FBQyxFQUFFO01BQ25CRixvQkFBb0IsQ0FBQyw2QkFBNkIsQ0FBQztNQUNuRCxPQUFPLEtBQUs7SUFDZDtJQUNBLElBQUlFLFFBQVEsR0FBR2YsU0FBUyxFQUFFO01BQ3hCYSxvQkFBb0IsQ0FBQywrQkFBK0JiLFNBQVMsRUFBRSxDQUFDO01BQ2hFLE9BQU8sS0FBSztJQUNkO0lBQ0EsSUFBSWUsUUFBUSxHQUFHZCxTQUFTLEVBQUU7TUFDeEJZLG9CQUFvQixDQUFDLCtCQUErQlosU0FBUyxFQUFFLENBQUM7TUFDaEUsT0FBTyxLQUFLO0lBQ2Q7SUFDQVksb0JBQW9CLENBQUMsRUFBRSxDQUFDO0lBQ3hCLE9BQU8sSUFBSTtFQUNiLENBQUM7RUFFRCxNQUFNSyxhQUFhLEdBQUdBLENBQUEsS0FBSztJQUN6QixJQUFJSixjQUFjLENBQUNYLE1BQU0sQ0FBQyxFQUFFO01BQzFCO01BQ0FSLFVBQVUsQ0FBQ3dCLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtRQUN6Q2hCLE1BQU07UUFDTkssU0FBUztRQUNURSxTQUFTO1FBQ1RaLFFBQVE7UUFDUkM7T0FDRCxDQUFDO0lBQ0o7RUFDRixDQUFDO0VBRUQsT0FDRTdCLGdEQUFBO0lBQVltRCxJQUFJLEVBQUM7RUFBZSxHQUM5Qm5ELGdEQUFBO0lBQVlvRCxHQUFHLEVBQUUsQ0FBQztJQUFFQyxPQUFPLEVBQUMsU0FBUztJQUFDQyxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0M7RUFBTSxHQUN4RHhELGdEQUFBO0lBQVF5RCxHQUFHLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUMsUUFBRztJQUFDQyxLQUFLLEVBQUVBLENBQUEsS0FBTWxDLFVBQVUsQ0FBQ21DLE1BQU0sRUFBRTtJQUFFTixLQUFLLEVBQUVDLE1BQU0sQ0FBQ007RUFBVSxFQUFJLEVBQ3ZGN0QsZ0RBQUE7SUFBT3lELEdBQUcsRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBQyxxQkFBcUI7SUFBQ0osS0FBSyxFQUFFQyxNQUFNLENBQUNPO0VBQVUsRUFBSSxDQUMzRCxFQUViOUQsZ0RBQUE7SUFBWW9ELEdBQUcsRUFBRTtFQUFDLEdBQ2hCcEQsZ0RBQUE7SUFBYXNELEtBQUssRUFBRUMsTUFBTSxDQUFDUTtFQUFTLEdBQ2xDL0QsZ0RBQUE7SUFBWXNELEtBQUssRUFBRUMsTUFBTSxDQUFDUyxJQUFJO0lBQUViLElBQUksRUFBQyxZQUFZO0lBQUNFLE9BQU8sRUFBQztFQUFHLEdBQzNEckQsZ0RBQUE7SUFBT29ELEdBQUcsRUFBRSxDQUFDO0lBQUVFLEtBQUssRUFBRUMsTUFBTSxDQUFDVSxZQUFZO0lBQUVQLElBQUksRUFBRTlCO0VBQVEsRUFBSSxFQUM3RDVCLGdEQUFBO0lBQU9vRCxHQUFHLEVBQUUsQ0FBQztJQUFFRSxLQUFLLEVBQUVDLE1BQU0sQ0FBQzFCLFdBQVc7SUFBRTZCLElBQUksRUFBRTdCO0VBQVcsRUFBSSxDQUNwRCxFQUdiN0IsZ0RBQUE7SUFBWXNELEtBQUssRUFBRUMsTUFBTSxDQUFDUyxJQUFJO0lBQUViLElBQUksRUFBQyxrQkFBa0I7SUFBQ0UsT0FBTyxFQUFDO0VBQUcsR0FDakVyRCxnREFBQTtJQUFPb0QsR0FBRyxFQUFFLENBQUM7SUFBRUUsS0FBSyxFQUFFQyxNQUFNLENBQUNXLFlBQVk7SUFBRVIsSUFBSSxFQUFDO0VBQXFCLEVBQUcsRUFDeEUxRCxnREFBQTtJQUFZb0QsR0FBRyxFQUFFLENBQUM7SUFBRUMsT0FBTyxFQUFDLFNBQVM7SUFBQ0MsS0FBSyxFQUFFQyxNQUFNLENBQUNZO0VBQWMsR0FDaEVuRSxnREFBQTtJQUNFeUQsR0FBRyxFQUFFLENBQUM7SUFDTkgsS0FBSyxFQUFFQyxNQUFNLENBQUNhLEtBQUs7SUFDbkJDLFlBQVksRUFBQyxRQUFRO0lBQ3JCQyxJQUFJLEVBQUMsY0FBYztJQUNuQlosSUFBSSxFQUFFekIsTUFBTTtJQUNac0MsWUFBWSxFQUFHQyxJQUFJLElBQUk7TUFDckIsTUFBTUMsU0FBUyxHQUFHRCxJQUFJLENBQUNFLE1BQU0sQ0FBQ2hCLElBQUk7TUFDbEN4QixTQUFTLENBQUN1QyxTQUFTLENBQUM7TUFDcEI3QixjQUFjLENBQUM2QixTQUFTLENBQUM7SUFDM0I7RUFBQyxFQUNELEVBQ0Z6RSxnREFBQTtJQUNFeUQsR0FBRyxFQUFFLENBQUM7SUFDTkgsS0FBSyxFQUFFLENBQUNDLE1BQU0sQ0FBQ29CLFVBQVUsRUFBRXZDLFlBQVksSUFBSW1CLE1BQU0sQ0FBQ3FCLFlBQVksQ0FBQztJQUMvRGxCLElBQUksRUFBRXRCLFlBQVksR0FBRyxHQUFHLEdBQUcsS0FBSztJQUNoQ3VCLEtBQUssRUFBRUEsQ0FBQSxLQUFNdEIsZUFBZSxDQUFDLENBQUNELFlBQVk7RUFBQyxFQUMzQyxDQUNTLEVBQ1pNLGlCQUFpQixHQUNoQjFDLGdEQUFBO0lBQU9vRCxHQUFHLEVBQUUsQ0FBQztJQUFFRSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ2IsaUJBQWlCO0lBQUVnQixJQUFJLEVBQUVoQjtFQUFpQixFQUFJLEdBQ3pFLElBQUksQ0FDRyxFQUdiMUMsZ0RBQUE7SUFBWXNELEtBQUssRUFBRUMsTUFBTSxDQUFDUyxJQUFJO0lBQUViLElBQUksRUFBQyxZQUFZO0lBQUNFLE9BQU8sRUFBQztFQUFHLEdBQzNEckQsZ0RBQUE7SUFBT29ELEdBQUcsRUFBRSxDQUFDO0lBQUVFLEtBQUssRUFBRUMsTUFBTSxDQUFDVyxZQUFZO0lBQUVSLElBQUksRUFBQztFQUFXLEVBQUcsRUFDOUQxRCxnREFBQTtJQUFZb0QsR0FBRyxFQUFFLENBQUM7SUFBRUMsT0FBTyxFQUFDLE1BQU07SUFBQ0MsS0FBSyxFQUFFQyxNQUFNLENBQUNzQjtFQUFrQixHQUNqRTdFLGdEQUFBO0lBQ0V5RCxHQUFHLEVBQUUsQ0FBQztJQUNOSCxLQUFLLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDdUIsZUFBZSxFQUFFeEMsU0FBUyxLQUFLLFNBQVMsSUFBSWlCLE1BQU0sQ0FBQ3dCLGVBQWUsQ0FBQztJQUNsRnJCLElBQUksRUFBQyxTQUFTO0lBQ2RDLEtBQUssRUFBRUEsQ0FBQSxLQUFNcEIsWUFBWSxDQUFDLFNBQVM7RUFBQyxFQUNwQyxFQUNGdkMsZ0RBQUE7SUFDRXlELEdBQUcsRUFBRSxDQUFDO0lBQ05ILEtBQUssRUFBRSxDQUFDQyxNQUFNLENBQUN1QixlQUFlLEVBQUV4QyxTQUFTLEtBQUssV0FBVyxJQUFJaUIsTUFBTSxDQUFDd0IsZUFBZSxDQUFDO0lBQ3BGckIsSUFBSSxFQUFDLFdBQVc7SUFDaEJDLEtBQUssRUFBRUEsQ0FBQSxLQUFNcEIsWUFBWSxDQUFDLFdBQVc7RUFBQyxFQUN0QyxDQUNTLENBQ0YsRUFHYnZDLGdEQUFBO0lBQVlzRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ1MsSUFBSTtJQUFFYixJQUFJLEVBQUMsWUFBWTtJQUFDRSxPQUFPLEVBQUM7RUFBRyxHQUMzRHJELGdEQUFBO0lBQU9vRCxHQUFHLEVBQUUsQ0FBQztJQUFFRSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ1csWUFBWTtJQUFFUixJQUFJLEVBQUM7RUFBWSxFQUFHLEVBQy9EMUQsZ0RBQUE7SUFDRW9ELEdBQUcsRUFBRSxDQUFDO0lBQ05FLEtBQUssRUFBRUMsTUFBTSxDQUFDYSxLQUFLO0lBQ25CRSxJQUFJLEVBQUMsWUFBWTtJQUNqQlosSUFBSSxFQUFFbEIsU0FBUztJQUNmK0IsWUFBWSxFQUFHQyxJQUFJLElBQUsvQixZQUFZLENBQUMrQixJQUFJLENBQUNFLE1BQU0sQ0FBQ2hCLElBQUk7RUFBQyxFQUN0RCxDQUNTLEVBR2IxRCxnREFBQTtJQUFZc0QsS0FBSyxFQUFFQyxNQUFNLENBQUNTLElBQUk7SUFBRWIsSUFBSSxFQUFDLFlBQVk7SUFBQ0UsT0FBTyxFQUFDO0VBQUcsR0FDM0RyRCxnREFBQTtJQUFPb0QsR0FBRyxFQUFFLENBQUM7SUFBRUUsS0FBSyxFQUFFQyxNQUFNLENBQUNXLFlBQVk7SUFBRVIsSUFBSSxFQUFDO0VBQVMsRUFBRyxFQUM1RDFELGdEQUFBO0lBQWFvRCxHQUFHLEVBQUU7RUFBQyxHQUNqQnBELGdEQUFBO0lBQU9zRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ3lCLFdBQVc7SUFBRXRCLElBQUksRUFBRSxXQUFXdEIsWUFBWSxHQUFHSCxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBR0EsTUFBTTtFQUFFLEVBQUksRUFDdEdqQyxnREFBQTtJQUFPc0QsS0FBSyxFQUFFQyxNQUFNLENBQUN5QixXQUFXO0lBQUV0QixJQUFJLEVBQUUsY0FBY3BCLFNBQVM7RUFBRSxFQUFJLEVBQ3JFdEMsZ0RBQUE7SUFBT3NELEtBQUssRUFBRUMsTUFBTSxDQUFDeUIsV0FBVztJQUFFdEIsSUFBSSxFQUFFLGVBQWVsQixTQUFTLElBQUksU0FBUztFQUFFLEVBQUksQ0FDdkUsQ0FDSCxDQUNELENBQ0gsRUFFYnhDLGdEQUFBO0lBQVFvRCxHQUFHLEVBQUUsQ0FBQztJQUFFRSxLQUFLLEVBQUVDLE1BQU0sQ0FBQzBCLGFBQWE7SUFBRXZCLElBQUksRUFBQyxTQUFTO0lBQUNDLEtBQUssRUFBRVg7RUFBYSxFQUFJLENBQ3pFO0FBRWpCO0FBQUNyQixFQUFBLENBL0hlSCxrQkFBa0I7QUFBQTBELEVBQUEsR0FBbEIxRCxrQkFBa0I7QUFpSWxDLE1BQU0rQixNQUFNLEdBQUdoQywwREFBVSxDQUFDNEQsTUFBTSxDQUFDO0VBQy9CM0IsTUFBTSxFQUFFO0lBQ040QixlQUFlLEVBQUUsU0FBUztJQUMxQkMsT0FBTyxFQUFFLEVBQUU7SUFDWEMsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQkMsaUJBQWlCLEVBQUU7R0FDcEI7RUFDRDFCLFVBQVUsRUFBRTtJQUNWMkIsUUFBUSxFQUFFLEVBQUU7SUFDWkMsS0FBSyxFQUFFLFNBQVM7SUFDaEJMLGVBQWUsRUFBRSxhQUFhO0lBQzlCTSxLQUFLLEVBQUU7R0FDUjtFQUNENUIsVUFBVSxFQUFFO0lBQ1YwQixRQUFRLEVBQUUsRUFBRTtJQUNaRyxVQUFVLEVBQUUsTUFBTTtJQUNsQkYsS0FBSyxFQUFFO0dBQ1I7RUFDRDFCLFNBQVMsRUFBRTtJQUNUc0IsT0FBTyxFQUFFLEVBQUU7SUFDWEQsZUFBZSxFQUFFO0dBQ2xCO0VBQ0RwQixJQUFJLEVBQUU7SUFDSm9CLGVBQWUsRUFBRSxTQUFTO0lBQzFCUSxZQUFZLEVBQUUsRUFBRTtJQUNoQlAsT0FBTyxFQUFFLEVBQUU7SUFDWFEsWUFBWSxFQUFFLEVBQUU7SUFDaEJDLFNBQVMsRUFBRTtHQUNaO0VBQ0Q3QixZQUFZLEVBQUU7SUFDWnVCLFFBQVEsRUFBRSxFQUFFO0lBQ1pHLFVBQVUsRUFBRSxNQUFNO0lBQ2xCRixLQUFLLEVBQUU7R0FDUjtFQUNENUQsV0FBVyxFQUFFO0lBQ1gyRCxRQUFRLEVBQUUsRUFBRTtJQUNaQyxLQUFLLEVBQUU7R0FDUjtFQUNEdkIsWUFBWSxFQUFFO0lBQ1pzQixRQUFRLEVBQUUsRUFBRTtJQUNaRyxVQUFVLEVBQUUsTUFBTTtJQUNsQkYsS0FBSyxFQUFFLFNBQVM7SUFDaEJJLFlBQVksRUFBRTtHQUNmO0VBQ0QxQixjQUFjLEVBQUU7SUFDZDBCLFlBQVksRUFBRTtHQUNmO0VBQ0R6QixLQUFLLEVBQUU7SUFDTG9CLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEtBQUssRUFBRSxTQUFTO0lBQ2hCTCxlQUFlLEVBQUUsU0FBUztJQUMxQkMsT0FBTyxFQUFFLEVBQUU7SUFDWE8sWUFBWSxFQUFFO0dBQ2Y7RUFDRGpCLFVBQVUsRUFBRTtJQUNWZSxLQUFLLEVBQUUsRUFBRTtJQUNURixRQUFRLEVBQUUsRUFBRTtJQUNaSixlQUFlLEVBQUUsU0FBUztJQUMxQkssS0FBSyxFQUFFLFNBQVM7SUFDaEJHLFlBQVksRUFBRSxDQUFDO0lBQ2ZHLFVBQVUsRUFBRTtHQUNiO0VBQ0RuQixZQUFZLEVBQUU7SUFDWlEsZUFBZSxFQUFFLFNBQVM7SUFDMUJLLEtBQUssRUFBRTtHQUNSO0VBQ0RaLGtCQUFrQixFQUFFO0lBQ2xCZ0IsWUFBWSxFQUFFO0dBQ2Y7RUFDRGYsZUFBZSxFQUFFO0lBQ2ZVLFFBQVEsRUFBRSxFQUFFO0lBQ1pKLGVBQWUsRUFBRSxTQUFTO0lBQzFCSyxLQUFLLEVBQUUsU0FBUztJQUNoQkcsWUFBWSxFQUFFLENBQUM7SUFDZkksTUFBTSxFQUFFO0dBQ1Q7RUFDRGpCLGVBQWUsRUFBRTtJQUNmSyxlQUFlLEVBQUUsU0FBUztJQUMxQkssS0FBSyxFQUFFO0dBQ1I7RUFDRC9DLGlCQUFpQixFQUFFO0lBQ2pCOEMsUUFBUSxFQUFFLEVBQUU7SUFDWkMsS0FBSyxFQUFFLFNBQVM7SUFDaEJRLFNBQVMsRUFBRTtHQUNaO0VBQ0RqQixXQUFXLEVBQUU7SUFDWFEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsS0FBSyxFQUFFLFNBQVM7SUFDaEJJLFlBQVksRUFBRTtHQUNmO0VBQ0RaLGFBQWEsRUFBRTtJQUNiRyxlQUFlLEVBQUUsU0FBUztJQUMxQkssS0FBSyxFQUFFLFNBQVM7SUFDaEJELFFBQVEsRUFBRSxFQUFFO0lBQ1pHLFVBQVUsRUFBRSxNQUFNO0lBQ2xCTixPQUFPLEVBQUUsRUFBRTtJQUNYVyxNQUFNLEVBQUUsRUFBRTtJQUNWSixZQUFZLEVBQUU7O0NBRWpCLENBQUM7QUFBQyxJQUFBVixFQUFBO0FBQUFnQixzQ0FBQSxDQUFBaEIsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFA0QjtBQUNpQjtBQWtCMUMsU0FBVWlCLHlCQUF5QkEsQ0FBQztFQUFFMUUsVUFBVTtFQUFFQztBQUFLLENBQWtDO0VBQzdGLE1BQU07SUFBRU8sTUFBTTtJQUFFSyxTQUFTO0lBQUVFLFNBQVM7SUFBRVosUUFBUTtJQUFFQztFQUFXLENBQUUsR0FBR0gsS0FBSyxDQUFDTSxNQUFNO0VBRTVFLE9BQ0VoQyxnREFBQTtJQUFhc0QsS0FBSyxFQUFFQyxNQUFNLENBQUNRO0VBQVMsR0FDbEMvRCxnREFBQTtJQUFPc0QsS0FBSyxFQUFFQyxNQUFNLENBQUM2QyxXQUFXO0lBQUUxQyxJQUFJLEVBQUM7RUFBRyxFQUFHLEVBQzdDMUQsZ0RBQUE7SUFBT3NELEtBQUssRUFBRUMsTUFBTSxDQUFDOEMsS0FBSztJQUFFM0MsSUFBSSxFQUFDO0VBQW1DLEVBQUcsRUFDdkUxRCxnREFBQTtJQUFPc0QsS0FBSyxFQUFFQyxNQUFNLENBQUMrQyxPQUFPO0lBQUU1QyxJQUFJLEVBQUM7RUFBbUQsRUFBRyxFQUV6RjFELGdEQUFBO0lBQWFzRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ2dEO0VBQVcsR0FDcEN2RyxnREFBQTtJQUFPc0QsS0FBSyxFQUFFQyxNQUFNLENBQUNpRCxZQUFZO0lBQUU5QyxJQUFJLEVBQUM7RUFBc0IsRUFBRyxFQUNqRTFELGdEQUFBO0lBQU9zRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ3lCLFdBQVc7SUFBRXRCLElBQUksRUFBRSxhQUFhOUIsUUFBUTtFQUFFLEVBQUksRUFDbkU1QixnREFBQTtJQUFPc0QsS0FBSyxFQUFFQyxNQUFNLENBQUN5QixXQUFXO0lBQUV0QixJQUFJLEVBQUUsWUFBWTdCLFdBQVc7RUFBRSxFQUFJLEVBQ3JFN0IsZ0RBQUE7SUFBT3NELEtBQUssRUFBRUMsTUFBTSxDQUFDeUIsV0FBVztJQUFFdEIsSUFBSSxFQUFFLGVBQWV6QixNQUFNO0VBQUUsRUFBSSxFQUNuRWpDLGdEQUFBO0lBQU9zRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ3lCLFdBQVc7SUFBRXRCLElBQUksRUFBRSxjQUFjcEIsU0FBUztFQUFFLEVBQUksRUFDckV0QyxnREFBQTtJQUFPc0QsS0FBSyxFQUFFQyxNQUFNLENBQUN5QixXQUFXO0lBQUV0QixJQUFJLEVBQUUsZUFBZWxCLFNBQVM7RUFBRSxFQUFJLENBQzFELEVBRWR4QyxnREFBQTtJQUNFc0QsS0FBSyxFQUFFQyxNQUFNLENBQUNrRCxNQUFNO0lBQ3BCL0MsSUFBSSxFQUFDLHFCQUFxQjtJQUMxQkMsS0FBSyxFQUFFQSxDQUFBLEtBQU1sQyxVQUFVLENBQUN3QixRQUFRLENBQUMsV0FBVztFQUFDLEVBQzdDLENBQ1U7QUFFbEI7QUFBQ2lDLEVBQUEsR0F6QmVpQix5QkFBeUI7QUEyQnpDLE1BQU01QyxNQUFNLEdBQUdoQywwREFBVSxDQUFDNEQsTUFBTSxDQUFDO0VBQy9CcEIsU0FBUyxFQUFFO0lBQ1QyQyxNQUFNLEVBQUUsTUFBTTtJQUNkdEIsZUFBZSxFQUFFLFNBQVM7SUFDMUJDLE9BQU8sRUFBRSxFQUFFO0lBQ1hzQixjQUFjLEVBQUUsUUFBUTtJQUN4QkMsVUFBVSxFQUFFO0dBQ2I7RUFDRFIsV0FBVyxFQUFFO0lBQ1haLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEtBQUssRUFBRSxTQUFTO0lBQ2hCSSxZQUFZLEVBQUU7R0FDZjtFQUNEUSxLQUFLLEVBQUU7SUFDTGIsUUFBUSxFQUFFLEVBQUU7SUFDWkcsVUFBVSxFQUFFLE1BQU07SUFDbEJGLEtBQUssRUFBRSxTQUFTO0lBQ2hCSSxZQUFZLEVBQUUsRUFBRTtJQUNoQmdCLGFBQWEsRUFBRTtHQUNoQjtFQUNEUCxPQUFPLEVBQUU7SUFDUGQsUUFBUSxFQUFFLEVBQUU7SUFDWkMsS0FBSyxFQUFFLFNBQVM7SUFDaEJJLFlBQVksRUFBRSxFQUFFO0lBQ2hCZ0IsYUFBYSxFQUFFO0dBQ2hCO0VBQ0ROLFdBQVcsRUFBRTtJQUNYbkIsZUFBZSxFQUFFLFNBQVM7SUFDMUJNLEtBQUssRUFBRSxNQUFNO0lBQ2JFLFlBQVksRUFBRSxFQUFFO0lBQ2hCUCxPQUFPLEVBQUUsRUFBRTtJQUNYUSxZQUFZLEVBQUUsRUFBRTtJQUNoQkMsU0FBUyxFQUFFO0dBQ1o7RUFDRFUsWUFBWSxFQUFFO0lBQ1poQixRQUFRLEVBQUUsRUFBRTtJQUNaRyxVQUFVLEVBQUUsTUFBTTtJQUNsQkYsS0FBSyxFQUFFLFNBQVM7SUFDaEJJLFlBQVksRUFBRTtHQUNmO0VBQ0RiLFdBQVcsRUFBRTtJQUNYUSxRQUFRLEVBQUUsRUFBRTtJQUNaQyxLQUFLLEVBQUUsU0FBUztJQUNoQkksWUFBWSxFQUFFO0dBQ2Y7RUFDRFksTUFBTSxFQUFFO0lBQ05qQixRQUFRLEVBQUUsRUFBRTtJQUNaQyxLQUFLLEVBQUUsU0FBUztJQUNoQkwsZUFBZSxFQUFFLFNBQVM7SUFDMUJRLFlBQVksRUFBRSxDQUFDO0lBQ2ZQLE9BQU8sRUFBRSxFQUFFO0lBQ1hLLEtBQUssRUFBRTs7Q0FFVixDQUFDO0FBQUMsSUFBQVIsRUFBQTtBQUFBZ0Isc0NBQUEsQ0FBQWhCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HNEI7QUFDMEI7QUFDVDtBQUlFO0FBQ0Y7QUFnQjFDLFNBQVUrQixlQUFlQSxDQUFDO0VBQUV4RixVQUFVO0VBQUVDO0FBQUssQ0FBd0I7RUFBQUMsRUFBQTtFQUN6RSxNQUFNO0lBQUV1RixRQUFRO0lBQUVDLFFBQVE7SUFBRUMsUUFBUTtJQUFFQztFQUFZLENBQUUsR0FBRzNGLEtBQUssQ0FBQ00sTUFBTTtFQUNuRSxNQUFNLENBQUNzRixjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUdwRiwrQ0FBUSxDQUFNLElBQUksQ0FBQztFQUMvRCxNQUFNLENBQUNxRixZQUFZLEVBQUVDLGVBQWUsQ0FBQyxHQUFHdEYsK0NBQVEsQ0FBZ0IsRUFBRSxDQUFDO0VBRW5FO0VBQ0EsTUFBTXVGLGNBQWMsR0FBR0EsQ0FBQSxLQUFLO0lBQzFCLElBQUlSLFFBQVEsQ0FBQ1MsU0FBUyxFQUFFO01BQ3RCLE9BQU9ULFFBQVEsQ0FBQ1MsU0FBUyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsTUFBTSxJQUFJVixRQUFRLENBQUNXLFdBQVcsRUFBRTtNQUMvQixPQUFPWCxRQUFRLENBQUNXLFdBQVcsQ0FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDLE1BQU0sSUFBSVYsUUFBUSxDQUFDWSxJQUFJLEVBQUU7TUFDeEIsT0FBT1osUUFBUSxDQUFDWSxJQUFJLENBQUNGLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQyxNQUFNLElBQUlWLFFBQVEsQ0FBQ0MsUUFBUSxFQUFFO01BQzVCLE9BQU9ELFFBQVEsQ0FBQ0MsUUFBUTtJQUMxQixDQUFDLE1BQU07TUFDTCxPQUFPLE1BQU07SUFDZjtFQUNGLENBQUM7RUFFRCxNQUFNWSxhQUFhLEdBQUlDLE9BQTJCLElBQVk7SUFDNUQsSUFBSUEsT0FBTyxLQUFLQyxTQUFTLElBQUlsRixLQUFLLENBQUNpRixPQUFPLENBQUMsRUFBRTtNQUMzQyxPQUFPLFVBQVU7SUFDbkI7SUFDQSxNQUFNRSxLQUFLLEdBQUdGLE9BQU8sQ0FBQ0csT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDUCxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzNDTSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQztJQUN6RCxPQUFPLE9BQU9GLEtBQUssQ0FBQ0csSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0VBQ2pDLENBQUM7RUFFRCxNQUFNQyxVQUFVLEdBQUlDLElBQVUsSUFBWTtJQUN4QyxPQUFPQSxJQUFJLENBQUNDLFdBQVcsRUFBRSxDQUFDWixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3pDLENBQUM7RUFFRCxNQUFNYSxtQkFBbUIsR0FBRzFCLGtEQUFXLENBQUMsWUFBVztJQUNqRCxJQUFJO01BQ0YyQixPQUFPLENBQUNDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQztNQUN0RCxNQUFNQyxVQUFVLEdBQUcsU0FBU0MsSUFBSSxDQUFDLEdBQUcxQixRQUFRLElBQUlDLFFBQVEsRUFBRSxDQUFDLEVBQUU7TUFDN0RzQixPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRUMsVUFBVSxDQUFDO01BRXJELE1BQU1FLEdBQUcsR0FBRyxHQUFHeEksK0NBQVUsQ0FBQ0MsUUFBUSxHQUFHRCwrQ0FBVSxDQUFDSyxxQkFBcUIsSUFBSXVHLFFBQVEsQ0FBQzZCLEVBQUUsV0FBVztNQUMvRkwsT0FBTyxDQUFDQyxHQUFHLENBQUMsMEJBQTBCLEVBQUVHLEdBQUcsQ0FBQztNQUU1QyxNQUFNRSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDSCxHQUFHLEVBQUU7UUFDaENJLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLE9BQU8sRUFBRTtVQUNQLGVBQWUsRUFBRVAsVUFBVTtVQUMzQiw0QkFBNEIsRUFBRTNILDhDQUFTO1VBQ3ZDLFFBQVEsRUFBRTs7T0FFYixDQUFDO01BRUYsTUFBTW1JLElBQUksR0FBRyxNQUFNSixRQUFRLENBQUNLLElBQUksRUFBRTtNQUNsQ1gsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLEVBQUVXLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO01BRXZFLElBQUlBLElBQUksQ0FBQ0ksZUFBZSxJQUFJSixJQUFJLENBQUNJLGVBQWUsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUMzRGYsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLEVBQUVTLElBQUksQ0FBQ0ksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlEakMsaUJBQWlCLENBQUM2QixJQUFJLENBQUNJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQ0UsaUJBQWlCLENBQUNOLElBQUksQ0FBQ0ksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDVCxFQUFFLENBQUM7TUFDL0MsQ0FBQyxNQUFNO1FBQ0xMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJDQUEyQyxDQUFDO01BQzFEO0lBQ0YsQ0FBQyxDQUFDLE9BQU9nQixLQUFLLEVBQUU7TUFDZGpCLE9BQU8sQ0FBQ2lCLEtBQUssQ0FBQyxpQ0FBaUMsRUFBRUEsS0FBSyxDQUFDO0lBQ3pEO0VBQ0YsQ0FBQyxFQUFFLENBQUN6QyxRQUFRLENBQUM2QixFQUFFLEVBQUU1QixRQUFRLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO0VBRXJDLE1BQU1zQyxpQkFBaUIsR0FBRzNDLGtEQUFXLENBQUMsTUFBTzZDLFNBQWlCLElBQUk7SUFDaEUsSUFBSSxDQUFDdkMsWUFBWSxFQUFFO01BQ2pCcUIsT0FBTyxDQUFDaUIsS0FBSyxDQUFDLDRDQUE0QyxDQUFDO01BQzNEO0lBQ0Y7SUFFQSxJQUFJO01BQ0YsTUFBTUUsS0FBSyxHQUFHLElBQUlDLElBQUksRUFBRTtNQUN4QixNQUFNQyxXQUFXLEdBQUcsSUFBSUQsSUFBSSxDQUFDRCxLQUFLLENBQUNHLFdBQVcsRUFBRSxFQUFFSCxLQUFLLENBQUNJLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRUosS0FBSyxDQUFDSyxPQUFPLEVBQUUsQ0FBQztNQUN4RixNQUFNQyxRQUFRLEdBQUc3QixVQUFVLENBQUN5QixXQUFXLENBQUM7TUFDeEMsTUFBTUssTUFBTSxHQUFHOUIsVUFBVSxDQUFDdUIsS0FBSyxDQUFDO01BRWhDLE1BQU1RLGNBQWMsR0FBRyxTQUFTeEIsSUFBSSxDQUFDLEdBQUcxQixRQUFRLElBQUlDLFFBQVEsRUFBRSxDQUFDLEVBQUU7TUFDakVzQixPQUFPLENBQUNDLEdBQUcsQ0FBQyw2Q0FBNkMsRUFBRTBCLGNBQWMsQ0FBQztNQUMxRTNCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRDQUE0QyxFQUFFdEIsWUFBWSxDQUFDO01BRXZFLE1BQU15QixHQUFHLEdBQUcsR0FBR3hJLCtDQUFVLENBQUNDLFFBQVEsR0FBR0QsK0NBQVUsQ0FBQ0kseUJBQXlCLElBQUlrSixTQUFTLGlDQUFpQ08sUUFBUSxXQUFXQyxNQUFNLHNCQUFzQkQsUUFBUSxvQkFBb0JDLE1BQU0scUlBQXFJO01BRTdVMUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUNBQWlDLEVBQUVHLEdBQUcsQ0FBQztNQUVuRCxNQUFNRSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDSCxHQUFHLEVBQUU7UUFDaENJLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLE9BQU8sRUFBRTtVQUNQLGVBQWUsRUFBRSxTQUFTOUIsWUFBWSxFQUFFO1VBQ3hDLDRCQUE0QixFQUFFcEcsOENBQVM7VUFDdkMsUUFBUSxFQUFFOztPQUViLENBQUM7TUFFRixNQUFNcUosWUFBWSxHQUFHLE1BQU10QixRQUFRLENBQUN0RixJQUFJLEVBQUU7TUFDMUNnRixPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRTJCLFlBQVksQ0FBQztNQUV2RCxJQUFJbEIsSUFBSTtNQUNSLElBQUk7UUFDRkEsSUFBSSxHQUFHRSxJQUFJLENBQUNpQixLQUFLLENBQUNELFlBQVksQ0FBQztNQUNqQyxDQUFDLENBQUMsT0FBT0UsVUFBVSxFQUFFO1FBQ25COUIsT0FBTyxDQUFDaUIsS0FBSyxDQUFDLHFCQUFxQixFQUFFYSxVQUFVLENBQUM7UUFDaEQ7TUFDRjtNQUVBOUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsMEJBQTBCLEVBQUVXLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO01BRXRFLElBQUlBLElBQUksSUFBSUEsSUFBSSxDQUFDcUIsT0FBTyxJQUFJQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ3ZCLElBQUksQ0FBQ3FCLE9BQU8sQ0FBQyxFQUFFO1FBQ3ZEaEQsZUFBZSxDQUFDMkIsSUFBSSxDQUFDcUIsT0FBTyxDQUFDRyxHQUFHLENBQUVDLENBQU0sS0FBTTtVQUM1QzlCLEVBQUUsRUFBRThCLENBQUMsQ0FBQzlCLEVBQUU7VUFDUlIsSUFBSSxFQUFFLEdBQUdzQyxDQUFDLENBQUN0QyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUlzQyxDQUFDLENBQUN0QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUN1QyxRQUFRLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSUYsQ0FBQyxDQUFDdEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDdUMsUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7VUFDdEc5SSxNQUFNLEVBQUU0SSxDQUFDLENBQUM1SSxNQUFNO1VBQ2hCK0ksSUFBSSxFQUFFSCxDQUFDLENBQUNJLGVBQWUsQ0FBQzVLLEtBQUs7VUFDN0I2SyxXQUFXLEVBQUVMLENBQUMsQ0FBQ00saUJBQWlCLEVBQUVDLFdBQVcsRUFBRXRELElBQUksSUFBSStDLENBQUMsQ0FBQ0ksZUFBZSxDQUFDNUssS0FBSztVQUM5RWdMLGNBQWMsRUFBRVIsQ0FBQyxDQUFDUTtTQUNuQixDQUFDLENBQUMsQ0FBQztNQUNOLENBQUMsTUFBTTtRQUNMM0MsT0FBTyxDQUFDaUIsS0FBSyxDQUFDLDRCQUE0QixFQUFFUCxJQUFJLENBQUM7TUFDbkQ7SUFDRixDQUFDLENBQUMsT0FBT08sS0FBSyxFQUFFO01BQ2RqQixPQUFPLENBQUNpQixLQUFLLENBQUMsOEJBQThCLEVBQUVBLEtBQUssQ0FBQztJQUN0RDtFQUNGLENBQUMsRUFBRSxDQUFDeEMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFlBQVksQ0FBQyxDQUFDO0VBRXRDUCxnREFBUyxDQUFDLE1BQUs7SUFDYjJCLG1CQUFtQixFQUFFO0VBQ3ZCLENBQUMsRUFBRSxDQUFDQSxtQkFBbUIsQ0FBQyxDQUFDO0VBRXpCLE1BQU02QyxZQUFZLEdBQUdBLENBQUEsS0FBSztJQUN4QjVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0lBQzdCbEgsVUFBVSxDQUFDd0IsUUFBUSxDQUFDLE9BQU8sQ0FBQztFQUM5QixDQUFDO0VBRUQsT0FDRWpELGdEQUFBO0lBQVltRCxJQUFJLEVBQUM7RUFBUyxHQUN4Qm5ELGdEQUFBO0lBQVlvRCxHQUFHLEVBQUU7RUFBQyxHQUNoQnBELGdEQUFBO0lBQWFzRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ1E7RUFBUyxHQUNsQy9ELGdEQUFBO0lBQU8wRCxJQUFJLEVBQUUsWUFBWWdFLGNBQWMsRUFBRSxHQUFHO0lBQUVwRSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ087RUFBVSxFQUFJLEVBRzFFOUQsZ0RBQUE7SUFBWXNELEtBQUssRUFBRUMsTUFBTSxDQUFDZ0ksV0FBVztJQUFFcEksSUFBSSxFQUFDLGtCQUFrQjtJQUFDRSxPQUFPLEVBQUM7RUFBRyxHQUN4RXJELGdEQUFBO0lBQU9vRCxHQUFHLEVBQUUsQ0FBQztJQUFFRSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ1csWUFBWTtJQUFFUixJQUFJLEVBQUM7RUFBaUIsRUFBRyxFQUNuRTRELGNBQWMsR0FDYnRILGdEQUFBLENBQUFBLDJDQUFBLFFBQ0VBLGdEQUFBO0lBQU9vRCxHQUFHLEVBQUUsQ0FBQztJQUFFRSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ2tJLGFBQWE7SUFBRS9ILElBQUksRUFBRSxZQUFZNEQsY0FBYyxDQUFDb0UsU0FBUztFQUFFLEVBQUksRUFDNUYxTCxnREFBQTtJQUFPb0QsR0FBRyxFQUFFLENBQUM7SUFBRUUsS0FBSyxFQUFFQyxNQUFNLENBQUNvSSxjQUFjO0lBQUVqSSxJQUFJLEVBQUUsWUFBWXFFLGFBQWEsQ0FBQ1QsY0FBYyxDQUFDcUUsY0FBYyxDQUFDO0VBQUUsRUFBSSxDQUNoSCxHQUVIM0wsZ0RBQUE7SUFBT29ELEdBQUcsRUFBRSxDQUFDO0lBQUVFLEtBQUssRUFBRUMsTUFBTSxDQUFDcUksY0FBYztJQUFFbEksSUFBSSxFQUFDO0VBQTBCLEVBQzdFLENBQ1UsRUFHYjFELGdEQUFBO0lBQVlzRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ3NJLGdCQUFnQjtJQUFFMUksSUFBSSxFQUFDLFlBQVk7SUFBQ0UsT0FBTyxFQUFDO0VBQUcsR0FDdkVyRCxnREFBQTtJQUFPb0QsR0FBRyxFQUFFLENBQUM7SUFBRUssR0FBRyxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFDLHFCQUFxQjtJQUFDSixLQUFLLEVBQUVDLE1BQU0sQ0FBQ3VJO0VBQXdCLEVBQUksRUFDNUY5TCxnREFBQTtJQUFhb0QsR0FBRyxFQUFFLENBQUM7SUFBRUssR0FBRyxFQUFFO0VBQUMsR0FDeEIrRCxZQUFZLENBQUNpQyxNQUFNLEdBQUcsQ0FBQyxHQUN0QmpDLFlBQVksQ0FBQ3VFLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNuQixHQUFHLENBQUMsQ0FBQ29CLFdBQVcsRUFBRUMsS0FBSyxLQUM5Q2pNLGdEQUFBO0lBQVlrTSxHQUFHLEVBQUVGLFdBQVcsQ0FBQ2pELEVBQUU7SUFBRXpGLEtBQUssRUFBRUMsTUFBTSxDQUFDNEksZUFBZTtJQUFFaEosSUFBSSxFQUFDLFlBQVk7SUFBQ0UsT0FBTyxFQUFDO0VBQVMsR0FDakdyRCxnREFBQTtJQUFPb0QsR0FBRyxFQUFFLENBQUM7SUFBRUssR0FBRyxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFc0ksV0FBVyxDQUFDZCxXQUFXO0lBQUU1SCxLQUFLLEVBQUVDLE1BQU0sQ0FBQzZJO0VBQXNCLEVBQUksRUFDOUZwTSxnREFBQTtJQUFPb0QsR0FBRyxFQUFFLENBQUM7SUFBRUssR0FBRyxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFcUUsYUFBYSxDQUFDaUUsV0FBVyxDQUFDL0osTUFBTSxDQUFDO0lBQUVxQixLQUFLLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDOEksaUJBQWlCLEVBQUU7TUFBRTVHLEtBQUssRUFBRXVHLFdBQVcsQ0FBQ2hCLElBQUksS0FBSyxZQUFZLEdBQUd6SCxNQUFNLENBQUMrSSxjQUFjLENBQUM3RyxLQUFLLEdBQUdsQyxNQUFNLENBQUNnSixjQUFjLENBQUM5RztJQUFLLENBQUU7RUFBQyxFQUFJLEVBQy9NekYsZ0RBQUE7SUFBT29ELEdBQUcsRUFBRSxDQUFDO0lBQUVLLEdBQUcsRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRXNJLFdBQVcsQ0FBQ3pELElBQUk7SUFBRWpGLEtBQUssRUFBRUMsTUFBTSxDQUFDaUo7RUFBZSxFQUFJLEVBQ2hGeE0sZ0RBQUE7SUFBT29ELEdBQUcsRUFBRSxDQUFDO0lBQUVLLEdBQUcsRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRXNJLFdBQVcsQ0FBQ2hCLElBQUk7SUFBRTFILEtBQUssRUFBRUMsTUFBTSxDQUFDMEg7RUFBZSxFQUFJLENBRW5GLENBQUMsR0FFRmpMLGdEQUFBO0lBQU8wRCxJQUFJLEVBQUMsMkJBQTJCO0lBQUNKLEtBQUssRUFBRUMsTUFBTSxDQUFDa0o7RUFBbUIsRUFDMUUsQ0FDVyxDQUNILEVBR2J6TSxnREFBQTtJQUFZc0QsS0FBSyxFQUFFQyxNQUFNLENBQUNtSixnQkFBZ0I7SUFBRXZKLElBQUksRUFBQyxZQUFZO0lBQUNFLE9BQU8sRUFBQztFQUFHLEdBQ3ZFckQsZ0RBQUE7SUFBT29ELEdBQUcsRUFBRSxDQUFDO0lBQUVFLEtBQUssRUFBRUMsTUFBTSxDQUFDb0osd0JBQXdCO0lBQUVqSixJQUFJLEVBQUM7RUFBZSxFQUFHLEVBQzlFMUQsZ0RBQUE7SUFBWW9ELEdBQUcsRUFBRSxDQUFDO0lBQUVDLE9BQU8sRUFBQyxTQUFTO0lBQUNDLEtBQUssRUFBRUMsTUFBTSxDQUFDcUo7RUFBcUIsR0FDdkU1TSxnREFBQTtJQUFReUQsR0FBRyxFQUFFLENBQUM7SUFBRUgsS0FBSyxFQUFFLENBQUNDLE1BQU0sQ0FBQ3NKLFlBQVksRUFBRXRKLE1BQU0sQ0FBQ3VKLFlBQVksQ0FBQztJQUFFcEosSUFBSSxFQUFDLFFBQVE7SUFBQ0MsS0FBSyxFQUFFQSxDQUFBLEtBQU1sQyxVQUFVLENBQUN3QixRQUFRLENBQUMsYUFBYSxFQUFFO01BQUVpRTtJQUFRLENBQUU7RUFBQyxFQUFJLEVBQ2xKbEgsZ0RBQUE7SUFBUXlELEdBQUcsRUFBRSxDQUFDO0lBQUVILEtBQUssRUFBRSxDQUFDQyxNQUFNLENBQUNzSixZQUFZLEVBQUV0SixNQUFNLENBQUN3SixjQUFjLENBQUM7SUFBRXJKLElBQUksRUFBQyxVQUFVO0lBQUNDLEtBQUssRUFBRUEsQ0FBQSxLQUFNbEMsVUFBVSxDQUFDd0IsUUFBUSxDQUFDLFVBQVU7RUFBQyxFQUFJLEVBQ3JJakQsZ0RBQUE7SUFBUXlELEdBQUcsRUFBRSxDQUFDO0lBQUVILEtBQUssRUFBRSxDQUFDQyxNQUFNLENBQUNzSixZQUFZLEVBQUV0SixNQUFNLENBQUN5SixVQUFVLENBQUM7SUFBRXRKLElBQUksRUFBQyxPQUFPO0lBQUNDLEtBQUssRUFBRUEsQ0FBQSxLQUFNbEMsVUFBVSxDQUFDd0IsUUFBUSxDQUFDLE9BQU8sRUFBRTtNQUFFaUU7SUFBUSxDQUFFO0VBQUMsRUFBSSxDQUM5SCxDQUNGLENBRUQsQ0FDSCxFQUNibEgsZ0RBQUEsQ0FBQ2dILHlEQUFhO0lBQ1o1RCxHQUFHLEVBQUUsQ0FBQztJQUNONkosV0FBVyxFQUFDLFdBQVc7SUFDdkJ4TCxVQUFVLEVBQUVBLFVBQVU7SUFDdEJ5RixRQUFRLEVBQUU7TUFBQyxHQUFHQSxRQUFRO01BQUVDLFFBQVE7TUFBRUM7SUFBUTtFQUFDLEVBQzNDLENBQ1M7QUFFakI7QUFBQ3pGLEVBQUEsQ0FoTWVzRixlQUFlO0FBQUEvQixFQUFBLEdBQWYrQixlQUFlO0FBaU0vQixNQUFNMUQsTUFBTSxHQUFHaEMsMERBQVUsQ0FBQzRELE1BQU0sQ0FBQztFQUMvQnBCLFNBQVMsRUFBRTtJQUNUc0IsT0FBTyxFQUFFLEVBQUU7SUFDWEQsZUFBZSxFQUFFLFNBQVM7SUFDMUI4SCxhQUFhLEVBQUU7R0FDaEI7RUFDRHBKLFVBQVUsRUFBRTtJQUNWMEIsUUFBUSxFQUFFLEVBQUU7SUFDWkcsVUFBVSxFQUFFLE1BQU07SUFDbEJGLEtBQUssRUFBRSxTQUFTO0lBQ2hCSSxZQUFZLEVBQUU7R0FDZjtFQUNEMEYsV0FBVyxFQUFFO0lBQ1huRyxlQUFlLEVBQUUsU0FBUztJQUMxQlEsWUFBWSxFQUFFLEVBQUU7SUFDaEJQLE9BQU8sRUFBRSxFQUFFO0lBQ1hRLFlBQVksRUFBRSxFQUFFO0lBQ2hCQyxTQUFTLEVBQUU7R0FDWjtFQUNENUIsWUFBWSxFQUFFO0lBQ1pzQixRQUFRLEVBQUUsRUFBRTtJQUNaRyxVQUFVLEVBQUUsTUFBTTtJQUNsQkYsS0FBSyxFQUFFLFNBQVM7SUFDaEJJLFlBQVksRUFBRTtHQUNmO0VBQ0Q0RixhQUFhLEVBQUU7SUFDYmpHLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEtBQUssRUFBRSxTQUFTO0lBQ2hCSSxZQUFZLEVBQUU7R0FDZjtFQUNEOEYsY0FBYyxFQUFFO0lBQ2RuRyxRQUFRLEVBQUUsRUFBRTtJQUNaRyxVQUFVLEVBQUUsTUFBTTtJQUNsQkYsS0FBSyxFQUFFO0dBQ1I7RUFDRG1HLGNBQWMsRUFBRTtJQUNkcEcsUUFBUSxFQUFFLEVBQUU7SUFDWkMsS0FBSyxFQUFFLFNBQVM7SUFDaEJvQixhQUFhLEVBQUU7R0FDaEI7RUFDRGdGLGdCQUFnQixFQUFFO0lBQ2hCekcsZUFBZSxFQUFFLFNBQVM7SUFDMUJRLFlBQVksRUFBRSxFQUFFO0lBQ2hCUCxPQUFPLEVBQUUsRUFBRTtJQUNYUSxZQUFZLEVBQUUsRUFBRTtJQUNoQkMsU0FBUyxFQUFFO0dBQ1o7RUFDRGdHLHdCQUF3QixFQUFFO0lBQ3hCdEcsUUFBUSxFQUFFLEVBQUU7SUFDWkcsVUFBVSxFQUFFLE1BQU07SUFDbEJGLEtBQUssRUFBRSxTQUFTO0lBQ2hCSSxZQUFZLEVBQUU7R0FDZjtFQUNEc0csZUFBZSxFQUFFO0lBQ2Z0RyxZQUFZLEVBQUUsRUFBRTtJQUNoQlAsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQkMsaUJBQWlCLEVBQUUsU0FBUztJQUM1QjJILGFBQWEsRUFBRTtHQUNoQjtFQUNEZCxzQkFBc0IsRUFBRTtJQUN0QjVHLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEtBQUssRUFBRTtHQUNSO0VBQ0Q0RyxpQkFBaUIsRUFBRTtJQUNqQjdHLFFBQVEsRUFBRSxFQUFFO0lBQ1pHLFVBQVUsRUFBRTtHQUNiO0VBQ0Q0RyxjQUFjLEVBQUU7SUFDZDlHLEtBQUssRUFBRTtHQUNSO0VBQ0Q2RyxjQUFjLEVBQUU7SUFDZDdHLEtBQUssRUFBRTtHQUNSO0VBQ0QrRyxlQUFlLEVBQUU7SUFDZmhILFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEtBQUssRUFBRTtHQUNSO0VBQ0R3RixlQUFlLEVBQUU7SUFDZnpGLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEtBQUssRUFBRTtHQUNSO0VBQ0RnSCxtQkFBbUIsRUFBRTtJQUNuQmpILFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEtBQUssRUFBRSxTQUFTO0lBQ2hCb0IsYUFBYSxFQUFFLFFBQVE7SUFDdkJaLFNBQVMsRUFBRTtHQUNaO0VBQ0R5RyxnQkFBZ0IsRUFBRTtJQUNoQnRILGVBQWUsRUFBRSxTQUFTO0lBQzFCUSxZQUFZLEVBQUUsRUFBRTtJQUNoQlAsT0FBTyxFQUFFLEVBQUU7SUFDWFEsWUFBWSxFQUFFLEVBQUU7SUFDaEJDLFNBQVMsRUFBRTtHQUNaO0VBQ0Q2Ryx3QkFBd0IsRUFBRTtJQUN4Qm5ILFFBQVEsRUFBRSxFQUFFO0lBQ1pHLFVBQVUsRUFBRSxNQUFNO0lBQ2xCRixLQUFLLEVBQUUsU0FBUztJQUNoQkksWUFBWSxFQUFFO0dBQ2Y7RUFDRCtHLHFCQUFxQixFQUFFO0lBQ3JCM0csU0FBUyxFQUFFO0dBQ1o7RUFDRDRHLFlBQVksRUFBRTtJQUNackgsUUFBUSxFQUFFLEVBQUU7SUFDWkMsS0FBSyxFQUFFLFNBQVM7SUFDaEJHLFlBQVksRUFBRSxFQUFFO0lBQUU7SUFDbEJQLE9BQU8sRUFBRSxFQUFFO0lBQ1hXLE1BQU0sRUFBRSxDQUFDO0lBQ1RhLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCZixTQUFTLEVBQUU7R0FDWjtFQUNEZ0gsWUFBWSxFQUFFO0lBQ1oxSCxlQUFlLEVBQUUsU0FBUyxDQUFFO0dBQzdCO0VBQ0QySCxjQUFjLEVBQUU7SUFDZDNILGVBQWUsRUFBRSxTQUFTLENBQUU7R0FDN0I7RUFDRDRILFVBQVUsRUFBRTtJQUNWNUgsZUFBZSxFQUFFLFNBQVMsQ0FBRTs7Q0FFL0IsQ0FBQztBQUFDLElBQUFGLEVBQUE7QUFBQWdCLHNDQUFBLENBQUFoQixFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqVjRCO0FBQ2E7QUFDSTtBQUlZO0FBQ1o7QUFtQjFDLFNBQVVpSSxpQkFBaUJBLENBQUM7RUFBRTFMLFVBQVU7RUFBRUM7QUFBSyxDQUEwQjtFQUFBQyxFQUFBO0VBQzdFLE1BQU07SUFBRXVGO0VBQVEsQ0FBRSxHQUFHeEYsS0FBSyxDQUFDTSxNQUFNO0VBQ2pDLE1BQU0sQ0FBQ29MLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdsTCwrQ0FBUSxDQUFtQixFQUFFLENBQUM7RUFDOUQsTUFBTSxDQUFDbUwsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3BMLCtDQUFRLENBQUMsSUFBSSxDQUFDO0VBQzVDLE1BQU0sQ0FBQ3dILEtBQUssRUFBRTZELFFBQVEsQ0FBQyxHQUFHckwsK0NBQVEsQ0FBZ0IsSUFBSSxDQUFDO0VBRXZEMkUsZ0RBQVMsQ0FBQyxNQUFLO0lBQ2IyRyxvQkFBb0IsRUFBRTtFQUN4QixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sTUFBTUEsb0JBQW9CLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO0lBQ3RDLElBQUk7TUFDRi9FLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDhCQUE4QixDQUFDO01BQzNDLE1BQU1DLFVBQVUsR0FBRyxTQUFTQyxJQUFJLENBQUMsR0FBRy9ILDZDQUFRLENBQUNDLFFBQVEsSUFBSUQsNkNBQVEsQ0FBQ0UsUUFBUSxFQUFFLENBQUMsRUFBRTtNQUMvRTBILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixFQUFFQyxVQUFVLENBQUM7TUFFcEQsTUFBTUUsR0FBRyxHQUFHLEdBQUd4SSwrQ0FBVSxDQUFDQyxRQUFRLEdBQUdELCtDQUFVLENBQUNPLHlCQUF5QixFQUFFO01BQzNFNkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLEVBQUVHLEdBQUcsQ0FBQztNQUU3QyxNQUFNRSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDSCxHQUFHLEVBQUU7UUFDaENJLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLE9BQU8sRUFBRTtVQUNQLGVBQWUsRUFBRVAsVUFBVTtVQUMzQiw0QkFBNEIsRUFBRTNILDhDQUFTO1VBQ3ZDLFFBQVEsRUFBRTs7T0FFYixDQUFDO01BRUYsTUFBTW1JLElBQUksR0FBRyxNQUFNSixRQUFRLENBQUNLLElBQUksRUFBRTtNQUNsQ1gsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLEVBQUVXLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO01BRXhFaUUsV0FBVyxDQUFDakUsSUFBSSxDQUFDO01BQ2pCbUUsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDLENBQUMsT0FBTzVELEtBQUssRUFBRTtNQUNkakIsT0FBTyxDQUFDaUIsS0FBSyxDQUFDLGtDQUFrQyxFQUFFQSxLQUFLLENBQUM7TUFDeEQ2RCxRQUFRLENBQUMsb0RBQW9ELENBQUM7TUFDOURELFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDbkI7RUFDRixDQUFDO0VBRUQsTUFBTUcsbUJBQW1CLEdBQUlDLE9BQXVCLElBQUk7SUFDdERqRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRWdGLE9BQU8sQ0FBQztJQUN6Q2xNLFVBQVUsQ0FBQ3dCLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtNQUFFMEssT0FBTztNQUFFekc7SUFBUSxDQUFFLENBQUM7RUFDOUQsQ0FBQztFQUVELE9BQ0VsSCxnREFBQTtJQUFZbUQsSUFBSSxFQUFDO0VBQVMsR0FDeEJuRCxnREFBQTtJQUFZb0QsR0FBRyxFQUFFLENBQUM7SUFBRUQsSUFBSSxFQUFDLFNBQVM7SUFBQ0csS0FBSyxFQUFFQyxNQUFNLENBQUNxSztFQUFhLEdBQzVENU4sZ0RBQUE7SUFBT29ELEdBQUcsRUFBRSxDQUFDO0lBQUVNLElBQUksRUFBQyxvQkFBb0I7SUFBQ0osS0FBSyxFQUFFQyxNQUFNLENBQUNPO0VBQVUsRUFBSSxFQUNyRTlELGdEQUFBO0lBQVlvRCxHQUFHLEVBQUU7RUFBQyxHQUNoQnBELGdEQUFBO0lBQWFzRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ1E7RUFBUyxHQUNqQ3VKLE9BQU8sR0FDTnROLGdEQUFBO0lBQU8wRCxJQUFJLEVBQUMscUJBQXFCO0lBQUNKLEtBQUssRUFBRUMsTUFBTSxDQUFDc0s7RUFBVyxFQUFJLEdBQzdEbEUsS0FBSyxHQUNQM0osZ0RBQUE7SUFBTzBELElBQUksRUFBRWlHLEtBQUs7SUFBRXJHLEtBQUssRUFBRUMsTUFBTSxDQUFDdUs7RUFBUyxFQUFJLEdBRS9DVixRQUFRLENBQUN4QyxHQUFHLENBQUUrQyxPQUFPLElBQ25CM04sZ0RBQUE7SUFDRWtNLEdBQUcsRUFBRXlCLE9BQU8sQ0FBQzVFLEVBQUU7SUFDZnpGLEtBQUssRUFBRUMsTUFBTSxDQUFDd0ssV0FBVztJQUN6QjVLLElBQUksRUFBQyx3QkFBd0I7SUFDN0JFLE9BQU8sRUFBQyxHQUFHO0lBQ1hNLEtBQUssRUFBRUEsQ0FBQSxLQUFNK0osbUJBQW1CLENBQUNDLE9BQU8sQ0FBQztJQUN6Q0ssU0FBUyxFQUFDO0VBQWMsR0FFeEJoTyxnREFBQTtJQUFPb0QsR0FBRyxFQUFFLENBQUM7SUFBRU0sSUFBSSxFQUFFaUssT0FBTyxDQUFDN0YsSUFBSTtJQUFFeEUsS0FBSyxFQUFFQyxNQUFNLENBQUMwSztFQUFXLEVBQUksRUFDaEVqTyxnREFBQTtJQUFPb0QsR0FBRyxFQUFFLENBQUM7SUFBRU0sSUFBSSxFQUFFaUssT0FBTyxDQUFDekMsV0FBVztJQUFFNUgsS0FBSyxFQUFFQyxNQUFNLENBQUMySyxrQkFBa0I7SUFBRUMsUUFBUSxFQUFFO0VBQUksRUFBSSxFQUM5Rm5PLGdEQUFBO0lBQVlvRCxHQUFHLEVBQUUsQ0FBQztJQUFFRCxJQUFJLEVBQUMsWUFBWTtJQUFDRSxPQUFPLEVBQUMsTUFBTTtJQUFDQyxLQUFLLEVBQUVDLE1BQU0sQ0FBQzZLO0VBQWdCLEdBQ2pGcE8sZ0RBQUE7SUFBT29ELEdBQUcsRUFBRSxDQUFDO0lBQUVLLEdBQUcsRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBQyxnQkFBZ0I7SUFBQ0osS0FBSyxFQUFFQyxNQUFNLENBQUM4SztFQUFXLEVBQUksRUFDMUVyTyxnREFBQTtJQUFPb0QsR0FBRyxFQUFFLENBQUM7SUFBRUssR0FBRyxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFLEdBQUdpSyxPQUFPLENBQUNXLHlCQUF5QixHQUFHO0lBQUVoTCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ2dMO0VBQVcsRUFBSSxFQUNuR3ZPLGdEQUFBO0lBQU9vRCxHQUFHLEVBQUUsQ0FBQztJQUFFSyxHQUFHLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUMsV0FBVztJQUFDSixLQUFLLEVBQUVDLE1BQU0sQ0FBQzhLO0VBQVcsRUFBSSxFQUNyRXJPLGdEQUFBO0lBQU9vRCxHQUFHLEVBQUUsQ0FBQztJQUFFSyxHQUFHLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUUsR0FBR2lLLE9BQU8sQ0FBQ2EsUUFBUSxDQUFDQyxhQUFhLElBQUlkLE9BQU8sQ0FBQ2EsUUFBUSxDQUFDRSxJQUFJLEVBQUU7SUFBRXBMLEtBQUssRUFBRUMsTUFBTSxDQUFDZ0w7RUFBVyxFQUFJLENBQzdHLEVBQ2J2TyxnREFBQTtJQUFPb0QsR0FBRyxFQUFFLENBQUM7SUFBRU0sSUFBSSxFQUFDLHFCQUFxQjtJQUFDSixLQUFLLEVBQUVDLE1BQU0sQ0FBQ29MO0VBQU8sRUFBSSxDQUV0RSxDQUNGLENBQ1csQ0FDSCxDQUNGLEVBQ2IzTyxnREFBQSxDQUFDZ0gseURBQWE7SUFBQzVELEdBQUcsRUFBRSxDQUFDO0lBQUU2SixXQUFXLEVBQUMsYUFBYTtJQUFDeEwsVUFBVSxFQUFFQSxVQUFVO0lBQUV5RixRQUFRLEVBQUVBO0VBQVEsRUFBSSxDQUNwRjtBQUVqQjtBQUFDdkYsRUFBQSxDQW5GZXdMLGlCQUFpQjtBQUFBakksRUFBQSxHQUFqQmlJLGlCQUFpQjtBQXFGakMsTUFBTTVKLE1BQU0sR0FBR2hDLDBEQUFVLENBQUM0RCxNQUFNLENBQUM7RUFDL0J5SSxhQUFhLEVBQUU7SUFDYnhJLGVBQWUsRUFBRSxTQUFTLENBQUU7R0FDN0I7RUFDRHJCLFNBQVMsRUFBRTtJQUNUc0IsT0FBTyxFQUFFO0dBQ1Y7RUFDRHZCLFVBQVUsRUFBRTtJQUNWMEIsUUFBUSxFQUFFLEVBQUU7SUFDWkcsVUFBVSxFQUFFLE1BQU07SUFDbEJrQixhQUFhLEVBQUUsUUFBUTtJQUN2QitILGNBQWMsRUFBRSxFQUFFO0lBQ2xCbkosS0FBSyxFQUFFLFNBQVMsQ0FBRTtHQUNuQjtFQUNEb0ksV0FBVyxFQUFFO0lBQ1hySSxRQUFRLEVBQUUsRUFBRTtJQUNacUIsYUFBYSxFQUFFLFFBQVE7SUFDdkJwQixLQUFLLEVBQUUsU0FBUyxDQUFFO0dBQ25CO0VBQ0RxSSxTQUFTLEVBQUU7SUFDVHRJLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEtBQUssRUFBRSxTQUFTO0lBQUU7SUFDbEJvQixhQUFhLEVBQUU7R0FDaEI7RUFDRGtILFdBQVcsRUFBRTtJQUNYM0ksZUFBZSxFQUFFLFNBQVM7SUFDMUJRLFlBQVksRUFBRSxFQUFFO0lBQ2hCUCxPQUFPLEVBQUUsRUFBRTtJQUNYUSxZQUFZLEVBQUUsRUFBRTtJQUNoQkMsU0FBUyxFQUFFLENBQUM7SUFDWitJLFdBQVcsRUFBRSxNQUFNO0lBQ25CQyxZQUFZLEVBQUU7TUFBRXBKLEtBQUssRUFBRSxDQUFDO01BQUVnQixNQUFNLEVBQUU7SUFBQyxDQUFFO0lBQ3JDcUksYUFBYSxFQUFFLEdBQUc7SUFDbEJDLFlBQVksRUFBRSxDQUFDO0lBQ2ZDLFdBQVcsRUFBRSxTQUFTO0lBQUU7SUFDeEJDLFdBQVcsRUFBRTtHQUNkO0VBQ0RqQixXQUFXLEVBQUU7SUFDWHpJLFFBQVEsRUFBRSxFQUFFO0lBQ1pHLFVBQVUsRUFBRSxNQUFNO0lBQ2xCRSxZQUFZLEVBQUUsRUFBRTtJQUNoQkosS0FBSyxFQUFFLFNBQVMsQ0FBRTtHQUNuQjtFQUNEeUksa0JBQWtCLEVBQUU7SUFDbEIxSSxRQUFRLEVBQUUsRUFBRTtJQUNaSyxZQUFZLEVBQUUsRUFBRTtJQUNoQkosS0FBSyxFQUFFLFNBQVMsQ0FBRTtHQUNuQjtFQUNEMkksZ0JBQWdCLEVBQUU7SUFDaEJ2SSxZQUFZLEVBQUUsRUFBRTtJQUNoQlQsZUFBZSxFQUFFLFNBQVM7SUFBRTtJQUM1QkMsT0FBTyxFQUFFLEVBQUU7SUFDWE8sWUFBWSxFQUFFO0dBQ2Y7RUFDRHlJLFdBQVcsRUFBRTtJQUNYN0ksUUFBUSxFQUFFLEVBQUU7SUFDWkMsS0FBSyxFQUFFLFNBQVM7SUFBRTtJQUNsQm9CLGFBQWEsRUFBRSxNQUFNO0lBQ3JCaEIsWUFBWSxFQUFFLENBQUMsQ0FBRTtHQUNsQjtFQUNEMEksV0FBVyxFQUFFO0lBQ1gvSSxRQUFRLEVBQUUsRUFBRTtJQUNaRyxVQUFVLEVBQUUsTUFBTTtJQUNsQkYsS0FBSyxFQUFFLFNBQVM7SUFBRTtJQUNsQm9CLGFBQWEsRUFBRSxPQUFPO0lBQ3RCaEIsWUFBWSxFQUFFLENBQUMsQ0FBRTtHQUNsQjtFQUNEOEksT0FBTyxFQUFFO0lBQ1BuSixRQUFRLEVBQUUsRUFBRTtJQUNaQyxLQUFLLEVBQUUsU0FBUztJQUFFO0lBQ2xCb0IsYUFBYSxFQUFFLFFBQVE7SUFDdkJzSSxTQUFTLEVBQUUsUUFBUTtJQUNuQmxKLFNBQVMsRUFBRSxFQUFFLENBQUU7O0NBRWxCLENBQUM7QUFBQyxJQUFBZixFQUFBO0FBQUFnQixzQ0FBQSxDQUFBaEIsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6TDRCO0FBQ2E7QUFDSTtBQUlZO0FBTXRELFNBQVVrSyxXQUFXQSxDQUFDO0VBQUUzTjtBQUFVLENBQW9CO0VBQUFFLEVBQUE7RUFDMUQsTUFBTSxDQUFDd0YsUUFBUSxFQUFFa0ksV0FBVyxDQUFDLEdBQUdsTiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUM1QyxNQUFNLENBQUNpRixRQUFRLEVBQUVrSSxXQUFXLENBQUMsR0FBR25OLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQzVDLE1BQU0sQ0FBQ29OLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUdyTiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUNsRCxNQUFNLENBQUNzTixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHdk4sK0NBQVEsQ0FBQyxLQUFLLENBQUM7RUFDakQsTUFBTSxDQUFDd04sYUFBYSxFQUFFQyxnQkFBZ0IsQ0FBQyxHQUFHek4sK0NBQVEsQ0FBQywrQkFBK0IsQ0FBQztFQUNuRixNQUFNLENBQUNrRixZQUFZLEVBQUV3SSxlQUFlLENBQUMsR0FBRzFOLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBRXBEMkUsZ0RBQVMsQ0FBQyxNQUFLO0lBQ2JnSixxQkFBcUIsRUFBRTtFQUN6QixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sTUFBTUEscUJBQXFCLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO0lBQ3ZDLElBQUk7TUFDRixNQUFNOUcsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxHQUFHM0ksK0NBQVUsQ0FBQ0MsUUFBUSxHQUFHRCwrQ0FBVSxDQUFDRSx1QkFBdUIsRUFBRSxFQUFFO1FBQzFGMEksTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1VBQ1AsY0FBYyxFQUFFLGtCQUFrQjtVQUNsQyxlQUFlLEVBQUUsU0FBU04sSUFBSSxDQUFDLEdBQUcvSCw2Q0FBUSxDQUFDQyxRQUFRLElBQUlELDZDQUFRLENBQUNFLFFBQVEsRUFBRSxDQUFDLEVBQUU7VUFDN0UsNEJBQTRCLEVBQUVDLDhDQUFTQTtTQUN4QztRQUNEOE8sSUFBSSxFQUFFekcsSUFBSSxDQUFDQyxTQUFTLENBQUM7VUFDbkJwQyxRQUFRLEVBQUVyRyw2Q0FBUSxDQUFDQyxRQUFRO1VBQzNCcUcsUUFBUSxFQUFFdEcsNkNBQVEsQ0FBQ0U7U0FDcEI7T0FDRixDQUFDO01BRUYsTUFBTW9JLElBQUksR0FBRyxNQUFNSixRQUFRLENBQUNLLElBQUksRUFBRTtNQUNsQyxJQUFJRCxJQUFJLENBQUM0RyxhQUFhLEVBQUU7UUFDdEJKLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDO1FBQy9DbEgsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLEVBQUVTLElBQUksQ0FBQzZHLDhCQUE4QixDQUFDO1FBQzFFSixlQUFlLENBQUN6RyxJQUFJLENBQUM2Ryw4QkFBOEIsQ0FBQztRQUNwREMsTUFBTSxDQUFDRCw4QkFBOEIsR0FBRzdHLElBQUksQ0FBQzZHLDhCQUE4QixDQUFDLENBQUM7TUFDL0UsQ0FBQyxNQUFNO1FBQ0xMLGdCQUFnQixDQUFDLDZDQUE2QyxDQUFDO01BQ2pFO0lBQ0YsQ0FBQyxDQUFDLE9BQU9qRyxLQUFLLEVBQUU7TUFDZGpCLE9BQU8sQ0FBQ2lCLEtBQUssQ0FBQywwQkFBMEIsRUFBRUEsS0FBSyxDQUFDO01BQ2hEaUcsZ0JBQWdCLENBQUMsNERBQTRELENBQUM7SUFDaEY7RUFDRixDQUFDO0VBRUQsTUFBTU8sV0FBVyxHQUFHLE1BQU9DLFdBQVcsSUFBSTtJQUN4QyxJQUFJO01BQ0YsTUFBTXBILFFBQVEsR0FBRyxNQUFNcUgsUUFBUSxDQUFDRCxXQUFXLENBQUM7TUFDNUNGLE1BQU0sQ0FBQ0ksS0FBSyxHQUFHdEgsUUFBUSxDQUFDc0gsS0FBSztNQUM3QkosTUFBTSxDQUFDaEosUUFBUSxHQUFHOEIsUUFBUSxDQUFDOUIsUUFBUTtNQUNuQ3pGLFVBQVUsQ0FBQ3dCLFFBQVEsQ0FBQyxTQUFTLEVBQUU7UUFBRWlFLFFBQVEsRUFBRThCLFFBQVEsQ0FBQzlCO01BQVEsQ0FBRSxDQUFDO0lBQ2pFLENBQUMsQ0FBQyxPQUFPeUMsS0FBSyxFQUFFO01BQ2RqQixPQUFPLENBQUNpQixLQUFLLENBQUMsZUFBZSxFQUFFQSxLQUFLLENBQUM7SUFDdkM7RUFDRixDQUFDO0VBRUQsT0FDRTNKLGdEQUFBLHFCQUNFQSxnREFBQTtJQUFlc0QsS0FBSyxFQUFFQyxNQUFNLENBQUNRO0VBQVMsR0FDcEMvRCxnREFBQTtJQUFhc0QsS0FBSyxFQUFFQyxNQUFNLENBQUNrSDtFQUFPLEdBQ2hDekssZ0RBQUE7SUFBT2dPLFNBQVMsRUFBQyxnREFBZ0Q7SUFBQ3RLLElBQUksRUFBQztFQUFPLEVBQUcsRUFDakYxRCxnREFBQTtJQUFPMEQsSUFBSSxFQUFFaU0sYUFBYTtJQUFFck0sS0FBSyxFQUFFQyxNQUFNLENBQUNvTTtFQUFhLEVBQUksRUFDM0QzUCxnREFBQTtJQUNFc0QsS0FBSyxFQUFFQyxNQUFNLENBQUNhLEtBQUs7SUFDbkJFLElBQUksRUFBQyxVQUFVO0lBQ2ZaLElBQUksRUFBRXlELFFBQVE7SUFDZDVDLFlBQVksRUFBR0MsSUFBSSxJQUFLNkssV0FBVyxDQUFDN0ssSUFBSSxDQUFDRSxNQUFNLENBQUNoQixJQUFJO0VBQUMsRUFDckQsRUFDRjFELGdEQUFBO0lBQ0VzRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ2EsS0FBSztJQUNuQkUsSUFBSSxFQUFDLFVBQVU7SUFDZlosSUFBSSxFQUFFMEQsUUFBUTtJQUNkbUosTUFBTSxFQUFFLElBQUk7SUFDWmhNLFlBQVksRUFBR0MsSUFBSSxJQUFLOEssV0FBVyxDQUFDOUssSUFBSSxDQUFDRSxNQUFNLENBQUNoQixJQUFJO0VBQUMsRUFDckQsRUFDRjFELGdEQUFBO0lBQ0VzRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ2tELE1BQU07SUFDcEIvQyxJQUFJLEVBQUUrTCxTQUFTLEdBQUcsZUFBZSxHQUFHLE9BQU87SUFDM0M5TCxLQUFLLEVBQUV3TSxXQUFXO0lBQ2xCSyxTQUFTLEVBQUUsQ0FBQ2Y7RUFBUyxFQUNyQixFQUNGelAsZ0RBQUE7SUFDRXNELEtBQUssRUFBRUMsTUFBTSxDQUFDa04sWUFBWTtJQUMxQi9NLElBQUksRUFBQyxTQUFTO0lBQ2RDLEtBQUssRUFBRUEsQ0FBQSxLQUFNbEMsVUFBVSxDQUFDd0IsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUMxQ3VOLFNBQVMsRUFBRSxDQUFDZjtFQUFTLEVBQ3JCLEVBQ0Z6UCxnREFBQTtJQUNFc0QsS0FBSyxFQUFFLENBQ0xDLE1BQU0sQ0FBQ21OLFdBQVcsRUFDbEI7TUFBRWpMLEtBQUssRUFBRThKLFdBQVcsQ0FBQ29CLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxTQUFTLEdBQUc7SUFBUyxDQUFFLENBQ3RFO0lBQ0RqTixJQUFJLEVBQUU2TDtFQUFXLEVBQ2pCLENBQ1UsQ0FDQSxDQUNMO0FBRWpCO0FBQUM1TixFQUFBLENBL0ZleU4sV0FBVztBQUFBbEssRUFBQSxHQUFYa0ssV0FBVztBQWlHM0IsTUFBTTdMLE1BQU0sR0FBR2hDLDBEQUFVLENBQUM0RCxNQUFNLENBQUM7RUFDL0JwQixTQUFTLEVBQUU7SUFDVDJDLE1BQU0sRUFBRSxNQUFNO0lBQ2RrSyxhQUFhLEVBQUUsUUFBUTtJQUN2QmpLLGNBQWMsRUFBRSxRQUFRO0lBQ3hCdkIsZUFBZSxFQUFFO0dBQ2xCO0VBQ0RxRixPQUFPLEVBQUU7SUFDUC9FLEtBQUssRUFBRSxLQUFLO0lBQ1ptTCxTQUFTLEVBQUU7R0FDWjtFQUNEek0sS0FBSyxFQUFFO0lBQ0xvQixRQUFRLEVBQUUsRUFBRTtJQUNaQyxLQUFLLEVBQUUsU0FBUztJQUNoQkwsZUFBZSxFQUFFLFNBQVM7SUFDMUJRLFlBQVksRUFBRSxDQUFDO0lBQ2ZDLFlBQVksRUFBRSxFQUFFO0lBQ2hCUixPQUFPLEVBQUU7R0FDVjtFQUNEb0IsTUFBTSxFQUFFO0lBQ05qQixRQUFRLEVBQUUsRUFBRTtJQUNaQyxLQUFLLEVBQUUsU0FBUztJQUNoQkwsZUFBZSxFQUFFLFNBQVM7SUFDMUJRLFlBQVksRUFBRSxDQUFDO0lBQ2ZQLE9BQU8sRUFBRSxFQUFFO0lBQ1hRLFlBQVksRUFBRTtHQUNmO0VBQ0Q0SyxZQUFZLEVBQUU7SUFDWmpMLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEtBQUssRUFBRSxTQUFTO0lBQ2hCTCxlQUFlLEVBQUUsU0FBUztJQUMxQlEsWUFBWSxFQUFFLENBQUM7SUFDZlAsT0FBTyxFQUFFLEVBQUU7SUFDWFEsWUFBWSxFQUFFO0dBQ2Y7RUFDRDZLLFdBQVcsRUFBRTtJQUNYbEwsUUFBUSxFQUFFLEVBQUU7SUFDWnFCLGFBQWEsRUFBRTtHQUNoQjtFQUNEOEksYUFBYSxFQUFFO0lBQ2JuSyxRQUFRLEVBQUUsRUFBRTtJQUNaQyxLQUFLLEVBQUUsU0FBUztJQUNoQm9CLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCaEIsWUFBWSxFQUFFOztDQUVqQixDQUFDO0FBQUMsSUFBQVgsRUFBQTtBQUFBZ0Isc0NBQUEsQ0FBQWhCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFKNEI7QUFDZ0M7QUFDYTtBQUNoQztBQUNJO0FBQ0Y7QUFDYztBQUNSO0FBQ0k7QUFFRTtBQUNjO0FBQ3RCO0FBQ2M7QUFDWjtBQUVwRCxNQUFNb00sS0FBSyxHQUFHUCwyRUFBMEIsRUFBRTtBQUVuQyxNQUFNN1EsU0FBUyxHQUFhQSxDQUFBLEtBQUs7RUFDdEMsT0FDRUYsZ0RBQUEsQ0FBQzhRLGlFQUFtQixRQUNsQjlRLGdEQUFBLENBQUNzUixLQUFLLENBQUNDLFNBQVM7SUFBQ0MsZ0JBQWdCLEVBQUM7RUFBTyxHQUN2Q3hSLGdEQUFBLENBQUNzUixLQUFLLENBQUNHLE1BQU07SUFBQzNKLElBQUksRUFBQyxPQUFPO0lBQUM0SixTQUFTLEVBQUV0QyxxREFBV0E7RUFBQSxFQUFJLEVBQ3JEcFAsZ0RBQUEsQ0FBQ3NSLEtBQUssQ0FBQ0csTUFBTTtJQUFDM0osSUFBSSxFQUFDLFNBQVM7SUFBQzRKLFNBQVMsRUFBRVYseURBQWFBO0VBQUEsRUFBSSxFQUN6RGhSLGdEQUFBLENBQUNzUixLQUFLLENBQUNHLE1BQU07SUFBQzNKLElBQUksRUFBQyxRQUFRO0lBQUM0SixTQUFTLEVBQUVULHVEQUFZQTtFQUFBLEVBQUksRUFDdkRqUixnREFBQSxDQUFDc1IsS0FBSyxDQUFDRyxNQUFNO0lBQUMzSixJQUFJLEVBQUMsZUFBZTtJQUFDNEosU0FBUyxFQUFFUixxRUFBbUJBO0VBQUEsRUFBSSxFQUNyRWxSLGdEQUFBLENBQUNzUixLQUFLLENBQUNHLE1BQU07SUFDWDNKLElBQUksRUFBQyxXQUFXO0lBQ2hCNEosU0FBUyxFQUFFekssNkRBQWU7SUFDMUIwSyxhQUFhLEVBQUU7TUFBRXpLLFFBQVEsRUFBRTtJQUFJO0VBQUUsRUFDakMsRUFDRmxILGdEQUFBLENBQUNzUixLQUFLLENBQUNHLE1BQU07SUFDWDNKLElBQUksRUFBQyxXQUFXO0lBQ2hCNEosU0FBUyxFQUFFTCw4REFBZTtJQUMxQk0sYUFBYSxFQUFFO01BQUV6SyxRQUFRLEVBQUU7SUFBSTtFQUFFLEVBQ2pDLEVBQ0ZsSCxnREFBQSxDQUFDc1IsS0FBSyxDQUFDRyxNQUFNO0lBQ1gzSixJQUFJLEVBQUMsYUFBYTtJQUNsQjRKLFNBQVMsRUFBRXZFLGlFQUFpQjtJQUM1QndFLGFBQWEsRUFBRTtNQUFFekssUUFBUSxFQUFFO0lBQUk7RUFBRSxFQUNqQyxFQUNGbEgsZ0RBQUEsQ0FBQ3NSLEtBQUssQ0FBQ0csTUFBTTtJQUFDM0osSUFBSSxFQUFDLGNBQWM7SUFBQzRKLFNBQVMsRUFBRWxRLG1FQUFrQkE7RUFBQSxFQUFJLEVBQ25FeEIsZ0RBQUEsQ0FBQ3NSLEtBQUssQ0FBQ0csTUFBTTtJQUFDM0osSUFBSSxFQUFDLHFCQUFxQjtJQUFDNEosU0FBUyxFQUFFdkwsaUZBQXlCQTtFQUFBLEVBQUksRUFDakZuRyxnREFBQSxDQUFDc1IsS0FBSyxDQUFDRyxNQUFNO0lBQUMzSixJQUFJLEVBQUMsVUFBVTtJQUFDNEosU0FBUyxFQUFFUCwyREFBY0E7RUFBQSxFQUFJLEVBQzNEblIsZ0RBQUEsQ0FBQ3NSLEtBQUssQ0FBQ0csTUFBTTtJQUFDM0osSUFBSSxFQUFDLGlCQUFpQjtJQUFDNEosU0FBUyxFQUFFTiwwRUFBcUJBO0VBQUEsRUFBSSxDQUN6RCxDQUNFO0FBRTFCLENBQUM7QUFBQ2xNLEVBQUEsR0E5QldoRixTQUFTO0FBQUEsSUFBQWdGLEVBQUE7QUFBQWdCLHNDQUFBLENBQUFoQixFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQlM7QUFDaUI7QUFZaEQsTUFBTTBNLFNBQVMsR0FBRyxDQUNoQjtFQUFFOUosSUFBSSxFQUFFLE1BQU07RUFBRXBHLEtBQUssRUFBRTtBQUFXLENBQUUsRUFDcEM7RUFBRW9HLElBQUksRUFBRSxjQUFjO0VBQUVwRyxLQUFLLEVBQUU7QUFBVyxDQUFFLEVBQzVDO0VBQUVvRyxJQUFJLEVBQUUsUUFBUTtFQUFFcEcsS0FBSyxFQUFFO0FBQWEsQ0FBRSxFQUN4QztFQUFFb0csSUFBSSxFQUFFLFlBQVk7RUFBRXBHLEtBQUssRUFBRTtBQUFTLENBQUUsQ0FDekM7QUFFSyxTQUFVc0YsYUFBYUEsQ0FBQztFQUFFaUcsV0FBVztFQUFFeEwsVUFBVTtFQUFFMkIsR0FBRztFQUFFOEQ7QUFBUSxDQUFzQjtFQUMxRixNQUFNMkssZ0JBQWdCLEdBQUluUSxLQUErQixJQUFJO0lBQzNELElBQUlBLEtBQUssS0FBS3VMLFdBQVcsRUFBRTtNQUN6QnZFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixFQUFFakgsS0FBSyxDQUFDO01BQ3BDZ0gsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLEVBQUVXLElBQUksQ0FBQ0MsU0FBUyxDQUFDckMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztNQUN4RSxJQUFJeEYsS0FBSyxLQUFLLFNBQVMsSUFBSUEsS0FBSyxLQUFLLFdBQVcsRUFBRTtRQUNoREQsVUFBVSxDQUFDd0IsUUFBUSxDQUFDdkIsS0FBSyxFQUFFO1VBQ3pCd0YsUUFBUTtVQUNSQyxRQUFRLEVBQUVELFFBQVEsRUFBRUMsUUFBUTtVQUFFO1VBQzlCQyxRQUFRLEVBQUVGLFFBQVEsRUFBRUUsUUFBUSxDQUFFO1NBQy9CLENBQUM7TUFDSixDQUFDLE1BQU07UUFDTDNGLFVBQVUsQ0FBQ3dCLFFBQVEsQ0FBQ3ZCLEtBQUssQ0FBQztNQUM1QjtJQUNGO0VBQ0YsQ0FBQztFQUVELE9BQ0UxQixnREFBQTtJQUFlb0QsR0FBRyxFQUFFQSxHQUFHO0lBQUVFLEtBQUssRUFBRUMsTUFBTSxDQUFDdU87RUFBTyxHQUMzQ0YsU0FBUyxDQUFDaEgsR0FBRyxDQUFDLENBQUNtSCxJQUFJLEVBQUU5RixLQUFLLEtBQ3pCak0sZ0RBQUEsQ0FBQ0EsMkNBQWM7SUFBQ2tNLEdBQUcsRUFBRTZGLElBQUksQ0FBQ2pLO0VBQUksR0FDM0JtRSxLQUFLLEdBQUcsQ0FBQyxJQUFJak0sZ0RBQUE7SUFBT3NELEtBQUssRUFBRUMsTUFBTSxDQUFDeU87RUFBUyxFQUFJLEVBQ2hEaFMsZ0RBQUE7SUFDRXNELEtBQUssRUFBRSxDQUNMQyxNQUFNLENBQUMwTyxRQUFRLEVBQ2ZoRixXQUFXLEtBQUs4RSxJQUFJLENBQUNyUSxLQUFLLElBQUk2QixNQUFNLENBQUMyTyxjQUFjLENBQ3BEO0lBQ0R2TyxLQUFLLEVBQUVBLENBQUEsS0FBTWtPLGdCQUFnQixDQUFDRSxJQUFJLENBQUNyUSxLQUFpQztFQUFDLEdBRXJFMUIsZ0RBQUE7SUFDRTBELElBQUksRUFBRXFPLElBQUksQ0FBQ2pLLElBQUk7SUFDZnhFLEtBQUssRUFBRSxDQUNMQyxNQUFNLENBQUM0TyxTQUFTLEVBQ2hCbEYsV0FBVyxLQUFLOEUsSUFBSSxDQUFDclEsS0FBSyxJQUFJNkIsTUFBTSxDQUFDNk8sZUFBZTtFQUNyRCxFQUNELENBQ1UsQ0FFakIsQ0FBQyxDQUNZO0FBRXBCO0FBQUNsTixFQUFBLEdBekNlOEIsYUFBYTtBQTJDN0IsTUFBTXpELE1BQU0sR0FBR2hDLDBEQUFVLENBQUM0RCxNQUFNLENBQUM7RUFDL0IyTSxPQUFPLEVBQUU7SUFDUDFNLGVBQWUsRUFBRSxTQUFTO0lBQzFCc0IsTUFBTSxFQUFFLEVBQUU7SUFDVkUsVUFBVSxFQUFFLFFBQVE7SUFDcEJELGNBQWMsRUFBRSxjQUFjO0lBQzlCMEwsY0FBYyxFQUFFLENBQUM7SUFDakJDLGNBQWMsRUFBRTtHQUNqQjtFQUNETCxRQUFRLEVBQUU7SUFDUk0sSUFBSSxFQUFFLENBQUM7SUFDUDNMLFVBQVUsRUFBRSxRQUFRO0lBQ3BCRCxjQUFjLEVBQUU7R0FDakI7RUFDRHVMLGNBQWMsRUFBRTtJQUNkRyxjQUFjLEVBQUUsQ0FBQztJQUNqQkMsY0FBYyxFQUFFO0dBQ2pCO0VBQ0RILFNBQVMsRUFBRTtJQUNUM00sUUFBUSxFQUFFLEVBQUU7SUFDWkMsS0FBSyxFQUFFLFNBQVM7SUFDaEJvQixhQUFhLEVBQUU7R0FDaEI7RUFDRHVMLGVBQWUsRUFBRTtJQUNmM00sS0FBSyxFQUFFLFNBQVM7SUFDaEJFLFVBQVUsRUFBRTtHQUNiO0VBQ0RxTSxTQUFTLEVBQUU7SUFDVHRNLEtBQUssRUFBRSxDQUFDO0lBQ1JnQixNQUFNLEVBQUUsS0FBSztJQUNidEIsZUFBZSxFQUFFOztDQUVwQixDQUFDO0FBQUMsSUFBQUYsRUFBQTtBQUFBZ0Isc0NBQUEsQ0FBQWhCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GNEI7QUFDYTtBQUNJO0FBSUE7QUFDRTtBQWdCNUMsU0FBVW1NLGVBQWVBLENBQUM7RUFBRTVQLFVBQVU7RUFBRUM7QUFBSyxDQUF3QjtFQUFBQyxFQUFBO0VBQ3pFK0csT0FBTyxDQUFDQyxHQUFHLENBQUMseUNBQXlDLEVBQUVXLElBQUksQ0FBQ0MsU0FBUyxDQUFDN0gsS0FBSyxDQUFDTSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBRTdGLE1BQU07SUFBRWtGLFFBQVE7SUFBRUMsUUFBUTtJQUFFQztFQUFRLENBQUUsR0FBRzFGLEtBQUssQ0FBQ00sTUFBTSxJQUFJLEVBQUU7RUFDM0QsTUFBTSxDQUFDd1EsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3RRLCtDQUFRLENBQW1CLEVBQUUsQ0FBQztFQUM5RCxNQUFNLENBQUNtTCxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHcEwsK0NBQVEsQ0FBQyxJQUFJLENBQUM7RUFDNUMsTUFBTSxDQUFDd0gsS0FBSyxFQUFFNkQsUUFBUSxDQUFDLEdBQUdyTCwrQ0FBUSxDQUFnQixJQUFJLENBQUM7RUFFdkQyRSxnREFBUyxDQUFDLE1BQUs7SUFDYjRCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFDQUFxQyxDQUFDO0lBQ2xELElBQUl6QixRQUFRLElBQUlBLFFBQVEsQ0FBQzZCLEVBQUUsSUFBSTVCLFFBQVEsSUFBSUMsUUFBUSxFQUFFO01BQ25Ec0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0NBQXNDLENBQUM7TUFDbkQrSixhQUFhLEVBQUU7SUFDakIsQ0FBQyxNQUFNO01BQ0xoSyxPQUFPLENBQUNpQixLQUFLLENBQUMsMENBQTBDLEVBQUU7UUFBRXpDLFFBQVE7UUFBRUMsUUFBUTtRQUFFQztNQUFRLENBQUUsQ0FBQztNQUMzRm9HLFFBQVEsQ0FBQyx1RUFBdUUsQ0FBQztNQUNqRkQsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNuQjtFQUNGLENBQUMsRUFBRSxDQUFDckcsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO0VBRWxDLE1BQU1zTCxhQUFhLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO0lBQy9CLElBQUk7TUFDRmhLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO01BQ25DRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEVBQUV6QixRQUFRLENBQUM2QixFQUFFLENBQUM7TUFDcENMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsRUFBRXhCLFFBQVEsQ0FBQztNQUNsQ3VCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsRUFBRXZCLFFBQVEsR0FBRyxVQUFVLEdBQUcsY0FBYyxDQUFDO01BRWhFLE1BQU13QixVQUFVLEdBQUcsU0FBU0MsSUFBSSxDQUFDLEdBQUcxQixRQUFRLElBQUlDLFFBQVEsRUFBRSxDQUFDLEVBQUU7TUFDN0RzQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLEVBQUVDLFVBQVUsQ0FBQztNQUV2QyxNQUFNRSxHQUFHLEdBQUcsR0FBR3hJLCtDQUFVLENBQUNDLFFBQVEsR0FBR0QsK0NBQVUsQ0FBQ0sscUJBQXFCLElBQUl1RyxRQUFRLENBQUM2QixFQUFFLFdBQVc7TUFDL0ZMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixFQUFFRyxHQUFHLENBQUM7TUFFdEMsTUFBTUUsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0gsR0FBRyxFQUFFO1FBQ2hDSSxNQUFNLEVBQUUsS0FBSztRQUNiQyxPQUFPLEVBQUU7VUFDUCxlQUFlLEVBQUVQLFVBQVU7VUFDM0IsNEJBQTRCLEVBQUUzSCw4Q0FBUztVQUN2QyxRQUFRLEVBQUU7O09BRWIsQ0FBQztNQUVGeUgsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLEVBQUVLLFFBQVEsQ0FBQzJKLE1BQU0sQ0FBQztNQUNoRGpLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixFQUFFVyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1AsUUFBUSxDQUFDRyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO01BRTNFLE1BQU1DLElBQUksR0FBRyxNQUFNSixRQUFRLENBQUNLLElBQUksRUFBRTtNQUNsQ1gsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUVXLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO01BRTVELElBQUlBLElBQUksQ0FBQ0ksZUFBZSxJQUFJa0IsS0FBSyxDQUFDQyxPQUFPLENBQUN2QixJQUFJLENBQUNJLGVBQWUsQ0FBQyxFQUFFO1FBQy9EZCxPQUFPLENBQUNDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRVMsSUFBSSxDQUFDSSxlQUFlLENBQUNDLE1BQU0sQ0FBQztRQUNuRWdKLFdBQVcsQ0FBQ3JKLElBQUksQ0FBQ0ksZUFBZSxDQUFDO01BQ25DLENBQUMsTUFBTTtRQUNMZCxPQUFPLENBQUNpQixLQUFLLENBQUMsNEJBQTRCLEVBQUVQLElBQUksQ0FBQztRQUNqRCxNQUFNLElBQUl3SixLQUFLLENBQUMsMkJBQTJCLENBQUM7TUFDOUM7TUFFQXJGLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQyxDQUFDLE9BQU9zRixHQUFHLEVBQUU7TUFDWm5LLE9BQU8sQ0FBQ2lCLEtBQUssQ0FBQywwQkFBMEIsRUFBRWtKLEdBQUcsQ0FBQztNQUM5Q3JGLFFBQVEsQ0FBQyx5Q0FBeUNxRixHQUFHLENBQUN2TSxPQUFPLEVBQUUsQ0FBQztNQUNoRWlILFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDbkI7RUFDRixDQUFDO0VBRUQsTUFBTXVGLGNBQWMsR0FBR0EsQ0FBQzdRLE1BQWMsRUFBRThRLE1BQWMsS0FBSTtJQUN4RCxPQUFPLEdBQUdBLE1BQU0sSUFBSTlRLE1BQU0sQ0FBQ2tHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxFQUFFO0VBQy9FLENBQUM7RUFFRCxNQUFNNEssd0JBQXdCLEdBQUdBLENBQUEsS0FBSztJQUNwQyxPQUFPUixRQUFRLENBQUNTLE1BQU0sQ0FBQyxDQUFDQyxLQUFLLEVBQUVDLE9BQU8sS0FBS0QsS0FBSyxHQUFHQyxPQUFPLENBQUN4SCxjQUFjLEVBQUUsQ0FBQyxDQUFDO0VBQy9FLENBQUM7RUFFRCxJQUFJMkIsT0FBTyxFQUFFO0lBQ1gsT0FDRXROLGdEQUFBO01BQVltRCxJQUFJLEVBQUM7SUFBUyxHQUN4Qm5ELGdEQUFBO01BQW1Cb1QsSUFBSSxFQUFFLElBQUk7TUFBRWhRLEdBQUcsRUFBRTtJQUFDLEVBQUksRUFDekNwRCxnREFBQSxDQUFDZ0gseURBQWE7TUFBQzVELEdBQUcsRUFBRSxDQUFDO01BQUU2SixXQUFXLEVBQUMsV0FBVztNQUFDeEwsVUFBVSxFQUFFQSxVQUFVO01BQUV5RixRQUFRLEVBQUVBO0lBQVEsRUFBSSxDQUNsRjtFQUVqQjtFQUVBLElBQUl5QyxLQUFLLEVBQUU7SUFDVCxPQUNFM0osZ0RBQUE7TUFBWW1ELElBQUksRUFBQztJQUFTLEdBQ3hCbkQsZ0RBQUE7TUFBTzBELElBQUksRUFBRWlHLEtBQUs7TUFBRXZHLEdBQUcsRUFBRSxDQUFDO01BQUVFLEtBQUssRUFBRUMsTUFBTSxDQUFDdUs7SUFBUyxFQUFJLEVBQ3ZEOU4sZ0RBQUEsQ0FBQ2dILHlEQUFhO01BQUM1RCxHQUFHLEVBQUUsQ0FBQztNQUFFNkosV0FBVyxFQUFDLFdBQVc7TUFBQ3hMLFVBQVUsRUFBRUEsVUFBVTtNQUFFeUYsUUFBUSxFQUFFQTtJQUFRLEVBQUksQ0FDbEY7RUFFakI7RUFFQSxPQUNFbEgsZ0RBQUE7SUFBWW1ELElBQUksRUFBQztFQUFTLEdBQ3hCbkQsZ0RBQUE7SUFBWW9ELEdBQUcsRUFBRTtFQUFDLEdBQ2hCcEQsZ0RBQUE7SUFBYXNELEtBQUssRUFBRUMsTUFBTSxDQUFDUTtFQUFTLEdBQ2xDL0QsZ0RBQUE7SUFBTzBELElBQUksRUFBQyxjQUFjO0lBQUNKLEtBQUssRUFBRUMsTUFBTSxDQUFDTztFQUFVLEVBQUksRUFHdkQ5RCxnREFBQTtJQUFZc0QsS0FBSyxFQUFFQyxNQUFNLENBQUNTLElBQUk7SUFBRWIsSUFBSSxFQUFDLFlBQVk7SUFBQ0UsT0FBTyxFQUFDO0VBQUcsR0FDM0RyRCxnREFBQTtJQUFPb0QsR0FBRyxFQUFFLENBQUM7SUFBRU0sSUFBSSxFQUFDLGtCQUFrQjtJQUFDSixLQUFLLEVBQUVDLE1BQU0sQ0FBQ1c7RUFBWSxFQUFJLEVBQ3JFbEUsZ0RBQUE7SUFBT29ELEdBQUcsRUFBRSxDQUFDO0lBQUVNLElBQUksRUFBRW9QLGNBQWMsQ0FBQ0Usd0JBQXdCLEVBQUUsRUFBRVIsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFaEUsUUFBUSxDQUFDQyxhQUFhLElBQUksS0FBSyxDQUFDO0lBQUVuTCxLQUFLLEVBQUVDLE1BQU0sQ0FBQzhQO0VBQWUsRUFBSSxDQUNySSxFQUdiclQsZ0RBQUE7SUFBTzBELElBQUksRUFBQyxzQkFBc0I7SUFBQ0osS0FBSyxFQUFFQyxNQUFNLENBQUMrUDtFQUFjLEVBQUksRUFFbEVkLFFBQVEsQ0FBQzVILEdBQUcsQ0FBQyxDQUFDdUksT0FBTyxFQUFFbEgsS0FBSyxLQUMzQmpNLGdEQUFBO0lBQVlrTSxHQUFHLEVBQUVELEtBQUs7SUFBRTNJLEtBQUssRUFBRUMsTUFBTSxDQUFDUyxJQUFJO0lBQUViLElBQUksRUFBQyx3QkFBd0I7SUFBQ0UsT0FBTyxFQUFDO0VBQVMsR0FDekZyRCxnREFBQTtJQUFPb0QsR0FBRyxFQUFFLENBQUM7SUFBRUssR0FBRyxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFeVAsT0FBTyxDQUFDbEYsV0FBVztJQUFFM0ssS0FBSyxFQUFFQyxNQUFNLENBQUMwSztFQUFXLEVBQUksRUFDL0VqTyxnREFBQTtJQUFPb0QsR0FBRyxFQUFFLENBQUM7SUFBRUssR0FBRyxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFeVAsT0FBTyxDQUFDekgsU0FBUztJQUFFcEksS0FBSyxFQUFFQyxNQUFNLENBQUNrSTtFQUFhLEVBQUksRUFDL0V6TCxnREFBQTtJQUFPb0QsR0FBRyxFQUFFLENBQUM7SUFBRW1RLE9BQU8sRUFBRSxDQUFDO0lBQUU3UCxJQUFJLEVBQUVvUCxjQUFjLENBQUNLLE9BQU8sQ0FBQ3hILGNBQWMsRUFBRXdILE9BQU8sQ0FBQzNFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDO0lBQUVuTCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ29JO0VBQWMsRUFBSSxFQUN6STNMLGdEQUFBO0lBQU9vRCxHQUFHLEVBQUUsQ0FBQztJQUFFbVEsT0FBTyxFQUFFLENBQUM7SUFBRTdQLElBQUksRUFBRSxXQUFXeVAsT0FBTyxDQUFDUixNQUFNLENBQUN0UyxLQUFLLEVBQUU7SUFBRWlELEtBQUssRUFBRUMsTUFBTSxDQUFDaVE7RUFBYSxFQUFJLEVBQ25HeFQsZ0RBQUE7SUFBT29ELEdBQUcsRUFBRSxDQUFDO0lBQUVtUSxPQUFPLEVBQUUsQ0FBQztJQUFFN1AsSUFBSSxFQUFFLHFCQUFxQnlQLE9BQU8sQ0FBQ00seUJBQXlCLENBQUNwTCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFBRS9FLEtBQUssRUFBRUMsTUFBTSxDQUFDbVE7RUFBZSxFQUFJLENBRXpJLENBQUMsQ0FDVSxDQUNILEVBQ2IxVCxnREFBQSxDQUFDZ0gseURBQWE7SUFBQzVELEdBQUcsRUFBRSxDQUFDO0lBQUU2SixXQUFXLEVBQUMsV0FBVztJQUFDeEwsVUFBVSxFQUFFQSxVQUFVO0lBQUV5RixRQUFRLEVBQUVBO0VBQVEsRUFBSSxDQUNsRjtBQUVqQjtBQUFDdkYsRUFBQSxDQXZIZTBQLGVBQWU7QUFBQW5NLEVBQUEsR0FBZm1NLGVBQWU7QUF5SC9CLE1BQU05TixNQUFNLEdBQUdoQywwREFBVSxDQUFDNEQsTUFBTSxDQUFDO0VBQy9CcEIsU0FBUyxFQUFFO0lBQ1RzQixPQUFPLEVBQUUsRUFBRTtJQUNYRCxlQUFlLEVBQUU7R0FDbEI7RUFDRHRCLFVBQVUsRUFBRTtJQUNWMEIsUUFBUSxFQUFFLEVBQUU7SUFDWkcsVUFBVSxFQUFFLE1BQU07SUFDbEJGLEtBQUssRUFBRSxTQUFTO0lBQ2hCb0IsYUFBYSxFQUFFLFFBQVE7SUFDdkJoQixZQUFZLEVBQUU7R0FDZjtFQUNEN0IsSUFBSSxFQUFFO0lBQ0pvQixlQUFlLEVBQUUsU0FBUztJQUMxQlEsWUFBWSxFQUFFLENBQUM7SUFDZlAsT0FBTyxFQUFFLEVBQUU7SUFDWFEsWUFBWSxFQUFFLEVBQUU7SUFDaEJDLFNBQVMsRUFBRTtHQUNaO0VBQ0Q1QixZQUFZLEVBQUU7SUFDWnNCLFFBQVEsRUFBRSxFQUFFO0lBQ1pHLFVBQVUsRUFBRSxNQUFNO0lBQ2xCRixLQUFLLEVBQUUsU0FBUztJQUNoQkksWUFBWSxFQUFFO0dBQ2Y7RUFDRHdOLGVBQWUsRUFBRTtJQUNmN04sUUFBUSxFQUFFLEVBQUU7SUFDWkcsVUFBVSxFQUFFLE1BQU07SUFDbEJGLEtBQUssRUFBRTtHQUNSO0VBQ0Q2TixjQUFjLEVBQUU7SUFDZDlOLFFBQVEsRUFBRSxFQUFFO0lBQ1pHLFVBQVUsRUFBRSxNQUFNO0lBQ2xCRixLQUFLLEVBQUUsU0FBUztJQUNoQlEsU0FBUyxFQUFFLEVBQUU7SUFDYkosWUFBWSxFQUFFO0dBQ2Y7RUFDRG9JLFdBQVcsRUFBRTtJQUNYekksUUFBUSxFQUFFLEVBQUU7SUFDWkcsVUFBVSxFQUFFLE1BQU07SUFDbEJGLEtBQUssRUFBRTtHQUNSO0VBQ0RnRyxhQUFhLEVBQUU7SUFDYmpHLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEtBQUssRUFBRSxTQUFTO0lBQ2hCb0IsYUFBYSxFQUFFO0dBQ2hCO0VBQ0Q4RSxjQUFjLEVBQUU7SUFDZG5HLFFBQVEsRUFBRSxFQUFFO0lBQ1pHLFVBQVUsRUFBRSxNQUFNO0lBQ2xCRixLQUFLLEVBQUUsU0FBUztJQUNoQlEsU0FBUyxFQUFFO0dBQ1o7RUFDRHVOLGFBQWEsRUFBRTtJQUNiaE8sUUFBUSxFQUFFLEVBQUU7SUFDWkMsS0FBSyxFQUFFLFNBQVM7SUFDaEJRLFNBQVMsRUFBRTtHQUNaO0VBQ0R5TixlQUFlLEVBQUU7SUFDZmxPLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEtBQUssRUFBRSxTQUFTO0lBQ2hCUSxTQUFTLEVBQUU7R0FDWjtFQUNENkgsU0FBUyxFQUFFO0lBQ1R0SSxRQUFRLEVBQUUsRUFBRTtJQUNaQyxLQUFLLEVBQUUsS0FBSztJQUNab0IsYUFBYSxFQUFFOztDQUVsQixDQUFDO0FBQUMsSUFBQTNCLEVBQUE7QUFBQWdCLHNDQUFBLENBQUFoQixFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTjRCO0FBQ2E7QUFDSTtBQUlBO0FBQ0M7QUFPM0MsU0FBVThMLGFBQWFBLENBQUM7RUFBRXZQLFVBQVU7RUFBRUM7QUFBSyxDQUFzQjtFQUFBQyxFQUFBO0VBQ3JFLE1BQU07SUFBRXVGLFFBQVE7SUFBRTBNO0VBQVcsQ0FBRSxHQUFHRCw2REFBTyxFQUFFO0VBRTNDLE1BQU0sQ0FBQ0UsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRzNSLCtDQUFRLENBQUMsS0FBSyxDQUFDO0VBQ2pELE1BQU0sQ0FBQzRSLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBRzdSLCtDQUFRLENBQUM7SUFDbkQwRixXQUFXLEVBQUUsRUFBRTtJQUNmb00sWUFBWSxFQUFFLEVBQUU7SUFDaEJDLFFBQVEsRUFBRTtHQUNYLENBQUM7RUFFRnBOLGdEQUFTLENBQUMsTUFBSztJQUNiLE1BQU1xTixhQUFhLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO01BQy9CLE1BQU1DLGVBQWUsR0FBRzFTLEtBQUssQ0FBQ00sTUFBTSxFQUFFa0YsUUFBUSxJQUFJZ0osTUFBTSxDQUFDaEosUUFBUSxJQUFJLEVBQUU7TUFDdkV3QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRXlMLGVBQWUsQ0FBQztNQUVsRCxJQUFJalUsTUFBTSxDQUFDa1UsSUFBSSxDQUFDRCxlQUFlLENBQUMsQ0FBQzNLLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDN0NmLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtEQUFrRCxDQUFDO1FBQy9EO1FBQ0E7UUFDQSxNQUFNMkwsU0FBUyxHQUFHO1VBQ2hCek0sV0FBVyxFQUFFLFVBQVU7VUFDdkJvTSxZQUFZLEVBQUUsa0JBQWtCO1VBQ2hDQyxRQUFRLEVBQUUsWUFBWTtVQUN0QnhJLFNBQVMsRUFBRTtTQUNaO1FBQ0RrSSxXQUFXLENBQUNVLFNBQVMsQ0FBQztRQUN0Qk4saUJBQWlCLENBQUM7VUFDaEJuTSxXQUFXLEVBQUV5TSxTQUFTLENBQUN6TSxXQUFXO1VBQ2xDb00sWUFBWSxFQUFFSyxTQUFTLENBQUNMLFlBQVk7VUFDcENDLFFBQVEsRUFBRUksU0FBUyxDQUFDSjtTQUNyQixDQUFDO01BQ0osQ0FBQyxNQUFNO1FBQ0xOLFdBQVcsQ0FBQ1EsZUFBZSxDQUFDO1FBQzVCSixpQkFBaUIsQ0FBQztVQUNoQm5NLFdBQVcsRUFBRXVNLGVBQWUsQ0FBQ3ZNLFdBQVcsSUFBSSxFQUFFO1VBQzlDb00sWUFBWSxFQUFFRyxlQUFlLENBQUNILFlBQVksSUFBSSxFQUFFO1VBQ2hEQyxRQUFRLEVBQUVFLGVBQWUsQ0FBQ0YsUUFBUSxJQUFJO1NBQ3ZDLENBQUM7TUFDSjtJQUNGLENBQUM7SUFFREMsYUFBYSxFQUFFO0VBQ2pCLENBQUMsRUFBRSxDQUFDelMsS0FBSyxDQUFDTSxNQUFNLEVBQUVrRixRQUFRLEVBQUUwTSxXQUFXLENBQUMsQ0FBQztFQUV6QyxNQUFNVyxVQUFVLEdBQUdBLENBQUEsS0FBSztJQUN0QlQsWUFBWSxDQUFDLElBQUksQ0FBQztFQUNwQixDQUFDO0VBRUQsTUFBTVUsVUFBVSxHQUFHQSxDQUFBLEtBQUs7SUFDdEI5TCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRW9MLGNBQWMsQ0FBQztJQUNoRCxJQUFJN00sUUFBUSxFQUFFO01BQ1owTSxXQUFXLENBQUM7UUFBRSxHQUFHMU0sUUFBUTtRQUFFLEdBQUc2TTtNQUFjLENBQUUsQ0FBQztJQUNqRDtJQUNBRCxZQUFZLENBQUMsS0FBSyxDQUFDO0lBQ25CLElBQUk1RCxNQUFNLENBQUNoSixRQUFRLEVBQUU7TUFDbkJnSixNQUFNLENBQUNoSixRQUFRLEdBQUc7UUFBRSxHQUFHZ0osTUFBTSxDQUFDaEosUUFBUTtRQUFFLEdBQUc2TTtNQUFjLENBQUU7SUFDN0Q7SUFDQTtFQUNGLENBQUM7RUFFRCxNQUFNVSxZQUFZLEdBQUdBLENBQUEsS0FBSztJQUN4QlgsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUNuQixJQUFJNU0sUUFBUSxFQUFFO01BQ1o4TSxpQkFBaUIsQ0FBQztRQUNoQm5NLFdBQVcsRUFBRVgsUUFBUSxDQUFDVyxXQUFXLElBQUksRUFBRTtRQUN2Q29NLFlBQVksRUFBRS9NLFFBQVEsQ0FBQytNLFlBQVksSUFBSSxFQUFFO1FBQ3pDQyxRQUFRLEVBQUVoTixRQUFRLENBQUNnTixRQUFRLElBQUk7T0FDaEMsQ0FBQztJQUNKO0VBQ0YsQ0FBQztFQUVELE1BQU01SSxZQUFZLEdBQUdBLENBQUEsS0FBSztJQUN4QjVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUMxQnVILE1BQU0sQ0FBQ0ksS0FBSyxHQUFHLElBQUk7SUFDbkJKLE1BQU0sQ0FBQ2hKLFFBQVEsR0FBRyxJQUFJO0lBQ3RCME0sV0FBVyxDQUFDLElBQUksQ0FBQztJQUNqQm5TLFVBQVUsQ0FBQ2lULEtBQUssQ0FBQztNQUNmekksS0FBSyxFQUFFLENBQUM7TUFDUjBJLE1BQU0sRUFBRSxDQUFDO1FBQUU3TSxJQUFJLEVBQUU7TUFBTyxDQUFFO0tBQzNCLENBQUM7RUFDSixDQUFDO0VBRUQsSUFBSSxDQUFDWixRQUFRLEVBQUU7SUFDYixPQUNFbEgsZ0RBQUE7TUFBYXNELEtBQUssRUFBRUMsTUFBTSxDQUFDUTtJQUFTLEdBQ2xDL0QsZ0RBQUE7TUFBTzBELElBQUksRUFBQyxzQkFBc0I7TUFBQ0osS0FBSyxFQUFFQyxNQUFNLENBQUNPO0lBQVUsRUFBSSxDQUNuRDtFQUVsQjtFQUVBLE9BQ0U5RCxnREFBQTtJQUFZbUQsSUFBSSxFQUFDO0VBQVMsR0FDeEJuRCxnREFBQTtJQUFZb0QsR0FBRyxFQUFFO0VBQUMsR0FDaEJwRCxnREFBQTtJQUFhc0QsS0FBSyxFQUFFQyxNQUFNLENBQUNRO0VBQVMsR0FDbEMvRCxnREFBQTtJQUFPMEQsSUFBSSxFQUFDLFNBQVM7SUFBQ0osS0FBSyxFQUFFQyxNQUFNLENBQUNPO0VBQVUsRUFBSSxFQUVsRDlELGdEQUFBO0lBQVlzRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ1MsSUFBSTtJQUFFYixJQUFJLEVBQUMsOEJBQThCO0lBQUNFLE9BQU8sRUFBQztFQUFTLEdBQ25GckQsZ0RBQUE7SUFBT29ELEdBQUcsRUFBRSxDQUFDO0lBQUVLLEdBQUcsRUFBRSxDQUFDO0lBQUVILEtBQUssRUFBRUMsTUFBTSxDQUFDcVIsS0FBSztJQUFFbFIsSUFBSSxFQUFDO0VBQU8sRUFBRyxFQUMxRG1RLFNBQVMsR0FDUjdULGdEQUFBO0lBQVdvRCxHQUFHLEVBQUUsQ0FBQztJQUFFSyxHQUFHLEVBQUUsQ0FBQztJQUFFSCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ2EsS0FBSztJQUM1Q1YsSUFBSSxFQUFFO01BQUVyRCxLQUFLLEVBQUUwVCxjQUFjLENBQUNsTTtJQUFXLENBQUU7SUFDM0N0RCxZQUFZLEVBQUdDLElBQUksSUFBS3dQLGlCQUFpQixDQUFDO01BQUMsR0FBR0QsY0FBYztNQUFFbE0sV0FBVyxFQUFFckQsSUFBSSxDQUFDRSxNQUFNLENBQUNoQjtJQUFJLENBQUM7RUFBQyxFQUFJLEdBRW5HMUQsZ0RBQUE7SUFBT29ELEdBQUcsRUFBRSxDQUFDO0lBQUVLLEdBQUcsRUFBRSxDQUFDO0lBQUVILEtBQUssRUFBRUMsTUFBTSxDQUFDbEQsS0FBSztJQUFFcUQsSUFBSSxFQUFFd0QsUUFBUSxDQUFDVztFQUFXLEVBQ3ZFLEVBRUQ3SCxnREFBQTtJQUFPb0QsR0FBRyxFQUFFLENBQUM7SUFBRUssR0FBRyxFQUFFLENBQUM7SUFBRUgsS0FBSyxFQUFFQyxNQUFNLENBQUNxUixLQUFLO0lBQUVsUixJQUFJLEVBQUM7RUFBUSxFQUFHLEVBQzNEbVEsU0FBUyxHQUNSN1QsZ0RBQUE7SUFBV29ELEdBQUcsRUFBRSxDQUFDO0lBQUVLLEdBQUcsRUFBRSxDQUFDO0lBQUVILEtBQUssRUFBRUMsTUFBTSxDQUFDYSxLQUFLO0lBQzVDVixJQUFJLEVBQUU7TUFBRXJELEtBQUssRUFBRTBULGNBQWMsQ0FBQ0U7SUFBWSxDQUFFO0lBQzVDMVAsWUFBWSxFQUFHQyxJQUFJLElBQUt3UCxpQkFBaUIsQ0FBQztNQUFDLEdBQUdELGNBQWM7TUFBRUUsWUFBWSxFQUFFelAsSUFBSSxDQUFDRSxNQUFNLENBQUNoQjtJQUFJLENBQUM7RUFBQyxFQUFJLEdBRXBHMUQsZ0RBQUE7SUFBT29ELEdBQUcsRUFBRSxDQUFDO0lBQUVLLEdBQUcsRUFBRSxDQUFDO0lBQUVILEtBQUssRUFBRUMsTUFBTSxDQUFDbEQsS0FBSztJQUFFcUQsSUFBSSxFQUFFd0QsUUFBUSxDQUFDK007RUFBWSxFQUN4RSxFQUVEalUsZ0RBQUE7SUFBT29ELEdBQUcsRUFBRSxDQUFDO0lBQUVLLEdBQUcsRUFBRSxDQUFDO0lBQUVILEtBQUssRUFBRUMsTUFBTSxDQUFDcVIsS0FBSztJQUFFbFIsSUFBSSxFQUFDO0VBQVMsRUFBRyxFQUM1RG1RLFNBQVMsR0FDUjdULGdEQUFBO0lBQVdvRCxHQUFHLEVBQUUsQ0FBQztJQUFFSyxHQUFHLEVBQUUsQ0FBQztJQUFFSCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ2EsS0FBSztJQUM1Q1YsSUFBSSxFQUFFO01BQUVyRCxLQUFLLEVBQUUwVCxjQUFjLENBQUNHO0lBQVEsQ0FBRTtJQUN4QzNQLFlBQVksRUFBR0MsSUFBSSxJQUFLd1AsaUJBQWlCLENBQUM7TUFBQyxHQUFHRCxjQUFjO01BQUVHLFFBQVEsRUFBRTFQLElBQUksQ0FBQ0UsTUFBTSxDQUFDaEI7SUFBSSxDQUFDO0VBQUMsRUFBSSxHQUVoRzFELGdEQUFBO0lBQU9vRCxHQUFHLEVBQUUsQ0FBQztJQUFFSyxHQUFHLEVBQUUsQ0FBQztJQUFFSCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ2xELEtBQUs7SUFBRXFELElBQUksRUFBRXdELFFBQVEsQ0FBQ2dOO0VBQVEsRUFDcEUsRUFFRGxVLGdEQUFBO0lBQU9vRCxHQUFHLEVBQUUsQ0FBQztJQUFFSyxHQUFHLEVBQUUsQ0FBQztJQUFFSCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ3FSLEtBQUs7SUFBRWxSLElBQUksRUFBQztFQUFhLEVBQUcsRUFDakUxRCxnREFBQTtJQUFPb0QsR0FBRyxFQUFFLENBQUM7SUFBRUssR0FBRyxFQUFFLENBQUM7SUFBRUgsS0FBSyxFQUFFQyxNQUFNLENBQUNsRCxLQUFLO0lBQUVxRCxJQUFJLEVBQUV3RCxRQUFRLENBQUN3RTtFQUFTLEVBQUksQ0FDN0QsRUFFWm1JLFNBQVMsR0FDUjdULGdEQUFBO0lBQWE2VSxXQUFXLEVBQUMsWUFBWTtJQUFDdlIsS0FBSyxFQUFFQyxNQUFNLENBQUN1UjtFQUFlLEdBQ2pFOVUsZ0RBQUE7SUFBUXNELEtBQUssRUFBRUMsTUFBTSxDQUFDd1IsVUFBVTtJQUFFclIsSUFBSSxFQUFDLE1BQU07SUFBQ0MsS0FBSyxFQUFFNlE7RUFBVSxFQUFJLEVBQ25FeFUsZ0RBQUE7SUFBUXNELEtBQUssRUFBRUMsTUFBTSxDQUFDeVIsWUFBWTtJQUFFdFIsSUFBSSxFQUFDLFFBQVE7SUFBQ0MsS0FBSyxFQUFFOFE7RUFBWSxFQUFJLENBQzdELEdBRWR6VSxnREFBQTtJQUFRc0QsS0FBSyxFQUFFQyxNQUFNLENBQUMwUixVQUFVO0lBQUV2UixJQUFJLEVBQUMsY0FBYztJQUFDQyxLQUFLLEVBQUU0UTtFQUFVLEVBQ3hFLEVBRUR2VSxnREFBQTtJQUFRc0QsS0FBSyxFQUFFQyxNQUFNLENBQUMyUixZQUFZO0lBQUV4UixJQUFJLEVBQUMsUUFBUTtJQUFDQyxLQUFLLEVBQUUySDtFQUFZLEVBQUksQ0FDN0QsQ0FDSCxFQUNidEwsZ0RBQUEsQ0FBQ2dILHlEQUFhO0lBQUM1RCxHQUFHLEVBQUUsQ0FBQztJQUFFNkosV0FBVyxFQUFDLFNBQVM7SUFBQ3hMLFVBQVUsRUFBRUEsVUFBVTtJQUFFeUYsUUFBUSxFQUFFQTtFQUFRLEVBQUksQ0FDaEY7QUFFakI7QUFBQ3ZGLEVBQUEsQ0EvSWVxUCxhQUFhO0VBQUEsUUFDTzJDLHlEQUFPO0FBQUE7QUFBQXpPLEVBQUEsR0FEM0I4TCxhQUFhO0FBaUo3QixNQUFNek4sTUFBTSxHQUFHaEMsMERBQVUsQ0FBQzRELE1BQU0sQ0FBQztFQUMvQnBCLFNBQVMsRUFBRTtJQUNUc0IsT0FBTyxFQUFFLEVBQUU7SUFDWEQsZUFBZSxFQUFFLFNBQVM7SUFDMUI4SCxhQUFhLEVBQUU7R0FDaEI7RUFDRHBKLFVBQVUsRUFBRTtJQUNWMEIsUUFBUSxFQUFFLEVBQUU7SUFDWkcsVUFBVSxFQUFFLE1BQU07SUFDbEJGLEtBQUssRUFBRSxTQUFTO0lBQ2hCb0IsYUFBYSxFQUFFLFFBQVE7SUFDdkJoQixZQUFZLEVBQUU7R0FDZjtFQUNEN0IsSUFBSSxFQUFFO0lBQ0pvQixlQUFlLEVBQUUsU0FBUztJQUMxQlEsWUFBWSxFQUFFLEVBQUU7SUFDaEJQLE9BQU8sRUFBRSxFQUFFO0lBQ1hRLFlBQVksRUFBRSxFQUFFO0lBQ2hCQyxTQUFTLEVBQUU7R0FDWjtFQUNEOE8sS0FBSyxFQUFFO0lBQ0xwUCxRQUFRLEVBQUUsRUFBRTtJQUNaQyxLQUFLLEVBQUUsU0FBUztJQUNoQjBQLFdBQVcsRUFBRSxFQUFFO0lBQ2Z0UCxZQUFZLEVBQUU7R0FDZjtFQUNEeEYsS0FBSyxFQUFFO0lBQ0xtRixRQUFRLEVBQUUsRUFBRTtJQUNaQyxLQUFLLEVBQUUsU0FBUztJQUNoQkUsVUFBVSxFQUFFLE1BQU07SUFDbEJFLFlBQVksRUFBRTtHQUNmO0VBQ0RxUCxZQUFZLEVBQUU7SUFDWjlQLGVBQWUsRUFBRSxTQUFTO0lBQzFCSyxLQUFLLEVBQUUsU0FBUztJQUNoQkQsUUFBUSxFQUFFLEVBQUU7SUFDWkcsVUFBVSxFQUFFLE1BQU07SUFDbEJDLFlBQVksRUFBRSxDQUFDO0lBQ2ZQLE9BQU8sRUFBRSxFQUFFO0lBQ1hZLFNBQVMsRUFBRTtHQUNaO0VBQ0RtUCxNQUFNLEVBQUU7SUFDTmhRLGVBQWUsRUFBRSxTQUFTO0lBQzFCc0IsTUFBTSxFQUFFLEVBQUU7SUFDVjJMLGNBQWMsRUFBRSxDQUFDO0lBQ2pCQyxjQUFjLEVBQUU7R0FDakI7RUFDRCtDLE9BQU8sRUFBRTtJQUNQalEsZUFBZSxFQUFFLGFBQWE7SUFDOUJLLEtBQUssRUFBRSxTQUFTO0lBQ2hCRCxRQUFRLEVBQUUsRUFBRTtJQUNaa0IsTUFBTSxFQUFFLE1BQU07SUFDZHJCLE9BQU8sRUFBRSxDQUFDO0lBQ1Z3QixhQUFhLEVBQUU7R0FDaEI7RUFDRHlPLGFBQWEsRUFBRTtJQUNiN1AsS0FBSyxFQUFFLFNBQVM7SUFDaEJFLFVBQVUsRUFBRSxNQUFNO0lBQ2xCUCxlQUFlLEVBQUUsU0FBUztJQUFFO0lBQzVCUSxZQUFZLEVBQUUsQ0FBQztJQUNmSSxNQUFNLEVBQUU7R0FDVDtFQUNENUIsS0FBSyxFQUFFO0lBQ0xvQixRQUFRLEVBQUUsRUFBRTtJQUNaQyxLQUFLLEVBQUUsU0FBUztJQUNoQnlKLFdBQVcsRUFBRSxDQUFDO0lBQ2RELFdBQVcsRUFBRSxTQUFTO0lBQ3RCckosWUFBWSxFQUFFLENBQUM7SUFDZlAsT0FBTyxFQUFFO0dBQ1Y7RUFDRDRQLFVBQVUsRUFBRTtJQUNWN1AsZUFBZSxFQUFFLFNBQVM7SUFDMUJLLEtBQUssRUFBRSxTQUFTO0lBQ2hCRCxRQUFRLEVBQUUsRUFBRTtJQUNaRyxVQUFVLEVBQUUsTUFBTTtJQUNsQkMsWUFBWSxFQUFFLENBQUM7SUFDZlAsT0FBTyxFQUFFLEVBQUU7SUFDWFksU0FBUyxFQUFFO0dBQ1o7RUFDRDhPLFVBQVUsRUFBRTtJQUNWM1AsZUFBZSxFQUFFLFNBQVM7SUFDMUJLLEtBQUssRUFBRSxTQUFTO0lBQ2hCRCxRQUFRLEVBQUUsRUFBRTtJQUNaRyxVQUFVLEVBQUUsTUFBTTtJQUNsQkMsWUFBWSxFQUFFLENBQUM7SUFDZlAsT0FBTyxFQUFFLEVBQUU7SUFDWDhQLFdBQVcsRUFBRTtHQUNkO0VBQ0RILFlBQVksRUFBRTtJQUNaNVAsZUFBZSxFQUFFLFNBQVM7SUFDMUJLLEtBQUssRUFBRSxTQUFTO0lBQ2hCRCxRQUFRLEVBQUUsRUFBRTtJQUNaRyxVQUFVLEVBQUUsTUFBTTtJQUNsQkMsWUFBWSxFQUFFLENBQUM7SUFDZlAsT0FBTyxFQUFFO0dBQ1Y7RUFDRHlQLGVBQWUsRUFBRTtJQUNmbk8sY0FBYyxFQUFFLFFBQVE7SUFDeEJWLFNBQVMsRUFBRTs7Q0FFZCxDQUFDO0FBQUMsSUFBQWYsRUFBQTtBQUFBZ0Isc0NBQUEsQ0FBQWhCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblE0QjtBQUNFO0FBQ2U7QUFJVDtBQU1qQyxTQUFVK0wsWUFBWUEsQ0FBQztFQUFFeFA7QUFBVSxDQUFxQjtFQUFBRSxFQUFBO0VBQzVELE1BQU0sQ0FBQzRULFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUdyVCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUM5QyxNQUFNLENBQUNzVCxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHdlQsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDNUMsTUFBTSxDQUFDd1QsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR3pULCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ3RDLE1BQU0sQ0FBQytSLFFBQVEsRUFBRTJCLFdBQVcsQ0FBQyxHQUFHMVQsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDNUMsTUFBTSxDQUFDZ0YsUUFBUSxFQUFFa0ksV0FBVyxDQUFDLEdBQUdsTiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUM1QyxNQUFNLENBQUNpRixRQUFRLEVBQUVrSSxXQUFXLENBQUMsR0FBR25OLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQzVDLE1BQU0sQ0FBQzJULGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBRzVULCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ3hELE1BQU0sQ0FBQzZULFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUc5VCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDbEQsTUFBTSxDQUFDK1QsWUFBWSxFQUFFQyxlQUFlLENBQUMsR0FBR2hVLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ3BELE1BQU0sQ0FBQ3NOLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUd2TiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztFQUVqRCxNQUFNbUcsVUFBVSxHQUFJQyxJQUFVLElBQVk7SUFDeEMsTUFBTTZOLEdBQUcsR0FBR0MsTUFBTSxDQUFDOU4sSUFBSSxDQUFDMkIsT0FBTyxFQUFFLENBQUMsQ0FBQ2EsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDbkQsTUFBTXVMLFVBQVUsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUN4RSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FDakU7SUFDRCxNQUFNQyxLQUFLLEdBQUdELFVBQVUsQ0FBQy9OLElBQUksQ0FBQzBCLFFBQVEsRUFBRSxDQUFDO0lBQ3pDLE1BQU11TSxJQUFJLEdBQUdqTyxJQUFJLENBQUN5QixXQUFXLEVBQUU7SUFDL0IsT0FBTyxHQUFHb00sR0FBRyxJQUFJRyxLQUFLLElBQUlDLElBQUksRUFBRTtFQUNsQyxDQUFDO0VBRUQsTUFBTUMsWUFBWSxHQUFHLE1BQUFBLENBQUEsS0FBVztJQUM5Qi9OLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRCQUE0QixDQUFDO0lBRXpDLElBQUl2QixRQUFRLEtBQUswTyxjQUFjLEVBQUU7TUFDL0JwTixPQUFPLENBQUNDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQztNQUNwRHdOLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQztNQUN6QztJQUNGO0lBRUEsSUFBSSxDQUFDSCxVQUFVLEVBQUU7TUFDZnROLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHdDQUF3QyxDQUFDO01BQ3JEd04sZUFBZSxDQUFDLHlCQUF5QixDQUFDO01BQzFDO0lBQ0Y7SUFFQSxJQUFJLENBQUNqRyxNQUFNLENBQUNELDhCQUE4QixFQUFFO01BQzFDdkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsNkZBQTZGLENBQUM7TUFDMUd3TixlQUFlLENBQUMsOENBQThDLENBQUM7TUFDL0R6RyxZQUFZLENBQUMsS0FBSyxDQUFDO01BQ25CO0lBQ0Y7SUFFQUEsWUFBWSxDQUFDLElBQUksQ0FBQztJQUNsQnlHLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQztJQUN0Q3pOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdDQUFnQyxDQUFDO0lBRTdDLElBQUk7TUFDRixNQUFNa0IsS0FBSyxHQUFHLElBQUlDLElBQUksRUFBRTtNQUN4QixNQUFNNE0sYUFBYSxHQUFHcE8sVUFBVSxDQUFDdUIsS0FBSyxDQUFDO01BQ3ZDbkIsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUNBQWlDK04sYUFBYSxFQUFFLENBQUM7TUFFN0Q7TUFDQSxNQUFNQyxpQkFBaUIsR0FBRztRQUN4QnBCLFNBQVM7UUFDVEUsUUFBUTtRQUNSeEIsWUFBWSxFQUFFMEIsS0FBSztRQUNuQnpCLFFBQVE7UUFDUjBDLFVBQVUsRUFBRSxjQUFjO1FBQzFCQyxNQUFNLEVBQUUsSUFBSTtRQUNaQyxNQUFNLEVBQUUsSUFBSTtRQUNaQyxjQUFjLEVBQUVMLGFBQWE7UUFDN0JNLFFBQVEsRUFBRUMsUUFBUSxDQUFDakIsVUFBVSxFQUFFLEVBQUUsQ0FBQztRQUNsQ2tCLFdBQVcsRUFBRTtPQUNkO01BQ0R4TyxPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRVcsSUFBSSxDQUFDQyxTQUFTLENBQUNvTixpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFFeEZqTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQztNQUNqREQsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUNBQWlDLEVBQUV1SCxNQUFNLENBQUNELDhCQUE4QixDQUFDO01BQ3JGLE1BQU1rSCxjQUFjLEdBQUcsTUFBTWxPLEtBQUssQ0FBQyxHQUFHM0ksK0NBQVUsQ0FBQ0MsUUFBUSxtQ0FBbUMsRUFBRTtRQUM1RjJJLE1BQU0sRUFBRSxNQUFNO1FBQ2RDLE9BQU8sRUFBRTtVQUNQLGNBQWMsRUFBRSxrQkFBa0I7VUFDbEMsZUFBZSxFQUFFLFNBQVMrRyxNQUFNLENBQUNELDhCQUE4QixFQUFFO1VBQ2pFLDRCQUE0QixFQUFFO1NBQy9CO1FBQ0RGLElBQUksRUFBRXpHLElBQUksQ0FBQ0MsU0FBUyxDQUFDb04saUJBQWlCO09BQ3ZDLENBQUM7TUFFRixNQUFNUyxVQUFVLEdBQUcsTUFBTUQsY0FBYyxDQUFDOU4sSUFBSSxFQUFFO01BQzlDWCxPQUFPLENBQUNDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRVcsSUFBSSxDQUFDQyxTQUFTLENBQUM2TixVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO01BRTdFLElBQUlBLFVBQVUsQ0FBQ0MsUUFBUSxFQUFFO1FBQ3ZCM08sT0FBTyxDQUFDQyxHQUFHLENBQUMsMkNBQTJDeU8sVUFBVSxDQUFDQyxRQUFRLEVBQUUsQ0FBQztRQUU3RTtRQUNBLE1BQU1DLGVBQWUsR0FBRztVQUN0Qm5RLFFBQVE7VUFDUm9PLFNBQVM7VUFDVEUsUUFBUTtVQUNSRSxLQUFLO1VBQ0xxQixRQUFRLEVBQUVDLFFBQVEsQ0FBQ2pCLFVBQVUsRUFBRSxFQUFFLENBQUM7VUFDbEN1QixvQkFBb0IsRUFBRSxJQUFJO1VBQzFCblEsUUFBUTtVQUNSME8sY0FBYztVQUNkMEIsaUJBQWlCLEVBQUUsSUFBSTtVQUN2QkMsT0FBTyxFQUFFLENBQUNMLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDO1VBQzlCSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1VBQ2JDLG1CQUFtQixFQUFFLEtBQUs7VUFDMUJDLE9BQU8sRUFBRTtTQUNWO1FBQ0RsUCxPQUFPLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRVcsSUFBSSxDQUFDQyxTQUFTLENBQUMrTixlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXBGNU8sT0FBTyxDQUFDQyxHQUFHLENBQUMsa0NBQWtDLENBQUM7UUFDL0MsTUFBTWtQLFlBQVksR0FBRyxNQUFNNU8sS0FBSyxDQUFDLEdBQUczSSwrQ0FBVSxDQUFDQyxRQUFRLGlDQUFpQyxFQUFFO1VBQ3hGMkksTUFBTSxFQUFFLE1BQU07VUFDZEMsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxlQUFlLEVBQUUsU0FBUytHLE1BQU0sQ0FBQ0QsOEJBQThCLEVBQUU7WUFDakUsNEJBQTRCLEVBQUU7V0FDL0I7VUFDREYsSUFBSSxFQUFFekcsSUFBSSxDQUFDQyxTQUFTLENBQUMrTixlQUFlO1NBQ3JDLENBQUM7UUFFRixNQUFNcFEsUUFBUSxHQUFHLE1BQU0yUSxZQUFZLENBQUN4TyxJQUFJLEVBQUU7UUFDMUNYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixFQUFFVyxJQUFJLENBQUNDLFNBQVMsQ0FBQ3JDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFekUsSUFBSUEsUUFBUSxDQUFDNFEsVUFBVSxFQUFFO1VBQ3ZCcFAsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUNBQXVDekIsUUFBUSxDQUFDNFEsVUFBVSxFQUFFLENBQUM7VUFFekU7VUFDQSxNQUFNQyx5QkFBeUIsR0FBRztZQUNoQ1YsUUFBUSxFQUFFRCxVQUFVLENBQUNDLFFBQVE7WUFDN0JULFVBQVUsRUFBRSxjQUFjO1lBQzFCb0IsVUFBVSxFQUFFLEdBQUdaLFVBQVUsQ0FBQ0MsUUFBUSxJQUFJdk4sSUFBSSxDQUFDbU8sR0FBRyxFQUFFLEVBQUU7WUFDbERwQixNQUFNLEVBQUUsSUFBSTtZQUNacUIsU0FBUyxFQUFFLENBQUM7WUFDWkMsZUFBZSxFQUFFN1AsVUFBVSxDQUFDLElBQUl3QixJQUFJLEVBQUU7V0FDdkM7VUFDRHBCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHdDQUF3QyxFQUFFVyxJQUFJLENBQUNDLFNBQVMsQ0FBQ3dPLHlCQUF5QixFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztVQUV6R3JQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZDQUE2QyxDQUFDO1VBQzFELE1BQU15UCxzQkFBc0IsR0FBRyxNQUFNblAsS0FBSyxDQUFDLEdBQUczSSwrQ0FBVSxDQUFDQyxRQUFRLDJDQUEyQyxFQUFFO1lBQzVHMkksTUFBTSxFQUFFLE1BQU07WUFDZEMsT0FBTyxFQUFFO2NBQ1AsY0FBYyxFQUFFLGtCQUFrQjtjQUNsQyxlQUFlLEVBQUUsU0FBUytHLE1BQU0sQ0FBQ0QsOEJBQThCLEVBQUU7Y0FDakUsNEJBQTRCLEVBQUU7YUFDL0I7WUFDREYsSUFBSSxFQUFFekcsSUFBSSxDQUFDQyxTQUFTLENBQUN3Tyx5QkFBeUI7V0FDL0MsQ0FBQztVQUVGLE1BQU1NLGtCQUFrQixHQUFHLE1BQU1ELHNCQUFzQixDQUFDL08sSUFBSSxFQUFFO1VBQzlEWCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRVcsSUFBSSxDQUFDQyxTQUFTLENBQUM4TyxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7VUFFOUYsSUFBSUEsa0JBQWtCLENBQUNDLFNBQVMsRUFBRTtZQUNoQzVQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZEQUE2RDBQLGtCQUFrQixDQUFDQyxTQUFTLEVBQUUsQ0FBQztZQUV4RztZQUNBLE1BQU1DLGtCQUFrQixHQUFHO2NBQ3pCMUIsTUFBTSxFQUFFLElBQUk7Y0FDWkQsVUFBVSxFQUFFLGNBQWM7Y0FDMUI0QixjQUFjLEVBQUU5QjthQUNqQjtZQUNEaE8sT0FBTyxDQUFDQyxHQUFHLENBQUMsOEJBQThCLENBQUM7WUFDM0MsTUFBTThQLGVBQWUsR0FBRyxNQUFNeFAsS0FBSyxDQUFDLEdBQUczSSwrQ0FBVSxDQUFDQyxRQUFRLDZDQUE2QzhYLGtCQUFrQixDQUFDQyxTQUFTLGtCQUFrQixFQUFFO2NBQ3JKcFAsTUFBTSxFQUFFLE1BQU07Y0FDZEMsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLGVBQWUsRUFBRSxTQUFTK0csTUFBTSxDQUFDRCw4QkFBOEIsRUFBRTtnQkFDakUsNEJBQTRCLEVBQUU7ZUFDL0I7Y0FDREYsSUFBSSxFQUFFekcsSUFBSSxDQUFDQyxTQUFTLENBQUNnUCxrQkFBa0I7YUFDeEMsQ0FBQztZQUVGLE1BQU1HLFdBQVcsR0FBRyxNQUFNRCxlQUFlLENBQUNwUCxJQUFJLEVBQUU7WUFDaERYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9DQUFvQyxFQUFFVyxJQUFJLENBQUNDLFNBQVMsQ0FBQ21QLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFdkYsSUFBSUEsV0FBVyxDQUFDQyxPQUFPLElBQUlELFdBQVcsQ0FBQ0MsT0FBTyxDQUFDaEcsTUFBTSxDQUFDaUcsUUFBUSxFQUFFO2NBQzlEbFEsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0NBQXdDLENBQUM7Y0FFckQ7Y0FDQSxNQUFNa1EsbUJBQW1CLEdBQUc7Z0JBQzFCaEMsTUFBTSxFQUFFLElBQUk7Z0JBQ1pELFVBQVUsRUFBRSxjQUFjO2dCQUMxQmtDLGVBQWUsRUFBRXBDO2VBQ2xCO2NBQ0RoTyxPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztjQUM1QyxNQUFNb1EsZ0JBQWdCLEdBQUcsTUFBTTlQLEtBQUssQ0FBQyxHQUFHM0ksK0NBQVUsQ0FBQ0MsUUFBUSw2Q0FBNkM4WCxrQkFBa0IsQ0FBQ0MsU0FBUyxtQkFBbUIsRUFBRTtnQkFDdkpwUCxNQUFNLEVBQUUsTUFBTTtnQkFDZEMsT0FBTyxFQUFFO2tCQUNQLGNBQWMsRUFBRSxrQkFBa0I7a0JBQ2xDLGVBQWUsRUFBRSxTQUFTK0csTUFBTSxDQUFDRCw4QkFBOEIsRUFBRTtrQkFDakUsNEJBQTRCLEVBQUU7aUJBQy9CO2dCQUNERixJQUFJLEVBQUV6RyxJQUFJLENBQUNDLFNBQVMsQ0FBQ3NQLG1CQUFtQjtlQUN6QyxDQUFDO2NBRUYsTUFBTUcsWUFBWSxHQUFHLE1BQU1ELGdCQUFnQixDQUFDMVAsSUFBSSxFQUFFO2NBQ2xEWCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQ0FBc0MsRUFBRVcsSUFBSSxDQUFDQyxTQUFTLENBQUN5UCxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2NBRTFGLElBQUlBLFlBQVksQ0FBQ0wsT0FBTyxJQUFJSyxZQUFZLENBQUNMLE9BQU8sQ0FBQ2hHLE1BQU0sQ0FBQ21FLE1BQU0sRUFBRTtnQkFDOURwTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQztnQkFDdER3TixlQUFlLENBQUMsbUJBQW1CLENBQUM7Z0JBQ3BDek4sT0FBTyxDQUFDQyxHQUFHLENBQUMsdUNBQXVDLENBQUM7Z0JBQ3BEbEgsVUFBVSxDQUFDd0IsUUFBUSxDQUFDLGVBQWUsRUFBRTtrQkFDbkNvVSxRQUFRLEVBQUVELFVBQVUsQ0FBQ0MsUUFBUTtrQkFDN0JsUSxRQUFRO2tCQUNSQyxRQUFRO2tCQUNSNlIsZ0JBQWdCLEVBQUVaLGtCQUFrQixDQUFDQyxTQUFTO2tCQUM5Q1ksYUFBYSxFQUFFO2lCQUNoQixDQUFDO2NBQ0osQ0FBQyxNQUFNO2dCQUNMeFEsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0NBQW9DLENBQUM7Z0JBQ2pEd04sZUFBZSxDQUFDLG9DQUFvQyxDQUFDO2NBQ3ZEO1lBQ0YsQ0FBQyxNQUFNO2NBQ0x6TixPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQztjQUMvQ3dOLGVBQWUsQ0FBQyxrQ0FBa0MsQ0FBQztZQUNyRDtVQUNGLENBQUMsTUFBTTtZQUNMek4sT0FBTyxDQUFDQyxHQUFHLENBQUMsa0NBQWtDLEVBQUUwUCxrQkFBa0IsQ0FBQ2MsTUFBTSxHQUFHZCxrQkFBa0IsQ0FBQ2MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxrQkFBa0IsR0FBRyxlQUFlLENBQUM7WUFDOUlqRCxlQUFlLENBQUMsbUNBQW1DLElBQUlrQyxrQkFBa0IsQ0FBQ2MsTUFBTSxHQUFHZCxrQkFBa0IsQ0FBQ2MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxrQkFBa0IsR0FBRyxlQUFlLENBQUMsQ0FBQztVQUN4SjtRQUNGLENBQUMsTUFBTTtVQUNMMVEsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLEVBQUV6QixRQUFRLENBQUNpUyxNQUFNLEdBQUdqUyxRQUFRLENBQUNpUyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLGtCQUFrQixHQUFHLGVBQWUsQ0FBQztVQUMvR2pELGVBQWUsQ0FBQyx3QkFBd0IsSUFBSWpQLFFBQVEsQ0FBQ2lTLE1BQU0sR0FBR2pTLFFBQVEsQ0FBQ2lTLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0Msa0JBQWtCLEdBQUcsZUFBZSxDQUFDLENBQUM7UUFDekg7TUFDRixDQUFDLE1BQU07UUFDTDFRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixFQUFFeU8sVUFBVSxDQUFDK0IsTUFBTSxHQUFHL0IsVUFBVSxDQUFDK0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxrQkFBa0IsR0FBRyxlQUFlLENBQUM7UUFDckhqRCxlQUFlLENBQUMsMEJBQTBCLElBQUlpQixVQUFVLENBQUMrQixNQUFNLEdBQUcvQixVQUFVLENBQUMrQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLGtCQUFrQixHQUFHLGVBQWUsQ0FBQyxDQUFDO1FBQzdIMUosWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNuQjtNQUNGO0lBQ0YsQ0FBQyxDQUFDLE9BQU8vRixLQUFLLEVBQUU7TUFDZGpCLE9BQU8sQ0FBQ2lCLEtBQUssQ0FBQyx1QkFBdUIsRUFBRUEsS0FBSyxDQUFDO01BQzdDd00sZUFBZSxDQUFDLGlCQUFpQixJQUFJeE0sS0FBSyxZQUFZaUosS0FBSyxHQUFHakosS0FBSyxDQUFDckQsT0FBTyxHQUFHK1AsTUFBTSxDQUFDMU0sS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDLFNBQVM7TUFDUitGLFlBQVksQ0FBQyxLQUFLLENBQUM7TUFDbkJoSCxPQUFPLENBQUNDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQztJQUMxQztFQUNGLENBQUM7RUFFRCxPQUNFM0ksZ0RBQUEscUJBQ0VBLGdEQUFBO0lBQWVzRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ1E7RUFBUyxHQUNwQy9ELGdEQUFBO0lBQWFzRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ2tIO0VBQU8sR0FDaEN6SyxnREFBQTtJQUFPZ08sU0FBUyxFQUFDLGdEQUFnRDtJQUFDdEssSUFBSSxFQUFDO0VBQVMsRUFBRyxFQUNuRjFELGdEQUFBO0lBQ0VzRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ2EsS0FBSztJQUNuQkUsSUFBSSxFQUFDLFlBQVk7SUFDakJaLElBQUksRUFBRTZSLFNBQVM7SUFDZmhSLFlBQVksRUFBR0MsSUFBSSxJQUFLZ1IsWUFBWSxDQUFDaFIsSUFBSSxDQUFDRSxNQUFNLENBQUNoQixJQUFJO0VBQUMsRUFDdEQsRUFDRjFELGdEQUFBO0lBQ0VzRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ2EsS0FBSztJQUNuQkUsSUFBSSxFQUFDLFdBQVc7SUFDaEJaLElBQUksRUFBRStSLFFBQVE7SUFDZGxSLFlBQVksRUFBR0MsSUFBSSxJQUFLa1IsV0FBVyxDQUFDbFIsSUFBSSxDQUFDRSxNQUFNLENBQUNoQixJQUFJO0VBQUMsRUFDckQsRUFDRjFELGdEQUFBO0lBQ0VzRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ2EsS0FBSztJQUNuQkUsSUFBSSxFQUFDLE9BQU87SUFDWlosSUFBSSxFQUFFaVMsS0FBSztJQUNYdFIsWUFBWSxFQUFDLE9BQU87SUFDcEJFLFlBQVksRUFBR0MsSUFBSSxJQUFLb1IsUUFBUSxDQUFDcFIsSUFBSSxDQUFDRSxNQUFNLENBQUNoQixJQUFJO0VBQUMsRUFDbEQsRUFDRjFELGdEQUFBO0lBQ0VzRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ2EsS0FBSztJQUNuQkUsSUFBSSxFQUFDLGVBQWU7SUFDcEJaLElBQUksRUFBRXdRLFFBQVE7SUFDZDdQLFlBQVksRUFBQyxPQUFPO0lBQ3BCRSxZQUFZLEVBQUdDLElBQUksSUFBS3FSLFdBQVcsQ0FBQ3JSLElBQUksQ0FBQ0UsTUFBTSxDQUFDaEIsSUFBSTtFQUFDLEVBQ3JELEVBQ0YxRCxnREFBQTtJQUNFc0QsS0FBSyxFQUFFQyxNQUFNLENBQUNhLEtBQUs7SUFDbkJFLElBQUksRUFBQyxhQUFhO0lBQ2xCWixJQUFJLEVBQUVzUyxVQUFVO0lBQ2hCM1IsWUFBWSxFQUFDLFFBQVE7SUFDckJFLFlBQVksRUFBR0MsSUFBSSxJQUFLeVIsYUFBYSxDQUFDelIsSUFBSSxDQUFDRSxNQUFNLENBQUNoQixJQUFJO0VBQUMsRUFDdkQsRUFDRjFELGdEQUFBO0lBQ0VzRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ2EsS0FBSztJQUNuQkUsSUFBSSxFQUFDLFVBQVU7SUFDZlosSUFBSSxFQUFFeUQsUUFBUTtJQUNkNUMsWUFBWSxFQUFHQyxJQUFJLElBQUs2SyxXQUFXLENBQUM3SyxJQUFJLENBQUNFLE1BQU0sQ0FBQ2hCLElBQUk7RUFBQyxFQUNyRCxFQUNGMUQsZ0RBQUE7SUFDRXNELEtBQUssRUFBRUMsTUFBTSxDQUFDYSxLQUFLO0lBQ25CRSxJQUFJLEVBQUMsVUFBVTtJQUNmWixJQUFJLEVBQUUwRCxRQUFRO0lBQ2RtSixNQUFNLEVBQUUsSUFBSTtJQUNaaE0sWUFBWSxFQUFHQyxJQUFJLElBQUs4SyxXQUFXLENBQUM5SyxJQUFJLENBQUNFLE1BQU0sQ0FBQ2hCLElBQUk7RUFBQyxFQUNyRCxFQUNGMUQsZ0RBQUE7SUFDRXNELEtBQUssRUFBRUMsTUFBTSxDQUFDYSxLQUFLO0lBQ25CRSxJQUFJLEVBQUMsaUJBQWlCO0lBQ3RCWixJQUFJLEVBQUVvUyxjQUFjO0lBQ3BCdkYsTUFBTSxFQUFFLElBQUk7SUFDWmhNLFlBQVksRUFBR0MsSUFBSSxJQUFLdVIsaUJBQWlCLENBQUN2UixJQUFJLENBQUNFLE1BQU0sQ0FBQ2hCLElBQUk7RUFBQyxFQUMzRCxFQUNGMUQsZ0RBQUE7SUFDRXNELEtBQUssRUFBRUMsTUFBTSxDQUFDa0QsTUFBTTtJQUNwQi9DLElBQUksRUFBRStMLFNBQVMsR0FBRyxxQkFBcUIsR0FBRyxTQUFTO0lBQ25EOUwsS0FBSyxFQUFFOFMsWUFBWTtJQUNuQmpHLFNBQVMsRUFBRSxDQUFDZjtFQUFTLEVBQ3JCLEVBQ0Z6UCxnREFBQTtJQUNFc0QsS0FBSyxFQUFFQyxNQUFNLENBQUNNLFVBQVU7SUFDeEJILElBQUksRUFBQyxlQUFlO0lBQ3BCQyxLQUFLLEVBQUVBLENBQUEsS0FBTWxDLFVBQVUsQ0FBQ3dCLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDekN1TixTQUFTLEVBQUUsQ0FBQ2Y7RUFBUyxFQUNyQixFQUNGelAsZ0RBQUE7SUFDRXNELEtBQUssRUFBRSxDQUNMQyxNQUFNLENBQUNtTixXQUFXLEVBQ2xCO01BQUVqTCxLQUFLLEVBQUV5USxZQUFZLENBQUN2RixRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsU0FBUyxHQUFHO0lBQVMsQ0FBRSxDQUN2RTtJQUNEak4sSUFBSSxFQUFFd1M7RUFBWSxFQUNsQixDQUNVLENBQ0EsQ0FDTDtBQUVqQjtBQUFDdlUsRUFBQSxDQTNUZXNQLFlBQVk7QUFBQS9MLEVBQUEsR0FBWitMLFlBQVk7QUE2VDVCLE1BQU0xTixNQUFNLEdBQUdoQywwREFBVSxDQUFDNEQsTUFBTSxDQUFDO0VBQy9CcEIsU0FBUyxFQUFFO0lBQ1QyQyxNQUFNLEVBQUUsTUFBTTtJQUNka0ssYUFBYSxFQUFFLFFBQVE7SUFDdkJqSyxjQUFjLEVBQUUsUUFBUTtJQUN4QnZCLGVBQWUsRUFBRTtHQUNsQjtFQUNEcUYsT0FBTyxFQUFFO0lBQ1AvRSxLQUFLLEVBQUUsS0FBSztJQUNabUwsU0FBUyxFQUFFO0dBQ1o7RUFDRHpNLEtBQUssRUFBRTtJQUNMb0IsUUFBUSxFQUFFLEVBQUU7SUFDWkMsS0FBSyxFQUFFLFNBQVM7SUFDaEJMLGVBQWUsRUFBRSxTQUFTO0lBQzFCUSxZQUFZLEVBQUUsQ0FBQztJQUNmQyxZQUFZLEVBQUUsRUFBRTtJQUNoQlIsT0FBTyxFQUFFO0dBQ1Y7RUFDRG9CLE1BQU0sRUFBRTtJQUNOakIsUUFBUSxFQUFFLEVBQUU7SUFDWkMsS0FBSyxFQUFFLFNBQVM7SUFDaEJMLGVBQWUsRUFBRSxTQUFTO0lBQzFCUSxZQUFZLEVBQUUsQ0FBQztJQUNmUCxPQUFPLEVBQUUsRUFBRTtJQUNYUSxZQUFZLEVBQUU7R0FDZjtFQUNEaEMsVUFBVSxFQUFFO0lBQ1YyQixRQUFRLEVBQUUsRUFBRTtJQUNaQyxLQUFLLEVBQUUsU0FBUztJQUNoQkwsZUFBZSxFQUFFLFNBQVM7SUFDMUJRLFlBQVksRUFBRSxDQUFDO0lBQ2ZQLE9BQU8sRUFBRSxFQUFFO0lBQ1hRLFlBQVksRUFBRTtHQUNmO0VBQ0Q2SyxXQUFXLEVBQUU7SUFDWGxMLFFBQVEsRUFBRSxFQUFFO0lBQ1pxQixhQUFhLEVBQUU7O0NBRWxCLENBQUM7QUFBQyxJQUFBM0IsRUFBQTtBQUFBZ0Isc0NBQUEsQ0FBQWhCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hYNEI7QUFDaUI7QUFVMUMsU0FBVWdNLG1CQUFtQkEsQ0FBQztFQUFFelAsVUFBVTtFQUFFQztBQUFLLENBQTRCO0VBQ2pGLE1BQU07SUFBRTJWLFFBQVE7SUFBRWxRLFFBQVE7SUFBRUMsUUFBUTtJQUFFNlIsZ0JBQWdCO0lBQUVDO0VBQWEsQ0FBRSxHQUFHeFgsS0FBSyxDQUFDTSxNQUFNO0VBRXRGLE9BQ0VoQyxnREFBQTtJQUFhc0QsS0FBSyxFQUFFQyxNQUFNLENBQUNRO0VBQVMsR0FDbEMvRCxnREFBQTtJQUFPZ08sU0FBUyxFQUFDLGdEQUFnRDtJQUFDdEssSUFBSSxFQUFDO0VBQW1CLEVBQUcsRUFDN0YxRCxnREFBQTtJQUFPc0QsS0FBSyxFQUFFQyxNQUFNLENBQUM4VixTQUFTO0lBQUUzVixJQUFJLEVBQUUsY0FBYzJULFFBQVE7RUFBRSxFQUFJLEVBQ2xFclgsZ0RBQUE7SUFBT3NELEtBQUssRUFBRUMsTUFBTSxDQUFDOFYsU0FBUztJQUFFM1YsSUFBSSxFQUFFLGFBQWF5RCxRQUFRO0VBQUUsRUFBSSxFQUNqRW5ILGdEQUFBO0lBQU9zRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQzhWLFNBQVM7SUFBRTNWLElBQUksRUFBRSxhQUFhMEQsUUFBUTtFQUFFLEVBQUksRUFDakVwSCxnREFBQTtJQUFPc0QsS0FBSyxFQUFFQyxNQUFNLENBQUM4VixTQUFTO0lBQUUzVixJQUFJLEVBQUUsdUJBQXVCdVYsZ0JBQWdCO0VBQUUsRUFBSSxFQUNuRmpaLGdEQUFBO0lBQU9zRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQzhWLFNBQVM7SUFBRTNWLElBQUksRUFBRSxtQkFBbUJ3VixhQUFhLEdBQUcsS0FBSyxHQUFHLElBQUk7RUFBRSxFQUFJLEVBQzNGbFosZ0RBQUE7SUFDRXNELEtBQUssRUFBRUMsTUFBTSxDQUFDa0QsTUFBTTtJQUNwQi9DLElBQUksRUFBQyxhQUFhO0lBQ2xCQyxLQUFLLEVBQUVBLENBQUEsS0FBTWxDLFVBQVUsQ0FBQ3dCLFFBQVEsQ0FBQyxPQUFPO0VBQUMsRUFDekMsQ0FDVTtBQUVsQjtBQUFDaUMsRUFBQSxHQWxCZWdNLG1CQUFtQjtBQW9CbkMsTUFBTTNOLE1BQU0sR0FBR2hDLDBEQUFVLENBQUM0RCxNQUFNLENBQUM7RUFDL0JwQixTQUFTLEVBQUU7SUFDVDJDLE1BQU0sRUFBRSxNQUFNO0lBQ2RrSyxhQUFhLEVBQUUsUUFBUTtJQUN2QmpLLGNBQWMsRUFBRSxRQUFRO0lBQ3hCQyxVQUFVLEVBQUUsUUFBUTtJQUNwQnhCLGVBQWUsRUFBRTtHQUNsQjtFQUNEaVUsU0FBUyxFQUFFO0lBQ1Q3VCxRQUFRLEVBQUUsRUFBRTtJQUNaQyxLQUFLLEVBQUUsU0FBUztJQUNoQkksWUFBWSxFQUFFO0dBQ2Y7RUFDRFksTUFBTSxFQUFFO0lBQ05qQixRQUFRLEVBQUUsRUFBRTtJQUNaQyxLQUFLLEVBQUUsU0FBUztJQUNoQkwsZUFBZSxFQUFFLFNBQVM7SUFDMUJRLFlBQVksRUFBRSxDQUFDO0lBQ2ZQLE9BQU8sRUFBRSxFQUFFO0lBQ1hZLFNBQVMsRUFBRTs7Q0FFZCxDQUFDO0FBQUMsSUFBQWYsRUFBQTtBQUFBZ0Isc0NBQUEsQ0FBQWhCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRDRCO0FBQ2lCO0FBUzFDLFNBQVVpTSxjQUFjQSxDQUFDO0VBQUUxUDtBQUFVLENBQXVCO0VBQUFFLEVBQUE7RUFDaEUsTUFBTSxDQUFDTSxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHbEMsMkNBQWMsQ0FBQyxFQUFFLENBQUM7RUFDOUMsTUFBTSxDQUFDc1osZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHdlosMkNBQWMsQ0FBb0IsUUFBUSxDQUFDO0VBQ3pGLE1BQU0sQ0FBQ3lMLGFBQWEsRUFBRStOLGdCQUFnQixDQUFDLEdBQUd4WiwyQ0FBYyxDQUFDLEVBQUUsQ0FBQztFQUM1RCxNQUFNLENBQUN5WixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHMVosMkNBQWMsQ0FBQyxFQUFFLENBQUM7RUFDbEQsTUFBTSxDQUFDMlosV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBRzVaLDJDQUFjLENBQUMsRUFBRSxDQUFDO0VBQ3hELE1BQU0sQ0FBQzZaLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUc5WiwyQ0FBYyxDQUFDLEVBQUUsQ0FBQztFQUN0RCxNQUFNLENBQUMwQyxpQkFBaUIsRUFBRUMsb0JBQW9CLENBQUMsR0FBRzNDLDJDQUFjLENBQUMsRUFBRSxDQUFDO0VBRXBFLE1BQU00QyxjQUFjLEdBQUl2QyxLQUFhLElBQUk7SUFDdkMsTUFBTXdDLFFBQVEsR0FBR0MsVUFBVSxDQUFDekMsS0FBSyxDQUFDO0lBQ2xDLElBQUkwQyxLQUFLLENBQUNGLFFBQVEsQ0FBQyxFQUFFO01BQ25CRixvQkFBb0IsQ0FBQyw2QkFBNkIsQ0FBQztNQUNuRCxPQUFPLEtBQUs7SUFDZDtJQUNBLElBQUlFLFFBQVEsR0FBRyxHQUFHLEVBQUU7TUFDbEJGLG9CQUFvQixDQUFDLHNDQUFzQyxDQUFDO01BQzVELE9BQU8sS0FBSztJQUNkO0lBQ0EsSUFBSUUsUUFBUSxHQUFHLE1BQU0sRUFBRTtNQUNyQkYsb0JBQW9CLENBQUMsMENBQTBDLENBQUM7TUFDaEUsT0FBTyxLQUFLO0lBQ2Q7SUFDQUEsb0JBQW9CLENBQUMsRUFBRSxDQUFDO0lBQ3hCLE9BQU8sSUFBSTtFQUNiLENBQUM7RUFFRCxNQUFNb1gsbUJBQW1CLEdBQUdBLENBQUEsS0FBSztJQUMvQixJQUFJVCxlQUFlLEtBQUssTUFBTSxFQUFFO01BQzlCLElBQUksQ0FBQ0csUUFBUSxFQUFFO1FBQ2I5VyxvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQztRQUM5QyxPQUFPLEtBQUs7TUFDZDtNQUNBLElBQUksQ0FBQ2dYLFdBQVcsRUFBRTtRQUNoQmhYLG9CQUFvQixDQUFDLDJCQUEyQixDQUFDO1FBQ2pELE9BQU8sS0FBSztNQUNkO01BQ0EsSUFBSSxDQUFDOEksYUFBYSxJQUFJQSxhQUFhLENBQUNoQyxNQUFNLEdBQUcsRUFBRSxFQUFFO1FBQy9DOUcsb0JBQW9CLENBQUMscUNBQXFDLENBQUM7UUFDM0QsT0FBTyxLQUFLO01BQ2Q7TUFDQSxJQUFJLENBQUNrWCxVQUFVLEVBQUU7UUFDZmxYLG9CQUFvQixDQUFDLDBCQUEwQixDQUFDO1FBQ2hELE9BQU8sS0FBSztNQUNkO0lBQ0YsQ0FBQyxNQUFNO01BQ0wsSUFBSSxDQUFDOEksYUFBYSxJQUFJQSxhQUFhLENBQUNoQyxNQUFNLEtBQUssRUFBRSxFQUFFO1FBQ2pEOUcsb0JBQW9CLENBQUMsb0NBQW9DLENBQUM7UUFDMUQsT0FBTyxLQUFLO01BQ2Q7SUFDRjtJQUNBLE9BQU8sSUFBSTtFQUNiLENBQUM7RUFFRCxNQUFNSyxhQUFhLEdBQUdBLENBQUEsS0FBSztJQUN6QixJQUFJLENBQUNKLGNBQWMsQ0FBQ1gsTUFBTSxDQUFDLEVBQUU7SUFDN0IsSUFBSSxDQUFDOFgsbUJBQW1CLEVBQUUsRUFBRTtJQUU1QnRZLFVBQVUsQ0FBQ3dCLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtNQUNyQ2hCLE1BQU0sRUFBRSxPQUFPQSxNQUFNLEVBQUU7TUFDdkIrWCxXQUFXLEVBQUVWLGVBQWUsS0FBSyxRQUFRLEdBQUcsY0FBYyxHQUFHLGNBQWM7TUFDM0U3TixhQUFhLEVBQUU2TixlQUFlLEtBQUssUUFBUSxHQUN6QzdOLGFBQWEsR0FDYixHQUFHZ08sUUFBUSxNQUFNaE8sYUFBYSxFQUFFO01BQ2xDd08sU0FBUyxFQUFFLEtBQUtDLElBQUksQ0FBQ0MsTUFBTSxFQUFFLENBQUNyUCxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUNzUCxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLEVBQUUsRUFBRTtNQUN2RUMsYUFBYSxFQUFFaEIsZUFBZSxLQUFLLFFBQVEsR0FBRyxTQUFTLEdBQUcsbUJBQW1CO01BQzdFLElBQUlBLGVBQWUsS0FBSyxNQUFNLElBQUk7UUFDaENHLFFBQVE7UUFDUkUsV0FBVztRQUNYRTtPQUNEO0tBQ0YsQ0FBQztFQUNKLENBQUM7RUFFRCxPQUNFN1osZ0RBQUE7SUFBWW1ELElBQUksRUFBQztFQUFlLEdBQzlCbkQsZ0RBQUE7SUFBWW9ELEdBQUcsRUFBRSxDQUFDO0lBQUVDLE9BQU8sRUFBQyxTQUFTO0lBQUNDLEtBQUssRUFBRUMsTUFBTSxDQUFDQztFQUFNLEdBQ3hEeEQsZ0RBQUE7SUFBUXlELEdBQUcsRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBQyxRQUFHO0lBQUNDLEtBQUssRUFBRUEsQ0FBQSxLQUFNbEMsVUFBVSxDQUFDbUMsTUFBTSxFQUFFO0lBQUVOLEtBQUssRUFBRUMsTUFBTSxDQUFDTTtFQUFVLEVBQUksRUFDdkY3RCxnREFBQTtJQUFPeUQsR0FBRyxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFDLGdCQUFnQjtJQUFDSixLQUFLLEVBQUVDLE1BQU0sQ0FBQ087RUFBVSxFQUFJLENBQ3RELEVBRWI5RCxnREFBQTtJQUFZb0QsR0FBRyxFQUFFO0VBQUMsR0FDaEJwRCxnREFBQTtJQUFhc0QsS0FBSyxFQUFFQyxNQUFNLENBQUNRO0VBQVMsR0FFbEMvRCxnREFBQTtJQUFZc0QsS0FBSyxFQUFFQyxNQUFNLENBQUNTLElBQUk7SUFBRWIsSUFBSSxFQUFDLGtCQUFrQjtJQUFDRSxPQUFPLEVBQUM7RUFBRyxHQUNqRXJELGdEQUFBO0lBQU9vRCxHQUFHLEVBQUUsQ0FBQztJQUFFRSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ1csWUFBWTtJQUFFUixJQUFJLEVBQUM7RUFBb0IsRUFBRyxFQUN2RTFELGdEQUFBO0lBQ0VvRCxHQUFHLEVBQUUsQ0FBQztJQUNORSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ2EsS0FBSztJQUNuQkMsWUFBWSxFQUFDLFFBQVE7SUFDckJDLElBQUksRUFBQyxjQUFjO0lBQ25CWixJQUFJLEVBQUV6QixNQUFNO0lBQ1pzQyxZQUFZLEVBQUdDLElBQUksSUFBSTtNQUNyQixNQUFNQyxTQUFTLEdBQUdELElBQUksQ0FBQ0UsTUFBTSxDQUFDaEIsSUFBSTtNQUNsQ3hCLFNBQVMsQ0FBQ3VDLFNBQVMsQ0FBQztNQUNwQjdCLGNBQWMsQ0FBQzZCLFNBQVMsQ0FBQztJQUMzQjtFQUFDLEVBQ0QsRUFDRC9CLGlCQUFpQixHQUNoQjFDLGdEQUFBO0lBQU9vRCxHQUFHLEVBQUUsQ0FBQztJQUFFRSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ2IsaUJBQWlCO0lBQUVnQixJQUFJLEVBQUVoQjtFQUFpQixFQUFJLEdBQ3pFLElBQUksQ0FDRyxFQUdiMUMsZ0RBQUE7SUFBWXNELEtBQUssRUFBRUMsTUFBTSxDQUFDUyxJQUFJO0lBQUViLElBQUksRUFBQyxZQUFZO0lBQUNFLE9BQU8sRUFBQztFQUFHLEdBQzNEckQsZ0RBQUE7SUFBT29ELEdBQUcsRUFBRSxDQUFDO0lBQUVFLEtBQUssRUFBRUMsTUFBTSxDQUFDVyxZQUFZO0lBQUVSLElBQUksRUFBQztFQUFhLEVBQUcsRUFDaEUxRCxnREFBQTtJQUFZb0QsR0FBRyxFQUFFLENBQUM7SUFBRUMsT0FBTyxFQUFDLE1BQU07SUFBQ0MsS0FBSyxFQUFFQyxNQUFNLENBQUNnWDtFQUFvQixHQUNuRXZhLGdEQUFBO0lBQ0V5RCxHQUFHLEVBQUUsQ0FBQztJQUNOSCxLQUFLLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDaVgsaUJBQWlCLEVBQUVsQixlQUFlLEtBQUssUUFBUSxJQUFJL1YsTUFBTSxDQUFDa1gsaUJBQWlCLENBQUM7SUFDM0YvVyxJQUFJLEVBQUMsY0FBYztJQUNuQkMsS0FBSyxFQUFFQSxDQUFBLEtBQU00VixrQkFBa0IsQ0FBQyxRQUFRO0VBQUMsRUFDekMsRUFDRnZaLGdEQUFBO0lBQ0V5RCxHQUFHLEVBQUUsQ0FBQztJQUNOSCxLQUFLLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDaVgsaUJBQWlCLEVBQUVsQixlQUFlLEtBQUssTUFBTSxJQUFJL1YsTUFBTSxDQUFDa1gsaUJBQWlCLENBQUM7SUFDekYvVyxJQUFJLEVBQUMsY0FBYztJQUNuQkMsS0FBSyxFQUFFQSxDQUFBLEtBQU00VixrQkFBa0IsQ0FBQyxNQUFNO0VBQUMsRUFDdkMsQ0FDUyxDQUNGLEVBR1pELGVBQWUsS0FBSyxRQUFRLEdBQzNCdFosZ0RBQUE7SUFBWXNELEtBQUssRUFBRUMsTUFBTSxDQUFDUyxJQUFJO0lBQUViLElBQUksRUFBQyxZQUFZO0lBQUNFLE9BQU8sRUFBQztFQUFHLEdBQzNEckQsZ0RBQUE7SUFBT29ELEdBQUcsRUFBRSxDQUFDO0lBQUVFLEtBQUssRUFBRUMsTUFBTSxDQUFDVyxZQUFZO0lBQUVSLElBQUksRUFBQztFQUFlLEVBQUcsRUFDbEUxRCxnREFBQTtJQUNFb0QsR0FBRyxFQUFFLENBQUM7SUFDTkUsS0FBSyxFQUFFQyxNQUFNLENBQUNhLEtBQUs7SUFDbkJFLElBQUksRUFBQyxxQkFBcUI7SUFDMUJELFlBQVksRUFBQyxPQUFPO0lBQ3BCWCxJQUFJLEVBQUUrSCxhQUFhO0lBQ25CbEgsWUFBWSxFQUFHQyxJQUFJLElBQUtnVixnQkFBZ0IsQ0FBQ2hWLElBQUksQ0FBQ0UsTUFBTSxDQUFDaEIsSUFBSTtFQUFDLEVBQzFELENBQ1MsR0FFYjFELGdEQUFBO0lBQVlzRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ1MsSUFBSTtJQUFFYixJQUFJLEVBQUMsOEJBQThCO0lBQUNFLE9BQU8sRUFBQztFQUFHLEdBQzdFckQsZ0RBQUE7SUFBT29ELEdBQUcsRUFBRSxDQUFDO0lBQUVFLEtBQUssRUFBRUMsTUFBTSxDQUFDVyxZQUFZO0lBQUVSLElBQUksRUFBQztFQUFjLEVBQUcsRUFFakUxRCxnREFBQTtJQUNFb0QsR0FBRyxFQUFFLENBQUM7SUFDTkUsS0FBSyxFQUFFQyxNQUFNLENBQUNhLEtBQUs7SUFDbkJFLElBQUksRUFBQyxXQUFXO0lBQ2hCWixJQUFJLEVBQUUrVixRQUFRO0lBQ2RsVixZQUFZLEVBQUdDLElBQUksSUFBS2tWLFdBQVcsQ0FBQ2xWLElBQUksQ0FBQ0UsTUFBTSxDQUFDaEIsSUFBSTtFQUFDLEVBQ3JELEVBRUYxRCxnREFBQTtJQUNFb0QsR0FBRyxFQUFFLENBQUM7SUFDTkUsS0FBSyxFQUFFQyxNQUFNLENBQUNhLEtBQUs7SUFDbkJFLElBQUksRUFBQyxjQUFjO0lBQ25CWixJQUFJLEVBQUVpVyxXQUFXO0lBQ2pCcFYsWUFBWSxFQUFHQyxJQUFJLElBQUtvVixjQUFjLENBQUNwVixJQUFJLENBQUNFLE1BQU0sQ0FBQ2hCLElBQUk7RUFBQyxFQUN4RCxFQUVGMUQsZ0RBQUE7SUFDRW9ELEdBQUcsRUFBRSxDQUFDO0lBQ05FLEtBQUssRUFBRUMsTUFBTSxDQUFDYSxLQUFLO0lBQ25CRSxJQUFJLEVBQUMsZ0JBQWdCO0lBQ3JCRCxZQUFZLEVBQUMsUUFBUTtJQUNyQlgsSUFBSSxFQUFFK0gsYUFBYTtJQUNuQmxILFlBQVksRUFBR0MsSUFBSSxJQUFLZ1YsZ0JBQWdCLENBQUNoVixJQUFJLENBQUNFLE1BQU0sQ0FBQ2hCLElBQUk7RUFBQyxFQUMxRCxFQUVGMUQsZ0RBQUE7SUFDRW9ELEdBQUcsRUFBRSxDQUFDO0lBQ05FLEtBQUssRUFBRUMsTUFBTSxDQUFDYSxLQUFLO0lBQ25CRSxJQUFJLEVBQUMsYUFBYTtJQUNsQlosSUFBSSxFQUFFbVcsVUFBVTtJQUNoQnRWLFlBQVksRUFBR0MsSUFBSSxJQUFLc1YsYUFBYSxDQUFDdFYsSUFBSSxDQUFDRSxNQUFNLENBQUNoQixJQUFJO0VBQUMsRUFDdkQsQ0FFTCxFQUVBaEIsaUJBQWlCLEdBQ2hCMUMsZ0RBQUE7SUFBT3NELEtBQUssRUFBRUMsTUFBTSxDQUFDYixpQkFBaUI7SUFBRWdCLElBQUksRUFBRWhCO0VBQWlCLEVBQUksR0FDakUsSUFBSSxFQUdSMUMsZ0RBQUE7SUFBWXNELEtBQUssRUFBRUMsTUFBTSxDQUFDUyxJQUFJO0lBQUViLElBQUksRUFBQyxZQUFZO0lBQUNFLE9BQU8sRUFBQztFQUFHLEdBQzNEckQsZ0RBQUE7SUFBT29ELEdBQUcsRUFBRSxDQUFDO0lBQUVFLEtBQUssRUFBRUMsTUFBTSxDQUFDVyxZQUFZO0lBQUVSLElBQUksRUFBQztFQUFTLEVBQUcsRUFDNUQxRCxnREFBQTtJQUFhb0QsR0FBRyxFQUFFO0VBQUMsR0FDakJwRCxnREFBQTtJQUFPc0QsS0FBSyxFQUFFQyxNQUFNLENBQUN5QixXQUFXO0lBQUV0QixJQUFJLEVBQUUsZUFBZXpCLE1BQU0sSUFBSSxHQUFHO0VBQUUsRUFBSSxFQUMxRWpDLGdEQUFBO0lBQU9zRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ3lCLFdBQVc7SUFBRXRCLElBQUksRUFBRSxnQkFBZ0I0VixlQUFlLEtBQUssUUFBUSxHQUFHLGNBQWMsR0FBRyxjQUFjO0VBQUUsRUFBSSxFQUMzSEEsZUFBZSxLQUFLLFFBQVEsR0FDM0J0WixnREFBQTtJQUFPc0QsS0FBSyxFQUFFQyxNQUFNLENBQUN5QixXQUFXO0lBQUV0QixJQUFJLEVBQUUsa0JBQWtCK0gsYUFBYSxJQUFJLFNBQVM7RUFBRSxFQUFJLEdBRTFGekwsZ0RBQUEsQ0FBQUEsMkNBQUEsUUFDRUEsZ0RBQUE7SUFBT3NELEtBQUssRUFBRUMsTUFBTSxDQUFDeUIsV0FBVztJQUFFdEIsSUFBSSxFQUFFLFNBQVMrVixRQUFRLElBQUksU0FBUztFQUFFLEVBQUksRUFDNUV6WixnREFBQTtJQUFPc0QsS0FBSyxFQUFFQyxNQUFNLENBQUN5QixXQUFXO0lBQUV0QixJQUFJLEVBQUUsaUJBQWlCaVcsV0FBVyxJQUFJLFNBQVM7RUFBRSxFQUFJLEVBQ3ZGM1osZ0RBQUE7SUFBT3NELEtBQUssRUFBRUMsTUFBTSxDQUFDeUIsV0FBVztJQUFFdEIsSUFBSSxFQUFFLG1CQUFtQitILGFBQWEsSUFBSSxTQUFTO0VBQUUsRUFBSSxFQUMzRnpMLGdEQUFBO0lBQU9zRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ3lCLFdBQVc7SUFBRXRCLElBQUksRUFBRSxnQkFBZ0JtVyxVQUFVLElBQUksU0FBUztFQUFFLEVBQUksQ0FFeEYsQ0FDVyxDQUNILENBQ0QsQ0FDSCxFQUViN1osZ0RBQUE7SUFBUW9ELEdBQUcsRUFBRSxDQUFDO0lBQUVFLEtBQUssRUFBRUMsTUFBTSxDQUFDMEIsYUFBYTtJQUFFdkIsSUFBSSxFQUFDLG9CQUFvQjtJQUFDQyxLQUFLLEVBQUVYO0VBQWEsRUFBSSxDQUNwRjtBQUVqQjtBQUFDckIsRUFBQSxDQTFNZXdQLGNBQWM7QUFBQWpNLEVBQUEsR0FBZGlNLGNBQWM7QUE0TTlCLE1BQU01TixNQUFNLEdBQUdoQywwREFBVSxDQUFDNEQsTUFBTSxDQUFDO0VBQy9CM0IsTUFBTSxFQUFFO0lBQ040QixlQUFlLEVBQUUsU0FBUztJQUMxQkMsT0FBTyxFQUFFLEVBQUU7SUFDWEMsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQkMsaUJBQWlCLEVBQUU7R0FDcEI7RUFDRDFCLFVBQVUsRUFBRTtJQUNWMkIsUUFBUSxFQUFFLEVBQUU7SUFDWkMsS0FBSyxFQUFFLFNBQVM7SUFDaEJMLGVBQWUsRUFBRSxhQUFhO0lBQzlCTSxLQUFLLEVBQUU7R0FDUjtFQUNENUIsVUFBVSxFQUFFO0lBQ1YwQixRQUFRLEVBQUUsRUFBRTtJQUNaRyxVQUFVLEVBQUUsTUFBTTtJQUNsQkYsS0FBSyxFQUFFO0dBQ1I7RUFDRDFCLFNBQVMsRUFBRTtJQUNUc0IsT0FBTyxFQUFFLEVBQUU7SUFDWEQsZUFBZSxFQUFFO0dBQ2xCO0VBQ0RwQixJQUFJLEVBQUU7SUFDSm9CLGVBQWUsRUFBRSxTQUFTO0lBQzFCUSxZQUFZLEVBQUUsRUFBRTtJQUNoQlAsT0FBTyxFQUFFLEVBQUU7SUFDWFEsWUFBWSxFQUFFLEVBQUU7SUFDaEJDLFNBQVMsRUFBRTtHQUNaO0VBQ0Q1QixZQUFZLEVBQUU7SUFDWnNCLFFBQVEsRUFBRSxFQUFFO0lBQ1pHLFVBQVUsRUFBRSxNQUFNO0lBQ2xCRixLQUFLLEVBQUUsU0FBUztJQUNoQkksWUFBWSxFQUFFO0dBQ2Y7RUFDRHpCLEtBQUssRUFBRTtJQUNMb0IsUUFBUSxFQUFFLEVBQUU7SUFDWkMsS0FBSyxFQUFFLFNBQVM7SUFDaEJMLGVBQWUsRUFBRSxTQUFTO0lBQzFCQyxPQUFPLEVBQUUsRUFBRTtJQUNYTyxZQUFZLEVBQUUsQ0FBQztJQUNmQyxZQUFZLEVBQUUsRUFBRSxDQUFFO0dBQ25CO0VBQ0QwVSxvQkFBb0IsRUFBRTtJQUNwQjFVLFlBQVksRUFBRTtHQUNmO0VBQ0QyVSxpQkFBaUIsRUFBRTtJQUNqQmhWLFFBQVEsRUFBRSxFQUFFO0lBQ1pKLGVBQWUsRUFBRSxTQUFTO0lBQzFCSyxLQUFLLEVBQUUsU0FBUztJQUNoQkcsWUFBWSxFQUFFLENBQUM7SUFDZkksTUFBTSxFQUFFLENBQUM7SUFDVFgsT0FBTyxFQUFFO0dBQ1Y7RUFDRG9WLGlCQUFpQixFQUFFO0lBQ2pCclYsZUFBZSxFQUFFLFNBQVM7SUFDMUJLLEtBQUssRUFBRTtHQUNSO0VBQ0QvQyxpQkFBaUIsRUFBRTtJQUNqQjhDLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEtBQUssRUFBRSxTQUFTO0lBQ2hCUSxTQUFTLEVBQUU7R0FDWjtFQUNEakIsV0FBVyxFQUFFO0lBQ1hRLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEtBQUssRUFBRSxTQUFTO0lBQ2hCSSxZQUFZLEVBQUU7R0FDZjtFQUNEWixhQUFhLEVBQUU7SUFDYkcsZUFBZSxFQUFFLFNBQVM7SUFDMUJLLEtBQUssRUFBRSxTQUFTO0lBQ2hCRCxRQUFRLEVBQUUsRUFBRTtJQUNaRyxVQUFVLEVBQUUsTUFBTTtJQUNsQk4sT0FBTyxFQUFFLEVBQUU7SUFDWFcsTUFBTSxFQUFFLEVBQUU7SUFDVkosWUFBWSxFQUFFOztDQUVqQixDQUFDO0FBQUMsSUFBQVYsRUFBQTtBQUFBZ0Isc0NBQUEsQ0FBQWhCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25TNEI7QUFDaUI7QUFrQjFDLFNBQVVrTSxxQkFBcUJBLENBQUM7RUFBRTNQLFVBQVU7RUFBRUM7QUFBSyxDQUE4QjtFQUNyRixNQUFNO0lBQUVPLE1BQU07SUFBRStYLFdBQVc7SUFBRXZPLGFBQWE7SUFBRXdPLFNBQVM7SUFBRUs7RUFBYSxDQUFFLEdBQUc1WSxLQUFLLENBQUNNLE1BQU07RUFFckYsT0FDRWhDLGdEQUFBO0lBQWFzRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ1E7RUFBUyxHQUNsQy9ELGdEQUFBO0lBQU9zRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQzZDLFdBQVc7SUFBRTFDLElBQUksRUFBQztFQUFHLEVBQUcsRUFDN0MxRCxnREFBQTtJQUFPc0QsS0FBSyxFQUFFQyxNQUFNLENBQUM4QyxLQUFLO0lBQUUzQyxJQUFJLEVBQUM7RUFBdUIsRUFBRyxFQUMzRDFELGdEQUFBO0lBQU9zRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQytDLE9BQU87SUFBRTVDLElBQUksRUFBQztFQUE2QyxFQUFHLEVBRW5GMUQsZ0RBQUE7SUFBYXNELEtBQUssRUFBRUMsTUFBTSxDQUFDZ0Q7RUFBVyxHQUNwQ3ZHLGdEQUFBO0lBQU9zRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ2lELFlBQVk7SUFBRTlDLElBQUksRUFBQztFQUFvQixFQUFHLEVBQy9EMUQsZ0RBQUE7SUFBT3NELEtBQUssRUFBRUMsTUFBTSxDQUFDeUIsV0FBVztJQUFFdEIsSUFBSSxFQUFFLFdBQVd6QixNQUFNO0VBQUUsRUFBSSxFQUMvRGpDLGdEQUFBO0lBQU9zRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ3lCLFdBQVc7SUFBRXRCLElBQUksRUFBRSxnQkFBZ0JzVyxXQUFXO0VBQUUsRUFBSSxFQUN6RWhhLGdEQUFBO0lBQU9zRCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ3lCLFdBQVc7SUFBRXRCLElBQUksRUFBRSxZQUFZK0gsYUFBYTtFQUFFLEVBQUksRUFDdkV6TCxnREFBQTtJQUFPc0QsS0FBSyxFQUFFQyxNQUFNLENBQUN5QixXQUFXO0lBQUV0QixJQUFJLEVBQUUsY0FBY3VXLFNBQVM7RUFBRSxFQUFJLEVBQ3JFamEsZ0RBQUE7SUFBT3NELEtBQUssRUFBRUMsTUFBTSxDQUFDeUIsV0FBVztJQUFFdEIsSUFBSSxFQUFFLG1CQUFtQjRXLGFBQWE7RUFBRSxFQUFJLENBQ2xFLEVBRWR0YSxnREFBQTtJQUNFc0QsS0FBSyxFQUFFQyxNQUFNLENBQUNrRCxNQUFNO0lBQ3BCL0MsSUFBSSxFQUFDLHFCQUFxQjtJQUMxQkMsS0FBSyxFQUFFQSxDQUFBLEtBQU1sQyxVQUFVLENBQUN3QixRQUFRLENBQUMsV0FBVztFQUFDLEVBQzdDLENBQ1U7QUFFbEI7QUFBQ2lDLEVBQUEsR0F6QmVrTSxxQkFBcUI7QUEyQnJDLE1BQU03TixNQUFNLEdBQUdoQywwREFBVSxDQUFDNEQsTUFBTSxDQUFDO0VBQy9CcEIsU0FBUyxFQUFFO0lBQ1QyQyxNQUFNLEVBQUUsTUFBTTtJQUNkdEIsZUFBZSxFQUFFLFNBQVM7SUFDMUJDLE9BQU8sRUFBRSxFQUFFO0lBQ1hzQixjQUFjLEVBQUUsUUFBUTtJQUN4QkMsVUFBVSxFQUFFO0dBQ2I7RUFDRFIsV0FBVyxFQUFFO0lBQ1haLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEtBQUssRUFBRSxTQUFTO0lBQ2hCSSxZQUFZLEVBQUU7R0FDZjtFQUNEUSxLQUFLLEVBQUU7SUFDTGIsUUFBUSxFQUFFLEVBQUU7SUFDWkcsVUFBVSxFQUFFLE1BQU07SUFDbEJGLEtBQUssRUFBRSxTQUFTO0lBQ2hCSSxZQUFZLEVBQUUsRUFBRTtJQUNoQmdCLGFBQWEsRUFBRTtHQUNoQjtFQUNEUCxPQUFPLEVBQUU7SUFDUGQsUUFBUSxFQUFFLEVBQUU7SUFDWkMsS0FBSyxFQUFFLFNBQVM7SUFDaEJJLFlBQVksRUFBRSxFQUFFO0lBQ2hCZ0IsYUFBYSxFQUFFO0dBQ2hCO0VBQ0ROLFdBQVcsRUFBRTtJQUNYbkIsZUFBZSxFQUFFLFNBQVM7SUFDMUJNLEtBQUssRUFBRSxNQUFNO0lBQ2JFLFlBQVksRUFBRSxFQUFFO0lBQ2hCUCxPQUFPLEVBQUUsRUFBRTtJQUNYUSxZQUFZLEVBQUUsRUFBRTtJQUNoQkMsU0FBUyxFQUFFO0dBQ1o7RUFDRFUsWUFBWSxFQUFFO0lBQ1poQixRQUFRLEVBQUUsRUFBRTtJQUNaRyxVQUFVLEVBQUUsTUFBTTtJQUNsQkYsS0FBSyxFQUFFLFNBQVM7SUFDaEJJLFlBQVksRUFBRTtHQUNmO0VBQ0RiLFdBQVcsRUFBRTtJQUNYUSxRQUFRLEVBQUUsRUFBRTtJQUNaQyxLQUFLLEVBQUUsU0FBUztJQUNoQkksWUFBWSxFQUFFO0dBQ2Y7RUFDRFksTUFBTSxFQUFFO0lBQ05qQixRQUFRLEVBQUUsRUFBRTtJQUNaQyxLQUFLLEVBQUUsU0FBUztJQUNoQkwsZUFBZSxFQUFFLFNBQVM7SUFDMUJRLFlBQVksRUFBRSxDQUFDO0lBQ2ZQLE9BQU8sRUFBRSxFQUFFO0lBQ1hLLEtBQUssRUFBRTs7Q0FFVixDQUFDO0FBQUMsSUFBQVIsRUFBQTtBQUFBZ0Isc0NBQUEsQ0FBQWhCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkcyRTtBQWM5RSxNQUFNMFYsV0FBVyxHQUFHRixvREFBYSxDQUE4QnpTLFNBQVMsQ0FBQztBQUVsRSxNQUFNNFMsWUFBWSxHQUFzQ0EsQ0FBQztFQUFFQztBQUFRLENBQUUsS0FBSTtFQUFBblosRUFBQTtFQUM5RSxNQUFNLENBQUN1RixRQUFRLEVBQUUwTSxXQUFXLENBQUMsR0FBR3pSLCtDQUFRLENBQWtCLElBQUksQ0FBQztFQUUvRCxPQUNFbkMsMERBQUEsQ0FBQzRhLFdBQVcsQ0FBQ0csUUFBUTtJQUFDMWEsS0FBSyxFQUFFO01BQUU2RyxRQUFRO01BQUUwTTtJQUFXO0VBQUUsR0FDbkRrSCxRQUFRLENBQ1k7QUFFM0IsQ0FBQztBQUFDblosRUFBQSxDQVJXa1osWUFBWTtBQUFBM1YsRUFBQSxHQUFaMlYsWUFBWTtBQVVsQixNQUFNbEgsT0FBTyxHQUFHQSxDQUFBLEtBQUs7RUFBQXFILEdBQUE7RUFDMUIsTUFBTUMsT0FBTyxHQUFHTixpREFBVSxDQUFDQyxXQUFXLENBQUM7RUFDdkMsSUFBSUssT0FBTyxLQUFLaFQsU0FBUyxFQUFFO0lBQ3pCLE1BQU0sSUFBSTJLLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQztFQUMvRDtFQUNBLE9BQU9xSSxPQUFPO0FBQ2hCLENBQUM7QUFBQ0QsR0FBQSxDQU5XckgsT0FBTztBQUFBLElBQUF6TyxFQUFBO0FBQUFnQixzQ0FBQSxDQUFBaEIsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vc3JjL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQ29udHJpYnV0aW9uU2NyZWVuLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0NvbnRyaWJ1dGlvblN1Y2Nlc3NTY3JlZW4udHN4Iiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvRGFzaGJvYXJkU2NyZWVuLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0ludmVzdG1lbnRzU2NyZWVuLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0xvZ2luU2NyZWVuLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL01haW5TdGFjay50c3giLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1BvcnRmb2xpb1NjcmVlbi50c3giLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlU2NyZWVuLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1NpZ251cFNjcmVlbi50c3giLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9TaWdudXBTdWNjZXNzU2NyZWVuLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1dpdGhkcmF3U2NyZWVuLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1dpdGhkcmF3U3VjY2Vzc1NjcmVlbi50c3giLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9zcmMvY29udGV4dC9Vc2VyQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJ+L3BhY2thZ2UuanNvblwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0TmF0aXZlU2NyaXB0IGZyb20gJ3JlYWN0LW5hdGl2ZXNjcmlwdCc7XG5pbXBvcnQgeyBNYWluU3RhY2sgfSBmcm9tICcuL2NvbXBvbmVudHMvTWFpblN0YWNrJztcblxuLy8gSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLnRzIGZpbGUgaXMgdGhlIGVudHJ5IHBvaW50IHRvIHlvdXIgYXBwbGljYXRpb24uIFlvdVxuLy8gY2FuIHVzZSB0aGlzIGZpbGUgdG8gcGVyZm9ybSBhcHAtbGV2ZWwgaW5pdGlhbGl6YXRpb24sIGJ1dCB0aGUgcHJpbWFyeVxuLy8gcHVycG9zZSBvZiB0aGUgZmlsZSBpcyB0byBwYXNzIGNvbnRyb2wgdG8gdGhlIGFwcCdzIGZpcnN0IG1vZHVsZS5cblxuLy8gQ29udHJvbHMgcmVhY3QtbmF0aXZlc2NyaXB0IGxvZyB2ZXJib3NpdHkuXG4vLyAtIHRydWU6IGFsbCBsb2dzO1xuLy8gLSBmYWxzZTogb25seSBlcnJvciBsb2dzLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbCwgJ19fREVWX18nLCB7IHZhbHVlOiBmYWxzZSB9KTtcblxuUmVhY3ROYXRpdmVTY3JpcHQuc3RhcnQoUmVhY3QuY3JlYXRlRWxlbWVudChNYWluU3RhY2ssIHt9LCBudWxsKSk7XG5cbi8vIERvIG5vdCBwbGFjZSBhbnkgY29kZSBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZCBhcyBpdCB3aWxsIG5vdFxuLy8gYmUgZXhlY3V0ZWQgb24gaU9TLlxuIiwiLyogQ1NTMkpTT04gKi9cblxuY29uc3QgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fXyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIqXCIsXCI6OmJlZm9yZVwiLFwiOjphZnRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcm90YXRlXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBpbmNoLXpvb21cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3NcIixcInZhbHVlXCI6XCJwcm94aW1pdHlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1kcm9wLXNoYWRvd1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc2l6ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1sYXlvdXRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tcGFpbnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc3R5bGVcIixcInZhbHVlXCI6XCJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCI6OmJhY2tkcm9wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1yb3RhdGVcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS14XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi14XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGluY2gtem9vbVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzc1wiLFwidmFsdWVcIjpcInByb3hpbWl0eVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC10by1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWRyb3Atc2hhZG93XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLW9wYWNpdHlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zaXplXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLWxheW91dFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1wYWludFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zdHlsZVwiLFwidmFsdWVcIjpcIlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jb250YWluZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubWItNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tYi04XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjMyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRyYW5zZm9ybVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRyYW5zZm9ybVwiLFwidmFsdWVcIjpcInRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5yb3VuZGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm9yZGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMXB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtY2VudGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LTJ4bFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjI0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibGluZS1oZWlnaHRcIixcInZhbHVlXCI6XCIzMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LTN4bFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibGluZS1oZWlnaHRcIixcInZhbHVlXCI6XCIzNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mb250LWJvbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjcwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5pdGFsaWNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXN0eWxlXCIsXCJ2YWx1ZVwiOlwiaXRhbGljXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtd2hpdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNoYWRvd1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJveC1zaGFkb3dcIixcInZhbHVlXCI6XCJ2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM0QTkwRTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmtcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzIxMjEyMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0ZGRkZGRlwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19XG5leHBvcnQgZGVmYXVsdCBfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fXG5jb25zdCB7IGFkZFRhZ2dlZEFkZGl0aW9uYWxDU1MgfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcbmFkZFRhZ2dlZEFkZGl0aW9uYWxDU1MoX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fXywgXCIvaG9tZS9iaW9wL0RvY3VtZW50cy93b3Jrc3BhY2UvVnVuYVJlYWN0QXBwL3NyYy9hcHAuY3NzXCIpXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KClcblx0bW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcblx0XHRjb25zdCB7IHJlbW92ZVRhZ2dlZEFkZGl0aW9uYWxDU1MgfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblx0XHRyZW1vdmVUYWdnZWRBZGRpdGlvbmFsQ1NTKFwiL2hvbWUvYmlvcC9Eb2N1bWVudHMvd29ya3NwYWNlL1Z1bmFSZWFjdEFwcC9zcmMvYXBwLmNzc1wiKVxuXHR9KVxufSIsImV4cG9ydCBjb25zdCBBUElfQ09ORklHID0ge1xuICBCQVNFX1VSTDogJ2h0dHBzOi8vYXBpLnZ1bmEuaW8nLFxuICBBVVRIRU5USUNBVElPTl9FTkRQT0lOVDogJy9maW5lcmFjdC1wcm92aWRlci9hcGkvdjEvYXV0aGVudGljYXRpb24nLFxuICBDTElFTlRTX0VORFBPSU5UOiAnL2ZpbmVyYWN0LXByb3ZpZGVyL2FwaS92MS9jbGllbnRzJyxcbiAgU0FWSU5HU19BQ0NPVU5UU19FTkRQT0lOVDogJy9maW5lcmFjdC1wcm92aWRlci9hcGkvdjEvc2F2aW5nc2FjY291bnRzJyxcbiAgU0VMRl9DTElFTlRTX0VORFBPSU5UOiAnL2ZpbmVyYWN0LXByb3ZpZGVyL2FwaS92MS9zZWxmL2NsaWVudHMnLFxuICBVU0VSU19FTkRQT0lOVDogJy9maW5lcmFjdC1wcm92aWRlci9hcGkvdjEvdXNlcnMnLFxuICBTQVZJTkdTX1BST0RVQ1RTX0VORFBPSU5UOiAnL2ZpbmVyYWN0LXByb3ZpZGVyL2FwaS92MS9zYXZpbmdzcHJvZHVjdHMnLFxufTtcblxuZXhwb3J0IGNvbnN0IEFQUF9BVVRIID0ge1xuICBVU0VSTkFNRTogJ21pZm9zJyxcbiAgUEFTU1dPUkQ6ICdwYXNzd29yZCcsXG59O1xuXG5leHBvcnQgY29uc3QgVEVOQU5UX0lEID0gJ2RlZmF1bHQnO1xuXG5leHBvcnQgY29uc3QgREFURV9GT1JNQVQgPSAnZGQgTU1NTSB5eXl5JztcbmV4cG9ydCBjb25zdCBMT0NBTEUgPSAnZW4nO1xuXG5leHBvcnQgY29uc3QgUFJPRFVDVF9JRCA9IDE7IC8vIEZvciBzYXZpbmdzIGFjY291bnQgY3JlYXRpb25cblxuZXhwb3J0IGNvbnN0IFJPTEVTID0gWzEsIDJdOyAvLyBEZWZhdWx0IHJvbGVzIGZvciBuZXcgdXNlcnNcblxuZXhwb3J0IGNvbnN0IExFR0FMX0ZPUk1fSUQgPSAxO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdFwiO1xuaW1wb3J0IHsgRnJhbWVOYXZpZ2F0aW9uUHJvcCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQtbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgTWFpblN0YWNrUGFyYW1MaXN0IH0gZnJvbSBcIi4uL05hdmlnYXRpb25QYXJhbUxpc3RcIjtcbmltcG9ydCB7IFNjcm9sbFZpZXcsIFN0YWNrTGF5b3V0LCBMYWJlbCwgR3JpZExheW91dCwgVGV4dEZpZWxkLCBCdXR0b24gfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCI7XG5cbnR5cGUgQ29udHJpYnV0aW9uU2NyZWVuUHJvcHMgPSB7XG4gIG5hdmlnYXRpb246IEZyYW1lTmF2aWdhdGlvblByb3A8TWFpblN0YWNrUGFyYW1MaXN0LCBcIkNvbnRyaWJ1dGlvblwiPjtcbiAgcm91dGU6IHsgXG4gICAgcGFyYW1zOiB7IFxuICAgICAgcHJvdmlkZXI6IHN0cmluZztcbiAgICAgIHByb2R1Y3RUeXBlOiBzdHJpbmc7XG4gICAgICBtaW5BbW91bnQ6IG51bWJlcjtcbiAgICAgIG1heEFtb3VudDogbnVtYmVyO1xuICAgIH0gXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQ29udHJpYnV0aW9uU2NyZWVuKHsgbmF2aWdhdGlvbiwgcm91dGUgfTogQ29udHJpYnV0aW9uU2NyZWVuUHJvcHMpIHtcbiAgY29uc3QgeyBwcm92aWRlciwgcHJvZHVjdFR5cGUsIG1pbkFtb3VudCwgbWF4QW1vdW50IH0gPSByb3V0ZS5wYXJhbXM7XG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzUGVyY2VudGFnZSwgc2V0SXNQZXJjZW50YWdlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZyZXF1ZW5jeSwgc2V0RnJlcXVlbmN5XSA9IFJlYWN0LnVzZVN0YXRlKFwibW9udGhseVwiKTtcbiAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdmFsaWRhdGlvbk1lc3NhZ2UsIHNldFZhbGlkYXRpb25NZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHZhbGlkYXRlQW1vdW50ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBudW1WYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIGlmIChpc05hTihudW1WYWx1ZSkpIHtcbiAgICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgbnVtYmVyXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAobnVtVmFsdWUgPCBtaW5BbW91bnQpIHtcbiAgICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKGBNaW5pbXVtIGNvbnRyaWJ1dGlvbiBpcyBLRVMgJHttaW5BbW91bnR9YCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChudW1WYWx1ZSA+IG1heEFtb3VudCkge1xuICAgICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UoYE1heGltdW0gY29udHJpYnV0aW9uIGlzIEtFUyAke21heEFtb3VudH1gKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UoXCJcIik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29uZmlybSA9ICgpID0+IHtcbiAgICBpZiAodmFsaWRhdGVBbW91bnQoYW1vdW50KSkge1xuICAgICAgLy8gSGVyZSB5b3Ugd291bGQgdHlwaWNhbGx5IG1ha2UgYW4gQVBJIGNhbGwgdG8gc2F2ZSB0aGUgY29udHJpYnV0aW9uXG4gICAgICBuYXZpZ2F0aW9uLm5hdmlnYXRlKFwiQ29udHJpYnV0aW9uU3VjY2Vzc1wiLCB7XG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgZnJlcXVlbmN5LFxuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIHByb3ZpZGVyLFxuICAgICAgICBwcm9kdWN0VHlwZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGdyaWRMYXlvdXQgcm93cz1cImF1dG8sICosIGF1dG9cIj5cbiAgICAgIDxncmlkTGF5b3V0IHJvdz17MH0gY29sdW1ucz1cImF1dG8sICpcIiBzdHlsZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxidXR0b24gY29sPXswfSB0ZXh0PVwi4oaQXCIgb25UYXA9eygpID0+IG5hdmlnYXRpb24uZ29CYWNrKCl9IHN0eWxlPXtzdHlsZXMuYmFja0J1dHRvbn0gLz5cbiAgICAgICAgPGxhYmVsIGNvbD17MX0gdGV4dD1cIlNldCBVcCBDb250cmlidXRpb25cIiBzdHlsZT17c3R5bGVzLmhlYWRlclRleHR9IC8+XG4gICAgICA8L2dyaWRMYXlvdXQ+XG5cbiAgICAgIDxzY3JvbGxWaWV3IHJvdz17MX0+XG4gICAgICAgIDxzdGFja0xheW91dCBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGdyaWRMYXlvdXQgc3R5bGU9e3N0eWxlcy5jYXJkfSByb3dzPVwiYXV0bywgYXV0b1wiIGNvbHVtbnM9XCIqXCI+XG4gICAgICAgICAgICA8bGFiZWwgcm93PXswfSBzdHlsZT17c3R5bGVzLnByb3ZpZGVyTmFtZX0gdGV4dD17cHJvdmlkZXJ9IC8+XG4gICAgICAgICAgICA8bGFiZWwgcm93PXsxfSBzdHlsZT17c3R5bGVzLnByb2R1Y3RUeXBlfSB0ZXh0PXtwcm9kdWN0VHlwZX0gLz5cbiAgICAgICAgICA8L2dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICB7LyogQW1vdW50IElucHV0ICovfVxuICAgICAgICAgIDxncmlkTGF5b3V0IHN0eWxlPXtzdHlsZXMuY2FyZH0gcm93cz1cImF1dG8sIGF1dG8sIGF1dG9cIiBjb2x1bW5zPVwiKlwiPlxuICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGl0bGV9IHRleHQ9XCJDb250cmlidXRpb24gQW1vdW50XCIgLz5cbiAgICAgICAgICAgIDxncmlkTGF5b3V0IHJvdz17MX0gY29sdW1ucz1cIiosIGF1dG9cIiBzdHlsZT17c3R5bGVzLmlucHV0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPHRleHRGaWVsZCBcbiAgICAgICAgICAgICAgICBjb2w9ezB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH0gXG4gICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwibnVtYmVyXCIgXG4gICAgICAgICAgICAgICAgaGludD1cIkVudGVyIGFtb3VudFwiIFxuICAgICAgICAgICAgICAgIHRleHQ9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBuZXdBbW91bnQgPSBhcmdzLm9iamVjdC50ZXh0O1xuICAgICAgICAgICAgICAgICAgc2V0QW1vdW50KG5ld0Ftb3VudCk7XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZUFtb3VudChuZXdBbW91bnQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgY29sPXsxfSBcbiAgICAgICAgICAgICAgICBzdHlsZT17W3N0eWxlcy50eXBlVG9nZ2xlLCBpc1BlcmNlbnRhZ2UgJiYgc3R5bGVzLmFjdGl2ZVRvZ2dsZV19IFxuICAgICAgICAgICAgICAgIHRleHQ9e2lzUGVyY2VudGFnZSA/IFwiJVwiIDogXCJLRVNcIn1cbiAgICAgICAgICAgICAgICBvblRhcD17KCkgPT4gc2V0SXNQZXJjZW50YWdlKCFpc1BlcmNlbnRhZ2UpfSBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSA/IFxuICAgICAgICAgICAgICA8bGFiZWwgcm93PXsyfSBzdHlsZT17c3R5bGVzLnZhbGlkYXRpb25NZXNzYWdlfSB0ZXh0PXt2YWxpZGF0aW9uTWVzc2FnZX0gLz4gXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L2dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICB7LyogRnJlcXVlbmN5IFNlbGVjdGlvbiAqL31cbiAgICAgICAgICA8Z3JpZExheW91dCBzdHlsZT17c3R5bGVzLmNhcmR9IHJvd3M9XCJhdXRvLCBhdXRvXCIgY29sdW1ucz1cIipcIj5cbiAgICAgICAgICAgIDxsYWJlbCByb3c9ezB9IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRpdGxlfSB0ZXh0PVwiRnJlcXVlbmN5XCIgLz5cbiAgICAgICAgICAgIDxncmlkTGF5b3V0IHJvdz17MX0gY29sdW1ucz1cIiosICpcIiBzdHlsZT17c3R5bGVzLmZyZXF1ZW5jeUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgY29sPXswfSBcbiAgICAgICAgICAgICAgICBzdHlsZT17W3N0eWxlcy5mcmVxdWVuY3lCdXR0b24sIGZyZXF1ZW5jeSA9PT0gXCJtb250aGx5XCIgJiYgc3R5bGVzLmFjdGl2ZUZyZXF1ZW5jeV19IFxuICAgICAgICAgICAgICAgIHRleHQ9XCJNb250aGx5XCJcbiAgICAgICAgICAgICAgICBvblRhcD17KCkgPT4gc2V0RnJlcXVlbmN5KFwibW9udGhseVwiKX0gXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgY29sPXsxfSBcbiAgICAgICAgICAgICAgICBzdHlsZT17W3N0eWxlcy5mcmVxdWVuY3lCdXR0b24sIGZyZXF1ZW5jeSA9PT0gXCJxdWFydGVybHlcIiAmJiBzdHlsZXMuYWN0aXZlRnJlcXVlbmN5XX0gXG4gICAgICAgICAgICAgICAgdGV4dD1cIlF1YXJ0ZXJseVwiXG4gICAgICAgICAgICAgICAgb25UYXA9eygpID0+IHNldEZyZXF1ZW5jeShcInF1YXJ0ZXJseVwiKX0gXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2dyaWRMYXlvdXQ+XG4gICAgICAgICAgPC9ncmlkTGF5b3V0PlxuXG4gICAgICAgICAgey8qIFN0YXJ0IERhdGUgKi99XG4gICAgICAgICAgPGdyaWRMYXlvdXQgc3R5bGU9e3N0eWxlcy5jYXJkfSByb3dzPVwiYXV0bywgYXV0b1wiIGNvbHVtbnM9XCIqXCI+XG4gICAgICAgICAgICA8bGFiZWwgcm93PXswfSBzdHlsZT17c3R5bGVzLnNlY3Rpb25UaXRsZX0gdGV4dD1cIlN0YXJ0IERhdGVcIiAvPlxuICAgICAgICAgICAgPHRleHRGaWVsZCBcbiAgICAgICAgICAgICAgcm93PXsxfVxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fSBcbiAgICAgICAgICAgICAgaGludD1cIkREL01NL1lZWVlcIiBcbiAgICAgICAgICAgICAgdGV4dD17c3RhcnREYXRlfVxuICAgICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhhcmdzKSA9PiBzZXRTdGFydERhdGUoYXJncy5vYmplY3QudGV4dCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZ3JpZExheW91dD5cblxuICAgICAgICAgIHsvKiBTdW1tYXJ5ICovfVxuICAgICAgICAgIDxncmlkTGF5b3V0IHN0eWxlPXtzdHlsZXMuY2FyZH0gcm93cz1cImF1dG8sIGF1dG9cIiBjb2x1bW5zPVwiKlwiPlxuICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGl0bGV9IHRleHQ9XCJTdW1tYXJ5XCIgLz5cbiAgICAgICAgICAgIDxzdGFja0xheW91dCByb3c9ezF9PlxuICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdW1tYXJ5VGV4dH0gdGV4dD17YEFtb3VudDogJHtpc1BlcmNlbnRhZ2UgPyBhbW91bnQgKyAnJScgOiAnS0VTICcgKyBhbW91bnR9YH0gLz5cbiAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMuc3VtbWFyeVRleHR9IHRleHQ9e2BGcmVxdWVuY3k6ICR7ZnJlcXVlbmN5fWB9IC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLnN1bW1hcnlUZXh0fSB0ZXh0PXtgU3RhcnQgRGF0ZTogJHtzdGFydERhdGUgfHwgJ05vdCBzZXQnfWB9IC8+XG4gICAgICAgICAgICA8L3N0YWNrTGF5b3V0PlxuICAgICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgICAgPC9zdGFja0xheW91dD5cbiAgICAgIDwvc2Nyb2xsVmlldz5cblxuICAgICAgPGJ1dHRvbiByb3c9ezJ9IHN0eWxlPXtzdHlsZXMuY29uZmlybUJ1dHRvbn0gdGV4dD1cIkNvbmZpcm1cIiBvblRhcD17aGFuZGxlQ29uZmlybX0gLz5cbiAgICA8L2dyaWRMYXlvdXQ+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgaGVhZGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBwYWRkaW5nOiAxNixcbiAgICBib3JkZXJCb3R0b21XaWR0aDogMSxcbiAgICBib3JkZXJCb3R0b21Db2xvcjogXCIjRTBFMEUwXCIsXG4gIH0sXG4gIGJhY2tCdXR0b246IHtcbiAgICBmb250U2l6ZTogMjQsXG4gICAgY29sb3I6IFwiIzRBOTBFMlwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIHdpZHRoOiA0MCxcbiAgfSxcbiAgaGVhZGVyVGV4dDoge1xuICAgIGZvbnRTaXplOiAyMCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIHBhZGRpbmc6IDE2LFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjVGNUY1XCIsXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgcGFkZGluZzogMTUsXG4gICAgbWFyZ2luQm90dG9tOiAxNSxcbiAgICBlbGV2YXRpb246IDMsXG4gIH0sXG4gIHByb3ZpZGVyTmFtZToge1xuICAgIGZvbnRTaXplOiAxOCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gIH0sXG4gIHByb2R1Y3RUeXBlOiB7XG4gICAgZm9udFNpemU6IDE0LFxuICAgIGNvbG9yOiBcIiM3NTc1NzVcIixcbiAgfSxcbiAgc2VjdGlvblRpdGxlOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOiBcIiM0QTkwRTJcIixcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICB9LFxuICBpbnB1dENvbnRhaW5lcjoge1xuICAgIG1hcmdpbkJvdHRvbTogOCxcbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgY29sb3I6IFwiIzIxMjEyMVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjVGNUY1XCIsXG4gICAgcGFkZGluZzogMTAsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICB9LFxuICB0eXBlVG9nZ2xlOiB7XG4gICAgd2lkdGg6IDUwLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0UwRTBFMFwiLFxuICAgIGNvbG9yOiBcIiM3NTc1NzVcIixcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgbWFyZ2luTGVmdDogOCxcbiAgfSxcbiAgYWN0aXZlVG9nZ2xlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM0QTkwRTJcIixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gIH0sXG4gIGZyZXF1ZW5jeUNvbnRhaW5lcjoge1xuICAgIG1hcmdpbkJvdHRvbTogOCxcbiAgfSxcbiAgZnJlcXVlbmN5QnV0dG9uOiB7XG4gICAgZm9udFNpemU6IDE0LFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRTBFMEUwXCIsXG4gICAgY29sb3I6IFwiIzc1NzU3NVwiLFxuICAgIGJvcmRlclJhZGl1czogNSxcbiAgICBtYXJnaW46IDQsXG4gIH0sXG4gIGFjdGl2ZUZyZXF1ZW5jeToge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNEE5MEUyXCIsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICB9LFxuICB2YWxpZGF0aW9uTWVzc2FnZToge1xuICAgIGZvbnRTaXplOiAxMixcbiAgICBjb2xvcjogXCIjRUY1MzUwXCIsXG4gICAgbWFyZ2luVG9wOiA0LFxuICB9LFxuICBzdW1tYXJ5VGV4dDoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gICAgbWFyZ2luQm90dG9tOiA0LFxuICB9LFxuICBjb25maXJtQnV0dG9uOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRjcwNDNcIixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIHBhZGRpbmc6IDE2LFxuICAgIG1hcmdpbjogMTYsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICB9LFxufSk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0XCI7XG5pbXBvcnQgeyBGcmFtZU5hdmlnYXRpb25Qcm9wIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC1uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBNYWluU3RhY2tQYXJhbUxpc3QgfSBmcm9tIFwiLi4vTmF2aWdhdGlvblBhcmFtTGlzdFwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQsIExhYmVsLCBCdXR0b24gfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCI7XG5cbnR5cGUgQ29udHJpYnV0aW9uU3VjY2Vzc1NjcmVlblByb3BzID0ge1xuICBuYXZpZ2F0aW9uOiBGcmFtZU5hdmlnYXRpb25Qcm9wPE1haW5TdGFja1BhcmFtTGlzdCwgXCJDb250cmlidXRpb25TdWNjZXNzXCI+O1xuICByb3V0ZTogeyBcbiAgICBwYXJhbXM6IHsgXG4gICAgICBhbW91bnQ6IHN0cmluZztcbiAgICAgIGZyZXF1ZW5jeTogc3RyaW5nO1xuICAgICAgc3RhcnREYXRlOiBzdHJpbmc7XG4gICAgICBwcm92aWRlcjogc3RyaW5nO1xuICAgICAgcHJvZHVjdFR5cGU6IHN0cmluZztcbiAgICB9IFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRyaWJ1dGlvblN1Y2Nlc3NTY3JlZW4oeyBuYXZpZ2F0aW9uLCByb3V0ZSB9OiBDb250cmlidXRpb25TdWNjZXNzU2NyZWVuUHJvcHMpIHtcbiAgY29uc3QgeyBhbW91bnQsIGZyZXF1ZW5jeSwgc3RhcnREYXRlLCBwcm92aWRlciwgcHJvZHVjdFR5cGUgfSA9IHJvdXRlLnBhcmFtcztcblxuICByZXR1cm4gKFxuICAgIDxzdGFja0xheW91dCBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdWNjZXNzSWNvbn0gdGV4dD1cIuKck1wiIC8+XG4gICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy50aXRsZX0gdGV4dD1cIkNvbnRyaWJ1dGlvbiBTZXQgVXAgU3VjY2Vzc2Z1bGx5IVwiIC8+XG4gICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5tZXNzYWdlfSB0ZXh0PVwiWW91ciBpbnZlc3RtZW50IGNvbnRyaWJ1dGlvbiBoYXMgYmVlbiBjb25maWd1cmVkLlwiIC8+XG4gICAgICBcbiAgICAgIDxzdGFja0xheW91dCBzdHlsZT17c3R5bGVzLnN1bW1hcnlDYXJkfT5cbiAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMuc3VtbWFyeVRpdGxlfSB0ZXh0PVwiQ29udHJpYnV0aW9uIERldGFpbHNcIiAvPlxuICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdW1tYXJ5VGV4dH0gdGV4dD17YFByb3ZpZGVyOiAke3Byb3ZpZGVyfWB9IC8+XG4gICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLnN1bW1hcnlUZXh0fSB0ZXh0PXtgUHJvZHVjdDogJHtwcm9kdWN0VHlwZX1gfSAvPlxuICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdW1tYXJ5VGV4dH0gdGV4dD17YEFtb3VudDogS0VTICR7YW1vdW50fWB9IC8+XG4gICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLnN1bW1hcnlUZXh0fSB0ZXh0PXtgRnJlcXVlbmN5OiAke2ZyZXF1ZW5jeX1gfSAvPlxuICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdW1tYXJ5VGV4dH0gdGV4dD17YFN0YXJ0IERhdGU6ICR7c3RhcnREYXRlfWB9IC8+XG4gICAgICA8L3N0YWNrTGF5b3V0PlxuXG4gICAgICA8YnV0dG9uIFxuICAgICAgICBzdHlsZT17c3R5bGVzLmJ1dHRvbn0gXG4gICAgICAgIHRleHQ9XCJSZXR1cm4gdG8gRGFzaGJvYXJkXCIgXG4gICAgICAgIG9uVGFwPXsoKSA9PiBuYXZpZ2F0aW9uLm5hdmlnYXRlKFwiRGFzaGJvYXJkXCIpfSBcbiAgICAgIC8+XG4gICAgPC9zdGFja0xheW91dD5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBjb250YWluZXI6IHtcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjVGNUY1XCIsXG4gICAgcGFkZGluZzogMjAsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbiAgc3VjY2Vzc0ljb246IHtcbiAgICBmb250U2l6ZTogNzIsXG4gICAgY29sb3I6IFwiIzY2QkI2QVwiLFxuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IDI0LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOiBcIiMyMTIxMjFcIixcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG4gIG1lc3NhZ2U6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgY29sb3I6IFwiIzc1NzU3NVwiLFxuICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgfSxcbiAgc3VtbWFyeUNhcmQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgIHBhZGRpbmc6IDIwLFxuICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgZWxldmF0aW9uOiAzLFxuICB9LFxuICBzdW1tYXJ5VGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTgsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgY29sb3I6IFwiIzRBOTBFMlwiLFxuICAgIG1hcmdpbkJvdHRvbTogMTUsXG4gIH0sXG4gIHN1bW1hcnlUZXh0OiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGNvbG9yOiBcIiMyMTIxMjFcIixcbiAgICBtYXJnaW5Cb3R0b206IDgsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRjcwNDNcIixcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgcGFkZGluZzogMTUsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdFwiO1xuaW1wb3J0IHsgRnJhbWVOYXZpZ2F0aW9uUHJvcCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQtbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgTWFpblN0YWNrUGFyYW1MaXN0IH0gZnJvbSBcIi4uL05hdmlnYXRpb25QYXJhbUxpc3RcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQsIExhYmVsLCBTY3JvbGxWaWV3LCBTdGFja0xheW91dCB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmVcIjtcbmltcG9ydCB7IEFQSV9DT05GSUcsIFRFTkFOVF9JRCB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25CYXIgfSBmcm9tIFwiLi9OYXZpZ2F0aW9uQmFyXCI7XG5cbnR5cGUgRGFzaGJvYXJkU2NyZWVuUHJvcHMgPSB7XG4gIG5hdmlnYXRpb246IEZyYW1lTmF2aWdhdGlvblByb3A8TWFpblN0YWNrUGFyYW1MaXN0LCBcIkRhc2hib2FyZFwiPixcbiAgcm91dGU6IHsgcGFyYW1zOiB7IHVzZXJEYXRhOiBhbnksIHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGFwcEF1dGhUb2tlbjogc3RyaW5nIH0gfVxufTtcblxudHlwZSBUcmFuc2FjdGlvbiA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgZGF0ZTogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBydW5uaW5nQmFsYW5jZTogbnVtYmVyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIERhc2hib2FyZFNjcmVlbih7IG5hdmlnYXRpb24sIHJvdXRlIH06IERhc2hib2FyZFNjcmVlblByb3BzKSB7XG4gIGNvbnN0IHsgdXNlckRhdGEsIHVzZXJuYW1lLCBwYXNzd29yZCwgYXBwQXV0aFRva2VuIH0gPSByb3V0ZS5wYXJhbXM7XG4gIGNvbnN0IFtzYXZpbmdzQWNjb3VudCwgc2V0U2F2aW5nc0FjY291bnRdID0gdXNlU3RhdGU8YW55PihudWxsKTtcbiAgY29uc3QgW3RyYW5zYWN0aW9ucywgc2V0VHJhbnNhY3Rpb25zXSA9IHVzZVN0YXRlPFRyYW5zYWN0aW9uW10+KFtdKTtcblxuICAvLyBBZGQgdGhpcyBmdW5jdGlvbiB0byBnZXQgdGhlIGRpc3BsYXkgbmFtZVxuICBjb25zdCBnZXREaXNwbGF5TmFtZSA9ICgpID0+IHtcbiAgICBpZiAodXNlckRhdGEuZmlyc3ROYW1lKSB7XG4gICAgICByZXR1cm4gdXNlckRhdGEuZmlyc3ROYW1lLnNwbGl0KCcgJylbMF07XG4gICAgfSBlbHNlIGlmICh1c2VyRGF0YS5kaXNwbGF5TmFtZSkge1xuICAgICAgcmV0dXJuIHVzZXJEYXRhLmRpc3BsYXlOYW1lLnNwbGl0KCcgJylbMF07XG4gICAgfSBlbHNlIGlmICh1c2VyRGF0YS5uYW1lKSB7XG4gICAgICByZXR1cm4gdXNlckRhdGEubmFtZS5zcGxpdCgnICcpWzBdO1xuICAgIH0gZWxzZSBpZiAodXNlckRhdGEudXNlcm5hbWUpIHtcbiAgICAgIHJldHVybiB1c2VyRGF0YS51c2VybmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdVc2VyJztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZm9ybWF0QmFsYW5jZSA9IChiYWxhbmNlOiBudW1iZXIgfCB1bmRlZmluZWQpOiBzdHJpbmcgPT4ge1xuICAgIGlmIChiYWxhbmNlID09PSB1bmRlZmluZWQgfHwgaXNOYU4oYmFsYW5jZSkpIHtcbiAgICAgIHJldHVybiBcIktTaCAwLjAwXCI7XG4gICAgfVxuICAgIGNvbnN0IHBhcnRzID0gYmFsYW5jZS50b0ZpeGVkKDIpLnNwbGl0KFwiLlwiKTtcbiAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgICByZXR1cm4gYEtTaCAke3BhcnRzLmpvaW4oXCIuXCIpfWA7XG4gIH07XG5cbiAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlOiBEYXRlKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hTYXZpbmdzQWNjb3VudCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coXCJGZXRjaGluZyBzYXZpbmdzIGFjY291bnQgaW5mb3JtYXRpb24uLi5cIik7XG4gICAgICBjb25zdCBhdXRoSGVhZGVyID0gYEJhc2ljICR7YnRvYShgJHt1c2VybmFtZX06JHtwYXNzd29yZH1gKX1gO1xuICAgICAgY29uc29sZS5sb2coXCJVc2VyIEF1dGhlbnRpY2F0aW9uIFRva2VuOlwiLCBhdXRoSGVhZGVyKTtcblxuICAgICAgY29uc3QgdXJsID0gYCR7QVBJX0NPTkZJRy5CQVNFX1VSTH0ke0FQSV9DT05GSUcuU0VMRl9DTElFTlRTX0VORFBPSU5UfS8ke3VzZXJEYXRhLmlkfS9hY2NvdW50c2A7XG4gICAgICBjb25zb2xlLmxvZyhcIlNhdmluZ3MgYWNjb3VudCBBUEkgVVJMOlwiLCB1cmwpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBhdXRoSGVhZGVyLFxuICAgICAgICAgICdmaW5lcmFjdC1wbGF0Zm9ybS10ZW5hbnRpZCc6IFRFTkFOVF9JRCxcbiAgICAgICAgICAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coXCJTYXZpbmdzIGFjY291bnQgcmVzcG9uc2U6XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcblxuICAgICAgaWYgKGRhdGEuc2F2aW5nc0FjY291bnRzICYmIGRhdGEuc2F2aW5nc0FjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTYXZpbmdzIGFjY291bnQgZm91bmQ6XCIsIGRhdGEuc2F2aW5nc0FjY291bnRzWzBdKTtcbiAgICAgICAgc2V0U2F2aW5nc0FjY291bnQoZGF0YS5zYXZpbmdzQWNjb3VudHNbMF0pO1xuICAgICAgICBmZXRjaFRyYW5zYWN0aW9ucyhkYXRhLnNhdmluZ3NBY2NvdW50c1swXS5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHNhdmluZ3MgYWNjb3VudCBmb3VuZCBmb3IgdGhpcyBjbGllbnQuXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgc2F2aW5ncyBhY2NvdW50OlwiLCBlcnJvcik7XG4gICAgfVxuICB9LCBbdXNlckRhdGEuaWQsIHVzZXJuYW1lLCBwYXNzd29yZF0pO1xuXG4gIGNvbnN0IGZldGNoVHJhbnNhY3Rpb25zID0gdXNlQ2FsbGJhY2soYXN5bmMgKGFjY291bnRJZDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCFhcHBBdXRoVG9rZW4pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJBcHAgYXV0aGVudGljYXRpb24gdG9rZW4gaXMgbm90IGF2YWlsYWJsZS5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IG9uZU1vbnRoQWdvID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSAtIDEsIHRvZGF5LmdldERhdGUoKSk7XG4gICAgICBjb25zdCBmcm9tRGF0ZSA9IGZvcm1hdERhdGUob25lTW9udGhBZ28pO1xuICAgICAgY29uc3QgdG9EYXRlID0gZm9ybWF0RGF0ZSh0b2RheSk7XG5cbiAgICAgIGNvbnN0IHVzZXJBdXRoSGVhZGVyID0gYEJhc2ljICR7YnRvYShgJHt1c2VybmFtZX06JHtwYXNzd29yZH1gKX1gO1xuICAgICAgY29uc29sZS5sb2coXCJVc2VyIEF1dGhlbnRpY2F0aW9uIFRva2VuIGZvciB0cmFuc2FjdGlvbnM6XCIsIHVzZXJBdXRoSGVhZGVyKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQXBwIEF1dGhlbnRpY2F0aW9uIFRva2VuIGZvciB0cmFuc2FjdGlvbnM6XCIsIGFwcEF1dGhUb2tlbik7XG5cbiAgICAgIGNvbnN0IHVybCA9IGAke0FQSV9DT05GSUcuQkFTRV9VUkx9JHtBUElfQ09ORklHLlNBVklOR1NfQUNDT1VOVFNfRU5EUE9JTlR9LyR7YWNjb3VudElkfS90cmFuc2FjdGlvbnMvc2VhcmNoP2Zyb21EYXRlPSR7ZnJvbURhdGV9JnRvRGF0ZT0ke3RvRGF0ZX0mZnJvbVN1Ym1pdHRlZERhdGU9JHtmcm9tRGF0ZX0mdG9TdWJtaXR0ZWREYXRlPSR7dG9EYXRlfSZmcm9tQW1vdW50PTEmdG9BbW91bnQ9NTAwMDAwMDAmdHlwZXM9MSwyLDMsNCwyMCwyMSZvcmRlckJ5PWNyZWF0ZWREYXRlJTJDdHJhbnNhY3Rpb25EYXRlJTJDaWQmc29ydE9yZGVyPURFU0MmZGF0ZUZvcm1hdD15eXl5LU1NLWRkYDtcblxuICAgICAgY29uc29sZS5sb2coXCJGZXRjaGluZyB0cmFuc2FjdGlvbnMgZnJvbSBVUkw6XCIsIHVybCk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCYXNpYyAke2FwcEF1dGhUb2tlbn1gLFxuICAgICAgICAgICdmaW5lcmFjdC1wbGF0Zm9ybS10ZW5hbnRpZCc6IFRFTkFOVF9JRCxcbiAgICAgICAgICAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXNwb25zZVRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkZ1bGwgdHJhbnNhY3Rpb24gcmVzcG9uc2U6XCIsIHJlc3BvbnNlVGV4dCk7XG5cbiAgICAgIGxldCBkYXRhO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KTtcbiAgICAgIH0gY2F0Y2ggKHBhcnNlRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHBhcnNpbmcgSlNPTjpcIiwgcGFyc2VFcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coXCJQYXJzZWQgdHJhbnNhY3Rpb24gZGF0YTpcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikpO1xuXG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLmNvbnRlbnQgJiYgQXJyYXkuaXNBcnJheShkYXRhLmNvbnRlbnQpKSB7XG4gICAgICAgIHNldFRyYW5zYWN0aW9ucyhkYXRhLmNvbnRlbnQubWFwKCh0OiBhbnkpID0+ICh7XG4gICAgICAgICAgaWQ6IHQuaWQsXG4gICAgICAgICAgZGF0ZTogYCR7dC5kYXRlWzBdfS0ke3QuZGF0ZVsxXS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9LSR7dC5kYXRlWzJdLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gLFxuICAgICAgICAgIGFtb3VudDogdC5hbW91bnQsXG4gICAgICAgICAgdHlwZTogdC50cmFuc2FjdGlvblR5cGUudmFsdWUsXG4gICAgICAgICAgZGVzY3JpcHRpb246IHQucGF5bWVudERldGFpbERhdGE/LnBheW1lbnRUeXBlPy5uYW1lIHx8IHQudHJhbnNhY3Rpb25UeXBlLnZhbHVlLFxuICAgICAgICAgIHJ1bm5pbmdCYWxhbmNlOiB0LnJ1bm5pbmdCYWxhbmNlXG4gICAgICAgIH0pKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5leHBlY3RlZCBkYXRhIHN0cnVjdHVyZTpcIiwgZGF0YSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0cmFuc2FjdGlvbnM6XCIsIGVycm9yKTtcbiAgICB9XG4gIH0sIFt1c2VybmFtZSwgcGFzc3dvcmQsIGFwcEF1dGhUb2tlbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hTYXZpbmdzQWNjb3VudCgpO1xuICB9LCBbZmV0Y2hTYXZpbmdzQWNjb3VudF0pO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkxvZ2dpbmcgb3V0Li4uXCIpO1xuICAgIG5hdmlnYXRpb24ubmF2aWdhdGUoXCJMb2dpblwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxncmlkTGF5b3V0IHJvd3M9XCIqLCBhdXRvXCI+XG4gICAgICA8c2Nyb2xsVmlldyByb3c9ezB9PlxuICAgICAgICA8c3RhY2tMYXlvdXQgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxsYWJlbCB0ZXh0PXtgV2VsY29tZSwgJHtnZXREaXNwbGF5TmFtZSgpfSFgfSBzdHlsZT17c3R5bGVzLmhlYWRlclRleHR9IC8+XG5cbiAgICAgICAgICB7LyogU2F2aW5ncyBBY2NvdW50IENhcmQgKi99XG4gICAgICAgICAgPGdyaWRMYXlvdXQgc3R5bGU9e3N0eWxlcy5zYXZpbmdzQ2FyZH0gcm93cz1cImF1dG8sIGF1dG8sIGF1dG9cIiBjb2x1bW5zPVwiKlwiPlxuICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGl0bGV9IHRleHQ9XCJUb3RhbCBQb3J0Zm9saW9cIiAvPlxuICAgICAgICAgICAge3NhdmluZ3NBY2NvdW50ID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxsYWJlbCByb3c9ezF9IHN0eWxlPXtzdHlsZXMuYWNjb3VudE51bWJlcn0gdGV4dD17YEFjY291bnQ6ICR7c2F2aW5nc0FjY291bnQuYWNjb3VudE5vfWB9IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIHJvdz17Mn0gc3R5bGU9e3N0eWxlcy5hY2NvdW50QmFsYW5jZX0gdGV4dD17YEJhbGFuY2U6ICR7Zm9ybWF0QmFsYW5jZShzYXZpbmdzQWNjb3VudC5hY2NvdW50QmFsYW5jZSl9YH0gLz5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8bGFiZWwgcm93PXsxfSBzdHlsZT17c3R5bGVzLm5vQWNjb3VudExhYmVsfSB0ZXh0PVwiTm8gc2F2aW5ncyBhY2NvdW50IGZvdW5kXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9ncmlkTGF5b3V0PlxuXG4gICAgICAgICAgey8qIFRyYW5zYWN0aW9ucyBDYXJkICovfVxuICAgICAgICAgIDxncmlkTGF5b3V0IHN0eWxlPXtzdHlsZXMudHJhbnNhY3Rpb25zQ2FyZH0gcm93cz1cImF1dG8sIGF1dG9cIiBjb2x1bW5zPVwiKlwiPlxuICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gY29sPXswfSB0ZXh0PVwiUmVjZW50IFRyYW5zYWN0aW9uc1wiIHN0eWxlPXtzdHlsZXMudHJhbnNhY3Rpb25zU2VjdGlvblRpdGxlfSAvPlxuICAgICAgICAgICAgPHN0YWNrTGF5b3V0IHJvdz17MX0gY29sPXswfT5cbiAgICAgICAgICAgICAge3RyYW5zYWN0aW9ucy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9ucy5zbGljZSgwLCA1KS5tYXAoKHRyYW5zYWN0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGdyaWRMYXlvdXQga2V5PXt0cmFuc2FjdGlvbi5pZH0gc3R5bGU9e3N0eWxlcy50cmFuc2FjdGlvbkl0ZW19IHJvd3M9XCJhdXRvLCBhdXRvXCIgY29sdW1ucz1cIiosIGF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gY29sPXswfSB0ZXh0PXt0cmFuc2FjdGlvbi5kZXNjcmlwdGlvbn0gc3R5bGU9e3N0eWxlcy50cmFuc2FjdGlvbkRlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgcm93PXswfSBjb2w9ezF9IHRleHQ9e2Zvcm1hdEJhbGFuY2UodHJhbnNhY3Rpb24uYW1vdW50KX0gc3R5bGU9e1tzdHlsZXMudHJhbnNhY3Rpb25BbW91bnQsIHsgY29sb3I6IHRyYW5zYWN0aW9uLnR5cGUgPT09ICdXaXRoZHJhd2FsJyA/IHN0eWxlcy5uZWdhdGl2ZUFtb3VudC5jb2xvciA6IHN0eWxlcy5wb3NpdGl2ZUFtb3VudC5jb2xvciB9XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MX0gY29sPXswfSB0ZXh0PXt0cmFuc2FjdGlvbi5kYXRlfSBzdHlsZT17c3R5bGVzLnRyYW5zYWN0aW9uRGF0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MX0gY29sPXsxfSB0ZXh0PXt0cmFuc2FjdGlvbi50eXBlfSBzdHlsZT17c3R5bGVzLnRyYW5zYWN0aW9uVHlwZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVwiTm8gdHJhbnNhY3Rpb25zIGF2YWlsYWJsZVwiIHN0eWxlPXtzdHlsZXMubm9UcmFuc2FjdGlvbnNMYWJlbH0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgICAgICAgPC9ncmlkTGF5b3V0PlxuXG4gICAgICAgICAgey8qIFF1aWNrIEFjdGlvbnMgQ2FyZCAqL31cbiAgICAgICAgICA8Z3JpZExheW91dCBzdHlsZT17c3R5bGVzLnF1aWNrQWN0aW9uc0NhcmR9IHJvd3M9XCJhdXRvLCBhdXRvXCIgY29sdW1ucz1cIipcIj5cbiAgICAgICAgICAgIDxsYWJlbCByb3c9ezB9IHN0eWxlPXtzdHlsZXMucXVpY2tBY3Rpb25zU2VjdGlvblRpdGxlfSB0ZXh0PVwiUXVpY2sgQWN0aW9uc1wiIC8+XG4gICAgICAgICAgICA8Z3JpZExheW91dCByb3c9ezF9IGNvbHVtbnM9XCIqLCAqLCAqXCIgc3R5bGU9e3N0eWxlcy5xdWlja0FjdGlvbnNDb250YWluZXJ9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNvbD17MH0gc3R5bGU9e1tzdHlsZXMuYWN0aW9uQnV0dG9uLCBzdHlsZXMuaW52ZXN0QnV0dG9uXX0gdGV4dD1cIkludmVzdFwiIG9uVGFwPXsoKSA9PiBuYXZpZ2F0aW9uLm5hdmlnYXRlKFwiSW52ZXN0bWVudHNcIiwgeyB1c2VyRGF0YSB9KX0gLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjb2w9ezF9IHN0eWxlPXtbc3R5bGVzLmFjdGlvbkJ1dHRvbiwgc3R5bGVzLndpdGhkcmF3QnV0dG9uXX0gdGV4dD1cIldpdGhkcmF3XCIgb25UYXA9eygpID0+IG5hdmlnYXRpb24ubmF2aWdhdGUoXCJXaXRoZHJhd1wiKX0gLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjb2w9ezJ9IHN0eWxlPXtbc3R5bGVzLmFjdGlvbkJ1dHRvbiwgc3R5bGVzLmxvYW5CdXR0b25dfSB0ZXh0PVwiTG9hbnNcIiBvblRhcD17KCkgPT4gbmF2aWdhdGlvbi5uYXZpZ2F0ZShcIkxvYW5zXCIsIHsgdXNlckRhdGEgfSl9IC8+XG4gICAgICAgICAgICA8L2dyaWRMYXlvdXQ+XG4gICAgICAgICAgPC9ncmlkTGF5b3V0PlxuXG4gICAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgICA8L3Njcm9sbFZpZXc+XG4gICAgICA8TmF2aWdhdGlvbkJhciBcbiAgICAgICAgcm93PXsxfSBcbiAgICAgICAgYWN0aXZlUm91dGU9XCJEYXNoYm9hcmRcIiBcbiAgICAgICAgbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0gXG4gICAgICAgIHVzZXJEYXRhPXt7Li4udXNlckRhdGEsIHVzZXJuYW1lLCBwYXNzd29yZH19IFxuICAgICAgLz5cbiAgICA8L2dyaWRMYXlvdXQ+XG4gICk7XG59XG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjoge1xuICAgIHBhZGRpbmc6IDIwLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjVGNUY1XCIsXG4gICAgcGFkZGluZ0JvdHRvbTogODAsXG4gIH0sXG4gIGhlYWRlclRleHQ6IHtcbiAgICBmb250U2l6ZTogMjgsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgY29sb3I6IFwiIzMzMzMzM1wiLFxuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gIH0sXG4gIHNhdmluZ3NDYXJkOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM0QTkwRTJcIixcbiAgICBib3JkZXJSYWRpdXM6IDE1LFxuICAgIHBhZGRpbmc6IDIwLFxuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgZWxldmF0aW9uOiA1LFxuICB9LFxuICBzZWN0aW9uVGl0bGU6IHtcbiAgICBmb250U2l6ZTogMjAsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIG1hcmdpbkJvdHRvbTogMTUsXG4gIH0sXG4gIGFjY291bnROdW1iZXI6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgY29sb3I6IFwiI0UwRTBFMFwiLFxuICAgIG1hcmdpbkJvdHRvbTogNSxcbiAgfSxcbiAgYWNjb3VudEJhbGFuY2U6IHtcbiAgICBmb250U2l6ZTogMjgsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICB9LFxuICBub0FjY291bnRMYWJlbDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBjb2xvcjogXCIjRTBFMEUwXCIsXG4gICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgfSxcbiAgdHJhbnNhY3Rpb25zQ2FyZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYm9yZGVyUmFkaXVzOiAxNSxcbiAgICBwYWRkaW5nOiAyMCxcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIGVsZXZhdGlvbjogMyxcbiAgfSxcbiAgdHJhbnNhY3Rpb25zU2VjdGlvblRpdGxlOiB7XG4gICAgZm9udFNpemU6IDIwLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOiBcIiMzMzMzMzNcIixcbiAgICBtYXJnaW5Cb3R0b206IDE1LFxuICB9LFxuICB0cmFuc2FjdGlvbkl0ZW06IHtcbiAgICBtYXJnaW5Cb3R0b206IDE1LFxuICAgIGJvcmRlckJvdHRvbVdpZHRoOiAxLFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBcIiNFMEUwRTBcIixcbiAgICBwYWRkaW5nQm90dG9tOiAxMCxcbiAgfSxcbiAgdHJhbnNhY3Rpb25EZXNjcmlwdGlvbjoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBjb2xvcjogXCIjMzMzMzMzXCIsXG4gIH0sXG4gIHRyYW5zYWN0aW9uQW1vdW50OiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICB9LFxuICBwb3NpdGl2ZUFtb3VudDoge1xuICAgIGNvbG9yOiBcIiM0Q0Q5NjRcIixcbiAgfSxcbiAgbmVnYXRpdmVBbW91bnQ6IHtcbiAgICBjb2xvcjogXCIjRkYzQjMwXCIsXG4gIH0sXG4gIHRyYW5zYWN0aW9uRGF0ZToge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBjb2xvcjogXCIjNzc3Nzc3XCIsXG4gIH0sXG4gIHRyYW5zYWN0aW9uVHlwZToge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBjb2xvcjogXCIjNzc3Nzc3XCIsXG4gIH0sXG4gIG5vVHJhbnNhY3Rpb25zTGFiZWw6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgY29sb3I6IFwiIzc3Nzc3N1wiLFxuICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luVG9wOiAxNSxcbiAgfSxcbiAgcXVpY2tBY3Rpb25zQ2FyZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYm9yZGVyUmFkaXVzOiAxNSxcbiAgICBwYWRkaW5nOiAyMCxcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIGVsZXZhdGlvbjogMyxcbiAgfSxcbiAgcXVpY2tBY3Rpb25zU2VjdGlvblRpdGxlOiB7XG4gICAgZm9udFNpemU6IDIwLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOiBcIiMzMzMzMzNcIixcbiAgICBtYXJnaW5Cb3R0b206IDE1LFxuICB9LFxuICBxdWlja0FjdGlvbnNDb250YWluZXI6IHtcbiAgICBtYXJnaW5Ub3A6IDE1LFxuICB9LFxuICBhY3Rpb25CdXR0b246IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGJvcmRlclJhZGl1czogMjUsIC8vIEluY3JlYXNlZCBib3JkZXIgcmFkaXVzIGZvciBtb3JlIHJvdW5kZWQgY29ybmVyc1xuICAgIHBhZGRpbmc6IDEyLFxuICAgIG1hcmdpbjogNCxcbiAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgIGVsZXZhdGlvbjogMyxcbiAgfSxcbiAgaW52ZXN0QnV0dG9uOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM0Q0FGNTBcIiwgLy8gR3JlZW4gY29sb3IgZm9yIEludmVzdFxuICB9LFxuICB3aXRoZHJhd0J1dHRvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjE5NkYzXCIsIC8vIEJsdWUgY29sb3IgZm9yIFdpdGhkcmF3XG4gIH0sXG4gIGxvYW5CdXR0b246IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQzEwN1wiLCAvLyBBbWJlciBjb2xvciBmb3IgTG9hbnNcbiAgfSxcbn0pO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdFwiO1xuaW1wb3J0IHsgRnJhbWVOYXZpZ2F0aW9uUHJvcCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQtbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgTWFpblN0YWNrUGFyYW1MaXN0IH0gZnJvbSBcIi4uL05hdmlnYXRpb25QYXJhbUxpc3RcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQsIExhYmVsLCBTY3JvbGxWaWV3LCBTdGFja0xheW91dCB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmVcIjtcbmltcG9ydCB7IEFQSV9DT05GSUcsIFRFTkFOVF9JRCwgQVBQX0FVVEggfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQmFyIH0gZnJvbSBcIi4vTmF2aWdhdGlvbkJhclwiO1xuXG50eXBlIEludmVzdG1lbnRzU2NyZWVuUHJvcHMgPSB7XG4gIG5hdmlnYXRpb246IEZyYW1lTmF2aWdhdGlvblByb3A8TWFpblN0YWNrUGFyYW1MaXN0LCBcIkludmVzdG1lbnRzXCI+O1xuICByb3V0ZTogeyBwYXJhbXM6IHsgdXNlckRhdGE6IGFueSB9IH07XG59O1xuXG50eXBlIFNhdmluZ3NQcm9kdWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHNob3J0TmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjdXJyZW5jeToge1xuICAgIGNvZGU6IHN0cmluZztcbiAgICBkaXNwbGF5U3ltYm9sOiBzdHJpbmc7XG4gIH07XG4gIG5vbWluYWxBbm51YWxJbnRlcmVzdFJhdGU6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnZlc3RtZW50c1NjcmVlbih7IG5hdmlnYXRpb24sIHJvdXRlIH06IEludmVzdG1lbnRzU2NyZWVuUHJvcHMpIHtcbiAgY29uc3QgeyB1c2VyRGF0YSB9ID0gcm91dGUucGFyYW1zO1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlPFNhdmluZ3NQcm9kdWN0W10+KFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFNhdmluZ3NQcm9kdWN0cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZmV0Y2hTYXZpbmdzUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgc2F2aW5ncyBwcm9kdWN0cy4uLlwiKTtcbiAgICAgIGNvbnN0IGF1dGhIZWFkZXIgPSBgQmFzaWMgJHtidG9hKGAke0FQUF9BVVRILlVTRVJOQU1FfToke0FQUF9BVVRILlBBU1NXT1JEfWApfWA7XG4gICAgICBjb25zb2xlLmxvZyhcIkFwcCBBdXRoZW50aWNhdGlvbiBUb2tlbjpcIiwgYXV0aEhlYWRlcik7XG5cbiAgICAgIGNvbnN0IHVybCA9IGAke0FQSV9DT05GSUcuQkFTRV9VUkx9JHtBUElfQ09ORklHLlNBVklOR1NfUFJPRFVDVFNfRU5EUE9JTlR9YDtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2F2aW5ncyBwcm9kdWN0cyBBUEkgVVJMOlwiLCB1cmwpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBhdXRoSGVhZGVyLFxuICAgICAgICAgICdmaW5lcmFjdC1wbGF0Zm9ybS10ZW5hbnRpZCc6IFRFTkFOVF9JRCxcbiAgICAgICAgICAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coXCJTYXZpbmdzIHByb2R1Y3RzIHJlc3BvbnNlOlwiLCBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSk7XG5cbiAgICAgIHNldFByb2R1Y3RzKGRhdGEpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBzYXZpbmdzIHByb2R1Y3RzOlwiLCBlcnJvcik7XG4gICAgICBzZXRFcnJvcihcIkZhaWxlZCB0byBsb2FkIHNhdmluZ3MgcHJvZHVjdHMuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVByb2R1Y3RTZWxlY3QgPSAocHJvZHVjdDogU2F2aW5nc1Byb2R1Y3QpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIHByb2R1Y3Q6XCIsIHByb2R1Y3QpO1xuICAgIG5hdmlnYXRpb24ubmF2aWdhdGUoXCJQcm9kdWN0RGV0YWlsc1wiLCB7IHByb2R1Y3QsIHVzZXJEYXRhIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGdyaWRMYXlvdXQgcm93cz1cIiosIGF1dG9cIj5cbiAgICAgIDxncmlkTGF5b3V0IHJvdz17MH0gcm93cz1cImF1dG8sICpcIiBzdHlsZT17c3R5bGVzLm1haW5Db250YWluZXJ9PlxuICAgICAgICA8bGFiZWwgcm93PXswfSB0ZXh0PVwiSW52ZXN0bWVudCBPcHRpb25zXCIgc3R5bGU9e3N0eWxlcy5oZWFkZXJUZXh0fSAvPlxuICAgICAgICA8c2Nyb2xsVmlldyByb3c9ezF9PlxuICAgICAgICAgIDxzdGFja0xheW91dCBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XCJMb2FkaW5nIHByb2R1Y3RzLi4uXCIgc3R5bGU9e3N0eWxlcy5sb2FkaW5nVGV4dH0gLz5cbiAgICAgICAgICAgICkgOiBlcnJvciA/IChcbiAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9e2Vycm9yfSBzdHlsZT17c3R5bGVzLmVycm9yVGV4dH0gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxncmlkTGF5b3V0IFxuICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfSBcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMucHJvZHVjdENhcmR9IFxuICAgICAgICAgICAgICAgICAgcm93cz1cImF1dG8sIGF1dG8sIGF1dG8sIGF1dG9cIiBcbiAgICAgICAgICAgICAgICAgIGNvbHVtbnM9XCIqXCJcbiAgICAgICAgICAgICAgICAgIG9uVGFwPXsoKSA9PiBoYW5kbGVQcm9kdWN0U2VsZWN0KHByb2R1Y3QpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgcm93PXswfSB0ZXh0PXtwcm9kdWN0Lm5hbWV9IHN0eWxlPXtzdHlsZXMucHJvZHVjdE5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgcm93PXsxfSB0ZXh0PXtwcm9kdWN0LmRlc2NyaXB0aW9ufSBzdHlsZT17c3R5bGVzLnByb2R1Y3REZXNjcmlwdGlvbn0gdGV4dFdyYXA9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICA8Z3JpZExheW91dCByb3c9ezJ9IHJvd3M9XCJhdXRvLCBhdXRvXCIgY29sdW1ucz1cIiosICpcIiBzdHlsZT17c3R5bGVzLmRldGFpbHNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgcm93PXswfSBjb2w9ezB9IHRleHQ9XCJJbnRlcmVzdCBSYXRlOlwiIHN0eWxlPXtzdHlsZXMuZGV0YWlsTGFiZWx9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCByb3c9ezB9IGNvbD17MX0gdGV4dD17YCR7cHJvZHVjdC5ub21pbmFsQW5udWFsSW50ZXJlc3RSYXRlfSVgfSBzdHlsZT17c3R5bGVzLmRldGFpbFZhbHVlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgcm93PXsxfSBjb2w9ezB9IHRleHQ9XCJDdXJyZW5jeTpcIiBzdHlsZT17c3R5bGVzLmRldGFpbExhYmVsfSAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgcm93PXsxfSBjb2w9ezF9IHRleHQ9e2Ake3Byb2R1Y3QuY3VycmVuY3kuZGlzcGxheVN5bWJvbH0gJHtwcm9kdWN0LmN1cnJlbmN5LmNvZGV9YH0gc3R5bGU9e3N0eWxlcy5kZXRhaWxWYWx1ZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCByb3c9ezN9IHRleHQ9XCJUYXAgdG8gdmlldyBkZXRhaWxzXCIgc3R5bGU9e3N0eWxlcy50YXBIaW50fSAvPlxuICAgICAgICAgICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zdGFja0xheW91dD5cbiAgICAgICAgPC9zY3JvbGxWaWV3PlxuICAgICAgPC9ncmlkTGF5b3V0PlxuICAgICAgPE5hdmlnYXRpb25CYXIgcm93PXsxfSBhY3RpdmVSb3V0ZT1cIkludmVzdG1lbnRzXCIgbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0gdXNlckRhdGE9e3VzZXJEYXRhfSAvPlxuICAgIDwvZ3JpZExheW91dD5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBtYWluQ29udGFpbmVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGMEY0RjhcIiwgLy8gTGlnaHQgYmx1ZS1ncmF5IGJhY2tncm91bmRcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgcGFkZGluZzogMTYsXG4gIH0sXG4gIGhlYWRlclRleHQ6IHtcbiAgICBmb250U2l6ZTogMjQsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5WZXJ0aWNhbDogMjAsXG4gICAgY29sb3I6IFwiIzJDM0U1MFwiLCAvLyBEYXJrIGJsdWUtZ3JheSBjb2xvciBmb3IgaGVhZGVyXG4gIH0sXG4gIGxvYWRpbmdUZXh0OiB7XG4gICAgZm9udFNpemU6IDE4LFxuICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgY29sb3I6IFwiIzM0NDk1RVwiLCAvLyBEYXJrIGdyYXkgY29sb3IgZm9yIGxvYWRpbmcgdGV4dFxuICB9LFxuICBlcnJvclRleHQ6IHtcbiAgICBmb250U2l6ZTogMTgsXG4gICAgY29sb3I6IFwiI0U3NEMzQ1wiLCAvLyBSZWQgY29sb3IgZm9yIGVycm9yIHRleHRcbiAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICB9LFxuICBwcm9kdWN0Q2FyZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYm9yZGVyUmFkaXVzOiAxNSxcbiAgICBwYWRkaW5nOiAyMCxcbiAgICBtYXJnaW5Cb3R0b206IDE2LFxuICAgIGVsZXZhdGlvbjogNCxcbiAgICBzaGFkb3dDb2xvcjogXCIjMDAwXCIsXG4gICAgc2hhZG93T2Zmc2V0OiB7IHdpZHRoOiAwLCBoZWlnaHQ6IDIgfSxcbiAgICBzaGFkb3dPcGFjaXR5OiAwLjIsXG4gICAgc2hhZG93UmFkaXVzOiA0LFxuICAgIGJvcmRlckNvbG9yOiBcIiNCREMzQzdcIiwgLy8gTGlnaHQgZ3JheSBib3JkZXJcbiAgICBib3JkZXJXaWR0aDogMSxcbiAgfSxcbiAgcHJvZHVjdE5hbWU6IHtcbiAgICBmb250U2l6ZTogMjAsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICBjb2xvcjogXCIjMjk4MEI5XCIsIC8vIEJsdWUgY29sb3IgZm9yIHByb2R1Y3QgbmFtZVxuICB9LFxuICBwcm9kdWN0RGVzY3JpcHRpb246IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgbWFyZ2luQm90dG9tOiAxNSxcbiAgICBjb2xvcjogXCIjMzQ0OTVFXCIsIC8vIERhcmsgZ3JheSBjb2xvciBmb3IgZGVzY3JpcHRpb25cbiAgfSxcbiAgZGV0YWlsc0NvbnRhaW5lcjoge1xuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNFQ0YwRjFcIiwgLy8gVmVyeSBsaWdodCBncmF5IGJhY2tncm91bmQgZm9yIGRldGFpbHNcbiAgICBwYWRkaW5nOiAxMCxcbiAgICBib3JkZXJSYWRpdXM6IDgsXG4gIH0sXG4gIGRldGFpbExhYmVsOiB7XG4gICAgZm9udFNpemU6IDE0LFxuICAgIGNvbG9yOiBcIiM3RjhDOERcIiwgLy8gTWVkaXVtIGdyYXkgY29sb3IgZm9yIGxhYmVsc1xuICAgIHRleHRBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgIG1hcmdpbkJvdHRvbTogNSwgLy8gQWRkIHNvbWUgYm90dG9tIG1hcmdpblxuICB9LFxuICBkZXRhaWxWYWx1ZToge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjMkMzRTUwXCIsIC8vIERhcmsgYmx1ZS1ncmF5IGNvbG9yIGZvciB2YWx1ZXNcbiAgICB0ZXh0QWxpZ25tZW50OiBcInJpZ2h0XCIsXG4gICAgbWFyZ2luQm90dG9tOiA1LCAvLyBBZGQgc29tZSBib3R0b20gbWFyZ2luXG4gIH0sXG4gIHRhcEhpbnQ6IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgY29sb3I6IFwiIzdGOEM4RFwiLCAvLyBNZWRpdW0gZ3JheSBjb2xvciBmb3IgaGludFxuICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgIG1hcmdpblRvcDogMTAsIC8vIEFkZCBzb21lIHRvcCBtYXJnaW5cbiAgfSxcbn0pO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdFwiO1xuaW1wb3J0IHsgRnJhbWVOYXZpZ2F0aW9uUHJvcCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQtbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgTWFpblN0YWNrUGFyYW1MaXN0IH0gZnJvbSBcIi4uL05hdmlnYXRpb25QYXJhbUxpc3RcIjtcbmltcG9ydCB7IFRleHRGaWVsZCwgQnV0dG9uLCBTdGFja0xheW91dCwgTGFiZWwsIEZsZXhib3hMYXlvdXQsIFNjcm9sbFZpZXcgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCI7XG5pbXBvcnQgeyBBUElfQ09ORklHLCBBUFBfQVVUSCwgVEVOQU5UX0lEIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG50eXBlIExvZ2luU2NyZWVuUHJvcHMgPSB7XG4gIG5hdmlnYXRpb246IEZyYW1lTmF2aWdhdGlvblByb3A8TWFpblN0YWNrUGFyYW1MaXN0LCBcIkxvZ2luXCI+LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luU2NyZWVuKHsgbmF2aWdhdGlvbiB9OiBMb2dpblNjcmVlblByb3BzKSB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2dpblN0YXR1cywgc2V0TG9naW5TdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthcHBBdXRoU3RhdHVzLCBzZXRBcHBBdXRoU3RhdHVzXSA9IHVzZVN0YXRlKFwiQ2hlY2tpbmcgYXBwIGF1dGhvcml6YXRpb24uLi5cIik7XG4gIGNvbnN0IFthcHBBdXRoVG9rZW4sIHNldEFwcEF1dGhUb2tlbl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrQXBwQXV0aG9yaXphdGlvbigpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2hlY2tBcHBBdXRob3JpemF0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9DT05GSUcuQkFTRV9VUkx9JHtBUElfQ09ORklHLkFVVEhFTlRJQ0FUSU9OX0VORFBPSU5UfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJhc2ljICR7YnRvYShgJHtBUFBfQVVUSC5VU0VSTkFNRX06JHtBUFBfQVVUSC5QQVNTV09SRH1gKX1gLFxuICAgICAgICAgICdmaW5lcmFjdC1wbGF0Zm9ybS10ZW5hbnRpZCc6IFRFTkFOVF9JRFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdXNlcm5hbWU6IEFQUF9BVVRILlVTRVJOQU1FLFxuICAgICAgICAgIHBhc3N3b3JkOiBBUFBfQVVUSC5QQVNTV09SRFxuICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBpZiAoZGF0YS5hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgIHNldEFwcEF1dGhTdGF0dXMoXCJBcHAgYXV0aG9yaXplZCBzdWNjZXNzZnVsbHlcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXBwIGF1dGhvcml6ZWQuIFRva2VuOlwiLCBkYXRhLmJhc2U2NEVuY29kZWRBdXRoZW50aWNhdGlvbktleSk7XG4gICAgICAgIHNldEFwcEF1dGhUb2tlbihkYXRhLmJhc2U2NEVuY29kZWRBdXRoZW50aWNhdGlvbktleSk7XG4gICAgICAgIGdsb2JhbC5iYXNlNjRFbmNvZGVkQXV0aGVudGljYXRpb25LZXkgPSBkYXRhLmJhc2U2NEVuY29kZWRBdXRoZW50aWNhdGlvbktleTsgLy8gU2V0IGdsb2JhbCB0b2tlblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0QXBwQXV0aFN0YXR1cyhcIkFwcCBhdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJBcHAgYXV0aG9yaXphdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgc2V0QXBwQXV0aFN0YXR1cyhcIk5ldHdvcmsgZXJyb3IuIFBsZWFzZSBjaGVjayB5b3VyIGNvbm5lY3Rpb24gYW5kIHRyeSBhZ2Fpbi5cIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKGNyZWRlbnRpYWxzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbG9naW5BUEkoY3JlZGVudGlhbHMpO1xuICAgICAgZ2xvYmFsLnRva2VuID0gcmVzcG9uc2UudG9rZW47XG4gICAgICBnbG9iYWwudXNlckRhdGEgPSByZXNwb25zZS51c2VyRGF0YTtcbiAgICAgIG5hdmlnYXRpb24ubmF2aWdhdGUoJ1Byb2ZpbGUnLCB7IHVzZXJEYXRhOiByZXNwb25zZS51c2VyRGF0YSB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkxvZ2luIGZhaWxlZDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzY3JvbGxWaWV3PlxuICAgICAgPGZsZXhib3hMYXlvdXQgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8c3RhY2tMYXlvdXQgc3R5bGU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWItOCBmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiIHRleHQ9XCJMb2dpblwiIC8+XG4gICAgICAgICAgPGxhYmVsIHRleHQ9e2FwcEF1dGhTdGF0dXN9IHN0eWxlPXtzdHlsZXMuYXBwQXV0aFN0YXR1c30gLz5cbiAgICAgICAgICA8dGV4dEZpZWxkXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgaGludD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgIHRleHQ9e3VzZXJuYW1lfVxuICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXsoYXJncykgPT4gc2V0VXNlcm5hbWUoYXJncy5vYmplY3QudGV4dCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dEZpZWxkXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgaGludD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIHRleHQ9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgc2VjdXJlPXt0cnVlfVxuICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXsoYXJncykgPT4gc2V0UGFzc3dvcmQoYXJncy5vYmplY3QudGV4dCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICAgIHRleHQ9e2lzTG9hZGluZyA/IFwiTG9nZ2luZyBpbi4uLlwiIDogXCJMb2dpblwifVxuICAgICAgICAgICAgb25UYXA9e2hhbmRsZUxvZ2lufVxuICAgICAgICAgICAgaXNFbmFibGVkPXshaXNMb2FkaW5nfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5zaWdudXBCdXR0b259XG4gICAgICAgICAgICB0ZXh0PVwiU2lnbiBVcFwiXG4gICAgICAgICAgICBvblRhcD17KCkgPT4gbmF2aWdhdGlvbi5uYXZpZ2F0ZShcIlNpZ251cFwiKX1cbiAgICAgICAgICAgIGlzRW5hYmxlZD17IWlzTG9hZGluZ31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgc3R5bGU9e1tcbiAgICAgICAgICAgICAgc3R5bGVzLnN0YXR1c0xhYmVsLFxuICAgICAgICAgICAgICB7IGNvbG9yOiBsb2dpblN0YXR1cy5pbmNsdWRlcyhcInN1Y2Nlc3NmdWxcIikgPyBcIiM1MEUzQzJcIiA6IFwiI0ZGNzA0M1wiIH1cbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB0ZXh0PXtsb2dpblN0YXR1c31cbiAgICAgICAgICAvPlxuICAgICAgICA8L3N0YWNrTGF5b3V0PlxuICAgICAgPC9mbGV4Ym94TGF5b3V0PlxuICAgIDwvc2Nyb2xsVmlldz5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBjb250YWluZXI6IHtcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM0QTkwRTJcIlxuICB9LFxuICBjb250ZW50OiB7XG4gICAgd2lkdGg6IFwiODAlXCIsXG4gICAgYWxpZ25TZWxmOiBcImNlbnRlclwiXG4gIH0sXG4gIGlucHV0OiB7XG4gICAgZm9udFNpemU6IDE4LFxuICAgIGNvbG9yOiBcIiMyMTIxMjFcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGJvcmRlclJhZGl1czogNSxcbiAgICBtYXJnaW5Cb3R0b206IDE1LFxuICAgIHBhZGRpbmc6IDEwXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGZvbnRTaXplOiAxOCxcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMyOUI2RjZcIixcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgcGFkZGluZzogMTAsXG4gICAgbWFyZ2luQm90dG9tOiAxNVxuICB9LFxuICBzaWdudXBCdXR0b246IHtcbiAgICBmb250U2l6ZTogMTgsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNTBFM0MyXCIsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIHBhZGRpbmc6IDEwLFxuICAgIG1hcmdpbkJvdHRvbTogMTVcbiAgfSxcbiAgc3RhdHVzTGFiZWw6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIlxuICB9LFxuICBhcHBBdXRoU3RhdHVzOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gIH0sXG59KTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbnRhaW5lciB9IGZyb20gXCJAcmVhY3QtbmF2aWdhdGlvbi9uYXRpdmVcIjtcbmltcG9ydCB7IGNyZWF0ZU5hdGl2ZVN0YWNrTmF2aWdhdG9yIH0gZnJvbSBcIkByZWFjdC1uYXZpZ2F0aW9uL25hdGl2ZS1zdGFja1wiO1xuaW1wb3J0IHsgTG9naW5TY3JlZW4gfSBmcm9tIFwiLi9Mb2dpblNjcmVlblwiO1xuaW1wb3J0IHsgUHJvZmlsZVNjcmVlbiB9IGZyb20gXCIuL1Byb2ZpbGVTY3JlZW5cIjtcbmltcG9ydCB7IFNpZ251cFNjcmVlbiB9IGZyb20gXCIuL1NpZ251cFNjcmVlblwiO1xuaW1wb3J0IHsgU2lnbnVwU3VjY2Vzc1NjcmVlbiB9IGZyb20gXCIuL1NpZ251cFN1Y2Nlc3NTY3JlZW5cIjtcbmltcG9ydCB7IERhc2hib2FyZFNjcmVlbiB9IGZyb20gXCIuL0Rhc2hib2FyZFNjcmVlblwiO1xuaW1wb3J0IHsgSW52ZXN0bWVudHNTY3JlZW4gfSBmcm9tIFwiLi9JbnZlc3RtZW50c1NjcmVlblwiO1xuaW1wb3J0IHsgUHJvZHVjdHNTY3JlZW4gfSBmcm9tIFwiLi9Qcm9kdWN0c1NjcmVlblwiO1xuaW1wb3J0IHsgQ29udHJpYnV0aW9uU2NyZWVuIH0gZnJvbSBcIi4vQ29udHJpYnV0aW9uU2NyZWVuXCI7XG5pbXBvcnQgeyBDb250cmlidXRpb25TdWNjZXNzU2NyZWVuIH0gZnJvbSBcIi4vQ29udHJpYnV0aW9uU3VjY2Vzc1NjcmVlblwiO1xuaW1wb3J0IHsgV2l0aGRyYXdTY3JlZW4gfSBmcm9tIFwiLi9XaXRoZHJhd1NjcmVlblwiO1xuaW1wb3J0IHsgV2l0aGRyYXdTdWNjZXNzU2NyZWVuIH0gZnJvbSBcIi4vV2l0aGRyYXdTdWNjZXNzU2NyZWVuXCI7XG5pbXBvcnQgeyBQb3J0Zm9saW9TY3JlZW4gfSBmcm9tIFwiLi9Qb3J0Zm9saW9TY3JlZW5cIjtcblxuY29uc3QgU3RhY2sgPSBjcmVhdGVOYXRpdmVTdGFja05hdmlnYXRvcigpO1xuXG5leHBvcnQgY29uc3QgTWFpblN0YWNrOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TmF2aWdhdGlvbkNvbnRhaW5lcj5cbiAgICAgIDxTdGFjay5OYXZpZ2F0b3IgaW5pdGlhbFJvdXRlTmFtZT1cIkxvZ2luXCI+XG4gICAgICAgIDxTdGFjay5TY3JlZW4gbmFtZT1cIkxvZ2luXCIgY29tcG9uZW50PXtMb2dpblNjcmVlbn0gLz5cbiAgICAgICAgPFN0YWNrLlNjcmVlbiBuYW1lPVwiUHJvZmlsZVwiIGNvbXBvbmVudD17UHJvZmlsZVNjcmVlbn0gLz5cbiAgICAgICAgPFN0YWNrLlNjcmVlbiBuYW1lPVwiU2lnbnVwXCIgY29tcG9uZW50PXtTaWdudXBTY3JlZW59IC8+XG4gICAgICAgIDxTdGFjay5TY3JlZW4gbmFtZT1cIlNpZ251cFN1Y2Nlc3NcIiBjb21wb25lbnQ9e1NpZ251cFN1Y2Nlc3NTY3JlZW59IC8+XG4gICAgICAgIDxTdGFjay5TY3JlZW4gXG4gICAgICAgICAgbmFtZT1cIkRhc2hib2FyZFwiIFxuICAgICAgICAgIGNvbXBvbmVudD17RGFzaGJvYXJkU2NyZWVufVxuICAgICAgICAgIGluaXRpYWxQYXJhbXM9e3sgdXNlckRhdGE6IG51bGwgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPFN0YWNrLlNjcmVlbiBcbiAgICAgICAgICBuYW1lPVwiUG9ydGZvbGlvXCIgXG4gICAgICAgICAgY29tcG9uZW50PXtQb3J0Zm9saW9TY3JlZW59XG4gICAgICAgICAgaW5pdGlhbFBhcmFtcz17eyB1c2VyRGF0YTogbnVsbCB9fVxuICAgICAgICAvPlxuICAgICAgICA8U3RhY2suU2NyZWVuIFxuICAgICAgICAgIG5hbWU9XCJJbnZlc3RtZW50c1wiIFxuICAgICAgICAgIGNvbXBvbmVudD17SW52ZXN0bWVudHNTY3JlZW59XG4gICAgICAgICAgaW5pdGlhbFBhcmFtcz17eyB1c2VyRGF0YTogbnVsbCB9fVxuICAgICAgICAvPlxuICAgICAgICA8U3RhY2suU2NyZWVuIG5hbWU9XCJDb250cmlidXRpb25cIiBjb21wb25lbnQ9e0NvbnRyaWJ1dGlvblNjcmVlbn0gLz5cbiAgICAgICAgPFN0YWNrLlNjcmVlbiBuYW1lPVwiQ29udHJpYnV0aW9uU3VjY2Vzc1wiIGNvbXBvbmVudD17Q29udHJpYnV0aW9uU3VjY2Vzc1NjcmVlbn0gLz5cbiAgICAgICAgPFN0YWNrLlNjcmVlbiBuYW1lPVwiV2l0aGRyYXdcIiBjb21wb25lbnQ9e1dpdGhkcmF3U2NyZWVufSAvPlxuICAgICAgICA8U3RhY2suU2NyZWVuIG5hbWU9XCJXaXRoZHJhd1N1Y2Nlc3NcIiBjb21wb25lbnQ9e1dpdGhkcmF3U3VjY2Vzc1NjcmVlbn0gLz5cbiAgICAgIDwvU3RhY2suTmF2aWdhdG9yPlxuICAgIDwvTmF2aWdhdGlvbkNvbnRhaW5lcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0XCI7XG5pbXBvcnQgeyBGbGV4Ym94TGF5b3V0LCBTdGFja0xheW91dCwgTGFiZWwgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCI7XG5pbXBvcnQgeyBGcmFtZU5hdmlnYXRpb25Qcm9wIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC1uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBNYWluU3RhY2tQYXJhbUxpc3QgfSBmcm9tIFwiLi4vTmF2aWdhdGlvblBhcmFtTGlzdFwiO1xuXG50eXBlIE5hdmlnYXRpb25CYXJQcm9wcyA9IHtcbiAgYWN0aXZlUm91dGU6IGtleW9mIE1haW5TdGFja1BhcmFtTGlzdDtcbiAgbmF2aWdhdGlvbjogRnJhbWVOYXZpZ2F0aW9uUHJvcDxNYWluU3RhY2tQYXJhbUxpc3QsIGtleW9mIE1haW5TdGFja1BhcmFtTGlzdD47XG4gIHJvdz86IG51bWJlciB8IHN0cmluZztcbiAgdXNlckRhdGE6IGFueTtcbn07XG5cbmNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgeyBuYW1lOiAnSG9tZScsIHJvdXRlOiAnRGFzaGJvYXJkJyB9LFxuICB7IG5hbWU6ICdNeSBQb3J0Zm9saW8nLCByb3V0ZTogJ1BvcnRmb2xpbycgfSxcbiAgeyBuYW1lOiAnSW52ZXN0Jywgcm91dGU6ICdJbnZlc3RtZW50cycgfSxcbiAgeyBuYW1lOiAnTXkgUHJvZmlsZScsIHJvdXRlOiAnUHJvZmlsZScgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBOYXZpZ2F0aW9uQmFyKHsgYWN0aXZlUm91dGUsIG5hdmlnYXRpb24sIHJvdywgdXNlckRhdGEgfTogTmF2aWdhdGlvbkJhclByb3BzKSB7XG4gIGNvbnN0IGhhbmRsZU5hdmlnYXRpb24gPSAocm91dGU6IGtleW9mIE1haW5TdGFja1BhcmFtTGlzdCkgPT4ge1xuICAgIGlmIChyb3V0ZSAhPT0gYWN0aXZlUm91dGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTmF2aWdhdGluZyB0bzpcIiwgcm91dGUpO1xuICAgICAgY29uc29sZS5sb2coXCJ1c2VyRGF0YSBiZWluZyBwYXNzZWQ6XCIsIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhLCBudWxsLCAyKSk7XG4gICAgICBpZiAocm91dGUgPT09ICdQcm9maWxlJyB8fCByb3V0ZSA9PT0gJ1BvcnRmb2xpbycpIHtcbiAgICAgICAgbmF2aWdhdGlvbi5uYXZpZ2F0ZShyb3V0ZSwgeyBcbiAgICAgICAgICB1c2VyRGF0YSwgXG4gICAgICAgICAgdXNlcm5hbWU6IHVzZXJEYXRhPy51c2VybmFtZSwgLy8gTWFrZSBzdXJlIHRoZXNlIHByb3BlcnRpZXMgZXhpc3QgaW4gdXNlckRhdGFcbiAgICAgICAgICBwYXNzd29yZDogdXNlckRhdGE/LnBhc3N3b3JkICAvLyBNYWtlIHN1cmUgdGhlc2UgcHJvcGVydGllcyBleGlzdCBpbiB1c2VyRGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdmlnYXRpb24ubmF2aWdhdGUocm91dGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmbGV4Ym94TGF5b3V0IHJvdz17cm93fSBzdHlsZT17c3R5bGVzLm1lbnVCYXJ9PlxuICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW0ubmFtZX0+XG4gICAgICAgICAge2luZGV4ID4gMCAmJiA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zZXBhcmF0b3J9IC8+fVxuICAgICAgICAgIDxzdGFja0xheW91dFxuICAgICAgICAgICAgc3R5bGU9e1tcbiAgICAgICAgICAgICAgc3R5bGVzLm1lbnVJdGVtLCBcbiAgICAgICAgICAgICAgYWN0aXZlUm91dGUgPT09IGl0ZW0ucm91dGUgJiYgc3R5bGVzLmFjdGl2ZU1lbnVJdGVtXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgb25UYXA9eygpID0+IGhhbmRsZU5hdmlnYXRpb24oaXRlbS5yb3V0ZSBhcyBrZXlvZiBNYWluU3RhY2tQYXJhbUxpc3QpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgdGV4dD17aXRlbS5uYW1lfSBcbiAgICAgICAgICAgICAgc3R5bGU9e1tcbiAgICAgICAgICAgICAgICBzdHlsZXMubWVudUxhYmVsLFxuICAgICAgICAgICAgICAgIGFjdGl2ZVJvdXRlID09PSBpdGVtLnJvdXRlICYmIHN0eWxlcy5hY3RpdmVNZW51TGFiZWxcbiAgICAgICAgICAgICAgXX0gXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApKX1cbiAgICA8L2ZsZXhib3hMYXlvdXQ+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgbWVudUJhcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgaGVpZ2h0OiA2MCxcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxuICAgIGJvcmRlclRvcFdpZHRoOiAxLFxuICAgIGJvcmRlclRvcENvbG9yOiBcIiNFMEUwRTBcIixcbiAgfSxcbiAgbWVudUl0ZW06IHtcbiAgICBmbGV4OiAxLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG4gIGFjdGl2ZU1lbnVJdGVtOiB7XG4gICAgYm9yZGVyVG9wV2lkdGg6IDIsXG4gICAgYm9yZGVyVG9wQ29sb3I6IFwiIzAwN0FGRlwiLFxuICB9LFxuICBtZW51TGFiZWw6IHtcbiAgICBmb250U2l6ZTogMTIsXG4gICAgY29sb3I6IFwiIzc1NzU3NVwiLFxuICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG4gIGFjdGl2ZU1lbnVMYWJlbDoge1xuICAgIGNvbG9yOiBcIiMwMDdBRkZcIixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgfSxcbiAgc2VwYXJhdG9yOiB7XG4gICAgd2lkdGg6IDEsXG4gICAgaGVpZ2h0OiBcIjYwJVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRTBFMEUwXCIsXG4gIH0sXG59KTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHRcIjtcbmltcG9ydCB7IEZyYW1lTmF2aWdhdGlvblByb3AgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0LW5hdmlnYXRpb25cIjtcbmltcG9ydCB7IE1haW5TdGFja1BhcmFtTGlzdCB9IGZyb20gXCIuLi9OYXZpZ2F0aW9uUGFyYW1MaXN0XCI7XG5pbXBvcnQgeyBTY3JvbGxWaWV3LCBTdGFja0xheW91dCwgTGFiZWwsIEdyaWRMYXlvdXQsIEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkJhciB9IGZyb20gXCIuL05hdmlnYXRpb25CYXJcIjtcbmltcG9ydCB7IEFQSV9DT05GSUcsIFRFTkFOVF9JRCB9IGZyb20gXCIuLi9jb25maWdcIjtcblxudHlwZSBQb3J0Zm9saW9TY3JlZW5Qcm9wcyA9IHtcbiAgbmF2aWdhdGlvbjogRnJhbWVOYXZpZ2F0aW9uUHJvcDxNYWluU3RhY2tQYXJhbUxpc3QsIFwiUG9ydGZvbGlvXCI+LFxuICByb3V0ZTogeyBwYXJhbXM6IHsgdXNlckRhdGE6IGFueSwgdXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyB9IH1cbn07XG5cbnR5cGUgU2F2aW5nc0FjY291bnQgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHByb2R1Y3ROYW1lOiBzdHJpbmc7XG4gIGFjY291bnRCYWxhbmNlOiBudW1iZXI7XG4gIGN1cnJlbmN5OiB7XG4gICAgZGlzcGxheVN5bWJvbDogc3RyaW5nO1xuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBvcnRmb2xpb1NjcmVlbih7IG5hdmlnYXRpb24sIHJvdXRlIH06IFBvcnRmb2xpb1NjcmVlblByb3BzKSB7XG4gIGNvbnNvbGUubG9nKFwiUG9ydGZvbGlvU2NyZWVuIHJlbmRlcmVkLiBSb3V0ZSBwYXJhbXM6XCIsIEpTT04uc3RyaW5naWZ5KHJvdXRlLnBhcmFtcywgbnVsbCwgMikpO1xuICBcbiAgY29uc3QgeyB1c2VyRGF0YSwgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSByb3V0ZS5wYXJhbXMgfHwge307XG4gIGNvbnN0IFthY2NvdW50cywgc2V0QWNjb3VudHNdID0gdXNlU3RhdGU8U2F2aW5nc0FjY291bnRbXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiUG9ydGZvbGlvU2NyZWVuIHVzZUVmZmVjdCB0cmlnZ2VyZWRcIik7XG4gICAgaWYgKHVzZXJEYXRhICYmIHVzZXJEYXRhLmlkICYmIHVzZXJuYW1lICYmIHBhc3N3b3JkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInVzZXJEYXRhIGlzIHZhbGlkLCBmZXRjaGluZyBhY2NvdW50c1wiKTtcbiAgICAgIGZldGNoQWNjb3VudHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgdXNlckRhdGEgb3IgbWlzc2luZyBjcmVkZW50aWFsczpcIiwgeyB1c2VyRGF0YSwgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xuICAgICAgc2V0RXJyb3IoXCJVc2VyIGRhdGEgb3IgY3JlZGVudGlhbHMgYXJlIG1pc3Npbmcgb3IgaW52YWxpZC4gUGxlYXNlIGxvZyBpbiBhZ2Fpbi5cIik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFt1c2VyRGF0YSwgdXNlcm5hbWUsIHBhc3N3b3JkXSk7XG5cbiAgY29uc3QgZmV0Y2hBY2NvdW50cyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coXCJGZXRjaGluZyBhY2NvdW50cy4uLlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBJRDpcIiwgdXNlckRhdGEuaWQpO1xuICAgICAgY29uc29sZS5sb2coXCJVc2VybmFtZTpcIiwgdXNlcm5hbWUpO1xuICAgICAgY29uc29sZS5sb2coXCJQYXNzd29yZDpcIiwgcGFzc3dvcmQgPyBcIioqKioqKioqXCIgOiBcIk5vdCBwcm92aWRlZFwiKTtcblxuICAgICAgY29uc3QgYXV0aEhlYWRlciA9IGBCYXNpYyAke2J0b2EoYCR7dXNlcm5hbWV9OiR7cGFzc3dvcmR9YCl9YDtcbiAgICAgIGNvbnNvbGUubG9nKFwiQXV0aCBoZWFkZXI6XCIsIGF1dGhIZWFkZXIpO1xuXG4gICAgICBjb25zdCB1cmwgPSBgJHtBUElfQ09ORklHLkJBU0VfVVJMfSR7QVBJX0NPTkZJRy5TRUxGX0NMSUVOVFNfRU5EUE9JTlR9LyR7dXNlckRhdGEuaWR9L2FjY291bnRzYDtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgZnJvbSBVUkw6XCIsIHVybCk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGF1dGhIZWFkZXIsXG4gICAgICAgICAgJ2ZpbmVyYWN0LXBsYXRmb3JtLXRlbmFudGlkJzogVEVOQU5UX0lELFxuICAgICAgICAgICdhY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc2Ugc3RhdHVzOlwiLCByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgY29uc29sZS5sb2coXCJSZXNwb25zZSBoZWFkZXJzOlwiLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5oZWFkZXJzLCBudWxsLCAyKSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlIGRhdGE6XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcblxuICAgICAgaWYgKGRhdGEuc2F2aW5nc0FjY291bnRzICYmIEFycmF5LmlzQXJyYXkoZGF0YS5zYXZpbmdzQWNjb3VudHMpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2F2aW5ncyBhY2NvdW50cyBmb3VuZDpcIiwgZGF0YS5zYXZpbmdzQWNjb3VudHMubGVuZ3RoKTtcbiAgICAgICAgc2V0QWNjb3VudHMoZGF0YS5zYXZpbmdzQWNjb3VudHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlVuZXhwZWN0ZWQgZGF0YSBzdHJ1Y3R1cmU6XCIsIGRhdGEpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIGRhdGEgc3RydWN0dXJlXCIpO1xuICAgICAgfVxuXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBhY2NvdW50czpcIiwgZXJyKTtcbiAgICAgIHNldEVycm9yKGBGYWlsZWQgdG8gbG9hZCBwb3J0Zm9saW8gZGF0YS4gRXJyb3I6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAoYW1vdW50OiBudW1iZXIsIHN5bWJvbDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGAke3N5bWJvbH0gJHthbW91bnQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIil9YDtcbiAgfTtcblxuICBjb25zdCBjYWxjdWxhdGVUb3RhbEludmVzdG1lbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGFjY291bnRzLnJlZHVjZSgodG90YWwsIGFjY291bnQpID0+IHRvdGFsICsgYWNjb3VudC5hY2NvdW50QmFsYW5jZSwgMCk7XG4gIH07XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGdyaWRMYXlvdXQgcm93cz1cIiosIGF1dG9cIj5cbiAgICAgICAgPGFjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9e3RydWV9IHJvdz17MH0gLz5cbiAgICAgICAgPE5hdmlnYXRpb25CYXIgcm93PXsxfSBhY3RpdmVSb3V0ZT1cIlBvcnRmb2xpb1wiIG5hdmlnYXRpb249e25hdmlnYXRpb259IHVzZXJEYXRhPXt1c2VyRGF0YX0gLz5cbiAgICAgIDwvZ3JpZExheW91dD5cbiAgICApO1xuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxncmlkTGF5b3V0IHJvd3M9XCIqLCBhdXRvXCI+XG4gICAgICAgIDxsYWJlbCB0ZXh0PXtlcnJvcn0gcm93PXswfSBzdHlsZT17c3R5bGVzLmVycm9yVGV4dH0gLz5cbiAgICAgICAgPE5hdmlnYXRpb25CYXIgcm93PXsxfSBhY3RpdmVSb3V0ZT1cIlBvcnRmb2xpb1wiIG5hdmlnYXRpb249e25hdmlnYXRpb259IHVzZXJEYXRhPXt1c2VyRGF0YX0gLz5cbiAgICAgIDwvZ3JpZExheW91dD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Z3JpZExheW91dCByb3dzPVwiKiwgYXV0b1wiPlxuICAgICAgPHNjcm9sbFZpZXcgcm93PXswfT5cbiAgICAgICAgPHN0YWNrTGF5b3V0IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8bGFiZWwgdGV4dD1cIk15IFBvcnRmb2xpb1wiIHN0eWxlPXtzdHlsZXMuaGVhZGVyVGV4dH0gLz5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogVG90YWwgSW52ZXN0bWVudCBDYXJkICovfVxuICAgICAgICAgIDxncmlkTGF5b3V0IHN0eWxlPXtzdHlsZXMuY2FyZH0gcm93cz1cImF1dG8sIGF1dG9cIiBjb2x1bW5zPVwiKlwiPlxuICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gdGV4dD1cIlRvdGFsIEludmVzdG1lbnRcIiBzdHlsZT17c3R5bGVzLnNlY3Rpb25UaXRsZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCByb3c9ezF9IHRleHQ9e2Zvcm1hdEN1cnJlbmN5KGNhbGN1bGF0ZVRvdGFsSW52ZXN0bWVudCgpLCBhY2NvdW50c1swXT8uY3VycmVuY3kuZGlzcGxheVN5bWJvbCB8fCAnS1NoJyl9IHN0eWxlPXtzdHlsZXMudG90YWxJbnZlc3RtZW50fSAvPlxuICAgICAgICAgIDwvZ3JpZExheW91dD5cblxuICAgICAgICAgIHsvKiBJbnZlc3RtZW50IEJyZWFrZG93biAqL31cbiAgICAgICAgICA8bGFiZWwgdGV4dD1cIkludmVzdG1lbnQgQnJlYWtkb3duXCIgc3R5bGU9e3N0eWxlcy5icmVha2Rvd25UaXRsZX0gLz5cbiAgICAgICAgICBcbiAgICAgICAgICB7YWNjb3VudHMubWFwKChhY2NvdW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGdyaWRMYXlvdXQga2V5PXtpbmRleH0gc3R5bGU9e3N0eWxlcy5jYXJkfSByb3dzPVwiYXV0bywgYXV0bywgYXV0bywgYXV0b1wiIGNvbHVtbnM9XCIqLCBhdXRvXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCByb3c9ezB9IGNvbD17MH0gdGV4dD17YWNjb3VudC5wcm9kdWN0TmFtZX0gc3R5bGU9e3N0eWxlcy5wcm9kdWN0TmFtZX0gLz5cbiAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gY29sPXsxfSB0ZXh0PXthY2NvdW50LmFjY291bnROb30gc3R5bGU9e3N0eWxlcy5hY2NvdW50TnVtYmVyfSAvPlxuICAgICAgICAgICAgICA8bGFiZWwgcm93PXsxfSBjb2xTcGFuPXsyfSB0ZXh0PXtmb3JtYXRDdXJyZW5jeShhY2NvdW50LmFjY291bnRCYWxhbmNlLCBhY2NvdW50LmN1cnJlbmN5LmRpc3BsYXlTeW1ib2wpfSBzdHlsZT17c3R5bGVzLmFjY291bnRCYWxhbmNlfSAvPlxuICAgICAgICAgICAgICA8bGFiZWwgcm93PXsyfSBjb2xTcGFuPXsyfSB0ZXh0PXtgU3RhdHVzOiAke2FjY291bnQuc3RhdHVzLnZhbHVlfWB9IHN0eWxlPXtzdHlsZXMuYWNjb3VudFN0YXR1c30gLz5cbiAgICAgICAgICAgICAgPGxhYmVsIHJvdz17M30gY29sU3Bhbj17Mn0gdGV4dD17YExhc3QgVHJhbnNhY3Rpb246ICR7YWNjb3VudC5sYXN0QWN0aXZlVHJhbnNhY3Rpb25EYXRlLmpvaW4oJy0nKX1gfSBzdHlsZT17c3R5bGVzLmxhc3RUcmFuc2FjdGlvbn0gLz5cbiAgICAgICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zdGFja0xheW91dD5cbiAgICAgIDwvc2Nyb2xsVmlldz5cbiAgICAgIDxOYXZpZ2F0aW9uQmFyIHJvdz17MX0gYWN0aXZlUm91dGU9XCJQb3J0Zm9saW9cIiBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSB1c2VyRGF0YT17dXNlckRhdGF9IC8+XG4gICAgPC9ncmlkTGF5b3V0PlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjoge1xuICAgIHBhZGRpbmc6IDE2LFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjVGNUY1XCIsXG4gIH0sXG4gIGhlYWRlclRleHQ6IHtcbiAgICBmb250U2l6ZTogMjQsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgY29sb3I6IFwiIzIxMjEyMVwiLFxuICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luQm90dG9tOiAxNixcbiAgfSxcbiAgY2FyZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgIHBhZGRpbmc6IDE2LFxuICAgIG1hcmdpbkJvdHRvbTogMTYsXG4gICAgZWxldmF0aW9uOiAyLFxuICB9LFxuICBzZWN0aW9uVGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTgsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgY29sb3I6IFwiIzIxMjEyMVwiLFxuICAgIG1hcmdpbkJvdHRvbTogOCxcbiAgfSxcbiAgdG90YWxJbnZlc3RtZW50OiB7XG4gICAgZm9udFNpemU6IDI0LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOiBcIiM0Q0FGNTBcIixcbiAgfSxcbiAgYnJlYWtkb3duVGl0bGU6IHtcbiAgICBmb250U2l6ZTogMjAsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgY29sb3I6IFwiIzIxMjEyMVwiLFxuICAgIG1hcmdpblRvcDogMTYsXG4gICAgbWFyZ2luQm90dG9tOiA4LFxuICB9LFxuICBwcm9kdWN0TmFtZToge1xuICAgIGZvbnRTaXplOiAxOCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gIH0sXG4gIGFjY291bnROdW1iZXI6IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgY29sb3I6IFwiIzc1NzU3NVwiLFxuICAgIHRleHRBbGlnbm1lbnQ6IFwicmlnaHRcIixcbiAgfSxcbiAgYWNjb3VudEJhbGFuY2U6IHtcbiAgICBmb250U2l6ZTogMjAsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgY29sb3I6IFwiIzRDQUY1MFwiLFxuICAgIG1hcmdpblRvcDogOCxcbiAgfSxcbiAgYWNjb3VudFN0YXR1czoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBjb2xvcjogXCIjNzU3NTc1XCIsXG4gICAgbWFyZ2luVG9wOiA0LFxuICB9LFxuICBsYXN0VHJhbnNhY3Rpb246IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgY29sb3I6IFwiIzc1NzU3NVwiLFxuICAgIG1hcmdpblRvcDogNCxcbiAgfSxcbiAgZXJyb3JUZXh0OiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGNvbG9yOiBcInJlZFwiLFxuICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG59KTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHRcIjtcbmltcG9ydCB7IEZyYW1lTmF2aWdhdGlvblByb3AgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0LW5hdmlnYXRpb25cIjtcbmltcG9ydCB7IE1haW5TdGFja1BhcmFtTGlzdCB9IGZyb20gXCIuLi9OYXZpZ2F0aW9uUGFyYW1MaXN0XCI7XG5pbXBvcnQgeyBTY3JvbGxWaWV3LCBTdGFja0xheW91dCwgTGFiZWwsIEdyaWRMYXlvdXQsIEJ1dHRvbiwgVGV4dEZpZWxkIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkJhciB9IGZyb20gXCIuL05hdmlnYXRpb25CYXJcIjtcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuLi9jb250ZXh0L1VzZXJDb250ZXh0JztcblxudHlwZSBQcm9maWxlU2NyZWVuUHJvcHMgPSB7XG4gIG5hdmlnYXRpb246IEZyYW1lTmF2aWdhdGlvblByb3A8TWFpblN0YWNrUGFyYW1MaXN0LCBcIlByb2ZpbGVcIj4sXG4gIHJvdXRlOiB7IHBhcmFtcz86IHsgdXNlckRhdGE6IGFueSB9IH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9maWxlU2NyZWVuKHsgbmF2aWdhdGlvbiwgcm91dGUgfTogUHJvZmlsZVNjcmVlblByb3BzKSB7XG4gIGNvbnN0IHsgdXNlckRhdGEsIHNldFVzZXJEYXRhIH0gPSB1c2VVc2VyKCk7XG5cbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2VkaXRlZFVzZXJEYXRhLCBzZXRFZGl0ZWRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgZGlzcGxheU5hbWU6ICcnLFxuICAgIGVtYWlsQWRkcmVzczogJycsXG4gICAgbW9iaWxlTm86ICcnLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoVXNlckRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50VXNlckRhdGEgPSByb3V0ZS5wYXJhbXM/LnVzZXJEYXRhIHx8IGdsb2JhbC51c2VyRGF0YSB8fCB7fTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCB1c2VyIGRhdGE6XCIsIGN1cnJlbnRVc2VyRGF0YSk7XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhjdXJyZW50VXNlckRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgZGF0YSBpcyBlbXB0eSwgYXR0ZW1wdGluZyB0byBmZXRjaCBmcm9tIEFQSVwiKTtcbiAgICAgICAgLy8gSGVyZSB5b3Ugd291bGQgdHlwaWNhbGx5IG1ha2UgYW4gQVBJIGNhbGwgdG8gZmV0Y2ggdGhlIHVzZXIgZGF0YVxuICAgICAgICAvLyBGb3Igbm93LCB3ZSdsbCBqdXN0IHVzZSBzb21lIGR1bW15IGRhdGFcbiAgICAgICAgY29uc3QgZHVtbXlEYXRhID0ge1xuICAgICAgICAgIGRpc3BsYXlOYW1lOiAnSm9obiBEb2UnLFxuICAgICAgICAgIGVtYWlsQWRkcmVzczogJ2pvaG5AZXhhbXBsZS5jb20nLFxuICAgICAgICAgIG1vYmlsZU5vOiAnMTIzNDU2Nzg5MCcsXG4gICAgICAgICAgYWNjb3VudE5vOiAnQUNDMTIzNDU2JyxcbiAgICAgICAgfTtcbiAgICAgICAgc2V0VXNlckRhdGEoZHVtbXlEYXRhKTtcbiAgICAgICAgc2V0RWRpdGVkVXNlckRhdGEoe1xuICAgICAgICAgIGRpc3BsYXlOYW1lOiBkdW1teURhdGEuZGlzcGxheU5hbWUsXG4gICAgICAgICAgZW1haWxBZGRyZXNzOiBkdW1teURhdGEuZW1haWxBZGRyZXNzLFxuICAgICAgICAgIG1vYmlsZU5vOiBkdW1teURhdGEubW9iaWxlTm8sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VXNlckRhdGEoY3VycmVudFVzZXJEYXRhKTtcbiAgICAgICAgc2V0RWRpdGVkVXNlckRhdGEoe1xuICAgICAgICAgIGRpc3BsYXlOYW1lOiBjdXJyZW50VXNlckRhdGEuZGlzcGxheU5hbWUgfHwgJycsXG4gICAgICAgICAgZW1haWxBZGRyZXNzOiBjdXJyZW50VXNlckRhdGEuZW1haWxBZGRyZXNzIHx8ICcnLFxuICAgICAgICAgIG1vYmlsZU5vOiBjdXJyZW50VXNlckRhdGEubW9iaWxlTm8gfHwgJycsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaFVzZXJEYXRhKCk7XG4gIH0sIFtyb3V0ZS5wYXJhbXM/LnVzZXJEYXRhLCBzZXRVc2VyRGF0YV0pO1xuXG4gIGNvbnN0IGhhbmRsZUVkaXQgPSAoKSA9PiB7XG4gICAgc2V0SXNFZGl0aW5nKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTYXZpbmcgdXNlciBkYXRhOlwiLCBlZGl0ZWRVc2VyRGF0YSk7XG4gICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICBzZXRVc2VyRGF0YSh7IC4uLnVzZXJEYXRhLCAuLi5lZGl0ZWRVc2VyRGF0YSB9KTtcbiAgICB9XG4gICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcbiAgICBpZiAoZ2xvYmFsLnVzZXJEYXRhKSB7XG4gICAgICBnbG9iYWwudXNlckRhdGEgPSB7IC4uLmdsb2JhbC51c2VyRGF0YSwgLi4uZWRpdGVkVXNlckRhdGEgfTtcbiAgICB9XG4gICAgLy8gSGVyZSB5b3Ugd291bGQgdHlwaWNhbGx5IG1ha2UgYW4gQVBJIGNhbGwgdG8gdXBkYXRlIHRoZSB1c2VyIGRhdGFcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcbiAgICBpZiAodXNlckRhdGEpIHtcbiAgICAgIHNldEVkaXRlZFVzZXJEYXRhKHtcbiAgICAgICAgZGlzcGxheU5hbWU6IHVzZXJEYXRhLmRpc3BsYXlOYW1lIHx8ICcnLFxuICAgICAgICBlbWFpbEFkZHJlc3M6IHVzZXJEYXRhLmVtYWlsQWRkcmVzcyB8fCAnJyxcbiAgICAgICAgbW9iaWxlTm86IHVzZXJEYXRhLm1vYmlsZU5vIHx8ICcnLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkxvZ2dpbmcgb3V0XCIpO1xuICAgIGdsb2JhbC50b2tlbiA9IG51bGw7XG4gICAgZ2xvYmFsLnVzZXJEYXRhID0gbnVsbDtcbiAgICBzZXRVc2VyRGF0YShudWxsKTtcbiAgICBuYXZpZ2F0aW9uLnJlc2V0KHtcbiAgICAgIGluZGV4OiAwLFxuICAgICAgcm91dGVzOiBbeyBuYW1lOiAnTG9naW4nIH1dLFxuICAgIH0pO1xuICB9O1xuXG4gIGlmICghdXNlckRhdGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHN0YWNrTGF5b3V0IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGxhYmVsIHRleHQ9XCJMb2FkaW5nIHVzZXIgZGF0YS4uLlwiIHN0eWxlPXtzdHlsZXMuaGVhZGVyVGV4dH0gLz5cbiAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGdyaWRMYXlvdXQgcm93cz1cIiosIGF1dG9cIj5cbiAgICAgIDxzY3JvbGxWaWV3IHJvdz17MH0+XG4gICAgICAgIDxzdGFja0xheW91dCBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGxhYmVsIHRleHQ9XCJQcm9maWxlXCIgc3R5bGU9e3N0eWxlcy5oZWFkZXJUZXh0fSAvPlxuICAgICAgICAgIFxuICAgICAgICAgIDxncmlkTGF5b3V0IHN0eWxlPXtzdHlsZXMuY2FyZH0gcm93cz1cImF1dG8sIGF1dG8sIGF1dG8sIGF1dG8sIGF1dG9cIiBjb2x1bW5zPVwiYXV0bywgKlwiPlxuICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gY29sPXswfSBzdHlsZT17c3R5bGVzLmxhYmVsfSB0ZXh0PVwiTmFtZTpcIiAvPlxuICAgICAgICAgICAge2lzRWRpdGluZyA/IChcbiAgICAgICAgICAgICAgPHRleHRGaWVsZCByb3c9ezB9IGNvbD17MX0gc3R5bGU9e3N0eWxlcy5pbnB1dH0gXG4gICAgICAgICAgICAgICAgdGV4dD17eyB2YWx1ZTogZWRpdGVkVXNlckRhdGEuZGlzcGxheU5hbWUgfX1cbiAgICAgICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhhcmdzKSA9PiBzZXRFZGl0ZWRVc2VyRGF0YSh7Li4uZWRpdGVkVXNlckRhdGEsIGRpc3BsYXlOYW1lOiBhcmdzLm9iamVjdC50ZXh0fSl9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8bGFiZWwgcm93PXswfSBjb2w9ezF9IHN0eWxlPXtzdHlsZXMudmFsdWV9IHRleHQ9e3VzZXJEYXRhLmRpc3BsYXlOYW1lfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGxhYmVsIHJvdz17MX0gY29sPXswfSBzdHlsZT17c3R5bGVzLmxhYmVsfSB0ZXh0PVwiRW1haWw6XCIgLz5cbiAgICAgICAgICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICAgICAgICAgIDx0ZXh0RmllbGQgcm93PXsxfSBjb2w9ezF9IHN0eWxlPXtzdHlsZXMuaW5wdXR9IFxuICAgICAgICAgICAgICAgIHRleHQ9e3sgdmFsdWU6IGVkaXRlZFVzZXJEYXRhLmVtYWlsQWRkcmVzcyB9fVxuICAgICAgICAgICAgICAgIG9uVGV4dENoYW5nZT17KGFyZ3MpID0+IHNldEVkaXRlZFVzZXJEYXRhKHsuLi5lZGl0ZWRVc2VyRGF0YSwgZW1haWxBZGRyZXNzOiBhcmdzLm9iamVjdC50ZXh0fSl9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8bGFiZWwgcm93PXsxfSBjb2w9ezF9IHN0eWxlPXtzdHlsZXMudmFsdWV9IHRleHQ9e3VzZXJEYXRhLmVtYWlsQWRkcmVzc30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxsYWJlbCByb3c9ezJ9IGNvbD17MH0gc3R5bGU9e3N0eWxlcy5sYWJlbH0gdGV4dD1cIk1vYmlsZTpcIiAvPlxuICAgICAgICAgICAge2lzRWRpdGluZyA/IChcbiAgICAgICAgICAgICAgPHRleHRGaWVsZCByb3c9ezJ9IGNvbD17MX0gc3R5bGU9e3N0eWxlcy5pbnB1dH0gXG4gICAgICAgICAgICAgICAgdGV4dD17eyB2YWx1ZTogZWRpdGVkVXNlckRhdGEubW9iaWxlTm8gfX1cbiAgICAgICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhhcmdzKSA9PiBzZXRFZGl0ZWRVc2VyRGF0YSh7Li4uZWRpdGVkVXNlckRhdGEsIG1vYmlsZU5vOiBhcmdzLm9iamVjdC50ZXh0fSl9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8bGFiZWwgcm93PXsyfSBjb2w9ezF9IHN0eWxlPXtzdHlsZXMudmFsdWV9IHRleHQ9e3VzZXJEYXRhLm1vYmlsZU5vfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGxhYmVsIHJvdz17M30gY29sPXswfSBzdHlsZT17c3R5bGVzLmxhYmVsfSB0ZXh0PVwiQWNjb3VudCBObzpcIiAvPlxuICAgICAgICAgICAgPGxhYmVsIHJvdz17M30gY29sPXsxfSBzdHlsZT17c3R5bGVzLnZhbHVlfSB0ZXh0PXt1c2VyRGF0YS5hY2NvdW50Tm99IC8+XG4gICAgICAgICAgPC9ncmlkTGF5b3V0PlxuXG4gICAgICAgICAge2lzRWRpdGluZyA/IChcbiAgICAgICAgICAgIDxzdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBzdHlsZT17c3R5bGVzLmJ1dHRvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5zYXZlQnV0dG9ufSB0ZXh0PVwiU2F2ZVwiIG9uVGFwPXtoYW5kbGVTYXZlfSAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuY2FuY2VsQnV0dG9ufSB0ZXh0PVwiQ2FuY2VsXCIgb25UYXA9e2hhbmRsZUNhbmNlbH0gLz5cbiAgICAgICAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5lZGl0QnV0dG9ufSB0ZXh0PVwiRWRpdCBQcm9maWxlXCIgb25UYXA9e2hhbmRsZUVkaXR9IC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5sb2dvdXRCdXR0b259IHRleHQ9XCJMb2dvdXRcIiBvblRhcD17aGFuZGxlTG9nb3V0fSAvPlxuICAgICAgICA8L3N0YWNrTGF5b3V0PlxuICAgICAgPC9zY3JvbGxWaWV3PlxuICAgICAgPE5hdmlnYXRpb25CYXIgcm93PXsxfSBhY3RpdmVSb3V0ZT1cIlByb2ZpbGVcIiBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSB1c2VyRGF0YT17dXNlckRhdGF9IC8+XG4gICAgPC9ncmlkTGF5b3V0PlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjoge1xuICAgIHBhZGRpbmc6IDIwLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjVGNUY1XCIsXG4gICAgcGFkZGluZ0JvdHRvbTogODAsXG4gIH0sXG4gIGhlYWRlclRleHQ6IHtcbiAgICBmb250U2l6ZTogMjQsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgY29sb3I6IFwiIzIxMjEyMVwiLFxuICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICBwYWRkaW5nOiAxNSxcbiAgICBtYXJnaW5Cb3R0b206IDE1LFxuICAgIGVsZXZhdGlvbjogMyxcbiAgfSxcbiAgbGFiZWw6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgY29sb3I6IFwiIzc1NzU3NVwiLFxuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICB9LFxuICB2YWx1ZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgfSxcbiAgbG9nb3V0QnV0dG9uOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRjcwNDNcIixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGJvcmRlclJhZGl1czogNSxcbiAgICBwYWRkaW5nOiAxMCxcbiAgICBtYXJnaW5Ub3A6IDIwLFxuICB9LFxuICBuYXZCYXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGhlaWdodDogNjAsXG4gICAgYm9yZGVyVG9wV2lkdGg6IDEsXG4gICAgYm9yZGVyVG9wQ29sb3I6IFwiI0U2RjNGRlwiLFxuICB9LFxuICBuYXZJdGVtOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgY29sb3I6IFwiIzRBOTBFMlwiLFxuICAgIGZvbnRTaXplOiAxMCxcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgfSxcbiAgYWN0aXZlTmF2SXRlbToge1xuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGNzA0M1wiLCAvLyBDaGFuZ2VkIHRvIG9yYW5nZVxuICAgIGJvcmRlclJhZGl1czogNSxcbiAgICBtYXJnaW46IDUsXG4gIH0sXG4gIGlucHV0OiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGNvbG9yOiBcIiMyMTIxMjFcIixcbiAgICBib3JkZXJXaWR0aDogMSxcbiAgICBib3JkZXJDb2xvcjogXCIjRTBFMEUwXCIsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIHBhZGRpbmc6IDUsXG4gIH0sXG4gIGVkaXRCdXR0b246IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzRBOTBFMlwiLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIHBhZGRpbmc6IDEwLFxuICAgIG1hcmdpblRvcDogMjAsXG4gIH0sXG4gIHNhdmVCdXR0b246IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzRDQUY1MFwiLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIHBhZGRpbmc6IDEwLFxuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgfSxcbiAgY2FuY2VsQnV0dG9uOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGNDQzMzZcIixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGJvcmRlclJhZGl1czogNSxcbiAgICBwYWRkaW5nOiAxMCxcbiAgfSxcbiAgYnV0dG9uQ29udGFpbmVyOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luVG9wOiAyMCxcbiAgfSxcbn0pO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHRcIjtcbmltcG9ydCB7IEZyYW1lTmF2aWdhdGlvblByb3AgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0LW5hdmlnYXRpb25cIjtcbmltcG9ydCB7IE1haW5TdGFja1BhcmFtTGlzdCB9IGZyb20gXCIuLi9OYXZpZ2F0aW9uUGFyYW1MaXN0XCI7XG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiwgU3RhY2tMYXlvdXQsIExhYmVsLCBGbGV4Ym94TGF5b3V0LCBTY3JvbGxWaWV3IH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuaW1wb3J0IHsgQVBJX0NPTkZJRyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxudHlwZSBTaWdudXBTY3JlZW5Qcm9wcyA9IHtcbiAgbmF2aWdhdGlvbjogRnJhbWVOYXZpZ2F0aW9uUHJvcDxNYWluU3RhY2tQYXJhbUxpc3QsIFwiU2lnbnVwXCI+LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpZ251cFNjcmVlbih7IG5hdmlnYXRpb24gfTogU2lnbnVwU2NyZWVuUHJvcHMpIHtcbiAgY29uc3QgW2ZpcnN0bmFtZSwgc2V0Rmlyc3RuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGFzdG5hbWUsIHNldExhc3RuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbW9iaWxlTm8sIHNldE1vYmlsZU5vXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVwZWF0UGFzc3dvcmQsIHNldFJlcGVhdFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1wbG95ZXJJZCwgc2V0RW1wbG95ZXJJZF0gPSB1c2VTdGF0ZShcIlwiKTsgLy8gTmV3IHN0YXRlIGZvciBlbXBsb3llciBJRFxuICBjb25zdCBbc2lnbnVwU3RhdHVzLCBzZXRTaWdudXBTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlOiBEYXRlKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgbW9udGhOYW1lcyA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsXG4gICAgICBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXG4gICAgXTtcbiAgICBjb25zdCBtb250aCA9IG1vbnRoTmFtZXNbZGF0ZS5nZXRNb250aCgpXTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBgJHtkYXl9ICR7bW9udGh9ICR7eWVhcn1gO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNpZ251cCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIHNpZ251cCBwcm9jZXNzLi4uXCIpO1xuICAgIFxuICAgIGlmIChwYXNzd29yZCAhPT0gcmVwZWF0UGFzc3dvcmQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2lnbnVwIGZhaWxlZDogUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiKTtcbiAgICAgIHNldFNpZ251cFN0YXR1cyhcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFlbXBsb3llcklkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlNpZ251cCBmYWlsZWQ6IEVtcGxveWVyIElEIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgc2V0U2lnbnVwU3RhdHVzKFwiRW1wbG95ZXIgSUQgaXMgcmVxdWlyZWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFnbG9iYWwuYmFzZTY0RW5jb2RlZEF1dGhlbnRpY2F0aW9uS2V5KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkFwcCBhdXRoZW50aWNhdGlvbiB0b2tlbiBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgZW5zdXJlIHRoZSBhcHAgaXMgcHJvcGVybHkgYXV0aGVudGljYXRlZC5cIik7XG4gICAgICBzZXRTaWdudXBTdGF0dXMoXCJBcHAgYXV0aGVudGljYXRpb24gZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIHNldFNpZ251cFN0YXR1cyhcIkNyZWF0aW5nIGFjY291bnQuLi5cIik7XG4gICAgY29uc29sZS5sb2coXCJJbml0aWF0aW5nIGFjY291bnQgY3JlYXRpb24uLi5cIik7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGZvcm1hdERhdGUodG9kYXkpO1xuICAgICAgY29uc29sZS5sb2coYEZvcm1hdHRlZCBkYXRlIGZvciBBUEkgY2FsbHM6ICR7Zm9ybWF0dGVkRGF0ZX1gKTtcblxuICAgICAgLy8gRmlyc3QgQVBJIGNhbGwgdG8gY3JlYXRlIGEgY2xpZW50XG4gICAgICBjb25zdCBjbGllbnRSZXF1ZXN0Qm9keSA9IHtcbiAgICAgICAgZmlyc3RuYW1lLFxuICAgICAgICBsYXN0bmFtZSxcbiAgICAgICAgZW1haWxBZGRyZXNzOiBlbWFpbCxcbiAgICAgICAgbW9iaWxlTm8sXG4gICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQgTU1NTSB5eXl5XCIsXG4gICAgICAgIGxvY2FsZTogXCJlblwiLFxuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIGFjdGl2YXRpb25EYXRlOiBmb3JtYXR0ZWREYXRlLFxuICAgICAgICBvZmZpY2VJZDogcGFyc2VJbnQoZW1wbG95ZXJJZCwgMTApLFxuICAgICAgICBsZWdhbEZvcm1JZDogMVxuICAgICAgfTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2xpZW50IGNyZWF0aW9uIHJlcXVlc3QgYm9keTpcIiwgSlNPTi5zdHJpbmdpZnkoY2xpZW50UmVxdWVzdEJvZHksIG51bGwsIDIpKTtcblxuICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGNsaWVudCBjcmVhdGlvbiByZXF1ZXN0Li4uXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJVc2luZyBBcHAgQXV0aGVudGljYXRpb24gVG9rZW46XCIsIGdsb2JhbC5iYXNlNjRFbmNvZGVkQXV0aGVudGljYXRpb25LZXkpO1xuICAgICAgY29uc3QgY2xpZW50UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQ09ORklHLkJBU0VfVVJMfS9maW5lcmFjdC1wcm92aWRlci9hcGkvdjEvY2xpZW50c2AsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJhc2ljICR7Z2xvYmFsLmJhc2U2NEVuY29kZWRBdXRoZW50aWNhdGlvbktleX1gLFxuICAgICAgICAgICdmaW5lcmFjdC1wbGF0Zm9ybS10ZW5hbnRpZCc6ICdkZWZhdWx0J1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjbGllbnRSZXF1ZXN0Qm9keSlcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjbGllbnREYXRhID0gYXdhaXQgY2xpZW50UmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coXCJDbGllbnQgY3JlYXRpb24gcmVzcG9uc2U6XCIsIEpTT04uc3RyaW5naWZ5KGNsaWVudERhdGEsIG51bGwsIDIpKTtcblxuICAgICAgaWYgKGNsaWVudERhdGEuY2xpZW50SWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coYENsaWVudCBjcmVhdGVkIHN1Y2Nlc3NmdWxseS4gQ2xpZW50IElEOiAke2NsaWVudERhdGEuY2xpZW50SWR9YCk7XG5cbiAgICAgICAgLy8gU2Vjb25kIEFQSSBjYWxsIHRvIGNyZWF0ZSBhIHVzZXJcbiAgICAgICAgY29uc3QgdXNlclJlcXVlc3RCb2R5ID0ge1xuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgIGZpcnN0bmFtZSxcbiAgICAgICAgICBsYXN0bmFtZSxcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBvZmZpY2VJZDogcGFyc2VJbnQoZW1wbG95ZXJJZCwgMTApLFxuICAgICAgICAgIHBhc3N3b3JkTmV2ZXJFeHBpcmVzOiB0cnVlLFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgIHJlcGVhdFBhc3N3b3JkLFxuICAgICAgICAgIGlzU2VsZlNlcnZpY2VVc2VyOiB0cnVlLFxuICAgICAgICAgIGNsaWVudHM6IFtjbGllbnREYXRhLmNsaWVudElkXSxcbiAgICAgICAgICByb2xlczogWzEsIDJdLFxuICAgICAgICAgIHNlbmRQYXNzd29yZFRvRW1haWw6IGZhbHNlLFxuICAgICAgICAgIHN0YWZmSWQ6IDFcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGNyZWF0aW9uIHJlcXVlc3QgYm9keTpcIiwgSlNPTi5zdHJpbmdpZnkodXNlclJlcXVlc3RCb2R5LCBudWxsLCAyKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIHVzZXIgY3JlYXRpb24gcmVxdWVzdC4uLlwiKTtcbiAgICAgICAgY29uc3QgdXNlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0NPTkZJRy5CQVNFX1VSTH0vZmluZXJhY3QtcHJvdmlkZXIvYXBpL3YxL3VzZXJzYCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCYXNpYyAke2dsb2JhbC5iYXNlNjRFbmNvZGVkQXV0aGVudGljYXRpb25LZXl9YCxcbiAgICAgICAgICAgICdmaW5lcmFjdC1wbGF0Zm9ybS10ZW5hbnRpZCc6ICdkZWZhdWx0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlclJlcXVlc3RCb2R5KVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IHVzZXJSZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBjcmVhdGlvbiByZXNwb25zZTpcIiwgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEsIG51bGwsIDIpKTtcblxuICAgICAgICBpZiAodXNlckRhdGEucmVzb3VyY2VJZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBVc2VyIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LiBVc2VyIElEOiAke3VzZXJEYXRhLnJlc291cmNlSWR9YCk7XG5cbiAgICAgICAgICAvLyBUaGlyZCBBUEkgY2FsbCB0byBjcmVhdGUgYSBzYXZpbmdzIGFjY291bnRcbiAgICAgICAgICBjb25zdCBzYXZpbmdzQWNjb3VudFJlcXVlc3RCb2R5ID0ge1xuICAgICAgICAgICAgY2xpZW50SWQ6IGNsaWVudERhdGEuY2xpZW50SWQsXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkIE1NTU0geXl5eVwiLFxuICAgICAgICAgICAgZXh0ZXJuYWxJZDogYCR7Y2xpZW50RGF0YS5jbGllbnRJZH0tJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgICBsb2NhbGU6IFwiZW5cIixcbiAgICAgICAgICAgIHByb2R1Y3RJZDogMSxcbiAgICAgICAgICAgIHN1Ym1pdHRlZE9uRGF0ZTogZm9ybWF0RGF0ZShuZXcgRGF0ZSgpKVxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc29sZS5sb2coXCJTYXZpbmdzIGFjY291bnQgY3JlYXRpb24gcmVxdWVzdCBib2R5OlwiLCBKU09OLnN0cmluZ2lmeShzYXZpbmdzQWNjb3VudFJlcXVlc3RCb2R5LCBudWxsLCAyKSk7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgc2F2aW5ncyBhY2NvdW50IGNyZWF0aW9uIHJlcXVlc3QuLi5cIik7XG4gICAgICAgICAgY29uc3Qgc2F2aW5nc0FjY291bnRSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9DT05GSUcuQkFTRV9VUkx9L2ZpbmVyYWN0LXByb3ZpZGVyL2FwaS92MS9zYXZpbmdzYWNjb3VudHNgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmFzaWMgJHtnbG9iYWwuYmFzZTY0RW5jb2RlZEF1dGhlbnRpY2F0aW9uS2V5fWAsXG4gICAgICAgICAgICAgICdmaW5lcmFjdC1wbGF0Zm9ybS10ZW5hbnRpZCc6ICdkZWZhdWx0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHNhdmluZ3NBY2NvdW50UmVxdWVzdEJvZHkpXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCBzYXZpbmdzQWNjb3VudERhdGEgPSBhd2FpdCBzYXZpbmdzQWNjb3VudFJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNhdmluZ3MgYWNjb3VudCBjcmVhdGlvbiByZXNwb25zZTpcIiwgSlNPTi5zdHJpbmdpZnkoc2F2aW5nc0FjY291bnREYXRhLCBudWxsLCAyKSk7XG5cbiAgICAgICAgICBpZiAoc2F2aW5nc0FjY291bnREYXRhLnNhdmluZ3NJZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFNhdmluZ3MgYWNjb3VudCBjcmVhdGVkIHN1Y2Nlc3NmdWxseS4gU2F2aW5ncyBBY2NvdW50IElEOiAke3NhdmluZ3NBY2NvdW50RGF0YS5zYXZpbmdzSWR9YCk7XG5cbiAgICAgICAgICAgIC8vIEFwcHJvdmUgdGhlIHNhdmluZ3MgYWNjb3VudFxuICAgICAgICAgICAgY29uc3QgYXBwcm92ZVJlcXVlc3RCb2R5ID0ge1xuICAgICAgICAgICAgICBsb2NhbGU6IFwiZW5cIixcbiAgICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZCBNTU1NIHl5eXlcIixcbiAgICAgICAgICAgICAgYXBwcm92ZWRPbkRhdGU6IGZvcm1hdHRlZERhdGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFwcHJvdmluZyBzYXZpbmdzIGFjY291bnQuLi5cIik7XG4gICAgICAgICAgICBjb25zdCBhcHByb3ZlUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQ09ORklHLkJBU0VfVVJMfS9maW5lcmFjdC1wcm92aWRlci9hcGkvdjEvc2F2aW5nc2FjY291bnRzLyR7c2F2aW5nc0FjY291bnREYXRhLnNhdmluZ3NJZH0/Y29tbWFuZD1hcHByb3ZlYCwge1xuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmFzaWMgJHtnbG9iYWwuYmFzZTY0RW5jb2RlZEF1dGhlbnRpY2F0aW9uS2V5fWAsXG4gICAgICAgICAgICAgICAgJ2ZpbmVyYWN0LXBsYXRmb3JtLXRlbmFudGlkJzogJ2RlZmF1bHQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGFwcHJvdmVSZXF1ZXN0Qm9keSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBhcHByb3ZlRGF0YSA9IGF3YWl0IGFwcHJvdmVSZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNhdmluZ3MgYWNjb3VudCBhcHByb3ZhbCByZXNwb25zZTpcIiwgSlNPTi5zdHJpbmdpZnkoYXBwcm92ZURhdGEsIG51bGwsIDIpKTtcblxuICAgICAgICAgICAgaWYgKGFwcHJvdmVEYXRhLmNoYW5nZXMgJiYgYXBwcm92ZURhdGEuY2hhbmdlcy5zdGF0dXMuYXBwcm92ZWQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTYXZpbmdzIGFjY291bnQgYXBwcm92ZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcblxuICAgICAgICAgICAgICAvLyBBY3RpdmF0ZSB0aGUgc2F2aW5ncyBhY2NvdW50XG4gICAgICAgICAgICAgIGNvbnN0IGFjdGl2YXRlUmVxdWVzdEJvZHkgPSB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBcImVuXCIsXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZCBNTU1NIHl5eXlcIixcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZWRPbkRhdGU6IGZvcm1hdHRlZERhdGVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBY3RpdmF0aW5nIHNhdmluZ3MgYWNjb3VudC4uLlwiKTtcbiAgICAgICAgICAgICAgY29uc3QgYWN0aXZhdGVSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9DT05GSUcuQkFTRV9VUkx9L2ZpbmVyYWN0LXByb3ZpZGVyL2FwaS92MS9zYXZpbmdzYWNjb3VudHMvJHtzYXZpbmdzQWNjb3VudERhdGEuc2F2aW5nc0lkfT9jb21tYW5kPWFjdGl2YXRlYCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCYXNpYyAke2dsb2JhbC5iYXNlNjRFbmNvZGVkQXV0aGVudGljYXRpb25LZXl9YCxcbiAgICAgICAgICAgICAgICAgICdmaW5lcmFjdC1wbGF0Zm9ybS10ZW5hbnRpZCc6ICdkZWZhdWx0J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYWN0aXZhdGVSZXF1ZXN0Qm9keSlcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY29uc3QgYWN0aXZhdGVEYXRhID0gYXdhaXQgYWN0aXZhdGVSZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2F2aW5ncyBhY2NvdW50IGFjdGl2YXRpb24gcmVzcG9uc2U6XCIsIEpTT04uc3RyaW5naWZ5KGFjdGl2YXRlRGF0YSwgbnVsbCwgMikpO1xuXG4gICAgICAgICAgICAgIGlmIChhY3RpdmF0ZURhdGEuY2hhbmdlcyAmJiBhY3RpdmF0ZURhdGEuY2hhbmdlcy5zdGF0dXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTYXZpbmdzIGFjY291bnQgYWN0aXZhdGVkIHN1Y2Nlc3NmdWxseS5cIik7XG4gICAgICAgICAgICAgICAgc2V0U2lnbnVwU3RhdHVzKFwiU2lnbnVwIHN1Y2Nlc3NmdWxcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOYXZpZ2F0aW5nIHRvIFNpZ251cFN1Y2Nlc3Mgc2NyZWVuLi4uXCIpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRpb24ubmF2aWdhdGUoXCJTaWdudXBTdWNjZXNzXCIsIHsgXG4gICAgICAgICAgICAgICAgICBjbGllbnRJZDogY2xpZW50RGF0YS5jbGllbnRJZCxcbiAgICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICBzYXZpbmdzQWNjb3VudElkOiBzYXZpbmdzQWNjb3VudERhdGEuc2F2aW5nc0lkLFxuICAgICAgICAgICAgICAgICAgYWNjb3VudEFjdGl2ZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2F2aW5ncyBhY2NvdW50IGFjdGl2YXRpb24gZmFpbGVkLlwiKTtcbiAgICAgICAgICAgICAgICBzZXRTaWdudXBTdGF0dXMoXCJTYXZpbmdzIGFjY291bnQgYWN0aXZhdGlvbiBmYWlsZWQuXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNhdmluZ3MgYWNjb3VudCBhcHByb3ZhbCBmYWlsZWQuXCIpO1xuICAgICAgICAgICAgICBzZXRTaWdudXBTdGF0dXMoXCJTYXZpbmdzIGFjY291bnQgYXBwcm92YWwgZmFpbGVkLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTYXZpbmdzIGFjY291bnQgY3JlYXRpb24gZmFpbGVkOlwiLCBzYXZpbmdzQWNjb3VudERhdGEuZXJyb3JzID8gc2F2aW5nc0FjY291bnREYXRhLmVycm9yc1swXS5kZWZhdWx0VXNlck1lc3NhZ2UgOiBcIlVua25vd24gZXJyb3JcIik7XG4gICAgICAgICAgICBzZXRTaWdudXBTdGF0dXMoXCJTYXZpbmdzIGFjY291bnQgY3JlYXRpb24gZmFpbGVkOiBcIiArIChzYXZpbmdzQWNjb3VudERhdGEuZXJyb3JzID8gc2F2aW5nc0FjY291bnREYXRhLmVycm9yc1swXS5kZWZhdWx0VXNlck1lc3NhZ2UgOiBcIlVua25vd24gZXJyb3JcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgY3JlYXRpb24gZmFpbGVkOlwiLCB1c2VyRGF0YS5lcnJvcnMgPyB1c2VyRGF0YS5lcnJvcnNbMF0uZGVmYXVsdFVzZXJNZXNzYWdlIDogXCJVbmtub3duIGVycm9yXCIpO1xuICAgICAgICAgIHNldFNpZ251cFN0YXR1cyhcIlVzZXIgY3JlYXRpb24gZmFpbGVkOiBcIiArICh1c2VyRGF0YS5lcnJvcnMgPyB1c2VyRGF0YS5lcnJvcnNbMF0uZGVmYXVsdFVzZXJNZXNzYWdlIDogXCJVbmtub3duIGVycm9yXCIpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDbGllbnQgY3JlYXRpb24gZmFpbGVkOlwiLCBjbGllbnREYXRhLmVycm9ycyA/IGNsaWVudERhdGEuZXJyb3JzWzBdLmRlZmF1bHRVc2VyTWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiKTtcbiAgICAgICAgc2V0U2lnbnVwU3RhdHVzKFwiQ2xpZW50IGNyZWF0aW9uIGZhaWxlZDogXCIgKyAoY2xpZW50RGF0YS5lcnJvcnMgPyBjbGllbnREYXRhLmVycm9yc1swXS5kZWZhdWx0VXNlck1lc3NhZ2UgOiBcIlVua25vd24gZXJyb3JcIikpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJTaWdudXAgcHJvY2VzcyBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgc2V0U2lnbnVwU3RhdHVzKFwiU2lnbnVwIGZhaWxlZDogXCIgKyAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpKSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICBjb25zb2xlLmxvZyhcIlNpZ251cCBwcm9jZXNzIGNvbXBsZXRlZC5cIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNjcm9sbFZpZXc+XG4gICAgICA8ZmxleGJveExheW91dCBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxzdGFja0xheW91dCBzdHlsZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi04IGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIgdGV4dD1cIlNpZ24gVXBcIiAvPlxuICAgICAgICAgIDx0ZXh0RmllbGRcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICBoaW50PVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB0ZXh0PXtmaXJzdG5hbWV9XG4gICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhhcmdzKSA9PiBzZXRGaXJzdG5hbWUoYXJncy5vYmplY3QudGV4dCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dEZpZWxkXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgaGludD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICB0ZXh0PXtsYXN0bmFtZX1cbiAgICAgICAgICAgIG9uVGV4dENoYW5nZT17KGFyZ3MpID0+IHNldExhc3RuYW1lKGFyZ3Mub2JqZWN0LnRleHQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHRleHRGaWVsZFxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgIGhpbnQ9XCJFbWFpbFwiXG4gICAgICAgICAgICB0ZXh0PXtlbWFpbH1cbiAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG9uVGV4dENoYW5nZT17KGFyZ3MpID0+IHNldEVtYWlsKGFyZ3Mub2JqZWN0LnRleHQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHRleHRGaWVsZFxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgIGhpbnQ9XCJNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIHRleHQ9e21vYmlsZU5vfVxuICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwicGhvbmVcIlxuICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXsoYXJncykgPT4gc2V0TW9iaWxlTm8oYXJncy5vYmplY3QudGV4dCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dEZpZWxkXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgaGludD1cIkVtcGxveWVyIElEXCJcbiAgICAgICAgICAgIHRleHQ9e2VtcGxveWVySWR9XG4gICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXsoYXJncykgPT4gc2V0RW1wbG95ZXJJZChhcmdzLm9iamVjdC50ZXh0KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0ZXh0RmllbGRcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICBoaW50PVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgdGV4dD17dXNlcm5hbWV9XG4gICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhhcmdzKSA9PiBzZXRVc2VybmFtZShhcmdzLm9iamVjdC50ZXh0KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0ZXh0RmllbGRcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICBoaW50PVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgdGV4dD17cGFzc3dvcmR9XG4gICAgICAgICAgICBzZWN1cmU9e3RydWV9XG4gICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhhcmdzKSA9PiBzZXRQYXNzd29yZChhcmdzLm9iamVjdC50ZXh0KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0ZXh0RmllbGRcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICBoaW50PVwiUmVwZWF0IFBhc3N3b3JkXCJcbiAgICAgICAgICAgIHRleHQ9e3JlcGVhdFBhc3N3b3JkfVxuICAgICAgICAgICAgc2VjdXJlPXt0cnVlfVxuICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXsoYXJncykgPT4gc2V0UmVwZWF0UGFzc3dvcmQoYXJncy5vYmplY3QudGV4dCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICAgIHRleHQ9e2lzTG9hZGluZyA/IFwiQ3JlYXRpbmcgQWNjb3VudC4uLlwiIDogXCJTaWduIFVwXCJ9XG4gICAgICAgICAgICBvblRhcD17aGFuZGxlU2lnbnVwfVxuICAgICAgICAgICAgaXNFbmFibGVkPXshaXNMb2FkaW5nfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5iYWNrQnV0dG9ufVxuICAgICAgICAgICAgdGV4dD1cIkJhY2sgdG8gTG9naW5cIlxuICAgICAgICAgICAgb25UYXA9eygpID0+IG5hdmlnYXRpb24ubmF2aWdhdGUoXCJMb2dpblwiKX1cbiAgICAgICAgICAgIGlzRW5hYmxlZD17IWlzTG9hZGluZ31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgc3R5bGU9e1tcbiAgICAgICAgICAgICAgc3R5bGVzLnN0YXR1c0xhYmVsLFxuICAgICAgICAgICAgICB7IGNvbG9yOiBzaWdudXBTdGF0dXMuaW5jbHVkZXMoXCJzdWNjZXNzZnVsXCIpID8gXCIjNTBFM0MyXCIgOiBcIiNGRjcwNDNcIiB9XG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgdGV4dD17c2lnbnVwU3RhdHVzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgICA8L2ZsZXhib3hMYXlvdXQ+XG4gICAgPC9zY3JvbGxWaWV3PlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzRBOTBFMlwiXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICB3aWR0aDogXCI4MCVcIixcbiAgICBhbGlnblNlbGY6IFwiY2VudGVyXCJcbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBmb250U2l6ZTogMTgsXG4gICAgY29sb3I6IFwiIzIxMjEyMVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIG1hcmdpbkJvdHRvbTogMTUsXG4gICAgcGFkZGluZzogMTBcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgZm9udFNpemU6IDE4LFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzI5QjZGNlwiLFxuICAgIGJvcmRlclJhZGl1czogNSxcbiAgICBwYWRkaW5nOiAxMCxcbiAgICBtYXJnaW5Cb3R0b206IDE1XG4gIH0sXG4gIGJhY2tCdXR0b246IHtcbiAgICBmb250U2l6ZTogMTgsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNTBFM0MyXCIsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIHBhZGRpbmc6IDEwLFxuICAgIG1hcmdpbkJvdHRvbTogMTVcbiAgfSxcbiAgc3RhdHVzTGFiZWw6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIlxuICB9XG59KTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHRcIjtcbmltcG9ydCB7IEZyYW1lTmF2aWdhdGlvblByb3AgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0LW5hdmlnYXRpb25cIjtcbmltcG9ydCB7IE1haW5TdGFja1BhcmFtTGlzdCB9IGZyb20gXCIuLi9OYXZpZ2F0aW9uUGFyYW1MaXN0XCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCwgTGFiZWwsIEJ1dHRvbiB9IGZyb20gXCJAbmF0aXZlc2NyaXB0LWNvcmVcIjtcblxudHlwZSBTaWdudXBTdWNjZXNzU2NyZWVuUHJvcHMgPSB7XG4gIG5hdmlnYXRpb246IEZyYW1lTmF2aWdhdGlvblByb3A8TWFpblN0YWNrUGFyYW1MaXN0LCBcIlNpZ251cFN1Y2Nlc3NcIj4sXG4gIHJvdXRlOiB7IHBhcmFtczogeyBjbGllbnRJZDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBzYXZpbmdzQWNjb3VudElkOiBudW1iZXIsIGFjY291bnRBY3RpdmU6IGJvb2xlYW4gfSB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gU2lnbnVwU3VjY2Vzc1NjcmVlbih7IG5hdmlnYXRpb24sIHJvdXRlIH06IFNpZ251cFN1Y2Nlc3NTY3JlZW5Qcm9wcykge1xuICBjb25zdCB7IGNsaWVudElkLCB1c2VybmFtZSwgcGFzc3dvcmQsIHNhdmluZ3NBY2NvdW50SWQsIGFjY291bnRBY3RpdmUgfSA9IHJvdXRlLnBhcmFtcztcblxuICByZXR1cm4gKFxuICAgIDxzdGFja0xheW91dCBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWItOCBmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiIHRleHQ9XCJTaWdudXAgU3VjY2Vzc2Z1bFwiIC8+XG4gICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5pbmZvTGFiZWx9IHRleHQ9e2BDbGllbnQgSUQ6ICR7Y2xpZW50SWR9YH0gLz5cbiAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLmluZm9MYWJlbH0gdGV4dD17YFVzZXJuYW1lOiAke3VzZXJuYW1lfWB9IC8+XG4gICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5pbmZvTGFiZWx9IHRleHQ9e2BQYXNzd29yZDogJHtwYXNzd29yZH1gfSAvPlxuICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMuaW5mb0xhYmVsfSB0ZXh0PXtgU2F2aW5ncyBBY2NvdW50IElEOiAke3NhdmluZ3NBY2NvdW50SWR9YH0gLz5cbiAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLmluZm9MYWJlbH0gdGV4dD17YEFjY291bnQgQWN0aXZlOiAke2FjY291bnRBY3RpdmUgPyBcIlllc1wiIDogXCJOb1wifWB9IC8+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHN0eWxlPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICB0ZXh0PVwiR28gdG8gTG9naW5cIlxuICAgICAgICBvblRhcD17KCkgPT4gbmF2aWdhdGlvbi5uYXZpZ2F0ZShcIkxvZ2luXCIpfVxuICAgICAgLz5cbiAgICA8L3N0YWNrTGF5b3V0PlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNEE5MEUyXCIsXG4gIH0sXG4gIGluZm9MYWJlbDoge1xuICAgIGZvbnRTaXplOiAxOCxcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgbWFyZ2luQm90dG9tOiAxNSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgZm9udFNpemU6IDE4LFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzI5QjZGNlwiLFxuICAgIGJvcmRlclJhZGl1czogNSxcbiAgICBwYWRkaW5nOiAxMCxcbiAgICBtYXJnaW5Ub3A6IDIwLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0XCI7XG5pbXBvcnQgeyBGcmFtZU5hdmlnYXRpb25Qcm9wIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC1uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBNYWluU3RhY2tQYXJhbUxpc3QgfSBmcm9tIFwiLi4vTmF2aWdhdGlvblBhcmFtTGlzdFwiO1xuaW1wb3J0IHsgU2Nyb2xsVmlldywgU3RhY2tMYXlvdXQsIExhYmVsLCBHcmlkTGF5b3V0LCBUZXh0RmllbGQsIEJ1dHRvbiB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmVcIjtcblxudHlwZSBXaXRoZHJhd1NjcmVlblByb3BzID0ge1xuICBuYXZpZ2F0aW9uOiBGcmFtZU5hdmlnYXRpb25Qcm9wPE1haW5TdGFja1BhcmFtTGlzdCwgXCJXaXRoZHJhd1wiPjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBXaXRoZHJhd1NjcmVlbih7IG5hdmlnYXRpb24gfTogV2l0aGRyYXdTY3JlZW5Qcm9wcykge1xuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkZXN0aW5hdGlvblR5cGUsIHNldERlc3RpbmF0aW9uVHlwZV0gPSBSZWFjdC51c2VTdGF0ZTxcIm1vYmlsZVwiIHwgXCJiYW5rXCI+KFwibW9iaWxlXCIpO1xuICBjb25zdCBbYWNjb3VudE51bWJlciwgc2V0QWNjb3VudE51bWJlcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2JhbmtOYW1lLCBzZXRCYW5rTmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FjY291bnROYW1lLCBzZXRBY2NvdW50TmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2JyYW5jaENvZGUsIHNldEJyYW5jaENvZGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt2YWxpZGF0aW9uTWVzc2FnZSwgc2V0VmFsaWRhdGlvbk1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgdmFsaWRhdGVBbW91bnQgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG51bVZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgaWYgKGlzTmFOKG51bVZhbHVlKSkge1xuICAgICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBhbW91bnRcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChudW1WYWx1ZSA8IDEwMCkge1xuICAgICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UoXCJNaW5pbXVtIHdpdGhkcmF3YWwgYW1vdW50IGlzIEtFUyAxMDBcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChudW1WYWx1ZSA+IDMwMDAwMCkge1xuICAgICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UoXCJNYXhpbXVtIHdpdGhkcmF3YWwgYW1vdW50IGlzIEtFUyAzMDAsMDAwXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzZXRWYWxpZGF0aW9uTWVzc2FnZShcIlwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCB2YWxpZGF0ZUJhbmtEZXRhaWxzID0gKCkgPT4ge1xuICAgIGlmIChkZXN0aW5hdGlvblR5cGUgPT09IFwiYmFua1wiKSB7XG4gICAgICBpZiAoIWJhbmtOYW1lKSB7XG4gICAgICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKFwiUGxlYXNlIGVudGVyIGJhbmsgbmFtZVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCFhY2NvdW50TmFtZSkge1xuICAgICAgICBzZXRWYWxpZGF0aW9uTWVzc2FnZShcIlBsZWFzZSBlbnRlciBhY2NvdW50IG5hbWVcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICghYWNjb3VudE51bWJlciB8fCBhY2NvdW50TnVtYmVyLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgYWNjb3VudCBudW1iZXJcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICghYnJhbmNoQ29kZSkge1xuICAgICAgICBzZXRWYWxpZGF0aW9uTWVzc2FnZShcIlBsZWFzZSBlbnRlciBicmFuY2ggY29kZVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWFjY291bnROdW1iZXIgfHwgYWNjb3VudE51bWJlci5sZW5ndGggIT09IDEwKSB7XG4gICAgICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgbW9iaWxlIG51bWJlclwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDb25maXJtID0gKCkgPT4ge1xuICAgIGlmICghdmFsaWRhdGVBbW91bnQoYW1vdW50KSkgcmV0dXJuO1xuICAgIGlmICghdmFsaWRhdGVCYW5rRGV0YWlscygpKSByZXR1cm47XG5cbiAgICBuYXZpZ2F0aW9uLm5hdmlnYXRlKFwiV2l0aGRyYXdTdWNjZXNzXCIsIHtcbiAgICAgIGFtb3VudDogYEtFUyAke2Ftb3VudH1gLFxuICAgICAgZGVzdGluYXRpb246IGRlc3RpbmF0aW9uVHlwZSA9PT0gXCJtb2JpbGVcIiA/IFwiTW9iaWxlIE1vbmV5XCIgOiBcIkJhbmsgQWNjb3VudFwiLFxuICAgICAgYWNjb3VudE51bWJlcjogZGVzdGluYXRpb25UeXBlID09PSBcIm1vYmlsZVwiID8gXG4gICAgICAgIGFjY291bnROdW1iZXIgOiBcbiAgICAgICAgYCR7YmFua05hbWV9IC0gJHthY2NvdW50TnVtYmVyfWAsXG4gICAgICByZWZlcmVuY2U6IGBXRCR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpLnRvVXBwZXJDYXNlKCl9YCxcbiAgICAgIGVzdGltYXRlZFRpbWU6IGRlc3RpbmF0aW9uVHlwZSA9PT0gXCJtb2JpbGVcIiA/IFwiSW5zdGFudFwiIDogXCIxLTIgQnVzaW5lc3MgRGF5c1wiLFxuICAgICAgLi4uKGRlc3RpbmF0aW9uVHlwZSA9PT0gXCJiYW5rXCIgJiYge1xuICAgICAgICBiYW5rTmFtZSxcbiAgICAgICAgYWNjb3VudE5hbWUsXG4gICAgICAgIGJyYW5jaENvZGUsXG4gICAgICB9KVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGdyaWRMYXlvdXQgcm93cz1cImF1dG8sICosIGF1dG9cIj5cbiAgICAgIDxncmlkTGF5b3V0IHJvdz17MH0gY29sdW1ucz1cImF1dG8sICpcIiBzdHlsZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxidXR0b24gY29sPXswfSB0ZXh0PVwi4oaQXCIgb25UYXA9eygpID0+IG5hdmlnYXRpb24uZ29CYWNrKCl9IHN0eWxlPXtzdHlsZXMuYmFja0J1dHRvbn0gLz5cbiAgICAgICAgPGxhYmVsIGNvbD17MX0gdGV4dD1cIldpdGhkcmF3IEZ1bmRzXCIgc3R5bGU9e3N0eWxlcy5oZWFkZXJUZXh0fSAvPlxuICAgICAgPC9ncmlkTGF5b3V0PlxuXG4gICAgICA8c2Nyb2xsVmlldyByb3c9ezF9PlxuICAgICAgICA8c3RhY2tMYXlvdXQgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIHsvKiBBbW91bnQgSW5wdXQgKi99XG4gICAgICAgICAgPGdyaWRMYXlvdXQgc3R5bGU9e3N0eWxlcy5jYXJkfSByb3dzPVwiYXV0bywgYXV0bywgYXV0b1wiIGNvbHVtbnM9XCIqXCI+XG4gICAgICAgICAgICA8bGFiZWwgcm93PXswfSBzdHlsZT17c3R5bGVzLnNlY3Rpb25UaXRsZX0gdGV4dD1cIkFtb3VudCB0byBXaXRoZHJhd1wiIC8+XG4gICAgICAgICAgICA8dGV4dEZpZWxkIFxuICAgICAgICAgICAgICByb3c9ezF9XG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXR9IFxuICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJudW1iZXJcIiBcbiAgICAgICAgICAgICAgaGludD1cIkVudGVyIGFtb3VudFwiIFxuICAgICAgICAgICAgICB0ZXh0PXthbW91bnR9XG4gICAgICAgICAgICAgIG9uVGV4dENoYW5nZT17KGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBbW91bnQgPSBhcmdzLm9iamVjdC50ZXh0O1xuICAgICAgICAgICAgICAgIHNldEFtb3VudChuZXdBbW91bnQpO1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlQW1vdW50KG5ld0Ftb3VudCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlID8gXG4gICAgICAgICAgICAgIDxsYWJlbCByb3c9ezJ9IHN0eWxlPXtzdHlsZXMudmFsaWRhdGlvbk1lc3NhZ2V9IHRleHQ9e3ZhbGlkYXRpb25NZXNzYWdlfSAvPiBcbiAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIDwvZ3JpZExheW91dD5cblxuICAgICAgICAgIHsvKiBEZXN0aW5hdGlvbiBUeXBlIFNlbGVjdGlvbiAqL31cbiAgICAgICAgICA8Z3JpZExheW91dCBzdHlsZT17c3R5bGVzLmNhcmR9IHJvd3M9XCJhdXRvLCBhdXRvXCIgY29sdW1ucz1cIipcIj5cbiAgICAgICAgICAgIDxsYWJlbCByb3c9ezB9IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRpdGxlfSB0ZXh0PVwiV2l0aGRyYXcgVG9cIiAvPlxuICAgICAgICAgICAgPGdyaWRMYXlvdXQgcm93PXsxfSBjb2x1bW5zPVwiKiwgKlwiIHN0eWxlPXtzdHlsZXMuZGVzdGluYXRpb25Db250YWluZXJ9PlxuICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgIGNvbD17MH0gXG4gICAgICAgICAgICAgICAgc3R5bGU9e1tzdHlsZXMuZGVzdGluYXRpb25CdXR0b24sIGRlc3RpbmF0aW9uVHlwZSA9PT0gXCJtb2JpbGVcIiAmJiBzdHlsZXMuYWN0aXZlRGVzdGluYXRpb25dfSBcbiAgICAgICAgICAgICAgICB0ZXh0PVwiTW9iaWxlIE1vbmV5XCIgXG4gICAgICAgICAgICAgICAgb25UYXA9eygpID0+IHNldERlc3RpbmF0aW9uVHlwZShcIm1vYmlsZVwiKX0gXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgY29sPXsxfSBcbiAgICAgICAgICAgICAgICBzdHlsZT17W3N0eWxlcy5kZXN0aW5hdGlvbkJ1dHRvbiwgZGVzdGluYXRpb25UeXBlID09PSBcImJhbmtcIiAmJiBzdHlsZXMuYWN0aXZlRGVzdGluYXRpb25dfSBcbiAgICAgICAgICAgICAgICB0ZXh0PVwiQmFuayBBY2NvdW50XCIgXG4gICAgICAgICAgICAgICAgb25UYXA9eygpID0+IHNldERlc3RpbmF0aW9uVHlwZShcImJhbmtcIil9IFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ncmlkTGF5b3V0PlxuICAgICAgICAgIDwvZ3JpZExheW91dD5cblxuICAgICAgICAgIHsvKiBBY2NvdW50IERldGFpbHMgSW5wdXQgKi99XG4gICAgICAgICAge2Rlc3RpbmF0aW9uVHlwZSA9PT0gXCJtb2JpbGVcIiA/IChcbiAgICAgICAgICAgIDxncmlkTGF5b3V0IHN0eWxlPXtzdHlsZXMuY2FyZH0gcm93cz1cImF1dG8sIGF1dG9cIiBjb2x1bW5zPVwiKlwiPlxuICAgICAgICAgICAgICA8bGFiZWwgcm93PXswfSBzdHlsZT17c3R5bGVzLnNlY3Rpb25UaXRsZX0gdGV4dD1cIk1vYmlsZSBOdW1iZXJcIiAvPlxuICAgICAgICAgICAgICA8dGV4dEZpZWxkIFxuICAgICAgICAgICAgICAgIHJvdz17MX1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fSBcbiAgICAgICAgICAgICAgICBoaW50PVwiRW50ZXIgbW9iaWxlIG51bWJlclwiXG4gICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgIHRleHQ9e2FjY291bnROdW1iZXJ9XG4gICAgICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXsoYXJncykgPT4gc2V0QWNjb3VudE51bWJlcihhcmdzLm9iamVjdC50ZXh0KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGdyaWRMYXlvdXQgc3R5bGU9e3N0eWxlcy5jYXJkfSByb3dzPVwiYXV0bywgYXV0bywgYXV0bywgYXV0bywgYXV0b1wiIGNvbHVtbnM9XCIqXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCByb3c9ezB9IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRpdGxlfSB0ZXh0PVwiQmFuayBEZXRhaWxzXCIgLz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDx0ZXh0RmllbGQgXG4gICAgICAgICAgICAgICAgcm93PXsxfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXR9IFxuICAgICAgICAgICAgICAgIGhpbnQ9XCJCYW5rIE5hbWVcIlxuICAgICAgICAgICAgICAgIHRleHQ9e2JhbmtOYW1lfVxuICAgICAgICAgICAgICAgIG9uVGV4dENoYW5nZT17KGFyZ3MpID0+IHNldEJhbmtOYW1lKGFyZ3Mub2JqZWN0LnRleHQpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPHRleHRGaWVsZCBcbiAgICAgICAgICAgICAgICByb3c9ezJ9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH0gXG4gICAgICAgICAgICAgICAgaGludD1cIkFjY291bnQgTmFtZVwiXG4gICAgICAgICAgICAgICAgdGV4dD17YWNjb3VudE5hbWV9XG4gICAgICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXsoYXJncykgPT4gc2V0QWNjb3VudE5hbWUoYXJncy5vYmplY3QudGV4dCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8dGV4dEZpZWxkIFxuICAgICAgICAgICAgICAgIHJvdz17M31cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fSBcbiAgICAgICAgICAgICAgICBoaW50PVwiQWNjb3VudCBOdW1iZXJcIlxuICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdGV4dD17YWNjb3VudE51bWJlcn1cbiAgICAgICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhhcmdzKSA9PiBzZXRBY2NvdW50TnVtYmVyKGFyZ3Mub2JqZWN0LnRleHQpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPHRleHRGaWVsZCBcbiAgICAgICAgICAgICAgICByb3c9ezR9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH0gXG4gICAgICAgICAgICAgICAgaGludD1cIkJyYW5jaCBDb2RlXCJcbiAgICAgICAgICAgICAgICB0ZXh0PXticmFuY2hDb2RlfVxuICAgICAgICAgICAgICAgIG9uVGV4dENoYW5nZT17KGFyZ3MpID0+IHNldEJyYW5jaENvZGUoYXJncy5vYmplY3QudGV4dCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2dyaWRMYXlvdXQ+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSA/IFxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMudmFsaWRhdGlvbk1lc3NhZ2V9IHRleHQ9e3ZhbGlkYXRpb25NZXNzYWdlfSAvPiBcbiAgICAgICAgICAgIDogbnVsbH1cblxuICAgICAgICAgIHsvKiBTdW1tYXJ5ICovfVxuICAgICAgICAgIDxncmlkTGF5b3V0IHN0eWxlPXtzdHlsZXMuY2FyZH0gcm93cz1cImF1dG8sIGF1dG9cIiBjb2x1bW5zPVwiKlwiPlxuICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGl0bGV9IHRleHQ9XCJTdW1tYXJ5XCIgLz5cbiAgICAgICAgICAgIDxzdGFja0xheW91dCByb3c9ezF9PlxuICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdW1tYXJ5VGV4dH0gdGV4dD17YEFtb3VudDogS0VTICR7YW1vdW50IHx8ICcwJ31gfSAvPlxuICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdW1tYXJ5VGV4dH0gdGV4dD17YERlc3RpbmF0aW9uOiAke2Rlc3RpbmF0aW9uVHlwZSA9PT0gXCJtb2JpbGVcIiA/IFwiTW9iaWxlIE1vbmV5XCIgOiBcIkJhbmsgQWNjb3VudFwifWB9IC8+XG4gICAgICAgICAgICAgIHtkZXN0aW5hdGlvblR5cGUgPT09IFwibW9iaWxlXCIgPyAoXG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMuc3VtbWFyeVRleHR9IHRleHQ9e2BNb2JpbGUgTnVtYmVyOiAke2FjY291bnROdW1iZXIgfHwgJ05vdCBzZXQnfWB9IC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLnN1bW1hcnlUZXh0fSB0ZXh0PXtgQmFuazogJHtiYW5rTmFtZSB8fCAnTm90IHNldCd9YH0gLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLnN1bW1hcnlUZXh0fSB0ZXh0PXtgQWNjb3VudCBOYW1lOiAke2FjY291bnROYW1lIHx8ICdOb3Qgc2V0J31gfSAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMuc3VtbWFyeVRleHR9IHRleHQ9e2BBY2NvdW50IE51bWJlcjogJHthY2NvdW50TnVtYmVyIHx8ICdOb3Qgc2V0J31gfSAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMuc3VtbWFyeVRleHR9IHRleHQ9e2BCcmFuY2ggQ29kZTogJHticmFuY2hDb2RlIHx8ICdOb3Qgc2V0J31gfSAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9zdGFja0xheW91dD5cbiAgICAgICAgICA8L2dyaWRMYXlvdXQ+XG4gICAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgICA8L3Njcm9sbFZpZXc+XG5cbiAgICAgIDxidXR0b24gcm93PXsyfSBzdHlsZT17c3R5bGVzLmNvbmZpcm1CdXR0b259IHRleHQ9XCJDb25maXJtIFdpdGhkcmF3YWxcIiBvblRhcD17aGFuZGxlQ29uZmlybX0gLz5cbiAgICA8L2dyaWRMYXlvdXQ+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgaGVhZGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBwYWRkaW5nOiAxNixcbiAgICBib3JkZXJCb3R0b21XaWR0aDogMSxcbiAgICBib3JkZXJCb3R0b21Db2xvcjogXCIjRTBFMEUwXCIsXG4gIH0sXG4gIGJhY2tCdXR0b246IHtcbiAgICBmb250U2l6ZTogMjQsXG4gICAgY29sb3I6IFwiIzRBOTBFMlwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIHdpZHRoOiA0MCxcbiAgfSxcbiAgaGVhZGVyVGV4dDoge1xuICAgIGZvbnRTaXplOiAyMCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIHBhZGRpbmc6IDE2LFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjVGNUY1XCIsXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgcGFkZGluZzogMTUsXG4gICAgbWFyZ2luQm90dG9tOiAxNSxcbiAgICBlbGV2YXRpb246IDMsXG4gIH0sXG4gIHNlY3Rpb25UaXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjNEE5MEUyXCIsXG4gICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgY29sb3I6IFwiIzIxMjEyMVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjVGNUY1XCIsXG4gICAgcGFkZGluZzogMTAsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIG1hcmdpbkJvdHRvbTogMTAsIC8vIEFkZGVkIG1hcmdpbiBmb3IgYmFuayBkZXRhaWxzIGlucHV0c1xuICB9LFxuICBkZXN0aW5hdGlvbkNvbnRhaW5lcjoge1xuICAgIG1hcmdpbkJvdHRvbTogOCxcbiAgfSxcbiAgZGVzdGluYXRpb25CdXR0b246IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNFMEUwRTBcIixcbiAgICBjb2xvcjogXCIjNzU3NTc1XCIsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIG1hcmdpbjogNCxcbiAgICBwYWRkaW5nOiAxMCxcbiAgfSxcbiAgYWN0aXZlRGVzdGluYXRpb246IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzRBOTBFMlwiLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgfSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2U6IHtcbiAgICBmb250U2l6ZTogMTIsXG4gICAgY29sb3I6IFwiI0VGNTM1MFwiLFxuICAgIG1hcmdpblRvcDogNCxcbiAgfSxcbiAgc3VtbWFyeVRleHQ6IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgY29sb3I6IFwiIzIxMjEyMVwiLFxuICAgIG1hcmdpbkJvdHRvbTogNCxcbiAgfSxcbiAgY29uZmlybUJ1dHRvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkY3MDQzXCIsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGZvbnRTaXplOiAxNixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBwYWRkaW5nOiAxNixcbiAgICBtYXJnaW46IDE2LFxuICAgIGJvcmRlclJhZGl1czogNSxcbiAgfSxcbn0pO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdFwiO1xuaW1wb3J0IHsgRnJhbWVOYXZpZ2F0aW9uUHJvcCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQtbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgTWFpblN0YWNrUGFyYW1MaXN0IH0gZnJvbSBcIi4uL05hdmlnYXRpb25QYXJhbUxpc3RcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0LCBMYWJlbCwgQnV0dG9uIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuXG50eXBlIFdpdGhkcmF3U3VjY2Vzc1NjcmVlblByb3BzID0ge1xuICBuYXZpZ2F0aW9uOiBGcmFtZU5hdmlnYXRpb25Qcm9wPE1haW5TdGFja1BhcmFtTGlzdCwgXCJXaXRoZHJhd1N1Y2Nlc3NcIj47XG4gIHJvdXRlOiB7IFxuICAgIHBhcmFtczogeyBcbiAgICAgIGFtb3VudDogc3RyaW5nO1xuICAgICAgZGVzdGluYXRpb246IHN0cmluZztcbiAgICAgIGFjY291bnROdW1iZXI6IHN0cmluZztcbiAgICAgIHJlZmVyZW5jZTogc3RyaW5nO1xuICAgICAgZXN0aW1hdGVkVGltZTogc3RyaW5nO1xuICAgIH0gXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gV2l0aGRyYXdTdWNjZXNzU2NyZWVuKHsgbmF2aWdhdGlvbiwgcm91dGUgfTogV2l0aGRyYXdTdWNjZXNzU2NyZWVuUHJvcHMpIHtcbiAgY29uc3QgeyBhbW91bnQsIGRlc3RpbmF0aW9uLCBhY2NvdW50TnVtYmVyLCByZWZlcmVuY2UsIGVzdGltYXRlZFRpbWUgfSA9IHJvdXRlLnBhcmFtcztcblxuICByZXR1cm4gKFxuICAgIDxzdGFja0xheW91dCBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdWNjZXNzSWNvbn0gdGV4dD1cIuKck1wiIC8+XG4gICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy50aXRsZX0gdGV4dD1cIldpdGhkcmF3YWwgSW5pdGlhdGVkIVwiIC8+XG4gICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5tZXNzYWdlfSB0ZXh0PVwiWW91ciB3aXRoZHJhd2FsIHJlcXVlc3QgaGFzIGJlZW4gcHJvY2Vzc2VkLlwiIC8+XG4gICAgICBcbiAgICAgIDxzdGFja0xheW91dCBzdHlsZT17c3R5bGVzLnN1bW1hcnlDYXJkfT5cbiAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMuc3VtbWFyeVRpdGxlfSB0ZXh0PVwiV2l0aGRyYXdhbCBEZXRhaWxzXCIgLz5cbiAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMuc3VtbWFyeVRleHR9IHRleHQ9e2BBbW91bnQ6ICR7YW1vdW50fWB9IC8+XG4gICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLnN1bW1hcnlUZXh0fSB0ZXh0PXtgRGVzdGluYXRpb246ICR7ZGVzdGluYXRpb259YH0gLz5cbiAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMuc3VtbWFyeVRleHR9IHRleHQ9e2BBY2NvdW50OiAke2FjY291bnROdW1iZXJ9YH0gLz5cbiAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMuc3VtbWFyeVRleHR9IHRleHQ9e2BSZWZlcmVuY2U6ICR7cmVmZXJlbmNlfWB9IC8+XG4gICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLnN1bW1hcnlUZXh0fSB0ZXh0PXtgRXN0aW1hdGVkIFRpbWU6ICR7ZXN0aW1hdGVkVGltZX1gfSAvPlxuICAgICAgPC9zdGFja0xheW91dD5cblxuICAgICAgPGJ1dHRvbiBcbiAgICAgICAgc3R5bGU9e3N0eWxlcy5idXR0b259IFxuICAgICAgICB0ZXh0PVwiUmV0dXJuIHRvIERhc2hib2FyZFwiIFxuICAgICAgICBvblRhcD17KCkgPT4gbmF2aWdhdGlvbi5uYXZpZ2F0ZShcIkRhc2hib2FyZFwiKX0gXG4gICAgICAvPlxuICAgIDwvc3RhY2tMYXlvdXQ+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgY29udGFpbmVyOiB7XG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0Y1RjVGNVwiLFxuICAgIHBhZGRpbmc6IDIwLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH0sXG4gIHN1Y2Nlc3NJY29uOiB7XG4gICAgZm9udFNpemU6IDcyLFxuICAgIGNvbG9yOiBcIiM2NkJCNkFcIixcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiAyNCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICB9LFxuICBtZXNzYWdlOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGNvbG9yOiBcIiM3NTc1NzVcIixcbiAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG4gIHN1bW1hcnlDYXJkOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICBwYWRkaW5nOiAyMCxcbiAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgIGVsZXZhdGlvbjogMyxcbiAgfSxcbiAgc3VtbWFyeVRpdGxlOiB7XG4gICAgZm9udFNpemU6IDE4LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOiBcIiM0QTkwRTJcIixcbiAgICBtYXJnaW5Cb3R0b206IDE1LFxuICB9LFxuICBzdW1tYXJ5VGV4dDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gICAgbWFyZ2luQm90dG9tOiA4LFxuICB9LFxuICBidXR0b246IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkY3MDQzXCIsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIHBhZGRpbmc6IDE1LFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBVc2VyRGF0YSB7XG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIGVtYWlsQWRkcmVzczogc3RyaW5nO1xuICBtb2JpbGVObzogc3RyaW5nO1xuICBhY2NvdW50Tm86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFVzZXJDb250ZXh0VHlwZSB7XG4gIHVzZXJEYXRhOiBVc2VyRGF0YSB8IG51bGw7XG4gIHNldFVzZXJEYXRhOiAodXNlckRhdGE6IFVzZXJEYXRhIHwgbnVsbCkgPT4gdm9pZDtcbn1cblxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFVzZXJDb250ZXh0VHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuZXhwb3J0IGNvbnN0IFVzZXJQcm92aWRlcjogUmVhY3QuRkM8eyBjaGlsZHJlbjogUmVhY3ROb2RlIH0+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlPFVzZXJEYXRhIHwgbnVsbD4obnVsbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlckRhdGEsIHNldFVzZXJEYXRhIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlVXNlciA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VVc2VyIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBVc2VyUHJvdmlkZXInKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ+L3BhY2thZ2UuanNvblwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdE5hdGl2ZVNjcmlwdCIsIk1haW5TdGFjayIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJBUElfQ09ORklHIiwiQkFTRV9VUkwiLCJBVVRIRU5USUNBVElPTl9FTkRQT0lOVCIsIkNMSUVOVFNfRU5EUE9JTlQiLCJTQVZJTkdTX0FDQ09VTlRTX0VORFBPSU5UIiwiU0VMRl9DTElFTlRTX0VORFBPSU5UIiwiVVNFUlNfRU5EUE9JTlQiLCJTQVZJTkdTX1BST0RVQ1RTX0VORFBPSU5UIiwiQVBQX0FVVEgiLCJVU0VSTkFNRSIsIlBBU1NXT1JEIiwiVEVOQU5UX0lEIiwiREFURV9GT1JNQVQiLCJMT0NBTEUiLCJQUk9EVUNUX0lEIiwiUk9MRVMiLCJMRUdBTF9GT1JNX0lEIiwiU3R5bGVTaGVldCIsIkNvbnRyaWJ1dGlvblNjcmVlbiIsIm5hdmlnYXRpb24iLCJyb3V0ZSIsIl9zIiwicHJvdmlkZXIiLCJwcm9kdWN0VHlwZSIsIm1pbkFtb3VudCIsIm1heEFtb3VudCIsInBhcmFtcyIsImFtb3VudCIsInNldEFtb3VudCIsInVzZVN0YXRlIiwiaXNQZXJjZW50YWdlIiwic2V0SXNQZXJjZW50YWdlIiwiZnJlcXVlbmN5Iiwic2V0RnJlcXVlbmN5Iiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJzZXRWYWxpZGF0aW9uTWVzc2FnZSIsInZhbGlkYXRlQW1vdW50IiwibnVtVmFsdWUiLCJwYXJzZUZsb2F0IiwiaXNOYU4iLCJoYW5kbGVDb25maXJtIiwibmF2aWdhdGUiLCJjcmVhdGVFbGVtZW50Iiwicm93cyIsInJvdyIsImNvbHVtbnMiLCJzdHlsZSIsInN0eWxlcyIsImhlYWRlciIsImNvbCIsInRleHQiLCJvblRhcCIsImdvQmFjayIsImJhY2tCdXR0b24iLCJoZWFkZXJUZXh0IiwiY29udGFpbmVyIiwiY2FyZCIsInByb3ZpZGVyTmFtZSIsInNlY3Rpb25UaXRsZSIsImlucHV0Q29udGFpbmVyIiwiaW5wdXQiLCJrZXlib2FyZFR5cGUiLCJoaW50Iiwib25UZXh0Q2hhbmdlIiwiYXJncyIsIm5ld0Ftb3VudCIsIm9iamVjdCIsInR5cGVUb2dnbGUiLCJhY3RpdmVUb2dnbGUiLCJmcmVxdWVuY3lDb250YWluZXIiLCJmcmVxdWVuY3lCdXR0b24iLCJhY3RpdmVGcmVxdWVuY3kiLCJzdW1tYXJ5VGV4dCIsImNvbmZpcm1CdXR0b24iLCJfYyIsImNyZWF0ZSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJCb3R0b21XaWR0aCIsImJvcmRlckJvdHRvbUNvbG9yIiwiZm9udFNpemUiLCJjb2xvciIsIndpZHRoIiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkJvdHRvbSIsImVsZXZhdGlvbiIsIm1hcmdpbkxlZnQiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCIkUmVmcmVzaFJlZyQiLCJDb250cmlidXRpb25TdWNjZXNzU2NyZWVuIiwic3VjY2Vzc0ljb24iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzdW1tYXJ5Q2FyZCIsInN1bW1hcnlUaXRsZSIsImJ1dHRvbiIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInRleHRBbGlnbm1lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsIk5hdmlnYXRpb25CYXIiLCJEYXNoYm9hcmRTY3JlZW4iLCJ1c2VyRGF0YSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJhcHBBdXRoVG9rZW4iLCJzYXZpbmdzQWNjb3VudCIsInNldFNhdmluZ3NBY2NvdW50IiwidHJhbnNhY3Rpb25zIiwic2V0VHJhbnNhY3Rpb25zIiwiZ2V0RGlzcGxheU5hbWUiLCJmaXJzdE5hbWUiLCJzcGxpdCIsImRpc3BsYXlOYW1lIiwibmFtZSIsImZvcm1hdEJhbGFuY2UiLCJiYWxhbmNlIiwidW5kZWZpbmVkIiwicGFydHMiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsImpvaW4iLCJmb3JtYXREYXRlIiwiZGF0ZSIsInRvSVNPU3RyaW5nIiwiZmV0Y2hTYXZpbmdzQWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJhdXRoSGVhZGVyIiwiYnRvYSIsInVybCIsImlkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJzYXZpbmdzQWNjb3VudHMiLCJsZW5ndGgiLCJmZXRjaFRyYW5zYWN0aW9ucyIsImVycm9yIiwiYWNjb3VudElkIiwidG9kYXkiLCJEYXRlIiwib25lTW9udGhBZ28iLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImZyb21EYXRlIiwidG9EYXRlIiwidXNlckF1dGhIZWFkZXIiLCJyZXNwb25zZVRleHQiLCJwYXJzZSIsInBhcnNlRXJyb3IiLCJjb250ZW50IiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwidCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJ0eXBlIiwidHJhbnNhY3Rpb25UeXBlIiwiZGVzY3JpcHRpb24iLCJwYXltZW50RGV0YWlsRGF0YSIsInBheW1lbnRUeXBlIiwicnVubmluZ0JhbGFuY2UiLCJoYW5kbGVMb2dvdXQiLCJzYXZpbmdzQ2FyZCIsIkZyYWdtZW50IiwiYWNjb3VudE51bWJlciIsImFjY291bnRObyIsImFjY291bnRCYWxhbmNlIiwibm9BY2NvdW50TGFiZWwiLCJ0cmFuc2FjdGlvbnNDYXJkIiwidHJhbnNhY3Rpb25zU2VjdGlvblRpdGxlIiwic2xpY2UiLCJ0cmFuc2FjdGlvbiIsImluZGV4Iiwia2V5IiwidHJhbnNhY3Rpb25JdGVtIiwidHJhbnNhY3Rpb25EZXNjcmlwdGlvbiIsInRyYW5zYWN0aW9uQW1vdW50IiwibmVnYXRpdmVBbW91bnQiLCJwb3NpdGl2ZUFtb3VudCIsInRyYW5zYWN0aW9uRGF0ZSIsIm5vVHJhbnNhY3Rpb25zTGFiZWwiLCJxdWlja0FjdGlvbnNDYXJkIiwicXVpY2tBY3Rpb25zU2VjdGlvblRpdGxlIiwicXVpY2tBY3Rpb25zQ29udGFpbmVyIiwiYWN0aW9uQnV0dG9uIiwiaW52ZXN0QnV0dG9uIiwid2l0aGRyYXdCdXR0b24iLCJsb2FuQnV0dG9uIiwiYWN0aXZlUm91dGUiLCJwYWRkaW5nQm90dG9tIiwiSW52ZXN0bWVudHNTY3JlZW4iLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRFcnJvciIsImZldGNoU2F2aW5nc1Byb2R1Y3RzIiwiaGFuZGxlUHJvZHVjdFNlbGVjdCIsInByb2R1Y3QiLCJtYWluQ29udGFpbmVyIiwibG9hZGluZ1RleHQiLCJlcnJvclRleHQiLCJwcm9kdWN0Q2FyZCIsImNsYXNzTmFtZSIsInByb2R1Y3ROYW1lIiwicHJvZHVjdERlc2NyaXB0aW9uIiwidGV4dFdyYXAiLCJkZXRhaWxzQ29udGFpbmVyIiwiZGV0YWlsTGFiZWwiLCJub21pbmFsQW5udWFsSW50ZXJlc3RSYXRlIiwiZGV0YWlsVmFsdWUiLCJjdXJyZW5jeSIsImRpc3BsYXlTeW1ib2wiLCJjb2RlIiwidGFwSGludCIsIm1hcmdpblZlcnRpY2FsIiwic2hhZG93Q29sb3IiLCJzaGFkb3dPZmZzZXQiLCJzaGFkb3dPcGFjaXR5Iiwic2hhZG93UmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImZvbnRTdHlsZSIsIkxvZ2luU2NyZWVuIiwic2V0VXNlcm5hbWUiLCJzZXRQYXNzd29yZCIsImxvZ2luU3RhdHVzIiwic2V0TG9naW5TdGF0dXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJhcHBBdXRoU3RhdHVzIiwic2V0QXBwQXV0aFN0YXR1cyIsInNldEFwcEF1dGhUb2tlbiIsImNoZWNrQXBwQXV0aG9yaXphdGlvbiIsImJvZHkiLCJhdXRoZW50aWNhdGVkIiwiYmFzZTY0RW5jb2RlZEF1dGhlbnRpY2F0aW9uS2V5IiwiZ2xvYmFsIiwiaGFuZGxlTG9naW4iLCJjcmVkZW50aWFscyIsImxvZ2luQVBJIiwidG9rZW4iLCJzZWN1cmUiLCJpc0VuYWJsZWQiLCJzaWdudXBCdXR0b24iLCJzdGF0dXNMYWJlbCIsImluY2x1ZGVzIiwiZmxleERpcmVjdGlvbiIsImFsaWduU2VsZiIsIk5hdmlnYXRpb25Db250YWluZXIiLCJjcmVhdGVOYXRpdmVTdGFja05hdmlnYXRvciIsIlByb2ZpbGVTY3JlZW4iLCJTaWdudXBTY3JlZW4iLCJTaWdudXBTdWNjZXNzU2NyZWVuIiwiV2l0aGRyYXdTY3JlZW4iLCJXaXRoZHJhd1N1Y2Nlc3NTY3JlZW4iLCJQb3J0Zm9saW9TY3JlZW4iLCJTdGFjayIsIk5hdmlnYXRvciIsImluaXRpYWxSb3V0ZU5hbWUiLCJTY3JlZW4iLCJjb21wb25lbnQiLCJpbml0aWFsUGFyYW1zIiwibWVudUl0ZW1zIiwiaGFuZGxlTmF2aWdhdGlvbiIsIm1lbnVCYXIiLCJpdGVtIiwic2VwYXJhdG9yIiwibWVudUl0ZW0iLCJhY3RpdmVNZW51SXRlbSIsIm1lbnVMYWJlbCIsImFjdGl2ZU1lbnVMYWJlbCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyVG9wQ29sb3IiLCJmbGV4IiwiYWNjb3VudHMiLCJzZXRBY2NvdW50cyIsImZldGNoQWNjb3VudHMiLCJzdGF0dXMiLCJFcnJvciIsImVyciIsImZvcm1hdEN1cnJlbmN5Iiwic3ltYm9sIiwiY2FsY3VsYXRlVG90YWxJbnZlc3RtZW50IiwicmVkdWNlIiwidG90YWwiLCJhY2NvdW50IiwiYnVzeSIsInRvdGFsSW52ZXN0bWVudCIsImJyZWFrZG93blRpdGxlIiwiY29sU3BhbiIsImFjY291bnRTdGF0dXMiLCJsYXN0QWN0aXZlVHJhbnNhY3Rpb25EYXRlIiwibGFzdFRyYW5zYWN0aW9uIiwidXNlVXNlciIsInNldFVzZXJEYXRhIiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwiZWRpdGVkVXNlckRhdGEiLCJzZXRFZGl0ZWRVc2VyRGF0YSIsImVtYWlsQWRkcmVzcyIsIm1vYmlsZU5vIiwiZmV0Y2hVc2VyRGF0YSIsImN1cnJlbnRVc2VyRGF0YSIsImtleXMiLCJkdW1teURhdGEiLCJoYW5kbGVFZGl0IiwiaGFuZGxlU2F2ZSIsImhhbmRsZUNhbmNlbCIsInJlc2V0Iiwicm91dGVzIiwibGFiZWwiLCJvcmllbnRhdGlvbiIsImJ1dHRvbkNvbnRhaW5lciIsInNhdmVCdXR0b24iLCJjYW5jZWxCdXR0b24iLCJlZGl0QnV0dG9uIiwibG9nb3V0QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJuYXZCYXIiLCJuYXZJdGVtIiwiYWN0aXZlTmF2SXRlbSIsImZpcnN0bmFtZSIsInNldEZpcnN0bmFtZSIsImxhc3RuYW1lIiwic2V0TGFzdG5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwic2V0TW9iaWxlTm8iLCJyZXBlYXRQYXNzd29yZCIsInNldFJlcGVhdFBhc3N3b3JkIiwiZW1wbG95ZXJJZCIsInNldEVtcGxveWVySWQiLCJzaWdudXBTdGF0dXMiLCJzZXRTaWdudXBTdGF0dXMiLCJkYXkiLCJTdHJpbmciLCJtb250aE5hbWVzIiwibW9udGgiLCJ5ZWFyIiwiaGFuZGxlU2lnbnVwIiwiZm9ybWF0dGVkRGF0ZSIsImNsaWVudFJlcXVlc3RCb2R5IiwiZGF0ZUZvcm1hdCIsImxvY2FsZSIsImFjdGl2ZSIsImFjdGl2YXRpb25EYXRlIiwib2ZmaWNlSWQiLCJwYXJzZUludCIsImxlZ2FsRm9ybUlkIiwiY2xpZW50UmVzcG9uc2UiLCJjbGllbnREYXRhIiwiY2xpZW50SWQiLCJ1c2VyUmVxdWVzdEJvZHkiLCJwYXNzd29yZE5ldmVyRXhwaXJlcyIsImlzU2VsZlNlcnZpY2VVc2VyIiwiY2xpZW50cyIsInJvbGVzIiwic2VuZFBhc3N3b3JkVG9FbWFpbCIsInN0YWZmSWQiLCJ1c2VyUmVzcG9uc2UiLCJyZXNvdXJjZUlkIiwic2F2aW5nc0FjY291bnRSZXF1ZXN0Qm9keSIsImV4dGVybmFsSWQiLCJub3ciLCJwcm9kdWN0SWQiLCJzdWJtaXR0ZWRPbkRhdGUiLCJzYXZpbmdzQWNjb3VudFJlc3BvbnNlIiwic2F2aW5nc0FjY291bnREYXRhIiwic2F2aW5nc0lkIiwiYXBwcm92ZVJlcXVlc3RCb2R5IiwiYXBwcm92ZWRPbkRhdGUiLCJhcHByb3ZlUmVzcG9uc2UiLCJhcHByb3ZlRGF0YSIsImNoYW5nZXMiLCJhcHByb3ZlZCIsImFjdGl2YXRlUmVxdWVzdEJvZHkiLCJhY3RpdmF0ZWRPbkRhdGUiLCJhY3RpdmF0ZVJlc3BvbnNlIiwiYWN0aXZhdGVEYXRhIiwic2F2aW5nc0FjY291bnRJZCIsImFjY291bnRBY3RpdmUiLCJlcnJvcnMiLCJkZWZhdWx0VXNlck1lc3NhZ2UiLCJpbmZvTGFiZWwiLCJkZXN0aW5hdGlvblR5cGUiLCJzZXREZXN0aW5hdGlvblR5cGUiLCJzZXRBY2NvdW50TnVtYmVyIiwiYmFua05hbWUiLCJzZXRCYW5rTmFtZSIsImFjY291bnROYW1lIiwic2V0QWNjb3VudE5hbWUiLCJicmFuY2hDb2RlIiwic2V0QnJhbmNoQ29kZSIsInZhbGlkYXRlQmFua0RldGFpbHMiLCJkZXN0aW5hdGlvbiIsInJlZmVyZW5jZSIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsImVzdGltYXRlZFRpbWUiLCJkZXN0aW5hdGlvbkNvbnRhaW5lciIsImRlc3RpbmF0aW9uQnV0dG9uIiwiYWN0aXZlRGVzdGluYXRpb24iLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJQcm92aWRlciIsIl9zMiIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9