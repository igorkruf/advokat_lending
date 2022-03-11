//import axios from 'axios';
//import router from "../../router/index.js";
export default {
  namespaced: true,

  state: () => {
    return {
      sotrudniki: [
        {
          id: 1,
          familiya: "Балалаева",
          imya: "Мадина",
          otchestvo: "Николаевна",
          mtel: "8-912-606-73-72",
          email: "ivanrezanov@yandex.ru",
        },
        {
          id: 2,
          familiya: "Резанов",
          imya: "Иван",
          otchestvo: "Анатольевич",
          mtel: "8-996-178-42-64",
          email: "ivanrezanov@yandex.ru",
        },
        {
          id: 3,
          familiya: "Знаменская",
          imya: "Людмила",
          otchestvo: "Александровна",
          mtel: "8-950-555-02-05",
          email: "ivanrezanov@yandex.ru",
        },
      ],
    };
  },

  getters: {
    sotrudniki: (state) => state.sotrudniki,
  },

  mutations: {},
  actions: {},
};
