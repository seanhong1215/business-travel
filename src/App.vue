<template>
  <navbar />
  <router-view />
  <footer />
</template>
<script>
import navbar from '@/components/Navbar.vue';
import footer from '@/components/Footer.vue';
export default {
  components: {navbar, footer},
};
</script>
<style lang="scss">
@import "bootstrap/scss/bootstrap";
@import "@/assets/base.scss";
</style>
