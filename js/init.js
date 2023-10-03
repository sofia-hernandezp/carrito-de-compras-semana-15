const stock = [
    {id: 1,
    item: "Notebook",
    marca: "Dell",
    modelo: "Vostro",
    precio: "1090",
    moneda:"USD",
    img: 'https://unsplash.com/es/fotos/i5UV2HpITYA',
},
    {id:2,
    item: "Notebook",
    marca: "Lenovo IdeaPad",
    modelo: "14ITL6",
    precio: "800",
    moneda:"USD",
    img: "",
},
    {id: 3,
    item: "Celular",
    marca: "Samsung Galaxy",
    modelo: "S24",
    precio: "1500",
    moneda:"USD",
    img:"",
},
    {id:4,
    item: "Notebook",
    marca: "Apple",
    modelo: "Macbook Air",
    precio: "2200",
    moneda:"USD",
    img: "https://unsplash.com/es/fotos/alCEnNmzhPE",
},
]

document.addEventListener('DOMContentLoaded', () => {

    const contenedor = document.getElementById("productContainer");   
    
    stock.forEach(function (element) {
        const relatedProductHtml = relatedProductsToHtml(element);
        contenedor.innerHTML += relatedProductHtml;
    });

})


const contenedorToHtml = (elem) => {
  
    return 
        `<div class="row">
    <div class="col-md-4 mb-4">
        <div class="card">
            <img src="producto1.jpg" alt="Producto 1" class="card-img-top">
            <div class="card-body">
                <h3 class="card-title">${element.item}</h3>
                <p class="card-text">Precio: $19.99</p>
                <button class="btn btn-primary" id="agregar">Agregar al carrito</button>
            </div>
        </div>
    </div>`
  };


//Funcion agregar al carrito
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll("#agregar");
    
    addToCartButtons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        const productName = document.querySelectorAll(".card-title")[index].value;
        const productPrice = document.querySelectorAll(".card-text")[index].value;
        const product = {
          name: productName,
          price: productPrice,
        };
        
        // Verifica si ya hay elementos en el carrito en localStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        
        // Agrega el producto al carrito
        cart.push(product);
        
        // Guarda el carrito actualizado en localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        
        alert("Producto agregado al carrito");
      });
    });
  });
  