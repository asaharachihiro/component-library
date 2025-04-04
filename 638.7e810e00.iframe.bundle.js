/*! For license information please see 638.7e810e00.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_asaharachihiro_components_library=self.webpackChunk_asaharachihiro_components_library||[]).push([[638],{"./node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.js")},"./node_modules/tailwind-merge/dist/bundle-mjs.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{QP:()=>twMerge});const createClassGroupUtils=config=>{const classMap=createClassMap(config),{conflictingClassGroups,conflictingClassGroupModifiers}=config;return{getClassGroupId:className=>{const classParts=className.split("-");return""===classParts[0]&&1!==classParts.length&&classParts.shift(),getGroupRecursive(classParts,classMap)||getGroupIdForArbitraryProperty(className)},getConflictingClassGroupIds:(classGroupId,hasPostfixModifier)=>{const conflicts=conflictingClassGroups[classGroupId]||[];return hasPostfixModifier&&conflictingClassGroupModifiers[classGroupId]?[...conflicts,...conflictingClassGroupModifiers[classGroupId]]:conflicts}}},getGroupRecursive=(classParts,classPartObject)=>{if(0===classParts.length)return classPartObject.classGroupId;const currentClassPart=classParts[0],nextClassPartObject=classPartObject.nextPart.get(currentClassPart),classGroupFromNextClassPart=nextClassPartObject?getGroupRecursive(classParts.slice(1),nextClassPartObject):void 0;if(classGroupFromNextClassPart)return classGroupFromNextClassPart;if(0===classPartObject.validators.length)return;const classRest=classParts.join("-");return classPartObject.validators.find((({validator})=>validator(classRest)))?.classGroupId},arbitraryPropertyRegex=/^\[(.+)\]$/,getGroupIdForArbitraryProperty=className=>{if(arbitraryPropertyRegex.test(className)){const arbitraryPropertyClassName=arbitraryPropertyRegex.exec(className)[1],property=arbitraryPropertyClassName?.substring(0,arbitraryPropertyClassName.indexOf(":"));if(property)return"arbitrary.."+property}},createClassMap=config=>{const{theme,classGroups}=config,classMap={nextPart:new Map,validators:[]};for(const classGroupId in classGroups)processClassesRecursively(classGroups[classGroupId],classMap,classGroupId,theme);return classMap},processClassesRecursively=(classGroup,classPartObject,classGroupId,theme)=>{classGroup.forEach((classDefinition=>{if("string"!=typeof classDefinition){if("function"==typeof classDefinition)return isThemeGetter(classDefinition)?void processClassesRecursively(classDefinition(theme),classPartObject,classGroupId,theme):void classPartObject.validators.push({validator:classDefinition,classGroupId});Object.entries(classDefinition).forEach((([key,classGroup])=>{processClassesRecursively(classGroup,getPart(classPartObject,key),classGroupId,theme)}))}else{(""===classDefinition?classPartObject:getPart(classPartObject,classDefinition)).classGroupId=classGroupId}}))},getPart=(classPartObject,path)=>{let currentClassPartObject=classPartObject;return path.split("-").forEach((pathPart=>{currentClassPartObject.nextPart.has(pathPart)||currentClassPartObject.nextPart.set(pathPart,{nextPart:new Map,validators:[]}),currentClassPartObject=currentClassPartObject.nextPart.get(pathPart)})),currentClassPartObject},isThemeGetter=func=>func.isThemeGetter,createLruCache=maxCacheSize=>{if(maxCacheSize<1)return{get:()=>{},set:()=>{}};let cacheSize=0,cache=new Map,previousCache=new Map;const update=(key,value)=>{cache.set(key,value),cacheSize++,cacheSize>maxCacheSize&&(cacheSize=0,previousCache=cache,cache=new Map)};return{get(key){let value=cache.get(key);return void 0!==value?value:void 0!==(value=previousCache.get(key))?(update(key,value),value):void 0},set(key,value){cache.has(key)?cache.set(key,value):update(key,value)}}},createParseClassName=config=>{const{prefix,experimentalParseClassName}=config;let parseClassName=className=>{const modifiers=[];let postfixModifierPosition,bracketDepth=0,parenDepth=0,modifierStart=0;for(let index=0;index<className.length;index++){let currentCharacter=className[index];if(0===bracketDepth&&0===parenDepth){if(":"===currentCharacter){modifiers.push(className.slice(modifierStart,index)),modifierStart=index+1;continue}if("/"===currentCharacter){postfixModifierPosition=index;continue}}"["===currentCharacter?bracketDepth++:"]"===currentCharacter?bracketDepth--:"("===currentCharacter?parenDepth++:")"===currentCharacter&&parenDepth--}const baseClassNameWithImportantModifier=0===modifiers.length?className:className.substring(modifierStart),baseClassName=stripImportantModifier(baseClassNameWithImportantModifier);return{modifiers,hasImportantModifier:baseClassName!==baseClassNameWithImportantModifier,baseClassName,maybePostfixModifierPosition:postfixModifierPosition&&postfixModifierPosition>modifierStart?postfixModifierPosition-modifierStart:void 0}};if(prefix){const fullPrefix=prefix+":",parseClassNameOriginal=parseClassName;parseClassName=className=>className.startsWith(fullPrefix)?parseClassNameOriginal(className.substring(fullPrefix.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:className,maybePostfixModifierPosition:void 0}}if(experimentalParseClassName){const parseClassNameOriginal=parseClassName;parseClassName=className=>experimentalParseClassName({className,parseClassName:parseClassNameOriginal})}return parseClassName},stripImportantModifier=baseClassName=>baseClassName.endsWith("!")?baseClassName.substring(0,baseClassName.length-1):baseClassName.startsWith("!")?baseClassName.substring(1):baseClassName,createSortModifiers=config=>{const orderSensitiveModifiers=Object.fromEntries(config.orderSensitiveModifiers.map((modifier=>[modifier,!0])));return modifiers=>{if(modifiers.length<=1)return modifiers;const sortedModifiers=[];let unsortedModifiers=[];return modifiers.forEach((modifier=>{"["===modifier[0]||orderSensitiveModifiers[modifier]?(sortedModifiers.push(...unsortedModifiers.sort(),modifier),unsortedModifiers=[]):unsortedModifiers.push(modifier)})),sortedModifiers.push(...unsortedModifiers.sort()),sortedModifiers}},SPLIT_CLASSES_REGEX=/\s+/;function twJoin(){let argument,resolvedValue,index=0,string="";for(;index<arguments.length;)(argument=arguments[index++])&&(resolvedValue=toValue(argument))&&(string&&(string+=" "),string+=resolvedValue);return string}const toValue=mix=>{if("string"==typeof mix)return mix;let resolvedValue,string="";for(let k=0;k<mix.length;k++)mix[k]&&(resolvedValue=toValue(mix[k]))&&(string&&(string+=" "),string+=resolvedValue);return string};function createTailwindMerge(createConfigFirst,...createConfigRest){let configUtils,cacheGet,cacheSet,functionToCall=function initTailwindMerge(classList){const config=createConfigRest.reduce(((previousConfig,createConfigCurrent)=>createConfigCurrent(previousConfig)),createConfigFirst());return configUtils=(config=>({cache:createLruCache(config.cacheSize),parseClassName:createParseClassName(config),sortModifiers:createSortModifiers(config),...createClassGroupUtils(config)}))(config),cacheGet=configUtils.cache.get,cacheSet=configUtils.cache.set,functionToCall=tailwindMerge,tailwindMerge(classList)};function tailwindMerge(classList){const cachedResult=cacheGet(classList);if(cachedResult)return cachedResult;const result=((classList,configUtils)=>{const{parseClassName,getClassGroupId,getConflictingClassGroupIds,sortModifiers}=configUtils,classGroupsInConflict=[],classNames=classList.trim().split(SPLIT_CLASSES_REGEX);let result="";for(let index=classNames.length-1;index>=0;index-=1){const originalClassName=classNames[index],{isExternal,modifiers,hasImportantModifier,baseClassName,maybePostfixModifierPosition}=parseClassName(originalClassName);if(isExternal){result=originalClassName+(result.length>0?" "+result:result);continue}let hasPostfixModifier=!!maybePostfixModifierPosition,classGroupId=getClassGroupId(hasPostfixModifier?baseClassName.substring(0,maybePostfixModifierPosition):baseClassName);if(!classGroupId){if(!hasPostfixModifier){result=originalClassName+(result.length>0?" "+result:result);continue}if(classGroupId=getClassGroupId(baseClassName),!classGroupId){result=originalClassName+(result.length>0?" "+result:result);continue}hasPostfixModifier=!1}const variantModifier=sortModifiers(modifiers).join(":"),modifierId=hasImportantModifier?variantModifier+"!":variantModifier,classId=modifierId+classGroupId;if(classGroupsInConflict.includes(classId))continue;classGroupsInConflict.push(classId);const conflictGroups=getConflictingClassGroupIds(classGroupId,hasPostfixModifier);for(let i=0;i<conflictGroups.length;++i){const group=conflictGroups[i];classGroupsInConflict.push(modifierId+group)}result=originalClassName+(result.length>0?" "+result:result)}return result})(classList,configUtils);return cacheSet(classList,result),result}return function callTailwindMerge(){return functionToCall(twJoin.apply(null,arguments))}}const fromTheme=key=>{const themeGetter=theme=>theme[key]||[];return themeGetter.isThemeGetter=!0,themeGetter},arbitraryValueRegex=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,arbitraryVariableRegex=/^\((?:(\w[\w-]*):)?(.+)\)$/i,fractionRegex=/^\d+\/\d+$/,tshirtUnitRegex=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,lengthUnitRegex=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,colorFunctionRegex=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,shadowRegex=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,imageRegex=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,isFraction=value=>fractionRegex.test(value),isNumber=value=>Boolean(value)&&!Number.isNaN(Number(value)),isInteger=value=>Boolean(value)&&Number.isInteger(Number(value)),isPercent=value=>value.endsWith("%")&&isNumber(value.slice(0,-1)),isTshirtSize=value=>tshirtUnitRegex.test(value),isAny=()=>!0,isLengthOnly=value=>lengthUnitRegex.test(value)&&!colorFunctionRegex.test(value),isNever=()=>!1,isShadow=value=>shadowRegex.test(value),isImage=value=>imageRegex.test(value),isAnyNonArbitrary=value=>!isArbitraryValue(value)&&!isArbitraryVariable(value),isArbitrarySize=value=>getIsArbitraryValue(value,isLabelSize,isNever),isArbitraryValue=value=>arbitraryValueRegex.test(value),isArbitraryLength=value=>getIsArbitraryValue(value,isLabelLength,isLengthOnly),isArbitraryNumber=value=>getIsArbitraryValue(value,isLabelNumber,isNumber),isArbitraryPosition=value=>getIsArbitraryValue(value,isLabelPosition,isNever),isArbitraryImage=value=>getIsArbitraryValue(value,isLabelImage,isImage),isArbitraryShadow=value=>getIsArbitraryValue(value,isNever,isShadow),isArbitraryVariable=value=>arbitraryVariableRegex.test(value),isArbitraryVariableLength=value=>getIsArbitraryVariable(value,isLabelLength),isArbitraryVariableFamilyName=value=>getIsArbitraryVariable(value,isLabelFamilyName),isArbitraryVariablePosition=value=>getIsArbitraryVariable(value,isLabelPosition),isArbitraryVariableSize=value=>getIsArbitraryVariable(value,isLabelSize),isArbitraryVariableImage=value=>getIsArbitraryVariable(value,isLabelImage),isArbitraryVariableShadow=value=>getIsArbitraryVariable(value,isLabelShadow,!0),getIsArbitraryValue=(value,testLabel,testValue)=>{const result=arbitraryValueRegex.exec(value);return!!result&&(result[1]?testLabel(result[1]):testValue(result[2]))},getIsArbitraryVariable=(value,testLabel,shouldMatchNoLabel=!1)=>{const result=arbitraryVariableRegex.exec(value);return!!result&&(result[1]?testLabel(result[1]):shouldMatchNoLabel)},isLabelPosition=label=>"position"===label,imageLabels=new Set(["image","url"]),isLabelImage=label=>imageLabels.has(label),sizeLabels=new Set(["length","size","percentage"]),isLabelSize=label=>sizeLabels.has(label),isLabelLength=label=>"length"===label,isLabelNumber=label=>"number"===label,isLabelFamilyName=label=>"family-name"===label,isLabelShadow=label=>"shadow"===label,getDefaultConfig=(Symbol.toStringTag,()=>{const themeColor=fromTheme("color"),themeFont=fromTheme("font"),themeText=fromTheme("text"),themeFontWeight=fromTheme("font-weight"),themeTracking=fromTheme("tracking"),themeLeading=fromTheme("leading"),themeBreakpoint=fromTheme("breakpoint"),themeContainer=fromTheme("container"),themeSpacing=fromTheme("spacing"),themeRadius=fromTheme("radius"),themeShadow=fromTheme("shadow"),themeInsetShadow=fromTheme("inset-shadow"),themeDropShadow=fromTheme("drop-shadow"),themeBlur=fromTheme("blur"),themePerspective=fromTheme("perspective"),themeAspect=fromTheme("aspect"),themeEase=fromTheme("ease"),themeAnimate=fromTheme("animate"),scaleUnambiguousSpacing=()=>[isArbitraryVariable,isArbitraryValue,themeSpacing],scaleInset=()=>[isFraction,"full","auto",...scaleUnambiguousSpacing()],scaleGridTemplateColsRows=()=>[isInteger,"none","subgrid",isArbitraryVariable,isArbitraryValue],scaleGridColRowStartAndEnd=()=>["auto",{span:["full",isInteger,isArbitraryVariable,isArbitraryValue]},isArbitraryVariable,isArbitraryValue],scaleGridColRowStartOrEnd=()=>[isInteger,"auto",isArbitraryVariable,isArbitraryValue],scaleGridAutoColsRows=()=>["auto","min","max","fr",isArbitraryVariable,isArbitraryValue],scaleMargin=()=>["auto",...scaleUnambiguousSpacing()],scaleSizing=()=>[isFraction,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...scaleUnambiguousSpacing()],scaleColor=()=>[themeColor,isArbitraryVariable,isArbitraryValue],scaleGradientStopPosition=()=>[isPercent,isArbitraryLength],scaleRadius=()=>["","none","full",themeRadius,isArbitraryVariable,isArbitraryValue],scaleBorderWidth=()=>["",isNumber,isArbitraryVariableLength,isArbitraryLength],scaleBlur=()=>["","none",themeBlur,isArbitraryVariable,isArbitraryValue],scaleOrigin=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",isArbitraryVariable,isArbitraryValue],scaleRotate=()=>["none",isNumber,isArbitraryVariable,isArbitraryValue],scaleScale=()=>["none",isNumber,isArbitraryVariable,isArbitraryValue],scaleSkew=()=>[isNumber,isArbitraryVariable,isArbitraryValue],scaleTranslate=()=>[isFraction,"full",...scaleUnambiguousSpacing()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[isTshirtSize],breakpoint:[isTshirtSize],color:[isAny],container:[isTshirtSize],"drop-shadow":[isTshirtSize],ease:["in","out","in-out"],font:[isAnyNonArbitrary],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[isTshirtSize],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[isTshirtSize],shadow:[isTshirtSize],spacing:["px",isNumber],text:[isTshirtSize],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",isFraction,isArbitraryValue,isArbitraryVariable,themeAspect]}],container:["container"],columns:[{columns:[isNumber,isArbitraryValue,isArbitraryVariable,themeContainer]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",isArbitraryValue,isArbitraryVariable]}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:scaleInset()}],"inset-x":[{"inset-x":scaleInset()}],"inset-y":[{"inset-y":scaleInset()}],start:[{start:scaleInset()}],end:[{end:scaleInset()}],top:[{top:scaleInset()}],right:[{right:scaleInset()}],bottom:[{bottom:scaleInset()}],left:[{left:scaleInset()}],visibility:["visible","invisible","collapse"],z:[{z:[isInteger,"auto",isArbitraryVariable,isArbitraryValue]}],basis:[{basis:[isFraction,"full","auto",themeContainer,...scaleUnambiguousSpacing()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[isNumber,isFraction,"auto","initial","none",isArbitraryValue]}],grow:[{grow:["",isNumber,isArbitraryVariable,isArbitraryValue]}],shrink:[{shrink:["",isNumber,isArbitraryVariable,isArbitraryValue]}],order:[{order:[isInteger,"first","last","none",isArbitraryVariable,isArbitraryValue]}],"grid-cols":[{"grid-cols":scaleGridTemplateColsRows()}],"col-start-end":[{col:scaleGridColRowStartAndEnd()}],"col-start":[{"col-start":scaleGridColRowStartOrEnd()}],"col-end":[{"col-end":scaleGridColRowStartOrEnd()}],"grid-rows":[{"grid-rows":scaleGridTemplateColsRows()}],"row-start-end":[{row:scaleGridColRowStartAndEnd()}],"row-start":[{"row-start":scaleGridColRowStartOrEnd()}],"row-end":[{"row-end":scaleGridColRowStartOrEnd()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":scaleGridAutoColsRows()}],"auto-rows":[{"auto-rows":scaleGridAutoColsRows()}],gap:[{gap:scaleUnambiguousSpacing()}],"gap-x":[{"gap-x":scaleUnambiguousSpacing()}],"gap-y":[{"gap-y":scaleUnambiguousSpacing()}],"justify-content":[{justify:["start","end","center","between","around","evenly","stretch","baseline","normal"]}],"justify-items":[{"justify-items":["start","end","center","stretch","normal"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline"]}],"align-items":[{items:["start","end","center","stretch","baseline"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline"]}],"place-items":[{"place-items":["start","end","center","stretch","baseline"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:scaleUnambiguousSpacing()}],px:[{px:scaleUnambiguousSpacing()}],py:[{py:scaleUnambiguousSpacing()}],ps:[{ps:scaleUnambiguousSpacing()}],pe:[{pe:scaleUnambiguousSpacing()}],pt:[{pt:scaleUnambiguousSpacing()}],pr:[{pr:scaleUnambiguousSpacing()}],pb:[{pb:scaleUnambiguousSpacing()}],pl:[{pl:scaleUnambiguousSpacing()}],m:[{m:scaleMargin()}],mx:[{mx:scaleMargin()}],my:[{my:scaleMargin()}],ms:[{ms:scaleMargin()}],me:[{me:scaleMargin()}],mt:[{mt:scaleMargin()}],mr:[{mr:scaleMargin()}],mb:[{mb:scaleMargin()}],ml:[{ml:scaleMargin()}],"space-x":[{"space-x":scaleUnambiguousSpacing()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":scaleUnambiguousSpacing()}],"space-y-reverse":["space-y-reverse"],size:[{size:scaleSizing()}],w:[{w:[themeContainer,"screen",...scaleSizing()]}],"min-w":[{"min-w":[themeContainer,"screen","none",...scaleSizing()]}],"max-w":[{"max-w":[themeContainer,"screen","none","prose",{screen:[themeBreakpoint]},...scaleSizing()]}],h:[{h:["screen",...scaleSizing()]}],"min-h":[{"min-h":["screen","none",...scaleSizing()]}],"max-h":[{"max-h":["screen",...scaleSizing()]}],"font-size":[{text:["base",themeText,isArbitraryVariableLength,isArbitraryLength]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[themeFontWeight,isArbitraryVariable,isArbitraryNumber]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",isPercent,isArbitraryValue]}],"font-family":[{font:[isArbitraryVariableFamilyName,isArbitraryValue,themeFont]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[themeTracking,isArbitraryVariable,isArbitraryValue]}],"line-clamp":[{"line-clamp":[isNumber,"none",isArbitraryVariable,isArbitraryNumber]}],leading:[{leading:[themeLeading,...scaleUnambiguousSpacing()]}],"list-image":[{"list-image":["none",isArbitraryVariable,isArbitraryValue]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",isArbitraryVariable,isArbitraryValue]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:scaleColor()}],"text-color":[{text:scaleColor()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:["solid","dashed","dotted","double","wavy"]}],"text-decoration-thickness":[{decoration:[isNumber,"from-font","auto",isArbitraryVariable,isArbitraryLength]}],"text-decoration-color":[{decoration:scaleColor()}],"underline-offset":[{"underline-offset":[isNumber,"auto",isArbitraryVariable,isArbitraryValue]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:scaleUnambiguousSpacing()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",isArbitraryVariable,isArbitraryValue]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",isArbitraryVariable,isArbitraryValue]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",isArbitraryVariablePosition,isArbitraryPosition]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",isArbitraryVariableSize,isArbitrarySize]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},isInteger,isArbitraryVariable,isArbitraryValue],radial:["",isArbitraryVariable,isArbitraryValue],conic:[isInteger,isArbitraryVariable,isArbitraryValue]},isArbitraryVariableImage,isArbitraryImage]}],"bg-color":[{bg:scaleColor()}],"gradient-from-pos":[{from:scaleGradientStopPosition()}],"gradient-via-pos":[{via:scaleGradientStopPosition()}],"gradient-to-pos":[{to:scaleGradientStopPosition()}],"gradient-from":[{from:scaleColor()}],"gradient-via":[{via:scaleColor()}],"gradient-to":[{to:scaleColor()}],rounded:[{rounded:scaleRadius()}],"rounded-s":[{"rounded-s":scaleRadius()}],"rounded-e":[{"rounded-e":scaleRadius()}],"rounded-t":[{"rounded-t":scaleRadius()}],"rounded-r":[{"rounded-r":scaleRadius()}],"rounded-b":[{"rounded-b":scaleRadius()}],"rounded-l":[{"rounded-l":scaleRadius()}],"rounded-ss":[{"rounded-ss":scaleRadius()}],"rounded-se":[{"rounded-se":scaleRadius()}],"rounded-ee":[{"rounded-ee":scaleRadius()}],"rounded-es":[{"rounded-es":scaleRadius()}],"rounded-tl":[{"rounded-tl":scaleRadius()}],"rounded-tr":[{"rounded-tr":scaleRadius()}],"rounded-br":[{"rounded-br":scaleRadius()}],"rounded-bl":[{"rounded-bl":scaleRadius()}],"border-w":[{border:scaleBorderWidth()}],"border-w-x":[{"border-x":scaleBorderWidth()}],"border-w-y":[{"border-y":scaleBorderWidth()}],"border-w-s":[{"border-s":scaleBorderWidth()}],"border-w-e":[{"border-e":scaleBorderWidth()}],"border-w-t":[{"border-t":scaleBorderWidth()}],"border-w-r":[{"border-r":scaleBorderWidth()}],"border-w-b":[{"border-b":scaleBorderWidth()}],"border-w-l":[{"border-l":scaleBorderWidth()}],"divide-x":[{"divide-x":scaleBorderWidth()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":scaleBorderWidth()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:["solid","dashed","dotted","double","hidden","none"]}],"divide-style":[{divide:["solid","dashed","dotted","double","hidden","none"]}],"border-color":[{border:scaleColor()}],"border-color-x":[{"border-x":scaleColor()}],"border-color-y":[{"border-y":scaleColor()}],"border-color-s":[{"border-s":scaleColor()}],"border-color-e":[{"border-e":scaleColor()}],"border-color-t":[{"border-t":scaleColor()}],"border-color-r":[{"border-r":scaleColor()}],"border-color-b":[{"border-b":scaleColor()}],"border-color-l":[{"border-l":scaleColor()}],"divide-color":[{divide:scaleColor()}],"outline-style":[{outline:["solid","dashed","dotted","double","none","hidden"]}],"outline-offset":[{"outline-offset":[isNumber,isArbitraryVariable,isArbitraryValue]}],"outline-w":[{outline:["",isNumber,isArbitraryVariableLength,isArbitraryLength]}],"outline-color":[{outline:[themeColor]}],shadow:[{shadow:["","none",themeShadow,isArbitraryVariableShadow,isArbitraryShadow]}],"shadow-color":[{shadow:scaleColor()}],"inset-shadow":[{"inset-shadow":["none",isArbitraryVariable,isArbitraryValue,themeInsetShadow]}],"inset-shadow-color":[{"inset-shadow":scaleColor()}],"ring-w":[{ring:scaleBorderWidth()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:scaleColor()}],"ring-offset-w":[{"ring-offset":[isNumber,isArbitraryLength]}],"ring-offset-color":[{"ring-offset":scaleColor()}],"inset-ring-w":[{"inset-ring":scaleBorderWidth()}],"inset-ring-color":[{"inset-ring":scaleColor()}],opacity:[{opacity:[isNumber,isArbitraryVariable,isArbitraryValue]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"]}],filter:[{filter:["","none",isArbitraryVariable,isArbitraryValue]}],blur:[{blur:scaleBlur()}],brightness:[{brightness:[isNumber,isArbitraryVariable,isArbitraryValue]}],contrast:[{contrast:[isNumber,isArbitraryVariable,isArbitraryValue]}],"drop-shadow":[{"drop-shadow":["","none",themeDropShadow,isArbitraryVariable,isArbitraryValue]}],grayscale:[{grayscale:["",isNumber,isArbitraryVariable,isArbitraryValue]}],"hue-rotate":[{"hue-rotate":[isNumber,isArbitraryVariable,isArbitraryValue]}],invert:[{invert:["",isNumber,isArbitraryVariable,isArbitraryValue]}],saturate:[{saturate:[isNumber,isArbitraryVariable,isArbitraryValue]}],sepia:[{sepia:["",isNumber,isArbitraryVariable,isArbitraryValue]}],"backdrop-filter":[{"backdrop-filter":["","none",isArbitraryVariable,isArbitraryValue]}],"backdrop-blur":[{"backdrop-blur":scaleBlur()}],"backdrop-brightness":[{"backdrop-brightness":[isNumber,isArbitraryVariable,isArbitraryValue]}],"backdrop-contrast":[{"backdrop-contrast":[isNumber,isArbitraryVariable,isArbitraryValue]}],"backdrop-grayscale":[{"backdrop-grayscale":["",isNumber,isArbitraryVariable,isArbitraryValue]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[isNumber,isArbitraryVariable,isArbitraryValue]}],"backdrop-invert":[{"backdrop-invert":["",isNumber,isArbitraryVariable,isArbitraryValue]}],"backdrop-opacity":[{"backdrop-opacity":[isNumber,isArbitraryVariable,isArbitraryValue]}],"backdrop-saturate":[{"backdrop-saturate":[isNumber,isArbitraryVariable,isArbitraryValue]}],"backdrop-sepia":[{"backdrop-sepia":["",isNumber,isArbitraryVariable,isArbitraryValue]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":scaleUnambiguousSpacing()}],"border-spacing-x":[{"border-spacing-x":scaleUnambiguousSpacing()}],"border-spacing-y":[{"border-spacing-y":scaleUnambiguousSpacing()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",isArbitraryVariable,isArbitraryValue]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[isNumber,"initial",isArbitraryVariable,isArbitraryValue]}],ease:[{ease:["linear","initial",themeEase,isArbitraryVariable,isArbitraryValue]}],delay:[{delay:[isNumber,isArbitraryVariable,isArbitraryValue]}],animate:[{animate:["none",themeAnimate,isArbitraryVariable,isArbitraryValue]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[themePerspective,isArbitraryVariable,isArbitraryValue]}],"perspective-origin":[{"perspective-origin":scaleOrigin()}],rotate:[{rotate:scaleRotate()}],"rotate-x":[{"rotate-x":scaleRotate()}],"rotate-y":[{"rotate-y":scaleRotate()}],"rotate-z":[{"rotate-z":scaleRotate()}],scale:[{scale:scaleScale()}],"scale-x":[{"scale-x":scaleScale()}],"scale-y":[{"scale-y":scaleScale()}],"scale-z":[{"scale-z":scaleScale()}],"scale-3d":["scale-3d"],skew:[{skew:scaleSkew()}],"skew-x":[{"skew-x":scaleSkew()}],"skew-y":[{"skew-y":scaleSkew()}],transform:[{transform:[isArbitraryVariable,isArbitraryValue,"","none","gpu","cpu"]}],"transform-origin":[{origin:scaleOrigin()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:scaleTranslate()}],"translate-x":[{"translate-x":scaleTranslate()}],"translate-y":[{"translate-y":scaleTranslate()}],"translate-z":[{"translate-z":scaleTranslate()}],"translate-none":["translate-none"],accent:[{accent:scaleColor()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:scaleColor()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",isArbitraryVariable,isArbitraryValue]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":scaleUnambiguousSpacing()}],"scroll-mx":[{"scroll-mx":scaleUnambiguousSpacing()}],"scroll-my":[{"scroll-my":scaleUnambiguousSpacing()}],"scroll-ms":[{"scroll-ms":scaleUnambiguousSpacing()}],"scroll-me":[{"scroll-me":scaleUnambiguousSpacing()}],"scroll-mt":[{"scroll-mt":scaleUnambiguousSpacing()}],"scroll-mr":[{"scroll-mr":scaleUnambiguousSpacing()}],"scroll-mb":[{"scroll-mb":scaleUnambiguousSpacing()}],"scroll-ml":[{"scroll-ml":scaleUnambiguousSpacing()}],"scroll-p":[{"scroll-p":scaleUnambiguousSpacing()}],"scroll-px":[{"scroll-px":scaleUnambiguousSpacing()}],"scroll-py":[{"scroll-py":scaleUnambiguousSpacing()}],"scroll-ps":[{"scroll-ps":scaleUnambiguousSpacing()}],"scroll-pe":[{"scroll-pe":scaleUnambiguousSpacing()}],"scroll-pt":[{"scroll-pt":scaleUnambiguousSpacing()}],"scroll-pr":[{"scroll-pr":scaleUnambiguousSpacing()}],"scroll-pb":[{"scroll-pb":scaleUnambiguousSpacing()}],"scroll-pl":[{"scroll-pl":scaleUnambiguousSpacing()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",isArbitraryVariable,isArbitraryValue]}],fill:[{fill:["none",...scaleColor()]}],"stroke-w":[{stroke:[isNumber,isArbitraryVariableLength,isArbitraryLength,isArbitraryNumber]}],stroke:[{stroke:["none",...scaleColor()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}}),twMerge=createTailwindMerge(getDefaultConfig)}}]);