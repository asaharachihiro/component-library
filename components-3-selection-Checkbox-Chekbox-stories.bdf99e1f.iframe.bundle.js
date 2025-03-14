"use strict";(self.webpackChunkvite_project=self.webpackChunkvite_project||[]).push([[115],{"./src/components/3-selection/Checkbox/Chekbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Chekbox_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-checkbox/dist/index.mjs"),cn=__webpack_require__("./src/utils/cn.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["id","className","children","defaultChecked","onChange","disabled","isValid"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var Checkbox=react.forwardRef((function(_ref,ref){var id=_ref.id,className=_ref.className,children=_ref.children,_ref$defaultChecked=_ref.defaultChecked,defaultChecked=void 0!==_ref$defaultChecked&&_ref$defaultChecked,onChange=_ref.onChange,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$isValid=_ref.isValid,isValid=void 0===_ref$isValid||_ref$isValid,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),_React$useState2=_slicedToArray(react.useState(defaultChecked),2),internalChecked=_React$useState2[0],setInternalChecked=_React$useState2[1];react.useEffect((function(){void 0!==defaultChecked&&setInternalChecked(defaultChecked)}),[defaultChecked]);var handleCheckedChange=function handleCheckedChange(){var newChecked;setInternalChecked(newChecked="indeterminate"===internalChecked||!internalChecked),onChange&&onChange(newChecked)},disabledStyle=disabled&&"text-black-20-opacity pointer-events-none",errorStyle=!disabled&&!isValid&&"text-danger",isNormalStyle=!disabled&&isValid;return(0,jsx_runtime.jsxs)("div",{className:(0,cn.cn)(disabledStyle,className,"flex cursor-pointer items-center text-base transition-all"),onClick:handleCheckedChange,children:[(0,jsx_runtime.jsx)(dist.bL,_objectSpread(_objectSpread({id,className:(0,cn.cn)(errorStyle,"flex h-7 w-7 select-none items-center justify-center rounded-md text-2xl hover:bg-black-5-opacity active:bg-black-10-opacity"),checked:"indeterminate"!==internalChecked&&internalChecked,onCheckedChange:handleCheckedChange},props),{},{ref,disabled,children:(0,jsx_runtime.jsx)("span",{className:"material-symbols-rounded",children:"indeterminate"===internalChecked?(0,jsx_runtime.jsx)("span",{className:(0,cn.cn)("icon-fill",isNormalStyle&&"text-main"),children:"indeterminate_check_box"}):internalChecked?(0,jsx_runtime.jsx)("span",{className:(0,cn.cn)("icon-fill",isNormalStyle&&"text-main"),children:"check_box"}):(0,jsx_runtime.jsx)("span",{className:(0,cn.cn)(isNormalStyle&&"text-black-sub"),children:"check_box_outline_blank"})})})),(0,jsx_runtime.jsx)("span",{className:(0,cn.cn)("ml-1 text-base"),children})]})}));Checkbox.displayName="Checkbox";try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},defaultChecked:{defaultValue:{value:"false"},description:"",name:"defaultChecked",required:!1,type:{name:'boolean | "indeterminate"'}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:'(checked: boolean | "indeterminate") => void'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/3-selection/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/3-selection/Checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}function Chekbox_stories_typeof(o){return Chekbox_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Chekbox_stories_typeof(o)}function Chekbox_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Chekbox_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Chekbox_stories_ownKeys(Object(t),!0).forEach((function(r){Chekbox_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Chekbox_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Chekbox_stories_defineProperty(e,r,t){return(r=function Chekbox_stories_toPropertyKey(t){var i=function Chekbox_stories_toPrimitive(t,r){if("object"!=Chekbox_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=Chekbox_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==Chekbox_stories_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Chekbox_stories_slicedToArray(r,e){return function Chekbox_stories_arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function Chekbox_stories_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function Chekbox_stories_unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return Chekbox_stories_arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Chekbox_stories_arrayLikeToArray(r,a):void 0}}(r,e)||function Chekbox_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Chekbox_stories_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}const Chekbox_stories={title:"Components/Selection/Checkbox",component:Checkbox,tags:["autodocs"],parameters:{docs:{description:{component:"Checkboxは、複数選択のために使用されるコンポーネントです。"}}}};var Template={render:function render(args){var _React$useState2=Chekbox_stories_slicedToArray(react.useState(args.defaultChecked),2),checked=_React$useState2[0],setChecked=_React$useState2[1];react.useEffect((function(){setChecked(args.defaultChecked)}),[args.defaultChecked]);return(0,jsx_runtime.jsx)(Checkbox,Chekbox_stories_objectSpread(Chekbox_stories_objectSpread({},args),{},{defaultChecked:checked,onChange:function handleCheckedChange(newChecked){setChecked(newChecked)}}))}},Default=Chekbox_stories_objectSpread(Chekbox_stories_objectSpread({},Template),{},{args:{id:"1",defaultChecked:!1,children:"利用規約に同意します。",disabled:!1,isValid:!0},argTypes:{defaultChecked:{control:{type:"boolean"}},isValid:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}});const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    id: "1",\n    defaultChecked: false,\n    children: "利用規約に同意します。",\n    disabled: false,\n    isValid: true\n  },\n  argTypes: {\n    defaultChecked: {\n      control: {\n        type: "boolean"\n      }\n    },\n    isValid: {\n      control: {\n        type: "boolean"\n      }\n    },\n    disabled: {\n      control: {\n        type: "boolean"\n      }\n    }\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/utils/cn.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _toClassName=function toClassName(value){return"string"==typeof value?value:Array.isArray(value)?value.map(_toClassName).filter(Boolean).join(" "):"object"===_typeof(value)&&null!==value?Object.keys(value).filter((function(key){return value[key]})).join(" "):""};function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)(inputs.map(_toClassName).filter(Boolean).join(" "))}}}]);