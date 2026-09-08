// ==========================================
// BATTALU PRICING CONFIGURATION
// ==========================================
// To update prices, simply change the numbers below and save this file.
// The pricing page will automatically update!

const catalogPrices = {
  // ----------------------------------------
  // WOMEN'S WEAR
  // ----------------------------------------
  "womens": [
    { name: "Only Iron", price: 10 },
    { name: "Steam Iron", price: 15 },
    { name: "Plain Blouse (Dry Wash)", price: 25 },
    { name: "Chuni (Wash + Starch + Iron)", price: 25 },
    { name: "Palazzo / Pant (Wash + Starch + Iron)", price: 30 },
    { name: "Kurthi (Wash + Starch + Iron)", price: 35 },
    { name: "Saree Iron", price: 45 },
    { name: "Work Blouse (Dry Wash)", price: 45 },
    { name: "Kurthi (Dry Wash)", price: 50 },
    { name: "Palazzo / Pant (Dry Wash)", price: 50 },
    { name: "Chuni (Dry Wash)", price: 50 },
    { name: "Saree (Wash + Iron)", price: 70 },
    { name: "Saree Rolling", price: 75 },
    { name: "Cotton Saree (Wash + Starch + Iron)", price: 115 },
    { name: "Fancy Saree / Fancy Silk Saree (Dry Wash)", price: 135 },              
    { name: "Patulanga, Voni, Blouse (Dry Wash)", price: 150 },
    { name: "Pure Silk Saree (Dry Wash)", price: 175 },
    { name: "Work Pattulanga, Voni, Blouse (Dry Wash)", price: 200 },
    { name: "Lehenga (Dry Wash)", price: 350 }
  ],

  // ----------------------------------------
  // MEN'S WEAR
  // ----------------------------------------
  "mens": [
    { name: "Only Iron", price: 10 },
    { name: "Steam Iron", price: 15 },
    { name: "Shirts (Wash Starch Iron)", price: 50 },
    { name: "Shirts (Dry Wash)", price: 70 },
    { name: "Tshirts (Dry Wash)", price: 70 },
    { name: "Shirts / Tshirt / Pants (Wash + Iron)", price: 20 },
    { name: "Shirt / Tshirt / Pant (Wash + Steam Iron)", price: 25 },
    { name: "Pants (Wash, Starch, Iron)", price: 45 },
    { name: "Pants (Dry Wash)", price: 70 },
    { name: "Kurtha (Wash, Starch, Iron)", price: 60 },
    { name: "Kurtha (Dry Wash)", price: 80 },
    { name: "Cotton Dothi / Pancha (Wash, Starch, Iron)", price: 50 },
    { name: "Pattu Dothi / Pancha (Dry Wash)", price: 75 },
    { name: "Khanduva (Wash, Starch, Iron)", price: 20},
    { name: "Long Khanduva (Wash, Starch, Iron)", price: 40},
    { name: "Khanduva (Dry Wash)", price: 50},
    { name: "Pattu Khanduva (Dry Wash)", price: 60},
    { name: "Blazer (Dry Wash)", price: 175},
    { name: "Sherwani (Dry Wash)", price: 275},
    { name: "Suit Set (Dry Wash)", price: 350},
  ],

  // ----------------------------------------
  // KIDS WEAR
  // ----------------------------------------
  "kids": [
    { name: "Kids wear (Wash + Iron)", price: 16 },
    { name: "Kids wear Iron", price: 8 },
    { name: "Kids wear steam iron", price: 12 },
    { name: "Kids wear (Wash + Steam Iron)", price: 18 },
    { name: "Party wear frock (Dry Wash)", price: 100 },
    { name: "Kids suit set (Dry Wash)", price: 150 },
    { name: "Patulanga, Voni, Blouse (Dry Wash)", price: 150 },
  ],

  // ----------------------------------------
  // HOME CARE
  // ----------------------------------------
  "home": [
    { name: "Single Bedsheet + 2 Pillow Covers Dry Washing", price: 115 },
    { name: "Double Bedsheet + 2 Pillow Covers Dry Wash", price: 150 },
    { name: "Sheer Curtains Dry Wash (Per Sqft)", price: 5 },
    { name: "Blackout Curtains Dry Wash (Per Sqft)", price: 10 },
    { name: "Quilt Single Dry Wash", price: 150 },
    { name: "Quilt Double Dry Wash", price: 290 }
  ]
};

// ==========================================
// RENDERING LOGIC (Do not touch)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Loop through all categories in our config
  for (const [category, items] of Object.entries(catalogPrices)) {
    
    // Find the matching card in the HTML
    const categoryCard = document.querySelector(`.pricing-card-detailed[data-category="${category}"]`);
    if (categoryCard) {
      const listContainer = categoryCard.querySelector('.pricing-items-list');
      listContainer.innerHTML = ''; // Clear it out
      
      // Generate the HTML for each item
      items.forEach(item => {
        const row = document.createElement('div');
        row.className = 'pricing-item-row';
        row.setAttribute('data-search', item.name.toLowerCase());
        
        row.innerHTML = `
          <span class="pricing-item-name">${item.name}</span>
          <span class="pricing-item-price">₹${item.price}</span>
        `;
        
        listContainer.appendChild(row);
      });
    }
  }

  // Trigger search re-filter just in case
  const searchInput = document.getElementById('priceSearch');
  if (searchInput && searchInput.value) {
    searchInput.dispatchEvent(new Event('keyup'));
  }
});
