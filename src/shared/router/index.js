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
	const getToken = $cookies.get('token');
	if(to.name !== 'login' && !getToken) return { name: 'login' }

	if(getToken && to.name == 'login') return { name: from.name };
	return true
})

export default router;