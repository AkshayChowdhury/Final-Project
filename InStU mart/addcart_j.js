let cartItems = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    totalPrice += price;

    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-price');

    // Clear existing items
    cartList.innerHTML = '';

    // Update cart items
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    // Update total price
    totalElement.textContent = totalPrice.toFixed(2);
}

function checkout() {
    alert('Payment processed. Thank you for your purchase!');
    resetCart();
}

function resetCart() {
    cartItems = [];
    totalPrice = 0;
    updateCart();
}
