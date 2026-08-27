(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();const k=[{name:"Macros",description:"Compare real projects and find your next automation.",icon:"bot",status:"Live",href:"/macros"},{name:"Guides",description:"Clear paths through every stage of the hive.",icon:"book-open",status:"Coming soon"},{name:"Progression",description:"See what to chase next, at every level.",icon:"trending-up",status:"Coming soon"},{name:"Items",description:"A future reference for every useful pickup.",icon:"package",status:"Coming soon"},{name:"Bees",description:"Understand the parts that make a hive work.",icon:"hexagon",status:"Coming soon"},{name:"Quests",description:"Track the road to your next big reward.",icon:"scroll-text",status:"Coming soon"},{name:"Fields",description:"Plan your routes through the pollen fields.",icon:"map",status:"Coming soon"},{name:"Tools",description:"Practical utilities for sharper decisions.",icon:"wrench",status:"Coming soon"}],b=[{label:"Home",href:"/"},{label:"Explore",href:"/explore"},{label:"Macros",href:"/macros"},{label:"About",href:"/about"}],m=[{name:"Revolution Macro",slug:"revolution",developer:"Liam",category:["Macro","AI"],description:"A cross-platform Bee Swarm Simulator macro with AI-assisted pathfinding and gathering.",longDescription:["Revolution Macro is a solo project created by Liam. It is designed around a modern macro experience for Windows and macOS.","Its public feature list includes AI-assisted stinger hopping, AI pathfinding, configurable gathering, and dispenser collection."],whatItDoes:"Revolution automates gathering and movement in Bee Swarm Simulator. Its AI pathfinding is designed to move between tasks without requiring a reset, while its gathering and dispenser tools handle recurring session tasks.",rank:1,rating:5,ratingReason:"Highly rated for its feature set, cross-platform support, AI-assisted functionality, and overall macro experience.",ratingFactors:{reliability:null,features:5,easeOfUse:null,updates:null,documentation:4,compatibility:5,communitySupport:null},status:"Active",version:"",lastUpdated:"",lastVerified:"2026-08-27",platforms:["Windows","macOS"],features:["AI stinger hop","AI pathfinding","Field gathering","Dispenser collection"],supportedFields:[],requirements:["Windows or macOS","Bee Swarm Simulator"],limitations:[],knownIssues:[],coverImage:"",coverGif:"",coverVideo:"",gallery:[],media:[],downloads:[{label:"GitHub Releases",url:"https://github.com/nosyliam/revolution-macro/releases",type:"github-release",platform:"Windows / macOS",verified:!0,description:"Official releases published by the project."}],links:[{label:"GitHub Repository",url:"https://github.com/nosyliam/revolution-macro",type:"github-repository"},{label:"Official Discord",url:"https://discord.gg/HDJk6aEyt4",type:"discord"}],githubStats:{stars:166,forks:null,issues:null,language:"",updated:""},changelog:[],sources:[{label:"Project README",url:"https://github.com/nosyliam/revolution-macro"}]},{name:"Natro Macro",slug:"natro",developer:"NatroTeam",category:["Macro","Automation"],description:"A Windows Bee Swarm Simulator macro maintained by the NatroTeam community.",longDescription:["Natro Macro is a community-maintained Bee Swarm Simulator macro for Windows. The project README directs users to the GitHub repository and Discord as its official sources.","More verified project details can be added here as the project documentation is reviewed."],whatItDoes:"Natro Macro automates recurring Bee Swarm Simulator gameplay tasks on Windows. Consult the project documentation for the current supported workflows and configuration details.",rank:2,rating:4.5,ratingReason:"Established community project with a dedicated repository and official community channel.",ratingFactors:{reliability:null,features:null,easeOfUse:null,updates:null,documentation:null,compatibility:null,communitySupport:5},status:"Active",version:"",lastUpdated:"",lastVerified:"2026-08-27",platforms:["Windows"],features:["Gameplay automation"],supportedFields:[],requirements:["Windows","Bee Swarm Simulator"],limitations:[],knownIssues:[],coverImage:"",coverGif:"",coverVideo:"",gallery:[],media:[],downloads:[{label:"GitHub Repository",url:"https://github.com/NatroTeam/NatroMacro",type:"github-repository",platform:"Windows",verified:!0,description:"Official project source and download location."}],links:[{label:"GitHub Repository",url:"https://github.com/NatroTeam/NatroMacro",type:"github-repository"},{label:"Official Discord",url:"https://discord.gg/natromacro",type:"discord"}],githubStats:{stars:2400,forks:null,issues:null,language:"",updated:""},changelog:[],sources:[{label:"Project README",url:"https://github.com/NatroTeam/NatroMacro"}]},{name:"VicHopMacro",slug:"vichop",developer:"epicisgood",category:["Macro","Vicious Bee"],description:"A focused macro that hops servers to find Vicious Bees using a main account.",longDescription:["VicHopMacro is designed for Bee Swarm Simulator players who want to search for Vicious Bees without passive alts or searchers.","Its README documents Roblox chat detection and setup considerations including resolution and login behavior."],whatItDoes:"VicHopMacro automates server hopping to search for Vicious Bees. It detects the target through Roblox chat and is intended to run on a player's main account.",rank:3,rating:4,ratingReason:"Focused utility with a clearly defined purpose and official release channel.",ratingFactors:{reliability:null,features:3,easeOfUse:null,updates:null,documentation:4,compatibility:null,communitySupport:null},status:"Active",version:"",lastUpdated:"",lastVerified:"2026-08-27",platforms:["Windows"],features:["Vicious Bee server hopping","Roblox chat detection","Automatic login support"],supportedFields:[],requirements:["Windows","AutoHotkey v2","Bee Swarm Simulator"],limitations:["Focused on Vicious Bee server hopping rather than general gathering."],knownIssues:[],coverImage:"",coverGif:"",coverVideo:"",gallery:[],media:[],downloads:[{label:"Latest Release",url:"https://github.com/epicisgood/VicHopMacro/releases/latest",type:"github-release",platform:"Windows",verified:!0,description:"Official latest release."}],links:[{label:"GitHub Repository",url:"https://github.com/epicisgood/VicHopMacro",type:"github-repository"},{label:"GitHub Releases",url:"https://github.com/epicisgood/VicHopMacro/releases/latest",type:"github-release"},{label:"Official Discord",url:"https://discord.gg/QfU2tm2Nf4",type:"discord"}],githubStats:{stars:25,forks:null,issues:null,language:"",updated:""},changelog:[],sources:[{label:"Project README",url:"https://github.com/epicisgood/VicHopMacro"}]},{name:"BeeTux Macro",slug:"beetux",developer:"painvision",category:["Macro","Linux"],description:"An open-source Linux macro supporting Wayland and X11 desktop environments.",longDescription:["BeeTux Macro is an open-source Bee Swarm Simulator macro for Linux. Its README says it supports every Linux distribution that supports ydotool, plus Wayland and X11 desktop environments.","The project currently carries an unmaintained notice because its maintainer broke their laptop."],whatItDoes:"BeeTux Macro automates Bee Swarm Simulator on Linux using desktop input tooling. It is intended for Linux environments, including Wayland and X11 setups.",rank:4,rating:3.5,ratingReason:"Distinct Linux coverage and open-source implementation, balanced against its currently unmaintained status.",ratingFactors:{reliability:null,features:null,easeOfUse:null,updates:1,documentation:null,compatibility:4,communitySupport:null},status:"Unmaintained",version:"",lastUpdated:"",lastVerified:"2026-08-27",platforms:["Linux"],features:["Wayland support","X11 support","Open source"],supportedFields:[],requirements:["Linux","ydotool-compatible environment","Bee Swarm Simulator"],limitations:["The project README currently marks the macro as unmaintained."],knownIssues:["Maintenance is paused according to the project README."],coverImage:"",coverGif:"",coverVideo:"",gallery:[],media:[],downloads:[{label:"GitHub Repository",url:"https://github.com/painvision/BeeTuxMacro",type:"github-repository",platform:"Linux",verified:!0,description:"Official project source."}],links:[{label:"GitHub Repository",url:"https://github.com/painvision/BeeTuxMacro",type:"github-repository"},{label:"Official Discord",url:"https://discord.gg/pAUUYbPqs6",type:"discord"},{label:"Telegram",url:"https://t.me/+gws61dtKyIRlYzky",type:"other"}],githubStats:{stars:35,forks:null,issues:null,language:"",updated:""},changelog:[],sources:[{label:"Project README",url:"https://github.com/painvision/BeeTuxMacro"}]}];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(e,t,a=[])=>{const s=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(o=>{s.setAttribute(o,String(t[o]))}),a.length&&a.forEach(o=>{const i=A(...o);s.appendChild(i)}),s};var j=([e,t,a])=>A(e,t,a);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=e=>Array.from(e.attributes).reduce((t,a)=>(t[a.name]=a.value,t),{}),V=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",B=e=>e.flatMap(V).map(a=>a.trim()).filter(Boolean).filter((a,s,o)=>o.indexOf(a)===s).join(" "),C=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,a,s)=>a.toUpperCase()+s.toLowerCase()),x=(e,{nameAttr:t,icons:a,attrs:s})=>{var $;const o=e.getAttribute(t);if(o==null)return;const i=C(o),c=a[i];if(!c)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const p=L(e),[u,h,l]=c,g={...h,"data-lucide":o,...s,...p},w=B(["lucide",`lucide-${o}`,p,s]);w&&Object.assign(g,{class:w});const H=j([u,g,l]);return($=e.parentNode)==null?void 0:$.replaceChild(H,e)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=["svg",r,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=["svg",r,[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=["svg",r,[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=["svg",r,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=["svg",r,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=["svg",r,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=["svg",r,[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=["svg",r,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=["svg",r,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=["svg",r,[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=["svg",r,[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=["svg",r,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=["svg",r,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=["svg",r,[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=["svg",r,[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=["svg",r,[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"}],["path",{d:"m7.5 4.27 9 5.15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=["svg",r,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=["svg",r,[["path",{d:"M15 12h-5"}],["path",{d:"M15 8h-5"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=["svg",r,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=["svg",r,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=["svg",r,[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=["svg",r,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=["svg",r,[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=["svg",r,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=["svg",r,[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=["svg",r,[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=["svg",r,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=({icons:e={},nameAttr:t="data-lucide",attrs:a={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const s=document.querySelectorAll(`[${t}]`);if(Array.from(s).forEach(o=>x(o,{nameAttr:t,icons:e,attrs:a})),t==="data-lucide"){const o=document.querySelectorAll("[icon-name]");o.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(o).forEach(i=>x(i,{nameAttr:"icon-name",icons:e,attrs:a})))}},de={ArrowUpRight:O,Search:ee,Menu:_,X:le,Hexagon:K,Command:F,Sparkles:se,ShieldCheck:ae,Bot:R,BookOpen:N,TrendingUp:ie,Package:Q,ScrollText:Z,Map:Y,Wrench:re,Filter:U,SlidersHorizontal:te,Star:oe,ExternalLink:W,Play:J,Image:X,Video:ne,Github:z,Download:G,CircleAlert:P,Check:T,ChevronDown:q};function n(e,t=18){return`<i data-lucide="${e}" width="${t}" height="${t}" aria-hidden="true"></i>`}function f(){ce({icons:de,attrs:{"stroke-width":1.8}})}function pe(e){return`
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="/" aria-label="Hive Division home">
          <span class="brand-mark">${n("hexagon",22)}</span>
          <span class="brand-name">HIVE <b>DIVISION</b></span>
        </a>
        <nav class="desktop-nav" aria-label="Primary navigation">
          ${b.map(t=>`<a class="nav-link ${e===t.href?"is-active":""}" href="${t.href}">${t.label}</a>`).join("")}
        </nav>
        <div class="header-actions">
          <button class="icon-button search-trigger" type="button" aria-label="Open search" title="Search">${n("search",18)}</button>
          <button class="icon-button menu-trigger" type="button" aria-label="Open menu" aria-expanded="false">${n("menu",20)}</button>
        </div>
      </div>
      <div class="mobile-menu" aria-hidden="true">
        <nav aria-label="Mobile navigation">
          ${b.map(t=>`<a class="mobile-nav-link ${e===t.href?"is-active":""}" href="${t.href}">${t.label}<span>${n("arrow-up-right",16)}</span></a>`).join("")}
        </nav>
      </div>
    </header>`}function ue(){return`<form class="search-bar" role="search" onsubmit="return false">
    ${n("search",19)}
    <input type="search" placeholder="Search Hive Division…" aria-label="Search Hive Division" />
    <span class="search-key">⌘ K</span>
  </form>`}function y(e,t,a="primary",s="arrow-up-right"){return`<a class="button button-${a}" href="${t}">${e}${n(s,17)}</a>`}function E(e,t){return`<a class="category-card tilt-card" href="${e.href||`/explore#${e.name.toLowerCase()}`}" style="--delay: ${t*55}ms" data-tilt>
    <span class="card-glow"></span>
    <span class="category-icon">${n(e.icon,22)}</span>
    <span class="card-content">
      <span class="card-kicker">${e.status}</span>
      <strong>${e.name}</strong>
      <span class="card-description">${e.description}</span>
    </span>
    <span class="card-arrow">${n("arrow-up-right",18)}</span>
  </a>`}function I(e,t=!1){const a=`<span class="media-placeholder"><span>${n("hexagon",t?25:38)}</span><b>MEDIA COMING SOON</b><small>Add cover media in public/images/macros/${e.slug}/</small></span>`,s=e.coverVideo?`<video class="macro-cover-video" src="${e.coverVideo}" muted loop playsinline preload="none"></video>`:e.coverGif?`<img class="macro-cover-gif" src="${e.coverGif}" alt="${e.name} animated cover" loading="lazy" />`:e.coverImage?`<img class="macro-cover-image" src="${e.coverImage}" alt="${e.name} cover" loading="lazy" />`:a,o=e.coverVideo?`${n("video",13)} Video cover`:e.coverGif?`${n("play",13)} GIF cover`:e.coverImage?`${n("image",13)} Static cover`:`${n("hexagon",13)} Media slot`;return`<div class="macro-media">${s}<span class="media-type">${o}</span></div>`}function D(e){return`<article class="macro-card tilt-card" data-tilt data-macro="${e.slug}">
    <a href="/macros/${e.slug}" class="macro-card-link" aria-label="View ${e.name}">
      <div class="macro-card-top"><span class="rank-badge">#${e.rank}</span><span class="status-badge ${e.status==="Unmaintained"?"is-muted":""}"><i></i>${e.status}</span></div>
      ${I(e,!0)}
      <div class="macro-card-info"><div class="macro-title-row"><div><h3>${e.name}</h3><p>${e.developer}</p></div><span class="macro-rating">${n("star",14)} ${e.rating.toFixed(1)}</span></div><p class="macro-description">${e.description}</p><div class="macro-tags">${e.features.slice(0,3).map(t=>`<span>${t}</span>`).join("")}</div></div>
      <span class="macro-card-footer">View macro ${n("arrow-up-right",16)}</span>
    </a>
  </article>`}function he(){return`<footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand" href="/" aria-label="Hive Division home"><span class="brand-mark">${n("hexagon",22)}</span><span class="brand-name">HIVE <b>DIVISION</b></span></a>
        <p>The ultimate Bee Swarm Simulator resource hub.</p>
      </div>
      <div class="footer-column"><span class="footer-label">Navigate</span>${b.map(e=>`<a href="${e.href}">${e.label}</a>`).join("")}</div>
      <div class="footer-column"><span class="footer-label">Status</span><span class="status-line"><i class="status-dot"></i> Foundation phase</span><span class="footer-muted">Built for the community.</span></div>
    </div>
    <div class="footer-bottom"><span>© ${new Date().getFullYear()} Hive Division</span><span>Independent community project. Not affiliated with Roblox or Bee Swarm Simulator.</span></div>
  </footer>`}const me=document.querySelector("#app"),d=window.location.pathname.replace(/\/$/,"")||"/";function ge(e){const t=d.startsWith("/macros")?"/macros":d==="/explore"?"/explore":d==="/about"?"/about":"/";me.innerHTML=`${pe(t)}<main>${e}</main>${he()}`,xe(),f()}function ve(){return`<section class="hero page-wrap">
    <div class="hero-copy reveal">
      <span class="eyebrow"><i class="pulse-dot"></i> The community resource platform</span>
      <h1>Build a better<br /><span>hive.</span></h1>
      <p class="hero-lede">The ultimate Bee Swarm Simulator resource hub.</p>
      <p class="hero-description">Discover guides, resources, tools, macros, progression information, and everything you need to navigate Bee Swarm Simulator.</p>
      ${ue()}
      <div class="hero-actions">${y("Explore","/explore")} ${y("Browse macros","/macros","secondary","bot")}</div>
      <div class="hero-meta"><span>${n("shield-check",15)} Community-built knowledge</span><span class="meta-divider"></span><span>Foundation / 01</span></div>
    </div>
    <div class="hero-art" aria-hidden="true"><div class="honey-orbit orbit-one"></div><div class="honey-orbit orbit-two"></div><div class="hive-core"><span class="core-ring"></span><span class="core-mark">${n("hexagon",88)}</span></div><span class="art-label label-one">01 / KNOWLEDGE</span><span class="art-label label-two">HIVE SYSTEMS</span></div>
    <div class="scroll-cue"><span></span> Scroll to explore</div>
  </section>
  <section class="home-explore page-wrap section-space">
    <div class="section-heading"><div><span class="eyebrow">A growing index</span><h2>Everything in<br /><em>one place.</em></h2></div><p>Hive Division is being built as a focused, reliable layer of knowledge for players who want to spend less time searching and more time progressing.</p></div>
    <div class="category-grid">${k.slice(0,4).map(E).join("")}</div>
    <div class="section-endcap"><span>More systems are on the way</span><a href="/explore">View the full index ${n("arrow-up-right",16)}</a></div>
  </section>`}function fe(){return`<section class="subpage-hero page-wrap"><span class="eyebrow">Directory / Foundation phase</span><h1>Explore <span>Hive Division.</span></h1><p>Everything you need, organized in one place.</p></section>
  <section class="explore-content page-wrap section-space"><div class="directory-intro"><span>01</span><p>A clear home for the systems, references, and tools that make a hive run. Every category below is a placeholder for what is coming next.</p></div><div class="category-grid category-grid-wide">${k.map(E).join("")}</div></section>`}function ye(){return`<section class="subpage-hero page-wrap"><span class="eyebrow">About the project</span><h1>Built for the<br /><span>next generation</span><br />of hives.</h1><p>An independent community resource platform for Bee Swarm Simulator.</p></section>
  <section class="about-content page-wrap section-space"><div class="about-panel"><span class="about-symbol">${n("hexagon",44)}</span><div><span class="eyebrow">Why Hive Division</span><h2>Less noise.<br /><em>More direction.</em></h2><p>Hive Division is being built to organize useful information and resources into one place. The goal is a polished, practical companion that makes the journey through Bee Swarm Simulator easier to understand and more enjoyable.</p><p class="disclaimer">Hive Division is an independent community project and is not affiliated with Roblox or Bee Swarm Simulator.</p></div></div></section>`}function be(){const e=[...new Set(m.flatMap(a=>a.platforms))],t=[...new Set(m.map(a=>a.status))];return`<section class="subpage-hero macro-directory-hero page-wrap"><div><span class="eyebrow">Directory / Macro systems</span><h1>Bee Swarm<br /><span>Simulator macros.</span></h1><p>Explore, compare, and learn about Bee Swarm Simulator macro projects.</p></div><div class="directory-count"><strong>${m.length.toString().padStart(2,"0")}</strong><span>verified<br />projects</span></div></section><section class="macro-directory page-wrap section-space"><div class="trust-notice">${n("shield-check",16)} <span>Hive Division does not develop or audit third-party macros. Always verify downloads and links through the project's official sources.</span></div><div class="macro-toolbar"><label class="macro-search">${n("search",17)}<input id="macro-search" type="search" placeholder="Search macros…" aria-label="Search macros" /></label><div class="filter-controls"><label><span>Platform</span><select id="platform-filter"><option value="all">All platforms</option>${e.map(a=>`<option>${a}</option>`).join("")}</select></label><label><span>Status</span><select id="status-filter"><option value="all">All statuses</option>${t.map(a=>`<option>${a}</option>`).join("")}</select></label><label><span>Sort</span><select id="sort-filter"><option value="recommended">Recommended</option><option value="rating">Highest rated</option><option value="rank">Highest ranked</option><option value="alpha">Alphabetical</option></select></label></div></div><div class="macro-results-meta"><span id="macro-result-count">${m.length} projects</span><span>Editorial rankings based on publicly available information and community feedback.</span></div><div class="macro-grid" id="macro-grid">${m.map(D).join("")}</div><div class="ranking-note">Hive Division rankings are editorial assessments based on publicly available information and community feedback and may change as projects are updated.</div></section>`}function v(e,t){return t!=null&&t.length?`<section class="detail-section"><div class="detail-label">${e}</div><div class="detail-list">${t.map(a=>`<div>${n("check",15)} ${a}</div>`).join("")}</div></section>`:""}function we(e){const t=e.links.find(a=>a.type==="github-repository");return`<section class="macro-detail-hero page-wrap"><a class="back-link" href="/macros">${n("arrow-up-right",15)} Back to macro directory</a><div class="detail-hero-grid"><div class="detail-cover-wrap">${I(e)}</div><div class="detail-identity"><div class="detail-rank">#${e.rank} / HIVE DIVISION RANKING</div><h1>${e.name}</h1><p class="detail-developer">by ${e.developer}</p><div class="detail-rating"><span>${n("star",19)} ${e.rating.toFixed(1)} / 5.0</span><small>Hive Division editorial rating</small></div><div class="detail-chips"><span>${e.status}</span>${e.platforms.map(a=>`<span>${a}</span>`).join("")}</div><div class="macro-tags detail-tags">${e.features.map(a=>`<span>${a}</span>`).join("")}</div><div class="detail-actions">${e.downloads[0]?y("Download",e.downloads[0].url,"primary","download"):""}${t?y("GitHub",t.url,"secondary","github"):""}</div></div></div></section><section class="detail-content page-wrap"><div class="trust-notice">${n("shield-check",16)} <span>Verify every download through the project's official sources. Hive Division does not develop or audit third-party macros.</span></div><section class="feature-callout"><div class="detail-label">What does this macro do?</div><h2>${e.whatItDoes}</h2></section><section class="detail-section overview-section"><div class="detail-label">Overview</div>${e.longDescription.map(a=>`<p>${a}</p>`).join("")}</section><div class="detail-two-col">${v("Features",e.features)}${v("Requirements",e.requirements)}${v("Supported fields",e.supportedFields)}${v("Limitations",e.limitations)}${v("Known issues",e.knownIssues)}</div>${e.gallery.length?`<section class="detail-section"><div class="detail-label">Screenshots & images</div><div class="gallery-grid">${e.gallery.map(a=>`<button class="gallery-item" type="button"><img src="${a.url}" alt="${a.title||e.name+" screenshot"}" loading="lazy" /><span>${a.title||"Open image"}</span></button>`).join("")}</div></section>`:""}<section class="detail-section download-section"><div class="detail-label">Download</div><div class="resource-grid">${e.downloads.map(a=>`<a class="resource-card" href="${a.url}" target="_blank" rel="noreferrer">${n("download",18)}<span><strong>${a.label}</strong><small>${a.description}</small></span>${n("external-link",15)}</a>`).join("")}</div></section><section class="detail-section"><div class="detail-label">Official links & sources</div><div class="link-list">${[...e.links,...e.sources].map(a=>`<a href="${a.url}" target="_blank" rel="noreferrer"><span>${a.label}</span>${n("external-link",14)}</a>`).join("")}</div></section><div class="detail-meta-grid"><div><span>Current version</span><strong>${e.version||"Not available yet"}</strong></div><div><span>Last updated</span><strong>${e.lastUpdated||"Not available yet"}</strong></div><div><span>Last verified</span><strong>${e.lastVerified}</strong></div>${e.githubStats.stars!==null?`<div><span>GitHub stars</span><strong>${e.githubStats.stars.toLocaleString()}</strong></div>`:""}</div></section>`}function $e(){var c,p,u,h;const e=((c=document.querySelector("#macro-search"))==null?void 0:c.value.toLowerCase())||"",t=((p=document.querySelector("#platform-filter"))==null?void 0:p.value)||"all",a=((u=document.querySelector("#status-filter"))==null?void 0:u.value)||"all",s=((h=document.querySelector("#sort-filter"))==null?void 0:h.value)||"recommended",o=l=>[l.name,l.developer,l.description,l.status,...l.category,...l.platforms,...l.features].join(" ").toLowerCase(),i=m.filter(l=>(!e||o(l).includes(e))&&(t==="all"||l.platforms.includes(t))&&(a==="all"||l.status===a)).sort((l,g)=>s==="rating"?g.rating-l.rating:s==="rank"?l.rank-g.rank:s==="alpha"?l.name.localeCompare(g.name):0);document.querySelector("#macro-grid").innerHTML=i.length?i.map(D).join(""):'<div class="empty-results">No macro projects match those filters.</div>',document.querySelector("#macro-result-count").textContent=`${i.length} project${i.length===1?"":"s"}`,bindTiltCards(),f()}function xe(){var a;const e=document.querySelector(".menu-trigger"),t=document.querySelector(".mobile-menu");e==null||e.addEventListener("click",()=>{const s=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",String(!s)),e.innerHTML=n(s?"menu":"x",20),t.classList.toggle("is-open",!s),t.setAttribute("aria-hidden",String(s)),f()}),document.querySelectorAll("[data-tilt]").forEach(s=>{let o;s.addEventListener("pointermove",i=>{if(window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const c=s.getBoundingClientRect(),p=(i.clientX-c.left)/c.width,u=(i.clientY-c.top)/c.height;cancelAnimationFrame(o),o=requestAnimationFrame(()=>{s.style.setProperty("--rotate-x",`${(.5-u)*6}deg`),s.style.setProperty("--rotate-y",`${(p-.5)*6}deg`),s.style.setProperty("--glow-x",`${p*100}%`),s.style.setProperty("--glow-y",`${u*100}%`)});const h=s.querySelector("video");h&&h.play().catch(()=>{})}),s.addEventListener("pointerleave",()=>{cancelAnimationFrame(o),s.style.setProperty("--rotate-x","0deg"),s.style.setProperty("--rotate-y","0deg"),s.style.setProperty("--glow-x","50%"),s.style.setProperty("--glow-y","50%");const i=s.querySelector("video");i&&(i.pause(),i.currentTime=0)})}),(a=document.querySelector(".search-trigger"))==null||a.addEventListener("click",()=>{var s;return(s=document.querySelector(".search-bar input"))==null?void 0:s.focus()}),["macro-search","platform-filter","status-filter","sort-filter"].forEach(s=>{var o;return(o=document.querySelector(`#${s}`))==null?void 0:o.addEventListener("input",$e)}),document.querySelectorAll(".gallery-item").forEach(s=>s.addEventListener("click",()=>{const o=s.querySelector("img"),i=document.createElement("dialog");i.className="lightbox",i.innerHTML=`<button type="button" aria-label="Close image">${n("x",20)}</button><img src="${o.src}" alt="${o.alt}" />`,document.body.append(i),i.showModal(),f(),i.querySelector("button").addEventListener("click",()=>i.close()),i.addEventListener("close",()=>i.remove())}))}const S=d.startsWith("/macros/")?d.split("/")[2]:null,M=S?m.find(e=>e.slug===S):null;ge(M?we(M):d==="/macros"||d.startsWith("/macros/")?be():d==="/explore"?fe():d==="/about"?ye():ve());
