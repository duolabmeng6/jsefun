/**
 * 数组类
 */
class 数组 {
    private val: any[];

    /**
     * 初始化数组
     * @param {any[]} data 初始数据
     */
    constructor(data: any[] = []) {
        this.val = [...data];
    }

    /**
     * 加入成员
     * @param {any} object 成员
     */
    加入成员(object: any): void {
        this.val.push(object);
    }

    /**
     * 统计成员次数
     * @param {any} object 成员
     * @returns {number} 成员出现的次数
     */
    统计成员次数(object: any): number {
        return this.val.filter(item => item === object).length;
    }

    /**
     * 查找成员
     * @param {any} object 成员
     * @returns {number} 成员的下标
     */
    查找成员(object: any): number {
        return this.val.indexOf(object);
    }

    /**
     * 弹出成员
     * @param {number} [index=-1] 成员的下标
     * @returns {any} 弹出的成员
     */
    弹出成员(index: number = -1): any {
        if (index === -1) {
            return this.val.pop();
        } else {
            return this.val.splice(index, 1)[0];
        }
    }

    /**
     * 插入成员
     * @param {any} object 成员
     * @param {number} [index=-1] 插入位置
     */
    插入成员(object: any, index: number = -1): void {
        if (index === -1) {
            this.val.push(object);
        } else {
            this.val.splice(index, 0, object);
        }
    }

    /**
     * 移除成员
     * @param {any} object 成员
     */
    移除成员(object: any): void {
        const index = this.val.indexOf(object);
        if (index !== -1) {
            this.val.splice(index, 1);
        }
    }

    /**
     * 翻转数组
     */
    翻转(): void {
        this.val.reverse();
    }

    /**
     * 排序数组
     * @param {Object} [options] 排序选项
     * @param {Function} [options.cmp] 自定义比较函数
     * @param {Function} [options.key] 用于排序的键函数
     * @param {boolean} [options.reverse=false] 是否降序
     */
    排序(options: { cmp?: (a: any, b: any) => number, key?: (item: any) => any, reverse?: boolean } = {}): void {
        const { cmp, key, reverse = false } = options;
        this.val.sort((a, b) => {
            const valueA = key ? key(a) : a;
            const valueB = key ? key(b) : b;
            return cmp ? cmp(valueA, valueB) : (valueA > valueB ? 1 : -1);
        });
        if (reverse) {
            this.val.reverse();
        }
    }

    /**
     * 从大到小排序
     * @param {number} [下标=0] 键值下标
     */
    从大到小(下标: number = 0): void {
        this.排序({ reverse: true, key: (d) => this._func_key(d, 下标) });
    }

    /**
     * 从小到大排序
     * @param {number} [下标=0] 键值下标
     */
    从小到大(下标: number = 0): void {
        this.排序({ reverse: false, key: (d) => this._func_key(d, 下标) });
    }

    /**
     * 获取所有成员
     * @returns {any[]} 成员数组
     */
    取所有成员(): any[] {
        return this.val;
    }

    /**
     * 清空数组
     */
    清空(): void {
        this.val = [];
    }

    /**
     * 辅助函数: 获取键值
     * @param {any} d 数据
     * @param {number} 下标 键值下标
     * @returns {any} 键值
     */
    private _func_key(d: any, 下标: number): any {
        if (Array.isArray(d) && 下标 < d.length) {
            return d[下标];
        }
        return d;
    }
}

export default 数组;