import { Dialect } from 'sequelize';

type IConfig = {
  username: string;
  password: string;
  host: string;
  database: string;
  port: number;
  dialect: Dialect;
  logging?: boolean;
  dialectOptions: Record<string, unknown>;
};

const config: IConfig = {
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'Password!',
  host: process.env.DB_HOSTNAME || 'localhost',
  database: process.env.DB_NAME || '',
  port: parseInt(process.env.DB_PORT || '') || 1433,
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false, // very important
    }
  }
};

export default config;
