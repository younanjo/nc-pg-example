import { QueryTypes } from 'sequelize';
import db from './db';

// If for example users table schema looked like:

// CREATE TABLE users (
// 	user_id serial PRIMARY KEY,
// 	username VARCHAR ( 50 ) UNIQUE NOT NULL,
// 	password VARCHAR ( 50 ) NOT NULL,
// 	email VARCHAR ( 255 ) UNIQUE NOT NULL,
// 	created_on TIMESTAMP NOT NULL
// );

async function getUserById(userId: string): Promise<any> {
  return db.query(
    `
  SELECT * from users where user_id = :userId;
  `,
    {
      replacements: {
        userId,
      },
      type: QueryTypes.SELECT,
      raw: true,
      // return only one row since we know user id is unique
      plain: true,
    }
  );
}

export default getUserById;
