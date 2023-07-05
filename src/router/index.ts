import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/Home/HomePage.vue';
const AboutPage = () => import('@/pages/About/AboutPage.vue');
const ProductPage = () => import('@/pages/Product/ProductPage.vue');
const DetailPage = () => import('@/pages/Detail/DetailPage.vue');
const NewsPage = () => import('@/pages/News/NewsPage.vue');
const NotFound = () => import('@/pages/NotFound/NotFound.vue');
const RecruimentPage = () => import('@/pages/Recruitment/RecruitmentPage.vue');
const RecruitmentDetailsPage = () =>
  import('@/pages/Recruitment/RecruitmentDetailsPage/RecruitmentDetailsPage.vue');
const SearchPage = () => import('@/pages/Search/SearchPage.vue');
const ContactPage = () => import('@/pages/Contact/ContactPage.vue');
const PolicyPage = () => import('@/pages/Policy/PolicyPage.vue');
const NewsDetailPage = () => import('@/pages/NewsDetail/NewsDetail.vue');
const routes = [
  {
    path: '/',
    name: 'trangchu',
    component: HomePage
  },
  {
    path: '/trangchu',
    redirect: { path: '/' }
  },
  {
    path: '/gioithieu',
    name: 'gioithieu',
    component: AboutPage
  },
  {
    path: '/sanpham',
    name: 'sanpham',
    component: ProductPage
  },
  {
    path: '/chitiet',
    name: 'chitiet',
    component: DetailPage
  },
  {
    path: '/tuyendung',
    name: 'tuyendung',
    component: RecruimentPage
  },
  {
    path: '/tuyendung/:catchAll(.*)*',
    name: 'chitiettuyendung',
    component: RecruitmentDetailsPage
  },
  {
    path: '/chinhsach',
    name: 'chinhsach',
    component: PolicyPage
  },
  {
    path: '/timkiem',
    name: 'timkiem',
    component: SearchPage
  },
  {
    path: '/tintuc',
    name: 'tintuc',
    component: NewsPage
  },
  {
    path: '/tintuc/:catchAll(.*)*',
    name: 'chitiettintuc',
    component: NewsDetailPage
  },
  {
    path: '/lienhe',
    name: 'lienhe',
    component: ContactPage
  },
  {
    path: '/:catchAll(.*)*',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
