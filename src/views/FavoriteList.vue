<template>
  <div>
    <Loading :active="isLoading" :z-index="1000"></Loading>
    <section class="banner">
      <div class="banner-content-wrap">
        <h3 class="banner-title">收藏列表</h3>
      </div>
    </section>
    <div class="container">
      <section class="products">
        <div v-if="favoritesList" class="row g-0 py-4">
          <template v-for="item in favoritesList" :key="item.id">
            <div class="col-12 col-md-3 col-sm-5 product-feature my-3 mx-3">
              <img :src="item.imageUrl" alt="product-img" />
              <div class="product-feature-btn">
                <button
                  ref="product-detail"
                  button
                  type="button"
                  class="btn btn-primary btn-lg"
                  @click="$router.push({ path: `/productList/${item.id}` })"
                >
                  查看商品
                </button>
              </div>
              <a href="#" class="like" @click.prevent="toggleFavorite(item.id)">
                <span v-if="favorite.includes(item.id)">
                  <i
                    v-if="favorite.includes(item.id)"
                    class="bi bi-suit-heart-fill"
                  ></i>
                </span>
                <i v-else class="bi bi-suit-heart"></i>
              </a>
              <div class="product-feature-text">
                <small class="city-sub-name">{{ item.category }}</small>
                <p class="city-name">{{ item.title }}</p>
              </div>
            </div>
          </template>
        </div>
        <div v-else class="row g-0 py-4">
          <h4 class="title w-100 text-center mb-4">還沒有任何收藏唷!</h4>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { apiGetProducts } from "@/utils/api.js";

export default {
  name: "FavoriteList",
  data() {
    return {
      products: [],
      favoritesList: [],
      isLoading: false,
      id: "",
      favorite: JSON.parse(localStorage.getItem("favorite")) || [],
    };
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      apiGetProducts()
        .then((res) => {
          this.isLoading = false;
          this.products = res.data.products;
          this.getFavorites();
        })
        .catch((error) => {
          this.isLoading = false;
          this.$swal.fire({
          icon: "danger",
          title: "找不到收藏清單",
        });
        });
    },
    getFavorites() {
      this.favoritesList = this.products.filter(
        (item) => this.favorite.indexOf(item.id) > -1
      );
    },
    toggleFavorite(id) {
      // findIndex 尋找陣列中符合對象並返回index 若沒有合適的會回傳-1
      const favoriteIndex = this.favorite.findIndex((item) => item === id);
      if (favoriteIndex === -1) {
        this.favorite.push(id);
        this.$swal.fire({
          icon: "success",
          title: "已加入收藏",
        });
      } else {
        this.favorite.splice(favoriteIndex, 1);
        this.$swal.fire({
          icon: "success",
          title: "已移除收藏",
        });
      }
      this.getFavorites();
    },
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
  background-image: url("@/assets/img/favorite.png");
}

.product-feature {
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  height: max-content;
  border-radius: 4px;
  /* max-width: 30.4%; */
  img {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:hover {
      opacity: 0.5;
    }
  }
  .product-feature-text {
    text-align: center;
    position: static;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 8px 0;
    .city-sub-name {
      font-size: 20px;
      color: #5f5f5f;
    }
    .city-name {
      font-size: 24px;
      color: #2a2a2a;
      font-weight: 600;
    }
  }
  .product-feature-btn {
    top:40%;
  }
}
@media screen and (min-width: 320px) and (max-width: 576px){
  .product-feature{
    margin: 0 !important;
  }
}
</style>
