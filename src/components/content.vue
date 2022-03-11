<template>
  <div class="col-12 col-sm-10 row">
    <!-- <div style="display: flex; flex-direction: row">
      <div @click="scrl('.first')">&nbsp;1&nbsp;</div>
      <div @click="scrl('.second')">&nbsp;2&nbsp;</div>
      <div @click="scrl('.tre')">&nbsp;3&nbsp;</div>
    </div> -->
    <!-- <transition-group name="loading_type_post"> -->
    <div
      class="wrap-post-type col-12"
      v-for="(block, i) in blocks_display"
      :key="i"
      :data-type="block"
      :id="block"
      v-intersection="{
        handler: active_menu,
        cfg: {
          root: null,
          rootMargin: '0px',
          threshold: [0.7],
        },
      }"
    >
      <component :is="`sp-${block}`"></component>
    </div>
    <!-- </transition-group> -->
    <!-- <popup-obyavlen v-if="PopupPrimerShow" @close="closePopupPrimer1()">
      <template v-slot:header></template>
      <template v-slot:body>
        <div class="q-pa-md items-start q-gutter-md">
          <q-card
            class="my-card"
            flat
            v-for="(obyavlen, index) in obyavlens"
            :key="index"
          >
            <q-card-section horizontal class="row">
              <q-card-section class="q-pt-xs col-12 col-sm-7">
                <div class="text-h5 q-mt-sm q-mb-xs">
                  {{ obyavlen.title_obyavlen }}
                </div>
                <div v-html="obyavlen.podrobno_obyavlen" />
              </q-card-section>

              <q-card-section class="col-sm-5 flex flex-center">
                <q-img class="rounded-borders" :src="obyavlen.img_obyavlen" />
              </q-card-section>
            </q-card-section>

            <q-separator />
          </q-card>
        </div>
      </template>
    </popup-obyavlen> -->
  </div>
</template>
<script>
//import { ref, onMounted } from 'vue'
import spAbout from "@/components/About.vue";
import spUslugi from "@/components/Uslugi.vue";
import spFaq from "@/components/Faq.vue";

export default {
  emits: ["active_menu"],
  data() {
    return {
      blocks: ["about", "uslugi", "faq"],
    };
  },
  //   setup(props, context) {
  //     //     /////////////////////////////////////////////
  //     const obyavlens = ref(null)
  //     server.get('myplugin/v1/obyavlen').then((response) => {
  //       if (response.data.length > 0) {
  //         obyavlens.value = response.data
  //         setTimeout(showPopupPrimer1, 2000)
  //       }
  //     })

  //     const PopupPrimerShow = ref(false)
  //     const showPopupPrimer1 = () => {
  //       PopupPrimerShow.value = true
  //     }
  //     const closePopupPrimer1 = () => {
  //       PopupPrimerShow.value = false
  //     }
  //     ///////////////////////////////////////////////
  //     const blocks = ref(['post', 'typeusluga', 'otziv', 'sotrudnik'])
  //     const blocks_display = ref([])
  //     const active_menu = (entry) => {
  //       if (entry.isIntersecting) {
  //         context.emit('active_menu', entry.target.dataset.type)
  //         console.log(entry.target.dataset.type)
  //       }
  //     }
  /////////////////////////
  // Mounted(() => {
  //   blocks.value.forEach((elem, i) => {
  //     setTimeout(() => {
  //       blocks_display.value.push(elem)
  //     }, i * 500)
  //   })
  // })
  // return {
  //   obyavlens,
  //   PopupPrimerShow,
  //   showPopupPrimer1,
  //   closePopupPrimer1,
  //   //onIntersection,
  //   active_menu,
  //   blocks,
  //   blocks_display,
  // }
  //  },

  components: {
    spAbout,
    spUslugi,
    spFaq,
  },

  // const observer = new IntersectionObserver((entries) => {
  //   // перебор записей
  //   entries.forEach((entry) => {
  //     const post_type = entry.target.querySelector('.post-type')
  //     // если элемент появился
  //     if (entry.isIntersecting) {
  //       // добавить ему CSS-класс
  //       post_type.classList.add('post-type-animation')
  //       return
  //     }
  //     // post_type.classList.remove('post-type-animation')
  //   })
  // })
  // observer.observe(document.querySelector('.wrap-post-type'))
};
</script>
<style>
/* .post {
  margin-top: 0px;
} */
.wrap-post-type {
  height: 1px;
  /* min-height: 100vh; */
  padding-top: 20px;
}
/* //////////////////////////////////////// */

.loading_type_post-enter-active,
.loading_type_post-leave-active {
  transition: all 1s ease;
}
.loading_type_post-enter-from,
.loading_type_post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* /////////////////////////////////////// */
@keyframes onscreen {
  0% {
    opacity: 0;
    transform: scale(0.75);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@media (prefers-reduced-motion: no-preference) {
  .onscreen {
    animation: onscreen 1s;
  }
}
</style>