const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const config = {
  remotes: {
    "first-micro-app": "http://localhost:5000/remoteEntry.js", //the port on which the FMA (first-micro-app) runs
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
};

module.exports = withModuleFederationPlugin(config);
