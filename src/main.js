import { categories, progressionHives } from './data.js';
import { beeRarities, beesByRarity, giftedEventBeeOrder } from './bees.js';
import { enemies, enemyBySlug } from './enemies.js';
import { macros } from './macros.js';
import { header, footer, refreshIcons, searchBar, button, categoryCard, progressionCard, beeRarityCard, beeCard, enemyCard, icon, macroCard, mediaMarkup, demoMediaMarkup } from './components.js';
import { CustomCursor } from './CustomCursor.js';
import './styles.css';

const app = document.querySelector('#app');
const path = window.location.pathname.replace(/\/$/, '') || '/';

function shell(content) {
  const activePath = path.startsWith('/macros') ? '/macros' : path.startsWith('/bees') ? '/bees' : path.startsWith('/mobs') || path.startsWith('/enemies') ? '/mobs' : path === '/explore' ? '/explore' : path === '/progression' ? '/progression' : path === '/about' ? '/about' : '/';
  app.innerHTML = `${header(activePath)}<main>${content}</main>${footer()}`;
  bindGlobalInteractions();
  bindTiltCards();
  refreshIcons();
}

function homePage() {
  return `<section class="hero page-wrap">
    <div class="hero-copy reveal">
      <span class="eyebrow"><i class="pulse-dot"></i> The community resource platform</span>
      <h1>Build a better<br /><span>hive.</span></h1>
      <p class="hero-lede">The ultimate Bee Swarm Simulator resource hub.</p>
      <p class="hero-description">Discover guides, resources, tools, macros, progression information, and everything you need to navigate Bee Swarm Simulator.</p>
      ${searchBar()}
      <div class="hero-actions">${button('Explore', '/explore')}</div>
      <div class="hero-meta"><span>${icon('shield-check', 15)} Community-built knowledge</span><span class="meta-divider"></span><span>Foundation / 01</span></div>
    </div>
    <div class="hero-art" aria-hidden="true"><div class="honey-orbit orbit-one"></div><div class="honey-orbit orbit-two"></div><div class="hive-core"><span class="core-ring"></span><span class="core-mark">${icon('hexagon', 88)}</span></div><span class="art-label label-one">01 / KNOWLEDGE</span><span class="art-label label-two">HIVE SYSTEMS</span></div>
    <div class="scroll-cue"><span></span> Scroll to explore</div>
  </section>
  <section class="home-explore page-wrap section-space">
    <div class="section-heading"><div><span class="eyebrow">A growing index</span><h2>Everything in<br /><em>one place.</em></h2></div><p>Hive Division is being built as a focused, reliable layer of knowledge for players who want to spend less time searching and more time progressing.</p></div>
    <div class="category-grid">${categories.slice(0, 4).map(categoryCard).join('')}</div>
    <div class="section-endcap"><span>More systems are on the way</span><a href="/explore">View the full index ${icon('arrow-up-right', 16)}</a></div>
  </section>`;
}

function explorePage() {
  return `<section class="subpage-hero page-wrap"><span class="eyebrow">Directory / Foundation phase</span><h1>Explore <span>Hive Division.</span></h1><p>Everything you need, organized in one place.</p></section>
  <section class="explore-content page-wrap section-space"><div class="directory-intro"><span>01</span><p>A clear home for the systems, references, and tools that make a hive run. Every category below is a placeholder for what is coming next.</p></div><div class="category-grid category-grid-wide">${categories.map(categoryCard).join('')}</div></section>`;
}

function progressionPage() {
  return `<section class="subpage-hero page-wrap"><span class="eyebrow">Guide / Hive direction</span><h1>Choose your<br /><span class="hive-color-word"><i class="hive-blue">h</i><i class="hive-white">i</i><i class="hive-mixed">v</i><i class="hive-red">e</i>.</span></h1><p>Select a progression path to get started.</p></section><section class="progression-content page-wrap section-space"><div class="progression-grid">${progressionHives.map(progressionCard).join('')}</div></section>`;
}

