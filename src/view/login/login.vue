<template class="body">
    <div class="background">
        <div class="head">
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>玩一玩web登录</span>
                    </div>
                </template>

                <el-form :model="form" label-width="80px" ref="form" size="small" :rules="rules">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="form.password"  placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-button @click="login()" class="button" type="primary">登录</el-button>
                    <el-button @click="logout()" class="button" type="primary">登出</el-button>
                </el-form>
            </el-card>
        </div>
    </div>
</template>
<script>
    // import store from '../../config/loaclStotage'
    // import localStorage from "../../config/localStorage";

    export default {
        name: "login",
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 8, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ],
                    // region: [
                    //     { required: true, message: '请选择活动区域', trigger: 'change' }
                    // ],
                    // date1: [
                    //     { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    // ],
                    // date2: [
                    //     { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    // ],
                    // type: [
                    //     { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    // ],
                    // resource: [
                    //     { required: true, message: '请选择活动资源', trigger: 'change' }
                    // ],
                    // desc: [
                    //     { required: true, message: '请填写活动形式', trigger: 'blur' }
                    // ]
                }
            }
        },
        methods: {
            login() {
                this.$http.post('login', {...this.form}, {method: 'POST'}).then(res => {
                    console.log(res);
                    // this.$store.setters.
                });
            },
            logout() {
                this.$http.post('/test/hello',{...this.form},{method:'POST'}).then(res => {
                    console.log(res);
                    // this.$store.setters.
                });
            }
        }

    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .background {
        background: url("../../assets/loginBackRound.png") no-repeat;
        background-size: 100%;
        width: 100%;
        padding-bottom: 18%;
        height: 42vh;
        margin: 0;
        padding-top: 12%;
    }

    .head {
        width: 25%;
        margin: auto;
    }

</style>
