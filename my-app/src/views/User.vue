<template>
  <div class="user">
    <el-dialog :title="title" :visible.sync="dialogVisible" width="35%">
      <!-- 用户表单信息 -->
      <el-form
        ref="model"
        :model="model"
        :inline="true"
        label-width="80px"
        :rules="rules"
      >
        <el-form-item label="用户名称" prop="userName">
          <el-input v-model="model.userName"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称" prop="nickName">
          <el-input v-model="model.nickName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="model.sex" placeholder="性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="生日" prop="birthday">
          <el-date-picker
            v-model="model.birthday"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    <div class="user-header">
      <el-button type="primary" @click="dialogVisible = true">+新增</el-button>
    </div>
  </div>
</template>
 <script>
export default {
  name: "user",
  data() {
    return {
      title: "新增",
      model: {
        userName: "",
        password: "",
        nickName: "",
        sex: "",
        birthday: "",
      },
      dialogVisible: false,
      rules: {
        userName: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
        nickName: [
          { required: true, message: "请输入用户昵称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],

        birthday: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    submit() {
      this.$refs.model.validate((valid) => {
        if (valid) {
          //验证通过才进行数据请求
           this.model
        }  
      });
    },
  },
};
</script>
<style lang="less" scoped>
.el-el-input {
  width: 80%;
}
</style>