<template>
    <view>
        <nav-top :title="'404'" />
        <view class="try-tips">
            <at-noticebar class="tips-cube">
                <view>又加班了,迷糊了吧.</view>
                <view>恭喜你走入了一个未开发的功能中</view>
            </at-noticebar>
        </view>
    </view>
</template>
<script setup>
import NavTop from "@/components/top-nav/index.vue"
</script>
<style>
.try-tips {
    margin-top: 25vh;
    position: relative;
}

.tips-cube {
    width: 50vw;
    margin-left: 25vw;
}
</style>