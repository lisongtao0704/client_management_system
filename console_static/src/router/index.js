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
    path: "/console",
    name: "Console",
    component: () => import("../views/console.vue"),
    children:[
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

    ]
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
