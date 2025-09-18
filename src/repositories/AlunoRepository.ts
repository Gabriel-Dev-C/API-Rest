import { Aluno, AlunoAttributes } from '../models/Aluno';

export class AlunoRepository {
    async findAll(): Promise<Aluno[] | null> {
        return await Aluno.findAll();
    }

    async findByRA(ra: string): Promise<Aluno | null> {
        return await Aluno.findOne({ where: {ra}});
    }

    async create(aluno: Omit<AlunoAttributes, 'id'>): Promise<Aluno> {
        return await Aluno.create(aluno);
    }
} 