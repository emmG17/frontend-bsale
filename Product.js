function createProductInfo(product) {
  const productName = document.createElement("h5");
  productName.classList.add("card-title");
  productName.innerText = product.name;

  const productPrice = document.createElement("p");
  productPrice.innerText = product.price;

  const productDiscount = document.createElement("p");
  productDiscount.innerText = product.discount;

  const productInfo = document.createElement("div");
  productInfo.classList.add("card-body");

  productInfo.appendChild(productName);
  productInfo.appendChild(productPrice);
  productInfo.appendChild(productDiscount);

  return productInfo;
}

function createProductImg(product) {
  const productImage = document.createElement("img");
  productImage.classList.add("card-img-top");
  productImage.src = product.url_image;
  productImage.alt = product.name;
  return productImage;
}

const createProduct = (product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("card");
  productCard.appendChild(createProductImg(product));
  productCard.appendChild(createProductInfo(product));

  const productContainer = document.createElement("div");
  productContainer.classList.add("product", "col-3");
  productContainer.appendChild(productCard);

  return productContainer;
};

export default createProduct;
