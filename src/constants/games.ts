// first one: wheel of fortune - guaranteed win so 4 energy
// second one: guess the number - 1/2 chance of losing each time so 2 energy
// third one: pick the boxes - higher chances of win but losing possible so 3 energy
// fourth one: rock paper scissor considering tie 0.5 point it's a 50%/50% game so 2 energy

export const GAMES_ENERGY_COST: {
    [K in GAMES_ID_TYPE]: {
        name: string;
        energy: number;
        description: string;
    };
} = {
    1: {
        name: "wheel of fortune",
        energy: 4,
        description: "",
    },
    2: {
        name: "guess the number",
        energy: 2,
        description: "",
    },
    3: {
        name: "pick the boxes",
        energy: 3,
        description: "",
    },
    4: {
        name: "rock paper scissor",
        energy: 2,
        description: "",
    },
};

// game ids

// input validation
export const gameOperationInputs = ["start", "end", "guess"];

// types
export type Game_Operation_Type = "start" | "end" | "guess";
export type GAMES_ID_TYPE = 1 | 2 | 3 | 4;
