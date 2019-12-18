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
  > use
  ``` javascript
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

## CountUp 全局组件
  `npm i countup.js vue-countup-v2`
  > use
  ``` html
    <count-up :endVal="20000" :delay="1000" :options="options"/>
  ```
  ``` javascript
    options = {
      useEasing: true,   //宽松模式
      useGrouping: true, //是否使用千位分割
      separator: ',',    //千位分隔符
      decimal: '.',      //小数点分隔符
      prefix: '',        //前缀
      suffix: ''         //后缀
    }
  ```
## elementUI 主题
  > 主题工具
  `npm i element-theme`
  > 安装白垩主题
  `npm i element-theme-chalk -D`
  > use :
    执行 -i 初始化变量文件(element-variables.scss)
  ``` bash
    node_modules/.bin/et -i 
  ```
    执行 `node_modules/.bin/et` 生成`theme文件夹`
    最后在 `main.js` 中引用 `import '../theme/index.css'`