// import $ from 'jquery';

import '../css/index.css';
import '../css/index.less';

// eslint-disable-next-line
console.log('index.js文件被加载了~'); // console.log($);

function add(a, b) {
  return a + b;
}

add(1, 2); // import { mul } from './test';

// document.getElementById('btn').onclick = function () {
//   // 懒加载~：当文件需要使用时才加载~
//   // 预加载 prefetch：会在使用之前，提前加载js文件
//   // 正常加载可以认为是并行加载（同一时间加载多个文件）
//   // 预加载 prefetch：等其他资源加载完毕，浏览器空闲了，再偷偷加载资源
//   import(
//   /* webpackChunkName: 'test', webpackPrefetch: true */
//     './test'
//   ).then((_ref) => {
//     const { mul } = _ref;
//     console.log(mul(4, 5));
//   });
// };

/*
  1. eslint不认识 window、navigator全局变量
    解决：需要修改package.json中eslintConfig配置
      "env": {
        "browser": true // 支持浏览器端全局变量
      }
   2. sw代码必须运行在服务器上
      --> nodejs
      -->
        npm i serve -g
        serve -s build 启动服务器，将build目录下所有资源作为静态资源暴露出去
*/
// 注册serviceWorker
// 处理兼容性问题

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(() => { // console.log('sw注册成功了~');
    }).catch(() => { // console.log('sw注册失败了~');
    });
  });
}
