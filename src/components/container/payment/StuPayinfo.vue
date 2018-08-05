<template>
	<div class="container">
		<div class="title">
			<span class="tag"></span>
			东时教育-学生代缴费用信息
		</div>
		<div class="main">
			<div class="main_form">
			 <!-- 班级搜索 -->
				<el-select v-model="value" filterable  placeholder="请选择班级">
				    <el-option
				      v-for="(item,index) in class_list" :key="index" :value="item.name">
				    </el-option>
				</el-select>
			 <!-- 缴费情况 -->	
			    <el-select v-model="value1" filterable placeholder="缴费情况" >
				    <el-option
				      v-for="item in option1" :key="item.id" :label="item.label" :value="item.id">
				    </el-option>
			    </el-select>
			 <!-- 学生搜索 -->
                <el-autocomplete popper-class="my-autocomplete" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容">
					  <i class="el-icon-edit el-input__icon" slot="suffix">
					  </i>
				</el-autocomplete>
             <!-- 学费单号 -->	
                <el-autocomplete popper-class="my-autocomplete" v-model="state3" :fetch-suggestions="querySearch1" placeholder="请输入内容">
					  <i class="el-icon-edit el-input__icon" slot="suffix" >
					  </i>
				</el-autocomplete>
				<br><span>入学时间</span>&nbsp;&nbsp;&nbsp;&nbsp;
				<el-select v-model="value4" filterable  placeholder="请选择" class="fee">
				    <el-option v-for="item in option4" :key="item.value" :label="item.label" :value="item.value">
				    </el-option>
				</el-select>
				<span>年</span>
				<el-select v-model="value5" filterable  placeholder="请选择" class="fee">
				    <el-option v-for="item in option5" :key="item.value" :label="item.label" :value="item.value">
				    </el-option>
				</el-select>
				<span>月</span>
				<el-select v-model="value6" filterable  placeholder="请选择" class="fee">
				    <el-option v-for="item in option6" :key="item.value" :label="item.label" :value="item.value">
				    </el-option>
				</el-select>
				<span>日</span>
				<el-row>
					  <el-button type="danger" round @click="kjcx">快捷查询</el-button>
				</el-row>	
			</div>
			<div class="form_table">
				<table>
					<tr>
						<th>序号</th>
						<th>姓名</th>
						<th>订单号</th>
						<th>班级</th>
						<th>入学时间<i @click='time_sort("date","+")' class="el-icon-caret-bottom" > </i> <i @click='time_sort("date","-")' class="el-icon-caret-top"></i></th>
						<th>总金额</th>
						<th>已缴</th>
						<th>待缴<i @click='unpaid_sort("unPaid","+")' class="el-icon-caret-bottom" > </i> <i @click='unpaid_sort("unPaid","-")' class="el-icon-caret-top"></i></th>
						<th>操作</th>
					</tr>
				</table>
				<table  id="gray">
					<tr v-for="(item,index) in payMent.stuInfo">
						<th>{{item.serial}}</th>
						<th>{{item.name}}</th>
						<th>{{item.order}}</th>
						<th>{{value}}</th>
						<th>{{item.date}}</th>
						<th>{{item.totalMoney}}元</th>
                        <th>{{item.paid}}元</th>
                        <th>{{item.unPaid}}元</th>
						<th>
							<i class="el-icon-edit-outline" @click="record"></i><i class="el-icon-document"></i> 
						</th>
					</tr> 
				</table>
				<div class="block b">
					    <el-pagination
					      @size-change="handleSizeChange"
					      @current-change="handleCurrentChange"
					      :current-page="currentPage4"
					      :page-sizes="[15]"
					      :page-size="15"
					      layout="total, sizes, prev, pager, next, jumper"
					      :total="this.total1">
				    	</el-pagination>
				</div>
			</div>
			
			<div class="form_list" v-if="listShow">			<!--v-if="listShow"-->
				<p class="list_title">东时教育学生费用<span>已缴</span>清单</p>
				<div class="form_table form_table1">
				<i class='close close2' > × </i>
					<table>
						<tr>
							<th>编号</th>
							<th>费用类型</th>
							<th>应缴费时间</th>
							<th>收款时间</th>
							<th>收款方式</th>
							<th>应缴金额</th>
							<th>实收金额</th>
						</tr>
						<tr>
							<td>302</td>
							<td>学杂费</td>
							<td>2017/07/28</td>
							<td>2017/07/28</td>
							<td>现金</td>
							<td>4000元</td>
							<td>
								2000元
							</td>
						</tr>
						<tr>
							<td>302</td>
							<td>学杂费</td>
							<td>2017/07/28</td>
							<td>2017/07/28</td>
							<td>现金</td>
							<td>4000元</td>
							<td>
								2000元
							</td>
						</tr>
						<tr>
							<td>302</td>
							<td>学杂费</td>
							<td>2017/07/28</td>
							<td>2017/07/28</td>
							<td>现金</td>
							<td>4000元</td>
							<td>
								2000元
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<div class="footer">
			<el-row>
			  <el-button type="warning" round  id="up">上一步</el-button>
			  <el-button type="danger" round id="save">保存</el-button>
			  <el-button type="danger" icon="el-icon-delete" circle  id="circle"></el-button>
			</el-row>
		</div>
	</div>
