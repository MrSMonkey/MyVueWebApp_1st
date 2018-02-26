import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import OrderListPage from '@/pages/orderList'
import CountPage from '@/pages/detail/count'
import AnalysisPage from '@/pages/detail/analysis'
import PublishPage from '@/pages/detail/publish'
import ForecastPage from '@/pages/detail/forecast'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
          component: ForecastPage
        },
        {
          path: 'analysis',
          component: AnalysisPage
        },
        {
          path: 'publish',
          component: PublishPage
        },
        {
          path: 'count',
          component: CountPage
        }
      ]
    }
  ]
})
