import dotenv from 'dotenv';

const result = dotenv.config({
  path: process.env.DOTENV_PATH || '.env',
});

// Throw if .env is missing or has issues parsing
if (result.error) {
  console.error('DOTENV Error: are you missing .env file in root?');
  throw result.error;
}

import ENV from './env';
import DB from './db';

export { ENV, DB };
