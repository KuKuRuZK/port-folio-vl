// ── PROJECT DATA ──
const projectData = {
  bigquery: {
    title:    '🗄️ END-TO-END DATA ANALYSIS',
    title_uk: '🗄️ НАСКРІЗНИЙ АНАЛІЗ ДАНИХ',
    color: '#1a1a2e',
    desc:    'Designed and populated relational tables with structured user datasets in Google BigQuery. Wrote complex SQL queries using JOINs, GROUP BY and aggregation functions to extract meaningful insights.',
    desc_uk: 'Розробив і заповнив реляційні таблиці зі структурованими наборами даних у Google BigQuery. Писав складні SQL-запити з JOIN, GROUP BY та агрегатними функціями для отримання корисних інсайтів.',
    bars:    [
      { label: 'SQL Complexity',   label_uk: 'Складність SQL',    value: 80 },
      { label: 'Data Modelling',   label_uk: 'Моделювання даних', value: 75 },
      { label: 'Query Difficulty', label_uk: 'Складність запитів',value: 70 },
    ],
    tools: ['SQL', 'Google BigQuery', 'Data Cleaning', 'Aggregations', 'Schema Design'],
    link: ''
  },
  netflix: {
    title:    '🎬 NETFLIX DASHBOARD',
    title_uk: '🎬 NETFLIX ДАШБОРД',
    color: '#e50914',
    desc:    'Analyzed a large Netflix content dataset using Tableau. Built interactive dashboards to visualize content distribution by type, country, genre and release year with clear KPI storytelling.',
    desc_uk: 'Проаналізував великий датасет контенту Netflix у Tableau. Побудував інтерактивні дашборди для візуалізації розподілу контенту за типом, країною, жанром та роком випуску.',
    bars: [
      { label: 'Data Visualization', label_uk: 'Візуалізація даних',  value: 85 },
      { label: 'Dashboard Design',   label_uk: 'Дизайн дашборду',     value: 80 },
      { label: 'Analytical Depth',   label_uk: 'Глибина аналізу',     value: 70 },
    ],
    tools: ['Tableau', 'Data Visualization', 'KPI Design', 'Filters', 'Charts'],
    link: ''
  },
  samurai: {
    title:    '⚔️ HIGH-POLY SAMURAI',
    title_uk: '⚔️ HIGH-POLY САМУРАЙ',
    color: '#2c1810',
    desc:    'Stylized high-poly 3D character featuring detailed layered armor, a hand-crafted katana with tsuba detail, and long cloth robes with simulated folds. Rendered with a painterly stylized shader.',
    desc_uk: 'Стилізований high-poly 3D персонаж з детальною шаруватою бронею, ручно змодельованою катаною з цубою та довгими полами з симуляцією тканини. Рендер зі стилізованим шейдером.',
    bars: [
      { label: 'Modelling Detail', label_uk: 'Деталізація моделі', value: 85 },
      { label: 'Texturing',        label_uk: 'Текстурування',       value: 75 },
      { label: 'Stylized Shading', label_uk: 'Стилізований шейдинг',value: 80 },
    ],
    tools: ['Blender', 'High-Poly Modelling', 'UV Unwrapping', 'Stylized Shading', 'Character Design'],
    link: ''
  },
  kimono: {
    title:    '🌸 LOW-POLY KIMONO GIRL',
    title_uk: '🌸 LOW-POLY КІМОНО ДІВЧИНА',
    color: '#1a1a2e',
    desc:    'Low-poly stylized female warrior character with a floral kimono, naginata weapon and complete front/side/back turnaround sheet. Clean topology optimised for game engines.',
    desc_uk: 'Low-poly стилізований персонаж воїтельки з квітковим кімоно, нагінатою та повним розгортком (спереду/збоку/ззаду). Чиста топологія оптимізована для ігрових рушіїв.',
    bars: [
      { label: 'Topology',         label_uk: 'Топологія',           value: 80 },
      { label: 'Stylized Design',  label_uk: 'Стилізований дизайн', value: 85 },
      { label: 'Game-Ready Poly',  label_uk: 'Ігрова оптимізація',  value: 75 },
    ],
    tools: ['Blender', 'Low-Poly Modelling', 'UV Unwrapping', 'Character Turnaround', 'Game-Ready Mesh'],
    link: ''
  },
  nastalgia: {
    title:    '🕹️ NOT NASTALGIA',
    title_uk: '🕹️ NOT NASTALGIA',
    color: '#0d1117',
    desc:    'A Unity game exploring themes of memory and nostalgia. Designed core gameplay loop, scene transitions, and narrative delivery. Built with custom C# scripts handling player state and level flow.',
    desc_uk: 'Гра на Unity про теми пам\'яті та ностальгії. Розробив основний ігровий цикл, переходи між сценами та подачу наративу. Написаний на C# зі скриптами для стану гравця та потоку рівнів.',
    bars: [
      { label: 'Game Design',      label_uk: 'Гейм-дизайн',     value: 75 },
      { label: 'C# Scripting',     label_uk: 'Скриптинг C#',     value: 70 },
      { label: 'Level Design',     label_uk: 'Дизайн рівнів',    value: 72 },
    ],
    tools: ['Unity', 'C#', 'Scene Management', 'Game Mechanics', 'Narrative Design'],
    link: ''
  },
  suwuside: {
    title:    '🌸 sUwUside Hotline',
    title_uk: '🌸 sUwUside Hotline',
    color: '#1a0020',
    desc:    'A narrative-driven game built in Game Maker Studio with a unique lo-fi aesthetic. Features custom pixel art, branching dialogue and an original soundtrack. Focused on emotional storytelling through gameplay.',
    desc_uk: 'Наративна гра на Game Maker Studio з унікальною lo-fi естетикою. Містить власний піксель-арт, розгалужені діалоги та оригінальний саундтрек. Акцент на емоційному сторітелінгу.',
    bars: [
      { label: 'Narrative Design', label_uk: 'Наративний дизайн', value: 85 },
      { label: 'Pixel Art',        label_uk: 'Піксель-арт',        value: 78 },
      { label: 'Game Maker GML',   label_uk: 'Game Maker GML',     value: 70 },
    ],
    tools: ['Game Maker Studio', 'GML', 'Pixel Art', 'Dialogue System', 'Sound Design'],
    link: ''
  }
};

