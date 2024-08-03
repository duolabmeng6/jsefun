import { expect } from 'chai';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { setTimeout, clearTimeout } from 'timers';
import { 时钟, 时钟周期事件 } from '../src/核心支持库/时钟';

describe('时钟模块测试', () => {
    let 定时任务2运行状态: boolean = true;

    beforeEach(() => {
        定时任务2运行状态 = true;
    });

    afterEach(() => {
        // 清理所有定时器
    });

    it('定时任务应该被调用一次并停止', (done) => {
        let callCount = 0;
        const 定时任务 = () => {
            callCount++;
            if (callCount === 1) {
                expect(callCount).to.equal(1);
                done();
                return false;
            }
            return true;
        };

        时钟(定时任务, 500);
    });

    it('定时任务2应该按预期运行', (done) => {
        const 定时任务2 = () => {
            expect(定时任务2运行状态).to.be.true;
            定时任务2运行状态 = false;
            done();
            return false;
        };

        时钟(定时任务2, 500);
    });

    it('装饰器应该正确应用', (done) => {
        let callCount = 0;

        class TestClass {
            @时钟周期事件({ 时钟周期: 500 })
            fc3() {
                callCount++;
                if (callCount === 2) {
                    expect(callCount).to.equal(2);
                    done();
                    return false;
                }
                return true;
            }
        }

        const testInstance = new TestClass();
        testInstance.fc3();
    });
});
