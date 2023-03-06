<template>
  <div class="container">
    <section class="banner">
      <div class="banner-content-wtap">
        <h3 class="banner-title">小B商務旅行</h3>
        <p class="banner-desc">帶你深入探索有趣又獨特的旅遊體驗行程</p>
        <button type="button" class="btn btn-primary">立即選購行程</button>
      </div>
    </section>
    <section class="intro-wrap">
      <span class="intro-subtitle">有感生活 簡約踏實</span>
      <h3 class="intro-title">
        我們相信 難忘的旅遊行程<br />可以幫助人創造最真實的回憶
      </h3>
      <p class="intro-desc">
        商務旅行是現代商業活動中不可或缺的一部分。隨著全球化和國際貿易的發展，越來越多的企業需要開展國際業務，並且需要在不同的城市、國家和地區進行商務旅行
      </p>
    </section>
    <section class="products">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <h4>按照自己的步調和正確的體驗去探索</h4>
            <p>
              我們結合了傳統住宿和另類住宿，無論是在遙遠的目的地還是在附近的目的地，在自然和冒險之旅中，在海上或海灘上，在國際大都市或具有古老歷史的地方，或在難忘的蜜月中。
              我們希望您帶來並分享終生難忘的獨特回憶。
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
          </div>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="about-wrap">
        <h3 class="banner-title">我們會將您的工作變成令人興奮的旅程。</h3>
        <p class="banner-desc">
          規劃國內外個人或團體的深度小旅行，從個人企劃、發想、主題挑選、場景選擇、拍攝剪輯及設計等，為每一個參加的顧客做出獨一無二的
          旅遊企劃，不僅僅享受旅行的過程並留下回憶，製作出屬於您自己獨一無二的旅行，享受與以往不同的旅遊體驗。
        </p>
        <button type="button" class="btn btn-primary">了解更多</button>
      </div>
    </section>
    <section class="recommend">
        <h3>獨特旅遊景點</h3>
      <swiper
        :slides-per-view="3"
        :space-between="50"
        :modules="modules"
        navigation
        :pagination="{ clickable: true }"
      >
        <swiper-slide>
          <img
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1529&q=80"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </swiper-slide>
      </swiper>
    </section>
    <footer class="footer">
        footer
    </footer>
</div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  name: "HomeView",
  data() {
    return { modules: [Navigation, Pagination] };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  width: 600px;
  height: 400px;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.recommend {
    padding: 100px 0;
}
</style>
