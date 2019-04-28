//arrow fn 不具备this，arguments
//自己家没有this就找上一级this

//如何更改this指向
//1）call apply bind
//2）var that = this
//3）=>
//如何确定this是谁 看谁调用的 .前面是谁this就是谁

function a(b) {
    return b+1;
}
let a1=b=>b+1;//去掉function关键字，参数有一个可以省略小括号，小括号和大括号之间有一个箭头，
// 如果没有大括号则直接是返回值，有大括号必须return
let a2=b2=>c=>b2+c; //高阶函数（两箭头以上,包括2）
console.log(a2(10)(3));