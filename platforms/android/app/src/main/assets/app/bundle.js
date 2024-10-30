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

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":["*","::before","::after"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":["::backdrop"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":[".container"],"declarations":[{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".mb-4"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".mb-8"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"32"}]},{"type":"rule","selectors":[".transform"],"declarations":[{"type":"declaration","property":"transform","value":"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}]},{"type":"rule","selectors":[".rounded"],"declarations":[{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":[".border"],"declarations":[{"type":"declaration","property":"border-width","value":"1px"}]},{"type":"rule","selectors":[".text-center"],"declarations":[{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".text-2xl"],"declarations":[{"type":"declaration","property":"font-size","value":"24"},{"type":"declaration","property":"line-height","value":"32"}]},{"type":"rule","selectors":[".text-3xl"],"declarations":[{"type":"declaration","property":"font-size","value":"30"},{"type":"declaration","property":"line-height","value":"36"}]},{"type":"rule","selectors":[".font-bold"],"declarations":[{"type":"declaration","property":"font-weight","value":"700"}]},{"type":"rule","selectors":[".uppercase"],"declarations":[{"type":"declaration","property":"text-transform","value":"uppercase"}]},{"type":"rule","selectors":[".italic"],"declarations":[{"type":"declaration","property":"font-style","value":"italic"}]},{"type":"rule","selectors":[".text-white"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(255 255 255 / var(--tw-text-opacity))"}]},{"type":"rule","selectors":[".shadow"],"declarations":[{"type":"declaration","property":"box-shadow","value":"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}]},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"background-color","value":"#4A90E2"},{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".ns-dark"],"declarations":[{"type":"declaration","property":"background-color","value":"#212121"},{"type":"declaration","property":"color","value":"#FFFFFF"}]}],"parsingErrors":[]}}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS2JSON_LOADER_EXPORT___);
const { addTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
addTaggedAdditionalCSS(___CSS2JSON_LOADER_EXPORT___, "/Users/alexmbolonzi/ekesha-workspace/VunaReactApp/src/app.css")
if(true) {
	module.hot.accept()
	module.hot.dispose(() => {
		const { removeTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
		removeTaggedAdditionalCSS("/Users/alexmbolonzi/ekesha-workspace/VunaReactApp/src/app.css")
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
  const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [transactions, setTransactions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [selectedProductId, setSelectedProductId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
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
  // Add function to calculate total balance
  const calculateTotalBalance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(productList => {
    return productList.reduce((total, product) => total + (product.accountBalance || 0), 0);
  }, []);
  // Update fetchSavingsAccount to handle multiple products
  const fetchSavingsAccounts = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    try {
      console.log("Fetching savings accounts information...");
      const authHeader = `Basic ${btoa(`${username}:${password}`)}`;
      const url = `${_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.BASE_URL}${_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.SELF_CLIENTS_ENDPOINT}/${userData.id}/accounts`;
      console.log("API URL:", url);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': authHeader,
          'fineract-platform-tenantid': _config__WEBPACK_IMPORTED_MODULE_2__.TENANT_ID,
          'accept': 'application/json'
        }
      });
      const data = await response.json();
      console.log("Accounts response:", JSON.stringify(data, null, 2));
      if (data.savingsAccounts && Array.isArray(data.savingsAccounts)) {
        const formattedProducts = data.savingsAccounts.map(account => ({
          id: account.id,
          productName: account.productName,
          accountNo: account.accountNo,
          accountBalance: account.accountBalance,
          productType: 'savings'
        }));
        setProducts(formattedProducts);
        // If only one product, fetch its transactions
        if (formattedProducts.length === 1) {
          fetchTransactions(formattedProducts[0].id);
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching accounts:", error);
      setIsLoading(false);
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
    fetchSavingsAccounts();
  }, [fetchSavingsAccounts]);
  const handleLogout = () => {
    console.log("Logging out...");
    navigation.navigate("Login");
  };
  const handleNavigateToPortfolio = () => {
    console.log('Navigating to Portfolio with token:', appAuthToken);
    navigation.navigate("Portfolio", {
      userData,
      username,
      password,
      appAuthToken // Pass the appAuthToken
    });
  };
  // Update handleProductSelect function
  const handleProductSelect = product => {
    console.log('Selected product:', product);
    console.log('App Auth Token:', appAuthToken); // Log to verify token
    setSelectedProductId(product.id);
    fetchTransactions(product.id);
  };
  // Add new function to render detailed product view
  const renderProductDetailView = product => react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.backButtonContainer,
    rows: "auto",
    columns: "auto, *"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    col: 0,
    style: styles.backButton,
    text: "\u2190 Back",
    onTap: () => setSelectedProductId(null)
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    col: 1,
    style: styles.productDetailTitle,
    text: "Product Details"
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.savingsCard,
    rows: "auto, auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.sectionTitle,
    text: product.productName
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    style: styles.accountNumber,
    text: `Account: ${product.accountNo}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 2,
    style: styles.accountBalance,
    text: `${formatBalance(product.accountBalance)}`
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.transactionsCard,
    rows: "auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.transactionsSectionTitle,
    text: "Recent Transactions"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    row: 1
  }, transactions.length > 0 ? transactions.slice(0, 5).map(transaction => react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
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
    style: [styles.transactionAmount, transaction.type.toLowerCase().includes('withdrawal') ? styles.negativeAmount : styles.positiveAmount]
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    col: 0,
    text: transaction.date,
    style: styles.transactionDate
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    col: 1,
    text: `Balance:${formatBalance(transaction.runningBalance)}`,
    style: styles.transactionBalance
  }))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.noTransactionsLabel,
    text: "No recent transactions"
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
    columns: "*, *",
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
  }))));
  // Update the render method to show different views based on number of products
  const renderSingleProductView = product => react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.savingsCard,
    rows: "auto, auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.sectionTitle,
    text: product.productName
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    style: styles.accountNumber,
    text: `Account: ${product.accountNo}`
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 2,
    style: styles.accountBalance,
    text: `${formatBalance(product.accountBalance)}`
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.transactionsCard,
    rows: "auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.transactionsSectionTitle,
    text: "Recent Transactions"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    row: 1
  }, transactions.length > 0 ? transactions.slice(0, 5).map(transaction => react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
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
    style: [styles.transactionAmount, transaction.type.toLowerCase().includes('withdrawal') ? styles.negativeAmount : styles.positiveAmount]
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    col: 0,
    text: transaction.date,
    style: styles.transactionDate
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    col: 1,
    text: `Balance: ${formatBalance(transaction.runningBalance)}`,
    style: styles.transactionBalance
  }))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    style: styles.noTransactionsLabel,
    text: "No recent transactions"
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
    columns: "*, *",
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
  }))));
  const renderMultipleProductsView = () => react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.totalBalanceCard,
    rows: "auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.sectionTitle,
    text: "Total Portfolio"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    style: styles.totalBalance,
    text: formatBalance(calculateTotalBalance(products))
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.productsCard,
    rows: "auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.cardTitle,
    text: "Products Summary"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    row: 1
  }, products.map(product => react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    key: product.id,
    style: styles.productItem,
    rows: "auto, auto",
    columns: "*, auto",
    onTap: () => handleProductSelect(product)
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    col: 0,
    text: product.productName,
    style: styles.productName
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    col: 1,
    text: formatBalance(product.accountBalance),
    style: styles.productBalance
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    col: 0,
    text: `Account: ${product.accountNo}`,
    style: styles.productAccount
  }))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    style: styles.quickActionsCard,
    rows: "auto, auto",
    columns: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    style: styles.cardTitle,
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
  }))));
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    rows: "*, auto"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("scrollView", {
    row: 0
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    style: styles.container
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    text: `Welcome, ${getDisplayName()}!`,
    style: styles.headerText
  }), isLoading ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    style: styles.loaderContainer
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("activityIndicator", {
    busy: true,
    style: styles.loader
  })) : products.length === 1 ? renderSingleProductView(products[0]) : selectedProductId ? renderProductDetailView(products.find(p => p.id === selectedProductId)) : renderMultipleProductsView())), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationBar__WEBPACK_IMPORTED_MODULE_3__.NavigationBar, {
    row: 1,
    activeRoute: "Dashboard",
    navigation: navigation,
    userData: {
      ...userData,
      username,
      password,
      appAuthToken
    }
  }));
}
_s(DashboardScreen, "N84BLYl0Bgr+LZjgVqPyq9orfTs=");
_c = DashboardScreen;
const styles = react_nativescript__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#193743",
    paddingBottom: 80
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F5F5F5",
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
    backgroundColor: "#a6ecde",
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
    backgroundColor: "#FE632A",
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
  },
  totalBalanceCard: {
    backgroundColor: "#4A90E2",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 5
  },
  totalBalance: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  productsCard: {
    backgroundColor: "#c5eaea",
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    elevation: 3
  },
  productItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginBottom: 5 // Added spacing between items
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333"
  },
  productBalance: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A90E2"
  },
  productAccount: {
    fontSize: 14,
    color: "#777777"
  },
  loaderContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loader: {
    width: 32,
    height: 32
  },
  transactionBalance: {
    fontSize: 14,
    color: "#777777"
  },
  backButtonContainer: {
    marginBottom: 15
  },
  backButton: {
    fontSize: 16,
    color: "#4A90E2",
    padding: 8,
    width: 100,
    textAlignment: "left"
  },
  productDetailTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F5F5F5",
    textAlignment: "center"
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 20,
    // Increased spacing
    textTransform: "none" // Remove uppercase
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
      userData,
      username: userData?.username,
      password: userData?.password
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
  const handleLogin = async () => {
    console.log("Starting login process...");
    if (!username || !password) {
      console.log("Login failed: Username and password are required");
      setLoginStatus("Username and password are required");
      return;
    }
    setIsLoading(true);
    setLoginStatus("Logging in...");
    console.log("Initiating login...");
    try {
      const userAuthHeader = `Basic ${btoa(`${username}:${password}`)}`;
      console.log("User Authentication Token:", userAuthHeader);
      console.log("App Authentication Token:", appAuthToken);
      const response = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.BASE_URL}${_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.SELF_CLIENTS_ENDPOINT}`, {
        method: 'GET',
        headers: {
          'Authorization': userAuthHeader,
          'fineract-platform-tenantid': _config__WEBPACK_IMPORTED_MODULE_2__.TENANT_ID,
          'accept': 'application/json'
        }
      });
      const data = await response.json();
      console.log("Login response:", JSON.stringify(data, null, 2));
      if (data.pageItems && data.pageItems.length > 0) {
        console.log("Login successful. Navigating to Dashboard...");
        const userDataWithCredentials = {
          ...data.pageItems[0],
          username,
          password
        };
        console.log("User data being passed:", JSON.stringify(userDataWithCredentials, null, 2));
        navigation.navigate("Dashboard", {
          userData: userDataWithCredentials,
          username,
          password,
          appAuthToken: global.base64EncodedAuthenticationKey
        });
        setLoginStatus("Login successful!");
      } else {
        console.log("Login failed: No user data found");
        setLoginStatus("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login process error:", error);
      setLoginStatus("Login failed: " + (error instanceof Error ? error.message : String(error)));
    } finally {
      setIsLoading(false);
      console.log("Login process completed.");
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
/* harmony import */ var _react_navigation_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_nativescript_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-nativescript-navigation/dist/index.js");
/* harmony import */ var _LoginScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/LoginScreen.tsx");
/* harmony import */ var _SignupScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/SignupScreen.tsx");
/* harmony import */ var _SignupSuccessScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/SignupSuccessScreen.tsx");
/* harmony import */ var _DashboardScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/DashboardScreen.tsx");
/* harmony import */ var _InvestmentsScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/InvestmentsScreen.tsx");
/* harmony import */ var _ProfileScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/ProfileScreen.tsx");
/* harmony import */ var _ContributionScreen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/ContributionScreen.tsx");
/* harmony import */ var _ContributionSuccessScreen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/ContributionSuccessScreen.tsx");
/* harmony import */ var _WithdrawScreen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/WithdrawScreen.tsx");
/* harmony import */ var _WithdrawSuccessScreen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/WithdrawSuccessScreen.tsx");
/* harmony import */ var _PortfolioScreen__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/PortfolioScreen.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");















const StackNavigator = (0,react_nativescript_navigation__WEBPACK_IMPORTED_MODULE_2__.stackNavigatorFactory)();
const MainStack = () => react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_navigation_core__WEBPACK_IMPORTED_MODULE_0__.BaseNavigationContainer, null, react__WEBPACK_IMPORTED_MODULE_1__.createElement(StackNavigator.Navigator, {
  initialRouteName: "Login",
  screenOptions: {
    headerShown: false
  }
}, react__WEBPACK_IMPORTED_MODULE_1__.createElement(StackNavigator.Screen, {
  name: "Login",
  component: _LoginScreen__WEBPACK_IMPORTED_MODULE_3__.LoginScreen
}), react__WEBPACK_IMPORTED_MODULE_1__.createElement(StackNavigator.Screen, {
  name: "Signup",
  component: _SignupScreen__WEBPACK_IMPORTED_MODULE_4__.SignupScreen
}), react__WEBPACK_IMPORTED_MODULE_1__.createElement(StackNavigator.Screen, {
  name: "SignupSuccess",
  component: _SignupSuccessScreen__WEBPACK_IMPORTED_MODULE_5__.SignupSuccessScreen
}), react__WEBPACK_IMPORTED_MODULE_1__.createElement(StackNavigator.Screen, {
  name: "Dashboard",
  component: _DashboardScreen__WEBPACK_IMPORTED_MODULE_6__.DashboardScreen,
  initialParams: {
    userData: null
  }
}), react__WEBPACK_IMPORTED_MODULE_1__.createElement(StackNavigator.Screen, {
  name: "Portfolio",
  component: _PortfolioScreen__WEBPACK_IMPORTED_MODULE_13__.PortfolioScreen,
  initialParams: {
    userData: null
  }
}), react__WEBPACK_IMPORTED_MODULE_1__.createElement(StackNavigator.Screen, {
  name: "Investments",
  component: _InvestmentsScreen__WEBPACK_IMPORTED_MODULE_7__.InvestmentsScreen,
  initialParams: {
    userData: null
  }
}), react__WEBPACK_IMPORTED_MODULE_1__.createElement(StackNavigator.Screen, {
  name: "Profile",
  component: _ProfileScreen__WEBPACK_IMPORTED_MODULE_8__.ProfileScreen,
  initialParams: {
    userData: null
  }
}), react__WEBPACK_IMPORTED_MODULE_1__.createElement(StackNavigator.Screen, {
  name: "Contribution",
  component: _ContributionScreen__WEBPACK_IMPORTED_MODULE_9__.ContributionScreen
}), react__WEBPACK_IMPORTED_MODULE_1__.createElement(StackNavigator.Screen, {
  name: "ContributionSuccess",
  component: _ContributionSuccessScreen__WEBPACK_IMPORTED_MODULE_10__.ContributionSuccessScreen
}), react__WEBPACK_IMPORTED_MODULE_1__.createElement(StackNavigator.Screen, {
  name: "Withdraw",
  component: _WithdrawScreen__WEBPACK_IMPORTED_MODULE_11__.WithdrawScreen
}), react__WEBPACK_IMPORTED_MODULE_1__.createElement(StackNavigator.Screen, {
  name: "WithdrawSuccess",
  component: _WithdrawSuccessScreen__WEBPACK_IMPORTED_MODULE_12__.WithdrawSuccessScreen
})));
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
  userData,
  row
}) {
  const handleNavigation = route => {
    if (route !== activeRoute) {
      console.log("Navigating to:", route);
      console.log("userData being passed:", JSON.stringify(userData, null, 2));
      navigation.navigate(route, {
        userData,
        username: userData?.username,
        password: userData?.password,
        appAuthToken: userData?.appAuthToken // Make sure to pass appAuthToken
      });
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
    password,
    appAuthToken
  } = route.params || {};
  console.log("Extracted data:", {
    userDataExists: !!userData,
    userDataId: userData?.id,
    usernameExists: !!username,
    passwordExists: !!password,
    appAuthTokenExists: !!appAuthToken // Log appAuthToken presence
  });
  const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [selectedProductId, setSelectedProductId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [transactions, setTransactions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log("PortfolioScreen useEffect triggered");
    if (userData?.id && username && password) {
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
    if (amount === undefined || isNaN(amount)) {
      return `${symbol} 0.00`;
    }
    return `${symbol} ${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };
  const calculateTotalInvestment = () => {
    return accounts.reduce((total, account) => total + (account.accountBalance || 0), 0);
  };
  const handleProductSelect = account => {
    console.log('\n========== PRODUCT SELECTION ==========');
    console.log('Selected account:', account);
    console.log('Account ID:', account.id);
    console.log('App Auth Token:', appAuthToken); // Log the token
    if (!appAuthToken) {
      console.error('App auth token is missing when selecting product');
      return;
    }
    setSelectedProductId(account.id);
    fetchTransactions(account.id);
  };
  const formatBalance = balance => {
    if (balance === undefined || balance === null || isNaN(balance)) {
      return "KSh 0.00";
    }
    return `KSh ${balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };
  const renderProductDetailView = account => {
    if (!account) {
      console.error('No account found for selected ID');
      return null;
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
      style: styles.backButtonContainer,
      rows: "auto",
      columns: "auto, *"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      col: 0,
      style: styles.backButton,
      text: "\u2190 Back",
      onTap: () => setSelectedProductId(null)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      col: 1,
      style: styles.productDetailTitle,
      text: "Product Details"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
      style: styles.savingsCard,
      rows: "auto, auto, auto",
      columns: "*"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      row: 0,
      style: styles.sectionTitle,
      text: account.productName || 'N/A'
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      row: 1,
      style: styles.accountNumber,
      text: `Account: ${account.accountNo || 'N/A'}`
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      row: 2,
      style: styles.accountBalance,
      text: `Balance: ${formatBalance(account.accountBalance)}`
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
      style: styles.transactionsCard,
      rows: "auto, auto",
      columns: "*"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      row: 0,
      style: styles.transactionsSectionTitle,
      text: "Recent Transactions"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
      row: 1
    }, transactions.length > 0 ? transactions.slice(0, 5).map(transaction => react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
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
      style: [styles.transactionAmount, transaction.type.toLowerCase().includes('withdrawal') ? styles.negativeAmount : styles.positiveAmount]
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      row: 1,
      col: 0,
      text: transaction.date,
      style: styles.transactionDate
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      row: 1,
      col: 1,
      text: `Balance: ${formatBalance(transaction.runningBalance)}`,
      style: styles.transactionBalance
    }))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: styles.noTransactionsLabel,
      text: "No recent transactions"
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
      columns: "*, *",
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
    }))));
  };
  const fetchTransactions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async accountId => {
    try {
      console.log('\n========== FETCHING TRANSACTIONS ==========');
      console.log('Account ID:', accountId);
      console.log('App Auth Token:', appAuthToken);
      if (!appAuthToken) {
        console.error('App authentication token is missing in PortfolioScreen');
        throw new Error('App authentication token is missing');
      }
      const today = new Date();
      const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
      const formatDateStr = date => {
        return date.toISOString().split('T')[0];
      };
      const fromDate = formatDateStr(oneMonthAgo);
      const toDate = formatDateStr(today);
      const url = `${_config__WEBPACK_IMPORTED_MODULE_3__.API_CONFIG.BASE_URL}${_config__WEBPACK_IMPORTED_MODULE_3__.API_CONFIG.SAVINGS_ACCOUNTS_ENDPOINT}/${accountId}/transactions/search?fromDate=${fromDate}&toDate=${toDate}&fromSubmittedDate=${fromDate}&toSubmittedDate=${toDate}&fromAmount=1&toAmount=50000000&types=1,2,3,4,20,21&orderBy=createdDate%2CtransactionDate%2Cid&sortOrder=DESC&dateFormat=yyyy-MM-dd`;
      console.log('Making request with URL:', url);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${appAuthToken}`,
          'fineract-platform-tenantid': _config__WEBPACK_IMPORTED_MODULE_3__.TENANT_ID,
          'accept': 'application/json'
        }
      });
      const data = await response.json();
      console.log('Transaction Data:', JSON.stringify(data, null, 2));
      if (data && data.content && Array.isArray(data.content)) {
        const formattedTransactions = data.content.map(t => ({
          id: t.id,
          date: new Date(t.date[0], t.date[1] - 1, t.date[2]).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          }),
          amount: t.amount,
          type: t.transactionType?.value || 'Transaction',
          description: t.paymentDetailData?.receiptNumber || t.transactionType?.value || 'Transaction',
          runningBalance: t.runningBalance || 0
        }));
        console.log('Formatted Transactions:', formattedTransactions);
        setTransactions(formattedTransactions);
      } else {
        console.warn('No transactions found or invalid data structure:', data);
        setTransactions([]);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setTransactions([]);
    }
  }, [appAuthToken]);
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
  }, loading ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    style: styles.loaderContainer
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("activityIndicator", {
    busy: true,
    style: styles.loader
  })) : error ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    text: error,
    style: styles.errorText
  }) : selectedProductId ?
  // Add null check for found account
  (() => {
    const selectedAccount = accounts.find(acc => acc.id === selectedProductId);
    return selectedAccount ? renderProductDetailView(selectedAccount) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      text: "Account not found",
      style: styles.errorText
    });
  })() :
  // Show regular portfolio view
  react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    text: "Your Portfolio",
    style: styles.headerText
  }), accounts && accounts.length > 0 ? accounts.map(account => react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    key: account.id,
    style: styles.card,
    rows: "auto, auto",
    columns: "*, auto",
    onTap: () => handleProductSelect(account)
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    col: 0,
    text: account.productName || 'N/A',
    style: styles.productName
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 0,
    col: 1,
    text: formatCurrency(account.accountBalance, account.currency?.displaySymbol || 'KSh'),
    style: styles.accountBalance
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    row: 1,
    col: 0,
    text: `Account: ${account.accountNo || 'N/A'}`,
    style: styles.accountNumber
  }))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    text: "No accounts found",
    style: styles.noAccountsLabel
  })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationBar__WEBPACK_IMPORTED_MODULE_2__.NavigationBar, {
    row: 1,
    activeRoute: "Portfolio",
    navigation: navigation,
    userData: {
      ...userData,
      username,
      password,
      appAuthToken
    }
  }));
}
_s(PortfolioScreen, "AawT8rB6O2gzg2e+mpkVoiNXotw=");
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
  },
  loader: {
    margin: 16
  },
  backButtonContainer: {
    marginBottom: 15
  },
  backButton: {
    fontSize: 16,
    color: "#4A90E2",
    padding: 8,
    width: 100,
    textAlignment: "left"
  },
  productDetailTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    textAlignment: "center"
  },
  savingsCard: {
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
  transactionBalance: {
    fontSize: 14,
    color: "#777777"
  },
  noTransactionsLabel: {
    fontSize: 14,
    color: "#757575",
    textAlignment: "center"
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
    padding: 12,
    margin: 4,
    textAlignment: "center",
    elevation: 3
  },
  investButton: {
    backgroundColor: "#4CAF50"
  },
  withdrawButton: {
    backgroundColor: "#2196F3"
  },
  noAccountsLabel: {
    fontSize: 16,
    color: "#777777",
    textAlignment: "center",
    marginTop: 20
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
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();




function ProfileScreen({
  navigation,
  route
}) {
  _s();
  const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(route.params?.userData || {
    displayName: '',
    emailAddress: '',
    mobileNo: '',
    accountNo: ''
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (route.params?.userData) {
      setUserData(route.params.userData);
    }
  }, [route.params?.userData]);
  const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [editedUserData, setEditedUserData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    displayName: userData.displayName,
    emailAddress: userData.emailAddress,
    mobileNo: userData.mobileNo
  });
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    // Here you would typically make an API call to update the user data
    // For now, we'll just update the local state
    setIsEditing(false);
    // Update the global userData state here if needed
  };
  const handleCancel = () => {
    setIsEditing(false);
    setEditedUserData({
      displayName: userData.displayName,
      emailAddress: userData.emailAddress,
      mobileNo: userData.mobileNo
    });
  };
  const handleLogout = () => {
    global.token = null;
    global.userData = null;
    navigation.reset({
      index: 0,
      routes: [{
        name: 'Login'
      }]
    });
  };
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
    text: editedUserData.displayName,
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
    text: editedUserData.emailAddress,
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
    text: editedUserData.mobileNo,
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
_s(ProfileScreen, "gBfqI0sWG1J4tsT7ugXEjg+ZASw=");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vc3JjL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQ29udHJpYnV0aW9uU2NyZWVuLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0NvbnRyaWJ1dGlvblN1Y2Nlc3NTY3JlZW4udHN4Iiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvRGFzaGJvYXJkU2NyZWVuLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0ludmVzdG1lbnRzU2NyZWVuLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0xvZ2luU2NyZWVuLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL01haW5TdGFjay50c3giLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1BvcnRmb2xpb1NjcmVlbi50c3giLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlU2NyZWVuLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1NpZ251cFNjcmVlbi50c3giLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9TaWdudXBTdWNjZXNzU2NyZWVuLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1dpdGhkcmF3U2NyZWVuLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1dpdGhkcmF3U3VjY2Vzc1NjcmVlbi50c3giLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJ+L3BhY2thZ2UuanNvblwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0TmF0aXZlU2NyaXB0IGZyb20gJ3JlYWN0LW5hdGl2ZXNjcmlwdCc7XG5pbXBvcnQgeyBNYWluU3RhY2sgfSBmcm9tICcuL2NvbXBvbmVudHMvTWFpblN0YWNrJztcblxuLy8gSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLnRzIGZpbGUgaXMgdGhlIGVudHJ5IHBvaW50IHRvIHlvdXIgYXBwbGljYXRpb24uIFlvdVxuLy8gY2FuIHVzZSB0aGlzIGZpbGUgdG8gcGVyZm9ybSBhcHAtbGV2ZWwgaW5pdGlhbGl6YXRpb24sIGJ1dCB0aGUgcHJpbWFyeVxuLy8gcHVycG9zZSBvZiB0aGUgZmlsZSBpcyB0byBwYXNzIGNvbnRyb2wgdG8gdGhlIGFwcCdzIGZpcnN0IG1vZHVsZS5cblxuLy8gQ29udHJvbHMgcmVhY3QtbmF0aXZlc2NyaXB0IGxvZyB2ZXJib3NpdHkuXG4vLyAtIHRydWU6IGFsbCBsb2dzO1xuLy8gLSBmYWxzZTogb25seSBlcnJvciBsb2dzLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbCwgJ19fREVWX18nLCB7IHZhbHVlOiBmYWxzZSB9KTtcblxuUmVhY3ROYXRpdmVTY3JpcHQuc3RhcnQoUmVhY3QuY3JlYXRlRWxlbWVudChNYWluU3RhY2ssIHt9LCBudWxsKSk7XG5cbi8vIERvIG5vdCBwbGFjZSBhbnkgY29kZSBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZCBhcyBpdCB3aWxsIG5vdFxuLy8gYmUgZXhlY3V0ZWQgb24gaU9TLlxuIiwiLyogQ1NTMkpTT04gKi9cblxuY29uc3QgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fXyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIqXCIsXCI6OmJlZm9yZVwiLFwiOjphZnRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcm90YXRlXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBpbmNoLXpvb21cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3NcIixcInZhbHVlXCI6XCJwcm94aW1pdHlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1kcm9wLXNoYWRvd1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc2l6ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1sYXlvdXRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tcGFpbnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc3R5bGVcIixcInZhbHVlXCI6XCJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCI6OmJhY2tkcm9wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1yb3RhdGVcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS14XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi14XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGluY2gtem9vbVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzc1wiLFwidmFsdWVcIjpcInByb3hpbWl0eVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC10by1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWRyb3Atc2hhZG93XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLW9wYWNpdHlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zaXplXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLWxheW91dFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1wYWludFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zdHlsZVwiLFwidmFsdWVcIjpcIlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jb250YWluZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubWItNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tYi04XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjMyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRyYW5zZm9ybVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRyYW5zZm9ybVwiLFwidmFsdWVcIjpcInRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5yb3VuZGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm9yZGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMXB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtY2VudGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LTJ4bFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjI0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibGluZS1oZWlnaHRcIixcInZhbHVlXCI6XCIzMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LTN4bFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibGluZS1oZWlnaHRcIixcInZhbHVlXCI6XCIzNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mb250LWJvbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjcwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi51cHBlcmNhc2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LXRyYW5zZm9ybVwiLFwidmFsdWVcIjpcInVwcGVyY2FzZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5pdGFsaWNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXN0eWxlXCIsXCJ2YWx1ZVwiOlwiaXRhbGljXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtd2hpdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNoYWRvd1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJveC1zaGFkb3dcIixcInZhbHVlXCI6XCJ2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM0QTkwRTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmtcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzIxMjEyMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0ZGRkZGRlwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19XG5leHBvcnQgZGVmYXVsdCBfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fXG5jb25zdCB7IGFkZFRhZ2dlZEFkZGl0aW9uYWxDU1MgfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcbmFkZFRhZ2dlZEFkZGl0aW9uYWxDU1MoX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fXywgXCIvVXNlcnMvYWxleG1ib2xvbnppL2VrZXNoYS13b3Jrc3BhY2UvVnVuYVJlYWN0QXBwL3NyYy9hcHAuY3NzXCIpXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KClcblx0bW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcblx0XHRjb25zdCB7IHJlbW92ZVRhZ2dlZEFkZGl0aW9uYWxDU1MgfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblx0XHRyZW1vdmVUYWdnZWRBZGRpdGlvbmFsQ1NTKFwiL1VzZXJzL2FsZXhtYm9sb256aS9la2VzaGEtd29ya3NwYWNlL1Z1bmFSZWFjdEFwcC9zcmMvYXBwLmNzc1wiKVxuXHR9KVxufSIsImV4cG9ydCBjb25zdCBBUElfQ09ORklHID0ge1xuICBCQVNFX1VSTDogJ2h0dHBzOi8vYXBpLnZ1bmEuaW8nLFxuICBBVVRIRU5USUNBVElPTl9FTkRQT0lOVDogJy9maW5lcmFjdC1wcm92aWRlci9hcGkvdjEvYXV0aGVudGljYXRpb24nLFxuICBDTElFTlRTX0VORFBPSU5UOiAnL2ZpbmVyYWN0LXByb3ZpZGVyL2FwaS92MS9jbGllbnRzJyxcbiAgU0FWSU5HU19BQ0NPVU5UU19FTkRQT0lOVDogJy9maW5lcmFjdC1wcm92aWRlci9hcGkvdjEvc2F2aW5nc2FjY291bnRzJyxcbiAgU0VMRl9DTElFTlRTX0VORFBPSU5UOiAnL2ZpbmVyYWN0LXByb3ZpZGVyL2FwaS92MS9zZWxmL2NsaWVudHMnLFxuICBVU0VSU19FTkRQT0lOVDogJy9maW5lcmFjdC1wcm92aWRlci9hcGkvdjEvdXNlcnMnLFxuICBTQVZJTkdTX1BST0RVQ1RTX0VORFBPSU5UOiAnL2ZpbmVyYWN0LXByb3ZpZGVyL2FwaS92MS9zYXZpbmdzcHJvZHVjdHMnLFxufTtcblxuZXhwb3J0IGNvbnN0IEFQUF9BVVRIID0ge1xuICBVU0VSTkFNRTogJ21pZm9zJyxcbiAgUEFTU1dPUkQ6ICdwYXNzd29yZCcsXG59O1xuXG5leHBvcnQgY29uc3QgVEVOQU5UX0lEID0gJ2RlZmF1bHQnO1xuXG5leHBvcnQgY29uc3QgREFURV9GT1JNQVQgPSAnZGQgTU1NTSB5eXl5JztcbmV4cG9ydCBjb25zdCBMT0NBTEUgPSAnZW4nO1xuXG5leHBvcnQgY29uc3QgUFJPRFVDVF9JRCA9IDE7IC8vIEZvciBzYXZpbmdzIGFjY291bnQgY3JlYXRpb25cblxuZXhwb3J0IGNvbnN0IFJPTEVTID0gWzEsIDJdOyAvLyBEZWZhdWx0IHJvbGVzIGZvciBuZXcgdXNlcnNcblxuZXhwb3J0IGNvbnN0IExFR0FMX0ZPUk1fSUQgPSAxO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdFwiO1xuaW1wb3J0IHsgRnJhbWVOYXZpZ2F0aW9uUHJvcCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQtbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgTWFpblN0YWNrUGFyYW1MaXN0IH0gZnJvbSBcIi4uL05hdmlnYXRpb25QYXJhbUxpc3RcIjtcbmltcG9ydCB7IFNjcm9sbFZpZXcsIFN0YWNrTGF5b3V0LCBMYWJlbCwgR3JpZExheW91dCwgVGV4dEZpZWxkLCBCdXR0b24gfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCI7XG5cbnR5cGUgQ29udHJpYnV0aW9uU2NyZWVuUHJvcHMgPSB7XG4gIG5hdmlnYXRpb246IEZyYW1lTmF2aWdhdGlvblByb3A8TWFpblN0YWNrUGFyYW1MaXN0LCBcIkNvbnRyaWJ1dGlvblwiPjtcbiAgcm91dGU6IHsgXG4gICAgcGFyYW1zOiB7IFxuICAgICAgcHJvdmlkZXI6IHN0cmluZztcbiAgICAgIHByb2R1Y3RUeXBlOiBzdHJpbmc7XG4gICAgICBtaW5BbW91bnQ6IG51bWJlcjtcbiAgICAgIG1heEFtb3VudDogbnVtYmVyO1xuICAgIH0gXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQ29udHJpYnV0aW9uU2NyZWVuKHsgbmF2aWdhdGlvbiwgcm91dGUgfTogQ29udHJpYnV0aW9uU2NyZWVuUHJvcHMpIHtcbiAgY29uc3QgeyBwcm92aWRlciwgcHJvZHVjdFR5cGUsIG1pbkFtb3VudCwgbWF4QW1vdW50IH0gPSByb3V0ZS5wYXJhbXM7XG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzUGVyY2VudGFnZSwgc2V0SXNQZXJjZW50YWdlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZyZXF1ZW5jeSwgc2V0RnJlcXVlbmN5XSA9IFJlYWN0LnVzZVN0YXRlKFwibW9udGhseVwiKTtcbiAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdmFsaWRhdGlvbk1lc3NhZ2UsIHNldFZhbGlkYXRpb25NZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHZhbGlkYXRlQW1vdW50ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBudW1WYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIGlmIChpc05hTihudW1WYWx1ZSkpIHtcbiAgICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgbnVtYmVyXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAobnVtVmFsdWUgPCBtaW5BbW91bnQpIHtcbiAgICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKGBNaW5pbXVtIGNvbnRyaWJ1dGlvbiBpcyBLRVMgJHttaW5BbW91bnR9YCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChudW1WYWx1ZSA+IG1heEFtb3VudCkge1xuICAgICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UoYE1heGltdW0gY29udHJpYnV0aW9uIGlzIEtFUyAke21heEFtb3VudH1gKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UoXCJcIik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29uZmlybSA9ICgpID0+IHtcbiAgICBpZiAodmFsaWRhdGVBbW91bnQoYW1vdW50KSkge1xuICAgICAgLy8gSGVyZSB5b3Ugd291bGQgdHlwaWNhbGx5IG1ha2UgYW4gQVBJIGNhbGwgdG8gc2F2ZSB0aGUgY29udHJpYnV0aW9uXG4gICAgICBuYXZpZ2F0aW9uLm5hdmlnYXRlKFwiQ29udHJpYnV0aW9uU3VjY2Vzc1wiLCB7XG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgZnJlcXVlbmN5LFxuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIHByb3ZpZGVyLFxuICAgICAgICBwcm9kdWN0VHlwZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGdyaWRMYXlvdXQgcm93cz1cImF1dG8sICosIGF1dG9cIj5cbiAgICAgIDxncmlkTGF5b3V0IHJvdz17MH0gY29sdW1ucz1cImF1dG8sICpcIiBzdHlsZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxidXR0b24gY29sPXswfSB0ZXh0PVwi4oaQXCIgb25UYXA9eygpID0+IG5hdmlnYXRpb24uZ29CYWNrKCl9IHN0eWxlPXtzdHlsZXMuYmFja0J1dHRvbn0gLz5cbiAgICAgICAgPGxhYmVsIGNvbD17MX0gdGV4dD1cIlNldCBVcCBDb250cmlidXRpb25cIiBzdHlsZT17c3R5bGVzLmhlYWRlclRleHR9IC8+XG4gICAgICA8L2dyaWRMYXlvdXQ+XG5cbiAgICAgIDxzY3JvbGxWaWV3IHJvdz17MX0+XG4gICAgICAgIDxzdGFja0xheW91dCBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGdyaWRMYXlvdXQgc3R5bGU9e3N0eWxlcy5jYXJkfSByb3dzPVwiYXV0bywgYXV0b1wiIGNvbHVtbnM9XCIqXCI+XG4gICAgICAgICAgICA8bGFiZWwgcm93PXswfSBzdHlsZT17c3R5bGVzLnByb3ZpZGVyTmFtZX0gdGV4dD17cHJvdmlkZXJ9IC8+XG4gICAgICAgICAgICA8bGFiZWwgcm93PXsxfSBzdHlsZT17c3R5bGVzLnByb2R1Y3RUeXBlfSB0ZXh0PXtwcm9kdWN0VHlwZX0gLz5cbiAgICAgICAgICA8L2dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICB7LyogQW1vdW50IElucHV0ICovfVxuICAgICAgICAgIDxncmlkTGF5b3V0IHN0eWxlPXtzdHlsZXMuY2FyZH0gcm93cz1cImF1dG8sIGF1dG8sIGF1dG9cIiBjb2x1bW5zPVwiKlwiPlxuICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGl0bGV9IHRleHQ9XCJDb250cmlidXRpb24gQW1vdW50XCIgLz5cbiAgICAgICAgICAgIDxncmlkTGF5b3V0IHJvdz17MX0gY29sdW1ucz1cIiosIGF1dG9cIiBzdHlsZT17c3R5bGVzLmlucHV0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPHRleHRGaWVsZCBcbiAgICAgICAgICAgICAgICBjb2w9ezB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH0gXG4gICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwibnVtYmVyXCIgXG4gICAgICAgICAgICAgICAgaGludD1cIkVudGVyIGFtb3VudFwiIFxuICAgICAgICAgICAgICAgIHRleHQ9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBuZXdBbW91bnQgPSBhcmdzLm9iamVjdC50ZXh0O1xuICAgICAgICAgICAgICAgICAgc2V0QW1vdW50KG5ld0Ftb3VudCk7XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZUFtb3VudChuZXdBbW91bnQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgY29sPXsxfSBcbiAgICAgICAgICAgICAgICBzdHlsZT17W3N0eWxlcy50eXBlVG9nZ2xlLCBpc1BlcmNlbnRhZ2UgJiYgc3R5bGVzLmFjdGl2ZVRvZ2dsZV19IFxuICAgICAgICAgICAgICAgIHRleHQ9e2lzUGVyY2VudGFnZSA/IFwiJVwiIDogXCJLRVNcIn1cbiAgICAgICAgICAgICAgICBvblRhcD17KCkgPT4gc2V0SXNQZXJjZW50YWdlKCFpc1BlcmNlbnRhZ2UpfSBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSA/IFxuICAgICAgICAgICAgICA8bGFiZWwgcm93PXsyfSBzdHlsZT17c3R5bGVzLnZhbGlkYXRpb25NZXNzYWdlfSB0ZXh0PXt2YWxpZGF0aW9uTWVzc2FnZX0gLz4gXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L2dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICB7LyogRnJlcXVlbmN5IFNlbGVjdGlvbiAqL31cbiAgICAgICAgICA8Z3JpZExheW91dCBzdHlsZT17c3R5bGVzLmNhcmR9IHJvd3M9XCJhdXRvLCBhdXRvXCIgY29sdW1ucz1cIipcIj5cbiAgICAgICAgICAgIDxsYWJlbCByb3c9ezB9IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRpdGxlfSB0ZXh0PVwiRnJlcXVlbmN5XCIgLz5cbiAgICAgICAgICAgIDxncmlkTGF5b3V0IHJvdz17MX0gY29sdW1ucz1cIiosICpcIiBzdHlsZT17c3R5bGVzLmZyZXF1ZW5jeUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgY29sPXswfSBcbiAgICAgICAgICAgICAgICBzdHlsZT17W3N0eWxlcy5mcmVxdWVuY3lCdXR0b24sIGZyZXF1ZW5jeSA9PT0gXCJtb250aGx5XCIgJiYgc3R5bGVzLmFjdGl2ZUZyZXF1ZW5jeV19IFxuICAgICAgICAgICAgICAgIHRleHQ9XCJNb250aGx5XCJcbiAgICAgICAgICAgICAgICBvblRhcD17KCkgPT4gc2V0RnJlcXVlbmN5KFwibW9udGhseVwiKX0gXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgY29sPXsxfSBcbiAgICAgICAgICAgICAgICBzdHlsZT17W3N0eWxlcy5mcmVxdWVuY3lCdXR0b24sIGZyZXF1ZW5jeSA9PT0gXCJxdWFydGVybHlcIiAmJiBzdHlsZXMuYWN0aXZlRnJlcXVlbmN5XX0gXG4gICAgICAgICAgICAgICAgdGV4dD1cIlF1YXJ0ZXJseVwiXG4gICAgICAgICAgICAgICAgb25UYXA9eygpID0+IHNldEZyZXF1ZW5jeShcInF1YXJ0ZXJseVwiKX0gXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2dyaWRMYXlvdXQ+XG4gICAgICAgICAgPC9ncmlkTGF5b3V0PlxuXG4gICAgICAgICAgey8qIFN0YXJ0IERhdGUgKi99XG4gICAgICAgICAgPGdyaWRMYXlvdXQgc3R5bGU9e3N0eWxlcy5jYXJkfSByb3dzPVwiYXV0bywgYXV0b1wiIGNvbHVtbnM9XCIqXCI+XG4gICAgICAgICAgICA8bGFiZWwgcm93PXswfSBzdHlsZT17c3R5bGVzLnNlY3Rpb25UaXRsZX0gdGV4dD1cIlN0YXJ0IERhdGVcIiAvPlxuICAgICAgICAgICAgPHRleHRGaWVsZCBcbiAgICAgICAgICAgICAgcm93PXsxfVxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fSBcbiAgICAgICAgICAgICAgaGludD1cIkREL01NL1lZWVlcIiBcbiAgICAgICAgICAgICAgdGV4dD17c3RhcnREYXRlfVxuICAgICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhhcmdzKSA9PiBzZXRTdGFydERhdGUoYXJncy5vYmplY3QudGV4dCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZ3JpZExheW91dD5cblxuICAgICAgICAgIHsvKiBTdW1tYXJ5ICovfVxuICAgICAgICAgIDxncmlkTGF5b3V0IHN0eWxlPXtzdHlsZXMuY2FyZH0gcm93cz1cImF1dG8sIGF1dG9cIiBjb2x1bW5zPVwiKlwiPlxuICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGl0bGV9IHRleHQ9XCJTdW1tYXJ5XCIgLz5cbiAgICAgICAgICAgIDxzdGFja0xheW91dCByb3c9ezF9PlxuICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdW1tYXJ5VGV4dH0gdGV4dD17YEFtb3VudDogJHtpc1BlcmNlbnRhZ2UgPyBhbW91bnQgKyAnJScgOiAnS0VTICcgKyBhbW91bnR9YH0gLz5cbiAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMuc3VtbWFyeVRleHR9IHRleHQ9e2BGcmVxdWVuY3k6ICR7ZnJlcXVlbmN5fWB9IC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLnN1bW1hcnlUZXh0fSB0ZXh0PXtgU3RhcnQgRGF0ZTogJHtzdGFydERhdGUgfHwgJ05vdCBzZXQnfWB9IC8+XG4gICAgICAgICAgICA8L3N0YWNrTGF5b3V0PlxuICAgICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgICAgPC9zdGFja0xheW91dD5cbiAgICAgIDwvc2Nyb2xsVmlldz5cblxuICAgICAgPGJ1dHRvbiByb3c9ezJ9IHN0eWxlPXtzdHlsZXMuY29uZmlybUJ1dHRvbn0gdGV4dD1cIkNvbmZpcm1cIiBvblRhcD17aGFuZGxlQ29uZmlybX0gLz5cbiAgICA8L2dyaWRMYXlvdXQ+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgaGVhZGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBwYWRkaW5nOiAxNixcbiAgICBib3JkZXJCb3R0b21XaWR0aDogMSxcbiAgICBib3JkZXJCb3R0b21Db2xvcjogXCIjRTBFMEUwXCIsXG4gIH0sXG4gIGJhY2tCdXR0b246IHtcbiAgICBmb250U2l6ZTogMjQsXG4gICAgY29sb3I6IFwiIzRBOTBFMlwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIHdpZHRoOiA0MCxcbiAgfSxcbiAgaGVhZGVyVGV4dDoge1xuICAgIGZvbnRTaXplOiAyMCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIHBhZGRpbmc6IDE2LFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjVGNUY1XCIsXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgcGFkZGluZzogMTUsXG4gICAgbWFyZ2luQm90dG9tOiAxNSxcbiAgICBlbGV2YXRpb246IDMsXG4gIH0sXG4gIHByb3ZpZGVyTmFtZToge1xuICAgIGZvbnRTaXplOiAxOCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gIH0sXG4gIHByb2R1Y3RUeXBlOiB7XG4gICAgZm9udFNpemU6IDE0LFxuICAgIGNvbG9yOiBcIiM3NTc1NzVcIixcbiAgfSxcbiAgc2VjdGlvblRpdGxlOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOiBcIiM0QTkwRTJcIixcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICB9LFxuICBpbnB1dENvbnRhaW5lcjoge1xuICAgIG1hcmdpbkJvdHRvbTogOCxcbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgY29sb3I6IFwiIzIxMjEyMVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjVGNUY1XCIsXG4gICAgcGFkZGluZzogMTAsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICB9LFxuICB0eXBlVG9nZ2xlOiB7XG4gICAgd2lkdGg6IDUwLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0UwRTBFMFwiLFxuICAgIGNvbG9yOiBcIiM3NTc1NzVcIixcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgbWFyZ2luTGVmdDogOCxcbiAgfSxcbiAgYWN0aXZlVG9nZ2xlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM0QTkwRTJcIixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gIH0sXG4gIGZyZXF1ZW5jeUNvbnRhaW5lcjoge1xuICAgIG1hcmdpbkJvdHRvbTogOCxcbiAgfSxcbiAgZnJlcXVlbmN5QnV0dG9uOiB7XG4gICAgZm9udFNpemU6IDE0LFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRTBFMEUwXCIsXG4gICAgY29sb3I6IFwiIzc1NzU3NVwiLFxuICAgIGJvcmRlclJhZGl1czogNSxcbiAgICBtYXJnaW46IDQsXG4gIH0sXG4gIGFjdGl2ZUZyZXF1ZW5jeToge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNEE5MEUyXCIsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICB9LFxuICB2YWxpZGF0aW9uTWVzc2FnZToge1xuICAgIGZvbnRTaXplOiAxMixcbiAgICBjb2xvcjogXCIjRUY1MzUwXCIsXG4gICAgbWFyZ2luVG9wOiA0LFxuICB9LFxuICBzdW1tYXJ5VGV4dDoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gICAgbWFyZ2luQm90dG9tOiA0LFxuICB9LFxuICBjb25maXJtQnV0dG9uOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRjcwNDNcIixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIHBhZGRpbmc6IDE2LFxuICAgIG1hcmdpbjogMTYsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICB9LFxufSk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0XCI7XG5pbXBvcnQgeyBGcmFtZU5hdmlnYXRpb25Qcm9wIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC1uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBNYWluU3RhY2tQYXJhbUxpc3QgfSBmcm9tIFwiLi4vTmF2aWdhdGlvblBhcmFtTGlzdFwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQsIExhYmVsLCBCdXR0b24gfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCI7XG5cbnR5cGUgQ29udHJpYnV0aW9uU3VjY2Vzc1NjcmVlblByb3BzID0ge1xuICBuYXZpZ2F0aW9uOiBGcmFtZU5hdmlnYXRpb25Qcm9wPE1haW5TdGFja1BhcmFtTGlzdCwgXCJDb250cmlidXRpb25TdWNjZXNzXCI+O1xuICByb3V0ZTogeyBcbiAgICBwYXJhbXM6IHsgXG4gICAgICBhbW91bnQ6IHN0cmluZztcbiAgICAgIGZyZXF1ZW5jeTogc3RyaW5nO1xuICAgICAgc3RhcnREYXRlOiBzdHJpbmc7XG4gICAgICBwcm92aWRlcjogc3RyaW5nO1xuICAgICAgcHJvZHVjdFR5cGU6IHN0cmluZztcbiAgICB9IFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRyaWJ1dGlvblN1Y2Nlc3NTY3JlZW4oeyBuYXZpZ2F0aW9uLCByb3V0ZSB9OiBDb250cmlidXRpb25TdWNjZXNzU2NyZWVuUHJvcHMpIHtcbiAgY29uc3QgeyBhbW91bnQsIGZyZXF1ZW5jeSwgc3RhcnREYXRlLCBwcm92aWRlciwgcHJvZHVjdFR5cGUgfSA9IHJvdXRlLnBhcmFtcztcblxuICByZXR1cm4gKFxuICAgIDxzdGFja0xheW91dCBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdWNjZXNzSWNvbn0gdGV4dD1cIuKck1wiIC8+XG4gICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy50aXRsZX0gdGV4dD1cIkNvbnRyaWJ1dGlvbiBTZXQgVXAgU3VjY2Vzc2Z1bGx5IVwiIC8+XG4gICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5tZXNzYWdlfSB0ZXh0PVwiWW91ciBpbnZlc3RtZW50IGNvbnRyaWJ1dGlvbiBoYXMgYmVlbiBjb25maWd1cmVkLlwiIC8+XG4gICAgICBcbiAgICAgIDxzdGFja0xheW91dCBzdHlsZT17c3R5bGVzLnN1bW1hcnlDYXJkfT5cbiAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMuc3VtbWFyeVRpdGxlfSB0ZXh0PVwiQ29udHJpYnV0aW9uIERldGFpbHNcIiAvPlxuICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdW1tYXJ5VGV4dH0gdGV4dD17YFByb3ZpZGVyOiAke3Byb3ZpZGVyfWB9IC8+XG4gICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLnN1bW1hcnlUZXh0fSB0ZXh0PXtgUHJvZHVjdDogJHtwcm9kdWN0VHlwZX1gfSAvPlxuICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdW1tYXJ5VGV4dH0gdGV4dD17YEFtb3VudDogS0VTICR7YW1vdW50fWB9IC8+XG4gICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLnN1bW1hcnlUZXh0fSB0ZXh0PXtgRnJlcXVlbmN5OiAke2ZyZXF1ZW5jeX1gfSAvPlxuICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdW1tYXJ5VGV4dH0gdGV4dD17YFN0YXJ0IERhdGU6ICR7c3RhcnREYXRlfWB9IC8+XG4gICAgICA8L3N0YWNrTGF5b3V0PlxuXG4gICAgICA8YnV0dG9uIFxuICAgICAgICBzdHlsZT17c3R5bGVzLmJ1dHRvbn0gXG4gICAgICAgIHRleHQ9XCJSZXR1cm4gdG8gRGFzaGJvYXJkXCIgXG4gICAgICAgIG9uVGFwPXsoKSA9PiBuYXZpZ2F0aW9uLm5hdmlnYXRlKFwiRGFzaGJvYXJkXCIpfSBcbiAgICAgIC8+XG4gICAgPC9zdGFja0xheW91dD5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBjb250YWluZXI6IHtcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjVGNUY1XCIsXG4gICAgcGFkZGluZzogMjAsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbiAgc3VjY2Vzc0ljb246IHtcbiAgICBmb250U2l6ZTogNzIsXG4gICAgY29sb3I6IFwiIzY2QkI2QVwiLFxuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IDI0LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOiBcIiMyMTIxMjFcIixcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG4gIG1lc3NhZ2U6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgY29sb3I6IFwiIzc1NzU3NVwiLFxuICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgfSxcbiAgc3VtbWFyeUNhcmQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgIHBhZGRpbmc6IDIwLFxuICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgZWxldmF0aW9uOiAzLFxuICB9LFxuICBzdW1tYXJ5VGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTgsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgY29sb3I6IFwiIzRBOTBFMlwiLFxuICAgIG1hcmdpbkJvdHRvbTogMTUsXG4gIH0sXG4gIHN1bW1hcnlUZXh0OiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGNvbG9yOiBcIiMyMTIxMjFcIixcbiAgICBtYXJnaW5Cb3R0b206IDgsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRjcwNDNcIixcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgcGFkZGluZzogMTUsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdFwiO1xuaW1wb3J0IHsgRnJhbWVOYXZpZ2F0aW9uUHJvcCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQtbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgTWFpblN0YWNrUGFyYW1MaXN0IH0gZnJvbSBcIi4uL05hdmlnYXRpb25QYXJhbUxpc3RcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQsIExhYmVsLCBTY3JvbGxWaWV3LCBTdGFja0xheW91dCB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmVcIjtcbmltcG9ydCB7IEFQSV9DT05GSUcsIFRFTkFOVF9JRCB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25CYXIgfSBmcm9tIFwiLi9OYXZpZ2F0aW9uQmFyXCI7XG5cbnR5cGUgRGFzaGJvYXJkU2NyZWVuUHJvcHMgPSB7XG4gIG5hdmlnYXRpb246IEZyYW1lTmF2aWdhdGlvblByb3A8TWFpblN0YWNrUGFyYW1MaXN0LCBcIkRhc2hib2FyZFwiPixcbiAgcm91dGU6IHsgcGFyYW1zOiB7IHVzZXJEYXRhOiBhbnksIHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGFwcEF1dGhUb2tlbjogc3RyaW5nIH0gfVxufTtcblxudHlwZSBUcmFuc2FjdGlvbiA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgZGF0ZTogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBydW5uaW5nQmFsYW5jZTogbnVtYmVyO1xufTtcblxuLy8gQWRkIG5ldyB0eXBlcyBmb3IgYmV0dGVyIHR5cGUgc2FmZXR5XG50eXBlIFByb2R1Y3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHByb2R1Y3ROYW1lOiBzdHJpbmc7XG4gIGFjY291bnRObzogc3RyaW5nO1xuICBhY2NvdW50QmFsYW5jZTogbnVtYmVyO1xuICBwcm9kdWN0VHlwZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIERhc2hib2FyZFNjcmVlbih7IG5hdmlnYXRpb24sIHJvdXRlIH06IERhc2hib2FyZFNjcmVlblByb3BzKSB7XG4gIGNvbnN0IHsgdXNlckRhdGEsIHVzZXJuYW1lLCBwYXNzd29yZCwgYXBwQXV0aFRva2VuIH0gPSByb3V0ZS5wYXJhbXM7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGU8UHJvZHVjdFtdPihbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3RyYW5zYWN0aW9ucywgc2V0VHJhbnNhY3Rpb25zXSA9IHVzZVN0YXRlPFRyYW5zYWN0aW9uW10+KFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkUHJvZHVjdElkLCBzZXRTZWxlY3RlZFByb2R1Y3RJZF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcblxuICAvLyBBZGQgdGhpcyBmdW5jdGlvbiB0byBnZXQgdGhlIGRpc3BsYXkgbmFtZVxuICBjb25zdCBnZXREaXNwbGF5TmFtZSA9ICgpID0+IHtcbiAgICBpZiAodXNlckRhdGEuZmlyc3ROYW1lKSB7XG4gICAgICByZXR1cm4gdXNlckRhdGEuZmlyc3ROYW1lLnNwbGl0KCcgJylbMF07XG4gICAgfSBlbHNlIGlmICh1c2VyRGF0YS5kaXNwbGF5TmFtZSkge1xuICAgICAgcmV0dXJuIHVzZXJEYXRhLmRpc3BsYXlOYW1lLnNwbGl0KCcgJylbMF07XG4gICAgfSBlbHNlIGlmICh1c2VyRGF0YS5uYW1lKSB7XG4gICAgICByZXR1cm4gdXNlckRhdGEubmFtZS5zcGxpdCgnICcpWzBdO1xuICAgIH0gZWxzZSBpZiAodXNlckRhdGEudXNlcm5hbWUpIHtcbiAgICAgIHJldHVybiB1c2VyRGF0YS51c2VybmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdVc2VyJztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZm9ybWF0QmFsYW5jZSA9IChiYWxhbmNlOiBudW1iZXIgfCB1bmRlZmluZWQpOiBzdHJpbmcgPT4ge1xuICAgIGlmIChiYWxhbmNlID09PSB1bmRlZmluZWQgfHwgaXNOYU4oYmFsYW5jZSkpIHtcbiAgICAgIHJldHVybiBcIktTaCAwLjAwXCI7XG4gICAgfVxuICAgIGNvbnN0IHBhcnRzID0gYmFsYW5jZS50b0ZpeGVkKDIpLnNwbGl0KFwiLlwiKTtcbiAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgICByZXR1cm4gYEtTaCAke3BhcnRzLmpvaW4oXCIuXCIpfWA7XG4gIH07XG5cbiAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlOiBEYXRlKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gIH07XG5cbiAgLy8gQWRkIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0b3RhbCBiYWxhbmNlXG4gIGNvbnN0IGNhbGN1bGF0ZVRvdGFsQmFsYW5jZSA9IHVzZUNhbGxiYWNrKChwcm9kdWN0TGlzdDogUHJvZHVjdFtdKSA9PiB7XG4gICAgcmV0dXJuIHByb2R1Y3RMaXN0LnJlZHVjZSgodG90YWwsIHByb2R1Y3QpID0+IHRvdGFsICsgKHByb2R1Y3QuYWNjb3VudEJhbGFuY2UgfHwgMCksIDApO1xuICB9LCBbXSk7XG5cbiAgLy8gVXBkYXRlIGZldGNoU2F2aW5nc0FjY291bnQgdG8gaGFuZGxlIG11bHRpcGxlIHByb2R1Y3RzXG4gIGNvbnN0IGZldGNoU2F2aW5nc0FjY291bnRzID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZldGNoaW5nIHNhdmluZ3MgYWNjb3VudHMgaW5mb3JtYXRpb24uLi5cIik7XG4gICAgICBjb25zdCBhdXRoSGVhZGVyID0gYEJhc2ljICR7YnRvYShgJHt1c2VybmFtZX06JHtwYXNzd29yZH1gKX1gO1xuXG4gICAgICBjb25zdCB1cmwgPSBgJHtBUElfQ09ORklHLkJBU0VfVVJMfSR7QVBJX0NPTkZJRy5TRUxGX0NMSUVOVFNfRU5EUE9JTlR9LyR7dXNlckRhdGEuaWR9L2FjY291bnRzYDtcbiAgICAgIGNvbnNvbGUubG9nKFwiQVBJIFVSTDpcIiwgdXJsKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYXV0aEhlYWRlcixcbiAgICAgICAgICAnZmluZXJhY3QtcGxhdGZvcm0tdGVuYW50aWQnOiBURU5BTlRfSUQsXG4gICAgICAgICAgJ2FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudHMgcmVzcG9uc2U6XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcblxuICAgICAgaWYgKGRhdGEuc2F2aW5nc0FjY291bnRzICYmIEFycmF5LmlzQXJyYXkoZGF0YS5zYXZpbmdzQWNjb3VudHMpKSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFByb2R1Y3RzID0gZGF0YS5zYXZpbmdzQWNjb3VudHMubWFwKChhY2NvdW50OiBhbnkpID0+ICh7XG4gICAgICAgICAgaWQ6IGFjY291bnQuaWQsXG4gICAgICAgICAgcHJvZHVjdE5hbWU6IGFjY291bnQucHJvZHVjdE5hbWUsXG4gICAgICAgICAgYWNjb3VudE5vOiBhY2NvdW50LmFjY291bnRObyxcbiAgICAgICAgICBhY2NvdW50QmFsYW5jZTogYWNjb3VudC5hY2NvdW50QmFsYW5jZSxcbiAgICAgICAgICBwcm9kdWN0VHlwZTogJ3NhdmluZ3MnXG4gICAgICAgIH0pKTtcbiAgICAgICAgXG4gICAgICAgIHNldFByb2R1Y3RzKGZvcm1hdHRlZFByb2R1Y3RzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIG9ubHkgb25lIHByb2R1Y3QsIGZldGNoIGl0cyB0cmFuc2FjdGlvbnNcbiAgICAgICAgaWYgKGZvcm1hdHRlZFByb2R1Y3RzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGZldGNoVHJhbnNhY3Rpb25zKGZvcm1hdHRlZFByb2R1Y3RzWzBdLmlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGFjY291bnRzOlwiLCBlcnJvcik7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW3VzZXJEYXRhLmlkLCB1c2VybmFtZSwgcGFzc3dvcmRdKTtcblxuICBjb25zdCBmZXRjaFRyYW5zYWN0aW9ucyA9IHVzZUNhbGxiYWNrKGFzeW5jIChhY2NvdW50SWQ6IG51bWJlcikgPT4ge1xuICAgIGlmICghYXBwQXV0aFRva2VuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiQXBwIGF1dGhlbnRpY2F0aW9uIHRva2VuIGlzIG5vdCBhdmFpbGFibGUuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBvbmVNb250aEFnbyA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCkgLSAxLCB0b2RheS5nZXREYXRlKCkpO1xuICAgICAgY29uc3QgZnJvbURhdGUgPSBmb3JtYXREYXRlKG9uZU1vbnRoQWdvKTtcbiAgICAgIGNvbnN0IHRvRGF0ZSA9IGZvcm1hdERhdGUodG9kYXkpO1xuXG4gICAgICBjb25zdCB1c2VyQXV0aEhlYWRlciA9IGBCYXNpYyAke2J0b2EoYCR7dXNlcm5hbWV9OiR7cGFzc3dvcmR9YCl9YDtcbiAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBBdXRoZW50aWNhdGlvbiBUb2tlbiBmb3IgdHJhbnNhY3Rpb25zOlwiLCB1c2VyQXV0aEhlYWRlcik7XG4gICAgICBjb25zb2xlLmxvZyhcIkFwcCBBdXRoZW50aWNhdGlvbiBUb2tlbiBmb3IgdHJhbnNhY3Rpb25zOlwiLCBhcHBBdXRoVG9rZW4pO1xuXG4gICAgICBjb25zdCB1cmwgPSBgJHtBUElfQ09ORklHLkJBU0VfVVJMfSR7QVBJX0NPTkZJRy5TQVZJTkdTX0FDQ09VTlRTX0VORFBPSU5UfS8ke2FjY291bnRJZH0vdHJhbnNhY3Rpb25zL3NlYXJjaD9mcm9tRGF0ZT0ke2Zyb21EYXRlfSZ0b0RhdGU9JHt0b0RhdGV9JmZyb21TdWJtaXR0ZWREYXRlPSR7ZnJvbURhdGV9JnRvU3VibWl0dGVkRGF0ZT0ke3RvRGF0ZX0mZnJvbUFtb3VudD0xJnRvQW1vdW50PTUwMDAwMDAwJnR5cGVzPTEsMiwzLDQsMjAsMjEmb3JkZXJCeT1jcmVhdGVkRGF0ZSUyQ3RyYW5zYWN0aW9uRGF0ZSUyQ2lkJnNvcnRPcmRlcj1ERVNDJmRhdGVGb3JtYXQ9eXl5eS1NTS1kZGA7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgdHJhbnNhY3Rpb25zIGZyb20gVVJMOlwiLCB1cmwpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmFzaWMgJHthcHBBdXRoVG9rZW59YCxcbiAgICAgICAgICAnZmluZXJhY3QtcGxhdGZvcm0tdGVuYW50aWQnOiBURU5BTlRfSUQsXG4gICAgICAgICAgJ2FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgY29uc29sZS5sb2coXCJGdWxsIHRyYW5zYWN0aW9uIHJlc3BvbnNlOlwiLCByZXNwb25zZVRleHQpO1xuXG4gICAgICBsZXQgZGF0YTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCk7XG4gICAgICB9IGNhdGNoIChwYXJzZUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIEpTT046XCIsIHBhcnNlRXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiUGFyc2VkIHRyYW5zYWN0aW9uIGRhdGE6XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcblxuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5jb250ZW50ICYmIEFycmF5LmlzQXJyYXkoZGF0YS5jb250ZW50KSkge1xuICAgICAgICBzZXRUcmFuc2FjdGlvbnMoZGF0YS5jb250ZW50Lm1hcCgodDogYW55KSA9PiAoe1xuICAgICAgICAgIGlkOiB0LmlkLFxuICAgICAgICAgIGRhdGU6IGAke3QuZGF0ZVswXX0tJHt0LmRhdGVbMV0udG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfS0ke3QuZGF0ZVsyXS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YCxcbiAgICAgICAgICBhbW91bnQ6IHQuYW1vdW50LFxuICAgICAgICAgIHR5cGU6IHQudHJhbnNhY3Rpb25UeXBlLnZhbHVlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB0LnBheW1lbnREZXRhaWxEYXRhPy5wYXltZW50VHlwZT8ubmFtZSB8fCB0LnRyYW5zYWN0aW9uVHlwZS52YWx1ZSxcbiAgICAgICAgICBydW5uaW5nQmFsYW5jZTogdC5ydW5uaW5nQmFsYW5jZVxuICAgICAgICB9KSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlVuZXhwZWN0ZWQgZGF0YSBzdHJ1Y3R1cmU6XCIsIGRhdGEpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdHJhbnNhY3Rpb25zOlwiLCBlcnJvcik7XG4gICAgfVxuICB9LCBbdXNlcm5hbWUsIHBhc3N3b3JkLCBhcHBBdXRoVG9rZW5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoU2F2aW5nc0FjY291bnRzKCk7XG4gIH0sIFtmZXRjaFNhdmluZ3NBY2NvdW50c10pO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkxvZ2dpbmcgb3V0Li4uXCIpO1xuICAgIG5hdmlnYXRpb24ubmF2aWdhdGUoXCJMb2dpblwiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVOYXZpZ2F0ZVRvUG9ydGZvbGlvID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0aW5nIHRvIFBvcnRmb2xpbyB3aXRoIHRva2VuOicsIGFwcEF1dGhUb2tlbik7XG4gICAgbmF2aWdhdGlvbi5uYXZpZ2F0ZShcIlBvcnRmb2xpb1wiLCB7XG4gICAgICB1c2VyRGF0YSxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmQsXG4gICAgICBhcHBBdXRoVG9rZW4gLy8gUGFzcyB0aGUgYXBwQXV0aFRva2VuXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gVXBkYXRlIGhhbmRsZVByb2R1Y3RTZWxlY3QgZnVuY3Rpb25cbiAgY29uc3QgaGFuZGxlUHJvZHVjdFNlbGVjdCA9IChwcm9kdWN0OiBQcm9kdWN0KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIHByb2R1Y3Q6JywgcHJvZHVjdCk7XG4gICAgY29uc29sZS5sb2coJ0FwcCBBdXRoIFRva2VuOicsIGFwcEF1dGhUb2tlbik7IC8vIExvZyB0byB2ZXJpZnkgdG9rZW5cbiAgICBzZXRTZWxlY3RlZFByb2R1Y3RJZChwcm9kdWN0LmlkKTtcbiAgICBmZXRjaFRyYW5zYWN0aW9ucyhwcm9kdWN0LmlkKTtcbiAgfTtcblxuICAvLyBBZGQgbmV3IGZ1bmN0aW9uIHRvIHJlbmRlciBkZXRhaWxlZCBwcm9kdWN0IHZpZXdcbiAgY29uc3QgcmVuZGVyUHJvZHVjdERldGFpbFZpZXcgPSAocHJvZHVjdDogUHJvZHVjdCkgPT4gKFxuICAgIDw+XG4gICAgICB7LyogQmFjayBCdXR0b24gKi99XG4gICAgICA8Z3JpZExheW91dCBzdHlsZT17c3R5bGVzLmJhY2tCdXR0b25Db250YWluZXJ9IHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sICpcIj5cbiAgICAgICAgPGJ1dHRvbiBjb2w9ezB9IHN0eWxlPXtzdHlsZXMuYmFja0J1dHRvbn0gdGV4dD1cIuKGkCBCYWNrXCIgXG4gICAgICAgICAgb25UYXA9eygpID0+IHNldFNlbGVjdGVkUHJvZHVjdElkKG51bGwpfSAvPlxuICAgICAgICA8bGFiZWwgY29sPXsxfSBzdHlsZT17c3R5bGVzLnByb2R1Y3REZXRhaWxUaXRsZX0gdGV4dD1cIlByb2R1Y3QgRGV0YWlsc1wiIC8+XG4gICAgICA8L2dyaWRMYXlvdXQ+XG5cbiAgICAgIHsvKiBCYWxhbmNlIENhcmQgKi99XG4gICAgICA8Z3JpZExheW91dCBzdHlsZT17c3R5bGVzLnNhdmluZ3NDYXJkfSByb3dzPVwiYXV0bywgYXV0bywgYXV0b1wiIGNvbHVtbnM9XCIqXCI+XG4gICAgICAgIDxsYWJlbCByb3c9ezB9IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRpdGxlfSB0ZXh0PXtwcm9kdWN0LnByb2R1Y3ROYW1lfSAvPlxuICAgICAgICA8bGFiZWwgcm93PXsxfSBzdHlsZT17c3R5bGVzLmFjY291bnROdW1iZXJ9IHRleHQ9e2BBY2NvdW50OiAke3Byb2R1Y3QuYWNjb3VudE5vfWB9IC8+XG4gICAgICAgIDxsYWJlbCByb3c9ezJ9IHN0eWxlPXtzdHlsZXMuYWNjb3VudEJhbGFuY2V9IHRleHQ9e2Ake2Zvcm1hdEJhbGFuY2UocHJvZHVjdC5hY2NvdW50QmFsYW5jZSl9YH0gLz5cbiAgICAgIDwvZ3JpZExheW91dD5cblxuICAgICAgey8qIFRyYW5zYWN0aW9ucyBDYXJkICovfVxuICAgICAgPGdyaWRMYXlvdXQgc3R5bGU9e3N0eWxlcy50cmFuc2FjdGlvbnNDYXJkfSByb3dzPVwiYXV0bywgYXV0b1wiIGNvbHVtbnM9XCIqXCI+XG4gICAgICAgIDxsYWJlbCByb3c9ezB9IHN0eWxlPXtzdHlsZXMudHJhbnNhY3Rpb25zU2VjdGlvblRpdGxlfSB0ZXh0PVwiUmVjZW50IFRyYW5zYWN0aW9uc1wiIC8+XG4gICAgICAgIDxzdGFja0xheW91dCByb3c9ezF9PlxuICAgICAgICAgIHt0cmFuc2FjdGlvbnMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIHRyYW5zYWN0aW9ucy5zbGljZSgwLCA1KS5tYXAoKHRyYW5zYWN0aW9uKSA9PiAoXG4gICAgICAgICAgICAgIDxncmlkTGF5b3V0IGtleT17dHJhbnNhY3Rpb24uaWR9IHN0eWxlPXtzdHlsZXMudHJhbnNhY3Rpb25JdGVtfSByb3dzPVwiYXV0bywgYXV0b1wiIGNvbHVtbnM9XCIqLCBhdXRvXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gY29sPXswfSB0ZXh0PXt0cmFuc2FjdGlvbi5kZXNjcmlwdGlvbn0gc3R5bGU9e3N0eWxlcy50cmFuc2FjdGlvbkRlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCByb3c9ezB9IGNvbD17MX0gdGV4dD17Zm9ybWF0QmFsYW5jZSh0cmFuc2FjdGlvbi5hbW91bnQpfSBcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtbc3R5bGVzLnRyYW5zYWN0aW9uQW1vdW50LCBcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24udHlwZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCd3aXRoZHJhd2FsJykgPyBcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMubmVnYXRpdmVBbW91bnQgOiBzdHlsZXMucG9zaXRpdmVBbW91bnRdfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCByb3c9ezF9IGNvbD17MH0gdGV4dD17dHJhbnNhY3Rpb24uZGF0ZX0gc3R5bGU9e3N0eWxlcy50cmFuc2FjdGlvbkRhdGV9IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MX0gY29sPXsxfSB0ZXh0PXtgQmFsYW5jZToke2Zvcm1hdEJhbGFuY2UodHJhbnNhY3Rpb24ucnVubmluZ0JhbGFuY2UpfWB9IFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy50cmFuc2FjdGlvbkJhbGFuY2V9IC8+XG4gICAgICAgICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLm5vVHJhbnNhY3Rpb25zTGFiZWx9IHRleHQ9XCJObyByZWNlbnQgdHJhbnNhY3Rpb25zXCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L3N0YWNrTGF5b3V0PlxuICAgICAgPC9ncmlkTGF5b3V0PlxuXG4gICAgICB7LyogUXVpY2sgQWN0aW9ucyBDYXJkICovfVxuICAgICAgPGdyaWRMYXlvdXQgc3R5bGU9e3N0eWxlcy5xdWlja0FjdGlvbnNDYXJkfSByb3dzPVwiYXV0bywgYXV0b1wiIGNvbHVtbnM9XCIqXCI+XG4gICAgICAgIDxsYWJlbCByb3c9ezB9IHN0eWxlPXtzdHlsZXMucXVpY2tBY3Rpb25zU2VjdGlvblRpdGxlfSB0ZXh0PVwiUXVpY2sgQWN0aW9uc1wiIC8+XG4gICAgICAgIDxncmlkTGF5b3V0IHJvdz17MX0gY29sdW1ucz1cIiosICpcIiBzdHlsZT17c3R5bGVzLnF1aWNrQWN0aW9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgPGJ1dHRvbiBjb2w9ezB9IHN0eWxlPXtbc3R5bGVzLmFjdGlvbkJ1dHRvbiwgc3R5bGVzLmludmVzdEJ1dHRvbl19IFxuICAgICAgICAgICAgdGV4dD1cIkludmVzdFwiIG9uVGFwPXsoKSA9PiBuYXZpZ2F0aW9uLm5hdmlnYXRlKFwiSW52ZXN0bWVudHNcIiwgeyB1c2VyRGF0YSB9KX0gLz5cbiAgICAgICAgICA8YnV0dG9uIGNvbD17MX0gc3R5bGU9e1tzdHlsZXMuYWN0aW9uQnV0dG9uLCBzdHlsZXMud2l0aGRyYXdCdXR0b25dfSBcbiAgICAgICAgICAgIHRleHQ9XCJXaXRoZHJhd1wiIG9uVGFwPXsoKSA9PiBuYXZpZ2F0aW9uLm5hdmlnYXRlKFwiV2l0aGRyYXdcIil9IC8+XG4gICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgIDwvZ3JpZExheW91dD5cbiAgICA8Lz5cbiAgKTtcblxuICAvLyBVcGRhdGUgdGhlIHJlbmRlciBtZXRob2QgdG8gc2hvdyBkaWZmZXJlbnQgdmlld3MgYmFzZWQgb24gbnVtYmVyIG9mIHByb2R1Y3RzXG4gIGNvbnN0IHJlbmRlclNpbmdsZVByb2R1Y3RWaWV3ID0gKHByb2R1Y3Q6IFByb2R1Y3QpID0+IChcbiAgICA8PlxuICAgICAgey8qIEJhbGFuY2UgQ2FyZCAqL31cbiAgICAgIDxncmlkTGF5b3V0IHN0eWxlPXtzdHlsZXMuc2F2aW5nc0NhcmR9IHJvd3M9XCJhdXRvLCBhdXRvLCBhdXRvXCIgY29sdW1ucz1cIipcIj5cbiAgICAgICAgPGxhYmVsIHJvdz17MH0gc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGl0bGV9IHRleHQ9e3Byb2R1Y3QucHJvZHVjdE5hbWV9IC8+XG4gICAgICAgIDxsYWJlbCByb3c9ezF9IHN0eWxlPXtzdHlsZXMuYWNjb3VudE51bWJlcn0gdGV4dD17YEFjY291bnQ6ICR7cHJvZHVjdC5hY2NvdW50Tm99YH0gLz5cbiAgICAgICAgPGxhYmVsIHJvdz17Mn0gc3R5bGU9e3N0eWxlcy5hY2NvdW50QmFsYW5jZX0gdGV4dD17YCR7Zm9ybWF0QmFsYW5jZShwcm9kdWN0LmFjY291bnRCYWxhbmNlKX1gfSAvPlxuICAgICAgPC9ncmlkTGF5b3V0PlxuXG4gICAgICB7LyogVHJhbnNhY3Rpb25zIENhcmQgKi99XG4gICAgICA8Z3JpZExheW91dCBzdHlsZT17c3R5bGVzLnRyYW5zYWN0aW9uc0NhcmR9IHJvd3M9XCJhdXRvLCBhdXRvXCIgY29sdW1ucz1cIipcIj5cbiAgICAgICAgPGxhYmVsIHJvdz17MH0gc3R5bGU9e3N0eWxlcy50cmFuc2FjdGlvbnNTZWN0aW9uVGl0bGV9IHRleHQ9XCJSZWNlbnQgVHJhbnNhY3Rpb25zXCIgLz5cbiAgICAgICAgPHN0YWNrTGF5b3V0IHJvdz17MX0+XG4gICAgICAgICAge3RyYW5zYWN0aW9ucy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25zLnNsaWNlKDAsIDUpLm1hcCgodHJhbnNhY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgPGdyaWRMYXlvdXQga2V5PXt0cmFuc2FjdGlvbi5pZH0gc3R5bGU9e3N0eWxlcy50cmFuc2FjdGlvbkl0ZW19IHJvd3M9XCJhdXRvLCBhdXRvXCIgY29sdW1ucz1cIiosIGF1dG9cIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgcm93PXswfSBjb2w9ezB9IHRleHQ9e3RyYW5zYWN0aW9uLmRlc2NyaXB0aW9ufSBzdHlsZT17c3R5bGVzLnRyYW5zYWN0aW9uRGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gY29sPXsxfSB0ZXh0PXtmb3JtYXRCYWxhbmNlKHRyYW5zYWN0aW9uLmFtb3VudCl9IFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e1tzdHlsZXMudHJhbnNhY3Rpb25BbW91bnQsIFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi50eXBlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3dpdGhkcmF3YWwnKSA/IFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5uZWdhdGl2ZUFtb3VudCA6IHN0eWxlcy5wb3NpdGl2ZUFtb3VudF19IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MX0gY29sPXswfSB0ZXh0PXt0cmFuc2FjdGlvbi5kYXRlfSBzdHlsZT17c3R5bGVzLnRyYW5zYWN0aW9uRGF0ZX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgcm93PXsxfSBjb2w9ezF9IHRleHQ9e2BCYWxhbmNlOiAke2Zvcm1hdEJhbGFuY2UodHJhbnNhY3Rpb24ucnVubmluZ0JhbGFuY2UpfWB9IFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy50cmFuc2FjdGlvbkJhbGFuY2V9IC8+XG4gICAgICAgICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLm5vVHJhbnNhY3Rpb25zTGFiZWx9IHRleHQ9XCJObyByZWNlbnQgdHJhbnNhY3Rpb25zXCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L3N0YWNrTGF5b3V0PlxuICAgICAgPC9ncmlkTGF5b3V0PlxuXG4gICAgICB7LyogUXVpY2sgQWN0aW9ucyBDYXJkICovfVxuICAgICAgPGdyaWRMYXlvdXQgc3R5bGU9e3N0eWxlcy5xdWlja0FjdGlvbnNDYXJkfSByb3dzPVwiYXV0bywgYXV0b1wiIGNvbHVtbnM9XCIqXCI+XG4gICAgICAgIDxsYWJlbCByb3c9ezB9IHN0eWxlPXtzdHlsZXMucXVpY2tBY3Rpb25zU2VjdGlvblRpdGxlfSB0ZXh0PVwiUXVpY2sgQWN0aW9uc1wiIC8+XG4gICAgICAgIDxncmlkTGF5b3V0IHJvdz17MX0gY29sdW1ucz1cIiosICpcIiBzdHlsZT17c3R5bGVzLnF1aWNrQWN0aW9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgPGJ1dHRvbiBjb2w9ezB9IHN0eWxlPXtbc3R5bGVzLmFjdGlvbkJ1dHRvbiwgc3R5bGVzLmludmVzdEJ1dHRvbl19IFxuICAgICAgICAgICAgdGV4dD1cIkludmVzdFwiIG9uVGFwPXsoKSA9PiBuYXZpZ2F0aW9uLm5hdmlnYXRlKFwiSW52ZXN0bWVudHNcIiwgeyB1c2VyRGF0YSB9KX0gLz5cbiAgICAgICAgICA8YnV0dG9uIGNvbD17MX0gc3R5bGU9e1tzdHlsZXMuYWN0aW9uQnV0dG9uLCBzdHlsZXMud2l0aGRyYXdCdXR0b25dfSBcbiAgICAgICAgICAgIHRleHQ9XCJXaXRoZHJhd1wiIG9uVGFwPXsoKSA9PiBuYXZpZ2F0aW9uLm5hdmlnYXRlKFwiV2l0aGRyYXdcIil9IC8+XG4gICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgIDwvZ3JpZExheW91dD5cbiAgICA8Lz5cbiAgKTtcblxuICBjb25zdCByZW5kZXJNdWx0aXBsZVByb2R1Y3RzVmlldyA9ICgpID0+IChcbiAgICA8PlxuICAgICAgey8qIFRvdGFsIEJhbGFuY2UgQ2FyZCAqL31cbiAgICAgIDxncmlkTGF5b3V0IHN0eWxlPXtzdHlsZXMudG90YWxCYWxhbmNlQ2FyZH0gcm93cz1cImF1dG8sIGF1dG9cIiBjb2x1bW5zPVwiKlwiPlxuICAgICAgICA8bGFiZWwgcm93PXswfSBzdHlsZT17c3R5bGVzLnNlY3Rpb25UaXRsZX0gdGV4dD1cIlRvdGFsIFBvcnRmb2xpb1wiIC8+XG4gICAgICAgIDxsYWJlbCByb3c9ezF9IHN0eWxlPXtzdHlsZXMudG90YWxCYWxhbmNlfSB0ZXh0PXtmb3JtYXRCYWxhbmNlKGNhbGN1bGF0ZVRvdGFsQmFsYW5jZShwcm9kdWN0cykpfSAvPlxuICAgICAgPC9ncmlkTGF5b3V0PlxuXG4gICAgICB7LyogUHJvZHVjdHMgU3VtbWFyeSBDYXJkICovfVxuICAgICAgPGdyaWRMYXlvdXQgc3R5bGU9e3N0eWxlcy5wcm9kdWN0c0NhcmR9IHJvd3M9XCJhdXRvLCBhdXRvXCIgY29sdW1ucz1cIipcIj5cbiAgICAgICAgPGxhYmVsIHJvdz17MH0gc3R5bGU9e3N0eWxlcy5jYXJkVGl0bGV9IHRleHQ9XCJQcm9kdWN0cyBTdW1tYXJ5XCIgLz5cbiAgICAgICAgPHN0YWNrTGF5b3V0IHJvdz17MX0+XG4gICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgPGdyaWRMYXlvdXQga2V5PXtwcm9kdWN0LmlkfSBzdHlsZT17c3R5bGVzLnByb2R1Y3RJdGVtfSByb3dzPVwiYXV0bywgYXV0b1wiIFxuICAgICAgICAgICAgICBjb2x1bW5zPVwiKiwgYXV0b1wiIG9uVGFwPXsoKSA9PiBoYW5kbGVQcm9kdWN0U2VsZWN0KHByb2R1Y3QpfT5cbiAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gY29sPXswfSB0ZXh0PXtwcm9kdWN0LnByb2R1Y3ROYW1lfSBzdHlsZT17c3R5bGVzLnByb2R1Y3ROYW1lfSAvPlxuICAgICAgICAgICAgICA8bGFiZWwgcm93PXswfSBjb2w9ezF9IHRleHQ9e2Zvcm1hdEJhbGFuY2UocHJvZHVjdC5hY2NvdW50QmFsYW5jZSl9IHN0eWxlPXtzdHlsZXMucHJvZHVjdEJhbGFuY2V9IC8+XG4gICAgICAgICAgICAgIDxsYWJlbCByb3c9ezF9IGNvbD17MH0gdGV4dD17YEFjY291bnQ6ICR7cHJvZHVjdC5hY2NvdW50Tm99YH0gc3R5bGU9e3N0eWxlcy5wcm9kdWN0QWNjb3VudH0gLz5cbiAgICAgICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zdGFja0xheW91dD5cbiAgICAgIDwvZ3JpZExheW91dD5cblxuICAgICAgey8qIFF1aWNrIEFjdGlvbnMgQ2FyZCAqL31cbiAgICAgIDxncmlkTGF5b3V0IHN0eWxlPXtzdHlsZXMucXVpY2tBY3Rpb25zQ2FyZH0gcm93cz1cImF1dG8sIGF1dG9cIiBjb2x1bW5zPVwiKlwiPlxuICAgICAgICA8bGFiZWwgcm93PXswfSBzdHlsZT17c3R5bGVzLmNhcmRUaXRsZX0gdGV4dD1cIlF1aWNrIEFjdGlvbnNcIiAvPlxuICAgICAgICA8Z3JpZExheW91dCByb3c9ezF9IGNvbHVtbnM9XCIqLCAqLCAqXCIgc3R5bGU9e3N0eWxlcy5xdWlja0FjdGlvbnNDb250YWluZXJ9PlxuICAgICAgICAgIDxidXR0b24gY29sPXswfSBzdHlsZT17W3N0eWxlcy5hY3Rpb25CdXR0b24sIHN0eWxlcy5pbnZlc3RCdXR0b25dfSB0ZXh0PVwiSW52ZXN0XCIgXG4gICAgICAgICAgICBvblRhcD17KCkgPT4gbmF2aWdhdGlvbi5uYXZpZ2F0ZShcIkludmVzdG1lbnRzXCIsIHsgdXNlckRhdGEgfSl9IC8+XG4gICAgICAgICAgPGJ1dHRvbiBjb2w9ezF9IHN0eWxlPXtbc3R5bGVzLmFjdGlvbkJ1dHRvbiwgc3R5bGVzLndpdGhkcmF3QnV0dG9uXX0gdGV4dD1cIldpdGhkcmF3XCIgXG4gICAgICAgICAgICBvblRhcD17KCkgPT4gbmF2aWdhdGlvbi5uYXZpZ2F0ZShcIldpdGhkcmF3XCIpfSAvPlxuICAgICAgICAgIDxidXR0b24gY29sPXsyfSBzdHlsZT17W3N0eWxlcy5hY3Rpb25CdXR0b24sIHN0eWxlcy5sb2FuQnV0dG9uXX0gdGV4dD1cIkxvYW5zXCIgXG4gICAgICAgICAgICBvblRhcD17KCkgPT4gbmF2aWdhdGlvbi5uYXZpZ2F0ZShcIkxvYW5zXCIsIHsgdXNlckRhdGEgfSl9IC8+XG4gICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgIDwvZ3JpZExheW91dD5cbiAgICA8Lz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxncmlkTGF5b3V0IHJvd3M9XCIqLCBhdXRvXCI+XG4gICAgICA8c2Nyb2xsVmlldyByb3c9ezB9PlxuICAgICAgICA8c3RhY2tMYXlvdXQgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxsYWJlbCB0ZXh0PXtgV2VsY29tZSwgJHtnZXREaXNwbGF5TmFtZSgpfSFgfSBzdHlsZT17c3R5bGVzLmhlYWRlclRleHR9IC8+XG4gICAgICAgICAgXG4gICAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICAgIDxzdGFja0xheW91dCBzdHlsZT17c3R5bGVzLmxvYWRlckNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxhY3Rpdml0eUluZGljYXRvciBidXN5PXt0cnVlfSBzdHlsZT17c3R5bGVzLmxvYWRlcn0gLz5cbiAgICAgICAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIHByb2R1Y3RzLmxlbmd0aCA9PT0gMSA/IHJlbmRlclNpbmdsZVByb2R1Y3RWaWV3KHByb2R1Y3RzWzBdKSA6IFxuICAgICAgICAgICAgc2VsZWN0ZWRQcm9kdWN0SWQgPyBcbiAgICAgICAgICAgICAgcmVuZGVyUHJvZHVjdERldGFpbFZpZXcocHJvZHVjdHMuZmluZChwID0+IHAuaWQgPT09IHNlbGVjdGVkUHJvZHVjdElkKSEpIDpcbiAgICAgICAgICAgICAgcmVuZGVyTXVsdGlwbGVQcm9kdWN0c1ZpZXcoKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgICA8L3Njcm9sbFZpZXc+XG4gICAgICA8TmF2aWdhdGlvbkJhciBcbiAgICAgICAgcm93PXsxfSBcbiAgICAgICAgYWN0aXZlUm91dGU9XCJEYXNoYm9hcmRcIiBcbiAgICAgICAgbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0gXG4gICAgICAgIHVzZXJEYXRhPXt7Li4udXNlckRhdGEsIHVzZXJuYW1lLCBwYXNzd29yZCwgYXBwQXV0aFRva2VufX0gLy8gSW5jbHVkZSBhcHBBdXRoVG9rZW5cbiAgICAgIC8+XG4gICAgPC9ncmlkTGF5b3V0PlxuICApO1xufVxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBjb250YWluZXI6IHtcbiAgICBwYWRkaW5nOiAyMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE5Mzc0M1wiLFxuICAgIHBhZGRpbmdCb3R0b206IDgwLFxuICB9LFxuICBoZWFkZXJUZXh0OiB7XG4gICAgZm9udFNpemU6IDI4LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOiBcIiNGNUY1RjVcIixcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICB9LFxuICBzYXZpbmdzQ2FyZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNEE5MEUyXCIsXG4gICAgYm9yZGVyUmFkaXVzOiAxNSxcbiAgICBwYWRkaW5nOiAyMCxcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIGVsZXZhdGlvbjogNSxcbiAgfSxcbiAgc2VjdGlvblRpdGxlOiB7XG4gICAgZm9udFNpemU6IDIwLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBtYXJnaW5Cb3R0b206IDE1LFxuICB9LFxuICBhY2NvdW50TnVtYmVyOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGNvbG9yOiBcIiNFMEUwRTBcIixcbiAgICBtYXJnaW5Cb3R0b206IDUsXG4gIH0sXG4gIGFjY291bnRCYWxhbmNlOiB7XG4gICAgZm9udFNpemU6IDI4LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgfSxcbiAgbm9BY2NvdW50TGFiZWw6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgY29sb3I6IFwiI0UwRTBFMFwiLFxuICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG4gIHRyYW5zYWN0aW9uc0NhcmQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2E2ZWNkZVwiLFxuICAgIGJvcmRlclJhZGl1czogMTUsXG4gICAgcGFkZGluZzogMjAsXG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICBlbGV2YXRpb246IDMsXG4gIH0sXG4gIHRyYW5zYWN0aW9uc1NlY3Rpb25UaXRsZToge1xuICAgIGZvbnRTaXplOiAyMCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjMzMzMzMzXCIsXG4gICAgbWFyZ2luQm90dG9tOiAxNSxcbiAgfSxcbiAgdHJhbnNhY3Rpb25JdGVtOiB7XG4gICAgbWFyZ2luQm90dG9tOiAxNSxcbiAgICBib3JkZXJCb3R0b21XaWR0aDogMSxcbiAgICBib3JkZXJCb3R0b21Db2xvcjogXCIjRTBFMEUwXCIsXG4gICAgcGFkZGluZ0JvdHRvbTogMTAsXG4gIH0sXG4gIHRyYW5zYWN0aW9uRGVzY3JpcHRpb246IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgY29sb3I6IFwiIzMzMzMzM1wiLFxuICB9LFxuICB0cmFuc2FjdGlvbkFtb3VudDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgfSxcbiAgcG9zaXRpdmVBbW91bnQ6IHtcbiAgICBjb2xvcjogXCIjNENEOTY0XCIsXG4gIH0sXG4gIG5lZ2F0aXZlQW1vdW50OiB7XG4gICAgY29sb3I6IFwiI0ZGM0IzMFwiLFxuICB9LFxuICB0cmFuc2FjdGlvbkRhdGU6IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgY29sb3I6IFwiIzc3Nzc3N1wiLFxuICB9LFxuICB0cmFuc2FjdGlvblR5cGU6IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgY29sb3I6IFwiIzc3Nzc3N1wiLFxuICB9LFxuICBub1RyYW5zYWN0aW9uc0xhYmVsOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGNvbG9yOiBcIiM3Nzc3NzdcIixcbiAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgIG1hcmdpblRvcDogMTUsXG4gIH0sXG4gIHF1aWNrQWN0aW9uc0NhcmQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZFNjMyQVwiLFxuICAgIGJvcmRlclJhZGl1czogMTUsXG4gICAgcGFkZGluZzogMjAsXG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICBlbGV2YXRpb246IDMsXG4gIH0sXG4gIHF1aWNrQWN0aW9uc1NlY3Rpb25UaXRsZToge1xuICAgIGZvbnRTaXplOiAyMCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjMzMzMzMzXCIsXG4gICAgbWFyZ2luQm90dG9tOiAxNSxcbiAgfSxcbiAgcXVpY2tBY3Rpb25zQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luVG9wOiAxNSxcbiAgfSxcbiAgYWN0aW9uQnV0dG9uOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBib3JkZXJSYWRpdXM6IDI1LCAvLyBJbmNyZWFzZWQgYm9yZGVyIHJhZGl1cyBmb3IgbW9yZSByb3VuZGVkIGNvcm5lcnNcbiAgICBwYWRkaW5nOiAxMixcbiAgICBtYXJnaW46IDQsXG4gICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICBlbGV2YXRpb246IDMsXG4gIH0sXG4gIGludmVzdEJ1dHRvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNENBRjUwXCIsIC8vIEdyZWVuIGNvbG9yIGZvciBJbnZlc3RcbiAgfSxcbiAgd2l0aGRyYXdCdXR0b246IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzIxOTZGM1wiLCAvLyBCbHVlIGNvbG9yIGZvciBXaXRoZHJhd1xuICB9LFxuICBsb2FuQnV0dG9uOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkMxMDdcIiwgLy8gQW1iZXIgY29sb3IgZm9yIExvYW5zXG4gIH0sXG4gIHRvdGFsQmFsYW5jZUNhcmQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzRBOTBFMlwiLFxuICAgIGJvcmRlclJhZGl1czogMTUsXG4gICAgcGFkZGluZzogMjAsXG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICBlbGV2YXRpb246IDUsXG4gIH0sXG4gIHRvdGFsQmFsYW5jZToge1xuICAgIGZvbnRTaXplOiAzMixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gIH0sXG4gIHByb2R1Y3RzQ2FyZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjYzVlYWVhXCIsXG4gICAgYm9yZGVyUmFkaXVzOiAxNSxcbiAgICBwYWRkaW5nOiAyMCxcbiAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgIGVsZXZhdGlvbjogMyxcbiAgfSxcbiAgcHJvZHVjdEl0ZW06IHtcbiAgICBwYWRkaW5nOiAxNSxcbiAgICBib3JkZXJCb3R0b21XaWR0aDogMSxcbiAgICBib3JkZXJCb3R0b21Db2xvcjogXCIjRTBFMEUwXCIsXG4gICAgbWFyZ2luQm90dG9tOiA1LCAvLyBBZGRlZCBzcGFjaW5nIGJldHdlZW4gaXRlbXNcbiAgfSxcbiAgcHJvZHVjdE5hbWU6IHtcbiAgICBmb250U2l6ZTogMTgsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgY29sb3I6IFwiIzMzMzMzM1wiLFxuICB9LFxuICBwcm9kdWN0QmFsYW5jZToge1xuICAgIGZvbnRTaXplOiAxOCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjNEE5MEUyXCIsXG4gIH0sXG4gIHByb2R1Y3RBY2NvdW50OiB7XG4gICAgZm9udFNpemU6IDE0LFxuICAgIGNvbG9yOiBcIiM3Nzc3NzdcIixcbiAgfSxcbiAgbG9hZGVyQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luVG9wOiAyMCxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIGxvYWRlcjoge1xuICAgIHdpZHRoOiAzMixcbiAgICBoZWlnaHQ6IDMyLFxuICB9LFxuICB0cmFuc2FjdGlvbkJhbGFuY2U6IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgY29sb3I6IFwiIzc3Nzc3N1wiLFxuICB9LFxuICBiYWNrQnV0dG9uQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luQm90dG9tOiAxNSxcbiAgfSxcbiAgYmFja0J1dHRvbjoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBjb2xvcjogXCIjNEE5MEUyXCIsXG4gICAgcGFkZGluZzogOCxcbiAgICB3aWR0aDogMTAwLFxuICAgIHRleHRBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICB9LFxuICBwcm9kdWN0RGV0YWlsVGl0bGU6IHtcbiAgICBmb250U2l6ZTogMjAsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgY29sb3I6IFwiI0Y1RjVGNVwiLFxuICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG4gIGNhcmRUaXRsZToge1xuICAgIGZvbnRTaXplOiAyNCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjMzMzMzMzXCIsXG4gICAgbWFyZ2luQm90dG9tOiAyMCwgLy8gSW5jcmVhc2VkIHNwYWNpbmdcbiAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIiwgLy8gUmVtb3ZlIHVwcGVyY2FzZVxuICB9LFxufSk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0XCI7XG5pbXBvcnQgeyBGcmFtZU5hdmlnYXRpb25Qcm9wIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC1uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBNYWluU3RhY2tQYXJhbUxpc3QgfSBmcm9tIFwiLi4vTmF2aWdhdGlvblBhcmFtTGlzdFwiO1xuaW1wb3J0IHsgR3JpZExheW91dCwgTGFiZWwsIFNjcm9sbFZpZXcsIFN0YWNrTGF5b3V0IH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuaW1wb3J0IHsgQVBJX0NPTkZJRywgVEVOQU5UX0lELCBBUFBfQVVUSCB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25CYXIgfSBmcm9tIFwiLi9OYXZpZ2F0aW9uQmFyXCI7XG5cbnR5cGUgSW52ZXN0bWVudHNTY3JlZW5Qcm9wcyA9IHtcbiAgbmF2aWdhdGlvbjogRnJhbWVOYXZpZ2F0aW9uUHJvcDxNYWluU3RhY2tQYXJhbUxpc3QsIFwiSW52ZXN0bWVudHNcIj47XG4gIHJvdXRlOiB7IHBhcmFtczogeyB1c2VyRGF0YTogYW55IH0gfTtcbn07XG5cbnR5cGUgU2F2aW5nc1Byb2R1Y3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgc2hvcnROYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGN1cnJlbmN5OiB7XG4gICAgY29kZTogc3RyaW5nO1xuICAgIGRpc3BsYXlTeW1ib2w6IHN0cmluZztcbiAgfTtcbiAgbm9taW5hbEFubnVhbEludGVyZXN0UmF0ZTogbnVtYmVyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEludmVzdG1lbnRzU2NyZWVuKHsgbmF2aWdhdGlvbiwgcm91dGUgfTogSW52ZXN0bWVudHNTY3JlZW5Qcm9wcykge1xuICBjb25zdCB7IHVzZXJEYXRhIH0gPSByb3V0ZS5wYXJhbXM7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGU8U2F2aW5nc1Byb2R1Y3RbXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoU2F2aW5nc1Byb2R1Y3RzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBmZXRjaFNhdmluZ3NQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coXCJGZXRjaGluZyBzYXZpbmdzIHByb2R1Y3RzLi4uXCIpO1xuICAgICAgY29uc3QgYXV0aEhlYWRlciA9IGBCYXNpYyAke2J0b2EoYCR7QVBQX0FVVEguVVNFUk5BTUV9OiR7QVBQX0FVVEguUEFTU1dPUkR9YCl9YDtcbiAgICAgIGNvbnNvbGUubG9nKFwiQXBwIEF1dGhlbnRpY2F0aW9uIFRva2VuOlwiLCBhdXRoSGVhZGVyKTtcblxuICAgICAgY29uc3QgdXJsID0gYCR7QVBJX0NPTkZJRy5CQVNFX1VSTH0ke0FQSV9DT05GSUcuU0FWSU5HU19QUk9EVUNUU19FTkRQT0lOVH1gO1xuICAgICAgY29uc29sZS5sb2coXCJTYXZpbmdzIHByb2R1Y3RzIEFQSSBVUkw6XCIsIHVybCk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGF1dGhIZWFkZXIsXG4gICAgICAgICAgJ2ZpbmVyYWN0LXBsYXRmb3JtLXRlbmFudGlkJzogVEVOQU5UX0lELFxuICAgICAgICAgICdhY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlNhdmluZ3MgcHJvZHVjdHMgcmVzcG9uc2U6XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcblxuICAgICAgc2V0UHJvZHVjdHMoZGF0YSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHNhdmluZ3MgcHJvZHVjdHM6XCIsIGVycm9yKTtcbiAgICAgIHNldEVycm9yKFwiRmFpbGVkIHRvIGxvYWQgc2F2aW5ncyBwcm9kdWN0cy4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJvZHVjdFNlbGVjdCA9IChwcm9kdWN0OiBTYXZpbmdzUHJvZHVjdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgcHJvZHVjdDpcIiwgcHJvZHVjdCk7XG4gICAgbmF2aWdhdGlvbi5uYXZpZ2F0ZShcIlByb2R1Y3REZXRhaWxzXCIsIHsgXG4gICAgICBwcm9kdWN0LCBcbiAgICAgIHVzZXJEYXRhLFxuICAgICAgdXNlcm5hbWU6IHVzZXJEYXRhPy51c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiB1c2VyRGF0YT8ucGFzc3dvcmRcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxncmlkTGF5b3V0IHJvd3M9XCIqLCBhdXRvXCI+XG4gICAgICA8Z3JpZExheW91dCByb3c9ezB9IHJvd3M9XCJhdXRvLCAqXCIgc3R5bGU9e3N0eWxlcy5tYWluQ29udGFpbmVyfT5cbiAgICAgICAgPGxhYmVsIHJvdz17MH0gdGV4dD1cIkludmVzdG1lbnQgT3B0aW9uc1wiIHN0eWxlPXtzdHlsZXMuaGVhZGVyVGV4dH0gLz5cbiAgICAgICAgPHNjcm9sbFZpZXcgcm93PXsxfT5cbiAgICAgICAgICA8c3RhY2tMYXlvdXQgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVwiTG9hZGluZyBwcm9kdWN0cy4uLlwiIHN0eWxlPXtzdHlsZXMubG9hZGluZ1RleHR9IC8+XG4gICAgICAgICAgICApIDogZXJyb3IgPyAoXG4gICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PXtlcnJvcn0gc3R5bGU9e3N0eWxlcy5lcnJvclRleHR9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgICAgICA8Z3JpZExheW91dCBcbiAgICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH0gXG4gICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLnByb2R1Y3RDYXJkfSBcbiAgICAgICAgICAgICAgICAgIHJvd3M9XCJhdXRvLCBhdXRvLCBhdXRvLCBhdXRvXCIgXG4gICAgICAgICAgICAgICAgICBjb2x1bW5zPVwiKlwiXG4gICAgICAgICAgICAgICAgICBvblRhcD17KCkgPT4gaGFuZGxlUHJvZHVjdFNlbGVjdChwcm9kdWN0KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gdGV4dD17cHJvZHVjdC5uYW1lfSBzdHlsZT17c3R5bGVzLnByb2R1Y3ROYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MX0gdGV4dD17cHJvZHVjdC5kZXNjcmlwdGlvbn0gc3R5bGU9e3N0eWxlcy5wcm9kdWN0RGVzY3JpcHRpb259IHRleHRXcmFwPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgPGdyaWRMYXlvdXQgcm93PXsyfSByb3dzPVwiYXV0bywgYXV0b1wiIGNvbHVtbnM9XCIqLCAqXCIgc3R5bGU9e3N0eWxlcy5kZXRhaWxzQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gY29sPXswfSB0ZXh0PVwiSW50ZXJlc3QgUmF0ZTpcIiBzdHlsZT17c3R5bGVzLmRldGFpbExhYmVsfSAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgcm93PXswfSBjb2w9ezF9IHRleHQ9e2Ake3Byb2R1Y3Qubm9taW5hbEFubnVhbEludGVyZXN0UmF0ZX0lYH0gc3R5bGU9e3N0eWxlcy5kZXRhaWxWYWx1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MX0gY29sPXswfSB0ZXh0PVwiQ3VycmVuY3k6XCIgc3R5bGU9e3N0eWxlcy5kZXRhaWxMYWJlbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MX0gY29sPXsxfSB0ZXh0PXtgJHtwcm9kdWN0LmN1cnJlbmN5LmRpc3BsYXlTeW1ib2x9ICR7cHJvZHVjdC5jdXJyZW5jeS5jb2RlfWB9IHN0eWxlPXtzdHlsZXMuZGV0YWlsVmFsdWV9IC8+XG4gICAgICAgICAgICAgICAgICA8L2dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgcm93PXszfSB0ZXh0PVwiVGFwIHRvIHZpZXcgZGV0YWlsc1wiIHN0eWxlPXtzdHlsZXMudGFwSGludH0gLz5cbiAgICAgICAgICAgICAgICA8L2dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvc2Nyb2xsVmlldz5cbiAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgIDxOYXZpZ2F0aW9uQmFyIFxuICAgICAgICByb3c9ezF9IFxuICAgICAgICBhY3RpdmVSb3V0ZT1cIkludmVzdG1lbnRzXCIgXG4gICAgICAgIG5hdmlnYXRpb249e25hdmlnYXRpb259IFxuICAgICAgICB1c2VyRGF0YT17dXNlckRhdGF9IFxuICAgICAgLz5cbiAgICA8L2dyaWRMYXlvdXQ+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgbWFpbkNvbnRhaW5lcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjBGNEY4XCIsIC8vIExpZ2h0IGJsdWUtZ3JheSBiYWNrZ3JvdW5kXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIHBhZGRpbmc6IDE2LFxuICB9LFxuICBoZWFkZXJUZXh0OiB7XG4gICAgZm9udFNpemU6IDI0LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luVmVydGljYWw6IDIwLFxuICAgIGNvbG9yOiBcIiMyQzNFNTBcIiwgLy8gRGFyayBibHVlLWdyYXkgY29sb3IgZm9yIGhlYWRlclxuICB9LFxuICBsb2FkaW5nVGV4dDoge1xuICAgIGZvbnRTaXplOiAxOCxcbiAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgIGNvbG9yOiBcIiMzNDQ5NUVcIiwgLy8gRGFyayBncmF5IGNvbG9yIGZvciBsb2FkaW5nIHRleHRcbiAgfSxcbiAgZXJyb3JUZXh0OiB7XG4gICAgZm9udFNpemU6IDE4LFxuICAgIGNvbG9yOiBcIiNFNzRDM0NcIiwgLy8gUmVkIGNvbG9yIGZvciBlcnJvciB0ZXh0XG4gICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgfSxcbiAgcHJvZHVjdENhcmQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGJvcmRlclJhZGl1czogMTUsXG4gICAgcGFkZGluZzogMjAsXG4gICAgbWFyZ2luQm90dG9tOiAxNixcbiAgICBlbGV2YXRpb246IDQsXG4gICAgc2hhZG93Q29sb3I6IFwiIzAwMFwiLFxuICAgIHNoYWRvd09mZnNldDogeyB3aWR0aDogMCwgaGVpZ2h0OiAyIH0sXG4gICAgc2hhZG93T3BhY2l0eTogMC4yLFxuICAgIHNoYWRvd1JhZGl1czogNCxcbiAgICBib3JkZXJDb2xvcjogXCIjQkRDM0M3XCIsIC8vIExpZ2h0IGdyYXkgYm9yZGVyXG4gICAgYm9yZGVyV2lkdGg6IDEsXG4gIH0sXG4gIHByb2R1Y3ROYW1lOiB7XG4gICAgZm9udFNpemU6IDIwLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgY29sb3I6IFwiIzI5ODBCOVwiLCAvLyBCbHVlIGNvbG9yIGZvciBwcm9kdWN0IG5hbWVcbiAgfSxcbiAgcHJvZHVjdERlc2NyaXB0aW9uOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIG1hcmdpbkJvdHRvbTogMTUsXG4gICAgY29sb3I6IFwiIzM0NDk1RVwiLCAvLyBEYXJrIGdyYXkgY29sb3IgZm9yIGRlc2NyaXB0aW9uXG4gIH0sXG4gIGRldGFpbHNDb250YWluZXI6IHtcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRUNGMEYxXCIsIC8vIFZlcnkgbGlnaHQgZ3JheSBiYWNrZ3JvdW5kIGZvciBkZXRhaWxzXG4gICAgcGFkZGluZzogMTAsXG4gICAgYm9yZGVyUmFkaXVzOiA4LFxuICB9LFxuICBkZXRhaWxMYWJlbDoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBjb2xvcjogXCIjN0Y4QzhEXCIsIC8vIE1lZGl1bSBncmF5IGNvbG9yIGZvciBsYWJlbHNcbiAgICB0ZXh0QWxpZ25tZW50OiBcImxlZnRcIixcbiAgICBtYXJnaW5Cb3R0b206IDUsIC8vIEFkZCBzb21lIGJvdHRvbSBtYXJnaW5cbiAgfSxcbiAgZGV0YWlsVmFsdWU6IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgY29sb3I6IFwiIzJDM0U1MFwiLCAvLyBEYXJrIGJsdWUtZ3JheSBjb2xvciBmb3IgdmFsdWVzXG4gICAgdGV4dEFsaWdubWVudDogXCJyaWdodFwiLFxuICAgIG1hcmdpbkJvdHRvbTogNSwgLy8gQWRkIHNvbWUgYm90dG9tIG1hcmdpblxuICB9LFxuICB0YXBIaW50OiB7XG4gICAgZm9udFNpemU6IDE0LFxuICAgIGNvbG9yOiBcIiM3RjhDOERcIiwgLy8gTWVkaXVtIGdyYXkgY29sb3IgZm9yIGhpbnRcbiAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICBtYXJnaW5Ub3A6IDEwLCAvLyBBZGQgc29tZSB0b3AgbWFyZ2luXG4gIH0sXG59KTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHRcIjtcbmltcG9ydCB7IEZyYW1lTmF2aWdhdGlvblByb3AgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0LW5hdmlnYXRpb25cIjtcbmltcG9ydCB7IE1haW5TdGFja1BhcmFtTGlzdCB9IGZyb20gXCIuLi9OYXZpZ2F0aW9uUGFyYW1MaXN0XCI7XG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiwgU3RhY2tMYXlvdXQsIExhYmVsLCBGbGV4Ym94TGF5b3V0LCBTY3JvbGxWaWV3IH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuaW1wb3J0IHsgQVBJX0NPTkZJRywgQVBQX0FVVEgsIFRFTkFOVF9JRCB9IGZyb20gXCIuLi9jb25maWdcIjtcblxudHlwZSBMb2dpblNjcmVlblByb3BzID0ge1xuICBuYXZpZ2F0aW9uOiBGcmFtZU5hdmlnYXRpb25Qcm9wPE1haW5TdGFja1BhcmFtTGlzdCwgXCJMb2dpblwiPixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2dpblNjcmVlbih7IG5hdmlnYXRpb24gfTogTG9naW5TY3JlZW5Qcm9wcykge1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9naW5TdGF0dXMsIHNldExvZ2luU3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYXBwQXV0aFN0YXR1cywgc2V0QXBwQXV0aFN0YXR1c10gPSB1c2VTdGF0ZShcIkNoZWNraW5nIGFwcCBhdXRob3JpemF0aW9uLi4uXCIpO1xuICBjb25zdCBbYXBwQXV0aFRva2VuLCBzZXRBcHBBdXRoVG9rZW5dID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja0FwcEF1dGhvcml6YXRpb24oKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNoZWNrQXBwQXV0aG9yaXphdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQ09ORklHLkJBU0VfVVJMfSR7QVBJX0NPTkZJRy5BVVRIRU5USUNBVElPTl9FTkRQT0lOVH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCYXNpYyAke2J0b2EoYCR7QVBQX0FVVEguVVNFUk5BTUV9OiR7QVBQX0FVVEguUEFTU1dPUkR9YCl9YCxcbiAgICAgICAgICAnZmluZXJhY3QtcGxhdGZvcm0tdGVuYW50aWQnOiBURU5BTlRfSURcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHVzZXJuYW1lOiBBUFBfQVVUSC5VU0VSTkFNRSxcbiAgICAgICAgICBwYXNzd29yZDogQVBQX0FVVEguUEFTU1dPUkRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgaWYgKGRhdGEuYXV0aGVudGljYXRlZCkge1xuICAgICAgICBzZXRBcHBBdXRoU3RhdHVzKFwiQXBwIGF1dGhvcml6ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFwcCBhdXRob3JpemVkLiBUb2tlbjpcIiwgZGF0YS5iYXNlNjRFbmNvZGVkQXV0aGVudGljYXRpb25LZXkpO1xuICAgICAgICBzZXRBcHBBdXRoVG9rZW4oZGF0YS5iYXNlNjRFbmNvZGVkQXV0aGVudGljYXRpb25LZXkpO1xuICAgICAgICBnbG9iYWwuYmFzZTY0RW5jb2RlZEF1dGhlbnRpY2F0aW9uS2V5ID0gZGF0YS5iYXNlNjRFbmNvZGVkQXV0aGVudGljYXRpb25LZXk7IC8vIFNldCBnbG9iYWwgdG9rZW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEFwcEF1dGhTdGF0dXMoXCJBcHAgYXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiQXBwIGF1dGhvcml6YXRpb24gZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIHNldEFwcEF1dGhTdGF0dXMoXCJOZXR3b3JrIGVycm9yLiBQbGVhc2UgY2hlY2sgeW91ciBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4uXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIGxvZ2luIHByb2Nlc3MuLi5cIik7XG5cbiAgICBpZiAoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkge1xuICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBmYWlsZWQ6IFVzZXJuYW1lIGFuZCBwYXNzd29yZCBhcmUgcmVxdWlyZWRcIik7XG4gICAgICBzZXRMb2dpblN0YXR1cyhcIlVzZXJuYW1lIGFuZCBwYXNzd29yZCBhcmUgcmVxdWlyZWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIHNldExvZ2luU3RhdHVzKFwiTG9nZ2luZyBpbi4uLlwiKTtcbiAgICBjb25zb2xlLmxvZyhcIkluaXRpYXRpbmcgbG9naW4uLi5cIik7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlckF1dGhIZWFkZXIgPSBgQmFzaWMgJHtidG9hKGAke3VzZXJuYW1lfToke3Bhc3N3b3JkfWApfWA7XG4gICAgICBjb25zb2xlLmxvZyhcIlVzZXIgQXV0aGVudGljYXRpb24gVG9rZW46XCIsIHVzZXJBdXRoSGVhZGVyKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQXBwIEF1dGhlbnRpY2F0aW9uIFRva2VuOlwiLCBhcHBBdXRoVG9rZW4pO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9DT05GSUcuQkFTRV9VUkx9JHtBUElfQ09ORklHLlNFTEZfQ0xJRU5UU19FTkRQT0lOVH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHVzZXJBdXRoSGVhZGVyLFxuICAgICAgICAgICdmaW5lcmFjdC1wbGF0Zm9ybS10ZW5hbnRpZCc6IFRFTkFOVF9JRCxcbiAgICAgICAgICAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coXCJMb2dpbiByZXNwb25zZTpcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikpO1xuXG4gICAgICBpZiAoZGF0YS5wYWdlSXRlbXMgJiYgZGF0YS5wYWdlSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIHN1Y2Nlc3NmdWwuIE5hdmlnYXRpbmcgdG8gRGFzaGJvYXJkLi4uXCIpO1xuICAgICAgICBjb25zdCB1c2VyRGF0YVdpdGhDcmVkZW50aWFscyA9IHtcbiAgICAgICAgICAuLi5kYXRhLnBhZ2VJdGVtc1swXSxcbiAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgZGF0YSBiZWluZyBwYXNzZWQ6XCIsIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhV2l0aENyZWRlbnRpYWxzLCBudWxsLCAyKSk7XG4gICAgICAgIG5hdmlnYXRpb24ubmF2aWdhdGUoXCJEYXNoYm9hcmRcIiwgeyBcbiAgICAgICAgICB1c2VyRGF0YTogdXNlckRhdGFXaXRoQ3JlZGVudGlhbHMsIFxuICAgICAgICAgIHVzZXJuYW1lLCBcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICBhcHBBdXRoVG9rZW46IGdsb2JhbC5iYXNlNjRFbmNvZGVkQXV0aGVudGljYXRpb25LZXlcbiAgICAgICAgfSk7XG4gICAgICAgIHNldExvZ2luU3RhdHVzKFwiTG9naW4gc3VjY2Vzc2Z1bCFcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIGZhaWxlZDogTm8gdXNlciBkYXRhIGZvdW5kXCIpO1xuICAgICAgICBzZXRMb2dpblN0YXR1cyhcIkxvZ2luIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJMb2dpbiBwcm9jZXNzIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICBzZXRMb2dpblN0YXR1cyhcIkxvZ2luIGZhaWxlZDogXCIgKyAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpKSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIHByb2Nlc3MgY29tcGxldGVkLlwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2Nyb2xsVmlldz5cbiAgICAgIDxmbGV4Ym94TGF5b3V0IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPHN0YWNrTGF5b3V0IHN0eWxlPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtM3hsIG1iLTggZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIiB0ZXh0PVwiTG9naW5cIiAvPlxuICAgICAgICAgIDxsYWJlbCB0ZXh0PXthcHBBdXRoU3RhdHVzfSBzdHlsZT17c3R5bGVzLmFwcEF1dGhTdGF0dXN9IC8+XG4gICAgICAgICAgPHRleHRGaWVsZFxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgIGhpbnQ9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICB0ZXh0PXt1c2VybmFtZX1cbiAgICAgICAgICAgIG9uVGV4dENoYW5nZT17KGFyZ3MpID0+IHNldFVzZXJuYW1lKGFyZ3Mub2JqZWN0LnRleHQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHRleHRGaWVsZFxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgIGhpbnQ9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICB0ZXh0PXtwYXNzd29yZH1cbiAgICAgICAgICAgIHNlY3VyZT17dHJ1ZX1cbiAgICAgICAgICAgIG9uVGV4dENoYW5nZT17KGFyZ3MpID0+IHNldFBhc3N3b3JkKGFyZ3Mub2JqZWN0LnRleHQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgICB0ZXh0PXtpc0xvYWRpbmcgPyBcIkxvZ2dpbmcgaW4uLi5cIiA6IFwiTG9naW5cIn1cbiAgICAgICAgICAgIG9uVGFwPXtoYW5kbGVMb2dpbn1cbiAgICAgICAgICAgIGlzRW5hYmxlZD17IWlzTG9hZGluZ31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuc2lnbnVwQnV0dG9ufVxuICAgICAgICAgICAgdGV4dD1cIlNpZ24gVXBcIlxuICAgICAgICAgICAgb25UYXA9eygpID0+IG5hdmlnYXRpb24ubmF2aWdhdGUoXCJTaWdudXBcIil9XG4gICAgICAgICAgICBpc0VuYWJsZWQ9eyFpc0xvYWRpbmd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIHN0eWxlPXtbXG4gICAgICAgICAgICAgIHN0eWxlcy5zdGF0dXNMYWJlbCxcbiAgICAgICAgICAgICAgeyBjb2xvcjogbG9naW5TdGF0dXMuaW5jbHVkZXMoXCJzdWNjZXNzZnVsXCIpID8gXCIjNTBFM0MyXCIgOiBcIiNGRjcwNDNcIiB9XG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgdGV4dD17bG9naW5TdGF0dXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdGFja0xheW91dD5cbiAgICAgIDwvZmxleGJveExheW91dD5cbiAgICA8L3Njcm9sbFZpZXc+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgY29udGFpbmVyOiB7XG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNEE5MEUyXCJcbiAgfSxcbiAgY29udGVudDoge1xuICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIlxuICB9LFxuICBpbnB1dDoge1xuICAgIGZvbnRTaXplOiAxOCxcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgbWFyZ2luQm90dG9tOiAxNSxcbiAgICBwYWRkaW5nOiAxMFxuICB9LFxuICBidXR0b246IHtcbiAgICBmb250U2l6ZTogMTgsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjlCNkY2XCIsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIHBhZGRpbmc6IDEwLFxuICAgIG1hcmdpbkJvdHRvbTogMTVcbiAgfSxcbiAgc2lnbnVwQnV0dG9uOiB7XG4gICAgZm9udFNpemU6IDE4LFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzUwRTNDMlwiLFxuICAgIGJvcmRlclJhZGl1czogNSxcbiAgICBwYWRkaW5nOiAxMCxcbiAgICBtYXJnaW5Cb3R0b206IDE1XG4gIH0sXG4gIHN0YXR1c0xhYmVsOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgfSxcbiAgYXBwQXV0aFN0YXR1czoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBCYXNlTmF2aWdhdGlvbkNvbnRhaW5lciB9IGZyb20gJ0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdGFja05hdmlnYXRvckZhY3RvcnkgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0LW5hdmlnYXRpb25cIjtcbmltcG9ydCB7IExvZ2luU2NyZWVuIH0gZnJvbSBcIi4vTG9naW5TY3JlZW5cIjtcbmltcG9ydCB7IFNpZ251cFNjcmVlbiB9IGZyb20gXCIuL1NpZ251cFNjcmVlblwiO1xuaW1wb3J0IHsgU2lnbnVwU3VjY2Vzc1NjcmVlbiB9IGZyb20gXCIuL1NpZ251cFN1Y2Nlc3NTY3JlZW5cIjtcbmltcG9ydCB7IERhc2hib2FyZFNjcmVlbiB9IGZyb20gXCIuL0Rhc2hib2FyZFNjcmVlblwiO1xuaW1wb3J0IHsgSW52ZXN0bWVudHNTY3JlZW4gfSBmcm9tIFwiLi9JbnZlc3RtZW50c1NjcmVlblwiO1xuaW1wb3J0IHsgUHJvZHVjdHNTY3JlZW4gfSBmcm9tIFwiLi9Qcm9kdWN0c1NjcmVlblwiO1xuaW1wb3J0IHsgUHJvZmlsZVNjcmVlbiB9IGZyb20gXCIuL1Byb2ZpbGVTY3JlZW5cIjtcbmltcG9ydCB7IENvbnRyaWJ1dGlvblNjcmVlbiB9IGZyb20gXCIuL0NvbnRyaWJ1dGlvblNjcmVlblwiO1xuaW1wb3J0IHsgQ29udHJpYnV0aW9uU3VjY2Vzc1NjcmVlbiB9IGZyb20gXCIuL0NvbnRyaWJ1dGlvblN1Y2Nlc3NTY3JlZW5cIjtcbmltcG9ydCB7IFdpdGhkcmF3U2NyZWVuIH0gZnJvbSBcIi4vV2l0aGRyYXdTY3JlZW5cIjtcbmltcG9ydCB7IFdpdGhkcmF3U3VjY2Vzc1NjcmVlbiB9IGZyb20gXCIuL1dpdGhkcmF3U3VjY2Vzc1NjcmVlblwiO1xuaW1wb3J0IHsgUG9ydGZvbGlvU2NyZWVuIH0gZnJvbSBcIi4vUG9ydGZvbGlvU2NyZWVuXCI7XG5cbmNvbnN0IFN0YWNrTmF2aWdhdG9yID0gc3RhY2tOYXZpZ2F0b3JGYWN0b3J5KCk7XG5cbmV4cG9ydCBjb25zdCBNYWluU3RhY2sgPSAoKSA9PiAoXG4gICAgPEJhc2VOYXZpZ2F0aW9uQ29udGFpbmVyPlxuICAgICAgICA8U3RhY2tOYXZpZ2F0b3IuTmF2aWdhdG9yXG4gICAgICAgICAgICBpbml0aWFsUm91dGVOYW1lPVwiTG9naW5cIlxuICAgICAgICAgICAgc2NyZWVuT3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIGhlYWRlclNob3duOiBmYWxzZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxTdGFja05hdmlnYXRvci5TY3JlZW4gbmFtZT1cIkxvZ2luXCIgY29tcG9uZW50PXtMb2dpblNjcmVlbn0gLz5cbiAgICAgICAgICAgIDxTdGFja05hdmlnYXRvci5TY3JlZW4gbmFtZT1cIlNpZ251cFwiIGNvbXBvbmVudD17U2lnbnVwU2NyZWVufSAvPlxuICAgICAgICAgICAgPFN0YWNrTmF2aWdhdG9yLlNjcmVlbiBuYW1lPVwiU2lnbnVwU3VjY2Vzc1wiIGNvbXBvbmVudD17U2lnbnVwU3VjY2Vzc1NjcmVlbn0gLz5cbiAgICAgICAgICAgIDxTdGFja05hdmlnYXRvci5TY3JlZW4gXG4gICAgICAgICAgICAgICAgbmFtZT1cIkRhc2hib2FyZFwiIFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17RGFzaGJvYXJkU2NyZWVufVxuICAgICAgICAgICAgICAgIGluaXRpYWxQYXJhbXM9e3sgdXNlckRhdGE6IG51bGwgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U3RhY2tOYXZpZ2F0b3IuU2NyZWVuIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJQb3J0Zm9saW9cIiBcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1BvcnRmb2xpb1NjcmVlbn1cbiAgICAgICAgICAgICAgICBpbml0aWFsUGFyYW1zPXt7IHVzZXJEYXRhOiBudWxsIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFN0YWNrTmF2aWdhdG9yLlNjcmVlbiBcbiAgICAgICAgICAgICAgICBuYW1lPVwiSW52ZXN0bWVudHNcIiBcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0ludmVzdG1lbnRzU2NyZWVufVxuICAgICAgICAgICAgICAgIGluaXRpYWxQYXJhbXM9e3sgdXNlckRhdGE6IG51bGwgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U3RhY2tOYXZpZ2F0b3IuU2NyZWVuIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJQcm9maWxlXCIgXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtQcm9maWxlU2NyZWVufVxuICAgICAgICAgICAgICAgIGluaXRpYWxQYXJhbXM9e3sgdXNlckRhdGE6IG51bGwgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U3RhY2tOYXZpZ2F0b3IuU2NyZWVuIG5hbWU9XCJDb250cmlidXRpb25cIiBjb21wb25lbnQ9e0NvbnRyaWJ1dGlvblNjcmVlbn0gLz5cbiAgICAgICAgICAgIDxTdGFja05hdmlnYXRvci5TY3JlZW4gbmFtZT1cIkNvbnRyaWJ1dGlvblN1Y2Nlc3NcIiBjb21wb25lbnQ9e0NvbnRyaWJ1dGlvblN1Y2Nlc3NTY3JlZW59IC8+XG4gICAgICAgICAgICA8U3RhY2tOYXZpZ2F0b3IuU2NyZWVuIG5hbWU9XCJXaXRoZHJhd1wiIGNvbXBvbmVudD17V2l0aGRyYXdTY3JlZW59IC8+XG4gICAgICAgICAgICA8U3RhY2tOYXZpZ2F0b3IuU2NyZWVuIG5hbWU9XCJXaXRoZHJhd1N1Y2Nlc3NcIiBjb21wb25lbnQ9e1dpdGhkcmF3U3VjY2Vzc1NjcmVlbn0gLz5cbiAgICAgICAgPC9TdGFja05hdmlnYXRvci5OYXZpZ2F0b3I+XG4gICAgPC9CYXNlTmF2aWdhdGlvbkNvbnRhaW5lcj5cbik7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0XCI7XG5pbXBvcnQgeyBGbGV4Ym94TGF5b3V0LCBTdGFja0xheW91dCwgTGFiZWwgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCI7XG5pbXBvcnQgeyBGcmFtZU5hdmlnYXRpb25Qcm9wIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC1uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBNYWluU3RhY2tQYXJhbUxpc3QgfSBmcm9tIFwiLi4vTmF2aWdhdGlvblBhcmFtTGlzdFwiO1xuXG50eXBlIE5hdmlnYXRpb25CYXJQcm9wcyA9IHtcbiAgYWN0aXZlUm91dGU6IHN0cmluZztcbiAgbmF2aWdhdGlvbjogYW55O1xuICByb3c/OiBudW1iZXI7IC8vIEFkZCByb3cgYXMgb3B0aW9uYWwgcHJvcFxuICB1c2VyRGF0YToge1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICBhcHBBdXRoVG9rZW46IHN0cmluZztcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH07XG59O1xuXG5jb25zdCBtZW51SXRlbXMgPSBbXG4gIHsgbmFtZTogJ0hvbWUnLCByb3V0ZTogJ0Rhc2hib2FyZCcgfSxcbiAgeyBuYW1lOiAnTXkgUG9ydGZvbGlvJywgcm91dGU6ICdQb3J0Zm9saW8nIH0sXG4gIHsgbmFtZTogJ0ludmVzdCcsIHJvdXRlOiAnSW52ZXN0bWVudHMnIH0sXG4gIHsgbmFtZTogJ015IFByb2ZpbGUnLCByb3V0ZTogJ1Byb2ZpbGUnIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gTmF2aWdhdGlvbkJhcih7IGFjdGl2ZVJvdXRlLCBuYXZpZ2F0aW9uLCB1c2VyRGF0YSwgcm93IH06IE5hdmlnYXRpb25CYXJQcm9wcykge1xuICBjb25zdCBoYW5kbGVOYXZpZ2F0aW9uID0gKHJvdXRlOiBrZXlvZiBNYWluU3RhY2tQYXJhbUxpc3QpID0+IHtcbiAgICBpZiAocm91dGUgIT09IGFjdGl2ZVJvdXRlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5hdmlnYXRpbmcgdG86XCIsIHJvdXRlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidXNlckRhdGEgYmVpbmcgcGFzc2VkOlwiLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSwgbnVsbCwgMikpO1xuICAgICAgbmF2aWdhdGlvbi5uYXZpZ2F0ZShyb3V0ZSwgeyBcbiAgICAgICAgdXNlckRhdGEsXG4gICAgICAgIHVzZXJuYW1lOiB1c2VyRGF0YT8udXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiB1c2VyRGF0YT8ucGFzc3dvcmQsXG4gICAgICAgIGFwcEF1dGhUb2tlbjogdXNlckRhdGE/LmFwcEF1dGhUb2tlbiAvLyBNYWtlIHN1cmUgdG8gcGFzcyBhcHBBdXRoVG9rZW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmbGV4Ym94TGF5b3V0IHJvdz17cm93fSBzdHlsZT17c3R5bGVzLm1lbnVCYXJ9PlxuICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW0ubmFtZX0+XG4gICAgICAgICAge2luZGV4ID4gMCAmJiA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zZXBhcmF0b3J9IC8+fVxuICAgICAgICAgIDxzdGFja0xheW91dFxuICAgICAgICAgICAgc3R5bGU9e1tcbiAgICAgICAgICAgICAgc3R5bGVzLm1lbnVJdGVtLCBcbiAgICAgICAgICAgICAgYWN0aXZlUm91dGUgPT09IGl0ZW0ucm91dGUgJiYgc3R5bGVzLmFjdGl2ZU1lbnVJdGVtXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgb25UYXA9eygpID0+IGhhbmRsZU5hdmlnYXRpb24oaXRlbS5yb3V0ZSBhcyBrZXlvZiBNYWluU3RhY2tQYXJhbUxpc3QpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgdGV4dD17aXRlbS5uYW1lfSBcbiAgICAgICAgICAgICAgc3R5bGU9e1tcbiAgICAgICAgICAgICAgICBzdHlsZXMubWVudUxhYmVsLFxuICAgICAgICAgICAgICAgIGFjdGl2ZVJvdXRlID09PSBpdGVtLnJvdXRlICYmIHN0eWxlcy5hY3RpdmVNZW51TGFiZWxcbiAgICAgICAgICAgICAgXX0gXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApKX1cbiAgICA8L2ZsZXhib3hMYXlvdXQ+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgbWVudUJhcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgaGVpZ2h0OiA2MCxcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxuICAgIGJvcmRlclRvcFdpZHRoOiAxLFxuICAgIGJvcmRlclRvcENvbG9yOiBcIiNFMEUwRTBcIixcbiAgfSxcbiAgbWVudUl0ZW06IHtcbiAgICBmbGV4OiAxLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG4gIGFjdGl2ZU1lbnVJdGVtOiB7XG4gICAgYm9yZGVyVG9wV2lkdGg6IDIsXG4gICAgYm9yZGVyVG9wQ29sb3I6IFwiIzAwN0FGRlwiLFxuICB9LFxuICBtZW51TGFiZWw6IHtcbiAgICBmb250U2l6ZTogMTIsXG4gICAgY29sb3I6IFwiIzc1NzU3NVwiLFxuICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG4gIGFjdGl2ZU1lbnVMYWJlbDoge1xuICAgIGNvbG9yOiBcIiMwMDdBRkZcIixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgfSxcbiAgc2VwYXJhdG9yOiB7XG4gICAgd2lkdGg6IDEsXG4gICAgaGVpZ2h0OiBcIjYwJVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRTBFMEUwXCIsXG4gIH0sXG59KTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0XCI7XG5pbXBvcnQgeyBGcmFtZU5hdmlnYXRpb25Qcm9wIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC1uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBNYWluU3RhY2tQYXJhbUxpc3QgfSBmcm9tIFwiLi4vTmF2aWdhdGlvblBhcmFtTGlzdFwiO1xuaW1wb3J0IHsgU2Nyb2xsVmlldywgU3RhY2tMYXlvdXQsIExhYmVsLCBHcmlkTGF5b3V0LCBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmVcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25CYXIgfSBmcm9tIFwiLi9OYXZpZ2F0aW9uQmFyXCI7XG5pbXBvcnQgeyBBUElfQ09ORklHLCBURU5BTlRfSUQgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbnR5cGUgUG9ydGZvbGlvU2NyZWVuUHJvcHMgPSB7XG4gIG5hdmlnYXRpb246IEZyYW1lTmF2aWdhdGlvblByb3A8TWFpblN0YWNrUGFyYW1MaXN0LCBcIlBvcnRmb2xpb1wiPixcbiAgcm91dGU6IHsgXG4gICAgcGFyYW1zPzogeyBcbiAgICAgIHVzZXJEYXRhPzogYW55LCBcbiAgICAgIHVzZXJuYW1lPzogc3RyaW5nLCBcbiAgICAgIHBhc3N3b3JkPzogc3RyaW5nLFxuICAgICAgYXBwQXV0aFRva2VuPzogc3RyaW5nICAvLyBBZGQgYXBwQXV0aFRva2VuIHRvIHJvdXRlIHBhcmFtc1xuICAgIH0gXG4gIH1cbn07XG5cbnR5cGUgU2F2aW5nc0FjY291bnQgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHByb2R1Y3ROYW1lOiBzdHJpbmc7XG4gIGFjY291bnRCYWxhbmNlOiBudW1iZXI7XG4gIGN1cnJlbmN5OiB7XG4gICAgZGlzcGxheVN5bWJvbDogc3RyaW5nO1xuICB9O1xuICBhY2NvdW50Tm8/OiBzdHJpbmc7XG4gIHN0YXR1cz86IHsgdmFsdWU6IHN0cmluZyB9O1xuICBsYXN0QWN0aXZlVHJhbnNhY3Rpb25EYXRlPzogc3RyaW5nW107XG59O1xuXG50eXBlIFRyYW5zYWN0aW9uID0ge1xuICBpZDogbnVtYmVyO1xuICBkYXRlOiBzdHJpbmc7XG4gIGFtb3VudDogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHJ1bm5pbmdCYWxhbmNlOiBudW1iZXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUG9ydGZvbGlvU2NyZWVuKHsgbmF2aWdhdGlvbiwgcm91dGUgfTogUG9ydGZvbGlvU2NyZWVuUHJvcHMpIHtcbiAgY29uc29sZS5sb2coXCJQb3J0Zm9saW9TY3JlZW4gcmVuZGVyZWQuIFJvdXRlIHBhcmFtczpcIiwgSlNPTi5zdHJpbmdpZnkocm91dGUucGFyYW1zLCBudWxsLCAyKSk7XG4gIFxuICBjb25zdCB7IHVzZXJEYXRhLCB1c2VybmFtZSwgcGFzc3dvcmQsIGFwcEF1dGhUb2tlbiB9ID0gcm91dGUucGFyYW1zIHx8IHt9O1xuICBjb25zb2xlLmxvZyhcIkV4dHJhY3RlZCBkYXRhOlwiLCB7IFxuICAgIHVzZXJEYXRhRXhpc3RzOiAhIXVzZXJEYXRhLCBcbiAgICB1c2VyRGF0YUlkOiB1c2VyRGF0YT8uaWQsXG4gICAgdXNlcm5hbWVFeGlzdHM6ICEhdXNlcm5hbWUsIFxuICAgIHBhc3N3b3JkRXhpc3RzOiAhIXBhc3N3b3JkLFxuICAgIGFwcEF1dGhUb2tlbkV4aXN0czogISFhcHBBdXRoVG9rZW4gLy8gTG9nIGFwcEF1dGhUb2tlbiBwcmVzZW5jZVxuICB9KTtcbiAgY29uc3QgW2FjY291bnRzLCBzZXRBY2NvdW50c10gPSB1c2VTdGF0ZTxTYXZpbmdzQWNjb3VudFtdPihbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc2VsZWN0ZWRQcm9kdWN0SWQsIHNldFNlbGVjdGVkUHJvZHVjdElkXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdHJhbnNhY3Rpb25zLCBzZXRUcmFuc2FjdGlvbnNdID0gdXNlU3RhdGU8VHJhbnNhY3Rpb25bXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJQb3J0Zm9saW9TY3JlZW4gdXNlRWZmZWN0IHRyaWdnZXJlZFwiKTtcbiAgICBpZiAodXNlckRhdGE/LmlkICYmIHVzZXJuYW1lICYmIHBhc3N3b3JkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInVzZXJEYXRhIGlzIHZhbGlkLCBmZXRjaGluZyBhY2NvdW50c1wiKTtcbiAgICAgIGZldGNoQWNjb3VudHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgdXNlckRhdGEgb3IgbWlzc2luZyBjcmVkZW50aWFsczpcIiwgeyB1c2VyRGF0YSwgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xuICAgICAgc2V0RXJyb3IoXCJVc2VyIGRhdGEgb3IgY3JlZGVudGlhbHMgYXJlIG1pc3Npbmcgb3IgaW52YWxpZC4gUGxlYXNlIGxvZyBpbiBhZ2Fpbi5cIik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFt1c2VyRGF0YSwgdXNlcm5hbWUsIHBhc3N3b3JkXSk7XG5cbiAgY29uc3QgZmV0Y2hBY2NvdW50cyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coXCJGZXRjaGluZyBhY2NvdW50cy4uLlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBJRDpcIiwgdXNlckRhdGEuaWQpO1xuICAgICAgY29uc29sZS5sb2coXCJVc2VybmFtZTpcIiwgdXNlcm5hbWUpO1xuICAgICAgY29uc29sZS5sb2coXCJQYXNzd29yZDpcIiwgcGFzc3dvcmQgPyBcIioqKioqKioqXCIgOiBcIk5vdCBwcm92aWRlZFwiKTtcblxuICAgICAgY29uc3QgYXV0aEhlYWRlciA9IGBCYXNpYyAke2J0b2EoYCR7dXNlcm5hbWV9OiR7cGFzc3dvcmR9YCl9YDtcbiAgICAgIGNvbnNvbGUubG9nKFwiQXV0aCBoZWFkZXI6XCIsIGF1dGhIZWFkZXIpO1xuXG4gICAgICBjb25zdCB1cmwgPSBgJHtBUElfQ09ORklHLkJBU0VfVVJMfSR7QVBJX0NPTkZJRy5TRUxGX0NMSUVOVFNfRU5EUE9JTlR9LyR7dXNlckRhdGEuaWR9L2FjY291bnRzYDtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgZnJvbSBVUkw6XCIsIHVybCk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGF1dGhIZWFkZXIsXG4gICAgICAgICAgJ2ZpbmVyYWN0LXBsYXRmb3JtLXRlbmFudGlkJzogVEVOQU5UX0lELFxuICAgICAgICAgICdhY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc2Ugc3RhdHVzOlwiLCByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgY29uc29sZS5sb2coXCJSZXNwb25zZSBoZWFkZXJzOlwiLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5oZWFkZXJzLCBudWxsLCAyKSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlIGRhdGE6XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcblxuICAgICAgaWYgKGRhdGEuc2F2aW5nc0FjY291bnRzICYmIEFycmF5LmlzQXJyYXkoZGF0YS5zYXZpbmdzQWNjb3VudHMpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2F2aW5ncyBhY2NvdW50cyBmb3VuZDpcIiwgZGF0YS5zYXZpbmdzQWNjb3VudHMubGVuZ3RoKTtcbiAgICAgICAgc2V0QWNjb3VudHMoZGF0YS5zYXZpbmdzQWNjb3VudHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlVuZXhwZWN0ZWQgZGF0YSBzdHJ1Y3R1cmU6XCIsIGRhdGEpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIGRhdGEgc3RydWN0dXJlXCIpO1xuICAgICAgfVxuXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBhY2NvdW50czpcIiwgZXJyKTtcbiAgICAgIHNldEVycm9yKGBGYWlsZWQgdG8gbG9hZCBwb3J0Zm9saW8gZGF0YS4gRXJyb3I6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAoYW1vdW50OiBudW1iZXIgfCB1bmRlZmluZWQsIHN5bWJvbDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKGFtb3VudCA9PT0gdW5kZWZpbmVkIHx8IGlzTmFOKGFtb3VudCkpIHtcbiAgICAgIHJldHVybiBgJHtzeW1ib2x9IDAuMDBgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7c3ltYm9sfSAke2Ftb3VudC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKX1gO1xuICB9O1xuXG4gIGNvbnN0IGNhbGN1bGF0ZVRvdGFsSW52ZXN0bWVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gYWNjb3VudHMucmVkdWNlKCh0b3RhbCwgYWNjb3VudCkgPT4gdG90YWwgKyAoYWNjb3VudC5hY2NvdW50QmFsYW5jZSB8fCAwKSwgMCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJvZHVjdFNlbGVjdCA9IChhY2NvdW50OiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZygnXFxuPT09PT09PT09PSBQUk9EVUNUIFNFTEVDVElPTiA9PT09PT09PT09Jyk7XG4gICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIGFjY291bnQ6JywgYWNjb3VudCk7XG4gICAgY29uc29sZS5sb2coJ0FjY291bnQgSUQ6JywgYWNjb3VudC5pZCk7XG4gICAgY29uc29sZS5sb2coJ0FwcCBBdXRoIFRva2VuOicsIGFwcEF1dGhUb2tlbik7IC8vIExvZyB0aGUgdG9rZW5cbiAgICBcbiAgICBpZiAoIWFwcEF1dGhUb2tlbikge1xuICAgICAgY29uc29sZS5lcnJvcignQXBwIGF1dGggdG9rZW4gaXMgbWlzc2luZyB3aGVuIHNlbGVjdGluZyBwcm9kdWN0Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0U2VsZWN0ZWRQcm9kdWN0SWQoYWNjb3VudC5pZCk7XG4gICAgZmV0Y2hUcmFuc2FjdGlvbnMoYWNjb3VudC5pZCk7XG4gIH07XG5cbiAgY29uc3QgZm9ybWF0QmFsYW5jZSA9IChiYWxhbmNlOiBudW1iZXIgfCB1bmRlZmluZWQpOiBzdHJpbmcgPT4ge1xuICAgIGlmIChiYWxhbmNlID09PSB1bmRlZmluZWQgfHwgYmFsYW5jZSA9PT0gbnVsbCB8fCBpc05hTihiYWxhbmNlKSkge1xuICAgICAgcmV0dXJuIFwiS1NoIDAuMDBcIjtcbiAgICB9XG4gICAgcmV0dXJuIGBLU2ggJHtiYWxhbmNlLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpfWA7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUHJvZHVjdERldGFpbFZpZXcgPSAoYWNjb3VudDogYW55KSA9PiB7XG4gICAgaWYgKCFhY2NvdW50KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdObyBhY2NvdW50IGZvdW5kIGZvciBzZWxlY3RlZCBJRCcpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHsvKiBCYWNrIEJ1dHRvbiAqL31cbiAgICAgICAgPGdyaWRMYXlvdXQgc3R5bGU9e3N0eWxlcy5iYWNrQnV0dG9uQ29udGFpbmVyfSByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLCAqXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjb2w9ezB9IHN0eWxlPXtzdHlsZXMuYmFja0J1dHRvbn0gdGV4dD1cIuKGkCBCYWNrXCIgXG4gICAgICAgICAgICBvblRhcD17KCkgPT4gc2V0U2VsZWN0ZWRQcm9kdWN0SWQobnVsbCl9IC8+XG4gICAgICAgICAgPGxhYmVsIGNvbD17MX0gc3R5bGU9e3N0eWxlcy5wcm9kdWN0RGV0YWlsVGl0bGV9IHRleHQ9XCJQcm9kdWN0IERldGFpbHNcIiAvPlxuICAgICAgICA8L2dyaWRMYXlvdXQ+XG5cbiAgICAgICAgey8qIEJhbGFuY2UgQ2FyZCAqL31cbiAgICAgICAgPGdyaWRMYXlvdXQgc3R5bGU9e3N0eWxlcy5zYXZpbmdzQ2FyZH0gcm93cz1cImF1dG8sIGF1dG8sIGF1dG9cIiBjb2x1bW5zPVwiKlwiPlxuICAgICAgICAgIDxsYWJlbCByb3c9ezB9IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRpdGxlfSB0ZXh0PXthY2NvdW50LnByb2R1Y3ROYW1lIHx8ICdOL0EnfSAvPlxuICAgICAgICAgIDxsYWJlbCByb3c9ezF9IHN0eWxlPXtzdHlsZXMuYWNjb3VudE51bWJlcn0gdGV4dD17YEFjY291bnQ6ICR7YWNjb3VudC5hY2NvdW50Tm8gfHwgJ04vQSd9YH0gLz5cbiAgICAgICAgICA8bGFiZWwgcm93PXsyfSBzdHlsZT17c3R5bGVzLmFjY291bnRCYWxhbmNlfSBcbiAgICAgICAgICAgIHRleHQ9e2BCYWxhbmNlOiAke2Zvcm1hdEJhbGFuY2UoYWNjb3VudC5hY2NvdW50QmFsYW5jZSl9YH0gLz5cbiAgICAgICAgPC9ncmlkTGF5b3V0PlxuXG4gICAgICAgIHsvKiBUcmFuc2FjdGlvbnMgQ2FyZCAqL31cbiAgICAgICAgPGdyaWRMYXlvdXQgc3R5bGU9e3N0eWxlcy50cmFuc2FjdGlvbnNDYXJkfSByb3dzPVwiYXV0bywgYXV0b1wiIGNvbHVtbnM9XCIqXCI+XG4gICAgICAgICAgPGxhYmVsIHJvdz17MH0gc3R5bGU9e3N0eWxlcy50cmFuc2FjdGlvbnNTZWN0aW9uVGl0bGV9IHRleHQ9XCJSZWNlbnQgVHJhbnNhY3Rpb25zXCIgLz5cbiAgICAgICAgICA8c3RhY2tMYXlvdXQgcm93PXsxfT5cbiAgICAgICAgICAgIHt0cmFuc2FjdGlvbnMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgdHJhbnNhY3Rpb25zLnNsaWNlKDAsIDUpLm1hcCgodHJhbnNhY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICA8Z3JpZExheW91dCBrZXk9e3RyYW5zYWN0aW9uLmlkfSBzdHlsZT17c3R5bGVzLnRyYW5zYWN0aW9uSXRlbX0gcm93cz1cImF1dG8sIGF1dG9cIiBjb2x1bW5zPVwiKiwgYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gY29sPXswfSB0ZXh0PXt0cmFuc2FjdGlvbi5kZXNjcmlwdGlvbn0gc3R5bGU9e3N0eWxlcy50cmFuc2FjdGlvbkRlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gY29sPXsxfSB0ZXh0PXtmb3JtYXRCYWxhbmNlKHRyYW5zYWN0aW9uLmFtb3VudCl9IFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17W3N0eWxlcy50cmFuc2FjdGlvbkFtb3VudCwgXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24udHlwZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCd3aXRoZHJhd2FsJykgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5uZWdhdGl2ZUFtb3VudCA6IHN0eWxlcy5wb3NpdGl2ZUFtb3VudF19IC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgcm93PXsxfSBjb2w9ezB9IHRleHQ9e3RyYW5zYWN0aW9uLmRhdGV9IHN0eWxlPXtzdHlsZXMudHJhbnNhY3Rpb25EYXRlfSAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MX0gY29sPXsxfSB0ZXh0PXtgQmFsYW5jZTogJHtmb3JtYXRCYWxhbmNlKHRyYW5zYWN0aW9uLnJ1bm5pbmdCYWxhbmNlKX1gfSBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy50cmFuc2FjdGlvbkJhbGFuY2V9IC8+XG4gICAgICAgICAgICAgICAgPC9ncmlkTGF5b3V0PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMubm9UcmFuc2FjdGlvbnNMYWJlbH0gdGV4dD1cIk5vIHJlY2VudCB0cmFuc2FjdGlvbnNcIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3N0YWNrTGF5b3V0PlxuICAgICAgICA8L2dyaWRMYXlvdXQ+XG5cbiAgICAgICAgey8qIFF1aWNrIEFjdGlvbnMgQ2FyZCAqL31cbiAgICAgICAgPGdyaWRMYXlvdXQgc3R5bGU9e3N0eWxlcy5xdWlja0FjdGlvbnNDYXJkfSByb3dzPVwiYXV0bywgYXV0b1wiIGNvbHVtbnM9XCIqXCI+XG4gICAgICAgICAgPGxhYmVsIHJvdz17MH0gc3R5bGU9e3N0eWxlcy5xdWlja0FjdGlvbnNTZWN0aW9uVGl0bGV9IHRleHQ9XCJRdWljayBBY3Rpb25zXCIgLz5cbiAgICAgICAgICA8Z3JpZExheW91dCByb3c9ezF9IGNvbHVtbnM9XCIqLCAqXCIgc3R5bGU9e3N0eWxlcy5xdWlja0FjdGlvbnNDb250YWluZXJ9PlxuICAgICAgICAgICAgPGJ1dHRvbiBjb2w9ezB9IHN0eWxlPXtbc3R5bGVzLmFjdGlvbkJ1dHRvbiwgc3R5bGVzLmludmVzdEJ1dHRvbl19IFxuICAgICAgICAgICAgICB0ZXh0PVwiSW52ZXN0XCIgb25UYXA9eygpID0+IG5hdmlnYXRpb24ubmF2aWdhdGUoXCJJbnZlc3RtZW50c1wiLCB7IHVzZXJEYXRhIH0pfSAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjb2w9ezF9IHN0eWxlPXtbc3R5bGVzLmFjdGlvbkJ1dHRvbiwgc3R5bGVzLndpdGhkcmF3QnV0dG9uXX0gXG4gICAgICAgICAgICAgIHRleHQ9XCJXaXRoZHJhd1wiIG9uVGFwPXsoKSA9PiBuYXZpZ2F0aW9uLm5hdmlnYXRlKFwiV2l0aGRyYXdcIil9IC8+XG4gICAgICAgICAgPC9ncmlkTGF5b3V0PlxuICAgICAgICA8L2dyaWRMYXlvdXQ+XG4gICAgICA8Lz5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGZldGNoVHJhbnNhY3Rpb25zID0gdXNlQ2FsbGJhY2soYXN5bmMgKGFjY291bnRJZDogbnVtYmVyKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKCdcXG49PT09PT09PT09IEZFVENISU5HIFRSQU5TQUNUSU9OUyA9PT09PT09PT09Jyk7XG4gICAgICBjb25zb2xlLmxvZygnQWNjb3VudCBJRDonLCBhY2NvdW50SWQpO1xuICAgICAgY29uc29sZS5sb2coJ0FwcCBBdXRoIFRva2VuOicsIGFwcEF1dGhUb2tlbik7XG5cbiAgICAgIGlmICghYXBwQXV0aFRva2VuKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FwcCBhdXRoZW50aWNhdGlvbiB0b2tlbiBpcyBtaXNzaW5nIGluIFBvcnRmb2xpb1NjcmVlbicpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FwcCBhdXRoZW50aWNhdGlvbiB0b2tlbiBpcyBtaXNzaW5nJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IG9uZU1vbnRoQWdvID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSAtIDEsIHRvZGF5LmdldERhdGUoKSk7XG4gICAgICBcbiAgICAgIGNvbnN0IGZvcm1hdERhdGVTdHIgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBmcm9tRGF0ZSA9IGZvcm1hdERhdGVTdHIob25lTW9udGhBZ28pO1xuICAgICAgY29uc3QgdG9EYXRlID0gZm9ybWF0RGF0ZVN0cih0b2RheSk7XG5cbiAgICAgIGNvbnN0IHVybCA9IGAke0FQSV9DT05GSUcuQkFTRV9VUkx9JHtBUElfQ09ORklHLlNBVklOR1NfQUNDT1VOVFNfRU5EUE9JTlR9LyR7YWNjb3VudElkfS90cmFuc2FjdGlvbnMvc2VhcmNoP2Zyb21EYXRlPSR7ZnJvbURhdGV9JnRvRGF0ZT0ke3RvRGF0ZX0mZnJvbVN1Ym1pdHRlZERhdGU9JHtmcm9tRGF0ZX0mdG9TdWJtaXR0ZWREYXRlPSR7dG9EYXRlfSZmcm9tQW1vdW50PTEmdG9BbW91bnQ9NTAwMDAwMDAmdHlwZXM9MSwyLDMsNCwyMCwyMSZvcmRlckJ5PWNyZWF0ZWREYXRlJTJDdHJhbnNhY3Rpb25EYXRlJTJDaWQmc29ydE9yZGVyPURFU0MmZGF0ZUZvcm1hdD15eXl5LU1NLWRkYDtcblxuICAgICAgY29uc29sZS5sb2coJ01ha2luZyByZXF1ZXN0IHdpdGggVVJMOicsIHVybCk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCYXNpYyAke2FwcEF1dGhUb2tlbn1gLFxuICAgICAgICAgICdmaW5lcmFjdC1wbGF0Zm9ybS10ZW5hbnRpZCc6IFRFTkFOVF9JRCxcbiAgICAgICAgICAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coJ1RyYW5zYWN0aW9uIERhdGE6JywgSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikpO1xuXG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLmNvbnRlbnQgJiYgQXJyYXkuaXNBcnJheShkYXRhLmNvbnRlbnQpKSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFRyYW5zYWN0aW9ucyA9IGRhdGEuY29udGVudC5tYXAoKHQ6IGFueSkgPT4gKHtcbiAgICAgICAgICBpZDogdC5pZCxcbiAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSh0LmRhdGVbMF0sIHQuZGF0ZVsxXSAtIDEsIHQuZGF0ZVsyXSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1HQicsIHtcbiAgICAgICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYydcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBhbW91bnQ6IHQuYW1vdW50LFxuICAgICAgICAgIHR5cGU6IHQudHJhbnNhY3Rpb25UeXBlPy52YWx1ZSB8fCAnVHJhbnNhY3Rpb24nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB0LnBheW1lbnREZXRhaWxEYXRhPy5yZWNlaXB0TnVtYmVyIHx8IHQudHJhbnNhY3Rpb25UeXBlPy52YWx1ZSB8fCAnVHJhbnNhY3Rpb24nLFxuICAgICAgICAgIHJ1bm5pbmdCYWxhbmNlOiB0LnJ1bm5pbmdCYWxhbmNlIHx8IDBcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdGb3JtYXR0ZWQgVHJhbnNhY3Rpb25zOicsIGZvcm1hdHRlZFRyYW5zYWN0aW9ucyk7XG4gICAgICAgIHNldFRyYW5zYWN0aW9ucyhmb3JtYXR0ZWRUcmFuc2FjdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdObyB0cmFuc2FjdGlvbnMgZm91bmQgb3IgaW52YWxpZCBkYXRhIHN0cnVjdHVyZTonLCBkYXRhKTtcbiAgICAgICAgc2V0VHJhbnNhY3Rpb25zKFtdKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRyYW5zYWN0aW9uczpcIiwgZXJyb3IpO1xuICAgICAgc2V0VHJhbnNhY3Rpb25zKFtdKTtcbiAgICB9XG4gIH0sIFthcHBBdXRoVG9rZW5dKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8Z3JpZExheW91dCByb3dzPVwiKiwgYXV0b1wiPlxuICAgICAgICA8YWN0aXZpdHlJbmRpY2F0b3IgYnVzeT17dHJ1ZX0gcm93PXswfSAvPlxuICAgICAgICA8TmF2aWdhdGlvbkJhciByb3c9ezF9IGFjdGl2ZVJvdXRlPVwiUG9ydGZvbGlvXCIgbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0gdXNlckRhdGE9e3VzZXJEYXRhfSAvPlxuICAgICAgPC9ncmlkTGF5b3V0PlxuICAgICk7XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGdyaWRMYXlvdXQgcm93cz1cIiosIGF1dG9cIj5cbiAgICAgICAgPGxhYmVsIHRleHQ9e2Vycm9yfSByb3c9ezB9IHN0eWxlPXtzdHlsZXMuZXJyb3JUZXh0fSAvPlxuICAgICAgICA8TmF2aWdhdGlvbkJhciByb3c9ezF9IGFjdGl2ZVJvdXRlPVwiUG9ydGZvbGlvXCIgbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0gdXNlckRhdGE9e3VzZXJEYXRhfSAvPlxuICAgICAgPC9ncmlkTGF5b3V0PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxncmlkTGF5b3V0IHJvd3M9XCIqLCBhdXRvXCI+XG4gICAgICA8c2Nyb2xsVmlldyByb3c9ezB9PlxuICAgICAgICA8c3RhY2tMYXlvdXQgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgPHN0YWNrTGF5b3V0IHN0eWxlPXtzdHlsZXMubG9hZGVyQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGFjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9e3RydWV9IHN0eWxlPXtzdHlsZXMubG9hZGVyfSAvPlxuICAgICAgICAgICAgPC9zdGFja0xheW91dD5cbiAgICAgICAgICApIDogZXJyb3IgPyAoXG4gICAgICAgICAgICA8bGFiZWwgdGV4dD17ZXJyb3J9IHN0eWxlPXtzdHlsZXMuZXJyb3JUZXh0fSAvPlxuICAgICAgICAgICkgOiBzZWxlY3RlZFByb2R1Y3RJZCA/IChcbiAgICAgICAgICAgIC8vIEFkZCBudWxsIGNoZWNrIGZvciBmb3VuZCBhY2NvdW50XG4gICAgICAgICAgICAoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEFjY291bnQgPSBhY2NvdW50cy5maW5kKGFjYyA9PiBhY2MuaWQgPT09IHNlbGVjdGVkUHJvZHVjdElkKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkQWNjb3VudCA/IFxuICAgICAgICAgICAgICAgIHJlbmRlclByb2R1Y3REZXRhaWxWaWV3KHNlbGVjdGVkQWNjb3VudCkgOiBcbiAgICAgICAgICAgICAgICA8bGFiZWwgdGV4dD1cIkFjY291bnQgbm90IGZvdW5kXCIgc3R5bGU9e3N0eWxlcy5lcnJvclRleHR9IC8+O1xuICAgICAgICAgICAgfSkoKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAvLyBTaG93IHJlZ3VsYXIgcG9ydGZvbGlvIHZpZXdcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVwiWW91ciBQb3J0Zm9saW9cIiBzdHlsZT17c3R5bGVzLmhlYWRlclRleHR9IC8+XG4gICAgICAgICAgICAgIHthY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwID8gYWNjb3VudHMubWFwKChhY2NvdW50KSA9PiAoXG4gICAgICAgICAgICAgICAgPGdyaWRMYXlvdXQga2V5PXthY2NvdW50LmlkfSBzdHlsZT17c3R5bGVzLmNhcmR9IHJvd3M9XCJhdXRvLCBhdXRvXCIgXG4gICAgICAgICAgICAgICAgICBjb2x1bW5zPVwiKiwgYXV0b1wiIG9uVGFwPXsoKSA9PiBoYW5kbGVQcm9kdWN0U2VsZWN0KGFjY291bnQpfT5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCByb3c9ezB9IGNvbD17MH0gdGV4dD17YWNjb3VudC5wcm9kdWN0TmFtZSB8fCAnTi9BJ30gc3R5bGU9e3N0eWxlcy5wcm9kdWN0TmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCByb3c9ezB9IGNvbD17MX0gdGV4dD17Zm9ybWF0Q3VycmVuY3koYWNjb3VudC5hY2NvdW50QmFsYW5jZSwgYWNjb3VudC5jdXJyZW5jeT8uZGlzcGxheVN5bWJvbCB8fCAnS1NoJyl9IFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmFjY291bnRCYWxhbmNlfSAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MX0gY29sPXswfSB0ZXh0PXtgQWNjb3VudDogJHthY2NvdW50LmFjY291bnRObyB8fCAnTi9BJ31gfSBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5hY2NvdW50TnVtYmVyfSAvPlxuICAgICAgICAgICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgICAgICAgICAgKSkgOiAoXG4gICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XCJObyBhY2NvdW50cyBmb3VuZFwiIHN0eWxlPXtzdHlsZXMubm9BY2NvdW50c0xhYmVsfSAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9zdGFja0xheW91dD5cbiAgICAgIDwvc2Nyb2xsVmlldz5cbiAgICAgIDxOYXZpZ2F0aW9uQmFyIFxuICAgICAgICByb3c9ezF9IFxuICAgICAgICBhY3RpdmVSb3V0ZT1cIlBvcnRmb2xpb1wiIFxuICAgICAgICBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSBcbiAgICAgICAgdXNlckRhdGE9e3suLi51c2VyRGF0YSwgdXNlcm5hbWUsIHBhc3N3b3JkLCBhcHBBdXRoVG9rZW59fVxuICAgICAgLz5cbiAgICA8L2dyaWRMYXlvdXQ+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgY29udGFpbmVyOiB7XG4gICAgcGFkZGluZzogMTYsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGNUY1RjVcIixcbiAgfSxcbiAgaGVhZGVyVGV4dDoge1xuICAgIGZvbnRTaXplOiAyNCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5Cb3R0b206IDE2LFxuICB9LFxuICBjYXJkOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgcGFkZGluZzogMTYsXG4gICAgbWFyZ2luQm90dG9tOiAxNixcbiAgICBlbGV2YXRpb246IDIsXG4gIH0sXG4gIHNlY3Rpb25UaXRsZToge1xuICAgIGZvbnRTaXplOiAxOCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gICAgbWFyZ2luQm90dG9tOiA4LFxuICB9LFxuICB0b3RhbEludmVzdG1lbnQ6IHtcbiAgICBmb250U2l6ZTogMjQsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgY29sb3I6IFwiIzRDQUY1MFwiLFxuICB9LFxuICBicmVha2Rvd25UaXRsZToge1xuICAgIGZvbnRTaXplOiAyMCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gICAgbWFyZ2luVG9wOiAxNixcbiAgICBtYXJnaW5Cb3R0b206IDgsXG4gIH0sXG4gIHByb2R1Y3ROYW1lOiB7XG4gICAgZm9udFNpemU6IDE4LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOiBcIiMyMTIxMjFcIixcbiAgfSxcbiAgYWNjb3VudE51bWJlcjoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBjb2xvcjogXCIjNzU3NTc1XCIsXG4gICAgdGV4dEFsaWdubWVudDogXCJyaWdodFwiLFxuICB9LFxuICBhY2NvdW50QmFsYW5jZToge1xuICAgIGZvbnRTaXplOiAyMCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjNENBRjUwXCIsXG4gICAgbWFyZ2luVG9wOiA4LFxuICB9LFxuICBhY2NvdW50U3RhdHVzOiB7XG4gICAgZm9udFNpemU6IDE0LFxuICAgIGNvbG9yOiBcIiM3NTc1NzVcIixcbiAgICBtYXJnaW5Ub3A6IDQsXG4gIH0sXG4gIGxhc3RUcmFuc2FjdGlvbjoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBjb2xvcjogXCIjNzU3NTc1XCIsXG4gICAgbWFyZ2luVG9wOiA0LFxuICB9LFxuICBlcnJvclRleHQ6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgY29sb3I6IFwicmVkXCIsXG4gICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgfSxcbiAgbG9hZGVyOiB7XG4gICAgbWFyZ2luOiAxNixcbiAgfSxcbiAgYmFja0J1dHRvbkNvbnRhaW5lcjoge1xuICAgIG1hcmdpbkJvdHRvbTogMTUsXG4gIH0sXG4gIGJhY2tCdXR0b246IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgY29sb3I6IFwiIzRBOTBFMlwiLFxuICAgIHBhZGRpbmc6IDgsXG4gICAgd2lkdGg6IDEwMCxcbiAgICB0ZXh0QWxpZ25tZW50OiBcImxlZnRcIixcbiAgfSxcbiAgcHJvZHVjdERldGFpbFRpdGxlOiB7XG4gICAgZm9udFNpemU6IDIwLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOiBcIiMzMzMzMzNcIixcbiAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICB9LFxuICBzYXZpbmdzQ2FyZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgIHBhZGRpbmc6IDE2LFxuICAgIG1hcmdpbkJvdHRvbTogMTYsXG4gICAgZWxldmF0aW9uOiAyLFxuICB9LFxuICBzZWN0aW9uVGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTgsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgY29sb3I6IFwiIzIxMjEyMVwiLFxuICAgIG1hcmdpbkJvdHRvbTogOCxcbiAgfSxcbiAgYWNjb3VudE51bWJlcjoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBjb2xvcjogXCIjNzU3NTc1XCIsXG4gICAgdGV4dEFsaWdubWVudDogXCJyaWdodFwiLFxuICB9LFxuICBhY2NvdW50QmFsYW5jZToge1xuICAgIGZvbnRTaXplOiAyMCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjNENBRjUwXCIsXG4gICAgbWFyZ2luVG9wOiA4LFxuICB9LFxuICB0cmFuc2FjdGlvbnNDYXJkOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBib3JkZXJSYWRpdXM6IDE1LFxuICAgIHBhZGRpbmc6IDIwLFxuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgZWxldmF0aW9uOiAzLFxuICB9LFxuICB0cmFuc2FjdGlvbnNTZWN0aW9uVGl0bGU6IHtcbiAgICBmb250U2l6ZTogMjAsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgY29sb3I6IFwiIzMzMzMzM1wiLFxuICAgIG1hcmdpbkJvdHRvbTogMTUsXG4gIH0sXG4gIHRyYW5zYWN0aW9uSXRlbToge1xuICAgIG1hcmdpbkJvdHRvbTogMTUsXG4gICAgYm9yZGVyQm90dG9tV2lkdGg6IDEsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IFwiI0UwRTBFMFwiLFxuICAgIHBhZGRpbmdCb3R0b206IDEwLFxuICB9LFxuICB0cmFuc2FjdGlvbkRlc2NyaXB0aW9uOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGNvbG9yOiBcIiMzMzMzMzNcIixcbiAgfSxcbiAgdHJhbnNhY3Rpb25BbW91bnQ6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gIH0sXG4gIHBvc2l0aXZlQW1vdW50OiB7XG4gICAgY29sb3I6IFwiIzRDRDk2NFwiLFxuICB9LFxuICBuZWdhdGl2ZUFtb3VudDoge1xuICAgIGNvbG9yOiBcIiNGRjNCMzBcIixcbiAgfSxcbiAgdHJhbnNhY3Rpb25EYXRlOiB7XG4gICAgZm9udFNpemU6IDE0LFxuICAgIGNvbG9yOiBcIiM3Nzc3NzdcIixcbiAgfSxcbiAgdHJhbnNhY3Rpb25CYWxhbmNlOiB7XG4gICAgZm9udFNpemU6IDE0LFxuICAgIGNvbG9yOiBcIiM3Nzc3NzdcIixcbiAgfSxcbiAgbm9UcmFuc2FjdGlvbnNMYWJlbDoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBjb2xvcjogXCIjNzU3NTc1XCIsXG4gICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgfSxcbiAgcXVpY2tBY3Rpb25zQ2FyZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYm9yZGVyUmFkaXVzOiAxNSxcbiAgICBwYWRkaW5nOiAyMCxcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIGVsZXZhdGlvbjogMyxcbiAgfSxcbiAgcXVpY2tBY3Rpb25zU2VjdGlvblRpdGxlOiB7XG4gICAgZm9udFNpemU6IDIwLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOiBcIiMzMzMzMzNcIixcbiAgICBtYXJnaW5Cb3R0b206IDE1LFxuICB9LFxuICBxdWlja0FjdGlvbnNDb250YWluZXI6IHtcbiAgICBtYXJnaW5Ub3A6IDE1LFxuICB9LFxuICBhY3Rpb25CdXR0b246IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGJvcmRlclJhZGl1czogMjUsXG4gICAgcGFkZGluZzogMTIsXG4gICAgbWFyZ2luOiA0LFxuICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgZWxldmF0aW9uOiAzLFxuICB9LFxuICBpbnZlc3RCdXR0b246IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzRDQUY1MFwiLFxuICB9LFxuICB3aXRoZHJhd0J1dHRvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjE5NkYzXCIsXG4gIH0sXG4gIG5vQWNjb3VudHNMYWJlbDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBjb2xvcjogXCIjNzc3Nzc3XCIsXG4gICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5Ub3A6IDIwLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0XCI7XG5pbXBvcnQgeyBGcmFtZU5hdmlnYXRpb25Qcm9wIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC1uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBNYWluU3RhY2tQYXJhbUxpc3QgfSBmcm9tIFwiLi4vTmF2aWdhdGlvblBhcmFtTGlzdFwiO1xuaW1wb3J0IHsgU2Nyb2xsVmlldywgU3RhY2tMYXlvdXQsIExhYmVsLCBHcmlkTGF5b3V0LCBCdXR0b24sIFRleHRGaWVsZCB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmVcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25CYXIgfSBmcm9tIFwiLi9OYXZpZ2F0aW9uQmFyXCI7XG5cbnR5cGUgUHJvZmlsZVNjcmVlblByb3BzID0ge1xuICBuYXZpZ2F0aW9uOiBGcmFtZU5hdmlnYXRpb25Qcm9wPE1haW5TdGFja1BhcmFtTGlzdCwgXCJQcm9maWxlXCI+LFxuICByb3V0ZTogeyBwYXJhbXM/OiB7IHVzZXJEYXRhOiBhbnkgfSB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUHJvZmlsZVNjcmVlbih7IG5hdmlnYXRpb24sIHJvdXRlIH06IFByb2ZpbGVTY3JlZW5Qcm9wcykge1xuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKHJvdXRlLnBhcmFtcz8udXNlckRhdGEgfHwge1xuICAgIGRpc3BsYXlOYW1lOiAnJyxcbiAgICBlbWFpbEFkZHJlc3M6ICcnLFxuICAgIG1vYmlsZU5vOiAnJyxcbiAgICBhY2NvdW50Tm86ICcnLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyb3V0ZS5wYXJhbXM/LnVzZXJEYXRhKSB7XG4gICAgICBzZXRVc2VyRGF0YShyb3V0ZS5wYXJhbXMudXNlckRhdGEpO1xuICAgIH1cbiAgfSwgW3JvdXRlLnBhcmFtcz8udXNlckRhdGFdKTtcblxuICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZWRpdGVkVXNlckRhdGEsIHNldEVkaXRlZFVzZXJEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBkaXNwbGF5TmFtZTogdXNlckRhdGEuZGlzcGxheU5hbWUsXG4gICAgZW1haWxBZGRyZXNzOiB1c2VyRGF0YS5lbWFpbEFkZHJlc3MsXG4gICAgbW9iaWxlTm86IHVzZXJEYXRhLm1vYmlsZU5vLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVFZGl0ID0gKCkgPT4ge1xuICAgIHNldElzRWRpdGluZyh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xuICAgIC8vIEhlcmUgeW91IHdvdWxkIHR5cGljYWxseSBtYWtlIGFuIEFQSSBjYWxsIHRvIHVwZGF0ZSB0aGUgdXNlciBkYXRhXG4gICAgLy8gRm9yIG5vdywgd2UnbGwganVzdCB1cGRhdGUgdGhlIGxvY2FsIHN0YXRlXG4gICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcbiAgICAvLyBVcGRhdGUgdGhlIGdsb2JhbCB1c2VyRGF0YSBzdGF0ZSBoZXJlIGlmIG5lZWRlZFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcbiAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xuICAgIHNldEVkaXRlZFVzZXJEYXRhKHtcbiAgICAgIGRpc3BsYXlOYW1lOiB1c2VyRGF0YS5kaXNwbGF5TmFtZSxcbiAgICAgIGVtYWlsQWRkcmVzczogdXNlckRhdGEuZW1haWxBZGRyZXNzLFxuICAgICAgbW9iaWxlTm86IHVzZXJEYXRhLm1vYmlsZU5vLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBnbG9iYWwudG9rZW4gPSBudWxsO1xuICAgIGdsb2JhbC51c2VyRGF0YSA9IG51bGw7XG4gICAgbmF2aWdhdGlvbi5yZXNldCh7XG4gICAgICBpbmRleDogMCxcbiAgICAgIHJvdXRlczogW3sgbmFtZTogJ0xvZ2luJyB9XSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxncmlkTGF5b3V0IHJvd3M9XCIqLCBhdXRvXCI+XG4gICAgICA8c2Nyb2xsVmlldyByb3c9ezB9PlxuICAgICAgICA8c3RhY2tMYXlvdXQgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxsYWJlbCB0ZXh0PVwiUHJvZmlsZVwiIHN0eWxlPXtzdHlsZXMuaGVhZGVyVGV4dH0gLz5cbiAgICAgICAgICBcbiAgICAgICAgICA8Z3JpZExheW91dCBzdHlsZT17c3R5bGVzLmNhcmR9IHJvd3M9XCJhdXRvLCBhdXRvLCBhdXRvLCBhdXRvLCBhdXRvXCIgY29sdW1ucz1cImF1dG8sICpcIj5cbiAgICAgICAgICAgIDxsYWJlbCByb3c9ezB9IGNvbD17MH0gc3R5bGU9e3N0eWxlcy5sYWJlbH0gdGV4dD1cIk5hbWU6XCIgLz5cbiAgICAgICAgICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICAgICAgICAgIDx0ZXh0RmllbGQgcm93PXswfSBjb2w9ezF9IHN0eWxlPXtzdHlsZXMuaW5wdXR9IHRleHQ9e2VkaXRlZFVzZXJEYXRhLmRpc3BsYXlOYW1lfSBcbiAgICAgICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhhcmdzKSA9PiBzZXRFZGl0ZWRVc2VyRGF0YSh7Li4uZWRpdGVkVXNlckRhdGEsIGRpc3BsYXlOYW1lOiBhcmdzLm9iamVjdC50ZXh0fSl9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8bGFiZWwgcm93PXswfSBjb2w9ezF9IHN0eWxlPXtzdHlsZXMudmFsdWV9IHRleHQ9e3VzZXJEYXRhLmRpc3BsYXlOYW1lfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGxhYmVsIHJvdz17MX0gY29sPXswfSBzdHlsZT17c3R5bGVzLmxhYmVsfSB0ZXh0PVwiRW1haWw6XCIgLz5cbiAgICAgICAgICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICAgICAgICAgIDx0ZXh0RmllbGQgcm93PXsxfSBjb2w9ezF9IHN0eWxlPXtzdHlsZXMuaW5wdXR9IHRleHQ9e2VkaXRlZFVzZXJEYXRhLmVtYWlsQWRkcmVzc31cbiAgICAgICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhhcmdzKSA9PiBzZXRFZGl0ZWRVc2VyRGF0YSh7Li4uZWRpdGVkVXNlckRhdGEsIGVtYWlsQWRkcmVzczogYXJncy5vYmplY3QudGV4dH0pfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MX0gY29sPXsxfSBzdHlsZT17c3R5bGVzLnZhbHVlfSB0ZXh0PXt1c2VyRGF0YS5lbWFpbEFkZHJlc3N9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8bGFiZWwgcm93PXsyfSBjb2w9ezB9IHN0eWxlPXtzdHlsZXMubGFiZWx9IHRleHQ9XCJNb2JpbGU6XCIgLz5cbiAgICAgICAgICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICAgICAgICAgIDx0ZXh0RmllbGQgcm93PXsyfSBjb2w9ezF9IHN0eWxlPXtzdHlsZXMuaW5wdXR9IHRleHQ9e2VkaXRlZFVzZXJEYXRhLm1vYmlsZU5vfVxuICAgICAgICAgICAgICAgIG9uVGV4dENoYW5nZT17KGFyZ3MpID0+IHNldEVkaXRlZFVzZXJEYXRhKHsuLi5lZGl0ZWRVc2VyRGF0YSwgbW9iaWxlTm86IGFyZ3Mub2JqZWN0LnRleHR9KX0gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxsYWJlbCByb3c9ezJ9IGNvbD17MX0gc3R5bGU9e3N0eWxlcy52YWx1ZX0gdGV4dD17dXNlckRhdGEubW9iaWxlTm99IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8bGFiZWwgcm93PXszfSBjb2w9ezB9IHN0eWxlPXtzdHlsZXMubGFiZWx9IHRleHQ9XCJBY2NvdW50IE5vOlwiIC8+XG4gICAgICAgICAgICA8bGFiZWwgcm93PXszfSBjb2w9ezF9IHN0eWxlPXtzdHlsZXMudmFsdWV9IHRleHQ9e3VzZXJEYXRhLmFjY291bnROb30gLz5cbiAgICAgICAgICA8L2dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICB7aXNFZGl0aW5nID8gKFxuICAgICAgICAgICAgPHN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHN0eWxlPXtzdHlsZXMuYnV0dG9uQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLnNhdmVCdXR0b259IHRleHQ9XCJTYXZlXCIgb25UYXA9e2hhbmRsZVNhdmV9IC8+XG4gICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5jYW5jZWxCdXR0b259IHRleHQ9XCJDYW5jZWxcIiBvblRhcD17aGFuZGxlQ2FuY2VsfSAvPlxuICAgICAgICAgICAgPC9zdGFja0xheW91dD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmVkaXRCdXR0b259IHRleHQ9XCJFZGl0IFByb2ZpbGVcIiBvblRhcD17aGFuZGxlRWRpdH0gLz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmxvZ291dEJ1dHRvbn0gdGV4dD1cIkxvZ291dFwiIG9uVGFwPXtoYW5kbGVMb2dvdXR9IC8+XG4gICAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgICA8L3Njcm9sbFZpZXc+XG4gICAgICA8TmF2aWdhdGlvbkJhciByb3c9ezF9IGFjdGl2ZVJvdXRlPVwiUHJvZmlsZVwiIG5hdmlnYXRpb249e25hdmlnYXRpb259IHVzZXJEYXRhPXt1c2VyRGF0YX0gLz5cbiAgICA8L2dyaWRMYXlvdXQ+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgY29udGFpbmVyOiB7XG4gICAgcGFkZGluZzogMjAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGNUY1RjVcIixcbiAgICBwYWRkaW5nQm90dG9tOiA4MCxcbiAgfSxcbiAgaGVhZGVyVGV4dDoge1xuICAgIGZvbnRTaXplOiAyNCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICB9LFxuICBjYXJkOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgIHBhZGRpbmc6IDE1LFxuICAgIG1hcmdpbkJvdHRvbTogMTUsXG4gICAgZWxldmF0aW9uOiAzLFxuICB9LFxuICBsYWJlbDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBjb2xvcjogXCIjNzU3NTc1XCIsXG4gICAgbWFyZ2luUmlnaHQ6IDEwLFxuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gIH0sXG4gIHZhbHVlOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGNvbG9yOiBcIiMyMTIxMjFcIixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICB9LFxuICBsb2dvdXRCdXR0b246IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGNzA0M1wiLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIHBhZGRpbmc6IDEwLFxuICAgIG1hcmdpblRvcDogMjAsXG4gIH0sXG4gIG5hdkJhcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgaGVpZ2h0OiA2MCxcbiAgICBib3JkZXJUb3BXaWR0aDogMSxcbiAgICBib3JkZXJUb3BDb2xvcjogXCIjRTZGM0ZGXCIsXG4gIH0sXG4gIG5hdkl0ZW06IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICBjb2xvcjogXCIjNEE5MEUyXCIsXG4gICAgZm9udFNpemU6IDEwLFxuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgcGFkZGluZzogMCxcbiAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICB9LFxuICBhY3RpdmVOYXZJdGVtOiB7XG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkY3MDQzXCIsIC8vIENoYW5nZWQgdG8gb3JhbmdlXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIG1hcmdpbjogNSxcbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgY29sb3I6IFwiIzIxMjEyMVwiLFxuICAgIGJvcmRlcldpZHRoOiAxLFxuICAgIGJvcmRlckNvbG9yOiBcIiNFMEUwRTBcIixcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgcGFkZGluZzogNSxcbiAgfSxcbiAgZWRpdEJ1dHRvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNEE5MEUyXCIsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgcGFkZGluZzogMTAsXG4gICAgbWFyZ2luVG9wOiAyMCxcbiAgfSxcbiAgc2F2ZUJ1dHRvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNENBRjUwXCIsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgcGFkZGluZzogMTAsXG4gICAgbWFyZ2luUmlnaHQ6IDEwLFxuICB9LFxuICBjYW5jZWxCdXR0b246IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0Y0NDMzNlwiLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIHBhZGRpbmc6IDEwLFxuICB9LFxuICBidXR0b25Db250YWluZXI6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5Ub3A6IDIwLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdFwiO1xuaW1wb3J0IHsgRnJhbWVOYXZpZ2F0aW9uUHJvcCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQtbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgTWFpblN0YWNrUGFyYW1MaXN0IH0gZnJvbSBcIi4uL05hdmlnYXRpb25QYXJhbUxpc3RcIjtcbmltcG9ydCB7IFRleHRGaWVsZCwgQnV0dG9uLCBTdGFja0xheW91dCwgTGFiZWwsIEZsZXhib3hMYXlvdXQsIFNjcm9sbFZpZXcgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCI7XG5pbXBvcnQgeyBBUElfQ09ORklHIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG50eXBlIFNpZ251cFNjcmVlblByb3BzID0ge1xuICBuYXZpZ2F0aW9uOiBGcmFtZU5hdmlnYXRpb25Qcm9wPE1haW5TdGFja1BhcmFtTGlzdCwgXCJTaWdudXBcIj4sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gU2lnbnVwU2NyZWVuKHsgbmF2aWdhdGlvbiB9OiBTaWdudXBTY3JlZW5Qcm9wcykge1xuICBjb25zdCBbZmlyc3RuYW1lLCBzZXRGaXJzdG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsYXN0bmFtZSwgc2V0TGFzdG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttb2JpbGVObywgc2V0TW9iaWxlTm9dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtyZXBlYXRQYXNzd29yZCwgc2V0UmVwZWF0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbXBsb3llcklkLCBzZXRFbXBsb3llcklkXSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBOZXcgc3RhdGUgZm9yIGVtcGxveWVyIElEXG4gIGNvbnN0IFtzaWdudXBTdGF0dXMsIHNldFNpZ251cFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBmb3JtYXREYXRlID0gKGRhdGU6IERhdGUpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IGRheSA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBtb250aE5hbWVzID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIixcbiAgICAgIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJcbiAgICBdO1xuICAgIGNvbnN0IG1vbnRoID0gbW9udGhOYW1lc1tkYXRlLmdldE1vbnRoKCldO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGAke2RheX0gJHttb250aH0gJHt5ZWFyfWA7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2lnbnVwID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgc2lnbnVwIHByb2Nlc3MuLi5cIik7XG4gICAgXG4gICAgaWYgKHBhc3N3b3JkICE9PSByZXBlYXRQYXNzd29yZCkge1xuICAgICAgY29uc29sZS5sb2coXCJTaWdudXAgZmFpbGVkOiBQYXNzd29yZHMgZG8gbm90IG1hdGNoXCIpO1xuICAgICAgc2V0U2lnbnVwU3RhdHVzKFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWVtcGxveWVySWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2lnbnVwIGZhaWxlZDogRW1wbG95ZXIgSUQgaXMgcmVxdWlyZWRcIik7XG4gICAgICBzZXRTaWdudXBTdGF0dXMoXCJFbXBsb3llciBJRCBpcyByZXF1aXJlZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWdsb2JhbC5iYXNlNjRFbmNvZGVkQXV0aGVudGljYXRpb25LZXkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQXBwIGF1dGhlbnRpY2F0aW9uIHRva2VuIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBlbnN1cmUgdGhlIGFwcCBpcyBwcm9wZXJseSBhdXRoZW50aWNhdGVkLlwiKTtcbiAgICAgIHNldFNpZ251cFN0YXR1cyhcIkFwcCBhdXRoZW50aWNhdGlvbiBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgc2V0U2lnbnVwU3RhdHVzKFwiQ3JlYXRpbmcgYWNjb3VudC4uLlwiKTtcbiAgICBjb25zb2xlLmxvZyhcIkluaXRpYXRpbmcgYWNjb3VudCBjcmVhdGlvbi4uLlwiKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0RGF0ZSh0b2RheSk7XG4gICAgICBjb25zb2xlLmxvZyhgRm9ybWF0dGVkIGRhdGUgZm9yIEFQSSBjYWxsczogJHtmb3JtYXR0ZWREYXRlfWApO1xuXG4gICAgICAvLyBGaXJzdCBBUEkgY2FsbCB0byBjcmVhdGUgYSBjbGllbnRcbiAgICAgIGNvbnN0IGNsaWVudFJlcXVlc3RCb2R5ID0ge1xuICAgICAgICBmaXJzdG5hbWUsXG4gICAgICAgIGxhc3RuYW1lLFxuICAgICAgICBlbWFpbEFkZHJlc3M6IGVtYWlsLFxuICAgICAgICBtb2JpbGVObyxcbiAgICAgICAgZGF0ZUZvcm1hdDogXCJkZCBNTU1NIHl5eXlcIixcbiAgICAgICAgbG9jYWxlOiBcImVuXCIsXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgYWN0aXZhdGlvbkRhdGU6IGZvcm1hdHRlZERhdGUsXG4gICAgICAgIG9mZmljZUlkOiBwYXJzZUludChlbXBsb3llcklkLCAxMCksXG4gICAgICAgIGxlZ2FsRm9ybUlkOiAxXG4gICAgICB9O1xuICAgICAgY29uc29sZS5sb2coXCJDbGllbnQgY3JlYXRpb24gcmVxdWVzdCBib2R5OlwiLCBKU09OLnN0cmluZ2lmeShjbGllbnRSZXF1ZXN0Qm9keSwgbnVsbCwgMikpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgY2xpZW50IGNyZWF0aW9uIHJlcXVlc3QuLi5cIik7XG4gICAgICBjb25zb2xlLmxvZyhcIlVzaW5nIEFwcCBBdXRoZW50aWNhdGlvbiBUb2tlbjpcIiwgZ2xvYmFsLmJhc2U2NEVuY29kZWRBdXRoZW50aWNhdGlvbktleSk7XG4gICAgICBjb25zdCBjbGllbnRSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9DT05GSUcuQkFTRV9VUkx9L2ZpbmVyYWN0LXByb3ZpZGVyL2FwaS92MS9jbGllbnRzYCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmFzaWMgJHtnbG9iYWwuYmFzZTY0RW5jb2RlZEF1dGhlbnRpY2F0aW9uS2V5fWAsXG4gICAgICAgICAgJ2ZpbmVyYWN0LXBsYXRmb3JtLXRlbmFudGlkJzogJ2RlZmF1bHQnXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNsaWVudFJlcXVlc3RCb2R5KVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNsaWVudERhdGEgPSBhd2FpdCBjbGllbnRSZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkNsaWVudCBjcmVhdGlvbiByZXNwb25zZTpcIiwgSlNPTi5zdHJpbmdpZnkoY2xpZW50RGF0YSwgbnVsbCwgMikpO1xuXG4gICAgICBpZiAoY2xpZW50RGF0YS5jbGllbnRJZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgQ2xpZW50IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LiBDbGllbnQgSUQ6ICR7Y2xpZW50RGF0YS5jbGllbnRJZH1gKTtcblxuICAgICAgICAvLyBTZWNvbmQgQVBJIGNhbGwgdG8gY3JlYXRlIGEgdXNlclxuICAgICAgICBjb25zdCB1c2VyUmVxdWVzdEJvZHkgPSB7XG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgZmlyc3RuYW1lLFxuICAgICAgICAgIGxhc3RuYW1lLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIG9mZmljZUlkOiBwYXJzZUludChlbXBsb3llcklkLCAxMCksXG4gICAgICAgICAgcGFzc3dvcmROZXZlckV4cGlyZXM6IHRydWUsXG4gICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgcmVwZWF0UGFzc3dvcmQsXG4gICAgICAgICAgaXNTZWxmU2VydmljZVVzZXI6IHRydWUsXG4gICAgICAgICAgY2xpZW50czogW2NsaWVudERhdGEuY2xpZW50SWRdLFxuICAgICAgICAgIHJvbGVzOiBbMSwgMl0sXG4gICAgICAgICAgc2VuZFBhc3N3b3JkVG9FbWFpbDogZmFsc2UsXG4gICAgICAgICAgc3RhZmZJZDogMVxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgY3JlYXRpb24gcmVxdWVzdCBib2R5OlwiLCBKU09OLnN0cmluZ2lmeSh1c2VyUmVxdWVzdEJvZHksIG51bGwsIDIpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgdXNlciBjcmVhdGlvbiByZXF1ZXN0Li4uXCIpO1xuICAgICAgICBjb25zdCB1c2VyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQ09ORklHLkJBU0VfVVJMfS9maW5lcmFjdC1wcm92aWRlci9hcGkvdjEvdXNlcnNgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJhc2ljICR7Z2xvYmFsLmJhc2U2NEVuY29kZWRBdXRoZW50aWNhdGlvbktleX1gLFxuICAgICAgICAgICAgJ2ZpbmVyYWN0LXBsYXRmb3JtLXRlbmFudGlkJzogJ2RlZmF1bHQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyUmVxdWVzdEJvZHkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgdXNlclJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGNyZWF0aW9uIHJlc3BvbnNlOlwiLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSwgbnVsbCwgMikpO1xuXG4gICAgICAgIGlmICh1c2VyRGF0YS5yZXNvdXJjZUlkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYFVzZXIgY3JlYXRlZCBzdWNjZXNzZnVsbHkuIFVzZXIgSUQ6ICR7dXNlckRhdGEucmVzb3VyY2VJZH1gKTtcblxuICAgICAgICAgIC8vIFRoaXJkIEFQSSBjYWxsIHRvIGNyZWF0ZSBhIHNhdmluZ3MgYWNjb3VudFxuICAgICAgICAgIGNvbnN0IHNhdmluZ3NBY2NvdW50UmVxdWVzdEJvZHkgPSB7XG4gICAgICAgICAgICBjbGllbnRJZDogY2xpZW50RGF0YS5jbGllbnRJZCxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQgTU1NTSB5eXl5XCIsXG4gICAgICAgICAgICBleHRlcm5hbElkOiBgJHtjbGllbnREYXRhLmNsaWVudElkfS0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgIGxvY2FsZTogXCJlblwiLFxuICAgICAgICAgICAgcHJvZHVjdElkOiAxLFxuICAgICAgICAgICAgc3VibWl0dGVkT25EYXRlOiBmb3JtYXREYXRlKG5ldyBEYXRlKCkpXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNhdmluZ3MgYWNjb3VudCBjcmVhdGlvbiByZXF1ZXN0IGJvZHk6XCIsIEpTT04uc3RyaW5naWZ5KHNhdmluZ3NBY2NvdW50UmVxdWVzdEJvZHksIG51bGwsIDIpKTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBzYXZpbmdzIGFjY291bnQgY3JlYXRpb24gcmVxdWVzdC4uLlwiKTtcbiAgICAgICAgICBjb25zdCBzYXZpbmdzQWNjb3VudFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0NPTkZJRy5CQVNFX1VSTH0vZmluZXJhY3QtcHJvdmlkZXIvYXBpL3YxL3NhdmluZ3NhY2NvdW50c2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCYXNpYyAke2dsb2JhbC5iYXNlNjRFbmNvZGVkQXV0aGVudGljYXRpb25LZXl9YCxcbiAgICAgICAgICAgICAgJ2ZpbmVyYWN0LXBsYXRmb3JtLXRlbmFudGlkJzogJ2RlZmF1bHQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc2F2aW5nc0FjY291bnRSZXF1ZXN0Qm9keSlcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHNhdmluZ3NBY2NvdW50RGF0YSA9IGF3YWl0IHNhdmluZ3NBY2NvdW50UmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2F2aW5ncyBhY2NvdW50IGNyZWF0aW9uIHJlc3BvbnNlOlwiLCBKU09OLnN0cmluZ2lmeShzYXZpbmdzQWNjb3VudERhdGEsIG51bGwsIDIpKTtcblxuICAgICAgICAgIGlmIChzYXZpbmdzQWNjb3VudERhdGEuc2F2aW5nc0lkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU2F2aW5ncyBhY2NvdW50IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LiBTYXZpbmdzIEFjY291bnQgSUQ6ICR7c2F2aW5nc0FjY291bnREYXRhLnNhdmluZ3NJZH1gKTtcblxuICAgICAgICAgICAgLy8gQXBwcm92ZSB0aGUgc2F2aW5ncyBhY2NvdW50XG4gICAgICAgICAgICBjb25zdCBhcHByb3ZlUmVxdWVzdEJvZHkgPSB7XG4gICAgICAgICAgICAgIGxvY2FsZTogXCJlblwiLFxuICAgICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkIE1NTU0geXl5eVwiLFxuICAgICAgICAgICAgICBhcHByb3ZlZE9uRGF0ZTogZm9ybWF0dGVkRGF0ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXBwcm92aW5nIHNhdmluZ3MgYWNjb3VudC4uLlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGFwcHJvdmVSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9DT05GSUcuQkFTRV9VUkx9L2ZpbmVyYWN0LXByb3ZpZGVyL2FwaS92MS9zYXZpbmdzYWNjb3VudHMvJHtzYXZpbmdzQWNjb3VudERhdGEuc2F2aW5nc0lkfT9jb21tYW5kPWFwcHJvdmVgLCB7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCYXNpYyAke2dsb2JhbC5iYXNlNjRFbmNvZGVkQXV0aGVudGljYXRpb25LZXl9YCxcbiAgICAgICAgICAgICAgICAnZmluZXJhY3QtcGxhdGZvcm0tdGVuYW50aWQnOiAnZGVmYXVsdCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYXBwcm92ZVJlcXVlc3RCb2R5KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFwcHJvdmVEYXRhID0gYXdhaXQgYXBwcm92ZVJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2F2aW5ncyBhY2NvdW50IGFwcHJvdmFsIHJlc3BvbnNlOlwiLCBKU09OLnN0cmluZ2lmeShhcHByb3ZlRGF0YSwgbnVsbCwgMikpO1xuXG4gICAgICAgICAgICBpZiAoYXBwcm92ZURhdGEuY2hhbmdlcyAmJiBhcHByb3ZlRGF0YS5jaGFuZ2VzLnN0YXR1cy5hcHByb3ZlZCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNhdmluZ3MgYWNjb3VudCBhcHByb3ZlZCBzdWNjZXNzZnVsbHkuXCIpO1xuXG4gICAgICAgICAgICAgIC8vIEFjdGl2YXRlIHRoZSBzYXZpbmdzIGFjY291bnRcbiAgICAgICAgICAgICAgY29uc3QgYWN0aXZhdGVSZXF1ZXN0Qm9keSA9IHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IFwiZW5cIixcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkIE1NTU0geXl5eVwiLFxuICAgICAgICAgICAgICAgIGFjdGl2YXRlZE9uRGF0ZTogZm9ybWF0dGVkRGF0ZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjdGl2YXRpbmcgc2F2aW5ncyBhY2NvdW50Li4uXCIpO1xuICAgICAgICAgICAgICBjb25zdCBhY3RpdmF0ZVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0NPTkZJRy5CQVNFX1VSTH0vZmluZXJhY3QtcHJvdmlkZXIvYXBpL3YxL3NhdmluZ3NhY2NvdW50cy8ke3NhdmluZ3NBY2NvdW50RGF0YS5zYXZpbmdzSWR9P2NvbW1hbmQ9YWN0aXZhdGVgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJhc2ljICR7Z2xvYmFsLmJhc2U2NEVuY29kZWRBdXRoZW50aWNhdGlvbktleX1gLFxuICAgICAgICAgICAgICAgICAgJ2ZpbmVyYWN0LXBsYXRmb3JtLXRlbmFudGlkJzogJ2RlZmF1bHQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShhY3RpdmF0ZVJlcXVlc3RCb2R5KVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjb25zdCBhY3RpdmF0ZURhdGEgPSBhd2FpdCBhY3RpdmF0ZVJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTYXZpbmdzIGFjY291bnQgYWN0aXZhdGlvbiByZXNwb25zZTpcIiwgSlNPTi5zdHJpbmdpZnkoYWN0aXZhdGVEYXRhLCBudWxsLCAyKSk7XG5cbiAgICAgICAgICAgICAgaWYgKGFjdGl2YXRlRGF0YS5jaGFuZ2VzICYmIGFjdGl2YXRlRGF0YS5jaGFuZ2VzLnN0YXR1cy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNhdmluZ3MgYWNjb3VudCBhY3RpdmF0ZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcbiAgICAgICAgICAgICAgICBzZXRTaWdudXBTdGF0dXMoXCJTaWdudXAgc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5hdmlnYXRpbmcgdG8gU2lnbnVwU3VjY2VzcyBzY3JlZW4uLi5cIik7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbi5uYXZpZ2F0ZShcIlNpZ251cFN1Y2Nlc3NcIiwgeyBcbiAgICAgICAgICAgICAgICAgIGNsaWVudElkOiBjbGllbnREYXRhLmNsaWVudElkLFxuICAgICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgIHNhdmluZ3NBY2NvdW50SWQ6IHNhdmluZ3NBY2NvdW50RGF0YS5zYXZpbmdzSWQsXG4gICAgICAgICAgICAgICAgICBhY2NvdW50QWN0aXZlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTYXZpbmdzIGFjY291bnQgYWN0aXZhdGlvbiBmYWlsZWQuXCIpO1xuICAgICAgICAgICAgICAgIHNldFNpZ251cFN0YXR1cyhcIlNhdmluZ3MgYWNjb3VudCBhY3RpdmF0aW9uIGZhaWxlZC5cIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2F2aW5ncyBhY2NvdW50IGFwcHJvdmFsIGZhaWxlZC5cIik7XG4gICAgICAgICAgICAgIHNldFNpZ251cFN0YXR1cyhcIlNhdmluZ3MgYWNjb3VudCBhcHByb3ZhbCBmYWlsZWQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNhdmluZ3MgYWNjb3VudCBjcmVhdGlvbiBmYWlsZWQ6XCIsIHNhdmluZ3NBY2NvdW50RGF0YS5lcnJvcnMgPyBzYXZpbmdzQWNjb3VudERhdGEuZXJyb3JzWzBdLmRlZmF1bHRVc2VyTWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiKTtcbiAgICAgICAgICAgIHNldFNpZ251cFN0YXR1cyhcIlNhdmluZ3MgYWNjb3VudCBjcmVhdGlvbiBmYWlsZWQ6IFwiICsgKHNhdmluZ3NBY2NvdW50RGF0YS5lcnJvcnMgPyBzYXZpbmdzQWNjb3VudERhdGEuZXJyb3JzWzBdLmRlZmF1bHRVc2VyTWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBjcmVhdGlvbiBmYWlsZWQ6XCIsIHVzZXJEYXRhLmVycm9ycyA/IHVzZXJEYXRhLmVycm9yc1swXS5kZWZhdWx0VXNlck1lc3NhZ2UgOiBcIlVua25vd24gZXJyb3JcIik7XG4gICAgICAgICAgc2V0U2lnbnVwU3RhdHVzKFwiVXNlciBjcmVhdGlvbiBmYWlsZWQ6IFwiICsgKHVzZXJEYXRhLmVycm9ycyA/IHVzZXJEYXRhLmVycm9yc1swXS5kZWZhdWx0VXNlck1lc3NhZ2UgOiBcIlVua25vd24gZXJyb3JcIikpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNsaWVudCBjcmVhdGlvbiBmYWlsZWQ6XCIsIGNsaWVudERhdGEuZXJyb3JzID8gY2xpZW50RGF0YS5lcnJvcnNbMF0uZGVmYXVsdFVzZXJNZXNzYWdlIDogXCJVbmtub3duIGVycm9yXCIpO1xuICAgICAgICBzZXRTaWdudXBTdGF0dXMoXCJDbGllbnQgY3JlYXRpb24gZmFpbGVkOiBcIiArIChjbGllbnREYXRhLmVycm9ycyA/IGNsaWVudERhdGEuZXJyb3JzWzBdLmRlZmF1bHRVc2VyTWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiKSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlNpZ251cCBwcm9jZXNzIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICBzZXRTaWdudXBTdGF0dXMoXCJTaWdudXAgZmFpbGVkOiBcIiArIChlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFN0cmluZyhlcnJvcikpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2lnbnVwIHByb2Nlc3MgY29tcGxldGVkLlwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2Nyb2xsVmlldz5cbiAgICAgIDxmbGV4Ym94TGF5b3V0IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPHN0YWNrTGF5b3V0IHN0eWxlPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtM3hsIG1iLTggZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIiB0ZXh0PVwiU2lnbiBVcFwiIC8+XG4gICAgICAgICAgPHRleHRGaWVsZFxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgIGhpbnQ9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgIHRleHQ9e2ZpcnN0bmFtZX1cbiAgICAgICAgICAgIG9uVGV4dENoYW5nZT17KGFyZ3MpID0+IHNldEZpcnN0bmFtZShhcmdzLm9iamVjdC50ZXh0KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0ZXh0RmllbGRcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICBoaW50PVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgIHRleHQ9e2xhc3RuYW1lfVxuICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXsoYXJncykgPT4gc2V0TGFzdG5hbWUoYXJncy5vYmplY3QudGV4dCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dEZpZWxkXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgaGludD1cIkVtYWlsXCJcbiAgICAgICAgICAgIHRleHQ9e2VtYWlsfVxuICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXsoYXJncykgPT4gc2V0RW1haWwoYXJncy5vYmplY3QudGV4dCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dEZpZWxkXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgaGludD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgdGV4dD17bW9iaWxlTm99XG4gICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJwaG9uZVwiXG4gICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhhcmdzKSA9PiBzZXRNb2JpbGVObyhhcmdzLm9iamVjdC50ZXh0KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0ZXh0RmllbGRcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICBoaW50PVwiRW1wbG95ZXIgSURcIlxuICAgICAgICAgICAgdGV4dD17ZW1wbG95ZXJJZH1cbiAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhhcmdzKSA9PiBzZXRFbXBsb3llcklkKGFyZ3Mub2JqZWN0LnRleHQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHRleHRGaWVsZFxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgIGhpbnQ9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICB0ZXh0PXt1c2VybmFtZX1cbiAgICAgICAgICAgIG9uVGV4dENoYW5nZT17KGFyZ3MpID0+IHNldFVzZXJuYW1lKGFyZ3Mub2JqZWN0LnRleHQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHRleHRGaWVsZFxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgIGhpbnQ9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICB0ZXh0PXtwYXNzd29yZH1cbiAgICAgICAgICAgIHNlY3VyZT17dHJ1ZX1cbiAgICAgICAgICAgIG9uVGV4dENoYW5nZT17KGFyZ3MpID0+IHNldFBhc3N3b3JkKGFyZ3Mub2JqZWN0LnRleHQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHRleHRGaWVsZFxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgIGhpbnQ9XCJSZXBlYXQgUGFzc3dvcmRcIlxuICAgICAgICAgICAgdGV4dD17cmVwZWF0UGFzc3dvcmR9XG4gICAgICAgICAgICBzZWN1cmU9e3RydWV9XG4gICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhhcmdzKSA9PiBzZXRSZXBlYXRQYXNzd29yZChhcmdzLm9iamVjdC50ZXh0KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgICAgdGV4dD17aXNMb2FkaW5nID8gXCJDcmVhdGluZyBBY2NvdW50Li4uXCIgOiBcIlNpZ24gVXBcIn1cbiAgICAgICAgICAgIG9uVGFwPXtoYW5kbGVTaWdudXB9XG4gICAgICAgICAgICBpc0VuYWJsZWQ9eyFpc0xvYWRpbmd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLmJhY2tCdXR0b259XG4gICAgICAgICAgICB0ZXh0PVwiQmFjayB0byBMb2dpblwiXG4gICAgICAgICAgICBvblRhcD17KCkgPT4gbmF2aWdhdGlvbi5uYXZpZ2F0ZShcIkxvZ2luXCIpfVxuICAgICAgICAgICAgaXNFbmFibGVkPXshaXNMb2FkaW5nfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBzdHlsZT17W1xuICAgICAgICAgICAgICBzdHlsZXMuc3RhdHVzTGFiZWwsXG4gICAgICAgICAgICAgIHsgY29sb3I6IHNpZ251cFN0YXR1cy5pbmNsdWRlcyhcInN1Y2Nlc3NmdWxcIikgPyBcIiM1MEUzQzJcIiA6IFwiI0ZGNzA0M1wiIH1cbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB0ZXh0PXtzaWdudXBTdGF0dXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdGFja0xheW91dD5cbiAgICAgIDwvZmxleGJveExheW91dD5cbiAgICA8L3Njcm9sbFZpZXc+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgY29udGFpbmVyOiB7XG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNEE5MEUyXCJcbiAgfSxcbiAgY29udGVudDoge1xuICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIlxuICB9LFxuICBpbnB1dDoge1xuICAgIGZvbnRTaXplOiAxOCxcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgbWFyZ2luQm90dG9tOiAxNSxcbiAgICBwYWRkaW5nOiAxMFxuICB9LFxuICBidXR0b246IHtcbiAgICBmb250U2l6ZTogMTgsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjlCNkY2XCIsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIHBhZGRpbmc6IDEwLFxuICAgIG1hcmdpbkJvdHRvbTogMTVcbiAgfSxcbiAgYmFja0J1dHRvbjoge1xuICAgIGZvbnRTaXplOiAxOCxcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM1MEUzQzJcIixcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgcGFkZGluZzogMTAsXG4gICAgbWFyZ2luQm90dG9tOiAxNVxuICB9LFxuICBzdGF0dXNMYWJlbDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiXG4gIH1cbn0pO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdFwiO1xuaW1wb3J0IHsgRnJhbWVOYXZpZ2F0aW9uUHJvcCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQtbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgTWFpblN0YWNrUGFyYW1MaXN0IH0gZnJvbSBcIi4uL05hdmlnYXRpb25QYXJhbUxpc3RcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0LCBMYWJlbCwgQnV0dG9uIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQtY29yZVwiO1xuXG50eXBlIFNpZ251cFN1Y2Nlc3NTY3JlZW5Qcm9wcyA9IHtcbiAgbmF2aWdhdGlvbjogRnJhbWVOYXZpZ2F0aW9uUHJvcDxNYWluU3RhY2tQYXJhbUxpc3QsIFwiU2lnbnVwU3VjY2Vzc1wiPixcbiAgcm91dGU6IHsgcGFyYW1zOiB7IGNsaWVudElkOiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIHNhdmluZ3NBY2NvdW50SWQ6IG51bWJlciwgYWNjb3VudEFjdGl2ZTogYm9vbGVhbiB9IH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWdudXBTdWNjZXNzU2NyZWVuKHsgbmF2aWdhdGlvbiwgcm91dGUgfTogU2lnbnVwU3VjY2Vzc1NjcmVlblByb3BzKSB7XG4gIGNvbnN0IHsgY2xpZW50SWQsIHVzZXJuYW1lLCBwYXNzd29yZCwgc2F2aW5nc0FjY291bnRJZCwgYWNjb3VudEFjdGl2ZSB9ID0gcm91dGUucGFyYW1zO1xuXG4gIHJldHVybiAoXG4gICAgPHN0YWNrTGF5b3V0IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi04IGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIgdGV4dD1cIlNpZ251cCBTdWNjZXNzZnVsXCIgLz5cbiAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLmluZm9MYWJlbH0gdGV4dD17YENsaWVudCBJRDogJHtjbGllbnRJZH1gfSAvPlxuICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMuaW5mb0xhYmVsfSB0ZXh0PXtgVXNlcm5hbWU6ICR7dXNlcm5hbWV9YH0gLz5cbiAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLmluZm9MYWJlbH0gdGV4dD17YFBhc3N3b3JkOiAke3Bhc3N3b3JkfWB9IC8+XG4gICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5pbmZvTGFiZWx9IHRleHQ9e2BTYXZpbmdzIEFjY291bnQgSUQ6ICR7c2F2aW5nc0FjY291bnRJZH1gfSAvPlxuICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMuaW5mb0xhYmVsfSB0ZXh0PXtgQWNjb3VudCBBY3RpdmU6ICR7YWNjb3VudEFjdGl2ZSA/IFwiWWVzXCIgOiBcIk5vXCJ9YH0gLz5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9e3N0eWxlcy5idXR0b259XG4gICAgICAgIHRleHQ9XCJHbyB0byBMb2dpblwiXG4gICAgICAgIG9uVGFwPXsoKSA9PiBuYXZpZ2F0aW9uLm5hdmlnYXRlKFwiTG9naW5cIil9XG4gICAgICAvPlxuICAgIDwvc3RhY2tMYXlvdXQ+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgY29udGFpbmVyOiB7XG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM0QTkwRTJcIixcbiAgfSxcbiAgaW5mb0xhYmVsOiB7XG4gICAgZm9udFNpemU6IDE4LFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBtYXJnaW5Cb3R0b206IDE1LFxuICB9LFxuICBidXR0b246IHtcbiAgICBmb250U2l6ZTogMTgsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjlCNkY2XCIsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIHBhZGRpbmc6IDEwLFxuICAgIG1hcmdpblRvcDogMjAsXG4gIH0sXG59KTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHRcIjtcbmltcG9ydCB7IEZyYW1lTmF2aWdhdGlvblByb3AgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0LW5hdmlnYXRpb25cIjtcbmltcG9ydCB7IE1haW5TdGFja1BhcmFtTGlzdCB9IGZyb20gXCIuLi9OYXZpZ2F0aW9uUGFyYW1MaXN0XCI7XG5pbXBvcnQgeyBTY3JvbGxWaWV3LCBTdGFja0xheW91dCwgTGFiZWwsIEdyaWRMYXlvdXQsIFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuXG50eXBlIFdpdGhkcmF3U2NyZWVuUHJvcHMgPSB7XG4gIG5hdmlnYXRpb246IEZyYW1lTmF2aWdhdGlvblByb3A8TWFpblN0YWNrUGFyYW1MaXN0LCBcIldpdGhkcmF3XCI+O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFdpdGhkcmF3U2NyZWVuKHsgbmF2aWdhdGlvbiB9OiBXaXRoZHJhd1NjcmVlblByb3BzKSB7XG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Rlc3RpbmF0aW9uVHlwZSwgc2V0RGVzdGluYXRpb25UeXBlXSA9IFJlYWN0LnVzZVN0YXRlPFwibW9iaWxlXCIgfCBcImJhbmtcIj4oXCJtb2JpbGVcIik7XG4gIGNvbnN0IFthY2NvdW50TnVtYmVyLCBzZXRBY2NvdW50TnVtYmVyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYmFua05hbWUsIHNldEJhbmtOYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYWNjb3VudE5hbWUsIHNldEFjY291bnROYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYnJhbmNoQ29kZSwgc2V0QnJhbmNoQ29kZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3ZhbGlkYXRpb25NZXNzYWdlLCBzZXRWYWxpZGF0aW9uTWVzc2FnZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCB2YWxpZGF0ZUFtb3VudCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbnVtVmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICBpZiAoaXNOYU4obnVtVmFsdWUpKSB7XG4gICAgICBzZXRWYWxpZGF0aW9uTWVzc2FnZShcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGFtb3VudFwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG51bVZhbHVlIDwgMTAwKSB7XG4gICAgICBzZXRWYWxpZGF0aW9uTWVzc2FnZShcIk1pbmltdW0gd2l0aGRyYXdhbCBhbW91bnQgaXMgS0VTIDEwMFwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG51bVZhbHVlID4gMzAwMDAwKSB7XG4gICAgICBzZXRWYWxpZGF0aW9uTWVzc2FnZShcIk1heGltdW0gd2l0aGRyYXdhbCBhbW91bnQgaXMgS0VTIDMwMCwwMDBcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKFwiXCIpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRlQmFua0RldGFpbHMgPSAoKSA9PiB7XG4gICAgaWYgKGRlc3RpbmF0aW9uVHlwZSA9PT0gXCJiYW5rXCIpIHtcbiAgICAgIGlmICghYmFua05hbWUpIHtcbiAgICAgICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UoXCJQbGVhc2UgZW50ZXIgYmFuayBuYW1lXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoIWFjY291bnROYW1lKSB7XG4gICAgICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKFwiUGxlYXNlIGVudGVyIGFjY291bnQgbmFtZVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCFhY2NvdW50TnVtYmVyIHx8IGFjY291bnROdW1iZXIubGVuZ3RoIDwgMTApIHtcbiAgICAgICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBhY2NvdW50IG51bWJlclwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCFicmFuY2hDb2RlKSB7XG4gICAgICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKFwiUGxlYXNlIGVudGVyIGJyYW5jaCBjb2RlXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghYWNjb3VudE51bWJlciB8fCBhY2NvdW50TnVtYmVyLmxlbmd0aCAhPT0gMTApIHtcbiAgICAgICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBtb2JpbGUgbnVtYmVyXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm0gPSAoKSA9PiB7XG4gICAgaWYgKCF2YWxpZGF0ZUFtb3VudChhbW91bnQpKSByZXR1cm47XG4gICAgaWYgKCF2YWxpZGF0ZUJhbmtEZXRhaWxzKCkpIHJldHVybjtcblxuICAgIG5hdmlnYXRpb24ubmF2aWdhdGUoXCJXaXRoZHJhd1N1Y2Nlc3NcIiwge1xuICAgICAgYW1vdW50OiBgS0VTICR7YW1vdW50fWAsXG4gICAgICBkZXN0aW5hdGlvbjogZGVzdGluYXRpb25UeXBlID09PSBcIm1vYmlsZVwiID8gXCJNb2JpbGUgTW9uZXlcIiA6IFwiQmFuayBBY2NvdW50XCIsXG4gICAgICBhY2NvdW50TnVtYmVyOiBkZXN0aW5hdGlvblR5cGUgPT09IFwibW9iaWxlXCIgPyBcbiAgICAgICAgYWNjb3VudE51bWJlciA6IFxuICAgICAgICBgJHtiYW5rTmFtZX0gLSAke2FjY291bnROdW1iZXJ9YCxcbiAgICAgIHJlZmVyZW5jZTogYFdEJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSkudG9VcHBlckNhc2UoKX1gLFxuICAgICAgZXN0aW1hdGVkVGltZTogZGVzdGluYXRpb25UeXBlID09PSBcIm1vYmlsZVwiID8gXCJJbnN0YW50XCIgOiBcIjEtMiBCdXNpbmVzcyBEYXlzXCIsXG4gICAgICAuLi4oZGVzdGluYXRpb25UeXBlID09PSBcImJhbmtcIiAmJiB7XG4gICAgICAgIGJhbmtOYW1lLFxuICAgICAgICBhY2NvdW50TmFtZSxcbiAgICAgICAgYnJhbmNoQ29kZSxcbiAgICAgIH0pXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Z3JpZExheW91dCByb3dzPVwiYXV0bywgKiwgYXV0b1wiPlxuICAgICAgPGdyaWRMYXlvdXQgcm93PXswfSBjb2x1bW5zPVwiYXV0bywgKlwiIHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGJ1dHRvbiBjb2w9ezB9IHRleHQ9XCLihpBcIiBvblRhcD17KCkgPT4gbmF2aWdhdGlvbi5nb0JhY2soKX0gc3R5bGU9e3N0eWxlcy5iYWNrQnV0dG9ufSAvPlxuICAgICAgICA8bGFiZWwgY29sPXsxfSB0ZXh0PVwiV2l0aGRyYXcgRnVuZHNcIiBzdHlsZT17c3R5bGVzLmhlYWRlclRleHR9IC8+XG4gICAgICA8L2dyaWRMYXlvdXQ+XG5cbiAgICAgIDxzY3JvbGxWaWV3IHJvdz17MX0+XG4gICAgICAgIDxzdGFja0xheW91dCBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgey8qIEFtb3VudCBJbnB1dCAqL31cbiAgICAgICAgICA8Z3JpZExheW91dCBzdHlsZT17c3R5bGVzLmNhcmR9IHJvd3M9XCJhdXRvLCBhdXRvLCBhdXRvXCIgY29sdW1ucz1cIipcIj5cbiAgICAgICAgICAgIDxsYWJlbCByb3c9ezB9IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRpdGxlfSB0ZXh0PVwiQW1vdW50IHRvIFdpdGhkcmF3XCIgLz5cbiAgICAgICAgICAgIDx0ZXh0RmllbGQgXG4gICAgICAgICAgICAgIHJvdz17MX1cbiAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH0gXG4gICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cIm51bWJlclwiIFxuICAgICAgICAgICAgICBoaW50PVwiRW50ZXIgYW1vdW50XCIgXG4gICAgICAgICAgICAgIHRleHQ9e2Ftb3VudH1cbiAgICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXsoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Ftb3VudCA9IGFyZ3Mub2JqZWN0LnRleHQ7XG4gICAgICAgICAgICAgICAgc2V0QW1vdW50KG5ld0Ftb3VudCk7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGVBbW91bnQobmV3QW1vdW50KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgPyBcbiAgICAgICAgICAgICAgPGxhYmVsIHJvdz17Mn0gc3R5bGU9e3N0eWxlcy52YWxpZGF0aW9uTWVzc2FnZX0gdGV4dD17dmFsaWRhdGlvbk1lc3NhZ2V9IC8+IFxuICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgPC9ncmlkTGF5b3V0PlxuXG4gICAgICAgICAgey8qIERlc3RpbmF0aW9uIFR5cGUgU2VsZWN0aW9uICovfVxuICAgICAgICAgIDxncmlkTGF5b3V0IHN0eWxlPXtzdHlsZXMuY2FyZH0gcm93cz1cImF1dG8sIGF1dG9cIiBjb2x1bW5zPVwiKlwiPlxuICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGl0bGV9IHRleHQ9XCJXaXRoZHJhdyBUb1wiIC8+XG4gICAgICAgICAgICA8Z3JpZExheW91dCByb3c9ezF9IGNvbHVtbnM9XCIqLCAqXCIgc3R5bGU9e3N0eWxlcy5kZXN0aW5hdGlvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgY29sPXswfSBcbiAgICAgICAgICAgICAgICBzdHlsZT17W3N0eWxlcy5kZXN0aW5hdGlvbkJ1dHRvbiwgZGVzdGluYXRpb25UeXBlID09PSBcIm1vYmlsZVwiICYmIHN0eWxlcy5hY3RpdmVEZXN0aW5hdGlvbl19IFxuICAgICAgICAgICAgICAgIHRleHQ9XCJNb2JpbGUgTW9uZXlcIiBcbiAgICAgICAgICAgICAgICBvblRhcD17KCkgPT4gc2V0RGVzdGluYXRpb25UeXBlKFwibW9iaWxlXCIpfSBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICBjb2w9ezF9IFxuICAgICAgICAgICAgICAgIHN0eWxlPXtbc3R5bGVzLmRlc3RpbmF0aW9uQnV0dG9uLCBkZXN0aW5hdGlvblR5cGUgPT09IFwiYmFua1wiICYmIHN0eWxlcy5hY3RpdmVEZXN0aW5hdGlvbl19IFxuICAgICAgICAgICAgICAgIHRleHQ9XCJCYW5rIEFjY291bnRcIiBcbiAgICAgICAgICAgICAgICBvblRhcD17KCkgPT4gc2V0RGVzdGluYXRpb25UeXBlKFwiYmFua1wiKX0gXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2dyaWRMYXlvdXQ+XG4gICAgICAgICAgPC9ncmlkTGF5b3V0PlxuXG4gICAgICAgICAgey8qIEFjY291bnQgRGV0YWlscyBJbnB1dCAqL31cbiAgICAgICAgICB7ZGVzdGluYXRpb25UeXBlID09PSBcIm1vYmlsZVwiID8gKFxuICAgICAgICAgICAgPGdyaWRMYXlvdXQgc3R5bGU9e3N0eWxlcy5jYXJkfSByb3dzPVwiYXV0bywgYXV0b1wiIGNvbHVtbnM9XCIqXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCByb3c9ezB9IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRpdGxlfSB0ZXh0PVwiTW9iaWxlIE51bWJlclwiIC8+XG4gICAgICAgICAgICAgIDx0ZXh0RmllbGQgXG4gICAgICAgICAgICAgICAgcm93PXsxfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXR9IFxuICAgICAgICAgICAgICAgIGhpbnQ9XCJFbnRlciBtb2JpbGUgbnVtYmVyXCJcbiAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJwaG9uZVwiXG4gICAgICAgICAgICAgICAgdGV4dD17YWNjb3VudE51bWJlcn1cbiAgICAgICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhhcmdzKSA9PiBzZXRBY2NvdW50TnVtYmVyKGFyZ3Mub2JqZWN0LnRleHQpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ncmlkTGF5b3V0PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Z3JpZExheW91dCBzdHlsZT17c3R5bGVzLmNhcmR9IHJvd3M9XCJhdXRvLCBhdXRvLCBhdXRvLCBhdXRvLCBhdXRvXCIgY29sdW1ucz1cIipcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIHJvdz17MH0gc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGl0bGV9IHRleHQ9XCJCYW5rIERldGFpbHNcIiAvPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPHRleHRGaWVsZCBcbiAgICAgICAgICAgICAgICByb3c9ezF9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH0gXG4gICAgICAgICAgICAgICAgaGludD1cIkJhbmsgTmFtZVwiXG4gICAgICAgICAgICAgICAgdGV4dD17YmFua05hbWV9XG4gICAgICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXsoYXJncykgPT4gc2V0QmFua05hbWUoYXJncy5vYmplY3QudGV4dCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8dGV4dEZpZWxkIFxuICAgICAgICAgICAgICAgIHJvdz17Mn1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fSBcbiAgICAgICAgICAgICAgICBoaW50PVwiQWNjb3VudCBOYW1lXCJcbiAgICAgICAgICAgICAgICB0ZXh0PXthY2NvdW50TmFtZX1cbiAgICAgICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhhcmdzKSA9PiBzZXRBY2NvdW50TmFtZShhcmdzLm9iamVjdC50ZXh0KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDx0ZXh0RmllbGQgXG4gICAgICAgICAgICAgICAgcm93PXszfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXR9IFxuICAgICAgICAgICAgICAgIGhpbnQ9XCJBY2NvdW50IE51bWJlclwiXG4gICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB0ZXh0PXthY2NvdW50TnVtYmVyfVxuICAgICAgICAgICAgICAgIG9uVGV4dENoYW5nZT17KGFyZ3MpID0+IHNldEFjY291bnROdW1iZXIoYXJncy5vYmplY3QudGV4dCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8dGV4dEZpZWxkIFxuICAgICAgICAgICAgICAgIHJvdz17NH1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fSBcbiAgICAgICAgICAgICAgICBoaW50PVwiQnJhbmNoIENvZGVcIlxuICAgICAgICAgICAgICAgIHRleHQ9e2JyYW5jaENvZGV9XG4gICAgICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXsoYXJncykgPT4gc2V0QnJhbmNoQ29kZShhcmdzLm9iamVjdC50ZXh0KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlID8gXG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy52YWxpZGF0aW9uTWVzc2FnZX0gdGV4dD17dmFsaWRhdGlvbk1lc3NhZ2V9IC8+IFxuICAgICAgICAgICAgOiBudWxsfVxuXG4gICAgICAgICAgey8qIFN1bW1hcnkgKi99XG4gICAgICAgICAgPGdyaWRMYXlvdXQgc3R5bGU9e3N0eWxlcy5jYXJkfSByb3dzPVwiYXV0bywgYXV0b1wiIGNvbHVtbnM9XCIqXCI+XG4gICAgICAgICAgICA8bGFiZWwgcm93PXswfSBzdHlsZT17c3R5bGVzLnNlY3Rpb25UaXRsZX0gdGV4dD1cIlN1bW1hcnlcIiAvPlxuICAgICAgICAgICAgPHN0YWNrTGF5b3V0IHJvdz17MX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLnN1bW1hcnlUZXh0fSB0ZXh0PXtgQW1vdW50OiBLRVMgJHthbW91bnQgfHwgJzAnfWB9IC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLnN1bW1hcnlUZXh0fSB0ZXh0PXtgRGVzdGluYXRpb246ICR7ZGVzdGluYXRpb25UeXBlID09PSBcIm1vYmlsZVwiID8gXCJNb2JpbGUgTW9uZXlcIiA6IFwiQmFuayBBY2NvdW50XCJ9YH0gLz5cbiAgICAgICAgICAgICAge2Rlc3RpbmF0aW9uVHlwZSA9PT0gXCJtb2JpbGVcIiA/IChcbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdW1tYXJ5VGV4dH0gdGV4dD17YE1vYmlsZSBOdW1iZXI6ICR7YWNjb3VudE51bWJlciB8fCAnTm90IHNldCd9YH0gLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMuc3VtbWFyeVRleHR9IHRleHQ9e2BCYW5rOiAke2JhbmtOYW1lIHx8ICdOb3Qgc2V0J31gfSAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMuc3VtbWFyeVRleHR9IHRleHQ9e2BBY2NvdW50IE5hbWU6ICR7YWNjb3VudE5hbWUgfHwgJ05vdCBzZXQnfWB9IC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdW1tYXJ5VGV4dH0gdGV4dD17YEFjY291bnQgTnVtYmVyOiAke2FjY291bnROdW1iZXIgfHwgJ05vdCBzZXQnfWB9IC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdW1tYXJ5VGV4dH0gdGV4dD17YEJyYW5jaCBDb2RlOiAke2JyYW5jaENvZGUgfHwgJ05vdCBzZXQnfWB9IC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3N0YWNrTGF5b3V0PlxuICAgICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgICAgPC9zdGFja0xheW91dD5cbiAgICAgIDwvc2Nyb2xsVmlldz5cblxuICAgICAgPGJ1dHRvbiByb3c9ezJ9IHN0eWxlPXtzdHlsZXMuY29uZmlybUJ1dHRvbn0gdGV4dD1cIkNvbmZpcm0gV2l0aGRyYXdhbFwiIG9uVGFwPXtoYW5kbGVDb25maXJtfSAvPlxuICAgIDwvZ3JpZExheW91dD5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBoZWFkZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIHBhZGRpbmc6IDE2LFxuICAgIGJvcmRlckJvdHRvbVdpZHRoOiAxLFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBcIiNFMEUwRTBcIixcbiAgfSxcbiAgYmFja0J1dHRvbjoge1xuICAgIGZvbnRTaXplOiAyNCxcbiAgICBjb2xvcjogXCIjNEE5MEUyXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgd2lkdGg6IDQwLFxuICB9LFxuICBoZWFkZXJUZXh0OiB7XG4gICAgZm9udFNpemU6IDIwLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOiBcIiMyMTIxMjFcIixcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgcGFkZGluZzogMTYsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGNUY1RjVcIixcbiAgfSxcbiAgY2FyZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICBwYWRkaW5nOiAxNSxcbiAgICBtYXJnaW5Cb3R0b206IDE1LFxuICAgIGVsZXZhdGlvbjogMyxcbiAgfSxcbiAgc2VjdGlvblRpdGxlOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOiBcIiM0QTkwRTJcIixcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICB9LFxuICBpbnB1dDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGNUY1RjVcIixcbiAgICBwYWRkaW5nOiAxMCxcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgbWFyZ2luQm90dG9tOiAxMCwgLy8gQWRkZWQgbWFyZ2luIGZvciBiYW5rIGRldGFpbHMgaW5wdXRzXG4gIH0sXG4gIGRlc3RpbmF0aW9uQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luQm90dG9tOiA4LFxuICB9LFxuICBkZXN0aW5hdGlvbkJ1dHRvbjoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0UwRTBFMFwiLFxuICAgIGNvbG9yOiBcIiM3NTc1NzVcIixcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgbWFyZ2luOiA0LFxuICAgIHBhZGRpbmc6IDEwLFxuICB9LFxuICBhY3RpdmVEZXN0aW5hdGlvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNEE5MEUyXCIsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICB9LFxuICB2YWxpZGF0aW9uTWVzc2FnZToge1xuICAgIGZvbnRTaXplOiAxMixcbiAgICBjb2xvcjogXCIjRUY1MzUwXCIsXG4gICAgbWFyZ2luVG9wOiA0LFxuICB9LFxuICBzdW1tYXJ5VGV4dDoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG4gICAgbWFyZ2luQm90dG9tOiA0LFxuICB9LFxuICBjb25maXJtQnV0dG9uOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRjcwNDNcIixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIHBhZGRpbmc6IDE2LFxuICAgIG1hcmdpbjogMTYsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICB9LFxufSk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0XCI7XG5pbXBvcnQgeyBGcmFtZU5hdmlnYXRpb25Qcm9wIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC1uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBNYWluU3RhY2tQYXJhbUxpc3QgfSBmcm9tIFwiLi4vTmF2aWdhdGlvblBhcmFtTGlzdFwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQsIExhYmVsLCBCdXR0b24gfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCI7XG5cbnR5cGUgV2l0aGRyYXdTdWNjZXNzU2NyZWVuUHJvcHMgPSB7XG4gIG5hdmlnYXRpb246IEZyYW1lTmF2aWdhdGlvblByb3A8TWFpblN0YWNrUGFyYW1MaXN0LCBcIldpdGhkcmF3U3VjY2Vzc1wiPjtcbiAgcm91dGU6IHsgXG4gICAgcGFyYW1zOiB7IFxuICAgICAgYW1vdW50OiBzdHJpbmc7XG4gICAgICBkZXN0aW5hdGlvbjogc3RyaW5nO1xuICAgICAgYWNjb3VudE51bWJlcjogc3RyaW5nO1xuICAgICAgcmVmZXJlbmNlOiBzdHJpbmc7XG4gICAgICBlc3RpbWF0ZWRUaW1lOiBzdHJpbmc7XG4gICAgfSBcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBXaXRoZHJhd1N1Y2Nlc3NTY3JlZW4oeyBuYXZpZ2F0aW9uLCByb3V0ZSB9OiBXaXRoZHJhd1N1Y2Nlc3NTY3JlZW5Qcm9wcykge1xuICBjb25zdCB7IGFtb3VudCwgZGVzdGluYXRpb24sIGFjY291bnROdW1iZXIsIHJlZmVyZW5jZSwgZXN0aW1hdGVkVGltZSB9ID0gcm91dGUucGFyYW1zO1xuXG4gIHJldHVybiAoXG4gICAgPHN0YWNrTGF5b3V0IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLnN1Y2Nlc3NJY29ufSB0ZXh0PVwi4pyTXCIgLz5cbiAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLnRpdGxlfSB0ZXh0PVwiV2l0aGRyYXdhbCBJbml0aWF0ZWQhXCIgLz5cbiAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLm1lc3NhZ2V9IHRleHQ9XCJZb3VyIHdpdGhkcmF3YWwgcmVxdWVzdCBoYXMgYmVlbiBwcm9jZXNzZWQuXCIgLz5cbiAgICAgIFxuICAgICAgPHN0YWNrTGF5b3V0IHN0eWxlPXtzdHlsZXMuc3VtbWFyeUNhcmR9PlxuICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdW1tYXJ5VGl0bGV9IHRleHQ9XCJXaXRoZHJhd2FsIERldGFpbHNcIiAvPlxuICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdW1tYXJ5VGV4dH0gdGV4dD17YEFtb3VudDogJHthbW91bnR9YH0gLz5cbiAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMuc3VtbWFyeVRleHR9IHRleHQ9e2BEZXN0aW5hdGlvbjogJHtkZXN0aW5hdGlvbn1gfSAvPlxuICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdW1tYXJ5VGV4dH0gdGV4dD17YEFjY291bnQ6ICR7YWNjb3VudE51bWJlcn1gfSAvPlxuICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5zdW1tYXJ5VGV4dH0gdGV4dD17YFJlZmVyZW5jZTogJHtyZWZlcmVuY2V9YH0gLz5cbiAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMuc3VtbWFyeVRleHR9IHRleHQ9e2BFc3RpbWF0ZWQgVGltZTogJHtlc3RpbWF0ZWRUaW1lfWB9IC8+XG4gICAgICA8L3N0YWNrTGF5b3V0PlxuXG4gICAgICA8YnV0dG9uIFxuICAgICAgICBzdHlsZT17c3R5bGVzLmJ1dHRvbn0gXG4gICAgICAgIHRleHQ9XCJSZXR1cm4gdG8gRGFzaGJvYXJkXCIgXG4gICAgICAgIG9uVGFwPXsoKSA9PiBuYXZpZ2F0aW9uLm5hdmlnYXRlKFwiRGFzaGJvYXJkXCIpfSBcbiAgICAgIC8+XG4gICAgPC9zdGFja0xheW91dD5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBjb250YWluZXI6IHtcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjVGNUY1XCIsXG4gICAgcGFkZGluZzogMjAsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbiAgc3VjY2Vzc0ljb246IHtcbiAgICBmb250U2l6ZTogNzIsXG4gICAgY29sb3I6IFwiIzY2QkI2QVwiLFxuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IDI0LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOiBcIiMyMTIxMjFcIixcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG4gIG1lc3NhZ2U6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgY29sb3I6IFwiIzc1NzU3NVwiLFxuICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgfSxcbiAgc3VtbWFyeUNhcmQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgIHBhZGRpbmc6IDIwLFxuICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgZWxldmF0aW9uOiAzLFxuICB9LFxuICBzdW1tYXJ5VGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTgsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgY29sb3I6IFwiIzRBOTBFMlwiLFxuICAgIG1hcmdpbkJvdHRvbTogMTUsXG4gIH0sXG4gIHN1bW1hcnlUZXh0OiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGNvbG9yOiBcIiMyMTIxMjFcIixcbiAgICBtYXJnaW5Cb3R0b206IDgsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRjcwNDNcIixcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgcGFkZGluZzogMTUsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ+L3BhY2thZ2UuanNvblwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdE5hdGl2ZVNjcmlwdCIsIk1haW5TdGFjayIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJBUElfQ09ORklHIiwiQkFTRV9VUkwiLCJBVVRIRU5USUNBVElPTl9FTkRQT0lOVCIsIkNMSUVOVFNfRU5EUE9JTlQiLCJTQVZJTkdTX0FDQ09VTlRTX0VORFBPSU5UIiwiU0VMRl9DTElFTlRTX0VORFBPSU5UIiwiVVNFUlNfRU5EUE9JTlQiLCJTQVZJTkdTX1BST0RVQ1RTX0VORFBPSU5UIiwiQVBQX0FVVEgiLCJVU0VSTkFNRSIsIlBBU1NXT1JEIiwiVEVOQU5UX0lEIiwiREFURV9GT1JNQVQiLCJMT0NBTEUiLCJQUk9EVUNUX0lEIiwiUk9MRVMiLCJMRUdBTF9GT1JNX0lEIiwiU3R5bGVTaGVldCIsIkNvbnRyaWJ1dGlvblNjcmVlbiIsIm5hdmlnYXRpb24iLCJyb3V0ZSIsIl9zIiwicHJvdmlkZXIiLCJwcm9kdWN0VHlwZSIsIm1pbkFtb3VudCIsIm1heEFtb3VudCIsInBhcmFtcyIsImFtb3VudCIsInNldEFtb3VudCIsInVzZVN0YXRlIiwiaXNQZXJjZW50YWdlIiwic2V0SXNQZXJjZW50YWdlIiwiZnJlcXVlbmN5Iiwic2V0RnJlcXVlbmN5Iiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJzZXRWYWxpZGF0aW9uTWVzc2FnZSIsInZhbGlkYXRlQW1vdW50IiwibnVtVmFsdWUiLCJwYXJzZUZsb2F0IiwiaXNOYU4iLCJoYW5kbGVDb25maXJtIiwibmF2aWdhdGUiLCJjcmVhdGVFbGVtZW50Iiwicm93cyIsInJvdyIsImNvbHVtbnMiLCJzdHlsZSIsInN0eWxlcyIsImhlYWRlciIsImNvbCIsInRleHQiLCJvblRhcCIsImdvQmFjayIsImJhY2tCdXR0b24iLCJoZWFkZXJUZXh0IiwiY29udGFpbmVyIiwiY2FyZCIsInByb3ZpZGVyTmFtZSIsInNlY3Rpb25UaXRsZSIsImlucHV0Q29udGFpbmVyIiwiaW5wdXQiLCJrZXlib2FyZFR5cGUiLCJoaW50Iiwib25UZXh0Q2hhbmdlIiwiYXJncyIsIm5ld0Ftb3VudCIsIm9iamVjdCIsInR5cGVUb2dnbGUiLCJhY3RpdmVUb2dnbGUiLCJmcmVxdWVuY3lDb250YWluZXIiLCJmcmVxdWVuY3lCdXR0b24iLCJhY3RpdmVGcmVxdWVuY3kiLCJzdW1tYXJ5VGV4dCIsImNvbmZpcm1CdXR0b24iLCJfYyIsImNyZWF0ZSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJCb3R0b21XaWR0aCIsImJvcmRlckJvdHRvbUNvbG9yIiwiZm9udFNpemUiLCJjb2xvciIsIndpZHRoIiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkJvdHRvbSIsImVsZXZhdGlvbiIsIm1hcmdpbkxlZnQiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCIkUmVmcmVzaFJlZyQiLCJDb250cmlidXRpb25TdWNjZXNzU2NyZWVuIiwic3VjY2Vzc0ljb24iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzdW1tYXJ5Q2FyZCIsInN1bW1hcnlUaXRsZSIsImJ1dHRvbiIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInRleHRBbGlnbm1lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsIk5hdmlnYXRpb25CYXIiLCJEYXNoYm9hcmRTY3JlZW4iLCJ1c2VyRGF0YSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJhcHBBdXRoVG9rZW4iLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidHJhbnNhY3Rpb25zIiwic2V0VHJhbnNhY3Rpb25zIiwic2VsZWN0ZWRQcm9kdWN0SWQiLCJzZXRTZWxlY3RlZFByb2R1Y3RJZCIsImdldERpc3BsYXlOYW1lIiwiZmlyc3ROYW1lIiwic3BsaXQiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJmb3JtYXRCYWxhbmNlIiwiYmFsYW5jZSIsInVuZGVmaW5lZCIsInBhcnRzIiwidG9GaXhlZCIsInJlcGxhY2UiLCJqb2luIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJ0b0lTT1N0cmluZyIsImNhbGN1bGF0ZVRvdGFsQmFsYW5jZSIsInByb2R1Y3RMaXN0IiwicmVkdWNlIiwidG90YWwiLCJwcm9kdWN0IiwiYWNjb3VudEJhbGFuY2UiLCJmZXRjaFNhdmluZ3NBY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJhdXRoSGVhZGVyIiwiYnRvYSIsInVybCIsImlkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJzYXZpbmdzQWNjb3VudHMiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JtYXR0ZWRQcm9kdWN0cyIsIm1hcCIsImFjY291bnQiLCJwcm9kdWN0TmFtZSIsImFjY291bnRObyIsImxlbmd0aCIsImZldGNoVHJhbnNhY3Rpb25zIiwiZXJyb3IiLCJhY2NvdW50SWQiLCJ0b2RheSIsIkRhdGUiLCJvbmVNb250aEFnbyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZnJvbURhdGUiLCJ0b0RhdGUiLCJ1c2VyQXV0aEhlYWRlciIsInJlc3BvbnNlVGV4dCIsInBhcnNlIiwicGFyc2VFcnJvciIsImNvbnRlbnQiLCJ0IiwidG9TdHJpbmciLCJwYWRTdGFydCIsInR5cGUiLCJ0cmFuc2FjdGlvblR5cGUiLCJkZXNjcmlwdGlvbiIsInBheW1lbnREZXRhaWxEYXRhIiwicGF5bWVudFR5cGUiLCJydW5uaW5nQmFsYW5jZSIsImhhbmRsZUxvZ291dCIsImhhbmRsZU5hdmlnYXRlVG9Qb3J0Zm9saW8iLCJoYW5kbGVQcm9kdWN0U2VsZWN0IiwicmVuZGVyUHJvZHVjdERldGFpbFZpZXciLCJGcmFnbWVudCIsImJhY2tCdXR0b25Db250YWluZXIiLCJwcm9kdWN0RGV0YWlsVGl0bGUiLCJzYXZpbmdzQ2FyZCIsImFjY291bnROdW1iZXIiLCJ0cmFuc2FjdGlvbnNDYXJkIiwidHJhbnNhY3Rpb25zU2VjdGlvblRpdGxlIiwic2xpY2UiLCJ0cmFuc2FjdGlvbiIsImtleSIsInRyYW5zYWN0aW9uSXRlbSIsInRyYW5zYWN0aW9uRGVzY3JpcHRpb24iLCJ0cmFuc2FjdGlvbkFtb3VudCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJuZWdhdGl2ZUFtb3VudCIsInBvc2l0aXZlQW1vdW50IiwidHJhbnNhY3Rpb25EYXRlIiwidHJhbnNhY3Rpb25CYWxhbmNlIiwibm9UcmFuc2FjdGlvbnNMYWJlbCIsInF1aWNrQWN0aW9uc0NhcmQiLCJxdWlja0FjdGlvbnNTZWN0aW9uVGl0bGUiLCJxdWlja0FjdGlvbnNDb250YWluZXIiLCJhY3Rpb25CdXR0b24iLCJpbnZlc3RCdXR0b24iLCJ3aXRoZHJhd0J1dHRvbiIsInJlbmRlclNpbmdsZVByb2R1Y3RWaWV3IiwicmVuZGVyTXVsdGlwbGVQcm9kdWN0c1ZpZXciLCJ0b3RhbEJhbGFuY2VDYXJkIiwidG90YWxCYWxhbmNlIiwicHJvZHVjdHNDYXJkIiwiY2FyZFRpdGxlIiwicHJvZHVjdEl0ZW0iLCJwcm9kdWN0QmFsYW5jZSIsInByb2R1Y3RBY2NvdW50IiwibG9hbkJ1dHRvbiIsImxvYWRlckNvbnRhaW5lciIsImJ1c3kiLCJsb2FkZXIiLCJmaW5kIiwicCIsImFjdGl2ZVJvdXRlIiwicGFkZGluZ0JvdHRvbSIsIm5vQWNjb3VudExhYmVsIiwidGV4dFRyYW5zZm9ybSIsIkludmVzdG1lbnRzU2NyZWVuIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRFcnJvciIsImZldGNoU2F2aW5nc1Byb2R1Y3RzIiwibWFpbkNvbnRhaW5lciIsImxvYWRpbmdUZXh0IiwiZXJyb3JUZXh0IiwicHJvZHVjdENhcmQiLCJjbGFzc05hbWUiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJ0ZXh0V3JhcCIsImRldGFpbHNDb250YWluZXIiLCJkZXRhaWxMYWJlbCIsIm5vbWluYWxBbm51YWxJbnRlcmVzdFJhdGUiLCJkZXRhaWxWYWx1ZSIsImN1cnJlbmN5IiwiZGlzcGxheVN5bWJvbCIsImNvZGUiLCJ0YXBIaW50IiwibWFyZ2luVmVydGljYWwiLCJzaGFkb3dDb2xvciIsInNoYWRvd09mZnNldCIsInNoYWRvd09wYWNpdHkiLCJzaGFkb3dSYWRpdXMiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiZm9udFN0eWxlIiwiTG9naW5TY3JlZW4iLCJzZXRVc2VybmFtZSIsInNldFBhc3N3b3JkIiwibG9naW5TdGF0dXMiLCJzZXRMb2dpblN0YXR1cyIsImFwcEF1dGhTdGF0dXMiLCJzZXRBcHBBdXRoU3RhdHVzIiwic2V0QXBwQXV0aFRva2VuIiwiY2hlY2tBcHBBdXRob3JpemF0aW9uIiwiYm9keSIsImF1dGhlbnRpY2F0ZWQiLCJiYXNlNjRFbmNvZGVkQXV0aGVudGljYXRpb25LZXkiLCJnbG9iYWwiLCJoYW5kbGVMb2dpbiIsInBhZ2VJdGVtcyIsInVzZXJEYXRhV2l0aENyZWRlbnRpYWxzIiwiRXJyb3IiLCJTdHJpbmciLCJzZWN1cmUiLCJpc0VuYWJsZWQiLCJzaWdudXBCdXR0b24iLCJzdGF0dXNMYWJlbCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnblNlbGYiLCJCYXNlTmF2aWdhdGlvbkNvbnRhaW5lciIsInN0YWNrTmF2aWdhdG9yRmFjdG9yeSIsIlNpZ251cFNjcmVlbiIsIlNpZ251cFN1Y2Nlc3NTY3JlZW4iLCJQcm9maWxlU2NyZWVuIiwiV2l0aGRyYXdTY3JlZW4iLCJXaXRoZHJhd1N1Y2Nlc3NTY3JlZW4iLCJQb3J0Zm9saW9TY3JlZW4iLCJTdGFja05hdmlnYXRvciIsIk5hdmlnYXRvciIsImluaXRpYWxSb3V0ZU5hbWUiLCJzY3JlZW5PcHRpb25zIiwiaGVhZGVyU2hvd24iLCJTY3JlZW4iLCJjb21wb25lbnQiLCJpbml0aWFsUGFyYW1zIiwibWVudUl0ZW1zIiwiaGFuZGxlTmF2aWdhdGlvbiIsIm1lbnVCYXIiLCJpdGVtIiwiaW5kZXgiLCJzZXBhcmF0b3IiLCJtZW51SXRlbSIsImFjdGl2ZU1lbnVJdGVtIiwibWVudUxhYmVsIiwiYWN0aXZlTWVudUxhYmVsIiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJUb3BDb2xvciIsImZsZXgiLCJ1c2VyRGF0YUV4aXN0cyIsInVzZXJEYXRhSWQiLCJ1c2VybmFtZUV4aXN0cyIsInBhc3N3b3JkRXhpc3RzIiwiYXBwQXV0aFRva2VuRXhpc3RzIiwiYWNjb3VudHMiLCJzZXRBY2NvdW50cyIsImZldGNoQWNjb3VudHMiLCJzdGF0dXMiLCJlcnIiLCJmb3JtYXRDdXJyZW5jeSIsInN5bWJvbCIsImNhbGN1bGF0ZVRvdGFsSW52ZXN0bWVudCIsImZvcm1hdERhdGVTdHIiLCJmb3JtYXR0ZWRUcmFuc2FjdGlvbnMiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJyZWNlaXB0TnVtYmVyIiwid2FybiIsInNlbGVjdGVkQWNjb3VudCIsImFjYyIsIm5vQWNjb3VudHNMYWJlbCIsInRvdGFsSW52ZXN0bWVudCIsImJyZWFrZG93blRpdGxlIiwiYWNjb3VudFN0YXR1cyIsImxhc3RUcmFuc2FjdGlvbiIsInNldFVzZXJEYXRhIiwiZW1haWxBZGRyZXNzIiwibW9iaWxlTm8iLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJlZGl0ZWRVc2VyRGF0YSIsInNldEVkaXRlZFVzZXJEYXRhIiwiaGFuZGxlRWRpdCIsImhhbmRsZVNhdmUiLCJoYW5kbGVDYW5jZWwiLCJ0b2tlbiIsInJlc2V0Iiwicm91dGVzIiwibGFiZWwiLCJvcmllbnRhdGlvbiIsImJ1dHRvbkNvbnRhaW5lciIsInNhdmVCdXR0b24iLCJjYW5jZWxCdXR0b24iLCJlZGl0QnV0dG9uIiwibG9nb3V0QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJuYXZCYXIiLCJuYXZJdGVtIiwiYWN0aXZlTmF2SXRlbSIsImZpcnN0bmFtZSIsInNldEZpcnN0bmFtZSIsImxhc3RuYW1lIiwic2V0TGFzdG5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwic2V0TW9iaWxlTm8iLCJyZXBlYXRQYXNzd29yZCIsInNldFJlcGVhdFBhc3N3b3JkIiwiZW1wbG95ZXJJZCIsInNldEVtcGxveWVySWQiLCJzaWdudXBTdGF0dXMiLCJzZXRTaWdudXBTdGF0dXMiLCJtb250aE5hbWVzIiwiaGFuZGxlU2lnbnVwIiwiZm9ybWF0dGVkRGF0ZSIsImNsaWVudFJlcXVlc3RCb2R5IiwiZGF0ZUZvcm1hdCIsImxvY2FsZSIsImFjdGl2ZSIsImFjdGl2YXRpb25EYXRlIiwib2ZmaWNlSWQiLCJwYXJzZUludCIsImxlZ2FsRm9ybUlkIiwiY2xpZW50UmVzcG9uc2UiLCJjbGllbnREYXRhIiwiY2xpZW50SWQiLCJ1c2VyUmVxdWVzdEJvZHkiLCJwYXNzd29yZE5ldmVyRXhwaXJlcyIsImlzU2VsZlNlcnZpY2VVc2VyIiwiY2xpZW50cyIsInJvbGVzIiwic2VuZFBhc3N3b3JkVG9FbWFpbCIsInN0YWZmSWQiLCJ1c2VyUmVzcG9uc2UiLCJyZXNvdXJjZUlkIiwic2F2aW5nc0FjY291bnRSZXF1ZXN0Qm9keSIsImV4dGVybmFsSWQiLCJub3ciLCJwcm9kdWN0SWQiLCJzdWJtaXR0ZWRPbkRhdGUiLCJzYXZpbmdzQWNjb3VudFJlc3BvbnNlIiwic2F2aW5nc0FjY291bnREYXRhIiwic2F2aW5nc0lkIiwiYXBwcm92ZVJlcXVlc3RCb2R5IiwiYXBwcm92ZWRPbkRhdGUiLCJhcHByb3ZlUmVzcG9uc2UiLCJhcHByb3ZlRGF0YSIsImNoYW5nZXMiLCJhcHByb3ZlZCIsImFjdGl2YXRlUmVxdWVzdEJvZHkiLCJhY3RpdmF0ZWRPbkRhdGUiLCJhY3RpdmF0ZVJlc3BvbnNlIiwiYWN0aXZhdGVEYXRhIiwic2F2aW5nc0FjY291bnRJZCIsImFjY291bnRBY3RpdmUiLCJlcnJvcnMiLCJkZWZhdWx0VXNlck1lc3NhZ2UiLCJpbmZvTGFiZWwiLCJkZXN0aW5hdGlvblR5cGUiLCJzZXREZXN0aW5hdGlvblR5cGUiLCJzZXRBY2NvdW50TnVtYmVyIiwiYmFua05hbWUiLCJzZXRCYW5rTmFtZSIsImFjY291bnROYW1lIiwic2V0QWNjb3VudE5hbWUiLCJicmFuY2hDb2RlIiwic2V0QnJhbmNoQ29kZSIsInZhbGlkYXRlQmFua0RldGFpbHMiLCJkZXN0aW5hdGlvbiIsInJlZmVyZW5jZSIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsImVzdGltYXRlZFRpbWUiLCJkZXN0aW5hdGlvbkNvbnRhaW5lciIsImRlc3RpbmF0aW9uQnV0dG9uIiwiYWN0aXZlRGVzdGluYXRpb24iXSwic291cmNlUm9vdCI6IiJ9