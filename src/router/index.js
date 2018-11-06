import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../views/Index'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: IndexPage
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
    ]
})
