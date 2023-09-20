import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/main',
			name: 'main',
			component: () => import('../../App.vue'),
			children: [
				{
					path: 'content',
					name: 'content.main',
					component : () => import('../components/viewMain.vue')
				},
				{
					path: 'cropperjs',
					name: 'content.cropper',
					component: () => import('../components/cropper.vue')
				}
			]
		}
	]
})

export default router;