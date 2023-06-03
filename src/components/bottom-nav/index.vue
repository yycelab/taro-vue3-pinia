<template>
    <at-tab-bar fixed :tabList="app.bottomNav" @click="tapMenu" :current="app.current" />
</template>
<script setup lang="ts">
import { useAppStore } from "@/stores/index"
import { onActivated, onMounted } from "vue";

const app = useAppStore()
function tapMenu(item: number) {
    app.switchBottomNav({ index: item })
}

onMounted(() => {
    console.log("[onMounted] this tab index is :", app.current)
})
onActivated(() => {
    console.log("[onMounted] this tab index is :", app.current)
})
</script>