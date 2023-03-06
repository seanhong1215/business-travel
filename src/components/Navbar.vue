<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="@/assets/img/home/logo.svg" alt=""></a>
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
          <a href="#" class="nav-link" aria-current="page"
            >關於我們</a
          >
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link"
            >旅遊規劃</a
          >
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link"
            ><i class="bi bi-heart-fill"></i></a
          >
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link"
            ><i class="bi bi-cart-fill"></i></a
          >
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
/* .dropdown-menu.show {
  min-width: 80px;
  margin-left: 12px;
  box-shadow: 2px 2px 0 0 rgba(102,102,102,0.25);
} */

</style>
