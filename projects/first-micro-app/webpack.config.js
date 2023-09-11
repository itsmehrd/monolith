const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const config = {
  name: "first-micro-app",
  exposes: {
    "./Module": "./projects/first-micro-app/src/app/app.module.ts",
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
