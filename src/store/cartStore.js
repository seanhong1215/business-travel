import { defineStore } from "pinia";
import { apiGetCart, apiGetProducts } from "@/utils/api";

export default defineStore("cart", {
  state: () => ({
    cart: [],
    products: [],
  }),
  actions: {
    getCarts() {
      this.isLoading = true;
      apiGetCart()
        .then((res) => {
          this.cart = res.data.data;
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
    getProducts() {
      apiGetProducts().then((res) => {
        this.products = res.data.products;
        this.isLoading = false;
      });
    },
  },
  getters: {
  
  }
});
