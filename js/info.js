document.addEventListener("DOMContentLoaded", function () {

  const params = new URLSearchParams(window.location.search);
  const product_id = params.get("id");

  let currentProduct = null; // lưu sản phẩm hiện tại

  fetch(`https://fakestoreapi.com/products/${product_id}`)
    .then(response => response.json())
    .then(data => {
      currentProduct = data;

      document.getElementById("preview-img").src = data.image;
      document.getElementById("products-title").textContent = data.title;
      document.getElementById("products-price").textContent = "Giá: $" + data.price;
      document.getElementById("products-category").textContent = "Loại: " + data.category;
      document.getElementById("products-description").textContent = data.description;
    })
    .catch(err => console.log(err));

  // 👉 Add to cart
  document.getElementById("add-to-cart").addEventListener("click", function () {
    addToCart(currentProduct);
  });

});

// =============================
// FUNCTION ADD TO CART
// =============================
function addToCart(product) {
  if (!product) return;

  // Lấy cart từ localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Kiểm tra sản phẩm đã có chưa
  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  // Lưu lại vào localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Đã thêm sản phẩm vào giỏ hàng 🛒");

  // xử lý đăng nhập
const userStatus = document.getElementById('user-status');
const loggedInUser = localStorage.getItem('loggedInUser');

if (loggedInUser) {
    userStatus.innerHTML = `${loggedInUser} <button id="logout-btn">Đăng xuất</button>`;
    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        window.location.reload();
    });
} else {
    userStatus.innerHTML = '<a href="login.html">Đăng nhập</a>';
}

document.addEventListener("DOMContentLoaded", fetchLaptops);
}
