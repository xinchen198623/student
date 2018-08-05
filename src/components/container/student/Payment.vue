<template>
	<div class="container">
		<div class="title">
			<span class="tag"></span>
			学生缴费表
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
				<div class="form_top">
					<div class="top_row clearfix">
						<div>
							<label>姓名</label><span>{{student_info.name}}</span>
						</div>
						<div>
							<label>身份证号</label><span>{{student_info.idcard}}</span>
						</div>
						<div>
							<label>联系电话</label><span>{{student_info.contact_phone}}</span>
						</div>
					</div>
					<div class="top_row">
						<div>
							<label>籍贯</label>
							<span>{{student_info.province}}</span>
							<label>省</label>
							<span>{{student_info.city}}</span>
							<label>市</label>
							<span>{{student_info.province}}</span>
							<label>县</label>
							<span>{{student_info.address}}</span>
						</div>						
					</div>
				</div>
				<div class="form_content">
					<div class="content_row1 clearfix">
						<div class="row1_left">学费</div>
						<div class="row1_right">
							<div class="right_top">
								<label>学制</label><span>{{student_info.specialty_month}}</span>
								<label>专业</label><span>{{config.Specialty[student_info.specialty_id]}}</span>
								<label>金额</label><span>{{gradeData.tuition}}元</span>
							</div>
							<div class="right_bottom">
								<div class="bottom_row1">
									<label class="bold">缴费方式</label>
									<input type="radio" v-model="tuition" name='money' value="0" @click='payMoney'><label>贷款</label>
									<input type="radio" v-model="tuition" name='money' value="1" @click='payMoney'><label>全款</label>
									<input type="radio" v-model="tuition" name='money' value="2" ref="pay1"  @click='payMoney'><label>分期</label>
									<input type="radio" v-model="tuition" name='money' value="3" ref="pay2"  @click='payMoney'><label>贷款+现金</label>
								</div>
								<div class="bottom_row2" ref="bottomBox" v-if="payFlag1">
									<div class="phase" ref="phase" v-for="(item,index) in array1" :key="index">
										<div v-if="index <2">
											<i class="add" @click="addPhase1">+</i><span>第{{index+1}}期</span>
											<span>缴费时间</span>
                      <el-date-picker size="small" v-show='index == 0' v-model="tuitionDate1" type="date" placeholder="选择日期"></el-date-picker>
                      <el-date-picker size="small" v-show='index == 1' v-model="tuitionDate2" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
											<span>缴费金额</span><input type="text" v-if="index == 0" v-model="tuition1" ><input type="text" v-if="index == 1" v-model="tuition2" >
										</div>									
									</div>
								</div>
								<div class="bottom_row2" ref="bottomBox" v-if="payFlag2">
									<div class="phase" ref="phase" v-for="(item,index) in array2" :key="index">
										<div v-if="index <2">
											<i class="add" @click="addPhase2">+</i><span>第{{index+1}}期</span>
											<span>缴费时间</span>
                      <el-date-picker size="small" v-show='index == 0' v-model="tuitionDate3" type="date" placeholder="选择日期"></el-date-picker>
                      <el-date-picker size="small" v-show='index == 1' v-model="tuitionDate4" type="date" placeholder="选择日期"></el-date-picker>
											<span>缴费金额</span>
                      <input type="text" v-if="index == 0" v-model="tuition3" >
                      <input type="text" v-if="index == 1" v-model="tuition4" >
										</div>									
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="content_row1 clearfix">
						<div class="row1_left row1_left2">电脑</div>
						<div class="row1_right">
							<div class="right_bottom">
								<div class="bottom_row1">
									<input type="radio" name='computer'  v-model="computer"  checked value="0"><label>自带电脑</label>
								</div>
								<div class="bottom_row1 ">
									<input type="radio" name='computer' v-model="computer" :value="computerChange"><label>租赁电脑</label>
								<!-- 	<input type="checkbox" name='computeMoney' disabled="disabled"><label > -->押金：{{gradeData.pc_deposit}}元</label>
									<!-- <input type="checkbox" name='computeMoney' disabled="disabled"><label  > -->租金（120元/月) :</label><span>{{gradeData.pc_rent}}元</span>
								</div>
								<div class="bottom_row1">
									<input type="radio" name='computer' v-model="computer" :value="computerfee" value-format="yyyy-MM-dd"><label>购买电脑</label>
									<input type="checkbox" name='computeMoney' value-format="yyyy-MM-dd"><label>金额：{{gradeData.pc_buy}}元</label>
								</div>
							</div>
						</div>
					</div>
					<div class="content_row1 clearfix">
						<div class="row1_left row1_left3">住宿费</div>
						<div class="row1_right">
							<div class="right_bottom">
								<div class="bottom_row1">
									<input type="radio" name='house' v-model="roomMoney" checked value="0" @click="payHide"><label>自行住宿</label>
								</div>
								<div class="bottom_row1">
									<input type="radio" name='house' v-model="roomMoney" ref="divide1" :value="roomMoney_1" @click="payHide">
                  <label>校内安排</label>
									<!-- <input type="checkbox" name='houseMenoy' disabled="disabled"> -->
                  <label>押金:{{gradeData.dormitory_deposit}}元</label>
									<!-- <input type="checkbox" name='houseMenoy' disabled="disabled"> -->
                  <label>管理费:{{gradeData.dormitory_mng}}元</label>
                  <label>住宿租金:{{gradeData.dormitory_rent}}元</label>
									<div class="row-input"  v-show="xianshi">
										<input type="radio" name='houseMenoy' disabled="disabled"><label>租金（600元/月）</label><label>{{gradeData.dormitory_rent}}元</label>
										<input type="radio" name='houseMenoy' @click="payPanel" v-model="isRoomMoney" value="0"><label>全款</label>
										<input type="radio" name='houseMenoy' checked ref="divide" @click="payPanel" v-model="isRoomMoney" value="1"><label>分期</label>
									</div>
								
								</div>
								<div class="bottom_row2" ref="bottomBox" v-if="payShow">
									<div class="phase" ref="phase" v-for="(item,index) in arrayHouse" :key="index">
										<div v-if="index<2">
											<i class="add" @click="addHouse">+</i><span>第{{index+1}}期</span>
											<span>缴费时间</span>
                      <el-date-picker size="small" v-show='index == 0' v-model="roomDate1" type="date" placeholder="选择日期" value-format="yyyy-MM-dd" ></el-date-picker> 
                      <el-date-picker size="small" type="date"  v-show="index==1"  value-format="yyyy-MM-dd" placeholder="选择日期"   v-model="roomDate2"></el-date-picker>
											<span>缴费金额</span>
                      <input type="text" v-if="index==0" v-model=" roomMoney1" :input1="min2()">
                      <input type="text" v-if="index==1" v-model=" roomMoney2" :input1="min2()">
										</div>
										
									</div>
								</div>

							</div>
						</div>
					</div>
					<div class="content_row1 clearfix">
						<div class="row1_left row1_left4">校服费</div>
						<div class="row1_right">
							<div class="right_bottom">
								<div class="bottom_row1">
									<input type="checkbox" name='cloth' ><label>校服费</label>
									<select>
										<option>{{cloth}}元</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="content_row1 clearfix">
						<div class="row1_left row1_left5">合计</div>
						<div class="row1_right">
							<div class="right_bottom right_bottom2">
								<div class="bottom_row">
									<div class="bottom_row1">
										<span>第一笔付款</span>
										<div class="bill">
											<label>类型</label>
											<input type="text" name='' v-model="totalOneName" class="inputw" disabled>
										</div>
										<div class="bill">
											<label>缴费日期:</label>
											<input type="text" name='' :value="nowDate" class="inputw2" disabled>
              
										</div>
										<div class="bill">
											<label>金额</label>
											<input type="text" name='' :value="totalOne" class="inputw" disabled>元
										</div>
									</div>
									<div class="bottom_row1"   v-show="totalTwo">
										<span>第二笔付款</span>
										<div class="bill">
											<label>类型</label>
											<input type="text" name='' v-model="totalTwoName" class="inputw" disabled>
										</div>
										<div class="bill">
											<label>缴费日期:</label>
											<input type="text" name='' :value="totalTwoDate" class="inputw2" disabled>
										</div>
										<div class="bill">
											<label>金额</label>
											<input type="text" name='' v-model="totalTwo" class="inputw" disabled>元
										</div>								
									</div>
									<div class="bottom_row1" v-show="totalThree">
										<span>第三笔付款</span>
										<div class="bill">
											<label>类型</label>
											<input type="text" name='' :value="totalThreeName" class="inputw" disabled>
										</div>
										<div class="bill">
											<label>缴费日期:</label>
											<input type="text" name='' :value="totalThreeDate" class="inputw2" disabled>
										</div>
										<div class="bill">
											<label>金额</label>
											<input type="text" name='' v-model="totalThree" class="inputw" disabled>元
										</div>
									</div>
								</div>
								<div class="bottom_row3" v-show="totalThree">
									<div class="bottom_row3_l">
										<span >合计</span>
										<input type='text' :value="totalMoney">
										<span>元</span>
									</div>
									<div class="bottom_row3_r">
										<span>本次应缴</span>
										<input type='text'>
										<span>元</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="sign">
					<p>2018/3/14 9:30</p>
					<p>教务签字</p>
					<input type="text">
					<p class="stuSign">学生签字</p>
					<input type="text">
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="back">
				<router-link to="/register">上一步</router-link>
			</div>	
			<div class="save">保存</div>
			<div class="print">
				<i class="icon-printer"></i>
			</div>
		</div>
		
	</div>	
