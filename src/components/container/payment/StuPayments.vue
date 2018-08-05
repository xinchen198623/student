<template>
	<div class="container">
		<div class="top">
			<div class="left">
				<div class="one"><span id="one">452</span><span>住宿费缴清</span></div>
				<div class="two"><span id="one">452</span><span>住宿费待缴</span></div>
				<div class="three"><span id="one">452</span><span>学费待缴</span></div>
				<div class="four"><span id="one">452</span><span>学费缴清</span></div>
				<div class="five"><span id="one">32567324</span><span>本周交易流水</span></div>
			</div>

			<div class="right">
				  <div class="chart" ref="chartOne" :style="{width: '720px', height: '360px'}"></div>

			</div>
		</div>
		<div class="bottom">
			 <div class="chart1" ref="chartTwo" :style="{width: '720px', height: '360px'}"></div>
			 <div class="chart2">
			 	<div id="title">月度财务流水比例</div>
			 	<div><p>3月</p> <el-progress :percentage="72" :text-inside="true" :stroke-width="18" color="rgb(255,145,145)" ></el-progress></div>
				<div><p>4月</p>  	<el-progress :percentage="62" :text-inside="true" :stroke-width="18" color="rgb(191,141,255)"></el-progress></div>
				<div><p>5月</p>  	<el-progress :percentage="66" color="rgb(89,175,255)" :text-inside="true" :stroke-width="18" ></el-progress></div>
				<div><p>6月</p>  	<el-progress :percentage="78" :text-inside="true" :stroke-width="18" color="rgb(38,203,255)"></el-progress></div>
				<div><p>7月</p>  	<el-progress :percentage="80" :text-inside="true" :stroke-width="18" color="rgb(255,215,112)"></el-progress></div>
				<div><p>8月</p>  	<el-progress :percentage="90" :text-inside="true" :stroke-width="18" color="rgb(240,145,34)"></el-progress></div>

			 </div>

		</div>

	</div>
</template>
<script >
import { mapActions, mapState } from "vuex";
import {setStore,getStore} from '@/util';
import mock from '@/mock'
import Api from '@/api'
	var JsBarcode = require('jsbarcode');
	// 引入 ECharts 主模块
		let echarts = require('echarts/lib/echarts');

		// 引入柱状图
		require('echarts/lib/chart/bar');
		// 引入折线图
		require('echarts/lib/chart/line');
		// 引入提示框和标题组件
		require('echarts/lib/component/tooltip');
		require('echarts/lib/component/title');
		  require('echarts/lib/component/legend');

	export default{
		name:"StuPayments",
		data(){
			return{
				
			}
		},
		methods:{
			createChartOne(){
					let chartOne=echarts.init(this.$refs.chartOne);
					chartOne.setOption({
						title: {
						    text: '住宿消费记录',
						    show:"true",
						    top:"5%",
						    left:"2%",
						    textStyle:{
						    	color:"#999"
						    }
						},
					    tooltip: {},// 提示框组件
					    grid:{},	//直角坐标系内绘图网格
					      legend:{		//图例组件
					      	  show:'ture',
				              right:'20%',
				              icon:'circle',   //去掉图例两边的线
				              // orient:'vertical'  //纵向显示
					      },
					    xAxis: {
			                data: ["周一","周二","周三","周四","周五","周六","周日"],
			                axisTick:false,
			                axisLabel: {        
			                    show: true,
			                    textStyle: {
			                        color: '#999',
			                        fontSize:'15'
			                    }
			                },
			            },
					     yAxis: {
			              splitLine:false,
			              axisTick:true,
			              axisLabel: {        
			                  show: true,
			                  textStyle: {
			                      color: '#999',
			                      fontSize:'15'
			                  }
			              },
			            },
					    series: [{
		                color:['#c23531'],
		                name: '已缴清',
		                type: 'line',
		                symbol:'circle',
		                symbolSize:'7',
		                
		                data: [4, 5.5, 8, 2, 7,16, 9],
		            },
		            {
		               color:['#c4ccd3'],
		                name: '待缴费',
		                type: 'line',
		                symbol:'circle',
		                symbolSize:'7',
		                data: [5, 7, 9, 3, 8, 18,10]
		            }
		            ]
					})
			},
			createChartTwo(){
					let chartTwo=echarts.init(this.$refs.chartTwo);
					chartTwo.setOption({
						title: {
						    text: '学费统计记录',
						    show:"true",
						    top:"5%",
						    left:"2%",
						    textStyle:{
						    	color:"#999"
						    }
						},
					    tooltip: {},// 提示框组件
					    grid:{},	//直角坐标系内绘图网格
					      legend:{		//图例组件
					      	  show:'ture',
				              right:'20%',
				              icon:'circle',   //去掉图例两边的线
				              // orient:'vertical'  //纵向显示
					      },
					    xAxis: {
			                data: ["周一","周二","周三","周四","周五","周六","周日"],
			                axisTick:false,
			                axisLabel: {        
			                    show: true,
			                    textStyle: {
			                        color: '#999',
			                        fontSize:'15'
			                    }
			                },
			            },
					     yAxis: {
			              splitLine:false,
			              axisTick:true,
			              axisLabel: {        
			                  show: true,
			                  textStyle: {
			                      color: '#999',
			                      fontSize:'15'
			                  }
			              },
			            },
					    series: [{
		                color:['rgb(187,187,187)'],
		                name: '已缴',
		                type: 'line',
		                symbol:'circle',
		                symbolSize:'7',
		                
		                data: [4, 5.5, 8, 2, 7,16, 9],
		            },
		            {
		               color:['rgb(89,175,255)'],
		                name: '未缴',
		                type: 'line',
		                symbol:'circle',
		                symbolSize:'7',
		                data: [3, 4, 7, 1,6, 14,8]
		            }
		            ]
					})
			}
			
		},
		mounted(){
   			this.createChartOne();
   			this.createChartTwo();
  		},
	  created(){
	    console.log(mock)
	    
	  }
		
	};
	
</script>
<style scoped>

	.container{
		width: 1180px;
		height:700px;
		background:rgb(238,238,238);
		padding:30px 30px 74px 30px;
	}
	.top{
		width: 1180px;
		height:360px;
		display: flex;
	}
	.top .left{
		width:366px;
		height:360px;	
	}
	.top .right{
		width: 724px;
		height:360px;
	}
	.left div{
		width: 170px;
		height: 100px;
		border-radius: 15px;
		float:left;
		margin-right:13px;
		margin-bottom:17px;
	}
	.one{
		background:white;
	}
	.two{
		background:red;
	}
	.three{
		background:rgb(0,133,255);
	}
	.four{
		background:yellow;
	}
	.left .five{
		width:350px;
		background: rgb(219,219,219);
		margin-top:15px;
	}
	.left div span{
		display:block;
		text-align: center;
	}
	.left div #one{
		font-size:30px;
		margin-top: 20px;
	}
	.left .five #one{
		color:red;

	}
	.bottom{
		height:360px;
	
		padding-bottom:70px;
		display: flex;
		margin-top:25px;
	}
	.chart{
		background:white;
		margin-left:30px;
	}
	.chart1{
		background:white;
		margin-right:30px;
	}
	.chart2{
		width:350px; 
		background:white;
		padding-top:30px;
		padding-left: 30px;
	}
	#title{
		margin-bottom:20px;
	}
	.chart2 div{
		display: flex;
	}
	.chart2 div p{
		margin-right:60px;
	}
	.chart2 div .el-progress{
		width:210px;
		margin-bottom:30px;
		background:white !important;
		outline-color: gray;
	}
</style>