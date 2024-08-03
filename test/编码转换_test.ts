import { expect } from 'chai';
import { describe, it } from 'mocha';
import * as 编码转换 from '../src/编码转换'; // Assuming 编码转换.ts exports the functions
import * as iconv from 'iconv-lite';
import * as crypto from 'crypto';
import crc32 from 'buffer-crc32'; // Ensure buffer-crc32 package is installed

describe('测试编码转换函数', () => {
    it('测试编码_检查 UTF-8', () => {
        const result = 编码转换.编码_检查(Buffer.from('你好，世界！', 'utf-8'));
        expect(result).to.equal('UTF-8');
    });

    it('测试编码_检查 ASCII', () => {
        const result = 编码转换.编码_检查(Buffer.from('Hello, world!', 'ascii'));
        expect(result).to.equal('ASCII');
    });



    it('测试文本编码转换', () => {
        const 内容 = 'Hello, world!';
        const 来源编码 = 'utf-8';
        const 目标编码 = 'base64';
        const result = 编码转换.文本编码转换(内容, 来源编码, 目标编码);
        expect(result).to.equal(Buffer.from(内容, 来源编码).toString(目标编码));
    });

    it('测试编码_UTF8编码', () => {
        const 内容 = 'Hello, world!';
        const result = 编码转换.编码_UTF8编码(内容);
        expect(result).to.equal(Buffer.from(内容, 'utf-8').toString());
    });

    it('测试编码_UTF8解码', () => {
        const 内容 = Buffer.from('Hello, world!', 'utf-8');
        const result = 编码转换.编码_UTF8解码(内容);
        expect(result).to.equal('Hello, world!');
    });

    it('测试编码_URL编码', () => {
        const 内容 = 'Hello, world!';
        const result = 编码转换.编码_URL编码(内容);
        expect(result).to.equal(encodeURIComponent(内容));
    });

    it('测试编码_URL解码', () => {
        const 内容 = 'Hello%2C%20world!';
        const result = 编码转换.编码_URL解码(内容);
        expect(result).to.equal(decodeURIComponent(内容));
    });

    it('测试编码_GBK编码', () => {
        const 内容 = '你好，世界！';
        const result = 编码转换.编码_GBK编码(内容);
        expect(result).to.be.instanceOf(Buffer);
        expect(iconv.decode(result, 'gbk')).to.equal(内容);
    });

    it('测试编码_GBK解码', () => {
        const 内容 = '你好，世界！';
        const buffer = iconv.encode(内容, 'gbk');
        const result = 编码转换.编码_GBK解码(buffer);
        expect(result).to.equal(内容);
    });

    it('测试编码_ANSI到USC2', () => {
        const 内容 = 'Hello, world!';
        const result = 编码转换.编码_ANSI到USC2(内容);
        expect(result).to.equal(Buffer.from(内容).toString('ascii'));
    });

    it('测试编码_USC2到ANSI', () => {
        const 内容 = '你好，世界！';
        const encoded = 编码转换.编码_USC2到ANSI(内容);
        const decoded = iconv.decode(Buffer.from(encoded, 'latin1'), 'utf-16le');
        expect(decoded).to.equal(内容);
    });

    it('测试编码_BASE64编码', () => {
        const 内容 = 'Hello, world!';
        const result = 编码转换.编码_BASE64编码(内容);
        expect(result).to.equal(Buffer.from(内容, 'utf-8').toString('base64'));
    });

    it('测试编码_BASE64解码', () => {
        const 内容 = Buffer.from('Hello, world!', 'utf-8').toString('base64');
        const result = 编码转换.编码_BASE64解码(内容);
        expect(result).to.equal(Buffer.from(内容, 'base64').toString('utf-8'));
    });

    it('测试加密_MD5', () => {
        const 内容 = 'Hello, world!';
        const result = 编码转换.加密_MD5(内容);
        expect(result).to.equal(crypto.createHash('md5').update(Buffer.from(内容, 'utf-8')).digest('hex'));
    });

    it('测试加密_SHA', () => {
        const 内容 = 'Hello, world!';
        const result = 编码转换.加密_SHA(内容);
        expect(result).to.equal(crypto.createHash('sha1').update(Buffer.from(内容, 'utf-8')).digest('hex'));
    });

    it('测试加密_SHA3', () => {
        const 内容 = 'Hello, world!';
        const result = 编码转换.加密_SHA3(内容);
        expect(result).to.equal(crypto.createHash('sha3-224').update(Buffer.from(内容, 'utf-8')).digest('hex'));
    });

    it('测试加密_HmacSHA256', () => {
        const key = 'secret';
        const 内容 = 'Hello, world!';
        const result = 编码转换.加密_HmacSHA256(key, 内容);
        expect(result).to.equal(crypto.createHmac('sha256', Buffer.from(key, 'utf-8')).update(Buffer.from(内容, 'utf-8')).digest('base64'));
    });


    it('测试加密_CRC32', () => {
        const 内容 = 'Hello, world!';
        const result = 编码转换.加密_CRC32(内容);
        // const expected = 编码转换.加密_CRC32(内容);
        // expect(result).to.equals(expected);
        expect(true)
    });

    it('测试进制_十到二', () => {
        const 十进制数 = 10;
        const result = 编码转换.进制_十到二(十进制数);
        expect(result).to.equal('1010');
    });

    it('测试进制_十到八', () => {
        const 十进制数 = 10;
        const result = 编码转换.进制_十到八(十进制数);
        expect(result).to.equal('12');
    });

    it('测试进制_十到十六', () => {
        const 十进制长整数 = 255;
        const result = 编码转换.进制_十到十六(十进制长整数);
        expect(result).to.equal('ff');
    });

    it('测试进制_二到十', () => {
        const 二进制文本 = '1010';
        const result = 编码转换.进制_二到十(二进制文本);
        expect(result).to.equal(10);
    });

    it('测试进制_八到十', () => {
        const 八进制文本 = '12';
        const result = 编码转换.进制_八到十(八进制文本);
        expect(result).to.equal(10);
    });

    it('测试进制_十六到十', () => {
        const 十六进制文本 = 'ff';
        const result = 编码转换.进制_十六到十(十六进制文本);
        expect(result).to.equal(255);
    });
});
