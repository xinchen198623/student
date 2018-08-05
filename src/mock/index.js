import Mock from 'mockjs'

// Mock.mock(rurl, template)
let data1 = Mock.mock(/baner_settings/, {
    'list': {
        'id': 1,
        'name':'xiaoming'
    }
})

let data2 = Mock.mock(/test/, {
    'list|1-10': [{
        'ids|+1': 1,
        'email': '@EMAIL'
    }]
})

let getData = Mock.mock(/getParam/, 'get', function(option) {
    console.log(option)
    return Mock.mock({
        "user|1-3": [{
            'name': '@cname',
            'id': 88
        }
      ]
    });
});

let postData = Mock.mock(/postParam/, 'post', function(option) {
    console.log(option)
    let obj = JSON.parse(option.body);
    return Mock.mock({
        "user|1-10": [{
            'name': obj.firstName,
            'id': 88
        }
      ]
    });
});
/*缴费记录*/  
let records = Mock.mock(/records/, 'get', function() {
    return Mock.mock({
        "tuition_num|100-500": 452,
        "un_tuition_num|1-10": 2,
        "dormiroty_num|100-500": 329,
        "un_dormiroty_num|1-10": 8,
        "week_fee|1000000-5000000":32567234,
        "month_fee|4-8":[{
            'month|+1':1,
            'percent|10-90':60
        }],
        "week_tuition|7":[{
            'day|+1':1,
            'paid|5-10':5,
            'un_paid|1-5':3,
        }],
        "week_dormiroty|7":[{
            'day|+1':1,
            'paid|5-10':5,
            'un_paid|1-5':3,
        }],
    });
});

/*缴费统计页面*/ 
// 获取班级
let getClass = Mock.mock(/getClass/, {
    'lists': [1701,1702,1703,1704,1705,1706,1707,1708,1709]
})
// 根据班级获取缴费统计信息:obj.state--0:未交，1：交一部分，2：交清
const getPayInfo = Mock.mock(/getPayInfo/, 'post', function(option) {
    // console.log(option.class)
    let obj = JSON.parse(option.body);
    if(obj.order || obj.name){
        return Mock.mock({
            "total":1,
            "nowPage":1,
            "stuInfo": [{
                'serial|+1': 200,
                'name': obj.name?obj.name:'@cname',
                'order':obj.order?obj.order:3241513 ,
                'class':obj.class,
                'date':'@date("yyyy/MM/dd")',
                'totalMoney':19800,
                'paid':5000,
                'unPaid':14800
            }]
        })
    }else if(obj.nowPage){
        return Mock.mock({
            "total":1550,
            "nowPage":obj.nowPage,
            "stuInfo|15": [{
                'serial|+1': 200,
                'name': '@cname',
                'order|+5':12323330,
                'class':obj.class,
                'date':'@date("yyyy/MM/dd")',
                'totalMoney':19800,
                'paid':5000,
                'unPaid':14800
            }]
        });
    }else{
        return Mock.mock({
            "total":1550,
            "nowPage":1,
            "stuInfo|15": [{
                'serial|+1': 200,
                'name': '@cname',
                'order|+5':12323330,
                'class':obj.class,
                'date':obj.date?obj.date:'@date("yyyy/MM/dd")',
                'totalMoney':19800,
                'paid':5000,
                'unPaid':14800
            }]
        });
    }
});

/*代缴记录页面*/ 
//根据订单号单号查询学生缴费信息,type:0-学杂费，1-学费，2-住宿费;state:0-已结清，1-到时间可以确认，2-未到时间不可以确认收款
const getPerInfo = Mock.mock(/getPerInfo/, 'post', function(option) {
    // console.log(option.class)
    let obj = JSON.parse(option.body);
    return Mock.mock({
        "stuInfo": {
            'name': '@cname',
            'id':'@id' ,
            'major':'HTML5+JAVA',
            'edu_time':'8',
            'class':'1706',
            'tel':'132345345234',
            'totalMoney':19800,
            'menue':[
                {
                    'serial': 302,
                    'type':0,
                    'date':'2017/11/04',
                    'money':4000,
                    'paid':4000,
                    'un_paid':0,
                    'state':0,
                },
                {
                    'serial': 302,
                    'type':1,
                    'date':'2018/04/04',
                    'money':5000,
                    'paid':2000,
                    'un_paid':3000,
                    'state':1,
                },
                {
                    'serial': 302,
                    'type':2,
                    'date':'2018/5/22',
                    'money':5000,
                    'paid':2000,
                    'un_paid':3000,
                    'state':2,
                }
            ],
        }
    })
});
//缴费确认   收款方式style-0：现金，1：微信，2：支付宝，3：贷款，4：信用卡，5：银行卡
const confirm = Mock.mock(/confirm/, 'post', function(option) {
    // console.log(option.class)
    let obj = JSON.parse(option.body);
    if(obj.id && obj.time && obj.type && obj.style && obj.paid && obj.receive && obj.note){
        return Mock.mock({
            "stuInfo": {
                'id':obj.id,
                'pay_time':obj.time,
                'type':obj.type,
                'style':obj.style,
                'paid':obj.paid,
                'receive':obj.receive,
                'note':obj.note
            }
        })
    }else{
        return 'fail';
    }
    
});



/*财务管理页面相关接口*/ 
//获取财务累计出账和入账数据
let finance = Mock.mock(/finance$/, "get", function() {
  return Mock.mock({
    "week_in|100-500": 452,
    "month_in|1000-5000": 2000,
    "year_in|10000-50000": 32900,
    "list_in|12": [
      {
        "month|+1": 1,
        "amount|10000-80000": 23000
      }
    ],
    "week_out|100-500": 200,
    "month_out|1000-8000": 3000,
    "year_out|10000-80000": 40000
  });
});
// 根据日期获取出账统计详细数据，需要传过来起止日期格式：2017/07/28
let financeDetail = Mock.mock(/financeDetail/, "post", function(option) {
  // console.log(option.class)
  let obj = JSON.parse(option.body);
  if (obj.dayFrom && obj.dayTo) {
    return Mock.mock({
      "refund_num|10-50": 452,
      refund_money: 1000,
      consult_refund: 200,
      manage_refund: 300,
      person_refund: 400,
      teach_refund: 600,
      refund: {
        num: 20,
        money: 680
      },
      accommodation: {
        num: 20,
        money: 680
      },
      bus: {
        num: 20,
        money: 680
      },
      electricity: {
        num: 20,
        money: 680
      },
      consumption: {
        num: 20,
        money: 680
      },
      activity: {
        num: 20,
        money: 680
      },
      advertise: {
        num: 20,
        money: 680
      },
      drop: {
        num: 20,
        money: 680
      },
      business: {
        num: 20,
        money: 680
      },
      computer: {
        num: 20,
        money: 680
      }
    });
  } else {
    return "fail";
  }
});

/*出账查询页面接口*/ 
// 获取今日出账状态
let a = 0
let financeState = Mock.mock(/financeState/, "get", function() {
  a+=1;
  return Mock.mock({
    new_item: a,
    waite_item: 21 - a,
    end_item: 23 + a
  });
});




export default {
  data1,
  data2,
  getData,
  postData,
  records,
  getClass,
  getPayInfo,
  getPerInfo,
  confirm,
  finance,
  financeDetail,
  financeState,
};