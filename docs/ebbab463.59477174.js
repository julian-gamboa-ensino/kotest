(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(147)),a={id:"plugins",title:"Plugins",slug:"plugins.html"},s={unversionedId:"framework/plugins",id:"framework/plugins",isDocsHomePage:!1,title:"Plugins",description:"Sometimes there's a need for special integration with some tools that are more complex",source:"@site/docs/framework/plugins.md",slug:"/framework/plugins.html",permalink:"/docs/framework/plugins.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/plugins.md",version:"current",sidebar:"framework",previous:{title:"Listeners",permalink:"/docs/framework/listeners.html"},next:{title:"Mocking and Kotest",permalink:"/docs/framework/integrations/mocking.html"}},l=[{value:"Pitest",id:"pitest",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sometimes there's a need for special integration with some tools that are more complex\nIn this situation plugins are necessary."),Object(i.b)("h2",{id:"pitest"},"Pitest"),Object(i.b)("p",null,"The Mutation Testing tool ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://pitest.org/"}),"Pitest")," is integrated via a kotest plugin. After ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://gradle-pitest-plugin.solidsoft.info/"}),"configuring")," the Pitest extension, add the ",Object(i.b)("inlineCode",{parentName:"p"},"kotest-plugins-pitest")," module to your dependencies as well:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'    testImplementation("io.kotest:kotest-plugins-pitest:<version>")\n')),Object(i.b)("p",null,"After doing that, tell Pitest that we're going to use ",Object(i.b)("inlineCode",{parentName:"p"},"Kotest")," as a ",Object(i.b)("inlineCode",{parentName:"p"},"testPlugin"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'// Assuming that you have already configured the Gradle/Maven extension\nconfigure<PitestPluginExtension> {\n    testPlugin.set("Kotest")    // <-- Telling Pitest that we\'re using Kotest\n    targetClasses.set(listOf("my.company.package.*"))\n}\n')),Object(i.b)("p",null,"This should set everything up, and running ",Object(i.b)("inlineCode",{parentName:"p"},"./gradlew pitest")," will generate reports in the way you configured."))}p.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,g=u["".concat(a,".").concat(f)]||u[f]||m[f]||i;return n?o.a.createElement(g,s(s({ref:t},c),{},{components:n})):o.a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);