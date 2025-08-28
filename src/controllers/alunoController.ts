import { Request, Response} from "express";

interface Aluno {
    ra: string;
    nome: string;
}

export class AlunoController {
    private alunos: Aluno[] = [];

    get(req: Request, res: Response): Response {
        return res.json(this.alunos);
    }

    post(req: Request, res: Response) : Response {
        const { ra, nome } = req.body;
        const novoAluno: Aluno = { ra: ra, nome: nome};

        this.alunos.push(novoAluno);
        
        return res.status(201).json(novoAluno);
    }

    put(req: Request, res: Response) : Response {
        const ra = req.params.ra;
        const alunoIndex = this.alunos.findIndex(a => a.ra == ra)
        
        if (alunoIndex > -1) {
            const { nome } = req.body;

            this.alunos[alunoIndex] = { ra: ra, nome: nome};
            return res.json({ ra: ra, nome: nome})
        } else {
            return res.status(404).json({"message": "assinou a chamada e vazou"})
        }
    }
}