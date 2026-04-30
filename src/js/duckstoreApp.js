import { renderCatalogo, renderRecommendedList } from './render/catalogo-render.js';
import { renderDetalle } from './render/detalle-render.js'
import { filterProducts } from './service/filter-service.js';
import { renderCart } from './render/carrito-render.js';

/* Se tiene que renderizar o catálogo o detalle u otros según la página que queramos cargar,
   la identificamos por un id de un elemento que solo exista en esa página (#id).
   Se llama a la función de render cuando el DOM esté listo, por eso document.eventListener.
    Es async porque el DOM no lo es pero las funciones render sí.
*/
document.addEventListener('DOMContentLoaded', async () => {
  if (document.querySelector('#catalogo')) {

    await renderRecommendedList();
    await renderCatalogo();
  }
  if (document.querySelector('#detalle')) {
    await renderDetalle();
  }
  if (document.querySelector('#subtotal__ducks')) {
    await renderCart();
  }
});