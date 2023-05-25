import Vue from 'vue'
import Vuex from 'vuex'
import menu from './menu'

Vue.use(Vuex)

//创建vuex的实例
export default new Vuex.Store({
    modules: {
        menu,

    }
})