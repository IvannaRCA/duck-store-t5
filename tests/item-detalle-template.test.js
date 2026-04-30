import { getDimensions, getMaterials } from "../src/js/template/item-detalle-template.js";

describe("Funciones de formato de producto", () => {

    it("deberia formatear las dimensiones correctamente", () => {
        const dimensiones = {
            "height": "10cm",
            "width": "8cm",
            "length": "12cm"
        };
        const resultado = getDimensions(dimensiones);
        expect(resultado).toBe("10cm x 8cm x 12cm");
    });

    it("deberia formatear los materiales correctamente", () => {
        const materiales = ["madera", "metal", "plastico"];
        const resultado = getMaterials(materiales);
        expect(resultado).toBe("Madera<br>Metal<br>Plastico<br>");
    });

});