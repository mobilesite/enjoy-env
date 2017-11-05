/**
 * 获取移动端访问容器及版本号
 * @author paian
 * @email  pai_an@qq.com
 * @since  17/3/29
 */

import Version from './version';

const ua = window.navigator.userAgent;
/* eslint-disable import/no-mutable-exports */
let browser;
/* eslint-enable import/no-mutable-exports */
let matched;

if ((matched = ua.match(/(?:UCWEB|UCBrowser\/)([\d.]+)/))) {
    browser = {
        name: 'UC',
        isUC: true,
        version: new Version(matched[1])
    };
} else if ((matched = ua.match(/MQQBrowser\/([\d.]+)/))) {
    browser = {
        name: 'QQ',
        isQQ: true,
        version: new Version(matched[1])
    };
} else if ((matched = ua.match(/(?:Firefox|FxiOS)\/([\d.]+)/))) {
    browser = {
        name: 'Firefox',
        isFirefox: true,
        version: new Version(matched[1])
    };
} else if ((matched = ua.match(/MSIE\s([\d.]+)/)) || (matched = ua.match(/IEMobile\/([\d.]+)/))) {
    browser = {
        name: 'IE',
        isIE: true,
        version: new Version(matched[1])
    };

    if (ua.match(/Android|iPhone/)) {
        browser.isIELikeWebkit = true;
    }
} else if ((matched = ua.match(/(?:Chrome|CriOS)\/([\d.]+)/))) {
    browser = {
        name: 'Chrome',
        isChrome: true,
        version: new Version(matched[1])
    };

    if (ua.match(/Version\/[\d+.]+\s*Chrome/)) {
        browser.name = 'ChromeWebView';
        browser.isChromeWebView = true;
    }
} else if (!!ua.match(/Safari/) && (matched = ua.match(/Android[\s/]([\d.]+)/))) {
    browser = {
        name: 'AndroidDefault',
        isAndroidDefault: true,
        version: new Version(matched[1])
    };
} else if (ua.match(/iPhone|iPad|iPod/)) {
    if (ua.match(/Safari/) && (matched = ua.match(/Version\/([\d.]+)/))) {
        browser = {
            name: 'Safari',
            isSafari: true,
            version: new Version(matched[1])
        };
    } else if ((matched = ua.match(/OS ([\d_.]+) like Mac OS X/))) {
        browser = {
            name: 'iOSWebView',
            isIOSWebView: true,
            version: new Version(matched[1].replace(/_/g, '.'))
        };
    }
}

if (browser.isChromeWebView || browser.isIOSWebView) {
    browser.isWebView = true;
}

/* istanbul ignore if */
if (!browser) {
    browser = {
        name: 'unknown',
        version: new Version('0.0.0')
    };
}

export default browser;
