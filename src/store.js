import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abcs12", name: "Aymen" },
    categories: ["ezr", "zer", "ezrzer", "ezrzerzers"]
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: state => state.categories.length
  }
});
