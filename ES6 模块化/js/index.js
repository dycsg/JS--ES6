// 如果想要用这个js文件的一些功能模块
// 1.就在前面加入 export  分别暴露

export let scholl = '南昌职业大学'

export function test(){
    console.log('啊正那就是你');
}

// 这是没有使用 export 暴露的函数
function dyc(){
    console.log('dyc');
}