import { useProductContext } from "../contexts/productContext";

const ProductContainer: React.FC = () => {
  const { theme, products, toggleTheme } = useProductContext();

  return (
    <main className={theme}>
      <h1>Product List</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default ProductContainer;
