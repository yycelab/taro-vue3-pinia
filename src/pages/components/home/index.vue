<template>
    <view>
        <at-noticebar>
            <view>this is home</view>
            <view>GLOBAL const:{{ api }}</view>
        </at-noticebar>
        <view>
            <at-avatar size="large" circle :image="Image1"/>
            <image class="image-item" :src="Image1"/>
        </view>
</view>
</template>
<script setup>
import { useDidShow, useDidHide, useLoad } from "@tarojs/taro"
import { onMounted, onUnmounted, onActivated } from "vue"
import { useAppStore, TabHome } from "@/stores/index"
import Image1 from "@/assets/images/1.webp"

const app = useAppStore()
const api = API_URL
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
<style lang="scss">

.image-item{
    background-color: $color-black-3;
    width: 320px;
    height: 320px;
}
</style>