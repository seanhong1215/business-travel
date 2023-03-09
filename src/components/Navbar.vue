<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ path: '/' }"
        ><img src="@/assets/img/logo.svg" alt="logo"
      /></router-link>
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
            <router-link class="nav-link" :to="{ path: '/about' }"
              >關於我們</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/products' }"
              >旅遊規劃</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/favorite' }"
              ><i class="bi bi-heart-fill"></i
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
              :to="{ path: '/ShoppingCart' }"
              @click="shoppingCart"
              ><i class="bi bi-cart-fill"></i
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>


          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <h5 id="offcanvasRightLabel">Offcanvas right</h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">...</div>
          </div>
</template>
<script>
import { setLocale } from "@vee-validate/i18n";

export default {
  name: "Navbar",
  data() {
    return {
      locale: ["EN", "CH"],
      lang: "EN",
    };
  },
  methods: {
    shoppingCart(e) {},
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
  background-color: #54c3f1;
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
.navbar-nav .show > .nav-link,
.navbar-nav .nav-link.active {
  color: #2588b0;
}
</style>
