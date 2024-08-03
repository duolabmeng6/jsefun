/**
 * 日期时间操作 符合中国人思维逻辑的日期时间操作实用函数
 */

/**
 * 日期时间类
 */
export class 日期时间 {
    private t: Date;

    /**
     * 构造函数
     * @param {string | number} str 初始化时间字符串或时间戳
     */
    constructor(str: string | number = "now") {
        if (typeof str === "number") {
            this.t = new Date(str * 1000);
        } else if (str === "now") {
            this.t = new Date();
        } else {
            this.t = new Date(str);
        }
    }

    /**
     * 格式化时间为字符串
     * @param {string} format 时间格式
     * @returns {string} 格式化后的时间字符串
     */
    到文本(format: string = "YYYY-MM-DD HH:mm:ss"): string {
        const map: Record<string, number | string> = {
            YYYY: this.t.getFullYear(),
            MM: String(this.t.getMonth() + 1).padStart(2, '0'),
            DD: String(this.t.getDate()).padStart(2, '0'),
            HH: String(this.t.getHours()).padStart(2, '0'),
            mm: String(this.t.getMinutes()).padStart(2, '0'),
            ss: String(this.t.getSeconds()).padStart(2, '0')
        };
        return format.replace(/YYYY|MM|DD|HH|mm|ss/gi, matched => map[matched]);
    }

    /**
     * 获取时间戳
     * @returns {number} 时间戳
     */
    取时间戳(): number {
        return Math.floor(this.t.getTime() / 1000);
    }

    /**
     * 获取日期字符串
     * @returns {string} 日期字符串
     */
    取日期(): string {
        return this.到文本("YYYY-MM-DD");
    }

    /**
     * 获取年份
     * @returns {number} 年份
     */
    取年(): number {
        return this.t.getFullYear();
    }

    /**
     * 获取月份
     * @returns {number} 月份
     */
    取月(): number {
        return this.t.getMonth() + 1;
    }

    /**
     * 获取日期
     * @returns {number} 日期
     */
    取日(): number {
        return this.t.getDate();
    }

    /**
     * 获取小时
     * @returns {number} 小时
     */
    取小时(): number {
        return this.t.getHours();
    }

    /**
     * 获取分钟
     * @returns {number} 分钟
     */
    取分钟(): number {
        return this.t.getMinutes();
    }

    /**
     * 获取秒
     * @returns {number} 秒
     */
    取秒(): number {
        return this.t.getSeconds();
    }

    /**
     * 获取微秒
     * @returns {number} 微秒
     */
    取微秒(): number {
        return this.t.getMilliseconds() * 1000;
    }

    /**
     * 获取每周的第几天
     * @returns {number} 每周的第几天
     */
    取每周的第几天(): number {
        return this.t.getDay();
    }

    /**
     * 获取每年的第几天
     * @returns {number} 每年的第几天
     */
    取每年的第几天(): number {
        const start = new Date(this.t.getFullYear(), 0, 0);
        const diff = (this.t.getTime() - start.getTime()) + ((start.getTimezoneOffset() - this.t.getTimezoneOffset()) * 60 * 1000);
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    }

    /**
     * 获取每月的第几周
     * @returns {number} 每月的第几周
     */
    取每月的第几周(): number {
        const start = new Date(this.t.getFullYear(), this.t.getMonth(), 1);
        const diff = this.t.getDate() + start.getDay() - 1;
        return Math.ceil(diff / 7);
    }

    /**
     * 获取每年的第几周
     * @returns {number} 每年的第几周
     */
    取每年的第几周(): number {
        const start = new Date(this.t.getFullYear(), 0, 1);
        const diff = (this.t.getTime() - start.getTime()) + ((start.getTimezoneOffset() - this.t.getTimezoneOffset()) * 60 * 1000);
        const oneWeek = 1000 * 60 * 60 * 24 * 7;
        return Math.floor(diff / oneWeek);
    }

    /**
     * 获取每月天数
     * @returns {number} 每月天数
     */
    取月天数(): number {
        return new Date(this.t.getFullYear(), this.t.getMonth() + 1, 0).getDate();
    }

    /**
     * 设置年月日
     * @param {number} year 年
     * @param {number} month 月
     * @param {number} day 日
     * @returns {日期时间} 当前实例
     */
    设置年月日(year?: number, month?: number, day?: number): 日期时间 {
        if (year !== undefined) this.t.setFullYear(year);
        if (month !== undefined) this.t.setMonth(month - 1);
        if (day !== undefined) this.t.setDate(day);
        return this;
    }

    /**
     * 设置时分秒
     * @param {number} hour 小时
     * @param {number} minute 分钟
     * @param {number} second 秒
     * @returns {日期时间} 当前实例
     */
    设置时分秒(hour: number = 0, minute: number = 0, second: number = 0): 日期时间 {
        this.t.setHours(hour, minute, second);
        return this;
    }

