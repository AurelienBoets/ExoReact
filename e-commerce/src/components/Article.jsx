import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Article = () => {
  const [article, setArticle] = useState([]);
  const param = useParams();
  const id = param.id;
  const addArticle = () => {
    const articleList = localStorage.getItem("cart");
    if (!articleList) {
      localStorage.setItem("cart", JSON.stringify([article]));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...JSON.parse(articleList), article])
      );
    }
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/article/${id}`)
      .then((resp) => {
        setArticle(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="bg-light container rounded mt-5 p-3">
      <h5 className="ms-2">{article.name}</h5>
      <hr />

      <p>
        <strong>Description : </strong>
        {article.description}
      </p>
      <p>
        <strong>Prix : </strong>
        {article.price} €
      </p>
      <button className="btn btn-primary" onClick={() => addArticle()}>
        Ajouter au Panier
      </button>
    </div>
  );
};

export default Article;
