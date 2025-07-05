export const MAX_MINER_COUNT = 3;

export const MINE_MAX_LEVEL_PER_MINER = 10;
export const MINE_GENERATION_BASE_RATE = 10;
export const MINE_GENERATION_RATE_INCREASE_PER_LEVEL = 10;

// minerals explores can bring + mined in miner units
export const MINE_MAX_MINERAL_GENERATION_RATE =
  20 * 20 + // TODO: update this when you have accurate number of max explorers
  MAX_MINER_COUNT *
    (MINE_GENERATION_BASE_RATE +
      (MINE_MAX_LEVEL_PER_MINER - 1) * MINE_GENERATION_RATE_INCREASE_PER_LEVEL);

export const MINE_UPGRADE_INFO: MINE_UPGRADE_INFO_TYPE = {
  1: {
    coinCost: 25000,
    energyGenerationRate: 10,
    time: 1 * 60 * 1000, // 1 minute
  },
  2: {
    coinCost: 55000,
    energyGenerationRate: 20,
    time: 5 * 60 * 1000, // 5 minutes
  },
  3: {
    coinCost: 120000,
    energyGenerationRate: 30,
    time: 15 * 60 * 1000, // 15 minutes
  },
  4: {
    coinCost: 250000,
    energyGenerationRate: 40,
    time: 1 * 60 * 60 * 1000, // 1 hour
  },
  5: {
    coinCost: 500000,
    energyGenerationRate: 50,
    time: 3 * 60 * 60 * 1000, // 3 hours
  },
  6: {
    coinCost: 1000000,
    energyGenerationRate: 60,
    time: 8 * 60 * 60 * 1000, // 8 hours
  },
  7: {
    coinCost: 1800000,
    energyGenerationRate: 70,
    time: 1 * 24 * 60 * 60 * 1000, // 1 day
  },
  8: {
    coinCost: 2800000,
    energyGenerationRate: 80,
    time: 2 * 24 * 60 * 60 * 1000, // 2 days
  },
  9: {
    coinCost: 3900000,
    energyGenerationRate: 90,
    time: 5 * 24 * 60 * 60 * 1000, // 5 days
  },
  10: {
    coinCost: 5000000,
    energyGenerationRate: 100,
    time: 10 * 24 * 60 * 60 * 1000, // 10 days
  },
};
// input validation

// types
export type MINE_UPGRADE_LEVEL_TYPE = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type MINE_UPGRADE_INFO_TYPE = {
  [K in MINE_UPGRADE_LEVEL_TYPE]: {
    coinCost: number;
    energyGenerationRate: number;
    time: number; // in milliseconds
  };
};

export type MINE_MINER_ID_TYPE = 0 | 1 | 2;
