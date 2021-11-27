// Get all products from api
export const getProducts = async (): Promise<ProductItem[]> => {
  const products = await (
    await fetch("https://fakestoreapi.com/products")
  ).json();
  return products;
};
