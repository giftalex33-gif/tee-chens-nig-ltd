/* Base */
:root {
  --bg: #f3f7fb;
  --surface: #ffffff;
  --surface-soft: #f6f9fc;
  --surface-strong: #edf4ff;
  --ink: #14263f;
  --muted: #586c80;
  --line: rgba(20, 38, 63, 0.10);
  --brand: #113a5d;
  --brand-deep: #0d2e4e;
  --brand-2: #f7b944;
  --brand-3: #d8eb7d;
  --accent: #0d6f64;
  --success: #1a8e66;
  --shadow: 0 20px 50px rgba(17, 58, 93, 0.12);
  --shadow-soft: 0 10px 30px rgba(17, 58, 93, 0.07);
}

body.dark {
  --bg: #0d1725;
  --surface: #142838;
  --surface-soft: #1b2e3f;
  --surface-strong: #1d3550;
  --ink: #edf5ff;
  --muted: #a8bfd8;
  --line: rgba(190, 211, 231, 0.16);
  --brand: #7ec8ff;
  --brand-deep: #3e8fe0;
  --brand-2: #ffce5c;
  --brand-3: #d8eb7d;
  --accent: #7fead7;
  --success: #63d4a7;
  --shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  --shadow-soft: 0 10px 30px rgba(0, 0, 0, 0.2);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  background:
    radial-gradient(circle at top right, rgba(247, 185, 68, 0.15), transparent 26%),
    linear-gradient(180deg, var(--bg) 0%, #eef5fb 100%);
  color: var(--ink);
  line-height: 1.6;
}
body.dark {
  background: linear-gradient(180deg, var(--bg) 0%, #0f1d2d 100%);
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
main { padding-bottom: 72px; }

.container,
.content-wrap,
.section,
.hero,
.page-hero,
.cta-band,
.split-section,
.footer-inner,
.detail-grid {
  width: min(1200px, calc(100% - 32px));
  margin-left: auto;
  margin-right: auto;
}

.topbar {
  background: linear-gradient(135deg, var(--brand), var(--brand-deep));
  color: #edf5ff;
  font-size: 0.82rem;
  letter-spacing: 0.01em;
  padding: 10px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  text-align: center;
}
.topbar a { color: var(--brand-3); font-weight: 600; }

.header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}
body.dark .header {
  background: rgba(20, 40, 56, 0.82);
}
.header-inner {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  letter-spacing: 0.04em;
}
.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--brand-2), #f6d26d);
  color: var(--brand-deep);
  box-shadow: inset 0 0 0 1px rgba(13,46,78,0.08);
  font-size: 1.1rem;
}
.brand small {
  display: block;
  font-size: 0.56rem;
  letter-spacing: 0.18em;
  opacity: 0.8;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 14px;
  position: relative;
}
.nav > a,
.nav-dropdown > button {
  color: var(--ink);
  border: 0;
  background: none;
  padding: 10px 0;
  font-weight: 600;
  font-size: 0.92rem;
}
.nav > a:hover,
.nav-dropdown > button:hover,
.nav-dropdown.open > button {
  color: var(--brand);
}
.nav-dropdown {
  position: relative;
}
.nav-menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  min-width: 220px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: var(--shadow-soft);
  padding: 10px;
  display: none;
  z-index: 30;
}
body.dark .nav-menu {
  background: #162c40;
}
.nav-dropdown.open .nav-menu,
.nav-dropdown:hover .nav-menu {
  display: block;
}
.nav-menu a {
  display: block;
  padding: 10px 12px;
  border-radius: 10px;
  color: var(--ink);
}
.nav-menu a:hover {
  background: var(--surface-soft);
}
.nav-shop {
  background: linear-gradient(135deg, var(--brand), var(--brand-deep));
  color: #fff !important;
  padding: 10px 16px !important;
  border-radius: 999px;
  font-weight: 700;
  box-shadow: var(--shadow-soft);
}
.cart-link {
  padding: 8px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--ink);
  font-weight: 700;
}
.cart-link b {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  min-height: 20px;
  border-radius: 999px;
  background: var(--brand-2);
  color: var(--brand-deep);
  font-size: 0.8rem;
  margin-left: 6px;
}
.theme-toggle {
  width: 42px;
  height: 42px;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--ink);
  border-radius: 12px;
  font-size: 1rem;
}

