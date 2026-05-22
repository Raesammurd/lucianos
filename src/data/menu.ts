export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  desc: string;
  ingredients: string[];
}

export const menuItems: MenuItem[] = [
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
