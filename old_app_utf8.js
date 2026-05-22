// --- Data ---
const menuItems = [
    { id: 1, name: "Margherita Pizza", category: "italian", price: 12.00, desc: "Classic tomato, mozzarella, fresh basil.", ingredients: ["gluten", "dairy", "tomato"] },
    { id: 2, name: "Spaghetti Carbonara", category: "italian", price: 14.50, desc: "Pancetta, egg yolk, pecorino cheese, black pepper.", ingredients: ["gluten", "dairy", "egg", "pork"] },
    { id: 3, name: "Penne Arrabbiata", category: "italian", price: 11.00, desc: "Spicy tomato sauce, garlic, parsley.", ingredients: ["gluten", "tomato", "garlic"] },
    { id: 4, name: "Seafood Risotto", category: "italian", price: 18.00, desc: "Arborio rice, mixed seafood, white wine.", ingredients: ["shellfish", "fish", "dairy", "wine"] },
    { id: 5, name: "Pesto Gnocchi", category: "italian", price: 13.50, desc: "Potato gnocchi, basil pesto, pine nuts.", ingredients: ["gluten", "dairy", "nuts", "garlic"] },
    { id: 6, name: "Tiramisu", category: "desserts", price: 7.00, desc: "Coffee-soaked ladyfingers, mascarpone, cocoa.", ingredients: ["gluten", "dairy", "egg", "coffee"] },
    { id: 7, name: "Gelato Selection", category: "desserts", price: 5.50, desc: "Three scoops of artisanal Italian ice cream.", ingredients: ["dairy"] },
    { id: 8, name: "Aperol Spritz", category: "drinks", price: 8.50, desc: "Aperol, Prosecco, soda water.", ingredients: ["alcohol"] },
    { id: 9, name: "Chianti Classico (Bottle)", category: "wines", price: 32.00, desc: "Red wine, Tuscany, Italy.", ingredients: ["alcohol", "sulfites"] },
    { id: 10, name: "Classic Milkshake", category: "drinks", price: 4.50, desc: "Vanilla, Chocolate, or Strawberry.", ingredients: ["dairy", "sugar"] }
];

let cart = [];
let userAllergies = [];

// --- DOM Elements ---
const menuGrid = document.getElementById('menuGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalAmount = document.getElementById('cartTotalAmount');

// AI Elements
const aiAssistant = document.getElementById('aiAssistant');
const aiToggleBtn = document.getElementById('aiToggleBtn');
const aiHeader = document.getElementById('aiHeader');
const allergyInput = document.getElementById('allergyInput');
const addAllergyBtn = document.getElementById('addAllergyBtn');
const allergyTagsContainer = document.getElementById('allergyTags');

// Reservation Elements
const reservationForm = document.getElementById('reservationForm');
const bookingSuccess = document.getElementById('bookingSuccess');

// --- Functions ---

// Render Menu
function renderMenu(category = "all") {
    menuGrid.innerHTML = "";
    
    const filteredMenu = category === "all" ? menuItems : menuItems.filter(item => item.category === category);
    
    filteredMenu.forEach(item => {
        // Check for allergy warning
        const containsAllergen = userAllergies.some(allergy => 
            item.ingredients.some(ing => ing.toLowerCase().includes(allergy.toLowerCase()))
        );

        const menuItemEl = document.createElement('div');
        menuItemEl.className = 'menu-item';
        menuItemEl.innerHTML = `
            <div class="menu-img"></div>
            <div class="menu-info">
                <div class="menu-header">
                    <h3 class="menu-title">${item.name}</h3>
                    <span class="menu-price">┬ú${item.price.toFixed(2)}</span>
                </div>
                <p class="menu-desc">${item.desc}</p>
                <div class="allergy-warning" style="display: ${containsAllergen ? 'block' : 'none'}">
                    ÔÜá´©Å Contains ingredients matching your allergies!
                </div>
                <button class="btn btn-secondary full-width" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        `;
        menuGrid.appendChild(menuItemEl);
    });
}

// Filter Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderMenu(btn.dataset.filter);
    });
});

// AI Chatbot Logic
aiHeader.addEventListener('click', () => {
    aiAssistant.classList.toggle('collapsed');
    aiToggleBtn.textContent = aiAssistant.classList.contains('collapsed') ? '^' : 'v';
});

addAllergyBtn.addEventListener('click', () => {
    const val = allergyInput.value.trim().toLowerCase();
    if (val && !userAllergies.includes(val)) {
        userAllergies.push(val);
        renderAllergyTags();
        // Re-render menu to show warnings immediately
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        renderMenu(activeFilter);
    }
    allergyInput.value = '';
});

function renderAllergyTags() {
    allergyTagsContainer.innerHTML = '';
    userAllergies.forEach((allergy, index) => {
        const tag = document.createElement('div');
        tag.className = 'allergy-tag';
        tag.innerHTML = `${allergy} <span class="remove-tag" onclick="removeAllergy(${index})">&times;</span>`;
        allergyTagsContainer.appendChild(tag);
    });
}

window.removeAllergy = function(index) {
    userAllergies.splice(index, 1);
    renderAllergyTags();
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    renderMenu(activeFilter);
}

// Cart Logic
window.addToCart = function(id) {
    const item = menuItems.find(m => m.id === id);
    if(item) {
        
        // Warn if adding an allergic item, but don't strictly block (per user requirements)
        const containsAllergen = userAllergies.some(allergy => 
            item.ingredients.some(ing => ing.toLowerCase().includes(allergy.toLowerCase()))
        );
        
        if (containsAllergen) {
            const proceed = confirm(`ÔÜá´©Å WARNING: ${item.name} contains ingredients you are allergic to. Are you sure you want to add this to your cart?`);
            if (!proceed) return;
        }

        cart.push(item);
        updateCartUI();
        
        // Brief visual feedback
        cartBtn.style.transform = 'scale(1.1)';
        setTimeout(() => cartBtn.style.transform = 'scale(1)', 200);
    }
}

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    cartCount.textContent = cart.length;
    
    cartItemsContainer.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price;
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="cart-item-price">┬ú${item.price.toFixed(2)}</span>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });
    
    cartTotalAmount.textContent = `┬ú${total.toFixed(2)}`;
}

cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
});

const closeCart = () => {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
};

closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Checkout Logic
document.getElementById('submitOrderBtn').addEventListener('click', () => {
    if (cart.length === 0) return alert('Your cart is empty!');
    alert('Order submitted successfully! Please pay in-person upon arrival.');
    cart = [];
    updateCartUI();
    closeCart();
});

document.getElementById('payNowBtn').addEventListener('click', () => {
    if (cart.length === 0) return alert('Your cart is empty!');
    alert('Redirecting to Stripe Gateway... (Mocked). Payment successful!');
    cart = [];
    updateCartUI();
    closeCart();
});

// Reservation Logic
reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = reservationForm.querySelector('button');
    btn.textContent = "Processing Deposit...";
    
    setTimeout(() => {
        reservationForm.reset();
        reservationForm.style.display = 'none';
        bookingSuccess.classList.remove('hidden');
        btn.textContent = "Pay Deposit (┬ú10) & Book";
    }, 1500);
});

// Scroll Effects for Navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(13, 13, 13, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Initialize
renderMenu();
