import * as chardet from 'chardet';
import * as crypto from 'crypto';
import * as iconv from 'iconv-lite';
import crc32 from 'buffer-crc32';


/**
 * 检测文件编码
 * @param {Buffer} bytes - 文件的字节数组
 * @returns {string} 文件编码
 */
function 编码_检查(bytes: Buffer): string {
    const detector = chardet.detect(bytes);
    if (!detector) {
        return 'unknown';
    }
    return detector;
}

/**
 * 文本编码转换
 * @param {string} 内容 - 要转换的文本
 * @param {string} 来源编码 - 源编码
 * @param {string} 目标编码 - 目标编码
 * @returns {string} 转换后的文本
 */
function 文本编码转换(内容: string, 来源编码: string, 目标编码: string): string {
    if (来源编码 === "") {
        来源编码 = 编码_检查(Buffer.from(内容, 'utf-8'));
        if (来源编码 === 目标编码) {
            return 内容;
        }
        if (!(来源编码 === "gbk" || 来源编码 === "utf-8" || 来源编码 === "GB2312")) {
            return 内容;
        }
    }
    // @ts-ignore
    const buffer = Buffer.from(内容, 来源编码);
    // @ts-ignore
    return buffer.toString(目标编码);
}

/**
 * UTF-8 编码
 * @param {string} 内容 - 要编码的文本
 * @returns {string} 编码后的文本
 */
function 编码_UTF8编码(内容: string): string {
    return Buffer.from(内容, 'utf-8').toString();
}

/**
 * UTF-8 解码
 * @param {string} 内容 - 要解码的文本
 * @returns {string} 解码后的文本
 */
function 编码_UTF8解码(内容: Buffer): string {
    return 内容.toString('utf-8');
}

/**
 * URL 编码
 * @param {string} 内容 - 要编码的文本
 * @returns {string} 编码后的文本
 */
function 编码_URL编码(内容: string): string {
    return encodeURIComponent(内容);
}

/**
 * URL 解码
 * @param {string} 内容 - 要解码的文本
 * @returns {string} 解码后的文本
 */
function 编码_URL解码(内容: string): string {
    return decodeURIComponent(内容);
}

/**
 * GBK 编码
 * @param {string} 内容 - 要编码的文本
 * @returns {string} 编码后的文本
 */
function 编码_GBK编码(内容: string): Buffer {
    return iconv.encode(内容, 'gbk');
}

/**
 * GBK 解码
 * @param {Buffer} 内容 - 要解码的文本
 * @returns {string} 解码后的文本
 */
function 编码_GBK解码(内容: Buffer): string {
    return iconv.decode(内容, 'gbk');
}

/**
 * ANSI 到 USC2 编码
 * @param {string} 内容 - 要编码的文本
 * @returns {string} 编码后的文本
 */
function 编码_ANSI到USC2(内容: string): string {
    return Buffer.from(内容).toString('ascii');
}

/**
 * USC2 到 ANSI 编码
 * @param {string} 内容 - 要解码的文本
 * @returns {string} 解码后的文本
 */
function 编码_USC2到ANSI(内容: string): string {
    const buffer = iconv.encode(内容, 'utf-16le'); // USC2 is essentially UTF-16LE
    return iconv.decode(buffer, 'latin1'); // ANSI can be approximated with latin1
}

/**
 * BASE64 编码
 * @param {string|Buffer} 内容 - 要编码的内容（文本或字节数组）
 * @returns {string} 编码后的文本
 */
function 编码_BASE64编码(内容: string | Buffer): string {
    if (typeof 内容 === 'string') {
        return Buffer.from(内容, 'utf-8').toString('base64');
    } else {
        return 内容.toString('base64');
    }
}

/**
 * BASE64 解码
 * @param {string} 内容 - 要解码的内容
 * @param {boolean} [返回字节集=false] - 是否返回字节数组
 * @returns {string|Buffer} 解码后的内容
 */
function 编码_BASE64解码(内容: string, 返回字节集: boolean = false): string | Buffer {
    const buffer = Buffer.from(内容, 'base64');
    if (返回字节集) {
        return buffer;
    } else {
        return buffer.toString('utf-8');
    }
}

/**
 * MD5 加密
 * @param {string} 内容 - 要加密的内容
 * @param {string} [编码='utf-8'] - 编码方式
 * @returns {string} 加密后的内容
 */
