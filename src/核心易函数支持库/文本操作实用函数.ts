/**
 * 从字符串中截取指定表达式之间的文本
 * @param 内容 要截取的内容
 * @param 表达式 截取表达式
 * @returns 截取后的字符串
 */
export function strCut(内容: string, 表达式: string): string {
    const subbds = 表达式.split("$");
    if (subbds.length === 2) {
        return 文本_取出中间文本(内容, subbds[0], subbds[1]);
    }
    if (subbds.length === 1) {
        return 文本_取出中间文本(内容, subbds[0], "");
    }
    return 内容;
}

/**
 * 从字符串的左边截取指定文本之前的内容
 * @param 需取文本 要截取的内容
 * @param 欲寻找的文本 指定的文本
 * @returns 截取后的字符串
 */
export function 文本_取左边(需取文本: string, 欲寻找的文本: string): string {
    return 文本_取出中间文本(需取文本, "", 欲寻找的文本);
}

/**
 * 从字符串的右边截取指定文本之后的内容
 * @param 需取文本 要截取的内容
 * @param 欲寻找的文本 指定的文本
 * @returns 截取后的字符串
 */
export function 文本_取右边(需取文本: string, 欲寻找的文本: string): string {
    return 文本_取出中间文本(需取文本, 欲寻找的文本, "");
}

/**
 * 从字符串中截取两个指定文本之间的内容
 * @param 需取文本 要截取的内容
 * @param 左边文本 左边的文本
 * @param 右边文本 右边的文本
 * @returns 截取后的字符串
 */
export function 文本_取出中间文本(需取文本: string, 左边文本: string, 右边文本: string): string {
    const leftLen = 左边文本.length;
    try {
        const leftP = 需取文本.indexOf(左边文本);
        if (leftP === -1) {
            return '';
        }
        if (右边文本 === "") {
            const leftPWithLen = leftP + leftLen;
            return 需取文本.slice(leftPWithLen);
        } else {
            const leftPWithLen = leftP + leftLen;
            const rigthP = 需取文本.indexOf(右边文本, leftPWithLen);
            if (rigthP === -1) {
                return '';
            }
            return 需取文本.slice(leftPWithLen, rigthP);
        }
    } catch {
        return '';
    }
}


/**
 * 生成指定数量的随机字母
 * @param 取出的数量 要生成的字母数量
 * @param 类型 字母类型：0-小写，1-大写，2-混合
 * @returns 生成的随机字母字符串
 */
export function 文本_取随机字母(取出的数量: number, 类型: number = 2): string {
    const 字母 = 'abcdefghijklnmopqrstuvwxyz';
    let 文本 = '';
    取出的数量 = Math.max(1, 取出的数量);
    类型 = Math.max(0, Math.min(类型, 2));

    for (let i = 0; i < 取出的数量; i++) {
        if (类型 === 0) {
            文本 += 字母.charAt(Math.floor(Math.random() * 字母.length));
        } else if (类型 === 1) {
            文本 += 字母.charAt(Math.floor(Math.random() * 字母.length)).toUpperCase();
        } else {
            const 随机数 = Math.random() < 0.5 ? 0 : 1;
            if (随机数 === 1) {
                文本 += 字母.charAt(Math.floor(Math.random() * 字母.length));
            } else {
                文本 += 字母.charAt(Math.floor(Math.random() * 字母.length)).toUpperCase();
            }
        }
    }
    return 文本;
}

/**
 * 生成指定数量的随机字母和数字
 * @param 取出的数量 要生成的字符数量
 * @returns 生成的随机字母和数字字符串
 */
export function 文本_取随机字母和数字(取出的数量: number): string {
    const 字符 = '0123456789abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ';
    let 文本 = '';
    取出的数量 = Math.max(1, 取出的数量);

    for (let i = 0; i < 取出的数量; i++) {
        文本 += 字符.charAt(Math.floor(Math.random() * 字符.length));
    }
    return 文本;
}

/**
 * 生成指定数量的随机数字
 * @param 取出的数量 要生成的数字数量
 * @returns 生成的随机数字字符串
 */
export function 文本_取随机数字(取出的数量: number): string {
    const 字符 = '0123456789';
    let 文本 = '';
    取出的数量 = Math.max(1, 取出的数量);

    for (let i = 0; i < 取出的数量; i++) {
        文本 += 字符.charAt(Math.floor(Math.random() * 字符.length));
    }
    return 文本;
}

