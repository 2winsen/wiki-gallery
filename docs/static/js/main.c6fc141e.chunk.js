(this["webpackJsonpwiki-gallery"]=this["webpackJsonpwiki-gallery"]||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports={container:"FullSizeItem_container__24ixg",loadingState:"FullSizeItem_loadingState__1l2kJ",actionPanel:"FullSizeItem_actionPanel__26RWV",navigation:"FullSizeItem_navigation__3pKmD",navigationRight:"FullSizeItem_navigationRight__3WGPR",navigationLeft:"FullSizeItem_navigationLeft__1JJb0"}},,,,,function(e,n,t){e.exports={searchForm:"SearchForm_searchForm__3DNmN",small:"SearchForm_small__3jO0d",search:"SearchForm_search__31s98",submit:"SearchForm_submit__1I3rN"}},function(e,n,t){e.exports={container:"SearchResult_container__3s8hJ",header:"SearchResult_header__2BrA8",heading:"SearchResult_heading__3Ea2L",headerFormContainer:"SearchResult_headerFormContainer__2YKpB"}},function(e,n,t){e.exports={container:"ErrorState_container__109Bh",content:"ErrorState_content__icorN",heading:"ErrorState_heading__1-Wma"}},function(e,n,t){e.exports={container:"TextInput_container__DcbPH",inputElement:"TextInput_inputElement__mZbjj",clearButton:"TextInput_clearButton__3iMc5"}},,,function(e,n,t){e.exports={container:"EmptyState_container__2sJhT",content:"EmptyState_content__2w42X"}},function(e,n,t){e.exports={container:"LoadingState_container__3Lrjl",overlay:"LoadingState_overlay__hZ0TD"}},function(e,n,t){e.exports={container:"Gallery_container__1XYZR",loadingContainer:"Gallery_loadingContainer__1Gnaq"}},,,function(e,n,t){e.exports={container:"Search_container__bAj9i",formContainer:"Search_formContainer__v4cpY"}},function(e,n,t){e.exports={main:"Layout_main__JVRrj",footer:"Layout_footer__Sswk3"}},,,,function(e,n,t){e.exports={ldsRing:"Spinner_ldsRing__1SDyT"}},function(e,n,t){e.exports={button:"ScrollTop_button__2wMGZ",fadeIn:"ScrollTop_fadeIn__2rqdB"}},,function(e,n,t){e.exports={container:"GalleryItem_container__3Gkce"}},,function(e){e.exports=JSON.parse('{"a":"0.1.9"}')},,,,,,,function(e,n,t){},,,,,,function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(1),i=t.n(a),c=t(27),o=t.n(c),s=(t(41),t(10)),l=t(2),u=t(7),j=t(28);var d=t(35),h=t(12);function m(e){return e.original.height&&e.original.width}function p(e){var n=e.thumbnail,t=e.original;return n.width>t.width&&n.height>t.height?Object(h.a)(Object(h.a)({},e),{},{original:n}):e}function b(e,n){var t=function(e){return{source:e.source,width:e.width,height:e.height}},r=[];return e.query&&(r=Object.values(e.query.pages).filter(m).map(p).map((function(e,r){return{index:r,dataIndex:n,original:t(e.original),thumbnail:t(e.thumbnail)}}))),{continuePage:e.continue?e.continue.gimcontinue:"",pages:r}}function f(e,n){var t=new URLSearchParams;return t.append("action","query"),t.append("format","json"),t.append("prop","pageimages"),t.append("titles",e),t.append("generator","images"),t.append("redirects","1"),t.append("piprop","name|original|thumbnail"),t.append("pithumbsize","300"),t.append("gimlimit","20"),n&&t.append("gimcontinue",n),"".concat("https://en.wikipedia.org","/w/api.php?").concat(t.toString(),"&origin=*")}function g(e){var n=Object(d.a)(function(e){return function(n,t){if(0===n)return f(e);if(t){var r=b(t,0);return r.continuePage?f(e,r.continuePage):null}return null}}(e),(function(e){return fetch(e,{headers:{"Content-Type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()}))})),t=n.data,r=n.error,a=n.size,i=n.setSize,c=void 0;return t&&(c=t.map(b)),{data:c,isLoading:!r&&!t,isError:r,size:a,setSize:i}}function x(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return Boolean(e)})).join(" ")}function v(){return Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}function O(){return Object(r.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"})})}function _(){return Object(r.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})})}function w(){return Object(r.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"})})}function k(){return Object(r.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"})})}function S(){return Object(r.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}function N(){return Object(r.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 10l7-7m0 0l7 7m-7-7v18"})})}function L(){return Object(r.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})}var y=t(19),C=t.n(y);var E=function(){return Object(r.jsx)("div",{className:C.a.container,children:Object(r.jsxs)("div",{className:C.a.content,children:[Object(r.jsx)(O,{}),Object(r.jsx)("h2",{children:"No results found"}),Object(r.jsx)("span",{children:"Try adjusting your search criteria"})]})})},z=t(15),B=t.n(z);var I=function(){return Object(r.jsx)("div",{className:B.a.container,children:Object(r.jsxs)("div",{className:B.a.content,children:[Object(r.jsx)(_,{}),Object(r.jsx)("h2",{className:B.a.heading,children:"Oops a nasty error occurred"}),Object(r.jsx)("span",{children:"Most probably our engineers already fixed this issue... anyway try refreshing the page"})]})})},F=t(29),R=t.n(F);var T=function(){return Object(r.jsxs)("div",{className:R.a.ldsRing,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},P=t(20),M=t.n(P);var W=function(e){var n=e.active,t=e.overlay,a=e.className;return n?Object(r.jsx)("div",{className:x(M.a.container,t&&M.a.overlay,a),children:Object(r.jsx)(T,{})}):Object(r.jsx)(r.Fragment,{})},G=t(30),J=t.n(G),A=function(){return document.documentElement.scrollTop>70};var D=function(){var e=Object(a.useState)(A()),n=Object(u.a)(e,2),t=n[0],i=n[1];return Object(a.useEffect)((function(){var e=function(){return i(A())};return document.addEventListener("scroll",e),function(){return document.removeEventListener("scroll",e)}}),[]),Object(r.jsx)(r.Fragment,{children:t&&Object(r.jsx)("button",{className:J.a.button,onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:Object(r.jsx)(N,{})})})},q=t(31);var H=t(8),Z=t.n(H);var U=function(e){var n=e.page,t=e.onClick,i=e.onNext,c=e.onPrevious,o=Object(a.useState)(!1),s=Object(u.a)(o,2),l=s[0],j=s[1];Object(a.useEffect)((function(){var e=document.getElementsByTagName("body")[0];return e.classList.add("noScroll"),function(){return e.classList.remove("noScroll")}}),[]);var d,m=Object(q.useSwipeable)({onSwipedLeft:i,onSwipedRight:c});return d={onRight:i,onLeft:c},Object(a.useEffect)((function(){function e(e){switch(e.key){case"ArrowLeft":d.onLeft&&d.onLeft(e);break;case"ArrowRight":d.onRight&&d.onRight(e)}}return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}})),Object(r.jsxs)("div",{className:Z.a.container,onClick:t,children:[!l&&Object(r.jsx)(W,{active:!0,className:Z.a.loadingState}),Object(r.jsx)("div",{className:Z.a.actionPanel,children:Object(r.jsx)("a",{href:n.original.source,target:"_blank",rel:"noreferrer",className:"iconButton",children:Object(r.jsx)(w,{})})}),Object(r.jsx)("span",{className:x(Z.a.navigation,"iconButton",Z.a.navigationLeft),onClick:function(e){e.stopPropagation(),c()},children:Object(r.jsx)(k,{})}),Object(r.jsx)("img",Object(h.a)({src:n.original.source,alt:n.original.source,onLoad:function(){return j(!0)}},m)),Object(r.jsx)("span",{className:x(Z.a.navigation,"iconButton",Z.a.navigationRight),onClick:function(e){e.stopPropagation(),i()},children:Object(r.jsx)(S,{})})]})},V=t(21),Y=t.n(V),K=t(32),X=t.n(K);var Q=function(e){var n=e.page,t=e.onClick;return Object(r.jsx)("div",{className:X.a.container,onClick:function(){return t(n)},children:Object(r.jsx)("img",{src:n.thumbnail.source,alt:n.thumbnail.source})})};function $(){var e=document.getElementsByTagName("html")[0];return e.scrollHeight>e.clientHeight}var ee=function(){var e,n,t,i=g(Object(l.h)().criteria||""),c=i.data,o=i.isLoading,s=i.isError,d=i.size,h=i.setSize,m=function(e){return e?e.reduce((function(e,n){return e+n.pages.length}),0):0}(c),p=function(e){if(!e)return!1;var n=e[e.length-1];return Boolean(n.continuePage)}(c),b=Object(a.useState)(),f=Object(u.a)(b,2),x=f[0],v=f[1],O=function(){return h(d+1)},_=Object(a.useRef)();function w(e){v(e)}return Object(a.useEffect)((function(){!$()&&p&&O()}),[p]),e=function(){!$()&&p&&O()},n=[p],Object(a.useEffect)((function(){function n(){e()}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),n),Object(a.useEffect)((function(){null!=_.current&&c&&c[_.current]&&(v(c[_.current].pages[0]),_.current=void 0)}),[c]),o?t=Object(r.jsx)(W,{active:!0,overlay:!0}):s?t=Object(r.jsx)(I,{}):c&&(t=Object(r.jsx)(j.a,{dataLength:m,next:O,hasMore:p,loader:Object(r.jsx)("div",{className:Y.a.loadingContainer,children:Object(r.jsx)(W,{active:!0})}),children:c.map((function(e){return e.pages.length?e.pages.map((function(e){return Object(r.jsx)(Q,{page:e,onClick:w},"".concat(e.dataIndex,"-").concat(e.index))})):Object(r.jsx)(E,{},"empty")}))})),Object(r.jsxs)("div",{className:Y.a.container,children:[x&&Object(r.jsx)(U,{page:x,onClick:function(){v(void 0)},onNext:function(){if(x&&c){var e=function(e,n){var t=e[n.dataIndex].pages[n.index+1];if(!t){var r=n.dataIndex+1;e[r]&&(t=e[r].pages[0])}return t}(c,x);e?v(e):p?(O(),_.current=x.dataIndex+1):v(void 0)}},onPrevious:function(){if(x&&c){var e=function(e,n){var t=e[n.dataIndex].pages[n.index-1];if(!t){var r=n.dataIndex-1;if(e[r]){var a=e[r].pages.length;t=e[r].pages[a-1]}}return t}(c,x);v(e)}}}),t,!x&&Object(r.jsx)(D,{})]})},ne=t(16),te=t.n(ne);var re=function(e){return Object(r.jsxs)("div",{className:te.a.container,children:[Object(r.jsx)("input",{className:x(e.className,te.a.inputElement),type:"text",placeholder:e.placeholder,onChange:e.onChange,value:e.value}),Object(r.jsx)("span",{className:x(te.a.clearButton,"iconButton"),onClick:e.onClear,children:Object(r.jsx)(L,{})})]})},ae=t(13),ie=t.n(ae);var ce=function(e){var n=Object(a.useState)(e.value||""),t=Object(u.a)(n,2),i=t[0],c=t[1],o=Object(l.g)();return Object(r.jsxs)("form",{className:x(ie.a.searchForm,ie.a[e.size]),onSubmit:function(e){e.preventDefault(),o.push("/result/".concat(encodeURI(i)))},children:[Object(r.jsx)(re,{className:ie.a.search,type:"text",placeholder:"e.g. Isaac Newton",onChange:function(e){c(e.target.value)},onClear:function(){return c("")},value:i}),Object(r.jsx)("button",{className:ie.a.submit,type:"submit",children:Object(r.jsx)(v,{})})]})},oe=t(14),se=t.n(oe);var le=function(){var e=Object(l.h)().criteria,n={appName:"Wiki Gallery"}.appName;return Object(r.jsxs)("div",{className:se.a.container,children:[Object(r.jsxs)("header",{className:se.a.header,children:[Object(r.jsx)("div",{className:se.a.heading,children:Object(r.jsx)(s.b,{to:"/",children:Object(r.jsx)("h2",{children:n})})}),Object(r.jsx)("div",{className:se.a.headerFormContainer,children:Object(r.jsx)(ce,{size:"small",value:e})})]}),Object(r.jsx)("main",{children:Object(r.jsx)(ee,{})})]})},ue=t(24),je=t.n(ue);var de=function(){var e={appName:"Wiki Gallery"}.appName;return Object(r.jsx)("div",{className:je.a.container,children:Object(r.jsxs)("div",{className:je.a.formContainer,children:[Object(r.jsx)("h1",{children:e}),Object(r.jsx)(ce,{size:"large"})]})})},he=t(25),me=t.n(he);var pe=function(e){var n=e.children;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("main",{className:me.a.main,children:n}),Object(r.jsxs)("footer",{className:me.a.footer,children:["This website uses material from ",Object(r.jsx)("a",{href:"https://en.wikipedia.org/w/api.php",children:"Wikipedia API"}),"."]})]})},be=t(34);var fe=function(){return Object(a.useEffect)((function(){console.log("app version:",be.a)}),[]),Object(r.jsx)(s.a,{basename:"/wiki-gallery",children:Object(r.jsx)(pe,{children:Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{path:"/result/:criteria?",children:Object(r.jsx)(le,{})}),Object(r.jsx)(l.b,{path:"/",exact:!0,children:Object(r.jsx)(de,{})}),Object(r.jsx)(l.a,{to:"/"})]})})})},ge=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),i(e),c(e)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(fe,{})}),document.getElementById("root")),ge()}],[[47,1,2]]]);
//# sourceMappingURL=main.c6fc141e.chunk.js.map