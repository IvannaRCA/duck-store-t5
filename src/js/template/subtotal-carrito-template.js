import { calculateSubtotal } from "../service/cart-service.js";
import { calculateTotal } from "../service/cart-service.js";

export function generarSubtotalCarrito(product) {
    return `
        <li class="subtotal-list__element">
            <span class="list__name">${product.name} x${product.quantity}</span>
            <span class="list__price">${calculateSubtotal(product.price, product.quantity)}€</span>
        </li>
    `;
}