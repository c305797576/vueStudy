let http = require('http');
let fs = require('fs');
let url = require('url');

//获取轮播图 /sliders
let sliders=require('./sliders');
//读取内容
function read(cb) {
  fs.readFile('./book.json','utf8',function (err,data) {
    if (err || data.length==0){
      cb([]);//如果有错误或者文件没长度就是空数组
    }else {
      cb(JSON.parse(data));//将读出来的内容转化成对象
    }
  })
}
//写入内容
function write(data,cb) {
  fs.writeFile('./book.json',JSON.stringify(data),cb)
}
let pageSize=5;//每页显示5个
http.createServer((request, response) => {
  //设置跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  response.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  response.setHeader("X-Powered-By",' 3.2.1');
  if(request.method=="OPTIONS") return response.end();/*让options请求快速返回*/

  let {pathname, query} = url.parse(request.url,true);

  if (pathname=='/page'){
    let offset=parseInt(query.offset)||0;
    read(function (books) {
      let result=books.reverse().slice(offset,offset+pageSize);//数据倒序
      let hasMore=true;
      if (books.length<=offset+pageSize){
        hasMore=false;
      }
      response.setHeader('Content-Type','application/json;charset=utf8');
      response.end(JSON.stringify({result:result,hasMore:hasMore}))
    });
    return;
  }
  if (pathname==='/sliders'){
    response.setHeader('Content-Type','application/json;charset=utf8');
    return response.end(JSON.stringify(sliders))
  }
  if (pathname=='/hot'){
    read(function (books) {
      let hot=books.reverse().slice(0,6);
      response.setHeader('Content-Type','application/json;charset=utf8');
      setTimeout(function () {
        response.end(JSON.stringify(hot))
      },2000)

    });
    return;
  }
  if (pathname==='/book'){
    //对书的增删改查
    let id=parseInt(query.id);//取出的字符串
    switch (request.method){
      case 'GET':
        if (!isNaN(id)){
          //获取单本图书
          read(function (books) {
            let book=books.find(item=>item.bookId===id);
            if (!book) book={};
            response.setHeader('Content-Type','application/json;charset=utf8');
            response.end(JSON.stringify(book))
          })
        }else {
          //获取所有图书
          read(function (books) {
            response.setHeader('Content-Type','application/json;charset=utf8');
            response.end(JSON.stringify(books.reverse()))
          })
        }
        break;
      case 'POST':
        let str='';
        request.on('data',chunk=>{
          str+=chunk;
      });
        request.on('end',()=>{
          let book=JSON.parse(str);
          read(function (books) {
            book.bookId=books.length?books[books.length-1].bookId+1:1;
            books.push(book);
            write(books,function () {
              response.setHeader('Content-Type','application/json;charset=utf8');
              response.end(JSON.stringify(book));
            })
          })
        });
        break;
      case 'PUT':
        if (id){
          let str='';
          request.on('data',chunk=>{
            str+=chunk;
          });
          request.on('end',()=>{
            let book=JSON.parse(str);
            read(function (books) {
              books=books.map(item=>{ //找到相同的数替换
                if (item.bookId===id){
                  return book;
                }
                return item;
              });
              write(books,function () {
                response.setHeader('Content-Type','application/json;charset=utf8');
                response.end(JSON.stringify(book));
              })
            })
          })
        }
        break;
      case 'DELETE':
        read(function (books) {
          books=books.filter(item=>item.bookId !== id);
          write(books,function () {
            response.setHeader('Content-Type','application/json;charset=utf8');
            response.end(JSON.stringify({}))//删除返回空对象
          });
        });
        break;
    }
    return;
  }

  fs.stat('.'+pathname,function (err, stats) {
    if (err){
      fs.createReadStream('index.html').pipe(response);
      response.statusCode=404;
      response.end('NOT FOUND')
    }else {
      //是目录会报错
      if (stats.isDirectory()){
        let p=require('path').join('.'+pathname,'./index.html');
        fs.createReadStream(p).pipe(response);
      }else {
        fs.createReadStream('.'+pathname).pipe(response);
      }

    }
  })
}).listen(3000);
