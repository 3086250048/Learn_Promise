function Promise(excutor){
    this.PromiseState='pending';
    this.PromiseResult=undefined;
    /*当构造函数中的函数是异步执行时，会将then方法中函数存到数组中 
    存到数组中的目的是为了实现promise对象改变状态时能同时调用多个
    then方法中定义函数*/
    this.callback=[]
    //让this指向Promise实例
    const self=this;
    function resolve(data){
        //限制状态只能更改一次
        if(self.PromiseState!=='pending') return
             //修改对象的状态 promiseState
            self.PromiseState='fullfilled';
        //设置对象的结果值 promiseResul
        self.PromiseResult=data
        /*如果Promise中的resolve函数是异步调用，
则then方法的回调函数会在promise实例对象改变状态后调用*/
        self.callback.forEach((item)=>{
            if(item['onResolved']){
                item['onResolved'](data)
            }
        })
        
    }
    function reject(data){
        if(self.PromiseState!=='pending') return
        //修改对象的状态 promiseState
        self.PromiseState='rejected';
        //设置对象的结果值 promiseResul
        self.PromiseResult=data
         /*如果Promise中的resolve函数是异步调用，
    则then方法的回调函数会在promise实例对象改变状态后调用*/
        self.callback.forEach((item)=>{
            if(item['onRejected']){
                item['onRejected'](data)
            }
        })
    }
    try{
       excutor(resolve,reject)
    }catch(e){
        reject(e)
    }

}

//添加then方法
Promise.prototype.then=function(onResolved,onRejected){
    return new Promise((resolve,reject)=>{
        //根据Promise实例的状态执行不同的回调函数
        //原型对象方法中的this指向构造函数生成的实例对象
        if(this.PromiseState==='fullfilled'){
            try{
                let result=onResolved(this.PromiseResult)
                if(result instanceof Promise){
                    result.then(v=>{
                        resolve(v);
                    },r=>{
                        reject(r);
                    })
                }else{
                    resolve(result)
                }
            }catch(e){
                resolve(e)
            }
          
        }
        if(this.PromiseState==='rejected'){
            onRejected(this.PromiseResult)
        }
        //保存回调函数
        if(this.PromiseState==='pending'){
            this.callback.push({
                onResolved: onResolved,
                onRejected:onRejected
            })
        }
    })  
}