<template>
  <div>
    <Loading :active="isLoading" :z-index="1000"></Loading>
    <section class="banner">
      <div class="banner-content-wrap">
        <h3 class="banner-title">收藏列表</h3>
      </div>
    </section>
    <div class="container-fluid p-0">
      <section class="products">
        <div class="row g-0">
          <template v-for="item in favoritesList" :key="item.id">
            <div class="col-md-4 product-feature">
              <img :src="item.imageUrl" alt="product-img" />
              <div class="product-feature-btn">
                <button
                  ref="product-detail"
                  button
                  type="button"
                  class="btn btn-primary btn-lg"
                  @click="$router.push({ path: '/products' })"
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
                <i v-else class="bi bi-suit-heart"></i>
              </a>
            </div>
          </template>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { apiProducts } from "@/utils/api.js";

export default {
  name: "FavoriteList",
  data() {
    return {
      products: [],
      favoritesList: [],
      isLoading: false,
      id: '',
      favorite: JSON.parse(localStorage.getItem("favorite")) || [],
    };
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      apiProducts()
        .then((res) => {
          this.products = res.data.products;
          this.getFavorites();
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          // this.emitter.emit('push-message', {
          //   style: 'danger',
          //   title: '找不到收藏清單',
          //   content: error.response.data.message
          // })
        });
    },
    getFavorites() {
      this.favoritesList = this.products.filter(
        (item) => this.favorite.indexOf(item.id) > -1
      );
      console.log(this.favoritesList)
    },
    toggleFavorite (id) {
      console.log(id)
      // findIndex 尋找陣列中符合對象並返回index 若沒有合適的會回傳-1
      const favoriteIndex = this.favorite.findIndex((item) => item === id)
      if (favoriteIndex === -1) {
        this.favorite.push(id)
        console.log(this.favorite);
        // this.emitter.emit('push-message', {
        //   style: 'success',
        //   title: '已加入收藏'
        // })
      } else {
        this.favorite.splice(favoriteIndex, 1)
        console.log(this.favorite);
        // this.emitter.emit('push-message', {
        //   style: 'success',
        //   title: '已移除收藏'
        // })
      }
    }
  },
  watch: {
    favorite: {
      handler () {
        // 當資料有變動時就進行寫入
        localStorage.setItem('favorite', JSON.stringify(this.favorite))
      },
      deep: true
    }
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

.product-feature{
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

</style>
