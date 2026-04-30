import { cartItemListeners, getCart } from "../service/cart-service.js";
import { generarItemCarrito } from "../template/item-carrito-template.js";
import { generarSubtotalCarrito } from "../template/subtotal-carrito-template.js";
import { calculateTotal } from "../service/cart-service.js";
import { buyListener } from "../service/cart-service.js";

export async function renderCart() {
    const cart = getCart();
    const container = document.querySelector('#subtotal__ducks');
    const subtotal = document.querySelector('#subtotal__prices');
    const total = document.querySelector('#total__price');
    container.innerHTML = "";
    subtotal.innerHTML = "";
    total.innerHTML = "";
    if (cart.length === 0) {
        container.innerHTML = `<p>El carrito está vacío.</p>`;
        subtotal.innerHTML = `<p>No has añadido nada al carrito.</p>`;
        total.innerHTML = `-`;
        return;
    }

    cart.forEach(product => {
        container.innerHTML += generarItemCarrito(product);
    });
    cart.forEach(product => {
        subtotal.innerHTML += generarSubtotalCarrito(product);
    });
    total.innerHTML += calculateTotal();
    
    cartItemListeners();
    buyListener();
}