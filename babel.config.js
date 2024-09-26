module.exports = {
  compact: false,
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
          ".html",
        ],
        alias: {
          "@/test/*": "./__test__",
          "@": "./src",
        },
      },
    ],
    ["@babel/plugin-proposal-export-namespace-from"],
    ["@babel/plugin-transform-private-methods", { "loose": true }],
  ],
};
