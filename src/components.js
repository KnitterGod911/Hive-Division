import { createIcons, ArrowUpRight, Search, Menu, X, Hexagon, Command, Sparkles, ShieldCheck, Bot, BookOpen, TrendingUp, Package, ScrollText, Map, Wrench, Filter, SlidersHorizontal, Star, ExternalLink, Play, Image, Video, Github, Download, CircleAlert, Check, ChevronDown } from 'lucide';
import { footerLinks } from './data.js';

const iconSet = { ArrowUpRight, Search, Menu, X, Hexagon, Command, Sparkles, ShieldCheck, Bot, BookOpen, TrendingUp, Package, ScrollText, Map, Wrench, Filter, SlidersHorizontal, Star, ExternalLink, Play, Image, Video, Github, Download, CircleAlert, Check, ChevronDown };

export function icon(name, size = 18) {
  return `<i data-lucide="${name}" width="${size}" height="${size}" aria-hidden="true"></i>`;
}

export function refreshIcons() {
  createIcons({ icons: iconSet, attrs: { 'stroke-width': 1.8 } });
}

export function header(activePath) {
  return `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="/" aria-label="Hive Division home">
          <span class="brand-mark">${icon('hexagon', 22)}</span>
          <span class="brand-name">HIVE <b>DIVISION</b></span>
        </a>
        <nav class="desktop-nav" aria-label="Primary navigation">
          ${footerLinks.map((link) => `<a class="nav-link ${activePath === link.href ? 'is-active' : ''}" href="${link.href}">${link.label}</a>`).join('')}
        </nav>
        <div class="header-actions">
          <button class="icon-button search-trigger" type="button" aria-label="Open search" title="Search">${icon('search', 18)}</button>
          <button class="icon-button menu-trigger" type="button" aria-label="Open menu" aria-expanded="false">${icon('menu', 20)}</button>
        </div>
      </div>
      <div class="mobile-menu" aria-hidden="true">
        <nav aria-label="Mobile navigation">
          ${footerLinks.map((link) => `<a class="mobile-nav-link ${activePath === link.href ? 'is-active' : ''}" href="${link.href}">${link.label}<span>${icon('arrow-up-right', 16)}</span></a>`).join('')}
        </nav>
      </div>
    </header>`;
}

export function searchBar() {
  return `<form class="search-bar" role="search" onsubmit="return false">
    ${icon('search', 19)}
    <input type="search" placeholder="Search Hive Division…" aria-label="Search Hive Division" />
    <span class="search-key">⌘ K</span>
  </form>`;
}

export function button(label, href, variant = 'primary', iconName = 'arrow-up-right') {
  return `<a class="button button-${variant}" href="${href}">${label}${icon(iconName, 17)}</a>`;
}

export function categoryCard(category, index) {
  return `<a class="category-card tilt-card" href="${category.href || `/explore#${category.name.toLowerCase()}`}" style="--delay: ${index * 55}ms" data-tilt>
    <span class="card-glow"></span>
    <span class="category-icon">${icon(category.icon, 22)}</span>
    <span class="card-content">
      <span class="card-kicker">${category.status}</span>
      <strong>${category.name}</strong>
      <span class="card-description">${category.description}</span>
    </span>
    <span class="card-arrow">${icon('arrow-up-right', 18)}</span>
  </a>`;
}

function mediaMarkup(macro, compact = false) {
  const fallback = `<span class="media-placeholder"><span>${icon('hexagon', compact ? 25 : 38)}</span><b>MEDIA COMING SOON</b><small>Add cover media in public/images/macros/${macro.slug}/</small></span>`;
  const media = macro.coverVideo ? `<video class="macro-cover-video" src="${macro.coverVideo}" muted loop playsinline preload="none"></video>` : macro.coverGif ? `<img class="macro-cover-gif" src="${macro.coverGif}" alt="${macro.name} animated cover" loading="lazy" />` : macro.coverImage ? `<img class="macro-cover-image" src="${macro.coverImage}" alt="${macro.name} cover" loading="lazy" />` : fallback;
  const mediaType = macro.coverVideo ? `${icon('video', 13)} Video cover` : macro.coverGif ? `${icon('play', 13)} GIF cover` : macro.coverImage ? `${icon('image', 13)} Static cover` : `${icon('hexagon', 13)} Media slot`;
  return `<div class="macro-media">${media}<span class="media-type">${mediaType}</span></div>`;
}

export function macroCard(macro) {
  return `<article class="macro-card tilt-card" data-tilt data-macro="${macro.slug}">
    <a href="/macros/${macro.slug}" class="macro-card-link" aria-label="View ${macro.name}">
      <div class="macro-card-top"><span class="rank-badge">#${macro.rank}</span><span class="status-badge ${macro.status === 'Unmaintained' ? 'is-muted' : ''}"><i></i>${macro.status}</span></div>
      ${mediaMarkup(macro, true)}
      <div class="macro-card-info"><div class="macro-title-row"><div><h3>${macro.name}</h3><p>${macro.developer}</p></div><span class="macro-rating">${icon('star', 14)} ${macro.rating.toFixed(1)}</span></div><p class="macro-description">${macro.description}</p><div class="macro-tags">${macro.features.slice(0, 3).map((feature) => `<span>${feature}</span>`).join('')}</div></div>
      <span class="macro-card-footer">View macro ${icon('arrow-up-right', 16)}</span>
    </a>
  </article>`;
}

export { mediaMarkup };

export function footer() {
  return `<footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand" href="/" aria-label="Hive Division home"><span class="brand-mark">${icon('hexagon', 22)}</span><span class="brand-name">HIVE <b>DIVISION</b></span></a>
        <p>The ultimate Bee Swarm Simulator resource hub.</p>
      </div>
      <div class="footer-column"><span class="footer-label">Navigate</span>${footerLinks.map((link) => `<a href="${link.href}">${link.label}</a>`).join('')}</div>
      <div class="footer-column"><span class="footer-label">Status</span><span class="status-line"><i class="status-dot"></i> Foundation phase</span><span class="footer-muted">Built for the community.</span></div>
    </div>
    <div class="footer-bottom"><span>© ${new Date().getFullYear()} Hive Division</span><span>Independent community project. Not affiliated with Roblox or Bee Swarm Simulator.</span></div>
  </footer>`;
}
