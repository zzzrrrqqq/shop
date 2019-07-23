import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//图标
import "./icon/iconfont.css";

// vant组件库
import vant from "vant";
import "vant/lib/index.css";
Vue.use(vant);

// 数据请求模块
import axios from "axios";
Vue.prototype.$axios = axios;

import "swiper/dist/css/swiper.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
