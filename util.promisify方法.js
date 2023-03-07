/*
    util.promiseify方法
*/

//引入 util模块
const util = require('util')
//引入 fs 模块
const fs = require('fs')
//返回一个新的函数
let  mineReadFile =util.promisify(fs.readFile)

mineReadFile('./资源/test.txt').then(value=>{
    console.log(value.toString())
},reason=>{
    console.log(reason)
})