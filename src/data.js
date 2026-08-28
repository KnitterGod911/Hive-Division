export const categories = [
  { name: 'Macros', description: 'Compare real projects and find your next automation.', icon: 'bot', status: 'Live', href: '/macros' },
  { name: 'Progression', description: 'See what to chase next, at every level.', icon: 'trending-up', status: 'Live', href: '/progression' },
  { name: 'Guides', description: 'Clear paths through every stage of the hive.', icon: 'book-open', status: 'Coming soon' },
  { name: 'Items', description: 'A future reference for every useful pickup.', icon: 'package', status: 'Coming soon' },
  { name: 'Bees', description: 'Understand the parts that make a hive work.', icon: 'hexagon', status: 'Live', href: '/bees' },
  { name: 'Enemies', description: 'Know what you are fighting and when it returns.', icon: 'shield-check', status: 'Live', href: '/enemies' },
  { name: 'Quests', description: 'Track the road to your next big reward.', icon: 'scroll-text', status: 'Coming soon' },
  { name: 'Fields', description: 'Plan your routes through the pollen fields.', icon: 'map', status: 'Coming soon' },
  { name: 'Tools', description: 'Practical utilities for sharper decisions.', icon: 'wrench', status: 'Coming soon' },
];

export const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Explore', href: '/explore' },
  { label: 'Macros', href: '/macros' },
  { label: 'Progression Guide', href: '/progression' },
  { label: 'Bees', href: '/bees' },
  { label: 'Enemies', href: '/enemies' },
  { label: 'About', href: '/about' },
];

const blueBeeImages = [
  'https://static.wikia.nocookie.net/bee-swarm-simulator/images/6/66/CoolBeeFace.png/revision/latest?cb=20230507003722',
  'https://static.wikia.nocookie.net/bee-swarm-simulator/images/f/fa/Bubble_Bee.png/revision/latest?cb=20200403235509',
  'https://static.wikia.nocookie.net/bee-swarm-simulator/images/4/41/BuckoFace.png/revision/latest?cb=20230507154530',
  'https://static.wikia.nocookie.net/bee-swarm-simulator/images/9/94/Tadpole_Bee_Face.png/revision/latest/scale-to-width-down/220?cb=20230227085930',
  'https://static.wikia.nocookie.net/bee-swarm-simulator/images/d/dc/Buoyant_Face.png/revision/latest/scale-to-width-down/220?cb=20230227091123',
];

const whiteBeeImages = [
  'https://static.wikia.nocookie.net/bee-swarm-simulator/images/8/83/BasicIcon.png/revision/latest?cb=20230506115759',
  'https://static.wikia.nocookie.net/bee-swarm-simulator/images/1/18/LookerIcon.png/revision/latest?cb=20230507144422',
  'https://static.wikia.nocookie.net/bee-swarm-simulator/images/0/0e/Commander_Bee.png/revision/latest?cb=20200403235837',
  'https://static.wikia.nocookie.net/bee-swarm-simulator/images/2/26/Vector_Bee_Face.png/revision/latest/scale-to-width-down/220?cb=20230227090717',
  'https://static.wikia.nocookie.net/bee-swarm-simulator/images/a/a5/FuzzyBeeFace.png/revision/latest?cb=20230227090920',
];

const redBeeImages = [
  'https://static.wikia.nocookie.net/bee-swarm-simulator/images/7/7b/Rage_Bee.png/revision/latest?cb=20200404000023',
  'https://static.wikia.nocookie.net/bee-swarm-simulator/images/1/14/Firefaceoriginal.png/revision/latest?cb=20230227075732',
  'https://static.wikia.nocookie.net/bee-swarm-simulator/images/6/64/Riley_Bee.png/revision/latest?cb=20200404000004',
  'https://static.wikia.nocookie.net/bee-swarm-simulator/images/a/ae/Spicy_Bee_Face.png/revision/latest/scale-to-width-down/220?cb=20230227090647',
  'https://static.wikia.nocookie.net/bee-swarm-simulator/images/5/56/Precise_Bee_Face.png/revision/latest/scale-to-width-down/220?cb=20230227090816',
];

