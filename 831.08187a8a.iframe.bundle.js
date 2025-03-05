"use strict";(self.webpackChunkvite_project=self.webpackChunkvite_project||[]).push([[831],{"./node_modules/@radix-ui/react-collection/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>createCollection});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function createCollection(name){const PROVIDER_NAME=name+"CollectionProvider",[createCollectionContext,createCollectionScope]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)(PROVIDER_NAME),[CollectionProviderImpl,useCollectionContext]=createCollectionContext(PROVIDER_NAME,{collectionRef:{current:null},itemMap:new Map}),CollectionProvider=props=>{const{scope,children}=props,ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),itemMap=react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Map).current;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CollectionProviderImpl,{scope,itemMap,collectionRef:ref,children})};CollectionProvider.displayName=PROVIDER_NAME;const COLLECTION_SLOT_NAME=name+"CollectionSlot",CollectionSlot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{scope,children}=props,context=useCollectionContext(COLLECTION_SLOT_NAME,scope),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.s)(forwardedRef,context.collectionRef);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.DX,{ref:composedRefs,children})}));CollectionSlot.displayName=COLLECTION_SLOT_NAME;const ITEM_SLOT_NAME=name+"CollectionItemSlot",ITEM_DATA_ATTR="data-radix-collection-item",CollectionItemSlot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{scope,children,...itemData}=props,ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.s)(forwardedRef,ref),context=useCollectionContext(ITEM_SLOT_NAME,scope);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>(context.itemMap.set(ref,{ref,...itemData}),()=>{context.itemMap.delete(ref)}))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.DX,{[ITEM_DATA_ATTR]:"",ref:composedRefs,children})}));return CollectionItemSlot.displayName=ITEM_SLOT_NAME,[{Provider:CollectionProvider,Slot:CollectionSlot,ItemSlot:CollectionItemSlot},function useCollection(scope){const context=useCollectionContext(name+"CollectionConsumer",scope);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{const collectionNode=context.collectionRef.current;if(!collectionNode)return[];const orderedNodes=Array.from(collectionNode.querySelectorAll("[data-radix-collection-item]"));return Array.from(context.itemMap.values()).sort(((a,b)=>orderedNodes.indexOf(a.ref.current)-orderedNodes.indexOf(b.ref.current)))}),[context.collectionRef,context.itemMap])},createCollectionScope]}},"./node_modules/@radix-ui/react-direction/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{jH:()=>useDirection});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),DirectionContext=(__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0));function useDirection(localDir){const globalDir=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DirectionContext);return localDir||globalDir||"ltr"}},"./node_modules/@radix-ui/react-id/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{B:()=>useId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),useReactId=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2)))["useId".toString()]||(()=>{}),count=0;function useId(deterministicId){const[id,setId]=react__WEBPACK_IMPORTED_MODULE_0__.useState(useReactId());return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.N)((()=>{deterministicId||setId((reactId=>reactId??String(count++)))}),[deterministicId]),deterministicId||(id?`radix-${id}`:"")}},"./node_modules/@radix-ui/react-label/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Label=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.sG.label,{...props,ref:forwardedRef,onMouseDown:event=>{event.target.closest("button, input, select, textarea")||(props.onMouseDown?.(event),!event.defaultPrevented&&event.detail>1&&event.preventDefault())}})));Label.displayName="Label"},"./node_modules/@radix-ui/react-radio-group/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z6:()=>RadioGroup,CU:()=>RadioGroupItem});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_context_dist=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),react_primitive_dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_collection_dist=__webpack_require__("./node_modules/@radix-ui/react-collection/dist/index.mjs"),react_id_dist=__webpack_require__("./node_modules/@radix-ui/react-id/dist/index.mjs"),react_use_callback_ref_dist=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),react_direction_dist=__webpack_require__("./node_modules/@radix-ui/react-direction/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ENTRY_FOCUS="rovingFocusGroup.onEntryFocus",EVENT_OPTIONS={bubbles:!1,cancelable:!0},GROUP_NAME="RovingFocusGroup",[Collection,useCollection,createCollectionScope]=(0,react_collection_dist.N)(GROUP_NAME),[createRovingFocusGroupContext,createRovingFocusGroupScope]=(0,react_context_dist.A)(GROUP_NAME,[createCollectionScope]),[RovingFocusProvider,useRovingFocusContext]=createRovingFocusGroupContext(GROUP_NAME),RovingFocusGroup=react.forwardRef(((props,forwardedRef)=>(0,jsx_runtime.jsx)(Collection.Provider,{scope:props.__scopeRovingFocusGroup,children:(0,jsx_runtime.jsx)(Collection.Slot,{scope:props.__scopeRovingFocusGroup,children:(0,jsx_runtime.jsx)(RovingFocusGroupImpl,{...props,ref:forwardedRef})})})));RovingFocusGroup.displayName=GROUP_NAME;var RovingFocusGroupImpl=react.forwardRef(((props,forwardedRef)=>{const{__scopeRovingFocusGroup,orientation,loop=!1,dir,currentTabStopId:currentTabStopIdProp,defaultCurrentTabStopId,onCurrentTabStopIdChange,onEntryFocus,preventScrollOnEntryFocus=!1,...groupProps}=props,ref=react.useRef(null),composedRefs=(0,react_compose_refs_dist.s)(forwardedRef,ref),direction=(0,react_direction_dist.jH)(dir),[currentTabStopId=null,setCurrentTabStopId]=(0,react_use_controllable_state_dist.i)({prop:currentTabStopIdProp,defaultProp:defaultCurrentTabStopId,onChange:onCurrentTabStopIdChange}),[isTabbingBackOut,setIsTabbingBackOut]=react.useState(!1),handleEntryFocus=(0,react_use_callback_ref_dist.c)(onEntryFocus),getItems=useCollection(__scopeRovingFocusGroup),isClickFocusRef=react.useRef(!1),[focusableItemsCount,setFocusableItemsCount]=react.useState(0);return react.useEffect((()=>{const node=ref.current;if(node)return node.addEventListener(ENTRY_FOCUS,handleEntryFocus),()=>node.removeEventListener(ENTRY_FOCUS,handleEntryFocus)}),[handleEntryFocus]),(0,jsx_runtime.jsx)(RovingFocusProvider,{scope:__scopeRovingFocusGroup,orientation,dir:direction,loop,currentTabStopId,onItemFocus:react.useCallback((tabStopId=>setCurrentTabStopId(tabStopId)),[setCurrentTabStopId]),onItemShiftTab:react.useCallback((()=>setIsTabbingBackOut(!0)),[]),onFocusableItemAdd:react.useCallback((()=>setFocusableItemsCount((prevCount=>prevCount+1))),[]),onFocusableItemRemove:react.useCallback((()=>setFocusableItemsCount((prevCount=>prevCount-1))),[]),children:(0,jsx_runtime.jsx)(react_primitive_dist.sG.div,{tabIndex:isTabbingBackOut||0===focusableItemsCount?-1:0,"data-orientation":orientation,...groupProps,ref:composedRefs,style:{outline:"none",...props.style},onMouseDown:(0,dist.m)(props.onMouseDown,(()=>{isClickFocusRef.current=!0})),onFocus:(0,dist.m)(props.onFocus,(event=>{const isKeyboardFocus=!isClickFocusRef.current;if(event.target===event.currentTarget&&isKeyboardFocus&&!isTabbingBackOut){const entryFocusEvent=new CustomEvent(ENTRY_FOCUS,EVENT_OPTIONS);if(event.currentTarget.dispatchEvent(entryFocusEvent),!entryFocusEvent.defaultPrevented){const items=getItems().filter((item=>item.focusable));focusFirst([items.find((item=>item.active)),items.find((item=>item.id===currentTabStopId)),...items].filter(Boolean).map((item=>item.ref.current)),preventScrollOnEntryFocus)}}isClickFocusRef.current=!1})),onBlur:(0,dist.m)(props.onBlur,(()=>setIsTabbingBackOut(!1)))})})})),RovingFocusGroupItem=react.forwardRef(((props,forwardedRef)=>{const{__scopeRovingFocusGroup,focusable=!0,active=!1,tabStopId,...itemProps}=props,autoId=(0,react_id_dist.B)(),id=tabStopId||autoId,context=useRovingFocusContext("RovingFocusGroupItem",__scopeRovingFocusGroup),isCurrentTabStop=context.currentTabStopId===id,getItems=useCollection(__scopeRovingFocusGroup),{onFocusableItemAdd,onFocusableItemRemove}=context;return react.useEffect((()=>{if(focusable)return onFocusableItemAdd(),()=>onFocusableItemRemove()}),[focusable,onFocusableItemAdd,onFocusableItemRemove]),(0,jsx_runtime.jsx)(Collection.ItemSlot,{scope:__scopeRovingFocusGroup,id,focusable,active,children:(0,jsx_runtime.jsx)(react_primitive_dist.sG.span,{tabIndex:isCurrentTabStop?0:-1,"data-orientation":context.orientation,...itemProps,ref:forwardedRef,onMouseDown:(0,dist.m)(props.onMouseDown,(event=>{focusable?context.onItemFocus(id):event.preventDefault()})),onFocus:(0,dist.m)(props.onFocus,(()=>context.onItemFocus(id))),onKeyDown:(0,dist.m)(props.onKeyDown,(event=>{if("Tab"===event.key&&event.shiftKey)return void context.onItemShiftTab();if(event.target!==event.currentTarget)return;const focusIntent=function getFocusIntent(event,orientation,dir){const key=function getDirectionAwareKey(key,dir){return"rtl"!==dir?key:"ArrowLeft"===key?"ArrowRight":"ArrowRight"===key?"ArrowLeft":key}(event.key,dir);return"vertical"===orientation&&["ArrowLeft","ArrowRight"].includes(key)||"horizontal"===orientation&&["ArrowUp","ArrowDown"].includes(key)?void 0:MAP_KEY_TO_FOCUS_INTENT[key]}(event,context.orientation,context.dir);if(void 0!==focusIntent){if(event.metaKey||event.ctrlKey||event.altKey||event.shiftKey)return;event.preventDefault();let candidateNodes=getItems().filter((item=>item.focusable)).map((item=>item.ref.current));if("last"===focusIntent)candidateNodes.reverse();else if("prev"===focusIntent||"next"===focusIntent){"prev"===focusIntent&&candidateNodes.reverse();const currentIndex=candidateNodes.indexOf(event.currentTarget);candidateNodes=context.loop?function wrapArray(array,startIndex){return array.map(((_,index)=>array[(startIndex+index)%array.length]))}(candidateNodes,currentIndex+1):candidateNodes.slice(currentIndex+1)}setTimeout((()=>focusFirst(candidateNodes)))}}))})})}));RovingFocusGroupItem.displayName="RovingFocusGroupItem";var MAP_KEY_TO_FOCUS_INTENT={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function focusFirst(candidates,preventScroll=!1){const PREVIOUSLY_FOCUSED_ELEMENT=document.activeElement;for(const candidate of candidates){if(candidate===PREVIOUSLY_FOCUSED_ELEMENT)return;if(candidate.focus({preventScroll}),document.activeElement!==PREVIOUSLY_FOCUSED_ELEMENT)return}}var Root=RovingFocusGroup,Item=RovingFocusGroupItem,react_use_size_dist=__webpack_require__("./node_modules/@radix-ui/react-use-size/dist/index.mjs"),react_use_previous_dist=__webpack_require__("./node_modules/@radix-ui/react-use-previous/dist/index.mjs"),react_presence_dist=__webpack_require__("./node_modules/@radix-ui/react-presence/dist/index.mjs"),[createRadioContext,createRadioScope]=(0,react_context_dist.A)("Radio"),[RadioProvider,useRadioContext]=createRadioContext("Radio"),Radio=react.forwardRef(((props,forwardedRef)=>{const{__scopeRadio,name,checked=!1,required,disabled,value="on",onCheck,form,...radioProps}=props,[button,setButton]=react.useState(null),composedRefs=(0,react_compose_refs_dist.s)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=react.useRef(!1),isFormControl=!button||(form||!!button.closest("form"));return(0,jsx_runtime.jsxs)(RadioProvider,{scope:__scopeRadio,checked,disabled,children:[(0,jsx_runtime.jsx)(react_primitive_dist.sG.button,{type:"button",role:"radio","aria-checked":checked,"data-state":getState(checked),"data-disabled":disabled?"":void 0,disabled,value,...radioProps,ref:composedRefs,onClick:(0,dist.m)(props.onClick,(event=>{checked||onCheck?.(),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))}),isFormControl&&(0,jsx_runtime.jsx)(BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,form,style:{transform:"translateX(-100%)"}})]})}));Radio.displayName="Radio";var RadioIndicator=react.forwardRef(((props,forwardedRef)=>{const{__scopeRadio,forceMount,...indicatorProps}=props,context=useRadioContext("RadioIndicator",__scopeRadio);return(0,jsx_runtime.jsx)(react_presence_dist.C,{present:forceMount||context.checked,children:(0,jsx_runtime.jsx)(react_primitive_dist.sG.span,{"data-state":getState(context.checked),"data-disabled":context.disabled?"":void 0,...indicatorProps,ref:forwardedRef})})}));RadioIndicator.displayName="RadioIndicator";var BubbleInput=props=>{const{control,checked,bubbles=!0,...inputProps}=props,ref=react.useRef(null),prevChecked=(0,react_use_previous_dist.Z)(checked),controlSize=(0,react_use_size_dist.X)(control);return react.useEffect((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});setChecked.call(input,checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,jsx_runtime.jsx)("input",{type:"radio","aria-hidden":!0,defaultChecked:checked,...inputProps,tabIndex:-1,ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function getState(checked){return checked?"checked":"unchecked"}var ARROW_KEYS=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],[createRadioGroupContext,createRadioGroupScope]=(0,react_context_dist.A)("RadioGroup",[createRovingFocusGroupScope,createRadioScope]),useRovingFocusGroupScope=createRovingFocusGroupScope(),useRadioScope=createRadioScope(),[RadioGroupProvider,useRadioGroupContext]=createRadioGroupContext("RadioGroup"),RadioGroup=react.forwardRef(((props,forwardedRef)=>{const{__scopeRadioGroup,name,defaultValue,value:valueProp,required=!1,disabled=!1,orientation,dir,loop=!0,onValueChange,...groupProps}=props,rovingFocusGroupScope=useRovingFocusGroupScope(__scopeRadioGroup),direction=(0,react_direction_dist.jH)(dir),[value,setValue]=(0,react_use_controllable_state_dist.i)({prop:valueProp,defaultProp:defaultValue,onChange:onValueChange});return(0,jsx_runtime.jsx)(RadioGroupProvider,{scope:__scopeRadioGroup,name,required,disabled,value,onValueChange:setValue,children:(0,jsx_runtime.jsx)(Root,{asChild:!0,...rovingFocusGroupScope,orientation,dir:direction,loop,children:(0,jsx_runtime.jsx)(react_primitive_dist.sG.div,{role:"radiogroup","aria-required":required,"aria-orientation":orientation,"data-disabled":disabled?"":void 0,dir:direction,...groupProps,ref:forwardedRef})})})}));RadioGroup.displayName="RadioGroup";var RadioGroupItem=react.forwardRef(((props,forwardedRef)=>{const{__scopeRadioGroup,disabled,...itemProps}=props,context=useRadioGroupContext("RadioGroupItem",__scopeRadioGroup),isDisabled=context.disabled||disabled,rovingFocusGroupScope=useRovingFocusGroupScope(__scopeRadioGroup),radioScope=useRadioScope(__scopeRadioGroup),ref=react.useRef(null),composedRefs=(0,react_compose_refs_dist.s)(forwardedRef,ref),checked=context.value===itemProps.value,isArrowKeyPressedRef=react.useRef(!1);return react.useEffect((()=>{const handleKeyDown=event=>{ARROW_KEYS.includes(event.key)&&(isArrowKeyPressedRef.current=!0)},handleKeyUp=()=>isArrowKeyPressedRef.current=!1;return document.addEventListener("keydown",handleKeyDown),document.addEventListener("keyup",handleKeyUp),()=>{document.removeEventListener("keydown",handleKeyDown),document.removeEventListener("keyup",handleKeyUp)}}),[]),(0,jsx_runtime.jsx)(Item,{asChild:!0,...rovingFocusGroupScope,focusable:!isDisabled,active:checked,children:(0,jsx_runtime.jsx)(Radio,{disabled:isDisabled,required:context.required,checked,...radioScope,...itemProps,name:context.name,ref:composedRefs,onCheck:()=>context.onValueChange(itemProps.value),onKeyDown:(0,dist.m)((event=>{"Enter"===event.key&&event.preventDefault()})),onFocus:(0,dist.m)(itemProps.onFocus,(()=>{isArrowKeyPressedRef.current&&ref.current?.click()}))})})}));RadioGroupItem.displayName="RadioGroupItem";var RadioGroupIndicator=react.forwardRef(((props,forwardedRef)=>{const{__scopeRadioGroup,...indicatorProps}=props,radioScope=useRadioScope(__scopeRadioGroup);return(0,jsx_runtime.jsx)(RadioIndicator,{...radioScope,...indicatorProps,ref:forwardedRef})}));RadioGroupIndicator.displayName="RadioGroupIndicator"}}]);