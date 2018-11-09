# vue-login
sea-koa 的前端页面。  

类型：
* api-login-session 分支为 sea-koa 的同名分支的前端页面
* api-login-token 分支为 sea-koa 的同名分支的前端页面

api-login-token 说明：
* 登录获取 token 后存储
* 退出后删除 token 
* axios 统一请求拦截携带 token
* vue-router 路由跳转前进行验证页面是否需要 token

## 启动步骤
1. 启动后端项目并配置 host
    ```
    127.0.0.1   www.a.com
    ```
2. 下载安装依赖
    ```
    git clone https://github.com/xinghaiyang1994/vue-login.git

    rm -rf .git
    
    cnpm i 

    npm run dev
    ```