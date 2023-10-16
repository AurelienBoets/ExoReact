import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "./ProductSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

const Form = () => {
  const name = useRef();
  const price = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const product = useSelector((state) => state.products.products);
  let id = null;
  let nameValue = "";
  let priceValue = "";
  let productValue = null;
  if (searchParam.get("id")) {
    id = parseInt(searchParam.get("id"));
    productValue = product.find((p) => p.id === id);
    priceValue = productValue.price;
    nameValue = productValue.name;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      dispatch(
        addProduct({
          name: name.current.value,
          price: price.current.value,
        })
      );
    } else {
      dispatch(
        updateProduct({
          id: id,
          name: name.current.value,
          price: price.current.value,
        })
      );
    }
    navigate("/");
  };
  return (
    <div className="bg-light container rounded mt-5 p-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nom
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            ref={name}
            defaultValue={nameValue}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Prix
          </label>
          <input
            type="text"
            className="form-control"
            name="price"
            ref={price}
            defaultValue={priceValue}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Valider
        </button>
      </form>
    </div>
  );
};

export default Form;
