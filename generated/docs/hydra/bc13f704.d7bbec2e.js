(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{237:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(9),a=(t(0),t(292)),i={id:"php",title:"PHP"},c={id:"sdk/php",isDocsHomePage:!1,title:"PHP",description:"Please note that the PHP SDK is autogenerated and developer experience is not",source:"@site/docs/sdk/php.md",permalink:"/hydra/docs/next/sdk/php",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/sdk/php.md",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1586178985,sidebar:"docs",previous:{title:"JavaScript",permalink:"/hydra/docs/next/sdk/js"},next:{title:"OAuth 2.0 Case Study",permalink:"/hydra/docs/next/case-study"},latestVersionMainDocPermalink:"/hydra/docs"},p=[{value:"Configuration",id:"configuration",children:[]},{value:"API Usage",id:"api-usage",children:[]},{value:"API Docs",id:"api-docs",children:[]}],u={rightToc:p};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Please note that the PHP SDK is autogenerated and developer experience is not\ngreat.")),Object(a.b)("p",null,"To install the PHP SDK using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://getcomposer.org"}),"Composer"),", run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"composer require ory/hydra-client\n")),Object(a.b)("h3",{id:"configuration"},"Configuration"),Object(a.b)("h4",{id:"basic-configuration"},"Basic configuration"),Object(a.b)("p",null,"Below is a basic configuration that demonstrates how to set the admin and public\nhost. Please note that you need to set the host everytime you want to switch\nbetween the admin and public host."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),'<?php\n\nrequire_once __DIR__ . "/vendor/autoload.php";\n\nuse HydraSDK\\Configuration;\nuse HydraSDK\\Api\\AdminApi;\nuse HydraSDK\\Api\\PublicApi;\n\n$config = new Configuration();\n// Configure Admin API\n$config->getDefaultConfiguration()->setHost("http://localhost:4445");\n$adminApi = new AdminApi();\n\n// Configure Public API\n$config->getDefaultConfiguration()->setHost("http://localhost:4444");\n$publicApi = new PublicApi();\n')),Object(a.b)("h3",{id:"api-usage"},"API Usage"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\nuse HydraSDK\\ApiException;\nuse HydraSDK\\Configuration;\nuse HydraSDK\\Api\\AdminApi;\nuse HydraSDK\\Api\\PublicApi;\n\ntry {\n  $config = new Configuration();\n  // Configure Admin API\n  $config->getDefaultConfiguration()->setHost(\"http://localhost:4445\");\n  $adminApi = new AdminApi();\n\n  // List OAuth2 Clients (Admin API)\n  $clients = $adminApi->listOAuth2Clients();\n  print_r($clients);\n\n  // Configure Public API\n  $config->getDefaultConfiguration()->setHost(\"http://localhost:4444\");\n  $publicApi = new PublicApi();\n\n  // Discover OpenID Connect Configuration (Public API)\n  $connect = $publicApi->discoverOpenIDConfiguration();\n  print_r($connect);\n} catch (ApiException $e) {\n  echo 'Exception occurred: ', $e->getMessage(), PHP_EOL;\n}\n?>\n")),Object(a.b)("h3",{id:"api-docs"},"API Docs"),Object(a.b)("p",null,"API docs are available\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/master/sdk/php/swagger/README.md"}),"here"),".\nPlease note that those docs are generated and may introduce bugs if code\nexamples are used 1:1."))}s.isMDXComponent=!0},292:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(t),b=r,f=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return t?o.a.createElement(f,c(c({ref:n},u),{},{components:t})):o.a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);