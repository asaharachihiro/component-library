"use strict";(self.webpackChunkvite_project=self.webpackChunkvite_project||[]).push([[671],{"./src/components/2-input/Form/Form.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Form_stories});var react=__webpack_require__("./node_modules/react/index.js"),cn=__webpack_require__("./src/utils/cn.ts"),FormContext=__webpack_require__("./src/components/2-input/Form/FormContext.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["id","formLabel","description","supportText","className","children","onSubmit","validate","defaultValues"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var Form=react.forwardRef((function(_ref,ref){var id=_ref.id,_ref$formLabel=_ref.formLabel,formLabel=void 0===_ref$formLabel?"":_ref$formLabel,_ref$description=_ref.description,description=void 0===_ref$description?"":_ref$description,_ref$supportText=_ref.supportText,supportText=void 0===_ref$supportText?"":_ref$supportText,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,children=_ref.children,onSubmit=_ref.onSubmit,validate=_ref.validate,_ref$defaultValues=_ref.defaultValues,defaultValues=void 0===_ref$defaultValues?{}:_ref$defaultValues,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),_React$useState2=_slicedToArray(react.useState(defaultValues),2),formData=_React$useState2[0],setFormData=_React$useState2[1],_React$useState4=_slicedToArray(react.useState({}),2),errors=_React$useState4[0],setErrors=_React$useState4[1];react.useEffect((function(){var savedData=localStorage.getItem(id);setFormData(savedData?function(prevData){return _objectSpread(_objectSpread({},prevData),JSON.parse(savedData))}:defaultValues)}),[id,defaultValues]);return(0,jsx_runtime.jsx)(FormContext.c.Provider,{value:{formData,errors,handleInputChange:function handleInputChange(id,value){setFormData((function(prevData){return _objectSpread(_objectSpread({},prevData),{},_defineProperty({},id,value))}))}},children:(0,jsx_runtime.jsxs)("div",{className:(0,cn.cn)(className,"space-y-6"),id,children:[formLabel&&(0,jsx_runtime.jsx)("label",{className:"block text-lg font-bold",children:formLabel}),(0,jsx_runtime.jsxs)("div",{className:"space-y-1",children:[description&&(0,jsx_runtime.jsx)("p",{className:"text-base",children:description}),supportText&&(0,jsx_runtime.jsx)("p",{className:"mb-6 text-sm text-black-sub",children:supportText})]}),(0,jsx_runtime.jsx)("form",_objectSpread(_objectSpread({ref},props),{},{className:"flex-col space-y-2 pl-4",onSubmit:function handleSubmit(e){if(e.preventDefault(),validate){var validationResults=validate(formData);if(Object.values(validationResults).some((function(error){return null!==error})))return void setErrors(validationResults)}onSubmit&&onSubmit(formData),localStorage.removeItem(id)},children}))]})})}));Form.displayName="Form";try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},formLabel:{defaultValue:{value:""},description:"",name:"formLabel",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},supportText:{defaultValue:{value:""},description:"",name:"supportText",required:!1,type:{name:"string"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"(formData: Record<string, any>) => void"}},validate:{defaultValue:null,description:"",name:"validate",required:!1,type:{name:"(formData: Record<string, any>) => Record<string, string>"}},defaultValues:{defaultValue:{value:"{}"},description:"",name:"defaultValues",required:!1,type:{name:"Record<string, any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/2-input/Form/Form.tsx#Form"]={docgenInfo:Form.__docgenInfo,name:"Form",path:"src/components/2-input/Form/Form.tsx#Form"})}catch(__react_docgen_typescript_loader_error){}var TextBox=__webpack_require__("./src/components/2-input/TextBox/index.ts"),Button=__webpack_require__("./src/components/1-action/Button/index.ts"),DatePicker=__webpack_require__("./src/components/2-input/DatePicker/index.ts");function Form_stories_typeof(o){return Form_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Form_stories_typeof(o)}function Form_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Form_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Form_stories_ownKeys(Object(t),!0).forEach((function(r){Form_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Form_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Form_stories_defineProperty(e,r,t){return(r=function Form_stories_toPropertyKey(t){var i=function Form_stories_toPrimitive(t,r){if("object"!=Form_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=Form_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==Form_stories_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const Form_stories={title:"Components/Input/Form",component:Form,tags:["autodocs"],parameters:{docs:{description:{component:"Formは、複数の情報をまとめて登録するためのコンポーネントです。"}}}};var Template={render:function render(args){return(0,jsx_runtime.jsxs)(Form,Form_stories_objectSpread(Form_stories_objectSpread({},args),{},{className:"w-[500px]",validate:function(formData){return{name:null,birthdate:null,email:"メールアドレスを入力してください。"}},children:[(0,jsx_runtime.jsx)(TextBox.f,{id:"name",label:"お名前",isRequired:!0,className:"pointer-events-none"}),(0,jsx_runtime.jsx)(DatePicker.lr,{id:"birthdate",label:"生年月日",className:"pointer-events-none"}),(0,jsx_runtime.jsx)(TextBox.f,{id:"email",label:"メールアドレス",isRequired:!0,className:"pointer-events-none"}),(0,jsx_runtime.jsx)(Button.$,{variant:"primary",type:"submit",children:"登録"})]}))}},Default=Form_stories_objectSpread(Form_stories_objectSpread({},Template),{},{args:{id:"1",formLabel:"アカウント登録",description:"サービス利用のため、下記の情報をご入力ください。",supportText:"ご登録の内容は後から変更することができます。",defaultValues:{name:"山田 太郎",birthdate:"1990-01-01",email:null}}});const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    id: "1",\n    formLabel: "アカウント登録",\n    description: "サービス利用のため、下記の情報をご入力ください。",\n    supportText: "ご登録の内容は後から変更することができます。",\n    defaultValues: {\n      name: "山田 太郎",\n      birthdate: "1990-01-01",\n      email: null\n    }\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/components/2-input/Form/FormContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>FormContext,x:()=>useFormContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),FormContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useFormContext=function useFormContext(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FormContext);if(!context)throw new Error("useFormContext must be used within a FormProvider");return context};try{FormContext.displayName="FormContext",FormContext.__docgenInfo={description:"",displayName:"FormContext",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/2-input/Form/FormContext.tsx#FormContext"]={docgenInfo:FormContext.__docgenInfo,name:"FormContext",path:"src/components/2-input/Form/FormContext.tsx#FormContext"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/2-input/TextBox/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>TextBox});var _0_common=__webpack_require__("./src/components/0-common/index.ts"),FormContext=__webpack_require__("./src/components/2-input/Form/FormContext.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["label","id","type","isRequired","className","placeholder","supportMessage","defaultValue","onChange","onBlur","onFocus","isValid","disabled"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var TextBox=function TextBox(_ref){var label=_ref.label,id=_ref.id,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,_ref$isRequired=_ref.isRequired,isRequired=void 0!==_ref$isRequired&&_ref$isRequired,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,placeholder=_ref.placeholder,supportMessage=_ref.supportMessage,defaultValue=_ref.defaultValue,_onChange=_ref.onChange,_onBlur=_ref.onBlur,_onFocus=_ref.onFocus,isValid=_ref.isValid,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),_useFormContext=(0,FormContext.x)(),formData=_useFormContext.formData,errors=_useFormContext.errors,handleInputChange=_useFormContext.handleInputChange;return(0,jsx_runtime.jsxs)("div",{className,children:[label&&(0,jsx_runtime.jsx)(_0_common.lR,{label,isRequired}),(0,jsx_runtime.jsx)(_0_common.cl,_objectSpread({id,disabled,placeholder,type,isValid:!errors[id]&&isValid,onChange:function onChange(id,value){handleInputChange(id,value),_onChange&&_onChange(id,value)},onBlur:function onBlur(id,value){return _onBlur&&_onBlur(id,value)},onFocus:function onFocus(id,value){return _onFocus&&_onFocus(id,value)},defaultValue:formData[id]||defaultValue,asTextArea:"textArea"===type},props)),supportMessage&&(0,jsx_runtime.jsx)("span",{className:"text-xs text-black-sub",children:supportMessage}),errors[id]&&(0,jsx_runtime.jsx)(_0_common.yn,{text:errors[id]})]})};TextBox.displayName="TextBox";try{TextBox.displayName="TextBox",TextBox.__docgenInfo={description:"",displayName:"TextBox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"textArea"'}]}},isRequired:{defaultValue:{value:"false"},description:"",name:"isRequired",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},supportMessage:{defaultValue:null,description:"",name:"supportMessage",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},isValid:{defaultValue:null,description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(id: string, value: string) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(id: string, value: string) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(id: string, value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/2-input/TextBox/TextBox.tsx#TextBox"]={docgenInfo:TextBox.__docgenInfo,name:"TextBox",path:"src/components/2-input/TextBox/TextBox.tsx#TextBox"})}catch(__react_docgen_typescript_loader_error){}}}]);