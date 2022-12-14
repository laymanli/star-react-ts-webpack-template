const isDEV = process.env.NODE_ENV === 'development'

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    isDEV && require.resolve('react-refresh/babel'),
  ].filter(Boolean)
}