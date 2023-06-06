<template>
  <div class="tag-content">
    <el-tag
      v-for="item in tagList"
      :key="item.label"
      :closable="item.name !== 'home'"
      :effect="item.name === $route.name ? 'dark' : 'plain'"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tagList: (state) => state.menu.breadcrumbList,//这里实际和面包屑是一个数据
    }),
  },
};
</script>