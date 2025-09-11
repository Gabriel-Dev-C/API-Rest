import { Aluno, AlunoAttributes } from '../models/Aluno';

export class AlunoRepository {
    async findAll(): Promise<Aluno[] | null> {
        return await Aluno.findAll();
    }
} 