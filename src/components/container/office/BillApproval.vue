<template>
    <div class="bill-box">
        <header>
            <h2>东时教育-出账执行</h2>
        </header>
        <div class="now-bill-state">
            <h3>出账状态</h3>
            <ul>
                <li>新增支出事项</li>
                <li>待支出事项</li>
                <li>已支出事项</li>
            </ul>
        </div>
        <div class="blii-list">
            <h3>出账列表</h3>
            <el-form>
                <div class="list-row-1">
                    <el-form-item label="费用类型">
                        <el-select name="cost-type" v-model="search_info.cost_type">
                             <el-option value="0" label="购买电脑"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="支出日期">
                        <el-date-picker v-model="search_info.pay_time" type="date" placeholder="年月日"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="报销人">
                        
                        <el-input v-model="search_info.person" placeholder="姓名" style="width:217px;border:none;">
                            <i class="el-icon-search" slot="prefix" style="color:red;"></i>
                        </el-input>
                    </el-form-item>
                </div>
                <div class="list-row-2">
                    <el-form-item label="支出方式">
                        <el-radio v-model="search_info.pay_method" label="0">
                            <el-select name="bank_type" v-model="search_info.bank_type"  :disabled="search_info.pay_method!=0">
                                <el-option value="0" label="网上银行"></el-option>
                            </el-select>
                        </el-radio>
                        <el-radio v-model="search_info.pay_method"  label="1">
                            <el-select name="platform_type" v-model="search_info.platform_type" :disabled="search_info.pay_method!=1">
                                <el-option value="0" label="支出平台"></el-option>
                            </el-select>
                        </el-radio>
                        <el-radio v-model="search_info.pay_method" label="2">
                            <el-input v-model="search_info.diy_pay" :disabled="search_info.pay_method!=2"></el-input>
                        </el-radio>
                    </el-form-item>
                </div>
                <div class="list-row-3">
                    <el-form-item label="支出金额">
                        <el-date-picker
                            v-model="search_info.time_range"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="处理状态">
                        <el-radio v-model="search_info.handle_state" label="已通过"></el-radio>
                        <el-radio v-model="search_info.handle_state" label="已驳回"></el-radio>
                    </el-form-item>
                    <el-button type="danger" round>快速查询</el-button>
                </div>
            </el-form>
            <div class="list-table">
                <el-table :data="tableData" style="width: 100%;" :default-sort = "{prop: 'date', order: 'descending'}">
                    <el-table-column prop="date" label="支出日期" width="120" sortable>
                    </el-table-column>
                    <el-table-column prop="bx_person" label="报销人" width="100">
                    </el-table-column>
                    <el-table-column prop="bx_type" label="费用类型" width="120">
                    </el-table-column>
                    <el-table-column prop="bx_info" label="费用明细">
                    </el-table-column>
                    <el-table-column prop="pay_money" label="支出金额" sortable width="100">
                    </el-table-column>
                    <el-table-column prop="state" label="处理状态" sortable width="180">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <i class="el-icon-edit-outline" @click="dlgShow"  style="font-size:18px;cursor:pointer;"></i>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="list-pagination">
                        <el-pagination background :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
                        </el-pagination>
                </div>
                <el-dialog title="报销确认" :visible.sync="dialogTableVisible">
            
                </el-dialog>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "BillApproval",
  data() {
    return {
        dialogTableVisible:false,
      search_info: {
        cost_type: "0",
        pay_time: "",
        person: "",
        pay_method: "0",
        bank_type: "0",
        platform_type: "0",
        diy_pay: "现金",
        time_range: "",
        handle_state: ""
      },
      tableData:[{
          pay_money:'1231',
          state:'0',
          date:'2018-01-02',
          bx_person:'张三',
          bx_type:'报销费',
          bx_info:'打南边来了个喇嘛，手里拿了个喇叭打南边来了个喇嘛，手里拿了个喇叭'
      },{
          pay_money:'1244',
          state:'1',
          date:'2018-01-03',
          bx_person:'张三',
          bx_type:'报销费',
          bx_info:'打南边来了个喇嘛，手里拿了个喇叭打南边来了个喇嘛，手里拿了个喇叭'
      },{
          pay_money:'1089',
          state:'2',
          date:'2018-01-04',
          bx_person:'张三',
          bx_type:'报销费',
          bx_info:'打南边来了个喇嘛，手里拿了个喇叭打南边来了个喇嘛，手里拿了个喇叭'
      },{
          pay_money:'1231',
          state:'0',
          date:'2018-01-02',
          bx_person:'张三',
          bx_type:'报销费',
          bx_info:'打南边来了个喇嘛，手里拿了个喇叭打南边来了个喇嘛，手里拿了个喇叭'
      },{
          pay_money:'1244',
          state:'1',
          date:'2018-01-03',
          bx_person:'张三',
          bx_type:'报销费',
          bx_info:'打南边来了个喇嘛，手里拿了个喇叭打南边来了个喇嘛，手里拿了个喇叭'
      },{
          pay_money:'1089',
          state:'2',
          date:'2018-01-04',
          bx_person:'张三',
          bx_type:'报销费',
          bx_info:'打南边来了个喇嘛，手里拿了个喇叭打南边来了个喇嘛，手里拿了个喇叭'
      },{
          pay_money:'1231',
          state:'0',
          date:'2018-01-02',
          bx_person:'张三',
          bx_type:'报销费',
          bx_info:'打南边来了个喇嘛，手里拿了个喇叭打南边来了个喇嘛，手里拿了个喇叭'
      },{
          pay_money:'1244',
          state:'1',
          date:'2018-01-03',
          bx_person:'张三',
          bx_type:'报销费',
          bx_info:'打南边来了个喇嘛，手里拿了个喇叭打南边来了个喇嘛，手里拿了个喇叭'
      },{
          pay_money:'1089',
          state:'2',
          date:'2018-01-04',
          bx_person:'张三',
          bx_type:'报销费',
          bx_info:'打南边来了个喇嘛，手里拿了个喇叭打南边来了个喇嘛，手里拿了个喇叭'
      },{
          pay_money:'1231',
          state:'0',
          date:'2018-01-02',
          bx_person:'张三',
          bx_type:'报销费',
          bx_info:'打南边来了个喇嘛，手里拿了个喇叭打南边来了个喇嘛，手里拿了个喇叭'
      },{
          pay_money:'1244',
          state:'1',
          date:'2018-01-03',
          bx_person:'张三',
          bx_type:'报销费',
          bx_info:'打南边来了个喇嘛，手里拿了个喇叭打南边来了个喇嘛，手里拿了个喇叭'
      },{
          pay_money:'1089',
          state:'2',
          date:'2018-01-04',
          bx_person:'张三',
          bx_type:'报销费',
          bx_info:'打南边来了个喇嘛，手里拿了个喇叭打南边来了个喇嘛，手里拿了个喇叭'
      },{
          pay_money:'1231',
          state:'0',
          date:'2018-01-02',
          bx_person:'张三',
          bx_type:'报销费',
          bx_info:'打南边来了个喇嘛，手里拿了个喇叭打南边来了个喇嘛，手里拿了个喇叭'
      },{
          pay_money:'1244',
          state:'1',
          date:'2018-01-03',
          bx_person:'张三',
          bx_type:'报销费',
          bx_info:'打南边来了个喇嘛，手里拿了个喇叭打南边来了个喇嘛，手里拿了个喇叭'
      },{
          pay_money:'1089',
          state:'2',
          date:'2018-01-04',
          bx_person:'张三',
          bx_type:'报销费',
          bx_info:'打南边来了个喇嘛，手里拿了个喇叭打南边来了个喇嘛，手里拿了个喇叭'
      }]
    };
  },
  methods:{
      dlgShow(){
          this.dialogTableVisible = true;
      }
  }
};
</script>
<style>

</style>
