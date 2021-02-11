(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(147)),i={title:"Project Level Config",slug:"project-config.html"},s={unversionedId:"framework/project_config",id:"framework/project_config",isDocsHomePage:!1,title:"Project Level Config",description:"Kotest is flexible and has many ways to configure tests, such as configuring the order of tests inside a spec, or how",source:"@site/docs/framework/project_config.md",slug:"/framework/project-config.html",permalink:"/docs/framework/project-config.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/project_config.md",version:"current",sidebar:"framework",previous:{title:"Test Case Config",permalink:"/docs/framework/testcaseconfig.html"},next:{title:"Framework configuration properties",permalink:"/docs/framework/framework-config-props.html"}},c=[{value:"Parallelism",id:"parallelism",children:[]},{value:"Assertion Mode",id:"assertion-mode",children:[]},{value:"Global Assert Softly",id:"global-assert-softly",children:[]},{value:"Fail On Ignored Tests",id:"fail-on-ignored-tests",children:[]},{value:"Test Ordering",id:"test-ordering",children:[]},{value:"Spec Ordering",id:"spec-ordering",children:[]},{value:"Test name case",id:"test-name-case",children:[]},{value:"Test name whitespace",id:"test-name-whitespace",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Kotest is flexible and has many ways to configure tests, such as configuring the order of tests inside a spec, or how\ntest classes are created. Sometimes you may want to set this at a global level and for that you need to use project-level-config."),Object(r.b)("p",null,"Project level configuration can be used by creating an object or class that extends from ",Object(r.b)("inlineCode",{parentName:"p"},"AbstractProjectConfig"),". At runtime,\nKotest will scan for classes that extend this abstract class and instantiate them, reading any configuration defined there."),Object(r.b)("p",null,"You can create more than one config class in different modules, and any on the current classpath will be detected and configs merged.\nThis is effective for allowing common config to be placed into a root module. In the case of clashes, one value will be arbitrarily picked, so it is not recommended adding competing settings to different configs."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If your project specifies more than one project config, they will be merged, but the resolution of conflicting values is unspecified. It is advised that separate configs do not specify the same settings"))),Object(r.b)("p",null,"Any configuration set at the Spec level or directly on a test will override the config specified at the project level."),Object(r.b)("p",null,"Some configuration options available in ",Object(r.b)("inlineCode",{parentName:"p"},"ProjectConfig")," include parallelism of tests, failing specs with ignored tests, global ",Object(r.b)("inlineCode",{parentName:"p"},"AssertSoftly"),", and reusable listeners or extensions."),Object(r.b)("h2",{id:"parallelism"},"Parallelism"),Object(r.b)("p",null,"You can ask Kotest to run specs in parallel to take advantage of modern cpus with several cores by setting the parallelism level (default is 1). Tests inside a spec are always executed sequentially."),Object(r.b)("p",null,"To do this, override ",Object(r.b)("inlineCode",{parentName:"p"},"parallelism")," inside your config and set it to a value higher than 1.\nThe number set is the number of concurrently executing specs. For example."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"object ProjectConfig : AbstractProjectConfig() {\n    override val parallelism = 3\n}\n")),Object(r.b)("p",null,"An alternative way to enable this is the system property ",Object(r.b)("inlineCode",{parentName:"p"},"kotest.framework.parallelism")," which will always (if defined) take priority over the value here."),Object(r.b)("p",null,"Some tests may not play nice in parallel, so you can opt out individual specs and force them to be executed in isolation by using the ",Object(r.b)("inlineCode",{parentName:"p"},"@DoNotParallelize")," annotation on the spec."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This is only available on the JVM target."))),Object(r.b)("h2",{id:"assertion-mode"},"Assertion Mode"),Object(r.b)("p",null,"You can ask Kotest to fail the build, or warn in std err, if a test is executed that does not use a Kotest assertion."),Object(r.b)("p",null,"To do this, set ",Object(r.b)("inlineCode",{parentName:"p"},"assertionMode")," to ",Object(r.b)("inlineCode",{parentName:"p"},"AssertionMode.Error")," or ",Object(r.b)("inlineCode",{parentName:"p"},"AssertionMode.Warn")," inside your config. For example.\nAn alternative way to enable this is the system property ",Object(r.b)("inlineCode",{parentName:"p"},"kotest.framework.assertion.mode")," which will always (if defined) take priority over the value here."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"object ProjectConfig : AbstractProjectConfig {\n    override val assertionMode = AssertionMode.Error\n}\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Assertion mode only works for Kotest assertions and not other assertion libraries. This is because the assertions need to opt-in\nto the assertion mode when enabled."))),Object(r.b)("h2",{id:"global-assert-softly"},"Global Assert Softly"),Object(r.b)("p",null,"Assert softly is very useful to batch up errors into a single failure. If we want to enable this for every test automatically, we can do this in a config.\nAn alternative way to enable this is by setting system property ",Object(r.b)("inlineCode",{parentName:"p"},"kotest.framework.assertion.globalassertsoftly")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," which will always (if defined) take priority over the value here."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"object ProjectConfig : AbstractProjectConfig {\n    override val globalAssertSoftly = true\n}\n")),Object(r.b)("h2",{id:"fail-on-ignored-tests"},"Fail On Ignored Tests"),Object(r.b)("p",null,"You may wish to consider an ignored test as a failure.\nTo enable this feature, set ",Object(r.b)("inlineCode",{parentName:"p"},"failOnIgnoredTests")," to true inside your project config. For example."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"object ProjectConfig : AbstractProjectConfig {\n    override val failOnIgnoredTests = true\n}\n")),Object(r.b)("h2",{id:"test-ordering"},"Test Ordering"),Object(r.b)("p",null,"When running multiple tests from a Spec, there's a certain order on how to execute them."),Object(r.b)("p",null,"By default, a sequential order is used (the order that tests are defined in the spec), but this can be changed. For available options see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/framework/test-ordering.html"}),"test ordering"),"."),Object(r.b)("h2",{id:"spec-ordering"},"Spec Ordering"),Object(r.b)("p",null,"By default, the ordering of Spec classes is not defined. This is often sufficient, when we have no preference, but if we need control over the execution order of specs, we can use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/framework/spec-ordering.html"}),"spec ordering"),"."),Object(r.b)("h2",{id:"test-name-case"},"Test name case"),Object(r.b)("p",null,"The case of the test names can be controlled by changing the value of ",Object(r.b)("inlineCode",{parentName:"p"},"testNameCase"),".\nBy default, the value is ",Object(r.b)("inlineCode",{parentName:"p"},"TestNameCase.AsIs")," which makes no change."),Object(r.b)("p",null,"By setting the value to ",Object(r.b)("inlineCode",{parentName:"p"},"TestNameCase.Lowercase")," a test's name will be lowercase in output."),Object(r.b)("p",null,"If you are using a spec that adds in prefixes to the test names (should as WordSpec or BehaviorSpec) then the values ",Object(r.b)("inlineCode",{parentName:"p"},"TestNameCase.Sentence")," and ",Object(r.b)("inlineCode",{parentName:"p"},"TestNameCase.InitialLowercase")," can be useful."),Object(r.b)("h2",{id:"test-name-whitespace"},"Test name whitespace"),Object(r.b)("p",null,"If you define test names over several lines then ",Object(r.b)("inlineCode",{parentName:"p"},"removeTestNameWhitespace")," can be useful. Take this example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'"""this is\n   my test case""" {\n  // test here\n}\n')),Object(r.b)("p",null,"Then the test name in output will be ",Object(r.b)("inlineCode",{parentName:"p"},"this is   my test case"),". By setting ",Object(r.b)("inlineCode",{parentName:"p"},"removeTestNameWhitespace")," to true,\nthen this name will be trimmed to ",Object(r.b)("inlineCode",{parentName:"p"},"this is my test case"),"."),Object(r.b)("p",null,"An alternative way to enable this is by setting system property ",Object(r.b)("inlineCode",{parentName:"p"},"kotest.framework.testname.multiline")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," which will always (if defined) take priority over the value here."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"object ProjectConfig : AbstractProjectConfig {\n    override val testNameRemoveWhitespace = true\n}\n")))}b.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,u=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return n?o.a.createElement(u,s(s({ref:t},l),{},{components:n})):o.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);