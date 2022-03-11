<template>
  <div class="observer" @click="ttt" />
</template>
<script>
import { mapGetters } from "vuex";
export default {
  emits: ["intersect", "ggg"],
  props: ["options"],
  data() {
    return {};
  },
  computed: { ...mapGetters(["get_hidden_razdels"]) },

  async mounted() {
    //console.log(this.$el);
    // let options = this.options || {};
    // let observer = new IntersectionObserver(([entry]) => {
    //   if (entry || entry.isIntersecting) {
    //     console.log(entry.target);
    //     this.$emit("intersect");
    //   }
    // }, options);

    console.log("1111111");
    console.log(this.get_hidden_razdels);
    console.log("2222222");

    console.log("3333");
    //observer.observe(this.$el);
  },
  methods: {
    ttt() {
      this.$emit("ggg");
    },
  },
};
</script>
<style lang="scss" scoped>
.observer {
  width: 100px;
  height: 20px;
  background-color: aqua;
}
</style>