/**
 * 生成指定数量的随机汉字
 * @param 取出的数量 要生成的汉字数量
 * @returns 生成的随机汉字字符串
 */
export function 文本_取随机汉字(取出的数量: number): string {
    const 部分汉字 = "的一是了我不人在他有这个上们来到时大地为子中你说生国年着就那和要她出也得里后自以会家可下而过天去能对小多然于心学么之都好看起发当没成只如事把还用第样道想作种开美总从无情己面最女但现前些所同日手又行意动方期它头经长儿回位分爱老因很给名法间斯知世什两次使身者被高已亲其进此话常与活正感见明问力理尔点文几定本公特做外孩相西果走将月十实向声车全信重三机工物气每并别真打太新比才便夫再书部水像眼等体却加电主界门利海受听表德少克代员许稜先口由死安写性马光白或住难望教命花结乐色更拉东神记处让母父应直字场平报友关放至张认接告入笑内英军候民岁往何度山觉路带万男边风解叫任金快原吃妈变通师立象数四失满战远格士音轻目条呢病始达深完今提求清王化空业思切怎非找片罗钱紶吗语元喜曾离飞科言干流欢约各即指合反题必该论交终林请医晚制球决窢传画保读运及则房早院量苦火布品近坐产答星精视五连司巴奇管类未朋且婚台夜青北队久乎越观落尽形影红爸百令周吧识步希亚术留市半热送兴造谈容极随演收首根讲整式取照办强石古华諣拿计您装似足双妻尼转诉米称丽客南领节衣站黑刻统断福城故历惊脸选包紧争另建维绝树系伤示愿持千史谁准联妇纪基买志静阿诗独复痛消社算义竟确酒需单治卡幸兰念举仅钟怕共毛句息功官待究跟穿室易游程号居考突皮哪费倒价图具刚脑永歌响商礼细专黄块脚味灵改据般破引食仍存众注笔甚某沉血备习校默务土微娘须试怀料调广蜖苏显赛查密议底列富梦错座参八除跑亮假印设线温虽掉京初养香停际致阳纸李纳验助激够严证帝饭忘趣支春集丈木研班普导顿睡展跳获艺六波察群皇段急庭创区奥器谢弟店否害草排背止组州朝封睛板角况曲馆育忙质河续哥呼若推境遇雨标姐充围案伦护冷警贝著雪索剧啊船险烟依斗值帮汉慢佛肯闻唱沙局伯族低玩资屋击速顾泪洲团圣旁堂兵七露园牛哭旅街劳型烈姑陈莫鱼异抱宝权鲁简态级票怪寻杀律胜份汽右洋范床舞秘午登楼贵吸责例追较职属渐左录丝牙党继托赶章智冲叶胡吉卖坚喝肉遗救修松临藏担戏善卫药悲敢靠伊村戴词森耳差短祖云规窗散迷油旧适乡架恩投弹铁博雷府压超负勒杂醒洗采毫嘴毕九冰既状乱景席珍童顶派素脱农疑练野按犯拍征坏骨余承置臓彩灯巨琴免环姆暗换技翻束增忍餐洛塞缺忆判欧层付阵玛批岛项狗休懂武革良恶恋委拥娜妙探呀营退摇弄桌熟诺宣银势奖宫忽套康供优课鸟喊降夏困刘罪亡鞋健模败伴守挥鲜财孤枪禁恐伙杰迹妹藸遍盖副坦牌江顺秋萨菜划授归浪听凡预奶雄升碃编典袋莱含盛济蒙棋端腿招释介烧误乾坤";
    let 文本 = '';
    取出的数量 = Math.max(1, 取出的数量);

    for (let i = 0; i < 取出的数量; i++) {
        文本 += 部分汉字.charAt(Math.floor(Math.random() * 部分汉字.length));
    }
    return 文本;
}

/**
 * 生成随机姓氏
 * @param 取常见姓氏 是否只取常见姓氏
 * @returns 生成的随机姓氏
 */