// ── SKILL DATA ──
const skillData = {
  python: {
    icon: '🐍',
    title:    'PYTHON',
    title_uk: 'PYTHON',
    desc:    'Learned through hands-on teaching at GOITeens and personal data projects. Used Python for data cleaning, logic building, and automation — from writing functions to processing structured datasets.',
    desc_uk: 'Вивчив через практичне викладання у GOITeens та особисті дата-проєкти. Використовував Python для очищення даних, побудови логіки та автоматизації — від написання функцій до обробки структурованих наборів.',
    tags:    ['Data Cleaning', 'Functions', 'Loops & Logic', 'Debugging', 'OOP Basics', 'Libraries'],
    tags_uk: ['Очищення даних', 'Функції', 'Цикли та логіка', 'Дебагінг', 'Основи ООП', 'Бібліотеки'],
    projects:    ['End-to-End User Data Analysis', 'Python Instructor @ GOITeens'],
    projects_uk: ['Наскрізний аналіз даних', 'Викладач Python @ GOITeens']
  },
  sql: {
    icon: '🗄️',
    title:    'SQL / BIGQUERY',
    title_uk: 'SQL / BIGQUERY',
    desc:    'Developed through the End-to-End Data Analysis project on Google BigQuery. Wrote complex queries, designed relational table schemas, and extracted meaningful insights from structured datasets.',
    desc_uk: 'Розвинув через проєкт наскрізного аналізу даних у Google BigQuery. Писав складні запити, проєктував схеми реляційних таблиць та витягував корисні інсайти з датасетів.',
    tags:    ['SELECT & WHERE', 'JOIN', 'GROUP BY', 'Aggregations', 'BigQuery', 'Schema Design'],
    tags_uk: ['SELECT & WHERE', 'JOIN', 'GROUP BY', 'Агрегації', 'BigQuery', 'Проєктування схем'],
    projects:    ['End-to-End User Data Analysis — Google BigQuery'],
    projects_uk: ['Наскрізний аналіз даних — Google BigQuery']
  },
  tableau: {
    icon: '📊',
    title:    'TABLEAU',
    title_uk: 'TABLEAU',
    desc:    'Applied in the Netflix Content Analysis project. Built interactive dashboards to visualize content distribution by genre, country, and release year. Focused on making data easy to read and understand.',
    desc_uk: 'Застосував у проєкті аналізу контенту Netflix. Побудував інтерактивні дашборди для візуалізації розподілу за жанром, країною та роком. Акцент на зрозумілій подачі даних.',
    tags:    ['Dashboards', 'Charts & Graphs', 'Filters', 'Data Stories', 'KPI Visuals', 'Tableau Public'],
    tags_uk: ['Дашборди', 'Графіки', 'Фільтри', 'Дата-сторіз', 'KPI-візуали', 'Tableau Public'],
    projects:    ['Netflix Content Analysis Dashboard'],
    projects_uk: ['Netflix Дашборд аналізу контенту']
  },
  excel: {
    icon: '📈',
    title:    'ADVANCED EXCEL',
    title_uk: 'ADVANCED EXCEL',
    desc:    'Used throughout university projects and freelance analytical work. Comfortable with pivot tables, VLOOKUP, data validation, and building structured reports for presentations.',
    desc_uk: 'Використовував в університетських проєктах та фріланс-аналітиці. Зведені таблиці, VLOOKUP, валідація даних та побудова структурованих звітів для презентацій.',
    tags:    ['Pivot Tables', 'VLOOKUP / XLOOKUP', 'Formulas', 'Data Validation', 'Charts', 'Conditional Formatting'],
    tags_uk: ['Зведені таблиці', 'VLOOKUP / XLOOKUP', 'Формули', 'Валідація даних', 'Графіки', 'Умовне форматування'],
    projects:    ['Academic Data Reports', 'Freelance Analysis Work'],
    projects_uk: ['Академічні звіти', 'Фріланс аналітика']
  },
  webdev: {
    icon: '🌐',
    title:    'HTML / CSS / JS',
    title_uk: 'HTML / CSS / JS',
    desc:    'Self-taught through building this very portfolio. Learned semantic HTML structure, CSS layouts with Flexbox and Grid, pixel-art styling, animations, and vanilla JS for interactivity.',
    desc_uk: 'Самостійно вивчив через побудову цього портфоліо. Семантичний HTML, CSS-лейаути з Flexbox та Grid, піксель-арт стилізація, анімації та vanilla JS для інтерактивності.',
    tags:    ['Semantic HTML', 'CSS Flexbox', 'CSS Grid', 'Animations', 'DOM Manipulation', 'Responsive Design'],
    tags_uk: ['Семантичний HTML', 'CSS Flexbox', 'CSS Grid', 'Анімації', 'DOM-маніпуляції', 'Адаптивний дизайн'],
    projects:    ['This Portfolio Website', 'University Web Projects'],
    projects_uk: ['Це портфоліо', 'Університетські веб-проєкти']
  },
  unity: {
    icon: '🎮',
    title:    'UNITY',
    title_uk: 'UNITY',
    desc:    'Studied during Game Development degree at Mykolo Romerio Universitetas. Built game mechanics, handled scene management, and worked with C# scripts to control player behaviour and game logic.',
    desc_uk: 'Вивчив під час навчання на Game Development у МРУ. Створював ігрові механіки, керував сценами та писав C# скрипти для поведінки гравця та ігрової логіки.',
    tags:    ['C# Scripting', 'Scene Management', 'Physics', 'Game Mechanics', 'UI in Unity', 'Prefabs'],
    tags_uk: ['Скриптинг C#', 'Менеджмент сцен', 'Фізика', 'Ігрові механіки', 'UI в Unity', 'Префаби'],
    projects:    ['Not Nastalgia (Unity Game)'],
    projects_uk: ['Not Nastalgia (Гра на Unity)']
  },
  '3d': {
    icon: '🧊',
    title:    '3D MODELLING',
    title_uk: '3D МОДЕЛЮВАННЯ',
    desc:    'Developed during Game Development studies and personal creative projects. Created both high-poly and low-poly stylized characters using industry-standard 3D tools, focusing on topology, UV unwrapping, and stylized shading.',
    desc_uk: 'Розвинув під час навчання на Game Development та особистих творчих проєктах. Створив high-poly та low-poly стилізованих персонажів, з акцентом на топологію, UV-розгортку та стилізований шейдинг.',
    tags:    ['High-Poly Modelling', 'Low-Poly Modelling', 'UV Unwrapping', 'Stylized Shading', 'Character Design', 'Topology'],
    tags_uk: ['High-Poly моделювання', 'Low-Poly моделювання', 'UV-розгортка', 'Стилізований шейдинг', 'Дизайн персонажів', 'Топологія'],
    projects:    ['High-Poly Samurai Character', 'Low-Poly Kimono Girl'],
    projects_uk: ['High-Poly Самурай', 'Low-Poly Кімоно Дівчина']
  },
  figma: {
    icon: '🎨',
    title:    'FIGMA / UI DESIGN',
    title_uk: 'FIGMA / UI ДИЗАЙН',
    desc:    'Self-taught through real design projects. Used Figma to create full website concepts from scratch — including layout, typography, colour systems and pixel-art aesthetics. Focused on building designs that are both visually distinctive and ready to code.',
    desc_uk: 'Самостійно опанував через реальні дизайн-проєкти. Використовував Figma для створення повних концепцій сайтів — лейаут, типографіка, колірні системи та піксель-арт естетика.',
    tags:    ['UI Design', 'Wireframing', 'Components', 'Auto Layout', 'Typography', 'Colour Systems', 'Pixel Art Style', 'Prototyping'],
    tags_uk: ['UI Дизайн', 'Вайрфреймінг', 'Компоненти', 'Auto Layout', 'Типографіка', 'Колірні системи', 'Піксель-арт', 'Прототипування'],
    projects:    ['Tamagotchi Website Design', 'This Portfolio — designed in Figma first'],
    projects_uk: ['Дизайн сайту Тамагочі', 'Це портфоліо — спочатку в Figma']
  }
};

