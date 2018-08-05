<template>
    <div class="proxy-cost-box">
        <header>
            <h2>东时教育-资金入账信息</h2>
        </header>
        <div class="proxy-ctn">
            <el-form class="proxy-search">
                <el-form-item label="招生老师">
                    <el-select name="enroller_id" v-model="enroller_id">
                        <el-option disabled value="x" label="请选择"></el-option>
                        <el-option v-for="(item,index) in enroller_list" :label="item.name" :value="item.id" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="学生姓名">
                    <el-input style="width:217px;" v-model="student_name" placeholder="请填写学生姓名"></el-input>
                </el-form-item>
                <el-form-item label="报名时间">
                    <el-date-picker style="width:217px;" v-model="enter_time" type="date" placeholder="年月日"></el-date-picker>  
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" round>快速查询</el-button>
                </el-form-item>
            </el-form>
            <div class="info-list-box">
                <div class="info-filter">
                    <el-form>
                        <el-form-item label="缴费状态" class="jf-state">
                            <el-radio v-model="jf_state" label="1">学费已结清</el-radio>
                            <el-radio v-model="jf_state" label="0">学费未结清</el-radio>
                        </el-form-item>
                        <el-form-item label="入账状态" class="rz-state">
                            <el-radio v-model="rz_state" label="1">已发放</el-radio>
                            <el-radio v-model="rz_state" label="0">未发放</el-radio>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="info-list-wrapper">
                    <ul class="list-title">
                        <li>姓名</li>
                        <li>入学时间</li>
                        <li>入账金额</li>
                        <li>入账日期</li>
                        <li>招生老师</li>
                        <li>咨询老师</li>
                        <li>发放金额</li>
                        <li>发放时间</li>
                        <li>操作</li>
                    </ul>
                    <ul class="list-box">
                        <li @click="dialogShow" v-for="(item,index) in [1,2,3,4]" :key="index">{{item}}</li>
                    </ul>
                    <div class="all_money">总计：￥{{all_money}}</div>
                    <div class="list-footer">
                        <el-pagination
                            background
                            :page-sizes="[15, 30, 45, 60]"
                            :page-size="15"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="342">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog title="提点明细" :visible.sync="dialogTableVisible">
            详细信息
        </el-dialog>
    </div>
</template>
<script>
import { mapState } from "vuex";
import {data1} from "@/mock"
export default {
  name: "ProxyCost",
  data() {
    return {
      enroller_id: "x",
      student_name: "",
      enter_time: "",
      jf_state: "1",
      rz_state: "1",
      dialogTableVisible:false
    };
  },
  computed: {
    ...mapState(["enroller_list"]),
    all_money() {
      let n = 100000;
      // this.enroller_list.forEach(item => {
      //     n+=item.number
      // })
      return n;
    }
  },
  methods:{
      dialogShow(){
          this.dialogTableVisible = true;
      }
  },
  mounted(){
      // console.log(data1);
  }
};
</script>
<style scoped>

</style>

