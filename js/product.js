const loadCategories = () => {
  url = "https://fakestoreapi.com/products/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCatogories(data));
};
loadCategories();

const displayCatogories = (categories) => {
  const categoryContainer = document.getElementById("category-container");

  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.textContent = category;
    btn.className =
      "btn  rounded-md px-4 py-2  text-purple-600 bg-slate-50 border-purple-600";

    btn.addEventListener("click", () => {
      (categoryContainer.querySelectorAll("button").forEach((b) => {
        b.classList.remove("text-black", "bg-purple-500");
        b.classList.add("bg-state-50", "text-purple-600");
      }),
        btn.classList.add("text-black", "bg-purple-500"));
      btn.classList.remove("bg-state-50", "text-purple-600");
      loadCategoryCard(category);
    });

    categoryContainer.appendChild(btn);
  });
};

const loadCard = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => loadContainer(json));
};
// loadCard();

const loadContainer = (products) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  products.forEach((product) => {
    const allItem = document.createElement("div");

    allItem.innerHTML = `
 <div class="card bg-gray-50 w-full shadow-lg rounded-xl">
  <figure class="flex justify-center p-6">
    <img
      class="w-34 h-42 md:w-38 md:h-46 object-cover bg-gray-200 rounded-lg shadow-md p-4"
      src="${product.image}"
      alt="${product.title}"
    />
  </figure>
  <div class="card-body">
    <div class="flex justify-between">
      <div>
      <p class="badge text-[11px] bg-purple-500 text-white">${product.category}</p>
      </div>
   <div>
      <p class="card-title text-[14px]">
       <i class="fa-solid fa-star"></i> ${product.rating.rate}
        (${product.rating.count})
        
      </p>
   </div>
    </div>
    <h5 class="text-gray-700 text-[14px]">${product.description.slice(0, 46)}..</h5>
    <h4 class="text-gray-800 font-semibold text-[16px]">$${product.price}</h4>
    <div class="card-actions justify-between flex">
     <button class="px-4 py-2 text-[12px] bg-purple-500 text-white shadow-md rounded-md "><i class="fa-solid fa-eye"></i>Details</button>
     <button class="text-[12px] px-4 py-2 bg-purple-500 text-white shadow-md rounded-md "><i class="fa-solid fa-cart-arrow-down"></i>Add</button>
    </div>
  </div>
</div>
    `;
    cardContainer.appendChild(allItem);
  });
};

const loadCategoryCard = (category) => {
  fetch(
    `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`,
  )
    .then((res) => res.json())
    .then((data) => loadContainer(data));
};
