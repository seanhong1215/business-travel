import axios from 'axios';

const baseRequest = axios.create({
  baseURL: `${import.meta.env.VITE_API/api/import.meta.env.VITE_PATH}`,
});

export const apiData = () => baseRequest.get('products/all');
