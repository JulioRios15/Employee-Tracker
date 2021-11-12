import {generateEnvMarkdown, generateSchemaMarkdown} from "./markdown";
import {createEnvFile} from "./fileManagement";
import mysql, {Connection} from 'mysql2';
import dotenv from 'dotenv';


const createLocalDatabase = async (databaseName: string, password: string, user: string ="root") => {
    const connection = mysql.createConnection({
        user,
        password
    });

    const schemaSQL = generateSchemaMarkdown(databaseName);
    await connection.promise().query(schemaSQL)
    .then(() => {
        console.log(`"${databaseName}" databse created`);
        
    })
    .catch(() => {
        console.log(`unable to created "${databaseName}" database`);
        
    });

    connection.end();
}

/**
 * 
 * @returns true if PASSWORD & DATABASE has value in root .env
 */
const isDotenvCreated = (): boolean => {
    dotenv.config();

    const password = process.env.PASSWORD;
    const database = process.env.DATABASE;    

    return (password === undefined || database === undefined)? false : true;  
}


export default {
    createLocalDatabase,
    generateSchemaMarkdown,
    generateEnvMarkdown,
    createEnvFile,
    isDotenvCreated
}