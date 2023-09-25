export class ResponseData {
    data?: {} | [] | boolean;
    code?: number;
    message?: string;

    constructor(data: {} | [] | boolean, statusCode: number, message: string) {
        this.data = data;
        this.code = statusCode;
        this.message = message;

        return this;
    }
}