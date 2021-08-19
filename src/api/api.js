/*
 * @Description: 默认注释
 * @Author: huangxin
 * @Date: 2021-06-10 11:09:54
 * @LastEditTime: 2021-08-17 11:37:48
 */
import axios from 'axios';
import { Message } from 'element-ui'
import _this from '../main'
let base = 'http://bi.zydp.net';
axios.interceptors.response.use(
	(response) => {
		if (response.data.code == '403') {
			localStorage.removeItem("user");
			localStorage.removeItem("router");
			_this.$router.push("/login");
		} else {
			return response;
		}

	},
	(error) => {
		switch (error.response.status) {
			case 401:
				Message({
					message: "登录名或密码错误",
					type: "error"
				});
				break
			case 403:
				Message({
					message: "登录过期,请重新登录",
					type: "error"
				});
				localStorage.removeItem("user");
				localStorage.removeItem("router");
				_this.$router.push("/login");
		}
	}
);
export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data) };
export const getMenuList = params => { return axios.get(`${base}/menu/`, params).then(res => res.data) };
export const getApiMenuId = params => { return axios.get(`${base}/api/${params}`).then(res => res.data) };
export const getCharData = params => {
	if (params.method == 'get') {
		return axios.get(`${base}/${params.api_url}`).then(res => res.data)
	} else {
		return axios.post(`${base}/${params.api_url}`).then(res => res.data)
	}
};

// export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

// export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

// export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

// export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

// export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

// export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };