import dbConfig from './config/database';
import {MenuOptions} from './inquirer/config/mainMenuConfig';
import inquirerPrompts from './inquirer/prompts';
import {promptConfig, IConfigAnswers} from './inquirer/prompts/promptConfig';
import {promptConfirm, IConfirmAnswer} from './inquirer/prompts/promptConfirm';
import eventHandlers from './eventHandlers/';
import database from './database';
import { Connection } from 'mysql2/';
import dotenv from 'dotenv';
import utils from "./utils";

async function init(){
        
        //initialize database configuration prompts
        await initSetup();

        //Initialize Database Connection
        const connection = database.createConnection(dbConfig);
        
        //Starts our application
        await startMainMenu(connection);

        // End the sql server connection
        database.endConnection();
}

async function initSetup(){
        const isDotenvCreated = utils.isDotenvCreated();
        if(isDotenvCreated) return;

        const dotenvConfirm: IConfirmAnswer = await promptConfirm("Do you desire to create a .env file for database config?");

        if(dotenvConfirm.confirm == true){
                await generateEnvFile();

                const rundbSchemaConfrim: IConfirmAnswer = await promptConfirm("Do you desire create Local datababse?");

                if(rundbSchemaConfrim.confirm == true){
                      //TODO: create Local database 
                      dotenv.config();  
                      const databaseName = process.env.DATABASE;
                      const password = process.env.PASSWORD;

                      console.log("db name",databaseName);
                      console.log("pass", password);
                      
                      await utils.createLocalDatabase(databaseName, password, "root");                                         
                }
        } 
                
}

async function generateEnvFile(){
        const configData:IConfigAnswers = await promptConfig();

        if(configData == null) return;

        const databaseName = configData.databaseName;
        const password = configData.password;
        const envMarkdown = utils.generateEnvMarkdown(databaseName, password);

        utils.createEnvFile(envMarkdown);
}

async function startMainMenu(connection: Connection) {
        //Prompts main menu and retruns user inquirer promise answer | error
        let mainMenuAnswers: any = await inquirerPrompts.promptMainMenu();   

        //If the choice is not "Close Application", Continue
        while ((mainMenuAnswers.menuOption !== MenuOptions.CloseApplication) == true) {
                
                //User Main Menu Choice
                const MenuOption: String = mainMenuAnswers.menuOption;
                
                //Switch based on the user choice selection
                switch (MenuOption) {
                        case MenuOptions.ViewAllEmployees: 
                                await eventHandlers.handleViewAllEmployees(connection);
                                break;
                        case MenuOptions.ViewEmployeeByDepartment: 
                                await eventHandlers.handleViewEmployeesByDepartment(connection);
                                break
                        case MenuOptions.ViewUtilizedBudget:
                                await eventHandlers.handleViewUtilizedBudget(connection);
                                break
                        case MenuOptions.AddEmployee:
                                await eventHandlers.handleAddEmployee(connection);
                                break;
                        case MenuOptions.AddEmployeeRole:
                                await eventHandlers.handleAddEmployeeRole(connection);
                                break
                        case MenuOptions.RemoveEmployee:
                                await eventHandlers.handleRemoveEmployee(connection);
                                break;
                        case MenuOptions.UpdateEmployeeRole:
                                await eventHandlers.handleUpdateEmployeeRole(connection);
                                break
                        case MenuOptions.AddDepartment: 
                                await eventHandlers.handleAddDepartment(connection);
                                break
                
                        default:
                                console.log("---------Not Yet Implemented---------");              
                                break;
                }
        
                mainMenuAnswers = await inquirerPrompts.promptMainMenu();
            }
}

init();








