<template>
  <div class="row page">
    <transition-group name="list_razdel_uslug">
      <q-expansion-item
        v-for="(faq, index) in faqs"
        :key="index"
        expand-separator
        :label="faq.vopros"
        class="col-12 vopros"
        header-class=""
      >
        <q-card>
          <q-card-section v-html="faq.otvet" class="otvet"> </q-card-section>
        </q-card>
      </q-expansion-item>
    </transition-group>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: { ...mapGetters({ faqs: "faqs/faqs" }) },
  mounted() {
    // this.faqs.forEach((element, index) => {
    //   let id = setInterval(() => {
    //     this.faqsf.push(element);
    //     clearInterval(id);
    //   }, 500 * index);
    // });
    //активируем событие ready-rendered после того как все сотрудники отобразятся на странице
    // document.dispatchEvent(new Event("render-ready"));
  },
  components: {},
};
</script>
<style lang="scss" scoped>
@import "@/styles/global_variables";
// .text-white {
//   font-family: $font-family;
//   font-size: 40px;
//   color: aqua;
// }
.page {
  margin-top: 20px;
  margin-bottom: 40px;
}
.vopros {
  font-family: $font-family;
  font-size: 18px;
}
.vopros:hover {
  background-color: #f7f7f700;
}
.otvet {
  font-size: 14px;
  color: $bcgr_color_2;
}
// //Анимация перехода
// .list_razdel_uslug-inter-active {
//   animation: main_route_in 2s;
// }
// .list_razdel_uslug-leave-active {
//   animation: main_route_out 0s;
// }
// @keyframes main_route_in {
//   0% {
//     transform: scale(0);
//   }
//   50% {
//     transform: scale(0.5);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
//анимация списка категорий услуг
.list_razdel_uslug-enter-from,
.list_razdel_uslug-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
.list_razdel_uslug-enter-to,
.list_razdel_uslug-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.list_razdel_uslug-enter-active {
  transition: all 2s ease;
}
.list_razdel_uslug-leave-active {
  transition: all 2s;
}
</style>