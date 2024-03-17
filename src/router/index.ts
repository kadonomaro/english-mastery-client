import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/pages/Home.vue";

const routes: RouteRecordRaw[] = [
    { path: "/", name: "Home", component: Home },
    {
        path: "/lessons/:id",
        name: "LessonsDetail",
        component: () => import("@/pages/LessonsDetail.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
