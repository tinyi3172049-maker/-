/* ── SENATUS · 元老院 · Main Script ── */

// ── 图片数据配置 ──
const GALLERY_DATA = {
  moments: [
    { src: 'images/moment-01.jpg', label: '共同的时光 · TEMPUS COMMUNE' },
    { src: 'images/moment-02.jpg', label: '少年记忆 · MEMORIA IUVENTUTIS' },
    { src: 'images/moment-03.jpg', label: '议院相聚 · CONVENTUS' },
    { src: 'images/moment-04.jpg', label: '此刻即永恒 · NUNC EST AETERNUM' },
    { src: 'images/moment-05.jpg', label: '相与为友 · AMICITIA' },
    { src: 'images/moment-06.jpg', label: '烟火人间 · VITA COMMUNIS' },
    { src: 'images/moment-07.jpg', label: '笑声留存 · RISUS PERPETUUS' },
    { src: 'images/moment-08.jpg', label: '并肩而行 · UNA VIA' },
    { src: 'images/moment-09.jpg', label: '青春印记 · SIGNUM IUVENTAE' },
  ],
  artworks: [
    { src: 'images/artwork-01.jpg', label: '心象世界 · IMAGO MENTIS' },
    { src: 'images/artwork-02.jpg', label: '线条叙事 · NARRATIO LINEARIS' },
    { src: 'images/artwork-03.jpg', label: '色彩宣言 · MANIFESTO COLORIS' },
    { src: 'images/artwork-04.jpg', label: '造境之术 · ARS CREANDI' },
    { src: 'images/artwork-05.jpg', label: '内在图腾 · TOTEM INTERNUM' },
    { src: 'images/artwork-06.jpg', label: '形与意 · FORMA ET ANIMA' },
    { src: 'images/artwork-07.jpg', label: '抽象之诗 · POESIS ABSTRACTA' },
    { src: 'images/artwork-08.jpg', label: '视觉哲学 · PHILOSOPHIA VISIVA' },
    { src: 'images/artwork-09.jpg', label: '光影对话 · DIALOGUS LUCIS' },
  ],
  writings: [
    { src: 'images/writing-01.jpg', title: '思想的碎片', meta: 'FRAGMENTA COGITATIONIS · MMXXV' },
    { src: 'images/writing-02.jpg', title: '存在与虚无之间', meta: 'INTER ESSE ET NIHIL · MMXXVI' },
  ],
};

// ── 构建瀑布流画廊 ──
function buildMasonry(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  items.forEach(({ src, label }) => {
    const div = document.createElement('div');
    div.className = 'g-item';
    const img = document.createElement('img');
    img.src = src;
    img.alt = label;
    img.loading = 'lazy';
    img.decoding = 'async';
    const lbl = document.createElement('div');
    lbl.className = 'g-label';
    lbl.textContent = label;
    div.appendChild(img);
    div.appendChild(lbl);
    div.addEventListener('click', () => openLightbox(src));
    container.appendChild(div);
  });
}

// ── 构建文库区域 ──
function buildWritings(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  items.forEach(({ src, title, meta }) => {
    const div = document.createElement('div');
    div.className = 'w-card';
    const img = document.createElement('img');
    img.src = src;
    img.alt = title;
    img.loading = 'lazy';
    img.decoding = 'async';
    const overlay = document.createElement('div');
    overlay.className = 'w-overlay';
    overlay.innerHTML = `<div class="w-title">${title}</div><div class="w-meta">${meta}</div>`;
    div.appendChild(img);
    div.appendChild(overlay);
    div.addEventListener('click', () => openLightbox(src));
    container.appendChild(div);
  });
}

// ── 灯箱 ──
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lb-img');
  img.src = src;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('active');
  document.getElementById('lb-img').src = '';
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  // 渲染画廊
  buildMasonry(GALLERY_DATA.moments, 'moments-gallery');
  buildMasonry(GALLERY_DATA.artworks, 'artworks-gallery');
  buildWritings(GALLERY_DATA.writings, 'writings-grid');

  // 灯箱事件
  document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target === e.currentTarget || e.target.id === 'lb-close') closeLightbox();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  // 导航滚动效果
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });

  // 滚动显现动画
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.1 }
  );
  reveals.forEach(el => revealObserver.observe(el));
});
