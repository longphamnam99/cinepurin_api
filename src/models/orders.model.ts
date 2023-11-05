interface InputData {
    id: number;
    movie_id: number;
    payment_id: number;
}

export class Orders {
    id?: number;
    movie_id?: number;
    payment_id?: number;

    constructor({id, movie_id, payment_id}: InputData) {
        if(id) this.id = id;
        if(movie_id) this.movie_id = movie_id;
        if(payment_id) this.payment_id = payment_id;
    }
}