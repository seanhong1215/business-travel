<template>
    <div>
    <section class="banner">
    <div class="banner-content-wrap">
      <h3 class="banner-title">收藏列表</h3>
    </div>
  </section>
  <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
           <img src="@/assets/img/favoriteCard-01.png" alt="">
          </div>
          <div class="col-md-4">
           <img src="@/assets/img/favoriteCard-02.png" alt="">
        </div>
        <div class="col-md-4">
           <img src="@/assets/img/favoriteCard-03.png" alt="">
        </div>
          </div>
  </div>
  </div>
  </template>
  
  <script>
  export default {
    name: "FavoriteList",
    data() {
      return {};
    },
    methods: {
   
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .banner {
  background-image: url("@/assets/img/favorite.png");
}
  
  </style>
  