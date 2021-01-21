const withLess = require("@zeit/next-less");
const withSass = require("@zeit/next-sass");
const lessToJS = require("less-vars-to-js");
const withPlugins = require("next-compose-plugins");

const fs = require("fs");
const path = require("path");

const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, "./public/styles/antd-custom.less"),
    "utf8"
  )
);

const plugins = [
  [
    withSass({
      cssModules: true,
      ...withLess({
        lessLoaderOptions: {
          javascriptEnabled: true,
          modifyVars: themeVariables,
        },
        webpack: (config, { isServer }) => {
          if (isServer) {
            const antStyles = /antd\/.*?\/style.*?/;
            const origExternals = [...config.externals];
            config.externals = [
              (context, request, callback) => {
                if (request.match(antStyles)) return callback();
                if (typeof origExternals[0] === "function") {
                  origExternals[0](context, request, callback);
                } else {
                  callback();
                }
              },
              ...(typeof origExternals[0] === "function" ? [] : origExternals),
            ];

            config.module.rules.unshift({
              test: antStyles,
              use: "null-loader",
            });
          }
          return config;
        },
      }),
    }),
  ],
];

const nextConfig = {
  publicRuntimeConfig: {
    NEXT_PUBLIC_REACT_APP_BACKEND_URL:  process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL,
    NEXT_PUBLIC_POSTS_BACKEND_URL: process.env.NEXT_PUBLIC_POSTS_BACKEND_URL,
    NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST,
    DADATA_API_TOKEN: process.env.DADATA_API_TOKEN,
  },
};

module.exports = withPlugins(plugins, nextConfig);
