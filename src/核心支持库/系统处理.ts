import * as os from 'os';
import * as child_process from 'child_process';

/**
 * 系统是否为window系统
 * @returns 是否为 Windows 系统
 */
export function 系统_是否为window系统(): boolean {
    return os.platform() === 'win32';
}

/**
 * 系统是否为linux系统
 * @returns 是否为 Linux 系统
 */
export function 系统_是否为linux系统(): boolean {
    return os.platform() === 'linux';
}

/**
 * 系统是否为mac系统
 * @returns 是否为 macOS 系统
 */
export function 系统_是否为mac系统(): boolean {
    return os.platform() === 'darwin';
}

/**
 * 延时
 * @param 秒 延迟的秒数
 */
export function 延时(秒: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 秒 * 1000));
}

/**
 * 运行命令
 * @param cmd 要运行的命令
 * @returns 返回内容
 */
export function 运行(cmd: string): string {
    try {
        return child_process.execSync(cmd, { encoding: 'utf8' }).toString();
    } catch (error) {
        return error.message;
    }
}
