import {ConnectionOptions} from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const config: ConnectionOptions = {
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD || '123456',
    database: process.env.DATABASE ||'employee_tracker_db'
}

export default config;