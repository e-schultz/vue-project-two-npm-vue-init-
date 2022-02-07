import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/demo5",
      name: "demo5",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/DynamicFive.vue"),
    },
    {
      path: "/step1",
      name: "step1",
      component: () => import("../components/step1/StepOne.vue"),
    },
    {
      path: "/step2",
      name: "step2",
      component: () => import("../components/step2/StepTwo.vue"),
    },
    {
      path: "/step3",
      name: "step3",
      component: () => import("../components/step3/StepThree.vue"),
    },
    {
      path: "/ws-0",
      name: "ws0",
      component: () => import("../components/ws-0/ws-0.vue"),
    },
    {
      path: "/ws-1",
      name: "ws1",
      component: () => import("../components/ws-1/ws-1.vue"),
    },
  ],
});

export default router;
