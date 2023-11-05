import { Payments } from "src/models/payments.model";
import { AbstractPromise } from "./AbstractRepository.interface";

export interface IPaymentsRepository extends AbstractPromise<Payments> {}