import Vue from 'vue'
import ICountUp from 'vue-countup-v2'
import './icons'
import SvgIcon from '@/components/svgIcon'
import Echart from "@/components/Echarts"
import UploadImg from '@/components/upload/uploadImg'

import './style/index.styl';
import "../theme/index.css";

// 全局组件
Vue.component('icon-svg', SvgIcon)
Vue.component('count-up', ICountUp)
Vue.component("echart", Echart)
Vue.component("upload-img", UploadImg)
