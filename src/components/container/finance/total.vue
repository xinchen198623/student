<template>
	<div class="container">
	<p id="p">累计入账费用统计</p>
	<div  class="top">
		<div class="block">
			 <p class="demonstration">周度</p>
			 <el-autocomplete v-model="state3"  placeholder="请输入内容">
				  <i class="el-icon-caret-bottom" slot="suffix" @click="handleIconClick">
			  </i>
			  </el-autocomplete>
			<span  id="span">入账总额</span>
			<div id="right">0021</div>
		</div>
		<div class="block">
			 <p class="demonstration">月度</p>
			 <el-autocomplete ：v-model="state3"  placeholder="请输入内容">
				  <i class="el-icon-caret-bottom" slot="suffix" @click="handleIconClick">
			  </i>
			  </el-autocomplete>
			<span  id="span">入账总额</span>
			<div id="right">0021</div>
		</div>
		<div class="block">
			 <p class="demonstration">年度</p>
			 <el-autocomplete v-model="state3"  placeholder="请输入内容">
				  <i class="el-icon-caret-bottom" slot="suffix" @click="handleIconClick">
			  </i>
			  </el-autocomplete>
			<span  id="span">入账总额</span>
			<div id="right">0021</div>
		</div>
	</div>



	</div>
</template>
<script>
	export default{
		name:"total",
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>
<style scoped>
	.container{
		height:700px;
	}
	.container #p{	
		line-height: 70px;
		height:70px;
		font-size: 18px;
		font-weight: 300;
		margin-left: 30px;
	}
	.top{
		width:1150px;
		margin-left: 30px;
	}
	.top .block{
		float: left;
		width:340px;
		height:100px;
		margin-right: 20px;
		padding-left: 20px;
		border-radius: 15px;
		background: white;
	}
	.block .demonstration{
		width:50px;
		line-height: 40px;
		font-size: 14px;
		font-weight: 300px;
	}
	.el-autocomplete{
		position: relative;
	    top: -40px;
    	left: 38px;
	    width: 120px;
	    height:22px;
	    outline: none;
	}
	.el-input__inner{
		border:1px solid white;
	}
	.el-autocomplete .el-input .el-input__inner{
		height:22px !important;
	}

	.block #span{
		position: relative;
		top:12px;
		left:-32px;
		font-size: 14px;
	}
	.block #right{
		font-size:36px;
		color:rgb(255,168,0);
		position: relative;
		left: 212px;
        top: -46px;
	}
</style>