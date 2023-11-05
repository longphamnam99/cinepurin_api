interface InputData {
    id: number;
    amount: number;
    code: string;
    bank: string;
    date: string
}

export class Payments {
    id?: number;
    amount?: number;
    code?: string;
    bank?: string;
    date?: string;

    constructor({id, amount, code, bank, date}: InputData) {
        if(id) this.id = id;
        if(amount) this.amount = amount;
        if(code) this.code = code;
        if(bank) this.bank = bank;
        if(date) this.date = date;
    }
}