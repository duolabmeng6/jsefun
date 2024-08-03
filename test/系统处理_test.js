import { expect } from 'chai';
import * as system from '../src/系统处理';

describe('系统处理测试', () => {


    it('系统_是否为window系统', () => {
        const 是否为Windows = system.系统_是否为window系统();
        const 实际结果 = process.platform === 'win32';
        expect(是否为Windows).to.equal(实际结果);
    });

    it('系统_是否为linux系统', () => {
        const 是否为Linux = system.系统_是否为linux系统();
        const 实际结果 = process.platform === 'linux';
        expect(是否为Linux).to.equal(实际结果);
    });

    it('系统_是否为mac系统', () => {
        const 是否为Mac = system.系统_是否为mac系统();
        const 实际结果 = process.platform === 'darwin';
        expect(是否为Mac).to.equal(实际结果);
    });

    it('延时', async () => {
        const 开始时间 = Date.now();
        await system.延时(1);
        const 结束时间 = Date.now();
        expect(结束时间 - 开始时间).to.be.gte(1000);
    });

    it('运行', () => {
        const 输出 = system.运行('echo "测试成功"');
        expect(输出).to.include('测试成功');
    });

});
