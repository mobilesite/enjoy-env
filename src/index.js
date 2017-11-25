/**
 * 获取浏览设备相关信息的工具方法
 * @exports lib/enjoyEnv
 * @author paian
 * @email  pai_an@qq.com
 * @since  17/3/29
 */

import pkg from '../package.json';
import appInfo from './app';
import pcBrowser from './pc-browser';
import pcSystem from './pc-system';
import mobileBrowser from './mobile-browser';
import mobileSystem from './mobile-sytem';
import getDPR from './getDPR';

const isMobile = mobileSystem !== 'Unknown';

export const libVersion = pkg.version;
export const dpr = getDPR();
export const app = appInfo;
export const system = isMobile ? mobileSystem : pcSystem;
export const browser = isMobile ? mobileBrowser : pcBrowser;

/**
 * @type {object}
 * @property {string} libVersion - 当前lib的版本号
 * @property {object} dpr -  返回是设备像素比
 * @property {object} app -  返回是否在APP容器中的相关信息
 * @property {object} system - 返回当前浏览者所用设备的操作系统相关信息
 * @property {object} browser - 返回当前浏览者所用设备的浏览器相关信息
 */
export default {
    libVersion,
    dpr,
    app,
    system,
    browser
};
