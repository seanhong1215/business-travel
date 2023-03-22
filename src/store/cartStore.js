import { defineStore } from "pinia";
import {
  apiGetCart,
  apiAddToCart,
  apiDeleteAllCarts,
  apiRemoveCartItem,
  apiUpdateCart,
} from "@/utils/api";
import Swal from "sweetalert2";

export default defineStore("cart", {
  state: () => ({
    cart: [],
    isLoading: false,
    length: 0,
    products: [],
    loadingStatus: {
      loadingItem: "",
    },
  }),
  actions: {
    getCart() {
      this.isLoading = true;
      apiGetCart()
        .then((res) => {
          this.isLoading = false;
          this.cart = res.data.data;
          this.length = this.cart.carts.length;
        })
        .catch((err) => {
          this.isLoading = false;
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
    addToCart(id, qty = 1) {
      const cart = {
        product_id: id,
        qty,
      };
      apiAddToCart({ data: cart })
        .then((response) => {
          Swal.fire({
            icon: "success",
            title: response.data.message,
          });
          this.getCart();
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
    delProduct(id) {
      this.isLoading = true;
      apiRemoveCartItem(id)
        .then(() => {
          this.isLoading = false;
          Swal.fire({
            icon: "success",
            title: "刪除產品成功",
          });
          this.getCart();
        })
        .catch((err) => {
          this.isLoading = false;
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
    deleteProducts() {
      this.isLoading = true;
      apiDeleteAllCarts()
        .then(() => {
          this.isLoading = false;
          Swal.fire({
            icon: "success",
            title: "刪除產品成功",
          });
          this.getCart();
        })
        .catch((err) => {
          this.isLoading = false;
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
    selectCartQty(id, event) {
      const qty = event.target.value * 1;
      const cart = {
        product_id: id,
        qty: qty,
      };
      apiUpdateCart(id, { data: cart }).then(() => {
        this.isLoading = false;
        Swal.fire({
          icon: "success",
          title: "更新數量",
        });
        this.getCart();
      });
    },
  },
  getters: {},
});
