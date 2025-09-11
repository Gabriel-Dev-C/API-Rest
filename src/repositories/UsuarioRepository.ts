import {Usuario, UsuarioAttributes} from '../models/Usuario';

export class UsuarioRepository {
    async findByEmail(email: string): Promise<Usuario | null> {
        return await Usuario.findOne({where: {email}});
    }

    async create(usuario: Omit<UsuarioAttributes, 'id'>): Promise<Usuario> {
        return await Usuario.create(usuario);
    }
}