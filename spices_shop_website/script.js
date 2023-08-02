// Example: Show an alert when the user clicks on a product card
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('click', () => {
        alert('You clicked on a product card!');
    });
});
