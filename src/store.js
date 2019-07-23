import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    CartList: []
  },
  mutations: {
    add(state, data) {
      data.datetime = new Date();

      var index = state.CartList.findIndex(val => {
        return val.Id == data.Id;
      });
      // 1.判断商品id在购物车列表中是否存在
      if (index != "-1") {
        // 1.1存在 数量加一
        state.CartList[index].num += 1;
      } else {
        // 1.2不存在 添加数据到购物车
        state.CartList.push(data);
      }
    }
  },
  actions: {}
});
