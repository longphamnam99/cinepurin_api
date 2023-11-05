interface InputData {
    id: number;
    vnp_amount: string;
    vnp_tmn_code: string;
    vnp_trans_date: string;
}

export class Vnpay {
    id?: number;
    vnp_amount?: string;
    vnp_tmn_code?: string;
    vnp_trans_date?: string;

    constructor({id, vnp_amount, vnp_tmn_code, vnp_trans_date}: InputData) {
        if(id) this.id = id;
        if(vnp_amount) this.vnp_amount = vnp_amount;
        if(vnp_tmn_code) this.vnp_tmn_code = vnp_tmn_code;
        if(vnp_trans_date) this.vnp_trans_date = vnp_trans_date;
    }
}