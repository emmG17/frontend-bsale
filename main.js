import createCategory from "./Category";
import createProduct from "./Product";

const API_URL = "http://reto-bsale-backend.herokuapp.com/";

async function getCategories() {
  let res = await fetch(API_URL + "categories");
  return res.json();
}

function toTitleCase(str) {
  // Split string at every space
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

let categoriesJSON = await getCategories();
let categories = categoriesJSON.categories.map((cat) => {
  return {
    id: cat.id,
    name: toTitleCase(cat.name),
  };
});

async function getProducts() {
  let res = await fetch(API_URL + "products");
  return res.json();
}

const productsJSON = await getProducts();
const products = productsJSON.products;
console.log(products);

const categoryList = document.getElementById("category-list");
categories.map((li) => categoryList.appendChild(createCategory(li)));

const productList = document.getElementById("products");
products.map((p) => {
  productList.appendChild(createProduct(p));
});
