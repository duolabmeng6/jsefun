/**
 * 四舍五入
 * @param 欲被四舍五入的数值 欲被四舍五入的数值
 * @param 被舍入的位置 被舍入的位置，默认为0
 * @returns 按照指定的方式进行四舍五入运算的结果数值
 */
export function 四舍五入(欲被四舍五入的数值: number, 被舍入的位置: number = 0): number {
    return Math.round(欲被四舍五入的数值 * Math.pow(10, 被舍入的位置)) / Math.pow(10, 被舍入的位置);
}

/**
 * 取绝对值
 * @param 双精度小数型 欲取其绝对值的数值
 * @returns 数值的绝对值
 */
export function 取绝对值(双精度小数型: number): number {
    return Math.abs(双精度小数型);
}

/**
 * 取整
 * @param value 欲取整的小数
 * @returns 小数的整数部分
 */
export function 取整(value: number): number {
    return Math.floor(value);
}

/**
 * 求次方
 * @param 欲求次方数值 欲求次方数值
 * @param 次方数 次方数
 * @returns 指定数值的指定次方
 */
export function 求次方(欲求次方数值: number, 次方数: number): number {
    return Math.pow(欲求次方数值, 次方数);
}

/**
 * 求平方根
 * @param 欲求次方数值 欲求其平方根的数值
 * @returns 参数的平方根
 */
export function 求平方根(欲求次方数值: number): number {
    return Math.sqrt(欲求次方数值);
}

/**
 * 求正弦
 * @param 欲进行计算的角 欲进行计算的角，单位为弧度
 * @returns 角的正弦值
 */
export function 求正弦(欲进行计算的角: number): number {
    return Math.sin(欲进行计算的角);
}

/**
 * 求余弦
 * @param 欲进行计算的角 欲进行计算的角，单位为弧度
 * @returns 角的余弦值
 */
export function 求余弦(欲进行计算的角: number): number {
    return Math.cos(欲进行计算的角);
}

/**
 * 求正切
 * @param 欲进行计算的角 欲进行计算的角，单位为弧度
 * @returns 角的正切值
 */
export function 求正切(欲进行计算的角: number): number {
    return Math.tan(欲进行计算的角);
}

/**
 * 求反正切
 * @param 欲求其反正切值的数值 欲求其反正切值的数值
 * @returns 数的反正切值
 */
export function 求反正切(欲求其反正切值的数值: number): number {
    return Math.atan(欲求其反正切值的数值);
}


/**
 * 取随机数
 * @param 欲取随机数的最小值 欲取随机数的最小值
 * @param 欲取随机数的最大值 欲取随机数的最大值
 * @returns 指定范围内的随机数值
 */
export function 取随机数(欲取随机数的最小值: number, 欲取随机数的最大值: number): number {
    return Math.floor(Math.random() * (欲取随机数的最大值 - 欲取随机数的最小值 + 1)) + 欲取随机数的最小值;
}

/**
 * 保留小数点后指定位数
 * @param 数值 数值
 * @param 位数 保留的小数位数，默认为2
 * @returns 保留指定小数位数的数值
 */
export function 保留位数(数值: number, 位数: number = 2): number {
    return parseFloat(数值.toFixed(位数));
}

/**
 * 取最小数
 * @param 数值列表 要对比的数值列表
 * @returns 数值列表中的最小值
 */
export function 取最小数(...数值列表: number[]): number {
    return Math.min(...数值列表);
}

/**
 * 取最大数
 * @param 数值列表 要对比的数值列表
 * @returns 数值列表中的最大值
 */
export function 取最大数(...数值列表: number[]): number {
    return Math.max(...数值列表);
}

/**
 * 向下取整
 * @param 数值 数值
 * @returns 向下取整后的数值
 */
export function 向下取整(数值: number): number {
    return Math.floor(数值);
}

/**
 * 向上取整
 * @param 数值 数值
 * @returns 向上取整后的数值
 */
export function 向上取整(数值: number): number {
    return Math.ceil(数值);
}

/**
 * 取整数
 * @param val 字符串形式的数值
 * @returns 整数值
 */
export function 取整数(val: string): number {
    return parseInt(parseFloat(val).toString());
}
