import resolve from '@rollup/plugin-node-resolve'; //可以告诉 Rollup 如何查找外部模块
import commonjs from '@rollup/plugin-commonjs'; // 使得rollup.js编译支持npm模块和CommonJS模块方式
import babel from '@rollup/plugin-babel'; // 借助 babel 对高级语法进行编译
import typescript from '@rollup/plugin-typescript'; // 处理 typescript

import pkg from './package.json';

// 以下内容会添加到打包结果中
const footer = `
if(typeof window !== 'undefined') {
  window._Dry_VERSION_ = '${pkg.version}'
}`;

module.exports = {
  // 入口文件
  input: ['./src/index.ts'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      footer,
    },
    {
      file: pkg.module,
      format: 'esm',
      footer,
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'rollup_package_demo',
      footer,
    },
  ],
  plugins: [
    // 引入resolve 插件，打包时 合并npm 包
    resolve(),
    // 支持cjs 模块系统的 的库
    commonjs(),
    typescript(),
    babel(),
  ],
  // 指出应将哪些模块视为外部模块
  external: ['lodash'],
};
