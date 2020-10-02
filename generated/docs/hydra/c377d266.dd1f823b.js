(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{243:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),i=(n(0),n(316)),o={id:"hydra-clients-update",title:"hydra clients update",description:"hydra clients update Update an entire OAuth 2.0 Client"},s={unversionedId:"cli/hydra-clients-update",id:"cli/hydra-clients-update",isDocsHomePage:!1,title:"hydra clients update",description:"hydra clients update Update an entire OAuth 2.0 Client",source:"@site/docs/cli/hydra-clients-update.md",slug:"/cli/hydra-clients-update",permalink:"/hydra/docs/next/cli/hydra-clients-update",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-clients-update.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601629209,sidebar:"docs",previous:{title:"hydra clients list",permalink:"/hydra/docs/next/cli/hydra-clients-list"},next:{title:"hydra keys",permalink:"/hydra/docs/next/cli/hydra-keys"}},c=[{value:"hydra clients update",id:"hydra-clients-update",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hydra-clients-update"},"hydra clients update"),Object(i.b)("p",null,"Update an entire OAuth 2.0 Client"),Object(i.b)("h3",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,"This command replaces an OAuth 2.0 Client by its ID."),Object(i.b)("p",null,'Please be aware that this command replaces the entire client. To update only the\nname, a full client should be provided, for example: hydra clients update\nclient-1 -n "my updated app" -c http://localhost/cb -g authorization_code -r\ncode -a core,foobar'),Object(i.b)("p",null,'If only the name flag (-n "my updated app") is provided, the all other fields\nare updated to their default values.'),Object(i.b)("p",null,'To encrypt auto generated client secret, use "--pgp-key", "--pgp-key-url" or\n"--keybase" flag, for example: hydra clients update client-1 -n "my updated app"\n-g client_credentials -r token -a core,foobar --keybase keybase_username'),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"hydra clients update <id> [flags]\n")),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'      --allowed-cors-origins strings        The list of URLs allowed to make CORS requests. Requires CORS_ENABLED.\n      --audience strings                    The audience this client is allowed to request\n  -c, --callbacks strings                   REQUIRED list of allowed callback URLs\n      --client-uri string                   A URL string of a web page providing information about the client\n  -g, --grant-types strings                 A list of allowed grant types (default [authorization_code])\n  -h, --help                                help for update\n      --jwks-uri string                     Define the URL where the JSON Web Key Set should be fetched from when performing the "private_key_jwt" client authentication method\n      --keybase string                      Keybase username for encrypting client secret\n      --logo-uri string                     A URL string that references a logo for the client\n  -n, --name string                         The client\'s name\n      --pgp-key string                      Base64 encoded PGP encryption key for encrypting client secret\n      --pgp-key-url string                  PGP encryption key URL for encrypting client secret\n      --policy-uri string                   A URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data\n      --post-logout-callbacks strings       List of allowed URLs to be redirected to after a logout\n  -r, --response-types strings              A list of allowed response types (default [code])\n  -a, --scope strings                       The scope the client is allowed to request\n      --secret string                       Provide the client\'s secret\n      --subject-type string                 A identifier algorithm. Valid values are "public" and "pairwise" (default "public")\n      --token-endpoint-auth-method string   Define which authentication method the client may use at the Token Endpoint. Valid values are "client_secret_post", "client_secret_basic", "private_key_jwt", and "none" (default "client_secret_basic")\n      --tos-uri string                      A URL string that points to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client\n')),Object(i.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'      --access-token string    Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --config string          Config file (default is $HOME/.hydra.yaml)\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL. A unix socket can be set in the form unix:///path/to/socket\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   Fake tls termination by adding "X-Forwarded-Proto: https" to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unkown certificate authorities\n')),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"hydra-clients"}),"hydra clients")," - Manage OAuth 2.0 Clients")))}d.isMDXComponent=!0},316:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,y=p["".concat(o,".").concat(h)]||p[h]||u[h]||i;return n?a.a.createElement(y,s(s({ref:t},l),{},{components:n})):a.a.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);