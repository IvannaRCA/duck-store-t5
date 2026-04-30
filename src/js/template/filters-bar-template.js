export function generarFiltrosCatalogo(category) {
    return `
    <button class="btn-filtro" data-category="${category}">${category}</button>
  `;
}