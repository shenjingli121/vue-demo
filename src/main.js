import {createApp} from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from "./router/index"
import ajax from "./config/axiosConfig"
import localStorage from "./config/localStorage"
import store from './store/index.js'

const app = createApp(App);
app.use(router);
app.use(store);
app.config.globalProperties.$localStorage = localStorage;
// app.config.globalProperties.$router = router;
app.use(VueAxios, ajax);

app.mount('#app');
app.use(ElementPlus)
