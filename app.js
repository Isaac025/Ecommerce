const productApi = "https://dummyjson.com/products";
const innerProduct = document.querySelector(".inner-product");

async function getProduct(url) {
  const res = await fetch(productApi);
  const data = await res.json();
  displayProduct(data.products);
  //   console.log(data.products);
}

getProduct(productApi);

function displayProduct(products) {
  innerProduct.innerHTML = "";
  products.forEach((product) => {
    const { images, title, price, stock } = product;
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
    <img src='${images[0]}' alt='${title}'>
    <div>
    <h3>${title}</h3>
    <p class="price">$${price}</p>
    <p class="stock">${stock} items left</p>
    </div>
    `;

    innerProduct.appendChild(productDiv);
  });
}
