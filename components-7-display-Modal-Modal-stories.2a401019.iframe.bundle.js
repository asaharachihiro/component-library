/*! For license information please see components-7-display-Modal-Modal-stories.2a401019.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_asaharachihiro_components_library=self.webpackChunk_asaharachihiro_components_library||[]).push([[846],{"./src/components/1-action/Button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),cn=__webpack_require__("./src/utils/cn.ts"),Spinner=__webpack_require__("./src/components/8-loading/Spinner/Spinner.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["label","className","variant","size","disabled","isActive","isLoading","icon"],_excluded2=["label","className","variant","size","disabled","isActive","isLoading","icon"],_excluded3=["label","className","variant","size","disabled","isActive","isLoading","icon"],_excluded4=["label","className","variant","size","isLoading","disabled","isActive","icon","children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var baseButtonStyle="flex items-center justify-center font-bold cursor-pointer relative overflow-hidden group shrink-0",sizeS="h-7 px-2 text-sm rounded-md min-w-12",sizeM="h-9 px-6 text-base rounded-lg",ContainedBaseButton=react.forwardRef((function(_ref,ref){var label=_ref.label,className=_ref.className,variant=_ref.variant,_ref$size=_ref.size,size=void 0===_ref$size?"m":_ref$size,disabled=_ref.disabled,_ref$isLoading=(_ref.isActive,_ref.isLoading),isLoading=void 0!==_ref$isLoading&&_ref$isLoading,icon=_ref.icon,props=_objectWithoutProperties(_ref,_excluded),ButtonStyle=(0,cn.cn)(baseButtonStyle,_defineProperty(_defineProperty(_defineProperty({"bg-main text-white":!disabled&&!isLoading&&"primary"===variant,"bg-danger text-white":!disabled&&!isLoading&&"danger"===variant},sizeM,"danger"==variant||"s"!==size),sizeS,"s"===size&&"danger"!==variant),"bg-black-5-opacity text-black-20-opacity border-black-20-opacity pointer-events-none",disabled||isLoading));return(0,jsx_runtime.jsxs)("button",_objectSpread(_objectSpread({ref,className:(0,cn.cn)(ButtonStyle,className)},props),{},{children:[(0,jsx_runtime.jsx)("div",{className:"absolute bg-black opacity-0 transition-all group-hover:opacity-5 group-active:opacity-10"}),isLoading&&(0,jsx_runtime.jsx)(Spinner.y,{className:"absolute flex"}),icon&&(0,jsx_runtime.jsx)("div",{className:(0,cn.cn)("text-xl",isLoading?"opacity-0":"mr-1 flex"),children:(0,jsx_runtime.jsx)("span",{className:"material-symbols-rounded",children:icon})}),(0,jsx_runtime.jsx)("span",{className:(0,cn.cn)(isLoading&&"opacity-0"),children:label})]}))})),OutlinedBaseButton=react.forwardRef((function(_ref2,ref){var label=_ref2.label,className=_ref2.className,_ref2$size=(_ref2.variant,_ref2.size),size=void 0===_ref2$size?"m":_ref2$size,disabled=_ref2.disabled,isActive=_ref2.isActive,_ref2$isLoading=_ref2.isLoading,isLoading=void 0!==_ref2$isLoading&&_ref2$isLoading,icon=_ref2.icon,props=_objectWithoutProperties(_ref2,_excluded2),ButtonStyle=(0,cn.cn)(baseButtonStyle,_defineProperty(_defineProperty(_defineProperty(_defineProperty({"border border-main text-main":!disabled&&!isLoading},sizeS,"s"===size),sizeM,"s"!==size),"text-black-20-opacity border-black-20-opacity pointer-events-none border",disabled||isLoading),"bg-main-bg",!disabled&&!isLoading&&isActive));return(0,jsx_runtime.jsxs)("button",_objectSpread(_objectSpread({ref,className:(0,cn.cn)(ButtonStyle,className)},props),{},{children:[(0,jsx_runtime.jsx)("div",{className:"absolute inset-0 bg-black opacity-0 transition-all group-hover:opacity-5 group-active:opacity-10"}),isLoading&&(0,jsx_runtime.jsx)(Spinner.y,{className:"absolute flex"}),icon&&(0,jsx_runtime.jsx)("div",{className:(0,cn.cn)("text-xl",isLoading?"opacity-0":"mr-1 flex"),children:(0,jsx_runtime.jsx)("span",{className:"material-symbols-rounded",children:icon})}),(0,jsx_runtime.jsx)("span",{className:(0,cn.cn)(isLoading&&"opacity-0"),children:label})]}))})),TextBaseButton=react.forwardRef((function(_ref3,ref){var label=_ref3.label,className=_ref3.className,variant=_ref3.variant,disabled=(_ref3.size,_ref3.disabled),isActive=_ref3.isActive,_ref3$isLoading=_ref3.isLoading,isLoading=void 0!==_ref3$isLoading&&_ref3$isLoading,icon=_ref3.icon,props=_objectWithoutProperties(_ref3,_excluded3),ButtonStyle=(0,cn.cn)(baseButtonStyle,[sizeS],{"text-main":"textPrimary"===variant,"text-black-sub":"textSecondary"===variant,"text-danger":"textDanger"===variant,"text-black-20-opacity border-black-20-opacity pointer-events-none":disabled||isLoading,"bg-main-bg text-main":!disabled&&!isLoading&&"textDanger"!==variant&&isActive});return(0,jsx_runtime.jsxs)("button",_objectSpread(_objectSpread({ref,className:(0,cn.cn)(ButtonStyle,className)},props),{},{children:[(0,jsx_runtime.jsx)("div",{className:"absolute inset-0 bg-black opacity-0 transition-all group-hover:opacity-5 group-active:opacity-10"}),isLoading&&(0,jsx_runtime.jsx)(Spinner.y,{className:"absolute flex"}),icon&&(0,jsx_runtime.jsx)("div",{className:(0,cn.cn)("text-xl",isLoading?"opacity-0":"mr-1 flex"),children:(0,jsx_runtime.jsx)("span",{className:"material-symbols-rounded",children:icon})}),(0,jsx_runtime.jsx)("span",{className:isLoading?"opacity-0":"underline underline-offset-4",children:label})]}))})),ButtonComponentMap={primary:ContainedBaseButton,secondary:OutlinedBaseButton,textPrimary:TextBaseButton,textSecondary:TextBaseButton,danger:ContainedBaseButton,textDanger:TextBaseButton},Button=react.forwardRef((function(_ref4,ref){var label=_ref4.label,className=_ref4.className,variant=_ref4.variant,size=_ref4.size,_ref4$isLoading=_ref4.isLoading,isLoading=void 0!==_ref4$isLoading&&_ref4$isLoading,disabled=_ref4.disabled,isActive=_ref4.isActive,icon=_ref4.icon,children=_ref4.children,props=_objectWithoutProperties(_ref4,_excluded4),Component=ButtonComponentMap[variant];return(0,jsx_runtime.jsx)(Component,_objectSpread({label,className,variant,size,children,disabled,isActive,isLoading,icon,ref},props))}));try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'},{value:'"textPrimary"'},{value:'"textSecondary"'},{value:'"textDanger"'}]}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/1-action/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/1-action/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/1-action/IconButton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>IconButton});var react=__webpack_require__("./node_modules/react/index.js"),cn=__webpack_require__("./src/utils/cn.ts"),Spinner=__webpack_require__("./src/components/8-loading/Spinner/Spinner.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["icon","checked","isLoading","disabled","className","size","onClick"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var IconButton=react.forwardRef((function(_ref,ref){var icon=_ref.icon,_ref$checked=_ref.checked,checked=void 0!==_ref$checked&&_ref$checked,_ref$isLoading=_ref.isLoading,isLoading=void 0!==_ref$isLoading&&_ref$isLoading,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,className=_ref.className,_ref$size=_ref.size,size=void 0===_ref$size?"s":_ref$size,onClick=_ref.onClick,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),_React$useState2=_slicedToArray(react.useState(checked||!1),2),toggleChecked=_React$useState2[0],setToggleChecked=_React$useState2[1];react.useEffect((function(){setToggleChecked(checked)}),[checked]);var IconButtonStyle=(0,cn.cn)("flex relative justify-center items-center hover:bg-black-5-opacity shrink-0 active:bg-black-10-opacity disabled:text-black-20-opacity disabled:pointer-events-none select-none transition-all focus-visible:bg-black-5-opacity",{"text-2xl w-9 h-9 rounded-lg text-main":"m"===size,"text-lg disabled:text-black-20-opacity w-7 h-7 rounded-md text-black-sub":"m"!==size,"text-black-20-opacity pointer-events-none":disabled||isLoading,"text-main":!isLoading&&toggleChecked,"text-black-sub":!isLoading&&!toggleChecked});return(0,jsx_runtime.jsx)("div",{className,children:(0,jsx_runtime.jsxs)("button",_objectSpread(_objectSpread({ref,className:(0,cn.cn)(IconButtonStyle),onClick:function handleClick(){setToggleChecked((function(prev){return!prev})),onClick&&onClick()},"aria-checked":toggleChecked,disabled:disabled||isLoading},props),{},{children:[isLoading&&(0,jsx_runtime.jsx)(Spinner.y,{className:"absolute flex"}),(0,jsx_runtime.jsx)("span",{className:(0,cn.cn)("material-symbols-rounded",isLoading&&"opacity-0",toggleChecked&&"icon-fill"),children:icon})]}))})}));IconButton.displayName="IconButton";try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"s"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/1-action/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/1-action/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/2-input/TextBox/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>TextBox});var react=__webpack_require__("./node_modules/react/index.js"),_0_common=__webpack_require__("./src/components/0-common/index.ts"),FormContext=__webpack_require__("./src/components/2-input/Form/FormContext.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["label","id","type","isRequired","className","placeholder","supportMessage","errorMessage","value","onChange","onBlur","onFocus","isValid","disabled"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var TextBox=react.forwardRef((function(_ref,ref){var label=_ref.label,id=_ref.id,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,_ref$isRequired=_ref.isRequired,isRequired=void 0!==_ref$isRequired&&_ref$isRequired,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,placeholder=_ref.placeholder,supportMessage=_ref.supportMessage,errorMessage=_ref.errorMessage,value=_ref.value,onChange=_ref.onChange,onBlur=_ref.onBlur,onFocus=_ref.onFocus,isValid=_ref.isValid,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),context=(0,FormContext.x)(),formData=(null==context?void 0:context.formData)||{},errors=(null==context?void 0:context.errors)||{},handleInputChange=(null==context?void 0:context.handleInputChange)||function(){},isValidStatus=isValid||null==errors[id],_React$useState2=_slicedToArray(react.useState(formData[id]||value||""),2),inputValue=_React$useState2[0],setInputValue=_React$useState2[1];react.useEffect((function(){void 0===value&&void 0===formData[id]||setInputValue(formData[id]||value||"")}),[formData[id],value]);var handleChange=function handleChange(newValue){setInputValue(newValue),context&&handleInputChange(id,newValue),onChange&&onChange(id,newValue)};return(0,jsx_runtime.jsxs)("div",{className,children:[label&&(0,jsx_runtime.jsx)(_0_common.lR,{label,isRequired}),(0,jsx_runtime.jsx)(_0_common.cl,_objectSpread({id,value:inputValue,type,isValid:isValidStatus,disabled,onChange:function onChange(e){return handleChange(e.target.value)},onBlur,onFocus,placeholder,ref,asTextArea:"textArea"===type},props)),supportMessage&&(0,jsx_runtime.jsx)("span",{className:"text-xs text-black-sub",children:supportMessage}),!isValidStatus&&(0,jsx_runtime.jsx)(_0_common.yn,{text:errors[id]||errorMessage||"入力がエラーになっています。"})]})}));TextBox.displayName="TextBox";try{TextBox.displayName="TextBox",TextBox.__docgenInfo={description:"",displayName:"TextBox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"textArea"'}]}},isRequired:{defaultValue:{value:"false"},description:"",name:"isRequired",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},supportMessage:{defaultValue:null,description:"",name:"supportMessage",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:null,description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((id: string, value: string) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((id: string, value: string) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((id: string, value: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/2-input/TextBox/TextBox.tsx#TextBox"]={docgenInfo:TextBox.__docgenInfo,name:"TextBox",path:"src/components/2-input/TextBox/TextBox.tsx#TextBox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/7-display/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var react=__webpack_require__("./node_modules/react/index.js"),useClickOutside=__webpack_require__("./src/utils/useClickOutside.ts"),cn=__webpack_require__("./src/utils/cn.ts"),IconButton=__webpack_require__("./src/components/1-action/IconButton/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}var Modal=function Modal(_ref){var id=_ref.id,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,title=_ref.title,isOpen=_ref.isOpen,onClose=_ref.onClose,onBeforeClose=_ref.onBeforeClose,children=_ref.children,_ref$isDeletable=_ref.isDeletable,isDeletable=void 0===_ref$isDeletable||_ref$isDeletable,confirmButton=_ref.confirmButton,modalRef=react.useRef(null),handleOutsideClick=function(){var _ref2=function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!onBeforeClose){_context.next=6;break}return _context.next=3,onBeforeClose();case 3:if(_context.sent){_context.next=6;break}return _context.abrupt("return");case 6:onClose();case 7:case"end":return _context.stop()}}),_callee)})));return function handleOutsideClick(){return _ref2.apply(this,arguments)}}();return(0,useClickOutside.L)(modalRef,handleOutsideClick),isOpen?(0,jsx_runtime.jsx)("div",{className:(0,cn.cn)("fixed inset-0 z-50 flex items-center justify-center bg-black-overlay transition-all duration-300",isOpen?"animate-fadeIn":"animate-fadeOut"),onClick:handleOutsideClick,children:(0,jsx_runtime.jsxs)("div",{id,ref:modalRef,className:(0,cn.cn)("shadow-lg relative z-50 overflow-auto rounded-lg bg-white shadow-high",isOpen?"animate-fadeIn":"animate-fadeOut",className),onClick:function onClick(e){return e.stopPropagation()},children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{className:"flex justify-between p-6 pb-0",children:[(0,jsx_runtime.jsx)("span",{className:"text-lg font-bold",children:title}),isDeletable&&(0,jsx_runtime.jsx)(IconButton.K,{id:"closeModal",onClick:handleOutsideClick,icon:"close","aria-label":"closeModal"})]}),(0,jsx_runtime.jsx)("div",{className:"p-6",children}),(0,jsx_runtime.jsx)("div",{id,className})]}),confirmButton&&(0,jsx_runtime.jsx)("div",{className:"sticky bottom-0 flex w-full justify-end space-x-4 rounded-b-lg border-t border-black-20-opacity bg-white p-4",children:confirmButton})]})}):null};Modal.displayName="Modal";try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onBeforeClose:{defaultValue:null,description:"",name:"onBeforeClose",required:!1,type:{name:"(() => Promise<boolean>)"}},isDeletable:{defaultValue:{value:"true"},description:"",name:"isDeletable",required:!1,type:{name:"boolean"}},confirmButton:{defaultValue:null,description:"",name:"confirmButton",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/7-display/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/7-display/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/1-action/Button/index.ts"),TextBox=__webpack_require__("./src/components/2-input/TextBox/index.ts");function Modal_stories_typeof(o){return Modal_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Modal_stories_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=Modal_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=Modal_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==Modal_stories_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const Modal_stories={title:"Components/Display/Modal",component:Modal,tags:["autodocs"],parameters:{docs:{description:{component:"Modalは、ユーザーのアクションを制限するための表示形式です。"}}}};var Template={render:function render(args){return(0,jsx_runtime.jsx)("div",{className:"p-8",children:(0,jsx_runtime.jsxs)(Modal,_objectSpread(_objectSpread({},args),{},{children:[(0,jsx_runtime.jsxs)("div",{className:"mb-6 space-y-4",children:[(0,jsx_runtime.jsx)(TextBox.f,{id:"email",placeholder:"sample@email.com",label:"メールアドレス"}),(0,jsx_runtime.jsx)(TextBox.f,{id:"password",placeholder:"パスワード",label:"パスワード"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex justify-end space-x-4",children:[(0,jsx_runtime.jsx)(Button.$,{variant:"textSecondary",label:"キャンセル"}),(0,jsx_runtime.jsx)(Button.$,{variant:"primary",label:"ログイン"})]})]}))})}},Default=_objectSpread(_objectSpread({},Template),{},{args:{id:"1",title:"ログイン",isDeletable:!1,className:"w-[360px]",isOpen:!0,onClose:function onClose(){}}});const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    id: "1",\n    title: "ログイン",\n    isDeletable: false,\n    className: "w-[360px]",\n    isOpen: true,\n    onClose: () => {}\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/components/8-loading/Spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Spinner=function Spinner(_ref){var className=_ref.className;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"flex animate-spin items-center justify-center text-xl text-black-20-opacity",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"material-symbols-rounded",children:"progress_activity"})})})};try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/8-loading/Spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/8-loading/Spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/useClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useClickOutside=function useClickOutside(ref,callback){react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){var handleClickOutside=function handleClickOutside(event){ref.current&&!ref.current.contains(event.target)&&callback()};return document.addEventListener("mousedown",handleClickOutside),function(){document.removeEventListener("mousedown",handleClickOutside)}}),[ref,callback])}}}]);