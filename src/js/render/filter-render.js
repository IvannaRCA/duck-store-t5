import { getFilterCategories } from '../service/filter-service.js';
import { generarFiltrosCatalogo } from '../template/filters-bar-template.js';

//muestras botones filtros según categorías existentes en json productos
export function renderFilters(products) {
  const categories = getFilterCategories(products);

  const container_nodes = document.querySelector("#filters-bar");

  container_nodes.innerHTML = categories.map(generarFiltrosCatalogo).join("");
}

//pone en escucha los botones de los filtros
//data-category en vez de poner onclick en cada botón permite un listener para todos
export function filterListener(onFilterChange) {
  const container = document.querySelector(".filtros");

  container.addEventListener("click", e => {
    if (!e.target.matches("button")) 
      return;

    const selectedFilter = e.target.dataset.category;
    
    onFilterChange(selectedFilter);
  });
}