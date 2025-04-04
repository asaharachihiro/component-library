"use strict";(self.webpackChunk_asaharachihiro_components_library=self.webpackChunk_asaharachihiro_components_library||[]).push([[170],{"./src/components/3-selection/SelectBox/SelectBox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/3-selection/SelectBox/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Selection/SelectBox",component:___WEBPACK_IMPORTED_MODULE_0__.a,tags:["autodocs"],parameters:{docs:{description:{component:"SelectBoxは、複数の選択肢を提供するコンポーネントです。"}}}};var Template={render:function render(args){var _React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(args.value),2),selectedValue=_React$useState2[0],setSelectedValue=_React$useState2[1];return react__WEBPACK_IMPORTED_MODULE_1__.useEffect((function(){setSelectedValue(args.value)}),[args.value]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_0__.a,_objectSpread(_objectSpread({},args),{},{value:selectedValue,onChange:setSelectedValue}))}},Default=_objectSpread(_objectSpread({},Template),{},{args:{options:[{value:"1",label:"学生"},{value:"2",label:"会社員"},{value:"3",label:"自営業"},{value:"4",label:"パート・アルバイト"},{value:"6",label:"その他"}],label:"職業",placeholder:"職業を選択",value:"none",hasDefaultOption:!0}});const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    options: [{\n      value: "1",\n      label: "学生"\n    }, {\n      value: "2",\n      label: "会社員"\n    }, {\n      value: "3",\n      label: "自営業"\n    }, {\n      value: "4",\n      label: "パート・アルバイト"\n    }, {\n      value: "6",\n      label: "その他"\n    }],\n    label: "職業",\n    placeholder: "職業を選択",\n    value: "none",\n    hasDefaultOption: true\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/components/3-selection/SelectBox/SelectBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>SelectBox});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_cn__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/cn.ts"),_0_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/0-common/index.ts"),_2_input_Form__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/2-input/Form/index.ts"),_utils_useClickOutside__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/useClickOutside.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var SelectBox=function SelectBox(_ref){var id=_ref.id,options=_ref.options,label=_ref.label,_ref$placeholder=_ref.placeholder,placeholder=void 0===_ref$placeholder?"未選択":_ref$placeholder,value=_ref.value,_ref$isRequired=_ref.isRequired,isRequired=void 0!==_ref$isRequired&&_ref$isRequired,_ref$isValid=_ref.isValid,isValid=void 0===_ref$isValid||_ref$isValid,_ref$size=_ref.size,size=void 0===_ref$size?"m":_ref$size,onChange=_ref.onChange,supportMessage=_ref.supportMessage,errorMessage=_ref.errorMessage,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$hasDefaultOption=_ref.hasDefaultOption,hasDefaultOption=void 0!==_ref$hasDefaultOption&&_ref$hasDefaultOption,context=(0,_2_input_Form__WEBPACK_IMPORTED_MODULE_2__.xW)(),formData=(null==context?void 0:context.formData)||{},errors=(null==context?void 0:context.errors)||{},handleInputChange=(null==context?void 0:context.handleInputChange)||function(){},_React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),2),isOpen=_React$useState2[0],setIsOpen=_React$useState2[1],_React$useState4=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState(formData[id]||value),2),selectedValue=_React$useState4[0],setSelectedValue=_React$useState4[1];react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){setSelectedValue(formData[id]||value)}),[formData[id],value]);var selectedLabel=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){var selectedOption=options.find((function(option){return option.value===selectedValue}));return selectedOption?selectedOption.label:null}),[selectedValue,options]),handleChange=function handleChange(newValue){setSelectedValue(newValue),setIsOpen(!1),onChange&&onChange(newValue),handleInputChange(id,newValue)},listRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),optionRefs=react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){if(isOpen&&selectedValue){var _optionRefs$current$s,selectedIndex=options.findIndex((function(option){return option.value===selectedValue}));if(-1!==selectedIndex&&optionRefs.current[selectedIndex])null===(_optionRefs$current$s=optionRefs.current[selectedIndex])||void 0===_optionRefs$current$s||_optionRefs$current$s.scrollIntoView({block:"start"})}}),[isOpen,selectedValue,options]),(0,_utils_useClickOutside__WEBPACK_IMPORTED_MODULE_3__.L)(listRef,(function(){return setIsOpen(!1)}));var isValidStatus=isValid||null==errors[id],boxStyle=(0,_utils_cn__WEBPACK_IMPORTED_MODULE_5__.cn)("relative w-full cursor-pointer rounded-lg border p-2  bg-white flex w-full items-center justify-between hover:bg-black-5-opacity",{"text-black-sub pointer-events-none bg-black-3-opacity":disabled,"border-danger":!isValidStatus&&!disabled,"border-black-20-opacity focus:border-black-sub":isValidStatus&&!disabled,"text-black":selectedValue,"text-black-20-opacity":"none"===selectedValue,"text-sm p-1 pl-2 rounded-md border-none":"s"===size,"rounded-lg border p-2":"s"!==size});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_0_common__WEBPACK_IMPORTED_MODULE_1__.lR,{label,isRequired}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button",{type:"button",role:"select",id,className:boxStyle,onClick:function handleToggle(){disabled||setIsOpen((function(prev){return!prev}))},tabIndex:0,"aria-haspopup":"listbox","aria-expanded":isOpen,"aria-disabled":disabled,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:selectedLabel||placeholder}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:(0,_utils_cn__WEBPACK_IMPORTED_MODULE_5__.cn)("material-symbols-rounded ml-2 text-black-sub transition-all",isOpen?"-rotate-180":"rotate-0"),children:"expand_more"})]}),isOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{ref:listRef,className:"absolute z-10 mt-1 max-h-60 overflow-y-auto rounded-lg bg-white shadow-low",role:"listbox",children:[hasDefaultOption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{type:"button",role:"option","aria-selected":"none"===selectedValue,"aria-label":placeholder,className:"flex w-full cursor-pointer p-2 text-black-sub transition-all hover:bg-black-5-opacity focus-visible:bg-black-5-opacity focus-visible:outline-none",onClick:function onClick(){return handleChange("none")},children:placeholder}),options.map((function(option,index){var isSelected=selectedValue===option.value;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button",{type:"button",role:"option","aria-selected":isSelected,"aria-label":option.label,ref:function ref(el){el&&(optionRefs.current[index]=el)},className:"flex w-full cursor-pointer p-2 *:transition-all hover:bg-black-5-opacity focus-visible:bg-black-5-opacity focus-visible:outline-none",onClick:function onClick(){return handleChange(option.value)},children:[isSelected&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"mr-1 flex items-center text-lg text-main",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"material-symbols-rounded",children:"check"})}),option.label]},index)}))]}),supportMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"text-xs text-black-sub",children:supportMessage}),!isValidStatus&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_0_common__WEBPACK_IMPORTED_MODULE_1__.yn,{text:errors[id]||errorMessage||"入力がエラーになっています。"})]})};SelectBox.displayName="SelectBox";try{SelectBox.displayName="SelectBox",SelectBox.__docgenInfo={description:"",displayName:"SelectBox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ value: string; label: string; }[]"}},placeholder:{defaultValue:{value:"未選択"},description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},isRequired:{defaultValue:{value:"false"},description:"",name:"isRequired",required:!1,type:{name:"boolean"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},supportMessage:{defaultValue:null,description:"",name:"supportMessage",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},hasDefaultOption:{defaultValue:{value:"false"},description:"",name:"hasDefaultOption",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/3-selection/SelectBox/SelectBox.tsx#SelectBox"]={docgenInfo:SelectBox.__docgenInfo,name:"SelectBox",path:"src/components/3-selection/SelectBox/SelectBox.tsx#SelectBox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/3-selection/SelectBox/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>_SelectBox__WEBPACK_IMPORTED_MODULE_0__.a});var _SelectBox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/3-selection/SelectBox/SelectBox.tsx")},"./src/utils/useClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useClickOutside=function useClickOutside(ref,callback){react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){var handleClickOutside=function handleClickOutside(event){ref.current&&!ref.current.contains(event.target)&&callback()};return document.addEventListener("mousedown",handleClickOutside),function(){document.removeEventListener("mousedown",handleClickOutside)}}),[ref,callback])}}}]);