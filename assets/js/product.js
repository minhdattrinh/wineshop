window.onscroll = function () {
  const header_nav = document.getElementById("header_top");
  const header_link = document.querySelectorAll("#link");
  const menu_nav = document.querySelector("#nav-menu");
  if (
    document.documentElement.scrollTop > 200 ||
    document.body.scrollTop > 200
  ) {
    header_nav.classList.add("scroll_nav");
    header_link[0].classList.add("header_link-color");
    header_link[1].classList.add("header_link-color");
    header_link[2].classList.remove("active");
    header_link[2].classList.add("active-i");
    header_link[3].classList.add("header_link-color");
    header_link[4].classList.add("header_link-color");
    menu_nav.classList.add("menu_nav-color");
  } else {
    header_nav.classList.remove("scroll_nav");
    header_link[0].classList.remove("header_link-color");
    header_link[1].classList.remove("header_link-color");
    header_link[2].classList.add("active");
    header_link[2].classList.remove("active-i");
    header_link[3].classList.remove("header_link-color");
    header_link[4].classList.remove("header_link-color");
    menu_nav.classList.remove("menu_nav-color");
  }
};

// fix ip
document.addEventListener("touchstart", function () {}, false);

// add, minus quantity

function add() {
  const t = document.getElementById("quantity").value;
  document.getElementById("quantity").value = parseInt(t) + 1;
}

function minus() {
  const t = document.getElementById("quantity").value;
  if (parseInt(t) > 1)
    document.getElementById("quantity").value = parseInt(t) - 1;
}
// remove cart
const remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  const button = remove_cart[i];
  button.addEventListener("click", function () {
    const button_remove = event.target;
    button_remove.parentElement.parentElement.parentElement.remove();
  });
}

// update cart
function updateCart() {
  const cart_item = document.getElementsByClassName("cart-items")[0];
  const cart_rows = cart_item.getElementsByClassName("cart-row");

  const total = 0;
  for (var i = 0; i < cart_rows.length; i++) {
    const cart_row = cart_rows[i];
    const price_item = cart_row.getElementsByClassName("cart-price")[0];
    const quantity_item = cart_row.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    const price = parseFloat(price_item.innerText); // chuyển một chuổi string sang number để tính tổng tiền.
    const quantity = quantity_item.value; // lấy giá trị trong thẻ input
    const total = price * quantity;
    document.getElementsByClassName("cart-total-price")[i].innerText ="$" + total;
  }
}
// thay đổi số lượng sản phẩm
const quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
  const input = quantity_input[i];
  input.addEventListener("change", function (event) {
    const input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updateCart();
  });
}

// Thêm vào giỏ
// const add_cart = document.getElementsByClassName("btn-cart");
// console.log(add_cart)
// for (var i = 0; i < add_cart.length; i++) {
//   const add = add_cart[i];
//   add.addEventListener("click", function (event) {

//    const button = event.target;
//    const product = button.parentElement.parentElement;
//    const img = product.parentElement.parentElement.getElementsByClassName("content_production-img")[0].src

//    const title = product.getElementsByClassName("content_production-text")[0].innerText
//    const price = product.getElementsByClassName("content_production-text-price")[0].innerText
//     addItemToCart(title, price, img)
//     // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
//     // modal.style.display = "block";

//     updatecart()
//     console.log(addItemToCart)
//   })
// }

// function addItemToCart(title, price, img) {
//   const cartRow = document.createElement('div')
//   cartRow.classList.add('cart-row')
//   const cartItems = document.getElementsByClassName('cart-items')[0]
//   const cart_title = cartItems.getElementsByClassName('cart-item-title')
//   // Nếu title của sản phẩm bằng với title mà bạn thêm vao giỏ hàng thì sẽ thông cho user.
//   for (var i = 0; i < cart_title.length; i++) {
//     if (cart_title[i].innerText == title) {
//       alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
//       return
//     }
//   }

//   const cartRowContents = `
//   <div class="cart-item cart-column">
//       <img class="cart-item-image" src="${img}" width="100" height="100">
//       <span class="cart-item-title">${title}</span>
//   </div>
//   <span class="cart-price cart-column">${price}</span>
//   <div class="cart-quantity cart-column">
//       <input class="cart-quantity-input" type="number" value="1">
//       <button class="btn btn-danger" type="button">Xóa</button>
//   </div>`
//   cartRow.innerHTML = cartRowContents
//   cartItems.append(cartRow)
//   cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
//     const button_remove = event.target
//     button_remove.parentElement.parentElement.remove()
//     updatecart()
//   })
//   cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
//     var input = event.target
//     if (isNaN(input.value) || input.value <= 0) {
//       input.value = 1;
//     }
//     updatecart()
//   })
// }
