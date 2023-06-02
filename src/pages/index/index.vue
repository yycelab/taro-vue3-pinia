<template>
    <router-view></router-view>
</template>
  
<script setup lang="ts">
import './index.scss'
import { useAppStore } from "@/stores/index"
// import TopNav from "@/components/top-nav/index.vue"
// import BottomNav from "@/components/bottom-nav/index.vue"
import { useDidShow } from "@tarojs/taro"

const app = useAppStore()

useDidShow(() => {
    app.routerTo({path:"/"})
})



</script>
  