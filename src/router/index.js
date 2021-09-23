import {createRouter,createWebHistory} from "vue-router";
import localStorage from "../config/localStorage"

const routes = [
    {
        path: '/',
        redirect: 'login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../view/login/login.vue'),
        meta:{
            needLogin: false
        }
    },
    {
        path: '/hello',
        name: 'hello',
        component: () => import('../components/HelloWorld'),
        meta:{
            needLogin: true
        }
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BABEL_ENV),
    routes
});
router.beforeEach((to, from, next) => {
    if (to.meta.needLogin) {
        if (localStorage.get('authToken')) {
            next();
        } else {
            next({
                name: "login",
                // query: {redirect: '/'} //登录后再跳回此页面时要做的配置
            });
        }
    }
    next();
});


export default router

