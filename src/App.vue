<template>
  <div>
  <navbar />
  <router-view />
  <footerView />
</div>
</template>
<script>
import navbar from '@/components/Navbar.vue';
import footerView from '@/components/Footer.vue';
export default {
  components: {navbar, footerView},
};
</script>
<style lang="scss">
@import "bootstrap/scss/bootstrap";
@import "@/assets/base.scss";
</style>
