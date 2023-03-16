<template>
  <div class="container login">
    <Loading :active="isLoading" :z-index="1000"></Loading>
    <ToastMessages></ToastMessages>
    <div class="container">
        <div class="row justify-content-center">
          <h3 class="mb-3 text-center">請先登入</h3>
          <div class="col-8">
            <form id="form" class="form-signin" @submit.prevent="signIn">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  v-model="user.username"
                  id="username"
                  placeholder="name@example.com"
                  required
                  autofocus
                />
                <label for="username">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  v-model="user.password"
                  id="password"
                  placeholder="Password"
                  required
                />
                <label for="password">Password</label>
              </div>
              <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
                登入
              </button>
            </form>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import ToastMessages from '@/components/ToastMessages.vue';
export default {
  components: {
    ToastMessages,
  },
  data() {
    return {
      isLoading: false,
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      this.isLoading = true;
      this.$http
        .post(`${import.meta.env.VITE_API}/admin/signin`, this.user)
        .then((response) => {
          if (response.data.success === true) {
            const { token, expired } = response.data;
            document.cookie = `hexschool=${token}; expires=${new Date(expired)};`;
            this.isLoading = false;
            if (token) {
              this.$swal.fire(
                  '登入成功!',
                  '即將進入產品頁面',
                  'success'
                ).then((result) => {
                  if (result.isConfirmed) {
                  this.$router.push("/admin/products");
                }
              })
            }
          }
        })
        .catch((error) => {
          this.isLoading = false;
          this.$httpMessageState(error.response, '登入');
        });
    },
  },
};
</script>

<style lang="scss" scoped>

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 150px 0;
}

.form-signin {
  width: 100%;
  padding: 15px;
  margin: auto;
}
</style>
