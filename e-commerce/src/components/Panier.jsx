import { useEffect } from "react";
import { useState } from "react";

const Panier = () => {
  const [cart, setCart] = useState([]);

  const deleteArticle = (id) => {
    let newStorage = JSON.parse(localStorage.getItem("cart"));
    newStorage = newStorage.filter((storage) => storage.id !== id);
    localStorage.setItem("cart", JSON.stringify(newStorage));
    setCart(newStorage);
  };

  const addArticle = (id) => {
    let newStorage = JSON.parse(localStorage.getItem("cart"));
    newStorage.forEach((storage) => {
      if (storage.id === id) {
        ++storage.quantity;
      }
    });
    localStorage.setItem("cart", JSON.stringify(newStorage));
    setCart(JSON.parse(localStorage.getItem("cart")));
  };

  const removeArticle = (id) => {
    let newStorage = JSON.parse(localStorage.getItem("cart"));
    let isDelete = false;
    newStorage.forEach((storage) => {
      if (storage.id === id) {
        if (storage.quantity === 1) {
          deleteArticle(id);
          isDelete = true;
        } else {
          --storage.quantity;
        }
      }
    });
    console.log(newStorage);
    if (isDelete === false) {
      localStorage.setItem("cart", JSON.stringify(newStorage));
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);
  if (cart.length === 0) {
    return (
      <div className="position-absolute top-50 start-50">
        <h5>Aucun article dans votre panier</h5>
      </div>
    );
  }
  return (
    <>
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {cart.map((c, index) => (
            <tr key={index}>
              <td>{c.name}</td>
              <td>{c.price} €</td>
              <td>{c.quantity}</td>
              <td width="450px">
                <span
                  className="btn btn-warning"
                  onClick={() => removeArticle(c.id)}
                >
                  -1
                </span>
                <span
                  className="btn btn-danger ms-2"
                  onClick={() => deleteArticle(c.id)}
                >
                  <i className="bi bi-trash"></i>
                </span>
                <span
                  className="btn btn-warning ms-2"
                  onClick={() => addArticle(c.id)}
                >
                  +1
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Panier;
