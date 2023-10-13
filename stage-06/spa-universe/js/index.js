import { Router } from './router.js'

const router = new Router()
router.add('/', '/pages/home.html', 'url(./assets/universe-1.png)')
router.add('/universe', '/pages/universe.html', 'url(./assets/universe-2.png)')
router.add('/exploration', '/pages/exploration.html', 'url(./assets/universe-3.png)')
router.add(404, '/pages/404.html', 'url(./assets/universe-1.png)')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()