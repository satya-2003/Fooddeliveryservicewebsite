

function toggleCartPopup() {
   
       const cartPopup = document.getElementById('cart-popup');
       cartPopup.classList.toggle('active');
}
    // for close cart popup
function closeCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.classList.remove('active')
}

function addToCart(itemName, itemPrice)  {

    const cartItems = document.getElementById('cart-items').getElementsByTagName('tbody')[0];
    const existingItem = Array.from(cartItems.getElementsByTagName('tr')).find(item => item.cells[0].textContent === itemName);

    if (existingItem) {
        const itemCount = parseInt(existingItem.querySelector('.item-count').textContent) + 1;
        existingItem.querySelector('.item-count').textContent = itemCount;

        const itemTotal = parseFloat(existingItem.querySelector('.item-total').textContent) + parseFloat(itemPrice);
        existingItem.querySelector('.item-total').textContent = itemTotal.toFixed(2);
    }

    else {
        const newRow = cartItems.insertRow();
        newRow.innerHTML = `
        <td>${itemName}</td>
        <td class='item-count'>1</td>
        <td class='item-price'>${itemPrice}</td>
        <td class='item-total'>${itemPrice}</td>
        `;
    }
    updateCartCountAndTotal();
}


function updateCartCountAndTotal() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('card-total');
    const cartItems = document.querySelectorAll('#cart-items tbody tr');
    let totalCount=0;
    let total = 0;
    cartItems.forEach(item => {
        const itemCount = parseInt(item.querySelector('.item-count').textContent);
        const itemTotal = parseFloat(item.querySelector('.item-total').textContent);
        totalCount += itemCount;
        total += itemTotal;
    });
    cartCount.textContent = totalCount;
    cartTotal.textContent = total.toFixed(2); 
}

JavaScript (for menu category filtering functionality):

// Select all filter buttons and food cards
const filterButtons = document.querySelectorAll('.filter-btn');
const foodCards = document.querySelectorAll('.food-card');

// Add event listener to each filter button
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category'); // Get category from button

        // Loop through each food card and toggle visibility based on category
        foodCards.forEach(card => {
            if (category === 'all') {
                card.style.display = 'block'; // Show all
            } else {
                card.classList.contains(category) ? card.style.display = 'block' : card.style.display = 'none';
            }
        });
    });
});
