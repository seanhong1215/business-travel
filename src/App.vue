<template>
  <navbar />
  <router-view />
  <footer-view />
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import FooterView from "@/components/Footer.vue";
export default {
  components: { Navbar, FooterView },
};
</script>
<style lang="scss">
@import "@/assets/all.scss";
</style>
