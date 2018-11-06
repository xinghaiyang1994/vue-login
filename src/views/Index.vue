<template>
    <div class="index-page main-body">
        <div v-if="isLogin">
            <div>{{info.name}}</div>
            <el-button @click="logout" type="primary">退出</el-button>
        </div>
        <div v-else>
            <router-link to="/login">
                <el-button type="primary">登录</el-button>
            </router-link>
            <router-link to="/register">
                <el-button type="primary">注册</el-button>
            </router-link>
        </div>
    </div>
</template>

<script>
import {
    getInfo,
    getLogout
} from '../api'

export default {
    data () {
        return {
            isLogin: false,
            info: {}
        }
    },
    methods: {
        getUserInfo () {
            getInfo().then(res => {
                if (res.code === 0) {
                    this.isLogin = true
                    this.info = res.data
                } else {
                    this.isLogin = false
                    console.log(res)
                }
            }).catch(err => {
                console.log(err)
            })
        },
        logout () {
            getLogout().then(res => {
                if (res.code === 0) {
                    this.$message({
                        type: 'success',
                        message: '退出成功。'
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
        }
    },
    created () {
        this.getUserInfo()
    },
    updated () {
        this.getUserInfo()
    }
}
</script>

