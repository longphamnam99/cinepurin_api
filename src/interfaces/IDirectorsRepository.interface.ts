import { Director } from "src/models/Director.model";
import { AbstractPromise } from "./AbstractRepository.interface";

export interface IDirectorsRepository extends AbstractPromise<Director> {

}