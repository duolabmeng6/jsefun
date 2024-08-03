import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import * as 算术运算 from '../src/算术运算';

describe('算术运算库', () => {


    it('四舍五入', () => {
        expect(算术运算.四舍五入(1056.65, 1)).to.equal(1056.7);
        expect(算术运算.四舍五入(1056.65, 0)).to.equal(1057);
        expect(算术运算.四舍五入(1056.65, -1)).to.equal(1060);
    });

    it('取绝对值', () => {
        expect(算术运算.取绝对值(-5.5)).to.equal(5.5);
    });

    it('取整', () => {
        expect(算术运算.取整(-7.8)).to.equal(-8);
    });

    it('求次方', () => {
        expect(算术运算.求次方(2, 3)).to.equal(8);
    });

    it('求平方根', () => {
        expect(算术运算.求平方根(9)).to.equal(3);
    });

    it('求正弦', () => {
        expect(算术运算.求正弦(Math.PI / 2)).to.be.closeTo(1, 0.0001);
    });

    it('求余弦', () => {
        expect(算术运算.求余弦(0)).to.equal(1);
    });

    it('求正切', () => {
        expect(算术运算.求正切(Math.PI / 4)).to.be.closeTo(1, 0.0001);
    });

    it('求反正切', () => {
        expect(算术运算.求反正切(1)).to.be.closeTo(Math.PI / 4, 0.0001);
    });



    it('保留位数', () => {
        expect(算术运算.保留位数(1.12345, 2)).to.equal(1.12);
    });

    it('取最小数', () => {
        expect(算术运算.取最小数(1, 2, 3)).to.equal(1);
    });

    it('取最大数', () => {
        expect(算术运算.取最大数(1, 2, 3)).to.equal(3);
    });

    it('向下取整', () => {
        expect(算术运算.向下取整(1.9)).to.equal(1);
    });

    it('向上取整', () => {
        expect(算术运算.向上取整(1.1)).to.equal(2);
    });

    it('取整数', () => {
        expect(算术运算.取整数('8852791.5')).to.equal(8852791);
    });
});
