<template>
  <nav class="navbar sticky-top navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ path: '/' }">
        <img src="@/assets/img/logo.svg" alt="logo"/>
      </router-link>
      <button class="navbar-toggler btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

      <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/about' }">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/products' }">旅遊規劃</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/favorite' }">
              <i class="bi bi-heart-fill"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i class="bi bi-cart-fill"></i>
              <span class="badge rounded-pill bg-danger text-white ms-1">{{ length }}</span> 
            </a>
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
      <h5 id="offcanvasRightLabel">購物車</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    
    <div v-if="length !== 0" class="offcanvas-body">
      <div class="card mb-3" v-for="item in cart.carts" :key="item.id">
        <div class="row g-0">
          <div class="col-md-2">
            <img :src="item.product.imageUrl" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-2 input-space">
              <h5 class="card-title">{{item.product.title}}</h5>
          </div>
          <div class="col-md-2 input-space">
              <div class="input-group d-flex align-center justify-content-center">
                <input
                        v-model.number="item.qty"
                        :disabled="true"
                        min="1"
                        type="text"
                        class="form-control"
                      />
                     
              </div>
          </div>
          <div class="col-md-3 input-space">
              <p class="card-text">
                NT${{item.total}}
              </p>
            </div>
            <div class="col-md-1 input-space">
              <i class="bi bi-trash3 delete" @click="delProduct(item.id)"></i>
            </div>
        </div>
      </div>
      <p class="card-text-total d-flex justify-content-between">
      <small>總計</small>
      <small>NT${{cart.total}}</small>
    </p>
      <div class="btn-wrap text-center">
        <button class="btn btn-primary btn-lg text-white w-100 mb-3" aria-label="Close" data-bs-dismiss="offcanvas" @click="$router.push({path: `/shoppingCart`})">查看購物車</button>
      <button class="btn btn-outline-danger" @click="deleteProducts">清空購物車</button>
      </div>
    </div>
    <div v-else class="offcanvas-body">
      <h4 class="p-3">購物車沒有任何品項</h4>
    </div>
  </div>
</template>
<script>
import cartStroe from '../store/cartStore';
import { mapActions, mapState } from 'pinia';

export default {
  name: "Navbar",
  methods: {
    ...mapActions(cartStroe, ['getCart','delProduct','deleteProducts','selectCartQty']),
  },
  computed: {
    ...mapState(cartStroe, ['cart','length']),
  },
  mounted() {
    this.getCart();
  },
};
</script>
<style lang="scss" scoped>
ul,
li {
  list-style: none;
}
.container-fluid{
  padding: 4px 60px;
}
.navbar {
  background-color: #54c3f1;
}
.nav-item {
  padding-left: 8px;
  .nav-link {
    color: #fff;
    font-size: 20px;
    &:hover {
      color: #2588b0;
    }
  }
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
.collapse {
  background: #54c3f1;
}
.offcanvas-body {
  .delete {
    cursor: pointer;
    color: red;
  }
  .card-title {
    font-size: 16px;
    margin: 0;
    padding: 0 4px;

  }
  .card-text {
    text-align: right;
    padding: 0 8px;
  }
  .input-text {
    margin: auto 0;
    i {
      font-size: 20px;
      padding: 0 4px;
    }
  }
  .form-control {
    width: 34px;
    height: 28px;
    border-radius: 4px;
  }
  .card .input-space {
    margin: auto;
    span {
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
.offcanvas-header{
  position: relative;
  &::after {
    content: '';
    left: 0;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #d9d9d9;
  }
}
.card-text-total {
  position: relative;
  padding: 20px 0;
  &::before {
    content: '';
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #d9d9d9;
  }
}
@media screen and (min-width: 320px) and (max-width: 576px){

    .navbar .container-fluid{
      justify-content: center;
    }
    .navbar-collapse{
      text-align: center;
    }
  }
</style>
