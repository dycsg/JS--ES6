const fs = require('fs')

function qjj(){
    return new Promise((resolve, reject) => {
        fs.readFile('./ES8/md/将进酒.html'), (err, data) => {
            if (err) reject(err)
            resolve(data)
        }
    })
}
function qm(){
    return new Promise((resolve, reject) => {
        fs.readFile('./ES8/md/清明.html'), (err, data) => {
            if (err) reject(err)
            resolve(data)
        }
    })
}
function sc(){
    return new Promise((resolve, reject) => {
        fs.readFile('./ES8/md/诗词.html'), (err, data) => {
            if (err) reject(err)
            resolve(data)
        }
    })
}

async function main (){
    let qingming = await qm()
    let qiangjingjie = await qjj()
    let shici = await sc()

    console.log(shici.toString());
}
main()