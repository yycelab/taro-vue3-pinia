<template>
    <view>
        <top-nav title="用户中心" :back="true" :custom="true">
            <view>用户中心</view>
        </top-nav>
        <view>
            this is user center
            <view>ID:{{ profile.id }} Name:{{ profile.name }}</view>
        </view>
    </view>
</template>
  
<script setup lang="ts">
import './index.less'
import TopNav from "@/components/top-nav/index.vue"
import { onMounted, ref } from 'vue';

import { useRouter, useLoad } from "@tarojs/taro"
const profile = ref({
    id: '0',
    name: '未知用户'
})
const router = useRouter()
onMounted(() => {
    console.log("user center")
})
useLoad(() => {
    const param = router.params
    if (param.id) {
        profile.value.id = param.id
    }
    if (param.name) {
        profile.value.name = decodeURIComponent(param.name)
    }
})
</script>
  