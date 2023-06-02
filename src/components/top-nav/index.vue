<template>
    <at-nav-bar :style="{marginTop:`${app.statusBarHeight}px`}" @clickLeftIcon="handleGoback" :leftIconType="backIcon ?? 'chevron-left'" color='#000' :title="title"
        :leftText='backTxt'>
        <template v-if="custom">
            <slot></slot>
        </template>
    </at-nav-bar>
</template>
<script setup lang="ts">

import { useAppStore } from "@/stores/index"
import Taro from "@tarojs/taro";
import { useRouter } from "vue-router"
// import {useRouter} from "vue-router"
// back 
// type string is set the back url
// true value use Taro.navicateBack
const props = defineProps<{
    back?: string | true
    custom?: boolean
    backTxt?: string
    title:string
    backIcon?: string
}>()

const app = useAppStore()
const router = useRouter()
async function handleGoback() {
    const backurl = props.back ?? false
    if (backurl === false) {
        router.go(-1)
        return
    }
    if (backurl === true) {
        Taro.navigateBack()
        return
    }
    app.routerTo({ path: backurl, extern: true, action: 'replace' })
}
</script>