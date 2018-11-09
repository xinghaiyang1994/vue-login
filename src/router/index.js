import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '../views/Index'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Info from '../views/Info.vue'

Vue.use(Router)

const router = new Router({
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
        {
            path: '/info',
            component: Info,
            meta: {
                auth: true     
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.auth && !localStorage.getItem('token')) {
        return next('/login')
    } 
    next()
})

export default router
