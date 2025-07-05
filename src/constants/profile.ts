export const LOOT_BOX_TIME_TO_OPEN = {
  1: 1 * 60 * 60 * 1000,
  2: 2 * 60 * 60 * 1000,
  3: 6 * 60 * 60 * 1000,
  4: 18 * 60 * 60 * 1000,
};

export const BASE_REWARDS = {
  coins: 25000,
  gems: 8,
  xp: 100,
  tickets: 1,
  lootBoxKeys: 0,
};

export const XP_PER_LEVEL = [
  150, 352, 608, 919, 1286, 1711, 2195, 2739, 3345, 4015, 4749, 5549, 6417,
  7354, 8361, 9440, 10592, 11818, 13120, 14500, 15958, 17496, 19116, 20819,
  22606, 24479, 26439, 28487, 30625, 32855, 35177, 37593, 40105, 42714, 45421,
  48228, 51136, 54146, 57260, 60480, 63806, 67240, 70784, 74439, 78206, 82087,
  86083, 90195, 94425, 100000,
];

export const gemsPerMinute = 1;

export const lolSoldierNames: string[] = [
  'Jaxx Nebula',
  'Kael Nova',
  'Rylan Zenith',
  'Zephyr Quasar',
  'Rhys Comet',
  'Nova Starfire',
  'Eris Voidwalker',
  'Lyra Astrosurge',
  'Orion Solarflare',
  'Solara Lunarshadow',
  'Astra Cosmicglow',
  'Cosmo Nebulablaze',
  'Zenith Starlancer',
  'Quasar Voidstrider',
  'Comet Astrohopper',
  'Jett Galaxyshield',
  'Blaze Cosmicrush',
  'Asher Starfall',
  'Reef Nebulastorm',
  'Talon Voidsniper',
  'Shade Starduster',
  'Whisper Galaxydrift',
  'Echo Nebulaecho',
  'Ghost Voidwhisper',
  'Phantom Starphantom',
  'Flicker Lunarflare',
  'Sparkle Solarspark',
  'Glow Cometglow',
  'Flare Astroflare',
  'Shimmer Nebulashimmer', // 40

  'Bolt Thunderstrike',
  'Surge Energysurge',
  'Jolt Lightningjolt',
  'Spark Plasmaspark',
  'Pulse Ionicpulse',
  'Flash Lightspeedflash',
  'Beam Photonbeam',
  'Ray Gammaray',
  'Streak Warpstreak',
  'Glimmer Starfallglimmer',
  'Ember Infernoember',
  'Cinder Firecinder',
  'Scorch Solarflare',
  'Ignite Starignite',
  'Blaze Cometblaze',
  'Rex Nebula',
  'Astra Nova',
  'Quasar Blitz',
  'Comet Streak',
  'Orion Zenith',
  'Galaxy Sentinel',
  'Cosmic Conqueror',
  'Star Destroyer',
  'Void Walker',
  'Nebula Nomad',
  'Star Seeker',
  'Lunar Shadow',
  'Solar Flare',
  'Asteroid Guard',
  'Celestial Shield', // 80

  'Galactic Gladiator',
  'Cosmic Crusader',
  'Stellar Sniper',
  'Shadow Walker',
  'Void Assassin',
  'Planetary Protector',
  'Star Fortress',
  'Galactic Enforcer',
  'Cosmic Judge',
  'Celestial Peacekeeper',
  'Nova Spectre',
  'Astro Hunter',
  'Comet Blaster',
  'Quasar Builder',
  'Star Healer',
  'Galaxy Mechanic',
  'Void Navigator',
  'Nebula Whisperer',
  'Cosmic Planner',
  'Stellar Mastermind',
  'Galaxy Decoder',
  'Quasar Supplier',
  'Star Provider',
  'Comet Spark',
  'Nebula Recruit', // 120
  'Astro Initiate',
  'Quasar Novice',
  'Zero Glider',
  'Nova Burst',
  'Star Lancer',
  'Cosmic Rider',
  'Void Drifter',
  'Nebula Hopper',
  'Astro Jumper',
  'Comet Dasher',
  'Quasar Runner',
  'Lunar Strider',
  'Solar Skipper',
  'Asteroid Leaper',
  'Celestial Vaulter', //140

  'Galactic Sprinter',
  'Void Streaker',
  'Astro Zephyr',
  'Comet Phantom',
  'Quasar Wraith',
  'Viper-X',
  'Raptor-Prime',
  'Ursa-Major',
  'Hydra-XT',
  'Phoenix-One', //150
  'Titan-Alpha',
  'Minotaur-7',
  'Griffin-Delta',
  'Kraken-Zero',
  'Wyvern-Nova',
  'Chimera-Omega',
  'Basilisk-Blitz',
  'Cerberus-Guard',
  'Sphinx-Enigma', // 160
  'Leviathan-Strike',
  'Behemoth-Crush',
  'Juggernaut-Force',
  'Goliath-Sentinel',
  'Stellaris Jax',
  'Quasar Kael',
  'Nova Rylan',
  'Comet Zephyr',
  'Galaxy Rhys',
  'Void Eris',
  'Cosmic Lyra',
  'Astro Orion',
  'Nebula Solara',
  'Lunar Astra', // 180
  'Solar Cosmo',
  'Asteroid Zenith',
  'Celestial Quasar',
  'Galactic Comet',
  'Voidwalker Jett',
  'Starfire Blaze',
  'Nebulon Asher',
  'Astrofire Reef',
  'Cometstrike Talon', //190
  'Quasarguard Shade',
  'Starfall Whisper',
  'Jaxx Striker',
  'Kael Defender',
  'Rylan Guardian',
  'Zephyr Raider',
  'Rhys Warrior', // 200
];

export const lolSoldierProfilePics: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// input validation
export const lootBoxOperationInputs = [
  'start',
  'end',
  'end-with-gems',
  'end-with-key',
];

// type
export type LootBox_Operation_Type =
  | 'start'
  | 'end'
  | 'end-with-gems'
  | 'end-with-key';
