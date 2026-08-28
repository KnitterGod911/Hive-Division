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

export function button(label, href, variant = 'primary', iconName = 'arrow-up-right', className = '') {
  const actionClass = label === 'Download' ? 'download-action' : label === 'GitHub' ? 'github-button' : '';
  return `<a class="button button-${variant} ${actionClass} ${className}" href="${href}">${label}${icon(iconName, 17)}</a>`;
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

export function progressionCard(hive, index) {
  return `<a class="progression-card progression-card-${hive.color} tilt-card" href="${hive.href}" style="--delay: ${index * 55}ms" data-tilt>
    <span class="progression-card-cover"><span class="progression-card-mark"><img class="progression-card-icon" src="${hive.icon}" alt="${hive.name.replace('Hive', 'Mask')}" loading="lazy" /></span><span class="progression-bees" aria-hidden="true">${Array.from({ length: 6 }, (_, beeIndex) => `<img src="${hive.bees[beeIndex % hive.bees.length]}" alt="" style="--bee-index: ${beeIndex}" />`).join('')}</span><span class="progression-card-index">0${index + 1}</span></span>
    <span class="progression-card-footer"><strong>${hive.name}</strong>${icon('arrow-up-right', 17)}</span>
  </a>`;
}

function mediaMarkup(macro, compact = false) {
  const fallback = `<span class="media-placeholder"><span>${icon('hexagon', compact ? 25 : 38)}</span><b>MEDIA COMING SOON</b><small>Add cover media in public/images/macros/${macro.slug}/</small></span>`;
  const image = macro.coverImage ? `<img class="macro-cover-image" src="${macro.coverImage}" alt="${macro.name} cover" loading="lazy" />` : fallback;
  const mediaType = macro.coverImage ? `${icon('image', 13)} Static cover` : `${icon('hexagon', 13)} Media slot`;
  return `<div class="macro-media">${image}<span class="media-type">${mediaType}</span></div>`;
}

function youtubeEmbedUrl(sourceUrl, autoplay = false) {
  const videoId = new URL(sourceUrl).searchParams.get('v');
  const params = new URLSearchParams({ autoplay: autoplay ? '1' : '0', mute: '1', loop: '1', playlist: videoId, controls: autoplay ? '0' : '1', playsinline: '1', origin: window.location.origin, rel: '0' });
  return `https://www.youtube.com/embed/${videoId}?${params}`;
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

export function demoMediaMarkup(macro) {
  const demo = macro.hoverPreview || macro.demoMedia?.[0];
  if (!demo) return `<div class="demo-media demo-media-empty"><span>${icon('play', 24)}</span><strong>WORKING DEMO PENDING</strong><small>No official GIF or video has been published for this project yet.</small></div>`;
  const media = demo.sourceUrl ? `<iframe src="${youtubeEmbedUrl(demo.sourceUrl)}" title="${macro.name} working demo" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" loading="lazy"></iframe>` : demo.type === 'video' ? `<video src="${demo.src}" muted loop playsinline controls preload="metadata"></video>` : `<img src="${demo.src}" alt="${demo.alt || `${macro.name} working demo`}" loading="lazy" />`;
  return `<div class="demo-media"><div class="demo-media-frame">${media}<span class="media-type">${icon(demo.type === 'video' ? 'video' : 'play', 13)} Working demo</span></div><div class="demo-media-attribution"><small>Title: ${demo.title}</small><small>Source: ${demo.sourceName}</small><small>Creator: ${demo.creator}</small><a href="${demo.sourceUrl}" target="_blank" rel="noreferrer">View Original ${icon('arrow-up-right', 13)}</a></div></div>`;
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
