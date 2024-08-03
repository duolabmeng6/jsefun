import { expect } from 'chai';
import { describe, it } from 'mocha';
import { 日期时间, 取现行时间戳, 日期到时间戳, 取现行时间, 取现行时间2, now, 创建日期时间, 时间迭代 } from '../src/核心支持库/日期时间';

describe('测试日期时间类', () => {
    it('测试初始化', () => {
        const datetime = new 日期时间();
        expect(datetime).to.be.instanceOf(日期时间);
    });

    it('测试到文本', () => {
        const datetime = new 日期时间('2024-08-03 12:34:56');
        const result = datetime.到文本();
        expect(result).to.equal('2024-08-03 12:34:56');
    });

    it('测试取时间戳', () => {
        const datetime = new 日期时间('2024-08-03 12:34:56');
        const timestamp = datetime.取时间戳();
        expect(timestamp).to.be.a('number');
    });

    it('测试取日期', () => {
        const datetime = new 日期时间('2024-08-03 12:34:56');
        const date = datetime.取日期();
        expect(date).to.equal('2024-08-03');
    });

    it('测试取年', () => {
        const datetime = new 日期时间('2024-08-03 12:34:56');
        const year = datetime.取年();
        expect(year).to.equal(2024);
    });

    it('测试取月', () => {
        const datetime = new 日期时间('2024-08-03 12:34:56');
        const month = datetime.取月();
        expect(month).to.equal(8);
    });

    it('测试取日', () => {
        const datetime = new 日期时间('2024-08-03 12:34:56');
        const day = datetime.取日();
        expect(day).to.equal(3);
    });

    it('测试取小时', () => {
        const datetime = new 日期时间('2024-08-03 12:34:56');
        const hour = datetime.取小时();
        expect(hour).to.equal(12);
    });

    it('测试取分钟', () => {
        const datetime = new 日期时间('2024-08-03 12:34:56');
        const minute = datetime.取分钟();
        expect(minute).to.equal(34);
    });

    it('测试取秒', () => {
        const datetime = new 日期时间('2024-08-03 12:34:56');
        const second = datetime.取秒();
        expect(second).to.equal(56);
    });

    it('测试取微秒', () => {
        const datetime = new 日期时间('2024-08-03 12:34:56');
        const microsecond = datetime.取微秒();
        expect(microsecond).to.equal(0);
    });

    it('测试取每周的第几天', () => {
        const datetime = new 日期时间('2024-08-03');
        const dayOfWeek = datetime.取每周的第几天();
        expect(dayOfWeek).to.equal(6); // Saturday
    });

    it('测试取每年的第几天', () => {
        const datetime = new 日期时间('2024-08-03');
        const dayOfYear = datetime.取每年的第几天();
        expect(dayOfYear).to.equal(216);
    });

    it('测试取每月的第几周', () => {
        const datetime = new 日期时间('2024-08-03');
        const weekOfMonth = datetime.取每月的第几周();
        expect(weekOfMonth).to.equal(1);
    });

    it('测试取每年的第几周', () => {
        const datetime = new 日期时间('2024-08-03');
        const weekOfYear = datetime.取每年的第几周();
        expect(weekOfYear).to.equal(30);
    });

    it('测试取月天数', () => {
        const datetime = new 日期时间('2024-08-03');
        const daysInMonth = datetime.取月天数();
        expect(daysInMonth).to.equal(31);
    });

    it('测试设置年月日', () => {
        const datetime = new 日期时间('2024-08-03 12:34:56');
        datetime.设置年月日(2025, 9, 4);
        expect(datetime.取日期()).to.equal('2025-09-04');
    });

    it('测试设置时分秒', () => {
        const datetime = new 日期时间('2024-08-03 12:34:56');
        datetime.设置时分秒(14, 36, 58);
        expect(datetime.到文本()).to.equal('2024-08-03 14:36:58');
    });

    it('测试增减日期时间', () => {
        const datetime = new 日期时间('2024-08-03 12:34:56');
        datetime.增减日期时间(1, 0, 0, 0, 0, 0, 0);
        expect(datetime.到文本()).to.equal('2025-08-03 12:34:56');
    });

    it('测试取时间间隔', () => {
        const datetime1 = new 日期时间('2024-08-03 12:34:56');
        const datetime2 = new 日期时间('2023-07-02 11:33:55');
        const interval = datetime1.取时间间隔(datetime2);
        expect(interval.years).to.equal(1);
        expect(interval.months).to.equal(13);
        expect(interval.days).to.equal(398);
    });

    it('测试取友好时间', () => {
        const datetime = new 日期时间();
        const friendlyTime = datetime.取友好时间();
        expect(friendlyTime).to.be.a('string');
    });

    it('测试取现行时间戳', () => {
        const timestamp = 取现行时间戳();
        expect(timestamp).to.be.a('number');
    });

    it('测试日期到时间戳', () => {
        const timestamp = 日期到时间戳('2024-08-03 12:34:56');
        expect(timestamp).to.equal(1722659696);
    });

    it('测试取现行时间', () => {
        const currentTime = 取现行时间();
        expect(currentTime).to.be.instanceOf(日期时间);
    });

    it('测试取现行时间2', () => {
        const currentTimeFormatted = 取现行时间2(1);
        expect(currentTimeFormatted).to.be.a('string');
    });

    it('测试now函数', () => {
        const nowTime = now();
        expect(nowTime).to.be.instanceOf(日期时间);
    });

    it('测试创建日期时间', () => {
        const datetime = 创建日期时间('2024-08-03 12:34:56');
        expect(datetime).to.be.instanceOf(日期时间);
    });

    it('测试时间迭代', () => {
        const start = '2024-08-01';
        const end = '2024-08-03';
        const iter = 时间迭代(start, end);
        const dates = Array.from(iter);
        expect(dates.length).to.equal(3);
        expect(dates[0].toISOString().split('T')[0]).to.equal('2024-08-01');
        expect(dates[1].toISOString().split('T')[0]).to.equal('2024-08-02');
        expect(dates[2].toISOString().split('T')[0]).to.equal('2024-08-03');
    });
});
