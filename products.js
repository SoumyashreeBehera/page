let productsArr = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81vg24zfx0L._UL1500_.jpg",
    name: "necklace",
    brand: "amazon",
    price: "6000",
  },
  {
    img: "https://rukminim1.flixcart.com/image/332/398/jvgzl3k0/jewellery-set/8/6/9/cb73381-d2-sukkhi-original-imaf7yphyhcuc7sf.jpeg?q=50",
    name: "necklace",
    brand: "flipkart",
    price: "6900",
  },
  {
    img: "https://rukminim1.flixcart.com/image/714/857/jwqpocw0/jewellery-set/v/2/p/cjds0101-candy-jewellers-original-imafh24wapks6v9e.jpeg?q=50",
    name: "necklace",
    brand: "amazon",
    price: "6070",
  },
  {
    img: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-03/12/full/1615493455-9518.jpg",
    name: "necklace",
    brand: "ebay",
    price: "9000",
  },
  {
    img: "https://5.imimg.com/data5/JU/BP/FJ/ANDROID-3457246/product-jpeg-500x500.jpg",
    name: "necklace",
    brand: "flipkart",
    price: "7800",
  },
  {
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-824,/pub/media/catalog/product/n/y/nyfpeora00152.jpg?rnd=20200526195200",
    name: "necklace",
    brand: "ajio",
    price: "10500",
  },
  {
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-824,/pub/media/catalog/product/p/f/pf04n144_1.jpg?rnd=20200526195200",
    name: "necklace",
    brand: "flipkart",
    price: "5000",
  },
  {
    img: "https://www.hazoorilaljewellers.com/wp-content/uploads/2020/06/26-min.jpg",
    name: "necklace",
    brand: "ajio",
    price: "12000",
  },
];
let jewellery = localStorage.setItem("jewellery", JSON.stringify(productsArr));

let productsDiv = document.getElementById("productsDiv");
productsArr.forEach((el) => {
  let products = document.createElement("div");
  let img = document.createElement("img");
  img.src = el.img;
  let pName = document.createElement("p");
  pName.innerHTML = el.name;
  let pBrand = document.createElement("p");
  pBrand.innerHTML = el.brand;
  let pPrice = document.createElement("p");
  pPrice.innerHTML = el.price;
  let button = document.createElement("button");
  button.textContent = "Add To Cart";
  button.style.display = "block";
  button.addEventListener("click", function () {
    addToCart(el);
  });
  products.append(img, pName, pBrand, pPrice, button);
  productsDiv.append(products);
});

function addToCart(el) {
  let arr;
  arr = localStorage.getItem("jwelleryCart");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("jwelleryCart"));
  }
  let isPresent = false;
  arr.forEach((i) => {
    if (i.img == el.img) {
      isPresent = true;
    }
  });
  if (isPresent) {
    alert("product is already exist in your cart");
  } else {
    arr.push(el);
  }
  localStorage.setItem("jwelleryCart", JSON.stringify(arr));
}

function showCart() {
  window.location.href = "cart.html";
}
function sortLH() {
  productsDiv.innerHTML = "";
  let arr = JSON.parse(localStorage.getItem("jewellery"));
  arr.sort((a, b) => a.price - b.price);
  arr.forEach((el) => {
    let products = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;
    let pName = document.createElement("p");
    pName.innerHTML = el.name;
    let pBrand = document.createElement("p");
    pBrand.innerHTML = el.brand;
    let pPrice = document.createElement("p");
    pPrice.innerHTML = el.price;
    let button = document.createElement("button");
    button.textContent = "Add To Cart";
    button.style.display = "block";
    button.addEventListener("click", function () {
      addToCart(el);
    });
    products.append(img, pName, pBrand, pPrice, button);
    productsDiv.append(products);
  });
}
function sortHL() {
  productsDiv.innerHTML = "";
  let arr = JSON.parse(localStorage.getItem("jewellery"));
  arr.sort((a, b) => b.price - a.price);
  arr.forEach((el) => {
    let products = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;
    let pName = document.createElement("p");
    pName.innerHTML = el.name;
    let pBrand = document.createElement("p");
    pBrand.innerHTML = el.brand;
    let pPrice = document.createElement("p");
    pPrice.innerHTML = el.price;
    let button = document.createElement("button");
    button.textContent = "Add To Cart";
    button.style.display = "block";
    button.addEventListener("click", function () {
      addToCart(el);
    });
    products.append(img, pName, pBrand, pPrice, button);
    productsDiv.append(products);
  });
}
