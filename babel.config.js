module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["@expo/next-adapter/babel"],
    plugins: [
      ["@babel/plugin-proposal-private-methods", { loose: true }],
      ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
      ["@babel/plugin-transform-class-properties", { loose: true }],
    ],
  };
};
