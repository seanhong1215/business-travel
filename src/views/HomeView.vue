<template>
  <Loading :active="isLoading"></Loading>
  <section class="banner">
    <div class="banner-content-wrap">
      <h3 class="banner-title">小B商務旅行</h3>
      <p class="banner-desc">帶你深入探索有趣又獨特的旅遊體驗行程</p>
      <button
        type="button"
        class="btn btn-primary btn-lg mt-3"
        @click="toIntro"
      >
        立即選購行程
      </button>
      <i class="bi bi-arrow-down"></i>
    </div>
  </section>
  <section ref="intro" class="intro-wrap">
    <span class="intro-subtitle">有感生活 簡約踏實</span>
    <h3 class="intro-title">
      我們相信 難忘的旅遊行程<br />可以幫助人創造最真實的回憶
    </h3>
    <p class="intro-desc w-50">
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
            <swiper-slide>
              <img :src="item.imageUrl" alt="product-img"
            /></swiper-slide>
          </swiper>
          <div class="product-feature-btn">
            <button
              ref="product-detail"
              button
              type="button"
              class="btn btn-primary btn-lg text-white"
              @click="$router.push({ path: `/productList/${item.id}` })"
            >
              查看商品
            </button>
          </div>
          <div class="product-feature-text">
            <small class="city-sub-name">{{ item.category }}</small>
            <p class="city-name">{{ item.title }}</p>
          </div>
          <a href="#" class="like" @click.prevent="toggleFavorite(item.id)">
            <span v-if="favorite.includes(item.id)">
              <i
                v-if="favorite.includes(item.id)"
                class="bi bi-suit-heart-fill"
              ></i>
            </span>
            <span v-else><i class="bi bi-suit-heart"></i></span>
          </a>
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
        <img
          src="@/assets/img/homeCard-07.png"
          class="card-img-top"
          alt="homeCard"
        />
      </div>
    </div>
  </section>
  <section class="about">
    <div class="about-wrap container">
      <h3 class="about-title">我們會將您的工作變成令人興奮的旅程</h3>
      <p class="about-desc">
        規劃國內外個人或團體的深度小旅行，從個人企劃、發想、主題挑選、場景選擇、拍攝剪輯及設計等，為每一個參加的顧客做出獨一無二的旅遊企劃，不僅僅享受旅行的過程並留下回憶，製作出屬於您自己獨一無二的旅行，享受與以往不同的旅遊體驗。
      </p>
      <button
        type="button"
        class="btn btn-primary btn-lg"
        @click="$router.push({ path: '/about' })"
      >
        了解更多
      </button>
    </div>
  </section>
  <recommend />
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import Recommend from "@/components/Recommend.vue";
import productsStore from "../store/productsStore";
import { mapState, mapActions } from "pinia";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Recommend,
  },
  name: "HomeView",
  data() {
    return {
      isLoading: false,
      modules: [EffectFade, Autoplay, Navigation, Pagination],
    };
  },
  methods: {
    toIntro() {
      this.$refs["intro"].scrollIntoView(true);
    },
    ...mapActions(productsStore, ["getProducts", "toggleFavorite"]),
  },
  computed: {
    ...mapState(productsStore, ["products", "favorite"]),
  },
  watch: {
    favorite: {
      handler() {
        // 當資料有變動時就進行寫入
        localStorage.setItem("favorite", JSON.stringify(this.favorite));
      },
      deep: true,
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
.banner {
  background-image: url("@/assets/img/banner.png");
  background-color: #000;
  width: 100%;
  height: 831px;
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
  }

  .banner-title {
    font-size: 36px;
    font-weight: bold;
  }
  .banner-desc {
    font-size: 24px;
    font-weight: bold;
  }
}
.intro-wrap {
  padding: 80px 0;
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
    font-size: 20px;
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

.products {
  :deep(.product-feature) {
    .swiper {
      width: 100%;
      height: 100%;
      .swiper-slide {
        text-align: center;
        cursor: pointer;
        background: #000;
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          &:hover {
            opacity: 0.5;
          }
        }
      }
    }
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
        opacity: 0.5;
      }
    }
  }
}
</style>
