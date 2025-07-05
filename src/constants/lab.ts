import type { Factory_Item_Type } from './factory.js';

export const LAB_UPGRADE_INFO = {
  1: {
    coinCost: 25000,
    time: 1 * 60 * 1000, // 1 minute
  },
  2: {
    coinCost: 50000,
    time: 10 * 60 * 1000, // 10 minutes
  },
  3: {
    coinCost: 100000,
    time: 30 * 60 * 1000, // 30 minutes
  },
  4: {
    coinCost: 500000,
    time: 2 * 60 * 60 * 1000, // 2 hours
  },
  5: {
    coinCost: 1000000,
    time: 6 * 60 * 60 * 1000, // 6 hours
  },
  6: {
    coinCost: 5000000,
    time: 24 * 60 * 60 * 1000, // 1 day
  },
  7: {
    coinCost: 10000000,
    time: 2 * 24 * 60 * 60 * 1000, // 2 days
  },
  8: {
    coinCost: 15000000,
    time: 4 * 24 * 60 * 60 * 1000, // 4 days
  },
  9: {
    coinCost: 20000000,
    time: 7 * 24 * 60 * 60 * 1000, // 7 days
  },
  10: {
    coinCost: 25000000,
    time: 10 * 24 * 60 * 60 * 1000, // 10 days
  },
};

export const LAB_ITEMS_UPGRADE_INFO: {
  CostsForSteps: {
    [key: number]: {
      coins: number;
      minerals: number;
    };
  };
} & {
  [K in LAB_UPGRADE_ITEM_TYPE]: {
    maxStep: number;
  };
} = {
  CostsForSteps: {
    1: {
      coins: 25000,
      minerals: 100,
    },
    2: {
      coins: 50000,
      minerals: 300,
    },
    3: {
      coins: 100000,
      minerals: 700,
    },
    4: {
      coins: 200000,
      minerals: 1500,
    },
    5: {
      coins: 300000,
      minerals: 3000,
    },
    6: {
      coins: 500000,
      minerals: 6000,
    },
    7: {
      coins: 700000,
      minerals: 12000,
    },
    8: {
      coins: 850000,
      minerals: 25000,
    },
    9: {
      coins: 950000,
      minerals: 50000,
    },
    10: {
      coins: 1000000,
      minerals: 100000,
    },
  },

  //TODO: come up with better suited max step if needed
  factoryTech: {
    maxStep: 10,
  },

  energyGeneratorTech: {
    maxStep: 10,
  },

  rocketTech: {
    maxStep: 10,
  },

  miningTech: {
    maxStep: 10,
  },

  generalTech: {
    maxStep: 10,
  },

  portalTech: {
    maxStep: 10,
  },
};

// TODO: update if needed
export const LAB_FACTORY_ITEMS_UPGRADE_INFO: {
  [K in Factory_Item_Type]: {
    minTechToBuild: number;
  };
} = {
  astroidDigger: {
    minTechToBuild: 4,
  },
  cyborg: {
    minTechToBuild: 5,
  },
  explorer: {
    minTechToBuild: 1,
  },
  rocket: {
    minTechToBuild: 2,
  },
  satellite: {
    minTechToBuild: 3,
  },
  spaceship: {
    minTechToBuild: 3,
  },
  wormhole: {
    minTechToBuild: 5,
  },
};

// max level of lab
export const LAB_MAX_LEVEL = 10;

// input validation
export const LAB_Upgrade_Item_Inputs: LAB_UPGRADE_ITEM_TYPE[] = [
  'factoryTech',
  'energyGeneratorTech',
  'rocketTech',
  'miningTech',
  'generalTech',
  'portalTech',
];

// types
export type LAB_UPGRADE_ITEM_TYPE =
  | 'factoryTech'
  | 'energyGeneratorTech'
  | 'rocketTech'
  | 'miningTech'
  | 'generalTech'
  | 'portalTech';

export type LAB_STEP_INDEX_TYPE = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type LAB_LEVEL_INDEX_TYPE = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
