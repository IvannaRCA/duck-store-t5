//construye los items de productos según la estructura del HTML
export function generarItemCatalogo(product) {
    return `
    <li class="catalogo-products__item">
        <a href="/src/pages/detalles-producto.html?id=${product.id}" class="catalogo-item__enlace-detalle" id="enlace-detalle">
            <img src="${product.image}" alt="${product.name}" class="foto-producto">
            <p class="item-name">${product.name}</p>
        </a>
        <p class="item-price">${product.price} €</p>  
        <a href="/src/pages/carrito.html" class="btn-carrito" >
         <img src="/src/assets/icons/icons-carrito.png" alt="Carrito de compras"></a>
    </li>
    `;
}



