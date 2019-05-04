let vm = new Vue({
    el: '#app',
    data: {
        todos:[
            {isSelected:false,title:'睡觉'},
            {isSelected:false,title:'吃饭'},
            {isSelected:false,title:'打豆豆'},
        ],
        title:'',
        current:'',
        hash:''
    },
    methods: {
        addList(){
            this.todos.push({isSelected:false,title:this.title});
            this.title='';
        },
        delList(val){
            console.log(val);
            this.todos=this.todos.filter(item=>item!==val);
        },
        remember(val){
            console.log(val);
            this.current=val;
        },
        reset(val){
            this.current='';
        }
    },
    computed: {
        count(){
            return this.todos.filter(item=>!item.isSelected).length
        },
        filterTodos(){
            if (this.hash==='all') return this.todos;
            if (this.hash==='finish') return this.todos.filter(item=>item.isSelected);
            if (this.hash==='unfinish') return this.todos.filter(item=>!item.isSelected);
            return this.todos;
        }
    },
    directives:{
        focus(el,bindings){
            if (bindings.value){el.focus()}
        }
    },
    watch: {
        todos:{
            handler(){
                localStorage.setItem('data',JSON.stringify(this.todos));
            },deep:true
        }
    },
    created(){
        this.todos=JSON.parse(localStorage.getItem('data')) || this.todos;
        //监测hash
        this.hash=window.location.hash.slice(2) || 'all';
        window.addEventListener('hashchange',()=> {
            console.log(window.location.hash);
            this.hash=window.location.hash.slice(2);
        })
    },
    filters: {}
});