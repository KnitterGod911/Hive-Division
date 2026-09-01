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
    bee('Bomber Bee', 'colorless', '7/7a/Bomber_Bee.png/revision/latest?cb=20200403233858', 'Bombs pollen from nearby flowers and helps convert pollen with Bomb tokens.'),
    bee('Brave Bee', 'colorless', '1/10/Brave_Bee.png/revision/latest?cb=20200403234454', 'A sturdy bee that contributes attack and reliable red pollen.'),
    bee('Hasty Bee', 'colorless', 'b/be/Hasty_Bee.png/revision/latest?cb=20200403235822', 'Improves movement speed and keeps gathering routes moving quickly.'),
    bee('Looker Bee', 'colorless', '5/5d/Looker_Bee.png/revision/latest?cb=20200403235630', 'Boosts critical chance and supports critical-focused hive builds.'),
    bee('Rad Bee', 'red', '8/8d/Rad_Bee.png/revision/latest?cb=20200403235554', 'A red bee that gathers red pollen and adds attack power.'),
    bee('Rascal Bee', 'red', '4/44/Rascal_Bee.png/revision/latest?cb=20200403235453', 'A red bee with strong early attack and red pollen output.'),
    bee('Stubborn Bee', 'colorless', '3/3f/Stubborn_Bee.png/revision/latest?cb=20200403235346', 'Extends token duration and helps useful hive effects remain active.'),
  ],
  epic: [
    bee('Bubble Bee', 'blue', 'f/fa/Bubble_Bee.png/revision/latest?cb=20200403235509', 'A blue bee that creates bubbles and gathers blue pollen efficiently.'),
    bee('Bucko Bee', 'blue', '3/30/Bucko_Bee.png/revision/latest?cb=20200403235749', 'A blue attacker that boosts blue pollen and supports blue ability tokens.'),
    bee('Bumble Bee', 'blue', '3/30/Bumble_Bee.png/revision/latest?cb=20200403235757', 'A blue bee that gathers extra pollen and contributes capacity support.'),
    bee('Cool Bee', 'blue', '8/8b/Cool_Bee.png/revision/latest?cb=20200403235805', 'A reliable blue bee that gathers blue pollen and improves blue ability power.'),
    bee('Fire Bee', 'red', 'a/a4/Fire_Bee.png/revision/latest?cb=20200403235920', 'A red bee that creates flames and improves red pollen collection.'),
    bee('Frosty Bee', 'blue', 'f/fb/Frosty_Bee.png/revision/latest?cb=20200403235930', 'A blue bee that creates frosty tokens and gathers blue pollen.'),
    bee('Honey Bee', 'colorless', 'c/c3/Honey_Bee.png/revision/latest?cb=20200403235942', 'Produces Honey tokens and helps convert pollen into honey.'),
    bee('Rage Bee', 'red', '7/7b/Rage_Bee.png/revision/latest?cb=20200404000023', 'A red bee that grants attack-focused Rage tokens to the hive.'),
    bee('Riley Bee', 'red', '6/64/Riley_Bee.png/revision/latest?cb=20200404000004', 'A red bee that boosts red pollen and contributes strong red abilities.'),
    bee('Shocked Bee', 'blue', 'c/c0/Shocked_Bee.png/revision/latest?cb=20200404000019', 'A blue bee that grants haste and supports fast blue gathering.'),
  ],
  legendary: [
    bee('Baby Bee', 'colorless', '1/1f/Baby_Bee.png/revision/latest?cb=20200403235158', 'Creates Baby Love, increasing luck and improving the hive\'s gathering potential.'),
    bee('Carpenter Bee', 'colorless', '7/75/Carpenter_Bee.png/revision/latest?cb=20200403235126', 'Creates Mark tokens and gathers pollen from marked flowers more effectively.'),
    bee('Demon Bee', 'red', '8/84/Demon_Bee.png/revision/latest?cb=20200403234445', 'A red bee with high attack and strong red pollen abilities.'),
    bee('Diamond Bee', 'blue', '0/0a/Diamond_Bee.png/revision/latest?cb=20200403234546', 'A blue bee that produces Honey tokens and gathers blue pollen efficiently.'),
    bee('Lion Bee', 'colorless', 'b/b3/Lion_Bee.png/revision/latest?cb=20200403234824', 'A powerful colorless attacker that brings balanced pollen and damage.'),
    bee('Music Bee', 'colorless', '3/38/Music_Bee.png/revision/latest?cb=20200403234902', 'Creates Melody and Focus tokens that improve critical gathering.'),
    bee('Ninja Bee', 'blue', '9/97/Ninja_Bee.png/revision/latest?cb=20200403235002', 'A fast blue bee that grants Haste and gathers blue pollen.'),
    bee('Shy Bee', 'red', 'e/e8/Shy_Bee.png/revision/latest?cb=20200403235237', 'A red bee that gathers red pollen and strengthens red ability tokens.'),
  ],
  mythic: [
    bee('Buoyant Bee', 'blue', 'd/d7/Buoyant_Bee.png/revision/latest?cb=20230415203347', 'Creates balloons that store pollen and power up blue hive capacity.'),
    bee('Fuzzy Bee', 'colorless', 'c/c3/Fuzzy_Bee.png/revision/latest?cb=20230130022457', 'Pollinates nearby flowers and boosts their pollen while gathering.'),
    bee('Precise Bee', 'red', '2/29/Precise_Bee.png/revision/latest?cb=20230415200607', 'Builds Precision stacks and creates precise marks for powerful red gathering.'),
    bee('Spicy Bee', 'red', '4/43/Spicy_Bee.png/revision/latest?cb=20230417032558', 'Creates flame fuel and inferno abilities that amplify red pollen.'),
    bee('Tadpole Bee', 'blue', '5/54/Tadpole_Bee.png/revision/latest?cb=20230417032602', 'Creates bubbles and frogs that support blue pollen and token generation.'),
    bee('Vector Bee', 'colorless', 'a/a6/Vector_Bee.png/revision/latest?cb=20230130024116', 'Creates Triangulate marks that reward precise movement and marked flowers.'),
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
  'Basic Bee': ['No ability token'], 'Bomber Bee': ['Bomb Token: Explodes when touched, collecting pollen from nearby flowers in a burst'], 'Brave Bee': ['Red Boost Token: Spawns a red orb that boosts red pollen collection when collected'], 'Hasty Bee': ['Haste Token: Grants temporary movement speed increase when touched'], 'Looker Bee': ['Focus Token: Increases critical chance significantly when collected'], 'Rad Bee': ['Red Boost Token: Red orb that increases red pollen output when collected'], 'Rascal Bee': ['Red Bomb Token: Explodes on touch, gathering red pollen from nearby flowers'], 'Stubborn Bee': ['Token Link: Extends the duration of nearby ability tokens when collected'],
  'Bubble Bee': ['Bubble Token: Bubbles that float and collect blue pollen when touched'], 'Bucko Bee': ['Blue Boost Token: Blue orb that strengthens blue pollen collection when collected'], 'Bumble Bee': ['Blue Boost Token: Increases blue pollen when touched'], 'Cool Bee': ['Blue Boost Token: Spawns blue orb that boosts blue pollen when collected'], 'Fire Bee': ['Flame Token: Creates flames that burn flowers and collect red pollen from surrounding area'], 'Frosty Bee': ['Blue Bomb Token: Icy explosion that collects blue pollen when touched'], 'Honey Bee': ['Honey Token: When collected, converts a portion of nearby pollen into honey'], 'Rage Bee': ['Rage Token: Increases bee attack power temporarily when collected'], 'Riley Bee': ['Red Boost Token: Red orb that boosts red pollen output when collected'], 'Shocked Bee': ['Haste Token: Grants movement speed boost when touched'],
  'Baby Bee': ['Baby Love Token: Increases loot luck and reward quality when collected'], 'Carpenter Bee': ['Mark Token: Places a mark on flowers; collecting from marked flowers gives bonus pollen'], 'Demon Bee': ['Red Bomb Token: Powerful red explosion that collects red pollen when touched'], 'Diamond Bee': ['Honey Token: Converts pollen to honey when collected', 'Blue Boost Token: Increases blue pollen output'], 'Lion Bee': ['Token Link: Connects nearby tokens together when collected'], 'Music Bee': ['Melody Token: Increases critical chance when collected', 'Focus Token: Further boosts critical power'], 'Ninja Bee': ['Haste Token: Grants significant movement speed increase when touched'], 'Shy Bee': ['Red Boost Token: Red orb that increases red pollen when collected'],
  'Buoyant Bee': ['Balloon Token: Creates balloons that float and store pollen, increasing collection capacity'], 'Fuzzy Bee': ['Fuzzy Ball Token: Bounces around the field collecting pollen and pollinates nearby flowers'], 'Precise Bee': ['Precision Token: Builds precision stacks that increase critical power', 'Target Practice Token: Creates precise marks that reward accurate movement'], 'Spicy Bee': ['Flame Fuel Token: Powers up flame effects', 'Inferno Token: Creates a field of flames that spread red pollen collection'], 'Tadpole Bee': ['Bubble Token: Blue bubbles that collect pollen when touched', 'Frog Token: Spawns a small frog that hops around collecting pollen'], 'Vector Bee': ['Triangulate Token: Creates three connected marks; collecting between them gives massive bonus pollen'],
  'Bear Bee': ['Bear Morph Token: Transforms the player into a bear form, changing movement and collection style'], 'Cobalt Bee': ['Blue Pulse Token: Sends out a blue pulse that collects blue pollen when touched', 'Blue Boost Token: Boosts blue pollen collection bonus'], 'Crimson Bee': ['Red Pulse Token: Sends out a red pulse that collects red pollen when touched', 'Red Boost Token: Boosts red pollen collection bonus'], 'Digital Bee': ['Code Mark Token: Copies and amplifies ability effects from enemies', 'Corruption Token: Corrupts the field with special effects'], 'Festive Bee': ['Festive Gift Token: Randomly grants special bonuses when collected'], 'Gummy Bee': ['Goo Token: Covers flowers with goo; touching goo-covered flowers gives bonus honey conversion'], 'Photon Bee': ['Beamstorm Token: Fires a laser beam that instantly collects pollen along its path'], 'Puppy Bee': ['Fetch Token: Puppy chases a ball and returns it; collecting the returned token grants a pollen boost'], 'Tabby Bee': ['Scratch Token: Scratches in a cone shape, collecting pollen in front', 'Tabby Love Token: Builds affection; higher affection increases Tabby Bee effectiveness'], 'Vicious Bee': ['Impale Token: Creates spikes that damage enemies and can penetrate multiple foes'], 'Windy Bee': ['Tornado Token: Creates a tornado that travels and collects pollen', 'Wind Blessing Token: Grants a blessing that improves collection efficiency'],
};

