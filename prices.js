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
    { name: "Iron Only (No Wash, No Starch)", price: 10 },
    { name: "Steam Iron Only (No Wash, No Starch)", price: 15 },
    { name: "Saree (Iron)", price: 45 },
    { name: "Saree (Wash + Iron )", price: 70 },
    { name: "Saree Rolling", price: 75 },
    { name: "Cotton Saree Wash + Starch + Rolling", price: 115 },
    { name: "Fancy / Pattu Saree Dry Wash", price: 135 },
    { name: "Pure Silk Saree Dry Wash", price: 175 },
    { name: "Plain Blouse Dry Wash", price: 25 },
    { name: "Work Blouse Dry Wash", price: 45 },
    { name: "Kurti Wash + Starch + Iron", price: 35 },
    { name: "Palazzo / Pant Wash + Starch + Iron", price: 30 },
    { name: "Dupatta / Chunni Wash + Starch + Iron", price: 25 },
    { name: "Pattu Langa + Chunni + Blouse Dry Wash", price: 150 },
    { name: "Pattu Langa + Voni + Blouse Dry Wash", price: 200 },
    { name: "Work Langa + Blouse + Voni Dry Wash", price: 250 },
    { name: "Lehenga Dry Wash", price: 350 }
  ],

  // ----------------------------------------
  // MEN'S WEAR
  // ----------------------------------------
  "mens": [
    { name: "Iron Only (No Wash, No Starch)", price: 10 },
    { name: "Steam Iron Only (No Wash, No Starch)", price: 15 },
    { name: "T-Shirt Wash + Iron", price: 25 },
    { name: "Shirt Wash + Starch + Iron", price: 50 },
    { name: "T-Shirt / Shirt Dry Wash", price: 70 },
    { name: "Pant Wash + Iron", price: 25 },
    { name: "Pant Wash + Starch + Iron", price: 40 },
    { name: "Cotton Kanduva Wash + Starch + Iron", price: 20 },
    { name: "Silk Kanduva", price: 35 },
    { name: "Cotton Dothi Wash + Starch + Iron", price: 50 },
    { name: "Pattu Dothi", price: 70 },
    { name: "Mens Long Kurta Wash + Starch + Iron", price: 60 },
    { name: "Sherwani Dry Wash", price: 275 },
    { name: "Only Blazer Dry Wash", price: 175 },
    { name: "Suit Set Dry Wash", price: 350 }
  ],

  // ----------------------------------------
  // KIDS WEAR
  // ----------------------------------------
  "kids": [
    { name: "Kids Wear Iron", price: 8 },
    { name: "Kids Wear Steam Iron", price: 12 },
    { name: "Kids Partywear Dry Wash", price: 100 },
    { name: "Kids Patulanga, Chunni, Blouse Dry Wash", price: 150 }
  ],

  // ----------------------------------------
  // HOME CARE
  // ----------------------------------------
  "home": [
    { name: "Single Bedsheet + Covers Rolling", price: 115 },
    { name: "Double Bedsheet + Covers Rolling", price: 150 },
    { name: "Blanket Dry Wash", price: 150 },
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
