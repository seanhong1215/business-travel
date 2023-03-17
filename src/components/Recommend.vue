<template>
 <section class="recommend container">
      <h3 class="recommend-title">獨特旅遊景點</h3>
      <swiper
      class="mySwiper"
      :slides-per-view="1"
      :space-between="30"
      :modules="modules"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :breakpoints="{
         '768': {
        slidesPerView: 3,
        },
        }"
      navigation
      >
        <swiper-slide>
          <img src="https://raw.githubusercontent.com/seanhong1215/businese-travel-uploadImages/main/homeCard-05.png" alt="" />
          <div class="product-feature-btn">
            <button
              ref="product-detail"
              button
              type="button"
              class="btn btn-primary text-white"
              @click="$router.push({ path: `/products` })"
            >
              查看商品
            </button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="https://raw.githubusercontent.com/seanhong1215/businese-travel-uploadImages/main/homeCard-04.png" alt="" />
          <div class="product-feature-btn">
            <button
              ref="product-detail"
              button
              type="button"
              class="btn btn-primary text-white"
              @click="$router.push({ path: `/products` })"
            >
              查看商品
            </button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="https://raw.githubusercontent.com/seanhong1215/businese-travel-uploadImages/main/homeCard-03.png" alt="" />
          <div class="product-feature-btn">
            <button
              ref="product-detail"
              button
              type="button"
              class="btn btn-primary text-white"
              @click="$router.push({ path: `/products` })"
            >
              查看商品
            </button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="https://raw.githubusercontent.com/seanhong1215/businese-travel-uploadImages/main/homeCard-02.png" alt="" />
          <div class="product-feature-btn">
            <button
              ref="product-detail"
              button
              type="button"
              class="btn btn-primary text-white"
              @click="$router.push({ path: `/products` })"
            >
              查看商品
            </button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="https://raw.githubusercontent.com/seanhong1215/businese-travel-uploadImages/main/homeCard-01.png" alt="" />
          <div class="product-feature-btn">
            <button
              ref="product-detail"
              button
              type="button"
              class="btn btn-primary text-white"
              @click="$router.push({ path: `/products` })"
            >
              查看商品
            </button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="https://raw.githubusercontent.com/seanhong1215/businese-travel-uploadImages/main/homeCard-06.png" alt="" />
          <div class="product-feature-btn">
            <button
              ref="product-detail"
              button
              type="button"
              class="btn btn-primary text-white"
              @click="$router.push({ path: `/products` })"
            >
              查看商品
            </button>
          </div>
        </swiper-slide>
        
      </swiper>
    </section>
</template>

<script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
  import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { apiGetProducts } from "@/utils/api.js";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  name: "Recommend",
  data(){
    return {
      modules: [EffectFade, Autoplay, Navigation, Pagination],
      products: []
    }
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      apiGetProducts().then((res) => {
        this.products = res.data.products;
        this.isLoading = false;
      });
    },
  },
  mounted(){
    this.getProducts();
  }

}
</script>

<style lang="scss" scoped>
  .recommend {
  padding: 60px 0;
}
.recommend-title {
  padding-bottom: 40px;
  font-weight: 600;
  font-size: 36px;
  text-align: center;
}
.recommend{
  :deep(.swiper) {
    .swiper-button-prev,.swiper-button-next {
      color: #000;
    
    }
}
.swiper-slide {
      cursor: pointer;
      background: #000;
      position: relative;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        &:hover {
          opacity: 0.5;
        }
      }
      .product-feature-btn {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        display: none;
      }
      &:hover .product-feature-btn {
          display: block;
        }
    }
}

</style>