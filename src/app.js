/**
 * 判别用户是在何种Native APP容器中访问当前页面
 * @author paian
 * @email  pai_an@qq.com
 * @since  17/3/29
 */

/**
 * 待检测的APP名称和UserAgent标志列表
 * @type {Object}
 * @property {String} name - APP名称，如Weibo/Weixin等
 * @property {String} ua - APP的UserAgent标志
 */
const appList = [
    {
        name: 'WeChat',
        ua: 'MicroMessenger'
    },
    {
        name: 'Weibo',
        ua: 'Weibo'
    }
];
const ua = window.navigator.userAgent;

/**
 * @type {Object}
 * @memberof lib.enjoyEnv
 * @property {String} name - APP名称，如Weibo/Weixin／QSChou等
 * @property {Boolean} isWeChat - 是否微信
 * @property {Boolean} isWeibo - 是否微博
 */
const result = {};

for (let n = 0, len = appList.length; n < len; n++) {
    const itemName = appList[n].name;
    const itemUa = appList[n].ua;
    if (ua.match(new RegExp(itemUa, 'i'))) {
        result.name = itemName;
        result[`is${itemName}`] = true;
        break;
    }
}

if (!result.name) {
    result.name = 'Unknown';
    result.isUnknown = true;
} else {
    result.isUnknown = false;
}

export default result;
