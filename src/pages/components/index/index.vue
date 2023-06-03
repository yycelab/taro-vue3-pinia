<template>
    <view>
        <top-nav back="disable" title="欢迎" />
        <at-flex direction="column">
            <at-flex-item class="item-goto">
                <at-button @click="handleGoto({ path: TabHome })">按钮1(go /home)</at-button>
            </at-flex-item>
            <at-flex-item class="item-goto">
                <at-button @click="handleGoto({ path: TabUser })">按钮2(go /user)</at-button>
            </at-flex-item>
            <at-flex-item class="item-goto">
                <at-button @click="handleGoto({ path: '/pages/user/index', extern: true })">
                    按钮3(go
                    /pages/user/index)
                </at-button>
            </at-flex-item>
            <at-flex-item class="item-goto">
                <at-button @click="handleGoto({ path: '/notfound-hahaha' })">
                    按钮3(go
                    /404)
                </at-button>
            </at-flex-item>
            <at-flex-item class="item-goto">
                <at-button
                    @click="handleGoto({ path: `/pages/webview/index?title=${encodeURIComponent('百度')}&url=${encodeURIComponent('https://www.baidu.com')}`, extern: true })">
                    打开WebView
                </at-button>
            </at-flex-item>
            <at-flex-item class="item-goto">
                <at-noticebar>通过中间转发页面(/pages/dispatcher/index)实现重定向</at-noticebar>
            </at-flex-item>
            <at-flex-item class="item-goto">
                <at-noticebar>重定向到小程序注册页</at-noticebar>
                <at-button @click="handleGoto({ path: indexPageUrl, extern: true })">
                    页面重定向 /pages/user/index
                </at-button>
            </at-flex-item>
            <at-flex-item class="item-goto">
                <at-noticebar>
                    <view>重定向到vue路由页面(vue-router)</view>
                    <view style="padding-left:36px;">->(/pages/index/index)->(/tab/user)</view>
                </at-noticebar>
                <at-button @click="handleGoto({ path: vuePageUrl, extern: true })">
                    <view>复杂重定向 /tab/user</view>
                </at-button>
            </at-flex-item>
        </at-flex>
    </view>
</template>

<script setup lang="ts">
import './index.scss'
import TopNav from "@/components/top-nav/index.vue"
import { useAppStore, TabHome, TabUser } from "@/stores/index"
import { AtNoticebar } from 'taro-ui-vue3';
// import { onActivated, onMounted } from 'vue';
// import {useRouter} from "@tarojs/taro"

const indexPageUrl = `/pages/dispatcher/index?rto=${encodeURIComponent('/pages/user/index')}&rt=native&pks=id|name&id=1&name=${encodeURIComponent('页面重定向')}`
const vuePageUrl = `/pages/dispatcher/index?rto=${encodeURIComponent('/pages/index/index')}&vrto=${encodeURIComponent('/tab/user')}&pks=name|id&id=2&name=${encodeURIComponent("复杂重定向")}`
// import { useRouter } from "vue-router"
const app = useAppStore()
// const router = useRouter()
// function handleGotoWithParams(url: string) {
//     router.push({ path: url })
// }

function handleGoto({ path, extern }: { path: string, extern?: boolean }) {
    console.log("goto url :", path)
    app.routeTo({ path, extern })
}

// const router = useRouter()

// onMounted(()=>{
//     console.log("current page/index url:",window.location.href)
// })

// onActivated(()=>{
//     console.log("current page/index url:",window.location.href)
// })


</script>
