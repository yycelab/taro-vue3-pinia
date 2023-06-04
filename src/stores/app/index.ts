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
            statusBarHeight: 44,
            _vrRedirect: '',
            messageTopSpace: false
        }
    },
    getters: {
        tabTitle(state): string {
            return menuList[state.current].title
        },
        hasRedirect(state): boolean {
            return (state._vrRedirect ?? '').length > 0
        },
        messageTop(state): number {
            return state.messageTopSpace === false ? state.statusBarHeight : state.messageTopSpace
        },
        shouldInitMessageTop(state): boolean {
            return state.messageTopSpace === false
        }
    },
    actions: {
        initStatusBarHeight(num: number) {
            this.statusBarHeight = num
        },
        initMessageTop(num: number) {
            if (num < this.statusBarHeight) {
                this.messageTopSpace = num + this.statusBarHeight
            } else {
                this.messageTopSpace = num
            }
        },
        redirectTo() {
            const _vrRedirect = this._vrRedirect ?? ''
            console.log("[try-redirect-url] to:[", _vrRedirect, "]")
            if (_vrRedirect.length > 0) {
                this._vrRedirect = ''
                this.routeTo({ path: _vrRedirect, action: 'replace' })
            }
        },
        routeTo({ path, extern = false, state = {}, action = "push", redirect = '' }: RouteToOptions) {
            console.log("[routeTo] path:", path, "; extern:", extern, "; redirect:", redirect)
            if (extern) {
                if (redirect.length > 0) {
                    this._vrRedirect = redirect
                }
                if (action === 'push') {
                    tryNavigateTo(path)
                } else {
                    Taro.redirectTo({ url: path })
                }
                return
            }
            const { router }: AppState = this
            if (action === 'push') {
                router!.push(path)
            } else {
                router!.replace(path)
            }
            history.replaceState({ ...history.state, ...state }, '', path)
        },
        switchBottomNav({ index = -1, path = '', triggerTab = true }: { index?: number, path?: string, triggerTab?: boolean }) {
            if (index !== -1 || path.length > 0) {
                if (path.length > 0) {
                    index = menuList.findIndex(it => it.to === path)
                }
                if (this.current !== index && index >= 0 && index <= menuList.length) {
                    this.current = index
                    if (!triggerTab) {
                        console.log("just chenge the current index:", this.current)
                        return
                    }
                    const url = menuList[index].to
                    this.routeTo({ path: url })
                }
            }
        }
    }
})