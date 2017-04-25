import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import Home from '../components/Home'
import goods from '../components/goods'
import me from '../components/me'
import me_fisrt from '../components/me_first'
import me_second from '../components/me_second'
import order from '../components/order'
import seller from '../components/seller'
import ratings from '../components/ratings'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.use(Router)
Vue.use(vueResource)
// Vue.component(Header.name, Header);
/*tab
 * */
import {Navbar, TabItem} from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);


import {Search} from 'mint-ui';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/me',
      name: 'me',
      component: me,
      children: [
        {
          path: '/me_fisrt',
          name: 'me_fisrt',
          component: me_fisrt,
        },
        {
          path: '/me_second',
          name: 'me_second',
          component: me_second,
        },
        {
          path: '/',
          name: 'me_fisrt',
          component: me_fisrt,
        }
      ]
    },
    {
      path: '/order/:userId',
      name: 'order',
      component: order,
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    }
  ],
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }}
})
