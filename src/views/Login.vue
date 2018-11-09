<template>
    <div class="main-body">
        <h1>登录</h1>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="账号" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">登录</el-button>
                <el-button @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>        
    </div>
</template>

<script>
import axios from 'axios'

import {
    postLogin
} from '../api'

import { API } from '../api/api.js'

export default {
    data () {
        return {
            form: {
                name: '',
                password: ''
            },
            captcha: '',
            rules: {
                name: [
                    { required: true, message: '不能为空', trigger: 'change' }
                ],
                password: [
                    { required: true, message: '不能为空', trigger: 'change' }
                ],
            }
        }
    },
    methods: {
        toLogin () {
            let data = this.form
            postLogin(data).then(res => {
                if (res.code === 0) {
                    this.$message({
                        type: 'success',
                        message: '登录成功。'
                    })
                    localStorage.setItem('token', res.data.token)
                    setTimeout(() => {
                        this.$router.push('/')
                    }, 500)
                } else {
                    this.$message({
                        type: 'error',
                        message: res.message
                    })
                    console.log(res)
                }
            }).catch(err => {
                console.log(err)
            })
        },
        submitForm () {
            this.$refs['form'].validate(valid => {
                if (valid) {
                    this.toLogin()
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        resetForm () {
            this.$refs['form'].resetFields()
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