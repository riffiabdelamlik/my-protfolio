const MENU = [
  { title: "Signature", items: [
    { id: "mansaf", name: "The Signature Mansaf", price: 32,
      desc: "Slow-cooked lamb over golden rice, toasted pine nuts, rich aged jameed yogurt sauce.",
      image: "./image/masafe.jpg" },
    { id: "mandi", name: "Smoky Mandi", price: 26,
      desc: "Chicken steeped in woodsmoke, resting on saffron-laced rice crackling with whole spices.",
      image: "./image/mandy.jpg"  },
    { id: "grill", name: "The Grill Platter", price: 48,
      desc: "A brutalist spread of charred lamb chops, blistered tomatoes, and fire-kissed skewers.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80" }
  ]},
  { title: "Authentic Sides", items: [
    { id: "mutabbal", name: "Flame-Roasted Mutabbal", price: 12,
      desc: "Charred eggplant mashed with sesame tahini, studded with pomegranate.",
      image: "./image/flame.jpg"  },
    { id: "jameed", name: "Traditional Jameed Soup", price: 9,
      desc: "A dark, intense, salty-sour broth that speaks of desert winds.",
      image: "./image/soup.jpg"  },
    { id: "fries", name: "Hand-Cut Spiced Fries", price: 8,
      desc: "Thick rustic cuts dusted with crimson sumac and wild za'atar.",
      image: "./image/patata.jpg"  }
  ]},
  { title: "Desserts", items: [
    { id: "kunafa", name: "Kunafa", price: 14,
      desc: "Melted cheese under a shattered golden crust, drowned in hot syrup.",
      image: "./image/kenafa.jpg"  },
    { id: "dates-cake", name: "Crisp Dates Cake with Toffee", price: 13,
      desc: "Caramelized dates beneath a crackling edge, flooded with butterscotch.",
      image: "./image/cake.jpg"  }
  ]}
];

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const fmt = (n) => `$${n.toFixed(2)}`;

const CART_KEY = "mansaf-cart";
let cart = loadCart();

function loadCart() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; } }
function saveCart() { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch {} }
function findItem(id) { for (const c of MENU) { const f = c.items.find(i => i.id === id); if (f) return f; } return null; }
function cartCount() { return cart.reduce((s,l) => s + l.qty, 0); }
function cartTotal() { return cart.reduce((s,l) => s + l.qty * l.price, 0); }

function addToCart(id) {
  const item = findItem(id); if (!item) return;
  const ex = cart.find(l => l.id === id);
  if (ex) ex.qty += 1; else cart.push({ ...item, qty: 1 });
  saveCart(); renderCart(); flashAddButton(id);
}
function changeQty(id, d) {
  const l = cart.find(x => x.id === id); if (!l) return;
  l.qty += d;
  if (l.qty <= 0) cart = cart.filter(x => x.id !== id);
  saveCart(); renderCart();
}
function removeFromCart(id) { cart = cart.filter(l => l.id !== id); saveCart(); renderCart(); }
function clearCart() { cart = []; saveCart(); renderCart(); }
window.changeQty = changeQty; window.removeFromCart = removeFromCart;

function renderMenu() {
  $("#menuRoot").innerHTML = MENU.map((cat, idx) => `
    <div class="category">
      <div class="category-header">
        <h3>${cat.title}</h3><span class="num">0${idx + 1}</span>
      </div>
      <div class="dish-grid">
        ${cat.items.map(item => `
          <article class="dish reveal" data-id="${item.id}">
            <div class="dish-image"><img src="${item.image}" alt="${item.name}" loading="lazy"/></div>
            <div class="dish-row">
              <h4 class="dish-name">${item.name}</h4>
              <span class="dish-price">${fmt(item.price)}</span>
            </div>
            <p class="dish-desc">${item.desc}</p>
            <button class="btn btn-add add-btn" data-id="${item.id}">+ Add to Order</button>
          </article>`).join("")}
      </div>
    </div>`).join("");
  $$(".add-btn").forEach(b => b.addEventListener("click", () => addToCart(b.dataset.id)));
  observeReveals();
}

function flashAddButton(id) {
  const btn = document.querySelector(`.add-btn[data-id="${id}"]`); if (!btn) return;
  const o = btn.innerHTML;
  btn.innerHTML = "✓ Added"; btn.style.background = "var(--accent)"; btn.style.color = "var(--bg)";
  setTimeout(() => { btn.innerHTML = o; btn.style.background = ""; btn.style.color = ""; }, 1100);
}