function beesPage() {
  return `<section class="subpage-hero page-wrap"><span class="eyebrow">Directory / Hive biology</span><h1>Meet the<br /><span>bees.</span></h1><p>Explore every bee by rarity and learn what makes each one useful.</p></section><section class="bee-directory page-wrap section-space"><div class="bee-rarity-grid">${beeRarities.map(beeRarityCard).join('')}</div></section>`;
}

function enemiesPage() {
  return `<section class="subpage-hero page-wrap"><span class="eyebrow">Directory / Field threats</span><h1>Know your<br /><span>mobs.</span></h1><p>Learn what each mob does, what it drops, and when it will respawn.</p></section><section class="bee-listing page-wrap section-space"><div class="bee-listing-meta"><span>${enemies.length.toString().padStart(2, '0')} mobs</span><span>Mob information and timers sourced from the Bee Swarm Simulator Wiki.</span></div><div class="bee-grid">${enemies.map((enemyData, index) => enemyCard(enemyData, index)).join('')}</div></section>`;
}

function enemyDetailPage(enemyData) {
  const viciousTiming = enemyData.name === 'Vicious Bee' ? `<section class="enemy-info-panel enemy-info-panel-highlight"><span class="detail-label">Gifted Vicious Bee difference</span><h2>25 minutes 30 seconds</h2><p>Gifted Vicious Bee grants -15% Mob Respawn Time. That reduces the normal 30-minute respawn by 4 minutes 30 seconds.</p></section>` : '';
  return `<section class="bee-detail-hero page-wrap"><a class="back-link" href="/mobs">${icon('arrow-up-right', 15)} Back to mobs</a><div class="bee-detail-grid"><div class="bee-detail-image enemy-detail-image"><img src="${enemyData.image}" alt="${enemyData.name}" /></div><div class="bee-detail-identity"><span class="eyebrow">Mob directory / ${enemyData.type}</span><h1>${enemyData.name}</h1><p>${enemyData.overview}</p></div></div></section><section class="bee-detail-content page-wrap section-space"><div class="bee-info-grid enemy-info-grid"><section class="bee-info-panel"><span class="detail-label">What it does</span><h2>Behavior</h2><p>${enemyData.behavior}</p></section><section class="bee-info-panel"><span class="detail-label">Defeat rewards</span><h2>What it drops</h2><p>${enemyData.drops}</p></section><section class="bee-info-panel"><span class="detail-label">Drop chances</span><h2>Loot Luck</h2><p>${enemyData.luck}</p></section><section class="bee-info-panel"><span class="detail-label">Respawn timer</span><h2>${enemyData.respawn}</h2><p>The timer starts after this mob is defeated.</p></section>${viciousTiming}</div></section>`;
}

function beeRarityPage(raritySlug) {
  const rarity = beeRarities.find((item) => item.slug === raritySlug);
  if (!rarity) return beesPage();
  const bees = beesByRarity[raritySlug];
  const order = raritySlug === 'event' ? `<section class="gifted-order"><div><span class="detail-label">Gifted event bee order</span><h2>Build your gifting path.</h2><p>Choose a rarity for each slot, then add the order you want to follow.</p></div><div class="gifted-order-track">${giftedEventBeeOrder.length ? giftedEventBeeOrder.map((beeData, index) => `${index ? `<span class="order-arrow">${icon('arrow-up-right', 18)}</span>` : ''}<a class="order-bee" href="/bees/${beeData.rarity}/${beeData.slug}"><img src="${beeData.image}" alt="${beeData.name}" /><strong>${beeData.name}</strong><small>${beeData.rarity}</small></a>`).join('') : '<div class="order-empty">Order slots are ready. Add the sequence when it is decided.</div>'}</div></section>` : '';
  return `<section class="subpage-hero page-wrap"><a class="back-link" href="/bees">${icon('arrow-up-right', 15)} Back to bee rarities</a><span class="eyebrow">Bee directory / ${rarity.name}</span><h1>${rarity.name}<br /><span>bees.</span></h1><p>${rarity.description}</p></section><section class="bee-listing page-wrap section-space"><div class="bee-listing-meta"><span>${bees.length.toString().padStart(2, '0')} bees</span><span>Icons and summaries sourced from the Bee Swarm Simulator Wiki.</span></div><div class="bee-grid">${bees.map(beeCard).join('')}</div>${order}</section>`;
}

