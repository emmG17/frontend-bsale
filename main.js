import { format } from "prettier";
import createCategory from "./Components//Category";
import createProduct from "./Components/Product";
import createProductModal from "./Components/ProductModal";
import Store from "./Components/Store";

function showSpinners() {
  const spinners = document.querySelectorAll(".spinner-border");
  spinners.forEach((spinner) => {
    spinner.style.display = "block";
  });
}

function hideSpinners() {
  const spinners = document.querySelectorAll(".spinner-border");
  spinners.forEach((spinner) => {
    spinner.style.display = "none";
  });
}

async function refreshProductsByCategory(e) {
  const id = e.target.dataset.categoryId;
  const productList = document.getElementById("products");
  showSpinners();
  // Update the product list title
  updateResultsTitle(e.target.innerText);

  // If ID is -1 load ALL products, otherwise load products by category
  let products =
    id === "-1"
      ? await Store.getProducts()
      : await Store.getProductsByCategory(id);

  // Reset and update the product list
  hideSpinners();
  productList.textContent = "";
  populateProducts(productList, products);
}

async function refreshProductsFromSearch(e) {
  e.preventDefault();

  // Get the user query
  const formData = new FormData(e.target);
  const productQuery = formData.get("productQuery");

  // Update product grid title
  updateResultsTitle(`Resultados para: ${productQuery}`);
  showSpinners();

  // Search query in DB
  const products = await Store.getProductsByQuery(productQuery);

  hideSpinners();
  // Reset and populate product grid
  productList.textContent = "";
  populateProducts(productList, products);
}

function updateResultsTitle(message) {
  const currentResults = document.getElementById("current-results");
  currentResults.innerText = message;
}

function populateProducts(parent, products) {
  products.map((p) => {
    const product = createProduct(p);
    product.addEventListener("click", (e) => {
      const app = document.getElementById("app");
      app.appendChild(createProductModal(p));
    });
    parent.appendChild(product);
  });
}

showSpinners();
const categories = await Store.getCategories();
const products = await Store.getProducts();
hideSpinners();

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
searchForm.addEventListener("submit", refreshProductsFromSearch);
