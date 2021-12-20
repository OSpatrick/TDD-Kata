export interface Coin {
    name?: string,
    diameter: number,
    weight: number,
    value: number
}

export const NICKEL: Coin = {
    name: 'Nickel',
    diameter: 21.21,
    weight: 5,
    value: 5
}

export const DIME: Coin = {
    name: 'Dime',
    diameter: 19.91,
    weight: 2.268,
    value: 10
}

export const QUARTER: Coin = {
    name: 'Quarter',
    diameter: 24.26,
    weight: 5.67,
    value: 25
}

export const VALID_COINS: Coin[] = [NICKEL, DIME, QUARTER];
