import {DataTypes, Model} from 'sequelize';
import { sequelize } from '../config/database';

export interface AlunoAttributes {
    id?: number;
    ra: string;
    nome: string;
    email: string;
}

export class Aluno extends Model<AlunoAttributes> implements AlunoAttributes{
    public id!: number;
    public ra!: string;
    public nome!: string;
    public email!: string;
}

Aluno.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ra: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Aluno',
    tableName: 'Aluno' 
});