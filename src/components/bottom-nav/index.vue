<template>
    <at-tab-bar fixed :tabList="app.bottomNav" @click="tapMenu" :current="app.current" />
</template>
<script setup lang="ts">
import { useAppStore } from "@/stores/index"

const app = useAppStore()
function tapMenu(item: number) {
    app.switchBottomNav({index:item})
}
</script>