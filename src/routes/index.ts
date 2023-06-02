import { Router, createRouter, createWebHistory } from "vue-router"
import { App } from "vue"
import NotFound from "@/components/not-found/index.vue"
import UserIndex from "@/pages/components/user/index.vue"
import HomeIndex from "@/pages/components/home/index.vue"
import WelcomeIndex from "@/pages/components/index/index.vue"
import LayoutTabBar from "@/components/layout/tab-bar/index.vue"

import { useAppStore, TabHome, TabUser } from "@/stores/index"

/**
 * 定义路由
 */
const routes = [
    {
        path: '/',
        alias:["/index"],
        component: WelcomeIndex,
    },
    {
        path: "/tab",
        redirect:'/tab/user',
        component: LayoutTabBar,
        children: [
            {
                path: 'user',
                component: UserIndex
            },

            {
                path: "home",
                component: HomeIndex,
            },
        ]
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound
    }
]

export function setupRouter(app: App<Element>): Router {
    const router = createRouter({
        history: createWebHistory(),
        routes
    })
    const tabs = [TabHome, TabUser]
    router.beforeEach(async (to, from) => {
        const store = useAppStore()
        if (tabs.find(it => it === to.path)) {
            store.switchBottomNav({ path: to.path })
        }
    })
    app.use(router)
    return router
}