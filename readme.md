# `arc-example-esm-cjs`

This example demonstrates the officially supported file names and corresponding `package.json` files that instruct Lambda + Node.js to run in CommonJS or ES Module mode.


## Run the example

After cloning this repo:

```sh
npm i
npm start
```

Then hit one of the following paths to see a basic JSON response, including a string property (`whatev`) that demonstrates the module system is working:


### `get /cjs`

Contains a Node.js 14.x Lambda handler using CommonJS (`require()`, `exports`); handler is a single file with a CommonJS-specific file name: `index.cjs`


### `get /cjs-default`

Contains a Node.js 14.x Lambda handler using CommonJS (`require()`, `exports`); handler is a single file with a generic JS file name: `index.js`; this demonstrates Node.js's default behavior


### `get /esm`

Contains a Node.js 14.x Lambda handler using ES Modules (`import`, `export`); handler is a single file with a ESM-specific file name: `index.mjs`


### `get /esm-optin`

Contains a Node.js 14.x Lambda handler using ES Modules (`import`, `export`); handler is a single file with a generic JS file name: `index.js`, and a corresponding `package.json` file containing `"type": "module"`, which overrides the default Node.js behavior, and loads `index.js` as an ES Module


## Lambda treeshaking

Observe Architect's Lambda treeshaking functionality by running either `npx arc deploy --dry-run` or `npx arc hydrate --autoinstall`, both of which prepare all four Lambdas for production deployment.