    /**
     * 增减日期时间
     * @param {number} years 年
     * @param {number} months 月
     * @param {number} weeks 周
     * @param {number} days 日
     * @param {number} hours 小时
     * @param {number} minutes 分钟
     * @param {number} seconds 秒
     * @returns {日期时间} 当前实例
     */
    增减日期时间(years: number = 0, months: number = 0, weeks: number = 0, days: number = 0, hours: number = 0, minutes: number = 0, seconds: number = 0): 日期时间 {
        this.t.setFullYear(this.t.getFullYear() + years);
        this.t.setMonth(this.t.getMonth() + months);
        this.t.setDate(this.t.getDate() + weeks * 7 + days);
        this.t.setHours(this.t.getHours() + hours);
        this.t.setMinutes(this.t.getMinutes() + minutes);
        this.t.setSeconds(this.t.getSeconds() + seconds);
        return this;
    }

    /**
     * 获取时间间隔
     * @param {日期时间} datetime 日期时间实例
     * @returns {Object} 时间间隔对象
     */
    取时间间隔(datetime: 日期时间): Record<string, number> {
        const diff = Math.abs(this.t.getTime() - datetime.t.getTime()) / 1000;
        return {
            years: Math.floor(diff / (60 * 60 * 24 * 365)),
            months: Math.floor(diff / (60 * 60 * 24 * 30)),
            days: Math.floor(diff / (60 * 60 * 24)),
            hours: Math.floor(diff / (60 * 60)),
            minutes: Math.floor(diff / 60),
            seconds: Math.floor(diff),
            weeks: Math.floor(diff / (60 * 60 * 24 * 7))
        };
    }

    /**
     * 获取友好时间
     * @returns {string} 友好时间字符串
     */
    取友好时间(): string {
        const diff = Math.abs(new Date().getTime() - this.t.getTime()) / 1000;
        if (diff < 60) return '刚刚';
        if (diff < 3600) return `${Math.floor(diff / 60)}分钟前`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}小时前`;
        if (diff < 2592000) return `${Math.floor(diff / 86400)}天前`;
        if (diff < 31104000) return `${Math.floor(diff / 2592000)}个月前`;
        return `${Math.floor(diff / 31104000)}年前`;
    }

    /**
     * 获取原始日期时间对象
     * @returns {Date} 原始日期时间对象
     */
    datetime(): Date {
        return this.t;
    }

    /**
     * 深拷贝当前实例
     * @returns {日期时间} 拷贝后的实例
     */
    copy(): 日期时间 {
        return new 日期时间(this.t.getTime() / 1000);
    }

    /**
     * 转换为字符串
     * @returns {string} 日期时间字符串
     */
    toString(): string {
        return this.到文本();
    }
}

/**
 * 获取当前时间戳
 * @returns {number} 当前时间戳
 */
export function 取现行时间戳(): number {
    return Math.floor(Date.now() / 1000);
}

/**
 * 将日期字符串转换为时间戳
 * @param {string} str 日期字符串
 * @returns {number} 时间戳
 */
export function 日期到时间戳(str: string = "now"): number {
    return new 日期时间(str).取时间戳();
}

/**
 * 获取当前时间
 * @returns {日期时间} 当前日期时间实例
 */
export function 取现行时间(): 日期时间 {
    return new 日期时间();
}

/**
 * 获取格式化当前时间
 * @param {number} 格式 格式类型
 * @param {boolean} 自定义 是否自定义格式
 * @returns {string} 格式化后的时间字符串
 */
export function 取现行时间2(格式: number, 自定义: boolean = false): string {
    const date = new Date();
    if (自定义) {
        // 自定义格式需要提供有效的格式字符串
        return new 日期时间(date.getTime() / 1000).到文本(格式.toString());
    }
    switch (格式) {
        case 1:
            return new 日期时间(date.getTime() / 1000).到文本("YYYY-MM-DD HH:mm:ss");
        case 2:
            return new 日期时间(date.getTime() / 1000).到文本("YYYY-MM-DD");
        case 3:
            return new 日期时间(date.getTime() / 1000).到文本("HH:mm:ss");
        case 4:
            return new 日期时间(date.getTime() / 1000).到文本("YYYY年MM月DD日 HH时mm分ss秒");
        default:
            return new 日期时间(date.getTime() / 1000).到文本("YYYY-MM-DD HH:mm:ss");
    }
}

/**
 * 获取当前时间
 * @returns {日期时间} 当前日期时间实例
 */
export function now(): 日期时间 {
    return new 日期时间();
}

/**
 * 创建日期时间实例
 * @param {string} timestr 时间字符串
 * @returns {日期时间} 日期时间实例
 */
export function 创建日期时间(timestr: string): 日期时间 {
    return new 日期时间(timestr);
}

/**
 * 时间迭代
 * @param {string} start 开始时间
 * @param {string} end 结束时间
 * @returns {IterableIterator<Date>} 时间迭代对象
 */
export function* 时间迭代(start: string, end: string): IterableIterator<Date> {
    let current = new Date(start);
    const endDate = new Date(end);
    while (current <= endDate) {
        yield new Date(current);
        current.setDate(current.getDate() + 1);
    }
}
