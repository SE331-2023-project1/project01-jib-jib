import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '@/views/StudentView.vue'
import StudentDetail from '@/views/event/StudentDetail.vue'
import AdviserDetail from '@/views/event/AdviserDetail.vue'
import LayoutView from '@/views/event/LayoutView.vue'
import NProgress from 'nprogress'
import AdviserView from '@/views/AdviserView.vue'

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
      path: '/professer',
      name: 'professer',
      component: AdviserView,
      props: (route) => ({ page: parseInt((route.query?.page as string) || '1') })
    },
    {
      path: '/student/:id',
      name: 'event-layout',
      component: LayoutView,
      props: true,
      children: [
        {
          path: '/students/:id',
          name: 'student-detail',
          component: StudentDetail,
          props: true
        },
        {
          path: '/student/adviser/:id',
          name: 'adviser-detail',
          component: AdviserDetail,
          props: true
        }
      ]
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
