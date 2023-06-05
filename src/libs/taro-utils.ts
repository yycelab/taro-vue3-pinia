import Taro,{ createSelectorQuery, nextTick, BoundingClientRectCallbackResult } from "@tarojs/taro";
import { MessageOptions } from "global";

async function taroSelector(selector: string, all: boolean = false): Promise<BoundingClientRectCallbackResult[]> {
    const query = createSelectorQuery()
    return new Promise((reslove) => {
        nextTick(() => {
            if (all) {
                query.selectAll(selector).boundingClientRect(res => {
                    const results: BoundingClientRectCallbackResult[] = (res as BoundingClientRectCallbackResult[]) ?? []
                    reslove(results)
                }).exec()
            } else {
                query.select(selector).boundingClientRect(res => {
                    const results: BoundingClientRectCallbackResult[] = []
                    if (res) {
                        results.push(res as BoundingClientRectCallbackResult)
                    }
                    reslove(results)
                }).exec()
            }
        })
    })
}

/**
 * 需要自行判断返回的长度
 * 有可能找不到
 * @param idSelector 
 * @returns 
 */
export async function findElements(selector: string): Promise<BoundingClientRectCallbackResult[]> {
    return await taroSelector(selector, selector.startsWith('#'))
}

/**
 * 使用页面需要包含自定义 @/components/top-nav/index.vue
 * @param options 
 */
export function message(options:MessageOptions){
    Taro.atMessage(options)
}
