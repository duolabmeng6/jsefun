// testRegexUtils.ts
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { 正则, 正则表达式, 正则表达式类 } from '../src/核心易函数支持库/正则表达式';

describe('正则表达式类测试', () => {
    it('正则表达式: 应该搜索匹配内容', () => {
        const regex = new 正则表达式("\\d+", `${正则.多行模式}${正则.忽略大小写}`);
        const result = regex.搜索("123456789");
        expect(result).to.deep.equal(["123456789"]);
    });

    it('正则表达式: 应该替换匹配内容', () => {
        const regex = new 正则表达式("\\d+", `${正则.多行模式}${正则.忽略大小写}`);
        const result = regex.替换("替换", "123456789");
        expect(result).to.equal("替换");
    });

    it('正则表达式类: 应该创建正则表达式并匹配内容', () => {
        const regex = new 正则表达式类("\\d+", "123456789", true, true);
        expect(regex.取匹配数量()).to.equal(1);
        expect(regex.取匹配文本(0)).to.equal("123456789");
    });

    it('正则表达式类: 应该替换匹配内容', () => {
        const regex = new 正则表达式类("\\d+", "123456789", true, true);
        const result = regex.替换("替换", "123456789");
        expect(result).to.equal("替换");
    });

    it('正则表达式类: 应该获取子匹配文本', () => {
        const regex = new 正则表达式类("(\\d+)-(\\d+)", "123-456", true, true);
        expect(regex.取子匹配数量()).to.equal(3);
        expect(regex.取子匹配文本(0, 1)).to.equal("123");
        expect(regex.取子匹配文本(0, 2)).to.equal("456");
    });
});
