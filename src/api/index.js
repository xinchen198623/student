import axios from 'axios'
let HTTP = axios.create({
    baseURL:'http://www.alipapa.vip:8081/dongshi/',
    timeout: 1000,
    responseType:'json'
})
export default {
    config(params){
        return HTTP.get('config', {
            params
        })
    },
    enroller(params){
        return HTTP.get('enroller', {
            params
        })
    },
    employee(params){
        return HTTP.get('employee', {
            params
        })
    },
    class(params){
        return HTTP.get('class', {
            params
        })
    },
    postStudentInfo(params){
        return HTTP.post('student', 
            params
        )
    }
}