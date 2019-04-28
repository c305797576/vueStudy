let arr=[1,2,3,4,5];
arr.b='100';

//forEach ,for in,for,for of
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr.forEach((item,index)=>{
//     // console.log(item);
//     console.log(index);
// });

//for in key会变成字符串，包括数组私有对象
// for (let key in arr){
//     console.log(arr[key]);
// }
//支持return 并且是值of数组，不能遍历对象
// for (let val of arr){
//     console.log(val);
// }



//Object.keys()将对象的KEY作为新数组
let obj={school:'aqcz',age:18};
for (let val of Object.keys(obj)){
    console.log(obj[val]);
}
console.log('-----------------------------------');
let newArr=[1,2,3,4,5].filter((item,index)=>{
  return item>2&&item<5;
});
console.log(newArr);
console.log('-----------------------------------');
//3)map 映射 将原有的数组映射成一个新数组
let arr1=[1,2,3].map((item)=>{
    return `<li>${item}</li>`;
});
console.log(arr1.join(''));
console.log('-----------------------------------');
let arr2=[5,2,3,4,5,555];
console.log(arr2.includes(5));
console.log('-----------------------------------');
//返回找的的哪一项，不会改变数组，回调函数中返回true表示找到了，找到后停止循环
let res=arr2.find((item,index)=>{
    // if (item==55){
    //     return true;
    // }
    return item.toString().indexOf(5)>-1;
});
console.log(res);
console.log('-----------------------------------');
//some 找true 找到true后停止，返回true 找不到返回false
//every 找false 找到false后停止，返回false


//reduce 收敛 4个参数 返回叠加后的结果 原数组不变

let sum=[1,2,3,4,5].reduce(function (prev,next,index,item){
    console.log(prev,next);
    return prev+next;
});
console.log(sum);
console.log('-----------------------------------');
let sum2=[{price:30,count:2},{price:30,count:3},{price:30,count:4}].reduce(function (prev,next,index,item) {
    //0+60
    //60+90
    //150+120
    console.log(prev+next.price*next.count);
    return prev+next.price*next.count
},0);//默认指定第一次的prev
console.log(sum2);
console.log('-----------------------------------');

let arr4=[[1,2,3],[4,5,6],[7,8,9]].reduce(function (prev,next,index,item) {
    return prev.concat(next);
});
console.log(arr4);
console.log([1, 2, 3].concat([1, 2, 3]));