<template>
    <view>
        <at-noticebar>
            <view>this is home</view>
            <view>GLOBAL const:{{ api }}</view>
        </at-noticebar>
        <view>
            <!-- <at-avatar size="large" circle :image="Image1" /> -->
            <image class="image-item" :src="user_atavar" />
        </view>
    </view>
</template>
<script setup>
// import { useLoad } from "@tarojs/taro"
import { onMounted } from "vue"
// import { useAppStore, TabHome } from "@/stores/index"
import { user_atavar } from "@/assets/index"
import { json } from "@/libs/http-client"
// const app = useAppStore()
const api = API_URL
// useDidHide(() => {
//     console.log("page hide")
// })
// useDidShow(() => {
//     console.log("page show")
// })
onMounted(async (p) => {
    const res = await json('https://www.baidu.com')
    console.log('load baidu by json ,has data:', res !== undefined)
})
// onMounted(() => {
//     console.log("components mounted ")
// })
// onUnmounted(() => {
//     console.log("components unmounted ")
// })
</script>
<style lang="scss">
.image-item {
    background-color: $color-black-3;
    width: 320px;
    height: 320px;
}
</style>