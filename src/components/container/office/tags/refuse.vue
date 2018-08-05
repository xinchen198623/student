<template>
  <div class="leave-show">
      <div class="leave-item" v-for="(item,index) in list_info" :key="index">{{item.type}}</div>
  </div>
</template>
<script>
    export default {
        name:'vRefuse',
        data(){
            return {
                list_info:[
                    {
                        type:'加班2',
                        person_info:{

                        },
                        history:[
                            
                        ]
                    }
                ]
            }
        }
    }
</script>
