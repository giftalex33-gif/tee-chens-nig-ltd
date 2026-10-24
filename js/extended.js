window.TEE_PRODUCTS = [
  {
    id: "TC-PL-201",
    name: "Helios 450W Mono Panel",
    category: "Solar Panels",
    sku: "PL-201",
    price: "₦ 220,000",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    summary: "Efficient rooftop panel designed for residential and small commercial arrays.",
    features: ["High efficiency mono cells", "Durable glass surface", "Low-light performance", "Strong mounting compatibility"],
    accent: "Residential"
  },
  {
    id: "TC-IV-302",
    name: "VoltCore Hybrid Inverter",
    category: "Inverters",
    sku: "IV-302",
    price: "₦ 420,000",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    summary: "Smart inverter for battery-backed energy systems and resilient backup loads.",
    features: ["Hybrid power management", "Battery ready", "Pure sine wave", "Remote monitoring ready"],
    accent: "Backup"
  },
  {
    id: "TC-BT-401",
    name: "Battery Bank Pro 5.1 kWh",
    category: "Batteries",
    sku: "BT-401",
    price: "₦ 680,000",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    summary: "Stackable storage solution for dependable evening power and load support.",
    features: ["Long cycle life", "Lithium storage", "Expandable design", "Safe battery management"],
    accent: "Storage"
  },
  {
    id: "TC-KIT-501",
    name: "Home Solar Starter Kit",
    category: "Solar Kits",
    sku: "KIT-501",
    price: "₦ 310,000",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
    summary: "A ready-to-plan package for small homes and essential load backup.",
    features: ["Flexible package sizing", "Essential-load focus", "Cable and mounting support", "Easy expansion"],
    accent: "Starter"
  },
  {
    id: "TC-LI-601",
    name: "StreetGlow Solar Light",
    category: "Solar Lighting",
    sku: "LI-601",
    price: "₦ 95,000",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
    summary: "Outdoor lighting for pathways, entry points, and enhanced security zones.",
    features: ["Autonomous lighting", "Weather resistant", "Low maintenance", "Security-focused"],
    accent: "Outdoor"
  },
  {
    id: "TC-AC-701",
    name: "PV Mounting Kit",
    category: "Accessories",
    sku: "AC-701",
    price: "₦ 75,000",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
    summary: "Mounting and connection hardware for reliable rooftop and ground systems.",
    features: ["Corrosion resistant", "Flexible installation", "System ready hardware", "Secure fit"],
    accent: "Hardware"
  },
  {
    id: "TC-PL-202",
    name: "PeakSun 540W Panel",
    category: "Solar Panels",
    sku: "PL-202",
    price: "₦ 260,000",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
    summary: "Higher-output panel suitable for larger residential or commercial installs.",
    features: ["Higher wattage", "Optimized power output", "Long-term reliability", "Modern framing"],
    accent: "Commercial"
  },
  {
    id: "TC-IV-303",
    name: "GridFlex Pro Inverter",
    category: "Inverters",
    sku: "IV-303",
    price: "₦ 560,000",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    summary: "Reliable inverter platform for larger hybrid or smart-energy installations.",
    features: ["Smart load shifting", "Advanced protections", "Scalable design", "Low-noise operation"],
    accent: "System"
  }
];

window.compareProducts = function() {
  const list = JSON.parse(localStorage.getItem('tee_compare') || '[]');
  return window.TEE_PRODUCTS.filter((p) => list.includes(p.id));
};

window.wishlistProducts = function() {
  const list = JSON.parse(localStorage.getItem('tee_wishlist') || '[]');
  return window.TEE_PRODUCTS.filter((p) => list.includes(p.id));
};

window.cartItems = function() {
  const items = JSON.parse(localStorage.getItem('tee_cart') || '[]');
  return items;
};

