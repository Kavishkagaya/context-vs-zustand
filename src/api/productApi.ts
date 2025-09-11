const baseUrl = "http://localhost:3000/api/";

export const getProducts = async () => {
  try{
    const products = await fetch(`${baseUrl}/products`).then(res => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    });
    return products;
  }
  catch(error){
    console.error("Error loading products:", error);
    return {};
  }  
};

export const updateProductStock = async (id: number, stock: number) => {
  try{
    const response = await fetch(`${baseUrl}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ stock }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const updatedProduct = await response.json();
    return updatedProduct;
  }
  catch(error){
    console.error("Error updating product stock:", error);
    return null;
  }  
};