function beeDetailPage(beeData) {
  const giftedSpecial = beeData.giftedSpecialAbility ? `<section class="bee-info-panel bee-info-panel-special"><span class="detail-label">Gifted special ability</span><h2>Extra effect when gifted</h2><p>${beeData.giftedSpecialAbility}</p></section>` : '';
  return `<section class="bee-detail-hero page-wrap"><a class="back-link" href="/bees/${beeData.rarity}">${icon('arrow-up-right', 15)} Back to ${beeData.rarity} bees</a><div class="bee-detail-grid"><div class="bee-detail-image bee-card-${beeData.color}"><img src="${beeData.image}" alt="${beeData.name}" /></div><div class="bee-detail-identity"><span class="eyebrow">Bee directory / ${beeData.rarity}</span><h1>${beeData.name}</h1><p>${beeData.description}</p><a class="wiki-source" href="${beeData.wikiUrl}" target="_blank" rel="noreferrer">Open BSS Wiki source ${icon('external-link', 14)}</a></div></div></section><section class="bee-detail-content page-wrap section-space"><div class="bee-info-grid"><section class="bee-info-panel"><span class="detail-label">About this bee</span><h2>How it helps</h2><p>${beeData.description}</p></section><section class="bee-info-panel"><span class="detail-label">Ability</span><h2>What it does</h2><p>${beeData.ability}</p></section><section class="bee-info-panel"><span class="detail-label">Ability tokens</span><div class="token-list">${beeData.tokens.map((token) => `<div>${icon('hexagon', 14)}<span>${token}</span></div>`).join('')}</div></section><section class="bee-info-panel"><span class="detail-label">Gifted ability</span><h2>${beeData.giftedAbility}</h2><p>This hive-wide bonus is granted when this bee becomes gifted. Details are sourced from the BSS Wiki.</p></section>${giftedSpecial}</div></section>`;
}

function aboutPage() {
  return `<section class="subpage-hero page-wrap"><span class="eyebrow">About the project</span><h1>Built for the<br /><span>next generation</span><br />of hives.</h1><p>An independent community resource platform for Bee Swarm Simulator.</p></section>
  <section class="about-content page-wrap section-space"><div class="about-panel"><span class="about-symbol">${icon('hexagon', 44)}</span><div><span class="eyebrow">Why Hive Division</span><h2>Less noise.<br /><em>More direction.</em></h2><p>Hive Division is being built to organize useful information and resources into one place. The goal is a polished, practical companion that makes the journey through Bee Swarm Simulator easier to understand and more enjoyable.</p><p class="disclaimer">Hive Division is an independent community project and is not affiliated with Roblox or Bee Swarm Simulator.</p></div></div></section>`;
}

function macroDirectory() {
  const platforms = [...new Set(macros.flatMap((macro) => macro.platforms))];
  const statuses = [...new Set(macros.map((macro) => macro.status))];
  return `<section class="subpage-hero macro-directory-hero page-wrap"><div><span class="eyebrow">Directory / Macro systems</span><h1>Bee Swarm<br /><span>Simulator macros.</span></h1><p>Explore, compare, and learn about Bee Swarm Simulator macro projects.</p></div><div class="directory-count"><strong>${macros.length.toString().padStart(2, '0')}</strong><span>verified<br />projects</span></div></section><section class="macro-directory page-wrap section-space"><div class="trust-notice">${icon('shield-check', 16)} <span>Hive Division does not develop or audit third-party macros. Always verify downloads and links through the project's official sources.</span></div><div class="macro-toolbar"><label class="macro-search">${icon('search', 17)}<input id="macro-search" type="search" placeholder="Search macros…" aria-label="Search macros" /></label><div class="filter-controls"><label><span>Platform</span><select id="platform-filter"><option value="all">All platforms</option>${platforms.map((item) => `<option>${item}</option>`).join('')}</select></label><label><span>Status</span><select id="status-filter"><option value="all">All statuses</option>${statuses.map((item) => `<option>${item}</option>`).join('')}</select></label><label><span>Sort</span><select id="sort-filter"><option value="recommended">Recommended</option><option value="rating">Highest rated</option><option value="rank">Highest ranked</option><option value="alpha">Alphabetical</option></select></label></div></div><div class="macro-results-meta"><span id="macro-result-count">${macros.length} projects</span><span>Editorial rankings based on publicly available information and community feedback.</span></div><div class="macro-grid" id="macro-grid">${macros.map(macroCard).join('')}</div><div class="ranking-note">Hive Division rankings are editorial assessments based on publicly available information and community feedback and may change as projects are updated.</div></section>`;
}

