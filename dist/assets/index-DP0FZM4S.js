(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const f=[{name:"Macros",description:"Build smarter routines for longer sessions.",icon:"bot",status:"Coming soon"},{name:"Guides",description:"Clear paths through every stage of the hive.",icon:"book-open",status:"Coming soon"},{name:"Progression",description:"See what to chase next, at every level.",icon:"trending-up",status:"Coming soon"},{name:"Items",description:"A future reference for every useful pickup.",icon:"package",status:"Coming soon"},{name:"Bees",description:"Understand the parts that make a hive work.",icon:"hexagon",status:"Coming soon"},{name:"Quests",description:"Track the road to your next big reward.",icon:"scroll-text",status:"Coming soon"},{name:"Fields",description:"Plan your routes through the pollen fields.",icon:"map",status:"Coming soon"},{name:"Tools",description:"Practical utilities for sharper decisions.",icon:"wrench",status:"Coming soon"}],d=[{label:"Home",href:"/"},{label:"Explore",href:"/explore"},{label:"About",href:"/about"}];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=(e,a,s=[])=>{const t=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(a).forEach(o=>{t.setAttribute(o,String(a[o]))}),s.length&&s.forEach(o=>{const n=b(...o);t.appendChild(n)}),t};var A=([e,a,s])=>b(e,a,s);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=e=>Array.from(e.attributes).reduce((a,s)=>(a[s.name]=s.value,a),{}),k=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",C=e=>e.flatMap(k).map(s=>s.trim()).filter(Boolean).filter((s,t,o)=>o.indexOf(s)===t).join(" "),H=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(a,s,t)=>s.toUpperCase()+t.toLowerCase()),g=(e,{nameAttr:a,icons:s,attrs:t})=>{var m;const o=e.getAttribute(a);if(o==null)return;const n=H(o),c=s[n];if(!c)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const l=E(e),[$,x,S]=c,u={...x,"data-lucide":o,...t,...l},h=C(["lucide",`lucide-${o}`,l,t]);h&&Object.assign(u,{class:h});const M=A([$,u,S]);return(m=e.parentNode)==null?void 0:m.replaceChild(M,e)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=["svg",r,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=["svg",r,[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=["svg",r,[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=["svg",r,[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=["svg",r,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=["svg",r,[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=["svg",r,[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=["svg",r,[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"}],["path",{d:"m7.5 4.27 9 5.15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=["svg",r,[["path",{d:"M15 12h-5"}],["path",{d:"M15 8h-5"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=["svg",r,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=["svg",r,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=["svg",r,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=["svg",r,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=["svg",r,[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=["svg",r,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=({icons:e={},nameAttr:a="data-lucide",attrs:s={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const t=document.querySelectorAll(`[${a}]`);if(Array.from(t).forEach(o=>g(o,{nameAttr:a,icons:e,attrs:s})),a==="data-lucide"){const o=document.querySelectorAll("[icon-name]");o.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(o).forEach(n=>g(n,{nameAttr:"icon-name",icons:e,attrs:s})))}},K={ArrowUpRight:L,Search:T,Menu:D,X:U,Hexagon:N,Command:B,Sparkles:z,ShieldCheck:q,Bot:I,BookOpen:P,TrendingUp:F,Package:O,ScrollText:V,Map:j,Wrench:R};function i(e,a=18){return`<i data-lucide="${e}" width="${a}" height="${a}" aria-hidden="true"></i>`}function y(){G({icons:K,attrs:{"stroke-width":1.8}})}function W(e){return`
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="/" aria-label="Hive Division home">
          <span class="brand-mark">${i("hexagon",22)}</span>
          <span class="brand-name">HIVE <b>DIVISION</b></span>
        </a>
        <nav class="desktop-nav" aria-label="Primary navigation">
          ${d.map(a=>`<a class="nav-link ${e===a.href?"is-active":""}" href="${a.href}">${a.label}</a>`).join("")}
        </nav>
        <div class="header-actions">
          <button class="icon-button search-trigger" type="button" aria-label="Open search" title="Search">${i("search",18)}</button>
          <button class="icon-button menu-trigger" type="button" aria-label="Open menu" aria-expanded="false">${i("menu",20)}</button>
        </div>
      </div>
      <div class="mobile-menu" aria-hidden="true">
        <nav aria-label="Mobile navigation">
          ${d.map(a=>`<a class="mobile-nav-link ${e===a.href?"is-active":""}" href="${a.href}">${a.label}<span>${i("arrow-up-right",16)}</span></a>`).join("")}
        </nav>
      </div>
    </header>`}function Y(){return`<form class="search-bar" role="search" onsubmit="return false">
    ${i("search",19)}
    <input type="search" placeholder="Search Hive Division…" aria-label="Search Hive Division" />
    <span class="search-key">⌘ K</span>
  </form>`}function v(e,a,s="primary",t="arrow-up-right"){return`<a class="button button-${s}" href="${a}">${e}${i(t,17)}</a>`}function w(e,a){return`<a class="category-card tilt-card" href="/explore#${e.name.toLowerCase()}" style="--delay: ${a*55}ms" data-tilt>
    <span class="card-glow"></span>
    <span class="category-icon">${i(e.icon,22)}</span>
    <span class="card-content">
      <span class="card-kicker">${e.status}</span>
      <strong>${e.name}</strong>
      <span class="card-description">${e.description}</span>
    </span>
    <span class="card-arrow">${i("arrow-up-right",18)}</span>
  </a>`}function X(){return`<footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand" href="/" aria-label="Hive Division home"><span class="brand-mark">${i("hexagon",22)}</span><span class="brand-name">HIVE <b>DIVISION</b></span></a>
        <p>The ultimate Bee Swarm Simulator resource hub.</p>
      </div>
      <div class="footer-column"><span class="footer-label">Navigate</span>${d.map(e=>`<a href="${e.href}">${e.label}</a>`).join("")}</div>
      <div class="footer-column"><span class="footer-label">Status</span><span class="status-line"><i class="status-dot"></i> Foundation phase</span><span class="footer-muted">Built for the community.</span></div>
    </div>
    <div class="footer-bottom"><span>© ${new Date().getFullYear()} Hive Division</span><span>Independent community project. Not affiliated with Roblox or Bee Swarm Simulator.</span></div>
  </footer>`}const Q=document.querySelector("#app"),p=window.location.pathname.replace(/\/$/,"")||"/";function _(e){const a=p==="/explore"?"/explore":p==="/about"?"/about":"/";Q.innerHTML=`${W(a)}<main>${e}</main>${X()}`,ae(),y()}function J(){return`<section class="hero page-wrap">
    <div class="hero-copy reveal">
      <span class="eyebrow"><i class="pulse-dot"></i> The community resource platform</span>
      <h1>Build a better<br /><span>hive.</span></h1>
      <p class="hero-lede">The ultimate Bee Swarm Simulator resource hub.</p>
      <p class="hero-description">Discover guides, resources, tools, macros, progression information, and everything you need to navigate Bee Swarm Simulator.</p>
      ${Y()}
      <div class="hero-actions">${v("Explore","/explore")} ${v("Browse resources","/explore","secondary","command")}</div>
      <div class="hero-meta"><span>${i("shield-check",15)} Community-built knowledge</span><span class="meta-divider"></span><span>Foundation / 01</span></div>
    </div>
    <div class="hero-art" aria-hidden="true"><div class="honey-orbit orbit-one"></div><div class="honey-orbit orbit-two"></div><div class="hive-core"><span class="core-ring"></span><span class="core-mark">${i("hexagon",88)}</span></div><span class="art-label label-one">01 / KNOWLEDGE</span><span class="art-label label-two">HIVE SYSTEMS</span></div>
    <div class="scroll-cue"><span></span> Scroll to explore</div>
  </section>
  <section class="home-explore page-wrap section-space">
    <div class="section-heading"><div><span class="eyebrow">A growing index</span><h2>Everything in<br /><em>one place.</em></h2></div><p>Hive Division is being built as a focused, reliable layer of knowledge for players who want to spend less time searching and more time progressing.</p></div>
    <div class="category-grid">${f.slice(0,4).map(w).join("")}</div>
    <div class="section-endcap"><span>More systems are on the way</span><a href="/explore">View the full index ${i("arrow-up-right",16)}</a></div>
  </section>`}function Z(){return`<section class="subpage-hero page-wrap"><span class="eyebrow">Directory / Foundation phase</span><h1>Explore <span>Hive Division.</span></h1><p>Everything you need, organized in one place.</p></section>
  <section class="explore-content page-wrap section-space"><div class="directory-intro"><span>01</span><p>A clear home for the systems, references, and tools that make a hive run. Every category below is a placeholder for what is coming next.</p></div><div class="category-grid category-grid-wide">${f.map(w).join("")}</div></section>`}function ee(){return`<section class="subpage-hero page-wrap"><span class="eyebrow">About the project</span><h1>Built for the<br /><span>next generation</span><br />of hives.</h1><p>An independent community resource platform for Bee Swarm Simulator.</p></section>
  <section class="about-content page-wrap section-space"><div class="about-panel"><span class="about-symbol">${i("hexagon",44)}</span><div><span class="eyebrow">Why Hive Division</span><h2>Less noise.<br /><em>More direction.</em></h2><p>Hive Division is being built to organize useful information and resources into one place. The goal is a polished, practical companion that makes the journey through Bee Swarm Simulator easier to understand and more enjoyable.</p><p class="disclaimer">Hive Division is an independent community project and is not affiliated with Roblox or Bee Swarm Simulator.</p></div></div></section>`}function ae(){var s;const e=document.querySelector(".menu-trigger"),a=document.querySelector(".mobile-menu");e==null||e.addEventListener("click",()=>{const t=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",String(!t)),e.innerHTML=i(t?"menu":"x",20),a.classList.toggle("is-open",!t),a.setAttribute("aria-hidden",String(t)),y()}),document.querySelectorAll("[data-tilt]").forEach(t=>{t.addEventListener("pointermove",o=>{if(window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const n=t.getBoundingClientRect(),c=(o.clientX-n.left)/n.width,l=(o.clientY-n.top)/n.height;t.style.setProperty("--rotate-x",`${(.5-l)*7}deg`),t.style.setProperty("--rotate-y",`${(c-.5)*7}deg`),t.style.setProperty("--glow-x",`${c*100}%`),t.style.setProperty("--glow-y",`${l*100}%`)}),t.addEventListener("pointerleave",()=>{t.style.setProperty("--rotate-x","0deg"),t.style.setProperty("--rotate-y","0deg"),t.style.setProperty("--glow-x","50%"),t.style.setProperty("--glow-y","50%")})}),(s=document.querySelector(".search-trigger"))==null||s.addEventListener("click",()=>{var t;return(t=document.querySelector(".search-bar input"))==null?void 0:t.focus()})}_(p==="/explore"?Z():p==="/about"?ee():J());
