describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://192.168.0.2:8080");
    cy.get("#enviar-carta").click();
    cy.get("#nombre:invalid")
      .invoke("prop", "validationMessage")
      .should("equal", "No uses numeros ni simbolos en tu nombre");
    cy.get("#nombre").type("cristian");
    cy.get("#enviar-carta").click();
    cy.get("#ciudades:invalid")
      .invoke("prop", "validationMessage")
      .should("equal", "por favor, selecciona una ciudad");
    cy.get("#ciudades").select("Buenos Aires");
    cy.get("#enviar-carta").click();
    cy.get("#descripcion:invalid")
      .invoke("prop", "validationMessage")
      .should(
        "equal",
        "No uses numeros ni simbolos en la descripcion del regalo"
      );
    cy.get('[type="radio"]').first().check();
    cy.get("#descripcion").type("Bicicleta");
    cy.get("#enviar-carta").click().wait(5500);
    cy.url().should("eq", "http://192.168.0.2:8080/wishlist.html");
  });
});
