"use strict";(self.webpackChunk_bxdc_components_library=self.webpackChunk_bxdc_components_library||[]).push([[33],{"./src/components/1-action/IconButton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>IconButton});var react=__webpack_require__("./node_modules/react/index.js"),cn=__webpack_require__("./src/utils/cn.ts"),Spinner=__webpack_require__("./src/components/8-loading/Spinner/Spinner.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["icon","checked","isLoading","disabled","className","size","onClick"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var IconButton=react.forwardRef((function(_ref,ref){var icon=_ref.icon,_ref$checked=_ref.checked,checked=void 0!==_ref$checked&&_ref$checked,_ref$isLoading=_ref.isLoading,isLoading=void 0!==_ref$isLoading&&_ref$isLoading,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,className=_ref.className,_ref$size=_ref.size,size=void 0===_ref$size?"s":_ref$size,onClick=_ref.onClick,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),_React$useState2=_slicedToArray(react.useState(checked||!1),2),toggleChecked=_React$useState2[0],setToggleChecked=_React$useState2[1];react.useEffect((function(){setToggleChecked(checked)}),[checked]);var IconButtonStyle=(0,cn.cn)("flex relative justify-center items-center hover:bg-black-5-opacity shrink-0 active:bg-black-10-opacity disabled:text-black-20-opacity disabled:pointer-events-none select-none transition-all focus-visible:bg-black-5-opacity",{"text-2xl w-9 h-9 rounded-lg text-main":"m"===size,"text-lg disabled:text-black-20-opacity w-7 h-7 rounded-md text-black-sub":"m"!==size,"text-black-20-opacity pointer-events-none":disabled||isLoading,"text-main":!isLoading&&toggleChecked,"text-black-sub":!isLoading&&!toggleChecked});return(0,jsx_runtime.jsx)("div",{className,children:(0,jsx_runtime.jsxs)("button",_objectSpread(_objectSpread({ref,className:(0,cn.cn)(IconButtonStyle),onClick:function handleClick(){setToggleChecked((function(prev){return!prev})),onClick&&onClick()},"aria-checked":toggleChecked,disabled:disabled||isLoading},props),{},{children:[isLoading&&(0,jsx_runtime.jsx)(Spinner.y,{className:"absolute flex"}),(0,jsx_runtime.jsx)("span",{className:(0,cn.cn)("material-symbols-rounded",isLoading&&"opacity-0",toggleChecked&&"icon-fill"),children:icon})]}))})}));IconButton.displayName="IconButton";try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"s"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/1-action/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/1-action/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/6-navigation/Sidebar/Sidebar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Sidebar_stories});var react=__webpack_require__("./node_modules/react/index.js"),IconButton=__webpack_require__("./src/components/1-action/IconButton/index.ts"),cn=__webpack_require__("./src/utils/cn.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var Sidebar=function Sidebar(_ref){var id=_ref.id,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,children=_ref.children,_ref$type=_ref.type,type=void 0===_ref$type?"fixed":_ref$type,_ref$defaultShow=_ref.defaultShow,defaultShow=void 0===_ref$defaultShow||_ref$defaultShow,headerItem=_ref.headerItem,onShowChange=_ref.onShowChange,_React$useState2=_slicedToArray(react.useState(defaultShow),2),show=_React$useState2[0],setShow=_React$useState2[1],handleShowChange=function handleShowChange(show){setShow(show),onShowChange&&onShowChange(show)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["drawer"===type&&(0,jsx_runtime.jsx)(IconButton.K,{id:"sidebar",icon:"menu",onClick:function onClick(){return handleShowChange(!0)},className:"fixed left-4 top-4"}),(0,jsx_runtime.jsx)("nav",{id,className,children:(0,jsx_runtime.jsxs)("div",{className:(0,cn.cn)("fixed left-0 top-0 z-50 block h-screen w-[240px] overflow-y-scroll bg-white shadow-high transition-all duration-300",show?"translate-x-0":"-translate-x-full shadow-none"),children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center",children:[headerItem&&(0,jsx_runtime.jsx)("div",{className:"m-4 w-full overflow-hidden",children:headerItem}),"drawer"===type&&(0,jsx_runtime.jsx)(IconButton.K,{id:"sidebarClose",icon:"keyboard_double_arrow_left",className:"m-4 ml-auto",onClick:function onClick(){return handleShowChange(!1)}})]}),(0,jsx_runtime.jsx)("ul",{children})]})})]})};Sidebar.displayName="Sidebar";try{Sidebar.displayName="Sidebar",Sidebar.__docgenInfo={description:"",displayName:"Sidebar",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"fixed"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"drawer"'}]}},defaultShow:{defaultValue:{value:"true"},description:"",name:"defaultShow",required:!1,type:{name:"boolean"}},headerItem:{defaultValue:null,description:"",name:"headerItem",required:!1,type:{name:"ReactNode"}},onShowChange:{defaultValue:null,description:"",name:"onShowChange",required:!1,type:{name:"((show: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/6-navigation/Sidebar/Sidebar.tsx#Sidebar"]={docgenInfo:Sidebar.__docgenInfo,name:"Sidebar",path:"src/components/6-navigation/Sidebar/Sidebar.tsx#Sidebar"})}catch(__react_docgen_typescript_loader_error){}var SidebarItem=function SidebarItem(_ref){var id=_ref.id,className=_ref.className,icon=_ref.icon,label=_ref.label,_ref$selected=_ref.selected,selected=void 0!==_ref$selected&&_ref$selected,onClick=_ref.onClick,href=_ref.href,itemStyle=selected?"bg-main-bg hover:bg-main-bg text-main border-main border-l-4 pl-3 pr-4":"hover:bg-black-3-opacity text-black-sub focus-visible:bg-black-3-opacity px-4";return(0,jsx_runtime.jsx)("li",{className:(0,cn.cn)(className,"list-none"),children:(0,jsx_runtime.jsxs)("a",{id,href,role:"menuitem","aria-selected":selected,className:(0,cn.cn)("flex h-[56px] w-full cursor-pointer items-center space-x-2 text-2xl transition-all focus-visible:-outline-offset-1",itemStyle),onClick,children:[icon&&(0,jsx_runtime.jsx)("span",{className:"material-symbols-rounded select-none",children:icon}),label&&(0,jsx_runtime.jsxs)("span",{className:"text-lg font-bold",children:[" ",label]})]})})};SidebarItem.displayName="SidebarItem";try{SidebarItem.displayName="SidebarItem",SidebarItem.__docgenInfo={description:"",displayName:"SidebarItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/6-navigation/Sidebar/SidebarItem.tsx#SidebarItem"]={docgenInfo:SidebarItem.__docgenInfo,name:"SidebarItem",path:"src/components/6-navigation/Sidebar/SidebarItem.tsx#SidebarItem"})}catch(__react_docgen_typescript_loader_error){}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const Sidebar_stories={title:"Components/Navigation/Sidebar",component:Sidebar,tags:["autodocs"],parameters:{docs:{description:{component:"Sidebarは、ナビゲーションとして使用される縦長のリストです。"}}}};var Template={render:function render(args){return(0,jsx_runtime.jsxs)(Sidebar,_objectSpread(_objectSpread({},args),{},{children:[(0,jsx_runtime.jsx)(SidebarItem,{icon:"home",id:"home",href:"",label:"ホーム",selected:!0}),(0,jsx_runtime.jsx)(SidebarItem,{icon:"mail",id:"notification",href:"",label:"お知らせ"}),(0,jsx_runtime.jsx)(SidebarItem,{icon:"task_alt",id:"mytask",href:"",label:"タスク"}),(0,jsx_runtime.jsx)(SidebarItem,{icon:"description",id:"mydoc",href:"",label:"ドキュメント"})]}))}},Default=_objectSpread(_objectSpread({},Template),{},{args:{id:"1",type:"drawer",headerItem:(0,jsx_runtime.jsx)("span",{children:"山田 太郎"})},argTypes:{type:{control:{type:"radio",options:["fixed","drawer"]}}}});const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    id: "1",\n    type: "drawer",\n    headerItem: <span>山田 太郎</span>\n  },\n  argTypes: {\n    type: {\n      control: {\n        type: "radio",\n        options: ["fixed", "drawer"]\n      }\n    }\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/components/8-loading/Spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Spinner=function Spinner(_ref){var className=_ref.className;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"flex animate-spin items-center justify-center text-xl text-black-20-opacity",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"material-symbols-rounded",children:"progress_activity"})})})};try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/8-loading/Spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/8-loading/Spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/cn.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _toClassName=function toClassName(value){return"string"==typeof value?value:Array.isArray(value)?value.map(_toClassName).filter(Boolean).join(" "):"object"===_typeof(value)&&null!==value?Object.keys(value).filter((function(key){return value[key]})).join(" "):""};function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)(inputs.map(_toClassName).filter(Boolean).join(" "))}}}]);