import { Product } from '../types/product';

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`/data/products.json`);
  const products: Product[] = await response.json();
  return products.map((product) => {
    return {
      ...product,
      image: `https://fruitshoppe.firebaseapp.com/images/${product.image}`,
    };
  });
};
