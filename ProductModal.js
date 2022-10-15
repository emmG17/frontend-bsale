import createProduct from "./Product";

function createProductModal(product) {
  const productModal = document.createElement("div");
  productModal.classList.add("product-modal");
  const closeButton = document.createElement("span");
  closeButton.classList.add("material-symbols-rounded", "modal-close-btn");
  closeButton.innerText = "cancel";
  const productCard = createProduct(product);
  productModal.appendChild(productCard);
  productCard.appendChild(closeButton);
  productModal.addEventListener("click", (e) => {
    if (e.target !== productModal && e.target !== closeButton) return;
    productModal.remove();
  });
  return productModal;
}
export default createProductModal;
