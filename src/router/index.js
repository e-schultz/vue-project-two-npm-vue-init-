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
      component: () => import("../views/StepOne.vue"),
    },
    {
      path: "/step2",
      name: "step2",
      component: () => import("../views/StepTwo.vue"),
    },
    {
      path: "/step3",
      name: "step3",
      component: () => import("../views/StepThree.vue"),
    },
  ],
});

export default router;
