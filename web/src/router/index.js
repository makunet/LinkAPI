import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/404',
			component: () => import('@/views/NotFound.vue')
		},

		{
			path: '/:pathMatch(.*)',
			redirect: '/404'
		}
	]
})

export default router
