<template>
  <div>
    <section class="banner">
      <div class="banner-content-wrap">
        <h3 class="banner-title">購物車</h3>
      </div>
    </section>
    <section class="container">
      <div class="order-process-btn py-5">
        <button type="button" class="btn btn-primary active col-12 col-md-3">
          Step1 建立訂單
        </button>
        <button type="button" class="btn btn-outline-primary col-12 col-md-3">
          Step2 確認付款
        </button>
        <button type="button" class="btn btn-outline-primary col-12 col-md-3">
          Step3 付款完成
        </button>
      </div>
      <div class="row g-5 order">
        <div class="col-12 bg-light p-4" v-if="length">
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
                        <select
                          class="form-select"
                          :value="item.qty"
                          @change="(evt) => selectCartQty(item.id, evt)"
                        >
                          <option :value="i" v-for="i in 20" :key="i">
                            {{ i }}
                          </option>
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
                      @click="delProduct(item.id)"
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
              :placeholder="
                total - finalTotal !== 0 ? '已成功套用折扣碼!!' : '輸入折扣碼'
              "
              :disabled="total - finalTotal !== 0 ? true : false"
              class="form-control"
            />
            <button
              class="input-group-text"
              id="basic-addon2"
              @click.prevent="getCoupons"
            >
              套用
            </button>
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
        <div class="col-12 bg-light p-4" v-else>
          <h4 class="title w-100 text-center mb-4">還沒有任何訂單唷!</h4>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import cartStroe from '../store/cartStore'
import { mapActions, mapState } from 'pinia'

export default {
  name: 'ShoppingCart',
  data () {
    return {
      loadingStatus: {
        loadingItem: ''
      },
      isLoading: false,
      finalTotal: 0,
      total: 0,
      couponCode: ''
    }
  },
  methods: {
    ...mapActions(cartStroe, ['getCart', 'delProduct', 'selectCartQty']),
    getCoupons () {
      this.isLoading = true
      const discount = {
        data: {
          code: this.couponCode
        }
      }
      const url = `${import.meta.env.VITE_API}/api/${
        import.meta.env.VITE_PATH
      }/coupon`
      this.$http
        .post(url, discount)
        .then((res) => {
          this.isLoading = false
          this.$swal.fire({
            icon: 'success',
            title: '套用折扣碼成功'
          })
          this.finalTotal = res.data.data.final_total
          this.couponCode = ''
          this.getCart()
        })
        .catch((err) => {
          this.isLoading = false
          this.$swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
          this.couponCode = ''
        })
    }
  },
  computed: {
    ...mapState(cartStroe, ['cart', 'length'])
  },
  watch: {
    // 已經折扣後，input欄位就不會出現優惠碼
    total () {
      if (this.total - this.finalTotal !== 0) {
        this.couponCode = ''
      }
    }
  },
  mounted () {
    if (this.couponCode === '') {
      this.cart.final_total = this.cart.total
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  background-image: url("@/assets/img/shoppingCart.png");
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
.input-group button {
  &:hover {
    opacity: 0.7;
  }
}
@media screen and (min-width: 320px) and (max-width: 768px) {
  .order .bg-light {
    margin-top: 0;
  }

  .order {
    margin: auto 0;
    margin-bottom: 40px;
  }
}
@media (max-width: 640px) {
  .input-group {
    flex-direction: column;
  }
  .discount {
    margin-bottom: 20px;
    .text-end {
      text-align: center !important;
    }
  }
  .input-group > .form-select,
  .input-group > .form-control {
    width: 100%;
    border-radius: 0;
  }
  .input-group-text {
    border-radius: 0;
  }
}
</style>
