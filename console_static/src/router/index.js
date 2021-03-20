import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "base",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/homepage",
    name: "Homepage",
    component: () => import("../views/homepage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
