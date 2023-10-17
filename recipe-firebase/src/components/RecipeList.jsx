import { useEffect } from "react";
import axios from "axios";
import { RECIPE_URL } from "../firebaseConfig";
import { initRecipe, removeRecipe } from "./RecipeSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, setUser } from "./AuthSlice";
import { useNavigate } from "react-router-dom";

const RecipeList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipe.recipes);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    axios
      .get(RECIPE_URL + ".json")
      .then((resp) => {
        const tab = [];
        for (let r in resp.data) {
          resp.data[r].id = r;
          tab.push(resp.data[r]);
        }
        dispatch(initRecipe(tab));
      })
      .catch((e) => {
        console.log(e);
      });
    if (localStorage.getItem("token")) {
      dispatch(setUser(localStorage.getItem("token")));
    }
  }, []);

  const deleteRecipe = (id) => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      axios.delete(`${RECIPE_URL}/${id}.json?auth=${token}`);
      dispatch(removeRecipe(id));
    }
  };

  return (
    <div className="container mt-3 bg-dark text-light pb-2">
      <h1>Liste des recettes</h1>
      {localStorage.getItem("token") ? (
        <button className="btn btn-primary">Ajouter recette</button>
      ) : (
        ""
      )}
      {user ? (
        <button
          className="btn btn-warning float-end"
          onClick={() => dispatch(removeUser())}
        >
          Déconnexion
        </button>
      ) : (
        <button className="btn btn-primary" onClick={() => navigate("/auth")}>
          Connexion
        </button>
      )}
      <hr />
      {recipes.map((recipe, index) => (
        <div
          key={index}
          className=" p-3 pb-5 mb-2 mt-2 border border-info rounded"
        >
          <span className="h5">{recipe.title}</span>
          <span className="float-end">
            <span className="rounded border border-danger me-2 ps-1 pe-1">
              <i className="bi bi-fire"></i>
              {recipe.cookTime}
            </span>
            <span className="rounded border border-warning me-2 ps-1 pe-1">
              <i className="bi bi-easel3-fill"></i>
              {recipe.prepTime}
            </span>
          </span>
          <hr />
          <div className="row">
            <div className="col-4">
              Ingredients
              <hr />
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.name}</li>
                ))}
              </ul>
            </div>
            <div className="col-8">
              Instructions
              <hr />
              <span>{recipe.instructions}</span>
            </div>
          </div>

          <hr />
          <div className="float-end">
            <button className="btn btn-warning">
              <i className="bi bi-pencil-square"></i> Modifier
            </button>
            <button
              className="btn btn-danger ms-3 me-2"
              onClick={() => deleteRecipe(recipe.id)}
            >
              <i className="bi bi-trash"></i> Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RecipeList;