function 加密_MD5(内容: string, 编码: string = 'utf-8'): string {
    // @ts-ignore
    const md5 = crypto.createHash('md5');
    // @ts-ignore
    md5.update(Buffer.from(内容, 编码));
    // @ts-ignore
    return md5.digest('hex');
}

/**
 * SHA 加密
 * @param {string} 内容 - 要加密的内容
 * @param {number} [方式=0] - 加密方式：0.SHA1 1.SHA224 2.SHA256 3.SHA384 4.SHA512
 * @returns {string} 加密后的内容
 */
function 加密_SHA(内容: string, 方式: number = 0): string {
    const 字典 = [
        'sha1',
        'sha224',
        'sha256',
        'sha384',
        'sha512'
    ];
    const sha = crypto.createHash(字典[方式]);
    sha.update(Buffer.from(内容, 'utf-8'));
    return sha.digest('hex');
}

/**
 * SHA3 加密
 * @param {string} 内容 - 要加密的内容
 * @param {number} [方式=0] - 加密方式：0.SHA224 1.SHA256 2.SHA384 3.SHA512
 * @returns {string} 加密后的内容
 */
function 加密_SHA3(内容: string, 方式: number = 0): string {
    const 字典 = [
        'sha3-224',
        'sha3-256',
        'sha3-384',
        'sha3-512'
    ];
    const sha = crypto.createHash(字典[方式]);
    sha.update(Buffer.from(内容, 'utf-8'));
    return sha.digest('hex');
}

/**
 * HMAC-SHA256 加密
 * @param {string} key - 加密密钥
 * @param {string} 内容 - 要加密的内容
 * @returns {string} 加密后的内容
 */
function 加密_HmacSHA256(key: string, 内容: string): string {
    const hmac = crypto.createHmac('sha256', Buffer.from(key, 'utf-8'));
    hmac.update(Buffer.from(内容, 'utf-8'));
    return hmac.digest('base64');
}

/**
 * CRC32 加密
 * @param {string} 内容 - 要加密的内容
 * @returns {number} 加密后的内容
 */
function 加密_CRC32(内容: string): Buffer {
    return crc32(内容);
}

/**
 * 将十进制转换成二进制
 * @param {number} 十进制数 - 十进制数
 * @returns {string} 二进制表示
 */
function 进制_十到二(十进制数: number): string {
    return 十进制数.toString(2);
}

/**
 * 将十进制转换成八进制
 * @param {number} 十进制数 - 十进制数
 * @returns {string} 八进制表示
 */
function 进制_十到八(十进制数: number): string {
    return 十进制数.toString(8);
}

/**
 * 将十进制转换成十六进制
 * @param {number} 十进制长整数 - 十进制长整数
 * @returns {string} 十六进制表示
 */
function 进制_十到十六(十进制长整数: number): string {
    return 十进制长整数.toString(16);
}

/**
 * 将二进制转换成十进制
 * @param {string} 二进制文本 - 二进制文本
 * @returns {number} 十进制表示
 */
function 进制_二到十(二进制文本: string): number {
    return parseInt(二进制文本, 2);
}

/**
 * 将八进制转换成十进制
 * @param {string} 八进制文本 - 八进制文本
 * @returns {number} 十进制表示
 */
function 进制_八到十(八进制文本: string): number {
    return parseInt(八进制文本, 8);
}

/**
 * 将十六进制转换成十进制
 * @param {string} 十六进制文本 - 十六进制文本
 * @returns {number} 十进制表示
 */
function 进制_十六到十(十六进制文本: string): number {
    return parseInt(十六进制文本, 16);
}
//导出这个文件的所有函数
export {
    编码_检查,
    文本编码转换,
    编码_UTF8编码,
    编码_UTF8解码,
    编码_URL编码,
    编码_URL解码,
    编码_GBK编码,
    编码_GBK解码,
    编码_ANSI到USC2,
    编码_USC2到ANSI,
    编码_BASE64编码,
    编码_BASE64解码,
    加密_MD5,
    加密_SHA,
    加密_SHA3,
    加密_HmacSHA256,
    加密_CRC32,
    进制_十到二,
    进制_十到八,
    进制_十到十六,
    进制_二到十,
    进制_八到十,
    进制_十六到十
}




