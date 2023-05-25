export default {
    state: {
        isCollapse: false //用于控制菜单的展开收起
    },
    mutations: {
        //用于控制菜单的展开收起
        handleCollapse(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}