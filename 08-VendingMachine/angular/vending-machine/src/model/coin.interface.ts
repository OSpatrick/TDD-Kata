export interface Coin {
    diameter: number,
    weight: number,
    value: number
}

export const NICKEL: Coin = {
    diameter: 21.21,
    weight: 5,
    value: 5
}

export const DIME: Coin = {
    diameter: 19.91,
    weight: 2.268,
    value: 10
}

export const QUARTER: Coin = {
    diameter: 24.26,
    weight: 5.67,
    value: 25
}

export const VALID_COINS: Coin[] = [NICKEL, DIME, QUARTER];
