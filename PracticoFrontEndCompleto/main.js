const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCar = document.querySelector(".navbar-shopping-cart");
const productDetailCar = document.querySelector(".product-detail-car");
const myOrderContent = document.querySelector(".my-order-content");
const shoppingCarDiv = document.querySelector(".navbar-shopping-cart div");
const containerCards = document.querySelector(".cards-container");
const objetos = [
  {
    id: 1,
    nameProduct: "Cosmetico MM",
    image:
      "https://images.pexels.com/photos/279480/pexels-photo-279480.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cost: 200,
    descripcion: "Cosmetico muy bueno.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    nameProduct: "Reloj Michael Kors",
    image:
      "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cost: 1000,
    descripcion: "Reloj muy bueno.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    nameProduct: "Audifonos Bose",
    image:
      "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=300",
    cost: 500,
    descripcion: "Audifonos muy bueno.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 4,
    nameProduct: "Encendedor Fino",
    image:
      "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=300",
    cost: "100",
    descripcion: "Encendedor muy bueno.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
const productList = [];
const amount = 100;
const mainContainer = document.querySelector(".main-container");
const productDetail = document.querySelector(".product-detail");




createArrayObjects();
createProductContentDivs();
updateCar();
menuEmail.addEventListener("click", toggleDesktopMenu);
menu.addEventListener("click", toggleMobileMenu);
shoppingCar.addEventListener("click", toggleShoppingCar);
document.addEventListener('DOMContentLoaded', function() {
  const descriptions = document.querySelectorAll('.description');
  
  
  
  descriptions.forEach(function(description) {
    description.addEventListener('click', function() {
      let idProduct = description.closest('.product-card').getAttribute('idproduct');
      createproductDetail(parseInt(idProduct));
      const detailClose = document.querySelector('.product-detail-close');
      detailClose.addEventListener('click', function () {
        productDetail.classList.add('inactive');
      });
    });
  });

});



function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  addClassBlurredMainContainer();
  if (!productDetailCar.classList.contains("inactive")) {
    productDetailCar.classList.toggle("inactive");
  }
  
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  addClassBlurredMainContainer();
  if (!productDetailCar.classList.contains("inactive")) {
    productDetailCar.classList.toggle("inactive");
  }

}

function toggleShoppingCar() {
  productDetailCar.classList.toggle("inactive");
  addClassBlurredMainContainer();
  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.toggle("inactive");
  }
  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.toggle("inactive");
  }
}

function addClassBlurredMainContainer() {
  if(!desktopMenu.classList.contains("inactive") || !mobileMenu.classList.contains("inactive") || !productDetailCar.classList.contains("inactive")) {
    mainContainer.classList.add("blurred");
  }
  else {
    mainContainer.classList.remove("blurred");
  }
}

function updateCar() {
  shoppingCarDiv.innerHTML =
    myOrderContent.querySelectorAll(".shopping-cart").length;
}

function createArrayObjects() {
  for (var i = 0; i < amount; i++) {
    let numeroObjeto = Math.floor(Math.random() * 4);
    productList.push(objetos[numeroObjeto]);
  }
}

function createProductContentDivs() {
    let divs = '';
    productList.forEach(element => {
        divs += `<div class="product-card" idproduct="${element.id}">
        <img
          class="description"
          src="${element.image}"
          alt="imagen.producto"
        />
        <div class="product-info-car">
          <div class="description">
            <p>$${element.cost}</p>
            <p>${element.nameProduct}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="carrito" />
          </figure>
        </div>
        </div>`;
    });
    containerCards.innerHTML = divs;
}

function createproductDetail(idProduct) {
  let objeto = objetos.find(function(obj) {
    return obj.id === idProduct;
  });
  let element = `<div class="product-detail-close">
  <img src="./icons/icon_close.png" alt="close" />
  </div>
  <img
  src="${objeto.image}"
  alt="imagen-product"
  />
  <div class="product-info">
  <p>${objeto.cost}</p>
  <p>${objeto.nameProduct}</p>
  <p>
    ${objeto.descripcion}
  </p>
  <button class="primary-button add-to-cart-button">
    <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />Add to cart
  </button>
  </div>`;
  productDetail.innerHTML = element;
  productDetail.classList.remove('inactive');
  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.toggle("inactive");
    addClassBlurredMainContainer();
  }
  if (!productDetailCar.classList.contains("inactive")) {
    productDetailCar.classList.toggle("inactive");
    addClassBlurredMainContainer();
  }
}