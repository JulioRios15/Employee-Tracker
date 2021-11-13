import {Connection} from 'mysql2'
import database from '../database';
import {promptAddEmployee} from '../inquirer/prompts/promptAddEmployee';
import {promptConfirm, IConfirmAnswer} from '../inquirer/prompts/promptConfirm';

export const handleAddEmployee = async (connection: Connection)  => {

    let addMoreEmployees: IConfirmAnswer = {"confirm": true};

    while (addMoreEmployees.confirm) {

        // prompt add new employee questions
        const addEmployeePromptData = await promptAddEmployee(connection);

        // we cant add new employees if no roles added to database
        if(addEmployeePromptData == null) {    
            return console.log("No Roles Added to database");     
        }

        // extract add employee prompt data from inquirer questions
        const firstName = addEmployeePromptData.firstName;
        const lastName = addEmployeePromptData.lastName;
        const employeeRole = addEmployeePromptData.employeeRole;
        const roleId: number = await database.query.getRoleIdByRoleTile(connection, employeeRole);
        
        // add new employee with extracted data from inquirer questions
        await database.insert.AddEmployee(connection,firstName, lastName, roleId);  
        
         // Ask the user to add more employees
        addMoreEmployees = await promptConfirm("Do you want to add another employee");
    }
}