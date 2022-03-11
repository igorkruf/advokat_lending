import { createStore } from "vuex";
import uslugi from "./uslugi";
import faqs from "./faq";
import sotrudniki from "./sotrudniki";
// import users from './Users/users';
export default createStore({
  state: {
    hidden_razdels: [],
  },
  getters: {
    get_hidden_razdels: (state) => state.hidden_razdels,
  },
  mutations: {
    set_hidden_razdels(state, payload) {
      state.hidden_razdels = payload;
      console.log(payload);
    },
  },
  actions: {
    set_hidden_razdels({ commit }, payload) {
      commit("set_hidden_razdels", payload);
    },
  },
  modules: {
    uslugi,
    faqs,
    sotrudniki,
  },
  //для того что-бы напрямую не менять значение в STORE
  strict: process.env.NODE_ENV !== "production",
});
