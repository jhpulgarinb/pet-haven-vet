<?php
// Iniciar sesión para manejar el carrito
session_start();

// Obtener el ID del producto desde la URL (puedes personalizar esto si usas otro método)
$idProducto = $_GET['id'];

// Verificar si el producto ya existe en el carrito
if (isset($_SESSION['carrito'][$idProducto])) {
    // Si el producto ya existe, aumentar la cantidad
    $_SESSION['carrito'][$idProducto]++;
} else {
    // Si el producto no existe, agregarlo al carrito
    $_SESSION['carrito'][$idProducto] = 1;
}

// Redirigir al usuario a la página del carrito (puedes personalizar la URL)
header('carrito.html');
exit;
?>