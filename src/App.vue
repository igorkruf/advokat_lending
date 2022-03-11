<template>
  <q-layout view="LHh lpR lFf">
    <q-header
      class="row main_header justify-between q-px-sm"
      elevated
      height-hint="98"
    >
      <div class="row col-12 col-md-4">
        <div class="col-2 q-pa-md wrap_gamburger_menu">
          <div class="gamburger_menu" @click="leftDrawer" borde>
            <span class="line_gamburger"></span>
            <span class="line_gamburger"></span>
            <span class="line_gamburger"></span>
          </div>
        </div>
        <div class="column col-10 q-pa-md justify-between items-start">
          <span class="small_logo_font"
            >Свердловская областная коллегия адвокатов</span
          >
          <span class="big_logo_font">АДВОКАТЫ</span>
        </div>
      </div>

      <div class="column col-3 q-pa-md q-mr-sm gt-sm justify-around items-end">
        <span>(34394)2-34-94</span>
        <span>г.Красноуфимск ул Советская 35 б </span>
        <!-- <span>ivanrezanov@yandex.ru</span> -->
        <!-- <q-tabs align="left">
          <q-tab label="Page One" />
          <q-tab label="Page Two" />
          <q-tab label="Page Three" />
        </q-tabs> -->
      </div>
    </q-header>
    <div class="wrap_content row justify-center">
      <q-page-container>
        <q-page>
          <div class="content row justify-end">
            <div class="col-11 col-md-9 page">
              <div class="col-12 col-sm-10 row">
                <!-- <transition-group name="loading_type_post"> -->
                <div>
                  <sp-about
                    class="razdel razdel_hidden"
                    data-name="about"
                  ></sp-about>
                  <header class="header header_razdel" @click="fff">
                    Наши услуги
                  </header>
                  <sp-uslugi
                    class="razdel razdel_hidden"
                    data-name="uslugi"
                  ></sp-uslugi>
                  <header class="header header_razdel">
                    Популярные вопросы
                  </header>
                  <sp-faq class="razdel razdel_hidden" data-name="faq"></sp-faq>
                  <!-- <my-observer @intersect="intersected" :key="key_observer" /> -->
                </div>
              </div>
              <!-- <router-view v-slot="{ Component }">
                <transition name="route_transition" mode="out-in">
                  <component :is="Component" />
                </transition>
              </router-view> -->
            </div>
            <!-- </q-parallax> -->
          </div>
        </q-page>
      </q-page-container>
    </div>
    <q-drawer
      side="left"
      v-model="drawerLeft"
      overlay
      bordered
      :width="300"
      :breakpoint="1400"
      behavior="desktop"
    >
      <!-- <q-scroll-area class="fit"> -->
      <q-list padding class="rounded-borders main_menu">
        <q-item class="row justify-end">
          <q-item-section avatar class="row">
            <q-btn rounded class="q-pa-sm q-my-md" @click="close_drawer"
              ><q-icon name="close"></q-icon
            ></q-btn>
          </q-item-section>
        </q-item>
        <q-item
          class="navigation"
          clickable
          v-ripple
          :active="link === 'about'"
          @click="scrollingtorazdel('about')"
          active-class="active-main-menu-link"
        >
          О нас
        </q-item>
        <q-item
          clickable
          class="navigation"
          v-ripple
          :active="link === 'uslugi'"
          @click="scrollingtorazdel('uslugi')"
          active-class="active-main-menu-link"
        >
          Услуги
        </q-item>

        <q-item
          clickable
          class="navigation"
          v-ripple
          :active="link === 'faq'"
          @click="scrollingtorazdel('faq')"
          active-class="active-main-menu-link"
        >
          Часто задаваемые вопросы
        </q-item>
      </q-list>
      <!-- </q-scroll-area> -->
    </q-drawer>
    <q-footer class="row lt-md footer q-pa-sm text-subtitle1 justify-between">
      <span>(34394)2-34-94</span>

      <span>г.Красноуфимск ул Советская 35 б </span>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapActions } from "vuex";
import SpAbout from "@/components/About.vue";
import SpUslugi from "@/components/Uslugi.vue";
import SpFaq from "@/components/Faq.vue";

