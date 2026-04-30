import { getProductById } from '../service/product-service.js';
import { generarItemDetalle } from '../template/item-detalle-template.js'
import { cartListeners } from '../service/cart-service.js';

export async function renderDetalle() {
    // 1. Obtener el id de la URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    // 2. Validar que existe
    if (!id) {
        console.error('No se encontró el id en la URL');
        return;
    }

    // 3. Usarlo para obtener el producto
    const product = await getProductById(id);
    if (!product) {
        console.error('Producto no encontrado');
        return;
    }
    // 4. Renderizar
    const container_nodes = document.querySelector('#detalle');

    container_nodes.innerHTML = generarItemDetalle(product);
    cartListeners();
}