//obtiene los datos para luego mostrar en el catálogo a partir de un json
//como tiene que esperar que le lleguen los datos tiene que ser asíncrono
export async function getProducts() {
    try {
        const response = await fetch('/src/data/products.json');
        if (!response.ok) {
            throw new Error(`Error al cargar el JSON: ${response.status}`);
        }

        const products = await response.json();
        return products;

    } catch (error) {
        console.error('getProductos falló:', error.message);
        return [];
    }
}

export async function getProductById(productId) {
    try {
        const products = await getProducts();
        const item = products.filter(p => p.id == productId)[0];
        return item;

    } catch (error) {
        console.error('getProductosById falló:', error.message);
        return [];
    }
}


