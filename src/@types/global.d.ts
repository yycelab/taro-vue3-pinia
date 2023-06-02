import { RouterState } from "pinia"
import { TabItem } from "taro-ui-vue3/types/tab-bar"
import { HistoryState } from "vue-router"

declare global {
    
    export interface BottomNavItem extends TabItem {
        to: string
    }

    export interface AppState extends Readonly<RouterState> {
        bottomNav: TabItem[]
        current: number
        statusBarHeight:number
    }

    /**
     *  extern: default false
     *  action: default push
     */
    export interface RouteToOptions {
        path: string
        extern?: boolean
        action?: 'push' | 'replace'
        state?: HistoryState
    }
}


