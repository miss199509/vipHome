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
import article from '@/components/article'

//线下门店
import underLine from '@/components/underLine'
//品牌集
import brand from '@/components/brand'
//关于我们
import about from '@/components/about'
//个人中心
import personal from '@/components/personal'
//web登录
import singIn from '@/components/singIn'
import talk from '@/components/talk'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        title:'首页'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta:{
        title:'全部商品'
      }
    },
    {
      path: '/newProduct',
      name: 'newProduct',
      component: newProduct,
      meta:{
        title:'新品上架'
      }
    },
    {
      path: '/preferential',
      name: 'preferential',
      component: preferential,
      meta:{
        title:'特惠频道'
      }
    },
    {
      path: '/sofaArea',
      name: 'sofaArea',
      component: sofaArea,
      meta:{
        title:'沙发专区'
      }
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
      component: buyer,
      meta:{
        title:'买家秀'
      }
    },
    {
      path: '/information',
      name: 'information',
      component: information,
      meta:{
        title:'动态资讯'
      }
    },
    {
      path: '/article',
      name: 'article',
      component: article,
      meta:{
        title:'文章详情'
      }
    },
    {
      path: '/underLine',
      name: 'underLine',
      component: underLine,
      meta:{
        title:'线下门店'
      }
    },
    {
      path: '/brand',
      name: 'brand',
      component: brand,
      meta:{
        title:'品牌集'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta:{
        title:'关于我们'
      }
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal,
      meta:{
        title:'个人中心'
      }
    },
    {
      path: '/singIn',
      name: 'singIn',
      component: singIn
    },
    {
      path: '/talk',
      name: 'talk',
      component: talk,
      meta:{
        title:'全部商品'
      }
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
})
