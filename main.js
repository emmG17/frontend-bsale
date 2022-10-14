import createCategory from "./Category";
import createProduct from "./Product";

const API_URL = "http://reto-bsale-backend.herokuapp.com/";

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

async function refreshProductsByCategory(e) {
  const id = e.target.dataset.categoryId;
  const productList = document.getElementById("products");
  productList.textContent = "";
  let products =
    id === "-1" ? await getProducts() : await getProductsByCategory(id);
  populateProducts(productList, products);
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