.mega-strip {
  background: var(--surface-soft);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
}
.mega-strip::-webkit-scrollbar { display: none; }
.mega-strip a {
  display: inline-block;
  padding: 12px 16px;
  color: var(--muted);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hero {
  width: min(1200px, calc(100% - 32px));
  margin: 52px auto;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 28px;
  align-items: center;
}
.eyebrow {
  margin: 0 0 10px;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 800;
}
.hero h1,
.page-hero h1,
.section h2,
.split-copy h2,
.cta-band h2 {
  margin: 0 0 16px;
  line-height: 1.08;
  letter-spacing: -0.04em;
  color: var(--ink);
}
.hero h1 {
  font-size: clamp(2.7rem, 4vw, 5rem);
}
.hero-intro,
.lead,
.page-hero .lead,
.feature-card p,
.article-grid p,
.content p,
.notice,
.form-card p,
.contact-panel p,
.support-card p {
  color: var(--muted);
  font-size: 1.05rem;
}
.hero-actions {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}
.btn,
button.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 20px;
  border: 1px solid transparent;
  border-radius: 999px;
  font-weight: 700;
  transition: 0.2s ease;
}
.btn-lime {
  background: linear-gradient(135deg, var(--brand-3), #cfe665);
  color: var(--brand-deep);
}
.btn-dark {
  background: var(--brand-deep);
  color: #fff;
}
.btn-outline {
  border-color: rgba(17, 58, 93, 0.18);
  background: rgba(255,255,255,0.4);
  color: var(--ink);
}
.text-link {
  color: var(--brand);
  font-weight: 700;
}
.hero-proof {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}
.hero-proof div {
  background: rgba(255,255,255,0.6);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 14px 16px;
}
body.dark .hero-proof div,
body.dark .category-card,
body.dark .feature-card,
body.dark .testimonial-card,
body.dark .faq-item,
body.dark .product-card,
body.dark .filters,
body.dark .contact-panel,
body.dark .form-card,
body.dark .notice,
body.dark .support-card,
body.dark .info-card {
  background: rgba(23, 38, 52, 0.9);
}
.hero-proof strong,
.hero-proof small {
  display: block;
}
.hero-proof strong {
  font-size: 1.05rem;
}
.hero-proof small {
  color: var(--muted);
}
.hero-visual {
  position: relative;
}
.hero-visual img {
  height: min(640px, 72vh);
  width: 100%;
  object-fit: cover;
  border-radius: 28px;
  box-shadow: var(--shadow);
}
.floating-card {
  position: absolute;
  left: 24px;
  bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255,255,255,0.92);
  border: 1px solid rgba(17,58,93,0.08);
  border-radius: 18px;
  padding: 16px 18px;
  box-shadow: var(--shadow-soft);
}
.sun-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(247, 185, 68, 0.18);
  color: var(--brand-deep);
  font-weight: 800;
}
.floating-card strong,
.floating-card small {
  display: block;
}
.floating-card small { color: var(--muted); }
.hero-caption {
  position: absolute;
  right: 18px;
  bottom: -12px;
  background: var(--brand-deep);
  color: #edf5ff;
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.trust-strip {
  background: #0e2d4c;
  color: #edf4ff;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  align-items: center;
  gap: 0;
  text-align: center;
  padding: 18px 32px;
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.trust-strip i {
  display: block;
  width: 1px;
  height: 18px;
  background: rgba(255,255,255,0.28);
  margin: 0 auto;
}

.section {
  width: min(1200px, calc(100% - 32px));
  margin: 72px auto 0;
}
.section-heading {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: end;
  margin-bottom: 24px;
}
.center-heading { justify-content: center; text-align: center; }
.section h2 {
  font-size: clamp(2rem, 3vw, 3rem);
}
.lead {
  margin: 0;
}
.counter-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}
.counter-box {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow-soft);
  padding: 26px 18px;
  text-align: center;
}
.counter-box strong {
  display: block;
  font-size: clamp(2.1rem, 3vw, 3rem);
  color: var(--brand-deep);
  margin-bottom: 8px;
}
.counter-box span {
  color: var(--muted);
  font-weight: 600;
}
.category-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}
.category-row a {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.8);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 10px 16px;
  font-weight: 700;
  color: var(--ink);
}
.category-card-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}
.category-card {
  display: block;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow-soft);
  padding: 24px 20px;
  transition: transform 0.2s ease;
}
.category-card:hover {
  transform: translateY(-3px);
}
.category-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: rgba(17, 58, 93, 0.07);
  color: var(--brand);
  font-size: 1.5rem;
  margin-bottom: 14px;
}
.category-card h3 {
  margin: 0 0 8px;
  font-size: 1.3rem;
}
.category-card p {
  margin: 0;
  color: var(--muted);
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}
.product-card,
.feature-card,
.article-grid article,
.contact-panel,
.form-card,
.notice,
.support-card,
.info-card,
.testimonial-card,
.faq-item,
.filters {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow-soft);
}
.product-card {
  overflow: hidden;
}
.product-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}
.product-card-body {
  padding: 18px 18px 22px;
}
.product-meta {
  display: inline-block;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--brand);
}
.product-card h3,
.feature-card h3,
.article-grid h3,
.info-card h3,
.contact-panel h3,
.form-card h3,
.support-card h3 {
  margin: 10px 0 8px;
  font-size: 1.25rem;
}
.product-card p {
  color: var(--muted);
  margin: 0 0 16px;
}
.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.card-actions strong {
  font-size: 1.1rem;
}
.icon-btn {
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 12px;
  background: var(--brand-deep);
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
}
.product-tag {
  display: inline-block;
  border-radius: 999px;
  background: rgba(17, 58, 93, 0.08);
  color: var(--brand-deep);
  padding: 6px 10px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 16px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(17, 58, 93, 0.04);
  color: var(--ink);
  font-weight: 700;
}
.split-section {
  width: min(1200px, calc(100% - 32px));
  margin: 72px auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;
}
.split-image img {
  width: 100%;
  height: 560px;
  object-fit: cover;
  border-radius: 28px;
  box-shadow: var(--shadow);
}
.check-list {
  margin: 22px 0 28px;
  padding: 0;
  list-style: none;
}
.check-list li {
  position: relative;
  padding-left: 28px;
  margin-bottom: 12px;
  color: var(--ink);
  font-weight: 600;
}
.check-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--success);
}

