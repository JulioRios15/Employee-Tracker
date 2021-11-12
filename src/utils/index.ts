import {generateEnvMarkdown, generateSchemaMarkdown} from "./markdown";
import {createEnvFile} from "./fileManagement";
import mysql, {Connection} from 'mysql2';
import dotenv from 'dotenv';


const createLocalDatabase = (databaseName: string): void => {

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
    generateSchemaMarkdown,
    generateEnvMarkdown,
    createEnvFile,
    isDotenvCreated
}