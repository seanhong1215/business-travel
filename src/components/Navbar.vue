<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
    <router-link class="navbar-brand" :to="{path: '/'}"><img src="@/assets/img/logo.svg" alt="logo"></router-link> 
    <button
      class="navbar-toggler btn-sm"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{path: '/about'}">關於我們</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{path: '/products'}">旅遊規劃</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{path: '/favorite'}"><i class="bi bi-heart-fill"></i></router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{path: '/ShoppingCart'}"><i class="bi bi-cart-fill"></i></router-link> 
        </li>
      </ul>
    </div>
  </div>
  </nav>
</template>
<script>
import { setLocale } from '@vee-validate/i18n';

export default {
  name: "Navbar",
  data() {
    return {
      locale: ["EN", "CH"],
      lang: "EN",
    };
  },
  methods: {
    handleChangeLang(e) {
      if (e.target.innerText === "EN") {
        this.$i18n.locale = "en";
        this.lang = "EN";
        setLocale('en');
      } else if (e.target.innerText === "CH") {
        this.$i18n.locale = "zhCn";
        this.lang = "CH";
        setLocale('zh_TW');
      }
    },
  },
};
</script>
<style lang="scss" scoped>
ul,
li {
  list-style: none;
}
.navbar {
  padding: 0 60px;
  height: 94px;
  background-color: #54C3F1;
}
.nav-item {
  padding-left: 8px;
  .nav-link {
    color: #fff;
    font-size: 20px;
  }
}
.dropdown-toggle::after {
  /* color: #168bf1; */
}
.navbar-toggler {
  border: 1px solid #c4c4c4;
  padding: 4px 8px;
  margin: 0 12px;
  &:hover,
  &:active {
    border-color: #666;
  }
}
.navbar-nav .show > .nav-link, .navbar-nav .nav-link.active {
  color: #2588B0;
}

</style>
