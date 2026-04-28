import { getProducts } from '../service/product-service.js';
import { generarItemCatalogo } from '../template/item-catalogo-template.js';

//conecta el array de productos obtenido de leer el json con el DOM
export async function renderCatalogo() {
  const container_nodes = document.querySelector('#catalogo');
  const products = await getProducts();

  products.forEach(product => {
    container_nodes.innerHTML += generarItemCatalogo(product);
  });
}

export async function renderRecommendedList() {
  const container_nodes = document.querySelector('#lista-recomendados');
  console.log(container_nodes);
  const products = await getProducts();
  const selection = Array.from(products).filter(product => product.recommended === true);

  selection.forEach(item => {
    container_nodes.innerHTML += generarItemCatalogo(item);
  })
}

