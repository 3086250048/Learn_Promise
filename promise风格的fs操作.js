const fs=require('fs')

//一般方法
// fs.readFile('./资源/test.txt',(err,data)=>{
//     if(err) throw err
//     console.log(data.toString())
// })

//promise
const p=new Promise((resolve,reject)=>{
    fs.readFile('./资源/test.txt',(err,data)=>{
        if(err) reject(err)
        resolve(data)
    })
})

p.then(value=>{
    console.log(value.toString())
},reason=>{
    console.log(reason)
})
