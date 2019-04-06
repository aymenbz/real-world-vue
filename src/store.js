import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abcs12", name: "Aymen" },
    categories: ["ezr", "zer", "ezrzer", "ezrzerzers"],
    events: [
      {
        id: 1,
        title: "delectus aut autem",
        organizer: "..."
      },
      {
        id: 2,
        title: "quis ut nam facilis et officia qui",
        organizer: "..."
      },
      {
        id: 3,
        title: "fugiat veniam minus",
        organizer: "..."
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
  }
});
