export default [
    {
        path: '/login',
        name: 'login',
        meta: { layout: 'auth' },
        component: () => import('../pages/authentication.vue')
    }
]