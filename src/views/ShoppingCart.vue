<template>
  <div>
    <section class="banner">
      <div class="banner-content-wrap">
        <h3 class="banner-title">購物車</h3>
      </div>
    </section>
    <section class="container">
      <div class="order-process-btn py-5">
        <button button type="button" class="btn btn-primary active">
          Step1 建立訂單
        </button>
        <button button type="button" class="btn btn-outline-primary">
          Step2 確認付款
        </button>
        <button button type="button" class="btn btn-outline-primary">
          Step3 付款完成
        </button>
      </div>
      <div class="row g-5 order">
        <div class="col-md-12 bg-light p-4">
          <h4 class="title w-100 text-center mb-4">訂單內容</h4>
          <table class="table align-middle">
            <thead class="text-center">
              <tr>
                <th width="25%">圖片</th>
                <th width="25%">商品名稱</th>
                <th width="25%">數量</th>
                <th width="25%">價格</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id">
                  <td style="width: 200px">
                    <div
                      style="
                        height: 100px;
                        background-size: cover;
                        background-position: center;
                      "
                      :style="{
                        backgroundImage: `url(${item.product.imageUrl})`,
                      }"
                    ></div>
                  </td>
                  <td class="text-center">
                    {{ item.product.title }}
                  </td>
                  <td class="text-center">
                    <div class="input-group input-group-sm">
                      <div class="input-group">
                        <select v-model.number="item.qty" class="form-select" :value="item.qty"
                          @change="() => selectCartQty(item.id, item.qty)">
                          <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
                        </select>
                        <span class="input-group-text" id="basic-addon2">{{
                          item.product.unit
                        }}</span>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <small class="text-muted">NT${{ item.total }}</small>
                  </td>
                  <td class="text-center">
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      @click="removeCartItem(item.id)"
                      :disabled="loadingStatus.loadingItem === item.id"
                    >
                      <i class="bi bi-x"></i>
                    </button>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
          <div class="input-group">
            <input
              v-model="couponCode"
              type="text"
              :placeholder="total - finalTotal !== 0 ? '已成功套用折扣碼!!' : '輸入折扣碼'"
              :disabled="total - finalTotal !== 0 ? true : false"
              class="form-control"
            />
            <button class="input-group-text" id="basic-addon2" @click.prevent="getCoupons">套用</button>
          </div>
          <div>
            <div class="discount">
              <p class="text-end">
                <small>總金額：</small>
                <small>{{ cart.total }}</small>
              </p>
              <p class="text-end" v-if="cart.final_total !== cart.total">
                <small class="text-success">折扣價</small>
                <small class="text-success">{{ cart.final_total }}</small>
              </p>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button
              class="btn btn-primary"
              @click="$router.push({ path: '/confirmCart' })"
            >
              下一步
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { apiGetCart, apiRemoveCartItem } from "@/utils/api.js";

export default {
  name: "ShoppingCart",
  data() {
    return {
      loadingStatus: {
        loadingItem: "",
      },
      isLoading: false,
      finalTotal: 0,
      total: 0,
      couponCode: '',
      cart: {},
    };
  },
  methods: {
    getCart() {
      apiGetCart()
        .then((response) => {
          this.cart = response.data.data;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    removeCartItem(id) {
      this.loadingStatus.loadingItem = id;
      apiRemoveCartItem(id)
        .then((response) => {
          alert(response.data.message);
          this.loadingStatus.loadingItem = "";
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
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
        this.getCart();
    },
    getCoupons() {
      this.isLoading = true;
      const discount = {
        data: {
          code: this.couponCode,
        },
      }
      const url = `${import.meta.env.VITE_API}/api/${
        import.meta.env.VITE_PATH
      }/coupon`;
      this.$http
        .post(url, discount)
        .then((res) => {
          this.isLoading = false;
          this.$swal.fire({
            icon: "success",
            title: '套用折扣碼成功',
          });
          this.finalTotal = res.data.data.final_total;
          this.couponCode = '';
        })
        .catch((err) => {
          this.isLoading = false;
          this.$swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
          this.couponCode = '';
        });
    }
  },
  watch: {
    // 已經折扣後，input欄位就不會出現優惠碼
    total() {
      if (this.total - this.finalTotal !== 0) {
        this.couponCode = '';
      }
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
.banner {
  background-image: url("@/assets/img/shoppingCart.png");
}
.order-process-btn {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.order {
  margin-bottom: 40px;
}
.btn i {
  margin-left: 0;
}
.discount {
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #d9d9d9;
    margin: 16px 0;
  }
  p {
    font-size: 20px;
  }
}
.input-group button{
  &:hover{
    opacity: 0.7;
  }
}
</style>
