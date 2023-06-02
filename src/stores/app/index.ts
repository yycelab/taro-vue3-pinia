import Taro from "@tarojs/taro"
import { defineStore } from "pinia"

export const TabHome = "/tab/home"
export const TabUser = "/tab/user"

export const menuList: BottomNavItem[] = [
    {
        title: '首页',
        iconType: 'bullet-list',
        text: 'new',
        to: TabHome
    },
    {
        title: '用户',
        iconType: 'camera',
        max: 99,
        text: '100',
        to: TabUser
    }
]

async function tryNavigateTo(url: string) {
    const options: Taro.navigateTo.Option = {
        url: url, fail: (res) => {
            if ((res.errMsg ?? '').length > 0) {
                Taro.redirectTo(options)
            }
        }
    }
    await Taro.navigateTo(options)
}



export const useAppStore = defineStore('app', {
    state(): AppState {
        return {
            bottomNav: menuList,
            current: 0,
            statusBarHeight: 44
        }
    },
    getters: {
        tabTitle(state):string{
            return menuList[state.current].title
        }
    },
    actions: {
        initStatusBarHeight(num: number) {
            this.statusBarHeight = num
        },
        routerTo({ path, extern = false, state = {}, action = "push" }: RouteToOptions) {
            if (extern) {
                if (action === 'push') {
                    tryNavigateTo(path)
                } else {
                    Taro.redirectTo({ url: path })
                }
                return
            }
            const { router }: AppState = this
            const options = { path: path };
            if (action === 'push') {
                router!.push(options)
            } else {
                router!.replace(options)
            }
            history.replaceState({ ...history.state, ...state }, '', path)
        },

        switchBottomNav({ index = -1, path = '' }: { index?: number, path?: string }) {
            if (index !== -1 || path.length > 0) {
                if (path.length > 0) {
                    index = menuList.findIndex(it => it.to === path)
                }
                if (this.current !== index && index >= 0 && index <= menuList.length) {
                    this.current = index
                    const url = menuList[index].to
                    this.routerTo({ path: url })
                }
            }
        }
    }
})