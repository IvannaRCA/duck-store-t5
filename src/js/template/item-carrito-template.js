import { calculateSubtotal } from "../service/cart-service.js";

export function generarItemCarrito(product) {
    return `
    <article class="duck">
        <img class="duck__image" src="${product.image}" alt="${product.name}">
        <div class="duck__info">
            <div class="duck-info__header">
                <div class="duck__info header">
                    <h3 class="duck-info__title">${product.name}</h3>
                    <p class="duck-info__category">${mapToUpperCase(product.category)}</p>
                    <p>${product.price}€/ud</p>
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
                    <span class="duck__price">${calculateSubtotal(product.price, product.quantity)}€</span>
                </div>
            </div>
        </div>
    </article>
    `;
}

function mapToUpperCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
