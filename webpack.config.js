/**
 * Created by Administrator on 2017/2/18.
 */
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        main:'./src/script/main.js',
        a:'./src/script/a.js',
        b:'./src/script/b.js',
        c:'./src/script/c.js'
    },
    output:{
        path:'./dist/',
        filename:'js/[name]-[chunkhash].js',
        publicPath:'http://cdn.com/'
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'a.html',
            template:'index.html',
            inject:'body',
            title:'this is a.html',
            // chunks:['main','a']
            excludeChunks:['b']
        }),
        new htmlWebpackPlugin({
            filename:'b.html',
            template:'index.html',
            inject:'body',
            title:'this is b.html',
            // chunks:['b']
            excludeChunks:['c']
        }),
        new htmlWebpackPlugin({
            filename:'c.html',
            template:'index.html',
            inject:'body',
            title:'this is c.html',
            // chunks:['main','c']
            excludeChunks:['a']
        })
    ]
};