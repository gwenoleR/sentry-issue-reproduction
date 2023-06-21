const { withExpo } = require("@expo/next-adapter");
const withTM = require("next-transpile-modules")(["react-native-web"]);

// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

const sentryWebpackPluginOptions = {
  silent: false,
};
const sentryConfig = {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
};

const nextConfig = {
  reactStrictMode: true,
  images: { disableStaticImages: true, domains: ["cdn.sanity.io"] },
};

const moduleExports = (phase, defaultConfig) => {
  const plugins = [withTM, withExpo];

  const config = plugins.reduce(
    (acc, plugin) => {
      const pluginReturnValue = plugin(acc);

      let newConfig;
      if (typeof pluginReturnValue === "function") {
        newConfig = pluginReturnValue(phase, defaultConfig);
      } else {
        newConfig = pluginReturnValue;
      }

      return newConfig;
    },
    { ...nextConfig }
  );

  return config;
};

module.exports = withSentryConfig(
  moduleExports,
  sentryWebpackPluginOptions,
  sentryConfig
);
