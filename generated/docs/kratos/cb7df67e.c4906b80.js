(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{331:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return s})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return d}));var n=i(2),r=i(6),a=(i(0),i(411)),o=i(414),s={id:"verify-email-account-activation",title:"Email and Phone Verification and Account Activation"},l={unversionedId:"self-service/flows/verify-email-account-activation",id:"version-v0.4/self-service/flows/verify-email-account-activation",isDocsHomePage:!1,title:"Email and Phone Verification and Account Activation",description:"ORY Kratos allows users to verify their out-of-band (email, telephone number,",source:"@site/versioned_docs/version-v0.4/self-service/flows/verify-email-account-activation.mdx",slug:"/self-service/flows/verify-email-account-activation",permalink:"/kratos/docs/v0.4/self-service/flows/verify-email-account-activation",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/self-service/flows/verify-email-account-activation.mdx",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594203957,sidebar:"version-v0.4/docs",previous:{title:"User-Facing Errors",permalink:"/kratos/docs/v0.4/self-service/flows/user-facing-errors"},next:{title:"MFA / 2FA",permalink:"/kratos/docs/v0.4/self-service/flows/2fa-mfa-multi-factor-authentication"}},c=[{value:"Account Activation",id:"account-activation",children:[]},{value:"Setting Email Verification",id:"setting-email-verification",children:[{value:"Verify Email on User Registration",id:"verify-email-on-user-registration",children:[]}]},{value:"Self-Service Request or Resend Verification Link for Browser Applications",id:"self-service-request-or-resend-verification-link-for-browser-applications",children:[{value:"Server-Side Browser Applications",id:"server-side-browser-applications",children:[]},{value:"Client-Side Browser Applications",id:"client-side-browser-applications",children:[]}]},{value:"Email Verification for API Clients",id:"email-verification-for-api-clients",children:[]}],u={rightToc:c};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"ORY Kratos allows users to verify their out-of-band (email, telephone number,\n...) communication channels. Verification can be initiated"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"after registration or by performing a verification flow;"),Object(a.b)("li",{parentName:"ul"},"manually by the user.")),Object(a.b)("p",null,"Currently, ORY Kratos only supports verification of email addresses. Before\nsending out a verification E-Mail, ORY Kratos will check if the email address is\nalready known. Depending on the result, one of the two flows will be executed:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Unknown email address: An email is sent to the address informing the recipient\nthat someone tried to verify this email address but that it is not known by\nthe system:",Object(a.b)("img",{alt:"Verification email for unknown address",src:Object(o.a)("img/docs/email-verify-unknown.png")})),Object(a.b)("li",{parentName:"ul"},"Known email address: An email which includes a verification link is sent to\nthe address:",Object(a.b)("img",{alt:"Verification email for known address",src:Object(o.a)("img/docs/email-verify-known.png")}))),Object(a.b)("p",null,"This prevents Account Enumeration Attacks as it is not possible for a threat\nagent to determine if an account exists or not based on the verification flow."),Object(a.b)("p",null,"The emails are using templates that can be customised as explained in\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/v0.4/concepts/email-sms#templates"}),"Customizing E-Mail Templates"),". The\ntemplate IDs are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Unknown email address: ",Object(a.b)("inlineCode",{parentName:"li"},"verify_invalid")),Object(a.b)("li",{parentName:"ul"},"Known email address: ",Object(a.b)("inlineCode",{parentName:"li"},"verify_valid"))),Object(a.b)("h2",{id:"account-activation"},"Account Activation"),Object(a.b)("p",null,'Using this feature implements the so-called "account activation" with the\ndifference that ORY Kratos does not provide a feature that prevents signing into\naccounts without verified addresses. The reason being that verification is\nproving that the user controls the given address, but it is not an\nauthentication mechanism.'),Object(a.b)("p",null,"You may however choose to limit what an identity without verified addresses is\nable to do in your application logic or API Gateways."),Object(a.b)("h2",{id:"setting-email-verification"},"Setting Email Verification"),Object(a.b)("p",null,"You must define at least one Identity Traits field as a verification field. You\ncan do so by defining the following section in your Identity JSON Schema:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json5",metastring:'title="path/to/identity.schema.json"',title:'"path/to/identity.schema.json"'}),"{\n  // ...\n  properties: {\n    traits: {\n      type: 'object',\n      properties: {\n        // This could also be an array or any other field name\n        email: {\n          type: 'string',\n          format: 'email',\n          'ory.sh/kratos': {\n            verification: {\n              // Currently, only email is supported\n              via: 'email'\n            }\n          }\n        }\n      }\n    }\n  }\n  // ...\n}\n")),Object(a.b)("p",null,"You can also combine this with the password strategy login identifier."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json5",metastring:'title="path/to/identity.schema.json"',title:'"path/to/identity.schema.json"'}),"{\n  // ...\n  properties: {\n    traits: {\n      type: 'object',\n      properties: {\n        // This could also be an array or any other field name\n        email: {\n          type: 'string',\n          format: 'email',\n          'ory.sh/kratos': {\n            credentials: {\n              password: {\n                identifier: true\n              }\n            },\n            verification: {\n              // Currently, only email is supported\n              via: 'email'\n            }\n          }\n        }\n      }\n    }\n  }\n  // ...\n}\n")),Object(a.b)("p",null,"That way, the field ",Object(a.b)("inlineCode",{parentName:"p"},"email")," (or any field you define with these properties) will\nserve as both the login identifier and as a verifiable email address."),Object(a.b)("h3",{id:"verify-email-on-user-registration"},"Verify Email on User Registration"),Object(a.b)("p",null,"To send an email after user registration, add the following sections to your ORY\nKratos config file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos.config.yml"',title:'"path/to/kratos.config.yml"'}),"selfservice:\n  flows:\n    verification:\n      enabled: true\n\n      # Similar to login_ui or profile_ui, this points to the user interface where the verificaiton\n      # user interface is implemented.\n      #\n      # For more information on this endpoint please head over to the next section\n      ui_url: https://my-kratos-ui/verify\n")),Object(a.b)("h2",{id:"self-service-request-or-resend-verification-link-for-browser-applications"},"Self-Service Request or Resend Verification Link for Browser Applications"),Object(a.b)("p",null,"A user might want to resend a verification link because the link expired or did\nnot arrive in their inbox."),Object(a.b)("p",null,"The flow implementing this feature uses the already established\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/v0.4/#network-flows-for-browsers"}),"Network Flows for Browsers"),"."),Object(a.b)("h3",{id:"server-side-browser-applications"},"Server-Side Browser Applications"),Object(a.b)("p",null,"You can find an exemplary implementation for this flow on GitHub:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/kratos-selfservice-ui-node/blob/master/src/routes/verify.ts"}),"Verification HTTP Route")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/kratos-selfservice-ui-node/blob/master/views/verify.hbs"}),"Verification UI"))),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/v0.4/#network-flows-for-browsers"}),"Network Flows for Browsers")," works as\nfollows for Email Verification:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"An initial HTTP Request is made to\n",Object(a.b)("inlineCode",{parentName:"li"},"/self-service/browser/flows/verification/:via"),". Currently, only ",Object(a.b)("inlineCode",{parentName:"li"},"email")," is\nsupported as ",Object(a.b)("inlineCode",{parentName:"li"},":via"),"."),Object(a.b)("li",{parentName:"ol"},"ORY Kratos redirects the browser to the URL set in\n",Object(a.b)("inlineCode",{parentName:"li"},"selfservice.flows.verification.ui_url")," and appends the ",Object(a.b)("inlineCode",{parentName:"li"},"request")," URL Query\nParameter (e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"https://example.org/verify?request=abcde"),")."),Object(a.b)("li",{parentName:"ol"},"The Endpoint at ",Object(a.b)("inlineCode",{parentName:"li"},"/profile")," makes an HTTP GET Request to\n",Object(a.b)("inlineCode",{parentName:"li"},"https://ory-kratos-admin.example-org.vpc/self-service/browser/flows/requests/verification?request=abcde"),"\nand fetches the Verification Request JSON Payload that represents the\nindividual fields that can be updated."),Object(a.b)("li",{parentName:"ol"},"The user fills out the form and sends an HTTP POST request to\n",Object(a.b)("inlineCode",{parentName:"li"},"https://example.org/.ory/kratos/public/self-service/browser/flows/verification/:via/complete?request=abcde"),".\nDepending on whether the address is known or not, a ",Object(a.b)("inlineCode",{parentName:"li"},"verify_valid")," or\n",Object(a.b)("inlineCode",{parentName:"li"},"verify_invalid")," message will be sent to the given address.")),Object(a.b)("p",null,"An exemplary payload for a verification request looks as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "9c3e945c-096a-42ec-8617-caecda9e9263",\n  "expires_at": "2020-02-18T16:11:25.3112038Z",\n  "issued_at": "2020-02-18T15:11:25.3112824Z",\n  "request_url": "http://127.0.0.1:4455/self-service/browser/flows/verification/email",\n  "form": {\n    "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/verification/email/complete?request=9c3e945c-096a-42ec-8617-caecda9e9263",\n    "method": "POST",\n    "fields": [\n      {\n        "name": "csrf_token",\n        "type": "hidden",\n        "required": true,\n        "value": "fMusJj65BxNtrog/DYryN4sZmuLA85WkbAh4yP9pT1lAQTIAPTVGJTmmLL66Y0HEbIpKEU5gTr5qJoRXHsBoSw=="\n      },\n      {\n        "name": "to_verify",\n        "type": "email",\n        "required": true\n      }\n    ]\n  },\n  "via": "email",\n  "success": false\n}\n')),Object(a.b)("h3",{id:"client-side-browser-applications"},"Client-Side Browser Applications"),Object(a.b)("p",null,"Because Client-Side Browser Applications do not have access to ORY Kratos' Admin\nAPI, they must instead use the ORY Kratos Public API. The flow for a Client-Side\nBrowser Application is almost the exact same as the one for Server-Side\nApplications, with the small difference that\n",Object(a.b)("inlineCode",{parentName:"p"},"https://example.org/.ory/kratos/public/self-service/browser/flows/requests/verification?request=abcde"),"\nwould be called via AJAX instead of making a request to\n",Object(a.b)("inlineCode",{parentName:"p"},"https://ory-kratos-admin.example-org.vpc/self-service/browser/flows/requests/verification?request=abcde"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"To prevent brute force, guessing, session injection, and other attacks, it is\nrequired that cookies are working for this endpoint. The cookie set in the\ninitial HTTP request made to\n",Object(a.b)("inlineCode",{parentName:"p"},"https://example.org/.ory/kratos/public/self-service/browser/flows/verification/:via"),"\nMUST be set and available when calling this endpoint!"),Object(a.b)("p",{parentName:"blockquote"},"When making AJAX requests from JavaScript, make sure to set\n",Object(a.b)("inlineCode",{parentName:"p"},"{ withCredentials: true }")," (name and layout may vary between libraries).")),Object(a.b)("h2",{id:"email-verification-for-api-clients"},"Email Verification for API Clients"),Object(a.b)("p",null,"Will be addressed in a future release."))}d.isMDXComponent=!0},411:function(e,t,i){"use strict";i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return p}));var n=i(0),r=i.n(n);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(i),f=n,p=d["".concat(o,".").concat(f)]||d[f]||b[f]||a;return i?r.a.createElement(p,s(s({ref:t},c),{},{components:i})):r.a.createElement(p,s({ref:t},c))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,i)}f.displayName="MDXCreateElement"},412:function(e,t,i){"use strict";var n=i(0),r=i(20);t.a=function(){var e=Object(n.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},414:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"a",(function(){return o}));var n=i(412),r=i(416);function a(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,i=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,i,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,s=void 0!==o&&o,l=a.absolute,c=void 0!==l&&l;if(!i)return i;if(i.startsWith("#"))return i;if(Object(r.b)(i))return i;if(s)return t+i;var u=i.startsWith(t)?i:t+i.replace(/^\//,"");return c?e+u:u}(a,i,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},416:function(e,t,i){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return r}))}}]);