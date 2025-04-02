"use strict";(self.webpackChunk_bxdc_components_library=self.webpackChunk_bxdc_components_library||[]).push([[158],{"./src/components/3-selection/Radio/Radio.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Radio_stories});var react=__webpack_require__("./node_modules/react/index.js"),cn=__webpack_require__("./src/utils/cn.ts"),Form=__webpack_require__("./src/components/2-input/Form/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["id","className","value","children","isValid","disabled","onChange","options"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var Radio=react.forwardRef((function(_ref,ref){var id=_ref.id,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,value=_ref.value,_ref$isValid=(_ref.children,_ref.isValid),isValid=void 0===_ref$isValid||_ref$isValid,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,onChange=_ref.onChange,_ref$options=_ref.options,options=void 0===_ref$options?[]:_ref$options,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),context=(0,Form.xW)(),formData=(null==context?void 0:context.formData)||{},errors=(null==context?void 0:context.errors)||{},handleInputChange=(null==context?void 0:context.handleInputChange)||function(){},_React$useState2=_slicedToArray(react.useState(formData[id]||value),2),selected=_React$useState2[0],setSelected=_React$useState2[1],isValidStatus=isValid||null==errors[id],radioStyle=(0,cn.cn)("flex flex-col ",{"text-black-20-opacity pointer-events-none":disabled,"cursor-pointer":!disabled,"text-danger":!disabled&&!isValidStatus});return(0,jsx_runtime.jsx)("div",_objectSpread(_objectSpread({id,ref,role:"group","aria-labelledby":id,"aria-invalid":!isValidStatus,"aria-disabled":disabled,className},props),{},{children:(0,jsx_runtime.jsx)("div",{className:radioStyle,children:options.map((function(option,index){var isSelected=selected===option.value;return(0,jsx_runtime.jsxs)("button",{type:"button",role:"radio","aria-selected":isSelected,"aria-label":option.label,className:(0,cn.cn)("group flex items-center rounded-lg p-2",!isSelected&&"text-black-sub"),onClick:function onClick(){return function handleChange(newValue){onChange&&onChange(newValue),setSelected(newValue),handleInputChange&&handleInputChange(id,newValue)}(option.value)},children:[(0,jsx_runtime.jsx)("div",{className:(0,cn.cn)("flex w-7 select-none items-center justify-center rounded-full text-2xl transition-all group-hover:bg-black-5-opacity"),children:(0,jsx_runtime.jsx)("span",{className:"material-symbols-rounded",children:(0,jsx_runtime.jsx)("span",{className:(0,cn.cn)(isSelected&&"text-main"),children:isSelected?"radio_button_checked":"radio_button_unchecked"})})}),(0,jsx_runtime.jsxs)("div",{className:"ml-1 flex h-full w-full text-base",children:[option.label,option.children]})]},index)}))})}))}));Radio.displayName="Radio";try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"{ label: string; value: string; children?: ReactNode; }[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/3-selection/Radio/Radio.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"src/components/3-selection/Radio/Radio.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}var _0_common=__webpack_require__("./src/components/0-common/index.ts");function Radio_stories_typeof(o){return Radio_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Radio_stories_typeof(o)}function Radio_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Radio_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Radio_stories_ownKeys(Object(t),!0).forEach((function(r){Radio_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Radio_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Radio_stories_defineProperty(e,r,t){return(r=function Radio_stories_toPropertyKey(t){var i=function Radio_stories_toPrimitive(t,r){if("object"!=Radio_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=Radio_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==Radio_stories_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Radio_stories_slicedToArray(r,e){return function Radio_stories_arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function Radio_stories_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function Radio_stories_unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return Radio_stories_arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Radio_stories_arrayLikeToArray(r,a):void 0}}(r,e)||function Radio_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Radio_stories_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}const Radio_stories={title:"Components/Selection/Radio",component:Radio,tags:["autodocs"],parameters:{docs:{description:{component:"Radioは、複数の選択肢から1つだけを選択させるためのコンポーネントです。"}}}};var Template={render:function render(args){var _React$useState2=Radio_stories_slicedToArray(react.useState(args.value),2),value=_React$useState2[0],setValue=_React$useState2[1];return console.log(value),react.useEffect((function(){setValue(args.value)}),[args.value]),(0,jsx_runtime.jsx)(_0_common.W2,{id:"1",label:"ご希望の配送方法",isRequired:!0,children:(0,jsx_runtime.jsx)(Radio,Radio_stories_objectSpread({},args))})}},Default=Radio_stories_objectSpread(Radio_stories_objectSpread({},Template),{},{args:{options:[{label:"通常配送",value:"1",children:(0,jsx_runtime.jsx)("span",{className:"ml-auto flex items-center text-sm",children:"3~5営業日でお届け"})},{label:"速達",value:"2",children:(0,jsx_runtime.jsx)("span",{className:"ml-auto flex items-center text-sm",children:"1~2営業日でお届け"})},{label:"店舗受け取り",value:"3",children:(0,jsx_runtime.jsx)("span",{className:"ml-auto flex items-center text-sm",children:"2~3営業日でお届け"})}],className:"w-[272px]"}});const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    options: [{\n      label: "通常配送",\n      value: "1",\n      children: <span className="ml-auto flex items-center text-sm">\n            3~5営業日でお届け\n          </span>\n    }, {\n      label: "速達",\n      value: "2",\n      children: <span className="ml-auto flex items-center text-sm">\n            1~2営業日でお届け\n          </span>\n    }, {\n      label: "店舗受け取り",\n      value: "3",\n      children: <span className="ml-auto flex items-center text-sm">\n            2~3営業日でお届け\n          </span>\n    }],\n    className: "w-[272px]"\n  }\n}',...Default.parameters?.docs?.source}}}}}]);