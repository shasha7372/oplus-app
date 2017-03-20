import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import login from 'components/login'
import regist from 'components/regist'
import regist1 from 'components/regist1'
import regist2 from 'components/regist2'
import layout from 'components/layout'
import infoMy from 'components/infoMy'
import infoPassword from 'components/infoPassword'
import trade from 'components/trade'
import proDetail from 'components/proDetail'
import proIntro from 'components/proIntro'
import proNotice from 'components/proNotice'
import overview from 'components/children/overview.vue'
import account from 'components/children/account.vue'
import product from 'components/children/product.vue'
import video from 'components/children/video.vue'
import news from 'components/children/news.vue'
import info from 'components/children/info.vue'
import videoPlayer from 'components/zt-ui/videoPlayer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/components/login',
      name: 'login',
      component: login
    },
    {
      path: '/components/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/components/regist1',
      name: 'regist1',
      component: regist1
    },
    {
      path: '/components/regist2',
      name: 'regist2',
      component: regist2
    },
    {
      path: '/components/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/components/layout',
      name: 'layout',
      component: layout,
      children: [
        {
          path: '/',
          name: 'overview',
          component: overview
        },
        {
          path: 'overview',
          name: 'overview',
          component: overview
        },
        {
          path: 'product',
          name: 'product',
          component: product
        },
        {
          path: 'video',
          name: 'video',
          component: video
        },
        {
          path: 'news',
          name: 'news',
          component: news
        },
        {
          path: 'info',
          name: 'info',
          component: info
        }
      ]
    },
    {
      path: '/components/infoMy',
      name: 'infoMy',
      component: infoMy
    },
    {
      path: '/components/infoPassword',
      name: 'infoPassword',
      component: infoPassword
    },
    {
      path: '/components/account',
      name: 'account',
      component: account
    },
    {
      path: '/components/trade',
      name: 'trade',
      component: trade
    },
    {
      path: '/components/proDetail',
      name: 'proDetail',
      component: proDetail
    },
    {
      path: '/components/proIntro',
      name: 'proIntro',
      component: proIntro
    },
    {
      path: '/components/proNotice',
      name: 'proNotice',
      component: proNotice
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/components/zt-ui/videoPlayer',
      name: 'videoPlayer',
      component: videoPlayer
    }
  ]
})
