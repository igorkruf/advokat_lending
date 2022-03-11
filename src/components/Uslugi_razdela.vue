<template>
  <div class="row q-pa-lg">
    <p
      v-for="(usluga_razdela, index) in uslugi_razdela"
      :key="index"
      class="col-12"
    >
      {{ usluga_razdela.name }}
    </p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["id_razdel_uslug"],
  data() {
    return {
      uslugi_razdela: [],
    };
  },
  computed: { ...mapGetters({ uslugi: "uslugi/uslugi" }) },
  mounted() {
    this.uslugi.map((el) => {
      console.log("kjgdkjgsdkjasdgaskjgjasfgsadfgadskjfgdhjgdshjfg");
      if (el.id_razdel_uslug.includes(this.id_razdel_uslug)) {
        this.uslugi_razdela.push(el);
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.my-card {
  padding: 20px 10px 20px 10px !important;
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