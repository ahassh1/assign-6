const loadCategories = () => {
  url = "https://fakestoreapi.com/products/categories";
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayCatogories(json));
};
loadCategories();

const displayCatogories = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";
  const allCategories = ["All", ...categories];

  allCategories.forEach((category) => {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
       <button class="btn bg-purple-500 rounded-md px-4 py-2 text-white ">${category}</button>
       `;
    categoryContainer.appendChild(btnDiv);
  });
};
