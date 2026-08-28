const wikiImage = (path) => `https://static.wikia.nocookie.net/bee-swarm-simulator/images/${path}`;

const enemy = (name, image, type, description, behavior, drops, respawn) => ({ name, slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'), image: wikiImage(image), type, description, behavior, drops, respawn });

export const enemies = [
  enemy('Ladybug', '3/38/Ladybug.png/revision/latest?cb=20200404010052', 'Common enemy', 'A small red enemy found across early and mid-game fields.', 'It walks toward the player and attacks at close range.', 'Treats, honey, and field loot', '5 minutes'),
  enemy('Rhino Beetle', '4/48/Rhino_Beetle.png/revision/latest?cb=20200404010143', 'Common enemy', 'A sturdy early-game enemy with a horn charge.', 'It charges and bumps the player while defending its field.', 'Treats, honey, and field loot', '5 minutes'),
  enemy('Spider', '8/84/Spider.png/revision/latest?cb=20180911055942', 'Common enemy', 'A white enemy that guards the Spider Field.', 'It moves quickly and attacks the player from close range.', 'Treats, honey, and field loot', '10 minutes'),
  enemy('Scorpion', 'a/ab/Scorpion.png/revision/latest?cb=20180413021814', 'Common enemy', 'A red enemy that guards the Rose Field and attacks aggressively.', 'It chases the player and uses its stinger at close range.', 'Treats, honey, and field loot', '5 minutes'),
  enemy('Mantis', 'a/a2/Mantis%281%29.png/revision/latest?cb=20180407163701', 'Common enemy', 'A green enemy found in several fields throughout the mountain.', 'It attacks with sweeping strikes and can pressure the player at close range.', 'Treats, honey, and field loot', '10 minutes'),
  enemy('Werewolf', 'f/f5/Werewolf.png/revision/latest?cb=20180413023405', 'Common enemy', 'A powerful enemy found in the Werewolf Cave.', 'It pursues the player and deals heavy melee damage.', 'Treats, honey, and field loot', '10 minutes'),
  enemy('King Beetle', '1/13/King_Beetle.png/revision/latest?cb=20200819021637', 'Boss', 'A recurring boss hidden beneath the Clover Field.', 'It has high health, attacks nearby players, and rewards a successful defeat with boss loot.', 'Treats, honey, amulets, and boss loot', '24 hours'),
  enemy('Tunnel Bear', 'e/e8/Tunnel_Bear.png/revision/latest?cb=20180728153853', 'Boss', 'A major boss found in the Tunnel beneath the Clover Field.', 'It attacks with strong close-range hits and has a large health pool.', 'Treats, honey, tickets, and boss loot', '48 hours'),
  enemy('Stump Snail', '2/23/Stump_Snail.png/revision/latest?cb=20181207154342', 'Boss', 'A huge boss that occupies the Stump Field.', 'It has enormous health and remains in the field until defeated.', 'Treats, honey, amulets, and boss loot', '96 hours'),
  enemy('Coconut Crab', '4/47/Coconut_Crab.png/revision/latest?cb=20211004171659', 'Boss', 'A high-level boss that guards Coconut Field.', 'It attacks with claws and coconut projectiles while defending its field.', 'Treats, honey, tropical loot, and boss loot', '36 hours'),
  enemy('Vicious Bee', '1/1f/Vicious_Bee.png/revision/latest?cb=20200404000135', 'Event boss', 'A rare event enemy that can appear in several fields.', 'It flies around the field, attacks with spikes, and drops valuable stingers when defeated.', 'Stingers, honey, treats, and rare loot', '30 minutes'),
  enemy('Stick Bug', '1/13/Stick_Bug.png/revision/latest?cb=20210622231112', 'Boss challenge', 'A challenge boss that leads the player through multiple fields.', 'Its challenge has stages, changing locations and difficulty as the player progresses.', 'Amulets, honey, tokens, and challenge rewards', 'Challenge cooldown varies'),
];

export const enemyBySlug = (slug) => enemies.find((enemyData) => enemyData.slug === slug);
