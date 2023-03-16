<template>
  <toast-messages></toast-messages>
  <div class="container-fluid">
    <div class="row dashboard">
      <div class="col-md-2 leftside-menu">
      <ul class="h-100 nav-menu">
        <li class="nav-menu-item"><router-link to="/admin/products" class="nav-link">產品</router-link></li>
        <li class="nav-menu-item"><router-link to="/admin/orders" class="nav-link">訂單</router-link></li>
        <li class="nav-menu-item"><router-link to="/admin/coupons" class="nav-link">優惠券</router-link></li>
        <li class="nav-menu-item"><a href="#" @click.prevent="signOut" class="nav-link">登出</a></li>
      </ul>
    </div>
    <div class="col-md-10 main-content">
      <router-view v-if="status" />
    </div>
  </div>
  </div>
</template>
<script>
import ToastMessages from "@/components/ToastMessages.vue";
export default {
  name: "Dashboard",
  components: { ToastMessages },
  data() {
    return {
      status: false,
    };
  },
  mounted() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexschool\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.$http.defaults.headers.common["Authorization"] = token;
      this.$http
        .post(`${import.meta.env.VITE_API}/api/user/check`)
        .then(() => {
          this.status = true;
        })
        .catch((error) => {
          this.$httpMessageState(error.response, '錯誤訊息');
          this.$router.push("/login");
        });
    },
    signOut(){
      const api = `${import.meta.env.VITE_API}/logout`;
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
              this.$router.push('/');
            }
        })
        .catch((err) => {
          this.$swal.fire(
                `${err.response.data.message}!!!`,
                '錯誤訊息',
                'error'
            )
        });
    }
  },
};
</script>
<style lang="scss" scoped>
*{
  padding: 0;
    margin: 0;
    list-style: none;
}
.dashboard{
  height: 100vh;
}
  .leftside-menu{
    background-color: #333;
    .nav-menu-item{
      padding: 16px 0;
      border-bottom:1px solid #d9d9d9;
      &:hover {
          background-color: #54c3f1;
        }
      .nav-link{
        font-size: 20px;
        color: #fff;
        text-align: center;
        
      }
    }
    .nav-menu-item:first-child{
      border-top: 1px solid #d9d9d9;
    }
  }
  .main-content {
    padding: 0 30px;
  }
</style>
