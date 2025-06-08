import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
//import CourseDetail from '../views/CourseDetail.vue'
//import LearningPath from '../views/LearningPath.vue'
//import Community from '../views/Community.vue'
//import Cart from '../views/Cart.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('../views/CoursesPage.vue')
  },
  {
    path: '/learning-path',
    name: 'LearningPath',
    component: () => import('../views/LearningPathPage.vue')
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('../views/CommunityPage.vue')
  },
//   { path: '/course/:id', name: 'CourseDetail', component: CourseDetail },
//   { path: '/learning-path', name: 'LearningPath', component: LearningPath },
//   { path: '/community', name: 'Community', component: Community },
//   { path: '/cart', name: 'Cart', component: Cart },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router