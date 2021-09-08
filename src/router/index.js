/*
 * @Description: 默认注释
 * @Author: huangxin
 * @Date: 2021-08-04 14:47:34
 * @LastEditTime: 2021-09-08 15:36:57
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Analysis from '@/views/analysis/index.vue';
Vue.use(Router)
var constantRouterMap = []

export const defaultRoutMap = [
	{
		path: '/login',
		component: Login,
		name: 'login'
	},
	{
		path: '/',
		redirect: '/finance/canal?id=2001'
	},
	{
		path: '/analysis',
		component: Analysis,
		name: 'analysis'
	}

	//   { path: '*', redirect: '/404', hidden: true }
]

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
	if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
	return originalPush.call(this, location).catch(err => err)
}
export default new Router({
	routes: defaultRoutMap

})
