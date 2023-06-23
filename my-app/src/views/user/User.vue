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
        <el-form-item label="创建日期" prop="createTime">
          <el-date-picker
            v-model="model.createTime"
            type="date"
            placeholder="选择日期" format="yyyy-MM-dd HH:mm:ss"
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
      <el-button type="primary" @click="handeleAdd">+新增</el-button>
    </div>
    <el-card class="box-card" style="margin-top: 20px">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        border
        stripe
        @selection-change="handleSelectionChange"
      >
        <!-- <div v-for="(val, key) in tableLabel" :key="key">
          <div v-if="key === 'a'">
            <el-table-column type="selection" :prop="key" :label="val" />
          </div>
          <div v-else><el-table-column :prop="key" :label="val" /></div>
        </div> -->
        <el-table-column
          v-for="(val, key) in tableLabel"
          :type="key === 'index' ? 'selection' : null"
          :prop="key"
          :label="val"
          :key="key"
        />
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button
              @click="handleDetails(scope.row)"
              type="text"
              size="small"
              >查看</el-button
            >
            <el-button @click="handleEdit(scope.row)" type="text" size="small"
              >编辑</el-button
            >
          </template>
        </el-table-column>
        <!-- <el-table-column prop="date" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址">
              </el-table-column>  -->
      </el-table>
      <div class="block">
        <span class="demonstration"></span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-sizes="[5, 10, 20, 50]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination></div
    ></el-card>
  </div>
</template>
 <script>
//import { getData } from "@/api/user.js";
import http from "@/utils/request";
export default {
  name: "User",
  data() {
    return {
      title: "新增",
      multipleSelection: [],
      total: 0,
      pageNum: 0,
      pageSize: 5,

      model: {
        userName: "",
        password: "",
        nickName: "",
        sex: "",
        createTime: "",
      },
      tableLabel: {
        index: "",
        nickName: "昵称",

        userName: "姓名",
        phone: "电话",
        address: "地址",
        createTime: "创建日期",
      },
      tableData: [
        //   {
        //     date: "2016-05-02",
        //     name: "王小虎",
        //     address: " 1518 弄",
        //   },
        //   {
        //     date: "2016-05-04",
        //     name: "王小虎",
        //     address: " 1517 弄",
        //   },
        //   {
        //     date: "2016-05-01",
        //     name: "王小虎",
        //     address: " 1519 弄",
        //   },
        //   {
        //     date: "2016-05-03",
        //     name: "王小虎",
        //     address: " 1516 弄",
        //   },
      ],
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

        createTime: [
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
  created() {
    this.getData();
  },
  methods: {
    getData() {
      http
        .get(
          "/myserver/user/page?pageNum=" +
            this.pageNum +
            "&pageSize=" +
            this.pageSize
        )
        .then((res) => {
          console.log(res);
          this.tableData = res.data.records;
          this.total = res.data.total;
        });
    },

    submit() {
      this.$refs.model.validate((valid) => {
        if (valid) {
          //验证通过才进行数据请求
          this.model;
        }
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getData();
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getData();
    },
    //当选择项发生变化时会触发该事件,获取选中行的数据
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleDetails(val) {
      this.model = Object.assign({}, val);
      this.dialogVisible = true;
    },
    handleEdit(val) {
      this.model = Object.assign({}, val);
debugger
      this.dialogVisible = true;
    },
    handeleAdd() {
      this.dialogVisible = true;
    },
  },
};
</script>
<style lang="less" scoped>
.el-el-input {
  width: 80%;
}
</style>