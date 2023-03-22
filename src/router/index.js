import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      breadcrumb: "首頁",
    },
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
    meta: {
      breadcrumb: "商品列表",
    },
  },
  {
    path: "/productList/:id",
    name: "productList",
    component: () => import("../views/ProductList.vue"),
    meta: {
      breadcrumb: "單一商品",
    },
  },
  {
    path: "/shoppingCart",
    name: "shoppingCart",
    component: () => import("../views/ShoppingCart.vue"),
  },
  {
    path: "/confirmCart",
    name: "confirmCart",
    component: () => import("../views/ConfirmCart.vue"),
  },
  {
    path: "/finishCart",
    name: "finishCart",
    component: () => import("../views/FinishCart.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  // Dashboard
  {
    path: "/admin",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "products",
        component: () => import("../views/admin/Products.vue"),
      },
      {
        path: "orders",
        component: () => import("../views/admin/Orders.vue"),
      },
      {
        path: "coupons",
        component: () => import("../views/admin/Coupons.vue"),
      },
    ],
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
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
