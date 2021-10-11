const plugins = [
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  '@babel/plugin-transform-runtime'
]

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      }
    ]
  ],
  plugins: plugins
}
