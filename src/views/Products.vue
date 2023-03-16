<template>
  <div>
    <Loading :active="isLoading" :z-index="1000"></Loading>
    <section class="banner">
      <div class="banner-content-wrap">
        <h3 class="banner-title">旅遊規劃</h3>
      </div>
    </section>
    <div class="container">
      <div class="products-wrap">
        <div class="row g-5">
          <div class="col-md-4">
            <div class="list-group" id="list-tab" role="tablist">
              <a
                class="list-group-item list-group-item-action"
                id="list-home-list"
                :class="{ active: isActive === 'all' }"
                data-bs-toggle="list"
                href="#list-all"
                role="tab"
                aria-controls="list-all"
                @click="getProducts(1)"
                >全部</a
              >
              <a
                class="list-group-item list-group-item-action"
                id="list-profile-list"
                :class="{ active: isActive === '海' }"
                data-bs-toggle="list"
                href="#list-island"
                role="tab"
                aria-controls="list-island"
                @click="getProducts(1, '海')"
                >聖托里尼島</a
              >
              <a
                class="list-group-item list-group-item-action"
                id="list-messages-list"
                :class="{ active: isActive === '自然與冒險' }"
                data-bs-toggle="list"
                href="#list-blueSpa"
                role="tab"
                aria-controls="list-blueSpa"
                @click="getProducts(1, '自然與冒險')"
                >藍湖溫泉</a
              >
              <a
                class="list-group-item list-group-item-action"
                id="list-settings-list"
                :class="{ active: isActive === '歷史文化' }"
                data-bs-toggle="list"
                href="#list-kyoto"
                role="tab"
                aria-controls="list-kyoto"
                @click="getProducts(1, '歷史文化')"
                >京都美山町</a
              >
              <a
                class="list-group-item list-group-item-action"
                id="list-settings-list"
                :class="{ active: isActive === '家庭海灘' }"
                data-bs-toggle="list"
                href="#list-maldives"
                role="tab"
                aria-controls="list-maldives"
                @click="getProducts(1, '家庭海灘')"
                >馬爾地夫</a
              >
              <a
                class="list-group-item list-group-item-action"
                id="list-settings-list"
                :class="{ active: isActive === '異國情調的海灘' }"
                data-bs-toggle="list"
                href="#list-portugal"
                role="tab"
                aria-controls="list-portugal"
                @click="getProducts(1, '異國情調的海灘')"
                >葡萄牙</a
              >
              <a
                class="list-group-item list-group-item-action"
                id="list-settings-list"
                :class="{ active: isActive === '國際大都市' }"
                data-bs-toggle="list"
                href="#list-newYork"
                role="tab"
                aria-controls="list-newYork"
                @click="getProducts(1, '國際大都市')"
                >紐約</a
              >
            </div>
          </div>
          <div class="col-md-8">
            <template v-for="item in products" :key="item.id">
              <div class="card mb-3">
                <div class="row g-0">
                  <div
                    class="col-md-4 product-feature"
                    @click="$router.push({ path: `/productList/${item.id}` })"
                  >
                    <img
                      :src="item.imageUrl"
                      class="img-fluid rounded-start h-100"
                    />
                    <div class="product-feature-btn">
                      <button
                        ref="product-detail"
                        button
                        type="button"
                        class="btn btn-primary text-white"
                        @click="$router.push({ path: '/productList' })"
                      >
                        查看商品
                      </button>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body d-flex flex-column h-100">
                      <h5 class="card-title">{{ item.title }}</h5>
                      <p class="card-text">
                        {{ item.description }}
                      </p>
                      <p
                        class="card-text d-flex justify-content-between mt-auto pt-4"
                      >
                        <del class="text-muted"
                          >NT${{ item.price }}</del
                        >
                        <small class="text-muted">NT${{ item.origin_price }}</small>
                      </p>
                      <button
                        type="button"
                        class="btn btn-primary w-100 text-white mt-2"
                        :disabled="
                          loadingStatus.loadingItem === item.id ||
                          !item.is_enabled
                        "
                        @click="addCart(item.id)"
                      >
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <pagination
              :pages="pagination"
              @emit-pages="getProducts"
            ></pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Pagination from "@/components/Pagination.vue";
import cartStroe from '../store/cartStore';
import { mapActions } from 'pinia';

export default {
  name: "Products",
  components: {
    Pagination,
  },
  data() {
    return {
      products: [],
      pagination: {},
      isLoading: false,
      currentPage: 1,
      category: "",
      isActive: "",
      loadingStatus: {
        loadingItem: "",
      },
      // 從localStorage中取出的資料 必須給予預設值
      favorite: JSON.parse(localStorage.getItem("favorite")) || [],
    };
  },
  methods: {
    getProducts(page = 1, category) {
      this.isActive = category;
      this.currentPage = page;
      this.isLoading = true;
      let api = `${import.meta.env.VITE_API}/api/${
        import.meta.env.VITE_PATH
      }/products?page=${page}`;
      if (category) {
        api = `${import.meta.env.VITE_API}/api/${
          import.meta.env.VITE_PATH
        }/products?category=${category}`;
      } else {
        this.isActive = "all";
      }
      this.$http
        .get(api)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          this.$swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
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
        this.getFavorites();
      }
    },
    addCart(id, qty = 1) {
      this.loadingStatus.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      const api = `${import.meta.env.VITE_API}/api/${
        import.meta.env.VITE_PATH
      }/cart`;
      this.$http
        .post(api, { data: cart })
        .then((response) => {
          this.$swal.fire({
            icon: "success",
            title: response.data.message,
          });
          this.getCarts();
          this.loadingStatus.loadingItem = "";
        })
        .catch((err) => {
          this.$swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
    ...mapActions(cartStroe, ['getCarts']),
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
  background-image: url("@/assets/img/products.png");
}
.products-wrap {
  padding: 40px 0;
}
.accordion-item:first-child .accordion-button::after {
  content: none;
}
.accordion-item .accordion-button::after {
  content: none;
}
.accordion-item .list-group .list-group-item {
  text-align: left;
}
.product-feature {
  position: relative;
  cursor: pointer;
  .like {
    position: absolute;
    right: 8px;
    top: 8px;
    z-index: 1;
    color: #f2f2f2;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      color: #54c3f1;
    }
  }
}
</style>
