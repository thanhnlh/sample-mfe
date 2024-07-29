const deps = require('./package.json').dependencies;
const mf = require('@angular-architects/module-federation/webpack');
const sharedMappings = new mf.SharedMappings();

module.exports = mf.withModuleFederationPlugin({
  name: "feAppOrderFeat",
  filename: "remoteEntry.js", // this doesn't need to be set, if not specified it defaults to remoteEntry.js. Setting it here just for demo purposes.
  exposes: {
    "./web-components": "./src/bootstrap.ts",
  },
  shared: mf.share({
    "@angular/core": { requiredVersion: deps['@angular/core'] }, 
    "@angular/common": { requiredVersion: deps['@angular/common'] }, 
    "@angular/router": { requiredVersion: deps['@angular/router'] },
    "rxjs": { requiredVersion: deps['@rxjs'] },
    ...sharedMappings.getDescriptors(),
  }),
});
