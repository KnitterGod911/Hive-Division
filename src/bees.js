const wikiImage = (path) => `https://static.wikia.nocookie.net/bee-swarm-simulator/images/${path}`;

const bee = (name, color, image, description) => ({ name, color, image: wikiImage(image), description });

export const beeRarities = [
  { slug: 'common', name: 'Common', description: 'The foundation of every growing hive.', color: 'common' },
  { slug: 'rare', name: 'Rare', description: 'Specialized bees with stronger abilities.', color: 'rare' },
  { slug: 'epic', name: 'Epic', description: 'Powerful bees with focused strengths.', color: 'epic' },
  { slug: 'legendary', name: 'Legendary', description: 'Exceptional bees with defining hive powers.', color: 'legendary' },
  { slug: 'mythic', name: 'Mythic', description: 'The rarest bees, built around unique mechanics.', color: 'mythic' },
  { slug: 'event', name: 'Event', description: 'Unique bees earned through special events and quests.', color: 'event' },
];

export const beesByRarity = {
  common: [
    bee('Basic Bee', 'colorless', '7/76/Basic_Bee.png/revision/latest?cb=20200403233713', 'A balanced bee with no special color, making it useful in any early hive.'),
  ],
  rare: [
    bee('Bomber Bee', 'colorless', 'c/c4/BomberFace.png/revision/latest?cb=20230506121042', 'Bombs pollen from nearby flowers and helps convert pollen with Bomb tokens.'),
    bee('Brave Bee', 'colorless', '1/10/Brave_Bee.png/revision/latest?cb=20200403234454', 'A sturdy bee that contributes attack and reliable red pollen.'),
    bee('Hasty Bee', 'colorless', '8/8a/770A3E1D-9723-41DC-BB10-B2297C9AC916.jpeg/revision/latest/scale-to-width-down/220?cb=20180714193409', 'Improves movement speed and keeps gathering routes moving quickly.'),
    bee('Looker Bee', 'colorless', '5/5d/Looker_Bee.png/revision/latest?cb=20200403235630', 'Boosts critical chance and supports critical-focused hive builds.'),
    bee('Rad Bee', 'red', '8/8d/Rad_Bee.png/revision/latest?cb=20200403235554', 'A red bee that gathers red pollen and adds attack power.'),
    bee('Rascal Bee', 'red', '4/44/Rascal_Bee.png/revision/latest?cb=20200403235453', 'A red bee with strong early attack and red pollen output.'),
    bee('Stubborn Bee', 'colorless', '0/07/RobloxScreenShot20181210_140947152_%282%29.png/revision/latest/scale-to-width-down/220?cb=20181210161639', 'Extends token duration and helps useful hive effects remain active.'),
  ],
  epic: [
    bee('Bubble Bee', 'blue', 'f/fa/Bubble_Bee.png/revision/latest?cb=20200403235509', 'A blue bee that creates bubbles and gathers blue pollen efficiently.'),
    bee('Bucko Bee', 'blue', '4/41/BuckoFace.png/revision/latest?cb=20230507154530', 'A blue attacker that boosts blue pollen and supports blue ability tokens.'),
    bee('Bumble Bee', 'blue', '6/61/BumbleFaceOutline.png/revision/latest?cb=20230227065811', 'A blue bee that gathers extra pollen and contributes capacity support.'),
    bee('Cool Bee', 'blue', '6/66/CoolBeeFace.png/revision/latest?cb=20230507003722', 'A reliable blue bee that gathers blue pollen and improves blue ability power.'),
    bee('Fire Bee', 'red', '0/06/Firebee.PNG/revision/latest?cb=20190203121110', 'A red bee that creates flames and improves red pollen collection.'),
    bee('Frosty Bee', 'blue', 'f/fb/Frosty_Bee.png/revision/latest?cb=20200403235930', 'A blue bee that creates frosty tokens and gathers blue pollen.'),
    bee('Honey Bee', 'colorless', 'a/a5/E07AFC32-2125-4198-9262-03E50364D7EB.jpeg/revision/latest/scale-to-width-down/220?cb=20180813074642', 'Produces Honey tokens and helps convert pollen into honey.'),
    bee('Rage Bee', 'red', '7/7b/Rage_Bee.png/revision/latest?cb=20200404000023', 'A red bee that grants attack-focused Rage tokens to the hive.'),
    bee('Riley Bee', 'red', '6/64/Riley_Bee.png/revision/latest?cb=20200404000004', 'A red bee that boosts red pollen and contributes strong red abilities.'),
    bee('Shocked Bee', 'blue', 'c/c0/Shocked_Bee.png/revision/latest?cb=20200404000019', 'A blue bee that grants haste and supports fast blue gathering.'),
  ],
  legendary: [
    bee('Baby Bee', 'colorless', 'd/d8/Gifted_Baby_Bee_hive.png/revision/latest/scale-to-width-down/220?cb=20180930205303', 'Creates Baby Love, increasing luck and improving the hive\'s gathering potential.'),
    bee('Carpenter Bee', 'colorless', 'b/b6/CarpenterBeeFace.png/revision/latest?cb=20230410012122', 'Creates Mark tokens and gathers pollen from marked flowers more effectively.'),
    bee('Demon Bee', 'red', '5/51/Png_%2819%29.png/revision/latest?cb=20230410012105', 'A red bee with high attack and strong red pollen abilities.'),
    bee('Diamond Bee', 'blue', '0/0a/Diamond_Bee.png/revision/latest?cb=20200403234546', 'A blue bee that produces Honey tokens and gathers blue pollen efficiently.'),
    bee('Lion Bee', 'colorless', 'b/b3/Lion_Bee.png/revision/latest?cb=20200403234824', 'A powerful colorless attacker that brings balanced pollen and damage.'),
    bee('Music Bee', 'colorless', '3/38/Music_Bee.png/revision/latest?cb=20200403234902', 'Creates Melody and Focus tokens that improve critical gathering.'),
    bee('Ninja Bee', 'blue', '9/97/Ninja_Bee.png/revision/latest?cb=20200403235002', 'A fast blue bee that grants Haste and gathers blue pollen.'),
    bee('Shy Bee', 'red', 'e/e8/Shy_Bee.png/revision/latest?cb=20200403235237', 'A red bee that gathers red pollen and strengthens red ability tokens.'),
  ],
  mythic: [
    bee('Buoyant Bee', 'blue', 'd/dc/Buoyant_Face.png/revision/latest/scale-to-width-down/220?cb=20230227091123', 'Creates balloons that store pollen and power up blue hive capacity.'),
    bee('Fuzzy Bee', 'colorless', 'a/a5/FuzzyBeeFace.png/revision/latest?cb=20230227090920', 'Pollinates nearby flowers and boosts their pollen while gathering.'),
    bee('Precise Bee', 'red', '5/56/Precise_Bee_Face.png/revision/latest/scale-to-width-down/220?cb=20230227090816', 'Builds Precision stacks and creates precise marks for powerful red gathering.'),
    bee('Spicy Bee', 'red', 'a/ae/Spicy_Bee_Face.png/revision/latest/scale-to-width-down/220?cb=20230227090647', 'Creates flame fuel and inferno abilities that amplify red pollen.'),
    bee('Tadpole Bee', 'blue', '9/94/Tadpole_Bee_Face.png/revision/latest/scale-to-width-down/220?cb=20230227085930', 'Creates bubbles and frogs that support blue pollen and token generation.'),
    bee('Vector Bee', 'colorless', '2/26/Vector_Bee_Face.png/revision/latest/scale-to-width-down/220?cb=20230227090717', 'Creates Triangulate marks that reward precise movement and marked flowers.'),
  ],
  event: [
    bee('Bear Bee', 'event', 'a/a9/Bear_Bee.png/revision/latest?cb=20190402203940', 'A friendly bee who transforms you into different bears!'),
    bee('Cobalt Bee', 'blue', '5/5c/Cobalt_Bee.png/revision/latest?cb=20200403235949', 'A superhero and defender of all things Blue! Together with Crimson Bee it works to unite bees of all colors.'),
    bee('Crimson Bee', 'red', '5/5f/Crimson_Bee.png/revision/latest?cb=20200404000015', 'A superhero and defender of all things Red! Together with Cobalt Bee it works to unite bees of all colors.'),
    bee('Digital Bee', 'event', '2/27/Digital_Bee.png/revision/latest?cb=20230415203844', 'A virtual bee with malfunctioning AI. It corrupts the game itself.'),
    bee('Festive Bee', 'event', '2/23/Festive_Bee.png/revision/latest?cb=20200404000059', 'A jolly bee who loves giving gifts! It is purely motivated by the joy of others.'),
    bee('Gummy Bee', 'event', '1/17/Gummy_Bee.png/revision/latest?cb=20200404000103', 'A squishy bee who is sweet as sugar. Covers flowers in goo to grant you bonus honey!'),
    bee('Photon Bee', 'event', 'a/a6/Photon_Bee.png/revision/latest?cb=20200404000039', 'An entity made of pure light temporarily taking on the form of a bee.'),
    bee('Puppy Bee', 'event', '0/01/Puppy_Bee.png/revision/latest?cb=20200404000127', 'A playful bee who only cares about two things, its tennis ball and you!'),
    bee('Tabby Bee', 'event', 'b/b2/Tabby_Bee.png/revision/latest?cb=20200404000127', 'This affectionate bee was raised by cats. It becomes a better worker as it warms up to you.'),
    bee('Vicious Bee', 'event', '1/1f/Vicious_Bee.png/revision/latest?cb=20200404000135', 'This cold-blooded bee takes great pleasure in inflicting pain.'),
    bee('Windy Bee', 'event', '8/85/Windy_Bee.png/revision/latest?cb=20230415210459', 'An ethereal bee as powerful and unpredictable as the weather.'),
  ],
};

