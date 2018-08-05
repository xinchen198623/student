<template>
<div>
	<div class="title">
		<span class="tag"></span>
		欢迎新同学加入东时教育
	</div>
	<div class="content clearfix">
    <keep-alive  >
			<form enctype="multipart/form-data" name="upload_form">
				<div class="content_left">
					<div class="photo">						
						<label for="imgfile">上传照片</label>
						<input name="imgfile" type="file" accept="image/gif, image/jpeg" class="file-btn" id="imgfile"/>
						<i class="icon-image photo-img"></i>
						<div class="hline"></div>
					</div>
					<div class="imformation">
						<div class="stuName">{{student_info.name}}</div>
						<div class="line"></div>
						<div class="graduation">
							<i class="icon-graduation-cap"></i>
						</div>
						<div class="study_enter">学历登记</div>
						<div class="line2"></div>
						<div class="hline hline2"></div>
						<div class="study graduation">
							<i class="icon-profile"></i>
						</div>
						<div class="hline hline3"></div>
						<div class="study_enter situation">学习情况</div>
						</div>					
					</div>
				<div class="content_right">
					<div class="table-box">
						<div class='table-row clearfix'>
							<div class="row-left row-left1">
								<label>姓名</label>
								<input type="text" v-model="student_info.name">
							</div>
							<div class="row-right">
								<label>性别</label>
								<input type="radio" name='sex' v-model="student_info.sex" value="1"><label>男</label>
								<input type="radio" name='sex' v-model="student_info.sex" value="0"><label>女</label>
							</div>
						</div>
						<div class='table-row clearfix'>
							<div class="row-left">
								<label>身份证号</label>
								<input type="text" v-model="student_info.idcard">
							</div>
							<div class="row-right">
								<label>联系电话</label>
								<input type="text" v-model="student_info.phone">
							</div>
						</div>
						<div class='table-row clearfix'>
							<div class="row-left">
								<label>籍贯</label>
								<input type="text" v-model="student_info.province" class="diff2">
								<label>省</label>
								<input type="text" v-model="student_info.city" class="city">
								<label>市</label>
								<input type="text" v-model="student_info.address"  class="diff">
							</div>		
						</div>
						<div class='table-row clearfix'>
							<div class="row-left">
								<label>紧急联系人</label>
								<input type="text" v-model="student_info.contact_name" class="diff2">
								<label>紧急联系人电话</label>
								<input type="text" v-model="student_info.contact_phone">
							</div>
						</div>
					</div>
					<div class="table-box">
						<div class='table-row clearfix'>
							<div class="row-left row-left3">
								<label>毕业学校</label>
								<input type="text" v-model="student_info.school">
							</div>
							<div class="row-right">
								<label>毕业年份</label>
								<input type="text" v-model="student_info.school_year" placeholder="">
							</div>
						</div>
						<div class='table-row clearfix'>
							<div class="row-left row-left4">
								<label>文化程度</label>
								<input type="radio" v-model="student_info.school_level" name='education' value="0"><label>初中</label>
								<input type="radio" v-model="student_info.school_level" name='education' value="1"><label>中专</label>
								<input type="radio" v-model="student_info.school_level" name='education' value="2"><label>高中</label>
								<input type="radio" v-model="student_info.school_level" name='education' value="3"><label>专科</label>
								<input type="radio" v-model="student_info.school_level" name='education' value="4"><label>本科</label>
							</div>
							<div class="row-right">
								<label>专业</label>
								<input type="text" v-model="student_info.school_specailty" class="diff2">
							</div>
						</div>
						<div class='table-row clearfix'>
							<div class="row-left">
								<label>身份状态</label>
								<input type="radio" v-model="student_info.school_state" name='state' value="0"><label>在校</label>
								<input type="radio" v-model="student_info.school_state" name='state' value="1"><label>离校</label>
								<input type="radio" v-model="student_info.school_state" name='state' value="2"><label>工作</label>
								<input type="radio" v-model="student_info.school_state" name='state' value="3"><label>待业</label>
							</div>
						</div>
					</div>
					<div class="table-box">
						<div class='table-row clearfix'>
							<div class="row-left">
								<label class="bar">专业课程</label>
								<input type="radio" name='class' v-model="student_info.specialty_id" value="0"><label>UI/UE</label>
								<input type="radio" name='class' v-model="student_info.specialty_id" value="1"><label>HTML5+Java</label>
								<input type="radio" name='class' v-model="student_info.specialty_id" value="2"><label>HTML5+Python</label>
								<input type="radio" name='class' v-model="student_info.specialty_id" value="3"><label>软件测试</label>
							</div>
						</div>
						<div class='table-row clearfix'>
							<div class="row-left">
								<label class="bar">学制</label>
								<input type="radio" v-model="student_info.specialty_month" name='time' value="6"><label>6个月</label>
								<input type="radio" v-model="student_info.specialty_month" name='time' value="10"><label>10个月</label>
								<input type="radio" v-model="student_info.specialty_month" name='time' value="30"><label>30个月</label>
							</div>
						</div>
						<div class='table-row clearfix'>
							<div class="row-left">
								<label class="bar">报名来源</label>
								<input type="radio" name='origin' value="0" v-model="student_info.src"><label>网络推广</label>
								<input type="radio" name='origin' value="1" v-model="student_info.src"><label>社招</label>
								<input type="radio" name='origin' value="2" v-model="student_info.src"><label>校招</label>
								<input type="radio" name='origin' value="3" v-model="student_info.src"><label>转介绍</label>
							</div>
						</div>
						<div class='table-row clearfix'>
							<div class="row-left row-left2">
								<label class="bar">招生老师</label>
								<el-select size="small"  class='input_diff' name="enroller_id" v-model="student_info.enroller_id">
									<el-option value="x" label="请选择" disabled></el-option>
									<el-option v-for="(item,index) in enroller_list" :label="item.name" :value="index" :key="item.id"></el-option>
								</el-select>
							</div>
							<div class="row-right">
								<label class="bar">咨询老师</label>
								<el-select size="small" name="consulter_id" v-model="student_info.consulter_id">
									<el-option value="x" label="请选择" disabled></el-option>
									<el-option v-for="(item,index) in consulter_list" :value="index" :label="item.name" :key="item.id"></el-option>
								</el-select>
							</div>
						</div>
						<div class='table-row clearfix'>
							<div class="row-left row-left2">
								<label class="bar">班级</label>
								<el-select size="small" name="class_id" v-model="student_info.class_id">
									<el-option value="x" label="请选择" disabled></el-option>
									<el-option v-for="(item,index) in class_list" :value="item.id" :label="item.name" :key="index"></el-option>
								</el-select>
							</div>
							<div class="row-right">
								<label class="bar">进班日期</label>
								<el-date-picker size="small" v-model="student_info.enter_time" type="date" placeholder="选择日期"></el-date-picker>
							</div>
						</div>
					</div>
				</div>

				<div class="submit" @click="entering">
					<a href="javascript:;">录入</a>
				</div>
				<div class=" modify">修改</div>
			</form>
    </keep-alive>
	</div>