// ── OPEN SKILL MODAL ──
function openSkillModal(skillKey) {
  const data = skillData[skillKey];
  if (!data) return;
  const uk = currentLang === 'uk';

  document.getElementById('modalTitle').innerHTML = data.icon + ' ' + (uk ? data.title_uk : data.title);
  document.getElementById('modalTitle').style.color = 'var(--black)';
  document.getElementById('modalDesc').textContent = uk ? data.desc_uk : data.desc;

  const tagsEl = document.getElementById('modalTags');
  const tags = uk ? data.tags_uk : data.tags;
  tagsEl.innerHTML = tags.map((t, i) =>
    `<span class="skill-modal-tag ${i % 2 === 0 ? 'pink' : ''}">${t}</span>`
  ).join('');

  const projEl = document.getElementById('modalProjects');
  const projects = uk ? data.projects_uk : data.projects;
  projEl.innerHTML = projects.map(p =>
    `<div class="skill-modal-project-item">${p}</div>`
  ).join('');

  document.getElementById('skillOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── CLOSE SKILL MODAL ──
function closeSkillModal(e) {
  if (e && e.target !== document.getElementById('skillOverlay')) return;
  document.getElementById('skillOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── ATTACH CLICK TO SKILL CARDS ──
document.querySelectorAll('.skill-card[data-skill]').forEach(card => {
  card.addEventListener('click', () => openSkillModal(card.dataset.skill));
});

// ── OPEN PROJECT MODAL ──
function openProjectModal(key) {
  const data = projectData[key];
  if (!data) return;
  const uk = currentLang === 'uk';

  function isLight(hex) {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return (r*299 + g*587 + b*114) / 1000 > 128;
  }
  const light = isLight(data.color || '#1a1a2e');
  const titleColor = light ? '#0A0A0A' : '#F5F5F5';

  document.getElementById('projectModalTitle').textContent = uk ? data.title_uk : data.title;
  document.getElementById('projectModalTitle').style.color = titleColor;
  document.getElementById('projectModalHeader').style.background = data.color || 'var(--pink)';
  document.getElementById('projectModalDesc').textContent = uk ? data.desc_uk : data.desc;

  const barsEl = document.getElementById('projectModalBars');
  barsEl.innerHTML = data.bars.map(b => `
    <div>
      <div class="proj-bar-label">
        <span>${uk ? b.label_uk : b.label}</span>
        <span style="color:var(--yellow)">${b.value}%</span>
      </div>
      <div class="proj-bar-wrap"><div class="proj-bar-fill" style="width:${b.value}%"></div></div>
    </div>
  `).join('');

  const toolsEl = document.getElementById('projectModalTags');
  toolsEl.innerHTML = data.tools.map((t, i) =>
    `<span class="skill-modal-tag ${i % 2 === 0 ? 'pink' : ''}">${t}</span>`
  ).join('');

  const linkEl = document.getElementById('projectModalLink');
  if (data.link) {
    linkEl.innerHTML = `<a href="${data.link}" target="_blank" style="color:var(--yellow);text-decoration:none;">▶ ${data.link}</a>`;
  } else {
    linkEl.innerHTML = uk
      ? '<span style="color:#555;">— незабаром —</span>'
      : '<span style="color:#555;">— coming soon —</span>';
  }

  document.getElementById('projectOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── CLOSE PROJECT MODAL ──
function closeProjectModal(e) {
  if (e && e.target !== document.getElementById('projectOverlay')) return;
  document.getElementById('projectOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── ESC KEY ──
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeSkillModal();
    closeProjectModal();
  }
});

// ── ATTACH CLICK TO PROJECT CARDS ──
document.querySelectorAll('.project-card[data-project]').forEach(card => {
  card.addEventListener('click', () => openProjectModal(card.dataset.project));
});

// ── PROJECT FILTER ──
function filterProjects(cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// ── LANGUAGE TOGGLE ──
let currentLang = 'en';

function toggleLang() {
  currentLang = currentLang === 'en' ? 'uk' : 'en';
  const btn = document.getElementById('langBtn');
  btn.textContent = currentLang === 'en' ? '🌐 УКР' : '🌐 ENG';
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + currentLang);
  });
}

// ── INTERSECTION OBSERVER ──
const sections = document.querySelectorAll('.page-section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
sections.forEach(s => observer.observe(s));

// ── ACTIVE NAV ──
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section[id]').forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(a => {
    a.style.background = a.getAttribute('href') === '#' + current ? 'var(--pink)' : '';
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--black)' : '';
  });
});

