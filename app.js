// =====================================================
// CLAUDE CODE EĞİTİM SİTESİ — ANA JAVASCRIPT
// =====================================================

/* ─── Terminal Animasyonu ─── */
(function initTerminal() {
  const commands = [
    {
      cmd: "claude",
      output: [
        { text: "✓ Claude Code v1.x.x başlatılıyor...", cls: "highlight" },
        { text: "✓ Proje klasörü taranıyor...", cls: "" },
        { text: "✓ CLAUDE.md okundu — kurallar yüklendi", cls: "highlight" },
        { text: "", cls: "dim" },
        { text: "Merhaba! Ne yapmamı istersin?", cls: "highlight" }
      ]
    },
    {
      cmd: "/plan Kuaför randevu uygulaması yap",
      output: [
        { text: "Plan modu aktif — kod yazmıyorum.", cls: "highlight" },
        { text: "Aşama 1: Next.js + Supabase iskelet (1 gün)", cls: "" },
        { text: "Aşama 2: Veritabanı + RLS (yarım gün)", cls: "" },
        { text: "Aşama 3: Login + dashboard (1 gün)", cls: "" },
        { text: "Aşama 4: Randevu alma (2 gün)", cls: "" },
        { text: "Onaylıyor musun?", cls: "highlight" }
      ]
    },
    {
      cmd: "Giriş ekranı tasarla, mor-mor gradient, mobil uyumlu",
      output: [
        { text: "app/login/page.tsx oluşturuldu ✓", cls: "highlight" },
        { text: "components/ui/LoginForm.tsx oluşturuldu ✓", cls: "" },
        { text: "Tailwind CSS gradient eklendi ✓", cls: "" },
        { text: "localhost:3000/login → test edebilirsin!", cls: "highlight" }
      ]
    },
    {
      cmd: "Vercel'e deploy et",
      output: [
        { text: "git add . && git commit -m 'feat: login page'", cls: "" },
        { text: "git push origin main ✓", cls: "highlight" },
        { text: "Vercel build başladı... ⏳", cls: "dim" },
        { text: "✓ Deploy tamamlandı! proje.vercel.app", cls: "highlight" }
      ]
    }
  ];

  let cmdIndex = 0;
  let charIndex = 0;
  let phase = "typing"; // typing | showing | waiting
  let outputIndex = 0;

  const typedEl = document.getElementById("typedCmd");
  const outputEl = document.getElementById("termOutput");
  const cursorEl = document.getElementById("cursor");

  if (!typedEl || !outputEl) return;

  function typeChar() {
    const current = commands[cmdIndex];
    if (charIndex < current.cmd.length) {
      typedEl.textContent += current.cmd[charIndex++];
      setTimeout(typeChar, 55);
    } else {
      phase = "showing";
      cursorEl && (cursorEl.style.display = "none");
      showOutput();
    }
  }

  function showOutput() {
    const current = commands[cmdIndex];
    if (outputIndex < current.output.length) {
      const line = document.createElement("div");
      line.className = "t-out-line" + (current.output[outputIndex].cls ? " " + current.output[outputIndex].cls : "");
      line.textContent = current.output[outputIndex].text;
      outputEl.appendChild(line);
      outputIndex++;
      setTimeout(showOutput, 260);
    } else {
      setTimeout(nextCommand, 2800);
    }
  }

  function nextCommand() {
    cmdIndex = (cmdIndex + 1) % commands.length;
    charIndex = 0;
    outputIndex = 0;
    typedEl.textContent = "";
    outputEl.innerHTML = "";
    cursorEl && (cursorEl.style.display = "inline");
    phase = "typing";
    setTimeout(typeChar, 500);
  }

  setTimeout(typeChar, 1200);
})();


/* ─── Accordion ─── */
function buildAccordion() {
  const container = document.getElementById("accordion");
  if (!container || typeof topics === 'undefined') return;

  topics.forEach((topic, tIdx) => {
    const item = document.createElement("div");
    item.className = "acc-item";
    item.innerHTML = `
      <div class="acc-header" data-idx="${tIdx}">
        <div class="acc-num">${tIdx + 1}</div>
        <div class="acc-icon">${topic.icon}</div>
        <div class="acc-title">
          <h3>${topic.title}</h3>
          <p>${topic.desc}</p>
        </div>
        <span class="acc-tag tag-${topic.tag}">${topic.tagLabel}</span>
        <svg class="acc-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div class="acc-body">
        <div class="acc-body-inner" id="body-${tIdx}"></div>
      </div>`;
    container.appendChild(item);

    const inner = item.querySelector(`#body-${tIdx}`);
    topic.subs.forEach((sub, sIdx) => {
      const card = document.createElement("div");
      card.className = "sub-item";
      card.dataset.topic = tIdx;
      card.dataset.sub = sIdx;
      card.innerHTML = `
        <div class="sub-icon">${sub.icon}</div>
        <div class="sub-text">
          <strong>${sub.title}</strong>
          <span>${sub.desc}</span>
        </div>`;
      card.addEventListener("click", () => openModal(tIdx, sIdx));
      inner.appendChild(card);
    });

    item.querySelector(".acc-header").addEventListener("click", () => toggleAcc(item));
  });
}

