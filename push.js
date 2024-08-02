const fs = require('fs');
const path = require('path');

// 目标目录
const dirPath = 'dist/';

// 读取目录下的所有文件和子目录
fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.error('读取目录失败:', err);
        return;
    }

    // 遍历所有文件
    files.forEach(file => {
        const filePath = path.join(dirPath, file);

        // 检查是否为.js文件
        if (path.extname(filePath) === '.js') {
            // 新的文件路径，.js改为.cjs
            const newFilePath = filePath.replace('.js', '.cjs');

            // 读取原文件内容
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error('读取文件失败:', err);
                    return;
                }

                // 写入新文件，这里只是改变扩展名，没有修改文件内容
                fs.writeFile(newFilePath, data, 'utf8', err => {
                    if (err) {
                        console.error('写入文件失败:', err);
                        return;
                    }
                    console.log(`文件 ${file} 已转换为 ${newFilePath}`);
                });
            });
        }
    });
});
