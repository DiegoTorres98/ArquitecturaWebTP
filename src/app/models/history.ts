export interface HistoryPurchase {
    id: number;
    code: string;
    name: string;
    amount: number;
    pay_amount: number;
    store: string;
    location: string;
}

export interface HistoryReservation {
    id: number;
    code: string;
    name: string;
    amount: number;
    pay_amount: number;
    store: string;
    location: string;
    date: string;
}
