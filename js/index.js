const products_div = document.getElementById("products")

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      let products = data[i]

      let div = document.createElement("div")

      div.className = "product";

      div.innerHTML = `
        <img src="${products.image}" alt="${products.title}" />
        <h3>${products.title}</h3>
        <p>$${products.price}</p>
        <button>See details</button>
      `

      div.addEventListener("click", () => {
              window.location.href = `../info.html?id=${products.id}`
      })
      products_div.appendChild(div);


      

    }
  })
  .catch(err => console.error(err))

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))