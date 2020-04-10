(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(175)),i={id:"configure-deploy",title:"Configure and Deploy"},c={id:"configure-deploy",title:"Configure and Deploy",description:"Like all other ORY services, ORY Keto is implemented following",source:"@site/docs/configure-deploy.md",permalink:"/keto/docs/next/configure-deploy",editUrl:"https://github.com/docs/keto/edit/master/docs/docs/configure-deploy.md",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1586170560,sidebar:"docs",previous:{title:"Installation",permalink:"/keto/docs/next/install"},next:{title:"Secure",permalink:"/keto/docs/next/secure"}},l=[{value:"Create a Network",id:"create-a-network",children:[]},{value:"Start the PostgreSQL Container",id:"start-the-postgresql-container",children:[]},{value:"Run the ORY Keto Service",id:"run-the-ory-keto-service",children:[]},{value:"Working with the CLI",id:"working-with-the-cli",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Like all other ORY services, ORY Keto is implemented following\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://12factor.net"}),"12factor principles")," and completely stateless. To store\nstate, ORY Keto supports two types of storage adapters:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"in-memory:"),' This adapter does not work with more than one instance\n("cluster") and any state is lost after restarting the instance.'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"SQL:")," This adapter works with more than one instance and state persists\nafter restarts.")),Object(a.b)("p",null,"The SQL adapter supports two DBMS: PostgreSQL 9.6+ and MySQL 5.7+. Please note\nthat older MySQL versions may have issues with the database schema. We recommend\nworking with PostgreSQL as migrations will be faster."),Object(a.b)("p",null,"This guide will:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Download and run a PostgreSQL container in Docker."),Object(a.b)("li",{parentName:"ol"},"Download and run ORY Keto using Docker.")),Object(a.b)("h2",{id:"create-a-network"},"Create a Network"),Object(a.b)("p",null,"As a first step, we create a network to which we connect all our Docker\ncontainers. This enables the containers to communicate with each other."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker network create ketoguide\n")),Object(a.b)("h2",{id:"start-the-postgresql-container"},"Start the PostgreSQL Container"),Object(a.b)("p",null,"For the purpose of this tutorial, we will use PostgreSQL as a database. As you\nprobably already know, don't run databases in Docker in production! For the sake\nof this tutorial however, let's use Docker to quickly deploy the database."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker run \\\n  --network ketoguide \\\n  --name ory-keto-example--postgres \\\n  -e POSTGRES_USER=keto \\\n  -e POSTGRES_PASSWORD=secret \\\n  -e POSTGRES_DB=keto \\\n  -d postgres:9.6\n")),Object(a.b)("p",null,"This command wil start a postgres instance with name\n",Object(a.b)("inlineCode",{parentName:"p"},"ory-keto-example--postgres"),", set up a database called ",Object(a.b)("inlineCode",{parentName:"p"},"keto")," and create a user\n",Object(a.b)("inlineCode",{parentName:"p"},"keto")," with password ",Object(a.b)("inlineCode",{parentName:"p"},"secret"),"."),Object(a.b)("h2",{id:"run-the-ory-keto-service"},"Run the ORY Keto Service"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"# The database url points us at the postgres instance.\n# This could also be an ephermal in-memory database (`export DSN=memory`)\n# or a MySQL URI.\n$ export DSN=postgres://keto:secret@ory-keto-example--postgres:5432/keto?sslmode=disable\n\n# ORY Keto does not do magic, it requires conscious decisions.\n# An example is running SQL migrations when setting up a new installation of ORY Keto\n# or upgrading an existing one.\n# This is equivalent to:\n# DSN=postgres://keto:secret@ory-keto-example--postgres:5432/keto?sslmode=disable keto migrate sql`\n$ docker run -it --rm \\\n  --network ketoguide \\\n  -e DSN=$DSN \\\n  oryd/keto:v0.5.3-alpha.1 \\\n  migrate sql -e\n\nApplying `client` SQL migrations...\n[...]\nMigration successful!\n\n# Let's run the server!\n$ docker run -d \\\n  --name ory-keto-example--keto \\\n  --network ketoguide \\\n  -p 4466:4466 \\\n  -e DSN=$DSN \\\n  oryd/keto:v0.5.3-alpha.1 \\\n  serve\n")),Object(a.b)("p",null,"Great, the server is running now! Make sure to check the logs and see if there\nwere any errors or issues before moving on to the next step:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker logs ory-keto-example--keto\n")),Object(a.b)("p",null,"You should see one line showing where the server is running:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'time="2018-10-27T11:48:56Z" level=info msg="Listening on http://localhost:4466"\n')),Object(a.b)("h2",{id:"working-with-the-cli"},"Working with the CLI"),Object(a.b)("p",null,"Let's explore managing ORY Keto via the CLI. We will use the ORY Access Control\nPolicy Engine (",Object(a.b)("inlineCode",{parentName:"p"},"/engines/acp/ory"),") with the ",Object(a.b)("inlineCode",{parentName:"p"},"exact")," matcher, define policies,\nand check if particular users are allowed to do certain things. Let's create our\nfirst policy:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'$ mkdir policies\n\n$ cat > policies/example-policy.json <<EOL\n[{\n    "id": "example-policy",\n    "subjects": ["alice"],\n    "resources": ["blog_posts:my-first-blog-post"],\n    "actions": ["delete"],\n    "effect": "allow"\n}]\nEOL\n\n$ docker run -it --rm \\\n  --network ketoguide \\\n  -v $(pwd)/policies:/policies \\\n  -e KETO_URL=http://ory-keto-example--keto:4466/ \\\n  oryd/keto:v0.5.3-alpha.1 \\\n  engines acp ory policies import exact /policies/example-policy.json\n')),Object(a.b)("p",null,"Check if the policy has been created:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'$ docker run -it --rm \\\n  --network ketoguide \\\n  -e KETO_URL=http://ory-keto-example--keto:4466/ \\\n  oryd/keto:v0.5.3-alpha.1 \\\n  engines acp ory policies get exact example-policy\n{\n  "actions": [\n    "delete"\n  ],\n...\n')),Object(a.b)("p",null,"Check if Alice is allowed to delete the blog post:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'$ docker run -it --rm \\\n  --network ketoguide \\\n  -e KETO_URL=http://ory-keto-example--keto:4466/ \\\n  oryd/keto:v0.5.3-alpha.1 \\\n  engines acp ory allowed exact alice blog_posts:my-first-blog-post delete\n{\n        "allowed": true\n}\n')),Object(a.b)("p",null,"Other users like Bob can not delete it:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'$ docker run -it --rm \\\n  --network ketoguide \\\n  -e KETO_URL=http://ory-keto-example--keto:4466/ \\\n  oryd/keto:v0.5.3-alpha.1 \\\n  engines acp ory allowed exact bob blog_posts:my-first-blog-post delete\n{\n        "allowed": false\n}\n')))}p.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return n?o.a.createElement(m,c({ref:t},s,{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);