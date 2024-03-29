import {promptConfirm, IConfirmAnswer} from '../inquirer/prompts/promptConfirm';
import utils from '../utils';
import setup from './setup';
import dotenv from 'dotenv';


async function init(){

    const envFileExist = utils.fileExist("./.env");

    if(envFileExist){
        dotenv.config();

        // extract data from .env
        const host = process.env.HOST;
        const user = process.env.USER;
        const password = process.env.PASSWORD;
        const databaseName = process.env.DATABASE;

        //run our defaults schema and seed
        await utils.createDatabaseSchema(databaseName, password, host, user);
        await utils.seedDatabase(databaseName, password, host, user);
    } else {
        console.log(`No .env file created for database connection config, run "npm run setup" script`);
        
    }
    
    
}

init();