<template>
    <div class="main">
        <h1>{{name}}</h1>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账号">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <!-- <el-form-item label="重复密码">
                <el-input v-model="form.repeat"></el-input>
            </el-form-item> -->
            <img :src="captcha" alt="">
            <el-form-item label="验证码">
                <el-input v-model="form.captcha"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">登录</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>        
    </div>
</template>

<script>
import { API } from '../api/api.js'
export default {
    data () {
        return {
            captcha: API.CAPTCHA,
            logout: API.LOGOUT,
            name: '',
            form: {
                name: '',
                password: '',
                repeat: '',
                captcha: ''
            }
        }
    },
    props: {
        type: {
            type: String,
            default: 'login'
        }
    }
}
</script>

<style lang="scss" scoped>
    .main{
        width: 400px;
        margin: 50px auto 0;
    }
</style>