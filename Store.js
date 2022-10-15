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

// Request all products belonging to a given category
async function getProductsByCategory(id) {
  let res = await fetch(`${API_URL}products/category/${id}`);
  let products = await res.json();
  return products.products;
}

// Request all products contanining the query in their names
async function getProductsByQuery(product) {
  let res = await fetch(`${API_URL}products/${product}`);
  let products = await res.json();
  return products.products;
}

export default {
  getCategories,
  getProducts,
  getProductsByCategory,
  getProductsByQuery,
};
