<template>
  <div class="row page q-mt-lg">
    <q-card
      class="my-card col-12 col-md-6"
      flat
      bordered
      v-for="(razdelf_uslug, index) in razdels_uslug"
      :key="index"
    >
      <q-card-section class="q-pt-sm title">
        {{ razdelf_uslug.name }}
      </q-card-section>
      <q-separator />
      <uslugi-razdela :id_razdel_uslug="razdelf_uslug.id" />
    </q-card>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import uslugiRazdela from "./Uslugi_razdela.vue";
export default {
  data() {
    return {};
  },
  computed: { ...mapGetters({ razdels_uslug: "uslugi/razdels_uslug" }) },
  mounted() {},
  components: { uslugiRazdela: uslugiRazdela },
};
</script>
<style lang="scss" scoped>
@import "@/styles/global_variables";

.title {
  font-family: $font-family;
  font-size: 20px;
}
.my-card {
  padding: 0px 10px 0px 10px !important;
  border: 0px !important;
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