const giftedBonuses = {
  'Basic Bee': 'x1.2 pollen', 'Bomber Bee': '+15% bomb pollen', 'Brave Bee': '+5% bee attack', 'Hasty Bee': '+1 player movespeed', 'Looker Bee': '+25% critical power', 'Rad Bee': '+15% red pollen', 'Rascal Bee': '+15% red bomb pollen', 'Stubborn Bee': '+20% token duration',
  'Bubble Bee': '+15% bubble pollen', 'Bucko Bee': '+20% blue pollen', 'Bumble Bee': '+15% capacity', 'Cool Bee': '+15% blue pollen', 'Fire Bee': '+15% flame pollen', 'Frosty Bee': '+15% blue pollen', 'Honey Bee': '+25% honey from tokens', 'Rage Bee': '+15% bee attack', 'Riley Bee': '+20% red pollen', 'Shocked Bee': '+1 player movespeed',
  'Baby Bee': '+25% Baby Love luck', 'Carpenter Bee': '+25% mark duration', 'Demon Bee': '+15% red pollen', 'Diamond Bee': '+15% capacity', 'Lion Bee': '+5% bee attack', 'Music Bee': '+25% melody duration', 'Ninja Bee': '+15% blue pollen', 'Shy Bee': '+15% red pollen',
  'Buoyant Bee': '+15% balloon capacity', 'Fuzzy Bee': '+15% pollen', 'Precise Bee': '+15% super-crit chance', 'Spicy Bee': '+15% flame duration', 'Tadpole Bee': '+15% bubble duration', 'Vector Bee': '+15% mark duration',
  'Bear Bee': '+10% all pollen', 'Cobalt Bee': '+15% blue pollen', 'Crimson Bee': '+15% red pollen', 'Digital Bee': '+1% super-crit chance', 'Festive Bee': '+15% convert rate', 'Gummy Bee': '+1.5x goo conversion', 'Photon Bee': '+5% instant conversion', 'Puppy Bee': '+20% bond from treats', 'Tabby Bee': '+50% Tabby Love pollen', 'Vicious Bee': '+15% bee attack', 'Windy Bee': '+15% white pollen',
};