export function 文本_取随机姓氏(取常见姓氏: boolean = false): string {
    const 百家姓 = '赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闵席季麻强贾路娄危江童颜郭梅盛林刁钟徐邱骆高夏蔡田樊胡凌霍虞万支柯昝管卢莫柯房裘缪干解应宗丁宣贲邓郁单杭洪包诸左石崔吉钮龚程嵇邢滑裴陆荣翁荀羊于惠甄曲家封芮羿储靳汲邴糜松井段富巫乌焦巴弓牧隗山谷车侯宓蓬全郗班仰秋仲伊宫宁仇栾暴甘钭历戎祖武符刘景詹束龙叶幸司韶郜黎蓟溥印宿白怀蒲邰从鄂索咸籍赖卓蔺屠蒙池乔阳郁胥能苍双闻莘党翟谭贡劳逄姬申扶堵冉宰郦雍却璩桑桂濮牛寿通边扈燕冀浦尚农温别庄晏柴瞿阎充慕连茹习宦艾鱼容向古易慎戈廖庾终暨居衡步都耿满弘匡国文寇广禄阙东欧殳沃利蔚越夔隆师巩厍聂晁勾敖融冷訾辛阚那简饶空曾毋沙乜养鞠须丰巢关蒯相查后荆红游竺权逮盍益桓公'
    const 常见百家姓 = '赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛范彭郎鲁韦昌马苗凤花方俞任袁柳史唐费薛雷贺罗毕于齐萧尹姚顾孟平黄宋庞项祝董梁杜阮刘万丁石洪白田夏';

    if (!取常见姓氏) {
        return 百家姓.charAt(Math.floor(Math.random() * 百家姓.length));
    } else {
        return 常见百家姓.charAt(Math.floor(Math.random() * 常见百家姓.length));
    }
}

/**
 * 生成随机手机号
 * @returns 生成的随机手机号
 */
export function 文本_取随机手机号(): string {
    const 号码前缀 = ['130', '131', '132', '134', '135', '136', '137', '138', '139', '147', '150', '151', '152', '153', '155',
        '156', '157', '158', '159', '170', '171', '180', '182', '183', '185', '186', '187', '188', '189'];
    let 尾号 = '';
    for (let x = 0; x < 8; x++) {
        尾号 += Math.floor(Math.random() * 10);
    }
    return 号码前缀[Math.floor(Math.random() * 号码前缀.length)] + 尾号;
}

/**
 * 生成随机邮箱
 * @returns 生成的随机邮箱
 */
export function 文本_取随机邮箱(): string {
    const 邮箱后缀 = ['@qq.com', '@sina.com', '@126.com', '@163.com', '@hotmail.com', '@139.com', '@189.com', '@sohu.com',
        '@21cn.com', '@189.com', '@tom.com', '@aol.com', '@263.com', '@aliyun.com', '@foxmail.com', '@yeah.net'];
    let 字母 = '', 字符 = '', 混合 = '', 数字 = String(Math.floor(Math.random() * 9) + 1);
    for (let x = 0; x < Math.floor(Math.random() * 7) + 5; x++) 数字 += Math.floor(Math.random() * 10);
    for (let x = 0; x < Math.floor(Math.random() * 7) + 5; x++) 字母 += 'qwertyuiopasdfghjklzxcvbnm'.charAt(Math.floor(Math.random() * 26));
    for (let x = 0; x < Math.floor(Math.random() * 6) + 6; x++) 字符 += '0123456789abcdefghijklnmopqrstuvwxyz'.charAt(Math.floor(Math.random() * 36));
    for (let x = 0; x < Math.floor(Math.random() * 6) + 1; x++) 混合 += 'qwertyuiopasdfghjklzxcvbnm'.charAt(Math.floor(Math.random() * 26));
    for (let x = 0; x < Math.floor(Math.random() * 8) + 3; x++) 混合 += Math.floor(Math.random() * 10);
    字符 = 字符.startsWith('0') ? 字符.slice(1) : 字符;
    return [混合, 混合, 混合, 字母, 数字, 字符][Math.floor(Math.random() * 6)] + 邮箱后缀[Math.floor(Math.random() * 邮箱后缀.length)];
}

/**
 * 删除字符串左边指定长度的字符
 * @param 欲处理文本 需要处理的字符串
 * @param 删除长度 删除的字符长度
 * @returns 处理后的字符串
 */
export function 文本_删左边(欲处理文本: string, 删除长度: number): string {
    return 欲处理文本.slice(删除长度);
}

/**
 * 删除字符串右边指定长度的字符
 * @param 欲处理文本 需要处理的字符串
 * @param 删除长度 删除的字符长度
 * @returns 处理后的字符串
 */
export function 文本_删右边(欲处理文本: string, 删除长度: number): string {
    return 欲处理文本.slice(0, -删除长度);
}

