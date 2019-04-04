import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import OrderListPage from '@/pages/orderList'
import CountPage from '@/pages/detail/count'
import AnalysisPage from '@/pages/detail/analysis'
import PublishPage from '@/pages/detail/publish'
import ForecastPage from '@/pages/detail/forecast'
import FormTestPage from '@/pages/detail/formTest'
import CityPage from '@/pages/city'

Vue.use(Router)

let router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/count',
      children: [
        {
          path: 'forecast',
          name: 'forecast',
          component: ForecastPage
        },
        {
          path: 'analysis',
          name: 'analysis',
          component: AnalysisPage
        },
        {
          path: 'publish',
          name: 'publish',
          component: PublishPage
        },
        {
          path: 'count',
          name: 'count',
          component: CountPage
        },
        {
          path: 'formTest',
          name: 'formTest',
          component: FormTestPage,
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'city',
          name: 'city',
          component: CityPage
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log('to', to)
  console.log('from', from)
  // if (to.meta.keepAlive !== undefined) {
  //   to.meta.keepAlive = !to.meta.keepAlive
  // }
  // console.log(to.meta.keepAlive)
  if (to.name === 'formTest') {
    to.meta.keepAlive = true
  }
  if (to.name === 'formTest' && from.name !== 'count') {
    to.meta.keepAlive = false
  }
  console.log('to', to.meta.keepAlive)
  next()
})
export default router
