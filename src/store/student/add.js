export default {
    namespace:true,
    state:{
        student_info:null
    },
    mutations:{
        commit_student_info(state,opt){
            state.student_info = opt;
        }
    },
    actions:{
        dispatch_mu(store){
            store.commit('commit_student_info');
        }
    }
}