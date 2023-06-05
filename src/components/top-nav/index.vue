<template>
    <view>
        <at-nav-bar id="nav-bar" :style="{ paddingTop: `${app.statusBarHeight}px`, zIndex: 1100 }"
            @clickLeftIcon="handleGoback" :leftIconType="leftIcon" color='#000' :title="title" :leftText='backTxt'>
            <template v-if="custom">
                <slot></slot>
            </template>
        </at-nav-bar>
        <at-message :style="{ marginTop: `${app.messageTopSpace}px` }" />
    </view>
</template>
<script setup lang="ts">

import { findElements } from "@/libs/taro-utils";
import { useAppStore } from "@/stores/index"
import Taro from "@tarojs/taro";
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router"
// import {useRouter} from "vue-router"
// back 
// type string is set the back url
// true value use Taro.navicateBack
// disable 没有返回
const props = defineProps<{
    back?: string | true
    custom?: boolean
    backTxt?: string
    title: string
    backIcon?: string
    goBack?: () => void
}>()

const disabled = computed(() => 'disable' === props.back)
const leftIcon = computed(() => disabled.value ? undefined : (props.backIcon ?? 'chevron-left'))
const app = useAppStore()
const router = useRouter()
async function handleGoback() {
    const backurl = props.back ?? false
    if (backurl === 'disable') {
        return
    }
    if (props.goBack) {
        props.goBack()
        return
    }
    if (backurl === false) {
        router.go(-1)
        return
    }
    if (backurl === true) {
        Taro.navigateBack()
        return
    }
    app.routeTo({ path: backurl, extern: true, action: 'replace' })
}
onMounted(async () => {
    if (app.shouldInitMessageTop) {
        const results = await findElements('#nav-bar')
        // console.log("should init message top spaces!")
        // nextTick(() => {
        //     const query = createSelectorQuery()
        //     query.select('#nav-bar').boundingClientRect((res) => {
        if (results.length > 0 && results[0]) {
            app.initMessageTop(results[0].height)
        }
        //     }).exec()
        // })
    }
})

// onActivated(() => {
//     console.log("icon is ", leftIcon)
// })
</script>