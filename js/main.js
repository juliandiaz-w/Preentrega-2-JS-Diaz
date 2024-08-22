//!SIMULADOR CATÁLOGO + CARRITO
const catalogo = [
    { id: 1, nombre: "Térmica Bipolar 2x16a", marca: "Siemens", precio: 46.212, tipo: "DIN" },
    { id: 2, nombre: "Cable 2.5mm x100 mts", marca: "Argenplas", precio: 78.513, tipo: "Rollo Unipolar" },
    { id: 3, nombre: "Lámpara LED 12w Fría", marca: "Interelec", precio: 1.438, tipo: "Iluminación" },
    { id: 4, nombre: "Cable Subterráneo 4x6mm", marca: "Argenplas", precio: 9.878, tipo: "Subterráneo" },
    { id: 5, nombre: "Tester Digital HB-118a", marca: "Brinna", precio: 57.081, tipo: "Herramienta" }
];

let carrito = [];

function mostrarCatalogo() {
    let mensaje = "Catálogo de productos:\n";
    catalogo.forEach(function (producto) {
        let precioFormateado = "$" + producto.precio.toFixed(3);
        mensaje += "ID: " + producto.id +
            " | Nombre: " + producto.nombre +
            " | Marca: " + producto.marca +
            " | Precio: " + precioFormateado + "\n";
    });
    alert(mensaje);
}

function buscarProducto() {
    let criterio = prompt("Ingrese el nombre o la marca del producto que desea buscar:");
    let resultados = catalogo.filter(function (producto) {
        return producto.nombre.toLowerCase().includes(criterio.toLowerCase()) ||
            producto.marca.toLowerCase().includes(criterio.toLowerCase());
    });

    if (resultados.length > 0) {
        let mensaje = "Productos encontrados:\n";
        resultados.forEach(function (producto) {
            let precioFormateado = "$" + producto.precio.toFixed(3);
            mensaje += "ID: " + producto.id +
                ", Nombre: " + producto.nombre +
                ", Marca: " + producto.marca +
                ", Precio: " + precioFormateado + "\n";
        });
        alert(mensaje);
        return resultados;
    } else {
        alert("No se encontraron productos que coincidan con el criterio de búsqueda.");
        return [];
    }
}

function agregarAlCarrito() {
    mostrarCatalogo();
    let idProducto = parseInt(prompt("Ingrese el ID del producto que desea agregar al carrito:"));
    let producto = catalogo.find(function (producto) {
        return producto.id === idProducto;
    });

    if (producto) {
        carrito.push(producto);
        alert("El producto " + producto.nombre + " se agregó al carrito.");
    } else {
        alert("Producto no encontrado.");
    }
}

function mostrarCarrito() {
    if (carrito.length > 0) {
        let mensaje = "Carrito de compras:\n";
        carrito.forEach(function (producto, index) {
            let precioFormateado = "$" + producto.precio.toFixed(3);
            mensaje += "Índice: " + index +
                " | Nombre: " + producto.nombre +
                " | Marca: " + producto.marca +
                " | Precio: " + precioFormateado + "\n";
        });
        alert(mensaje);
    } else {
        alert("El carrito está vacío.");
    }
}

function eliminarDelCarrito() {
    if (carrito.length > 0) {
        let indice = parseInt(prompt("Ingrese el ÍNDICE del producto que desea eliminar del carrito:"));
        if (indice >= 0 && indice < carrito.length) {
            let productoEliminado = carrito.splice(indice, 1);
            alert("El producto " + productoEliminado[0].nombre + " fue eliminado del carrito.");
        } else {
            alert("ÍNDICE no válido.");
        }
    } else {
        alert("El carrito está vacío.");
    }
}

function finalizarCompra() {
    if (carrito.length > 0) {
        let total = carrito.reduce(function (suma, producto) {
            return suma + producto.precio;
        }, 0);
        alert("Compra finalizada. El total a pagar es: $" + total.toFixed(3));
        carrito = [];
    } else {
        alert("El carrito está vacío. No hay nada que comprar.");
    }
}

function simulador() {
    let continuar = true;

    while (continuar) {
        let opcion = prompt("Seleccione una opción:\n1. Mostrar catálogo\n2. Buscar producto\n3. Agregar producto al carrito\n4. Mostrar carrito\n5. Eliminar producto del carrito\n6. Finalizar compra\n7. Salir");

        switch (opcion) {
            case '1':
                mostrarCatalogo();
                break;
            case '2':
                buscarProducto();
                break;
            case '3':
                agregarAlCarrito();
                break;
            case '4':
                mostrarCarrito();
                break;
            case '5':
                eliminarDelCarrito();
                break;
            case '6':
                finalizarCompra();
                break;
            case '7':
                continuar = false;
                alert("Gracias por utilizar el simulador.");
                break;
            default:
                alert("Opción no válida.");
        }
    }
}

// Ejecutar el simulador
simulador();
