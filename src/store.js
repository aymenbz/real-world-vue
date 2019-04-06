import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abcs12", name: "Aymen" },
    categories: [
      { id: "azr3", name: "zefuih" },
      { id: "azrr3", name: "sdgggggg" },
      { id: "azr433", name: "gsdsdg" }
    ]
  },
  mutations: {},
  actions: {}
});
