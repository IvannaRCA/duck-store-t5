export function generarItemDetalle(product) {
    return `
    <img class="product__image" src="${product.image}" alt="${product.name}">
    <div class="product__content" id="product-detail-content">
    <h1 class="product-content__tittle">${product.name}</h1>
    <h2 class="product-content__price">${product.price}€</h2>
    <img class="product-content__stock" src=${getStockImage(product)} alt="${getStockAltImg(product)}">
    <h3 class="product-content__description-tittle">DESCRIPCIÓN</h3>
    <p class="product-content__description">${product.description}</p>
    <a href="/src/pages/carrito.html" class="btn-carrito" id="btn-cart-${product.id}">
         <img src="/src/assets/icons/icons-carrito.png" alt="Carrito de compras"></a>
    <div class="product-content__details">
        <ul class="product-content-details__list">
            <li class="details-list__element">
                <span class="details-list__label">Medidas H x W x L</span>
                <span class="details-list__value">${getDimensions(product.dimensions)}</span>
            </li>
            <li class="details-list__element">
                <span class="details-list__label">Materiales</span>
                <span class="details-list__value">${getMaterials(product.materials)}</span>
            </li>
            <li class="details-list__element">
                <span class="details-list__label">Peso</span>
                <span class="details-list__value">${product.weight}g</span>
            </li>
        </ul>
    </div>`;
}

 function getStockImage(product) {
    if (product.inStock)
        return "/src/assets/images/stock-advise.png";
    else
        return "/src/assets/images/no-stock-advise.png";
}

 function getStockAltImg(product) {
    if (product.inStock)
        return "En Stock";
    else
        return "Sin Stock";
}

 export function getDimensions(dimensions) {
    return `${dimensions.height} x ${dimensions.width} x ${dimensions.length}`

}

  export function getMaterials(materials) {
    let materialsList = "";
    materials.forEach(element => {
        element = element.charAt(0).toUpperCase() + element.slice(1);
        materialsList += element + "<br>";
    });
    return materialsList;
}