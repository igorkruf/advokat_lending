//import axios from 'axios';
//import router from "../../router/index.js";
export default {
  namespaced: true,

  state: () => {
    return {
      razdels_uslug: [
        {
          id: 1,
          name: "Исковое производство",
          img: "./assets/img/razdels_uslug/jjj.png",
        },
        {
          id: 2,
          name: "Представительство в судах",
          img: "./assets/img/razdels_uslug/jjj.png",
        },
        {
          id: 3,
          name: "Юридическое сопровождение",
          img: "./assets/img/razdels_uslug/jjj.png",
        },
        {
          id: 4,
          name: "Досудебное урегулирование спора",
          img: "./assets/img/razdels_uslug/jjj.png",
        },
        {
          id: 5,
          name: "Адвокатское расследование",
          img: "./assets/img/razdels_uslug/jjj.png",
        },
        {
          id: 6,
          name: "Юридическая консультация",
          img: "./assets/img/razdels_uslug/jjj.png",
        },
      ],
      uslugi: [
        {
          id_razdel_uslug: [1, 3],
          name: "Уголовное дело",
          podrobno: "Подробно об .....",
        },
        {
          id_razdel_uslug: [2],
          name: "Арбитражное дело",
          podrobno: "Подробно об .....",
        },
        {
          id_razdel_uslug: [3],
          name: "Гражданское дело",
          podrobno: "Подробно об .....",
        },
        {
          id_razdel_uslug: [1, 2, 3, 4, 5, 6],
          name: "Адвокат по уголовным делам",
          podrobno: "Подробно об .....",
        },
        {
          id_razdel_uslug: [1],
          name: "Адвокат по арбитражным делам",
          podrobno: "Подробно об .....",
        },
        {
          id_razdel_uslug: [1],
          name: "Адвокат по гражданским  делам",
          podrobno: "Подробно об .....",
        },
        {
          id_razdel_uslug: [1],
          name: "Адвокат по административным делам",
          podrobno: "Подробно об .....",
        },
      ],
    };
  },

  getters: {
    razdels_uslug: (state) => state.razdels_uslug,
    uslugi: (state) => state.uslugi,
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
