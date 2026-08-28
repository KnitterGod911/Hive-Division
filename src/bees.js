const wikiImage = (path) => `https://static.wikia.nocookie.net/bee-swarm-simulator/images/${path}`;

const bee = (name, color, image, description) => ({ name, color, image: wikiImage(image), description });

export const beeRarities = [
  { slug: 'common', name: 'Common', description: 'The foundation of every growing hive.', color: 'common' },
  { slug: 'rare', name: 'Rare', description: 'Specialized bees with stronger abilities.', color: 'rare' },
  { slug: 'epic', name: 'Epic', description: 'Powerful bees with focused strengths.', color: 'epic' },
  { slug: 'legendary', name: 'Legendary', description: 'Exceptional bees with defining hive powers.', color: 'legendary' },
  { slug: 'mythic', name: 'Mythic', description: 'The rarest bees, built around unique mechanics.', color: 'mythic' },
];

export const beesByRarity = {
  common: [
    bee('Basic Bee', 'colorless', 'c/cf/New_Basic_Bee_hive_Slot.png/revision/latest/scale-to-width-down/220?cb=20260401033147', 'A balanced bee with no special color, making it useful in any early hive.'),
  ],
  rare: [
    bee('Bomber Bee', 'colorless', 'c/c4/BomberFace.png/revision/latest?cb=20230506121042', 'Bombs pollen from nearby flowers and helps convert pollen with Bomb tokens.'),
    bee('Brave Bee', 'colorless', '1/15/GiftedBraveBee_Slot.png/revision/latest/scale-to-width-down/220?cb=20180808174149', 'A sturdy bee that contributes attack and reliable red pollen.'),
    bee('Hasty Bee', 'colorless', '8/8a/770A3E1D-9723-41DC-BB10-B2297C9AC916.jpeg/revision/latest/scale-to-width-down/220?cb=20180714193409', 'Improves movement speed and keeps gathering routes moving quickly.'),
    bee('Looker Bee', 'colorless', '3/36/LookerBee_Hive.png/revision/latest?cb=20180504233026', 'Boosts critical chance and supports critical-focused hive builds.'),
    bee('Rad Bee', 'red', '1/1d/RadBee_Hive.png/revision/latest?cb=20180504233144', 'A red bee that gathers red pollen and adds attack power.'),
    bee('Rascal Bee', 'red', 'f/f2/RascalBee_Hive.png/revision/latest?cb=20180504233222', 'A red bee with strong early attack and red pollen output.'),
    bee('Stubborn Bee', 'colorless', '0/07/RobloxScreenShot20181210_140947152_%282%29.png/revision/latest/scale-to-width-down/220?cb=20181210161639', 'Extends token duration and helps useful hive effects remain active.'),
  ],
  epic: [
    bee('Bubble Bee', 'blue', '9/99/GiftedBubbleBeehive.PNG/revision/latest?cb=20180822035016', 'A blue bee that creates bubbles and gathers blue pollen efficiently.'),
    bee('Bucko Bee', 'blue', '4/41/BuckoFace.png/revision/latest?cb=20230507154530', 'A blue attacker that boosts blue pollen and supports blue ability tokens.'),
    bee('Bumble Bee', 'blue', '6/61/BumbleFaceOutline.png/revision/latest?cb=20230227065811', 'A blue bee that gathers extra pollen and contributes capacity support.'),
    bee('Cool Bee', 'blue', '6/66/CoolBeeFace.png/revision/latest?cb=20230507003722', 'A reliable blue bee that gathers blue pollen and improves blue ability power.'),
    bee('Fire Bee', 'red', '0/06/Firebee.PNG/revision/latest?cb=20190203121110', 'A red bee that creates flames and improves red pollen collection.'),
    bee('Frosty Bee', 'blue', '9/93/FrostyBee_Hive.png/revision/latest?cb=20180504233643', 'A blue bee that creates frosty tokens and gathers blue pollen.'),
    bee('Honey Bee', 'colorless', 'a/a5/E07AFC32-2125-4198-9262-03E50364D7EB.jpeg/revision/latest/scale-to-width-down/220?cb=20180813074642', 'Produces Honey tokens and helps convert pollen into honey.'),
    bee('Rage Bee', 'red', '7/7b/Rage_Bee.png/revision/latest?cb=20200404000023', 'A red bee that grants attack-focused Rage tokens to the hive.'),
    bee('Riley Bee', 'red', '7/7a/RileyBee_Hive.png/revision/latest?cb=20180504233751', 'A red bee that boosts red pollen and contributes strong red abilities.'),
    bee('Shocked Bee', 'blue', 'c/c5/ShockedBee_Hive.png/revision/latest/scale-to-width-down/220?cb=20180504233830', 'A blue bee that grants haste and supports fast blue gathering.'),
  ],
  legendary: [
    bee('Baby Bee', 'colorless', 'd/d8/Gifted_Baby_Bee_hive.png/revision/latest/scale-to-width-down/220?cb=20180930205303', 'Creates Baby Love, increasing luck and improving the hive\'s gathering potential.'),
    bee('Carpenter Bee', 'colorless', 'b/b6/CarpenterBeeFace.png/revision/latest?cb=20230410012122', 'Creates Mark tokens and gathers pollen from marked flowers more effectively.'),
    bee('Demon Bee', 'red', '5/51/Png_%2819%29.png/revision/latest?cb=20230410012105', 'A red bee with high attack and strong red pollen abilities.'),
    bee('Diamond Bee', 'blue', 'd/d4/DiamondBee_Hive.png/revision/latest?cb=20180504234055', 'A blue bee that produces Honey tokens and gathers blue pollen efficiently.'),
    bee('Lion Bee', 'colorless', 'f/f3/LionBee_Hive.png/revision/latest?cb=20180504234139', 'A powerful colorless attacker that brings balanced pollen and damage.'),
    bee('Music Bee', 'colorless', '5/50/MusicBee_Hive.png/revision/latest?cb=20180504234214', 'Creates Melody and Focus tokens that improve critical gathering.'),
    bee('Ninja Bee', 'blue', '5/50/NinjaBee_Hive.png/revision/latest?cb=20180504234306', 'A fast blue bee that grants Haste and gathers blue pollen.'),
    bee('Shy Bee', 'red', 'f/f1/ShyBee_Hive.png/revision/latest/scale-to-width-down/220?cb=20180504234353', 'A red bee that gathers red pollen and strengthens red ability tokens.'),
  ],
  mythic: [
    bee('Buoyant Bee', 'blue', 'd/dc/Buoyant_Face.png/revision/latest/scale-to-width-down/220?cb=20230227091123', 'Creates balloons that store pollen and power up blue hive capacity.'),
    bee('Fuzzy Bee', 'colorless', 'a/a5/FuzzyBeeFace.png/revision/latest?cb=20230227090920', 'Pollinates nearby flowers and boosts their pollen while gathering.'),
    bee('Precise Bee', 'red', '5/56/Precise_Bee_Face.png/revision/latest/scale-to-width-down/220?cb=20230227090816', 'Builds Precision stacks and creates precise marks for powerful red gathering.'),
    bee('Spicy Bee', 'red', 'a/ae/Spicy_Bee_Face.png/revision/latest/scale-to-width-down/220?cb=20230227090647', 'Creates flame fuel and inferno abilities that amplify red pollen.'),
    bee('Tadpole Bee', 'blue', '9/94/Tadpole_Bee_Face.png/revision/latest/scale-to-width-down/220?cb=20230227085930', 'Creates bubbles and frogs that support blue pollen and token generation.'),
    bee('Vector Bee', 'colorless', '2/26/Vector_Bee_Face.png/revision/latest/scale-to-width-down/220?cb=20230227090717', 'Creates Triangulate marks that reward precise movement and marked flowers.'),
  ],
};
