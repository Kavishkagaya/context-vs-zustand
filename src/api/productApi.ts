const baseUrl = "http://localhost:3000/api";

export const getProducts = async () => {
  const products = await fetch(`${baseUrl}/products`).then(res => {
    return res.json();
  });
  return products;
};

export const updateProductStock = async (id: number, stock: number) => {
  const response = await fetch(`${baseUrl}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ stock }),
  });
  const updatedProduct = await response.json();
  return updatedProduct;
};
