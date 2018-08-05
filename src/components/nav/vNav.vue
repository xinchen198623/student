<template>
	<div>
		<div class="logo">
			<div class="logo-img">
				<img src="../../assets/img/logo.png" />
			</div>
		</div>
		<div>
			<ul class="navUl active">
				<li class="navLi" v-for="(item,index) in navArr" :key="index">
					<span class="navManager" :class="{active:index==nowIndex}" @click="stuManager(index)"><i class="icon-user"></i>{{item.title}}<i class="icon-circle-down down"></i></span>	
					<div class='navChild' v-show="nowIndex==index">
						<ul class='navChildUl'>
							<li v-for="(nav,i) in item.children" :key="i" :class="{check:item.nowIndex==i}" @click="tab(index,i)">
								<router-link :to='nav.path' class='navChildLi'>{{nav.title}}
								</router-link>
							</li>
						</ul>
					</div>				
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      ManPanelShow: false,
      nowIndex: 0,
      navArr: [
        {
		  title: "学生管理",
		  nowIndex:0,
          children: [
            {
              title: "新生登记",
              path: "/"
            },
            {
              title: "费用合计清单",
              path: "/paymentTotal"
            }
          ]
        },
        {
		  title: "缴费记录",
		  nowIndex:0,
          children: [
            {
              title: "缴费管理",
              path: "/stuPayments"
            },
            {
              title: "学生代缴记录",
              path: "/stuPayment"
            },
            {
              title: "学生缴费信息",
              path: "/stuPayinfo"
            }
          ]
        },
        {
		  title: "财务管理",
		  nowIndex:0,
          children: [
            {
              title: "录入支出",
              path: "/"
            },
            {
              title: "支出统计",
              path: "/stuPayment"
            },
            {
              title: "出账执行",
              path: "/chargeOff"
            },
            {
              title: "费用入账统计表",
              path: "/total"
            }
          ]
        },
        {
		  title: "总经办",
		  nowIndex:0,
          children: [
            {
              title: "代理费用支出",
              path: "/proxy_cost"
            },
            {
              title: "出账审批",
              path: "/bill_approval"
            },
            {
              title: "假单审批",
              path: "/leave_check"
            }
          ]
        }
      ]
    };
  },
  methods: {
    stuManager(index) {
      this.nowIndex = index;
	},
	tab(index,i){
		this.navArr[index].nowIndex = i;
	}
  }
};
</script>
<style>
.logo {
  width: 100%;
  height: 152px;
}
.logo-img img {
  width: 140px;
  height: 50px;
  margin-top: 56px;
  margin-left: 60px;
}
.navUl.active {
  background: #666566;
}
.navLi {
  position: relative;
}
.navManager {
  font-size: 18px;
  color: #fff;
  display: block;
  padding-left: 32px;
  height: 60px;
  line-height: 60px;
  border-left: 8px solid #666566;
  cursor: pointer;
}
.navManager.active {
  border-left: 8px solid #ff404b;
}
.navManager i {
  display: inline-block;
  margin-right: 35px;
  font-size: 20px;
  vertical-align: middle;
}
.navChildUl>li{
	color: #a0a0a0;
}
.navChildLi{
  padding-left: 100px;
  display: block;
  height: 100%;
  line-height: 40px;
  font-size: 16px;
  color:inherit;
  background: inherit;
}
.navChildUl>li.check {
  color: #f4a0a0;
  background: #eee;
}
.down {
  position: absolute;
  right: 0px;
  top: 20px;
}
</style>