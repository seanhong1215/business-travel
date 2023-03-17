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
    <h4 class="p-3" v-if="length === 0">購物車沒有任何品項</h4>
    <div class="offcanvas-body" v-if="length !== 0">
      <div class="card mb-3" v-for="item in cart.carts" :key="item.id">
        <div class="row g-0">
          <div class="col-md-2">
            <img :src="item.product.imageUrl" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-2 input-space">
              <h5 class="card-title">{{item.product.title}}</h5>
          </div>
          <div class="col-md-2 input-space">
              <div class="d-flex align-center justify-content-center">
                <select v-model.number="item.qty" class="form-select" :value="item.qty" 
                @change="() => selectCartQty(item.id, item.qty)">
                <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
              </select>
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
  </div>
</template>
<script>
import { apiGetCart } from "@/utils/api";
// import cartStroe from '../store/cartStore';
// import { mapActions } from 'pinia';
export default {
  name: "Navbar",
  data() {
    return {
      isLoading: false,
      cart: {},
      length: 0,
      currentCart: 1
    };
  },
  methods: {
    getCarts() {
      this.isLoading = true;
      apiGetCart()
        .then((res) => {
          this.cart = res.data.data;
          this.isLoading = false;
          this.length = this.cart.carts.length
        })
        .catch((err) => {
          this.isLoading = false;
          this.$swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
    // ...mapActions(cartStroe, ['getCarts']),
    delProduct(id) {
      this.isLoading = true;
      this.$http
        .delete(
          `${import.meta.env.VITE_API}/api/${
            import.meta.env.VITE_PATH
          }/cart/${id}`
        )
        .then(() => {
          this.isLoading = false;
          this.getCarts();
          this.$swal.fire({
            icon: "success",
            title: "刪除產品成功",
          });
        })
        .catch((err) => {
          this.isLoading = false;
          this.$swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
    deleteProducts(){
      this.isLoading = true;
      this.$http
        .delete(
          `${import.meta.env.VITE_API}/api/${
            import.meta.env.VITE_PATH
          }/carts`
        )
        .then(() => {
          this.isLoading = false;
          this.getCarts();
          this.$swal.fire({
            icon: "success",
            title: "刪除產品成功",
          });
        })
        .catch((err) => {
          this.isLoading = false;
          this.$swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
    selectCartQty(id, qty){
      const api = `${import.meta.env.VITE_API}/api/${
        import.meta.env.VITE_PATH
      }/cart/${id}`;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http
        .put(api, { data: cart })
        .then(() => {
          this.isLoading = false;
          this.$swal.fire({
            icon: "success",
            title: "更新數量",
          });
        })
        this.getCarts();
    },
  },
  
  mounted() {
    this.getCarts();
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
</style>
