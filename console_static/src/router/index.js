import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login.vue";
import { login } from "../api/index.js";

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
    path: "/console",
    name: "Console",
    redirect: "/console/home",
    component: () => import("../views/console.vue"),
    children: [
      {
        path: "home",
        name: "Homepage",
        component: () => import("../views/console/home.vue"),
      },
      {
        path: "list",
        name: "Listpage",
        component: () => import("../views/console/list.vue"),
      },
      {
        path: "know",
        name: "Knowpage",
        component: () => import("../views/console/know.vue"),
      },
      {
        path: "call",
        name: "Callpage",
        component: () => import("../views/console/call.vue"),
      },
      {
        path: "note",
        name: "Notepage",
        component: () => import("../views/console/note.vue"),
      },
      {
        path: "client",
        name: "Clientpage",
        component: () => import("../views/console/client.vue"),
      },
      {
        path: "statistical",
        name: "Statistical",
        component: () => import("../views/console/statistical.vue"),
      },
      {
        path: "quality",
        name: "Qualitypage",
        component: () => import("../views/console/quality.vue"),
      },
      {
        path: "set",
        name: "Setpage",
        component: () => import("../views/console/set.vue"),
      },
      {
        path: "monitor",
        name: "Monitorpage",
        component: () => import("../views/console/monitor.vue"),
      },
      {
        path: "info",
        name: "Infopage",
        component: () => import("../views/console/info.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
router.beforeEach((to, from, next) => {
  let token = localStorage.token_id;
  let token_info;
  login({ token_id: token }).then((res) => {
    console.log("token验证响应",res)
    token_info = res.data.login_way;
    if (!(token_info == "token验证成功")) {
      if (to.name == "Login") next();
      else next({ name: "Login" });
    } else {
      if (to.name == "Login") next({ name: "Console" });
      else next();
    }
  });
});

export default router;
