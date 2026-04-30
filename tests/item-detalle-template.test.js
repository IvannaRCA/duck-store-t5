

it(`deberia formatear las dimensiones correctamente`, () => {
    const dimensiones = {
      "height": "10cm",
      "width": "8cm",
      "length": "12cm"
    };

    const resultado = getDimensions(dimensiones);

    expect(resultado).toBe("10cm x 8cm x 12cm");
});



