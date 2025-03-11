"use strict";(self.webpackChunkvite_project=self.webpackChunkvite_project||[]).push([[168],{"./src/components/3-selection/ToggleSwitch/ToggleSwitch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ToggleSwitch_stories});var react=__webpack_require__("./node_modules/react/index.js"),cn=__webpack_require__("./src/utils/cn.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["id","className","label","children","checked","onClick","disabled","isValid"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var ToggleSwitch=react.forwardRef((function(_ref,ref){var id=_ref.id,label=(_ref.className,_ref.label),_ref$checked=(_ref.children,_ref.checked),checked=void 0!==_ref$checked&&_ref$checked,_ref$disabled=(_ref.onClick,_ref.disabled),disabled=void 0!==_ref$disabled&&_ref$disabled,props=(_ref.isValid,function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded)),_React$useState2=_slicedToArray(react.useState(checked),2),toggle=_React$useState2[0],setToggle=_React$useState2[1];react.useEffect((function(){setToggle(checked)}),[checked]);var switchStyle=(0,cn.cn)("flex shrink-0 items-center mt-1 h-7 w-[52px] rounded-full border-2 relative after:absolute after:content-[''] after:w-[16px] after:h-[16px] after:rounded-full  after:transition-transform after:duration-300",{"border-none after:bg-white after:translate-x-[28px]":toggle,"bg-main":toggle&&!disabled,"bg-black":toggle&&disabled,"after:translate-x-[4px] border-black after:bg-black":!toggle,"opacity-50":!toggle&&!disabled,"opacity-20":disabled});return(0,jsx_runtime.jsxs)("label",{htmlFor:id,className:(0,cn.cn)(disabled?"pointer-events-none text-black-20-opacity":"cursor-pointer","flex justify-between"),children:[label&&(0,jsx_runtime.jsx)("span",{className:"m-1 mr-4 text-left text-base leading-[180%]",children:label}),(0,jsx_runtime.jsx)("input",_objectSpread({id,ref,type:"checkbox",checked:toggle,onChange:function handleToggled(){setToggle(!toggle)},disabled,className:"hidden"},props)),(0,jsx_runtime.jsx)("div",{className:switchStyle})]})}));ToggleSwitch.displayName="ToggleSwitch";try{ToggleSwitch.displayName="ToggleSwitch",ToggleSwitch.__docgenInfo={description:"",displayName:"ToggleSwitch",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/3-selection/ToggleSwitch/ToggleSwitch.tsx#ToggleSwitch"]={docgenInfo:ToggleSwitch.__docgenInfo,name:"ToggleSwitch",path:"src/components/3-selection/ToggleSwitch/ToggleSwitch.tsx#ToggleSwitch"})}catch(__react_docgen_typescript_loader_error){}function ToggleSwitch_stories_typeof(o){return ToggleSwitch_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},ToggleSwitch_stories_typeof(o)}function ToggleSwitch_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function ToggleSwitch_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ToggleSwitch_stories_ownKeys(Object(t),!0).forEach((function(r){ToggleSwitch_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ToggleSwitch_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function ToggleSwitch_stories_defineProperty(e,r,t){return(r=function ToggleSwitch_stories_toPropertyKey(t){var i=function ToggleSwitch_stories_toPrimitive(t,r){if("object"!=ToggleSwitch_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=ToggleSwitch_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==ToggleSwitch_stories_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ToggleSwitch_stories_slicedToArray(r,e){return function ToggleSwitch_stories_arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function ToggleSwitch_stories_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function ToggleSwitch_stories_unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return ToggleSwitch_stories_arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ToggleSwitch_stories_arrayLikeToArray(r,a):void 0}}(r,e)||function ToggleSwitch_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ToggleSwitch_stories_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}const ToggleSwitch_stories={title:"Components/Selection/ToggleSwitch",component:ToggleSwitch,tags:["autodocs"],parameters:{docs:{description:{component:"ToggleSwitchは、項目のON/OFFを切り替えることができるコンポーネントです。"}}}};var Template={render:function render(args){var _React$useState2=ToggleSwitch_stories_slicedToArray(react.useState(!!args.checked&&args.checked),2),check=_React$useState2[0],setCheck=_React$useState2[1];return react.useEffect((function(){setCheck(check)}),[args.checked]),(0,jsx_runtime.jsx)("div",{className:"w-[240px]",children:(0,jsx_runtime.jsx)(ToggleSwitch,ToggleSwitch_stories_objectSpread({},args))})}},Default=ToggleSwitch_stories_objectSpread(ToggleSwitch_stories_objectSpread({},Template),{},{args:{id:"1",label:"メール通知を受け取る",checked:!1,disabled:!1},argTypes:{checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}});const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    id: "1",\n    label: "メール通知を受け取る",\n    checked: false,\n    disabled: false\n  },\n  argTypes: {\n    checked: {\n      control: {\n        type: "boolean"\n      }\n    },\n    disabled: {\n      control: {\n        type: "boolean"\n      }\n    }\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/utils/cn.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _toClassName=function toClassName(value){return"string"==typeof value?value:Array.isArray(value)?value.map(_toClassName).filter(Boolean).join(" "):"object"===_typeof(value)&&null!==value?Object.keys(value).filter((function(key){return value[key]})).join(" "):""};function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)(inputs.map(_toClassName).filter(Boolean).join(" "))}}}]);