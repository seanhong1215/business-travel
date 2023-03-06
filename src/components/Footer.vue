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
      <span class="f-logo"
        ><img src="@/assets/img/home/f-logo.svg" alt=""
      /></span>
      <div class="social-wrap">
        <div class="fb"><img src="@/assets/img/home/FB.png" alt="" /></div>
        <div class="ig"><img src="@/assets/img/home/IG.png" alt="" /></div>
        <div class="yt"><img src="@/assets/img/home/YT.png" alt="" /></div>
        <div class="line"><img src="@/assets/img/home/Line.png" alt="" /></div>
      </div>
      <p class="copy-right">@2023 Agnes.b sean.web.design</p>
      <p>本網站僅供個人練習使用，無商業行為 | <a class="login-link" href="#">登入後台</a></p>
    </div>
  </footer>
  </template>
  <script>
  
  export default {
    name: "Footer",
    data() {
      return {
      };
    },
    methods: {
 
    },
  };
  </script>
  <style lang="scss" scoped>
  .footer {
  background-color: #2a2a2a;
  color: #fff;
  text-align: center;
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
      &::after {
        content: '';
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
    }
  }
}
  </style>
  