import mysql from 'mysql2';
import cTable from 'console.table';
import dbConfig from './config/db';
import inquirerUtils from './utils/inquirer';
import {promptMainMenu} from './inquirer';
import {getALlEmployees} from './utils/db/query';

async function init(){
    //Initialize Database Connection
    const connection = mysql.createConnection(dbConfig);

    //Main Menu Choice
    let mainMenuAnswers: any = await promptMainMenu(inquirerUtils.mainMenuQuestion);   

    //If the choice is not "Close Application", Continue
    while ((mainMenuAnswers.menuOption !== "Close Application") == true) {
        
        //User Main Menu Coice
        const MenuOption: String = mainMenuAnswers.menuOption;
        
        //Switch based on the user choice selection
        switch (MenuOption) {
            case inquirerUtils.mainMenuChoices[0]: 
                const employees = await getALlEmployees(connection);
                const employeeTable = cTable.getTable(employees)              
                console.log(employeeTable);
                  
                break;
        
            default:
                console.log("---------Not Implemented---------");
                
                break;
        }

        mainMenuAnswers = await promptMainMenu(inquirerUtils.mainMenuQuestion);
    }

    // End the sql server connection
    connection.end();  
}

init();








