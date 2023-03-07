/*
封装一个函数mineReadFile
参数:path 文件路径
返回:promise对象
*/
function mineReadFile(path){
    return new Promise((resolve,reject)=>{
        require('fs').readFile(path,(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

mineReadFile('./资源/test.txt').then(value=>{console.log(value.toString())},reason=>{console.log(reason)})
