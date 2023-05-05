import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUs.vue'
import Services from '../views/Services.vue'
import ServiceDetail from '../views/ServiceDetail.vue'
import Team from '../views/Team.vue'
import Gallery from '../views/Gallery.vue'
import Pricing from '../views/Pricing.vue'
import Blogs from '../views/Blogs.vue'
import BlogDetail from '../views/BlogDetail.vue'
import Faq from '../views/Faq.vue'
import ContactUs from '../views/ContactUs.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about-us',
    name: 'aboutus',
    component: AboutUs
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/service-detail',
    name: 'servicedetail',
    component: ServiceDetail
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: Pricing
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs
  },
  {
    path: '/blog-detail',
    name: 'blogdetail',
    component: BlogDetail
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq
  },
  {
    path: '/contact-us',
    name: 'contactus',
    component: ContactUs
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
