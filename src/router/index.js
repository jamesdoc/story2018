import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/Landing';
import About from '@/components/About';
import Location from '@/components/Location';
import Venue from '@/components/Venue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/about/',
      name: 'About',
      component: About,
    },
    {
      path: '/locations/',
      name: 'Location',
      component: Location,
    },
    {
      path: '/locations/:id',
      name: 'Venue',
      component: Venue,
    },
  ],
});
