// --- Data ---
const menuItems = [
    // Starters
    { id: 1, name: "Bruschetta al Salmone", category: "starters", price: 8.50, desc: "Stone baked crostini topped with fresh tomato, smoked salmon, garlic and finished with a drizzle of pesto.", ingredients: ["gluten", "fish", "tomato", "garlic", "nuts", "dairy"] },
    { id: 2, name: "Bruschetta Pomodora", category: "starters", price: 6.50, desc: "Stone baked olive oil crostini topped with fresh tomato, basil, garlic, extra virgin olive oil and balsamic vinegar.", ingredients: ["gluten", "tomato", "garlic"] },
    { id: 3, name: "Bruschetta Formaggio Di Capra", category: "starters", price: 8.50, desc: "A delicious oven baked crostini, with chopped tomato, topped with melted goats cheese, garlic and finished with Peak District artisan honey.", ingredients: ["gluten", "tomato", "dairy", "garlic"] },
    { id: 4, name: "Funghi al Aglio", category: "starters", price: 7.50, desc: "Mushrooms sautéed with fresh garlic, plum tomato, white wine and a touch of parsley.", ingredients: ["mushroom", "garlic", "tomato", "alcohol", "sulfites"] },
    { id: 5, name: "Funghi al Dolcelatte", category: "starters", price: 8.90, desc: "Mushrooms sautéed with garlic, dolcelatte cheese, a touch of cream and white wine.", ingredients: ["mushroom", "garlic", "dairy", "alcohol", "sulfites"] },
    { id: 6, name: "Caprese Salad", category: "starters", price: 8.90, desc: "Italian classic of mozzarella, tomato and torn basil drizzled with extra virgin olive oil.", ingredients: ["dairy", "tomato"] },
    { id: 7, name: "Costolette di Maiale", category: "starters", price: 10.50, desc: "Pork baby back ribs cooked in Gio’s secret barbecue sauce.", ingredients: ["pork"] },
    { id: 8, name: "Polpette della Nonna", category: "starters", price: 9.50, desc: "Three homemade pork and beef meatballs smothered in homemade tomato and garlic sauce, topped with cheese and oven baked.", ingredients: ["pork", "beef", "tomato", "garlic", "dairy"] },
    { id: 9, name: "Anti-Pasti", category: "starters", price: 9.50, desc: "A selection of cured meats, olives, sun dried tomatoes, anchovies, shaved parmesan, bread, olive oil and balsamic vinegar.", ingredients: ["meat", "pork", "beef", "tomato", "fish", "dairy", "gluten"] },
    { id: 10, name: "Guazzetto di Cozze", category: "starters", price: 9.90, desc: "Fresh mussels cooked with white wine, tomato chilli and garlic.", ingredients: ["shellfish", "alcohol", "sulfites", "tomato", "garlic"] },
    { id: 11, name: "Cozze all'Aglio e Prezzemolo", category: "starters", price: 9.90, desc: "Fresh mussels cooked with white wine, garlic and cream.", ingredients: ["shellfish", "alcohol", "sulfites", "garlic", "dairy"] },
    { id: 12, name: "Gamberoni all'Aglio con Pepperancini", category: "starters", price: 9.50, desc: "Tiger king prawns cooked with garlic and chilli.", ingredients: ["shellfish", "garlic"] },
    { id: 13, name: "Gamberoni alla Diavola", category: "starters", price: 9.50, desc: "Tiger king prawns cooked with fresh peppers and onions in a tomato and chilli sauce.", ingredients: ["shellfish", "onion", "tomato"] },
    { id: 14, name: "Bianchetti Fritti", category: "starters", price: 7.90, desc: "Deep fried whitebait served with a slice of lemon, on a bed of rocket and a side of garlic mayonnaise.", ingredients: ["fish", "gluten", "egg", "garlic"] },

    // Pasta and Risotto
    { id: 15, name: "Lasagne", category: "pasta", price: 15.00, desc: "Rich beef ragu and onions layered between pasta sheets topped with creamy bechemel sauce and cheese, oven baked until golden.", ingredients: ["beef", "onion", "gluten", "dairy"] },
    { id: 16, name: "Cannelloni", category: "pasta", price: 14.50, desc: "Freshly made egg pancakes filled with a minced beef, onions and spinach ragu topped with a tomato and garlic sauce and cheese, then baked in the oven.", ingredients: ["egg", "gluten", "beef", "onion", "dairy", "tomato", "garlic"] },
    { id: 17, name: "Spaghetti Bolognese", category: "pasta", price: 13.00, desc: "Minced beef cooked with tomato, onions, garlic and herb sauce tossed into freshly cooked spaghetti.", ingredients: ["beef", "tomato", "onion", "garlic", "gluten"] },
    { id: 18, name: "Spaghetti Carbonara", category: "pasta", price: 13.50, desc: "Cooked in a rich creamy Parmesan sauce with bacon.", ingredients: ["gluten", "dairy", "egg", "pork"] },
    { id: 19, name: "Spaghetti Puttanesca", category: "pasta", price: 13.50, desc: "Tomato, onions, olive oil, olives, chilli, capers, anchovies and garlic.", ingredients: ["gluten", "tomato", "onion", "fish", "garlic"] },
    { id: 20, name: "Spaghetti Napolitana (Vegan)", category: "pasta", price: 11.00, desc: "Spaghetti in a rich sauce of tomato, garlic and basil.", ingredients: ["gluten", "tomato", "garlic"] },
    { id: 21, name: "Spaghetti Polpette", category: "pasta", price: 15.00, desc: "Homemade meatballs cooked with spaghetti in a rich tomato, onion and garlic sauce.", ingredients: ["pork", "beef", "gluten", "tomato", "onion", "garlic"] },
    { id: 22, name: "Penne al Forno", category: "pasta", price: 15.00, desc: "Penne pasta in a rich cream and tomato sauce, mixed with chicken, spicy salami, onions and peppers, topped with mozzarella and baked in the oven.", ingredients: ["gluten", "dairy", "tomato", "chicken", "pork", "onion"] },
    { id: 23, name: "Penne Arrabbiata (Vegan)", category: "pasta", price: 12.50, desc: "Pasta tubes with a spicy tomato, onion, chilli, garlic and basil sauce.", ingredients: ["gluten", "tomato", "onion", "garlic"] },
    { id: 24, name: "Penne Amatriciana", category: "pasta", price: 13.50, desc: "Penne pasta tossed in a rich, spicy tomato sauce with onions and bacon.", ingredients: ["gluten", "tomato", "onion", "pork"] },
    { id: 25, name: "Linguine Vongole", category: "pasta", price: 15.90, desc: "Linguine with clams cooked in white wine, parsley, onions, garlic and a hint of chilli.", ingredients: ["gluten", "shellfish", "alcohol", "sulfites", "onion", "garlic"] },
    { id: 26, name: "Linguine Salmone e Gamberetti", category: "pasta", price: 15.50, desc: "Linguine with prawns and smoked salmon pieces, in a cream sauce with a touch of onion and tomato.", ingredients: ["gluten", "shellfish", "fish", "dairy", "onion", "tomato"] },
    { id: 27, name: "Tagliatelle d'Avola", category: "pasta", price: 16.90, desc: "Pieces of beef, cherry tomatoes and onions, tossed in a chilli and tomato sauce.", ingredients: ["gluten", "beef", "tomato", "onion"] },
    { id: 28, name: "Tagliatelle Luciano's", category: "pasta", price: 14.50, desc: "Cooked in a cream and tomato sauce with chicken pieces, mushrooms, onions and spinach.", ingredients: ["gluten", "dairy", "tomato", "chicken", "mushroom", "onion"] },
    { id: 29, name: "Ravioli di Aragosta", category: "pasta", price: 16.90, desc: "Filled with lobster meat in a cream and tomato sauce topped with caviar.", ingredients: ["gluten", "shellfish", "dairy", "tomato", "fish"] },
    { id: 30, name: "Ravioli Mamma Mia", category: "pasta", price: 16.50, desc: "Ricotta & spinach served in a cream and tomato sauce.", ingredients: ["gluten", "dairy", "tomato"] },
    { id: 31, name: "Risotto Mia Ragazza", category: "pasta", price: 14.00, desc: "Chicken & mushroom risotto in a cream sauce and a touch of Cinzano.", ingredients: ["chicken", "mushroom", "dairy", "alcohol"] },
    { id: 32, name: "Risotto Frutti di Mare", category: "pasta", price: 15.90, desc: "Mixed seafood with spinach in a cream and tomato sauce.", ingredients: ["shellfish", "fish", "dairy", "tomato"] },
    { id: 33, name: "Risotto Vegetariano (Vegan)", category: "pasta", price: 13.50, desc: "Mixed vegetable risotto mixed in a tomato sauce.", ingredients: ["tomato"] },

    // Mains (Carne & Pollo)
    { id: 34, name: "Filetto", category: "mains", price: 29.00, desc: "8oz prime beef fillet.", ingredients: ["beef"] },
    { id: 35, name: "Filetto Stroganoff", category: "mains", price: 25.00, desc: "Strips of fillet steak, mushrooms and onions cooked in a brandy and mustard cream sauce, served with rice.", ingredients: ["beef", "mushroom", "onion", "alcohol", "mustard", "dairy"] },
    { id: 36, name: "Chicken Valdostano", category: "mains", price: 22.50, desc: "Chicken breast topped with proscuitto ham, mozzarella cheese in a cream and tomato sauce.", ingredients: ["chicken", "pork", "dairy", "tomato"] },
    { id: 37, name: "Chicken Cacciatore", category: "mains", price: 22.50, desc: "Chicken breast cooked with peppers, onions, garlic, tomato and white wine.", ingredients: ["chicken", "onion", "garlic", "tomato", "alcohol", "sulfites"] },
    { id: 38, name: "Chicken Dolcelatte", category: "mains", price: 22.50, desc: "Chicken breast in a creamy Italian blue cheese sauce.", ingredients: ["chicken", "dairy"] },

    // Pizza
    { id: 39, name: "Margherita Pizza", category: "pizza", price: 12.00, desc: "Classic tomato mozzarella and basil.", ingredients: ["gluten", "tomato", "dairy"] },
    { id: 40, name: "Pizza di Mare", category: "pizza", price: 15.00, desc: "Mixed seafood.", ingredients: ["gluten", "dairy", "tomato", "shellfish", "fish"] },
    { id: 41, name: "Etna Pizza", category: "pizza", price: 15.00, desc: "Hot nduja sausage, salami, fresh chilli and olives.", ingredients: ["gluten", "dairy", "tomato", "pork"] },
    { id: 42, name: "Vegetariano Pizza", category: "pizza", price: 13.00, desc: "Mixed vegetables.", ingredients: ["gluten", "dairy", "tomato"] },
    { id: 43, name: "Vegan Hot Pizza (Vegan)", category: "pizza", price: 13.00, desc: "Vegan nduja, roasted vegetable and vegan mozzarella.", ingredients: ["gluten", "tomato"] },
    { id: 44, name: "Bolognese Pizza", category: "pizza", price: 15.00, desc: "Bolognese base, Parma ham, meatball pieces, salami, chilli oil and fresh basil.", ingredients: ["gluten", "dairy", "tomato", "beef", "pork"] },
    { id: 45, name: "Calabrese Pizza", category: "pizza", price: 12.50, desc: "Spicy Calabrian salami.", ingredients: ["gluten", "dairy", "tomato", "pork"] },
    { id: 46, name: "Pizza don Luciano", category: "pizza", price: 13.00, desc: "House special with mushrooms, ham and chicken.", ingredients: ["gluten", "dairy", "tomato", "mushroom", "pork", "chicken"] },
    { id: 47, name: "Pizza BBQ", category: "pizza", price: 14.00, desc: "Barbecue sauce base, mozzarella, bacon, chicken and chilli.", ingredients: ["gluten", "dairy", "tomato", "pork", "chicken"] },
    { id: 48, name: "Pizza Prosciutto Crudo", category: "pizza", price: 15.00, desc: "Parma ham and rocket topped with shaved parmesan.", ingredients: ["gluten", "dairy", "tomato", "pork"] },
    { id: 49, name: "Calzone Sila", category: "pizza", price: 15.00, desc: "Folded pizza with ham and mushrooms topped with homemade tomato sauce.", ingredients: ["gluten", "dairy", "tomato", "pork", "mushroom"] },

    // Sides
    { id: 50, name: "Chips", category: "sides", price: 3.50, desc: "Crispy fries.", ingredients: ["potato"] },
    { id: 51, name: "Mixed Vegetables", category: "sides", price: 3.50, desc: "Seasonal mixed vegetables.", ingredients: [] },
    { id: 52, name: "Mixed Salad", category: "sides", price: 3.50, desc: "Fresh mixed salad.", ingredients: [] },
    { id: 53, name: "Rocket and Parmesan Salad", category: "sides", price: 4.50, desc: "Rocket leaves with shaved parmesan.", ingredients: ["dairy"] },
    { id: 54, name: "Baked Spinach and Parmesan", category: "sides", price: 4.50, desc: "Oven baked spinach with parmesan cheese.", ingredients: ["dairy"] },
    { id: 55, name: "Garlic Bread", category: "sides", price: 6.50, desc: "Freshly made hand stretched dough with garlic.", ingredients: ["gluten", "garlic"] },
    { id: 56, name: "Garlic Bread and Cheese", category: "sides", price: 7.50, desc: "Garlic bread topped with mozzarella.", ingredients: ["gluten", "garlic", "dairy"] },
    { id: 57, name: "Garlic Bread and Tomato", category: "sides", price: 7.00, desc: "Garlic bread topped with tomato sauce.", ingredients: ["gluten", "garlic", "tomato"] },
    { id: 58, name: "Garlic Bread, BBQ sauce and Cheese", category: "sides", price: 8.50, desc: "Garlic bread with BBQ sauce and mozzarella.", ingredients: ["gluten", "garlic", "dairy"] },

    // Desserts
    { id: 59, name: "Don Gio's Tiramisu", category: "desserts", price: 8.50, desc: "Savoiardi biscuits dipped in espresso and liquor, layered with mascarpone cheese and finished with a topping of chocolate powder.", ingredients: ["gluten", "dairy", "egg", "coffee", "alcohol"] },
    { id: 60, name: "Gelato Tricolore", category: "desserts", price: 5.50, desc: "Three scoops of ice cream. Vanilla/chocolate/strawberry/pistachio.", ingredients: ["dairy", "nuts"] },
    { id: 112, name: "Vegan Vanilla Ice Cream", category: "desserts", price: 5.00, desc: "Three scoops of vanilla.", ingredients: [] },
    { id: 113, name: "Hot Chocolate Fudge Cake", category: "desserts", price: 8.50, desc: "Classic rich chocolate fudge cake with chocolate sauce and a scoop of vanilla ice cream.", ingredients: ["gluten", "dairy", "egg", "chocolate"] },
    { id: 114, name: "Biscoff Cheesecake", category: "desserts", price: 8.50, desc: "Vanilla cheesecake and Biscoff served with vanilla ice cream and finished with Biscoff sauce.", ingredients: ["gluten", "dairy", "egg"] },
    { id: 115, name: "Tartufo Limoncello", category: "desserts", price: 8.50, desc: "Lemon semifreddo ice cream with a liquid limoncello core and coated with meringue.", ingredients: ["dairy", "egg", "alcohol", "lemon"] },
    { id: 116, name: "Affogato (when available)", category: "desserts", price: 8.50, desc: "Traditional Italian dessert. One scoop of vanilla ice cream, shot of amaretto and a shot of espresso.", ingredients: ["dairy", "coffee", "alcohol", "nuts"] },
    // Removed old Aperol Spritz (added in updated list below)
    { id: 62, name: "Classic Milkshake", category: "drinks", price: 4.50, desc: "Vanilla, Chocolate, or Strawberry.", ingredients: ["dairy", "sugar"] },

    // Wines
    { id: 63, name: "Pinot Grigio (Bottle)", category: "wines", price: 25.00, desc: "A delicate yellow wine with a bouquet of citrus and quince. On the palate it is wonderfully light and fruity with floral notes.", ingredients: ["alcohol", "sulfites"] },
    { id: 64, name: "Sangiovese (Bottle)", category: "wines", price: 28.00, desc: "A typically aromatic Sangiovese nose - bright red fruit, cherry and bitter chocolate. The palate is fresh and displays cherries, redcurrant and earth.", ingredients: ["alcohol", "sulfites"] },
    { id: 65, name: "Nero d'Avola", category: "wines", price: 39.00, desc: "A Violet wine with full and persistent aromas of cherries and spices. A full-bodied, soft and warm red wine.", ingredients: ["alcohol", "sulfites"] },
    { id: 66, name: "Chianti Classico", category: "wines", price: 36.00, desc: "Powerful on the nose, fruity with spicy suggestions. Powerful and well structured, with well balanced and round tannins.", ingredients: ["alcohol", "sulfites"] },
    { id: 67, name: "Barolo Sylla", category: "wines", price: 57.00, desc: "A Ruby red wine with dried berries, chocolate and fruit on the nose. Full bodied with soft silky tannins.", ingredients: ["alcohol", "sulfites"] },
    { id: 68, name: "Valpolicella", category: "wines", price: 38.00, desc: "Fresh, intense, fruity and spicy overtones on the nose. A full, balanced, velvety and round taste lingers on the palate.", ingredients: ["alcohol", "sulfites"] },
    { id: 69, name: "Primitivo", category: "wines", price: 37.00, desc: "A red wine that tends towards violet. It has a light and distinctive aroma, and is pleasant, full-bodied and velvety on the palate.", ingredients: ["alcohol", "sulfites"] },
    { id: 70, name: "Sauvignon Blanco", category: "wines", price: 29.00, desc: "Light straw colour with a fresh and vivacious bouquet. This wine has tastes of green fruit, with a herbaceous flavour.", ingredients: ["alcohol", "sulfites"] },
    { id: 71, name: "Gavi di Gavi", category: "wines", price: 37.00, desc: "A straw yellow wine, intense and bright. Hints of ripe apples, pears, wild flowers on the nose.", ingredients: ["alcohol", "sulfites"] },
    { id: 72, name: "Pecorino", category: "wines", price: 29.00, desc: "A fruity & floral with hints of apple & peach. Full bodied & rounded with a creamy texture.", ingredients: ["alcohol", "sulfites"] },
    { id: 73, name: "Falanghina", category: "wines", price: 29.00, desc: "A pale yellow wine from Campania with plenty of fruity notes on the nose. A very fresh and pleasant wine.", ingredients: ["alcohol", "sulfites"] },
    { id: 74, name: "Pinot Blush (Bottle)", category: "wines", price: 25.00, desc: "Delicately scented, peachy, floral characters on the nose. Juicy berry fruit fills the palate with a good acidity and an off-dry finish.", ingredients: ["alcohol", "sulfites"] },
    { id: 75, name: "Prosecco", category: "wines", price: 30.00, desc: "A sparkling wine with creamy and persistent bubbles and abundant fruity hints of acacia, honey, citrus fruits and almonds.", ingredients: ["alcohol", "sulfites", "nuts"] },
    { id: 76, name: "Prosecco Rose", category: "wines", price: 30.00, desc: "A rich and frothy sparkling rosé with vibrant red-berry fruit. Dry but pleasantly fruity.", ingredients: ["alcohol", "sulfites"] },
    { id: 77, name: "Mini Prosecco (200ml)", category: "wines", price: 8.90, desc: "Mini Prosecco.", ingredients: ["alcohol", "sulfites"] },
    { id: 78, name: "Champagne Moët & Chandon", category: "wines", price: 88.00, desc: "Champagne Moët & Chandon.", ingredients: ["alcohol", "sulfites"] },

    // Additional Drinks (Beer, Cider, Soft Drinks, Gins, Spirits, Cocktails, Coffee)
    { id: 79, name: "Moretti (Pint)", category: "drinks", price: 6.90, desc: "Italian Beer.", ingredients: ["alcohol", "gluten"] },
    { id: 80, name: "Peroni (Bottle)", category: "drinks", price: 4.50, desc: "Italian Beer.", ingredients: ["alcohol", "gluten"] },
    { id: 81, name: "Peroni 0% (Bottle)", category: "drinks", price: 4.00, desc: "Non-alcoholic Italian Beer.", ingredients: ["gluten"] },
    { id: 82, name: "Angioletti Cider", category: "drinks", price: 6.50, desc: "Cider.", ingredients: ["alcohol", "sulfites"] },
    { id: 83, name: "Kopparberg Mixed Fruit", category: "drinks", price: 6.50, desc: "Fruit Cider.", ingredients: ["alcohol", "sulfites"] },
    { id: 84, name: "Coke", category: "drinks", price: 2.20, desc: "Soft Drink.", ingredients: ["sugar"] },
    { id: 85, name: "Diet Coke", category: "drinks", price: 2.20, desc: "Soft Drink.", ingredients: [] },
    { id: 86, name: "Lemonade", category: "drinks", price: 2.20, desc: "Soft Drink.", ingredients: ["sugar"] },
    { id: 87, name: "J20 Orange and Passionfruit", category: "drinks", price: 3.60, desc: "Soft Drink.", ingredients: ["sugar"] },
    { id: 88, name: "J20 Raspberry and Apple", category: "drinks", price: 3.60, desc: "Soft Drink.", ingredients: ["sugar"] },
    { id: 89, name: "Apple Juice", category: "drinks", price: 2.10, desc: "Soft Drink.", ingredients: ["sugar"] },
    { id: 90, name: "Orange Juice", category: "drinks", price: 2.10, desc: "Soft Drink.", ingredients: ["sugar"] },
    { id: 91, name: "Cranberry Juice", category: "drinks", price: 2.10, desc: "Soft Drink.", ingredients: ["sugar"] },
    { id: 92, name: "Pineapple Juice", category: "drinks", price: 2.10, desc: "Soft Drink.", ingredients: ["sugar"] },
    { id: 93, name: "Sparkling Water", category: "drinks", price: 3.60, desc: "Water.", ingredients: [] },
    { id: 94, name: "Still Mineral Water", category: "drinks", price: 3.60, desc: "Water.", ingredients: [] },
    { id: 95, name: "Fever Tree Tonic", category: "drinks", price: 2.70, desc: "Mixer.", ingredients: [] },
    { id: 96, name: "Malfy Originale Gin (50ml)", category: "drinks", price: 11.70, desc: "Served with Fever-Tree Tonic.", ingredients: ["alcohol"] },
    { id: 97, name: "Malfy Con Aranicia Gin (50ml)", category: "drinks", price: 11.70, desc: "Blood Orange. Served with Fever-Tree Tonic.", ingredients: ["alcohol"] },
    { id: 98, name: "Malfy Gin Rosa (50ml)", category: "drinks", price: 11.70, desc: "Pink Grapefruit. Served with Fever-Tree Tonic.", ingredients: ["alcohol"] },
    { id: 99, name: "Malfy Con Limone Gin (50ml)", category: "drinks", price: 11.70, desc: "Lemon. Served with Fever-Tree Tonic.", ingredients: ["alcohol"] },
    { id: 100, name: "Spirits Selection (50ml)", category: "drinks", price: 9.00, desc: "Various Spirits.", ingredients: ["alcohol"] },
    { id: 101, name: "Espresso Martini", category: "drinks", price: 9.50, desc: "Cocktail.", ingredients: ["alcohol", "coffee"] },
    { id: 102, name: "Aperol Spritz", category: "drinks", price: 9.50, desc: "Cocktail.", ingredients: ["alcohol", "sulfites"] },
    { id: 103, name: "Strawberry Daiquiri", category: "drinks", price: 9.50, desc: "Cocktail.", ingredients: ["alcohol"] },
    { id: 104, name: "Passionfruit Martini", category: "drinks", price: 9.50, desc: "Cocktail.", ingredients: ["alcohol"] },
    { id: 105, name: "Mojito", category: "drinks", price: 9.50, desc: "Cocktail.", ingredients: ["alcohol"] },
    { id: 106, name: "Negroni", category: "drinks", price: 9.50, desc: "Cocktail.", ingredients: ["alcohol"] },
    { id: 107, name: "Limoncello Spritz", category: "drinks", price: 9.50, desc: "Cocktail.", ingredients: ["alcohol", "sulfites"] },
    { id: 108, name: "Espresso", category: "drinks", price: 2.90, desc: "Coffee.", ingredients: ["coffee"] },
    { id: 109, name: "Cappuccino", category: "drinks", price: 3.50, desc: "Coffee.", ingredients: ["coffee", "dairy"] },
    { id: 110, name: "Latte", category: "drinks", price: 3.50, desc: "Coffee.", ingredients: ["coffee", "dairy"] },
    { id: 111, name: "Special Coffee", category: "drinks", price: 9.00, desc: "Liqueur of your choice, topped with cream.", ingredients: ["coffee", "dairy", "alcohol"] }
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
                    <span class="menu-price">£${item.price.toFixed(2)}</span>
                </div>
                <p class="menu-desc">${item.desc}</p>
                <div class="allergy-warning" style="display: ${containsAllergen ? 'block' : 'none'}">
                    ⚠️ Contains ingredients matching your allergies!
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

// Meal Check Logic
const mealCheckInput = document.getElementById('mealCheckInput');
const checkMealBtn = document.getElementById('checkMealBtn');
const mealCheckResult = document.getElementById('mealCheckResult');

checkMealBtn.addEventListener('click', () => {
    const query = mealCheckInput.value.trim().toLowerCase();
    if (!query) return;

    // Find meal that matches the query
    const foundMeal = menuItems.find(item => item.name.toLowerCase().includes(query));

    if (foundMeal) {
        // Check if the meal contains any of the user's allergies
        const matchedAllergies = foundMeal.ingredients.filter(ing => 
            userAllergies.some(allergy => ing.toLowerCase().includes(allergy.toLowerCase()))
        );

        let resultHTML = `<p><strong>${foundMeal.name}</strong> contains: ${foundMeal.ingredients.join(', ')}.</p>`;
        
        if (matchedAllergies.length > 0) {
            resultHTML += `<p class="danger-text">⚠️ Warning: It contains ${matchedAllergies.join(', ')} which matches your allergies!</p>`;
        } else if (userAllergies.length > 0) {
            resultHTML += `<p class="safe-text">✅ Safe: It does not contain your specified allergies.</p>`;
        }

        mealCheckResult.innerHTML = resultHTML;
    } else {
        mealCheckResult.innerHTML = `<p>Sorry, we couldn't find a meal matching "${query}".</p>`;
    }
});

// Cart Logic
window.addToCart = function(id) {
    const item = menuItems.find(m => m.id === id);
    if(item) {
        
        // Warn if adding an allergic item, but don't strictly block (per user requirements)
        const containsAllergen = userAllergies.some(allergy => 
            item.ingredients.some(ing => ing.toLowerCase().includes(allergy.toLowerCase()))
        );
        
        if (containsAllergen) {
            const proceed = confirm(`⚠️ WARNING: ${item.name} contains ingredients you are allergic to. Are you sure you want to add this to your cart?`);
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
            <div class="cart-item-img"></div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="cart-item-price">£${item.price.toFixed(2)}</span>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})" title="Remove">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </button>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });
    
    cartTotalAmount.textContent = `£${total.toFixed(2)}`;
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
        btn.textContent = "Pay Deposit (£10) & Book";
    }, 1500);
});

// Mobile Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
    });
});

// Scroll Effects for Navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fade-in Animation Observer
const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-section').forEach((section) => {
    observer.observe(section);
});

// Initialize
renderMenu();
