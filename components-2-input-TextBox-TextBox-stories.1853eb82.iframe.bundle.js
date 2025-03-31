"use strict";(self.webpackChunkvite_project=self.webpackChunkvite_project||[]).push([[609],{"./src/components/0-common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{yn:()=>ErrorText,lR:()=>FormLabel,cl:()=>InputBox,W2:()=>OptionsGroup});var react=__webpack_require__("./node_modules/react/index.js"),cn=__webpack_require__("./src/utils/cn.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["label","isRequired","className","htmlFor"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var FormLabel=react.forwardRef((function(_ref,ref){var label=_ref.label,isRequired=_ref.isRequired,className=_ref.className,htmlFor=_ref.htmlFor,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return(0,jsx_runtime.jsxs)("label",_objectSpread(_objectSpread({ref,className:(0,cn.cn)("mb-1 flex flex-nowrap items-center",className),htmlFor:htmlFor||"defaultId"},props),{},{children:[(0,jsx_runtime.jsx)("span",{className:"text-sm font-medium text-black",children:label}),isRequired&&(0,jsx_runtime.jsx)("span",{className:"ml-2 flex h-5 items-center rounded-md bg-black-10-opacity px-2 text-xs font-bold text-black-sub",children:"必須"})]}))}));FormLabel.displayName="FormLabel";try{FormLabel.displayName="FormLabel",FormLabel.__docgenInfo={description:"",displayName:"FormLabel",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/0-common/FormLabel.tsx#FormLabel"]={docgenInfo:FormLabel.__docgenInfo,name:"FormLabel",path:"src/components/0-common/FormLabel.tsx#FormLabel"})}catch(__react_docgen_typescript_loader_error){}function InputBox_typeof(o){return InputBox_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},InputBox_typeof(o)}var InputBox_excluded=["id","type","className","placeholder","value","isValid","disabled","asTextArea","autoComplete","onChange","onFocus","onBlur"];function InputBox_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function InputBox_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?InputBox_ownKeys(Object(t),!0).forEach((function(r){InputBox_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):InputBox_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function InputBox_defineProperty(e,r,t){return(r=function InputBox_toPropertyKey(t){var i=function InputBox_toPrimitive(t,r){if("object"!=InputBox_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=InputBox_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==InputBox_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var InputBox=react.forwardRef((function(_ref,ref){var id=_ref.id,type=_ref.type,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,placeholder=_ref.placeholder,_ref$value=_ref.value,value=void 0===_ref$value?"":_ref$value,_ref$isValid=_ref.isValid,isValid=void 0===_ref$isValid||_ref$isValid,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$asTextArea=_ref.asTextArea,asTextArea=void 0!==_ref$asTextArea&&_ref$asTextArea,autoComplete=_ref.autoComplete,onChange=_ref.onChange,_onFocus=_ref.onFocus,_onBlur=_ref.onBlur,props=function InputBox_objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function InputBox_objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,InputBox_excluded),InputComponent=asTextArea?"textarea":"input",inputStyle=(0,cn.cn)("w-full rounded-lg border p-2",{"border-black-20-opacity text-black-sub pointer-events-none bg-black-3-opacity":disabled,"border-danger":!disabled&&!isValid,"border-black-20-opacity focus:border-black-sub text-black":!disabled&&isValid});return(0,jsx_runtime.jsx)(InputComponent,InputBox_objectSpread(InputBox_objectSpread({id,ref,type,placeholder,value:value||"",onChange,onBlur:function onBlur(e){return _onBlur&&_onBlur(id,e.target.value)},onFocus:function onFocus(e){return _onFocus&&_onFocus(id,e.target.value)},disabled,className:(0,cn.cn)(inputStyle,className),autoComplete,"aria-disabled":disabled,"aria-invalid":!isValid},asTextArea?{rows:4}:{}),props))}));InputBox.displayName="InputBox";try{InputBox.displayName="InputBox",InputBox.__docgenInfo={description:"",displayName:"InputBox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},asTextArea:{defaultValue:{value:"false"},description:"",name:"asTextArea",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(id: string, value: string) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(id: string, value: string) => void"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/0-common/InputBox.tsx#InputBox"]={docgenInfo:InputBox.__docgenInfo,name:"InputBox",path:"src/components/0-common/InputBox.tsx#InputBox"})}catch(__react_docgen_typescript_loader_error){}var ErrorText=function ErrorText(_ref){var text=_ref.text;return(0,jsx_runtime.jsxs)("div",{className:"flex items-center text-danger",children:[(0,jsx_runtime.jsx)("span",{className:"material-symbols-rounded icon-fill",children:"emergency_home"}),(0,jsx_runtime.jsx)("span",{className:"text-xs font-medium",children:text})]})};ErrorText.displayName="ErrorText";try{ErrorText.displayName="ErrorText",ErrorText.__docgenInfo={description:"",displayName:"ErrorText",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/0-common/ErrorText.tsx#ErrorText"]={docgenInfo:ErrorText.__docgenInfo,name:"ErrorText",path:"src/components/0-common/ErrorText.tsx#ErrorText"})}catch(__react_docgen_typescript_loader_error){}function CheckIcon_typeof(o){return CheckIcon_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},CheckIcon_typeof(o)}var CheckIcon_excluded=["id","className","children","checked","onChange","disabled","isValid"];function CheckIcon_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function CheckIcon_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?CheckIcon_ownKeys(Object(t),!0).forEach((function(r){CheckIcon_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):CheckIcon_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function CheckIcon_defineProperty(e,r,t){return(r=function CheckIcon_toPropertyKey(t){var i=function CheckIcon_toPrimitive(t,r){if("object"!=CheckIcon_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=CheckIcon_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==CheckIcon_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var CheckIcon=function CheckIcon(_ref){var id=_ref.id,_ref$checked=(_ref.className,_ref.children,_ref.checked),checked=void 0!==_ref$checked&&_ref$checked,onChange=_ref.onChange,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$isValid=_ref.isValid,isValid=void 0===_ref$isValid||_ref$isValid,props=function CheckIcon_objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function CheckIcon_objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,CheckIcon_excluded),_React$useState2=_slicedToArray(react.useState(checked),2),internalChecked=_React$useState2[0],setInternalChecked=_React$useState2[1];react.useEffect((function(){void 0!==checked&&setInternalChecked(checked)}),[checked]);var isNormalStyle=!disabled&&isValid,checkBoxtyle=(0,cn.cn)("flex h-7 w-7 select-none items-center justify-center rounded-md text-2xl hover:bg-black-5-opacity active:bg-black-10-opacity",{"text-black-20-opacity pointer-events-none":disabled,"text-danger":!disabled&&!isValid});return(0,jsx_runtime.jsx)("input",CheckIcon_objectSpread(CheckIcon_objectSpread({type:"checkbox",id,className:checkBoxtyle,checked:"indeterminate"!==internalChecked&&internalChecked,"aria-disabled":disabled,"aria-invalid":!isValid,onChange:function handleCheckedChange(){var newChecked;setInternalChecked(newChecked="indeterminate"===internalChecked||!internalChecked),onChange&&onChange(newChecked)}},props),{},{disabled,children:(0,jsx_runtime.jsx)("span",{className:"material-symbols-rounded",children:"indeterminate"===internalChecked?(0,jsx_runtime.jsx)("span",{className:(0,cn.cn)("icon-fill",isNormalStyle&&"text-main"),children:"indeterminate_check_box"}):internalChecked?(0,jsx_runtime.jsx)("span",{className:(0,cn.cn)("icon-fill",isNormalStyle&&"text-main"),children:"check_box"}):(0,jsx_runtime.jsx)("span",{className:(0,cn.cn)(isNormalStyle&&"text-black-sub"),children:"check_box_outline_blank"})})}))};CheckIcon.displayName="CheckIcon";try{CheckIcon.displayName="CheckIcon",CheckIcon.__docgenInfo={description:"",displayName:"CheckIcon",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:'boolean | "indeterminate"'}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:'(checked: boolean | "indeterminate") => void'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/0-common/CheckIcon.tsx#CheckIcon"]={docgenInfo:CheckIcon.__docgenInfo,name:"CheckIcon",path:"src/components/0-common/CheckIcon.tsx#CheckIcon"})}catch(__react_docgen_typescript_loader_error){}function OptionsGroup_typeof(o){return OptionsGroup_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},OptionsGroup_typeof(o)}var OptionsGroup_excluded=["id","label","isRequired","className","errorText","children","supportText","isHorizontal"];function OptionsGroup_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function OptionsGroup_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?OptionsGroup_ownKeys(Object(t),!0).forEach((function(r){OptionsGroup_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):OptionsGroup_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function OptionsGroup_defineProperty(e,r,t){return(r=function OptionsGroup_toPropertyKey(t){var i=function OptionsGroup_toPrimitive(t,r){if("object"!=OptionsGroup_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=OptionsGroup_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==OptionsGroup_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var OptionsGroup=react.forwardRef((function(_ref,ref){_ref.id;var label=_ref.label,_ref$isRequired=_ref.isRequired,isRequired=void 0!==_ref$isRequired&&_ref$isRequired,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$errorText=_ref.errorText,errorText=void 0===_ref$errorText?"":_ref$errorText,children=_ref.children,supportText=_ref.supportText,_ref$isHorizontal=_ref.isHorizontal,isHorizontal=void 0!==_ref$isHorizontal&&_ref$isHorizontal,props=function OptionsGroup_objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function OptionsGroup_objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,OptionsGroup_excluded);return(0,jsx_runtime.jsxs)("div",OptionsGroup_objectSpread(OptionsGroup_objectSpread({className:(0,cn.cn)("",className)},props),{},{ref,children:[label&&(0,jsx_runtime.jsx)(FormLabel,{label,isRequired}),supportText&&(0,jsx_runtime.jsx)("span",{className:"text-xs text-black-sub",children:supportText}),errorText&&(0,jsx_runtime.jsx)(ErrorText,{text:errorText}),(0,jsx_runtime.jsx)("div",{className:(0,cn.cn)(isHorizontal?"mt-2 flex space-x-4":"mt-2 flex flex-col items-start space-y-2"),children})]}))}));OptionsGroup.displayName="OptionsGroup";try{OptionsGroup.displayName="OptionsGroup",OptionsGroup.__docgenInfo={description:"",displayName:"OptionsGroup",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},isRequired:{defaultValue:{value:"false"},description:"",name:"isRequired",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},errorText:{defaultValue:{value:""},description:"",name:"errorText",required:!1,type:{name:"string"}},supportText:{defaultValue:null,description:"",name:"supportText",required:!1,type:{name:"string"}},isHorizontal:{defaultValue:{value:"false"},description:"",name:"isHorizontal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/0-common/OptionsGroup.tsx#OptionsGroup"]={docgenInfo:OptionsGroup.__docgenInfo,name:"OptionsGroup",path:"src/components/0-common/OptionsGroup.tsx#OptionsGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/2-input/Form/FormContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>FormContext,x:()=>useFormContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),FormContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useFormContext=function useFormContext(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FormContext)};try{FormContext.displayName="FormContext",FormContext.__docgenInfo={description:"",displayName:"FormContext",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/2-input/Form/FormContext.tsx#FormContext"]={docgenInfo:FormContext.__docgenInfo,name:"FormContext",path:"src/components/2-input/Form/FormContext.tsx#FormContext"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/2-input/TextBox/TextBox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Input/TextBox",component:__webpack_require__("./src/components/2-input/TextBox/index.ts").f,tags:["autodocs"],parameters:{docs:{description:{component:"TextBoxは、テキストを入力するためのコンポーネントです。"}}}};var Default={args:{label:"ユーザー名",isValid:!0,disabled:!1,placeholder:"山田 太郎",isRequired:!0,supportMessage:"この設定はあとから変更することができます。",errorMessage:"ユーザー名を入力してください。"},argTypes:{label:{control:"text"},value:{control:"text"},isValid:{control:"boolean"},disabled:{control:"boolean"},placeholder:{control:"text"},isRequired:{control:"boolean"},supportMessage:{control:"text"},errorMessage:{control:"text"}},parameters:{controls:{exclude:["type","className","onChange"]}}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "ユーザー名",\n    isValid: true,\n    disabled: false,\n    placeholder: "山田 太郎",\n    isRequired: true,\n    supportMessage: "この設定はあとから変更することができます。",\n    errorMessage: "ユーザー名を入力してください。"\n  },\n  argTypes: {\n    label: {\n      control: "text"\n    },\n    value: {\n      control: "text"\n    },\n    isValid: {\n      control: "boolean"\n    },\n    disabled: {\n      control: "boolean"\n    },\n    placeholder: {\n      control: "text"\n    },\n    isRequired: {\n      control: "boolean"\n    },\n    supportMessage: {\n      control: "text"\n    },\n    errorMessage: {\n      control: "text"\n    }\n  },\n  parameters: {\n    controls: {\n      exclude: ["type", "className", "onChange"]\n    }\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/components/2-input/TextBox/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>TextBox});var react=__webpack_require__("./node_modules/react/index.js"),_0_common=__webpack_require__("./src/components/0-common/index.ts"),FormContext=__webpack_require__("./src/components/2-input/Form/FormContext.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["label","id","type","isRequired","className","placeholder","supportMessage","errorMessage","value","onChange","onBlur","onFocus","isValid","disabled"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var TextBox=react.forwardRef((function(_ref,ref){var label=_ref.label,id=_ref.id,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,_ref$isRequired=_ref.isRequired,isRequired=void 0!==_ref$isRequired&&_ref$isRequired,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,placeholder=_ref.placeholder,supportMessage=_ref.supportMessage,errorMessage=_ref.errorMessage,value=_ref.value,onBlur=(_ref.onChange,_ref.onBlur),onFocus=_ref.onFocus,isValid=_ref.isValid,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),context=(0,FormContext.x)(),formData=(null==context?void 0:context.formData)||{},errors=(null==context?void 0:context.errors)||{},handleInputChange=(null==context?void 0:context.handleInputChange)||function(){},isValidStatus=isValid||null==errors[id];return(0,jsx_runtime.jsxs)("div",{className,children:[label&&(0,jsx_runtime.jsx)(_0_common.lR,{label,isRequired}),(0,jsx_runtime.jsx)(_0_common.cl,_objectSpread({id,value:formData[id]||value,type,isValid:isValidStatus,disabled,onChange:function onChange(e){return handleInputChange(id,e.target.value)},onBlur,onFocus,placeholder,ref,asTextArea:"textArea"===type},props)),supportMessage&&(0,jsx_runtime.jsx)("span",{className:"text-xs text-black-sub",children:supportMessage}),!isValidStatus&&(0,jsx_runtime.jsx)(_0_common.yn,{text:errors[id]||errorMessage||"入力がエラーになっています。"})]})}));TextBox.displayName="TextBox";try{TextBox.displayName="TextBox",TextBox.__docgenInfo={description:"",displayName:"TextBox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"textArea"'}]}},isRequired:{defaultValue:{value:"false"},description:"",name:"isRequired",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},supportMessage:{defaultValue:null,description:"",name:"supportMessage",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:null,description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(id: string, value: string) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(id: string, value: string) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(id: string, value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/2-input/TextBox/TextBox.tsx#TextBox"]={docgenInfo:TextBox.__docgenInfo,name:"TextBox",path:"src/components/2-input/TextBox/TextBox.tsx#TextBox"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/cn.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _toClassName=function toClassName(value){return"string"==typeof value?value:Array.isArray(value)?value.map(_toClassName).filter(Boolean).join(" "):"object"===_typeof(value)&&null!==value?Object.keys(value).filter((function(key){return value[key]})).join(" "):""};function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)(inputs.map(_toClassName).filter(Boolean).join(" "))}}}]);