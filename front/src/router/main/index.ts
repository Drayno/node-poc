import { RouteConfig } from 'vue-router';

const prefix = '/home';
const Home = () => import('@/views/Home.vue')

const routes: RouteConfig[] = [
  {
    path: `${prefix}`,
    name: "home",
    component: Home,
    redirect: `${prefix}/client`,
    children: [
      {
        path: "client",
        name: "client",
        component: () =>
          import("@/views/Client/Client.vue")
      },
    ]
  },
  
]

export default routes; 