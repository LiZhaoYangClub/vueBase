# lzy-admin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 全屏插件 screenfull
 `npm install screenfull`
  ``` bash
  # use
  const screenfull = require('screenfull');
  # 页面全屏 
  function emitFun() {
    if (screenfull.isEnabled) {
      screenfull.request();
    };
  }
  # 元素全屏
  function emitFun() {
    const element = document.getElementById('target');
    if (screenfull.isEnabled) {
      screenfull.request(element);
    };
  }
  ```