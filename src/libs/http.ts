import Taro from "@tarojs/taro"

declare type Method = 'get' | 'json' | 'post'
declare type Headers = Record<string, string>

declare interface RequestContext<P> {
    method: 'GET' | 'POST'
    headers: Headers
    url: string
    params?: P
}

export declare interface HttpResponse {
    statusCode: number
    data?: any
}

declare interface ResponseContext<P> extends RequestContext<P> {
    response?: HttpResponse
}

declare interface Response {
    code: number
    message?: string
}

declare interface ListData<T> {
    list: T[]
}

export declare interface PageData {
    current: number
    size: number
    total: number
    maxPage: number
}

declare interface PageListData<T> extends ListData<T> {
    page: PageData
}

declare interface ResponseData<T> extends Response {
    data: T
}
export declare type R = Response
export declare type RD<T> = ResponseData<Optional<T>>
export declare type RLD<T> = ResponseData<ListData<T>>
export declare type RPLD<T> = ResponseData<PageListData<T>>

export declare type BeforeRequestHook<P> = (ctx: RequestContext<P>) => Promise<void | R>

export declare type AfterResponseHook<P, RS extends R> = (ctx: ResponseContext<P>) => Promise<RS>

export declare type Optional<T> = T | undefined

export declare interface HttpConfig {
    base: string
    headers: Headers
    beforeRequest?: BeforeRequestHook<any>
    afterResponse?: AfterResponseHook<any, R>
}

const URI_PARAMS = /\/:[a-zA-Z]+/
const Header_Content_Type = "Content-Type"
const JSON_Header = "application/json"
// 参数化路径
async function fillUrlParam(ctx: RequestContext<any>): Promise<void | R> {
    const { url, params = {} } = ctx
    if (URI_PARAMS.test(url)) {
        const keys = Object.keys(params)
        if (keys.length === 0) {
            return { code: -1, message: `${url}参数化地址,找不到匹配参数` }
        }
        const matches = URI_PARAMS.exec(url)!
        let muteUrl = url
        for (var match in matches) {
            const prop = match.replace('/:', '')
            if (params[prop]) {
                return { code: -1, message: `${url}参数化地址,找不到${prop}匹配参数` }
            }
            delete params[prop]
            muteUrl = muteUrl.replace(match, `/${params[prop]}`)
        }
        ctx.url = muteUrl
    }
}


export async function httpGet<P, RS extends R>(config: HttpConfig, uri: string, params?: P): Promise<RS> {
    return request(config, 'get', uri, params)
}

export async function httpJson<P, RS extends R>(config: HttpConfig, uri: string, params: P): Promise<RS> {
    const cfg = config || {}
    cfg.headers = cfg.headers ?? {}
    cfg.headers[Header_Content_Type] = JSON_Header
    return request(cfg, 'json', uri, params)
}

export async function httpPost<P, RS extends R>(config: HttpConfig, uri: string, params?: P): Promise<RS> {
    return request(config, 'post', uri, params)
}

/**
 * 
 * @param config 
 * @param uri 
 * @param params 
 * @returns 
 */
async function request<P, RS>(config: HttpConfig, action: Method, uri: string, data?: P): Promise<RS> {
    const { base = '', beforeRequest, afterResponse } = config
    const m = action === 'get' ? 'GET' : 'POST'
    const customHeaders: Headers = config.headers ?? {}
    if (action === 'json' && !customHeaders[Header_Content_Type]) {
        customHeaders[Header_Content_Type] = JSON_Header
    }
    const context: any = { method: m, url: `${base}${uri}`, headers: customHeaders, params: data }
    const before: BeforeRequestHook<any> = async (ctx) => {
        try {
            const res = await fillUrlParam(ctx)
            if (res) {
                return res
            }
            if (beforeRequest) {
                return beforeRequest(ctx)
            }
        } catch (e) {
            return { code: -1, message: `BeforeRequestHook Error:${e.message}` }
        }
    }
    const reqCtx = context as RequestContext<any>
    const { url, headers, params, method } = reqCtx
    const req = await before(reqCtx)
    const httpResponse: HttpResponse = { statusCode: 200 }
    if (req) {
        httpResponse.data = req
    } else {
        const res = await Taro.request({
            url: url,
            method: method,
            header: headers,
            data: params,
            dataType: 'json'
        })
        httpResponse.data = res.data
        if (res.statusCode !== 200) {
            httpResponse.statusCode = res.statusCode
            httpResponse.data = { code: -1, message: `http failed,statusCode:${res.statusCode}` }
            console.log('[http] [error-status] ', res.statusCode, ',', res.errMsg)
        }
    }

    context.response = httpResponse
    const resCtx = context as ResponseContext<any>
    const after = async (ctx) => {
        // const rs = await interceptResponse(ctx)
        // ctx.response = rs
        if (afterResponse) {
            return await afterResponse(ctx)
        }
        return ctx.response
    }
    const res = await after(resCtx)
    return res as any as RS
}

