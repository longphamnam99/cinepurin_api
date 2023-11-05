import { Vnpay } from "src/models/vnpay.model";
import { AbstractPromise } from "./AbstractRepository.interface";

export interface IVnpayRepository extends AbstractPromise<Vnpay> {}