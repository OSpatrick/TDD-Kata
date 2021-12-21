export interface product {
    name: string,
    price: number
}

export const COLA: product = {
    name: 'Cola',
    price: 100
}

export const CHIPS: product = {
    name: 'Chips',
    price: 50
}

export const CANDY: product = {
    name: 'Candy',
    price: 65
}

export const PRODUCTS: product[] = [COLA, CHIPS, CANDY];