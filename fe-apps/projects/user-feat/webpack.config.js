const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'user-feat',

  exposes: {
    './Component': './projects/user-feat/src/app/app.component.ts',    

    // Preferred way: expose corse-grained routes
    './routes': './projects/user-feat/src/app/modules/modules.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
