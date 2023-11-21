import Auth from '../modules/auth/routes'

export default [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/home.vue'),
        redirect: { name: 'main' },
        children: [
            ...Auth,
        {
            path: '/main',
            name: 'main',
            redirect: { name: 'pinia' },
            component: () => import('../pages/home.vue'),
            children: [
				{
					path: 'quill-editor',
					name: 'quill.editor',
					component: () => import('../components/quillEditor.vue')
				},
                {
                    path: 'pinia',
                    name: 'pinia',
                    component: () => import('../components/piniaStore.vue')
                },
                {
                    path: 'content',
                    name: 'content.main',
                    component : () => import('../components/viewMain.vue')
                },
                {
                    path: 'full-calendar',
                    name: 'full.calendar',
                    component: () => import('../components/fullCalendar.vue')
                },
                {
                    path: 'cropperjs',
                    name: 'content.cropper',
                    component: () => import('../components/cropper.vue')
                },
                {
                    path: 'filePond',
                    name: 'file.pond',
                    component: () => import('../components/filePond.vue')
                }
            ]
        }
        ]
    }
]