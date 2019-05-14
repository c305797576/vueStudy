let str=require('./a.js');
console.log(str);
import xxx from './b.js';

console.log(xxx);
let obj={school:'ssxx'};
let obj1={school:8};
let newObj={...obj,...obj1};
console.log(newObj);

import './index.css';//引入css
import './style.less';//引入less

//在js中引入图片需要import，或者写一个线上路径
import page from './111.jpg';//page代表打包后的图片路径
let img=new Image();
// img.src='./111.jpg';//写了一个字符串webpack不会进行查找
img.src=page;
document.body.appendChild(img);

