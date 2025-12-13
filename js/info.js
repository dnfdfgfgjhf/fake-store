document.addEventListener("DOMContentLoaded", function() {

    //lấy id của products
    const params = new URLSearchParams(window.location.search);
    const product_id = params.get("id");

fetch(`https://fakestoreapi.com/products/${product_id}`)
    .then(response => response.json())
    .then(data => {

      //poster
      document.getElementById("preview-img").src = data.image;
      //products-title
      document.getElementById("products-title").textContent = data.title;
      //products-price
      document.getElementById("products-price").textContent = "giá tiền: " + data.price;
      //products-category
      document.getElementById("products-category").textContent = "loại: " + data.category;
      //products-description
      document.getElementById("products-description").textContent = data.description;
    })
    .catch(err => console.log(err));  
})

