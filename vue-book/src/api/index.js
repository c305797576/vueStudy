import axios from 'axios';
//增加默认请求路径
axios.defaults.baseURL='http://localhost:3000';
axios.interceptors.response.use((res)=>{
  return res.data;//在这里统一拦截结果，把结果处理成res.data
});
//获取轮播图数据，返回的是一个promise对象
export let getSliders=()=>{
  return axios.get('/sliders');
};
//获取热门图书
export let getHot=()=>{
  return axios.get('/hot');
};
//获取所有图书
export let getBooks=()=>{
  return axios.get('/book')
};
//删除某一本图书
export let removeBook=(id)=>{
  return axios.delete(`/book?id=${id}`);
};