export const giftedEventBeeOrder = [];

const abilityDetails = {
  'Basic Bee': 'Basic Bee has no special active ability token, but it remains one of the most dependable starter bees in a growing hive. Its simple, balanced profile makes it easy to build around early in the game, especially when a player is still deciding on a color focus. It is obtained automatically from the starter hive and does not require any special steps to unlock.',
  'Bomber Bee': 'Bomber Bee fires bombs that collect pollen from nearby flowers and help clear clusters quickly. This makes it especially effective while leveling early red and mixed hives that need burst collection. It is obtained from the Basic Egg and later through normal hive progression, making it a natural early-game pickup.',
  'Brave Bee': 'Brave Bee focuses on reliable attack support and helps a hive convert more red pollen during combat and field runs. Its strength is consistency, giving early and mid-game players a dependable source of damage and collection. Brave Bee is acquired by hatching it from the Basic Egg or by progressing through the early hive egg pool.',
  'Hasty Bee': 'Hasty Bee gives a speed boost through its Haste effect, helping the player move between flowers and gather more quickly. It improves route efficiency and makes the player much less likely to waste time while farming. Hasty Bee is obtained through the usual early-game hive progression and egg hatches.',
  'Looker Bee': 'Looker Bee strengthens critical-hit chance and makes the hive more efficient when focused on crit-heavy pollen gathering. The extra criticals help turn a steady route into a noticeably stronger collection cycle. It is obtained through early progression and standard bee hatching, usually before players reach the more specialized event bees.',
  'Rad Bee': 'Rad Bee boosts red pollen collection and increases the output of red-hive gathering routes. Its main value is how it steadily supports red-field farming without requiring much setup. Rad Bee is obtained through the standard egg pool and is commonly found as a natural red bee progression step.',
  'Rascal Bee': 'Rascal Bee uses a red-burst effect that gathers pollen from nearby flowers and helps a hive build momentum rapidly. It is useful in early red setups that need a strong area-collection tool before more specialized bees are available. Rascal Bee is unlocked through regular red bee progression and egg hatches.',
  'Stubborn Bee': 'Stubborn Bee links nearby ability tokens together so the player can pick up more useful effects from the same area. This makes it highly valuable in routes where token collection matters just as much as flower gathering. Stubborn Bee is obtained through the standard bee pool as a durable early or mid-game support option.',
  'Bubble Bee': 'Bubble Bee creates bubble effects that pull pollen from nearby flowers and provide steady blue-field support. It is especially useful for a player who wants a clean, consistent blue pollen route without relying on heavy token setup. Bubble Bee is obtained through normal blue bee progression and regular hive hatching.',
  'Bucko Bee': 'Bucko Bee boosts blue pollen output and helps blue hives produce more efficient field runs. It works well as a support bee in blue-focused setups because it strengthens the collection flow rather than relying on flashy, temporary effects. Bucko Bee is unlocked through standard blue bee progression and egg hatches.',
  'Bumble Bee': 'Bumble Bee contributes capacity and blue pollen support, which makes it especially good for players who need to gather more before converting. It helps a blue hive stay efficient without forcing the player to change the whole route. Bumble Bee is obtained through the blue bee progression track and standard hive hatching.',
  'Cool Bee': 'Cool Bee improves blue pollen collection and provides steady support in blue-heavy field routes. Its value comes from consistency, helping players keep momentum during long farming sessions. Cool Bee is obtained through normal blue bee progression and is a common mid-game blue bee.',
  'Fire Bee': 'Fire Bee creates flames that can burn flowers and collect red pollen over a wider area. This makes it useful for red-field farming where a stronger area effect helps the player gather faster. Fire Bee is acquired through the red bee progression track and naturally appears in the common hive egg pool.',
  'Frosty Bee': 'Frosty Bee uses a blue-burst effect to gather pollen from nearby blooms and supports blue hive efficiency in the middle of a run. It is a good early-to-mid-game support bee for players who want cleaner blue collection while moving through a field. Frosty Bee is obtained through standard blue bee progression and hatching.',
  'Honey Bee': 'Honey Bee converts a portion of gathered pollen into honey, making it a major contributor to a hive that needs steady conversion. That conversion helps the player maintain growth and resource flow without overrelying on pure pollen collection. Honey Bee is obtained through the hive progression system and becomes a staple blue or neutral support bee in many builds.',
  'Rage Bee': 'Rage Bee increases bee attack and helps the hive more effectively deal with enemies and dangerous field content. It is especially useful when a player wants a stronger combat-focused setup without sacrificing collection efficiency. Rage Bee is acquired through normal hive progression and is tied to the red bee progression path.',
  'Riley Bee': 'Riley Bee adds steady red pollen support and improves the output of a red-focused route. It is one of the more reliable early color-specific bees because its effect is simple and consistent rather than extremely specialized. Riley Bee is obtained through standard red bee progression and standard egg hatches.',
  'Shocked Bee': 'Shocked Bee provides a Haste-style boost, which improves movement and makes it easier to keep a route moving cleanly. This helps players regain efficiency during long farm loops and reduces downtime between flowers. Shocked Bee is obtained as part of the normal blue bee progression cycle.',
  'Baby Bee': 'Baby Bee gives Baby Love, which raises loot luck and improves the quality of rewards obtained during a run. It is most valuable for players trying to improve their reward efficiency while farming for upgrades and special drops. Baby Bee is usually acquired through the standard bee progression system and is a key early mid-game support bee.',
  'Carpenter Bee': 'Carpenter Bee creates Mark effects that improve pollen from marked flowers and reward informed route planning. It works best when a player is moving through a field with strong marked targets instead of relying purely on random collecting. Carpenter Bee is obtained through normal hive progression and is commonly used in colorless or utility builds.',
  'Demon Bee': 'Demon Bee combines a powerful red-field effect with strong attack support, making it excellent for combat and red pollen collection. It is especially useful when a player is trying to maintain high output during a difficult field run. Demon Bee is acquired through the red bee progression path and later hive advancement.',
  'Diamond Bee': 'Diamond Bee supports blue pollen collection and converts gathered pollen into honey through a more efficient flow. It is a strong mid-game choice for players who want better conversion and a steady blue collection pace. Diamond Bee is obtained through the normal progression cycle and regular hatching.',
  'Lion Bee': 'Lion Bee is a strong colorless attacker that gives the hive a balanced mix of combat value and collection support. It works well in mixed or neutral builds that need a reliable offensive option without giving up extra pollen. Lion Bee is obtained through the later hive progression track and is a classic legendary power bee.',
  'Music Bee': 'Music Bee creates Melody and Focus effects that improve critical chance and collection quality in a run. Its main strength is how it amplifies critical-based routes and turns a steady route into a much stronger one. Music Bee is obtained through normal progression and is typically considered a highly valuable legendary support bee.',
  'Ninja Bee': 'Ninja Bee gives a Haste-like boost while also helping blue hives maintain good collection flow. It is especially efficient for fast resource routes where the player is moving constantly between flowers. Ninja Bee is obtained through standard blue and legendary bee progression.',
  'Shy Bee': 'Shy Bee improves red pollen collection and supports red-hive routes that need reliable output. Its value is in consistency, making it a useful bee for players who want a smoother red collection cycle without heavy complexity. Shy Bee is obtained through regular red bee progression and standard hatching.',
  'Buoyant Bee': 'Buoyant Bee makes balloons that store pollen and increase the hive’s holding capacity before conversion. This helps players collect more in a single route and reduces the need to convert too early. Buoyant Bee is acquired through late-game progression and special hive unlocks.',
  'Fuzzy Bee': 'Fuzzy Bee pollinates nearby flowers and increases the amount of pollen available from the surrounding area. It works best in higher-level routes where a player wants more efficient field cleanup and stronger nearby collection. Fuzzy Bee is obtained through mid-to-late game progression and is generally treated as a mythic support bee.',
  'Precise Bee': 'Precise Bee builds Precision and creates targeted marks that improve the value of careful movement through the field. It rewards players who are intentional about route planning and position themselves around marked bloom clusters. Precise Bee is acquired through progression and is a staple mythic choice for high-output red or all-round builds.',
  'Spicy Bee': 'Spicy Bee creates flame-driven effects that spread through a cluster and help a hive gather heavier amounts of red pollen. It is especially good for intense field runs where a wide area effect matters more than a one-flower burst. Spicy Bee is obtained via the mythic bee progression path and is considered a high-power red bee.',
  'Tadpole Bee': 'Tadpole Bee creates bubbles and frog-based support that snap up pollen while the player moves through the field. It provides strong blue-area efficiency and helps the hive sustain with good collection pacing. Tadpole Bee is unlocked through the mythic progression track and advanced hive progression.',
  'Vector Bee': 'Vector Bee creates triangulated marks and rewards route efficiency by collecting from multiple linked flowers in a coordinated pattern. It is a favorite for players who like precise movement and want a stronger connection between route design and value. Vector Bee is obtained through mythic progression and advanced hive unlocking.',
  'Bear Bee': 'Bear Bee uses Bear Morph to transform the player into a bear form and gives the hive a memorable, highly thematic movement and collection effect. The transformation changes how the player interacts with the field and can make gathering feel much more aggressive. Bear Bee is obtained through the event progression and specific event quest or celebration conditions associated with the bee.',
  'Cobalt Bee': 'Cobalt Bee sends out a blue pulse that gathers blue pollen and supports the hive’s blue-field efficiency. It is a strong event bee because it gives a direct and noticeable boost to blue pollen routes without requiring a complicated setup. Cobalt Bee is obtained through the event bee system and is tied to the blue event bee progression.',
  'Crimson Bee': 'Crimson Bee sends out a red pulse that brings in red pollen quickly and helps maintain red hive productivity. It is most effective in red-focused runs where the player wants a fast, strong burst of collection. Crimson Bee is acquired through event bee progression and special event conditions.',
  'Digital Bee': 'Digital Bee uses code-based effects and corrupted field logic to amplify the hive’s ability output in a very unusual way. It rewards players who understand unusual route patterns and can exploit the field disruption to gain more value. Digital Bee is obtained through unique event or special-event progression and is tied to the Digital event bee system.',
  'Festive Bee': 'Festive Bee creates celebratory gains and random gift effects that add a temporary benefit to the player while farming. Its charm lies in utility and surprising boosts rather than a single hard-coded stat increase. Festive Bee is acquired through seasonal or special event progression, which is why it belongs in the event bee category.',
  'Gummy Bee': 'Gummy Bee covers flowers with goo and creates a sticky layer that boosts honey gains and collection value. It is powerful for players focused on conversion and want a more efficient way to convert their pollen into honey. Gummy Bee is obtained through event progression and is a classic event bee with a strong utility identity.',
  'Photon Bee': 'Photon Bee fires a beam that sweeps across flowers and instantly gathers pollen from its path. Its strength is the wide area coverage and quick value gained during a route, which makes it excellent for sweeping a field quickly. Photon Bee is obtained through the event bee system and is one of the more unusual special bees in the game.',
  'Puppy Bee': 'Puppy Bee chases its ball and returns it to the player to trigger a collectible effect that supports gathering momentum. It is a playful but useful event bee that brings a small burst of value to a route, especially when players want a bright, active support role. Puppy Bee is obtained through the event bee progression and is usually tied to a specific seasonal or collection event.',
  'Tabby Bee': 'Tabby Bee uses Scratch to collect pollen in a cone and improves its value through Tabby Love as it gains trust. It is a personality-heavy event bee that delivers solid utility in collection and can become increasingly effective as the player builds the bond. Tabby Bee is obtained through the event bee progression system and benefits from the player maintaining that event relationship.',
  'Vicious Bee': 'Vicious Bee uses Impale to create spikes that damage enemies and give the hive a direct combat advantage. It is one of the most recognizable event bees because it turns the hive into a stronger combat force while still contributing a consistent battlefield effect. Vicious Bee is obtained through the event bee system and is associated with special event or challenge conditions.',
  'Windy Bee': 'Windy Bee creates a tornado effect that gathers pollen and grants Wind Blessing to improve the surrounding field run. It feels very dynamic and is valuable in routes where players want both large-scale collection and a little extra atmosphere or power. Windy Bee is obtained through the event bee system and special event progression.',
};

