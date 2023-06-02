import * as path from 'path';
const config = {
  compiler: {
    type: 'webpack5',
    prebundle: {
      enable: false,
      force: true,
    },
  },
  cache: {
    enable: false,
  },
  projectName: 'my-minip',
  date: '2023-5-30',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: ['@tarojs/plugin-html', 'taro-plugin-pinia',],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'vue3',
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/stores': path.resolve(__dirname, '..', 'src/stores'),
    '@/pages': path.resolve(__dirname, '..', 'src/pages'),
    '@/routes': path.resolve(__dirname, '..', 'src/routes'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
  },
  sass:{
  data: `@import "taro-ui-vue3/dist/style/variables/default.scss";`,
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  
  // if (process.env.NODE_ENV === 'development') {
  //   return merge({}, config, require('./dev'))
  // }
  // return merge({}, config, require('./prod'))
  let envConfig
  if (process.env.NODE_ENV === 'development') {
    envConfig = require('./dev')
  } else {
    envConfig = require('./prod')
  }
  const mergeConfig = Object.assign({},config,envConfig)
  const { defineConstants = {} } = mergeConfig || {}
  console.log("================ build configs ================")
  console.log("-]  ENVIROMENT", '\t', process.env.NODE_ENV)
  Object.keys(defineConstants).forEach(k => {
    console.log("-] ", k, '\t', defineConstants[k])
  })
  console.log("================ build configs ================")
  return merge({}, config, envConfig)
}
