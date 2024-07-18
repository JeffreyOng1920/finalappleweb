// cart.js
document.addEventListener('DOMContentLoaded', function() {
    const cart = [];

    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const product = button.getAttribute('data-product');
            cart.push(product);
            alert(product + ' has been added to your cart.');
            console.log(cart);
        });
    });
});
