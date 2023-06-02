<template>
    <view>
        <web-view :src="viewUrl" @error="handleLoadFailed" @load="handleLoadSuccess"></web-view>
        <at-noticebar v-if="!loadStatus">
            <view>遗憾的通知你,加载失败,链接:</view>
            <view>{{ viewUrl }}</view>
        </at-noticebar>
        <at-skeleton
        v-else
        style="margin: 10px"
        type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
        />
    </view>
</template>
<script setup>
import TopNav from "@/components/top-nav/index.vue"
import { WebView } from "@tarojs/components"
import { useLoad, useDidShow, useRouter } from "@tarojs/taro"
import { ref, onMounted, onActivated } from "vue"
const viewUrl = ref("")
let begin = 0
const router = useRouter()
const loadStatus = ref(true)
function init() {
    begin = (new Date()).getTime()
    loadStatus.value = true
    viewUrl.value = decodeURIComponent(router.params.url ?? '')
}

function handleLoadFailed() {
    loadStatus.value = false
    console.log("load webview failed ,url:",viewUrl)
}

function handleLoadSuccess() {
    const cost = (new Date()).getTime() - begin
    console.log("load page success ,cost:", cost, 'ms')
}
onMounted(() => {
    init()
})
onActivated(() => {
    init()
})



</script>