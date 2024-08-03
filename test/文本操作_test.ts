import { expect, assert } from 'chai';
import { describe, it } from 'mocha';
// @ts-ignore
import * as 文本操作 from "../src/文本操作.ts"; // Assuming 文本操作.ts exports the functions

describe('测试文本处理函数', () => {
    it('取文本长度', () => {
        expect(文本操作.取文本长度("Hello")).to.equal(5);
    });

    it('取文本左边', () => {
        expect(文本操作.取文本左边("Hello", 2)).to.equal("He");
    });

    it('取文本右边', () => {
        expect(文本操作.取文本右边("Hello", 2)).to.equal("lo");
    });

    it('取文本中间', () => {
        expect(文本操作.取文本中间("123abc123", 3, 3)).to.equal("abc");
    });

    it('字符', () => {
        expect(文本操作.字符(65)).to.equal("A");
    });

    it('取代码', () => {
        expect(文本操作.取代码("A")).to.equal(65);
    });

    it('寻找文本', () => {
        expect(文本操作.寻找文本("Hello World", "World")).to.equal(7);
    });

    it('倒找文本', () => {
        expect(文本操作.倒找文本("Hello World", "l")).to.equal(10);
    });

    it('到大写', () => {
        expect(文本操作.到大写("hello")).to.equal("HELLO");
    });

    it('到小写', () => {
        expect(文本操作.到小写("HELLO")).to.equal("hello");
    });

    it('到全角', () => {
        expect(文本操作.到全角("Hello")).to.equal("Ｈｅｌｌｏ");
    });

    it('到半角', () => {
        expect(文本操作.到半角("Ｈｅｌｌｏ")).to.equal("Hello");
    });

    it('删首空', () => {
        expect(文本操作.删首空("  Hello")).to.equal("Hello");
    });

    it('删尾空', () => {
        expect(文本操作.删尾空("Hello  ")).to.equal("Hello");
    });

    it('删首尾空', () => {
        expect(文本操作.删首尾空("  Hello  ")).to.equal("Hello");
    });

    it('删全部空', () => {
        expect(文本操作.删全部空("H e l l o")).to.equal("Hello");
    });

    it('子文本替换', () => {
        expect(文本操作.子文本替换("Hello World", "World", "Everyone")).to.equal("Hello Everyone");
    });

    it('取空白文本', () => {
        expect(文本操作.取空白文本(3)).to.equal("   ");
    });

    it('取重复文本', () => {
        expect(文本操作.取重复文本(3, "Hi")).to.equal("HiHiHi");
    });

    it('分割文本', () => {
        expect(文本操作.分割文本("a,b,c", ",")).to.deep.equal(["a", "b", "c"]);
    });
});
