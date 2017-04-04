/**
 * 获取移动端访问设备的系统及版本号
 * @author dennis
 * @email
 * @since  17/3/29
 */

import Version from './version';

const ua = window.navigator.userAgent;
/* eslint-disable import/no-mutable-exports */
let result;
/* eslint-enable import/no-mutable-exports */
let matched;

if ((matched = ua.match(/Windows\sPhone\s(?:OS\s)?([\d.]+)/))) {
    // WindowsPhone
    result = {
        name: 'WindowsPhone',
        isWindowsPhone: true,
        version: new Version(matched[1])
    };
} else if (!!ua.match(/Safari/) && (matched = ua.match(/Android[\s/]([\d.]+)/))) {
    // Android (AndroidPhone + AndroidPad)
    result = ua.match(/Mobile\s+Safari/) ? {
        name: 'AndroidPhone',
        isAndroidPhone: true
    } : {
        name: 'AndroidPad',
        isAndroidPad: true
    };

    result.version = new Version(matched[1]);
    result.isAndroid = true;
} else if ((matched = ua.match(/(iPhone|iPad|iPod)/))) {
    // iOS (iPhone/iPod + iPad)
    const name = matched[1];

    if ((matched = ua.match(/OS\s([\d_.]+)\slike\sMac\sOS\sX/))) {
        result = {
            name,
            isIOS: true,
            isIPhoneOrIPod: (name === 'iPhone' || name === 'iPod'),
            isIPad: name === 'iPad',
            version: new Version(matched[1].split('_').join('.'))
        };
    }
}

if (!result || !result.name) {
    result = {
        name: 'Unknown',
        version: new Version('0.0.0')
    };
}

export default result;
