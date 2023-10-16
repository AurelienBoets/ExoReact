import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  if (products.length === 0) {
    return (
      <div>
        <h1>Aucun produits</h1>
      </div>
    );
  }
  return (
    <table className="table table-striped text-center">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>

          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
