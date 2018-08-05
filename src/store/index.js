import Vue from 'vue'
import Vuex from 'vuex'
import student_add from './student/add.js' //录入返回值
import Api from '@/api'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        enroller_list: null,
        consulter_list: null,
        class_list: null,
        config: null
        // student_list:null
    },
    mutations: {
        getConfig(state, opt) {
            state.config = opt
        },
        getEnrollers(state, opt) {
            state.enroller_list = opt
        },
        getEmployees(state, opt) {
            state.consulter_list = opt;
        },
        getClasses(state, opt) {
            state.class_list = opt;
        },
        // getPostStudentInfos(state,opt){
        //     state.student_list=opt;
        // }
    },
    actions: {
        commit_ecc(store, opt) {
            //获取配置信息接口
            Api.config().
                then(res => {
                    store.commit('getConfig', res.data);
                })
            // this._vm.$http.get('http://www.alipapa.vip:8081/dongshi/config')
            //     .then(res => {
            //         store.commit('getConfig', res.data);
            //     })
                //获取招生老师列表
            Api.enroller().
                then(res => {
                    store.commit('getEnrollers', res.data.enrollers)
                })
            
                //获取咨询师列表
            Api.employee().
                then(res => {
                    store.commit('getEmployees', res.data.employees)
                })
           
                //获取班级列表
            Api.class().
                then(res => {
                   store.commit('getClasses', res.data.clazzs)
                }) 
                //获取数据
            // Api.postStudentInfo().
            //     then(res => {
            //         store.commit('PostPostStudentInfos', res.data.postStudentInfos)
            //     }) 
        }
    },
    modules: {
        student_add
    }
})