"use strict";(self.webpackChunkvite_project=self.webpackChunkvite_project||[]).push([[477],{"./src/components/4-List/Accordion/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Accordion_stories});var react=__webpack_require__("./node_modules/react/index.js"),cn=__webpack_require__("./src/utils/cn.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var Accordion=function Accordion(_ref){var id=_ref.id,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$label=_ref.label,label=void 0===_ref$label?"":_ref$label,children=_ref.children,_React$useState2=_slicedToArray(react.useState(!1),2),isOpen=_React$useState2[0],setIsOpen=_React$useState2[1];return(0,jsx_runtime.jsx)("div",{id,className,children:(0,jsx_runtime.jsxs)("div",{className:"relative flex w-full cursor-pointer list-none flex-col text-base",children:[(0,jsx_runtime.jsxs)("button",{onClick:function onClick(){return function toggleAccordion(Open){setIsOpen(Open)}(!isOpen)},className:"flex h-[40px] w-full items-center justify-between p-2 hover:bg-black-3-opacity","aria-expanded":isOpen,children:[(0,jsx_runtime.jsx)("span",{className:"truncate",children:label}),(0,jsx_runtime.jsx)("span",{className:(0,cn.cn)("material-symbols-rounded ml-1 flex select-none text-black-sub transition-all duration-300",isOpen?"-rotate-180":"rotate-0"),children:"expand_more"})]}),(0,jsx_runtime.jsx)("div",{className:(0,cn.cn)("transition-max-height overflow-hidden transition-all duration-300",isOpen?"max-h-screen":"max-h-0"),children})]})})};Accordion.displayName="Accordion";try{Accordion.displayName="Accordion",Accordion.__docgenInfo={description:"",displayName:"Accordion",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/4-List/Accordion/Accordion.tsx#Accordion"]={docgenInfo:Accordion.__docgenInfo,name:"Accordion",path:"src/components/4-List/Accordion/Accordion.tsx#Accordion"})}catch(__react_docgen_typescript_loader_error){}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const Accordion_stories={title:"Components/List/Accordion",component:Accordion,tags:["autodocs"],parameters:{docs:{description:{component:"Accordionは、開閉できるリストのコンポーネントです。"}}}};var Template={render:function render(args){return(0,jsx_runtime.jsxs)("div",{className:"w-[240px] border border-black-5-opacity",children:[(0,jsx_runtime.jsx)(Accordion,{id:"1",label:"NEWS"}),(0,jsx_runtime.jsx)(Accordion,{id:"1",label:"製品情報",children:(0,jsx_runtime.jsxs)("ul",{className:"p-2 pl-4 text-black-sub",children:[(0,jsx_runtime.jsx)("p",{children:"BX1シリーズ"}),(0,jsx_runtime.jsx)("p",{children:"DCシリーズ"})]})}),(0,jsx_runtime.jsx)(Accordion,_objectSpread(_objectSpread({},args),{},{children:(0,jsx_runtime.jsxs)("ul",{className:"p-2 pl-4 text-black-sub",children:[(0,jsx_runtime.jsx)("li",{children:"会社概要・企業理念"}),(0,jsx_runtime.jsx)("li",{children:"沿革"}),(0,jsx_runtime.jsx)("li",{children:"役員・組織"}),(0,jsx_runtime.jsx)("li",{children:"採用情報"}),(0,jsx_runtime.jsx)("li",{children:"アクセス"})]})})),(0,jsx_runtime.jsx)(Accordion,{id:"1",label:"お問い合わせ",children:(0,jsx_runtime.jsxs)("div",{className:"p-2 pl-4 text-black-sub",children:[(0,jsx_runtime.jsx)("p",{children:"電話番号 000-0000-0000"}),(0,jsx_runtime.jsx)("p",{children:"メール sample@mail.com"})]})})]})}},Default=_objectSpread(_objectSpread({},Template),{},{args:{id:"2",label:"会社概要"}});const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    id: "2",\n    label: "会社概要"\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/utils/cn.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _toClassName=function toClassName(value){return"string"==typeof value?value:Array.isArray(value)?value.map(_toClassName).filter(Boolean).join(" "):"object"===_typeof(value)&&null!==value?Object.keys(value).filter((function(key){return value[key]})).join(" "):""};function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)(inputs.map(_toClassName).filter(Boolean).join(" "))}}}]);