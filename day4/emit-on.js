//发布 emit 订阅 on  {女生失恋:['哭','买买买','吃吃吃']}

function Girl() {
    this._enevts={}
}
Girl.prototype.on=function (eventName,callback) {
    if (this._enevts[eventName]){
        this._enevts[eventName].push(callback) //{失恋:[cry,eat]}
    }else {
        this._enevts[eventName]=[callback]  //{失恋:[cry]}
    }
};
Girl.prototype.emit=function (eventName,...args) {
    //[].slice.call(arguments,1)
    //Array.from(arguments).slice(1)
    console.log(args);
    if (this._enevts[eventName]){
        this._enevts[eventName].forEach(cb=>cb.apply(this,args));
        // this._enevts[eventName].forEach(cb=>cb.apply(this,...args));//等同于上面
    }
};
let girl=new Girl();
let cry=(who,who1)=>{
    console.log(who,who1+'哭');
};
let shopping=(who)=>{
    console.log(who+'买买买');
};
let eat=(who)=>{
    console.log(who+'吃吃吃');
};
girl.on('失恋',cry);
girl.on('失恋',shopping);
girl.on('失恋',eat);

girl.emit('失恋','我','你');