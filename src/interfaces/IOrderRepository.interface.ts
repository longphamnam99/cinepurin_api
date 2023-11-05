import { Orders } from "src/models/orders.model";
import { AbstractPromise } from "./AbstractRepository.interface";

export interface IOrderRepository extends AbstractPromise<Orders> {}