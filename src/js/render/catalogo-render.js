import { getProducts } from '../service/product-service.js';
import { generarItemCatalogo } from '../template/item-catalogo-template.js';
import { renderFilters, filterListener } from './filter-render.js'
import { filterProducts } from '../service/filter-service.js'
import { cartListeners } from '../service/cart-service.js';

export async function renderCatalogo() {
  let selectedFilter = "Todos";
  const products = await getProducts();

  await renderFilters(products);
  await renderCatalogoProducts(products);

  filterListener((selectedFilter) => {
    console.log(selectedFilter);
    const filteredProducts = filterProducts(products, selectedFilter);
    console.log(filteredProducts);
    renderCatalogoProducts(filteredProducts);
  });

}

//conecta el array de productos obtenido de leer el json con el DOM
async function renderCatalogoProducts(products) {
  console.log(products);
  const container_nodes = document.querySelector('#catalogo');
  container_nodes.innerHTML = products.map(generarItemCatalogo).join("");
  cartListeners();
}

export async function renderRecommendedList() {
  const container_nodes = document.querySelector('#lista-recomendados');

  const products = await getProducts();

  container_nodes.innerHTML = products.filter(product => product.recommended == true).map(generarItemCatalogo).join("");
}

