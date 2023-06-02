<template>
    <view>
        <top-nav :title="app.tabTitle" back="/pages/index/index" />
        <router-view></router-view>
        <bottom-nav />
    </view>
</template>
  
<script setup lang="ts">
import { useAppStore } from "@/stores/index"
import TopNav from "@/components/top-nav/index.vue"
import BottomNav from "@/components/bottom-nav/index.vue"
import { useDidShow } from "@tarojs/taro"

const app = useAppStore()

useDidShow(() => {
    app.switchBottomNav({index:0})
})
</script>
  