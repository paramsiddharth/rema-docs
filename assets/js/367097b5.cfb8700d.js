"use strict";(self.webpackChunkrema_docs=self.webpackChunkrema_docs||[]).push([[153],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=o(n),c=l,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,p(p({ref:t},d),{},{components:n})):a.createElement(k,p({ref:t},d))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4822:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return m}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),p=["components"],i={sidebar_position:2},s="Template API",o={unversionedId:"templates/template-api",id:"templates/template-api",title:"Template API",description:"The template API is used to create, manage, update, extend, and remove templates.",source:"@site/docs/templates/template-api.md",sourceDirName:"templates",slug:"/templates/template-api",permalink:"/docs/templates/template-api",editUrl:"https://github.com/paramsiddharth/rema-docs/edit/main/docs/templates/template-api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Templates",permalink:"/docs/templates/"},next:{title:"Certificates",permalink:"/docs/certificates/"}},d={},m=[{value:"<code>/api/template</code>",id:"apitemplate",level:2},{value:"<code>GET</code>",id:"get",level:3},{value:"<code>POST</code>",id:"post",level:3},{value:"<code>DELETE</code>",id:"delete",level:3},{value:"<code>/api/template/{name}</code>",id:"apitemplatename",level:2},{value:"<code>GET</code>",id:"get-1",level:3},{value:"<code>PATCH</code>",id:"patch",level:3},{value:"<code>DELETE</code>",id:"delete-1",level:3},{value:"<code>/api/template/{name}/preview</code>",id:"apitemplatenamepreview",level:2},{value:"<code>/api/template/{name}/extend</code>",id:"apitemplatenameextend",level:2},{value:"<code>POST</code>",id:"post-1",level:3},{value:"<code>/api/template/{name}/export</code>",id:"apitemplatenameexport",level:2},{value:"<code>GET</code>",id:"get-2",level:3}],u={toc:m};function c(e){var t=e.components,n=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"template-api"},"Template API"),(0,r.kt)("p",null,"The template API is used to create, manage, update, extend, and remove templates.\nAs of now, it isn't authenticated. It functions as a REST API, supporting a variety of routes and methods."),(0,r.kt)("p",null,"All APIs are mounted on the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api")," route, including the template API.\nUnless states otherwise, all non-empty request bodies are expected to be be JSON."),(0,r.kt)("p",null,"The following routes and methods are supported in the template API."),(0,r.kt)("h2",{id:"apitemplate"},(0,r.kt)("inlineCode",{parentName:"h2"},"/api/template")),(0,r.kt)("p",null,"This route supports 3 methods: ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),"."),(0,r.kt)("h3",{id:"get"},(0,r.kt)("inlineCode",{parentName:"h3"},"GET")),(0,r.kt)("p",null,"Retrieves the names of all templates."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /api/template\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "3 template(s) found!",\n    "count": 1,\n    "data": [\n        "empty-curly-borders",\n        ...\n    ]\n}\n'))),(0,r.kt)("h3",{id:"post"},(0,r.kt)("inlineCode",{parentName:"h3"},"POST")),(0,r.kt)("p",null,"Creates a new template."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'POST http://localhost:8080/api/template\nContent-Type: application/json\n\n{\n    "name": "empty-curly-borders",\n    "title": "Empty, Curly Borders",\n    "background": "stock/empty/curly-borders.png",\n    "dimensions": {\n        "x": 990,\n        "y": 765\n    },\n    "fields": [\n        { ... },\n        { ... }\n    ]\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "name": "empty-curly-borders",\n        "title": "Empty, Curly Borders",\n        "background": "stock/empty/curly-borders.png",\n        "dimensions": {\n            "x": 990,\n            "y": 765\n        },\n        "fields": [\n            { ... },\n            { ... }\n        ],\n        "date": "2021-07-11T12:47:31.771Z"\n    },\n    "msg": "Template created!"\n}\n'))),(0,r.kt)("h3",{id:"delete"},(0,r.kt)("inlineCode",{parentName:"h3"},"DELETE")),(0,r.kt)("p",null,"Deletes all/multiple templates."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If no query parameters are provided,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If there are no existing certificates, it deletes all templates."),(0,r.kt)("li",{parentName:"ul"},"If there are existing certificates, it returns a failure message."))),(0,r.kt)("li",{parentName:"ul"},"If the parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"unused")," is provided with any value, it deletes all\nunused templates i. e. Those not used by any certificate."),(0,r.kt)("li",{parentName:"ul"},"If the parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"force")," is provided with any value, it deletes\nall certificates and templates.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"DELETE /api/template\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "All templates deleted!",\n    "data": [\n        "empty-curly-borders",\n        ...\n    ],\n    "count": 3\n}\n'))),(0,r.kt)("h2",{id:"apitemplatename"},(0,r.kt)("inlineCode",{parentName:"h2"},"/api/template/{name}")),(0,r.kt)("p",null,"This route is used for operations pertaining to the template identified by ",(0,r.kt)("inlineCode",{parentName:"p"},"{name}"),".\nIt supports the ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," methods."),(0,r.kt)("h3",{id:"get-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"GET")),(0,r.kt)("p",null,"Retrieves a particular template."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /api/template/empty-curly-borders\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "Template found!",\n    "data": {\n        "name": "empty-curly-borders",\n        "title": "Empty, Curly Borders",\n        "background": "stock/empty/curly-borders.png",\n        "dimensions": {\n            "x": 990,\n            "y": 765\n        },\n        "fields": [\n            { ... },\n            { ... }\n        ],\n        "date": "2021-07-11T12:53:36.294Z"\n    }\n}\n'))),(0,r.kt)("h3",{id:"patch"},(0,r.kt)("inlineCode",{parentName:"h3"},"PATCH")),(0,r.kt)("p",null,"Update a particular template."),(0,r.kt)("p",null,"The request body is supposed to have an updated version\nof the same template. The untouched global properties\nof the template and the unchanged fields may be omitted."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fields that are supposed to be deleted should have the\nproperty ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "fields": [\n        { ... },\n        {\n            "name": "unwantedField",\n            "delete": true\n        },\n        { ... }\n    ]\n}\n')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fields that have the property ",(0,r.kt)("inlineCode",{parentName:"p"},"fixed")," set to true in the\ntemplate cannot be updated unless ",(0,r.kt)("inlineCode",{parentName:"p"},'"force": true')," is\npresent in the field's body."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "fields": [\n        { ... },\n        {\n            "name": "thisFieldFailsToGetUpdated",\n            "position": {\n                "x": 20,\n                "y": 30\n            }\n        },\n        {\n            "name": "thisFieldGetsUpdatedSuccessfully",\n            "position": {\n                "x": 20,\n                "y": 30\n            },\n            "force": true\n        },\n        { ... }\n    ]\n}\n')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If no query parameters are provided,"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If there are no existing certificates associated with the template, it updates the template."),(0,r.kt)("li",{parentName:"ul"},"If there are existing certificates associated with the template, it returns a failure message."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"force")," is provided with any value, it deletes all\nthe associated certificates are deleted and the template is updated.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If both the ",(0,r.kt)("inlineCode",{parentName:"p"},"force")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"keep")," parameters are provided with any values,\nthe associated certificates are retained and the template is updated."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'PATCH /api/template/empty-curly-borders\nContent-Type: application/json\n\n{\n    "dimensions": {\n        "x": 400,\n        "y": 500\n    },\n    "title": "Chappal",\n    "fields": [\n        {\n            "name": "Surname",\n            "delete": true\n        },\n        {\n            "name": "DP",\n            "position": {\n                "x": 200,\n                "y": 300\n            }\n        }\n    ]\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "name": "empty-curly-borders",\n        "title": "Chappal",\n        "background": "stock/empty/curly-borders.png",\n        "dimensions": {\n            "x": 400,\n            "y": 500\n        },\n        "fields": [\n            {\n                "name": "Name",\n                ...\n            },\n            {\n                "name": "DP",\n                "position": {\n                    "x": 200,\n                    "y": 300\n                },\n                ...\n            }\n        ],\n        "date": "2021-07-11T13:01:32.711Z"\n    },\n    "msg": "Template updated!"\n}\n'))),(0,r.kt)("h3",{id:"delete-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"DELETE")),(0,r.kt)("p",null,"Deletes a particular template."),(0,r.kt)("p",null,"If the templates is being used by at least one certificate,\nit won't be deleted and a failure message will be returned."),(0,r.kt)("p",null,"To force deletion of the template and its corresponding\ncertificates, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"force")," query parameter with any value."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"DELETE /api/template/empty-curly-borders\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "Template deleted!",\n    "data": {\n        "name": "empty-curly-borders",\n        "title": "Chappal",\n        "background": "stock/empty/curly-borders.png",\n        "dimensions": { ... },\n        "fields": [\n            { ... },\n            { ... }\n        ],\n        "date": "2021-07-11T13:01:32.711Z"\n    }\n}\n'))),(0,r.kt)("h2",{id:"apitemplatenamepreview"},(0,r.kt)("inlineCode",{parentName:"h2"},"/api/template/{name}/preview")),(0,r.kt)("p",null,"This route supports only ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," requests and returns a\npreview of the template identified by ",(0,r.kt)("inlineCode",{parentName:"p"},"{name}"),". The format\nis PNG by default. If the query parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"pdf")," is provided\nwith any value, the preview is rendered and returned\nas a PDF."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PNG:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /api/template/empty-curly-borders/preview\n"))),(0,r.kt)("li",{parentName:"ul"},"PDF:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /api/template/empty-curly-borders/preview?pdf\n")))),(0,r.kt)("h2",{id:"apitemplatenameextend"},(0,r.kt)("inlineCode",{parentName:"h2"},"/api/template/{name}/extend")),(0,r.kt)("p",null,"This route supports only ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," requests and is used to create\nnew templates inheriting properties from the existing template\nidentified by ",(0,r.kt)("inlineCode",{parentName:"p"},"{name}"),"."),(0,r.kt)("h3",{id:"post-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"POST")),(0,r.kt)("p",null,"Creates a new template based on an existing template."),(0,r.kt)("p",null,"The same set of updation rules apply here as those of\n",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/template/{name}")," route. See\n",(0,r.kt)("a",{parentName:"p",href:"#patch"},"here")," for details."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'POST /api/template/empty-curly-borders/extend\nContent-Type: application/json\n\n{\n    "name": "empty-curly-borders-new",\n    "dimensions": {\n        "x": 400,\n        "y": 500\n    },\n    "title": "Kurta",\n    "fields": [\n        {\n            "name": "Surname",\n            "delete": true\n        },\n        {\n            "name": "DP",\n            "image": {\n                "expectedSize": {\n                    "x": 30,\n                    "y": 34\n                }\n            },\n            "value": "data:image/png;base64,iVBORw0KG...CYII=",\n            "fixed": true\n        }\n    ]\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "name": "empty-curly-borders-new",\n        "title": "Kurta",\n        "background": "stock/empty/curly-borders.png",\n        "dimensions": { ... },\n        "fields": [\n            {\n                "name": "Name",\n                ...\n            },\n            {\n                "value": "data:image/png;base64,iVBORw0KG...CYII=",\n                "name": "DP",\n                "image": {\n                    "expectedSize": {\n                        "x": 30,\n                        "y": 34\n                    }\n                },\n                "fixed": true,\n                ...\n            }\n        ],\n        "date": "2021-07-11T13:14:40.685Z"\n    },\n    "msg": "Template created!"\n}\n'))),(0,r.kt)("h2",{id:"apitemplatenameexport"},(0,r.kt)("inlineCode",{parentName:"h2"},"/api/template/{name}/export")),(0,r.kt)("p",null,"This route supports only ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," requests and returns and triggers\nthe download of the exported JSON document for the existing template\nidentified by ",(0,r.kt)("inlineCode",{parentName:"p"},"{name}"),"."),(0,r.kt)("p",null,"All images and resources used in the template are returned as a part\nof the JSON in the form of Base64 encoded data URIs. If you don't want\nthis to happen and just want it with resource paths, use the query\nparameter ",(0,r.kt)("inlineCode",{parentName:"p"},"plain")," with any value."),(0,r.kt)("p",null,"The exported JSON can later be sent via a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," to\n",(0,r.kt)("inlineCode",{parentName:"p"},"/api/template")," to recreate the template. All images and\nresources used within the template will be embedded within the\nexported JSON file."),(0,r.kt)("h3",{id:"get-2"},(0,r.kt)("inlineCode",{parentName:"h3"},"GET")),(0,r.kt)("p",null,"Returns the template as an exported JSON."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /api/template/empty-curly-borders/export\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "empty-curly-borders",\n    "title": "Empty, Curly Borders",\n    "background": "data:image/svg+xml;base64,PD94bW...iIgb2Zm=",\n    "dimensions": {\n        "x": 990,\n        "y": 765\n    },\n    "fields": [\n        { ... },\n        { ... }\n    ]\n}\n'))))}c.isMDXComponent=!0}}]);