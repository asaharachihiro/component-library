"use strict";(self.webpackChunk_asaharachihiro_components_library=self.webpackChunk_asaharachihiro_components_library||[]).push([[215],{"./src/components/2-input/TextBox/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>TextBox});var react=__webpack_require__("./node_modules/react/index.js"),_0_common=__webpack_require__("./src/components/0-common/index.ts"),FormContext=__webpack_require__("./src/components/2-input/Form/FormContext.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["label","id","type","isRequired","className","placeholder","supportMessage","errorMessage","value","onChange","onBlur","onFocus","isValid","disabled"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var TextBox=react.forwardRef((function(_ref,ref){var label=_ref.label,id=_ref.id,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,_ref$isRequired=_ref.isRequired,isRequired=void 0!==_ref$isRequired&&_ref$isRequired,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,placeholder=_ref.placeholder,supportMessage=_ref.supportMessage,errorMessage=_ref.errorMessage,value=_ref.value,onChange=_ref.onChange,onBlur=_ref.onBlur,onFocus=_ref.onFocus,isValid=_ref.isValid,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),context=(0,FormContext.x)(),formData=(null==context?void 0:context.formData)||{},errors=(null==context?void 0:context.errors)||{},handleInputChange=(null==context?void 0:context.handleInputChange)||function(){},isValidStatus=isValid||null==errors[id],_React$useState2=_slicedToArray(react.useState(formData[id]||value||""),2),inputValue=_React$useState2[0],setInputValue=_React$useState2[1];react.useEffect((function(){void 0===value&&void 0===formData[id]||setInputValue(formData[id]||value||"")}),[formData[id],value]);var handleChange=function handleChange(newValue){setInputValue(newValue),context&&handleInputChange(id,newValue),onChange&&onChange(id,newValue)};return(0,jsx_runtime.jsxs)("div",{className,children:[label&&(0,jsx_runtime.jsx)(_0_common.lR,{label,isRequired}),(0,jsx_runtime.jsx)(_0_common.cl,_objectSpread({id,value:inputValue,type,isValid:isValidStatus,disabled,onChange:function onChange(e){return handleChange(e.target.value)},onBlur,onFocus,placeholder,ref,asTextArea:"textArea"===type},props)),supportMessage&&(0,jsx_runtime.jsx)("span",{className:"text-xs text-black-sub",children:supportMessage}),!isValidStatus&&(0,jsx_runtime.jsx)(_0_common.yn,{text:errors[id]||errorMessage||"入力がエラーになっています。"})]})}));TextBox.displayName="TextBox";try{TextBox.displayName="TextBox",TextBox.__docgenInfo={description:"",displayName:"TextBox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"textArea"'}]}},isRequired:{defaultValue:{value:"false"},description:"",name:"isRequired",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},supportMessage:{defaultValue:null,description:"",name:"supportMessage",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:null,description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((id: string, value: string) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((id: string, value: string) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((id: string, value: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/2-input/TextBox/TextBox.tsx#TextBox"]={docgenInfo:TextBox.__docgenInfo,name:"TextBox",path:"src/components/2-input/TextBox/TextBox.tsx#TextBox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/3-selection/SelectBox/SelectBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>SelectBox});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_cn__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/cn.ts"),_0_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/0-common/index.ts"),_2_input_Form__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/2-input/Form/index.ts"),_utils_useClickOutside__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/useClickOutside.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var SelectBox=function SelectBox(_ref){var id=_ref.id,options=_ref.options,label=_ref.label,_ref$placeholder=_ref.placeholder,placeholder=void 0===_ref$placeholder?"未選択":_ref$placeholder,value=_ref.value,_ref$isRequired=_ref.isRequired,isRequired=void 0!==_ref$isRequired&&_ref$isRequired,_ref$isValid=_ref.isValid,isValid=void 0===_ref$isValid||_ref$isValid,_ref$size=_ref.size,size=void 0===_ref$size?"m":_ref$size,onChange=_ref.onChange,supportMessage=_ref.supportMessage,errorMessage=_ref.errorMessage,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$hasDefaultOption=_ref.hasDefaultOption,hasDefaultOption=void 0!==_ref$hasDefaultOption&&_ref$hasDefaultOption,context=(0,_2_input_Form__WEBPACK_IMPORTED_MODULE_2__.xW)(),formData=(null==context?void 0:context.formData)||{},errors=(null==context?void 0:context.errors)||{},handleInputChange=(null==context?void 0:context.handleInputChange)||function(){},_React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),2),isOpen=_React$useState2[0],setIsOpen=_React$useState2[1],_React$useState4=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState(formData[id]||value),2),selectedValue=_React$useState4[0],setSelectedValue=_React$useState4[1];react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){setSelectedValue(formData[id]||value)}),[formData[id],value]);var selectedLabel=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){var selectedOption=options.find((function(option){return option.value===selectedValue}));return selectedOption?selectedOption.label:null}),[selectedValue,options]),handleChange=function handleChange(newValue){setSelectedValue(newValue),setIsOpen(!1),onChange&&onChange(newValue),handleInputChange(id,newValue)},listRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),optionRefs=react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){if(isOpen&&selectedValue){var _optionRefs$current$s,selectedIndex=options.findIndex((function(option){return option.value===selectedValue}));if(-1!==selectedIndex&&optionRefs.current[selectedIndex])null===(_optionRefs$current$s=optionRefs.current[selectedIndex])||void 0===_optionRefs$current$s||_optionRefs$current$s.scrollIntoView({block:"start"})}}),[isOpen,selectedValue,options]),(0,_utils_useClickOutside__WEBPACK_IMPORTED_MODULE_3__.L)(listRef,(function(){return setIsOpen(!1)}));var isValidStatus=isValid||null==errors[id],boxStyle=(0,_utils_cn__WEBPACK_IMPORTED_MODULE_5__.cn)("relative w-full cursor-pointer rounded-lg border p-2  bg-white flex w-full items-center justify-between hover:bg-black-5-opacity",{"text-black-sub pointer-events-none bg-black-3-opacity":disabled,"border-danger":!isValidStatus&&!disabled,"border-black-20-opacity focus:border-black-sub":isValidStatus&&!disabled,"text-black":selectedValue,"text-black-20-opacity":"none"===selectedValue,"text-sm p-1 pl-2 rounded-md border-none":"s"===size,"rounded-lg border p-2":"s"!==size});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_0_common__WEBPACK_IMPORTED_MODULE_1__.lR,{label,isRequired}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button",{type:"button",role:"select",id,className:boxStyle,onClick:function handleToggle(){disabled||setIsOpen((function(prev){return!prev}))},tabIndex:0,"aria-haspopup":"listbox","aria-expanded":isOpen,"aria-disabled":disabled,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:selectedLabel||placeholder}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:(0,_utils_cn__WEBPACK_IMPORTED_MODULE_5__.cn)("material-symbols-rounded ml-2 text-black-sub transition-all",isOpen?"-rotate-180":"rotate-0"),children:"expand_more"})]}),isOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{ref:listRef,className:"absolute z-10 mt-1 max-h-60 overflow-y-auto rounded-lg bg-white shadow-low",role:"listbox",children:[hasDefaultOption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{type:"button",role:"option","aria-selected":"none"===selectedValue,"aria-label":placeholder,className:"flex w-full cursor-pointer p-2 text-black-sub transition-all hover:bg-black-5-opacity focus-visible:bg-black-5-opacity focus-visible:outline-none",onClick:function onClick(){return handleChange("none")},children:placeholder}),options.map((function(option,index){var isSelected=selectedValue===option.value;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button",{type:"button",role:"option","aria-selected":isSelected,"aria-label":option.label,ref:function ref(el){el&&(optionRefs.current[index]=el)},className:"flex w-full cursor-pointer p-2 *:transition-all hover:bg-black-5-opacity focus-visible:bg-black-5-opacity focus-visible:outline-none",onClick:function onClick(){return handleChange(option.value)},children:[isSelected&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"mr-1 flex items-center text-lg text-main",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"material-symbols-rounded",children:"check"})}),option.label]},index)}))]}),supportMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"text-xs text-black-sub",children:supportMessage}),!isValidStatus&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_0_common__WEBPACK_IMPORTED_MODULE_1__.yn,{text:errors[id]||errorMessage||"入力がエラーになっています。"})]})};SelectBox.displayName="SelectBox";try{SelectBox.displayName="SelectBox",SelectBox.__docgenInfo={description:"",displayName:"SelectBox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ value: string; label: string; }[]"}},placeholder:{defaultValue:{value:"未選択"},description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},isRequired:{defaultValue:{value:"false"},description:"",name:"isRequired",required:!1,type:{name:"boolean"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},supportMessage:{defaultValue:null,description:"",name:"supportMessage",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},hasDefaultOption:{defaultValue:{value:"false"},description:"",name:"hasDefaultOption",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/3-selection/SelectBox/SelectBox.tsx#SelectBox"]={docgenInfo:SelectBox.__docgenInfo,name:"SelectBox",path:"src/components/3-selection/SelectBox/SelectBox.tsx#SelectBox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/3-selection/SelectBox/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>_SelectBox__WEBPACK_IMPORTED_MODULE_0__.a});var _SelectBox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/3-selection/SelectBox/SelectBox.tsx")},"./src/components/4-List/FilterButton/FilterButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FilterButton_stories});var react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/1-action/Button/index.ts"),useClickOutside=__webpack_require__("./src/utils/useClickOutside.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var FilterButton=function FilterButton(_ref){var id=_ref.id,className=_ref.className,children=_ref.children,_ref$isActive=_ref.isActive,isActive=void 0!==_ref$isActive&&_ref$isActive,_ref$isOpen=_ref.isOpen,isOpen=void 0!==_ref$isOpen&&_ref$isOpen,fotterElements=_ref.fotterElements,_React$useState2=_slicedToArray(react.useState(isOpen),2),showPanel=_React$useState2[0],setShowPanel=_React$useState2[1],panelRef=react.useRef(null);return(0,useClickOutside.L)(panelRef,(function(){return setShowPanel(!1)})),(0,jsx_runtime.jsxs)("div",{className,children:[(0,jsx_runtime.jsx)(Button.$,{id,variant:"textPrimary",icon:"filter_list",className:"mb-1",onClick:function onClick(){return setShowPanel(!showPanel)},isActive,label:"フィルター"}),showPanel&&(0,jsx_runtime.jsxs)("div",{className:"rounded-lg bg-white shadow-low",ref:panelRef,children:[(0,jsx_runtime.jsx)("div",{className:"flex-col space-y-4 p-6",children}),fotterElements&&(0,jsx_runtime.jsx)("div",{className:"sticky flex justify-between border-t border-black-20-opacity p-6",children:fotterElements})]})]})};FilterButton.displayName="FilterButton";try{FilterButton.displayName="FilterButton",FilterButton.__docgenInfo={description:"",displayName:"FilterButton",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},fotterElements:{defaultValue:null,description:"",name:"fotterElements",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/4-List/FilterButton/FilterButton.tsx#FilterButton"]={docgenInfo:FilterButton.__docgenInfo,name:"FilterButton",path:"src/components/4-List/FilterButton/FilterButton.tsx#FilterButton"})}catch(__react_docgen_typescript_loader_error){}var TextBox=__webpack_require__("./src/components/2-input/TextBox/index.ts"),SelectBox=__webpack_require__("./src/components/3-selection/SelectBox/index.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const FilterButton_stories={title:"Components/List/FilterButton",component:FilterButton,tags:["autodocs"],parameters:{docs:{description:{component:"FilterButtonは、絞り込み表示のための条件指定を行うコンポーネントです。"}}}};var Template={render:function render(args){return(0,jsx_runtime.jsxs)(FilterButton,_objectSpread(_objectSpread({},args),{},{children:[(0,jsx_runtime.jsx)(TextBox.f,{id:"1",label:"検索ワード"}),(0,jsx_runtime.jsx)(SelectBox.a,{id:"2",label:"所属部署",value:"1",options:[{value:"1",label:"虎ノ門"},{value:"2",label:"新川"},{value:"3",label:"横浜"}]})]}))}},Default=_objectSpread(_objectSpread({},Template),{},{args:{id:"1",fotterElements:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.$,{id:"reset",variant:"textPrimary",icon:"refresh",label:"リセット"}),(0,jsx_runtime.jsx)(Button.$,{id:"confirm",variant:"primary",size:"s",label:"検索"})]})}});const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    id: "1",\n    fotterElements: <>\n        <Button id="reset" variant="textPrimary" icon="refresh" label="リセット" />\n        <Button id="confirm" variant="primary" size="s" label="検索" />\n      </>\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/utils/useClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useClickOutside=function useClickOutside(ref,callback){react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){var handleClickOutside=function handleClickOutside(event){ref.current&&!ref.current.contains(event.target)&&callback()};return document.addEventListener("mousedown",handleClickOutside),function(){document.removeEventListener("mousedown",handleClickOutside)}}),[ref,callback])}}}]);