function detailList(title, items) {
  return items?.length ? `<section class="detail-section"><div class="detail-label">${title}</div><div class="detail-list">${items.map((item) => `<div>${icon('check', 15)} ${item}</div>`).join('')}</div></section>` : '';
}

function detailSupplement(macro) {
  return `<section class="detail-section download-section"><div class="detail-label">Download</div><div class="resource-grid">${macro.downloads.map((download) => `<a class="resource-card" href="${download.url}" target="_blank" rel="noreferrer">${icon('download', 18)}<span><strong>${download.label}</strong><small>${download.description}</small></span>${icon('external-link', 15)}</a>`).join('')}</div></section><section class="detail-section"><div class="detail-label">Official links & sources</div><div class="link-list">${[...macro.links, ...macro.sources].map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer"><span>${link.label}</span>${icon('external-link', 14)}</a>`).join('')}</div></section><div class="detail-meta-grid"><div><span>Current version</span><strong>${macro.version || 'Not available yet'}</strong></div><div><span>Last updated</span><strong>${macro.lastUpdated || 'Not available yet'}</strong></div><div><span>Last verified</span><strong>${macro.lastVerified}</strong></div>${macro.githubStats.stars !== null ? `<div><span>GitHub stars</span><strong>${macro.githubStats.stars.toLocaleString()}</strong></div>` : ''}</div>`;
}

function macroDetail(macro) {
  const github = macro.links.find((link) => link.type === 'github-repository');
  return `<section class="macro-detail-hero page-wrap"><a class="back-link" href="/macros">${icon('arrow-up-right', 15)} Back to macro directory</a><div class="detail-hero-grid"><div class="detail-cover-wrap">${mediaMarkup(macro)}</div><div class="detail-identity"><div class="detail-rank">#${macro.rank} / HIVE DIVISION RANKING</div><h1>${macro.name}</h1><p class="detail-developer">by ${macro.developer}</p><div class="detail-rating"><span>${icon('star', 19)} ${macro.rating.toFixed(1)} / 5.0</span><small>Hive Division editorial rating</small></div><div class="detail-chips"><span>${macro.status}</span>${macro.platforms.map((item) => `<span>${item}</span>`).join('')}</div><div class="macro-tags detail-tags">${macro.features.map((feature) => `<span>${feature}</span>`).join('')}</div><div class="detail-actions">${macro.downloads[0] ? button('Download', macro.downloads[0].url, 'primary', 'download') : ''}${github ? button('GitHub', github.url, 'secondary', 'github') : ''}</div></div></div></section><section class="detail-content page-wrap"><div class="trust-notice">${icon('shield-check', 16)} <span>Verify every download through the project's official sources. Hive Division does not develop or audit third-party macros.</span></div><section class="feature-callout"><div class="detail-label">What does this macro do?</div><h2>${macro.whatItDoes}</h2></section><section class="detail-section overview-section"><div class="detail-label">Overview</div>${macro.longDescription.map((paragraph) => `<p>${paragraph}</p>`).join('')}</section><div class="detail-two-col">${detailList('Features', macro.features)}${detailList('Requirements', macro.requirements)}${detailList('Supported fields', macro.supportedFields)}${detailList('Limitations', macro.limitations)}${detailList('Known issues', macro.knownIssues)}</div>${macro.gallery.length ? `<section class="detail-section"><div class="detail-label">Screenshots & images</div><div class="gallery-grid">${macro.gallery.map((item) => `<button class="gallery-item" type="button"><img src="${item.url}" alt="${item.title || macro.name + ' screenshot'}" loading="lazy" /><span>${item.title || 'Open image'}</span></button>`).join('')}</div></section>` : ''}<section class="detail-section download-section"><div class="detail-label">Download</div><div class="resource-grid">${macro.downloads.map((download) => `<a class="resource-card" href="${download.url}" target="_blank" rel="noreferrer">${icon('download', 18)}<span><strong>${download.label}</strong><small>${download.description}</small></span>${icon('external-link', 15)}</a>`).join('')}</div></section><section class="detail-section"><div class="detail-label">Official links & sources</div><div class="link-list">${[...macro.links, ...macro.sources].map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer"><span>${link.label}</span>${icon('external-link', 14)}</a>`).join('')}</div></section><div class="detail-meta-grid"><div><span>Current version</span><strong>${macro.version || 'Not available yet'}</strong></div><div><span>Last updated</span><strong>${macro.lastUpdated || 'Not available yet'}</strong></div><div><span>Last verified</span><strong>${macro.lastVerified}</strong></div>${macro.githubStats.stars !== null ? `<div><span>GitHub stars</span><strong>${macro.githubStats.stars.toLocaleString()}</strong></div>` : ''}</div></section>`;
  return `<section class="macro-detail-hero page-wrap"><a class="back-link" href="/macros">${icon('arrow-up-right', 15)} Back to macro directory</a><div class="detail-hero-grid"><div class="detail-cover-wrap">${mediaMarkup(macro)}</div><div class="detail-identity"><div class="detail-rank">#${macro.rank} / HIVE DIVISION RANKING</div><h1>${macro.name}</h1><p class="detail-developer">by ${macro.developer}</p><div class="detail-rating"><span>${icon('star', 19)} ${macro.rating.toFixed(1)} / 5.0</span><small>Hive Division editorial rating</small></div><div class="detail-chips"><span>${macro.status}</span>${macro.platforms.map((item) => `<span>${item}</span>`).join('')}</div><div class="macro-tags detail-tags">${macro.features.map((feature) => `<span>${feature}</span>`).join('')}</div><div class="detail-actions">${macro.downloads[0] ? button('Download', macro.downloads[0].url, 'primary', 'download') : ''}${github ? button('GitHub', github.url, 'secondary', 'github') : ''}</div></div></div></section><section class="detail-content page-wrap"><div class="trust-notice">${icon('shield-check', 16)} <span>Verify every download through the project's official sources. Hive Division does not develop or audit third-party macros.</span></div><section class="feature-callout"><div class="detail-label">What does this macro do?</div><h2>${macro.whatItDoes}</h2></section><div class="detail-overview-grid"><section class="detail-section overview-section"><div class="detail-label">Overview</div>${macro.longDescription.map((paragraph) => `<p>${paragraph}</p>`).join('')}</section><section class="detail-section detail-demo-section"><div class="detail-label">Working demo</div><div class="detail-demo tilt-card" data-tilt>${demoMediaMarkup(macro)}</div></section></div><div class="detail-two-col">${detailList('Features', macro.features)}${detailList('Requirements', macro.requirements)}${detailList('Supported fields', macro.supportedFields)}${detailList('Limitations', macro.limitations)}${detailList('Known issues', macro.knownIssues)}</div>${macro.gallery.length ? `<section class="detail-section"><div class="detail-label">Screenshots & images</div><div class="gallery-grid">${macro.gallery.map((item) => `<button class="gallery-item" type="button"><img src="${item.url}" alt="${item.title || macro.name + ' screenshot'}" loading="lazy" /><span>${item.title || 'Open image'}</span></button>`).join('')}</div></section>` : ''}${macro.changelog.length ? `<section class="detail-section"><div class="detail-label">Changelog</div><div class="changelog-list">${macro.changelog.map((item) => `<div><strong>${item.version}</strong><span>${item.date}</span><p>${item.notes}</p></div>`).join('')}</div></section>` : ''}</section>`;
}

