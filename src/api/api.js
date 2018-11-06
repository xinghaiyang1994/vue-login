const ENV = 'DEV'

const DOMAIN_URL = {
    DEV: '//www.a.com:3100'
}

const DOMAIN = DOMAIN_URL[ENV]

const API = {
    LOGIN: DOMAIN + '/user/login',          // 登录
    REGISTER: DOMAIN + '/user/register',    // 注册
    CAPTCHA: DOMAIN + '/user/captcha',      // 验证码
    INFO: DOMAIN + '/user/info',            // 获取当前登录人的信息
    LOGOUT: DOMAIN + '/user/logout',        // 退出
}

export {
    API
}