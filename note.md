#笔记

#promise是什么
    -抽象解释
        -promise是一门新的技术(ES6规范)
        -promise是js中进行异步编成的新解决方案
        -备注:旧方案是当纯使用回调函数
    -具体解释
        -从语法上来说:promise是一个构造函数
        -从功能上来说promise对象用来封装一个异步操作并可以获取其成功或失败的结果值
    -异步编成
        -fs文件操作
        -数据库操作
        -AJAX
        -定时器
    -优点
        -支持链式调用，解决回调地狱
        -指定回调函数的方式更加灵活
            -promise:启动异步任务=>返回promise对象=>给promise对象绑定回调对象(甚至可以在异步任务结束之后指定多个)

#Promise的状态
    -pending 未决定
    -resolved / fullfilled 成功
    -rejected 失败
    -promise对象初始姿态为pending，且promise状态只能改变一次，成功的结果称为value，失败的结果为reason

#Promise对象的值
    -实例对象中的另一个属性: PromiseResult
    -PromiseResult中保存着对象成功或失败的 value
    -只有resolve和reject函数可以修改PromiseResult的value

#Promise中的API
    -Promise构造函数
            -Promise(excutor)