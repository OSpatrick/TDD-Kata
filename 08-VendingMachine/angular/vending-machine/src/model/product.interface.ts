export interface Product {
    name: string,
    price: number;
}

export const COLA: Product = {
    name: 'Cola',
    price: 100
};

export const CHIPS: Product = {
    name: 'Chips',
    price: 50
};

export const CANDY: Product = {
    name: 'Candy',
    price: 65
};

export const PRODUCTS: Product[] = [COLA, CHIPS, CANDY];
