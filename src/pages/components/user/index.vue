<template>
    this is user center
</template>
<script setup>
import { useDidShow, useDidHide, useLoad } from "@tarojs/taro"
import { onMounted, onUnmounted, onActivated } from "vue"
import { useAppStore, TabUser } from "@/stores/index"

const app = useAppStore()
// onActivated(() => {
//     app.switchBottomNav({ path: TabUser })
// })
useDidHide(() => {
    console.log("page hide")
})
useDidShow(() => {
    console.log("page show")
})
useLoad((p) => {
    console.log("page load ,can load data")
})
onMounted(() => {
    console.log("components mounted ")
})
onUnmounted(() => {
    console.log("components unmounted ")
})
</script>