/**
 * 删除字符串中间指定位置和长度的字符
 * @param 欲处理文本 需要处理的字符串
 * @param 起始位置 删除的起始位置
 * @param 删除长度 删除的字符长度
 * @returns 处理后的字符串
 */
export function 文本_删中间(欲处理文本: string, 起始位置: number, 删除长度: number): string {
    return 欲处理文本.slice(0, 起始位置) + 欲处理文本.slice(起始位置 + 删除长度);
}

/**
 * 提取字符串中的所有汉字
 * @param 欲处理文本 需要处理的字符串
 * @returns 提取出的汉字字符串
 */
export function 文本_取出文本中汉字(欲处理文本: string): string {
    const 汉字正则 = /[\u4e00-\u9fa5]/g;
    return (欲处理文本.match(汉字正则) || []).join('');
}

/**
 * 将字符串逐字分割成数组
 * @param 欲处理文本 需要处理的字符串
 * @returns 分割后的字符串数组
 */
export function 文本_逐字分割(欲处理文本: string): string[] {
    return 欲处理文本.split('');
}

/**
 * 将字符串颠倒顺序
 * @param 欲处理文本 需要处理的字符串
 * @returns 颠倒后的字符串
 */
export function 文本_颠倒(欲处理文本: string): string {
    return 欲处理文本.split('').reverse().join('');
}

export function 文本_是否为汉字(欲处理文本: string): boolean {
    const zhmodel = /[^\u4e00-\u9fa5]/;  // 检查中文
    return !zhmodel.test(欲处理文本);
}

// type 0大小写字母 1大写字母 2小写字母
export function 文本区分_只取字母(欲处理文本: string, type: number = 0): string {
    let strArr: string[] = [];
    if (type === 0) {
        strArr = 欲处理文本.match(/[a-zA-Z]+/g) || [];
    } else if (type === 1) {
        strArr = 欲处理文本.match(/[A-Z]+/g) || [];
    } else if (type === 2) {
        strArr = 欲处理文本.match(/[a-z]+/g) || [];
    }
    return strArr.join('');
}

export function 文本区分_只取数字(欲处理文本: string): string {
    const strArr = 欲处理文本.match(/\d+/g) || [];
    return strArr.join('');
}

export function 判断文本(文本: string, 关键字: string | string[]): boolean {
    if (typeof 关键字 === 'string') {
        return 文本.includes(关键字);
    }
    return 关键字.some(item => 文本.includes(item));
}

export function 判断文本s(文本: string, 关键字: string[]): string {
    for (const item of 关键字) {
        if (文本.includes(item)) {
            return item;
        }
    }
    return "";
}

export function 文本_取手机号码(欲处理文本: string): string[] {
    return 欲处理文本.match(/1[3-9]\d{9}/g) || [];
}

export function 文本_取IP地址(欲处理文本: string): string[] {
    return 欲处理文本.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g) || [];
}

export function 文本_取电话号码(欲处理文本: string): string[] {
    return 欲处理文本.match(/\d{3,4}[\s,-]?\d{7,8}/g) || [];
}

export function 文本_取QQ号码(欲处理文本: string): string[] {
    return 欲处理文本.match(/[1-9][0-9]{4,10}/g) || [];
}

export function 文本_取邮政编码(欲处理文本: string): string[] {
    return 欲处理文本.match(/[1-9]\d{5}(?!\d)/g) || [];
}

export function 文本_取身份证号码(欲处理文本: string): string[] {
    return 欲处理文本.match(/[1-9][0-9,X]{14,17}/g) || [];
}

export function 文本_取双字节字符(欲处理文本: string): string {
    const result = 欲处理文本.match(/[^\x00-\xff]/g) || [];
    return result.join('');
}

export function 文本_取网址(欲处理文本: string): string[] {
    return 欲处理文本.match(/[a-zA-Z]+:\/\/[^\s]*/g) || [];
}

export function 文本_取IP跟端口(欲处理文本: string): string[] {
    return 欲处理文本.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{2,5}/g) || [];
}

export function 文本_取邮箱号码(欲处理文本: string): string[] {
    return 欲处理文本.match(/[a-z0-9.\-+_]{1,30}@[a-z0-9.\-+_]{1,30}\.[a-z]{1,10}/g) || [];
}

export function 文本_大小写翻转(欲处理文本: string): string {
    return 欲处理文本.split('').map(char => {
        if (char >= 'a' && char <= 'z') {
            return char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            return char.toLowerCase();
        }
        return char;
    }).join('');
}

