import { setTimeout } from 'timers';

/**
 * 时钟 定时调用函数 也可以使用装饰器 @时钟周期事件(时钟周期=1000)
 *
 * @param {() => boolean} func 运行函数 函数返回false 则停止时钟周期事件
 * @param {number} 时钟周期 毫秒
 */
export function 时钟(func: () => boolean, 时钟周期: number): void {
    const interval = Math.floor(时钟周期);

    const 自调用函数 = () => {
        if (func() !== false) {
            setTimeout(自调用函数, interval);
        }
    };

    setTimeout(自调用函数, interval);
}

/**
 * 装饰器
 *
 * @param {Object} param
 * @param {number} param.时钟周期
 * @returns {(target: any, propertyKey: string, descriptor: PropertyDescriptor) => void}
 */
export function 时钟周期事件({ 时钟周期 }: { 时钟周期: number }): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        if (!descriptor || typeof descriptor.value !== 'function') {
            throw new TypeError(`装饰器只能应用于方法而不是：${typeof descriptor}`);
        }

        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            时钟(() => originalMethod.apply(this, args), 时钟周期);
        };
    };
}
