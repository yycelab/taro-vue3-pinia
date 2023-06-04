<template>
    <view>
        <router-view></router-view>
        <handler :redirect="true" to="/" @on-redirect="handleRedirect" />
    </view>
</template>
  
<script setup lang="ts">
import './index.scss'
// import { useAppStore } from "@/stores/index"
// import TopNav from "@/components/top-nav/index.vue"
// import BottomNav from "@/components/bottom-nav/index.vue"
import { useDidShow } from "@tarojs/taro"
import Handler from "@/components/handler/index.vue"
import { ref } from "vue"

const loading = ref(true)

// const app = useAppStore()
function handleRedirect() {
    loading.value = true
}

useDidShow(() => {
    loading.value = false
})



</script>
  