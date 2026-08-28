export const categories = [
  { name: 'Macros', description: 'Compare real projects and find your next automation.', icon: 'bot', status: 'Live', href: '/macros' },
  { name: 'Guides', description: 'Clear paths through every stage of the hive.', icon: 'book-open', status: 'Coming soon' },
  { name: 'Progression', description: 'See what to chase next, at every level.', icon: 'trending-up', status: 'Coming soon', href: '/progression' },
  { name: 'Items', description: 'A future reference for every useful pickup.', icon: 'package', status: 'Coming soon' },
  { name: 'Bees', description: 'Understand the parts that make a hive work.', icon: 'hexagon', status: 'Coming soon' },
  { name: 'Quests', description: 'Track the road to your next big reward.', icon: 'scroll-text', status: 'Coming soon' },
  { name: 'Fields', description: 'Plan your routes through the pollen fields.', icon: 'map', status: 'Coming soon' },
  { name: 'Tools', description: 'Practical utilities for sharper decisions.', icon: 'wrench', status: 'Coming soon' },
];

export const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Explore', href: '/explore' },
  { label: 'Macros', href: '/macros' },
  { label: 'Progression Guide', href: '/progression' },
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
  { name: 'Blue Hive', color: 'blue', href: '#blue-hive', icon: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/7/75/Diamond_Mask.png/revision/latest/scale-to-width-down/406?cb=20190403022722', bees: blueBeeImages },
  { name: 'White Hive', color: 'white', href: '#white-hive', icon: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/5/50/Gummy_Mask.png/revision/latest/scale-to-width-down/408?cb=20210919012419', bees: whiteBeeImages },
  { name: 'Mixed Hive', color: 'mixed', href: '#mixed-hive', icon: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/f/f0/Honey_Mask.png/revision/latest/scale-to-width-down/415?cb=20190403022334', bees: [...blueBeeImages, ...whiteBeeImages, ...redBeeImages] },
  { name: 'Red Hive', color: 'red', href: '#red-hive', icon: 'https://static.wikia.nocookie.net/bee-swarm-simulator/images/9/96/Demon_Mask.png/revision/latest?cb=20210919013026', bees: redBeeImages },
];
