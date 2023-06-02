<template>
    <view>
        <top-nav title="用户中心" :back="true" :custom="true">
            <view>用户中心</view>
        </top-nav>
        <view>
            this is user center
        </view>
    </view>
</template>
  
<script setup lang="ts">
import './index.less'
import TopNav from "@/components/top-nav/index.vue"
import {onMounted } from 'vue';

onMounted(() => {
    console.log("user center")
})
</script>
  