function renderMacroResults() {
  const query = document.querySelector('#macro-search')?.value.toLowerCase() || '';
  const platform = document.querySelector('#platform-filter')?.value || 'all';
  const status = document.querySelector('#status-filter')?.value || 'all';
  const category = document.querySelector('#category-filter')?.value || 'all';
  const developer = document.querySelector('#developer-filter')?.value || 'all';
  const feature = document.querySelector('#feature-filter')?.value || 'all';
  const rating = Number(document.querySelector('#rating-filter')?.value || 0);
  const sort = document.querySelector('#sort-filter')?.value || 'recommended';
  const searchable = (macro) => [macro.name, macro.developer, macro.description, macro.status, ...macro.category, ...macro.platforms, ...macro.features].join(' ').toLowerCase();
  const results = macros.filter((macro) => (!query || searchable(macro).includes(query)) && (platform === 'all' || macro.platforms.includes(platform)) && (status === 'all' || macro.status === status) && (category === 'all' || macro.category.includes(category)) && (developer === 'all' || macro.developer === developer) && (feature === 'all' || macro.features.includes(feature)) && macro.rating >= rating).sort((a, b) => sort === 'rating' ? b.rating - a.rating : sort === 'rank' ? a.rank - b.rank : sort === 'alpha' ? a.name.localeCompare(b.name) : 0);
  document.querySelector('#macro-grid').innerHTML = results.length ? results.map(macroCard).join('') : '<div class="empty-results">No macro projects match those filters.</div>';
  document.querySelector('#macro-result-count').textContent = `${results.length} project${results.length === 1 ? '' : 's'}`;
  bindTiltCards();
  refreshIcons();
}

