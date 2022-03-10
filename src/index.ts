import _ from 'lodash';

const a = 1;
const b = 2;

// 使用 箭头函数 ,在不支持 ES6的环境下 无法正常运行
export const test = () => {
  console.log('lodash:', _);
};

export let hellWorld = 'hi';

export default test;
