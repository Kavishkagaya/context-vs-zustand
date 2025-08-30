import products from "./data.json"
import type { Product } from "../types";

const getProducts = () => {
  // id value pair
  return products.products.reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
  }, {} as Record<number, Product>);
};

export default getProducts;
