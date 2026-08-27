import { createIcons, ArrowUpRight, Search, Menu, X, Hexagon, Command, Sparkles, ShieldCheck, Bot, BookOpen, TrendingUp, Package, ScrollText, Map, Wrench } from 'lucide';
import { footerLinks } from './data.js';

const iconSet = { ArrowUpRight, Search, Menu, X, Hexagon, Command, Sparkles, ShieldCheck, Bot, BookOpen, TrendingUp, Package, ScrollText, Map, Wrench };

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
  return `<a class="category-card tilt-card" href="/explore#${category.name.toLowerCase()}" style="--delay: ${index * 55}ms" data-tilt>
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
