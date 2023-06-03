import { createApp } from 'vue'
import { install } from "./app-tuv3"
import './app.scss'
import { setupStore,useAppStore } from "@/stores/index"
import { setupRouter } from "@/routes/index"
import Taro from '@tarojs/taro'


const app = createApp({
  onShow(options) {
  },
  async onLaunch(options){
    const res =await Taro.getSystemInfo()
    const app = useAppStore()
    const height = res.statusBarHeight||44
    console.log("get the devices status bar height!",height)
    app.initStatusBarHeight(res.statusBarHeight||44)
  }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

install(app)
setupStore(app,setupRouter(app))
export default app



