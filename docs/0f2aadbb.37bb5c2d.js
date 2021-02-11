(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||i;return t?o.a.createElement(m,c(c({ref:n},l),{},{components:t})):o.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),i=(t(0),t(147)),a={id:"koin",title:"Koin",sidebar_label:"Koin",slug:"koin.html"},c={unversionedId:"extensions/koin",id:"extensions/koin",isDocsHomePage:!1,title:"Koin",description:"Koin",source:"@site/docs/extensions/koin.md",slug:"/extensions/koin.html",permalink:"/docs/extensions/koin.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/extensions/koin.md",version:"current",sidebar_label:"Koin",sidebar:"extensions",previous:{title:"Current Instant Listeners",permalink:"/docs/extensions/instant.html"},next:{title:"Robolectric",permalink:"/docs/extensions/robolectric.html"}},s=[{value:"Koin",id:"koin",children:[]}],l={rightToc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"koin"},"Koin"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://insert-koin.io/"}),"Koin DI Framework")," can be used with Kotest through the ",Object(i.b)("inlineCode",{parentName:"p"},"KoinListener")," test listener and its own interface ",Object(i.b)("inlineCode",{parentName:"p"},"KoinTest"),"."),Object(i.b)("p",null,"To add the listener to your project, add the depency to your project:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-groovy"}),'testImplementation("io.kotest:kotest-extensions-koin:${version}")\n')),Object(i.b)("p",null,"With the dependency added, we can use Koin in our tests!"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'class KotestAndKoin : FunSpec(), KoinTest {\n\n    override fun listeners() = listOf(KoinListener(myKoinModule))\n\n    val userService by inject<UserService>()\n\n    init {\n      test("Use user service") {\n        userService.getUser().username shouldBe "Kerooker"\n      }\n    }\n\n}\n')))}u.isMDXComponent=!0}}]);