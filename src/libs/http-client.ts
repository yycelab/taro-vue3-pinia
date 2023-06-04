import { HttpConfig, R, httpGet, httpJson, httpPost, AfterResponseHook } from "./http";

const interceptResponse: AfterResponseHook<any, R> = (ctx) => {
    console.log("[interceptResponse] [logdata] statusCode:",ctx.response?.statusCode,", data:",JSON.stringify(ctx.response?.data))
    return ctx.response?.data
}
const config: HttpConfig = { base: '', headers: {}, afterResponse: interceptResponse }

export function customClient(init: (config: HttpConfig) => void) {
    config.afterResponse = interceptResponse
    init(config)
}
export async function get<P, RS extends R>(uri: string, params?: P): Promise<RS> {
    return httpGet(config, uri, params)
}
export async function post<P, RS extends R>(uri: string, params?: P): Promise<RS> {
    return httpPost(config, uri, params)
}

export async function json<P, RS extends R>(uri: string, params?: P): Promise<RS> {
    return httpJson(config, uri, params)
}