document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav a[href], .nav button');
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href !== '#' && href === path) link.setAttribute('aria-current', 'page');
  });

  const yearTarget = document.getElementById('year');
  if (yearTarget) yearTarget.textContent = new Date().getFullYear();

  const search = document.getElementById('product-search');
  const sort = document.getElementById('sort-products');
  const categoryFilters = document.querySelectorAll('input[name="category"]');
  const clearButton = document.getElementById('clear-filters');

  if (search || sort || categoryFilters.length) {
    const applyShopFilters = () => {
      const selected = Array.from(categoryFilters).filter((cb) => cb.checked).map((cb) => cb.value);
      let items = [...window.TEE_PRODUCTS];
      if (selected.length) items = items.filter((p) => selected.includes(p.category));
      if (search && search.value) {
        const q = search.value.toLowerCase();
        items = items.filter((p) => p.name.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
      }
      if (sort && sort.value === 'name') items.sort((a, b) => a.name.localeCompare(b.name));
      if (sort && sort.value === 'category') items.sort((a, b) => a.category.localeCompare(b.category));
      const root = document.getElementById('shop-products');
      if (root) root.innerHTML = items.map(window.formatProductCard).join('') || '<div class="notice">No products match your current filters.</div>';
      const count = document.getElementById('result-count');
      if (count) count.textContent = `${items.length} item${items.length === 1 ? '' : 's'}`;
    };

    if (search) search.addEventListener('input', applyShopFilters);
    if (sort) sort.addEventListener('change', applyShopFilters);
    categoryFilters.forEach((checkbox) => checkbox.addEventListener('change', applyShopFilters));
    if (clearButton) {
      clearButton.addEventListener('click', () => {
        categoryFilters.forEach((cb) => cb.checked = false);
        if (search) search.value = '';
        if (sort) sort.value = 'featured';
        applyShopFilters();
      });
    }
  }

  if (document.getElementById('featured-products')) {
    window.renderFeaturedProducts('featured-products', 4);
  }
  if (document.getElementById('shop-products')) {
    window.renderShopProducts('shop-products');
  }
  if (document.getElementById('product-detail')) {
    window.renderProductDetail();
  }
  if (document.getElementById('related-products')) {
    window.renderRelatedProducts('related-products');
  }
  if (document.getElementById('cart-content')) {
    window.renderCart();
  }
  if (document.getElementById('wishlist-products')) {
    window.renderWishlist();
  }
  if (document.getElementById('compare-content')) {
    window.renderCompare();
  }
  if (document.getElementById('admin-panel')) {
    window.renderAdmin();
  }

  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(checkoutForm);
      const order = {
        reference: `TC-${Date.now().toString().slice(-8)}`,
        name: `${formData.get('firstName')} ${formData.get('lastName')}`,
        status: 'Quote requested',
        date: new Date().toLocaleDateString(),
        items: JSON.parse(localStorage.getItem('tee_cart') || '[]')
      };
      const orders = JSON.parse(localStorage.getItem('tee_orders') || '[]');
      orders.push(order);
      localStorage.setItem('tee_orders', JSON.stringify(orders));
      localStorage.removeItem('tee_cart');
      document.dispatchEvent(new CustomEvent('cart:updated'));
      const message = document.getElementById('checkout-message');
      if (message) {
        message.textContent = `Demo order saved. Reference: ${order.reference}`;
      }
      checkoutForm.reset();
      setTimeout(() => {
        window.location.href = 'order-success.html';
      }, 450);
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const values = Object.fromEntries(new FormData(contactForm));
      const list = JSON.parse(localStorage.getItem('tee_contact_enquiries') || '[]');
      list.push(values);
      localStorage.setItem('tee_contact_enquiries', JSON.stringify(list));
      const status = document.getElementById('contact-status');
      if (status) status.textContent = 'Your enquiry was saved locally in this browser.';
      contactForm.reset();
    });
  }

  const supportForm = document.getElementById('support-form');
  if (supportForm) {
    supportForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const list = JSON.parse(localStorage.getItem('tee_support_requests') || '[]');
      list.push(Object.fromEntries(new FormData(supportForm)));
      localStorage.setItem('tee_support_requests', JSON.stringify(list));
      const status = document.getElementById('support-status');
      if (status) status.textContent = 'Support request saved locally.';
      supportForm.reset();
    });
  }

  const accountForm = document.getElementById('account-form');
  if (accountForm) {
    accountForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const profile = Object.fromEntries(new FormData(accountForm));
      localStorage.setItem('tee_account_profile', JSON.stringify(profile));
      const status = document.getElementById('account-status');
      if (status) status.textContent = 'Demo profile saved.';
      const target = document.getElementById('account-profile');
      if (target) target.innerHTML = `<strong>${profile.name}</strong><br>${profile.email}`;
    });
  }

  const adminLoginForm = document.getElementById('admin-login-form');
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.querySelector('input[name="username"]').value;
      const password = document.querySelector('input[name="password"]').value;
      const status = document.getElementById('admin-login-status');
      if (username === 'admin' && password === 'teechen-demo') {
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
        window.renderAdmin();
      } else {
        if (status) status.textContent = 'Invalid demo credentials.';
      }
    });
  }

  const orderSuccess = document.getElementById('order-success');
  if (orderSuccess) {
    const ref = `TC-${Date.now().toString().slice(-8)}`;
    orderSuccess.innerHTML = `
      <div class="contact-panel" style="max-width:760px; margin:50px auto;">
        <p class="eyebrow">Order confirmed</p>
        <h1>Thanks for your enquiry.</h1>
        <p>Your quote request has been saved locally for this demo store.</p>
        <p><strong>Reference:</strong> ${ref}</p>
        <a class="btn btn-lime" href="shop.html">Continue shopping</a>
      </div>
    `;
  }

  const trackForm = document.getElementById('track-form');
  if (trackForm) {
    trackForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const reference = new FormData(trackForm).get('reference');
      const orders = JSON.parse(localStorage.getItem('tee_orders') || '[]');
      const order = orders.find((item) => item.reference === reference);
      const result = document.getElementById('track-result');
      if (order) {
        result.innerHTML = `
          <div class="notice">
            <strong>Order found:</strong> ${order.reference}<br>
            Customer: ${order.name}<br>
            Status: ${order.status}<br>
            Date: ${order.date}
          </div>
        `;
      } else {
        result.innerHTML = '<div class="notice-warning">No demo order matched that reference.</div>';
      }
    });
  }
});