</template>
<script>
import JsBarcode from "jsbarcode";
import { mapActions, mapState } from "vuex";
import {setStore,getStore} from '@/util';
export default {
  name: "payment",
  data() {
    return {
      array1: [1],
      array2: [1],
      arrayHouse: [1],
      payShow: false,
      payFlag1: false,
      payFlag2: false,
       iframeShow: false,
      student_info: null,
      gradeData: null,
      tuition: 1,
      tuition1: 19800,
      // tuition2:0,
      tuition3: 0,
      // tuition4:0,
      tuitionDate1: "nowDate",
      tuitionDate2: "",
      tuitionDate3: "nowDate",
      tuitionDate4: "",
      computer: 0,
      cloth:148,
      roomMoney: 0,
      isRoomMoney: 0,
      roomMoney1: 3000,
      // roomMoney2:0,
      roomDate1: "nowDate",
      roomDate2: "",
      totalOneName:"学杂费",
      totalTwoName: "",
      totalTwoDate: "",
      totalThreeName: "",
      totalThreeDate: "",
      xianshi:false,
      pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
      }
    };
  },
  watch:{
      totalTwo(curVal){
        console.log('totalTwo=>',curVal)
      }

  },
  // created(){
  //     this.student_add1=getStore("student_info");
  //     console.log('config=>',this.config.FeeRules)
  //       console.log('yuefen=>',this.student_add1.specialty_month)
  //       let  that=this;
  //       let test=this.config.FeeRules.find(function(value){
  //         console.log(value)
  //         return value.month==that.student_add1.specialty_month
  //       })
  //       console.log('test=>',test)
  // },
  created() {
    let date = new Date();
    this.nowDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDay();
    // this.nowDate = new Date();
    if (this.student_add.student_info) {
      this.student_info = this.student_add.student_info;
    } else {
      this.student_info = getStore("student_info");

    }
 
    let month = this.student_info.specialty_month;
    console.log(this.config);
    let _this = this;
    this.config.FeeRules.map(function(item) {
      if (item.month == month) {
        _this.gradeData = item;
      }
    });
    console.log("gradeData=>",this.gradeData);
  },
  computed: {
    
    ...mapState(["student_add", "config"]),
    // tuition2(){
    //     return this.gradeData.tuition - this.tuition1;
    // },
    // tuition4(){
    //     return this.gradeData.tuition - this.tuition3;
    // },
    tuition2: {
      get: function() {
        return this.gradeData.tuition - this.tuition1;
      },
      set: function(newValue) {
        this.tuition1 = this.gradeData.tuition - newValue;
      }
    },
    tuition4: {
      get: function() {
        return this.gradeData.tuition - this.tuition3;
      },
      set: function(newValue) {
        this.tuition3 = this.gradeData.tuition - newValue;
      }
    },
    roomMoney2: {
      get: function() {
        return this.gradeData.dormitory_rent+this.gradeData.dormitory_deposit+this.gradeData.dormitory_mng - this.roomMoney1;
      },
      set: function(newValue) {
        this.roomMoney1 = this.gradeData.dormitory_rent+this.gradeData.dormitory_deposit+this.gradeData.dormitory_mng - newValue;
      }
    },
    computerfee(){
      return this.gradeData.pc_buy
    },
    computerChange(){
        return this.gradeData.pc_deposit+this.gradeData.pc_rent
    },
    roomMoney_1(){
        return this.gradeData.dormitory_deposit+this.gradeData.dormitory_mng+this.gradeData.dormitory_rent
    },
    totalOne() {
      // 第一种情况学费和住宿都是全款
      
      if (this.tuition < 2 && this.isRoomMoney < 1) {
        return (
          parseInt(this.gradeData.tuition) +parseInt(this.computer) +parseInt(this.roomMoney) +parseInt(this.gradeData.cloth)
        );
      } else if (this.tuition >= 2 && this.isRoomMoney < 1) {
        //2.学费是分期的,住宿都是全款
        return (
          parseInt(this.tuition == 2 ? this.tuition1 : this.tuition3) +
          parseInt(this.computer) +
          parseInt(this.roomMoney) +
          parseInt(this.gradeData.cloth)
        );
      } else if (this.tuition < 2 && this.isRoomMoney >= 1) {
        //3.住宿是分期的,学费全款
        return (
          parseInt(this.gradeData.tuition) +
          parseInt(this.computer) +
          parseInt(this.roomMoney1) +
          parseInt(this.gradeData.cloth)
        );
      } else if (this.tuition >= 2 && this.isRoomMoney >= 1) {
        //4.学费和住宿都是分期的
        return (
          parseInt(this.tuition == 2 ? this.tuition1 : this.tuition3) +
          parseInt(this.computer) +
          parseInt(this.roomMoney1) +
          parseInt(this.gradeData.cloth)
        );
      } else if(this.tuition<=1&&this.roomMoney==0){
        //5.--学费全款，住宿自行
        return(
                parseInt(this.gradeData.tuition)+parseInt(this.computer)+parseInt(this.gradeData.cloth)
          );
      }else if(this.tuition>=2&&this.roomMoney==0){
        //6.--学费分期，住宿自行
        return(
                parseInt(this.tuition == 2 ? this.tuition1 : this.tuition3)+parseInt(this.computer)+parseInt(this.gradeData.cloth)
          )
      }
    },
    totalTwo() {
      // 1.都是全款
      if (this.tuition < 2 && this.isRoomMoney < 1) {
        return 0;
      } else if (this.tuition >= 2 && this.isRoomMoney < 1) {
        //2.学费是分期的
        console.log('2222')
        this.totalTwoName = "学费";
        return parseInt(this.tuition == 2 ? this.tuition2 : this.tuition4);
      } else if (this.tuition < 2 && this.isRoomMoney >= 1) {
        //3.住宿是分期的
        this.totalTwoName = "住宿费";
        return parseInt(this.roomMoney2);
      } else if (this.tuition >= 2 && this.isRoomMoney >= 1) {
        //4.学费和住宿都是分期的
            console.log(new Date(this.tuitionDate2).getTime())
            console.log(new Date(this.roomDate2).getTime())
        if (parseInt(new Date(this.tuitionDate2).getTime()) < parseInt(new Date(this.roomDate2).getTime())) {
           console.log('小于')
          this.totalTwoName = "学费";
          this.totalTwoDate = this.tuitionDate2;
          return parseInt(this.tuition == 2 ? this.tuition2 : this.tuition4);
        } else if(parseInt(new Date(this.tuitionDate2).getTime())>parseInt(new Date(this.roomDate2).getTime())){
          console.log('大于')
          this.totalTwoName = "住宿费";
          this.totalTwoDate = this.roomDate2;
          return parseInt(this.roomMoney2);
        }else {
           console.log('等于')
          this.totalTwoName = "学费+住宿费";
          this.totalTwoDate = this.tuitionDate2;
          return (
            parseInt(this.tuition == 2 ? this.tuition2 : this.tuition4) +
            parseInt(this.roomMoney2)
          );
        } 
      }
    },
    totalThree() {
      if (this.totalTwo) {
        if (parseInt(new Date(this.tuitionDate2).getTime()) > parseInt(new
          Date(this.roomDate2).getTime())) {
          this.totalThreeName = "学费";
          this.totalThreeDate = this.tuitionDate2;
          return parseInt(this.tuition == 2 ? this.tuition2 : this.tuition4);
        } else if (parseInt(new Date(this.tuitionDate2).getTime()) == parseInt(new Date(this.roomDate2).getTime()) ){
          return false;
        } else {
          this.totalThreeName = "住宿费";
          this.totalThreeDate = this.roomDate2;
          return parseInt(this.roomMoney2);
        }
      } else {
        return 0;
      }
    },
    totalMoney() {
      return (
        parseInt(this.gradeData.tuition) +
        parseInt(this.computer) +
        parseInt(this.roomMoney) +
        parseInt(this.gradeData.cloth)
      );
    }
  },
  //   watch:{
  //     tuition1(val){
  // 　　　　　console.log(curVal,oldVal);
  // 　　 }
  //   },
  mounted() {
	JsBarcode(this.$refs.barcode, "222222");
    if (this.$refs.divide.checked) {
      this.payShow = true;
    } else {
      this.payShow = false;
    }
    if (this.$refs.pay1.checked) {
      this.payFlag1 = true;
    } else {
      this.payFlag1 = false;
    }
    if (this.$refs.pay2.checked) {
      this.payFlag2 = true;
    } else {
      this.payFlag2 = false;
    }
  },
  methods: {
    ...mapActions({ dispatch_mu: "student_add/dispatch_mu" }),
    addPhase1() {
      this.array1.push(1);
    },
    addPhase2() {
      this.array2.push(1);
    },
    addHouse() {
      this.arrayHouse.push(1);
    },
    payPanel() {
      if (this.$refs.divide.checked) {
        this.payShow = true;
      } else {
        this.payShow = false;
      }
    },
    payMoney() {
      if (this.$refs.pay1.checked) {
        this.payFlag2 = false;
        this.payFlag1 = true;
      } else {
        this.payFlag1 = false;
      }
      if (this.$refs.pay2.checked) {
        this.payFlag1 = false;
        this.payFlag2 = true;
      } else {
        this.payFlag2 = false;
      }
    },
    payHide(){
        if (this.roomMoney == 0) {
                this.student_info.enter_time1 = "";
              } else {
                this.student_info.enter_time = this.nowDate;
              }
              if (this.$refs.divide1.checked) {
                this.xianshi = true;
                if (this.isRoomMoney == 1) {
                  this.payShow = true;
                }
              } else {
                this.xianshi = false;
                this.payShow = false;
              }
    },
    min2() {
      if (this.roomMoney1 <= 0) {
        this.zhusuFee1 = 0;
      }
      if (this.roomMoney2 <= 0) {
        this.zhusuFee2 = 0;
      }
    },
  }
};
</script>
<style scoped>
input[type="radio"],
input[type="checkbox"] {
  width: 17px;
  height: 17px;
  vertical-align: middle;
}
.title {
  height: 59px;
  line-height: 59px;
  border-bottom: 1px solid #bbbbbb;
  font-size: 16px;
  font-weight: bold;
}
.tag {
  float: left;
  margin-left: 45px;
  margin-top: 15px;
  margin-right: 9px;
  width: 6px;
  height: 30px;
  background: #ff404b;
}
.main {
  width: 1180px;
  height: 1327px;
  background: #eee;
}
.main_form {
  background: #fff;
  margin-left: 41px;
  margin-top: 18px;
  width: 884px;
  height: 1275px;
  line-height: 20px;
  left: 301px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  box-shadow: 0px 0px 1px 0px rgba(217, 217, 217, 1);
  border: 1px solid rgba(255, 255, 255, 1);
  padding-left: 105px;
  padding-right: 109px;
  padding-top: 52px;
}
.form_header {
  height: 93px;
}
.header_logo {
  float: left;
}
.header_logo img {
  width: 127px;
  height: 45px;
}
.header_name {
  width: 221px;
  height: 32px;
  line-height: 32px;
  color: rgba(16, 16, 16, 1);
  font-size: 22px;
  text-align: center;
  float: left;
  margin-left: 207px;
}
.header_code {
  float: right;
  width: 198px;
  height: 66px;
}
.header_code img {
  width: 100%;
  height: 100%;
}
.form_top {
  width: 884px;
  height: 117px;
  line-height: 20px;
  border: 1px solid rgba(187, 187, 187, 1);
  padding-left: 107px;
  box-sizing: border-box;
}
.top_row {
  margin-top: 18px;
  margin-bottom: 20px;
}
.top_row div {
  float: left;
  margin-right: 90px;
}
.top_row div label {
  line-height: 23px;
  color: rgba(153, 153, 153, 1);
  font-size: 16px;
  margin-right: 8px;
}
.top_row div span {
  line-height: 23px;
  color: rgba(41, 41, 41, 1);
  font-size: 16px;
}
.form_content {
  margin-top: 7px;
  width: 884px;
  line-height: 20px;
  border: 1px solid rgba(187, 187, 187, 1);
  box-sizing: border-box;
}
.content_row1 {
  border-bottom: 1px solid rgba(187, 187, 187, 1);
  box-sizing: border-box;
}
.row1_left {
  width: 104px;
  line-height: 14.5em;
  border-right: 1px solid rgba(187, 187, 187, 1);
  box-sizing: border-box;
  float: left;
  color: rgba(41, 41, 41, 1);
  font-size: 16px;
  text-align: center;
  font-weight: bold;
}
.row1_left2 {
  height: 160px;
  line-height: 160px;
}
.row1_left3 {
  height: 270px;
  line-height: 270px;
}
.row1_left4 {
  height: 70px;
  line-height: 70px;
}
.row1_right {
  overflow: hidden;
}
.right_top {
  height: 53px;
  line-height: 53px;
  border-bottom: 1px solid rgba(187, 187, 187, 1);
  box-sizing: border-box;
}
.right_top label {
  font-weight: bold;
  margin: 0 34px;
}
.right_top span {
  margin-right: 116px;
}
.right_bottom {
  padding-left: 34px;
}
.right_bottom2 {
  padding-left: 0px;
}
.bottom_row1 {
  margin-top: 25px;
}
.bottom_row1 .bold {
  font-weight: bold;
  color: #000;
}
.bottom_row1 label,
.bottom_row1 span {
  line-height: 23px;
  color: rgba(153, 153, 153, 1);
  font-size: 16px;
  margin-right: 10px;
}
.bottom_row1 input {
  border: none;
  border-bottom: 1px solid #ccc;
  margin-right: 5px;
}
.bottom_row1 .inputw {
  width: 100px;
}
.bottom_row1 .inputw2 {
  width: 130px;
}
.bottom_row1 select {
  border: none;
  border-bottom: 1px solid #ccc;
}
.bottom_row2 {
  height: 110px;
}
.phase {
  height: 26px;
  line-height: 23px;
  color: rgba(102, 102, 102, 1);
  font-size: 16px;
  margin-top: 16px;
}
.add {
  float: left;
  font-style: normal;
  width: 24px;
  height: 24px;
  background-color: rgba(153, 153, 153, 1);
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-left: 100px;
}
.phase input {
  border: none;
  border-bottom: 1px solid #ccc;
  width: 120px;
}
.phase span {
  margin: 0 10px;
}
.row-input {
  margin-left: 100px;
  margin-top: 20px;
}
.bill {
  display: inline-block;
  margin: 0 10px;
}
.bottom_row {
  height: 173px;
  overflow: auto;
  margin-left: 34px;
}
.bottom_row3 {
  height: 60px;
  line-height: 60px;
  background: rgb(238, 238, 238);
  color: rgb(229, 28, 35);
  font-size: 16px;
}
.bottom_row3 input {
  border: none;
  border-bottom: 1px solid #ccc;
  background: rgb(238, 238, 238);
}
.bottom_row3_l {
  float: left;
  margin-left: 36px;
}
.bottom_row3_r {
  float: right;
  margin-right: 53px;
}
.sign {
  height: 27px;
  line-height: 23px;
  color: rgba(102, 102, 102, 1);
  font-size: 16px;
  margin-top: 30px;
}

.sign p,
.sign input {
  float: left;
}
.sign p:first-child {
  margin-right: 117px;
}
.stuSign {
  margin-left: 117px;
}
.sign input {
  border: none;
  border-bottom: 1px solid #ccc;
}
.footer {
  height: 50px;
  float: right;
  margin-right: 100px;
  margin-top: 25px;
  margin-bottom: 64px;
}
.footer div {
  height: 50px;
  margin-right: 50px;
  float: left;
  color: #fff;
  left: 936px;
  font-size: 18px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 1);
  line-height: 50px;
  border-radius: 7px;
}
.back {
  width: 150px;
  background-color: rgba(245, 140, 140, 1);
}
.back a {
  color: #fff;
}
.save {
  width: 150px;
  background: #fc2828;
}
.print {
  width: 58px;
  background-color: rgba(245, 140, 140, 1);
}
.print i {
  display: block;
  font-size: 30px;
  padding-top: 10px;
}
input[type="text"]:disabled {
  background: #fff;
}
</style>