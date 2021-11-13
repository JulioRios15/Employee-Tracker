import mysql from 'mysql2';
import {promptConfirm, IConfirmAnswer} from '../inquirer/prompts/promptConfirm';
import {promptConfig, IConfigAnswers} from '../inquirer/prompts/promptConfig';
import utils from '../utils';

async function init(){
    const configData:IConfigAnswers = await promptConfig();

    // extract data from config prompt
    const host = configData.host;
    const user = configData.user;
    const password = configData.password;
    const databaseName = configData.databaseName;
    
    // Create .env file with user input
    const envMarkdown = utils.generateEnvMarkdown(host, user, password, databaseName);
    utils.createEnvFile(envMarkdown);

    //prompt a confirm to execute default database schema
    const schemaConfirmMessage = `Do you want to create default schema for database "${databaseName}"?`
    const runDbSchemaConfrim: IConfirmAnswer = await promptConfirm(schemaConfirmMessage);

    if(runDbSchemaConfrim.confirm == true){

        // execute database schema
        const schemaResponse = await utils.createDatabaseSchema(databaseName, password, host, user);

        // return on sql server reject to created schema
        if(schemaResponse == null) return;
        
        //prompt a confirm message to seed the database we just created
        const seedsConfirmMessage = `Do you want to seed "${databaseName}" database?`;
        const seedsConfirm: IConfirmAnswer = await promptConfirm(seedsConfirmMessage);

        if (seedsConfirm.confirm == true){
           
            //seed the database with our default seeds
           await utils.seedDatabase(databaseName, password, host, user);

        }
    } 
}

init();