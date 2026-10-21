/* Base */
:root {
  --bg: #eef7ff;
  --surface: #ffffff;
  --surface-soft: #f4fbff;
  --surface-strong: #eaf6ff;
  --ink: #14324a;
  --muted: #526e86;
  --line: rgba(20, 50, 74, 0.12);
  --brand: #0d5ea6;
  --brand-deep: #083d6b;
  --brand-2: #1ca67a;
  --brand-3: #bfeee0;
  --accent: #0f7ec8;
  --success: #17926d;
  --shadow: 0 20px 50px rgba(13, 94, 166, 0.12);
  --shadow-soft: 0 10px 30px rgba(13, 94, 166, 0.08);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  background:
    radial-gradient(circle at top right, rgba(28, 166, 122, 0.12), transparent 26%),
    linear-gradient(180deg, #f5fbff 0%, #edf7ff 100%);
  color: var(--ink);
  line-height: 1.6;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button, input, select, textarea {
  font: inherit;
}
button { cursor: pointer; }

main { padding-bottom: 72px; }

.container,
.content-wrap,
.section,
.hero,
.page-hero,
.cta-band,
.split-section,
.footer-inner {
  width: min(1200px, calc(100% - 32px));
  margin-left: auto;
  margin-right: auto;
}

.topbar {
  background: linear-gradient(135deg, var(--brand), var(--brand-deep));
  color: #edf6ff;
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
.topbar a {
  color: var(--brand-3);
  font-weight: 600;
}

.header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
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
  border-radius: 14px;
  background: linear-gradient(135deg, var(--brand-2), var(--brand));
  color: #fff;
  font-weight: 900;
  box-shadow: var(--shadow-soft);
}
.brand small {
  display: block;
  font-size: 0.54em;
  letter-spacing: 0.13em;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 18px;
}
.nav a,
.nav button {
  background: none;
  border: none;
  color: var(--ink);
  font-weight: 700;
  letter-spacing: 0.01em;
  cursor: pointer;
  font-size: 1.05rem;
}
.nav a:hover,
.nav button:hover,
.text-link:hover,
.footer a:hover {
  opacity: 0.9;
}
.nav-dropdown { position: relative; }
.nav-dropdown > button {
  padding: 10px 0;
}
.nav-menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  min-width: 230px;
  background: rgba(255,255,255,0.98);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 12px;
  box-shadow: var(--shadow);
  display: none;
}
.nav-dropdown.open .nav-menu { display: grid; }
.nav-menu a {
  padding: 9px 10px;
  border-radius: 10px;
  font-weight: 600;
}
.nav-menu a:hover {
  background: var(--surface-soft);
}

.nav-shop {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 999px;
  background: #edf1f4;
  color: var(--ink);
  box-shadow: inset 0 0 0 1px rgba(20, 50, 74, 0.08);
  font-weight: 800;
}
.cart-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: #f8fafc;
  font-weight: 700;
}
.cart-link b {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--brand);
  color: white;
  font-size: 0.76rem;
}

.menu-toggle {
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  border-radius: 12px;
  background: #f1f3f5;
  border: 1px solid rgba(20, 50, 74, 0.12);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.4);
}
.menu-toggle span {
  display: block;
  width: 18px;
  height: 2px;
  border-radius: 999px;
  background: var(--ink);
}

.mega-strip {
  background: linear-gradient(180deg, var(--brand) 0%, var(--brand-deep) 100%);
  color: #e9f8ff;
  padding: 14px 18px;
  display: flex;
  gap: 16px;
  white-space: nowrap;
  overflow-x: auto;
  scrollbar-width: none;
}
.mega-strip::-webkit-scrollbar { display: none; }

/* continue with rest of styles unchanged */
