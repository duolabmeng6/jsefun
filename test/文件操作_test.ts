import { expect,assert } from 'chai';
import { describe, it } from 'mocha';
// @ts-ignore
import * as 文件操作 from "../src/文件操作.ts";
import path from "path";
import fs from "fs";
// describe('Check if instance has the property', () => {
//     it('Instance should have the property', async () => {
//         await 文件操作.写到文件("1.txt", "abc")
//         let data = await 文件操作.读入文本("1.txt")
//         console.log(data)
//         let data2 = await 文件操作.读入文件("1.txt")
//         console.log(data2)
//     });
// });

describe('文件操作', function() {
    const testDir = path.join(__dirname, 'test_files');
    const testFile = path.join(testDir, 'test.txt');
    const testContent = '测试内容';

    before(function() {
        if (!fs.existsSync(testDir)) {
            fs.mkdirSync(testDir);
        }
    });

    after(function() {
        if (fs.existsSync(testDir)) {
            fs.rmdirSync(testDir, { recursive: true });
        }
    });

    it('E写到文件 和 E读入文本', function() {
        文件操作.写到文件(testFile, testContent);
        const content = 文件操作.读入文本(testFile);
        assert.equal(content, testContent);
    });

    it('E文件是否存在', function() {
        assert.isTrue(文件操作.文件是否存在(testFile));
        assert.isFalse(文件操作.文件是否存在(path.join(testDir, 'nonexistent.txt')));
    });

    it('E取文件尺寸', function() {
        文件操作.写到文件(testFile, testContent);
        const size = 文件操作.取文件尺寸(testFile);
        const expectedSize = Buffer.byteLength(testContent, 'utf8');
        assert.equal(size, expectedSize);
    });

    it('E文件取文件名', function() {
        assert.equal(文件操作.文件取文件名(testFile, true), 'test.txt');
        assert.equal(文件操作.文件取文件名(testFile, false), 'test');
    });

    it('E文件取父目录', function() {
        assert.equal(文件操作.文件取父目录(testFile), testDir);
    });

    it('E文件取扩展名', function() {
        assert.equal(文件操作.文件取扩展名(testFile), '.txt');
    });

    it('E文件更名', function() {
        const newFile = path.join(testDir, 'renamed.txt');
        文件操作.文件更名(testFile, newFile);
        assert.isTrue(文件操作.文件是否存在(newFile));
        assert.isFalse(文件操作.文件是否存在(testFile));
        // 改回原名，方便后续测试
        文件操作.文件更名(newFile, testFile);
    });

    it('E复制文件', function() {
        const copyFile = path.join(testDir, 'copy.txt');
        文件操作.复制文件(testFile, copyFile);
        assert.isTrue(文件操作.文件是否存在(copyFile));
        assert.equal(文件操作.读入文本(copyFile), testContent);
    });

    it('E删除文件', function() {
        const fileToDelete = path.join(testDir, 'to_delete.txt');
        文件操作.写到文件(fileToDelete, 'delete me');
        assert.isTrue(文件操作.文件是否存在(fileToDelete));
        文件操作.删除文件(fileToDelete);
        assert.isFalse(文件操作.文件是否存在(fileToDelete));
    });

    it('E创建目录 和 E删除目录', function() {
        const newDir = path.join(testDir, 'newdir');
        文件操作.创建目录(newDir);
        assert.isTrue(fs.existsSync(newDir));
        文件操作.删除目录(newDir);
        assert.isFalse(fs.existsSync(newDir));
    });

    it('E文件枚举', function() {
        const files = 文件操作.文件枚举(testDir, '.txt', true, false);
        assert.include(files, testFile);
    });

    it('E取文件Mime', function() {
        文件操作.写到文件(testFile, testContent);
        const mime = 文件操作.取文件Mime(testFile);
        assert.equal(mime, 'text/plain');
    });

    it('E读入文件', function() {
        const buffer = 文件操作.读入文件(testFile);
        assert.instanceOf(buffer, Buffer);
        assert.equal(buffer.toString(), testContent);
    });

    it('E取当前目录 和 E置当前目录', function() {
        const originalDir = process.cwd();
        const currentDir = 文件操作.取当前目录();
        assert.equal(currentDir, originalDir);

        文件操作.置当前目录(testDir);
        assert.equal(文件操作.取当前目录(), testDir);

        // 恢复原始目录
        文件操作.置当前目录(originalDir);
    });

    it('E移动文件', function() {
        const movedFile = path.join(testDir, 'moved.txt');
        文件操作.移动文件(testFile, movedFile);
        assert.isTrue(文件操作.文件是否存在(movedFile));
        assert.isFalse(文件操作.文件是否存在(testFile));
        // 移回原位置
        文件操作.移动文件(movedFile, testFile);
    });

    it('E取临时文件名', async function() {
        const tempFile = await 文件操作.取临时文件名(testDir);
        assert.isTrue(文件操作.文件是否存在(tempFile));
        文件操作.删除文件(tempFile);
    });

    it('E复制目录', function() {
        const sourceDir = path.join(testDir, 'source');
        const destDir = path.join(testDir, 'dest');
        文件操作.创建目录(sourceDir);
        文件操作.写到文件(path.join(sourceDir, 'test.txt'), 'test');

        文件操作.复制目录(sourceDir, destDir);
        assert.isTrue(文件操作.文件是否存在(path.join(destDir, 'test.txt')));
    });

    it('E路径合并', function() {
        const result = 文件操作.路径合并('path', 'to', 'file.txt');
        assert.equal(result, path.join('path', 'to', 'file.txt'));
    });

    it('E创建目录多级', function() {
        const multiLevelDir = path.join(testDir, 'level1', 'level2', 'level3');
        文件操作.创建目录多级(multiLevelDir);
        assert.isTrue(fs.existsSync(multiLevelDir));
    });

    it('E目录枚举子目录', function() {
        const parentDir = path.join(testDir, 'parent');
        const childDir1 = path.join(parentDir, 'child1');
        const childDir2 = path.join(parentDir, 'child2');

        文件操作.创建目录多级(childDir1);
        文件操作.创建目录多级(childDir2);

        const subDirs = 文件操作.目录枚举子目录(parentDir, true, false);
        assert.include(subDirs, childDir1);
        assert.include(subDirs, childDir2);
    });

    it('E文件路径合并处理', function() {
        const result = 文件操作.文件路径合并处理('path', 'to', 'file.txt');
        assert.equal(result, path.join('path', 'to', 'file.txt'));
    });

    it('E文件写出', function() {
        const newFile = path.join(testDir, 'newfile.txt');
        文件操作.文件写出(newFile, 'New content');
        assert.isTrue(文件操作.文件是否存在(newFile));
        assert.equal(文件操作.读入文本(newFile), 'New content');
    });

    it('E文件追加文本', function() {
        const appendFile = path.join(testDir, 'append.txt');
        文件操作.文件写出(appendFile, 'Initial content');
        文件操作.文件追加文本(appendFile, 'Appended content');
        const content = 文件操作.读入文本(appendFile);
        assert.include(content, 'Initial content');
        assert.include(content, 'Appended content');
    });

    it('E文件保存', function() {
        const saveFile = path.join(testDir, 'save.txt');

        文件操作.文件保存(saveFile, 'New save content');
        assert.equal(文件操作.读入文本(saveFile), 'New save content');
    });
    it('文件删除', function() {
        文件操作.文件写出(testFile,"a");
        文件操作.文件删除(testFile);
        assert.isFalse(文件操作.文件是否存在(testFile));
    });

});