//const femida  =
export default {
  data() {
    return {
      options: {
        rootMargin: "0px",
        threshold: 0.2,
      },
      hidden_razdel: [],
      i: 0,
      link: null,

      drawerLeft: false,
      img_url: require("./assets/img/femida1.png"),
    };
  },
  setup() {
    return {};
  },
  methods: {
    ...mapActions(["set_hidden_razdels"]),
    close_drawer() {
      this.drawerLeft = false;
    },

    leftDrawer() {
      this.drawerLeft = true;
    },
    scrollingtorazdel(ggg) {
      this.link = ggg;

      let razdel = document.querySelector(`[data-name=${ggg}]`);
      console.log(window);
      let y = razdel.getBoundingClientRect().y;
      let otstupTop = y - 260;
      window.scrollBy({
        top: otstupTop,
        behavior: "smooth",
      });

      this.close_drawer();
    },
    // intersected() {
    //   console.log("intersected");
    //   console.log(this.i);
    //   if (this.i < this.hidden_razdel.length) {
    //     // this.visible_razdels.push(this.hidden_razdel[this.i]);
    //     if (this.hidden_razdel[this.i].classList.contains("razdel_hidden")) {
    //       this.hidden_razdel[this.i].classList.remove("razdel_hidden");
    //     }
    //     this.i = this.i + 1;
    //   } else {
    //     console.log("больше нет скрытых разделов");
    //   }
    // },
  },

  components: {
    SpAbout,
    SpUslugi,
    SpFaq,
  },
  mounted() {
    let razdel = document.querySelectorAll(".razdel");
    console.log(razdel);
    const options = this.options || {};
    let vm = this;
    const observer = new IntersectionObserver(function (entry) {
      entry.forEach((elem) => {
        if (elem.isIntersecting) {
          console.log(elem.target.dataset.name);
          vm.link = elem.target.dataset.name;
          if (elem.target.classList.contains("razdel_hidden")) {
            elem.target.classList.remove("razdel_hidden");
          }
        }
      });
    }, options);
    razdel.forEach((elem) => {
      observer.observe(elem);
    });
  },
};
</script>
<style lang="scss">
@import "./styles/global_variables";

body,
html {
  font-family: Arial, Helvetica, sans-serif;
  -moz-box-sizing: border-box; /* Для Firefox */
  box-sizing: border-box; /* Ширина блока с полями */
}
.main_header {
  background-color: $bcgr_color_0 !important;
  color: $main_text_color !important;
  // border-bottom: 2px solid #000;
}
.main_header div {
  border: 0px solid red;
}
.big_logo_font {
  font-family: $font-family;
  font-size: 32px;
}
.wrap_gamburger_menu {
  position: relative;
  height: 100%;
  width: 100%;
  border: 0px solid red !important;
  align-content: center;
}
.gamburger_menu {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  border: 0px solid green;
  padding-top: 11px;
  padding-left: 10px;
  border-radius: 50px;
  cursor: pointer;
}
.gamburger_menu:hover {
  background-color: $bcgr_color_1;
}
.line_gamburger {
  background-color: $main_text_color;
  display: block;
  width: 29px;
  height: 2px;
  margin-top: 5px;
}
.wrap_content {
  border: 1px solid green;
}
.ccc {
  top: 20px;
  left: 0px;
  position: fixed;
}
.content {
  position: relative;
  border: 1px solid red;
  width: 100vw;
  //height: calc(100vh - 100px);
  max-width: 1000px;
  margin-top: 1px;
  min-height: calc(100vh - 100px);
  background-image: url(./assets/img/femida1.png);
  background-attachment: local;

  background-repeat: no-repeat;
  background-position: 0% 10%;
  background-size: auto 400px;
  background-origin: content-box;
}
.page {
  margin-top: 40px;
  border: 0px solid green;
  margin-right: 20px;
}

.main_menu {
  color: $bcgr_color_2;
  font-size: 16px !important;
}
.block_title {
  color: red;
  border: 1px solid red;
}
.footer {
  background-color: $bcgr_color_2 !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
}
.active-main-menu-link {
  color: #fff !important;
  background-color: $bcgr_color_2;
  cursor: default;
}
.razdel {
  opacity: 1;
  transition: 2s;
}
.razdel_hidden {
  opacity: 0;
  //display: none !important;
}
.header_razdel {
  margin: 50px 0px;
  text-align: center;
  position: relative;
  // border: 1px solid red;
  padding: 20px;
  font-size: 24px;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -15px;
    width: 80px;
    height: 30px;
    // border: 1px solid red;
    margin-left: -50px;
    //background-color: aqua;
    background: url("/assets/img/endrazdel.png") no-repeat center/cover;
  }
}
.qqq {
  border: 1px solid red;
}
.qqq_qqq {
  border: 1px solid green;
}
@media (max-width: 400px) {
  /* CSS-стили */
  .small_logo_font {
    font-size: 11px;
  }
}
@media (max-width: 1023px) {
  /* CSS-стили */
  .content {
    background: none;
  }
}
//Анимация перехода между route компонентов
.route_transition-inter-active {
  animation: main_route_in 0s;
}
.route_transition-leave-active {
  animation: main_route_out 0s;
}
@keyframes main_route_in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
