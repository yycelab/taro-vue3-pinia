<template></template>
<script setup lang="ts">
import { useRouter } from '@tarojs/taro';
// import { onActivated } from 'vue';
import { useAppStore } from "@/stores/index"
import { onActivated, onBeforeMount } from 'vue';
// 处理一些公共的handlers
// redirect处理跳转url有_redirect的二次条状
const handlers = defineProps<{
    redirect?: boolean,
    to?: string
}>()

const emit = defineEmits(["on-redirect"])
const router = useRouter()
const app = useAppStore()
function handleParamRedirect() {
    if (handlers.redirect) {
        if (app.hasRedirect) {
            app.redirectTo()
            return
        }
        console.log('[handl-param-redirect] location:', window.location.href)
        let toUrl = handlers.to
        if (router.params._redirect) {
            emit('on-redirect')
            toUrl = decodeURIComponent(router.params._redirect)
            app.routeTo({ path: router.path, extern: true, action: 'replace', redirect: toUrl })
        } else {
            app.routeTo({ path: toUrl ?? '/', action: 'replace' })
        }
    }
}

onBeforeMount(() => {
    console.log("[onBeforeMount] [handler-action] .......")
    handleParamRedirect()
})

onActivated(() => {
    console.log("[onActivated] [handler-action] .......")
    handleParamRedirect()
})

</script>