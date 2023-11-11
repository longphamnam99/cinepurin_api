import { Inject, Injectable } from '@nestjs/common';
import { ActorDto } from 'src/dto/actor.dto';
import { IActorsRepository } from 'src/interfaces/IActorsRepository.interface';
import { Actor } from 'src/models/Actor.model';

@Injectable()
export class ActorsService {
    constructor(
        @Inject('IActorsRepository')
        private readonly actorRepository: IActorsRepository,
    ) { }

    async findAll(): Promise<Actor[]> {
        return await this.actorRepository.findAll();
    }

    async findById(id: number): Promise<Actor> {
        return await this.actorRepository.findById(id);
    }

    async create(product: ActorDto): Promise<Actor> {
        return await this.actorRepository.create(product);
    }

    async update(id: number, product: ActorDto): Promise<Actor> {
        return await this.actorRepository.update(id, product);
    }

    async delete(id: number): Promise<boolean> {
        return await this.actorRepository.delete(id);
    }
}
