import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/HomeView.vue"),
  },
  // {
  //   path: "/step-2-payment",
  //   name: "payment",
  //   component: () => import("../views/PaymentView.vue"),
  // },
  // {
  //   path: "/step-3-order-confirmation",
  //   name: "order-confirmation",
  //   component: () => import("../views/OrderConfirm.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
