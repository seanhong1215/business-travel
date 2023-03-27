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
        <button button type="button" class="btn btn-outline-primary col-12 col-md-3">
          Step2 確認付款
        </button>
        <button button type="button" class="btn btn-primary active col-12 col-md-3">
          Step3 付款完成
        </button>
      </div>
      <div class="row g-5 order">
        <div class="col-md-12 bg-light p-4 text-center">
          <h4 class="title w-100 mb-4">完成訂單</h4>
          <div class="order-check">
            <i class="bi bi-check-circle-fill"></i>
          </div>
          <p>您已經完成訂單，訂單資訊已寄到Email信箱!!</p>
          <button button type="button" class="btn btn-primary mt-4" @click="$router.push({ path: '/' })">
        回到首頁
      </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FinishCart',
  data () {
    return {
      isLoading: false,
      loadingStatus: {
        loadingItem: ''
      }
    }
  },
  methods: {},
  mounted () {}
}
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
.order-check {
  i {
    font-size: 60px;
    color: green;
  }
}
</style>
