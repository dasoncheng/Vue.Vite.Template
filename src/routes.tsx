import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import { About } from "./pages/about";
import { Home } from "./pages/home";

const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "home",
    alias: "",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export { router };
