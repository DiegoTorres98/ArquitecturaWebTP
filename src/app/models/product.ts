export interface SeasonProduct {
    id: number;
    title: string;
    query: string;
}

export interface Product {
    id: number | null;
    department: string;
    name: string;
    products: string;
    minimumKg: number;
    amountKg: number;
    reservation: string;
    price: number;
    store: string;
    total: number;
}