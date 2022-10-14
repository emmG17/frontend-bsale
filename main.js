import { format } from "prettier";
import createCategory from "./Category";
import createProduct from "./Product";

const API_URL = "http://localhost:3000/"; //"http://reto-bsale-backend.herokuapp.com/";

// Request all categories
async function getCategories() {
  let res = await fetch(API_URL + "categories");
  let categories = await res.json();
  return categories.categories;
}

// Request all products
async function getProducts() {
  let res = await fetch(API_URL + "products");
  let products = await res.json();
  return products.products;
}

async function getProductsByCategory(id) {
  let res = await fetch(`${API_URL}products/category/${id}`);
  let products = await res.json();
  return products.products;
}

async function getProductsByQuery(product) {
  let res = await fetch(`${API_URL}products/${product}`);
  let products = await res.json();
  return products.products;
}

async function refreshProductsByCategory(e) {
  const id = e.target.dataset.categoryId;
  const productList = document.getElementById("products");
  productList.textContent = "";
  let products =
    id === "-1" ? await getProducts() : await getProductsByCategory(id);
  populateProducts(productList, products);
}

async function refreshProductsFromSearch(e) {
  e.preventDefault();
}

function populateProducts(parent, products) {
  products.map((p) => {
    const product = createProduct(p);
    parent.appendChild(product);
  });
}

const categories = await getCategories();
const products = await getProducts();

// Put all categories inside the sidebar
const categoryList = document.getElementById("category-list");
// Create a category for ALL products
const allProducts = createCategory({ id: -1, name: "todos" });
allProducts.addEventListener("click", refreshProductsByCategory);
categoryList.appendChild(allProducts);

categories.map((li) => {
  const category = createCategory(li);
  category.addEventListener("click", refreshProductsByCategory);
  categoryList.appendChild(category);
});

// Place all products inside the product grid
const productList = document.getElementById("products");
populateProducts(productList, products);

const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  // Get the user query
  const formData = new FormData(e.target);
  const productQuery = formData.get("productQuery");

  // Search query in DB
  const products = await getProductsByQuery(productQuery);

  // Populate product grid
  productList.textContent = "";
  populateProducts(productList, products);
});
