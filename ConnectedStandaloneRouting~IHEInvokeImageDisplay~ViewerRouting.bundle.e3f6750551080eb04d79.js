(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1001:function(e,t){},1002:function(e,t){},972:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0);function i(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e}),[e]),t.current}},977:function(e,t,n){"use strict";var r=n(52),i=n(0),a=n.n(i),o=n(1),s=n.n(o),u=n(17),c=n.n(u),l=n(15),p=n(244),d=n(564),f=n(16),m=n(6),v=n.n(m),y=n(993),h=n(33),b=(n(978),n(255)),g=n(7),S=n.n(g),w=n(36),I=n.n(w),D=(0,S.a.import)("util/scrollToIndex"),O=l.a.redux.actions.setViewportSpecificData,E=Object(r.b)((function(e){var t=e.viewports,n=(t.viewportSpecificData[t.activeViewportIndex]||{}).cine;return{activeEnabledElement:b.a.runCommand("getActiveViewportEnabledElement"),activeViewportCineData:n||{isPlaying:!1,cineFrameRate:24},activeViewportIndex:e.viewports.activeViewportIndex}}),(function(e){return{dispatchSetViewportSpecificData:function(t,n){e(O(t,n))}}}),(function(e,t,n){var r=e.activeEnabledElement,i=e.activeViewportCineData,a=e.activeViewportIndex;return{cineFrameRate:i.cineFrameRate,isPlaying:i.isPlaying,onPlayPauseChanged:function(e){var n=I()(i);n.isPlaying=!n.isPlaying,t.dispatchSetViewportSpecificData(a,{cine:n})},onFrameRateChanged:function(e){var n=I()(i);n.cineFrameRate=e,t.dispatchSetViewportSpecificData(a,{cine:n})},onClickNextButton:function(){var e=S.a.getToolState(r,"stack");if(e&&e.data&&e.data.length){var t=e.data[0],n=t.currentImageIdIndex;n>=t.imageIds.length-1||D(r,n+1)}},onClickBackButton:function(){var e=S.a.getToolState(r,"stack");if(e&&e.data&&e.data.length){var t=e.data[0].currentImageIdIndex;0!==t&&D(r,t-1)}},onClickSkipToStart:function(){var e=S.a.getToolState(r,"stack");e&&e.data&&e.data.length&&D(r,0)},onClickSkipToEnd:function(){var e=S.a.getToolState(r,"stack");if(e&&e.data&&e.data.length){var t=e.data[0].imageIds.length-1;D(r,t)}}}}))(f.c),P=l.a.redux.actions,C=P.setLayout,x=P.setViewportActive,j=Object(r.b)((function(e){return{currentLayout:e.viewports.layout,activeViewportIndex:e.viewports.activeViewportIndex}}),(function(e){return{onChange:function(t,n,r){for(var i=[],a=t.row+1,o=t.col+1,s=a*o,u=0;u<s;u++){var c=n.viewports[u],l=c&&c.plugin;c&&c.vtk&&(l="cornerstone"),i.push({plugin:l})}var p={numRows:a,numColumns:o,viewports:i};r>s-1&&e(x(0)),e(C(p))}}}),(function(e,t){var n=t.onChange,r=e.currentLayout,i=e.activeViewportIndex;return{onChange:function(e){return n(e,r,i)}}}))(f.l),R=n(90);function U(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function(e){function t(e){var n,r,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=V(t).call(this,e),n=!i||"object"!==T(i)&&"function"!=typeof i?A(r):i,N(A(n),"closeCineDialogIfNotApplicable",(function(){var e=n.props.dialog,t=n.state,r=t.dialogId,i=t.activeButtons,a=t.toolbarButtons;r&&(a.find((function(e){return e.options&&"CINE"===e.options.behavior}))||(e.dismiss({id:r}),i=i.filter((function(e){return e.options&&"CINE"!==e.options.behavior})),n.setState({dialogId:null,activeButtons:i})))}));var a=H.call(A(n));return n.state={toolbarButtons:a,activeButtons:[]},n.seriesPerStudyCount=[],n._handleBuiltIn=J.bind(A(n)),n.updateButtonGroups(),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,e),n=t,(r=[{key:"updateButtonGroups",value:function(){var e=this,t=b.c.modules[d.a.PANEL];this.buttonGroups={left:[],right:[]},t.forEach((function(t){var n=t.module,r=Array.from(n.defaultContext);n.menuOptions.forEach((function(t){var n=Array.from(t.context||r),i=e.props.activeContexts.some((function(e){return n.includes(e)})),a="function"==typeof t.isDisabled&&t.isDisabled(e.props.studies);if(i&&!a){var o={value:t.target,icon:t.icon,bottomLabel:t.label},s=t.from||"right";e.buttonGroups[s].push(o)}}))})),this.buttonGroups.left.unshift({value:"studies",icon:"th-large",bottomLabel:this.props.t("Series")})}},{key:"componentDidUpdate",value:function(e){var t=e.activeContexts!==this.props.activeContexts,n=e.studies,r=this.props.studies,i=this.seriesPerStudyCount,a=!1;if(n.length!==r.length)a=!0;else for(var o=0;o<r.length;o++)if(r[o].series.length!==i[o]){i[o]=r[o].series.length,a=!0;break}a&&this.updateButtonGroups(),t&&this.setState({toolbarButtons:H.call(this)},this.closeCineDialogIfNotApplicable)}},{key:"render",value:function(){var e=this,t=F.call(this,this.state.toolbarButtons,this.state.activeButtons),n=function(t,n){e.props.handleSidePanelChange(t,n)},r=n.bind(this,"left"),i=n.bind(this,"right");return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"ToolbarRow"},a.a.createElement("div",{className:"pull-left m-t-1 p-y-1",style:{padding:"10px"}},a.a.createElement(f.u,{options:this.buttonGroups.left,value:this.props.selectedLeftSidePanel||"",onValueChanged:r})),t,a.a.createElement(j,null),a.a.createElement("div",{className:"pull-right m-t-1 rm-x-1",style:{marginLeft:"auto"}},this.buttonGroups.right.length&&a.a.createElement(f.u,{options:this.buttonGroups.right,value:this.props.selectedRightSidePanel||"",onValueChanged:i}))))}}])&&k(n.prototype,r),i&&k(n,i),t}(i.Component);function q(e,t){var n=e.CustomComponent;if("function"==typeof n){var r=t.map((function(e){return e.id})),i=r.includes(e.id);return a.a.createElement(n,{parentContext:this,toolbarClickCallback:G.bind(this),button:e,key:e.id,activeButtons:r,isActive:i})}}function _(e,t){var n,r=this,i=e.buttons.map((function(e){return e.onClick=G.bind(r,e),t.map((function(e){return e.id})).indexOf(e.id)>-1&&(n=e.id),e}));return a.a.createElement(f.h,{key:e.id,label:e.label,icon:e.icon,buttons:i,activeCommand:n})}function B(e,t){return a.a.createElement(f.I,{key:e.id,label:e.label,icon:e.icon,onClick:G.bind(this,e),isActive:t.map((function(e){return e.id})).includes(e.id)})}function F(e,t){var n=this;return e.map((function(e){var r=e.CustomComponent,i=e.buttons&&e.buttons.length;return r?q.call(n,e,t):i?_.call(n,e,t):B.call(n,e,t)}))}function G(e,t,n){var r=this.state.activeButtons;if(e.commandName){var i=Object.assign({evt:t},e.commandOptions);b.a.runCommand(e.commandName,i)}if("setToolActive"===e.type){var a=r.filter((function(e){var t=e.options;return t&&!t.togglable}));this.setState({activeButtons:[].concat(U(a),[e])})}else"builtIn"===e.type&&this._handleBuiltIn(e)}function H(){var e=this,t=b.c.modules[d.a.TOOLBAR],n=[];return t.forEach((function(t){var r=t.module,i=r.definitions,a=r.defaultContext;i.forEach((function(t){var r=t.context||a;e.props.activeContexts.includes(r)&&n.push(t)}))})),n}function J(e){var t=this.props,n=t.dialog,r=t.t,i=this.state.dialogId,a=e.id,o=e.options;if("CINE"===o.behavior)if(i)n.dismiss({id:i}),this.setState((function(e){return{dialogId:null,activeButtons:U(e.activeButtons.filter((function(e){return e.id!==a})))}}));else{var s=document.querySelector(".ViewerMain").getBoundingClientRect(),u=s.x,c=s.y,l=n.create({content:E,defaultPosition:{x:u+20||0,y:c+20||0}});this.setState((function(t){return{dialogId:l,activeButtons:[].concat(U(t.activeButtons),[e])}}))}"DOWNLOAD_SCREEN_SHOT"===o.behavior&&b.a.runCommand("showDownloadViewportModal",{title:r("Download High Quality Image")})}N(L,"propTypes",{isLeftSidePanelOpen:s.a.bool.isRequired,isRightSidePanelOpen:s.a.bool.isRequired,selectedLeftSidePanel:s.a.string.isRequired,selectedRightSidePanel:s.a.string.isRequired,handleSidePanelChange:s.a.func.isRequired,activeContexts:s.a.arrayOf(s.a.string).isRequired,studies:s.a.array,t:s.a.func.isRequired,dialog:s.a.any,modal:s.a.any}),N(L,"defaultProps",{studies:[]});var Q=Object(h.d)(["Common","ViewportDownloadForm"])(Object(f.Q)(Object(f.P)(Object(R.e)(L))));l.a.utils.studyMetadataManager;var W=l.a.redux.actions.setActiveViewportSpecificData,Y=Object(r.b)((function(e,t){var n=e.loading.progress,r=I()(t.studies);return r.forEach((function(e){e.thumbnails.forEach((function(e){var t=e.displaySetInstanceUID,r="StackProgress:".concat(t),i=n[r],a=0;i&&(a=i.percentComplete),e.stackPercentComplete=a}))})),{studies:r}}),(function(e,t){return{onThumbnailClick:function(n){var r=function(e,t){return Array.isArray(e)&&e.reduce((function(e,t){var n=[];return t&&Array.isArray(t.displaySets)&&(n=t.displaySets),e.concat(n)}),[]).find((function(e){return e.displaySetInstanceUID===t}))||null}(t.studyMetadata,n);if(r.isDerived){var i=r.Modality;if(!(r=r.getSourceDisplaySet(t.studyMetadata)))throw new Error("Referenced series for ".concat(i," dataset not present."));if(!r)throw new Error("Source data not present")}e(W(r))}}}))(f.A),z=(n(979),n(980),n(134)),K=n(193);n(981);function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Z=function(e){var t=e.children,n=e.onDrop,r=e.viewportIndex,i=e.className,o=X(Object(K.d)({accept:"thumbnail",drop:function(e,t){var i=t.canDrop(),a=t.isOver();if(i&&a&&n){var o=e.StudyInstanceUID,s=e.displaySetInstanceUID;n({viewportIndex:r,StudyInstanceUID:o,displaySetInstanceUID:s})}},collect:function(e){return{highlighted:e.canDrop(),hovered:e.isOver()}}}),2),s=o[0],u=s.hovered,l=s.highlighted,p=o[1];return a.a.createElement("div",{className:c()("viewport-drop-target",{hovered:u},{highlighted:l},i),ref:p,"data-cy":"viewport-container-".concat(r)},t)};Z.propTypes={children:s.a.node.isRequired,viewportIndex:s.a.number.isRequired,onDrop:s.a.func.isRequired,className:s.a.string};var $=Z;var ee=n(982),te=n.n(ee),ne=z.a.loadAndCacheDerivedDisplaySets,re=function(e){var t=e.activeViewportIndex,n=e.availablePlugins,r=e.defaultPlugin,o=e.layout,s=e.numRows,u=e.numColumns,l=e.setViewportData,p=e.studies,d=e.viewportData,m=e.children,v=e.isStudyLoaded,y=100/s,h=100/u;if(!d||!d.length)return null;var b=Object(f.O)();Object(i.useEffect)((function(){v&&d.forEach((function(e){ne(e,p).forEach((function(e){e.catch((function(e){b.show({title:"Error loading derived display set:",message:e.message,type:"error",autoClose:!1})}))}))}))}),[p,d,v,b]);var g=a.a.useMemo((function(){return o.viewports.map((function(e,i){var o=d[i];if(!o)return null;var s={displaySet:o,studies:p},u=!e.plugin&&o&&o.plugin?o.plugin:e.plugin,f=function(e,t,n,r,i,o){if(e.displaySet){var s=r[i=i||o];if(!s)throw new Error("No Viewport Component available for name ".concat(i,".\n         Available plugins: ").concat(JSON.stringify(r)));return a.a.createElement(s,{viewportData:e,viewportIndex:t,children:[n]})}return a.a.createElement(te.a,null)}(s,i,m,n,u,r);return a.a.createElement($,{onDrop:l,viewportIndex:i,className:c()("viewport-container",{active:t===i}),key:i},f)}))}),[o,d,p,m,n,r,l,t]);return a.a.createElement("div",{"data-cy":"viewprt-grid",style:{display:"grid",gridTemplateRows:"repeat(".concat(s,", ").concat(y,"%)"),gridTemplateColumns:"repeat(".concat(u,", ").concat(h,"%)"),height:"100%",width:"100%"}},g)};re.propTypes={viewportData:s.a.array.isRequired,supportsDrop:s.a.bool.isRequired,activeViewportIndex:s.a.number.isRequired,layout:s.a.object.isRequired,availablePlugins:s.a.object.isRequired,setViewportData:s.a.func.isRequired,studies:s.a.array,children:s.a.node,defaultPlugin:s.a.string,numRows:s.a.number.isRequired,numColumns:s.a.number.isRequired},re.defaultProps={viewportData:[],numRows:1,numColumns:1,layout:{viewports:[{}]},activeViewportIndex:0,supportsDrop:!0,availablePlugins:{DefaultViewport:function(e){return React.createElement("div",null,JSON.stringify(e))}},defaultPlugin:"defaultViewportPlugin"};var ie=re,ae=n(588),oe=n.n(ae),se=oe()((function(e){var t={};return e.forEach((function(e){t[e.extensionId]=e.module})),t})),ue=Object(r.b)((function(e){var t,n=b.c.modules[d.a.VIEWPORT],r=se(n);n.length&&(t=n[0].extensionId);var i=e.viewports;return{numRows:i.numRows,numColumns:i.numColumns,layout:i.layout,activeViewportIndex:i.activeViewportIndex,availablePlugins:r,defaultPlugin:t}}),null)(ie),ce=n(996),le=n.n(ce);function pe(e){return(pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fe(e){return(fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function me(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ve(e,t){return(ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var he=oe()(le.a),be=function(e){function t(e){var n,r,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=fe(t).call(this,e),n=!i||"object"!==pe(i)&&"function"!=typeof i?me(r):i,ye(me(n),"fillEmptyViewportPanes",(function(){var e=[],t=n.props,r=t.layout,i=t.viewportSpecificData,a=n.state.displaySets;if(a&&a.length){for(var o=0;o<r.viewports.length;o++){var s=i[o];if(s&&s.StudyInstanceUID&&s.displaySetInstanceUID)e.push({StudyInstanceUID:s.StudyInstanceUID,displaySetInstanceUID:s.displaySetInstanceUID});else{var u=a.find((function(t){return!e.some((function(e){return e.displaySetInstanceUID===t.displaySetInstanceUID}))}))||a[a.length-1];e.push(u)}}e.forEach((function(e,t){e&&e.StudyInstanceUID&&n.setViewportData({viewportIndex:t,StudyInstanceUID:e.StudyInstanceUID,displaySetInstanceUID:e.displaySetInstanceUID})}))}})),ye(me(n),"setViewportData",(function(e){var t=e.viewportIndex,r=e.StudyInstanceUID,i=e.displaySetInstanceUID,a=n.findDisplaySet(n.props.studies,r,i);if(a.isDerived){var o=a.Modality;if(!(a=a.getSourceDisplaySet(n.props.studies)))throw new Error("Referenced series for ".concat(o," dataset not present."))}n.props.setViewportSpecificData(t,a)})),n.state={displaySets:[]},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ve(e,t)}(t,e),n=t,(r=[{key:"getDisplaySets",value:function(e){var t=[];return e.forEach((function(e){e.displaySets.forEach((function(e){e.plugin||(e.plugin="cornerstone"),t.push(e)}))})),t}},{key:"findDisplaySet",value:function(e,t,n){var r=e.find((function(e){return e.StudyInstanceUID===t}));if(r)return r.displaySets.find((function(e){return e.displaySetInstanceUID===n}))}},{key:"componentDidMount",value:function(){if(this.props.studies){var e=this.getDisplaySets(this.props.studies);this.setState({displaySets:e},this.fillEmptyViewportPanes)}}},{key:"componentDidUpdate",value:function(e){var t=e.layout.viewports.length,n=this.props.layout.viewports.length,r=this.props.layout.viewports.some((function(e){return!!e.vtk}));if(this.props.studies!==e.studies||n!==t&&!r){var i=this.getDisplaySets(this.props.studies);this.setState({displaySets:i},this.fillEmptyViewportPanes)}}},{key:"render",value:function(){var e=this.props.viewportSpecificData,t=he(e);return a.a.createElement("div",{className:"ViewerMain"},this.state.displaySets.length&&a.a.createElement(ue,{isStudyLoaded:this.props.isStudyLoaded,studies:this.props.studies,viewportData:t,setViewportData:this.setViewportData}))}},{key:"componentWillUnmount",value:function(){var e=this,t=this.props.viewportSpecificData;Object.keys(t).forEach((function(t){e.props.clearViewportSpecificData(t)}))}}])&&de(n.prototype,r),i&&de(n,i),t}(i.Component);ye(be,"propTypes",{activeViewportIndex:s.a.number.isRequired,studies:s.a.array,viewportSpecificData:s.a.object.isRequired,layout:s.a.object.isRequired,setViewportSpecificData:s.a.func.isRequired,clearViewportSpecificData:s.a.func.isRequired});var ge=be,Se=l.a.redux.actions,we=Se.setViewportSpecificData,Ie=Se.clearViewportSpecificData,De=Object(r.b)((function(e){var t=e.viewports;return{activeViewportIndex:t.activeViewportIndex,layout:t.layout,viewportSpecificData:t.viewportSpecificData,viewports:e.viewports}}),(function(e){return{setViewportSpecificData:function(t,n){e(we(t,n))},clearViewportSpecificData:function(){e(Ie())}}}))(ge);n(983);function Oe(e){return(Oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Pe(e,t){return!t||"object"!==Oe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ce(e){return(Ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function xe(e,t){return(xe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var je,Re,Ue,Te=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Pe(this,Ce(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&xe(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e="right"===this.props.from?"from-right":"from-left",t=this.props.width?{maxWidth:this.props.width,marginRight:this.props.isOpen?"0":-1*Number.parseInt(this.props.width)}:{};return a.a.createElement("section",{style:t,className:c()("sidepanel",e,{"is-open":this.props.isOpen})},this.props.children)}}])&&Ee(n.prototype,r),i&&Ee(n,i),t}(i.Component);je=Te,Re="propTypes",Ue={from:s.a.string.isRequired,isOpen:s.a.bool.isRequired,children:s.a.node,width:s.a.string},Re in je?Object.defineProperty(je,Re,{value:Ue,enumerable:!0,configurable:!0,writable:!0}):je[Re]=Ue;var ke=Te;n(984);function Ve(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Ae=b.e.services.UIModalService,Me=function(e){var t=e.context,n=e.children;return a.a.createElement(f.g,{fallbackComponent:function(){return a.a.createElement("div",{className:"ErrorFallback",role:"alert"},a.a.createElement("p",null,"Error rendering ",t,". ",a.a.createElement("br",null)," Check the browser console for more details."))},context:t,onError:function(e,n){Ae.show({content:function(){var r=Ve(Object(i.useState)(!1),2),o=r[0],s=r[1];return a.a.createElement("div",{className:"ErrorFallback",role:"alert"},a.a.createElement("div",{className:"ErrorBoundaryDialog"},a.a.createElement("h3",{className:"ErrorBoundaryDialogTitle"},t,": ",a.a.createElement("span",null,e.message))),a.a.createElement("button",{className:"btn btn-primary btn-sm ErrorBoundaryDialogButton",onClick:function(){return s((function(e){return!e}))}},a.a.createElement(f.j,{name:"chevron-down",className:c()("ErrorBoundaryDialogIcon",{opened:o})}),"Stack Trace"),o&&a.a.createElement("pre",null,n))},title:"Something went wrong in ".concat(t)})}},n)};Me.propTypes={context:s.a.string.isRequired,children:s.a.node.isRequired};var Ne=Me,Le=n(210),qe=n(256);n(985),n(997);function _e(e){return(_e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Be(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Fe(e){return(Fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ge(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function He(e,t){return(He=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Qe=function(e){function t(e){var n,r,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=Fe(t).call(this,e),n=!i||"object"!==_e(i)&&"function"!=typeof i?Ge(r):i,Je(Ge(n),"state",{isLeftSidePanelOpen:!0,isRightSidePanelOpen:!1,selectedRightSidePanel:"",selectedLeftSidePanel:"studies",thumbnails:[]}),Je(Ge(n),"retrieveTimepoints",(function(e){l.a.log.info("retrieveTimepoints");var t=(new Date).toISOString(),r=(new Date).toISOString();return n.props.studies&&(r=new Date("1000-01-01").toISOString(),n.props.studies.forEach((function(e){var n=v()(e.StudyDate,"YYYYMMDD").toISOString();n<t&&(t=n),n>r&&(r=n)}))),Promise.resolve([{timepointType:"baseline",timepointId:"TimepointId",studyInstanceUIDs:n.props.studyInstanceUIDs,PatientID:e.PatientID,earliestDate:t,latestDate:r,isLocked:!1}])})),Je(Ge(n),"storeTimepoints",(function(e){return l.a.log.info("storeTimepoints"),Promise.resolve()})),Je(Ge(n),"updateTimepoint",(function(e,t){return l.a.log.info("updateTimepoint"),Promise.resolve()})),Je(Ge(n),"removeTimepoint",(function(e){return l.a.log.info("removeTimepoint"),Promise.resolve()})),Je(Ge(n),"disassociateStudy",(function(e,t){return l.a.log.info("disassociateStudy"),Promise.resolve()})),Je(Ge(n),"onTimepointsUpdated",(function(e){n.props.onTimepointsUpdated&&n.props.onTimepointsUpdated(e)})),Je(Ge(n),"onMeasurementsUpdated",(function(e){n.props.onMeasurementsUpdated&&n.props.onMeasurementsUpdated(e)}));var a=n.props.activeServer,o=Object.assign({},a);return l.a.measurements.MeasurementApi.setConfiguration({dataExchange:{retrieve:p.a.retrieveMeasurements,store:p.a.storeMeasurements},server:o}),l.a.measurements.TimepointApi.setConfiguration({dataExchange:{retrieve:n.retrieveTimepoints,store:n.storeTimepoints,remove:n.removeTimepoint,update:n.updateTimepoint,disassociate:n.disassociateStudy}}),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&He(e,t)}(t,e),n=t,(r=[{key:"componentWillUnmount",value:function(){this.props.dialog&&this.props.dialog.dismissAll()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.studies,n=e.isStudyLoaded,r=l.a.measurements,i=r.TimepointApi,a=r.MeasurementApi,o=new i("TimepointId",{onTimepointsUpdated:this.onTimepointsUpdated}),s=new a(o,{onMeasurementsUpdated:this.onMeasurementsUpdated});if(this.currentTimepointId="TimepointId",this.timepointApi=o,this.measurementApi=s,t){var u=t[0]&&t[0].PatientID;o.retrieveTimepoints({PatientID:u}),n&&this.measurementApi.retrieveMeasurements(u,["TimepointId"]),this.setState({thumbnails:Ye(t)})}}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.studies,r=t.isStudyLoaded;if(n!==e.studies&&this.setState({thumbnails:Ye(n)}),r&&r!==e.isStudyLoaded){var i=n[0]&&n[0].PatientID,a=this.currentTimepointId;this.timepointApi.retrieveTimepoints({PatientID:i}),this.measurementApi.retrieveMeasurements(i,[a])}}},{key:"render",value:function(){var e,t,n=this;return b.c.modules[d.a.PANEL].forEach((function(r){r.module.components.forEach((function(r){r.id===n.state.selectedRightSidePanel?t=r.component:r.id===n.state.selectedLeftSidePanel&&(e=r.component)}))})),a.a.createElement(a.a.Fragment,null,a.a.createElement(Le.a.Consumer,null,(function(e){return a.a.createElement(qe.a.Consumer,null,(function(t){return a.a.createElement(R.c.Consumer,null,(function(n){return a.a.createElement(y.a,{linkText:n.appConfig.showStudyList?"Study List":void 0,linkPath:n.appConfig.showStudyList?"/":void 0,userManager:t},e&&e.createLogoComponentFn&&e.createLogoComponentFn(a.a))}))}))})),a.a.createElement(Ne,{context:"ToolbarRow"},a.a.createElement(Q,{isLeftSidePanelOpen:this.state.isLeftSidePanelOpen,isRightSidePanelOpen:this.state.isRightSidePanelOpen,selectedLeftSidePanel:this.state.isLeftSidePanelOpen?this.state.selectedLeftSidePanel:"",selectedRightSidePanel:this.state.isRightSidePanelOpen?this.state.selectedRightSidePanel:"",handleSidePanelChange:function(e,t){var r=e&&e[0].toUpperCase()+e.slice(1),i="is".concat(r,"SidePanelOpen"),a="selected".concat(r,"SidePanel"),o=Object.assign({},n.state),s=o[i],u=o[a],c=u===t||null===t;o[a]=t||u,(!s||c)&&(o[i]=!o[i]),n.setState(o)},studies:this.props.studies})),a.a.createElement("div",{className:"FlexboxLayout"},a.a.createElement(Ne,{context:"LeftSidePanel"},a.a.createElement(ke,{from:"left",isOpen:this.state.isLeftSidePanelOpen},e?a.a.createElement(e,{viewports:this.props.viewports,studies:this.props.studies,activeIndex:this.props.activeViewportIndex}):a.a.createElement(Y,{studies:this.state.thumbnails,studyMetadata:this.props.studies}))),a.a.createElement("div",{className:c()("main-content")},a.a.createElement(Ne,{context:"ViewerMain"},a.a.createElement(De,{studies:this.props.studies,isStudyLoaded:this.props.isStudyLoaded}))),a.a.createElement(Ne,{context:"RightSidePanel"},a.a.createElement(ke,{from:"right",isOpen:this.state.isRightSidePanelOpen},t&&a.a.createElement(t,{isOpen:this.state.isRightSidePanelOpen,viewports:this.props.viewports,studies:this.props.studies,activeIndex:this.props.activeViewportIndex})))))}}])&&Be(n.prototype,r),i&&Be(n,i),t}(i.Component);Je(Qe,"propTypes",{studies:s.a.arrayOf(s.a.shape({StudyInstanceUID:s.a.string.isRequired,StudyDate:s.a.string,PatientID:s.a.string,displaySets:s.a.arrayOf(s.a.shape({displaySetInstanceUID:s.a.string.isRequired,SeriesDescription:s.a.string,SeriesNumber:s.a.number,InstanceNumber:s.a.number,numImageFrames:s.a.number,Modality:s.a.string.isRequired,images:s.a.arrayOf(s.a.shape({getImageId:s.a.func.isRequired}))}))})),studyInstanceUIDs:s.a.array,activeServer:s.a.shape({type:s.a.string,wadoRoot:s.a.string}),onTimepointsUpdated:s.a.func,onMeasurementsUpdated:s.a.func,viewports:s.a.object.isRequired,activeViewportIndex:s.a.number.isRequired,isStudyLoaded:s.a.bool,dialog:s.a.object});var We=Object(f.P)(Qe),Ye=function(e){return e.map((function(e){return{StudyInstanceUID:e.StudyInstanceUID,thumbnails:e.displaySets.map((function(e){var t,n,r=e.displaySetInstanceUID,i=e.SeriesDescription,a=e.InstanceNumber,o=e.numImageFrames,s=e.SeriesNumber;if(e.Modality&&"SEG"===e.Modality)n="SEG";else if(e.images&&e.images.length){var u=Math.floor(e.images.length/2);t=e.images[u].getImageId()}else n=e.Modality?e.Modality:"UN";return{imageId:t,altImageText:n,displaySetInstanceUID:r,SeriesDescription:i,InstanceNumber:a,numImageFrames:o,SeriesNumber:s}}))}}))},ze=l.a.redux.actions,Ke=ze.setTimepoints,Xe=ze.setMeasurements,Ze=function(e){return e.servers.find((function(e){return!0===e.active}))},$e=Object(r.b)((function(e){var t=e.viewports,n=e.servers;return{viewports:t.viewportSpecificData,activeViewportIndex:t.activeViewportIndex,activeServer:Ze(n)}}),(function(e){return{onTimepointsUpdated:function(t){e(Ke(t))},onMeasurementsUpdated:function(t){e(Xe(t))}}}))(We);t.a=$e},978:function(e,t,n){},979:function(e,t,n){},980:function(e,t,n){},981:function(e,t,n){},982:function(e,t){},983:function(e,t,n){},984:function(e,t,n){},985:function(e,t,n){},995:function(e,t,n){"use strict";var r=n(52),i=n(0),a=n.n(i),o=n(84),s=n(164),u=n(134),c=n(8),l=n(972),p=n(977),d=n(1),f=n.n(d),m=n(255),v=n(16),y=n(90);function h(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){h(a,r,i,o,s,"next",e)}function s(e){h(a,r,i,o,s,"throw",e)}o(void 0)}))}}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function S(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var w=o.a.OHIFStudyMetadata,I=o.a.OHIFSeriesMetadata,D=s.a.retrieveStudiesMetadata,O=s.a.deleteStudyMetadataPromise,E=u.a.studyMetadataManager,P=u.a.makeCancelable,C=function(e,t,n,r){var i=!1;return r||(i=x(e,t,n)),i},x=function(e,t,n){var r,i,a,o,s,u,c,l=!1;if(Object.keys(n).length>0){var p=n.seriesInstanceUID,d=(r=t.getDisplaySets(),i=p,a=function(e,t){return t.SeriesInstanceUID===e},o=S(r),s=[],u=0,(c=i.split(",")).forEach((function(e){var t=o.findIndex(a.bind(void 0,e));if(t>=0){var n=g(o.splice(t,1),1)[0];s[u]=n,u++}})),{promoted:u===c.length,data:[].concat(s,S(o))});e.displaySets=d.data,l=d.promoted}return l},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.seriesInstanceUID,i=!0;if(!r)return i;var a=r.split(","),o=function(){if(d.length===a.length)return d.every((function(e){return a.some((function(t){return t===e.SeriesInstanceUID}))}))},s=function(){for(var e=!0,t=0;t<a.length;t++){var n=a[t],r=d[t];if(!r||r.SeriesInstanceUID!==n){e=!1;break}}return e},u=e.series,c=void 0===u?[]:u,l=e.displaySets,p=void 0===l?[]:l,d=n?c:p,f=n?o:s;return i=!!d&&f()},R=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e){var r=n.show,i=void 0===r?function(){}:r;i({message:t})}},U=function(e,t){var n=m.c.modules.sopClassHandlerModule,r=e.getData(),i=new I(t,r);e.getSeriesByUID(t.SeriesInstanceUID)?e.updateSeries(t.SeriesInstanceUID,i):e.addSeries(i),e.createAndAddDisplaySetsForSeries(n,i),r.displaySets=e.getDisplaySets(),r.derivedDisplaySets=e.getDerivedDatasets({Modality:t.Modality}),T(r,e)},T=function(e,t){var n=e.StudyInstanceUID;E.get(n)||E.add(t)},k=function(e,t){var n=m.c.modules.sopClassHandlerModule;e.displaySets||(e.displaySets=t.createDisplaySets(n)),e.derivedDisplaySets&&t._addDerivedDisplaySets(e.derivedDisplaySets)},V=function(e){return{StudyInstanceUID:e.StudyInstanceUID,series:e.series.map((function(e){return{SeriesInstanceUID:e.SeriesInstanceUID}}))}};function A(e){var t,n,r=e.server,o=e.studyInstanceUIDs,s=e.seriesInstanceUIDs,u=e.clearViewportSpecificData,d=e.setStudyData,f=g(Object(i.useState)(!1),2),m=f[0],h=f[1],I=g(Object(i.useState)([]),2),x=I[0],A=I[1],M=g(Object(i.useState)(!1),2),N=M[0],L=M[1],q=Object(v.O)(),_=Object(i.useContext)(y.c).appConfig,B=void 0===_?{}:_,F=B.filterQueryParam,G=void 0!==F&&F,H=B.maxConcurrentMetadataRequests,J=function(e,n){if(Array.isArray(e)&&e.length>0){var r=e.map((function(e){d(e.StudyInstanceUID,V(e));var r=new w(e,e.StudyInstanceUID);return k(e,r),T(e,r),t[e.StudyInstanceUID]=P(Q(r)).then((function(t){t&&!t.isCanceled&&function(e,t,n){C(e,t,n,G)&&u(0);var r=j(e,n,G);R(r,"Query parameters were not totally applied. It might be using original series list for given study.",q),A([].concat(S(x),[e])),L(!0)}(e,r,n)})).catch((function(e){e&&!e.isCanceled&&(h(!0),c.a.error(e))})),e}));A(r)}},Q=function(){var e=b(regeneratorRuntime.mark((function e(t){var n,r,i,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.getData(),r=n.seriesLoader){e.next=3;break}return e.abrupt("return");case 3:return i=function(){var e=b(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.hasNext()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.next();case 4:return n=e.sent,U(t,n),A((function(e){return S(e)})),e.abrupt("return",i());case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=H||t.getSeriesCount(),o=Array(a).fill(null).map(i),e.next=8,Promise.all(o);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=b(regeneratorRuntime.mark((function e(){var t,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t={},i=s&&s[0],a=[r,o],i&&(t.seriesInstanceUID=i,G&&a.push(t)),(B.splitQueryParameterCalls||B.enableGoogleCloudAdapter)&&a.push(!0),n[o]=P(D.apply(void 0,a)).then((function(e){e&&!e.isCanceled&&J(e,t)})).catch((function(e){e&&!e.isCanceled&&(h(!0),c.a.error(e))}))}catch(e){e&&(h(!0),c.a.error(e))}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=Object(i.useCallback)((function(){for(var e in n)"cancel"in n[e]&&n[e].cancel();for(var r in t)"cancel"in t[r]&&(t[r].cancel(),O(r),E.remove(r))})),z=Object(l.a)(o);return Object(i.useEffect)((function(){!(z&&z.every((function(e){return o.includes(e)})))&&(E.purge(),Y())}),[z,Y,o]),Object(i.useEffect)((function(){return t={},n={},W(),function(){Y()}}),[]),m?a.a.createElement("div",null,"Error: ",JSON.stringify(m)):a.a.createElement(p.a,{studies:x,isStudyLoaded:N,studyInstanceUIDs:o})}A.propTypes={studyInstanceUIDs:f.a.array.isRequired,seriesInstanceUIDs:f.a.array,server:f.a.object,clearViewportSpecificData:f.a.func.isRequired,setStudyData:f.a.func.isRequired};var M=A,N=n(15).a.redux.actions,L=N.clearViewportSpecificData,q=N.setStudyData,_=function(e){return!0===e.active},B=Object(r.b)((function(e,t){var n=e.servers.servers.find(_);return{server:t.server||n}}),(function(e){return{setStudyData:function(t,n){e(q(t,n))},clearViewportSpecificData:function(){e(L())}}}))(M);t.a=B}}]);
//# sourceMappingURL=ConnectedStandaloneRouting~IHEInvokeImageDisplay~ViewerRouting.bundle.e3f6750551080eb04d79.js.map