# webpack 初体验
>  * 翻墙看视频教程：https://www.youtube.com/watch?v=TaWKUpahFZM
>  * 看了教程，自己练习练习，记个笔记，我把教程的例子划分成5个独立小demo，加强练习，也方便梳理思路
>  * 教程是连贯的，对于独立Demo每次都会有一些重复操作，所以都是基于前面进行修改的
>  * Demo源码地址：https://github.com/dingyiming/learn-Tools-webpack/tree/master/demos/youtube

## 预先准备
* 安装好`npm`，了解基本使用
*  目录中新建页面文件 index.html，后面几个demo都以这个访问的基础，第一次创建后，后面都直接复制进目录下即可
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>webpack demo</title>
</head>
<body>
<!--关键点：将由webpack打包后的单独的一个js文件引入即可-->
<script src="a.js" charset="UTF-8"></script>
</body>
</html>
```

## Demo1 webpack1 生成js
1.新建目录demo1
```
mkdir demo1
```
2.在项目目录下初始化npm
```
cd demo1
npm init
```
3.下载webpack
```
npm i webpack --save-dev
```
4.向`package.json`中添加webpack加载内容
```
"script" : {
    "start" : "webpack ./index.js a.js"
}
```
5.在目录下新建index.js,并输入如下代码
```
alert('OK webpack') //弹窗显示OK
```
6.打包初体验
```
npm start
```
7.打开index.html查看结果
```
open index.html
```
8.结果如图
![OK webpack](https://github.com/dingyiming/learn-Tools-webpack/blob/master/demos/youtube/pics/1OKwebpack.png?raw=true)

## Demo2  webpack2 模块加载
1.复制一份Demo1目录命名为Demo2
2.修改`index.js`中代码
```
alert('OK webpack' + require('./bear.js'))
```
3.新建`bear.js`
```
module.exports = 'Oh! It works!'
```
4.`npm start` 打包
5.`open index.html` 访问查看
6.结果如图
![](https://github.com/dingyiming/learn-Tools-webpack/blob/master/demos/youtube/pics/2OhItworks.png?raw=true)

## Demo3 webpack-dev-server
1.复制一份Demo2目录命名为Demo3
2.npm下载`webpack-dev-server`
```
npm i webpack-dev-server --save-dev
```
3.更改`package.json`中代码：
```
"scripts": {
    "start": "webpack-dev-server ./index.js"
  },
```
4.用`webpack-dev-server`打包
```
npm start
```
5.浏览器访问 `localhost:8080`
6.结果如图
![](https://github.com/dingyiming/learn-Tools-webpack/blob/master/demos/youtube/pics/2OhItworks.png?raw=true)

## Demo4  use jquery
1.复制一份Demo3目录命名为Demo4
2.加载`jquery`
```
npm i jquery --save
```
3.更改`bear.js`内容为
```
var $ = require('jquery')
module.exports = $('<div/>').html('Hello Webpack')
```
4.更改`index.js`
```
require(['./bear.js',function(bear){
    document.body.appendChild(bear[0])
}])
```
5.打包`npm start` 访问`localhost:8080`
6.结果如图
![](https://github.com/dingyiming/learn-Tools-webpack/blob/master/demos/youtube/pics/2OhItworks.png?raw=true)

## Demo5 use css
1.复制一份Demo4目录命名为Demo5
2.更改`bear.js`
```
var $ = require('jquery')

require('./bear.css')

module.exports = $('<div/>').html('OK! Webpack!')
```
3.新建`bear.css`
```
@import "base.css";
div{
    color:red;
}
```
4.新建`bese.css`
```
body{
    background: green;
}
```
5.下载css加载工具
```
npm i css-loader --save-dev
```
6.下载style加载工具
```
npm i style-loader --save-dev
```
7.新建`webpack.config.js`文件
```
module.exports = {
    entry : './index.js',
    output : {
        path : __dirname,
        filename : 'a.js'
    },
    module : {
        loaders : [
            { test : /\.css$/,loader : 'style!css!'}
        ]
    }
}
```
8.打包`npm start` ,访问`localhost:8080`

9.结果如图
![](https://github.com/dingyiming/learn-Tools-webpack/blob/master/demos/youtube/pics/4css.png?raw=true)


> OK! 继续学习vuejs and webpack