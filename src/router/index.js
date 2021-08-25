import {createRouter,createWebHistory} from "vue-router";


const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../view/login/login.vue')
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BABEL_ENV),
    routes
});

export default router
