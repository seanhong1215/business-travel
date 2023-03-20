import { defineStore } from 'pinia'
import { apiGetProducts, apiGetProduct } from '@/utils/api'
import axios from 'axios';
import Swal from 'sweetalert2';

export default defineStore('productsStroe', {
  state: () => ({
    products: [],
    product:{},
    pagination: {},
    isLoading: false,
    isActive: "",
    currentPage: 1,
    category: "",
    favorite: JSON.parse(localStorage.getItem("favorite")) || [],
   
  }),
  actions: {  
    getProducts(){
      this.isLoading = true
      apiGetProducts()
        .then(res=> {
          this.isLoading = false
          this.products = res.data.products
        })
        .catch((err) => {
          this.isLoading = false;
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
    getProductId(id){
      this.isLoading = true
      apiGetProduct(id)
        .then((res) => {
          this.isLoading = false;
          this.product = res.data.product;
        })
        .catch((err) => {
          this.isLoading = false;
          Swal.fire({
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
        Swal.fire({
          icon: "success",
          title: "已加入收藏",
        });
      } else {
        this.favorite.splice(favoriteIndex, 1);
        Swal.fire({
          icon: "success",
          title: "已移除收藏",
        });
      }
    },
    getProductSort(page = 1, category) {
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
      axios
        .get(api)
        .then((res) => {
          this.isLoading = false;
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          this.isLoading = false;
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
  },
  getters: {
  }
})
