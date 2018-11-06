import ajaxInit from 'sea-axios'

import { API } from './api'

const ajax = ajaxInit({
    initCookie: true
})

// 登录
function postLogin (data) {
    return ajax({
        url: API.LOGIN,
        type: 'post',
        data
    })
}

// 注册
function postRegister (data) {
    return ajax({
        url: API.REGISTER,
        type: 'post',
        data
    })
}

// 获取当前登录人的信息
function getInfo () {
    return ajax({
        url: API.INFO,
        type: 'get'
    })
}

// 退出
function getLogout () {
    return ajax({
        url: API.LOGOUT,
        type: 'get'
    })
}

export {
    postRegister,
    postLogin,
    getInfo,
    getLogout
}

