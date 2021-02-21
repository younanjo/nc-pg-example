import { Sequelize } from 'sequelize';
import { DB } from '../config';

const sequelize: Sequelize = new Sequelize(
  DB.database,
  DB.username,
  DB.password,
  DB
);

export default sequelize;
