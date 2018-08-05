<template>
	<div class="container">
		<div class="title">
			<span class="tag"></span>
			东时教育-出账执行
		</div>
		<div class="main_form">
			<div class="form_row">
				<span>
					<label>费用类型</label>
					<select>
						<option>关键字</option>
					</select>
				</span>
				<span>
					<label>支出日期</label>
					<input type="text" value="年月日">
				</span>
				<span class="form_search">
					<label>报销人</label>
					<i class='icon-search search'></i>
					<input type="text" >
				</span>
			</div>
			<div class="form_row">
				<span>
					<label>支出方式</label>
					<input type="radio"/>
					<select>
						<option>网上银行</option>
					</select>
					<input type="radio"/>
					<select>
						<option>支出平台</option>
					</select>
					<input type="radio"/>
					<select>
						<option>现金</option>
					</select>
				</span>
			</div>
			<div class="form_row">
				<span>
					<label>支出金额</label>
					<input type="text" value="2月"> 到 <input type="text" value="4月">
				</span>
				<span>
					<label>处理状态</label>
					<input type="radio" name="state">已完成
					<input type="radio" name="state">未完成
				</span>
			</div>
			<div class="form_btn">快捷查询</div>
		</div>
		<div class="main_form form_list">
			<table>
				<tr>
					<th>申请日期</th>
					<th>报销人</th>
					<th>费用明细</th>
					<th>支出金额</th>
					<th>处理状态</th>
					<th>操作</th>
				</tr>
				<tr :class="{active:formShow}">
					<td>2017/07/28</td>
					<td>夏美子</td>
					<td>铅笔，铅笔，铅笔，铅笔，铅笔</td>
					<td>￥1044</td>
					<td>已完成</td>
					<td>
						<i class="icon-trashcan icon_operate"  @click="deleteRow"></i>
						<i class="icon-edit icon_operate" :class="{active:formShow}" @click="edit"></i>
					</td>
				</tr>
				<tr >
					<td>2017/07/28</td>
					<td>夏美子</td>
					<td>铅笔，铅笔，铅笔，铅笔，铅笔</td>
					<td>￥1044</td>
					<td>已完成</td>
					<td>
						<i class="icon-trashcan icon_operate" @click="deleteRow"></i>
						<i class="icon-edit icon_operate" @click="edit"></i>
					</td>
				</tr>
				<tr>
					<td>2017/07/28</td>
					<td>夏美子</td>
					<td>铅笔，铅笔，铅笔，铅笔，铅笔</td>
					<td>￥1044</td>
					<td>已完成</td>
					<td>
						<i class="icon-trashcan icon_operate" @click="deleteRow"></i>
						<i class="icon-edit icon_operate" @click="edit"></i>
					</td>
				</tr>
				<tr>
					<td>2017/07/28</td>
					<td>夏美子</td>
					<td>铅笔，铅笔，铅笔，铅笔，铅笔</td>
					<td>￥1044</td>
					<td>已完成</td>
					<td>
						<i class="icon-trashcan" @click="deleteRow"></i>
						<i class="icon-edit" @click="edit"></i>
					</td>
				</tr>
				<tr>
					<td>2017/07/28</td>
					<td>夏美子</td>
					<td>铅笔，铅笔，铅笔，铅笔，铅笔</td>
					<td>￥1044</td>
					<td>已完成</td>
					<td>
						<i class="icon-trashcan" @click="deleteRow"></i>
						<i class="icon-edit" @click="edit"></i>
					</td>
				</tr>
				<tr>
					<td>2017/07/28</td>
					<td>夏美子</td>
					<td>铅笔，铅笔，铅笔，铅笔，铅笔</td>
					<td>￥1044</td>
					<td>已完成</td>
					<td>
						<i class="icon-trashcan" @click="deleteRow"></i>
						<i class="icon-edit" @click="edit"></i>
					</td>
				</tr>
				<tr>
					<td>2017/07/28</td>
					<td>夏美子</td>
					<td>铅笔，铅笔，铅笔，铅笔，铅笔</td>
					<td>￥1044</td>
					<td>已完成</td>
					<td>
						<i class="icon-trashcan" @click="deleteRow"></i>
						<i class="icon-edit" @click="edit"></i>
					</td>
				</tr>
				<tr>
					<td>2017/07/28</td>
					<td>夏美子</td>
					<td>铅笔，铅笔，铅笔，铅笔，铅笔</td>
					<td>￥1044</td>
					<td>已完成</td>
					<td>
						<i class="icon-trashcan" @click="deleteRow"></i>
						<i class="icon-edit" @click="edit"></i>
					</td>
				</tr>
				<tr>
					<td>2017/07/28</td>
					<td>夏美子</td>
					<td>铅笔，铅笔，铅笔，铅笔，铅笔</td>
					<td>￥1044</td>
					<td>已完成</td>
					<td>
						<i class="icon-trashcan" @click="deleteRow"></i>
						<i class="icon-edit" @click="edit"></i>
					</td>
				</tr>
			</table>
			<div class="page">
				<span class="recond">共123条记录</span>
				<span class="pageCount">每页10条</span>
				<span class="pageSearch">首页<span class="pageNum">1/3页</span>
					尾页
				</span>
				<span class="pageGo">转到第
					<input type="text">页
				</span>
			</div>
		</div>
		<div class="form_module" v-if="formShow">
				<i class='close' @click="closeForm"> × </i>
				<table>
					<caption>报销确认</caption>
					<tr>
						<td>姓名</td>
						<td>王凯</td>
					</tr>
					<tr>
						<td>费用明细</td>
						<td>学生电费，11月底前及就住公寓</td>
					</tr>
					<tr>
						<td>收款时间</td>
						<td>2018/08/27 21:13:22</td>
					</tr>
					<tr>
						<td>费用类型</td>
						<td>A类支出</td>
					</tr>
					<tr>
						<td>收款方式</td>
						<td>
							<input type="radio" name="term"/>现金
							<input type="radio" name="term"/>微信
							<input type="radio" name="term"/>支付宝
							<input type="radio" name="term"/>贷款
							<input type="radio" name="term"/>信用卡
							<input type="radio" name="term"/>银行卡
						</td>
						<tr>
							<td>应收金额</td>
							<td class="active">500元</td>
						</tr>
						<tr>
							<td>实收金额</td>
							<td class="active">
								<input type="text" value="100元"/>
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<textarea placeholder="备注"></textarea>
							</td>
						</tr>
				</table>
				<div class="module_back" >驳回报销</div>
				<div class="module_confirm" >确认收款</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				formShow:false
			}
		},
		methods:{
			edit(){
				this.formShow=true;
			},
			closeForm(){
				this.formShow=false;
			},
			deleteRow(){

			}
		}
	}
