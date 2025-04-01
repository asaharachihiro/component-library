"use strict";(self.webpackChunkvite_project=self.webpackChunkvite_project||[]).push([[347],{"./src/components/1-action/Button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),cn=__webpack_require__("./src/utils/cn.ts"),Spinner=__webpack_require__("./src/components/8-loading/Spinner/Spinner.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["label","className","variant","size","disabled","isActive","isLoading","icon"],_excluded2=["label","className","variant","size","disabled","isActive","isLoading","icon"],_excluded3=["label","className","variant","size","disabled","isActive","isLoading","icon"],_excluded4=["label","className","variant","size","isLoading","disabled","isActive","icon","children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var baseButtonStyle="flex items-center justify-center font-bold cursor-pointer relative overflow-hidden group shrink-0",sizeS="h-7 px-2 text-sm rounded-md min-w-12",sizeM="h-9 px-6 text-base rounded-lg",ContainedBaseButton=react.forwardRef((function(_ref,ref){var label=_ref.label,className=_ref.className,variant=_ref.variant,_ref$size=_ref.size,size=void 0===_ref$size?"m":_ref$size,disabled=_ref.disabled,_ref$isLoading=(_ref.isActive,_ref.isLoading),isLoading=void 0!==_ref$isLoading&&_ref$isLoading,icon=_ref.icon,props=_objectWithoutProperties(_ref,_excluded),ButtonStyle=(0,cn.cn)(baseButtonStyle,_defineProperty(_defineProperty(_defineProperty({"bg-main text-white":!disabled&&!isLoading&&"primary"===variant,"bg-danger text-white":!disabled&&!isLoading&&"danger"===variant},sizeM,"danger"==variant||"s"!==size),sizeS,"s"===size&&"danger"!==variant),"bg-black-5-opacity text-black-20-opacity border-black-20-opacity pointer-events-none",disabled||isLoading));return(0,jsx_runtime.jsxs)("button",_objectSpread(_objectSpread({ref,className:(0,cn.cn)(ButtonStyle,className)},props),{},{children:[(0,jsx_runtime.jsx)("div",{className:"absolute bg-black opacity-0 transition-all group-hover:opacity-5 group-active:opacity-10"}),isLoading&&(0,jsx_runtime.jsx)(Spinner.y,{className:"absolute flex"}),icon&&(0,jsx_runtime.jsx)("div",{className:(0,cn.cn)("text-xl",isLoading?"opacity-0":"mr-1 flex"),children:(0,jsx_runtime.jsx)("span",{className:"material-symbols-rounded",children:icon})}),(0,jsx_runtime.jsx)("span",{className:(0,cn.cn)(isLoading&&"opacity-0"),children:label})]}))})),OutlinedBaseButton=react.forwardRef((function(_ref2,ref){var label=_ref2.label,className=_ref2.className,_ref2$size=(_ref2.variant,_ref2.size),size=void 0===_ref2$size?"m":_ref2$size,disabled=_ref2.disabled,isActive=_ref2.isActive,_ref2$isLoading=_ref2.isLoading,isLoading=void 0!==_ref2$isLoading&&_ref2$isLoading,icon=_ref2.icon,props=_objectWithoutProperties(_ref2,_excluded2),ButtonStyle=(0,cn.cn)(baseButtonStyle,_defineProperty(_defineProperty(_defineProperty(_defineProperty({"border border-main text-main":!disabled&&!isLoading},sizeS,"s"===size),sizeM,"s"!==size),"text-black-20-opacity border-black-20-opacity pointer-events-none border",disabled||isLoading),"bg-main-bg",!disabled&&!isLoading&&isActive));return(0,jsx_runtime.jsxs)("button",_objectSpread(_objectSpread({ref,className:(0,cn.cn)(ButtonStyle,className)},props),{},{children:[(0,jsx_runtime.jsx)("div",{className:"absolute inset-0 bg-black opacity-0 transition-all group-hover:opacity-5 group-active:opacity-10"}),isLoading&&(0,jsx_runtime.jsx)(Spinner.y,{className:"absolute flex"}),icon&&(0,jsx_runtime.jsx)("div",{className:(0,cn.cn)("text-xl",isLoading?"opacity-0":"mr-1 flex"),children:(0,jsx_runtime.jsx)("span",{className:"material-symbols-rounded",children:icon})}),(0,jsx_runtime.jsx)("span",{className:(0,cn.cn)(isLoading&&"opacity-0"),children:label})]}))})),TextBaseButton=react.forwardRef((function(_ref3,ref){var label=_ref3.label,className=_ref3.className,variant=_ref3.variant,disabled=(_ref3.size,_ref3.disabled),isActive=_ref3.isActive,_ref3$isLoading=_ref3.isLoading,isLoading=void 0!==_ref3$isLoading&&_ref3$isLoading,icon=_ref3.icon,props=_objectWithoutProperties(_ref3,_excluded3),ButtonStyle=(0,cn.cn)(baseButtonStyle,[sizeS],{"text-main":"textPrimary"===variant,"text-black-sub":"textSecondary"===variant,"text-danger":"textDanger"===variant,"text-black-20-opacity border-black-20-opacity pointer-events-none":disabled||isLoading,"bg-main-bg text-main":!disabled&&!isLoading&&"textDanger"!==variant&&isActive});return(0,jsx_runtime.jsxs)("button",_objectSpread(_objectSpread({ref,className:(0,cn.cn)(ButtonStyle,className)},props),{},{children:[(0,jsx_runtime.jsx)("div",{className:"absolute inset-0 bg-black opacity-0 transition-all group-hover:opacity-5 group-active:opacity-10"}),isLoading&&(0,jsx_runtime.jsx)(Spinner.y,{className:"absolute flex"}),icon&&(0,jsx_runtime.jsx)("div",{className:(0,cn.cn)("text-xl",isLoading?"opacity-0":"mr-1 flex"),children:(0,jsx_runtime.jsx)("span",{className:"material-symbols-rounded",children:icon})}),(0,jsx_runtime.jsx)("span",{className:isLoading?"opacity-0":"underline underline-offset-4",children:label})]}))})),ButtonComponentMap={primary:ContainedBaseButton,secondary:OutlinedBaseButton,textPrimary:TextBaseButton,textSecondary:TextBaseButton,danger:ContainedBaseButton,textDanger:TextBaseButton},Button=react.forwardRef((function(_ref4,ref){var label=_ref4.label,className=_ref4.className,variant=_ref4.variant,size=_ref4.size,_ref4$isLoading=_ref4.isLoading,isLoading=void 0!==_ref4$isLoading&&_ref4$isLoading,disabled=_ref4.disabled,isActive=_ref4.isActive,icon=_ref4.icon,children=_ref4.children,props=_objectWithoutProperties(_ref4,_excluded4),Component=ButtonComponentMap[variant];return(0,jsx_runtime.jsx)(Component,_objectSpread({label,className,variant,size,children,disabled,isActive,isLoading,icon,ref},props))}));try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'},{value:'"textPrimary"'},{value:'"textSecondary"'},{value:'"textDanger"'}]}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/1-action/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/1-action/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/5-notification/Toast/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toast_stories});var cn=__webpack_require__("./src/utils/cn.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Toast=function Toast(_ref){var children=_ref.children,_ref$position=_ref.position,position=void 0===_ref$position?"top-right":_ref$position,className=(0,cn.cn)("absolute p-6 flex",{"flex-col-reverse":position.startsWith("top"),"top-0 left-0":"top-left"===position,"top-0 right-0":"top-right"===position,"top-0 left-1/2 -translate-x-1/2":"top-center"===position,"bottom-0 left-0":"bottom-left"===position,"bottom-0 right-0":"bottom-right"===position,"bottom-0 left-1/2 -translate-x-1/2":"bottom-center"===position});return(0,jsx_runtime.jsx)("div",{className,children})};Toast.displayName="Toast";try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{position:{defaultValue:{value:"top-right"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-center"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-center"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/5-notification/Toast/Toast.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/components/5-notification/Toast/Toast.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("./node_modules/react/index.js");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var ToastItem=function ToastItem(_ref){var id=_ref.id,_ref$type=_ref.type,type=void 0===_ref$type?"normal":_ref$type,_ref$message=_ref.message,message=void 0===_ref$message?"":_ref$message,children=_ref.children,_ref$autoDelete=_ref.autoDelete,autoDelete=void 0!==_ref$autoDelete&&_ref$autoDelete,_React$useState2=_slicedToArray(react.useState(!0),2),isVisible=_React$useState2[0],setIsVisible=_React$useState2[1],_React$useState4=_slicedToArray(react.useState(!0),2),isRender=_React$useState4[0],setIsRender=_React$useState4[1],toastStyle=(0,cn.cn)("m-2 flex w-[500px] items-center justify-between space-x-2 rounded-lg bg-white p-4 text-2xl shadow-high transition-all duration-300",{"border border-success text-success":"success"===type,"border border-danger text-danger":"error"===type,"animate-fadeSlideInTop":isVisible,"animate-fadeout":!0!==isVisible});return react.useEffect((function(){if(autoDelete){var timer=setTimeout((function(){console.log("setIsVisible"),setIsVisible(!1),setTimeout((function(){console.log("setIsRender"),setIsRender(!1)}),1e3)}),5e3);return function(){return clearTimeout(timer)}}}),[autoDelete]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:isRender&&(0,jsx_runtime.jsxs)("div",{id,className:toastStyle,children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center space-x-2",children:["normal"!==type&&(0,jsx_runtime.jsxs)("span",{className:"material-symbols-rounded icon-fill",children:["success"===type&&"check_circle","error"===type&&"emergency_home"]}),(0,jsx_runtime.jsx)("span",{className:"text-base font-medium text-black",children:message})]}),children]})})};ToastItem.displayName="ToastItem";try{ToastItem.displayName="ToastItem",ToastItem.__docgenInfo={description:"",displayName:"ToastItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:{value:"normal"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"success"'},{value:'"error"'}]}},message:{defaultValue:{value:""},description:"",name:"message",required:!1,type:{name:"string"}},autoDelete:{defaultValue:{value:"false"},description:"",name:"autoDelete",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/5-notification/Toast/ToastItem.tsx#ToastItem"]={docgenInfo:ToastItem.__docgenInfo,name:"ToastItem",path:"src/components/5-notification/Toast/ToastItem.tsx#ToastItem"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/1-action/Button/index.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const Toast_stories={title:"Components/Notification/Toast",component:Toast,tags:["autodocs"],parameters:{docs:{description:{component:"Toast(トースト/スナックバー)は、ユーザーに通知を行うコンポーネントです。"}}}};var Template={render:function render(args){return(0,jsx_runtime.jsxs)(Toast,_objectSpread(_objectSpread({},args),{},{children:[(0,jsx_runtime.jsx)(ToastItem,{id:"1",message:"1件 のお知らせがあります。",autoDelete:!1,children:(0,jsx_runtime.jsx)(Button.$,{variant:"textPrimary",label:"詳細"})}),(0,jsx_runtime.jsx)(ToastItem,{id:"2",message:"パスワードの有効期限が切れています。",type:"error",children:(0,jsx_runtime.jsx)(Button.$,{variant:"textPrimary",label:"設定"})}),(0,jsx_runtime.jsx)(ToastItem,{id:"3",message:"ログインが完了しました。",type:"success",autoDelete:!0})]}))}},Default=_objectSpread(_objectSpread({},Template),{},{args:{position:"top-center"},argTypes:{position:{control:{type:"radio",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]}}}});const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    position: "top-center"\n  },\n  argTypes: {\n    position: {\n      control: {\n        type: "radio",\n        options: ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"]\n      }\n    }\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/components/8-loading/Spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Spinner=function Spinner(_ref){var className=_ref.className;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"flex animate-spin items-center justify-center text-xl text-black-20-opacity",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"material-symbols-rounded",children:"progress_activity"})})})};try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/8-loading/Spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/8-loading/Spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/cn.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _toClassName=function toClassName(value){return"string"==typeof value?value:Array.isArray(value)?value.map(_toClassName).filter(Boolean).join(" "):"object"===_typeof(value)&&null!==value?Object.keys(value).filter((function(key){return value[key]})).join(" "):""};function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)(inputs.map(_toClassName).filter(Boolean).join(" "))}}}]);