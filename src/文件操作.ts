import fs from 'fs';
import path from 'path';
import mime from 'mime-types';

// 读入文件 从指定文件名读取数据并返回读取到的字节数组。
// 如果读取失败，则返回一个空数组。
function 读入文件(文件名: string): Buffer {
    try {
        return fs.readFileSync(文件名);
    } catch (error) {
        return Buffer.alloc(0);
    }
}

// 读入文本 从指定文件名读取数据并返回读取到的文本
// 如果读取失败，则返回一个空字符串。
function 读入文本(文件名: string): string {
    try {
        return fs.readFileSync(文件名, 'utf8');
    } catch (error) {
        return '';
    }
}

// 写到文件 将指定的数据写入指定的文件中。如果写入成功，返回 true。否则，抛出错误。
function 写到文件(文件名: string, 欲写入文件的数据: string | Buffer): boolean {
    const 父目录 = 文件取父目录(文件名);
    if (!文件是否存在(父目录)) {
        创建目录多级(父目录);
    }
    fs.writeFileSync(文件名, 欲写入文件的数据);
    return true;
}

// 取当前目录 返回当前程序运行的目录。
function 取当前目录(): string {
    return process.cwd();
}

// 置当前目录 设置当前程序运行的目录。
function 置当前目录(目录: string): void {
    process.chdir(目录);
}

// 创建目录 创建一个目录。如果创建成功，则不返回任何值。否则，抛出错误。
function 创建目录(欲创建的目录名称: string): void {
    fs.mkdirSync(欲创建的目录名称);
}

// 删除目录 删除指定目录名称
function 删除目录(欲删除的目录名称: string): void {
    fs.rmdirSync(欲删除的目录名称, { recursive: true });
}

// 复制文件 复制一个文件到另一个文件
function 复制文件(被复制的文件名: string, 复制到的文件名: string): void {
    fs.copyFileSync(被复制的文件名, 复制到的文件名);
}

// 移动文件 将文件从一个位置移到另一个位置
function 移动文件(被移动的文件: string, 移动到的位置: string): void {
    fs.renameSync(被移动的文件, 移动到的位置);
}

// 删除文件 删除指定的文件
function 删除文件(欲删除的文件名: string): void {
    fs.unlinkSync(欲删除的文件名);
}

// 文件更名 重命名文件或目录
function 文件更名(欲更名的原文件或目录名: string, 欲更改为的现文件或目录名: string): void {
    fs.renameSync(欲更名的原文件或目录名, 欲更改为的现文件或目录名);
}

// 文件是否存在 检查文件是否存在
function 文件是否存在(欲测试的文件名称: string): boolean {
    return fs.existsSync(欲测试的文件名称);
}

// 取文件尺寸 获取文件的大小(字节)
function 取文件尺寸(文件名: string): number {
    try {
        const stats = fs.statSync(文件名);
        return stats.size;
    } catch (error) {
        return -1;
    }
}

// 取临时文件名 在指定目录中创建一个临时文件并返回其文件路径
async function 取临时文件名(目录名: string): Promise<string>  {
    return new Promise((resolve, reject) => {
        fs.mkdtemp(path.join(目录名, 'tmp-'), (err, folder) => {
            if (err) return reject(err);
            const filepath = path.join(folder, 'tempfile');
            fs.writeFile(filepath, '', (err) => {
                if (err) return reject(err);
                resolve(filepath);
            });
        });
    });
}