</template>
<script>
	import { mapState, mapActions } from "vuex";
	import {setStore,getStore} from '@/util';
	import store  from  '@/store';
	import Api  from '@/api'
	var JsBarcode = require('jsbarcode');
	export default{
		name:"StuPayinfo",
		data(){
			return{
				moduleShow:false,
				listShow:false,
		        option1: [{
		          id: '0',
		          label: '已交'
		        },{
		          id: '1',
		          label: '待缴'
		        },{
		          id: '2',
		          label: '部分款'
		        }],
		        option4: [{
		          value: '选项1',
		          label: '1998'
		        }, {
		          value: '选项2',
		          label: '1999'
		        }, {
		          value: '选项3',
		          label: '2000'
		        }, {
		          value: '选项4',
		          label: '2001'
		        },{
		          value: '选项5',
		          label: '2002'
		        },{
		          value: '选项6',
		          label: '2003'
		        }, {
		          value: '选项7',
		          label: '2004'
		        },{
		          value: '选项8',
		          label: '2005'
		        },{
		          value: '选项9',
		          label: '2006'
		        },{
		          value: '选项10',
		          label: '2007'
		        }, {
		          value: '选项11',
		          label: '2008'
		        },{
		          value: '选项12',
		          label: '2009'
		        }],
		        option5: [{
		          value: '选项1',
		          label: '1月'
		        }, {
		          value: '选项2',
		          label: '2月'
		        }, {
		          value: '选项3',
		          label: '3月'
		        }, {
		          value: '选项4',
		          label: '4月'
		        },{
		          value: '选项5',
		          label: '5月'
		        },{
		          value: '选项6',
		          label: '6月'
		        }, {
		          value: '选项7',
		          label: '7月'
		        },{
		          value: '选项8',
		          label: '8月'
		        },{
		          value: '选项9',
		          label: '9月'
		        },{
		          value: '选项10',
		          label: '10月'
		        }, {
		          value: '选项11',
		          label: '11月'
		        },{
		          value: '选项12',
		          label: '12月'
		        }],
		         option6: [{
		          value: '选项1',
		          label: '1日'
		        }, {
		          value: '选项2',
		          label: '2日'
		        }, {
		          value: '选项3',
		          label: '3日'
		        }, {
		          value: '选项4',
		          label: '4日'
		        },{
		          value: '选项5',
		          label: '5日'
		        },{
		          value: '选项6',
		          label: '6日'
		        },{
		          value: '选项7',
		          label: '7日'
		        },{
		          value: '选项8',
		          label: '8日'
		        },{
		          value: '选项9',
		          label: '9日'
		        },{
		          value: '选项10',
		          label: '10日'
		        }, {
		          value: '选项11',
		          label: '11日'
		        },{
		          value: '选项12',
		          label: '12日'
		        },{
		          value: '选项13',
		          label: '13日'
		        },{
		          value: '选项14',
		          label: '14日'
		        },{
		          value: '选项15',
		          label: '15日'
		        },{
		          value: '选项16',
		          label: '16日'
		        }, {
		          value: '选项17',
		          label: '17日'
		        },{
		          value: '选项18',
		          label: '18日'
		        },{
		          value: '选项19',
		          label: '19日'
		        },{
		          value: '选项20',
		          label: '20日'
		        },{
		          value: '选项21',
		          label: '21日'
		        },{
		          value: '选项22',
		          label: '22日'
		        }, {
		          value: '选项23',
		          label: '23日'
		        },{
		          value: '选项24',
		          label: '24日'
		        },{
		          value: '选项25',
		          label: '25日'
		        },{
		          value: '选项26',
		          label: '26日'
		        },{
		          value: '选项27',
		          label: '27日'
		        },{
		          value: '选项28',
		          label: '28日'
		        }, {
		          value: '选项29',
		          label: '29日'
		        },{
		          value: '选项30',
		          label: '30日'
		        },{
		          value: '选项31',
		          label: '31日'
		        }],
		        option7:[{
		          value: '选项30',
		          label: '30日'
		        }],
		         value: '',
		         value1: '',
		         //学生搜索
		         value2: [],
		         option2: [],
		         list:[],
		         loading: false,
		         //单号搜索
		         value3: [],
		         option3: [],
		         value4: '',
		         value5: '',
		         value6: '',
		         payMent:'',
		         state2: [],
		         state3: [],
		         //分页
		         restaurants: [],
		         currentPage1: 5,
			     currentPage2: 5,
			     currentPage3: 5,
			     currentPage4: 4,
			     class:"",
			     class_id: "x",  
			}
		},
		computed:{
		    ...mapState(["class_list"])
		},
		methods:{
			//学生搜索
			loadAll(){
		        let res = [];
		        this.payMent.stuInfo.find((el,index)=>{
		            this.stuName ={"value":el.name};
		            res.push(this.stuName);
		        })
		        return res
		    },
			querySearch(queryString, cb) {
			     var restaurants = this.restaurants;
			     var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
			        // 调用 callback 返回建议列表的数据
		        cb(results);
		    },
		    createFilter(queryString) {
		        return (restaurant) => {
		          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
		        };
		    },
		    //单号搜索
		    loadAll1() {
		        let asd = [];
		        this.payMent.stuInfo.find((el,index)=>{
		            this.stuorder ={"value":el.order.toFixed()};
		            asd.push(this.stuorder);
		        })
		        return asd
		      },
		    querySearch1(queryString, cb) {
		        var restaurants = this.restaurants1;
		        var results = queryString ? restaurants.filter(this.createStateFilter1(queryString)) : restaurants;
		      clearTimeout(this.timeout1);
		        this.timeout1 = setTimeout(() => {
		          cb(results);
		        }, 1 * Math.random());
		      },
		    createStateFilter1(queryString) {
		        return (state) => {
		          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
		        };
		     },
		    //分页
			handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		    },
		    handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		     },
		    record(){
		      	this.$router.push({
		      		path:'/stuPayment'
		      	})
		    },
		    //快捷查询
		    kjcx(){
		    	if(this.state3&&!this.state2){
                    this.option = {
                    order:this.state3,
                    }
	            }else if(!this.state3&&this.state2){
	                 this.option = {
	                 name:this.state2,
	                }
	            }else{
	                this.option = {
	                class:this.value,
	                }
	            }
		    },
		    //时间排序
		    time_sort(date,mark){
		    		this.payMent.stuInfo.sort(function(a,b){
		    			return (mark+new Date(a[date]).getTime())-(mark+new Date(b[date]).getTime())
		    		})
		    },
		    //待缴排序
		    unpaid_sort(unpaid,mark){
		    		console.log('stuInfo=>',this.payMent.stuInfo)
		    		this.payMent.stuInfo.sort(function(a,b){
		    			console.log('testa=>',a[unpaid])
		    			console.log('testb=>',b[unpaid])
		    			return((mark+a[unpaid])-(mark+b[unpaid]))
		    		})
		    }
		},
		created(){
			this.option={
				 nowPage:1,

			},
			this.$http
			.post("getPayInfo",[this.option])
			.then(res=>{
			 	this.payMent = res.data;
				console.log('nowpage=>',this.payMent);
				 this.total1 = this.payMent.total;
				 this.restaurants = this.loadAll();//学生搜索
				 this.restaurants1 = this.loadAll1();//单号搜索
			 });
			
		},
		mounted(){	
		},
		
	}
	
