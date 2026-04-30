import { cartItemListeners, getCart } from "../service/cart-service.js";
import { generarItemCarrito } from "../template/item-carrito-template.js";

export async function renderCart() {
    const cart = getCart();
    const container = document.querySelector('#subtotal__ducks');
    container.innerHTML = "";
    if (cart.length === 0) {
        container.innerHTML = `<p>El carrito está vacío.</p>`;
        return;
    }

    cart.forEach(product => {
        container.innerHTML += generarItemCarrito(product);
    });

    cartItemListeners();
}