function toggleAcc(item) {
  const isOpen = item.classList.contains("open");
  // close all
  document.querySelectorAll(".acc-item.open").forEach(el => {
    el.classList.remove("open");
    el.querySelector(".acc-body").style.maxHeight = null;
  });
  if (!isOpen) {
    item.classList.add("open");
    const body = item.querySelector(".acc-body");
    body.style.maxHeight = body.scrollHeight + "px";
  }
}


/* ─── Modal ─── */
let modalOverlay;

function createModalDOM() {
  modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  modalOverlay.innerHTML = `
    <div class="modal" id="modal">
      <div class="modal-header">
        <div class="modal-header-icon" id="modal-icon"></div>
        <div class="modal-header-text">
          <h3 id="modal-title"></h3>
          <p id="modal-subtitle"></p>
        </div>
        <button class="modal-close" id="modal-close">✕</button>
      </div>
      <div class="modal-body" id="modal-body"></div>
    </div>`;
  document.body.appendChild(modalOverlay);

  modalOverlay.addEventListener("click", e => { if (e.target === modalOverlay) closeModal(); });
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
}

function openModal(tIdx, sIdx) {
  const topic = topics[tIdx];
  const sub   = topic.subs[sIdx];
  const c     = sub.content;

  document.getElementById("modal-icon").textContent    = sub.icon;
  document.getElementById("modal-title").textContent   = sub.title;
  document.getElementById("modal-subtitle").textContent = sub.desc;

  const body = document.getElementById("modal-body");
  body.innerHTML = "";

  // Summary
  if (c.summary) {
    const sec = document.createElement("div");
    sec.className = "modal-section";
    sec.innerHTML = `<h4>Özet</h4><p>${c.summary}</p>`;
    body.appendChild(sec);
  }

  // Analogy
  if (c.analogy) {
    const sec = document.createElement("div");
    sec.className = "modal-section";
    sec.innerHTML = `<h4>🔄 Benzetme</h4><p>${c.analogy}</p>`;
    body.appendChild(sec);
  }

  // Steps (numbered)
  if (c.steps && c.steps.length) {
    const sec = document.createElement("div");
    sec.className = "modal-section";
    sec.innerHTML = `<h4>📋 Adımlar</h4>`;
    const ul = document.createElement("ul");
    ul.className = "modal-list";
    c.steps.forEach(s => {
      const li = document.createElement("li");
      li.textContent = s;
      ul.appendChild(li);
    });
    sec.appendChild(ul);
    body.appendChild(sec);
  }

  // Points (bullet)
  if (c.points && c.points.length) {
    const sec = document.createElement("div");
    sec.className = "modal-section";
    sec.innerHTML = `<h4>💡 Önemli Noktalar</h4>`;
    const ul = document.createElement("ul");
    ul.className = "modal-list";
    c.points.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p;
      ul.appendChild(li);
    });
    sec.appendChild(ul);
    body.appendChild(sec);
  }

  // Table
  if (c.table && c.table.length) {
    const sec = document.createElement("div");
    sec.className = "modal-section";
    sec.innerHTML = `<h4>📊 Tablo</h4>`;
    const tbl = document.createElement("table");
    tbl.style.cssText = "width:100%;border-collapse:collapse;font-size:.88rem;";
    c.table.forEach((row, i) => {
      const tr = document.createElement("tr");
      tr.style.cssText = `border-bottom:1px solid var(--border);${i % 2 === 0 ? "background:var(--bg-alt);" : ""}`;
      ["col1","col2"].forEach(col => {
        const td = document.createElement("td");
        td.textContent = row[col];
        td.style.cssText = "padding:10px 12px;color:var(--text-muted);";
        if (col === "col1") { td.style.color = "var(--text)"; td.style.fontWeight = "600"; td.style.width = "44%"; }
        tr.appendChild(td);
      });
      tbl.appendChild(tr);
    });
    sec.appendChild(tbl);
    body.appendChild(sec);
  }

  // Code blocks
  if (c.codes && c.codes.length) {
    const sec = document.createElement("div");
    sec.className = "modal-section";
    sec.innerHTML = `<h4>💻 Komutlar / Örnekler</h4>`;
    c.codes.forEach(code => {
      const wrap = document.createElement("div");
      wrap.style.marginBottom = "12px";
      const pre = document.createElement("div");
      pre.className = "modal-code";
      pre.style.whiteSpace = "pre-wrap";
      pre.textContent = code.cmd;
      const label = document.createElement("p");
      label.style.cssText = "font-size:.8rem;color:var(--text-muted);margin-top:4px;";
      label.textContent = code.desc;
      wrap.appendChild(pre);
      wrap.appendChild(label);
      sec.appendChild(wrap);
    });
    body.appendChild(sec);
  }

  // Image
  if (c.image) {
    const sec = document.createElement("div");
    sec.className = "modal-section";
    const img = document.createElement("img");
    img.src = c.image;
    img.alt = c.imageAlt || "";
    img.style.cssText = "width:100%;border-radius:10px;display:block;cursor:pointer;";
    img.addEventListener("click", () => window.open(c.image, "_blank"));
    sec.appendChild(img);
    body.appendChild(sec);
  }

  // Note
  if (c.note) {
    const sec = document.createElement("div");
    sec.className = "modal-section";
    sec.innerHTML = `
      <div style="background:var(--bg-alt);border:1px solid var(--primary)44;border-radius:10px;padding:14px 16px;display:flex;gap:10px;">
        <span style="font-size:1.2rem;flex-shrink:0;">💡</span>
        <p style="font-size:.88rem;color:var(--text-muted);margin:0;">${c.note}</p>
      </div>`;
    body.appendChild(sec);
  }

  modalOverlay.classList.add("open");
  // sadece modal açıkken scroll engelle (hamburger açık değilse)
  if (!document.getElementById("mobile-nav")?.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  modalOverlay.classList.remove("open");
  // hamburger açık değilse scroll'u geri aç
  if (!document.getElementById("mobile-nav")?.classList.contains("open")) {
    document.body.style.overflow = "";
  }
}


