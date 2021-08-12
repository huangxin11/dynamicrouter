/*
 * @Description: 默认注释
 * @Author: huangxin
 * @Date: 2021-08-04 14:47:34
 * @LastEditTime: 2021-08-11 14:33:27
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import '@/utils/global'//全局
import './promission'//这里进行路由后台获取的模拟
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css
import echarts from 'echarts'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(echarts)
Vue.prototype.$echarts = echarts


/* eslint-disable no-new */
var vue = new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})

export default vue
