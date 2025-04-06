function handleOrderButtonClick(event) {
    const productName = event.target.closest('.product-card').querySelector('h3').innerText;
    alert(`Вы заказали: ${productName}`);
}
const orderButtons = document.querySelectorAll('.order-btn');

orderButtons.forEach(button => {
    button.addEventListener('click', handleOrderButtonClick);
});

