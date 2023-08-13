import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '@/views/StudentView.vue'
import StudentDetailView from '@/views/StudentDetail.vue'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'students',
      component: StudentView,
      props: (route) => ({ page: parseInt((route.query?.page as string) || '1') })
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/students/:id',
      name: 'student-detail',
      component: StudentDetailView,
      props: true
    }
  ]
})

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
