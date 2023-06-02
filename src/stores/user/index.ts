import { defineStore } from "pinia"

declare interface UserState{
    name:string,
    token?:string,
    atavar?:string
}
export const useUserStore = defineStore('user', {
    state(): UserState {
        return {
            name: "admin user",
            token:'',
            atavar:'default-image.png'
        }
    },
    getters: {
        
    },
})