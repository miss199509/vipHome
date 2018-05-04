import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

//新品上市
import newProduct from '@/components/newProduct'
//特惠频道
import preferential from '@/components/preferential'
//沙发专区
import sofaArea from '@/components/sofaArea'
//头部模板
import headerHtml from '@/components/headerHtml'
//底部模板
import bottomHtml from '@/components/bottomHtml'
//首页
import index from '@/components/index'
//买家秀
import buyer from '@/components/buyer'
//动态资讯
import information from '@/components/information'
//线下门店
import underLine from '@/components/underLine'
//品牌集
import brand from '@/components/brand'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/newProduct',
      name: 'newProduct',
      component: newProduct
    },
    {
      path: '/preferential',
      name: 'preferential',
      component: preferential
    },
    {
      path: '/sofaArea',
      name: 'sofaArea',
      component: sofaArea
    },
    {
      path: '/headerHtml',
      name: 'headerHtml',
      component: headerHtml
    },
    {
      path: '/bottomHtml',
      name: 'bottomHtml',
      component: bottomHtml
    },
    {
      path: '/buyer',
      name: 'buyer',
      component: buyer
    },
    {
      path: '/information',
      name: 'information',
      component: information
    },
    {
      path: '/underLine',
      name: 'underLine',
      component: underLine
    },
    {
      path: '/brand',
      name: 'brand',
      component: brand
    }
  ]
})