const tokenDetails = {
  'Basic Bee': ['No ability token'], 'Bomber Bee': ['Bomb: collects pollen from nearby flowers'], 'Brave Bee': ['Red Boost: increases red pollen'], 'Hasty Bee': ['Haste: increases movement speed'], 'Looker Bee': ['Focus: increases critical chance'], 'Rad Bee': ['Red Boost: increases red pollen'], 'Rascal Bee': ['Red Bomb: collects red pollen'], 'Stubborn Bee': ['Token Link: links nearby tokens'],
  'Bubble Bee': ['Bubble: collects pollen from nearby flowers'], 'Bucko Bee': ['Blue Boost: increases blue pollen'], 'Bumble Bee': ['Blue Boost: increases blue pollen'], 'Cool Bee': ['Blue Boost: increases blue pollen'], 'Fire Bee': ['Flame: burns nearby flowers for red pollen'], 'Frosty Bee': ['Blue Bomb: collects blue pollen'], 'Honey Bee': ['Honey: converts pollen into honey'], 'Rage Bee': ['Rage: increases bee attack'], 'Riley Bee': ['Red Boost: increases red pollen'], 'Shocked Bee': ['Haste: increases movement speed'],
  'Baby Bee': ['Baby Love: increases loot luck'], 'Carpenter Bee': ['Mark: increases pollen from marked flowers'], 'Demon Bee': ['Red Bomb: collects red pollen'], 'Diamond Bee': ['Honey: converts pollen into honey'], 'Lion Bee': ['Token Link: links nearby tokens'], 'Music Bee': ['Melody: increases critical chance', 'Focus: increases critical chance'], 'Ninja Bee': ['Haste: increases movement speed'], 'Shy Bee': ['Red Boost: increases red pollen'],
  'Buoyant Bee': ['Balloon: stores pollen and increases capacity'], 'Fuzzy Bee': ['Pollen Haze: pollinates nearby flowers'], 'Precise Bee': ['Precision: increases critical power', 'Target Practice: creates precise marks'], 'Spicy Bee': ['Flame Fuel: powers flames', 'Inferno: creates a field of flames'], 'Tadpole Bee': ['Bubble: collects pollen', 'Frog: summons a pollen-collecting frog'], 'Vector Bee': ['Triangulate: gathers from three marked flowers'],
  'Bear Bee': ['Bear Morph: transforms the player into a bear'], 'Cobalt Bee': ['Blue Pulse: collects blue pollen and boosts blue pollen'], 'Crimson Bee': ['Red Pulse: collects red pollen and boosts red pollen'], 'Digital Bee': ['Code Mark: copies and amplifies enemy abilities'], 'Festive Bee': ['Festive Gift: grants a random gift effect'], 'Gummy Bee': ['Goo: covers flowers and grants bonus honey'], 'Photon Bee': ['Beamstorm: fires a beam that collects pollen'], 'Puppy Bee': ['Fetch: sends the bee to fetch a tennis ball'], 'Tabby Bee': ['Scratch: collects pollen in a cone', 'Tabby Love: increases Tabby Bee pollen'], 'Vicious Bee': ['Impale: summons spikes that damage enemies'], 'Windy Bee': ['Tornado: gathers pollen and grants Wind Blessing'],
};