</script>
<style scoped>
	input[type="radio"]{
		width:17px;
		height:17px;
		vertical-align:middle;
	}
	.container{
		background:#eee;
	}
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
	.main_form{
		margin:20px 40px;
		width: 1000px;
		line-height: 20px;
		border-radius: 8px;
		background-color: rgba(255, 235, 235, 1);
		color: rgba(16, 16, 16, 1);
		font-size: 14px;
		border: 1px solid rgba(250, 90, 100, 1);
		padding:20px 50px;
		position:relative;
	}
	.form_row{
		height:40px;
		line-height:40px;
		margin-bottom:15px;
	}
	.form_row label{
		color: rgba(16, 16, 16, 1);
		font-size: 14px;
		margin-right:10px;
	}
	.form_row span{
		margin-right:50px;
		position:relative;
	}
	.form_row input[type='text']{
		width: 194px;
		height: 40px;
		line-height: 20px;
		border-radius: 4px;
		background-color: rgba(255, 252, 252, 1);
		color: rgba(16, 16, 16, 1);
		font-size: 14px;
		border: 1px solid rgba(187, 187, 187, 1);
		color:rgba(170, 170, 170, 1);
	}
	.form_search input{
		padding-left:50px;
	}
	.search{
		position:absolute;
		top: -2px;
    	left: 65px;
   		font-size:25px;
   		color:#999999;
	}
	.form_row select{
		width: 200px;
		height: 40px;
		line-height: 20px;
		border-radius: 4px;
		background-color: rgba(255, 252, 252, 1);
		text-align: center;
		border: 1px solid rgba(187, 187, 187, 1);
		color:rgba(170, 170, 170, 1);
	}
	.form_btn{
		position:absolute;
		bottom:26px;
		right:63px;
		width: 121px;
		height: 40px;
		line-height: 40px;
		border-radius: 4px;
		background-color: rgba(229, 28, 35, 1);
		text-align: center;
		border: 1px solid rgba(255, 255, 255, 1);
		color:#fff;
	}
	.form_list{
		width:1100px;
		background:#fff;
		border:none;
		padding:0;
		border-radius:8px;
		color:#999;
	}
	.form_list tr:first-child{
		height:50px;
		line-height: 50px;
		border-radius: 8px;
		background-color: rgba(229, 28, 35, 1);
		color: rgba(255, 255, 255, 1);
		font-size: 14px;
		box-shadow: 0px 0px 5px 0px rgba(217, 217, 217, 1);
		border:none;
	}
	.form_list tr{
		height:100px;
		border-bottom:1px dashed #999;
	}
	.form_list tr th{
		width:183px;
	}
	.form_list tr td{
		width:183px;
		text-align:center;
	}
	.form_list tr td:last-child{
		border-left:1px dashed #999;
	}
	.page{
		height:60px;
		line-height:60px;
	}
	.page .recond{
		margin-left:50px;
	}
	.page .pageCount{
		margin-left:150px;
	}
	.page .pageSearch{
		margin-left:250px;
	}
	.page .pageNum{
		margin:0 20px;
	}
	.page .pageGo{
		margin-left:200px;
	}
	.page .pageGo input{
		width:50px;
		margin:0 5px;
	}
	.form_module{
		margin-left:357px;
		margin-top:50px;
		width: 443px;
		height: 560px;
		line-height: 20px;
		border-radius: 8px;
		text-align: center;
		border: 1px solid rgba(255, 255, 255, 1);
		background:#fff;
		position:relative;
	}
	.close{
		font-style:normal;
		width: 24px;
		height: 24px;
		font-size:30px;
		color: rgba(16, 16, 16, 1);
		position:absolute;
		top:10px;
		right:10px;
	}
	.form_module table{
		width:80%;
		margin:50px auto 0;
	}
	.form_module table caption{
		height: 32px;
		line-height: 29px;
		color: rgba(16, 16, 16, 1);
		font-size: 20px;
		text-align: center;
		margin-bottom:30px;
	}
	.form_module table tr{
		height:36px;
		color:#999;
	}
	.form_module table tr td:first-child{
		width:100px;
	}
	.form_module table tr td{
		width:200px;
	}
	.form_module table tr td input{
		margin-right:10px;
	}
	.form_module table tr td:nth-child(2n){
		text-align:left;
	}
	.form_module table tr td.active{
		color:#FF9999;
	}
	.form_module table tr td.active input{
		color:#FF9999;
		width: 86px;
		height: 39px;
		line-height: 20px;
		text-align: center;
		border: 1px solid rgba(187, 187, 187, 1);
	}
	.form_module table tr td textarea{
		margin:20px 43px 0;
		width: 319px;
		height: 104px;
		line-height: 20px;
		border: 1px solid rgba(187, 187, 187, 1);
		resize:none;
	}
	.form_module .module_back{
		float:left;
		margin:0 20px 0 90px;
		width: 120px;
		height: 40px;
		line-height: 40px;
		background-color: #F58C8C;
		text-align: center;
		border: 1px solid rgba(255, 255, 255, 1);
		color:#fff;
	}
	.form_module .module_confirm{
		float:left;
		width: 120px;
		height: 40px;
		line-height: 40px;
		background-color: rgba(229, 28, 35, 1);
		text-align: center;
		border: 1px solid rgba(255, 255, 255, 1);
		color:#fff;
	}
	.form_list table tr.active{
		box-shadow: 0px 0px 11px 0px rgba(250, 55, 67, 1);
		border: 1px solid rgba(255, 255, 255, 1);

	}
	.icon_operate{
		font-size:25px;
	}
	.icon_operate.active{
		color:#FA3743;
	}
</style>