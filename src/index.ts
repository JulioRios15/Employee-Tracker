import mysql from 'mysql2';
import dbConfig from './config/database';
import {MenuOptions} from './inquirer/config/mainMenuConfig';
import inquirerPrompts from './inquirer';
import eventHandlers from './eventHandlers/';

async function init(){
    
    //Initialize Database Connection
    const connection = mysql.createConnection(dbConfig);

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
            case MenuOptions.ViewUtilizedBudget:
                await eventHandlers.handleUtilizedBudget(connection);
                    break
        
            default:
                console.log("---------Not Implemented---------");              
                break;
        }

        mainMenuAnswers = await inquirerPrompts.promptMainMenu();
    }

    // End the sql server connection
    connection.end();  
}

init();








