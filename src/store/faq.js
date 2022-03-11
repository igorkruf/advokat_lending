//import axios from 'axios';
//import router from "../../router/index.js";
export default {
  namespaced: true,

  state: () => {
    return {
      faqs: [
        {
          vopros: "Как почему когда чей кто 1",
          otvet: "Ответ на 'Как почему когда чей кто 1'",
        },
        {
          vopros: "Как почему когда чей кто 2",
          otvet: "Ответ на 'Как почему когда чей кто 2'",
        },
        {
          vopros: "Как почему когда чей кто 3",
          otvet: "Ответ на 'Как почему когда чей кто 3'",
        },
        {
          vopros: "Как почему когда чей кто 4",
          otvet: "Ответ на 'Как почему когда чей кто 4'",
        },
      ],
    };
  },
  getters: {
    faqs: (state) => state.faqs,
  },

  mutations: {
    // logout(state) {
    //   state.status = '';
    //   state.token = '';
    //   state.user = '';
    //   state.isAdmin = false;
    //   state.isBuisnesman = false;
    // },
  },
  actions: {},
};
