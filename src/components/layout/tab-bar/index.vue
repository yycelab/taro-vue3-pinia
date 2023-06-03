<template>
    <view>
        <top-nav :title="app.tabTitle" :go-back="handleGoback" />
        <router-view></router-view>
        <bottom-nav />
    </view>
</template>
  
<script setup lang="ts">
import { useAppStore } from "@/stores/index"
import TopNav from "@/components/top-nav/index.vue"
import BottomNav from "@/components/bottom-nav/index.vue"
import { onActivated, onBeforeMount } from "vue"

const app = useAppStore()

function handleGoback() {
    app.routeTo({ path: "/" })
}

function init() {
}
onBeforeMount(() => {
    init()
})
onActivated(() => {
    init()
})
</script>
  