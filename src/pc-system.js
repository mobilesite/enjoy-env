/**
 * 获取PC操作系统，若是Windows还会具体到细化版本
 * @author dennis
 * @email
 * @since  17/3/29
 */

import Version from './version';

const ua = window.navigator.userAgent;
const platform = window.navigator.platform;
/* eslint-disable import/no-mutable-exports */
let result = {};
/* eslint-enable import/no-mutable-exports */

// todo 测试
if (platform.indexOf('Win') > -1) {
    if (ua.indexOf('Windows NT 5.0') > -1 > -1) {
        result = {
            name: 'Windows2000',
            version: '5.0'// 为了便于版本比较，规定它为5.0，因为Windows 2000的内部版本号就是Windows NT 5.0
        };
    } else if (ua.indexOf('Windows NT 5.1') > -1 > -1) {
        result = {
            name: 'WindowsXP',
            version: '5.1'
        };
    } else if (ua.indexOf('Windows NT 5.2') > -1 > -1) {
        result = {
            name: 'Windows2003',
            version: '5.2'
        };
    } else if (ua.indexOf('Windows NT 6.0') > -1 > -1) {
        result = {
            name: 'WindowsVista',
            version: '6.0'
        };
    } else if (ua.indexOf('Windows NT 6.1') > -1 || ua.indexOf('Windows 7') > -1) {
        result = {
            name: 'Windows7',
            version: '7'
        };
    } else if (ua.indexOf('Windows NT 6.2') > -1 || ua.indexOf('Windows 8') > -1) {
        result = {
            name: 'Windows8',
            version: '8'
        };
    } else if (ua.indexOf('Windows NT 6.3') > -1 || ua.indexOf('Windows 8.1') > -1) {
        result = {
            name: 'Windows8.1',
            version: '8.1'
        };
    } else if (ua.indexOf('Windows NT 10.0') > -1 || ua.indexOf('Windows 10') > -1) {
        result = {
            name: 'Windows10',
            version: '10'
        };
    }
} else if (platform.indexOf('Mac') > -1) {
    result = {
        name: 'Mac'
    };
} else if (platform.indexOf('X11') > -1) {
    result = {
        name: 'Unix'
    };
} else if (platform.indexOf('Linux') > -1) {
    result = {
        name: 'Linux'
    };
}

if (result.name) {
    result.name = 'Unknown';
}

if (!result.version) {
    result.version = new Version('0.0.0');// 为了保证与mobile设备相应数据的一致性，这里统一使用new Version('0.0.0')，以便于通过设备进行导出
}

export default result;
