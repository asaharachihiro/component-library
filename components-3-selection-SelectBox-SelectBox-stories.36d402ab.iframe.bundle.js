"use strict";(self.webpackChunkvite_project=self.webpackChunkvite_project||[]).push([[170],{"./src/components/3-selection/SelectBox/SelectBox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SelectBox_stories});var SelectBox=__webpack_require__("./src/components/3-selection/SelectBox/SelectBox.tsx"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}const SelectBox_stories={title:"Components/Selection/SelectBox",component:SelectBox.a,tags:["autodocs"],parameters:{docs:{description:{component:"SelectBoxは、複数の選択肢を提供するコンポーネントです。"}}}};var Template={render:function render(args){var _React$useState2=_slicedToArray(react.useState(args.defaultValue),2),selectedValue=_React$useState2[0],setSelectedValue=_React$useState2[1];return react.useEffect((function(){setSelectedValue(args.defaultValue)}),[args.defaultValue]),(0,jsx_runtime.jsx)(SelectBox.a,_objectSpread(_objectSpread({},args),{},{defaultValue:selectedValue,onChange:setSelectedValue}))}},Default=_objectSpread(_objectSpread({},Template),{},{args:{options:[{value:"1",label:"学生"},{value:"2",label:"会社員"},{value:"3",label:"自営業"},{value:"4",label:"パート・アルバイト"},{value:"6",label:"その他"}],label:"職業",placeholder:"職業を選択",defaultValue:"none"}});const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    options: [{\n      value: "1",\n      label: "学生"\n    }, {\n      value: "2",\n      label: "会社員"\n    }, {\n      value: "3",\n      label: "自営業"\n    }, {\n      value: "4",\n      label: "パート・アルバイト"\n    }, {\n      value: "6",\n      label: "その他"\n    }],\n    label: "職業",\n    placeholder: "職業を選択",\n    defaultValue: "none"\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/components/3-selection/SelectBox/SelectBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>SelectBox});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-select/dist/index.mjs"),_utils_cn__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/cn.ts"),_0_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/0-common/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var SelectBox=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var id=_ref.id,options=_ref.options,label=_ref.label,_ref$placeholder=_ref.placeholder,placeholder=void 0===_ref$placeholder?"未選択":_ref$placeholder,defaultValue=_ref.defaultValue,_ref$isRequired=_ref.isRequired,isRequired=void 0!==_ref$isRequired&&_ref$isRequired,_ref$isValid=_ref.isValid,isValid=void 0===_ref$isValid||_ref$isValid,_ref$size=_ref.size,size=void 0===_ref$size?"m":_ref$size,onChange=_ref.onChange,supportMessage=_ref.supportMessage,errorMessage=_ref.errorMessage,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$hasDefaultOption=_ref.hasDefaultOption,hasDefaultOption=void 0!==_ref$hasDefaultOption&&_ref$hasDefaultOption,_React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultValue),2),selectedValue=_React$useState2[0],setSelectedValue=_React$useState2[1];react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){setSelectedValue(defaultValue)}),[defaultValue]);var boxStyle={"text-black-sub pointer-events-none bg-black-3-opacity":disabled,"border-danger":!isValid&&!disabled,"border-black-20-opacity focus:border-black-sub":isValid&&!disabled,"text-black":selectedValue,"text-black-20-opacity":!selectedValue,"text-sm p-1 pl-2 rounded-md":"s"===size,"rounded-lg border p-2":"s"!==size};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_0_common__WEBPACK_IMPORTED_MODULE_1__.lR,{label,isRequired}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.bL,{value:selectedValue,onValueChange:function handleChange(newValue){setSelectedValue(newValue),onChange&&onChange(newValue)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.l9,{id,ref,className:(0,_utils_cn__WEBPACK_IMPORTED_MODULE_4__.cn)("flex w-full items-center justify-between bg-white hover:bg-black-5-opacity",boxStyle),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.WT,{placeholder}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.In,{className:"mr-1 flex items-center justify-center text-black-sub",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"material-symbols-rounded",children:"expand_more"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.UC,{className:"rounded-lg bg-white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.PP,{className:"mr-1 items-center justify-center text-black-sub",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"material-symbols-rounded",children:"expand_less"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.LM,{className:"rounded-lg border-none shadow-low",children:[hasDefaultOption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.q7,{value:"none",className:"flex cursor-pointer p-2 text-black-sub transition-all hover:bg-black-5-opacity focus-visible:bg-black-5-opacity focus-visible:outline-none",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.VF,{className:"mr-1 flex items-center text-lg text-main",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"material-symbols-rounded",children:"check"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.p4,{children:placeholder})]}),options.map((function(option){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.q7,{value:option.value,className:"flex cursor-pointer p-2 transition-all hover:bg-black-5-opacity focus-visible:bg-black-5-opacity focus-visible:outline-none",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.VF,{className:"mr-1 flex items-center text-lg text-main",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"material-symbols-rounded",children:"check"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.p4,{children:option.label})]},option.value)}))]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.wn,{className:"flex items-center justify-center p-2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"material-symbols-rounded",children:"expand_more"})})]})]}),supportMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"text-xs text-black-sub",children:supportMessage}),!isValid&&errorMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_0_common__WEBPACK_IMPORTED_MODULE_1__.yn,{text:errorMessage})]})}));SelectBox.displayName="SelectBox";try{SelectBox.displayName="SelectBox",SelectBox.__docgenInfo={description:"",displayName:"SelectBox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ value: string; label: string; }[]"}},placeholder:{defaultValue:{value:"未選択"},description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},isRequired:{defaultValue:{value:"false"},description:"",name:"isRequired",required:!1,type:{name:"boolean"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},supportMessage:{defaultValue:null,description:"",name:"supportMessage",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},hasDefaultOption:{defaultValue:{value:"false"},description:"",name:"hasDefaultOption",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/3-selection/SelectBox/SelectBox.tsx#SelectBox"]={docgenInfo:SelectBox.__docgenInfo,name:"SelectBox",path:"src/components/3-selection/SelectBox/SelectBox.tsx#SelectBox"})}catch(__react_docgen_typescript_loader_error){}}}]);