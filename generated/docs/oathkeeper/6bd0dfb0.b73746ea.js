(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),i=(n(0),n(108)),o={id:"index",title:"Access Rule Pipeline"},c={unversionedId:"pipeline/index",id:"version-v0.37/pipeline/index",isDocsHomePage:!1,title:"Access Rule Pipeline",description:"Read more about the",source:"@site/versioned_docs/version-v0.37/pipeline/index.md",permalink:"/oathkeeper/docs/v0.37/pipeline/index",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/versioned_docs/version-v0.37/pipeline/index.md",version:"v0.37",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177132,sidebar:"version-v0.37/docs",previous:{title:"API Access Rules",permalink:"/oathkeeper/docs/v0.37/api-access-rules"},next:{title:"Authenticators",permalink:"/oathkeeper/docs/v0.37/pipeline/authn"}},p=[{value:"Templating",id:"templating",children:[]},{value:"Session",id:"session",children:[{value:"RegexpCaptureGroups",id:"regexpcapturegroups",children:[]},{value:"Configuration Examples",id:"configuration-examples",children:[]}]}],s={rightToc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Read more about the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/oathkeeper/docs/v0.37/api-access-rules"}),"principal components and execution pipeline of access rules"),"\nif you have not already. This chapter explains the different pipeline handlers\navailable to you:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/oathkeeper/docs/v0.37/pipeline/authn"}),"Authentication handlers"),' inspect HTTP requests (e.g. the HTTP\nAuthorization Header) and execute some business logic that return true (for\nauthentication ok) or false (for authentication invalid) as well as a subject\n("user"). The subject is typically the "user" that made the request, but it\ncould also be a machine (if you have machine-2-machine interaction) or\nsomething different.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/oathkeeper/docs/v0.37/pipeline/authz"}),"Authorization handlers"),': ensure that a subject ("user") has the\nright permissions. For example, a specific endpoint might only be accessible\nto subjects ("users") from group "admin". The authorizer handles that logic.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/oathkeeper/docs/v0.37/pipeline/mutator"}),"Mutation handlers"),": transforms the credentials from incoming\nrequests to credentials that your backend understands. For example, the\n",Object(i.b)("inlineCode",{parentName:"li"},"Authorization: basic")," header might be transformed to ",Object(i.b)("inlineCode",{parentName:"li"},"X-User: <subject-id>"),".\nThis allows you to write backends that do not care if the original request was\nan anonymous one, an OAuth 2.0 Access Token, or some other credential type.\nAll your backend has to do is understand, for example, the ",Object(i.b)("inlineCode",{parentName:"li"},"X-User:"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/oathkeeper/docs/v0.37/pipeline/error"}),"Error handlers"),": are responsible for executing logic after, for\nexample, authentication or authorization failed. ORY Oathkeeper supports\ndifferent error handlers and we will add more as the project progresses.")),Object(i.b)("h2",{id:"templating"},"Templating"),Object(i.b)("p",null,"Some handlers such as the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/oathkeeper/docs/v0.37/pipeline/mutator#id_token"}),"ID Token Mutator")," support\ntemplating using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/pkg/text/template/"}),"Golang Text Templates"),"\n(",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://blog.gopheracademy.com/advent-2017/using-go-templates/"}),"examples"),").\nThe ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://masterminds.github.io/sprig/"}),"sprig")," is also supported, on top of\nthese two functions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'var _ = template.FuncMap{\n    "print": func(i interface{}) string {\n        if i == nil {\n            return ""\n        }\n        return fmt.Sprintf("%v", i)\n    },\n    "printIndex": func(element interface{}, i int) string {\n        if element == nil {\n            return ""\n        }\n\n        list := reflect.ValueOf(element)\n\n        if list.Kind() == reflect.Slice && i < list.Len() {\n            return fmt.Sprintf("%v", list.Index(i))\n        }\n\n        return ""\n    },\n}\n')),Object(i.b)("h2",{id:"session"},"Session"),Object(i.b)("p",null,"In all configurations supporting ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#templating"}),"templating")," instructions, it's\npossible to use the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/oathkeeper/blob/master/pipeline/authn/authenticator.go#L39"}),Object(i.b)("inlineCode",{parentName:"a"},"AuthenticationSession")),"\nstruct content."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),"type AuthenticationSession struct {\n    Subject      string\n    Extra        map[string]interface{}\n    Header       http.Header\n    MatchContext MatchContext\n}\n\ntype MatchContext struct {\n    RegexpCaptureGroups []string\n    URL                 *url.URL\n}\n")),Object(i.b)("h3",{id:"regexpcapturegroups"},"RegexpCaptureGroups"),Object(i.b)("h3",{id:"configuration-examples"},"Configuration Examples"),Object(i.b)("p",null,"To use the subject extract to the token"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{ "config_field": "{{ print .subject }}" }\n')),Object(i.b)("p",null,"To use an embedded value in the ",Object(i.b)("inlineCode",{parentName:"p"},"Extra")," map (most of the time, it's a JWT token\nclaim)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{ "config_field": "{{ print .Extra.some.arbitrary.data }}" }\n')),Object(i.b)("p",null,"To use a Regex capture from the request URL",Object(i.b)("br",{parentName:"p"}),"\n","Note the usage of ",Object(i.b)("inlineCode",{parentName:"p"},"printIndex")," to print a value from the array"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "claims": "{\\"aud\\": \\"{{ print .Extra.aud }}\\", \\"resource\\": \\"{{ printIndex .MatchContext.RegexpCaptureGroups 0 }}\\""\n}\n')),Object(i.b)("p",null,"To display a string array to JSON format, we can use the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/pkg/fmt/"}),"fmt printf")," function"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "claims": "{\\"aud\\": \\"{{ print .Extra.aud }}\\", \\"scope\\": {{ printf \\"%+q\\" .Extra.scp }}}"\n}\n')),Object(i.b)("p",null,"Note that the ",Object(i.b)("inlineCode",{parentName:"p"},"AuthenticationSession")," struct has a field named ",Object(i.b)("inlineCode",{parentName:"p"},"Extra")," which is\na ",Object(i.b)("inlineCode",{parentName:"p"},"map[string]interface{}"),", which receives varying introspection data from the\nauthentication process. Because the contents of ",Object(i.b)("inlineCode",{parentName:"p"},"Extra")," are so variable, nested\nand potentially non-existent values need special handling by the ",Object(i.b)("inlineCode",{parentName:"p"},"text/template"),"\nparser, and a ",Object(i.b)("inlineCode",{parentName:"p"},"print")," FuncMap function has been provided to ensure that\nnon-existent map values will simply return an empty string, rather than\n",Object(i.b)("inlineCode",{parentName:"p"},"<no value>"),"."),Object(i.b)("p",null,"If you find that your field contain the string ",Object(i.b)("inlineCode",{parentName:"p"},"<no value>")," then you have most\nlikely omitted the ",Object(i.b)("inlineCode",{parentName:"p"},"print")," function, and it is recommended you use it for all\nvalues out of an abundance of caution and for consistency."),Object(i.b)("p",null,"In the same way, a ",Object(i.b)("inlineCode",{parentName:"p"},"printIndex")," FuncMap function is provided to avoid ",Object(i.b)("em",{parentName:"p"},"out of\nrange")," exception to access in a array. It can be useful for the regexp captures\nwhich depend of the request."))}l.isMDXComponent=!0}}]);