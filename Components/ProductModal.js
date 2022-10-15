import createProduct from "./Product";

function createProductModal(product) {
  // Modal container
  const productModal = document.createElement("div");
  productModal.classList.add("product-modal");

  // Modal close button
  const closeButton = document.createElement("span");
  closeButton.classList.add("material-symbols-rounded", "modal-close-btn");
  closeButton.innerText = "cancel";

  // Create a new product card
  const productCard = createProduct(product);
  productModal.appendChild(productCard);
  productCard.appendChild(closeButton);

  // Allow closing the modal
  productModal.addEventListener("click", (e) => {
    // Only close the modal if clicking outside the card or clicking the close button
    if (e.target !== productModal && e.target !== closeButton) return;
    productModal.remove();
  });
  return productModal;
}
export default createProductModal;