.muted-section {
  background: rgba(255,255,255,0.35);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 64px 0 72px;
  margin-top: 72px;
}
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}
.feature-card {
  padding: 22px;
}
.feature-number {
  display: block;
  margin-bottom: 18px;
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--muted);
  font-weight: 800;
}
.feature-icon {
  width: 54px;
  height: 54px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: rgba(17,58,93,0.06);
  color: var(--brand);
  font-size: 1.5rem;
  margin-bottom: 16px;
}
.feature-card a {
  color: var(--brand);
  font-weight: 700;
}

.faq-list {
  display: grid;
  gap: 14px;
}
.faq-item {
  overflow: hidden;
}
.faq-question {
  width: 100%;
  border: 0;
  background: transparent;
  color: var(--ink);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  font-size: 1.05rem;
  font-weight: 700;
  text-align: left;
}
.faq-question span {
  display: inline-flex;
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(17, 58, 93, 0.07);
}
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s ease;
}
.faq-answer p {
  margin: 0;
  padding: 0 20px 18px;
  color: var(--muted);
}
.faq-item.active .faq-answer {
  max-height: 220px;
}
.faq-item.active .faq-question span {
  transform: rotate(45deg);
}

.testimonial-slider {
  position: relative;
}
.testimonial-track {
  position: relative;
  min-height: 220px;
}
.testimonial-card {
  display: none;
  padding: 26px 24px;
  min-height: 200px;
}
.testimonial-card.active {
  display: block;
}
.testimonial-card p {
  margin: 0 0 18px;
  font-size: 1.2rem;
  line-height: 1.7;
}
.testimonial-author {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.testimonial-author strong { color: var(--ink); }
.testimonial-author span { color: var(--muted); }
.testimonial-controls {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 10px;
}
.slider-btn {
  width: 42px;
  height: 42px;
  border: 1px solid var(--line);
  background: var(--surface);
  border-radius: 50%;
  font-size: 1.25rem;
  color: var(--ink);
}

.cta-band {
  width: min(1200px, calc(100% - 32px));
  margin: 72px auto 0;
  background: linear-gradient(135deg, #0f2f4c, #133d67 50%, #0d2e4e);
  color: #edf5ff;
  border-radius: 30px;
  padding: 36px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.cta-band h2,
.cta-band p,
.cta-band .eyebrow {
  color: #edf5ff;
}
.cta-band p { margin: 0; }

.article-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}
.article-grid article {
  overflow: hidden;
}
.article-grid img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}
.content {
  padding: 18px 18px 20px;
}
.article-meta {
  margin: 0;
  font-size: 0.72rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--brand);
  font-weight: 800;
}
.article-grid a {
  color: var(--brand);
  font-weight: 700;
}

.footer {
  background: #10263e;
  color: #dbe7f7;
  padding: 42px 0 20px;
  margin-top: 60px;
}
.detail-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 1fr;
  gap: 28px;
}
.footer a {
  color: #dbe7f7;
  display: inline-block;
  margin-bottom: 8px;
}
.footer h4 {
  color: #fff;
  margin: 0 0 12px;
}
.footer .brand {
  color: #fff;
}

