import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import { 到文本, 到字节集, 到数值, 到整数, 到时间, json到文本, json解析 } from '../src/类型转换';

describe('类型转换功能测试', () => {
    it('应正确将字节数组转换为文本', () => {
        const 字节集 = new TextEncoder().encode('测试');
        const 文本 = 到文本(字节集);
        expect(文本).to.equal('测试');
    });

    it('应正确将文本转换为字节数组', () => {
        const 文本 = '测试';
        const 字节集 = 到字节集(文本);
        expect(new TextDecoder().decode(字节集)).to.equal(文本);
    });

    it('应正确将任意值转换为数值', () => {
        expect(到数值('123.45')).to.equal(123.45);
        expect(到数值(123)).to.equal(123);
    });

    it('应正确将任意值转换为整数', () => {
        expect(到整数('123.45')).to.equal(123);
        expect(到整数(123.99)).to.equal(123);
    });

    it('应正确将字符串转换为日期时间对象', () => {
        const 日期时间 = 到时间('2024-08-03T12:00:00Z');
        expect(日期时间.到文本("YYYY-MM-DD HH:mm:ss")).to.equal('2024-08-03 20:00:00');
    });

    it('应正确将对象转换为 JSON 字符串', () => {
        const 对象 = { 测试: 123 };
        const json文本 = json到文本(对象);
        expect(json文本).to.equal('{"测试":123}');
    });

    it('应正确解析 JSON 字符串为对象', () => {
        const json文本 = '{"测试":123}';
        const 对象 = json解析(json文本);
        expect(对象).to.deep.equal({ 测试: 123 });
    });
});
