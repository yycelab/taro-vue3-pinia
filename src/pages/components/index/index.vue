<template>
    <view>
        <top-nav title="欢迎" />
        <at-flex direction="column">
            <at-flex-item :size="12">
                <at-button @click="handleGoto({ path: TabHome })">按钮1(go /home)</at-button>
            </at-flex-item>
            <at-flex-item>
                <at-button @click="handleGoto({ path: TabUser })">按钮2(go /user)</at-button>
            </at-flex-item>
            <at-flex-item>
                <at-button @click="handleGoto({ path: '/pages/user/index', extern: true })">
                    按钮3(go
                    /pages/user/index)
                </at-button>
            </at-flex-item>
            <at-flex-item>
                <at-button @click="handleGoto({ path: '/notfound-hahaha' })">
                    按钮3(go
                    /404)
                </at-button>
            </at-flex-item>
            <at-flex-item>
                <at-button
                    @click="handleGoto({path:`/pages/webview/index?title=${encodeURIComponent('百度')}&url=${encodeURIComponent('https://www.baidu.com')}`,extern:true})">
                    打开WebView
                </at-button>
            </at-flex-item>
        </at-flex>
    </view>
</template>

<script setup lang="ts">
import './index.scss'
import TopNav from "@/components/top-nav/index.vue"
import { useAppStore, TabHome, TabUser } from "@/stores/index"
// import { useRouter } from "vue-router"
const app = useAppStore()
// const router = useRouter()
// function handleGotoWithParams(url: string) {
//     router.push({ path: url })
// }

function handleGoto({ path, extern }: { path: string, extern?: boolean }) {
    console.log("goto url :", path)
    app.routerTo({ path, extern })
}


</script>
