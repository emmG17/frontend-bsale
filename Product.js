import TitleCase from "./TitleCase";

function addDiscount(discount) {
  const productDiscount = document.createElement("p");
  productDiscount.classList.add("discount-rate");
  productDiscount.innerText = `-${discount}%`;
  return productDiscount;
}

function createProductInfo(product) {
  const productName = document.createElement("h5");
  productName.classList.add("card-title");
  productName.innerText = TitleCase(product.name);

  const productPrice = document.createElement("p");
  productPrice.innerText = `$${product.price.toFixed(2)}`;

  const productInfo = document.createElement("div");
  productInfo.classList.add("card-body");

  productInfo.appendChild(productName);
  productInfo.appendChild(productPrice);

  if (product.discount !== 0) {
    // Add a discount badge if the product has it
    productInfo.appendChild(addDiscount(product.discount));

    // Make the original price smaller and with line-through
    productPrice.classList.add("discounted");

    // Add the new discounted price
    const newPrice = document.createElement("p");
    let discountedPrice = product.price * (1 - product.discount / 100);
    newPrice.innerText = `$${discountedPrice.toFixed(2)}`;
    newPrice.classList.add("new-price");
    productInfo.appendChild(newPrice);
  }
  return productInfo;
}

function createProductImg(product) {
  const productImage = document.createElement("img");
  productImage.classList.add("card-img-top");
  // Use default image if no there's no product image url available
  productImage.src = !product.url_image
    ? "/no-pictures.png"
    : product.url_image;
  productImage.alt = product.name;
  return productImage;
}

const createProduct = (product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("card");
  productCard.appendChild(createProductImg(product));
  productCard.appendChild(createProductInfo(product));

  const productContainer = document.createElement("div");
  productContainer.classList.add("product", "col-12", "col-sm-6", "col-lg-3");
  productContainer.appendChild(productCard);

  return productContainer;
};

export default createProduct;
