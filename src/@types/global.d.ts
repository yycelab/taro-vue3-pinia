import { RouterState } from "pinia"
import { TabItem } from "taro-ui-vue3/types/tab-bar"
import { HistoryState } from "vue-router"

declare global {

    export interface DispatcherParams {
        /**
         * 重定向地址
         */
        rto: string
        /**
         * 跳转页面类型 
         * 不传自动判断
         */
        rt?: 'native' | 'vue'
        /**
         * vue router 重定向
         */
        vrto?: string
        /**
         * 参数key集合(该部分参数会向后传递)
         * 多个值用'|'分割
         */
        pks?: string
    }

    export interface BottomNavItem extends TabItem {
        to: string
    }

    export interface AppState extends Readonly<RouterState> {
        bottomNav: TabItem[]
        current: number
        statusBarHeight: number
        _vrRedirect:string
    }

    /**
     *  extern: default false
     *  action: default push
     *  redirect 在external为true时生效.此时为vue-router内部跳转
     */
    export interface RouteToOptions {
        path: string
        extern?: boolean
        action?: 'push' | 'replace'
        state?: HistoryState
        redirect?: string
    }
}