</script>
<style scoped>
	.title{
		height:59px;
		line-height:59px;
		border-bottom:1px solid #bbbbbb;
		font-size:16px;
		font-weight:bold;
	}
	.tag{
		float:left;
		margin-left:45px;
		margin-top:15px;
		margin-right:9px;
		width:6px;
		height:30px;
		background:#ff404b;
	}
	.main{
		width:1180px;
		background:#eee;
	}
	.main_form{
		background:#fff;
		margin-left:41px;
		margin-top:18px;
		width:1060px;
		line-height:20px;
		left: 301px;
		color: rgba(16, 16, 16, 1);
		font-size: 14px;
		box-shadow: 0px 0px 1px 0px rgba(217, 217, 217, 1);
		border: 1px solid rgba(255, 255, 255, 1);
		padding-left:37px;
		padding-top:30px;
		border-radius:8px;
		height:120px;
	}

	.el-select{
		margin-right:30px;
	}
	.el-input{
		width:227px;
		margin-right:30px;	
	}
	.block{
		float:left;
	}
	.block .el-input{
    	width: 123px;
	}
	.block span{
		margin-right:20px;
	}
	.fee{
		margin-top:20px;
		width:120px;
		
		outline: none;
	}
	.el-icon-caret-bottom{
		position: relative;
		left: 3px;
        top: 4px;
	}
	.el-icon-caret-top{
		position: relative;
	    left: -15px;
	    top: -4px;
	}
	.form_table #gray tr{
		background:rgb(242,242,242);
		color:black;
	}
	.el-select .el-input__inner{
		background: red;
	}
	.el-button.is-round{
	    position: absolute;
	    top: -40px;
	    right: 72px;
	}
	.form_header{
		height:93px;
	}
	.header_logo{
		float:left;
	}
	.header_logo img{
		width:127px;
		height:45px;
	}
	.header_name{
		width: 221px;
		height: 32px;
		line-height: 32px;
		color: rgba(16, 16, 16, 1);
		font-size: 22px;
		text-align: center;
		float:left;
		margin-left:207px;
	}
	.header_code {
		float:right;
		width:198px;
		height:66px;
	}
	.header_code img{
		width:100%;
		height:100%;
	}
	.form_inner{
		width: 1030px;
		height: 164px;
		line-height: 20px;
		border-radius: 6px;
		background-color: rgba(247, 247, 247, 1);
		border: 1px solid rgba(255, 255, 255, 1);
		margin-bottom:21px;
	}
	.inner_row:first-child{
		margin-top:40px;
	}
	.inner_row{
		font-size:14px;
		margin-top:10px;
	}
	.inner_row p{
		display:inline-block;
		margin-left:100px;
		margin-top:10px;
		width:230px;
	}
	.inner_row p.diff{
		width:100px;
	}
	.inner_row p label{
		color:#999;
	}
	.inner_row p span{
		margin-left:10px;
	}
	.inner_count{
		color:#E62E35;
		float:right;
		margin-right:50px;
		margin-top:25px;
	}
	.form_table{
		width:1100px;
		margin:20px 40px;
		border-radius:8px;
	}
	.form_table tr{
		width:1100px;
		line-height: 20px;
		font-size: 14px;
		text-align: center;
		border-radius: 8px;
		border: 1px solid rgba(255, 255, 255, 1);
		color: #999;
		height:48px;
		background-color: rgba(229, 28, 35, 1);	
		color: #fff;
		display: flex;
	}
	
	.form_table tr th{
		flex:1;
		line-height: 48px;
	}
	#gray tr{
		height:38px;
	}
	#gray tr th{
		line-height: 38px;
	}
	#gray tr:nth-child(2n+1){
		background: rgb(242,242,242);
	}
	#gray tr:nth-child(2n){
		background: rgb(255,255,255);
	}
	.b{
		width:1100px;

	}
	
.b .el-pagination{
	display: flex;
	background: white;
	justify-content:space-around;
    align-items: center;
    height: 44px;
}
.footer{
	margin-top: 48px;
	height:80px;
}
.footer .el-button.is-round[data-v-33479be3]{
	top: 24px;
}
#up{
    margin-right: 216px;
    width:120px;
    background: rgb(255,140,140);
}
#save{
	margin-right: 42px;
	width:120px;
	background: rgb(252,40,40);
}
#circle{
	position: relative;
    top: 25px;
    left: 1075px;
}
</style>