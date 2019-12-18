import Vue from 'vue'
import './icons'
import SvgIcon from '@/components/svgIcon'
import Echart from "@/components/Echarts";
import ICountUp from 'vue-countup-v2';

import './style/index.styl';
import "../theme/index.css";

// 全局组件
Vue.component('icon-svg', SvgIcon)
Vue.component('count-up', ICountUp)
Vue.component("echart", Echart);
