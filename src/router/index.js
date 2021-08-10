/*
 * @Description: 默认注释
 * @Author: huangxin
 * @Date: 2021-08-04 14:47:34
 * @LastEditTime: 2021-08-06 10:27:11
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
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
		redirect: '/dashboard/analysis?id=1000'
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
