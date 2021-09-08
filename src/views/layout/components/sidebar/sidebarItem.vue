<!--
 * @Description: 默认注释
 * @Author: huangxin
 * @Date: 2021-08-04 14:47:34
 * @LastEditTime: 2021-09-07 18:04:05
-->
<template>
  <div class="menu-wrapper">
    <template v-for="item in routes">
		<div v-if="item.children" :key="item.id">
			<router-link
					v-if="
					item.children.length === 0 &&
						!item.children[0].children &&
						!item.alwaysShow
					"
					:to="{
					path: item.path + '/' + item.children[0].path
					}"
					:key="item.children[0].name"
				>
					<el-menu-item
					:index="item.path + '/' + item.children[0].path"
					:class="{ 'submenu-title-noDropdown': !isNest }"
					>
					<span v-if="item.children[0].meta && item.children[0].meta.title">{{
						item.children[0].meta.title
					}}</span>
					</el-menu-item>
				</router-link>

				<el-submenu v-else :index="item.path || item.name" :key="item.name">
					<template slot="title">
					<span v-if="item.meta && item.meta.title">{{ item.meta.title }}</span>
					</template>

					<template v-for="child in item.children">
						<div :key="child.id" v-if="!child.hidden">
							<sidebar-item
									:is-nest="true"
									class="nest-menu"
									v-if="child.children && child.children.length > 0"
									:routes="[child]"
									:key="child.path"
								></sidebar-item>

								<router-link
									v-else
									:to="{
									path: item.path + '/' + child.path,
									query: { id: child.id }
									}"
									:key="child.name"
								>
									<el-menu-item :index="item.path + '/' + child.path">
									<span v-if="child.meta && child.meta.title">{{
										child.meta.title
									}}</span>
									</el-menu-item>
								</router-link>
						</div>
				
					</template>
				</el-submenu>
		</div>
    
    </template>
  </div>
</template>

<script>
export default {
  name: "sidebarItem",
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  mounted() {}
};
</script>
<style>
</style>
