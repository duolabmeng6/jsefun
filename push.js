const fs = require('fs');
const path = require('path');

// 目标目录
const dirPath = 'dist/';

// 处理单个文件
function processFile(filePath) {
    if (path.extname(filePath) === '.js') {
        const newFilePath = filePath.replace('.js', '.cjs');
        const data = fs.readFileSync(filePath, 'utf8');
        fs.writeFileSync(newFilePath, data, 'utf8');
        console.log(`文件 ${filePath} 已转换为 ${newFilePath}`);
    }
}

// 递归处理目录
function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            processDirectory(filePath);
        } else {
            processFile(filePath);
        }
    });
}

// 开始处理目标目录
processDirectory(dirPath);
