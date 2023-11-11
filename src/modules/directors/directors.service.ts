import { Inject, Injectable } from '@nestjs/common';
import { DirectorDto } from 'src/dto/director.dto';
import { IDirectorsRepository } from 'src/interfaces/IDirectorsRepository.interface';
import { Director } from 'src/models/Director.model';

@Injectable()
export class DirectorsService {
    constructor(
        @Inject('IDirectorsRepository')
        private readonly directorsRepository: IDirectorsRepository,
    ) { }

    async findAll(): Promise<Director[]> {
        return await this.directorsRepository.findAll();
    }

    async findById(id: number): Promise<Director> {
        return await this.directorsRepository.findById(id);
    }

    async create(product: DirectorDto): Promise<Director> {
        return await this.directorsRepository.create(product);
    }

    async update(id: number, product: DirectorDto): Promise<Director> {
        return await this.directorsRepository.update(id, product);
    }

    async delete(id: number): Promise<boolean> {
        return await this.directorsRepository.delete(id);
    }
}
