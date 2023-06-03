<template></template>
<script setup lang="ts">
import { useLoad, useRouter } from "@tarojs/taro"
import { routeTo } from "@/pages/components/utils"
const router = useRouter()
let doRedirect = false;
function dispatch() {
    if (doRedirect) {
        return
    }
    doRedirect = true
    const inputs = router.params
    const { rt, rto, vrto = '', pks = '' } = inputs as any as DispatcherParams
    const redirectType = rt ?? ((vrto.length > 0) ? 'vue' : 'native')
    const params: string[] = []
    if (pks.length > 0) {
        pks.split(`|`).forEach(k => {
            const decodeValue = decodeURIComponent(inputs[k] ?? '')
            params.push(`${k}=${decodeValue}`)
        })
    }

    let fullpath = decodeURIComponent(rto)
    const query = encodeURI(params.join('&'))
    if (redirectType === 'native') {
        fullpath += '?' + query
    } else {
        let vrr = decodeURIComponent(vrto)
        if (vrr.length == 0) {
            vrr = '/'
        }
        vrr += '?' + query
        fullpath += `?_redirect=${encodeURIComponent(vrr)}`
    }
    console.log(" the last redirect url is :", fullpath)
    doRedirect = false
    routeTo({ path: fullpath, extern: true, action: 'replace' })
}

useLoad(() => {
    dispatch()
})

// useDidShow(() => {
//     dispatch()
// })

// onActivated(() => {
//     dispatch()
// })

// onMounted(() => {
//     dispatch()
// })
</script>