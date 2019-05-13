//如果是第三方模块不需要加./
//如果是文件模块需要加./
//在另一个文件中将内容解构出来即可使用
// import {str,str2} from './a.js';
// console.log(str,str2);
//a();
import * as b from './a.js';

console.log(b.str,b.str2);
b.a();

import xxx from './b.js';

console.log(xxx);