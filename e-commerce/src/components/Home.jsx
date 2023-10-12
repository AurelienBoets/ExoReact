import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [article, setArticle] = useState([]);
  const navigate = useNavigate();

  const addArticle = (obj) => {
    const articleList = JSON.parse(localStorage.getItem("cart"));
    if (!articleList) {
      obj.quantity = 1;
      localStorage.setItem("cart", JSON.stringify([obj]));
    } else if (articleList.find((a) => obj.id === a.id)) {
      articleList.forEach((element) => {
        if (element.id === obj.id) {
          ++element.quantity;
        }
      });
      localStorage.setItem("cart", JSON.stringify(articleList));
    } else {
      obj.quantity = 1;
      localStorage.setItem("cart", JSON.stringify([...articleList, obj]));
    }
  };

  useEffect(() => {
    axios
      .get(" http://localhost:5000/article")
      .then((resp) => {
        setArticle(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="row gap-4 mt-4">
      {article.map((a, index) => (
        <div className="card ms-4 col-2" key={index}>
          <div className="card-body ">
            <h5 className="card-title">{a.name}</h5>
            <hr />
            <p className="card-text">{a.description}</p>
            <span className="btn btn-primary" onClick={() => addArticle(a)}>
              {a.price} €
            </span>
            <span
              className="btn btn-info float-end"
              onClick={() => navigate(`/article/${a.id}`)}
              style={{ cursor: "pointer" }}
            >
              <i className="bi bi-eye"></i>Détails
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
