import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abcs12", name: "Aymen" },
    categories: ["ezr", "zer", "ezrzer", "ezrzerzers"],
    todos: [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: true
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: state => state.categories.length,
    doneTodos: state => state.todos.filter(todo => todo.completed),
    activeTodoCount: state => state.todos.filter(todo => !todo.completed).length
  }
});
