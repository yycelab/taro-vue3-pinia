declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare global{
  const API_URL:string
}

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq';
    [key: string]: any;
  }
}

declare module 'pinia' {
  export interface PiniaCustomProperties {
    router: Router
  }

  export interface RouterState{
    router?: Router
  }
}

import { debounce } from 'ts-debounce'
import { Router } from 'vue-router';

declare module '@pinia/plugin-debounce' {
  export interface Config {
    Debounce: typeof debounce
  }
}

/**
 * 添加taro static 不能被编译器正确识别的声明
 */
declare type CreateType = 'info' | 'success' | 'error' | 'warning'

declare interface MessageOptions {
  message: string
  type?: CreateType
  duration?: number
}

declare interface RouteOptions {
  url: string
}

declare module '@tarojs/taro' {
  interface TaroStatic {
    atMessage(options: MessageOptions): void
  }
}





