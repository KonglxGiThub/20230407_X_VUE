import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import User from '@/views/user/User.vue'
import Main from '@/views/Main.vue'
Vue.use(VueRouter)

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  //主路由
  {
    path: '/',
    component: Main,
    redirect: '/home',
    children: [
      //子路由
      { path: 'home', name: "home", component: Home },//首页
      { path: 'user', name: "user", component: User },//用户管理
      { path: 'role', name: "role", component: () => import("@/views/Role.vue") },//角色管理
      { path: 'menu', name: "menu", component: () => import("@/views/Menu.vue") },//菜单管理管理
    ]
  },

]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。挂载到main.js的根节点
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
// const app = new Vue({
//   router
// }).$mount('#app')
// 获取原型对象push函数
const originalPush = VueRouter.prototype.push

// 获取原型对象replace函数
const originalReplace = VueRouter.prototype.replace

// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 修改原型对象中的replace函数
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

export default router