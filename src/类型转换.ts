import {创建日期时间, 日期时间} from './日期时间';

/**
 * 将字节数组转换为文本
 * @param 字节集 - 要转换的字节数组
 * @returns 转换后的文本
 */
function 到文本(字节集: Uint8Array): string {
    return new TextDecoder('utf-8').decode(字节集);
}

/**
 * 将文本转换为字节数组
 * @param 文本 - 要转换的文本
 * @returns 转换后的字节数组
 */
function 到字节集(文本: string): Uint8Array {
    return new TextEncoder().encode(文本);
}

/**
 * 将任意值转换为数值
 * @param 值 - 要转换的值
 * @returns 转换后的数值
 */
function 到数值(值: any): number {
    return parseFloat(值);
}

/**
 * 将任意值转换为整数
 * @param 值 - 要转换的值
 * @returns 转换后的整数
 */
function 到整数(值: any): number {
    return Math.floor(到数值(值));
}

/**
 * 将字符串转换为日期时间对象
 * @param 文本 - 要转换的字符串
 * @returns 转换后的日期时间对象
 */
function 到时间(文本: string): 日期时间 {
    return 创建日期时间(文本);
}

/**
 * 将对象转换为 JSON 字符串
 * @param 对象 - 要转换的对象
 * @returns 转换后的 JSON 字符串
 */
function json到文本(对象: any): string {
    return JSON.stringify(对象);
}

/**
 * 解析 JSON 字符串为对象
 * @param 文本 - 要解析的 JSON 字符串
 * @returns 解析后的对象
 */
function json解析(文本: string): any {
    return JSON.parse(文本);
}

export { 到文本, 到字节集, 到数值, 到整数, 到时间, json到文本, json解析 };