function bindTiltCards() {
  document.querySelectorAll('[data-tilt]').forEach((card) => {
    let frame;
    card.addEventListener('pointermove', (event) => {
      if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        card.style.setProperty('--rotate-x', `${(0.5 - y) * 6}deg`);
        card.style.setProperty('--rotate-y', `${(x - 0.5) * 6}deg`);
        card.style.setProperty('--cover-rotate-x', `${(0.5 - y) * 4}deg`);
        card.style.setProperty('--cover-rotate-y', `${(x - 0.5) * 4}deg`);
        card.style.setProperty('--cover-shift-x', `${(x - 0.5) * 8}px`);
        card.style.setProperty('--cover-shift-y', `${(y - 0.5) * 8}px`);
        card.style.setProperty('--glow-x', `${x * 100}%`);
        card.style.setProperty('--glow-y', `${y * 100}%`);
      });
      const hoverVideo = card.querySelector('.macro-cover-hover-video');
      if (hoverVideo) {
        card.classList.add('is-playing-demo');
        if (hoverVideo.dataset.previewSrc && !hoverVideo.src) hoverVideo.src = hoverVideo.dataset.previewSrc;
        if (hoverVideo instanceof HTMLVideoElement) hoverVideo.play().catch(() => {});
      } else {
        const video = card.querySelector('video');
        if (video) video.play().catch(() => {});
      }
    });
    card.addEventListener('pointerleave', () => { cancelAnimationFrame(frame); card.classList.remove('is-playing-demo'); card.style.setProperty('--rotate-x', '0deg'); card.style.setProperty('--rotate-y', '0deg'); card.style.setProperty('--cover-rotate-x', '0deg'); card.style.setProperty('--cover-rotate-y', '0deg'); card.style.setProperty('--cover-shift-x', '0px'); card.style.setProperty('--cover-shift-y', '0px'); card.style.setProperty('--glow-x', '50%'); card.style.setProperty('--glow-y', '50%'); const video = card.querySelector('video'); if (video) { video.pause(); video.currentTime = 0; } const preview = card.querySelector('[data-preview-src]'); if (preview) preview.removeAttribute('src'); });
  });
}

