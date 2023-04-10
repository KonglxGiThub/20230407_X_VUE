<template>
  <div>
    <el-container>
      <el-aside width="auto"><CommonAside></CommonAside></el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          main
          <!-- 子路由出口 -->
          <!-- 子路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
 <script>
 import CommonAside from '@/components/CommonAside.vue';
export default {
  //name:"Main",
  components:{
    CommonAside
  },
  data() {
    return {};
  },
};
</script>
 