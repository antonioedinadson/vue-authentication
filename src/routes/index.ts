import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { authenticationStore } from "../stores/authentication";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        meta: {
            auth: { permisssions: [] }
        },
        component: () => import("../views/Home.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Login.vue")
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/Register.vue")
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/Dashboard.vue")
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/NotFound.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {


    if (!to.meta.auth) {
        next();
    }

    const auth = authenticationStore();

});

export default router;