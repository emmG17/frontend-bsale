import createCategory from "./Category";
import createProduct from "./Product";
let categorias = [
  {
    id: 1,
    name: "Licores",
  },
  {
    id: 1,
    name: "Alimentos",
  },
  {
    id: 1,
    name: "Medicinas",
  },
  {
    id: 1,
    name: "Articulos de limpieza",
  },
];

let product = {
  id: 1,
  name: "Pokemon",
  url_image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
  price: "$50",
  discount: "10%",
  category: 1,
};

const categoryList = document.getElementById("category-list");
categorias.map((li) => categoryList.appendChild(createCategory(li)));

const productList = document.getElementById("products");
productList.appendChild(createProduct(product));
