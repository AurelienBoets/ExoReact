import { useEffect } from "react";
import { useState } from "react";

const Panier = () => {
  const [cart, setCart] = useState([]);
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
              <td></td>
              <td width="450px">
                <span className="btn btn-warning">-1</span>
                <span className="btn btn-danger ms-2">
                  <i className="bi bi-trash"></i>
                </span>
                <span className="btn btn-warning ms-2">+1</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Panier;