export function 文本_是否为大写字母(欲处理文本: string): boolean {
    return /^[A-Z]+$/.test(欲处理文本);
}

export function 文本_是否为小写字母(欲处理文本: string): boolean {
    return /^[a-z]+$/.test(欲处理文本);
}

export function 文本_是否为字母(欲处理文本: string): boolean {
    return /^[a-zA-Z]+$/.test(欲处理文本);
}

export function 文本_是否为数字字母(欲处理文本: string): boolean {
    return /^[a-zA-Z0-9]+$/.test(欲处理文本);
}

export function 文本_是否为数字(欲处理文本: string): boolean {
    return /^\d+$/.test(欲处理文本);
}

export function 文本_取出现次数(欲处理文本: string, 欲查询的文本: string, 开始的位置: number = 0, 结束的位置: number = 0): number {
    const textToSearch = 欲处理文本.slice(开始的位置, 结束的位置 || 欲处理文本.length);
    return (textToSearch.match(new RegExp(欲查询的文本, 'g')) || []).length;
}

export function 文本_单词首字母大写(欲处理文本: string): string {
    return 欲处理文本.replace(/\b\w/g, char => char.toUpperCase());
}

export function 文本_填充空格_居中(欲处理文本: string, 填充目标长度: number): string {
    const padding = Math.max(0, 填充目标长度 - 欲处理文本.length);
    const padStart = Math.floor(padding / 2);
    const padEnd = padding - padStart;
    return ' '.repeat(padStart) + 欲处理文本 + ' '.repeat(padEnd);
}

/**
 * 将数组转换为字符串，用指定的分隔符分隔
 * @param {string[]} 数组 - 要转换的数组
 * @param {string} 分隔符 - 分隔符，默认为 "\r\n"
 * @returns {string} - 转换后的字符串
 */
export function 数组_转文本(数组: string[], 分隔符: string = "\r\n"): string {
    return 数组.join(分隔符);
}

/**
 * 判断文本是否以指定前缀开头
 * @param {string} 欲处理文本 - 要处理的文本
 * @param {string} 开头的文本 - 前缀文本
 * @returns {boolean} - 如果文本以指定前缀开头返回 true，否则返回 false
 */
export function 文本_判断文本前缀(欲处理文本: string, 开头的文本: string): boolean {
    return 欲处理文本.startsWith(开头的文本);
}

/**
 * 判断文本是否以指定后缀结尾
 * @param {string} 欲处理文本 - 要处理的文本
 * @param {string} 结尾的文本 - 后缀文本
 * @returns {boolean} - 如果文本以指定后缀结尾返回 true，否则返回 false
 */
export function 文本_判断文本后缀(欲处理文本: string, 结尾的文本: string): boolean {
    return 欲处理文本.endsWith(结尾的文本);
}

/**
 * 将文本中的 tab 符号（\t）转换为空格
 * @param {string} 欲处理文本 - 要处理的文本
 * @param {number} 转换的数量 - 转换的空格数量，默认为 8
 * @returns {string} - 转换后的文本
 */
export function 文本_TAB转空格(欲处理文本: string, 转换的数量: number = 8): string {
    return 欲处理文本.replace(/\t/g, ' '.repeat(转换的数量));
}

/**
 * 生成随机 IP 地址
 * @returns {string} - 随机生成的 IP 地址
 */
export function 文本_取随机IP(): string {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
}

/**
 * 从文本中批量取出指定前后缀之间的文本
 * @param {string} 欲处理文本 - 要处理的文本
 * @param {string} 前面的文本 - 前缀文本
 * @param {string} 后面的文本 - 后缀文本
 * @returns {string[]} - 取出的文本数组
 */
export function 文本_取中间_批量(欲处理文本: string, 前面的文本: string, 后面的文本: string): string[] {
    let index = 0;
    const list: string[] = [];
    while (true) {
        index = 欲处理文本.indexOf(前面的文本, index);
        if (index !== -1) {
            const lastIndex = 欲处理文本.indexOf(后面的文本, index + 前面的文本.length);
            if (lastIndex !== -1) {
                index += 前面的文本.length;
                const str = 欲处理文本.slice(index, lastIndex);
                if (str.length > 0) {
                    list.push(str);
                }
            } else {
                break;
            }
        } else {
            break;
        }
    }
    return list;
}