// 复制目录 复制一个目录到另一个目录
function 复制目录(被复制的目录名称: string, 复制到的目录名称: string): void {
    fs.mkdirSync(复制到的目录名称, { recursive: true });
    const files = fs.readdirSync(被复制的目录名称);
    for (const file of files) {
        const srcPath = path.join(被复制的目录名称, file);
        const destPath = path.join(复制到的目录名称, file);
        const stat = fs.statSync(srcPath);
        if (stat.isDirectory()) {
            复制目录(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

function 路径合并(...elem: string[]): string {
    return path.join(...elem);
}

function 创建目录多级(欲创建的目录名称: string): void {
    fs.mkdirSync(欲创建的目录名称, { recursive: true });
}

// 文件枚举
function 文件枚举(欲寻找的目录: string, 欲寻找的文件名: string, 是否带路径: boolean = false, 是否遍历子目录: boolean = false): string[] {
    const files: string[] = [];
    const 欲寻找的文件名arr = 欲寻找的文件名.split('|');

    function traverse(dir: string): void {
        const list = fs.readdirSync(dir);
        for (const file of list) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                if (是否遍历子目录) {
                     traverse(fullPath);
                }
            } else {
                let ok = false;
                if (欲寻找的文件名arr.some(ext => ext.trim() !== '')) {
                    if (欲寻找的文件名arr.some(ext => file.endsWith(ext))) {
                        ok = true;
                    }
                } else {
                    ok = true;
                }
                if (ok) {
                    files.push(是否带路径 ? fullPath : file);
                }
            }
        }
    }

     traverse(欲寻找的目录);
    return files;
}

// 目录枚举子目录
function 目录枚举子目录(父文件夹路径: string, 是否带路径: boolean = true, 是否继续向下枚举: boolean = false): string[] {
    const 子目录数组: string[] = [];

    function traverse(dir: string): void {
        const list = fs.readdirSync(dir);
        for (const file of list) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                子目录数组.push(是否带路径 ? fullPath : file);
                if (是否继续向下枚举) {
                     traverse(fullPath);
                }
            }
        }
    }

     traverse(父文件夹路径);
    return 子目录数组;
}

function 文件取文件名(路径: string, 是否需要后缀: boolean = true): string {
    return 是否需要后缀 ? path.basename(路径) : path.basename(路径, path.extname(路径));
}

function 文件路径合并处理(...elem: string[]): string {
    return path.join(...elem);
}

function 文件取父目录(dirpath: string): string {
    return path.dirname(dirpath);
}

function 文件取扩展名(filepath: string): string {
    return path.extname(filepath);
}

function 文件删除(欲删除的文件名: string): boolean {
    try {
        fs.unlinkSync(欲删除的文件名);
        return true;
    } catch (error) {
        return false;
    }
}

// 路径不存在时自动创建
function 文件写出(文件名: string, 欲写入文件的数据: string | Buffer): void {
    const fpath =  文件取父目录(文件名);
    if (! 文件是否存在(fpath)) {
         创建目录多级(fpath);
    }
    fs.writeFileSync(文件名, 欲写入文件的数据);
}

// 路径不存在时自动创建
function 文件追加文本(文件名: string, 欲追加的文本: string): void {
    const fpath = 文件取父目录(文件名);
    if (!文件是否存在(fpath)) {
        创建目录多级(fpath);
    }
    fs.appendFileSync(文件名, 欲追加的文本 + '\r\n');
}

// 自动检查内容是否一致是否需要写出
function 文件保存(文件名: string, 欲写入文件的数据: string | Buffer): void {
    if (文件是否存在(文件名)) {
        const data = 读入文件(文件名);
        const wdata = Buffer.from(欲写入文件的数据);
        // @ts-ignore
        if (!Buffer.compare(data, wdata) === 0) {
            文件写出(文件名, wdata);
        }
    } else {
        文件写出(文件名, 欲写入文件的数据);
    }
}

function 取文件Mime(文件路径: string): string {
    try {
        // 读取文件的前512字节
        const buffer = Buffer.alloc(512);
        const fd = fs.openSync(文件路径, 'r');
        fs.readSync(fd, buffer, 0, 512, 0);
        fs.closeSync(fd);

        // 使用mime-types库来获取MIME类型
        const mimeType = mime.lookup(文件路径) || 'application/octet-stream';

        return mimeType;
    } catch (错误) {
        console.error('读取文件MIME类型时出错:', 错误);
        return '';
    }
}

export {
    读入文件,
    读入文本,
    写到文件,
    取当前目录,
    置当前目录,
    创建目录,
    删除目录,
    复制文件,
    移动文件,
    删除文件,
    文件更名,
    文件是否存在,
    取文件尺寸,
    取临时文件名,
    复制目录,
    路径合并,
    创建目录多级,
    文件枚举,
    目录枚举子目录,
    文件取文件名,
    文件路径合并处理,
    文件取父目录,
    文件取扩展名,
    文件删除,
    文件写出,
    文件追加文本,
    文件保存,
    取文件Mime,
};