</div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import {setStore,getStore} from '@/util';
import store  from  '@/store';
import Api  from '@/api'
export default {
  name: "register",
  data() {
    return {
      student_info: {
        name: "",
        specialty_id: "0",
        specialty_month: "6",
        phone: "",
        idcard: "",
        school: "",
        school_year: "",
        school_level: "0",
        school_specialty: "",
        school_state: "0",
        province: "",
        city: "",
        address: "",
        contact_name: "",
        contact_phone: "",
        enroller_id: "x",
        consulter_id: "x",
        class_id: "x",
        src: "0",
        sex: "1",
        enter_time: "",
        enter_time1: "",
        jiaofei_time1:"",
        jiaofei_time2:"",
        jiaofei_time3:""
      }
    };
  },
  computed: {
    ...mapState(["enroller_list", "consulter_list","class_list","student_add"])
  },
  methods: {
    entering() {
      this.$http
        .post("http://www.alipapa.vip:8081/dongshi/student",this.student_info)
        .then(res => {
          if (res.data.ret == 1) {
            //  this.student_add.commit(store,res.data.student);
           this.student_add.student_info = res.data.student;
            setStore("student_info",this.student_add.student_info)
            console.log(this.$root.$refs.nav);
            console.log(this.student_add.student_info);
            this.$router.push("/paymentTotal");
          }
        });
    }
  }
};
</script>
<style scoped>
input[type="radio"] {
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
.content {
  position: relative;
}
.content_left {
  width: 200px;
  margin-left: 55px;
  float: left;
  height: 1025px;
  position: relative;
}
.imformation {
  position: absolute;
  top: 33px;
  left: 0;
}
.photo {
  width: 128px;
  height: 156px;
  border-width: 11px 9px;
  border-style: solid;
  border-color: #fff;
  border-radius: 5px;
  margin-top: 20px;
  text-align: center;
}
.photo label {
  display: block;
  color: #aeaeae;
  margin-top: 50px;
}
.file-btn {
  display: none;
}
.photo-img {
  color: #aeaeae;
  font-size: 27px;
}
.stuName {
  width: 70px;
  height: 70px;
  line-height: 70px;
  background: #f58c8c;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 136px;
  left: 38px;
  font-size: 18px;
}
.line {
  width: 3px;
  height: 95px;
  background: #fff;
  position: absolute;
  top: 206px;
  left: 70px;
}
.graduation {
  width: 70px;
  height: 70px;
  line-height: 70px;
  background: #fff;
  border-radius: 50%;
  color: #adadad;
  text-align: center;
  position: absolute;
  top: 300px;
  left: 38px;
  font-size: 32px;
}
.study_enter {
  width: 120px;
  height: 40px;
  line-height: 40px;
  background: #f58c8c;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 370px;
  left: 12px;
  font-size: 18px;
}
.line2 {
  width: 3px;
  height: 160px;
  background: #fff;
  position: absolute;
  top: 410px;
  left: 70px;
}
.study {
  top: 570px;
}
.situation {
  top: 640px;
}
.content_right {
  float: left;
  width: 870px;
  height: 1025px;
}
.table-box:first-child {
  margin-top: 20px;
}
.table-box {
  padding: 20px 100px 30px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 25px;
}
.table-row {
  line-height: 25px;
  margin-top: 20px;
}
.row-left {
  float: left;
  margin-right: 80px;
  position: relative;
}
.el-select,
.el-date-editor {
  width: 180px;
}

.row-left1 {
  width: 252px;
}
.row-right {
  float: left;
}
.table-row {
  color: #afafaf;
}
.table-row input,
.table-row select {
  border: none;
  border-bottom: 1px solid #afafaf;
}
.table-row input.diff {
  width: 220px;
}
.table-row input.city {
  width: 90px;
}
.table-row input.diff2 {
  width: 90px;
}
.table-row label {
  margin: 0 5px;
}
.submit,
.modify {
  width: 150px;
  height: 50px;
  background: #fc2828;
  border-radius: 5px;
  position: absolute;
  bottom: 150px;
  right: 210px;
  text-align: center;
  color: #fff;
  line-height: 50px;
  font-size: 17px;
}
.submit a {
  color: #fff;
}
.modify {
  background: #f58c8c;
  right: 40px;
}
.hline {
  width: 54px;
  height: 3px;
  background: #fff;
  position: absolute;
  top: 119px;
  left: 146px;
}
.hline2 {
  width: 93px;
  position: absolute;
  top: 330px;
  left: 107px;
}
.hline3 {
  width: 93px;
  position: absolute;
  top: 603px;
  left: 107px;
}
.table-row input.input_diff {
  border: 1px solid #ccc;
  text-indent: 30px;
}
.search {
  position: absolute;
  top: 6px;
  left: 90px;
}
.table-row label.bar {
  display: inline-block;
  width: 70px;
}
.row-left2 {
  width: 270px;
}
.row-left3 {
  width: 335px;
}
.row-left4 {
  margin-right: 22px;
}
</style>