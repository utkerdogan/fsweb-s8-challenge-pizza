describe('Pizza Testleri', () => {

  it('Sipariş notu için bir metin girilmeli', () => {
    cy.visit("http://localhost:5173/siparisFormu")
    cy.get('.text-input') 
      .type('Ekstra peynir lütfen.') 
      .should('have.value', 'Ekstra peynir lütfen.');
  });

  it('Birden fazla ek malzeme seçilebilmeli', () => {
    cy.visit("http://localhost:5173/siparisFormu")

    const extraIngredients = ['Pepperoni', 'Mısır', 'Soğan'];
    extraIngredients.forEach((ingredient) => {
    cy.get('.checkbox-label').contains(ingredient).click({ force: true });
    cy.get('.checkbox-label')
      .contains(ingredient)
      .find('input[type="checkbox"]')
      .should('be.checked');
  });
  });
  

  it('Formu eksiksiz doldurup sipariş vermeli', () => {
    cy.visit("http://localhost:5173/siparisFormu")
    cy.get('input[type="radio"][value="Büyük"]').check();
    cy.get('.select-input').select('İnce');
    cy.get('.text-input').type('Bol malzemeli olsun.'); 
    cy.get('.order-btn').click();
    cy.url().should('include', '/siparisOnayi');
  });
});
