import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UserFooter from './pages/UserFooter.vue';

const router = createRouter({
    routes: [
      { path: '/', redirect: '/teams' },
      {
        name: 'teams',
        path: '/teams',
        meta: { needsAuth: true },
        components: { default: TeamsList, footer: TeamsFooter },
        children: [
          {
            name: 'team-member',
            path: ':teamId',
            component: TeamMembers,
            props: true,
          },
        ],
      },
      {
        path: '/users',
        components: { default: UsersList, footer: UserFooter },
        beforeEnter(_, _2, next) {
          next();
        },
      },
      { path: '/:notFound(.*)', component: NotFound },
    ],
    history: createWebHistory(),
    scrollBehavior(_, _2, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      return { left: 0, top: 0 };
    },
  });
  router.beforeEach(function (to, from, next) {
    console.log(to, from);
    if (to.meta.needsAuth) {
      console.log('Needs auth');
    }
    next();
  });

  export default router;