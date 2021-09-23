import axios from "axios";


const ajax = axios;
// ajax.defaults.baseURL = '/api/';
const errorHandle = (status, other) => {
    switch (status) {
        case 400:
            console.log('信息验证失败');
            break;
        case 401:
            console.log('认证失败');
            break;
        case 403:
            localStorage.removeItem("token");
            console.log('token校验失败');
            break;
        case 404:
            console.log('请求资源不存在');
            break;
        default :
            console.log(other);
            break;
    }
};
// 添加请求拦截器
ajax.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // console.log(config);
    // if (localStorage.token) {
    //     config.headers.Authorization = localStorage.token;
    // }// 实现单点登录
    // if (store.token) {
    //     config.headers.authorization = store.token;
    // }// 每次登录
    // console.log(store.get('user'));
    // console.log(config);
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
ajax.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let result = response.data;
    // if (response.headers['authorization']) {
    //     localStorage.token = response.headers['authorization'];
    // }
    return result.code === 200 ? Promise.resolve(result) : Promise.reject(result);
}, function (error) {
    // 对响应错误做点什么
    const {response} = error;
    if (response) {
        errorHandle(response.data.code, response.data.message)
        return Promise.reject(response.data);
    } else {
        console.log('断了');
    }
});

export default ajax;
