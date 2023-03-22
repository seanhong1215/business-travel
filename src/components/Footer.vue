<template>
  <footer class="footer">
    <div class="container">
      <div class="subscription">
        <h3 class="subscription-title">訂閱小B</h3>
        <p class="subscription-desc">
          立即訂閱小B 電子報! 有機會獲得用戶限定優惠及最新熱門景點旅行資訊!
        </p>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter your Email"
            aria-label="Enter your Email"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text" id="basic-addon2">訂閱</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="f-logo"><img src="@/assets/img/f-logo.svg" alt="" /></span>
      <div class="social-wrap">
        <div class="fb"><img src="@/assets/img/FB.png" alt="" /></div>
        <div class="ig"><img src="@/assets/img/IG.png" alt="" /></div>
        <div class="yt"><img src="@/assets/img/YT.png" alt="" /></div>
        <div class="line"><img src="@/assets/img/Line.png" alt="" /></div>
      </div>
      <p class="copy-right">@2023 Agnes.b sean.web.design</p>
      <p>
        本網站僅供個人練習使用，無商業行為 |
        <router-link :to="{ path: '/login' }" class="login-link"
          >登入後台</router-link
        >
      </p>
    </div>
    <div>
      <button
        type="button"
        class="goTop btn btn-primary"
        v-if="scY > 300"
        @click="toTop"
      >
        <i class="bi bi-arrow-up"></i>
      </button>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  methods: {
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="scss" scoped>
.footer {
  background-color: #2a2a2a;
  color: #fff;
  text-align: center;
  position: relative;
  .goTop {
    position: fixed;
    z-index: 100;
    right: 30px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    i {
      margin-left: 2px;
    }
  }
  .subscription {
    padding: 40px 0;
    .subscription-title {
      font-size: 36px;
    }
    .subscription-desc {
      font-size: 20px;
      padding: 20px 0;
    }
    .input-group {
      width: 50%;
      margin: auto;
    }
  }
  .footer-bottom {
    background-color: #666;
    padding: 20px 0;
    .f-logo {
      padding-bottom: 30px;
      position: relative;
      img {
        width: auto;
      }
      &::after {
        content: "";
        display: block;
        margin: auto;
        margin-top: 16px;
        margin-bottom: 20px;
        width: 60px;
        height: 1px;
        background-color: #fff;
      }
    }
    .social-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      padding: 8px 0;
    }
    .copy-right {
      font-size: 16px;
      padding: 8px 0;
    }
    .login-link {
      color: #f2f2f2;
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
