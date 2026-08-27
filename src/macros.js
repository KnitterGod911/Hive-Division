// Macro records are intentionally separate from rendering. Add or edit media paths here only.
// Place supplied assets in public/images/macros/<slug>/.
export const macros = [
  {
    name: 'Revolution Macro', slug: 'revolution', developer: 'Liam', category: ['Macro', 'AI'],
    description: 'A cross-platform Bee Swarm Simulator macro with AI-assisted pathfinding and gathering.',
    longDescription: ['Revolution Macro is a solo project created by Liam. It is designed around a modern macro experience for Windows and macOS.', 'Its public feature list includes AI-assisted stinger hopping, AI pathfinding, configurable gathering, and dispenser collection.'],
    whatItDoes: 'Revolution automates gathering and movement in Bee Swarm Simulator. Its AI pathfinding is designed to move between tasks without requiring a reset, while its gathering and dispenser tools handle recurring session tasks.',
    rank: 1, rating: 5, ratingReason: 'Highly rated for its feature set, cross-platform support, AI-assisted functionality, and overall macro experience.',
    ratingFactors: { reliability: null, features: 5, easeOfUse: null, updates: null, documentation: 4, compatibility: 5, communitySupport: null },
    status: 'Active', version: '', lastUpdated: '', lastVerified: '2026-08-27', platforms: ['Windows', 'macOS'],
    features: ['AI stinger hop', 'AI pathfinding', 'Field gathering', 'Dispenser collection'], supportedFields: [],
    requirements: ['Windows or macOS', 'Bee Swarm Simulator'], limitations: [], knownIssues: [],
    coverImage: '', coverGif: '', coverVideo: '', gallery: [], media: [],
    downloads: [{ label: 'GitHub Releases', url: 'https://github.com/nosyliam/revolution-macro/releases', type: 'github-release', platform: 'Windows / macOS', verified: true, description: 'Official releases published by the project.' }],
    links: [{ label: 'GitHub Repository', url: 'https://github.com/nosyliam/revolution-macro', type: 'github-repository' }, { label: 'Official Discord', url: 'https://discord.gg/HDJk6aEyt4', type: 'discord' }],
    githubStats: { stars: 166, forks: null, issues: null, language: '', updated: '' },
    changelog: [], sources: [{ label: 'Project README', url: 'https://github.com/nosyliam/revolution-macro' }]
  },
  {
    name: 'Natro Macro', slug: 'natro', developer: 'NatroTeam', category: ['Macro', 'Automation'],
    description: 'A Windows Bee Swarm Simulator macro maintained by the NatroTeam community.',
    longDescription: ['Natro Macro is a community-maintained Bee Swarm Simulator macro for Windows. The project README directs users to the GitHub repository and Discord as its official sources.', 'More verified project details can be added here as the project documentation is reviewed.'],
    whatItDoes: 'Natro Macro automates recurring Bee Swarm Simulator gameplay tasks on Windows. Consult the project documentation for the current supported workflows and configuration details.',
    rank: 2, rating: 4.5, ratingReason: 'Established community project with a dedicated repository and official community channel.',
    ratingFactors: { reliability: null, features: null, easeOfUse: null, updates: null, documentation: null, compatibility: null, communitySupport: 5 },
    status: 'Active', version: '', lastUpdated: '', lastVerified: '2026-08-27', platforms: ['Windows'],
    features: ['Gameplay automation'], supportedFields: [], requirements: ['Windows', 'Bee Swarm Simulator'], limitations: [], knownIssues: [],
    coverImage: '', coverGif: '', coverVideo: '', gallery: [], media: [],
    downloads: [{ label: 'GitHub Repository', url: 'https://github.com/NatroTeam/NatroMacro', type: 'github-repository', platform: 'Windows', verified: true, description: 'Official project source and download location.' }],
    links: [{ label: 'GitHub Repository', url: 'https://github.com/NatroTeam/NatroMacro', type: 'github-repository' }, { label: 'Official Discord', url: 'https://discord.gg/natromacro', type: 'discord' }],
    githubStats: { stars: 2400, forks: null, issues: null, language: '', updated: '' },
    changelog: [], sources: [{ label: 'Project README', url: 'https://github.com/NatroTeam/NatroMacro' }]
  },
  {
    name: 'VicHopMacro', slug: 'vichop', developer: 'epicisgood', category: ['Macro', 'Vicious Bee'],
    description: 'A focused macro that hops servers to find Vicious Bees using a main account.',
    longDescription: ['VicHopMacro is designed for Bee Swarm Simulator players who want to search for Vicious Bees without passive alts or searchers.', 'Its README documents Roblox chat detection and setup considerations including resolution and login behavior.'],
    whatItDoes: 'VicHopMacro automates server hopping to search for Vicious Bees. It detects the target through Roblox chat and is intended to run on a player\'s main account.',
    rank: 3, rating: 4, ratingReason: 'Focused utility with a clearly defined purpose and official release channel.',
    ratingFactors: { reliability: null, features: 3, easeOfUse: null, updates: null, documentation: 4, compatibility: null, communitySupport: null },
    status: 'Active', version: '', lastUpdated: '', lastVerified: '2026-08-27', platforms: ['Windows'],
    features: ['Vicious Bee server hopping', 'Roblox chat detection', 'Automatic login support'], supportedFields: [],
    requirements: ['Windows', 'AutoHotkey v2', 'Bee Swarm Simulator'], limitations: ['Focused on Vicious Bee server hopping rather than general gathering.'], knownIssues: [],
    coverImage: '', coverGif: '', coverVideo: '', gallery: [], media: [],
    downloads: [{ label: 'Latest Release', url: 'https://github.com/epicisgood/VicHopMacro/releases/latest', type: 'github-release', platform: 'Windows', verified: true, description: 'Official latest release.' }],
    links: [{ label: 'GitHub Repository', url: 'https://github.com/epicisgood/VicHopMacro', type: 'github-repository' }, { label: 'GitHub Releases', url: 'https://github.com/epicisgood/VicHopMacro/releases/latest', type: 'github-release' }, { label: 'Official Discord', url: 'https://discord.gg/QfU2tm2Nf4', type: 'discord' }],
    githubStats: { stars: 25, forks: null, issues: null, language: '', updated: '' },
    changelog: [], sources: [{ label: 'Project README', url: 'https://github.com/epicisgood/VicHopMacro' }]
  },
  {
    name: 'BeeTux Macro', slug: 'beetux', developer: 'painvision', category: ['Macro', 'Linux'],
    description: 'An open-source Linux macro supporting Wayland and X11 desktop environments.',
    longDescription: ['BeeTux Macro is an open-source Bee Swarm Simulator macro for Linux. Its README says it supports every Linux distribution that supports ydotool, plus Wayland and X11 desktop environments.', 'The project currently carries an unmaintained notice because its maintainer broke their laptop.'],
    whatItDoes: 'BeeTux Macro automates Bee Swarm Simulator on Linux using desktop input tooling. It is intended for Linux environments, including Wayland and X11 setups.',
    rank: 4, rating: 3.5, ratingReason: 'Distinct Linux coverage and open-source implementation, balanced against its currently unmaintained status.',
    ratingFactors: { reliability: null, features: null, easeOfUse: null, updates: 1, documentation: null, compatibility: 4, communitySupport: null },
    status: 'Unmaintained', version: '', lastUpdated: '', lastVerified: '2026-08-27', platforms: ['Linux'],
    features: ['Wayland support', 'X11 support', 'Open source'], supportedFields: [],
    requirements: ['Linux', 'ydotool-compatible environment', 'Bee Swarm Simulator'], limitations: ['The project README currently marks the macro as unmaintained.'], knownIssues: ['Maintenance is paused according to the project README.'],
    coverImage: '', coverGif: '', coverVideo: '', gallery: [], media: [],
    downloads: [{ label: 'GitHub Repository', url: 'https://github.com/painvision/BeeTuxMacro', type: 'github-repository', platform: 'Linux', verified: true, description: 'Official project source.' }],
    links: [{ label: 'GitHub Repository', url: 'https://github.com/painvision/BeeTuxMacro', type: 'github-repository' }, { label: 'Official Discord', url: 'https://discord.gg/pAUUYbPqs6', type: 'discord' }, { label: 'Telegram', url: 'https://t.me/+gws61dtKyIRlYzky', type: 'other' }],
    githubStats: { stars: 35, forks: null, issues: null, language: '', updated: '' },
    changelog: [], sources: [{ label: 'Project README', url: 'https://github.com/painvision/BeeTuxMacro' }]
  }
];
