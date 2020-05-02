module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 0,
      importFrom: [
        {
          customMedia: {
            '--min-phone': '(min-width: 450px)'
          }
        }
      ],
      features: {
        'color-mod-function': { unresolved: 'warn' }
      }
    })
  ]
}
