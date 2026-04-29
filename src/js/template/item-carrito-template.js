export function generarItemCarrito(product) {
    return `
    <article class="duck">
        <img class="duck__image" src="${product.image}" alt="${product.name}">
        <div class="duck__info">
            <div class="duck-info__header">
                <div class="duck__info header">
                    <h3 class="duck-info__title">${product.name}</h3>
                    <p class="duck-info__category">${product.category}</p>
                </div>
                <div class="duck-info__action">
                    <button id="btn-delete-${product.id}" class="action__delete">🗑</button>
                </div>
            </div>
            <div class="duck-info__quantity">
                <div class="quantity">
                    <button id="btn-decrease-${product.id}" class="quantity__btn">−</button>
                        <span class="quantity__value">${product.quantity}</span>
                    <button id="btn-increase-${product.id}" class="quantity__btn">+</button>
                </div>
                <div class="duck-info__action">
                    <span class="duck__price">${product.price}€</span>
                </div>
            </div>
        </div>
    </article>
    `;
}