export const progressionHives = [
  { name: 'Blue Hive', color: 'blue', href: '#blue-hive', icon: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/7/75/Diamond_Mask.png/revision/latest/scale-to-width-down/406?cb=20190403022722', bees: blueBeeImages, tools: [{ name: 'Tide Popper', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/c/cc/Tide_Popper.png/revision/latest?cb=20220103045407' }, { name: 'Bubble Wand', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/1/16/Bubble_Wand.png/revision/latest?cb=20190403015841' }, { name: 'Porcelain Dipper', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/e/e1/Porcelain_Dipper.png/revision/latest?cb=20240625063750' }], gear: [{ name: 'Bucko Guard', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/2/22/Bucko_Guard.png/revision/latest/scale-to-width-down/160?cb=20190403020330' }, { name: 'Blue Port-O-Hive', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/5/56/Blue_Port-O-Hive.png/revision/latest/scale-to-width-down/160?cb=20190405220756' }] },
  { name: 'White Hive', color: 'white', href: '#white-hive', icon: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/5/50/Gummy_Mask.png/revision/latest/scale-to-width-down/408?cb=20210919012419', bees: whiteBeeImages, tools: [{ name: 'Gummyballer', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/c/c4/Gummyballer.png/revision/latest?cb=20211227045658' }, { name: 'Petal Wand', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/d/d9/Petal_Wand.png/revision/latest?cb=20210402171049' }, { name: 'Spark Staff', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/2/22/Spark_Staff.png/revision/latest/scale-to-width-down/98?cb=20190405220757' }], gear: [{ name: 'Coconut Canister', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/9/9b/Coconut_Canister.png/revision/latest/scale-to-width-down/160?cb=20191006004936' }, { name: 'Petal Belt', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/0/0d/Petal_Belt.png/revision/latest/scale-to-width-down/160?cb=20210402170808' }] },
  { name: 'Mixed Hive', color: 'mixed', href: '#mixed-hive', icon: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/f/f0/Honey_Mask.png/revision/latest/scale-to-width-down/415?cb=20190403022334', bees: [...blueBeeImages, ...whiteBeeImages, ...redBeeImages], tools: [{ name: 'Magnet', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/8/8c/Magnet.png/revision/latest/scale-to-width-down/113?cb=20200403234529' }, { name: 'Vacuum', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/e/e1/Vacuum.png/revision/latest/scale-to-width-down/90?cb=20190402214642' }, { name: 'Port-O-Hive', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/4/4a/Port-O-Hive.png/revision/latest/scale-to-width-down/160?cb=20190403021635' }], gear: [{ name: 'Mondo Belt Bag', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/a/ad/Mondo_Belt_Bag.png/revision/latest/scale-to-width-down/160?cb=20190403020419' }, { name: 'Coconut Canister', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/9/9b/Coconut_Canister.png/revision/latest/scale-to-width-down/160?cb=20191006004936' }] },
  { name: 'Red Hive', color: 'red', href: '#red-hive', icon: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/9/96/Demon_Mask.png/revision/latest?cb=20210919013026', bees: redBeeImages, tools: [{ name: 'Dark Scythe', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/6/6b/Dark_Scythe.png/revision/latest?cb=20211226225244' }, { name: 'Scythe', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/c/cd/Scythe.png/revision/latest/scale-to-width-down/138?cb=20190403020018' }, { name: 'Porcelain Dipper', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/e/e1/Porcelain_Dipper.png/revision/latest?cb=20240625063750' }], gear: [{ name: 'Riley Guard', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/f/f8/Riley_Guard.png/revision/latest/scale-to-width-down/160?cb=20190403020236' }, { name: 'Red Guard', image: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/4/4c/Red_Guard.png/revision/latest/scale-to-width-down/160?cb=20190403020205' }] },
];
