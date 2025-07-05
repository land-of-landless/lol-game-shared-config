export const ENERGY_GENERATOR_UPGRADE_INFO: ENERGY_GENERATOR_UPGRADE_INFO_TYPE =
  {
    1: {
      coinCost: 25000,
      time: 1 * 60 * 1000, // 1 minute
      maxPanels: 4,
    },
    2: {
      coinCost: 50000,
      time: 10 * 60 * 1000, // 10 minutes,
      maxPanels: 5,
    },
    3: {
      coinCost: 100000,
      time: 30 * 60 * 1000, // 30 minutes,
      maxPanels: 6,
    },
    4: {
      coinCost: 500000,
      time: 2 * 60 * 60 * 1000, // 2 hours,
      maxPanels: 8,
    },
    5: {
      coinCost: 1000000,
      time: 6 * 60 * 60 * 1000, // 6 hours,
      maxPanels: 10,
    },
    6: {
      coinCost: 5000000,
      time: 24 * 60 * 60 * 1000, // 1 day,
      maxPanels: 12,
    },
    7: {
      coinCost: 10000000,
      time: 2 * 24 * 60 * 60 * 1000, // 2 days,
      maxPanels: 14,
    },
    8: {
      coinCost: 15000000,
      time: 4 * 24 * 60 * 60 * 1000, // 4 days,
      maxPanels: 16,
    },
    9: {
      coinCost: 20000000,
      time: 7 * 24 * 60 * 60 * 1000, // 7 days
      maxPanels: 18,
    },
    10: {
      coinCost: 25000000,
      time: 10 * 24 * 60 * 60 * 1000, // 10 days
      maxPanels: 20,
    },
  };

export const MAX_ENERGY_GENERATION_RATE = 60; //TODO: may be updated later

export const ENERGY_GENERATOR_COST_PER_PANEL = 400000;

export const ENERGY_GENERATOR_INCREASE_PER_PANEL = 0.2;

export const ENERGY_GENERATOR_MAX_LEVEL = 10;

// types
export type ENERGY_GENERATOR_LEVELS_TYPE =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10;

export type ENERGY_GENERATOR_UPGRADE_INFO_TYPE = {
  [K in ENERGY_GENERATOR_LEVELS_TYPE]: {
    coinCost: number;
    time: number;
    maxPanels: number;
  };
};
