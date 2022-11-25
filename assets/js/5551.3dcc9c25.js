"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5551],{8368:(e,n,t)=>{t.d(n,{Z:()=>E});var a=t(6428);var r=t(6687),i=t(4923),l=t(8920),o=t(3634),c=t(8431);const s="details_ofgr",m="isBrowser_KSUi",d="collapsibleContent_BgGI";var u=["summary","children"];function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function p(e,n){return!!e&&(e===n||p(e.parentElement,n))}function v(e){var n=e.summary,t=e.children,v=(0,l.Z)(e,u),h=(0,o.Z)(),E=(0,r.useRef)(null),g=(0,c.u)({initialState:!v.open}),Z=g.collapsed,b=g.setCollapsed,N=(0,r.useState)(v.open),y=N[0],C=N[1];return r.createElement("details",(0,a.Z)({},v,{ref:E,open:y,"data-collapsed":Z,className:(0,i.Z)(s,h&&m,v.className),onMouseDown:function(e){f(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;f(n)&&p(n,E.current)&&(e.preventDefault(),Z?(b(!1),C(!0)):b(!0))}}),null!=n?n:r.createElement("summary",null,"Details"),r.createElement(c.z,{lazy:!1,collapsed:Z,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){b(e),C(!e)}},r.createElement("div",{className:d},t)))}const h="details_t1ye";function E(e){var n=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return r.createElement(v,(0,a.Z)({},n,{className:(0,i.Z)("alert alert--info",h,n.className)}))}},9310:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(6687),r=t(9586),i=t(3949),l=t(6428),o=t(8920),c=t(4923);const s="iconEdit_EdfC";var m=["className"];function d(e){var n=e.className,t=(0,o.Z)(e,m);return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(s,n),"aria-hidden":"true"},t),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function u(e){var n=e.editUrl;return a.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener",className:i.k.common.editThisPage},a.createElement(d,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2312:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(6428),r=t(8920),i=t(6687),l=t(4923),o=t(9586),c=t(9824);const s="anchorWithStickyNavbar_VUnx",m="anchorWithHideOnScrollNavbar_Hi65";var d=["as","id"];function u(e){var n=e.as,t=e.id,u=(0,r.Z)(e,d),f=(0,c.L)().navbar.hideOnScroll;return"h1"!==n&&t?i.createElement(n,(0,a.Z)({},u,{className:(0,l.Z)("anchor",f?m:s),id:t}),u.children,i.createElement("a",{className:"hash-link",href:"#"+t,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(n,(0,a.Z)({},u,{id:void 0}))}},6754:(e,n,t)=>{t.d(n,{Z:()=>_});var a=t(6428),r=t(6687),i=t(8920),l=t(4084),o=["mdxType","originalType"];var c=t(1276);var s=t(7899);var m=t(8368);var d=t(2312);function u(e){return r.createElement(d.Z,e)}var f=t(4923);const p="containsTaskList_JqeH";const v="img_rgV5";var h=t(3949),E=t(9586);const g="admonition_EMon",Z="admonitionHeading_i6tJ",b="admonitionIcon_JIKz",N="admonitionContent_xepn";var y={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(E.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(E.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(E.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(E.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(E.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},C={secondary:"note",important:"info",success:"tip",warning:"danger"};function T(e){var n,t=function(e){var n=r.Children.toArray(e),t=n.find((function(e){var n;return r.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(n=e.props)?void 0:n.mdxType)})),a=r.createElement(r.Fragment,null,n.filter((function(e){return e!==t})));return{mdxAdmonitionTitle:t,rest:a}}(e.children),a=t.mdxAdmonitionTitle,i=t.rest;return Object.assign({},e,{title:null!=(n=e.title)?n:a,children:i})}const _={head:function(e){var n=r.Children.map(e.children,(function(e){return r.isValidElement(e)?function(e){var n;if(null!=(n=e.props)&&n.mdxType&&e.props.originalType){var t=e.props,a=(t.mdxType,t.originalType,(0,i.Z)(t,o));return r.createElement(e.props.originalType,a)}return e}(e):e}));return r.createElement(l.Z,e,n)},code:function(e){var n=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return r.Children.toArray(e.children).every((function(e){var t;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&n.includes(null==(t=e.props)?void 0:t.mdxType)}))?r.createElement("code",e):r.createElement(c.Z,e)},a:function(e){return r.createElement(s.Z,e)},pre:function(e){var n;return r.createElement(c.Z,(0,r.isValidElement)(e.children)&&"code"===(null==(n=e.children.props)?void 0:n.originalType)?e.children.props:Object.assign({},e))},details:function(e){var n=r.Children.toArray(e.children),t=n.find((function(e){var n;return r.isValidElement(e)&&"summary"===(null==(n=e.props)?void 0:n.mdxType)})),i=r.createElement(r.Fragment,null,n.filter((function(e){return e!==t})));return r.createElement(m.Z,(0,a.Z)({},e,{summary:t}),i)},ul:function(e){return r.createElement("ul",(0,a.Z)({},e,{className:(n=e.className,(0,f.Z)(n,(null==n?void 0:n.includes("contains-task-list"))&&p))}));var n},img:function(e){return r.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(n=e.className,(0,f.Z)(n,v))}));var n},h1:function(e){return r.createElement(u,(0,a.Z)({as:"h1"},e))},h2:function(e){return r.createElement(u,(0,a.Z)({as:"h2"},e))},h3:function(e){return r.createElement(u,(0,a.Z)({as:"h3"},e))},h4:function(e){return r.createElement(u,(0,a.Z)({as:"h4"},e))},h5:function(e){return r.createElement(u,(0,a.Z)({as:"h5"},e))},h6:function(e){return r.createElement(u,(0,a.Z)({as:"h6"},e))},admonition:function(e){var n=T(e),t=n.children,a=n.type,i=n.title,l=n.icon,o=function(e){var n,t=null!=(n=C[e])?n:e;return y[t]||(console.warn('No admonition config found for admonition type "'+t+'". Using Info as fallback.'),y.info)}(a),c=null!=i?i:o.label,s=o.iconComponent,m=null!=l?l:r.createElement(s,null);return r.createElement("div",{className:(0,f.Z)(h.k.common.admonition,h.k.common.admonitionType(e.type),"alert","alert--"+o.infimaClassName,g)},r.createElement("div",{className:Z},r.createElement("span",{className:b},m),c),r.createElement("div",{className:N},t))},mermaid:t(1068).Z}},8020:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(6687),r=t(5858),i=t(4171);function l(e){var n=e.children;return a.createElement(r.Zo,{components:i.Z},n)}},97:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(6687),r=t(4923),i=t(7899);function l(e){var n=e.permalink,t=e.title,l=e.subLabel,o=e.isNext;return a.createElement(i.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},t))}},6992:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(6687),r=t(4923),i=t(9586),l=t(7899);const o="tag_sNJf",c="tagRegular_TbMm",s="tagWithCount_MS6z";function m(e){var n=e.permalink,t=e.label,i=e.count;return a.createElement(l.Z,{href:n,className:(0,r.Z)(o,i?s:c)},t,i&&a.createElement("span",null,i))}const d="tags__IOi",u="tag_ax12";function f(e){var n=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(d,"padding--none","margin-left--sm")},n.map((function(e){var n=e.label,t=e.permalink;return a.createElement("li",{key:t,className:u},a.createElement(m,{label:n,permalink:t}))}))))}}}]);