export interface SeasonProduct {
    id: number;
    title: string;
    query: string;
}

export interface Product {
    id: number | null;
    department: string;
    name: string;
    products: string[];
    minimum_kg: number;
    amount_kg: number;
    reservation: string;
    price: number;
    store: string;
    total: number;
}