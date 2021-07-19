let cartButtons = document.getElementById("inputButtons");
let totalPrice = document.createElement("p");
let totalItem = document.createElement("p");
let buy = document.createElement("button");
buy.textContent = "Check Out";
buy.addEventListener("click", function () {
  window.location.href = "checkOut.html";
});
cartButtons.append(totalItem, totalPrice, buy);
let allProduct = document.getElementById("productsDiv");
function showProduct() {
  let data = localStorage.getItem("jwelleryCart");
  if (data == null) {
    totalPrice.innerHTML = "0";
    totalItem.innerHTML = "0";
  } else {
    data = JSON.parse(localStorage.getItem("jwelleryCart"));
  }
  data.forEach((el) => showEl(el));
}
function showEl(el) {
  let products = document.createElement("div");
  let img = document.createElement("img");
  img.src = el.img;
  let pName = document.createElement("p");
  pName.innerHTML = el.name;
  let pBrand = document.createElement("p");
  pBrand.innerHTML = el.brand;
  let pPrice = document.createElement("p");
  pPrice.innerHTML = el.price;
  products.append(img, pName, pBrand, pPrice);
  productsDiv.append(products);
  totalPrice.innerHTML = Number(totalPrice.innerHTML) + Number(el.price);
  totalItem.innerHTML = Number(totalItem.innerHTML) + 1;
}
showProduct();
function apply() {
  let input = document.querySelector("input").value;
  if (input == "masai30") {
    totalPrice.innerHTML = Number(totalPrice.innerHTML) * 0.7;
  }
}
