<template>
  <div class="row page">
    <!-- <transition-group name="list_razdel_uslug"> -->
    <q-card
      class="my-card col-12"
      flat
      bordered
      v-for="(sotrudnik, index) in sotrudniki"
      :key="index"
    >
      <q-card-section horizontal class="row justify-between stroka">
        <q-card-section>
          <span class="title">{{ sotrudnik.familiya }}</span
          ><br />
          <span>{{ sotrudnik.imya }} {{ sotrudnik.otchestvo }}</span>
        </q-card-section>
        <q-card-section>
          {{ sotrudnik.mtel }}<br />

          {{ sotrudnik.email }}
        </q-card-section>
      </q-card-section>
      <q-separator />
    </q-card>
    <!-- </transition-group> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      // sotrudnikif: [],
    };
  },
  computed: {
    ...mapGetters({
      sotrudniki: "sotrudniki/sotrudniki",
    }),
  },
  mounted() {
    // this.sotrudniki.forEach((element, index) => {
    //   let id = setInterval(() => {
    //     this.sotrudnikif.push(element);
    //     clearInterval(id);
    //   }, 500 * index);
    // });
    //активируем событие ready-rendered после того как все сотрудники отобразятся на странице
    // document.dispatchEvent(new Event("render-ready"));
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/global_variables";

.title {
  font-family: $font-family;
  font-size: 20px;
}
.my-card {
  border: 0px !important;
}
.info {
  padding: 0px 0px 0px 0px;
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