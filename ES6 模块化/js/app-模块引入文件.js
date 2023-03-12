// 一般一个项目的app.js 就是模块引入文件
// 把所有要引入的模块写到这个文件里面

// 入口文件

// 模块引入
import * as index from "./js/index.js" 

import * as index2 from "./js/index2.js"

import * as index3 from "./js/index3.js"



// 修改背景为粉色
// 导包
 
import $ from 'jquery'   //$为变量名
$('body').css('background', 'pink')
// 然后再重新
  // 2.npm i bable-cli bable-preset-env browserify -D
 // 3.npx bable js -d dist/js --presets=bable-preset-env
 // 4.打包 npx browserify dist/js dist/js -o dist/dyc.js