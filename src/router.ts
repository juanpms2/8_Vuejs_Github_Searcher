import Router, { RouteConfig } from 'vue-router';
import { HomePage, MembersPage, UserPage } from 'pages';

const routes: RouteConfig[] = [
  { path: '/', component: HomePage },
  { path: '/home', component: HomePage },
  { path: '/members', component: MembersPage },
  { path: '/user', component: UserPage },
];

export const router = new Router({
  routes,
});