// ══════════════════════════════════════════
// ── BACKGROUND ANIMATIONS ──
// ══════════════════════════════════════════

function initCanvas(id) {
  const canvas = document.getElementById(id);
  if (!canvas) return null;
  const ctx = canvas.getContext('2d');
  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  return { canvas, ctx };
}

// ── ABOUT: Matrix rain (digits falling) ──
(function() {
  const c = initCanvas('canvasAbout');
  if (!c) return;
  const { canvas, ctx } = c;
  const chars = '01アイウエオカキクケコサシスセソ';
  let cols, drops;
  function setup() {
    cols = Math.floor(canvas.width / 18);
    drops = Array.from({ length: cols }, () => Math.random() * -50);
  }
  setup();
  window.addEventListener('resize', setup);
  function draw() {
    ctx.fillStyle = 'rgba(10,10,10,0.07)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FF2D7822';
    ctx.font = '12px monospace';
    drops.forEach((y, i) => {
      const ch = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(ch, i * 18, y * 18);
      if (y * 18 > canvas.height && Math.random() > 0.97) drops[i] = 0;
      drops[i] += 0.4;
    });
  }
  setInterval(draw, 60);
})();

// ── SKILLS: Pulsing grid ──
(function() {
  const c = initCanvas('canvasSkills');
  if (!c) return;
  const { canvas, ctx } = c;
  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const spacing = 40;
    t += 0.015;
    for (let x = 0; x < canvas.width; x += spacing) {
      for (let y = 0; y < canvas.height; y += spacing) {
        const dist = Math.sin(t + x * 0.02 + y * 0.02);
        const alpha = (dist + 1) / 2 * 0.18;
        ctx.fillStyle = `rgba(10,10,10,${alpha})`;
        ctx.fillRect(x, y, 3, 3);
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── PROJECTS: Floating geometric shapes ──
(function() {
  const c = initCanvas('canvasProjects');
  if (!c) return;
  const { canvas, ctx } = c;
  const shapes = Array.from({ length: 18 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 28 + 8,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    type: Math.floor(Math.random() * 3), // 0=rect, 1=triangle, 2=diamond
    alpha: Math.random() * 0.12 + 0.04,
    color: Math.random() > 0.5 ? '#FF2D78' : '#FFE600'
  }));
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapes.forEach(s => {
      s.x += s.vx; s.y += s.vy;
      if (s.x < -50) s.x = canvas.width + 50;
      if (s.x > canvas.width + 50) s.x = -50;
      if (s.y < -50) s.y = canvas.height + 50;
      if (s.y > canvas.height + 50) s.y = -50;
      ctx.save();
      ctx.globalAlpha = s.alpha;
      ctx.strokeStyle = s.color;
      ctx.lineWidth = 2;
      ctx.translate(s.x, s.y);
      ctx.beginPath();
      if (s.type === 0) {
        ctx.rect(-s.size/2, -s.size/2, s.size, s.size);
      } else if (s.type === 1) {
        ctx.moveTo(0, -s.size/2);
        ctx.lineTo(s.size/2, s.size/2);
        ctx.lineTo(-s.size/2, s.size/2);
        ctx.closePath();
      } else {
        ctx.moveTo(0, -s.size/2);
        ctx.lineTo(s.size/2, 0);
        ctx.lineTo(0, s.size/2);
        ctx.lineTo(-s.size/2, 0);
        ctx.closePath();
      }
      ctx.stroke();
      ctx.restore();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── EDUCATION: Starfield ──
(function() {
  const c = initCanvas('canvasEducation');
  if (!c) return;
  const { canvas, ctx } = c;
  const stars = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.3,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.03 + 0.01
  }));
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.phase += s.speed;
      const alpha = (Math.sin(s.phase) + 1) / 2 * 0.5 + 0.1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,230,0,${alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── EXPERIENCE: Pixel particles floating up ──
(function() {
  const c = initCanvas('canvasExperience');
  if (!c) return;
  const { canvas, ctx } = c;
  const particles = Array.from({ length: 40 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.floor(Math.random() * 3 + 2) * 4,
    speed: Math.random() * 0.5 + 0.2,
    alpha: Math.random() * 0.15 + 0.05,
    color: Math.random() > 0.6 ? '#FF2D78' : '#0A0A0A'
  }));
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.y -= p.speed;
      if (p.y < -p.size) { p.y = canvas.height + p.size; p.x = Math.random() * canvas.width; }
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── CONTACT: Ripple circles ──
(function() {
  const c = initCanvas('canvasContact');
  if (!c) return;
  const { canvas, ctx } = c;
  const ripples = [];
  function addRipple() {
    ripples.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 0,
      maxR: Math.random() * 120 + 60,
      alpha: 0.18
    });
  }
  setInterval(addRipple, 900);
  addRipple(); addRipple(); addRipple();
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = ripples.length - 1; i >= 0; i--) {
      const rp = ripples[i];
      rp.r += 0.8;
      rp.alpha -= 0.0018;
      if (rp.alpha <= 0) { ripples.splice(i, 1); continue; }
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0,0,0,${rp.alpha})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── SECTION NAVIGATION ──
function navTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ── FIXED BOTTOM NAVIGATION ──
const NAV_SECTIONS = ['hero', 'about', 'skills', 'projects', 'education', 'experience', 'contact'];
const NAV_LABELS   = ['HERO', 'ABOUT', 'SKILLS', 'PROJECTS', 'EDUCATION', 'EXPERIENCE', 'CONTACT'];
let currentSection = 0;

// Build dots
const dotsEl = document.getElementById('fixedDots');
NAV_SECTIONS.forEach((id, i) => {
  const dot = document.createElement('div');
  dot.className = 'fixed-nav-dot' + (i === 0 ? ' active' : '');
  dot.title = NAV_LABELS[i];
  dot.addEventListener('click', () => navTo(id));
  dotsEl.appendChild(dot);
});

function updateFixedNav(idx) {
  currentSection = idx;
  const prevBtn = document.getElementById('fixedPrev');
  const nextBtn = document.getElementById('fixedNext');
  document.getElementById('fixedPrevLabel').textContent = idx > 0 ? NAV_LABELS[idx - 1] : '';
  document.getElementById('fixedNextLabel').textContent = idx < NAV_SECTIONS.length - 1 ? NAV_LABELS[idx + 1] : '';
  prevBtn.disabled = idx === 0;
  nextBtn.disabled = idx === NAV_SECTIONS.length - 1;
  document.querySelectorAll('.fixed-nav-dot').forEach((d, i) => {
    d.classList.toggle('active', i === idx);
  });
}

function navStep(dir) {
  const next = currentSection + dir;
  if (next >= 0 && next < NAV_SECTIONS.length) navTo(NAV_SECTIONS[next]);
}

// Detect current section on scroll
const sectionEls = NAV_SECTIONS.map(id => document.getElementById(id));
window.addEventListener('scroll', () => {
  const mid = window.scrollY + window.innerHeight / 2;
  let active = 0;
  sectionEls.forEach((el, i) => {
    if (el && el.offsetTop <= mid) active = i;
  });
  if (active !== currentSection) updateFixedNav(active);
}, { passive: true });

// Init
updateFixedNav(0);

// ── PROJECT IMAGES ──
// Add your real image paths here when you have them!
// Format: { src: 'img/file.png' } or { emoji: '🗄️' } for placeholder
const projectImages = {
  bigquery:  [
    { emoji: '🗄️' },
    { emoji: '📊' },
    { emoji: '🔍' },
    { emoji: '📈' },
  ],
  netflix:   [
    { emoji: '🎬' },
    { emoji: '📊' },
    { emoji: '🌍' },
    { emoji: '📺' },
  ],
  samurai:   [
    { src: 'img/SamuraiPose_MasterShot.png' },
    { emoji: '⚔️' },
    { emoji: '🎭' },
    { emoji: '🧊' },
  ],
  kimono:    [
    { src: 'img/Samurai_AnimeLike.png' },
    { emoji: '🌸' },
    { emoji: '🎎' },
    { emoji: '🧵' },
  ],
  nastalgia: [
    { emoji: '🕹️' },
    { emoji: '💾' },
    { emoji: '🎮' },
    { emoji: '👾' },
  ],
  suwuside:  [
    { emoji: '🌸' },
    { emoji: '📞' },
    { emoji: '🎨' },
    { emoji: '🎵' },
  ],
};

// ── INIT CARD SLIDERS ──
const cardTimers = {};

document.querySelectorAll('.card-slider').forEach(slider => {
  const key = slider.dataset.key;
  const imgs = projectImages[key] || [];
  if (!imgs.length) return;

  const slidesEl = slider.querySelector('.card-slides');
  const dotsEl   = slider.querySelector('.card-dots');
  let current = 0;

  // Build slides
  imgs.forEach((img, i) => {
    const slide = document.createElement('div');
    slide.className = 'card-slide' + (i === 0 ? ' active' : '');
    if (img.src) {
      const im = document.createElement('img');
      im.src = img.src; im.alt = key;
      slide.appendChild(im);
    } else {
      slide.textContent = img.emoji || '📁';
    }
    slidesEl.appendChild(slide);

    const dot = document.createElement('div');
    dot.className = 'card-dot' + (i === 0 ? ' active' : '');
    dotsEl.appendChild(dot);
  });

  function goTo(idx) {
    const slides = slidesEl.querySelectorAll('.card-slide');
    const dots   = dotsEl.querySelectorAll('.card-dot');
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (idx + imgs.length) % imgs.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  // Auto-cycle every 2.5s
  cardTimers[key] = setInterval(() => goTo(current + 1), 2500);
  // Pause on hover
  slider.addEventListener('mouseenter', () => clearInterval(cardTimers[key]));
  slider.addEventListener('mouseleave', () => {
    cardTimers[key] = setInterval(() => goTo(current + 1), 2500);
  });
});

// ── GALLERY IN MODAL ──
let galleryImages = [];
let galleryIndex  = 0;

function renderGallery() {
  const img  = projectImages[galleryImages._key] || [];
  const wrap = document.getElementById('projGalleryImg');
  const em   = document.getElementById('projGalleryEmoji');
  const cur  = img[galleryIndex];

  if (cur && cur.src) {
    wrap.src = cur.src;
    wrap.style.display = 'block';
    em.style.display = 'none';
  } else {
    wrap.style.display = 'none';
    em.style.display = 'block';
    em.textContent = (cur && cur.emoji) || '📁';
  }

  // dots
  const dotsEl = document.getElementById('projGalleryDots');
  dotsEl.innerHTML = img.map((_, i) =>
    `<div class="proj-gallery-dot${i === galleryIndex ? ' active' : ''}" onclick="galleryGoTo(${i})"></div>`
  ).join('');
}

function galleryGoTo(idx) {
  const imgs = projectImages[galleryImages._key] || [];
  galleryIndex = (idx + imgs.length) % imgs.length;
  renderGallery();
}

function galleryStep(dir) {
  const imgs = projectImages[galleryImages._key] || [];
  galleryGoTo(galleryIndex + dir);
}

// Patch openProjectModal to init gallery
const _origOpenProjectModal = openProjectModal;
openProjectModal = function(key) {
  _origOpenProjectModal(key);
  galleryImages._key = key;
  galleryIndex = 0;
  const imgs = projectImages[key] || [];
  const galleryEl = document.getElementById('projectModalGallery');
  if (imgs.length) {
    galleryEl.style.display = 'block';
    renderGallery();
  } else {
    galleryEl.style.display = 'none';
  }
};

// ── EDUCATION DATA ──
const eduData = {
  vgtu: {
    title:    '🎓 MULTIMEDIA DESIGN',
    title_uk: '🎓 МУЛЬТИМЕДІЙНИЙ ДИЗАЙН',
    color:    '#FFE600',
    period:   '2024 — 2027  (IN PROGRESS)',
    period_uk:'2024 — 2027  (НА НАВЧАННІ)',
    location: 'Vilnius Gediminas Technical University · Vilnius, Lithuania',
    location_uk: 'Вільнюський технічний університет Гедімінаса · Вільнюс, Литва',
    status:   '3RD YEAR',
    status_uk:'3-Й РІК',
    desc:     'A multidisciplinary programme combining design thinking, digital media, and data-driven communication. Focuses on building practical skills across creative tools, visual storytelling, and analytical approaches to media production.',
    desc_uk:  'Мультидисциплінарна програма що поєднує дизайн-мислення, цифрові медіа та комунікацію на основі даних. Акцент на практичних навичках — від творчих інструментів до аналітичних підходів у медіавиробництві.',
    focus:    ['Data Visualization', 'UI/UX Design', 'Digital Media', 'Visual Communication', 'Analytical Thinking', 'Multimedia Tools'],
    focus_uk: ['Візуалізація даних', 'UI/UX Дизайн', 'Цифрові медіа', 'Візуальна комунікація', 'Аналітичне мислення', 'Мультимедійні інструменти'],
    skills: [
      { label: 'Design & Visual Tools', label_uk: 'Дизайн та візуальні інструменти', value: 82 },
      { label: 'Data Storytelling',     label_uk: 'Сторітелінг з даними',            value: 78 },
      { label: 'Digital Production',   label_uk: 'Цифрове виробництво',              value: 75 },
    ],
    ach:    '▶ Applying data visualization and design skills directly to real analytical projects — bridging the gap between raw data and clear visual insight.',
    ach_uk: '▶ Застосування навичок візуалізації даних і дизайну безпосередньо в реальних аналітичних проєктах — поєднання сирих даних та зрозумілих візуальних інсайтів.',
  },
  mru: {
    title:    '🕹️ GAME DEVELOPMENT & DIGITAL ANIMATION',
    title_uk: '🕹️ РОЗРОБКА ІГОР ТА ЦИФРОВА АНІМАЦІЯ',
    color:    '#FF2D78',
    period:   '2022 — 2024  (COMPLETED)',
    period_uk:'2022 — 2024  (ЗАВЕРШЕНО)',
    location: 'Mykolo Romerio Universitetas · Vilnius, Lithuania',
    location_uk: 'Університет Миколо Ромеріса · Вільнюс, Литва',
    status:   'DIPLOMA',
    status_uk:'ДИПЛОМ',
    desc:     'Specialised programme focused on game design, interactive media, and 3D digital animation. Built strong foundations in logical thinking, technical problem-solving, and creative production — skills that translate directly into data analysis, development, and 3D work.',
    desc_uk:  'Спеціалізована програма з ігрового дизайну, інтерактивних медіа та 3D цифрової анімації. Сформував міцну базу у логічному мисленні, технічному вирішенні проблем та творчому виробництві — навички що прямо застосовні в аналітиці даних, розробці та 3D.',
    focus:    ['Game Design', '3D Modelling & Animation', 'Unity Engine', 'Game Maker Studio', 'Digital Storytelling', 'Interactive Media'],
    focus_uk: ['Гейм-дизайн', '3D Моделювання та Анімація', 'Unity Engine', 'Game Maker Studio', 'Цифровий сторітелінг', 'Інтерактивні медіа'],
    skills: [
      { label: 'Game Development',  label_uk: 'Розробка ігор',         value: 76 },
      { label: '3D Modelling',      label_uk: '3D Моделювання',         value: 80 },
      { label: 'Creative Thinking', label_uk: 'Творче мислення',        value: 85 },
    ],
    ach:    '▶ Created two original games (Unity & Game Maker) and multiple 3D stylized characters — combining technical execution with personal artistic vision.',
    ach_uk: '▶ Створив дві оригінальні ігри (Unity та Game Maker) та кілька 3D стилізованих персонажів — поєднуючи технічне виконання з особистим художнім баченням.',
  }
};

// ── OPEN EDUCATION MODAL ──
function openEduModal(key) {
  const data = eduData[key];
  if (!data) return;
  const uk = currentLang === 'uk';

  // Header color — detect brightness
  function isLight(hex) {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return (r*299 + g*587 + b*114) / 1000 > 128;
  }
  const light = isLight(data.color);
  document.getElementById('eduModalHeader').style.background = data.color;
  document.getElementById('eduModalTitle').textContent = uk ? data.title_uk : data.title;
  document.getElementById('eduModalTitle').style.color = light ? '#0A0A0A' : '#F5F5F5';

  document.getElementById('eduModalPeriod').textContent   = uk ? data.period_uk   : data.period;
  document.getElementById('eduModalLocation').textContent = uk ? data.location_uk : data.location;
  document.getElementById('eduModalStatus').textContent   = uk ? data.status_uk   : data.status;
  document.getElementById('eduModalStatus').style.borderColor = data.color;
  document.getElementById('eduModalStatus').style.color = data.color;

  document.getElementById('eduModalDesc').textContent = uk ? data.desc_uk : data.desc;

  // Focus tags
  const focusEl = document.getElementById('eduModalFocus');
  const focus = uk ? data.focus_uk : data.focus;
  focusEl.innerHTML = focus.map((f, i) =>
    `<span class="skill-modal-tag ${i % 2 === 0 ? 'pink' : ''}">${f}</span>`
  ).join('');

  // Skills bars
  const skillsEl = document.getElementById('eduModalSkills');
  skillsEl.innerHTML = data.skills.map(s => `
    <div>
      <div class="proj-bar-label">
        <span>${uk ? s.label_uk : s.label}</span>
        <span style="color:var(--yellow)">${s.value}%</span>
      </div>
      <div class="proj-bar-wrap"><div class="proj-bar-fill" style="width:${s.value}%"></div></div>
    </div>
  `).join('');

  // Achievement
  document.getElementById('eduModalAch').textContent = uk ? data.ach_uk : data.ach;

  // Labels translation
  document.getElementById('eduModalFocusLabel').textContent  = uk ? 'НАПРЯМИ НАВЧАННЯ'    : 'FOCUS AREAS';
  document.getElementById('eduModalSkillsLabel').textContent = uk ? 'ОТРИМАНІ НАВИЧКИ'    : 'SKILLS GAINED';
  document.getElementById('eduModalAchLabel').textContent    = uk ? 'ДОСЯГНЕННЯ'           : 'HIGHLIGHT';

  document.getElementById('eduOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── CLOSE EDUCATION MODAL ──
function closeEduModal(e) {
  if (e && e.target !== document.getElementById('eduOverlay')) return;
  document.getElementById('eduOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Add ESC support
const _origKeydown = document.onkeydown;
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeEduModal();
});

// ── WORK EXPERIENCE DATA ──
const workData = {
  goiteens: {
    title:    '🐍 PYTHON INSTRUCTOR',
    title_uk: '🐍 ВИКЛАДАЧ PYTHON',
    color:    '#FF2D78',
    period:   'OCT 2024 — JUN 2025',
    period_uk:'ЖОВ 2024 — ЧЕР 2025',
    company:  'GOITeens — IT Academy for Teens & Kids',
    company_uk: 'GOITeens — IT Академія для підлітків і дітей',
    location: 'Online · Ukraine / International',
    location_uk: 'Онлайн · Україна / Міжнародно',
    type:     'PART-TIME',
    type_uk:  'ЧАСТКОВА ЗАЙНЯТІСТЬ',
    about:    'GoITeens is an international online IT academy founded in Ukraine, teaching children and teenagers aged 7–16 modern programming and tech skills. Over 45,000 students have passed through their programmes. Using the 70/20/10 learning model — 70% practice, 20% mentorship, 10% theory — the academy focuses on real projects and hands-on coding. Courses include Python, Unity GameDev, Web Design, JavaScript, Minecraft and more.',
    about_uk: 'GoITeens — міжнародна онлайн IT-академія заснована в Україні, що навчає дітей та підлітків 7–16 років сучасного програмування та технологій. Понад 45 000 студентів пройшли через їх програми. Використовуючи модель навчання 70/20/10 — 70% практика, 20% менторство, 10% теорія — академія зосереджена на реальних проєктах та практичному кодінгу.',
    resp:    '· Delivered structured Python lessons focused on data handling, logic & problem-solving\n· Explained core concepts: variables, loops, control structures, functions & basic data processing\n· Reviewed and corrected student code to improve accuracy, structure and efficiency\n· Assisted learners in debugging Python programs and understanding error messages\n· Adapted teaching style to the level and pace of each student',
    resp_uk: '· Проводив структуровані уроки Python з обробки даних, логіки та вирішення задач\n· Пояснював базові концепції: змінні, цикли, керуючі структури, функції та обробку даних\n· Переглядав та виправляв код студентів для підвищення точності, структури та ефективності\n· Допомагав учням у відлагодженні Python-програм та розумінні повідомлень про помилки\n· Адаптував стиль викладання до рівня та темпу кожного студента',
    skills:   ['Python', 'Teaching', 'Code Review', 'Debugging', 'Mentoring', 'Curriculum Delivery', 'Communication'],
    skills_uk:['Python', 'Викладання', 'Code Review', 'Дебагінг', 'Менторство', 'Подача матеріалу', 'Комунікація'],
    impact:    '▶ Helped young students build a solid programming foundation — turning complex Python concepts into clear, practical exercises. Gained deep understanding of how to explain code logic to non-technical audiences, a skill that directly improves data communication and teaching ability.',
    impact_uk: '▶ Допоміг молодим студентам побудувати міцну основу програмування — перетворюючи складні концепції Python на зрозумілі практичні вправи. Отримав глибоке розуміння того, як пояснювати логіку коду нетехнічній аудиторії — навичка що напряму покращує комунікацію даних.',
  }
};

// ── OPEN WORK MODAL ──
function openWorkModal(key) {
  const data = workData[key];
  if (!data) return;
  const uk = currentLang === 'uk';

  document.getElementById('workModalHeader').style.background = data.color;
  document.getElementById('workModalTitle').textContent = uk ? data.title_uk : data.title;
  document.getElementById('workModalTitle').style.color = '#F5F5F5';

  document.getElementById('workModalPeriod').textContent   = uk ? data.period_uk   : data.period;
  document.getElementById('workModalCompany').textContent  = uk ? data.company_uk  : data.company;
  document.getElementById('workModalLocation').textContent = uk ? data.location_uk : data.location;
  document.getElementById('workModalType').textContent     = uk ? data.type_uk     : data.type;

  document.getElementById('workModalAbout').textContent = uk ? data.about_uk : data.about;

  // Responsibilities — split by \n
  const resp = (uk ? data.resp_uk : data.resp).split('\n').filter(Boolean);
  document.getElementById('workModalResp').innerHTML = resp.map(r => r).join('<br>');

  // Skills tags
  const skills = uk ? data.skills_uk : data.skills;
  document.getElementById('workModalSkills').innerHTML = skills.map((s, i) =>
    `<span class="skill-modal-tag ${i % 2 === 0 ? 'pink' : ''}">${s}</span>`
  ).join('');

  document.getElementById('workModalImpact').textContent = uk ? data.impact_uk : data.impact;

  // Labels
  document.getElementById('workModalAboutLabel').textContent  = uk ? 'ПРО КОМПАНІЮ'        : 'ABOUT THE COMPANY';
  document.getElementById('workModalRespLabel').textContent   = uk ? 'ОБОВ\'ЯЗКИ'            : 'RESPONSIBILITIES';
  document.getElementById('workModalSkillsLabel').textContent = uk ? 'ЗАСТОСОВАНІ НАВИЧКИ'  : 'SKILLS APPLIED';
  document.getElementById('workModalImpactLabel').textContent = uk ? 'ВПЛИВ'                : 'IMPACT';

  document.getElementById('workOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── CLOSE WORK MODAL ──
function closeWorkModal(e) {
  if (e && e.target !== document.getElementById('workOverlay')) return;
  document.getElementById('workOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeWorkModal();
});