import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home'

// routes config
const routes: RouteRecordRaw[] = [{ path: '/', name: 'home', component: Home }]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
