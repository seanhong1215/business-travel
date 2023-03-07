<template>
  <div>
  <section class="banner">
    <div class="banner-content-wrap">
      <h3 class="banner-title">小B商務旅行</h3>
      <p class="banner-desc">帶你深入探索有趣又獨特的旅遊體驗行程</p>
      <button type="button" class="btn btn-primary btn-lg" @click="toIntro">
        立即選購行程
      </button>
      <i class="bi bi-arrow-down"></i>
    </div>
  </section>
  <div class="container">
    <section ref="intro" class="intro-wrap">
      <span class="intro-subtitle">有感生活 簡約踏實</span>
      <h3 class="intro-title">
        我們相信 難忘的旅遊行程<br />可以幫助人創造最真實的回憶
      </h3>
      <p class="intro-desc">
        商務旅行是現代商業活動中不可或缺的一部分。隨著全球化和國際貿易的發展，越來越多的企業需要開展國際業務，並且需要在不同的城市、國家和地區進行商務旅行
      </p>
    </section>
    <section class="products">
      <div class="row g-0">
        <template v-for="item in products" :key="item.id">
        <div class="col-md-4 product-feature">
          <swiper
            :modules="modules"
            class="mySwiper"
            :effect="'fade'"
            :pagination="{
              clickable: true,
            }"
          >
            <swiper-slide
              >
                <img :src="item.imageUrl" alt=""/>
          </swiper-slide>
            <swiper-slide
              ><img :src="item.imageUrl" alt=""
            /></swiper-slide>
            <swiper-slide
              ><img :src="item.imageUrl" alt=""
            /></swiper-slide>
          </swiper>
          
          <div class="product-feature-text">
            <small class="city-sub-name">{{ item.category }}</small>
            <p class="city-name">{{ item.title }}</p>
          </div>
          <i class="like bi bi-heart-fill"></i>
        </div>
      </template>
        <div class="col-md-6">
          <div class="cards">
            <div class="card-wrap">
              <h4 class="card-title">按照自己的步調和正確的體驗去探索</h4>
              <p class="card-desc">
                我們結合了傳統住宿和另類住宿，無論是在遙遠的目的地還是在附近的目的地，在自然和冒險之旅中，在海上或海灘上，在國際大都市或具有古老歷史的地方，或在難忘的蜜月中。
                我們希望您帶來並分享終生難忘的獨特回憶。
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <!-- <div class="card"> -->
          <img
            src="@/assets/img/homeCard-07.png"
            class="card-img-top"
            alt="..."
          />
          <!-- </div> -->
        </div>
      </div>
      
    </section>
    <section class="about">
      <div class="about-wrap">
        <h3 class="about-title">我們會將您的工作變成令人興奮的旅程</h3>
        <p class="about-desc">
          規劃國內外個人或團體的深度小旅行，從個人企劃、發想、主題挑選、場景選擇、拍攝剪輯及設計等，為每一個參加的顧客做出獨一無二的旅遊企劃，不僅僅享受旅行的過程並留下回憶，製作出屬於您自己獨一無二的旅行，享受與以往不同的旅遊體驗。
        </p>
        <button type="button" class="btn btn-primary">了解更多</button>
      </div>
    </section>
    <section class="recommend">
      <h3 class="recommend-title">獨特旅遊景點</h3>
      <swiper
        :slides-per-view="3"
        :space-between="30"
        :modules="modules"
        navigation
      >
        <swiper-slide>
          <img src="@/assets/img/recommend-01.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/recommend-02.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/recommend-03.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/recommend-01.png" alt="" />
        </swiper-slide>
      </swiper>
    </section>
  </div>
</div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import {apiProducts} from "@/utils/api.js"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  name: "HomeView",
  data() {
    return { 
      modules: [EffectFade, Autoplay, Navigation, Pagination],
      products: ""
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
    toIntro() {
      this.$refs["intro"].scrollIntoView(true);
    },
  },
  mounted(){
    apiProducts().then((res => {
      this.products = res.data.products
      console.log(this.products);
    }))
  }
};
</script>

<style lang="scss" scoped>
.banner {
  background-image: url("@/assets/img/banner.png");
  width: 100%;
  height: 830px;
  background-size: cover;
}
.banner-content-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
  i {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 20px;
    font-size: 32px;
    animation-name: MoveToBottom; /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 2s; /*動畫持續時間，單位為秒*/
    animation-delay: 1s; /*動畫延遲開始時間*/
    animation-iteration-count: infinite; /*動畫次數，infinite 為無限次*/
    transition-timing-function: ease-in-out;
  }
  @keyframes MoveToBottom {
    // 0%{bottom: 10px}
    // 100%{bottom: 0}
  }
  .banner-title {
    font-size: 36px;
  }
  .banner-desc {
    font-size: 24px;
  }
}
.intro-wrap {
  padding: 60px 0;
  text-align: center;

  .intro-subtitle {
    color: #999;
    font-size: 16px;
  }
  .intro-title {
    color: #2a2a2a;
    font-weight: 600;
    line-height: 1.5;
    padding-top: 8px;
  }
  .intro-desc {
    color: #2a2a2a;
    padding-top: 8px;
    width: 70%;
    margin: auto;
  }
}
.about {
  background-image: url("@/assets/img/me.png");
  width: 100%;
  height: 340px;
  background-size: cover;
}
.about-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* width: 90%; */
  height: 100%;
  color: #fff;
  padding: 60px;
  .about-title {
    font-size: 24px;
    padding-bottom: 16px;
  }
  .about-desc {
    font-size: 20px;
    text-align: left;
    padding-bottom: 20px;
  }
  .btn {
    display: inline-block;
  }
}

.products .cards {
  width: 100%;
  height: 100%;
  background-color: #000;
  color: #fff;

  .card-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 75%;
    height: 100%;
    margin: auto;
    .card-title {
      font-size: 32px;
      padding-bottom: 32px;
    }
    .card-desc {
      font-size: 20px;
    }
  }
}

.product-feature{
  position: relative;
  // &:hover{
  //   background-color: #000;
  //   z-index: 2;
  // }
  .product-feature-text {
    position: absolute;
    z-index: 1;
    bottom: 8px;
    left: 8px;
    .city-sub-name {
      font-size: 16px;
      color: #C9C9C9;
    }
    .city-name {
      font-size: 20px;
      color: #fff;
      letter-spacing: 1px;
    }
  }
  .like {
    position: absolute;
    right: 8px;
    top: 8px;
    z-index: 1;
    color: #f2f2f2;
    font-size: 20px;
  }
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
}

:deep(.products) {
  .swiper-pagination {
    text-align: right;
    .swiper-pagination-bullet-active {
      background: #f2f2f2;
      width: 12px;
      height: 12px;
    }
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      opacity: .5;
    }
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.recommend {
  padding: 60px 0;
}
.recommend-title {
  padding-bottom: 40px;
  font-weight: 600;
  font-size: 36px;
  text-align: center;
}
:deep(.recommend) {
  .swiper-button-prev,.swiper-button-next {
    color: #000;
  }
}

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
    }
  }
}
</style>
