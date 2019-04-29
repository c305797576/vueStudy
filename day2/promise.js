//resolve代表转向成功状态，reject代表转向失败状态，两个均是函数
//Promise就一个then方法

let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let a='mogu'
        resolve(a)
    },2000)
});
p.then((data)=>{
    console.log(data);
},()=>{});