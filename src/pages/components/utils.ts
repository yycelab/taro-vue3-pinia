import { useAppStore } from "@/stores/index"

export function tapBottomTab(option: { index?: number, path?: string }) {
    const app = useAppStore()
    app.switchBottomNav(option)
}

export function routeTo(option:RouteToOptions){
    const app = useAppStore()
    app.routeTo(option)
}