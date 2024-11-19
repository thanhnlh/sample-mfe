const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'angular3',

  exposes: {
    "./web-components": "./src/bootstrap.ts",
  },

  shared: {
    ...shareAll({ singleton: false, strictVersion: false, requiredVersion: 'auto' }),
  },

});

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

// module.exports = {
//   plugins: [
//     new ModuleFederationPlugin({
//       name: 'remoteApp',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './MyElement': './src/app/my-component/my-component.component.ts',
//       },
//       shared: ['@angular/core', '@angular/common', '@angular/elements'],
//     }),
//   ],
// };

