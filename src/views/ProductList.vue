<template>
    <section class="banner">
      <div class="banner-content-wrap">
        <h3 class="banner-title">產品列表</h3>
      </div>
    </section>
    <section class="container mt-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link class="nav-link" :to="{ path: '/' }">首頁</router-link></li>
          <li class="breadcrumb-item"><router-link class="nav-link" :to="{ path: '/products' }">產品列表</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">單一產品</li>
        </ol>
      </nav>
      <div class="product-list-title-text">
        <h3 class="product-list-title">{{ product.title }}</h3>
        <p class="product-list-desc">{{ product.content }}</p>
      </div>
      <div class="row g-4 product-list-content">
        <div class="col-md-8 product-list-main">
          <div class="product-list-media-wrap">
            <img :src="product.imageUrl" alt="" />
          </div>
          <div class="product-list-text">
            <h4 class="product-list-text-title">行程說明</h4>
            <p class="product-list-text-desc">{{ product.description }}</p>
          </div>
          <div class="product-list-text">
            <h4 class="product-list-text-title">注意事項</h4>
            <ul class="product-list-text-desc">
              <li>
                最少出團人數 10
                人，當參加人數未達最少成團人數時，將取消旅遊行程。
              </li>
              <li>
                若遇颱風、暴風雪等天候不佳的情況，將於出發前 1
                天，，決定是否取消。
              </li>
              <li>請務必於 20 分鐘前抵達指定地點，逾時不等。</li>
              <li>請著輕便服裝、鞋子參加。</li>
              <li>請提早 20分鐘至集合地點等候，巴士將準時出發，逾時不等。</li>
            </ul>
          </div>
          <div class="product-list-text">
            <h4 class="product-list-text-title">取消政策</h4>
            <ul class="product-list-text-desc">
              <li>出發前21至30天取消訂單，需收取旅遊費用全額10%手續費。</li>
              <li>出發前11至20天取消訂單，需收取旅遊費用全額20%手續費。</li>
              <li>出發前4至10天取消訂單，需收取旅遊費用全額30%手續費。</li>
              <li>出發前1天至3天取消訂單，需收取旅遊費用全額70%手續費。</li>
              <li>出發當天取消訂單、因個人因素未通知不參加者恕不退費。</li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 product-list-confirm">
          <div class="form-wrap">
            <div class="input-group mb-3">
              <label for="date">請選擇時間</label>
              <div class="input-group date" id="datepicker">
                <input
                  type="date"
                  class="form-control"
                  id="date"
                  value="2023-02-22"
                  min="2023-01-01"
                  max="2023-12-31"
                />
              </div>
              <div class="input-group date mt-2" id="datepicker">
                <input
                  type="date"
                  class="form-control"
                  id="date"
                  value="2023-02-22"
                  min="2023-01-01"
                  max="2023-12-31"
                />
              </div>
            </div>
            <div class="input-group mb-3">
              <label for="select-num">請選擇人數</label>
              <div class="input-group">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="select-num"
                >
                <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
                </select>
              </div>
            </div>
            <div class="input-text">
              <del class="price">NT${{ product.price }}</del>
              <small class="price">NT${{ product.origin_price  }}</small>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-primary w-100 text-white"
            :disabled="
              loadingStatus.loadingItem === product.id || !product.is_enabled
            "
            @click="addCart(product.id)"
          >
            加入購物車
          </button>
        </div>
      </div>
    </section>
    <recommend />
</template>
<script>
import Recommend from '@/components/Recommend.vue'
import cartStroe from '../store/cartStore';
import { mapActions } from 'pinia';

export default {
  name: "ProductList",
  components: {
    Recommend
  },
  data() {
    return {
      paramId: "",
      product: {},
      loadingStatus: {
        loadingItem: "",
      },
    };
  },
  methods: {
    getProduct(id) {
      this.isLoading = true;
      const api = `${import.meta.env.VITE_API}/api/${
        import.meta.env.VITE_PATH
      }/product/${id}`;
      this.$http.get(api).then((res) => {
        this.product = res.data.product;
        this.isLoading = false;
      });
    },
    addCart(id, qty = 1) {
      this.loadingStatus.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      const api = `${import.meta.env.VITE_API}/api/${
        import.meta.env.VITE_PATH
      }/cart`;
      this.$http
        .post(api, { data: cart })
        .then((response) => {
          this.$swal.fire({
            icon: "success",
            title: response.data.message,
          });
          this.getCarts();
          this.loadingStatus.loadingItem = "";
        })
        .catch((err) => {
          this.$swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
    ...mapActions(cartStroe, ['getCarts']),

  },
  mounted() {
    this.paramId = this.$route.params.id;
    this.getProduct(this.paramId);
  },

};
</script>

<style lang="scss" scoped>
.banner {
  background-image: url("@/assets/img/products.png");
}
.product-list-title-text {
  color: #2a2a2a;

  .product-list-title {
    position: relative;
    font-size: 36px;
    font-weight: 600;
    &::after {
      content: "";
      /* left: 0; */
      /* bottom: 0; */
      /* position: absolute; */
      margin-top: 16px;
      display: block;
      width: 100%;
      height: 1px;
      background-color: #d9d9d9;
    }
  }
  .product-list-desc {
    font-size: 20px;
    color: #5f5f5f;
  }
}
.product-list-content {
  padding-top: 20px;
  .product-list-main {
    .product-list-media-wrap {
      /* width: 950px; */
      /* height: 520px; */
      overflow: hidden;
      border-radius: 4px;
    }
    .product-list-text {
      padding: 20px 0;
      color: #2a2a2a;
      .product-list-text-title {
        font-size: 24px;
        font-weight: 600;
      }
      .product-list-text-desc {
        font-size: 20px;
        color: #5f5f5f;
        margin-bottom: 0;
      }
    }
  }
  .product-list-confirm {
    .form-wrap {
      padding: 16px;
      border-radius: 4px;
      background-color: #fff;
      .input-text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding: 16px 0;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0px;
          width: 100%;
          height: 1px;
          background-color: #d9d9d9;
        }
      }
    }
    :deep(button) {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      box-shadow: none;
    }
  }
}
.nav-link{
  white-space: nowrap;
  padding: 0 6px;
  &:hover {
  color: #54C3F1;
}
}
</style>
