import Router, { RouteConfig } from 'vue-router';
import { HomePage, MembersPage, UserPage } from 'pages';

const routes: RouteConfig[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage },
  { path: '/members/:company', component: MembersPage },
  { path: '/user/:id', component: UserPage },
];

export const router = new Router({
  routes,
});
