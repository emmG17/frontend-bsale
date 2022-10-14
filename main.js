import createCategory from "./Category";
import createProduct from "./Product";

const API_URL = "http://reto-bsale-backend.herokuapp.com/";

// Request all categories
async function getCategories() {
  let res = await fetch(API_URL + "categories");
  return res.json();
}

// Request all products
async function getProducts() {
  let res = await fetch(API_URL + "products");
  return res.json();
}

let categoriesJSON = await getCategories();
let categories = categoriesJSON.categories;

const productsJSON = await getProducts();
const products = productsJSON.products;

// Put all categories inside the sidebar
const categoryList = document.getElementById("category-list");
categories.map((li) => categoryList.appendChild(createCategory(li)));

// Place all products inside the product grid
const productList = document.getElementById("products");
products.map((p) => {
  productList.appendChild(createProduct(p));
});
