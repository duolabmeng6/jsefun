/**
 * 获取文本长度
 * @param 文本数据 - 需要检查长度的文本数据
 * @returns 文本的长度
 */
function 取文本长度(文本数据: string): number {
    return 文本数据.length;
}

/**
 * 从文本的左边返回指定数量的字符
 * @param 欲取其部分的文本 - 文本数据
 * @param 欲取出字符的数目 - 需要获取的字符数量
 * @returns 指定数量的字符
 */
function 取文本左边(欲取其部分的文本: string, 欲取出字符的数目: number): string {
    if (取文本长度(欲取其部分的文本) < 欲取出字符的数目) {
        欲取出字符的数目 = 取文本长度(欲取其部分的文本);
    }
    return 欲取其部分的文本.slice(0, 欲取出字符的数目);
}

/**
 * 从文本的右边返回指定数量的字符
 * @param 欲取其部分的文本 - 文本数据
 * @param 欲取出字符的数目 - 需要获取的字符数量
 * @returns 指定数量的字符
 */
function 取文本右边(欲取其部分的文本: string, 欲取出字符的数目: number): string {
    const l = 取文本长度(欲取其部分的文本);
    let lpos = l - 欲取出字符的数目;
    if (lpos < 0) {
        lpos = 0;
    }
    return 欲取其部分的文本.slice(lpos, l);
}

/**
 * 返回指定文本中从指定位置算起指定数量的字符
 * @param 欲取其部分的文本 - 文本数据
 * @param 起始取出位置 - 起始位置（从1开始）
 * @param 欲取出字符的数目 - 需要获取的字符数量
 * @returns 指定数量的字符
 */
function 取文本中间(欲取其部分的文本: string, 起始取出位置: number, 欲取出字符的数目: number): string {
    欲取出字符的数目 = 起始取出位置 + 欲取出字符的数目;
    if (取文本长度(欲取其部分的文本) < 欲取出字符的数目) {
        欲取出字符的数目 = 取文本长度(欲取其部分的文本);
    }
    return 欲取其部分的文本.slice(起始取出位置 , 欲取出字符的数目);
}

/**
 * 返回与指定字符代码相关的字符
 * @param 字节型 - 字节型数据
 * @returns 字符
 */
function 字符(字节型: number): string {
    return String.fromCharCode(字节型);
}

/**
 * 返回文本中指定位置处字符的代码
 * @param 欲取字符代码的文本 - 文本数据
 * @returns 指定位置处字符的代码
 */
function 取代码(欲取字符代码的文本: string): number {
    for (const item of 欲取字符代码的文本) {
        return item.charCodeAt(0);
    }
    return 0;
}

/**
 * 返回一个整数值，指定文本在另一文本中最先出现的位置
 * @param 被搜寻的文本 - 被搜寻的文本
 * @param 欲寻找的文本 - 欲寻找的文本
 * @param 起始搜寻位置 - 起始位置（从1开始）
 * @param 结束位置 - 结束位置
 * @returns 最先出现的位置
 */
function 寻找文本(被搜寻的文本: string, 欲寻找的文本: string, 起始搜寻位置?: number, 结束位置?: number): number {
    try {
        const result = 被搜寻的文本.indexOf(欲寻找的文本, 起始搜寻位置);
        return result !== -1 ? result + 1 : -1;
    } catch {
        return -1;
    }
}

/**
 * 返回一个整数值，指定文本在另一文本中最先出现的位置
 * @param 被搜寻的文本 - 被搜寻的文本
 * @param 欲寻找的文本 - 欲寻找的文本
 * @param 起始搜寻位置 - 起始位置（从1开始）
 * @param 结束位置 - 结束位置
 * @returns 最先出现的位置
 */
function 倒找文本(被搜寻的文本: string, 欲寻找的文本: string, 起始搜寻位置?: number, 结束位置?: number): number {
    const result = 被搜寻的文本.lastIndexOf(欲寻找的文本, 起始搜寻位置);
    return result !== -1 ? result + 1 : -1;
}

/**
 * 将文本中的小写英文字母变换为大写
 * @param 欲变换的文本 - 需要变换的文本
 * @returns 变换后的结果文本
 */
function 到大写(欲变换的文本: string): string {
    return 欲变换的文本.toUpperCase();
}

/**
 * 将文本中的大写英文字母变换为小写
 * @param 欲变换的文本 - 需要变换的文本
 * @returns 变换后的结果文本
 */
function 到小写(欲变换的文本: string): string {
    return 欲变换的文本.toLowerCase();
}

