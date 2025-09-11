import {Request, Response} from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET || 'PenaltiFoiPIX';

interface LoginUser {
    id: number;
    email: string;
    senha: string;
    nome: string;
}

export class AuthController {
    private users: LoginUser[] = [];

    async registro(req: Request, res: Response): Promise<Response> {
        const { nome, senha, email } = req.body;

        if(!nome || !email || !senha) {
            return res.status(400).json({mensagem: 'Faz direito'});
        }

        const usuarioExistente = this.users.find(u => u.email === email);
        if (usuarioExistente) {
            return res.status(400).json({mensagem: 'Usuario ja existe'});
        }

        const senhaHash = await bcrypt.hash(senha, 10);
        const novoUsuario: LoginUser = {
            id: this.users.length + 1,
            nome,
            email,
            senha: senhaHash
        };

        this.users.push(novoUsuario);
        return res.status(201).json({ mensagem: 'Usuario Criado!'});
    }

    async login(req: Request, res: Response): Promise<Response> {
        const { email, senha } = req.body;

        // TODO Validar se os campos informados são validos

        const usuario = this.users.find(u => u.email === email);
        if(!usuario) {
            return res.status(401).json({ mensagem: "Deu ruim"})
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            return res.status(401).json({ mensagem: "Deu ruim"})
        }

        const token = jwt.sign(
            { nomeFulano: usuario.nome},
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.json({ token: token });
    }
}