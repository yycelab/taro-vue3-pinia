<template>
    <view>
        <top-nav title="欢迎"/>
        <at-flex direction="column">
            <at-flex-item :size="12">
                <at-button @click="handleGoto({ path: TabHome })">按钮1(go /home)</at-button>
            </at-flex-item>
            <at-flex-item>
                <at-button @click="handleGoto({ path: TabUser })">按钮2(go /user)</at-button>
            </at-flex-item>
            <at-flex-item>
                <at-button @click="handleGoto({ path: '/pages/user/index', extern: true })">按钮3(go
                    /pages/user/index)</at-button>
            </at-flex-item>
        </at-flex>
    </view>
</template>

<script setup lang="ts">
import './index.scss'
import TopNav from "@/components/top-nav/index.vue"
import { useAppStore,TabHome,TabUser } from "@/stores/index"
const app = useAppStore()

function handleGoto({ path, extern }: { path: string, extern?: boolean }) {
    app.routerTo({ path, extern })
}


</script>
