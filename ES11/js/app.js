// 静态的方法
// import * as m1 from './hello.js'

// 给按钮绑定点击事件
const btn = document.querySelector('#btn')
btn.addEventListener('click', function(){
    // 动态的方法
    import('./hello.js').then(module => {
        // console.log(module);
        // 再调用点击事件
        module.hello()
    })
})