const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  // remotes: {
  //   "userFeat": "http://localhost:4101/remoteEntry.js",
  // },

  shared: {
    ...shareAll({ singleton: false, strictVersion: false, requiredVersion: 'auto' }),
  },

});