const obtainmentDetails = {
  'Bear Bee': 'Obtained through the Bear Bee event. Check the BSS Wiki for current event ticket cost and availability.',
  'Cobalt Bee': 'Obtained through event bee progression. Check the BSS Wiki for current ticket cost.',
  'Crimson Bee': 'Obtained through event bee progression. Check the BSS Wiki for current ticket cost.',
  'Digital Bee': 'Obtained through event bee progression. Check the BSS Wiki for current ticket cost.',
  'Festive Bee': 'Obtained through event bee progression. Check the BSS Wiki for current ticket cost.',
  'Gummy Bee': 'Obtained through the Gummy Bee event. Check the BSS Wiki for current event ticket cost and availability.',
  'Photon Bee': 'Obtained through event bee progression. Check the BSS Wiki for current ticket cost.',
  'Puppy Bee': 'Obtained through event bee progression. Check the BSS Wiki for current ticket cost.',
  'Tabby Bee': 'Obtained through event bee progression. Check the BSS Wiki for current ticket cost.',
  'Vicious Bee': 'Obtained through the Vicious Bee event. Check the BSS Wiki for current event ticket cost and availability.',
  'Windy Bee': 'Obtained through the Windy Bee event. Check the BSS Wiki for current event ticket cost and availability.',
};

