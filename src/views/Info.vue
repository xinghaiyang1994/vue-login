<template>
    <div class="index-page main-body">
        <div>{{info.name}}</div>
        <el-button @click="$router.push('/')" type="primary">返回首页</el-button>
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
            info: {}
        }
    },
    methods: {
        getUserInfo () {
            getInfo().then(res => {
                if (res.code === 0) {
                    this.info = res.data
                } else {
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
}
</script>

