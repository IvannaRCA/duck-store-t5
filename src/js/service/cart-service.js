
import { getProducts } from "./product-service.js";
import { renderCart } from "../render/carrito-render.js";

export function getCart() {
    try {
        const cart = localStorage.getItem("cart");
        if (!cart) return [];
        const cartParsed = JSON.parse(cart);
        return Array.isArray(cartParsed) ? cartParsed : [];
    } catch (error) {
        console.error('getCart falló:', error.message);
        return [];
    } 
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export async function addToCart(id) {
    const cart = getCart();
    console.log("cart:", cart);
    console.log("es array?:", Array.isArray(cart));
    const existingProduct = cart.find(product => product.id === id);

    if (!existingProduct) {
        const products = await getProducts();
        const product = products.find(product => product.id === id);
        cart.push({...product, quantity: 1});
    } else {
        existingProduct.quantity++;
    }

    saveCart(cart);
}

export function cartListeners() {
    document.querySelectorAll('[id^="btn-cart-"]').forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const id = btn.id.replace("btn-cart-", "");
            addToCart(Number(id));
            alert("¡Producto añadido al carrito! 🛒")
        });
    });
}

export function cartItemListeners() {
    document.querySelectorAll('[id^="btn-increase-"]').forEach(btn => {
        btn.addEventListener("click", () => {
            const id = Number(btn.id.replace("btn-increase-", ""));
            increaseQuantity(id);
        });
    });

    document.querySelectorAll('[id^="btn-decrease-"]').forEach(btn => {
        btn.addEventListener("click", () => {
            const id = Number(btn.id.replace("btn-decrease-", ""));
            decreaseQuantity(id);
        });
    });

    document.querySelectorAll('[id^="btn-delete-"]').forEach(btn => {
        btn.addEventListener("click", () => {
            const id = Number(btn.id.replace("btn-delete-", ""));
            removeItem(id);
        });
    });
}

async function increaseQuantity(id) {
    const cart = getCart();
    const product = cart.find(p => p.id === id);
    product.quantity++;
    saveCart(cart);
    await renderCart();
}

async function decreaseQuantity(id) {
    const cart = getCart();
    const product = cart.find(p => p.id === id);
    if (product.quantity > 1) {
        product.quantity--;
    } else {
        await removeItem(id);
        return;
    }
    saveCart(cart);
    await renderCart();
}

async function removeItem(id) {
    let cart = getCart();
    cart = cart.filter(p => p.id !== id);
    saveCart(cart);
    await renderCart();
}

export function calculateSubtotal(price, quantity) {
    const subtotal = price * quantity;
    return subtotal.toFixed(2);
}

export function calculateTotal() {
    const cart = getCart();
    return `${cart.reduce((acc, product) => acc + (product.price * product.quantity), 0).toFixed(2)}€`;
}

export function buyListener() {
    document.querySelector('#finish__buy').addEventListener("click", (e) => {
        e.preventDefault();
        buyButton();
    });
}

async function buyButton() {
    const cart = getCart();
    if (cart.length === 0) {
        alert("No es posible realizar la compra. Tu carrito está vacío");
        return;
    }
    alert("¡Compra realizada con éxito!");
    localStorage.removeItem("cart");
    await renderCart();
}