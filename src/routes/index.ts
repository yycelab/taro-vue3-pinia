import { Router, createRouter, createWebHistory } from "vue-router"
import { App } from "vue"
import NotFound from "@/components/not-found/index.vue"
import UserIndex from "@/pages/components/user/index.vue"
import HomeIndex from "@/pages/components/home/index.vue"
import WelcomeIndex from "@/pages/components/index/index.vue"
import LayoutTabBar from "@/components/layout/tab-bar/index.vue"
// import WebView from "@/pages/components/webview/index.vue"

import { useAppStore, TabHome, TabUser } from "@/stores/index"

/**
 * 定义路由
 */
const routes = [
    {
        path: '/',
        alias: ["/index"],
        component: WelcomeIndex,
        beforeEnter: (to, from) => {
            console.log("[router-index] enter the welcome page")
        }
    },
    // {
    //     path: '/webview',
    //     component: WebView,
    // },
    {
        path: "/tab",
        redirect: '/tab/user',
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
        // console.log('[router-global] try intercept....')
        if (tabs.find(it => it === to.path)) {
            console.log('router guard.....', to.path ,JSON.stringify(to.query))
            store.switchBottomNav({ path: to.path, triggerTab: false })
        }
    })
    app.use(router)
    return router
}