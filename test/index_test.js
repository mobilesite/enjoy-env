/**
 * assert(value[, message]) 相当于assert.ok(value[, message])
 * assert.strictEqual(actual, expected[, message])
 * assert.equal(actual, expected[, message])
 * assert.notEqual(actual, expected[, message])
 * assert.strictEqual(actual, expected[, message])
 * assert.notStrictEqual(actual, expected[, message])
 * assert.deepEqual(actual, expected[, message])
 * assert.notDeepEqual(actual, expected[, message]) // 判断两个对象是否不是deeply equal
 * assert.deepStrictEqual(actual, expected[, message])
 * assert.notDeepStrictEqual(actual, expected[, message])
 * assert.throws(block[, error][, message])
 * assert.doesNotThrow(block[, error][, message])
 * assert.fail(actual, expected, message, operator)
 * assert.ifError(value) // Throws value if value is truthy.
 */
import chai from 'chai'; // assert是Node.js自带的断言模块
import { libVersion, app, system, browser, dpr } from '../src/index.js';

import jsdom from 'mocha-jsdom';

chai.should();

describe('enjoy-env', () => {
    describe('libVersion', () => {
        it('返回当前库的版本号正确', () => {
            libVersion.should.equal('1.0.1');
        });
    });

    describe('app', () => {
        const arr = [{
            name: 'WeChat',
            ua: 'MicroMessenger'
        },
        {
            name: 'Weibo',
            ua: 'Weibo'
        }];

        arr.map((item) => {
            before(() => {
                /* eslint-disable no-undef */
                global.window = {
                    navigator: {
                        userAgent: item.ua
                    }
                };
                thirdapp = rerequire('../src/thirdapp').default;
                /* eslint-enable no-undef */
            });

            it(`在${item.name}容器中`, () => {
                app[`is${item.name}`].should.equal(true);
            });
            return false;
        });
    });
});