const giftedAbilities = {
  'Basic Bee': '+20% pollen', 'Bomber Bee': '+15% bomb pollen', 'Brave Bee': '+5% bee attack', 'Hasty Bee': '+15% haste token duration', 'Looker Bee': '+25% critical power', 'Rad Bee': '+15% red pollen', 'Rascal Bee': '+15% red bomb pollen', 'Stubborn Bee': '+20% token duration',
  'Bubble Bee': '+15% bubble pollen', 'Bucko Bee': '+20% blue pollen', 'Bumble Bee': '+15% capacity', 'Cool Bee': '+15% blue pollen', 'Fire Bee': '+15% flame pollen', 'Frosty Bee': '+15% blue pollen', 'Honey Bee': '+25% honey from tokens', 'Rage Bee': '+15% bee attack', 'Riley Bee': '+20% red pollen', 'Shocked Bee': '+15% shocked pollen',
  'Baby Bee': '+25% Baby Love loot luck', 'Carpenter Bee': '+25% mark duration', 'Demon Bee': '+15% red pollen', 'Diamond Bee': '+15% capacity', 'Lion Bee': '+5% bee attack', 'Music Bee': '+25% melody duration', 'Ninja Bee': '+15% blue pollen', 'Shy Bee': '+15% red pollen',
  'Buoyant Bee': '+15% balloon capacity', 'Fuzzy Bee': '+15% pollen', 'Precise Bee': '+15% super-crit chance', 'Spicy Bee': '+15% flame duration', 'Tadpole Bee': '+15% bubble duration', 'Vector Bee': '+15% mark duration',
  'Bear Bee': '+10% all pollen', 'Cobalt Bee': '+15% blue pollen', 'Crimson Bee': '+15% red pollen', 'Digital Bee': '+1% super-crit chance', 'Festive Bee': '+15% convert rate', 'Gummy Bee': '+1.5x goo conversion', 'Photon Bee': '+5% instant conversion', 'Puppy Bee': '+20% bond from treats', 'Tabby Bee': '+50% Tabby Love pollen', 'Vicious Bee': '+15% bee attack', 'Windy Bee': '+15% white pollen',
};

