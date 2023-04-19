module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ">0.2%, not dead",
        },
      },
    ],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
};
