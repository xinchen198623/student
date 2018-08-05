import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/container/student/Register'
import Payment from '@/components/container/student/Payment'
import stuPayment from '@/components/container/payment/StuPayment'
import stuPayments from '@/components/container/payment/StuPayments'
import StuPayinfo from '@/components/container/payment/StuPayinfo'
import chargeOff from '@/components/container/finance/ChargeOff'
import total from '@/components/container/finance/total'
import ProxyCost from '@/components/container/office/ProxyCost'
import BillApporval from '@/components/container/office/BillApproval'
import LeaveCheck from '@/components/container/office/LeaveCheck'

import Waiting from '@/components/container/office/tags/waiting'
import Agreed from '@/components/container/office/tags/agreed'
import Refuse from '@/components/container/office/tags/refuse'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '*',
            redirect: '/'
        },
        {
            path: '/',
            component: Register,
            meta: {
                keepAlive: true // 需要被缓存
            }
        }, {
            path: '/paymentTotal',
            component: Payment,
        
        }, {
            path: '/stuPayment',
            component: stuPayment
        },{
            path: '/stuPayments',
            component: stuPayments
        },{
            path: '/StuPayinfo',
            component: StuPayinfo
        },{
            path: '/chargeOff',
            component: chargeOff
        },{
            path: '/total',
            component: total
        },{
            name:'proxy-cost',
            path:'/proxy_cost',
            component:ProxyCost
        },{
            name:'bill-approval',
            path:'/bill_approval',
            component:BillApporval
        },{
            name:'leave-check',
            path:'/leave_check',
            component:LeaveCheck,
            children:[
                {
                    path:'/leave_check',
                    redirect:'waiting'
                },
                {
                    name:'Waiting',
                    path:'waiting',
                    component:Waiting
                },
                {
                    name:'Agreed',
                    path:'agreed',
                    component:Agreed
                },
                {
                    name:'Refuse',
                    path:'refuse',
                    component:Refuse
                }
            ]
        }
    ]
})