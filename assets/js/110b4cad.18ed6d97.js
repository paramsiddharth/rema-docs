"use strict";(self.webpackChunkrema_docs=self.webpackChunkrema_docs||[]).push([[506],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||s[m]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3595:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},p="Execution",u={unversionedId:"setup/execution",id:"setup/execution",title:"Execution",description:"Here, you'll find the instructions to setup the production environment for Rema.",source:"@site/docs/setup/execution.md",sourceDirName:"setup",slug:"/setup/execution",permalink:"/docs/setup/execution",editUrl:"https://github.com/paramsiddharth/rema-docs/tree/main/packages/create-docusaurus/templates/shared/docs/setup/execution.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/docs/"},next:{title:"Development Setup",permalink:"/docs/setup/development-setup"}},d={},s=[{value:"Dependencies for the Canvas API",id:"dependencies-for-the-canvas-api",level:2},{value:"A MongoDB Server",id:"a-mongodb-server",level:2},{value:"Starting Rema in Production Mode",id:"starting-rema-in-production-mode",level:2}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"execution"},"Execution"),(0,o.kt)("p",null,"Here, you'll find the instructions to setup the production environment for Rema."),(0,o.kt)("h2",{id:"dependencies-for-the-canvas-api"},"Dependencies for the Canvas API"),(0,o.kt)("p",null,"Rema requires the system to have the dependencies for the\n",(0,o.kt)("inlineCode",{parentName:"p"},"node-canvas")," module set up. The dependencies are required to have the Node.js\nport of the Canvas API to work properly in the back-end."),(0,o.kt)("p",null,"The detailed and updated setup information for its dependencies\nis given in the ",(0,o.kt)("inlineCode",{parentName:"p"},"node-canvas")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Automattic/node-canvas/wiki"},"wiki"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"OS"),(0,o.kt)("th",{parentName:"tr",align:null},"Command"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OS X"),(0,o.kt)("td",{parentName:"tr",align:null},"Using ",(0,o.kt)("a",{parentName:"td",href:"https://brew.sh/"},"Homebrew"),":",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"brew install pkg-config cairo pango libpng jpeg giflib librsvg"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Ubuntu"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"sudo apt install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Fedora"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"sudo yum install gcc-c++ cairo-devel pango-devel libjpeg-turbo-devel giflib-devel"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Solaris"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pkgin install cairo pango pkg-config xproto renderproto kbproto xextproto"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OpenBSD"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"doas pkg_add cairo pango png jpeg giflib"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Windows"),(0,o.kt)("td",{parentName:"tr",align:null},"See the ",(0,o.kt)("inlineCode",{parentName:"td"},"node-canvas")," ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/Automattic/node-canvas/wiki/Installation:-Windows"},"wiki"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Others"),(0,o.kt)("td",{parentName:"tr",align:null},"See the ",(0,o.kt)("inlineCode",{parentName:"td"},"node-canvas")," ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/Automattic/node-canvas/wiki"},"wiki"))))),(0,o.kt)("p",null,"Ensuring the abovementioned dependencies are properly set up and configured, install the package dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd src\nnpm ci --only=production\n")),(0,o.kt)("p",null,"If successful, you can proceed to the next step."),(0,o.kt)("h2",{id:"a-mongodb-server"},"A MongoDB Server"),(0,o.kt)("p",null,"Run a MongoDB server and add the server URI to the ",(0,o.kt)("inlineCode",{parentName:"p"},"DB")," environment variable before starting up Rema."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# If not set, defaults to 'mongodb://localhost/rema'\nexport DB='mongodb://uri.to.mongodb/dbname'\n")),(0,o.kt)("p",null,"Check out the [","[Environment Variables]","] page for more details on the environment variables."),(0,o.kt)("h2",{id:"starting-rema-in-production-mode"},"Starting Rema in Production Mode"),(0,o.kt)("p",null,"Rema runs on port 8080 by default. To use a custom port, use the PORT environment variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# For production\nNODE_ENV=production PORT=80 npm start\n")),(0,o.kt)("p",null,"Great! Rema is up and running on http://localhost."))}m.isMDXComponent=!0}}]);