import createCategory from "./Category";
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

const categoryList = document.getElementById("category-list");
categorias.map((li) => categoryList.appendChild(createCategory(li)));
