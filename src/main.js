import {createApp} from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from "./router/index"
import ajax from "./config/axiosConfig"
import store from "./config/loaclStotage"

const app = createApp(App);
app.use(router);
app.config.globalProperties.$store = store;
// app.use(store);
app.use(VueAxios, ajax);

app.mount('#app');
app.use(ElementPlus)
