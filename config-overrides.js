const { override, fixBabelImports, addWebpackAlias, addPostcssPlugins } = require('customize-cra');
const path = require('path')
module.exports = override(
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src')
    }),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: 'css',
    }),
    // addLessLoader({
    //     javascriptEnabled: true,
    //     modifyVars: { '@primary-color': '#1DA57A' },
    // }),
    addPostcssPlugins([require('postcss-pxtorem')({
        rootValue: 37.5,
        propList: ['*'],
        exclude: /node_modules/i
        // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
        // propWhiteList: []
    }),])
);