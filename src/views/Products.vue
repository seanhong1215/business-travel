<template>
  <div>
    <section class="banner">
      <div class="banner-content-wrap">
        <h3 class="banner-title">旅遊規劃</h3>
      </div>
    </section>
    <div class="container">
      <div class="products-wrap">
        <div class="row g-5">
          <div class="col-md-4">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    全部
                  </button>
                </h2>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    聖托里尼島
                  </button>
                </h2>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                  藍湖溫泉
                  </button>
                </h2>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                  京都美山町
                  </button>
                </h2>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                  馬爾地夫
                  </button>
                </h2>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                  葡萄牙
                  </button>
                </h2>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                  紐約
                  </button>
                </h2>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <template v-for="item in products" :key="item.id">
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      :src="item.imageUrl"
                      class="img-fluid rounded-start h-100"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body d-flex flex-column h-100">
                      <h5 class="card-title">{{ item.title }}</h5>
                      <p class="card-text">
                        {{ item.description }}
                      </p>
                      <p class="card-text d-flex justify-content-between mt-auto">
                        <small class="text-muted">{{ item.title }}</small>
                        <small class="text-muted">NT${{ item.price }}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiProducts } from "@/utils/api.js";

export default {
  name: "Products",
  data() {
    return {products: ""};
  },
  methods: {},
  mounted() {
    apiProducts().then((res) => {
      this.products = res.data.products;
      console.log(this.products);
    });
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
</style>
