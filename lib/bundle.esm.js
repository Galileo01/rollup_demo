Object.defineProperty(exports, "__esModule", { value: true });
exports.hellWorld = exports.test = void 0;
const tslib_1 = require("tslib");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
// 使用 箭头函数 ,在不支持 ES6的环境下 无法正常运行
const test = () => {
    console.log('lodash:', lodash_1.default);
};
exports.test = test;
exports.hellWorld = 'hi';
exports.default = exports.test;

if(typeof window !== 'undefined') {
  window._Dry_VERSION_ = '1.0.0'
}
