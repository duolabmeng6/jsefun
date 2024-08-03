import {expect} from 'chai';
import {describe, it} from 'mocha';
import 数组 from '../src/核心支持库/数组操作'; // Assuming 数组.ts exports the 数组 class

describe('测试数组类', () => {

    it('测试加入成员', () => {
        const arr = new 数组();
        arr.加入成员('测试');
        expect(arr.取所有成员()).to.deep.equal(['测试']);
    });

    it('测试统计成员次数', () => {
        const arr = new 数组(['测试', '测试', '例子']);
        const count = arr.统计成员次数('测试');
        expect(count).to.equal(2);
    });

    it('测试查找成员', () => {
        const arr = new 数组(['测试', '例子']);
        const index = arr.查找成员('例子');
        expect(index).to.equal(1);
    });

    it('测试弹出成员', () => {
        const arr = new 数组(['测试', '例子']);
        const member = arr.弹出成员();
        expect(member).to.equal('例子');
        expect(arr.取所有成员()).to.deep.equal(['测试']);
    });

    it('测试插入成员', () => {
        const arr = new 数组(['测试']);
        arr.插入成员('例子', 0);
        expect(arr.取所有成员()).to.deep.equal(['例子', '测试']);
    });

    it('测试移除成员', () => {
        const arr = new 数组(['测试', '例子']);
        arr.移除成员('测试');
        expect(arr.取所有成员()).to.deep.equal(['例子']);
    });

    it('测试翻转', () => {
        const arr = new 数组(['测试', '例子']);
        arr.翻转();
        expect(arr.取所有成员()).to.deep.equal(['例子', '测试']);
    });

    it('测试排序', () => {
        const arr = new 数组([3, 1, 2]);
        arr.排序();
        expect(arr.取所有成员()).to.deep.equal([1, 2, 3]);
    });

    it('测试从大到小', () => {
        const arr = new 数组([3, 1, 2]);
        arr.从大到小();
        expect(arr.取所有成员()).to.deep.equal([3, 2, 1]);
    });

    it('测试从小到大', () => {
        const arr = new 数组([3, 1, 2]);
        arr.从小到大();
        expect(arr.取所有成员()).to.deep.equal([1, 2, 3]);
    });

    it('测试清空', () => {
        const arr = new 数组(['测试', '例子']);
        arr.清空();
        expect(arr.取所有成员()).to.deep.equal([]);
    });

});
