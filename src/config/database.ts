import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Caminho do arquivo do banco
  logging: false, // Opcional: desativa logs SQL
});

export default sequelize;