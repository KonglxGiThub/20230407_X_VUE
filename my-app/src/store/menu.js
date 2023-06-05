export default {
    state: {
        isCollapse: false, //用于控制菜单的展开收起
        breadcrumbList: [
            //默认的数据
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
            }
        ]//面包屑的数据
    },
    mutations: {
        //用于控制菜单的展开收起
        handleCollapse(state) {
            state.isCollapse = !state.isCollapse
        },
        //更新面包屑数据
        breadcrumbChange(state, val) {
            //判断添加的数据是否是首页
            if (val.name !== 'name') {
                const index = state.breadcrumbList.findIndex(item => item.name === val.name)
                //如果不存在就添加道面包屑数组里
                if (index === -1) {
                    state.breadcrumbList.push(val)
                }
            }

        }
    }
}