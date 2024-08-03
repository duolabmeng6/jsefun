// regexUtils.ts

/**
 * 正则匹配模式
 */
export enum 正则 {
    只匹配ASCII = 'a',
    忽略大小写 = 'i',
    语言依赖 = 'l',
    多行模式 = 'm',
    点dot匹配全部字符 = 's',
    允许注释 = 'x'
}

/**
 * 正则表达式类
 */
export class 正则表达式 {
    private prog: RegExp;
    private res: RegExpMatchArray | null = null;

    /**
     * 构造函数
     * @param 正则表达式文本 - 正则表达式字符串
     * @param 模式 - 正则匹配模式
     */
    constructor(正则表达式文本: string = "", 模式: string = `${正则.忽略大小写}${正则.多行模式}`) {
        this.创建(正则表达式文本, 模式);
    }

    /**
     * 创建正则表达式
     * @param 正则表达式文本 - 正则表达式字符串
     * @param 模式 - 正则匹配模式
     * @returns {正则表达式}
     */
    创建(正则表达式文本: string, 模式: string = `${正则.忽略大小写}${正则.多行模式}`): 正则表达式 {
        this.prog = new RegExp(正则表达式文本, 模式);
        return this;
    }

    /**
     * 搜索匹配内容
     * @param 内容 - 要搜索的文本
     * @returns {string[]}
     */
    搜索(内容: string): string[] {
        this.res = 内容.match(this.prog);
        return this.res || [];
    }

    /**
     * 替换匹配内容
     * @param 用作替换的文本 - 替换文本
     * @param 内容 - 原始文本
     * @returns {string}
     */
    替换(用作替换的文本: string, 内容: string = ""): string {
        return 内容.replace(this.prog, 用作替换的文本);
    }
}

/**
 * 兼容旧版本的正则表达式类
 */
export class 正则表达式类 {
    private prog: RegExp;
    private res: RegExpMatchArray | null = null;
    private 被搜索的文本: string;

    /**
     * 构造函数
     * @param 正则表达式文本 - 正则表达式字符串
     * @param 被搜索的文本 - 要搜索的文本
     * @param 是否区分大小写 - 是否区分大小写
     * @param 是否匹配多行 - 是否匹配多行
     */
    constructor(正则表达式文本: string = "", 被搜索的文本: string = "", 是否区分大小写: boolean = false, 是否匹配多行: boolean = true) {
        this.创建(正则表达式文本, 被搜索的文本, 是否区分大小写, 是否匹配多行);
    }

    /**
     * 创建正则表达式
     * @param 正则表达式文本 - 正则表达式字符串
     * @param 被搜索的文本 - 要搜索的文本
     * @param 是否区分大小写 - 是否区分大小写
     * @param 是否匹配多行 - 是否匹配多行
     * @returns {正则表达式类}
     */
    创建(正则表达式文本: string, 被搜索的文本: string = "", 是否区分大小写: boolean = false, 是否匹配多行: boolean = true): 正则表达式类 {
        let 模式 = "";
        if (!是否区分大小写) {
            模式 += 'i';
        }
        if (是否匹配多行) {
            模式 += 'm';
        }

        this.prog = new RegExp(正则表达式文本, 模式);
        this.匹配(被搜索的文本);

        return this;
    }

    /**
     * 匹配文本
     * @param 被搜索的文本 - 要搜索的文本
     * @param 模式 - 正则匹配模式
     * @returns {正则表达式类}
     */
    匹配(被搜索的文本: string, 模式: string = ""): 正则表达式类 {
        this.被搜索的文本 = 被搜索的文本;
        this.res = this.prog.exec(被搜索的文本);
        return this;
    }

    /**
     * 获取匹配数量
     * @returns {number}
     */
    取匹配数量(): number {
        return this.res ? this.res.length : 0;
    }

    /**
     * 获取匹配文本
     * @param 匹配索引 - 匹配的索引
     * @returns {string}
     */
    取匹配文本(匹配索引: number): string {
        return this.res ? this.res[匹配索引] : "";
    }

    /**
     * 获取子匹配文本
     * @param 匹配索引 - 匹配的索引
     * @param 子表达式索引 - 子表达式的索引
     * @returns {string}
     */
    取子匹配文本(匹配索引: number, 子表达式索引: number): string {
        if (this.res && this.res[匹配索引]) {
            const match = this.res[匹配索引].match(new RegExp(this.prog.source));
            if (match && match[子表达式索引]) {
                return match[子表达式索引];
            }
        }
        return "";
    }

    /**
     * 获取子匹配数量
     * @returns {number}
     */
    取子匹配数量(): number {
        return this.res ? this.res.length : 0;
    }

    /**
     * 获取匹配结果
     * @returns {string[]}
     */
    取结果(): string[] {
        return this.res || [];
    }

    /**
     * 替换匹配内容
     * @param 用作替换的文本 - 替换文本
     * @param 被搜索的文本 - 原始文本
     * @returns {string}
     */
    替换(用作替换的文本: string, 被搜索的文本: string = ""): string {
        return 被搜索的文本.replace(this.prog, 用作替换的文本);
    }
}
