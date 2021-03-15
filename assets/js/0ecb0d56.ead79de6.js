(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,d=p["".concat(o,".").concat(b)]||p[b]||f[b]||i;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},150:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(16),a=n(151);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},151:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(149)),o=n(150),c={id:"images-plugin",title:"Images"},u={unversionedId:"features/images-plugin",id:"features/images-plugin",isDocsHomePage:!1,title:"Images",description:"\u2192 See setup instructions for the images plugin",source:"@site/../docs/features/images-plugin.mdx",slug:"/features/images-plugin",permalink:"/docs/features/images-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/features/images-plugin.mdx",version:"current",sidebar:"features",previous:{title:"Databases",permalink:"/docs/features/databases-plugin"},next:{title:"Sandbox",permalink:"/docs/features/sandbox-plugin"}},s=[{value:"Cache Inspector",id:"cache-inspector",children:[]},{value:"Attribution",id:"attribution",children:[]},{value:"Leak Tracking",id:"leak-tracking",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u2192 ",Object(i.b)("a",{parentName:"p",href:"/docs/setup/images-plugin"},"See setup instructions for the images plugin")),Object(i.b)("p",null,"The images plugin allows you to inspect what images were fetched, where they are\ncoming from and selectively clear caches. Currently, the plugin supports\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebook/fresco/"},"Fresco")," as backend."),Object(i.b)("img",{alt:"Images plugin",src:Object(o.a)("img/images-plugin.png")}),Object(i.b)("h2",{id:"cache-inspector"},"Cache Inspector"),Object(i.b)("p",null,"Images are grouped by the different caching layers they are stored in. The current\nfill rate of the cache is shown and you can choose to selectively clear caches."),Object(i.b)("h2",{id:"attribution"},"Attribution"),Object(i.b)("p",null,"Images can be annotated with attributes that can help to determine the context in\nwhich an image was loaded and displayed. You can use that information to filter\nby a particular surface or only inspect images that are in the critical path\nof your application, for instance during cold start."),Object(i.b)("h2",{id:"leak-tracking"},"Leak Tracking"),Object(i.b)("p",null,"Dealing with large resources can require special APIs to be used that circumvent\nusual garbage collection. The plugin allows tracking ",Object(i.b)("inlineCode",{parentName:"p"},"CloseableReference"),"s for\nFresco on Android that weren't properly closed, which can help you improve\nthe performance of your app."))}p.isMDXComponent=!0}}]);