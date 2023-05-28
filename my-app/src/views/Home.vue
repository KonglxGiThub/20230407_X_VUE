<template>
  <div class="main">
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
          <el-card class="box-card" style="margin-top: 20px">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column
                v-for="(val, key) in tableLabel"
                :prop="key"
                :label="val"
                :key="key"
               
              />

              <!-- <el-table-column prop="date" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址">
              </el-table-column>  -->
            </el-table></el-card
          >
        </div></el-col
      >
      <el-col :span="16"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      tableLabel: {
        name: "姓名",
        date: "日期",
        address: "地址",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: " 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: " 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: " 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: " 1516 弄",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.main {
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
}
</style>