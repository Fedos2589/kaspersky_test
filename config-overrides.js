const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
     config,
  )
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@font-size-base": "16px",
      "@primary-color": "#00b4e3",
      "@radio-size": "20px",
      "@link-color": "#008099",
      "@input-height-lg": "60px",
      "@input-color ": "#333333",
      "@border-color-base": "#DDD",
      "@btn-height-lg": "60px",
      "@input-bg": "rgba(255, 255, 255, 0.01)",
      "@error-color": "#df150d",
      "@checkbox-size": "24px",
      "@btn-border-radius-base": "8px",
      "@border-radius-base": "4px",
      "@layout-body-background ": "#ffffff",
      "@grid-gutter-width": "30px"
    },
    javascriptEnabled: true,
  })(config, env)
  return config
}