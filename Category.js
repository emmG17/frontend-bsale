const createCategory = (category) => {
  const categoryItem = document.createElement("button");
  categoryItem.innerText = category.name;
  categoryItem.classList.add("list-group-item", "list-group-item-action");
  categoryItem.dataset.categoryId = category.id;
  return categoryItem;
};

export default createCategory;
