<template>
	<div class="container">
		<div class="title">
			<span class="tag"></span>
			东时教育-学生代缴费用信息
		</div>
		<div class="main">
			<div class="main_form">
				<div class="form_header">
					<div class="header_logo">
						<img src="../../../assets/img/dslogo.png" />
					</div>
					<div class="header_name">东时教育学生费用清单</div>
					<div class="header_code">
						<img id="barcode" ref="barcode"/>
					</div>
				</div>
				<div class="form_inner">
					<div class="inner_row">
						<p class='diff'><label>姓名</label><span>王凯</span></p>
						<p><label>身份证号</label><span>1381749218356329856</span></p>
						<p><label>联系电话</label><span>18288888888</span></p>
					</div>
					<div class="inner_row">
						<p class='diff'><label>学制</label><span>6个月</span></p>
						<p><label>专业</label><span>HTML+JAJA</span></p>
						<p><label>班级</label><span>19800元班</span></p>
					</div>
					<div class="inner_count">学杂费合计 <span>19800元</span></div>
				</div>
			</div>
			<div class="form_table">
					<table>
						<tr>
							<th>编号</th>
							<th>费用类型</th>
							<th>缴费时间</th>
							<th>金额</th>
							<th>已缴</th>
							<th>未缴</th>
							<th>状态</th>
							<th>操作</th>
						</tr>
						<tr>
							<td>302</td>
							<td>学杂费</td>
							<td>2017/07/28</td>
							<td>4000元</td>
							<td>2000元</td>
							<td><span ref="unpaid">10</span>元</td>
							<td>
								<input type='button' ref="done" value="确认收款">
							</td>
							<td @click="confirm">
								<i class='icon-file-text2 icon_tab'></i>
							</td>
					
						<tr>
							<td colspan='8'>共计</td>
						</tr>
					</table>
				</div>
			<div class="form_module" v-if="moduleShow">
				<i class='close' @click="confirmClose"> × </i>
				<table>
					<caption>缴费确认</caption>
					<tr>
						<td>姓名</td>
						<td>王凯</td>
					</tr>
					<tr>
						<td>身份证号</td>
						<td>128471247295032572</td>
					</tr>
					<tr>
						<td>收款时间</td>
						<td>2018/08/27 21:13:22</td>
					</tr>
					<tr>
						<td>费用类型</td>
						<td>学杂费</td>
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
				<div class="module_confirm" @click="confirmList">确认收款</div>
			</div>
			<div class="form_list" v-if="listShow">
				<p class="list_title">东时教育学生费用<span>已缴</span>清单</p>
				<div class="form_table form_table1">
				<i class='close close2' @click="confirmListClose"> × </i>
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

	</div>
</template>
<script>
	var JsBarcode = require('jsbarcode');
	export default{
		data(){
			return{
				moduleShow:false,
				listShow:false
			}
		},
		mounted(){
			JsBarcode(this.$refs.barcode, "222222");
			if(this.$refs.unpaid.innerHTML=='0'){
				this.$refs.done.disabled=true;
				this.$refs.done.style.color='#999';
				this.$refs.done.value='已结清';
			}else{
				this.$refs.done.disabled=false;
				this.$refs.done.value='确认收款';
			}
	
		},
		methods:{
			confirm(){
				if(this.$refs.unpaid.innerHTML=='0'){
					console.log(222)
					this.moduleShow=false;
				}else{
					this.moduleShow=true;
				}
				
			},
			confirmClose(){
				this.moduleShow=false;
			},
			confirmList(){
				this.listShow=true;
			},
			confirmListClose(){
				this.listShow=false;
			}
		}
		
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
		width:952px;
		line-height:20px;
		left: 301px;
		color: rgba(16, 16, 16, 1);
		font-size: 14px;
		box-shadow: 0px 0px 1px 0px rgba(217, 217, 217, 1);
		border: 1px solid rgba(255, 255, 255, 1);
		padding-left:37px;
		padding-right:109px;
		padding-top:52px;
		border-radius:8px;
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
		margin:20px 40px;
		border-radius:8px;
	}
	.form_table tr{
		height:40px;
		line-height: 20px;
		font-size: 14px;
		text-align: center;
		border-radius: 8px;
		border: 1px solid rgba(255, 255, 255, 1);
		color: #999;
	}
	.form_table tr td{
		width:140px;
		border-right:1px solid #999;
	}
	.form_table tr td:nth-child(7){
		border-right:none;
	}
	.form_table tr td:last-child{
		box-shadow: 0px 0px 15px 0px rgba(170, 170, 170, 1);
		border: 1px solid rgba(255, 255, 255, 1);
	}
	.form_table tr:nth-child(2n){
		background:#f7f7f7;
	}
	.form_table tr:nth-child(2n+1){
		background:#fff;
	}
	.form_table tr:first-child{
		height:50px;
		background-color: rgba(229, 28, 35, 1);	
		color: #fff;
	}
	.form_table tr td input{
		width: 99px;
		height: 29px;
		line-height: 20px;
		border-radius: 5px;
		background-color: rgba(238, 238, 238, 1);
		text-align: center;
		border: 1px solid rgba(153, 153, 153, 1);
		color:rgb(245, 125, 125);
	}
	.icon_tab{
		font-size:18px;
		color:rgb(245, 125, 125);
	}
	.form_module{
		margin-left:357px;
		margin-top:50px;
		width: 443px;
		height: 550px;
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
		width:101px;
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
		margin-top:20px;
		width: 306px;
		height: 104px;
		line-height: 20px;
		border: 1px solid rgba(187, 187, 187, 1);
		resize:none;
	}
	.form_module .module_confirm{
		margin:0 auto;
		width: 120px;
		height: 40px;
		line-height: 40px;
		background-color: rgba(229, 28, 35, 1);
		text-align: center;
		border: 1px solid rgba(255, 255, 255, 1);
		color:#fff;
	}
	.form_list{
		margin-top:20px;
		margin-left:20px;
		width: 1097px;
		height: 359px;
		line-height: 20px;
		border-radius: 12px;
		background-color: rgba(255, 255, 255, 1);
		color: rgba(16, 16, 16, 1);
		font-size: 14px;
		text-align: center;
		box-shadow: 0px 0px 1px 0px rgba(217, 217, 217, 1);
		border: 1px solid rgba(255, 255, 255, 1);
		box-sizing:border-box;

	}
	.form_table1{
		margin-left:49px;
		position:relative;
	}
	.form_table1 tr td{
		border:none;
		width:150px;
	}
	.form_table1 tr td:last-child{
		box-shadow:none;
	}
	.close2{	
		top:-76px;
		right:-31px;
	}
	.list_title{
		margin-top:37px;
		height: 32px;
		line-height: 32px;
		color: rgba(16, 16, 16, 1);
		font-size: 22px;
		text-align: center;
	}
	.list_title span{
		color:#F57D7D;
	}
</style>