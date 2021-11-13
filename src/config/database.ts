import {ConnectionOptions} from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const config: ConnectionOptions = {
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '123456',
    database: process.env.DATABASE ||'employee_tracker_db'
}

export default config;