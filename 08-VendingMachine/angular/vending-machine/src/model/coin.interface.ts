export interface Coin {
    diameter: number,
    weight: number,
    value?: number
}

export const nickel: Coin = {
    diameter: 21.21,
    weight: 5,
    value: 5
}

export const dime: Coin = {
    diameter: 19.91,
    weight: 2.268,
    value: 10
}
