import Router, { RouteConfig } from 'vue-router';
import { HomePageContainer } from './pages/home';
import { MembersPageContainer } from './pages/members';
import { MemberPageContainer } from './pages/members/member';

const routes: RouteConfig[] = [
  { path: '/', component: HomePageContainer },
  { path: '/home', component: HomePageContainer },
  { path: '/members', component: MembersPageContainer },
  { path: '/user', component: MemberPageContainer },
];

export const router = new Router({
  routes,
});
