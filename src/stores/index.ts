import { Pinia, createPinia, defineStore } from "pinia"
import { debounce } from "ts-debounce"
import { PiniaDebounce } from "@pinia/plugin-debounce"
import { App, markRaw } from "vue";
import { Router } from "vue-router";


export function setupStore(app: App<Element>, router: Router): Pinia {
    const pinia = createPinia();
    pinia.use(PiniaDebounce(debounce))
    pinia.use(() => ({
        router: markRaw(router)
    }))
    app.use(pinia);
    return pinia
}

declare interface GlobalState {
    appName: string,
    version: string,
    showTimes: number,
}

export const useGlobalStore = defineStore('global', {
    state(): GlobalState {
        return {
            appName: "demo-miniprogram",
            version: "v1.0.0",
            showTimes: 0
        }
    },
    getters: {
        desc(st): string {
            return `${st.appName} -- ${st.version}`
        }
    },
    actions: {
        showAction() {
            this.showTimes++
        }
    },
    debounce: {
        showAction: 500
    }
})
export * from "./user/index"
export * from "./app/index"