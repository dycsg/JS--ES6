
        // // 一，用node读取文件
        // 1. 引入 fs 模块
        const fs = require('fs');

        // // 2.调用方法读取文件
        // fs.readFile('./md/诗词.md', (err, data) => {
        //     // 如果失败，则抛出错误
        //     if (err) throw err;
        //     // 如果成功，则输出内容
        //     console.log(data.toString())
        // })

        // 二，Promise读取文件
        const p = new Promise(function(resolve, reject) {
            fs.readFile('./md/诗词.md', (err, data) => {
                // 判断如果失败
                if(err) reject(err);
                // 如果成功
                resolve(data)
            })
        })

           // 调用promise对象then方法
        p.then(function(value) {
            console.log(value.toString());
        },
        function(reason) {
            console.log('读取失败！！')
        })
           

