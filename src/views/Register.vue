<template>
    <div class="main-body">
        <h1>注册</h1>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="账号" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="重复密码" prop="repeat">
                <el-input v-model="form.repeat" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">注册</el-button>
                <el-button @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>        
    </div>
</template>

<script>
import {
    postRegister
} from '../api'

export default {
    data () {
        return {
            form: {
                name: '',
                password: '',
                repeat: '',
            },
            rules: {
                name: [
                    { required: true, message: '不能为空', trigger: 'change' }
                ],
                password: [
                    { required: true, message: '不能为空', trigger: 'change' }
                ],
                repeat: [
                    { required: true, message: '不能为空', trigger: 'change' }
                ],
            }
        }
    },
    methods: {
        toRegister () {
            let data = this.form
            postRegister(data).then(res => {
                if (res.code === 0) {
                    this.$message({
                        type: 'success',
                        message: '注册成功。'
                    })
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
                    this.toRegister()
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