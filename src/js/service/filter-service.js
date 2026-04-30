import { getProducts } from "./product-service.js";

export function getFilterCategories(products) {
    const categories = [...new Set(products.map(p => p.category).sort())];
    return categories.map(mapToUpperCase);
}

export function filterProducts(products, filterSelected) {
    if (filterSelected === "Todos") {
        return products;
    } else {
        return products.filter((p) => mapToUpperCase(p.category) == filterSelected);
    }
}

function mapToUpperCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
