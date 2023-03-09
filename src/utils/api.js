import axios from 'axios';

const baseRequest = axios.create({
  baseURL: `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}`,
});

export const apiProductsAll = () => baseRequest.get('products/all');
export const apiProducts = () => baseRequest.get(`products`);
export const apiProductId = (id) => baseRequest.get(`product/${id}`);