const giftedBonuses = {
  'Basic Bee': 'x1.2 pollen', 'Bomber Bee': '+15% bomb pollen', 'Brave Bee': '+5% bee attack', 'Hasty Bee': '+1 player movespeed', 'Looker Bee': '+25% critical power', 'Rad Bee': '+15% red pollen', 'Rascal Bee': '+15% red bomb pollen', 'Stubborn Bee': '+20% token duration',
  'Bubble Bee': '+15% bubble pollen', 'Bucko Bee': '+20% blue pollen', 'Bumble Bee': '+15% capacity', 'Cool Bee': '+15% blue pollen', 'Fire Bee': '+15% flame pollen', 'Frosty Bee': '+15% blue pollen', 'Honey Bee': '+25% honey from tokens', 'Rage Bee': '+15% bee attack', 'Riley Bee': '+20% red pollen', 'Shocked Bee': '+1 player movespeed',
  'Baby Bee': '+25% Baby Love luck', 'Carpenter Bee': '+25% mark duration', 'Demon Bee': '+15% red pollen', 'Diamond Bee': '+15% capacity', 'Lion Bee': '+5% bee attack', 'Music Bee': '+25% melody duration', 'Ninja Bee': '+15% blue pollen', 'Shy Bee': '+15% red pollen',
  'Buoyant Bee': '+15% balloon capacity', 'Fuzzy Bee': '+15% pollen', 'Precise Bee': '+15% super-crit chance', 'Spicy Bee': '+15% flame duration', 'Tadpole Bee': '+15% bubble duration', 'Vector Bee': '+15% mark duration',
  'Bear Bee': '+10% all pollen', 'Cobalt Bee': '+15% blue pollen', 'Crimson Bee': '+15% red pollen', 'Digital Bee': '+1% super-crit chance', 'Festive Bee': '+15% convert rate', 'Gummy Bee': '+1.5x goo conversion', 'Photon Bee': '+5% instant conversion', 'Puppy Bee': '+20% bond from treats', 'Tabby Bee': '+50% Tabby Love pollen', 'Vicious Bee': '+15% bee attack', 'Windy Bee': '+15% white pollen',
};

export const giftedEventBeeOrder = [];

Object.entries(beesByRarity).forEach(([rarity, bees]) => bees.forEach((beeData) => {
  beeData.rarity = rarity;
  beeData.slug = beeData.name.toLowerCase().replace(/ bee$/, '').replace(/[^a-z0-9]+/g, '-');
  beeData.tokens = tokenDetails[beeData.name] || ['Ability token information is maintained on the BSS Wiki.'];
  beeData.giftedBonus = giftedBonuses[beeData.name] || 'Gifted bonus information is maintained on the BSS Wiki.';
  beeData.wikiUrl = `https://bee-swarm-simulator.fandom.com/wiki/${beeData.name.replace(/ /g, '_')}`;
}));
