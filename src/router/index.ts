import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/home'

// routes config
const routes: RouteRecordRaw[] = [
	{ path: '/', name: 'home', component: Home },
	{
		path: '/members',
		name: 'members',
		component: () => import('@/pages/members')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/pages/login')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