/**
 * 将半角字符变为全角字符
 * @param 欲变换的文本 - 需要变换的文本
 * @returns 变换后的全角字符文本
 */
function 到全角(欲变换的文本: string): string {
    let rstring = "";
    for (const uchar of 欲变换的文本) {
        let inside_code = uchar.charCodeAt(0);
        if (inside_code === 32) {
            inside_code = 12288;
        } else if (inside_code >= 32 && inside_code <= 126) {
            inside_code += 65248;
        }
        rstring += String.fromCharCode(inside_code);
    }
    return rstring;
}

/**
 * 将全角字符变为半角字符
 * @param 欲变换的文本 - 需要变换的文本
 * @returns 变换后的半角字符文本
 */
function 到半角(欲变换的文本: string): string {
    const ss: string[] = [];
    for (const s of 欲变换的文本) {
        let rstring = "";
        for (const uchar of s) {
            let inside_code = uchar.charCodeAt(0);
            if (inside_code === 12288) {
                inside_code = 32;
            } else if (inside_code >= 65281 && inside_code <= 65374) {
                inside_code -= 65248;
            }
            rstring += String.fromCharCode(inside_code);
        }
        ss.push(rstring);
    }
    return ss.join('');
}

/**
 * 删除文本首部的全角或半角空格
 * @param 欲删除空格的文本 - 需要删除空格的文本
 * @returns 删除空格后的文本
 */
function 删首空(欲删除空格的文本: string): string {
    return 欲删除空格的文本.trimStart();
}

/**
 * 删除文本尾部的全角或半角空格
 * @param 欲删除空格的文本 - 需要删除空格的文本
 * @returns 删除空格后的文本
 */
function 删尾空(欲删除空格的文本: string): string {
    return 欲删除空格的文本.trimEnd();
}

/**
 * 删除文本首尾的全角或半角空格
 * @param 欲删除空格的文本 - 需要删除空格的文本
 * @returns 删除空格后的文本
 */
function 删首尾空(欲删除空格的文本: string): string {
    return 欲删除空格的文本.trim();
}

/**
 * 删除文本中的所有空格
 * @param 欲删除空格的文本 - 需要删除空格的文本
 * @returns 删除空格后的文本
 */
function 删全部空(欲删除空格的文本: string): string {
    return 欲删除空格的文本.replace(/ /g, "");
}

/**
 * 将指定的子文本替换为另一个子文本
 * @param 欲被替换的文本 - 需要替换的文本
 * @param 欲被替换的子文本 - 需要替换的子文本
 * @param 用作替换的子文本 - 用作替换的子文本
 * @param 替换进行的次数 - 替换的次数
 * @returns 替换后的文本
 */
function 子文本替换(欲被替换的文本: string, 欲被替换的子文本: string, 用作替换的子文本: string, 替换进行的次数: number = -1): string {
    if (欲被替换的子文本 === "") {
        return 欲被替换的文本;
    }
    return 欲被替换的文本.split(欲被替换的子文本).join(用作替换的子文本);
}

/**
 * 返回具有指定数目半角空格的文本
 * @param 重复次数 - 重复次数
 * @returns 指定数目半角空格的文本
 */
function 取空白文本(重复次数: number): string {
    return 取重复文本(重复次数, " ");
}

/**
 * 返回指定次数的文本重复结果
 * @param 重复次数 - 重复次数
 * @param 待重复文本 - 待重复的文本
 * @returns 指定次数的文本重复结果
 */
function 取重复文本(重复次数: number, 待重复文本: string): string {
    let str = "";
    for (let i = 0; i < 重复次数; i++) {
        str += 待重复文本;
    }
    return str;
}

/**
 * 将指定文本进行分割，返回分割后的一维文本数组
 * @param 待分割文本 - 待分割文本
 * @param 用作分割的文本 - 用作分割的文本
 * @param 要返回的子文本数目 - 要返回的子文本数目
 * @returns 分割后的一维文本数组
 */
function 分割文本(待分割文本: string, 用作分割的文本: string = ",", 要返回的子文本数目: number = -1): string[] {
    return 待分割文本.split(用作分割的文本, 要返回的子文本数目);
}

export {
    取文本长度,
    取文本左边,
    取文本右边,
    取文本中间,
    字符,
    取代码,
    寻找文本,
    倒找文本,
    到大写,
    到小写,
    到全角,
    到半角,
    删首空,
    删尾空,
    删首尾空,
    删全部空,
    子文本替换,
    取空白文本,
    取重复文本,
    分割文本
};
