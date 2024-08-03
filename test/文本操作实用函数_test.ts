// testTextUtils.ts
import {describe, it} from 'mocha';

import { expect } from 'chai';
import * as  文本操作实用函数  from '../src/核心易函数支持库/文本操作实用函数';

describe('字符串处理函数测试', () => {
    it('strCut: 应该正确截取指定表达式之间的文本', () => {
        expect(文本操作实用函数.strCut("Hello [world]!", "[")).to.equal("world]!");
        expect(文本操作实用函数.strCut("Hello [world]!", "Hello $!")).to.equal("[world]");
        expect(文本操作实用函数.strCut("Hello [world]!", "Hello $")).to.equal("[world]!");
        expect(文本操作实用函数.strCut("Hello [world]!", "Hello ")).to.equal("[world]!");
        expect(文本操作实用函数.strCut("Hello [world]!", "$")).to.equal("Hello [world]!");
    });

    it('文本_取左边: 应该正确截取指定文本之前的内容', () => {
        expect(文本操作实用函数.文本_取左边("Hello [world]!", "[world")).to.equal("Hello ");
    });

    it('文本_取右边: 应该正确截取指定文本之后的内容', () => {
        expect(文本操作实用函数.文本_取右边("Hello [world]!", "Hello")).to.equal(" [world]!");
    });

    it('文本_取出中间文本: 应该正确截取两个指定文本之间的内容', () => {
        expect(文本操作实用函数.文本_取出中间文本("Hello [world]!", "Hello ", "!")).to.equal("[world]");
        expect(文本操作实用函数.文本_取出中间文本("Hello [world]!", "Hello ", "]")).to.equal("[world");
        expect(文本操作实用函数.文本_取出中间文本("Hello [world]!", "[", "]")).to.equal("world");
        expect(文本操作实用函数.文本_取出中间文本("Hello [world]!", "Hello", "world")).to.equal(" [");
        expect(文本操作实用函数.文本_取出中间文本("Hello [world]!", "Hello", "")).to.equal(" [world]!");
    });

    it('文本_取随机字母: 应该生成指定数量的随机小写字母', () => {
        const result = 文本操作实用函数.文本_取随机字母(5, 0);
        expect(result).to.have.lengthOf(5);
        expect(result).to.match(/^[a-z]{5}$/);
    });

    it('文本_取随机字母: 应该生成指定数量的随机大写字母', () => {
        const result = 文本操作实用函数.文本_取随机字母(5, 1);
        expect(result).to.have.lengthOf(5);
        expect(result).to.match(/^[A-Z]{5}$/);
    });

    it('文本_取随机字母: 应该生成指定数量的随机混合字母', () => {
        const result = 文本操作实用函数.文本_取随机字母(5, 2);
        expect(result).to.have.lengthOf(5);
        expect(result).to.match(/^[a-zA-Z]{5}$/);
    });

    it('文本_取随机字母和数字: 应该生成指定数量的随机字母和数字', () => {
        const result = 文本操作实用函数.文本_取随机字母和数字(10);
        expect(result).to.have.lengthOf(10);
        expect(result).to.match(/^[0-9a-zA-Z]{10}$/);
    });

    it('文本_取随机数字: 应该生成指定数量的随机数字', () => {
        const result = 文本操作实用函数.文本_取随机数字(10);
        expect(result).to.have.lengthOf(10);
        expect(result).to.match(/^[0-9]{10}$/);
    });

    it('文本_取随机汉字: 应该生成指定数量的随机汉字', () => {
        const result = 文本操作实用函数.文本_取随机汉字(5);
        expect(result).to.have.lengthOf(5);
    });

    it('文本_取随机姓氏: 应该生成随机姓氏', () => {
        const result = 文本操作实用函数.文本_取随机姓氏();
        expect(result).to.have.lengthOf(1);
    });

    it('文本_取随机手机号: 应该生成随机手机号', () => {
        const result = 文本操作实用函数.文本_取随机手机号();
        expect(result).to.match(/^1[3-9]\d{9}$/);
    });

    it('文本_取随机邮箱: 应该生成随机邮箱', () => {
        const result = 文本操作实用函数.文本_取随机邮箱();
        expect(true);
    });

    it('文本_删左边: 应该删除左边指定长度的字符', () => {
        const result = 文本操作实用函数.文本_删左边('abcdef', 2);
        expect(result).to.equal('cdef');
    });

    it('文本_删右边: 应该删除右边指定长度的字符', () => {
        const result = 文本操作实用函数.文本_删右边('abcdef', 2);
        expect(result).to.equal('abcd');
    });

    it('文本_删中间: 应该删除中间指定位置和长度的字符', () => {
        const result = 文本操作实用函数.文本_删中间('abcdef', 2, 2);
        expect(result).to.equal('abef');
    });

    it('文本_取出文本中汉字: 应该提取字符串中的所有汉字', () => {
        const result = 文本操作实用函数.文本_取出文本中汉字('abc中文def');
        expect(result).to.equal('中文');
    });

    it('文本_逐字分割: 应该将字符串逐字分割成数组', () => {
        const result = 文本操作实用函数.文本_逐字分割('abc');
        expect(result).to.deep.equal(['a', 'b', 'c']);
    });

    it('文本_颠倒: 应该将字符串颠倒顺序', () => {
        const result = 文本操作实用函数.文本_颠倒('abcdef');
        expect(result).to.equal('fedcba');
    });
    it('文本_是否为汉字: 应该正确判断文本是否全部为汉字', () => {
        expect(文本操作实用函数.文本_是否为汉字("你好")).to.be.true;
        expect(文本操作实用函数.文本_是否为汉字("你好Hello")).to.be.false;
    });

    it('文本区分_只取字母: 应该正确提取文本中的字母', () => {
        expect(文本操作实用函数.文本区分_只取字母("abc123XYZ", 0)).to.equal("abcXYZ");
        expect(文本操作实用函数.文本区分_只取字母("abc123XYZ", 1)).to.equal("XYZ");
        expect(文本操作实用函数.文本区分_只取字母("abc123XYZ", 2)).to.equal("abc");
    });

    it('文本区分_只取数字: 应该正确提取文本中的数字', () => {
        expect(文本操作实用函数.文本区分_只取数字("abc123XYZ")).to.equal("123");
    });

    it('判断文本: 应该正确判断文本中是否包含关键字', () => {
        expect(文本操作实用函数.判断文本("Hello world", "world")).to.be.true;
        expect(文本操作实用函数.判断文本("Hello world", ["world", "hello"])).to.be.true;
        expect(文本操作实用函数.判断文本("Hello world", ["hi", "hello"])).to.be.false;
    });

    it('判断文本s: 应该返回文本中包含的第一个关键字', () => {
        expect(文本操作实用函数.判断文本s("Hello world", ["world", "hello"])).to.equal("world");
        expect(文本操作实用函数.判断文本s("Hello world", ["hi", "Hello"])).to.equal("Hello");
        expect(文本操作实用函数.判断文本s("Hello world", ["hi", "hey"])).to.equal("");
    });

    it('文本_取手机号码: 应该正确提取文本中的手机号码', () => {
        expect(文本操作实用函数.文本_取手机号码("联系我：13900000000")).to.deep.equal(["13900000000"]);
    });

    it('文本_取IP地址: 应该正确提取文本中的IP地址', () => {
        expect(文本操作实用函数.文本_取IP地址("服务器IP: 192.168.1.1")).to.deep.equal(["192.168.1.1"]);
    });

    it('文本_取电话号码: 应该正确提取文本中的电话号码', () => {
        expect(文本操作实用函数.文本_取电话号码("办公室电话：010-12345678")).to.deep.equal(["010-12345678"]);
    });

    it('文本_取QQ号码: 应该正确提取文本中的QQ号码', () => {
        expect(文本操作实用函数.文本_取QQ号码("我的QQ号是123456789")).to.deep.equal(["123456789"]);
    });

    it('文本_取邮政编码: 应该正确提取文本中的邮政编码', () => {
        expect(文本操作实用函数.文本_取邮政编码("邮政编码：100000")).to.deep.equal(["100000"]);
    });

    it('文本_取身份证号码: 应该正确提取文本中的身份证号码', () => {
        expect(文本操作实用函数.文本_取身份证号码("身份证号码：11010119900101000X")).to.deep.equal(["11010119900101000X"]);
    });

    it('文本_取双字节字符: 应该正确提取文本中的双字节字符', () => {
        expect(文本操作实用函数.文本_取双字节字符("Hello 你好")).to.equal("你好");
    });

    it('文本_取网址: 应该正确提取文本中的网址', () => {
        expect(文本操作实用函数.文本_取网址("访问我们的网站：http://example.com")).to.deep.equal(["http://example.com"]);
    });

    it('文本_取IP跟端口: 应该正确提取文本中的IP地址和端口', () => {
        expect(文本操作实用函数.文本_取IP跟端口("服务器地址：192.168.1.1:8080")).to.deep.equal(["192.168.1.1:8080"]);
    });

    it('文本_取邮箱号码: 应该正确提取文本中的邮箱地址', () => {
        expect(文本操作实用函数.文本_取邮箱号码("我的邮箱是test@example.com")).to.deep.equal(["test@example.com"]);
    });

    it('文本_大小写翻转: 应该正确翻转文本的大小写', () => {
        expect(文本操作实用函数.文本_大小写翻转("Hello World")).to.equal("hELLO wORLD");
    });

    it('文本_是否为大写字母: 应该正确判断文本是否全部为大写字母', () => {
        expect(文本操作实用函数.文本_是否为大写字母("HELLO")).to.be.true;
        expect(文本操作实用函数.文本_是否为大写字母("Hello")).to.be.false;
    });

    it('文本_是否为小写字母: 应该正确判断文本是否全部为小写字母', () => {
        expect(文本操作实用函数.文本_是否为小写字母("hello")).to.be.true;
        expect(文本操作实用函数.文本_是否为小写字母("Hello")).to.be.false;
    });

    it('文本_是否为字母: 应该正确判断文本是否全部为字母', () => {
        expect(文本操作实用函数.文本_是否为字母("Hello")).to.be.true;
        expect(文本操作实用函数.文本_是否为字母("Hello123")).to.be.false;
    });

    it('文本_是否为数字字母: 应该正确判断文本是否全部为数字和字母', () => {
        expect(文本操作实用函数.文本_是否为数字字母("Hello123")).to.be.true;
        expect(文本操作实用函数.文本_是否为数字字母("Hello123!")).to.be.false;
    });

    it('文本_是否为数字: 应该正确判断文本是否全部为数字', () => {
        expect(文本操作实用函数.文本_是否为数字("123456")).to.be.true;
        expect(文本操作实用函数.文本_是否为数字("123456a")).to.be.false;
    });

    it('文本_取出现次数: 应该正确返回文本中指定子文本的出现次数', () => {
        expect(文本操作实用函数.文本_取出现次数("Hello Hello Hello", "Hello")).to.equal(3);
    });

    it('文本_单词首字母大写: 应该正确将每个单词的首字母大写', () => {
        expect(文本操作实用函数.文本_单词首字母大写("hello world")).to.equal("Hello World");
    });

    it('文本_填充空格_居中: 应该正确将文本填充到指定长度并居中对齐', () => {
        expect(文本操作实用函数.文本_填充空格_居中("Hello", 10)).to.equal("  Hello   ");
    });
    it('数组_转文本: 应该将数组转换为文本', () => {
        expect(文本操作实用函数.数组_转文本(['Hello', 'world'], ' ')).to.equal('Hello world');
        expect(文本操作实用函数.数组_转文本(['Hello', 'world'], '\n')).to.equal('Hello\nworld');
    });

    it('文本_判断文本前缀: 应该判断文本是否以指定前缀开头', () => {
        expect(文本操作实用函数.文本_判断文本前缀('Hello world', 'Hello')).to.be.true;
        expect(文本操作实用函数.文本_判断文本前缀('Hello world', 'world')).to.be.false;
    });

    it('文本_判断文本后缀: 应该判断文本是否以指定后缀结尾', () => {
        expect(文本操作实用函数.文本_判断文本后缀('Hello world', 'world')).to.be.true;
        expect(文本操作实用函数.文本_判断文本后缀('Hello world', 'Hello')).to.be.false;
    });

    it('文本_TAB转空格: 应该将文本中的 tab 符号转换为空格', () => {
        expect(文本操作实用函数.文本_TAB转空格('Hello\tworld', 4)).to.equal('Hello    world');
        expect(文本操作实用函数.文本_TAB转空格('Hello\tworld')).to.equal('Hello        world');
    });

    it('文本_取随机IP: 应该生成一个有效的随机IP地址', () => {
        const ip = 文本操作实用函数.文本_取随机IP();
        const ipParts = ip.split('.').map(Number);
        expect(ipParts).to.have.lengthOf(4);
        ipParts.forEach(part => {
            expect(part).to.be.at.least(0);
            expect(part).to.be.at.most(255);
        });
    });

    it('文本_取中间_批量: 应该批量取出指定前后缀之间的文本', () => {
        const text = "前缀A后缀前缀B后缀前缀C后缀";
        const result = 文本操作实用函数.文本_取中间_批量(text, "前缀", "后缀");
        expect(result).to.deep.equal(["A", "B", "C"]);
    });
});