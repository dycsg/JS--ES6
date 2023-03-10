// 定义全局变量
var that;

class Tab{
    constructor(id){
        that = this;
        // 获取元素
        this.main = document.querySelector(id);

        this.add = document.querySelector('.tabadd');
        this.ul = document.querySelector('.fisrstnav ul:first-child');

        this.tabscon = document.querySelector('.tabscon');
        this.init()
    }
    // 初始化
    init(){
        this.updateNode()
        // init初始化操作让相关的元素绑定事件
        // 添加模块  只有一个不需要for
        this.add.onclick = this.addTab

        for(var i = 0; i < this.lis.length; i++){
            // 记入当前索引号
            this.lis[i].index = i
            // 点击的是下面toggle模块 得加this
            this.lis[i].onclick = this.toggleTab;  //不需要加括号 不然就是直接调用
            this.remove[i].onclick = this.removeTab
        }
    }
    // 动态获取元素
    updateNode(){
        this.lis = document.querySelectorAll('li')
        this.sections = document.querySelectorAll('section')
        this.remove = document.querySelectorAll('.remove')
    }
    // 1.切换模块
    toggleTab(){
        // console.log(this.index);
        // 调用 33行 排他思想 先清除后添加类  这里不能用this 要用that全局变量
        that.clearClass()
         // 添加类模块
        this.className = 'liactive'
        that.sections[this.index].className = 'conactive'
    }
    clearClass(){
        // 移除类模块
        for(var i = 0; i < this.lis.length; i++){
            this.lis[i].className = ''
            this.sections[i].className = ''
        }
    }

    // 2.添加模块
    addTab(){
        that.clearClass()
        // alert('11')
        // 创建li元素
        var li = '<li class="liactive"><span>新</span><span class="iconfont icon-guanbi">x</span></li>'
        var section = '<section class="conactive">测试0</section>'
        // 添加元素   
        that.ul.insertAdjacentHTML('beforeend', li)
        that.tabscon.insertAdjacentHTML('beforeend', section)
        
        that.init()
    }
    // 3.删除模块
    removeTab(e){
        // 阻止冒泡
        e.stopPropagation()  //防止点击触发li的切换事件
        var index = this.parentNode.index
        // console.log(index);
        // 根据父亲的索引号删除对应的元素 
        that.lis[index].remove()
        that.section[index].remove()
        that.init()
        // 当我们删除了选定状态的li 让她前一个处于选定状态
        index--
        // 自动调用点击事件
        that.lis[index] && that.lis[index].click()
    }
    // 4.修改模块
}

new Tab()