import { createRouter, createWebHistory } from "vue-router";
import routes from './routes.js'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		...routes
	]
})

router.beforeEach((to, from) => {
	console.log('VOY A: ', to);
	console.log('VENGO DE: ', from);
})

export default router;