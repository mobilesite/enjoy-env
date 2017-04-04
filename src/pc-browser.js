/**
 * 获取PC浏览器和版本号
 * @author dennis
 * @email
 * @since  17/3/29
 */

import Version from './version';

/**
 * 待检测的PC浏览器名称和UserAgent标志列表
 * @type {Object}
 * @property {String} name - PC浏览器名称
 * @property {String} reg - 匹配该PC浏览器的正则表达式
 */
const browserList = [
    {
        name: 'Chrome',
        reg: /Chrome\/([\d.]+)/
    },
    {
        name: 'Safari',
        reg: /Version\/([\d.]+).*Safari/
    },
    {
        name: 'IE',
        reg: /MSIE\s([\d.]+)/
    },
    {
        name: 'Chrome',
        reg: /Firefox\/([\d.]+)/
    },
    {
        name: 'Firefox',
        reg: /Chrome\/([\d.]+)/
    },
    {
        name: 'Opera',
        reg: /Opera.([\d.]+)/
    }
];
const ua = window.navigator.userAgent;
const len = browserList.length;
/* eslint-disable import/no-mutable-exports */
let result = {};
/* eslint-enable import/no-mutable-exports */
let matched;

for (let n = 0; n < len; n++) {
    if (matched = ua.match(browserList[n].reg)) {
        const itemName = browserList[n].name;
        result = {
            name: itemName,
            version: new Version(matched[1].split('_').join('.'))
        };
        result[`is${itemName}`] = true;
    }
}

if (!result || !result.name) {
    result = {
        name: 'Unknown',
        version: new Version('0.0.0')
    };
}

export default result;
