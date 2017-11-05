/**
 * 获取浏览设备相关信息的工具方法
 * @exports lib/env
 * @author paian
 * @email  pai_an@qq.com
 * @since  17/3/29
 */

import pkg from '../package.json';
import Version from './version';
import app from './app';
import pcBrowser from './pc-browser';
import pcSystem from './pc-system';
import mobileBrowser from './mobile-browser';
import mobileSystem from './mobile-sytem';
import getDPR from './getDPR';

const isMobile = mobileSystem !== 'Unknown';

/**
 * @type {object}
 * @property {string} libVersion - 当前lib的版本号
 * @property {function} Version - 版本管理方法
 * @app {object} app -  返回是否在APP容器中的相关信息
 * @system {object} system - 返回当前浏览者所用设备的操作系统相关信息
 * @browser {object} browser - 返回当前浏览者所用设备的浏览器相关信息
 */
export default {
    libVersion: pkg.version,
    dpr: getDPR(),
    Version,
    app,
    system: isMobile ? mobileSystem : pcSystem,
    browser: isMobile ? mobileBrowser : pcBrowser
};
