import { AbstractPromise } from "./AbstractRepository.interface";
import { Actor } from "src/models/Actor.model";

export interface IActorsRepository extends AbstractPromise<Actor> {

}