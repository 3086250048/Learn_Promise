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
    -Promise(excutor)构造函数
        -excutor函数:执行器 (resolve,reject)=>{}
            -resolve函数:内部定义成功时我们调用的函数 value=>{}
            -reject函数:内部定义失败时我们调研的函数 reason=>{}
            -excutor函数会在Promise内部立即同步调用，异步操作会在执行器中执行
    -Promise.prototype.then方法:(onResolved,onRejected)=>{}
        -onResolved函数:成功的回调函数(value)=>{}
        -onRejected函数:失败的回调函数(reason)=>{}
        -指定用于得到成功value的成功回调和用于得到失败resaon的失败回调，会返回一个新的promise对象
    -Promise.prototype.catch方法(onRejected)=>{}
        -onRejected函数:失败的回调函数(reason)=>{}
        -catch只能指定失败的回调
    -Promise.resolve方法:(value)=>{}
        -value:成功的数据或对象
        -返回一个成功或失败的promise对象
    -Promise.reject方法:(reason)=>{}
        -reason:失败的原因
        -返回一个失败的promise对象
    -Promise.all方法:(promises)=>{}
        -promises:包含n个promise数组
        -返回一个新的promise,只有所有的promise都成功才成功，只要有一个失败则直接失败
    -Promise.race 方法:(promises)=>{}
        -promise：包含n个promise的数组
        -返回一个新的promise，第一个完成的promise的结果状态就是最终的结果状态