import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Index.vue")
    },
    {
      path: "/home",
      name: "首页",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/category",
      name: "分类",
      component: () => import("./views/Category.vue")
    },
    {
      path: "/cart",
      name: "购物车",
      component: () => import("./views/Cart.vue")
    },
    {
      path: "/my",
      name: "我的",
      component: () => import("./views/My.vue")
    },
    {
      path: "/xq",
      name: "商品详情",
      component: () => import("./views/Xq.vue")
    },
    {
      path: "/gg",
      name: "广告页面",
      component: () => import("./views/Gg.vue")
    },
    {
      path: "/no",
      name: "N0",
      component: () => import("./views/No.vue")
    },
    {
      path: "/search",
      name: "Search",
      component: () => import("./views/Search.vue")
    }
  ]
});
