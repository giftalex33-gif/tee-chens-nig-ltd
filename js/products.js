document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav a[href], .nav button');
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href !== '#' && href === path) link.setAttribute('aria-current', 'page');
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
      const opened = nav.classList.contains('nav-open');
      menuToggle.setAttribute('aria-expanded', String(opened));
    });
  }

  const yearTarget = document.getElementById('year');
  if (yearTarget) yearTarget.textContent = new Date().getFullYear();

  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('tee-theme');
  if (savedTheme === 'dark') document.body.classList.add('dark');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark');
      localStorage.setItem('tee-theme', isDark ? 'dark' : 'light');
      themeToggle.textContent = isDark ? '☾' : '☀';
    });
    themeToggle.textContent = document.body.classList.contains('dark') ? '☾' : '☀';
  }

  const counters = document.querySelectorAll('[data-counter]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.counter || 0);
      const suffix = target >= 100 ? '%' : '';
      let count = 0;
      const step = Math.max(1, Math.ceil(target / 40));
      const timer = setInterval(() => {
        count += step;
        if (count >= target) {
          el.textContent = `${target}${suffix}`;
          clearInterval(timer);
          return;
        }
        el.textContent = `${count}${suffix}`;
      }, 25);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach((counter) => counterObserver.observe(counter));

  document.querySelectorAll('.faq-item').forEach((item) => {
    const button = item.querySelector('.faq-question');
    if (!button) return;
    button.addEventListener('click', () => {
      const parent = button.closest('.faq-item');
      parent.classList.toggle('active');
    });
  });

  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const sliderButtons = document.querySelectorAll('[data-slider]');
  if (testimonialCards.length) {
    let activeIndex = 0;
    const goToSlide = (index) => {
      activeIndex = (index + testimonialCards.length) % testimonialCards.length;
      testimonialCards.forEach((card, i) => card.classList.toggle('active', i === activeIndex));
    };
    sliderButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const direction = btn.dataset.slider === 'next' ? 1 : -1;
        goToSlide(activeIndex + direction);
      });
    });
    setInterval(() => goToSlide(activeIndex + 1), 5000);
  }

  const quickViewBackdrop = document.getElementById('quick-view-backdrop');
  const quickViewContent = document.getElementById('quick-view-content');
  const quickViewClose = document.getElementById('quick-view-close');
  const openQuickView = (productId) => {
    const product = window.TEE_PRODUCTS.find((item) => item.id === productId);
    if (!product || !quickViewContent) return;
    quickViewContent.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div>
        <span class="quick-view-meta">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.summary}</p>
        <ul class="check-list">
          ${product.features.map((feature) => `<li>${feature}</li>`).join('')}
        </ul>
        <div class="quick-view-actions">
          <button class="btn btn-lime" data-action="add-cart" data-id="${product.id}">Add to enquiry</button>
          <a class="btn btn-outline" href="product.html?id=${product.id}">View details</a>
        </div>
      </div>
    `;
    if (quickViewBackdrop) quickViewBackdrop.classList.add('open');
  };

  document.addEventListener('click', (event) => {
    const quickViewTarget = event.target.closest('[data-open-quick-view]');
    if (quickViewTarget) {
      const productId = quickViewTarget.getAttribute('data-id');
      openQuickView(productId);
      return;
    }

    if (event.target === quickViewBackdrop || event.target === quickViewClose) {
      if (quickViewBackdrop) quickViewBackdrop.classList.remove('open');
    }

    const navButton = event.target.closest('.nav-dropdown > button');
    if (navButton) {
      const parent = navButton.parentElement;
      parent.classList.toggle('open');
    }

    const outside = event.target.closest('.nav-dropdown');
    if (!outside) document.querySelectorAll('.nav-dropdown').forEach((el) => el.classList.remove('open'));
  });

  const searchInput = document.getElementById('product-search');
  const searchSuggestions = document.getElementById('search-suggestions');
  if (searchInput && searchSuggestions) {
    const buildSuggestions = (value) => {
      const query = value.trim().toLowerCase();
      if (!query) {
        searchSuggestions.classList.remove('visible');
        searchSuggestions.innerHTML = '';
        return;
      }
      const matches = window.TEE_PRODUCTS.filter((product) => {
        const text = `${product.name} ${product.category} ${product.summary}`.toLowerCase();
        return text.includes(query);
      }).slice(0, 5);

      if (!matches.length) {
        searchSuggestions.classList.remove('visible');
        searchSuggestions.innerHTML = '';
        return;
      }

      searchSuggestions.innerHTML = matches.map((product) => `
        <button type="button" data-suggestion="${product.name}">${product.name}</button>
      `).join('');
      searchSuggestions.classList.add('visible');
      searchSuggestions.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', () => {
          searchInput.value = button.dataset.suggestion;
          searchSuggestions.classList.remove('visible');
          const sort = document.getElementById('sort-products');
          const filter = { search: button.dataset.suggestion, category: [] };
          if (sort && sort.value === 'featured') {
            window.renderShopProducts('shop-products', filter);
          }
          if (searchInput) searchInput.dispatchEvent(new Event('input'));
        });
      });
    };

    searchInput.addEventListener('input', (event) => {
      buildSuggestions(event.target.value);
    });
  }

  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const firstName = checkoutForm.querySelector('[name="firstName"]');
      const lastName = checkoutForm.querySelector('[name="lastName"]');
      const email = checkoutForm.querySelector('[name="email"]');
      const message = checkoutForm.querySelector('#checkout-message');
      const invalid = [firstName, lastName, email].some((field) => !field || !field.value.trim());
      if (invalid) {
        if (message) message.textContent = 'Please complete the required contact details before submitting.';
        return;
      }
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
      const name = contactForm.querySelector('[name="name"]');
      const email = contactForm.querySelector('[name="email"]');
      const messageField = contactForm.querySelector('[name="message"]');
      const status = document.getElementById('contact-status');

      if (!name || !email || !messageField || !name.value.trim() || !email.value.trim() || !messageField.value.trim()) {
        if (status) status.textContent = 'Please complete your name, email and message before submitting.';
        return;
      }

      const values = Object.fromEntries(new FormData(contactForm));
      const list = JSON.parse(localStorage.getItem('tee_contact_enquiries') || '[]');
      list.push(values);
      localStorage.setItem('tee_contact_enquiries', JSON.stringify(list));
      if (status) status.textContent = 'Your enquiry was saved locally in this browser.';
      contactForm.reset();
    });
  }

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

  const floatingCount = document.getElementById('floating-cart-count');
  document.addEventListener('cart:updated', () => {
    const count = document.querySelectorAll('#cart-count');
    const items = window.cartItems();
    const total = items.reduce((sum, item) => sum + item.qty, 0);
    count.forEach((el) => el.textContent = total);
    if (floatingCount) floatingCount.textContent = total;
    if (document.getElementById('cart-content')) window.renderCart();
  });

  if (document.getElementById('cart-count')) {
    document.dispatchEvent(new CustomEvent('cart:updated'));
  }
});
