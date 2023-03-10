
        // 1. 引入 fs 模块
        const fs = require('fs');
        
        const p = new Promise((resolve, reject) => {                     //异步任务
            fs.readFile('./md/诗词.md', (err, data) => {
                resolve(data)
            })
        })
        p.then(value => {
            return new Promise((resolve, reject) =>{                       //异步任务
                fs.readFile('./md/清明.md', (err, data) => {
                    resolve([value, data])
                })
            })
        }).then(value => {
            return new Promise((resolve, reject) =>{                       //异步任务
                fs.readFile('./md/将进酒.md', (err, data) => {
                    // 压入
                    value.push(data)
                    resolve(value)
                })
            })
        }).then(value => {
            console.log(value.join('\r\n'));    //因为是数组所以用join拼接
        })