/* ─── Hamburger Menu ─── */
(function initHamburger() {
  const btn      = document.getElementById("hamburger");
  const mobileNav= document.getElementById("mobile-nav");
  if (!btn || !mobileNav) return;

  function closeMenu() {
    btn.classList.remove("open");
    mobileNav.classList.remove("open");
    document.body.style.overflow = "";
  }

  btn.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    btn.classList.toggle("open", isOpen);
    // prevent background scroll while menu open
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // close on link click
  mobileNav.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // close on outside click
  document.addEventListener("click", e => {
    if (!btn.contains(e.target) && !mobileNav.contains(e.target)) {
      closeMenu();
    }
  });

  // close on resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) closeMenu();
  });
})();

/* ─── Smooth scroll for nav links ─── */
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});


/* ─── Scroll reveal animation ─── */
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".info-card, .step, .tip-card").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity .5s ease, transform .5s ease";
    observer.observe(el);
  });
}


/* ─── Stats counter animation ─── */
function animateStats() {
  const stats = document.querySelectorAll(".stat span");
  const values = [14, 65, 100];
  const suffixes = ["+", "+", "%"];

  stats.forEach((el, i) => {
    let start = 0;
    const end = values[i];
    const duration = 1800;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      el.textContent = Math.floor(start) + suffixes[i];
      if (start >= end) clearInterval(timer);
    }, 16);
  });
}

const statsObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    animateStats();
    statsObserver.disconnect();
  }
}, { threshold: 0.5 });

const heroStats = document.querySelector(".hero-stats");
if (heroStats) statsObserver.observe(heroStats);


/* ─── Copy code on click ─── */
document.addEventListener("click", e => {
  const codeEl = e.target.closest(".modal-code");
  if (!codeEl) return;
  navigator.clipboard.writeText(codeEl.textContent).then(() => {
    const orig = codeEl.style.borderColor;
    codeEl.style.borderColor = "var(--green)";
    codeEl.title = "Kopyalandı!";
    setTimeout(() => { codeEl.style.borderColor = orig; }, 1200);
  }).catch(() => {});
});


/* ─── INIT ─── */
document.addEventListener("DOMContentLoaded", () => {
  buildAccordion();
  createModalDOM();
  initReveal();
});
