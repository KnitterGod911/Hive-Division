import { categories } from './data.js';
import { header, footer, refreshIcons, searchBar, button, categoryCard, icon } from './components.js';
import './styles.css';

const app = document.querySelector('#app');
const path = window.location.pathname.replace(/\/$/, '') || '/';

function shell(content) {
  const activePath = path === '/explore' ? '/explore' : path === '/about' ? '/about' : '/';
  app.innerHTML = `${header(activePath)}<main>${content}</main>${footer()}`;
  bindGlobalInteractions();
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
      <div class="hero-actions">${button('Explore', '/explore')} ${button('Browse resources', '/explore', 'secondary', 'command')}</div>
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

function aboutPage() {
  return `<section class="subpage-hero page-wrap"><span class="eyebrow">About the project</span><h1>Built for the<br /><span>next generation</span><br />of hives.</h1><p>An independent community resource platform for Bee Swarm Simulator.</p></section>
  <section class="about-content page-wrap section-space"><div class="about-panel"><span class="about-symbol">${icon('hexagon', 44)}</span><div><span class="eyebrow">Why Hive Division</span><h2>Less noise.<br /><em>More direction.</em></h2><p>Hive Division is being built to organize useful information and resources into one place. The goal is a polished, practical companion that makes the journey through Bee Swarm Simulator easier to understand and more enjoyable.</p><p class="disclaimer">Hive Division is an independent community project and is not affiliated with Roblox or Bee Swarm Simulator.</p></div></div></section>`;
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

  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty('--rotate-x', `${(0.5 - y) * 7}deg`);
      card.style.setProperty('--rotate-y', `${(x - 0.5) * 7}deg`);
      card.style.setProperty('--glow-x', `${x * 100}%`);
      card.style.setProperty('--glow-y', `${y * 100}%`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rotate-x', '0deg');
      card.style.setProperty('--rotate-y', '0deg');
      card.style.setProperty('--glow-x', '50%');
      card.style.setProperty('--glow-y', '50%');
    });
  });

  document.querySelector('.search-trigger')?.addEventListener('click', () => document.querySelector('.search-bar input')?.focus());
}

shell(path === '/explore' ? explorePage() : path === '/about' ? aboutPage() : homePage());
