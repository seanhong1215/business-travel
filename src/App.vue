<template>
  <navbar />
  <router-view />
  <footer-view />
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import FooterView from '@/components/Footer.vue';
import emitter from '@/library/emitter.js';

export default {
  components: {Navbar, FooterView},
  provide () {
    return {
      emitter
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/all.scss";
</style>
