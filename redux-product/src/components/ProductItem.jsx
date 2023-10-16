import { useDispatch } from "react-redux";
import { removeProduct } from "./ProductSlice";
import { useNavigate } from "react-router-dom";

const ProductItem = (props) => {
  const product = props.product;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <>
      <tr>
        <td>{product.name}</td>
        <td>{product.price} €</td>
        <td>
          <button
            className="btn btn-success me-1"
            onClick={() => navigate(`/product/form?id=${product.id}`)}
          >
            Modifier
          </button>
          <button
            className="btn btn-danger ms-1"
            onClick={() => handleRemove(product.id)}
          >
            Supprimer
          </button>
        </td>
      </tr>
    </>
  );
};

export default ProductItem;
