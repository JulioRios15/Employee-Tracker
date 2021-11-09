import {createConnection} from 'mysql2';
import dbConfig from './config/db';
import {getAllDepartments, getALlEmployees} from './utils/db/query';

async function init(){
    //Database Connection
    const connection = createConnection(dbConfig);
}

init();








