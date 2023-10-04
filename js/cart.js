document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.getElementById("container");
    
    // Obtén el carrito desde localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Recorre el carrito y crea filas en la tabla para cada producto
    cart.forEach(function (product) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${product.name}</td>
        <td>1</td>
        <td>${product.price}</td>
        <td>${product.price}</td>
      `;
      
      cartContainer.appendChild(row);
    });
    
    // Calcula el subtotal
    const subtotal = cart.reduce(function (total, product) {
      return total + parseFloat(product.price.replace("$", ""));
    }, 0);
    
    // Actualiza el subtotal en la tabla
    const subtotalElement = document.querySelector(".subtotal .font-weight-bold");
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;


const checkbox = document.getElementById("activarCampos");
const boleta = document.getElementById("boleta");
const campos = boleta.querySelectorAll('input[type="text"], input[type="number"]');

  checkbox.addEventListener('change', function() {
    campos.forEach(function(input) {
        input.disabled = !checkbox.checked;
    });
  
});

const inicio = document.getElementById("volverInicio");

inicio.addEventListener("click", () =>{
  window.location.href = "index.html";
})
});
  