.page-hero {
  width: min(1200px, calc(100% - 32px));
  margin: 52px auto 0;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 26px;
  align-items: center;
}
.page-hero h1 {
  font-size: clamp(2.4rem, 4vw, 4rem);
}
.page-hero img {
  width: 100%;
  height: min(480px, 54vw);
  object-fit: cover;
  border-radius: 24px;
  box-shadow: var(--shadow);
}
.contact-grid,
.shop-layout,
.content-wrap {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 24px;
}
.contact-panel,
.form-card,
.filters {
  padding: 24px;
}
.contact-panel h3,
.form-card h3,
.filters h3 {
  margin-top: 0;
}
.contact-list {
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
}
.contact-list li {
  margin-bottom: 14px;
}
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}
.field,
.filter-group input,
.filter-group select,
.search-input,
.shop-toolbar select,
input,
textarea,
select {
  width: 100%;
}
input,
textarea,
select {
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px 14px;
  background: #fff;
  color: var(--ink);
}
body.dark input,
body.dark textarea,
body.dark select,
body.dark .search-input,
body.dark .shop-toolbar select {
  background: #1a2d3d;
  color: var(--ink);
  border-color: var(--line);
}
textarea { min-height: 140px; resize: vertical; }
.form-actions {
  margin-top: 18px;
}
.notice {
  padding: 16px 18px;
}

.filters {
  background: rgba(255,255,255,0.6);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow-soft);
}
.filter-group {
  display: grid;
  gap: 10px;
  margin: 18px 0 20px;
}
.filter-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--ink);
}
.filter-group input { width: auto; }
.shop-toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 22px;
}
.search-input { flex: 1 1 260px; }
.shop-toolbar select {
  max-width: 220px;
}
.small-muted {
  color: var(--muted);
  font-size: 0.82rem;
}
.search-suggestions {
  display: none;
  gap: 8px;
  flex-wrap: wrap;
  margin: 0 0 18px;
}
.search-suggestions.visible {
  display: flex;
}
.search-suggestions button {
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--ink);
  border-radius: 999px;
  padding: 7px 12px;
  font-size: 0.82rem;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--surface);
}
.menu-toggle span {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--ink);
  margin: 0 auto;
}

.nav-open {
  display: flex !important;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  padding: 12px 0 0;
}

.quick-view-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(11, 18, 27, 0.6);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 20px;
}
.quick-view-backdrop.open { display: flex; }
.quick-view-modal {
  position: relative;
  width: min(760px, 100%);
  background: var(--surface);
  border-radius: 24px;
  box-shadow: var(--shadow);
  padding: 28px;
}
.quick-view-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 38px;
  height: 38px;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: var(--surface);
  font-size: 1.5rem;
  color: var(--ink);
}
.quick-view-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
}
.quick-view-content img {
  width: 100%;
  border-radius: 18px;
  height: 320px;
  object-fit: cover;
}
.quick-view-content h3 {
  margin: 0 0 10px;
  font-size: clamp(1.7rem, 2.2vw, 2.5rem);
}
.quick-view-content p {
  color: var(--muted);
}
.quick-view-meta {
  display: inline-block;
  margin-bottom: 10px;
  color: var(--brand);
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.7rem;
}
.quick-view-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.floating-cart {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 60;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, var(--brand), var(--brand-deep));
  color: #fff;
  border-radius: 999px;
  padding: 14px 18px;
  box-shadow: var(--shadow);
  font-weight: 700;
}
.floating-cart strong {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  font-size: 0.8rem;
}

@media (max-width: 980px) {
  .hero,
  .page-hero,
  .split-section,
  .contact-grid,
  .shop-layout,
  .detail-grid,
  .feature-grid,
  .article-grid,
  .product-grid,
  .category-card-grid,
  .counter-grid,
  .quick-view-content {
    grid-template-columns: 1fr 1fr;
  }

  .hero,
  .page-hero,
  .split-section,
  .contact-grid,
  .shop-layout {
    display: grid;
  }

  .nav {
    display: none;
    width: 100%;
    padding-bottom: 10px;
  }
  .menu-toggle { display: flex; }
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 72px;
    flex-wrap: wrap;
  }
  .nav-open {
    display: flex !important;
  }
}

@media (max-width: 720px) {
  .hero,
  .page-hero,
  .split-section,
  .contact-grid,
  .shop-layout,
  .detail-grid,
  .feature-grid,
  .article-grid,
  .product-grid,
  .category-card-grid,
  .form-grid,
  .hero-proof,
  .counter-grid,
  .quick-view-content {
    grid-template-columns: 1fr;
  }

  .section-heading,
  .cta-band {
    display: block;
  }

  .trust-strip {
    grid-template-columns: 1fr 1fr;
    row-gap: 8px;
  }

  .cta-band {
    padding: 28px 24px;
  }

  .nav-shop,
  .cart-link {
    width: 100%;
    text-align: center;
  }

  .floating-cart {
    right: 16px;
    bottom: 16px;
  }
}