window.addToCart = function(id) {
  const cart = window.cartItems();
  const exists = cart.find((item) => item.id === id);
  if (exists) {
    exists.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  localStorage.setItem('tee_cart', JSON.stringify(cart));
  document.dispatchEvent(new CustomEvent('cart:updated'));
};

window.toggleWishlist = function(id) {
  const items = JSON.parse(localStorage.getItem('tee_wishlist') || '[]');
  const idx = items.indexOf(id);
  if (idx >= 0) items.splice(idx, 1); else items.push(id);
  localStorage.setItem('tee_wishlist', JSON.stringify(items));
  document.dispatchEvent(new CustomEvent('wishlist:updated'));
};

window.toggleCompare = function(id) {
  const items = JSON.parse(localStorage.getItem('tee_compare') || '[]');
  const idx = items.indexOf(id);
  if (idx >= 0) items.splice(idx, 1); else items.push(id);
  localStorage.setItem('tee_compare', JSON.stringify(items));
  document.dispatchEvent(new CustomEvent('compare:updated'));
};

window.formatProductCard = function(product) {
  const wishlist = JSON.parse(localStorage.getItem('tee_wishlist') || '[]');
  const compare = JSON.parse(localStorage.getItem('tee_compare') || '[]');
  const isWish = wishlist.includes(product.id);
  const isCompare = compare.includes(product.id);

  return `
    <article class="product-card" data-id="${product.id}">
      <a href="product.html?id=${product.id}"><img src="${product.image}" alt="${product.name}"></a>
      <div class="product-card-body">
        <span class="product-meta">${product.category}</span>
        <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <p>${product.summary}</p>
        <div class="card-actions">
          <strong>${product.price}</strong>
          <div style="display:flex; gap:8px; align-items:center;">
            <button class="icon-btn" title="Save to wishlist" data-action="wishlist" data-id="${product.id}">${isWish ? '♥' : '♡'}</button>
            <button class="icon-btn" title="Compare" data-action="compare" data-id="${product.id}">${isCompare ? '✓' : '≣'}</button>
          </div>
        </div>
        <div style="margin-top:14px; display:flex; gap:10px;">
          <button class="btn btn-outline" type="button" data-open-quick-view data-id="${product.id}">Quick view</button>
          <button class="secondary-btn" data-action="add-cart" data-id="${product.id}">Request quote</button>
        </div>
      </div>
    </article>
  `;
};

window.renderFeaturedProducts = function(rootId, limit = 4) {
  const root = document.getElementById(rootId);
  if (!root) return;
  root.innerHTML = window.TEE_PRODUCTS.slice(0, limit).map(window.formatProductCard).join('');
};

window.renderShopProducts = function(rootId, filter = {}) {
  const root = document.getElementById(rootId);
  if (!root) return;

  let items = [...window.TEE_PRODUCTS];
  if (filter.category && filter.category.length) {
    items = items.filter((product) => filter.category.includes(product.category));
  }
  if (filter.search) {
    const q = filter.search.toLowerCase();
    items = items.filter((product) => {
      return product.name.toLowerCase().includes(q) || product.category.toLowerCase().includes(q) || product.summary.toLowerCase().includes(q);
    });
  }

  root.innerHTML = items.map(window.formatProductCard).join('') || '<div class="notice">No products match your current filters.</div>';
  const count = document.getElementById('result-count');
  if (count) count.textContent = `${items.length} item${items.length === 1 ? '' : 's'}`;
};

window.renderProductDetail = function() {
  const root = document.getElementById('product-detail');
  if (!root) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || window.TEE_PRODUCTS[0].id;
  const product = window.TEE_PRODUCTS.find((item) => item.id === id) || window.TEE_PRODUCTS[0];

  root.innerHTML = `
    <div class="product-detail-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div>
      <span class="product-meta">${product.category}</span>
      <h1>${product.name}</h1>
      <p class="lead">${product.summary}</p>
      <div class="hero-actions" style="margin-top:16px; margin-bottom:18px;">
        <button class="btn btn-lime" data-action="add-cart" data-id="${product.id}">Request quote</button>
        <button class="secondary-btn" data-action="wishlist" data-id="${product.id}">Save</button>
        <button class="secondary-btn" data-action="compare" data-id="${product.id}">Compare</button>
      </div>
      <ul class="details-list">
        ${product.features.map((f) => `<li>${f}</li>`).join('')}
      </ul>
      <div class="notice">
        Product information is for guidance only. Confirm exact specifications, stock, compatibility and warranty with the Tee Chens team before purchase.
      </div>
    </div>
  `;
};

window.renderRelatedProducts = function(rootId) {
  const root = document.getElementById(rootId);
  if (!root) return;
  const current = new URLSearchParams(window.location.search).get('id');
  const related = window.TEE_PRODUCTS.filter((p) => p.id !== current).slice(0, 4);
  root.innerHTML = related.map(window.formatProductCard).join('');
};

window.renderCart = function() {
  const root = document.getElementById('cart-content');
  if (!root) return;
  const cart = window.cartItems();
  if (!cart.length) {
    root.innerHTML = `
      <div class="notice">Your enquiry basket is empty. <a class="text-link" href="shop.html">Browse products</a></div>
    `;
    return;
  }

  const items = cart.map((entry) => {
    const product = window.TEE_PRODUCTS.find((p) => p.id === entry.id);
    if (!product) return null;
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h3>${product.name}</h3>
          <p class="small-muted">${product.category}</p>
          <p class="small-muted">${product.summary}</p>
        </div>
        <div>
          <button class="secondary-btn" data-cart-remove="${product.id}">Remove</button>
        </div>
      </div>
    `;
  }).filter(Boolean).join('');

  root.innerHTML = `
    <div class="cart-layout">
      <div class="contact-panel">
        <h2>Enquiry basket</h2>
        ${items}
      </div>
      <aside class="summary-card">
        <h3>Summary</h3>
        <div class="summary-line"><span>Items</span><strong>${cart.length}</strong></div>
        <div class="summary-line total"><span>Status</span><span>Quote requested</span></div>
        <div style="margin-top:16px; display:grid; gap:10px;">
          <a class="btn" href="checkout.html">Proceed to checkout</a>
          <a class="btn btn-outline" href="shop.html">Continue shopping</a>
        </div>
      </aside>
    </div>
  `;
};

window.renderWishlist = function() {
  const root = document.getElementById('wishlist-products');
  if (!root) return;
  const items = window.wishlistProducts();
  root.innerHTML = items.length ? items.map(window.formatProductCard).join('') : '<div class="notice">No saved products yet.</div>';
};

window.renderCompare = function() {
  const root = document.getElementById('compare-content');
  if (!root) return;
  const items = window.compareProducts();
  if (!items.length) {
    root.innerHTML = '<div class="notice">No products selected for comparison yet.</div>';
    return;
  }

  root.innerHTML = `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            ${items.map((p) => `<th>${p.name}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          <tr><th>Category</th>${items.map((p) => `<td>${p.category}</td>`).join('')}</tr>
          <tr><th>Summary</th>${items.map((p) => `<td>${p.summary}</td>`).join('')}</tr>
          <tr><th>Best for</th>${items.map((p) => `<td>${p.accent}</td>`).join('')}</tr>
        </tbody>
      </table>
    </div>
  `;
};

window.renderAdmin = function() {
  const panel = document.getElementById('admin-panel');
  if (!panel) return;

  const orders = JSON.parse(localStorage.getItem('tee_orders') || '[]');
  const enquiries = JSON.parse(localStorage.getItem('tee_contact_enquiries') || '[]');
  const renderOrders = orders.map((order) => `
    <tr>
      <td>${order.reference}</td>
      <td>${order.name || 'Unknown'}</td>
      <td>${order.status || 'Quote requested'}</td>
      <td>${order.date || new Date().toLocaleDateString()}</td>
    </tr>
  `).join('') || '<tr><td colspan="4">No orders yet.</td></tr>';

  const renderEnquiries = enquiries.map((enquiry) => `
    <tr>
      <td>${enquiry.name || 'Unknown'}</td>
      <td>${enquiry.email || '—'}</td>
      <td>${enquiry.subject || 'General enquiry'}</td>
      <td>${enquiry.message || '—'}</td>
    </tr>
  `).join('') || '<tr><td colspan="4">No enquiries yet.</td></tr>';

  document.getElementById('admin-orders').innerHTML = renderOrders;
  document.getElementById('admin-enquiries').innerHTML = renderEnquiries;
  document.getElementById('admin-stats').innerHTML = `
    <div class="stat"><span>Orders</span><strong>${orders.length}</strong></div>
    <div class="stat"><span>Enquiries</span><strong>${enquiries.length}</strong></div>
    <div class="stat"><span>Products</span><strong>${window.TEE_PRODUCTS.length}</strong></div>
  `;
};

window.setupGlobalInteractions = function() {
  document.addEventListener('click', (event) => {
    const actionEl = event.target.closest('[data-action]');
    if (actionEl) {
      const id = actionEl.getAttribute('data-id');
      const action = actionEl.getAttribute('data-action');
      if (action === 'add-cart') window.addToCart(id);
      if (action === 'wishlist') window.toggleWishlist(id);
      if (action === 'compare') window.toggleCompare(id);
    }

    const removeBtn = event.target.closest('[data-cart-remove]');
    if (removeBtn) {
      const id = removeBtn.getAttribute('data-cart-remove');
      const cart = window.cartItems().filter((item) => item.id !== id);
      localStorage.setItem('tee_cart', JSON.stringify(cart));
      document.dispatchEvent(new CustomEvent('cart:updated'));
    }
  });

  document.addEventListener('cart:updated', () => {
    const count = document.querySelectorAll('#cart-count');
    const items = window.cartItems();
    const total = items.reduce((sum, item) => sum + item.qty, 0);
    count.forEach((el) => el.textContent = total);
    const floating = document.getElementById('floating-cart-count');
    if (floating) floating.textContent = total;
    if (document.getElementById('cart-content')) window.renderCart();
  });

  document.addEventListener('wishlist:updated', () => {
    if (document.getElementById('wishlist-products')) window.renderWishlist();
    if (document.getElementById('product-detail')) window.renderProductDetail();
  });

  document.addEventListener('compare:updated', () => {
    if (document.getElementById('compare-content')) window.renderCompare();
    if (document.getElementById('product-detail')) window.renderProductDetail();
  });
};

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    window.setupGlobalInteractions();
    if (document.getElementById('cart-count')) {
      document.dispatchEvent(new CustomEvent('cart:updated'));
    }
  });
}










































































































































































































































































































































































































































































































































































































































