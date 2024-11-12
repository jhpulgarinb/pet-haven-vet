const botonVerMas = document.querySelector('.boton-ver-mas');

botonVerMas.addEventListener('click', () => {
    // Aquí puedes agregar código para realizar acciones adicionales antes de redirigir,
    // como por ejemplo, enviar datos a una API, mostrar una animación, etc.

    // Redirigir a la página de productos
    window.location.href = 'productos.html'; 
});

// Falta organizar hacia abajo para que mande el producto al carrito
const botonesComprar = document.querySelectorAll('.agregar-al-carrito.php');
const listaCarrito = document.getElementById('lista-carrito');
let carrito = [];

botonesComprar.forEach(boton => {
    boton.addEventListener('click', () => {
        const producto = boton.dataset.producto;
        carrito.push(producto);
        actualizarCarrito();
    });
});

function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = producto;
        listaCarrito.appendChild(li);
    });

}
function agregarAlCarrito(idProducto) {
    // Enviar una solicitud al archivo PHP utilizando fetch o XMLHttpRequest
    fetch('php/agregar-al-carrito.php?id=' + idProducto)
        .then(response => response.text())
        .then(data => {
            // Puedes mostrar un mensaje de confirmación al usuario si lo deseas
            console.log(data);
        });
}