const giftedSpecialAbilities = {
  'Bear Bee': 'Gifted Bear Morph has a 20% chance to transform the player into a rare bear. Mother Bear gives x2.5 pollen and x1.5 bee-gather pollen; Science Bear grants +1 convert rate and +1% ability rate.',
  'Digital Bee': 'Gifted Digital Bee unlocks Map Corruption: it corrupts a random field for all players for 3 minutes, plus 15 seconds per bee level. Drives increase the corruption amount, up to 300.',
};

Object.entries(beesByRarity).forEach(([rarity, bees]) => bees.forEach((beeData) => {
  beeData.rarity = rarity;
  beeData.slug = beeData.name.toLowerCase().replace(/ bee$/, '').replace(/[^a-z0-9]+/g, '-');
  beeData.tokens = tokenDetails[beeData.name] || ['Ability token information is maintained on the BSS Wiki.'];
  beeData.giftedBonus = giftedBonuses[beeData.name] || 'Gifted bonus information is maintained on the BSS Wiki.';
  beeData.ability = abilityDetails[beeData.name] || beeData.description;
  beeData.obtainment = obtainmentDetails[beeData.name] || null;
  beeData.giftedAbility = giftedAbilities[beeData.name] || 'Gifted ability information is maintained on the BSS Wiki.';
  beeData.giftedSpecialAbility = giftedSpecialAbilities[beeData.name] || null;
  beeData.wikiUrl = `https://bee-swarm-simulator.fandom.com/wiki/${beeData.name.replace(/ /g, '_')}`;
}));
