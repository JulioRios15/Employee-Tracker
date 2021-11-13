import dbConfig from './config/database';
import {MenuOptions} from './inquirer/config/mainMenuConfig';
import inquirerPrompts from './inquirer/prompts';
import eventHandlers from './eventHandlers/';
import database from './database';
import { Connection } from 'mysql2/';

async function init(){
        
        //Initialize Database Connection
        const connection = database.createConnection(dbConfig);
        
        //Starts our application
        await startMainMenu(connection);

        // End the sql server connection
        database.endConnection();
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








