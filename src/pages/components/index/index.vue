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
                <at-button @click="handleGoto({ path: indexPageUrl, extern: true })">
                    页面重定向 /pages/user/index
                </at-button>
            </at-flex-item>
            <at-flex-item class="item-goto">
                <at-button @click="handleGoto({ path: vuePageUrl, extern: true })">
                    复杂重定向 /pages/index/index
                </at-button>
            </at-flex-item>
        </at-flex>
    </view>
</template>

<script setup lang="ts">
import './index.scss'
import TopNav from "@/components/top-nav/index.vue"
import { useAppStore, TabHome, TabUser } from "@/stores/index"
// import { onActivated, onMounted } from 'vue';
// import {useRouter} from "@tarojs/taro"

const indexPageUrl = `/pages/dispatcher/index?rto=${encodeURIComponent('/pages/user/index')}&rt=native&pks=id|name&id=1&name=${encodeURIComponent('小明')}`
const vuePageUrl = `/pages/dispatcher/index?rto=${encodeURIComponent('/pages/index/index')}&vrto=${encodeURIComponent('/tab/user')}&pks=name|id&id=1&name=${encodeURIComponent("复杂测试")}`
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
