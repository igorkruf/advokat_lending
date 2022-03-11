import { createWebHistory, createRouter } from "vue-router";
import About from "@/components/About.vue";
import Uslugi from "@/components/Uslugi.vue";
import Faq from "@/components/Faq.vue";
// import Services from "@/components/Uslugi.vue";
// import Intereses from "@/components/Forms/formaddinteres.vue";
// import MainAdmin from "@/components/MainPage";
// import TestList from "@/components/TestList";
//import Quasar from "@/components/Quasar";
//import FormAddService from "@/components/Admin/FormAddService.vue";
//import Tehnology from "@/components/Admin/FormAddTehnology.vue";
//import FormGenCsv from "@/components/Admin/Moodle/FormGenCsv.vue";
//import VueGenCsv from "@/components/Admin/Moodle/VueGenCsv.vue";
// import Service from "@/components/Uslugi/Usluga.vue";
// import Body from "@/components/Body.vue";
// import BodyUslugi from "@/components/BodyUslugi.vue";
// import BodyTehnologes from "@/components/BodyTehnologes.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: About,
  },
  {
    path: "/uslugi",
    name: "Uslugi",
    components: {
      default: Uslugi,
    },
    meta: { title: "Услуги" },
    // children: [{
    //     path: ":id_service",
    //     name: "Service",
    //     //component: Service,
    //     meta: { title: 'Главная страница' },
    // }],
  },
  {
    path: "/faq",
    name: "Faq",
    components: {
      default: Faq,
    },
    meta: { title: "Часто задаваемые вопросы" },
    // children: [{
    //     path: ":id_service",
    //     name: "Service",
    //     //component: Service,
    //     meta: { title: 'Главная страница' },
    // }],
  },

  // {
  //   path: "/tehnologes",
  //   name: "Tehnologes",
  //   components: {
  //     default: Tehnologes,
  //   },
  //   meta: { title: "Технологии" },
  // },

  // // {
  // //     path: "/quasar",
  // //     name: "Quasar",
  // //     component: Quasar,
  // //     children: [
  // // {
  // //     path: "addservice",
  // //     name: "addservice",
  // //     component: FormAddService,
  // //     meta: { title: 'Добавление Услуги Черепенникова Игоря' },
  // // },

  // // {
  // //     path: "addtehnology",
  // //     name: "addtehnology",
  // //     component: Tehnology,
  // //     meta: { title: 'Добавление технологии Черепенникова Игоря' },

  // // },

  // // {
  // //     path: "moodle/:id",
  // //     name: "Moodle",
  // //     component: FormGenCsv,
  // //     props: true,
  // //     meta: { title: 'Генерация файла(списка) учеников' },
  // // },
  // // {
  // //     path: "moodle/:id",
  // //     name: "VueMoodle",
  // //     component: VueGenCsv,
  // //     meta: { title: 'Генерация файла(списка) учеников' },
  // // },

  // //     ],
  // //     meta: { title: ' Test Quasar' }
  // // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
////////Меняем title страницы после перехода по роуту
const DEFAULT_TITLE = "Адвокаты г.Красноуфимск";
router.afterEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
