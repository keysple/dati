import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Entry from '@/components/entry'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Entry',
      component: Entry
    },
    {
      path:'/platform/:name',
      name:'HelloWorld',
      component:HelloWorld
    }
  ]
})
