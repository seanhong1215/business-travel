import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/favorite",
    name: "favorite",
    component: () => import("../views/FavoriteList.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/Products.vue"),
  },
  {
    path: "/productList",
    name: "productList",
    component: () => import("../views/ProductList.vue"),
  },
  {
    path: "/shoppingCart",
    name: "shoppingCart",
    component: () => import("../views/ShoppingCart.vue"),
  },

  {
    path: "/admin/:pathMatch(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
