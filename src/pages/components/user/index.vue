<template>
    <view>
        this is user center
        <at-noticebar>
            ID: {{ id }} Name:{{ name }}
        </at-noticebar>
    </view>
</template>
<script setup lang = "ts">
import { useDidShow, useDidHide } from "@tarojs/taro"
import { onMounted, onActivated, ref } from "vue"
import { useRoute, } from "vue-router"
// import { useAppStore } from "@/stores/index"

// const app = useAppStore()
// onActivated(() => {
//     app.switchBottomNav({ path: TabUser })
// })
useDidHide(() => {
    console.log("page hide")
})
useDidShow(() => {
    console.log("page show")
})

const route = useRoute()
const id = ref("0")
const name = ref("未知用户")
// const router = useRouter()
function initParams() {
    console.log("[index-user] location:",window.location.href)
    const query = route.query
    if (query.id) {
        id.value = query.id as string
    }
    if (query.name) {
        name.value = query.name as string
    }
}

onMounted(() => {
    initParams()
})
onActivated(() => {
    initParams()
})

</script>