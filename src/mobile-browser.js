/**
 * 获取移动端访问容器及版本号
 * @author paian
 * @email  pai_an@qq.com
 * @since  17/3/29
 */

const ua = window.navigator.userAgent;
/* eslint-disable import/no-mutable-exports */
let browser;
/* eslint-enable import/no-mutable-exports */

const matched1 = ua.match(/(?:UCWEB|UCBrowser\/)([\d.]+)/);
const matched2 = ua.match(/MQQBrowser\/([\d.]+)/);
const matched3 = ua.match(/(?:Firefox|FxiOS)\/([\d.]+)/);
const matched4 = ua.match(/MSIE\s([\d.]+)/);
const matched5 = ua.match(/IEMobile\/([\d.]+)/);
const matched6 = ua.match(/(?:Chrome|CriOS)\/([\d.]+)/);
const matched7 = ua.match(/Android[\s/]([\d.]+)/);
const matched8 = ua.match(/Version\/([\d.]+)/);
const matched9 = ua.match(/OS ([\d_.]+) like Mac OS X/);

if (matched1) {
    browser = {
        name: 'UC',
        isUC: true,
        version: matched1[1]
    };
} else if (matched2) {
    browser = {
        name: 'QQ',
        isQQ: true,
        version: matched2[1]
    };
} else if (matched3) {
    browser = {
        name: 'Firefox',
        isFirefox: true,
        version: matched3[1]
    };
} else if (matched4 || matched5) {
    if (matched4) {
        browser = {
            name: 'IE',
            isIE: true,
            version: matched4[1]
        };
    } else {
        browser = {
            name: 'IE',
            isIE: true,
            version: matched5[1]
        };
    }
    if (ua.match(/Android|iPhone/)) {
        browser.isIELikeWebkit = true;
    }
} else if (matched6) {
    browser = {
        name: 'Chrome',
        isChrome: true,
        version: matched6[1]
    };

    if (ua.match(/Version\/[\d+.]+\s*Chrome/)) {
        browser.name = 'ChromeWebView';
        browser.isChromeWebView = true;
    }
} else if (!!ua.match(/Safari/) && matched7) {
    browser = {
        name: 'AndroidDefault',
        isAndroidDefault: true,
        version: matched7[1]
    };
} else if (ua.match(/iPhone|iPad|iPod/)) {
    if (ua.match(/Safari/) && matched8) {
        browser = {
            name: 'Safari',
            isSafari: true,
            version: matched8[1]
        };
    } else if (matched9) {
        browser = {
            name: 'iOSWebView',
            isIOSWebView: true,
            version: matched9[1].replace(/_/g, '.')
        };
    }
}

if (browser && (browser.isChromeWebView || browser.isIOSWebView)) {
    browser.isWebView = true;
}

/* istanbul ignore if */
if (!browser) {
    browser = {
        name: 'unknown',
        version: '0.0.0'
    };
}

export default browser;
