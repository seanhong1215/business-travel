<template>
  <div>
    <section class="banner">
      <div class="banner-content-wrap">
        <h3 class="banner-title">購物車</h3>
      </div>
    </section>
    <section class="container">
      <div class="order-process-btn py-5">
        <button button type="button" class="btn btn-outline-primary col-12 col-md-3">
          Step1 建立訂單
        </button>
        <button button type="button" class="btn btn-primary active col-12 col-md-3">
          Step2 確認付款
        </button>
        <button button type="button" class="btn btn-outline-primary col-12 col-md-3">
          Step3 付款完成
        </button>
      </div>
      <div class="row g-5 order">
        <div class="col-md-12 bg-light p-4">
          <h4 class="title w-100 text-center mb-4">填寫訂單資料</h4>
          <Form
            ref="form"
            class="col-md-12"
            v-slot="{ errors }"
            @submit="createOrder"
          >
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
              ></Field>
              <error-message
                name="email"
                class="invalid-feedback"
              ></error-message>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <Field
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></Field>
              <error-message
                name="姓名"
                class="invalid-feedback"
              ></error-message>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <Field
                id="tel"
                name="電話"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                rules="required|min:8|max:10"
                v-model="form.user.tel"
              ></Field>
              <error-message
                name="電話"
                class="invalid-feedback"
              ></error-message>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <Field
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></Field>
              <error-message
                name="地址"
                class="invalid-feedback"
              ></error-message>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea
                name=""
                id="message"
                class="form-control"
                cols="30"
                rows="5"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-danger">送出訂單</button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { apiCreateOrder, apiGetCart } from '@/utils/api.js'

export default {
  name: 'ConfirmCart',
  data () {
    return {
      isLoading: false,
      loadingStatus: {
        loadingItem: ''
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCart () {
      apiGetCart()
        .then((response) => {
          this.cart = response.data.data
        })
        .catch((err) => {
          this.$swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    createOrder () {
      const order = this.form
      apiCreateOrder({ data: order })
        .then((response) => {
          this.$swal.fire({
            icon: 'success',
            title: response.data.message
          })
          if (response.data.success) {
            this.$router.push({ path: '/finishCart' })
          }
          this.$refs.form.resetForm()
          this.getCart()
        })
        .catch((err) => {
          this.$swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    }
  },
  mounted () {
    this.getCart()
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
</style>
