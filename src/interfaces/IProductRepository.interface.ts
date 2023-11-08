import { Product } from "src/models/product.model";
import { AbstractPromise } from "./AbstractRepository.interface";

export interface IProductRepository extends AbstractPromise<Product> {
    
}