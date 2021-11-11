import dbConfig from './config/database';
import {MenuOptions} from './inquirer/config/mainMenuConfig';
import inquirerPrompts from './inquirer/prompts';
import eventHandlers from './eventHandlers/';
import database from './database';

async function init(){
    
        //Initialize Database Connection
        const connection = database.createConnection(dbConfig);

        //Prompts main menu and retruns user inquirer promise answer | error
        let mainMenuAnswers: any = await inquirerPrompts.promptMainMenu();   

        //If the choice is not "Close Application", Continue
        while ((mainMenuAnswers.menuOption !== "Close Application") == true) {
        
        //User Main Menu Choice
        const MenuOption: String = mainMenuAnswers.menuOption;
        
        //Switch based on the user choice selection
        switch (MenuOption) {
                case MenuOptions.ViewAllEmployees: 
                        await eventHandlers.handleGetAllEmployees(connection);
                        break;
                case MenuOptions.ViewEmployeeByDepartment: 
                        await eventHandlers.handleGetEmployeesByDepartment(connection);
                        break
                case MenuOptions.AddEmployee:
                        await eventHandlers.handleAddEmployee(connection);
                        break;
                case MenuOptions.UpdateEmployeeRole:
                        await eventHandlers.handleUpdateEmployeeRole(connection);
                        break
                case MenuOptions.ViewUtilizedBudget:
                        await eventHandlers.handleUtilizedBudget(connection);
                        break
                case MenuOptions.AddDepartment: 
                        await eventHandlers.handleAddDepartment(connection);
                        break
        
                default:
                        console.log("---------Not Implemented---------");              
                        break;
        }

        mainMenuAnswers = await inquirerPrompts.promptMainMenu();
    }

    // End the sql server connection
    database.endConnection();
}

init();








