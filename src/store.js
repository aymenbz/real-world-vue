import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService.js";

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
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
    fetchEvents({ commit }) {
      EventService.getEvents()
        .then(response => {
          commit("SET_EVENTS", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
  }
});