function renderCart() {
  const count = cartCount(), total = cartTotal();
  const badge = $("#cartBadge");
  if (count > 0) { badge.textContent = count; badge.classList.remove("hidden"); }
  else badge.classList.add("hidden");

  $("#cartSubtitle").textContent = count === 0
    ? "Your cart is empty — start with a signature dish."
    : `${count} item${count > 1 ? "s" : ""} ready for the fire.`;

  const body = $("#cartBody"), footer = $("#cartFooter");
  if (cart.length === 0) {
    body.innerHTML = `<div class="empty-cart"><p>Browse the menu to begin building your feast.</p>
      <button class="btn btn-primary" onclick="closeCart(); scrollToId('menu');">Browse Menu</button></div>`;
    footer.classList.add("hidden"); return;
  }
  body.innerHTML = cart.map(l => `
    <div class="cart-line">
      <img src="${l.image}" alt="${l.name}"/>
      <div class="cart-line-info">
        <div class="cart-line-top">
          <span class="cart-line-name">${l.name}</span>
          <button class="remove-btn" onclick="removeFromCart('${l.id}')">✕</button>
        </div>
        <div class="cart-line-price">${fmt(l.price)}</div>
        <div class="cart-line-bottom">
          <div class="qty">
            <button onclick="changeQty('${l.id}', -1)">−</button>
            <span>${l.qty}</span>
            <button onclick="changeQty('${l.id}', 1)">+</button>
          </div>
          <span>${fmt(l.price * l.qty)}</span>
        </div>
      </div>
    </div>`).join("");
  $("#cartTotal").textContent = fmt(total);
  footer.classList.remove("hidden");
}

function openCart() { $("#cartDrawer").classList.add("open"); $("#cartBackdrop").classList.remove("hidden"); document.body.style.overflow = "hidden"; }
function closeCart() { $("#cartDrawer").classList.remove("open"); $("#cartBackdrop").classList.add("hidden"); document.body.style.overflow = ""; }
window.closeCart = closeCart;

function openCheckout() {
  if (cart.length === 0) return;
  $("#checkoutItems").innerHTML = cart.map(l => `<li><span>${l.qty} × ${l.name}</span><span>${fmt(l.qty * l.price)}</span></li>`).join("");
  $("#checkoutTotal").textContent = fmt(cartTotal());
  $("#checkoutForm").classList.remove("hidden");
  $("#checkoutSuccess").classList.add("hidden");
  $("#checkoutModal").classList.add("open");
  $("#checkoutBackdrop").classList.remove("hidden");
}
function closeCheckout() { $("#checkoutModal").classList.remove("open"); $("#checkoutBackdrop").classList.add("hidden"); document.body.style.overflow = ""; }

function scrollToId(id) { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }
window.scrollToId = scrollToId;

document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (link) {
    const id = link.getAttribute("href").slice(1);
    if (id && document.getElementById(id)) { e.preventDefault(); scrollToId(id); $("#mobileMenu").classList.remove("open"); }
  }
  const ob = e.target.closest(".order-btn");
  if (ob) { const t = ob.dataset.scroll; if (t) scrollToId(t); else openCart(); $("#mobileMenu").classList.remove("open"); }
});

const nav = $("#nav");
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 50), { passive: true });
$("#mobileToggle").addEventListener("click", () => $("#mobileMenu").classList.toggle("open"));

$("#cartIconBtn").addEventListener("click", openCart);
$("#cartClose").addEventListener("click", closeCart);
$("#cartBackdrop").addEventListener("click", closeCart);
$("#clearCartBtn").addEventListener("click", clearCart);
$("#checkoutBtn").addEventListener("click", openCheckout);
$("#cancelCheckout").addEventListener("click", closeCheckout);
$("#checkoutBackdrop").addEventListener("click", closeCheckout);
$("#successClose").addEventListener("click", () => { clearCart(); closeCheckout(); closeCart(); });
$("#orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  $("#orderNumber").textContent = "MH-" + Math.floor(100000 + Math.random() * 900000);
  $("#checkoutForm").classList.add("hidden");
  $("#checkoutSuccess").classList.remove("hidden");
});

function observeReveals() {
  const els = document.querySelectorAll(".reveal:not(.in)");
  if (!("IntersectionObserver" in window)) { els.forEach(el => el.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); } });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

renderMenu();
renderCart();
observeReveals();