function bindGlobalInteractions() {
  const menuButton = document.querySelector('.menu-trigger');
  const mobileMenu = document.querySelector('.mobile-menu');
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.innerHTML = icon(open ? 'menu' : 'x', 20);
    mobileMenu.classList.toggle('is-open', !open);
    mobileMenu.setAttribute('aria-hidden', String(open));
    refreshIcons();
  });

  document.querySelector('.search-trigger')?.addEventListener('click', () => document.querySelector('.search-bar input')?.focus());
  const macroWebsite = detailMacro?.links.find((link) => link.type === 'macro-website');
  const githubButton = document.querySelector('.github-button');
  if (macroWebsite && githubButton) githubButton.insertAdjacentHTML('afterend', button('Website', macroWebsite.url, 'secondary', 'external-link', 'website-button'));
  document.querySelectorAll('.download-action').forEach((downloadButton) => downloadButton.addEventListener('click', (event) => {
    event.preventDefault();
    const githubUrl = downloadButton.closest('.detail-actions')?.querySelector('.github-button')?.href || downloadButton.href;
    const repository = githubUrl.match(/^https:\/\/github\.com\/([^/]+\/[^/]+)/)?.[1];
    if (!repository) return;
    const archive = document.createElement('a');
    archive.href = `https://github.com/${repository}/archive/refs/heads/main.zip`;
    archive.download = '';
    document.body.append(archive);
    archive.click();
    archive.remove();
  }));
  const filterControls = document.querySelector('.filter-controls');
  if (filterControls && !document.querySelector('#category-filter')) {
    const categories = [...new Set(macros.flatMap((macro) => macro.category))];
    const developers = [...new Set(macros.map((macro) => macro.developer))];
    const features = [...new Set(macros.flatMap((macro) => macro.features))].sort();
    filterControls.insertAdjacentHTML('beforeend', `<label><span>Category</span><select id="category-filter"><option value="all">All categories</option>${categories.map((item) => `<option>${item}</option>`).join('')}</select></label><label><span>Developer</span><select id="developer-filter"><option value="all">All developers</option>${developers.map((item) => `<option>${item}</option>`).join('')}</select></label><label><span>Feature</span><select id="feature-filter"><option value="all">All features</option>${features.map((item) => `<option>${item}</option>`).join('')}</select></label><label><span>Min rating</span><select id="rating-filter"><option value="0">Any rating</option><option value="4">4.0+</option><option value="4.5">4.5+</option><option value="5">5.0</option></select></label>`);
  }
  ['macro-search', 'platform-filter', 'status-filter', 'category-filter', 'developer-filter', 'feature-filter', 'rating-filter', 'sort-filter'].forEach((id) => document.querySelector(`#${id}`)?.addEventListener('input', renderMacroResults));
  document.querySelectorAll('.gallery-item').forEach((item) => item.addEventListener('click', () => {
    const image = item.querySelector('img');
    const lightbox = document.createElement('dialog');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `<button type="button" aria-label="Close image">${icon('x', 20)}</button><img src="${image.src}" alt="${image.alt}" />`;
    document.body.append(lightbox);
    lightbox.showModal();
    refreshIcons();
    lightbox.querySelector('button').addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('close', () => lightbox.remove());
  }));
}

const detailSlug = path.startsWith('/macros/') ? path.split('/')[2] : null;
const detailMacro = detailSlug ? macros.find((macro) => macro.slug === detailSlug) : null;
const beeRaritySlug = path.startsWith('/bees/') ? path.split('/')[2] : null;
const beeSlug = path.startsWith('/bees/') ? path.split('/')[3] : null;
const detailBee = beeSlug ? Object.values(beesByRarity).flat().find((beeData) => beeData.rarity === beeRaritySlug && beeData.slug === beeSlug) : null;
const enemySlug = path.startsWith('/enemies/') ? path.split('/')[2] : null;
const mobSlug = path.startsWith('/mobs/') ? path.split('/')[2] : enemySlug;
const detailEnemy = mobSlug ? enemyBySlug(mobSlug) : null;
shell(detailMacro ? macroDetail(detailMacro) : detailBee ? beeDetailPage(detailBee) : detailEnemy ? enemyDetailPage(detailEnemy) : path === '/macros' || path.startsWith('/macros/') ? macroDirectory() : path === '/explore' ? explorePage() : path === '/progression' ? progressionPage() : path === '/bees' ? beesPage() : path === '/mobs' || path === '/enemies' ? enemiesPage() : beeRaritySlug ? beeRarityPage(beeRaritySlug) : path === '/about' ? aboutPage() : homePage());
if (detailMacro) document.querySelector('.detail-content')?.insertAdjacentHTML('beforeend', detailSupplement(detailMacro));
CustomCursor();

if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').then((registration) => registration.update()).catch(() => {}));
}
