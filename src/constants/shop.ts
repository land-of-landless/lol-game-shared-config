export const PAYMENT_MINIMUM_REMAINING_TIME_SECS = 30 * 60; // in seconds

export const SHOP_GEM_ITEMS: {
    [key in SHOP_GEM_ITEMS_INDEX]: {
        gemAmount: number;
        cost: number;
        itemType: "gem";
    };
} = {
    0: {
        gemAmount: 330,
        cost: 5,
        itemType: "gem",
    },
    1: {
        gemAmount: 700,
        cost: 10,
        itemType: "gem",
    },
    2: {
        gemAmount: 4000,
        cost: 50,
        itemType: "gem",
    },
    3: {
        gemAmount: 9000,
        cost: 100,
        itemType: "gem",
    },
    4: {
        gemAmount: 100000,
        cost: 1000,
        itemType: "gem",
    },
    5: {
        gemAmount: 600000,
        cost: 5000,
        itemType: "gem",
    },
    6: {
        gemAmount: 1500000,
        cost: 10000,
        itemType: "gem",
    },
    7: {
        gemAmount: 20000000,
        cost: 100000,
        itemType: "gem",
    },
};

export const SHOP_ROBOT_ITEMS: {
    [key in SHOP_ROBOT_ITEMS_INDEX]: {
        cost: number;
        itemType: "robot";
    };
} = {
    0: {
        cost: 0,
        itemType: "robot",
    },
    1: {
        cost: 2500,
        itemType: "robot",
    },
    2: {
        cost: 5000,
        itemType: "robot",
    },
};

export const SHOP_PASS_ITEMS: {
    [key in SHOP_PASS_ITEMS_INDEX]: {
        cost: number;
        itemType: "game_pass";
    };
} = {
    0: {
        cost: 20,
        itemType: "game_pass",
    },
};

export const SHOP_COIN_ITEMS: {
    [key in SHOP_COIN_ITEMS_INDEX]: {
        coinAmount: number;
        cost: number;
        itemType: "gem";
    };
} = {
    0: {
        coinAmount: 15000,
        cost: 5,
        itemType: "gem",
    },
    1: {
        coinAmount: 30000,
        cost: 10,
        itemType: "gem",
    },
    2: {
        coinAmount: 150000,
        cost: 50,
        itemType: "gem",
    },
    3: {
        coinAmount: 300000,
        cost: 100,
        itemType: "gem",
    },
    4: {
        coinAmount: 3000000,
        cost: 1000,
        itemType: "gem",
    },
    5: {
        coinAmount: 15000000,
        cost: 5000,
        itemType: "gem",
    },
    6: {
        coinAmount: 300000000,
        cost: 10000,
        itemType: "gem",
    },
    7: {
        coinAmount: 3000000000,
        cost: 100000,
        itemType: "gem",
    },
};

export const MAX_PURCHASE_INVOICE_REQUEST_PER_HOUR = 25;

export const MIN_TIME_PAST_TO_ELIGIBLE_FOR_MANUAL_INVOICE_PROCESSING =
    1 * 60 * 1000; // 30 minutes

export const SHOP_MAX_GEM_ITEM_INDEX = 7;
export const SHOP_MAX_COIN_ITEM_INDEX = 7;
export const SHOP_MAX_ROBOT_ITEM_INDEX = 2;
export const SHOP_MAX_GAME_PASS_ITEM_INDEX = 2;

export const BATTLE_PASS_ENERGY_MAX_BUMP_AMOUNT = 5;

// input validation
export const itemTypeInputs = ["gem", "robot", "game_pass", "coin"];
export const itemIndexInputs = [0, 1, 2, 3, 4, 5, 6, 7];
export const payByInputs = ["gem", "money"];

// types
export type SHOP_Item_Type = "gem" | "robot" | "game_pass" | "coin";
export type SHOP_GEM_ITEMS_INDEX = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type PayBy = "gem" | "money";

export type SHOP_ROBOT_ITEMS_INDEX = 0 | 1 | 2;
export type SHOP_PASS_ITEMS_INDEX = 0;
export type SHOP_COIN_ITEMS_INDEX = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
