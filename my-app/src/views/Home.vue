<template>
  <el-row>
    <el-col :span="8"
      ><div class="grid-content bg-purple">
        <el-card class="box-card">
          <div class="user-content">
            <img src="@/assets/img/user.jpg" class="user-img" />
            <div class="user-info">
              <p class="user-name">Admin</p>
              <p class="user-access">超级管理员</p>
            </div>
          </div>
          <div class="login-content">
            <p>上次登录的时间:<span>2023-02-25</span></p>
            <p>上次登录的地点:<span>西安</span></p>
          </div>
        </el-card>
      </div></el-col
    >
    <el-col :span="16"><div class="grid-content bg-purple-light"></div></el-col>
  </el-row>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.user-content {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid#ccc;
  display: flex;
  align-items: center; //垂直居中
  .user-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
  }
  .user-info {
    .user-name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .user-access {
      color: #999999;
    }
  }
}
.login-content {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999999;
    span {
      color: #666666;
      margin-left: 60px;
    }
  }
}
</style>