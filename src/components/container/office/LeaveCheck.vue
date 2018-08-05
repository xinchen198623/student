<template>
    <div class="leave-box">
        <header>
            <h2>东时教育-请假单审批</h2>
        </header>
        <div class="leave-ctn">
            <ul class="ctn-header">
                <li>
                    <router-link to="/leave_check/waiting">待审批</router-link>
                </li>
                <li>
                    <router-link to="/leave_check/agreed">已同意</router-link>
                </li>
                <li>
                    <router-link to="/leave_check/refuse">已拒绝</router-link>
                </li>
            </ul>
            <div class="ctn-list">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'LeaveCheck',
        data(){
            return {

            }
        }
    }
</script>